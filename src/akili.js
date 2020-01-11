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
 * The framework main object
 * 
 * {@link https://akilijs.com/docs/getting-started}
 */
const Akili = {};

Akili.options = {
  debug: true
};

Akili.__init = null;
Akili.__root = null;
Akili.__components = {};
Akili.__aliases = {};
Akili.__scopes = {};
Akili.__storeLinks = {};
Akili.__window = {};
Akili.__tags = {};
Akili.__isolation = null;
Akili.__evaluation = null;
Akili.__wrapping = false;  
Akili.__rootOuterHTML = '';
Akili.__onError = () => Akili.triggerInit(false);

Akili.htmlBooleanAttributes = [
  'disabled', 'contenteditable', 'hidden'
];

Akili.components = {};
Akili.services = {};
Akili.Component = Component;
Akili.EventEmitter = EventEmitter;
Akili.Scope = Scope;
Akili.utils = utils;
Akili.globals = globals;
Akili.components.A = A;
Akili.components.Audio = Audio;
Akili.components.Content = Content;
Akili.components.For = For;
Akili.components.Embed = Embed;
Akili.components.If = If;
Akili.components.Include = Include;
Akili.components.Input = Input;
Akili.components.Iframe = Iframe;
Akili.components.Image = Image;
Akili.components.Object = Objects;
Akili.components.Radio = Radio;
Akili.components.Route = Route;
Akili.components.Select = Select;
Akili.components.Source = Source;
Akili.components.Text = Text;
Akili.components.Textarea = Textarea;
Akili.components.Track = Track;
Akili.components.Url = Url;
Akili.components.Video = Video;
Akili.services.request = request;
Akili.services.router = router;
Akili.services.store = store;

/**
 * Define the default components
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
 * Clear the global context
 */
Akili.clearGlobals = function () {
  for(let key in globals) {
    delete globals[key];
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
};

/**
 * Join the binding keys
 *
 * @param {string[]} keys binding keys
 */
Akili.joinBindingKeys = function (keys) {
  return keys.map(el => el.toString()).join('.');
};

/**
 * Add the scope
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
 * Get the scope
 *
 * @param {string} name - scope name
 * @returns {Scope}
 */
Akili.getScope = function (name) {
  return this.__scopes[name];
};

/**
 * Remove the scope
 *
 * @param {string} name - scope name
 */
Akili.removeScope = function (name) {
  delete this.__scopes[name];
};

/**
 * Get all elements that is wrapped in the Akili component
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
 * Create the template
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
 * Generate the unique scope name
 *
 * @returns {string}
 */
Akili.createScopeName = function () {
  return utils.createRandomString(16, str => !!this.__scopes[str]);
};

/**
 * Isolate the scope changes
 *
 * @param {function} fn
 * @returns {*}
 */
Akili.isolate = function (fn) { 
  let isolation = this.__isolation;
  !isolation && (this.__isolation = {});
  let res;

  try {
    res = fn();

    if(isolation) {
      return res;
    }
  }
  catch(err) {
    this.__isolation = null;
    throw err;
  }
  
  let props = [];

  for (let k in this.__isolation) {
    props.push(this.__isolation[k]);
  }

  this.__isolation = null;

  for (let i = 0, l = props.length; i < l; i++) {    
    const prop = props[i];

    if(prop.component.__isRemoved) {
      continue;
    }
     
    prop.component.__isResolved && prop.component.__triggerStoreAndAttr(prop.keys);
    prop.component.__evaluateByKeys(prop.keys);
  }

  return res;
};

/**
 * Stop the evaluation inside the function
 *
 * @param {function} fn
 * @returns {*}
 */
Akili.unevaluate = function (fn) {
  let evaluation = this.__evaluation;  
  this.__evaluation = null;
  let res;

  try {
    res = fn();
  }
  catch(err) {
    this.__evaluation = evaluation;
    throw err;
  }

  this.__evaluation = evaluation; 
  return res;
};

/**
 * Evaluate only the root properties
 *
 * @param {function} fn
 * @returns {*}
 */
Akili.wrapping = function (fn) {
  let wrapping = this.__wrapping;
  !wrapping && (this.__wrapping = true);
  let res;

  try {
    res = fn();

    if(wrapping) {
      return res;
    }
  }
  catch(err) {
    this.__wrapping = false;
    throw err;
  }

  this.__wrapping = false; 
  return res;   
}

/**
 * Stop the isolation inside the function
 *
 * @param {function} fn
 * @returns {*}
 */
Akili.unisolate = function (fn) {
  let isolation = this.__isolation;
  this.__isolation = null;
  let res;

  try {
    res = fn();
  }
  catch(err) {
    this.__isolation = isolation;
    throw err;
  }

  this.__isolation = isolation;
  return res;
};

/**
 * Initialize the element
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

  if(window.AKILI_SSR) {
    const arr = root.querySelectorAll('[no-ssr]');

    for(let i = 0, l = arr.length; i < l; i++) {
      arr[i].remove();
    }
  }

  const nestedInitializing = el => {
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
 * Register the component.
 * Or get it if the function is not passed
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
 * Register the selector alias.
 * Or get it if the component name is not passed
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
 * Isolate the array prototype functions
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
 * Isolate the window functions
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
 * Isolate the globals
 */
Akili.isolateGlobals = function () {  
  globals.__target.utils = this.wrap(utils); 
  this.isolateEvents();
  this.isolateArrayPrototype();
  this.isolateWindowFunctions();
};

/**
 * Isolate the event listeners
 */
Akili.isolateEvents = function () {
  this.__window.Element = { prototype: {} };

  if(window.AKILI_SSR) {
    return;
  }
  
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
 * Wrap the function callback with the isolation context
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
 * Wrap the object/function to isolate and unevaluate data
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
 * Unwrap the object/function
 *
 * @param {object|function} obj
 */
Akili.unwrap = function (obj) {
  return this.wrap(obj, { reverse: true });
}

/**
 * Isolate the function
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
    if(options.tag && Akili.__evaluation) {
      Akili.addTag(options.tag, Akili.__evaluation.node);
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
 * Add the tag
 * 
 * @param {string} tag
 * @param {Node} node
 */
Akili.addTag = function (tag, node) {
  if(this.hasTag(tag, node)) {
    return;
  }

  if(!this.__tags[node.__name]) {
    this.__tags[node.__name] = {};    
  }

  if(!this.__tags[node.__name][tag]) {
    this.__tags[node.__name][tag] = [];    
  }

  this.__tags[node.__name][tag].push({ node });
}

/**
 * Check the tag exists
 * 
 * @param {string} tag
 * @param {Node} [node]
 * @returns {boolean}
 */
Akili.hasTag = function(tag, node) {
  if(!node){
    for(let key in this.__tags) {
      for(let k in this.__tags[key]) {
        if(k == tag) {
          return true;
        }
      }
    }

    return false;
  }

  if(!this.__tags[node.__name]) {
    return false;    
  }

  if(!this.__tags[node.__name][tag]) {
    return false;    
  } 

  return true;
}

/**
 * Remove the tag
 * 
 * @param {string} [tag]
 * @param {Node} [node]
 */
Akili.removeTag = function (tag, node) {
  if(typeof tag == 'object') {
    node = tag;
    tag = undefined;
  }

  if(!tag) { 
    delete this.__tags[node.__name];
    return;
  }

  if(!node) {
    for(let key in this.__tags) {
      for(let k in this.__tags[key]) {
        if(k == tag) {
          delete this.__tags[key][k]
        }
      }
  
      if(!Object.keys(this.__tags[key]).length) {
        delete this.__tags[key];
      }
    }

    return;    
  }

  for(let key in this.__tags[node.__name]) {
    if(key == tag) {
      delete this.__tags[node.__name][key];
    }
  }

  if(!Object.keys(this.__tags[node.__name]).length) {
    delete this.__tags[node.__name];
  }
}

/**
 * Evaluate the tag expressions
 * 
 * @param {string} tag
 */
Akili.triggerTag = function (tag) {
  for(let key in this.__tags) {
    for(let k in this.__tags[key]) {
      if(k == tag) {
        const arr = this.__tags[key][k];

        for(let i = 0, l = arr.length; i < l; i++) {
          const obj = arr[i];
          obj.node.__component.__evaluateNode(obj.node, false);
        }
      }
    }
  }
}

/**
 * Handle the errors
 */
Akili.handleErrors = function () {
  window.addEventListener('error', this.__onError);
};

/**
 * Trigger the initialization status
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
  this.__rootOuterHTML = root.outerHTML;

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
  
  return this.compile(this.__root).then(() => {
    if (router.__init) {
      return router.changeState({ init: true });
    }
  }).then(() => {    
    window.AKILI_CLIENT && (window.AKILI_CLIENT.requestCache = this.prepareServerSideRequestCache());
    this.triggerInit(true);
  }).catch(err => {
    this.triggerInit(false);
    throw err;
  });
};

/**
 * Deinitialize the application
 */
Akili.deinit = function () { 
  this.__root && (this.__root.outerHTML = this.__rootOuterHTML);

  for(let key in this.__scopes) {
    const component = this.__scopes[key].__component;
    component && component.remove();
  }

  this.__rootOuterHTML = '';
  this.__init = null;
  this.__root = null;
  this.__scopes = {};
  this.__storeLinks = {};
  this.__tags = {};
};

/**
 * Destroy the framework
 */
Akili.destroy = function () {
  this.deinit();  
  this.clearGlobals();

  let storeKeys = Object.keys(store.__target);
  
  for(let i = 0, l = storeKeys.length; i < l; i++) {
    delete store.__target[storeKeys[i]];
  }

  router.__init && router.deinit();
  delete window.AKILI_SERVER;
  delete window.AKILI_CLIENT;
  delete window.AKILI_SSR;

  for(let key in Akili) {
    delete Akili[key];
  }

  delete window.Akili;
}

/**
 * Initialize the SSR html
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
 * Initialize the SSR cache
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
 * Prepare the SSR html
 */
Akili.prepareServerSideHtml = function () {
  return this.__root.outerHTML;
}

/**
 * Prepare the SSR cache
 */
Akili.prepareServerSideRequestCache = function () {
  let cache = { __main: request.__cache };

  for(let key in request.__instances) {
    cache[key] = request.__instances[key].__cache;
  }

  return cache;
}

export default Akili;
window.Akili = Akili;
Akili.define();
Akili.handleErrors();
Akili.isolateGlobals();