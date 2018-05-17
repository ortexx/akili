/**
 * Javascript framework
 *
 * const Akili = makeItEasy(js + html);
 *
 * @author Alexandr Balasyan <mywebstreet@gmail.com>
 * @link http://akilijs.com
 */

import Component from './component.js';
import If from './components/if.js';
import For from './components/for.js';
import Select from './components/select.js';
import Input from './components/input.js';
import Radio from './components/radio.js';
import Text from './components/text.js';
import Textarea from './components/textarea.js';
import Content from './components/content.js';
import Include from './components/include.js';
import Iframe from './components/iframe.js';
import Image from './components/image.js';
import Embed from './components/embed.js';
import Audio from './components/audio.js';
import Video from './components/video.js';
import Track from './components/track.js';
import Source from './components/source.js';
import Objects from './components/object.js';
import Route from './components/route.js';
import Url from './components/url.js';
import A from './components/a.js';
import Scope from './scope.js';
import EventEmitter from './event-emitter.js';
import request from './services/request.js';
import router from './services/router.js';
import store from './services/store.js';
import utils from './utils.js';
import globals from './globals.js';

/**
 * The framework object
 * 
 * {@link https://akilijs.com/docs/getting-started}
 */
const Akili = {};

Akili.__defaults = [];

/**
 * Set the framework's default variables
 */
Akili.setDefaults = function () {
  this.options = {
    debug: true,
    ignoredTags: ['globals.utils']
  };
  
  this.__init = null;
  this.__cleared = false;
  this.__components = {};
  this.__aliases = {};
  this.__scopes = {};
  this.__storeLinks = {};
  this.__window = {};
  this.__isolation = null;
  this.__evaluation = null;
  this.__wrapping = false;
  this.__onError = () => this.triggerInit(false);
  
  this.htmlBooleanAttributes = [
    'disabled', 'contenteditable', 'hidden'
  ];

  for(let key in globals) {
    delete globals[key];
  }

  globals.utils = utils;

  this.components = {};
  this.services = {};

  this.Component = Component;
  this.EventEmitter = EventEmitter;
  this.Scope = Scope;
  this.utils = utils;
  this.globals = globals;
  this.components.A = A;
  this.components.Audio = Audio;
  this.components.Content = Content;
  this.components.For = For;
  this.components.Embed = Embed;
  this.components.If = If;
  this.components.Include = Include;
  this.components.Input = Input;
  this.components.Iframe = Iframe;
  this.components.Image = Image;
  this.components.Object = Objects;
  this.components.Radio = Radio;
  this.components.Route = Route;
  this.components.Select = Select;
  this.components.Source = Source;
  this.components.Text = Text;
  this.components.Textarea = Textarea;
  this.components.Track = Track;
  this.components.Url = Url;
  this.components.Video = Video;
  this.services.request = request;
  this.services.router = router;
  this.services.store = store;

  this.define();
  this.errorHandling();
  this.isolateEvents();
  this.isolateArrayPrototype();
  this.isolateWindowFunctions(); 
  
  for(let i = 0, l = this.__defaults.length; i < l; i++) {
    this.__defaults[i]();
  }
}

/**
 * Define all default components
 */
Akili.define = function () {
  A.define();
  Audio.define();
  Content.define();
  Component.define();
  Embed.define();
  For.define();
  Include.define();
  Iframe.define();
  Image.define();
  Input.define();
  If.define();
  Objects.define();
  Radio.define();
  Route.define();
  Select.define();
  Source.define();
  Textarea.define();
  Track.define();
  Video.define();
};

/**
 * Set defaults
 * 
 * @param {function} fn 
 */
Akili.defaults = function (fn) {  
  this.__defaults.push(fn);
  fn();
}

/**
 * Clear the global context
 */
