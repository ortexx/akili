import Akili from './akili.js';
import request from './services/request.js';
import utils from './utils.js';

const evaluationRegex = /\${(((?!\${).)*)}/;
const evaluationRegexGlobal = new RegExp(evaluationRegex.source, "g");
const systemAttributes = ['component', 'scope'];

export default class Component {
  static nestedWatching;
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
   * @param {Event} [event=null]
   */
  static parse(context, expression, event = null) {
    return (function (expression, event) {
      return eval(expression);
    }).call(context, expression, event);
  }

  constructor(el, scope = {}) {
    this.__isMounted = false;
    this.__isCompiled = false;
    this.__cancelled = false;
    this.__bindings = {};
    this.__evaluatingEvent = null;
    this.__recompiling = null;
    this.__compiling = {};
    this.__disableProxy = null;
    this.__children = [];
    this.__parent = null;
    this.__parents = [];
    this.__attrs = {};
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
    this.__isCompiled = false;
    this.__evaluationComponent.__disableProxy = null;
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
    this.el.__akili = this;
    this.__initialize();
    this.__setEvents();
    this.__setParents();
    this.__setBooleanAttributes();
    this.__defineAttributes();

    Akili.isolate(() => {
      this.created(this.attrs);
    });
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

    if(!this.__recompiling || this.__compiling.newParent || this.__controlAttributes) {
      this.__interpolateAttributes(this.el, this.__attributeOf);
    }

    let interpolate = (children, parent) => {
      for(let i = 0, l = children.length; i < l; i++) {
        let child = children[i];

        if(child.nodeType == 3) {
          this.__initializeNode(child, parent);

          child.nodeValue = this.__evaluate(child);
        }
        else if(child.nodeType == 1 && !child.__akili) {
          this.__interpolateAttributes(child);
          interpolate(child.childNodes, child);
        }
      }
    };

    interpolate(this.el.childNodes, this.el);
    this.__isMounted = true;

    let res;

    if(!this.__recompiling) {
      res = Akili.isolate(() => {
        this.attrs.onCompiled && this.attrs.onCompiled.trigger();

        return this.compiled();
      });

      if(this.constructor.templateUrl) {
        p = request.get(this.constructor.templateUrl).then((res) => {
          this.el.innerHTML = this.__content;
          Akili.setTemplate(this.el, res.data);
          delete this.__content;

          return Akili.compile(this.el, { recompile: true });
        });
      }
    }
    else {
      Akili.isolate(() => {
        this.attrs.onRecompiled && this.attrs.onRecompiled.trigger();
        this.recompiled();
      });
    }

    this.__isCompiled = true;
    this.__recompiling = null;
    this.__compiling = null;

    return p.then(() => {
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
    if(this.__recompiling) {
      return Promise.resolve();
    }

    this.attrs.onResolved && this.attrs.onResolved.trigger();
    return Promise.resolve(this.resolved());
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

    if(parent) {
      scope = new Scope(this.el.getAttribute('scope') || Akili.createScopeName(), this.el, this);
    }
    else {
      scope = new Scope(isRoot? 'root': Akili.createScopeName(), this.el, this);
      isRoot && (Akili.root = this);
    }

    let __scope = scope;
    let _scope = Object.assign(scope, this.scope);
    let nestedWatching = Akili.options.nestedWatching;
    let controlAttributes = this.constructor.controlAttributes;
    let events = this.constructor.events;

    if(this.constructor.template) {
      Akili.setTemplate(this.el, this.constructor.template);
    }

    if(this.constructor.templateUrl) {
      this.__content = this.el.innerHTML;
      this.el.innerHTML = '';
    }

    if(this.constructor.nestedWatching !== undefined) {
      nestedWatching = this.constructor.nestedWatching;
    }
    else if(Scope.nestedWatching !== undefined) {
      nestedWatching = Scope.nestedWatching;
    }

    this.__scope = __scope;
    this.__events = events;
    this.__nestedWatching = nestedWatching;
    this.__controlAttributes = controlAttributes;

    Akili.addScope(scope);

    if(nestedWatching) {
      scope = this.__nestedObserve(_scope, []);
    }
    else {
      scope = this.__observe(_scope, []);
    }

    this.scope = scope;
  }

  /**
   * Set boolean attributes
   *
   * @protected
   */
  __setBooleanAttributes() {
    this.booleanAttributes = [].concat(Akili.htmlBooleanAttributes, this.constructor.booleanAttributes);

    let setAttr = (el) => {
      for (let i = 0, attrs = el.attributes, l = attrs.length; i < l; i++) {
        let node = attrs[i];

        if(this.booleanAttributes.indexOf(node.nodeName) != -1) {
          if(el.hasAttribute(`boolean-${node.nodeName}`)) {
            continue;
          }

          el.setAttribute(`boolean-${node.nodeName}`, el.getAttribute(node.nodeName) || node.nodeName);
          el.removeAttribute(node.nodeName);
        }
      }

      for(let i = 0, l = el.children.length; i < l; i++) {
        let child = el.children[i];

        if(!child.__akili) {
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
    for(let i = 0, l = this.__events.length; i < l; i++) {
      let ev = this.__events[i];

      !/^on-/i.test(ev) && (ev = 'on-' + ev);

      if(!this.el.hasAttribute(ev)) {
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

    if(!parents.length) {
      return;
    }

    let newParent = this.__parent !== parents[0];
    let evaluateParent = null;

    for(let i = 0, l = parents.length; i < l; i++) {
      let parent = parents[i];

      if(!parent.__akili.constructor.transparent) {
        evaluateParent = parent;

        break;
      }
    }

    this.__compiling.newParent = newParent;
    newParent && this.__detach();

    if(this.constructor.transparent) {
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
   * @param {HTMLElement} el
   * @protected
   */
  __addChild(el) {
    this.__children.push(el);
  }

  /**
   * Splice child from the list
   *
   * @param {HTMLElement} el
   * @protected
   */
  __spliceChild(el) {
    for(let i = 0, l = this.__children.length; i < l; i++) {
      let child = this.__children[i];

      if(child === el) {
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
      if(!node.__properties.hasOwnProperty(k)) {
        continue;
      }

      let prop = node.__properties[k];
      let value = utils.getPropertyByKeys(prop.keys, prop.component.__scope);

      if(!utils.comparePreviousValue(value, prop.value, prop.copy, utils.copy(value))) {
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

    if(!prop) {
      return true;
    }

    return !utils.comparePreviousValue(value, prop.value, prop.copy, utils.copy(value));
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

    let res = node.__expression.replace(evaluationRegexGlobal, (m, d) => {
      counter++;

      let evaluate;
      let evaluation;
      let existingBindings = {};
      let parseValue = node.__component.__getParsedExpression(d);

      Akili.__evaluation = { node: node, list: []};

      try {
        evaluate = this.constructor.parse(this.__evaluationComponent.scope, parseValue);
      }
      catch (err) {
        throw err;
      }

      evaluation = Akili.__evaluation? Akili.__evaluation.list: [];
      Akili.__evaluation.list = null;
      Akili.__evaluation = null;

      for(let i = evaluation.length - 1; i >= 0; i--) {
        let data = evaluation[i];
        let hash = `${data.component.__scope.__name}.${data.keysString}`;

        if(data.notBinding) {
          continue;
        }

        if(existingBindings[hash]) {
          continue;
        }

        let parentValue = utils.getPropertyByKeys(data.parents, data.component.__scope);
        let evalComponent = node.__attributeOf || node.__component;

        if(utils.isScopeProxy(parentValue) && data.component !== evalComponent.__evaluationComponent) {
          continue;
        }

        let bind = data.component.__getBoundNode(data.keys, node);
        let value = utils.getPropertyByKeys(data.keys, data.component.__scope);

        if(!bind) {
          data.component.__bind(data.keys, { node: node });
        }

        data.component.__setNodeProperty(node, data.keys, value);
        existingBindings[hash] = true;
      }

      existingBindings = null;
      evaluation = null;

      if(node instanceof window.Attr) {
        expression = m;
        attributeValue = evaluate;

        return utils.makeAttributeValue(evaluate);
      }

      if(typeof evaluate == 'object') {
        try {
          return JSON.stringify(evaluate);
        }
        catch(e) {
          return evaluate;
        }
      }

      return evaluate;
    });

    if(node instanceof window.Attr) {
      let value = res;
      let isBooleanAttribute = false;

      if(counter) {
        node.__hasBindings = true;
      }

      if(counter == 1 && expression && node.__expression == expression) {
        value = attributeValue;
      }

      let clearAttribute = node.nodeName.replace(/^boolean-(.+)/i, '$1');

      if(clearAttribute != node.nodeName) {
        isBooleanAttribute = true;
        value = !!value;
      }

      if(node.__attributeOn) {
        let component = node.__attributeOn;

        component.__disableAttributeSetter = true;
        component.attrs[utils.toCamelCase(clearAttribute)] = value;
        component.__disableAttributeSetter = false;

        if (component.__isCompiled) {
          Akili.isolate(() => {
            component.attrs.onChanged && component.attrs.onChanged.trigger({ key: clearAttribute, value: value});
            component.changed(clearAttribute, value);

            let key = utils.toCamelCase(clearAttribute);
            let camelKey = key[0].toUpperCase() + key.slice(1);
            let fnName = 'changed' + camelKey;
            let evFnName = 'onChanged' + camelKey;

            component.attrs[evFnName] && component.attrs[evFnName].trigger(value);

            if (typeof component[fnName] == 'function') {
              component[fnName](value);
            }
          });
        }
      }
      else if(isBooleanAttribute) {
        let element = node.__element;
        let attr = utils.toCamelCase(clearAttribute);

        value? element.setAttribute(attr, 'true'): element.removeAttribute(attr);
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

    if(!withoutParents) {
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

    let elEvaluate = (element) => {
      let component = element.__akili;

      for (let m = 0; m < propsLength; m++) {
        let prop = props[m];
        let data = component.__getBind(prop.keys);

        if (!data || !data.__data) {
          continue;
        }

        for (let k = 0, c = data.__data.length; k < c; k++) {
          let bind = data.__data[k];

          if(component.__checkNodePropertyChanging(bind.node, prop.keys, prop.value)) {
            component.__disableProxy = true;
            component.__evaluateNode(bind.node);

            for(let _k in bind.node.__properties) {
              if(!bind.node.__properties.hasOwnProperty(_k)) {
                continue;
              }

              let _prop = bind.node.__properties[_k];
              let value = utils.getPropertyByKeys(_prop.keys, _prop.component.__scope);

              _prop.component.__setNodeProperty(bind.node, _prop.keys, value);
            }

            component.__disableProxy = null;
          }
        }
      }

      return component;
    };

    let evaluate = (elements) => {
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

    let unbind = (obj, parents) => {
      for(let k in obj) {
        if(!obj.hasOwnProperty(k) || k == '__data') {
          continue;
        }

        let _keys = [].concat(parents, [k]);
        let __keys = _keys.slice();
        let _isDeleted = false;
        let val = obj[k];
        let hasKey;

        __keys.shift();
        hasKey = utils.hasPropertyByKeys(__keys, value);

        if(value && typeof value == 'object' && !hasKey) {
          _isDeleted = true;
        }

        if(val && typeof val == 'object') {
          unbind(val, _keys);
        }

        this.__evaluateNested(_keys, true);

        if(value === null || typeof value != 'object' || !hasKey) {
          this.__unbind(_keys);
          _isDeleted && utils.deletePropertyByKeys(__keys, value);
        }
      }
    };

    data && unbind(data, [].concat(keys));
    this.__evaluateNested(keys);

    if(isDeleted) {
      this.__unbind(keys);
      isDeleted && utils.deletePropertyByKeys(keys, this.__scope);
    }
  }

  /**
   * Evaluate event expression
   *
   * @param {Node} node
   * @param {HTMLElement} el
   * @param {Event} e
   * @protected
   */
  __evaluateEvent(node, el, e) {
    let expression = evaluationRegex.exec(node.__expression);
    let evaluate;

    if(!expression) {
      return;
    }

    this.__evaluatingEvent = {
      el: el,
      component: this,
      event: e,
      node: node
    };

    this.__disableProxy = null;
    evaluate = this.constructor.parse(this.__evaluationComponent.scope, expression[1], e);
    this.__evaluatingEvent = null;

    return evaluate;
  }

  /**
   * Check changes and evaluate the passed node
   *
   * @param {Node} node
   * @protected
   */
  __evaluateNode(node) {
    if(this.__checkEvaluation(node)) {
      node[(node instanceof window.Attr)? 'value': 'nodeValue'] = this.__evaluate(node);
    }
  }

  /**
   * Attribute node initializing
   *
   * @param {Node} node
   * @param {HTMLElement} el
   * @param {Component} attributeOf - if node is linked with parent scope
   * @protected
   */
  __initializeAttribute(node, el, attributeOf) {
    if(systemAttributes.indexOf(node.nodeName) != -1) {
      return;
    }

    this.__initializeNode(node, el);

    let eventName = node.nodeName.replace(/^on-(.+)/i, '$1');
    let nodeName = utils.toCamelCase(node.nodeName);
    let component = attributeOf? attributeOf: this;

    if(eventName != node.nodeName) {
      if(node.__event) {
        return;
      }

      let emitter = new Akili.EventEmitter(eventName, el, component);

      if(node.__expression) {
        emitter.bind((e) => {
          return component.__evaluateEvent(node, el, e);
        });
      }

      node.__event = emitter;
      el.setAttribute(node.nodeName, utils.makeAttributeValue(emitter));

      if(attributeOf) {
        this.__disableAttributeSetter = true;
        this.attrs[nodeName] = emitter;
        this.__disableAttributeSetter = false;
      }

      return;
    }

    if(attributeOf) {
      node.__attributeOn = this;
      node.__attributeOf = component;
    }

    el.setAttribute(node.nodeName, component.__evaluate(node));
  }

  /**
   * Initialize the node
   *
   * @param {Node} node
   * @param {HTMLElement} el
   * @returns {boolean}
   * @protected
   */
  __initializeNode(node, el) {
    if(node.__initialized) {
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
   * @param {HTMLElement} el
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
    let changeAttribute = (key, value, isDeleted = false) => {
      if(this.__disableAttributeSetter) {
        return;
      }

      let node = this.el.getAttributeNode(key);

      if(node) {
        if(node.__event) {
          node.__event.unbind();
          node.__event = null;
          node.__expression = value;
        }

        if(node.__hasBindings) {
          this.__parent && this.__parent.__akili.__evaluationComponent.__unbindByNodes([node]);
          node.__hasBindings = false;
          node.__expression = value;
        }
      }

      if(isDeleted) {
        this.el.removeAttribute(key);
      }
      else if(node) {
        node.value = value;
      }
      else {
        this.el.setAttribute(key, value);
      }
    };

    this.attrs = new Proxy(this.__attrs, {
      get: (target, key) => {
        if(key == '__isProxy') {
          return true;
        }

        return target[key];
      },
      set: (target, key, value) => {
        let attrKey = utils.toDashCase(key);

        if(this.booleanAttributes.indexOf(attrKey) != -1) {
          attrKey = `boolean-${attrKey}`;

          if(value) {
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

        if(this.__disableProxy) {
          return target[key];
        }

        if(this.__isSystemKey(key)) {
          return target[key];
        }

        if(typeof target[key] == 'function') {
          let realTarget  = utils.getOwnPropertyTarget(target, key);

          if(!utils.isPlainObject(realTarget)) {
            realTarget[key] = Akili.isolateFunction(realTarget[key], realTarget.__component);
          }
        }

        if (Akili.__evaluation) {
          let keys = [].concat(parents, [key]);
          let notBinding = false;

          if(!(key in target)) {
            target[key] = undefined;
          }
          else if(!utils.getEnumerablePropertyTarget(target, key)) {
            notBinding = true;
          }

          this.__bindNode(Akili.__evaluation.list, keys, parents, target[key], notBinding);

          return target[key];
        }

        return target[key];
      },
      set: (target, key, value) => {
        if(this.__disableProxy) {
          target[key] = value;

          return true;
        }

        if(this.__isSystemKey(key)) {
          target[key] = value;

          return true;
        }

        let keys = [].concat(parents, [key]);

        if(this.__nestedWatching) {
          target[key] = this.__nestedObserve(value, keys);
        }
        else {
          target[key] = value;
        }

        if(Akili.__isolation) {
          this.__createIsolationObject(parents, key, false);

          return true;
        }

        if(this.__isMounted) {
          this.__evaluateByKeys(keys, value);
        }

        return true;
      },
      deleteProperty: (target, key) => {
        let keys = [].concat(parents, [key]);

        if(this.__disableProxy) {
          delete target[key];

          return true;
        }

        if(this.__isSystemKey(key)) {
          delete target[key];

          return true;
        }

        if(Akili.__isolation) {
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
   * Check key is system
   *
   * @param {string} key
   * @returns {boolean}
   */
  __isSystemKey (key) {
    if(key == '__' || (key[0] == '_' && key[1] == '_')) {
      return true;
    }
    else if(['constructor'].indexOf(key) != -1) {
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
    this.__disableProxy = true;

    let observe = (value, parents) => {
      if(typeof value != 'object' || value === null) {
        return value;
      }

      if(!utils.isPlainObject(value) && !utils.isScopeProxy(value) && !(value instanceof Akili.Scope)) {
        return value;
      }

      let target = value;

      if(value.__isProxy) {
        target = value.__target;

        if(!this.__disableProxyRedefining) {
          if(value.__component !== this) {
            target = utils.copy(target, false);
            value = target;
          }
          else if(Akili.joinBindingKeys(parents) != Akili.joinBindingKeys(value.__keys)) {
            value = target;
          }
        }
      }

      for(let k in target) {
        if (!target.hasOwnProperty(k)) {
          continue;
        }

        let val = target[k];
        let keys = [].concat(parents, [k]);

        target[k] = observe(val, keys);
      }

      if(!value.__isProxy) {
        return this.__observe(target, parents);
      }

      return value;
    };

    let res = observe(value, startKeys || []);

    this.__disableProxy = null;

    return res;
  }

  /**
   * Create isolation object
   *
   * @param {string[]} parents
   * @param {string} key
   * @param {boolean} [isDeleted=false]
   * @returns {*}
   * @protected
   */
  __createIsolationObject (parents, key, isDeleted = false) {
    let keys = parents.length? [parents[0]]: [key];
    let isolationKey = `${this.__scope.__name}.${Akili.joinBindingKeys(keys)}`;

    if(parents.length) {
      isDeleted = false;
    }

    if(!Akili.__isolation[isolationKey]) {
      Akili.__isolation[isolationKey] = {
        component: this,
        keys: keys
      };
    }

    (isDeleted !== undefined) && (Akili.__isolation[isolationKey].isDeleted = isDeleted);
    Akili.__isolation[isolationKey].value = utils.getPropertyByKeys(keys, this.__scope);

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
   * @protected
   */
  __bindNode(bind, keys, parents, value, notBinding = false) {
    let parentKeysString = Akili.joinBindingKeys(parents);

    if(bind.length && !notBinding) {
      let l = bind.length - 1;
      let data = bind[l];

      if(data.keysString == parentKeysString && data.component === this) {
        bind.splice(l, 1);
      }
    }

    bind.push({
      component: this,
      keysString: Akili.joinBindingKeys(keys),
      parents: parents,
      keys: keys,
      value: value,
      notBinding: notBinding
    });
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

    if(!bind || !bind.__data || !bind.__data.length) {
      return null;
    }

    for(let i = 0, l = bind.__data.length; i < l; i++) {
      let data = bind.__data[i];

      if(data.node === node) {
        return data;
      }
    }

    return null;
  }

  /**
   * Set node property
   *
   * @param {Node} node
   * @param {string[]} keys
   * @param {*} value
   * @returns {boolean}
   * @protected
   */
  __setNodeProperty(node, keys, value) {
    let prop = this.__getNodeProperty(node, keys);
    let copy = utils.copy(value);

    if(prop) {
      let res = utils.comparePreviousValue(value, prop.value, prop.copy, copy);

      prop.value = value;
      prop.copy = copy;

      return !res;
    }

    let hash = `${this.__scope.__name}.${Akili.joinBindingKeys(keys)}`;

    node.__properties[hash] = {
      value: value,
      copy: copy,
      component: this,
      keys: keys
    };

    return true;
  }

  /**
   * Get node property
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
   * Delete node property
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
      let obj = {__data: []};

      if(!last) {
        return value? value: obj;
      }

      if(typeof value == 'object') {
        obj = value;
      }

      if(!obj.__data) {
        obj.__data = [];
      }

      obj.__data.push(data);

      return obj;
    });
  }

  /**
   * Unbind keys
   *
   * @param {string[]} keys
   * @protected
   */
  __unbind(keys) {
    let bind = utils.getPropertyByKeys(keys, this.__bindings);

    if(!bind || !bind.__data) {
      return;
    }

    for(let i = 0, l = bind.__data.length; i < l; i++) {
      let node = bind.__data[i].node;

      this.__deleteNodeProperty(node, keys);
    }

    utils.deletePropertyByKeys(keys, this.__bindings, (value) => {
      if(Object.keys(value).length > 1) {
        value.__data = [];

        return false;
      }

      return true;
    });
  }

  /**
   * Unbind by nodes
   *
   * @param {Node[]} nodes
   * @protected
   */
  __unbindByNodes(nodes) {
    let unbind = (obj) => {
      for(let k in obj) {
        if(!obj.hasOwnProperty(k)) {
          continue;
        }

        if(k == '__data') {
          let data = obj[k] || [];
          let l = data.length;

          for(let i = 0; i < l; i++) {
            let bind = data[i];

            if(nodes.indexOf(bind.node) != -1) {
              data.splice(i, 1);
              i--;
              l--;
            }
          }

          if(!l) {
            delete obj[k];
          }
        }
        else {
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
    let clear = (obj, parent, key) => {
      for(let k in obj) {
        if(!obj.hasOwnProperty(k)) {
          continue;
        }

        let val = obj[k];

        if(k == '__data' && (!val || !val.length)) {
          delete obj[k];
        }
        else if(k != '__data') {
          if(!Object.keys(obj[k]).length) {
            delete obj[k];
          }
          else {
            clear(obj[k], obj, k);
          }
        }
      }

      if(!Object.keys(obj).length && parent) {
        delete parent[key];
      }
    };

    clear(obj || this.__bindings);
  }

  /**
   * Remove all child components
   *
   * @protected
   */
  __removeChildren() {
    let remove = (children) => {
      for(let i = 0; i < children.length; i++) {
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
    this.attrs.onRemoved && this.attrs.onRemoved.trigger();
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
    if(this.__evaluateParent && !this.__controlAttributes) {
      this.__evaluateParent.__akili.__unbindByNodes([].slice.call(this.el.attributes));
    }

    if(this.__parent) {
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

    let find = (children) => {
      for(let i = 0, l = children.length; i < l; i++) {
        let child = children[i];

        if(child.nodeType == 3) {
          nodes.push(child);
        }
        else if(child.nodeType == 1 && !child.__akili) {
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

    if(typeof levels != 'object') {
      levels = [levels];
    }

    let find = (parent) => {
      if(!parent) {
        return;
      }

      if(!levels || levels.indexOf(level) != -1) {
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

    if(typeof levels != 'object') {
      levels = [levels];
    }

    let find = (children) => {
      for(let i = 0, l = children.length; i < l; i++) {
        let child = children[i];

        if(!levels || levels.indexOf(level) != -1) {
          if(!selector || child.__akili.matches(selector)) {
            if(!findAll) {
              arr.push(child.__akili);

              return;
            }

            arr.push(child.__akili);
          }
        }
      }

      level++;

      for(let i = 0, l = children.length; i < l; i++) {
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
    if(!this.__parent) {
      return null;
    }

    let levelElements = this.__parent.__akili.__children.slice();
    let arr = [];

    right && levelElements.reverse();

    for(let i = 0, l = levelElements.length; i < l; i++) {
      let el = levelElements[i];

      if(el === this.el) {
        break;
      }

      if(!selector || el.__akili.matches(selector)) {
        arr.push(el.__akili);
      }
    }

    arr.reverse();

    if(!findAll) {
      return arr.length? arr[0]: null;
    }

    return arr;
  }

  /**
   * Check the component matches selector
   *
   * @param {string|function} selector
   * @returns {boolean}
   */
  matches(selector) {
    if(typeof selector == 'function') {
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
   * @param {HTMLElement} parent
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
  changed(key, value) {}
  resolved() {}
  removed() {}
}