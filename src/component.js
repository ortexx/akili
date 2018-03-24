import Akili from './akili.js';
import Scope from './scope.js';
import request from './services/request.js';
import store from './services/store.js';
import utils from './utils.js';

export const evaluationRegex = /\${(((?!\${).)*)}/;
export const evaluationRegexGlobal = new RegExp(evaluationRegex.source, "g");
export const systemAttributes = ['component', 'scope'];

/**
 * Base class from which all components are inherited
 */
export default class Component {
  static matches = '';
  static booleanAttributes = [];
  static events = [];
  static controlAttributes = false;
  static saveAttributeProxyIn = false;
  static saveAttributeProxyOut = false;
  static transparent = false;
  static template = '';
  static templateUrl = '';
  static scope = null;

  /**
   * Function to define the component
   */
  static define() {
    Akili.component('component', Component);
  }

  /**
   * Parse the expression
   *
   * @param {object} context
   * @param {string} expression
   * @param {object} [globals]
   */
  static parse(context, expression, globals = {}) {
    globals = { utils, ...Akili.options.globals, ...globals};
    const keys = [];
    const vars = [];
    const exps = utils.split(expression.trim(), ';', ['"', "'", '`']);  
    exps[exps.length - 1] = `return ${exps[exps.length - 1]}`;

    for(let key in globals) {
      keys.push(key);
      vars.push(globals[key]);
    }

    return new Function(...keys, `${exps.join('; ')}`).apply(context, vars);
  }

  /**
   * Constructor
   * 
   * @param {Element} el 
   * @param {object} [scope] 
   */
  constructor(el, scope = {}) {
    if(!(el instanceof Element)) {
      throw new Error(`You must pass an html element to the component constructor`);
    }

    this.__isMounted = false;
    this.__isCompiled = false;
    this.__isResolved = false;
    this.__cancelled = false;
    this.__prevent = false;
    this.__bindings = {};
    this.__evaluatingEvent = null;
    this.__recompiling = null;
    this.__compiling = {};
    this.__disableProxy = {};
    this.__disableAttrTriggering = false;
    this.__children = [];
    this.__parent = null;
    this.__parents = [];
    this.__attrs = {};
    this.__attrLinks = {};
    this.__storeLinks = {};
    this.__attributeOf = null;
    this.__evaluationComponent = this;
    this.scope = scope;
    this.el = el;
  }

  /**
   * Called on the recompilation
   *
   * @protected
   */
  __recompile() {
    this.__isMounted = false;
    this.__evaluationComponent.__disableProxy = {};
    this.__compiling = {};
    this.__recompiling = {};
    this.__setEvents();
    this.__setParents();
    this.__setBooleanAttributes();
    this.__defineAttributes();
  }

  /**
   * Called on the creation
   *
   * @protected
   */
  __create() {
    this.__initialize();
    this.__setEvents();
    this.__setParents();
    this.__setBooleanAttributes();
    this.__defineAttributes();
    Akili.isolate(() => this.created(this.attrs));       
  }

  /**
   * Called on the compilation
   *
   * @protected
   * @returns {Promise}
   */
  __compile() {
    let control = this.__controlAttributes || !this.__evaluateParent;
    let p = Promise.resolve();
    this.__attributeOf = control? this: this.__evaluateParent.__akili;

    if (!this.__recompiling || this.__compiling.newParent || this.__controlAttributes) {
      this.__interpolateAttributes(this.el, this.__attributeOf);
    }

    const interpolate = (children, parent) => {
      for (let i = 0, l = children.length; i < l; i++) {
        let child = children[i];

        if (child.nodeType == 3) {
          this.__initializeNode(child, parent);

          child.nodeValue = this.__evaluate(child);
        }
        else if (child.nodeType == 1 && !child.__akili) {
          this.__interpolateAttributes(child);
          interpolate(child.childNodes, child);
        }
      }
    };

    interpolate(this.el.childNodes, this.el);
    this.__isMounted = true;
    let res;

    if (!this.__recompiling) {
      res = Akili.isolate(() => {
        this.attrs.onCompiled && this.attrs.onCompiled.trigger(undefined, { bubbles: false });
        return this.compiled();
      });

      if (this.constructor.templateUrl) {
        p = request.get(this.constructor.templateUrl, { cache: this.constructor.templateCache }).then((res) => {
          this.el.innerHTML = this.__content;
          Akili.setTemplate(this.el, res.data);
          delete this.__content;
          return Akili.compile(this.el, { recompile: true });
        });
      }
    }
    else {
      Akili.isolate(() => {
        this.attrs.onRecompiled && this.attrs.onRecompiled.trigger(undefined, { bubbles: false });
        this.recompiled();
      });
    }
    
    this.__recompiling = null;
    this.__compiling = null;

    return p.then(() => {
      this.__isCompiled = true;
      return res;
    });
  }

  /**
   * Resolve the component
   *
   * @protected
   * @returns {Promise}
   */
  __resolve() {
    if (this.__recompiling) {
      return Promise.resolve();
    }
    
    this.attrs.onResolved && this.attrs.onResolved.trigger(undefined, { bubbles: false });

    return Promise.resolve(this.resolved()).then(res => {
      this.__isResolved = true;
      return res;
    });
  }

  /**
   * Part of the {@see Component#__compile} method
   *
   * @protected
   */
  __initialize() {    
    let parent = Akili.getAkiliParents(this.el, false);     
    let Scope = this.constructor.scope || Akili.Scope;
    let scope;
    let isRoot = Akili.__root === this.el;
    this.el.__akili = this;

    if (parent) {
      scope = new Scope(this.el.getAttribute('scope') || Akili.createScopeName(), this.el, this);
    }
    else {
      scope = new Scope(isRoot? 'root': Akili.createScopeName(), this.el, this);
      isRoot && (Akili.root = this);
    }

    let __scope = scope;
    let _scope = Object.assign(scope, this.scope);
    let controlAttributes = this.constructor.controlAttributes;
    let events = this.constructor.events;

    if (this.constructor.template) {
      Akili.setTemplate(this.el, this.constructor.template);
    }

    if (this.constructor.templateUrl) {
      this.__content = this.el.innerHTML;
      this.el.innerHTML = '';
    }

    this.__scope = __scope;
    this.__events = events;
    this.__controlAttributes = controlAttributes;
    this.__saveAttributeProxyIn = this.constructor.saveAttributeProxyIn;
    this.__saveAttributeProxyOut = this.constructor.saveAttributeProxyOut;

    Akili.addScope(scope);
    this.scope = this.__nestedObserve(_scope, []);
    return true;
  }

  /**
   * Set boolean attributes
   *
   * @protected
   */
  __setBooleanAttributes() {
    this.booleanAttributes = [].concat(Akili.htmlBooleanAttributes, this.constructor.booleanAttributes);

    const setAttr = (el) => {
      for (let i = 0, attrs = el.attributes, l = attrs.length; i < l; i++) {
        let node = attrs[i];

        if (this.booleanAttributes.indexOf(node.nodeName) != -1) {
          if (el.hasAttribute(`boolean-${node.nodeName}`)) {
            continue;
          }

          el.setAttribute(`boolean-${node.nodeName}`, el.getAttribute(node.nodeName) || node.nodeName);
          el.removeAttribute(node.nodeName);
        }
      }

      for (let i = 0, l = el.children.length; i < l; i++) {
        let child = el.children[i];

        if (!child.__akili) {
          setAttr(child);
        }
      }
    };

    setAttr(this.el);
  }

  /**
   * Set events
   *
   * @protected
   */
  __setEvents() {
    for (let i = 0, l = this.__events.length; i < l; i++) {
      let ev = this.__events[i];
      !/^on-/i.test(ev) && (ev = 'on-' + ev);

      if (!this.el.hasAttribute(ev)) {
        this.el.setAttribute(ev, '');
      }
    }
  }

  /**
   * Set component parents
   *
   * @protected
   */
  __setParents() {
    let parents = Akili.getAkiliParents(this.el);

    if (!parents.length) {
      return;
    }

    let newParent = this.__parent !== parents[0];
    let evaluateParent = null;

    for (let i = 0, l = parents.length; i < l; i++) {
      let parent = parents[i];

      if (!parent.__akili.constructor.transparent) {
        evaluateParent = parent;

        break;
      }
    }

    this.__compiling.newParent = newParent;
    newParent && this.__detach();

    if (this.constructor.transparent) {
      this.__evaluationComponent = evaluateParent.__akili;
    }

    this.__evaluateParent = evaluateParent;
    this.__parent = parents[0];
    this.__parents = parents;
    this.scope.__parent = this.__evaluateParent.__akili.scope;
    !this.__recompiling && this.__parent.__akili.__addChild(this.el);
    Object.setPrototypeOf(this.scope, this.__parent.__akili.__scope);
  }

  /**
   * Add child element to the list
   *
   * @param {Element} el
   * @protected
   */
  __addChild(el) {
    this.__children.push(el);
  }

  /**
   * Splice child from the list
   *
   * @param {Element} el
   * @protected
   */
  __spliceChild(el) {
    for (let i = 0, l = this.__children.length; i < l; i++) {
      let child = this.__children[i];

      if (child === el) {
        this.__children.splice(i, 1);
        i--;
        l--;
      }
    }
  }

  /**
   * You can change expression before parsing here
   *
   * @param {string} expression
   * @returns {*}
   * @protected
   */
  __getParsedExpression(expression) {
    return expression;
  }

  /**
   * Check node has any property changes or not
   *
   * @param {Node} node
   * @returns {boolean}
   * @protected
   */
  __checkEvaluation(node) {
    if (!Object.keys(node.__properties).length) {
      return true;
    }

    for (let k in node.__properties) {
      if (!node.__properties.hasOwnProperty(k)) {
        continue;
      }

      let prop = node.__properties[k];
      let value = utils.getPropertyByKeys(prop.keys, prop.component.__scope);

      if (!utils.comparePreviousValue(value, prop.value, prop.copy)) {
        return true;
      }
    }

    return false;
  }

  /**
   *  Check node has changed on the certain keys
   *
   * @param {Node} node
   * @param {string[]} keys
   * @param {*} value
   * @returns {boolean}
   * @protected
   */
  __checkNodePropertyChanging(node, keys, value) {
    let prop = this.__getNodeProperty(node, keys);
    
    if (!prop) {
      return true;
    }

    return !utils.comparePreviousValue(value, prop.value, prop.copy);
  }

  /**
   * Evaluate node expression
   *
   * @param {Node} node
   * @returns {*}
   * @protected
   */
  __evaluate(node) {
    let counter = 0;
    let attributeValue;
    let expression;

    if (node.__component.parents((com) => com.__prevent).length) {
      return node.__expression;
    }

    if (!(node instanceof window.Attr) && node.__component.__prevent) {
      return node.__expression;
    }
    
    let res = node.__expression.replace(evaluationRegexGlobal, (m, d) => {
      counter++;
      let evaluate;
      let evaluation = [];
      let existingBindings = {};
      let parseValue = node.__component.__getParsedExpression(d);
      Akili.__evaluation = { node: node, list: [], component: node.__component };
      
      try {
        evaluate = this.constructor.parse(this.__evaluationComponent.scope, parseValue);
      }
      catch (err) {
        let tagName = node.__component.el.tagName;
        let attrName = node.__component.el.getAttribute('component');
        let componentName = (attrName || tagName).toLowerCase();
        let elementName = node.__element.tagName.toLowerCase();
        let attributeName = (node instanceof window.Attr)? node.name.toLowerCase(): '';        
        let messages =  [ err.message, node.__expression.trim() ];
        attributeName && messages.push(`[attribute ${attributeName}]`);
        messages = messages.concat([ `[element ${elementName}]`, `[component ${componentName}]` ]);
        throw `Expression error: ` + messages.join('\n\tat ');
      }

      if(Akili.__evaluation) {
        evaluation = Akili.__evaluation.list;
        Akili.__evaluation.list = null;
        Akili.__evaluation = null;
      }
      
      for (let i = evaluation.length - 1; i >= 0; i--) {
        let data = evaluation[i];
        let hash = this.__createKeysHash(data.keys);
       
        if (data.notBinding) {
          continue;
        }

        if (existingBindings[hash]) {
          continue;
        }

        let parentValue = utils.getPropertyByKeys(data.parents, data.component.__scope);
        let evalComponent = node.__attributeOf || node.__component;
                
        if (
          utils.isScopeProxy(parentValue) && 
          data.component !== evalComponent.__evaluationComponent && 
          data.component === data.realComponent
        ) {
          continue;
        }   

        let bind = data.component.__getBoundNode(data.keys, node);
        let value = utils.getPropertyByKeys(data.keys, data.component.__scope);

        if (!bind) {
          data.component.__bind(data.keys, { node: node });
        }

        data.component.__setNodeProperty(node, data.keys, value, data.evaluated);
        existingBindings[hash] = true;
      }

      existingBindings = null;
      evaluation = null;

      if (node instanceof window.Attr) {
        expression = m;
        attributeValue = evaluate;
        return utils.makeAttributeValue(evaluate);
      }

      if (typeof evaluate == 'object') {
        try {
          return JSON.stringify(evaluate);
        }
        catch(e) {
          return evaluate;
        }
      }

      return evaluate;
    });

    if (node instanceof window.Attr) {
      let value = res;
      let isBooleanAttribute = false;

      if (counter) {
        node.__hasBindings = true;
      }

      if (counter == 1 && expression && node.__expression == expression) {
        value = attributeValue;
      }

      let clearAttribute = node.nodeName.replace(/^boolean-(.+)/i, '$1');
      let camelAttribute = utils.toCamelCase(clearAttribute);

      if (clearAttribute != node.nodeName) {
        isBooleanAttribute = true;
        value = !!value;
      }          

      if (node.__attributeOn) {        
        let component = node.__attributeOn;
        !component.__saveAttributeProxyIn && (value = utils.copy(value));
        component.__disableAttributeSetter = true;
        component.attrs[camelAttribute] = value;
        component.__disableAttributeSetter = false;

        if (component.__isMounted) {
          component.__attrTriggerByName(camelAttribute, value);
        }
      }
      else if (isBooleanAttribute) {
        let element = node.__element;
        value? element.setAttribute(camelAttribute, 'true'): element.removeAttribute(camelAttribute);
      }
    }

    return res;
  }

  /**
   * Nested evaluation by keys
   *
   * @param {string[]} keys
   * @param {boolean} [withoutParents=false] - if true evaluation will be only for the current keys
   * @protected
   */
  __evaluateNested(keys, withoutParents = false) {
    let scope = this.__scope;
    let props = [];    
    
    if (!withoutParents) {
      let lastProps = [];

      for (let i = 0, l = keys.length; i < l; i++) {
        let key = keys[i];
        let value;

        lastProps = [...lastProps, key];
        value = utils.getPropertyByKeys(lastProps, scope);
        props.push({ keys: lastProps, value: value});
      }
    }
    else {
      props.push({ keys: keys, value: utils.getPropertyByKeys(keys, scope)});
    }

    let propsLength = props.length;

    const elEvaluate = (element) => {
      const component = element.__akili;     

      for (let m = 0; m < propsLength; m++) {
        let prop = props[m];
        let data = component.__getBind(prop.keys);
        
        if (!data || !data.__data) {
          continue;
        }
         
        for (let k = 0, c = data.__data.length; k < c; k++) {
          let bind = data.__data[k]; 
 
          if (component.__checkNodePropertyChanging(bind.node, prop.keys, prop.value)) {     
            component.__disableKeys(prop.keys);
            let checkProp = component.__getNodeProperty(bind.node, prop.keys);            
            checkProp && checkProp.evaluated && component.scope.__set(prop.keys, prop.value, false, true);                       
            component.__evaluateNode(bind.node, false);
            
            for (let _k in bind.node.__properties) {
              if (!bind.node.__properties.hasOwnProperty(_k)) {
                continue;
              }
              
              let _prop = bind.node.__properties[_k];
              let value = utils.getPropertyByKeys(_prop.keys, _prop.component.__scope);
              _prop.component.__setNodeProperty(bind.node, _prop.keys, value);
            }
            
            component.__enableKeys(prop.keys);
          }
        }
      }

      return component;
    };

    const evaluate = (elements) => {
      for (let i = 0, l = elements.length; i < l; i++) {
        let component = elEvaluate(elements[i]);
        evaluate(component.__children);
      }
    };

    elEvaluate(this.el);
    evaluate(this.__children);
  }  

  /**
   * Evaluate value by keys
   *
   * @param {string[]} keys
   * @param {*} value
   * @param {boolean} [isDeleted=false] - true if value is deleting
   * @protected
   */
  __evaluateByKeys(keys, value, isDeleted = false) {     
    let data = this.__getBind(keys);

    const unbind = (obj, parents) => {
      for (let k in obj) {
        if (!obj.hasOwnProperty(k) || this.__isSystemBindingKey(k)) {
          continue;
        }

        let _keys = [].concat(parents, [k]);
        let __keys = _keys.slice();
        let _isDeleted = false;
        let val = obj[k];
        let hasKey;
        
        __keys.shift();
        hasKey = utils.hasPropertyByKeys(__keys, value);

        if (value && typeof value == 'object' && !hasKey) {
          _isDeleted = true;
        }

        if (val && typeof val == 'object') {
          unbind(val, _keys);
        }
        
        this.__evaluateNested(_keys, true);

        if (value === null || typeof value != 'object' || !hasKey) {
          this.__unbind(_keys);
          _isDeleted && utils.deletePropertyByKeys(__keys, value);
        }
      }
    };
    
    data && unbind(data, [].concat(keys));
    this.__evaluateNested(keys);

    if (isDeleted) {
      this.__unbind(keys);
      isDeleted && utils.deletePropertyByKeys(keys, this.__scope);
    }
  }

  /**
   * Evaluate event expression
   *
   * @param {Node} node
   * @param {Element} el
   * @param {Event} e
   * @protected
   */
  __evaluateEvent(node, el, e) {
    let expression = evaluationRegex.exec(node.__expression);
    let evaluate;

    if (!expression) {
      return;
    }

    this.__evaluatingEvent = {
      el: el,
      component: this,
      event: e,
      node: node
    };

    this.__disableProxy = {};
    evaluate = this.constructor.parse(this.__evaluationComponent.scope, expression[1], { event: e });
    this.__evaluatingEvent = null;

    return evaluate;
  }

  /**
   * Check changes and evaluate the passed node
   *
   * @param {Node} node
   * @param {boolean} [check]
   * @protected
   */
  __evaluateNode(node, check = true) {
    if (check? this.__checkEvaluation(node): true) {      
      let key = node instanceof window.Attr? 'value': 'nodeValue';
      let res = this.__evaluate(node);     
      node[key] != res && (node[key] = res);
    }
  }

  /**
   * Attribute node initializing
   *
   * @param {Node} node
   * @param {Element} el
   * @param {Component} attributeOf - if node is linked with parent scope
   * @protected
   */
  __initializeAttribute(node, el, attributeOf) {
    if (systemAttributes.indexOf(node.nodeName) != -1) {
      return;
    }

    this.__initializeNode(node, el);
    let eventName = node.nodeName.replace(/^on-(.+)/i, '$1');
    let nodeName = utils.toCamelCase(node.nodeName);
    let component = attributeOf? attributeOf: this;

    if (eventName != node.nodeName) {
      if (node.__event) {
        return;
      }

      let emitter = new Akili.EventEmitter(eventName, el, component);

      if (node.__expression) {
        emitter.bind((e) => {
          return component.__evaluateEvent(node, el, e);
        });
      }

      node.__event = emitter;
      el.setAttribute(node.nodeName, utils.makeAttributeValue(emitter));

      if (attributeOf) {
        this.__disableAttributeSetter = true;
        this.attrs[nodeName] = emitter;
        this.__disableAttributeSetter = false;
      }

      return;
    }

    if (attributeOf) {
      node.__attributeOn = this;
      node.__attributeOf = component;
    }

    el.setAttribute(node.nodeName, component.__evaluate(node));
  }

  /**
   * Initialize the node
   *
   * @param {Node} node
   * @param {Element} el
   * @returns {boolean}
   * @protected
   */
  __initializeNode(node, el) {
    if (node.__initialized) {
      return false;
    }

    node.__expression = node[(node instanceof window.Attr)? 'value': 'nodeValue'];
    node.__properties = {};
    node.__attributeOf = null;
    node.__attributeOn = null;
    node.__event = null;
    node.__hasBindings = false;
    node.__initialized = true;
    node.__component = this;
    node.__element = el;

    return true;
  }

  /**
   * Interpolate attributes of the element
   *
   * @param {Element} el
   * @param {Component} [attributeOf=null] - if node is linked with parent scope
   * @protected
   */
  __interpolateAttributes(el, attributeOf = null) {
    for (let i = 0, attrs = el.attributes, l = attrs.length; i < l; i++) {
      this.__initializeAttribute(attrs[i], el, attributeOf);
    }
  }

  /**
   * Define attributes as proxy
   *
   * @protected
   */
  __defineAttributes() {
    const changeAttribute = (key, value, isDeleted = false) => {
      if (this.__disableAttributeSetter) {
        return;
      }

      let node = this.el.getAttributeNode(key);

      if (node) {
        if (node.__event) {
          node.__event.unbind();
          node.__event = null;
          node.__expression = value;
        }

        if (node.__hasBindings) {
          this.__parent && this.__parent.__akili.__evaluationComponent.__unbindByNodes([node]);
          node.__hasBindings = false;
          node.__expression = value;
        }
      }

      if (isDeleted) {
        this.el.removeAttribute(key);
      }
      else if (node) {
        node.value = value;
      }
      else {
        this.el.setAttribute(key, value);
      }
    };

    this.attrs = new Proxy(this.__attrs, {
      get: (target, key) => {
        if (key == '__isProxy') {
          return true;
        }

        return target[key];
      },
      set: (target, key, value) => {
        let attrKey = utils.toDashCase(key);

        if (this.booleanAttributes.indexOf(attrKey) != -1) {
          attrKey = `boolean-${attrKey}`;

          if (value) {
            this.el.setAttribute(key, value);
          }
          else {
            this.el.removeAttribute(key);
          }
        }

        target[key] = value;
        changeAttribute(attrKey, utils.makeAttributeValue(value));
        return true;
      },
      deleteProperty: (target, key, value) => {
        let attrKey = utils.toDashCase(key);
        changeAttribute(attrKey, utils.makeAttributeValue(value), true);
        delete target[key];
        return true;
      }
    });
  }

  /**
   * Set proxy to object
   *
   * @param {object} obj
   * @param {string[]} parents
   * @returns {Proxy}
   * @protected
   */
  __observe(obj, parents) {
    return new Proxy(obj, {
      get: (target, key) => { 
        if (key == "__isProxy") {
          return true;
        }

        if (key == "__target") {
          return obj;
        }

        if (key == "__component") {
          return this;
        }

        if (key == "__keys") {
          return parents;
        }
        
        if (this.__isSystemKey(key)) {
          return target[key];
        }

        if (typeof target[key] === 'function') {
          let realTarget  = utils.getOwnPropertyTarget(target, key);

          if (!utils.isPlainObject(realTarget)) {
            realTarget[key] = Akili.isolateFunction(realTarget[key]);
          }
        }

        if (Akili.__evaluation) {  
          let keys = [].concat(parents, [key]);
          let notBinding = false;
          let evaluated = !utils.hasPropertyByKeys(keys, this.__scope); 
          let component = this;
          let excArr = keys.slice();

          if(target instanceof Scope) {
            let realTarget = utils.getOwnPropertyTarget(target, key);
            realTarget && (realTarget instanceof Scope) && (component =  realTarget.__component);
          } 

          const forParents = Akili.__evaluation.component.parents(c => c instanceof Akili.components.For);

          for(let i = 0, l = forParents.length; i < l; i++) {
            for(let k = 0, c = keys.length; k < c; k++) { 
              const forData = forParents[i].data;
              const data = utils.getPropertyByKeys(excArr, component.__scope);

              if(data && typeof data == 'object' && forData === data) {
                return target[key];
              }
  
              excArr.pop();
            }
          }  

          if (!(key in target)) {
            target[key] = undefined;
          }          
          else if (!utils.getEnumerablePropertyTarget(target, key)) {
            notBinding = true;
          }

          this.__bindNode(Akili.__evaluation.list, component, keys, parents, target[key], notBinding, evaluated);
          return target[key];
        }

        return target[key];
      },
      set: (target, key, value) => { 
        if (this.__isSystemKey(key)) {
          target[key] = value;
          return true;
        }

        let keys = [].concat(parents, [key]);

        if (this.__checkDisablement(keys)) {
          target[key] = value;
          return true;
        }

        let keyString = Akili.joinBindingKeys(keys);

        CHECK_EXISTENCE: if(parents.length > 0) {
          let targetParentValue = parents.length > 1? utils.getPropertyByKeys(parents.slice(0, -1), this.__scope): this.__scope;
          
          for(let k in targetParentValue) {
            if(!targetParentValue.hasOwnProperty(k)) {
              continue;
            }

            if(targetParentValue[k] && targetParentValue[k].__target === target) {
              break CHECK_EXISTENCE;
            }
          }

          target[key] = value;
          return true;
        }
        
        if(this.__storeLinks[keyString]) {
          this.__storeTriggerByKeys(keys, value);
        }

        if(this.__attrLinks[keyString]) {
          this.__attrTriggerByKeys(keys, value);
        }

        target[key] = this.__nestedObserve(value, keys);
        
        if (Akili.__isolation) { 
          this.__createIsolationObject(parents, key, false);
          return true;
        }
        
        if (this.__isMounted) {                   
          this.__evaluateByKeys(keys, value);
        }

        return true;
      },
      deleteProperty: (target, key) => {
        let keys = [].concat(parents, [key]);

        if (this.__checkDisablement(keys)) {
          delete target[key];
          return true;
        }

        if (this.__isSystemKey(key)) {
          delete target[key];
          return true;
        }
        
        if (Akili.__isolation) {
          delete target[key];
          this.__createIsolationObject(parents, key, true);
          return true;
        }
        
        delete target[key];
        this.__evaluateByKeys(keys, undefined, true);
        return true;
      }
    });
  }

  /**
   * Create hash for the keys
   * 
   * @param {string[]} keys 
   * @returns {string}    
   * @protected
   */
  __createKeysHash(keys) {
    return `${this.__scope.__name}.${Akili.joinBindingKeys(keys)}`;
  }

  /**
   * Disable the keys setter
   * 
   * @param {string[]} keys    
   * @protected
   */
  __disableKeys(keys) {
    this.__disableProxy[keys? this.__createKeysHash(keys): '__all'] = true;
  }

  /**
   * Enable the keys setter
   * 
   * @param {string[]} keys    
   * @protected
   */
  __enableKeys(keys) {
    delete this.__disableProxy[keys? this.__createKeysHash(keys): '__all'];
  }

  /**
   * Check the keys setter disablemant
   * 
   * @param {string[]} keys    
   * @protected
   */
  __checkDisablement(keys) {
    return this.__disableProxy.__all? true: this.__disableProxy[this.__createKeysHash(keys)];
  }

  /**
   * Save the value to the store by the keys
   * 
   * @param {string[]} keys 
   * @param {*} value    
   * @protected
   */
  __storeTriggerByKeys(keys, value) {
    const links = this.__storeLinks[Akili.joinBindingKeys(keys)];
    
    if(!links || !links.length) {
      return;
    }

    value = utils.copy(value);
    this.__disableKeys(keys);

    for(let i = 0, l = links.length; i < l; i++) {
      const link = links[i];
      
      this.__storeTriggerByName(link.name, value);
      
    }
    
    this.__enableKeys(keys);
  }

  /**
   * Save the value to the store by the name
   * 
   * @param {string} name 
   * @param {*} value 
   * @protected
   */
  __storeTriggerByName(name, value) {  
    store.__target[name] = value;
    const links = Akili.__storeLinks[name];

    if(!links || !links.length) {
      return;
    }
    
    for(let i = 0, l = links.length; i < l; i++) {
      const link = links[i];
      const component = link.component;

      if(component === this) {
        continue;
      }
      
      if(link.fn) {
        Akili.unisolate(() => link.fn.call(component, value))
        continue;
      }
      
      component.scope.__set(link.keys, value);      
    }     
  }

  /**
   * Create a store link with the scope property
   * 
   * @param {string} name 
   * @param {string|string[]} keys
   * @protected
   */
  __storeByKeys(name, keys) {
    if(!keys) {
      throw new Error(`Store link "${name}" must have the scope property name`);
    }

    if(!Array.isArray(keys)) {
      keys = [keys];
    }

    this.scope.__set(keys, store[name]);
    let keyString = Akili.joinBindingKeys(keys);
    let info;

    if(!this.__storeLinks[keyString]) {
      this.__storeLinks[keyString] = [];
    }

    let arr = this.__storeLinks[keyString];
    
    for(let i = arr.length - 1; i >= 0; i--) {
      let res = arr[i];

      if(res.component === this && res.name == name && res.keyString == keyString) {
        return;
      }
    }

    if(!Akili.__storeLinks[name]) {
      Akili.__storeLinks[name] = [];
    }

    info = { component: this, name, keys, keyString };
    this.__storeLinks[keyString].push(info);
    Akili.__storeLinks[name].push(info);
  }

  /**
   * Create a store link with the function
   * 
   * @param {string} name 
   * @param {function} fn   
   * @param {object} [options]
   * @protected
   * @returns {*}
   */
  __storeByFunction(name, fn, options = {}) { 
    let call = options.callOnStart === undefined? store.__target.hasOwnProperty(name): options.callOnStart;

    if(!Akili.__storeLinks[name]) {
      Akili.__storeLinks[name] = [];
    }

    let links = Akili.__storeLinks[name];
    
    for(let i = links.length - 1; i >= 0; i--) {
      let res = links[i];

      if(res.component === this && res.name == name && res.fn === fn) {
        break;
      }
    }

    Akili.__storeLinks[name].push({ component: this, name, fn });

    if(call) {
      return Akili.unisolate(() => fn.call(this, store[name]));
    }
  }

  /**
   * Remove the store link with the scope property
   * 
   * @param {string} name
   * @param {string|string[]} keys
   * @protected
   */
  __unstoreByKeys(name, keys) {
    if(!keys) {
      throw new Error(`You have to pass the scope property name for store link "${name}"`);
    }

    if(!Array.isArray(keys)) {
      keys = [keys];
    }

    let keyString = Akili.joinBindingKeys(keys);
    let arr = this.__storeLinks[keyString];

    if(!arr.length) {
      return;
    }
    
    for(let i = arr.length - 1; i >= 0; i--) {
      let res = arr[i];
      let links = Akili.__storeLinks[res.name];

      if(res.component !== this || res.name != name || res.keyString != keyString) {
        continue;
      }

      arr.splice(i, 1);

      if(!links || !links.length) {
        continue;
      }

      for(let k = links.length - 1; k >= 0; k--) {
        let link = links[k];

        if(link.component === this && link.keyString == keyString) {
          links.splice(k, 1);
        }
      }

      if(!links.length) {
        delete Akili.__storeLinks[name];
      }
    }

    if(!arr.length) {
      delete this.__storeLinks[keyString];
    }
  }

  /**
   * Remove the store link with the function
   * 
   * @param {string} name 
   * @param {function} fn 
   * @protected
   */
  __unstoreByFunction(name, fn) {
    if(!Akili.__storeLinks[name]) {
      return;
    }

    let links = Akili.__storeLinks[name];
    
    for(let i = links.length - 1; i >= 0; i--) {
      let res = links[i];

      if(res.component === this && res.name == name && res.fn === fn) {
        links.splice(i, 1);
        break;
      }
    }

    if(!links.length) {
      delete Akili.__storeLinks[name];
    }
  }

  /**
   * Trigger an attribute event by the keys
   * 
   * @param {string[]} keys 
   * @param {*} value    
   * @protected
   */
  __attrTriggerByKeys(keys, value) {
    if(this.__disableAttrTriggering) {
      return;
    }
    
    const links = this.__attrLinks[Akili.joinBindingKeys(keys)];
   
    if(!links || !links.length) {
      return;
    }
    
    return Akili.nextTick(() => {
      for(let i = 0, l = links.length; i < l; i++) {
        const link = links[i];

        if(link.fn) {
          continue;
        }
        
        const ev = 'on' + utils.capitalize(link.name);
        this.attrs[ev] && this.attrs[ev].trigger(value, { bubbles: true });
      }
    });  
  }

  /**
   * Trigger an attribute event by the name
   * 
   * @param {string} name 
   * @param {*} value 
   * @protected
   */
  __attrTriggerByName(name, value) {
    const links = this.__attrLinks[name];

    if(!links || !links.length) {
      return;
    }    

    for(let i = 0, l = links.length; i < l; i++) {
      const link = links[i];    
      this.__disableAttrTriggering = true;
      link.fn? Akili.unisolate(() => link.fn.call(this, value)): this.scope.__set(link.keys, value); 
      this.__disableAttrTriggering = false; 
    }
  }

  /**
   * Create an attribute link with the scope property
   * 
   * @param {string} name 
   * @param {string|string[]} keys
   * @protected
   */
  __attrByKeys(name, keys) {    
    if(!keys) {
      throw new Error(`Attribute link "${name}" must have the scope property name`);
    }

    if(!Array.isArray(keys)) {
      keys = [keys];
    }

    name = utils.toCamelCase(name);
    this.__disableAttrTriggering = true;
    this.attrs.hasOwnProperty(name) && this.scope.__set(keys, this.attrs[name]);  
    this.__disableAttrTriggering = false;  
    let keyString = Akili.joinBindingKeys(keys);

    if(!this.__attrLinks[keyString]) {
      this.__attrLinks[keyString] = [];
    }

    let arr = this.__attrLinks[keyString];
    
    for(let i = arr.length - 1; i >= 0; i--) {
      let res = arr[i];

      if(res.name == name && res.keyString == keyString) {
        return;
      }
    }

    this.__attrLinks[keyString].push({ name, keys, keyString });
  }

  /**
   * Create an attribute link with the function
   * 
   * @param {string} name 
   * @param {function} fn
   * @param {object} [options]
   * @protected 
   * @returns {*}
   */
  __attrByFunction(name, fn, options = {}) {    
    let call = options.callOnStart === undefined? this.attrs.hasOwnProperty(name): options.callOnStart;
    name = utils.toCamelCase(name);

    if(!this.__attrLinks[name]) {
      this.__attrLinks[name] = [];
    }

    let links = this.__attrLinks[name];
    
    for(let i = links.length - 1; i >= 0; i--) {
      let res = links[i];

      if(res.name == name && res.fn === fn) {
        break;
      }
    }
    
    this.__attrLinks[name].push({ name, fn });
    
    if(call) {
      return Akili.unisolate(() => fn.call(this, this.attrs[name]));
    }
  }

  /**
   * Remove the attribute link with the scope property
   * 
   * @param {string} name
   * @param {string|string[]} keys
   * @protected
   */
  __unattrByKeys(name, keys) {
    if(!keys) {
      throw new Error(`You have to pass the scope property name for attribute link "${name}"`);
    }

    if(!Array.isArray(keys)) {
      keys = [keys];
    }

    let keyString = Akili.joinBindingKeys(keys);
    let arr = this.__attrLinks[keyString];

    if(!arr.length) {
      return;
    }
    
    for(let i = arr.length - 1; i >= 0; i--) {
      let res = arr[i];

      if(res.name != name || res.keyString != keyString) {
        continue;
      }

      arr.splice(i, 1);
    }

    if(!arr.length) {
      delete this.__attrLinks[keyString];
    }
  }

   /**
   * Remove the attribute link with the function
   * 
   * @param {string} name 
   * @param {function} fn
   * @protected
   */
  __unattrByFunction(name, fn) {
    if(!this.__attrLinks[name]) {
      return;
    }

    let links = this.__attrLinks[name];
    
    for(let i = links.length - 1; i >= 0; i--) {
      let res = links[i];

      if(res.name == name && res.fn === fn) {
        links.splice(i, 1);
        break;
      }
    }

    if(!links.length) {
      delete this.__attrLinks[name];
    }
  }

  /**
   * Check the key is system
   *
   * @param {string} key
   * @returns {boolean}
   * @protected
   */
  __isSystemKey (key) {
    if (key == '__' || (key[0] == '_' && key[1] == '_')) {
      return true;
    }
    else if (['constructor'].indexOf(key) != -1) {
      return true;
    }

    return false;
  }

  /**
   * Nested observing the value
   *
   * @param {*} value
   * @param {string[]} [startKeys]
   * @protected
   */
  __nestedObserve (value, startKeys) {
    const observe = (value, parents) => {
      if (typeof value != 'object' || value === null) {
        return value;
      }

      if (!utils.isPlainObject(value) && !utils.isScopeProxy(value) && !(value instanceof Scope)) {
        return value;
      }

      let target = value;

      CHECK_PROXY: if (value.__isProxy) {
        target = value.__target;

        if (this.__disableProxyRedefining) {
          break CHECK_PROXY;
        }
        
        if (
          value.__component !== this ||
          Akili.joinBindingKeys(parents) != Akili.joinBindingKeys(value.__keys)
        ) {
          target = utils.copy(target, { nested: false });
          value = target;
        }
      }
      else if (!this.__disableProxyRedefining && !(value instanceof Scope)) {
        target = utils.copy(target, { nested: false } );          
        value = target;
      }

      for (let k in target) {        
        if (!target.hasOwnProperty(k)) {
          continue;
        }

        let val = target[k];        
        let keys = [].concat(parents, [k]);   
        target[k] = observe(val, keys);  
      }

      if (!value.__isProxy) {
        return this.__observe(value, parents);
      }

      return value;
    };

    let res = observe(value, startKeys || []);
    return res;
  }

  /**
   * Create an isolation object
   *
   * @param {string[]} parents
   * @param {string} key
   * @param {boolean} [isDeleted=false]
   * @returns {*}
   * @protected
   */
  __createIsolationObject (parents, key, isDeleted = false) {
    let keys = parents.length? [parents[0]]: [key];
    let isolationKey = this.__createKeysHash(keys);

    if (parents.length) {
      isDeleted = false;
    }

    if (!Akili.__isolation[isolationKey]) {
      Akili.__isolation[isolationKey] = {
        updatedAt: new Date().getTime(),
        component: this,
        keys: keys
      };
    }

    (isDeleted !== undefined) && (Akili.__isolation[isolationKey].isDeleted = isDeleted);
    return Akili.__isolation[isolationKey];
  }

  /**
   * Prepare the node to binding
   *
   * @param {object} bind - by default is component.__evaluation.list
   * @param {string[]} keys
   * @param {string[]} parents
   * @param {*} value
   * @param {boolean} [notBinding=false]
   * @param {boolean} [evaluated=false]
   * @protected
   */
  __bindNode(bind, realComponent, keys, parents, value, notBinding = false, evaluated = false) {
    let parentKeysString = Akili.joinBindingKeys(parents);
    let component = this;

    if (bind.length && !notBinding) {
      let l = bind.length - 1;
      let data = bind[l];

      if(data.realComponent === this && data.keysString == parentKeysString) {
        component = data.component;
      }      
      
      if (data.keysString == parentKeysString && data.component === component) {
        bind.splice(l, 1);
      }
    }
    
    bind.push({
      component,
      realComponent: realComponent,
      keysString: Akili.joinBindingKeys(keys),
      parents,
      keys,
      value,
      evaluated,
      notBinding
    });
  }

  /**
   * Check the key is system binding thing
   *
   * @param {string} key
   * @returns {boolean}
   * @protected
   */ 
  __isSystemBindingKey(key) {
    return key == '__data';
  }

  /**
   * Get binding by keys
   *
   * @param {string[]} keys
   * @returns {object|null}
   * @protected
   */
  __getBind(keys) {
    return utils.getPropertyByKeys(keys, this.__bindings) || null;
  }

  /**
   * Get binding by keys
   *
   * @param {string[]} keys
   * @param {Node} node
   * @returns {object|null}
   * @protected
   */
  __getBoundNode(keys, node) {
    let bind =  utils.getPropertyByKeys(keys, this.__bindings);

    if (!bind || !bind.__data || !bind.__data.length) {
      return null;
    }

    for (let i = 0, l = bind.__data.length; i < l; i++) {
      let data = bind.__data[i];

      if (data.node === node) {
        return data;
      }
    }

    return null;
  }

  /**
   * Set the node property
   *
   * @param {Node} node
   * @param {string[]} keys
   * @param {*} value
   * @param {boolean} [evaluated]
   * @returns {boolean}
   * @protected
   */
  __setNodeProperty(node, keys, value, evaluated = false) {
    let prop = this.__getNodeProperty(node, keys);    
    let copy = utils.copy(value);

    if (prop) {
      let res = utils.comparePreviousValue(value, prop.value, prop.copy);
      prop.value = value;
      prop.copy = copy;
      return !res;
    }
    
    node.__properties[this.__createKeysHash(keys)] = {
      component: this,
      value,
      copy,      
      keys,
      evaluated      
    };

    return true;
  }

  /**
   * Get the node property
   *
   * @param {Node} node
   * @param {string[]} keys
   * @returns {object|null}
   * @protected
   */
  __getNodeProperty(node, keys) {
    let hash = `${this.__scope.__name}.${Akili.joinBindingKeys(keys)}`;
    return node.__properties[hash] || null;
  }

  /**
   * Delete the node property
   *
   * @param {Node} node
   * @param {string[]} keys
   * @protected
   */
  __deleteNodeProperty(node, keys) {
    let hash = `${this.__scope.__name}.${Akili.joinBindingKeys(keys)}`;
    delete node.__properties[hash];
  }

  /**
   * Bind data with the keys
   *
   * @param {string[]} keys
   * @param {object} data
   * @protected
   */
  __bind(keys, data) {
    utils.setPropertyByKeys(keys, this.__bindings, (last, value) => {
      let obj = { __data: [] };

      if (!last) {
        return value? value: obj;
      }

      if (typeof value == 'object') {
        obj = value;
      }

      if (!obj.__data) {
        obj.__data = [];
      }

      obj.__data.push(data);
      return obj;
    });
  }

  /**
   * Unbind the keys
   *
   * @param {string[]} keys
   * @protected
   */
  __unbind(keys) {
    let bind = utils.getPropertyByKeys(keys, this.__bindings);

    if (!bind || !bind.__data) {
      return;
    }

    for (let i = 0, l = bind.__data.length; i < l; i++) {
      let node = bind.__data[i].node;
      this.__deleteNodeProperty(node, keys);
    }

    utils.deletePropertyByKeys(keys, this.__bindings, (value) => {
      if (Object.keys(value).length > 1) {
        value.__data = [];
        return false;
      }

      return true;
    });
  }

  /**
   * Unbind data by nodes
   *
   * @param {Node[]} nodes
   * @protected
   */
  __unbindByNodes(nodes) {
    const unbind = (obj) => {
      for (let k in obj) {
        if (!obj.hasOwnProperty(k)) {
          continue;
        }

        if (k == '__data') {
          let data = obj[k] || [];
          let l = data.length;

          for (let i = 0; i < l; i++) {
            let bind = data[i];

            if (nodes.indexOf(bind.node) != -1) {
              data.splice(i, 1);
              i--;
              l--;
            }
          }

          if (!l) {
            delete obj[k];
          }
        }
        else if(!this.__isSystemBindingKey(k)) {
          unbind(obj[k]);
        }
      }
    };

    unbind(this.__bindings);
    this.__clearEmptyBindings();
  }

  /**
   * Clear all empty bindings
   *
   * @param {object} [obj]
   * @protected
   */
  __clearEmptyBindings(obj) {
    const clear = (obj, parent, key) => {
      for (let k in obj) {
        if (!obj.hasOwnProperty(k)) {
          continue;
        }

        let val = obj[k];

        if (k == '__data' && (!val || !val.length)) {
          delete obj[k];
        }
        else if (!this.__isSystemBindingKey(k)) {
          if (!Object.keys(obj[k]).length) {
            delete obj[k];
          }
          else {
            clear(obj[k], obj, k);
          }
        }
      }

      if (!Object.keys(obj).length && parent) {
        delete parent[key];
      }
    };

    clear(obj || this.__bindings);
  }

  /**
   * Clear the links
   * 
   * @protected
   */
  __clearStoreLinks() {
    const links = Akili.__storeLinks;

    for(let key in links) {
      const arr = links[key];

      for(let i = arr.length - 1; i >= 0; i--) {
        const link = arr[i];
  
        if(link.component === this) {
          arr.splice(i, 1);
        }
      }

      if(!arr.length) {
        delete links[key];
      }
    }
  }

  /**
   * Remove all child components
   *
   * @protected
   */
  __removeChildren() {
    const remove = (children) => {
      for (let i = 0; i < children.length; i++) {
        let child = children[i];

        remove(child.__akili.__children);
        child.__akili.__remove();
        i--;
      }
    };

    remove(this.__children);
  }

  /**
   * Remove the component without children removing
   *
   * @protected
   */
  __remove() {
    this.__detach();
    this.__clearStoreLinks();
    this.attrs.onRemoved && this.attrs.onRemoved.trigger(undefined, { bubbles: false });
    this.removed();    
    Akili.removeScope(this.__scope.__name);
    this.el.remove();
  }

  /**
   * Detach the component
   *
   * @protected
   */
  __detach() {
    if (this.__evaluateParent && !this.__controlAttributes) {
      this.__evaluateParent.__akili.__unbindByNodes([].slice.call(this.el.attributes));
    }

    if (this.__parent) {
      this.__parent.__akili.__spliceChild(this.el);
    }
  }

  /**
   * Remove the component with children
   *
   * @protected
   */
  __destroy() {
    this.__removeChildren();
    this.__remove();
  }

  /**
   * Clear the component html
   *
   * @protected
   */
  __empty() {
    let nodes = [];
    this.__removeChildren();

    const find = (children) => {
      for (let i = 0, l = children.length; i < l; i++) {
        let child = children[i];

        if (child.nodeType == 3) {
          nodes.push(child);
        }
        else if (child.nodeType == 1 && !child.__akili) {
          for (let k = 0, attrs = child.attributes, c = attrs.length; k < c; k++) {
            nodes.push(attrs[i]);
          }

          find(child.childNodes);
        }
      }
    };

    find(this.el.childNodes);
    this.__unbindByNodes(nodes);
    this.el.innerHTML = '';
  }

  /**
   * Get parent components
   *
   * @param {string} [selector='']
   * @param {boolean} [findAll=true] - get array if true
   * @param {number|number[]} [levels=null]
   * @returns {Component|Component[]}
   * @protected
   */
  __getParent(selector = '', findAll = false, levels = null) {
    let arr = [];
    let level = 0;

    if (typeof levels != 'object') {
      levels = [levels];
    }

    const find = (parent) => {
      if (!parent) {
        return;
      }

      if (!levels || levels.indexOf(level) != -1) {
        if (!selector || parent.__akili.matches(selector)) {
          if (!findAll) {
            arr.push(parent.__akili);

            return;
          }

          arr.push(parent.__akili);
        }
      }

      level++;
      find(parent.__akili.__parent);
    };

    find(this.__parent);

    return findAll? arr: (arr[0] || null);
  }

  /**
   * Get child components
   *
   * @param {string} [selector='']
   * @param {boolean} [findAll=true] - get array if true
   * @param {number|number[]} [levels=null]
   * @returns {Component|Component[]}
   * @protected
   */
  __getChildren(selector = '', findAll = true, levels = null) {
    let arr = [];
    let level = 0;

    if (typeof levels != 'object') {
      levels = [levels];
    }

    const find = (children) => {
      for (let i = 0, l = children.length; i < l; i++) {
        let child = children[i];

        if (!levels || levels.indexOf(level) != -1) {
          if (!selector || child.__akili.matches(selector)) {
            if (!findAll) {
              arr.push(child.__akili);

              return;
            }

            arr.push(child.__akili);
          }
        }
      }

      level++;

      for (let i = 0, l = children.length; i < l; i++) {
        find(children[i].__akili.__children);
      }
    };

    find(this.__children);

    return findAll? arr: (arr[0] || null);
  }

  /**
   * Get nearest components
   *
   * @param {string} [selector='']
   * @param {boolean} [findAll=true] - get array if true
   * @param {boolean} [right=false] - from the right side if true
   * @returns {Component|Component[]}
   * @protected
   */
  __getNear(selector = '', findAll = true, right = false) {
    if (!this.__parent) {
      return null;
    }

    let levelElements = this.__parent.__akili.__children.slice();
    let arr = [];

    right && levelElements.reverse();

    for (let i = 0, l = levelElements.length; i < l; i++) {
      let el = levelElements[i];

      if (el === this.el) {
        break;
      }

      if (!selector || el.__akili.matches(selector)) {
        arr.push(el.__akili);
      }
    }

    arr.reverse();

    if (!findAll) {
      return arr.length? arr[0]: null;
    }

    return arr;
  }

  /**
   * Create a link to the store
   * 
   * @param {string} name 
   * @param {string|string[]|function} handler
   */
  store(name, handler) {
    if(!this.__isMounted) {
      throw new Error(`Method "store" must be called after the compilation. For example, in "compiled" method.`);
    }

    return typeof handler === 'function'? this.__storeByFunction(...arguments): this.__storeByKeys(...arguments);
  }

  /**
   * Create a link with the attribute
   * 
   * @param {string} name 
   * @param {string|string[]|function} handler
   */
  attr(name, handler) {
    if(!this.__isMounted) {
      throw new Error(`Method "attr" must be called after the compilation. For example, in "compiled" method.`);
    }

    return typeof handler === 'function'? this.__attrByFunction(...arguments): this.__attrByKeys(...arguments);
  }

  /**
   * Remove the store link
   * 
   * @param {string} name 
   * @param {string|string[]|function} handler
   */
  unstore(name, handler) {
    if(!this.__isMounted) {
      throw new Error(`Method "unstore" must be called after the compilation. For example, in "compiled" method.`);
    }

    return typeof handler === 'function'? this.__unstoreByFunction(...arguments): this.__unstoreByKeys(...arguments);
  }

  /**
   * Remove the attribute link
   * 
   * @param {string} name 
   * @param {string|string[]|function} handler
   */
  unattr(name, handler) {
    if(!this.__isMounted) {
      throw new Error(`Method "unattr" must be called after the compilation. For example, in "compiled" method.`);
    }

    return typeof handler === 'function'? this.__unattrByFunction(...arguments): this.__unattrByKeys(...arguments);
  }

  /**
   * Check the component matches selector
   *
   * @param {string|function} selector
   * @returns {boolean}
   */
  matches(selector) {
    if (typeof selector == 'function') {
      return selector(this);
    }

    return this.el.matches(selector);
  }

  /**
   * Get closest parent component by selector
   *
   * @param {string|function} [selector='']
   * @param {number|number[]} [levels=null]
   * @returns {Component}
   */
  parent(selector = '', levels = null) {
    return this.__getParent(selector, false, levels);
  }

  /**
   * Get array of parent components by selector
   *
   * @param {string|function} [selector='']
   * @param {number|number[]} [levels=null]
   * @returns {Component[]}
   */
  parents(selector = '', levels = null) {
    return this.__getParent(selector, true, levels);
  }

  /**
   * Get closest child component by selector
   *
   * @param {string|function} [selector='']
   * @param {number|number[]} [levels=null]
   * @returns {Component}
   */
  child(selector = '', levels = null) {
    return this.__getChildren(selector, false, levels);
  }

  /**
   * Get array of child components by selector
   *
   * @param {string|function} [selector='']
   * @param {number|number[]} [levels=null]
   * @returns {Component[]}
   */
  children(selector = '', levels = null) {
    return this.__getChildren(selector, true, levels);
  }

  /**
   * Get array of components left from the current by selector
   *
   * @param {string|function} [selector='']
   * @returns {Component[]}
   */
  before(selector = '') {
    return this.__getNear(selector, true, false);
  }

  /**
   * Get array of components right from the current by selector
   *
   * @param {string|function} [selector='']
   * @returns {Component[]}
   */
  after(selector = '') {
    return this.__getNear(selector, true, true);
  }

  /**
   * Get closest component left from the current by selector
   *
   * @param {string|function} [selector='']
   * @returns {Component}
   */
  prev(selector = '') {
    return this.__getNear(selector, false, false);
  }

  /**
   * Get closest component right from the current by selector
   *
   * @param {string|function} [selector='']
   * @returns {Component}
   */
  next(selector = '') {
    return this.__getNear(selector, false, true);
  }

  /**
   * Change element parent
   *
   * @param {Element} parent
   */
  appendTo(parent) {
    parent.appendChild(this.el);
    return Akili.compile(this.el, { recompile: true });
  }

  /**
   * Cancel component compilation
   */
  cancel() {
    this.__cancelled = true;
  }

  /**
   * Compale the component, but cancel the compilation inside of it
   */
  prevent() {
    this.__prevent = true;
  }

  /**
   * Clear element html
   *
   * @returns {*}
   */
  empty() {
    return this.__empty.apply(this, arguments);
  }

  /**
   * Remove element
   *
   * @returns {*}
   */
  remove() {
    return this.__destroy.apply(this, arguments);
  }

  created() {}
  compiled() {}
  recompiled() {}
  resolved() {}
  removed() {}
}