Akili.clearGlobals = function () {
  if(this.__cleared) {
    return;
  }

  for (let key in this.__window.Element.prototype) {
    Element.prototype[key] = this.__window.Element.prototype[key];
  }

  for (let key in this.__window.Array.prototype) {
    Array.prototype[key] = this.__window.Array.prototype[key];
  }

  for(let key in this.options.globals) {
    this.options.globals[key] = this.unwrap(this.options.globals[key]);
  }

  window.setTimeout = this.__window.setTimeout;
  window.setInterval = this.__window.setInterval;
  window.Promise = this.__window.Promise;
  window.removeEventListener('error', this.__onError);
  this.__cleared = true;
};

/**
 * Join binding keys
 *
 * @param {string[]} keys binding keys
 */
Akili.joinBindingKeys = function (keys) {
  return keys.map(el => el.toString()).join('.');
};

/**
 * Add scope to the scopes list
 *
 * @param scope
 */
Akili.addScope = function (scope) {
  if (this.__scopes[scope.__name]) {
    throw new Error(`Scope name ${scope.__name} already exists`);
  }

  this.__scopes[scope.__name] = scope;
};

/**
 * Get scope from the scopes list
 *
 * @param {string} name - scope name
 * @returns {Scope}
 */
Akili.getScope = function (name) {
  return this.__scopes[name];
};

/**
 * Delete scope from the scopes list
 *
 * @param {string} name - scope name
 */
Akili.removeScope = function (name) {
  const scope = this.__scopes[name];
  scope.__el = null;
  scope.__component = null;
  scope.__parent = null;
  this.__scopes[name] = null;
  delete this.__scopes[name];
};

/**
 * Get all elements with attached Akili components
 *
 * @param {Element} el
 * @param {boolean} [tree=true] - return array of the parents if true, closest parent if false
 * @returns {Array|Element|null}
 */
Akili.getAkiliParents = function (el, tree = true) {
  let arr = [];

  function check(node) {
    if (!node.parentNode) {
      return;
    }

    if (node.parentNode.__akili) {
      arr.push(node.parentNode);

      if (!tree) {
        return;
      }
    }

    check(node.parentNode);
  }

  check(el);
  return tree? arr: arr[0];
};

/**
 * Set element inner html with content replacement
 *
 * @example
 * // returns "<i>Hello</i><b>World</b>"
 * el.innerHTML = "<b>World</b>";
 * Akili.setTemplate(el, "<i>Hello</i>${this.__children}");
 *
 * @param {Element} el
 * @param {string} template
 * @returns {string}
 */
