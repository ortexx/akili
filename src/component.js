import Akili from './akili.js';
import Scope from './scope.js';
import request from './services/request.js';
import store from './services/store.js';
import globals from './globals.js';
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
   * @param {object} [vars]
   */
  static parse(context, expression, variables = {}) {    
    variables = { ...globals, ...variables};
    const keys = [];
    const vars = [];
    const exps = utils.split(expression, ';', ['"', "'", '`']);  
    exps[exps.length - 1] = `return ${exps[exps.length - 1]}`;

    for (let key in variables) {
      keys.push(key);
      vars.push(variables[key]);
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
    if (!(el instanceof Element)) {
      throw new Error(`You must pass an html element to the component constructor`);
    }

    this.__isMounted = false;
    this.__isCompiled = false;
    this.__isResolved = false;
    this.__cancelled = false;
    this.__prevent = false;
    this.__bindings = {};
    this.__tags = {};
    this.__evaluatingEvent = null;
    this.__recompiling = null;
    this.__compiling = null;
    this.__disableProxy = {};
    this.__disableStoreKeys = {};
    this.__disableAttrKeys = {};
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
   * Create compilation options 
   * 
   * @param {object} [options]
   * @protected
   */
  __createCompilationOptions(options = {}) {
    return { 
      checkChanges: false, 
      setEvents: true,
      setParents: true,
      setBooleanAttributes: true,
      defineAttributes: true,
      ...options 
    };
  }

  /**
   * Create recompilation options 
   * 
   * @param {object} [options]
   * @protected
   */
  __createRecompilationOptions(options = {}) {
    return { 
      ...this.__createCompilationOptions(),
      setEvents: false,
      setParents: false,
      setBooleanAttributes: false,
      defineAttributes: false,
      ...options 
    };
  }
 
  /**
   * Called on the recompilation
   * 
   * @param {object} [options]
   * @protected
   */
  __recompile(options = {}) {
    this.__isMounted = false;
    this.__recompiling = true;
    this.__evaluationComponent.__disableProxy = {};
    this.__compiling = this.__createRecompilationOptions(options);    
    this.__compiling.setEvents && this.__setEvents();
    this.__compiling.setParents && this.__setParents();
    this.__compiling.setBooleanAttributes && this.__setBooleanAttributes();
    this.__compiling.defineAttributes && this.__defineAttributes();
  }

  /**
   * Called on the creation
   *
   * @protected
   */
  __create() {
    this.__compiling = this.__createCompilationOptions(); 
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

        if (child.nodeType == 3 && this.__initializeNode(child, parent)) {          
          this.__evaluateNode(child, this.__compiling? this.__compiling.checkChanges: false);  
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
      res = Akili.isolate(() => {
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
    if (this.__isResolved) {
      return Promise.resolve();
    }
    
    this.attrs.onResolved && this.attrs.onResolved.trigger(undefined, { bubbles: false });

    return Promise.resolve(Akili.isolate(() => this.resolved())).then(res => {
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

      if (!node.__component.__compareNodePropertyValue(prop, value)) {
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
  __checkNodePropertyChange(node, keys, value) {
    let prop = this.__getNodeProperty(node, keys);
    
    if (!prop) {
      return true;
    }

    return !node.__component.__compareNodePropertyValue(prop, value);
  }

  /**
   * Compare a node property value
   * 
   * @param {object} prop 
   * @param {*} value 
   * @param {object} [options] 
   */
  __compareNodePropertyValue(prop, value, options = {}) {
    if(typeof value == 'object') {
      value = { hash: utils.createObjectHash(value) };
    }
  
    return utils.compare(value, prop.copy, options);
  }

  /**
   * Create an exception message
   * 
   * @param {Node} node 
   * @param {Error} err 
   */
  __createExceptionMessage(node, err) {
    let tagName = node.__component.el.tagName;
    let attrName = node.__component.el.getAttribute('component');
    let componentName = (attrName || tagName).toLowerCase();
    let elementName = node.__element.tagName.toLowerCase();
    let attributeName = (node instanceof window.Attr)? node.name.toLowerCase(): '';        
    let messages = [ err.message, node.__expression.trim() ];
    attributeName && messages.push(`[attribute ${attributeName}]`);
    messages = messages.concat([ `[element ${elementName}]`, `[component ${componentName}]` ]);
    return `Expression error: ` + messages.join('\n\tat ');
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
    const evalComponent = node.__attributeOf || node.__component;

    if (node.__component.parents((com) => com.__prevent).length) {
      return { res: node.__expression };
    }

    if (!(node instanceof window.Attr) && node.__component.__prevent) {
      return { res: node.__expression };
    }
    
    let res = node.__expression.replace(evaluationRegexGlobal, (m, d) => {      
      counter++;
      let evaluate;
      let evaluation = [];
      let existingBindings = {};
      let parentBindings = {};
      let parseValue = node.__component.__getParsedExpression(d);
      Akili.__evaluation = { node: node, list: [], component: node.__component };
      
      try {
        evaluate = this.constructor.parse(evalComponent.__evaluationComponent.scope, parseValue);
      }
      catch (err) {        
        throw this.__createExceptionMessage(node, err);
      }

      if (Akili.__evaluation) {
        evaluation = Akili.__evaluation.list;
        Akili.__evaluation.list = null;
        Akili.__evaluation = null;
      }
      
      for (let i = evaluation.length - 1; i >= 0; i--) {
        let data = evaluation[i];
        let hash = data.component.__createKeysHash(data.keys);
        let parentsHash = data.component.__createKeysHash(data.parents);
       
        if (data.notBinding) {
          continue;
        }

        if (existingBindings[hash]) {
          continue;
        }

        let parentValue = utils.getPropertyByKeys(data.parents, data.component.__scope);        

        if (parentValue && typeof parentValue == 'object') {
          if (Akili.options.debug && parentBindings[parentsHash] == 50) {
            // eslint-disable-next-line no-console
            console.warn([
              `For higher performance, don't loop Proxy arrays/objects inside expression functions, or use Akili.unevaluate() to wrap you code.`,
              `${ node.__expression.trim() }`,
              `scope property "${ data.parents.join('.') }"`
            ].join('\n\tat '));
          }
          
          !parentBindings[parentsHash]? parentBindings[parentsHash] = 1: parentBindings[parentsHash]++;
        }
                
        if (
          utils.isScopeProxy(parentValue) && 
          data.component !== evalComponent.__evaluationComponent && 
          data.component === data.realComponent
        ) {
          continue;
        }  

        data.component.__bindAndSetProperty(node, data.keys, data.evaluated);
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

    return { res, counter, expression, attributeValue };
  }

  /**
   * Bind the node and set property
   *
   * @param {Node} node
   * @param {string[]} keys
   * @param {boolean} [evaluated]
   * @protected
   */
  __bindAndSetProperty(node, keys, evaluated) {
    let bind = this.__getBoundNode(keys, node);
    let value = utils.getPropertyByKeys(keys, this.__scope);

    if (!bind) {
      this.__bind(keys, { node });
    }

    this.__setNodeProperty(node, keys, value, evaluated);
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
        let data;
        
        if (component === this) {
          let bind = component.__getBind(prop.keys);
          data = bind? (bind.__data || []): [];
        }
        else {
          data = component.__getAllBinds(prop.keys);
        }
        
        if (!data || !data.length) {
          continue;
        }
         
        for (let k = 0, c = data.length; k < c; k++) {
          const bind = data[k];

          if(!bind.node.__initialized) {
            continue;
          }
          
          if (component.__checkNodePropertyChange(bind.node, prop.keys, prop.value)) {  
            component.__disableKeys(prop.keys);     
            const checkProp = component.__getNodeProperty(bind.node, prop.keys);
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
  __evaluateByKeys (keys, value, isDeleted = false) {     
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
    this.__evaluateNested(keys, false);

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
      node
    };

    this.__disableProxy = {};

    try {
      evaluate = this.constructor.parse(this.__evaluationComponent.scope, expression[1], { event: e });
    }
    catch (err) {        
      throw this.__createExceptionMessage(node, err);
    }
    
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
    const key = node instanceof window.Attr? 'value': 'nodeValue';  

    if (check? this.__checkEvaluation(node): true) {      
      const { res, attributeValue, expression, counter } = this.__evaluate(node);     
      node[key] != res && (node[key] = res);

      if (node instanceof window.Attr) {
        let value = res;
        let isBooleanAttribute = false;
  
        if (counter == 1 && expression && node.__expression == expression) {
          value = attributeValue;
        }
  
        const clearAttribute = node.nodeName.replace(/^boolean-(.+)/i, '$1');
        const camelAttribute = utils.toCamelCase(clearAttribute);
  
        if (clearAttribute != node.nodeName) {
          isBooleanAttribute = true;
          value = !!value;
        }          
  
        if (node.__attributeOn) {        
          const component = node.__attributeOn;
          value = component.__prepareAttributeIn(node, value);
          component.__disableAttributeSetter = true;
          component.attrs[camelAttribute] = value;
          component.__disableAttributeSetter = false;
  
          if (component.__isMounted) {
            component.__attrTriggerByName(camelAttribute, value);
          }
        }
        else if (isBooleanAttribute) {
          const element = node.__element;
          value? element.setAttribute(camelAttribute, 'true'): element.removeAttribute(camelAttribute);
        }
      }
    }

    return node[key];
  }

  /**
   * Prepare the attribute value for getting
   * 
   * @param {Node} node
   * @param {*} value
   */
  __prepareAttributeIn(node, value) {    
    return utils.copy(value, { plain: true });
  }

  /**
   * Prepare the attribute value for sending
   * 
   * @param {Node} node
   * @param {*} value
   */
  __prepareAttributeOut(node, value) {    
    return utils.copy(value, { plain: true });
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
    if (!node || systemAttributes.indexOf(node.nodeName) != -1) {
      return;
    }

    if(!this.__initializeNode(node, el)) {
      return;
    }

    let eventName = node.nodeName.replace(/^on-(.+)/i, '$1');    
    let component = attributeOf? attributeOf: this;

    if (node.__isEvent) {
      if (node.__event) {
        return;
      }

      const emitter = new Akili.EventEmitter(eventName, node, el, component);

      if (node.__hasBindings) {
        emitter.bind((e) => component.__evaluateEvent(node, el, e));
      }

      node.__event = emitter;
      el.setAttribute(node.nodeName, utils.makeAttributeValue(emitter));

      if (attributeOf) {
        this.__disableAttributeSetter = true;
        this.attrs[utils.toCamelCase(node.nodeName)] = emitter;
        this.__disableAttributeSetter = false;
      }

      return;
    }

    if (attributeOf) {
      node.__attributeOn = this;
      node.__attributeOf = component;
    }
    
    let check = this.__compiling? this.__compiling.checkChanges: false;
    component.__evaluateNode(node, check);
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
      return true;
    }

    const isAttr = node instanceof window.Attr;
    const val = node[isAttr? 'value': 'nodeValue'];
    const hasBinding = evaluationRegex.test(val.trim());
    const isBoolean = isAttr? /^boolean-/i.test(node.nodeName): false;
    const isEvent = isAttr? /^on-(.+)/i.test(node.nodeName): false;

    if(!el.__akili && !hasBinding && !isBoolean && !isEvent) {
      return false;
    }

    node.__isEvent = isEvent;
    node.__hasBindings = hasBinding;
    node.__isBoolean = isBoolean;
    node.__expression = val;
    node.__properties = {};
    node.__attributeOf = null;
    node.__attributeOn = null;
    node.__event = null;    
    node.__initialized = true;
    node.__component = this;
    node.__element = el;
    return true;
  }

  /**
   * Deinitialize the node
   *
   * @param {Node} node
   * @param {object} [options]
   * @protected
   */
  __deinitializeNode(node, options = {}) {
    if (node.__event) {
      node.__event.unbind();
    }

    if (node.__hasBindings && !options.saveBindings) {
      this.__unbindParentsByNodes(node);          
    }

    delete node.__hasBindings;
    delete node.__isBoolean;
    delete node.__isEvent;
    delete node.__expression;
    delete node.__properties;
    delete node.__attributeOf;
    delete node.__attributeOn;
    delete node.__event;    
    delete node.__initialized;
    delete node.__component;
    delete node.__element;
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

      if (isDeleted) {
        node && this.__deinitializeNode(node);
        this.el.removeAttribute(key);
        return 
      }
      else if (!node) {
        this.el.setAttribute(key, value);
        node = this.el.getAttributeNode(key);
      }
      else {
        node.value = value;
        this.__deinitializeNode(node);
      }

      this.__initializeAttribute(node, this.el, this.__attributeOf);
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
          value? this.el.setAttribute(key, value): this.el.removeAttribute(key);
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

        if (Akili.__evaluation) {  
          let keys = [].concat(parents, [key]);
          let notBinding = false;
          let evaluated = !utils.hasPropertyByKeys(keys, this.__scope); 
          let component = this;
          let excArr = keys.slice();

          if (target instanceof Scope) {
            let realTarget = utils.getOwnPropertyTarget(target, key);
            realTarget && (realTarget instanceof Scope) && (component =  realTarget.__component);
          } 

          if (Akili.__wrapping && keys.length > 1) {
            return target[key];
          }

          const forParents = Akili.__evaluation.component.parents(c => c instanceof Akili.components.For);

          for (let i = 0, l = forParents.length; i < l; i++) {
            for (let k = 0, c = keys.length; k < c; k++) { 
              const forData = forParents[i].data;
              const data = utils.getPropertyByKeys(excArr, component.__scope);

              if (data && typeof data == 'object' && forData === data) {
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

        if (typeof target[key] === 'function') {
          value = Akili.wrapFunction(value);
        }

        let keys = [].concat(parents, [key]);

        if (this.__checkDisablement(keys)) {
          target[key] = value;
          return true;
        }

        CHECK_EXISTENCE: if (parents.length > 0) {
          let targetParentValue = parents.length > 1? utils.getPropertyByKeys(parents.slice(0, -1), this.__scope): this.__scope;
          
          for (let k in targetParentValue) {
            if (!targetParentValue.hasOwnProperty(k)) {
              continue;
            }

            if (targetParentValue[k] && targetParentValue[k].__target === target) {
              break CHECK_EXISTENCE;
            }
          }

          target[key] = value;
          return true;
        }

        target[key] = this.__nestedObserve(value, keys);

        if(!this.__isResolved) {
          this.__triggerStoreAndAttr(keys);
        }
       
        if (Akili.__isolation) { 
          this.__createIsolationObject(parents, key, false);
          return true;
        }

        if(this.__isResolved) {
          this.__triggerStoreAndAttr(keys);
        }
        
        if (this.__isMounted) {                   
          this.__evaluateByKeys(keys, value);
        }

        return true;
      },
      deleteProperty: (target, key) => {
        const keys = [].concat(parents, [key]);

        if (this.__checkDisablement(keys)) {
          delete target[key];
          return true;
        }

        if (this.__isSystemKey(key)) {
          delete target[key];
          return true;
        }

        delete target[key];

        if(!this.__isResolved) {
          this.__triggerStoreAndAttr(keys);
        }
        
        if (Akili.__isolation) {
          this.__createIsolationObject(parents, key, true);
          return true;
        }

        if(this.__isResolved) {
          this.__triggerStoreAndAttr(keys);
        }

        this.__evaluateByKeys(keys, undefined, true);
        return true;
      }
    });
  }

  /**
   * Trigger store and attributes change
   */
  __triggerStoreAndAttr(keys) {
    for(let i = 0, l = keys.length; i < l; i++) {
      const currentKeys = keys.slice(0, l - i);
      const currentKeyString = Akili.joinBindingKeys(currentKeys);
      const val = utils.getPropertyByKeys(currentKeys, this.__scope);

      if (this.__storeLinks[currentKeyString]) {  
        this.__storeTriggerByKeys(currentKeys, val);
      }

      if (this.__attrLinks[currentKeyString]) {
        this.__attrTriggerByKeys(currentKeys, val);
      }
    }
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
   * Get the store of the disablement type
   * 
   * @param {string} type 
   */
  __getDisablementTypeStore(type) {
    return ({
      proxy: '__disableProxy',
      store: '__disableStoreKeys',
      attr: '__disableAttrKeys'
    })[type];
  }

  /**
   * Disable the keys setter
   * 
   * @param {string[]} keys  
   * @param {string} [type]  
   * @protected
   */
  __disableKeys(keys, type = 'proxy') {    
    this[this.__getDisablementTypeStore(type)][keys? this.__createKeysHash(keys): '__all'] = true;
  }

  /**
   * Enable the keys setter
   * 
   * @param {string[]} keys 
   * @param {string} [type]   
   * @protected
   */
  __enableKeys(keys, type = 'proxy') {
    delete this[this.__getDisablementTypeStore(type)][keys? this.__createKeysHash(keys): '__all'];
  }

  /**
   * Check the keys setter disablemant
   * 
   * @param {string[]} keys 
   * @param {string} [type]   
   * @protected
   */
  __checkDisablement(keys, type = 'proxy') {
    const store = this.__getDisablementTypeStore(type);
    return this[store].__all? true: this[store][this.__createKeysHash(keys)];
  }

  /**
   * Save the value to the store by the keys
   * 
   * @param {string[]} keys 
   * @param {*} value    
   * @protected
   */
  __storeTriggerByKeys(keys, value) { 
    if (this.__checkDisablement(keys, 'store')) {      
      return;
    }

    const links = this.__storeLinks[Akili.joinBindingKeys(keys)];

    if (!links || !links.length) {
      return;
    }
    
    value = utils.copy(value, { plain: true });
    const p = [];

    for (let i = 0, l = links.length; i < l; i++) {
      const link = links[i];   
      
      if (!link.set) {
        continue;
      }

      p.push(this.__storeTriggerByName(link.name, value));      
    }
    
    return Promise.all(p);
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
    let links = (Akili.__storeLinks[name] || []).concat(Akili.__storeLinks['*'] || []);

    if (!links || !links.length) {
      return;
    }

    links = utils.sort(links, ['date'], true);

    return Akili.nextTick(() => {
      for (let i = 0, l = links.length; i < l; i++) {
        const link = links[i];
        const component = link.component;

        if (component === this) {
          continue;
        }
        
        if (link.fn) {
          Akili.unisolate(() => link.fn.call(component, value, name));
          continue;
        }
        if (!link.get) {
          continue;
        }

        component.__disableKeys(link.keys, 'store');
        let current = utils.getPropertyByKeys(link.keys, component.__scope);
        !utils.compare(current, value) && component.scope.__set(link.keys, value);   
        component.__enableKeys(link.keys, 'store');
      }  
    });   
  }

  /**
   * Create a store link with the scope property
   * 
   * @param {string} name 
   * @param {string|string[]} keys
   * @param {obhect} [options]
   * @protected
   */
  __storeByKeys(name, keys, options = {}) {
    options = { get: true, set: true, ...options };

    if (!keys) {
      throw new Error(`Store link "${name}" must have the scope property name`);
    }

    if (!options.get && !options.set) {
      throw new Error(`Store link "${name}" must have at least "get" or "set" option as true`);
    }

    if (!Array.isArray(keys)) {
      keys = [keys];
    }
    
    this.__disableKeys(keys, 'store');
    (store.hasOwnProperty(name) || !utils.hasPropertyByKeys(keys, this.__scope)) && this.scope.__set(keys, store[name]);
    this.__enableKeys(keys, 'store');
    let keyString = Akili.joinBindingKeys(keys);
    let info;

    if (!this.__storeLinks[keyString]) {
      this.__storeLinks[keyString] = [];
    }

    let arr = this.__storeLinks[keyString];
    
    for (let i = arr.length - 1; i >= 0; i--) {
      let res = arr[i];

      if (res.component === this && res.name == name && res.keyString == keyString) {
        res.set = options.set;
        res.get = options.get;
        res.date = Date.now();
        return;
      }
    }

    if (!Akili.__storeLinks[name]) {
      Akili.__storeLinks[name] = [];
    }

    info = { component: this, name, keys, keyString, date: Date.now(), set: options.set, get: options.get };
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

    if (!Akili.__storeLinks[name]) {
      Akili.__storeLinks[name] = [];
    }

    let links = Akili.__storeLinks[name];
    
    for (let i = links.length - 1; i >= 0; i--) {
      let res = links[i];

      if (res.component === this && res.name == name && res.fn === fn) {
        res.date = Date.now();
        return;
      }
    }

    Akili.__storeLinks[name].push({ component: this, name, fn, date: Date.now() });

    if (name == '*' && options.callOnStart !== false) {
      let storeKeys = Object.keys(store.__target);
      let p = [];

      for (let i = 0, l = storeKeys.length ; i < l; i++) {
        let key = storeKeys[i];
        let val = store.__target[key];
        p.push(Akili.unisolate(() => fn.call(this, val, key)));
      }

      return Promise.all(p);
    }

    if (call) {
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
    if (!keys) {
      throw new Error(`You have to pass the scope property name for store link "${name}"`);
    }

    if (!Array.isArray(keys)) {
      keys = [keys];
    }

    let keyString = Akili.joinBindingKeys(keys);
    let arr = this.__storeLinks[keyString];

    if (!arr.length) {
      return;
    }
    
    for (let i = arr.length - 1; i >= 0; i--) {
      let res = arr[i];
      let links = Akili.__storeLinks[res.name];

      if (res.component !== this || res.name != name || res.keyString != keyString) {
        continue;
      }

      arr.splice(i, 1);

      if (!links || !links.length) {
        continue;
      }

      for (let k = links.length - 1; k >= 0; k--) {
        let link = links[k];

        if (link.component === this && link.keyString == keyString) {
          links.splice(k, 1);
        }
      }

      if (!links.length) {
        delete Akili.__storeLinks[name];
      }
    }

    if (!arr.length) {
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
    if (!Akili.__storeLinks[name]) {
      return;
    }

    let links = Akili.__storeLinks[name];
    
    for (let i = links.length - 1; i >= 0; i--) {
      let res = links[i];

      if (res.component === this && res.name == name && res.fn === fn) {
        links.splice(i, 1);
        break;
      }
    }

    if (!links.length) {
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
    if (this.__checkDisablement(keys, 'attr')) {
      return;
    }
    
    const links = this.__attrLinks[Akili.joinBindingKeys(keys)];
   
    if (!links || !links.length) {
      return;
    }
    
    return Akili.nextTick(() => {
      for (let i = 0, l = links.length; i < l; i++) {
        const link = links[i];

        if (link.fn) {
          continue;
        }

        if (!link.set) {
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
    let links = (this.__attrLinks[name] || []).concat(this.__attrLinks['*'] || []);
    
    if (!links || !links.length) {
      return;
    }  
    
    links = utils.sort(links, ['date'], true);
    
    for (let i = 0, l = links.length; i < l; i++) {
      const link = links[i];    

      if (link.fn) {
        Akili.unisolate(() => link.fn.call(this, value, utils.toDashCase(name)));
        continue;
      }
      
      if(!link.get) {
        continue;
      }
      
      this.__disableKeys(link.keys, 'attr');
      let current = utils.getPropertyByKeys(link.keys, this.__scope);
      !utils.compare(current, value) && this.scope.__set(link.keys, value);
      this.__enableKeys(link.keys, 'attr');
    }
  }

  /**
   * Create an attribute link with the scope property
   * 
   * @param {string} name 
   * @param {string|string[]} keys
   * @param {object} [options]
   * @protected
   */
  __attrByKeys(name, keys, options = {}) {   
    options = { get: true, set: true, ...options };
    name = utils.toCamelCase(name);

    if (!keys) {
      throw new Error(`Attribute link "${name}" must have the scope property name`);
    }

    if (!Array.isArray(keys)) {
      keys = [keys];
    }
    
    this.__disableKeys(keys, 'attr');
    (this.attrs.hasOwnProperty(name) || !utils.hasPropertyByKeys(keys, this.__scope)) && this.scope.__set(keys, this.attrs[name]); 
    this.__enableKeys(keys, 'attr');
    let keyString = Akili.joinBindingKeys(keys);
    
    if (!this.__attrLinks[keyString]) {
      this.__attrLinks[keyString] = [];
    }

    let arr = this.__attrLinks[keyString];
    
    for (let i = arr.length - 1; i >= 0; i--) {
      let res = arr[i];

      if (res.name == name && res.keyString == keyString) {
        res.get = options.get;
        res.set = options.set;
        res.date = Date.now();
        return;
      }
    }

    this.__attrLinks[keyString].push({ name, keys, keyString, date: Date.now(), set: options.set, get: options.get });
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
    name = utils.toCamelCase(name);
    let call = options.callOnStart === undefined? this.attrs.hasOwnProperty(name): options.callOnStart;    

    if (!this.__attrLinks[name]) {
      this.__attrLinks[name] = [];
    }

    let links = this.__attrLinks[name];
    
    for (let i = links.length - 1; i >= 0; i--) {
      let res = links[i];

      if (res.name == name && res.fn === fn) {
        res.date = Date.now();
        return;
      }
    }
    
    this.__attrLinks[name].push({ name, fn, date: Date.now() });

    if (name == '*' && options.callOnStart !== false) {
      let attrsKeys = Object.keys(this.__attrs).filter(k => !(this.__attrs[k] instanceof Akili.EventEmitter));
      let p = [];

      for (let i = 0, l = attrsKeys.length ; i < l; i++) {
        let key = attrsKeys[i];
        let val = this.__attrs[key];
        p.push(Akili.unisolate(() => fn.call(this, val, utils.toDashCase(key))));
      }

      return Promise.all(p);
    }
    
    if (call) {
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
    if (!keys) {
      throw new Error(`You have to pass the scope property name for attribute link "${name}"`);
    }

    if (!Array.isArray(keys)) {
      keys = [keys];
    }

    let keyString = Akili.joinBindingKeys(keys);
    let arr = this.__attrLinks[keyString];

    if (!arr.length) {
      return;
    }
    
    for (let i = arr.length - 1; i >= 0; i--) {
      let res = arr[i];

      if (res.name != name || res.keyString != keyString) {
        continue;
      }

      arr.splice(i, 1);
    }

    if (!arr.length) {
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
    if (!this.__attrLinks[name]) {
      return;
    }

    let links = this.__attrLinks[name];
    
    for (let i = links.length - 1; i >= 0; i--) {
      let res = links[i];

      if (res.name == name && res.fn === fn) {
        links.splice(i, 1);
        break;
      }
    }

    if (!links.length) {
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

      const targetKeys = Object.keys(target);

      for (let i = 0, l = targetKeys.length; i < l; i++) {    
        const k = targetKeys[i];
        const val = target[k];        
        const keys = [].concat(parents, [k]);   
        target[k] = observe(val, keys);
      }

      if (!value.__isProxy) {
        return this.__observe(value, parents);
      }

      return value;
    };

    return observe(value, startKeys || []);
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
    const keys = parents.length? [parents[0]]: [key];
    const isolationHash = this.__createKeysHash(keys);

    if (parents.length) {
      isDeleted = false;
    }

    if (!Akili.__isolation[isolationHash]) {
      Akili.__isolation[isolationHash] = {
        updatedAt: new Date().getTime(),
        component: this,
        keys
      };
    }

    (isDeleted !== undefined) && (Akili.__isolation[isolationHash].isDeleted = isDeleted);
    return Akili.__isolation[isolationHash];
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

      if (data.realComponent === this && data.keysString == parentKeysString) {
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
   * Get all nested bindings by keys
   * 
   * @param {string[]} keys 
   */
  __getAllBinds(keys) {
    const root = this.__getBind(keys);

    if (!root) {
      return [];
    }

    let data = [];

    const collect = (obj) => {
      data = data.concat(obj.__data || []);

      for (let key in obj) {
        if (!obj.hasOwnProperty(key) || key == '__data') {
          continue;
        }

        collect(obj[key]);
      }
    }

    collect(root);
    return data;
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
   * @param {boolean} [evaluated=false]
   * @returns {boolean}
   * @protected
   */
  __setNodeProperty(node, keys, value, evaluated = false) {
    let prop = this.__getNodeProperty(node, keys);    
    let copy = typeof value == 'object'? { hash: utils.createObjectHash(value) }: utils.copy(value);

    if (prop) {
      let res = node.__component.__compareNodePropertyValue(prop, value);
      prop.value = value;
      prop.copy = copy;
      return !res;
    }
    
    node.__properties[this.__createKeysHash(keys)] = {
      component: this,
      value,
      copy,
      node,
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
    return node.__properties[this.__createKeysHash(keys)] || null;
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
   * Map nodes
   * 
   * @param {function} fn
   * @param {object} [options]
   * @protected
   */
  __mapNodes(fn, options = {}) {
    options = { rootAttrs: true, attrs: true, node: true, ...options };

    const find = (el) => {
      if(!el) {
        return;
      }

      if(options.attrs && (el !== this.el || options.rootAttrs)) {
        for (let k = 0, attrs = el.attributes, c = attrs.length; k < c; k++) {
          fn(attrs[k]);
        }
      }

      for (let i = 0, l = el.childNodes.length; i < l; i++) {
        const node = el.childNodes[i];

        if (node.nodeType == 3) {
          options.node && fn(node);
        }
        else if (node.nodeType == 1 && !node.__akili) {
          find(node);
        }
      }
    };
    
    find(this.el);
  }

  /**
   * Get all nodes
   * 
   * @protected
   */
  __getAllNodes() {
    const nodes = [];
    this.__mapNodes(node => nodes.push(node));
    return nodes;
  }

  /**
   * Add tag
   * 
   * @param {string} tag
   * @param {Node} node
   * @protected
   */
  __addTag(tag, node) {
    if(!this.__tags[tag]) {
      this.__tags[tag] = [];    
    }

    if(!this.__hasTag(tag)) {
      this.__tags[tag].push({ node });
    }
  }

  /**
   * Check the tag exists
   * 
   * @param {string} tag
   * @param {Node} node
   * @protected
   * @returns {boolean}
   */
  __hasTag(tag, node) {
    if(!this.__tags[tag]) {
      return false;    
    }

    for(let i = 0, l = this.__tags[tag].length; i < l; i++) {    
      if(this.__tags[tag][i].node === node) {
        return true;
      }
    }

    return false;
  }

  /**
   * Remove the tag
   * 
   * @param {string} tag
   * @param {Node} [node]
   * @protected
   */
  __removeTag (tag, node) {
    if(!node) {
      delete this.__tags[tag];
      return;    
    }

    for(let i = 0, l = this.__tags[tag].length; i < l; i++) {
      if(this.__tags[tag][i].node === node) {
        this.__tags[tag].splice(i, 1);
        break;
      }
    }

    if(!this.__tags[tag].length) {
      delete this.__tags[tag];
    }
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
   * @param {Node|Node[]} nodes
   * @protected
   */
  __unbindByNodes(nodes) {
    !Array.isArray(nodes) && (nodes = [nodes]);

    const unbind = (obj) => {
      const keys = Object.keys(obj);

      for (let j = 0, c = keys.length; j < c; j++) {
        const k = keys[j];
        
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
        else if (!this.__isSystemBindingKey(k)) {
          unbind(obj[k]);
        }
      }
    };
    
    unbind(this.__bindings);
    this.__clearEmptyBindings();
  }

  /**
   * Remove all parents bindings with the nodes
   * 
   * @param {Node|Node[]} nodes
   * @protected
   */
  __unbindParentsByNodes(nodes) {    
    for(let i = 0, l = this.__parents.length; i < l; i++) {
      const parent = this.__parents[i];
      parent && parent.__akili && parent.__akili.__unbindByNodes(nodes);
    }
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

    for (let key in links) {
      const arr = links[key];

      for (let i = arr.length - 1; i >= 0; i--) {
        const link = arr[i];
  
        if (link.component === this) {
          arr.splice(i, 1);
        }
      }

      if (!arr.length) {
        delete links[key];
      }
    }
  }

  /**
   * Remove all child components
   *
   * @param {object} [options]
   * @protected
   */
  __removeChildren(options = {}) {
    let nodes = [];

    const remove = (children) => {
      for (let i = 0; i < children.length; i++) {
        let child = children[i];
        remove(child.__akili.__children);
        nodes = nodes.concat(child.__akili.__remove(options));
        i--;
      }
    };

    remove(this.__children);
    return nodes;
  }

  /**
   * Remove the component without children removing
   *
   * @param {object} [options]
   * @protected
   */
  __remove(options = {}) { 
    let nodes = [];
    this.attrs.onRemoved && this.attrs.onRemoved.trigger(undefined, { bubbles: false });   
    nodes = nodes.concat(this.__detach({ saveBindings: true }));
    nodes = nodes.concat(this.__empty({ saveBindings: true }));
    this.__clearStoreLinks();    
    this.removed();    
    Akili.removeScope(this.__scope.__name);    
    this.el.remove();

    if(!options.saveBindings) {
      this.__unbindParentsByNodes(nodes);
    }

    Akili.nextTick(() => {
      delete this.el.__akili;
      this.__bindings = null;
      this.__tags = null;    
      this.__evaluatingEvent = null;
      this.__recompiling = null;
      this.__compiling = null;
      this.__disableProxy = null;
      this.__disableStoreKeys = null;
      this.__disableAttrKeys = null;
      this.__children = null;
      this.__parent = null;
      this.__parents = null;
      this.__attrs = null;
      this.__attrLinks = null;
      this.__storeLinks = null;
      this.__attributeOf = null;
      this.__evaluationComponent = null;
      this.scope = null;
      this.el = null;
    });

    return nodes;
  }

  /**
   * Detach the component
   *
   * @param {object} [options]
   * @protected
   */
  __detach(options = {}) {
    this.__parent && this.__parent.__akili.__spliceChild(this.el);
    const nodes = []

    for (let i = 0, l = this.el.attributes.length; i < l; i++) {
      let node = this.el.attributes[i];
      node.__initialized && nodes.push(node);
    }

    if(!options.saveBindings) {
      this.__unbindParentsByNodes(nodes);
    }

    return nodes;
  }

  /**
   * Clear the component html
   *
   * @param {object} [options]
   * @protected
   */
  __empty(options = {}) {    
    const nodes = this.__removeChildren({ saveBindings: true });

    this.__mapNodes(node => {
      if(!node.__initialized) {
        return;
      }
      
      this.__deinitializeNode(node, { saveBindings: true });  
      nodes.push(node);    
    }, { rootAttrs: false });

    if(!options.saveBindings) {
      this.__unbindByNodes(nodes);
      this.__unbindParentsByNodes(nodes);
    }

    this.el.innerHTML = '';
    return nodes;
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
   * @param {string|string[]|function} [handler]
   */
  store(name, handler) {
    if (!this.__isMounted) {
      throw new Error(`Method "store" must be called after the compilation. For example, in "compiled" method.`);
    }

    const args = [].slice.call(arguments);

    if (typeof name == 'function') {
      args.unshift('*');
      handler = name;
    }

    return typeof handler === 'function'? this.__storeByFunction(...args): this.__storeByKeys(...args);
  }

  /**
   * Create a link with the attribute
   * 
   * @param {string} name 
   * @param {string|string[]|function} [handler]
   */
  attr(name, handler) {
    if (!this.__isMounted) {
      throw new Error(`Method "attr" must be called after the compilation. For example, in "compiled" method.`);
    }

    const args = [].slice.call(arguments);

    if (typeof name == 'function') {
      args.unshift('*');
      handler = name;
    }

    return typeof handler === 'function'? this.__attrByFunction(...args): this.__attrByKeys(...args);
  }

  /**
   * Remove the store link
   * 
   * @param {string} name 
   * @param {string|string[]|function} handler
   */
  unstore(name, handler) {
    if (!this.__isMounted) {
      throw new Error(`Method "unstore" must be called after the compilation. For example, in "compiled" method.`);
    }

    const args = [].slice.call(arguments);

    if (typeof name == 'function') {
      args.unshift('*');
      handler = name;
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
    if (!this.__isMounted) {
      throw new Error(`Method "unattr" must be called after the compilation. For example, in "compiled" method.`);
    }

    const args = [].slice.call(arguments);

    if (typeof name == 'function') {
      args.unshift('*');
      handler = name;
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
    return Akili.compile(this.el, { recompile: { setParents: true, checkChanges: false } });
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
    return this.__remove.apply(this, arguments);
  }

  created() {}
  compiled() {}
  recompiled() {}
  resolved() {}
  removed() {}
}