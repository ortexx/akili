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

const Akili = {};

Akili.options = {
  debug: true,
  globals: {}
};

Akili.__init = null;
Akili.__components = {};
Akili.__aliases = {};
Akili.__scopes = {};
Akili.__storeLinks = {};
Akili.__window = {};
Akili.__isolation = null;
Akili.__evaluation = null;

Akili.htmlBooleanAttributes = [
  'disabled', 'contenteditable', 'hidden'
];

Akili.components = {};
Akili.decorators = {};
Akili.services = {};

/**
 * Join binding keys
 *
 * @param {string[]} keys binding keys
 */
Akili.joinBindingKeys = function(keys) {
  return keys.map(el => el.toString()).join('.');
};

/**
 * Add scope to the scopes list
 *
 * @param scope
 */
Akili.addScope = function(scope) {
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
Akili.getScope = function(name) {
  return this.__scopes[name];
};

/**
 * Delete scope from the scopes list
 *
 * @param {string} name - scope name
 */
Akili.removeScope = function(name) {
  this.__scopes[name] = null;
  delete this.__scopes[name];
};

/**
 * Get all elements with attached Akili components
 *
 * @param {HTMLElement} el
 * @param {boolean} [tree=true] - return array of the parents if true, closest parent if false
 * @returns {Array|HTMLElement|null}
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
 * Set element inner html with content replacing
 *
 * @example
 * // returns "<i>Hello</i><b>World</b>"
 * el.innerHTML = "<b>World</b>";
 * Akili.setTemplate(el, "<i>Hello</i>${this.__children}");
 *
 * @param {HTMLElement} el
 * @param {string} template
 * @returns {string}
 */
Akili.setTemplate = function(el, template) {
  template = template.replace(/\${(((?!\${)\s*this\.__content\s*)*)}/, el.innerHTML);
  el.innerHTML = template;

  return el.innerHTML;
};

/**
 * Generate unique scope name
 *
 * @returns {string}
 */
Akili.createScopeName = function() {
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
Akili.isolate = function(fn, component) { 
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
    let prop = props[i];
    let data = prop.component.__getBind(prop.keys);

    if (prop.isDeleted) {
      prop.component.__evaluateByKeys(prop.keys, undefined, true);
      continue;
    }
    
    prop.component.scope.__set(prop.keys, utils.getPropertyByKeys(prop.keys, prop.component.__scope));
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
Akili.unevaluate = function(fn) {
  let evaluation = this.__evaluation;
  let res;
  this.__evaluation = null;
  res = fn();
  this.__evaluation = evaluation;
  return res;
};

/**
 * Stop isolation before the function and continue after
 *
 * @param {function} fn
 * @returns {*}
 */
Akili.unisolate = function(fn) {
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
Akili.nextTick = function(fn) {
  return new Promise((res) => setTimeout(() => Promise.resolve(fn()).then(res)));
};

/**
 * Initialize element
 *
 * @param {HTMLElement} el
 * @param {object} [options={}]
 * @returns {*}
 */
Akili.initialize = function(el, options = {}) {
  let recompile = options.recompile;
  let component = el.__akili;

  if (component) {
    if (recompile) {
      component.__recompile();
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

    for (let selector in this.__aliases) {
      if (!this.__aliases.hasOwnProperty(selector)) {
        continue;
      }

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

  component.__create();
  return component;
};

/**
 * Compile the element
 *
 * @param {HTMLElement} root
 * @param {object} [options]
 * @returns {Promise}
 */
Akili.compile = function(root, options = { recompile: false }) {  
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
Akili.component = function(name, fn) {
  name = name.toLowerCase();

  if (!fn) {
    return this.__components[name] || null;
  }

  if (this.__components[name] && Akili.options.debug) {
    console.warn(`Component ${name} already was added`);
  }

  this.__components[name] = fn;
};

/**
 * Unregister the component
 *
 * @param {string} name
 */
Akili.unregisterComponent = function(name) {
  delete this.__components[name];
};

/**
 * Register the selector alias or get it if component name is not passed
 *
 * @param {string} selector - DOM selector
 * @param {string} [componentName]
 */
Akili.alias = function(selector, componentName = '') {
  componentName = componentName.toLowerCase();

  if (!componentName) {
    return this.__aliases[selector] || null;
  }

  if (this.__aliases[selector] && Akili.options.debug) {
    console.warn(`Alias with selector ${selector} already was added`);
  }

  this.__aliases[selector] = componentName;
};

/**
 * Unregister the selector alias
 *
 * @param {string} selector
 */
Akili.unregisterAlias = function(selector) {
  delete this.__components[selector];
};

/**
 * Isolate array prototype functions
 */
Akili.isolateArrayPrototype = function() {
  this.__window.Array = { prototype: {} };

  let keys = Object.getOwnPropertyNames(Array.prototype);

  for (let i = 0, l = keys.length; i < l; i++) {
    let key = keys[i];
    let old = Array.prototype[key];

    if (typeof old != 'function' || key == 'constructor') {
      continue;
    }

    this.__window.Array.prototype[key] = old;

    Array.prototype[key] = function() {
      return Akili.unevaluate(() => {
        if (!this.__isProxy) {
          return old.apply(this, arguments);
        }
        
        return Akili.isolate(() => {
          return old.apply(this, arguments);
        }, this);
      });
    };
  }
};

/**
 * Isolate some window functions
 */
Akili.isolateWindowFunctions = function() {
  this.__window.setTimeout = setTimeout;
  this.__window.setInterval = setInterval;
  this.__window.Promise = Promise;
  window.setTimeout = this.createCallbackIsolation(window.setTimeout, 0);
  window.setInterval = this.createCallbackIsolation(window.setInterval, 0);
  window.Promise.constructor = this.createCallbackIsolation(window.Promise.constructor);
  window.Promise.prototype.then = this.createCallbackIsolation(window.Promise.prototype.then, [0, 'last']);
  window.Promise.prototype.catch = this.createCallbackIsolation(window.Promise.prototype.catch);
};

/**
 * Isolate event listeners
 */
Akili.isolateEvents = function() {
  this.__window.Element = { prototype: {} };
  this.__window.Element.prototype.addEventListener = Element.prototype.addEventListener;
  this.__window.Element.prototype.removeEventListener = Element.prototype.removeEventListener;
  this.__window.Element.prototype.remove = Element.prototype.remove;

  Element.prototype.remove = function() {
    delete this.__akiliListeners;
    return Akili.__window.Element.prototype.remove.apply(this, arguments);
  };

  Element.prototype.addEventListener = function(name, fn) {
    let args = [].slice.call(arguments);

    if (!this.__akiliListeners) {
      this.__akiliListeners = {};
    }

    if (!this.__akiliListeners[name]) {
      this.__akiliListeners[name] = [];
    }

    args[1] = function () {
      return Akili.isolate(() => {
        return fn.apply(this, arguments);
      });
    };

    this.__akiliListeners[name].push({
      link: fn,
      fn: args[1]
    });

    return Akili.__window.Element.prototype.addEventListener.apply(this, args);
  };

  Element.prototype.removeEventListener = function(name, fn) {
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
        i--;
        l--;
        break;
      }
    }

    if (!this.__akiliListeners[name].length) {
      delete this.__akiliListeners[name];
    }

    return Akili.__window.Element.prototype.removeEventListener.apply(this, arguments);
  };
};

/**
 * Wrap the function callback to an isolate context
 *
 * @param {function} fn
 * @param {number|string|number[]|string[]} [pos="last"]
 * @returns {function}
 */
Akili.createCallbackIsolation = function(fn, pos = 'last') {
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

      args[index] = function() {
        return Akili.isolate(() => {
          return callback.apply(callback, arguments);
        });
      };
    }

    return fn.apply(this, args);
  };
};

/**
 * Isolate the function
 *
 * @param {function} fn
 * @param {object} [context]
 * @returns {function}
 */
Akili.isolateFunction = function(fn, context = null) {
  if (fn.__akili) {
    return fn;
  }

  let oFn = function() {
    context = context || this;

    return Akili.isolate(() => {
      return fn.apply(context, arguments);
    });
  };

  Object.defineProperty(oFn, '__akili', {
    configurable: true,
    enumerable: false,
    value: true
  });

  return oFn;
};

/**
 * Error handling
 */
Akili.errorHandling = function() {
  window.addEventListener('error', () => {
    this.triggerInit(false);
  });
};

/**
 * Trigger an initialization status
 *
 * @param {boolean} status
 */
Akili.triggerInit = function(status) {
  Akili.__init = status;
  window.dispatchEvent(new CustomEvent('akili-init', { detail: status }));
};

/**
 * Initialize the application
 *
 * @param {HTMLElement} [root]
 * @returns {Promise}
 */
Akili.init = function(root) {
  this.__root = root || document.body;

  if(root === document.documentElement) {
    throw new Error(`"html" can't be the root element`);
  }
  
  if(window.AKILI_SERVER) {
    if(this.__root === document.body) {
      for (var i = this.__root.attributes.length - 1; i >= 0; i--){
        this.__root.removeAttribute(this.__root.attributes[i].name);
      }
      
      let html = window.AKILI_SERVER.html;
      let line = html.match(/^<[^<]+>/);
      let attrLines = (line? line[0]: '').match(/\s+[^"]+"[^"]+"/g) || [];

      for(let i = 0, l = attrLines.length; i < l; i++) {
        let line = attrLines[i];
        let attr = line.split('=', 2);
        let key = attr[0].trim();
        let val = attr[1].slice(1, -1);
        this.__root.setAttribute(key, val);
      }

      this.__root.innerHTML = window.AKILI_SERVER.html;
    }
    else {
      let parent = this.__root.parentNode;
      let index = [].slice.call(parent.children).indexOf(this.__root);    
      this.__root.outerHTML = window.AKILI_SERVER.html;
      this.__root = parent.children[index];
    }
  }
  else {
    window.AKILI_CLIENT = {
      html: this.__root.outerHTML
    }
  }

  return this.compile(this.__root).then(() => {
    if (router.__init) {
      return router.changeState();
    }
  }).then(() => {
    this.triggerInit(true);
  }).catch((err) => {
    this.triggerInit(false);
    throw err;
  });
};

/**
 * Deinitialize the application
 */
Akili.deinit = function() {
  for (let key in this.__window.Element.prototype) {
    Element.prototype[key] = this.__window.Element.prototype[key];
  }

  for (let key in this.__window.Array.prototype) {
    Array.prototype[key] = this.__window.Array.prototype[key];
  }

  window.setTimeout = this.__window.setTimeout;
  window.setInterval = this.__window.setInterval;
  window.Promise = this.__window.Promise;
};

/**
 * Define all default components
 */
Akili.define = function() {
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

Akili.Component = Component;
Akili.EventEmitter = EventEmitter;
Akili.Scope = Scope;
Akili.utils = utils;
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

window.Akili = Akili;

export const components = Akili.components;
export const services = Akili.services;
export default Akili;

Akili.define();
Akili.errorHandling();
Akili.isolateEvents();
Akili.isolateArrayPrototype();
Akili.isolateWindowFunctions();