/*!
 * Akili is a javascript framework
 * 
 * const Akili = makeItEasy(js + html);
 * 
 * @version 1.0.14
 * @author Alexandr Balasyan <mywebstreet@gmail.com>
 * {@link http://akilijs.com}
 * {@link https://github.com/ortexx/akili}
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Akili"] = factory();
	else
		root["Akili"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Javascript framework
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * const Akili = makeItEasy(js + html);
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * @author Alexandr Balasyan <mywebstreet@gmail.com>
                                                                                                                                                                                                                                                                               * @link http://akilijs.com
                                                                                                                                                                                                                                                                               */

var _component2 = __webpack_require__(3);

var _component3 = _interopRequireDefault(_component2);

var _if = __webpack_require__(13);

var _if2 = _interopRequireDefault(_if);

var _for = __webpack_require__(6);

var _for2 = _interopRequireDefault(_for);

var _select = __webpack_require__(14);

var _select2 = _interopRequireDefault(_select);

var _input = __webpack_require__(15);

var _input2 = _interopRequireDefault(_input);

var _radio = __webpack_require__(16);

var _radio2 = _interopRequireDefault(_radio);

var _text = __webpack_require__(5);

var _text2 = _interopRequireDefault(_text);

var _textarea = __webpack_require__(17);

var _textarea2 = _interopRequireDefault(_textarea);

var _content = __webpack_require__(18);

var _content2 = _interopRequireDefault(_content);

var _include = __webpack_require__(19);

var _include2 = _interopRequireDefault(_include);

var _iframe = __webpack_require__(20);

var _iframe2 = _interopRequireDefault(_iframe);

var _image = __webpack_require__(21);

var _image2 = _interopRequireDefault(_image);

var _embed = __webpack_require__(22);

var _embed2 = _interopRequireDefault(_embed);

var _audio = __webpack_require__(23);

var _audio2 = _interopRequireDefault(_audio);

var _video = __webpack_require__(24);

var _video2 = _interopRequireDefault(_video);

var _track = __webpack_require__(25);

var _track2 = _interopRequireDefault(_track);

var _source = __webpack_require__(26);

var _source2 = _interopRequireDefault(_source);

var _object = __webpack_require__(27);

var _object2 = _interopRequireDefault(_object);

var _route = __webpack_require__(11);

var _route2 = _interopRequireDefault(_route);

var _url = __webpack_require__(2);

var _url2 = _interopRequireDefault(_url);

var _a = __webpack_require__(28);

var _a2 = _interopRequireDefault(_a);

var _scope = __webpack_require__(7);

var _scope2 = _interopRequireDefault(_scope);

var _eventEmitter = __webpack_require__(8);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

var _request = __webpack_require__(4);

var _request2 = _interopRequireDefault(_request);

var _router = __webpack_require__(12);

var _router2 = _interopRequireDefault(_router);

var _store = __webpack_require__(9);

var _store2 = _interopRequireDefault(_store);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _globals = __webpack_require__(10);

var _globals2 = _interopRequireDefault(_globals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The framework main object
 * 
 * {@link https://akilijs.com/docs/getting-started}
 */
var Akili = {};

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
Akili.__onError = function () {
  return Akili.triggerInit(false);
};

Akili.htmlBooleanAttributes = ['disabled', 'contenteditable', 'hidden'];

Akili.components = {};
Akili.services = {};
Akili.Component = _component3.default;
Akili.EventEmitter = _eventEmitter2.default;
Akili.Scope = _scope2.default;
Akili.utils = _utils2.default;
Akili.globals = _globals2.default;
Akili.components.A = _a2.default;
Akili.components.Audio = _audio2.default;
Akili.components.Content = _content2.default;
Akili.components.For = _for2.default;
Akili.components.Embed = _embed2.default;
Akili.components.If = _if2.default;
Akili.components.Include = _include2.default;
Akili.components.Input = _input2.default;
Akili.components.Iframe = _iframe2.default;
Akili.components.Image = _image2.default;
Akili.components.Object = _object2.default;
Akili.components.Radio = _radio2.default;
Akili.components.Route = _route2.default;
Akili.components.Select = _select2.default;
Akili.components.Source = _source2.default;
Akili.components.Text = _text2.default;
Akili.components.Textarea = _textarea2.default;
Akili.components.Track = _track2.default;
Akili.components.Url = _url2.default;
Akili.components.Video = _video2.default;
Akili.services.request = _request2.default;
Akili.services.router = _router2.default;
Akili.services.store = _store2.default;

/**
 * Define the default components
 */
Akili.define = function () {
  _a2.default.define();
  _audio2.default.define();
  _content2.default.define();
  _component3.default.define();
  _embed2.default.define();
  _for2.default.define();
  _include2.default.define();
  _iframe2.default.define();
  _image2.default.define();
  _input2.default.define();
  _if2.default.define();
  _object2.default.define();
  _radio2.default.define();
  _route2.default.define();
  _select2.default.define();
  _source2.default.define();
  _textarea2.default.define();
  _track2.default.define();
  _video2.default.define();
};

/**
 * Clear the global context
 */
Akili.clearGlobals = function () {
  for (var key in _globals2.default) {
    delete _globals2.default[key];
  }

  for (var _key in this.__window.Element.prototype) {
    Element.prototype[_key] = this.__window.Element.prototype[_key];
  }

  for (var _key2 in this.__window.Array.prototype) {
    Array.prototype[_key2] = this.__window.Array.prototype[_key2];
  }

  for (var _key3 in this.options.globals) {
    this.options.globals[_key3] = this.unwrap(this.options.globals[_key3]);
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
  return keys.map(function (el) {
    return el.toString();
  }).join('.');
};

/**
 * Add the scope
 *
 * @param scope
 */
Akili.addScope = function (scope) {
  if (this.__scopes[scope.__name]) {
    throw new Error('Scope name ' + scope.__name + ' already exists');
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
Akili.getAkiliParents = function (el) {
  var tree = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var arr = [];

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
  return tree ? arr : arr[0];
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
  var _this = this;

  return _utils2.default.createRandomString(16, function (str) {
    return !!_this.__scopes[str];
  });
};

/**
 * Isolate the scope changes
 *
 * @param {function} fn
 * @returns {*}
 */
Akili.isolate = function (fn) {
  if (this.__isolation) {
    return fn();
  }

  this.__isolation = {};
  var res = fn();
  var props = [];

  for (var k in this.__isolation) {
    props.push(this.__isolation[k]);
  }

  this.__isolation = null;

  for (var i = 0, l = props.length; i < l; i++) {
    var prop = props[i];
    var val = _utils2.default.getPropertyByKeys(prop.keys, prop.component.__scope);
    prop.component.__isResolved && prop.component.__triggerStoreAndAttr(prop.keys);
    prop.component.__evaluateByKeys(prop.keys, val, prop.isDeleted);
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
  var evaluation = this.__evaluation;
  var res = void 0;
  this.__evaluation = null;
  res = fn();
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
  if (this.__wrapping) {
    return fn();
  }

  this.__wrapping = true;
  var res = fn();
  this.__wrapping = false;
  return res;
};

/**
 * Stop the isolation inside the function
 *
 * @param {function} fn
 * @returns {*}
 */
Akili.unisolate = function (fn) {
  var isolation = this.__isolation;
  var res = void 0;
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
  return new Promise(function (res) {
    return setTimeout(function () {
      return Promise.resolve(fn()).then(res);
    });
  });
};

/**
 * Initialize the element
 *
 * @param {Element} el
 * @param {object} [options={}]
 * @returns {*}
 */
Akili.initialize = function (el) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var recompile = options.recompile;
  var component = el.__akili;

  if (component) {
    if (recompile) {
      component.__recompile(recompile === true ? {} : recompile);
      return component;
    }

    return;
  }

  var isRoot = el === this.__root;
  var componentName = _utils2.default.toDashCase(el.getAttribute('component') || el.tagName.toLowerCase());
  var _Component = this.__components[componentName];

  CHECK_ALIASES: if (!_Component) {
    var selectors = Object.keys(this.__aliases);

    if (!selectors.length) {
      break CHECK_ALIASES;
    }

    var selectorAll = selectors.join(',');

    if (!el.matches(selectorAll)) {
      break CHECK_ALIASES;
    }

    for (var i = 0, l = selectors.length; i < l; i++) {
      var selector = selectors[i];

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

  if (Akili.getAkiliParents(el).find(function (p) {
    return p.__akili.__prevent;
  })) {
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
Akili.compile = function (root) {
  var _this2 = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { recompile: false };

  var elements = [];

  if (window.AKILI_SSR) {
    var arr = root.querySelectorAll('[no-ssr]');

    for (var i = 0, l = arr.length; i < l; i++) {
      arr[i].remove();
    }
  }

  var nestedInitializing = function nestedInitializing(el) {
    var component = _this2.initialize(el, options);
    var children = el.children;
    component && elements.push(component);

    for (var _i = 0, _l = children.length; _i < _l; _i++) {
      var child = children[_i];
      nestedInitializing(child);
    }
  };

  nestedInitializing(root);
  var p = [];

  for (var _i2 = 0, _l2 = elements.length; _i2 < _l2; _i2++) {
    var component = elements[_i2];
    p.push(component.__compile());
  }

  return Promise.all(p).then(function () {
    var r = [];

    for (var _i3 = elements.length - 1; _i3 >= 0; _i3--) {
      var _component = elements[_i3];
      r.push(_component.__resolve());
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
    console.warn('Component ' + name + ' already was added');
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
Akili.alias = function (selector) {
  var componentName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  componentName = componentName.toLowerCase();

  if (!componentName) {
    return this.__aliases[selector] || null;
  }

  if (this.__aliases[selector] && Akili.options.debug) {
    // eslint-disable-next-line no-console
    console.warn('Alias with selector ' + selector + ' already was added');
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
  var _this3 = this;

  this.__window.Array = { prototype: {} };
  var keys = Object.getOwnPropertyNames(Array.prototype);

  var _loop = function _loop(i, l) {
    var key = keys[i];
    var old = Array.prototype[key];

    if (typeof old != 'function' || key == 'constructor') {
      return 'continue';
    }

    _this3.__window.Array.prototype[key] = old;

    Array.prototype[key] = function () {
      var _this4 = this,
          _arguments = arguments;

      return Akili.unevaluate(function () {
        if (!_this4.__isProxy) {
          return old.apply(_this4, _arguments);
        }

        return Akili.isolate(function () {
          return old.apply(_this4, _arguments);
        });
      });
    };
  };

  for (var i = 0, l = keys.length; i < l; i++) {
    var _ret = _loop(i, l);

    if (_ret === 'continue') continue;
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

  if (!window.AKILI_SSR) {
    window.Promise.constructor = this.createCallbackIsolation(window.Promise.constructor);
    window.Promise.prototype.then = this.createCallbackIsolation(window.Promise.prototype.then, [0, 'last']);
    window.Promise.prototype.catch = this.createCallbackIsolation(window.Promise.prototype.catch);
  }
};

/**
 * Isolate the globals
 */
Akili.isolateGlobals = function () {
  _globals2.default.__target.utils = this.wrap(_utils2.default);
  this.isolateEvents();
  this.isolateArrayPrototype();
  this.isolateWindowFunctions();
};

/**
 * Isolate the event listeners
 */
Akili.isolateEvents = function () {
  this.__window.Element = { prototype: {} };

  if (window.AKILI_SSR) {
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
    var args = [].slice.call(arguments);

    if (!this.__akiliListeners) {
      this.__akiliListeners = {};
    }

    if (!this.__akiliListeners[name]) {
      this.__akiliListeners[name] = [];
    }

    if (typeof fn === 'function') {
      args[1] = function () {
        var _this5 = this,
            _arguments2 = arguments;

        return Akili.isolate(function () {
          return fn.apply(_this5, _arguments2);
        });
      };
    }

    this.__akiliListeners[name].push({
      link: fn,
      fn: args[1]
    });

    return Akili.__window.Element.prototype.addEventListener.apply(this, args);
  };

  Element.prototype.removeEventListener = function (name, fn) {
    var args = [].slice.call(arguments);

    if (!this.__akiliListeners) {
      this.__akiliListeners = {};
    }

    if (!this.__akiliListeners[name]) {
      this.__akiliListeners[name] = [];
    }

    for (var i = 0, l = this.__akiliListeners[name].length; i < l; i++) {
      var listener = this.__akiliListeners[name][i];

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
Akili.createCallbackIsolation = function (fn) {
  var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'last';

  return function () {
    var args = [].slice.call(arguments);
    !Array.isArray(pos) && (pos = [pos]);

    var _loop2 = function _loop2(i, l) {
      var num = pos[i];
      var index = num;
      var callback = args[num];

      if (num == 'last') {
        index = args.length - 1;
        callback = args[index];
      }

      if (typeof callback != 'function') {
        return 'continue';
      }

      if (!callback.__isolated) {
        args[index] = function () {
          var _arguments3 = arguments;

          return Akili.isolate(function () {
            return callback.apply(callback, _arguments3);
          });
        };

        Object.defineProperty(args[index], '__isolated', {
          enumerable: false,
          value: callback
        });
      }
    };

    for (var i = 0, l = pos.length; i < l; i++) {
      var _ret2 = _loop2(i, l);

      if (_ret2 === 'continue') continue;
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
Akili.wrap = function (obj) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var current = obj;

  if (typeof obj == 'function') {
    obj = this.wrapFunction(obj, options);

    if (obj === current) {
      return obj;
    }
  } else if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) != 'object' || Array.isArray(obj)) {
    return obj;
  }

  var keys = Object.getOwnPropertyNames(obj);

  for (var k = 0, c = keys.length; k < c; k++) {
    var key = keys[k];
    var descriptor = Object.getOwnPropertyDescriptor(obj, key);

    if (!descriptor.configurable || !descriptor.writable) {
      continue;
    }

    if (options.reverse) {
      Object.defineProperty(obj, key, _extends({}, descriptor, { value: obj[key].__akili || obj[key] }));
      continue;
    }

    Object.defineProperty(obj, key, _extends({}, descriptor, { value: this.wrap(obj[key], options) }));
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
};

/**
 * Isolate the function
 *
 * @param {function} fn
 * @param {object} [options] 
 * @returns {function}
 */
Akili.wrapFunction = function (fn) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (fn.__akili) {
    return fn;
  }

  var akiliWrappedFunction = function akiliWrappedFunction() {
    var _this6 = this,
        _arguments4 = arguments;

    if (options.tag && Akili.__evaluation) {
      Akili.addTag(options.tag, Akili.__evaluation.node);
    }

    return Akili.wrapping(function () {
      return fn.apply(_this6, _arguments4);
    });
  };

  var keys = Object.keys(fn);
  akiliWrappedFunction.prototype = fn.prototype;

  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
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
  if (this.hasTag(tag, node)) {
    return;
  }

  if (!this.__tags[node.__name]) {
    this.__tags[node.__name] = {};
  }

  if (!this.__tags[node.__name][tag]) {
    this.__tags[node.__name][tag] = [];
  }

  this.__tags[node.__name][tag].push({ node: node });
};

/**
 * Check the tag exists
 * 
 * @param {string} tag
 * @param {Node} [node]
 * @returns {boolean}
 */
Akili.hasTag = function (tag, node) {
  if (!node) {
    for (var key in this.__tags) {
      for (var k in this.__tags[key]) {
        if (k == tag) {
          return true;
        }
      }
    }

    return false;
  }

  if (!this.__tags[node.__name]) {
    return false;
  }

  if (!this.__tags[node.__name][tag]) {
    return false;
  }

  return true;
};

/**
 * Remove the tag
 * 
 * @param {string} [tag]
 * @param {Node} [node]
 */
Akili.removeTag = function (tag, node) {
  if ((typeof tag === 'undefined' ? 'undefined' : _typeof(tag)) == 'object') {
    node = tag;
    tag = undefined;
  }

  if (!tag) {
    delete this.__tags[node.__name];
    return;
  }

  if (!node) {
    for (var key in this.__tags) {
      for (var k in this.__tags[key]) {
        if (k == tag) {
          delete this.__tags[key][k];
        }
      }

      if (!Object.keys(this.__tags[key]).length) {
        delete this.__tags[key];
      }
    }

    return;
  }

  for (var _key4 in this.__tags[node.__name]) {
    if (_key4 == tag) {
      delete this.__tags[node.__name][_key4];
    }
  }

  if (!Object.keys(this.__tags[node.__name]).length) {
    delete this.__tags[node.__name];
  }
};

/**
 * Evaluate the tag expressions
 * 
 * @param {string} tag
 */
Akili.triggerTag = function (tag) {
  for (var key in this.__tags) {
    for (var k in this.__tags[key]) {
      if (k == tag) {
        var arr = this.__tags[key][k];

        for (var i = 0, l = arr.length; i < l; i++) {
          var obj = arr[i];
          obj.node.__component.__evaluateNode(obj.node, false);
        }
      }
    }
  }
};

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
  var _this7 = this;

  root = root || document.body;
  this.__rootOuterHTML = root.outerHTML;

  if (!(root instanceof Element)) {
    throw new Error('Root element must be an html element');
  }

  if (root === document.documentElement) {
    throw new Error('"html" can\'t be the root element');
  }

  this.__root = root;

  if (window.AKILI_SERVER) {
    Akili.initServerSideHtml(window.AKILI_SERVER.html);
    Akili.initServerSideRequestCache(window.AKILI_SERVER.requestCache);
  } else {
    window.AKILI_CLIENT = {
      html: this.prepareServerSideHtml()
    };
  }

  return this.compile(this.__root).then(function () {
    if (_router2.default.__init) {
      return _router2.default.changeState({ init: true });
    }
  }).then(function () {
    window.AKILI_CLIENT && (window.AKILI_CLIENT.requestCache = _this7.prepareServerSideRequestCache());
    _this7.triggerInit(true);
  }).catch(function (err) {
    _this7.triggerInit(false);
    throw err;
  });
};

/**
 * Deinitialize the application
 */
Akili.deinit = function () {
  this.__root && (this.__root.outerHTML = this.__rootOuterHTML);

  for (var key in this.__scopes) {
    var component = this.__scopes[key].__component;
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

  var storeKeys = Object.keys(_store2.default.__target);

  for (var i = 0, l = storeKeys.length; i < l; i++) {
    delete _store2.default.__target[storeKeys[i]];
  }

  _router2.default.__init && _router2.default.deinit();
  delete window.AKILI_SERVER;
  delete window.AKILI_CLIENT;
  delete window.AKILI_SSR;

  for (var key in Akili) {
    delete Akili[key];
  }

  delete window.Akili;
};

/**
 * Initialize the SSR html
 * 
 * @param {string} html
 */
Akili.initServerSideHtml = function (html) {
  for (var i = this.__root.attributes.length - 1; i >= 0; i--) {
    this.__root.removeAttribute(this.__root.attributes[i].name);
  }

  var parser = new DOMParser();
  var doc = parser.parseFromString(html, "text/html");
  var el = doc.querySelector(this.__root === document.body ? 'body' : 'body > *');
  this.__root.innerHTML = el.innerHTML;

  for (var _i4 = el.attributes.length - 1; _i4 >= 0; _i4--) {
    var attr = el.attributes[_i4];
    this.__root.setAttribute(attr.name, attr.value);
  }
};

/**
 * Initialize the SSR cache
 * 
 * @param {object} obj
 */
Akili.initServerSideRequestCache = function (obj) {
  var init = function init(instance, obj) {
    for (var key in obj) {
      instance.__cache[key] = obj[key];
    }
  };

  for (var key in obj) {
    var instance = key === '__main' ? _request2.default : _request2.default.__instances[key];
    init(instance, obj[key]);
  }
};

/**
 * Prepare the SSR html
 */
Akili.prepareServerSideHtml = function () {
  return this.__root.outerHTML;
};

/**
 * Prepare the SSR cache
 */
Akili.prepareServerSideRequestCache = function () {
  var cache = { __main: _request2.default.__cache };

  for (var key in _request2.default.__instances) {
    cache[key] = _request2.default.__instances[key].__cache;
  }

  return cache;
};

exports.default = Akili;

window.Akili = Akili;
Akili.define();
Akili.handleErrors();
Akili.isolateGlobals();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _eventEmitter = __webpack_require__(8);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The object with a lot of useful functions
 * 
 * {@link https://akilijs.com/docs/utils}
 */
var utils = {};

/**
 * Create the class attribute from the object
 *
 * @example
 * // returns "red active"
 * utils.class({red: true, active: true, green: false});
 *
 * @param {object} obj
 * @returns {string}
 */
utils.class = function (obj) {
  if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
    return '';
  }

  var classes = [];
  var keys = Object.keys(obj);

  for (var i = 0, l = keys.length; i < l; i++) {
    var k = keys[i];
    var val = obj[k];
    val && classes.push(k);
  }

  return classes.join(' ');
};

/**
 * Create the style attribute from the object
 *
 * @example
 * // returns "color:red;width:10px"
 * utils.style({color: "red", background: false, width: "10px"});
 *
 * @param {object} obj
 * @returns {string}
 */
utils.style = function (obj) {
  if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
    return '';
  }

  var styles = [];
  var keys = Object.keys(obj);

  for (var i = 0, l = keys.length; i < l; i++) {
    var k = keys[i];
    var val = obj[k];
    val && styles.push(this.toDashCase(k) + ':' + val);
  }

  return styles.join(';');
};

/**
 * Split the string extended
 * 
 * @example
 * // returns ["Hello", "World"]
 * utils.split("Hello World", " ");
 * 
 * @example
 * // returns ['x = 5', ' y = "1;2;3"']
 * utils.split('x = 5; y = "1;2;3"', ";", ['"']);
 * 
 * @param {string|RegExp} str 
 * @param {string} [del]
 * @param {string[]} [exclude] 
 */
utils.split = function (str) {
  var del = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var exclude = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var exps = [];
  var last = '';

  if (!del) {
    return str.split('');
  } else if (del instanceof RegExp) {
    return str.split(del);
  } else if (str.indexOf(del) == -1) {
    last = str;
  } else {
    var arr = str.split('');
    var open = '';

    for (var i = 0, l = arr.length; i < l; i++) {
      var val = arr[i];
      var index = exclude.indexOf(val);

      if (index > -1 && (!open || open == val)) {
        !open ? open = exclude[index] : open = '';
      }

      if (val == del && !open) {
        exps.push(last);
        last = '';
        continue;
      }

      last += val;
    }
  }

  last && exps.push(last);
  return exps;
};

/**
 * Filter the array
 *
 * @example
 * // returns [1, 11]
 * utils.filter([1, 2, 3, 11], '1');
 *
 * @example
 * // returns [{x: 1}, {x: 11}]
 * utils.filter([{x: 1}, {x: 2}, {x: 3}, {x: 11}], '1', 'x');
 * 
 * @example
 * // returns [{x: 1}, {x: 11}]
 * utils.filter([{x: 1}, {x: 2}, {x: 3}, {x: 11}], '1', ['x']);
 * 
 * @example
 * // returns [{x: 1}, {x: 11}]
 * utils.filter([{x: 1}, {x: 2}, {x: 3}, {x: 11}], '1', [['x']]);
 * 
 * @example
 * // returns [{x: {y: 1}}]
 * utils.filter([{x: {y: 1}}, {x: {y: 2}}], '1', [['x', 'y']]);
 * 
 * @example
 * // returns [{x:1, y: 2}, {x: 2, y:1}] 
 * utils.filter([{x: 1, y: 2}, {x: 3, y: 3}, {x: 2, y: 1}], '1', ['x', 'y']);
 * 
 * @example
 * // returns [{x:1, y: 2}, {x: 2, y:1}]
 * utils.filter([{x: 1, y: 2}, {x: 3, y: 3}, {x: 2, y: 1}], '1', [['x'], ['y']]);
 *
 * @param {Array} arr
 * @param {string|RegExp|function} handler - type of the filtering
 * @param {string[]|string} [keys] - filter by the keys
 * @returns {Array} 
 */
utils.filter = function (arr, handler) {
  var keys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  var res = [];

  if (keys && !Array.isArray(keys)) {
    keys = [keys];
  }

  if (typeof handler != 'function') {
    var str = handler ? (handler + '').toLowerCase() : '';
    handler = function handler(val) {
      return (val ? (val + '').toLowerCase() : '').match(str);
    };
  }

  for (var i = 0, l = arr.length; i < l; i++) {
    var item = arr[i];
    var filtered = false;

    if (!keys && handler(item)) {
      filtered = true;
    } else if (keys) {
      for (var k = 0, c = keys.length; k < c; k++) {
        var key = keys[k];
        key = Array.isArray(key) ? key : [key];
        var val = key ? this.getPropertyByKeys(key, item) : item;

        if (handler(val)) {
          filtered = true;
          continue;
        }
      }
    }

    filtered && res.push(item);
  }

  return res;
};

/**
 * Sort the array
 *
 * @example
 * // returns [1, 2, 3]
 * utils.sort([3, 2, 1], true);
 *
 * @example
 * // returns [3, 2, 1]
 * utils.sort([1, 2, 3], false);
 *
 * @example
 * // returns [{x: 1}, {x: 2}, {x: 3}]
 * utils.sort([{x: 3}, {x: 2}, {x: 1}], [['x']], [true]);
 * utils.sort([{x: 3}, {x: 2}, {x: 1}], ['x'], true);
 * utils.sort([{x: 3}, {x: 2}, {x: 1}], 'x');
 *
 * @example
 * // returns [{x: 3}, {x: 2}, {x: 1}]
 * utils.sort([{x: 1}, {x: 2}, {x: 3}], [['x']], [false]);
 * utils.sort([{x: 1}, {x: 2}, {x: 3}], ['x'], false);
 * utils.sort([{x: 1}, {x: 2}, {x: 3}], 'x', false);
 *
 * @example
 * // returns [{x: 1, y: 3}, {x: 2, y: 1}, {x:2, y: 2}]
 * utils.sort([{x: 2, y: 2}, {x: 2, y: 1}, {x: 2, y: 3}], [['x'], ['y']], [true, true]);
 * 
 * @example
 * // returns [{x: {y: 1}}, {x: {y: 2}}]
 * utils.sort([{x: {y: 2}}, {x: {y: 1}}], [['x', 'y']], [true]);
 *
 * @param {Array} arr
 * @param {boolean|Array[]|string[]|string} [keys]
 * @param {boolean|boolean[]} [order] - reverse or not
 * @returns {Array}
 */
utils.sort = function (arr) {
  var _this = this;

  var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var order = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  arr = arr.slice();

  if (keys === true) {
    keys = [];
    order = [true];
  } else if (keys === false) {
    keys = [];
    order = [false];
  }

  if (!Array.isArray(keys)) {
    keys = [keys];
  }

  if (!Array.isArray(order)) {
    order = [order];
  }

  var l = keys.length;

  arr.sort(function (a, b) {
    var i = 0;

    var check = function check(a, b) {
      var reverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (a instanceof Date) {
        a = a.getTime();
      }

      if (b instanceof Date) {
        b = b.getTime();
      }

      if (a > b) {
        return reverse ? -1 : 1;
      } else if (a < b) {
        return reverse ? 1 : -1;
      }

      return 0;
    };

    var next = function next() {
      if (i >= l) {
        return 0;
      }

      var key = keys[i];

      if (!Array.isArray(key)) {
        key = [key];
      }

      var aV = _this.getPropertyByKeys(key, a);
      var bV = _this.getPropertyByKeys(key, b);
      var res = check(aV, bV, order[i] === false);

      if (res !== 0) {
        return res;
      }

      i++;
      return next();
    };

    if (!l) {
      return check(a, b, order[i] === false);
    }

    return next();
  });

  return arr;
};

/**
 * Return a new object with the specified keys
 * 
 * @example
 * // returns {x: 1, z: 1}
 * utils.includeKeys({x: 1, y: 1, z: 1}, ['x', 'z']);
 * 
 * @param {object} obj
 * @param {string[]} keys
 */
utils.includeKeys = function (obj, keys) {
  var newObj = {};
  var objKeys = Object.keys(obj);

  for (var i = 0, l = objKeys.length; i < l; i++) {
    var key = objKeys[i];

    if (keys.indexOf(key) != -1) {
      newObj[key] = obj[key];
    }
  }

  return newObj;
};

/**
 * Return a new object without the specified keys
 * 
 * @example
 * // returns {x: 1, z: 1}
 * utils.includeKeys({x: 1, y: 1, z: 1}, ['y']);
 * 
 * @param {object} obj
 * @param {string[]} keys
 */
utils.excludeKeys = function (obj, keys) {
  var newObj = {};
  var objKeys = Object.keys(obj);

  for (var i = 0, l = objKeys.length; i < l; i++) {
    var key = objKeys[i];

    if (keys.indexOf(key) == -1) {
      newObj[key] = obj[key];
    }
  }

  return newObj;
};

/**
 * Check the value is the scope proxy object
 *
 * @param {*} val
 * @returns {boolean}
 */
utils.isScopeProxy = function (val) {
  return !!(val && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) == 'object' && val.__isProxy);
};

/**
 * Check the value is a plain object
 *
 * @param {*} obj
 * @returns {boolean}
 */
utils.isPlainObject = function (obj) {
  return !!(obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) == 'object' && (obj.constructor == Object || obj.constructor == Array));
};

/**
 * Copy the value
 *
 * @param {*} value
 * @param {boolean} [options] 
 * @returns {*}
 */
utils.copy = function (value) {
  var _this2 = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) != 'object' || !value) {
    return value;
  }

  options = _extends({ nested: true, enumerable: true, plain: false }, options);

  var next = function next(obj) {
    if (options.plain && !_this2.isPlainObject(obj)) {
      return obj;
    }

    obj = _this2.isScopeProxy(obj) ? obj.__target : obj;
    var keys = !options.enumerable ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    var newObj = Array.isArray(obj) ? [] : {};

    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      var val = obj[key];
      val = val && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) == 'object' && options.nested ? next(val) : val;

      if (!obj.propertyIsEnumerable(key)) {
        Object.defineProperty(newObj, key, _extends({}, Object.getOwnPropertyDescriptor(obj, key), {
          value: val
        }));

        continue;
      }

      newObj[key] = val;
    }

    return newObj;
  };

  return next(value);
};

/**
 * Change the attribute value to the appropriate format
 *
 * @param {*} value
 * @returns {*}
 */
utils.makeAttributeValue = function (value) {
  if (value === false || value === null || value === undefined) {
    return '';
  }

  if (value instanceof _eventEmitter2.default) {
    return '[object Event]';
  }

  if (typeof value == 'function') {
    return '[object Function]';
  }

  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
    return Object.prototype.toString.call(value);
  }

  return value + '';
};

/**
 * Compare two values
 *
 * @param {*} a
 * @param {*} b
 * @param {object} [options]
 * @returns {boolean}
 */
utils.compare = function (a, b) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  } else if (typeof a == 'function' && typeof b == 'function') {
    return a.toString() === b.toString();
  } else if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) == 'object' && (typeof b === 'undefined' ? 'undefined' : _typeof(b)) == 'object') {
    if (a === null || b === null) {
      return a === b;
    }

    options = _extends({ enumerable: true, ignoreUndefined: true }, options);

    var clearUndefined = function clearUndefined(val) {
      var obj = Array.isArray(val) ? [] : {};
      var keys = !options.enumerable ? Object.getOwnPropertyNames() : Object.keys(val);

      for (var i = 0, l = keys.length; i < l; i++) {
        var key = keys[i];
        val[key] !== undefined && (obj[key] = val[key]);
      }

      return obj;
    };

    if (options.ignoreUndefined) {
      a = clearUndefined(a);
      b = clearUndefined(b);
    }

    var aKeys = !options.enumerable ? Object.getOwnPropertyNames() : Object.keys(a);
    var bKeys = !options.enumerable ? Object.getOwnPropertyNames() : Object.keys(b);

    if (aKeys.length != bKeys.length) {
      return false;
    }

    a = this.isScopeProxy(a) ? a.__target : a;
    b = this.isScopeProxy(b) ? b.__target : b;

    for (var i = 0, l = aKeys.length; i < l; i++) {
      var key = aKeys[i];

      if (!this.compare(a[key], b[key])) {
        return false;
      }
    }

    return true;
  }

  return a === b;
};

/**
 * Create a hash from the string
 * 
 * @param {*} source
 * @returns {string}
 */
utils.createHash = function (source) {
  (typeof source === 'undefined' ? 'undefined' : _typeof(source)) == 'object' && (source = JSON.stringify(source));
  typeof source != 'string' && (source = '⠀' + String(source));
  var hash = 0;

  for (var i = 0; i < source.length; i++) {
    var char = source.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }

  return hash + '';
};

/**
 * Encode the html entities
 *
 * @example
 * // returns "you &amp me"
 * utils.encodeHtmlEntities('you & me');
 *
 * @param {string} html
 * @returns {string}
 */
utils.encodeHtmlEntities = function (html) {
  var el = document.createElement("div");
  var value = void 0;
  el.textContent = html;
  value = el.innerHTML;
  el.remove();
  el = null;
  return value;
};

/**
 * Decode the html entities
 *
 * @example
 * // returns "you & me"
 * utils.decodeHtmlEntities('you &amp me');
 *
 * @param {string} html
 * @returns {string}
 */
utils.decodeHtmlEntities = function (html) {
  var el = document.createElement("textarea");
  var value = void 0;
  el.innerHTML = html;
  value = el.value;
  el.remove();
  el = null;
  return value;
};

/**
 * Convert the string from a dash to a camel case
 *
 * @param {string} str
 * @returns {string}
 */
utils.toCamelCase = function (str) {
  return str.replace(/\W+(.)/g, function (m, c) {
    return c.toUpperCase();
  });
};

/**
 * Capitalize the string
 *
 * @param {string} str
 * @returns {string}
 */
utils.capitalize = function (str) {
  return str[0].toUpperCase() + str.slice(1);
};

/**
 * Convert the string from a camel to a dash case
 *
 * @param {string} str
 * @returns {string}
 */
utils.toDashCase = function (str) {
  return str.replace(/([A-Z])/g, function (m, c) {
    return '-' + c.toLowerCase();
  });
};

/**
 * Get the nested object property by array keys
 *
 * @example
 * // returns 5
 * utils.getPropertyByKeys(['x', 'y'], {x: {y: 5}});
 *
 * @param {string[]} keys
 * @param {object} object
 * @returns {*}
 */
utils.getPropertyByKeys = function (keys, object) {
  var current = void 0;
  var length = keys.length;
  var i = 0;

  keys.reduce(function (o, k) {
    i++;

    if ((typeof o === 'undefined' ? 'undefined' : _typeof(o)) != 'object') {
      return o;
    }

    if (o[k] === undefined) {
      return {};
    }

    i == length && (current = o[k]);
    return o[k];
  }, object);

  return current;
};

/**
 * Check the object nested property existence
 *
 * @example
 * // returns true
 * utils.hasPropertyByKeys(['x', 'y'], {x: {y: 5}});
 *
 * @param {string[]} keys
 * @param {object} object
 * @returns {boolean}
 */
utils.hasPropertyByKeys = function (keys, object) {
  var has = false;
  var length = keys.length;
  var i = 0;

  keys.reduce(function (o, k) {
    i++;

    if (!o || (typeof o === 'undefined' ? 'undefined' : _typeof(o)) != 'object') {
      return !!o;
    }

    if (!o.hasOwnProperty(k)) {
      return {};
    }

    i == length && (has = o.hasOwnProperty(k));
    return o[k];
  }, object);

  return has;
};

/**
 * Set the object nested property value
 *
 * @example
 * // returns {y: 6}
 * utils.setPropertyByKeys(['x', 'y'], {x: {y: 5}}, (last, val) => last? 6: (val || {}));
 *
 * @param {string[]} keys
 * @param {object} object
 * @param {function} fn
 * @returns {*}
 */
utils.setPropertyByKeys = function (keys, object, fn) {
  var current = undefined;
  var length = keys.length;
  var i = 0;

  keys.reduce(function (o, k) {
    i++;

    if (!o || (typeof o === 'undefined' ? 'undefined' : _typeof(o)) != 'object') {
      return;
    }

    if (!o.hasOwnProperty(k)) {
      o[k] = undefined;
    }

    o[k] = fn(i == length, o[k]);
    current = o;
    return o[k];
  }, object);

  return current;
};

/**
 * Delete the property from the object
 * You can cancel the deletion returning false in the callback function
 *
 * @example
 * // returns 5
 * utils.deletePropertyByKeys(['x', 'y'], {x: {y: 5}});
 * @example
 * // returns 5
 * utils.deletePropertyByKeys(['x', 'y'], {x: {y: 5}}, val => val != 5);
 *
 * @param {string[]} keys
 * @param {object} object
 * @param {function} [fn]
 * @returns {*}
 */
utils.deletePropertyByKeys = function (keys, object, fn) {
  var length = keys.length;
  var value = void 0;
  var i = 0;

  keys.reduce(function (o, k) {
    i++;

    if (!o || (typeof o === 'undefined' ? 'undefined' : _typeof(o)) != 'object') {
      return;
    }

    if (!o.hasOwnProperty(k)) {
      return {};
    }

    if (i == length) {
      value = o[k];
      (!fn || fn(value)) && delete o[k];
      return value;
    }

    return o[k];
  }, object);

  return value;
};

/**
 * Get the enumerable property target object
 *
 * @param {object} target
 * @param {string} key
 * @returns {object}
 */

utils.getEnumerablePropertyTarget = function (target, key) {
  var check = function check(obj) {
    if (obj.propertyIsEnumerable(key)) {
      return obj;
    }

    var proto = Object.getPrototypeOf(obj);

    if (!proto) {
      return null;
    }

    return check(proto);
  };

  return check(target);
};

/**
 * Get the own property target object
 *
 * @param {object} target
 * @param {string} key
 * @returns {object}
 */
utils.getOwnPropertyTarget = function (target, key) {
  var check = function check(obj) {
    if (obj.hasOwnProperty(key)) {
      return obj;
    }

    var proto = Object.getPrototypeOf(obj);

    if (!proto) {
      return null;
    }

    return check(proto);
  };

  return check(target);
};

/**
 * Generate a random string
 *
 * @param {number} length
 * @param {function} fn
 * @returns {*}
 */
utils.createRandomString = function () {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var str = Math.random().toString(36).substring(2, length + 2);
  var now = Date.now();
  var val = '';

  for (var i = 0, l = str.length; i < l; i++) {
    if (!(now % i)) {
      val += str[i].toUpperCase();
    } else {
      val += str[i];
    }
  }

  if (fn && fn(val)) {
    return this.createRandomString(length, fn);
  }

  return val;
};

/**
 * Create a function with the debounce
 *
 * @param {function} fn
 * @param {number} delay
 * @returns {fn}
 */
utils.debounce = function (fn) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  return function () {
    clearTimeout(fn.__debounceTimeout);
    fn.__debounceTimeout = setTimeout(function () {
      fn();
      clearTimeout(fn.__debounceTimeout);
      delete fn.__debounceTimeout;
    }, delay);
  };
};

exports.default = utils;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(3);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component for elements which have async attribute content.
 * 
 * {@link https://akilijs.com/docs/components#docs_image,_iframe,_embed,_audio,_video,_track,_source,_object}
 * 
 * @tag url
 * @attr {string} [url]
 */
var Url = function (_Component) {
  _inherits(Url, _Component);

  function Url() {
    var _ref;

    _classCallCheck(this, Url);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Url.__proto__ || Object.getPrototypeOf(Url)).call.apply(_ref, [this].concat(args)));

    _this.urlAttribute = 'src';
    return _this;
  }

  _createClass(Url, [{
    key: 'compiled',
    value: function compiled() {
      this.attr('url', this.setUrl);
    }
  }, {
    key: 'setUrl',
    value: function setUrl(url) {
      this.attrs[this.urlAttribute] = url;
    }
  }]);

  return Url;
}(_component2.default);

Url.matches = '[url]';
exports.default = Url;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.systemAttributes = exports.evaluationRegexGlobal = exports.evaluationRegex = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

var _scope2 = __webpack_require__(7);

var _scope3 = _interopRequireDefault(_scope2);

var _request = __webpack_require__(4);

var _request2 = _interopRequireDefault(_request);

var _store = __webpack_require__(9);

var _store2 = _interopRequireDefault(_store);

var _globals = __webpack_require__(10);

var _globals2 = _interopRequireDefault(_globals);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var evaluationRegex = exports.evaluationRegex = /\${(((?!\${).)*)}/;
var evaluationRegexGlobal = exports.evaluationRegexGlobal = new RegExp(evaluationRegex.source, "g");
var systemAttributes = exports.systemAttributes = ['component', 'scope', 'no-ssr'];

/**
 * Base class from which all components are inherited
 */

var Component = function () {
  _createClass(Component, null, [{
    key: 'define',


    /**
     * Define the component
     */
    value: function define() {
      _akili2.default.component('component', Component);
    }

    /**
     * Parse the expression
     *
     * @param {object} context
     * @param {string} expression
     * @param {object} [vars]
     */

  }, {
    key: 'parse',
    value: function parse(context, expression) {
      var variables = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var keys = [];
      var vars = [];
      var exps = _utils2.default.split(expression, ';', ['"', "'", '`']);
      exps[exps.length - 1] = 'return ' + exps[exps.length - 1];

      for (var key in variables) {
        keys.push(key);
        vars.push(variables[key]);
      }

      return new (Function.prototype.bind.apply(Function, [null].concat(keys, ['' + exps.join('; ')])))().apply(context, vars);
    }

    /** 
     * @param {Element} el 
     * @param {object} [scope] 
     */

  }]);

  function Component(el) {
    var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Component);

    if (!(el instanceof Element)) {
      throw new Error('You must pass an html element to the component constructor');
    }

    this.__isMounted = false;
    this.__isCompiled = false;
    this.__isResolved = false;
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


  _createClass(Component, [{
    key: '__createCompilationOptions',
    value: function __createCompilationOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return _extends({
        checkChanges: false,
        setEvents: true,
        setParents: true,
        setBooleanAttributes: true,
        defineAttributes: true
      }, options);
    }

    /**
     * Create the recompilation options 
     * 
     * @param {object} [options]
     * @protected
     */

  }, {
    key: '__createRecompilationOptions',
    value: function __createRecompilationOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return _extends({}, this.__createCompilationOptions(), {
        setEvents: false,
        setParents: false,
        defineAttributes: false
      }, options);
    }

    /**
     * Recompile the component
     * 
     * @param {object} [options]
     * @protected
     */

  }, {
    key: '__recompile',
    value: function __recompile() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

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

  }, {
    key: '__create',
    value: function __create() {
      var _this = this;

      this.__compiling = this.__createCompilationOptions();
      this.__initialize();
      this.__setEvents();
      this.__setParents();
      this.__setBooleanAttributes();
      this.__defineAttributes();
      _akili2.default.isolate(function () {
        return _this.created(_this.attrs);
      });
    }

    /**
     * Compile the node
     *
     * @protected
     * @returns {Promise}
     */

  }, {
    key: '__compile',
    value: function __compile() {
      var _this2 = this;

      var control = this.__controlAttributes || !this.__evaluationParent;
      var p = Promise.resolve();
      this.__attributeOf = control ? this : this.__evaluationParent.__akili;

      if (!this.__recompiling || this.__compiling.newParent || this.__controlAttributes) {
        this.__interpolateAttributes(this.el, this.__attributeOf);
      }

      var interpolate = function interpolate(children, parent) {
        for (var i = 0, l = children.length; i < l; i++) {
          var child = children[i];

          if (child.nodeType == 3 && _this2.__initializeNode(child, parent)) {
            _this2.__evaluateNode(child, _this2.__compiling ? _this2.__compiling.checkChanges : false);
          } else if (child.nodeType == 1 && !child.__akili) {
            _this2.__interpolateAttributes(child);
            interpolate(child.childNodes, child);
          }
        }
      };

      interpolate(this.el.childNodes, this.el);
      this.__isMounted = true;
      var res = void 0;

      if (!this.__recompiling) {
        res = _akili2.default.isolate(function () {
          _this2.attrs.onCompiled && _this2.attrs.onCompiled.trigger(undefined, { bubbles: false });
          return _this2.compiled();
        });

        if (this.constructor.templateUrl) {
          p = _request2.default.get(this.constructor.templateUrl, { cache: this.constructor.templateCache }).then(function (res) {
            _this2.el.innerHTML = _this2.__content;
            _akili2.default.setTemplate(_this2.el, res.data);
            delete _this2.__content;
            return _akili2.default.compile(_this2.el, { recompile: true });
          });
        }
      } else {
        res = _akili2.default.isolate(function () {
          _this2.attrs.onRecompiled && _this2.attrs.onRecompiled.trigger(undefined, { bubbles: false });
          _this2.recompiled();
        });
      }

      this.__recompiling = null;
      this.__compiling = null;

      return p.then(function () {
        _this2.__isCompiled = true;
        return res;
      });
    }

    /**
     * Resolve the component
     *
     * @protected
     * @returns {Promise}
     */

  }, {
    key: '__resolve',
    value: function __resolve() {
      var _this3 = this;

      if (this.__isResolved) {
        return Promise.resolve();
      }

      this.attrs.onResolved && this.attrs.onResolved.trigger(undefined, { bubbles: false });

      return Promise.resolve(_akili2.default.isolate(function () {
        return _this3.resolved();
      })).then(function (res) {
        _this3.__isResolved = true;
        return res;
      });
    }

    /**
     * Initialize the component
     *
     * @protected
     */

  }, {
    key: '__initialize',
    value: function __initialize() {
      var parent = _akili2.default.getAkiliParents(this.el, false);
      var Scope = this.constructor.scope || _akili2.default.Scope;
      var scope = void 0;
      var isRoot = _akili2.default.__root === this.el;
      this.el.__akili = this;

      if (parent) {
        scope = new Scope(this.el.getAttribute('scope') || _akili2.default.createScopeName(), this.el, this);
      } else {
        scope = new Scope(isRoot ? 'root' : _akili2.default.createScopeName(), this.el, this);
        isRoot && (_akili2.default.root = this);
      }

      var __scope = scope;
      var _scope = Object.assign(scope, this.scope);
      var controlAttributes = this.constructor.controlAttributes;
      var events = this.constructor.events;

      if (this.constructor.template) {
        _akili2.default.setTemplate(this.el, this.constructor.template);
      }

      if (this.constructor.templateUrl) {
        this.__content = this.el.innerHTML;
        this.el.innerHTML = '';
      }

      this.__scope = __scope;
      this.__events = events;
      this.__controlAttributes = controlAttributes;
      _akili2.default.addScope(scope);
      this.scope = this.__nestedObserve(_scope, []);
      return true;
    }

    /**
     * Set the boolean attributes
     *
     * @protected
     */

  }, {
    key: '__setBooleanAttributes',
    value: function __setBooleanAttributes() {
      var _this4 = this;

      this.booleanAttributes = [].concat(_akili2.default.htmlBooleanAttributes, this.constructor.booleanAttributes);

      var setAttr = function setAttr(el) {
        for (var i = 0, attrs = el.attributes, l = attrs.length; i < l; i++) {
          var node = attrs[i];

          if (_this4.booleanAttributes.indexOf(node.nodeName) != -1) {
            if (el.hasAttribute('boolean-' + node.nodeName)) {
              continue;
            }

            el.setAttribute('boolean-' + node.nodeName, el.getAttribute(node.nodeName) || node.nodeName);
            el.removeAttribute(node.nodeName);
          }
        }

        for (var _i = 0, _l = el.children.length; _i < _l; _i++) {
          var child = el.children[_i];

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

  }, {
    key: '__setEvents',
    value: function __setEvents() {
      for (var i = 0, l = this.__events.length; i < l; i++) {
        var ev = this.__events[i];
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

  }, {
    key: '__setParents',
    value: function __setParents() {
      var parents = _akili2.default.getAkiliParents(this.el);

      if (!parents.length) {
        return;
      }

      var newParent = this.__parent !== parents[0];
      var evaluationParent = null;

      for (var i = 0, l = parents.length; i < l; i++) {
        var parent = parents[i];

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

  }, {
    key: '__addChild',
    value: function __addChild(el) {
      this.__children.push(el);
    }

    /**
     * Splice the child from the list
     *
     * @param {Element} el
     * @protected
     */

  }, {
    key: '__spliceChild',
    value: function __spliceChild(el) {
      for (var i = 0, l = this.__children.length; i < l; i++) {
        var child = this.__children[i];

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

  }, {
    key: '__getParsedExpression',
    value: function __getParsedExpression(expression) {
      return expression;
    }

    /**
     * Check the need of the avaluation
     *
     * @param {Node} node
     * @returns {boolean}
     * @protected
     */

  }, {
    key: '__checkEvaluation',
    value: function __checkEvaluation(node) {
      if (!Object.keys(node.__properties).length) {
        return true;
      }

      for (var k in node.__properties) {
        if (!node.__properties.hasOwnProperty(k)) {
          continue;
        }

        var prop = node.__properties[k];
        var value = _utils2.default.getPropertyByKeys(prop.keys, prop.component.__scope);

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

  }, {
    key: '__checkNodePropertyChange',
    value: function __checkNodePropertyChange(node, keys, value) {
      var prop = this.__getNodeProperty(node, keys);

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

  }, {
    key: '__compareNodePropertyValue',
    value: function __compareNodePropertyValue(prop, value) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return _utils2.default.compare(_utils2.default.createHash(value), prop.hash, options);
    }

    /**
     * Create an exception message
     * 
     * @param {Node} node 
     * @param {Error} err 
     * @protected
     */

  }, {
    key: '__createExceptionMessage',
    value: function __createExceptionMessage(node, err) {
      var tagName = node.__component.el.tagName;
      var attrName = node.__component.el.getAttribute('component');
      var componentName = (attrName || tagName).toLowerCase();
      var elementName = node.__element.tagName.toLowerCase();
      var attributeName = node instanceof window.Attr ? node.name.toLowerCase() : '';
      var messages = [err.message, node.__expression.trim()];
      attributeName && messages.push('[attribute ' + attributeName + ']');
      messages = messages.concat(['[element ' + elementName + ']', '[component ' + componentName + ']']);
      return 'Expression error: ' + messages.join('\n\tat ');
    }

    /**
     * Evaluate the node expression
     *
     * @param {Node} node
     * @returns {*}
     * @protected
     */

  }, {
    key: '__evaluate',
    value: function __evaluate(node) {
      var _this5 = this;

      var counter = 0;
      var attributeValue = void 0;
      var expression = void 0;
      var evalComponent = node.__attributeOf || node.__component;

      if (node.__component.parents(function (com) {
        return com.__prevent;
      }).length) {
        return { res: node.__expression };
      }

      if (!(node instanceof window.Attr) && node.__component.__prevent) {
        return { res: node.__expression };
      }

      var res = node.__expression.replace(evaluationRegexGlobal, function (m, d) {
        counter++;
        var evaluate = void 0;
        var evaluation = [];
        var existingBindings = {};
        var parentBindings = {};
        var parseValue = node.__component.__getParsedExpression(d);
        _akili2.default.__evaluation = { node: node, list: [], component: node.__component };

        try {
          evaluate = _this5.constructor.parse(evalComponent.__evaluationComponent.scope, parseValue, _extends({}, _globals2.default));
        } catch (err) {
          throw _this5.__createExceptionMessage(node, err);
        }

        if (_akili2.default.__evaluation) {
          evaluation = _akili2.default.__evaluation.list;
          _akili2.default.__evaluation.list = null;
          _akili2.default.__evaluation = null;
        }

        for (var i = evaluation.length - 1; i >= 0; i--) {
          var data = evaluation[i];
          var hash = data.component.__createKeysHash(data.keys);
          var parentsHash = data.component.__createKeysHash(data.parents);

          if (data.notBinding) {
            continue;
          }

          if (existingBindings[hash]) {
            continue;
          }

          var parentValue = _utils2.default.getPropertyByKeys(data.parents, data.component.__scope);

          if (parentValue && (typeof parentValue === 'undefined' ? 'undefined' : _typeof(parentValue)) == 'object') {
            if (_akili2.default.options.debug && parentBindings[parentsHash] == 50) {
              // eslint-disable-next-line no-console
              console.warn(['For higher performance, don\'t loop Proxy arrays/objects inside expression functions, or use Akili.unevaluate() to wrap you code.', '' + node.__expression.trim(), 'scope property "' + data.parents.join('.') + '"'].join('\n\tat '));
            }

            !parentBindings[parentsHash] ? parentBindings[parentsHash] = 1 : parentBindings[parentsHash]++;
          }

          if (_utils2.default.isScopeProxy(parentValue) && data.component !== evalComponent.__evaluationComponent && data.component === data.realComponent) {
            continue;
          }

          data.component.__bindAndSetProperty(node, data.keys, data.evaluated);
          existingBindings[hash] = true;
        }

        if (node instanceof window.Attr) {
          expression = m;
          attributeValue = evaluate;
          return _utils2.default.makeAttributeValue(evaluate);
        }

        if ((typeof evaluate === 'undefined' ? 'undefined' : _typeof(evaluate)) == 'object') {
          try {
            return JSON.stringify(evaluate);
          } catch (e) {
            return evaluate;
          }
        }

        return evaluate;
      });

      return { res: res, counter: counter, expression: expression, attributeValue: attributeValue };
    }

    /**
     * Bind the node and set the property
     *
     * @param {Node} node
     * @param {string[]} keys
     * @param {boolean} [evaluated]
     * @protected
     */

  }, {
    key: '__bindAndSetProperty',
    value: function __bindAndSetProperty(node, keys, evaluated) {
      var bind = this.__getBoundNode(keys, node);
      var value = _utils2.default.getPropertyByKeys(keys, this.__scope);

      if (!bind) {
        this.__bind(keys, { node: node });
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

  }, {
    key: '__evaluateNested',
    value: function __evaluateNested(keys) {
      var _this6 = this;

      var withoutParents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var scope = this.__scope;
      var props = [];

      if (!withoutParents) {
        var lastProps = [];

        for (var i = 0, l = keys.length; i < l; i++) {
          var key = keys[i];
          var value = void 0;

          lastProps = [].concat(_toConsumableArray(lastProps), [key]);
          value = _utils2.default.getPropertyByKeys(lastProps, scope);
          props.push({ keys: lastProps, value: value });
        }
      } else {
        props.push({ keys: keys, value: _utils2.default.getPropertyByKeys(keys, scope) });
      }

      var propsLength = props.length;

      var elEvaluate = function elEvaluate(element) {
        var component = element.__akili;

        for (var m = 0; m < propsLength; m++) {
          var prop = props[m];
          var data = void 0;

          if (component === _this6) {
            var bind = component.__getBind(prop.keys);
            data = bind ? bind.__data || [] : [];
          } else {
            data = component.__getAllBinds(prop.keys);
          }

          if (!data || !data.length) {
            continue;
          }

          for (var k = 0, c = data.length; k < c; k++) {
            var _bind = data[k];

            if (!_bind || !_bind.node || !_bind.node.__initialized) {
              continue;
            }

            if (component.__checkNodePropertyChange(_bind.node, prop.keys, prop.value)) {
              component.__disableKeys(prop.keys);
              var checkProp = component.__getNodeProperty(_bind.node, prop.keys);
              checkProp && checkProp.evaluated && component.scope.__set(prop.keys, prop.value, false, true);
              component.__evaluateNode(_bind.node, false);

              for (var _k in _bind.node.__properties) {
                if (!_bind.node.__properties.hasOwnProperty(_k)) {
                  continue;
                }

                var _prop = _bind.node.__properties[_k];
                var _value = _utils2.default.getPropertyByKeys(_prop.keys, _prop.component.__scope);
                _prop.component.__setNodeProperty(_bind.node, _prop.keys, _value);
              }

              component.__enableKeys(prop.keys);
            }
          }
        }

        return component;
      };

      var evaluate = function evaluate(elements) {
        for (var _i2 = 0, _l2 = elements.length; _i2 < _l2; _i2++) {
          var component = elEvaluate(elements[_i2]);
          evaluate(component.__children);
        }
      };

      elEvaluate(this.el);
      evaluate(this.__children);
    }

    /**
     * Evaluate the value by the keys
     *
     * @param {string[]} keys
     * @param {*} value
     * @param {boolean} [isDeleted=false] - true if value is deleting
     * @protected
     */

  }, {
    key: '__evaluateByKeys',
    value: function __evaluateByKeys(keys, value) {
      var _this7 = this;

      var isDeleted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var data = this.__getBind(keys);

      var unbind = function unbind(obj, parents) {
        for (var k in obj) {
          if (!obj.hasOwnProperty(k) || _this7.__isSystemBindingKey(k)) {
            continue;
          }

          var _keys = [].concat(parents, [k]);
          var __keys = _keys.slice();
          var _isDeleted = false;
          var val = obj[k];
          var hasKey = void 0;

          __keys.shift();
          hasKey = _utils2.default.hasPropertyByKeys(__keys, value);

          if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object' && !hasKey) {
            _isDeleted = true;
          }

          if (val && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) == 'object') {
            unbind(val, _keys);
          }

          _this7.__evaluateNested(_keys, true);

          if (value === null || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) != 'object' || !hasKey) {
            _this7.__unbind(_keys);
            _isDeleted && _utils2.default.deletePropertyByKeys(__keys, value);
          }
        }
      };

      data && unbind(data, [].concat(keys));
      this.__evaluateNested(keys, false);

      if (isDeleted) {
        this.__unbind(keys);
        isDeleted && _utils2.default.deletePropertyByKeys(keys, this.__scope);
      }
    }

    /**
     * Evaluate the event expression
     *
     * @param {Node} node
     * @param {Element} el
     * @param {Event} e
     * @protected
     */

  }, {
    key: '__evaluateEvent',
    value: function __evaluateEvent(node, el, e) {
      var expression = evaluationRegex.exec(node.__expression);
      var evaluate = void 0;

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

      try {
        evaluate = this.constructor.parse(this.__evaluationComponent.scope, expression[1], _extends({}, _globals2.default, { event: e }));
      } catch (err) {
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

  }, {
    key: '__evaluateNode',
    value: function __evaluateNode(node) {
      var check = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var key = node instanceof window.Attr ? 'value' : 'nodeValue';

      if (check ? this.__checkEvaluation(node) : true) {
        var _evaluate = this.__evaluate(node),
            res = _evaluate.res,
            attributeValue = _evaluate.attributeValue,
            expression = _evaluate.expression,
            counter = _evaluate.counter;

        node[key] != res && (node[key] = res);

        if (node instanceof window.Attr) {
          var value = res;
          var isBooleanAttribute = false;

          if (counter == 1 && expression && node.__expression == expression) {
            value = attributeValue;
          }

          var clearAttribute = node.nodeName.replace(/^boolean-(.+)/i, '$1');
          var camelAttribute = _utils2.default.toCamelCase(clearAttribute);

          if (clearAttribute != node.nodeName) {
            isBooleanAttribute = true;
            value = !!value;
          }

          if (node.__attributeOn) {
            var component = node.__attributeOn;
            value = component.__prepareAttributeIn(node, value);
            component.__disableAttributeSetter = true;
            component.attrs[camelAttribute] = value;
            component.__disableAttributeSetter = false;

            if (component.__isMounted) {
              component.__attrTriggerByName(camelAttribute, value);
            }
          } else if (isBooleanAttribute) {
            var element = node.__element;
            value ? element.setAttribute(camelAttribute, 'true') : element.removeAttribute(camelAttribute);
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

  }, {
    key: '__prepareAttributeIn',
    value: function __prepareAttributeIn(node, value) {
      return _utils2.default.copy(value, { plain: true });
    }

    /**
     * Prepare the attribute value for sending
     * 
     * @param {Node} node
     * @param {*} value
     * @protected
     */

  }, {
    key: '__prepareAttributeOut',
    value: function __prepareAttributeOut(node, value) {
      return _utils2.default.copy(value, { plain: true });
    }

    /**
     * Initialize the attributes
     *
     * @param {Node} node
     * @param {Element} el
     * @param {Component} attributeOf - if node is linked with parent scope
     * @protected
     */

  }, {
    key: '__initializeAttribute',
    value: function __initializeAttribute(node, el, attributeOf) {
      if (!node || systemAttributes.indexOf(node.nodeName) != -1) {
        return;
      }

      if (!this.__initializeNode(node, el)) {
        return;
      }

      var eventName = node.nodeName.replace(/^on-(.+)/i, '$1');
      var component = attributeOf ? attributeOf : this;

      if (node.__isEvent) {
        if (node.__event) {
          return;
        }

        var emitter = new _akili2.default.EventEmitter(eventName, node, el, component);

        if (node.__hasBindings) {
          emitter.bind(function (e) {
            return component.__evaluateEvent(node, el, e);
          });
        }

        node.__event = emitter;
        el.setAttribute(node.nodeName, _utils2.default.makeAttributeValue(emitter));

        if (attributeOf) {
          this.__disableAttributeSetter = true;
          this.attrs[_utils2.default.toCamelCase(node.nodeName)] = emitter;
          this.__disableAttributeSetter = false;
        }

        return;
      }

      if (attributeOf) {
        node.__attributeOn = this;
        node.__attributeOf = component;
      }

      var check = this.__compiling ? this.__compiling.checkChanges : false;
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

  }, {
    key: '__initializeNode',
    value: function __initializeNode(node, el) {
      if (node.__initialized) {
        return true;
      }

      var isAttr = node instanceof window.Attr;
      var val = node[isAttr ? 'value' : 'nodeValue'];
      var hasBindings = evaluationRegex.test(val.trim());
      var isBoolean = isAttr ? /^boolean-/i.test(node.nodeName) : false;
      var isEvent = isAttr ? /^on-(.+)/i.test(node.nodeName) : false;

      if (!el.__akili && !hasBindings && !isBoolean && !isEvent) {
        return false;
      }

      node.__name = this.__scope.__name + _utils2.default.createRandomString(16);
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

  }, {
    key: '__deinitializeNode',
    value: function __deinitializeNode(node) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!node.__initialized) {
        return;
      }

      if (node.__event) {
        node.__event.remove();
      }

      if (node.__hasBindings && !options.saveBindings) {
        this.__unbindByNodes(node);
        this.__unbindParentsByNodes(node);
      }

      _akili2.default.removeTag(node);
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

  }, {
    key: '__interpolateAttributes',
    value: function __interpolateAttributes(el) {
      var attributeOf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      for (var i = 0, attrs = el.attributes, l = attrs.length; i < l; i++) {
        this.__initializeAttribute(attrs[i], el, attributeOf);
      }
    }

    /**
     * Define the attributes as a proxy
     *
     * @protected
     */

  }, {
    key: '__defineAttributes',
    value: function __defineAttributes() {
      var _this8 = this;

      var changeAttribute = function changeAttribute(key, value) {
        var isDeleted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (_this8.__disableAttributeSetter) {
          return;
        }

        var node = _this8.el.getAttributeNode(key);

        if (isDeleted) {
          node && _this8.__deinitializeNode(node);
          _this8.el.removeAttribute(key);
          return;
        } else if (!node) {
          _this8.el.setAttribute(key, value);
          node = _this8.el.getAttributeNode(key);
        } else {
          node.value = value;
          _this8.__deinitializeNode(node);
        }

        _this8.__initializeAttribute(node, _this8.el, _this8.__attributeOf);
      };

      this.attrs = new Proxy(this.__attrs, {
        get: function get(target, key) {
          if (key == '__isProxy') {
            return true;
          }

          return target[key];
        },
        set: function set(target, key, value) {
          var attrKey = _utils2.default.toDashCase(key);

          if (_this8.booleanAttributes.indexOf(attrKey) != -1) {
            attrKey = 'boolean-' + attrKey;
            value ? _this8.el.setAttribute(key, value) : _this8.el.removeAttribute(key);
          }

          target[key] = value;
          changeAttribute(attrKey, _utils2.default.makeAttributeValue(value));
          return true;
        },
        deleteProperty: function deleteProperty(target, key, value) {
          var attrKey = _utils2.default.toDashCase(key);
          changeAttribute(attrKey, _utils2.default.makeAttributeValue(value), true);
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

  }, {
    key: '__observe',
    value: function __observe(obj, parents) {
      var _this9 = this;

      return new Proxy(obj, {
        get: function get(target, key) {
          if (key == "__isProxy") {
            return true;
          }

          if (key == "__target") {
            return obj;
          }

          if (key == "__component") {
            return _this9;
          }

          if (key == "__keys") {
            return parents;
          }

          if (_this9.__isSystemKey(key)) {
            return target[key];
          }

          if (_akili2.default.__evaluation) {
            var keys = [].concat(parents, [key]);
            var notBinding = false;
            var evaluated = !_utils2.default.hasPropertyByKeys(keys, _this9.__scope);
            var component = _this9;
            var excArr = keys.slice();

            if (target instanceof _scope3.default) {
              var realTarget = _utils2.default.getOwnPropertyTarget(target, key);
              realTarget && realTarget instanceof _scope3.default && (component = realTarget.__component);
            }

            if (_akili2.default.__wrapping && keys.length > 1) {
              return target[key];
            }

            var forParents = _akili2.default.__evaluation.component.parents(function (c) {
              return c instanceof _akili2.default.components.For;
            });

            for (var i = 0, l = forParents.length; i < l; i++) {
              for (var k = 0, c = keys.length; k < c; k++) {
                var forData = forParents[i].data;
                var data = _utils2.default.getPropertyByKeys(excArr, component.__scope);

                if (data && (typeof data === 'undefined' ? 'undefined' : _typeof(data)) == 'object' && forData === data) {
                  return target[key];
                }

                excArr.pop();
              }
            }

            if (!(key in target)) {
              target[key] = undefined;
            } else if (!_utils2.default.getEnumerablePropertyTarget(target, key)) {
              notBinding = true;
            }

            _this9.__bindNode(_akili2.default.__evaluation.list, component, keys, parents, target[key], notBinding, evaluated);
            return target[key];
          }

          return target[key];
        },
        set: function set(target, key, value) {
          if (_this9.__isSystemKey(key)) {
            target[key] = value;
            return true;
          }

          if (typeof target[key] === 'function') {
            value = _akili2.default.wrapFunction(value);
          }

          var keys = [].concat(parents, [key]);

          if (_this9.__checkDisablement(keys)) {
            target[key] = value;
            return true;
          }

          CHECK_EXISTENCE: if (parents.length > 0) {
            var targetParentValue = parents.length > 1 ? _utils2.default.getPropertyByKeys(parents.slice(0, -1), _this9.__scope) : _this9.__scope;

            for (var k in targetParentValue) {
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

          target[key] = _this9.__nestedObserve(value, keys);

          if (!_this9.__isResolved) {
            _this9.__triggerStoreAndAttr(keys);
          }

          if (_akili2.default.__isolation) {
            _this9.__createIsolationObject(parents, key, false);
            return true;
          }

          if (_this9.__isResolved) {
            _this9.__triggerStoreAndAttr(keys);
          }

          if (_this9.__isMounted) {
            _this9.__evaluateByKeys(keys, value);
          }

          return true;
        },
        deleteProperty: function deleteProperty(target, key) {
          var keys = [].concat(parents, [key]);

          if (_this9.__checkDisablement(keys)) {
            delete target[key];
            return true;
          }

          if (_this9.__isSystemKey(key)) {
            delete target[key];
            return true;
          }

          delete target[key];

          if (!_this9.__isResolved) {
            _this9.__triggerStoreAndAttr(keys);
          }

          if (_akili2.default.__isolation) {
            _this9.__createIsolationObject(parents, key, true);
            return true;
          }

          if (_this9.__isResolved) {
            _this9.__triggerStoreAndAttr(keys);
          }

          _this9.__evaluateByKeys(keys, undefined, true);
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

  }, {
    key: '__triggerStoreAndAttr',
    value: function __triggerStoreAndAttr(keys) {
      for (var i = 0, l = keys.length; i < l; i++) {
        var currentKeys = keys.slice(0, l - i);
        var currentKeyString = _akili2.default.joinBindingKeys(currentKeys);
        var val = _utils2.default.getPropertyByKeys(currentKeys, this.__scope);

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

  }, {
    key: '__createKeysHash',
    value: function __createKeysHash(keys) {
      return this.__scope.__name + '.' + _akili2.default.joinBindingKeys(keys);
    }

    /**
     * Get the store of the disablement type
     * 
     * @param {string} type 
     * @returns {object}
     * @protected
     */

  }, {
    key: '__getDisablementTypeStore',
    value: function __getDisablementTypeStore(type) {
      return {
        proxy: '__disableProxy',
        store: '__disableStoreKeys',
        attr: '__disableAttrKeys'
      }[type];
    }

    /**
     * Disable the keys setter
     * 
     * @param {string[]} keys  
     * @param {string} [type]  
     * @protected
     */

  }, {
    key: '__disableKeys',
    value: function __disableKeys(keys) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'proxy';

      this[this.__getDisablementTypeStore(type)][keys ? this.__createKeysHash(keys) : '__all'] = true;
    }

    /**
     * Enable the keys setter
     * 
     * @param {string[]} keys 
     * @param {string} [type]   
     * @protected
     */

  }, {
    key: '__enableKeys',
    value: function __enableKeys(keys) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'proxy';

      delete this[this.__getDisablementTypeStore(type)][keys ? this.__createKeysHash(keys) : '__all'];
    }

    /**
     * Check the keys setter disablemant
     * 
     * @param {string[]} keys 
     * @param {string} [type]   
     * @protected
     */

  }, {
    key: '__checkDisablement',
    value: function __checkDisablement(keys) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'proxy';

      var store = this.__getDisablementTypeStore(type);
      return this[store].__all ? true : this[store][this.__createKeysHash(keys)];
    }

    /**
     * Save the value to the store by the keys
     * 
     * @param {string[]} keys 
     * @param {*} value    
     * @protected
     */

  }, {
    key: '__storeTriggerByKeys',
    value: function __storeTriggerByKeys(keys, value) {
      if (this.__checkDisablement(keys, 'store')) {
        return;
      }

      var links = this.__storeLinks[_akili2.default.joinBindingKeys(keys)];

      if (!links || !links.length) {
        return;
      }

      value = _utils2.default.copy(value, { plain: true });
      var p = [];

      for (var i = 0, l = links.length; i < l; i++) {
        var link = links[i];

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

  }, {
    key: '__storeTriggerByName',
    value: function __storeTriggerByName(name, value) {
      var _this10 = this;

      _store2.default.__target[name] = value;
      var links = (_akili2.default.__storeLinks[name] || []).concat(_akili2.default.__storeLinks['*'] || []);

      if (!links || !links.length) {
        return;
      }

      links = _utils2.default.sort(links, ['date'], true);

      return _akili2.default.nextTick(function () {
        var _loop = function _loop(i, l) {
          var link = links[i];
          var component = link.component;

          if (component === _this10) {
            return 'continue';
          }

          if (link.fn) {
            _akili2.default.unisolate(function () {
              return link.fn.call(component, value, name);
            });
            return 'continue';
          }
          if (!link.get) {
            return 'continue';
          }

          component.__disableKeys(link.keys, 'store');
          var current = _utils2.default.getPropertyByKeys(link.keys, component.__scope);
          !_utils2.default.compare(current, value) && component.scope.__set(link.keys, value);
          component.__enableKeys(link.keys, 'store');
        };

        for (var i = 0, l = links.length; i < l; i++) {
          var _ret = _loop(i, l);

          if (_ret === 'continue') continue;
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

  }, {
    key: '__storeByKeys',
    value: function __storeByKeys(name, keys) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      options = _extends({ get: true, set: true }, options);

      if (!keys) {
        throw new Error('Store link "' + name + '" must have the scope property name');
      }

      if (!options.get && !options.set) {
        throw new Error('Store link "' + name + '" must have at least "get" or "set" option as true');
      }

      if (!Array.isArray(keys)) {
        keys = [keys];
      }

      this.__disableKeys(keys, 'store');
      (_store2.default.hasOwnProperty(name) || !_utils2.default.hasPropertyByKeys(keys, this.__scope)) && this.scope.__set(keys, _store2.default[name]);
      this.__enableKeys(keys, 'store');
      var keyString = _akili2.default.joinBindingKeys(keys);
      var info = void 0;

      if (!this.__storeLinks[keyString]) {
        this.__storeLinks[keyString] = [];
      }

      var arr = this.__storeLinks[keyString];

      for (var i = arr.length - 1; i >= 0; i--) {
        var res = arr[i];

        if (res.component === this && res.name == name && res.keyString == keyString) {
          res.set = options.set;
          res.get = options.get;
          res.date = Date.now();
          return;
        }
      }

      if (!_akili2.default.__storeLinks[name]) {
        _akili2.default.__storeLinks[name] = [];
      }

      info = { component: this, name: name, keys: keys, keyString: keyString, date: Date.now(), set: options.set, get: options.get };
      this.__storeLinks[keyString].push(info);
      _akili2.default.__storeLinks[name].push(info);
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

  }, {
    key: '__storeByFunction',
    value: function __storeByFunction(name, fn) {
      var _this11 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var call = options.callOnStart === undefined ? _store2.default.__target.hasOwnProperty(name) : options.callOnStart;

      if (!_akili2.default.__storeLinks[name]) {
        _akili2.default.__storeLinks[name] = [];
      }

      var links = _akili2.default.__storeLinks[name];

      for (var i = links.length - 1; i >= 0; i--) {
        var res = links[i];

        if (res.component === this && res.name == name && res.fn === fn) {
          res.date = Date.now();
          return;
        }
      }

      _akili2.default.__storeLinks[name].push({ component: this, name: name, fn: fn, date: Date.now() });

      if (name == '*' && options.callOnStart !== false) {
        var storeKeys = Object.keys(_store2.default.__target);
        var p = [];

        var _loop2 = function _loop2(l, _i3) {
          var key = storeKeys[_i3];
          var val = _store2.default.__target[key];
          p.push(_akili2.default.unisolate(function () {
            return fn.call(_this11, val, key);
          }));
        };

        for (var _i3 = 0, l = storeKeys.length; _i3 < l; _i3++) {
          _loop2(l, _i3);
        }

        return Promise.all(p);
      }

      if (call) {
        return _akili2.default.unisolate(function () {
          return fn.call(_this11, _store2.default[name]);
        });
      }
    }

    /**
     * Remove the store link with the scope property
     * 
     * @param {string} name
     * @param {string|string[]} keys
     * @protected
     */

  }, {
    key: '__unstoreByKeys',
    value: function __unstoreByKeys(name, keys) {
      if (!keys) {
        throw new Error('You have to pass the scope property name for store link "' + name + '"');
      }

      if (!Array.isArray(keys)) {
        keys = [keys];
      }

      var keyString = _akili2.default.joinBindingKeys(keys);
      var arr = this.__storeLinks[keyString];

      if (!arr.length) {
        return;
      }

      for (var i = arr.length - 1; i >= 0; i--) {
        var res = arr[i];
        var links = _akili2.default.__storeLinks[res.name];

        if (res.component !== this || res.name != name || res.keyString != keyString) {
          continue;
        }

        arr.splice(i, 1);

        if (!links || !links.length) {
          continue;
        }

        for (var k = links.length - 1; k >= 0; k--) {
          var _link = links[k];

          if (_link.component === this && _link.keyString == keyString) {
            links.splice(k, 1);
          }
        }

        if (!links.length) {
          delete _akili2.default.__storeLinks[name];
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

  }, {
    key: '__unstoreByFunction',
    value: function __unstoreByFunction(name, fn) {
      if (!_akili2.default.__storeLinks[name]) {
        return;
      }

      var links = _akili2.default.__storeLinks[name];

      for (var i = links.length - 1; i >= 0; i--) {
        var res = links[i];

        if (res.component === this && res.name == name && res.fn === fn) {
          links.splice(i, 1);
          break;
        }
      }

      if (!links.length) {
        delete _akili2.default.__storeLinks[name];
      }
    }

    /**
     * Trigger the attribute event by the keys
     * 
     * @param {string[]} keys 
     * @param {*} value    
     * @protected
     */

  }, {
    key: '__attrTriggerByKeys',
    value: function __attrTriggerByKeys(keys, value) {
      var _this12 = this;

      if (this.__checkDisablement(keys, 'attr')) {
        return;
      }

      var links = this.__attrLinks[_akili2.default.joinBindingKeys(keys)];

      if (!links || !links.length) {
        return;
      }

      return _akili2.default.nextTick(function () {
        for (var i = 0, l = links.length; i < l; i++) {
          var _link2 = links[i];

          if (_link2.fn) {
            continue;
          }

          if (!_link2.set) {
            continue;
          }

          var ev = 'on' + _utils2.default.capitalize(_link2.name);
          _this12.attrs[ev] && _this12.attrs[ev].trigger(value, { bubbles: true });
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

  }, {
    key: '__attrTriggerByName',
    value: function __attrTriggerByName(name, value) {
      var _this13 = this;

      var links = (this.__attrLinks[name] || []).concat(this.__attrLinks['*'] || []);

      if (!links || !links.length) {
        return;
      }

      links = _utils2.default.sort(links, ['date'], true);

      var _loop3 = function _loop3(i, l) {
        var link = links[i];

        if (link.fn) {
          _akili2.default.unisolate(function () {
            return link.fn.call(_this13, value, _utils2.default.toDashCase(name));
          });
          return 'continue';
        }

        if (!link.get) {
          return 'continue';
        }

        _this13.__disableKeys(link.keys, 'attr');
        var current = _utils2.default.getPropertyByKeys(link.keys, _this13.__scope);
        !_utils2.default.compare(current, value) && _this13.scope.__set(link.keys, value);
        _this13.__enableKeys(link.keys, 'attr');
      };

      for (var i = 0, l = links.length; i < l; i++) {
        var _ret3 = _loop3(i, l);

        if (_ret3 === 'continue') continue;
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

  }, {
    key: '__attrByKeys',
    value: function __attrByKeys(name, keys) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      options = _extends({ get: true, set: true }, options);
      name = _utils2.default.toCamelCase(name);

      if (!keys) {
        throw new Error('Attribute link "' + name + '" must have the scope property name');
      }

      if (!Array.isArray(keys)) {
        keys = [keys];
      }

      this.__disableKeys(keys, 'attr');
      (this.attrs.hasOwnProperty(name) || !_utils2.default.hasPropertyByKeys(keys, this.__scope)) && this.scope.__set(keys, this.attrs[name]);
      this.__enableKeys(keys, 'attr');
      var keyString = _akili2.default.joinBindingKeys(keys);

      if (!this.__attrLinks[keyString]) {
        this.__attrLinks[keyString] = [];
      }

      var arr = this.__attrLinks[keyString];

      for (var i = arr.length - 1; i >= 0; i--) {
        var res = arr[i];

        if (res.name == name && res.keyString == keyString) {
          res.get = options.get;
          res.set = options.set;
          res.date = Date.now();
          return;
        }
      }

      this.__attrLinks[keyString].push({ name: name, keys: keys, keyString: keyString, date: Date.now(), set: options.set, get: options.get });
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

  }, {
    key: '__attrByFunction',
    value: function __attrByFunction(name, fn) {
      var _this14 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      name = _utils2.default.toCamelCase(name);
      var call = options.callOnStart === undefined ? this.attrs.hasOwnProperty(name) : options.callOnStart;

      if (!this.__attrLinks[name]) {
        this.__attrLinks[name] = [];
      }

      var links = this.__attrLinks[name];

      for (var i = links.length - 1; i >= 0; i--) {
        var res = links[i];

        if (res.name == name && res.fn === fn) {
          res.date = Date.now();
          return;
        }
      }

      this.__attrLinks[name].push({ name: name, fn: fn, date: Date.now() });

      if (name == '*' && options.callOnStart !== false) {
        var attrsKeys = Object.keys(this.__attrs).filter(function (k) {
          return !(_this14.__attrs[k] instanceof _akili2.default.EventEmitter);
        });
        var p = [];

        var _loop4 = function _loop4(l, _i4) {
          var key = attrsKeys[_i4];
          var val = _this14.__attrs[key];
          p.push(_akili2.default.unisolate(function () {
            return fn.call(_this14, val, _utils2.default.toDashCase(key));
          }));
        };

        for (var _i4 = 0, l = attrsKeys.length; _i4 < l; _i4++) {
          _loop4(l, _i4);
        }

        return Promise.all(p);
      }

      if (call) {
        return _akili2.default.unisolate(function () {
          return fn.call(_this14, _this14.attrs[name]);
        });
      }
    }

    /**
     * Remove the attribute link with the scope property
     * 
     * @param {string} name
     * @param {string|string[]} keys
     * @protected
     */

  }, {
    key: '__unattrByKeys',
    value: function __unattrByKeys(name, keys) {
      if (!keys) {
        throw new Error('You have to pass the scope property name for attribute link "' + name + '"');
      }

      if (!Array.isArray(keys)) {
        keys = [keys];
      }

      var keyString = _akili2.default.joinBindingKeys(keys);
      var arr = this.__attrLinks[keyString];

      if (!arr.length) {
        return;
      }

      for (var i = arr.length - 1; i >= 0; i--) {
        var res = arr[i];

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

  }, {
    key: '__unattrByFunction',
    value: function __unattrByFunction(name, fn) {
      if (!this.__attrLinks[name]) {
        return;
      }

      var links = this.__attrLinks[name];

      for (var i = links.length - 1; i >= 0; i--) {
        var res = links[i];

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

  }, {
    key: '__isSystemKey',
    value: function __isSystemKey(key) {
      if (key == '__' || key[0] == '_' && key[1] == '_') {
        return true;
      } else if (['constructor'].indexOf(key) != -1) {
        return true;
      }

      return false;
    }

    /**
     * Nested observing of the value
     *
     * @param {*} value
     * @param {string[]} [startKeys]
     * @protected
     */

  }, {
    key: '__nestedObserve',
    value: function __nestedObserve(value, startKeys) {
      var _this15 = this;

      var observe = function observe(value, parents) {
        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) != 'object' || value === null) {
          return value;
        }

        if (!_utils2.default.isPlainObject(value) && !_utils2.default.isScopeProxy(value) && !(value instanceof _scope3.default)) {
          return value;
        }

        var target = value;

        CHECK_PROXY: if (value.__isProxy) {
          target = value.__target;

          if (_this15.__disableProxyRedefining) {
            break CHECK_PROXY;
          }

          if (value.__component !== _this15 || _akili2.default.joinBindingKeys(parents) != _akili2.default.joinBindingKeys(value.__keys)) {
            target = _utils2.default.copy(target, { nested: false });
            value = target;
          }
        } else if (!_this15.__disableProxyRedefining && !(value instanceof _scope3.default)) {
          target = _utils2.default.copy(target, { nested: false });
          value = target;
        }

        var targetKeys = Object.keys(target);

        for (var i = 0, l = targetKeys.length; i < l; i++) {
          var k = targetKeys[i];
          var _val = target[k];
          var keys = [].concat(parents, [k]);
          target[k] = observe(_val, keys);
        }

        if (!value.__isProxy) {
          return _this15.__observe(value, parents);
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

  }, {
    key: '__createIsolationObject',
    value: function __createIsolationObject(parents, key) {
      var isDeleted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var keys = parents.length ? [parents[0]] : [key];
      var isolationHash = this.__createKeysHash(keys);

      if (parents.length) {
        isDeleted = false;
      }

      if (!_akili2.default.__isolation[isolationHash]) {
        _akili2.default.__isolation[isolationHash] = {
          updatedAt: new Date().getTime(),
          component: this,
          keys: keys
        };
      }

      isDeleted !== undefined && (_akili2.default.__isolation[isolationHash].isDeleted = isDeleted);
      return _akili2.default.__isolation[isolationHash];
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

  }, {
    key: '__bindNode',
    value: function __bindNode(bind, realComponent, keys, parents, value) {
      var notBinding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
      var evaluated = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;

      var parentKeysString = _akili2.default.joinBindingKeys(parents);
      var component = this;

      if (bind.length && !notBinding) {
        var l = bind.length - 1;
        var data = bind[l];

        if (data.realComponent === this && data.keysString == parentKeysString) {
          component = data.component;
        }

        if (data.keysString == parentKeysString && data.component === component) {
          bind.splice(l, 1);
        }
      }

      bind.push({
        component: component,
        realComponent: realComponent,
        keysString: _akili2.default.joinBindingKeys(keys),
        parents: parents,
        keys: keys,
        value: value,
        evaluated: evaluated,
        notBinding: notBinding
      });
    }

    /**
     * Check the key is the system
     *
     * @param {string} key
     * @returns {boolean}
     * @protected
     */

  }, {
    key: '__isSystemBindingKey',
    value: function __isSystemBindingKey(key) {
      return key == '__data';
    }

    /**
     * Get a binding by the keys
     *
     * @param {string[]} keys
     * @returns {object|null}
     * @protected
     */

  }, {
    key: '__getBind',
    value: function __getBind(keys) {
      return _utils2.default.getPropertyByKeys(keys, this.__bindings) || null;
    }

    /**
     * Get all nested bindings by the keys
     * 
     * @param {string[]} keys 
     */

  }, {
    key: '__getAllBinds',
    value: function __getAllBinds(keys) {
      var root = this.__getBind(keys);

      if (!root) {
        return [];
      }

      var data = [];

      var collect = function collect(obj) {
        data = data.concat(obj.__data || []);

        for (var _key in obj) {
          if (!obj.hasOwnProperty(_key) || _key == '__data') {
            continue;
          }

          collect(obj[_key]);
        }
      };

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

  }, {
    key: '__getBoundNode',
    value: function __getBoundNode(keys, node) {
      var bind = _utils2.default.getPropertyByKeys(keys, this.__bindings);

      if (!bind || !bind.__data || !bind.__data.length) {
        return null;
      }

      for (var i = 0, l = bind.__data.length; i < l; i++) {
        var data = bind.__data[i];

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

  }, {
    key: '__setNodeProperty',
    value: function __setNodeProperty(node, keys, value) {
      var evaluated = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      var prop = this.__getNodeProperty(node, keys);
      var hash = _utils2.default.createHash(value);

      if (prop) {
        var res = node.__component.__compareNodePropertyValue(prop, value);
        prop.value = value;
        prop.hash = hash;
        return !res;
      }

      node.__properties[this.__createKeysHash(keys)] = {
        component: this,
        value: value,
        hash: hash,
        node: node,
        keys: keys,
        evaluated: evaluated
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

  }, {
    key: '__getNodeProperty',
    value: function __getNodeProperty(node, keys) {
      return node.__properties[this.__createKeysHash(keys)] || null;
    }

    /**
     * Delete the node property
     *
     * @param {Node} node
     * @param {string[]} keys
     * @protected
     */

  }, {
    key: '__deleteNodeProperty',
    value: function __deleteNodeProperty(node, keys) {
      var hash = this.__scope.__name + '.' + _akili2.default.joinBindingKeys(keys);
      delete node.__properties[hash];
    }

    /**
     * Map the nodes
     * 
     * @param {function} fn
     * @param {object} [options]
     * @protected
     */

  }, {
    key: '__mapNodes',
    value: function __mapNodes(fn) {
      var _this16 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      options = _extends({ rootAttrs: true, attrs: true, node: true, el: true }, options);

      var find = function find(el) {
        if (!el) {
          return;
        }

        if (options.attrs && (el !== _this16.el || options.rootAttrs)) {
          for (var k = 0, attrs = el.attributes, c = attrs.length; k < c; k++) {
            fn(attrs[k]);
          }
        }

        for (var i = el.childNodes.length - 1; i >= 0; i--) {
          var node = el.childNodes[i];

          if (node.nodeType == 3) {
            options.node && fn(node);
          } else if (node.nodeType == 1 && !node.__akili) {
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

  }, {
    key: '__getAllNodes',
    value: function __getAllNodes() {
      var nodes = [];
      this.__mapNodes(function (node) {
        return nodes.push(node);
      });
      return nodes;
    }

    /**
     * Bind the data with the keys
     *
     * @param {string[]} keys
     * @param {object} data
     * @protected
     */

  }, {
    key: '__bind',
    value: function __bind(keys, data) {
      _utils2.default.setPropertyByKeys(keys, this.__bindings, function (last, value) {
        var obj = { __data: [] };

        if (!last) {
          return value ? value : obj;
        }

        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
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

  }, {
    key: '__unbind',
    value: function __unbind(keys) {
      var bind = _utils2.default.getPropertyByKeys(keys, this.__bindings);

      if (!bind || !bind.__data) {
        return;
      }

      for (var i = 0, l = bind.__data.length; i < l; i++) {
        var node = bind.__data[i].node;
        this.__deleteNodeProperty(node, keys);
      }

      _utils2.default.deletePropertyByKeys(keys, this.__bindings, function (value) {
        if (Object.keys(value).length > 1) {
          value.__data = [];
          return false;
        }

        return true;
      });
    }

    /**
     * Unbind the data by nodes
     *
     * @param {Node|Node[]} nodes
     * @protected
     */

  }, {
    key: '__unbindByNodes',
    value: function __unbindByNodes(nodes) {
      var _this17 = this;

      nodes instanceof Node && (nodes = [nodes]);

      var unbind = function unbind(obj, parent, key) {
        var keys = Object.keys(obj);

        for (var j = 0, c = keys.length; j < c; j++) {
          var k = keys[j];

          if (k == '__data') {
            var data = obj[k] || [];
            var l = data.length;

            for (var i = 0; i < l; i++) {
              var bind = data[i];

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
          } else if (!_this17.__isSystemBindingKey(k)) {
            unbind(obj[k], obj, k);
          }

          if (parent && !Object.keys(obj).length) {
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

  }, {
    key: '__unbindParentsByNodes',
    value: function __unbindParentsByNodes(nodes) {
      for (var i = 0, l = this.__parents.length; i < l; i++) {
        var parent = this.__parents[i];
        parent && parent.__akili && parent.__akili.__unbindByNodes(nodes);
      }
    }

    /**
     * Clear the links
     * 
     * @protected
     */

  }, {
    key: '__clearStoreLinks',
    value: function __clearStoreLinks() {
      var links = _akili2.default.__storeLinks;

      for (var _key2 in links) {
        var arr = links[_key2];

        for (var i = arr.length - 1; i >= 0; i--) {
          var _link3 = arr[i];

          if (_link3.component === this) {
            for (var k in _link3) {
              delete _link3[k];
            }

            arr.splice(i, 1);
          }
        }

        if (!arr.length) {
          delete links[_key2];
        }
      }
    }

    /**
     * Remove all children
     *
     * @param {object} [options]
     * @returns {Node[]}
     * @protected
     */

  }, {
    key: '__removeChildren',
    value: function __removeChildren() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var nodes = [];

      var remove = function remove(children) {
        for (var i = 0; i < children.length; i++) {
          var child = children[i];
          remove(child.__akili.__children);
          nodes = nodes.concat(child.__akili.__remove(options));
          i--;
        }
      };

      remove(this.__children);
      return nodes;
    }

    /**
     * Remove the component without the children removing
     *
     * @param {object} [options]
     * @returns {Node[]}
     * @protected
     */

  }, {
    key: '__remove',
    value: function __remove() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var nodes = [];
      this.attrs.onRemoved && this.attrs.onRemoved.trigger(undefined, { bubbles: false });
      this.removed();
      nodes = nodes.concat(this.__detach({ saveBindings: true, deinitializeNodes: true }).concat(this.__empty({ saveBindings: true })));
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

      if (!options.saveBindings) {
        this.__unbindByNodes(nodes);
        this.__unbindParentsByNodes(nodes);
      }

      this.__parents && (this.__parents.length = 0);
      delete this.__parents;
      return nodes;
    }

    /**
     * Detach the component
     *
     * @param {object} [options]
     * @returns {object}
     * @protected
     */

  }, {
    key: '__detach',
    value: function __detach() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.__parent && this.__parent.__akili.__spliceChild(this.el);
      var nodes = [];

      for (var i = 0, l = this.el.attributes.length; i < l; i++) {
        var node = this.el.attributes[i];

        if (node.__initialized) {
          nodes.push(node);
          options.deinitializeNodes && this.__deinitializeNode(node, { saveBindings: true });
        }
      }

      if (!options.saveBindings) {
        this.__unbindParentsByNodes(nodes);
      }

      return nodes;
    }

    /**
     * Clear the component html
     *
     * @param {object} [options]
     * @returns {Node[]}
     * @protected
     */

  }, {
    key: '__empty',
    value: function __empty() {
      var _this18 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var nodes = this.__removeChildren({ saveBindings: true });

      this.__mapNodes(function (node) {
        if (node.nodeType == 1) {
          node.remove();
          return;
        }

        if (!node.__initialized) {
          return;
        }

        _this18.__deinitializeNode(node, { saveBindings: true });
        nodes.push(node);
      }, { rootAttrs: false });

      if (!options.saveBindings) {
        this.__unbindByNodes(nodes);
        this.__unbindParentsByNodes(nodes);
      }

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

  }, {
    key: '__getParent',
    value: function __getParent() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var findAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var levels = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      var arr = [];
      var level = 0;

      if ((typeof levels === 'undefined' ? 'undefined' : _typeof(levels)) != 'object') {
        levels = [levels];
      }

      var find = function find(parent) {
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
      return findAll ? arr : arr[0] || null;
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

  }, {
    key: '__getChildren',
    value: function __getChildren() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var findAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var levels = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      var arr = [];
      var level = 0;

      if ((typeof levels === 'undefined' ? 'undefined' : _typeof(levels)) != 'object') {
        levels = [levels];
      }

      var find = function find(children) {
        for (var i = 0, l = children.length; i < l; i++) {
          var child = children[i];

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

        for (var _i5 = 0, _l3 = children.length; _i5 < _l3; _i5++) {
          find(children[_i5].__akili.__children);
        }
      };

      find(this.__children);
      return findAll ? arr : arr[0] || null;
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

  }, {
    key: '__getNear',
    value: function __getNear() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var findAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var right = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (!this.__parent) {
        return null;
      }

      var levelElements = this.__parent.__akili.__children.slice();
      var arr = [];
      right && levelElements.reverse();

      for (var i = 0, l = levelElements.length; i < l; i++) {
        var el = levelElements[i];

        if (el === this.el) {
          break;
        }

        if (!selector || el.__akili.matches(selector)) {
          arr.push(el.__akili);
        }
      }

      arr.reverse();

      if (!findAll) {
        return arr.length ? arr[0] : null;
      }

      return arr;
    }

    /**
     * Create the link with the store
     * 
     * @param {string} name 
     * @param {string|string[]|function} handler
     */

  }, {
    key: 'store',
    value: function store(name, handler) {
      if (!this.__isMounted) {
        throw new Error('Method "store" must be called after the compilation. For example, in "compiled" method.');
      }

      var args = [].slice.call(arguments);

      if (typeof name == 'function') {
        args.unshift('*');
        handler = name;
      }

      return typeof handler === 'function' ? this.__storeByFunction.apply(this, _toConsumableArray(args)) : this.__storeByKeys.apply(this, _toConsumableArray(args));
    }

    /**
     * Create the link with the attribute
     * 
     * @param {string} name 
     * @param {string|string[]|function} handler
     */

  }, {
    key: 'attr',
    value: function attr(name, handler) {
      if (!this.__isMounted) {
        throw new Error('Method "attr" must be called after the compilation. For example, in "compiled" method.');
      }

      var args = [].slice.call(arguments);

      if (typeof name == 'function') {
        args.unshift('*');
        handler = name;
      }

      return typeof handler === 'function' ? this.__attrByFunction.apply(this, _toConsumableArray(args)) : this.__attrByKeys.apply(this, _toConsumableArray(args));
    }

    /**
     * Remove the store link
     * 
     * @param {string} name 
     * @param {string|string[]|function} handler
     */

  }, {
    key: 'unstore',
    value: function unstore(name, handler) {
      if (!this.__isMounted) {
        throw new Error('Method "unstore" must be called after the compilation. For example, in "compiled" method.');
      }

      var args = [].slice.call(arguments);

      if (typeof name == 'function') {
        args.unshift('*');
        handler = name;
      }

      return typeof handler === 'function' ? this.__unstoreByFunction.apply(this, arguments) : this.__unstoreByKeys.apply(this, arguments);
    }

    /**
     * Remove the attribute link
     * 
     * @param {string} name 
     * @param {string|string[]|function} handler
     */

  }, {
    key: 'unattr',
    value: function unattr(name, handler) {
      if (!this.__isMounted) {
        throw new Error('Method "unattr" must be called after the compilation. For example, in "compiled" method.');
      }

      var args = [].slice.call(arguments);

      if (typeof name == 'function') {
        args.unshift('*');
        handler = name;
      }

      return typeof handler === 'function' ? this.__unattrByFunction.apply(this, arguments) : this.__unattrByKeys.apply(this, arguments);
    }

    /**
     * Check the component using the selector
     *
     * @param {string|function} selector
     * @returns {boolean}
     */

  }, {
    key: 'matches',
    value: function matches(selector) {
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

  }, {
    key: 'parent',
    value: function parent() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var levels = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      return this.__getParent(selector, false, levels);
    }

    /**
     * Get an array of parent components by the selector
     *
     * @param {string|function} [selector='']
     * @param {number|number[]} [levels=null]
     * @returns {Component[]}
     */

  }, {
    key: 'parents',
    value: function parents() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var levels = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      return this.__getParent(selector, true, levels);
    }

    /**
     * Get the closest child component by the selector
     *
     * @param {string|function} [selector='']
     * @param {number|number[]} [levels=null]
     * @returns {Component}
     */

  }, {
    key: 'child',
    value: function child() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var levels = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      return this.__getChildren(selector, false, levels);
    }

    /**
     * Get an array of child components by the selector
     *
     * @param {string|function} [selector='']
     * @param {number|number[]} [levels=null]
     * @returns {Component[]}
     */

  }, {
    key: 'children',
    value: function children() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var levels = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      return this.__getChildren(selector, true, levels);
    }

    /**
     * Get an array of components left from the current by the selector
     *
     * @param {string|function} [selector='']
     * @returns {Component[]}
     */

  }, {
    key: 'before',
    value: function before() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      return this.__getNear(selector, true, false);
    }

    /**
     * Get an array of components right from the current by the selector
     *
     * @param {string|function} [selector='']
     * @returns {Component[]}
     */

  }, {
    key: 'after',
    value: function after() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      return this.__getNear(selector, true, true);
    }

    /**
     * Get the closest leftcomponent by the selector
     *
     * @param {string|function} [selector='']
     * @returns {Component}
     */

  }, {
    key: 'prev',
    value: function prev() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      return this.__getNear(selector, false, false);
    }

    /**
     * Get the closest right component by the selector
     *
     * @param {string|function} [selector='']
     * @returns {Component}
     */

  }, {
    key: 'next',
    value: function next() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      return this.__getNear(selector, false, true);
    }

    /**
     * Change the element parent
     *
     * @param {Element} parent
     */

  }, {
    key: 'appendTo',
    value: function appendTo(parent) {
      parent.appendChild(this.el);
      return _akili2.default.compile(this.el, { recompile: { setParents: true, checkChanges: false } });
    }

    /**
     * Cancel the component compilation
     */

  }, {
    key: 'cancel',
    value: function cancel() {
      this.__cancelled = true;
    }

    /**
     * Compile the component but prevent the compilation inside
     */

  }, {
    key: 'prevent',
    value: function prevent() {
      this.__prevent = true;
    }

    /**
     * Clear the element content
     *
     * @returns {*}
     */

  }, {
    key: 'empty',
    value: function empty() {
      return this.__empty.apply(this, arguments);
    }

    /**
     * Remove the element
     *
     * @returns {*}
     */

  }, {
    key: 'remove',
    value: function remove() {
      return this.__remove.apply(this, arguments);
    }
  }, {
    key: 'created',
    value: function created() {}
  }, {
    key: 'compiled',
    value: function compiled() {}
  }, {
    key: 'recompiled',
    value: function recompiled() {}
  }, {
    key: 'resolved',
    value: function resolved() {}
  }, {
    key: 'removed',
    value: function removed() {}
  }]);

  return Component;
}();

Component.matches = '';
Component.booleanAttributes = [];
Component.events = [];
Component.controlAttributes = false;
Component.transparent = false;
Component.template = '';
Component.templateUrl = '';
Component.scope = null;
exports.default = Component;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Request = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Request class.
 * The instance of this class allows you to make requests.
 * 
 * {@link https://akilijs.com/docs/requests}
 */
var Request = exports.Request = function () {

  /**
   * @param {string} baseUrl
   * @param {object} [defaults] 
   */
  function Request(baseUrl, defaults) {
    _classCallCheck(this, Request);

    this.__cache = {};

    this.getHeaders = function (xhr) {
      var headers = {};
      var str = xhr.getAllResponseHeaders();
      var arr = str.split('\r\n');

      for (var i = 0, l = arr.length; i < l; i++) {
        var line = arr[i];
        var index = line.indexOf(': ');

        if (index > 0) {
          var key = line.substring(0, index);
          var val = line.substring(index + 2);
          headers[key] = val;
        }
      }

      return headers;
    };

    this.baseUrl = baseUrl ? baseUrl.replace(/\/$/, '') + '/' : '';

    this.defaults = _extends({
      statusErrorPattern: /^[^23]/,
      cache: false
    }, defaults || {});
  }

  /**
   * Send the request
   *
   * @param {object} options
   * @returns {Promise}
   */


  _createClass(Request, [{
    key: 'query',
    value: function query(options) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        options = _extends({}, _this.defaults, options || {});
        options.url = _this.baseUrl ? '' + _this.baseUrl + options.url.replace(/^\//, '') : options.url;
        options.method = options.method || 'GET';

        var xhr = new XMLHttpRequest();
        var before = _this.transformBefore(xhr, options);
        xhr = before.xhr;
        options = before.options;
        typeof options.onStart == 'function' && options.onStart(xhr);
        options.headers = options.headers || {};

        if (options.json) {
          options.json !== true && (options.body = JSON.stringify(options.json));
          options.headers['content-type'] = 'application/json';
          options.responseType = options.responseType || 'json';
        } else if (options.form) {
          options.body = _this.createFormData(options.form);
          options.headers['content-type'] = 'multipart/form-data';
        }

        if (options.params) {
          var str = _this.paramsToQuery(options.params);
          str && (options.url += "?" + str);
        }

        var hash = null;
        var cache = typeof options.cache == 'function' ? options.cache(options) : options.cache;
        !window.AKILI_SSR && !_akili2.default.__init && (cache = true);

        if (options.method.toUpperCase() == 'GET' && (!options.body || typeof options.body == 'string')) {
          hash = _this.createCacheHash({
            url: options.url,
            method: options.method,
            user: options.user,
            password: options.password,
            body: options.body
          });
        }

        if (cache && hash) {
          var _cache = _this.getCache(hash);
          var now = new Date().getTime();

          if (_cache && (cache === true || now - _cache.createdAt <= cache)) {
            return resolve(_this.transformAfter(_cache.result));
          }
        }

        xhr.open(options.method, options.url, true, options.user, options.password);

        if (options.hasOwnProperty('timeout')) {
          xhr.timeout = options.timeout;
        }

        if (options.responseType) {
          xhr.responseType = options.responseType;
        }

        if (options.withCredentials) {
          xhr.withCredentials = options.withCredentials;
        }

        var headerKeys = Object.keys(options.headers);

        for (var i = 0, l = headerKeys.length; i < l; i++) {
          var k = headerKeys[i];
          xhr.setRequestHeader(k, options.headers[k]);
        }

        if (typeof options.onProgress == 'function') {
          xhr.onprogress = function () {
            return options.onProgress(xhr);
          };
        }

        xhr.onload = function () {
          var result = {
            response: xhr.response,
            status: xhr.status,
            readyState: xhr.readyState,
            statusText: xhr.statusText,
            withCredentials: xhr.withCredentials,
            responseType: xhr.responseType,
            responseText: xhr.responseType == 'text' ? xhr.responseText : '',
            responseXML: xhr.responseType == 'document' ? xhr.responseXML : '',
            responseURL: xhr.responseURL,
            timeout: xhr.timeout,
            headers: _this.getHeaders(xhr)
          };

          var response = _this.transformAfter(result);

          if (options.statusErrorPattern && (xhr.status + '').match(options.statusErrorPattern)) {
            var err = new Error('Request to "' + options.url + '" returns failure status code ' + xhr.status);
            err.response = response;
            return reject(err);
          }

          (cache || window.AKILI_SSR) && hash && _this.createCache(hash, result);
          resolve(response);
        };

        xhr.ontimeout = function () {
          reject(new Error('Request to "' + options.url + '" timed out'));
        };

        xhr.onerror = reject;
        xhr.send(options.body);
      });
    }

    /**
     * Get the headers of an XMLHttpRequest instance
     * 
     * @param {XMLHttpRequest}
     */

  }, {
    key: 'getCache',


    /**
     * Get the cache
     * 
     * @param {string} hash
     * @returns {object}
     */
    value: function getCache(hash) {
      return this.__cache[hash] || null;
    }

    /**
     * Create the cache
     * 
     * @param {string} hash
     * @param {object} result
     */

  }, {
    key: 'createCache',
    value: function createCache(hash, result) {
      this.__cache[hash] = { result: result, createdAt: new Date().getTime() };
    }

    /**
     * Remove the cache
     * 
     * @param {string} hash
     */

  }, {
    key: 'removeCache',
    value: function removeCache(hash) {
      delete this.__cache[hash];
    }

    /**
     * Create a hash for saving in the cache
     * 
     * @param {object} data
     * @returns {string}
     */

  }, {
    key: 'createCacheHash',
    value: function createCacheHash(data) {
      return _utils2.default.createHash(data);
    }

    /**
     * Convert the object to a query string
     *
     * @param {object} obj
     * @returns {string}
     */

  }, {
    key: 'paramsToQuery',
    value: function paramsToQuery(obj) {
      var sep = '&';
      var eq = '=';

      if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
        return '';
      }

      return Object.keys(obj).map(function (k) {
        var ks = encodeURIComponent(k);

        if (Array.isArray(obj[k])) {
          ks = encodeURIComponent(k);
          return obj[k].map(function (v, i) {
            return ks + ('[' + i + ']') + eq + encodeURIComponent(v);
          }).join(sep);
        } else if (obj[k] && _typeof(obj[k]) === 'object') {
          var opt = [];
          Object.keys(obj[k]).map(function (key) {
            return opt.push(ks + ('[' + key + ']') + eq + encodeURIComponent(obj[k][key]));
          });
          return opt.join(sep);
        } else {
          return ks + eq + encodeURIComponent(obj[k]);
        }
      }).join(sep);
    }

    /**
     * Convert the query string to an object
     *
     * @param {string} str
     * @returns {object}
     */

  }, {
    key: 'paramsFromQuery',
    value: function paramsFromQuery(str) {
      var query = {};
      var amps = str.split('&');

      for (var i = 0, l = amps.length; i < l; i++) {
        var eqs = amps[i].split('=');
        var key = decodeURIComponent(eqs[0]);
        var val = decodeURIComponent(eqs[1]);

        if (!key) {
          continue;
        }

        if (Array.isArray(query[key])) {
          query[key].push(val);
        } else if (query[key]) {
          query[key] = [query[key], val];
        } else {
          query[key] = val;
        }
      }

      return query;
    }

    /**
     * Create multipart form data from the object
     *
     * @param {object} obj
     * @param {FormData} [data]
     * @param {string} [namespace]
     * @returns {FormData}
     */

  }, {
    key: 'createFormData',
    value: function createFormData(obj) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var namespace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

      var fd = data || new FormData();

      for (var k in obj) {
        if (obj.hasOwnProperty(k) && obj[k]) {
          var key = namespace ? namespace + '[' + k + ']' : k;

          if (obj[k] instanceof Date) {
            fd.append(key, obj[k].toISOString());
          } else if (_utils2.default.isPlainObject(obj[k])) {
            this.createFormData(obj[k], fd, key);
          } else {
            fd.append(key, obj[k]);
          }
        }
      }

      return fd;
    }

    /**
     * Transform the data before the request
     *
     * @param {XMLHttpRequest} xhr
     * @param {object} options
     * @returns {object}
     */

  }, {
    key: 'transformBefore',
    value: function transformBefore(xhr, options) {
      return { xhr: xhr, options: options };
    }

    /**
     * Transform the data after the request
     *
     * @param {object} result
     * @returns {object}
     */

  }, {
    key: 'transformAfter',
    value: function transformAfter(result) {
      return _extends({}, result, {
        data: result.response
      });
    }

    /**
     *  Make a GET request
     *
     * @param {string} url
     * @param {object} options
     * @returns {Promise}
     */

  }, {
    key: 'get',
    value: function get(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      options.url = url;
      options.method = 'GET';
      return this.query(options);
    }

    /**
     * Makea a DELETE request
     *
     * @param {string} url
     * @param {object} options
     * @returns {Promise}
     */

  }, {
    key: 'delete',
    value: function _delete(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      options.url = url;
      options.method = 'DELETE';
      return this.query(options);
    }

    /**
     * Make a POST request
     *
     * @param {string} url
     * @param {object} options
     * @returns {Promise}
     */

  }, {
    key: 'post',
    value: function post(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      options.url = url;
      options.method = 'POST';
      return this.query(options);
    }

    /**
     * Make a PUT request
     *
     * @param {string} url
     * @param {object} options
     * @returns {Promise}
     */

  }, {
    key: 'put',
    value: function put(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      options.url = url;
      options.method = 'PUT';
      return this.query(options);
    }

    /**
     *  Make a PATCH request
     *
     * @param {string} url
     * @param {object} options
     * @returns {Promise}
     */

  }, {
    key: 'patch',
    value: function patch(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      options.url = url;
      options.method = 'PATCH';
      return this.query(options);
    }

    /**
     * Make a HEAD request
     *
     * @param {string} url
     * @param {object} options
     * @returns {Promise}
     */

  }, {
    key: 'head',
    value: function head(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      options.url = url;
      options.method = 'HEAD';
      return this.query(options);
    }
  }]);

  return Request;
}();

var request = new Request();

request.__instances = {};
request.__cache = {};

/**
 * Add a new instance
 *
 * @param {string} name
 * @param {Request} instance
 */
request.addInstance = function (name, instance) {
  this.__instances[name] = instance;
};

/**
 * Remove the instance
 *
 * @param {string} name
 */
request.removeInstance = function (name) {
  delete this.__instances[name];
};

Object.defineProperty(request, 'use', {
  get: function get() {
    return request.__instances;
  }
});

request.Request = Request;
exports.default = request;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(3);

var _component2 = _interopRequireDefault(_component);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Base component to work with text elements.
 * 
 * {@link https://akilijs.com/docs/components#docs_input}
 * {@link https://akilijs.com/docs/components#docs_textarea}
 * {@link https://akilijs.com/docs/components#docs_contenteditable}
 * 
 * @attr {string} value - actual value
 * @attr {boolean} focus - set the focus or not
 * @attr {number} debounce - debounce delay
 * @message {void} debounce - sent on the debounce {@link https://akilijs.com/docs/components#docs_input}
 */
var Text = function (_Component) {
  _inherits(Text, _Component);

  function Text() {
    var _ref;

    _classCallCheck(this, Text);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Text.__proto__ || Object.getPrototypeOf(Text)).call.apply(_ref, [this].concat(args)));

    _this.valueKey = 'value';
    _this.debounceInterval = 500;
    return _this;
  }

  _createClass(Text, [{
    key: 'compiled',
    value: function compiled() {
      var _this2 = this;

      if (this.el.hasAttribute('on-debounce')) {
        this.el.addEventListener('input', _utils2.default.debounce(function () {
          return _this2.attrs.onDebounce.trigger(undefined, { bubbles: true });
        }, this.debounceInterval));
      }

      this.attr('focus', this.setFocus);
      this.attr('value', this.setValue);
      this.attr('debounce', this.setDebounce);
    }
  }, {
    key: 'setDebounce',
    value: function setDebounce(interval) {
      this.debounceInterval = +interval;
    }
  }, {
    key: 'setFocus',
    value: function setFocus(value) {
      value ? this.setElementFocus() : this.setElementBlur();
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.el[this.valueKey] !== value && (this.el[this.valueKey] = value === 0 ? '0' : value || '');
    }
  }, {
    key: 'setElementFocus',
    value: function setElementFocus() {
      this.el.focus();
    }
  }, {
    key: 'setElementBlur',
    value: function setElementBlur() {
      this.el.blur();
    }
  }]);

  return Text;
}(_component2.default);

exports.default = Text;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loop = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(3);

var _component2 = _interopRequireDefault(_component);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component for loops.
 * 
 * {@link https://akilijs.com/docs/components#docs_loops}
 * 
 * @tag for
 * @selector for[in],ol[in],ul[in],thead[in],tbody[in],tfoot[in]
 * @attr {object|array} in - data to create the loop
 * @message {object|array} out - sent on the data change
 */
var For = function (_Component) {
  _inherits(For, _Component);

  _createClass(For, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('for', this);
      _akili2.default.component('ol', this);
      _akili2.default.component('ul', this);
      _akili2.default.component('thead', this);
      _akili2.default.component('tbody', this);
      _akili2.default.component('tfoot', this);
      _akili2.default.component('tr', this.Loop);
      _akili2.default.component('loop', this.Loop);
    }
  }]);

  function For() {
    var _ref;

    _classCallCheck(this, For);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = For.__proto__ || Object.getPrototypeOf(For)).call.apply(_ref, [this].concat(args)));

    _this.iterators = [];
    _this.iteratorEl = null;
    _this.reset();
    return _this;
  }

  _createClass(For, [{
    key: '__prepareAttributeIn',
    value: function __prepareAttributeIn(node, value) {
      if (node instanceof window.Attr && node.name == 'in') {
        return value;
      }

      return _get(For.prototype.__proto__ || Object.getPrototypeOf(For.prototype), '__prepareAttributeIn', this).apply(this, arguments);
    }
  }, {
    key: '__compareNodePropertyValue',
    value: function __compareNodePropertyValue(prop, value) {
      var node = prop.node;

      if (node instanceof window.Attr && node.name == 'in' && prop.value !== value) {
        return false;
      }

      return _get(For.prototype.__proto__ || Object.getPrototypeOf(For.prototype), '__compareNodePropertyValue', this).apply(this, arguments);
    }
  }, {
    key: 'created',
    value: function created() {
      this.createIterator();
    }
  }, {
    key: 'compiled',
    value: function compiled() {
      this.attr('in', this.draw);
    }
  }, {
    key: 'removed',
    value: function removed() {
      delete this.html;
      delete this.iterators;
      delete this.iteratorEl;
      delete this.__iterator;
      delete this.__value;
    }
  }, {
    key: 'createIterator',
    value: function createIterator() {
      var el = void 0;

      for (var i = 0, l = this.el.children.length; i < l; i++) {
        var child = this.el.children[i];

        if (child.getAttribute('component') == 'loop') {
          el = child;
          break;
        }

        el = child;
      }

      if (!el) {
        el = document.createElement('loop');
        el.innerHTML = this.el.innerHTML;
        this.el.innerHTML = '';
        this.el.appendChild(el);
      }

      var componentName = el.getAttribute('component');

      if (componentName != 'loop') {
        var component = _akili2.default.component(componentName || el.tagName);

        if (!component) {
          el.setAttribute('component', 'loop');
        } else if (!(component.prototype instanceof For)) {
          var mask = document.createElement('loop');
          mask.appendChild(el);
          el = mask;
        }
      }

      this.html = el.innerHTML;
      this.iteratorEl = this.createIteratorElement(el.outerHTML);
      el.remove();
    }
  }, {
    key: 'createIteratorElement',
    value: function createIteratorElement(html) {
      var el = document.createElement('template');
      el.innerHTML = html;
      return el.content.firstChild;
    }
  }, {
    key: 'loop',
    value: function loop(key, value, index) {
      this.__index = index;
      this.__key = key;
      this.__value = value;
      this.__hash = _utils2.default.createHash(value);

      if (this.iterators.length > index) {
        var iterator = this.iterators[index];
        iterator.setIndex(this.__index === iterator.index);
        iterator.setKey(this.__key === iterator.key);
        iterator.setValue(_utils2.default.compare(this.__hash, iterator.hash));
        this.__promises.push(_akili2.default.compile(iterator.el, {
          recompile: {
            checkChanges: true
          }
        }));
        return iterator;
      }

      var el = this.iteratorEl.cloneNode();
      el.innerHTML = this.html;
      this.el.appendChild(el);
      this.__promises.push(_akili2.default.compile(el));
      this.iterators.push(el.__akili);
      return el.__akili;
    }
  }, {
    key: 'draw',
    value: function draw(data) {
      var _this2 = this;

      if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) != 'object' || data === null) {
        if (_akili2.default.options.debug) {
          // eslint-disable-next-line no-console
          console.warn('"For" component "in" attribute value type must be an object/array');
        }

        data = [];
      }

      this.data = data;
      var index = 0;
      var children = [].slice.call(this.el.children);
      this.iterators.sort(function (a, b) {
        return children.indexOf(a.el) - children.indexOf(b.el);
      });
      this.__children.sort(function (a, b) {
        return children.indexOf(a) - children.indexOf(b);
      });
      var loop = function loop(key, value, index) {
        return _this2.loop(key, value, index).iterate(index);
      };

      if (Array.isArray(data)) {
        for (var l = data.length; index < l; index++) {
          loop(index, data[index], index);
        }
      } else {
        var keys = Object.keys(data);

        for (var _l = keys.length; index < _l; index++) {
          var key = keys[index];
          loop(key, data[key], index);
        }
      }

      for (var i = index, _l2 = this.iterators.length; i < _l2; i++) {
        var iterator = this.iterators[i];
        iterator.__remove();
        this.iterators.splice(i, 1);
        _l2--;
        i--;
      }

      return Promise.all(this.__promises).then(function () {
        _this2.reset();
        _this2.attrs.onOut.trigger(data, { bubbles: true });
      });
    }

    /**
     * Reset the initial state
     */

  }, {
    key: 'reset',
    value: function reset() {
      this.__iterator = null;
      this.__index = 0;
      this.__key = '';
      this.__value = null;
      this.__hash = '';
      this.__promises = [];
    }
  }]);

  return For;
}(_component2.default);

/**
 * Component for loops.
 * 
 * {@link https://akilijs.com/docs/components#docs_loops}
 * 
 * @tag loop
 * @selector loop,tr
 * @attr @see For
 * @scope {*} loopValue - data item's value of the current iteration 
 * @scope {string|number} loopKey - key of the iteration
 * @scope {number} loopIndex - index of the iteration
 */


For.matches = '[in]';
For.events = ['out'];
exports.default = For;

var Loop = exports.Loop = function (_For) {
  _inherits(Loop, _For);

  function Loop() {
    var _ref2;

    _classCallCheck(this, Loop);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var _this3 = _possibleConstructorReturn(this, (_ref2 = Loop.__proto__ || Object.getPrototypeOf(Loop)).call.apply(_ref2, [this].concat(args)));

    _this3.for = null;
    _this3.html = _this3.el.innerHTML;
    _this3.isFor = _this3.el.hasAttribute('in');

    if (!_this3.isFor && !(_this3.el.parentNode.__akili instanceof For)) {
      _this3.cancel();
    }
    return _this3;
  }

  _createClass(Loop, [{
    key: 'created',
    value: function created() {
      this.__parent.__akili.__iterator = this;
      this.for = this.__parent.__akili;
      this.setIndex(true);
      this.setKey(true);
      this.setValue(true);

      if (this.isFor) {
        return _get(Loop.prototype.__proto__ || Object.getPrototypeOf(Loop.prototype), 'created', this).apply(this, arguments);
      }
    }
  }, {
    key: 'compiled',
    value: function compiled() {
      if (this.isFor) {
        return _get(Loop.prototype.__proto__ || Object.getPrototypeOf(Loop.prototype), 'compiled', this).apply(this, arguments);
      }
    }
  }, {
    key: 'removed',
    value: function removed() {
      _get(Loop.prototype.__proto__ || Object.getPrototypeOf(Loop.prototype), 'removed', this).apply(this, arguments);
      delete this.for;
      delete this.value;
    }
  }, {
    key: 'setIndex',
    value: function setIndex(target) {
      this.index = this.for.__index;
      this.scope.__set('loopIndex', this.index, false, target);
    }
  }, {
    key: 'setKey',
    value: function setKey(target) {
      this.key = this.for.__key;
      this.scope.__set('loopKey', this.key, false, target);
    }
  }, {
    key: 'setValue',
    value: function setValue(target) {
      this.value = this.for.__value;
      this.scope.__set('loopValue', this.value, true, target);
      this.hash = this.for.__hash;
    }
  }, {
    key: 'iterate',
    value: function iterate() {}
  }]);

  return Loop;
}(For);

Loop.matches = '';
Loop.controlAttributes = true;


For.Loop = Loop;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Scope class.
 * 
 * {@link https://akilijs.com/docs/scope}
 *
 * All properties starting with __ are not monitored.
 * You can use them for internal manipulations.
 */
var Scope = function () {
  function Scope(name, el, component) {
    _classCallCheck(this, Scope);

    this.__name = name;
    this.__el = el;
    this.__component = component;
    el.setAttribute('scope', name);
  }

  /**
   * Set the scope value
   * 
   * @param {string|string[]} keys
   * @param {*} value
   * @param {boolean} [strict=false] - without object copying
   * @protected
   */


  _createClass(Scope, [{
    key: '__set',
    value: function __set(keys, value) {
      var _this = this;

      var strict = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var target = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (!Array.isArray(keys)) {
        keys = [keys];
      }

      _akili2.default.unisolate(function () {
        strict && (_this.__component.__disableProxyRedefining = true);
        _utils2.default.setPropertyByKeys(keys, target ? _this.__target : _this, function (last, val) {
          if (!last) {
            return val || {};
          }

          return value;
        });
        strict && (_this.__component.__disableProxyRedefining = false);
      });
    }

    /**
     * Remove the scope
     * 
     * @protected
     */

  }, {
    key: '__remove',
    value: function __remove() {
      delete this.__el;
      delete this.__component;
      delete this.__parent;
      _akili2.default.removeScope(this.__name);
    }
  }]);

  return Scope;
}();

exports.default = Scope;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class to work with events.
 * 
 * {@link https://akilijs.com/docs/events}
 */
var EventEmitter = function () {
  function EventEmitter(name, node, el, component) {
    _classCallCheck(this, EventEmitter);

    this.name = name;
    this.node = node;
    this.el = el;
    this.component = component;
  }

  /**
   * Trigger the event
   *
   * @param {*} data
   * @param {object} [options]
   * @param {boolean} [force]
   * @returns {Promise}
   */


  _createClass(EventEmitter, [{
    key: "trigger",
    value: function trigger(data) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (this.__removed) {
        return;
      }

      if (force || !this.inEvaluating()) {
        this.el.dispatchEvent(new CustomEvent(this.name, this.prepareOptions(_extends({ detail: data }, options))));
      }
    }

    /**
     * Dispatch the event
     *
     * @param {Event} _Event - class of the event
     * @param {object} [options]
     * @param {boolean} [force]
     * @returns {Promise}
     */

  }, {
    key: "dispatch",
    value: function dispatch(_Event) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (this.__removed) {
        return;
      }

      if (force || !this.inEvaluating()) {
        this.el.dispatchEvent(new _Event(this.name, this.prepareOptions(options)));
      }
    }

    /**
     * Prepere the event options
     * 
     * @param {object} [options] 
     */

  }, {
    key: "prepareOptions",
    value: function prepareOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      options = _extends({ bubbles: true }, options);
      this.node.__component.__prepareAttributeOut(this.node, options.detail);
      return options;
    }

    /**
     * Check the event callback doesn't run recursively
     *
     * @returns {boolean}
     */

  }, {
    key: "inEvaluating",
    value: function inEvaluating() {
      var data = this.component.__evaluatingEvent;

      if (!data) {
        return false;
      }

      return data.el === this.el && data.event.type === this.name && data.component === this.component;
    }

    /**
     * Bind the function
     *
     * @param {function} fn
     */

  }, {
    key: "bind",
    value: function bind(fn) {
      this.el.addEventListener(this.name, this.fn = fn);
    }

    /**
     * Unbind the function
     */

  }, {
    key: "unbind",
    value: function unbind() {
      this.fn && this.el.removeEventListener(this.name, this.fn);
    }

    /**
     * Remove the emitter
     */

  }, {
    key: "remove",
    value: function remove() {
      this.unbind();
      delete this.name;
      delete this.name;
      this.node = null;
      this.component = null;
      this.el = null;
      this.__removed = true;
    }
  }]);

  return EventEmitter;
}();

exports.default = EventEmitter;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Store allows you to save and share data.
 * 
 * {@link https://akilijs.com/docs/store}
 */
var store = new Proxy({}, {
  get: function get(target, key) {
    if (key == "__target") {
      return target;
    }

    return target[key];
  },
  set: function set(target, key, value) {
    if (_utils2.default.compare(target[key], value)) {
      return true;
    }

    value = _utils2.default.copy(value, { plain: true });
    target[key] = value;
    _akili2.default.root && _akili2.default.root.__storeTriggerByName(key, value);
    return true;
  },
  deleteProperty: function deleteProperty(target, key) {
    _akili2.default.root && _akili2.default.root.__storeTriggerByName(key, undefined);
    delete target[key];
    return true;
  }
});

exports.default = store;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var obj = {};

/**
 * Globals is for using the custom variables in html
 * 
 * {@link https://akilijs.com/docs/scope#docs_globals}
 */
var globals = new Proxy(obj, {
  get: function get(target, key) {
    if (key == '__target') {
      return obj;
    }

    return target[key];
  },
  set: function set(target, key, value) {
    target[key] = _akili2.default.wrap(value, { tag: key });
    return true;
  },
  deleteProperty: function deleteProperty(target, key) {
    _akili2.default.removeTag(key);
    delete target[key];
    return true;
  }
});

exports.default = globals;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(3);

var _component2 = _interopRequireDefault(_component);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

var _request = __webpack_require__(4);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component to work with router templates.
 * 
 * {@link https://akilijs.com/docs/routing#docs_templates}
 * 
 * @tag route
 */
var Route = function (_Component) {
  _inherits(Route, _Component);

  _createClass(Route, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('route', this);
    }
  }]);

  function Route() {
    var _ref;

    _classCallCheck(this, Route);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Route.__proto__ || Object.getPrototypeOf(Route)).call.apply(_ref, [this].concat(args)));

    _this.el.innerHTML = '';
    return _this;
  }

  /**
   * @param {Transition} transition
   * @param {boolean} load
   * @returns {Promise}
   */


  _createClass(Route, [{
    key: 'setTransition',
    value: function setTransition(transition) {
      var _this2 = this;

      var load = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var state = transition.path.state;

      var getParentScopeTransition = function getParentScopeTransition(path) {
        if (path.parent) {
          if (path.parent.component) {
            return path.parent.component.__scope.__transition.path;
          }

          return getParentScopeTransition(path.parent);
        }

        return null;
      };

      var compile = function compile(html) {
        _this2.empty();
        var name = 'component';

        if (state.component) {
          var exists = false;

          for (var key in _akili2.default.__components) {
            var component = _akili2.default.__components[key];

            if (component === state.component) {
              name = key;
              exists = true;
              break;
            }
          }

          if (!exists) {
            throw new Error('Router state "' + state.name + '" has no defined component');
          }
        }

        _this2.el.innerHTML = '<' + name + '>' + html + '</' + name + '>';
        return _akili2.default.compile(_this2.el, { recompile: true });
      };

      this.__scope.__transition = {
        parent: getParentScopeTransition(transition.path),
        state: transition.path.state,
        data: transition.path.data,
        url: transition.path.url,
        params: transition.path.params,
        query: transition.path.query,
        hash: transition.path.hash
      };

      if (!load) {
        return _akili2.default.compile(this.el, { recompile: { checkChanges: true } });
      }

      return Promise.resolve().then(function () {
        if (state.template) {
          return state.template;
        }

        if (state.templateUrl) {
          return _request2.default.get(state.templateUrl).then(function (res) {
            return res.data;
          });
        }
      }).then(function (html) {
        return compile(html);
      });
    }
  }]);

  return Route;
}(_component2.default);

exports.default = Route;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Transition = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _request = __webpack_require__(4);

var _request2 = _interopRequireDefault(_request);

var _route = __webpack_require__(11);

var _route2 = _interopRequireDefault(_route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Transition class.
 * The instance of this class includes the last actual router transition information.
 * 
 * {@link https://akilijs.com/docs/routing#docs_transition}
 */
var Transition = exports.Transition = function () {
  function Transition(url) {
    var previous = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, Transition);

    this.url = url;
    this.previous = previous;
    this.path = null;
    this.routes = [];
    this.states = {};
    this.__cancelled = false;
    this.__finised = false;
  }

  /**
   * Redirect to another state
   * 
   * @see router.state
   */


  _createClass(Transition, [{
    key: 'redirect',
    value: function redirect(state) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var hash = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

      options = _extends({}, router.transition.path.options, options);
      this.cancel();
      return router.state.call(router, state, params, query, hash, options);
    }

    /**
     * Reload the current state
     * 
     * @see Transition.prototype.redirect
     */

  }, {
    key: 'reload',
    value: function reload() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var hash = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      params = _extends({}, this.path.params, params);
      query = _extends({}, this.path.query, query);
      hash = hash === undefined ? this.path.hash : hash;
      return this.redirect(this.path.state.name, params, query, hash, options);
    }

    /**
     * Set the current path
     * 
     * @param {object} path 
     */

  }, {
    key: 'setPath',
    value: function setPath(path) {
      path.parent = this.path || null;
      this.path = _extends({ params: {}, query: {} }, path);
      this.routes.push(this.path);
      this.states[this.path.state.name] = this.path;
    }

    /**
     * Get a route by the state
     *  
     * @param {*} state 
     */

  }, {
    key: 'getRoute',
    value: function getRoute(state) {
      for (var i = 0, l = this.routes.length; i < l; i++) {
        var route = this.routes[i];

        if (route.state === state) {
          return route;
        }
      }

      return null;
    }

    /**
     * Check if it has the state
     * 
     * @param {object} state 
     */

  }, {
    key: 'hasState',
    value: function hasState(state) {
      return !!this.states[state.name];
    }

    /**
     * Check the route is changed
     * 
     * @param {object} route
     */

  }, {
    key: 'isRouteChanged',
    value: function isRouteChanged(route) {
      if (!this.previous) {
        return true;
      }

      var state = route.state;

      if (!this.previous.hasState(state)) {
        return true;
      }

      var paramKeys = [];
      state.fullPattern.replace(router.__paramRegex, function (m, f, v) {
        return paramKeys.push(v);
      });

      for (var key in state.params) {
        if (paramKeys.indexOf(key) == -1) {
          paramKeys.push(key);
        }
      }

      var queryKeys = Object.keys(state.query);
      var watchHash = state.hash !== undefined;
      var prevRoute = this.previous.getRoute(state);

      var prev = {
        params: _utils2.default.includeKeys(prevRoute.params, paramKeys),
        query: _utils2.default.includeKeys(prevRoute.query, queryKeys)
      };

      var current = {
        params: _utils2.default.includeKeys(route.params, paramKeys),
        query: _utils2.default.includeKeys(route.query, queryKeys)
      };

      if (watchHash) {
        prev.hash = prevRoute.hash;
        current.hash = route.hash;
      }

      return !_utils2.default.compare(prev, current);
    }

    /**
     * Cancel the current transition
     */

  }, {
    key: 'cancel',
    value: function cancel() {
      this.__cancelled = true;
      this.finish();
    }

    /**
     * Finish the transition
     */

  }, {
    key: 'finish',
    value: function finish() {
      this.__finised = true;
    }
  }]);

  return Transition;
}();

/**
 * Akili router
 * 
 * {@link https://akilijs.com/docs/routing}
 */


var router = {};

router.baseUrl = "/";
router.states = [];
router.hashMode = true;
router.__redirects = 0;
router.__init = false;
router.__paramRegex = /(\/?:([\w\d-]+))/g;
router.__routeSelector = function (c) {
  return c instanceof _route2.default;
};

/**
 * Add a new state
 *
 * @param {string} name - state name. To set parents you can use dot, e.g. 'app.article.edit'
 * @param {string} pattern - url pattern like 'app/article/:id'
 * @param {object} [options]
 * @returns {router}
 */
router.add = function (name, pattern) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) == 'object') {
    options = name;
    pattern = options.pattern;
    name = options.state;
    delete options.pattern;
    delete options.state;
  }

  if (!name) {
    throw new Error('Router state must have a name');
  }

  var defaultOptions = {
    template: '',
    templateUrl: '',
    abstract: false,
    component: null,
    params: {},
    query: {},
    handler: function handler() {}
  };

  if (_akili2.default.options.debug && options.component && (options.template || options.templateUrl)) {
    // eslint-disable-next-line no-console
    console.warn('Router state "' + name + '" must only have a component or template option');
  }

  if (!options.template && !options.templateUrl && !options.component) {
    options.abstract = true;
  }

  if (this.has(name)) {
    throw new Error('Router state "' + name + '" is already exists');
  }

  this.setState(name, pattern, _extends({}, defaultOptions, options));
  return this;
};

/**
 * Remove the state
 *
 * @param {string} name
 */
router.remove = function (name) {
  for (var i = 0, l = this.states.length; i < l; i++) {
    if (this.states[i].name == name) {
      this.states.splice(i, 1);

      return;
    }
  }
};

/**
 * Check the state exists
 *
 * @param {string} name
 * @returns {boolean}
 */
router.has = function (name) {
  for (var i = 0, l = this.states.length; i < l; i++) {
    if (this.states[i].name == name) {
      return true;
    }
  }

  return false;
};

/**
 * Change the state
 *
 * @param {string} state
 * @param {object} [params] - params for state {id: 1} => '/app/:id' => '/app/1'
 * @param {object} [query] - query {x: 1} => '/app/?x=1'
 * @param {string} [hash]
 * @param {object} [options]
 */
router.state = function (state) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var _this = this;

  var hash = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  (typeof state === 'undefined' ? 'undefined' : _typeof(state)) !== 'object' && (state = this.getState(state));

  if (!state) {
    throw new Error('Not found route state with name ' + state);
  }

  options = _extends({}, options);
  options.manual = true;

  var _prepareStateArgs = this.prepareStateArgs(state, params, query, hash, options, false);

  params = _prepareStateArgs.params;
  query = _prepareStateArgs.query;
  hash = _prepareStateArgs.hash;
  options = _prepareStateArgs.options;

  var url = this.createStateUrl(state, params, query, hash, options);
  this.isolate(function () {
    return _this.setUrl(url);
  });
  return this.changeState(options);
};

/**
 * Go back
 */
router.back = function () {
  return window.history.back.apply(window.history, arguments);
};

/**
 * Go to some position
 */
router.go = function () {
  return window.history.go.apply(window.history, arguments);
};

/**
 * Go forward
 */
router.forward = function () {
  return window.history.forward.apply(window.history, arguments);
};

/**
 * Change the state by the url
 *
 * @param {string} url
 * @param {object} [options]
 */
router.location = function (url) {
  var _this2 = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  options = _extends({}, options);
  options.manual = true;
  this.isolate(function () {
    return _this2.setUrl(url);
  });
  return this.changeState(options);
};

/**
 * Initialize the router. 
 * Must be called before Akili.init()
 *
 * @param {string} [defaultUrl]
 * @param {boolean} [hashMode=true]
 */
router.init = function () {
  var _this3 = this;

  var defaultUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var hashMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var oldPushState = window.history.pushState;

  window.history.pushState = function () {
    var res = oldPushState.apply(this, arguments);
    // eslint-disable-next-line no-console
    router.changeState().catch(function (err) {
      return console.error(err);
    });
    return res;
  };

  this.__onStateChangeHandler = function () {
    // eslint-disable-next-line no-console
    _this3.changeState().catch(function (err) {
      return console.error(err);
    });
  };

  this.defaultUrl = defaultUrl;
  this.hashMode = hashMode;

  this.states.sort(function (a, b) {
    a = a.name.split('.').length;
    b = b.name.split('.').length;
    return a - b;
  });

  for (var i = 0, l = this.states.length; i < l; i++) {
    this.initState(this.states[i]);
  }

  if (!this.states.length && _akili2.default.options.debug) {
    // eslint-disable-next-line no-console
    console.warn('You didn\'t add any routes to the router');
  }

  window.addEventListener('popstate', this.__onStateChangeHandler);
  this.__init = true;
};

/**
 * Initialize the state 
 * 
 * @param {object} state 
 */
router.initState = function (state) {
  var parents = [];
  state.children = [];
  parents = state.name.split('.');
  parents.pop();
  state.level = state.abstract ? null : parents.length;

  if (parents.length) {
    var parentName = parents.join('.');
    var parent = this.getState(parentName);

    if (!parent) {
      throw new Error('Not found parent route state "' + parentName + '" for "' + state.name + '"');
    }

    if (state.level !== null && parent.abstract) {
      state.level--;
    }

    state.fullPattern = this.splitSlashes(parent.fullPattern + '/' + state.pattern);
    parent.children.push(state);
  } else {
    state.fullPattern = state.pattern;
  }
};

/**
 * Get the state by the name
 *
 * @param {string} name
 * @returns {object|null}
 */
router.getState = function (name) {
  for (var i = 0, l = this.states.length; i < l; i++) {
    var state = this.states[i];

    if (state.name == name) {
      return state;
    }
  }

  return null;
};

/**
 * Set the state
 *
 * @param {string} name
 * @param {string} pattern
 * @param {object} options
 */
router.setState = function (name, pattern) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var state = _extends({}, options, { name: name, pattern: pattern });
  this.states.push(state);
  this.__init && this.initState(state);
  return state;
};

/**
 * Remove the state by the name
 *
 * @param {string} name
 */
router.removeState = function (name) {
  for (var i = 0, l = this.states.length; i < l; i++) {
    var state = this.states[i];

    if (state.name == name) {
      this.states.splice(i, 1);

      return;
    }
  }
};

/**
 * Set the url
 *
 * @param {string} url
 */
router.setUrl = function (url) {
  this.hashMode ? this.setHashUrl(url) : this.setHistoryUrl(url);
};

/**
 * Set the url using the history
 *
 * @param url
 */
router.setHistoryUrl = function (url) {
  window.history.pushState(undefined, undefined, url);
};

/**
 * Set the url using the hash
 *
 * @param url
 */
router.setHashUrl = function (url) {
  window.location.hash = '#' + (url || '/');
};

/**
 * Replace the url
 *
 * @param {string} url
 */
router.replaceUrl = function (url) {
  this.hashMode ? this.replaceHashUrl(url) : this.replaceHistoryUrl(url);
};

/**
 * Replace the url using the history
 *
 * @param url
 */
router.replaceHistoryUrl = function (url) {
  window.history.replaceState(undefined, undefined, url);
};

/**
 * Replace the url using the hash
 *
 * @param url
 */
router.replaceHashUrl = function (url) {
  window.history.replaceState(undefined, undefined, '#' + (url || '/'));
};

/**
 * Get the url
 *
 * @returns {string}
 */
router.getUrl = function () {
  return this.hashMode ? this.getHashUrl() : this.getHistoryUrl();
};

/**
 * Get the url using the history
 *
 * @returns {string}
 */
router.getHistoryUrl = function () {
  return window.location.pathname + window.location.search + window.location.hash;
};

/**
 * Get the url using the hash
 *
 * @returns {string}
 */
router.getHashUrl = function () {
  return window.location.hash.replace(/^#/, '');
};

/**
 * Get the query params
 *
 * @returns {object}
 */
router.getUrlQuery = function () {
  return this.hashMode ? this.getHashUrlQuery() : this.getHistoryUrlQuery();
};

/**
 * Get the query params using the history
 *
 * @returns {object}
 */
router.getHistoryUrlQuery = function () {
  return _request2.default.paramsFromQuery(window.location.search.replace(/^\?/, ''));
};

/**
 * Get the query params using the hash
 *
 * @returns {object}
 */
router.getHashUrlQuery = function () {
  return _request2.default.paramsFromQuery(window.location.hash.split('?')[1] || '');
};

/**
 * Create the url
 *
 * @param {string|Object} state
 * @param {object} [params]
 * @param {object} [query]
 * @param {string} [hash]
 * @param {object} [options]
 * @param {boolean} [prepare]
 */
router.createStateUrl = function (state) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var hash = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var prepare = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;

  (typeof state === 'undefined' ? 'undefined' : _typeof(state)) !== 'object' && (state = this.getState(state));
  options = _extends({}, options);

  if (prepare) {
    var _prepareStateArgs2 = this.prepareStateArgs(state, params, query, hash, options);

    params = _prepareStateArgs2.params;
    query = _prepareStateArgs2.query;
    hash = _prepareStateArgs2.hash;
    options = _prepareStateArgs2.options;
  }

  var url = state.fullPattern.replace(this.__paramRegex, function (m, f, v) {
    return '/' + (params[v] || '');
  });
  url = url.replace(/^\^/, '');
  url = this.splitSlashes(url);

  if (Object.keys(query).length) {
    url += '?' + _request2.default.paramsToQuery(query);
  }

  if (!this.hashMode && hash) {
    url += '#' + hash.replace('#', '');
  }

  return url;
};

/**
 * Prepare the state arguments
 * 
 * @param {string|Object} state
 * @param {object} [params]
 * @param {object} [query]
 * @param {string} [hash]
 * @param {object} [options]
 */
router.prepareStateArgs = function (state) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var hash = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var args = { params: params, query: query, hash: hash, options: options };

  for (var i = 0; i < 27; i++) {
    var paramsTemp = this.prepareStateParams(state, params, args);
    var queryTemp = this.prepareStateQuery(state, query, args);
    var hashTemp = this.prepareStateHash(state, hash, args);

    if (hashTemp === null) {
      options.emptyHash = null;
    } else if (hashTemp === '') {
      options.emptyHash = '';
    }

    var newArgs = { params: paramsTemp, query: queryTemp, hash: hashTemp, options: options };

    if (_utils2.default.compare(newArgs, args)) {
      break;
    }

    args = newArgs;
  }

  return args;
};

/**
 * Prepare the state params
 * 
 * @param {string|Object} state
 * @param {object} params
 * @param {object} [args]
 */
router.prepareStateParams = function (state, params, args) {
  (typeof state === 'undefined' ? 'undefined' : _typeof(state)) !== 'object' && (state = this.getState(state));
  return this.createStateArgs(params, state.params, args);
};

/**
 * Prepare the state query
 * 
 * @param {string|Object} state
 * @param {object} query
 * @param {object} [args]
 */
router.prepareStateQuery = function (state, query, args) {
  (typeof state === 'undefined' ? 'undefined' : _typeof(state)) !== 'object' && (state = this.getState(state));
  return this.createStateArgs(query, state.query, args);
};

/**
 * Create the state arguments
 * 
 * @param {object[]} list
 * @param {object} [args]
 */
router.createStateArgs = function (current, defaults) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { params: {}, query: {} };

  var all = Object.assign({}, current);

  for (var key in defaults) {
    var val = defaults[key];

    if (all[key] === null) {
      continue;
    }

    if (typeof val == 'function') {
      all[key] = val(args);
    }

    if (all[key] === undefined) {
      all[key] = val;
    }
  }

  for (var _key in all) {
    if (all[_key] === null) {
      delete all[_key];
    }
  }

  return all;
};

/**
 * Prepare the state hash
 * 
 * @param {string|Object} state
 * @param {string} hash
 * @param {object} [args]
 */
router.prepareStateHash = function (state, hash, args) {
  if (hash === null) {
    return hash;
  }

  (typeof state === 'undefined' ? 'undefined' : _typeof(state)) !== 'object' && (state = this.getState(state));

  if (typeof state.hash == 'function') {
    return state.hash(args);
  }

  if (hash === undefined) {
    return state.hash;
  }

  return hash;
};

/**
 * Remove all unnecessary slashes from the url
 *
 * @param {string} url
 * @returns {string}
 */
router.splitSlashes = function (url) {
  return url.replace(/[/]+/g, '/');
};

/**
 * Get the pattern info
 *
 * @param {string|Object} state
 * @param {string} url
 * @returns {object}
 */
router.getPatternContent = function (state, url) {
  (typeof state === 'undefined' ? 'undefined' : _typeof(state)) !== 'object' && (state = this.getState(state));
  var keys = [];
  var params = {};

  url = url.split('?')[0];
  url = url.split('#')[0];

  var urlPattern = state.fullPattern.replace(this.__paramRegex, function (m, f, v) {
    keys.push(v);
    return '/?([^/]*)';
  });

  urlPattern = urlPattern.replace(/([^^/]+)[/]+$/, '$1');
  var regex = new RegExp(urlPattern, 'g');
  var isIncluded = url.match(regex);

  if (!isIncluded) {
    return null;
  }

  url.replace(regex, function (m) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    args = args.slice(0, args.length - 2);

    for (var i = 0, l = args.length; i < l; i++) {
      var v = args[i];
      v && (params[keys[i]] = v);
    }
  });

  return { params: params };
};

/**
 * Check the state is active
 *
 * @param {string|Object} state
 * @param {boolean} includes
 * @returns {boolean}
 */
router.isActiveState = function (state) {
  var includes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  (typeof state === 'undefined' ? 'undefined' : _typeof(state)) !== 'object' && (state = this.getState(state));
  var url = router.transition && !router.transition.__finished ? router.transition.url : this.getUrl();
  url = this.splitSlashes('/' + url.split('?')[0] + '/');
  var urlPattern = state.fullPattern.replace(this.__paramRegex, '/?([^/]*)');
  urlPattern = urlPattern.replace(/^\^/, '').replace(/\$$/, '');
  var str = includes ? urlPattern : this.splitSlashes('^/' + urlPattern + '/$');
  var regex = new RegExp(str);
  return regex.test(url);
};

/**
 * Check the current url includes the state
 *
 * @param {string|Object} state
 * @returns {boolean}
 */
router.inActiveState = function (state) {
  return router.isActiveState(state, true);
};

/**
 * Get the route component by the level
 *
 * @param {number} level
 */
router.getRoute = function (level) {
  var _this4 = this;

  var i = 0;

  var find = function find(el) {
    var route = el.child(_this4.__routeSelector);

    if (!route) {
      return null;
    }

    if (i == level) {
      return route;
    }

    i++;
    return find(route);
  };

  return find(_akili2.default.root);
};

/**
 * Get the patterns array info
 *
 * @param {array} arr
 * @param {string} url
 * @returns {object|null}
 */
router.getArrayPatternContent = function (arr, url) {
  for (var i = 0, l = arr.length; i < l; i++) {
    var state = arr[i];
    var content = this.getPatternContent(state, url);

    if (!content) {
      continue;
    }

    return _extends({ state: state }, content);
  }

  return null;
};

/**
 * Get the states by the level
 *
 * @param {number} level
 * @returns {Array}
 */
router.getStatesByLevel = function (level) {
  var states = [];

  for (var i = 0, l = this.states.length; i < l; i++) {
    var state = this.states[i];

    if (state.level < level) {
      continue;
    } else if (state.level > level) {
      break;
    }

    states.push(state);
  }

  return states;
};

/**
 * Reload the state
 * 
 * @see Transition.reload
 */
router.reload = function () {
  var _transition;

  if (!this.transition) {
    throw new Error('Not found an active transition to reload the state');
  }

  return (_transition = this.transition).reload.apply(_transition, arguments);
};

/**
 * Isolate the function
 *
 * @param {function} fn
 * @returns {*}
 */
router.isolate = function (fn) {
  this.__isolated = true;
  var res = fn();
  this.__isolated = false;
  return res;
};

/**
 * Change the state
 * 
 * @param {object} [options]
 */
router.changeState = function () {
  var _this5 = this;

  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (this.__isolated) {
    return Promise.resolve();
  }

  var url = this.getUrl();
  var params = {};
  var query = this.getUrlQuery();
  var hash = this.hashMode ? '' : window.location.hash.replace('#', '');
  var prevTransition = router.transition || null;
  var transition = router.transition = new Transition(url, prevTransition);
  var level = 0;

  window.dispatchEvent(new CustomEvent('state-change', { detail: transition }));

  var next = function next(states) {
    if (!states.length) {
      return Promise.resolve();
    }

    var content = _this5.getArrayPatternContent(states, url);

    if (!content) {
      return Promise.resolve();
    }

    var state = content.state;
    transition.setPath({ state: state, component: route });
    params = _extends({}, params, content.params);
    hash = hash || options.emptyHash;

    var _prepareStateArgs3 = _this5.prepareStateArgs(state, params, query, hash, options);

    params = _prepareStateArgs3.params;
    query = _prepareStateArgs3.query;
    hash = _prepareStateArgs3.hash;
    options = _prepareStateArgs3.options;

    hash = hash || '';
    var realUrl = _this5.createStateUrl(state, params, query, hash, options, false);
    _this5.isolate(function () {
      return _this5.replaceUrl(realUrl);
    });
    var route = state.abstract ? null : _this5.getRoute(level);

    if (!route && !state.abstract) {
      throw new Error('Not found route component for state "' + state.name + '"');
    }

    transition.path.params = params;
    transition.path.query = query;
    transition.path.hash = hash;
    transition.path.url = realUrl;
    transition.path.options = options;
    !state.abstract && level++;
    var isDifferent = true;

    if (realUrl != url) {
      isDifferent = transition.isRouteChanged(transition.path);
    }

    var load = isDifferent && options.reload !== false;

    return Promise.resolve(load ? state.handler(transition) : transition.path.data).then(function (data) {
      transition.path.data = data;
      state.title && (document.title = typeof state.title == 'function' ? state.title(transition) : state.title);

      if (transition.__cancelled) {
        return;
      }

      if (state.abstract) {
        return;
      }

      var prevRoute = transition.previous && transition.previous.getRoute(state);
      prevRoute && !prevRoute.loaded && (load = true);
      return route.setTransition(transition, load).then(function () {
        return transition.path.loaded = true;
      });
    }).then(function () {
      return next(state.children);
    });
  };

  return next(this.getStatesByLevel(0)).then(function () {
    if (!transition.routes.length) {
      if (_this5.__redirects) {
        throw new Error('Wrong router default url "' + _this5.defaultUrl + '"');
      }

      if (_this5.defaultUrl) {
        if (_this5.defaultUrl == _this5.getUrl()) {
          throw new Error('Not found any routes');
        }

        _this5.isolate(function () {
          return _this5.replaceUrl(_this5.defaultUrl);
        });
        _this5.__redirects++;
        return _this5.changeState();
      }

      if (_akili2.default.options.debug) {
        // eslint-disable-next-line no-console
        console.warn('Not found a default route. You can pass it in "router.init(defaultUrl)" function');
      }
    }

    if (!options.saveScrollPosition && (!transition.path || !transition.path.hash)) {
      window.scrollTo(0, 0);
    }

    _this5.__redirects = 0;
    transition.finish();
    window.dispatchEvent(new CustomEvent('state-changed', { detail: transition }));
    return transition;
  });
};

/**
 * Deinitialize the router
 */
router.deinit = function () {
  window.removeEventListener('popstate', this.__onStateChangeHandler);
  this.__init = false;
};

router.Transition = Transition;
exports.default = router;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Else = exports.ElseIf = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(3);

var _component2 = _interopRequireDefault(_component);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component for conditional statements.
 * 
 * {@link https://akilijs.com/docs/components#docs_conditional_statements}
 * 
 * @tag if
 * @selector if[is]
 * @attr {boolean} is - show the element content or not
 * @attr {boolean} recreate - delete the content and recreate or just show/hide 
 */
var If = function (_Component) {
  _inherits(If, _Component);

  _createClass(If, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('if', this);
      _akili2.default.component('else-if', this.ElseIf);
      _akili2.default.component('else', this.Else);
    }
  }]);

  function If() {
    var _ref;

    _classCallCheck(this, If);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = If.__proto__ || Object.getPrototypeOf(If)).call.apply(_ref, [this].concat(args)));

    _this.html = _this.el.innerHTML;
    _this.el.innerHTML = '';
    _this.state = false;
    _this.active = false;
    _this.recreate = false;
    _this.isCompiled = false;
    _this.display = getComputedStyle(_this.el).display;
    return _this;
  }

  _createClass(If, [{
    key: 'compiled',
    value: function compiled() {
      this.attr('recreate', this.setRecreation);
      return this.attr('is', this.setIs);
    }
  }, {
    key: 'setIs',
    value: function setIs(val) {
      this.state = !!val;
      return this.setState();
    }
  }, {
    key: 'setActivity',
    value: function setActivity(active) {
      this.active = active;
    }
  }, {
    key: 'setRecreation',
    value: function setRecreation(recreate) {
      this.recreate = recreate;
    }
  }, {
    key: 'setState',
    value: function setState() {
      var res = this.compilation();
      var next = this.el.nextElementSibling;
      var result = void 0;

      if (!next || !next.matches('else-if,else')) {
        return;
      }

      next.__akili.setActivity(this.active || this.state);
      next.__akili.setRecreation(this.recreate);
      result = next.__akili.setState();
      return Promise.resolve(res).then(function () {
        return result;
      });
    }
  }, {
    key: 'compilation',
    value: function compilation() {
      var res = Promise.resolve();

      if (this.state && !this.active) {
        if (this.recreate || !this.isCompiled) {
          res = this.compile();
        }

        this.el.style.setProperty('display', this.display, 'important');
      } else {
        if (this.recreate) {
          this.empty();
        } else if (!this.isCompiled) {
          res = this.compile();
        }

        this.el.style.setProperty('display', 'none', 'important');
      }

      return res;
    }
  }, {
    key: 'compile',
    value: function compile() {
      var res = void 0;
      this.empty();
      this.el.innerHTML = this.html;
      res = _akili2.default.compile(this.el, { recompile: true });
      this.isCompiled = true;
      return res;
    }
  }]);

  return If;
}(_component2.default);

/**
 * Component for conditional statements.
 * 
 * {@link https://akilijs.com/docs/components#docs_conditional_statements}
 * 
 * @tag else-if
 * @selector else-if[is]
 * @attr {boolean} is @see If
 */


If.transparent = true;
If.matches = '[is]';
If.booleanAttributes = ['recreate'];
exports.default = If;

var ElseIf = exports.ElseIf = function (_If) {
  _inherits(ElseIf, _If);

  function ElseIf() {
    var _ref2;

    _classCallCheck(this, ElseIf);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var _this2 = _possibleConstructorReturn(this, (_ref2 = ElseIf.__proto__ || Object.getPrototypeOf(ElseIf)).call.apply(_ref2, [this].concat(args)));

    _this2.active = true;
    return _this2;
  }

  return ElseIf;
}(If);

/**
 * Component for conditional statements.
 * 
 * {@link https://akilijs.com/docs/components#docs_conditional_statements}
 * 
 * @tag else
 */


var Else = exports.Else = function (_ElseIf) {
  _inherits(Else, _ElseIf);

  function Else() {
    var _ref3;

    _classCallCheck(this, Else);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    var _this3 = _possibleConstructorReturn(this, (_ref3 = Else.__proto__ || Object.getPrototypeOf(Else)).call.apply(_ref3, [this].concat(args)));

    _this3.el.setAttribute('is', 'true');
    return _this3;
  }

  return Else;
}(ElseIf);

Else.matches = '';


If.ElseIf = ElseIf;
If.Else = Else;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Option = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _for = __webpack_require__(6);

var _for2 = _interopRequireDefault(_for);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component to work with select.
 * 
 * {@link https://akilijs.com/docs/components#docs_select}
 * 
 * @tag select  
 * @attr {string} value - actual value
 * @attr [in] @see For
 */
var Select = function (_For) {
  _inherits(Select, _For);

  _createClass(Select, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('select', this);
      _akili2.default.component('option', this.Option);
    }
  }]);

  function Select() {
    var _ref;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(args)));

    _this.iteratorTagName = 'option';
    _this.isMultiple = false;
    return _this;
  }

  _createClass(Select, [{
    key: 'compiled',
    value: function compiled() {
      var _this2 = this;

      this.el.addEventListener('change', function () {
        return _this2.el.content = _this2.getContent();
      });
      var res = _get(Select.prototype.__proto__ || Object.getPrototypeOf(Select.prototype), 'compiled', this).apply(this, arguments);
      this.attr('multiple', this.setMultiple);
      this.attr('content', this.setContent);
      this.attr('in', this.drawSelect);
      return res;
    }
  }, {
    key: 'setMultiple',
    value: function setMultiple(value) {
      this.isMultiple = value;
      this.changeValue(this.formatValue(_utils2.default.copy(this.el.content)));
    }
  }, {
    key: 'setContent',
    value: function setContent(value) {
      this.changeValue(this.formatValue(value));
    }
  }, {
    key: 'drawSelect',
    value: function drawSelect() {
      var selected = [];

      for (var i = 0, l = this.el.options.length; i < l; i++) {
        var option = this.el.options[i].__akili;
        var selection = option.attrs.selected;

        if (selection) {
          selected.push(option.el.value);
        }

        option.el.selected = selection;
      }

      if (!selected.length) {
        this.redefine();
      } else {
        this.changeValue(this.formatValue(selected));
      }
    }
  }, {
    key: 'createIteratorElement',
    value: function createIteratorElement() {
      var el = _get(Select.prototype.__proto__ || Object.getPrototypeOf(Select.prototype), 'createIteratorElement', this).apply(this, arguments);

      if (!el.hasAttribute('value')) {
        el.setAttribute('value', this.html.trim());
      }

      return el;
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      if (!this.isMultiple) {
        return this.el.value;
      }

      var content = [];

      for (var i = 0, l = this.el.options.length; i < l; i++) {
        var option = this.el.options[i];

        if (option.selected) {
          content.push(option.value);
        }
      }

      return content;
    }
  }, {
    key: 'formatValue',
    value: function formatValue(value) {
      if (this.isMultiple) {
        if (!Array.isArray(value)) {
          value = value !== undefined && value !== null ? [value] : [];
        }
      } else {
        if (Array.isArray(value)) {
          value = value.length ? value[0] : '';
        } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object' || typeof value == 'function') {
          value = '';
        }
      }

      return value;
    }
  }, {
    key: 'redefine',
    value: function redefine() {
      this.changeValue(this.getContent());
    }
  }, {
    key: 'changeValue',
    value: function changeValue(value) {
      if (_utils2.default.compare(this.el.content, value)) {
        return;
      }

      if (Array.isArray(value)) {
        this.el.value = value[value.length - 1];

        for (var i = 0, l = this.el.options.length; i < l; i++) {
          var option = this.el.options[i];

          option.selected = value.indexOf(option.value) != -1;
        }
      } else {
        this.el.value = value;

        for (var _i = 0, _l = this.el.options.length; _i < _l; _i++) {
          var _option = this.el.options[_i];

          _option.selected = _option.value == value;
        }
      }

      this.el.content = value;
      this.attrs.onChange.dispatch(Event, { bubbles: true });
    }
  }]);

  return Select;
}(_for2.default);

Select.booleanAttributes = ['multiple'].concat(_for2.default.booleanAttributes);
Select.events = ['change'].concat(_for2.default.events);
exports.default = Select;

var Option = exports.Option = function (_Loop) {
  _inherits(Option, _Loop);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: '__getParsedExpression',
    value: function __getParsedExpression(expression) {
      return _utils2.default.decodeHtmlEntities(expression);
    }
  }, {
    key: 'changedSelected',
    value: function changedSelected(value) {
      this.setSelected(value);
    }
  }, {
    key: 'setSelected',
    value: function setSelected(value) {
      this.el.selected = value;
      this.for.redefine();
    }
  }]);

  return Option;
}(_for.Loop);

Option.booleanAttributes = ['selected'];


Select.Option = Option;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _text = __webpack_require__(5);

var _text2 = _interopRequireDefault(_text);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component to work with input elements.
 * 
 * {@link https://akilijs.com/docs/components#docs_input}
 * {@link https://akilijs.com/docs/components#docs_checkbox_and_radio}
 * 
 * @tag input
 * @attr @see Text
 * @message @see Text
 */
var Input = function (_Text) {
  _inherits(Input, _Text);

  _createClass(Input, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('input', this);
    }
  }]);

  function Input() {
    var _ref;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args)));

    _this.isCheckbox = _this.el.type == 'checkbox';
    _this.isRadio = _this.el.type == 'radio';
    return _this;
  }

  _createClass(Input, [{
    key: 'compiled',
    value: function compiled() {
      (this.isCheckbox || this.isRadio) && this.attr('checked', this.setChecked);
      return _get(Input.prototype.__proto__ || Object.getPrototypeOf(Input.prototype), 'compiled', this).apply(this, arguments);
    }
  }, {
    key: 'setChecked',
    value: function setChecked(value) {
      value = !!value;

      if (this.el.checked === value) {
        return;
      }

      this.el.checked = value;
      this.__isCompiled && this.attrs.onChange.dispatch(Event, { bubbles: true });
      this.isRadio && this.changeRadio();
    }
  }, {
    key: 'setValue',
    value: function setValue() {
      _get(Input.prototype.__proto__ || Object.getPrototypeOf(Input.prototype), 'setValue', this).apply(this, arguments);
      this.isRadio && this.attrs.onChange.dispatch(Event, { bubbles: true });
    }
  }, {
    key: 'changeRadio',
    value: function changeRadio() {
      var name = this.el.getAttribute('name');
      var selector = 'input[type=radio][name=\'' + name + '\']:not([scope=\'' + this.scope.__name + '\'])';
      var children = _akili2.default.root.children(selector);

      for (var i = 0, l = children.length; i < l; i++) {
        var radio = children[i];
        radio.setChecked(radio.el.checked);
      }
    }
  }]);

  return Input;
}(_text2.default);

Input.booleanAttributes = ['checked', 'multiple'].concat(_text2.default.booleanAttributes);
Input.events = ['change'].concat(_text2.default.events);
exports.default = Input;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioButton = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _for = __webpack_require__(6);

var _for2 = _interopRequireDefault(_for);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component to work with radio group.
 * 
 * {@link https://akilijs.com/docs/components#docs_radio_group}
 * 
 * @tag radio
 * @selector radio[name]
 * @attr {string} name - name of the group
 * @attr {string|null} value - selected value
 * @attr [in] @see For
 * @message {string} radio - sent on value change
 */
var Radio = function (_For) {
  _inherits(Radio, _For);

  _createClass(Radio, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('radio', this);
      _akili2.default.component('radio-button', this.RadioButton);
    }
  }]);

  function Radio() {
    var _ref;

    _classCallCheck(this, Radio);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Radio.__proto__ || Object.getPrototypeOf(Radio)).call.apply(_ref, [this].concat(args)));

    _this.iterable = _this.el.hasAttribute('in');
    return _this;
  }

  _createClass(Radio, [{
    key: 'created',
    value: function created() {
      if (this.iterable) {
        return _get(Radio.prototype.__proto__ || Object.getPrototypeOf(Radio.prototype), 'created', this).apply(this, arguments);
      }
    }
  }, {
    key: 'compiled',
    value: function compiled() {
      var _this2 = this;

      this.el.addEventListener('change', function () {
        _akili2.default.nextTick(function () {
          var value = _this2.getRadioValue();

          if (value === _this2.prevValue) {
            return;
          }

          _this2.prevValue = value;
          _this2.attrs.onRadio.trigger(value, { bubbles: true });
        });
      });

      if (this.iterable) {
        return _get(Radio.prototype.__proto__ || Object.getPrototypeOf(Radio.prototype), 'compiled', this).apply(this, arguments);
      }
    }
  }, {
    key: 'resolved',
    value: function resolved() {
      var _this3 = this;

      this.attr('in', function () {
        return _this3.setNames();
      }, { callOnStart: false });
      this.attr('value', this.setValue);
      this.attr('name', this.setNames);

      if (this.iterable) {
        return _get(Radio.prototype.__proto__ || Object.getPrototypeOf(Radio.prototype), 'resolved', this).apply(this, arguments);
      }
    }
  }, {
    key: 'setNames',
    value: function setNames(name) {
      var children = this.children('input[type=radio]');

      for (var i = 0, l = children.length; i < l; i++) {
        children[i].el.setAttribute('name', name || this.attrs.name);
      }
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      if (value === this.prevValue) {
        return;
      }

      var prev = this.prevValue;
      var children = this.children('input[type=radio]');
      var isTrue = false;
      this.prevValue = value;

      for (var i = 0, l = children.length; i < l; i++) {
        var radio = children[i];
        var isSelected = radio.el.value === value;

        isSelected && (isTrue = true);
        radio.setChecked(isSelected);
      }

      if (!isTrue) {
        if (value === null) {
          if (prev === undefined) {
            return;
          }
        } else {
          this.prevValue = undefined;
          value = null;
        }
      }

      this.attrs.onRadio.trigger(value, { bubbles: true });
    }
  }, {
    key: 'getRadioValue',
    value: function getRadioValue() {
      var children = this.children('input[type=radio]');

      for (var i = 0, l = children.length; i < l; i++) {
        var radio = children[i];

        if (radio.el.checked) {
          return radio.el.value;
        }
      }

      return null;
    }
  }]);

  return Radio;
}(_for2.default);

/**
 * Component to work with radio group item.
 * 
 * {@link https://akilijs.com/docs/components#docs_radio_group}
 * 
 * @tag radio-button
 * @attr {string} value - value
 */


Radio.matches = '[name]';
Radio.events = ['radio'].concat(_for2.default.events);
exports.default = Radio;

var RadioButton = exports.RadioButton = function (_Loop) {
  _inherits(RadioButton, _Loop);

  function RadioButton() {
    var _ref2;

    _classCallCheck(this, RadioButton);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _possibleConstructorReturn(this, (_ref2 = RadioButton.__proto__ || Object.getPrototypeOf(RadioButton)).call.apply(_ref2, [this].concat(args)));
  }

  _createClass(RadioButton, [{
    key: 'compiled',
    value: function compiled() {
      this.attr('value', 'value');
      return _get(RadioButton.prototype.__proto__ || Object.getPrototypeOf(RadioButton.prototype), 'compiled', this).apply(this, arguments);
    }
  }]);

  return RadioButton;
}(_for.Loop);

RadioButton.template = '<label><input type="radio" value="${this.value}"/>${this.__content}</label>';


Radio.RadioButton = RadioButton;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _text = __webpack_require__(5);

var _text2 = _interopRequireDefault(_text);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component to work with textarea.
 * 
 * {@link https://akilijs.com/docs/components#docs_textarea}
 * 
 * @tag textarea
 * @attr @see Text
 * @message @see Text
 */
var Textarea = function (_Text) {
  _inherits(Textarea, _Text);

  function Textarea() {
    _classCallCheck(this, Textarea);

    return _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).apply(this, arguments));
  }

  _createClass(Textarea, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('textarea', this);
    }
  }]);

  return Textarea;
}(_text2.default);

exports.default = Textarea;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _text = __webpack_require__(5);

var _text2 = _interopRequireDefault(_text);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component for elements with the contenteditable attribute.
 * 
 * {@link https://akilijs.com/docs/components#docs_contenteditable}
 * 
 * @tag content
 * @selector content,[contenteditable]
 * @attr @see Text
 * @attr {boolean} [editable] - editable or not
 */
var Content = function (_Text) {
  _inherits(Content, _Text);

  _createClass(Content, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('content', this);
      _akili2.default.alias('[contenteditable]', 'content');
    }
  }]);

  function Content() {
    var _ref;

    _classCallCheck(this, Content);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Content.__proto__ || Object.getPrototypeOf(Content)).call.apply(_ref, [this].concat(args)));

    if (_this.el.hasAttribute('editable')) {
      _this.el.setAttribute('contenteditable', _this.el.getAttribute('editable'));
      _this.el.removeAttribute('editable');
    }

    if (getComputedStyle(_this.el).display == 'inline') {
      _this.el.style.display = 'block';
    }

    _this.valueKey = 'innerHTML';
    return _this;
  }

  _createClass(Content, [{
    key: 'setElementFocus',
    value: function setElementFocus() {
      var range = document.createRange();
      var selection = window.getSelection();

      range.selectNodeContents(this.el);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
      this.el.focus();
    }
  }]);

  return Content;
}(_text2.default);

exports.default = Content;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(3);

var _component2 = _interopRequireDefault(_component);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

var _request = __webpack_require__(4);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component to include templates by url.
 * 
 * {@link https://akilijs.com/docs/components#docs_html_templates}
 * 
 * @tag include
 * @selector include[url]
 * @attr {string} url - template path
 * @attr {number|function|boolean} [cache] - request cache {@link https://akilijs.com/docs/requests#docs_cache}
 * @message {void} load - sent on the template load
 * @message {Error} error - sent on error
 */
var Include = function (_Component) {
  _inherits(Include, _Component);

  _createClass(Include, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('include', this);
    }
  }]);

  function Include() {
    var _ref;

    _classCallCheck(this, Include);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Include.__proto__ || Object.getPrototypeOf(Include)).call.apply(_ref, [this].concat(args)));

    _this.html = _this.el.innerHTML;
    _this.el.innerHTML = '';
    _this.connection = null;
    return _this;
  }

  _createClass(Include, [{
    key: 'compiled',
    value: function compiled() {
      this.attr('cache', this.setCache);
      return this.attr('url', this.setTemplate);
    }
  }, {
    key: 'setCache',
    value: function setCache(cache) {
      this.cache = cache;
    }
  }, {
    key: 'setTemplate',
    value: function setTemplate(url) {
      var _this2 = this;

      this.connection && this.connection.abort();

      return _request2.default.get(url, {
        cache: this.cache,
        onStart: function onStart(xhr) {
          _this2.connection = xhr;
        }
      }).then(function (res) {
        _this2.connection = null;
        _this2.empty();
        _this2.el.innerHTML = _this2.html;
        _akili2.default.setTemplate(_this2.el, res.data);

        return _akili2.default.compile(_this2.el, { recompile: true }).then(function () {
          _this2.attrs.onLoad.trigger(undefined, { bubbles: false });
        });
      }).catch(function (err) {
        _this2.attrs.onError.trigger(err, { bubbles: false });
        throw err;
      });
    }
  }]);

  return Include;
}(_component2.default);

Include.transparent = true;
Include.matches = '[url]';
Include.events = ['load', 'error'];
exports.default = Include;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _url = __webpack_require__(2);

var _url2 = _interopRequireDefault(_url);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component for iframes.
 * 
 * {@link https://akilijs.com/docs/components#docs_image,_iframe,_embed,_audio,_video,_track,_source,_object}
 * 
 * @tag iframe
 * @attr {string} [url]
 */
var Iframe = function (_Url) {
  _inherits(Iframe, _Url);

  function Iframe() {
    _classCallCheck(this, Iframe);

    return _possibleConstructorReturn(this, (Iframe.__proto__ || Object.getPrototypeOf(Iframe)).apply(this, arguments));
  }

  _createClass(Iframe, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('iframe', this);
    }
  }]);

  return Iframe;
}(_url2.default);

exports.default = Iframe;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _url = __webpack_require__(2);

var _url2 = _interopRequireDefault(_url);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component for images.
 * 
 * {@link https://akilijs.com/docs/components#docs_image,_iframe,_embed,_audio,_video,_track,_source,_object}
 * 
 * @tag img
 * @attr {string} [url]
 */
var Image = function (_Url) {
  _inherits(Image, _Url);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
  }

  _createClass(Image, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('img', this);
    }
  }]);

  return Image;
}(_url2.default);

exports.default = Image;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _url = __webpack_require__(2);

var _url2 = _interopRequireDefault(_url);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component for embed elements.
 * 
 * {@link https://akilijs.com/docs/components#docs_image,_iframe,_embed,_audio,_video,_track,_source,_object}
 * 
 * @tag embed
 * @attr {string} [url]
 */
var Embed = function (_Url) {
  _inherits(Embed, _Url);

  function Embed() {
    _classCallCheck(this, Embed);

    return _possibleConstructorReturn(this, (Embed.__proto__ || Object.getPrototypeOf(Embed)).apply(this, arguments));
  }

  _createClass(Embed, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('embed', this);
    }
  }]);

  return Embed;
}(_url2.default);

exports.default = Embed;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _url = __webpack_require__(2);

var _url2 = _interopRequireDefault(_url);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component for audio elements.
 * 
 * {@link https://akilijs.com/docs/components#docs_image,_iframe,_embed,_audio,_video,_track,_source,_object}
 * 
 * @tag audio
 * @attr {string} [url]
 */
var Audio = function (_Url) {
  _inherits(Audio, _Url);

  function Audio() {
    _classCallCheck(this, Audio);

    return _possibleConstructorReturn(this, (Audio.__proto__ || Object.getPrototypeOf(Audio)).apply(this, arguments));
  }

  _createClass(Audio, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('audio', this);
    }
  }]);

  return Audio;
}(_url2.default);

exports.default = Audio;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _url = __webpack_require__(2);

var _url2 = _interopRequireDefault(_url);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component for video elements.
 * 
 * {@link https://akilijs.com/docs/components#docs_image,_iframe,_embed,_audio,_video,_track,_source,_object}
 * 
 * @tag video
 * @attr {string} [url]
 */
var Video = function (_Url) {
  _inherits(Video, _Url);

  function Video() {
    _classCallCheck(this, Video);

    return _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).apply(this, arguments));
  }

  _createClass(Video, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('video', this);
    }
  }]);

  return Video;
}(_url2.default);

exports.default = Video;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _url = __webpack_require__(2);

var _url2 = _interopRequireDefault(_url);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component for track elements.
 * 
 * {@link https://akilijs.com/docs/components#docs_image,_iframe,_embed,_audio,_video,_track,_source,_object}
 * 
 * @tag track
 * @attr {string} [url]
 */
var Track = function (_Url) {
  _inherits(Track, _Url);

  function Track() {
    _classCallCheck(this, Track);

    return _possibleConstructorReturn(this, (Track.__proto__ || Object.getPrototypeOf(Track)).apply(this, arguments));
  }

  _createClass(Track, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('track', this);
    }
  }]);

  return Track;
}(_url2.default);

exports.default = Track;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _url = __webpack_require__(2);

var _url2 = _interopRequireDefault(_url);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component for source elements.
 * 
 * {@link https://akilijs.com/docs/components#docs_image,_iframe,_embed,_audio,_video,_track,_source,_object}
 * 
 * @tag source
 * @attr {string} [url]
 */
var Source = function (_Url) {
  _inherits(Source, _Url);

  function Source() {
    _classCallCheck(this, Source);

    return _possibleConstructorReturn(this, (Source.__proto__ || Object.getPrototypeOf(Source)).apply(this, arguments));
  }

  _createClass(Source, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('source', this);
    }
  }]);

  return Source;
}(_url2.default);

exports.default = Source;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _url = __webpack_require__(2);

var _url2 = _interopRequireDefault(_url);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component for object elements.
 * 
 * {@link https://akilijs.com/docs/components#docs_image,_iframe,_embed,_audio,_video,_track,_source,_object}
 * 
 * @tag object
 * @attr {string} [url]
 */
var Objects = function (_Url) {
  _inherits(Objects, _Url);

  function Objects() {
    var _ref;

    _classCallCheck(this, Objects);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Objects.__proto__ || Object.getPrototypeOf(Objects)).call.apply(_ref, [this].concat(args)));

    _this.urlAttribute = 'data';
    return _this;
  }

  _createClass(Objects, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('object', this);
    }
  }]);

  return Objects;
}(_url2.default);

exports.default = Objects;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(3);

var _component2 = _interopRequireDefault(_component);

var _router = __webpack_require__(12);

var _router2 = _interopRequireDefault(_router);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component for links.
 * It works with router as well. 
 * 
 * {@link https://akilijs.com/docs/components#docs_links}
 * 
 * @tag a
 * @selector a[state]:not([url]),a[url]:not([state])
 * @attr {string} [url] - url to go
 * @attr {string} [state] - state to go {@link https://akilijs.com/docs/routing}
 * @attr {object} [params] - params for the state {@link https://akilijs.com/docs/routing#docs_state_params}
 * @attr {object} [query] - query for the state {@link https://akilijs.com/docs/routing#docs_state_query}
 * @attr {string} [hash] - hash for the state {@link https://akilijs.com/docs/routing#docs_state_hash}
 * @attr {object} [options] - options for the state {@link https://akilijs.com/docs/routing#docs_router.location}
 * @scope {boolean} isActiveState - the state is active or not 
 * @scope {boolean} inActiveState - the state is part of the active state or not
 */
var A = function (_Component) {
  _inherits(A, _Component);

  _createClass(A, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('a', this);
    }
  }]);

  function A() {
    var _ref;

    _classCallCheck(this, A);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = A.__proto__ || Object.getPrototypeOf(A)).call.apply(_ref, [this].concat(args)));

    _this.state = null;
    _this.params = {};
    _this.query = {};
    _this.options = {};
    _this.isUrl = _this.el.hasAttribute('url');
    return _this;
  }

  _createClass(A, [{
    key: 'compiled',
    value: function compiled() {
      var _this2 = this;

      this.el.addEventListener('click', function (e) {
        e.preventDefault();

        if (_this2.isUrl) {
          _router2.default.location(_this2.attrs.url, _this2.options);
          return;
        }

        _router2.default.state(_this2.state.name, _this2.params, _this2.query, _this2.hash, _this2.options);
      });

      this.onStateChanged = function () {
        return _this2.state && _this2.setActivity();
      };
      window.addEventListener('state-changed', this.onStateChanged);

      this.attr('state', this.setState);
      this.attr('params', this.setParams);
      this.attr('query', this.setQuery);
      this.attr('hash', this.setHash);
      this.attr('options', this.setOptions);
      this.attr('url', this.setUrl);
      this.attr('state', this.resetHref, { callOnStart: false });
      this.attr('params', this.resetHref, { callOnStart: false });
      this.attr('query', this.resetHref, { callOnStart: false });
      this.attr('hash', this.resetHref, { callOnStart: false });
      this.attr('url', this.resetHref, { callOnStart: false });
      this.resetHref();
    }
  }, {
    key: 'removed',
    value: function removed() {
      window.removeEventListener('state-changed', this.onStateChanged);
    }
  }, {
    key: 'setUrl',
    value: function setUrl(url) {
      this.url = url;
    }
  }, {
    key: 'setState',
    value: function setState(name) {
      this.state = this.getState(name);
      this.setActivity();
    }
  }, {
    key: 'setActivity',
    value: function setActivity() {
      this.scope.isActiveState = _router2.default.isActiveState(this.state);
      this.scope.inActiveState = _router2.default.inActiveState(this.state);
    }
  }, {
    key: 'setParams',
    value: function setParams(params) {
      if ((typeof params === 'undefined' ? 'undefined' : _typeof(params)) != 'object' || !params) {
        throw new Error('Router state params must be an object');
      }

      this.params = params;
    }
  }, {
    key: 'setQuery',
    value: function setQuery(query) {
      if ((typeof query === 'undefined' ? 'undefined' : _typeof(query)) != 'object' || !query) {
        throw new Error('Router state query must be an object');
      }

      this.query = query;
    }
  }, {
    key: 'setHash',
    value: function setHash(hash) {
      if (typeof hash != 'string' && hash !== undefined && hash !== null) {
        throw new Error('Router state hash must be a string|null');
      }

      this.hash = hash;
    }
  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) != 'object' || !options) {
        throw new Error('Router state options must be an object');
      }

      this.options = options;
    }
  }, {
    key: 'getState',
    value: function getState(name) {
      var state = _router2.default.getState(name);

      if (!state) {
        throw new Error('Not found router state with name "' + name + '"');
      }

      return state;
    }
  }, {
    key: 'resetHref',
    value: function resetHref() {
      if (this.url) {
        this.attrs.href = this.url;
      } else {
        this.attrs.href = _router2.default.createStateUrl(this.state, this.params, this.query, this.hash, this.options);
      }
    }
  }]);

  return A;
}(_component2.default);

A.matches = '[state]:not([url]),[url]:not([state])';
A.controlAttributes = true;
exports.default = A;

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ba2lsaS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQWtpbGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvYWtpbGkuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy91cmwuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50LmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL3NlcnZpY2VzL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvZm9yLmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL3Njb3BlLmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvc2VydmljZXMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL3JvdXRlLmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL3NlcnZpY2VzL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL2lmLmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0LmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy9yYWRpby5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL3RleHRhcmVhLmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvY29udGVudC5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL2luY2x1ZGUuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy9pZnJhbWUuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy9pbWFnZS5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL2VtYmVkLmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvYXVkaW8uanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy92aWRlby5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL3RyYWNrLmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvc291cmNlLmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvb2JqZWN0LmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvYS5qcyJdLCJuYW1lcyI6WyJBa2lsaSIsIm9wdGlvbnMiLCJkZWJ1ZyIsIl9faW5pdCIsIl9fcm9vdCIsIl9fY29tcG9uZW50cyIsIl9fYWxpYXNlcyIsIl9fc2NvcGVzIiwiX19zdG9yZUxpbmtzIiwiX193aW5kb3ciLCJfX3RhZ3MiLCJfX2lzb2xhdGlvbiIsIl9fZXZhbHVhdGlvbiIsIl9fd3JhcHBpbmciLCJfX3Jvb3RPdXRlckhUTUwiLCJfX29uRXJyb3IiLCJ0cmlnZ2VySW5pdCIsImh0bWxCb29sZWFuQXR0cmlidXRlcyIsImNvbXBvbmVudHMiLCJzZXJ2aWNlcyIsIkNvbXBvbmVudCIsIkV2ZW50RW1pdHRlciIsIlNjb3BlIiwidXRpbHMiLCJnbG9iYWxzIiwiQSIsIkF1ZGlvIiwiQ29udGVudCIsIkZvciIsIkVtYmVkIiwiSWYiLCJJbmNsdWRlIiwiSW5wdXQiLCJJZnJhbWUiLCJJbWFnZSIsIk9iamVjdCIsIk9iamVjdHMiLCJSYWRpbyIsIlJvdXRlIiwiU2VsZWN0IiwiU291cmNlIiwiVGV4dCIsIlRleHRhcmVhIiwiVHJhY2siLCJVcmwiLCJWaWRlbyIsInJlcXVlc3QiLCJyb3V0ZXIiLCJzdG9yZSIsImRlZmluZSIsImNsZWFyR2xvYmFscyIsImtleSIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJBcnJheSIsInVud3JhcCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJzZXRJbnRlcnZhbCIsIlByb21pc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiam9pbkJpbmRpbmdLZXlzIiwia2V5cyIsIm1hcCIsImVsIiwidG9TdHJpbmciLCJqb2luIiwiYWRkU2NvcGUiLCJzY29wZSIsIl9fbmFtZSIsIkVycm9yIiwiZ2V0U2NvcGUiLCJuYW1lIiwicmVtb3ZlU2NvcGUiLCJnZXRBa2lsaVBhcmVudHMiLCJ0cmVlIiwiYXJyIiwiY2hlY2siLCJub2RlIiwicGFyZW50Tm9kZSIsIl9fYWtpbGkiLCJwdXNoIiwic2V0VGVtcGxhdGUiLCJ0ZW1wbGF0ZSIsInJlcGxhY2UiLCJpbm5lckhUTUwiLCJjcmVhdGVTY29wZU5hbWUiLCJjcmVhdGVSYW5kb21TdHJpbmciLCJzdHIiLCJpc29sYXRlIiwiZm4iLCJyZXMiLCJwcm9wcyIsImsiLCJpIiwibCIsImxlbmd0aCIsInByb3AiLCJ2YWwiLCJnZXRQcm9wZXJ0eUJ5S2V5cyIsImNvbXBvbmVudCIsIl9fc2NvcGUiLCJfX2lzUmVzb2x2ZWQiLCJfX3RyaWdnZXJTdG9yZUFuZEF0dHIiLCJfX2V2YWx1YXRlQnlLZXlzIiwiaXNEZWxldGVkIiwidW5ldmFsdWF0ZSIsImV2YWx1YXRpb24iLCJ3cmFwcGluZyIsInVuaXNvbGF0ZSIsImlzb2xhdGlvbiIsIm5leHRUaWNrIiwicmVzb2x2ZSIsInRoZW4iLCJpbml0aWFsaXplIiwicmVjb21waWxlIiwiX19yZWNvbXBpbGUiLCJpc1Jvb3QiLCJjb21wb25lbnROYW1lIiwidG9EYXNoQ2FzZSIsImdldEF0dHJpYnV0ZSIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsIl9Db21wb25lbnQiLCJDSEVDS19BTElBU0VTIiwic2VsZWN0b3JzIiwic2VsZWN0b3JBbGwiLCJtYXRjaGVzIiwic2VsZWN0b3IiLCJfX2NhbmNlbGxlZCIsImZpbmQiLCJwIiwiX19wcmV2ZW50IiwiX19jcmVhdGUiLCJjb21waWxlIiwicm9vdCIsImVsZW1lbnRzIiwiQUtJTElfU1NSIiwicXVlcnlTZWxlY3RvckFsbCIsInJlbW92ZSIsIm5lc3RlZEluaXRpYWxpemluZyIsImNoaWxkcmVuIiwiY2hpbGQiLCJfX2NvbXBpbGUiLCJhbGwiLCJyIiwiX19yZXNvbHZlIiwiY29uc29sZSIsIndhcm4iLCJyZW1vdmVDb21wb25lbnQiLCJhbGlhcyIsInJlbW92ZUFsaWFzIiwiaXNvbGF0ZUFycmF5UHJvdG90eXBlIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsIm9sZCIsIl9faXNQcm94eSIsImFwcGx5IiwiYXJndW1lbnRzIiwiaXNvbGF0ZVdpbmRvd0Z1bmN0aW9ucyIsImNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uIiwiY29uc3RydWN0b3IiLCJjYXRjaCIsImlzb2xhdGVHbG9iYWxzIiwiX190YXJnZXQiLCJ3cmFwIiwiaXNvbGF0ZUV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJfX2FraWxpTGlzdGVuZXJzIiwiYXJncyIsInNsaWNlIiwiY2FsbCIsImxpbmsiLCJsaXN0ZW5lciIsInNwbGljZSIsInBvcyIsImlzQXJyYXkiLCJudW0iLCJpbmRleCIsImNhbGxiYWNrIiwiX19pc29sYXRlZCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsInZhbHVlIiwib2JqIiwiY3VycmVudCIsIndyYXBGdW5jdGlvbiIsImMiLCJkZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJyZXZlcnNlIiwiYWtpbGlXcmFwcGVkRnVuY3Rpb24iLCJ0YWciLCJhZGRUYWciLCJoYXNUYWciLCJyZW1vdmVUYWciLCJ1bmRlZmluZWQiLCJ0cmlnZ2VyVGFnIiwiX19jb21wb25lbnQiLCJfX2V2YWx1YXRlTm9kZSIsImhhbmRsZUVycm9ycyIsInN0YXR1cyIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImluaXQiLCJkb2N1bWVudCIsImJvZHkiLCJvdXRlckhUTUwiLCJkb2N1bWVudEVsZW1lbnQiLCJBS0lMSV9TRVJWRVIiLCJpbml0U2VydmVyU2lkZUh0bWwiLCJodG1sIiwiaW5pdFNlcnZlclNpZGVSZXF1ZXN0Q2FjaGUiLCJyZXF1ZXN0Q2FjaGUiLCJBS0lMSV9DTElFTlQiLCJwcmVwYXJlU2VydmVyU2lkZUh0bWwiLCJjaGFuZ2VTdGF0ZSIsInByZXBhcmVTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlIiwiZXJyIiwiZGVpbml0IiwiZGVzdHJveSIsInN0b3JlS2V5cyIsImF0dHJpYnV0ZXMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJkb2MiLCJwYXJzZUZyb21TdHJpbmciLCJxdWVyeVNlbGVjdG9yIiwiYXR0ciIsInNldEF0dHJpYnV0ZSIsImluc3RhbmNlIiwiX19jYWNoZSIsIl9faW5zdGFuY2VzIiwiY2FjaGUiLCJfX21haW4iLCJjbGFzcyIsImNsYXNzZXMiLCJzdHlsZSIsInN0eWxlcyIsInNwbGl0IiwiZGVsIiwiZXhjbHVkZSIsImV4cHMiLCJsYXN0IiwiUmVnRXhwIiwiaW5kZXhPZiIsIm9wZW4iLCJmaWx0ZXIiLCJoYW5kbGVyIiwibWF0Y2giLCJpdGVtIiwiZmlsdGVyZWQiLCJzb3J0Iiwib3JkZXIiLCJhIiwiYiIsIkRhdGUiLCJnZXRUaW1lIiwibmV4dCIsImFWIiwiYlYiLCJpbmNsdWRlS2V5cyIsIm5ld09iaiIsIm9iaktleXMiLCJleGNsdWRlS2V5cyIsImlzU2NvcGVQcm94eSIsImlzUGxhaW5PYmplY3QiLCJjb3B5IiwibmVzdGVkIiwicGxhaW4iLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIm1ha2VBdHRyaWJ1dGVWYWx1ZSIsImNvbXBhcmUiLCJpZ25vcmVVbmRlZmluZWQiLCJjbGVhclVuZGVmaW5lZCIsImFLZXlzIiwiYktleXMiLCJjcmVhdGVIYXNoIiwic291cmNlIiwiSlNPTiIsInN0cmluZ2lmeSIsIlN0cmluZyIsImhhc2giLCJjaGFyIiwiY2hhckNvZGVBdCIsImVuY29kZUh0bWxFbnRpdGllcyIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlY29kZUh0bWxFbnRpdGllcyIsInRvQ2FtZWxDYXNlIiwibSIsInRvVXBwZXJDYXNlIiwiY2FwaXRhbGl6ZSIsIm9iamVjdCIsInJlZHVjZSIsIm8iLCJoYXNQcm9wZXJ0eUJ5S2V5cyIsImhhcyIsImhhc093blByb3BlcnR5Iiwic2V0UHJvcGVydHlCeUtleXMiLCJkZWxldGVQcm9wZXJ0eUJ5S2V5cyIsImdldEVudW1lcmFibGVQcm9wZXJ0eVRhcmdldCIsInRhcmdldCIsInByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJnZXRPd25Qcm9wZXJ0eVRhcmdldCIsIk1hdGgiLCJyYW5kb20iLCJzdWJzdHJpbmciLCJub3ciLCJkZWJvdW5jZSIsImRlbGF5IiwiY2xlYXJUaW1lb3V0IiwiX19kZWJvdW5jZVRpbWVvdXQiLCJ1cmxBdHRyaWJ1dGUiLCJzZXRVcmwiLCJ1cmwiLCJhdHRycyIsImV2YWx1YXRpb25SZWdleCIsImV2YWx1YXRpb25SZWdleEdsb2JhbCIsInN5c3RlbUF0dHJpYnV0ZXMiLCJjb250ZXh0IiwiZXhwcmVzc2lvbiIsInZhcmlhYmxlcyIsInZhcnMiLCJGdW5jdGlvbiIsIl9faXNNb3VudGVkIiwiX19pc0NvbXBpbGVkIiwiX19iaW5kaW5ncyIsIl9fZXZhbHVhdGluZ0V2ZW50IiwiX19yZWNvbXBpbGluZyIsIl9fY29tcGlsaW5nIiwiX19kaXNhYmxlUHJveHkiLCJfX2Rpc2FibGVTdG9yZUtleXMiLCJfX2Rpc2FibGVBdHRyS2V5cyIsIl9fY2hpbGRyZW4iLCJfX3BhcmVudCIsIl9fcGFyZW50cyIsIl9fY29udGVudCIsIl9fYXR0cnMiLCJfX2F0dHJMaW5rcyIsIl9fYXR0cmlidXRlT2YiLCJfX2V2YWx1YXRpb25Db21wb25lbnQiLCJjaGVja0NoYW5nZXMiLCJzZXRFdmVudHMiLCJzZXRQYXJlbnRzIiwic2V0Qm9vbGVhbkF0dHJpYnV0ZXMiLCJkZWZpbmVBdHRyaWJ1dGVzIiwiX19jcmVhdGVDb21waWxhdGlvbk9wdGlvbnMiLCJfX2NyZWF0ZVJlY29tcGlsYXRpb25PcHRpb25zIiwiX19zZXRFdmVudHMiLCJfX3NldFBhcmVudHMiLCJfX3NldEJvb2xlYW5BdHRyaWJ1dGVzIiwiX19kZWZpbmVBdHRyaWJ1dGVzIiwiX19pbml0aWFsaXplIiwiY3JlYXRlZCIsImNvbnRyb2wiLCJfX2NvbnRyb2xBdHRyaWJ1dGVzIiwiX19ldmFsdWF0aW9uUGFyZW50IiwibmV3UGFyZW50IiwiX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXMiLCJpbnRlcnBvbGF0ZSIsInBhcmVudCIsIm5vZGVUeXBlIiwiX19pbml0aWFsaXplTm9kZSIsImNoaWxkTm9kZXMiLCJvbkNvbXBpbGVkIiwidHJpZ2dlciIsImJ1YmJsZXMiLCJjb21waWxlZCIsInRlbXBsYXRlVXJsIiwiZ2V0IiwidGVtcGxhdGVDYWNoZSIsImRhdGEiLCJvblJlY29tcGlsZWQiLCJyZWNvbXBpbGVkIiwib25SZXNvbHZlZCIsInJlc29sdmVkIiwiX3Njb3BlIiwiYXNzaWduIiwiY29udHJvbEF0dHJpYnV0ZXMiLCJldmVudHMiLCJfX2V2ZW50cyIsIl9fbmVzdGVkT2JzZXJ2ZSIsImJvb2xlYW5BdHRyaWJ1dGVzIiwiY29uY2F0Iiwic2V0QXR0ciIsIm5vZGVOYW1lIiwiaGFzQXR0cmlidXRlIiwiZXYiLCJ0ZXN0IiwicGFyZW50cyIsImV2YWx1YXRpb25QYXJlbnQiLCJ0cmFuc3BhcmVudCIsIl9fZGV0YWNoIiwiX19hZGRDaGlsZCIsInNldFByb3RvdHlwZU9mIiwiX19wcm9wZXJ0aWVzIiwiX19jb21wYXJlTm9kZVByb3BlcnR5VmFsdWUiLCJfX2dldE5vZGVQcm9wZXJ0eSIsImF0dHJOYW1lIiwiZWxlbWVudE5hbWUiLCJfX2VsZW1lbnQiLCJhdHRyaWJ1dGVOYW1lIiwiQXR0ciIsIm1lc3NhZ2VzIiwibWVzc2FnZSIsIl9fZXhwcmVzc2lvbiIsInRyaW0iLCJjb3VudGVyIiwiYXR0cmlidXRlVmFsdWUiLCJldmFsQ29tcG9uZW50IiwiY29tIiwiZCIsImV2YWx1YXRlIiwiZXhpc3RpbmdCaW5kaW5ncyIsInBhcmVudEJpbmRpbmdzIiwicGFyc2VWYWx1ZSIsIl9fZ2V0UGFyc2VkRXhwcmVzc2lvbiIsImxpc3QiLCJwYXJzZSIsIl9fY3JlYXRlRXhjZXB0aW9uTWVzc2FnZSIsIl9fY3JlYXRlS2V5c0hhc2giLCJwYXJlbnRzSGFzaCIsIm5vdEJpbmRpbmciLCJwYXJlbnRWYWx1ZSIsInJlYWxDb21wb25lbnQiLCJfX2JpbmRBbmRTZXRQcm9wZXJ0eSIsImV2YWx1YXRlZCIsImUiLCJiaW5kIiwiX19nZXRCb3VuZE5vZGUiLCJfX2JpbmQiLCJfX3NldE5vZGVQcm9wZXJ0eSIsIndpdGhvdXRQYXJlbnRzIiwibGFzdFByb3BzIiwicHJvcHNMZW5ndGgiLCJlbEV2YWx1YXRlIiwiZWxlbWVudCIsIl9fZ2V0QmluZCIsIl9fZGF0YSIsIl9fZ2V0QWxsQmluZHMiLCJfX2luaXRpYWxpemVkIiwiX19jaGVja05vZGVQcm9wZXJ0eUNoYW5nZSIsIl9fZGlzYWJsZUtleXMiLCJjaGVja1Byb3AiLCJfX3NldCIsIl9rIiwiX3Byb3AiLCJfX2VuYWJsZUtleXMiLCJ1bmJpbmQiLCJfX2lzU3lzdGVtQmluZGluZ0tleSIsIl9rZXlzIiwiX19rZXlzIiwiX2lzRGVsZXRlZCIsImhhc0tleSIsInNoaWZ0IiwiX19ldmFsdWF0ZU5lc3RlZCIsIl9fdW5iaW5kIiwiZXhlYyIsImV2ZW50IiwiX19jaGVja0V2YWx1YXRpb24iLCJfX2V2YWx1YXRlIiwiaXNCb29sZWFuQXR0cmlidXRlIiwiY2xlYXJBdHRyaWJ1dGUiLCJjYW1lbEF0dHJpYnV0ZSIsIl9fYXR0cmlidXRlT24iLCJfX3ByZXBhcmVBdHRyaWJ1dGVJbiIsIl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciIsIl9fYXR0clRyaWdnZXJCeU5hbWUiLCJhdHRyaWJ1dGVPZiIsImV2ZW50TmFtZSIsIl9faXNFdmVudCIsIl9fZXZlbnQiLCJlbWl0dGVyIiwiX19oYXNCaW5kaW5ncyIsIl9fZXZhbHVhdGVFdmVudCIsImlzQXR0ciIsImhhc0JpbmRpbmdzIiwiaXNCb29sZWFuIiwiaXNFdmVudCIsIl9faXNCb29sZWFuIiwic2F2ZUJpbmRpbmdzIiwiX191bmJpbmRCeU5vZGVzIiwiX191bmJpbmRQYXJlbnRzQnlOb2RlcyIsIl9faW5pdGlhbGl6ZUF0dHJpYnV0ZSIsImNoYW5nZUF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZU5vZGUiLCJfX2RlaW5pdGlhbGl6ZU5vZGUiLCJQcm94eSIsInNldCIsImF0dHJLZXkiLCJkZWxldGVQcm9wZXJ0eSIsIl9faXNTeXN0ZW1LZXkiLCJleGNBcnIiLCJyZWFsVGFyZ2V0IiwiZm9yUGFyZW50cyIsImZvckRhdGEiLCJwb3AiLCJfX2JpbmROb2RlIiwiX19jaGVja0Rpc2FibGVtZW50IiwiQ0hFQ0tfRVhJU1RFTkNFIiwidGFyZ2V0UGFyZW50VmFsdWUiLCJfX2NyZWF0ZUlzb2xhdGlvbk9iamVjdCIsImN1cnJlbnRLZXlzIiwiY3VycmVudEtleVN0cmluZyIsIl9fc3RvcmVUcmlnZ2VyQnlLZXlzIiwiX19hdHRyVHJpZ2dlckJ5S2V5cyIsInR5cGUiLCJwcm94eSIsIl9fZ2V0RGlzYWJsZW1lbnRUeXBlU3RvcmUiLCJfX2FsbCIsImxpbmtzIiwiX19zdG9yZVRyaWdnZXJCeU5hbWUiLCJrZXlTdHJpbmciLCJpbmZvIiwiZGF0ZSIsImNhbGxPblN0YXJ0IiwiYXR0cnNLZXlzIiwic3RhcnRLZXlzIiwib2JzZXJ2ZSIsIkNIRUNLX1BST1hZIiwiX19kaXNhYmxlUHJveHlSZWRlZmluaW5nIiwidGFyZ2V0S2V5cyIsIl9fb2JzZXJ2ZSIsImlzb2xhdGlvbkhhc2giLCJ1cGRhdGVkQXQiLCJwYXJlbnRLZXlzU3RyaW5nIiwia2V5c1N0cmluZyIsImNvbGxlY3QiLCJyb290QXR0cnMiLCJub2RlcyIsIl9fbWFwTm9kZXMiLCJfX2RlbGV0ZU5vZGVQcm9wZXJ0eSIsIk5vZGUiLCJqIiwiX19yZW1vdmUiLCJvblJlbW92ZWQiLCJyZW1vdmVkIiwiZGVpbml0aWFsaXplTm9kZXMiLCJfX2VtcHR5IiwiX19jbGVhclN0b3JlTGlua3MiLCJfX3NwbGljZUNoaWxkIiwiX19yZW1vdmVDaGlsZHJlbiIsImZpbmRBbGwiLCJsZXZlbHMiLCJsZXZlbCIsInJpZ2h0IiwibGV2ZWxFbGVtZW50cyIsInVuc2hpZnQiLCJfX3N0b3JlQnlGdW5jdGlvbiIsIl9fc3RvcmVCeUtleXMiLCJfX2F0dHJCeUZ1bmN0aW9uIiwiX19hdHRyQnlLZXlzIiwiX191bnN0b3JlQnlGdW5jdGlvbiIsIl9fdW5zdG9yZUJ5S2V5cyIsIl9fdW5hdHRyQnlGdW5jdGlvbiIsIl9fdW5hdHRyQnlLZXlzIiwiX19nZXRQYXJlbnQiLCJfX2dldENoaWxkcmVuIiwiX19nZXROZWFyIiwiYXBwZW5kQ2hpbGQiLCJSZXF1ZXN0IiwiYmFzZVVybCIsImRlZmF1bHRzIiwiZ2V0SGVhZGVycyIsInhociIsImhlYWRlcnMiLCJnZXRBbGxSZXNwb25zZUhlYWRlcnMiLCJsaW5lIiwic3RhdHVzRXJyb3JQYXR0ZXJuIiwicmVqZWN0IiwibWV0aG9kIiwiWE1MSHR0cFJlcXVlc3QiLCJiZWZvcmUiLCJ0cmFuc2Zvcm1CZWZvcmUiLCJvblN0YXJ0IiwianNvbiIsInJlc3BvbnNlVHlwZSIsImZvcm0iLCJjcmVhdGVGb3JtRGF0YSIsInBhcmFtcyIsInBhcmFtc1RvUXVlcnkiLCJjcmVhdGVDYWNoZUhhc2giLCJ1c2VyIiwicGFzc3dvcmQiLCJfY2FjaGUiLCJnZXRDYWNoZSIsImNyZWF0ZWRBdCIsInRyYW5zZm9ybUFmdGVyIiwicmVzdWx0IiwidGltZW91dCIsIndpdGhDcmVkZW50aWFscyIsImhlYWRlcktleXMiLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25Qcm9ncmVzcyIsIm9ucHJvZ3Jlc3MiLCJvbmxvYWQiLCJyZXNwb25zZSIsInJlYWR5U3RhdGUiLCJzdGF0dXNUZXh0IiwicmVzcG9uc2VUZXh0IiwicmVzcG9uc2VYTUwiLCJyZXNwb25zZVVSTCIsImNyZWF0ZUNhY2hlIiwib250aW1lb3V0Iiwib25lcnJvciIsInNlbmQiLCJzZXAiLCJlcSIsImtzIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidiIsIm9wdCIsInF1ZXJ5IiwiYW1wcyIsImVxcyIsImRlY29kZVVSSUNvbXBvbmVudCIsIm5hbWVzcGFjZSIsImZkIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ0b0lTT1N0cmluZyIsImFkZEluc3RhbmNlIiwicmVtb3ZlSW5zdGFuY2UiLCJ2YWx1ZUtleSIsImRlYm91bmNlSW50ZXJ2YWwiLCJvbkRlYm91bmNlIiwic2V0Rm9jdXMiLCJzZXRWYWx1ZSIsInNldERlYm91bmNlIiwiaW50ZXJ2YWwiLCJzZXRFbGVtZW50Rm9jdXMiLCJzZXRFbGVtZW50Qmx1ciIsImZvY3VzIiwiYmx1ciIsIkxvb3AiLCJpdGVyYXRvcnMiLCJpdGVyYXRvckVsIiwicmVzZXQiLCJjcmVhdGVJdGVyYXRvciIsImRyYXciLCJfX2l0ZXJhdG9yIiwiX192YWx1ZSIsIm1hc2siLCJjcmVhdGVJdGVyYXRvckVsZW1lbnQiLCJjb250ZW50IiwiZmlyc3RDaGlsZCIsIl9faW5kZXgiLCJfX2tleSIsIl9faGFzaCIsIml0ZXJhdG9yIiwic2V0SW5kZXgiLCJzZXRLZXkiLCJfX3Byb21pc2VzIiwiY2xvbmVOb2RlIiwibG9vcCIsIml0ZXJhdGUiLCJvbk91dCIsImZvciIsImlzRm9yIiwiY2FuY2VsIiwiX19lbCIsInN0cmljdCIsImZvcmNlIiwiX19yZW1vdmVkIiwiaW5FdmFsdWF0aW5nIiwicHJlcGFyZU9wdGlvbnMiLCJfRXZlbnQiLCJfX3ByZXBhcmVBdHRyaWJ1dGVPdXQiLCJ0cmFuc2l0aW9uIiwibG9hZCIsInN0YXRlIiwicGF0aCIsImdldFBhcmVudFNjb3BlVHJhbnNpdGlvbiIsIl9fdHJhbnNpdGlvbiIsImVtcHR5IiwiZXhpc3RzIiwiVHJhbnNpdGlvbiIsInByZXZpb3VzIiwicm91dGVzIiwic3RhdGVzIiwiX19maW5pc2VkIiwicmVkaXJlY3QiLCJyb3V0ZSIsImhhc1N0YXRlIiwicGFyYW1LZXlzIiwiZnVsbFBhdHRlcm4iLCJfX3BhcmFtUmVnZXgiLCJmIiwicXVlcnlLZXlzIiwid2F0Y2hIYXNoIiwicHJldlJvdXRlIiwiZ2V0Um91dGUiLCJwcmV2IiwiZmluaXNoIiwiaGFzaE1vZGUiLCJfX3JlZGlyZWN0cyIsIl9fcm91dGVTZWxlY3RvciIsImFkZCIsInBhdHRlcm4iLCJkZWZhdWx0T3B0aW9ucyIsImFic3RyYWN0Iiwic2V0U3RhdGUiLCJnZXRTdGF0ZSIsIm1hbnVhbCIsInByZXBhcmVTdGF0ZUFyZ3MiLCJjcmVhdGVTdGF0ZVVybCIsImJhY2siLCJoaXN0b3J5IiwiZ28iLCJmb3J3YXJkIiwibG9jYXRpb24iLCJkZWZhdWx0VXJsIiwib2xkUHVzaFN0YXRlIiwicHVzaFN0YXRlIiwiZXJyb3IiLCJfX29uU3RhdGVDaGFuZ2VIYW5kbGVyIiwiaW5pdFN0YXRlIiwicGFyZW50TmFtZSIsInNwbGl0U2xhc2hlcyIsInJlbW92ZVN0YXRlIiwic2V0SGFzaFVybCIsInNldEhpc3RvcnlVcmwiLCJyZXBsYWNlVXJsIiwicmVwbGFjZUhhc2hVcmwiLCJyZXBsYWNlSGlzdG9yeVVybCIsInJlcGxhY2VTdGF0ZSIsImdldFVybCIsImdldEhhc2hVcmwiLCJnZXRIaXN0b3J5VXJsIiwicGF0aG5hbWUiLCJzZWFyY2giLCJnZXRVcmxRdWVyeSIsImdldEhhc2hVcmxRdWVyeSIsImdldEhpc3RvcnlVcmxRdWVyeSIsInBhcmFtc0Zyb21RdWVyeSIsInByZXBhcmUiLCJwYXJhbXNUZW1wIiwicHJlcGFyZVN0YXRlUGFyYW1zIiwicXVlcnlUZW1wIiwicHJlcGFyZVN0YXRlUXVlcnkiLCJoYXNoVGVtcCIsInByZXBhcmVTdGF0ZUhhc2giLCJlbXB0eUhhc2giLCJuZXdBcmdzIiwiY3JlYXRlU3RhdGVBcmdzIiwiZ2V0UGF0dGVybkNvbnRlbnQiLCJ1cmxQYXR0ZXJuIiwicmVnZXgiLCJpc0luY2x1ZGVkIiwiaXNBY3RpdmVTdGF0ZSIsImluY2x1ZGVzIiwiX19maW5pc2hlZCIsImluQWN0aXZlU3RhdGUiLCJnZXRBcnJheVBhdHRlcm5Db250ZW50IiwiZ2V0U3RhdGVzQnlMZXZlbCIsInJlbG9hZCIsInByZXZUcmFuc2l0aW9uIiwic2V0UGF0aCIsInJlYWxVcmwiLCJpc0RpZmZlcmVudCIsImlzUm91dGVDaGFuZ2VkIiwidGl0bGUiLCJsb2FkZWQiLCJzZXRUcmFuc2l0aW9uIiwic2F2ZVNjcm9sbFBvc2l0aW9uIiwic2Nyb2xsVG8iLCJFbHNlSWYiLCJFbHNlIiwiYWN0aXZlIiwicmVjcmVhdGUiLCJpc0NvbXBpbGVkIiwiZGlzcGxheSIsImdldENvbXB1dGVkU3R5bGUiLCJzZXRSZWNyZWF0aW9uIiwic2V0SXMiLCJjb21waWxhdGlvbiIsIm5leHRFbGVtZW50U2libGluZyIsInNldEFjdGl2aXR5Iiwic2V0UHJvcGVydHkiLCJPcHRpb24iLCJpdGVyYXRvclRhZ05hbWUiLCJpc011bHRpcGxlIiwiZ2V0Q29udGVudCIsInNldE11bHRpcGxlIiwic2V0Q29udGVudCIsImRyYXdTZWxlY3QiLCJjaGFuZ2VWYWx1ZSIsImZvcm1hdFZhbHVlIiwic2VsZWN0ZWQiLCJvcHRpb24iLCJzZWxlY3Rpb24iLCJyZWRlZmluZSIsIm9uQ2hhbmdlIiwiZGlzcGF0Y2giLCJFdmVudCIsInNldFNlbGVjdGVkIiwiaXNDaGVja2JveCIsImlzUmFkaW8iLCJzZXRDaGVja2VkIiwiY2hlY2tlZCIsImNoYW5nZVJhZGlvIiwicmFkaW8iLCJSYWRpb0J1dHRvbiIsIml0ZXJhYmxlIiwiZ2V0UmFkaW9WYWx1ZSIsInByZXZWYWx1ZSIsIm9uUmFkaW8iLCJzZXROYW1lcyIsImlzVHJ1ZSIsImlzU2VsZWN0ZWQiLCJyYW5nZSIsImNyZWF0ZVJhbmdlIiwiZ2V0U2VsZWN0aW9uIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwiY29sbGFwc2UiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsImNvbm5lY3Rpb24iLCJzZXRDYWNoZSIsImFib3J0Iiwib25Mb2FkIiwib25FcnJvciIsImlzVXJsIiwicHJldmVudERlZmF1bHQiLCJvblN0YXRlQ2hhbmdlZCIsInNldFBhcmFtcyIsInNldFF1ZXJ5Iiwic2V0SGFzaCIsInNldE9wdGlvbnMiLCJyZXNldEhyZWYiLCJocmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OFFDbEZBOzs7Ozs7Ozs7QUFTQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFD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RSxFQUFzRSxLQUFLNVIsT0FBM0UsQ0FBbEI7QUFDRDtBQUNGOzs7O0VBbEg0Qm1CLG1COztBQUFWSyxDLENBQ1pzRyxPLEdBQVUsdUM7QUFERXRHLEMsQ0FFWnNXLGlCLEdBQW9CLEk7a0JBRlJ0VyxDIiwiZmlsZSI6ImFraWxpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQWtpbGlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQWtpbGlcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qKlxuICogSmF2YXNjcmlwdCBmcmFtZXdvcmtcbiAqXG4gKiBjb25zdCBBa2lsaSA9IG1ha2VJdEVhc3koanMgKyBodG1sKTtcbiAqXG4gKiBAYXV0aG9yIEFsZXhhbmRyIEJhbGFzeWFuIDxteXdlYnN0cmVldEBnbWFpbC5jb20+XG4gKiBAbGluayBodHRwOi8vYWtpbGlqcy5jb21cbiAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50LmpzJztcbmltcG9ydCBJZiBmcm9tICcuL2NvbXBvbmVudHMvaWYuanMnO1xuaW1wb3J0IEZvciBmcm9tICcuL2NvbXBvbmVudHMvZm9yLmpzJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdC5qcyc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9jb21wb25lbnRzL2lucHV0LmpzJztcbmltcG9ydCBSYWRpbyBmcm9tICcuL2NvbXBvbmVudHMvcmFkaW8uanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9jb21wb25lbnRzL3RleHQuanMnO1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJy4vY29tcG9uZW50cy90ZXh0YXJlYS5qcyc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuL2NvbXBvbmVudHMvY29udGVudC5qcyc7XG5pbXBvcnQgSW5jbHVkZSBmcm9tICcuL2NvbXBvbmVudHMvaW5jbHVkZS5qcyc7XG5pbXBvcnQgSWZyYW1lIGZyb20gJy4vY29tcG9uZW50cy9pZnJhbWUuanMnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vY29tcG9uZW50cy9pbWFnZS5qcyc7XG5pbXBvcnQgRW1iZWQgZnJvbSAnLi9jb21wb25lbnRzL2VtYmVkLmpzJztcbmltcG9ydCBBdWRpbyBmcm9tICcuL2NvbXBvbmVudHMvYXVkaW8uanMnO1xuaW1wb3J0IFZpZGVvIGZyb20gJy4vY29tcG9uZW50cy92aWRlby5qcyc7XG5pbXBvcnQgVHJhY2sgZnJvbSAnLi9jb21wb25lbnRzL3RyYWNrLmpzJztcbmltcG9ydCBTb3VyY2UgZnJvbSAnLi9jb21wb25lbnRzL3NvdXJjZS5qcyc7XG5pbXBvcnQgT2JqZWN0cyBmcm9tICcuL2NvbXBvbmVudHMvb2JqZWN0LmpzJztcbmltcG9ydCBSb3V0ZSBmcm9tICcuL2NvbXBvbmVudHMvcm91dGUuanMnO1xuaW1wb3J0IFVybCBmcm9tICcuL2NvbXBvbmVudHMvdXJsLmpzJztcbmltcG9ydCBBIGZyb20gJy4vY29tcG9uZW50cy9hLmpzJztcbmltcG9ydCBTY29wZSBmcm9tICcuL3Njb3BlLmpzJztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4vc2VydmljZXMvcm91dGVyLmpzJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3NlcnZpY2VzL3N0b3JlLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCBnbG9iYWxzIGZyb20gJy4vZ2xvYmFscy5qcyc7XG5cbi8qKlxuICogVGhlIGZyYW1ld29yayBtYWluIG9iamVjdFxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2dldHRpbmctc3RhcnRlZH1cbiAqL1xuY29uc3QgQWtpbGkgPSB7fTtcblxuQWtpbGkub3B0aW9ucyA9IHtcbiAgZGVidWc6IHRydWVcbn07XG5cbkFraWxpLl9faW5pdCA9IG51bGw7XG5Ba2lsaS5fX3Jvb3QgPSBudWxsO1xuQWtpbGkuX19jb21wb25lbnRzID0ge307XG5Ba2lsaS5fX2FsaWFzZXMgPSB7fTtcbkFraWxpLl9fc2NvcGVzID0ge307XG5Ba2lsaS5fX3N0b3JlTGlua3MgPSB7fTtcbkFraWxpLl9fd2luZG93ID0ge307XG5Ba2lsaS5fX3RhZ3MgPSB7fTtcbkFraWxpLl9faXNvbGF0aW9uID0gbnVsbDtcbkFraWxpLl9fZXZhbHVhdGlvbiA9IG51bGw7XG5Ba2lsaS5fX3dyYXBwaW5nID0gZmFsc2U7ICBcbkFraWxpLl9fcm9vdE91dGVySFRNTCA9ICcnO1xuQWtpbGkuX19vbkVycm9yID0gKCkgPT4gQWtpbGkudHJpZ2dlckluaXQoZmFsc2UpO1xuXG5Ba2lsaS5odG1sQm9vbGVhbkF0dHJpYnV0ZXMgPSBbXG4gICdkaXNhYmxlZCcsICdjb250ZW50ZWRpdGFibGUnLCAnaGlkZGVuJ1xuXTtcblxuQWtpbGkuY29tcG9uZW50cyA9IHt9O1xuQWtpbGkuc2VydmljZXMgPSB7fTtcbkFraWxpLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbkFraWxpLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcbkFraWxpLlNjb3BlID0gU2NvcGU7XG5Ba2lsaS51dGlscyA9IHV0aWxzO1xuQWtpbGkuZ2xvYmFscyA9IGdsb2JhbHM7XG5Ba2lsaS5jb21wb25lbnRzLkEgPSBBO1xuQWtpbGkuY29tcG9uZW50cy5BdWRpbyA9IEF1ZGlvO1xuQWtpbGkuY29tcG9uZW50cy5Db250ZW50ID0gQ29udGVudDtcbkFraWxpLmNvbXBvbmVudHMuRm9yID0gRm9yO1xuQWtpbGkuY29tcG9uZW50cy5FbWJlZCA9IEVtYmVkO1xuQWtpbGkuY29tcG9uZW50cy5JZiA9IElmO1xuQWtpbGkuY29tcG9uZW50cy5JbmNsdWRlID0gSW5jbHVkZTtcbkFraWxpLmNvbXBvbmVudHMuSW5wdXQgPSBJbnB1dDtcbkFraWxpLmNvbXBvbmVudHMuSWZyYW1lID0gSWZyYW1lO1xuQWtpbGkuY29tcG9uZW50cy5JbWFnZSA9IEltYWdlO1xuQWtpbGkuY29tcG9uZW50cy5PYmplY3QgPSBPYmplY3RzO1xuQWtpbGkuY29tcG9uZW50cy5SYWRpbyA9IFJhZGlvO1xuQWtpbGkuY29tcG9uZW50cy5Sb3V0ZSA9IFJvdXRlO1xuQWtpbGkuY29tcG9uZW50cy5TZWxlY3QgPSBTZWxlY3Q7XG5Ba2lsaS5jb21wb25lbnRzLlNvdXJjZSA9IFNvdXJjZTtcbkFraWxpLmNvbXBvbmVudHMuVGV4dCA9IFRleHQ7XG5Ba2lsaS5jb21wb25lbnRzLlRleHRhcmVhID0gVGV4dGFyZWE7XG5Ba2lsaS5jb21wb25lbnRzLlRyYWNrID0gVHJhY2s7XG5Ba2lsaS5jb21wb25lbnRzLlVybCA9IFVybDtcbkFraWxpLmNvbXBvbmVudHMuVmlkZW8gPSBWaWRlbztcbkFraWxpLnNlcnZpY2VzLnJlcXVlc3QgPSByZXF1ZXN0O1xuQWtpbGkuc2VydmljZXMucm91dGVyID0gcm91dGVyO1xuQWtpbGkuc2VydmljZXMuc3RvcmUgPSBzdG9yZTtcblxuLyoqXG4gKiBEZWZpbmUgdGhlIGRlZmF1bHQgY29tcG9uZW50c1xuICovXG5Ba2lsaS5kZWZpbmUgPSBmdW5jdGlvbiAoKSB7XG4gIEEuZGVmaW5lKCk7XG4gIEF1ZGlvLmRlZmluZSgpO1xuICBDb250ZW50LmRlZmluZSgpO1xuICBDb21wb25lbnQuZGVmaW5lKCk7XG4gIEVtYmVkLmRlZmluZSgpO1xuICBGb3IuZGVmaW5lKCk7XG4gIEluY2x1ZGUuZGVmaW5lKCk7XG4gIElmcmFtZS5kZWZpbmUoKTtcbiAgSW1hZ2UuZGVmaW5lKCk7XG4gIElucHV0LmRlZmluZSgpO1xuICBJZi5kZWZpbmUoKTtcbiAgT2JqZWN0cy5kZWZpbmUoKTtcbiAgUmFkaW8uZGVmaW5lKCk7XG4gIFJvdXRlLmRlZmluZSgpO1xuICBTZWxlY3QuZGVmaW5lKCk7XG4gIFNvdXJjZS5kZWZpbmUoKTtcbiAgVGV4dGFyZWEuZGVmaW5lKCk7XG4gIFRyYWNrLmRlZmluZSgpO1xuICBWaWRlby5kZWZpbmUoKTtcbn07XG5cbi8qKlxuICogQ2xlYXIgdGhlIGdsb2JhbCBjb250ZXh0XG4gKi9cbkFraWxpLmNsZWFyR2xvYmFscyA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yKGxldCBrZXkgaW4gZ2xvYmFscykge1xuICAgIGRlbGV0ZSBnbG9iYWxzW2tleV07XG4gIH1cblxuICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZSkge1xuICAgIEVsZW1lbnQucHJvdG90eXBlW2tleV0gPSB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlW2tleV07XG4gIH1cblxuICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fX3dpbmRvdy5BcnJheS5wcm90b3R5cGUpIHtcbiAgICBBcnJheS5wcm90b3R5cGVba2V5XSA9IHRoaXMuX193aW5kb3cuQXJyYXkucHJvdG90eXBlW2tleV07XG4gIH1cblxuICBmb3IobGV0IGtleSBpbiB0aGlzLm9wdGlvbnMuZ2xvYmFscykge1xuICAgIHRoaXMub3B0aW9ucy5nbG9iYWxzW2tleV0gPSB0aGlzLnVud3JhcCh0aGlzLm9wdGlvbnMuZ2xvYmFsc1trZXldKTtcbiAgfVxuXG4gIHdpbmRvdy5zZXRUaW1lb3V0ID0gdGhpcy5fX3dpbmRvdy5zZXRUaW1lb3V0O1xuICB3aW5kb3cuc2V0SW50ZXJ2YWwgPSB0aGlzLl9fd2luZG93LnNldEludGVydmFsO1xuICB3aW5kb3cuUHJvbWlzZSA9IHRoaXMuX193aW5kb3cuUHJvbWlzZTtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgdGhpcy5fX29uRXJyb3IpO1xufTtcblxuLyoqXG4gKiBKb2luIHRoZSBiaW5kaW5nIGtleXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIGJpbmRpbmcga2V5c1xuICovXG5Ba2lsaS5qb2luQmluZGluZ0tleXMgPSBmdW5jdGlvbiAoa2V5cykge1xuICByZXR1cm4ga2V5cy5tYXAoZWwgPT4gZWwudG9TdHJpbmcoKSkuam9pbignLicpO1xufTtcblxuLyoqXG4gKiBBZGQgdGhlIHNjb3BlXG4gKlxuICogQHBhcmFtIHNjb3BlXG4gKi9cbkFraWxpLmFkZFNjb3BlID0gZnVuY3Rpb24gKHNjb3BlKSB7XG4gIGlmICh0aGlzLl9fc2NvcGVzW3Njb3BlLl9fbmFtZV0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFNjb3BlIG5hbWUgJHtzY29wZS5fX25hbWV9IGFscmVhZHkgZXhpc3RzYCk7XG4gIH1cblxuICB0aGlzLl9fc2NvcGVzW3Njb3BlLl9fbmFtZV0gPSBzY29wZTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBzY29wZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc2NvcGUgbmFtZVxuICogQHJldHVybnMge1Njb3BlfVxuICovXG5Ba2lsaS5nZXRTY29wZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiB0aGlzLl9fc2NvcGVzW25hbWVdO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIHNjb3BlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzY29wZSBuYW1lXG4gKi9cbkFraWxpLnJlbW92ZVNjb3BlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZGVsZXRlIHRoaXMuX19zY29wZXNbbmFtZV07XG59O1xuXG4vKipcbiAqIEdldCBhbGwgZWxlbWVudHMgdGhhdCBpcyB3cmFwcGVkIGluIHRoZSBBa2lsaSBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFt0cmVlPXRydWVdIC0gcmV0dXJuIGFycmF5IG9mIHRoZSBwYXJlbnRzIGlmIHRydWUsIGNsb3Nlc3QgcGFyZW50IGlmIGZhbHNlXG4gKiBAcmV0dXJucyB7QXJyYXl8RWxlbWVudHxudWxsfVxuICovXG5Ba2lsaS5nZXRBa2lsaVBhcmVudHMgPSBmdW5jdGlvbiAoZWwsIHRyZWUgPSB0cnVlKSB7XG4gIGxldCBhcnIgPSBbXTtcblxuICBmdW5jdGlvbiBjaGVjayhub2RlKSB7XG4gICAgaWYgKCFub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5wYXJlbnROb2RlLl9fYWtpbGkpIHtcbiAgICAgIGFyci5wdXNoKG5vZGUucGFyZW50Tm9kZSk7XG5cbiAgICAgIGlmICghdHJlZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2sobm9kZS5wYXJlbnROb2RlKTtcbiAgfVxuXG4gIGNoZWNrKGVsKTtcbiAgcmV0dXJuIHRyZWU/IGFycjogYXJyWzBdO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgdGhlIHRlbXBsYXRlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCI8aT5IZWxsbzwvaT48Yj5Xb3JsZDwvYj5cIlxuICogZWwuaW5uZXJIVE1MID0gXCI8Yj5Xb3JsZDwvYj5cIjtcbiAqIEFraWxpLnNldFRlbXBsYXRlKGVsLCBcIjxpPkhlbGxvPC9pPiR7dGhpcy5fX2NoaWxkcmVufVwiKTtcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbkFraWxpLnNldFRlbXBsYXRlID0gZnVuY3Rpb24gKGVsLCB0ZW1wbGF0ZSkge1xuICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoL1xcJHsoKCg/IVxcJHspXFxzKnRoaXNcXC5fX2NvbnRlbnRcXHMqKSopfS8sIGVsLmlubmVySFRNTCk7XG4gIGVsLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICByZXR1cm4gZWwuaW5uZXJIVE1MO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSB0aGUgdW5pcXVlIHNjb3BlIG5hbWVcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5Ba2lsaS5jcmVhdGVTY29wZU5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB1dGlscy5jcmVhdGVSYW5kb21TdHJpbmcoMTYsIHN0ciA9PiAhIXRoaXMuX19zY29wZXNbc3RyXSk7XG59O1xuXG4vKipcbiAqIElzb2xhdGUgdGhlIHNjb3BlIGNoYW5nZXNcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLmlzb2xhdGUgPSBmdW5jdGlvbiAoZm4pIHsgXG4gIGlmICh0aGlzLl9faXNvbGF0aW9uKSB7XG4gICAgcmV0dXJuIGZuKCk7XG4gIH1cblxuICB0aGlzLl9faXNvbGF0aW9uID0ge307XG4gIGxldCByZXMgPSBmbigpO1xuICBsZXQgcHJvcHMgPSBbXTtcblxuICBmb3IgKGxldCBrIGluIHRoaXMuX19pc29sYXRpb24pIHtcbiAgICBwcm9wcy5wdXNoKHRoaXMuX19pc29sYXRpb25ba10pO1xuICB9XG5cbiAgdGhpcy5fX2lzb2xhdGlvbiA9IG51bGw7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBwcm9wcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjb25zdCBwcm9wID0gcHJvcHNbaV07XG4gICAgY29uc3QgdmFsID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMocHJvcC5rZXlzLCBwcm9wLmNvbXBvbmVudC5fX3Njb3BlKTsgICAgXG4gICAgcHJvcC5jb21wb25lbnQuX19pc1Jlc29sdmVkICYmIHByb3AuY29tcG9uZW50Ll9fdHJpZ2dlclN0b3JlQW5kQXR0cihwcm9wLmtleXMpO1xuICAgIHByb3AuY29tcG9uZW50Ll9fZXZhbHVhdGVCeUtleXMocHJvcC5rZXlzLCB2YWwsIHByb3AuaXNEZWxldGVkKTtcbiAgfVxuXG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIFN0b3AgdGhlIGV2YWx1YXRpb24gaW5zaWRlIHRoZSBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkudW5ldmFsdWF0ZSA9IGZ1bmN0aW9uIChmbikge1xuICBsZXQgZXZhbHVhdGlvbiA9IHRoaXMuX19ldmFsdWF0aW9uO1xuICBsZXQgcmVzO1xuICB0aGlzLl9fZXZhbHVhdGlvbiA9IG51bGw7XG4gIHJlcyA9IGZuKCk7XG4gIHRoaXMuX19ldmFsdWF0aW9uID0gZXZhbHVhdGlvbjtcbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogRXZhbHVhdGUgb25seSB0aGUgcm9vdCBwcm9wZXJ0aWVzXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS53cmFwcGluZyA9IGZ1bmN0aW9uIChmbikge1xuICBpZih0aGlzLl9fd3JhcHBpbmcpIHtcbiAgICByZXR1cm4gZm4oKTtcbiAgfVxuICBcbiAgdGhpcy5fX3dyYXBwaW5nID0gdHJ1ZTtcbiAgbGV0IHJlcyA9IGZuKCk7ICBcbiAgdGhpcy5fX3dyYXBwaW5nID0gZmFsc2U7ICBcbiAgcmV0dXJuIHJlczsgICBcbn1cblxuLyoqXG4gKiBTdG9wIHRoZSBpc29sYXRpb24gaW5zaWRlIHRoZSBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkudW5pc29sYXRlID0gZnVuY3Rpb24gKGZuKSB7XG4gIGxldCBpc29sYXRpb24gPSB0aGlzLl9faXNvbGF0aW9uO1xuICBsZXQgcmVzO1xuICB0aGlzLl9faXNvbGF0aW9uID0gbnVsbDtcbiAgcmVzID0gZm4oKTtcbiAgdGhpcy5fX2lzb2xhdGlvbiA9IGlzb2xhdGlvbjtcbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogUnVuIHRoZSBmdW5jdGlvbiBvbiB0aGUgbmV4dCB0aWNrXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5Ba2lsaS5uZXh0VGljayA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcykgPT4gc2V0VGltZW91dCgoKSA9PiBQcm9taXNlLnJlc29sdmUoZm4oKSkudGhlbihyZXMpKSk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnM9e31dXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChlbCwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCByZWNvbXBpbGUgPSBvcHRpb25zLnJlY29tcGlsZTtcbiAgbGV0IGNvbXBvbmVudCA9IGVsLl9fYWtpbGk7XG5cbiAgaWYgKGNvbXBvbmVudCkge1xuICAgIGlmIChyZWNvbXBpbGUpIHtcbiAgICAgIGNvbXBvbmVudC5fX3JlY29tcGlsZShyZWNvbXBpbGUgPT09IHRydWU/IHt9OiByZWNvbXBpbGUpO1xuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgaXNSb290ID0gZWwgPT09IHRoaXMuX19yb290O1xuICBsZXQgY29tcG9uZW50TmFtZSA9IHV0aWxzLnRvRGFzaENhc2UoZWwuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKSB8fCBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpO1xuICBsZXQgX0NvbXBvbmVudCA9IHRoaXMuX19jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdO1xuXG4gIENIRUNLX0FMSUFTRVM6IGlmICghX0NvbXBvbmVudCkge1xuICAgIGxldCBzZWxlY3RvcnMgPSBPYmplY3Qua2V5cyh0aGlzLl9fYWxpYXNlcyk7XG5cbiAgICBpZiAoIXNlbGVjdG9ycy5sZW5ndGgpIHtcbiAgICAgIGJyZWFrIENIRUNLX0FMSUFTRVM7XG4gICAgfVxuXG4gICAgbGV0IHNlbGVjdG9yQWxsID0gc2VsZWN0b3JzLmpvaW4oJywnKTtcblxuICAgIGlmICghZWwubWF0Y2hlcyhzZWxlY3RvckFsbCkpIHtcbiAgICAgIGJyZWFrIENIRUNLX0FMSUFTRVM7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBzZWxlY3RvcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgc2VsZWN0b3IgPSBzZWxlY3RvcnNbaV07XG5cbiAgICAgIGlmIChlbC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBfQ29tcG9uZW50ID0gdGhpcy5fX2NvbXBvbmVudHNbdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKCFfQ29tcG9uZW50ICYmICFpc1Jvb3QpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIV9Db21wb25lbnQpIHtcbiAgICBfQ29tcG9uZW50ID0gdGhpcy5Db21wb25lbnQ7XG4gIH1cblxuICBpZiAoX0NvbXBvbmVudC5tYXRjaGVzICYmICFlbC5tYXRjaGVzKF9Db21wb25lbnQubWF0Y2hlcykpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb21wb25lbnQgPSBuZXcgX0NvbXBvbmVudChlbCwge30pOyAgXG4gIFxuICBpZiAoY29tcG9uZW50Ll9fY2FuY2VsbGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYoQWtpbGkuZ2V0QWtpbGlQYXJlbnRzKGVsKS5maW5kKHAgPT4gcC5fX2FraWxpLl9fcHJldmVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb21wb25lbnQuX19jcmVhdGUoKTtcbiAgcmV0dXJuIGNvbXBvbmVudDtcbn07XG5cbi8qKlxuICogQ29tcGlsZSB0aGUgZWxlbWVudFxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbkFraWxpLmNvbXBpbGUgPSBmdW5jdGlvbiAocm9vdCwgb3B0aW9ucyA9IHsgcmVjb21waWxlOiBmYWxzZSB9KSB7ICBcbiAgbGV0IGVsZW1lbnRzID0gW107XG5cbiAgaWYod2luZG93LkFLSUxJX1NTUikge1xuICAgIGNvbnN0IGFyciA9IHJvb3QucXVlcnlTZWxlY3RvckFsbCgnW25vLXNzcl0nKTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBhcnJbaV0ucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbmVzdGVkSW5pdGlhbGl6aW5nID0gKGVsKSA9PiB7XG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXMuaW5pdGlhbGl6ZShlbCwgb3B0aW9ucyk7XG4gICAgbGV0IGNoaWxkcmVuID0gZWwuY2hpbGRyZW47XG4gICAgY29tcG9uZW50ICYmIGVsZW1lbnRzLnB1c2goY29tcG9uZW50KTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5lc3RlZEluaXRpYWxpemluZyhjaGlsZCk7XG4gICAgfVxuICB9O1xuICBcbiAgbmVzdGVkSW5pdGlhbGl6aW5nKHJvb3QpO1xuICBsZXQgcCA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGNvbXBvbmVudCA9IGVsZW1lbnRzW2ldOyAgICBcbiAgICBwLnB1c2goY29tcG9uZW50Ll9fY29tcGlsZSgpKTsgICAgXG4gIH1cblxuICByZXR1cm4gUHJvbWlzZS5hbGwocCkudGhlbigoKSA9PiB7XG4gICAgbGV0IHIgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSBlbGVtZW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IGNvbXBvbmVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgci5wdXNoKGNvbXBvbmVudC5fX3Jlc29sdmUoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHIpO1xuICB9KTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIGNvbXBvbmVudC5cbiAqIE9yIGdldCBpdCBpZiB0aGUgZnVuY3Rpb24gaXMgbm90IHBhc3NlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gW2ZuXVxuICovXG5Ba2lsaS5jb21wb25lbnQgPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuICBpZiAoIWZuKSB7XG4gICAgcmV0dXJuIHRoaXMuX19jb21wb25lbnRzW25hbWVdIHx8IG51bGw7XG4gIH1cbiAgXG4gIGlmICh0aGlzLl9fY29tcG9uZW50c1tuYW1lXSAmJiBBa2lsaS5vcHRpb25zLmRlYnVnKSB7ICBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihgQ29tcG9uZW50ICR7bmFtZX0gYWxyZWFkeSB3YXMgYWRkZWRgKTtcbiAgfVxuXG4gIHRoaXMuX19jb21wb25lbnRzW25hbWVdID0gZm47XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgY29tcG9uZW50XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xuQWtpbGkucmVtb3ZlQ29tcG9uZW50ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZGVsZXRlIHRoaXMuX19jb21wb25lbnRzW25hbWVdO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciB0aGUgc2VsZWN0b3IgYWxpYXMuXG4gKiBPciBnZXQgaXQgaWYgdGhlIGNvbXBvbmVudCBuYW1lIGlzIG5vdCBwYXNzZWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgLSBET00gc2VsZWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29tcG9uZW50TmFtZV1cbiAqL1xuQWtpbGkuYWxpYXMgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGNvbXBvbmVudE5hbWUgPSAnJykge1xuICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmICghY29tcG9uZW50TmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gJiYgQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKGBBbGlhcyB3aXRoIHNlbGVjdG9yICR7c2VsZWN0b3J9IGFscmVhZHkgd2FzIGFkZGVkYCk7XG4gIH1cblxuICB0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gPSBjb21wb25lbnROYW1lO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIHNlbGVjdG9yIGFsaWFzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gKi9cbkFraWxpLnJlbW92ZUFsaWFzID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gIGRlbGV0ZSB0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl07XG59O1xuXG4vKipcbiAqIElzb2xhdGUgdGhlIGFycmF5IHByb3RvdHlwZSBmdW5jdGlvbnNcbiAqL1xuQWtpbGkuaXNvbGF0ZUFycmF5UHJvdG90eXBlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9fd2luZG93LkFycmF5ID0geyBwcm90b3R5cGU6IHt9IH07XG4gIGxldCBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoQXJyYXkucHJvdG90eXBlKTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgbGV0IG9sZCA9IEFycmF5LnByb3RvdHlwZVtrZXldO1xuXG4gICAgaWYgKHR5cGVvZiBvbGQgIT0gJ2Z1bmN0aW9uJyB8fCBrZXkgPT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdGhpcy5fX3dpbmRvdy5BcnJheS5wcm90b3R5cGVba2V5XSA9IG9sZDtcblxuICAgIEFycmF5LnByb3RvdHlwZVtrZXldID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIEFraWxpLnVuZXZhbHVhdGUoKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX19pc1Byb3h5KSB7XG4gICAgICAgICAgcmV0dXJuIG9sZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiBvbGQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG59O1xuXG4vKipcbiAqIElzb2xhdGUgdGhlIHdpbmRvdyBmdW5jdGlvbnNcbiAqL1xuQWtpbGkuaXNvbGF0ZVdpbmRvd0Z1bmN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fX3dpbmRvdy5zZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgdGhpcy5fX3dpbmRvdy5zZXRJbnRlcnZhbCA9IHNldEludGVydmFsO1xuICB0aGlzLl9fd2luZG93LlByb21pc2UgPSB3aW5kb3cuUHJvbWlzZTtcbiAgd2luZG93LnNldFRpbWVvdXQgPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5zZXRUaW1lb3V0LCAwKTtcbiAgd2luZG93LnNldEludGVydmFsID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuc2V0SW50ZXJ2YWwsIDApO1xuICBcbiAgaWYoIXdpbmRvdy5BS0lMSV9TU1IpIHtcbiAgICB3aW5kb3cuUHJvbWlzZS5jb25zdHJ1Y3RvciA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LlByb21pc2UuY29uc3RydWN0b3IpO1xuICAgIHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS50aGVuID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUudGhlbiwgWzAsICdsYXN0J10pO1xuICAgIHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS5jYXRjaCA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LlByb21pc2UucHJvdG90eXBlLmNhdGNoKTtcbiAgfSAgXG59O1xuXG4vKipcbiAqIElzb2xhdGUgdGhlIGdsb2JhbHNcbiAqL1xuQWtpbGkuaXNvbGF0ZUdsb2JhbHMgPSBmdW5jdGlvbiAoKSB7ICBcbiAgZ2xvYmFscy5fX3RhcmdldC51dGlscyA9IHRoaXMud3JhcCh1dGlscyk7IFxuICB0aGlzLmlzb2xhdGVFdmVudHMoKTtcbiAgdGhpcy5pc29sYXRlQXJyYXlQcm90b3R5cGUoKTtcbiAgdGhpcy5pc29sYXRlV2luZG93RnVuY3Rpb25zKCk7XG59O1xuXG4vKipcbiAqIElzb2xhdGUgdGhlIGV2ZW50IGxpc3RlbmVyc1xuICovXG5Ba2lsaS5pc29sYXRlRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQgPSB7IHByb3RvdHlwZToge30gfTtcblxuICBpZih3aW5kb3cuQUtJTElfU1NSKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBFbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyO1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyO1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZTtcblxuICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZGVsZXRlIHRoaXMuX19ha2lsaUxpc3RlbmVycztcbiAgICByZXR1cm4gQWtpbGkuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChuYW1lLCBmbikge1xuICAgIGxldCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYgKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVycyA9IHt9O1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0gPSBbXTtcbiAgICB9XG4gICAgXG4gICAgaWYodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhcmdzWzFdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICAgIH07XG4gICAgfSAgICBcblxuICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5wdXNoKHtcbiAgICAgIGxpbms6IGZuLFxuICAgICAgZm46IGFyZ3NbMV1cbiAgICB9KTtcblxuICAgIHJldHVybiBBa2lsaS5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgICBsZXQgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV1baV07XG5cbiAgICAgIGlmIChsaXN0ZW5lci5saW5rID09PSBmbikge1xuICAgICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICBhcmdzWzFdID0gbGlzdGVuZXIuZm47XG4gICAgICAgIGktLTtcbiAgICAgICAgbC0tO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIEFraWxpLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG59O1xuXG4vKipcbiAqIFdyYXAgdGhlIGZ1bmN0aW9uIGNhbGxiYWNrIHdpdGggdGhlIGlzb2xhdGlvbiBjb250ZXh0XG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ3xudW1iZXJbXXxzdHJpbmdbXX0gW3Bvcz1cImxhc3RcIl1cbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqL1xuQWtpbGkuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24gPSBmdW5jdGlvbiAoZm4sIHBvcyA9ICdsYXN0Jykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGxldCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICFBcnJheS5pc0FycmF5KHBvcykgJiYgKHBvcyA9IFtwb3NdKTtcbiAgICBcbiAgICBmb3IobGV0IGkgPSAwLCBsID0gcG9zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG51bSA9IHBvc1tpXTtcbiAgICAgIGxldCBpbmRleCA9IG51bTtcbiAgICAgIGxldCBjYWxsYmFjayA9IGFyZ3NbbnVtXTtcblxuICAgICAgaWYobnVtID09ICdsYXN0Jykge1xuICAgICAgICBpbmRleCA9IGFyZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgY2FsbGJhY2sgPSBhcmdzW2luZGV4XTtcbiAgICAgIH1cblxuICAgICAgaWYodHlwZW9mIGNhbGxiYWNrICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmKCFjYWxsYmFjay5fX2lzb2xhdGVkKSB7XG4gICAgICAgIGFyZ3NbaW5kZXhdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IGNhbGxiYWNrLmFwcGx5KGNhbGxiYWNrLCBhcmd1bWVudHMpKTtcbiAgICAgICAgfTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYXJnc1tpbmRleF0sICdfX2lzb2xhdGVkJywge1xuICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgIHZhbHVlOiBjYWxsYmFja1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG59O1xuXG4vKipcbiAqIFdyYXAgdGhlIG9iamVjdC9mdW5jdGlvbiB0byBpc29sYXRlIGFuZCB1bmV2YWx1YXRlIGRhdGFcbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gb2JqXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIFxuICovXG5Ba2lsaS53cmFwID0gZnVuY3Rpb24gKG9iaiwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBjdXJyZW50ID0gb2JqO1xuXG4gIGlmKHR5cGVvZiBvYmogPT0gJ2Z1bmN0aW9uJykge1xuICAgIG9iaiA9IHRoaXMud3JhcEZ1bmN0aW9uKG9iaiwgb3B0aW9ucyk7XG5cbiAgICBpZihvYmogPT09IGN1cnJlbnQpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICB9XG4gIGVsc2UgaWYoIW9iaiB8fCB0eXBlb2Ygb2JqICE9ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBsZXQga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaik7XG5cbiAgZm9yKGxldCBrID0gMCwgYyA9IGtleXMubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgbGV0IGtleSA9IGtleXNba107XG4gICAgbGV0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KTtcblxuICAgIGlmKCFkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSB8fCAhZGVzY3JpcHRvci53cml0YWJsZSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYob3B0aW9ucy5yZXZlcnNlKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsuLi5kZXNjcmlwdG9yLCB2YWx1ZTogb2JqW2tleV0uX19ha2lsaSB8fCBvYmpba2V5XSB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsuLi5kZXNjcmlwdG9yLCB2YWx1ZTogdGhpcy53cmFwKG9ialtrZXldLCBvcHRpb25zKSB9KTtcbiAgfSBcbiAgXG4gIHJldHVybiBvYmo7XG59O1xuXG4vKipcbiAqIFVud3JhcCB0aGUgb2JqZWN0L2Z1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IG9ialxuICovXG5Ba2lsaS51bndyYXAgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0aGlzLndyYXAob2JqLCB7IHJldmVyc2U6IHRydWUgfSk7XG59XG5cbi8qKlxuICogSXNvbGF0ZSB0aGUgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSBcbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqL1xuQWtpbGkud3JhcEZ1bmN0aW9uID0gZnVuY3Rpb24gKGZuLCBvcHRpb25zID0ge30pIHtcbiAgaWYgKGZuLl9fYWtpbGkpIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICBjb25zdCBha2lsaVdyYXBwZWRGdW5jdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZihvcHRpb25zLnRhZyAmJiBBa2lsaS5fX2V2YWx1YXRpb24pIHtcbiAgICAgIEFraWxpLmFkZFRhZyhvcHRpb25zLnRhZywgQWtpbGkuX19ldmFsdWF0aW9uLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBBa2lsaS53cmFwcGluZygoKSA9PiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfTtcblxuICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGZuKTtcbiAgYWtpbGlXcmFwcGVkRnVuY3Rpb24ucHJvdG90eXBlID0gZm4ucHJvdG90eXBlO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgIGFraWxpV3JhcHBlZEZ1bmN0aW9uW2tleV0gPSBmbltrZXldO1xuICB9XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFraWxpV3JhcHBlZEZ1bmN0aW9uLCAnX19ha2lsaScsIHtcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICB2YWx1ZTogZm5cbiAgfSk7XG5cbiAgcmV0dXJuIGFraWxpV3JhcHBlZEZ1bmN0aW9uO1xufTtcblxuLyoqXG4gKiBBZGQgdGhlIHRhZ1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqL1xuQWtpbGkuYWRkVGFnID0gZnVuY3Rpb24gKHRhZywgbm9kZSkge1xuICBpZih0aGlzLmhhc1RhZyh0YWcsIG5vZGUpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYoIXRoaXMuX190YWdzW25vZGUuX19uYW1lXSkge1xuICAgIHRoaXMuX190YWdzW25vZGUuX19uYW1lXSA9IHt9OyAgICBcbiAgfVxuXG4gIGlmKCF0aGlzLl9fdGFnc1tub2RlLl9fbmFtZV1bdGFnXSkge1xuICAgIHRoaXMuX190YWdzW25vZGUuX19uYW1lXVt0YWddID0gW107ICAgIFxuICB9XG5cbiAgdGhpcy5fX3RhZ3Nbbm9kZS5fX25hbWVdW3RhZ10ucHVzaCh7IG5vZGUgfSk7XG59XG5cbi8qKlxuICogQ2hlY2sgdGhlIHRhZyBleGlzdHNcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IHRhZ1xuICogQHBhcmFtIHtOb2RlfSBbbm9kZV1cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5Ba2lsaS5oYXNUYWcgPSBmdW5jdGlvbih0YWcsIG5vZGUpIHtcbiAgaWYoIW5vZGUpe1xuICAgIGZvcihsZXQga2V5IGluIHRoaXMuX190YWdzKSB7XG4gICAgICBmb3IobGV0IGsgaW4gdGhpcy5fX3RhZ3Nba2V5XSkge1xuICAgICAgICBpZihrID09IHRhZykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYoIXRoaXMuX190YWdzW25vZGUuX19uYW1lXSkge1xuICAgIHJldHVybiBmYWxzZTsgICAgXG4gIH1cblxuICBpZighdGhpcy5fX3RhZ3Nbbm9kZS5fX25hbWVdW3RhZ10pIHtcbiAgICByZXR1cm4gZmFsc2U7ICAgIFxuICB9IFxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgdGFnXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdGFnXVxuICogQHBhcmFtIHtOb2RlfSBbbm9kZV1cbiAqL1xuQWtpbGkucmVtb3ZlVGFnID0gZnVuY3Rpb24gKHRhZywgbm9kZSkge1xuICBpZih0eXBlb2YgdGFnID09ICdvYmplY3QnKSB7XG4gICAgbm9kZSA9IHRhZztcbiAgICB0YWcgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZighdGFnKSB7IFxuICAgIGRlbGV0ZSB0aGlzLl9fdGFnc1tub2RlLl9fbmFtZV07XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYoIW5vZGUpIHtcbiAgICBmb3IobGV0IGtleSBpbiB0aGlzLl9fdGFncykge1xuICAgICAgZm9yKGxldCBrIGluIHRoaXMuX190YWdzW2tleV0pIHtcbiAgICAgICAgaWYoayA9PSB0YWcpIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5fX3RhZ3Nba2V5XVtrXVxuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgaWYoIU9iamVjdC5rZXlzKHRoaXMuX190YWdzW2tleV0pLmxlbmd0aCkge1xuICAgICAgICBkZWxldGUgdGhpcy5fX3RhZ3Nba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm47ICAgIFxuICB9XG5cbiAgZm9yKGxldCBrZXkgaW4gdGhpcy5fX3RhZ3Nbbm9kZS5fX25hbWVdKSB7XG4gICAgaWYoa2V5ID09IHRhZykge1xuICAgICAgZGVsZXRlIHRoaXMuX190YWdzW25vZGUuX19uYW1lXVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIGlmKCFPYmplY3Qua2V5cyh0aGlzLl9fdGFnc1tub2RlLl9fbmFtZV0pLmxlbmd0aCkge1xuICAgIGRlbGV0ZSB0aGlzLl9fdGFnc1tub2RlLl9fbmFtZV07XG4gIH1cbn1cblxuLyoqXG4gKiBFdmFsdWF0ZSB0aGUgdGFnIGV4cHJlc3Npb25zXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdcbiAqL1xuQWtpbGkudHJpZ2dlclRhZyA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgZm9yKGxldCBrZXkgaW4gdGhpcy5fX3RhZ3MpIHtcbiAgICBmb3IobGV0IGsgaW4gdGhpcy5fX3RhZ3Nba2V5XSkge1xuICAgICAgaWYoayA9PSB0YWcpIHtcbiAgICAgICAgY29uc3QgYXJyID0gdGhpcy5fX3RhZ3Nba2V5XVtrXTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGNvbnN0IG9iaiA9IGFycltpXTtcbiAgICAgICAgICBvYmoubm9kZS5fX2NvbXBvbmVudC5fX2V2YWx1YXRlTm9kZShvYmoubm9kZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogSGFuZGxlIHRoZSBlcnJvcnNcbiAqL1xuQWtpbGkuaGFuZGxlRXJyb3JzID0gZnVuY3Rpb24gKCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCB0aGlzLl9fb25FcnJvcik7XG59O1xuXG4vKipcbiAqIFRyaWdnZXIgdGhlIGluaXRpYWxpemF0aW9uIHN0YXR1c1xuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc3RhdHVzXG4gKi9cbkFraWxpLnRyaWdnZXJJbml0ID0gZnVuY3Rpb24gKHN0YXR1cykge1xuICBBa2lsaS5fX2luaXQgPSBzdGF0dXM7XG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnYWtpbGktaW5pdCcsIHsgZGV0YWlsOiBzdGF0dXMgfSkpO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBhcHBsaWNhdGlvblxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gW3Jvb3RdXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuQWtpbGkuaW5pdCA9IGZ1bmN0aW9uIChyb290KSB7IFxuICByb290ID0gcm9vdCB8fCBkb2N1bWVudC5ib2R5O1xuICB0aGlzLl9fcm9vdE91dGVySFRNTCA9IHJvb3Qub3V0ZXJIVE1MO1xuXG4gIGlmKCEocm9vdCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBSb290IGVsZW1lbnQgbXVzdCBiZSBhbiBodG1sIGVsZW1lbnRgKTtcbiAgfVxuXG4gIGlmKHJvb3QgPT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgXCJodG1sXCIgY2FuJ3QgYmUgdGhlIHJvb3QgZWxlbWVudGApO1xuICB9XG5cbiAgdGhpcy5fX3Jvb3QgPSByb290O1xuICBcbiAgaWYod2luZG93LkFLSUxJX1NFUlZFUikgeyAgICBcbiAgICBBa2lsaS5pbml0U2VydmVyU2lkZUh0bWwod2luZG93LkFLSUxJX1NFUlZFUi5odG1sKTtcbiAgICBBa2lsaS5pbml0U2VydmVyU2lkZVJlcXVlc3RDYWNoZSh3aW5kb3cuQUtJTElfU0VSVkVSLnJlcXVlc3RDYWNoZSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgd2luZG93LkFLSUxJX0NMSUVOVCA9IHtcbiAgICAgIGh0bWw6IHRoaXMucHJlcGFyZVNlcnZlclNpZGVIdG1sKClcbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiB0aGlzLmNvbXBpbGUodGhpcy5fX3Jvb3QpLnRoZW4oKCkgPT4ge1xuICAgIGlmIChyb3V0ZXIuX19pbml0KSB7XG4gICAgICByZXR1cm4gcm91dGVyLmNoYW5nZVN0YXRlKHsgaW5pdDogdHJ1ZSB9KTtcbiAgICB9XG4gIH0pLnRoZW4oKCkgPT4geyAgICBcbiAgICB3aW5kb3cuQUtJTElfQ0xJRU5UICYmICh3aW5kb3cuQUtJTElfQ0xJRU5ULnJlcXVlc3RDYWNoZSA9IHRoaXMucHJlcGFyZVNlcnZlclNpZGVSZXF1ZXN0Q2FjaGUoKSk7XG4gICAgdGhpcy50cmlnZ2VySW5pdCh0cnVlKTtcbiAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgIHRoaXMudHJpZ2dlckluaXQoZmFsc2UpO1xuICAgIHRocm93IGVycjtcbiAgfSk7XG59O1xuXG4vKipcbiAqIERlaW5pdGlhbGl6ZSB0aGUgYXBwbGljYXRpb25cbiAqL1xuQWtpbGkuZGVpbml0ID0gZnVuY3Rpb24gKCkgeyBcbiAgdGhpcy5fX3Jvb3QgJiYgKHRoaXMuX19yb290Lm91dGVySFRNTCA9IHRoaXMuX19yb290T3V0ZXJIVE1MKTtcblxuICBmb3IobGV0IGtleSBpbiB0aGlzLl9fc2NvcGVzKSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5fX3Njb3Blc1trZXldLl9fY29tcG9uZW50O1xuICAgIGNvbXBvbmVudCAmJiBjb21wb25lbnQucmVtb3ZlKCk7XG4gIH1cblxuICB0aGlzLl9fcm9vdE91dGVySFRNTCA9ICcnO1xuICB0aGlzLl9faW5pdCA9IG51bGw7XG4gIHRoaXMuX19yb290ID0gbnVsbDtcbiAgdGhpcy5fX3Njb3BlcyA9IHt9O1xuICB0aGlzLl9fc3RvcmVMaW5rcyA9IHt9O1xuICB0aGlzLl9fdGFncyA9IHt9O1xufTtcblxuLyoqXG4gKiBEZXN0cm95IHRoZSBmcmFtZXdvcmtcbiAqL1xuQWtpbGkuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5kZWluaXQoKTsgIFxuICB0aGlzLmNsZWFyR2xvYmFscygpO1xuXG4gIGxldCBzdG9yZUtleXMgPSBPYmplY3Qua2V5cyhzdG9yZS5fX3RhcmdldCk7XG4gIFxuICBmb3IobGV0IGkgPSAwLCBsID0gc3RvcmVLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGRlbGV0ZSBzdG9yZS5fX3RhcmdldFtzdG9yZUtleXNbaV1dO1xuICB9XG5cbiAgcm91dGVyLl9faW5pdCAmJiByb3V0ZXIuZGVpbml0KCk7XG4gIGRlbGV0ZSB3aW5kb3cuQUtJTElfU0VSVkVSO1xuICBkZWxldGUgd2luZG93LkFLSUxJX0NMSUVOVDtcbiAgZGVsZXRlIHdpbmRvdy5BS0lMSV9TU1I7XG5cbiAgZm9yKGxldCBrZXkgaW4gQWtpbGkpIHtcbiAgICBkZWxldGUgQWtpbGlba2V5XTtcbiAgfVxuXG4gIGRlbGV0ZSB3aW5kb3cuQWtpbGk7XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgU1NSIGh0bWxcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqL1xuQWtpbGkuaW5pdFNlcnZlclNpZGVIdG1sID0gZnVuY3Rpb24gKGh0bWwpIHtcbiAgZm9yIChsZXQgaSA9IHRoaXMuX19yb290LmF0dHJpYnV0ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgIHRoaXMuX19yb290LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLl9fcm9vdC5hdHRyaWJ1dGVzW2ldLm5hbWUpO1xuICB9XG5cbiAgbGV0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgbGV0IGRvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbCwgXCJ0ZXh0L2h0bWxcIik7XG4gIGxldCBlbCA9IGRvYy5xdWVyeVNlbGVjdG9yKHRoaXMuX19yb290ID09PSBkb2N1bWVudC5ib2R5PyAnYm9keSc6ICdib2R5ID4gKicpOyAgICBcbiAgdGhpcy5fX3Jvb3QuaW5uZXJIVE1MID0gZWwuaW5uZXJIVE1MO1xuXG4gIGZvciAobGV0IGkgPSBlbC5hdHRyaWJ1dGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgbGV0IGF0dHIgPSBlbC5hdHRyaWJ1dGVzW2ldO1xuICAgIHRoaXMuX19yb290LnNldEF0dHJpYnV0ZShhdHRyLm5hbWUsIGF0dHIudmFsdWUpO1xuICB9ICBcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBTU1IgY2FjaGVcbiAqIFxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICovXG5Ba2lsaS5pbml0U2VydmVyU2lkZVJlcXVlc3RDYWNoZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgY29uc3QgaW5pdCA9IChpbnN0YW5jZSwgb2JqKSA9PiB7XG4gICAgZm9yKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgICBpbnN0YW5jZS5fX2NhY2hlW2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gIH1cbiAgXG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICBsZXQgaW5zdGFuY2UgPSBrZXkgPT09ICdfX21haW4nPyByZXF1ZXN0OiByZXF1ZXN0Ll9faW5zdGFuY2VzW2tleV07XG4gICAgaW5pdChpbnN0YW5jZSwgb2JqW2tleV0pO1xuICB9XG59XG5cbi8qKlxuICogUHJlcGFyZSB0aGUgU1NSIGh0bWxcbiAqL1xuQWtpbGkucHJlcGFyZVNlcnZlclNpZGVIdG1sID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fX3Jvb3Qub3V0ZXJIVE1MO1xufVxuXG4vKipcbiAqIFByZXBhcmUgdGhlIFNTUiBjYWNoZVxuICovXG5Ba2lsaS5wcmVwYXJlU2VydmVyU2lkZVJlcXVlc3RDYWNoZSA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IGNhY2hlID0geyBfX21haW46IHJlcXVlc3QuX19jYWNoZSB9O1xuXG4gIGZvcihsZXQga2V5IGluIHJlcXVlc3QuX19pbnN0YW5jZXMpIHtcbiAgICBjYWNoZVtrZXldID0gcmVxdWVzdC5fX2luc3RhbmNlc1trZXldLl9fY2FjaGU7XG4gIH1cblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFraWxpO1xud2luZG93LkFraWxpID0gQWtpbGk7XG5Ba2lsaS5kZWZpbmUoKTtcbkFraWxpLmhhbmRsZUVycm9ycygpO1xuQWtpbGkuaXNvbGF0ZUdsb2JhbHMoKTtcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyLmpzJ1xuXG4vKipcbiAqIFRoZSBvYmplY3Qgd2l0aCBhIGxvdCBvZiB1c2VmdWwgZnVuY3Rpb25zXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvdXRpbHN9XG4gKi9cbmNvbnN0IHV0aWxzID0ge307XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBjbGFzcyBhdHRyaWJ1dGUgZnJvbSB0aGUgb2JqZWN0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJyZWQgYWN0aXZlXCJcbiAqIHV0aWxzLmNsYXNzKHtyZWQ6IHRydWUsIGFjdGl2ZTogdHJ1ZSwgZ3JlZW46IGZhbHNlfSk7XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuY2xhc3MgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgbGV0IGNsYXNzZXMgPSBbXTtcbiAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgayA9IGtleXNbaV07XG4gICAgbGV0IHZhbCA9IG9ialtrXTtcbiAgICB2YWwgJiYgY2xhc3Nlcy5wdXNoKGspO1xuICB9XG5cbiAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgdGhlIHN0eWxlIGF0dHJpYnV0ZSBmcm9tIHRoZSBvYmplY3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcImNvbG9yOnJlZDt3aWR0aDoxMHB4XCJcbiAqIHV0aWxzLnN0eWxlKHtjb2xvcjogXCJyZWRcIiwgYmFja2dyb3VuZDogZmFsc2UsIHdpZHRoOiBcIjEwcHhcIn0pO1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnN0eWxlID0gZnVuY3Rpb24ob2JqKSB7XG4gIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgbGV0IHN0eWxlcyA9IFtdO1xuICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrID0ga2V5c1tpXTtcbiAgICBsZXQgdmFsID0gb2JqW2tdO1xuICAgIHZhbCAmJiBzdHlsZXMucHVzaChgJHt0aGlzLnRvRGFzaENhc2Uoayl9OiR7dmFsfWApO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlcy5qb2luKCc7Jyk7XG59O1xuXG4vKipcbiAqIFNwbGl0IHRoZSBzdHJpbmcgZXh0ZW5kZWRcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW1wiSGVsbG9cIiwgXCJXb3JsZFwiXVxuICogdXRpbHMuc3BsaXQoXCJIZWxsbyBXb3JsZFwiLCBcIiBcIik7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsneCA9IDUnLCAnIHkgPSBcIjE7MjszXCInXVxuICogdXRpbHMuc3BsaXQoJ3ggPSA1OyB5ID0gXCIxOzI7M1wiJywgXCI7XCIsIFsnXCInXSk7XG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cH0gc3RyIFxuICogQHBhcmFtIHtzdHJpbmd9IFtkZWxdXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBbZXhjbHVkZV0gXG4gKi9cbnV0aWxzLnNwbGl0ID0gZnVuY3Rpb24oc3RyLCBkZWwgPSAnJywgZXhjbHVkZSA9IFtdKSB7XG5cdGNvbnN0IGV4cHMgPSBbXTsgICAgIFxuICBsZXQgbGFzdCA9ICcnO1xuXG4gIGlmKCFkZWwpIHtcbiAgICByZXR1cm4gc3RyLnNwbGl0KCcnKTtcbiAgfVxuICBlbHNlIGlmKGRlbCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIHJldHVybiBzdHIuc3BsaXQoZGVsKTtcbiAgfVxuICBlbHNlIGlmKHN0ci5pbmRleE9mKGRlbCkgPT0gLTEpIHtcbiAgICBsYXN0ID0gc3RyO1xuICB9XG4gIGVsc2Uge1xuICAgIGNvbnN0IGFyciA9IHN0ci5zcGxpdCgnJyk7XG4gICAgbGV0IG9wZW4gPSAnJzsgXG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHZhbCA9IGFycltpXTtcbiAgICAgIGxldCBpbmRleCA9IGV4Y2x1ZGUuaW5kZXhPZih2YWwpOyAgICAgIFxuXG4gICAgICBpZihpbmRleCA+IC0xICYmICghb3BlbiB8fCBvcGVuID09IHZhbCkpIHtcbiAgICAgICAgIW9wZW4/IG9wZW4gPSBleGNsdWRlW2luZGV4XTogb3BlbiA9ICcnO1xuICAgICAgfVxuXG4gICAgICBpZih2YWwgPT0gZGVsICYmICFvcGVuKSB7XG4gICAgICAgIGV4cHMucHVzaChsYXN0KTtcbiAgICAgICAgbGFzdCA9ICcnO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbGFzdCArPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgbGFzdCAmJiBleHBzLnB1c2gobGFzdCk7XG4gIHJldHVybiBleHBzO1xufVxuXG4vKipcbiAqIEZpbHRlciB0aGUgYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMSwgMTFdXG4gKiB1dGlscy5maWx0ZXIoWzEsIDIsIDMsIDExXSwgJzEnKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDF9LCB7eDogMTF9XVxuICogdXRpbHMuZmlsdGVyKFt7eDogMX0sIHt4OiAyfSwge3g6IDN9LCB7eDogMTF9XSwgJzEnLCAneCcpO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDF9LCB7eDogMTF9XVxuICogdXRpbHMuZmlsdGVyKFt7eDogMX0sIHt4OiAyfSwge3g6IDN9LCB7eDogMTF9XSwgJzEnLCBbJ3gnXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMX0sIHt4OiAxMX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxfSwge3g6IDJ9LCB7eDogM30sIHt4OiAxMX1dLCAnMScsIFtbJ3gnXV0pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IHt5OiAxfX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiB7eTogMX19LCB7eDoge3k6IDJ9fV0sICcxJywgW1sneCcsICd5J11dKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OjEsIHk6IDJ9LCB7eDogMiwgeToxfV0gXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxLCB5OiAyfSwge3g6IDMsIHk6IDN9LCB7eDogMiwgeTogMX1dLCAnMScsIFsneCcsICd5J10pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6MSwgeTogMn0sIHt4OiAyLCB5OjF9XVxuICogdXRpbHMuZmlsdGVyKFt7eDogMSwgeTogMn0sIHt4OiAzLCB5OiAzfSwge3g6IDIsIHk6IDF9XSwgJzEnLCBbWyd4J10sIFsneSddXSk7XG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0ge3N0cmluZ3xSZWdFeHB8ZnVuY3Rpb259IGhhbmRsZXIgLSB0eXBlIG9mIHRoZSBmaWx0ZXJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nW118c3RyaW5nfSBba2V5c10gLSBmaWx0ZXIgYnkgdGhlIGtleXNcbiAqIEByZXR1cm5zIHtBcnJheX0gXG4gKi9cbnV0aWxzLmZpbHRlciA9IGZ1bmN0aW9uIChhcnIsIGhhbmRsZXIsIGtleXMgPSBudWxsKSB7XG4gIGxldCByZXMgPSBbXTtcblxuICBpZiAoa2V5cyAmJiAhQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgIGtleXMgPSBba2V5c107XG4gIH1cblxuICBpZih0eXBlb2YgaGFuZGxlciAhPSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3Qgc3RyID0gaGFuZGxlcj8gKGhhbmRsZXIgKyAnJykudG9Mb3dlckNhc2UoKTogJyc7XG4gICAgaGFuZGxlciA9IHZhbCA9PiAodmFsPyAodmFsICsgJycpLnRvTG93ZXJDYXNlKCk6ICcnKS5tYXRjaChzdHIpO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGl0ZW0gPSBhcnJbaV07XG4gICAgbGV0IGZpbHRlcmVkID0gZmFsc2U7XG5cbiAgICBpZigha2V5cyAmJiBoYW5kbGVyKGl0ZW0pKSB7XG4gICAgICBmaWx0ZXJlZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYoa2V5cykge1xuICAgICAgZm9yKGxldCBrID0gMCwgYyA9IGtleXMubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2tdO1xuICAgICAgICBrZXkgPSBBcnJheS5pc0FycmF5KGtleSk/IGtleTogW2tleV07XG4gICAgICAgIGxldCB2YWwgPSBrZXk/IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5LCBpdGVtKTogaXRlbTtcbiAgICBcbiAgICAgICAgaWYgKGhhbmRsZXIodmFsKSkge1xuICAgICAgICAgIGZpbHRlcmVkID0gdHJ1ZTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZpbHRlcmVkICYmIHJlcy5wdXNoKGl0ZW0pOyAgIFxuICB9XG5cbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogU29ydCB0aGUgYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMSwgMiwgM11cbiAqIHV0aWxzLnNvcnQoWzMsIDIsIDFdLCB0cnVlKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMywgMiwgMV1cbiAqIHV0aWxzLnNvcnQoWzEsIDIsIDNdLCBmYWxzZSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dXG4gKiB1dGlscy5zb3J0KFt7eDogM30sIHt4OiAyfSwge3g6IDF9XSwgW1sneCddXSwgW3RydWVdKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCBbJ3gnXSwgdHJ1ZSk7XG4gKiB1dGlscy5zb3J0KFt7eDogM30sIHt4OiAyfSwge3g6IDF9XSwgJ3gnKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dLCBbWyd4J11dLCBbZmFsc2VdKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dLCBbJ3gnXSwgZmFsc2UpO1xuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sICd4JywgZmFsc2UpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMSwgeTogM30sIHt4OiAyLCB5OiAxfSwge3g6MiwgeTogMn1dXG4gKiB1dGlscy5zb3J0KFt7eDogMiwgeTogMn0sIHt4OiAyLCB5OiAxfSwge3g6IDIsIHk6IDN9XSwgW1sneCddLCBbJ3knXV0sIFt0cnVlLCB0cnVlXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoge3k6IDF9fSwge3g6IHt5OiAyfX1dXG4gKiB1dGlscy5zb3J0KFt7eDoge3k6IDJ9fSwge3g6IHt5OiAxfX1dLCBbWyd4JywgJ3knXV0sIFt0cnVlXSk7XG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0ge2Jvb2xlYW58QXJyYXlbXXxzdHJpbmdbXXxzdHJpbmd9IFtrZXlzXVxuICogQHBhcmFtIHtib29sZWFufGJvb2xlYW5bXX0gW29yZGVyXSAtIHJldmVyc2Ugb3Igbm90XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbnV0aWxzLnNvcnQgPSBmdW5jdGlvbihhcnIsIGtleXMgPSB0cnVlLCBvcmRlciA9IFtdKSB7XG4gIGFyciA9IGFyci5zbGljZSgpO1xuXG4gIGlmIChrZXlzID09PSB0cnVlKSB7XG4gICAga2V5cyA9IFtdO1xuICAgIG9yZGVyID0gW3RydWVdO1xuICB9XG4gIGVsc2UgaWYgKGtleXMgPT09IGZhbHNlKSB7XG4gICAga2V5cyA9IFtdO1xuICAgIG9yZGVyID0gW2ZhbHNlXTtcbiAgfVxuXG4gIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgIGtleXMgPSBba2V5c107XG4gIH1cblxuICBpZiAoIUFycmF5LmlzQXJyYXkob3JkZXIpKSB7XG4gICAgb3JkZXIgPSBbb3JkZXJdO1xuICB9XG5cbiAgbGV0IGwgPSBrZXlzLmxlbmd0aDtcblxuICBhcnIuc29ydCgoYSwgYikgPT4ge1xuICAgIGxldCBpID0gMDtcblxuICAgIGNvbnN0IGNoZWNrID0gKGEsIGIsIHJldmVyc2UgPSBmYWxzZSkgPT4ge1xuICAgICAgaWYgKGEgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIGEgPSBhLmdldFRpbWUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGIgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIGIgPSBiLmdldFRpbWUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGEgPiBiKSB7XG4gICAgICAgIHJldHVybiByZXZlcnNlPyAtMTogMTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGEgPCBiKSB7XG4gICAgICAgIHJldHVybiByZXZlcnNlPyAxOiAtMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDA7XG4gICAgfTtcblxuICAgIGNvbnN0IG5leHQgPSAoKSA9PiB7XG4gICAgICBpZiAoaSA+PSBsKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuXG4gICAgICBsZXQga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGtleSkpIHtcbiAgICAgICAga2V5ID0gW2tleV07XG4gICAgICB9XG5cbiAgICAgIGxldCBhViA9IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5LCBhKTtcbiAgICAgIGxldCBiViA9IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5LCBiKTtcbiAgICAgIGxldCByZXMgPSBjaGVjayhhViwgYlYsIG9yZGVyW2ldID09PSBmYWxzZSk7XG5cbiAgICAgIGlmIChyZXMgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1cblxuICAgICAgaSsrO1xuICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICB9O1xuXG4gICAgaWYgKCFsKSB7XG4gICAgICByZXR1cm4gY2hlY2soYSwgYiwgb3JkZXJbaV0gPT09IGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dCgpO1xuICB9KTtcblxuICByZXR1cm4gYXJyO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYSBuZXcgb2JqZWN0IHdpdGggdGhlIHNwZWNpZmllZCBrZXlzXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHt4OiAxLCB6OiAxfVxuICogdXRpbHMuaW5jbHVkZUtleXMoe3g6IDEsIHk6IDEsIHo6IDF9LCBbJ3gnLCAneiddKTtcbiAqIFxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICovXG51dGlscy5pbmNsdWRlS2V5cyA9IGZ1bmN0aW9uKG9iaiwga2V5cykge1xuICBsZXQgbmV3T2JqID0ge307XG4gIGxldCBvYmpLZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICBmb3IobGV0IGkgPSAwLCBsID0gb2JqS2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQga2V5ID0gb2JqS2V5c1tpXTtcblxuICAgIGlmKGtleXMuaW5kZXhPZihrZXkpICE9IC0xKSB7XG4gICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbi8qKlxuICogUmV0dXJuIGEgbmV3IG9iamVjdCB3aXRob3V0IHRoZSBzcGVjaWZpZWQga2V5c1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB7eDogMSwgejogMX1cbiAqIHV0aWxzLmluY2x1ZGVLZXlzKHt4OiAxLCB5OiAxLCB6OiAxfSwgWyd5J10pO1xuICogXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKi9cbnV0aWxzLmV4Y2x1ZGVLZXlzID0gZnVuY3Rpb24ob2JqLCBrZXlzKSB7XG4gIGxldCBuZXdPYmogPSB7fTtcbiAgbGV0IG9iaktleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBvYmpLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrZXkgPSBvYmpLZXlzW2ldO1xuXG4gICAgaWYoa2V5cy5pbmRleE9mKGtleSkgPT0gLTEpIHtcbiAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxuLyoqXG4gKiBDaGVjayB0aGUgdmFsdWUgaXMgdGhlIHNjb3BlIHByb3h5IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaXNTY29wZVByb3h5ID0gZnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiAhISh2YWwgJiYgdHlwZW9mIHZhbCA9PSAnb2JqZWN0JyAmJiB2YWwuX19pc1Byb3h5KTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIHZhbHVlIGlzIGEgcGxhaW4gb2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSBvYmpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5pc1BsYWluT2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XG4gIHJldHVybiAhIShvYmogJiYgdHlwZW9mIG9iaiA9PSAnb2JqZWN0JyAmJiAob2JqLmNvbnN0cnVjdG9yID09IE9iamVjdCB8fCBvYmouY29uc3RydWN0b3IgPT0gQXJyYXkpKTtcbn07XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVcbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zXSBcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5jb3B5ID0gZnVuY3Rpb24odmFsdWUsIG9wdGlvbnMgPSB7fSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8ICF2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIG9wdGlvbnMgPSB7IG5lc3RlZDogdHJ1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgcGxhaW46IGZhbHNlLCAuLi5vcHRpb25zIH07XG5cbiAgY29uc3QgbmV4dCA9IChvYmopID0+IHtcbiAgICBpZihvcHRpb25zLnBsYWluICYmICF0aGlzLmlzUGxhaW5PYmplY3Qob2JqKSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBvYmogPSB0aGlzLmlzU2NvcGVQcm94eShvYmopPyBvYmouX190YXJnZXQ6IG9iajtcbiAgICBsZXQga2V5cyA9ICFvcHRpb25zLmVudW1lcmFibGU/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaik6IE9iamVjdC5rZXlzKG9iaik7XG4gICAgbGV0IG5ld09iaiA9IEFycmF5LmlzQXJyYXkob2JqKT8gW106IHt9O1xuICAgIFxuICAgIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgbGV0IHZhbCA9IG9ialtrZXldO1xuICAgICAgdmFsID0gdmFsICYmIHR5cGVvZiB2YWwgPT0gJ29iamVjdCcgJiYgb3B0aW9ucy5uZXN0ZWQ/IG5leHQodmFsKTogdmFsOyAgICAgIFxuICAgICAgXG4gICAgICBpZighb2JqLnByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCB7XG4gICAgICAgICAgLi4uT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSksXG4gICAgICAgICAgdmFsdWU6IHZhbFxuICAgICAgICB9KTtcblxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbmV3T2JqW2tleV0gPSB2YWw7ICBcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3T2JqO1xuICB9XG5cbiAgcmV0dXJuIG5leHQodmFsdWUpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2UgdGhlIGF0dHJpYnV0ZSB2YWx1ZSB0byB0aGUgYXBwcm9wcmlhdGUgZm9ybWF0XG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gZmFsc2UgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEV2ZW50RW1pdHRlcikge1xuICAgIHJldHVybiAnW29iamVjdCBFdmVudF0nO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gdmFsdWUgKyAnJztcbn07XG5cbi8qKlxuICogQ29tcGFyZSB0d28gdmFsdWVzXG4gKlxuICogQHBhcmFtIHsqfSBhXG4gKiBAcGFyYW0geyp9IGJcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5jb21wYXJlID0gZnVuY3Rpb24gKGEsIGIsIG9wdGlvbnMgPSB7fSkge1xuICBpZiAoKGEgaW5zdGFuY2VvZiBEYXRlKSAmJiAoYiBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgcmV0dXJuIGEuZ2V0VGltZSgpID09PSBiLmdldFRpbWUoKTtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgYSA9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBiID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYS50b1N0cmluZygpID09PSBiLnRvU3RyaW5nKCk7XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT0gJ29iamVjdCcpIHtcbiAgICBpZiAoYSA9PT0gbnVsbCB8fCBiID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gYSA9PT0gYjtcbiAgICB9XG5cbiAgICBvcHRpb25zID0geyBlbnVtZXJhYmxlOiB0cnVlLCBpZ25vcmVVbmRlZmluZWQ6IHRydWUsIC4uLm9wdGlvbnMgfTtcblxuICAgIGNvbnN0IGNsZWFyVW5kZWZpbmVkID0gKHZhbCkgPT4ge1xuICAgICAgbGV0IG9iaiA9IEFycmF5LmlzQXJyYXkodmFsKT8gW106IHt9O1xuICAgICAgbGV0IGtleXMgPSAhb3B0aW9ucy5lbnVtZXJhYmxlPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcygpOiBPYmplY3Qua2V5cyh2YWwpO1xuXG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgICAgIHZhbFtrZXldICE9PSB1bmRlZmluZWQgJiYgKG9ialtrZXldID0gdmFsW2tleV0pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgaWYob3B0aW9ucy5pZ25vcmVVbmRlZmluZWQpIHtcbiAgICAgIGEgPSBjbGVhclVuZGVmaW5lZChhKTtcbiAgICAgIGIgPSBjbGVhclVuZGVmaW5lZChiKTtcbiAgICB9XG5cbiAgICBsZXQgYUtleXMgPSAhb3B0aW9ucy5lbnVtZXJhYmxlPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcygpOiBPYmplY3Qua2V5cyhhKTtcbiAgICBsZXQgYktleXMgPSAhb3B0aW9ucy5lbnVtZXJhYmxlPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcygpOiBPYmplY3Qua2V5cyhiKTtcbiAgICBcbiAgICBpZiAoYUtleXMubGVuZ3RoICE9IGJLZXlzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGEgPSB0aGlzLmlzU2NvcGVQcm94eShhKT8gYS5fX3RhcmdldDogYTtcbiAgICBiID0gdGhpcy5pc1Njb3BlUHJveHkoYik/IGIuX190YXJnZXQ6IGI7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gYUtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBrZXkgPSBhS2V5c1tpXTtcblxuICAgICAgaWYgKCF0aGlzLmNvbXBhcmUoYVtrZXldLCBiW2tleV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBhID09PSBiO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSBoYXNoIGZyb20gdGhlIHN0cmluZ1xuICogXG4gKiBAcGFyYW0geyp9IHNvdXJjZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuY3JlYXRlSGFzaCA9IGZ1bmN0aW9uKHNvdXJjZSkge1xuICB0eXBlb2Ygc291cmNlID09ICdvYmplY3QnICYmIChzb3VyY2UgPSBKU09OLnN0cmluZ2lmeShzb3VyY2UpKTtcbiAgdHlwZW9mIHNvdXJjZSAhPSAnc3RyaW5nJyAmJiAoc291cmNlID0gJ+KggCcgKyBTdHJpbmcoc291cmNlKSk7XG4gIGxldCBoYXNoID0gMDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNvdXJjZS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBjaGFyID0gc291cmNlLmNoYXJDb2RlQXQoaSk7XG4gICAgaGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgY2hhcjtcbiAgICBoYXNoID0gaGFzaCAmIGhhc2g7XG4gIH1cblxuICByZXR1cm4gaGFzaCArICcnO1xufVxuXG4vKipcbiAqIEVuY29kZSB0aGUgaHRtbCBlbnRpdGllc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwieW91ICZhbXAgbWVcIlxuICogdXRpbHMuZW5jb2RlSHRtbEVudGl0aWVzKCd5b3UgJiBtZScpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBodG1sXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5lbmNvZGVIdG1sRW50aXRpZXMgPSBmdW5jdGlvbihodG1sKSB7XG4gIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB2YWx1ZTtcbiAgZWwudGV4dENvbnRlbnQgPSBodG1sO1xuICB2YWx1ZSA9IGVsLmlubmVySFRNTDtcbiAgZWwucmVtb3ZlKCk7XG4gIGVsID0gbnVsbDtcbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuLyoqXG4gKiBEZWNvZGUgdGhlIGh0bWwgZW50aXRpZXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcInlvdSAmIG1lXCJcbiAqIHV0aWxzLmRlY29kZUh0bWxFbnRpdGllcygneW91ICZhbXAgbWUnKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuZGVjb2RlSHRtbEVudGl0aWVzID0gZnVuY3Rpb24oaHRtbCkge1xuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGxldCB2YWx1ZTtcbiAgZWwuaW5uZXJIVE1MID0gaHRtbDtcbiAgdmFsdWUgPSBlbC52YWx1ZTtcbiAgZWwucmVtb3ZlKCk7XG4gIGVsID0gbnVsbDtcbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0IHRoZSBzdHJpbmcgZnJvbSBhIGRhc2ggdG8gYSBjYW1lbCBjYXNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMudG9DYW1lbENhc2UgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXFcrKC4pL2csIChtLCBjKSA9PiBjLnRvVXBwZXJDYXNlKCkpO1xufTtcblxuLyoqXG4gKiBDYXBpdGFsaXplIHRoZSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5jYXBpdGFsaXplID0gZnVuY3Rpb24oc3RyKSB7XG4gIHJldHVybiBzdHJbMF0udG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn07XG5cbi8qKlxuICogQ29udmVydCB0aGUgc3RyaW5nIGZyb20gYSBjYW1lbCB0byBhIGRhc2ggY2FzZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnRvRGFzaENhc2UgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIChtLCBjKSA9PiBgLSR7Yy50b0xvd2VyQ2FzZSgpfWApO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIG5lc3RlZCBvYmplY3QgcHJvcGVydHkgYnkgYXJyYXkga2V5c1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIDVcbiAqIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuZ2V0UHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QpIHtcbiAgbGV0IGN1cnJlbnQ7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKChvLCBrKSA9PiB7XG4gICAgaSsrO1xuXG4gICAgaWYgKHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gbztcbiAgICB9XG5cbiAgICBpZiAob1trXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgKGkgPT0gbGVuZ3RoKSAmJiAoY3VycmVudCA9IG9ba10pO1xuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiBjdXJyZW50O1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgb2JqZWN0IG5lc3RlZCBwcm9wZXJ0eSBleGlzdGVuY2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB0cnVlXG4gKiB1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0KSB7XG4gIGxldCBoYXMgPSBmYWxzZTtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoKG8sIGspID0+IHtcbiAgICBpKys7XG5cbiAgICBpZiAoIW8gfHwgdHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiAhIW87XG4gICAgfVxuXG4gICAgaWYgKCFvLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgKGkgPT0gbGVuZ3RoKSAmJiAoaGFzID0gby5oYXNPd25Qcm9wZXJ0eShrKSk7XG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIGhhcztcbn07XG5cbi8qKlxuICogU2V0IHRoZSBvYmplY3QgbmVzdGVkIHByb3BlcnR5IHZhbHVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMge3k6IDZ9XG4gKiB1dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSwgKGxhc3QsIHZhbCkgPT4gbGFzdD8gNjogKHZhbCB8fCB7fSkpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuc2V0UHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QsIGZuKSB7XG4gIGxldCBjdXJyZW50ID0gdW5kZWZpbmVkO1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZSgobywgaykgPT4ge1xuICAgIGkrKztcblxuICAgIGlmICghbyB8fCB0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghby5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgb1trXSA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBvW2tdID0gZm4oaSA9PSBsZW5ndGgsIG9ba10pO1xuICAgIGN1cnJlbnQgPSBvO1xuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiBjdXJyZW50O1xufTtcblxuLyoqXG4gKiBEZWxldGUgdGhlIHByb3BlcnR5IGZyb20gdGhlIG9iamVjdFxuICogWW91IGNhbiBjYW5jZWwgdGhlIGRlbGV0aW9uIHJldHVybmluZyBmYWxzZSBpbiB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyA1XG4gKiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSk7XG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyA1XG4gKiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSwgdmFsID0+IHZhbCAhPSA1KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbZm5dXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QsIGZuKSB7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IHZhbHVlO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoKG8sIGspID0+IHtcbiAgICBpKys7XG5cbiAgICBpZiAoIW8gfHwgdHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBpZiAoaSA9PSBsZW5ndGgpIHtcbiAgICAgIHZhbHVlID0gb1trXTtcbiAgICAgICghZm4gfHwgZm4odmFsdWUpKSAmJiAoZGVsZXRlIG9ba10pO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgdGFyZ2V0IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cblxudXRpbHMuZ2V0RW51bWVyYWJsZVByb3BlcnR5VGFyZ2V0ID0gZnVuY3Rpb24odGFyZ2V0LCBrZXkpIHtcbiAgY29uc3QgY2hlY2sgPSAob2JqKSA9PiB7XG4gICAgaWYgKG9iai5wcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGxldCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuXG4gICAgaWYgKCFwcm90bykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoZWNrKHByb3RvKTtcbiAgfTtcblxuICByZXR1cm4gY2hlY2sodGFyZ2V0KTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBvd24gcHJvcGVydHkgdGFyZ2V0IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnV0aWxzLmdldE93blByb3BlcnR5VGFyZ2V0ID0gZnVuY3Rpb24odGFyZ2V0LCBrZXkpIHtcbiAgY29uc3QgY2hlY2sgPSAob2JqKSA9PiB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGxldCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuXG4gICAgaWYgKCFwcm90bykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoZWNrKHByb3RvKTtcbiAgfTtcblxuICByZXR1cm4gY2hlY2sodGFyZ2V0KTtcbn07XG5cbi8qKlxuICogR2VuZXJhdGUgYSByYW5kb20gc3RyaW5nXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5jcmVhdGVSYW5kb21TdHJpbmcgPSBmdW5jdGlvbihsZW5ndGggPSAxNiwgZm4gPSBudWxsKSB7XG4gIGxldCBzdHIgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgbGVuZ3RoICsgMik7XG4gIGxldCBub3cgPSBEYXRlLm5vdygpO1xuICBsZXQgdmFsID0gJyc7ICBcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHN0ci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoIShub3cgJSBpKSkge1xuICAgICAgdmFsICs9IHN0cltpXS50b1VwcGVyQ2FzZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhbCArPSBzdHJbaV07XG4gICAgfVxuICB9XG5cbiAgaWYgKGZuICYmIGZuKHZhbCkpIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVSYW5kb21TdHJpbmcobGVuZ3RoLCBmbik7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSBmdW5jdGlvbiB3aXRoIHRoZSBkZWJvdW5jZVxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXlcbiAqIEByZXR1cm5zIHtmbn1cbiAqL1xudXRpbHMuZGVib3VuY2UgPSBmdW5jdGlvbihmbiwgZGVsYXkgPSAwKSB7ICBcbiAgcmV0dXJuICgpID0+IHtcbiAgICBjbGVhclRpbWVvdXQoZm4uX19kZWJvdW5jZVRpbWVvdXQpO1xuICAgIGZuLl9fZGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmbigpO1xuICAgICAgY2xlYXJUaW1lb3V0KGZuLl9fZGVib3VuY2VUaW1lb3V0KTtcbiAgICAgIGRlbGV0ZSBmbi5fX2RlYm91bmNlVGltZW91dDtcbiAgICB9LCBkZWxheSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHV0aWxzOyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgZm9yIGVsZW1lbnRzIHdoaWNoIGhhdmUgYXN5bmMgYXR0cmlidXRlIGNvbnRlbnQuXHJcbiAqIFxyXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XHJcbiAqIFxyXG4gKiBAdGFnIHVybFxyXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXJsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgbWF0Y2hlcyA9ICdbdXJsXSc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcclxuICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG4gICAgdGhpcy51cmxBdHRyaWJ1dGUgPSAnc3JjJztcclxuICB9XHJcblxyXG4gIGNvbXBpbGVkKCkge1xyXG4gICAgdGhpcy5hdHRyKCd1cmwnLCB0aGlzLnNldFVybCk7XHJcbiAgfVxyXG5cclxuICBzZXRVcmwodXJsKSB7XHJcbiAgICB0aGlzLmF0dHJzW3RoaXMudXJsQXR0cmlidXRlXSA9IHVybDtcclxuICB9XHJcbn0iLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi9ha2lsaS5qcyc7XG5pbXBvcnQgU2NvcGUgZnJvbSAnLi9zY29wZS5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc2VydmljZXMvc3RvcmUuanMnO1xuaW1wb3J0IGdsb2JhbHMgZnJvbSAnLi9nbG9iYWxzLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcblxuZXhwb3J0IGNvbnN0IGV2YWx1YXRpb25SZWdleCA9IC9cXCR7KCgoPyFcXCR7KS4pKil9LztcbmV4cG9ydCBjb25zdCBldmFsdWF0aW9uUmVnZXhHbG9iYWwgPSBuZXcgUmVnRXhwKGV2YWx1YXRpb25SZWdleC5zb3VyY2UsIFwiZ1wiKTtcbmV4cG9ydCBjb25zdCBzeXN0ZW1BdHRyaWJ1dGVzID0gWydjb21wb25lbnQnLCAnc2NvcGUnLCAnbm8tc3NyJ107XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmcm9tIHdoaWNoIGFsbCBjb21wb25lbnRzIGFyZSBpbmhlcml0ZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gW107XG4gIHN0YXRpYyBldmVudHMgPSBbXTtcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gZmFsc2U7XG4gIHN0YXRpYyB0cmFuc3BhcmVudCA9IGZhbHNlO1xuICBzdGF0aWMgdGVtcGxhdGUgPSAnJztcbiAgc3RhdGljIHRlbXBsYXRlVXJsID0gJyc7XG4gIHN0YXRpYyBzY29wZSA9IG51bGw7XG5cbiAgLyoqXG4gICAqIERlZmluZSB0aGUgY29tcG9uZW50XG4gICAqL1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnY29tcG9uZW50JywgQ29tcG9uZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSB0aGUgZXhwcmVzc2lvblxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwcmVzc2lvblxuICAgKiBAcGFyYW0ge29iamVjdH0gW3ZhcnNdXG4gICAqL1xuICBzdGF0aWMgcGFyc2UoY29udGV4dCwgZXhwcmVzc2lvbiwgdmFyaWFibGVzID0ge30pIHtcbiAgICBjb25zdCBrZXlzID0gW107XG4gICAgY29uc3QgdmFycyA9IFtdO1xuICAgIGNvbnN0IGV4cHMgPSB1dGlscy5zcGxpdChleHByZXNzaW9uLCAnOycsIFsnXCInLCBcIidcIiwgJ2AnXSk7ICBcbiAgICBleHBzW2V4cHMubGVuZ3RoIC0gMV0gPSBgcmV0dXJuICR7ZXhwc1tleHBzLmxlbmd0aCAtIDFdfWA7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gdmFyaWFibGVzKSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgIHZhcnMucHVzaCh2YXJpYWJsZXNba2V5XSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBuZXcgRnVuY3Rpb24oLi4ua2V5cywgYCR7ZXhwcy5qb2luKCc7ICcpfWApLmFwcGx5KGNvbnRleHQsIHZhcnMpO1xuICB9XG5cbiAgLyoqIFxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW3Njb3BlXSBcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsLCBzY29wZSA9IHt9KSB7XG4gICAgaWYgKCEoZWwgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgbXVzdCBwYXNzIGFuIGh0bWwgZWxlbWVudCB0byB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yYCk7XG4gICAgfVxuXG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19pc0NvbXBpbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2lzUmVzb2x2ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX3ByZXZlbnQgPSBmYWxzZTtcbiAgICB0aGlzLl9fYmluZGluZ3MgPSB7fTtcbiAgICB0aGlzLl9fZXZhbHVhdGluZ0V2ZW50ID0gbnVsbDtcbiAgICB0aGlzLl9fcmVjb21waWxpbmcgPSBudWxsO1xuICAgIHRoaXMuX19jb21waWxpbmcgPSBudWxsO1xuICAgIHRoaXMuX19kaXNhYmxlUHJveHkgPSB7fTtcbiAgICB0aGlzLl9fZGlzYWJsZVN0b3JlS2V5cyA9IHt9O1xuICAgIHRoaXMuX19kaXNhYmxlQXR0cktleXMgPSB7fTtcbiAgICB0aGlzLl9fY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLl9fcGFyZW50ID0gbnVsbDtcbiAgICB0aGlzLl9fcGFyZW50cyA9IFtdO1xuICAgIHRoaXMuX19jb250ZW50ID0gJyc7XG4gICAgdGhpcy5fX2F0dHJzID0ge307XG4gICAgdGhpcy5fX2F0dHJMaW5rcyA9IHt9O1xuICAgIHRoaXMuX19zdG9yZUxpbmtzID0ge307XG4gICAgdGhpcy5fX2F0dHJpYnV0ZU9mID0gbnVsbDtcbiAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudCA9IHRoaXM7XG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIGNvbXBpbGF0aW9uIG9wdGlvbnMgXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlQ29tcGlsYXRpb25PcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB7IFxuICAgICAgY2hlY2tDaGFuZ2VzOiBmYWxzZSwgXG4gICAgICBzZXRFdmVudHM6IHRydWUsXG4gICAgICBzZXRQYXJlbnRzOiB0cnVlLFxuICAgICAgc2V0Qm9vbGVhbkF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICBkZWZpbmVBdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgLi4ub3B0aW9ucyBcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgcmVjb21waWxhdGlvbiBvcHRpb25zIFxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZVJlY29tcGlsYXRpb25PcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB7IFxuICAgICAgLi4udGhpcy5fX2NyZWF0ZUNvbXBpbGF0aW9uT3B0aW9ucygpLFxuICAgICAgc2V0RXZlbnRzOiBmYWxzZSxcbiAgICAgIHNldFBhcmVudHM6IGZhbHNlLFxuICAgICAgZGVmaW5lQXR0cmlidXRlczogZmFsc2UsXG4gICAgICAuLi5vcHRpb25zIFxuICAgIH07XG4gIH1cbiBcbiAgLyoqXG4gICAqIFJlY29tcGlsZSB0aGUgY29tcG9uZW50XG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcmVjb21waWxlKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuX19pc01vdW50ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fcmVjb21waWxpbmcgPSB0cnVlOyBcbiAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5fX2Rpc2FibGVQcm94eSA9IHt9OyAgXG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IHRoaXMuX19jcmVhdGVSZWNvbXBpbGF0aW9uT3B0aW9ucyhvcHRpb25zKTsgICAgXG4gICAgdGhpcy5fX2NvbXBpbGluZy5zZXRFdmVudHMgJiYgdGhpcy5fX3NldEV2ZW50cygpO1xuICAgIHRoaXMuX19jb21waWxpbmcuc2V0UGFyZW50cyAmJiB0aGlzLl9fc2V0UGFyZW50cygpO1xuICAgIHRoaXMuX19jb21waWxpbmcuc2V0Qm9vbGVhbkF0dHJpYnV0ZXMgJiYgdGhpcy5fX3NldEJvb2xlYW5BdHRyaWJ1dGVzKCk7XG4gICAgdGhpcy5fX2NvbXBpbGluZy5kZWZpbmVBdHRyaWJ1dGVzICYmIHRoaXMuX19kZWZpbmVBdHRyaWJ1dGVzKCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBjb21wb25lbnRcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGUoKSB7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IHRoaXMuX19jcmVhdGVDb21waWxhdGlvbk9wdGlvbnMoKTsgXG4gICAgdGhpcy5fX2luaXRpYWxpemUoKTtcbiAgICB0aGlzLl9fc2V0RXZlbnRzKCk7XG4gICAgdGhpcy5fX3NldFBhcmVudHMoKTtcbiAgICB0aGlzLl9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKTtcbiAgICB0aGlzLl9fZGVmaW5lQXR0cmlidXRlcygpOyBcbiAgICBBa2lsaS5pc29sYXRlKCgpID0+IHRoaXMuY3JlYXRlZCh0aGlzLmF0dHJzKSk7ICBcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21waWxlIHRoZSBub2RlXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBfX2NvbXBpbGUoKSB7XG4gICAgbGV0IGNvbnRyb2wgPSB0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMgfHwgIXRoaXMuX19ldmFsdWF0aW9uUGFyZW50O1xuICAgIGxldCBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgdGhpcy5fX2F0dHJpYnV0ZU9mID0gY29udHJvbD8gdGhpczogdGhpcy5fX2V2YWx1YXRpb25QYXJlbnQuX19ha2lsaTtcbiAgICBcbiAgICBpZiAoIXRoaXMuX19yZWNvbXBpbGluZyB8fCB0aGlzLl9fY29tcGlsaW5nLm5ld1BhcmVudCB8fCB0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMpIHtcbiAgICAgIHRoaXMuX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXModGhpcy5lbCwgdGhpcy5fX2F0dHJpYnV0ZU9mKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgaW50ZXJwb2xhdGUgPSAoY2hpbGRyZW4sIHBhcmVudCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlID09IDMgJiYgdGhpcy5fX2luaXRpYWxpemVOb2RlKGNoaWxkLCBwYXJlbnQpKSB7ICAgICAgICAgIFxuICAgICAgICAgIHRoaXMuX19ldmFsdWF0ZU5vZGUoY2hpbGQsIHRoaXMuX19jb21waWxpbmc/IHRoaXMuX19jb21waWxpbmcuY2hlY2tDaGFuZ2VzOiBmYWxzZSk7ICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaGlsZC5ub2RlVHlwZSA9PSAxICYmICFjaGlsZC5fX2FraWxpKSB7XG4gICAgICAgICAgdGhpcy5fX2ludGVycG9sYXRlQXR0cmlidXRlcyhjaGlsZCk7XG4gICAgICAgICAgaW50ZXJwb2xhdGUoY2hpbGQuY2hpbGROb2RlcywgY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTsgICAgXG5cbiAgICBpbnRlcnBvbGF0ZSh0aGlzLmVsLmNoaWxkTm9kZXMsIHRoaXMuZWwpO1xuICAgIHRoaXMuX19pc01vdW50ZWQgPSB0cnVlO1xuICAgIGxldCByZXM7XG5cbiAgICBpZiAoIXRoaXMuX19yZWNvbXBpbGluZykge1xuICAgICAgcmVzID0gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0cnMub25Db21waWxlZCAmJiB0aGlzLmF0dHJzLm9uQ29tcGlsZWQudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBpbGVkKCk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGVVcmwpIHtcbiAgICAgICAgcCA9IHJlcXVlc3QuZ2V0KHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGVVcmwsIHsgY2FjaGU6IHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGVDYWNoZSB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMuX19jb250ZW50O1xuICAgICAgICAgIEFraWxpLnNldFRlbXBsYXRlKHRoaXMuZWwsIHJlcy5kYXRhKTtcbiAgICAgICAgICBkZWxldGUgdGhpcy5fX2NvbnRlbnQ7ICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXMgPSBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgdGhpcy5hdHRycy5vblJlY29tcGlsZWQgJiYgdGhpcy5hdHRycy5vblJlY29tcGlsZWQudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICAgIHRoaXMucmVjb21waWxlZCgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IG51bGw7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IG51bGw7XG5cbiAgICByZXR1cm4gcC50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuX19pc0NvbXBpbGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZSB0aGUgY29tcG9uZW50XG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBfX3Jlc29sdmUoKSB7XG4gICAgaWYgKHRoaXMuX19pc1Jlc29sdmVkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuYXR0cnMub25SZXNvbHZlZCAmJiB0aGlzLmF0dHJzLm9uUmVzb2x2ZWQudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKEFraWxpLmlzb2xhdGUoKCkgPT4gdGhpcy5yZXNvbHZlZCgpKSkudGhlbihyZXMgPT4ge1xuICAgICAgdGhpcy5fX2lzUmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBjb21wb25lbnRcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbml0aWFsaXplKCkgeyAgICBcbiAgICBsZXQgcGFyZW50ID0gQWtpbGkuZ2V0QWtpbGlQYXJlbnRzKHRoaXMuZWwsIGZhbHNlKTsgICAgIFxuICAgIGxldCBTY29wZSA9IHRoaXMuY29uc3RydWN0b3Iuc2NvcGUgfHwgQWtpbGkuU2NvcGU7XG4gICAgbGV0IHNjb3BlO1xuICAgIGxldCBpc1Jvb3QgPSBBa2lsaS5fX3Jvb3QgPT09IHRoaXMuZWw7XG4gICAgdGhpcy5lbC5fX2FraWxpID0gdGhpcztcblxuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIHNjb3BlID0gbmV3IFNjb3BlKHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdzY29wZScpIHx8IEFraWxpLmNyZWF0ZVNjb3BlTmFtZSgpLCB0aGlzLmVsLCB0aGlzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzY29wZSA9IG5ldyBTY29wZShpc1Jvb3Q/ICdyb290JzogQWtpbGkuY3JlYXRlU2NvcGVOYW1lKCksIHRoaXMuZWwsIHRoaXMpO1xuICAgICAgaXNSb290ICYmIChBa2lsaS5yb290ID0gdGhpcyk7XG4gICAgfVxuXG4gICAgbGV0IF9fc2NvcGUgPSBzY29wZTtcbiAgICBsZXQgX3Njb3BlID0gT2JqZWN0LmFzc2lnbihzY29wZSwgdGhpcy5zY29wZSk7XG4gICAgbGV0IGNvbnRyb2xBdHRyaWJ1dGVzID0gdGhpcy5jb25zdHJ1Y3Rvci5jb250cm9sQXR0cmlidXRlcztcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5jb25zdHJ1Y3Rvci5ldmVudHM7XG5cbiAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZSkge1xuICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgdGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGVVcmwpIHtcbiAgICAgIHRoaXMuX19jb250ZW50ID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIH1cblxuICAgIHRoaXMuX19zY29wZSA9IF9fc2NvcGU7XG4gICAgdGhpcy5fX2V2ZW50cyA9IGV2ZW50cztcbiAgICB0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMgPSBjb250cm9sQXR0cmlidXRlcztcbiAgICBBa2lsaS5hZGRTY29wZShzY29wZSk7ICAgIFxuICAgIHRoaXMuc2NvcGUgPSB0aGlzLl9fbmVzdGVkT2JzZXJ2ZShfc2NvcGUsIFtdKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGJvb2xlYW4gYXR0cmlidXRlc1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldEJvb2xlYW5BdHRyaWJ1dGVzKCkge1xuICAgIHRoaXMuYm9vbGVhbkF0dHJpYnV0ZXMgPSBbXS5jb25jYXQoQWtpbGkuaHRtbEJvb2xlYW5BdHRyaWJ1dGVzLCB0aGlzLmNvbnN0cnVjdG9yLmJvb2xlYW5BdHRyaWJ1dGVzKTtcblxuICAgIGNvbnN0IHNldEF0dHIgPSAoZWwpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBhdHRycyA9IGVsLmF0dHJpYnV0ZXMsIGwgPSBhdHRycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IG5vZGUgPSBhdHRyc1tpXTtcblxuICAgICAgICBpZiAodGhpcy5ib29sZWFuQXR0cmlidXRlcy5pbmRleE9mKG5vZGUubm9kZU5hbWUpICE9IC0xKSB7XG4gICAgICAgICAgaWYgKGVsLmhhc0F0dHJpYnV0ZShgYm9vbGVhbi0ke25vZGUubm9kZU5hbWV9YCkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShgYm9vbGVhbi0ke25vZGUubm9kZU5hbWV9YCwgZWwuZ2V0QXR0cmlidXRlKG5vZGUubm9kZU5hbWUpIHx8IG5vZGUubm9kZU5hbWUpO1xuICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShub2RlLm5vZGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGVsLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBlbC5jaGlsZHJlbltpXTtcblxuICAgICAgICBpZiAoIWNoaWxkLl9fYWtpbGkpIHtcbiAgICAgICAgICBzZXRBdHRyKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBzZXRBdHRyKHRoaXMuZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZXZlbnRzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0RXZlbnRzKCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5fX2V2ZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBldiA9IHRoaXMuX19ldmVudHNbaV07XG4gICAgICAhL15vbi0vaS50ZXN0KGV2KSAmJiAoZXYgPSAnb24tJyArIGV2KTtcblxuICAgICAgaWYgKCF0aGlzLmVsLmhhc0F0dHJpYnV0ZShldikpIHtcbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoZXYsICcnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBjb21wb25lbnQgcGFyZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldFBhcmVudHMoKSB7XG4gICAgbGV0IHBhcmVudHMgPSBBa2lsaS5nZXRBa2lsaVBhcmVudHModGhpcy5lbCk7XG5cbiAgICBpZiAoIXBhcmVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IG5ld1BhcmVudCA9IHRoaXMuX19wYXJlbnQgIT09IHBhcmVudHNbMF07XG4gICAgbGV0IGV2YWx1YXRpb25QYXJlbnQgPSBudWxsO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBwYXJlbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHBhcmVudCA9IHBhcmVudHNbaV07XG5cbiAgICAgIGlmICghcGFyZW50Ll9fYWtpbGkuY29uc3RydWN0b3IudHJhbnNwYXJlbnQpIHtcbiAgICAgICAgZXZhbHVhdGlvblBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fX2NvbXBpbGluZy5uZXdQYXJlbnQgPSBuZXdQYXJlbnQ7XG4gICAgbmV3UGFyZW50ICYmIHRoaXMuX19kZXRhY2goKTtcblxuICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLnRyYW5zcGFyZW50KSB7XG4gICAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudCA9IGV2YWx1YXRpb25QYXJlbnQuX19ha2lsaTtcbiAgICB9XG5cbiAgICB0aGlzLl9fZXZhbHVhdGlvblBhcmVudCA9IGV2YWx1YXRpb25QYXJlbnQ7XG4gICAgdGhpcy5fX3BhcmVudCA9IHBhcmVudHNbMF07XG4gICAgdGhpcy5fX3BhcmVudHMgPSBwYXJlbnRzO1xuICAgIHRoaXMuc2NvcGUuX19wYXJlbnQgPSB0aGlzLl9fZXZhbHVhdGlvblBhcmVudC5fX2FraWxpLnNjb3BlO1xuICAgICF0aGlzLl9fcmVjb21waWxpbmcgJiYgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fYWRkQ2hpbGQodGhpcy5lbCk7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMuc2NvcGUsIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX3Njb3BlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgdGhlIGNoaWxkIGVsZW1lbnQgdG8gdGhlIGxpc3RcbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2FkZENoaWxkKGVsKSB7XG4gICAgdGhpcy5fX2NoaWxkcmVuLnB1c2goZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwbGljZSB0aGUgY2hpbGQgZnJvbSB0aGUgbGlzdFxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc3BsaWNlQ2hpbGQoZWwpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuX19jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuX19jaGlsZHJlbltpXTtcblxuICAgICAgaWYgKGNoaWxkID09PSBlbCkge1xuICAgICAgICB0aGlzLl9fY2hpbGRyZW4uc3BsaWNlKGksIDEpO1xuICAgICAgICBpLS07XG4gICAgICAgIGwtLTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBwYXJzZWQgZXhwcmVzc2lvblxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwcmVzc2lvblxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRQYXJzZWRFeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgbmVlZCBvZiB0aGUgYXZhbHVhdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2hlY2tFdmFsdWF0aW9uKG5vZGUpIHtcbiAgICBpZiAoIU9iamVjdC5rZXlzKG5vZGUuX19wcm9wZXJ0aWVzKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGsgaW4gbm9kZS5fX3Byb3BlcnRpZXMpIHtcbiAgICAgIGlmICghbm9kZS5fX3Byb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGxldCBwcm9wID0gbm9kZS5fX3Byb3BlcnRpZXNba107XG4gICAgICBsZXQgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhwcm9wLmtleXMsIHByb3AuY29tcG9uZW50Ll9fc2NvcGUpO1xuXG4gICAgICBpZiAoIW5vZGUuX19jb21wb25lbnQuX19jb21wYXJlTm9kZVByb3BlcnR5VmFsdWUocHJvcCwgdmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgbm9kZSBwcm9wZXJ0aWVzIGNoYW5nZVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NoZWNrTm9kZVByb3BlcnR5Q2hhbmdlKG5vZGUsIGtleXMsIHZhbHVlKSB7XG4gICAgbGV0IHByb3AgPSB0aGlzLl9fZ2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMpO1xuICAgIFxuICAgIGlmICghcHJvcCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuICFub2RlLl9fY29tcG9uZW50Ll9fY29tcGFyZU5vZGVQcm9wZXJ0eVZhbHVlKHByb3AsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wYXJlIHRoZSBub2RlIHByb3BlcnR5IHZhbHVlXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gcHJvcCBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jb21wYXJlTm9kZVByb3BlcnR5VmFsdWUocHJvcCwgdmFsdWUsIG9wdGlvbnMgPSB7fSkgeyAgXG4gICAgcmV0dXJuIHV0aWxzLmNvbXBhcmUodXRpbHMuY3JlYXRlSGFzaCh2YWx1ZSksIHByb3AuaGFzaCwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGV4Y2VwdGlvbiBtZXNzYWdlXG4gICAqIFxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGUgXG4gICAqIEBwYXJhbSB7RXJyb3J9IGVyciBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGVFeGNlcHRpb25NZXNzYWdlKG5vZGUsIGVycikge1xuICAgIGxldCB0YWdOYW1lID0gbm9kZS5fX2NvbXBvbmVudC5lbC50YWdOYW1lO1xuICAgIGxldCBhdHRyTmFtZSA9IG5vZGUuX19jb21wb25lbnQuZWwuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKTtcbiAgICBsZXQgY29tcG9uZW50TmFtZSA9IChhdHRyTmFtZSB8fCB0YWdOYW1lKS50b0xvd2VyQ2FzZSgpO1xuICAgIGxldCBlbGVtZW50TmFtZSA9IG5vZGUuX19lbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBsZXQgYXR0cmlidXRlTmFtZSA9IChub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpPyBub2RlLm5hbWUudG9Mb3dlckNhc2UoKTogJyc7ICAgICAgICBcbiAgICBsZXQgbWVzc2FnZXMgPSBbIGVyci5tZXNzYWdlLCBub2RlLl9fZXhwcmVzc2lvbi50cmltKCkgXTtcbiAgICBhdHRyaWJ1dGVOYW1lICYmIG1lc3NhZ2VzLnB1c2goYFthdHRyaWJ1dGUgJHthdHRyaWJ1dGVOYW1lfV1gKTtcbiAgICBtZXNzYWdlcyA9IG1lc3NhZ2VzLmNvbmNhdChbIGBbZWxlbWVudCAke2VsZW1lbnROYW1lfV1gLCBgW2NvbXBvbmVudCAke2NvbXBvbmVudE5hbWV9XWAgXSk7XG4gICAgcmV0dXJuIGBFeHByZXNzaW9uIGVycm9yOiBgICsgbWVzc2FnZXMuam9pbignXFxuXFx0YXQgJyk7XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgdGhlIG5vZGUgZXhwcmVzc2lvblxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGUobm9kZSkge1xuICAgIGxldCBjb3VudGVyID0gMDtcbiAgICBsZXQgYXR0cmlidXRlVmFsdWU7XG4gICAgbGV0IGV4cHJlc3Npb247XG4gICAgY29uc3QgZXZhbENvbXBvbmVudCA9IG5vZGUuX19hdHRyaWJ1dGVPZiB8fCBub2RlLl9fY29tcG9uZW50O1xuXG4gICAgaWYgKG5vZGUuX19jb21wb25lbnQucGFyZW50cygoY29tKSA9PiBjb20uX19wcmV2ZW50KS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB7IHJlczogbm9kZS5fX2V4cHJlc3Npb24gfTtcbiAgICB9XG5cbiAgICBpZiAoIShub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpICYmIG5vZGUuX19jb21wb25lbnQuX19wcmV2ZW50KSB7XG4gICAgICByZXR1cm4geyByZXM6IG5vZGUuX19leHByZXNzaW9uIH07XG4gICAgfVxuICAgIFxuICAgIGxldCByZXMgPSBub2RlLl9fZXhwcmVzc2lvbi5yZXBsYWNlKGV2YWx1YXRpb25SZWdleEdsb2JhbCwgKG0sIGQpID0+IHsgICAgIFxuICAgICAgY291bnRlcisrO1xuICAgICAgbGV0IGV2YWx1YXRlO1xuICAgICAgbGV0IGV2YWx1YXRpb24gPSBbXTtcbiAgICAgIGxldCBleGlzdGluZ0JpbmRpbmdzID0ge307XG4gICAgICBsZXQgcGFyZW50QmluZGluZ3MgPSB7fTtcbiAgICAgIGxldCBwYXJzZVZhbHVlID0gbm9kZS5fX2NvbXBvbmVudC5fX2dldFBhcnNlZEV4cHJlc3Npb24oZCk7XG4gICAgICBBa2lsaS5fX2V2YWx1YXRpb24gPSB7IG5vZGU6IG5vZGUsIGxpc3Q6IFtdLCBjb21wb25lbnQ6IG5vZGUuX19jb21wb25lbnQgfTtcbiAgICAgIFxuICAgICAgdHJ5IHsgICAgICAgIFxuICAgICAgICBldmFsdWF0ZSA9IHRoaXMuY29uc3RydWN0b3IucGFyc2UoZXZhbENvbXBvbmVudC5fX2V2YWx1YXRpb25Db21wb25lbnQuc2NvcGUsIHBhcnNlVmFsdWUsIHsgLi4uZ2xvYmFscyB9KTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlcnIpIHsgICAgICAgIFxuICAgICAgICB0aHJvdyB0aGlzLl9fY3JlYXRlRXhjZXB0aW9uTWVzc2FnZShub2RlLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBpZihBa2lsaS5fX2V2YWx1YXRpb24pIHtcbiAgICAgICAgZXZhbHVhdGlvbiA9IEFraWxpLl9fZXZhbHVhdGlvbi5saXN0O1xuICAgICAgICBBa2lsaS5fX2V2YWx1YXRpb24ubGlzdCA9IG51bGw7XG4gICAgICAgIEFraWxpLl9fZXZhbHVhdGlvbiA9IG51bGw7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGZvciAobGV0IGkgPSBldmFsdWF0aW9uLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGxldCBkYXRhID0gZXZhbHVhdGlvbltpXTtcbiAgICAgICAgbGV0IGhhc2ggPSBkYXRhLmNvbXBvbmVudC5fX2NyZWF0ZUtleXNIYXNoKGRhdGEua2V5cyk7XG4gICAgICAgIGxldCBwYXJlbnRzSGFzaCA9IGRhdGEuY29tcG9uZW50Ll9fY3JlYXRlS2V5c0hhc2goZGF0YS5wYXJlbnRzKTtcbiAgICAgICBcbiAgICAgICAgaWYgKGRhdGEubm90QmluZGluZykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nQmluZGluZ3NbaGFzaF0pIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwYXJlbnRWYWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGRhdGEucGFyZW50cywgZGF0YS5jb21wb25lbnQuX19zY29wZSk7ICAgICAgICBcblxuICAgICAgICBpZiAocGFyZW50VmFsdWUgJiYgdHlwZW9mIHBhcmVudFZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgaWYgKEFraWxpLm9wdGlvbnMuZGVidWcgJiYgcGFyZW50QmluZGluZ3NbcGFyZW50c0hhc2hdID09IDUwKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgY29uc29sZS53YXJuKFtcbiAgICAgICAgICAgICAgYEZvciBoaWdoZXIgcGVyZm9ybWFuY2UsIGRvbid0IGxvb3AgUHJveHkgYXJyYXlzL29iamVjdHMgaW5zaWRlIGV4cHJlc3Npb24gZnVuY3Rpb25zLCBvciB1c2UgQWtpbGkudW5ldmFsdWF0ZSgpIHRvIHdyYXAgeW91IGNvZGUuYCxcbiAgICAgICAgICAgICAgYCR7IG5vZGUuX19leHByZXNzaW9uLnRyaW0oKSB9YCxcbiAgICAgICAgICAgICAgYHNjb3BlIHByb3BlcnR5IFwiJHsgZGF0YS5wYXJlbnRzLmpvaW4oJy4nKSB9XCJgXG4gICAgICAgICAgICBdLmpvaW4oJ1xcblxcdGF0ICcpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgIXBhcmVudEJpbmRpbmdzW3BhcmVudHNIYXNoXT8gcGFyZW50QmluZGluZ3NbcGFyZW50c0hhc2hdID0gMTogcGFyZW50QmluZGluZ3NbcGFyZW50c0hhc2hdKys7XG4gICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHV0aWxzLmlzU2NvcGVQcm94eShwYXJlbnRWYWx1ZSkgJiYgXG4gICAgICAgICAgZGF0YS5jb21wb25lbnQgIT09IGV2YWxDb21wb25lbnQuX19ldmFsdWF0aW9uQ29tcG9uZW50ICYmIFxuICAgICAgICAgIGRhdGEuY29tcG9uZW50ID09PSBkYXRhLnJlYWxDb21wb25lbnRcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gIFxuXG4gICAgICAgIGRhdGEuY29tcG9uZW50Ll9fYmluZEFuZFNldFByb3BlcnR5KG5vZGUsIGRhdGEua2V5cywgZGF0YS5ldmFsdWF0ZWQpO1xuICAgICAgICBleGlzdGluZ0JpbmRpbmdzW2hhc2hdID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cikge1xuICAgICAgICBleHByZXNzaW9uID0gbTtcbiAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBldmFsdWF0ZTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZShldmFsdWF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZXZhbHVhdGUgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZXZhbHVhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGUpIHtcbiAgICAgICAgICByZXR1cm4gZXZhbHVhdGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGV2YWx1YXRlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgcmVzLCBjb3VudGVyLCBleHByZXNzaW9uLCBhdHRyaWJ1dGVWYWx1ZSB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgdGhlIG5vZGUgYW5kIHNldCB0aGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtib29sZWFufSBbZXZhbHVhdGVkXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2JpbmRBbmRTZXRQcm9wZXJ0eShub2RlLCBrZXlzLCBldmFsdWF0ZWQpIHtcbiAgICBsZXQgYmluZCA9IHRoaXMuX19nZXRCb3VuZE5vZGUoa2V5cywgbm9kZSk7XG4gICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKTtcblxuICAgIGlmICghYmluZCkge1xuICAgICAgdGhpcy5fX2JpbmQoa2V5cywgeyBub2RlIH0pO1xuICAgIH0gICBcblxuICAgIHRoaXMuX19zZXROb2RlUHJvcGVydHkobm9kZSwga2V5cywgdmFsdWUsIGV2YWx1YXRlZCk7XG4gIH1cblxuICAvKipcbiAgICogTmVzdGVkIGV2YWx1YXRpb24gYnkgdGhlIGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFt3aXRob3V0UGFyZW50cz1mYWxzZV0gLSBpZiB0cnVlIGV2YWx1YXRpb24gd2lsbCBiZSBvbmx5IGZvciB0aGUgY3VycmVudCBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVOZXN0ZWQoa2V5cywgd2l0aG91dFBhcmVudHMgPSBmYWxzZSkge1xuICAgIGxldCBzY29wZSA9IHRoaXMuX19zY29wZTtcbiAgICBsZXQgcHJvcHMgPSBbXTsgICAgXG4gICAgXG4gICAgaWYgKCF3aXRob3V0UGFyZW50cykge1xuICAgICAgbGV0IGxhc3RQcm9wcyA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICBsZXQgdmFsdWU7XG5cbiAgICAgICAgbGFzdFByb3BzID0gWy4uLmxhc3RQcm9wcywga2V5XTtcbiAgICAgICAgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhsYXN0UHJvcHMsIHNjb3BlKTtcbiAgICAgICAgcHJvcHMucHVzaCh7IGtleXM6IGxhc3RQcm9wcywgdmFsdWU6IHZhbHVlfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcHJvcHMucHVzaCh7IGtleXM6IGtleXMsIHZhbHVlOiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCBzY29wZSl9KTtcbiAgICB9XG5cbiAgICBsZXQgcHJvcHNMZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgICBjb25zdCBlbEV2YWx1YXRlID0gKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGVsZW1lbnQuX19ha2lsaTsgICAgIFxuXG4gICAgICBmb3IgKGxldCBtID0gMDsgbSA8IHByb3BzTGVuZ3RoOyBtKyspIHtcbiAgICAgICAgbGV0IHByb3AgPSBwcm9wc1ttXTtcbiAgICAgICAgbGV0IGRhdGE7XG4gICAgICAgIFxuICAgICAgICBpZiAoY29tcG9uZW50ID09PSB0aGlzKSB7XG4gICAgICAgICAgbGV0IGJpbmQgPSBjb21wb25lbnQuX19nZXRCaW5kKHByb3Aua2V5cyk7XG4gICAgICAgICAgZGF0YSA9IGJpbmQ/IChiaW5kLl9fZGF0YSB8fCBbXSk6IFtdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRhdGEgPSBjb21wb25lbnQuX19nZXRBbGxCaW5kcyhwcm9wLmtleXMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIWRhdGEgfHwgIWRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgICBmb3IgKGxldCBrID0gMCwgYyA9IGRhdGEubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICAgICAgY29uc3QgYmluZCA9IGRhdGFba107ICAgXG5cbiAgICAgICAgICBpZighYmluZCB8fCAhYmluZC5ub2RlIHx8ICFiaW5kLm5vZGUuX19pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGlmIChjb21wb25lbnQuX19jaGVja05vZGVQcm9wZXJ0eUNoYW5nZShiaW5kLm5vZGUsIHByb3Aua2V5cywgcHJvcC52YWx1ZSkpIHsgIFxuICAgICAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZUtleXMocHJvcC5rZXlzKTsgICAgIFxuICAgICAgICAgICAgY29uc3QgY2hlY2tQcm9wID0gY29tcG9uZW50Ll9fZ2V0Tm9kZVByb3BlcnR5KGJpbmQubm9kZSwgcHJvcC5rZXlzKTtcbiAgICAgICAgICAgIGNoZWNrUHJvcCAmJiBjaGVja1Byb3AuZXZhbHVhdGVkICYmIGNvbXBvbmVudC5zY29wZS5fX3NldChwcm9wLmtleXMsIHByb3AudmFsdWUsIGZhbHNlLCB0cnVlKTsgXG4gICAgICAgICAgICBjb21wb25lbnQuX19ldmFsdWF0ZU5vZGUoYmluZC5ub2RlLCBmYWxzZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IF9rIGluIGJpbmQubm9kZS5fX3Byb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgaWYgKCFiaW5kLm5vZGUuX19wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KF9rKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBsZXQgX3Byb3AgPSBiaW5kLm5vZGUuX19wcm9wZXJ0aWVzW19rXTtcbiAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoX3Byb3Aua2V5cywgX3Byb3AuY29tcG9uZW50Ll9fc2NvcGUpO1xuICAgICAgICAgICAgICBfcHJvcC5jb21wb25lbnQuX19zZXROb2RlUHJvcGVydHkoYmluZC5ub2RlLCBfcHJvcC5rZXlzLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2VuYWJsZUtleXMocHJvcC5rZXlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9O1xuXG4gICAgY29uc3QgZXZhbHVhdGUgPSAoZWxlbWVudHMpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBlbEV2YWx1YXRlKGVsZW1lbnRzW2ldKTtcbiAgICAgICAgZXZhbHVhdGUoY29tcG9uZW50Ll9fY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBlbEV2YWx1YXRlKHRoaXMuZWwpO1xuICAgIGV2YWx1YXRlKHRoaXMuX19jaGlsZHJlbik7XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgdGhlIHZhbHVlIGJ5IHRoZSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlbGV0ZWQ9ZmFsc2VdIC0gdHJ1ZSBpZiB2YWx1ZSBpcyBkZWxldGluZ1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlQnlLZXlzIChrZXlzLCB2YWx1ZSwgaXNEZWxldGVkID0gZmFsc2UpIHsgICAgIFxuICAgIGxldCBkYXRhID0gdGhpcy5fX2dldEJpbmQoa2V5cyk7XG5cbiAgICBjb25zdCB1bmJpbmQgPSAob2JqLCBwYXJlbnRzKSA9PiB7XG4gICAgICBmb3IgKGxldCBrIGluIG9iaikge1xuICAgICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSB8fCB0aGlzLl9faXNTeXN0ZW1CaW5kaW5nS2V5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgX2tleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tdKTtcbiAgICAgICAgbGV0IF9fa2V5cyA9IF9rZXlzLnNsaWNlKCk7XG4gICAgICAgIGxldCBfaXNEZWxldGVkID0gZmFsc2U7XG4gICAgICAgIGxldCB2YWwgPSBvYmpba107XG4gICAgICAgIGxldCBoYXNLZXk7XG4gICAgICAgIFxuICAgICAgICBfX2tleXMuc2hpZnQoKTtcbiAgICAgICAgaGFzS2V5ID0gdXRpbHMuaGFzUHJvcGVydHlCeUtleXMoX19rZXlzLCB2YWx1ZSk7XG5cbiAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JyAmJiAhaGFzS2V5KSB7XG4gICAgICAgICAgX2lzRGVsZXRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsICYmIHR5cGVvZiB2YWwgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB1bmJpbmQodmFsLCBfa2V5cyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9fZXZhbHVhdGVOZXN0ZWQoX2tleXMsIHRydWUpO1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgIT0gJ29iamVjdCcgfHwgIWhhc0tleSkge1xuICAgICAgICAgIHRoaXMuX191bmJpbmQoX2tleXMpO1xuICAgICAgICAgIF9pc0RlbGV0ZWQgJiYgdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoX19rZXlzLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIGRhdGEgJiYgdW5iaW5kKGRhdGEsIFtdLmNvbmNhdChrZXlzKSk7XG4gICAgdGhpcy5fX2V2YWx1YXRlTmVzdGVkKGtleXMsIGZhbHNlKTtcblxuICAgIGlmIChpc0RlbGV0ZWQpIHtcbiAgICAgIHRoaXMuX191bmJpbmQoa2V5cyk7XG4gICAgICBpc0RlbGV0ZWQgJiYgdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgdGhlIGV2ZW50IGV4cHJlc3Npb25cbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlRXZlbnQobm9kZSwgZWwsIGUpIHtcbiAgICBsZXQgZXhwcmVzc2lvbiA9IGV2YWx1YXRpb25SZWdleC5leGVjKG5vZGUuX19leHByZXNzaW9uKTtcbiAgICBsZXQgZXZhbHVhdGU7XG5cbiAgICBpZiAoIWV4cHJlc3Npb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9fZXZhbHVhdGluZ0V2ZW50ID0ge1xuICAgICAgZWw6IGVsLFxuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgZXZlbnQ6IGUsXG4gICAgICBub2RlXG4gICAgfTtcblxuICAgIHRoaXMuX19kaXNhYmxlUHJveHkgPSB7fTtcblxuICAgIHRyeSB7XG4gICAgICBldmFsdWF0ZSA9IHRoaXMuY29uc3RydWN0b3IucGFyc2UodGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQuc2NvcGUsIGV4cHJlc3Npb25bMV0sIHsgLi4uZ2xvYmFscywgIGV2ZW50OiBlIH0pO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7ICAgICAgICBcbiAgICAgIHRocm93IHRoaXMuX19jcmVhdGVFeGNlcHRpb25NZXNzYWdlKG5vZGUsIGVycik7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSBudWxsO1xuICAgIHJldHVybiBldmFsdWF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSB0aGUgbm9kZSBleHByZXNzaW9uIHdpdGggY2hlY2tcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2NoZWNrXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlTm9kZShub2RlLCBjaGVjayA9IHRydWUpIHtcbiAgICBjb25zdCBrZXkgPSBub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHI/ICd2YWx1ZSc6ICdub2RlVmFsdWUnOyAgXG5cbiAgICBpZiAoY2hlY2s/IHRoaXMuX19jaGVja0V2YWx1YXRpb24obm9kZSk6IHRydWUpIHsgXG4gICAgICBjb25zdCB7IHJlcywgYXR0cmlidXRlVmFsdWUsIGV4cHJlc3Npb24sIGNvdW50ZXIgfSA9IHRoaXMuX19ldmFsdWF0ZShub2RlKTsgIFxuICAgICAgbm9kZVtrZXldICE9IHJlcyAmJiAobm9kZVtrZXldID0gcmVzKTtcblxuICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cikge1xuICAgICAgICBsZXQgdmFsdWUgPSByZXM7XG4gICAgICAgIGxldCBpc0Jvb2xlYW5BdHRyaWJ1dGUgPSBmYWxzZTtcbiAgXG4gICAgICAgIGlmIChjb3VudGVyID09IDEgJiYgZXhwcmVzc2lvbiAmJiBub2RlLl9fZXhwcmVzc2lvbiA9PSBleHByZXNzaW9uKSB7XG4gICAgICAgICAgdmFsdWUgPSBhdHRyaWJ1dGVWYWx1ZTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgY29uc3QgY2xlYXJBdHRyaWJ1dGUgPSBub2RlLm5vZGVOYW1lLnJlcGxhY2UoL15ib29sZWFuLSguKykvaSwgJyQxJyk7XG4gICAgICAgIGNvbnN0IGNhbWVsQXR0cmlidXRlID0gdXRpbHMudG9DYW1lbENhc2UoY2xlYXJBdHRyaWJ1dGUpO1xuICBcbiAgICAgICAgaWYgKGNsZWFyQXR0cmlidXRlICE9IG5vZGUubm9kZU5hbWUpIHtcbiAgICAgICAgICBpc0Jvb2xlYW5BdHRyaWJ1dGUgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlID0gISF2YWx1ZTtcbiAgICAgICAgfSAgICAgICAgICBcbiAgXG4gICAgICAgIGlmIChub2RlLl9fYXR0cmlidXRlT24pIHsgICAgICAgIFxuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5vZGUuX19hdHRyaWJ1dGVPbjtcbiAgICAgICAgICB2YWx1ZSA9IGNvbXBvbmVudC5fX3ByZXBhcmVBdHRyaWJ1dGVJbihub2RlLCB2YWx1ZSk7XG4gICAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IHRydWU7XG4gICAgICAgICAgY29tcG9uZW50LmF0dHJzW2NhbWVsQXR0cmlidXRlXSA9IHZhbHVlO1xuICAgICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSBmYWxzZTtcbiAgXG4gICAgICAgICAgaWYgKGNvbXBvbmVudC5fX2lzTW91bnRlZCkge1xuICAgICAgICAgICAgY29tcG9uZW50Ll9fYXR0clRyaWdnZXJCeU5hbWUoY2FtZWxBdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNCb29sZWFuQXR0cmlidXRlKSB7XG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IG5vZGUuX19lbGVtZW50O1xuICAgICAgICAgIHZhbHVlPyBlbGVtZW50LnNldEF0dHJpYnV0ZShjYW1lbEF0dHJpYnV0ZSwgJ3RydWUnKTogZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoY2FtZWxBdHRyaWJ1dGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVba2V5XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlIHRoZSBhdHRyaWJ1dGUgdmFsdWUgZm9yIHJlY2VpdmluZ1xuICAgKiBcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19wcmVwYXJlQXR0cmlidXRlSW4obm9kZSwgdmFsdWUpIHsgICAgXG4gICAgcmV0dXJuIHV0aWxzLmNvcHkodmFsdWUsIHsgcGxhaW46IHRydWUgfSk7XG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSB0aGUgYXR0cmlidXRlIHZhbHVlIGZvciBzZW5kaW5nXG4gICAqIFxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3ByZXBhcmVBdHRyaWJ1dGVPdXQobm9kZSwgdmFsdWUpIHsgICAgXG4gICAgcmV0dXJuIHV0aWxzLmNvcHkodmFsdWUsIHsgcGxhaW46IHRydWUgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgYXR0cmlidXRlc1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gYXR0cmlidXRlT2YgLSBpZiBub2RlIGlzIGxpbmtlZCB3aXRoIHBhcmVudCBzY29wZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemVBdHRyaWJ1dGUobm9kZSwgZWwsIGF0dHJpYnV0ZU9mKSB7XG4gICAgaWYgKCFub2RlIHx8IHN5c3RlbUF0dHJpYnV0ZXMuaW5kZXhPZihub2RlLm5vZGVOYW1lKSAhPSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKCF0aGlzLl9faW5pdGlhbGl6ZU5vZGUobm9kZSwgZWwpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGV2ZW50TmFtZSA9IG5vZGUubm9kZU5hbWUucmVwbGFjZSgvXm9uLSguKykvaSwgJyQxJyk7ICAgIFxuICAgIGxldCBjb21wb25lbnQgPSBhdHRyaWJ1dGVPZj8gYXR0cmlidXRlT2Y6IHRoaXM7XG5cbiAgICBpZiAobm9kZS5fX2lzRXZlbnQpIHtcbiAgICAgIGlmIChub2RlLl9fZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBlbWl0dGVyID0gbmV3IEFraWxpLkV2ZW50RW1pdHRlcihldmVudE5hbWUsIG5vZGUsIGVsLCBjb21wb25lbnQpO1xuXG4gICAgICBpZiAobm9kZS5fX2hhc0JpbmRpbmdzKSB7XG4gICAgICAgIGVtaXR0ZXIuYmluZCgoZSkgPT4gY29tcG9uZW50Ll9fZXZhbHVhdGVFdmVudChub2RlLCBlbCwgZSkpO1xuICAgICAgfVxuXG4gICAgICBub2RlLl9fZXZlbnQgPSBlbWl0dGVyO1xuICAgICAgZWwuc2V0QXR0cmlidXRlKG5vZGUubm9kZU5hbWUsIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZShlbWl0dGVyKSk7XG5cbiAgICAgIGlmIChhdHRyaWJ1dGVPZikge1xuICAgICAgICB0aGlzLl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IHRydWU7XG4gICAgICAgIHRoaXMuYXR0cnNbdXRpbHMudG9DYW1lbENhc2Uobm9kZS5ub2RlTmFtZSldID0gZW1pdHRlcjtcbiAgICAgICAgdGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChhdHRyaWJ1dGVPZikge1xuICAgICAgbm9kZS5fX2F0dHJpYnV0ZU9uID0gdGhpcztcbiAgICAgIG5vZGUuX19hdHRyaWJ1dGVPZiA9IGNvbXBvbmVudDtcbiAgICB9XG4gICAgXG4gICAgbGV0IGNoZWNrID0gdGhpcy5fX2NvbXBpbGluZz8gdGhpcy5fX2NvbXBpbGluZy5jaGVja0NoYW5nZXM6IGZhbHNlO1xuICAgIGNvbXBvbmVudC5fX2V2YWx1YXRlTm9kZShub2RlLCBjaGVjayk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgbm9kZVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbml0aWFsaXplTm9kZShub2RlLCBlbCkge1xuICAgIGlmIChub2RlLl9faW5pdGlhbGl6ZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGlzQXR0ciA9IG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cjtcbiAgICBjb25zdCB2YWwgPSBub2RlW2lzQXR0cj8gJ3ZhbHVlJzogJ25vZGVWYWx1ZSddO1xuICAgIGNvbnN0IGhhc0JpbmRpbmdzID0gZXZhbHVhdGlvblJlZ2V4LnRlc3QodmFsLnRyaW0oKSk7XG4gICAgY29uc3QgaXNCb29sZWFuID0gaXNBdHRyPyAvXmJvb2xlYW4tL2kudGVzdChub2RlLm5vZGVOYW1lKTogZmFsc2U7XG4gICAgY29uc3QgaXNFdmVudCA9IGlzQXR0cj8gL15vbi0oLispL2kudGVzdChub2RlLm5vZGVOYW1lKTogZmFsc2U7XG5cbiAgICBpZighZWwuX19ha2lsaSAmJiAhaGFzQmluZGluZ3MgJiYgIWlzQm9vbGVhbiAmJiAhaXNFdmVudCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5vZGUuX19uYW1lID0gdGhpcy5fX3Njb3BlLl9fbmFtZSArIHV0aWxzLmNyZWF0ZVJhbmRvbVN0cmluZygxNik7XG4gICAgbm9kZS5fX2lzRXZlbnQgPSBpc0V2ZW50O1xuICAgIG5vZGUuX19oYXNCaW5kaW5ncyA9IGhhc0JpbmRpbmdzO1xuICAgIG5vZGUuX19pc0Jvb2xlYW4gPSBpc0Jvb2xlYW47XG4gICAgbm9kZS5fX2V4cHJlc3Npb24gPSB2YWw7XG4gICAgbm9kZS5fX3Byb3BlcnRpZXMgPSB7fTtcbiAgICBub2RlLl9fYXR0cmlidXRlT2YgPSBudWxsO1xuICAgIG5vZGUuX19hdHRyaWJ1dGVPbiA9IG51bGw7XG4gICAgbm9kZS5fX2V2ZW50ID0gbnVsbDsgICAgXG4gICAgbm9kZS5fX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICBub2RlLl9fY29tcG9uZW50ID0gdGhpcztcbiAgICBub2RlLl9fZWxlbWVudCA9IGVsO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIERlaW5pdGlhbGl6ZSB0aGUgbm9kZVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RlaW5pdGlhbGl6ZU5vZGUobm9kZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYoIW5vZGUuX19pbml0aWFsaXplZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBpZiAobm9kZS5fX2V2ZW50KSB7XG4gICAgICBub2RlLl9fZXZlbnQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUuX19oYXNCaW5kaW5ncyAmJiAhb3B0aW9ucy5zYXZlQmluZGluZ3MpIHtcbiAgICAgIHRoaXMuX191bmJpbmRCeU5vZGVzKG5vZGUpO1xuICAgICAgdGhpcy5fX3VuYmluZFBhcmVudHNCeU5vZGVzKG5vZGUpOyAgICBcbiAgICB9XG5cbiAgICBBa2lsaS5yZW1vdmVUYWcobm9kZSk7ICAgIFxuICAgIGRlbGV0ZSBub2RlLl9fbmFtZTtcbiAgICBkZWxldGUgbm9kZS5fX2hhc0JpbmRpbmdzO1xuICAgIGRlbGV0ZSBub2RlLl9faXNCb29sZWFuO1xuICAgIGRlbGV0ZSBub2RlLl9faXNFdmVudDtcbiAgICBkZWxldGUgbm9kZS5fX2V4cHJlc3Npb247XG4gICAgZGVsZXRlIG5vZGUuX19wcm9wZXJ0aWVzO1xuICAgIGRlbGV0ZSBub2RlLl9fYXR0cmlidXRlT2Y7XG4gICAgZGVsZXRlIG5vZGUuX19hdHRyaWJ1dGVPbjtcbiAgICBkZWxldGUgbm9kZS5fX2V2ZW50OyAgICBcbiAgICBkZWxldGUgbm9kZS5fX2luaXRpYWxpemVkO1xuICAgIGRlbGV0ZSBub2RlLl9fY29tcG9uZW50O1xuICAgIGRlbGV0ZSBub2RlLl9fZWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcnBvbGF0ZSB0aGUgZWxlbWVudCBhdHRyaWJ1dGVzXG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtDb21wb25lbnR9IFthdHRyaWJ1dGVPZj1udWxsXSAtIGlmIHRoZSBub2RlIGhhcyBsaW5rIHdpdGggdGhlIHBhcmVudCBzY29wZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2ludGVycG9sYXRlQXR0cmlidXRlcyhlbCwgYXR0cmlidXRlT2YgPSBudWxsKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGF0dHJzID0gZWwuYXR0cmlidXRlcywgbCA9IGF0dHJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdGhpcy5fX2luaXRpYWxpemVBdHRyaWJ1dGUoYXR0cnNbaV0sIGVsLCBhdHRyaWJ1dGVPZik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZSB0aGUgYXR0cmlidXRlcyBhcyBhIHByb3h5XG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVmaW5lQXR0cmlidXRlcygpIHtcbiAgICBjb25zdCBjaGFuZ2VBdHRyaWJ1dGUgPSAoa2V5LCB2YWx1ZSwgaXNEZWxldGVkID0gZmFsc2UpID0+IHtcbiAgICAgIGlmICh0aGlzLl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBub2RlID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGVOb2RlKGtleSk7XG5cbiAgICAgIGlmIChpc0RlbGV0ZWQpIHtcbiAgICAgICAgbm9kZSAmJiB0aGlzLl9fZGVpbml0aWFsaXplTm9kZShub2RlKTtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICAgICAgcmV0dXJuIFxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIW5vZGUpIHtcbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgICAgIG5vZGUgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZU5vZGUoa2V5KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBub2RlLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX19kZWluaXRpYWxpemVOb2RlKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9faW5pdGlhbGl6ZUF0dHJpYnV0ZShub2RlLCB0aGlzLmVsLCB0aGlzLl9fYXR0cmlidXRlT2YpO1xuICAgIH07XG5cbiAgICB0aGlzLmF0dHJzID0gbmV3IFByb3h5KHRoaXMuX19hdHRycywge1xuICAgICAgZ2V0OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgaWYgKGtleSA9PSAnX19pc1Byb3h5Jykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgfSxcbiAgICAgIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgYXR0cktleSA9IHV0aWxzLnRvRGFzaENhc2Uoa2V5KTtcblxuICAgICAgICBpZiAodGhpcy5ib29sZWFuQXR0cmlidXRlcy5pbmRleE9mKGF0dHJLZXkpICE9IC0xKSB7XG4gICAgICAgICAgYXR0cktleSA9IGBib29sZWFuLSR7YXR0cktleX1gO1xuICAgICAgICAgIHZhbHVlPyB0aGlzLmVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTogdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgY2hhbmdlQXR0cmlidXRlKGF0dHJLZXksIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZSh2YWx1ZSkpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBkZWxldGVQcm9wZXJ0eTogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgYXR0cktleSA9IHV0aWxzLnRvRGFzaENhc2Uoa2V5KTtcbiAgICAgICAgY2hhbmdlQXR0cmlidXRlKGF0dHJLZXksIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZSh2YWx1ZSksIHRydWUpO1xuICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgdGhlIG9iamVjdCB0byBhIHByb3h5XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcmV0dXJucyB7UHJveHl9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fb2JzZXJ2ZShvYmosIHBhcmVudHMpIHtcbiAgICByZXR1cm4gbmV3IFByb3h5KG9iaiwge1xuICAgICAgZ2V0OiAodGFyZ2V0LCBrZXkpID0+IHsgXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX2lzUHJveHlcIikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PSBcIl9fdGFyZ2V0XCIpIHtcbiAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PSBcIl9fY29tcG9uZW50XCIpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX2tleXNcIikge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5fX2lzU3lzdGVtS2V5KGtleSkpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQWtpbGkuX19ldmFsdWF0aW9uKSB7ICBcbiAgICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG4gICAgICAgICAgbGV0IG5vdEJpbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBsZXQgZXZhbHVhdGVkID0gIXV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19zY29wZSk7IFxuICAgICAgICAgIGxldCBjb21wb25lbnQgPSB0aGlzO1xuICAgICAgICAgIGxldCBleGNBcnIgPSBrZXlzLnNsaWNlKCk7XG5cbiAgICAgICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgU2NvcGUpIHtcbiAgICAgICAgICAgIGxldCByZWFsVGFyZ2V0ID0gdXRpbHMuZ2V0T3duUHJvcGVydHlUYXJnZXQodGFyZ2V0LCBrZXkpO1xuICAgICAgICAgICAgcmVhbFRhcmdldCAmJiAocmVhbFRhcmdldCBpbnN0YW5jZW9mIFNjb3BlKSAmJiAoY29tcG9uZW50ID0gIHJlYWxUYXJnZXQuX19jb21wb25lbnQpO1xuICAgICAgICAgIH0gXG5cbiAgICAgICAgICBpZiAoQWtpbGkuX193cmFwcGluZyAmJiBrZXlzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBmb3JQYXJlbnRzID0gQWtpbGkuX19ldmFsdWF0aW9uLmNvbXBvbmVudC5wYXJlbnRzKGMgPT4gYyBpbnN0YW5jZW9mIEFraWxpLmNvbXBvbmVudHMuRm9yKTtcblxuICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZm9yUGFyZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGsgPSAwLCBjID0ga2V5cy5sZW5ndGg7IGsgPCBjOyBrKyspIHsgXG4gICAgICAgICAgICAgIGNvbnN0IGZvckRhdGEgPSBmb3JQYXJlbnRzW2ldLmRhdGE7XG4gICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhleGNBcnIsIGNvbXBvbmVudC5fX3Njb3BlKTtcblxuICAgICAgICAgICAgICBpZiAoZGF0YSAmJiB0eXBlb2YgZGF0YSA9PSAnb2JqZWN0JyAmJiBmb3JEYXRhID09PSBkYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgICBleGNBcnIucG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgaWYgKCEoa2V5IGluIHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH0gICAgICAgICAgXG4gICAgICAgICAgZWxzZSBpZiAoIXV0aWxzLmdldEVudW1lcmFibGVQcm9wZXJ0eVRhcmdldCh0YXJnZXQsIGtleSkpIHtcbiAgICAgICAgICAgIG5vdEJpbmRpbmcgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX19iaW5kTm9kZShBa2lsaS5fX2V2YWx1YXRpb24ubGlzdCwgY29tcG9uZW50LCBrZXlzLCBwYXJlbnRzLCB0YXJnZXRba2V5XSwgbm90QmluZGluZywgZXZhbHVhdGVkKTtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICB9LFxuICAgICAgc2V0OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7IFxuICAgICAgICBpZiAodGhpcy5fX2lzU3lzdGVtS2V5KGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhbHVlID0gQWtpbGkud3JhcEZ1bmN0aW9uKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrZXldKTtcblxuICAgICAgICBpZiAodGhpcy5fX2NoZWNrRGlzYWJsZW1lbnQoa2V5cykpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgQ0hFQ0tfRVhJU1RFTkNFOiBpZiAocGFyZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGV0IHRhcmdldFBhcmVudFZhbHVlID0gcGFyZW50cy5sZW5ndGggPiAxPyB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhwYXJlbnRzLnNsaWNlKDAsIC0xKSwgdGhpcy5fX3Njb3BlKTogdGhpcy5fX3Njb3BlO1xuICAgICAgICAgIFxuICAgICAgICAgIGZvciAobGV0IGsgaW4gdGFyZ2V0UGFyZW50VmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghdGFyZ2V0UGFyZW50VmFsdWUuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXRQYXJlbnRWYWx1ZVtrXSAmJiB0YXJnZXRQYXJlbnRWYWx1ZVtrXS5fX3RhcmdldCA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgIGJyZWFrIENIRUNLX0VYSVNURU5DRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0W2tleV0gPSB0aGlzLl9fbmVzdGVkT2JzZXJ2ZSh2YWx1ZSwga2V5cyk7XG5cbiAgICAgICAgaWYoIXRoaXMuX19pc1Jlc29sdmVkKSB7XG4gICAgICAgICAgdGhpcy5fX3RyaWdnZXJTdG9yZUFuZEF0dHIoa2V5cyk7XG4gICAgICAgIH1cbiAgICAgICBcbiAgICAgICAgaWYgKEFraWxpLl9faXNvbGF0aW9uKSB7IFxuICAgICAgICAgIHRoaXMuX19jcmVhdGVJc29sYXRpb25PYmplY3QocGFyZW50cywga2V5LCBmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLl9faXNSZXNvbHZlZCkge1xuICAgICAgICAgIHRoaXMuX190cmlnZ2VyU3RvcmVBbmRBdHRyKGtleXMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5fX2lzTW91bnRlZCkgeyAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICB0aGlzLl9fZXZhbHVhdGVCeUtleXMoa2V5cywgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgICAgZGVsZXRlUHJvcGVydHk6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBjb25zdCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrZXldKTtcblxuICAgICAgICBpZiAodGhpcy5fX2NoZWNrRGlzYWJsZW1lbnQoa2V5cykpIHtcbiAgICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fX2lzU3lzdGVtS2V5KGtleSkpIHtcbiAgICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG5cbiAgICAgICAgaWYoIXRoaXMuX19pc1Jlc29sdmVkKSB7XG4gICAgICAgICAgdGhpcy5fX3RyaWdnZXJTdG9yZUFuZEF0dHIoa2V5cyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChBa2lsaS5fX2lzb2xhdGlvbikge1xuICAgICAgICAgIHRoaXMuX19jcmVhdGVJc29sYXRpb25PYmplY3QocGFyZW50cywga2V5LCB0cnVlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuX19pc1Jlc29sdmVkKSB7XG4gICAgICAgICAgdGhpcy5fX3RyaWdnZXJTdG9yZUFuZEF0dHIoa2V5cyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9fZXZhbHVhdGVCeUtleXMoa2V5cywgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciB0aGUgc3RvcmUgYW5kIHRoZSBhdHRyaWJ1dGVzIGNoYW5nZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX190cmlnZ2VyU3RvcmVBbmRBdHRyKGtleXMpIHtcbiAgICBmb3IobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRLZXlzID0ga2V5cy5zbGljZSgwLCBsIC0gaSk7XG4gICAgICBjb25zdCBjdXJyZW50S2V5U3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKGN1cnJlbnRLZXlzKTtcbiAgICAgIGNvbnN0IHZhbCA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGN1cnJlbnRLZXlzLCB0aGlzLl9fc2NvcGUpO1xuXG4gICAgICBpZiAodGhpcy5fX3N0b3JlTGlua3NbY3VycmVudEtleVN0cmluZ10pIHsgIFxuICAgICAgICB0aGlzLl9fc3RvcmVUcmlnZ2VyQnlLZXlzKGN1cnJlbnRLZXlzLCB2YWwpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fX2F0dHJMaW5rc1tjdXJyZW50S2V5U3RyaW5nXSkge1xuICAgICAgICB0aGlzLl9fYXR0clRyaWdnZXJCeUtleXMoY3VycmVudEtleXMsIHZhbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgaGFzaCBmb3IgdGhlIGtleXNcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9ICAgIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZUtleXNIYXNoKGtleXMpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5fX3Njb3BlLl9fbmFtZX0uJHtBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyl9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHN0b3JlIG9mIHRoZSBkaXNhYmxlbWVudCB0eXBlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXREaXNhYmxlbWVudFR5cGVTdG9yZSh0eXBlKSB7XG4gICAgcmV0dXJuICh7XG4gICAgICBwcm94eTogJ19fZGlzYWJsZVByb3h5JyxcbiAgICAgIHN0b3JlOiAnX19kaXNhYmxlU3RvcmVLZXlzJyxcbiAgICAgIGF0dHI6ICdfX2Rpc2FibGVBdHRyS2V5cydcbiAgICB9KVt0eXBlXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIHRoZSBrZXlzIHNldHRlclxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyAgXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZV0gIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2Rpc2FibGVLZXlzKGtleXMsIHR5cGUgPSAncHJveHknKSB7ICAgIFxuICAgIHRoaXNbdGhpcy5fX2dldERpc2FibGVtZW50VHlwZVN0b3JlKHR5cGUpXVtrZXlzPyB0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyk6ICdfX2FsbCddID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgdGhlIGtleXMgc2V0dGVyXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3R5cGVdICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZW5hYmxlS2V5cyhrZXlzLCB0eXBlID0gJ3Byb3h5Jykge1xuICAgIGRlbGV0ZSB0aGlzW3RoaXMuX19nZXREaXNhYmxlbWVudFR5cGVTdG9yZSh0eXBlKV1ba2V5cz8gdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpOiAnX19hbGwnXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUga2V5cyBzZXR0ZXIgZGlzYWJsZW1hbnRcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZV0gICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jaGVja0Rpc2FibGVtZW50KGtleXMsIHR5cGUgPSAncHJveHknKSB7XG4gICAgY29uc3Qgc3RvcmUgPSB0aGlzLl9fZ2V0RGlzYWJsZW1lbnRUeXBlU3RvcmUodHlwZSk7XG4gICAgcmV0dXJuIHRoaXNbc3RvcmVdLl9fYWxsPyB0cnVlOiB0aGlzW3N0b3JlXVt0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyldO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmUgdGhlIHZhbHVlIHRvIHRoZSBzdG9yZSBieSB0aGUga2V5c1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zdG9yZVRyaWdnZXJCeUtleXMoa2V5cywgdmFsdWUpIHsgXG4gICAgaWYgKHRoaXMuX19jaGVja0Rpc2FibGVtZW50KGtleXMsICdzdG9yZScpKSB7ICAgICAgXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbGlua3MgPSB0aGlzLl9fc3RvcmVMaW5rc1tBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyldO1xuXG4gICAgaWYgKCFsaW5rcyB8fCAhbGlua3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIHZhbHVlID0gdXRpbHMuY29weSh2YWx1ZSwgeyBwbGFpbjogdHJ1ZSB9KTtcbiAgICBjb25zdCBwID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxpbmtzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY29uc3QgbGluayA9IGxpbmtzW2ldOyAgIFxuICAgICAgXG4gICAgICBpZiAoIWxpbmsuc2V0KSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBwLnB1c2godGhpcy5fX3N0b3JlVHJpZ2dlckJ5TmFtZShsaW5rLm5hbWUsIHZhbHVlKSk7ICAgICAgXG4gICAgfVxuICAgIFxuICAgIHJldHVybiBQcm9taXNlLmFsbChwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlIHRoZSB2YWx1ZSB0byB0aGUgc3RvcmUgYnkgdGhlIG5hbWVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3N0b3JlVHJpZ2dlckJ5TmFtZShuYW1lLCB2YWx1ZSkgeyAgXG4gICAgc3RvcmUuX190YXJnZXRbbmFtZV0gPSB2YWx1ZTtcbiAgICBsZXQgbGlua3MgPSAoQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdIHx8IFtdKS5jb25jYXQoQWtpbGkuX19zdG9yZUxpbmtzWycqJ10gfHwgW10pO1xuXG4gICAgaWYgKCFsaW5rcyB8fCAhbGlua3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGlua3MgPSB1dGlscy5zb3J0KGxpbmtzLCBbJ2RhdGUnXSwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gQWtpbGkubmV4dFRpY2soKCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGluayA9IGxpbmtzW2ldO1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBsaW5rLmNvbXBvbmVudDtcblxuICAgICAgICBpZiAoY29tcG9uZW50ID09PSB0aGlzKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChsaW5rLmZuKSB7XG4gICAgICAgICAgQWtpbGkudW5pc29sYXRlKCgpID0+IGxpbmsuZm4uY2FsbChjb21wb25lbnQsIHZhbHVlLCBuYW1lKSk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFsaW5rLmdldCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZUtleXMobGluay5rZXlzLCAnc3RvcmUnKTtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhsaW5rLmtleXMsIGNvbXBvbmVudC5fX3Njb3BlKTtcbiAgICAgICAgIXV0aWxzLmNvbXBhcmUoY3VycmVudCwgdmFsdWUpICYmIGNvbXBvbmVudC5zY29wZS5fX3NldChsaW5rLmtleXMsIHZhbHVlKTsgICBcbiAgICAgICAgY29tcG9uZW50Ll9fZW5hYmxlS2V5cyhsaW5rLmtleXMsICdzdG9yZScpO1xuICAgICAgfSAgXG4gICAgfSk7ICAgXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBzdG9yZSBsaW5rIHdpdGggdGhlIHNjb3BlIHByb3BlcnR5XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtvYmhlY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3N0b3JlQnlLZXlzKG5hbWUsIGtleXMsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSB7IGdldDogdHJ1ZSwgc2V0OiB0cnVlLCAuLi5vcHRpb25zIH07XG5cbiAgICBpZiAoIWtleXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgU3RvcmUgbGluayBcIiR7bmFtZX1cIiBtdXN0IGhhdmUgdGhlIHNjb3BlIHByb3BlcnR5IG5hbWVgKTtcbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbnMuZ2V0ICYmICFvcHRpb25zLnNldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBTdG9yZSBsaW5rIFwiJHtuYW1lfVwiIG11c3QgaGF2ZSBhdCBsZWFzdCBcImdldFwiIG9yIFwic2V0XCIgb3B0aW9uIGFzIHRydWVgKTtcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuICAgIFxuICAgIHRoaXMuX19kaXNhYmxlS2V5cyhrZXlzLCAnc3RvcmUnKTtcbiAgICAoc3RvcmUuaGFzT3duUHJvcGVydHkobmFtZSkgfHwgIXV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19zY29wZSkpICYmIHRoaXMuc2NvcGUuX19zZXQoa2V5cywgc3RvcmVbbmFtZV0pO1xuICAgIHRoaXMuX19lbmFibGVLZXlzKGtleXMsICdzdG9yZScpO1xuICAgIGxldCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG4gICAgbGV0IGluZm87XG5cbiAgICBpZiAoIXRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ10pIHtcbiAgICAgIHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ10gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgYXJyID0gdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuXG4gICAgICBpZiAocmVzLmNvbXBvbmVudCA9PT0gdGhpcyAmJiByZXMubmFtZSA9PSBuYW1lICYmIHJlcy5rZXlTdHJpbmcgPT0ga2V5U3RyaW5nKSB7XG4gICAgICAgIHJlcy5zZXQgPSBvcHRpb25zLnNldDtcbiAgICAgICAgcmVzLmdldCA9IG9wdGlvbnMuZ2V0O1xuICAgICAgICByZXMuZGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIUFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSkge1xuICAgICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgaW5mbyA9IHsgY29tcG9uZW50OiB0aGlzLCBuYW1lLCBrZXlzLCBrZXlTdHJpbmcsIGRhdGU6IERhdGUubm93KCksIHNldDogb3B0aW9ucy5zZXQsIGdldDogb3B0aW9ucy5nZXQgfTtcbiAgICB0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddLnB1c2goaW5mbyk7XG4gICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdLnB1c2goaW5mbyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBzdG9yZSBsaW5rIHdpdGggdGhlIGZ1bmN0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gICBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgX19zdG9yZUJ5RnVuY3Rpb24obmFtZSwgZm4sIG9wdGlvbnMgPSB7fSkgeyBcbiAgICBsZXQgY2FsbCA9IG9wdGlvbnMuY2FsbE9uU3RhcnQgPT09IHVuZGVmaW5lZD8gc3RvcmUuX190YXJnZXQuaGFzT3duUHJvcGVydHkobmFtZSk6IG9wdGlvbnMuY2FsbE9uU3RhcnQ7XG5cbiAgICBpZiAoIUFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSkge1xuICAgICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSBsaW5rcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGxpbmtzW2ldO1xuXG4gICAgICBpZiAocmVzLmNvbXBvbmVudCA9PT0gdGhpcyAmJiByZXMubmFtZSA9PSBuYW1lICYmIHJlcy5mbiA9PT0gZm4pIHtcbiAgICAgICAgcmVzLmRhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdLnB1c2goeyBjb21wb25lbnQ6IHRoaXMsIG5hbWUsIGZuLCBkYXRlOiBEYXRlLm5vdygpIH0pO1xuXG4gICAgaWYgKG5hbWUgPT0gJyonICYmIG9wdGlvbnMuY2FsbE9uU3RhcnQgIT09IGZhbHNlKSB7XG4gICAgICBsZXQgc3RvcmVLZXlzID0gT2JqZWN0LmtleXMoc3RvcmUuX190YXJnZXQpO1xuICAgICAgbGV0IHAgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBzdG9yZUtleXMubGVuZ3RoIDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQga2V5ID0gc3RvcmVLZXlzW2ldO1xuICAgICAgICBsZXQgdmFsID0gc3RvcmUuX190YXJnZXRba2V5XTtcbiAgICAgICAgcC5wdXNoKEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBmbi5jYWxsKHRoaXMsIHZhbCwga2V5KSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwocCk7XG4gICAgfVxuXG4gICAgaWYgKGNhbGwpIHtcbiAgICAgIHJldHVybiBBa2lsaS51bmlzb2xhdGUoKCkgPT4gZm4uY2FsbCh0aGlzLCBzdG9yZVtuYW1lXSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHN0b3JlIGxpbmsgd2l0aCB0aGUgc2NvcGUgcHJvcGVydHlcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5zdG9yZUJ5S2V5cyhuYW1lLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBoYXZlIHRvIHBhc3MgdGhlIHNjb3BlIHByb3BlcnR5IG5hbWUgZm9yIHN0b3JlIGxpbmsgXCIke25hbWV9XCJgKTtcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuXG4gICAgbGV0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcbiAgICBsZXQgYXJyID0gdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXTtcblxuICAgIGlmICghYXJyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuICAgICAgbGV0IGxpbmtzID0gQWtpbGkuX19zdG9yZUxpbmtzW3Jlcy5uYW1lXTtcblxuICAgICAgaWYgKHJlcy5jb21wb25lbnQgIT09IHRoaXMgfHwgcmVzLm5hbWUgIT0gbmFtZSB8fCByZXMua2V5U3RyaW5nICE9IGtleVN0cmluZykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgYXJyLnNwbGljZShpLCAxKTtcblxuICAgICAgaWYgKCFsaW5rcyB8fCAhbGlua3MubGVuZ3RoKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBrID0gbGlua3MubGVuZ3RoIC0gMTsgayA+PSAwOyBrLS0pIHtcbiAgICAgICAgbGV0IGxpbmsgPSBsaW5rc1trXTtcblxuICAgICAgICBpZiAobGluay5jb21wb25lbnQgPT09IHRoaXMgJiYgbGluay5rZXlTdHJpbmcgPT0ga2V5U3RyaW5nKSB7XG4gICAgICAgICAgbGlua3Muc3BsaWNlKGssIDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghbGlua3MubGVuZ3RoKSB7XG4gICAgICAgIGRlbGV0ZSBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFhcnIubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBzdG9yZSBsaW5rIHdpdGggdGhlIGZ1bmN0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5zdG9yZUJ5RnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZiAoIUFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBsaW5rcyA9IEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYgKHJlcy5jb21wb25lbnQgPT09IHRoaXMgJiYgcmVzLm5hbWUgPT0gbmFtZSAmJiByZXMuZm4gPT09IGZuKSB7XG4gICAgICAgIGxpbmtzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgdGhlIGF0dHJpYnV0ZSBldmVudCBieSB0aGUga2V5c1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hdHRyVHJpZ2dlckJ5S2V5cyhrZXlzLCB2YWx1ZSkge1xuICAgIGlmICh0aGlzLl9fY2hlY2tEaXNhYmxlbWVudChrZXlzLCAnYXR0cicpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGxpbmtzID0gdGhpcy5fX2F0dHJMaW5rc1tBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyldO1xuICAgXG4gICAgaWYgKCFsaW5rcyB8fCAhbGlua3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBBa2lsaS5uZXh0VGljaygoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxpbmtzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5rID0gbGlua3NbaV07XG5cbiAgICAgICAgaWYgKGxpbmsuZm4pIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbGluay5zZXQpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgZXYgPSAnb24nICsgdXRpbHMuY2FwaXRhbGl6ZShsaW5rLm5hbWUpO1xuICAgICAgICB0aGlzLmF0dHJzW2V2XSAmJiB0aGlzLmF0dHJzW2V2XS50cmlnZ2VyKHZhbHVlLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgICB9XG4gICAgfSk7ICBcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIHRoZSBhdHRyaWJ1dGUgZXZlbnQgYnkgdGhlIG5hbWVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2F0dHJUcmlnZ2VyQnlOYW1lKG5hbWUsIHZhbHVlKSB7XG4gICAgbGV0IGxpbmtzID0gKHRoaXMuX19hdHRyTGlua3NbbmFtZV0gfHwgW10pLmNvbmNhdCh0aGlzLl9fYXR0ckxpbmtzWycqJ10gfHwgW10pO1xuICAgIFxuICAgIGlmICghbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gIFxuICAgIFxuICAgIGxpbmtzID0gdXRpbHMuc29ydChsaW5rcywgWydkYXRlJ10sIHRydWUpO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGlua3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBsaW5rID0gbGlua3NbaV07ICAgIFxuXG4gICAgICBpZiAobGluay5mbikge1xuICAgICAgICBBa2lsaS51bmlzb2xhdGUoKCkgPT4gbGluay5mbi5jYWxsKHRoaXMsIHZhbHVlLCB1dGlscy50b0Rhc2hDYXNlKG5hbWUpKSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZighbGluay5nZXQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRoaXMuX19kaXNhYmxlS2V5cyhsaW5rLmtleXMsICdhdHRyJyk7XG4gICAgICBsZXQgY3VycmVudCA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGxpbmsua2V5cywgdGhpcy5fX3Njb3BlKTtcbiAgICAgICF1dGlscy5jb21wYXJlKGN1cnJlbnQsIHZhbHVlKSAmJiB0aGlzLnNjb3BlLl9fc2V0KGxpbmsua2V5cywgdmFsdWUpO1xuICAgICAgdGhpcy5fX2VuYWJsZUtleXMobGluay5rZXlzLCAnYXR0cicpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlICBhdHRyaWJ1dGUgbGluayB3aXRoIHRoZSBzY29wZSBwcm9wZXJ0eVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hdHRyQnlLZXlzKG5hbWUsIGtleXMsIG9wdGlvbnMgPSB7fSkgeyAgIFxuICAgIG9wdGlvbnMgPSB7IGdldDogdHJ1ZSwgc2V0OiB0cnVlLCAuLi5vcHRpb25zIH07XG4gICAgbmFtZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKG5hbWUpO1xuXG4gICAgaWYgKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEF0dHJpYnV0ZSBsaW5rIFwiJHtuYW1lfVwiIG11c3QgaGF2ZSB0aGUgc2NvcGUgcHJvcGVydHkgbmFtZWApO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5fX2Rpc2FibGVLZXlzKGtleXMsICdhdHRyJyk7XG4gICAgKHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkobmFtZSkgfHwgIXV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19zY29wZSkpICYmIHRoaXMuc2NvcGUuX19zZXQoa2V5cywgdGhpcy5hdHRyc1tuYW1lXSk7IFxuICAgIHRoaXMuX19lbmFibGVLZXlzKGtleXMsICdhdHRyJyk7XG4gICAgbGV0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcbiAgICBcbiAgICBpZiAoIXRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXSkge1xuICAgICAgdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddID0gW107XG4gICAgfVxuXG4gICAgbGV0IGFyciA9IHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuXG4gICAgICBpZiAocmVzLm5hbWUgPT0gbmFtZSAmJiByZXMua2V5U3RyaW5nID09IGtleVN0cmluZykge1xuICAgICAgICByZXMuZ2V0ID0gb3B0aW9ucy5nZXQ7XG4gICAgICAgIHJlcy5zZXQgPSBvcHRpb25zLnNldDtcbiAgICAgICAgcmVzLmRhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddLnB1c2goeyBuYW1lLCBrZXlzLCBrZXlTdHJpbmcsIGRhdGU6IERhdGUubm93KCksIHNldDogb3B0aW9ucy5zZXQsIGdldDogb3B0aW9ucy5nZXQgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBhdHRyaWJ1dGUgbGluayB3aXRoIHRoZSBmdW5jdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZCBcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBfX2F0dHJCeUZ1bmN0aW9uKG5hbWUsIGZuLCBvcHRpb25zID0ge30pIHsgICAgXG4gICAgbmFtZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKG5hbWUpO1xuICAgIGxldCBjYWxsID0gb3B0aW9ucy5jYWxsT25TdGFydCA9PT0gdW5kZWZpbmVkPyB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KG5hbWUpOiBvcHRpb25zLmNhbGxPblN0YXJ0OyAgICBcblxuICAgIGlmICghdGhpcy5fX2F0dHJMaW5rc1tuYW1lXSkge1xuICAgICAgdGhpcy5fX2F0dHJMaW5rc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGxldCBsaW5rcyA9IHRoaXMuX19hdHRyTGlua3NbbmFtZV07XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IGxpbmtzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gbGlua3NbaV07XG5cbiAgICAgIGlmIChyZXMubmFtZSA9PSBuYW1lICYmIHJlcy5mbiA9PT0gZm4pIHtcbiAgICAgICAgcmVzLmRhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHRoaXMuX19hdHRyTGlua3NbbmFtZV0ucHVzaCh7IG5hbWUsIGZuLCBkYXRlOiBEYXRlLm5vdygpIH0pO1xuXG4gICAgaWYgKG5hbWUgPT0gJyonICYmIG9wdGlvbnMuY2FsbE9uU3RhcnQgIT09IGZhbHNlKSB7XG4gICAgICBsZXQgYXR0cnNLZXlzID0gT2JqZWN0LmtleXModGhpcy5fX2F0dHJzKS5maWx0ZXIoayA9PiAhKHRoaXMuX19hdHRyc1trXSBpbnN0YW5jZW9mIEFraWxpLkV2ZW50RW1pdHRlcikpO1xuICAgICAgbGV0IHAgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBhdHRyc0tleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBhdHRyc0tleXNbaV07XG4gICAgICAgIGxldCB2YWwgPSB0aGlzLl9fYXR0cnNba2V5XTtcbiAgICAgICAgcC5wdXNoKEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBmbi5jYWxsKHRoaXMsIHZhbCwgdXRpbHMudG9EYXNoQ2FzZShrZXkpKSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwocCk7XG4gICAgfVxuICAgIFxuICAgIGlmIChjYWxsKSB7XG4gICAgICByZXR1cm4gQWtpbGkudW5pc29sYXRlKCgpID0+IGZuLmNhbGwodGhpcywgdGhpcy5hdHRyc1tuYW1lXSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGF0dHJpYnV0ZSBsaW5rIHdpdGggdGhlIHNjb3BlIHByb3BlcnR5XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYXR0ckJ5S2V5cyhuYW1lLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBoYXZlIHRvIHBhc3MgdGhlIHNjb3BlIHByb3BlcnR5IG5hbWUgZm9yIGF0dHJpYnV0ZSBsaW5rIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cblxuICAgIGxldCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG4gICAgbGV0IGFyciA9IHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXTtcblxuICAgIGlmICghYXJyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuXG4gICAgICBpZiAocmVzLm5hbWUgIT0gbmFtZSB8fCByZXMua2V5U3RyaW5nICE9IGtleVN0cmluZykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgYXJyLnNwbGljZShpLCAxKTtcbiAgICB9XG5cbiAgICBpZiAoIWFyci5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ107XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgYXR0cmlidXRlIGxpbmsgd2l0aCB0aGUgZnVuY3Rpb25cbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYXR0ckJ5RnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZiAoIXRoaXMuX19hdHRyTGlua3NbbmFtZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSB0aGlzLl9fYXR0ckxpbmtzW25hbWVdO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSBsaW5rcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGxpbmtzW2ldO1xuXG4gICAgICBpZiAocmVzLm5hbWUgPT0gbmFtZSAmJiByZXMuZm4gPT09IGZuKSB7XG4gICAgICAgIGxpbmtzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fYXR0ckxpbmtzW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUga2V5IGlzIHN5c3RlbVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2lzU3lzdGVtS2V5IChrZXkpIHtcbiAgICBpZiAoa2V5ID09ICdfXycgfHwgKGtleVswXSA9PSAnXycgJiYga2V5WzFdID09ICdfJykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChbJ2NvbnN0cnVjdG9yJ10uaW5kZXhPZihrZXkpICE9IC0xKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogTmVzdGVkIG9ic2VydmluZyBvZiB0aGUgdmFsdWVcbiAgICpcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBbc3RhcnRLZXlzXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX25lc3RlZE9ic2VydmUgKHZhbHVlLCBzdGFydEtleXMpIHtcbiAgICBjb25zdCBvYnNlcnZlID0gKHZhbHVlLCBwYXJlbnRzKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF1dGlscy5pc1BsYWluT2JqZWN0KHZhbHVlKSAmJiAhdXRpbHMuaXNTY29wZVByb3h5KHZhbHVlKSAmJiAhKHZhbHVlIGluc3RhbmNlb2YgU2NvcGUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IHRhcmdldCA9IHZhbHVlO1xuXG4gICAgICBDSEVDS19QUk9YWTogaWYgKHZhbHVlLl9faXNQcm94eSkge1xuICAgICAgICB0YXJnZXQgPSB2YWx1ZS5fX3RhcmdldDtcblxuICAgICAgICBpZiAodGhpcy5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcpIHtcbiAgICAgICAgICBicmVhayBDSEVDS19QUk9YWTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHZhbHVlLl9fY29tcG9uZW50ICE9PSB0aGlzIHx8XG4gICAgICAgICAgQWtpbGkuam9pbkJpbmRpbmdLZXlzKHBhcmVudHMpICE9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyh2YWx1ZS5fX2tleXMpXG4gICAgICAgICkge1xuICAgICAgICAgIHRhcmdldCA9IHV0aWxzLmNvcHkodGFyZ2V0LCB7IG5lc3RlZDogZmFsc2UgfSk7XG4gICAgICAgICAgdmFsdWUgPSB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCF0aGlzLl9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyAmJiAhKHZhbHVlIGluc3RhbmNlb2YgU2NvcGUpKSB7XG4gICAgICAgIHRhcmdldCA9IHV0aWxzLmNvcHkodGFyZ2V0LCB7IG5lc3RlZDogZmFsc2UgfSApOyAgICAgICAgICBcbiAgICAgICAgdmFsdWUgPSB0YXJnZXQ7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRhcmdldEtleXMgPSBPYmplY3Qua2V5cyh0YXJnZXQpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRhcmdldEtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7ICAgIFxuICAgICAgICBjb25zdCBrID0gdGFyZ2V0S2V5c1tpXTtcbiAgICAgICAgY29uc3QgdmFsID0gdGFyZ2V0W2tdOyAgICAgICAgXG4gICAgICAgIGNvbnN0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tdKTsgICBcbiAgICAgICAgdGFyZ2V0W2tdID0gb2JzZXJ2ZSh2YWwsIGtleXMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXZhbHVlLl9faXNQcm94eSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX29ic2VydmUodmFsdWUsIHBhcmVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcblxuICAgIHJldHVybiBvYnNlcnZlKHZhbHVlLCBzdGFydEtleXMgfHwgW10pO1xuICB9XG5cbiAgIC8qKlxuICAgKiBDcmVhdGUgYW4gaXNvbGF0aW9uIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHBhcmFtIHtib29sZWFufSBbaXNEZWxldGVkPWZhbHNlXVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGVJc29sYXRpb25PYmplY3QgKHBhcmVudHMsIGtleSwgaXNEZWxldGVkID0gZmFsc2UpIHtcbiAgICBjb25zdCBrZXlzID0gcGFyZW50cy5sZW5ndGg/IFtwYXJlbnRzWzBdXTogW2tleV07XG4gICAgY29uc3QgaXNvbGF0aW9uSGFzaCA9IHRoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKTtcblxuICAgIGlmIChwYXJlbnRzLmxlbmd0aCkge1xuICAgICAgaXNEZWxldGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25IYXNoXSkge1xuICAgICAgQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uSGFzaF0gPSB7XG4gICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAga2V5c1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAoaXNEZWxldGVkICE9PSB1bmRlZmluZWQpICYmIChBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25IYXNoXS5pc0RlbGV0ZWQgPSBpc0RlbGV0ZWQpO1xuICAgIHJldHVybiBBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25IYXNoXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlIHRoZSBub2RlIHRvIHRoZSBiaW5kaW5nXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBiaW5kIC0gYnkgZGVmYXVsdCBpcyBjb21wb25lbnQuX19ldmFsdWF0aW9uLmxpc3RcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbbm90QmluZGluZz1mYWxzZV1cbiAgICogQHBhcmFtIHtib29sZWFufSBbZXZhbHVhdGVkPWZhbHNlXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2JpbmROb2RlKGJpbmQsIHJlYWxDb21wb25lbnQsIGtleXMsIHBhcmVudHMsIHZhbHVlLCBub3RCaW5kaW5nID0gZmFsc2UsIGV2YWx1YXRlZCA9IGZhbHNlKSB7XG4gICAgbGV0IHBhcmVudEtleXNTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMocGFyZW50cyk7XG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXM7XG5cbiAgICBpZiAoYmluZC5sZW5ndGggJiYgIW5vdEJpbmRpbmcpIHtcbiAgICAgIGxldCBsID0gYmluZC5sZW5ndGggLSAxO1xuICAgICAgbGV0IGRhdGEgPSBiaW5kW2xdO1xuXG4gICAgICBpZiAoZGF0YS5yZWFsQ29tcG9uZW50ID09PSB0aGlzICYmIGRhdGEua2V5c1N0cmluZyA9PSBwYXJlbnRLZXlzU3RyaW5nKSB7XG4gICAgICAgIGNvbXBvbmVudCA9IGRhdGEuY29tcG9uZW50O1xuICAgICAgfSAgICAgIFxuICAgICAgXG4gICAgICBpZiAoZGF0YS5rZXlzU3RyaW5nID09IHBhcmVudEtleXNTdHJpbmcgJiYgZGF0YS5jb21wb25lbnQgPT09IGNvbXBvbmVudCkge1xuICAgICAgICBiaW5kLnNwbGljZShsLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgYmluZC5wdXNoKHtcbiAgICAgIGNvbXBvbmVudCxcbiAgICAgIHJlYWxDb21wb25lbnQ6IHJlYWxDb21wb25lbnQsXG4gICAgICBrZXlzU3RyaW5nOiBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyksXG4gICAgICBwYXJlbnRzLFxuICAgICAga2V5cyxcbiAgICAgIHZhbHVlLFxuICAgICAgZXZhbHVhdGVkLFxuICAgICAgbm90QmluZGluZ1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBrZXkgaXMgdGhlIHN5c3RlbVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqLyBcbiAgX19pc1N5c3RlbUJpbmRpbmdLZXkoa2V5KSB7XG4gICAgcmV0dXJuIGtleSA9PSAnX19kYXRhJztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBiaW5kaW5nIGJ5IHRoZSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldEJpbmQoa2V5cykge1xuICAgIHJldHVybiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MpIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBuZXN0ZWQgYmluZGluZ3MgYnkgdGhlIGtleXNcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqL1xuICBfX2dldEFsbEJpbmRzKGtleXMpIHtcbiAgICBjb25zdCByb290ID0gdGhpcy5fX2dldEJpbmQoa2V5cyk7XG5cbiAgICBpZiAoIXJvb3QpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBsZXQgZGF0YSA9IFtdO1xuXG4gICAgY29uc3QgY29sbGVjdCA9IChvYmopID0+IHtcbiAgICAgIGRhdGEgPSBkYXRhLmNvbmNhdChvYmouX19kYXRhIHx8IFtdKTtcblxuICAgICAgZm9yIChsZXQga2V5IGluIG9iaikge1xuICAgICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrZXkpIHx8IGtleSA9PSAnX19kYXRhJykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29sbGVjdChvYmpba2V5XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29sbGVjdChyb290KTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBiaW5kaW5nIGJ5IHRoZSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRCb3VuZE5vZGUoa2V5cywgbm9kZSkge1xuICAgIGxldCBiaW5kID0gIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncyk7XG5cbiAgICBpZiAoIWJpbmQgfHwgIWJpbmQuX19kYXRhIHx8ICFiaW5kLl9fZGF0YS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYmluZC5fX2RhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgZGF0YSA9IGJpbmQuX19kYXRhW2ldO1xuXG4gICAgICBpZiAoZGF0YS5ub2RlID09PSBub2RlKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgbm9kZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2V2YWx1YXRlZD1mYWxzZV1cbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMsIHZhbHVlLCBldmFsdWF0ZWQgPSBmYWxzZSkge1xuICAgIGxldCBwcm9wID0gdGhpcy5fX2dldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKTsgICAgXG4gICAgbGV0IGhhc2ggPSB1dGlscy5jcmVhdGVIYXNoKHZhbHVlKTtcblxuICAgIGlmIChwcm9wKSB7XG4gICAgICBsZXQgcmVzID0gbm9kZS5fX2NvbXBvbmVudC5fX2NvbXBhcmVOb2RlUHJvcGVydHlWYWx1ZShwcm9wLCB2YWx1ZSk7XG4gICAgICBwcm9wLnZhbHVlID0gdmFsdWU7XG4gICAgICBwcm9wLmhhc2ggPSBoYXNoO1xuICAgICAgcmV0dXJuICFyZXM7XG4gICAgfVxuICAgIFxuICAgIG5vZGUuX19wcm9wZXJ0aWVzW3RoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKV0gPSB7XG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICB2YWx1ZSxcbiAgICAgIGhhc2gsXG4gICAgICBub2RlLFxuICAgICAga2V5cyxcbiAgICAgIGV2YWx1YXRlZCAgXG4gICAgfTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbm9kZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMpIHtcbiAgICByZXR1cm4gbm9kZS5fX3Byb3BlcnRpZXNbdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpXSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSB0aGUgbm9kZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RlbGV0ZU5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKSB7XG4gICAgbGV0IGhhc2ggPSBgJHt0aGlzLl9fc2NvcGUuX19uYW1lfS4ke0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKX1gO1xuICAgIGRlbGV0ZSBub2RlLl9fcHJvcGVydGllc1toYXNoXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXAgdGhlIG5vZGVzXG4gICAqIFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fbWFwTm9kZXMoZm4sIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSB7IHJvb3RBdHRyczogdHJ1ZSwgYXR0cnM6IHRydWUsIG5vZGU6IHRydWUsIGVsOiB0cnVlLCAuLi5vcHRpb25zIH07XG5cbiAgICBjb25zdCBmaW5kID0gKGVsKSA9PiB7XG4gICAgICBpZighZWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZihvcHRpb25zLmF0dHJzICYmIChlbCAhPT0gdGhpcy5lbCB8fCBvcHRpb25zLnJvb3RBdHRycykpIHtcbiAgICAgICAgZm9yIChsZXQgayA9IDAsIGF0dHJzID0gZWwuYXR0cmlidXRlcywgYyA9IGF0dHJzLmxlbmd0aDsgayA8IGM7IGsrKykge1xuICAgICAgICAgIGZuKGF0dHJzW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBmb3IgKGxldCBpID0gZWwuY2hpbGROb2Rlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjb25zdCBub2RlID0gZWwuY2hpbGROb2Rlc1tpXTtcblxuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PSAzKSB7XG4gICAgICAgICAgb3B0aW9ucy5ub2RlICYmIGZuKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT0gMSAmJiAhbm9kZS5fX2FraWxpKSB7XG4gICAgICAgICAgZmluZChub2RlKTtcbiAgICAgICAgICBvcHRpb25zLmVsICYmIGZuKG5vZGUpOyAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgZmluZCh0aGlzLmVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIG5vZGVzXG4gICAqIFxuICAgKiBAcmV0dXJucyB7Tm9kZVtdfVxuICAgKiBAcHJvdGVjdGVkIFxuICAgKi9cbiAgX19nZXRBbGxOb2RlcygpIHtcbiAgICBjb25zdCBub2RlcyA9IFtdO1xuICAgIHRoaXMuX19tYXBOb2Rlcyhub2RlID0+IG5vZGVzLnB1c2gobm9kZSkpO1xuICAgIHJldHVybiBub2RlcztcbiAgfVxuICBcbiAgLyoqXG4gICAqIEJpbmQgdGhlIGRhdGEgd2l0aCB0aGUga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYmluZChrZXlzLCBkYXRhKSB7XG4gICAgdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzLCAobGFzdCwgdmFsdWUpID0+IHtcbiAgICAgIGxldCBvYmogPSB7IF9fZGF0YTogW10gfTtcblxuICAgICAgaWYgKCFsYXN0KSB7XG4gICAgICAgIHJldHVybiB2YWx1ZT8gdmFsdWU6IG9iajtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgICAgICBvYmogPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFvYmouX19kYXRhKSB7XG4gICAgICAgIG9iai5fX2RhdGEgPSBbXTtcbiAgICAgIH1cblxuICAgICAgb2JqLl9fZGF0YS5wdXNoKGRhdGEpO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgdGhlIGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYmluZChrZXlzKSB7XG4gICAgbGV0IGJpbmQgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MpO1xuXG4gICAgaWYgKCFiaW5kIHx8ICFiaW5kLl9fZGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYmluZC5fX2RhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IGJpbmQuX19kYXRhW2ldLm5vZGU7XG4gICAgICB0aGlzLl9fZGVsZXRlTm9kZVByb3BlcnR5KG5vZGUsIGtleXMpO1xuICAgIH1cblxuICAgIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncywgKHZhbHVlKSA9PiB7XG4gICAgICBpZiAoT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdmFsdWUuX19kYXRhID0gW107XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIHRoZSBkYXRhIGJ5IG5vZGVzXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZXxOb2RlW119IG5vZGVzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5iaW5kQnlOb2Rlcyhub2Rlcykge1xuICAgIG5vZGVzIGluc3RhbmNlb2YgTm9kZSAmJiAobm9kZXMgPSBbbm9kZXNdKTtcblxuICAgIGNvbnN0IHVuYmluZCA9IChvYmosIHBhcmVudCwga2V5KSA9PiB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICAgICAgZm9yIChsZXQgaiA9IDAsIGMgPSBrZXlzLmxlbmd0aDsgaiA8IGM7IGorKykge1xuICAgICAgICBjb25zdCBrID0ga2V5c1tqXTtcbiAgICAgICAgXG4gICAgICAgIGlmIChrID09ICdfX2RhdGEnKSB7XG4gICAgICAgICAgbGV0IGRhdGEgPSBvYmpba10gfHwgW107XG4gICAgICAgICAgbGV0IGwgPSBkYXRhLmxlbmd0aDtcblxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYmluZCA9IGRhdGFbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChub2Rlcy5pbmRleE9mKGJpbmQubm9kZSkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgZGVsZXRlIGJpbmQubm9kZTsgICAgICAgICAgICBcbiAgICAgICAgICAgICAgZGF0YS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgbC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghbCkge1xuICAgICAgICAgICAgZGVsZXRlIG9ialtrXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXRoaXMuX19pc1N5c3RlbUJpbmRpbmdLZXkoaykpIHtcbiAgICAgICAgICB1bmJpbmQob2JqW2tdLCBvYmosIGspO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYocGFyZW50ICYmICFPYmplY3Qua2V5cyhvYmopLmxlbmd0aCkge1xuICAgICAgICAgIGRlbGV0ZSBwYXJlbnRba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB1bmJpbmQodGhpcy5fX2JpbmRpbmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIHBhcmVudCBiaW5kaW5ncyB3aXRoIHRoZSBub2Rlc1xuICAgKiBcbiAgICogQHBhcmFtIHtOb2RlfE5vZGVbXX0gbm9kZXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmJpbmRQYXJlbnRzQnlOb2Rlcyhub2RlcykgeyAgXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuX19wYXJlbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5fX3BhcmVudHNbaV07ICAgICAgXG4gICAgICBwYXJlbnQgJiYgcGFyZW50Ll9fYWtpbGkgJiYgcGFyZW50Ll9fYWtpbGkuX191bmJpbmRCeU5vZGVzKG5vZGVzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIGxpbmtzXG4gICAqIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NsZWFyU3RvcmVMaW5rcygpIHtcbiAgICBjb25zdCBsaW5rcyA9IEFraWxpLl9fc3RvcmVMaW5rcztcblxuICAgIGZvciAobGV0IGtleSBpbiBsaW5rcykge1xuICAgICAgY29uc3QgYXJyID0gbGlua3Nba2V5XTtcblxuICAgICAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjb25zdCBsaW5rID0gYXJyW2ldO1xuICBcbiAgICAgICAgaWYgKGxpbmsuY29tcG9uZW50ID09PSB0aGlzKSB7XG4gICAgICAgICAgZm9yKGxldCBrIGluIGxpbmspIHtcbiAgICAgICAgICAgIGRlbGV0ZSBsaW5rW2tdXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYXJyLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWFyci5sZW5ndGgpIHtcbiAgICAgICAgZGVsZXRlIGxpbmtzW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgY2hpbGRyZW5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcmV0dXJucyB7Tm9kZVtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlbW92ZUNoaWxkcmVuKG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBub2RlcyA9IFtdO1xuXG4gICAgY29uc3QgcmVtb3ZlID0gKGNoaWxkcmVuKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICByZW1vdmUoY2hpbGQuX19ha2lsaS5fX2NoaWxkcmVuKTtcbiAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQoY2hpbGQuX19ha2lsaS5fX3JlbW92ZShvcHRpb25zKSk7XG4gICAgICAgIGktLTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVtb3ZlKHRoaXMuX19jaGlsZHJlbik7XG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgY29tcG9uZW50IHdpdGhvdXQgdGhlIGNoaWxkcmVuIHJlbW92aW5nXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHJldHVybnMge05vZGVbXX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZW1vdmUob3B0aW9ucyA9IHt9KSB7IFxuICAgIGxldCBub2RlcyA9IFtdO1xuICAgIHRoaXMuYXR0cnMub25SZW1vdmVkICYmIHRoaXMuYXR0cnMub25SZW1vdmVkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pOyBcbiAgICB0aGlzLnJlbW92ZWQoKTsgICBcbiAgICBub2RlcyA9IG5vZGVzLmNvbmNhdCh0aGlzLl9fZGV0YWNoKHsgc2F2ZUJpbmRpbmdzOiB0cnVlLCBkZWluaXRpYWxpemVOb2RlczogdHJ1ZSB9KS5jb25jYXQodGhpcy5fX2VtcHR5KHsgc2F2ZUJpbmRpbmdzOiB0cnVlIH0pKSk7XG4gICAgdGhpcy5fX2NsZWFyU3RvcmVMaW5rcygpOyAgXG4gICAgdGhpcy5fX3Njb3BlLl9fcmVtb3ZlKCk7XG4gICAgZGVsZXRlIHRoaXMuX19zY29wZTtcbiAgICBkZWxldGUgdGhpcy5zY29wZTtcbiAgICB0aGlzLmVsLnJlbW92ZSgpO1xuICAgIGRlbGV0ZSB0aGlzLmVsLl9fYWtpbGk7XG4gICAgZGVsZXRlIHRoaXMuZWw7ICAgIFxuICAgIGRlbGV0ZSB0aGlzLl9fcGFyZW50OyAgICBcbiAgICBkZWxldGUgdGhpcy5fX2F0dHJpYnV0ZU9mO1xuICAgIGRlbGV0ZSB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudDtcbiAgICBkZWxldGUgdGhpcy5fX2V2YWx1YXRpb25QYXJlbnQ7XG4gICAgXG4gICAgaWYoIW9wdGlvbnMuc2F2ZUJpbmRpbmdzKSB7XG4gICAgICB0aGlzLl9fdW5iaW5kQnlOb2Rlcyhub2Rlcyk7ICAgXG4gICAgICB0aGlzLl9fdW5iaW5kUGFyZW50c0J5Tm9kZXMobm9kZXMpO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLl9fcGFyZW50cyAmJiAodGhpcy5fX3BhcmVudHMubGVuZ3RoID0gMCk7ICAgIFxuICAgIGRlbGV0ZSB0aGlzLl9fcGFyZW50cztcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICAvKipcbiAgICogRGV0YWNoIHRoZSBjb21wb25lbnRcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RldGFjaChvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLl9fcGFyZW50ICYmIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX3NwbGljZUNoaWxkKHRoaXMuZWwpO1xuICAgIGNvbnN0IG5vZGVzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwuYXR0cmlidXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBub2RlID0gdGhpcy5lbC5hdHRyaWJ1dGVzW2ldO1xuXG4gICAgICBpZihub2RlLl9faW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgbm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgb3B0aW9ucy5kZWluaXRpYWxpemVOb2RlcyAmJiB0aGlzLl9fZGVpbml0aWFsaXplTm9kZShub2RlLCB7IHNhdmVCaW5kaW5nczogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZighb3B0aW9ucy5zYXZlQmluZGluZ3MpIHtcbiAgICAgIHRoaXMuX191bmJpbmRQYXJlbnRzQnlOb2Rlcyhub2Rlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBjb21wb25lbnQgaHRtbFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEByZXR1cm5zIHtOb2RlW119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZW1wdHkob3B0aW9ucyA9IHt9KSB7ICAgIFxuICAgIGNvbnN0IG5vZGVzID0gdGhpcy5fX3JlbW92ZUNoaWxkcmVuKHsgc2F2ZUJpbmRpbmdzOiB0cnVlIH0pO1xuICAgIFxuICAgIHRoaXMuX19tYXBOb2Rlcyhub2RlID0+IHsgICAgICBcbiAgICAgIGlmKG5vZGUubm9kZVR5cGUgPT0gMSkge1xuICAgICAgICBub2RlLnJlbW92ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmKCFub2RlLl9faW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAgICAgIFxuICAgICAgXG4gICAgICB0aGlzLl9fZGVpbml0aWFsaXplTm9kZShub2RlLCB7IHNhdmVCaW5kaW5nczogdHJ1ZSB9KTsgIFxuICAgICAgbm9kZXMucHVzaChub2RlKTtcbiAgICB9LCB7IHJvb3RBdHRyczogZmFsc2UgfSk7XG5cbiAgICBpZighb3B0aW9ucy5zYXZlQmluZGluZ3MpIHtcbiAgICAgIHRoaXMuX191bmJpbmRCeU5vZGVzKG5vZGVzKTtcbiAgICAgIHRoaXMuX191bmJpbmRQYXJlbnRzQnlOb2Rlcyhub2Rlcyk7XG4gICAgfVxuXG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBwYXJlbnQgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kQWxsPXRydWVdIC0gZ2V0IGFycmF5IGlmIHRydWVcbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudHxDb21wb25lbnRbXX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRQYXJlbnQoc2VsZWN0b3IgPSAnJywgZmluZEFsbCA9IGZhbHNlLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGxldCBsZXZlbCA9IDA7XG5cbiAgICBpZiAodHlwZW9mIGxldmVscyAhPSAnb2JqZWN0Jykge1xuICAgICAgbGV2ZWxzID0gW2xldmVsc107XG4gICAgfVxuXG4gICAgY29uc3QgZmluZCA9IChwYXJlbnQpID0+IHtcbiAgICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFsZXZlbHMgfHwgbGV2ZWxzLmluZGV4T2YobGV2ZWwpICE9IC0xKSB7XG4gICAgICAgIGlmICghc2VsZWN0b3IgfHwgcGFyZW50Ll9fYWtpbGkubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICBpZiAoIWZpbmRBbGwpIHtcbiAgICAgICAgICAgIGFyci5wdXNoKHBhcmVudC5fX2FraWxpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhcnIucHVzaChwYXJlbnQuX19ha2lsaSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV2ZWwrKztcbiAgICAgIGZpbmQocGFyZW50Ll9fYWtpbGkuX19wYXJlbnQpO1xuICAgIH07XG5cbiAgICBmaW5kKHRoaXMuX19wYXJlbnQpO1xuICAgIHJldHVybiBmaW5kQWxsPyBhcnI6IChhcnJbMF0gfHwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjaGlsZCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZpbmRBbGw9dHJ1ZV0gLSBnZXQgYXJyYXkgaWYgdHJ1ZVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldENoaWxkcmVuKHNlbGVjdG9yID0gJycsIGZpbmRBbGwgPSB0cnVlLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGxldCBsZXZlbCA9IDA7XG5cbiAgICBpZiAodHlwZW9mIGxldmVscyAhPSAnb2JqZWN0Jykge1xuICAgICAgbGV2ZWxzID0gW2xldmVsc107XG4gICAgfVxuXG4gICAgY29uc3QgZmluZCA9IChjaGlsZHJlbikgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYgKCFsZXZlbHMgfHwgbGV2ZWxzLmluZGV4T2YobGV2ZWwpICE9IC0xKSB7XG4gICAgICAgICAgaWYgKCFzZWxlY3RvciB8fCBjaGlsZC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICBpZiAoIWZpbmRBbGwpIHtcbiAgICAgICAgICAgICAgYXJyLnB1c2goY2hpbGQuX19ha2lsaSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXJyLnB1c2goY2hpbGQuX19ha2lsaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldmVsKys7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGZpbmQoY2hpbGRyZW5baV0uX19ha2lsaS5fX2NoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmluZCh0aGlzLl9fY2hpbGRyZW4pO1xuICAgIHJldHVybiBmaW5kQWxsPyBhcnI6IChhcnJbMF0gfHwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBuZWFyZXN0IGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JpZ2h0PWZhbHNlXSAtIGZyb20gdGhlIHJpZ2h0IHNpZGUgaWYgdHJ1ZVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldE5lYXIoc2VsZWN0b3IgPSAnJywgZmluZEFsbCA9IHRydWUsIHJpZ2h0ID0gZmFsc2UpIHtcbiAgICBpZiAoIXRoaXMuX19wYXJlbnQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCBsZXZlbEVsZW1lbnRzID0gdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fY2hpbGRyZW4uc2xpY2UoKTtcbiAgICBsZXQgYXJyID0gW107XG4gICAgcmlnaHQgJiYgbGV2ZWxFbGVtZW50cy5yZXZlcnNlKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxldmVsRWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgZWwgPSBsZXZlbEVsZW1lbnRzW2ldO1xuXG4gICAgICBpZiAoZWwgPT09IHRoaXMuZWwpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmICghc2VsZWN0b3IgfHwgZWwuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBhcnIucHVzaChlbC5fX2FraWxpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhcnIucmV2ZXJzZSgpO1xuXG4gICAgaWYgKCFmaW5kQWxsKSB7XG4gICAgICByZXR1cm4gYXJyLmxlbmd0aD8gYXJyWzBdOiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBsaW5rIHdpdGggdGhlIHN0b3JlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHN0b3JlKG5hbWUsIGhhbmRsZXIpIHtcbiAgICBpZiAoIXRoaXMuX19pc01vdW50ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTWV0aG9kIFwic3RvcmVcIiBtdXN0IGJlIGNhbGxlZCBhZnRlciB0aGUgY29tcGlsYXRpb24uIEZvciBleGFtcGxlLCBpbiBcImNvbXBpbGVkXCIgbWV0aG9kLmApO1xuICAgIH1cblxuICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodHlwZW9mIG5hbWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYXJncy51bnNoaWZ0KCcqJyk7XG4gICAgICBoYW5kbGVyID0gbmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbic/IHRoaXMuX19zdG9yZUJ5RnVuY3Rpb24oLi4uYXJncyk6IHRoaXMuX19zdG9yZUJ5S2V5cyguLi5hcmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIGxpbmsgd2l0aCB0aGUgYXR0cmlidXRlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGF0dHIobmFtZSwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5fX2lzTW91bnRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNZXRob2QgXCJhdHRyXCIgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgdGhlIGNvbXBpbGF0aW9uLiBGb3IgZXhhbXBsZSwgaW4gXCJjb21waWxlZFwiIG1ldGhvZC5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYgKHR5cGVvZiBuYW1lID09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFyZ3MudW5zaGlmdCgnKicpO1xuICAgICAgaGFuZGxlciA9IG5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nPyB0aGlzLl9fYXR0ckJ5RnVuY3Rpb24oLi4uYXJncyk6IHRoaXMuX19hdHRyQnlLZXlzKC4uLmFyZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgc3RvcmUgbGlua1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfGZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICB1bnN0b3JlKG5hbWUsIGhhbmRsZXIpIHtcbiAgICBpZiAoIXRoaXMuX19pc01vdW50ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTWV0aG9kIFwidW5zdG9yZVwiIG11c3QgYmUgY2FsbGVkIGFmdGVyIHRoZSBjb21waWxhdGlvbi4gRm9yIGV4YW1wbGUsIGluIFwiY29tcGlsZWRcIiBtZXRob2QuYCk7XG4gICAgfVxuXG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICh0eXBlb2YgbmFtZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhcmdzLnVuc2hpZnQoJyonKTtcbiAgICAgIGhhbmRsZXIgPSBuYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJz8gdGhpcy5fX3Vuc3RvcmVCeUZ1bmN0aW9uKC4uLmFyZ3VtZW50cyk6IHRoaXMuX191bnN0b3JlQnlLZXlzKC4uLmFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBhdHRyaWJ1dGUgbGlua1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfGZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICB1bmF0dHIobmFtZSwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5fX2lzTW91bnRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNZXRob2QgXCJ1bmF0dHJcIiBtdXN0IGJlIGNhbGxlZCBhZnRlciB0aGUgY29tcGlsYXRpb24uIEZvciBleGFtcGxlLCBpbiBcImNvbXBpbGVkXCIgbWV0aG9kLmApO1xuICAgIH1cblxuICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodHlwZW9mIG5hbWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYXJncy51bnNoaWZ0KCcqJyk7XG4gICAgICBoYW5kbGVyID0gbmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbic/IHRoaXMuX191bmF0dHJCeUZ1bmN0aW9uKC4uLmFyZ3VtZW50cyk6IHRoaXMuX191bmF0dHJCeUtleXMoLi4uYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgY29tcG9uZW50IHVzaW5nIHRoZSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gc2VsZWN0b3JcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBtYXRjaGVzKHNlbGVjdG9yKSB7XG4gICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3IodGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZWwubWF0Y2hlcyhzZWxlY3Rvcik7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjbG9zZXN0IHBhcmVudCBjb21wb25lbnQgYnkgdGhlIHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR9XG4gICAqL1xuICBwYXJlbnQoc2VsZWN0b3IgPSAnJywgbGV2ZWxzID0gbnVsbCkge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0UGFyZW50KHNlbGVjdG9yLCBmYWxzZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYW4gYXJyYXkgb2YgcGFyZW50IGNvbXBvbmVudHMgYnkgdGhlIHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIHBhcmVudHMoc2VsZWN0b3IgPSAnJywgbGV2ZWxzID0gbnVsbCkge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0UGFyZW50KHNlbGVjdG9yLCB0cnVlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY2xvc2VzdCBjaGlsZCBjb21wb25lbnQgYnkgdGhlIHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR9XG4gICAqL1xuICBjaGlsZChzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRDaGlsZHJlbihzZWxlY3RvciwgZmFsc2UsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFuIGFycmF5IG9mIGNoaWxkIGNvbXBvbmVudHMgYnkgdGhlIHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGNoaWxkcmVuKHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldENoaWxkcmVuKHNlbGVjdG9yLCB0cnVlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbiBhcnJheSBvZiBjb21wb25lbnRzIGxlZnQgZnJvbSB0aGUgY3VycmVudCBieSB0aGUgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgYmVmb3JlKHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIHRydWUsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYW4gYXJyYXkgb2YgY29tcG9uZW50cyByaWdodCBmcm9tIHRoZSBjdXJyZW50IGJ5IHRoZSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBhZnRlcihzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCB0cnVlLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGNsb3Nlc3QgbGVmdGNvbXBvbmVudCBieSB0aGUgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIHByZXYoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgZmFsc2UsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGNsb3Nlc3QgcmlnaHQgY29tcG9uZW50IGJ5IHRoZSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgbmV4dChzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCBmYWxzZSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIHRoZSBlbGVtZW50IHBhcmVudFxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHBhcmVudFxuICAgKi9cbiAgYXBwZW5kVG8ocGFyZW50KSB7ICAgXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWwpO1xuICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB7IHNldFBhcmVudHM6IHRydWUsIGNoZWNrQ2hhbmdlczogZmFsc2UgfSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW5jZWwgdGhlIGNvbXBvbmVudCBjb21waWxhdGlvblxuICAgKi9cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXBpbGUgdGhlIGNvbXBvbmVudCBidXQgcHJldmVudCB0aGUgY29tcGlsYXRpb24gaW5zaWRlXG4gICAqL1xuICBwcmV2ZW50KCkge1xuICAgIHRoaXMuX19wcmV2ZW50ID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciB0aGUgZWxlbWVudCBjb250ZW50XG4gICAqXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgZW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19lbXB0eS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgZWxlbWVudFxuICAgKlxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIHJlbW92ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX3JlbW92ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHt9XG4gIGNvbXBpbGVkKCkge31cbiAgcmVjb21waWxlZCgpIHt9XG4gIHJlc29sdmVkKCkge31cbiAgcmVtb3ZlZCgpIHt9XG59IiwiaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogUmVxdWVzdCBjbGFzcy5cbiAqIFRoZSBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGFsbG93cyB5b3UgdG8gbWFrZSByZXF1ZXN0cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yZXF1ZXN0c31cbiAqL1xuZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xuICBfX2NhY2hlID0ge307XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbZGVmYXVsdHNdIFxuICAgKi9cbiAgY29uc3RydWN0b3IoYmFzZVVybCwgZGVmYXVsdHMpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSBiYXNlVXJsPyAoYmFzZVVybC5yZXBsYWNlKC9cXC8kLywgJycpICsgJy8nKTogJyc7XG5cbiAgICB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgc3RhdHVzRXJyb3JQYXR0ZXJuOiAvXlteMjNdLyxcbiAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgIC4uLihkZWZhdWx0cyB8fCB7fSlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgdGhlIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBxdWVyeShvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIG9wdGlvbnMgPSB7Li4udGhpcy5kZWZhdWx0cywgLi4uKG9wdGlvbnMgfHwge30pfTsgXG4gICAgICBvcHRpb25zLnVybCA9IHRoaXMuYmFzZVVybD8gYCR7dGhpcy5iYXNlVXJsfSR7b3B0aW9ucy51cmwucmVwbGFjZSgvXlxcLy8sICcnKX1gOiBvcHRpb25zLnVybDsgIFxuICAgICAgb3B0aW9ucy5tZXRob2QgPSBvcHRpb25zLm1ldGhvZCB8fCAnR0VUJztcbiAgICAgIFxuICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOyAgICAgIFxuICAgICAgY29uc3QgYmVmb3JlID0gdGhpcy50cmFuc2Zvcm1CZWZvcmUoeGhyLCBvcHRpb25zKTtcbiAgICAgIHhociA9IGJlZm9yZS54aHI7XG4gICAgICBvcHRpb25zID0gYmVmb3JlLm9wdGlvbnM7XG4gICAgICAodHlwZW9mIG9wdGlvbnMub25TdGFydCA9PSAnZnVuY3Rpb24nKSAmJiBvcHRpb25zLm9uU3RhcnQoeGhyKTsgIFxuICAgICAgb3B0aW9ucy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzIHx8IHt9O1xuICAgICAgXG4gICAgICBpZiAob3B0aW9ucy5qc29uKSB7XG4gICAgICAgIG9wdGlvbnMuanNvbiAhPT0gdHJ1ZSAmJiAob3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5qc29uKSk7XG4gICAgICAgIG9wdGlvbnMuaGVhZGVyc1snY29udGVudC10eXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgIG9wdGlvbnMucmVzcG9uc2VUeXBlID0gb3B0aW9ucy5yZXNwb25zZVR5cGUgfHwgJ2pzb24nO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAob3B0aW9ucy5mb3JtKSB7XG4gICAgICAgIG9wdGlvbnMuYm9keSA9IHRoaXMuY3JlYXRlRm9ybURhdGEob3B0aW9ucy5mb3JtKTtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzWydjb250ZW50LXR5cGUnXSA9ICdtdWx0aXBhcnQvZm9ybS1kYXRhJztcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMucGFyYW1zKSB7XG4gICAgICAgIGxldCBzdHIgPSB0aGlzLnBhcmFtc1RvUXVlcnkob3B0aW9ucy5wYXJhbXMpO1xuICAgICAgICBzdHIgJiYgKG9wdGlvbnMudXJsICs9IFwiP1wiICsgc3RyKTtcbiAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICBsZXQgaGFzaCA9IG51bGw7XG4gICAgICBsZXQgY2FjaGUgPSB0eXBlb2Ygb3B0aW9ucy5jYWNoZSA9PSAnZnVuY3Rpb24nPyBvcHRpb25zLmNhY2hlKG9wdGlvbnMpOiBvcHRpb25zLmNhY2hlO1xuICAgICAgKCF3aW5kb3cuQUtJTElfU1NSICYmICFBa2lsaS5fX2luaXQpICYmIChjYWNoZSA9IHRydWUpO1xuXG4gICAgICBpZihvcHRpb25zLm1ldGhvZC50b1VwcGVyQ2FzZSgpID09ICdHRVQnICYmICghb3B0aW9ucy5ib2R5IHx8IHR5cGVvZiBvcHRpb25zLmJvZHkgPT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGhhc2ggPSB0aGlzLmNyZWF0ZUNhY2hlSGFzaCh7IFxuICAgICAgICAgIHVybDogb3B0aW9ucy51cmwsXG4gICAgICAgICAgbWV0aG9kOiBvcHRpb25zLm1ldGhvZCxcbiAgICAgICAgICB1c2VyOiBvcHRpb25zLnVzZXIsIFxuICAgICAgICAgIHBhc3N3b3JkOiBvcHRpb25zLnBhc3N3b3JkLCBcbiAgICAgICAgICBib2R5OiBvcHRpb25zLmJvZHkgXG4gICAgICAgIH0pOyAgICAgICAgXG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmKGNhY2hlICYmIGhhc2gpIHsgICAgICAgIFxuICAgICAgICBsZXQgX2NhY2hlID0gdGhpcy5nZXRDYWNoZShoYXNoKTtcbiAgICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgICAgIGlmKF9jYWNoZSAmJiAoY2FjaGUgPT09IHRydWUgfHwgbm93IC0gX2NhY2hlLmNyZWF0ZWRBdCA8PSBjYWNoZSkpIHtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0aGlzLnRyYW5zZm9ybUFmdGVyKF9jYWNoZS5yZXN1bHQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB4aHIub3BlbihvcHRpb25zLm1ldGhvZCwgb3B0aW9ucy51cmwsIHRydWUsIG9wdGlvbnMudXNlciwgb3B0aW9ucy5wYXNzd29yZCk7XG5cbiAgICAgIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KCd0aW1lb3V0JykpIHtcbiAgICAgICAgeGhyLnRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnJlc3BvbnNlVHlwZSkge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gb3B0aW9ucy5yZXNwb25zZVR5cGU7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLndpdGhDcmVkZW50aWFscykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gb3B0aW9ucy53aXRoQ3JlZGVudGlhbHM7XG4gICAgICB9XG5cbiAgICAgIGxldCBoZWFkZXJLZXlzID0gT2JqZWN0LmtleXMob3B0aW9ucy5oZWFkZXJzKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBoZWFkZXJLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgayA9IGhlYWRlcktleXNbaV07XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGssIG9wdGlvbnMuaGVhZGVyc1trXSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5vblByb2dyZXNzID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgeGhyLm9ucHJvZ3Jlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9wdGlvbnMub25Qcm9ncmVzcyh4aHIpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgcmVzcG9uc2U6IHhoci5yZXNwb25zZSxcbiAgICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICAgICAgcmVhZHlTdGF0ZTogeGhyLnJlYWR5U3RhdGUsXG4gICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHQsXG4gICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB4aHIud2l0aENyZWRlbnRpYWxzLFxuICAgICAgICAgIHJlc3BvbnNlVHlwZTogeGhyLnJlc3BvbnNlVHlwZSxcbiAgICAgICAgICByZXNwb25zZVRleHQ6IHhoci5yZXNwb25zZVR5cGUgPT0gJ3RleHQnPyB4aHIucmVzcG9uc2VUZXh0OiAnJyxcbiAgICAgICAgICByZXNwb25zZVhNTDogeGhyLnJlc3BvbnNlVHlwZSA9PSAnZG9jdW1lbnQnPyB4aHIucmVzcG9uc2VYTUw6ICcnLFxuICAgICAgICAgIHJlc3BvbnNlVVJMOiB4aHIucmVzcG9uc2VVUkwsXG4gICAgICAgICAgdGltZW91dDogeGhyLnRpbWVvdXQsXG4gICAgICAgICAgaGVhZGVyczogdGhpcy5nZXRIZWFkZXJzKHhociksICAgICAgICAgXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB0aGlzLnRyYW5zZm9ybUFmdGVyKHJlc3VsdCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc3RhdHVzRXJyb3JQYXR0ZXJuICYmICh4aHIuc3RhdHVzICsgJycpLm1hdGNoKG9wdGlvbnMuc3RhdHVzRXJyb3JQYXR0ZXJuKSkge1xuICAgICAgICAgIGxldCBlcnIgPSBuZXcgRXJyb3IoYFJlcXVlc3QgdG8gXCIke29wdGlvbnMudXJsfVwiIHJldHVybnMgZmFpbHVyZSBzdGF0dXMgY29kZSAke3hoci5zdGF0dXN9YCk7XG4gICAgICAgICAgZXJyLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICB9IFxuXG4gICAgICAgIChjYWNoZSB8fCB3aW5kb3cuQUtJTElfU1NSKSAmJiBoYXNoICYmIHRoaXMuY3JlYXRlQ2FjaGUoaGFzaCwgcmVzdWx0KTtcbiAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub250aW1lb3V0ID0gKCkgPT4ge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKGBSZXF1ZXN0IHRvIFwiJHtvcHRpb25zLnVybH1cIiB0aW1lZCBvdXRgKSk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub25lcnJvciA9IHJlamVjdDtcbiAgICAgIHhoci5zZW5kKG9wdGlvbnMuYm9keSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBoZWFkZXJzIG9mIGFuIFhNTEh0dHBSZXF1ZXN0IGluc3RhbmNlXG4gICAqIFxuICAgKiBAcGFyYW0ge1hNTEh0dHBSZXF1ZXN0fVxuICAgKi9cbiAgZ2V0SGVhZGVycyA9IGZ1bmN0aW9uKHhocikge1xuICAgIGxldCBoZWFkZXJzID0ge307XG4gICAgbGV0IHN0ciA9IHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKTsgIFxuICAgIGxldCBhcnIgPSBzdHIuc3BsaXQoJ1xcdTAwMGRcXHUwMDBhJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBsaW5lID0gYXJyW2ldO1xuICAgICAgbGV0IGluZGV4ID0gbGluZS5pbmRleE9mKCdcXHUwMDNhXFx1MDAyMCcpO1xuXG4gICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgIGxldCBrZXkgPSBsaW5lLnN1YnN0cmluZygwLCBpbmRleCk7XG4gICAgICAgIGxldCB2YWwgPSBsaW5lLnN1YnN0cmluZyhpbmRleCArIDIpO1xuICAgICAgICBoZWFkZXJzW2tleV0gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGhlYWRlcnM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjYWNoZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhhc2hcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIGdldENhY2hlKGhhc2gpIHtcbiAgICByZXR1cm4gdGhpcy5fX2NhY2hlW2hhc2hdIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBjYWNoZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhhc2hcbiAgICogQHBhcmFtIHtvYmplY3R9IHJlc3VsdFxuICAgKi9cbiAgY3JlYXRlQ2FjaGUoaGFzaCwgcmVzdWx0KSB7XG4gICAgdGhpcy5fX2NhY2hlW2hhc2hdID0geyByZXN1bHQsIGNyZWF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKCkgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGNhY2hlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGFzaFxuICAgKi9cbiAgcmVtb3ZlQ2FjaGUoaGFzaCkge1xuICAgIGRlbGV0ZSB0aGlzLl9fY2FjaGVbaGFzaF07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgaGFzaCBmb3Igc2F2aW5nIGluIHRoZSBjYWNoZVxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGNyZWF0ZUNhY2hlSGFzaChkYXRhKSB7XG4gICAgcmV0dXJuIHV0aWxzLmNyZWF0ZUhhc2goZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCB0aGUgb2JqZWN0IHRvIGEgcXVlcnkgc3RyaW5nXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHBhcmFtc1RvUXVlcnkob2JqKSB7XG4gICAgbGV0IHNlcCA9ICcmJztcbiAgICBsZXQgZXEgPSAnPSc7XG5cbiAgICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLm1hcCgoaykgPT4ge1xuICAgICAgbGV0IGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KGspO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmpba10pKSB7XG4gICAgICAgIGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KGspO1xuICAgICAgICByZXR1cm4gb2JqW2tdLm1hcCgodiwgaSkgPT4ga3MgKyBgWyR7aX1dYCArIGVxICsgZW5jb2RlVVJJQ29tcG9uZW50KHYpKS5qb2luKHNlcCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChvYmpba10gJiYgdHlwZW9mIG9ialtrXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbGV0IG9wdCA9IFtdO1xuICAgICAgICBPYmplY3Qua2V5cyhvYmpba10pLm1hcCgoa2V5KSA9PiBvcHQucHVzaChrcyArIGBbJHtrZXl9XWAgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba11ba2V5XSkpKTtcbiAgICAgICAgcmV0dXJuIG9wdC5qb2luKHNlcCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGtzICsgZXEgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tdKTtcbiAgICAgIH1cbiAgICB9KS5qb2luKHNlcCk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCB0aGUgcXVlcnkgc3RyaW5nIHRvIGFuIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICBwYXJhbXNGcm9tUXVlcnkoc3RyKSB7XG4gICAgbGV0IHF1ZXJ5ID0ge307XG4gICAgbGV0IGFtcHMgPSBzdHIuc3BsaXQoJyYnKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYW1wcy5sZW5ndGg7IGkgPGw7IGkrKykge1xuICAgICAgbGV0IGVxcyA9ICBhbXBzW2ldLnNwbGl0KCc9Jyk7XG4gICAgICBsZXQga2V5ID0gZGVjb2RlVVJJQ29tcG9uZW50KGVxc1swXSk7XG4gICAgICBsZXQgdmFsID0gZGVjb2RlVVJJQ29tcG9uZW50KGVxc1sxXSk7XG5cbiAgICAgIGlmICgha2V5KSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgICBxdWVyeVtrZXldLnB1c2godmFsKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHF1ZXJ5W2tleV0pIHtcbiAgICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldLCB2YWxdO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHF1ZXJ5W2tleV0gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBtdWx0aXBhcnQgZm9ybSBkYXRhIGZyb20gdGhlIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEBwYXJhbSB7Rm9ybURhdGF9IFtkYXRhXVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25hbWVzcGFjZV1cbiAgICogQHJldHVybnMge0Zvcm1EYXRhfVxuICAgKi9cbiAgY3JlYXRlRm9ybURhdGEob2JqLCBkYXRhID0gbnVsbCwgbmFtZXNwYWNlID0gJycpIHtcbiAgICBsZXQgZmQgPSBkYXRhIHx8IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgZm9yIChsZXQgayBpbiBvYmopIHtcbiAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaykgJiYgb2JqW2tdKSB7XG4gICAgICAgIGxldCBrZXkgPSBuYW1lc3BhY2U/IG5hbWVzcGFjZSArICdbJyArIGsgKyAnXSc6IGs7XG5cbiAgICAgICAgaWYgKG9ialtrXSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICBmZC5hcHBlbmQoa2V5LCBvYmpba10udG9JU09TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodXRpbHMuaXNQbGFpbk9iamVjdChvYmpba10pKSB7XG4gICAgICAgICAgdGhpcy5jcmVhdGVGb3JtRGF0YShvYmpba10sIGZkLCBrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGZkLmFwcGVuZChrZXksIG9ialtrXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmQ7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIHRoZSBkYXRhIGJlZm9yZSB0aGUgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge1hNTEh0dHBSZXF1ZXN0fSB4aHJcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHRyYW5zZm9ybUJlZm9yZSh4aHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4geyB4aHIsIG9wdGlvbnMgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSB0aGUgZGF0YSBhZnRlciB0aGUgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gcmVzdWx0XG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICB0cmFuc2Zvcm1BZnRlcihyZXN1bHQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ucmVzdWx0LFxuICAgICAgZGF0YTogcmVzdWx0LnJlc3BvbnNlLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgYSBHRVQgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZ2V0KHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnR0VUJztcbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlYSBhIERFTEVURSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBkZWxldGUodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdERUxFVEUnO1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBQT1NUIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHBvc3QodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQT1NUJztcbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGEgUFVUIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHB1dCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ1BVVCc7XG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgYSBQQVRDSCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBwYXRjaCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ1BBVENIJztcbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGEgSEVBRCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBoZWFkKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnSEVBRCc7XG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KCk7XG5cbnJlcXVlc3QuX19pbnN0YW5jZXMgPSB7fTtcbnJlcXVlc3QuX19jYWNoZSA9IHt9O1xuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1JlcXVlc3R9IGluc3RhbmNlXG4gKi9cbnJlcXVlc3QuYWRkSW5zdGFuY2UgPSBmdW5jdGlvbiAobmFtZSwgaW5zdGFuY2UpIHtcbiAgdGhpcy5fX2luc3RhbmNlc1tuYW1lXSA9IGluc3RhbmNlO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIGluc3RhbmNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucmVxdWVzdC5yZW1vdmVJbnN0YW5jZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLl9faW5zdGFuY2VzW25hbWVdO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVlc3QsICd1c2UnLCB7XG4gIGdldDogKCkgPT4ge1xuICAgIHJldHVybiByZXF1ZXN0Ll9faW5zdGFuY2VzO1xuICB9XG59KTtcblxucmVxdWVzdC5SZXF1ZXN0ID0gUmVxdWVzdDtcbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3Q7IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBCYXNlIGNvbXBvbmVudCB0byB3b3JrIHdpdGggdGV4dCBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW5wdXR9XG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc190ZXh0YXJlYX1cbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NvbnRlbnRlZGl0YWJsZX1cbiAqIFxuICogQGF0dHIge3N0cmluZ30gdmFsdWUgLSBhY3R1YWwgdmFsdWVcbiAqIEBhdHRyIHtib29sZWFufSBmb2N1cyAtIHNldCB0aGUgZm9jdXMgb3Igbm90XG4gKiBAYXR0ciB7bnVtYmVyfSBkZWJvdW5jZSAtIGRlYm91bmNlIGRlbGF5XG4gKiBAbWVzc2FnZSB7dm9pZH0gZGVib3VuY2UgLSBzZW50IG9uIHRoZSBkZWJvdW5jZSB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbnB1dH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMudmFsdWVLZXkgPSAndmFsdWUnO1xuICAgIHRoaXMuZGVib3VuY2VJbnRlcnZhbCA9IDUwMDtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIGlmKHRoaXMuZWwuaGFzQXR0cmlidXRlKCdvbi1kZWJvdW5jZScpKSB7XG4gICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdXRpbHMuZGVib3VuY2UoKCkgPT4gdGhpcy5hdHRycy5vbkRlYm91bmNlLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IHRydWUgfSksIHRoaXMuZGVib3VuY2VJbnRlcnZhbCkpO1xuICAgIH1cblxuICAgIHRoaXMuYXR0cignZm9jdXMnLCB0aGlzLnNldEZvY3VzKTtcbiAgICB0aGlzLmF0dHIoJ3ZhbHVlJywgdGhpcy5zZXRWYWx1ZSk7XG4gICAgdGhpcy5hdHRyKCdkZWJvdW5jZScsIHRoaXMuc2V0RGVib3VuY2UpO1xuICB9XG5cbiAgc2V0RGVib3VuY2UoaW50ZXJ2YWwpIHtcbiAgICB0aGlzLmRlYm91bmNlSW50ZXJ2YWwgPSAraW50ZXJ2YWw7XG4gIH1cblxuICBzZXRGb2N1cyh2YWx1ZSkge1xuICAgIHZhbHVlPyB0aGlzLnNldEVsZW1lbnRGb2N1cygpOiB0aGlzLnNldEVsZW1lbnRCbHVyKCk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICh0aGlzLmVsW3RoaXMudmFsdWVLZXldICE9PSB2YWx1ZSkgJiYgKHRoaXMuZWxbdGhpcy52YWx1ZUtleV0gPSB2YWx1ZSA9PT0gMD8gJzAnOiAodmFsdWUgfHwgJycpKTtcbiAgfVxuXG4gIHNldEVsZW1lbnRGb2N1cygpIHtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cblxuICBzZXRFbGVtZW50Qmx1cigpIHtcbiAgICB0aGlzLmVsLmJsdXIoKTtcbiAgfVxufVxuXG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGxvb3BzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19sb29wc31cbiAqIFxuICogQHRhZyBmb3JcbiAqIEBzZWxlY3RvciBmb3JbaW5dLG9sW2luXSx1bFtpbl0sdGhlYWRbaW5dLHRib2R5W2luXSx0Zm9vdFtpbl1cbiAqIEBhdHRyIHtvYmplY3R8YXJyYXl9IGluIC0gZGF0YSB0byBjcmVhdGUgdGhlIGxvb3BcbiAqIEBtZXNzYWdlIHtvYmplY3R8YXJyYXl9IG91dCAtIHNlbnQgb24gdGhlIGRhdGEgY2hhbmdlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tpbl0nO1xuICBzdGF0aWMgZXZlbnRzID0gWydvdXQnXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnZm9yJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdvbCcsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndWwnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RoZWFkJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0Ym9keScsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGZvb3QnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RyJywgdGhpcy5Mb29wKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2xvb3AnLCB0aGlzLkxvb3ApO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIFxuICAgIHRoaXMuaXRlcmF0b3JzID0gW107XG4gICAgdGhpcy5pdGVyYXRvckVsID0gbnVsbDtcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH1cblxuICBfX3ByZXBhcmVBdHRyaWJ1dGVJbihub2RlLCB2YWx1ZSkgeyAgXG4gICAgaWYoKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cikgJiYgbm9kZS5uYW1lID09ICdpbicpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXIuX19wcmVwYXJlQXR0cmlidXRlSW4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9fY29tcGFyZU5vZGVQcm9wZXJ0eVZhbHVlKHByb3AsIHZhbHVlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHByb3Aubm9kZTtcblxuICAgIGlmKChub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpICYmIG5vZGUubmFtZSA9PSAnaW4nICYmIHByb3AudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBzdXBlci5fX2NvbXBhcmVOb2RlUHJvcGVydHlWYWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHsgICAgXG4gICAgdGhpcy5jcmVhdGVJdGVyYXRvcigpOyAgICBcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cignaW4nLCB0aGlzLmRyYXcpO1xuICB9XG5cbiAgcmVtb3ZlZCgpIHtcbiAgICBkZWxldGUgdGhpcy5odG1sO1xuICAgIGRlbGV0ZSB0aGlzLml0ZXJhdG9ycztcbiAgICBkZWxldGUgdGhpcy5pdGVyYXRvckVsOyBcbiAgICBkZWxldGUgdGhpcy5fX2l0ZXJhdG9yO1xuICAgIGRlbGV0ZSB0aGlzLl9fdmFsdWU7XG4gIH1cblxuICBjcmVhdGVJdGVyYXRvcigpIHtcbiAgICBsZXQgZWw7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLmVsLmNoaWxkcmVuW2ldO1xuXG4gICAgICBpZiAoY2hpbGQuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKSA9PSAnbG9vcCcpIHtcbiAgICAgICAgZWwgPSBjaGlsZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGVsID0gY2hpbGQ7XG4gICAgfVxuXG4gICAgaWYgKCFlbCkge1xuICAgICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsb29wJyk7ICAgICAgXG4gICAgICBlbC5pbm5lckhUTUwgPSB0aGlzLmVsLmlubmVySFRNTDsgXG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChlbCk7XG4gICAgfVxuXG4gICAgbGV0IGNvbXBvbmVudE5hbWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpO1xuXG4gICAgaWYgKGNvbXBvbmVudE5hbWUgIT0gJ2xvb3AnKSB7XG4gICAgICBsZXQgY29tcG9uZW50ID0gQWtpbGkuY29tcG9uZW50KGNvbXBvbmVudE5hbWUgfHwgZWwudGFnTmFtZSk7XG5cbiAgICAgIGlmICghY29tcG9uZW50KSB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY29tcG9uZW50JywgJ2xvb3AnKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCEoY29tcG9uZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIEZvcikpIHtcbiAgICAgICAgbGV0IG1hc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsb29wJyk7XG4gICAgICAgIG1hc2suYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICBlbCA9IG1hc2s7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5odG1sID0gZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuaXRlcmF0b3JFbCA9IHRoaXMuY3JlYXRlSXRlcmF0b3JFbGVtZW50KGVsLm91dGVySFRNTCk7XG4gICAgZWwucmVtb3ZlKCk7XG4gIH1cblxuICBjcmVhdGVJdGVyYXRvckVsZW1lbnQoaHRtbCkge1xuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgZWwuaW5uZXJIVE1MID0gaHRtbDtcbiAgICByZXR1cm4gZWwuY29udGVudC5maXJzdENoaWxkO1xuICB9XG5cbiAgbG9vcChrZXksIHZhbHVlLCBpbmRleCkge1xuICAgIHRoaXMuX19pbmRleCA9IGluZGV4O1xuICAgIHRoaXMuX19rZXkgPSBrZXk7XG4gICAgdGhpcy5fX3ZhbHVlID0gdmFsdWU7ICAgIFxuICAgIHRoaXMuX19oYXNoID0gdXRpbHMuY3JlYXRlSGFzaCh2YWx1ZSk7XG5cbiAgICBpZih0aGlzLml0ZXJhdG9ycy5sZW5ndGggPiBpbmRleCkge1xuICAgICAgbGV0IGl0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcnNbaW5kZXhdOyAgICAgICAgXG4gICAgICBpdGVyYXRvci5zZXRJbmRleCh0aGlzLl9faW5kZXggPT09IGl0ZXJhdG9yLmluZGV4KTsgICAgIFxuICAgICAgaXRlcmF0b3Iuc2V0S2V5KHRoaXMuX19rZXkgPT09IGl0ZXJhdG9yLmtleSk7XG4gICAgICBpdGVyYXRvci5zZXRWYWx1ZSh1dGlscy5jb21wYXJlKHRoaXMuX19oYXNoLCBpdGVyYXRvci5oYXNoKSk7XG4gICAgICB0aGlzLl9fcHJvbWlzZXMucHVzaChBa2lsaS5jb21waWxlKGl0ZXJhdG9yLmVsLCB7IFxuICAgICAgICByZWNvbXBpbGU6IHsgXG4gICAgICAgICAgY2hlY2tDaGFuZ2VzOiB0cnVlXG4gICAgICAgIH0gXG4gICAgICB9KSk7XG4gICAgICByZXR1cm4gaXRlcmF0b3I7XG4gICAgfVxuICAgIFxuICAgIGxldCBlbCA9IHRoaXMuaXRlcmF0b3JFbC5jbG9uZU5vZGUoKTtcbiAgICBlbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZChlbCk7XG4gICAgdGhpcy5fX3Byb21pc2VzLnB1c2goQWtpbGkuY29tcGlsZShlbCkpO1xuICAgIHRoaXMuaXRlcmF0b3JzLnB1c2goZWwuX19ha2lsaSk7XG4gICAgcmV0dXJuIGVsLl9fYWtpbGk7XG4gIH1cblxuICBkcmF3KGRhdGEpIHtcbiAgICBpZiAodHlwZW9mIGRhdGEgIT0gJ29iamVjdCcgfHwgZGF0YSA9PT0gbnVsbCkge1xuICAgICAgaWYgKEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS53YXJuKGBcIkZvclwiIGNvbXBvbmVudCBcImluXCIgYXR0cmlidXRlIHZhbHVlIHR5cGUgbXVzdCBiZSBhbiBvYmplY3QvYXJyYXlgKTsgICAgICAgIFxuICAgICAgfVxuXG4gICAgICBkYXRhID0gW107XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gW10uc2xpY2UuY2FsbCh0aGlzLmVsLmNoaWxkcmVuKTsgXG4gICAgdGhpcy5pdGVyYXRvcnMuc29ydCgoYSwgYikgPT4gY2hpbGRyZW4uaW5kZXhPZihhLmVsKSAtIGNoaWxkcmVuLmluZGV4T2YoYi5lbCkpO1xuICAgIHRoaXMuX19jaGlsZHJlbi5zb3J0KChhLCBiKSA9PiBjaGlsZHJlbi5pbmRleE9mKGEpIC0gY2hpbGRyZW4uaW5kZXhPZihiKSk7XG4gICAgY29uc3QgbG9vcCA9IChrZXksIHZhbHVlLCBpbmRleCkgPT4gdGhpcy5sb29wKGtleSwgdmFsdWUsIGluZGV4KS5pdGVyYXRlKGluZGV4KTtcblxuICAgIGlmKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIGZvciAobGV0IGwgPSBkYXRhLmxlbmd0aDsgaW5kZXggPCBsOyBpbmRleCsrKSB7XG4gICAgICAgIGxvb3AoaW5kZXgsIGRhdGFbaW5kZXhdLCBpbmRleCk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKTtcblxuICAgICAgZm9yIChsZXQgbCA9IGtleXMubGVuZ3RoOyBpbmRleCA8IGw7IGluZGV4KyspIHtcbiAgICAgICAgbGV0IGtleSA9IGtleXNbaW5kZXhdO1xuICAgICAgICBsb29wKGtleSwgZGF0YVtrZXldLCBpbmRleCk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGZvciAobGV0IGkgPSBpbmRleCwgbCA9IHRoaXMuaXRlcmF0b3JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGl0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcnNbaV07XG4gICAgICBpdGVyYXRvci5fX3JlbW92ZSgpO1xuICAgICAgdGhpcy5pdGVyYXRvcnMuc3BsaWNlKGksIDEpO1xuICAgICAgbC0tO1xuICAgICAgaS0tO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLmFsbCh0aGlzLl9fcHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgdGhpcy5hdHRycy5vbk91dC50cmlnZ2VyKGRhdGEsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICB9KTsgICAgXG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGhlIGluaXRpYWwgc3RhdGVcbiAgICovXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuX19pdGVyYXRvciA9IG51bGw7XG4gICAgdGhpcy5fX2luZGV4ID0gMDtcbiAgICB0aGlzLl9fa2V5ID0gJyc7XG4gICAgdGhpcy5fX3ZhbHVlID0gbnVsbDtcbiAgICB0aGlzLl9faGFzaCA9ICcnO1xuICAgIHRoaXMuX19wcm9taXNlcyA9IFtdO1xuICB9ICBcbn1cblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGxvb3BzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19sb29wc31cbiAqIFxuICogQHRhZyBsb29wXG4gKiBAc2VsZWN0b3IgbG9vcCx0clxuICogQGF0dHIgQHNlZSBGb3JcbiAqIEBzY29wZSB7Kn0gbG9vcFZhbHVlIC0gZGF0YSBpdGVtJ3MgdmFsdWUgb2YgdGhlIGN1cnJlbnQgaXRlcmF0aW9uIFxuICogQHNjb3BlIHtzdHJpbmd8bnVtYmVyfSBsb29wS2V5IC0ga2V5IG9mIHRoZSBpdGVyYXRpb25cbiAqIEBzY29wZSB7bnVtYmVyfSBsb29wSW5kZXggLSBpbmRleCBvZiB0aGUgaXRlcmF0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBMb29wIGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmZvciA9IG51bGw7XG4gICAgdGhpcy5odG1sID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgdGhpcy5pc0ZvciA9IHRoaXMuZWwuaGFzQXR0cmlidXRlKCdpbicpO1xuXG4gICAgaWYgKCF0aGlzLmlzRm9yICYmICEodGhpcy5lbC5wYXJlbnROb2RlLl9fYWtpbGkgaW5zdGFuY2VvZiBGb3IpKSB7XG4gICAgICB0aGlzLmNhbmNlbCgpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9faXRlcmF0b3IgPSB0aGlzO1xuICAgIHRoaXMuZm9yID0gdGhpcy5fX3BhcmVudC5fX2FraWxpO1xuICAgIHRoaXMuc2V0SW5kZXgodHJ1ZSk7XG4gICAgdGhpcy5zZXRLZXkodHJ1ZSk7XG4gICAgdGhpcy5zZXRWYWx1ZSh0cnVlKTtcblxuICAgIGlmKHRoaXMuaXNGb3IpIHtcbiAgICAgIHJldHVybiBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgaWYodGhpcy5pc0Zvcikge1xuICAgICAgcmV0dXJuIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlZCgpIHtcbiAgICBzdXBlci5yZW1vdmVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgZGVsZXRlIHRoaXMuZm9yO1xuICAgIGRlbGV0ZSB0aGlzLnZhbHVlO1xuICB9XG5cbiAgc2V0SW5kZXgodGFyZ2V0KSB7XG4gICAgdGhpcy5pbmRleCA9IHRoaXMuZm9yLl9faW5kZXg7XG4gICAgdGhpcy5zY29wZS5fX3NldCgnbG9vcEluZGV4JywgdGhpcy5pbmRleCwgZmFsc2UsIHRhcmdldCk7XG4gIH1cblxuICBzZXRLZXkodGFyZ2V0KSB7XG4gICAgdGhpcy5rZXkgPSB0aGlzLmZvci5fX2tleTtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wS2V5JywgdGhpcy5rZXksIGZhbHNlLCB0YXJnZXQpO1xuICB9XG5cbiAgc2V0VmFsdWUodGFyZ2V0KSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuZm9yLl9fdmFsdWU7XG4gICAgdGhpcy5zY29wZS5fX3NldCgnbG9vcFZhbHVlJywgdGhpcy52YWx1ZSwgdHJ1ZSwgdGFyZ2V0KTtcbiAgICB0aGlzLmhhc2ggPSB0aGlzLmZvci5fX2hhc2g7XG4gIH1cblxuICBpdGVyYXRlKCkge31cbn1cblxuRm9yLkxvb3AgPSBMb29wOyIsImltcG9ydCBBa2lsaSBmcm9tICcuL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcblxuLyoqXG4gKiBTY29wZSBjbGFzcy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9zY29wZX1cbiAqXG4gKiBBbGwgcHJvcGVydGllcyBzdGFydGluZyB3aXRoIF9fIGFyZSBub3QgbW9uaXRvcmVkLlxuICogWW91IGNhbiB1c2UgdGhlbSBmb3IgaW50ZXJuYWwgbWFuaXB1bGF0aW9ucy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcGUge1xuICBzdGF0aWMgbmVzdGVkV2F0Y2hpbmc7XG5cbiAgY29uc3RydWN0b3IobmFtZSwgZWwsIGNvbXBvbmVudCkge1xuICAgIHRoaXMuX19uYW1lID0gbmFtZTtcbiAgICB0aGlzLl9fZWwgPSBlbDtcbiAgICB0aGlzLl9fY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIGVsLnNldEF0dHJpYnV0ZSgnc2NvcGUnLCBuYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHNjb3BlIHZhbHVlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3N0cmljdD1mYWxzZV0gLSB3aXRob3V0IG9iamVjdCBjb3B5aW5nXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0KGtleXMsIHZhbHVlLCBzdHJpY3QgPSBmYWxzZSwgdGFyZ2V0ID0gZmFsc2UpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuICAgIFxuICAgIEFraWxpLnVuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICBzdHJpY3QgJiYgKHRoaXMuX19jb21wb25lbnQuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nID0gdHJ1ZSk7XG4gICAgICB1dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0YXJnZXQ/IHRoaXMuX190YXJnZXQ6IHRoaXMsIChsYXN0LCB2YWwpID0+IHtcbiAgICAgICAgaWYgKCFsYXN0KSB7XG4gICAgICAgICAgcmV0dXJuIHZhbCB8fCB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgc3RyaWN0ICYmICh0aGlzLl9fY29tcG9uZW50Ll9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyA9IGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHNjb3BlXG4gICAqIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlbW92ZSgpIHsgICAgXG4gICAgZGVsZXRlIHRoaXMuX19lbDtcbiAgICBkZWxldGUgdGhpcy5fX2NvbXBvbmVudDtcbiAgICBkZWxldGUgdGhpcy5fX3BhcmVudDtcbiAgICBBa2lsaS5yZW1vdmVTY29wZSh0aGlzLl9fbmFtZSk7XG4gIH1cbn0iLCIvKipcbiAqIENsYXNzIHRvIHdvcmsgd2l0aCBldmVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvZXZlbnRzfVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBub2RlLCBlbCwgY29tcG9uZW50KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIHRoZSBldmVudFxuICAgKlxuICAgKiBAcGFyYW0geyp9IGRhdGFcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZV1cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICB0cmlnZ2VyKGRhdGEsIG9wdGlvbnMgPSB7fSwgZm9yY2UgPSBmYWxzZSkge1xuICAgIGlmKHRoaXMuX19yZW1vdmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGZvcmNlIHx8ICF0aGlzLmluRXZhbHVhdGluZygpKSB7XG4gICAgICB0aGlzLmVsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KHRoaXMubmFtZSwgdGhpcy5wcmVwYXJlT3B0aW9ucyh7IGRldGFpbDogZGF0YSwgIC4uLm9wdGlvbnMgfSkpKTtcbiAgICB9ICAgXG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2ggdGhlIGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IF9FdmVudCAtIGNsYXNzIG9mIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlXVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGRpc3BhdGNoKF9FdmVudCwgb3B0aW9ucyA9IHt9LCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgaWYodGhpcy5fX3JlbW92ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZm9yY2UgfHwgIXRoaXMuaW5FdmFsdWF0aW5nKCkpIHtcbiAgICAgIHRoaXMuZWwuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50KHRoaXMubmFtZSwgdGhpcy5wcmVwYXJlT3B0aW9ucyhvcHRpb25zKSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwZXJlIHRoZSBldmVudCBvcHRpb25zXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIFxuICAgKi9cbiAgcHJlcGFyZU9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IHsgYnViYmxlczogdHJ1ZSwgLi4ub3B0aW9ucyB9OyBcbiAgICB0aGlzLm5vZGUuX19jb21wb25lbnQuX19wcmVwYXJlQXR0cmlidXRlT3V0KHRoaXMubm9kZSwgb3B0aW9ucy5kZXRhaWwpO1xuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBldmVudCBjYWxsYmFjayBkb2Vzbid0IHJ1biByZWN1cnNpdmVseVxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGluRXZhbHVhdGluZygpIHtcbiAgICBsZXQgZGF0YSA9IHRoaXMuY29tcG9uZW50Ll9fZXZhbHVhdGluZ0V2ZW50O1xuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGEuZWwgPT09IHRoaXMuZWwgJiYgZGF0YS5ldmVudC50eXBlID09PSB0aGlzLm5hbWUgJiYgZGF0YS5jb21wb25lbnQgPT09IHRoaXMuY29tcG9uZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgdGhlIGZ1bmN0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gICAqL1xuICBiaW5kKGZuKSB7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKHRoaXMubmFtZSwgdGhpcy5mbiA9IGZuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgdGhlIGZ1bmN0aW9uXG4gICAqL1xuICB1bmJpbmQoKSB7XG4gICAgdGhpcy5mbiAmJiB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5uYW1lLCB0aGlzLmZuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGVtaXR0ZXJcbiAgICovXG4gIHJlbW92ZSgpIHtcbiAgICB0aGlzLnVuYmluZCgpO1xuICAgIGRlbGV0ZSB0aGlzLm5hbWU7XG4gICAgZGVsZXRlIHRoaXMubmFtZTtcbiAgICB0aGlzLm5vZGUgPSBudWxsO1xuICAgIHRoaXMuY29tcG9uZW50ID0gbnVsbDtcbiAgICB0aGlzLmVsID0gbnVsbDtcbiAgICB0aGlzLl9fcmVtb3ZlZCA9IHRydWU7XG4gIH1cbn0iLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBTdG9yZSBhbGxvd3MgeW91IHRvIHNhdmUgYW5kIHNoYXJlIGRhdGEuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvc3RvcmV9XG4gKi9cbmNvbnN0IHN0b3JlID0gbmV3IFByb3h5KHt9LCB7XG4gIGdldDogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgaWYgKGtleSA9PSBcIl9fdGFyZ2V0XCIpIHtcbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICB9LFxuICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICBpZih1dGlscy5jb21wYXJlKHRhcmdldFtrZXldLCB2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBcbiAgICB2YWx1ZSA9IHV0aWxzLmNvcHkodmFsdWUsIHsgcGxhaW46IHRydWUgfSk7XG4gICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICBBa2lsaS5yb290ICYmIEFraWxpLnJvb3QuX19zdG9yZVRyaWdnZXJCeU5hbWUoa2V5LCB2YWx1ZSk7ICAgIFxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBkZWxldGVQcm9wZXJ0eTogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgQWtpbGkucm9vdCAmJiBBa2lsaS5yb290Ll9fc3RvcmVUcmlnZ2VyQnlOYW1lKGtleSwgdW5kZWZpbmVkKTtcbiAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTsiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi9ha2lsaS5qcyc7XG5cbmNvbnN0IG9iaiA9IHt9O1xuXG4vKipcbiAqIEdsb2JhbHMgaXMgZm9yIHVzaW5nIHRoZSBjdXN0b20gdmFyaWFibGVzIGluIGh0bWxcbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9zY29wZSNkb2NzX2dsb2JhbHN9XG4gKi9cbmNvbnN0IGdsb2JhbHMgPSBuZXcgUHJveHkob2JqLCB7XG4gIGdldDogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgaWYoa2V5ID09ICdfX3RhcmdldCcpIHtcbiAgICAgIHJldHVybiBvYmpcbiAgICB9ICAgXG4gICAgXG4gICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICB9LFxuICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICB0YXJnZXRba2V5XSA9IEFraWxpLndyYXAodmFsdWUsIHsgdGFnOiBrZXkgfSk7ICAgIFxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBkZWxldGVQcm9wZXJ0eTogKHRhcmdldCwga2V5KSA9PiB7ICAgXG4gICAgQWtpbGkucmVtb3ZlVGFnKGtleSk7XG4gICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsczsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCByb3V0ZXIgdGVtcGxhdGVzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmcjZG9jc190ZW1wbGF0ZXN9XG4gKiBcbiAqIEB0YWcgcm91dGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgncm91dGUnLCB0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtUcmFuc2l0aW9ufSB0cmFuc2l0aW9uXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9hZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHNldFRyYW5zaXRpb24odHJhbnNpdGlvbiwgbG9hZCA9IHRydWUpIHtcbiAgICBsZXQgc3RhdGUgPSB0cmFuc2l0aW9uLnBhdGguc3RhdGU7XG5cbiAgICBjb25zdCBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24gPSAocGF0aCkgPT4ge1xuICAgICAgaWYgKHBhdGgucGFyZW50KSB7XG4gICAgICAgIGlmIChwYXRoLnBhcmVudC5jb21wb25lbnQpIHtcbiAgICAgICAgICByZXR1cm4gcGF0aC5wYXJlbnQuY29tcG9uZW50Ll9fc2NvcGUuX190cmFuc2l0aW9uLnBhdGg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uKHBhdGgucGFyZW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcGlsZSA9IChodG1sKSA9PiB7IFxuICAgICAgdGhpcy5lbXB0eSgpOyAgXG4gICAgICBsZXQgbmFtZSA9ICdjb21wb25lbnQnO1xuXG4gICAgICBpZihzdGF0ZS5jb21wb25lbnQpIHtcbiAgICAgICAgbGV0IGV4aXN0cyA9IGZhbHNlO1xuICAgIFxuICAgICAgICBmb3IobGV0IGtleSBpbiBBa2lsaS5fX2NvbXBvbmVudHMpIHtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBBa2lsaS5fX2NvbXBvbmVudHNba2V5XTtcbiAgICBcbiAgICAgICAgICBpZihjb21wb25lbnQgPT09IHN0YXRlLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgbmFtZSA9IGtleTsgICAgICAgICAgICBcbiAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaWYoIWV4aXN0cykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIFwiJHtzdGF0ZS5uYW1lfVwiIGhhcyBubyBkZWZpbmVkIGNvbXBvbmVudGApXG4gICAgICAgIH0gXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gYDwkeyBuYW1lIH0+JHsgaHRtbCB9PC8keyBuYW1lIH0+YDtcbiAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX19zY29wZS5fX3RyYW5zaXRpb24gPSB7ICBcbiAgICAgIHBhcmVudDogZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uKHRyYW5zaXRpb24ucGF0aCksICAgXG4gICAgICBzdGF0ZTogdHJhbnNpdGlvbi5wYXRoLnN0YXRlLFxuICAgICAgZGF0YTogdHJhbnNpdGlvbi5wYXRoLmRhdGEsXG4gICAgICB1cmw6IHRyYW5zaXRpb24ucGF0aC51cmwsXG4gICAgICBwYXJhbXM6IHRyYW5zaXRpb24ucGF0aC5wYXJhbXMsXG4gICAgICBxdWVyeTogdHJhbnNpdGlvbi5wYXRoLnF1ZXJ5LFxuICAgICAgaGFzaDogdHJhbnNpdGlvbi5wYXRoLmhhc2hcbiAgICB9O1xuXG4gICAgaWYgKCFsb2FkKSB7XG4gICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogeyBjaGVja0NoYW5nZXM6IHRydWUgfSB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICBpZiAoc3RhdGUudGVtcGxhdGUpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnRlbXBsYXRlO1xuICAgICAgfVxuICBcbiAgICAgIGlmIChzdGF0ZS50ZW1wbGF0ZVVybCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdC5nZXQoc3RhdGUudGVtcGxhdGVVcmwpLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcbiAgICAgIH1cbiAgICB9KS50aGVuKGh0bWwgPT4gY29tcGlsZShodG1sKSk7XG4gIH1cbn0iLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vcmVxdWVzdC5qcyc7XG5pbXBvcnQgUm91dGUgZnJvbSAnLi4vY29tcG9uZW50cy9yb3V0ZS5qcyc7XG5cbi8qKlxuICogVHJhbnNpdGlvbiBjbGFzcy5cbiAqIFRoZSBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGluY2x1ZGVzIHRoZSBsYXN0IGFjdHVhbCByb3V0ZXIgdHJhbnNpdGlvbiBpbmZvcm1hdGlvbi5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3NfdHJhbnNpdGlvbn1cbiAqL1xuZXhwb3J0IGNsYXNzIFRyYW5zaXRpb24ge1xuICBjb25zdHJ1Y3Rvcih1cmwsIHByZXZpb3VzID0gbnVsbCkgeyAgXG4gICAgdGhpcy51cmwgPSB1cmw7ICBcbiAgICB0aGlzLnByZXZpb3VzID0gcHJldmlvdXM7XG4gICAgdGhpcy5wYXRoID0gbnVsbDtcbiAgICB0aGlzLnJvdXRlcyA9IFtdO1xuICAgIHRoaXMuc3RhdGVzID0ge307XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19maW5pc2VkID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogUmVkaXJlY3QgdG8gYW5vdGhlciBzdGF0ZVxuICAgKiBcbiAgICogQHNlZSByb3V0ZXIuc3RhdGVcbiAgICovXG4gIHJlZGlyZWN0KHN0YXRlLCBwYXJhbXMgPSB7fSwgcXVlcnkgPSB7fSwgaGFzaCA9IHVuZGVmaW5lZCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IHsgLi4ucm91dGVyLnRyYW5zaXRpb24ucGF0aC5vcHRpb25zLCAuLi5vcHRpb25zIH07XG4gICAgdGhpcy5jYW5jZWwoKTsgICBcbiAgICByZXR1cm4gcm91dGVyLnN0YXRlLmNhbGwocm91dGVyLCBzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogUmVsb2FkIHRoZSBjdXJyZW50IHN0YXRlXG4gICAqIFxuICAgKiBAc2VlIFRyYW5zaXRpb24ucHJvdG90eXBlLnJlZGlyZWN0XG4gICAqL1xuICByZWxvYWQocGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSB1bmRlZmluZWQsIG9wdGlvbnMgPSB7fSkge1xuICAgIHBhcmFtcyA9IHsgLi4udGhpcy5wYXRoLnBhcmFtcywgLi4ucGFyYW1zIH07XG4gICAgcXVlcnkgPSB7IC4uLnRoaXMucGF0aC5xdWVyeSwgLi4ucXVlcnkgfTtcbiAgICBoYXNoID0gaGFzaCA9PT0gdW5kZWZpbmVkPyB0aGlzLnBhdGguaGFzaDogaGFzaDtcbiAgICByZXR1cm4gdGhpcy5yZWRpcmVjdCh0aGlzLnBhdGguc3RhdGUubmFtZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBjdXJyZW50IHBhdGhcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXRoIFxuICAgKi9cbiAgc2V0UGF0aChwYXRoKSB7XG4gICAgcGF0aC5wYXJlbnQgPSB0aGlzLnBhdGggfHwgbnVsbDtcbiAgICB0aGlzLnBhdGggPSB7IHBhcmFtczoge30sIHF1ZXJ5OiB7fSwgLi4ucGF0aCB9O1xuICAgIHRoaXMucm91dGVzLnB1c2godGhpcy5wYXRoKTtcbiAgICB0aGlzLnN0YXRlc1t0aGlzLnBhdGguc3RhdGUubmFtZV0gPSB0aGlzLnBhdGg7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgcm91dGUgYnkgdGhlIHN0YXRlXG4gICAqICBcbiAgICogQHBhcmFtIHsqfSBzdGF0ZSBcbiAgICovXG4gIGdldFJvdXRlKHN0YXRlKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnJvdXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByb3V0ZSA9IHRoaXMucm91dGVzW2ldO1xuXG4gICAgICBpZiAocm91dGUuc3RhdGUgPT09IHN0YXRlKSB7XG4gICAgICAgIHJldHVybiByb3V0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBpdCBoYXMgdGhlIHN0YXRlXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgXG4gICAqL1xuICBoYXNTdGF0ZShzdGF0ZSkge1xuICAgIHJldHVybiAhIXRoaXMuc3RhdGVzW3N0YXRlLm5hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSByb3V0ZSBpcyBjaGFuZ2VkXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gcm91dGVcbiAgICovXG4gIGlzUm91dGVDaGFuZ2VkKHJvdXRlKSB7XG4gICAgaWYoIXRoaXMucHJldmlvdXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXRlID0gcm91dGUuc3RhdGU7XG5cbiAgICBpZighdGhpcy5wcmV2aW91cy5oYXNTdGF0ZShzdGF0ZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmFtS2V5cyA9IFtdO1xuICAgIHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2Uocm91dGVyLl9fcGFyYW1SZWdleCwgKG0sIGYsIHYpID0+IHBhcmFtS2V5cy5wdXNoKHYpKTtcbiAgICBcbiAgICBmb3IobGV0IGtleSBpbiBzdGF0ZS5wYXJhbXMpIHtcbiAgICAgIGlmKHBhcmFtS2V5cy5pbmRleE9mKGtleSkgPT0gLTEpIHtcbiAgICAgICAgcGFyYW1LZXlzLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBxdWVyeUtleXMgPSBPYmplY3Qua2V5cyhzdGF0ZS5xdWVyeSk7XG4gICAgY29uc3Qgd2F0Y2hIYXNoID0gc3RhdGUuaGFzaCAhPT0gdW5kZWZpbmVkOyAgICBcbiAgICBjb25zdCBwcmV2Um91dGUgPSB0aGlzLnByZXZpb3VzLmdldFJvdXRlKHN0YXRlKTsgXG5cbiAgICBjb25zdCBwcmV2ID0geyBcbiAgICAgIHBhcmFtczogdXRpbHMuaW5jbHVkZUtleXMocHJldlJvdXRlLnBhcmFtcywgcGFyYW1LZXlzKSwgXG4gICAgICBxdWVyeTogdXRpbHMuaW5jbHVkZUtleXMocHJldlJvdXRlLnF1ZXJ5LCBxdWVyeUtleXMpXG4gICAgfTtcblxuICAgIGNvbnN0IGN1cnJlbnQgPSB7XG4gICAgICBwYXJhbXM6IHV0aWxzLmluY2x1ZGVLZXlzKHJvdXRlLnBhcmFtcywgcGFyYW1LZXlzKSxcbiAgICAgIHF1ZXJ5OiB1dGlscy5pbmNsdWRlS2V5cyhyb3V0ZS5xdWVyeSwgcXVlcnlLZXlzKVxuICAgIH1cblxuICAgIGlmKHdhdGNoSGFzaCkge1xuICAgICAgcHJldi5oYXNoID0gcHJldlJvdXRlLmhhc2g7XG4gICAgICBjdXJyZW50Lmhhc2ggPSByb3V0ZS5oYXNoO1xuICAgIH1cblxuICAgIHJldHVybiAhdXRpbHMuY29tcGFyZShwcmV2LCBjdXJyZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW5jZWwgdGhlIGN1cnJlbnQgdHJhbnNpdGlvblxuICAgKi9cbiAgY2FuY2VsKCkgeyAgIFxuICAgIHRoaXMuX19jYW5jZWxsZWQgPSB0cnVlO1xuICAgIHRoaXMuZmluaXNoKCk7XG4gIH1cblxuICAvKipcbiAgICogRmluaXNoIHRoZSB0cmFuc2l0aW9uXG4gICAqL1xuICBmaW5pc2goKSB7XG4gICAgdGhpcy5fX2ZpbmlzZWQgPSB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogQWtpbGkgcm91dGVyXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZ31cbiAqL1xuY29uc3Qgcm91dGVyID0ge307XG5cbnJvdXRlci5iYXNlVXJsID0gXCIvXCI7XG5yb3V0ZXIuc3RhdGVzID0gW107XG5yb3V0ZXIuaGFzaE1vZGUgPSB0cnVlO1xucm91dGVyLl9fcmVkaXJlY3RzID0gMDtcbnJvdXRlci5fX2luaXQgPSBmYWxzZTtcbnJvdXRlci5fX3BhcmFtUmVnZXggPSAvKFxcLz86KFtcXHdcXGQtXSspKS9nO1xucm91dGVyLl9fcm91dGVTZWxlY3RvciA9IGMgPT4gYyBpbnN0YW5jZW9mIFJvdXRlO1xuXG4vKipcbiAqIEFkZCBhIG5ldyBzdGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc3RhdGUgbmFtZS4gVG8gc2V0IHBhcmVudHMgeW91IGNhbiB1c2UgZG90LCBlLmcuICdhcHAuYXJ0aWNsZS5lZGl0J1xuICogQHBhcmFtIHtzdHJpbmd9IHBhdHRlcm4gLSB1cmwgcGF0dGVybiBsaWtlICdhcHAvYXJ0aWNsZS86aWQnXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7cm91dGVyfVxuICovXG5yb3V0ZXIuYWRkID0gZnVuY3Rpb24gKG5hbWUsIHBhdHRlcm4sIG9wdGlvbnMgPSB7fSkge1xuICBpZih0eXBlb2YgbmFtZSA9PSAnb2JqZWN0Jykge1xuICAgIG9wdGlvbnMgPSBuYW1lO1xuICAgIHBhdHRlcm4gPSBvcHRpb25zLnBhdHRlcm47XG4gICAgbmFtZSA9IG9wdGlvbnMuc3RhdGU7XG4gICAgZGVsZXRlIG9wdGlvbnMucGF0dGVybjtcbiAgICBkZWxldGUgb3B0aW9ucy5zdGF0ZTtcbiAgfVxuXG4gIGlmKCFuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgbXVzdCBoYXZlIGEgbmFtZWApO1xuICB9XG5cbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgdGVtcGxhdGU6ICcnLFxuICAgIHRlbXBsYXRlVXJsOiAnJyxcbiAgICBhYnN0cmFjdDogZmFsc2UsXG4gICAgY29tcG9uZW50OiBudWxsLFxuICAgIHBhcmFtczoge30sXG4gICAgcXVlcnk6IHt9LFxuICAgIGhhbmRsZXI6ICgpID0+IHt9LFxuICB9O1xuXG4gIGlmKEFraWxpLm9wdGlvbnMuZGVidWcgJiYgb3B0aW9ucy5jb21wb25lbnQgJiYgKG9wdGlvbnMudGVtcGxhdGUgfHwgb3B0aW9ucy50ZW1wbGF0ZVVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihgUm91dGVyIHN0YXRlIFwiJHtuYW1lfVwiIG11c3Qgb25seSBoYXZlIGEgY29tcG9uZW50IG9yIHRlbXBsYXRlIG9wdGlvbmApO1xuICB9IFxuXG4gIGlmICghb3B0aW9ucy50ZW1wbGF0ZSAmJiAhb3B0aW9ucy50ZW1wbGF0ZVVybCAmJiAhb3B0aW9ucy5jb21wb25lbnQpIHtcbiAgICBvcHRpb25zLmFic3RyYWN0ID0gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0aGlzLmhhcyhuYW1lKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIFwiJHtuYW1lfVwiIGlzIGFscmVhZHkgZXhpc3RzYClcbiAgfVxuXG4gIHRoaXMuc2V0U3RhdGUobmFtZSwgcGF0dGVybiwgey4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zfSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIHN0YXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucm91dGVyLnJlbW92ZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAodGhpcy5zdGF0ZXNbaV0ubmFtZSA9PSBuYW1lKSB7XG4gICAgICB0aGlzLnN0YXRlcy5zcGxpY2UoaSwgMSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIHN0YXRlIGV4aXN0c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAodGhpcy5zdGF0ZXNbaV0ubmFtZSA9PSBuYW1lKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIENoYW5nZSB0aGUgc3RhdGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSAtIHBhcmFtcyBmb3Igc3RhdGUge2lkOiAxfSA9PiAnL2FwcC86aWQnID0+ICcvYXBwLzEnXG4gKiBAcGFyYW0ge29iamVjdH0gW3F1ZXJ5XSAtIHF1ZXJ5IHt4OiAxfSA9PiAnL2FwcC8/eD0xJ1xuICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoXVxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICovXG5yb3V0ZXIuc3RhdGUgPSBmdW5jdGlvbiAoc3RhdGUsIHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gdW5kZWZpbmVkLCBvcHRpb25zID0ge30pIHsgIFxuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgXG4gIGlmICghc3RhdGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCByb3V0ZSBzdGF0ZSB3aXRoIG5hbWUgJHtzdGF0ZX1gKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSB7IC4uLm9wdGlvbnMgfTtcbiAgb3B0aW9ucy5tYW51YWwgPSB0cnVlO1xuICAoeyBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zIH0gPSB0aGlzLnByZXBhcmVTdGF0ZUFyZ3Moc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMsIGZhbHNlKSk7ICBcbiAgbGV0IHVybCA9IHRoaXMuY3JlYXRlU3RhdGVVcmwoc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMpOyAgICBcbiAgdGhpcy5pc29sYXRlKCgpID0+IHRoaXMuc2V0VXJsKHVybCkpO1xuICByZXR1cm4gdGhpcy5jaGFuZ2VTdGF0ZShvcHRpb25zKTtcbn07XG5cbi8qKlxuICogR28gYmFja1xuICovXG5yb3V0ZXIuYmFjayA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkuYmFjay5hcHBseSh3aW5kb3cuaGlzdG9yeSwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogR28gdG8gc29tZSBwb3NpdGlvblxuICovXG5yb3V0ZXIuZ28gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LmdvLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBHbyBmb3J3YXJkXG4gKi9cbnJvdXRlci5mb3J3YXJkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeS5mb3J3YXJkLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2UgdGhlIHN0YXRlIGJ5IHRoZSB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKi9cbnJvdXRlci5sb2NhdGlvbiA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICBvcHRpb25zID0geyAuLi5vcHRpb25zIH07XG4gIG9wdGlvbnMubWFudWFsID0gdHJ1ZTtcbiAgdGhpcy5pc29sYXRlKCgpID0+IHRoaXMuc2V0VXJsKHVybCkpOyAgXG4gIHJldHVybiB0aGlzLmNoYW5nZVN0YXRlKG9wdGlvbnMpO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSByb3V0ZXIuIFxuICogTXVzdCBiZSBjYWxsZWQgYmVmb3JlIEFraWxpLmluaXQoKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbZGVmYXVsdFVybF1cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2hhc2hNb2RlPXRydWVdXG4gKi9cbnJvdXRlci5pbml0ID0gZnVuY3Rpb24gKGRlZmF1bHRVcmwgPSAnJywgaGFzaE1vZGUgPSB0cnVlKSB7XG4gIGxldCBvbGRQdXNoU3RhdGUgPSB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGU7XG5cbiAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IHJlcyA9IG9sZFB1c2hTdGF0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgcm91dGVyLmNoYW5nZVN0YXRlKCkuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIHRoaXMuX19vblN0YXRlQ2hhbmdlSGFuZGxlciA9ICgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIHRoaXMuY2hhbmdlU3RhdGUoKS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICB9O1xuXG4gIHRoaXMuZGVmYXVsdFVybCA9IGRlZmF1bHRVcmw7XG4gIHRoaXMuaGFzaE1vZGUgPSBoYXNoTW9kZTsgICAgXG5cbiAgdGhpcy5zdGF0ZXMuc29ydCgoYSwgYikgPT4ge1xuICAgIGEgPSBhLm5hbWUuc3BsaXQoJy4nKS5sZW5ndGg7XG4gICAgYiA9IGIubmFtZS5zcGxpdCgnLicpLmxlbmd0aDtcbiAgICByZXR1cm4gYSAtIGI7XG4gIH0pO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdGhpcy5pbml0U3RhdGUodGhpcy5zdGF0ZXNbaV0pO1xuICB9XG5cbiAgaWYgKCF0aGlzLnN0YXRlcy5sZW5ndGggJiYgQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKGBZb3UgZGlkbid0IGFkZCBhbnkgcm91dGVzIHRvIHRoZSByb3V0ZXJgKTtcbiAgfVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMuX19vblN0YXRlQ2hhbmdlSGFuZGxlcik7XG4gIHRoaXMuX19pbml0ID0gdHJ1ZTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgc3RhdGUgXG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSBcbiAqL1xucm91dGVyLmluaXRTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICBsZXQgcGFyZW50cyA9IFtdO1xuICBzdGF0ZS5jaGlsZHJlbiA9IFtdO1xuICBwYXJlbnRzID0gc3RhdGUubmFtZS5zcGxpdCgnLicpO1xuICBwYXJlbnRzLnBvcCgpO1xuICBzdGF0ZS5sZXZlbCA9IHN0YXRlLmFic3RyYWN0PyBudWxsOiBwYXJlbnRzLmxlbmd0aDtcblxuICBpZiAocGFyZW50cy5sZW5ndGgpIHtcbiAgICBsZXQgcGFyZW50TmFtZSA9IHBhcmVudHMuam9pbignLicpO1xuICAgIGxldCBwYXJlbnQgPSB0aGlzLmdldFN0YXRlKHBhcmVudE5hbWUpO1xuXG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIHBhcmVudCByb3V0ZSBzdGF0ZSBcIiR7cGFyZW50TmFtZX1cIiBmb3IgXCIke3N0YXRlLm5hbWV9XCJgKVxuICAgIH1cblxuICAgIGlmIChzdGF0ZS5sZXZlbCAhPT0gbnVsbCAmJiBwYXJlbnQuYWJzdHJhY3QpIHtcbiAgICAgIHN0YXRlLmxldmVsLS07XG4gICAgfVxuXG4gICAgc3RhdGUuZnVsbFBhdHRlcm4gPSB0aGlzLnNwbGl0U2xhc2hlcyhwYXJlbnQuZnVsbFBhdHRlcm4gKyAnLycgKyBzdGF0ZS5wYXR0ZXJuKTtcbiAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaChzdGF0ZSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgc3RhdGUuZnVsbFBhdHRlcm4gPSBzdGF0ZS5wYXR0ZXJuO1xuICB9XG59XG5cbi8qKlxuICogR2V0IHRoZSBzdGF0ZSBieSB0aGUgbmFtZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gKi9cbnJvdXRlci5nZXRTdGF0ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZXNbaV07XG5cbiAgICBpZiAoc3RhdGUubmFtZSA9PSBuYW1lKSB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIFNldCB0aGUgc3RhdGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IHBhdHRlcm5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKi9cbnJvdXRlci5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChuYW1lLCBwYXR0ZXJuLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IHN0YXRlID0gey4uLm9wdGlvbnMsIG5hbWUsIHBhdHRlcm59O1xuICB0aGlzLnN0YXRlcy5wdXNoKHN0YXRlKTtcbiAgdGhpcy5fX2luaXQgJiYgdGhpcy5pbml0U3RhdGUoc3RhdGUpO1xuICByZXR1cm4gc3RhdGU7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgc3RhdGUgYnkgdGhlIG5hbWVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5yb3V0ZXIucmVtb3ZlU3RhdGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLm5hbWUgPT0gbmFtZSkge1xuICAgICAgdGhpcy5zdGF0ZXMuc3BsaWNlKGksIDEpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFNldCB0aGUgdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICovXG5yb3V0ZXIuc2V0VXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB0aGlzLmhhc2hNb2RlPyB0aGlzLnNldEhhc2hVcmwodXJsKTogdGhpcy5zZXRIaXN0b3J5VXJsKHVybCk7XG59O1xuXG4vKipcbiAqIFNldCB0aGUgdXJsIHVzaW5nIHRoZSBoaXN0b3J5XG4gKlxuICogQHBhcmFtIHVybFxuICovXG5yb3V0ZXIuc2V0SGlzdG9yeVVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1cmwpO1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIHVybCB1c2luZyB0aGUgaGFzaFxuICpcbiAqIEBwYXJhbSB1cmxcbiAqL1xucm91dGVyLnNldEhhc2hVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyMnICsgKHVybCB8fCAnLycpO1xufTtcblxuLyoqXG4gKiBSZXBsYWNlIHRoZSB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKi9cbnJvdXRlci5yZXBsYWNlVXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB0aGlzLmhhc2hNb2RlPyB0aGlzLnJlcGxhY2VIYXNoVXJsKHVybCk6IHRoaXMucmVwbGFjZUhpc3RvcnlVcmwodXJsKTtcbn07XG5cbi8qKlxuICogUmVwbGFjZSB0aGUgdXJsIHVzaW5nIHRoZSBoaXN0b3J5XG4gKlxuICogQHBhcmFtIHVybFxuICovXG5yb3V0ZXIucmVwbGFjZUhpc3RvcnlVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgdXJsKTtcbn07XG5cbi8qKlxuICogUmVwbGFjZSB0aGUgdXJsIHVzaW5nIHRoZSBoYXNoXG4gKlxuICogQHBhcmFtIHVybFxuICovXG5yb3V0ZXIucmVwbGFjZUhhc2hVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgJyMnICsgKHVybCB8fCAnLycpKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSB1cmxcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuZ2V0VXJsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5oYXNoTW9kZSA/IHRoaXMuZ2V0SGFzaFVybCgpIDogdGhpcy5nZXRIaXN0b3J5VXJsKCk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgdXJsIHVzaW5nIHRoZSBoaXN0b3J5XG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLmdldEhpc3RvcnlVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoICsgd2luZG93LmxvY2F0aW9uLmhhc2g7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgdXJsIHVzaW5nIHRoZSBoYXNoXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLmdldEhhc2hVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKC9eIy8sICcnKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBxdWVyeSBwYXJhbXNcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0VXJsUXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuaGFzaE1vZGUgPyB0aGlzLmdldEhhc2hVcmxRdWVyeSgpIDogdGhpcy5nZXRIaXN0b3J5VXJsUXVlcnkoKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBxdWVyeSBwYXJhbXMgdXNpbmcgdGhlIGhpc3RvcnlcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0SGlzdG9yeVVybFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByZXF1ZXN0LnBhcmFtc0Zyb21RdWVyeSh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIHF1ZXJ5IHBhcmFtcyB1c2luZyB0aGUgaGFzaFxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRIYXNoVXJsUXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJlcXVlc3QucGFyYW1zRnJvbVF1ZXJ5KCh3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnPycpWzFdIHx8ICcnKSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSB0aGUgdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdXG4gKiBAcGFyYW0ge29iamVjdH0gW3F1ZXJ5XVxuICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoXVxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtib29sZWFufSBbcHJlcGFyZV1cbiAqL1xucm91dGVyLmNyZWF0ZVN0YXRlVXJsID0gZnVuY3Rpb24gKHN0YXRlLCBwYXJhbXMgPSB7fSwgcXVlcnkgPSB7fSwgaGFzaCA9IHVuZGVmaW5lZCwgb3B0aW9ucyA9IHt9LCBwcmVwYXJlID0gdHJ1ZSkge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgb3B0aW9ucyA9IHsgLi4ub3B0aW9ucyB9O1xuICBcbiAgaWYocHJlcGFyZSkge1xuICAgICh7IHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMgfSA9IHRoaXMucHJlcGFyZVN0YXRlQXJncyhzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucykpO1xuICB9XG5cbiAgbGV0IHVybCA9IHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2UodGhpcy5fX3BhcmFtUmVnZXgsIChtLCBmLCB2KSA9PiAnLycgKyAocGFyYW1zW3ZdIHx8ICcnKSk7XG4gIHVybCA9IHVybC5yZXBsYWNlKC9eXFxeLywgJycpO1xuICB1cmwgPSB0aGlzLnNwbGl0U2xhc2hlcyh1cmwpO1xuXG4gIGlmIChPYmplY3Qua2V5cyhxdWVyeSkubGVuZ3RoKSB7XG4gICAgdXJsICs9ICc/JyArIHJlcXVlc3QucGFyYW1zVG9RdWVyeShxdWVyeSk7XG4gIH1cblxuICBpZiAoIXRoaXMuaGFzaE1vZGUgJiYgaGFzaCkge1xuICAgIHVybCArPSAnIycgKyBoYXNoLnJlcGxhY2UoJyMnLCAnJyk7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcblxuLyoqXG4gKiBQcmVwYXJlIHRoZSBzdGF0ZSBhcmd1bWVudHNcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdXG4gKiBAcGFyYW0ge29iamVjdH0gW3F1ZXJ5XVxuICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoXVxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICovXG5yb3V0ZXIucHJlcGFyZVN0YXRlQXJncyA9IGZ1bmN0aW9uIChzdGF0ZSwgcGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSB1bmRlZmluZWQsIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgYXJncyA9IHsgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucyB9O1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCAyNzsgaSsrKSB7XG4gICAgY29uc3QgcGFyYW1zVGVtcCA9IHRoaXMucHJlcGFyZVN0YXRlUGFyYW1zKHN0YXRlLCBwYXJhbXMsIGFyZ3MpO1xuICAgIGNvbnN0IHF1ZXJ5VGVtcCA9IHRoaXMucHJlcGFyZVN0YXRlUXVlcnkoc3RhdGUsIHF1ZXJ5LCBhcmdzKTtcbiAgICBjb25zdCBoYXNoVGVtcCA9IHRoaXMucHJlcGFyZVN0YXRlSGFzaChzdGF0ZSwgaGFzaCwgYXJncyk7XG4gICAgXG4gICAgaWYoaGFzaFRlbXAgPT09IG51bGwpIHtcbiAgICAgIG9wdGlvbnMuZW1wdHlIYXNoID0gbnVsbDtcbiAgICB9XG4gICAgZWxzZSBpZihoYXNoVGVtcCA9PT0gJycpIHtcbiAgICAgIG9wdGlvbnMuZW1wdHlIYXNoID0gJyc7XG4gICAgfVxuXG4gICAgY29uc3QgbmV3QXJncyA9IHsgcGFyYW1zOiBwYXJhbXNUZW1wLCBxdWVyeTogcXVlcnlUZW1wLCBoYXNoOiBoYXNoVGVtcCwgb3B0aW9ucyB9O1xuXG4gICAgaWYodXRpbHMuY29tcGFyZShuZXdBcmdzLCBhcmdzKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgYXJncyA9IG5ld0FyZ3M7XG4gIH1cbiAgICBcbiAgcmV0dXJuIGFyZ3M7XG59XG5cbi8qKlxuICogUHJlcGFyZSB0aGUgc3RhdGUgcGFyYW1zXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBbYXJnc11cbiAqL1xucm91dGVyLnByZXBhcmVTdGF0ZVBhcmFtcyA9IGZ1bmN0aW9uKHN0YXRlLCBwYXJhbXMsIGFyZ3MpIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG4gIHJldHVybiB0aGlzLmNyZWF0ZVN0YXRlQXJncyhwYXJhbXMsIHN0YXRlLnBhcmFtcywgYXJncyk7XG59XG5cbi8qKlxuICogUHJlcGFyZSB0aGUgc3RhdGUgcXVlcnlcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IHF1ZXJ5XG4gKiBAcGFyYW0ge29iamVjdH0gW2FyZ3NdXG4gKi9cbnJvdXRlci5wcmVwYXJlU3RhdGVRdWVyeSA9IGZ1bmN0aW9uKHN0YXRlLCBxdWVyeSwgYXJncykgeyAgXG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICByZXR1cm4gdGhpcy5jcmVhdGVTdGF0ZUFyZ3MocXVlcnksIHN0YXRlLnF1ZXJ5LCBhcmdzKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgdGhlIHN0YXRlIGFyZ3VtZW50c1xuICogXG4gKiBAcGFyYW0ge29iamVjdFtdfSBsaXN0XG4gKiBAcGFyYW0ge29iamVjdH0gW2FyZ3NdXG4gKi9cbnJvdXRlci5jcmVhdGVTdGF0ZUFyZ3MgPSBmdW5jdGlvbiAoY3VycmVudCwgZGVmYXVsdHMsIGFyZ3MgPSB7IHBhcmFtczoge30sIHF1ZXJ5OiB7fSB9KSB7XG4gIGNvbnN0IGFsbCA9IE9iamVjdC5hc3NpZ24oe30sIGN1cnJlbnQpO1xuXG4gIGZvcihsZXQga2V5IGluIGRlZmF1bHRzKSB7XG4gICAgbGV0IHZhbCA9IGRlZmF1bHRzW2tleV07XG5cbiAgICBpZihhbGxba2V5XSA9PT0gbnVsbCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYodHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhbGxba2V5XSA9IHZhbChhcmdzKTtcbiAgICB9XG5cbiAgICBpZihhbGxba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBhbGxba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IobGV0IGtleSBpbiBhbGwpIHtcbiAgICBpZihhbGxba2V5XSA9PT0gbnVsbCkge1xuICAgICAgZGVsZXRlIGFsbFtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhbGw7IFxufVxuXG4vKipcbiAqIFByZXBhcmUgdGhlIHN0YXRlIGhhc2hcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGhhc2hcbiAqIEBwYXJhbSB7b2JqZWN0fSBbYXJnc11cbiAqL1xucm91dGVyLnByZXBhcmVTdGF0ZUhhc2ggPSBmdW5jdGlvbihzdGF0ZSwgaGFzaCwgYXJncykge1xuICBpZihoYXNoID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGhhc2g7XG4gIH1cblxuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcblxuICBpZih0eXBlb2Ygc3RhdGUuaGFzaCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHN0YXRlLmhhc2goYXJncyk7XG4gIH1cblxuICBpZihoYXNoID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gc3RhdGUuaGFzaDtcbiAgfVxuXG4gIHJldHVybiBoYXNoO1xufVxuXG4vKipcbiAqIFJlbW92ZSBhbGwgdW5uZWNlc3Nhcnkgc2xhc2hlcyBmcm9tIHRoZSB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuc3BsaXRTbGFzaGVzID0gZnVuY3Rpb24gKHVybCkge1xuICByZXR1cm4gdXJsLnJlcGxhY2UoL1svXSsvZywgJy8nKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBwYXR0ZXJuIGluZm9cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0UGF0dGVybkNvbnRlbnQgPSBmdW5jdGlvbiAoc3RhdGUsIHVybCkge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgbGV0IGtleXMgPSBbXTtcbiAgbGV0IHBhcmFtcyA9IHt9O1xuXG4gIHVybCA9IHVybC5zcGxpdCgnPycpWzBdO1xuICB1cmwgPSB1cmwuc3BsaXQoJyMnKVswXTtcblxuICBsZXQgdXJsUGF0dGVybiA9IHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2UodGhpcy5fX3BhcmFtUmVnZXgsIChtLCBmLCB2KSA9PiB7XG4gICAga2V5cy5wdXNoKHYpO1xuICAgIHJldHVybiAnLz8oW14vXSopJztcbiAgfSk7XG5cbiAgdXJsUGF0dGVybiA9IHVybFBhdHRlcm4ucmVwbGFjZSgvKFteXi9dKylbL10rJC8sICckMScpO1xuICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKHVybFBhdHRlcm4sICdnJyk7XG4gIGxldCBpc0luY2x1ZGVkID0gdXJsLm1hdGNoKHJlZ2V4KTtcbiAgXG4gIGlmICghaXNJbmNsdWRlZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdXJsLnJlcGxhY2UocmVnZXgsIChtLCAuLi5hcmdzKSA9PiB7IFxuICAgIGFyZ3MgPSBhcmdzLnNsaWNlKDAsIGFyZ3MubGVuZ3RoIC0gMik7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gYXJncy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCB2ID0gYXJnc1tpXTtcbiAgICAgIHYgJiYgKHBhcmFtc1trZXlzW2ldXSA9IHYpO1xuICAgIH0gIFxuICB9KTtcblxuICByZXR1cm4geyBwYXJhbXMgfTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIHN0YXRlIGlzIGFjdGl2ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5jbHVkZXNcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaXNBY3RpdmVTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlLCBpbmNsdWRlcyA9IGZhbHNlKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBsZXQgdXJsID0gcm91dGVyLnRyYW5zaXRpb24gJiYgIXJvdXRlci50cmFuc2l0aW9uLl9fZmluaXNoZWQ/IHJvdXRlci50cmFuc2l0aW9uLnVybDogdGhpcy5nZXRVcmwoKTtcbiAgdXJsID0gdGhpcy5zcGxpdFNsYXNoZXMoJy8nICsgdXJsLnNwbGl0KCc/JylbMF0gKyAnLycpO1xuICBsZXQgdXJsUGF0dGVybiA9IHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2UodGhpcy5fX3BhcmFtUmVnZXgsICcvPyhbXi9dKiknKTtcbiAgdXJsUGF0dGVybiA9IHVybFBhdHRlcm4ucmVwbGFjZSgvXlxcXi8sICcnKS5yZXBsYWNlKC9cXCQkLywgJycpO1xuICBsZXQgc3RyID0gaW5jbHVkZXM/IHVybFBhdHRlcm46IHRoaXMuc3BsaXRTbGFzaGVzKCdeLycgKyB1cmxQYXR0ZXJuICsgJy8kJyk7XG4gIGxldCByZWdleCA9IG5ldyBSZWdFeHAoc3RyKTsgIFxuICByZXR1cm4gcmVnZXgudGVzdCh1cmwpO1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgY3VycmVudCB1cmwgaW5jbHVkZXMgdGhlIHN0YXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnJvdXRlci5pbkFjdGl2ZVN0YXRlID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgcmV0dXJuIHJvdXRlci5pc0FjdGl2ZVN0YXRlKHN0YXRlLCB0cnVlKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSByb3V0ZSBjb21wb25lbnQgYnkgdGhlIGxldmVsXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxldmVsXG4gKi9cbnJvdXRlci5nZXRSb3V0ZSA9IGZ1bmN0aW9uIChsZXZlbCkge1xuICBsZXQgaSA9IDA7XG5cbiAgY29uc3QgZmluZCA9IChlbCkgPT4ge1xuICAgIGxldCByb3V0ZSA9IGVsLmNoaWxkKHRoaXMuX19yb3V0ZVNlbGVjdG9yKTtcblxuICAgIGlmICghcm91dGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChpID09IGxldmVsKSB7XG4gICAgICByZXR1cm4gcm91dGU7XG4gICAgfVxuXG4gICAgaSsrO1xuICAgIHJldHVybiBmaW5kKHJvdXRlKTtcbiAgfTtcblxuICByZXR1cm4gZmluZChBa2lsaS5yb290KTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBwYXR0ZXJucyBhcnJheSBpbmZvXG4gKlxuICogQHBhcmFtIHthcnJheX0gYXJyXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gKi9cbnJvdXRlci5nZXRBcnJheVBhdHRlcm5Db250ZW50ID0gZnVuY3Rpb24gKGFyciwgdXJsKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IGFycltpXTtcbiAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0UGF0dGVybkNvbnRlbnQoc3RhdGUsIHVybCk7XG5cbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJldHVybiB7IHN0YXRlOiBzdGF0ZSwgLi4uY29udGVudCB9O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgc3RhdGVzIGJ5IHRoZSBsZXZlbFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZXZlbFxuICogQHJldHVybnMge0FycmF5fVxuICovXG5yb3V0ZXIuZ2V0U3RhdGVzQnlMZXZlbCA9IGZ1bmN0aW9uIChsZXZlbCkge1xuICBsZXQgc3RhdGVzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZS5sZXZlbCA8IGxldmVsKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc3RhdGUubGV2ZWwgPiBsZXZlbCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgc3RhdGVzLnB1c2goc3RhdGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlcztcbn07XG5cbi8qKlxuICogUmVsb2FkIHRoZSBzdGF0ZVxuICogXG4gKiBAc2VlIFRyYW5zaXRpb24ucmVsb2FkXG4gKi9cbnJvdXRlci5yZWxvYWQgPSBmdW5jdGlvbiguLi5hcmdzKSB7XG4gIGlmKCF0aGlzLnRyYW5zaXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBmb3VuZCBhbiBhY3RpdmUgdHJhbnNpdGlvbiB0byByZWxvYWQgdGhlIHN0YXRlJyk7XG4gIH1cblxuICByZXR1cm4gdGhpcy50cmFuc2l0aW9uLnJlbG9hZCguLi5hcmdzKTtcbn1cblxuLyoqXG4gKiBJc29sYXRlIHRoZSBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xucm91dGVyLmlzb2xhdGUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgdGhpcy5fX2lzb2xhdGVkID0gdHJ1ZTtcbiAgbGV0IHJlcyA9IGZuKCk7XG4gIHRoaXMuX19pc29sYXRlZCA9IGZhbHNlO1xuICByZXR1cm4gcmVzO1xufVxuXG4vKipcbiAqIENoYW5nZSB0aGUgc3RhdGVcbiAqIFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICovXG5yb3V0ZXIuY2hhbmdlU3RhdGUgPSBmdW5jdGlvbiAob3B0aW9ucyA9IHt9KSB7ICAgIFxuICBpZih0aGlzLl9faXNvbGF0ZWQpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cbiAgXG4gIGxldCB1cmwgPSB0aGlzLmdldFVybCgpO1xuICBsZXQgcGFyYW1zID0ge307XG4gIGxldCBxdWVyeSA9IHRoaXMuZ2V0VXJsUXVlcnkoKTsgIFxuICBsZXQgaGFzaCA9IHRoaXMuaGFzaE1vZGU/ICcnOiB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpOyBcbiAgbGV0IHByZXZUcmFuc2l0aW9uID0gcm91dGVyLnRyYW5zaXRpb24gfHwgbnVsbDtcbiAgbGV0IHRyYW5zaXRpb24gPSByb3V0ZXIudHJhbnNpdGlvbiA9IG5ldyBUcmFuc2l0aW9uKHVybCwgcHJldlRyYW5zaXRpb24pO1xuICBsZXQgbGV2ZWwgPSAwO1xuICBcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzdGF0ZS1jaGFuZ2UnLCB7IGRldGFpbDogdHJhbnNpdGlvbiB9KSk7XG5cbiAgY29uc3QgbmV4dCA9IChzdGF0ZXMpID0+IHsgICAgXG4gICAgaWYgKCFzdGF0ZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldEFycmF5UGF0dGVybkNvbnRlbnQoc3RhdGVzLCB1cmwpO1xuXG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgbGV0IHN0YXRlID0gY29udGVudC5zdGF0ZTsgXG4gICAgdHJhbnNpdGlvbi5zZXRQYXRoKHsgc3RhdGUsIGNvbXBvbmVudDogcm91dGUgfSk7ICAgIFxuICAgIHBhcmFtcyA9IHsgLi4ucGFyYW1zLCAuLi5jb250ZW50LnBhcmFtcyB9O1xuICAgIGhhc2ggPSBoYXNoIHx8IG9wdGlvbnMuZW1wdHlIYXNoO1xuICAgICh7IHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMgfSA9IHRoaXMucHJlcGFyZVN0YXRlQXJncyhzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucykpOyAgICAgXG4gICAgaGFzaCA9IGhhc2ggfHwgJyc7XG4gICAgbGV0IHJlYWxVcmwgPSB0aGlzLmNyZWF0ZVN0YXRlVXJsKHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zLCBmYWxzZSk7IFxuICAgIHRoaXMuaXNvbGF0ZSgoKSA9PiB0aGlzLnJlcGxhY2VVcmwocmVhbFVybCkpOyBcbiAgICBsZXQgcm91dGUgPSBzdGF0ZS5hYnN0cmFjdD8gbnVsbDogdGhpcy5nZXRSb3V0ZShsZXZlbCk7XG4gICAgXG4gICAgaWYgKCFyb3V0ZSAmJiAhc3RhdGUuYWJzdHJhY3QpIHsgICAgICBcbiAgICAgIHRocm93IG5ldyBFcnJvciAoYE5vdCBmb3VuZCByb3V0ZSBjb21wb25lbnQgZm9yIHN0YXRlIFwiJHtzdGF0ZS5uYW1lfVwiYCk7XG4gICAgfSAgICBcblxuICAgIHRyYW5zaXRpb24ucGF0aC5wYXJhbXMgPSBwYXJhbXM7XG4gICAgdHJhbnNpdGlvbi5wYXRoLnF1ZXJ5ID0gcXVlcnk7XG4gICAgdHJhbnNpdGlvbi5wYXRoLmhhc2ggPSBoYXNoO1xuICAgIHRyYW5zaXRpb24ucGF0aC51cmwgPSByZWFsVXJsO1xuICAgIHRyYW5zaXRpb24ucGF0aC5vcHRpb25zID0gb3B0aW9ucztcbiAgICAhc3RhdGUuYWJzdHJhY3QgJiYgbGV2ZWwrKztcbiAgICBsZXQgaXNEaWZmZXJlbnQgPSB0cnVlO1xuXG4gICAgaWYocmVhbFVybCAhPSB1cmwpIHtcbiAgICAgIGlzRGlmZmVyZW50ID0gdHJhbnNpdGlvbi5pc1JvdXRlQ2hhbmdlZCh0cmFuc2l0aW9uLnBhdGgpO1xuICAgIH1cbiAgICAgICBcbiAgICBsZXQgbG9hZCA9IGlzRGlmZmVyZW50ICYmIG9wdGlvbnMucmVsb2FkICE9PSBmYWxzZTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobG9hZD8gc3RhdGUuaGFuZGxlcih0cmFuc2l0aW9uKTogdHJhbnNpdGlvbi5wYXRoLmRhdGEpLnRoZW4oKGRhdGEpID0+IHsgICAgICAgXG4gICAgICB0cmFuc2l0aW9uLnBhdGguZGF0YSA9IGRhdGE7XG4gICAgICBzdGF0ZS50aXRsZSAmJiAoZG9jdW1lbnQudGl0bGUgPSB0eXBlb2Ygc3RhdGUudGl0bGUgPT0gJ2Z1bmN0aW9uJz8gc3RhdGUudGl0bGUodHJhbnNpdGlvbik6IHN0YXRlLnRpdGxlKTtcblxuICAgICAgaWYgKHRyYW5zaXRpb24uX19jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUuYWJzdHJhY3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwcmV2Um91dGUgPSB0cmFuc2l0aW9uLnByZXZpb3VzICYmIHRyYW5zaXRpb24ucHJldmlvdXMuZ2V0Um91dGUoc3RhdGUpO1xuICAgICAgKHByZXZSb3V0ZSAmJiAhcHJldlJvdXRlLmxvYWRlZCkgJiYgKGxvYWQgPSB0cnVlKTtcbiAgICAgIHJldHVybiByb3V0ZS5zZXRUcmFuc2l0aW9uKHRyYW5zaXRpb24sIGxvYWQpLnRoZW4oKCkgPT4gdHJhbnNpdGlvbi5wYXRoLmxvYWRlZCA9IHRydWUpO1xuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgcmV0dXJuIG5leHQoc3RhdGUuY2hpbGRyZW4pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBuZXh0KHRoaXMuZ2V0U3RhdGVzQnlMZXZlbCgwKSkudGhlbigoKSA9PiB7XG4gICAgaWYgKCF0cmFuc2l0aW9uLnJvdXRlcy5sZW5ndGgpIHtcbiAgICAgIGlmICh0aGlzLl9fcmVkaXJlY3RzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgV3Jvbmcgcm91dGVyIGRlZmF1bHQgdXJsIFwiJHt0aGlzLmRlZmF1bHRVcmx9XCJgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZGVmYXVsdFVybCkge1xuICAgICAgICBpZiAodGhpcy5kZWZhdWx0VXJsID09IHRoaXMuZ2V0VXJsKCkpIHtcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIGFueSByb3V0ZXNgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNvbGF0ZSgoKSA9PiB0aGlzLnJlcGxhY2VVcmwodGhpcy5kZWZhdWx0VXJsKSk7ICAgICAgICAgIFxuICAgICAgICB0aGlzLl9fcmVkaXJlY3RzKys7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZVN0YXRlKCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmIChBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgIGNvbnNvbGUud2FybihgTm90IGZvdW5kIGEgZGVmYXVsdCByb3V0ZS4gWW91IGNhbiBwYXNzIGl0IGluIFwicm91dGVyLmluaXQoZGVmYXVsdFVybClcIiBmdW5jdGlvbmApO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAoIW9wdGlvbnMuc2F2ZVNjcm9sbFBvc2l0aW9uICYmICghdHJhbnNpdGlvbi5wYXRoIHx8ICF0cmFuc2l0aW9uLnBhdGguaGFzaCkpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICB9XG5cbiAgICB0aGlzLl9fcmVkaXJlY3RzID0gMDtcbiAgICB0cmFuc2l0aW9uLmZpbmlzaCgpO1xuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc3RhdGUtY2hhbmdlZCcsIHsgZGV0YWlsOiB0cmFuc2l0aW9uIH0pKTtcbiAgICByZXR1cm4gdHJhbnNpdGlvbjtcbiAgfSk7XG59O1xuXG4vKipcbiAqIERlaW5pdGlhbGl6ZSB0aGUgcm91dGVyXG4gKi9cbnJvdXRlci5kZWluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMuX19vblN0YXRlQ2hhbmdlSGFuZGxlcik7XG4gIHRoaXMuX19pbml0ID0gZmFsc2U7XG59O1xuXG5yb3V0ZXIuVHJhbnNpdGlvbiA9IFRyYW5zaXRpb247XG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGNvbmRpdGlvbmFsIHN0YXRlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NvbmRpdGlvbmFsX3N0YXRlbWVudHN9XG4gKiBcbiAqIEB0YWcgaWZcbiAqIEBzZWxlY3RvciBpZltpc11cbiAqIEBhdHRyIHtib29sZWFufSBpcyAtIHNob3cgdGhlIGVsZW1lbnQgY29udGVudCBvciBub3RcbiAqIEBhdHRyIHtib29sZWFufSByZWNyZWF0ZSAtIGRlbGV0ZSB0aGUgY29udGVudCBhbmQgcmVjcmVhdGUgb3IganVzdCBzaG93L2hpZGUgXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElmIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gdHJ1ZTsgXG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tpc10nO1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ3JlY3JlYXRlJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2lmJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdlbHNlLWlmJywgdGhpcy5FbHNlSWYpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnZWxzZScsIHRoaXMuRWxzZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuc3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMucmVjcmVhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ29tcGlsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRpc3BsYXkgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpLmRpc3BsYXk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ3JlY3JlYXRlJywgdGhpcy5zZXRSZWNyZWF0aW9uKTtcbiAgICByZXR1cm4gdGhpcy5hdHRyKCdpcycsIHRoaXMuc2V0SXMpO1xuICB9XG5cbiAgc2V0SXModmFsKSB7XG4gICAgdGhpcy5zdGF0ZSA9ICEhdmFsO1xuICAgIHJldHVybiB0aGlzLnNldFN0YXRlKCk7XG4gIH1cblxuICBzZXRBY3Rpdml0eShhY3RpdmUpIHtcbiAgICB0aGlzLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgfVxuXG4gIHNldFJlY3JlYXRpb24ocmVjcmVhdGUpIHtcbiAgICB0aGlzLnJlY3JlYXRlID0gcmVjcmVhdGU7XG4gIH1cblxuICBzZXRTdGF0ZSgpIHtcbiAgICBsZXQgcmVzID0gdGhpcy5jb21waWxhdGlvbigpO1xuICAgIGxldCBuZXh0ID0gdGhpcy5lbC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgbGV0IHJlc3VsdDtcblxuICAgIGlmICghbmV4dCB8fCAhbmV4dC5tYXRjaGVzKCdlbHNlLWlmLGVsc2UnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5leHQuX19ha2lsaS5zZXRBY3Rpdml0eSh0aGlzLmFjdGl2ZSB8fCB0aGlzLnN0YXRlKTtcbiAgICBuZXh0Ll9fYWtpbGkuc2V0UmVjcmVhdGlvbih0aGlzLnJlY3JlYXRlKTtcbiAgICByZXN1bHQgPSBuZXh0Ll9fYWtpbGkuc2V0U3RhdGUoKTsgICAgXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMpLnRoZW4oKCkgPT4gIHJlc3VsdCk7XG4gIH1cblxuICBjb21waWxhdGlvbigpIHtcbiAgICBsZXQgcmVzID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZSAmJiAhdGhpcy5hY3RpdmUpIHtcbiAgICAgIGlmICh0aGlzLnJlY3JlYXRlIHx8ICF0aGlzLmlzQ29tcGlsZWQpIHtcbiAgICAgICAgcmVzID0gdGhpcy5jb21waWxlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCB0aGlzLmRpc3BsYXksICdpbXBvcnRhbnQnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAodGhpcy5yZWNyZWF0ZSkge1xuICAgICAgICB0aGlzLmVtcHR5KCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghdGhpcy5pc0NvbXBpbGVkKSB7XG4gICAgICAgIHJlcyA9IHRoaXMuY29tcGlsZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnLCAnaW1wb3J0YW50Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGNvbXBpbGUoKSB7XG4gICAgbGV0IHJlcztcbiAgICB0aGlzLmVtcHR5KCk7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7ICAgXG4gICAgcmVzID0gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICB0aGlzLmlzQ29tcGlsZWQgPSB0cnVlO1xuICAgIHJldHVybiByZXM7XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGNvbmRpdGlvbmFsIHN0YXRlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NvbmRpdGlvbmFsX3N0YXRlbWVudHN9XG4gKiBcbiAqIEB0YWcgZWxzZS1pZlxuICogQHNlbGVjdG9yIGVsc2UtaWZbaXNdXG4gKiBAYXR0ciB7Ym9vbGVhbn0gaXMgQHNlZSBJZlxuICovXG5leHBvcnQgY2xhc3MgRWxzZUlmIGV4dGVuZHMgSWYge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGNvbmRpdGlvbmFsIHN0YXRlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NvbmRpdGlvbmFsX3N0YXRlbWVudHN9XG4gKiBcbiAqIEB0YWcgZWxzZVxuICovXG5leHBvcnQgY2xhc3MgRWxzZSBleHRlbmRzIEVsc2VJZiB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2lzJywgJ3RydWUnKTtcbiAgfVxufVxuXG5JZi5FbHNlSWYgPSBFbHNlSWY7XG5JZi5FbHNlID0gRWxzZTsiLCJpbXBvcnQgRm9yLCB7IExvb3AgfSBmcm9tICcuL2Zvci5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIHNlbGVjdC5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3Nfc2VsZWN0fVxuICogXG4gKiBAdGFnIHNlbGVjdCAgXG4gKiBAYXR0ciB7c3RyaW5nfSB2YWx1ZSAtIGFjdHVhbCB2YWx1ZVxuICogQGF0dHIgW2luXSBAc2VlIEZvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyBGb3Ige1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ211bHRpcGxlJ10uY29uY2F0KEZvci5ib29sZWFuQXR0cmlidXRlcyk7XG4gIHN0YXRpYyBldmVudHMgPSBbJ2NoYW5nZSddLmNvbmNhdChGb3IuZXZlbnRzKTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnc2VsZWN0JywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdvcHRpb24nLCB0aGlzLk9wdGlvbik7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLml0ZXJhdG9yVGFnTmFtZSA9ICdvcHRpb24nO1xuICAgIHRoaXMuaXNNdWx0aXBsZSA9IGZhbHNlO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7IFxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gdGhpcy5lbC5jb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCkpO1xuICAgIGxldCByZXMgPSBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAgIFxuICAgIHRoaXMuYXR0cignbXVsdGlwbGUnLCB0aGlzLnNldE11bHRpcGxlKTtcbiAgICB0aGlzLmF0dHIoJ2NvbnRlbnQnLCB0aGlzLnNldENvbnRlbnQpO1xuICAgIHRoaXMuYXR0cignaW4nLCB0aGlzLmRyYXdTZWxlY3QpO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBzZXRNdWx0aXBsZSh2YWx1ZSkge1xuICAgIHRoaXMuaXNNdWx0aXBsZSA9IHZhbHVlO1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5mb3JtYXRWYWx1ZSh1dGlscy5jb3B5KHRoaXMuZWwuY29udGVudCkpKTtcbiAgfVxuXG4gIHNldENvbnRlbnQodmFsdWUpIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUodmFsdWUpKTtcbiAgfVxuXG4gIGRyYXdTZWxlY3QoKSB7XG4gICAgbGV0IHNlbGVjdGVkID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV0uX19ha2lsaTtcbiAgICAgIGxldCBzZWxlY3Rpb24gPSBvcHRpb24uYXR0cnMuc2VsZWN0ZWQ7XG5cbiAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgc2VsZWN0ZWQucHVzaChvcHRpb24uZWwudmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBvcHRpb24uZWwuc2VsZWN0ZWQgPSBzZWxlY3Rpb247XG4gICAgfVxuXG4gICAgaWYgKCFzZWxlY3RlZC5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVkZWZpbmUoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUoc2VsZWN0ZWQpKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVJdGVyYXRvckVsZW1lbnQoKSB7XG4gICAgbGV0IGVsID0gc3VwZXIuY3JlYXRlSXRlcmF0b3JFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICBpZiAoIWVsLmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRoaXMuaHRtbC50cmltKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgaWYgKCF0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsLnZhbHVlO1xuICAgIH1cblxuICAgIGxldCBjb250ZW50ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgIGlmIChvcHRpb24uc2VsZWN0ZWQpIHtcbiAgICAgICAgY29udGVudC5wdXNoKG9wdGlvbi52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBmb3JtYXRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCk/IFt2YWx1ZV06IFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLmxlbmd0aD8gdmFsdWVbMF06ICcnO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmVkZWZpbmUoKSB7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmdldENvbnRlbnQoKSk7XG4gIH1cblxuICBjaGFuZ2VWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh1dGlscy5jb21wYXJlKHRoaXMuZWwuY29udGVudCwgdmFsdWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB0aGlzLmVsLnZhbHVlID0gdmFsdWVbdmFsdWUubGVuZ3RoIC0gMV07XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldO1xuXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHZhbHVlLmluZGV4T2Yob3B0aW9uLnZhbHVlKSAhPSAtMTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmVsLnZhbHVlID0gdmFsdWU7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldO1xuXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IG9wdGlvbi52YWx1ZSA9PSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmVsLmNvbnRlbnQgPSB2YWx1ZTtcbiAgICB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9wdGlvbiBleHRlbmRzIExvb3Age1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ3NlbGVjdGVkJ107XG5cbiAgX19nZXRQYXJzZWRFeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgICByZXR1cm4gdXRpbHMuZGVjb2RlSHRtbEVudGl0aWVzKGV4cHJlc3Npb24pO1xuICB9XG5cbiAgY2hhbmdlZFNlbGVjdGVkKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTZWxlY3RlZCh2YWx1ZSk7XG4gIH1cblxuICBzZXRTZWxlY3RlZCh2YWx1ZSkge1xuICAgIHRoaXMuZWwuc2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICB0aGlzLmZvci5yZWRlZmluZSgpO1xuICB9XG59XG5cblNlbGVjdC5PcHRpb24gPSBPcHRpb247IiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCBpbnB1dCBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW5wdXR9XG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jaGVja2JveF9hbmRfcmFkaW99XG4gKiBcbiAqIEB0YWcgaW5wdXRcbiAqIEBhdHRyIEBzZWUgVGV4dFxuICogQG1lc3NhZ2UgQHNlZSBUZXh0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnY2hlY2tlZCcsICdtdWx0aXBsZSddLmNvbmNhdChUZXh0LmJvb2xlYW5BdHRyaWJ1dGVzKTtcbiAgc3RhdGljIGV2ZW50cyA9IFsnY2hhbmdlJ10uY29uY2F0KFRleHQuZXZlbnRzKTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaW5wdXQnLCB0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXNDaGVja2JveCA9IHRoaXMuZWwudHlwZSA9PSAnY2hlY2tib3gnO1xuICAgIHRoaXMuaXNSYWRpbyA9IHRoaXMuZWwudHlwZSA9PSAncmFkaW8nOyAgICBcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgICh0aGlzLmlzQ2hlY2tib3ggfHwgdGhpcy5pc1JhZGlvKSAmJiB0aGlzLmF0dHIoJ2NoZWNrZWQnLCB0aGlzLnNldENoZWNrZWQpO1xuICAgIHJldHVybiBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9ICBcblxuICBzZXRDaGVja2VkKHZhbHVlKSB7XG4gICAgdmFsdWUgPSAhIXZhbHVlO1xuICAgIFxuICAgIGlmICh0aGlzLmVsLmNoZWNrZWQgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5lbC5jaGVja2VkID0gdmFsdWU7XG4gICAgdGhpcy5fX2lzQ29tcGlsZWQgJiYgdGhpcy5hdHRycy5vbkNoYW5nZS5kaXNwYXRjaChFdmVudCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgIHRoaXMuaXNSYWRpbyAmJiB0aGlzLmNoYW5nZVJhZGlvKCk7XG4gIH1cblxuICBzZXRWYWx1ZSgpIHtcbiAgICBzdXBlci5zZXRWYWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuaXNSYWRpbyAmJiB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cblxuICBjaGFuZ2VSYWRpbygpIHtcbiAgICBsZXQgbmFtZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgbGV0IHNlbGVjdG9yID0gYGlucHV0W3R5cGU9cmFkaW9dW25hbWU9JyR7bmFtZX0nXTpub3QoW3Njb3BlPScke3RoaXMuc2NvcGUuX19uYW1lfSddKWA7XG4gICAgbGV0IGNoaWxkcmVuID0gQWtpbGkucm9vdC5jaGlsZHJlbihzZWxlY3Rvcik7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJhZGlvID0gY2hpbGRyZW5baV07XG4gICAgICByYWRpby5zZXRDaGVja2VkKHJhZGlvLmVsLmNoZWNrZWQpO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCBGb3IsIHsgTG9vcCB9IGZyb20gJy4vZm9yLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCByYWRpbyBncm91cC5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfcmFkaW9fZ3JvdXB9XG4gKiBcbiAqIEB0YWcgcmFkaW9cbiAqIEBzZWxlY3RvciByYWRpb1tuYW1lXVxuICogQGF0dHIge3N0cmluZ30gbmFtZSAtIG5hbWUgb2YgdGhlIGdyb3VwXG4gKiBAYXR0ciB7c3RyaW5nfG51bGx9IHZhbHVlIC0gc2VsZWN0ZWQgdmFsdWVcbiAqIEBhdHRyIFtpbl0gQHNlZSBGb3JcbiAqIEBtZXNzYWdlIHtzdHJpbmd9IHJhZGlvIC0gc2VudCBvbiB2YWx1ZSBjaGFuZ2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaW8gZXh0ZW5kcyBGb3Ige1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbbmFtZV0nO1xuICBzdGF0aWMgZXZlbnRzID0gWydyYWRpbyddLmNvbmNhdChGb3IuZXZlbnRzKTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgncmFkaW8nLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JhZGlvLWJ1dHRvbicsIHRoaXMuUmFkaW9CdXR0b24pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pdGVyYWJsZSA9IHRoaXMuZWwuaGFzQXR0cmlidXRlKCdpbicpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICBpZih0aGlzLml0ZXJhYmxlKSB7XG4gICAgICByZXR1cm4gc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgQWtpbGkubmV4dFRpY2soKCkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLmdldFJhZGlvVmFsdWUoKTtcblxuICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMucHJldlZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5hdHRycy5vblJhZGlvLnRyaWdnZXIodmFsdWUsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYodGhpcy5pdGVyYWJsZSkge1xuICAgICAgcmV0dXJuIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgcmVzb2x2ZWQoKSB7XG4gICAgdGhpcy5hdHRyKCdpbicsICgpID0+IHRoaXMuc2V0TmFtZXMoKSwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5hdHRyKCd2YWx1ZScsIHRoaXMuc2V0VmFsdWUpO1xuICAgIHRoaXMuYXR0cignbmFtZScsIHRoaXMuc2V0TmFtZXMpO1xuXG4gICAgaWYodGhpcy5pdGVyYWJsZSkge1xuICAgICAgcmV0dXJuIHN1cGVyLnJlc29sdmVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgc2V0TmFtZXMobmFtZSkge1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oJ2lucHV0W3R5cGU9cmFkaW9dJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY2hpbGRyZW5baV0uZWwuc2V0QXR0cmlidXRlKCduYW1lJywgbmFtZSB8fCB0aGlzLmF0dHJzLm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSB0aGlzLnByZXZWYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBwcmV2ID0gdGhpcy5wcmV2VmFsdWU7XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbignaW5wdXRbdHlwZT1yYWRpb10nKTtcbiAgICBsZXQgaXNUcnVlID0gZmFsc2U7XG4gICAgdGhpcy5wcmV2VmFsdWUgPSB2YWx1ZTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcmFkaW8gPSBjaGlsZHJlbltpXTtcbiAgICAgIGxldCBpc1NlbGVjdGVkID0gcmFkaW8uZWwudmFsdWUgPT09IHZhbHVlO1xuXG4gICAgICBpc1NlbGVjdGVkICYmIChpc1RydWUgPSB0cnVlKTtcbiAgICAgIHJhZGlvLnNldENoZWNrZWQoaXNTZWxlY3RlZCk7XG4gICAgfVxuXG4gICAgaWYgKCFpc1RydWUpIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICBpZiAocHJldiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmF0dHJzLm9uUmFkaW8udHJpZ2dlcih2YWx1ZSwgeyBidWJibGVzOiB0cnVlIH0pO1xuICB9XG5cbiAgZ2V0UmFkaW9WYWx1ZSgpIHtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICBpZiAocmFkaW8uZWwuY2hlY2tlZCkge1xuICAgICAgICByZXR1cm4gcmFkaW8uZWwudmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIHJhZGlvIGdyb3VwIGl0ZW0uXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX3JhZGlvX2dyb3VwfVxuICogXG4gKiBAdGFnIHJhZGlvLWJ1dHRvblxuICogQGF0dHIge3N0cmluZ30gdmFsdWUgLSB2YWx1ZVxuICovXG5leHBvcnQgY2xhc3MgUmFkaW9CdXR0b24gZXh0ZW5kcyBMb29wIHtcbiAgc3RhdGljIHRlbXBsYXRlID0gJzxsYWJlbD48aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIke3RoaXMudmFsdWV9XCIvPiR7dGhpcy5fX2NvbnRlbnR9PC9sYWJlbD4nO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cigndmFsdWUnLCAndmFsdWUnKTtcbiAgICByZXR1cm4gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5SYWRpby5SYWRpb0J1dHRvbiA9IFJhZGlvQnV0dG9uOyIsImltcG9ydCBUZXh0IGZyb20gJy4vdGV4dC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggdGV4dGFyZWEuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX3RleHRhcmVhfVxuICogXG4gKiBAdGFnIHRleHRhcmVhXG4gKiBAYXR0ciBAc2VlIFRleHRcbiAqIEBtZXNzYWdlIEBzZWUgVGV4dFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0YXJlYSBleHRlbmRzIFRleHQge1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgndGV4dGFyZWEnLCB0aGlzKTtcbiAgfVxufSIsImltcG9ydCBUZXh0IGZyb20gJy4vdGV4dC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgZWxlbWVudHMgd2l0aCB0aGUgY29udGVudGVkaXRhYmxlIGF0dHJpYnV0ZS5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfY29udGVudGVkaXRhYmxlfVxuICogXG4gKiBAdGFnIGNvbnRlbnRcbiAqIEBzZWxlY3RvciBjb250ZW50LFtjb250ZW50ZWRpdGFibGVdXG4gKiBAYXR0ciBAc2VlIFRleHRcbiAqIEBhdHRyIHtib29sZWFufSBbZWRpdGFibGVdIC0gZWRpdGFibGUgb3Igbm90XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnQgZXh0ZW5kcyBUZXh0IHtcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2NvbnRlbnQnLCB0aGlzKTtcbiAgICBBa2lsaS5hbGlhcygnW2NvbnRlbnRlZGl0YWJsZV0nLCAnY29udGVudCcpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgaWYgKHRoaXMuZWwuaGFzQXR0cmlidXRlKCdlZGl0YWJsZScpKSB7XG4gICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ2VkaXRhYmxlJykpO1xuICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoJ2VkaXRhYmxlJyk7XG4gICAgfVxuXG4gICAgaWYgKGdldENvbXB1dGVkU3R5bGUodGhpcy5lbCkuZGlzcGxheSA9PSAnaW5saW5lJykge1xuICAgICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlS2V5ID0gJ2lubmVySFRNTCc7XG4gIH1cblxuICBzZXRFbGVtZW50Rm9jdXMoKSB7XG4gICAgbGV0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICBsZXQgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuXG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKHRoaXMuZWwpO1xuICAgIHJhbmdlLmNvbGxhcHNlKGZhbHNlKTtcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIGluY2x1ZGUgdGVtcGxhdGVzIGJ5IHVybC5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaHRtbF90ZW1wbGF0ZXN9XG4gKiBcbiAqIEB0YWcgaW5jbHVkZVxuICogQHNlbGVjdG9yIGluY2x1ZGVbdXJsXVxuICogQGF0dHIge3N0cmluZ30gdXJsIC0gdGVtcGxhdGUgcGF0aFxuICogQGF0dHIge251bWJlcnxmdW5jdGlvbnxib29sZWFufSBbY2FjaGVdIC0gcmVxdWVzdCBjYWNoZSB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JlcXVlc3RzI2RvY3NfY2FjaGV9XG4gKiBAbWVzc2FnZSB7dm9pZH0gbG9hZCAtIHNlbnQgb24gdGhlIHRlbXBsYXRlIGxvYWRcbiAqIEBtZXNzYWdlIHtFcnJvcn0gZXJyb3IgLSBzZW50IG9uIGVycm9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluY2x1ZGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgdHJhbnNwYXJlbnQgPSB0cnVlOyBcbiAgc3RhdGljIG1hdGNoZXMgPSAnW3VybF0nO1xuICBzdGF0aWMgZXZlbnRzID0gWydsb2FkJywgJ2Vycm9yJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2luY2x1ZGUnLCB0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cignY2FjaGUnLCB0aGlzLnNldENhY2hlKTtcbiAgICByZXR1cm4gdGhpcy5hdHRyKCd1cmwnLCB0aGlzLnNldFRlbXBsYXRlKTtcbiAgfVxuXG4gIHNldENhY2hlKGNhY2hlKSB7XG4gICAgdGhpcy5jYWNoZSA9IGNhY2hlO1xuICB9XG5cbiAgc2V0VGVtcGxhdGUodXJsKSB7XG4gICAgdGhpcy5jb25uZWN0aW9uICYmIHRoaXMuY29ubmVjdGlvbi5hYm9ydCgpO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KHVybCwge1xuICAgICAgY2FjaGU6IHRoaXMuY2FjaGUsXG4gICAgICBvblN0YXJ0OiAoeGhyKSA9PiB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IHhocjtcbiAgICAgIH1cbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gICAgICB0aGlzLmVtcHR5KCk7XG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcbiAgICAgIEFraWxpLnNldFRlbXBsYXRlKHRoaXMuZWwsIHJlcy5kYXRhKTtcblxuICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0cnMub25Mb2FkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgfSk7XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgdGhpcy5hdHRycy5vbkVycm9yLnRyaWdnZXIoZXJyLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9XG59IiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgaWZyYW1lcy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIGlmcmFtZVxuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWZyYW1lIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaWZyYW1lJywgdGhpcyk7XG4gIH1cbn0iLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBpbWFnZXMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBpbWdcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaW1nJywgdGhpcyk7XG4gIH1cbn0iLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBlbWJlZCBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIGVtYmVkXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWJlZCBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2VtYmVkJywgdGhpcyk7XG4gIH1cbn0iLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBhdWRpbyBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIGF1ZGlvXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpbyBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2F1ZGlvJywgdGhpcyk7XG4gIH1cbn0iLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciB2aWRlbyBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIHZpZGVvXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlbyBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3ZpZGVvJywgdGhpcyk7XG4gIH1cbn0iLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciB0cmFjayBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIHRyYWNrXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFjayBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RyYWNrJywgdGhpcyk7XG4gIH1cbn0iLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBzb3VyY2UgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBzb3VyY2VcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdXJjZSBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3NvdXJjZScsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3Igb2JqZWN0IGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgb2JqZWN0XG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3RzIGV4dGVuZHMgVXJsIHsgIFxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnVybEF0dHJpYnV0ZSA9ICdkYXRhJztcbiAgfVxuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdvYmplY3QnLCB0aGlzKTtcbiAgfVxufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi4vc2VydmljZXMvcm91dGVyLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBsaW5rcy5cbiAqIEl0IHdvcmtzIHdpdGggcm91dGVyIGFzIHdlbGwuIFxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19saW5rc31cbiAqIFxuICogQHRhZyBhXG4gKiBAc2VsZWN0b3IgYVtzdGF0ZV06bm90KFt1cmxdKSxhW3VybF06bm90KFtzdGF0ZV0pXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXSAtIHVybCB0byBnb1xuICogQGF0dHIge3N0cmluZ30gW3N0YXRlXSAtIHN0YXRlIHRvIGdvIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZ31cbiAqIEBhdHRyIHtvYmplY3R9IFtwYXJhbXNdIC0gcGFyYW1zIGZvciB0aGUgc3RhdGUge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3Nfc3RhdGVfcGFyYW1zfVxuICogQGF0dHIge29iamVjdH0gW3F1ZXJ5XSAtIHF1ZXJ5IGZvciB0aGUgc3RhdGUge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3Nfc3RhdGVfcXVlcnl9XG4gKiBAYXR0ciB7c3RyaW5nfSBbaGFzaF0gLSBoYXNoIGZvciB0aGUgc3RhdGUge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3Nfc3RhdGVfaGFzaH1cbiAqIEBhdHRyIHtvYmplY3R9IFtvcHRpb25zXSAtIG9wdGlvbnMgZm9yIHRoZSBzdGF0ZSB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmcjZG9jc19yb3V0ZXIubG9jYXRpb259XG4gKiBAc2NvcGUge2Jvb2xlYW59IGlzQWN0aXZlU3RhdGUgLSB0aGUgc3RhdGUgaXMgYWN0aXZlIG9yIG5vdCBcbiAqIEBzY29wZSB7Ym9vbGVhbn0gaW5BY3RpdmVTdGF0ZSAtIHRoZSBzdGF0ZSBpcyBwYXJ0IG9mIHRoZSBhY3RpdmUgc3RhdGUgb3Igbm90XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbc3RhdGVdOm5vdChbdXJsXSksW3VybF06bm90KFtzdGF0ZV0pJztcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gdHJ1ZTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnYScsIHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IG51bGw7XG4gICAgdGhpcy5wYXJhbXMgPSB7fTtcbiAgICB0aGlzLnF1ZXJ5ID0ge307XG4gICAgdGhpcy5vcHRpb25zID0ge307XG4gICAgdGhpcy5pc1VybCA9IHRoaXMuZWwuaGFzQXR0cmlidXRlKCd1cmwnKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAodGhpcy5pc1VybCkge1xuICAgICAgICByb3V0ZXIubG9jYXRpb24odGhpcy5hdHRycy51cmwsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcm91dGVyLnN0YXRlKHRoaXMuc3RhdGUubmFtZSwgdGhpcy5wYXJhbXMsIHRoaXMucXVlcnksIHRoaXMuaGFzaCwgIHRoaXMub3B0aW9ucyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2VkID0gKCkgPT4gdGhpcy5zdGF0ZSAmJiB0aGlzLnNldEFjdGl2aXR5KCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3N0YXRlLWNoYW5nZWQnLCB0aGlzLm9uU3RhdGVDaGFuZ2VkKTtcblxuICAgIHRoaXMuYXR0cignc3RhdGUnLCB0aGlzLnNldFN0YXRlKTtcbiAgICB0aGlzLmF0dHIoJ3BhcmFtcycsIHRoaXMuc2V0UGFyYW1zKTtcbiAgICB0aGlzLmF0dHIoJ3F1ZXJ5JywgdGhpcy5zZXRRdWVyeSk7XG4gICAgdGhpcy5hdHRyKCdoYXNoJywgdGhpcy5zZXRIYXNoKTtcbiAgICB0aGlzLmF0dHIoJ29wdGlvbnMnLCB0aGlzLnNldE9wdGlvbnMpO1xuICAgIHRoaXMuYXR0cigndXJsJywgdGhpcy5zZXRVcmwpO1xuICAgIHRoaXMuYXR0cignc3RhdGUnLCB0aGlzLnJlc2V0SHJlZiwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5hdHRyKCdwYXJhbXMnLCB0aGlzLnJlc2V0SHJlZiwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5hdHRyKCdxdWVyeScsIHRoaXMucmVzZXRIcmVmLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTtcbiAgICB0aGlzLmF0dHIoJ2hhc2gnLCB0aGlzLnJlc2V0SHJlZiwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5hdHRyKCd1cmwnLCB0aGlzLnJlc2V0SHJlZiwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5yZXNldEhyZWYoKTtcbiAgfVxuXG4gIHJlbW92ZWQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N0YXRlLWNoYW5nZWQnLCB0aGlzLm9uU3RhdGVDaGFuZ2VkKTtcbiAgfVxuXG4gIHNldFVybCh1cmwpIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgfVxuXG4gIHNldFN0YXRlKG5hbWUpIHtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5nZXRTdGF0ZShuYW1lKTtcbiAgICB0aGlzLnNldEFjdGl2aXR5KCk7XG4gIH1cblxuICBzZXRBY3Rpdml0eSgpIHtcbiAgICB0aGlzLnNjb3BlLmlzQWN0aXZlU3RhdGUgPSByb3V0ZXIuaXNBY3RpdmVTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgICB0aGlzLnNjb3BlLmluQWN0aXZlU3RhdGUgPSByb3V0ZXIuaW5BY3RpdmVTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHNldFBhcmFtcyhwYXJhbXMpIHtcbiAgICBpZiAodHlwZW9mIHBhcmFtcyAhPSAnb2JqZWN0JyB8fCAhcGFyYW1zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBwYXJhbXMgbXVzdCBiZSBhbiBvYmplY3RgKTtcbiAgICB9XG5cbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgfVxuXG4gIHNldFF1ZXJ5KHF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeSAhPSAnb2JqZWN0JyB8fCAhcXVlcnkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIHF1ZXJ5IG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICB9XG5cbiAgc2V0SGFzaChoYXNoKSB7XG4gICAgaWYgKHR5cGVvZiBoYXNoICE9ICdzdHJpbmcnICYmIGhhc2ggIT09IHVuZGVmaW5lZCAmJiBoYXNoICE9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBoYXNoIG11c3QgYmUgYSBzdHJpbmd8bnVsbGApO1xuICAgIH1cblxuICAgIHRoaXMuaGFzaCA9IGhhc2g7XG4gIH1cblxuICBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgIT0gJ29iamVjdCcgfHwgIW9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIG9wdGlvbnMgbXVzdCBiZSBhbiBvYmplY3RgKTtcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgZ2V0U3RhdGUobmFtZSkge1xuICAgIGxldCBzdGF0ZSA9IHJvdXRlci5nZXRTdGF0ZShuYW1lKTtcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIHJvdXRlciBzdGF0ZSB3aXRoIG5hbWUgXCIke25hbWV9XCJgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICByZXNldEhyZWYoKSB7XG4gICAgaWYgKHRoaXMudXJsKSB7XG4gICAgICB0aGlzLmF0dHJzLmhyZWYgPSB0aGlzLnVybDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmF0dHJzLmhyZWYgPSByb3V0ZXIuY3JlYXRlU3RhdGVVcmwodGhpcy5zdGF0ZSwgdGhpcy5wYXJhbXMsIHRoaXMucXVlcnksIHRoaXMuaGFzaCwgdGhpcy5vcHRpb25zKTtcbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9