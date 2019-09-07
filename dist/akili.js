/*!
 * Akili is a javascript framework
 * 
 * const Akili = makeItEasy(js + html);
 * 
 * @version 1.0.12
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

Akili.__defaults = [];

/**
 * Set the default things
 */
Akili.setDefaults = function () {
  var _this = this;

  this.options = {
    debug: true
  };

  this.__init = null;
  this.__cleared = false;
  this.__components = {};
  this.__aliases = {};
  this.__scopes = {};
  this.__storeLinks = {};
  this.__window = {};
  this.__tags = {};
  this.__isolation = null;
  this.__evaluation = null;
  this.__wrapping = false;
  this.__onError = function () {
    return _this.triggerInit(false);
  };

  this.htmlBooleanAttributes = ['disabled', 'contenteditable', 'hidden'];

  for (var key in _globals2.default) {
    delete _globals2.default[key];
  }

  _globals2.default.__target.utils = this.wrap(_utils2.default);
  this.components = {};
  this.services = {};
  this.Component = _component3.default;
  this.EventEmitter = _eventEmitter2.default;
  this.Scope = _scope2.default;
  this.utils = _utils2.default;
  this.globals = _globals2.default;
  this.components.A = _a2.default;
  this.components.Audio = _audio2.default;
  this.components.Content = _content2.default;
  this.components.For = _for2.default;
  this.components.Embed = _embed2.default;
  this.components.If = _if2.default;
  this.components.Include = _include2.default;
  this.components.Input = _input2.default;
  this.components.Iframe = _iframe2.default;
  this.components.Image = _image2.default;
  this.components.Object = _object2.default;
  this.components.Radio = _radio2.default;
  this.components.Route = _route2.default;
  this.components.Select = _select2.default;
  this.components.Source = _source2.default;
  this.components.Text = _text2.default;
  this.components.Textarea = _textarea2.default;
  this.components.Track = _track2.default;
  this.components.Url = _url2.default;
  this.components.Video = _video2.default;
  this.services.request = _request2.default;
  this.services.router = _router2.default;
  this.services.store = _store2.default;

  this.define();
  this.handleErrors();
  this.isolateEvents();
  this.isolateArrayPrototype();
  this.isolateWindowFunctions();

  for (var i = 0, l = this.__defaults.length; i < l; i++) {
    this.__defaults[i]();
  }
};

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
 * Set the defaults
 * 
 * @param {function} fn 
 */
Akili.defaults = function (fn) {
  this.__defaults.push(fn);
  fn();
};

/**
 * Clear the global context
 */
Akili.clearGlobals = function () {
  if (this.__cleared) {
    return;
  }

  for (var key in this.__window.Element.prototype) {
    Element.prototype[key] = this.__window.Element.prototype[key];
  }

  for (var _key in this.__window.Array.prototype) {
    Array.prototype[_key] = this.__window.Array.prototype[_key];
  }

  for (var _key2 in this.options.globals) {
    this.options.globals[_key2] = this.unwrap(this.options.globals[_key2]);
  }

  window.setTimeout = this.__window.setTimeout;
  window.setInterval = this.__window.setInterval;
  window.Promise = this.__window.Promise;
  window.removeEventListener('error', this.__onError);
  this.__cleared = true;
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
  var scope = this.__scopes[name];
  scope.__el = null;
  scope.__component = null;
  scope.__parent = null;
  this.__scopes[name] = null;
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
  var _this2 = this;

  return _utils2.default.createRandomString(16, function (str) {
    return !!_this2.__scopes[str];
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
  var _this3 = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { recompile: false };

  var elements = [];

  if (window.AKILI_SSR) {
    var arr = root.querySelectorAll('[no-ssr]');

    for (var i = 0, l = arr.length; i < l; i++) {
      arr[i].remove();
    }
  }

  var nestedInitializing = function nestedInitializing(el) {
    var component = _this3.initialize(el, options);
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
  var _this4 = this;

  this.__window.Array = { prototype: {} };
  var keys = Object.getOwnPropertyNames(Array.prototype);

  var _loop = function _loop(i, l) {
    var key = keys[i];
    var old = Array.prototype[key];

    if (typeof old != 'function' || key == 'constructor') {
      return 'continue';
    }

    _this4.__window.Array.prototype[key] = old;

    Array.prototype[key] = function () {
      var _this5 = this,
          _arguments = arguments;

      return Akili.unevaluate(function () {
        if (!_this5.__isProxy) {
          return old.apply(_this5, _arguments);
        }

        return Akili.isolate(function () {
          return old.apply(_this5, _arguments);
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
 * Isolate the event listeners
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
    var args = [].slice.call(arguments);

    if (!this.__akiliListeners) {
      this.__akiliListeners = {};
    }

    if (!this.__akiliListeners[name]) {
      this.__akiliListeners[name] = [];
    }

    if (typeof fn === 'function') {
      args[1] = function () {
        var _this6 = this,
            _arguments2 = arguments;

        return Akili.isolate(function () {
          return fn.apply(_this6, _arguments2);
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
    var _this7 = this,
        _arguments4 = arguments;

    if (options.tag && Akili.__evaluation) {
      Akili.addTag(options.tag, Akili.__evaluation.node);
    }

    return Akili.wrapping(function () {
      return fn.apply(_this7, _arguments4);
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

  for (var _key3 in this.__tags[node.__name]) {
    if (_key3 == tag) {
      delete this.__tags[node.__name][_key3];
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
  var _this8 = this;

  root = root || document.body;

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
    window.AKILI_CLIENT && (window.AKILI_CLIENT.requestCache = _this8.prepareServerSideRequestCache());
    _this8.triggerInit(true);
  }).catch(function (err) {
    _this8.triggerInit(false);
    throw err;
  });
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

/**
 * Deinitialize the application
 */
Akili.deinit = function () {
  this.clearGlobals();
  _router2.default.deinit();
  _request2.default.deinit();
  var storeKeys = Object.keys(_store2.default.__target);

  for (var i = 0, l = storeKeys.length; i < l; i++) {
    delete _store2.default.__target[storeKeys[i]];
  }

  this.setDefaults();
};

exports.default = Akili;

window.Akili = Akili;
Akili.setDefaults();

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

      var control = this.__controlAttributes || !this.__evaluateParent;
      var p = Promise.resolve();
      this.__attributeOf = control ? this : this.__evaluateParent.__akili;

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
      var evaluateParent = null;

      for (var i = 0, l = parents.length; i < l; i++) {
        var parent = parents[i];

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
      _akili2.default.removeScope(this.__scope.__name);
      this.el.remove();

      if (!options.saveBindings) {
        this.__unbindByNodes(nodes);
        this.__unbindParentsByNodes(nodes);
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

/**
 * Set the default variables
 */
request.setDefaults = function () {
  this.__instances = {};
  this.__cache = {};
};

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

/**
 * Deinitialize the service
 */
request.deinit = function () {
  this.setDefaults();
};

Object.defineProperty(request, 'use', {
  get: function get() {
    return request.__instances;
  }
});

request.Request = Request;
exports.default = request;

request.setDefaults();

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
      this.iterators = null;
      this.iteratorEl = null;
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
            checkChanges: true,
            setBooleanAttributes: false
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
      this.for = null;
      delete this.value;
      delete this.key;
      delete this.index;
      delete this.hash;
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

/**
 * Set the default values
 */
router.setDefaults = function () {
  this.baseUrl = "/";
  this.states = [];
  this.hashMode = true;
  this.__redirects = 0;
  this.__init = false;
  this.__paramRegex = /(\/?:([\w\d-]+))/g;
  this.__routeSelector = function (c) {
    return c instanceof _route2.default;
  };
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

  for (var i = 0; i < 999; i++) {
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
  var list = [params];
  var states = state.name.split('.');

  for (var i = 0, l = states.length; i < l; i++) {
    var current = states.slice(0, states.length - i).join('.');
    list.push(this.getState(current).params);
  }

  return this.createStateArgs(list, args);
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
  var list = [query];
  var states = state.name.split('.');

  for (var i = 0, l = states.length; i < l; i++) {
    var current = states.slice(0, states.length - i).join('.');
    list.push(this.getState(current).query);
  }

  return this.createStateArgs(list, args);
};

/**
 * Create the state arguments
 * 
 * @param {object[]} list
 * @param {object} [args]
 */
router.createStateArgs = function (list) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { params: {}, query: {} };

  var all = {};
  var excluded = {};

  for (var i = 0, l = list.length; i < l; i++) {
    var obj = list[i];
    var keys = Object.keys(obj);

    for (var k = 0, c = keys.length; k < c; k++) {
      var key = keys[k];
      var val = obj[key];

      if (excluded[key]) {
        continue;
      }

      val = typeof val == 'function' ? val(args) : val;

      if (val === undefined) {
        continue;
      }

      if (val === null) {
        delete all[key];
        excluded[key] = true;
        continue;
      }

      all[key] = val;
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
  var states = state.name.split('.');

  for (var i = 0, l = states.length; i < l; i++) {
    var current = states.slice(0, states.length - i).join('.');
    var val = this.getState(current).hash;
    val = typeof val == 'function' ? val(args) : val;

    if (val === undefined) {
      continue;
    }

    if (val === null) {
      return null;
    }

    hash = val;
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
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
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
  router.setDefaults();
};

router.Transition = Transition;
exports.default = router;

router.setDefaults();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ba2lsaS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQWtpbGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvYWtpbGkuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy91cmwuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50LmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL3NlcnZpY2VzL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvZm9yLmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL3Njb3BlLmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvc2VydmljZXMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL3JvdXRlLmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL3NlcnZpY2VzL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL2lmLmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0LmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy9yYWRpby5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL3RleHRhcmVhLmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvY29udGVudC5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL2luY2x1ZGUuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy9pZnJhbWUuanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy9pbWFnZS5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL2VtYmVkLmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvYXVkaW8uanMiLCJ3ZWJwYWNrOi8vQWtpbGkvLi9zcmMvY29tcG9uZW50cy92aWRlby5qcyIsIndlYnBhY2s6Ly9Ba2lsaS8uL3NyYy9jb21wb25lbnRzL3RyYWNrLmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvc291cmNlLmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvb2JqZWN0LmpzIiwid2VicGFjazovL0FraWxpLy4vc3JjL2NvbXBvbmVudHMvYS5qcyJdLCJuYW1lcyI6WyJBa2lsaSIsIl9fZGVmYXVsdHMiLCJzZXREZWZhdWx0cyIsIm9wdGlvbnMiLCJkZWJ1ZyIsIl9faW5pdCIsIl9fY2xlYXJlZCIsIl9fY29tcG9uZW50cyIsIl9fYWxpYXNlcyIsIl9fc2NvcGVzIiwiX19zdG9yZUxpbmtzIiwiX193aW5kb3ciLCJfX3RhZ3MiLCJfX2lzb2xhdGlvbiIsIl9fZXZhbHVhdGlvbiIsIl9fd3JhcHBpbmciLCJfX29uRXJyb3IiLCJ0cmlnZ2VySW5pdCIsImh0bWxCb29sZWFuQXR0cmlidXRlcyIsImtleSIsImdsb2JhbHMiLCJfX3RhcmdldCIsInV0aWxzIiwid3JhcCIsImNvbXBvbmVudHMiLCJzZXJ2aWNlcyIsIkNvbXBvbmVudCIsIkV2ZW50RW1pdHRlciIsIlNjb3BlIiwiQSIsIkF1ZGlvIiwiQ29udGVudCIsIkZvciIsIkVtYmVkIiwiSWYiLCJJbmNsdWRlIiwiSW5wdXQiLCJJZnJhbWUiLCJJbWFnZSIsIk9iamVjdCIsIk9iamVjdHMiLCJSYWRpbyIsIlJvdXRlIiwiU2VsZWN0IiwiU291cmNlIiwiVGV4dCIsIlRleHRhcmVhIiwiVHJhY2siLCJVcmwiLCJWaWRlbyIsInJlcXVlc3QiLCJyb3V0ZXIiLCJzdG9yZSIsImRlZmluZSIsImhhbmRsZUVycm9ycyIsImlzb2xhdGVFdmVudHMiLCJpc29sYXRlQXJyYXlQcm90b3R5cGUiLCJpc29sYXRlV2luZG93RnVuY3Rpb25zIiwiaSIsImwiLCJsZW5ndGgiLCJkZWZhdWx0cyIsImZuIiwicHVzaCIsImNsZWFyR2xvYmFscyIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJBcnJheSIsInVud3JhcCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJzZXRJbnRlcnZhbCIsIlByb21pc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiam9pbkJpbmRpbmdLZXlzIiwia2V5cyIsIm1hcCIsImVsIiwidG9TdHJpbmciLCJqb2luIiwiYWRkU2NvcGUiLCJzY29wZSIsIl9fbmFtZSIsIkVycm9yIiwiZ2V0U2NvcGUiLCJuYW1lIiwicmVtb3ZlU2NvcGUiLCJfX2VsIiwiX19jb21wb25lbnQiLCJfX3BhcmVudCIsImdldEFraWxpUGFyZW50cyIsInRyZWUiLCJhcnIiLCJjaGVjayIsIm5vZGUiLCJwYXJlbnROb2RlIiwiX19ha2lsaSIsInNldFRlbXBsYXRlIiwidGVtcGxhdGUiLCJyZXBsYWNlIiwiaW5uZXJIVE1MIiwiY3JlYXRlU2NvcGVOYW1lIiwiY3JlYXRlUmFuZG9tU3RyaW5nIiwic3RyIiwiaXNvbGF0ZSIsInJlcyIsInByb3BzIiwiayIsInByb3AiLCJ2YWwiLCJnZXRQcm9wZXJ0eUJ5S2V5cyIsImNvbXBvbmVudCIsIl9fc2NvcGUiLCJfX2lzUmVzb2x2ZWQiLCJfX3RyaWdnZXJTdG9yZUFuZEF0dHIiLCJfX2V2YWx1YXRlQnlLZXlzIiwiaXNEZWxldGVkIiwidW5ldmFsdWF0ZSIsImV2YWx1YXRpb24iLCJ3cmFwcGluZyIsInVuaXNvbGF0ZSIsImlzb2xhdGlvbiIsIm5leHRUaWNrIiwicmVzb2x2ZSIsInRoZW4iLCJpbml0aWFsaXplIiwicmVjb21waWxlIiwiX19yZWNvbXBpbGUiLCJpc1Jvb3QiLCJfX3Jvb3QiLCJjb21wb25lbnROYW1lIiwidG9EYXNoQ2FzZSIsImdldEF0dHJpYnV0ZSIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsIl9Db21wb25lbnQiLCJDSEVDS19BTElBU0VTIiwic2VsZWN0b3JzIiwic2VsZWN0b3JBbGwiLCJtYXRjaGVzIiwic2VsZWN0b3IiLCJfX2NhbmNlbGxlZCIsImZpbmQiLCJwIiwiX19wcmV2ZW50IiwiX19jcmVhdGUiLCJjb21waWxlIiwicm9vdCIsImVsZW1lbnRzIiwiQUtJTElfU1NSIiwicXVlcnlTZWxlY3RvckFsbCIsInJlbW92ZSIsIm5lc3RlZEluaXRpYWxpemluZyIsImNoaWxkcmVuIiwiY2hpbGQiLCJfX2NvbXBpbGUiLCJhbGwiLCJyIiwiX19yZXNvbHZlIiwiY29uc29sZSIsIndhcm4iLCJyZW1vdmVDb21wb25lbnQiLCJhbGlhcyIsInJlbW92ZUFsaWFzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsIm9sZCIsIl9faXNQcm94eSIsImFwcGx5IiwiYXJndW1lbnRzIiwiY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24iLCJjb25zdHJ1Y3RvciIsImNhdGNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9fYWtpbGlMaXN0ZW5lcnMiLCJhcmdzIiwic2xpY2UiLCJjYWxsIiwibGluayIsImxpc3RlbmVyIiwic3BsaWNlIiwicG9zIiwiaXNBcnJheSIsIm51bSIsImluZGV4IiwiY2FsbGJhY2siLCJfX2lzb2xhdGVkIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwidmFsdWUiLCJvYmoiLCJjdXJyZW50Iiwid3JhcEZ1bmN0aW9uIiwiYyIsImRlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsInJldmVyc2UiLCJha2lsaVdyYXBwZWRGdW5jdGlvbiIsInRhZyIsImFkZFRhZyIsImhhc1RhZyIsInJlbW92ZVRhZyIsInVuZGVmaW5lZCIsInRyaWdnZXJUYWciLCJfX2V2YWx1YXRlTm9kZSIsInN0YXR1cyIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImluaXQiLCJkb2N1bWVudCIsImJvZHkiLCJkb2N1bWVudEVsZW1lbnQiLCJBS0lMSV9TRVJWRVIiLCJpbml0U2VydmVyU2lkZUh0bWwiLCJodG1sIiwiaW5pdFNlcnZlclNpZGVSZXF1ZXN0Q2FjaGUiLCJyZXF1ZXN0Q2FjaGUiLCJBS0lMSV9DTElFTlQiLCJwcmVwYXJlU2VydmVyU2lkZUh0bWwiLCJjaGFuZ2VTdGF0ZSIsInByZXBhcmVTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlIiwiZXJyIiwiYXR0cmlidXRlcyIsInJlbW92ZUF0dHJpYnV0ZSIsInBhcnNlciIsIkRPTVBhcnNlciIsImRvYyIsInBhcnNlRnJvbVN0cmluZyIsInF1ZXJ5U2VsZWN0b3IiLCJhdHRyIiwic2V0QXR0cmlidXRlIiwiaW5zdGFuY2UiLCJfX2NhY2hlIiwiX19pbnN0YW5jZXMiLCJvdXRlckhUTUwiLCJjYWNoZSIsIl9fbWFpbiIsImRlaW5pdCIsInN0b3JlS2V5cyIsImNsYXNzIiwiY2xhc3NlcyIsInN0eWxlIiwic3R5bGVzIiwic3BsaXQiLCJkZWwiLCJleGNsdWRlIiwiZXhwcyIsImxhc3QiLCJSZWdFeHAiLCJpbmRleE9mIiwib3BlbiIsImZpbHRlciIsImhhbmRsZXIiLCJtYXRjaCIsIml0ZW0iLCJmaWx0ZXJlZCIsInNvcnQiLCJvcmRlciIsImEiLCJiIiwiRGF0ZSIsImdldFRpbWUiLCJuZXh0IiwiYVYiLCJiViIsImluY2x1ZGVLZXlzIiwibmV3T2JqIiwib2JqS2V5cyIsImV4Y2x1ZGVLZXlzIiwiaXNTY29wZVByb3h5IiwiaXNQbGFpbk9iamVjdCIsImNvcHkiLCJuZXN0ZWQiLCJwbGFpbiIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwibWFrZUF0dHJpYnV0ZVZhbHVlIiwiY29tcGFyZSIsImlnbm9yZVVuZGVmaW5lZCIsImNsZWFyVW5kZWZpbmVkIiwiYUtleXMiLCJiS2V5cyIsImNyZWF0ZUhhc2giLCJzb3VyY2UiLCJKU09OIiwic3RyaW5naWZ5IiwiU3RyaW5nIiwiaGFzaCIsImNoYXIiLCJjaGFyQ29kZUF0IiwiZW5jb2RlSHRtbEVudGl0aWVzIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiZGVjb2RlSHRtbEVudGl0aWVzIiwidG9DYW1lbENhc2UiLCJtIiwidG9VcHBlckNhc2UiLCJjYXBpdGFsaXplIiwib2JqZWN0IiwicmVkdWNlIiwibyIsImhhc1Byb3BlcnR5QnlLZXlzIiwiaGFzIiwiaGFzT3duUHJvcGVydHkiLCJzZXRQcm9wZXJ0eUJ5S2V5cyIsImRlbGV0ZVByb3BlcnR5QnlLZXlzIiwiZ2V0RW51bWVyYWJsZVByb3BlcnR5VGFyZ2V0IiwidGFyZ2V0IiwicHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsImdldE93blByb3BlcnR5VGFyZ2V0IiwiTWF0aCIsInJhbmRvbSIsInN1YnN0cmluZyIsIm5vdyIsImRlYm91bmNlIiwiZGVsYXkiLCJjbGVhclRpbWVvdXQiLCJfX2RlYm91bmNlVGltZW91dCIsInVybEF0dHJpYnV0ZSIsInNldFVybCIsInVybCIsImF0dHJzIiwiZXZhbHVhdGlvblJlZ2V4IiwiZXZhbHVhdGlvblJlZ2V4R2xvYmFsIiwic3lzdGVtQXR0cmlidXRlcyIsImNvbnRleHQiLCJleHByZXNzaW9uIiwidmFyaWFibGVzIiwidmFycyIsIkZ1bmN0aW9uIiwiX19pc01vdW50ZWQiLCJfX2lzQ29tcGlsZWQiLCJfX2JpbmRpbmdzIiwiX19ldmFsdWF0aW5nRXZlbnQiLCJfX3JlY29tcGlsaW5nIiwiX19jb21waWxpbmciLCJfX2Rpc2FibGVQcm94eSIsIl9fZGlzYWJsZVN0b3JlS2V5cyIsIl9fZGlzYWJsZUF0dHJLZXlzIiwiX19jaGlsZHJlbiIsIl9fcGFyZW50cyIsIl9fY29udGVudCIsIl9fYXR0cnMiLCJfX2F0dHJMaW5rcyIsIl9fYXR0cmlidXRlT2YiLCJfX2V2YWx1YXRpb25Db21wb25lbnQiLCJjaGVja0NoYW5nZXMiLCJzZXRFdmVudHMiLCJzZXRQYXJlbnRzIiwic2V0Qm9vbGVhbkF0dHJpYnV0ZXMiLCJkZWZpbmVBdHRyaWJ1dGVzIiwiX19jcmVhdGVDb21waWxhdGlvbk9wdGlvbnMiLCJfX2NyZWF0ZVJlY29tcGlsYXRpb25PcHRpb25zIiwiX19zZXRFdmVudHMiLCJfX3NldFBhcmVudHMiLCJfX3NldEJvb2xlYW5BdHRyaWJ1dGVzIiwiX19kZWZpbmVBdHRyaWJ1dGVzIiwiX19pbml0aWFsaXplIiwiY3JlYXRlZCIsImNvbnRyb2wiLCJfX2NvbnRyb2xBdHRyaWJ1dGVzIiwiX19ldmFsdWF0ZVBhcmVudCIsIm5ld1BhcmVudCIsIl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzIiwiaW50ZXJwb2xhdGUiLCJwYXJlbnQiLCJub2RlVHlwZSIsIl9faW5pdGlhbGl6ZU5vZGUiLCJjaGlsZE5vZGVzIiwib25Db21waWxlZCIsInRyaWdnZXIiLCJidWJibGVzIiwiY29tcGlsZWQiLCJ0ZW1wbGF0ZVVybCIsImdldCIsInRlbXBsYXRlQ2FjaGUiLCJkYXRhIiwib25SZWNvbXBpbGVkIiwicmVjb21waWxlZCIsIm9uUmVzb2x2ZWQiLCJyZXNvbHZlZCIsIl9zY29wZSIsImFzc2lnbiIsImNvbnRyb2xBdHRyaWJ1dGVzIiwiZXZlbnRzIiwiX19ldmVudHMiLCJfX25lc3RlZE9ic2VydmUiLCJib29sZWFuQXR0cmlidXRlcyIsImNvbmNhdCIsInNldEF0dHIiLCJub2RlTmFtZSIsImhhc0F0dHJpYnV0ZSIsImV2IiwidGVzdCIsInBhcmVudHMiLCJldmFsdWF0ZVBhcmVudCIsInRyYW5zcGFyZW50IiwiX19kZXRhY2giLCJfX2FkZENoaWxkIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3BlcnRpZXMiLCJfX2NvbXBhcmVOb2RlUHJvcGVydHlWYWx1ZSIsIl9fZ2V0Tm9kZVByb3BlcnR5IiwiYXR0ck5hbWUiLCJlbGVtZW50TmFtZSIsIl9fZWxlbWVudCIsImF0dHJpYnV0ZU5hbWUiLCJBdHRyIiwibWVzc2FnZXMiLCJtZXNzYWdlIiwiX19leHByZXNzaW9uIiwidHJpbSIsImNvdW50ZXIiLCJhdHRyaWJ1dGVWYWx1ZSIsImV2YWxDb21wb25lbnQiLCJjb20iLCJkIiwiZXZhbHVhdGUiLCJleGlzdGluZ0JpbmRpbmdzIiwicGFyZW50QmluZGluZ3MiLCJwYXJzZVZhbHVlIiwiX19nZXRQYXJzZWRFeHByZXNzaW9uIiwibGlzdCIsInBhcnNlIiwiX19jcmVhdGVFeGNlcHRpb25NZXNzYWdlIiwiX19jcmVhdGVLZXlzSGFzaCIsInBhcmVudHNIYXNoIiwibm90QmluZGluZyIsInBhcmVudFZhbHVlIiwicmVhbENvbXBvbmVudCIsIl9fYmluZEFuZFNldFByb3BlcnR5IiwiZXZhbHVhdGVkIiwiZSIsImJpbmQiLCJfX2dldEJvdW5kTm9kZSIsIl9fYmluZCIsIl9fc2V0Tm9kZVByb3BlcnR5Iiwid2l0aG91dFBhcmVudHMiLCJsYXN0UHJvcHMiLCJwcm9wc0xlbmd0aCIsImVsRXZhbHVhdGUiLCJlbGVtZW50IiwiX19nZXRCaW5kIiwiX19kYXRhIiwiX19nZXRBbGxCaW5kcyIsIl9faW5pdGlhbGl6ZWQiLCJfX2NoZWNrTm9kZVByb3BlcnR5Q2hhbmdlIiwiX19kaXNhYmxlS2V5cyIsImNoZWNrUHJvcCIsIl9fc2V0IiwiX2siLCJfcHJvcCIsIl9fZW5hYmxlS2V5cyIsInVuYmluZCIsIl9faXNTeXN0ZW1CaW5kaW5nS2V5IiwiX2tleXMiLCJfX2tleXMiLCJfaXNEZWxldGVkIiwiaGFzS2V5Iiwic2hpZnQiLCJfX2V2YWx1YXRlTmVzdGVkIiwiX191bmJpbmQiLCJleGVjIiwiZXZlbnQiLCJfX2NoZWNrRXZhbHVhdGlvbiIsIl9fZXZhbHVhdGUiLCJpc0Jvb2xlYW5BdHRyaWJ1dGUiLCJjbGVhckF0dHJpYnV0ZSIsImNhbWVsQXR0cmlidXRlIiwiX19hdHRyaWJ1dGVPbiIsIl9fcHJlcGFyZUF0dHJpYnV0ZUluIiwiX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyIiwiX19hdHRyVHJpZ2dlckJ5TmFtZSIsImF0dHJpYnV0ZU9mIiwiZXZlbnROYW1lIiwiX19pc0V2ZW50IiwiX19ldmVudCIsImVtaXR0ZXIiLCJfX2hhc0JpbmRpbmdzIiwiX19ldmFsdWF0ZUV2ZW50IiwiaXNBdHRyIiwiaGFzQmluZGluZ3MiLCJpc0Jvb2xlYW4iLCJpc0V2ZW50IiwiX19pc0Jvb2xlYW4iLCJzYXZlQmluZGluZ3MiLCJfX3VuYmluZEJ5Tm9kZXMiLCJfX3VuYmluZFBhcmVudHNCeU5vZGVzIiwiX19pbml0aWFsaXplQXR0cmlidXRlIiwiY2hhbmdlQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlTm9kZSIsIl9fZGVpbml0aWFsaXplTm9kZSIsIlByb3h5Iiwic2V0IiwiYXR0cktleSIsImRlbGV0ZVByb3BlcnR5IiwiX19pc1N5c3RlbUtleSIsImV4Y0FyciIsInJlYWxUYXJnZXQiLCJmb3JQYXJlbnRzIiwiZm9yRGF0YSIsInBvcCIsIl9fYmluZE5vZGUiLCJfX2NoZWNrRGlzYWJsZW1lbnQiLCJDSEVDS19FWElTVEVOQ0UiLCJ0YXJnZXRQYXJlbnRWYWx1ZSIsIl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0IiwiY3VycmVudEtleXMiLCJjdXJyZW50S2V5U3RyaW5nIiwiX19zdG9yZVRyaWdnZXJCeUtleXMiLCJfX2F0dHJUcmlnZ2VyQnlLZXlzIiwidHlwZSIsInByb3h5IiwiX19nZXREaXNhYmxlbWVudFR5cGVTdG9yZSIsIl9fYWxsIiwibGlua3MiLCJfX3N0b3JlVHJpZ2dlckJ5TmFtZSIsImtleVN0cmluZyIsImluZm8iLCJkYXRlIiwiY2FsbE9uU3RhcnQiLCJhdHRyc0tleXMiLCJzdGFydEtleXMiLCJvYnNlcnZlIiwiQ0hFQ0tfUFJPWFkiLCJfX2Rpc2FibGVQcm94eVJlZGVmaW5pbmciLCJ0YXJnZXRLZXlzIiwiX19vYnNlcnZlIiwiaXNvbGF0aW9uSGFzaCIsInVwZGF0ZWRBdCIsInBhcmVudEtleXNTdHJpbmciLCJrZXlzU3RyaW5nIiwiY29sbGVjdCIsInJvb3RBdHRycyIsIm5vZGVzIiwiX19tYXBOb2RlcyIsIl9fZGVsZXRlTm9kZVByb3BlcnR5IiwiTm9kZSIsImoiLCJfX3JlbW92ZSIsIm9uUmVtb3ZlZCIsInJlbW92ZWQiLCJkZWluaXRpYWxpemVOb2RlcyIsIl9fZW1wdHkiLCJfX2NsZWFyU3RvcmVMaW5rcyIsIl9fc3BsaWNlQ2hpbGQiLCJfX3JlbW92ZUNoaWxkcmVuIiwiZmluZEFsbCIsImxldmVscyIsImxldmVsIiwicmlnaHQiLCJsZXZlbEVsZW1lbnRzIiwidW5zaGlmdCIsIl9fc3RvcmVCeUZ1bmN0aW9uIiwiX19zdG9yZUJ5S2V5cyIsIl9fYXR0ckJ5RnVuY3Rpb24iLCJfX2F0dHJCeUtleXMiLCJfX3Vuc3RvcmVCeUZ1bmN0aW9uIiwiX191bnN0b3JlQnlLZXlzIiwiX191bmF0dHJCeUZ1bmN0aW9uIiwiX191bmF0dHJCeUtleXMiLCJfX2dldFBhcmVudCIsIl9fZ2V0Q2hpbGRyZW4iLCJfX2dldE5lYXIiLCJhcHBlbmRDaGlsZCIsIlJlcXVlc3QiLCJiYXNlVXJsIiwiZ2V0SGVhZGVycyIsInhociIsImhlYWRlcnMiLCJnZXRBbGxSZXNwb25zZUhlYWRlcnMiLCJsaW5lIiwic3RhdHVzRXJyb3JQYXR0ZXJuIiwicmVqZWN0IiwibWV0aG9kIiwiWE1MSHR0cFJlcXVlc3QiLCJiZWZvcmUiLCJ0cmFuc2Zvcm1CZWZvcmUiLCJvblN0YXJ0IiwianNvbiIsInJlc3BvbnNlVHlwZSIsImZvcm0iLCJjcmVhdGVGb3JtRGF0YSIsInBhcmFtcyIsInBhcmFtc1RvUXVlcnkiLCJjcmVhdGVDYWNoZUhhc2giLCJ1c2VyIiwicGFzc3dvcmQiLCJfY2FjaGUiLCJnZXRDYWNoZSIsImNyZWF0ZWRBdCIsInRyYW5zZm9ybUFmdGVyIiwicmVzdWx0IiwidGltZW91dCIsIndpdGhDcmVkZW50aWFscyIsImhlYWRlcktleXMiLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25Qcm9ncmVzcyIsIm9ucHJvZ3Jlc3MiLCJvbmxvYWQiLCJyZXNwb25zZSIsInJlYWR5U3RhdGUiLCJzdGF0dXNUZXh0IiwicmVzcG9uc2VUZXh0IiwicmVzcG9uc2VYTUwiLCJyZXNwb25zZVVSTCIsImNyZWF0ZUNhY2hlIiwib250aW1lb3V0Iiwib25lcnJvciIsInNlbmQiLCJzZXAiLCJlcSIsImtzIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidiIsIm9wdCIsInF1ZXJ5IiwiYW1wcyIsImVxcyIsImRlY29kZVVSSUNvbXBvbmVudCIsIm5hbWVzcGFjZSIsImZkIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ0b0lTT1N0cmluZyIsImFkZEluc3RhbmNlIiwicmVtb3ZlSW5zdGFuY2UiLCJ2YWx1ZUtleSIsImRlYm91bmNlSW50ZXJ2YWwiLCJvbkRlYm91bmNlIiwic2V0Rm9jdXMiLCJzZXRWYWx1ZSIsInNldERlYm91bmNlIiwiaW50ZXJ2YWwiLCJzZXRFbGVtZW50Rm9jdXMiLCJzZXRFbGVtZW50Qmx1ciIsImZvY3VzIiwiYmx1ciIsIkxvb3AiLCJpdGVyYXRvcnMiLCJpdGVyYXRvckVsIiwicmVzZXQiLCJjcmVhdGVJdGVyYXRvciIsImRyYXciLCJtYXNrIiwiY3JlYXRlSXRlcmF0b3JFbGVtZW50IiwiY29udGVudCIsImZpcnN0Q2hpbGQiLCJfX2luZGV4IiwiX19rZXkiLCJfX3ZhbHVlIiwiX19oYXNoIiwiaXRlcmF0b3IiLCJzZXRJbmRleCIsInNldEtleSIsIl9fcHJvbWlzZXMiLCJjbG9uZU5vZGUiLCJsb29wIiwiaXRlcmF0ZSIsIm9uT3V0IiwiX19pdGVyYXRvciIsImZvciIsImlzRm9yIiwiY2FuY2VsIiwic3RyaWN0IiwiZm9yY2UiLCJfX3JlbW92ZWQiLCJpbkV2YWx1YXRpbmciLCJwcmVwYXJlT3B0aW9ucyIsIl9FdmVudCIsIl9fcHJlcGFyZUF0dHJpYnV0ZU91dCIsInRyYW5zaXRpb24iLCJsb2FkIiwic3RhdGUiLCJwYXRoIiwiZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uIiwiX190cmFuc2l0aW9uIiwiZW1wdHkiLCJleGlzdHMiLCJUcmFuc2l0aW9uIiwicHJldmlvdXMiLCJyb3V0ZXMiLCJzdGF0ZXMiLCJfX2ZpbmlzZWQiLCJyZWRpcmVjdCIsInJvdXRlIiwiaGFzU3RhdGUiLCJwYXJhbUtleXMiLCJmdWxsUGF0dGVybiIsIl9fcGFyYW1SZWdleCIsImYiLCJxdWVyeUtleXMiLCJ3YXRjaEhhc2giLCJwcmV2Um91dGUiLCJnZXRSb3V0ZSIsInByZXYiLCJmaW5pc2giLCJoYXNoTW9kZSIsIl9fcmVkaXJlY3RzIiwiX19yb3V0ZVNlbGVjdG9yIiwiYWRkIiwicGF0dGVybiIsImRlZmF1bHRPcHRpb25zIiwiYWJzdHJhY3QiLCJzZXRTdGF0ZSIsImdldFN0YXRlIiwibWFudWFsIiwicHJlcGFyZVN0YXRlQXJncyIsImNyZWF0ZVN0YXRlVXJsIiwiYmFjayIsImhpc3RvcnkiLCJnbyIsImZvcndhcmQiLCJsb2NhdGlvbiIsImRlZmF1bHRVcmwiLCJvbGRQdXNoU3RhdGUiLCJwdXNoU3RhdGUiLCJlcnJvciIsIl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIiLCJpbml0U3RhdGUiLCJwYXJlbnROYW1lIiwic3BsaXRTbGFzaGVzIiwicmVtb3ZlU3RhdGUiLCJzZXRIYXNoVXJsIiwic2V0SGlzdG9yeVVybCIsInJlcGxhY2VVcmwiLCJyZXBsYWNlSGFzaFVybCIsInJlcGxhY2VIaXN0b3J5VXJsIiwicmVwbGFjZVN0YXRlIiwiZ2V0VXJsIiwiZ2V0SGFzaFVybCIsImdldEhpc3RvcnlVcmwiLCJwYXRobmFtZSIsInNlYXJjaCIsImdldFVybFF1ZXJ5IiwiZ2V0SGFzaFVybFF1ZXJ5IiwiZ2V0SGlzdG9yeVVybFF1ZXJ5IiwicGFyYW1zRnJvbVF1ZXJ5IiwicHJlcGFyZSIsInBhcmFtc1RlbXAiLCJwcmVwYXJlU3RhdGVQYXJhbXMiLCJxdWVyeVRlbXAiLCJwcmVwYXJlU3RhdGVRdWVyeSIsImhhc2hUZW1wIiwicHJlcGFyZVN0YXRlSGFzaCIsImVtcHR5SGFzaCIsIm5ld0FyZ3MiLCJjcmVhdGVTdGF0ZUFyZ3MiLCJleGNsdWRlZCIsImdldFBhdHRlcm5Db250ZW50IiwidXJsUGF0dGVybiIsInJlZ2V4IiwiaXNJbmNsdWRlZCIsImlzQWN0aXZlU3RhdGUiLCJpbmNsdWRlcyIsIl9fZmluaXNoZWQiLCJpbkFjdGl2ZVN0YXRlIiwiZ2V0QXJyYXlQYXR0ZXJuQ29udGVudCIsImdldFN0YXRlc0J5TGV2ZWwiLCJyZWxvYWQiLCJwcmV2VHJhbnNpdGlvbiIsInNldFBhdGgiLCJyZWFsVXJsIiwiaXNEaWZmZXJlbnQiLCJpc1JvdXRlQ2hhbmdlZCIsInRpdGxlIiwibG9hZGVkIiwic2V0VHJhbnNpdGlvbiIsInNhdmVTY3JvbGxQb3NpdGlvbiIsInNjcm9sbFRvIiwiRWxzZUlmIiwiRWxzZSIsImFjdGl2ZSIsInJlY3JlYXRlIiwiaXNDb21waWxlZCIsImRpc3BsYXkiLCJnZXRDb21wdXRlZFN0eWxlIiwic2V0UmVjcmVhdGlvbiIsInNldElzIiwiY29tcGlsYXRpb24iLCJuZXh0RWxlbWVudFNpYmxpbmciLCJzZXRBY3Rpdml0eSIsInNldFByb3BlcnR5IiwiT3B0aW9uIiwiaXRlcmF0b3JUYWdOYW1lIiwiaXNNdWx0aXBsZSIsImdldENvbnRlbnQiLCJzZXRNdWx0aXBsZSIsInNldENvbnRlbnQiLCJkcmF3U2VsZWN0IiwiY2hhbmdlVmFsdWUiLCJmb3JtYXRWYWx1ZSIsInNlbGVjdGVkIiwib3B0aW9uIiwic2VsZWN0aW9uIiwicmVkZWZpbmUiLCJvbkNoYW5nZSIsImRpc3BhdGNoIiwiRXZlbnQiLCJzZXRTZWxlY3RlZCIsImlzQ2hlY2tib3giLCJpc1JhZGlvIiwic2V0Q2hlY2tlZCIsImNoZWNrZWQiLCJjaGFuZ2VSYWRpbyIsInJhZGlvIiwiUmFkaW9CdXR0b24iLCJpdGVyYWJsZSIsImdldFJhZGlvVmFsdWUiLCJwcmV2VmFsdWUiLCJvblJhZGlvIiwic2V0TmFtZXMiLCJpc1RydWUiLCJpc1NlbGVjdGVkIiwicmFuZ2UiLCJjcmVhdGVSYW5nZSIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJjb25uZWN0aW9uIiwic2V0Q2FjaGUiLCJhYm9ydCIsIm9uTG9hZCIsIm9uRXJyb3IiLCJpc1VybCIsInByZXZlbnREZWZhdWx0Iiwib25TdGF0ZUNoYW5nZWQiLCJzZXRQYXJhbXMiLCJzZXRRdWVyeSIsInNldEhhc2giLCJzZXRPcHRpb25zIiwicmVzZXRIcmVmIiwiaHJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OzhRQ2xGQTs7Ozs7Ozs7O0FBU0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FB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VSx1QztBQURFOUcsQyxDQUVab1csaUIsR0FBb0IsSTtrQkFGUnBXLEMiLCJmaWxlIjoiYWtpbGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJBa2lsaVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJBa2lsaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLyoqXG4gKiBKYXZhc2NyaXB0IGZyYW1ld29ya1xuICpcbiAqIGNvbnN0IEFraWxpID0gbWFrZUl0RWFzeShqcyArIGh0bWwpO1xuICpcbiAqIEBhdXRob3IgQWxleGFuZHIgQmFsYXN5YW4gPG15d2Vic3RyZWV0QGdtYWlsLmNvbT5cbiAqIEBsaW5rIGh0dHA6Ly9ha2lsaWpzLmNvbVxuICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IElmIGZyb20gJy4vY29tcG9uZW50cy9pZi5qcyc7XG5pbXBvcnQgRm9yIGZyb20gJy4vY29tcG9uZW50cy9mb3IuanMnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL2NvbXBvbmVudHMvc2VsZWN0LmpzJztcbmltcG9ydCBJbnB1dCBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQuanMnO1xuaW1wb3J0IFJhZGlvIGZyb20gJy4vY29tcG9uZW50cy9yYWRpby5qcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL2NvbXBvbmVudHMvdGV4dC5qcyc7XG5pbXBvcnQgVGV4dGFyZWEgZnJvbSAnLi9jb21wb25lbnRzL3RleHRhcmVhLmpzJztcbmltcG9ydCBDb250ZW50IGZyb20gJy4vY29tcG9uZW50cy9jb250ZW50LmpzJztcbmltcG9ydCBJbmNsdWRlIGZyb20gJy4vY29tcG9uZW50cy9pbmNsdWRlLmpzJztcbmltcG9ydCBJZnJhbWUgZnJvbSAnLi9jb21wb25lbnRzL2lmcmFtZS5qcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9jb21wb25lbnRzL2ltYWdlLmpzJztcbmltcG9ydCBFbWJlZCBmcm9tICcuL2NvbXBvbmVudHMvZW1iZWQuanMnO1xuaW1wb3J0IEF1ZGlvIGZyb20gJy4vY29tcG9uZW50cy9hdWRpby5qcyc7XG5pbXBvcnQgVmlkZW8gZnJvbSAnLi9jb21wb25lbnRzL3ZpZGVvLmpzJztcbmltcG9ydCBUcmFjayBmcm9tICcuL2NvbXBvbmVudHMvdHJhY2suanMnO1xuaW1wb3J0IFNvdXJjZSBmcm9tICcuL2NvbXBvbmVudHMvc291cmNlLmpzJztcbmltcG9ydCBPYmplY3RzIGZyb20gJy4vY29tcG9uZW50cy9vYmplY3QuanMnO1xuaW1wb3J0IFJvdXRlIGZyb20gJy4vY29tcG9uZW50cy9yb3V0ZS5qcyc7XG5pbXBvcnQgVXJsIGZyb20gJy4vY29tcG9uZW50cy91cmwuanMnO1xuaW1wb3J0IEEgZnJvbSAnLi9jb21wb25lbnRzL2EuanMnO1xuaW1wb3J0IFNjb3BlIGZyb20gJy4vc2NvcGUuanMnO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXIuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9zZXJ2aWNlcy9yZXF1ZXN0LmpzJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9zZXJ2aWNlcy9yb3V0ZXIuanMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc2VydmljZXMvc3RvcmUuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IGdsb2JhbHMgZnJvbSAnLi9nbG9iYWxzLmpzJztcblxuLyoqXG4gKiBUaGUgZnJhbWV3b3JrIG1haW4gb2JqZWN0XG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvZ2V0dGluZy1zdGFydGVkfVxuICovXG5jb25zdCBBa2lsaSA9IHt9O1xuXG5Ba2lsaS5fX2RlZmF1bHRzID0gW107XG5cbi8qKlxuICogU2V0IHRoZSBkZWZhdWx0IHRoaW5nc1xuICovXG5Ba2lsaS5zZXREZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5vcHRpb25zID0ge1xuICAgIGRlYnVnOiB0cnVlXG4gIH07XG4gIFxuICB0aGlzLl9faW5pdCA9IG51bGw7XG4gIHRoaXMuX19jbGVhcmVkID0gZmFsc2U7XG4gIHRoaXMuX19jb21wb25lbnRzID0ge307XG4gIHRoaXMuX19hbGlhc2VzID0ge307XG4gIHRoaXMuX19zY29wZXMgPSB7fTtcbiAgdGhpcy5fX3N0b3JlTGlua3MgPSB7fTtcbiAgdGhpcy5fX3dpbmRvdyA9IHt9O1xuICB0aGlzLl9fdGFncyA9IHt9O1xuICB0aGlzLl9faXNvbGF0aW9uID0gbnVsbDtcbiAgdGhpcy5fX2V2YWx1YXRpb24gPSBudWxsO1xuICB0aGlzLl9fd3JhcHBpbmcgPSBmYWxzZTtcbiAgdGhpcy5fX29uRXJyb3IgPSAoKSA9PiB0aGlzLnRyaWdnZXJJbml0KGZhbHNlKTtcbiAgXG4gIHRoaXMuaHRtbEJvb2xlYW5BdHRyaWJ1dGVzID0gW1xuICAgICdkaXNhYmxlZCcsICdjb250ZW50ZWRpdGFibGUnLCAnaGlkZGVuJ1xuICBdO1xuXG4gIGZvcihsZXQga2V5IGluIGdsb2JhbHMpIHtcbiAgICBkZWxldGUgZ2xvYmFsc1trZXldO1xuICB9XG5cbiAgZ2xvYmFscy5fX3RhcmdldC51dGlscyA9IHRoaXMud3JhcCh1dGlscyk7XG4gIHRoaXMuY29tcG9uZW50cyA9IHt9O1xuICB0aGlzLnNlcnZpY2VzID0ge307XG4gIHRoaXMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuICB0aGlzLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcbiAgdGhpcy5TY29wZSA9IFNjb3BlO1xuICB0aGlzLnV0aWxzID0gdXRpbHM7XG4gIHRoaXMuZ2xvYmFscyA9IGdsb2JhbHM7XG4gIHRoaXMuY29tcG9uZW50cy5BID0gQTtcbiAgdGhpcy5jb21wb25lbnRzLkF1ZGlvID0gQXVkaW87XG4gIHRoaXMuY29tcG9uZW50cy5Db250ZW50ID0gQ29udGVudDtcbiAgdGhpcy5jb21wb25lbnRzLkZvciA9IEZvcjtcbiAgdGhpcy5jb21wb25lbnRzLkVtYmVkID0gRW1iZWQ7XG4gIHRoaXMuY29tcG9uZW50cy5JZiA9IElmO1xuICB0aGlzLmNvbXBvbmVudHMuSW5jbHVkZSA9IEluY2x1ZGU7XG4gIHRoaXMuY29tcG9uZW50cy5JbnB1dCA9IElucHV0O1xuICB0aGlzLmNvbXBvbmVudHMuSWZyYW1lID0gSWZyYW1lO1xuICB0aGlzLmNvbXBvbmVudHMuSW1hZ2UgPSBJbWFnZTtcbiAgdGhpcy5jb21wb25lbnRzLk9iamVjdCA9IE9iamVjdHM7XG4gIHRoaXMuY29tcG9uZW50cy5SYWRpbyA9IFJhZGlvO1xuICB0aGlzLmNvbXBvbmVudHMuUm91dGUgPSBSb3V0ZTtcbiAgdGhpcy5jb21wb25lbnRzLlNlbGVjdCA9IFNlbGVjdDtcbiAgdGhpcy5jb21wb25lbnRzLlNvdXJjZSA9IFNvdXJjZTtcbiAgdGhpcy5jb21wb25lbnRzLlRleHQgPSBUZXh0O1xuICB0aGlzLmNvbXBvbmVudHMuVGV4dGFyZWEgPSBUZXh0YXJlYTtcbiAgdGhpcy5jb21wb25lbnRzLlRyYWNrID0gVHJhY2s7XG4gIHRoaXMuY29tcG9uZW50cy5VcmwgPSBVcmw7XG4gIHRoaXMuY29tcG9uZW50cy5WaWRlbyA9IFZpZGVvO1xuICB0aGlzLnNlcnZpY2VzLnJlcXVlc3QgPSByZXF1ZXN0O1xuICB0aGlzLnNlcnZpY2VzLnJvdXRlciA9IHJvdXRlcjtcbiAgdGhpcy5zZXJ2aWNlcy5zdG9yZSA9IHN0b3JlO1xuXG4gIHRoaXMuZGVmaW5lKCk7XG4gIHRoaXMuaGFuZGxlRXJyb3JzKCk7XG4gIHRoaXMuaXNvbGF0ZUV2ZW50cygpO1xuICB0aGlzLmlzb2xhdGVBcnJheVByb3RvdHlwZSgpO1xuICB0aGlzLmlzb2xhdGVXaW5kb3dGdW5jdGlvbnMoKTsgXG4gIFxuICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5fX2RlZmF1bHRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHRoaXMuX19kZWZhdWx0c1tpXSgpO1xuICB9XG59XG5cbi8qKlxuICogRGVmaW5lIHRoZSBkZWZhdWx0IGNvbXBvbmVudHNcbiAqL1xuQWtpbGkuZGVmaW5lID0gZnVuY3Rpb24gKCkge1xuICBBLmRlZmluZSgpO1xuICBBdWRpby5kZWZpbmUoKTtcbiAgQ29udGVudC5kZWZpbmUoKTtcbiAgQ29tcG9uZW50LmRlZmluZSgpO1xuICBFbWJlZC5kZWZpbmUoKTtcbiAgRm9yLmRlZmluZSgpO1xuICBJbmNsdWRlLmRlZmluZSgpO1xuICBJZnJhbWUuZGVmaW5lKCk7XG4gIEltYWdlLmRlZmluZSgpO1xuICBJbnB1dC5kZWZpbmUoKTtcbiAgSWYuZGVmaW5lKCk7XG4gIE9iamVjdHMuZGVmaW5lKCk7XG4gIFJhZGlvLmRlZmluZSgpO1xuICBSb3V0ZS5kZWZpbmUoKTtcbiAgU2VsZWN0LmRlZmluZSgpO1xuICBTb3VyY2UuZGVmaW5lKCk7XG4gIFRleHRhcmVhLmRlZmluZSgpO1xuICBUcmFjay5kZWZpbmUoKTtcbiAgVmlkZW8uZGVmaW5lKCk7XG59O1xuXG4vKipcbiAqIFNldCB0aGUgZGVmYXVsdHNcbiAqIFxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gXG4gKi9cbkFraWxpLmRlZmF1bHRzID0gZnVuY3Rpb24gKGZuKSB7ICBcbiAgdGhpcy5fX2RlZmF1bHRzLnB1c2goZm4pO1xuICBmbigpO1xufVxuXG4vKipcbiAqIENsZWFyIHRoZSBnbG9iYWwgY29udGV4dFxuICovXG5Ba2lsaS5jbGVhckdsb2JhbHMgPSBmdW5jdGlvbiAoKSB7XG4gIGlmKHRoaXMuX19jbGVhcmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZm9yIChsZXQga2V5IGluIHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUpIHtcbiAgICBFbGVtZW50LnByb3RvdHlwZVtrZXldID0gdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZVtrZXldO1xuICB9XG5cbiAgZm9yIChsZXQga2V5IGluIHRoaXMuX193aW5kb3cuQXJyYXkucHJvdG90eXBlKSB7XG4gICAgQXJyYXkucHJvdG90eXBlW2tleV0gPSB0aGlzLl9fd2luZG93LkFycmF5LnByb3RvdHlwZVtrZXldO1xuICB9XG5cbiAgZm9yKGxldCBrZXkgaW4gdGhpcy5vcHRpb25zLmdsb2JhbHMpIHtcbiAgICB0aGlzLm9wdGlvbnMuZ2xvYmFsc1trZXldID0gdGhpcy51bndyYXAodGhpcy5vcHRpb25zLmdsb2JhbHNba2V5XSk7XG4gIH1cblxuICB3aW5kb3cuc2V0VGltZW91dCA9IHRoaXMuX193aW5kb3cuc2V0VGltZW91dDtcbiAgd2luZG93LnNldEludGVydmFsID0gdGhpcy5fX3dpbmRvdy5zZXRJbnRlcnZhbDtcbiAgd2luZG93LlByb21pc2UgPSB0aGlzLl9fd2luZG93LlByb21pc2U7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIHRoaXMuX19vbkVycm9yKTtcbiAgdGhpcy5fX2NsZWFyZWQgPSB0cnVlO1xufTtcblxuLyoqXG4gKiBKb2luIHRoZSBiaW5kaW5nIGtleXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIGJpbmRpbmcga2V5c1xuICovXG5Ba2lsaS5qb2luQmluZGluZ0tleXMgPSBmdW5jdGlvbiAoa2V5cykge1xuICByZXR1cm4ga2V5cy5tYXAoZWwgPT4gZWwudG9TdHJpbmcoKSkuam9pbignLicpO1xufTtcblxuLyoqXG4gKiBBZGQgdGhlIHNjb3BlXG4gKlxuICogQHBhcmFtIHNjb3BlXG4gKi9cbkFraWxpLmFkZFNjb3BlID0gZnVuY3Rpb24gKHNjb3BlKSB7XG4gIGlmICh0aGlzLl9fc2NvcGVzW3Njb3BlLl9fbmFtZV0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFNjb3BlIG5hbWUgJHtzY29wZS5fX25hbWV9IGFscmVhZHkgZXhpc3RzYCk7XG4gIH1cblxuICB0aGlzLl9fc2NvcGVzW3Njb3BlLl9fbmFtZV0gPSBzY29wZTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBzY29wZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc2NvcGUgbmFtZVxuICogQHJldHVybnMge1Njb3BlfVxuICovXG5Ba2lsaS5nZXRTY29wZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiB0aGlzLl9fc2NvcGVzW25hbWVdO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIHNjb3BlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzY29wZSBuYW1lXG4gKi9cbkFraWxpLnJlbW92ZVNjb3BlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgY29uc3Qgc2NvcGUgPSB0aGlzLl9fc2NvcGVzW25hbWVdO1xuICBzY29wZS5fX2VsID0gbnVsbDtcbiAgc2NvcGUuX19jb21wb25lbnQgPSBudWxsO1xuICBzY29wZS5fX3BhcmVudCA9IG51bGw7XG4gIHRoaXMuX19zY29wZXNbbmFtZV0gPSBudWxsO1xuICBkZWxldGUgdGhpcy5fX3Njb3Blc1tuYW1lXTtcbn07XG5cbi8qKlxuICogR2V0IGFsbCBlbGVtZW50cyB0aGF0IGlzIHdyYXBwZWQgaW4gdGhlIEFraWxpIGNvbXBvbmVudFxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3RyZWU9dHJ1ZV0gLSByZXR1cm4gYXJyYXkgb2YgdGhlIHBhcmVudHMgaWYgdHJ1ZSwgY2xvc2VzdCBwYXJlbnQgaWYgZmFsc2VcbiAqIEByZXR1cm5zIHtBcnJheXxFbGVtZW50fG51bGx9XG4gKi9cbkFraWxpLmdldEFraWxpUGFyZW50cyA9IGZ1bmN0aW9uIChlbCwgdHJlZSA9IHRydWUpIHtcbiAgbGV0IGFyciA9IFtdO1xuXG4gIGZ1bmN0aW9uIGNoZWNrKG5vZGUpIHtcbiAgICBpZiAoIW5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChub2RlLnBhcmVudE5vZGUuX19ha2lsaSkge1xuICAgICAgYXJyLnB1c2gobm9kZS5wYXJlbnROb2RlKTtcblxuICAgICAgaWYgKCF0cmVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVjayhub2RlLnBhcmVudE5vZGUpO1xuICB9XG5cbiAgY2hlY2soZWwpO1xuICByZXR1cm4gdHJlZT8gYXJyOiBhcnJbMF07XG59O1xuXG4vKipcbiAqIENyZWF0ZSB0aGUgdGVtcGxhdGVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcIjxpPkhlbGxvPC9pPjxiPldvcmxkPC9iPlwiXG4gKiBlbC5pbm5lckhUTUwgPSBcIjxiPldvcmxkPC9iPlwiO1xuICogQWtpbGkuc2V0VGVtcGxhdGUoZWwsIFwiPGk+SGVsbG88L2k+JHt0aGlzLl9fY2hpbGRyZW59XCIpO1xuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuQWtpbGkuc2V0VGVtcGxhdGUgPSBmdW5jdGlvbiAoZWwsIHRlbXBsYXRlKSB7XG4gIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZSgvXFwkeygoKD8hXFwkeylcXHMqdGhpc1xcLl9fY29udGVudFxccyopKil9LywgZWwuaW5uZXJIVE1MKTtcbiAgZWwuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gIHJldHVybiBlbC5pbm5lckhUTUw7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIHRoZSB1bmlxdWUgc2NvcGUgbmFtZVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbkFraWxpLmNyZWF0ZVNjb3BlTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHV0aWxzLmNyZWF0ZVJhbmRvbVN0cmluZygxNiwgc3RyID0+ICEhdGhpcy5fX3Njb3Blc1tzdHJdKTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSB0aGUgc2NvcGUgY2hhbmdlc1xuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkuaXNvbGF0ZSA9IGZ1bmN0aW9uIChmbikgeyBcbiAgaWYgKHRoaXMuX19pc29sYXRpb24pIHtcbiAgICByZXR1cm4gZm4oKTtcbiAgfVxuXG4gIHRoaXMuX19pc29sYXRpb24gPSB7fTtcbiAgbGV0IHJlcyA9IGZuKCk7XG4gIGxldCBwcm9wcyA9IFtdO1xuXG4gIGZvciAobGV0IGsgaW4gdGhpcy5fX2lzb2xhdGlvbikge1xuICAgIHByb3BzLnB1c2godGhpcy5fX2lzb2xhdGlvbltrXSk7XG4gIH1cblxuICB0aGlzLl9faXNvbGF0aW9uID0gbnVsbDtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHByb3BzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvbnN0IHByb3AgPSBwcm9wc1tpXTtcbiAgICBjb25zdCB2YWwgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhwcm9wLmtleXMsIHByb3AuY29tcG9uZW50Ll9fc2NvcGUpOyAgICBcbiAgICBwcm9wLmNvbXBvbmVudC5fX2lzUmVzb2x2ZWQgJiYgcHJvcC5jb21wb25lbnQuX190cmlnZ2VyU3RvcmVBbmRBdHRyKHByb3Aua2V5cyk7XG4gICAgcHJvcC5jb21wb25lbnQuX19ldmFsdWF0ZUJ5S2V5cyhwcm9wLmtleXMsIHZhbCwgcHJvcC5pc0RlbGV0ZWQpO1xuICB9XG5cbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogU3RvcCB0aGUgZXZhbHVhdGlvbiBpbnNpZGUgdGhlIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS51bmV2YWx1YXRlID0gZnVuY3Rpb24gKGZuKSB7XG4gIGxldCBldmFsdWF0aW9uID0gdGhpcy5fX2V2YWx1YXRpb247XG4gIGxldCByZXM7XG4gIHRoaXMuX19ldmFsdWF0aW9uID0gbnVsbDtcbiAgcmVzID0gZm4oKTtcbiAgdGhpcy5fX2V2YWx1YXRpb24gPSBldmFsdWF0aW9uO1xuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBFdmFsdWF0ZSBvbmx5IHRoZSByb290IHByb3BlcnRpZXNcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLndyYXBwaW5nID0gZnVuY3Rpb24gKGZuKSB7XG4gIGlmKHRoaXMuX193cmFwcGluZykge1xuICAgIHJldHVybiBmbigpO1xuICB9XG4gIFxuICB0aGlzLl9fd3JhcHBpbmcgPSB0cnVlO1xuICBsZXQgcmVzID0gZm4oKTsgIFxuICB0aGlzLl9fd3JhcHBpbmcgPSBmYWxzZTsgIFxuICByZXR1cm4gcmVzOyAgIFxufVxuXG4vKipcbiAqIFN0b3AgdGhlIGlzb2xhdGlvbiBpbnNpZGUgdGhlIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS51bmlzb2xhdGUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgbGV0IGlzb2xhdGlvbiA9IHRoaXMuX19pc29sYXRpb247XG4gIGxldCByZXM7XG4gIHRoaXMuX19pc29sYXRpb24gPSBudWxsO1xuICByZXMgPSBmbigpO1xuICB0aGlzLl9faXNvbGF0aW9uID0gaXNvbGF0aW9uO1xuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBSdW4gdGhlIGZ1bmN0aW9uIG9uIHRoZSBuZXh0IHRpY2tcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbkFraWxpLm5leHRUaWNrID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzKSA9PiBzZXRUaW1lb3V0KCgpID0+IFByb21pc2UucmVzb2x2ZShmbigpKS50aGVuKHJlcykpKTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgZWxlbWVudFxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucz17fV1cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS5pbml0aWFsaXplID0gZnVuY3Rpb24gKGVsLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IHJlY29tcGlsZSA9IG9wdGlvbnMucmVjb21waWxlO1xuICBsZXQgY29tcG9uZW50ID0gZWwuX19ha2lsaTtcblxuICBpZiAoY29tcG9uZW50KSB7XG4gICAgaWYgKHJlY29tcGlsZSkge1xuICAgICAgY29tcG9uZW50Ll9fcmVjb21waWxlKHJlY29tcGlsZSA9PT0gdHJ1ZT8ge306IHJlY29tcGlsZSk7XG4gICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBpc1Jvb3QgPSBlbCA9PT0gdGhpcy5fX3Jvb3Q7XG4gIGxldCBjb21wb25lbnROYW1lID0gdXRpbHMudG9EYXNoQ2FzZShlbC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpIHx8IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSk7XG4gIGxldCBfQ29tcG9uZW50ID0gdGhpcy5fX2NvbXBvbmVudHNbY29tcG9uZW50TmFtZV07XG5cbiAgQ0hFQ0tfQUxJQVNFUzogaWYgKCFfQ29tcG9uZW50KSB7XG4gICAgbGV0IHNlbGVjdG9ycyA9IE9iamVjdC5rZXlzKHRoaXMuX19hbGlhc2VzKTtcblxuICAgIGlmICghc2VsZWN0b3JzLmxlbmd0aCkge1xuICAgICAgYnJlYWsgQ0hFQ0tfQUxJQVNFUztcbiAgICB9XG5cbiAgICBsZXQgc2VsZWN0b3JBbGwgPSBzZWxlY3RvcnMuam9pbignLCcpO1xuXG4gICAgaWYgKCFlbC5tYXRjaGVzKHNlbGVjdG9yQWxsKSkge1xuICAgICAgYnJlYWsgQ0hFQ0tfQUxJQVNFUztcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHNlbGVjdG9ycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBzZWxlY3RvciA9IHNlbGVjdG9yc1tpXTtcblxuICAgICAgaWYgKGVsLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIF9Db21wb25lbnQgPSB0aGlzLl9fY29tcG9uZW50c1t0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl1dO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoIV9Db21wb25lbnQgJiYgIWlzUm9vdCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghX0NvbXBvbmVudCkge1xuICAgIF9Db21wb25lbnQgPSB0aGlzLkNvbXBvbmVudDtcbiAgfVxuXG4gIGlmIChfQ29tcG9uZW50Lm1hdGNoZXMgJiYgIWVsLm1hdGNoZXMoX0NvbXBvbmVudC5tYXRjaGVzKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbXBvbmVudCA9IG5ldyBfQ29tcG9uZW50KGVsLCB7fSk7ICBcbiAgXG4gIGlmIChjb21wb25lbnQuX19jYW5jZWxsZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZihBa2lsaS5nZXRBa2lsaVBhcmVudHMoZWwpLmZpbmQocCA9PiBwLl9fYWtpbGkuX19wcmV2ZW50KSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbXBvbmVudC5fX2NyZWF0ZSgpO1xuICByZXR1cm4gY29tcG9uZW50O1xufTtcblxuLyoqXG4gKiBDb21waWxlIHRoZSBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSByb290XG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuQWtpbGkuY29tcGlsZSA9IGZ1bmN0aW9uIChyb290LCBvcHRpb25zID0geyByZWNvbXBpbGU6IGZhbHNlIH0pIHsgIFxuICBsZXQgZWxlbWVudHMgPSBbXTtcblxuICBpZih3aW5kb3cuQUtJTElfU1NSKSB7XG4gICAgY29uc3QgYXJyID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKCdbbm8tc3NyXScpO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGFycltpXS5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBuZXN0ZWRJbml0aWFsaXppbmcgPSAoZWwpID0+IHtcbiAgICBsZXQgY29tcG9uZW50ID0gdGhpcy5pbml0aWFsaXplKGVsLCBvcHRpb25zKTtcbiAgICBsZXQgY2hpbGRyZW4gPSBlbC5jaGlsZHJlbjtcbiAgICBjb21wb25lbnQgJiYgZWxlbWVudHMucHVzaChjb21wb25lbnQpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmVzdGVkSW5pdGlhbGl6aW5nKGNoaWxkKTtcbiAgICB9XG4gIH07XG4gIFxuICBuZXN0ZWRJbml0aWFsaXppbmcocm9vdCk7XG4gIGxldCBwID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgY29tcG9uZW50ID0gZWxlbWVudHNbaV07ICAgIFxuICAgIHAucHVzaChjb21wb25lbnQuX19jb21waWxlKCkpOyAgICBcbiAgfVxuXG4gIHJldHVybiBQcm9taXNlLmFsbChwKS50aGVuKCgpID0+IHtcbiAgICBsZXQgciA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IGVsZW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgY29tcG9uZW50ID0gZWxlbWVudHNbaV07XG4gICAgICByLnB1c2goY29tcG9uZW50Ll9fcmVzb2x2ZSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocik7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciB0aGUgY29tcG9uZW50LlxuICogT3IgZ2V0IGl0IGlmIHRoZSBmdW5jdGlvbiBpcyBub3QgcGFzc2VkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBbZm5dXG4gKi9cbkFraWxpLmNvbXBvbmVudCA9IGZ1bmN0aW9uIChuYW1lLCBmbikge1xuICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmICghZm4pIHtcbiAgICByZXR1cm4gdGhpcy5fX2NvbXBvbmVudHNbbmFtZV0gfHwgbnVsbDtcbiAgfVxuICBcbiAgaWYgKHRoaXMuX19jb21wb25lbnRzW25hbWVdICYmIEFraWxpLm9wdGlvbnMuZGVidWcpIHsgIFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKGBDb21wb25lbnQgJHtuYW1lfSBhbHJlYWR5IHdhcyBhZGRlZGApO1xuICB9XG5cbiAgdGhpcy5fX2NvbXBvbmVudHNbbmFtZV0gPSBmbjtcbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5Ba2lsaS5yZW1vdmVDb21wb25lbnQgPSBmdW5jdGlvbiAobmFtZSkge1xuICBkZWxldGUgdGhpcy5fX2NvbXBvbmVudHNbbmFtZV07XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIHRoZSBzZWxlY3RvciBhbGlhcy5cbiAqIE9yIGdldCBpdCBpZiB0aGUgY29tcG9uZW50IG5hbWUgaXMgbm90IHBhc3NlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciAtIERPTSBzZWxlY3RvclxuICogQHBhcmFtIHtzdHJpbmd9IFtjb21wb25lbnROYW1lXVxuICovXG5Ba2lsaS5hbGlhcyA9IGZ1bmN0aW9uIChzZWxlY3RvciwgY29tcG9uZW50TmFtZSA9ICcnKSB7XG4gIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYgKCFjb21wb25lbnROYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXSAmJiBBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oYEFsaWFzIHdpdGggc2VsZWN0b3IgJHtzZWxlY3Rvcn0gYWxyZWFkeSB3YXMgYWRkZWRgKTtcbiAgfVxuXG4gIHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXSA9IGNvbXBvbmVudE5hbWU7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgc2VsZWN0b3IgYWxpYXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqL1xuQWtpbGkucmVtb3ZlQWxpYXMgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgZGVsZXRlIHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSB0aGUgYXJyYXkgcHJvdG90eXBlIGZ1bmN0aW9uc1xuICovXG5Ba2lsaS5pc29sYXRlQXJyYXlQcm90b3R5cGUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX193aW5kb3cuQXJyYXkgPSB7IHByb3RvdHlwZToge30gfTtcbiAgbGV0IGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhBcnJheS5wcm90b3R5cGUpO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICBsZXQgb2xkID0gQXJyYXkucHJvdG90eXBlW2tleV07XG5cbiAgICBpZiAodHlwZW9mIG9sZCAhPSAnZnVuY3Rpb24nIHx8IGtleSA9PSAnY29uc3RydWN0b3InKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB0aGlzLl9fd2luZG93LkFycmF5LnByb3RvdHlwZVtrZXldID0gb2xkO1xuXG4gICAgQXJyYXkucHJvdG90eXBlW2tleV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gQWtpbGkudW5ldmFsdWF0ZSgoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5fX2lzUHJveHkpIHtcbiAgICAgICAgICByZXR1cm4gb2xkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IG9sZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbn07XG5cbi8qKlxuICogSXNvbGF0ZSB0aGUgd2luZG93IGZ1bmN0aW9uc1xuICovXG5Ba2lsaS5pc29sYXRlV2luZG93RnVuY3Rpb25zID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9fd2luZG93LnNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICB0aGlzLl9fd2luZG93LnNldEludGVydmFsID0gc2V0SW50ZXJ2YWw7XG4gIHRoaXMuX193aW5kb3cuUHJvbWlzZSA9IHdpbmRvdy5Qcm9taXNlO1xuICB3aW5kb3cuc2V0VGltZW91dCA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LnNldFRpbWVvdXQsIDApO1xuICB3aW5kb3cuc2V0SW50ZXJ2YWwgPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5zZXRJbnRlcnZhbCwgMCk7XG4gIFxuICBpZighd2luZG93LkFLSUxJX1NTUikge1xuICAgIHdpbmRvdy5Qcm9taXNlLmNvbnN0cnVjdG9yID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuUHJvbWlzZS5jb25zdHJ1Y3Rvcik7XG4gICAgd2luZG93LlByb21pc2UucHJvdG90eXBlLnRoZW4gPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS50aGVuLCBbMCwgJ2xhc3QnXSk7XG4gICAgd2luZG93LlByb21pc2UucHJvdG90eXBlLmNhdGNoID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gpO1xuICB9ICBcbn07XG5cbi8qKlxuICogSXNvbGF0ZSB0aGUgZXZlbnQgbGlzdGVuZXJzXG4gKi9cbkFraWxpLmlzb2xhdGVFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX193aW5kb3cuRWxlbWVudCA9IHsgcHJvdG90eXBlOiB7fSB9O1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBFbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyO1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyO1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZTtcblxuICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZGVsZXRlIHRoaXMuX19ha2lsaUxpc3RlbmVycztcbiAgICByZXR1cm4gQWtpbGkuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChuYW1lLCBmbikge1xuICAgIGxldCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYgKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVycyA9IHt9O1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0gPSBbXTtcbiAgICB9XG4gICAgXG4gICAgaWYodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhcmdzWzFdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICAgIH07XG4gICAgfSAgICBcblxuICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5wdXNoKHtcbiAgICAgIGxpbms6IGZuLFxuICAgICAgZm46IGFyZ3NbMV1cbiAgICB9KTtcblxuICAgIHJldHVybiBBa2lsaS5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgICBsZXQgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV1baV07XG5cbiAgICAgIGlmIChsaXN0ZW5lci5saW5rID09PSBmbikge1xuICAgICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICBhcmdzWzFdID0gbGlzdGVuZXIuZm47XG4gICAgICAgIGktLTtcbiAgICAgICAgbC0tO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIEFraWxpLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG59O1xuXG4vKipcbiAqIFdyYXAgdGhlIGZ1bmN0aW9uIGNhbGxiYWNrIHdpdGggdGhlIGlzb2xhdGlvbiBjb250ZXh0XG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ3xudW1iZXJbXXxzdHJpbmdbXX0gW3Bvcz1cImxhc3RcIl1cbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqL1xuQWtpbGkuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24gPSBmdW5jdGlvbiAoZm4sIHBvcyA9ICdsYXN0Jykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGxldCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICFBcnJheS5pc0FycmF5KHBvcykgJiYgKHBvcyA9IFtwb3NdKTtcbiAgICBcbiAgICBmb3IobGV0IGkgPSAwLCBsID0gcG9zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG51bSA9IHBvc1tpXTtcbiAgICAgIGxldCBpbmRleCA9IG51bTtcbiAgICAgIGxldCBjYWxsYmFjayA9IGFyZ3NbbnVtXTtcblxuICAgICAgaWYobnVtID09ICdsYXN0Jykge1xuICAgICAgICBpbmRleCA9IGFyZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgY2FsbGJhY2sgPSBhcmdzW2luZGV4XTtcbiAgICAgIH1cblxuICAgICAgaWYodHlwZW9mIGNhbGxiYWNrICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmKCFjYWxsYmFjay5fX2lzb2xhdGVkKSB7XG4gICAgICAgIGFyZ3NbaW5kZXhdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IGNhbGxiYWNrLmFwcGx5KGNhbGxiYWNrLCBhcmd1bWVudHMpKTtcbiAgICAgICAgfTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYXJnc1tpbmRleF0sICdfX2lzb2xhdGVkJywge1xuICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgIHZhbHVlOiBjYWxsYmFja1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG59O1xuXG4vKipcbiAqIFdyYXAgdGhlIG9iamVjdC9mdW5jdGlvbiB0byBpc29sYXRlIGFuZCB1bmV2YWx1YXRlIGRhdGFcbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gb2JqXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIFxuICovXG5Ba2lsaS53cmFwID0gZnVuY3Rpb24gKG9iaiwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBjdXJyZW50ID0gb2JqO1xuXG4gIGlmKHR5cGVvZiBvYmogPT0gJ2Z1bmN0aW9uJykge1xuICAgIG9iaiA9IHRoaXMud3JhcEZ1bmN0aW9uKG9iaiwgb3B0aW9ucyk7XG5cbiAgICBpZihvYmogPT09IGN1cnJlbnQpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICB9XG4gIGVsc2UgaWYoIW9iaiB8fCB0eXBlb2Ygb2JqICE9ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBsZXQga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaik7XG5cbiAgZm9yKGxldCBrID0gMCwgYyA9IGtleXMubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgbGV0IGtleSA9IGtleXNba107XG4gICAgbGV0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KTtcblxuICAgIGlmKCFkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSB8fCAhZGVzY3JpcHRvci53cml0YWJsZSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYob3B0aW9ucy5yZXZlcnNlKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsuLi5kZXNjcmlwdG9yLCB2YWx1ZTogb2JqW2tleV0uX19ha2lsaSB8fCBvYmpba2V5XSB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsuLi5kZXNjcmlwdG9yLCB2YWx1ZTogdGhpcy53cmFwKG9ialtrZXldLCBvcHRpb25zKSB9KTtcbiAgfSBcbiAgXG4gIHJldHVybiBvYmo7XG59O1xuXG4vKipcbiAqIFVud3JhcCB0aGUgb2JqZWN0L2Z1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IG9ialxuICovXG5Ba2lsaS51bndyYXAgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0aGlzLndyYXAob2JqLCB7IHJldmVyc2U6IHRydWUgfSk7XG59XG5cbi8qKlxuICogSXNvbGF0ZSB0aGUgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSBcbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqL1xuQWtpbGkud3JhcEZ1bmN0aW9uID0gZnVuY3Rpb24gKGZuLCBvcHRpb25zID0ge30pIHtcbiAgaWYgKGZuLl9fYWtpbGkpIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICBjb25zdCBha2lsaVdyYXBwZWRGdW5jdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZihvcHRpb25zLnRhZyAmJiBBa2lsaS5fX2V2YWx1YXRpb24pIHtcbiAgICAgIEFraWxpLmFkZFRhZyhvcHRpb25zLnRhZywgQWtpbGkuX19ldmFsdWF0aW9uLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBBa2lsaS53cmFwcGluZygoKSA9PiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfTtcblxuICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGZuKTtcbiAgYWtpbGlXcmFwcGVkRnVuY3Rpb24ucHJvdG90eXBlID0gZm4ucHJvdG90eXBlO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgIGFraWxpV3JhcHBlZEZ1bmN0aW9uW2tleV0gPSBmbltrZXldO1xuICB9XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFraWxpV3JhcHBlZEZ1bmN0aW9uLCAnX19ha2lsaScsIHtcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICB2YWx1ZTogZm5cbiAgfSk7XG5cbiAgcmV0dXJuIGFraWxpV3JhcHBlZEZ1bmN0aW9uO1xufTtcblxuLyoqXG4gKiBBZGQgdGhlIHRhZ1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqL1xuQWtpbGkuYWRkVGFnID0gZnVuY3Rpb24gKHRhZywgbm9kZSkge1xuICBpZih0aGlzLmhhc1RhZyh0YWcsIG5vZGUpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYoIXRoaXMuX190YWdzW25vZGUuX19uYW1lXSkge1xuICAgIHRoaXMuX190YWdzW25vZGUuX19uYW1lXSA9IHt9OyAgICBcbiAgfVxuXG4gIGlmKCF0aGlzLl9fdGFnc1tub2RlLl9fbmFtZV1bdGFnXSkge1xuICAgIHRoaXMuX190YWdzW25vZGUuX19uYW1lXVt0YWddID0gW107ICAgIFxuICB9XG5cbiAgdGhpcy5fX3RhZ3Nbbm9kZS5fX25hbWVdW3RhZ10ucHVzaCh7IG5vZGUgfSk7XG59XG5cbi8qKlxuICogQ2hlY2sgdGhlIHRhZyBleGlzdHNcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IHRhZ1xuICogQHBhcmFtIHtOb2RlfSBbbm9kZV1cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5Ba2lsaS5oYXNUYWcgPSBmdW5jdGlvbih0YWcsIG5vZGUpIHtcbiAgaWYoIW5vZGUpe1xuICAgIGZvcihsZXQga2V5IGluIHRoaXMuX190YWdzKSB7XG4gICAgICBmb3IobGV0IGsgaW4gdGhpcy5fX3RhZ3Nba2V5XSkge1xuICAgICAgICBpZihrID09IHRhZykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYoIXRoaXMuX190YWdzW25vZGUuX19uYW1lXSkge1xuICAgIHJldHVybiBmYWxzZTsgICAgXG4gIH1cblxuICBpZighdGhpcy5fX3RhZ3Nbbm9kZS5fX25hbWVdW3RhZ10pIHtcbiAgICByZXR1cm4gZmFsc2U7ICAgIFxuICB9IFxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgdGFnXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdGFnXVxuICogQHBhcmFtIHtOb2RlfSBbbm9kZV1cbiAqL1xuQWtpbGkucmVtb3ZlVGFnID0gZnVuY3Rpb24gKHRhZywgbm9kZSkge1xuICBpZih0eXBlb2YgdGFnID09ICdvYmplY3QnKSB7XG4gICAgbm9kZSA9IHRhZztcbiAgICB0YWcgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZighdGFnKSB7IFxuICAgIGRlbGV0ZSB0aGlzLl9fdGFnc1tub2RlLl9fbmFtZV07XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYoIW5vZGUpIHtcbiAgICBmb3IobGV0IGtleSBpbiB0aGlzLl9fdGFncykge1xuICAgICAgZm9yKGxldCBrIGluIHRoaXMuX190YWdzW2tleV0pIHtcbiAgICAgICAgaWYoayA9PSB0YWcpIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5fX3RhZ3Nba2V5XVtrXVxuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgaWYoIU9iamVjdC5rZXlzKHRoaXMuX190YWdzW2tleV0pLmxlbmd0aCkge1xuICAgICAgICBkZWxldGUgdGhpcy5fX3RhZ3Nba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm47ICAgIFxuICB9XG5cbiAgZm9yKGxldCBrZXkgaW4gdGhpcy5fX3RhZ3Nbbm9kZS5fX25hbWVdKSB7XG4gICAgaWYoa2V5ID09IHRhZykge1xuICAgICAgZGVsZXRlIHRoaXMuX190YWdzW25vZGUuX19uYW1lXVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIGlmKCFPYmplY3Qua2V5cyh0aGlzLl9fdGFnc1tub2RlLl9fbmFtZV0pLmxlbmd0aCkge1xuICAgIGRlbGV0ZSB0aGlzLl9fdGFnc1tub2RlLl9fbmFtZV07XG4gIH1cbn1cblxuLyoqXG4gKiBFdmFsdWF0ZSB0aGUgdGFnIGV4cHJlc3Npb25zXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdcbiAqL1xuQWtpbGkudHJpZ2dlclRhZyA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgZm9yKGxldCBrZXkgaW4gdGhpcy5fX3RhZ3MpIHtcbiAgICBmb3IobGV0IGsgaW4gdGhpcy5fX3RhZ3Nba2V5XSkge1xuICAgICAgaWYoayA9PSB0YWcpIHtcbiAgICAgICAgY29uc3QgYXJyID0gdGhpcy5fX3RhZ3Nba2V5XVtrXTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGNvbnN0IG9iaiA9IGFycltpXTtcbiAgICAgICAgICBvYmoubm9kZS5fX2NvbXBvbmVudC5fX2V2YWx1YXRlTm9kZShvYmoubm9kZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogSGFuZGxlIHRoZSBlcnJvcnNcbiAqL1xuQWtpbGkuaGFuZGxlRXJyb3JzID0gZnVuY3Rpb24gKCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCB0aGlzLl9fb25FcnJvcik7XG59O1xuXG4vKipcbiAqIFRyaWdnZXIgdGhlIGluaXRpYWxpemF0aW9uIHN0YXR1c1xuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc3RhdHVzXG4gKi9cbkFraWxpLnRyaWdnZXJJbml0ID0gZnVuY3Rpb24gKHN0YXR1cykge1xuICBBa2lsaS5fX2luaXQgPSBzdGF0dXM7XG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnYWtpbGktaW5pdCcsIHsgZGV0YWlsOiBzdGF0dXMgfSkpO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBhcHBsaWNhdGlvblxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gW3Jvb3RdXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuQWtpbGkuaW5pdCA9IGZ1bmN0aW9uIChyb290KSB7XG4gIHJvb3QgPSByb290IHx8IGRvY3VtZW50LmJvZHk7XG5cbiAgaWYoIShyb290IGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFJvb3QgZWxlbWVudCBtdXN0IGJlIGFuIGh0bWwgZWxlbWVudGApO1xuICB9XG5cbiAgaWYocm9vdCA9PT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBcImh0bWxcIiBjYW4ndCBiZSB0aGUgcm9vdCBlbGVtZW50YCk7XG4gIH1cblxuICB0aGlzLl9fcm9vdCA9IHJvb3Q7XG4gIFxuICBpZih3aW5kb3cuQUtJTElfU0VSVkVSKSB7ICAgIFxuICAgIEFraWxpLmluaXRTZXJ2ZXJTaWRlSHRtbCh3aW5kb3cuQUtJTElfU0VSVkVSLmh0bWwpO1xuICAgIEFraWxpLmluaXRTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlKHdpbmRvdy5BS0lMSV9TRVJWRVIucmVxdWVzdENhY2hlKTtcbiAgfVxuICBlbHNlIHtcbiAgICB3aW5kb3cuQUtJTElfQ0xJRU5UID0ge1xuICAgICAgaHRtbDogdGhpcy5wcmVwYXJlU2VydmVyU2lkZUh0bWwoKSAgICAgIFxuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIHRoaXMuY29tcGlsZSh0aGlzLl9fcm9vdCkudGhlbigoKSA9PiB7XG4gICAgaWYgKHJvdXRlci5fX2luaXQpIHtcbiAgICAgIHJldHVybiByb3V0ZXIuY2hhbmdlU3RhdGUoeyBpbml0OiB0cnVlIH0pO1xuICAgIH1cbiAgfSkudGhlbigoKSA9PiB7ICAgIFxuICAgIHdpbmRvdy5BS0lMSV9DTElFTlQgJiYgKHdpbmRvdy5BS0lMSV9DTElFTlQucmVxdWVzdENhY2hlID0gdGhpcy5wcmVwYXJlU2VydmVyU2lkZVJlcXVlc3RDYWNoZSgpKTtcbiAgICB0aGlzLnRyaWdnZXJJbml0KHRydWUpO1xuICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgdGhpcy50cmlnZ2VySW5pdChmYWxzZSk7XG4gICAgdGhyb3cgZXJyO1xuICB9KTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgU1NSIGh0bWxcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqL1xuQWtpbGkuaW5pdFNlcnZlclNpZGVIdG1sID0gZnVuY3Rpb24gKGh0bWwpIHtcbiAgZm9yIChsZXQgaSA9IHRoaXMuX19yb290LmF0dHJpYnV0ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgIHRoaXMuX19yb290LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLl9fcm9vdC5hdHRyaWJ1dGVzW2ldLm5hbWUpO1xuICB9XG5cbiAgbGV0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgbGV0IGRvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbCwgXCJ0ZXh0L2h0bWxcIik7XG4gIGxldCBlbCA9IGRvYy5xdWVyeVNlbGVjdG9yKHRoaXMuX19yb290ID09PSBkb2N1bWVudC5ib2R5PyAnYm9keSc6ICdib2R5ID4gKicpOyAgICBcbiAgdGhpcy5fX3Jvb3QuaW5uZXJIVE1MID0gZWwuaW5uZXJIVE1MO1xuXG4gIGZvciAobGV0IGkgPSBlbC5hdHRyaWJ1dGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgbGV0IGF0dHIgPSBlbC5hdHRyaWJ1dGVzW2ldO1xuICAgIHRoaXMuX19yb290LnNldEF0dHJpYnV0ZShhdHRyLm5hbWUsIGF0dHIudmFsdWUpO1xuICB9ICBcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBTU1IgY2FjaGVcbiAqIFxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICovXG5Ba2lsaS5pbml0U2VydmVyU2lkZVJlcXVlc3RDYWNoZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgY29uc3QgaW5pdCA9IChpbnN0YW5jZSwgb2JqKSA9PiB7XG4gICAgZm9yKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgICBpbnN0YW5jZS5fX2NhY2hlW2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gIH1cbiAgXG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICBsZXQgaW5zdGFuY2UgPSBrZXkgPT09ICdfX21haW4nPyByZXF1ZXN0OiByZXF1ZXN0Ll9faW5zdGFuY2VzW2tleV07XG4gICAgaW5pdChpbnN0YW5jZSwgb2JqW2tleV0pO1xuICB9XG59XG5cbi8qKlxuICogUHJlcGFyZSB0aGUgU1NSIGh0bWxcbiAqL1xuQWtpbGkucHJlcGFyZVNlcnZlclNpZGVIdG1sID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fX3Jvb3Qub3V0ZXJIVE1MO1xufVxuXG4vKipcbiAqIFByZXBhcmUgdGhlIFNTUiBjYWNoZVxuICovXG5Ba2lsaS5wcmVwYXJlU2VydmVyU2lkZVJlcXVlc3RDYWNoZSA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IGNhY2hlID0geyBfX21haW46IHJlcXVlc3QuX19jYWNoZSB9O1xuXG4gIGZvcihsZXQga2V5IGluIHJlcXVlc3QuX19pbnN0YW5jZXMpIHtcbiAgICBjYWNoZVtrZXldID0gcmVxdWVzdC5fX2luc3RhbmNlc1trZXldLl9fY2FjaGU7XG4gIH1cblxuICByZXR1cm4gY2FjaGU7XG59XG5cbi8qKlxuICogRGVpbml0aWFsaXplIHRoZSBhcHBsaWNhdGlvblxuICovXG5Ba2lsaS5kZWluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY2xlYXJHbG9iYWxzKCk7XG4gIHJvdXRlci5kZWluaXQoKTtcbiAgcmVxdWVzdC5kZWluaXQoKTtcbiAgbGV0IHN0b3JlS2V5cyA9IE9iamVjdC5rZXlzKHN0b3JlLl9fdGFyZ2V0KTtcbiAgXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBzdG9yZUtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZGVsZXRlIHN0b3JlLl9fdGFyZ2V0W3N0b3JlS2V5c1tpXV07XG4gIH1cblxuICB0aGlzLnNldERlZmF1bHRzKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBa2lsaTtcbndpbmRvdy5Ba2lsaSA9IEFraWxpO1xuQWtpbGkuc2V0RGVmYXVsdHMoKTsiLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlci5qcydcblxuLyoqXG4gKiBUaGUgb2JqZWN0IHdpdGggYSBsb3Qgb2YgdXNlZnVsIGZ1bmN0aW9uc1xuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3V0aWxzfVxuICovXG5jb25zdCB1dGlscyA9IHt9O1xuXG4vKipcbiAqIENyZWF0ZSB0aGUgY2xhc3MgYXR0cmlidXRlIGZyb20gdGhlIG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwicmVkIGFjdGl2ZVwiXG4gKiB1dGlscy5jbGFzcyh7cmVkOiB0cnVlLCBhY3RpdmU6IHRydWUsIGdyZWVuOiBmYWxzZX0pO1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmNsYXNzID0gZnVuY3Rpb24gKG9iaikge1xuICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGxldCBjbGFzc2VzID0gW107XG4gIGxldCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGsgPSBrZXlzW2ldO1xuICAgIGxldCB2YWwgPSBvYmpba107XG4gICAgdmFsICYmIGNsYXNzZXMucHVzaChrKTtcbiAgfVxuXG4gIHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBzdHlsZSBhdHRyaWJ1dGUgZnJvbSB0aGUgb2JqZWN0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJjb2xvcjpyZWQ7d2lkdGg6MTBweFwiXG4gKiB1dGlscy5zdHlsZSh7Y29sb3I6IFwicmVkXCIsIGJhY2tncm91bmQ6IGZhbHNlLCB3aWR0aDogXCIxMHB4XCJ9KTtcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5zdHlsZSA9IGZ1bmN0aW9uKG9iaikge1xuICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGxldCBzdHlsZXMgPSBbXTtcbiAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgayA9IGtleXNbaV07XG4gICAgbGV0IHZhbCA9IG9ialtrXTtcbiAgICB2YWwgJiYgc3R5bGVzLnB1c2goYCR7dGhpcy50b0Rhc2hDYXNlKGspfToke3ZhbH1gKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZXMuam9pbignOycpO1xufTtcblxuLyoqXG4gKiBTcGxpdCB0aGUgc3RyaW5nIGV4dGVuZGVkXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFtcIkhlbGxvXCIsIFwiV29ybGRcIl1cbiAqIHV0aWxzLnNwbGl0KFwiSGVsbG8gV29ybGRcIiwgXCIgXCIpO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbJ3ggPSA1JywgJyB5ID0gXCIxOzI7M1wiJ11cbiAqIHV0aWxzLnNwbGl0KCd4ID0gNTsgeSA9IFwiMTsyOzNcIicsIFwiO1wiLCBbJ1wiJ10pO1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ3xSZWdFeHB9IHN0ciBcbiAqIEBwYXJhbSB7c3RyaW5nfSBbZGVsXVxuICogQHBhcmFtIHtzdHJpbmdbXX0gW2V4Y2x1ZGVdIFxuICovXG51dGlscy5zcGxpdCA9IGZ1bmN0aW9uKHN0ciwgZGVsID0gJycsIGV4Y2x1ZGUgPSBbXSkge1xuXHRjb25zdCBleHBzID0gW107ICAgICBcbiAgbGV0IGxhc3QgPSAnJztcblxuICBpZighZGVsKSB7XG4gICAgcmV0dXJuIHN0ci5zcGxpdCgnJyk7XG4gIH1cbiAgZWxzZSBpZihkZWwgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICByZXR1cm4gc3RyLnNwbGl0KGRlbCk7XG4gIH1cbiAgZWxzZSBpZihzdHIuaW5kZXhPZihkZWwpID09IC0xKSB7XG4gICAgbGFzdCA9IHN0cjtcbiAgfVxuICBlbHNlIHtcbiAgICBjb25zdCBhcnIgPSBzdHIuc3BsaXQoJycpO1xuICAgIGxldCBvcGVuID0gJyc7IFxuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCB2YWwgPSBhcnJbaV07XG4gICAgICBsZXQgaW5kZXggPSBleGNsdWRlLmluZGV4T2YodmFsKTsgICAgICBcblxuICAgICAgaWYoaW5kZXggPiAtMSAmJiAoIW9wZW4gfHwgb3BlbiA9PSB2YWwpKSB7XG4gICAgICAgICFvcGVuPyBvcGVuID0gZXhjbHVkZVtpbmRleF06IG9wZW4gPSAnJztcbiAgICAgIH1cblxuICAgICAgaWYodmFsID09IGRlbCAmJiAhb3Blbikge1xuICAgICAgICBleHBzLnB1c2gobGFzdCk7XG4gICAgICAgIGxhc3QgPSAnJztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGxhc3QgKz0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGxhc3QgJiYgZXhwcy5wdXNoKGxhc3QpO1xuICByZXR1cm4gZXhwcztcbn1cblxuLyoqXG4gKiBGaWx0ZXIgdGhlIGFycmF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWzEsIDExXVxuICogdXRpbHMuZmlsdGVyKFsxLCAyLCAzLCAxMV0sICcxJyk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxfSwge3g6IDExfV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IDF9LCB7eDogMn0sIHt4OiAzfSwge3g6IDExfV0sICcxJywgJ3gnKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxfSwge3g6IDExfV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IDF9LCB7eDogMn0sIHt4OiAzfSwge3g6IDExfV0sICcxJywgWyd4J10pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDF9LCB7eDogMTF9XVxuICogdXRpbHMuZmlsdGVyKFt7eDogMX0sIHt4OiAyfSwge3g6IDN9LCB7eDogMTF9XSwgJzEnLCBbWyd4J11dKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiB7eTogMX19XVxuICogdXRpbHMuZmlsdGVyKFt7eDoge3k6IDF9fSwge3g6IHt5OiAyfX1dLCAnMScsIFtbJ3gnLCAneSddXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoxLCB5OiAyfSwge3g6IDIsIHk6MX1dIFxuICogdXRpbHMuZmlsdGVyKFt7eDogMSwgeTogMn0sIHt4OiAzLCB5OiAzfSwge3g6IDIsIHk6IDF9XSwgJzEnLCBbJ3gnLCAneSddKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OjEsIHk6IDJ9LCB7eDogMiwgeToxfV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IDEsIHk6IDJ9LCB7eDogMywgeTogM30sIHt4OiAyLCB5OiAxfV0sICcxJywgW1sneCddLCBbJ3knXV0pO1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfGZ1bmN0aW9ufSBoYW5kbGVyIC0gdHlwZSBvZiB0aGUgZmlsdGVyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ1tdfHN0cmluZ30gW2tleXNdIC0gZmlsdGVyIGJ5IHRoZSBrZXlzXG4gKiBAcmV0dXJucyB7QXJyYXl9IFxuICovXG51dGlscy5maWx0ZXIgPSBmdW5jdGlvbiAoYXJyLCBoYW5kbGVyLCBrZXlzID0gbnVsbCkge1xuICBsZXQgcmVzID0gW107XG5cbiAgaWYgKGtleXMgJiYgIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICBrZXlzID0gW2tleXNdO1xuICB9XG5cbiAgaWYodHlwZW9mIGhhbmRsZXIgIT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHN0ciA9IGhhbmRsZXI/IChoYW5kbGVyICsgJycpLnRvTG93ZXJDYXNlKCk6ICcnO1xuICAgIGhhbmRsZXIgPSB2YWwgPT4gKHZhbD8gKHZhbCArICcnKS50b0xvd2VyQ2FzZSgpOiAnJykubWF0Y2goc3RyKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBpdGVtID0gYXJyW2ldO1xuICAgIGxldCBmaWx0ZXJlZCA9IGZhbHNlO1xuXG4gICAgaWYoIWtleXMgJiYgaGFuZGxlcihpdGVtKSkge1xuICAgICAgZmlsdGVyZWQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmKGtleXMpIHtcbiAgICAgIGZvcihsZXQgayA9IDAsIGMgPSBrZXlzLmxlbmd0aDsgayA8IGM7IGsrKykge1xuICAgICAgICBsZXQga2V5ID0ga2V5c1trXTtcbiAgICAgICAga2V5ID0gQXJyYXkuaXNBcnJheShrZXkpPyBrZXk6IFtrZXldO1xuICAgICAgICBsZXQgdmFsID0ga2V5PyB0aGlzLmdldFByb3BlcnR5QnlLZXlzKGtleSwgaXRlbSk6IGl0ZW07XG4gICAgXG4gICAgICAgIGlmIChoYW5kbGVyKHZhbCkpIHtcbiAgICAgICAgICBmaWx0ZXJlZCA9IHRydWU7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmaWx0ZXJlZCAmJiByZXMucHVzaChpdGVtKTsgICBcbiAgfVxuXG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIFNvcnQgdGhlIGFycmF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWzEsIDIsIDNdXG4gKiB1dGlscy5zb3J0KFszLCAyLCAxXSwgdHJ1ZSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWzMsIDIsIDFdXG4gKiB1dGlscy5zb3J0KFsxLCAyLCAzXSwgZmFsc2UpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XVxuICogdXRpbHMuc29ydChbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV0sIFtbJ3gnXV0sIFt0cnVlXSk7XG4gKiB1dGlscy5zb3J0KFt7eDogM30sIHt4OiAyfSwge3g6IDF9XSwgWyd4J10sIHRydWUpO1xuICogdXRpbHMuc29ydChbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV0sICd4Jyk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dXG4gKiB1dGlscy5zb3J0KFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XSwgW1sneCddXSwgW2ZhbHNlXSk7XG4gKiB1dGlscy5zb3J0KFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XSwgWyd4J10sIGZhbHNlKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dLCAneCcsIGZhbHNlKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDEsIHk6IDN9LCB7eDogMiwgeTogMX0sIHt4OjIsIHk6IDJ9XVxuICogdXRpbHMuc29ydChbe3g6IDIsIHk6IDJ9LCB7eDogMiwgeTogMX0sIHt4OiAyLCB5OiAzfV0sIFtbJ3gnXSwgWyd5J11dLCBbdHJ1ZSwgdHJ1ZV0pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IHt5OiAxfX0sIHt4OiB7eTogMn19XVxuICogdXRpbHMuc29ydChbe3g6IHt5OiAyfX0sIHt4OiB7eTogMX19XSwgW1sneCcsICd5J11dLCBbdHJ1ZV0pO1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICogQHBhcmFtIHtib29sZWFufEFycmF5W118c3RyaW5nW118c3RyaW5nfSBba2V5c11cbiAqIEBwYXJhbSB7Ym9vbGVhbnxib29sZWFuW119IFtvcmRlcl0gLSByZXZlcnNlIG9yIG5vdFxuICogQHJldHVybnMge0FycmF5fVxuICovXG51dGlscy5zb3J0ID0gZnVuY3Rpb24oYXJyLCBrZXlzID0gdHJ1ZSwgb3JkZXIgPSBbXSkge1xuICBhcnIgPSBhcnIuc2xpY2UoKTtcblxuICBpZiAoa2V5cyA9PT0gdHJ1ZSkge1xuICAgIGtleXMgPSBbXTtcbiAgICBvcmRlciA9IFt0cnVlXTtcbiAgfVxuICBlbHNlIGlmIChrZXlzID09PSBmYWxzZSkge1xuICAgIGtleXMgPSBbXTtcbiAgICBvcmRlciA9IFtmYWxzZV07XG4gIH1cblxuICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICBrZXlzID0gW2tleXNdO1xuICB9XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KG9yZGVyKSkge1xuICAgIG9yZGVyID0gW29yZGVyXTtcbiAgfVxuXG4gIGxldCBsID0ga2V5cy5sZW5ndGg7XG5cbiAgYXJyLnNvcnQoKGEsIGIpID0+IHtcbiAgICBsZXQgaSA9IDA7XG5cbiAgICBjb25zdCBjaGVjayA9IChhLCBiLCByZXZlcnNlID0gZmFsc2UpID0+IHtcbiAgICAgIGlmIChhIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBhID0gYS5nZXRUaW1lKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChiIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBiID0gYi5nZXRUaW1lKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhID4gYikge1xuICAgICAgICByZXR1cm4gcmV2ZXJzZT8gLTE6IDE7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChhIDwgYikge1xuICAgICAgICByZXR1cm4gcmV2ZXJzZT8gMTogLTE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAwO1xuICAgIH07XG5cbiAgICBjb25zdCBuZXh0ID0gKCkgPT4ge1xuICAgICAgaWYgKGkgPj0gbCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cblxuICAgICAgbGV0IGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShrZXkpKSB7XG4gICAgICAgIGtleSA9IFtrZXldO1xuICAgICAgfVxuXG4gICAgICBsZXQgYVYgPSB0aGlzLmdldFByb3BlcnR5QnlLZXlzKGtleSwgYSk7XG4gICAgICBsZXQgYlYgPSB0aGlzLmdldFByb3BlcnR5QnlLZXlzKGtleSwgYik7XG4gICAgICBsZXQgcmVzID0gY2hlY2soYVYsIGJWLCBvcmRlcltpXSA9PT0gZmFsc2UpO1xuXG4gICAgICBpZiAocmVzICE9PSAwKSB7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9XG5cbiAgICAgIGkrKztcbiAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgfTtcblxuICAgIGlmICghbCkge1xuICAgICAgcmV0dXJuIGNoZWNrKGEsIGIsIG9yZGVyW2ldID09PSBmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8qKlxuICogUmV0dXJuIGEgbmV3IG9iamVjdCB3aXRoIHRoZSBzcGVjaWZpZWQga2V5c1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB7eDogMSwgejogMX1cbiAqIHV0aWxzLmluY2x1ZGVLZXlzKHt4OiAxLCB5OiAxLCB6OiAxfSwgWyd4JywgJ3onXSk7XG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqL1xudXRpbHMuaW5jbHVkZUtleXMgPSBmdW5jdGlvbihvYmosIGtleXMpIHtcbiAgbGV0IG5ld09iaiA9IHt9O1xuICBsZXQgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IG9iaktleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGtleSA9IG9iaktleXNbaV07XG5cbiAgICBpZihrZXlzLmluZGV4T2Yoa2V5KSAhPSAtMSkge1xuICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG4vKipcbiAqIFJldHVybiBhIG5ldyBvYmplY3Qgd2l0aG91dCB0aGUgc3BlY2lmaWVkIGtleXNcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMge3g6IDEsIHo6IDF9XG4gKiB1dGlscy5pbmNsdWRlS2V5cyh7eDogMSwgeTogMSwgejogMX0sIFsneSddKTtcbiAqIFxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICovXG51dGlscy5leGNsdWRlS2V5cyA9IGZ1bmN0aW9uKG9iaiwga2V5cykge1xuICBsZXQgbmV3T2JqID0ge307XG4gIGxldCBvYmpLZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICBmb3IobGV0IGkgPSAwLCBsID0gb2JqS2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQga2V5ID0gb2JqS2V5c1tpXTtcblxuICAgIGlmKGtleXMuaW5kZXhPZihrZXkpID09IC0xKSB7XG4gICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbi8qKlxuICogQ2hlY2sgdGhlIHZhbHVlIGlzIHRoZSBzY29wZSBwcm94eSBvYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmlzU2NvcGVQcm94eSA9IGZ1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gISEodmFsICYmIHR5cGVvZiB2YWwgPT0gJ29iamVjdCcgJiYgdmFsLl9faXNQcm94eSk7XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSB2YWx1ZSBpcyBhIHBsYWluIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaXNQbGFpbk9iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuICByZXR1cm4gISEob2JqICYmIHR5cGVvZiBvYmogPT0gJ29iamVjdCcgJiYgKG9iai5jb25zdHJ1Y3RvciA9PSBPYmplY3QgfHwgb2JqLmNvbnN0cnVjdG9yID09IEFycmF5KSk7XG59O1xuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9uc10gXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuY29weSA9IGZ1bmN0aW9uKHZhbHVlLCBvcHRpb25zID0ge30pIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCAhdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBvcHRpb25zID0geyBuZXN0ZWQ6IHRydWUsIGVudW1lcmFibGU6IHRydWUsIHBsYWluOiBmYWxzZSwgLi4ub3B0aW9ucyB9O1xuXG4gIGNvbnN0IG5leHQgPSAob2JqKSA9PiB7XG4gICAgaWYob3B0aW9ucy5wbGFpbiAmJiAhdGhpcy5pc1BsYWluT2JqZWN0KG9iaikpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgb2JqID0gdGhpcy5pc1Njb3BlUHJveHkob2JqKT8gb2JqLl9fdGFyZ2V0OiBvYmo7XG4gICAgbGV0IGtleXMgPSAhb3B0aW9ucy5lbnVtZXJhYmxlPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopOiBPYmplY3Qua2V5cyhvYmopO1xuICAgIGxldCBuZXdPYmogPSBBcnJheS5pc0FycmF5KG9iaik/IFtdOiB7fTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgIGxldCB2YWwgPSBvYmpba2V5XTtcbiAgICAgIHZhbCA9IHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnICYmIG9wdGlvbnMubmVzdGVkPyBuZXh0KHZhbCk6IHZhbDsgICAgICBcbiAgICAgIFxuICAgICAgaWYoIW9iai5wcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwge1xuICAgICAgICAgIC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpLFxuICAgICAgICAgIHZhbHVlOiB2YWxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIG5ld09ialtrZXldID0gdmFsOyAgXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld09iajtcbiAgfVxuXG4gIHJldHVybiBuZXh0KHZhbHVlKTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHRoZSBhdHRyaWJ1dGUgdmFsdWUgdG8gdGhlIGFwcHJvcHJpYXRlIGZvcm1hdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5tYWtlQXR0cmlidXRlVmFsdWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IGZhbHNlIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBFdmVudEVtaXR0ZXIpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgRXZlbnRdJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiAnW29iamVjdCBGdW5jdGlvbl0nO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlICsgJyc7XG59O1xuXG4vKipcbiAqIENvbXBhcmUgdHdvIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7Kn0gYVxuICogQHBhcmFtIHsqfSBiXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuY29tcGFyZSA9IGZ1bmN0aW9uIChhLCBiLCBvcHRpb25zID0ge30pIHtcbiAgaWYgKChhIGluc3RhbmNlb2YgRGF0ZSkgJiYgKGIgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgIHJldHVybiBhLmdldFRpbWUoKSA9PT0gYi5nZXRUaW1lKCk7XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIGEgPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgYiA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGEudG9TdHJpbmcoKSA9PT0gYi50b1N0cmluZygpO1xuICB9XG4gIGVsc2UgaWYgKHR5cGVvZiBhID09ICdvYmplY3QnICYmIHR5cGVvZiBiID09ICdvYmplY3QnKSB7XG4gICAgaWYgKGEgPT09IG51bGwgfHwgYiA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGEgPT09IGI7XG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgaWdub3JlVW5kZWZpbmVkOiB0cnVlLCAuLi5vcHRpb25zIH07XG5cbiAgICBjb25zdCBjbGVhclVuZGVmaW5lZCA9ICh2YWwpID0+IHtcbiAgICAgIGxldCBvYmogPSBBcnJheS5pc0FycmF5KHZhbCk/IFtdOiB7fTtcbiAgICAgIGxldCBrZXlzID0gIW9wdGlvbnMuZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoKTogT2JqZWN0LmtleXModmFsKTtcblxuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICB2YWxba2V5XSAhPT0gdW5kZWZpbmVkICYmIChvYmpba2V5XSA9IHZhbFtrZXldKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGlmKG9wdGlvbnMuaWdub3JlVW5kZWZpbmVkKSB7XG4gICAgICBhID0gY2xlYXJVbmRlZmluZWQoYSk7XG4gICAgICBiID0gY2xlYXJVbmRlZmluZWQoYik7XG4gICAgfVxuXG4gICAgbGV0IGFLZXlzID0gIW9wdGlvbnMuZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoKTogT2JqZWN0LmtleXMoYSk7XG4gICAgbGV0IGJLZXlzID0gIW9wdGlvbnMuZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoKTogT2JqZWN0LmtleXMoYik7XG4gICAgXG4gICAgaWYgKGFLZXlzLmxlbmd0aCAhPSBiS2V5cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBhID0gdGhpcy5pc1Njb3BlUHJveHkoYSk/IGEuX190YXJnZXQ6IGE7XG4gICAgYiA9IHRoaXMuaXNTY29wZVByb3h5KGIpPyBiLl9fdGFyZ2V0OiBiO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGFLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY29uc3Qga2V5ID0gYUtleXNbaV07XG5cbiAgICAgIGlmICghdGhpcy5jb21wYXJlKGFba2V5XSwgYltrZXldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gYSA9PT0gYjtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgaGFzaCBmcm9tIHRoZSBzdHJpbmdcbiAqIFxuICogQHBhcmFtIHsqfSBzb3VyY2VcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmNyZWF0ZUhhc2ggPSBmdW5jdGlvbihzb3VyY2UpIHtcbiAgdHlwZW9mIHNvdXJjZSA9PSAnb2JqZWN0JyAmJiAoc291cmNlID0gSlNPTi5zdHJpbmdpZnkoc291cmNlKSlcbiAgdHlwZW9mIHNvdXJjZSAhPSAnc3RyaW5nJyAmJiAoc291cmNlID0gJ+KggCcgKyBTdHJpbmcoc291cmNlKSk7XG4gIGxldCBoYXNoID0gMDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNvdXJjZS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBjaGFyID0gc291cmNlLmNoYXJDb2RlQXQoaSk7XG4gICAgaGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgY2hhcjtcbiAgICBoYXNoID0gaGFzaCAmIGhhc2g7XG4gIH1cblxuICByZXR1cm4gaGFzaCArICcnO1xufVxuXG4vKipcbiAqIEVuY29kZSB0aGUgaHRtbCBlbnRpdGllc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwieW91ICZhbXAgbWVcIlxuICogdXRpbHMuZW5jb2RlSHRtbEVudGl0aWVzKCd5b3UgJiBtZScpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBodG1sXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5lbmNvZGVIdG1sRW50aXRpZXMgPSBmdW5jdGlvbihodG1sKSB7XG4gIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB2YWx1ZTtcbiAgZWwudGV4dENvbnRlbnQgPSBodG1sO1xuICB2YWx1ZSA9IGVsLmlubmVySFRNTDtcbiAgZWwucmVtb3ZlKCk7XG4gIGVsID0gbnVsbDtcbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuLyoqXG4gKiBEZWNvZGUgdGhlIGh0bWwgZW50aXRpZXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcInlvdSAmIG1lXCJcbiAqIHV0aWxzLmRlY29kZUh0bWxFbnRpdGllcygneW91ICZhbXAgbWUnKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuZGVjb2RlSHRtbEVudGl0aWVzID0gZnVuY3Rpb24oaHRtbCkge1xuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGxldCB2YWx1ZTtcbiAgZWwuaW5uZXJIVE1MID0gaHRtbDtcbiAgdmFsdWUgPSBlbC52YWx1ZTtcbiAgZWwucmVtb3ZlKCk7XG4gIGVsID0gbnVsbDtcbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0IHRoZSBzdHJpbmcgZnJvbSBhIGRhc2ggdG8gYSBjYW1lbCBjYXNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMudG9DYW1lbENhc2UgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXFcrKC4pL2csIChtLCBjKSA9PiBjLnRvVXBwZXJDYXNlKCkpO1xufTtcblxuLyoqXG4gKiBDYXBpdGFsaXplIHRoZSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5jYXBpdGFsaXplID0gZnVuY3Rpb24oc3RyKSB7XG4gIHJldHVybiBzdHJbMF0udG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn07XG5cbi8qKlxuICogQ29udmVydCB0aGUgc3RyaW5nIGZyb20gYSBjYW1lbCB0byBhIGRhc2ggY2FzZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnRvRGFzaENhc2UgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIChtLCBjKSA9PiBgLSR7Yy50b0xvd2VyQ2FzZSgpfWApO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIG5lc3RlZCBvYmplY3QgcHJvcGVydHkgYnkgYXJyYXkga2V5c1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIDVcbiAqIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuZ2V0UHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QpIHtcbiAgbGV0IGN1cnJlbnQ7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKChvLCBrKSA9PiB7XG4gICAgaSsrO1xuXG4gICAgaWYgKHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gbztcbiAgICB9XG5cbiAgICBpZiAob1trXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgKGkgPT0gbGVuZ3RoKSAmJiAoY3VycmVudCA9IG9ba10pO1xuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiBjdXJyZW50O1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgb2JqZWN0IG5lc3RlZCBwcm9wZXJ0eSBleGlzdGVuY2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB0cnVlXG4gKiB1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0KSB7XG4gIGxldCBoYXMgPSBmYWxzZTtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoKG8sIGspID0+IHtcbiAgICBpKys7XG5cbiAgICBpZiAoIW8gfHwgdHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiAhIW87XG4gICAgfVxuXG4gICAgaWYgKCFvLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgKGkgPT0gbGVuZ3RoKSAmJiAoaGFzID0gby5oYXNPd25Qcm9wZXJ0eShrKSk7XG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIGhhcztcbn07XG5cbi8qKlxuICogU2V0IHRoZSBvYmplY3QgbmVzdGVkIHByb3BlcnR5IHZhbHVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMge3k6IDZ9XG4gKiB1dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSwgKGxhc3QsIHZhbCkgPT4gbGFzdD8gNjogKHZhbCB8fCB7fSkpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuc2V0UHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QsIGZuKSB7XG4gIGxldCBjdXJyZW50ID0gdW5kZWZpbmVkO1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZSgobywgaykgPT4ge1xuICAgIGkrKztcblxuICAgIGlmICghbyB8fCB0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghby5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgb1trXSA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBvW2tdID0gZm4oaSA9PSBsZW5ndGgsIG9ba10pO1xuICAgIGN1cnJlbnQgPSBvO1xuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiBjdXJyZW50O1xufTtcblxuLyoqXG4gKiBEZWxldGUgdGhlIHByb3BlcnR5IGZyb20gdGhlIG9iamVjdFxuICogWW91IGNhbiBjYW5jZWwgdGhlIGRlbGV0aW9uIHJldHVybmluZyBmYWxzZSBpbiB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyA1XG4gKiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSk7XG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyA1XG4gKiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSwgdmFsID0+IHZhbCAhPSA1KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbZm5dXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QsIGZuKSB7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IHZhbHVlO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoKG8sIGspID0+IHtcbiAgICBpKys7XG5cbiAgICBpZiAoIW8gfHwgdHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBpZiAoaSA9PSBsZW5ndGgpIHtcbiAgICAgIHZhbHVlID0gb1trXTtcbiAgICAgICghZm4gfHwgZm4odmFsdWUpKSAmJiAoZGVsZXRlIG9ba10pO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgdGFyZ2V0IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cblxudXRpbHMuZ2V0RW51bWVyYWJsZVByb3BlcnR5VGFyZ2V0ID0gZnVuY3Rpb24odGFyZ2V0LCBrZXkpIHtcbiAgY29uc3QgY2hlY2sgPSAob2JqKSA9PiB7XG4gICAgaWYgKG9iai5wcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGxldCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuXG4gICAgaWYgKCFwcm90bykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoZWNrKHByb3RvKTtcbiAgfTtcblxuICByZXR1cm4gY2hlY2sodGFyZ2V0KTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBvd24gcHJvcGVydHkgdGFyZ2V0IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnV0aWxzLmdldE93blByb3BlcnR5VGFyZ2V0ID0gZnVuY3Rpb24odGFyZ2V0LCBrZXkpIHtcbiAgY29uc3QgY2hlY2sgPSAob2JqKSA9PiB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGxldCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuXG4gICAgaWYgKCFwcm90bykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoZWNrKHByb3RvKTtcbiAgfTtcblxuICByZXR1cm4gY2hlY2sodGFyZ2V0KTtcbn07XG5cbi8qKlxuICogR2VuZXJhdGUgYSByYW5kb20gc3RyaW5nXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5jcmVhdGVSYW5kb21TdHJpbmcgPSBmdW5jdGlvbihsZW5ndGggPSAxNiwgZm4gPSBudWxsKSB7XG4gIGxldCBzdHIgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgbGVuZ3RoICsgMik7XG4gIGxldCBub3cgPSBEYXRlLm5vdygpO1xuICBsZXQgdmFsID0gJyc7ICBcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHN0ci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoIShub3cgJSBpKSkge1xuICAgICAgdmFsICs9IHN0cltpXS50b1VwcGVyQ2FzZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhbCArPSBzdHJbaV07XG4gICAgfVxuICB9XG5cbiAgaWYgKGZuICYmIGZuKHZhbCkpIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVSYW5kb21TdHJpbmcobGVuZ3RoLCBmbik7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSBmdW5jdGlvbiB3aXRoIHRoZSBkZWJvdW5jZVxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXlcbiAqIEByZXR1cm5zIHtmbn1cbiAqL1xudXRpbHMuZGVib3VuY2UgPSBmdW5jdGlvbihmbiwgZGVsYXkgPSAwKSB7ICBcbiAgcmV0dXJuICgpID0+IHtcbiAgICBjbGVhclRpbWVvdXQoZm4uX19kZWJvdW5jZVRpbWVvdXQpO1xuICAgIGZuLl9fZGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmbigpO1xuICAgICAgY2xlYXJUaW1lb3V0KGZuLl9fZGVib3VuY2VUaW1lb3V0KTtcbiAgICAgIGRlbGV0ZSBmbi5fX2RlYm91bmNlVGltZW91dDtcbiAgICB9LCBkZWxheSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHV0aWxzOyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgZm9yIGVsZW1lbnRzIHdoaWNoIGhhdmUgYXN5bmMgYXR0cmlidXRlIGNvbnRlbnQuXHJcbiAqIFxyXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XHJcbiAqIFxyXG4gKiBAdGFnIHVybFxyXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXJsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgbWF0Y2hlcyA9ICdbdXJsXSc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcclxuICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG4gICAgdGhpcy51cmxBdHRyaWJ1dGUgPSAnc3JjJztcclxuICB9XHJcblxyXG4gIGNvbXBpbGVkKCkge1xyXG4gICAgdGhpcy5hdHRyKCd1cmwnLCB0aGlzLnNldFVybCk7XHJcbiAgfVxyXG5cclxuICBzZXRVcmwodXJsKSB7XHJcbiAgICB0aGlzLmF0dHJzW3RoaXMudXJsQXR0cmlidXRlXSA9IHVybDtcclxuICB9XHJcbn0iLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi9ha2lsaS5qcyc7XG5pbXBvcnQgU2NvcGUgZnJvbSAnLi9zY29wZS5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc2VydmljZXMvc3RvcmUuanMnO1xuaW1wb3J0IGdsb2JhbHMgZnJvbSAnLi9nbG9iYWxzLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcblxuZXhwb3J0IGNvbnN0IGV2YWx1YXRpb25SZWdleCA9IC9cXCR7KCgoPyFcXCR7KS4pKil9LztcbmV4cG9ydCBjb25zdCBldmFsdWF0aW9uUmVnZXhHbG9iYWwgPSBuZXcgUmVnRXhwKGV2YWx1YXRpb25SZWdleC5zb3VyY2UsIFwiZ1wiKTtcbmV4cG9ydCBjb25zdCBzeXN0ZW1BdHRyaWJ1dGVzID0gWydjb21wb25lbnQnLCAnc2NvcGUnLCAnbm8tc3NyJ107XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmcm9tIHdoaWNoIGFsbCBjb21wb25lbnRzIGFyZSBpbmhlcml0ZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gW107XG4gIHN0YXRpYyBldmVudHMgPSBbXTtcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gZmFsc2U7XG4gIHN0YXRpYyB0cmFuc3BhcmVudCA9IGZhbHNlO1xuICBzdGF0aWMgdGVtcGxhdGUgPSAnJztcbiAgc3RhdGljIHRlbXBsYXRlVXJsID0gJyc7XG4gIHN0YXRpYyBzY29wZSA9IG51bGw7XG5cbiAgLyoqXG4gICAqIERlZmluZSB0aGUgY29tcG9uZW50XG4gICAqL1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnY29tcG9uZW50JywgQ29tcG9uZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSB0aGUgZXhwcmVzc2lvblxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwcmVzc2lvblxuICAgKiBAcGFyYW0ge29iamVjdH0gW3ZhcnNdXG4gICAqL1xuICBzdGF0aWMgcGFyc2UoY29udGV4dCwgZXhwcmVzc2lvbiwgdmFyaWFibGVzID0ge30pIHtcbiAgICBjb25zdCBrZXlzID0gW107XG4gICAgY29uc3QgdmFycyA9IFtdO1xuICAgIGNvbnN0IGV4cHMgPSB1dGlscy5zcGxpdChleHByZXNzaW9uLCAnOycsIFsnXCInLCBcIidcIiwgJ2AnXSk7ICBcbiAgICBleHBzW2V4cHMubGVuZ3RoIC0gMV0gPSBgcmV0dXJuICR7ZXhwc1tleHBzLmxlbmd0aCAtIDFdfWA7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gdmFyaWFibGVzKSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgIHZhcnMucHVzaCh2YXJpYWJsZXNba2V5XSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbiguLi5rZXlzLCBgJHtleHBzLmpvaW4oJzsgJyl9YCkuYXBwbHkoY29udGV4dCwgdmFycyk7XG4gIH1cblxuICAvKiogXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWwgXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbc2NvcGVdIFxuICAgKi9cbiAgY29uc3RydWN0b3IoZWwsIHNjb3BlID0ge30pIHtcbiAgICBpZiAoIShlbCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBtdXN0IHBhc3MgYW4gaHRtbCBlbGVtZW50IHRvIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3JgKTtcbiAgICB9XG5cbiAgICB0aGlzLl9faXNNb3VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2lzQ29tcGlsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9faXNSZXNvbHZlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fcHJldmVudCA9IGZhbHNlO1xuICAgIHRoaXMuX19iaW5kaW5ncyA9IHt9O1xuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSBudWxsO1xuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IG51bGw7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IG51bGw7XG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IHt9O1xuICAgIHRoaXMuX19kaXNhYmxlU3RvcmVLZXlzID0ge307XG4gICAgdGhpcy5fX2Rpc2FibGVBdHRyS2V5cyA9IHt9O1xuICAgIHRoaXMuX19jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuX19wYXJlbnQgPSBudWxsO1xuICAgIHRoaXMuX19wYXJlbnRzID0gW107XG4gICAgdGhpcy5fX2NvbnRlbnQgPSAnJztcbiAgICB0aGlzLl9fYXR0cnMgPSB7fTtcbiAgICB0aGlzLl9fYXR0ckxpbmtzID0ge307XG4gICAgdGhpcy5fX3N0b3JlTGlua3MgPSB7fTtcbiAgICB0aGlzLl9fYXR0cmlidXRlT2YgPSBudWxsO1xuICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50ID0gdGhpcztcbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgdGhpcy5lbCA9IGVsO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgY29tcGlsYXRpb24gb3B0aW9ucyBcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGVDb21waWxhdGlvbk9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHsgXG4gICAgICBjaGVja0NoYW5nZXM6IGZhbHNlLCBcbiAgICAgIHNldEV2ZW50czogdHJ1ZSxcbiAgICAgIHNldFBhcmVudHM6IHRydWUsXG4gICAgICBzZXRCb29sZWFuQXR0cmlidXRlczogdHJ1ZSxcbiAgICAgIGRlZmluZUF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAuLi5vcHRpb25zIFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSByZWNvbXBpbGF0aW9uIG9wdGlvbnMgXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlUmVjb21waWxhdGlvbk9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHsgXG4gICAgICAuLi50aGlzLl9fY3JlYXRlQ29tcGlsYXRpb25PcHRpb25zKCksXG4gICAgICBzZXRFdmVudHM6IGZhbHNlLFxuICAgICAgc2V0UGFyZW50czogZmFsc2UsXG4gICAgICBkZWZpbmVBdHRyaWJ1dGVzOiBmYWxzZSxcbiAgICAgIC4uLm9wdGlvbnMgXG4gICAgfTtcbiAgfVxuIFxuICAvKipcbiAgICogUmVjb21waWxlIHRoZSBjb21wb25lbnRcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZWNvbXBpbGUob3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IHRydWU7IFxuICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50Ll9fZGlzYWJsZVByb3h5ID0ge307ICBcbiAgICB0aGlzLl9fY29tcGlsaW5nID0gdGhpcy5fX2NyZWF0ZVJlY29tcGlsYXRpb25PcHRpb25zKG9wdGlvbnMpOyAgICBcbiAgICB0aGlzLl9fY29tcGlsaW5nLnNldEV2ZW50cyAmJiB0aGlzLl9fc2V0RXZlbnRzKCk7XG4gICAgdGhpcy5fX2NvbXBpbGluZy5zZXRQYXJlbnRzICYmIHRoaXMuX19zZXRQYXJlbnRzKCk7XG4gICAgdGhpcy5fX2NvbXBpbGluZy5zZXRCb29sZWFuQXR0cmlidXRlcyAmJiB0aGlzLl9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKTtcbiAgICB0aGlzLl9fY29tcGlsaW5nLmRlZmluZUF0dHJpYnV0ZXMgJiYgdGhpcy5fX2RlZmluZUF0dHJpYnV0ZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZSgpIHtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0gdGhpcy5fX2NyZWF0ZUNvbXBpbGF0aW9uT3B0aW9ucygpOyBcbiAgICB0aGlzLl9faW5pdGlhbGl6ZSgpO1xuICAgIHRoaXMuX19zZXRFdmVudHMoKTtcbiAgICB0aGlzLl9fc2V0UGFyZW50cygpO1xuICAgIHRoaXMuX19zZXRCb29sZWFuQXR0cmlidXRlcygpO1xuICAgIHRoaXMuX19kZWZpbmVBdHRyaWJ1dGVzKCk7IFxuICAgIEFraWxpLmlzb2xhdGUoKCkgPT4gdGhpcy5jcmVhdGVkKHRoaXMuYXR0cnMpKTsgIFxuICB9XG5cbiAgLyoqXG4gICAqIENvbXBpbGUgdGhlIG5vZGVcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIF9fY29tcGlsZSgpIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuX19jb250cm9sQXR0cmlidXRlcyB8fCAhdGhpcy5fX2V2YWx1YXRlUGFyZW50O1xuICAgIGxldCBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgdGhpcy5fX2F0dHJpYnV0ZU9mID0gY29udHJvbD8gdGhpczogdGhpcy5fX2V2YWx1YXRlUGFyZW50Ll9fYWtpbGk7XG4gICAgXG4gICAgaWYgKCF0aGlzLl9fcmVjb21waWxpbmcgfHwgdGhpcy5fX2NvbXBpbGluZy5uZXdQYXJlbnQgfHwgdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzKSB7XG4gICAgICB0aGlzLl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKHRoaXMuZWwsIHRoaXMuX19hdHRyaWJ1dGVPZik7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGludGVycG9sYXRlID0gKGNoaWxkcmVuLCBwYXJlbnQpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PSAzICYmIHRoaXMuX19pbml0aWFsaXplTm9kZShjaGlsZCwgcGFyZW50KSkgeyAgICAgICAgICBcbiAgICAgICAgICB0aGlzLl9fZXZhbHVhdGVOb2RlKGNoaWxkLCB0aGlzLl9fY29tcGlsaW5nPyB0aGlzLl9fY29tcGlsaW5nLmNoZWNrQ2hhbmdlczogZmFsc2UpOyAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hpbGQubm9kZVR5cGUgPT0gMSAmJiAhY2hpbGQuX19ha2lsaSkge1xuICAgICAgICAgIHRoaXMuX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXMoY2hpbGQpO1xuICAgICAgICAgIGludGVycG9sYXRlKGNoaWxkLmNoaWxkTm9kZXMsIGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07ICAgIFxuXG4gICAgaW50ZXJwb2xhdGUodGhpcy5lbC5jaGlsZE5vZGVzLCB0aGlzLmVsKTtcbiAgICB0aGlzLl9faXNNb3VudGVkID0gdHJ1ZTtcbiAgICBsZXQgcmVzO1xuXG4gICAgaWYgKCF0aGlzLl9fcmVjb21waWxpbmcpIHtcbiAgICAgIHJlcyA9IEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uQ29tcGlsZWQgJiYgdGhpcy5hdHRycy5vbkNvbXBpbGVkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5jb21waWxlZCgpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlVXJsKSB7XG4gICAgICAgIHAgPSByZXF1ZXN0LmdldCh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlVXJsLCB7IGNhY2hlOiB0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlQ2FjaGUgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLl9fY29udGVudDtcbiAgICAgICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCByZXMuZGF0YSk7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX19jb250ZW50OyAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmVzID0gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0cnMub25SZWNvbXBpbGVkICYmIHRoaXMuYXR0cnMub25SZWNvbXBpbGVkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgICB0aGlzLnJlY29tcGlsZWQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLl9fcmVjb21waWxpbmcgPSBudWxsO1xuICAgIHRoaXMuX19jb21waWxpbmcgPSBudWxsO1xuXG4gICAgcmV0dXJuIHAudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLl9faXNDb21waWxlZCA9IHRydWU7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmUgdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgX19yZXNvbHZlKCkge1xuICAgIGlmICh0aGlzLl9faXNSZXNvbHZlZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmF0dHJzLm9uUmVzb2x2ZWQgJiYgdGhpcy5hdHRycy5vblJlc29sdmVkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShBa2lsaS5pc29sYXRlKCgpID0+IHRoaXMucmVzb2x2ZWQoKSkpLnRoZW4ocmVzID0+IHtcbiAgICAgIHRoaXMuX19pc1Jlc29sdmVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgY29tcG9uZW50XG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZSgpIHsgICAgXG4gICAgbGV0IHBhcmVudCA9IEFraWxpLmdldEFraWxpUGFyZW50cyh0aGlzLmVsLCBmYWxzZSk7ICAgICBcbiAgICBsZXQgU2NvcGUgPSB0aGlzLmNvbnN0cnVjdG9yLnNjb3BlIHx8IEFraWxpLlNjb3BlO1xuICAgIGxldCBzY29wZTtcbiAgICBsZXQgaXNSb290ID0gQWtpbGkuX19yb290ID09PSB0aGlzLmVsO1xuICAgIHRoaXMuZWwuX19ha2lsaSA9IHRoaXM7XG5cbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBzY29wZSA9IG5ldyBTY29wZSh0aGlzLmVsLmdldEF0dHJpYnV0ZSgnc2NvcGUnKSB8fCBBa2lsaS5jcmVhdGVTY29wZU5hbWUoKSwgdGhpcy5lbCwgdGhpcyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2NvcGUgPSBuZXcgU2NvcGUoaXNSb290PyAncm9vdCc6IEFraWxpLmNyZWF0ZVNjb3BlTmFtZSgpLCB0aGlzLmVsLCB0aGlzKTtcbiAgICAgIGlzUm9vdCAmJiAoQWtpbGkucm9vdCA9IHRoaXMpO1xuICAgIH1cblxuICAgIGxldCBfX3Njb3BlID0gc2NvcGU7XG4gICAgbGV0IF9zY29wZSA9IE9iamVjdC5hc3NpZ24oc2NvcGUsIHRoaXMuc2NvcGUpO1xuICAgIGxldCBjb250cm9sQXR0cmlidXRlcyA9IHRoaXMuY29uc3RydWN0b3IuY29udHJvbEF0dHJpYnV0ZXM7XG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuY29uc3RydWN0b3IuZXZlbnRzO1xuXG4gICAgaWYgKHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGUpIHtcbiAgICAgIEFraWxpLnNldFRlbXBsYXRlKHRoaXMuZWwsIHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlVXJsKSB7XG4gICAgICB0aGlzLl9fY29udGVudCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgICB9XG5cbiAgICB0aGlzLl9fc2NvcGUgPSBfX3Njb3BlO1xuICAgIHRoaXMuX19ldmVudHMgPSBldmVudHM7XG4gICAgdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzID0gY29udHJvbEF0dHJpYnV0ZXM7XG4gICAgQWtpbGkuYWRkU2NvcGUoc2NvcGUpOyAgICBcbiAgICB0aGlzLnNjb3BlID0gdGhpcy5fX25lc3RlZE9ic2VydmUoX3Njb3BlLCBbXSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBib29sZWFuIGF0dHJpYnV0ZXNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXRCb29sZWFuQXR0cmlidXRlcygpIHtcbiAgICB0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzID0gW10uY29uY2F0KEFraWxpLmh0bWxCb29sZWFuQXR0cmlidXRlcywgdGhpcy5jb25zdHJ1Y3Rvci5ib29sZWFuQXR0cmlidXRlcyk7XG5cbiAgICBjb25zdCBzZXRBdHRyID0gKGVsKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgYXR0cnMgPSBlbC5hdHRyaWJ1dGVzLCBsID0gYXR0cnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBub2RlID0gYXR0cnNbaV07XG5cbiAgICAgICAgaWYgKHRoaXMuYm9vbGVhbkF0dHJpYnV0ZXMuaW5kZXhPZihub2RlLm5vZGVOYW1lKSAhPSAtMSkge1xuICAgICAgICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoYGJvb2xlYW4tJHtub2RlLm5vZGVOYW1lfWApKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYGJvb2xlYW4tJHtub2RlLm5vZGVOYW1lfWAsIGVsLmdldEF0dHJpYnV0ZShub2RlLm5vZGVOYW1lKSB8fCBub2RlLm5vZGVOYW1lKTtcbiAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBlbC5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gZWwuY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYgKCFjaGlsZC5fX2FraWxpKSB7XG4gICAgICAgICAgc2V0QXR0cihjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2V0QXR0cih0aGlzLmVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGV2ZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldEV2ZW50cygpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuX19ldmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgZXYgPSB0aGlzLl9fZXZlbnRzW2ldO1xuICAgICAgIS9eb24tL2kudGVzdChldikgJiYgKGV2ID0gJ29uLScgKyBldik7XG5cbiAgICAgIGlmICghdGhpcy5lbC5oYXNBdHRyaWJ1dGUoZXYpKSB7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGV2LCAnJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgY29tcG9uZW50IHBhcmVudHNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXRQYXJlbnRzKCkge1xuICAgIGxldCBwYXJlbnRzID0gQWtpbGkuZ2V0QWtpbGlQYXJlbnRzKHRoaXMuZWwpO1xuXG4gICAgaWYgKCFwYXJlbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBuZXdQYXJlbnQgPSB0aGlzLl9fcGFyZW50ICE9PSBwYXJlbnRzWzBdO1xuICAgIGxldCBldmFsdWF0ZVBhcmVudCA9IG51bGw7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHBhcmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcGFyZW50ID0gcGFyZW50c1tpXTtcblxuICAgICAgaWYgKCFwYXJlbnQuX19ha2lsaS5jb25zdHJ1Y3Rvci50cmFuc3BhcmVudCkge1xuICAgICAgICBldmFsdWF0ZVBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fX2NvbXBpbGluZy5uZXdQYXJlbnQgPSBuZXdQYXJlbnQ7XG4gICAgbmV3UGFyZW50ICYmIHRoaXMuX19kZXRhY2goKTtcblxuICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLnRyYW5zcGFyZW50KSB7XG4gICAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudCA9IGV2YWx1YXRlUGFyZW50Ll9fYWtpbGk7XG4gICAgfVxuXG4gICAgdGhpcy5fX2V2YWx1YXRlUGFyZW50ID0gZXZhbHVhdGVQYXJlbnQ7XG4gICAgdGhpcy5fX3BhcmVudCA9IHBhcmVudHNbMF07XG4gICAgdGhpcy5fX3BhcmVudHMgPSBwYXJlbnRzO1xuICAgIHRoaXMuc2NvcGUuX19wYXJlbnQgPSB0aGlzLl9fZXZhbHVhdGVQYXJlbnQuX19ha2lsaS5zY29wZTtcbiAgICAhdGhpcy5fX3JlY29tcGlsaW5nICYmIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2FkZENoaWxkKHRoaXMuZWwpO1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLnNjb3BlLCB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19zY29wZSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIHRoZSBjaGlsZCBlbGVtZW50IHRvIHRoZSBsaXN0XG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hZGRDaGlsZChlbCkge1xuICAgIHRoaXMuX19jaGlsZHJlbi5wdXNoKGVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGxpY2UgdGhlIGNoaWxkIGZyb20gdGhlIGxpc3RcbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NwbGljZUNoaWxkKGVsKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLl9fY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLl9fY2hpbGRyZW5baV07XG5cbiAgICAgIGlmIChjaGlsZCA9PT0gZWwpIHtcbiAgICAgICAgdGhpcy5fX2NoaWxkcmVuLnNwbGljZShpLCAxKTtcbiAgICAgICAgaS0tO1xuICAgICAgICBsLS07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgcGFyc2VkIGV4cHJlc3Npb25cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4cHJlc3Npb25cbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0UGFyc2VkRXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIG5lZWQgb2YgdGhlIGF2YWx1YXRpb25cbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NoZWNrRXZhbHVhdGlvbihub2RlKSB7XG4gICAgaWYgKCFPYmplY3Qua2V5cyhub2RlLl9fcHJvcGVydGllcykubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBrIGluIG5vZGUuX19wcm9wZXJ0aWVzKSB7XG4gICAgICBpZiAoIW5vZGUuX19wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgcHJvcCA9IG5vZGUuX19wcm9wZXJ0aWVzW2tdO1xuICAgICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMocHJvcC5rZXlzLCBwcm9wLmNvbXBvbmVudC5fX3Njb3BlKTtcblxuICAgICAgaWYgKCFub2RlLl9fY29tcG9uZW50Ll9fY29tcGFyZU5vZGVQcm9wZXJ0eVZhbHVlKHByb3AsIHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIG5vZGUgcHJvcGVydGllcyBjaGFuZ2VcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jaGVja05vZGVQcm9wZXJ0eUNoYW5nZShub2RlLCBrZXlzLCB2YWx1ZSkge1xuICAgIGxldCBwcm9wID0gdGhpcy5fX2dldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKTtcbiAgICBcbiAgICBpZiAoIXByb3ApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiAhbm9kZS5fX2NvbXBvbmVudC5fX2NvbXBhcmVOb2RlUHJvcGVydHlWYWx1ZShwcm9wLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ29tcGFyZSB0aGUgbm9kZSBwcm9wZXJ0eSB2YWx1ZVxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IHByb3AgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY29tcGFyZU5vZGVQcm9wZXJ0eVZhbHVlKHByb3AsIHZhbHVlLCBvcHRpb25zID0ge30pIHsgIFxuICAgIHJldHVybiB1dGlscy5jb21wYXJlKHV0aWxzLmNyZWF0ZUhhc2godmFsdWUpLCBwcm9wLmhhc2gsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBleGNlcHRpb24gbWVzc2FnZVxuICAgKiBcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlIFxuICAgKiBAcGFyYW0ge0Vycm9yfSBlcnIgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlRXhjZXB0aW9uTWVzc2FnZShub2RlLCBlcnIpIHtcbiAgICBsZXQgdGFnTmFtZSA9IG5vZGUuX19jb21wb25lbnQuZWwudGFnTmFtZTtcbiAgICBsZXQgYXR0ck5hbWUgPSBub2RlLl9fY29tcG9uZW50LmVsLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50Jyk7XG4gICAgbGV0IGNvbXBvbmVudE5hbWUgPSAoYXR0ck5hbWUgfHwgdGFnTmFtZSkudG9Mb3dlckNhc2UoKTtcbiAgICBsZXQgZWxlbWVudE5hbWUgPSBub2RlLl9fZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgbGV0IGF0dHJpYnV0ZU5hbWUgPSAobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKT8gbm9kZS5uYW1lLnRvTG93ZXJDYXNlKCk6ICcnOyAgICAgICAgXG4gICAgbGV0IG1lc3NhZ2VzID0gWyBlcnIubWVzc2FnZSwgbm9kZS5fX2V4cHJlc3Npb24udHJpbSgpIF07XG4gICAgYXR0cmlidXRlTmFtZSAmJiBtZXNzYWdlcy5wdXNoKGBbYXR0cmlidXRlICR7YXR0cmlidXRlTmFtZX1dYCk7XG4gICAgbWVzc2FnZXMgPSBtZXNzYWdlcy5jb25jYXQoWyBgW2VsZW1lbnQgJHtlbGVtZW50TmFtZX1dYCwgYFtjb21wb25lbnQgJHtjb21wb25lbnROYW1lfV1gIF0pO1xuICAgIHJldHVybiBgRXhwcmVzc2lvbiBlcnJvcjogYCArIG1lc3NhZ2VzLmpvaW4oJ1xcblxcdGF0ICcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIHRoZSBub2RlIGV4cHJlc3Npb25cbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlKG5vZGUpIHtcbiAgICBsZXQgY291bnRlciA9IDA7XG4gICAgbGV0IGF0dHJpYnV0ZVZhbHVlO1xuICAgIGxldCBleHByZXNzaW9uO1xuICAgIGNvbnN0IGV2YWxDb21wb25lbnQgPSBub2RlLl9fYXR0cmlidXRlT2YgfHwgbm9kZS5fX2NvbXBvbmVudDtcblxuICAgIGlmIChub2RlLl9fY29tcG9uZW50LnBhcmVudHMoKGNvbSkgPT4gY29tLl9fcHJldmVudCkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4geyByZXM6IG5vZGUuX19leHByZXNzaW9uIH07XG4gICAgfVxuXG4gICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKSAmJiBub2RlLl9fY29tcG9uZW50Ll9fcHJldmVudCkge1xuICAgICAgcmV0dXJuIHsgcmVzOiBub2RlLl9fZXhwcmVzc2lvbiB9O1xuICAgIH1cbiAgICBcbiAgICBsZXQgcmVzID0gbm9kZS5fX2V4cHJlc3Npb24ucmVwbGFjZShldmFsdWF0aW9uUmVnZXhHbG9iYWwsIChtLCBkKSA9PiB7ICAgICBcbiAgICAgIGNvdW50ZXIrKztcbiAgICAgIGxldCBldmFsdWF0ZTtcbiAgICAgIGxldCBldmFsdWF0aW9uID0gW107XG4gICAgICBsZXQgZXhpc3RpbmdCaW5kaW5ncyA9IHt9O1xuICAgICAgbGV0IHBhcmVudEJpbmRpbmdzID0ge307XG4gICAgICBsZXQgcGFyc2VWYWx1ZSA9IG5vZGUuX19jb21wb25lbnQuX19nZXRQYXJzZWRFeHByZXNzaW9uKGQpO1xuICAgICAgQWtpbGkuX19ldmFsdWF0aW9uID0geyBub2RlOiBub2RlLCBsaXN0OiBbXSwgY29tcG9uZW50OiBub2RlLl9fY29tcG9uZW50IH07XG4gICAgICBcbiAgICAgIHRyeSB7ICAgICAgICBcbiAgICAgICAgZXZhbHVhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLnBhcnNlKGV2YWxDb21wb25lbnQuX19ldmFsdWF0aW9uQ29tcG9uZW50LnNjb3BlLCBwYXJzZVZhbHVlLCB7IC4uLmdsb2JhbHMgfSk7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZXJyKSB7ICAgICAgICBcbiAgICAgICAgdGhyb3cgdGhpcy5fX2NyZWF0ZUV4Y2VwdGlvbk1lc3NhZ2Uobm9kZSwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgaWYoQWtpbGkuX19ldmFsdWF0aW9uKSB7XG4gICAgICAgIGV2YWx1YXRpb24gPSBBa2lsaS5fX2V2YWx1YXRpb24ubGlzdDtcbiAgICAgICAgQWtpbGkuX19ldmFsdWF0aW9uLmxpc3QgPSBudWxsO1xuICAgICAgICBBa2lsaS5fX2V2YWx1YXRpb24gPSBudWxsO1xuICAgICAgfVxuICAgICAgXG4gICAgICBmb3IgKGxldCBpID0gZXZhbHVhdGlvbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBsZXQgZGF0YSA9IGV2YWx1YXRpb25baV07XG4gICAgICAgIGxldCBoYXNoID0gZGF0YS5jb21wb25lbnQuX19jcmVhdGVLZXlzSGFzaChkYXRhLmtleXMpO1xuICAgICAgICBsZXQgcGFyZW50c0hhc2ggPSBkYXRhLmNvbXBvbmVudC5fX2NyZWF0ZUtleXNIYXNoKGRhdGEucGFyZW50cyk7XG4gICAgICAgXG4gICAgICAgIGlmIChkYXRhLm5vdEJpbmRpbmcpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChleGlzdGluZ0JpbmRpbmdzW2hhc2hdKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcGFyZW50VmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhkYXRhLnBhcmVudHMsIGRhdGEuY29tcG9uZW50Ll9fc2NvcGUpOyAgICAgICAgXG5cbiAgICAgICAgaWYgKHBhcmVudFZhbHVlICYmIHR5cGVvZiBwYXJlbnRWYWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGlmIChBa2lsaS5vcHRpb25zLmRlYnVnICYmIHBhcmVudEJpbmRpbmdzW3BhcmVudHNIYXNoXSA9PSA1MCkge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihbXG4gICAgICAgICAgICAgIGBGb3IgaGlnaGVyIHBlcmZvcm1hbmNlLCBkb24ndCBsb29wIFByb3h5IGFycmF5cy9vYmplY3RzIGluc2lkZSBleHByZXNzaW9uIGZ1bmN0aW9ucywgb3IgdXNlIEFraWxpLnVuZXZhbHVhdGUoKSB0byB3cmFwIHlvdSBjb2RlLmAsXG4gICAgICAgICAgICAgIGAkeyBub2RlLl9fZXhwcmVzc2lvbi50cmltKCkgfWAsXG4gICAgICAgICAgICAgIGBzY29wZSBwcm9wZXJ0eSBcIiR7IGRhdGEucGFyZW50cy5qb2luKCcuJykgfVwiYFxuICAgICAgICAgICAgXS5qb2luKCdcXG5cXHRhdCAnKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICFwYXJlbnRCaW5kaW5nc1twYXJlbnRzSGFzaF0/IHBhcmVudEJpbmRpbmdzW3BhcmVudHNIYXNoXSA9IDE6IHBhcmVudEJpbmRpbmdzW3BhcmVudHNIYXNoXSsrO1xuICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIGlmIChcbiAgICAgICAgICB1dGlscy5pc1Njb3BlUHJveHkocGFyZW50VmFsdWUpICYmIFxuICAgICAgICAgIGRhdGEuY29tcG9uZW50ICE9PSBldmFsQ29tcG9uZW50Ll9fZXZhbHVhdGlvbkNvbXBvbmVudCAmJiBcbiAgICAgICAgICBkYXRhLmNvbXBvbmVudCA9PT0gZGF0YS5yZWFsQ29tcG9uZW50XG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9ICBcblxuICAgICAgICBkYXRhLmNvbXBvbmVudC5fX2JpbmRBbmRTZXRQcm9wZXJ0eShub2RlLCBkYXRhLmtleXMsIGRhdGEuZXZhbHVhdGVkKTtcbiAgICAgICAgZXhpc3RpbmdCaW5kaW5nc1toYXNoXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpIHtcbiAgICAgICAgZXhwcmVzc2lvbiA9IG07XG4gICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gZXZhbHVhdGU7XG4gICAgICAgIHJldHVybiB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUoZXZhbHVhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGV2YWx1YXRlID09ICdvYmplY3QnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGV2YWx1YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlKSB7XG4gICAgICAgICAgcmV0dXJuIGV2YWx1YXRlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBldmFsdWF0ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7IHJlcywgY291bnRlciwgZXhwcmVzc2lvbiwgYXR0cmlidXRlVmFsdWUgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIHRoZSBub2RlIGFuZCBzZXQgdGhlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2V2YWx1YXRlZF1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19iaW5kQW5kU2V0UHJvcGVydHkobm9kZSwga2V5cywgZXZhbHVhdGVkKSB7XG4gICAgbGV0IGJpbmQgPSB0aGlzLl9fZ2V0Qm91bmROb2RlKGtleXMsIG5vZGUpO1xuICAgIGxldCB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19zY29wZSk7XG5cbiAgICBpZiAoIWJpbmQpIHtcbiAgICAgIHRoaXMuX19iaW5kKGtleXMsIHsgbm9kZSB9KTtcbiAgICB9ICAgXG5cbiAgICB0aGlzLl9fc2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMsIHZhbHVlLCBldmFsdWF0ZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5lc3RlZCBldmFsdWF0aW9uIGJ5IHRoZSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtib29sZWFufSBbd2l0aG91dFBhcmVudHM9ZmFsc2VdIC0gaWYgdHJ1ZSBldmFsdWF0aW9uIHdpbGwgYmUgb25seSBmb3IgdGhlIGN1cnJlbnQga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlTmVzdGVkKGtleXMsIHdpdGhvdXRQYXJlbnRzID0gZmFsc2UpIHtcbiAgICBsZXQgc2NvcGUgPSB0aGlzLl9fc2NvcGU7XG4gICAgbGV0IHByb3BzID0gW107ICAgIFxuICAgIFxuICAgIGlmICghd2l0aG91dFBhcmVudHMpIHtcbiAgICAgIGxldCBsYXN0UHJvcHMgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgbGV0IHZhbHVlO1xuXG4gICAgICAgIGxhc3RQcm9wcyA9IFsuLi5sYXN0UHJvcHMsIGtleV07XG4gICAgICAgIHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMobGFzdFByb3BzLCBzY29wZSk7XG4gICAgICAgIHByb3BzLnB1c2goeyBrZXlzOiBsYXN0UHJvcHMsIHZhbHVlOiB2YWx1ZX0pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHByb3BzLnB1c2goeyBrZXlzOiBrZXlzLCB2YWx1ZTogdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgc2NvcGUpfSk7XG4gICAgfVxuXG4gICAgbGV0IHByb3BzTGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gICAgY29uc3QgZWxFdmFsdWF0ZSA9IChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBjb21wb25lbnQgPSBlbGVtZW50Ll9fYWtpbGk7ICAgICBcblxuICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCBwcm9wc0xlbmd0aDsgbSsrKSB7XG4gICAgICAgIGxldCBwcm9wID0gcHJvcHNbbV07XG4gICAgICAgIGxldCBkYXRhO1xuICAgICAgICBcbiAgICAgICAgaWYgKGNvbXBvbmVudCA9PT0gdGhpcykge1xuICAgICAgICAgIGxldCBiaW5kID0gY29tcG9uZW50Ll9fZ2V0QmluZChwcm9wLmtleXMpO1xuICAgICAgICAgIGRhdGEgPSBiaW5kPyAoYmluZC5fX2RhdGEgfHwgW10pOiBbXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkYXRhID0gY29tcG9uZW50Ll9fZ2V0QWxsQmluZHMocHJvcC5rZXlzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgayA9IDAsIGMgPSBkYXRhLmxlbmd0aDsgayA8IGM7IGsrKykge1xuICAgICAgICAgIGNvbnN0IGJpbmQgPSBkYXRhW2tdOyAgIFxuXG4gICAgICAgICAgaWYoIWJpbmQgfHwgIWJpbmQubm9kZSB8fCAhYmluZC5ub2RlLl9faW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBpZiAoY29tcG9uZW50Ll9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2UoYmluZC5ub2RlLCBwcm9wLmtleXMsIHByb3AudmFsdWUpKSB7ICBcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVLZXlzKHByb3Aua2V5cyk7ICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrUHJvcCA9IGNvbXBvbmVudC5fX2dldE5vZGVQcm9wZXJ0eShiaW5kLm5vZGUsIHByb3Aua2V5cyk7XG4gICAgICAgICAgICBjaGVja1Byb3AgJiYgY2hlY2tQcm9wLmV2YWx1YXRlZCAmJiBjb21wb25lbnQuc2NvcGUuX19zZXQocHJvcC5rZXlzLCBwcm9wLnZhbHVlLCBmYWxzZSwgdHJ1ZSk7IFxuICAgICAgICAgICAgY29tcG9uZW50Ll9fZXZhbHVhdGVOb2RlKGJpbmQubm9kZSwgZmFsc2UpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBfayBpbiBiaW5kLm5vZGUuX19wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgIGlmICghYmluZC5ub2RlLl9fcHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShfaykpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgbGV0IF9wcm9wID0gYmluZC5ub2RlLl9fcHJvcGVydGllc1tfa107XG4gICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKF9wcm9wLmtleXMsIF9wcm9wLmNvbXBvbmVudC5fX3Njb3BlKTtcbiAgICAgICAgICAgICAgX3Byb3AuY29tcG9uZW50Ll9fc2V0Tm9kZVByb3BlcnR5KGJpbmQubm9kZSwgX3Byb3Aua2V5cywgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb21wb25lbnQuX19lbmFibGVLZXlzKHByb3Aua2V5cyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGV2YWx1YXRlID0gKGVsZW1lbnRzKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gZWxFdmFsdWF0ZShlbGVtZW50c1tpXSk7XG4gICAgICAgIGV2YWx1YXRlKGNvbXBvbmVudC5fX2NoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZWxFdmFsdWF0ZSh0aGlzLmVsKTtcbiAgICBldmFsdWF0ZSh0aGlzLl9fY2hpbGRyZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIHRoZSB2YWx1ZSBieSB0aGUga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbaXNEZWxldGVkPWZhbHNlXSAtIHRydWUgaWYgdmFsdWUgaXMgZGVsZXRpbmdcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZUJ5S2V5cyAoa2V5cywgdmFsdWUsIGlzRGVsZXRlZCA9IGZhbHNlKSB7ICAgICBcbiAgICBsZXQgZGF0YSA9IHRoaXMuX19nZXRCaW5kKGtleXMpO1xuXG4gICAgY29uc3QgdW5iaW5kID0gKG9iaiwgcGFyZW50cykgPT4ge1xuICAgICAgZm9yIChsZXQgayBpbiBvYmopIHtcbiAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoaykgfHwgdGhpcy5fX2lzU3lzdGVtQmluZGluZ0tleShrKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IF9rZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrXSk7XG4gICAgICAgIGxldCBfX2tleXMgPSBfa2V5cy5zbGljZSgpO1xuICAgICAgICBsZXQgX2lzRGVsZXRlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgdmFsID0gb2JqW2tdO1xuICAgICAgICBsZXQgaGFzS2V5O1xuICAgICAgICBcbiAgICAgICAgX19rZXlzLnNoaWZ0KCk7XG4gICAgICAgIGhhc0tleSA9IHV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKF9fa2V5cywgdmFsdWUpO1xuXG4gICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgJiYgIWhhc0tleSkge1xuICAgICAgICAgIF9pc0RlbGV0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdW5iaW5kKHZhbCwgX2tleXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fX2V2YWx1YXRlTmVzdGVkKF9rZXlzLCB0cnVlKTtcblxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8ICFoYXNLZXkpIHtcbiAgICAgICAgICB0aGlzLl9fdW5iaW5kKF9rZXlzKTtcbiAgICAgICAgICBfaXNEZWxldGVkICYmIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKF9fa2V5cywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICBkYXRhICYmIHVuYmluZChkYXRhLCBbXS5jb25jYXQoa2V5cykpO1xuICAgIHRoaXMuX19ldmFsdWF0ZU5lc3RlZChrZXlzLCBmYWxzZSk7XG5cbiAgICBpZiAoaXNEZWxldGVkKSB7XG4gICAgICB0aGlzLl9fdW5iaW5kKGtleXMpO1xuICAgICAgaXNEZWxldGVkICYmIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19zY29wZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIHRoZSBldmVudCBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZUV2ZW50KG5vZGUsIGVsLCBlKSB7XG4gICAgbGV0IGV4cHJlc3Npb24gPSBldmFsdWF0aW9uUmVnZXguZXhlYyhub2RlLl9fZXhwcmVzc2lvbik7XG4gICAgbGV0IGV2YWx1YXRlO1xuXG4gICAgaWYgKCFleHByZXNzaW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fX2V2YWx1YXRpbmdFdmVudCA9IHtcbiAgICAgIGVsOiBlbCxcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIGV2ZW50OiBlLFxuICAgICAgbm9kZVxuICAgIH07XG5cbiAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0ge307XG5cbiAgICB0cnkge1xuICAgICAgZXZhbHVhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLnBhcnNlKHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50LnNjb3BlLCBleHByZXNzaW9uWzFdLCB7IC4uLmdsb2JhbHMsICBldmVudDogZSB9KTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikgeyAgICAgICAgXG4gICAgICB0aHJvdyB0aGlzLl9fY3JlYXRlRXhjZXB0aW9uTWVzc2FnZShub2RlLCBlcnIpO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLl9fZXZhbHVhdGluZ0V2ZW50ID0gbnVsbDtcbiAgICByZXR1cm4gZXZhbHVhdGU7XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgdGhlIG5vZGUgZXhwcmVzc2lvbiB3aXRoIGNoZWNrXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtjaGVja11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZU5vZGUobm9kZSwgY2hlY2sgPSB0cnVlKSB7XG4gICAgY29uc3Qga2V5ID0gbm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyPyAndmFsdWUnOiAnbm9kZVZhbHVlJzsgIFxuXG4gICAgaWYgKGNoZWNrPyB0aGlzLl9fY2hlY2tFdmFsdWF0aW9uKG5vZGUpOiB0cnVlKSB7IFxuICAgICAgY29uc3QgeyByZXMsIGF0dHJpYnV0ZVZhbHVlLCBleHByZXNzaW9uLCBjb3VudGVyIH0gPSB0aGlzLl9fZXZhbHVhdGUobm9kZSk7ICBcbiAgICAgIG5vZGVba2V5XSAhPSByZXMgJiYgKG5vZGVba2V5XSA9IHJlcyk7XG5cbiAgICAgIGlmIChub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gcmVzO1xuICAgICAgICBsZXQgaXNCb29sZWFuQXR0cmlidXRlID0gZmFsc2U7XG4gIFxuICAgICAgICBpZiAoY291bnRlciA9PSAxICYmIGV4cHJlc3Npb24gJiYgbm9kZS5fX2V4cHJlc3Npb24gPT0gZXhwcmVzc2lvbikge1xuICAgICAgICAgIHZhbHVlID0gYXR0cmlidXRlVmFsdWU7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGNvbnN0IGNsZWFyQXR0cmlidXRlID0gbm9kZS5ub2RlTmFtZS5yZXBsYWNlKC9eYm9vbGVhbi0oLispL2ksICckMScpO1xuICAgICAgICBjb25zdCBjYW1lbEF0dHJpYnV0ZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKGNsZWFyQXR0cmlidXRlKTtcbiAgXG4gICAgICAgIGlmIChjbGVhckF0dHJpYnV0ZSAhPSBub2RlLm5vZGVOYW1lKSB7XG4gICAgICAgICAgaXNCb29sZWFuQXR0cmlidXRlID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZSA9ICEhdmFsdWU7XG4gICAgICAgIH0gICAgICAgICAgXG4gIFxuICAgICAgICBpZiAobm9kZS5fX2F0dHJpYnV0ZU9uKSB7ICAgICAgICBcbiAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBub2RlLl9fYXR0cmlidXRlT247XG4gICAgICAgICAgdmFsdWUgPSBjb21wb25lbnQuX19wcmVwYXJlQXR0cmlidXRlSW4obm9kZSwgdmFsdWUpO1xuICAgICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSB0cnVlO1xuICAgICAgICAgIGNvbXBvbmVudC5hdHRyc1tjYW1lbEF0dHJpYnV0ZV0gPSB2YWx1ZTtcbiAgICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gZmFsc2U7XG4gIFxuICAgICAgICAgIGlmIChjb21wb25lbnQuX19pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2F0dHJUcmlnZ2VyQnlOYW1lKGNhbWVsQXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzQm9vbGVhbkF0dHJpYnV0ZSkge1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBub2RlLl9fZWxlbWVudDtcbiAgICAgICAgICB2YWx1ZT8gZWxlbWVudC5zZXRBdHRyaWJ1dGUoY2FtZWxBdHRyaWJ1dGUsICd0cnVlJyk6IGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGNhbWVsQXR0cmlidXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlW2tleV07XG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSB0aGUgYXR0cmlidXRlIHZhbHVlIGZvciByZWNlaXZpbmdcbiAgICogXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcHJlcGFyZUF0dHJpYnV0ZUluKG5vZGUsIHZhbHVlKSB7ICAgIFxuICAgIHJldHVybiB1dGlscy5jb3B5KHZhbHVlLCB7IHBsYWluOiB0cnVlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgdGhlIGF0dHJpYnV0ZSB2YWx1ZSBmb3Igc2VuZGluZ1xuICAgKiBcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19wcmVwYXJlQXR0cmlidXRlT3V0KG5vZGUsIHZhbHVlKSB7ICAgIFxuICAgIHJldHVybiB1dGlscy5jb3B5KHZhbHVlLCB7IHBsYWluOiB0cnVlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIGF0dHJpYnV0ZXNcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtDb21wb25lbnR9IGF0dHJpYnV0ZU9mIC0gaWYgbm9kZSBpcyBsaW5rZWQgd2l0aCBwYXJlbnQgc2NvcGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbml0aWFsaXplQXR0cmlidXRlKG5vZGUsIGVsLCBhdHRyaWJ1dGVPZikge1xuICAgIGlmICghbm9kZSB8fCBzeXN0ZW1BdHRyaWJ1dGVzLmluZGV4T2Yobm9kZS5ub2RlTmFtZSkgIT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZighdGhpcy5fX2luaXRpYWxpemVOb2RlKG5vZGUsIGVsKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBldmVudE5hbWUgPSBub2RlLm5vZGVOYW1lLnJlcGxhY2UoL15vbi0oLispL2ksICckMScpOyAgICBcbiAgICBsZXQgY29tcG9uZW50ID0gYXR0cmlidXRlT2Y/IGF0dHJpYnV0ZU9mOiB0aGlzO1xuXG4gICAgaWYgKG5vZGUuX19pc0V2ZW50KSB7XG4gICAgICBpZiAobm9kZS5fX2V2ZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZW1pdHRlciA9IG5ldyBBa2lsaS5FdmVudEVtaXR0ZXIoZXZlbnROYW1lLCBub2RlLCBlbCwgY29tcG9uZW50KTtcblxuICAgICAgaWYgKG5vZGUuX19oYXNCaW5kaW5ncykge1xuICAgICAgICBlbWl0dGVyLmJpbmQoKGUpID0+IGNvbXBvbmVudC5fX2V2YWx1YXRlRXZlbnQobm9kZSwgZWwsIGUpKTtcbiAgICAgIH1cblxuICAgICAgbm9kZS5fX2V2ZW50ID0gZW1pdHRlcjtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShub2RlLm5vZGVOYW1lLCB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUoZW1pdHRlcikpO1xuXG4gICAgICBpZiAoYXR0cmlidXRlT2YpIHtcbiAgICAgICAgdGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLmF0dHJzW3V0aWxzLnRvQ2FtZWxDYXNlKG5vZGUubm9kZU5hbWUpXSA9IGVtaXR0ZXI7XG4gICAgICAgIHRoaXMuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoYXR0cmlidXRlT2YpIHtcbiAgICAgIG5vZGUuX19hdHRyaWJ1dGVPbiA9IHRoaXM7XG4gICAgICBub2RlLl9fYXR0cmlidXRlT2YgPSBjb21wb25lbnQ7XG4gICAgfVxuICAgIFxuICAgIGxldCBjaGVjayA9IHRoaXMuX19jb21waWxpbmc/IHRoaXMuX19jb21waWxpbmcuY2hlY2tDaGFuZ2VzOiBmYWxzZTtcbiAgICBjb21wb25lbnQuX19ldmFsdWF0ZU5vZGUobm9kZSwgY2hlY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIG5vZGVcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZU5vZGUobm9kZSwgZWwpIHtcbiAgICBpZiAobm9kZS5fX2luaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBpc0F0dHIgPSBub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHI7XG4gICAgY29uc3QgdmFsID0gbm9kZVtpc0F0dHI/ICd2YWx1ZSc6ICdub2RlVmFsdWUnXTtcbiAgICBjb25zdCBoYXNCaW5kaW5ncyA9IGV2YWx1YXRpb25SZWdleC50ZXN0KHZhbC50cmltKCkpO1xuICAgIGNvbnN0IGlzQm9vbGVhbiA9IGlzQXR0cj8gL15ib29sZWFuLS9pLnRlc3Qobm9kZS5ub2RlTmFtZSk6IGZhbHNlO1xuICAgIGNvbnN0IGlzRXZlbnQgPSBpc0F0dHI/IC9eb24tKC4rKS9pLnRlc3Qobm9kZS5ub2RlTmFtZSk6IGZhbHNlO1xuXG4gICAgaWYoIWVsLl9fYWtpbGkgJiYgIWhhc0JpbmRpbmdzICYmICFpc0Jvb2xlYW4gJiYgIWlzRXZlbnQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBub2RlLl9fbmFtZSA9IHRoaXMuX19zY29wZS5fX25hbWUgKyB1dGlscy5jcmVhdGVSYW5kb21TdHJpbmcoMTYpO1xuICAgIG5vZGUuX19pc0V2ZW50ID0gaXNFdmVudDtcbiAgICBub2RlLl9faGFzQmluZGluZ3MgPSBoYXNCaW5kaW5ncztcbiAgICBub2RlLl9faXNCb29sZWFuID0gaXNCb29sZWFuO1xuICAgIG5vZGUuX19leHByZXNzaW9uID0gdmFsO1xuICAgIG5vZGUuX19wcm9wZXJ0aWVzID0ge307XG4gICAgbm9kZS5fX2F0dHJpYnV0ZU9mID0gbnVsbDtcbiAgICBub2RlLl9fYXR0cmlidXRlT24gPSBudWxsO1xuICAgIG5vZGUuX19ldmVudCA9IG51bGw7ICAgIFxuICAgIG5vZGUuX19pbml0aWFsaXplZCA9IHRydWU7XG4gICAgbm9kZS5fX2NvbXBvbmVudCA9IHRoaXM7XG4gICAgbm9kZS5fX2VsZW1lbnQgPSBlbDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWluaXRpYWxpemUgdGhlIG5vZGVcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZWluaXRpYWxpemVOb2RlKG5vZGUsIG9wdGlvbnMgPSB7fSkge1xuICAgIGlmKCFub2RlLl9faW5pdGlhbGl6ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgaWYgKG5vZGUuX19ldmVudCkge1xuICAgICAgbm9kZS5fX2V2ZW50LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGlmIChub2RlLl9faGFzQmluZGluZ3MgJiYgIW9wdGlvbnMuc2F2ZUJpbmRpbmdzKSB7XG4gICAgICB0aGlzLl9fdW5iaW5kQnlOb2Rlcyhub2RlKTtcbiAgICAgIHRoaXMuX191bmJpbmRQYXJlbnRzQnlOb2Rlcyhub2RlKTsgICAgICAgXG4gICAgfVxuXG4gICAgQWtpbGkucmVtb3ZlVGFnKG5vZGUpOyAgICBcbiAgICBkZWxldGUgbm9kZS5fX25hbWU7XG4gICAgZGVsZXRlIG5vZGUuX19oYXNCaW5kaW5ncztcbiAgICBkZWxldGUgbm9kZS5fX2lzQm9vbGVhbjtcbiAgICBkZWxldGUgbm9kZS5fX2lzRXZlbnQ7XG4gICAgZGVsZXRlIG5vZGUuX19leHByZXNzaW9uO1xuICAgIGRlbGV0ZSBub2RlLl9fcHJvcGVydGllcztcbiAgICBkZWxldGUgbm9kZS5fX2F0dHJpYnV0ZU9mO1xuICAgIGRlbGV0ZSBub2RlLl9fYXR0cmlidXRlT247XG4gICAgZGVsZXRlIG5vZGUuX19ldmVudDsgICAgXG4gICAgZGVsZXRlIG5vZGUuX19pbml0aWFsaXplZDtcbiAgICBkZWxldGUgbm9kZS5fX2NvbXBvbmVudDtcbiAgICBkZWxldGUgbm9kZS5fX2VsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJwb2xhdGUgdGhlIGVsZW1lbnQgYXR0cmlidXRlc1xuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBbYXR0cmlidXRlT2Y9bnVsbF0gLSBpZiB0aGUgbm9kZSBoYXMgbGluayB3aXRoIHRoZSBwYXJlbnQgc2NvcGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXMoZWwsIGF0dHJpYnV0ZU9mID0gbnVsbCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBhdHRycyA9IGVsLmF0dHJpYnV0ZXMsIGwgPSBhdHRycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHRoaXMuX19pbml0aWFsaXplQXR0cmlidXRlKGF0dHJzW2ldLCBlbCwgYXR0cmlidXRlT2YpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmUgdGhlIGF0dHJpYnV0ZXMgYXMgYSBwcm94eVxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RlZmluZUF0dHJpYnV0ZXMoKSB7XG4gICAgY29uc3QgY2hhbmdlQXR0cmlidXRlID0gKGtleSwgdmFsdWUsIGlzRGVsZXRlZCA9IGZhbHNlKSA9PiB7XG4gICAgICBpZiAodGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgbm9kZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlTm9kZShrZXkpO1xuXG4gICAgICBpZiAoaXNEZWxldGVkKSB7XG4gICAgICAgIG5vZGUgJiYgdGhpcy5fX2RlaW5pdGlhbGl6ZU5vZGUobm9kZSk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgIHJldHVybiBcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCFub2RlKSB7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgICBub2RlID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGVOb2RlKGtleSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbm9kZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9fZGVpbml0aWFsaXplTm9kZShub2RlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fX2luaXRpYWxpemVBdHRyaWJ1dGUobm9kZSwgdGhpcy5lbCwgdGhpcy5fX2F0dHJpYnV0ZU9mKTtcbiAgICB9O1xuXG4gICAgdGhpcy5hdHRycyA9IG5ldyBQcm94eSh0aGlzLl9fYXR0cnMsIHtcbiAgICAgIGdldDogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGlmIChrZXkgPT0gJ19faXNQcm94eScpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgIH0sXG4gICAgICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IGF0dHJLZXkgPSB1dGlscy50b0Rhc2hDYXNlKGtleSk7XG5cbiAgICAgICAgaWYgKHRoaXMuYm9vbGVhbkF0dHJpYnV0ZXMuaW5kZXhPZihhdHRyS2V5KSAhPSAtMSkge1xuICAgICAgICAgIGF0dHJLZXkgPSBgYm9vbGVhbi0ke2F0dHJLZXl9YDtcbiAgICAgICAgICB2YWx1ZT8gdGhpcy5lbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk6IHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgIGNoYW5nZUF0dHJpYnV0ZShhdHRyS2V5LCB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUodmFsdWUpKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgICAgZGVsZXRlUHJvcGVydHk6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IGF0dHJLZXkgPSB1dGlscy50b0Rhc2hDYXNlKGtleSk7XG4gICAgICAgIGNoYW5nZUF0dHJpYnV0ZShhdHRyS2V5LCB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUodmFsdWUpLCB0cnVlKTtcbiAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHRoZSBvYmplY3QgdG8gYSBwcm94eVxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHBhcmVudHNcbiAgICogQHJldHVybnMge1Byb3h5fVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX29ic2VydmUob2JqLCBwYXJlbnRzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm94eShvYmosIHtcbiAgICAgIGdldDogKHRhcmdldCwga2V5KSA9PiB7IFxuICAgICAgICBpZiAoa2V5ID09IFwiX19pc1Byb3h5XCIpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX3RhcmdldFwiKSB7XG4gICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX2NvbXBvbmVudFwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IFwiX19rZXlzXCIpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50cztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFraWxpLl9fZXZhbHVhdGlvbikgeyAgXG4gICAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tleV0pO1xuICAgICAgICAgIGxldCBub3RCaW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgbGV0IGV2YWx1YXRlZCA9ICF1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpOyBcbiAgICAgICAgICBsZXQgY29tcG9uZW50ID0gdGhpcztcbiAgICAgICAgICBsZXQgZXhjQXJyID0ga2V5cy5zbGljZSgpO1xuXG4gICAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIFNjb3BlKSB7XG4gICAgICAgICAgICBsZXQgcmVhbFRhcmdldCA9IHV0aWxzLmdldE93blByb3BlcnR5VGFyZ2V0KHRhcmdldCwga2V5KTtcbiAgICAgICAgICAgIHJlYWxUYXJnZXQgJiYgKHJlYWxUYXJnZXQgaW5zdGFuY2VvZiBTY29wZSkgJiYgKGNvbXBvbmVudCA9ICByZWFsVGFyZ2V0Ll9fY29tcG9uZW50KTtcbiAgICAgICAgICB9IFxuXG4gICAgICAgICAgaWYgKEFraWxpLl9fd3JhcHBpbmcgJiYga2V5cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZm9yUGFyZW50cyA9IEFraWxpLl9fZXZhbHVhdGlvbi5jb21wb25lbnQucGFyZW50cyhjID0+IGMgaW5zdGFuY2VvZiBBa2lsaS5jb21wb25lbnRzLkZvcik7XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGZvclBhcmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrID0gMCwgYyA9IGtleXMubGVuZ3RoOyBrIDwgYzsgaysrKSB7IFxuICAgICAgICAgICAgICBjb25zdCBmb3JEYXRhID0gZm9yUGFyZW50c1tpXS5kYXRhO1xuICAgICAgICAgICAgICBjb25zdCBkYXRhID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoZXhjQXJyLCBjb21wb25lbnQuX19zY29wZSk7XG5cbiAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgdHlwZW9mIGRhdGEgPT0gJ29iamVjdCcgJiYgZm9yRGF0YSA9PT0gZGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgICAgZXhjQXJyLnBvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gICAgICAgICAgICAgICBcblxuICAgICAgICAgIGlmICghKGtleSBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9ICAgICAgICAgIFxuICAgICAgICAgIGVsc2UgaWYgKCF1dGlscy5nZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQodGFyZ2V0LCBrZXkpKSB7XG4gICAgICAgICAgICBub3RCaW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9fYmluZE5vZGUoQWtpbGkuX19ldmFsdWF0aW9uLmxpc3QsIGNvbXBvbmVudCwga2V5cywgcGFyZW50cywgdGFyZ2V0W2tleV0sIG5vdEJpbmRpbmcsIGV2YWx1YXRlZCk7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgfSxcbiAgICAgIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4geyBcbiAgICAgICAgaWYgKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YWx1ZSA9IEFraWxpLndyYXBGdW5jdGlvbih2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG5cbiAgICAgICAgaWYgKHRoaXMuX19jaGVja0Rpc2FibGVtZW50KGtleXMpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIENIRUNLX0VYSVNURU5DRTogaWYgKHBhcmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxldCB0YXJnZXRQYXJlbnRWYWx1ZSA9IHBhcmVudHMubGVuZ3RoID4gMT8gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMocGFyZW50cy5zbGljZSgwLCAtMSksIHRoaXMuX19zY29wZSk6IHRoaXMuX19zY29wZTtcbiAgICAgICAgICBcbiAgICAgICAgICBmb3IgKGxldCBrIGluIHRhcmdldFBhcmVudFZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIXRhcmdldFBhcmVudFZhbHVlLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGFyZ2V0UGFyZW50VmFsdWVba10gJiYgdGFyZ2V0UGFyZW50VmFsdWVba10uX190YXJnZXQgPT09IHRhcmdldCkge1xuICAgICAgICAgICAgICBicmVhayBDSEVDS19FWElTVEVOQ0U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldFtrZXldID0gdGhpcy5fX25lc3RlZE9ic2VydmUodmFsdWUsIGtleXMpO1xuXG4gICAgICAgIGlmKCF0aGlzLl9faXNSZXNvbHZlZCkge1xuICAgICAgICAgIHRoaXMuX190cmlnZ2VyU3RvcmVBbmRBdHRyKGtleXMpO1xuICAgICAgICB9XG4gICAgICAgXG4gICAgICAgIGlmIChBa2lsaS5fX2lzb2xhdGlvbikgeyBcbiAgICAgICAgICB0aGlzLl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0KHBhcmVudHMsIGtleSwgZmFsc2UpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5fX2lzUmVzb2x2ZWQpIHtcbiAgICAgICAgICB0aGlzLl9fdHJpZ2dlclN0b3JlQW5kQXR0cihrZXlzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuX19pc01vdW50ZWQpIHsgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgdGhpcy5fX2V2YWx1YXRlQnlLZXlzKGtleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgY29uc3Qga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG5cbiAgICAgICAgaWYgKHRoaXMuX19jaGVja0Rpc2FibGVtZW50KGtleXMpKSB7XG4gICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuXG4gICAgICAgIGlmKCF0aGlzLl9faXNSZXNvbHZlZCkge1xuICAgICAgICAgIHRoaXMuX190cmlnZ2VyU3RvcmVBbmRBdHRyKGtleXMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoQWtpbGkuX19pc29sYXRpb24pIHtcbiAgICAgICAgICB0aGlzLl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0KHBhcmVudHMsIGtleSwgdHJ1ZSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLl9faXNSZXNvbHZlZCkge1xuICAgICAgICAgIHRoaXMuX190cmlnZ2VyU3RvcmVBbmRBdHRyKGtleXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fX2V2YWx1YXRlQnlLZXlzKGtleXMsIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgdGhlIHN0b3JlIGFuZCB0aGUgYXR0cmlidXRlcyBjaGFuZ2VcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdHJpZ2dlclN0b3JlQW5kQXR0cihrZXlzKSB7XG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBjdXJyZW50S2V5cyA9IGtleXMuc2xpY2UoMCwgbCAtIGkpO1xuICAgICAgY29uc3QgY3VycmVudEtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhjdXJyZW50S2V5cyk7XG4gICAgICBjb25zdCB2YWwgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhjdXJyZW50S2V5cywgdGhpcy5fX3Njb3BlKTtcblxuICAgICAgaWYgKHRoaXMuX19zdG9yZUxpbmtzW2N1cnJlbnRLZXlTdHJpbmddKSB7ICBcbiAgICAgICAgdGhpcy5fX3N0b3JlVHJpZ2dlckJ5S2V5cyhjdXJyZW50S2V5cywgdmFsKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX19hdHRyTGlua3NbY3VycmVudEtleVN0cmluZ10pIHtcbiAgICAgICAgdGhpcy5fX2F0dHJUcmlnZ2VyQnlLZXlzKGN1cnJlbnRLZXlzLCB2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIGhhc2ggZm9yIHRoZSBrZXlzXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGVLZXlzSGFzaChrZXlzKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuX19zY29wZS5fX25hbWV9LiR7QWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpfWA7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBzdG9yZSBvZiB0aGUgZGlzYWJsZW1lbnQgdHlwZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0RGlzYWJsZW1lbnRUeXBlU3RvcmUodHlwZSkge1xuICAgIHJldHVybiAoe1xuICAgICAgcHJveHk6ICdfX2Rpc2FibGVQcm94eScsXG4gICAgICBzdG9yZTogJ19fZGlzYWJsZVN0b3JlS2V5cycsXG4gICAgICBhdHRyOiAnX19kaXNhYmxlQXR0cktleXMnXG4gICAgfSlbdHlwZV07XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZSB0aGUga2V5cyBzZXR0ZXJcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3R5cGVdICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kaXNhYmxlS2V5cyhrZXlzLCB0eXBlID0gJ3Byb3h5JykgeyAgICBcbiAgICB0aGlzW3RoaXMuX19nZXREaXNhYmxlbWVudFR5cGVTdG9yZSh0eXBlKV1ba2V5cz8gdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpOiAnX19hbGwnXSA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIHRoZSBrZXlzIHNldHRlclxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlXSAgIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2VuYWJsZUtleXMoa2V5cywgdHlwZSA9ICdwcm94eScpIHtcbiAgICBkZWxldGUgdGhpc1t0aGlzLl9fZ2V0RGlzYWJsZW1lbnRUeXBlU3RvcmUodHlwZSldW2tleXM/IHRoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKTogJ19fYWxsJ107XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGtleXMgc2V0dGVyIGRpc2FibGVtYW50XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3R5cGVdICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2hlY2tEaXNhYmxlbWVudChrZXlzLCB0eXBlID0gJ3Byb3h5Jykge1xuICAgIGNvbnN0IHN0b3JlID0gdGhpcy5fX2dldERpc2FibGVtZW50VHlwZVN0b3JlKHR5cGUpO1xuICAgIHJldHVybiB0aGlzW3N0b3JlXS5fX2FsbD8gdHJ1ZTogdGhpc1tzdG9yZV1bdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlIHRoZSB2YWx1ZSB0byB0aGUgc3RvcmUgYnkgdGhlIGtleXNcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc3RvcmVUcmlnZ2VyQnlLZXlzKGtleXMsIHZhbHVlKSB7IFxuICAgIGlmICh0aGlzLl9fY2hlY2tEaXNhYmxlbWVudChrZXlzLCAnc3RvcmUnKSkgeyAgICAgIFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGxpbmtzID0gdGhpcy5fX3N0b3JlTGlua3NbQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpXTtcblxuICAgIGlmICghbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICB2YWx1ZSA9IHV0aWxzLmNvcHkodmFsdWUsIHsgcGxhaW46IHRydWUgfSk7XG4gICAgY29uc3QgcCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTsgICBcbiAgICAgIFxuICAgICAgaWYgKCFsaW5rLnNldCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgcC5wdXNoKHRoaXMuX19zdG9yZVRyaWdnZXJCeU5hbWUobGluay5uYW1lLCB2YWx1ZSkpOyAgICAgIFxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocCk7XG4gIH1cblxuICAvKipcbiAgICogU2F2ZSB0aGUgdmFsdWUgdG8gdGhlIHN0b3JlIGJ5IHRoZSBuYW1lXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zdG9yZVRyaWdnZXJCeU5hbWUobmFtZSwgdmFsdWUpIHsgIFxuICAgIHN0b3JlLl9fdGFyZ2V0W25hbWVdID0gdmFsdWU7XG4gICAgbGV0IGxpbmtzID0gKEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSB8fCBbXSkuY29uY2F0KEFraWxpLl9fc3RvcmVMaW5rc1snKiddIHx8IFtdKTtcblxuICAgIGlmICghbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxpbmtzID0gdXRpbHMuc29ydChsaW5rcywgWydkYXRlJ10sIHRydWUpO1xuXG4gICAgcmV0dXJuIEFraWxpLm5leHRUaWNrKCgpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGlua3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbGluay5jb21wb25lbnQ7XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudCA9PT0gdGhpcykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAobGluay5mbikge1xuICAgICAgICAgIEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBsaW5rLmZuLmNhbGwoY29tcG9uZW50LCB2YWx1ZSwgbmFtZSkpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbGluay5nZXQpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVLZXlzKGxpbmsua2V5cywgJ3N0b3JlJyk7XG4gICAgICAgIGxldCBjdXJyZW50ID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMobGluay5rZXlzLCBjb21wb25lbnQuX19zY29wZSk7XG4gICAgICAgICF1dGlscy5jb21wYXJlKGN1cnJlbnQsIHZhbHVlKSAmJiBjb21wb25lbnQuc2NvcGUuX19zZXQobGluay5rZXlzLCB2YWx1ZSk7ICAgXG4gICAgICAgIGNvbXBvbmVudC5fX2VuYWJsZUtleXMobGluay5rZXlzLCAnc3RvcmUnKTtcbiAgICAgIH0gIFxuICAgIH0pOyAgIFxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgc3RvcmUgbGluayB3aXRoIHRoZSBzY29wZSBwcm9wZXJ0eVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7b2JoZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zdG9yZUJ5S2V5cyhuYW1lLCBrZXlzLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0geyBnZXQ6IHRydWUsIHNldDogdHJ1ZSwgLi4ub3B0aW9ucyB9O1xuXG4gICAgaWYgKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFN0b3JlIGxpbmsgXCIke25hbWV9XCIgbXVzdCBoYXZlIHRoZSBzY29wZSBwcm9wZXJ0eSBuYW1lYCk7XG4gICAgfVxuXG4gICAgaWYgKCFvcHRpb25zLmdldCAmJiAhb3B0aW9ucy5zZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgU3RvcmUgbGluayBcIiR7bmFtZX1cIiBtdXN0IGhhdmUgYXQgbGVhc3QgXCJnZXRcIiBvciBcInNldFwiIG9wdGlvbiBhcyB0cnVlYCk7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLl9fZGlzYWJsZUtleXMoa2V5cywgJ3N0b3JlJyk7XG4gICAgKHN0b3JlLmhhc093blByb3BlcnR5KG5hbWUpIHx8ICF1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpKSAmJiB0aGlzLnNjb3BlLl9fc2V0KGtleXMsIHN0b3JlW25hbWVdKTtcbiAgICB0aGlzLl9fZW5hYmxlS2V5cyhrZXlzLCAnc3RvcmUnKTtcbiAgICBsZXQga2V5U3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpO1xuICAgIGxldCBpbmZvO1xuXG4gICAgaWYgKCF0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddKSB7XG4gICAgICB0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddID0gW107XG4gICAgfVxuXG4gICAgbGV0IGFyciA9IHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ107XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGFycltpXTtcblxuICAgICAgaWYgKHJlcy5jb21wb25lbnQgPT09IHRoaXMgJiYgcmVzLm5hbWUgPT0gbmFtZSAmJiByZXMua2V5U3RyaW5nID09IGtleVN0cmluZykge1xuICAgICAgICByZXMuc2V0ID0gb3B0aW9ucy5zZXQ7XG4gICAgICAgIHJlcy5nZXQgPSBvcHRpb25zLmdldDtcbiAgICAgICAgcmVzLmRhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0pIHtcbiAgICAgIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGluZm8gPSB7IGNvbXBvbmVudDogdGhpcywgbmFtZSwga2V5cywga2V5U3RyaW5nLCBkYXRlOiBEYXRlLm5vdygpLCBzZXQ6IG9wdGlvbnMuc2V0LCBnZXQ6IG9wdGlvbnMuZ2V0IH07XG4gICAgdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXS5wdXNoKGluZm8pO1xuICAgIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXS5wdXNoKGluZm8pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgc3RvcmUgbGluayB3aXRoIHRoZSBmdW5jdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuICAgXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIF9fc3RvcmVCeUZ1bmN0aW9uKG5hbWUsIGZuLCBvcHRpb25zID0ge30pIHsgXG4gICAgbGV0IGNhbGwgPSBvcHRpb25zLmNhbGxPblN0YXJ0ID09PSB1bmRlZmluZWQ/IHN0b3JlLl9fdGFyZ2V0Lmhhc093blByb3BlcnR5KG5hbWUpOiBvcHRpb25zLmNhbGxPblN0YXJ0O1xuXG4gICAgaWYgKCFBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0pIHtcbiAgICAgIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGxldCBsaW5rcyA9IEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYgKHJlcy5jb21wb25lbnQgPT09IHRoaXMgJiYgcmVzLm5hbWUgPT0gbmFtZSAmJiByZXMuZm4gPT09IGZuKSB7XG4gICAgICAgIHJlcy5kYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXS5wdXNoKHsgY29tcG9uZW50OiB0aGlzLCBuYW1lLCBmbiwgZGF0ZTogRGF0ZS5ub3coKSB9KTtcblxuICAgIGlmIChuYW1lID09ICcqJyAmJiBvcHRpb25zLmNhbGxPblN0YXJ0ICE9PSBmYWxzZSkge1xuICAgICAgbGV0IHN0b3JlS2V5cyA9IE9iamVjdC5rZXlzKHN0b3JlLl9fdGFyZ2V0KTtcbiAgICAgIGxldCBwID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gc3RvcmVLZXlzLmxlbmd0aCA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGtleSA9IHN0b3JlS2V5c1tpXTtcbiAgICAgICAgbGV0IHZhbCA9IHN0b3JlLl9fdGFyZ2V0W2tleV07XG4gICAgICAgIHAucHVzaChBa2lsaS51bmlzb2xhdGUoKCkgPT4gZm4uY2FsbCh0aGlzLCB2YWwsIGtleSkpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHApO1xuICAgIH1cblxuICAgIGlmIChjYWxsKSB7XG4gICAgICByZXR1cm4gQWtpbGkudW5pc29sYXRlKCgpID0+IGZuLmNhbGwodGhpcywgc3RvcmVbbmFtZV0pKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBzdG9yZSBsaW5rIHdpdGggdGhlIHNjb3BlIHByb3BlcnR5XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3Vuc3RvcmVCeUtleXMobmFtZSwga2V5cykge1xuICAgIGlmICgha2V5cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgaGF2ZSB0byBwYXNzIHRoZSBzY29wZSBwcm9wZXJ0eSBuYW1lIGZvciBzdG9yZSBsaW5rIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cblxuICAgIGxldCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG4gICAgbGV0IGFyciA9IHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ107XG5cbiAgICBpZiAoIWFyci5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGFycltpXTtcbiAgICAgIGxldCBsaW5rcyA9IEFraWxpLl9fc3RvcmVMaW5rc1tyZXMubmFtZV07XG5cbiAgICAgIGlmIChyZXMuY29tcG9uZW50ICE9PSB0aGlzIHx8IHJlcy5uYW1lICE9IG5hbWUgfHwgcmVzLmtleVN0cmluZyAhPSBrZXlTdHJpbmcpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGFyci5zcGxpY2UoaSwgMSk7XG5cbiAgICAgIGlmICghbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgayA9IGxpbmtzLmxlbmd0aCAtIDE7IGsgPj0gMDsgay0tKSB7XG4gICAgICAgIGxldCBsaW5rID0gbGlua3Nba107XG5cbiAgICAgICAgaWYgKGxpbmsuY29tcG9uZW50ID09PSB0aGlzICYmIGxpbmsua2V5U3RyaW5nID09IGtleVN0cmluZykge1xuICAgICAgICAgIGxpbmtzLnNwbGljZShrLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWxpbmtzLmxlbmd0aCkge1xuICAgICAgICBkZWxldGUgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghYXJyLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ107XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgc3RvcmUgbGluayB3aXRoIHRoZSBmdW5jdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3Vuc3RvcmVCeUZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYgKCFBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV07XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IGxpbmtzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gbGlua3NbaV07XG5cbiAgICAgIGlmIChyZXMuY29tcG9uZW50ID09PSB0aGlzICYmIHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmZuID09PSBmbikge1xuICAgICAgICBsaW5rcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghbGlua3MubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIHRoZSBhdHRyaWJ1dGUgZXZlbnQgYnkgdGhlIGtleXNcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYXR0clRyaWdnZXJCeUtleXMoa2V5cywgdmFsdWUpIHtcbiAgICBpZiAodGhpcy5fX2NoZWNrRGlzYWJsZW1lbnQoa2V5cywgJ2F0dHInKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBsaW5rcyA9IHRoaXMuX19hdHRyTGlua3NbQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpXTtcbiAgIFxuICAgIGlmICghbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gQWtpbGkubmV4dFRpY2soKCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGluayA9IGxpbmtzW2ldO1xuXG4gICAgICAgIGlmIChsaW5rLmZuKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWxpbmsuc2V0KSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGV2ID0gJ29uJyArIHV0aWxzLmNhcGl0YWxpemUobGluay5uYW1lKTtcbiAgICAgICAgdGhpcy5hdHRyc1tldl0gJiYgdGhpcy5hdHRyc1tldl0udHJpZ2dlcih2YWx1ZSwgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgICAgfVxuICAgIH0pOyAgXG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciB0aGUgYXR0cmlidXRlIGV2ZW50IGJ5IHRoZSBuYW1lXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hdHRyVHJpZ2dlckJ5TmFtZShuYW1lLCB2YWx1ZSkge1xuICAgIGxldCBsaW5rcyA9ICh0aGlzLl9fYXR0ckxpbmtzW25hbWVdIHx8IFtdKS5jb25jYXQodGhpcy5fX2F0dHJMaW5rc1snKiddIHx8IFtdKTtcbiAgICBcbiAgICBpZiAoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9ICBcbiAgICBcbiAgICBsaW5rcyA9IHV0aWxzLnNvcnQobGlua3MsIFsnZGF0ZSddLCB0cnVlKTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxpbmtzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY29uc3QgbGluayA9IGxpbmtzW2ldOyAgICBcblxuICAgICAgaWYgKGxpbmsuZm4pIHtcbiAgICAgICAgQWtpbGkudW5pc29sYXRlKCgpID0+IGxpbmsuZm4uY2FsbCh0aGlzLCB2YWx1ZSwgdXRpbHMudG9EYXNoQ2FzZShuYW1lKSkpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYoIWxpbmsuZ2V0KSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0aGlzLl9fZGlzYWJsZUtleXMobGluay5rZXlzLCAnYXR0cicpO1xuICAgICAgbGV0IGN1cnJlbnQgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhsaW5rLmtleXMsIHRoaXMuX19zY29wZSk7XG4gICAgICAhdXRpbHMuY29tcGFyZShjdXJyZW50LCB2YWx1ZSkgJiYgdGhpcy5zY29wZS5fX3NldChsaW5rLmtleXMsIHZhbHVlKTtcbiAgICAgIHRoaXMuX19lbmFibGVLZXlzKGxpbmsua2V5cywgJ2F0dHInKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSAgYXR0cmlidXRlIGxpbmsgd2l0aCB0aGUgc2NvcGUgcHJvcGVydHlcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYXR0ckJ5S2V5cyhuYW1lLCBrZXlzLCBvcHRpb25zID0ge30pIHsgICBcbiAgICBvcHRpb25zID0geyBnZXQ6IHRydWUsIHNldDogdHJ1ZSwgLi4ub3B0aW9ucyB9O1xuICAgIG5hbWUgPSB1dGlscy50b0NhbWVsQ2FzZShuYW1lKTtcblxuICAgIGlmICgha2V5cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBBdHRyaWJ1dGUgbGluayBcIiR7bmFtZX1cIiBtdXN0IGhhdmUgdGhlIHNjb3BlIHByb3BlcnR5IG5hbWVgKTtcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuICAgIFxuICAgIHRoaXMuX19kaXNhYmxlS2V5cyhrZXlzLCAnYXR0cicpO1xuICAgICh0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KG5hbWUpIHx8ICF1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpKSAmJiB0aGlzLnNjb3BlLl9fc2V0KGtleXMsIHRoaXMuYXR0cnNbbmFtZV0pOyBcbiAgICB0aGlzLl9fZW5hYmxlS2V5cyhrZXlzLCAnYXR0cicpO1xuICAgIGxldCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG4gICAgXG4gICAgaWYgKCF0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ10pIHtcbiAgICAgIHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXSA9IFtdO1xuICAgIH1cblxuICAgIGxldCBhcnIgPSB0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ107XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGFycltpXTtcblxuICAgICAgaWYgKHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmtleVN0cmluZyA9PSBrZXlTdHJpbmcpIHtcbiAgICAgICAgcmVzLmdldCA9IG9wdGlvbnMuZ2V0O1xuICAgICAgICByZXMuc2V0ID0gb3B0aW9ucy5zZXQ7XG4gICAgICAgIHJlcy5kYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXS5wdXNoKHsgbmFtZSwga2V5cywga2V5U3RyaW5nLCBkYXRlOiBEYXRlLm5vdygpLCBzZXQ6IG9wdGlvbnMuc2V0LCBnZXQ6IG9wdGlvbnMuZ2V0IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgYXR0cmlidXRlIGxpbmsgd2l0aCB0aGUgZnVuY3Rpb25cbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWQgXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgX19hdHRyQnlGdW5jdGlvbihuYW1lLCBmbiwgb3B0aW9ucyA9IHt9KSB7ICAgIFxuICAgIG5hbWUgPSB1dGlscy50b0NhbWVsQ2FzZShuYW1lKTtcbiAgICBsZXQgY2FsbCA9IG9wdGlvbnMuY2FsbE9uU3RhcnQgPT09IHVuZGVmaW5lZD8gdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eShuYW1lKTogb3B0aW9ucy5jYWxsT25TdGFydDsgICAgXG5cbiAgICBpZiAoIXRoaXMuX19hdHRyTGlua3NbbmFtZV0pIHtcbiAgICAgIHRoaXMuX19hdHRyTGlua3NbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSB0aGlzLl9fYXR0ckxpbmtzW25hbWVdO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSBsaW5rcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGxpbmtzW2ldO1xuXG4gICAgICBpZiAocmVzLm5hbWUgPT0gbmFtZSAmJiByZXMuZm4gPT09IGZuKSB7XG4gICAgICAgIHJlcy5kYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB0aGlzLl9fYXR0ckxpbmtzW25hbWVdLnB1c2goeyBuYW1lLCBmbiwgZGF0ZTogRGF0ZS5ub3coKSB9KTtcblxuICAgIGlmIChuYW1lID09ICcqJyAmJiBvcHRpb25zLmNhbGxPblN0YXJ0ICE9PSBmYWxzZSkge1xuICAgICAgbGV0IGF0dHJzS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuX19hdHRycykuZmlsdGVyKGsgPT4gISh0aGlzLl9fYXR0cnNba10gaW5zdGFuY2VvZiBBa2lsaS5FdmVudEVtaXR0ZXIpKTtcbiAgICAgIGxldCBwID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gYXR0cnNLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQga2V5ID0gYXR0cnNLZXlzW2ldO1xuICAgICAgICBsZXQgdmFsID0gdGhpcy5fX2F0dHJzW2tleV07XG4gICAgICAgIHAucHVzaChBa2lsaS51bmlzb2xhdGUoKCkgPT4gZm4uY2FsbCh0aGlzLCB2YWwsIHV0aWxzLnRvRGFzaENhc2Uoa2V5KSkpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHApO1xuICAgIH1cbiAgICBcbiAgICBpZiAoY2FsbCkge1xuICAgICAgcmV0dXJuIEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBmbi5jYWxsKHRoaXMsIHRoaXMuYXR0cnNbbmFtZV0pKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBhdHRyaWJ1dGUgbGluayB3aXRoIHRoZSBzY29wZSBwcm9wZXJ0eVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmF0dHJCeUtleXMobmFtZSwga2V5cykge1xuICAgIGlmICgha2V5cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgaGF2ZSB0byBwYXNzIHRoZSBzY29wZSBwcm9wZXJ0eSBuYW1lIGZvciBhdHRyaWJ1dGUgbGluayBcIiR7bmFtZX1cImApO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG5cbiAgICBsZXQga2V5U3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpO1xuICAgIGxldCBhcnIgPSB0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ107XG5cbiAgICBpZiAoIWFyci5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGFycltpXTtcblxuICAgICAgaWYgKHJlcy5uYW1lICE9IG5hbWUgfHwgcmVzLmtleVN0cmluZyAhPSBrZXlTdHJpbmcpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGFyci5zcGxpY2UoaSwgMSk7XG4gICAgfVxuXG4gICAgaWYgKCFhcnIubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGF0dHJpYnV0ZSBsaW5rIHdpdGggdGhlIGZ1bmN0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmF0dHJCeUZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYgKCF0aGlzLl9fYXR0ckxpbmtzW25hbWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYgKHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmZuID09PSBmbikge1xuICAgICAgICBsaW5rcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghbGlua3MubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGtleSBpcyBzeXN0ZW1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pc1N5c3RlbUtleSAoa2V5KSB7XG4gICAgaWYgKGtleSA9PSAnX18nIHx8IChrZXlbMF0gPT0gJ18nICYmIGtleVsxXSA9PSAnXycpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoWydjb25zdHJ1Y3RvciddLmluZGV4T2Yoa2V5KSAhPSAtMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIE5lc3RlZCBvYnNlcnZpbmcgb2YgdGhlIHZhbHVlXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gW3N0YXJ0S2V5c11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19uZXN0ZWRPYnNlcnZlICh2YWx1ZSwgc3RhcnRLZXlzKSB7XG4gICAgY29uc3Qgb2JzZXJ2ZSA9ICh2YWx1ZSwgcGFyZW50cykgPT4ge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghdXRpbHMuaXNQbGFpbk9iamVjdCh2YWx1ZSkgJiYgIXV0aWxzLmlzU2NvcGVQcm94eSh2YWx1ZSkgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIFNjb3BlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGxldCB0YXJnZXQgPSB2YWx1ZTtcblxuICAgICAgQ0hFQ0tfUFJPWFk6IGlmICh2YWx1ZS5fX2lzUHJveHkpIHtcbiAgICAgICAgdGFyZ2V0ID0gdmFsdWUuX190YXJnZXQ7XG5cbiAgICAgICAgaWYgKHRoaXMuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nKSB7XG4gICAgICAgICAgYnJlYWsgQ0hFQ0tfUFJPWFk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChcbiAgICAgICAgICB2YWx1ZS5fX2NvbXBvbmVudCAhPT0gdGhpcyB8fFxuICAgICAgICAgIEFraWxpLmpvaW5CaW5kaW5nS2V5cyhwYXJlbnRzKSAhPSBBa2lsaS5qb2luQmluZGluZ0tleXModmFsdWUuX19rZXlzKVxuICAgICAgICApIHtcbiAgICAgICAgICB0YXJnZXQgPSB1dGlscy5jb3B5KHRhcmdldCwgeyBuZXN0ZWQ6IGZhbHNlIH0pO1xuICAgICAgICAgIHZhbHVlID0gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghdGhpcy5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIFNjb3BlKSkge1xuICAgICAgICB0YXJnZXQgPSB1dGlscy5jb3B5KHRhcmdldCwgeyBuZXN0ZWQ6IGZhbHNlIH0gKTsgICAgICAgICAgXG4gICAgICAgIHZhbHVlID0gdGFyZ2V0O1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0YXJnZXRLZXlzID0gT2JqZWN0LmtleXModGFyZ2V0KTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0YXJnZXRLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykgeyAgICBcbiAgICAgICAgY29uc3QgayA9IHRhcmdldEtleXNbaV07XG4gICAgICAgIGNvbnN0IHZhbCA9IHRhcmdldFtrXTsgICAgICAgIFxuICAgICAgICBjb25zdCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrXSk7ICAgXG4gICAgICAgIHRhcmdldFtrXSA9IG9ic2VydmUodmFsLCBrZXlzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF2YWx1ZS5fX2lzUHJveHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19vYnNlcnZlKHZhbHVlLCBwYXJlbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG5cbiAgICByZXR1cm4gb2JzZXJ2ZSh2YWx1ZSwgc3RhcnRLZXlzIHx8IFtdKTtcbiAgfVxuXG4gICAvKipcbiAgICogQ3JlYXRlIGFuIGlzb2xhdGlvbiBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVsZXRlZD1mYWxzZV1cbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0IChwYXJlbnRzLCBrZXksIGlzRGVsZXRlZCA9IGZhbHNlKSB7XG4gICAgY29uc3Qga2V5cyA9IHBhcmVudHMubGVuZ3RoPyBbcGFyZW50c1swXV06IFtrZXldO1xuICAgIGNvbnN0IGlzb2xhdGlvbkhhc2ggPSB0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyk7XG5cbiAgICBpZiAocGFyZW50cy5sZW5ndGgpIHtcbiAgICAgIGlzRGVsZXRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uSGFzaF0pIHtcbiAgICAgIEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbkhhc2hdID0ge1xuICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICAgIGtleXNcbiAgICAgIH07XG4gICAgfVxuXG4gICAgKGlzRGVsZXRlZCAhPT0gdW5kZWZpbmVkKSAmJiAoQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uSGFzaF0uaXNEZWxldGVkID0gaXNEZWxldGVkKTtcbiAgICByZXR1cm4gQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uSGFzaF07XG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSB0aGUgbm9kZSB0byB0aGUgYmluZGluZ1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gYmluZCAtIGJ5IGRlZmF1bHQgaXMgY29tcG9uZW50Ll9fZXZhbHVhdGlvbi5saXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW25vdEJpbmRpbmc9ZmFsc2VdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2V2YWx1YXRlZD1mYWxzZV1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19iaW5kTm9kZShiaW5kLCByZWFsQ29tcG9uZW50LCBrZXlzLCBwYXJlbnRzLCB2YWx1ZSwgbm90QmluZGluZyA9IGZhbHNlLCBldmFsdWF0ZWQgPSBmYWxzZSkge1xuICAgIGxldCBwYXJlbnRLZXlzU3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKHBhcmVudHMpO1xuICAgIGxldCBjb21wb25lbnQgPSB0aGlzO1xuXG4gICAgaWYgKGJpbmQubGVuZ3RoICYmICFub3RCaW5kaW5nKSB7XG4gICAgICBsZXQgbCA9IGJpbmQubGVuZ3RoIC0gMTtcbiAgICAgIGxldCBkYXRhID0gYmluZFtsXTtcblxuICAgICAgaWYgKGRhdGEucmVhbENvbXBvbmVudCA9PT0gdGhpcyAmJiBkYXRhLmtleXNTdHJpbmcgPT0gcGFyZW50S2V5c1N0cmluZykge1xuICAgICAgICBjb21wb25lbnQgPSBkYXRhLmNvbXBvbmVudDtcbiAgICAgIH0gICAgICBcbiAgICAgIFxuICAgICAgaWYgKGRhdGEua2V5c1N0cmluZyA9PSBwYXJlbnRLZXlzU3RyaW5nICYmIGRhdGEuY29tcG9uZW50ID09PSBjb21wb25lbnQpIHtcbiAgICAgICAgYmluZC5zcGxpY2UobCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGJpbmQucHVzaCh7XG4gICAgICBjb21wb25lbnQsXG4gICAgICByZWFsQ29tcG9uZW50OiByZWFsQ29tcG9uZW50LFxuICAgICAga2V5c1N0cmluZzogQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpLFxuICAgICAgcGFyZW50cyxcbiAgICAgIGtleXMsXG4gICAgICB2YWx1ZSxcbiAgICAgIGV2YWx1YXRlZCxcbiAgICAgIG5vdEJpbmRpbmdcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUga2V5IGlzIHRoZSBzeXN0ZW1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi8gXG4gIF9faXNTeXN0ZW1CaW5kaW5nS2V5KGtleSkge1xuICAgIHJldHVybiBrZXkgPT0gJ19fZGF0YSc7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgYmluZGluZyBieSB0aGUga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRCaW5kKGtleXMpIHtcbiAgICByZXR1cm4gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzKSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgbmVzdGVkIGJpbmRpbmdzIGJ5IHRoZSBrZXlzXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKi9cbiAgX19nZXRBbGxCaW5kcyhrZXlzKSB7XG4gICAgY29uc3Qgcm9vdCA9IHRoaXMuX19nZXRCaW5kKGtleXMpO1xuXG4gICAgaWYgKCFyb290KSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgbGV0IGRhdGEgPSBbXTtcblxuICAgIGNvbnN0IGNvbGxlY3QgPSAob2JqKSA9PiB7XG4gICAgICBkYXRhID0gZGF0YS5jb25jYXQob2JqLl9fZGF0YSB8fCBbXSk7XG5cbiAgICAgIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoa2V5KSB8fCBrZXkgPT0gJ19fZGF0YScpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbGxlY3Qob2JqW2tleV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbGxlY3Qocm9vdCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgYmluZGluZyBieSB0aGUga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0Qm91bmROb2RlKGtleXMsIG5vZGUpIHtcbiAgICBsZXQgYmluZCA9ICB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MpO1xuXG4gICAgaWYgKCFiaW5kIHx8ICFiaW5kLl9fZGF0YSB8fCAhYmluZC5fX2RhdGEubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGJpbmQuX19kYXRhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGRhdGEgPSBiaW5kLl9fZGF0YVtpXTtcblxuICAgICAgaWYgKGRhdGEubm9kZSA9PT0gbm9kZSkge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIG5vZGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtldmFsdWF0ZWQ9ZmFsc2VdXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzLCB2YWx1ZSwgZXZhbHVhdGVkID0gZmFsc2UpIHtcbiAgICBsZXQgcHJvcCA9IHRoaXMuX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cyk7ICAgIFxuICAgIGxldCBoYXNoID0gdXRpbHMuY3JlYXRlSGFzaCh2YWx1ZSk7XG5cbiAgICBpZiAocHJvcCkge1xuICAgICAgbGV0IHJlcyA9IG5vZGUuX19jb21wb25lbnQuX19jb21wYXJlTm9kZVByb3BlcnR5VmFsdWUocHJvcCwgdmFsdWUpO1xuICAgICAgcHJvcC52YWx1ZSA9IHZhbHVlO1xuICAgICAgcHJvcC5oYXNoID0gaGFzaDtcbiAgICAgIHJldHVybiAhcmVzO1xuICAgIH1cbiAgICBcbiAgICBub2RlLl9fcHJvcGVydGllc1t0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyldID0ge1xuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgdmFsdWUsXG4gICAgICBoYXNoLFxuICAgICAgbm9kZSxcbiAgICAgIGtleXMsXG4gICAgICBldmFsdWF0ZWQgIFxuICAgIH07XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5vZGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKSB7XG4gICAgcmV0dXJuIG5vZGUuX19wcm9wZXJ0aWVzW3RoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKV0gfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgdGhlIG5vZGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZWxldGVOb2RlUHJvcGVydHkobm9kZSwga2V5cykge1xuICAgIGxldCBoYXNoID0gYCR7dGhpcy5fX3Njb3BlLl9fbmFtZX0uJHtBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyl9YDtcbiAgICBkZWxldGUgbm9kZS5fX3Byb3BlcnRpZXNbaGFzaF07XG4gIH1cblxuICAvKipcbiAgICogTWFwIHRoZSBub2Rlc1xuICAgKiBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX21hcE5vZGVzKGZuLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0geyByb290QXR0cnM6IHRydWUsIGF0dHJzOiB0cnVlLCBub2RlOiB0cnVlLCBlbDogdHJ1ZSwgLi4ub3B0aW9ucyB9O1xuXG4gICAgY29uc3QgZmluZCA9IChlbCkgPT4ge1xuICAgICAgaWYoIWVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYob3B0aW9ucy5hdHRycyAmJiAoZWwgIT09IHRoaXMuZWwgfHwgb3B0aW9ucy5yb290QXR0cnMpKSB7XG4gICAgICAgIGZvciAobGV0IGsgPSAwLCBhdHRycyA9IGVsLmF0dHJpYnV0ZXMsIGMgPSBhdHRycy5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgICAgICBmbihhdHRyc1trXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgZm9yIChsZXQgaSA9IGVsLmNoaWxkTm9kZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGVsLmNoaWxkTm9kZXNbaV07XG5cbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT0gMykge1xuICAgICAgICAgIG9wdGlvbnMubm9kZSAmJiBmbihub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09IDEgJiYgIW5vZGUuX19ha2lsaSkge1xuICAgICAgICAgIGZpbmQobm9kZSk7XG4gICAgICAgICAgb3B0aW9ucy5lbCAmJiBmbihub2RlKTsgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIGZpbmQodGhpcy5lbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBub2Rlc1xuICAgKiBcbiAgICogQHJldHVybnMge05vZGVbXX1cbiAgICogQHByb3RlY3RlZCBcbiAgICovXG4gIF9fZ2V0QWxsTm9kZXMoKSB7XG4gICAgY29uc3Qgbm9kZXMgPSBbXTtcbiAgICB0aGlzLl9fbWFwTm9kZXMobm9kZSA9PiBub2Rlcy5wdXNoKG5vZGUpKTtcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBCaW5kIHRoZSBkYXRhIHdpdGggdGhlIGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2JpbmQoa2V5cywgZGF0YSkge1xuICAgIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncywgKGxhc3QsIHZhbHVlKSA9PiB7XG4gICAgICBsZXQgb2JqID0geyBfX2RhdGE6IFtdIH07XG5cbiAgICAgIGlmICghbGFzdCkge1xuICAgICAgICByZXR1cm4gdmFsdWU/IHZhbHVlOiBvYmo7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgb2JqID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghb2JqLl9fZGF0YSkge1xuICAgICAgICBvYmouX19kYXRhID0gW107XG4gICAgICB9XG5cbiAgICAgIG9iai5fX2RhdGEucHVzaChkYXRhKTtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIHRoZSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmJpbmQoa2V5cykge1xuICAgIGxldCBiaW5kID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzKTtcblxuICAgIGlmICghYmluZCB8fCAhYmluZC5fX2RhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGJpbmQuX19kYXRhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG5vZGUgPSBiaW5kLl9fZGF0YVtpXS5ub2RlO1xuICAgICAgdGhpcy5fX2RlbGV0ZU5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKTtcbiAgICB9XG5cbiAgICB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MsICh2YWx1ZSkgPT4ge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPiAxKSB7XG4gICAgICAgIHZhbHVlLl9fZGF0YSA9IFtdO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCB0aGUgZGF0YSBieSBub2Rlc1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGV8Tm9kZVtdfSBub2Rlc1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYmluZEJ5Tm9kZXMobm9kZXMpIHtcbiAgICBub2RlcyBpbnN0YW5jZW9mIE5vZGUgJiYgKG5vZGVzID0gW25vZGVzXSk7XG5cbiAgICBjb25zdCB1bmJpbmQgPSAob2JqLCBwYXJlbnQsIGtleSkgPT4ge1xuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgICAgIGZvciAobGV0IGogPSAwLCBjID0ga2V5cy5sZW5ndGg7IGogPCBjOyBqKyspIHtcbiAgICAgICAgY29uc3QgayA9IGtleXNbal07XG4gICAgICAgIFxuICAgICAgICBpZiAoayA9PSAnX19kYXRhJykge1xuICAgICAgICAgIGxldCBkYXRhID0gb2JqW2tdIHx8IFtdO1xuICAgICAgICAgIGxldCBsID0gZGF0YS5sZW5ndGg7XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJpbmQgPSBkYXRhW2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAobm9kZXMuaW5kZXhPZihiaW5kLm5vZGUpICE9IC0xKSB7XG4gICAgICAgICAgICAgIGRlbGV0ZSBiaW5kLm5vZGU7ICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGRhdGEuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgIGwtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWwpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmpba107XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLl9faXNTeXN0ZW1CaW5kaW5nS2V5KGspKSB7XG4gICAgICAgICAgdW5iaW5kKG9ialtrXSwgb2JqLCBrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHBhcmVudCAmJiAhT2JqZWN0LmtleXMob2JqKS5sZW5ndGgpIHtcbiAgICAgICAgICBkZWxldGUgcGFyZW50W2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdW5iaW5kKHRoaXMuX19iaW5kaW5ncyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBwYXJlbnQgYmluZGluZ3Mgd2l0aCB0aGUgbm9kZXNcbiAgICogXG4gICAqIEBwYXJhbSB7Tm9kZXxOb2RlW119IG5vZGVzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5iaW5kUGFyZW50c0J5Tm9kZXMobm9kZXMpIHsgIFxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLl9fcGFyZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX19wYXJlbnRzW2ldOyAgICAgIFxuICAgICAgcGFyZW50ICYmIHBhcmVudC5fX2FraWxpICYmIHBhcmVudC5fX2FraWxpLl9fdW5iaW5kQnlOb2Rlcyhub2Rlcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBsaW5rc1xuICAgKiBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jbGVhclN0b3JlTGlua3MoKSB7XG4gICAgY29uc3QgbGlua3MgPSBBa2lsaS5fX3N0b3JlTGlua3M7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gbGlua3MpIHtcbiAgICAgIGNvbnN0IGFyciA9IGxpbmtzW2tleV07XG5cbiAgICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgbGluayA9IGFycltpXTtcbiAgXG4gICAgICAgIGlmIChsaW5rLmNvbXBvbmVudCA9PT0gdGhpcykge1xuICAgICAgICAgIGZvcihsZXQgayBpbiBsaW5rKSB7XG4gICAgICAgICAgICBkZWxldGUgbGlua1trXVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGFyci5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFhcnIubGVuZ3RoKSB7XG4gICAgICAgIGRlbGV0ZSBsaW5rc1trZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIGNoaWxkcmVuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHJldHVybnMge05vZGVbXX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZW1vdmVDaGlsZHJlbihvcHRpb25zID0ge30pIHtcbiAgICBsZXQgbm9kZXMgPSBbXTtcblxuICAgIGNvbnN0IHJlbW92ZSA9IChjaGlsZHJlbikgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgcmVtb3ZlKGNoaWxkLl9fYWtpbGkuX19jaGlsZHJlbik7XG4gICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KGNoaWxkLl9fYWtpbGkuX19yZW1vdmUob3B0aW9ucykpO1xuICAgICAgICBpLS07XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJlbW92ZSh0aGlzLl9fY2hpbGRyZW4pO1xuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGNvbXBvbmVudCB3aXRob3V0IHRoZSBjaGlsZHJlbiByZW1vdmluZ1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEByZXR1cm5zIHtOb2RlW119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcmVtb3ZlKG9wdGlvbnMgPSB7fSkgeyBcbiAgICBsZXQgbm9kZXMgPSBbXTtcbiAgICB0aGlzLmF0dHJzLm9uUmVtb3ZlZCAmJiB0aGlzLmF0dHJzLm9uUmVtb3ZlZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTsgXG4gICAgdGhpcy5yZW1vdmVkKCk7ICAgXG4gICAgbm9kZXMgPSBub2Rlcy5jb25jYXQodGhpcy5fX2RldGFjaCh7IHNhdmVCaW5kaW5nczogdHJ1ZSwgZGVpbml0aWFsaXplTm9kZXM6IHRydWUgfSkuY29uY2F0KHRoaXMuX19lbXB0eSh7IHNhdmVCaW5kaW5nczogdHJ1ZSB9KSkpO1xuICAgIHRoaXMuX19jbGVhclN0b3JlTGlua3MoKTsgIFxuICAgIEFraWxpLnJlbW92ZVNjb3BlKHRoaXMuX19zY29wZS5fX25hbWUpOyAgICBcbiAgICB0aGlzLmVsLnJlbW92ZSgpO1xuXG4gICAgaWYoIW9wdGlvbnMuc2F2ZUJpbmRpbmdzKSB7XG4gICAgICB0aGlzLl9fdW5iaW5kQnlOb2Rlcyhub2Rlcyk7ICAgXG4gICAgICB0aGlzLl9fdW5iaW5kUGFyZW50c0J5Tm9kZXMobm9kZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRhY2ggdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGV0YWNoKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuX19wYXJlbnQgJiYgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fc3BsaWNlQ2hpbGQodGhpcy5lbCk7XG4gICAgY29uc3Qgbm9kZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5hdHRyaWJ1dGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG5vZGUgPSB0aGlzLmVsLmF0dHJpYnV0ZXNbaV07XG5cbiAgICAgIGlmKG5vZGUuX19pbml0aWFsaXplZCkge1xuICAgICAgICBub2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICBvcHRpb25zLmRlaW5pdGlhbGl6ZU5vZGVzICYmIHRoaXMuX19kZWluaXRpYWxpemVOb2RlKG5vZGUsIHsgc2F2ZUJpbmRpbmdzOiB0cnVlIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKCFvcHRpb25zLnNhdmVCaW5kaW5ncykge1xuICAgICAgdGhpcy5fX3VuYmluZFBhcmVudHNCeU5vZGVzKG5vZGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIGNvbXBvbmVudCBodG1sXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHJldHVybnMge05vZGVbXX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19lbXB0eShvcHRpb25zID0ge30pIHsgICAgXG4gICAgY29uc3Qgbm9kZXMgPSB0aGlzLl9fcmVtb3ZlQ2hpbGRyZW4oeyBzYXZlQmluZGluZ3M6IHRydWUgfSk7XG4gICAgXG4gICAgdGhpcy5fX21hcE5vZGVzKG5vZGUgPT4geyAgICAgIFxuICAgICAgaWYobm9kZS5ub2RlVHlwZSA9PSAxKSB7XG4gICAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYoIW5vZGUuX19pbml0aWFsaXplZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9ICAgICAgXG4gICAgICBcbiAgICAgIHRoaXMuX19kZWluaXRpYWxpemVOb2RlKG5vZGUsIHsgc2F2ZUJpbmRpbmdzOiB0cnVlIH0pOyAgXG4gICAgICBub2Rlcy5wdXNoKG5vZGUpO1xuICAgIH0sIHsgcm9vdEF0dHJzOiBmYWxzZSB9KTtcblxuICAgIGlmKCFvcHRpb25zLnNhdmVCaW5kaW5ncykge1xuICAgICAgdGhpcy5fX3VuYmluZEJ5Tm9kZXMobm9kZXMpO1xuICAgICAgdGhpcy5fX3VuYmluZFBhcmVudHNCeU5vZGVzKG5vZGVzKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHBhcmVudCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZpbmRBbGw9dHJ1ZV0gLSBnZXQgYXJyYXkgaWYgdHJ1ZVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldFBhcmVudChzZWxlY3RvciA9ICcnLCBmaW5kQWxsID0gZmFsc2UsIGxldmVscyA9IG51bGwpIHtcbiAgICBsZXQgYXJyID0gW107XG4gICAgbGV0IGxldmVsID0gMDtcblxuICAgIGlmICh0eXBlb2YgbGV2ZWxzICE9ICdvYmplY3QnKSB7XG4gICAgICBsZXZlbHMgPSBbbGV2ZWxzXTtcbiAgICB9XG5cbiAgICBjb25zdCBmaW5kID0gKHBhcmVudCkgPT4ge1xuICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWxldmVscyB8fCBsZXZlbHMuaW5kZXhPZihsZXZlbCkgIT0gLTEpIHtcbiAgICAgICAgaWYgKCFzZWxlY3RvciB8fCBwYXJlbnQuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIGlmICghZmluZEFsbCkge1xuICAgICAgICAgICAgYXJyLnB1c2gocGFyZW50Ll9fYWtpbGkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFyci5wdXNoKHBhcmVudC5fX2FraWxpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXZlbCsrO1xuICAgICAgZmluZChwYXJlbnQuX19ha2lsaS5fX3BhcmVudCk7XG4gICAgfTtcblxuICAgIGZpbmQodGhpcy5fX3BhcmVudCk7XG4gICAgcmV0dXJuIGZpbmRBbGw/IGFycjogKGFyclswXSB8fCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGNoaWxkIGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0Q2hpbGRyZW4oc2VsZWN0b3IgPSAnJywgZmluZEFsbCA9IHRydWUsIGxldmVscyA9IG51bGwpIHtcbiAgICBsZXQgYXJyID0gW107XG4gICAgbGV0IGxldmVsID0gMDtcblxuICAgIGlmICh0eXBlb2YgbGV2ZWxzICE9ICdvYmplY3QnKSB7XG4gICAgICBsZXZlbHMgPSBbbGV2ZWxzXTtcbiAgICB9XG5cbiAgICBjb25zdCBmaW5kID0gKGNoaWxkcmVuKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcblxuICAgICAgICBpZiAoIWxldmVscyB8fCBsZXZlbHMuaW5kZXhPZihsZXZlbCkgIT0gLTEpIHtcbiAgICAgICAgICBpZiAoIXNlbGVjdG9yIHx8IGNoaWxkLl9fYWtpbGkubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIGlmICghZmluZEFsbCkge1xuICAgICAgICAgICAgICBhcnIucHVzaChjaGlsZC5fX2FraWxpKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhcnIucHVzaChjaGlsZC5fX2FraWxpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV2ZWwrKztcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgZmluZChjaGlsZHJlbltpXS5fX2FraWxpLl9fY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmaW5kKHRoaXMuX19jaGlsZHJlbik7XG4gICAgcmV0dXJuIGZpbmRBbGw/IGFycjogKGFyclswXSB8fCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5lYXJlc3QgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kQWxsPXRydWVdIC0gZ2V0IGFycmF5IGlmIHRydWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbcmlnaHQ9ZmFsc2VdIC0gZnJvbSB0aGUgcmlnaHQgc2lkZSBpZiB0cnVlXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0TmVhcihzZWxlY3RvciA9ICcnLCBmaW5kQWxsID0gdHJ1ZSwgcmlnaHQgPSBmYWxzZSkge1xuICAgIGlmICghdGhpcy5fX3BhcmVudCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGxldmVsRWxlbWVudHMgPSB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19jaGlsZHJlbi5zbGljZSgpO1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICByaWdodCAmJiBsZXZlbEVsZW1lbnRzLnJldmVyc2UoKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGV2ZWxFbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBlbCA9IGxldmVsRWxlbWVudHNbaV07XG5cbiAgICAgIGlmIChlbCA9PT0gdGhpcy5lbCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKCFzZWxlY3RvciB8fCBlbC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGFyci5wdXNoKGVsLl9fYWtpbGkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFyci5yZXZlcnNlKCk7XG5cbiAgICBpZiAoIWZpbmRBbGwpIHtcbiAgICAgIHJldHVybiBhcnIubGVuZ3RoPyBhcnJbMF06IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIGxpbmsgd2l0aCB0aGUgc3RvcmVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXXxmdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgc3RvcmUobmFtZSwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5fX2lzTW91bnRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNZXRob2QgXCJzdG9yZVwiIG11c3QgYmUgY2FsbGVkIGFmdGVyIHRoZSBjb21waWxhdGlvbi4gRm9yIGV4YW1wbGUsIGluIFwiY29tcGlsZWRcIiBtZXRob2QuYCk7XG4gICAgfVxuXG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICh0eXBlb2YgbmFtZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhcmdzLnVuc2hpZnQoJyonKTtcbiAgICAgIGhhbmRsZXIgPSBuYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJz8gdGhpcy5fX3N0b3JlQnlGdW5jdGlvbiguLi5hcmdzKTogdGhpcy5fX3N0b3JlQnlLZXlzKC4uLmFyZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgbGluayB3aXRoIHRoZSBhdHRyaWJ1dGVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXXxmdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgYXR0cihuYW1lLCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLl9faXNNb3VudGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE1ldGhvZCBcImF0dHJcIiBtdXN0IGJlIGNhbGxlZCBhZnRlciB0aGUgY29tcGlsYXRpb24uIEZvciBleGFtcGxlLCBpbiBcImNvbXBpbGVkXCIgbWV0aG9kLmApO1xuICAgIH1cblxuICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodHlwZW9mIG5hbWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYXJncy51bnNoaWZ0KCcqJyk7XG4gICAgICBoYW5kbGVyID0gbmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbic/IHRoaXMuX19hdHRyQnlGdW5jdGlvbiguLi5hcmdzKTogdGhpcy5fX2F0dHJCeUtleXMoLi4uYXJncyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBzdG9yZSBsaW5rXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHVuc3RvcmUobmFtZSwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5fX2lzTW91bnRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNZXRob2QgXCJ1bnN0b3JlXCIgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgdGhlIGNvbXBpbGF0aW9uLiBGb3IgZXhhbXBsZSwgaW4gXCJjb21waWxlZFwiIG1ldGhvZC5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYgKHR5cGVvZiBuYW1lID09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFyZ3MudW5zaGlmdCgnKicpO1xuICAgICAgaGFuZGxlciA9IG5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nPyB0aGlzLl9fdW5zdG9yZUJ5RnVuY3Rpb24oLi4uYXJndW1lbnRzKTogdGhpcy5fX3Vuc3RvcmVCeUtleXMoLi4uYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGF0dHJpYnV0ZSBsaW5rXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHVuYXR0cihuYW1lLCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLl9faXNNb3VudGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE1ldGhvZCBcInVuYXR0clwiIG11c3QgYmUgY2FsbGVkIGFmdGVyIHRoZSBjb21waWxhdGlvbi4gRm9yIGV4YW1wbGUsIGluIFwiY29tcGlsZWRcIiBtZXRob2QuYCk7XG4gICAgfVxuXG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICh0eXBlb2YgbmFtZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhcmdzLnVuc2hpZnQoJyonKTtcbiAgICAgIGhhbmRsZXIgPSBuYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJz8gdGhpcy5fX3VuYXR0ckJ5RnVuY3Rpb24oLi4uYXJndW1lbnRzKTogdGhpcy5fX3VuYXR0ckJ5S2V5cyguLi5hcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBjb21wb25lbnQgdXNpbmcgdGhlIHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBzZWxlY3RvclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIG1hdGNoZXMoc2VsZWN0b3IpIHtcbiAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBzZWxlY3Rvcih0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5lbC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGNsb3Nlc3QgcGFyZW50IGNvbXBvbmVudCBieSB0aGUgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIHBhcmVudChzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRQYXJlbnQoc2VsZWN0b3IsIGZhbHNlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbiBhcnJheSBvZiBwYXJlbnQgY29tcG9uZW50cyBieSB0aGUgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgcGFyZW50cyhzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRQYXJlbnQoc2VsZWN0b3IsIHRydWUsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjbG9zZXN0IGNoaWxkIGNvbXBvbmVudCBieSB0aGUgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIGNoaWxkKHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldENoaWxkcmVuKHNlbGVjdG9yLCBmYWxzZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYW4gYXJyYXkgb2YgY2hpbGQgY29tcG9uZW50cyBieSB0aGUgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgY2hpbGRyZW4oc2VsZWN0b3IgPSAnJywgbGV2ZWxzID0gbnVsbCkge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0Q2hpbGRyZW4oc2VsZWN0b3IsIHRydWUsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFuIGFycmF5IG9mIGNvbXBvbmVudHMgbGVmdCBmcm9tIHRoZSBjdXJyZW50IGJ5IHRoZSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBiZWZvcmUoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgdHJ1ZSwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbiBhcnJheSBvZiBjb21wb25lbnRzIHJpZ2h0IGZyb20gdGhlIGN1cnJlbnQgYnkgdGhlIHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGFmdGVyKHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIHRydWUsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY2xvc2VzdCBsZWZ0Y29tcG9uZW50IGJ5IHRoZSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgcHJldihzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCBmYWxzZSwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY2xvc2VzdCByaWdodCBjb21wb25lbnQgYnkgdGhlIHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR9XG4gICAqL1xuICBuZXh0KHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIGZhbHNlLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgdGhlIGVsZW1lbnQgcGFyZW50XG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gcGFyZW50XG4gICAqL1xuICBhcHBlbmRUbyhwYXJlbnQpIHsgICBcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHsgc2V0UGFyZW50czogdHJ1ZSwgY2hlY2tDaGFuZ2VzOiBmYWxzZSB9IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbmNlbCB0aGUgY29tcG9uZW50IGNvbXBpbGF0aW9uXG4gICAqL1xuICBjYW5jZWwoKSB7XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ29tcGlsZSB0aGUgY29tcG9uZW50IGJ1dCBwcmV2ZW50IHRoZSBjb21waWxhdGlvbiBpbnNpZGVcbiAgICovXG4gIHByZXZlbnQoKSB7XG4gICAgdGhpcy5fX3ByZXZlbnQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBlbGVtZW50IGNvbnRlbnRcbiAgICpcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBlbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2VtcHR5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBlbGVtZW50XG4gICAqXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgcmVtb3ZlKCkge1xuICAgIHJldHVybiB0aGlzLl9fcmVtb3ZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjcmVhdGVkKCkge31cbiAgY29tcGlsZWQoKSB7fVxuICByZWNvbXBpbGVkKCkge31cbiAgcmVzb2x2ZWQoKSB7fVxuICByZW1vdmVkKCkge31cbn0iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBSZXF1ZXN0IGNsYXNzLlxuICogVGhlIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgYWxsb3dzIHlvdSB0byBtYWtlIHJlcXVlc3RzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JlcXVlc3RzfVxuICovXG5leHBvcnQgY2xhc3MgUmVxdWVzdCB7XG4gIF9fY2FjaGUgPSB7fTtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVcmxcbiAgICogQHBhcmFtIHtvYmplY3R9IFtkZWZhdWx0c10gXG4gICAqL1xuICBjb25zdHJ1Y3RvcihiYXNlVXJsLCBkZWZhdWx0cykge1xuICAgIHRoaXMuYmFzZVVybCA9IGJhc2VVcmw/IChiYXNlVXJsLnJlcGxhY2UoL1xcLyQvLCAnJykgKyAnLycpOiAnJztcblxuICAgIHRoaXMuZGVmYXVsdHMgPSB7XG4gICAgICBzdGF0dXNFcnJvclBhdHRlcm46IC9eW14yM10vLFxuICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgLi4uKGRlZmF1bHRzIHx8IHt9KVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogU2VuZCB0aGUgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHF1ZXJ5KG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgb3B0aW9ucyA9IHsuLi50aGlzLmRlZmF1bHRzLCAuLi4ob3B0aW9ucyB8fCB7fSl9OyBcbiAgICAgIG9wdGlvbnMudXJsID0gdGhpcy5iYXNlVXJsPyBgJHt0aGlzLmJhc2VVcmx9JHtvcHRpb25zLnVybC5yZXBsYWNlKC9eXFwvLywgJycpfWA6IG9wdGlvbnMudXJsOyAgXG4gICAgICBvcHRpb25zLm1ldGhvZCA9IG9wdGlvbnMubWV0aG9kIHx8ICdHRVQnO1xuICAgICAgXG4gICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7ICAgICAgXG4gICAgICBjb25zdCBiZWZvcmUgPSB0aGlzLnRyYW5zZm9ybUJlZm9yZSh4aHIsIG9wdGlvbnMpO1xuICAgICAgeGhyID0gYmVmb3JlLnhocjtcbiAgICAgIG9wdGlvbnMgPSBiZWZvcmUub3B0aW9ucztcbiAgICAgICh0eXBlb2Ygb3B0aW9ucy5vblN0YXJ0ID09ICdmdW5jdGlvbicpICYmIG9wdGlvbnMub25TdGFydCh4aHIpOyAgXG4gICAgICBvcHRpb25zLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwge307XG4gICAgICBcbiAgICAgIGlmIChvcHRpb25zLmpzb24pIHtcbiAgICAgICAgb3B0aW9ucy5qc29uICE9PSB0cnVlICYmIChvcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShvcHRpb25zLmpzb24pKTtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzWydjb250ZW50LXR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgb3B0aW9ucy5yZXNwb25zZVR5cGUgPSBvcHRpb25zLnJlc3BvbnNlVHlwZSB8fCAnanNvbic7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChvcHRpb25zLmZvcm0pIHtcbiAgICAgICAgb3B0aW9ucy5ib2R5ID0gdGhpcy5jcmVhdGVGb3JtRGF0YShvcHRpb25zLmZvcm0pO1xuICAgICAgICBvcHRpb25zLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddID0gJ211bHRpcGFydC9mb3JtLWRhdGEnO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5wYXJhbXMpIHtcbiAgICAgICAgbGV0IHN0ciA9IHRoaXMucGFyYW1zVG9RdWVyeShvcHRpb25zLnBhcmFtcyk7XG4gICAgICAgIHN0ciAmJiAob3B0aW9ucy51cmwgKz0gXCI/XCIgKyBzdHIpO1xuICAgICAgfVxuICAgICAgICAgICBcbiAgICAgIGxldCBoYXNoID0gbnVsbDtcbiAgICAgIGxldCBjYWNoZSA9IHR5cGVvZiBvcHRpb25zLmNhY2hlID09ICdmdW5jdGlvbic/IG9wdGlvbnMuY2FjaGUob3B0aW9ucyk6IG9wdGlvbnMuY2FjaGU7XG4gICAgICAoIXdpbmRvdy5BS0lMSV9TU1IgJiYgIUFraWxpLl9faW5pdCkgJiYgKGNhY2hlID0gdHJ1ZSk7XG5cbiAgICAgIGlmKG9wdGlvbnMubWV0aG9kLnRvVXBwZXJDYXNlKCkgPT0gJ0dFVCcgJiYgKCFvcHRpb25zLmJvZHkgfHwgdHlwZW9mIG9wdGlvbnMuYm9keSA9PSAnc3RyaW5nJykpIHtcbiAgICAgICAgaGFzaCA9IHRoaXMuY3JlYXRlQ2FjaGVIYXNoKHsgXG4gICAgICAgICAgdXJsOiBvcHRpb25zLnVybCxcbiAgICAgICAgICBtZXRob2Q6IG9wdGlvbnMubWV0aG9kLFxuICAgICAgICAgIHVzZXI6IG9wdGlvbnMudXNlciwgXG4gICAgICAgICAgcGFzc3dvcmQ6IG9wdGlvbnMucGFzc3dvcmQsIFxuICAgICAgICAgIGJvZHk6IG9wdGlvbnMuYm9keSBcbiAgICAgICAgfSk7ICAgICAgICBcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYoY2FjaGUgJiYgaGFzaCkgeyAgICAgICAgXG4gICAgICAgIGxldCBfY2FjaGUgPSB0aGlzLmdldENhY2hlKGhhc2gpO1xuICAgICAgICBsZXQgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgaWYoX2NhY2hlICYmIChjYWNoZSA9PT0gdHJ1ZSB8fCBub3cgLSBfY2FjaGUuY3JlYXRlZEF0IDw9IGNhY2hlKSkge1xuICAgICAgICAgIHJldHVybiByZXNvbHZlKHRoaXMudHJhbnNmb3JtQWZ0ZXIoX2NhY2hlLnJlc3VsdCkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCBvcHRpb25zLnVybCwgdHJ1ZSwgb3B0aW9ucy51c2VyLCBvcHRpb25zLnBhc3N3b3JkKTtcblxuICAgICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ3RpbWVvdXQnKSkge1xuICAgICAgICB4aHIudGltZW91dCA9IG9wdGlvbnMudGltZW91dDtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMucmVzcG9uc2VUeXBlKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSBvcHRpb25zLnJlc3BvbnNlVHlwZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSBvcHRpb25zLndpdGhDcmVkZW50aWFscztcbiAgICAgIH1cblxuICAgICAgbGV0IGhlYWRlcktleXMgPSBPYmplY3Qua2V5cyhvcHRpb25zLmhlYWRlcnMpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGhlYWRlcktleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrID0gaGVhZGVyS2V5c1tpXTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaywgb3B0aW9ucy5oZWFkZXJzW2tdKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm9uUHJvZ3Jlc3MgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB4aHIub25wcm9ncmVzcyA9ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gb3B0aW9ucy5vblByb2dyZXNzKHhocik7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgICByZXNwb25zZTogeGhyLnJlc3BvbnNlLFxuICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgICAgICByZWFkeVN0YXRlOiB4aHIucmVhZHlTdGF0ZSxcbiAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHhoci53aXRoQ3JlZGVudGlhbHMsXG4gICAgICAgICAgcmVzcG9uc2VUeXBlOiB4aHIucmVzcG9uc2VUeXBlLFxuICAgICAgICAgIHJlc3BvbnNlVGV4dDogeGhyLnJlc3BvbnNlVHlwZSA9PSAndGV4dCc/IHhoci5yZXNwb25zZVRleHQ6ICcnLFxuICAgICAgICAgIHJlc3BvbnNlWE1MOiB4aHIucmVzcG9uc2VUeXBlID09ICdkb2N1bWVudCc/IHhoci5yZXNwb25zZVhNTDogJycsXG4gICAgICAgICAgcmVzcG9uc2VVUkw6IHhoci5yZXNwb25zZVVSTCxcbiAgICAgICAgICB0aW1lb3V0OiB4aHIudGltZW91dCxcbiAgICAgICAgICBoZWFkZXJzOiB0aGlzLmdldEhlYWRlcnMoeGhyKSwgICAgICAgICBcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHRoaXMudHJhbnNmb3JtQWZ0ZXIocmVzdWx0KTtcblxuICAgICAgICBpZiAob3B0aW9ucy5zdGF0dXNFcnJvclBhdHRlcm4gJiYgKHhoci5zdGF0dXMgKyAnJykubWF0Y2gob3B0aW9ucy5zdGF0dXNFcnJvclBhdHRlcm4pKSB7XG4gICAgICAgICAgbGV0IGVyciA9IG5ldyBFcnJvcihgUmVxdWVzdCB0byBcIiR7b3B0aW9ucy51cmx9XCIgcmV0dXJucyBmYWlsdXJlIHN0YXR1cyBjb2RlICR7eGhyLnN0YXR1c31gKTtcbiAgICAgICAgICBlcnIucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgIH0gXG5cbiAgICAgICAgKGNhY2hlIHx8IHdpbmRvdy5BS0lMSV9TU1IpICYmIGhhc2ggJiYgdGhpcy5jcmVhdGVDYWNoZShoYXNoLCByZXN1bHQpO1xuICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbnRpbWVvdXQgPSAoKSA9PiB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFJlcXVlc3QgdG8gXCIke29wdGlvbnMudXJsfVwiIHRpbWVkIG91dGApKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgeGhyLnNlbmQob3B0aW9ucy5ib2R5KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGhlYWRlcnMgb2YgYW4gWE1MSHR0cFJlcXVlc3QgaW5zdGFuY2VcbiAgICogXG4gICAqIEBwYXJhbSB7WE1MSHR0cFJlcXVlc3R9XG4gICAqL1xuICBnZXRIZWFkZXJzID0gZnVuY3Rpb24oeGhyKSB7XG4gICAgbGV0IGhlYWRlcnMgPSB7fTtcbiAgICBsZXQgc3RyID0geGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpOyAgXG4gICAgbGV0IGFyciA9IHN0ci5zcGxpdCgnXFx1MDAwZFxcdTAwMGEnKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGxpbmUgPSBhcnJbaV07XG4gICAgICBsZXQgaW5kZXggPSBsaW5lLmluZGV4T2YoJ1xcdTAwM2FcXHUwMDIwJyk7XG5cbiAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgbGV0IGtleSA9IGxpbmUuc3Vic3RyaW5nKDAsIGluZGV4KTtcbiAgICAgICAgbGV0IHZhbCA9IGxpbmUuc3Vic3RyaW5nKGluZGV4ICsgMik7XG4gICAgICAgIGhlYWRlcnNba2V5XSA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaGVhZGVycztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGNhY2hlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGFzaFxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgZ2V0Q2FjaGUoaGFzaCkge1xuICAgIHJldHVybiB0aGlzLl9fY2FjaGVbaGFzaF0gfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIGNhY2hlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGFzaFxuICAgKiBAcGFyYW0ge29iamVjdH0gcmVzdWx0XG4gICAqL1xuICBjcmVhdGVDYWNoZShoYXNoLCByZXN1bHQpIHtcbiAgICB0aGlzLl9fY2FjaGVbaGFzaF0gPSB7IHJlc3VsdCwgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLmdldFRpbWUoKSB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgY2FjaGVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXG4gICAqL1xuICByZW1vdmVDYWNoZShoYXNoKSB7XG4gICAgZGVsZXRlIHRoaXMuX19jYWNoZVtoYXNoXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBoYXNoIGZvciBzYXZpbmcgaW4gdGhlIGNhY2hlXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgY3JlYXRlQ2FjaGVIYXNoKGRhdGEpIHtcbiAgICByZXR1cm4gdXRpbHMuY3JlYXRlSGFzaChkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHRoZSBvYmplY3QgdG8gYSBxdWVyeSBzdHJpbmdcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgcGFyYW1zVG9RdWVyeShvYmopIHtcbiAgICBsZXQgc2VwID0gJyYnO1xuICAgIGxldCBlcSA9ICc9JztcblxuICAgIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubWFwKChrKSA9PiB7XG4gICAgICBsZXQga3MgPSBlbmNvZGVVUklDb21wb25lbnQoayk7XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9ialtrXSkpIHtcbiAgICAgICAga3MgPSBlbmNvZGVVUklDb21wb25lbnQoayk7XG4gICAgICAgIHJldHVybiBvYmpba10ubWFwKCh2LCBpKSA9PiBrcyArIGBbJHtpfV1gICsgZXEgKyBlbmNvZGVVUklDb21wb25lbnQodikpLmpvaW4oc2VwKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG9ialtrXSAmJiB0eXBlb2Ygb2JqW2tdID09PSAnb2JqZWN0Jykge1xuICAgICAgICBsZXQgb3B0ID0gW107XG4gICAgICAgIE9iamVjdC5rZXlzKG9ialtrXSkubWFwKChrZXkpID0+IG9wdC5wdXNoKGtzICsgYFske2tleX1dYCArIGVxICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrXVtrZXldKSkpO1xuICAgICAgICByZXR1cm4gb3B0LmpvaW4oc2VwKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4ga3MgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba10pO1xuICAgICAgfVxuICAgIH0pLmpvaW4oc2VwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHRoZSBxdWVyeSBzdHJpbmcgdG8gYW4gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHBhcmFtc0Zyb21RdWVyeShzdHIpIHtcbiAgICBsZXQgcXVlcnkgPSB7fTtcbiAgICBsZXQgYW1wcyA9IHN0ci5zcGxpdCgnJicpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBhbXBzLmxlbmd0aDsgaSA8bDsgaSsrKSB7XG4gICAgICBsZXQgZXFzID0gIGFtcHNbaV0uc3BsaXQoJz0nKTtcbiAgICAgIGxldCBrZXkgPSBkZWNvZGVVUklDb21wb25lbnQoZXFzWzBdKTtcbiAgICAgIGxldCB2YWwgPSBkZWNvZGVVUklDb21wb25lbnQoZXFzWzFdKTtcblxuICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICAgIHF1ZXJ5W2tleV0ucHVzaCh2YWwpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAocXVlcnlba2V5XSkge1xuICAgICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0sIHZhbF07XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcXVlcnlba2V5XSA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIG11bHRpcGFydCBmb3JtIGRhdGEgZnJvbSB0aGUgb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICogQHBhcmFtIHtGb3JtRGF0YX0gW2RhdGFdXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbmFtZXNwYWNlXVxuICAgKiBAcmV0dXJucyB7Rm9ybURhdGF9XG4gICAqL1xuICBjcmVhdGVGb3JtRGF0YShvYmosIGRhdGEgPSBudWxsLCBuYW1lc3BhY2UgPSAnJykge1xuICAgIGxldCBmZCA9IGRhdGEgfHwgbmV3IEZvcm1EYXRhKCk7XG5cbiAgICBmb3IgKGxldCBrIGluIG9iaikge1xuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrKSAmJiBvYmpba10pIHtcbiAgICAgICAgbGV0IGtleSA9IG5hbWVzcGFjZT8gbmFtZXNwYWNlICsgJ1snICsgayArICddJzogaztcblxuICAgICAgICBpZiAob2JqW2tdIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgIGZkLmFwcGVuZChrZXksIG9ialtrXS50b0lTT1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KG9ialtrXSkpIHtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm1EYXRhKG9ialtrXSwgZmQsIGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZmQuYXBwZW5kKGtleSwgb2JqW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gdGhlIGRhdGEgYmVmb3JlIHRoZSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7WE1MSHR0cFJlcXVlc3R9IHhoclxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgdHJhbnNmb3JtQmVmb3JlKHhociwgb3B0aW9ucykge1xuICAgIHJldHVybiB7IHhociwgb3B0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIHRoZSBkYXRhIGFmdGVyIHRoZSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSByZXN1bHRcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHRyYW5zZm9ybUFmdGVyKHJlc3VsdCkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5yZXN1bHQsXG4gICAgICBkYXRhOiByZXN1bHQucmVzcG9uc2UsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBhIEdFVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBnZXQodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdHRVQnO1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2VhIGEgREVMRVRFIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGRlbGV0ZSh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ0RFTEVURSc7XG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIFBPU1QgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcG9zdCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ1BPU1QnO1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBQVVQgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcHV0KHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnUFVUJztcbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBhIFBBVENIIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHBhdGNoKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnUEFUQ0gnO1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBIRUFEIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGhlYWQodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdIRUFEJztcbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoKTtcblxuLyoqXG4gKiBTZXQgdGhlIGRlZmF1bHQgdmFyaWFibGVzXG4gKi9cbnJlcXVlc3Quc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX19pbnN0YW5jZXMgPSB7fTtcbiAgdGhpcy5fX2NhY2hlID0ge307XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGluc3RhbmNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7UmVxdWVzdH0gaW5zdGFuY2VcbiAqL1xucmVxdWVzdC5hZGRJbnN0YW5jZSA9IGZ1bmN0aW9uKG5hbWUsIGluc3RhbmNlKSB7XG4gIHRoaXMuX19pbnN0YW5jZXNbbmFtZV0gPSBpbnN0YW5jZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnJlcXVlc3QucmVtb3ZlSW5zdGFuY2UgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLl9faW5zdGFuY2VzW25hbWVdO1xufTtcblxuLyoqXG4gKiBEZWluaXRpYWxpemUgdGhlIHNlcnZpY2VcbiAqL1xucmVxdWVzdC5kZWluaXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zZXREZWZhdWx0cygpO1xufTtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWVzdCwgJ3VzZScsIHtcbiAgZ2V0OiAoKSA9PiB7XG4gICAgcmV0dXJuIHJlcXVlc3QuX19pbnN0YW5jZXM7XG4gIH1cbn0pO1xuXG5yZXF1ZXN0LlJlcXVlc3QgPSBSZXF1ZXN0O1xuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdDtcbnJlcXVlc3Quc2V0RGVmYXVsdHMoKTsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG4vKipcbiAqIEJhc2UgY29tcG9uZW50IHRvIHdvcmsgd2l0aCB0ZXh0IGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbnB1dH1cbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX3RleHRhcmVhfVxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfY29udGVudGVkaXRhYmxlfVxuICogXG4gKiBAYXR0ciB7c3RyaW5nfSB2YWx1ZSAtIGFjdHVhbCB2YWx1ZVxuICogQGF0dHIge2Jvb2xlYW59IGZvY3VzIC0gc2V0IHRoZSBmb2N1cyBvciBub3RcbiAqIEBhdHRyIHtudW1iZXJ9IGRlYm91bmNlIC0gZGVib3VuY2UgZGVsYXlcbiAqIEBtZXNzYWdlIHt2b2lkfSBkZWJvdW5jZSAtIHNlbnQgb24gdGhlIGRlYm91bmNlIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2lucHV0fVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy52YWx1ZUtleSA9ICd2YWx1ZSc7XG4gICAgdGhpcy5kZWJvdW5jZUludGVydmFsID0gNTAwO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgaWYodGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ29uLWRlYm91bmNlJykpIHtcbiAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB1dGlscy5kZWJvdW5jZSgoKSA9PiB0aGlzLmF0dHJzLm9uRGVib3VuY2UudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogdHJ1ZSB9KSwgdGhpcy5kZWJvdW5jZUludGVydmFsKSk7XG4gICAgfVxuXG4gICAgdGhpcy5hdHRyKCdmb2N1cycsIHRoaXMuc2V0Rm9jdXMpO1xuICAgIHRoaXMuYXR0cigndmFsdWUnLCB0aGlzLnNldFZhbHVlKTtcbiAgICB0aGlzLmF0dHIoJ2RlYm91bmNlJywgdGhpcy5zZXREZWJvdW5jZSk7XG4gIH1cblxuICBzZXREZWJvdW5jZShpbnRlcnZhbCkge1xuICAgIHRoaXMuZGVib3VuY2VJbnRlcnZhbCA9ICtpbnRlcnZhbDtcbiAgfVxuXG4gIHNldEZvY3VzKHZhbHVlKSB7XG4gICAgdmFsdWU/IHRoaXMuc2V0RWxlbWVudEZvY3VzKCk6IHRoaXMuc2V0RWxlbWVudEJsdXIoKTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgKHRoaXMuZWxbdGhpcy52YWx1ZUtleV0gIT09IHZhbHVlKSAmJiAodGhpcy5lbFt0aGlzLnZhbHVlS2V5XSA9IHZhbHVlID09PSAwPyAnMCc6ICh2YWx1ZSB8fCAnJykpO1xuICB9XG5cbiAgc2V0RWxlbWVudEZvY3VzKCkge1xuICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgfVxuXG4gIHNldEVsZW1lbnRCbHVyKCkge1xuICAgIHRoaXMuZWwuYmx1cigpO1xuICB9XG59XG5cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgbG9vcHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2xvb3BzfVxuICogXG4gKiBAdGFnIGZvclxuICogQHNlbGVjdG9yIGZvcltpbl0sb2xbaW5dLHVsW2luXSx0aGVhZFtpbl0sdGJvZHlbaW5dLHRmb290W2luXVxuICogQGF0dHIge29iamVjdHxhcnJheX0gaW4gLSBkYXRhIHRvIGNyZWF0ZSB0aGUgbG9vcFxuICogQG1lc3NhZ2Uge29iamVjdHxhcnJheX0gb3V0IC0gc2VudCBvbiB0aGUgZGF0YSBjaGFuZ2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW2luXSc7XG4gIHN0YXRpYyBldmVudHMgPSBbJ291dCddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdmb3InLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ29sJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd1bCcsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGhlYWQnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3Rib2R5JywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0Zm9vdCcsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndHInLCB0aGlzLkxvb3ApO1xuICAgIEFraWxpLmNvbXBvbmVudCgnbG9vcCcsIHRoaXMuTG9vcCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgXG4gICAgdGhpcy5pdGVyYXRvcnMgPSBbXTtcbiAgICB0aGlzLml0ZXJhdG9yRWwgPSBudWxsO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIF9fcHJlcGFyZUF0dHJpYnV0ZUluKG5vZGUsIHZhbHVlKSB7ICBcbiAgICBpZigobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKSAmJiBub2RlLm5hbWUgPT0gJ2luJykge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlci5fX3ByZXBhcmVBdHRyaWJ1dGVJbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgX19jb21wYXJlTm9kZVByb3BlcnR5VmFsdWUocHJvcCwgdmFsdWUpIHtcbiAgICBjb25zdCBub2RlID0gcHJvcC5ub2RlO1xuXG4gICAgaWYoKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cikgJiYgbm9kZS5uYW1lID09ICdpbicgJiYgcHJvcC52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHN1cGVyLl9fY29tcGFyZU5vZGVQcm9wZXJ0eVZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjcmVhdGVkKCkgeyAgICBcbiAgICB0aGlzLmNyZWF0ZUl0ZXJhdG9yKCk7ICAgIFxuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRyKCdpbicsIHRoaXMuZHJhdyk7XG4gIH1cblxuICByZW1vdmVkKCkge1xuICAgIGRlbGV0ZSB0aGlzLmh0bWw7XG4gICAgdGhpcy5pdGVyYXRvcnMgPSBudWxsO1xuICAgIHRoaXMuaXRlcmF0b3JFbCA9IG51bGw7IFxuICB9XG5cbiAgY3JlYXRlSXRlcmF0b3IoKSB7XG4gICAgbGV0IGVsO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5lbC5jaGlsZHJlbltpXTtcblxuICAgICAgaWYgKGNoaWxkLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50JykgPT0gJ2xvb3AnKSB7XG4gICAgICAgIGVsID0gY2hpbGQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBlbCA9IGNoaWxkO1xuICAgIH1cblxuICAgIGlmICghZWwpIHtcbiAgICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbG9vcCcpOyAgICAgIFxuICAgICAgZWwuaW5uZXJIVE1MID0gdGhpcy5lbC5pbm5lckhUTUw7IFxuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoZWwpO1xuICAgIH1cblxuICAgIGxldCBjb21wb25lbnROYW1lID0gZWwuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKTtcblxuICAgIGlmIChjb21wb25lbnROYW1lICE9ICdsb29wJykge1xuICAgICAgbGV0IGNvbXBvbmVudCA9IEFraWxpLmNvbXBvbmVudChjb21wb25lbnROYW1lIHx8IGVsLnRhZ05hbWUpO1xuXG4gICAgICBpZiAoIWNvbXBvbmVudCkge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcsICdsb29wJyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghKGNvbXBvbmVudC5wcm90b3R5cGUgaW5zdGFuY2VvZiBGb3IpKSB7XG4gICAgICAgIGxldCBtYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbG9vcCcpO1xuICAgICAgICBtYXNrLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgZWwgPSBtYXNrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaHRtbCA9IGVsLmlubmVySFRNTDtcbiAgICB0aGlzLml0ZXJhdG9yRWwgPSB0aGlzLmNyZWF0ZUl0ZXJhdG9yRWxlbWVudChlbC5vdXRlckhUTUwpO1xuICAgIGVsLnJlbW92ZSgpO1xuICB9XG5cbiAgY3JlYXRlSXRlcmF0b3JFbGVtZW50KGh0bWwpIHtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIGVsLmlubmVySFRNTCA9IGh0bWw7XG4gICAgcmV0dXJuIGVsLmNvbnRlbnQuZmlyc3RDaGlsZDtcbiAgfVxuXG4gIGxvb3Aoa2V5LCB2YWx1ZSwgaW5kZXgpIHtcbiAgICB0aGlzLl9faW5kZXggPSBpbmRleDtcbiAgICB0aGlzLl9fa2V5ID0ga2V5O1xuICAgIHRoaXMuX192YWx1ZSA9IHZhbHVlOyAgICBcbiAgICB0aGlzLl9faGFzaCA9IHV0aWxzLmNyZWF0ZUhhc2godmFsdWUpO1xuXG4gICAgaWYodGhpcy5pdGVyYXRvcnMubGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIGxldCBpdGVyYXRvciA9IHRoaXMuaXRlcmF0b3JzW2luZGV4XTsgICAgICAgIFxuICAgICAgaXRlcmF0b3Iuc2V0SW5kZXgodGhpcy5fX2luZGV4ID09PSBpdGVyYXRvci5pbmRleCk7ICAgICBcbiAgICAgIGl0ZXJhdG9yLnNldEtleSh0aGlzLl9fa2V5ID09PSBpdGVyYXRvci5rZXkpO1xuICAgICAgaXRlcmF0b3Iuc2V0VmFsdWUodXRpbHMuY29tcGFyZSh0aGlzLl9faGFzaCwgaXRlcmF0b3IuaGFzaCkpO1xuICAgICAgdGhpcy5fX3Byb21pc2VzLnB1c2goQWtpbGkuY29tcGlsZShpdGVyYXRvci5lbCwgeyBcbiAgICAgICAgcmVjb21waWxlOiB7IFxuICAgICAgICAgIGNoZWNrQ2hhbmdlczogdHJ1ZSxcbiAgICAgICAgICBzZXRCb29sZWFuQXR0cmlidXRlczogZmFsc2VcbiAgICAgICAgfSBcbiAgICAgIH0pKTtcbiAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICB9XG4gICAgXG4gICAgbGV0IGVsID0gdGhpcy5pdGVyYXRvckVsLmNsb25lTm9kZSgpO1xuICAgIGVsLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGVsKTtcbiAgICB0aGlzLl9fcHJvbWlzZXMucHVzaChBa2lsaS5jb21waWxlKGVsKSk7XG4gICAgdGhpcy5pdGVyYXRvcnMucHVzaChlbC5fX2FraWxpKTtcbiAgICByZXR1cm4gZWwuX19ha2lsaTtcbiAgfVxuXG4gIGRyYXcoZGF0YSkge1xuICAgIGlmICh0eXBlb2YgZGF0YSAhPSAnb2JqZWN0JyB8fCBkYXRhID09PSBudWxsKSB7XG4gICAgICBpZiAoQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLndhcm4oYFwiRm9yXCIgY29tcG9uZW50IFwiaW5cIiBhdHRyaWJ1dGUgdmFsdWUgdHlwZSBtdXN0IGJlIGFuIG9iamVjdC9hcnJheWApOyAgICAgICAgXG4gICAgICB9XG5cbiAgICAgIGRhdGEgPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGEgPSBkYXRhOyAgIFxuICAgIGxldCBpbmRleCA9IDA7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbXS5zbGljZS5jYWxsKHRoaXMuZWwuY2hpbGRyZW4pOyBcbiAgICB0aGlzLml0ZXJhdG9ycy5zb3J0KChhLCBiKSA9PiBjaGlsZHJlbi5pbmRleE9mKGEuZWwpIC0gY2hpbGRyZW4uaW5kZXhPZihiLmVsKSk7XG4gICAgdGhpcy5fX2NoaWxkcmVuLnNvcnQoKGEsIGIpID0+IGNoaWxkcmVuLmluZGV4T2YoYSkgLSBjaGlsZHJlbi5pbmRleE9mKGIpKTtcbiAgICBjb25zdCBsb29wID0gKGtleSwgdmFsdWUsIGluZGV4KSA9PiB0aGlzLmxvb3Aoa2V5LCB2YWx1ZSwgaW5kZXgpLml0ZXJhdGUoaW5kZXgpO1xuXG4gICAgaWYoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgZm9yIChsZXQgbCA9IGRhdGEubGVuZ3RoOyBpbmRleCA8IGw7IGluZGV4KyspIHtcbiAgICAgICAgbG9vcChpbmRleCwgZGF0YVtpbmRleF0sIGluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpO1xuXG4gICAgICBmb3IgKGxldCBsID0ga2V5cy5sZW5ndGg7IGluZGV4IDwgbDsgaW5kZXgrKykge1xuICAgICAgICBsZXQga2V5ID0ga2V5c1tpbmRleF07XG4gICAgICAgIGxvb3Aoa2V5LCBkYXRhW2tleV0sIGluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IGluZGV4LCBsID0gdGhpcy5pdGVyYXRvcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgaXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yc1tpXTtcbiAgICAgIGl0ZXJhdG9yLl9fcmVtb3ZlKCk7XG4gICAgICB0aGlzLml0ZXJhdG9ycy5zcGxpY2UoaSwgMSk7XG4gICAgICBsLS07XG4gICAgICBpLS07XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHRoaXMuX19wcm9taXNlcykudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB0aGlzLmF0dHJzLm9uT3V0LnRyaWdnZXIoZGF0YSwgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgIH0pOyAgICBcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCB0aGUgaW5pdGlhbCBzdGF0ZVxuICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5fX2l0ZXJhdG9yID0gbnVsbDtcbiAgICB0aGlzLl9faW5kZXggPSAwO1xuICAgIHRoaXMuX19rZXkgPSAnJztcbiAgICB0aGlzLl9fdmFsdWUgPSBudWxsO1xuICAgIHRoaXMuX19oYXNoID0gJyc7XG4gICAgdGhpcy5fX3Byb21pc2VzID0gW107XG4gIH0gIFxufVxuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgbG9vcHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2xvb3BzfVxuICogXG4gKiBAdGFnIGxvb3BcbiAqIEBzZWxlY3RvciBsb29wLHRyXG4gKiBAYXR0ciBAc2VlIEZvclxuICogQHNjb3BlIHsqfSBsb29wVmFsdWUgLSBkYXRhIGl0ZW0ncyB2YWx1ZSBvZiB0aGUgY3VycmVudCBpdGVyYXRpb24gXG4gKiBAc2NvcGUge3N0cmluZ3xudW1iZXJ9IGxvb3BLZXkgLSBrZXkgb2YgdGhlIGl0ZXJhdGlvblxuICogQHNjb3BlIHtudW1iZXJ9IGxvb3BJbmRleCAtIGluZGV4IG9mIHRoZSBpdGVyYXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIExvb3AgZXh0ZW5kcyBGb3Ige1xuICBzdGF0aWMgbWF0Y2hlcyA9ICcnO1xuICBzdGF0aWMgY29udHJvbEF0dHJpYnV0ZXMgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuZm9yID0gbnVsbDtcbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmlzRm9yID0gdGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ2luJyk7XG5cbiAgICBpZiAoIXRoaXMuaXNGb3IgJiYgISh0aGlzLmVsLnBhcmVudE5vZGUuX19ha2lsaSBpbnN0YW5jZW9mIEZvcikpIHtcbiAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19pdGVyYXRvciA9IHRoaXM7XG4gICAgdGhpcy5mb3IgPSB0aGlzLl9fcGFyZW50Ll9fYWtpbGk7XG4gICAgdGhpcy5zZXRJbmRleCh0cnVlKTtcbiAgICB0aGlzLnNldEtleSh0cnVlKTtcbiAgICB0aGlzLnNldFZhbHVlKHRydWUpO1xuXG4gICAgaWYodGhpcy5pc0Zvcikge1xuICAgICAgcmV0dXJuIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICBpZih0aGlzLmlzRm9yKSB7XG4gICAgICByZXR1cm4gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVkKCkge1xuICAgIHN1cGVyLnJlbW92ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLmZvciA9IG51bGw7XG4gICAgZGVsZXRlIHRoaXMudmFsdWU7XG4gICAgZGVsZXRlIHRoaXMua2V5O1xuICAgIGRlbGV0ZSB0aGlzLmluZGV4O1xuICAgIGRlbGV0ZSB0aGlzLmhhc2g7ICAgIFxuICB9XG5cbiAgc2V0SW5kZXgodGFyZ2V0KSB7XG4gICAgdGhpcy5pbmRleCA9IHRoaXMuZm9yLl9faW5kZXg7XG4gICAgdGhpcy5zY29wZS5fX3NldCgnbG9vcEluZGV4JywgdGhpcy5pbmRleCwgZmFsc2UsIHRhcmdldCk7XG4gIH1cblxuICBzZXRLZXkodGFyZ2V0KSB7XG4gICAgdGhpcy5rZXkgPSB0aGlzLmZvci5fX2tleTtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wS2V5JywgdGhpcy5rZXksIGZhbHNlLCB0YXJnZXQpO1xuICB9XG5cbiAgc2V0VmFsdWUodGFyZ2V0KSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuZm9yLl9fdmFsdWU7XG4gICAgdGhpcy5zY29wZS5fX3NldCgnbG9vcFZhbHVlJywgdGhpcy52YWx1ZSwgdHJ1ZSwgdGFyZ2V0KTtcbiAgICB0aGlzLmhhc2ggPSB0aGlzLmZvci5fX2hhc2g7XG4gIH1cblxuICBpdGVyYXRlKCkge31cbn1cblxuRm9yLkxvb3AgPSBMb29wOyIsImltcG9ydCBBa2lsaSBmcm9tICcuL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcblxuLyoqXG4gKiBTY29wZSBjbGFzcy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9zY29wZX1cbiAqXG4gKiBBbGwgcHJvcGVydGllcyBzdGFydGluZyB3aXRoIF9fIGFyZSBub3QgbW9uaXRvcmVkLlxuICogWW91IGNhbiB1c2UgdGhlbSBmb3IgaW50ZXJuYWwgbWFuaXB1bGF0aW9ucy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcGUge1xuICBzdGF0aWMgbmVzdGVkV2F0Y2hpbmc7XG5cbiAgY29uc3RydWN0b3IobmFtZSwgZWwsIGNvbXBvbmVudCkge1xuICAgIHRoaXMuX19uYW1lID0gbmFtZTtcbiAgICB0aGlzLl9fZWwgPSBlbDtcbiAgICB0aGlzLl9fY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIGVsLnNldEF0dHJpYnV0ZSgnc2NvcGUnLCBuYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHNjb3BlIHZhbHVlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3N0cmljdD1mYWxzZV0gLSB3aXRob3V0IG9iamVjdCBjb3B5aW5nXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0KGtleXMsIHZhbHVlLCBzdHJpY3QgPSBmYWxzZSwgdGFyZ2V0ID0gZmFsc2UpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuICAgIFxuICAgIEFraWxpLnVuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICBzdHJpY3QgJiYgKHRoaXMuX19jb21wb25lbnQuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nID0gdHJ1ZSk7XG4gICAgICB1dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0YXJnZXQ/IHRoaXMuX190YXJnZXQ6IHRoaXMsIChsYXN0LCB2YWwpID0+IHtcbiAgICAgICAgaWYgKCFsYXN0KSB7XG4gICAgICAgICAgcmV0dXJuIHZhbCB8fCB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgc3RyaWN0ICYmICh0aGlzLl9fY29tcG9uZW50Ll9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyA9IGZhbHNlKTtcbiAgICB9KTtcbiAgfVxufSIsIi8qKlxuICogQ2xhc3MgdG8gd29yayB3aXRoIGV2ZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9ldmVudHN9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIG5vZGUsIGVsLCBjb21wb25lbnQpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5lbCA9IGVsO1xuICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgdGhlIGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gZGF0YVxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlXVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHRyaWdnZXIoZGF0YSwgb3B0aW9ucyA9IHt9LCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgaWYodGhpcy5fX3JlbW92ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZm9yY2UgfHwgIXRoaXMuaW5FdmFsdWF0aW5nKCkpIHtcbiAgICAgIHRoaXMuZWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQodGhpcy5uYW1lLCB0aGlzLnByZXBhcmVPcHRpb25zKHsgZGV0YWlsOiBkYXRhLCAgLi4ub3B0aW9ucyB9KSkpO1xuICAgIH0gICBcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaCB0aGUgZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gX0V2ZW50IC0gY2xhc3Mgb2YgdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZGlzcGF0Y2goX0V2ZW50LCBvcHRpb25zID0ge30sIGZvcmNlID0gZmFsc2UpIHtcbiAgICBpZih0aGlzLl9fcmVtb3ZlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChmb3JjZSB8fCAhdGhpcy5pbkV2YWx1YXRpbmcoKSkge1xuICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnQodGhpcy5uYW1lLCB0aGlzLnByZXBhcmVPcHRpb25zKG9wdGlvbnMpKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFByZXBlcmUgdGhlIGV2ZW50IG9wdGlvbnNcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gXG4gICAqL1xuICBwcmVwYXJlT3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0geyBidWJibGVzOiB0cnVlLCAuLi5vcHRpb25zIH07IFxuICAgIHRoaXMubm9kZS5fX2NvbXBvbmVudC5fX3ByZXBhcmVBdHRyaWJ1dGVPdXQodGhpcy5ub2RlLCBvcHRpb25zLmRldGFpbCk7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGV2ZW50IGNhbGxiYWNrIGRvZXNuJ3QgcnVuIHJlY3Vyc2l2ZWx5XG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaW5FdmFsdWF0aW5nKCkge1xuICAgIGxldCBkYXRhID0gdGhpcy5jb21wb25lbnQuX19ldmFsdWF0aW5nRXZlbnQ7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YS5lbCA9PT0gdGhpcy5lbCAmJiBkYXRhLmV2ZW50LnR5cGUgPT09IHRoaXMubmFtZSAmJiBkYXRhLmNvbXBvbmVudCA9PT0gdGhpcy5jb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogQmluZCB0aGUgZnVuY3Rpb25cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICovXG4gIGJpbmQoZm4pIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5uYW1lLCB0aGlzLmZuID0gZm4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCB0aGUgZnVuY3Rpb25cbiAgICovXG4gIHVuYmluZCgpIHtcbiAgICB0aGlzLmZuICYmIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMuZm4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgZW1pdHRlclxuICAgKi9cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMudW5iaW5kKCk7XG4gICAgZGVsZXRlIHRoaXMubmFtZTtcbiAgICBkZWxldGUgdGhpcy5uYW1lO1xuICAgIHRoaXMubm9kZSA9IG51bGw7XG4gICAgdGhpcy5jb21wb25lbnQgPSBudWxsO1xuICAgIHRoaXMuZWwgPSBudWxsO1xuICAgIHRoaXMuX19yZW1vdmVkID0gdHJ1ZTtcbiAgfVxufSIsImltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG4vKipcbiAqIFN0b3JlIGFsbG93cyB5b3UgdG8gc2F2ZSBhbmQgc2hhcmUgZGF0YS5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9zdG9yZX1cbiAqL1xuY29uc3Qgc3RvcmUgPSBuZXcgUHJveHkoe30sIHtcbiAgZ2V0OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICBpZiAoa2V5ID09IFwiX190YXJnZXRcIikge1xuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gIH0sXG4gIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgIGlmKHV0aWxzLmNvbXBhcmUodGFyZ2V0W2tleV0sIHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxuICAgIHZhbHVlID0gdXRpbHMuY29weSh2YWx1ZSwgeyBwbGFpbjogdHJ1ZSB9KTtcbiAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgIEFraWxpLnJvb3QgJiYgQWtpbGkucm9vdC5fX3N0b3JlVHJpZ2dlckJ5TmFtZShrZXksIHZhbHVlKTsgICAgXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICBBa2lsaS5yb290ICYmIEFraWxpLnJvb3QuX19zdG9yZVRyaWdnZXJCeU5hbWUoa2V5LCB1bmRlZmluZWQpO1xuICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlOyIsImltcG9ydCBBa2lsaSBmcm9tICcuL2FraWxpLmpzJztcblxuY29uc3Qgb2JqID0ge307XG5cbi8qKlxuICogR2xvYmFscyBpcyBmb3IgdXNpbmcgdGhlIGN1c3RvbSB2YXJpYWJsZXMgaW4gaHRtbFxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3Njb3BlI2RvY3NfZ2xvYmFsc31cbiAqL1xuY29uc3QgZ2xvYmFscyA9IG5ldyBQcm94eShvYmosIHtcbiAgZ2V0OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICBpZihrZXkgPT0gJ19fdGFyZ2V0Jykge1xuICAgICAgcmV0dXJuIG9ialxuICAgIH0gICBcbiAgICBcbiAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gIH0sXG4gIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgIHRhcmdldFtrZXldID0gQWtpbGkud3JhcCh2YWx1ZSwgeyB0YWc6IGtleSB9KTsgICAgXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXkpID0+IHsgICBcbiAgICBBa2lsaS5yZW1vdmVUYWcoa2V5KTtcbiAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBnbG9iYWxzOyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi9zZXJ2aWNlcy9yZXF1ZXN0LmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIHJvdXRlciB0ZW1wbGF0ZXMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3RlbXBsYXRlc31cbiAqIFxuICogQHRhZyByb3V0ZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdyb3V0ZScsIHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1RyYW5zaXRpb259IHRyYW5zaXRpb25cbiAgICogQHBhcmFtIHtib29sZWFufSBsb2FkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgc2V0VHJhbnNpdGlvbih0cmFuc2l0aW9uLCBsb2FkID0gdHJ1ZSkge1xuICAgIGxldCBzdGF0ZSA9IHRyYW5zaXRpb24ucGF0aC5zdGF0ZTtcblxuICAgIGNvbnN0IGdldFBhcmVudFNjb3BlVHJhbnNpdGlvbiA9IChwYXRoKSA9PiB7XG4gICAgICBpZiAocGF0aC5wYXJlbnQpIHtcbiAgICAgICAgaWYgKHBhdGgucGFyZW50LmNvbXBvbmVudCkge1xuICAgICAgICAgIHJldHVybiBwYXRoLnBhcmVudC5jb21wb25lbnQuX19zY29wZS5fX3RyYW5zaXRpb24ucGF0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24ocGF0aC5wYXJlbnQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBjb21waWxlID0gKGh0bWwpID0+IHsgXG4gICAgICB0aGlzLmVtcHR5KCk7ICBcbiAgICAgIGxldCBuYW1lID0gJ2NvbXBvbmVudCc7XG5cbiAgICAgIGlmKHN0YXRlLmNvbXBvbmVudCkge1xuICAgICAgICBsZXQgZXhpc3RzID0gZmFsc2U7XG4gICAgXG4gICAgICAgIGZvcihsZXQga2V5IGluIEFraWxpLl9fY29tcG9uZW50cykge1xuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IEFraWxpLl9fY29tcG9uZW50c1trZXldO1xuICAgIFxuICAgICAgICAgIGlmKGNvbXBvbmVudCA9PT0gc3RhdGUuY29tcG9uZW50KSB7XG4gICAgICAgICAgICBuYW1lID0ga2V5OyAgICAgICAgICAgIFxuICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICBpZighZXhpc3RzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgXCIke3N0YXRlLm5hbWV9XCIgaGFzIG5vIGRlZmluZWQgY29tcG9uZW50YClcbiAgICAgICAgfSBcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBgPCR7IG5hbWUgfT4keyBodG1sIH08LyR7IG5hbWUgfT5gO1xuICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fX3Njb3BlLl9fdHJhbnNpdGlvbiA9IHsgIFxuICAgICAgcGFyZW50OiBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24odHJhbnNpdGlvbi5wYXRoKSwgICBcbiAgICAgIHN0YXRlOiB0cmFuc2l0aW9uLnBhdGguc3RhdGUsXG4gICAgICBkYXRhOiB0cmFuc2l0aW9uLnBhdGguZGF0YSxcbiAgICAgIHVybDogdHJhbnNpdGlvbi5wYXRoLnVybCxcbiAgICAgIHBhcmFtczogdHJhbnNpdGlvbi5wYXRoLnBhcmFtcyxcbiAgICAgIHF1ZXJ5OiB0cmFuc2l0aW9uLnBhdGgucXVlcnksXG4gICAgICBoYXNoOiB0cmFuc2l0aW9uLnBhdGguaGFzaFxuICAgIH07XG5cbiAgICBpZiAoIWxvYWQpIHtcbiAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB7IGNoZWNrQ2hhbmdlczogdHJ1ZSB9IH0pO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIGlmIChzdGF0ZS50ZW1wbGF0ZSkge1xuICAgICAgICByZXR1cm4gc3RhdGUudGVtcGxhdGU7XG4gICAgICB9XG4gIFxuICAgICAgaWYgKHN0YXRlLnRlbXBsYXRlVXJsKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0LmdldChzdGF0ZS50ZW1wbGF0ZVVybCkudGhlbihyZXMgPT4gcmVzLmRhdGEpO1xuICAgICAgfVxuICAgIH0pLnRoZW4oaHRtbCA9PiBjb21waWxlKGh0bWwpKTtcbiAgfVxufSIsImltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9yZXF1ZXN0LmpzJztcbmltcG9ydCBSb3V0ZSBmcm9tICcuLi9jb21wb25lbnRzL3JvdXRlLmpzJztcblxuLyoqXG4gKiBUcmFuc2l0aW9uIGNsYXNzLlxuICogVGhlIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgaW5jbHVkZXMgdGhlIGxhc3QgYWN0dWFsIHJvdXRlciB0cmFuc2l0aW9uIGluZm9ybWF0aW9uLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmcjZG9jc190cmFuc2l0aW9ufVxuICovXG5leHBvcnQgY2xhc3MgVHJhbnNpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHVybCwgcHJldmlvdXMgPSBudWxsKSB7ICBcbiAgICB0aGlzLnVybCA9IHVybDsgIFxuICAgIHRoaXMucHJldmlvdXMgPSBwcmV2aW91cztcbiAgICB0aGlzLnBhdGggPSBudWxsO1xuICAgIHRoaXMucm91dGVzID0gW107XG4gICAgdGhpcy5zdGF0ZXMgPSB7fTtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2ZpbmlzZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWRpcmVjdCB0byBhbm90aGVyIHN0YXRlXG4gICAqIFxuICAgKiBAc2VlIHJvdXRlci5zdGF0ZVxuICAgKi9cbiAgcmVkaXJlY3Qoc3RhdGUsIHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gdW5kZWZpbmVkLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0geyAuLi5yb3V0ZXIudHJhbnNpdGlvbi5wYXRoLm9wdGlvbnMsIC4uLm9wdGlvbnMgfTtcbiAgICB0aGlzLmNhbmNlbCgpOyAgIFxuICAgIHJldHVybiByb3V0ZXIuc3RhdGUuY2FsbChyb3V0ZXIsIHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWxvYWQgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICogXG4gICAqIEBzZWUgVHJhbnNpdGlvbi5wcm90b3R5cGUucmVkaXJlY3RcbiAgICovXG4gIHJlbG9hZChwYXJhbXMgPSB7fSwgcXVlcnkgPSB7fSwgaGFzaCA9IHVuZGVmaW5lZCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcGFyYW1zID0geyAuLi50aGlzLnBhdGgucGFyYW1zLCAuLi5wYXJhbXMgfTtcbiAgICBxdWVyeSA9IHsgLi4udGhpcy5wYXRoLnF1ZXJ5LCAuLi5xdWVyeSB9O1xuICAgIGhhc2ggPSBoYXNoID09PSB1bmRlZmluZWQ/IHRoaXMucGF0aC5oYXNoOiBoYXNoO1xuICAgIHJldHVybiB0aGlzLnJlZGlyZWN0KHRoaXMucGF0aC5zdGF0ZS5uYW1lLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGN1cnJlbnQgcGF0aFxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IHBhdGggXG4gICAqL1xuICBzZXRQYXRoKHBhdGgpIHtcbiAgICBwYXRoLnBhcmVudCA9IHRoaXMucGF0aCB8fCBudWxsO1xuICAgIHRoaXMucGF0aCA9IHsgcGFyYW1zOiB7fSwgcXVlcnk6IHt9LCAuLi5wYXRoIH07XG4gICAgdGhpcy5yb3V0ZXMucHVzaCh0aGlzLnBhdGgpO1xuICAgIHRoaXMuc3RhdGVzW3RoaXMucGF0aC5zdGF0ZS5uYW1lXSA9IHRoaXMucGF0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSByb3V0ZSBieSB0aGUgc3RhdGVcbiAgICogIFxuICAgKiBAcGFyYW0geyp9IHN0YXRlIFxuICAgKi9cbiAgZ2V0Um91dGUoc3RhdGUpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMucm91dGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJvdXRlID0gdGhpcy5yb3V0ZXNbaV07XG5cbiAgICAgIGlmIChyb3V0ZS5zdGF0ZSA9PT0gc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHJvdXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGl0IGhhcyB0aGUgc3RhdGVcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSBcbiAgICovXG4gIGhhc1N0YXRlKHN0YXRlKSB7XG4gICAgcmV0dXJuICEhdGhpcy5zdGF0ZXNbc3RhdGUubmFtZV07XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIHJvdXRlIGlzIGNoYW5nZWRcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSByb3V0ZVxuICAgKi9cbiAgaXNSb3V0ZUNoYW5nZWQocm91dGUpIHtcbiAgICBpZighdGhpcy5wcmV2aW91cykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGUgPSByb3V0ZS5zdGF0ZTtcblxuICAgIGlmKCF0aGlzLnByZXZpb3VzLmhhc1N0YXRlKHN0YXRlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyYW1LZXlzID0gW107XG4gICAgc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZShyb3V0ZXIuX19wYXJhbVJlZ2V4LCAobSwgZiwgdikgPT4gcGFyYW1LZXlzLnB1c2godikpO1xuICAgIFxuICAgIGZvcihsZXQga2V5IGluIHN0YXRlLnBhcmFtcykge1xuICAgICAgaWYocGFyYW1LZXlzLmluZGV4T2Yoa2V5KSA9PSAtMSkge1xuICAgICAgICBwYXJhbUtleXMucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5S2V5cyA9IE9iamVjdC5rZXlzKHN0YXRlLnF1ZXJ5KTtcbiAgICBjb25zdCB3YXRjaEhhc2ggPSBzdGF0ZS5oYXNoICE9PSB1bmRlZmluZWQ7ICAgIFxuICAgIGNvbnN0IHByZXZSb3V0ZSA9IHRoaXMucHJldmlvdXMuZ2V0Um91dGUoc3RhdGUpOyBcblxuICAgIGNvbnN0IHByZXYgPSB7IFxuICAgICAgcGFyYW1zOiB1dGlscy5pbmNsdWRlS2V5cyhwcmV2Um91dGUucGFyYW1zLCBwYXJhbUtleXMpLCBcbiAgICAgIHF1ZXJ5OiB1dGlscy5pbmNsdWRlS2V5cyhwcmV2Um91dGUucXVlcnksIHF1ZXJ5S2V5cylcbiAgICB9O1xuXG4gICAgY29uc3QgY3VycmVudCA9IHtcbiAgICAgIHBhcmFtczogdXRpbHMuaW5jbHVkZUtleXMocm91dGUucGFyYW1zLCBwYXJhbUtleXMpLFxuICAgICAgcXVlcnk6IHV0aWxzLmluY2x1ZGVLZXlzKHJvdXRlLnF1ZXJ5LCBxdWVyeUtleXMpXG4gICAgfVxuXG4gICAgaWYod2F0Y2hIYXNoKSB7XG4gICAgICBwcmV2Lmhhc2ggPSBwcmV2Um91dGUuaGFzaDtcbiAgICAgIGN1cnJlbnQuaGFzaCA9IHJvdXRlLmhhc2g7XG4gICAgfVxuXG4gICAgcmV0dXJuICF1dGlscy5jb21wYXJlKHByZXYsIGN1cnJlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbmNlbCB0aGUgY3VycmVudCB0cmFuc2l0aW9uXG4gICAqL1xuICBjYW5jZWwoKSB7ICAgXG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IHRydWU7XG4gICAgdGhpcy5maW5pc2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5pc2ggdGhlIHRyYW5zaXRpb25cbiAgICovXG4gIGZpbmlzaCgpIHtcbiAgICB0aGlzLl9fZmluaXNlZCA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBBa2lsaSByb3V0ZXJcbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nfVxuICovXG5jb25zdCByb3V0ZXIgPSB7fTtcblxuLyoqXG4gKiBTZXQgdGhlIGRlZmF1bHQgdmFsdWVzXG4gKi9cbnJvdXRlci5zZXREZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5iYXNlVXJsID0gXCIvXCI7XG4gIHRoaXMuc3RhdGVzID0gW107XG4gIHRoaXMuaGFzaE1vZGUgPSB0cnVlO1xuICB0aGlzLl9fcmVkaXJlY3RzID0gMDtcbiAgdGhpcy5fX2luaXQgPSBmYWxzZTtcbiAgdGhpcy5fX3BhcmFtUmVnZXggPSAvKFxcLz86KFtcXHdcXGQtXSspKS9nO1xuICB0aGlzLl9fcm91dGVTZWxlY3RvciA9IGMgPT4gYyBpbnN0YW5jZW9mIFJvdXRlO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBzdGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc3RhdGUgbmFtZS4gVG8gc2V0IHBhcmVudHMgeW91IGNhbiB1c2UgZG90LCBlLmcuICdhcHAuYXJ0aWNsZS5lZGl0J1xuICogQHBhcmFtIHtzdHJpbmd9IHBhdHRlcm4gLSB1cmwgcGF0dGVybiBsaWtlICdhcHAvYXJ0aWNsZS86aWQnXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7cm91dGVyfVxuICovXG5yb3V0ZXIuYWRkID0gZnVuY3Rpb24gKG5hbWUsIHBhdHRlcm4sIG9wdGlvbnMgPSB7fSkge1xuICBpZih0eXBlb2YgbmFtZSA9PSAnb2JqZWN0Jykge1xuICAgIG9wdGlvbnMgPSBuYW1lO1xuICAgIHBhdHRlcm4gPSBvcHRpb25zLnBhdHRlcm47XG4gICAgbmFtZSA9IG9wdGlvbnMuc3RhdGU7XG4gICAgZGVsZXRlIG9wdGlvbnMucGF0dGVybjtcbiAgICBkZWxldGUgb3B0aW9ucy5zdGF0ZTtcbiAgfVxuXG4gIGlmKCFuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgbXVzdCBoYXZlIGEgbmFtZWApO1xuICB9XG5cbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgdGVtcGxhdGU6ICcnLFxuICAgIHRlbXBsYXRlVXJsOiAnJyxcbiAgICBhYnN0cmFjdDogZmFsc2UsXG4gICAgY29tcG9uZW50OiBudWxsLFxuICAgIHBhcmFtczoge30sXG4gICAgcXVlcnk6IHt9LFxuICAgIGhhbmRsZXI6ICgpID0+IHt9LFxuICB9O1xuXG4gIGlmKEFraWxpLm9wdGlvbnMuZGVidWcgJiYgb3B0aW9ucy5jb21wb25lbnQgJiYgKG9wdGlvbnMudGVtcGxhdGUgfHwgb3B0aW9ucy50ZW1wbGF0ZVVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihgUm91dGVyIHN0YXRlIFwiJHtuYW1lfVwiIG11c3Qgb25seSBoYXZlIGEgY29tcG9uZW50IG9yIHRlbXBsYXRlIG9wdGlvbmApO1xuICB9IFxuXG4gIGlmICghb3B0aW9ucy50ZW1wbGF0ZSAmJiAhb3B0aW9ucy50ZW1wbGF0ZVVybCAmJiAhb3B0aW9ucy5jb21wb25lbnQpIHtcbiAgICBvcHRpb25zLmFic3RyYWN0ID0gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0aGlzLmhhcyhuYW1lKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIFwiJHtuYW1lfVwiIGlzIGFscmVhZHkgZXhpc3RzYClcbiAgfVxuXG4gIHRoaXMuc2V0U3RhdGUobmFtZSwgcGF0dGVybiwgey4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zfSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIHN0YXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucm91dGVyLnJlbW92ZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAodGhpcy5zdGF0ZXNbaV0ubmFtZSA9PSBuYW1lKSB7XG4gICAgICB0aGlzLnN0YXRlcy5zcGxpY2UoaSwgMSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIHN0YXRlIGV4aXN0c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAodGhpcy5zdGF0ZXNbaV0ubmFtZSA9PSBuYW1lKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIENoYW5nZSB0aGUgc3RhdGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSAtIHBhcmFtcyBmb3Igc3RhdGUge2lkOiAxfSA9PiAnL2FwcC86aWQnID0+ICcvYXBwLzEnXG4gKiBAcGFyYW0ge29iamVjdH0gW3F1ZXJ5XSAtIHF1ZXJ5IHt4OiAxfSA9PiAnL2FwcC8/eD0xJ1xuICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoXVxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICovXG5yb3V0ZXIuc3RhdGUgPSBmdW5jdGlvbiAoc3RhdGUsIHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gdW5kZWZpbmVkLCBvcHRpb25zID0ge30pIHsgIFxuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgXG4gIGlmICghc3RhdGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCByb3V0ZSBzdGF0ZSB3aXRoIG5hbWUgJHtzdGF0ZX1gKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSB7IC4uLm9wdGlvbnMgfTtcbiAgb3B0aW9ucy5tYW51YWwgPSB0cnVlO1xuICAoeyBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zIH0gPSB0aGlzLnByZXBhcmVTdGF0ZUFyZ3Moc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMsIGZhbHNlKSk7ICBcbiAgbGV0IHVybCA9IHRoaXMuY3JlYXRlU3RhdGVVcmwoc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMpOyAgICBcbiAgdGhpcy5pc29sYXRlKCgpID0+IHRoaXMuc2V0VXJsKHVybCkpO1xuICByZXR1cm4gdGhpcy5jaGFuZ2VTdGF0ZShvcHRpb25zKTtcbn07XG5cbi8qKlxuICogR28gYmFja1xuICovXG5yb3V0ZXIuYmFjayA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkuYmFjay5hcHBseSh3aW5kb3cuaGlzdG9yeSwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogR28gdG8gc29tZSBwb3NpdGlvblxuICovXG5yb3V0ZXIuZ28gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LmdvLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBHbyBmb3J3YXJkXG4gKi9cbnJvdXRlci5mb3J3YXJkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeS5mb3J3YXJkLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2UgdGhlIHN0YXRlIGJ5IHRoZSB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKi9cbnJvdXRlci5sb2NhdGlvbiA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICBvcHRpb25zID0geyAuLi5vcHRpb25zIH07XG4gIG9wdGlvbnMubWFudWFsID0gdHJ1ZTtcbiAgdGhpcy5pc29sYXRlKCgpID0+IHRoaXMuc2V0VXJsKHVybCkpOyAgXG4gIHJldHVybiB0aGlzLmNoYW5nZVN0YXRlKG9wdGlvbnMpO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSByb3V0ZXIuIFxuICogTXVzdCBiZSBjYWxsZWQgYmVmb3JlIEFraWxpLmluaXQoKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbZGVmYXVsdFVybF1cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2hhc2hNb2RlPXRydWVdXG4gKi9cbnJvdXRlci5pbml0ID0gZnVuY3Rpb24gKGRlZmF1bHRVcmwgPSAnJywgaGFzaE1vZGUgPSB0cnVlKSB7XG4gIGxldCBvbGRQdXNoU3RhdGUgPSB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGU7XG5cbiAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IHJlcyA9IG9sZFB1c2hTdGF0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgcm91dGVyLmNoYW5nZVN0YXRlKCkuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIHRoaXMuX19vblN0YXRlQ2hhbmdlSGFuZGxlciA9ICgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIHRoaXMuY2hhbmdlU3RhdGUoKS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICB9O1xuXG4gIHRoaXMuZGVmYXVsdFVybCA9IGRlZmF1bHRVcmw7XG4gIHRoaXMuaGFzaE1vZGUgPSBoYXNoTW9kZTsgICAgXG5cbiAgdGhpcy5zdGF0ZXMuc29ydCgoYSwgYikgPT4ge1xuICAgIGEgPSBhLm5hbWUuc3BsaXQoJy4nKS5sZW5ndGg7XG4gICAgYiA9IGIubmFtZS5zcGxpdCgnLicpLmxlbmd0aDtcbiAgICByZXR1cm4gYSAtIGI7XG4gIH0pO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdGhpcy5pbml0U3RhdGUodGhpcy5zdGF0ZXNbaV0pO1xuICB9XG5cbiAgaWYgKCF0aGlzLnN0YXRlcy5sZW5ndGggJiYgQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKGBZb3UgZGlkbid0IGFkZCBhbnkgcm91dGVzIHRvIHRoZSByb3V0ZXJgKTtcbiAgfVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMuX19vblN0YXRlQ2hhbmdlSGFuZGxlcik7XG4gIHRoaXMuX19pbml0ID0gdHJ1ZTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgc3RhdGUgXG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSBcbiAqL1xucm91dGVyLmluaXRTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICBsZXQgcGFyZW50cyA9IFtdO1xuICBzdGF0ZS5jaGlsZHJlbiA9IFtdO1xuICBwYXJlbnRzID0gc3RhdGUubmFtZS5zcGxpdCgnLicpO1xuICBwYXJlbnRzLnBvcCgpO1xuICBzdGF0ZS5sZXZlbCA9IHN0YXRlLmFic3RyYWN0PyBudWxsOiBwYXJlbnRzLmxlbmd0aDtcblxuICBpZiAocGFyZW50cy5sZW5ndGgpIHtcbiAgICBsZXQgcGFyZW50TmFtZSA9IHBhcmVudHMuam9pbignLicpO1xuICAgIGxldCBwYXJlbnQgPSB0aGlzLmdldFN0YXRlKHBhcmVudE5hbWUpO1xuXG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIHBhcmVudCByb3V0ZSBzdGF0ZSBcIiR7cGFyZW50TmFtZX1cIiBmb3IgXCIke3N0YXRlLm5hbWV9XCJgKVxuICAgIH1cblxuICAgIGlmIChzdGF0ZS5sZXZlbCAhPT0gbnVsbCAmJiBwYXJlbnQuYWJzdHJhY3QpIHtcbiAgICAgIHN0YXRlLmxldmVsLS07XG4gICAgfVxuXG4gICAgc3RhdGUuZnVsbFBhdHRlcm4gPSB0aGlzLnNwbGl0U2xhc2hlcyhwYXJlbnQuZnVsbFBhdHRlcm4gKyAnLycgKyBzdGF0ZS5wYXR0ZXJuKTtcbiAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaChzdGF0ZSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgc3RhdGUuZnVsbFBhdHRlcm4gPSBzdGF0ZS5wYXR0ZXJuO1xuICB9XG59XG5cbi8qKlxuICogR2V0IHRoZSBzdGF0ZSBieSB0aGUgbmFtZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gKi9cbnJvdXRlci5nZXRTdGF0ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZXNbaV07XG5cbiAgICBpZiAoc3RhdGUubmFtZSA9PSBuYW1lKSB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIFNldCB0aGUgc3RhdGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IHBhdHRlcm5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKi9cbnJvdXRlci5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChuYW1lLCBwYXR0ZXJuLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IHN0YXRlID0gey4uLm9wdGlvbnMsIG5hbWUsIHBhdHRlcm59O1xuICB0aGlzLnN0YXRlcy5wdXNoKHN0YXRlKTtcbiAgdGhpcy5fX2luaXQgJiYgdGhpcy5pbml0U3RhdGUoc3RhdGUpO1xuICByZXR1cm4gc3RhdGU7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgc3RhdGUgYnkgdGhlIG5hbWVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5yb3V0ZXIucmVtb3ZlU3RhdGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLm5hbWUgPT0gbmFtZSkge1xuICAgICAgdGhpcy5zdGF0ZXMuc3BsaWNlKGksIDEpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFNldCB0aGUgdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICovXG5yb3V0ZXIuc2V0VXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB0aGlzLmhhc2hNb2RlPyB0aGlzLnNldEhhc2hVcmwodXJsKTogdGhpcy5zZXRIaXN0b3J5VXJsKHVybCk7XG59O1xuXG4vKipcbiAqIFNldCB0aGUgdXJsIHVzaW5nIHRoZSBoaXN0b3J5XG4gKlxuICogQHBhcmFtIHVybFxuICovXG5yb3V0ZXIuc2V0SGlzdG9yeVVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1cmwpO1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIHVybCB1c2luZyB0aGUgaGFzaFxuICpcbiAqIEBwYXJhbSB1cmxcbiAqL1xucm91dGVyLnNldEhhc2hVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyMnICsgKHVybCB8fCAnLycpO1xufTtcblxuLyoqXG4gKiBSZXBsYWNlIHRoZSB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKi9cbnJvdXRlci5yZXBsYWNlVXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB0aGlzLmhhc2hNb2RlPyB0aGlzLnJlcGxhY2VIYXNoVXJsKHVybCk6IHRoaXMucmVwbGFjZUhpc3RvcnlVcmwodXJsKTtcbn07XG5cbi8qKlxuICogUmVwbGFjZSB0aGUgdXJsIHVzaW5nIHRoZSBoaXN0b3J5XG4gKlxuICogQHBhcmFtIHVybFxuICovXG5yb3V0ZXIucmVwbGFjZUhpc3RvcnlVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgdXJsKTtcbn07XG5cbi8qKlxuICogUmVwbGFjZSB0aGUgdXJsIHVzaW5nIHRoZSBoYXNoXG4gKlxuICogQHBhcmFtIHVybFxuICovXG5yb3V0ZXIucmVwbGFjZUhhc2hVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgJyMnICsgKHVybCB8fCAnLycpKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSB1cmxcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuZ2V0VXJsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5oYXNoTW9kZSA/IHRoaXMuZ2V0SGFzaFVybCgpIDogdGhpcy5nZXRIaXN0b3J5VXJsKCk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgdXJsIHVzaW5nIHRoZSBoaXN0b3J5XG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLmdldEhpc3RvcnlVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoICsgd2luZG93LmxvY2F0aW9uLmhhc2g7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgdXJsIHVzaW5nIHRoZSBoYXNoXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLmdldEhhc2hVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKC9eIy8sICcnKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBxdWVyeSBwYXJhbXNcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0VXJsUXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuaGFzaE1vZGUgPyB0aGlzLmdldEhhc2hVcmxRdWVyeSgpIDogdGhpcy5nZXRIaXN0b3J5VXJsUXVlcnkoKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBxdWVyeSBwYXJhbXMgdXNpbmcgdGhlIGhpc3RvcnlcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0SGlzdG9yeVVybFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByZXF1ZXN0LnBhcmFtc0Zyb21RdWVyeSh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIHF1ZXJ5IHBhcmFtcyB1c2luZyB0aGUgaGFzaFxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRIYXNoVXJsUXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJlcXVlc3QucGFyYW1zRnJvbVF1ZXJ5KCh3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnPycpWzFdIHx8ICcnKSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSB0aGUgdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdXG4gKiBAcGFyYW0ge29iamVjdH0gW3F1ZXJ5XVxuICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoXVxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtib29sZWFufSBbcHJlcGFyZV1cbiAqL1xucm91dGVyLmNyZWF0ZVN0YXRlVXJsID0gZnVuY3Rpb24gKHN0YXRlLCBwYXJhbXMgPSB7fSwgcXVlcnkgPSB7fSwgaGFzaCA9IHVuZGVmaW5lZCwgb3B0aW9ucyA9IHt9LCBwcmVwYXJlID0gdHJ1ZSkge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgb3B0aW9ucyA9IHsgLi4ub3B0aW9ucyB9O1xuICBcbiAgaWYocHJlcGFyZSkge1xuICAgICh7IHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMgfSA9IHRoaXMucHJlcGFyZVN0YXRlQXJncyhzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucykpO1xuICB9XG5cbiAgbGV0IHVybCA9IHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2UodGhpcy5fX3BhcmFtUmVnZXgsIChtLCBmLCB2KSA9PiAnLycgKyAocGFyYW1zW3ZdIHx8ICcnKSk7XG4gIHVybCA9IHVybC5yZXBsYWNlKC9eXFxeLywgJycpO1xuICB1cmwgPSB0aGlzLnNwbGl0U2xhc2hlcyh1cmwpO1xuXG4gIGlmIChPYmplY3Qua2V5cyhxdWVyeSkubGVuZ3RoKSB7XG4gICAgdXJsICs9ICc/JyArIHJlcXVlc3QucGFyYW1zVG9RdWVyeShxdWVyeSk7XG4gIH1cblxuICBpZiAoIXRoaXMuaGFzaE1vZGUgJiYgaGFzaCkge1xuICAgIHVybCArPSAnIycgKyBoYXNoLnJlcGxhY2UoJyMnLCAnJyk7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcblxuLyoqXG4gKiBQcmVwYXJlIHRoZSBzdGF0ZSBhcmd1bWVudHNcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdXG4gKiBAcGFyYW0ge29iamVjdH0gW3F1ZXJ5XVxuICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoXVxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICovXG5yb3V0ZXIucHJlcGFyZVN0YXRlQXJncyA9IGZ1bmN0aW9uIChzdGF0ZSwgcGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSB1bmRlZmluZWQsIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgYXJncyA9IHsgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucyB9O1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCA5OTk7IGkrKykge1xuICAgIGNvbnN0IHBhcmFtc1RlbXAgPSB0aGlzLnByZXBhcmVTdGF0ZVBhcmFtcyhzdGF0ZSwgcGFyYW1zLCBhcmdzKTtcbiAgICBjb25zdCBxdWVyeVRlbXAgPSB0aGlzLnByZXBhcmVTdGF0ZVF1ZXJ5KHN0YXRlLCBxdWVyeSwgYXJncyk7XG4gICAgY29uc3QgaGFzaFRlbXAgPSB0aGlzLnByZXBhcmVTdGF0ZUhhc2goc3RhdGUsIGhhc2gsIGFyZ3MpO1xuICAgIFxuICAgIGlmKGhhc2hUZW1wID09PSBudWxsKSB7XG4gICAgICBvcHRpb25zLmVtcHR5SGFzaCA9IG51bGw7XG4gICAgfVxuICAgIGVsc2UgaWYoaGFzaFRlbXAgPT09ICcnKSB7XG4gICAgICBvcHRpb25zLmVtcHR5SGFzaCA9ICcnO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld0FyZ3MgPSB7IHBhcmFtczogcGFyYW1zVGVtcCwgcXVlcnk6IHF1ZXJ5VGVtcCwgaGFzaDogaGFzaFRlbXAsIG9wdGlvbnMgfTtcblxuICAgIGlmKHV0aWxzLmNvbXBhcmUobmV3QXJncywgYXJncykpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGFyZ3MgPSBuZXdBcmdzO1xuICB9XG4gICAgXG4gIHJldHVybiBhcmdzO1xufVxuXG4vKipcbiAqIFByZXBhcmUgdGhlIHN0YXRlIHBhcmFtc1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zXG4gKiBAcGFyYW0ge29iamVjdH0gW2FyZ3NdXG4gKi9cbnJvdXRlci5wcmVwYXJlU3RhdGVQYXJhbXMgPSBmdW5jdGlvbihzdGF0ZSwgcGFyYW1zLCBhcmdzKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBjb25zdCBsaXN0ID0gW3BhcmFtc107XG4gIGNvbnN0IHN0YXRlcyA9IHN0YXRlLm5hbWUuc3BsaXQoJy4nKTtcblxuICBmb3IobGV0IGkgPSAwLCBsID0gc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBjdXJyZW50ID0gc3RhdGVzLnNsaWNlKDAsIHN0YXRlcy5sZW5ndGggLSBpKS5qb2luKCcuJyk7XG4gICAgbGlzdC5wdXNoKHRoaXMuZ2V0U3RhdGUoY3VycmVudCkucGFyYW1zKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmNyZWF0ZVN0YXRlQXJncyhsaXN0LCBhcmdzKTtcbn1cblxuLyoqXG4gKiBQcmVwYXJlIHRoZSBzdGF0ZSBxdWVyeVxuICogXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gcXVlcnlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbYXJnc11cbiAqL1xucm91dGVyLnByZXBhcmVTdGF0ZVF1ZXJ5ID0gZnVuY3Rpb24oc3RhdGUsIHF1ZXJ5LCBhcmdzKSB7ICBcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG4gIGNvbnN0IGxpc3QgPSBbcXVlcnldO1xuICBjb25zdCBzdGF0ZXMgPSBzdGF0ZS5uYW1lLnNwbGl0KCcuJyk7ICBcblxuICBmb3IobGV0IGkgPSAwLCBsID0gc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBzdGF0ZXMuc2xpY2UoMCwgc3RhdGVzLmxlbmd0aCAtIGkpLmpvaW4oJy4nKTtcbiAgICBsaXN0LnB1c2godGhpcy5nZXRTdGF0ZShjdXJyZW50KS5xdWVyeSk7XG4gIH1cbiBcbiAgcmV0dXJuIHRoaXMuY3JlYXRlU3RhdGVBcmdzKGxpc3QsIGFyZ3MpO1xufVxuXG4vKipcbiAqIENyZWF0ZSB0aGUgc3RhdGUgYXJndW1lbnRzXG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0W119IGxpc3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBbYXJnc11cbiAqL1xucm91dGVyLmNyZWF0ZVN0YXRlQXJncyA9IGZ1bmN0aW9uIChsaXN0LCBhcmdzID0geyBwYXJhbXM6IHt9LCBxdWVyeToge30gfSkge1xuICBjb25zdCBhbGwgPSB7fTtcbiAgY29uc3QgZXhjbHVkZWQgPSB7fTtcblxuICBmb3IobGV0IGkgPSAwLCBsID0gbGlzdC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjb25zdCBvYmogPSBsaXN0W2ldO1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuIFxuICAgIGZvcihsZXQgayA9IDAsIGMgPSBrZXlzLmxlbmd0aDsgayA8IGM7IGsrKykge1xuICAgICAgbGV0IGtleSA9IGtleXNba107XG4gICAgICBsZXQgdmFsID0gb2JqW2tleV07XG5cbiAgICAgIGlmKGV4Y2x1ZGVkW2tleV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhbCA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJz8gdmFsKGFyZ3MpOiB2YWw7XG5cbiAgICAgIGlmKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZih2YWwgPT09IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIGFsbFtrZXldO1xuICAgICAgICBleGNsdWRlZFtrZXldID0gdHJ1ZTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGFsbFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhbGw7IFxufVxuXG4vKipcbiAqIFByZXBhcmUgdGhlIHN0YXRlIGhhc2hcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGhhc2hcbiAqIEBwYXJhbSB7b2JqZWN0fSBbYXJnc11cbiAqL1xucm91dGVyLnByZXBhcmVTdGF0ZUhhc2ggPSBmdW5jdGlvbihzdGF0ZSwgaGFzaCwgYXJncykge1xuICBpZihoYXNoID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGhhc2g7XG4gIH1cblxuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgY29uc3Qgc3RhdGVzID0gc3RhdGUubmFtZS5zcGxpdCgnLicpO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBzdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgY29uc3QgY3VycmVudCA9IHN0YXRlcy5zbGljZSgwLCBzdGF0ZXMubGVuZ3RoIC0gaSkuam9pbignLicpO1xuICAgIGxldCB2YWwgPSB0aGlzLmdldFN0YXRlKGN1cnJlbnQpLmhhc2g7XG4gICAgdmFsID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nPyB2YWwoYXJncyk6IHZhbDtcblxuICAgIGlmKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZih2YWwgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGhhc2ggPSB2YWw7XG4gIH1cblxuICByZXR1cm4gaGFzaDtcbn1cblxuLyoqXG4gKiBSZW1vdmUgYWxsIHVubmVjZXNzYXJ5IHNsYXNoZXMgZnJvbSB0aGUgdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLnNwbGl0U2xhc2hlcyA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgcmV0dXJuIHVybC5yZXBsYWNlKC9bL10rL2csICcvJyk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgcGF0dGVybiBpbmZvXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldFBhdHRlcm5Db250ZW50ID0gZnVuY3Rpb24gKHN0YXRlLCB1cmwpIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG4gIGxldCBrZXlzID0gW107XG4gIGxldCBwYXJhbXMgPSB7fTtcblxuICB1cmwgPSB1cmwuc3BsaXQoJz8nKVswXTtcbiAgdXJsID0gdXJsLnNwbGl0KCcjJylbMF07XG5cbiAgbGV0IHVybFBhdHRlcm4gPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAobSwgZiwgdikgPT4ge1xuICAgIGtleXMucHVzaCh2KTtcbiAgICByZXR1cm4gJy8/KFteL10qKSc7XG4gIH0pO1xuXG4gIHVybFBhdHRlcm4gPSB1cmxQYXR0ZXJuLnJlcGxhY2UoLyhbXl4vXSspWy9dKyQvLCAnJDEnKTtcbiAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cCh1cmxQYXR0ZXJuLCAnZycpO1xuICBsZXQgaXNJbmNsdWRlZCA9IHVybC5tYXRjaChyZWdleCk7XG4gIFxuICBpZiAoIWlzSW5jbHVkZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHVybC5yZXBsYWNlKHJlZ2V4LCAobSwgLi4uYXJncykgPT4geyBcbiAgICBhcmdzID0gYXJncy5zbGljZSgwLCBhcmdzLmxlbmd0aCAtIDIpO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGFyZ3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgdiA9IGFyZ3NbaV07XG4gICAgICB2ICYmIChwYXJhbXNba2V5c1tpXV0gPSB2KTtcbiAgICB9ICBcbiAgfSk7XG5cbiAgcmV0dXJuIHsgcGFyYW1zIH07XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSBzdGF0ZSBpcyBhY3RpdmVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVzXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmlzQWN0aXZlU3RhdGUgPSBmdW5jdGlvbihzdGF0ZSwgaW5jbHVkZXMgPSBmYWxzZSkge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgbGV0IHVybCA9IHJvdXRlci50cmFuc2l0aW9uICYmICFyb3V0ZXIudHJhbnNpdGlvbi5fX2ZpbmlzaGVkPyByb3V0ZXIudHJhbnNpdGlvbi51cmw6IHRoaXMuZ2V0VXJsKCk7XG4gIHVybCA9IHRoaXMuc3BsaXRTbGFzaGVzKCcvJyArIHVybC5zcGxpdCgnPycpWzBdICsgJy8nKTtcbiAgbGV0IHVybFBhdHRlcm4gPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAnLz8oW14vXSopJyk7XG4gIHVybFBhdHRlcm4gPSB1cmxQYXR0ZXJuLnJlcGxhY2UoL15cXF4vLCAnJykucmVwbGFjZSgvXFwkJC8sICcnKTtcbiAgbGV0IHN0ciA9IGluY2x1ZGVzPyB1cmxQYXR0ZXJuOiB0aGlzLnNwbGl0U2xhc2hlcygnXi8nICsgdXJsUGF0dGVybiArICcvJCcpO1xuICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKHN0cik7ICBcbiAgcmV0dXJuIHJlZ2V4LnRlc3QodXJsKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIGN1cnJlbnQgdXJsIGluY2x1ZGVzIHRoZSBzdGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaW5BY3RpdmVTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gIHJldHVybiByb3V0ZXIuaXNBY3RpdmVTdGF0ZShzdGF0ZSwgdHJ1ZSk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgcm91dGUgY29tcG9uZW50IGJ5IHRoZSBsZXZlbFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZXZlbFxuICovXG5yb3V0ZXIuZ2V0Um91dGUgPSBmdW5jdGlvbiAobGV2ZWwpIHtcbiAgbGV0IGkgPSAwO1xuXG4gIGNvbnN0IGZpbmQgPSAoZWwpID0+IHtcbiAgICBsZXQgcm91dGUgPSBlbC5jaGlsZCh0aGlzLl9fcm91dGVTZWxlY3Rvcik7XG5cbiAgICBpZiAoIXJvdXRlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoaSA9PSBsZXZlbCkge1xuICAgICAgcmV0dXJuIHJvdXRlO1xuICAgIH1cblxuICAgIGkrKztcbiAgICByZXR1cm4gZmluZChyb3V0ZSk7XG4gIH07XG5cbiAgcmV0dXJuIGZpbmQoQWtpbGkucm9vdCk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgcGF0dGVybnMgYXJyYXkgaW5mb1xuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGFyclxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge29iamVjdHxudWxsfVxuICovXG5yb3V0ZXIuZ2V0QXJyYXlQYXR0ZXJuQ29udGVudCA9IGZ1bmN0aW9uIChhcnIsIHVybCkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSBhcnJbaV07XG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldFBhdHRlcm5Db250ZW50KHN0YXRlLCB1cmwpO1xuXG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdGF0ZTogc3RhdGUsIC4uLmNvbnRlbnQgfTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIHN0YXRlcyBieSB0aGUgbGV2ZWxcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbGV2ZWxcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xucm91dGVyLmdldFN0YXRlc0J5TGV2ZWwgPSBmdW5jdGlvbiAobGV2ZWwpIHtcbiAgbGV0IHN0YXRlcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZXNbaV07XG5cbiAgICBpZiAoc3RhdGUubGV2ZWwgPCBsZXZlbCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHN0YXRlLmxldmVsID4gbGV2ZWwpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHN0YXRlcy5wdXNoKHN0YXRlKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZXM7XG59O1xuXG4vKipcbiAqIFJlbG9hZCB0aGUgc3RhdGVcbiAqIFxuICogQHNlZSBUcmFuc2l0aW9uLnJlbG9hZFxuICovXG5yb3V0ZXIucmVsb2FkID0gZnVuY3Rpb24oLi4uYXJncykge1xuICBpZighdGhpcy50cmFuc2l0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgZm91bmQgYW4gYWN0aXZlIHRyYW5zaXRpb24gdG8gcmVsb2FkIHRoZSBzdGF0ZScpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMudHJhbnNpdGlvbi5yZWxvYWQoLi4uYXJncyk7XG59XG5cbi8qKlxuICogSXNvbGF0ZSB0aGUgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbnJvdXRlci5pc29sYXRlID0gZnVuY3Rpb24gKGZuKSB7XG4gIHRoaXMuX19pc29sYXRlZCA9IHRydWU7XG4gIGxldCByZXMgPSBmbigpO1xuICB0aGlzLl9faXNvbGF0ZWQgPSBmYWxzZTtcbiAgcmV0dXJuIHJlcztcbn1cblxuLyoqXG4gKiBDaGFuZ2UgdGhlIHN0YXRlXG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqL1xucm91dGVyLmNoYW5nZVN0YXRlID0gZnVuY3Rpb24gKG9wdGlvbnMgPSB7fSkgeyAgICBcbiAgaWYodGhpcy5fX2lzb2xhdGVkKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG4gIFxuICBsZXQgdXJsID0gdGhpcy5nZXRVcmwoKTtcbiAgbGV0IHBhcmFtcyA9IHt9O1xuICBsZXQgcXVlcnkgPSB0aGlzLmdldFVybFF1ZXJ5KCk7ICBcbiAgbGV0IGhhc2ggPSB0aGlzLmhhc2hNb2RlPyAnJzogd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTsgXG4gIGxldCBwcmV2VHJhbnNpdGlvbiA9IHJvdXRlci50cmFuc2l0aW9uIHx8IG51bGw7XG4gIGxldCB0cmFuc2l0aW9uID0gcm91dGVyLnRyYW5zaXRpb24gPSBuZXcgVHJhbnNpdGlvbih1cmwsIHByZXZUcmFuc2l0aW9uKTtcbiAgbGV0IGxldmVsID0gMDtcbiAgXG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc3RhdGUtY2hhbmdlJywgeyBkZXRhaWw6IHRyYW5zaXRpb24gfSkpO1xuXG4gIGNvbnN0IG5leHQgPSAoc3RhdGVzKSA9PiB7ICAgIFxuICAgIGlmICghc3RhdGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRBcnJheVBhdHRlcm5Db250ZW50KHN0YXRlcywgdXJsKTtcblxuICAgIGlmICghY29udGVudCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIGxldCBzdGF0ZSA9IGNvbnRlbnQuc3RhdGU7IFxuICAgIHRyYW5zaXRpb24uc2V0UGF0aCh7IHN0YXRlLCBjb21wb25lbnQ6IHJvdXRlIH0pOyAgICBcbiAgICBwYXJhbXMgPSB7IC4uLnBhcmFtcywgLi4uY29udGVudC5wYXJhbXMgfTtcbiAgICBoYXNoID0gaGFzaCB8fCBvcHRpb25zLmVtcHR5SGFzaDtcbiAgICAoeyBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zIH0gPSB0aGlzLnByZXBhcmVTdGF0ZUFyZ3Moc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMpKTsgICAgIFxuICAgIGhhc2ggPSBoYXNoIHx8ICcnO1xuICAgIGxldCByZWFsVXJsID0gdGhpcy5jcmVhdGVTdGF0ZVVybChzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucywgZmFsc2UpOyBcbiAgICB0aGlzLmlzb2xhdGUoKCkgPT4gdGhpcy5yZXBsYWNlVXJsKHJlYWxVcmwpKTsgXG4gICAgbGV0IHJvdXRlID0gc3RhdGUuYWJzdHJhY3Q/IG51bGw6IHRoaXMuZ2V0Um91dGUobGV2ZWwpO1xuICAgIFxuICAgIGlmICghcm91dGUgJiYgIXN0YXRlLmFic3RyYWN0KSB7ICAgICAgXG4gICAgICB0aHJvdyBuZXcgRXJyb3IgKGBOb3QgZm91bmQgcm91dGUgY29tcG9uZW50IGZvciBzdGF0ZSBcIiR7c3RhdGUubmFtZX1cImApO1xuICAgIH0gICAgXG5cbiAgICB0cmFuc2l0aW9uLnBhdGgucGFyYW1zID0gcGFyYW1zO1xuICAgIHRyYW5zaXRpb24ucGF0aC5xdWVyeSA9IHF1ZXJ5O1xuICAgIHRyYW5zaXRpb24ucGF0aC5oYXNoID0gaGFzaDtcbiAgICB0cmFuc2l0aW9uLnBhdGgudXJsID0gcmVhbFVybDtcbiAgICB0cmFuc2l0aW9uLnBhdGgub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgIXN0YXRlLmFic3RyYWN0ICYmIGxldmVsKys7XG4gICAgbGV0IGlzRGlmZmVyZW50ID0gdHJ1ZTtcblxuICAgIGlmKHJlYWxVcmwgIT0gdXJsKSB7XG4gICAgICBpc0RpZmZlcmVudCA9IHRyYW5zaXRpb24uaXNSb3V0ZUNoYW5nZWQodHJhbnNpdGlvbi5wYXRoKTtcbiAgICB9XG4gICAgICAgXG4gICAgbGV0IGxvYWQgPSBpc0RpZmZlcmVudCAmJiBvcHRpb25zLnJlbG9hZCAhPT0gZmFsc2U7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGxvYWQ/IHN0YXRlLmhhbmRsZXIodHJhbnNpdGlvbik6IHRyYW5zaXRpb24ucGF0aC5kYXRhKS50aGVuKChkYXRhKSA9PiB7ICAgICAgIFxuICAgICAgdHJhbnNpdGlvbi5wYXRoLmRhdGEgPSBkYXRhO1xuICAgICAgc3RhdGUudGl0bGUgJiYgKGRvY3VtZW50LnRpdGxlID0gdHlwZW9mIHN0YXRlLnRpdGxlID09ICdmdW5jdGlvbic/IHN0YXRlLnRpdGxlKHRyYW5zaXRpb24pOiBzdGF0ZS50aXRsZSk7XG5cbiAgICAgIGlmICh0cmFuc2l0aW9uLl9fY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlLmFic3RyYWN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJldlJvdXRlID0gdHJhbnNpdGlvbi5wcmV2aW91cyAmJiB0cmFuc2l0aW9uLnByZXZpb3VzLmdldFJvdXRlKHN0YXRlKTtcbiAgICAgIChwcmV2Um91dGUgJiYgIXByZXZSb3V0ZS5sb2FkZWQpICYmIChsb2FkID0gdHJ1ZSk7XG4gICAgICByZXR1cm4gcm91dGUuc2V0VHJhbnNpdGlvbih0cmFuc2l0aW9uLCBsb2FkKS50aGVuKCgpID0+IHRyYW5zaXRpb24ucGF0aC5sb2FkZWQgPSB0cnVlKTtcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIHJldHVybiBuZXh0KHN0YXRlLmNoaWxkcmVuKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gbmV4dCh0aGlzLmdldFN0YXRlc0J5TGV2ZWwoMCkpLnRoZW4oKCkgPT4ge1xuICAgIGlmICghdHJhbnNpdGlvbi5yb3V0ZXMubGVuZ3RoKSB7XG4gICAgICBpZiAodGhpcy5fX3JlZGlyZWN0cykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFdyb25nIHJvdXRlciBkZWZhdWx0IHVybCBcIiR7dGhpcy5kZWZhdWx0VXJsfVwiYCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmRlZmF1bHRVcmwpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFVybCA9PSB0aGlzLmdldFVybCgpKSB7XG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCBhbnkgcm91dGVzYCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzb2xhdGUoKCkgPT4gdGhpcy5yZXBsYWNlVXJsKHRoaXMuZGVmYXVsdFVybCkpOyAgICAgICAgICBcbiAgICAgICAgdGhpcy5fX3JlZGlyZWN0cysrO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2VTdGF0ZSgpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLndhcm4oYE5vdCBmb3VuZCBhIGRlZmF1bHQgcm91dGUuIFlvdSBjYW4gcGFzcyBpdCBpbiBcInJvdXRlci5pbml0KGRlZmF1bHRVcmwpXCIgZnVuY3Rpb25gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKCFvcHRpb25zLnNhdmVTY3JvbGxQb3NpdGlvbiAmJiAoIXRyYW5zaXRpb24ucGF0aCB8fCAhdHJhbnNpdGlvbi5wYXRoLmhhc2gpKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgfVxuXG4gICAgdGhpcy5fX3JlZGlyZWN0cyA9IDA7XG4gICAgdHJhbnNpdGlvbi5maW5pc2goKTtcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3N0YXRlLWNoYW5nZWQnLCB7IGRldGFpbDogdHJhbnNpdGlvbiB9KSk7XG4gICAgcmV0dXJuIHRyYW5zaXRpb247XG4gIH0pO1xufTtcblxuLyoqXG4gKiBEZWluaXRpYWxpemUgdGhlIHJvdXRlclxuICovXG5yb3V0ZXIuZGVpbml0ID0gZnVuY3Rpb24gKCkge1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIpO1xuICByb3V0ZXIuc2V0RGVmYXVsdHMoKTtcbn07XG5cbnJvdXRlci5UcmFuc2l0aW9uID0gVHJhbnNpdGlvbjtcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbnJvdXRlci5zZXREZWZhdWx0cygpOyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBjb25kaXRpb25hbCBzdGF0ZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jb25kaXRpb25hbF9zdGF0ZW1lbnRzfVxuICogXG4gKiBAdGFnIGlmXG4gKiBAc2VsZWN0b3IgaWZbaXNdXG4gKiBAYXR0ciB7Ym9vbGVhbn0gaXMgLSBzaG93IHRoZSBlbGVtZW50IGNvbnRlbnQgb3Igbm90XG4gKiBAYXR0ciB7Ym9vbGVhbn0gcmVjcmVhdGUgLSBkZWxldGUgdGhlIGNvbnRlbnQgYW5kIHJlY3JlYXRlIG9yIGp1c3Qgc2hvdy9oaWRlIFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyB0cmFuc3BhcmVudCA9IHRydWU7IFxuICBzdGF0aWMgbWF0Y2hlcyA9ICdbaXNdJztcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydyZWNyZWF0ZSddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpZicsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnZWxzZS1pZicsIHRoaXMuRWxzZUlmKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2Vsc2UnLCB0aGlzLkVsc2UpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5odG1sID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLnN0YXRlID0gZmFsc2U7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnJlY3JlYXRlID0gZmFsc2U7XG4gICAgdGhpcy5pc0NvbXBpbGVkID0gZmFsc2U7XG4gICAgdGhpcy5kaXNwbGF5ID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKS5kaXNwbGF5O1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRyKCdyZWNyZWF0ZScsIHRoaXMuc2V0UmVjcmVhdGlvbik7XG4gICAgcmV0dXJuIHRoaXMuYXR0cignaXMnLCB0aGlzLnNldElzKTtcbiAgfVxuXG4gIHNldElzKHZhbCkge1xuICAgIHRoaXMuc3RhdGUgPSAhIXZhbDtcbiAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSgpO1xuICB9XG5cbiAgc2V0QWN0aXZpdHkoYWN0aXZlKSB7XG4gICAgdGhpcy5hY3RpdmUgPSBhY3RpdmU7XG4gIH1cblxuICBzZXRSZWNyZWF0aW9uKHJlY3JlYXRlKSB7XG4gICAgdGhpcy5yZWNyZWF0ZSA9IHJlY3JlYXRlO1xuICB9XG5cbiAgc2V0U3RhdGUoKSB7XG4gICAgbGV0IHJlcyA9IHRoaXMuY29tcGlsYXRpb24oKTtcbiAgICBsZXQgbmV4dCA9IHRoaXMuZWwubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGxldCByZXN1bHQ7XG5cbiAgICBpZiAoIW5leHQgfHwgIW5leHQubWF0Y2hlcygnZWxzZS1pZixlbHNlJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXh0Ll9fYWtpbGkuc2V0QWN0aXZpdHkodGhpcy5hY3RpdmUgfHwgdGhpcy5zdGF0ZSk7XG4gICAgbmV4dC5fX2FraWxpLnNldFJlY3JlYXRpb24odGhpcy5yZWNyZWF0ZSk7XG4gICAgcmVzdWx0ID0gbmV4dC5fX2FraWxpLnNldFN0YXRlKCk7ICAgIFxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzKS50aGVuKCgpID0+ICByZXN1bHQpO1xuICB9XG5cbiAgY29tcGlsYXRpb24oKSB7XG4gICAgbGV0IHJlcyA9IFByb21pc2UucmVzb2x2ZSgpO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUgJiYgIXRoaXMuYWN0aXZlKSB7XG4gICAgICBpZiAodGhpcy5yZWNyZWF0ZSB8fCAhdGhpcy5pc0NvbXBpbGVkKSB7XG4gICAgICAgIHJlcyA9IHRoaXMuY29tcGlsZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgdGhpcy5kaXNwbGF5LCAnaW1wb3J0YW50Jyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHRoaXMucmVjcmVhdGUpIHtcbiAgICAgICAgdGhpcy5lbXB0eSgpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIXRoaXMuaXNDb21waWxlZCkge1xuICAgICAgICByZXMgPSB0aGlzLmNvbXBpbGUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbC5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJywgJ2ltcG9ydGFudCcpO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBjb21waWxlKCkge1xuICAgIGxldCByZXM7XG4gICAgdGhpcy5lbXB0eSgpO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5odG1sOyAgIFxuICAgIHJlcyA9IEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgdGhpcy5pc0NvbXBpbGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG59XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBjb25kaXRpb25hbCBzdGF0ZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jb25kaXRpb25hbF9zdGF0ZW1lbnRzfVxuICogXG4gKiBAdGFnIGVsc2UtaWZcbiAqIEBzZWxlY3RvciBlbHNlLWlmW2lzXVxuICogQGF0dHIge2Jvb2xlYW59IGlzIEBzZWUgSWZcbiAqL1xuZXhwb3J0IGNsYXNzIEVsc2VJZiBleHRlbmRzIElmIHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBjb25kaXRpb25hbCBzdGF0ZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jb25kaXRpb25hbF9zdGF0ZW1lbnRzfVxuICogXG4gKiBAdGFnIGVsc2VcbiAqL1xuZXhwb3J0IGNsYXNzIEVsc2UgZXh0ZW5kcyBFbHNlSWYge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdpcycsICd0cnVlJyk7XG4gIH1cbn1cblxuSWYuRWxzZUlmID0gRWxzZUlmO1xuSWYuRWxzZSA9IEVsc2U7IiwiaW1wb3J0IEZvciwgeyBMb29wIH0gZnJvbSAnLi9mb3IuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCBzZWxlY3QuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX3NlbGVjdH1cbiAqIFxuICogQHRhZyBzZWxlY3QgIFxuICogQGF0dHIge3N0cmluZ30gdmFsdWUgLSBhY3R1YWwgdmFsdWVcbiAqIEBhdHRyIFtpbl0gQHNlZSBGb3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydtdWx0aXBsZSddLmNvbmNhdChGb3IuYm9vbGVhbkF0dHJpYnV0ZXMpO1xuICBzdGF0aWMgZXZlbnRzID0gWydjaGFuZ2UnXS5jb25jYXQoRm9yLmV2ZW50cyk7XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3NlbGVjdCcsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnb3B0aW9uJywgdGhpcy5PcHRpb24pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pdGVyYXRvclRhZ05hbWUgPSAnb3B0aW9uJztcbiAgICB0aGlzLmlzTXVsdGlwbGUgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkgeyBcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHRoaXMuZWwuY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpKTtcbiAgICBsZXQgcmVzID0gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgICBcbiAgICB0aGlzLmF0dHIoJ211bHRpcGxlJywgdGhpcy5zZXRNdWx0aXBsZSk7XG4gICAgdGhpcy5hdHRyKCdjb250ZW50JywgdGhpcy5zZXRDb250ZW50KTtcbiAgICB0aGlzLmF0dHIoJ2luJywgdGhpcy5kcmF3U2VsZWN0KTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgc2V0TXVsdGlwbGUodmFsdWUpIHtcbiAgICB0aGlzLmlzTXVsdGlwbGUgPSB2YWx1ZTtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUodXRpbHMuY29weSh0aGlzLmVsLmNvbnRlbnQpKSk7XG4gIH1cblxuICBzZXRDb250ZW50KHZhbHVlKSB7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKHZhbHVlKSk7XG4gIH1cblxuICBkcmF3U2VsZWN0KCkge1xuICAgIGxldCBzZWxlY3RlZCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldLl9fYWtpbGk7XG4gICAgICBsZXQgc2VsZWN0aW9uID0gb3B0aW9uLmF0dHJzLnNlbGVjdGVkO1xuXG4gICAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICAgIHNlbGVjdGVkLnB1c2gob3B0aW9uLmVsLnZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgb3B0aW9uLmVsLnNlbGVjdGVkID0gc2VsZWN0aW9uO1xuICAgIH1cblxuICAgIGlmICghc2VsZWN0ZWQubGVuZ3RoKSB7XG4gICAgICB0aGlzLnJlZGVmaW5lKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKHNlbGVjdGVkKSk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlSXRlcmF0b3JFbGVtZW50KCkge1xuICAgIGxldCBlbCA9IHN1cGVyLmNyZWF0ZUl0ZXJhdG9yRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgaWYgKCFlbC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0aGlzLmh0bWwudHJpbSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIGlmICghdGhpcy5pc011bHRpcGxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbC52YWx1ZTtcbiAgICB9XG5cbiAgICBsZXQgY29udGVudCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldO1xuXG4gICAgICBpZiAob3B0aW9uLnNlbGVjdGVkKSB7XG4gICAgICAgIGNvbnRlbnQucHVzaChvcHRpb24udmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgZm9ybWF0VmFsdWUodmFsdWUpIHtcbiAgICBpZiAodGhpcy5pc011bHRpcGxlKSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpPyBbdmFsdWVdOiBbXTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5sZW5ndGg/IHZhbHVlWzBdOiAnJztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJlZGVmaW5lKCkge1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5nZXRDb250ZW50KCkpO1xuICB9XG5cbiAgY2hhbmdlVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodXRpbHMuY29tcGFyZSh0aGlzLmVsLmNvbnRlbnQsIHZhbHVlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdGhpcy5lbC52YWx1ZSA9IHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXTtcblxuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB2YWx1ZS5pbmRleE9mKG9wdGlvbi52YWx1ZSkgIT0gLTE7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5lbC52YWx1ZSA9IHZhbHVlO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXTtcblxuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBvcHRpb24udmFsdWUgPT0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5lbC5jb250ZW50ID0gdmFsdWU7XG4gICAgdGhpcy5hdHRycy5vbkNoYW5nZS5kaXNwYXRjaChFdmVudCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBPcHRpb24gZXh0ZW5kcyBMb29wIHtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydzZWxlY3RlZCddO1xuXG4gIF9fZ2V0UGFyc2VkRXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG4gICAgcmV0dXJuIHV0aWxzLmRlY29kZUh0bWxFbnRpdGllcyhleHByZXNzaW9uKTtcbiAgfVxuXG4gIGNoYW5nZWRTZWxlY3RlZCh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U2VsZWN0ZWQodmFsdWUpO1xuICB9XG5cbiAgc2V0U2VsZWN0ZWQodmFsdWUpIHtcbiAgICB0aGlzLmVsLnNlbGVjdGVkID0gdmFsdWU7XG4gICAgdGhpcy5mb3IucmVkZWZpbmUoKTtcbiAgfVxufVxuXG5TZWxlY3QuT3B0aW9uID0gT3B0aW9uOyIsImltcG9ydCBUZXh0IGZyb20gJy4vdGV4dC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggaW5wdXQgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2lucHV0fVxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfY2hlY2tib3hfYW5kX3JhZGlvfVxuICogXG4gKiBAdGFnIGlucHV0XG4gKiBAYXR0ciBAc2VlIFRleHRcbiAqIEBtZXNzYWdlIEBzZWUgVGV4dFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCBleHRlbmRzIFRleHQge1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ2NoZWNrZWQnLCAnbXVsdGlwbGUnXS5jb25jYXQoVGV4dC5ib29sZWFuQXR0cmlidXRlcyk7XG4gIHN0YXRpYyBldmVudHMgPSBbJ2NoYW5nZSddLmNvbmNhdChUZXh0LmV2ZW50cyk7XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2lucHV0JywgdGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmlzQ2hlY2tib3ggPSB0aGlzLmVsLnR5cGUgPT0gJ2NoZWNrYm94JztcbiAgICB0aGlzLmlzUmFkaW8gPSB0aGlzLmVsLnR5cGUgPT0gJ3JhZGlvJzsgICAgXG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICAodGhpcy5pc0NoZWNrYm94IHx8IHRoaXMuaXNSYWRpbykgJiYgdGhpcy5hdHRyKCdjaGVja2VkJywgdGhpcy5zZXRDaGVja2VkKTtcbiAgICByZXR1cm4gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfSAgXG5cbiAgc2V0Q2hlY2tlZCh2YWx1ZSkge1xuICAgIHZhbHVlID0gISF2YWx1ZTtcbiAgICBcbiAgICBpZiAodGhpcy5lbC5jaGVja2VkID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZWwuY2hlY2tlZCA9IHZhbHVlO1xuICAgIHRoaXMuX19pc0NvbXBpbGVkICYmIHRoaXMuYXR0cnMub25DaGFuZ2UuZGlzcGF0Y2goRXZlbnQsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICB0aGlzLmlzUmFkaW8gJiYgdGhpcy5jaGFuZ2VSYWRpbygpO1xuICB9XG5cbiAgc2V0VmFsdWUoKSB7XG4gICAgc3VwZXIuc2V0VmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLmlzUmFkaW8gJiYgdGhpcy5hdHRycy5vbkNoYW5nZS5kaXNwYXRjaChFdmVudCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICB9XG5cbiAgY2hhbmdlUmFkaW8oKSB7XG4gICAgbGV0IG5hbWUgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICAgIGxldCBzZWxlY3RvciA9IGBpbnB1dFt0eXBlPXJhZGlvXVtuYW1lPScke25hbWV9J106bm90KFtzY29wZT0nJHt0aGlzLnNjb3BlLl9fbmFtZX0nXSlgO1xuICAgIGxldCBjaGlsZHJlbiA9IEFraWxpLnJvb3QuY2hpbGRyZW4oc2VsZWN0b3IpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuICAgICAgcmFkaW8uc2V0Q2hlY2tlZChyYWRpby5lbC5jaGVja2VkKTtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgRm9yLCB7IExvb3AgfSBmcm9tICcuL2Zvci5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggcmFkaW8gZ3JvdXAuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX3JhZGlvX2dyb3VwfVxuICogXG4gKiBAdGFnIHJhZGlvXG4gKiBAc2VsZWN0b3IgcmFkaW9bbmFtZV1cbiAqIEBhdHRyIHtzdHJpbmd9IG5hbWUgLSBuYW1lIG9mIHRoZSBncm91cFxuICogQGF0dHIge3N0cmluZ3xudWxsfSB2YWx1ZSAtIHNlbGVjdGVkIHZhbHVlXG4gKiBAYXR0ciBbaW5dIEBzZWUgRm9yXG4gKiBAbWVzc2FnZSB7c3RyaW5nfSByYWRpbyAtIHNlbnQgb24gdmFsdWUgY2hhbmdlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZGlvIGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW25hbWVdJztcbiAgc3RhdGljIGV2ZW50cyA9IFsncmFkaW8nXS5jb25jYXQoRm9yLmV2ZW50cyk7XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JhZGlvJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdyYWRpby1idXR0b24nLCB0aGlzLlJhZGlvQnV0dG9uKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXRlcmFibGUgPSB0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnaW4nKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgaWYodGhpcy5pdGVyYWJsZSkge1xuICAgICAgcmV0dXJuIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIEFraWxpLm5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5nZXRSYWRpb1ZhbHVlKCk7XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSB0aGlzLnByZXZWYWx1ZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJldlZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuYXR0cnMub25SYWRpby50cmlnZ2VyKHZhbHVlLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmKHRoaXMuaXRlcmFibGUpIHtcbiAgICAgIHJldHVybiBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIHJlc29sdmVkKCkge1xuICAgIHRoaXMuYXR0cignaW4nLCAoKSA9PiB0aGlzLnNldE5hbWVzKCksIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cigndmFsdWUnLCB0aGlzLnNldFZhbHVlKTtcbiAgICB0aGlzLmF0dHIoJ25hbWUnLCB0aGlzLnNldE5hbWVzKTtcblxuICAgIGlmKHRoaXMuaXRlcmFibGUpIHtcbiAgICAgIHJldHVybiBzdXBlci5yZXNvbHZlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIHNldE5hbWVzKG5hbWUpIHtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNoaWxkcmVuW2ldLmVsLnNldEF0dHJpYnV0ZSgnbmFtZScsIG5hbWUgfHwgdGhpcy5hdHRycy5uYW1lKTtcbiAgICB9XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5wcmV2VmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcHJldiA9IHRoaXMucHJldlZhbHVlO1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oJ2lucHV0W3R5cGU9cmFkaW9dJyk7XG4gICAgbGV0IGlzVHJ1ZSA9IGZhbHNlO1xuICAgIHRoaXMucHJldlZhbHVlID0gdmFsdWU7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJhZGlvID0gY2hpbGRyZW5baV07XG4gICAgICBsZXQgaXNTZWxlY3RlZCA9IHJhZGlvLmVsLnZhbHVlID09PSB2YWx1ZTtcblxuICAgICAgaXNTZWxlY3RlZCAmJiAoaXNUcnVlID0gdHJ1ZSk7XG4gICAgICByYWRpby5zZXRDaGVja2VkKGlzU2VsZWN0ZWQpO1xuICAgIH1cblxuICAgIGlmICghaXNUcnVlKSB7XG4gICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgaWYgKHByZXYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMucHJldlZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hdHRycy5vblJhZGlvLnRyaWdnZXIodmFsdWUsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgfVxuXG4gIGdldFJhZGlvVmFsdWUoKSB7XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbignaW5wdXRbdHlwZT1yYWRpb10nKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcmFkaW8gPSBjaGlsZHJlbltpXTtcblxuICAgICAgaWYgKHJhZGlvLmVsLmNoZWNrZWQpIHtcbiAgICAgICAgcmV0dXJuIHJhZGlvLmVsLnZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCByYWRpbyBncm91cCBpdGVtLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19yYWRpb19ncm91cH1cbiAqIFxuICogQHRhZyByYWRpby1idXR0b25cbiAqIEBhdHRyIHtzdHJpbmd9IHZhbHVlIC0gdmFsdWVcbiAqL1xuZXhwb3J0IGNsYXNzIFJhZGlvQnV0dG9uIGV4dGVuZHMgTG9vcCB7XG4gIHN0YXRpYyB0ZW1wbGF0ZSA9ICc8bGFiZWw+PGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiJHt0aGlzLnZhbHVlfVwiLz4ke3RoaXMuX19jb250ZW50fTwvbGFiZWw+JztcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ3ZhbHVlJywgJ3ZhbHVlJyk7XG4gICAgcmV0dXJuIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cbn1cblxuUmFkaW8uUmFkaW9CdXR0b24gPSBSYWRpb0J1dHRvbjsiLCJpbXBvcnQgVGV4dCBmcm9tICcuL3RleHQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIHRleHRhcmVhLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc190ZXh0YXJlYX1cbiAqIFxuICogQHRhZyB0ZXh0YXJlYVxuICogQGF0dHIgQHNlZSBUZXh0XG4gKiBAbWVzc2FnZSBAc2VlIFRleHRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dGFyZWEgZXh0ZW5kcyBUZXh0IHtcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RleHRhcmVhJywgdGhpcyk7XG4gIH1cbn0iLCJpbXBvcnQgVGV4dCBmcm9tICcuL3RleHQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGVsZW1lbnRzIHdpdGggdGhlIGNvbnRlbnRlZGl0YWJsZSBhdHRyaWJ1dGUuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NvbnRlbnRlZGl0YWJsZX1cbiAqIFxuICogQHRhZyBjb250ZW50XG4gKiBAc2VsZWN0b3IgY29udGVudCxbY29udGVudGVkaXRhYmxlXVxuICogQGF0dHIgQHNlZSBUZXh0XG4gKiBAYXR0ciB7Ym9vbGVhbn0gW2VkaXRhYmxlXSAtIGVkaXRhYmxlIG9yIG5vdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50IGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdjb250ZW50JywgdGhpcyk7XG4gICAgQWtpbGkuYWxpYXMoJ1tjb250ZW50ZWRpdGFibGVdJywgJ2NvbnRlbnQnKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIGlmICh0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnZWRpdGFibGUnKSkge1xuICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdlZGl0YWJsZScpKTtcbiAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKCdlZGl0YWJsZScpO1xuICAgIH1cblxuICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpLmRpc3BsYXkgPT0gJ2lubGluZScpIHtcbiAgICAgIHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuXG4gICAgdGhpcy52YWx1ZUtleSA9ICdpbm5lckhUTUwnO1xuICB9XG5cbiAgc2V0RWxlbWVudEZvY3VzKCkge1xuICAgIGxldCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgbGV0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcblxuICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyh0aGlzLmVsKTtcbiAgICByYW5nZS5jb2xsYXBzZShmYWxzZSk7XG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gICAgdGhpcy5lbC5mb2N1cygpO1xuICB9XG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byBpbmNsdWRlIHRlbXBsYXRlcyBieSB1cmwuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2h0bWxfdGVtcGxhdGVzfVxuICogXG4gKiBAdGFnIGluY2x1ZGVcbiAqIEBzZWxlY3RvciBpbmNsdWRlW3VybF1cbiAqIEBhdHRyIHtzdHJpbmd9IHVybCAtIHRlbXBsYXRlIHBhdGhcbiAqIEBhdHRyIHtudW1iZXJ8ZnVuY3Rpb258Ym9vbGVhbn0gW2NhY2hlXSAtIHJlcXVlc3QgY2FjaGUge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yZXF1ZXN0cyNkb2NzX2NhY2hlfVxuICogQG1lc3NhZ2Uge3ZvaWR9IGxvYWQgLSBzZW50IG9uIHRoZSB0ZW1wbGF0ZSBsb2FkXG4gKiBAbWVzc2FnZSB7RXJyb3J9IGVycm9yIC0gc2VudCBvbiBlcnJvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmNsdWRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gdHJ1ZTsgXG4gIHN0YXRpYyBtYXRjaGVzID0gJ1t1cmxdJztcbiAgc3RhdGljIGV2ZW50cyA9IFsnbG9hZCcsICdlcnJvciddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpbmNsdWRlJywgdGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ2NhY2hlJywgdGhpcy5zZXRDYWNoZSk7XG4gICAgcmV0dXJuIHRoaXMuYXR0cigndXJsJywgdGhpcy5zZXRUZW1wbGF0ZSk7XG4gIH1cblxuICBzZXRDYWNoZShjYWNoZSkge1xuICAgIHRoaXMuY2FjaGUgPSBjYWNoZTtcbiAgfVxuXG4gIHNldFRlbXBsYXRlKHVybCkge1xuICAgIHRoaXMuY29ubmVjdGlvbiAmJiB0aGlzLmNvbm5lY3Rpb24uYWJvcnQoKTtcblxuICAgIHJldHVybiByZXF1ZXN0LmdldCh1cmwsIHtcbiAgICAgIGNhY2hlOiB0aGlzLmNhY2hlLFxuICAgICAgb25TdGFydDogKHhocikgPT4ge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSB4aHI7XG4gICAgICB9XG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgdGhpcy5lbXB0eSgpO1xuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XG4gICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCByZXMuZGF0YSk7XG5cbiAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uTG9hZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgIH0pO1xuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHRoaXMuYXR0cnMub25FcnJvci50cmlnZ2VyKGVyciwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbiAgfVxufSIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGlmcmFtZXMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBpZnJhbWVcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElmcmFtZSBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2lmcmFtZScsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgaW1hZ2VzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgaW1nXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZSBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2ltZycsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgZW1iZWQgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBlbWJlZFxuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1iZWQgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdlbWJlZCcsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgYXVkaW8gZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBhdWRpb1xuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW8gZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdhdWRpbycsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgdmlkZW8gZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyB2aWRlb1xuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlkZW8gZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd2aWRlbycsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgdHJhY2sgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyB0cmFja1xuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhY2sgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0cmFjaycsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3Igc291cmNlIGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgc291cmNlXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VyY2UgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdzb3VyY2UnLCB0aGlzKTtcbiAgfVxufSIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIG9iamVjdCBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIG9iamVjdFxuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0cyBleHRlbmRzIFVybCB7ICBcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy51cmxBdHRyaWJ1dGUgPSAnZGF0YSc7XG4gIH1cblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnb2JqZWN0JywgdGhpcyk7XG4gIH1cbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4uL3NlcnZpY2VzL3JvdXRlci5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgbGlua3MuXG4gKiBJdCB3b3JrcyB3aXRoIHJvdXRlciBhcyB3ZWxsLiBcbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfbGlua3N9XG4gKiBcbiAqIEB0YWcgYVxuICogQHNlbGVjdG9yIGFbc3RhdGVdOm5vdChbdXJsXSksYVt1cmxdOm5vdChbc3RhdGVdKVxuICogQGF0dHIge3N0cmluZ30gW3VybF0gLSB1cmwgdG8gZ29cbiAqIEBhdHRyIHtzdHJpbmd9IFtzdGF0ZV0gLSBzdGF0ZSB0byBnbyB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmd9XG4gKiBAYXR0ciB7b2JqZWN0fSBbcGFyYW1zXSAtIHBhcmFtcyBmb3IgdGhlIHN0YXRlIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3N0YXRlX3BhcmFtc31cbiAqIEBhdHRyIHtvYmplY3R9IFtxdWVyeV0gLSBxdWVyeSBmb3IgdGhlIHN0YXRlIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3N0YXRlX3F1ZXJ5fVxuICogQGF0dHIge3N0cmluZ30gW2hhc2hdIC0gaGFzaCBmb3IgdGhlIHN0YXRlIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3N0YXRlX2hhc2h9XG4gKiBAYXR0ciB7b2JqZWN0fSBbb3B0aW9uc10gLSBvcHRpb25zIGZvciB0aGUgc3RhdGUge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3Nfcm91dGVyLmxvY2F0aW9ufVxuICogQHNjb3BlIHtib29sZWFufSBpc0FjdGl2ZVN0YXRlIC0gdGhlIHN0YXRlIGlzIGFjdGl2ZSBvciBub3QgXG4gKiBAc2NvcGUge2Jvb2xlYW59IGluQWN0aXZlU3RhdGUgLSB0aGUgc3RhdGUgaXMgcGFydCBvZiB0aGUgYWN0aXZlIHN0YXRlIG9yIG5vdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW3N0YXRlXTpub3QoW3VybF0pLFt1cmxdOm5vdChbc3RhdGVdKSc7XG4gIHN0YXRpYyBjb250cm9sQXR0cmlidXRlcyA9IHRydWU7XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2EnLCB0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuc3RhdGUgPSBudWxsO1xuICAgIHRoaXMucGFyYW1zID0ge307XG4gICAgdGhpcy5xdWVyeSA9IHt9O1xuICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuICAgIHRoaXMuaXNVcmwgPSB0aGlzLmVsLmhhc0F0dHJpYnV0ZSgndXJsJyk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKHRoaXMuaXNVcmwpIHtcbiAgICAgICAgcm91dGVyLmxvY2F0aW9uKHRoaXMuYXR0cnMudXJsLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJvdXRlci5zdGF0ZSh0aGlzLnN0YXRlLm5hbWUsIHRoaXMucGFyYW1zLCB0aGlzLnF1ZXJ5LCB0aGlzLmhhc2gsICB0aGlzLm9wdGlvbnMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZCA9ICgpID0+IHRoaXMuc3RhdGUgJiYgdGhpcy5zZXRBY3Rpdml0eSgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzdGF0ZS1jaGFuZ2VkJywgdGhpcy5vblN0YXRlQ2hhbmdlZCk7XG5cbiAgICB0aGlzLmF0dHIoJ3N0YXRlJywgdGhpcy5zZXRTdGF0ZSk7XG4gICAgdGhpcy5hdHRyKCdwYXJhbXMnLCB0aGlzLnNldFBhcmFtcyk7XG4gICAgdGhpcy5hdHRyKCdxdWVyeScsIHRoaXMuc2V0UXVlcnkpO1xuICAgIHRoaXMuYXR0cignaGFzaCcsIHRoaXMuc2V0SGFzaCk7XG4gICAgdGhpcy5hdHRyKCdvcHRpb25zJywgdGhpcy5zZXRPcHRpb25zKTtcbiAgICB0aGlzLmF0dHIoJ3VybCcsIHRoaXMuc2V0VXJsKTtcbiAgICB0aGlzLmF0dHIoJ3N0YXRlJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cigncGFyYW1zJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cigncXVlcnknLCB0aGlzLnJlc2V0SHJlZiwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5hdHRyKCdoYXNoJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cigndXJsJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMucmVzZXRIcmVmKCk7XG4gIH1cblxuICByZW1vdmVkKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzdGF0ZS1jaGFuZ2VkJywgdGhpcy5vblN0YXRlQ2hhbmdlZCk7XG4gIH1cblxuICBzZXRVcmwodXJsKSB7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gIH1cblxuICBzZXRTdGF0ZShuYW1lKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0U3RhdGUobmFtZSk7XG4gICAgdGhpcy5zZXRBY3Rpdml0eSgpO1xuICB9XG5cbiAgc2V0QWN0aXZpdHkoKSB7XG4gICAgdGhpcy5zY29wZS5pc0FjdGl2ZVN0YXRlID0gcm91dGVyLmlzQWN0aXZlU3RhdGUodGhpcy5zdGF0ZSk7XG4gICAgdGhpcy5zY29wZS5pbkFjdGl2ZVN0YXRlID0gcm91dGVyLmluQWN0aXZlU3RhdGUodGhpcy5zdGF0ZSk7XG4gIH1cblxuICBzZXRQYXJhbXMocGFyYW1zKSB7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMgIT0gJ29iamVjdCcgfHwgIXBhcmFtcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgcGFyYW1zIG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gIH1cblxuICBzZXRRdWVyeShxdWVyeSkge1xuICAgIGlmICh0eXBlb2YgcXVlcnkgIT0gJ29iamVjdCcgfHwgIXF1ZXJ5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBxdWVyeSBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgfVxuXG4gIHNldEhhc2goaGFzaCkge1xuICAgIGlmICh0eXBlb2YgaGFzaCAhPSAnc3RyaW5nJyAmJiBoYXNoICE9PSB1bmRlZmluZWQgJiYgaGFzaCAhPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgaGFzaCBtdXN0IGJlIGEgc3RyaW5nfG51bGxgKTtcbiAgICB9XG5cbiAgICB0aGlzLmhhc2ggPSBoYXNoO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zICE9ICdvYmplY3QnIHx8ICFvcHRpb25zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBvcHRpb25zIG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIGdldFN0YXRlKG5hbWUpIHtcbiAgICBsZXQgc3RhdGUgPSByb3V0ZXIuZ2V0U3RhdGUobmFtZSk7XG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCByb3V0ZXIgc3RhdGUgd2l0aCBuYW1lIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgcmVzZXRIcmVmKCkge1xuICAgIGlmICh0aGlzLnVybCkge1xuICAgICAgdGhpcy5hdHRycy5ocmVmID0gdGhpcy51cmw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5hdHRycy5ocmVmID0gcm91dGVyLmNyZWF0ZVN0YXRlVXJsKHRoaXMuc3RhdGUsIHRoaXMucGFyYW1zLCB0aGlzLnF1ZXJ5LCB0aGlzLmhhc2gsIHRoaXMub3B0aW9ucyk7XG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==