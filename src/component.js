import Akili from './akili.js';
import Scope from './scope.js';
import request from './services/request.js';
import store from './services/store.js';
import globals from './globals.js';
import utils from './utils.js';

export const evaluationRegex = /\${(((?!\${).)*)}/;
export const evaluationRegexGlobal = new RegExp(evaluationRegex.source, "g");
export const systemAttributes = ['component', 'scope', 'no-ssr'];

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
   * Define the component
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
   * @param {Element} el 
   * @param {object} [scope] 
   */
  constructor(el, scope = {}) {
    if (!(el instanceof Element)) {
      throw new Error(`You must pass an html element to the component constructor`);
    }

    this.__isCreated = false;
    this.__isMounted = false;
    this.__isCompiled = false;
    this.__isResolved = false;
    this.__isRemoved = false;
    this.__cancelled = false;
    this.__prevent = false;
    this.__bindings = {};
    this.__evaluatingEvent = null;
    this.__recompiling = null;
    this.__compiling = null;
    this.__disableProxy = {};
    this.__disableStoreKeys = {};
    this.__disableAttrKeys = {};
    this.__children = [];
    this.__parent = null;
    this.__parents = [];
    this.__content = '';
    this.__attrs = {};
    this.__attrLinks = {};
    this.__storeLinks = {};
    this.__attributeOf = null;
    this.__evaluationComponent = this;
    this.scope = scope;
    this.el = el;
  }

  /**
   * Create the compilation options 
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
   * Create the recompilation options 
   * 
   * @param {object} [options]
   * @protected
   */
  __createRecompilationOptions(options = {}) {
    return { 
      ...this.__createCompilationOptions(),
      setEvents: false,
      setParents: false,
      defineAttributes: false,
      ...options 
    };
  }
 
  /**
   * Recompile the component
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
   * Create the component
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
    this.__isCreated = true;
  }

  /**
   * Compile the node
   *
   * @protected
   * @returns {Promise}
   */
  __compile() {
    let control = this.__controlAttributes || !this.__evaluationParent;
    let p = Promise.resolve();
    this.__attributeOf = control? this: this.__evaluationParent.__akili;
    
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
        p = request.get(this.constructor.templateUrl, { cache: this.constructor.templateCache }).then(res => {
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
    if (this.__isResolved || this.__isRemoved) {
      return Promise.resolve();
    }
    
    this.attrs.onResolved && this.attrs.onResolved.trigger(undefined, { bubbles: false });

    return Promise.resolve(Akili.isolate(() => this.resolved())).then(res => {
      this.__isResolved = true;
      return res;
    });
  }

  /**
   * Initialize the component
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
   * Set the boolean attributes
   *
   * @protected
   */
  __setBooleanAttributes() {
    this.booleanAttributes = [].concat(Akili.htmlBooleanAttributes, this.constructor.booleanAttributes);

    const setAttr = el => {
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
   * Set the events
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
   * Set the component parents
   *
   * @protected
   */
  __setParents() {
    let parents = Akili.getAkiliParents(this.el);

    if (!parents.length) {
      return;
    }

    let newParent = this.__parent !== parents[0];
    let evaluationParent = null;

    for (let i = 0, l = parents.length; i < l; i++) {
      let parent = parents[i];

      if (!parent.__akili.constructor.transparent) {
        evaluationParent = parent;
        break;
      }
    }

    this.__compiling.newParent = newParent;
    newParent && this.__detach();

    if (this.constructor.transparent) {
      this.__evaluationComponent = evaluationParent.__akili;
    }

    this.__evaluationParent = evaluationParent;
    this.__parent = parents[0];
    this.__parents = parents;
    this.scope.__parent = this.__evaluationParent.__akili.scope;
    !this.__recompiling && this.__parent.__akili.__addChild(this.el);
    Object.setPrototypeOf(this.scope, this.__parent.__akili.__scope);
  }

  /**
   * Add the child element to the list
   *
   * @param {Element} el
   * @protected
   */
  __addChild(el) {
    this.__children.push(el);
  }

  /**
   * Splice the child from the list
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
   * Get the parsed expression
   *
   * @param {string} expression
   * @returns {*}
   * @protected
   */
  __getParsedExpression(expression) {
    return expression;
  }

  /**
   * Check the need of the avaluation
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
   * Check the node properties change
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
   * Compare the node property value
   * 
   * @param {object} prop 
   * @param {*} value 
   * @param {object} [options] 
   * @protected
   */
  __compareNodePropertyValue(prop, value, options = {}) {  
    return utils.compare(utils.createHash(value), prop.hash, options);
  }

  /**
   * Create an exception message
   * 
   * @param {Node} node 
   * @param {Error} err 
   * @protected
   */
  __createExceptionMessage(node, err) {
    let tagName = node.__component.el.tagName;
    let attrName = node.__component.el.getAttribute('component');
    let componentName = (attrName || tagName).toLowerCase();
    let elementName = node.__element.tagName.toLowerCase();
    let attributeName = (node instanceof window.Attr)? node.name.toLowerCase(): '';        
    let messages = [ err.message, node.__expression.trim() ];
    attributeName && messages.push(`[attribute ${attributeName}]`);
    messages = messages.concat([`[element ${elementName}]`, `[component ${componentName}]`]);
    return `Expression error: ` + messages.join('\n\tat ');
  }

  /**
   * Evaluate the node expression
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

    if (node.__component.parents(com => com.__prevent).length) {
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
        evaluate = this.constructor.parse(evalComponent.__evaluationComponent.scope, parseValue, { ...globals });
      }
      catch (err) {        
        throw this.__createExceptionMessage(node, err);
      }

      if(Akili.__evaluation) {
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
   * Bind the node and set the property
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
   * Nested evaluation by the keys
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

    const elEvaluate = element => {
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

          if(!bind || !bind.node || !bind.node.__initialized) {
            continue;
          }
          
          if (component.__checkNodePropertyChange(bind.node, prop.keys, prop.value)) { 
            component.__disableKeys(prop.keys);
            const checkProp = component.__getNodeProperty(bind.node, prop.keys);            

            if(checkProp && checkProp.evaluated) {       
              component.scope.__set(prop.keys, prop.value, { silent: true }); 
            }   

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

    const evaluate = elements => {
      for (let i = 0, l = elements.length; i < l; i++) {
        let component = elEvaluate(elements[i]);
        evaluate(component.__children);
      }
    };

    elEvaluate(this.el);
    evaluate(this.__children);
  }

   /**
   * Evaluate a value by the keys
   *
   * @param {string[]} keys
   * @protected
   */
  __evaluateByKeys (keys) {
    const closestKeys = [];
    const data = this.__getBind(keys, { closest: closestKeys });
    data && (keys = closestKeys);
    
    const evaluate = (val, keys) => {
      this.__evaluateNested(keys, true);

      if(!val) {
        return;
      }

      for (let k in val) {
        if(!val.hasOwnProperty(k) || this.__isSystemBindingKey(k)) {
          continue;
        }

        evaluate(val[k], keys.concat([k]));        
      }      
    }
    
    evaluate(data, keys);
  }

  /**
   * Evaluate the event expression
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
      evaluate = this.constructor.parse(this.__evaluationComponent.scope, expression[1], { ...globals,  event: e });
    }
    catch (err) {        
      throw this.__createExceptionMessage(node, err);
    }
    
    this.__evaluatingEvent = null;
    return evaluate;
  }

  /**
   * Evaluate the node expression with check
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
   * Prepare the attribute value for receiving
   * 
   * @param {Node} node
   * @param {*} value
   * @protected
   */
  __prepareAttributeIn(node, value) {    
    return utils.copy(value, { plain: true });
  }

  /**
   * Prepare the attribute value for sending
   * 
   * @param {Node} node
   * @param {*} value
   * @protected
   */
  __prepareAttributeOut(node, value) {    
    return utils.copy(value, { plain: true });
  }

  /**
   * Initialize the attributes
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
        emitter.bind(e => component.__evaluateEvent(node, el, e));
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
    const hasBindings = evaluationRegex.test(val.trim());
    const isBoolean = isAttr? /^boolean-/i.test(node.nodeName): false;
    const isEvent = isAttr? /^on-(.+)/i.test(node.nodeName): false;

    if(!el.__akili && !hasBindings && !isBoolean && !isEvent) {
      return false;
    }

    node.__name = this.__scope.__name + utils.createRandomString(16);
    node.__isEvent = isEvent;
    node.__hasBindings = hasBindings;
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
    if(!node.__initialized) {
      return;
    }
    
    if (node.__event) {
      node.__event.remove();
    }

    if (node.__hasBindings && !options.saveBindings) { 
      this.__unbindByNodes(node);     
      this.__unbindParentsByNodes(node);    
    }
    
    Akili.removeTag(node);    
    delete node.__name;
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
   * Interpolate the element attributes
   *
   * @param {Element} el
   * @param {Component} [attributeOf=null] - if the node has link with the parent scope
   * @protected
   */
  __interpolateAttributes(el, attributeOf = null) {
    for (let i = 0, attrs = el.attributes, l = attrs.length; i < l; i++) {
      this.__initializeAttribute(attrs[i], el, attributeOf);
    }
  }

  /**
   * Define the attributes as a proxy
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
   * Convert the object to a proxy
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
        else if (key == "__target") {
          return obj;
        }
        else if (key == "__component") {
          return this;
        }
        else if (key == "__keys") {
          return parents;
        }
        else if (this.__isSystemKey(key)) {
          return target[key];
        }

        if (Akili.__evaluation) { 
          let keys = [].concat(parents, [key]);
          let notBinding = false;
          let evaluated = !utils.getOwnPropertyTarget(this.__scope, keys);
          let component = this;
          let excArr = keys.slice();

          if (target instanceof Scope) {
            let realTarget = utils.getOwnPropertyTarget(target, [key]);
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
          else if (!utils.getEnumerablePropertyTarget(target, [key])) {
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

        let keys = [...parents, key];

        if (this.__checkDisablement(keys)) {
          target[key] = value;
          return true;
        }

        if(this.__isCreated && value !== undefined && !target.hasOwnProperty(key) && key in target) {          
          const tScope = utils.getEnumerablePropertyTarget(target, [key]);
          tScope.__component.scope[key] = value;
          return false;
        }

        if (typeof target[key] === 'function') {
          value = Akili.wrapFunction(value);
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
          this.__createIsolationObject(parents, key);
          return true;
        }

        if(this.__isResolved) {
          this.__triggerStoreAndAttr(keys);
        }
        
        if (this.__isMounted) {                   
          this.__evaluateByKeys(keys);
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
          this.__createIsolationObject(parents, key);
          return true;
        }

        if(this.__isResolved) {
          this.__triggerStoreAndAttr(keys);
        }

        this.__evaluateByKeys(keys);
        return true;
      }
    });
  }

  /**
   * Trigger the store and the attributes change
   * 
   * @param {string[]} keys 
   * @protected
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
   * Create the hash for the keys
   * 
   * @param {string[]} keys 
   * @returns {string}    
   * @protected
   */
  __createKeysHash(keys) {
    return `scope.${this.__scope.__name}.${Akili.joinBindingKeys(keys)}`;    
  }

  /**
   * Get the store of the disablement type
   * 
   * @param {string} type 
   * @returns {object}
   * @protected
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
    Akili.__disableStoreProxy = true;
    store[name] = value;
    Akili.__disableStoreProxy = false;
    let links = (Akili.__storeLinks[name] || []).concat(Akili.__storeLinks['*'] || []);

    if (!links || !links.length) {
      return;
    }

    links = utils.sort(links, ['date'], true);

    return Akili.isolate(() => {
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
   * Create the store link with the scope property
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
        arr[i] = { ...res, ...options, date: Date.now() };
        return;
      }
    }

    if (!Akili.__storeLinks[name]) {
      Akili.__storeLinks[name] = [];
    }

    info = { 
      ...options,
      component: this, 
      name, keys, 
      keyString, 
      date: Date.now()
    };
    this.__storeLinks[keyString].push(info);
    Akili.__storeLinks[name].push(info);
  }

  /**
   * Create the store link with the function
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
        links[i] = { ...res, ...options, date: Date.now() };
        return;
      }
    }

    Akili.__storeLinks[name].push({ 
      ...options,
      component: this, 
      name, 
      fn,
      date: Date.now() 
    });

    if (name == '*' && options.callOnStart !== false) {
      let storeKeys = Object.keys(store.__target);
      let p = [];

      for (let i = 0, l = storeKeys.length ; i < l; i++) {
        let key = storeKeys[i];
        let val = utils.copy(store.__target[key], { plain: true });
        p.push(Akili.unisolate(() => fn.call(this, val, key)));
      }

      return Promise.all(p);
    }

    if (call) {
      return Akili.unisolate(() => fn.call(this, utils.copy(store.__target[name], { plain: true })));
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
   * Trigger the attribute event by the keys
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
    
    return Akili.isolate(() => {
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
   * Trigger the attribute event by the name
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
   * Create the  attribute link with the scope property
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
        arr[i] = { ...res, ...options, date: Date.now() };
        return;
      }
    }

    this.__attrLinks[keyString].push({
      ...options, 
      name, 
      keys,
      keyString, 
      date: Date.now(),
      component: this 
    });
  }

  /**
   * Create the attribute link with the function
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
        links[i] = { ...res, ...options, date: Date.now() };
        return;
      }
    }
    
    this.__attrLinks[name].push({ 
      ...options,
      name, 
      fn,
      date: Date.now(), 
      component: this 
    });

    if (name == '*' && options.callOnStart !== false) {
      let attrsKeys = Object.keys(this.__attrs).filter(k => !(this.__attrs[k] instanceof Akili.EventEmitter));
      let p = [];

      for (let i = 0, l = attrsKeys.length; i < l; i++) {
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

    const keyString = Akili.joinBindingKeys(keys);
    const arr = this.__attrLinks[keyString];

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

    const links = this.__attrLinks[name];
    
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
    return (key.match && key.match('^_|#')) || key == 'constructor';
  }

  /**
   * Nested observing of the value
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
        target[k] = observe(val, [...parents, k]);
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
   * @returns {*}
   * @protected
   */
  __createIsolationObject (parents, key) {
    const keys = parents.length? [parents[0]]: [key];
    const isolationHash = this.__createKeysHash(keys);

    if (!Akili.__isolation[isolationHash]) {
      Akili.__isolation[isolationHash] = {
        updatedAt: new Date().getTime(),
        component: this,
        keys
      };
    }

    return Akili.__isolation[isolationHash];
  }

  /**
   * Prepare the node to the binding
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
    const parentKeysString = Akili.joinBindingKeys(parents);
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
   * Check the key is the system
   *
   * @param {string} key
   * @returns {boolean}
   * @protected
   */ 
  __isSystemBindingKey(key) {
    return key == '__data';
  }

  /**
   * Get a binding by the keys
   *
   * @param {string[]} keys
   * @param {object} [options]
   * @returns {object|null}
   * @protected
   */
  __getBind(keys, options = {}) {
    return utils.getPropertyByKeys(keys, this.__bindings, options) || null;
  }

  /**
   * Get all nested bindings by the keys
   * 
   * @param {string[]} keys 
   * @returns {array}
   */
  __getAllBinds(keys) {
    const root = this.__getBind(keys);

    if (!root) {
      return [];
    }

    let data = [];

    const collect = obj => {
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
   * Get a binding by the keys
   *
   * @param {string[]} keys
   * @param {Node} node
   * @returns {object|null}
   * @protected
   */
  __getBoundNode(keys, node) {
    const bind =  utils.getPropertyByKeys(keys, this.__bindings);

    if (!bind || !bind.__data || !bind.__data.length) {
      return null;
    }

    for (let i = 0, l = bind.__data.length; i < l; i++) {
      const data = bind.__data[i];

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
    const prop = this.__getNodeProperty(node, keys);    
    const hash = utils.createHash(value);

    if (prop) {
      let res = node.__component.__compareNodePropertyValue(prop, value);
      prop.value = value;
      prop.hash = hash;
      return !res;
    }
    
    node.__properties[this.__createKeysHash(keys)] = {
      component: this,
      value,
      hash,
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
    const hash = `scope.${this.__scope.__name}.${Akili.joinBindingKeys(keys)}`;
    delete node.__properties[hash];
  }

  /**
   * Map the nodes
   * 
   * @param {function} fn
   * @param {object} [options]
   * @protected
   */
  __mapNodes(fn, options = {}) {
    options = { rootAttrs: true, attrs: true, node: true, el: true, ...options };

    const find = el => {
      if(!el) {
        return;
      }

      if(options.attrs && (el !== this.el || options.rootAttrs)) {
        for (let k = 0, attrs = el.attributes, c = attrs.length; k < c; k++) {
          fn(attrs[k]);
        }
      }
      
      for (let i = el.childNodes.length - 1; i >= 0; i--) {
        const node = el.childNodes[i];

        if (node.nodeType == 3) {
          options.node && fn(node);
        }
        else if (node.nodeType == 1 && !node.__akili) {
          find(node);
          options.el && fn(node);          
        }
      }
    };
    
    find(this.el);
  }

  /**
   * Get all nodes
   * 
   * @returns {Node[]}
   * @protected 
   */
  __getAllNodes() {
    const nodes = [];
    this.__mapNodes(node => nodes.push(node));
    return nodes;
  }
  
  /**
   * Bind the data with the keys
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
   * Unbind the data by nodes
   *
   * @param {Node|Node[]} nodes
   * @protected
   */
  __unbindByNodes(nodes) {
    nodes instanceof Node && (nodes = [nodes]);

    const unbind = (obj, parent, key) => {
      const keys = Object.keys(obj);

      for (let j = 0, c = keys.length; j < c; j++) {
        const k = keys[j];
        
        if (k == '__data') {
          let data = obj[k] || [];
          let l = data.length;

          for (let i = 0; i < l; i++) {
            let bind = data[i];
            
            if (nodes.indexOf(bind.node) != -1) {
              delete bind.node;            
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
          unbind(obj[k], obj, k);
        }

        if(parent && !Object.keys(obj).length) {
          delete parent[key];
        }
      }
    };

    unbind(this.__bindings);
  }

  /**
   * Remove all parent bindings with the nodes
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
   * Remove the component without the children removing
   *
   * @param {object} [options]
   * @returns {Node[]}
   * @protected
   */
  __remove(options = {}) {
    this.attrs.onRemoved && this.attrs.onRemoved.trigger(undefined, { bubbles: false }); 
    this.removed();
    const detachNodes = this.__detach({ saveBindings: true, deinitializeNodes: true });
    const nodes = [].concat(detachNodes, this.__empty({ saveBindings: true })); 
    this.__unbindByNodes(detachNodes);
    !options.saveBindings && this.__unbindParentsByNodes(nodes);    
    this.__clearStoreLinks();  
    this.__scope.__remove();
    delete this.__scope;
    delete this.scope; 
    this.el.remove();
    delete this.el.__akili;
    delete this.el;    
    delete this.__parent;
    delete this.__attributeOf;
    delete this.__evaluationComponent;
    delete this.__evaluationParent;   
    delete this.__parents;
    delete this.__bindings;
    delete this.__attrLinks;
    delete this.__storeLinks;
    delete this.__attrs;
    delete this.attrs;
    this.__isRemoved = true;
    return nodes;
  }

  /**
   * Remove all children
   *
   * @param {object} [options]
   * @returns {Node[]}
   * @protected
   */
  __removeChildren(options = {}) {
    let nodes = [];

    for (let i = 0; i < this.__children.length; i++) {
      let child = this.__children[i];
      nodes = nodes.concat(child.__akili.__remove(options));
      i--;
    }

    return nodes;
  }

  /**
   * Detach the component
   *
   * @param {object} [options]
   * @returns {object}
   * @protected
   */
  __detach(options = {}) {
    this.__parent && this.__parent.__akili.__spliceChild(this.el);
    const nodes = [];

    for (let i = 0, l = this.el.attributes.length; i < l; i++) {
      let node = this.el.attributes[i];

      if(node.__initialized) {
        nodes.push(node);
        options.deinitializeNodes && this.__deinitializeNode(node, { saveBindings: true });
      }
    }

    !options.saveBindings && this.__unbindParentsByNodes(nodes);
    return nodes;
  }

  /**
   * Clear the component html
   *
   * @param {object} [options]
   * @returns {Node[]}
   * @protected
   */
  __empty(options = {}) {    
    const nodes = this.__removeChildren({ saveBindings: true });    
    this.__mapNodes(node => {      
      if(node.nodeType == 1) {
        node.remove();
        return;
      }

      if(!node.__initialized) {
        return;
      }      
      
      this.__deinitializeNode(node, { saveBindings: true });
      nodes.push(node);
    }, { rootAttrs: false });

    this.__unbindByNodes(nodes);
    !options.saveBindings && this.__unbindParentsByNodes(nodes);
    this.el.innerHTML = '';
    return nodes;
  }

  /**
   * Get the parent components
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

    const find = parent => {
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
   * Get the child components
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

    const find = children => {
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
   * Get the nearest components
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
   * Create the link with the store
   * 
   * @param {string} name 
   * @param {string|string[]|function} handler
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
   * Create the link with the attribute
   * 
   * @param {string} name 
   * @param {string|string[]|function} handler
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
   * Check the component using the selector
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
   * Get the closest parent component by the selector
   *
   * @param {string|function} [selector='']
   * @param {number|number[]} [levels=null]
   * @returns {Component}
   */
  parent(selector = '', levels = null) {
    return this.__getParent(selector, false, levels);
  }

  /**
   * Get an array of parent components by the selector
   *
   * @param {string|function} [selector='']
   * @param {number|number[]} [levels=null]
   * @returns {Component[]}
   */
  parents(selector = '', levels = null) {
    return this.__getParent(selector, true, levels);
  }

  /**
   * Get the closest child component by the selector
   *
   * @param {string|function} [selector='']
   * @param {number|number[]} [levels=null]
   * @returns {Component}
   */
  child(selector = '', levels = null) {
    return this.__getChildren(selector, false, levels);
  }

  /**
   * Get an array of child components by the selector
   *
   * @param {string|function} [selector='']
   * @param {number|number[]} [levels=null]
   * @returns {Component[]}
   */
  children(selector = '', levels = null) {
    return this.__getChildren(selector, true, levels);
  }

  /**
   * Get an array of components left from the current by the selector
   *
   * @param {string|function} [selector='']
   * @returns {Component[]}
   */
  before(selector = '') {
    return this.__getNear(selector, true, false);
  }

  /**
   * Get an array of components right from the current by the selector
   *
   * @param {string|function} [selector='']
   * @returns {Component[]}
   */
  after(selector = '') {
    return this.__getNear(selector, true, true);
  }

  /**
   * Get the closest leftcomponent by the selector
   *
   * @param {string|function} [selector='']
   * @returns {Component}
   */
  prev(selector = '') {
    return this.__getNear(selector, false, false);
  }

  /**
   * Get the closest right component by the selector
   *
   * @param {string|function} [selector='']
   * @returns {Component}
   */
  next(selector = '') {
    return this.__getNear(selector, false, true);
  }

  /**
   * Change the element parent
   *
   * @param {Element} parent
   */
  appendTo(parent) {   
    parent.appendChild(this.el);
    return Akili.compile(this.el, { recompile: { setParents: true, checkChanges: false } });
  }

  /**
   * Cancel the component compilation
   */
  cancel() {
    this.__cancelled = true;
  }

  /**
   * Compile the component but prevent the compilation inside
   */
  prevent() {
    this.__prevent = true;
  }

  /**
   * Clear the element content
   *
   * @returns {*}
   */
  empty() {
    return this.__empty.apply(this, arguments);
  }

  /**
   * Remove the element
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

  get transition() {
    return (this.__scope && this.__scope.__transition) || null;
  }
}