Akili.setTemplate = function (el, template) {
  template = template.replace(/\${(((?!\${)\s*this\.__content\s*)*)}/, el.innerHTML);
  el.innerHTML = template;

  return el.innerHTML;
};

/**
 * Generate unique scope name
 *
 * @returns {string}
 */
Akili.createScopeName = function () {
  return utils.createRandomString(16, (str) => {
    return !!this.__scopes[str];
  });
};

/**
 * Isolate function.
 * Every scope variable change calls according node evaluation.
 * For example, if you change some scope variable in the loop - evaluation will be called on the each change.
 * It may be slow for the application.
 * You can isolate this action and run all evaluation process after passed function at once.
 *
 * @param {function} fn
 * @returns {*}
 */
Akili.isolate = function (fn) { 
  if (this.__isolation) {
    return fn();
  }

  this.__isolation = {};
  let res = fn();
  let props = [];

  for (let k in this.__isolation) {
    if (!this.__isolation.hasOwnProperty(k)) {
      continue;
    }

    props.push(this.__isolation[k]);
  }

  this.__isolation = null;

  for (let i = 0, l = props.length; i < l; i++) {
    const prop = props[i];
    const val = utils.getPropertyByKeys(prop.keys, prop.component.__scope);    
    prop.component.__isResolved && prop.component.__triggerStoreAndAttr(prop.keys);
    prop.component.__evaluateByKeys(prop.keys, val, prop.isDeleted);
  }

  props = null;
  return res;
};

/**
 * Stop evaluation before the function and continue after
 *
 * @param {function} fn
 * @returns {*}
 */
Akili.unevaluate = function (fn) {
  let evaluation = this.__evaluation;
  let res;
  this.__evaluation = null;
  res = fn();
  this.__evaluation = evaluation;
  return res;
};

/**
 * Evaluate only root properties
 *
 * @param {function} fn
 * @returns {*}
 */
Akili.wrapping = function (fn) {
  if(this.__wrapping) {
    return fn();
  }
  
  this.__wrapping = true;
  let res = fn();  
  this.__wrapping = false;  
  return res;   
}

/**
 * Stop isolation before the function and continue after
 *
 * @param {function} fn
 * @returns {*}
 */
Akili.unisolate = function (fn) {
  let isolation = this.__isolation;
  let res;
  this.__isolation = null;
  res = fn();
  this.__isolation = isolation;
  return res;
};

/**
 * Run the function on the next tick
 *
 * @param {function} fn
 * @returns {Promise}
 */
Akili.nextTick = function (fn) {
  return new Promise((res) => setTimeout(() => Promise.resolve(fn()).then(res)));
};

/**
 * Initialize element
 *
 * @param {Element} el
 * @param {object} [options={}]
 * @returns {*}
 */
Akili.initialize = function (el, options = {}) {
  let recompile = options.recompile;
  let component = el.__akili;

  if (component) {
    if (recompile) {
      component.__recompile(recompile === true? {}: recompile);
      return component;
    }

    return;
  }

  let isRoot = el === this.__root;
  let componentName = utils.toDashCase(el.getAttribute('component') || el.tagName.toLowerCase());
  let _Component = this.__components[componentName];

  CHECK_ALIASES: if (!_Component) {
    let selectors = Object.keys(this.__aliases);

    if (!selectors.length) {
      break CHECK_ALIASES;
    }

    let selectorAll = selectors.join(',');

    if (!el.matches(selectorAll)) {
      break CHECK_ALIASES;
    }

    for (let i = 0, l = selectors.length; i < l; i++) {
      let selector = selectors[i];

      if (el.matches(selector)) {
        _Component = this.__components[this.__aliases[selector]];
        break;
      }
    }
  }

  if (!_Component && !isRoot) {
    return;
  }

  if (!_Component) {
    _Component = this.Component;
  }

  if (_Component.matches && !el.matches(_Component.matches)) {
    return;
  }

  component = new _Component(el, {});  
  
  if (component.__cancelled) {
    return;
  }

  if(Akili.getAkiliParents(el).find(p => p.__akili.__prevent)) {
    return;
  }

  component.__create();
  return component;
};

/**
 * Compile the element
 *
 * @param {Element} root
 * @param {object} [options]
 * @returns {Promise}
 */
Akili.compile = function (root, options = { recompile: false }) {  
  let elements = [];

  const nestedInitializing = (el) => {
    let component = this.initialize(el, options);
    let children = el.children;
    component && elements.push(component);

    for (let i = 0, l = children.length; i < l; i++) {
      let child = children[i];
      nestedInitializing(child);
    }
  };

  nestedInitializing(root);
  let p = [];

  for (let i = 0, l = elements.length; i < l; i++) {
    let component = elements[i];
    p.push(component.__compile());
  }

  return Promise.all(p).then(() => {
    let r = [];

    for (let i = elements.length - 1; i >= 0; i--) {
      let component = elements[i];
      r.push(component.__resolve());
    }

    return Promise.all(r);
  });
};

/**
 * Register the component or get it if fn is not passed
 *
 * @param {string} name
 * @param {Component} [fn]
 */
Akili.component = function (name, fn) {
  name = name.toLowerCase();

  if (!fn) {
    return this.__components[name] || null;
  }
  
  if (this.__components[name] && Akili.options.debug) {  
    // eslint-disable-next-line no-console
    console.warn(`Component ${name} already was added`);
  }

  this.__components[name] = fn;
};

/**
 * Remove the component
 *
 * @param {string} name
 */
Akili.removeComponent = function (name) {
  delete this.__components[name];
};

/**
 * Register the selector alias or get it if component name is not passed
 *
 * @param {string} selector - DOM selector
 * @param {string} [componentName]
 */
Akili.alias = function (selector, componentName = '') {
  componentName = componentName.toLowerCase();

  if (!componentName) {
    return this.__aliases[selector] || null;
  }

  if (this.__aliases[selector] && Akili.options.debug) {
    // eslint-disable-next-line no-console
    console.warn(`Alias with selector ${selector} already was added`);
  }

  this.__aliases[selector] = componentName;
};

/**
 * Remove the selector alias
 *
 * @param {string} selector
 */
Akili.removeAlias = function (selector) {
  delete this.__aliases[selector];
};

/**
 * Isolate array prototype functions
 */
Akili.isolateArrayPrototype = function () {
  this.__window.Array = { prototype: {} };

  let keys = Object.getOwnPropertyNames(Array.prototype);

  for (let i = 0, l = keys.length; i < l; i++) {
    let key = keys[i];
    let old = Array.prototype[key];

    if (typeof old != 'function' || key == 'constructor') {
      continue;
    }

    this.__window.Array.prototype[key] = old;

    Array.prototype[key] = function () {
      return Akili.unevaluate(() => {
        if (!this.__isProxy) {
          return old.apply(this, arguments);
        }
        
        return Akili.isolate(() => old.apply(this, arguments));
      });
    };
  }
};

/**
 * Isolate some window functions
 */
Akili.isolateWindowFunctions = function () {
  this.__window.setTimeout = setTimeout;
  this.__window.setInterval = setInterval;
  this.__window.Promise = window.Promise;
  window.setTimeout = this.createCallbackIsolation(window.setTimeout, 0);
  window.setInterval = this.createCallbackIsolation(window.setInterval, 0);
  
  if(!window.AKILI_SSR) {
    window.Promise.constructor = this.createCallbackIsolation(window.Promise.constructor);
    window.Promise.prototype.then = this.createCallbackIsolation(window.Promise.prototype.then, [0, 'last']);
    window.Promise.prototype.catch = this.createCallbackIsolation(window.Promise.prototype.catch);
  }  
};

/**
 * Isolate event listeners
 */
Akili.isolateEvents = function () {
  this.__window.Element = { prototype: {} };
  this.__window.Element.prototype.addEventListener = Element.prototype.addEventListener;
  this.__window.Element.prototype.removeEventListener = Element.prototype.removeEventListener;
  this.__window.Element.prototype.remove = Element.prototype.remove;

  Element.prototype.remove = function () {
    delete this.__akiliListeners;
    return Akili.__window.Element.prototype.remove.apply(this, arguments);
  };

  Element.prototype.addEventListener = function (name, fn) {
    let args = [].slice.call(arguments);

    if (!this.__akiliListeners) {
      this.__akiliListeners = {};
    }

    if (!this.__akiliListeners[name]) {
      this.__akiliListeners[name] = [];
    }

    if(typeof fn === 'function') {
      args[1] = function () {
        return Akili.isolate(() => fn.apply(this, arguments));
      };
    }    

    this.__akiliListeners[name].push({
      link: fn,
      fn: args[1]
    });

    return Akili.__window.Element.prototype.addEventListener.apply(this, args);
  };

  Element.prototype.removeEventListener = function (name, fn) {
    let args = [].slice.call(arguments);

    if (!this.__akiliListeners) {
      this.__akiliListeners = {};
    }

    if (!this.__akiliListeners[name]) {
      this.__akiliListeners[name] = [];
    }

    for (let i = 0, l = this.__akiliListeners[name].length; i < l; i++) {
      let listener = this.__akiliListeners[name][i];

      if (listener.link === fn) {
        this.__akiliListeners[name].splice(i, 1);
        args[1] = listener.fn;
        i--;
        l--;
        break;
      }
    }

    if (!this.__akiliListeners[name].length) {
      delete this.__akiliListeners[name];
    }

    return Akili.__window.Element.prototype.removeEventListener.apply(this, args);
  };
};

/**
 * Wrap the function callback to an isolate context
 *
 * @param {function} fn
 * @param {number|string|number[]|string[]} [pos="last"]
 * @returns {function}
 */
Akili.createCallbackIsolation = function (fn, pos = 'last') {
  return function () {
    let args = [].slice.call(arguments);
    !Array.isArray(pos) && (pos = [pos]);
    
    for(let i = 0, l = pos.length; i < l; i++) {
      let num = pos[i];
      let index = num;
      let callback = args[num];

      if(num == 'last') {
        index = args.length - 1;
        callback = args[index];
      }

      if(typeof callback != 'function') {
        continue;
      }

      if(!callback.__isolated) {
        args[index] = function () {
          return Akili.isolate(() => callback.apply(callback, arguments));
        };

        Object.defineProperty(args[index], '__isolated', {
          enumerable: false,
          value: callback
        });
      }
    }

    return fn.apply(this, args);
  };
};

/**
 * Wrap objects/classes to isolate and unevaluate data
 *
 * @param {object|function} obj
 * @param {object} [options] 
 */
Akili.wrap = function (obj, options = {}) {
  let current = obj;

  if(typeof obj == 'function') {
    obj = this.wrapFunction(obj, options);

    if(obj === current) {
      return obj;
    }
  }
  else if(!obj || typeof obj != 'object' || Array.isArray(obj)) {
    return obj;
  }

  let keys = Object.getOwnPropertyNames(obj);

  for(let k = 0, c = keys.length; k < c; k++) {
    let key = keys[k];
    let descriptor = Object.getOwnPropertyDescriptor(obj, key);

    if(!descriptor.configurable || !descriptor.writable) {
      continue;
    }

    if(options.reverse) {
      Object.defineProperty(obj, key, {...descriptor, value: obj[key].__akili || obj[key] });
      continue;
    }
    
    Object.defineProperty(obj, key, {...descriptor, value: this.wrap(obj[key], options) });
  } 
  
  return obj;
};

/**
 * Unwrap objects/classes
 *
 * @param {object|function} obj
 */
Akili.unwrap = function (obj) {
  return this.wrap(obj, { reverse: true });
}

/**
 * Isolate a function
 *
 * @param {function} fn
 * @param {object} [options]
 * @returns {function}
 */
Akili.wrapFunction = function (fn, options = {}) {
  if (fn.__akili) {
    return fn;
  }

  const akiliWrappedFunction = function () {
    if(options.tag && Akili.__evaluation && Akili.options.ignoredTags.indexOf(options.tag) == -1) {
      Akili.__evaluation.component.__addTag(options.tag, Akili.__evaluation.node);
    }

    return Akili.wrapping(() => fn.apply(this, arguments));
  };

  let keys = Object.keys(fn);
  akiliWrappedFunction.prototype = fn.prototype;

  for(let i = 0, l = keys.length; i < l; i++) {
    let key = keys[i];
    akiliWrappedFunction[key] = fn[key];
  }

  Object.defineProperty(akiliWrappedFunction, '__akili', {
    enumerable: false,
    value: fn
  });

  return akiliWrappedFunction;
};

/**
 * Evaluate the tags node expressions
 * 
 * @param {string|string[]} tags
 */
Akili.evaluateTag = function (tags) {
  if(!this.root) {
    return;
  }
  
  if(!Array.isArray(tags)) {
    tags = [tags];
  }

  const children = this.root.children();
  
  for(let i = 0, l = children.length; i < l; i++) {
    const child = children[i];
    const childTags = child.__tags;    

    for(let j = 0, s = tags.length; j < s; j++) {
      const tag = tags[j];
      
      if(!childTags[tag]) {
        continue;
      }
  
      for(let k = 0, c = childTags[tag].length; k < c; k++) {
        const obj = childTags[tag][k];
        child.__evaluateNode(obj.node, false);
      }
    }
  }  
}

/**
 * Remove the tags
 * 
 * @param {string|string[]} tags
 */
Akili.removeTag = function (tags) {
  if(!this.root) {
    return;
  }
  
  if(!Array.isArray(tags)) {
    tags = [tags];
  }

  const children = this.root.children();
  
  for(let i = 0, l = children.length; i < l; i++) {
    const child = children[i]; 

    for(let j = 0, s = tags.length; j < s; j++) {
      child.__removeTag(tags[j]);
    }
  }  
}

/**
 * Error handling
 */
Akili.errorHandling = function () {
  window.addEventListener('error', this.__onError);
};

/**
 * Trigger an initialization status
 *
 * @param {boolean} status
 */
Akili.triggerInit = function (status) {
  Akili.__init = status;
  window.dispatchEvent(new CustomEvent('akili-init', { detail: status }));
};

/**
 * Initialize the application
 *
 * @param {Element} [root]
 * @returns {Promise}
 */
Akili.init = function (root) {
  root = root || document.body;

  if(!(root instanceof Element)) {
    throw new Error(`Root element must be an html element`);
  }

  if(root === document.documentElement) {
    throw new Error(`"html" can't be the root element`);
  }

  this.__root = root;
  
  if(window.AKILI_SERVER) {    
    Akili.initServerSideHtml(window.AKILI_SERVER.html);
    Akili.initServerSideRequestCache(window.AKILI_SERVER.requestCache);
  }
  else {
    window.AKILI_CLIENT = {
      html: this.prepareServerSideHtml()      
    }
  }

  for(let key in this.options.globals) {
    this.options.globals[key] = this.wrap(this.options.globals[key], { tag: `globals.${key}` });
  }
  
  return this.compile(this.__root).then(() => {
    if (router.__init) {
      return router.changeState({ init: true });
    }
  }).then(() => {    
    window.AKILI_CLIENT && (window.AKILI_CLIENT.requestCache = this.prepareServerSideRequestCache());
    this.triggerInit(true);
  }).catch((err) => {
    this.triggerInit(false);
    throw err;
  });
};

/**
 * Initialize server-side rendering html
 * 
 * @param {string} html
 */
Akili.initServerSideHtml = function (html) {
  for (let i = this.__root.attributes.length - 1; i >= 0; i--){
    this.__root.removeAttribute(this.__root.attributes[i].name);
  }

  let parser = new DOMParser();
  let doc = parser.parseFromString(html, "text/html");
  let el = doc.querySelector(this.__root === document.body? 'body': 'body > *');    
  this.__root.innerHTML = el.innerHTML;

  for (let i = el.attributes.length - 1; i >= 0; i--) {
    let attr = el.attributes[i];
    this.__root.setAttribute(attr.name, attr.value);
  }  
}

/**
 * Initialize server-side rendering request cache
 * 
 * @param {object} obj
 */
Akili.initServerSideRequestCache = function (obj) {
  const init = (instance, obj) => {
    for(let key in obj) {
      instance.__cache[key] = obj[key];
    }
  }
  
  for (let key in obj) {
    let instance = key === '__main'? request: request.__instances[key];
    init(instance, obj[key]);
  }
}

/**
 * Prepare server-side rendering html
 */
Akili.prepareServerSideHtml = function () {
  return this.__root.outerHTML;
}

/**
 * Prepare server-side rendering request cache
 */
Akili.prepareServerSideRequestCache = function () {
  let cache = { __main: request.__cache };

  for(let key in request.__instances) {
    cache[key] = request.__instances[key].__cache;
  }

  return cache;
}

/**
 * Deinitialize the application
 */
Akili.deinit = function () {
  this.clearGlobals();
  router.deinit();
  request.deinit();
  let storeKeys = Object.keys(store.__target);
  
  for(let i = 0, l = storeKeys.length; i < l; i++) {
    delete store.__target[storeKeys[i]];
  }

  this.setDefaults();
};

window.Akili = Akili;
export default Akili;
Akili.setDefaults();