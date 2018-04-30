/*!
 * Akili is a javascript framework
 * 
 * const Akili = makeItEasy(js + html);
 * 
 * @version 0.6.16
 * @author Alexandr Balasyan <mywebstreet@gmail.com>
 * {@link http://akilijs.com}
 * {@link https://github.com/ortexx/akili}
 */
/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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

var _if = __webpack_require__(12);

var _if2 = _interopRequireDefault(_if);

var _for = __webpack_require__(6);

var _for2 = _interopRequireDefault(_for);

var _select = __webpack_require__(13);

var _select2 = _interopRequireDefault(_select);

var _input = __webpack_require__(14);

var _input2 = _interopRequireDefault(_input);

var _radio = __webpack_require__(15);

var _radio2 = _interopRequireDefault(_radio);

var _text = __webpack_require__(5);

var _text2 = _interopRequireDefault(_text);

var _textarea = __webpack_require__(16);

var _textarea2 = _interopRequireDefault(_textarea);

var _content = __webpack_require__(17);

var _content2 = _interopRequireDefault(_content);

var _include = __webpack_require__(18);

var _include2 = _interopRequireDefault(_include);

var _iframe = __webpack_require__(19);

var _iframe2 = _interopRequireDefault(_iframe);

var _image = __webpack_require__(20);

var _image2 = _interopRequireDefault(_image);

var _embed = __webpack_require__(21);

var _embed2 = _interopRequireDefault(_embed);

var _audio = __webpack_require__(22);

var _audio2 = _interopRequireDefault(_audio);

var _video = __webpack_require__(23);

var _video2 = _interopRequireDefault(_video);

var _track = __webpack_require__(24);

var _track2 = _interopRequireDefault(_track);

var _source = __webpack_require__(25);

var _source2 = _interopRequireDefault(_source);

var _object = __webpack_require__(26);

var _object2 = _interopRequireDefault(_object);

var _route = __webpack_require__(10);

var _route2 = _interopRequireDefault(_route);

var _url = __webpack_require__(2);

var _url2 = _interopRequireDefault(_url);

var _a = __webpack_require__(27);

var _a2 = _interopRequireDefault(_a);

var _scope = __webpack_require__(7);

var _scope2 = _interopRequireDefault(_scope);

var _eventEmitter = __webpack_require__(8);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

var _request = __webpack_require__(4);

var _request2 = _interopRequireDefault(_request);

var _router = __webpack_require__(11);

var _router2 = _interopRequireDefault(_router);

var _store = __webpack_require__(9);

var _store2 = _interopRequireDefault(_store);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The framework object
 * 
 * {@link https://akilijs.com/docs/getting-started}
 */
var Akili = {};

Akili.__defaults = [];

/**
 * Set the framework's default variables
 */
Akili.setDefaults = function () {
  var _this = this;

  this.options = {
    debug: true,
    globals: { utils: _utils2.default }
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
  this.__onError = function () {
    return _this.triggerInit(false);
  };

  this.htmlBooleanAttributes = ['disabled', 'contenteditable', 'hidden'];

  this.components = {};
  this.services = {};

  this.Component = _component3.default;
  this.EventEmitter = _eventEmitter2.default;
  this.Scope = _scope2.default;
  this.utils = _utils2.default;
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
  this.errorHandling();
  this.isolateEvents();
  this.isolateArrayPrototype();
  this.isolateWindowFunctions();

  for (var i = 0, l = this.__defaults.length; i < l; i++) {
    this.__defaults[i]();
  }
};

/**
 * Define all default components
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
 * Set defaults
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
 * Join binding keys
 *
 * @param {string[]} keys binding keys
 */
Akili.joinBindingKeys = function (keys) {
  return keys.map(function (el) {
    return el.toString();
  }).join('.');
};

/**
 * Add scope to the scopes list
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
  var _this2 = this;

  return _utils2.default.createRandomString(16, function (str) {
    return !!_this2.__scopes[str];
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
  var res = fn();
  var props = [];

  for (var k in this.__isolation) {
    if (!this.__isolation.hasOwnProperty(k)) {
      continue;
    }

    props.push(this.__isolation[k]);
  }

  this.__isolation = null;

  for (var i = 0, l = props.length; i < l; i++) {
    var prop = props[i];

    if (prop.isDeleted) {
      prop.component.__evaluateByKeys(prop.keys, undefined, true);
      continue;
    }

    prop.component.scope.__set(prop.keys, _utils2.default.getPropertyByKeys(prop.keys, prop.component.__scope));
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
  var evaluation = this.__evaluation;
  var res = void 0;
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
  if (this.__wrapping) {
    return fn();
  }

  this.__wrapping = true;
  var res = fn();
  this.__wrapping = false;
  return res;
};

/**
 * Stop isolation before the function and continue after
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
 * Initialize element
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

  var nestedInitializing = function nestedInitializing(el) {
    var component = _this3.initialize(el, options);
    var children = el.children;
    component && elements.push(component);

    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      nestedInitializing(child);
    }
  };

  nestedInitializing(root);
  var p = [];

  for (var i = 0, l = elements.length; i < l; i++) {
    var component = elements[i];
    p.push(component.__compile());
  }

  return Promise.all(p).then(function () {
    var r = [];

    for (var _i = elements.length - 1; _i >= 0; _i--) {
      var _component = elements[_i];
      r.push(_component.__resolve());
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
    console.warn('Component ' + name + ' already was added');
  }

  this.__components[name] = fn;
};

/**
 * Unregister the component
 *
 * @param {string} name
 */
Akili.unregisterComponent = function (name) {
  delete this.__components[name];
};

/**
 * Register the selector alias or get it if component name is not passed
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
 * Unregister the selector alias
 *
 * @param {string} selector
 */
Akili.unregisterAlias = function (selector) {
  delete this.__aliases[selector];
};

/**
 * Isolate array prototype functions
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
        }, _this5);
      });
    };
  };

  for (var i = 0, l = keys.length; i < l; i++) {
    var _ret = _loop(i, l);

    if (_ret === 'continue') continue;
  }
};

/**
 * Isolate some window functions
 */
Akili.isolateWindowFunctions = function () {
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

    args[1] = function () {
      var _this6 = this,
          _arguments2 = arguments;

      return Akili.isolate(function () {
        return fn.apply(_this6, _arguments2);
      });
    };

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
 * Wrap the function callback to an isolate context
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

      args[index] = function () {
        var _arguments3 = arguments;

        return Akili.isolate(function () {
          return callback.apply(callback, _arguments3);
        });
      };
    };

    for (var i = 0, l = pos.length; i < l; i++) {
      var _ret2 = _loop2(i, l);

      if (_ret2 === 'continue') continue;
    }

    return fn.apply(this, args);
  };
};

/**
 * Wrap objects/classes to isolate and unevaluate data
 *
 * @param {*} obj
 * @param {object|function} [options] 
 */
Akili.wrap = function (obj) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var current = obj;

  if (typeof obj == 'function') {
    obj = this.wrapFunction(obj);

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
 * Unwrap objects/classes
 *
 * @param {object|function} obj
 */
Akili.unwrap = function (obj) {
  return this.wrap(obj, { reverse: true });
};

/**
 * Isolate a function
 *
 * @param {function} fn
 * @returns {function}
 */
Akili.wrapFunction = function (fn) {
  if (fn.__akili) {
    return fn;
  }

  var akiliWrappedFunction = function akiliWrappedFunction() {
    var _this7 = this,
        _arguments4 = arguments;

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

  for (var key in this.options.globals) {
    this.options.globals[key] = this.wrap(this.options.globals[key]);
  }

  return this.compile(this.__root).then(function () {
    if (_router2.default.__init) {
      return _router2.default.changeState();
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
 * Initialize server-side rendering html
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

  for (var _i2 = el.attributes.length - 1; _i2 >= 0; _i2--) {
    var attr = el.attributes[_i2];
    this.__root.setAttribute(attr.name, attr.value);
  }
};

/**
 * Initialize server-side rendering request cache
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
 * Prepare server-side rendering html
 */
Akili.prepareServerSideHtml = function () {
  return this.__root.outerHTML;
};

/**
 * Prepare server-side rendering request cache
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

window.Akili = Akili;
exports.default = Akili;

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
 * An object with a lot of useful functions
 * 
 * {@link https://akilijs.com/docs/utils}
 */
var utils = {};

/**
 * Create class attribute from an object
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
 * Create style attribute from an object
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
 * Extended split of the string
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
 * Filter an array
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
 * @param {string|RegExp|function} handler - type of filtering
 * @param {string[]|string} [keys] - filter in the keys if array elements are object
 * @returns {Array} - returns other array
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
 * Order an array
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
 * Return new object with the specified keys
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
 * Return new object without the specified keys
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
 * Check the value is component scope proxy object
 *
 * @param {*} val
 * @returns {boolean}
 */
utils.isScopeProxy = function (val) {
  return !!(val && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) == 'object' && val.__isProxy);
};

/**
 * Check the value is plain object
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

  options = _extends({ nested: true, enumerable: true }, options);

  var next = function next(obj) {
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
 * Change the value to attribute appropriate format
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

    options = _extends({ enumerable: true }, options);

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
 * Compare the current value with the previous
 *
 * @param {*} current - the current value
 * @param {*} previous - the previous value
 * @param {*} previousCopy - the previous value copy
 * @param {object} [options]
 * @returns {boolean}
 */
utils.comparePreviousValue = function (current, previous, previousCopy, options) {
  if (current !== previous) {
    return false;
  }

  return this.compare(current, previousCopy, options);
};

/**
 * Encode html entities
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
 * Decode html entities
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
 * Change string from dash to camel case format
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
 * Change string from camel to dash case format
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
 * Get nested object property by array keys
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
 * Check nested objects tree has property or not
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

    if ((typeof o === 'undefined' ? 'undefined' : _typeof(o)) != 'object') {
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
 * Set nested objects tree property
 * Returns changed property object
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

    if ((typeof o === 'undefined' ? 'undefined' : _typeof(o)) != 'object') {
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
 *
 * Delete property from nested objects tree
 * Returns deleted property value
 * You can cancel deleting if will return false in the callback function
 *
 * @example
 * // returns 5
 * utils.deletePropertyByKeys(['x', 'y'], {x: {y: 5}});
 @example
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

    if ((typeof o === 'undefined' ? 'undefined' : _typeof(o)) != 'object') {
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
 * Generate random string
 *
 * @param {number} length
 * @param {function} fn
 * @returns {*}
 */
utils.createRandomString = function () {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var str = Math.random().toString(36).substring(2, length + 2);
  var val = '';

  for (var i = 0, l = str.length; i < l; i++) {
    if (Math.random() > 0.66) {
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

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var evaluationRegex = exports.evaluationRegex = /\${(((?!\${).)*)}/;
var evaluationRegexGlobal = exports.evaluationRegexGlobal = new RegExp(evaluationRegex.source, "g");
var systemAttributes = exports.systemAttributes = ['component', 'scope'];

/**
 * Base class from which all components are inherited
 */

var Component = function () {
  _createClass(Component, null, [{
    key: 'define',


    /**
     * Function to define the component
     */
    value: function define() {
      _akili2.default.component('component', Component);
    }

    /**
     * Parse the expression
     *
     * @param {object} context
     * @param {string} expression
     * @param {object} [globals]
     */

  }, {
    key: 'parse',
    value: function parse(context, expression) {
      var globals = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      globals = _extends({}, _akili2.default.options.globals, globals);
      var keys = [];
      var vars = [];
      var exps = _utils2.default.split(expression, ';', ['"', "'", '`']);
      exps[exps.length - 1] = 'return ' + exps[exps.length - 1];

      for (var key in globals) {
        keys.push(key);
        vars.push(globals[key]);
      }

      return new (Function.prototype.bind.apply(Function, [null].concat(keys, ['' + exps.join('; ')])))().apply(context, vars);
    }

    /**
     * Constructor
     * 
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
    this.__recompiling = false;
    this.__compiling = null;
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
   * Create compilation options 
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
     * Create recompilation options 
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
        setBooleanAttributes: false,
        defineAttributes: false
      }, options);
    }

    /**
     * Called on the recompilation
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
     * Called on the creation
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
     * Called on the compilation
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

          if (child.nodeType == 3 && _this2.__initializeNode(child, parent, true)) {
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
        _akili2.default.isolate(function () {
          _this2.attrs.onRecompiled && _this2.attrs.onRecompiled.trigger(undefined, { bubbles: false });
          _this2.recompiled();
        });
      }

      this.__recompiling = false;
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

      if (this.__recompiling) {
        return Promise.resolve();
      }

      this.attrs.onResolved && this.attrs.onResolved.trigger(undefined, { bubbles: false });

      return Promise.resolve(this.resolved()).then(function (res) {
        _this3.__isResolved = true;
        return res;
      });
    }

    /**
     * Part of the {@see Component#__compile} method
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
      this.__saveAttributeProxyIn = this.constructor.saveAttributeProxyIn;
      this.__saveAttributeProxyOut = this.constructor.saveAttributeProxyOut;

      _akili2.default.addScope(scope);
      this.scope = this.__nestedObserve(_scope, []);
      return true;
    }

    /**
     * Set boolean attributes
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
     * Set events
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
     * Set component parents
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
     * Add child element to the list
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
     * Splice child from the list
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
     * You can change expression before parsing here
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
     * Check node has any property changes or not
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

        if (!_utils2.default.comparePreviousValue(value, prop.value, prop.copy)) {
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

  }, {
    key: '__checkNodePropertyChange',
    value: function __checkNodePropertyChange(node, keys, value) {
      var prop = this.__getNodeProperty(node, keys);

      if (!prop) {
        return true;
      }

      return !_utils2.default.comparePreviousValue(value, prop.value, prop.copy);
    }

    /**
     * Evaluate node expression
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

      if (node.__component.parents(function (com) {
        return com.__prevent;
      }).length) {
        return node.__expression;
      }

      if (!(node instanceof window.Attr) && node.__component.__prevent) {
        return node.__expression;
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
          evaluate = _this5.constructor.parse(_this5.__evaluationComponent.scope, parseValue);
        } catch (err) {
          var tagName = node.__component.el.tagName;
          var attrName = node.__component.el.getAttribute('component');
          var componentName = (attrName || tagName).toLowerCase();
          var elementName = node.__element.tagName.toLowerCase();
          var attributeName = node instanceof window.Attr ? node.name.toLowerCase() : '';
          var messages = [err.message, node.__expression];
          attributeName && messages.push('[attribute ' + attributeName + ']');
          messages = messages.concat(['[element ' + elementName + ']', '[component ' + componentName + ']']);
          throw 'Expression error: ' + messages.join('\n\tat ');
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
          var evalComponent = node.__attributeOf || node.__component;

          if (parentValue && (typeof parentValue === 'undefined' ? 'undefined' : _typeof(parentValue)) == 'object') {
            if (_akili2.default.options.debug && parentBindings[parentsHash] == 50) {
              // eslint-disable-next-line no-console
              console.warn(['For higher performance, don\'t loop Proxy arrays/objects inside expression functions, or use Akili.unevaluate() to wrap you code.', '' + node.__expression, 'scope property "' + data.parents.join('.') + '"'].join('\n\tat '));
            }

            !parentBindings[parentsHash] ? parentBindings[parentsHash] = 1 : parentBindings[parentsHash]++;
          }

          if (_utils2.default.isScopeProxy(parentValue) && data.component !== evalComponent.__evaluationComponent && data.component === data.realComponent) {
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
     * Bind the node and set property
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
     * Nested evaluation by keys
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
     * Evaluate value by keys
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
      this.__evaluateNested(keys);

      if (isDeleted) {
        this.__unbind(keys);
        isDeleted && _utils2.default.deletePropertyByKeys(keys, this.__scope);
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
            !component.__saveAttributeProxyIn && (value = _utils2.default.copy(value));
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
     * Attribute node initializing
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

      this.__initializeNode(node, el);
      var eventName = node.nodeName.replace(/^on-(.+)/i, '$1');
      var nodeName = _utils2.default.toCamelCase(node.nodeName);
      var component = attributeOf ? attributeOf : this;

      if (eventName != node.nodeName) {
        if (node.__event) {
          return;
        }

        var emitter = new _akili2.default.EventEmitter(eventName, el, component);

        if (node.__expression) {
          emitter.bind(function (e) {
            return component.__evaluateEvent(node, el, e);
          });
        }

        node.__event = emitter;
        el.setAttribute(node.nodeName, _utils2.default.makeAttributeValue(emitter));

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

      var check = this.__compiling ? this.__compiling.checkChanges : false;
      var currentValue = node.value;
      var res = component.__evaluateNode(node, check);
      currentValue != res && el.setAttribute(node.nodeName, res);
    }

    /**
     * Initialize the node
     *
     * @param {Node} node
     * @param {Element} el
     * @param {boolean} [checkBinding]
     * @returns {boolean}
     * @protected
     */

  }, {
    key: '__initializeNode',
    value: function __initializeNode(node, el) {
      var checkBinding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (node.__initialized) {
        return true;
      }

      var val = node[node instanceof window.Attr ? 'value' : 'nodeValue'].trim();
      var hasBinding = checkBinding ? evaluationRegex.test(val) : false;

      if (checkBinding && !hasBinding) {
        return false;
      }

      node.__expression = val;
      node.__properties = {};
      node.__attributeOf = null;
      node.__attributeOn = null;
      node.__event = null;
      node.__hasBindings = hasBinding;
      node.__initialized = true;
      node.__component = this;
      node.__element = el;
      return true;
    }

    /**
     * Deinitialize the node
     *
     * @param {Node} node
     * @protected
     */

  }, {
    key: '__deinitializeNode',
    value: function __deinitializeNode(node) {
      if (node.__event) {
        node.__event.unbind();
        node.__event = null;
      }

      if (node.__hasBindings) {
        this.__parent && this.__parent.__akili.__evaluationComponent.__unbindByNodes([node]);
      }

      delete node.__expression;
      delete node.__properties;
      delete node.__attributeOf;
      delete node.__attributeOn;
      delete node.__event;
      delete node.__hasBindings;
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

  }, {
    key: '__interpolateAttributes',
    value: function __interpolateAttributes(el) {
      var attributeOf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      for (var i = 0, attrs = el.attributes, l = attrs.length; i < l; i++) {
        this.__initializeAttribute(attrs[i], el, attributeOf);
      }
    }

    /**
     * Define attributes as proxy
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
     * Set proxy to object
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

          var keyString = _akili2.default.joinBindingKeys(keys);

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

          if (_akili2.default.__isolation) {
            _this9.__createIsolationObject(parents, key, false);
            return true;
          }

          if (_this9.__storeLinks[keyString]) {
            _this9.__storeTriggerByKeys(keys, value);
          }

          if (_this9.__attrLinks[keyString]) {
            _this9.__attrTriggerByKeys(keys, value);
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

          if (_akili2.default.__isolation) {
            delete target[key];
            _this9.__createIsolationObject(parents, key, true);
            return true;
          }

          delete target[key];
          _this9.__evaluateByKeys(keys, undefined, true);
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

  }, {
    key: '__createKeysHash',
    value: function __createKeysHash(keys) {
      return this.__scope.__name + '.' + _akili2.default.joinBindingKeys(keys);
    }

    /**
     * Disable the keys setter
     * 
     * @param {string[]} keys    
     * @protected
     */

  }, {
    key: '__disableKeys',
    value: function __disableKeys(keys) {
      this.__disableProxy[keys ? this.__createKeysHash(keys) : '__all'] = true;
    }

    /**
     * Enable the keys setter
     * 
     * @param {string[]} keys    
     * @protected
     */

  }, {
    key: '__enableKeys',
    value: function __enableKeys(keys) {
      delete this.__disableProxy[keys ? this.__createKeysHash(keys) : '__all'];
    }

    /**
     * Check the keys setter disablemant
     * 
     * @param {string[]} keys    
     * @protected
     */

  }, {
    key: '__checkDisablement',
    value: function __checkDisablement(keys) {
      return this.__disableProxy.__all ? true : this.__disableProxy[this.__createKeysHash(keys)];
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
      var links = this.__storeLinks[_akili2.default.joinBindingKeys(keys)];

      if (!links || !links.length) {
        return;
      }

      value = _utils2.default.copy(value);
      this.__disableKeys(keys);

      for (var i = 0, l = links.length; i < l; i++) {
        var link = links[i];

        if (!link.set) {
          continue;
        }

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

        var current = _utils2.default.getPropertyByKeys(link.keys, component.__scope);
        !_utils2.default.compare(current, value) && component.scope.__set(link.keys, value);
      };

      for (var i = 0, l = links.length; i < l; i++) {
        var _ret = _loop(i, l);

        if (_ret === 'continue') continue;
      }
    }

    /**
     * Create a store link with the scope property
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

      this.scope.__set(keys, _store2.default[name]);
      var keyString = _akili2.default.joinBindingKeys(keys);
      var info = void 0;

      if (!this.__storeLinks[keyString]) {
        this.__storeLinks[keyString] = [];
      }

      var arr = this.__storeLinks[keyString];

      for (var i = arr.length - 1; i >= 0; i--) {
        var res = arr[i];

        if (res.component === this && res.name == name && res.keyString == keyString) {
          //eslint-disable-next-line no-console 
          _akili2.default.options.debug && console.warn('Store link "' + name + '" with key "' + keyString + '" already exists');
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
     * Create a store link with the function
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
          break;
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
     * Trigger an attribute event by the keys
     * 
     * @param {string[]} keys 
     * @param {*} value    
     * @protected
     */

  }, {
    key: '__attrTriggerByKeys',
    value: function __attrTriggerByKeys(keys, value) {
      var _this12 = this;

      if (this.__disableAttrTriggering) {
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
     * Trigger an attribute event by the name
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
        _this13.__disableAttrTriggering = true;

        if (link.fn) {
          _akili2.default.unisolate(function () {
            return link.fn.call(_this13, value, _utils2.default.toDashCase(name));
          });
        } else if (link.get) {
          var current = _utils2.default.getPropertyByKeys(link.keys, _this13.__scope);
          !_utils2.default.compare(current, value) && _this13.scope.__set(link.keys, value);
        }

        _this13.__disableAttrTriggering = false;
      };

      for (var i = 0, l = links.length; i < l; i++) {
        _loop3(i, l);
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

      this.__disableAttrTriggering = true;
      this.attrs.hasOwnProperty(name) && this.scope.__set(keys, this.attrs[name]);
      this.__disableAttrTriggering = false;
      var keyString = _akili2.default.joinBindingKeys(keys);

      if (!this.__attrLinks[keyString]) {
        this.__attrLinks[keyString] = [];
      }

      var arr = this.__attrLinks[keyString];

      for (var i = arr.length - 1; i >= 0; i--) {
        var res = arr[i];

        if (res.name == name && res.keyString == keyString) {
          //eslint-disable-next-line no-console 
          _akili2.default.options.debug && console.warn('Attribute link "' + name + '" with key "' + keyString + '" already exists');
          return;
        }
      }

      this.__attrLinks[keyString].push({ name: name, keys: keys, keyString: keyString, date: Date.now(), set: options.set, get: options.get });
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
          break;
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
     * Nested observing the value
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

        for (var k in target) {
          if (!target.hasOwnProperty(k)) {
            continue;
          }

          var _val = target[k];
          var keys = [].concat(parents, [k]);
          target[k] = observe(_val, keys);
        }

        if (!value.__isProxy) {
          return _this15.__observe(value, parents);
        }

        return value;
      };

      var res = observe(value, startKeys || []);
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

  }, {
    key: '__createIsolationObject',
    value: function __createIsolationObject(parents, key) {
      var isDeleted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var keys = parents.length ? [parents[0]] : [key];
      var isolationKey = this.__createKeysHash(keys);

      if (parents.length) {
        isDeleted = false;
      }

      if (!_akili2.default.__isolation[isolationKey]) {
        _akili2.default.__isolation[isolationKey] = {
          updatedAt: new Date().getTime(),
          component: this,
          keys: keys
        };
      }

      isDeleted !== undefined && (_akili2.default.__isolation[isolationKey].isDeleted = isDeleted);
      return _akili2.default.__isolation[isolationKey];
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
     * Check the key is system binding thing
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
     * Get binding by keys
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
     * Get all nested bindings by keys
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
     * Get binding by keys
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
     * @param {boolean} [evaluated]
     * @returns {boolean}
     * @protected
     */

  }, {
    key: '__setNodeProperty',
    value: function __setNodeProperty(node, keys, value) {
      var evaluated = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      var prop = this.__getNodeProperty(node, keys);
      var copy = _utils2.default.copy(value);

      if (prop) {
        var res = _utils2.default.comparePreviousValue(value, prop.value, prop.copy);
        prop.value = value;
        prop.copy = copy;
        return !res;
      }

      node.__properties[this.__createKeysHash(keys)] = {
        component: this,
        value: value,
        copy: copy,
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
     * Bind data with the keys
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
     * Unbind data by nodes
     *
     * @param {Node[]} nodes
     * @protected
     */

  }, {
    key: '__unbindByNodes',
    value: function __unbindByNodes(nodes) {
      var _this16 = this;

      var unbind = function unbind(obj) {
        for (var k in obj) {
          if (!obj.hasOwnProperty(k)) {
            continue;
          }

          if (k == '__data') {
            var data = obj[k] || [];
            var l = data.length;

            for (var i = 0; i < l; i++) {
              var bind = data[i];

              if (nodes.indexOf(bind.node) != -1) {
                data.splice(i, 1);
                i--;
                l--;
              }
            }

            if (!l) {
              delete obj[k];
            }
          } else if (!_this16.__isSystemBindingKey(k)) {
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

  }, {
    key: '__clearEmptyBindings',
    value: function __clearEmptyBindings(obj) {
      var _this17 = this;

      var clear = function clear(obj, parent, key) {
        for (var k in obj) {
          if (!obj.hasOwnProperty(k)) {
            continue;
          }

          var _val2 = obj[k];

          if (k == '__data' && (!_val2 || !_val2.length)) {
            delete obj[k];
          } else if (!_this17.__isSystemBindingKey(k)) {
            if (!Object.keys(obj[k]).length) {
              delete obj[k];
            } else {
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

  }, {
    key: '__clearStoreLinks',
    value: function __clearStoreLinks() {
      var links = _akili2.default.__storeLinks;

      for (var _key2 in links) {
        var arr = links[_key2];

        for (var i = arr.length - 1; i >= 0; i--) {
          var _link3 = arr[i];

          if (_link3.component === this) {
            arr.splice(i, 1);
          }
        }

        if (!arr.length) {
          delete links[_key2];
        }
      }
    }

    /**
     * Remove all child components
     *
     * @protected
     */

  }, {
    key: '__removeChildren',
    value: function __removeChildren() {
      var remove = function remove(children) {
        for (var i = 0; i < children.length; i++) {
          var child = children[i];

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

  }, {
    key: '__remove',
    value: function __remove() {
      this.__detach();
      this.__clearStoreLinks();
      this.attrs.onRemoved && this.attrs.onRemoved.trigger(undefined, { bubbles: false });
      this.removed();
      _akili2.default.removeScope(this.__scope.__name);
      this.el.remove();
    }

    /**
     * Detach the component
     *
     * @protected
     */

  }, {
    key: '__detach',
    value: function __detach() {
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

  }, {
    key: '__destroy',
    value: function __destroy() {
      this.__removeChildren();
      this.__remove();
    }

    /**
     * Clear the component html
     *
     * @protected
     */

  }, {
    key: '__empty',
    value: function __empty() {
      var nodes = [];
      this.__removeChildren();
      var find = function find(children) {
        for (var i = 0, l = children.length; i < l; i++) {
          var child = children[i];

          if (child.nodeType == 3) {
            nodes.push(child);
          } else if (child.nodeType == 1 && !child.__akili) {
            for (var k = 0, attrs = child.attributes, c = attrs.length; k < c; k++) {
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
     * Get child components
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
     * Get nearest components
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
     * Create a link to the store
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
     * Create a link with the attribute
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
     * Check the component matches selector
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
     * Get closest parent component by selector
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
     * Get array of parent components by selector
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
     * Get closest child component by selector
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
     * Get array of child components by selector
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
     * Get array of components left from the current by selector
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
     * Get array of components right from the current by selector
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
     * Get closest component left from the current by selector
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
     * Get closest component right from the current by selector
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
     * Change element parent
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
     * Cancel component compilation
     */

  }, {
    key: 'cancel',
    value: function cancel() {
      this.__cancelled = true;
    }

    /**
     * Compale the component, but cancel the compilation inside of it
     */

  }, {
    key: 'prevent',
    value: function prevent() {
      this.__prevent = true;
    }

    /**
     * Clear element html
     *
     * @returns {*}
     */

  }, {
    key: 'empty',
    value: function empty() {
      return this.__empty.apply(this, arguments);
    }

    /**
     * Remove element
     *
     * @returns {*}
     */

  }, {
    key: 'remove',
    value: function remove() {
      return this.__destroy.apply(this, arguments);
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
Component.saveAttributeProxyIn = false;
Component.saveAttributeProxyOut = false;
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
 * An instance of this class allows you to make requests.
 * 
 * {@link https://akilijs.com/docs/requests}
 */
var Request = exports.Request = function () {

  /**
   * Constructor
   * 
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
      statusErrorsPattern: /^([^23])|404/,
      cache: false
    }, defaults || {});
  }

  /**
   * Send request with any method
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
        window.AKILI_SERVER && !_akili2.default.__init && (cache = true);

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

          if ((xhr.status + '').match(options.statusErrorsPattern)) {
            var err = new Error('Request to "' + options.url + '" returns failure status code ' + xhr.status);
            err.response = response;
            return reject(err);
          }

          hash && _this.createCache(hash, result);
          resolve(response);
        };

        xhr.ontimeout = function () {
          reject(new Error('Request to "' + options.url + '" timed out'));
        };

        xhr.onerror = function (err) {
          reject(err);
        };

        xhr.send(options.body);
      });
    }

    /**
     * Get headers of a XMLHttpRequest instance
     * 
     * @param {XMLHttpRequest}
     */

  }, {
    key: 'getCache',


    /**
     * Get cache
     * 
     * @param {string} hash
     * @returns {object}
     */
    value: function getCache(hash) {
      return this.__cache[hash] || null;
    }

    /**
     * Create cache
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
     * Remove cache
     * 
     * @param {string} hash
     */

  }, {
    key: 'removeCache',
    value: function removeCache(hash) {
      delete this.__cache[hash];
    }

    /**
     * Create a hash to save in the cache
     * 
     * @param {object} data
     * @returns {string}
     */

  }, {
    key: 'createCacheHash',
    value: function createCacheHash(data) {
      var hash = 0;
      var str = JSON.stringify(data);

      for (var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash;
      }

      return hash + '';
    }

    /**
     * Convert object to query string
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
            opt.push(ks + ('[' + key + ']') + eq + encodeURIComponent(obj[k][key]));
          });

          return opt.join(sep);
        } else {
          return ks + eq + encodeURIComponent(obj[k]);
        }
      }).join(sep);
    }

    /**
     * Convert query string to object
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
     * Create multipart form data from object
     *
     * @param {object} obj
     * @param {FormData} [data]
     * @param {string} [namespace]   *
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
     * Transform data before a request
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
     * Transform data after a request
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
     *  Make GET request
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
     *  Make DELETE request
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
     *  Make POST request
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
     *  Make PUT request
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
     *  Make PATCH request
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
    *  Make HEAD request
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
 * Set router's default variables
 */
request.setDefaults = function () {
  this.__instances = {};
  this.__cache = {};
};

/**
 * Add new request instance to the main service
 *
 * @param {string} name
 * @param {Request} instance
 */
request.addInstance = function (name, instance) {
  this.__instances[name] = instance;
};

/**
 * Remove instance
 *
 * @param {string} name
 */
request.removeInstance = function (name) {
  delete this.__instances[name];
};

/**
 * Deinit router
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
    _this.debounceTimeout = null;
    return _this;
  }

  _createClass(Text, [{
    key: 'compiled',
    value: function compiled() {
      var _this2 = this;

      if (this.el.hasAttribute('on-debounce')) {
        this.el.addEventListener('input', function () {
          _this2.debounceTimeout && clearTimeout(_this2.debounceTimeout);
          _this2.debounceTimeout = setTimeout(function () {
            _this2.attrs.onDebounce.trigger(undefined, { bubbles: true });
          }, _this2.debounceInterval);
        });
      }

      this.attr('focus', this.setFocus);
      this.attr('value', this.setValue);
      this.attr('debounce', this.setDebounce);
    }
  }, {
    key: 'removed',
    value: function removed() {
      this.debounceTimeout && clearTimeout(this.debounceTimeout);
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

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
    _this.iteratorRef = null;
    _this.iteratorOuterHTML = null;
    _this.reset();
    return _this;
  }

  _createClass(For, [{
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
      this.iteratorRef = el.nextSibling;
      this.iteratorOuterHTML = el.outerHTML;
      el.remove();
    }
  }, {
    key: 'createIteratorElement',
    value: function createIteratorElement() {
      var el = document.createElement('template');
      el.innerHTML = this.iteratorOuterHTML;
      el = el.content.firstChild;
      return el;
    }
  }, {
    key: 'loop',
    value: function loop(key, value, index) {
      this.__index = index;
      this.__key = key;
      this.__value = value;
      this.__comparisonValue = _utils2.default.copy(value);

      if (this.iterators.length > index) {
        var iterator = this.iterators[index];
        var cCopy = iterator.comparsion.copy;

        if (this.__index !== iterator.index) {
          iterator.setIndex();
        } else {
          iterator.setIndex(true);
        }

        if (this.__key !== iterator.key) {
          iterator.setKey();
        } else {
          iterator.setKey(true);
        }

        if (!_utils2.default.compare(cCopy, this.__comparisonValue, { ignoreUndefined: true })) {
          iterator.setValue();
        } else {
          iterator.setValue(true);
        }

        this.__promises.push(_akili2.default.compile(iterator.el, { recompile: { checkChanges: true } }));
        return iterator;
      }

      var el = this.createIteratorElement();
      el.innerHTML = this.html;
      this.el.insertBefore(el, this.iteratorRef);
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

      var loop = function loop(key, value, index) {
        var iterator = _this2.loop(key, value, index);
        iterator.iterate(index);
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
        iterator.__destroy();
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
      this.__comparisonValue = null;
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
For.saveAttributeProxyIn = true;
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

      this.comparsion = {
        copy: this.for.__comparisonValue,
        value: this.for.__value
      };
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
   * Set a scope value
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

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class for working with events.
 * An instance of this class allows you to trigger custom javascript events.
 * 
 * {@link https://akilijs.com/docs/events}
 */
var EventEmitter = function () {
  function EventEmitter(name, el, component) {
    _classCallCheck(this, EventEmitter);

    this.name = name;
    this.el = el;
    this.component = component;
    this.elComponent = this.el.__akili || null;
  }

  /**
   * Trigger the event
   *
   * @param {*} data - sending data. Will be in the event.detail
   * @param {object} [options]
   * @param {boolean} [force]
   * @returns {Promise}
   */


  _createClass(EventEmitter, [{
    key: 'trigger',
    value: function trigger(data) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

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
    key: 'dispatch',
    value: function dispatch(_Event) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (force || !this.inEvaluating()) {
        this.el.dispatchEvent(new _Event(this.name, this.prepareOptions(options)));
      }
    }

    /**
     * Prepere an event options
     * 
     * @param {object} [options] 
     */

  }, {
    key: 'prepareOptions',
    value: function prepareOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      options = _extends({ bubbles: true }, options);
      this.elComponent && !this.elComponent.__saveAttributeProxyOut && (options.detail = _utils2.default.copy(options.detail));
      return options;
    }

    /**
     * Check event callback doesn't run recursive
     *
     * @returns {boolean}
     */

  }, {
    key: 'inEvaluating',
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
    key: 'bind',
    value: function bind(fn) {
      this.el.addEventListener(this.name, this.fn = fn);
    }

    /**
     * Unbind the function
     */

  }, {
    key: 'unbind',
    value: function unbind() {
      this.fn && this.el.removeEventListener(this.name, this.fn);
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
 * Store allows you to save and distribute data.
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

    value = _utils2.default.copy(value);
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
   * @returns {Promise}
   */


  _createClass(Route, [{
    key: 'setTransition',
    value: function setTransition(transition) {
      var _this2 = this;

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

      if (!transition.path.loaded) {
        return _akili2.default.compile(this.el, { recompile: true });
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
/* 11 */
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

var _route2 = __webpack_require__(10);

var _route3 = _interopRequireDefault(_route2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Transition class.
 * An instance of this class consists the last actual router transition information.
 * 
 * {@link https://akilijs.com/docs/routing#docs_transition}
 */
var Transition = exports.Transition = function () {
  function Transition() {
    var previous = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, Transition);

    this.previous = previous;
    this.path = null;
    this.routes = [];
    this.states = {};
    this.__cancelled = false;
  }

  /**
   * Redirect to another state
   * 
   * @see router.state
   */


  _createClass(Transition, [{
    key: 'redirect',
    value: function redirect() {
      this.cancel();
      router.state.apply(router, arguments);
    }

    /**
     * Reload the current state
     * 
     * @param {object} [params]
     * @param {object} [query]
     * @param {string} [hash]
     * @param {object} [options]
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
     * Cancel the current transition
     */

  }, {
    key: 'cancel',
    value: function cancel() {
      this.__cancelled = true;
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
 * Set router's default variables
 */
router.setDefaults = function () {
  this.baseUrl = "/";
  this.states = [];
  this.hashMode = true;
  this.__redirects = 0;
  this.__init = false;
  this.__options = {};
  this.__paramRegex = /(\/?:([\w\d-]+))/g;
  this.__routeSelector = function (c) {
    return c instanceof _route3.default;
  };
};

/**
 * Add new state to the router
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
    hash: null,
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
 * Remove state from the list
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
 * Check state exists
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
 * Change the state to the passed
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
  var hash = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  (typeof state === 'undefined' ? 'undefined' : _typeof(state)) !== 'object' && (state = this.getState(state));

  if (!state) {
    throw new Error('Not found route state with name ' + state);
  }

  var url = this.createStateUrl(state, params, query, hash);
  this.__options = options;
  this.__options.manual = true;
  this.setUrl(url);
};

/**
 * Go back
 */
router.back = function () {
  return window.history.back.apply(window.history, arguments);
};

/**
 * Go to any way
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
 * Change state by url
 *
 * @param {string} url
 * @param {object} [options]
 */
router.location = function (url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { reload: false };

  this.__options = options;
  this.__options.manual = true;

  if (this.hashMode) {
    var current = window.location.hash.replace('#', '');
    window.location.hash = url;
    // eslint-disable-next-line no-console
    current === url && this.changeState().catch(function (err) {
      return console.error(err);
    });
  } else {
    window.history.pushState(null, '', url);
  }
};

/**
 * Router initialization. Should be called before Akili.init()
 *
 * @param {string} [defaultUrl]
 * @param {boolean} [hashMode=true]
 */
router.init = function () {
  var _this = this;

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
    _this.changeState().catch(function (err) {
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
 * Get state by name
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
 * Set state
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
 * Remove state by name
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
 * Set url
 *
 * @param {string} url
 */
router.setUrl = function (url) {
  this.hashMode ? this.setHashUrl(url) : this.setHistoryUrl(url);
};

/**
 * Set url using history
 *
 * @param url
 */
router.setHistoryUrl = function (url) {
  window.history.pushState(null, '', url);
};

/**
 * Set url using hash
 *
 * @param url
 */
router.setHashUrl = function (url) {
  window.location.hash = '#' + (url || '/');
};

/**
 * Get url
 *
 * @returns {string}
 */
router.getUrl = function () {
  return this.hashMode ? this.getHashUrl() : this.getHistoryUrl();
};

/**
 * Get url using history
 *
 * @returns {string}
 */
router.getHistoryUrl = function () {
  return window.location.pathname + window.location.search + window.location.hash;
};

/**
 * Get url using hash
 *
 * @returns {string}
 */
router.getHashUrl = function () {
  return window.location.hash.replace(/^#/, '');
};

/**
 * Get query params
 *
 * @returns {object}
 */
router.getUrlQuery = function () {
  return this.hashMode ? this.getHashUrlQuery() : this.getHistoryUrlQuery();
};

/**
 * Get query params using history
 *
 * @returns {object}
 */
router.getHistoryUrlQuery = function () {
  return _request2.default.paramsFromQuery(window.location.search.replace(/^\?/, ''));
};

/**
 * Get query params using hash
 *
 * @returns {object}
 */
router.getHashUrlQuery = function () {
  return _request2.default.paramsFromQuery(window.location.hash.split('?')[1] || '');
};

/**
 * Create url by data
 *
 * @param {string|Object} state
 * @param {object} [params]
 * @param {object} [query]
 * @param {string} [hash]
 * @param {boolean} [prepare=true]
 */
router.createStateUrl = function (state) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var hash = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  var prepare = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

  (typeof state === 'undefined' ? 'undefined' : _typeof(state)) !== 'object' && (state = this.getState(state));
  prepare && (params = this.prepareStateParams(state, params));
  prepare && (query = this.prepareStateQuery(state, query));
  prepare && (hash = this.prepareStateHash(state, hash));
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
 * Prepare the state params
 * 
 * @param {string|Object} state
 * @param {object} params
 */
router.prepareStateParams = function (state, params) {
  (typeof state === 'undefined' ? 'undefined' : _typeof(state)) !== 'object' && (state = this.getState(state));
  var allParams = {};
  var lastState = '';
  var defaultParams = {};
  var states = state.name.split('.');

  for (var i = 0, l = states.length; i < l; i++) {
    var current = lastState + states[i];
    allParams = _extends({}, allParams, this.getState(current).params);
    lastState = current + '.';
  }

  var paramKeys = Object.keys(allParams);

  for (var _i = 0, _l = paramKeys.length; _i < _l; _i++) {
    var key = paramKeys[_i];
    var val = allParams[key];
    defaultParams[key] = typeof val == 'function' ? val(router.transition, params[key]) : val;
  }

  for (var _key in params) {
    var _val = params[_key];

    if (_val === undefined) {
      continue;
    }

    if (_val === null) {
      delete defaultParams[_key];
      continue;
    }

    defaultParams[_key] = _val;
  }

  return defaultParams;
};

/**
 * Prepare the state query
 * 
 * @param {string|Object} state
 * @param {object} query
 */
router.prepareStateQuery = function (state, query) {
  (typeof state === 'undefined' ? 'undefined' : _typeof(state)) !== 'object' && (state = this.getState(state));
  var allQuery = {};
  var lastState = '';
  var defaultQuery = {};
  var states = state.name.split('.');

  for (var i = 0, l = states.length; i < l; i++) {
    var current = lastState + states[i];
    allQuery = _extends({}, allQuery, this.getState(current).query);
    lastState = current + '.';
  }

  var queryKeys = Object.keys(allQuery);

  for (var _i2 = 0, _l2 = queryKeys.length; _i2 < _l2; _i2++) {
    var key = queryKeys[_i2];
    var val = allQuery[key];
    defaultQuery[key] = typeof val == 'function' ? val(router.transition, query[key]) : val;
  }

  for (var _key2 in query) {
    var _val2 = query[_key2];

    if (_val2 === undefined) {
      continue;
    }

    if (_val2 === null) {
      delete defaultQuery[_key2];
      continue;
    }

    defaultQuery[_key2] = _val2;
  }

  return defaultQuery;
};

/**
 * Prepare the state hash
 * 
 * @param {string|Object} state
 * @param {string} hash
 */
router.prepareStateHash = function (state, hash) {
  if (hash !== undefined) {
    return hash;
  }

  (typeof state === 'undefined' ? 'undefined' : _typeof(state)) !== 'object' && (state = this.getState(state));
  var states = state.name.split('.');
  var lastState = '';

  for (var i = 0, l = states.length; i < l; i++) {
    var current = lastState + states[i];
    var currentHash = this.getState(current).hash;
    currentHash !== undefined && (hash = currentHash);
    lastState = current + '.';
  }

  return hash || '';
};

/**
 * Remove all unnecessary slashes from an url
 *
 * @param {string} url
 * @returns {string}
 */
router.splitSlashes = function (url) {
  return url.replace(/[/]+/g, '/');
};

/**
 * Get state url content
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
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key3 = 1; _key3 < _len; _key3++) {
      args[_key3 - 1] = arguments[_key3];
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
 * Check the state is active now
 *
 * @param {string|Object} state
 * @param {boolean} includes
 * @returns {boolean}
 */
router.isActiveState = function (state) {
  var includes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  (typeof state === 'undefined' ? 'undefined' : _typeof(state)) !== 'object' && (state = this.getState(state));
  var url = this.splitSlashes('/' + this.getUrl().split('?')[0] + '/');
  var urlPattern = state.fullPattern.replace(this.__paramRegex, '/?([^/]*)');
  urlPattern = urlPattern.replace(/^\^/, '').replace(/\$$/, '');
  var str = includes ? urlPattern : this.splitSlashes('^/' + urlPattern + '/$');
  var regex = new RegExp(str);
  return regex.test(url);
};

/**
 * Check the current url includes a state
 *
 * @param {string|Object} state
 * @returns {boolean}
 */
router.inActiveState = function (state) {
  return router.isActiveState(state, true);
};

/**
 * Get route component by level
 *
 * @param {number} level
 */
router.getRoute = function (level) {
  var _this2 = this;

  var i = 0;

  var find = function find(el) {
    var route = el.child(_this2.__routeSelector);

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
 * Get the first match
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
 * Get states by level
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
 * Isolate the function to not trigger router handlers inside
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
 * Change state
 */
router.changeState = function () {
  var _this3 = this;

  if (this.__isolated) {
    return Promise.resolve();
  }

  var url = this.getUrl();
  var params = {};
  var query = this.getUrlQuery();
  var hash = this.hashMode ? '' : window.location.hash.replace('#', '');
  var prevTransition = router.transition || null;
  var transition = router.transition = new Transition(prevTransition);
  var level = 0;
  var componentLevel = 0;

  window.dispatchEvent(new CustomEvent('state-change', { detail: transition }));

  var next = function next(states, onEnd) {
    if (!states.length) {
      return onEnd && onEnd();
    }

    var content = _this3.getArrayPatternContent(states, url);

    if (!content) {
      return onEnd && onEnd();
    }

    var state = content.state;
    transition.setPath({ state: state, component: route, loaded: true });
    var currentUrl = _this3.createStateUrl(state, content.params, query, hash, false);
    params = _this3.prepareStateParams(state, _extends({}, params, content.params));
    query = _this3.prepareStateQuery(state, query);
    hash = _this3.prepareStateHash(state, hash || (!_this3.__options.manual ? undefined : '')) || '';
    var realUrl = _this3.createStateUrl(state, params, query, hash, false);
    currentUrl != realUrl && _this3.isolate(function () {
      return _this3.setUrl(realUrl);
    });
    var route = state.abstract ? null : _this3.getRoute(componentLevel);

    if (!route && !state.abstract) {
      throw new Error('Not found route component for state "' + state.name + '"');
    }

    transition.path.params = params;
    transition.path.query = query;
    transition.path.hash = hash;
    transition.path.url = realUrl;
    !state.abstract && componentLevel++;
    level++;

    var hasState = prevTransition && prevTransition.hasState(state);
    var isDifferent = true;

    if (hasState && _this3.__options.manual && realUrl != url) {
      var _route = prevTransition.getRoute(state);
      var prev = { params: _route.params, query: _route.query, hash: _route.hash };
      var current = { params: params, query: query, hash: hash };
      isDifferent = !_utils2.default.compare(prev, current);
    }

    transition.path.loaded = isDifferent && _this3.__options.reload !== false;

    Promise.resolve(transition.path.loaded ? state.handler(transition) : transition.path.data).then(function (data) {
      if (transition.__cancelled) {
        return onEnd && onEnd();
      }

      transition.path.data = data;
      state.title && (document.title = typeof state.title == 'function' ? state.title(transition) : state.title);

      if (state.abstract) {
        return next(state.children, onEnd);
      }

      route.setTransition(transition).then(function () {
        next(state.children, onEnd);
      }).catch(function (err) {
        return onEnd && onEnd(err);
      });
    });
  };

  return new Promise(function (resolve, reject) {
    next(_this3.getStatesByLevel(0), function (err) {
      if (err) {
        return reject(err);
      }

      if (!transition.routes.length) {
        if (_this3.__redirects) {
          return reject(new Error('Wrong router default url "' + _this3.defaultUrl + '"'));
        }

        if (_this3.defaultUrl) {
          if (_this3.defaultUrl == _this3.getUrl()) {
            return reject(new Error('Not found any routes'));
          }

          _this3.isolate(function () {
            return _this3.setUrl(_this3.defaultUrl);
          });
          _this3.__redirects++;
          return _this3.changeState().then(resolve).catch(reject);
        }

        if (_akili2.default.options.debug) {
          // eslint-disable-next-line no-console
          console.warn('Not found a default route. You can pass it in "router.init(defaultUrl)" function');
        }
      }

      if (!_this3.__options.saveScrollPosition && (!transition.path || !transition.path.hash)) {
        window.scrollTo(0, 0);
      }

      _this3.__options = {};
      _this3.__redirects = 0;

      if (prevTransition) {
        for (var i = level, l = prevTransition.routes.length; i < l; i++) {
          var route = prevTransition.routes[i];
          route.component && route.component.empty();
        }
      }

      window.dispatchEvent(new CustomEvent('state-changed', { detail: transition }));
      resolve(transition);
    });
  });
};

/**
 * Deinit router
 */
router.deinit = function () {
  window.removeEventListener('popstate', this.__onStateChangeHandler);
  router.setDefaults();
};

router.Transition = Transition;
exports.default = router;

router.setDefaults();

/***/ }),
/* 12 */
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
      var _this2 = this;

      this.attr('recreate', this.setRecreation);
      return this.attr('is', function (val) {
        return _this2.state = !!val, _this2.setState();
      });
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
      var res = void 0;

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

    var _this3 = _possibleConstructorReturn(this, (_ref2 = ElseIf.__proto__ || Object.getPrototypeOf(ElseIf)).call.apply(_ref2, [this].concat(args)));

    _this3.active = true;
    return _this3;
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

    var _this4 = _possibleConstructorReturn(this, (_ref3 = Else.__proto__ || Object.getPrototypeOf(Else)).call.apply(_ref3, [this].concat(args)));

    _this4.el.setAttribute('is', 'true');
    return _this4;
  }

  return Else;
}(ElseIf);

Else.matches = '';


If.ElseIf = ElseIf;
If.Else = Else;

/***/ }),
/* 13 */
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
      var el = _get(Select.prototype.__proto__ || Object.getPrototypeOf(Select.prototype), 'createIteratorElement', this).call(this);

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
/* 14 */
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
    key: 'created',
    value: function created() {
      var _this2 = this;

      if (this.isRadio || this.isCheckbox) {
        this.el.addEventListener('click', function () {
          _this2.setChecked(_this2.el.checked, false);
        });
      }

      return _get(Input.prototype.__proto__ || Object.getPrototypeOf(Input.prototype), 'created', this).apply(this, arguments);
    }
  }, {
    key: 'resolved',
    value: function resolved() {
      (this.isCheckbox || this.isRadio) && this.attr('checked', this.setChecked);
      return _get(Input.prototype.__proto__ || Object.getPrototypeOf(Input.prototype), 'resolved', this).apply(this, arguments);
    }
  }, {
    key: 'setChecked',
    value: function setChecked(value) {
      var trigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      value = !!value;

      if (this.prevChecked === value) {
        return;
      }

      this.el.checked = this.prevChecked = value;
      trigger && this.attrs.onChange.dispatch(Event, { bubbles: true });
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
/* 15 */
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
      this.attr('in', this.setNames, { callOnStart: false });
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
/* 16 */
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
 * Component for elements with contenteditable attribute.
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
/* 18 */
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
/* 19 */
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(3);

var _component2 = _interopRequireDefault(_component);

var _router = __webpack_require__(11);

var _router2 = _interopRequireDefault(_router);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component for links.
 * It works with router too. 
 * 
 * {@link https://akilijs.com/docs/components#docs_links}
 * 
 * @tag a
 * @selector a[state]:not([url]),a[url]:not([state])
 * @attr {string} [url] - url to go on click
 * @attr {string} [state] - state of router to go on click {@link https://akilijs.com/docs/routing}
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
    _this.hash = null;
    _this.options = {};
    _this.isUrl = _this.el.getAttribute('url');
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
      if (typeof hash != 'string' && hash !== undefined) {
        throw new Error('Router state hash must be a string');
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
        this.attrs.href = _router2.default.createStateUrl(this.state, this.params, this.query, this.hash);
      }
    }
  }]);

  return A;
}(_component2.default);

A.matches = '[state]:not([url]),[url]:not([state])';
A.controlAttributes = true;
exports.default = A;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjUzMjhkNWY3ZGY5ZWUyNTAxYTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FraWxpLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91cmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JvdXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaWYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JhZGlvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHRhcmVhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5jbHVkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZW1iZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdHJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc291cmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hLmpzIl0sIm5hbWVzIjpbIkFraWxpIiwiX19kZWZhdWx0cyIsInNldERlZmF1bHRzIiwib3B0aW9ucyIsImRlYnVnIiwiZ2xvYmFscyIsInV0aWxzIiwiX19pbml0IiwiX19jbGVhcmVkIiwiX19jb21wb25lbnRzIiwiX19hbGlhc2VzIiwiX19zY29wZXMiLCJfX3N0b3JlTGlua3MiLCJfX3dpbmRvdyIsIl9faXNvbGF0aW9uIiwiX19ldmFsdWF0aW9uIiwiX193cmFwcGluZyIsIl9fb25FcnJvciIsInRyaWdnZXJJbml0IiwiaHRtbEJvb2xlYW5BdHRyaWJ1dGVzIiwiY29tcG9uZW50cyIsInNlcnZpY2VzIiwiQ29tcG9uZW50IiwiRXZlbnRFbWl0dGVyIiwiU2NvcGUiLCJBIiwiQXVkaW8iLCJDb250ZW50IiwiRm9yIiwiRW1iZWQiLCJJZiIsIkluY2x1ZGUiLCJJbnB1dCIsIklmcmFtZSIsIkltYWdlIiwiT2JqZWN0IiwiUmFkaW8iLCJSb3V0ZSIsIlNlbGVjdCIsIlNvdXJjZSIsIlRleHQiLCJUZXh0YXJlYSIsIlRyYWNrIiwiVXJsIiwiVmlkZW8iLCJyZXF1ZXN0Iiwicm91dGVyIiwic3RvcmUiLCJkZWZpbmUiLCJlcnJvckhhbmRsaW5nIiwiaXNvbGF0ZUV2ZW50cyIsImlzb2xhdGVBcnJheVByb3RvdHlwZSIsImlzb2xhdGVXaW5kb3dGdW5jdGlvbnMiLCJpIiwibCIsImxlbmd0aCIsImRlZmF1bHRzIiwiZm4iLCJwdXNoIiwiY2xlYXJHbG9iYWxzIiwia2V5IiwiRWxlbWVudCIsInByb3RvdHlwZSIsIkFycmF5IiwidW53cmFwIiwid2luZG93Iiwic2V0VGltZW91dCIsInNldEludGVydmFsIiwiUHJvbWlzZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJqb2luQmluZGluZ0tleXMiLCJrZXlzIiwibWFwIiwiZWwiLCJ0b1N0cmluZyIsImpvaW4iLCJhZGRTY29wZSIsInNjb3BlIiwiX19uYW1lIiwiRXJyb3IiLCJnZXRTY29wZSIsIm5hbWUiLCJyZW1vdmVTY29wZSIsImdldEFraWxpUGFyZW50cyIsInRyZWUiLCJhcnIiLCJjaGVjayIsIm5vZGUiLCJwYXJlbnROb2RlIiwiX19ha2lsaSIsInNldFRlbXBsYXRlIiwidGVtcGxhdGUiLCJyZXBsYWNlIiwiaW5uZXJIVE1MIiwiY3JlYXRlU2NvcGVOYW1lIiwiY3JlYXRlUmFuZG9tU3RyaW5nIiwic3RyIiwiaXNvbGF0ZSIsInJlcyIsInByb3BzIiwiayIsImhhc093blByb3BlcnR5IiwicHJvcCIsImlzRGVsZXRlZCIsImNvbXBvbmVudCIsIl9fZXZhbHVhdGVCeUtleXMiLCJ1bmRlZmluZWQiLCJfX3NldCIsImdldFByb3BlcnR5QnlLZXlzIiwiX19zY29wZSIsInVuZXZhbHVhdGUiLCJldmFsdWF0aW9uIiwid3JhcHBpbmciLCJ1bmlzb2xhdGUiLCJpc29sYXRpb24iLCJuZXh0VGljayIsInJlc29sdmUiLCJ0aGVuIiwiaW5pdGlhbGl6ZSIsInJlY29tcGlsZSIsIl9fcmVjb21waWxlIiwiaXNSb290IiwiX19yb290IiwiY29tcG9uZW50TmFtZSIsInRvRGFzaENhc2UiLCJnZXRBdHRyaWJ1dGUiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJfQ29tcG9uZW50IiwiQ0hFQ0tfQUxJQVNFUyIsInNlbGVjdG9ycyIsInNlbGVjdG9yQWxsIiwibWF0Y2hlcyIsInNlbGVjdG9yIiwiX19jYW5jZWxsZWQiLCJmaW5kIiwicCIsIl9fcHJldmVudCIsIl9fY3JlYXRlIiwiY29tcGlsZSIsInJvb3QiLCJlbGVtZW50cyIsIm5lc3RlZEluaXRpYWxpemluZyIsImNoaWxkcmVuIiwiY2hpbGQiLCJfX2NvbXBpbGUiLCJhbGwiLCJyIiwiX19yZXNvbHZlIiwiY29uc29sZSIsIndhcm4iLCJ1bnJlZ2lzdGVyQ29tcG9uZW50IiwiYWxpYXMiLCJ1bnJlZ2lzdGVyQWxpYXMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwib2xkIiwiX19pc1Byb3h5IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJjcmVhdGVDYWxsYmFja0lzb2xhdGlvbiIsImNvbnN0cnVjdG9yIiwiY2F0Y2giLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwiX19ha2lsaUxpc3RlbmVycyIsImFyZ3MiLCJzbGljZSIsImNhbGwiLCJsaW5rIiwibGlzdGVuZXIiLCJzcGxpY2UiLCJwb3MiLCJpc0FycmF5IiwibnVtIiwiaW5kZXgiLCJjYWxsYmFjayIsIndyYXAiLCJvYmoiLCJjdXJyZW50Iiwid3JhcEZ1bmN0aW9uIiwiYyIsImRlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsInJldmVyc2UiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiYWtpbGlXcmFwcGVkRnVuY3Rpb24iLCJlbnVtZXJhYmxlIiwic3RhdHVzIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiaW5pdCIsImRvY3VtZW50IiwiYm9keSIsImRvY3VtZW50RWxlbWVudCIsIkFLSUxJX1NFUlZFUiIsImluaXRTZXJ2ZXJTaWRlSHRtbCIsImh0bWwiLCJpbml0U2VydmVyU2lkZVJlcXVlc3RDYWNoZSIsInJlcXVlc3RDYWNoZSIsIkFLSUxJX0NMSUVOVCIsInByZXBhcmVTZXJ2ZXJTaWRlSHRtbCIsImNoYW5nZVN0YXRlIiwicHJlcGFyZVNlcnZlclNpZGVSZXF1ZXN0Q2FjaGUiLCJlcnIiLCJhdHRyaWJ1dGVzIiwicmVtb3ZlQXR0cmlidXRlIiwicGFyc2VyIiwiRE9NUGFyc2VyIiwiZG9jIiwicGFyc2VGcm9tU3RyaW5nIiwicXVlcnlTZWxlY3RvciIsImF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJpbnN0YW5jZSIsIl9fY2FjaGUiLCJfX2luc3RhbmNlcyIsIm91dGVySFRNTCIsImNhY2hlIiwiX19tYWluIiwiZGVpbml0Iiwic3RvcmVLZXlzIiwiX190YXJnZXQiLCJjbGFzcyIsImNsYXNzZXMiLCJ2YWwiLCJzdHlsZSIsInN0eWxlcyIsInNwbGl0IiwiZGVsIiwiZXhjbHVkZSIsImV4cHMiLCJsYXN0IiwiUmVnRXhwIiwiaW5kZXhPZiIsIm9wZW4iLCJmaWx0ZXIiLCJoYW5kbGVyIiwibWF0Y2giLCJpdGVtIiwiZmlsdGVyZWQiLCJzb3J0Iiwib3JkZXIiLCJhIiwiYiIsIkRhdGUiLCJnZXRUaW1lIiwibmV4dCIsImFWIiwiYlYiLCJpbmNsdWRlS2V5cyIsIm5ld09iaiIsIm9iaktleXMiLCJleGNsdWRlS2V5cyIsImlzU2NvcGVQcm94eSIsImlzUGxhaW5PYmplY3QiLCJjb3B5IiwibmVzdGVkIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJtYWtlQXR0cmlidXRlVmFsdWUiLCJjb21wYXJlIiwiY2xlYXJVbmRlZmluZWQiLCJpZ25vcmVVbmRlZmluZWQiLCJhS2V5cyIsImJLZXlzIiwiY29tcGFyZVByZXZpb3VzVmFsdWUiLCJwcmV2aW91cyIsInByZXZpb3VzQ29weSIsImVuY29kZUh0bWxFbnRpdGllcyIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlY29kZUh0bWxFbnRpdGllcyIsInRvQ2FtZWxDYXNlIiwibSIsInRvVXBwZXJDYXNlIiwiY2FwaXRhbGl6ZSIsIm9iamVjdCIsInJlZHVjZSIsIm8iLCJoYXNQcm9wZXJ0eUJ5S2V5cyIsImhhcyIsInNldFByb3BlcnR5QnlLZXlzIiwiZGVsZXRlUHJvcGVydHlCeUtleXMiLCJnZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQiLCJ0YXJnZXQiLCJwcm90byIsImdldFByb3RvdHlwZU9mIiwiZ2V0T3duUHJvcGVydHlUYXJnZXQiLCJNYXRoIiwicmFuZG9tIiwic3Vic3RyaW5nIiwidXJsQXR0cmlidXRlIiwic2V0VXJsIiwidXJsIiwiYXR0cnMiLCJldmFsdWF0aW9uUmVnZXgiLCJldmFsdWF0aW9uUmVnZXhHbG9iYWwiLCJzb3VyY2UiLCJzeXN0ZW1BdHRyaWJ1dGVzIiwiY29udGV4dCIsImV4cHJlc3Npb24iLCJ2YXJzIiwiRnVuY3Rpb24iLCJfX2lzTW91bnRlZCIsIl9faXNDb21waWxlZCIsIl9faXNSZXNvbHZlZCIsIl9fYmluZGluZ3MiLCJfX2V2YWx1YXRpbmdFdmVudCIsIl9fcmVjb21waWxpbmciLCJfX2NvbXBpbGluZyIsIl9fZGlzYWJsZVByb3h5IiwiX19kaXNhYmxlQXR0clRyaWdnZXJpbmciLCJfX2NoaWxkcmVuIiwiX19wYXJlbnQiLCJfX3BhcmVudHMiLCJfX2F0dHJzIiwiX19hdHRyTGlua3MiLCJfX2F0dHJpYnV0ZU9mIiwiX19ldmFsdWF0aW9uQ29tcG9uZW50IiwiY2hlY2tDaGFuZ2VzIiwic2V0RXZlbnRzIiwic2V0UGFyZW50cyIsInNldEJvb2xlYW5BdHRyaWJ1dGVzIiwiZGVmaW5lQXR0cmlidXRlcyIsIl9fY3JlYXRlQ29tcGlsYXRpb25PcHRpb25zIiwiX19jcmVhdGVSZWNvbXBpbGF0aW9uT3B0aW9ucyIsIl9fc2V0RXZlbnRzIiwiX19zZXRQYXJlbnRzIiwiX19zZXRCb29sZWFuQXR0cmlidXRlcyIsIl9fZGVmaW5lQXR0cmlidXRlcyIsIl9faW5pdGlhbGl6ZSIsImNyZWF0ZWQiLCJjb250cm9sIiwiX19jb250cm9sQXR0cmlidXRlcyIsIl9fZXZhbHVhdGVQYXJlbnQiLCJuZXdQYXJlbnQiLCJfX2ludGVycG9sYXRlQXR0cmlidXRlcyIsImludGVycG9sYXRlIiwicGFyZW50Iiwibm9kZVR5cGUiLCJfX2luaXRpYWxpemVOb2RlIiwiX19ldmFsdWF0ZU5vZGUiLCJjaGlsZE5vZGVzIiwib25Db21waWxlZCIsInRyaWdnZXIiLCJidWJibGVzIiwiY29tcGlsZWQiLCJ0ZW1wbGF0ZVVybCIsImdldCIsInRlbXBsYXRlQ2FjaGUiLCJfX2NvbnRlbnQiLCJkYXRhIiwib25SZWNvbXBpbGVkIiwicmVjb21waWxlZCIsIm9uUmVzb2x2ZWQiLCJyZXNvbHZlZCIsIl9zY29wZSIsImFzc2lnbiIsImNvbnRyb2xBdHRyaWJ1dGVzIiwiZXZlbnRzIiwiX19ldmVudHMiLCJfX3NhdmVBdHRyaWJ1dGVQcm94eUluIiwic2F2ZUF0dHJpYnV0ZVByb3h5SW4iLCJfX3NhdmVBdHRyaWJ1dGVQcm94eU91dCIsInNhdmVBdHRyaWJ1dGVQcm94eU91dCIsIl9fbmVzdGVkT2JzZXJ2ZSIsImJvb2xlYW5BdHRyaWJ1dGVzIiwiY29uY2F0Iiwic2V0QXR0ciIsIm5vZGVOYW1lIiwiaGFzQXR0cmlidXRlIiwiZXYiLCJ0ZXN0IiwicGFyZW50cyIsImV2YWx1YXRlUGFyZW50IiwidHJhbnNwYXJlbnQiLCJfX2RldGFjaCIsIl9fYWRkQ2hpbGQiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvcGVydGllcyIsIl9fZ2V0Tm9kZVByb3BlcnR5IiwiY291bnRlciIsImF0dHJpYnV0ZVZhbHVlIiwiX19jb21wb25lbnQiLCJjb20iLCJfX2V4cHJlc3Npb24iLCJBdHRyIiwiZCIsImV2YWx1YXRlIiwiZXhpc3RpbmdCaW5kaW5ncyIsInBhcmVudEJpbmRpbmdzIiwicGFyc2VWYWx1ZSIsIl9fZ2V0UGFyc2VkRXhwcmVzc2lvbiIsImxpc3QiLCJwYXJzZSIsImF0dHJOYW1lIiwiZWxlbWVudE5hbWUiLCJfX2VsZW1lbnQiLCJhdHRyaWJ1dGVOYW1lIiwibWVzc2FnZXMiLCJtZXNzYWdlIiwiaGFzaCIsIl9fY3JlYXRlS2V5c0hhc2giLCJwYXJlbnRzSGFzaCIsIm5vdEJpbmRpbmciLCJwYXJlbnRWYWx1ZSIsImV2YWxDb21wb25lbnQiLCJyZWFsQ29tcG9uZW50IiwiX19iaW5kQW5kU2V0UHJvcGVydHkiLCJldmFsdWF0ZWQiLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsImJpbmQiLCJfX2dldEJvdW5kTm9kZSIsIl9fYmluZCIsIl9fc2V0Tm9kZVByb3BlcnR5Iiwid2l0aG91dFBhcmVudHMiLCJsYXN0UHJvcHMiLCJwcm9wc0xlbmd0aCIsImVsRXZhbHVhdGUiLCJlbGVtZW50IiwiX19nZXRCaW5kIiwiX19kYXRhIiwiX19nZXRBbGxCaW5kcyIsIl9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2UiLCJfX2Rpc2FibGVLZXlzIiwiY2hlY2tQcm9wIiwiX2siLCJfcHJvcCIsIl9fZW5hYmxlS2V5cyIsInVuYmluZCIsIl9faXNTeXN0ZW1CaW5kaW5nS2V5IiwiX2tleXMiLCJfX2tleXMiLCJfaXNEZWxldGVkIiwiaGFzS2V5Iiwic2hpZnQiLCJfX2V2YWx1YXRlTmVzdGVkIiwiX191bmJpbmQiLCJleGVjIiwiZXZlbnQiLCJfX2NoZWNrRXZhbHVhdGlvbiIsIl9fZXZhbHVhdGUiLCJpc0Jvb2xlYW5BdHRyaWJ1dGUiLCJjbGVhckF0dHJpYnV0ZSIsImNhbWVsQXR0cmlidXRlIiwiX19hdHRyaWJ1dGVPbiIsIl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciIsIl9fYXR0clRyaWdnZXJCeU5hbWUiLCJhdHRyaWJ1dGVPZiIsImV2ZW50TmFtZSIsIl9fZXZlbnQiLCJlbWl0dGVyIiwiX19ldmFsdWF0ZUV2ZW50IiwiY3VycmVudFZhbHVlIiwiY2hlY2tCaW5kaW5nIiwiX19pbml0aWFsaXplZCIsInRyaW0iLCJoYXNCaW5kaW5nIiwiX19oYXNCaW5kaW5ncyIsIl9fdW5iaW5kQnlOb2RlcyIsIl9faW5pdGlhbGl6ZUF0dHJpYnV0ZSIsImNoYW5nZUF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZU5vZGUiLCJfX2RlaW5pdGlhbGl6ZU5vZGUiLCJQcm94eSIsInNldCIsImF0dHJLZXkiLCJkZWxldGVQcm9wZXJ0eSIsIl9faXNTeXN0ZW1LZXkiLCJleGNBcnIiLCJyZWFsVGFyZ2V0IiwiZm9yUGFyZW50cyIsImZvckRhdGEiLCJwb3AiLCJfX2JpbmROb2RlIiwiX19jaGVja0Rpc2FibGVtZW50Iiwia2V5U3RyaW5nIiwiQ0hFQ0tfRVhJU1RFTkNFIiwidGFyZ2V0UGFyZW50VmFsdWUiLCJfX2NyZWF0ZUlzb2xhdGlvbk9iamVjdCIsIl9fc3RvcmVUcmlnZ2VyQnlLZXlzIiwiX19hdHRyVHJpZ2dlckJ5S2V5cyIsIl9fYWxsIiwibGlua3MiLCJfX3N0b3JlVHJpZ2dlckJ5TmFtZSIsImluZm8iLCJkYXRlIiwibm93IiwiY2FsbE9uU3RhcnQiLCJhdHRyc0tleXMiLCJzdGFydEtleXMiLCJvYnNlcnZlIiwiQ0hFQ0tfUFJPWFkiLCJfX2Rpc2FibGVQcm94eVJlZGVmaW5pbmciLCJfX29ic2VydmUiLCJpc29sYXRpb25LZXkiLCJ1cGRhdGVkQXQiLCJwYXJlbnRLZXlzU3RyaW5nIiwia2V5c1N0cmluZyIsImNvbGxlY3QiLCJfX2RlbGV0ZU5vZGVQcm9wZXJ0eSIsIm5vZGVzIiwiX19jbGVhckVtcHR5QmluZGluZ3MiLCJjbGVhciIsIl9fcmVtb3ZlIiwiX19jbGVhclN0b3JlTGlua3MiLCJvblJlbW92ZWQiLCJyZW1vdmVkIiwiX19zcGxpY2VDaGlsZCIsIl9fcmVtb3ZlQ2hpbGRyZW4iLCJmaW5kQWxsIiwibGV2ZWxzIiwibGV2ZWwiLCJyaWdodCIsImxldmVsRWxlbWVudHMiLCJ1bnNoaWZ0IiwiX19zdG9yZUJ5RnVuY3Rpb24iLCJfX3N0b3JlQnlLZXlzIiwiX19hdHRyQnlGdW5jdGlvbiIsIl9fYXR0ckJ5S2V5cyIsIl9fdW5zdG9yZUJ5RnVuY3Rpb24iLCJfX3Vuc3RvcmVCeUtleXMiLCJfX3VuYXR0ckJ5RnVuY3Rpb24iLCJfX3VuYXR0ckJ5S2V5cyIsIl9fZ2V0UGFyZW50IiwiX19nZXRDaGlsZHJlbiIsIl9fZ2V0TmVhciIsImFwcGVuZENoaWxkIiwiX19lbXB0eSIsIl9fZGVzdHJveSIsIlJlcXVlc3QiLCJiYXNlVXJsIiwiZ2V0SGVhZGVycyIsInhociIsImhlYWRlcnMiLCJnZXRBbGxSZXNwb25zZUhlYWRlcnMiLCJsaW5lIiwic3RhdHVzRXJyb3JzUGF0dGVybiIsInJlamVjdCIsIm1ldGhvZCIsIlhNTEh0dHBSZXF1ZXN0IiwiYmVmb3JlIiwidHJhbnNmb3JtQmVmb3JlIiwib25TdGFydCIsImpzb24iLCJyZXNwb25zZVR5cGUiLCJmb3JtIiwiY3JlYXRlRm9ybURhdGEiLCJwYXJhbXMiLCJwYXJhbXNUb1F1ZXJ5IiwiY3JlYXRlQ2FjaGVIYXNoIiwidXNlciIsInBhc3N3b3JkIiwiX2NhY2hlIiwiZ2V0Q2FjaGUiLCJjcmVhdGVkQXQiLCJ0cmFuc2Zvcm1BZnRlciIsInJlc3VsdCIsInRpbWVvdXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJoZWFkZXJLZXlzIiwic2V0UmVxdWVzdEhlYWRlciIsIm9uUHJvZ3Jlc3MiLCJvbnByb2dyZXNzIiwib25sb2FkIiwicmVzcG9uc2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzVGV4dCIsInJlc3BvbnNlVGV4dCIsInJlc3BvbnNlWE1MIiwicmVzcG9uc2VVUkwiLCJjcmVhdGVDYWNoZSIsIm9udGltZW91dCIsIm9uZXJyb3IiLCJzZW5kIiwiY2hhciIsImNoYXJDb2RlQXQiLCJzZXAiLCJlcSIsImtzIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidiIsIm9wdCIsInF1ZXJ5IiwiYW1wcyIsImVxcyIsImRlY29kZVVSSUNvbXBvbmVudCIsIm5hbWVzcGFjZSIsImZkIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ0b0lTT1N0cmluZyIsImFkZEluc3RhbmNlIiwicmVtb3ZlSW5zdGFuY2UiLCJ2YWx1ZUtleSIsImRlYm91bmNlSW50ZXJ2YWwiLCJkZWJvdW5jZVRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJvbkRlYm91bmNlIiwic2V0Rm9jdXMiLCJzZXRWYWx1ZSIsInNldERlYm91bmNlIiwiaW50ZXJ2YWwiLCJzZXRFbGVtZW50Rm9jdXMiLCJzZXRFbGVtZW50Qmx1ciIsImZvY3VzIiwiYmx1ciIsIkxvb3AiLCJpdGVyYXRvcnMiLCJpdGVyYXRvclJlZiIsIml0ZXJhdG9yT3V0ZXJIVE1MIiwicmVzZXQiLCJjcmVhdGVJdGVyYXRvciIsImRyYXciLCJtYXNrIiwibmV4dFNpYmxpbmciLCJjb250ZW50IiwiZmlyc3RDaGlsZCIsIl9faW5kZXgiLCJfX2tleSIsIl9fdmFsdWUiLCJfX2NvbXBhcmlzb25WYWx1ZSIsIml0ZXJhdG9yIiwiY0NvcHkiLCJjb21wYXJzaW9uIiwic2V0SW5kZXgiLCJzZXRLZXkiLCJfX3Byb21pc2VzIiwiY3JlYXRlSXRlcmF0b3JFbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwibG9vcCIsIml0ZXJhdGUiLCJvbk91dCIsIl9faXRlcmF0b3IiLCJmb3IiLCJpc0ZvciIsImNhbmNlbCIsIl9fZWwiLCJzdHJpY3QiLCJlbENvbXBvbmVudCIsImZvcmNlIiwiaW5FdmFsdWF0aW5nIiwicHJlcGFyZU9wdGlvbnMiLCJfRXZlbnQiLCJ0eXBlIiwidHJhbnNpdGlvbiIsInN0YXRlIiwicGF0aCIsImdldFBhcmVudFNjb3BlVHJhbnNpdGlvbiIsIl9fdHJhbnNpdGlvbiIsImVtcHR5IiwiZXhpc3RzIiwibG9hZGVkIiwiVHJhbnNpdGlvbiIsInJvdXRlcyIsInN0YXRlcyIsInJlZGlyZWN0Iiwicm91dGUiLCJoYXNoTW9kZSIsIl9fcmVkaXJlY3RzIiwiX19vcHRpb25zIiwiX19wYXJhbVJlZ2V4IiwiX19yb3V0ZVNlbGVjdG9yIiwiYWRkIiwicGF0dGVybiIsImRlZmF1bHRPcHRpb25zIiwiYWJzdHJhY3QiLCJzZXRTdGF0ZSIsImdldFN0YXRlIiwiY3JlYXRlU3RhdGVVcmwiLCJtYW51YWwiLCJiYWNrIiwiaGlzdG9yeSIsImdvIiwiZm9yd2FyZCIsImxvY2F0aW9uIiwicmVsb2FkIiwiZXJyb3IiLCJwdXNoU3RhdGUiLCJkZWZhdWx0VXJsIiwib2xkUHVzaFN0YXRlIiwiX19vblN0YXRlQ2hhbmdlSGFuZGxlciIsImluaXRTdGF0ZSIsInBhcmVudE5hbWUiLCJmdWxsUGF0dGVybiIsInNwbGl0U2xhc2hlcyIsInJlbW92ZVN0YXRlIiwic2V0SGFzaFVybCIsInNldEhpc3RvcnlVcmwiLCJnZXRVcmwiLCJnZXRIYXNoVXJsIiwiZ2V0SGlzdG9yeVVybCIsInBhdGhuYW1lIiwic2VhcmNoIiwiZ2V0VXJsUXVlcnkiLCJnZXRIYXNoVXJsUXVlcnkiLCJnZXRIaXN0b3J5VXJsUXVlcnkiLCJwYXJhbXNGcm9tUXVlcnkiLCJwcmVwYXJlIiwicHJlcGFyZVN0YXRlUGFyYW1zIiwicHJlcGFyZVN0YXRlUXVlcnkiLCJwcmVwYXJlU3RhdGVIYXNoIiwiZiIsImFsbFBhcmFtcyIsImxhc3RTdGF0ZSIsImRlZmF1bHRQYXJhbXMiLCJwYXJhbUtleXMiLCJhbGxRdWVyeSIsImRlZmF1bHRRdWVyeSIsInF1ZXJ5S2V5cyIsImN1cnJlbnRIYXNoIiwiZ2V0UGF0dGVybkNvbnRlbnQiLCJ1cmxQYXR0ZXJuIiwicmVnZXgiLCJpc0luY2x1ZGVkIiwiaXNBY3RpdmVTdGF0ZSIsImluY2x1ZGVzIiwiaW5BY3RpdmVTdGF0ZSIsImdldFJvdXRlIiwiZ2V0QXJyYXlQYXR0ZXJuQ29udGVudCIsImdldFN0YXRlc0J5TGV2ZWwiLCJfX2lzb2xhdGVkIiwicHJldlRyYW5zaXRpb24iLCJjb21wb25lbnRMZXZlbCIsIm9uRW5kIiwic2V0UGF0aCIsImN1cnJlbnRVcmwiLCJyZWFsVXJsIiwiaGFzU3RhdGUiLCJpc0RpZmZlcmVudCIsInByZXYiLCJ0aXRsZSIsInNldFRyYW5zaXRpb24iLCJzYXZlU2Nyb2xsUG9zaXRpb24iLCJzY3JvbGxUbyIsIkVsc2VJZiIsIkVsc2UiLCJhY3RpdmUiLCJyZWNyZWF0ZSIsImlzQ29tcGlsZWQiLCJkaXNwbGF5IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInNldFJlY3JlYXRpb24iLCJjb21waWxhdGlvbiIsIm5leHRFbGVtZW50U2libGluZyIsInNldEFjdGl2aXR5Iiwic2V0UHJvcGVydHkiLCJPcHRpb24iLCJpdGVyYXRvclRhZ05hbWUiLCJpc011bHRpcGxlIiwiZ2V0Q29udGVudCIsInNldE11bHRpcGxlIiwic2V0Q29udGVudCIsImRyYXdTZWxlY3QiLCJjaGFuZ2VWYWx1ZSIsImZvcm1hdFZhbHVlIiwic2VsZWN0ZWQiLCJvcHRpb24iLCJzZWxlY3Rpb24iLCJyZWRlZmluZSIsIm9uQ2hhbmdlIiwiZGlzcGF0Y2giLCJFdmVudCIsInNldFNlbGVjdGVkIiwiaXNDaGVja2JveCIsImlzUmFkaW8iLCJzZXRDaGVja2VkIiwiY2hlY2tlZCIsInByZXZDaGVja2VkIiwiY2hhbmdlUmFkaW8iLCJyYWRpbyIsIlJhZGlvQnV0dG9uIiwiaXRlcmFibGUiLCJnZXRSYWRpb1ZhbHVlIiwicHJldlZhbHVlIiwib25SYWRpbyIsInNldE5hbWVzIiwiaXNUcnVlIiwiaXNTZWxlY3RlZCIsInJhbmdlIiwiY3JlYXRlUmFuZ2UiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiY29ubmVjdGlvbiIsInNldENhY2hlIiwiYWJvcnQiLCJvbkxvYWQiLCJvbkVycm9yIiwiT2JqZWN0cyIsImlzVXJsIiwicHJldmVudERlZmF1bHQiLCJvblN0YXRlQ2hhbmdlZCIsInNldFBhcmFtcyIsInNldFF1ZXJ5Iiwic2V0SGFzaCIsInNldE9wdGlvbnMiLCJyZXNldEhyZWYiLCJocmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OzhRQzdEQTs7Ozs7Ozs7O0FBU0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztB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QUFmO0FBQ0Q7Ozs2QkFFUThFLEksRUFBTTtBQUNiLFVBQUkwakIsUUFBUSxpQkFBT3NCLFFBQVAsQ0FBZ0JobEIsSUFBaEIsQ0FBWjs7QUFFQSxVQUFJLENBQUMwakIsS0FBTCxFQUFZO0FBQ1YsY0FBTSxJQUFJNWpCLEtBQUosd0NBQStDRSxJQUEvQyxPQUFOO0FBQ0Q7O0FBRUQsYUFBTzBqQixLQUFQO0FBQ0Q7OztnQ0FFVztBQUNWLFVBQUksS0FBS25XLEdBQVQsRUFBYztBQUNaLGFBQUtDLEtBQUwsQ0FBVzRmLElBQVgsR0FBa0IsS0FBSzdmLEdBQXZCO0FBQ0QsT0FGRCxNQUdLO0FBQ0gsYUFBS0MsS0FBTCxDQUFXNGYsSUFBWCxHQUFrQixpQkFBT25JLGNBQVAsQ0FBc0IsS0FBS3ZCLEtBQTNCLEVBQWtDLEtBQUtsRyxNQUF2QyxFQUErQyxLQUFLbUMsS0FBcEQsRUFBMkQsS0FBS3hMLElBQWhFLENBQWxCO0FBQ0Q7QUFDRjs7Ozs7O0FBbkhrQjNYLEMsQ0FDWjJHLE8sR0FBVSx1QztBQURFM0csQyxDQUVaZ1YsaUIsR0FBb0IsSTtrQkFGUmhWLEMiLCJmaWxlIjoiYWtpbGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmNTMyOGQ1ZjdkZjllZTI1MDFhNCIsIi8qKlxuICogSmF2YXNjcmlwdCBmcmFtZXdvcmtcbiAqXG4gKiBjb25zdCBBa2lsaSA9IG1ha2VJdEVhc3koanMgKyBodG1sKTtcbiAqXG4gKiBAYXV0aG9yIEFsZXhhbmRyIEJhbGFzeWFuIDxteXdlYnN0cmVldEBnbWFpbC5jb20+XG4gKiBAbGluayBodHRwOi8vYWtpbGlqcy5jb21cbiAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50LmpzJztcbmltcG9ydCBJZiBmcm9tICcuL2NvbXBvbmVudHMvaWYuanMnO1xuaW1wb3J0IEZvciBmcm9tICcuL2NvbXBvbmVudHMvZm9yLmpzJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdC5qcyc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9jb21wb25lbnRzL2lucHV0LmpzJztcbmltcG9ydCBSYWRpbyBmcm9tICcuL2NvbXBvbmVudHMvcmFkaW8uanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9jb21wb25lbnRzL3RleHQuanMnO1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJy4vY29tcG9uZW50cy90ZXh0YXJlYS5qcyc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuL2NvbXBvbmVudHMvY29udGVudC5qcyc7XG5pbXBvcnQgSW5jbHVkZSBmcm9tICcuL2NvbXBvbmVudHMvaW5jbHVkZS5qcyc7XG5pbXBvcnQgSWZyYW1lIGZyb20gJy4vY29tcG9uZW50cy9pZnJhbWUuanMnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vY29tcG9uZW50cy9pbWFnZS5qcyc7XG5pbXBvcnQgRW1iZWQgZnJvbSAnLi9jb21wb25lbnRzL2VtYmVkLmpzJztcbmltcG9ydCBBdWRpbyBmcm9tICcuL2NvbXBvbmVudHMvYXVkaW8uanMnO1xuaW1wb3J0IFZpZGVvIGZyb20gJy4vY29tcG9uZW50cy92aWRlby5qcyc7XG5pbXBvcnQgVHJhY2sgZnJvbSAnLi9jb21wb25lbnRzL3RyYWNrLmpzJztcbmltcG9ydCBTb3VyY2UgZnJvbSAnLi9jb21wb25lbnRzL3NvdXJjZS5qcyc7XG5pbXBvcnQgT2JqZWN0cyBmcm9tICcuL2NvbXBvbmVudHMvb2JqZWN0LmpzJztcbmltcG9ydCBSb3V0ZSBmcm9tICcuL2NvbXBvbmVudHMvcm91dGUuanMnO1xuaW1wb3J0IFVybCBmcm9tICcuL2NvbXBvbmVudHMvdXJsLmpzJztcbmltcG9ydCBBIGZyb20gJy4vY29tcG9uZW50cy9hLmpzJztcbmltcG9ydCBTY29wZSBmcm9tICcuL3Njb3BlLmpzJztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4vc2VydmljZXMvcm91dGVyLmpzJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3NlcnZpY2VzL3N0b3JlLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcblxuLyoqXG4gKiBUaGUgZnJhbWV3b3JrIG9iamVjdFxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2dldHRpbmctc3RhcnRlZH1cbiAqL1xuY29uc3QgQWtpbGkgPSB7fTtcblxuQWtpbGkuX19kZWZhdWx0cyA9IFtdO1xuXG4vKipcbiAqIFNldCB0aGUgZnJhbWV3b3JrJ3MgZGVmYXVsdCB2YXJpYWJsZXNcbiAqL1xuQWtpbGkuc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMub3B0aW9ucyA9IHtcbiAgICBkZWJ1ZzogdHJ1ZSxcbiAgICBnbG9iYWxzOiB7IHV0aWxzIH1cbiAgfTtcbiAgXG4gIHRoaXMuX19pbml0ID0gbnVsbDtcbiAgdGhpcy5fX2NsZWFyZWQgPSBmYWxzZTtcbiAgdGhpcy5fX2NvbXBvbmVudHMgPSB7fTtcbiAgdGhpcy5fX2FsaWFzZXMgPSB7fTtcbiAgdGhpcy5fX3Njb3BlcyA9IHt9O1xuICB0aGlzLl9fc3RvcmVMaW5rcyA9IHt9O1xuICB0aGlzLl9fd2luZG93ID0ge307XG4gIHRoaXMuX19pc29sYXRpb24gPSBudWxsO1xuICB0aGlzLl9fZXZhbHVhdGlvbiA9IG51bGw7XG4gIHRoaXMuX193cmFwcGluZyA9IGZhbHNlO1xuICB0aGlzLl9fb25FcnJvciA9ICgpID0+IHRoaXMudHJpZ2dlckluaXQoZmFsc2UpO1xuICBcbiAgdGhpcy5odG1sQm9vbGVhbkF0dHJpYnV0ZXMgPSBbXG4gICAgJ2Rpc2FibGVkJywgJ2NvbnRlbnRlZGl0YWJsZScsICdoaWRkZW4nXG4gIF07XG5cbiAgdGhpcy5jb21wb25lbnRzID0ge307XG4gIHRoaXMuc2VydmljZXMgPSB7fTtcblxuICB0aGlzLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbiAgdGhpcy5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG4gIHRoaXMuU2NvcGUgPSBTY29wZTtcbiAgdGhpcy51dGlscyA9IHV0aWxzO1xuICB0aGlzLmNvbXBvbmVudHMuQSA9IEE7XG4gIHRoaXMuY29tcG9uZW50cy5BdWRpbyA9IEF1ZGlvO1xuICB0aGlzLmNvbXBvbmVudHMuQ29udGVudCA9IENvbnRlbnQ7XG4gIHRoaXMuY29tcG9uZW50cy5Gb3IgPSBGb3I7XG4gIHRoaXMuY29tcG9uZW50cy5FbWJlZCA9IEVtYmVkO1xuICB0aGlzLmNvbXBvbmVudHMuSWYgPSBJZjtcbiAgdGhpcy5jb21wb25lbnRzLkluY2x1ZGUgPSBJbmNsdWRlO1xuICB0aGlzLmNvbXBvbmVudHMuSW5wdXQgPSBJbnB1dDtcbiAgdGhpcy5jb21wb25lbnRzLklmcmFtZSA9IElmcmFtZTtcbiAgdGhpcy5jb21wb25lbnRzLkltYWdlID0gSW1hZ2U7XG4gIHRoaXMuY29tcG9uZW50cy5PYmplY3QgPSBPYmplY3RzO1xuICB0aGlzLmNvbXBvbmVudHMuUmFkaW8gPSBSYWRpbztcbiAgdGhpcy5jb21wb25lbnRzLlJvdXRlID0gUm91dGU7XG4gIHRoaXMuY29tcG9uZW50cy5TZWxlY3QgPSBTZWxlY3Q7XG4gIHRoaXMuY29tcG9uZW50cy5Tb3VyY2UgPSBTb3VyY2U7XG4gIHRoaXMuY29tcG9uZW50cy5UZXh0ID0gVGV4dDtcbiAgdGhpcy5jb21wb25lbnRzLlRleHRhcmVhID0gVGV4dGFyZWE7XG4gIHRoaXMuY29tcG9uZW50cy5UcmFjayA9IFRyYWNrO1xuICB0aGlzLmNvbXBvbmVudHMuVXJsID0gVXJsO1xuICB0aGlzLmNvbXBvbmVudHMuVmlkZW8gPSBWaWRlbztcbiAgdGhpcy5zZXJ2aWNlcy5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgdGhpcy5zZXJ2aWNlcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIHRoaXMuc2VydmljZXMuc3RvcmUgPSBzdG9yZTtcblxuICB0aGlzLmRlZmluZSgpO1xuICB0aGlzLmVycm9ySGFuZGxpbmcoKTtcbiAgdGhpcy5pc29sYXRlRXZlbnRzKCk7XG4gIHRoaXMuaXNvbGF0ZUFycmF5UHJvdG90eXBlKCk7XG4gIHRoaXMuaXNvbGF0ZVdpbmRvd0Z1bmN0aW9ucygpOyBcbiAgXG4gIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLl9fZGVmYXVsdHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdGhpcy5fX2RlZmF1bHRzW2ldKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEZWZpbmUgYWxsIGRlZmF1bHQgY29tcG9uZW50c1xuICovXG5Ba2lsaS5kZWZpbmUgPSBmdW5jdGlvbiAoKSB7XG4gIEEuZGVmaW5lKCk7XG4gIEF1ZGlvLmRlZmluZSgpO1xuICBDb250ZW50LmRlZmluZSgpO1xuICBDb21wb25lbnQuZGVmaW5lKCk7XG4gIEVtYmVkLmRlZmluZSgpO1xuICBGb3IuZGVmaW5lKCk7XG4gIEluY2x1ZGUuZGVmaW5lKCk7XG4gIElmcmFtZS5kZWZpbmUoKTtcbiAgSW1hZ2UuZGVmaW5lKCk7XG4gIElucHV0LmRlZmluZSgpO1xuICBJZi5kZWZpbmUoKTtcbiAgT2JqZWN0cy5kZWZpbmUoKTtcbiAgUmFkaW8uZGVmaW5lKCk7XG4gIFJvdXRlLmRlZmluZSgpO1xuICBTZWxlY3QuZGVmaW5lKCk7XG4gIFNvdXJjZS5kZWZpbmUoKTtcbiAgVGV4dGFyZWEuZGVmaW5lKCk7XG4gIFRyYWNrLmRlZmluZSgpO1xuICBWaWRlby5kZWZpbmUoKTtcbn07XG5cbi8qKlxuICogU2V0IGRlZmF1bHRzXG4gKiBcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIFxuICovXG5Ba2lsaS5kZWZhdWx0cyA9IGZ1bmN0aW9uKGZuKSB7ICBcbiAgdGhpcy5fX2RlZmF1bHRzLnB1c2goZm4pO1xuICBmbigpO1xufVxuXG4vKipcbiAqIENsZWFyIHRoZSBnbG9iYWwgY29udGV4dFxuICovXG5Ba2lsaS5jbGVhckdsb2JhbHMgPSBmdW5jdGlvbiAoKSB7XG4gIGlmKHRoaXMuX19jbGVhcmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZm9yIChsZXQga2V5IGluIHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUpIHtcbiAgICBFbGVtZW50LnByb3RvdHlwZVtrZXldID0gdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZVtrZXldO1xuICB9XG5cbiAgZm9yIChsZXQga2V5IGluIHRoaXMuX193aW5kb3cuQXJyYXkucHJvdG90eXBlKSB7XG4gICAgQXJyYXkucHJvdG90eXBlW2tleV0gPSB0aGlzLl9fd2luZG93LkFycmF5LnByb3RvdHlwZVtrZXldO1xuICB9XG5cbiAgZm9yKGxldCBrZXkgaW4gdGhpcy5vcHRpb25zLmdsb2JhbHMpIHtcbiAgICB0aGlzLm9wdGlvbnMuZ2xvYmFsc1trZXldID0gdGhpcy51bndyYXAodGhpcy5vcHRpb25zLmdsb2JhbHNba2V5XSk7XG4gIH1cblxuICB3aW5kb3cuc2V0VGltZW91dCA9IHRoaXMuX193aW5kb3cuc2V0VGltZW91dDtcbiAgd2luZG93LnNldEludGVydmFsID0gdGhpcy5fX3dpbmRvdy5zZXRJbnRlcnZhbDtcbiAgd2luZG93LlByb21pc2UgPSB0aGlzLl9fd2luZG93LlByb21pc2U7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIHRoaXMuX19vbkVycm9yKTtcbiAgdGhpcy5fX2NsZWFyZWQgPSB0cnVlO1xufTtcblxuLyoqXG4gKiBKb2luIGJpbmRpbmcga2V5c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgYmluZGluZyBrZXlzXG4gKi9cbkFraWxpLmpvaW5CaW5kaW5nS2V5cyA9IGZ1bmN0aW9uIChrZXlzKSB7XG4gIHJldHVybiBrZXlzLm1hcChlbCA9PiBlbC50b1N0cmluZygpKS5qb2luKCcuJyk7XG59O1xuXG4vKipcbiAqIEFkZCBzY29wZSB0byB0aGUgc2NvcGVzIGxpc3RcbiAqXG4gKiBAcGFyYW0gc2NvcGVcbiAqL1xuQWtpbGkuYWRkU2NvcGUgPSBmdW5jdGlvbiAoc2NvcGUpIHtcbiAgaWYgKHRoaXMuX19zY29wZXNbc2NvcGUuX19uYW1lXSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgU2NvcGUgbmFtZSAke3Njb3BlLl9fbmFtZX0gYWxyZWFkeSBleGlzdHNgKTtcbiAgfVxuXG4gIHRoaXMuX19zY29wZXNbc2NvcGUuX19uYW1lXSA9IHNjb3BlO1xufTtcblxuLyoqXG4gKiBHZXQgc2NvcGUgZnJvbSB0aGUgc2NvcGVzIGxpc3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHNjb3BlIG5hbWVcbiAqIEByZXR1cm5zIHtTY29wZX1cbiAqL1xuQWtpbGkuZ2V0U2NvcGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gdGhpcy5fX3Njb3Blc1tuYW1lXTtcbn07XG5cbi8qKlxuICogRGVsZXRlIHNjb3BlIGZyb20gdGhlIHNjb3BlcyBsaXN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzY29wZSBuYW1lXG4gKi9cbkFraWxpLnJlbW92ZVNjb3BlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdGhpcy5fX3Njb3Blc1tuYW1lXSA9IG51bGw7XG4gIGRlbGV0ZSB0aGlzLl9fc2NvcGVzW25hbWVdO1xufTtcblxuLyoqXG4gKiBHZXQgYWxsIGVsZW1lbnRzIHdpdGggYXR0YWNoZWQgQWtpbGkgY29tcG9uZW50c1xuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3RyZWU9dHJ1ZV0gLSByZXR1cm4gYXJyYXkgb2YgdGhlIHBhcmVudHMgaWYgdHJ1ZSwgY2xvc2VzdCBwYXJlbnQgaWYgZmFsc2VcbiAqIEByZXR1cm5zIHtBcnJheXxFbGVtZW50fG51bGx9XG4gKi9cbkFraWxpLmdldEFraWxpUGFyZW50cyA9IGZ1bmN0aW9uIChlbCwgdHJlZSA9IHRydWUpIHtcbiAgbGV0IGFyciA9IFtdO1xuXG4gIGZ1bmN0aW9uIGNoZWNrKG5vZGUpIHtcbiAgICBpZiAoIW5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChub2RlLnBhcmVudE5vZGUuX19ha2lsaSkge1xuICAgICAgYXJyLnB1c2gobm9kZS5wYXJlbnROb2RlKTtcblxuICAgICAgaWYgKCF0cmVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVjayhub2RlLnBhcmVudE5vZGUpO1xuICB9XG5cbiAgY2hlY2soZWwpO1xuICByZXR1cm4gdHJlZT8gYXJyOiBhcnJbMF07XG59O1xuXG4vKipcbiAqIFNldCBlbGVtZW50IGlubmVyIGh0bWwgd2l0aCBjb250ZW50IHJlcGxhY2VtZW50XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCI8aT5IZWxsbzwvaT48Yj5Xb3JsZDwvYj5cIlxuICogZWwuaW5uZXJIVE1MID0gXCI8Yj5Xb3JsZDwvYj5cIjtcbiAqIEFraWxpLnNldFRlbXBsYXRlKGVsLCBcIjxpPkhlbGxvPC9pPiR7dGhpcy5fX2NoaWxkcmVufVwiKTtcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbkFraWxpLnNldFRlbXBsYXRlID0gZnVuY3Rpb24gKGVsLCB0ZW1wbGF0ZSkge1xuICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoL1xcJHsoKCg/IVxcJHspXFxzKnRoaXNcXC5fX2NvbnRlbnRcXHMqKSopfS8sIGVsLmlubmVySFRNTCk7XG4gIGVsLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuXG4gIHJldHVybiBlbC5pbm5lckhUTUw7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIHVuaXF1ZSBzY29wZSBuYW1lXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuQWtpbGkuY3JlYXRlU2NvcGVOYW1lID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdXRpbHMuY3JlYXRlUmFuZG9tU3RyaW5nKDE2LCAoc3RyKSA9PiB7XG4gICAgcmV0dXJuICEhdGhpcy5fX3Njb3Blc1tzdHJdO1xuICB9KTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSBmdW5jdGlvbi5cbiAqIEV2ZXJ5IHNjb3BlIHZhcmlhYmxlIGNoYW5nZSBjYWxscyBhY2NvcmRpbmcgbm9kZSBldmFsdWF0aW9uLlxuICogRm9yIGV4YW1wbGUsIGlmIHlvdSBjaGFuZ2Ugc29tZSBzY29wZSB2YXJpYWJsZSBpbiB0aGUgbG9vcCAtIGV2YWx1YXRpb24gd2lsbCBiZSBjYWxsZWQgb24gdGhlIGVhY2ggY2hhbmdlLlxuICogSXQgbWF5IGJlIHNsb3cgZm9yIHRoZSBhcHBsaWNhdGlvbi5cbiAqIFlvdSBjYW4gaXNvbGF0ZSB0aGlzIGFjdGlvbiBhbmQgcnVuIGFsbCBldmFsdWF0aW9uIHByb2Nlc3MgYWZ0ZXIgcGFzc2VkIGZ1bmN0aW9uIGF0IG9uY2UuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS5pc29sYXRlID0gZnVuY3Rpb24gKGZuKSB7IFxuICBpZiAodGhpcy5fX2lzb2xhdGlvbikge1xuICAgIHJldHVybiBmbigpO1xuICB9XG5cbiAgdGhpcy5fX2lzb2xhdGlvbiA9IHt9O1xuICBsZXQgcmVzID0gZm4oKTtcbiAgbGV0IHByb3BzID0gW107XG5cbiAgZm9yIChsZXQgayBpbiB0aGlzLl9faXNvbGF0aW9uKSB7XG4gICAgaWYgKCF0aGlzLl9faXNvbGF0aW9uLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBwcm9wcy5wdXNoKHRoaXMuX19pc29sYXRpb25ba10pO1xuICB9XG5cbiAgdGhpcy5fX2lzb2xhdGlvbiA9IG51bGw7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBwcm9wcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgcHJvcCA9IHByb3BzW2ldO1xuXG4gICAgaWYgKHByb3AuaXNEZWxldGVkKSB7XG4gICAgICBwcm9wLmNvbXBvbmVudC5fX2V2YWx1YXRlQnlLZXlzKHByb3Aua2V5cywgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBcbiAgICBwcm9wLmNvbXBvbmVudC5zY29wZS5fX3NldChwcm9wLmtleXMsIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKHByb3Aua2V5cywgcHJvcC5jb21wb25lbnQuX19zY29wZSkpO1xuICB9XG5cbiAgcHJvcHMgPSBudWxsO1xuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBTdG9wIGV2YWx1YXRpb24gYmVmb3JlIHRoZSBmdW5jdGlvbiBhbmQgY29udGludWUgYWZ0ZXJcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLnVuZXZhbHVhdGUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgbGV0IGV2YWx1YXRpb24gPSB0aGlzLl9fZXZhbHVhdGlvbjtcbiAgbGV0IHJlcztcbiAgdGhpcy5fX2V2YWx1YXRpb24gPSBudWxsO1xuICByZXMgPSBmbigpO1xuICB0aGlzLl9fZXZhbHVhdGlvbiA9IGV2YWx1YXRpb247XG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIEV2YWx1YXRlIG9ubHkgcm9vdCBwcm9wZXJ0aWVzXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS53cmFwcGluZyA9IGZ1bmN0aW9uKGZuKSB7XG4gIGlmKHRoaXMuX193cmFwcGluZykge1xuICAgIHJldHVybiBmbigpO1xuICB9XG4gIFxuICB0aGlzLl9fd3JhcHBpbmcgPSB0cnVlO1xuICBsZXQgcmVzID0gZm4oKTsgIFxuICB0aGlzLl9fd3JhcHBpbmcgPSBmYWxzZTsgIFxuICByZXR1cm4gcmVzOyAgIFxufVxuXG4vKipcbiAqIFN0b3AgaXNvbGF0aW9uIGJlZm9yZSB0aGUgZnVuY3Rpb24gYW5kIGNvbnRpbnVlIGFmdGVyXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS51bmlzb2xhdGUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgbGV0IGlzb2xhdGlvbiA9IHRoaXMuX19pc29sYXRpb247XG4gIGxldCByZXM7XG4gIHRoaXMuX19pc29sYXRpb24gPSBudWxsO1xuICByZXMgPSBmbigpO1xuICB0aGlzLl9faXNvbGF0aW9uID0gaXNvbGF0aW9uO1xuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBSdW4gdGhlIGZ1bmN0aW9uIG9uIHRoZSBuZXh0IHRpY2tcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbkFraWxpLm5leHRUaWNrID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzKSA9PiBzZXRUaW1lb3V0KCgpID0+IFByb21pc2UucmVzb2x2ZShmbigpKS50aGVuKHJlcykpKTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zPXt9XVxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoZWwsIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgcmVjb21waWxlID0gb3B0aW9ucy5yZWNvbXBpbGU7XG4gIGxldCBjb21wb25lbnQgPSBlbC5fX2FraWxpO1xuXG4gIGlmIChjb21wb25lbnQpIHtcbiAgICBpZiAocmVjb21waWxlKSB7XG4gICAgICBjb21wb25lbnQuX19yZWNvbXBpbGUocmVjb21waWxlID09PSB0cnVlPyB7fTogcmVjb21waWxlKTtcbiAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGlzUm9vdCA9IGVsID09PSB0aGlzLl9fcm9vdDtcbiAgbGV0IGNvbXBvbmVudE5hbWUgPSB1dGlscy50b0Rhc2hDYXNlKGVsLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50JykgfHwgZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgbGV0IF9Db21wb25lbnQgPSB0aGlzLl9fY29tcG9uZW50c1tjb21wb25lbnROYW1lXTtcblxuICBDSEVDS19BTElBU0VTOiBpZiAoIV9Db21wb25lbnQpIHtcbiAgICBsZXQgc2VsZWN0b3JzID0gT2JqZWN0LmtleXModGhpcy5fX2FsaWFzZXMpO1xuXG4gICAgaWYgKCFzZWxlY3RvcnMubGVuZ3RoKSB7XG4gICAgICBicmVhayBDSEVDS19BTElBU0VTO1xuICAgIH1cblxuICAgIGxldCBzZWxlY3RvckFsbCA9IHNlbGVjdG9ycy5qb2luKCcsJyk7XG5cbiAgICBpZiAoIWVsLm1hdGNoZXMoc2VsZWN0b3JBbGwpKSB7XG4gICAgICBicmVhayBDSEVDS19BTElBU0VTO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gc2VsZWN0b3JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHNlbGVjdG9yID0gc2VsZWN0b3JzW2ldO1xuXG4gICAgICBpZiAoZWwubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgX0NvbXBvbmVudCA9IHRoaXMuX19jb21wb25lbnRzW3RoaXMuX19hbGlhc2VzW3NlbGVjdG9yXV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICghX0NvbXBvbmVudCAmJiAhaXNSb290KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFfQ29tcG9uZW50KSB7XG4gICAgX0NvbXBvbmVudCA9IHRoaXMuQ29tcG9uZW50O1xuICB9XG5cbiAgaWYgKF9Db21wb25lbnQubWF0Y2hlcyAmJiAhZWwubWF0Y2hlcyhfQ29tcG9uZW50Lm1hdGNoZXMpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29tcG9uZW50ID0gbmV3IF9Db21wb25lbnQoZWwsIHt9KTsgIFxuICBcbiAgaWYgKGNvbXBvbmVudC5fX2NhbmNlbGxlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKEFraWxpLmdldEFraWxpUGFyZW50cyhlbCkuZmluZChwID0+IHAuX19ha2lsaS5fX3ByZXZlbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29tcG9uZW50Ll9fY3JlYXRlKCk7XG4gIHJldHVybiBjb21wb25lbnQ7XG59O1xuXG4vKipcbiAqIENvbXBpbGUgdGhlIGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5Ba2lsaS5jb21waWxlID0gZnVuY3Rpb24gKHJvb3QsIG9wdGlvbnMgPSB7IHJlY29tcGlsZTogZmFsc2UgfSkgeyAgXG4gIGxldCBlbGVtZW50cyA9IFtdO1xuXG4gIGNvbnN0IG5lc3RlZEluaXRpYWxpemluZyA9IChlbCkgPT4ge1xuICAgIGxldCBjb21wb25lbnQgPSB0aGlzLmluaXRpYWxpemUoZWwsIG9wdGlvbnMpO1xuICAgIGxldCBjaGlsZHJlbiA9IGVsLmNoaWxkcmVuO1xuICAgIGNvbXBvbmVudCAmJiBlbGVtZW50cy5wdXNoKGNvbXBvbmVudCk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBuZXN0ZWRJbml0aWFsaXppbmcoY2hpbGQpO1xuICAgIH1cbiAgfTtcblxuICBuZXN0ZWRJbml0aWFsaXppbmcocm9vdCk7XG4gIGxldCBwID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgY29tcG9uZW50ID0gZWxlbWVudHNbaV07XG4gICAgcC5wdXNoKGNvbXBvbmVudC5fX2NvbXBpbGUoKSk7XG4gIH1cblxuICByZXR1cm4gUHJvbWlzZS5hbGwocCkudGhlbigoKSA9PiB7XG4gICAgbGV0IHIgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSBlbGVtZW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IGNvbXBvbmVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgci5wdXNoKGNvbXBvbmVudC5fX3Jlc29sdmUoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHIpO1xuICB9KTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIGNvbXBvbmVudCBvciBnZXQgaXQgaWYgZm4gaXMgbm90IHBhc3NlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gW2ZuXVxuICovXG5Ba2lsaS5jb21wb25lbnQgPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuICBpZiAoIWZuKSB7XG4gICAgcmV0dXJuIHRoaXMuX19jb21wb25lbnRzW25hbWVdIHx8IG51bGw7XG4gIH1cbiAgXG4gIGlmICh0aGlzLl9fY29tcG9uZW50c1tuYW1lXSAmJiBBa2lsaS5vcHRpb25zLmRlYnVnKSB7ICBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihgQ29tcG9uZW50ICR7bmFtZX0gYWxyZWFkeSB3YXMgYWRkZWRgKTtcbiAgfVxuXG4gIHRoaXMuX19jb21wb25lbnRzW25hbWVdID0gZm47XG59O1xuXG4vKipcbiAqIFVucmVnaXN0ZXIgdGhlIGNvbXBvbmVudFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbkFraWxpLnVucmVnaXN0ZXJDb21wb25lbnQgPSBmdW5jdGlvbiAobmFtZSkge1xuICBkZWxldGUgdGhpcy5fX2NvbXBvbmVudHNbbmFtZV07XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIHRoZSBzZWxlY3RvciBhbGlhcyBvciBnZXQgaXQgaWYgY29tcG9uZW50IG5hbWUgaXMgbm90IHBhc3NlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciAtIERPTSBzZWxlY3RvclxuICogQHBhcmFtIHtzdHJpbmd9IFtjb21wb25lbnROYW1lXVxuICovXG5Ba2lsaS5hbGlhcyA9IGZ1bmN0aW9uIChzZWxlY3RvciwgY29tcG9uZW50TmFtZSA9ICcnKSB7XG4gIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYgKCFjb21wb25lbnROYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXSAmJiBBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oYEFsaWFzIHdpdGggc2VsZWN0b3IgJHtzZWxlY3Rvcn0gYWxyZWFkeSB3YXMgYWRkZWRgKTtcbiAgfVxuXG4gIHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXSA9IGNvbXBvbmVudE5hbWU7XG59O1xuXG4vKipcbiAqIFVucmVnaXN0ZXIgdGhlIHNlbGVjdG9yIGFsaWFzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gKi9cbkFraWxpLnVucmVnaXN0ZXJBbGlhcyA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICBkZWxldGUgdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdO1xufTtcblxuLyoqXG4gKiBJc29sYXRlIGFycmF5IHByb3RvdHlwZSBmdW5jdGlvbnNcbiAqL1xuQWtpbGkuaXNvbGF0ZUFycmF5UHJvdG90eXBlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9fd2luZG93LkFycmF5ID0geyBwcm90b3R5cGU6IHt9IH07XG5cbiAgbGV0IGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhBcnJheS5wcm90b3R5cGUpO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICBsZXQgb2xkID0gQXJyYXkucHJvdG90eXBlW2tleV07XG5cbiAgICBpZiAodHlwZW9mIG9sZCAhPSAnZnVuY3Rpb24nIHx8IGtleSA9PSAnY29uc3RydWN0b3InKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB0aGlzLl9fd2luZG93LkFycmF5LnByb3RvdHlwZVtrZXldID0gb2xkO1xuXG4gICAgQXJyYXkucHJvdG90eXBlW2tleV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gQWtpbGkudW5ldmFsdWF0ZSgoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5fX2lzUHJveHkpIHtcbiAgICAgICAgICByZXR1cm4gb2xkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gb2xkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxufTtcblxuLyoqXG4gKiBJc29sYXRlIHNvbWUgd2luZG93IGZ1bmN0aW9uc1xuICovXG5Ba2lsaS5pc29sYXRlV2luZG93RnVuY3Rpb25zID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX193aW5kb3cuc2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gIHRoaXMuX193aW5kb3cuc2V0SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbDtcbiAgdGhpcy5fX3dpbmRvdy5Qcm9taXNlID0gUHJvbWlzZTtcbiAgd2luZG93LnNldFRpbWVvdXQgPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5zZXRUaW1lb3V0LCAwKTtcbiAgd2luZG93LnNldEludGVydmFsID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuc2V0SW50ZXJ2YWwsIDApO1xuICB3aW5kb3cuUHJvbWlzZS5jb25zdHJ1Y3RvciA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LlByb21pc2UuY29uc3RydWN0b3IpO1xuICB3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LlByb21pc2UucHJvdG90eXBlLnRoZW4sIFswLCAnbGFzdCddKTtcbiAgd2luZG93LlByb21pc2UucHJvdG90eXBlLmNhdGNoID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gpO1xufTtcblxuLyoqXG4gKiBJc29sYXRlIGV2ZW50IGxpc3RlbmVyc1xuICovXG5Ba2lsaS5pc29sYXRlRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQgPSB7IHByb3RvdHlwZToge30gfTtcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcjtcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcjtcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmU7XG5cbiAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgIGRlbGV0ZSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnM7XG4gICAgcmV0dXJuIEFraWxpLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgICBsZXQgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgYXJnc1sxXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLnB1c2goe1xuICAgICAgbGluazogZm4sXG4gICAgICBmbjogYXJnc1sxXVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIEFraWxpLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG5cbiAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChuYW1lLCBmbikge1xuICAgIGxldCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYgKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVycyA9IHt9O1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBsaXN0ZW5lciA9IHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXVtpXTtcblxuICAgICAgaWYgKGxpc3RlbmVyLmxpbmsgPT09IGZuKSB7XG4gICAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGFyZ3NbMV0gPSBsaXN0ZW5lci5mbjtcbiAgICAgICAgaS0tO1xuICAgICAgICBsLS07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXTtcbiAgICB9XG5cbiAgICByZXR1cm4gQWtpbGkuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfTtcbn07XG5cbi8qKlxuICogV3JhcCB0aGUgZnVuY3Rpb24gY2FsbGJhY2sgdG8gYW4gaXNvbGF0ZSBjb250ZXh0XG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ3xudW1iZXJbXXxzdHJpbmdbXX0gW3Bvcz1cImxhc3RcIl1cbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqL1xuQWtpbGkuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24gPSBmdW5jdGlvbiAoZm4sIHBvcyA9ICdsYXN0Jykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGxldCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICFBcnJheS5pc0FycmF5KHBvcykgJiYgKHBvcyA9IFtwb3NdKTtcbiAgICBcbiAgICBmb3IobGV0IGkgPSAwLCBsID0gcG9zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG51bSA9IHBvc1tpXTtcbiAgICAgIGxldCBpbmRleCA9IG51bTtcbiAgICAgIGxldCBjYWxsYmFjayA9IGFyZ3NbbnVtXTtcblxuICAgICAgaWYobnVtID09ICdsYXN0Jykge1xuICAgICAgICBpbmRleCA9IGFyZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgY2FsbGJhY2sgPSBhcmdzW2luZGV4XTtcbiAgICAgIH1cblxuICAgICAgaWYodHlwZW9mIGNhbGxiYWNrICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGFyZ3NbaW5kZXhdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkoY2FsbGJhY2ssIGFyZ3VtZW50cyk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG59O1xuXG4vKipcbiAqIFdyYXAgb2JqZWN0cy9jbGFzc2VzIHRvIGlzb2xhdGUgYW5kIHVuZXZhbHVhdGUgZGF0YVxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gW29wdGlvbnNdIFxuICovXG5Ba2lsaS53cmFwID0gZnVuY3Rpb24gKG9iaiwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBjdXJyZW50ID0gb2JqO1xuXG4gIGlmKHR5cGVvZiBvYmogPT0gJ2Z1bmN0aW9uJykge1xuICAgIG9iaiA9IHRoaXMud3JhcEZ1bmN0aW9uKG9iaik7XG5cbiAgICBpZihvYmogPT09IGN1cnJlbnQpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICB9XG4gIGVsc2UgaWYoIW9iaiB8fCB0eXBlb2Ygb2JqICE9ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBsZXQga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaik7XG5cbiAgZm9yKGxldCBrID0gMCwgYyA9IGtleXMubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgbGV0IGtleSA9IGtleXNba107XG4gICAgbGV0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KTtcblxuICAgIGlmKCFkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSB8fCAhZGVzY3JpcHRvci53cml0YWJsZSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYob3B0aW9ucy5yZXZlcnNlKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsuLi5kZXNjcmlwdG9yLCB2YWx1ZTogb2JqW2tleV0uX19ha2lsaSB8fCBvYmpba2V5XSB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsuLi5kZXNjcmlwdG9yLCB2YWx1ZTogdGhpcy53cmFwKG9ialtrZXldLCBvcHRpb25zKSB9KTtcbiAgfSBcbiAgXG4gIHJldHVybiBvYmo7XG59O1xuXG4vKipcbiAqIFVud3JhcCBvYmplY3RzL2NsYXNzZXNcbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gb2JqXG4gKi9cbkFraWxpLnVud3JhcCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRoaXMud3JhcChvYmosIHsgcmV2ZXJzZTogdHJ1ZSB9KTtcbn1cblxuLyoqXG4gKiBJc29sYXRlIGEgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMge2Z1bmN0aW9ufVxuICovXG5Ba2lsaS53cmFwRnVuY3Rpb24gPSBmdW5jdGlvbihmbikge1xuICBpZiAoZm4uX19ha2lsaSkge1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIGNvbnN0IGFraWxpV3JhcHBlZEZ1bmN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBBa2lsaS53cmFwcGluZygoKSA9PiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfTtcblxuICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGZuKTtcbiAgYWtpbGlXcmFwcGVkRnVuY3Rpb24ucHJvdG90eXBlID0gZm4ucHJvdG90eXBlO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgIGFraWxpV3JhcHBlZEZ1bmN0aW9uW2tleV0gPSBmbltrZXldO1xuICB9XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFraWxpV3JhcHBlZEZ1bmN0aW9uLCAnX19ha2lsaScsIHtcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICB2YWx1ZTogZm5cbiAgfSk7XG5cbiAgcmV0dXJuIGFraWxpV3JhcHBlZEZ1bmN0aW9uO1xufTtcblxuLyoqXG4gKiBFcnJvciBoYW5kbGluZ1xuICovXG5Ba2lsaS5lcnJvckhhbmRsaW5nID0gZnVuY3Rpb24oKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIHRoaXMuX19vbkVycm9yKTtcbn07XG5cbi8qKlxuICogVHJpZ2dlciBhbiBpbml0aWFsaXphdGlvbiBzdGF0dXNcbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHN0YXR1c1xuICovXG5Ba2lsaS50cmlnZ2VySW5pdCA9IGZ1bmN0aW9uKHN0YXR1cykge1xuICBBa2lsaS5fX2luaXQgPSBzdGF0dXM7XG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnYWtpbGktaW5pdCcsIHsgZGV0YWlsOiBzdGF0dXMgfSkpO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBhcHBsaWNhdGlvblxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gW3Jvb3RdXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuQWtpbGkuaW5pdCA9IGZ1bmN0aW9uKHJvb3QpIHtcbiAgcm9vdCA9IHJvb3QgfHwgZG9jdW1lbnQuYm9keTtcblxuICBpZighKHJvb3QgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgUm9vdCBlbGVtZW50IG11c3QgYmUgYW4gaHRtbCBlbGVtZW50YCk7XG4gIH1cblxuICBpZihyb290ID09PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFwiaHRtbFwiIGNhbid0IGJlIHRoZSByb290IGVsZW1lbnRgKTtcbiAgfVxuXG4gIHRoaXMuX19yb290ID0gcm9vdDtcbiAgXG4gIGlmKHdpbmRvdy5BS0lMSV9TRVJWRVIpIHsgICAgXG4gICAgQWtpbGkuaW5pdFNlcnZlclNpZGVIdG1sKHdpbmRvdy5BS0lMSV9TRVJWRVIuaHRtbCk7XG4gICAgQWtpbGkuaW5pdFNlcnZlclNpZGVSZXF1ZXN0Q2FjaGUod2luZG93LkFLSUxJX1NFUlZFUi5yZXF1ZXN0Q2FjaGUpO1xuICB9XG4gIGVsc2Uge1xuICAgIHdpbmRvdy5BS0lMSV9DTElFTlQgPSB7XG4gICAgICBodG1sOiB0aGlzLnByZXBhcmVTZXJ2ZXJTaWRlSHRtbCgpICAgICAgXG4gICAgfVxuICB9XG5cbiAgZm9yKGxldCBrZXkgaW4gdGhpcy5vcHRpb25zLmdsb2JhbHMpIHtcbiAgICB0aGlzLm9wdGlvbnMuZ2xvYmFsc1trZXldID0gdGhpcy53cmFwKHRoaXMub3B0aW9ucy5nbG9iYWxzW2tleV0pO1xuICB9XG4gIFxuICByZXR1cm4gdGhpcy5jb21waWxlKHRoaXMuX19yb290KS50aGVuKCgpID0+IHtcbiAgICBpZiAocm91dGVyLl9faW5pdCkge1xuICAgICAgcmV0dXJuIHJvdXRlci5jaGFuZ2VTdGF0ZSgpO1xuICAgIH1cbiAgfSkudGhlbigoKSA9PiB7ICAgIFxuICAgIHdpbmRvdy5BS0lMSV9DTElFTlQgJiYgKHdpbmRvdy5BS0lMSV9DTElFTlQucmVxdWVzdENhY2hlID0gdGhpcy5wcmVwYXJlU2VydmVyU2lkZVJlcXVlc3RDYWNoZSgpKTtcbiAgICB0aGlzLnRyaWdnZXJJbml0KHRydWUpO1xuICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgdGhpcy50cmlnZ2VySW5pdChmYWxzZSk7XG4gICAgdGhyb3cgZXJyO1xuICB9KTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgaHRtbFxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuICovXG5Ba2lsaS5pbml0U2VydmVyU2lkZUh0bWwgPSBmdW5jdGlvbiAoaHRtbCkge1xuICBmb3IgKGxldCBpID0gdGhpcy5fX3Jvb3QuYXR0cmlidXRlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSl7XG4gICAgdGhpcy5fX3Jvb3QucmVtb3ZlQXR0cmlidXRlKHRoaXMuX19yb290LmF0dHJpYnV0ZXNbaV0ubmFtZSk7XG4gIH1cblxuICBsZXQgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICBsZXQgZG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhodG1sLCBcInRleHQvaHRtbFwiKTtcbiAgbGV0IGVsID0gZG9jLnF1ZXJ5U2VsZWN0b3IodGhpcy5fX3Jvb3QgPT09IGRvY3VtZW50LmJvZHk/ICdib2R5JzogJ2JvZHkgPiAqJyk7ICAgIFxuICB0aGlzLl9fcm9vdC5pbm5lckhUTUwgPSBlbC5pbm5lckhUTUw7XG5cbiAgZm9yIChsZXQgaSA9IGVsLmF0dHJpYnV0ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBsZXQgYXR0ciA9IGVsLmF0dHJpYnV0ZXNbaV07XG4gICAgdGhpcy5fX3Jvb3Quc2V0QXR0cmlidXRlKGF0dHIubmFtZSwgYXR0ci52YWx1ZSk7XG4gIH0gIFxufVxuXG4vKipcbiAqIEluaXRpYWxpemUgc2VydmVyLXNpZGUgcmVuZGVyaW5nIHJlcXVlc3QgY2FjaGVcbiAqIFxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICovXG5Ba2lsaS5pbml0U2VydmVyU2lkZVJlcXVlc3RDYWNoZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgY29uc3QgaW5pdCA9IChpbnN0YW5jZSwgb2JqKSA9PiB7XG4gICAgZm9yKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgICBpbnN0YW5jZS5fX2NhY2hlW2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gIH1cbiAgXG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICBsZXQgaW5zdGFuY2UgPSBrZXkgPT09ICdfX21haW4nPyByZXF1ZXN0OiByZXF1ZXN0Ll9faW5zdGFuY2VzW2tleV07XG4gICAgaW5pdChpbnN0YW5jZSwgb2JqW2tleV0pO1xuICB9XG59XG5cbi8qKlxuICogUHJlcGFyZSBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgaHRtbFxuICovXG5Ba2lsaS5wcmVwYXJlU2VydmVyU2lkZUh0bWwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLl9fcm9vdC5vdXRlckhUTUw7XG59XG5cbi8qKlxuICogUHJlcGFyZSBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgcmVxdWVzdCBjYWNoZVxuICovXG5Ba2lsaS5wcmVwYXJlU2VydmVyU2lkZVJlcXVlc3RDYWNoZSA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IGNhY2hlID0geyBfX21haW46IHJlcXVlc3QuX19jYWNoZSB9O1xuXG4gIGZvcihsZXQga2V5IGluIHJlcXVlc3QuX19pbnN0YW5jZXMpIHtcbiAgICBjYWNoZVtrZXldID0gcmVxdWVzdC5fX2luc3RhbmNlc1trZXldLl9fY2FjaGU7XG4gIH1cblxuICByZXR1cm4gY2FjaGU7XG59XG5cbi8qKlxuICogRGVpbml0aWFsaXplIHRoZSBhcHBsaWNhdGlvblxuICovXG5Ba2lsaS5kZWluaXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5jbGVhckdsb2JhbHMoKTtcbiAgcm91dGVyLmRlaW5pdCgpO1xuICByZXF1ZXN0LmRlaW5pdCgpO1xuICBsZXQgc3RvcmVLZXlzID0gT2JqZWN0LmtleXMoc3RvcmUuX190YXJnZXQpO1xuICBcbiAgZm9yKGxldCBpID0gMCwgbCA9IHN0b3JlS2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBkZWxldGUgc3RvcmUuX190YXJnZXRbc3RvcmVLZXlzW2ldXTtcbiAgfVxuXG4gIHRoaXMuc2V0RGVmYXVsdHMoKTtcbn07XG5cbndpbmRvdy5Ba2lsaSA9IEFraWxpO1xuZXhwb3J0IGRlZmF1bHQgQWtpbGk7XG5Ba2lsaS5zZXREZWZhdWx0cygpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ha2lsaS5qcyIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyLmpzJ1xuXG4vKipcbiAqIEFuIG9iamVjdCB3aXRoIGEgbG90IG9mIHVzZWZ1bCBmdW5jdGlvbnNcbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy91dGlsc31cbiAqL1xuY29uc3QgdXRpbHMgPSB7fTtcblxuLyoqXG4gKiBDcmVhdGUgY2xhc3MgYXR0cmlidXRlIGZyb20gYW4gb2JqZWN0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJyZWQgYWN0aXZlXCJcbiAqIHV0aWxzLmNsYXNzKHtyZWQ6IHRydWUsIGFjdGl2ZTogdHJ1ZSwgZ3JlZW46IGZhbHNlfSk7XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuY2xhc3MgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgbGV0IGNsYXNzZXMgPSBbXTtcbiAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgayA9IGtleXNbaV07XG4gICAgbGV0IHZhbCA9IG9ialtrXTtcbiAgICB2YWwgJiYgY2xhc3Nlcy5wdXNoKGspO1xuICB9XG5cbiAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgc3R5bGUgYXR0cmlidXRlIGZyb20gYW4gb2JqZWN0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJjb2xvcjpyZWQ7d2lkdGg6MTBweFwiXG4gKiB1dGlscy5zdHlsZSh7Y29sb3I6IFwicmVkXCIsIGJhY2tncm91bmQ6IGZhbHNlLCB3aWR0aDogXCIxMHB4XCJ9KTtcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5zdHlsZSA9IGZ1bmN0aW9uKG9iaikge1xuICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGxldCBzdHlsZXMgPSBbXTtcbiAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgayA9IGtleXNbaV07XG4gICAgbGV0IHZhbCA9IG9ialtrXTtcbiAgICB2YWwgJiYgc3R5bGVzLnB1c2goYCR7dGhpcy50b0Rhc2hDYXNlKGspfToke3ZhbH1gKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZXMuam9pbignOycpO1xufTtcblxuLyoqXG4gKiBFeHRlbmRlZCBzcGxpdCBvZiB0aGUgc3RyaW5nXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFtcIkhlbGxvXCIsIFwiV29ybGRcIl1cbiAqIHV0aWxzLnNwbGl0KFwiSGVsbG8gV29ybGRcIiwgXCIgXCIpO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbJ3ggPSA1JywgJyB5ID0gXCIxOzI7M1wiJ11cbiAqIHV0aWxzLnNwbGl0KCd4ID0gNTsgeSA9IFwiMTsyOzNcIicsIFwiO1wiLCBbJ1wiJ10pO1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ3xSZWdFeHB9IHN0ciBcbiAqIEBwYXJhbSB7c3RyaW5nfSBbZGVsXVxuICogQHBhcmFtIHtzdHJpbmdbXX0gW2V4Y2x1ZGVdIFxuICovXG51dGlscy5zcGxpdCA9IGZ1bmN0aW9uKHN0ciwgZGVsID0gJycsIGV4Y2x1ZGUgPSBbXSkge1xuXHRjb25zdCBleHBzID0gW107ICAgICBcbiAgbGV0IGxhc3QgPSAnJztcblxuICBpZighZGVsKSB7XG4gICAgcmV0dXJuIHN0ci5zcGxpdCgnJyk7XG4gIH1cbiAgZWxzZSBpZihkZWwgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICByZXR1cm4gc3RyLnNwbGl0KGRlbCk7XG4gIH1cbiAgZWxzZSBpZihzdHIuaW5kZXhPZihkZWwpID09IC0xKSB7XG4gICAgbGFzdCA9IHN0cjtcbiAgfVxuICBlbHNlIHtcbiAgICBjb25zdCBhcnIgPSBzdHIuc3BsaXQoJycpO1xuICAgIGxldCBvcGVuID0gJyc7IFxuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCB2YWwgPSBhcnJbaV07XG4gICAgICBsZXQgaW5kZXggPSBleGNsdWRlLmluZGV4T2YodmFsKTsgICAgICBcblxuICAgICAgaWYoaW5kZXggPiAtMSAmJiAoIW9wZW4gfHwgb3BlbiA9PSB2YWwpKSB7XG4gICAgICAgICFvcGVuPyBvcGVuID0gZXhjbHVkZVtpbmRleF06IG9wZW4gPSAnJztcbiAgICAgIH1cblxuICAgICAgaWYodmFsID09IGRlbCAmJiAhb3Blbikge1xuICAgICAgICBleHBzLnB1c2gobGFzdCk7XG4gICAgICAgIGxhc3QgPSAnJztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGxhc3QgKz0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGxhc3QgJiYgZXhwcy5wdXNoKGxhc3QpO1xuICByZXR1cm4gZXhwcztcbn1cblxuLyoqXG4gKiBGaWx0ZXIgYW4gYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMSwgMTFdXG4gKiB1dGlscy5maWx0ZXIoWzEsIDIsIDMsIDExXSwgJzEnKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDF9LCB7eDogMTF9XVxuICogdXRpbHMuZmlsdGVyKFt7eDogMX0sIHt4OiAyfSwge3g6IDN9LCB7eDogMTF9XSwgJzEnLCAneCcpO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDF9LCB7eDogMTF9XVxuICogdXRpbHMuZmlsdGVyKFt7eDogMX0sIHt4OiAyfSwge3g6IDN9LCB7eDogMTF9XSwgJzEnLCBbJ3gnXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMX0sIHt4OiAxMX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxfSwge3g6IDJ9LCB7eDogM30sIHt4OiAxMX1dLCAnMScsIFtbJ3gnXV0pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IHt5OiAxfX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiB7eTogMX19LCB7eDoge3k6IDJ9fV0sICcxJywgW1sneCcsICd5J11dKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OjEsIHk6IDJ9LCB7eDogMiwgeToxfV0gXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxLCB5OiAyfSwge3g6IDMsIHk6IDN9LCB7eDogMiwgeTogMX1dLCAnMScsIFsneCcsICd5J10pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6MSwgeTogMn0sIHt4OiAyLCB5OjF9XVxuICogdXRpbHMuZmlsdGVyKFt7eDogMSwgeTogMn0sIHt4OiAzLCB5OiAzfSwge3g6IDIsIHk6IDF9XSwgJzEnLCBbWyd4J10sIFsneSddXSk7XG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0ge3N0cmluZ3xSZWdFeHB8ZnVuY3Rpb259IGhhbmRsZXIgLSB0eXBlIG9mIGZpbHRlcmluZ1xuICogQHBhcmFtIHtzdHJpbmdbXXxzdHJpbmd9IFtrZXlzXSAtIGZpbHRlciBpbiB0aGUga2V5cyBpZiBhcnJheSBlbGVtZW50cyBhcmUgb2JqZWN0XG4gKiBAcmV0dXJucyB7QXJyYXl9IC0gcmV0dXJucyBvdGhlciBhcnJheVxuICovXG51dGlscy5maWx0ZXIgPSBmdW5jdGlvbiAoYXJyLCBoYW5kbGVyLCBrZXlzID0gbnVsbCkge1xuICBsZXQgcmVzID0gW107XG5cbiAgaWYgKGtleXMgJiYgIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICBrZXlzID0gW2tleXNdO1xuICB9XG5cbiAgaWYodHlwZW9mIGhhbmRsZXIgIT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHN0ciA9IGhhbmRsZXI/IChoYW5kbGVyICsgJycpLnRvTG93ZXJDYXNlKCk6ICcnO1xuICAgIGhhbmRsZXIgPSB2YWwgPT4gKHZhbD8gKHZhbCArICcnKS50b0xvd2VyQ2FzZSgpOiAnJykubWF0Y2goc3RyKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBpdGVtID0gYXJyW2ldO1xuICAgIGxldCBmaWx0ZXJlZCA9IGZhbHNlO1xuXG4gICAgaWYoIWtleXMgJiYgaGFuZGxlcihpdGVtKSkge1xuICAgICAgZmlsdGVyZWQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmKGtleXMpIHtcbiAgICAgIGZvcihsZXQgayA9IDAsIGMgPSBrZXlzLmxlbmd0aDsgayA8IGM7IGsrKykge1xuICAgICAgICBsZXQga2V5ID0ga2V5c1trXTtcbiAgICAgICAga2V5ID0gQXJyYXkuaXNBcnJheShrZXkpPyBrZXk6IFtrZXldO1xuICAgICAgICBsZXQgdmFsID0ga2V5PyB0aGlzLmdldFByb3BlcnR5QnlLZXlzKGtleSwgaXRlbSk6IGl0ZW07XG4gICAgXG4gICAgICAgIGlmIChoYW5kbGVyKHZhbCkpIHtcbiAgICAgICAgICBmaWx0ZXJlZCA9IHRydWU7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmaWx0ZXJlZCAmJiByZXMucHVzaChpdGVtKTsgICBcbiAgfVxuXG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIE9yZGVyIGFuIGFycmF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWzEsIDIsIDNdXG4gKiB1dGlscy5zb3J0KFszLCAyLCAxXSwgdHJ1ZSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWzMsIDIsIDFdXG4gKiB1dGlscy5zb3J0KFsxLCAyLCAzXSwgZmFsc2UpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XVxuICogdXRpbHMuc29ydChbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV0sIFtbJ3gnXV0sIFt0cnVlXSk7XG4gKiB1dGlscy5zb3J0KFt7eDogM30sIHt4OiAyfSwge3g6IDF9XSwgWyd4J10sIHRydWUpO1xuICogdXRpbHMuc29ydChbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV0sICd4Jyk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dXG4gKiB1dGlscy5zb3J0KFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XSwgW1sneCddXSwgW2ZhbHNlXSk7XG4gKiB1dGlscy5zb3J0KFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XSwgWyd4J10sIGZhbHNlKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dLCAneCcsIGZhbHNlKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDEsIHk6IDN9LCB7eDogMiwgeTogMX0sIHt4OjIsIHk6IDJ9XVxuICogdXRpbHMuc29ydChbe3g6IDIsIHk6IDJ9LCB7eDogMiwgeTogMX0sIHt4OiAyLCB5OiAzfV0sIFtbJ3gnXSwgWyd5J11dLCBbdHJ1ZSwgdHJ1ZV0pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IHt5OiAxfX0sIHt4OiB7eTogMn19XVxuICogdXRpbHMuc29ydChbe3g6IHt5OiAyfX0sIHt4OiB7eTogMX19XSwgW1sneCcsICd5J11dLCBbdHJ1ZV0pO1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICogQHBhcmFtIHtib29sZWFufEFycmF5W118c3RyaW5nW118c3RyaW5nfSBba2V5c11cbiAqIEBwYXJhbSB7Ym9vbGVhbnxib29sZWFuW119IFtvcmRlcl0gLSByZXZlcnNlIG9yIG5vdFxuICogQHJldHVybnMge0FycmF5fVxuICovXG51dGlscy5zb3J0ID0gZnVuY3Rpb24oYXJyLCBrZXlzID0gdHJ1ZSwgb3JkZXIgPSBbXSkge1xuICBhcnIgPSBhcnIuc2xpY2UoKTtcblxuICBpZiAoa2V5cyA9PT0gdHJ1ZSkge1xuICAgIGtleXMgPSBbXTtcbiAgICBvcmRlciA9IFt0cnVlXTtcbiAgfVxuICBlbHNlIGlmIChrZXlzID09PSBmYWxzZSkge1xuICAgIGtleXMgPSBbXTtcbiAgICBvcmRlciA9IFtmYWxzZV07XG4gIH1cblxuICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICBrZXlzID0gW2tleXNdO1xuICB9XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KG9yZGVyKSkge1xuICAgIG9yZGVyID0gW29yZGVyXTtcbiAgfVxuXG4gIGxldCBsID0ga2V5cy5sZW5ndGg7XG5cbiAgYXJyLnNvcnQoKGEsIGIpID0+IHtcbiAgICBsZXQgaSA9IDA7XG5cbiAgICBjb25zdCBjaGVjayA9IChhLCBiLCByZXZlcnNlID0gZmFsc2UpID0+IHtcbiAgICAgIGlmIChhIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBhID0gYS5nZXRUaW1lKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChiIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBiID0gYi5nZXRUaW1lKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhID4gYikge1xuICAgICAgICByZXR1cm4gcmV2ZXJzZT8gLTE6IDE7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChhIDwgYikge1xuICAgICAgICByZXR1cm4gcmV2ZXJzZT8gMTogLTE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAwO1xuICAgIH07XG5cbiAgICBjb25zdCBuZXh0ID0gKCkgPT4ge1xuICAgICAgaWYgKGkgPj0gbCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cblxuICAgICAgbGV0IGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShrZXkpKSB7XG4gICAgICAgIGtleSA9IFtrZXldO1xuICAgICAgfVxuXG4gICAgICBsZXQgYVYgPSB0aGlzLmdldFByb3BlcnR5QnlLZXlzKGtleSwgYSk7XG4gICAgICBsZXQgYlYgPSB0aGlzLmdldFByb3BlcnR5QnlLZXlzKGtleSwgYik7XG4gICAgICBsZXQgcmVzID0gY2hlY2soYVYsIGJWLCBvcmRlcltpXSA9PT0gZmFsc2UpO1xuXG4gICAgICBpZiAocmVzICE9PSAwKSB7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9XG5cbiAgICAgIGkrKztcbiAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgfTtcblxuICAgIGlmICghbCkge1xuICAgICAgcmV0dXJuIGNoZWNrKGEsIGIsIG9yZGVyW2ldID09PSBmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8qKlxuICogUmV0dXJuIG5ldyBvYmplY3Qgd2l0aCB0aGUgc3BlY2lmaWVkIGtleXNcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMge3g6IDEsIHo6IDF9XG4gKiB1dGlscy5pbmNsdWRlS2V5cyh7eDogMSwgeTogMSwgejogMX0sIFsneCcsICd6J10pO1xuICogXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKi9cbnV0aWxzLmluY2x1ZGVLZXlzID0gZnVuY3Rpb24ob2JqLCBrZXlzKSB7XG4gIGxldCBuZXdPYmogPSB7fTtcbiAgbGV0IG9iaktleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBvYmpLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrZXkgPSBvYmpLZXlzW2ldO1xuXG4gICAgaWYoa2V5cy5pbmRleE9mKGtleSkgIT0gLTEpIHtcbiAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxuLyoqXG4gKiBSZXR1cm4gbmV3IG9iamVjdCB3aXRob3V0IHRoZSBzcGVjaWZpZWQga2V5c1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB7eDogMSwgejogMX1cbiAqIHV0aWxzLmluY2x1ZGVLZXlzKHt4OiAxLCB5OiAxLCB6OiAxfSwgWyd5J10pO1xuICogXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKi9cbnV0aWxzLmV4Y2x1ZGVLZXlzID0gZnVuY3Rpb24ob2JqLCBrZXlzKSB7XG4gIGxldCBuZXdPYmogPSB7fTtcbiAgbGV0IG9iaktleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBvYmpLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrZXkgPSBvYmpLZXlzW2ldO1xuXG4gICAgaWYoa2V5cy5pbmRleE9mKGtleSkgPT0gLTEpIHtcbiAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxuLyoqXG4gKiBDaGVjayB0aGUgdmFsdWUgaXMgY29tcG9uZW50IHNjb3BlIHByb3h5IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaXNTY29wZVByb3h5ID0gZnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiAhISh2YWwgJiYgdHlwZW9mIHZhbCA9PSAnb2JqZWN0JyAmJiB2YWwuX19pc1Byb3h5KTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIHZhbHVlIGlzIHBsYWluIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaXNQbGFpbk9iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuICByZXR1cm4gISEob2JqICYmIHR5cGVvZiBvYmogPT0gJ29iamVjdCcgJiYgKG9iai5jb25zdHJ1Y3RvciA9PSBPYmplY3QgfHwgb2JqLmNvbnN0cnVjdG9yID09IEFycmF5KSk7XG59O1xuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9uc10gXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuY29weSA9IGZ1bmN0aW9uKHZhbHVlLCBvcHRpb25zID0ge30pIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCAhdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBvcHRpb25zID0geyBuZXN0ZWQ6IHRydWUsIGVudW1lcmFibGU6IHRydWUsIC4uLm9wdGlvbnMgfTtcblxuICBjb25zdCBuZXh0ID0gKG9iaikgPT4ge1xuICAgIG9iaiA9IHRoaXMuaXNTY29wZVByb3h5KG9iaik/IG9iai5fX3RhcmdldDogb2JqO1xuICAgIGxldCBrZXlzID0gIW9wdGlvbnMuZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKTogT2JqZWN0LmtleXMob2JqKTtcbiAgICBsZXQgbmV3T2JqID0gQXJyYXkuaXNBcnJheShvYmopPyBbXToge307XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgICBsZXQgdmFsID0gb2JqW2tleV07XG4gICAgICB2YWwgPSB2YWwgJiYgdHlwZW9mIHZhbCA9PSAnb2JqZWN0JyAmJiBvcHRpb25zLm5lc3RlZD8gbmV4dCh2YWwpOiB2YWw7ICAgICAgXG4gICAgICBcbiAgICAgIGlmKCFvYmoucHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIHtcbiAgICAgICAgICAuLi5PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSxcbiAgICAgICAgICB2YWx1ZTogdmFsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBuZXdPYmpba2V5XSA9IHZhbDsgIFxuICAgIH1cblxuICAgIHJldHVybiBuZXdPYmo7XG4gIH1cblxuICByZXR1cm4gbmV4dCh2YWx1ZSk7XG59O1xuXG4vKipcbiAqIENoYW5nZSB0aGUgdmFsdWUgdG8gYXR0cmlidXRlIGFwcHJvcHJpYXRlIGZvcm1hdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5tYWtlQXR0cmlidXRlVmFsdWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IGZhbHNlIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBFdmVudEVtaXR0ZXIpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgRXZlbnRdJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiAnW29iamVjdCBGdW5jdGlvbl0nO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlICsgJyc7XG59O1xuXG4vKipcbiAqIENvbXBhcmUgdHdvIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7Kn0gYVxuICogQHBhcmFtIHsqfSBiXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuY29tcGFyZSA9IGZ1bmN0aW9uIChhLCBiLCBvcHRpb25zID0ge30pIHtcbiAgaWYgKChhIGluc3RhbmNlb2YgRGF0ZSkgJiYgKGIgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgIHJldHVybiBhLmdldFRpbWUoKSA9PT0gYi5nZXRUaW1lKCk7XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIGEgPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgYiA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGEudG9TdHJpbmcoKSA9PT0gYi50b1N0cmluZygpO1xuICB9XG4gIGVsc2UgaWYgKHR5cGVvZiBhID09ICdvYmplY3QnICYmIHR5cGVvZiBiID09ICdvYmplY3QnKSB7XG4gICAgaWYgKGEgPT09IG51bGwgfHwgYiA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGEgPT09IGI7XG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgLi4ub3B0aW9ucyB9O1xuXG4gICAgY29uc3QgY2xlYXJVbmRlZmluZWQgPSAodmFsKSA9PiB7XG4gICAgICBsZXQgb2JqID0gQXJyYXkuaXNBcnJheSh2YWwpPyBbXToge307XG4gICAgICBsZXQga2V5cyA9ICFvcHRpb25zLmVudW1lcmFibGU/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKCk6IE9iamVjdC5rZXlzKHZhbCk7XG5cbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgdmFsW2tleV0gIT09IHVuZGVmaW5lZCAmJiAob2JqW2tleV0gPSB2YWxba2V5XSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBpZihvcHRpb25zLmlnbm9yZVVuZGVmaW5lZCkge1xuICAgICAgYSA9IGNsZWFyVW5kZWZpbmVkKGEpO1xuICAgICAgYiA9IGNsZWFyVW5kZWZpbmVkKGIpO1xuICAgIH1cblxuICAgIGxldCBhS2V5cyA9ICFvcHRpb25zLmVudW1lcmFibGU/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKCk6IE9iamVjdC5rZXlzKGEpO1xuICAgIGxldCBiS2V5cyA9ICFvcHRpb25zLmVudW1lcmFibGU/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKCk6IE9iamVjdC5rZXlzKGIpO1xuICAgIFxuICAgIGlmIChhS2V5cy5sZW5ndGggIT0gYktleXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgYSA9IHRoaXMuaXNTY29wZVByb3h5KGEpPyBhLl9fdGFyZ2V0OiBhO1xuICAgIGIgPSB0aGlzLmlzU2NvcGVQcm94eShiKT8gYi5fX3RhcmdldDogYjtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBhS2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBrZXkgPSBhS2V5c1tpXTtcblxuICAgICAgaWYgKCF0aGlzLmNvbXBhcmUoYVtrZXldLCBiW2tleV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBhID09PSBiO1xufTtcblxuLyoqXG4gKiBDb21wYXJlIHRoZSBjdXJyZW50IHZhbHVlIHdpdGggdGhlIHByZXZpb3VzXG4gKlxuICogQHBhcmFtIHsqfSBjdXJyZW50IC0gdGhlIGN1cnJlbnQgdmFsdWVcbiAqIEBwYXJhbSB7Kn0gcHJldmlvdXMgLSB0aGUgcHJldmlvdXMgdmFsdWVcbiAqIEBwYXJhbSB7Kn0gcHJldmlvdXNDb3B5IC0gdGhlIHByZXZpb3VzIHZhbHVlIGNvcHlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSA9IGZ1bmN0aW9uKGN1cnJlbnQsIHByZXZpb3VzLCBwcmV2aW91c0NvcHksIG9wdGlvbnMpIHtcbiAgaWYgKGN1cnJlbnQgIT09IHByZXZpb3VzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuY29tcGFyZShjdXJyZW50LCBwcmV2aW91c0NvcHksIG9wdGlvbnMpO1xufTtcblxuLyoqXG4gKiBFbmNvZGUgaHRtbCBlbnRpdGllc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwieW91ICZhbXAgbWVcIlxuICogdXRpbHMuZW5jb2RlSHRtbEVudGl0aWVzKCd5b3UgJiBtZScpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBodG1sXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5lbmNvZGVIdG1sRW50aXRpZXMgPSBmdW5jdGlvbihodG1sKSB7XG4gIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB2YWx1ZTtcbiAgZWwudGV4dENvbnRlbnQgPSBodG1sO1xuICB2YWx1ZSA9IGVsLmlubmVySFRNTDtcbiAgZWwucmVtb3ZlKCk7XG4gIGVsID0gbnVsbDtcbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuLyoqXG4gKiBEZWNvZGUgaHRtbCBlbnRpdGllc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwieW91ICYgbWVcIlxuICogdXRpbHMuZGVjb2RlSHRtbEVudGl0aWVzKCd5b3UgJmFtcCBtZScpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBodG1sXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5kZWNvZGVIdG1sRW50aXRpZXMgPSBmdW5jdGlvbihodG1sKSB7XG4gIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgbGV0IHZhbHVlO1xuICBlbC5pbm5lckhUTUwgPSBodG1sO1xuICB2YWx1ZSA9IGVsLnZhbHVlO1xuICBlbC5yZW1vdmUoKTtcbiAgZWwgPSBudWxsO1xuICByZXR1cm4gdmFsdWU7XG59O1xuXG4vKipcbiAqIENoYW5nZSBzdHJpbmcgZnJvbSBkYXNoIHRvIGNhbWVsIGNhc2UgZm9ybWF0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMudG9DYW1lbENhc2UgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXFcrKC4pL2csIChtLCBjKSA9PiBjLnRvVXBwZXJDYXNlKCkpO1xufTtcblxuLyoqXG4gKiBDYXBpdGFsaXplIHRoZSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5jYXBpdGFsaXplID0gZnVuY3Rpb24oc3RyKSB7XG4gIHJldHVybiBzdHJbMF0udG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHN0cmluZyBmcm9tIGNhbWVsIHRvIGRhc2ggY2FzZSBmb3JtYXRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy50b0Rhc2hDYXNlID0gZnVuY3Rpb24oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCAobSwgYykgPT4gYC0ke2MudG9Mb3dlckNhc2UoKX1gKTtcbn07XG5cbi8qKlxuICogR2V0IG5lc3RlZCBvYmplY3QgcHJvcGVydHkgYnkgYXJyYXkga2V5c1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIDVcbiAqIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuZ2V0UHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QpIHtcbiAgbGV0IGN1cnJlbnQ7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKChvLCBrKSA9PiB7XG4gICAgaSsrO1xuXG4gICAgaWYgKHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gbztcbiAgICB9XG5cbiAgICBpZiAob1trXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgKGkgPT0gbGVuZ3RoKSAmJiAoY3VycmVudCA9IG9ba10pO1xuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiBjdXJyZW50O1xufTtcblxuLyoqXG4gKiBDaGVjayBuZXN0ZWQgb2JqZWN0cyB0cmVlIGhhcyBwcm9wZXJ0eSBvciBub3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB0cnVlXG4gKiB1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0KSB7XG4gIGxldCBoYXMgPSBmYWxzZTtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoKG8sIGspID0+IHtcbiAgICBpKys7XG5cbiAgICBpZiAodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiAhIW87XG4gICAgfVxuXG4gICAgaWYgKCFvLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgKGkgPT0gbGVuZ3RoKSAmJiAoaGFzID0gby5oYXNPd25Qcm9wZXJ0eShrKSk7XG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIGhhcztcbn07XG5cbi8qKlxuICogU2V0IG5lc3RlZCBvYmplY3RzIHRyZWUgcHJvcGVydHlcbiAqIFJldHVybnMgY2hhbmdlZCBwcm9wZXJ0eSBvYmplY3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB7eTogNn1cbiAqIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19LCAobGFzdCwgdmFsKSA9PiBsYXN0PyA2OiAodmFsIHx8IHt9KSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCwgZm4pIHtcbiAgbGV0IGN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKChvLCBrKSA9PiB7XG4gICAgaSsrO1xuXG4gICAgaWYgKHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFvLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICBvW2tdID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIG9ba10gPSBmbihpID09IGxlbmd0aCwgb1trXSk7XG4gICAgY3VycmVudCA9IG87XG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIGN1cnJlbnQ7XG59O1xuXG4vKipcbiAqXG4gKiBEZWxldGUgcHJvcGVydHkgZnJvbSBuZXN0ZWQgb2JqZWN0cyB0cmVlXG4gKiBSZXR1cm5zIGRlbGV0ZWQgcHJvcGVydHkgdmFsdWVcbiAqIFlvdSBjYW4gY2FuY2VsIGRlbGV0aW5nIGlmIHdpbGwgcmV0dXJuIGZhbHNlIGluIHRoZSBjYWxsYmFjayBmdW5jdGlvblxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIDVcbiAqIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19KTtcbiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyA1XG4gKiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSwgdmFsID0+IHZhbCAhPSA1KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbZm5dXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QsIGZuKSB7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IHZhbHVlO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoKG8sIGspID0+IHtcbiAgICBpKys7XG5cbiAgICBpZiAodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBpZiAoaSA9PSBsZW5ndGgpIHtcbiAgICAgIHZhbHVlID0gb1trXTtcbiAgICAgICghZm4gfHwgZm4odmFsdWUpKSAmJiAoZGVsZXRlIG9ba10pO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgdGFyZ2V0IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cblxudXRpbHMuZ2V0RW51bWVyYWJsZVByb3BlcnR5VGFyZ2V0ID0gZnVuY3Rpb24odGFyZ2V0LCBrZXkpIHtcbiAgY29uc3QgY2hlY2sgPSAob2JqKSA9PiB7XG4gICAgaWYgKG9iai5wcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGxldCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuXG4gICAgaWYgKCFwcm90bykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoZWNrKHByb3RvKTtcbiAgfTtcblxuICByZXR1cm4gY2hlY2sodGFyZ2V0KTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBvd24gcHJvcGVydHkgdGFyZ2V0IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnV0aWxzLmdldE93blByb3BlcnR5VGFyZ2V0ID0gZnVuY3Rpb24odGFyZ2V0LCBrZXkpIHtcbiAgY29uc3QgY2hlY2sgPSAob2JqKSA9PiB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGxldCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuXG4gICAgaWYgKCFwcm90bykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoZWNrKHByb3RvKTtcbiAgfTtcblxuICByZXR1cm4gY2hlY2sodGFyZ2V0KTtcbn07XG5cbi8qKlxuICogR2VuZXJhdGUgcmFuZG9tIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuY3JlYXRlUmFuZG9tU3RyaW5nID0gZnVuY3Rpb24obGVuZ3RoID0gMTYsIGZuID0gbnVsbCkge1xuICBsZXQgc3RyID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIGxlbmd0aCArIDIpO1xuICBsZXQgdmFsID0gJyc7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBzdHIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjY2KSB7XG4gICAgICB2YWwgKz0gc3RyW2ldLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFsICs9IHN0cltpXTtcbiAgICB9XG4gIH1cblxuICBpZiAoZm4gJiYgZm4odmFsKSkge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZVJhbmRvbVN0cmluZyhsZW5ndGgsIGZuKTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1dGlscztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IGZvciBlbGVtZW50cyB3aGljaCBoYXZlIGFzeW5jIGF0dHJpYnV0ZSBjb250ZW50LlxyXG4gKiBcclxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxyXG4gKiBcclxuICogQHRhZyB1cmxcclxuICogQGF0dHIge3N0cmluZ30gW3VybF1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVybCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIG1hdGNoZXMgPSAnW3VybF0nO1xyXG5cclxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XHJcbiAgICBzdXBlciguLi5hcmdzKTtcclxuICAgIHRoaXMudXJsQXR0cmlidXRlID0gJ3NyYyc7XHJcbiAgfVxyXG5cclxuICBjb21waWxlZCgpIHtcclxuICAgIHRoaXMuYXR0cigndXJsJywgdGhpcy5zZXRVcmwpO1xyXG4gIH1cclxuXHJcbiAgc2V0VXJsKHVybCkge1xyXG4gICAgdGhpcy5hdHRyc1t0aGlzLnVybEF0dHJpYnV0ZV0gPSB1cmw7XHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdXJsLmpzIiwiaW1wb3J0IEFraWxpIGZyb20gJy4vYWtpbGkuanMnO1xuaW1wb3J0IFNjb3BlIGZyb20gJy4vc2NvcGUuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9zZXJ2aWNlcy9yZXF1ZXN0LmpzJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3NlcnZpY2VzL3N0b3JlLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcblxuZXhwb3J0IGNvbnN0IGV2YWx1YXRpb25SZWdleCA9IC9cXCR7KCgoPyFcXCR7KS4pKil9LztcbmV4cG9ydCBjb25zdCBldmFsdWF0aW9uUmVnZXhHbG9iYWwgPSBuZXcgUmVnRXhwKGV2YWx1YXRpb25SZWdleC5zb3VyY2UsIFwiZ1wiKTtcbmV4cG9ydCBjb25zdCBzeXN0ZW1BdHRyaWJ1dGVzID0gWydjb21wb25lbnQnLCAnc2NvcGUnXTtcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZyb20gd2hpY2ggYWxsIGNvbXBvbmVudHMgYXJlIGluaGVyaXRlZFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICcnO1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbXTtcbiAgc3RhdGljIGV2ZW50cyA9IFtdO1xuICBzdGF0aWMgY29udHJvbEF0dHJpYnV0ZXMgPSBmYWxzZTtcbiAgc3RhdGljIHNhdmVBdHRyaWJ1dGVQcm94eUluID0gZmFsc2U7XG4gIHN0YXRpYyBzYXZlQXR0cmlidXRlUHJveHlPdXQgPSBmYWxzZTtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gZmFsc2U7XG4gIHN0YXRpYyB0ZW1wbGF0ZSA9ICcnO1xuICBzdGF0aWMgdGVtcGxhdGVVcmwgPSAnJztcbiAgc3RhdGljIHNjb3BlID0gbnVsbDtcblxuICAvKipcbiAgICogRnVuY3Rpb24gdG8gZGVmaW5lIHRoZSBjb21wb25lbnRcbiAgICovXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdjb21wb25lbnQnLCBDb21wb25lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIHRoZSBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBleHByZXNzaW9uXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbZ2xvYmFsc11cbiAgICovXG4gIHN0YXRpYyBwYXJzZShjb250ZXh0LCBleHByZXNzaW9uLCBnbG9iYWxzID0ge30pIHtcbiAgICBnbG9iYWxzID0geyAuLi5Ba2lsaS5vcHRpb25zLmdsb2JhbHMsIC4uLmdsb2JhbHN9O1xuICAgIGNvbnN0IGtleXMgPSBbXTtcbiAgICBjb25zdCB2YXJzID0gW107XG4gICAgY29uc3QgZXhwcyA9IHV0aWxzLnNwbGl0KGV4cHJlc3Npb24sICc7JywgWydcIicsIFwiJ1wiLCAnYCddKTsgIFxuICAgIGV4cHNbZXhwcy5sZW5ndGggLSAxXSA9IGByZXR1cm4gJHtleHBzW2V4cHMubGVuZ3RoIC0gMV19YDtcblxuICAgIGZvcihsZXQga2V5IGluIGdsb2JhbHMpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgdmFycy5wdXNoKGdsb2JhbHNba2V5XSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBuZXcgRnVuY3Rpb24oLi4ua2V5cywgYCR7ZXhwcy5qb2luKCc7ICcpfWApLmFwcGx5KGNvbnRleHQsIHZhcnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqIFxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW3Njb3BlXSBcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsLCBzY29wZSA9IHt9KSB7XG4gICAgaWYoIShlbCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBtdXN0IHBhc3MgYW4gaHRtbCBlbGVtZW50IHRvIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3JgKTtcbiAgICB9XG5cbiAgICB0aGlzLl9faXNNb3VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2lzQ29tcGlsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9faXNSZXNvbHZlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fcHJldmVudCA9IGZhbHNlO1xuICAgIHRoaXMuX19iaW5kaW5ncyA9IHt9O1xuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSBudWxsO1xuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IGZhbHNlO1xuICAgIHRoaXMuX19jb21waWxpbmcgPSBudWxsO1xuICAgIHRoaXMuX19kaXNhYmxlUHJveHkgPSB7fTtcbiAgICB0aGlzLl9fZGlzYWJsZUF0dHJUcmlnZ2VyaW5nID0gZmFsc2U7XG4gICAgdGhpcy5fX2NoaWxkcmVuID0gW107XG4gICAgdGhpcy5fX3BhcmVudCA9IG51bGw7XG4gICAgdGhpcy5fX3BhcmVudHMgPSBbXTtcbiAgICB0aGlzLl9fYXR0cnMgPSB7fTtcbiAgICB0aGlzLl9fYXR0ckxpbmtzID0ge307XG4gICAgdGhpcy5fX3N0b3JlTGlua3MgPSB7fTtcbiAgICB0aGlzLl9fYXR0cmlidXRlT2YgPSBudWxsO1xuICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50ID0gdGhpcztcbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgdGhpcy5lbCA9IGVsO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBjb21waWxhdGlvbiBvcHRpb25zIFxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZUNvbXBpbGF0aW9uT3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4geyBcbiAgICAgIGNoZWNrQ2hhbmdlczogZmFsc2UsIFxuICAgICAgc2V0RXZlbnRzOiB0cnVlLFxuICAgICAgc2V0UGFyZW50czogdHJ1ZSxcbiAgICAgIHNldEJvb2xlYW5BdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgZGVmaW5lQXR0cmlidXRlczogdHJ1ZSxcbiAgICAgIC4uLm9wdGlvbnMgXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgcmVjb21waWxhdGlvbiBvcHRpb25zIFxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZVJlY29tcGlsYXRpb25PcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB7IFxuICAgICAgLi4udGhpcy5fX2NyZWF0ZUNvbXBpbGF0aW9uT3B0aW9ucygpLCAgICBcbiAgICAgIHNldEV2ZW50czogZmFsc2UsXG4gICAgICBzZXRQYXJlbnRzOiBmYWxzZSxcbiAgICAgIHNldEJvb2xlYW5BdHRyaWJ1dGVzOiBmYWxzZSxcbiAgICAgIGRlZmluZUF0dHJpYnV0ZXM6IGZhbHNlLFxuICAgICAgLi4ub3B0aW9ucyBcbiAgICB9O1xuICB9XG4gXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gdGhlIHJlY29tcGlsYXRpb25cbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZWNvbXBpbGUob3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IHRydWU7XG4gICAgdGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQuX19kaXNhYmxlUHJveHkgPSB7fTtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0gdGhpcy5fX2NyZWF0ZVJlY29tcGlsYXRpb25PcHRpb25zKG9wdGlvbnMpOyAgICBcbiAgICB0aGlzLl9fY29tcGlsaW5nLnNldEV2ZW50cyAmJiB0aGlzLl9fc2V0RXZlbnRzKCk7XG4gICAgdGhpcy5fX2NvbXBpbGluZy5zZXRQYXJlbnRzICYmIHRoaXMuX19zZXRQYXJlbnRzKCk7XG4gICAgdGhpcy5fX2NvbXBpbGluZy5zZXRCb29sZWFuQXR0cmlidXRlcyAmJiB0aGlzLl9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKTtcbiAgICB0aGlzLl9fY29tcGlsaW5nLmRlZmluZUF0dHJpYnV0ZXMgJiYgdGhpcy5fX2RlZmluZUF0dHJpYnV0ZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gdGhlIGNyZWF0aW9uXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlKCkge1xuICAgIHRoaXMuX19jb21waWxpbmcgPSB0aGlzLl9fY3JlYXRlQ29tcGlsYXRpb25PcHRpb25zKCk7ICAgXG4gICAgdGhpcy5fX2luaXRpYWxpemUoKTtcbiAgICB0aGlzLl9fc2V0RXZlbnRzKCk7XG4gICAgdGhpcy5fX3NldFBhcmVudHMoKTtcbiAgICB0aGlzLl9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKTtcbiAgICB0aGlzLl9fZGVmaW5lQXR0cmlidXRlcygpO1xuICAgIEFraWxpLmlzb2xhdGUoKCkgPT4gdGhpcy5jcmVhdGVkKHRoaXMuYXR0cnMpKTsgICAgICAgXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIG9uIHRoZSBjb21waWxhdGlvblxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgX19jb21waWxlKCkge1xuICAgIGxldCBjb250cm9sID0gdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzIHx8ICF0aGlzLl9fZXZhbHVhdGVQYXJlbnQ7XG4gICAgbGV0IHAgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB0aGlzLl9fYXR0cmlidXRlT2YgPSBjb250cm9sPyB0aGlzOiB0aGlzLl9fZXZhbHVhdGVQYXJlbnQuX19ha2lsaTtcblxuICAgIGlmICghdGhpcy5fX3JlY29tcGlsaW5nIHx8IHRoaXMuX19jb21waWxpbmcubmV3UGFyZW50IHx8IHRoaXMuX19jb250cm9sQXR0cmlidXRlcykge1xuICAgICAgdGhpcy5fX2ludGVycG9sYXRlQXR0cmlidXRlcyh0aGlzLmVsLCB0aGlzLl9fYXR0cmlidXRlT2YpO1xuICAgIH1cblxuICAgIGNvbnN0IGludGVycG9sYXRlID0gKGNoaWxkcmVuLCBwYXJlbnQpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PSAzICYmIHRoaXMuX19pbml0aWFsaXplTm9kZShjaGlsZCwgcGFyZW50LCB0cnVlKSkgeyBcbiAgICAgICAgICB0aGlzLl9fZXZhbHVhdGVOb2RlKGNoaWxkLCB0aGlzLl9fY29tcGlsaW5nPyB0aGlzLl9fY29tcGlsaW5nLmNoZWNrQ2hhbmdlczogZmFsc2UpOyAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoaWxkLm5vZGVUeXBlID09IDEgJiYgIWNoaWxkLl9fYWtpbGkpIHtcbiAgICAgICAgICB0aGlzLl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKGNoaWxkKTtcbiAgICAgICAgICBpbnRlcnBvbGF0ZShjaGlsZC5jaGlsZE5vZGVzLCBjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaW50ZXJwb2xhdGUodGhpcy5lbC5jaGlsZE5vZGVzLCB0aGlzLmVsKTtcbiAgICB0aGlzLl9faXNNb3VudGVkID0gdHJ1ZTtcbiAgICBsZXQgcmVzO1xuXG4gICAgaWYgKCF0aGlzLl9fcmVjb21waWxpbmcpIHtcbiAgICAgIHJlcyA9IEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uQ29tcGlsZWQgJiYgdGhpcy5hdHRycy5vbkNvbXBpbGVkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5jb21waWxlZCgpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlVXJsKSB7XG4gICAgICAgIHAgPSByZXF1ZXN0LmdldCh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlVXJsLCB7IGNhY2hlOiB0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlQ2FjaGUgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLl9fY29udGVudDtcbiAgICAgICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCByZXMuZGF0YSk7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX19jb250ZW50OyAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0cnMub25SZWNvbXBpbGVkICYmIHRoaXMuYXR0cnMub25SZWNvbXBpbGVkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgICB0aGlzLnJlY29tcGlsZWQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLl9fcmVjb21waWxpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0gbnVsbDtcblxuICAgIHJldHVybiBwLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5fX2lzQ29tcGlsZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlIHRoZSBjb21wb25lbnRcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIF9fcmVzb2x2ZSgpIHtcbiAgICBpZiAodGhpcy5fX3JlY29tcGlsaW5nKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuYXR0cnMub25SZXNvbHZlZCAmJiB0aGlzLmF0dHJzLm9uUmVzb2x2ZWQudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMucmVzb2x2ZWQoKSkudGhlbihyZXMgPT4ge1xuICAgICAgdGhpcy5fX2lzUmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJ0IG9mIHRoZSB7QHNlZSBDb21wb25lbnQjX19jb21waWxlfSBtZXRob2RcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbml0aWFsaXplKCkgeyAgICBcbiAgICBsZXQgcGFyZW50ID0gQWtpbGkuZ2V0QWtpbGlQYXJlbnRzKHRoaXMuZWwsIGZhbHNlKTsgICAgIFxuICAgIGxldCBTY29wZSA9IHRoaXMuY29uc3RydWN0b3Iuc2NvcGUgfHwgQWtpbGkuU2NvcGU7XG4gICAgbGV0IHNjb3BlO1xuICAgIGxldCBpc1Jvb3QgPSBBa2lsaS5fX3Jvb3QgPT09IHRoaXMuZWw7XG4gICAgdGhpcy5lbC5fX2FraWxpID0gdGhpcztcblxuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIHNjb3BlID0gbmV3IFNjb3BlKHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdzY29wZScpIHx8IEFraWxpLmNyZWF0ZVNjb3BlTmFtZSgpLCB0aGlzLmVsLCB0aGlzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzY29wZSA9IG5ldyBTY29wZShpc1Jvb3Q/ICdyb290JzogQWtpbGkuY3JlYXRlU2NvcGVOYW1lKCksIHRoaXMuZWwsIHRoaXMpO1xuICAgICAgaXNSb290ICYmIChBa2lsaS5yb290ID0gdGhpcyk7XG4gICAgfVxuXG4gICAgbGV0IF9fc2NvcGUgPSBzY29wZTtcbiAgICBsZXQgX3Njb3BlID0gT2JqZWN0LmFzc2lnbihzY29wZSwgdGhpcy5zY29wZSk7XG4gICAgbGV0IGNvbnRyb2xBdHRyaWJ1dGVzID0gdGhpcy5jb25zdHJ1Y3Rvci5jb250cm9sQXR0cmlidXRlcztcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5jb25zdHJ1Y3Rvci5ldmVudHM7XG5cbiAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZSkge1xuICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgdGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGVVcmwpIHtcbiAgICAgIHRoaXMuX19jb250ZW50ID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIH1cblxuICAgIHRoaXMuX19zY29wZSA9IF9fc2NvcGU7XG4gICAgdGhpcy5fX2V2ZW50cyA9IGV2ZW50cztcbiAgICB0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMgPSBjb250cm9sQXR0cmlidXRlcztcbiAgICB0aGlzLl9fc2F2ZUF0dHJpYnV0ZVByb3h5SW4gPSB0aGlzLmNvbnN0cnVjdG9yLnNhdmVBdHRyaWJ1dGVQcm94eUluO1xuICAgIHRoaXMuX19zYXZlQXR0cmlidXRlUHJveHlPdXQgPSB0aGlzLmNvbnN0cnVjdG9yLnNhdmVBdHRyaWJ1dGVQcm94eU91dDtcblxuICAgIEFraWxpLmFkZFNjb3BlKHNjb3BlKTtcbiAgICB0aGlzLnNjb3BlID0gdGhpcy5fX25lc3RlZE9ic2VydmUoX3Njb3BlLCBbXSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGJvb2xlYW4gYXR0cmlidXRlc1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldEJvb2xlYW5BdHRyaWJ1dGVzKCkge1xuICAgIHRoaXMuYm9vbGVhbkF0dHJpYnV0ZXMgPSBbXS5jb25jYXQoQWtpbGkuaHRtbEJvb2xlYW5BdHRyaWJ1dGVzLCB0aGlzLmNvbnN0cnVjdG9yLmJvb2xlYW5BdHRyaWJ1dGVzKTtcblxuICAgIGNvbnN0IHNldEF0dHIgPSAoZWwpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBhdHRycyA9IGVsLmF0dHJpYnV0ZXMsIGwgPSBhdHRycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IG5vZGUgPSBhdHRyc1tpXTtcblxuICAgICAgICBpZiAodGhpcy5ib29sZWFuQXR0cmlidXRlcy5pbmRleE9mKG5vZGUubm9kZU5hbWUpICE9IC0xKSB7XG4gICAgICAgICAgaWYgKGVsLmhhc0F0dHJpYnV0ZShgYm9vbGVhbi0ke25vZGUubm9kZU5hbWV9YCkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShgYm9vbGVhbi0ke25vZGUubm9kZU5hbWV9YCwgZWwuZ2V0QXR0cmlidXRlKG5vZGUubm9kZU5hbWUpIHx8IG5vZGUubm9kZU5hbWUpO1xuICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShub2RlLm5vZGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGVsLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBlbC5jaGlsZHJlbltpXTtcblxuICAgICAgICBpZiAoIWNoaWxkLl9fYWtpbGkpIHtcbiAgICAgICAgICBzZXRBdHRyKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBzZXRBdHRyKHRoaXMuZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBldmVudHNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXRFdmVudHMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLl9fZXZlbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGV2ID0gdGhpcy5fX2V2ZW50c1tpXTtcbiAgICAgICEvXm9uLS9pLnRlc3QoZXYpICYmIChldiA9ICdvbi0nICsgZXYpO1xuXG4gICAgICBpZiAoIXRoaXMuZWwuaGFzQXR0cmlidXRlKGV2KSkge1xuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZShldiwgJycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgY29tcG9uZW50IHBhcmVudHNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXRQYXJlbnRzKCkge1xuICAgIGxldCBwYXJlbnRzID0gQWtpbGkuZ2V0QWtpbGlQYXJlbnRzKHRoaXMuZWwpO1xuXG4gICAgaWYgKCFwYXJlbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBuZXdQYXJlbnQgPSB0aGlzLl9fcGFyZW50ICE9PSBwYXJlbnRzWzBdO1xuICAgIGxldCBldmFsdWF0ZVBhcmVudCA9IG51bGw7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHBhcmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcGFyZW50ID0gcGFyZW50c1tpXTtcblxuICAgICAgaWYgKCFwYXJlbnQuX19ha2lsaS5jb25zdHJ1Y3Rvci50cmFuc3BhcmVudCkge1xuICAgICAgICBldmFsdWF0ZVBhcmVudCA9IHBhcmVudDtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9fY29tcGlsaW5nLm5ld1BhcmVudCA9IG5ld1BhcmVudDtcbiAgICBuZXdQYXJlbnQgJiYgdGhpcy5fX2RldGFjaCgpO1xuXG4gICAgaWYgKHRoaXMuY29uc3RydWN0b3IudHJhbnNwYXJlbnQpIHtcbiAgICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50ID0gZXZhbHVhdGVQYXJlbnQuX19ha2lsaTtcbiAgICB9XG5cbiAgICB0aGlzLl9fZXZhbHVhdGVQYXJlbnQgPSBldmFsdWF0ZVBhcmVudDtcbiAgICB0aGlzLl9fcGFyZW50ID0gcGFyZW50c1swXTtcbiAgICB0aGlzLl9fcGFyZW50cyA9IHBhcmVudHM7XG4gICAgdGhpcy5zY29wZS5fX3BhcmVudCA9IHRoaXMuX19ldmFsdWF0ZVBhcmVudC5fX2FraWxpLnNjb3BlO1xuICAgICF0aGlzLl9fcmVjb21waWxpbmcgJiYgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fYWRkQ2hpbGQodGhpcy5lbCk7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMuc2NvcGUsIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX3Njb3BlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgY2hpbGQgZWxlbWVudCB0byB0aGUgbGlzdFxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYWRkQ2hpbGQoZWwpIHtcbiAgICB0aGlzLl9fY2hpbGRyZW4ucHVzaChlbCk7XG4gIH1cblxuICAvKipcbiAgICogU3BsaWNlIGNoaWxkIGZyb20gdGhlIGxpc3RcbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NwbGljZUNoaWxkKGVsKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLl9fY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLl9fY2hpbGRyZW5baV07XG5cbiAgICAgIGlmIChjaGlsZCA9PT0gZWwpIHtcbiAgICAgICAgdGhpcy5fX2NoaWxkcmVuLnNwbGljZShpLCAxKTtcbiAgICAgICAgaS0tO1xuICAgICAgICBsLS07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFlvdSBjYW4gY2hhbmdlIGV4cHJlc3Npb24gYmVmb3JlIHBhcnNpbmcgaGVyZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwcmVzc2lvblxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRQYXJzZWRFeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBub2RlIGhhcyBhbnkgcHJvcGVydHkgY2hhbmdlcyBvciBub3RcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NoZWNrRXZhbHVhdGlvbihub2RlKSB7XG4gICAgaWYgKCFPYmplY3Qua2V5cyhub2RlLl9fcHJvcGVydGllcykubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBrIGluIG5vZGUuX19wcm9wZXJ0aWVzKSB7XG4gICAgICBpZiAoIW5vZGUuX19wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgcHJvcCA9IG5vZGUuX19wcm9wZXJ0aWVzW2tdO1xuICAgICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMocHJvcC5rZXlzLCBwcm9wLmNvbXBvbmVudC5fX3Njb3BlKTtcblxuICAgICAgaWYgKCF1dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSh2YWx1ZSwgcHJvcC52YWx1ZSwgcHJvcC5jb3B5KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogIENoZWNrIG5vZGUgaGFzIGNoYW5nZWQgb24gdGhlIGNlcnRhaW4ga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NoZWNrTm9kZVByb3BlcnR5Q2hhbmdlKG5vZGUsIGtleXMsIHZhbHVlKSB7XG4gICAgbGV0IHByb3AgPSB0aGlzLl9fZ2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMpO1xuICAgIFxuICAgIGlmICghcHJvcCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuICF1dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSh2YWx1ZSwgcHJvcC52YWx1ZSwgcHJvcC5jb3B5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSBub2RlIGV4cHJlc3Npb25cbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlKG5vZGUpIHtcbiAgICBsZXQgY291bnRlciA9IDA7XG4gICAgbGV0IGF0dHJpYnV0ZVZhbHVlO1xuICAgIGxldCBleHByZXNzaW9uO1xuXG4gICAgaWYgKG5vZGUuX19jb21wb25lbnQucGFyZW50cygoY29tKSA9PiBjb20uX19wcmV2ZW50KS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBub2RlLl9fZXhwcmVzc2lvbjtcbiAgICB9XG5cbiAgICBpZiAoIShub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpICYmIG5vZGUuX19jb21wb25lbnQuX19wcmV2ZW50KSB7XG4gICAgICByZXR1cm4gbm9kZS5fX2V4cHJlc3Npb247XG4gICAgfVxuICAgIFxuICAgIGxldCByZXMgPSBub2RlLl9fZXhwcmVzc2lvbi5yZXBsYWNlKGV2YWx1YXRpb25SZWdleEdsb2JhbCwgKG0sIGQpID0+IHtcbiAgICAgIGNvdW50ZXIrKztcbiAgICAgIGxldCBldmFsdWF0ZTtcbiAgICAgIGxldCBldmFsdWF0aW9uID0gW107XG4gICAgICBsZXQgZXhpc3RpbmdCaW5kaW5ncyA9IHt9O1xuICAgICAgbGV0IHBhcmVudEJpbmRpbmdzID0ge307XG4gICAgICBsZXQgcGFyc2VWYWx1ZSA9IG5vZGUuX19jb21wb25lbnQuX19nZXRQYXJzZWRFeHByZXNzaW9uKGQpO1xuICAgICAgQWtpbGkuX19ldmFsdWF0aW9uID0geyBub2RlOiBub2RlLCBsaXN0OiBbXSwgY29tcG9uZW50OiBub2RlLl9fY29tcG9uZW50IH07XG4gICAgICBcbiAgICAgIHRyeSB7XG4gICAgICAgIGV2YWx1YXRlID0gdGhpcy5jb25zdHJ1Y3Rvci5wYXJzZSh0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5zY29wZSwgcGFyc2VWYWx1ZSk7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGxldCB0YWdOYW1lID0gbm9kZS5fX2NvbXBvbmVudC5lbC50YWdOYW1lO1xuICAgICAgICBsZXQgYXR0ck5hbWUgPSBub2RlLl9fY29tcG9uZW50LmVsLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50Jyk7XG4gICAgICAgIGxldCBjb21wb25lbnROYW1lID0gKGF0dHJOYW1lIHx8IHRhZ05hbWUpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGxldCBlbGVtZW50TmFtZSA9IG5vZGUuX19lbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbGV0IGF0dHJpYnV0ZU5hbWUgPSAobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKT8gbm9kZS5uYW1lLnRvTG93ZXJDYXNlKCk6ICcnOyAgICAgICAgXG4gICAgICAgIGxldCBtZXNzYWdlcyA9IFsgZXJyLm1lc3NhZ2UsIG5vZGUuX19leHByZXNzaW9uIF07XG4gICAgICAgIGF0dHJpYnV0ZU5hbWUgJiYgbWVzc2FnZXMucHVzaChgW2F0dHJpYnV0ZSAke2F0dHJpYnV0ZU5hbWV9XWApO1xuICAgICAgICBtZXNzYWdlcyA9IG1lc3NhZ2VzLmNvbmNhdChbIGBbZWxlbWVudCAke2VsZW1lbnROYW1lfV1gLCBgW2NvbXBvbmVudCAke2NvbXBvbmVudE5hbWV9XWAgXSk7XG4gICAgICAgIHRocm93IGBFeHByZXNzaW9uIGVycm9yOiBgICsgbWVzc2FnZXMuam9pbignXFxuXFx0YXQgJyk7XG4gICAgICB9XG5cbiAgICAgIGlmKEFraWxpLl9fZXZhbHVhdGlvbikge1xuICAgICAgICBldmFsdWF0aW9uID0gQWtpbGkuX19ldmFsdWF0aW9uLmxpc3Q7XG4gICAgICAgIEFraWxpLl9fZXZhbHVhdGlvbi5saXN0ID0gbnVsbDtcbiAgICAgICAgQWtpbGkuX19ldmFsdWF0aW9uID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgZm9yIChsZXQgaSA9IGV2YWx1YXRpb24ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgbGV0IGRhdGEgPSBldmFsdWF0aW9uW2ldO1xuICAgICAgICBsZXQgaGFzaCA9IGRhdGEuY29tcG9uZW50Ll9fY3JlYXRlS2V5c0hhc2goZGF0YS5rZXlzKTtcbiAgICAgICAgbGV0IHBhcmVudHNIYXNoID0gZGF0YS5jb21wb25lbnQuX19jcmVhdGVLZXlzSGFzaChkYXRhLnBhcmVudHMpO1xuICAgICAgIFxuICAgICAgICBpZiAoZGF0YS5ub3RCaW5kaW5nKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXhpc3RpbmdCaW5kaW5nc1toYXNoXSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBhcmVudFZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoZGF0YS5wYXJlbnRzLCBkYXRhLmNvbXBvbmVudC5fX3Njb3BlKTtcbiAgICAgICAgbGV0IGV2YWxDb21wb25lbnQgPSBub2RlLl9fYXR0cmlidXRlT2YgfHwgbm9kZS5fX2NvbXBvbmVudDtcblxuICAgICAgICBpZiAocGFyZW50VmFsdWUgJiYgdHlwZW9mIHBhcmVudFZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgaWYoQWtpbGkub3B0aW9ucy5kZWJ1ZyAmJiBwYXJlbnRCaW5kaW5nc1twYXJlbnRzSGFzaF0gPT0gNTApIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oW1xuICAgICAgICAgICAgICBgRm9yIGhpZ2hlciBwZXJmb3JtYW5jZSwgZG9uJ3QgbG9vcCBQcm94eSBhcnJheXMvb2JqZWN0cyBpbnNpZGUgZXhwcmVzc2lvbiBmdW5jdGlvbnMsIG9yIHVzZSBBa2lsaS51bmV2YWx1YXRlKCkgdG8gd3JhcCB5b3UgY29kZS5gLFxuICAgICAgICAgICAgICBgJHsgbm9kZS5fX2V4cHJlc3Npb24gfWAsXG4gICAgICAgICAgICAgIGBzY29wZSBwcm9wZXJ0eSBcIiR7IGRhdGEucGFyZW50cy5qb2luKCcuJyl9XCJgXG4gICAgICAgICAgICBdLmpvaW4oJ1xcblxcdGF0ICcpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgIXBhcmVudEJpbmRpbmdzW3BhcmVudHNIYXNoXT8gcGFyZW50QmluZGluZ3NbcGFyZW50c0hhc2hdID0gMTogcGFyZW50QmluZGluZ3NbcGFyZW50c0hhc2hdKys7XG4gICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHV0aWxzLmlzU2NvcGVQcm94eShwYXJlbnRWYWx1ZSkgJiYgXG4gICAgICAgICAgZGF0YS5jb21wb25lbnQgIT09IGV2YWxDb21wb25lbnQuX19ldmFsdWF0aW9uQ29tcG9uZW50ICYmIFxuICAgICAgICAgIGRhdGEuY29tcG9uZW50ID09PSBkYXRhLnJlYWxDb21wb25lbnRcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gIFxuXG4gICAgICAgIGRhdGEuY29tcG9uZW50Ll9fYmluZEFuZFNldFByb3BlcnR5KG5vZGUsIGRhdGEua2V5cywgZGF0YS5ldmFsdWF0ZWQpO1xuICAgICAgICBleGlzdGluZ0JpbmRpbmdzW2hhc2hdID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgZXhpc3RpbmdCaW5kaW5ncyA9IG51bGw7XG4gICAgICBldmFsdWF0aW9uID0gbnVsbDtcblxuICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cikge1xuICAgICAgICBleHByZXNzaW9uID0gbTtcbiAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBldmFsdWF0ZTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZShldmFsdWF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZXZhbHVhdGUgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZXZhbHVhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGUpIHtcbiAgICAgICAgICByZXR1cm4gZXZhbHVhdGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGV2YWx1YXRlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgcmVzLCBjb3VudGVyLCBleHByZXNzaW9uLCBhdHRyaWJ1dGVWYWx1ZSB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgdGhlIG5vZGUgYW5kIHNldCBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtldmFsdWF0ZWRdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYmluZEFuZFNldFByb3BlcnR5KG5vZGUsIGtleXMsIGV2YWx1YXRlZCkge1xuICAgIGxldCBiaW5kID0gdGhpcy5fX2dldEJvdW5kTm9kZShrZXlzLCBub2RlKTtcbiAgICBsZXQgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpO1xuXG4gICAgaWYgKCFiaW5kKSB7XG4gICAgICB0aGlzLl9fYmluZChrZXlzLCB7IG5vZGUgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fX3NldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzLCB2YWx1ZSwgZXZhbHVhdGVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOZXN0ZWQgZXZhbHVhdGlvbiBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtib29sZWFufSBbd2l0aG91dFBhcmVudHM9ZmFsc2VdIC0gaWYgdHJ1ZSBldmFsdWF0aW9uIHdpbGwgYmUgb25seSBmb3IgdGhlIGN1cnJlbnQga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlTmVzdGVkKGtleXMsIHdpdGhvdXRQYXJlbnRzID0gZmFsc2UpIHtcbiAgICBsZXQgc2NvcGUgPSB0aGlzLl9fc2NvcGU7XG4gICAgbGV0IHByb3BzID0gW107ICAgIFxuICAgIFxuICAgIGlmICghd2l0aG91dFBhcmVudHMpIHtcbiAgICAgIGxldCBsYXN0UHJvcHMgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgbGV0IHZhbHVlO1xuXG4gICAgICAgIGxhc3RQcm9wcyA9IFsuLi5sYXN0UHJvcHMsIGtleV07XG4gICAgICAgIHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMobGFzdFByb3BzLCBzY29wZSk7XG4gICAgICAgIHByb3BzLnB1c2goeyBrZXlzOiBsYXN0UHJvcHMsIHZhbHVlOiB2YWx1ZX0pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHByb3BzLnB1c2goeyBrZXlzOiBrZXlzLCB2YWx1ZTogdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgc2NvcGUpfSk7XG4gICAgfVxuXG4gICAgbGV0IHByb3BzTGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gICAgY29uc3QgZWxFdmFsdWF0ZSA9IChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBjb21wb25lbnQgPSBlbGVtZW50Ll9fYWtpbGk7ICAgICBcblxuICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCBwcm9wc0xlbmd0aDsgbSsrKSB7XG4gICAgICAgIGxldCBwcm9wID0gcHJvcHNbbV07XG4gICAgICAgIGxldCBkYXRhO1xuICAgICAgICBcbiAgICAgICAgaWYoY29tcG9uZW50ID09PSB0aGlzKSB7XG4gICAgICAgICAgbGV0IGJpbmQgPSBjb21wb25lbnQuX19nZXRCaW5kKHByb3Aua2V5cyk7XG4gICAgICAgICAgZGF0YSA9IGJpbmQ/IChiaW5kLl9fZGF0YSB8fCBbXSk6IFtdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRhdGEgPSBjb21wb25lbnQuX19nZXRBbGxCaW5kcyhwcm9wLmtleXMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIWRhdGEgfHwgIWRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgICBmb3IgKGxldCBrID0gMCwgYyA9IGRhdGEubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICAgICAgbGV0IGJpbmQgPSBkYXRhW2tdOyBcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAoY29tcG9uZW50Ll9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2UoYmluZC5ub2RlLCBwcm9wLmtleXMsIHByb3AudmFsdWUpKSB7ICAgICBcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVLZXlzKHByb3Aua2V5cyk7XG4gICAgICAgICAgICBsZXQgY2hlY2tQcm9wID0gY29tcG9uZW50Ll9fZ2V0Tm9kZVByb3BlcnR5KGJpbmQubm9kZSwgcHJvcC5rZXlzKTsgICAgICAgICAgICBcbiAgICAgICAgICAgIGNoZWNrUHJvcCAmJiBjaGVja1Byb3AuZXZhbHVhdGVkICYmIGNvbXBvbmVudC5zY29wZS5fX3NldChwcm9wLmtleXMsIHByb3AudmFsdWUsIGZhbHNlLCB0cnVlKTsgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgY29tcG9uZW50Ll9fZXZhbHVhdGVOb2RlKGJpbmQubm9kZSwgZmFsc2UpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBfayBpbiBiaW5kLm5vZGUuX19wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgIGlmICghYmluZC5ub2RlLl9fcHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShfaykpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgbGV0IF9wcm9wID0gYmluZC5ub2RlLl9fcHJvcGVydGllc1tfa107XG4gICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKF9wcm9wLmtleXMsIF9wcm9wLmNvbXBvbmVudC5fX3Njb3BlKTtcbiAgICAgICAgICAgICAgX3Byb3AuY29tcG9uZW50Ll9fc2V0Tm9kZVByb3BlcnR5KGJpbmQubm9kZSwgX3Byb3Aua2V5cywgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb21wb25lbnQuX19lbmFibGVLZXlzKHByb3Aua2V5cyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGV2YWx1YXRlID0gKGVsZW1lbnRzKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gZWxFdmFsdWF0ZShlbGVtZW50c1tpXSk7XG4gICAgICAgIGV2YWx1YXRlKGNvbXBvbmVudC5fX2NoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZWxFdmFsdWF0ZSh0aGlzLmVsKTtcbiAgICBldmFsdWF0ZSh0aGlzLl9fY2hpbGRyZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIHZhbHVlIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVsZXRlZD1mYWxzZV0gLSB0cnVlIGlmIHZhbHVlIGlzIGRlbGV0aW5nXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVCeUtleXMgKGtleXMsIHZhbHVlLCBpc0RlbGV0ZWQgPSBmYWxzZSkgeyAgICAgXG4gICAgbGV0IGRhdGEgPSB0aGlzLl9fZ2V0QmluZChrZXlzKTtcblxuICAgIGNvbnN0IHVuYmluZCA9IChvYmosIHBhcmVudHMpID0+IHtcbiAgICAgIGZvciAobGV0IGsgaW4gb2JqKSB7XG4gICAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGspIHx8IHRoaXMuX19pc1N5c3RlbUJpbmRpbmdLZXkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBfa2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba10pO1xuICAgICAgICBsZXQgX19rZXlzID0gX2tleXMuc2xpY2UoKTtcbiAgICAgICAgbGV0IF9pc0RlbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IHZhbCA9IG9ialtrXTtcbiAgICAgICAgbGV0IGhhc0tleTtcbiAgICAgICAgXG4gICAgICAgIF9fa2V5cy5zaGlmdCgpO1xuICAgICAgICBoYXNLZXkgPSB1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhfX2tleXMsIHZhbHVlKTtcblxuICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnICYmICFoYXNLZXkpIHtcbiAgICAgICAgICBfaXNEZWxldGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWwgJiYgdHlwZW9mIHZhbCA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHVuYmluZCh2YWwsIF9rZXlzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5fX2V2YWx1YXRlTmVzdGVkKF9rZXlzLCB0cnVlKTtcblxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8ICFoYXNLZXkpIHtcbiAgICAgICAgICB0aGlzLl9fdW5iaW5kKF9rZXlzKTtcbiAgICAgICAgICBfaXNEZWxldGVkICYmIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKF9fa2V5cywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICBkYXRhICYmIHVuYmluZChkYXRhLCBbXS5jb25jYXQoa2V5cykpO1xuICAgIHRoaXMuX19ldmFsdWF0ZU5lc3RlZChrZXlzKTtcblxuICAgIGlmIChpc0RlbGV0ZWQpIHtcbiAgICAgIHRoaXMuX191bmJpbmQoa2V5cyk7XG4gICAgICBpc0RlbGV0ZWQgJiYgdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgZXZlbnQgZXhwcmVzc2lvblxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVFdmVudChub2RlLCBlbCwgZSkge1xuICAgIGxldCBleHByZXNzaW9uID0gZXZhbHVhdGlvblJlZ2V4LmV4ZWMobm9kZS5fX2V4cHJlc3Npb24pO1xuICAgIGxldCBldmFsdWF0ZTtcblxuICAgIGlmICghZXhwcmVzc2lvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSB7XG4gICAgICBlbDogZWwsXG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICBldmVudDogZSxcbiAgICAgIG5vZGU6IG5vZGVcbiAgICB9O1xuXG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IHt9O1xuICAgIGV2YWx1YXRlID0gdGhpcy5jb25zdHJ1Y3Rvci5wYXJzZSh0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5zY29wZSwgZXhwcmVzc2lvblsxXSwgeyBldmVudDogZSB9KTtcbiAgICB0aGlzLl9fZXZhbHVhdGluZ0V2ZW50ID0gbnVsbDtcbiAgICByZXR1cm4gZXZhbHVhdGU7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgY2hhbmdlcyBhbmQgZXZhbHVhdGUgdGhlIHBhc3NlZCBub2RlXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtjaGVja11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZU5vZGUobm9kZSwgY2hlY2sgPSB0cnVlKSB7XG4gICAgY29uc3Qga2V5ID0gbm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyPyAndmFsdWUnOiAnbm9kZVZhbHVlJztcblxuICAgIGlmIChjaGVjaz8gdGhpcy5fX2NoZWNrRXZhbHVhdGlvbihub2RlKTogdHJ1ZSkgeyAgICAgIFxuICAgICAgY29uc3QgeyByZXMsIGF0dHJpYnV0ZVZhbHVlLCBleHByZXNzaW9uLCBjb3VudGVyIH0gPSB0aGlzLl9fZXZhbHVhdGUobm9kZSk7ICAgICBcbiAgICAgIG5vZGVba2V5XSAhPSByZXMgJiYgKG5vZGVba2V5XSA9IHJlcyk7XG5cbiAgICAgIGlmIChub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gcmVzO1xuICAgICAgICBsZXQgaXNCb29sZWFuQXR0cmlidXRlID0gZmFsc2U7XG4gIFxuICAgICAgICBpZiAoY291bnRlciA9PSAxICYmIGV4cHJlc3Npb24gJiYgbm9kZS5fX2V4cHJlc3Npb24gPT0gZXhwcmVzc2lvbikge1xuICAgICAgICAgIHZhbHVlID0gYXR0cmlidXRlVmFsdWU7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGNvbnN0IGNsZWFyQXR0cmlidXRlID0gbm9kZS5ub2RlTmFtZS5yZXBsYWNlKC9eYm9vbGVhbi0oLispL2ksICckMScpO1xuICAgICAgICBjb25zdCBjYW1lbEF0dHJpYnV0ZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKGNsZWFyQXR0cmlidXRlKTtcbiAgXG4gICAgICAgIGlmIChjbGVhckF0dHJpYnV0ZSAhPSBub2RlLm5vZGVOYW1lKSB7XG4gICAgICAgICAgaXNCb29sZWFuQXR0cmlidXRlID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZSA9ICEhdmFsdWU7XG4gICAgICAgIH0gICAgICAgICAgXG4gIFxuICAgICAgICBpZiAobm9kZS5fX2F0dHJpYnV0ZU9uKSB7ICAgICAgICBcbiAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBub2RlLl9fYXR0cmlidXRlT247XG4gICAgICAgICAgIWNvbXBvbmVudC5fX3NhdmVBdHRyaWJ1dGVQcm94eUluICYmICh2YWx1ZSA9IHV0aWxzLmNvcHkodmFsdWUpKTtcbiAgICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gdHJ1ZTtcbiAgICAgICAgICBjb21wb25lbnQuYXR0cnNbY2FtZWxBdHRyaWJ1dGVdID0gdmFsdWU7XG4gICAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IGZhbHNlO1xuICBcbiAgICAgICAgICBpZiAoY29tcG9uZW50Ll9faXNNb3VudGVkKSB7XG4gICAgICAgICAgICBjb21wb25lbnQuX19hdHRyVHJpZ2dlckJ5TmFtZShjYW1lbEF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0Jvb2xlYW5BdHRyaWJ1dGUpIHtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gbm9kZS5fX2VsZW1lbnQ7XG4gICAgICAgICAgdmFsdWU/IGVsZW1lbnQuc2V0QXR0cmlidXRlKGNhbWVsQXR0cmlidXRlLCAndHJ1ZScpOiBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShjYW1lbEF0dHJpYnV0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZVtrZXldO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dHJpYnV0ZSBub2RlIGluaXRpYWxpemluZ1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gYXR0cmlidXRlT2YgLSBpZiBub2RlIGlzIGxpbmtlZCB3aXRoIHBhcmVudCBzY29wZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemVBdHRyaWJ1dGUobm9kZSwgZWwsIGF0dHJpYnV0ZU9mKSB7XG4gICAgaWYgKCFub2RlIHx8IHN5c3RlbUF0dHJpYnV0ZXMuaW5kZXhPZihub2RlLm5vZGVOYW1lKSAhPSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX19pbml0aWFsaXplTm9kZShub2RlLCBlbCk7XG4gICAgbGV0IGV2ZW50TmFtZSA9IG5vZGUubm9kZU5hbWUucmVwbGFjZSgvXm9uLSguKykvaSwgJyQxJyk7XG4gICAgbGV0IG5vZGVOYW1lID0gdXRpbHMudG9DYW1lbENhc2Uobm9kZS5ub2RlTmFtZSk7XG4gICAgbGV0IGNvbXBvbmVudCA9IGF0dHJpYnV0ZU9mPyBhdHRyaWJ1dGVPZjogdGhpcztcblxuICAgIGlmIChldmVudE5hbWUgIT0gbm9kZS5ub2RlTmFtZSkge1xuICAgICAgaWYgKG5vZGUuX19ldmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBlbWl0dGVyID0gbmV3IEFraWxpLkV2ZW50RW1pdHRlcihldmVudE5hbWUsIGVsLCBjb21wb25lbnQpO1xuXG4gICAgICBpZiAobm9kZS5fX2V4cHJlc3Npb24pIHtcbiAgICAgICAgZW1pdHRlci5iaW5kKChlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5fX2V2YWx1YXRlRXZlbnQobm9kZSwgZWwsIGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgbm9kZS5fX2V2ZW50ID0gZW1pdHRlcjtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShub2RlLm5vZGVOYW1lLCB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUoZW1pdHRlcikpO1xuXG4gICAgICBpZiAoYXR0cmlidXRlT2YpIHtcbiAgICAgICAgdGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLmF0dHJzW25vZGVOYW1lXSA9IGVtaXR0ZXI7XG4gICAgICAgIHRoaXMuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoYXR0cmlidXRlT2YpIHtcbiAgICAgIG5vZGUuX19hdHRyaWJ1dGVPbiA9IHRoaXM7XG4gICAgICBub2RlLl9fYXR0cmlidXRlT2YgPSBjb21wb25lbnQ7XG4gICAgfVxuXG4gICAgbGV0IGNoZWNrID0gdGhpcy5fX2NvbXBpbGluZz8gdGhpcy5fX2NvbXBpbGluZy5jaGVja0NoYW5nZXM6IGZhbHNlO1xuICAgIGxldCBjdXJyZW50VmFsdWUgPSBub2RlLnZhbHVlO1xuICAgIGxldCByZXMgPSBjb21wb25lbnQuX19ldmFsdWF0ZU5vZGUobm9kZSwgY2hlY2spO1xuICAgIGN1cnJlbnRWYWx1ZSAhPSByZXMgJiYgZWwuc2V0QXR0cmlidXRlKG5vZGUubm9kZU5hbWUsIHJlcyk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgbm9kZVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtjaGVja0JpbmRpbmddXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemVOb2RlKG5vZGUsIGVsLCBjaGVja0JpbmRpbmcgPSBmYWxzZSkge1xuICAgIGlmIChub2RlLl9faW5pdGlhbGl6ZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGxldCB2YWwgPSBub2RlWyhub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpPyAndmFsdWUnOiAnbm9kZVZhbHVlJ10udHJpbSgpO1xuICAgIGxldCBoYXNCaW5kaW5nID0gY2hlY2tCaW5kaW5nPyBldmFsdWF0aW9uUmVnZXgudGVzdCh2YWwpOiBmYWxzZTtcbiAgICBcbiAgICBpZihjaGVja0JpbmRpbmcgJiYgIWhhc0JpbmRpbmcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBub2RlLl9fZXhwcmVzc2lvbiA9IHZhbDtcbiAgICBub2RlLl9fcHJvcGVydGllcyA9IHt9O1xuICAgIG5vZGUuX19hdHRyaWJ1dGVPZiA9IG51bGw7XG4gICAgbm9kZS5fX2F0dHJpYnV0ZU9uID0gbnVsbDtcbiAgICBub2RlLl9fZXZlbnQgPSBudWxsO1xuICAgIG5vZGUuX19oYXNCaW5kaW5ncyA9IGhhc0JpbmRpbmc7XG4gICAgbm9kZS5fX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICBub2RlLl9fY29tcG9uZW50ID0gdGhpcztcbiAgICBub2RlLl9fZWxlbWVudCA9IGVsO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIERlaW5pdGlhbGl6ZSB0aGUgbm9kZVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZWluaXRpYWxpemVOb2RlKG5vZGUpIHtcbiAgICBpZiAobm9kZS5fX2V2ZW50KSB7XG4gICAgICBub2RlLl9fZXZlbnQudW5iaW5kKCk7XG4gICAgICBub2RlLl9fZXZlbnQgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChub2RlLl9faGFzQmluZGluZ3MpIHtcbiAgICAgIHRoaXMuX19wYXJlbnQgJiYgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5fX3VuYmluZEJ5Tm9kZXMoW25vZGVdKTsgICAgICAgICAgXG4gICAgfVxuXG4gICAgZGVsZXRlIG5vZGUuX19leHByZXNzaW9uO1xuICAgIGRlbGV0ZSBub2RlLl9fcHJvcGVydGllcztcbiAgICBkZWxldGUgbm9kZS5fX2F0dHJpYnV0ZU9mO1xuICAgIGRlbGV0ZSBub2RlLl9fYXR0cmlidXRlT247XG4gICAgZGVsZXRlIG5vZGUuX19ldmVudDtcbiAgICBkZWxldGUgbm9kZS5fX2hhc0JpbmRpbmdzO1xuICAgIGRlbGV0ZSBub2RlLl9faW5pdGlhbGl6ZWQ7XG4gICAgZGVsZXRlIG5vZGUuX19jb21wb25lbnQ7XG4gICAgZGVsZXRlIG5vZGUuX19lbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEludGVycG9sYXRlIGF0dHJpYnV0ZXMgb2YgdGhlIGVsZW1lbnRcbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gW2F0dHJpYnV0ZU9mPW51bGxdIC0gaWYgbm9kZSBpcyBsaW5rZWQgd2l0aCBwYXJlbnQgc2NvcGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXMoZWwsIGF0dHJpYnV0ZU9mID0gbnVsbCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBhdHRycyA9IGVsLmF0dHJpYnV0ZXMsIGwgPSBhdHRycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHRoaXMuX19pbml0aWFsaXplQXR0cmlidXRlKGF0dHJzW2ldLCBlbCwgYXR0cmlidXRlT2YpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmUgYXR0cmlidXRlcyBhcyBwcm94eVxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RlZmluZUF0dHJpYnV0ZXMoKSB7XG4gICAgY29uc3QgY2hhbmdlQXR0cmlidXRlID0gKGtleSwgdmFsdWUsIGlzRGVsZXRlZCA9IGZhbHNlKSA9PiB7XG4gICAgICBpZiAodGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgbm9kZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlTm9kZShrZXkpO1xuXG4gICAgICBpZiAoaXNEZWxldGVkKSB7XG4gICAgICAgIG5vZGUgJiYgdGhpcy5fX2RlaW5pdGlhbGl6ZU5vZGUobm9kZSk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgIHJldHVybiBcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCFub2RlKSB7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgICBub2RlID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGVOb2RlKGtleSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbm9kZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9fZGVpbml0aWFsaXplTm9kZShub2RlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fX2luaXRpYWxpemVBdHRyaWJ1dGUobm9kZSwgdGhpcy5lbCwgdGhpcy5fX2F0dHJpYnV0ZU9mKTtcbiAgICB9O1xuXG4gICAgdGhpcy5hdHRycyA9IG5ldyBQcm94eSh0aGlzLl9fYXR0cnMsIHtcbiAgICAgIGdldDogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGlmIChrZXkgPT0gJ19faXNQcm94eScpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgIH0sXG4gICAgICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IGF0dHJLZXkgPSB1dGlscy50b0Rhc2hDYXNlKGtleSk7XG5cbiAgICAgICAgaWYgKHRoaXMuYm9vbGVhbkF0dHJpYnV0ZXMuaW5kZXhPZihhdHRyS2V5KSAhPSAtMSkge1xuICAgICAgICAgIGF0dHJLZXkgPSBgYm9vbGVhbi0ke2F0dHJLZXl9YDtcbiAgICAgICAgICB2YWx1ZT8gdGhpcy5lbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk6IHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgIGNoYW5nZUF0dHJpYnV0ZShhdHRyS2V5LCB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUodmFsdWUpKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgICAgZGVsZXRlUHJvcGVydHk6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IGF0dHJLZXkgPSB1dGlscy50b0Rhc2hDYXNlKGtleSk7XG4gICAgICAgIGNoYW5nZUF0dHJpYnV0ZShhdHRyS2V5LCB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUodmFsdWUpLCB0cnVlKTtcbiAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgcHJveHkgdG8gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcmV0dXJucyB7UHJveHl9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fb2JzZXJ2ZShvYmosIHBhcmVudHMpIHtcbiAgICByZXR1cm4gbmV3IFByb3h5KG9iaiwge1xuICAgICAgZ2V0OiAodGFyZ2V0LCBrZXkpID0+IHsgXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX2lzUHJveHlcIikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PSBcIl9fdGFyZ2V0XCIpIHtcbiAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PSBcIl9fY29tcG9uZW50XCIpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX2tleXNcIikge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5fX2lzU3lzdGVtS2V5KGtleSkpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQWtpbGkuX19ldmFsdWF0aW9uKSB7ICBcbiAgICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG4gICAgICAgICAgbGV0IG5vdEJpbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBsZXQgZXZhbHVhdGVkID0gIXV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19zY29wZSk7IFxuICAgICAgICAgIGxldCBjb21wb25lbnQgPSB0aGlzO1xuICAgICAgICAgIGxldCBleGNBcnIgPSBrZXlzLnNsaWNlKCk7XG5cbiAgICAgICAgICBpZih0YXJnZXQgaW5zdGFuY2VvZiBTY29wZSkge1xuICAgICAgICAgICAgbGV0IHJlYWxUYXJnZXQgPSB1dGlscy5nZXRPd25Qcm9wZXJ0eVRhcmdldCh0YXJnZXQsIGtleSk7XG4gICAgICAgICAgICByZWFsVGFyZ2V0ICYmIChyZWFsVGFyZ2V0IGluc3RhbmNlb2YgU2NvcGUpICYmIChjb21wb25lbnQgPSAgcmVhbFRhcmdldC5fX2NvbXBvbmVudCk7XG4gICAgICAgICAgfSBcblxuICAgICAgICAgIGlmKEFraWxpLl9fd3JhcHBpbmcgJiYga2V5cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZm9yUGFyZW50cyA9IEFraWxpLl9fZXZhbHVhdGlvbi5jb21wb25lbnQucGFyZW50cyhjID0+IGMgaW5zdGFuY2VvZiBBa2lsaS5jb21wb25lbnRzLkZvcik7XG5cbiAgICAgICAgICBmb3IobGV0IGkgPSAwLCBsID0gZm9yUGFyZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGZvcihsZXQgayA9IDAsIGMgPSBrZXlzLmxlbmd0aDsgayA8IGM7IGsrKykgeyBcbiAgICAgICAgICAgICAgY29uc3QgZm9yRGF0YSA9IGZvclBhcmVudHNbaV0uZGF0YTtcbiAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGV4Y0FyciwgY29tcG9uZW50Ll9fc2NvcGUpO1xuXG4gICAgICAgICAgICAgIGlmKGRhdGEgJiYgdHlwZW9mIGRhdGEgPT0gJ29iamVjdCcgJiYgZm9yRGF0YSA9PT0gZGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgICAgZXhjQXJyLnBvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gICAgICAgICAgICAgICBcblxuICAgICAgICAgIGlmICghKGtleSBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9ICAgICAgICAgIFxuICAgICAgICAgIGVsc2UgaWYgKCF1dGlscy5nZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQodGFyZ2V0LCBrZXkpKSB7XG4gICAgICAgICAgICBub3RCaW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9fYmluZE5vZGUoQWtpbGkuX19ldmFsdWF0aW9uLmxpc3QsIGNvbXBvbmVudCwga2V5cywgcGFyZW50cywgdGFyZ2V0W2tleV0sIG5vdEJpbmRpbmcsIGV2YWx1YXRlZCk7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgfSxcbiAgICAgIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4geyBcbiAgICAgICAgaWYgKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YWx1ZSA9IEFraWxpLndyYXBGdW5jdGlvbih2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG5cbiAgICAgICAgaWYgKHRoaXMuX19jaGVja0Rpc2FibGVtZW50KGtleXMpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG5cbiAgICAgICAgQ0hFQ0tfRVhJU1RFTkNFOiBpZihwYXJlbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsZXQgdGFyZ2V0UGFyZW50VmFsdWUgPSBwYXJlbnRzLmxlbmd0aCA+IDE/IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKHBhcmVudHMuc2xpY2UoMCwgLTEpLCB0aGlzLl9fc2NvcGUpOiB0aGlzLl9fc2NvcGU7XG4gICAgICAgICAgXG4gICAgICAgICAgZm9yKGxldCBrIGluIHRhcmdldFBhcmVudFZhbHVlKSB7XG4gICAgICAgICAgICBpZighdGFyZ2V0UGFyZW50VmFsdWUuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRhcmdldFBhcmVudFZhbHVlW2tdICYmIHRhcmdldFBhcmVudFZhbHVlW2tdLl9fdGFyZ2V0ID09PSB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgYnJlYWsgQ0hFQ0tfRVhJU1RFTkNFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXRba2V5XSA9IHRoaXMuX19uZXN0ZWRPYnNlcnZlKHZhbHVlLCBrZXlzKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChBa2lsaS5fX2lzb2xhdGlvbikgeyBcbiAgICAgICAgICB0aGlzLl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0KHBhcmVudHMsIGtleSwgZmFsc2UpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXSkge1xuICAgICAgICAgIHRoaXMuX19zdG9yZVRyaWdnZXJCeUtleXMoa2V5cywgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddKSB7XG4gICAgICAgICAgdGhpcy5fX2F0dHJUcmlnZ2VyQnlLZXlzKGtleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuX19pc01vdW50ZWQpIHsgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgdGhpcy5fX2V2YWx1YXRlQnlLZXlzKGtleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tleV0pO1xuXG4gICAgICAgIGlmICh0aGlzLl9fY2hlY2tEaXNhYmxlbWVudChrZXlzKSkge1xuICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9faXNTeXN0ZW1LZXkoa2V5KSkge1xuICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKEFraWxpLl9faXNvbGF0aW9uKSB7XG4gICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICAgIHRoaXMuX19jcmVhdGVJc29sYXRpb25PYmplY3QocGFyZW50cywga2V5LCB0cnVlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICB0aGlzLl9fZXZhbHVhdGVCeUtleXMoa2V5cywgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGhhc2ggZm9yIHRoZSBrZXlzXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGVLZXlzSGFzaChrZXlzKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuX19zY29wZS5fX25hbWV9LiR7QWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpfWA7XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZSB0aGUga2V5cyBzZXR0ZXJcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGlzYWJsZUtleXMoa2V5cykge1xuICAgIHRoaXMuX19kaXNhYmxlUHJveHlba2V5cz8gdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpOiAnX19hbGwnXSA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIHRoZSBrZXlzIHNldHRlclxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19lbmFibGVLZXlzKGtleXMpIHtcbiAgICBkZWxldGUgdGhpcy5fX2Rpc2FibGVQcm94eVtrZXlzPyB0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyk6ICdfX2FsbCddO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBrZXlzIHNldHRlciBkaXNhYmxlbWFudFxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jaGVja0Rpc2FibGVtZW50KGtleXMpIHtcbiAgICByZXR1cm4gdGhpcy5fX2Rpc2FibGVQcm94eS5fX2FsbD8gdHJ1ZTogdGhpcy5fX2Rpc2FibGVQcm94eVt0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyldO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmUgdGhlIHZhbHVlIHRvIHRoZSBzdG9yZSBieSB0aGUga2V5c1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zdG9yZVRyaWdnZXJCeUtleXMoa2V5cywgdmFsdWUpIHtcbiAgICBjb25zdCBsaW5rcyA9IHRoaXMuX19zdG9yZUxpbmtzW0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKV07XG4gICAgXG4gICAgaWYoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YWx1ZSA9IHV0aWxzLmNvcHkodmFsdWUpO1xuICAgIHRoaXMuX19kaXNhYmxlS2V5cyhrZXlzKTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTsgICBcbiAgICAgIFxuICAgICAgaWYoIWxpbmsuc2V0KSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9fc3RvcmVUcmlnZ2VyQnlOYW1lKGxpbmsubmFtZSwgdmFsdWUpOyAgICAgIFxuICAgIH1cbiAgICBcbiAgICB0aGlzLl9fZW5hYmxlS2V5cyhrZXlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlIHRoZSB2YWx1ZSB0byB0aGUgc3RvcmUgYnkgdGhlIG5hbWVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3N0b3JlVHJpZ2dlckJ5TmFtZShuYW1lLCB2YWx1ZSkgeyAgXG4gICAgc3RvcmUuX190YXJnZXRbbmFtZV0gPSB2YWx1ZTtcbiAgICBsZXQgbGlua3MgPSAoQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdIHx8IFtdKS5jb25jYXQoQWtpbGkuX19zdG9yZUxpbmtzWycqJ10gfHwgW10pO1xuXG4gICAgaWYoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsaW5rcyA9IHV0aWxzLnNvcnQobGlua3MsIFsnZGF0ZSddLCB0cnVlKTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGxpbmsuY29tcG9uZW50O1xuXG4gICAgICBpZihjb21wb25lbnQgPT09IHRoaXMpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmKGxpbmsuZm4pIHtcbiAgICAgICAgQWtpbGkudW5pc29sYXRlKCgpID0+IGxpbmsuZm4uY2FsbChjb21wb25lbnQsIHZhbHVlLCBuYW1lKSlcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmKCFsaW5rLmdldCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgbGV0IGN1cnJlbnQgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhsaW5rLmtleXMsIGNvbXBvbmVudC5fX3Njb3BlKTtcbiAgICAgICF1dGlscy5jb21wYXJlKGN1cnJlbnQsIHZhbHVlKSAmJiBjb21wb25lbnQuc2NvcGUuX19zZXQobGluay5rZXlzLCB2YWx1ZSk7ICAgICBcbiAgICB9ICAgICBcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBzdG9yZSBsaW5rIHdpdGggdGhlIHNjb3BlIHByb3BlcnR5XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtvYmhlY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3N0b3JlQnlLZXlzKG5hbWUsIGtleXMsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSB7IGdldDogdHJ1ZSwgc2V0OiB0cnVlLCAuLi5vcHRpb25zIH07XG5cbiAgICBpZigha2V5cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBTdG9yZSBsaW5rIFwiJHtuYW1lfVwiIG11c3QgaGF2ZSB0aGUgc2NvcGUgcHJvcGVydHkgbmFtZWApO1xuICAgIH1cblxuICAgIGlmKCFvcHRpb25zLmdldCAmJiAhb3B0aW9ucy5zZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgU3RvcmUgbGluayBcIiR7bmFtZX1cIiBtdXN0IGhhdmUgYXQgbGVhc3QgXCJnZXRcIiBvciBcInNldFwiIG9wdGlvbiBhcyB0cnVlYCk7XG4gICAgfVxuXG4gICAgaWYoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuXG4gICAgdGhpcy5zY29wZS5fX3NldChrZXlzLCBzdG9yZVtuYW1lXSk7XG4gICAgbGV0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcbiAgICBsZXQgaW5mbztcblxuICAgIGlmKCF0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddKSB7XG4gICAgICB0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddID0gW107XG4gICAgfVxuXG4gICAgbGV0IGFyciA9IHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ107XG4gICAgXG4gICAgZm9yKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuXG4gICAgICBpZihyZXMuY29tcG9uZW50ID09PSB0aGlzICYmIHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmtleVN0cmluZyA9PSBrZXlTdHJpbmcpIHtcbiAgICAgICAgLy9lc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZSBcbiAgICAgICAgQWtpbGkub3B0aW9ucy5kZWJ1ZyAmJiBjb25zb2xlLndhcm4oYFN0b3JlIGxpbmsgXCIke25hbWV9XCIgd2l0aCBrZXkgXCIke2tleVN0cmluZ31cIiBhbHJlYWR5IGV4aXN0c2ApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoIUFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSkge1xuICAgICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgaW5mbyA9IHsgY29tcG9uZW50OiB0aGlzLCBuYW1lLCBrZXlzLCBrZXlTdHJpbmcsIGRhdGU6IERhdGUubm93KCksIHNldDogb3B0aW9ucy5zZXQsIGdldDogb3B0aW9ucy5nZXQgfTtcbiAgICB0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddLnB1c2goaW5mbyk7XG4gICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdLnB1c2goaW5mbyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgc3RvcmUgbGluayB3aXRoIHRoZSBmdW5jdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuICAgXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIF9fc3RvcmVCeUZ1bmN0aW9uKG5hbWUsIGZuLCBvcHRpb25zID0ge30pIHsgXG4gICAgbGV0IGNhbGwgPSBvcHRpb25zLmNhbGxPblN0YXJ0ID09PSB1bmRlZmluZWQ/IHN0b3JlLl9fdGFyZ2V0Lmhhc093blByb3BlcnR5KG5hbWUpOiBvcHRpb25zLmNhbGxPblN0YXJ0O1xuXG4gICAgaWYoIUFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSkge1xuICAgICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuICAgIFxuICAgIGZvcihsZXQgaSA9IGxpbmtzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gbGlua3NbaV07XG5cbiAgICAgIGlmKHJlcy5jb21wb25lbnQgPT09IHRoaXMgJiYgcmVzLm5hbWUgPT0gbmFtZSAmJiByZXMuZm4gPT09IGZuKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXS5wdXNoKHsgY29tcG9uZW50OiB0aGlzLCBuYW1lLCBmbiwgZGF0ZTogRGF0ZS5ub3coKSB9KTtcblxuICAgIGlmKG5hbWUgPT0gJyonICYmIG9wdGlvbnMuY2FsbE9uU3RhcnQgIT09IGZhbHNlKSB7XG4gICAgICBsZXQgc3RvcmVLZXlzID0gT2JqZWN0LmtleXMoc3RvcmUuX190YXJnZXQpO1xuICAgICAgbGV0IHAgPSBbXTtcblxuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IHN0b3JlS2V5cy5sZW5ndGggOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBzdG9yZUtleXNbaV07XG4gICAgICAgIGxldCB2YWwgPSBzdG9yZS5fX3RhcmdldFtrZXldO1xuICAgICAgICBwLnB1c2goQWtpbGkudW5pc29sYXRlKCgpID0+IGZuLmNhbGwodGhpcywgdmFsLCBrZXkpKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChwKTtcbiAgICB9XG5cbiAgICBpZihjYWxsKSB7XG4gICAgICByZXR1cm4gQWtpbGkudW5pc29sYXRlKCgpID0+IGZuLmNhbGwodGhpcywgc3RvcmVbbmFtZV0pKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBzdG9yZSBsaW5rIHdpdGggdGhlIHNjb3BlIHByb3BlcnR5XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3Vuc3RvcmVCeUtleXMobmFtZSwga2V5cykge1xuICAgIGlmKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBoYXZlIHRvIHBhc3MgdGhlIHNjb3BlIHByb3BlcnR5IG5hbWUgZm9yIHN0b3JlIGxpbmsgXCIke25hbWV9XCJgKTtcbiAgICB9XG5cbiAgICBpZighQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG5cbiAgICBsZXQga2V5U3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpO1xuICAgIGxldCBhcnIgPSB0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddO1xuXG4gICAgaWYoIWFyci5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgZm9yKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuICAgICAgbGV0IGxpbmtzID0gQWtpbGkuX19zdG9yZUxpbmtzW3Jlcy5uYW1lXTtcblxuICAgICAgaWYocmVzLmNvbXBvbmVudCAhPT0gdGhpcyB8fCByZXMubmFtZSAhPSBuYW1lIHx8IHJlcy5rZXlTdHJpbmcgIT0ga2V5U3RyaW5nKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBhcnIuc3BsaWNlKGksIDEpO1xuXG4gICAgICBpZighbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgZm9yKGxldCBrID0gbGlua3MubGVuZ3RoIC0gMTsgayA+PSAwOyBrLS0pIHtcbiAgICAgICAgbGV0IGxpbmsgPSBsaW5rc1trXTtcblxuICAgICAgICBpZihsaW5rLmNvbXBvbmVudCA9PT0gdGhpcyAmJiBsaW5rLmtleVN0cmluZyA9PSBrZXlTdHJpbmcpIHtcbiAgICAgICAgICBsaW5rcy5zcGxpY2UoaywgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoIWxpbmtzLmxlbmd0aCkge1xuICAgICAgICBkZWxldGUgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKCFhcnIubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBzdG9yZSBsaW5rIHdpdGggdGhlIGZ1bmN0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5zdG9yZUJ5RnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZighQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuICAgIFxuICAgIGZvcihsZXQgaSA9IGxpbmtzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gbGlua3NbaV07XG5cbiAgICAgIGlmKHJlcy5jb21wb25lbnQgPT09IHRoaXMgJiYgcmVzLm5hbWUgPT0gbmFtZSAmJiByZXMuZm4gPT09IGZuKSB7XG4gICAgICAgIGxpbmtzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoIWxpbmtzLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciBhbiBhdHRyaWJ1dGUgZXZlbnQgYnkgdGhlIGtleXNcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYXR0clRyaWdnZXJCeUtleXMoa2V5cywgdmFsdWUpIHtcbiAgICBpZih0aGlzLl9fZGlzYWJsZUF0dHJUcmlnZ2VyaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGxpbmtzID0gdGhpcy5fX2F0dHJMaW5rc1tBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyldO1xuICAgXG4gICAgaWYoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIEFraWxpLm5leHRUaWNrKCgpID0+IHtcbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGluayA9IGxpbmtzW2ldO1xuXG4gICAgICAgIGlmKGxpbmsuZm4pIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCFsaW5rLnNldCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBldiA9ICdvbicgKyB1dGlscy5jYXBpdGFsaXplKGxpbmsubmFtZSk7XG4gICAgICAgIHRoaXMuYXR0cnNbZXZdICYmIHRoaXMuYXR0cnNbZXZdLnRyaWdnZXIodmFsdWUsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9KTsgIFxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgYW4gYXR0cmlidXRlIGV2ZW50IGJ5IHRoZSBuYW1lXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hdHRyVHJpZ2dlckJ5TmFtZShuYW1lLCB2YWx1ZSkge1xuICAgIGxldCBsaW5rcyA9ICh0aGlzLl9fYXR0ckxpbmtzW25hbWVdIHx8IFtdKS5jb25jYXQodGhpcy5fX2F0dHJMaW5rc1snKiddIHx8IFtdKTtcbiAgICBcbiAgICBpZighbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gIFxuICAgIFxuICAgIGxpbmtzID0gdXRpbHMuc29ydChsaW5rcywgWydkYXRlJ10sIHRydWUpO1xuICAgIFxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTsgICAgXG4gICAgICB0aGlzLl9fZGlzYWJsZUF0dHJUcmlnZ2VyaW5nID0gdHJ1ZTtcblxuICAgICAgaWYobGluay5mbikge1xuICAgICAgICBBa2lsaS51bmlzb2xhdGUoKCkgPT4gbGluay5mbi5jYWxsKHRoaXMsIHZhbHVlLCB1dGlscy50b0Rhc2hDYXNlKG5hbWUpKSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKGxpbmsuZ2V0KSB7XG4gICAgICAgIGxldCBjdXJyZW50ID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMobGluay5rZXlzLCB0aGlzLl9fc2NvcGUpO1xuICAgICAgICAhdXRpbHMuY29tcGFyZShjdXJyZW50LCB2YWx1ZSkgJiYgdGhpcy5zY29wZS5fX3NldChsaW5rLmtleXMsIHZhbHVlKTtcbiAgICAgIH0gXG5cbiAgICAgIHRoaXMuX19kaXNhYmxlQXR0clRyaWdnZXJpbmcgPSBmYWxzZTsgXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBhdHRyaWJ1dGUgbGluayB3aXRoIHRoZSBzY29wZSBwcm9wZXJ0eVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hdHRyQnlLZXlzKG5hbWUsIGtleXMsIG9wdGlvbnMgPSB7fSkgeyAgIFxuICAgIG9wdGlvbnMgPSB7IGdldDogdHJ1ZSwgc2V0OiB0cnVlLCAuLi5vcHRpb25zIH07XG4gICAgbmFtZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKG5hbWUpO1xuXG4gICAgaWYoIWtleXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQXR0cmlidXRlIGxpbmsgXCIke25hbWV9XCIgbXVzdCBoYXZlIHRoZSBzY29wZSBwcm9wZXJ0eSBuYW1lYCk7XG4gICAgfVxuXG4gICAgaWYoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuICAgIFxuICAgIHRoaXMuX19kaXNhYmxlQXR0clRyaWdnZXJpbmcgPSB0cnVlO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkobmFtZSkgJiYgdGhpcy5zY29wZS5fX3NldChrZXlzLCB0aGlzLmF0dHJzW25hbWVdKTsgXG4gICAgdGhpcy5fX2Rpc2FibGVBdHRyVHJpZ2dlcmluZyA9IGZhbHNlOyAgXG4gICAgbGV0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcbiAgICBcbiAgICBpZighdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddKSB7XG4gICAgICB0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ10gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgYXJyID0gdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddO1xuICAgIFxuICAgIGZvcihsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGFycltpXTtcblxuICAgICAgaWYocmVzLm5hbWUgPT0gbmFtZSAmJiByZXMua2V5U3RyaW5nID09IGtleVN0cmluZykge1xuICAgICAgICAvL2VzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlIFxuICAgICAgICBBa2lsaS5vcHRpb25zLmRlYnVnICYmIGNvbnNvbGUud2FybihgQXR0cmlidXRlIGxpbmsgXCIke25hbWV9XCIgd2l0aCBrZXkgXCIke2tleVN0cmluZ31cIiBhbHJlYWR5IGV4aXN0c2ApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddLnB1c2goeyBuYW1lLCBrZXlzLCBrZXlTdHJpbmcsIGRhdGU6IERhdGUubm93KCksIHNldDogb3B0aW9ucy5zZXQsIGdldDogb3B0aW9ucy5nZXQgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGF0dHJpYnV0ZSBsaW5rIHdpdGggdGhlIGZ1bmN0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkIFxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIF9fYXR0ckJ5RnVuY3Rpb24obmFtZSwgZm4sIG9wdGlvbnMgPSB7fSkgeyAgICBcbiAgICBuYW1lID0gdXRpbHMudG9DYW1lbENhc2UobmFtZSk7XG4gICAgbGV0IGNhbGwgPSBvcHRpb25zLmNhbGxPblN0YXJ0ID09PSB1bmRlZmluZWQ/IHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkobmFtZSk6IG9wdGlvbnMuY2FsbE9uU3RhcnQ7ICAgIFxuXG4gICAgaWYoIXRoaXMuX19hdHRyTGlua3NbbmFtZV0pIHtcbiAgICAgIHRoaXMuX19hdHRyTGlua3NbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSB0aGlzLl9fYXR0ckxpbmtzW25hbWVdO1xuICAgIFxuICAgIGZvcihsZXQgaSA9IGxpbmtzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gbGlua3NbaV07XG5cbiAgICAgIGlmKHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmZuID09PSBmbikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdGhpcy5fX2F0dHJMaW5rc1tuYW1lXS5wdXNoKHsgbmFtZSwgZm4sIGRhdGU6IERhdGUubm93KCkgfSk7XG5cbiAgICBpZihuYW1lID09ICcqJyAmJiBvcHRpb25zLmNhbGxPblN0YXJ0ICE9PSBmYWxzZSkge1xuICAgICAgbGV0IGF0dHJzS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuX19hdHRycykuZmlsdGVyKGsgPT4gISh0aGlzLl9fYXR0cnNba10gaW5zdGFuY2VvZiBBa2lsaS5FdmVudEVtaXR0ZXIpKTtcbiAgICAgIGxldCBwID0gW107XG5cbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBhdHRyc0tleXMubGVuZ3RoIDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQga2V5ID0gYXR0cnNLZXlzW2ldO1xuICAgICAgICBsZXQgdmFsID0gdGhpcy5fX2F0dHJzW2tleV07XG4gICAgICAgIHAucHVzaCggQWtpbGkudW5pc29sYXRlKCgpID0+IGZuLmNhbGwodGhpcywgdmFsLCB1dGlscy50b0Rhc2hDYXNlKGtleSkpKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChwKTtcbiAgICB9XG4gICAgXG4gICAgaWYoY2FsbCkge1xuICAgICAgcmV0dXJuIEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBmbi5jYWxsKHRoaXMsIHRoaXMuYXR0cnNbbmFtZV0pKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBhdHRyaWJ1dGUgbGluayB3aXRoIHRoZSBzY29wZSBwcm9wZXJ0eVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmF0dHJCeUtleXMobmFtZSwga2V5cykge1xuICAgIGlmKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBoYXZlIHRvIHBhc3MgdGhlIHNjb3BlIHByb3BlcnR5IG5hbWUgZm9yIGF0dHJpYnV0ZSBsaW5rIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgaWYoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuXG4gICAgbGV0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcbiAgICBsZXQgYXJyID0gdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddO1xuXG4gICAgaWYoIWFyci5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgZm9yKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuXG4gICAgICBpZihyZXMubmFtZSAhPSBuYW1lIHx8IHJlcy5rZXlTdHJpbmcgIT0ga2V5U3RyaW5nKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBhcnIuc3BsaWNlKGksIDEpO1xuICAgIH1cblxuICAgIGlmKCFhcnIubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddO1xuICAgIH1cbiAgfVxuXG4gICAvKipcbiAgICogUmVtb3ZlIHRoZSBhdHRyaWJ1dGUgbGluayB3aXRoIHRoZSBmdW5jdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5hdHRyQnlGdW5jdGlvbihuYW1lLCBmbikge1xuICAgIGlmKCF0aGlzLl9fYXR0ckxpbmtzW25hbWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IobGV0IGkgPSBsaW5rcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGxpbmtzW2ldO1xuXG4gICAgICBpZihyZXMubmFtZSA9PSBuYW1lICYmIHJlcy5mbiA9PT0gZm4pIHtcbiAgICAgICAgbGlua3Muc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZighbGlua3MubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGtleSBpcyBzeXN0ZW1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pc1N5c3RlbUtleSAoa2V5KSB7XG4gICAgaWYgKGtleSA9PSAnX18nIHx8IChrZXlbMF0gPT0gJ18nICYmIGtleVsxXSA9PSAnXycpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoWydjb25zdHJ1Y3RvciddLmluZGV4T2Yoa2V5KSAhPSAtMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIE5lc3RlZCBvYnNlcnZpbmcgdGhlIHZhbHVlXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gW3N0YXJ0S2V5c11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19uZXN0ZWRPYnNlcnZlICh2YWx1ZSwgc3RhcnRLZXlzKSB7XG4gICAgY29uc3Qgb2JzZXJ2ZSA9ICh2YWx1ZSwgcGFyZW50cykgPT4ge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghdXRpbHMuaXNQbGFpbk9iamVjdCh2YWx1ZSkgJiYgIXV0aWxzLmlzU2NvcGVQcm94eSh2YWx1ZSkgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIFNjb3BlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGxldCB0YXJnZXQgPSB2YWx1ZTtcblxuICAgICAgQ0hFQ0tfUFJPWFk6IGlmICh2YWx1ZS5fX2lzUHJveHkpIHtcbiAgICAgICAgdGFyZ2V0ID0gdmFsdWUuX190YXJnZXQ7XG5cbiAgICAgICAgaWYgKHRoaXMuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nKSB7XG4gICAgICAgICAgYnJlYWsgQ0hFQ0tfUFJPWFk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChcbiAgICAgICAgICB2YWx1ZS5fX2NvbXBvbmVudCAhPT0gdGhpcyB8fFxuICAgICAgICAgIEFraWxpLmpvaW5CaW5kaW5nS2V5cyhwYXJlbnRzKSAhPSBBa2lsaS5qb2luQmluZGluZ0tleXModmFsdWUuX19rZXlzKVxuICAgICAgICApIHtcbiAgICAgICAgICB0YXJnZXQgPSB1dGlscy5jb3B5KHRhcmdldCwgeyBuZXN0ZWQ6IGZhbHNlIH0pO1xuICAgICAgICAgIHZhbHVlID0gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghdGhpcy5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIFNjb3BlKSkge1xuICAgICAgICB0YXJnZXQgPSB1dGlscy5jb3B5KHRhcmdldCwgeyBuZXN0ZWQ6IGZhbHNlIH0gKTsgICAgICAgICAgXG4gICAgICAgIHZhbHVlID0gdGFyZ2V0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBrIGluIHRhcmdldCkgeyAgICAgICAgXG4gICAgICAgIGlmICghdGFyZ2V0Lmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmFsID0gdGFyZ2V0W2tdOyAgICAgICAgXG4gICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrXSk7ICAgXG4gICAgICAgIHRhcmdldFtrXSA9IG9ic2VydmUodmFsLCBrZXlzKTsgIFxuICAgICAgfVxuXG4gICAgICBpZiAoIXZhbHVlLl9faXNQcm94eSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX29ic2VydmUodmFsdWUsIHBhcmVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcblxuICAgIGxldCByZXMgPSBvYnNlcnZlKHZhbHVlLCBzdGFydEtleXMgfHwgW10pO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGlzb2xhdGlvbiBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVsZXRlZD1mYWxzZV1cbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0IChwYXJlbnRzLCBrZXksIGlzRGVsZXRlZCA9IGZhbHNlKSB7XG4gICAgbGV0IGtleXMgPSBwYXJlbnRzLmxlbmd0aD8gW3BhcmVudHNbMF1dOiBba2V5XTtcbiAgICBsZXQgaXNvbGF0aW9uS2V5ID0gdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpO1xuXG4gICAgaWYgKHBhcmVudHMubGVuZ3RoKSB7XG4gICAgICBpc0RlbGV0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIUFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV0pIHtcbiAgICAgIEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV0gPSB7XG4gICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAga2V5czoga2V5c1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAoaXNEZWxldGVkICE9PSB1bmRlZmluZWQpICYmIChBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25LZXldLmlzRGVsZXRlZCA9IGlzRGVsZXRlZCk7XG4gICAgcmV0dXJuIEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV07XG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSB0aGUgbm9kZSB0byBiaW5kaW5nXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBiaW5kIC0gYnkgZGVmYXVsdCBpcyBjb21wb25lbnQuX19ldmFsdWF0aW9uLmxpc3RcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbbm90QmluZGluZz1mYWxzZV1cbiAgICogQHBhcmFtIHtib29sZWFufSBbZXZhbHVhdGVkPWZhbHNlXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2JpbmROb2RlKGJpbmQsIHJlYWxDb21wb25lbnQsIGtleXMsIHBhcmVudHMsIHZhbHVlLCBub3RCaW5kaW5nID0gZmFsc2UsIGV2YWx1YXRlZCA9IGZhbHNlKSB7XG4gICAgbGV0IHBhcmVudEtleXNTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMocGFyZW50cyk7XG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXM7XG5cbiAgICBpZiAoYmluZC5sZW5ndGggJiYgIW5vdEJpbmRpbmcpIHtcbiAgICAgIGxldCBsID0gYmluZC5sZW5ndGggLSAxO1xuICAgICAgbGV0IGRhdGEgPSBiaW5kW2xdO1xuXG4gICAgICBpZihkYXRhLnJlYWxDb21wb25lbnQgPT09IHRoaXMgJiYgZGF0YS5rZXlzU3RyaW5nID09IHBhcmVudEtleXNTdHJpbmcpIHtcbiAgICAgICAgY29tcG9uZW50ID0gZGF0YS5jb21wb25lbnQ7XG4gICAgICB9ICAgICAgXG4gICAgICBcbiAgICAgIGlmIChkYXRhLmtleXNTdHJpbmcgPT0gcGFyZW50S2V5c1N0cmluZyAmJiBkYXRhLmNvbXBvbmVudCA9PT0gY29tcG9uZW50KSB7XG4gICAgICAgIGJpbmQuc3BsaWNlKGwsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBiaW5kLnB1c2goe1xuICAgICAgY29tcG9uZW50LFxuICAgICAgcmVhbENvbXBvbmVudDogcmVhbENvbXBvbmVudCxcbiAgICAgIGtleXNTdHJpbmc6IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKSxcbiAgICAgIHBhcmVudHMsXG4gICAgICBrZXlzLFxuICAgICAgdmFsdWUsXG4gICAgICBldmFsdWF0ZWQsXG4gICAgICBub3RCaW5kaW5nXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGtleSBpcyBzeXN0ZW0gYmluZGluZyB0aGluZ1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqLyBcbiAgX19pc1N5c3RlbUJpbmRpbmdLZXkoa2V5KSB7XG4gICAgcmV0dXJuIGtleSA9PSAnX19kYXRhJztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYmluZGluZyBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldEJpbmQoa2V5cykge1xuICAgIHJldHVybiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MpIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBuZXN0ZWQgYmluZGluZ3MgYnkga2V5c1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICovXG4gIF9fZ2V0QWxsQmluZHMoa2V5cykge1xuICAgIGNvbnN0IHJvb3QgPSB0aGlzLl9fZ2V0QmluZChrZXlzKTtcblxuICAgIGlmKCFyb290KSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgbGV0IGRhdGEgPSBbXTtcblxuICAgIGNvbnN0IGNvbGxlY3QgPSAob2JqKSA9PiB7XG4gICAgICBkYXRhID0gZGF0YS5jb25jYXQob2JqLl9fZGF0YSB8fCBbXSk7XG5cbiAgICAgIGZvcihsZXQga2V5IGluIG9iaikge1xuICAgICAgICBpZighb2JqLmhhc093blByb3BlcnR5KGtleSkgfHwga2V5ID09ICdfX2RhdGEnKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb2xsZWN0KG9ialtrZXldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb2xsZWN0KHJvb3QpO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBiaW5kaW5nIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldEJvdW5kTm9kZShrZXlzLCBub2RlKSB7XG4gICAgbGV0IGJpbmQgPSAgdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzKTtcblxuICAgIGlmICghYmluZCB8fCAhYmluZC5fX2RhdGEgfHwgIWJpbmQuX19kYXRhLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBiaW5kLl9fZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBkYXRhID0gYmluZC5fX2RhdGFbaV07XG5cbiAgICAgIGlmIChkYXRhLm5vZGUgPT09IG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBub2RlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbZXZhbHVhdGVkXVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXROb2RlUHJvcGVydHkobm9kZSwga2V5cywgdmFsdWUsIGV2YWx1YXRlZCA9IGZhbHNlKSB7XG4gICAgbGV0IHByb3AgPSB0aGlzLl9fZ2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMpOyAgICBcbiAgICBsZXQgY29weSA9IHV0aWxzLmNvcHkodmFsdWUpO1xuXG4gICAgaWYgKHByb3ApIHtcbiAgICAgIGxldCByZXMgPSB1dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSh2YWx1ZSwgcHJvcC52YWx1ZSwgcHJvcC5jb3B5KTtcbiAgICAgIHByb3AudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHByb3AuY29weSA9IGNvcHk7XG4gICAgICByZXR1cm4gIXJlcztcbiAgICB9XG4gICAgXG4gICAgbm9kZS5fX3Byb3BlcnRpZXNbdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpXSA9IHtcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIHZhbHVlLFxuICAgICAgY29weSwgICAgICBcbiAgICAgIGtleXMsXG4gICAgICBldmFsdWF0ZWQgICAgICBcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBub2RlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cykge1xuICAgIHJldHVybiBub2RlLl9fcHJvcGVydGllc1t0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyldIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIHRoZSBub2RlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVsZXRlTm9kZVByb3BlcnR5KG5vZGUsIGtleXMpIHtcbiAgICBsZXQgaGFzaCA9IGAke3RoaXMuX19zY29wZS5fX25hbWV9LiR7QWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpfWA7XG4gICAgZGVsZXRlIG5vZGUuX19wcm9wZXJ0aWVzW2hhc2hdO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgZGF0YSB3aXRoIHRoZSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19iaW5kKGtleXMsIGRhdGEpIHtcbiAgICB1dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MsIChsYXN0LCB2YWx1ZSkgPT4ge1xuICAgICAgbGV0IG9iaiA9IHsgX19kYXRhOiBbXSB9O1xuXG4gICAgICBpZiAoIWxhc3QpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlPyB2YWx1ZTogb2JqO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgICAgIG9iaiA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9iai5fX2RhdGEpIHtcbiAgICAgICAgb2JqLl9fZGF0YSA9IFtdO1xuICAgICAgfVxuXG4gICAgICBvYmouX19kYXRhLnB1c2goZGF0YSk7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCB0aGUga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5iaW5kKGtleXMpIHtcbiAgICBsZXQgYmluZCA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncyk7XG5cbiAgICBpZiAoIWJpbmQgfHwgIWJpbmQuX19kYXRhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBiaW5kLl9fZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBub2RlID0gYmluZC5fX2RhdGFbaV0ubm9kZTtcbiAgICAgIHRoaXMuX19kZWxldGVOb2RlUHJvcGVydHkobm9kZSwga2V5cyk7XG4gICAgfVxuXG4gICAgdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzLCAodmFsdWUpID0+IHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID4gMSkge1xuICAgICAgICB2YWx1ZS5fX2RhdGEgPSBbXTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgZGF0YSBieSBub2Rlc1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGVbXX0gbm9kZXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmJpbmRCeU5vZGVzKG5vZGVzKSB7XG4gICAgY29uc3QgdW5iaW5kID0gKG9iaikgPT4ge1xuICAgICAgZm9yIChsZXQgayBpbiBvYmopIHtcbiAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKGsgPT0gJ19fZGF0YScpIHtcbiAgICAgICAgICBsZXQgZGF0YSA9IG9ialtrXSB8fCBbXTtcbiAgICAgICAgICBsZXQgbCA9IGRhdGEubGVuZ3RoO1xuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBiaW5kID0gZGF0YVtpXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKG5vZGVzLmluZGV4T2YoYmluZC5ub2RlKSAhPSAtMSkgeyAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGRhdGEuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgIGwtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWwpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmpba107XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoIXRoaXMuX19pc1N5c3RlbUJpbmRpbmdLZXkoaykpIHtcbiAgICAgICAgICB1bmJpbmQob2JqW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgdW5iaW5kKHRoaXMuX19iaW5kaW5ncyk7XG4gICAgdGhpcy5fX2NsZWFyRW1wdHlCaW5kaW5ncygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCBlbXB0eSBiaW5kaW5nc1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gW29ial1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jbGVhckVtcHR5QmluZGluZ3Mob2JqKSB7XG4gICAgY29uc3QgY2xlYXIgPSAob2JqLCBwYXJlbnQsIGtleSkgPT4ge1xuICAgICAgZm9yIChsZXQgayBpbiBvYmopIHtcbiAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2YWwgPSBvYmpba107XG5cbiAgICAgICAgaWYgKGsgPT0gJ19fZGF0YScgJiYgKCF2YWwgfHwgIXZhbC5sZW5ndGgpKSB7XG4gICAgICAgICAgZGVsZXRlIG9ialtrXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghdGhpcy5fX2lzU3lzdGVtQmluZGluZ0tleShrKSkge1xuICAgICAgICAgIGlmICghT2JqZWN0LmtleXMob2JqW2tdKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmpba107XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xlYXIob2JqW2tdLCBvYmosIGspO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIU9iamVjdC5rZXlzKG9iaikubGVuZ3RoICYmIHBhcmVudCkge1xuICAgICAgICBkZWxldGUgcGFyZW50W2tleV07XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNsZWFyKG9iaiB8fCB0aGlzLl9fYmluZGluZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBsaW5rc1xuICAgKiBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jbGVhclN0b3JlTGlua3MoKSB7XG4gICAgY29uc3QgbGlua3MgPSBBa2lsaS5fX3N0b3JlTGlua3M7XG5cbiAgICBmb3IobGV0IGtleSBpbiBsaW5rcykge1xuICAgICAgY29uc3QgYXJyID0gbGlua3Nba2V5XTtcblxuICAgICAgZm9yKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBhcnJbaV07XG4gIFxuICAgICAgICBpZihsaW5rLmNvbXBvbmVudCA9PT0gdGhpcykge1xuICAgICAgICAgIGFyci5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoIWFyci5sZW5ndGgpIHtcbiAgICAgICAgZGVsZXRlIGxpbmtzW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgY2hpbGQgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlbW92ZUNoaWxkcmVuKCkge1xuICAgIGNvbnN0IHJlbW92ZSA9IChjaGlsZHJlbikgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcblxuICAgICAgICByZW1vdmUoY2hpbGQuX19ha2lsaS5fX2NoaWxkcmVuKTtcbiAgICAgICAgY2hpbGQuX19ha2lsaS5fX3JlbW92ZSgpO1xuICAgICAgICBpLS07XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJlbW92ZSh0aGlzLl9fY2hpbGRyZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgY29tcG9uZW50IHdpdGhvdXQgY2hpbGRyZW4gcmVtb3ZpbmdcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZW1vdmUoKSB7XG4gICAgdGhpcy5fX2RldGFjaCgpO1xuICAgIHRoaXMuX19jbGVhclN0b3JlTGlua3MoKTtcbiAgICB0aGlzLmF0dHJzLm9uUmVtb3ZlZCAmJiB0aGlzLmF0dHJzLm9uUmVtb3ZlZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICB0aGlzLnJlbW92ZWQoKTsgICAgXG4gICAgQWtpbGkucmVtb3ZlU2NvcGUodGhpcy5fX3Njb3BlLl9fbmFtZSk7XG4gICAgdGhpcy5lbC5yZW1vdmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRhY2ggdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RldGFjaCgpIHtcbiAgICBpZiAodGhpcy5fX2V2YWx1YXRlUGFyZW50ICYmICF0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMpIHtcbiAgICAgIHRoaXMuX19ldmFsdWF0ZVBhcmVudC5fX2FraWxpLl9fdW5iaW5kQnlOb2RlcyhbXS5zbGljZS5jYWxsKHRoaXMuZWwuYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9fcGFyZW50KSB7XG4gICAgICB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19zcGxpY2VDaGlsZCh0aGlzLmVsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBjb21wb25lbnQgd2l0aCBjaGlsZHJlblxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2Rlc3Ryb3koKSB7XG4gICAgdGhpcy5fX3JlbW92ZUNoaWxkcmVuKCk7XG4gICAgdGhpcy5fX3JlbW92ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBjb21wb25lbnQgaHRtbFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2VtcHR5KCkge1xuICAgIGxldCBub2RlcyA9IFtdO1xuICAgIHRoaXMuX19yZW1vdmVDaGlsZHJlbigpO1xuICAgIGNvbnN0IGZpbmQgPSAoY2hpbGRyZW4pID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PSAzKSB7XG4gICAgICAgICAgbm9kZXMucHVzaChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hpbGQubm9kZVR5cGUgPT0gMSAmJiAhY2hpbGQuX19ha2lsaSkge1xuICAgICAgICAgIGZvciAobGV0IGsgPSAwLCBhdHRycyA9IGNoaWxkLmF0dHJpYnV0ZXMsIGMgPSBhdHRycy5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgICAgICAgIG5vZGVzLnB1c2goYXR0cnNbaV0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZpbmQoY2hpbGQuY2hpbGROb2Rlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIGZpbmQodGhpcy5lbC5jaGlsZE5vZGVzKTtcbiAgICB0aGlzLl9fdW5iaW5kQnlOb2Rlcyhub2Rlcyk7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcGFyZW50IGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0UGFyZW50KHNlbGVjdG9yID0gJycsIGZpbmRBbGwgPSBmYWxzZSwgbGV2ZWxzID0gbnVsbCkge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBsZXQgbGV2ZWwgPSAwO1xuXG4gICAgaWYgKHR5cGVvZiBsZXZlbHMgIT0gJ29iamVjdCcpIHtcbiAgICAgIGxldmVscyA9IFtsZXZlbHNdO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbmQgPSAocGFyZW50KSA9PiB7XG4gICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghbGV2ZWxzIHx8IGxldmVscy5pbmRleE9mKGxldmVsKSAhPSAtMSkge1xuICAgICAgICBpZiAoIXNlbGVjdG9yIHx8IHBhcmVudC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgaWYgKCFmaW5kQWxsKSB7XG4gICAgICAgICAgICBhcnIucHVzaChwYXJlbnQuX19ha2lsaSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYXJyLnB1c2gocGFyZW50Ll9fYWtpbGkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldmVsKys7XG4gICAgICBmaW5kKHBhcmVudC5fX2FraWxpLl9fcGFyZW50KTtcbiAgICB9O1xuXG4gICAgZmluZCh0aGlzLl9fcGFyZW50KTtcbiAgICByZXR1cm4gZmluZEFsbD8gYXJyOiAoYXJyWzBdIHx8IG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjaGlsZCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZpbmRBbGw9dHJ1ZV0gLSBnZXQgYXJyYXkgaWYgdHJ1ZVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldENoaWxkcmVuKHNlbGVjdG9yID0gJycsIGZpbmRBbGwgPSB0cnVlLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGxldCBsZXZlbCA9IDA7XG5cbiAgICBpZiAodHlwZW9mIGxldmVscyAhPSAnb2JqZWN0Jykge1xuICAgICAgbGV2ZWxzID0gW2xldmVsc107XG4gICAgfVxuXG4gICAgY29uc3QgZmluZCA9IChjaGlsZHJlbikgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYgKCFsZXZlbHMgfHwgbGV2ZWxzLmluZGV4T2YobGV2ZWwpICE9IC0xKSB7XG4gICAgICAgICAgaWYgKCFzZWxlY3RvciB8fCBjaGlsZC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICBpZiAoIWZpbmRBbGwpIHtcbiAgICAgICAgICAgICAgYXJyLnB1c2goY2hpbGQuX19ha2lsaSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXJyLnB1c2goY2hpbGQuX19ha2lsaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldmVsKys7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGZpbmQoY2hpbGRyZW5baV0uX19ha2lsaS5fX2NoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmluZCh0aGlzLl9fY2hpbGRyZW4pO1xuICAgIHJldHVybiBmaW5kQWxsPyBhcnI6IChhcnJbMF0gfHwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG5lYXJlc3QgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kQWxsPXRydWVdIC0gZ2V0IGFycmF5IGlmIHRydWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbcmlnaHQ9ZmFsc2VdIC0gZnJvbSB0aGUgcmlnaHQgc2lkZSBpZiB0cnVlXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0TmVhcihzZWxlY3RvciA9ICcnLCBmaW5kQWxsID0gdHJ1ZSwgcmlnaHQgPSBmYWxzZSkge1xuICAgIGlmICghdGhpcy5fX3BhcmVudCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGxldmVsRWxlbWVudHMgPSB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19jaGlsZHJlbi5zbGljZSgpO1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICByaWdodCAmJiBsZXZlbEVsZW1lbnRzLnJldmVyc2UoKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGV2ZWxFbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBlbCA9IGxldmVsRWxlbWVudHNbaV07XG5cbiAgICAgIGlmIChlbCA9PT0gdGhpcy5lbCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKCFzZWxlY3RvciB8fCBlbC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGFyci5wdXNoKGVsLl9fYWtpbGkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFyci5yZXZlcnNlKCk7XG5cbiAgICBpZiAoIWZpbmRBbGwpIHtcbiAgICAgIHJldHVybiBhcnIubGVuZ3RoPyBhcnJbMF06IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBsaW5rIHRvIHRoZSBzdG9yZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfGZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBzdG9yZShuYW1lLCBoYW5kbGVyKSB7XG4gICAgaWYoIXRoaXMuX19pc01vdW50ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTWV0aG9kIFwic3RvcmVcIiBtdXN0IGJlIGNhbGxlZCBhZnRlciB0aGUgY29tcGlsYXRpb24uIEZvciBleGFtcGxlLCBpbiBcImNvbXBpbGVkXCIgbWV0aG9kLmApO1xuICAgIH1cblxuICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICBpZih0eXBlb2YgbmFtZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhcmdzLnVuc2hpZnQoJyonKTtcbiAgICAgIGhhbmRsZXIgPSBuYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJz8gdGhpcy5fX3N0b3JlQnlGdW5jdGlvbiguLi5hcmdzKTogdGhpcy5fX3N0b3JlQnlLZXlzKC4uLmFyZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGxpbmsgd2l0aCB0aGUgYXR0cmlidXRlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGF0dHIobmFtZSwgaGFuZGxlcikge1xuICAgIGlmKCF0aGlzLl9faXNNb3VudGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE1ldGhvZCBcImF0dHJcIiBtdXN0IGJlIGNhbGxlZCBhZnRlciB0aGUgY29tcGlsYXRpb24uIEZvciBleGFtcGxlLCBpbiBcImNvbXBpbGVkXCIgbWV0aG9kLmApO1xuICAgIH1cblxuICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICBpZih0eXBlb2YgbmFtZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhcmdzLnVuc2hpZnQoJyonKTtcbiAgICAgIGhhbmRsZXIgPSBuYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJz8gdGhpcy5fX2F0dHJCeUZ1bmN0aW9uKC4uLmFyZ3MpOiB0aGlzLl9fYXR0ckJ5S2V5cyguLi5hcmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHN0b3JlIGxpbmtcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXXxmdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgdW5zdG9yZShuYW1lLCBoYW5kbGVyKSB7XG4gICAgaWYoIXRoaXMuX19pc01vdW50ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTWV0aG9kIFwidW5zdG9yZVwiIG11c3QgYmUgY2FsbGVkIGFmdGVyIHRoZSBjb21waWxhdGlvbi4gRm9yIGV4YW1wbGUsIGluIFwiY29tcGlsZWRcIiBtZXRob2QuYCk7XG4gICAgfVxuXG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmKHR5cGVvZiBuYW1lID09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFyZ3MudW5zaGlmdCgnKicpO1xuICAgICAgaGFuZGxlciA9IG5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nPyB0aGlzLl9fdW5zdG9yZUJ5RnVuY3Rpb24oLi4uYXJndW1lbnRzKTogdGhpcy5fX3Vuc3RvcmVCeUtleXMoLi4uYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGF0dHJpYnV0ZSBsaW5rXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHVuYXR0cihuYW1lLCBoYW5kbGVyKSB7XG4gICAgaWYoIXRoaXMuX19pc01vdW50ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTWV0aG9kIFwidW5hdHRyXCIgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgdGhlIGNvbXBpbGF0aW9uLiBGb3IgZXhhbXBsZSwgaW4gXCJjb21waWxlZFwiIG1ldGhvZC5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYodHlwZW9mIG5hbWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYXJncy51bnNoaWZ0KCcqJyk7XG4gICAgICBoYW5kbGVyID0gbmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbic/IHRoaXMuX191bmF0dHJCeUZ1bmN0aW9uKC4uLmFyZ3VtZW50cyk6IHRoaXMuX191bmF0dHJCeUtleXMoLi4uYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgY29tcG9uZW50IG1hdGNoZXMgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IHNlbGVjdG9yXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgbWF0Y2hlcyhzZWxlY3Rvcikge1xuICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHNlbGVjdG9yKHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmVsLm1hdGNoZXMoc2VsZWN0b3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IHBhcmVudCBjb21wb25lbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIHBhcmVudChzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRQYXJlbnQoc2VsZWN0b3IsIGZhbHNlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBwYXJlbnQgY29tcG9uZW50cyBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBwYXJlbnRzKHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldFBhcmVudChzZWxlY3RvciwgdHJ1ZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBjaGlsZCBjb21wb25lbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIGNoaWxkKHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldENoaWxkcmVuKHNlbGVjdG9yLCBmYWxzZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY2hpbGQgY29tcG9uZW50cyBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBjaGlsZHJlbihzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRDaGlsZHJlbihzZWxlY3RvciwgdHJ1ZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY29tcG9uZW50cyBsZWZ0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgYmVmb3JlKHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIHRydWUsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY29tcG9uZW50cyByaWdodCBmcm9tIHRoZSBjdXJyZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGFmdGVyKHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIHRydWUsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IGNvbXBvbmVudCBsZWZ0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIHByZXYoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgZmFsc2UsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBjb21wb25lbnQgcmlnaHQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgbmV4dChzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCBmYWxzZSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGVsZW1lbnQgcGFyZW50XG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gcGFyZW50XG4gICAqL1xuICBhcHBlbmRUbyhwYXJlbnQpIHtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHsgc2V0UGFyZW50czogdHJ1ZSwgY2hlY2tDaGFuZ2VzOiBmYWxzZSB9IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbmNlbCBjb21wb25lbnQgY29tcGlsYXRpb25cbiAgICovXG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wYWxlIHRoZSBjb21wb25lbnQsIGJ1dCBjYW5jZWwgdGhlIGNvbXBpbGF0aW9uIGluc2lkZSBvZiBpdFxuICAgKi9cbiAgcHJldmVudCgpIHtcbiAgICB0aGlzLl9fcHJldmVudCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgZWxlbWVudCBodG1sXG4gICAqXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgZW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19lbXB0eS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBlbGVtZW50XG4gICAqXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgcmVtb3ZlKCkge1xuICAgIHJldHVybiB0aGlzLl9fZGVzdHJveS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHt9XG4gIGNvbXBpbGVkKCkge31cbiAgcmVjb21waWxlZCgpIHt9XG4gIHJlc29sdmVkKCkge31cbiAgcmVtb3ZlZCgpIHt9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudC5qcyIsImltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIFJlcXVlc3QgY2xhc3MuXG4gKiBBbiBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGFsbG93cyB5b3UgdG8gbWFrZSByZXF1ZXN0cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yZXF1ZXN0c31cbiAqL1xuZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xuICBfX2NhY2hlID0ge307XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gW2RlZmF1bHRzXSBcbiAgICovXG4gIGNvbnN0cnVjdG9yKGJhc2VVcmwsIGRlZmF1bHRzKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gYmFzZVVybD8gKGJhc2VVcmwucmVwbGFjZSgvXFwvJC8sICcnKSArICcvJyk6ICcnO1xuXG4gICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgIHN0YXR1c0Vycm9yc1BhdHRlcm46IC9eKFteMjNdKXw0MDQvLFxuICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgLi4uKGRlZmF1bHRzIHx8IHt9KVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogU2VuZCByZXF1ZXN0IHdpdGggYW55IG1ldGhvZFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHF1ZXJ5KG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgb3B0aW9ucyA9IHsuLi50aGlzLmRlZmF1bHRzLCAuLi4ob3B0aW9ucyB8fCB7fSl9OyBcbiAgICAgIG9wdGlvbnMudXJsID0gdGhpcy5iYXNlVXJsPyBgJHt0aGlzLmJhc2VVcmx9JHtvcHRpb25zLnVybC5yZXBsYWNlKC9eXFwvLywgJycpfWA6IG9wdGlvbnMudXJsOyAgXG4gICAgICBvcHRpb25zLm1ldGhvZCA9IG9wdGlvbnMubWV0aG9kIHx8ICdHRVQnO1xuICAgICAgXG4gICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7ICAgICAgXG4gICAgICBjb25zdCBiZWZvcmUgPSB0aGlzLnRyYW5zZm9ybUJlZm9yZSh4aHIsIG9wdGlvbnMpO1xuICAgICAgeGhyID0gYmVmb3JlLnhocjtcbiAgICAgIG9wdGlvbnMgPSBiZWZvcmUub3B0aW9ucztcbiAgICAgICh0eXBlb2Ygb3B0aW9ucy5vblN0YXJ0ID09ICdmdW5jdGlvbicpICYmIG9wdGlvbnMub25TdGFydCh4aHIpOyAgXG4gICAgICBvcHRpb25zLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwge307XG4gICAgICBcbiAgICAgIGlmIChvcHRpb25zLmpzb24pIHtcbiAgICAgICAgb3B0aW9ucy5qc29uICE9PSB0cnVlICYmIChvcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShvcHRpb25zLmpzb24pKTtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzWydjb250ZW50LXR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgb3B0aW9ucy5yZXNwb25zZVR5cGUgPSBvcHRpb25zLnJlc3BvbnNlVHlwZSB8fCAnanNvbic7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChvcHRpb25zLmZvcm0pIHtcbiAgICAgICAgb3B0aW9ucy5ib2R5ID0gdGhpcy5jcmVhdGVGb3JtRGF0YShvcHRpb25zLmZvcm0pO1xuICAgICAgICBvcHRpb25zLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddID0gJ211bHRpcGFydC9mb3JtLWRhdGEnO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5wYXJhbXMpIHtcbiAgICAgICAgbGV0IHN0ciA9IHRoaXMucGFyYW1zVG9RdWVyeShvcHRpb25zLnBhcmFtcyk7XG4gICAgICAgIHN0ciAmJiAob3B0aW9ucy51cmwgKz0gXCI/XCIgKyBzdHIpO1xuICAgICAgfVxuICAgICAgICAgICBcbiAgICAgIGxldCBoYXNoID0gbnVsbDtcbiAgICAgIGxldCBjYWNoZSA9IHR5cGVvZiBvcHRpb25zLmNhY2hlID09ICdmdW5jdGlvbic/IG9wdGlvbnMuY2FjaGUob3B0aW9ucyk6IG9wdGlvbnMuY2FjaGU7XG4gICAgICAod2luZG93LkFLSUxJX1NFUlZFUiAmJiAhQWtpbGkuX19pbml0KSAmJiAoY2FjaGUgPSB0cnVlKTtcblxuICAgICAgaWYob3B0aW9ucy5tZXRob2QudG9VcHBlckNhc2UoKSA9PSAnR0VUJyAmJiAoIW9wdGlvbnMuYm9keSB8fCB0eXBlb2Ygb3B0aW9ucy5ib2R5ID09ICdzdHJpbmcnKSkge1xuICAgICAgICBoYXNoID0gdGhpcy5jcmVhdGVDYWNoZUhhc2goeyBcbiAgICAgICAgICB1cmw6IG9wdGlvbnMudXJsLCBcbiAgICAgICAgICBtZXRob2Q6IG9wdGlvbnMubWV0aG9kLFxuICAgICAgICAgIHVzZXI6IG9wdGlvbnMudXNlciwgXG4gICAgICAgICAgcGFzc3dvcmQ6IG9wdGlvbnMucGFzc3dvcmQsIFxuICAgICAgICAgIGJvZHk6IG9wdGlvbnMuYm9keSBcbiAgICAgICAgfSk7ICAgICAgICBcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYoY2FjaGUgJiYgaGFzaCkgeyAgICAgICAgXG4gICAgICAgIGxldCBfY2FjaGUgPSB0aGlzLmdldENhY2hlKGhhc2gpO1xuICAgICAgICBsZXQgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgaWYoX2NhY2hlICYmIChjYWNoZSA9PT0gdHJ1ZSB8fCBub3cgLSBfY2FjaGUuY3JlYXRlZEF0IDw9IGNhY2hlKSkge1xuICAgICAgICAgIHJldHVybiByZXNvbHZlKHRoaXMudHJhbnNmb3JtQWZ0ZXIoX2NhY2hlLnJlc3VsdCkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCBvcHRpb25zLnVybCwgdHJ1ZSwgb3B0aW9ucy51c2VyLCBvcHRpb25zLnBhc3N3b3JkKTtcblxuICAgICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ3RpbWVvdXQnKSkge1xuICAgICAgICB4aHIudGltZW91dCA9IG9wdGlvbnMudGltZW91dDtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMucmVzcG9uc2VUeXBlKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSBvcHRpb25zLnJlc3BvbnNlVHlwZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSBvcHRpb25zLndpdGhDcmVkZW50aWFscztcbiAgICAgIH1cblxuICAgICAgbGV0IGhlYWRlcktleXMgPSBPYmplY3Qua2V5cyhvcHRpb25zLmhlYWRlcnMpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGhlYWRlcktleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrID0gaGVhZGVyS2V5c1tpXTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaywgb3B0aW9ucy5oZWFkZXJzW2tdKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm9uUHJvZ3Jlc3MgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB4aHIub25wcm9ncmVzcyA9ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gb3B0aW9ucy5vblByb2dyZXNzKHhocik7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgICByZXNwb25zZTogeGhyLnJlc3BvbnNlLFxuICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgICAgICByZWFkeVN0YXRlOiB4aHIucmVhZHlTdGF0ZSxcbiAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHhoci53aXRoQ3JlZGVudGlhbHMsXG4gICAgICAgICAgcmVzcG9uc2VUeXBlOiB4aHIucmVzcG9uc2VUeXBlLFxuICAgICAgICAgIHJlc3BvbnNlVGV4dDogeGhyLnJlc3BvbnNlVHlwZSA9PSAndGV4dCc/IHhoci5yZXNwb25zZVRleHQ6ICcnLFxuICAgICAgICAgIHJlc3BvbnNlWE1MOiB4aHIucmVzcG9uc2VUeXBlID09ICdkb2N1bWVudCc/IHhoci5yZXNwb25zZVhNTDogJycsXG4gICAgICAgICAgcmVzcG9uc2VVUkw6IHhoci5yZXNwb25zZVVSTCxcbiAgICAgICAgICB0aW1lb3V0OiB4aHIudGltZW91dCxcbiAgICAgICAgICBoZWFkZXJzOiB0aGlzLmdldEhlYWRlcnMoeGhyKSwgICAgICAgICBcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHRoaXMudHJhbnNmb3JtQWZ0ZXIocmVzdWx0KTtcblxuICAgICAgICBpZiAoKHhoci5zdGF0dXMgKyAnJykubWF0Y2gob3B0aW9ucy5zdGF0dXNFcnJvcnNQYXR0ZXJuKSkge1xuICAgICAgICAgIGxldCBlcnIgPSBuZXcgRXJyb3IoYFJlcXVlc3QgdG8gXCIke29wdGlvbnMudXJsfVwiIHJldHVybnMgZmFpbHVyZSBzdGF0dXMgY29kZSAke3hoci5zdGF0dXN9YCk7XG4gICAgICAgICAgZXJyLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICB9IFxuXG4gICAgICAgIGhhc2ggJiYgdGhpcy5jcmVhdGVDYWNoZShoYXNoLCByZXN1bHQpOyAgICAgICAgXG4gICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9udGltZW91dCA9ICgpID0+IHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgUmVxdWVzdCB0byBcIiR7b3B0aW9ucy51cmx9XCIgdGltZWQgb3V0YCkpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9uZXJyb3IgPSAoZXJyKSA9PiB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfTtcblxuICAgICAgeGhyLnNlbmQob3B0aW9ucy5ib2R5KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaGVhZGVycyBvZiBhIFhNTEh0dHBSZXF1ZXN0IGluc3RhbmNlXG4gICAqIFxuICAgKiBAcGFyYW0ge1hNTEh0dHBSZXF1ZXN0fVxuICAgKi9cbiAgZ2V0SGVhZGVycyA9IGZ1bmN0aW9uKHhocikge1xuICAgIGxldCBoZWFkZXJzID0ge307XG4gICAgbGV0IHN0ciA9IHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKTsgIFxuICAgIGxldCBhcnIgPSBzdHIuc3BsaXQoJ1xcdTAwMGRcXHUwMDBhJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBsaW5lID0gYXJyW2ldO1xuICAgICAgbGV0IGluZGV4ID0gbGluZS5pbmRleE9mKCdcXHUwMDNhXFx1MDAyMCcpO1xuXG4gICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgIGxldCBrZXkgPSBsaW5lLnN1YnN0cmluZygwLCBpbmRleCk7XG4gICAgICAgIGxldCB2YWwgPSBsaW5lLnN1YnN0cmluZyhpbmRleCArIDIpO1xuICAgICAgICBoZWFkZXJzW2tleV0gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGhlYWRlcnM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNhY2hlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGFzaFxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgZ2V0Q2FjaGUoaGFzaCkge1xuICAgIHJldHVybiB0aGlzLl9fY2FjaGVbaGFzaF0gfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgY2FjaGVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXG4gICAqIEBwYXJhbSB7b2JqZWN0fSByZXN1bHRcbiAgICovXG4gIGNyZWF0ZUNhY2hlKGhhc2gsIHJlc3VsdCkge1xuICAgIHRoaXMuX19jYWNoZVtoYXNoXSA9IHsgcmVzdWx0LCBjcmVhdGVkQXQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpIH07XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGNhY2hlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGFzaFxuICAgKi9cbiAgcmVtb3ZlQ2FjaGUoaGFzaCkge1xuICAgIGRlbGV0ZSB0aGlzLl9fY2FjaGVbaGFzaF07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgaGFzaCB0byBzYXZlIGluIHRoZSBjYWNoZVxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGNyZWF0ZUNhY2hlSGFzaChkYXRhKSB7XG4gICAgbGV0IGhhc2ggPSAwO1xuICAgIGxldCBzdHIgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCAgY2hhciA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBjaGFyO1xuICAgICAgICBoYXNoID0gaGFzaCAmIGhhc2g7IFxuICAgIH1cblxuICAgIHJldHVybiBoYXNoICsgJyc7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBvYmplY3QgdG8gcXVlcnkgc3RyaW5nXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHBhcmFtc1RvUXVlcnkob2JqKSB7XG4gICAgbGV0IHNlcCA9ICcmJztcbiAgICBsZXQgZXEgPSAnPSc7XG5cbiAgICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLm1hcCgoaykgPT4ge1xuICAgICAgbGV0IGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KGspO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmpba10pKSB7XG4gICAgICAgIGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KGspO1xuXG4gICAgICAgIHJldHVybiBvYmpba10ubWFwKCh2LCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGtzICsgYFske2l9XWAgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudCh2KTtcbiAgICAgICAgfSkuam9pbihzZXApO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAob2JqW2tdICYmIHR5cGVvZiBvYmpba10gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGxldCBvcHQgPSBbXTtcblxuICAgICAgICBPYmplY3Qua2V5cyhvYmpba10pLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgb3B0LnB1c2goa3MgKyBgWyR7a2V5fV1gICsgZXEgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tdW2tleV0pKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG9wdC5qb2luKHNlcCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGtzICsgZXEgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tdKTtcbiAgICAgIH1cbiAgICB9KS5qb2luKHNlcCk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBxdWVyeSBzdHJpbmcgdG8gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHBhcmFtc0Zyb21RdWVyeShzdHIpIHtcbiAgICBsZXQgcXVlcnkgPSB7fTtcbiAgICBsZXQgYW1wcyA9IHN0ci5zcGxpdCgnJicpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBhbXBzLmxlbmd0aDsgaSA8bDsgaSsrKSB7XG4gICAgICBsZXQgZXFzID0gIGFtcHNbaV0uc3BsaXQoJz0nKTtcbiAgICAgIGxldCBrZXkgPSBkZWNvZGVVUklDb21wb25lbnQoZXFzWzBdKTtcbiAgICAgIGxldCB2YWwgPSBkZWNvZGVVUklDb21wb25lbnQoZXFzWzFdKTtcblxuICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICAgIHF1ZXJ5W2tleV0ucHVzaCh2YWwpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAocXVlcnlba2V5XSkge1xuICAgICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0sIHZhbF07XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcXVlcnlba2V5XSA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIG11bHRpcGFydCBmb3JtIGRhdGEgZnJvbSBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgKiBAcGFyYW0ge0Zvcm1EYXRhfSBbZGF0YV1cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtuYW1lc3BhY2VdICAgKlxuICAgKiBAcmV0dXJucyB7Rm9ybURhdGF9XG4gICAqL1xuICBjcmVhdGVGb3JtRGF0YShvYmosIGRhdGEgPSBudWxsLCBuYW1lc3BhY2UgPSAnJykge1xuICAgIGxldCBmZCA9IGRhdGEgfHwgbmV3IEZvcm1EYXRhKCk7XG5cbiAgICBmb3IgKGxldCBrIGluIG9iaikge1xuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrKSAmJiBvYmpba10pIHtcbiAgICAgICAgbGV0IGtleSA9IG5hbWVzcGFjZT8gbmFtZXNwYWNlICsgJ1snICsgayArICddJzogaztcblxuICAgICAgICBpZiAob2JqW2tdIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgIGZkLmFwcGVuZChrZXksIG9ialtrXS50b0lTT1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KG9ialtrXSkpIHtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm1EYXRhKG9ialtrXSwgZmQsIGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZmQuYXBwZW5kKGtleSwgb2JqW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gZGF0YSBiZWZvcmUgYSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7WE1MSHR0cFJlcXVlc3R9IHhoclxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgdHJhbnNmb3JtQmVmb3JlKHhociwgb3B0aW9ucykge1xuICAgIHJldHVybiB7IHhociwgb3B0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIGRhdGEgYWZ0ZXIgYSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSByZXN1bHRcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHRyYW5zZm9ybUFmdGVyKHJlc3VsdCkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5yZXN1bHQsXG4gICAgICBkYXRhOiByZXN1bHQucmVzcG9uc2UsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBHRVQgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZ2V0KHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnR0VUJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIERFTEVURSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBkZWxldGUodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdERUxFVEUnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgUE9TVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBwb3N0KHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnUE9TVCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBQVVQgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcHV0KHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnUFVUJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIFBBVENIIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHBhdGNoKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnUEFUQ0gnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAgLyoqXG4gICAqICBNYWtlIEhFQUQgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgaGVhZCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ0hFQUQnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KCk7XG5cbi8qKlxuICogU2V0IHJvdXRlcidzIGRlZmF1bHQgdmFyaWFibGVzXG4gKi9cbnJlcXVlc3Quc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX19pbnN0YW5jZXMgPSB7fTtcbiAgdGhpcy5fX2NhY2hlID0ge307XG59XG5cbi8qKlxuICogQWRkIG5ldyByZXF1ZXN0IGluc3RhbmNlIHRvIHRoZSBtYWluIHNlcnZpY2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtSZXF1ZXN0fSBpbnN0YW5jZVxuICovXG5yZXF1ZXN0LmFkZEluc3RhbmNlID0gZnVuY3Rpb24obmFtZSwgaW5zdGFuY2UpIHtcbiAgdGhpcy5fX2luc3RhbmNlc1tuYW1lXSA9IGluc3RhbmNlO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgaW5zdGFuY2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5yZXF1ZXN0LnJlbW92ZUluc3RhbmNlID0gZnVuY3Rpb24obmFtZSkge1xuICBkZWxldGUgdGhpcy5fX2luc3RhbmNlc1tuYW1lXTtcbn07XG5cbi8qKlxuICogRGVpbml0IHJvdXRlclxuICovXG5yZXF1ZXN0LmRlaW5pdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNldERlZmF1bHRzKCk7XG59O1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1ZXN0LCAndXNlJywge1xuICBnZXQ6ICgpID0+IHtcbiAgICByZXR1cm4gcmVxdWVzdC5fX2luc3RhbmNlcztcbiAgfVxufSk7XG5cbnJlcXVlc3QuUmVxdWVzdCA9IFJlcXVlc3Q7XG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0O1xucmVxdWVzdC5zZXREZWZhdWx0cygpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2aWNlcy9yZXF1ZXN0LmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuXG4vKipcbiAqIEJhc2UgY29tcG9uZW50IHRvIHdvcmsgd2l0aCB0ZXh0IGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbnB1dH1cbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX3RleHRhcmVhfVxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfY29udGVudGVkaXRhYmxlfVxuICogXG4gKiBAYXR0ciB7c3RyaW5nfSB2YWx1ZSAtIGFjdHVhbCB2YWx1ZVxuICogQGF0dHIge2Jvb2xlYW59IGZvY3VzIC0gc2V0IHRoZSBmb2N1cyBvciBub3RcbiAqIEBhdHRyIHtudW1iZXJ9IGRlYm91bmNlIC0gZGVib3VuY2UgZGVsYXlcbiAqIEBtZXNzYWdlIHt2b2lkfSBkZWJvdW5jZSAtIHNlbnQgb24gdGhlIGRlYm91bmNlIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2lucHV0fVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy52YWx1ZUtleSA9ICd2YWx1ZSc7XG4gICAgdGhpcy5kZWJvdW5jZUludGVydmFsID0gNTAwO1xuICAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ID0gbnVsbDtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIGlmKHRoaXMuZWwuaGFzQXR0cmlidXRlKCdvbi1kZWJvdW5jZScpKSB7XG4gICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4geyAgICAgICAgXG4gICAgICAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ICYmIGNsZWFyVGltZW91dCh0aGlzLmRlYm91bmNlVGltZW91dCk7XG4gICAgICAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5hdHRycy5vbkRlYm91bmNlLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgICAgIH0sIHRoaXMuZGVib3VuY2VJbnRlcnZhbCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmF0dHIoJ2ZvY3VzJywgdGhpcy5zZXRGb2N1cyk7XG4gICAgdGhpcy5hdHRyKCd2YWx1ZScsIHRoaXMuc2V0VmFsdWUpO1xuICAgIHRoaXMuYXR0cignZGVib3VuY2UnLCB0aGlzLnNldERlYm91bmNlKTtcbiAgfVxuXG4gIHJlbW92ZWQoKSB7XG4gICAgdGhpcy5kZWJvdW5jZVRpbWVvdXQgJiYgY2xlYXJUaW1lb3V0KHRoaXMuZGVib3VuY2VUaW1lb3V0KTtcbiAgfVxuXG4gIHNldERlYm91bmNlKGludGVydmFsKSB7XG4gICAgdGhpcy5kZWJvdW5jZUludGVydmFsID0gK2ludGVydmFsO1xuICB9XG5cbiAgc2V0Rm9jdXModmFsdWUpIHtcbiAgICB2YWx1ZT8gdGhpcy5zZXRFbGVtZW50Rm9jdXMoKTogdGhpcy5zZXRFbGVtZW50Qmx1cigpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAodGhpcy5lbFt0aGlzLnZhbHVlS2V5XSAhPT0gdmFsdWUpICYmICh0aGlzLmVsW3RoaXMudmFsdWVLZXldID0gdmFsdWUgPT09IDA/ICcwJzogKHZhbHVlIHx8ICcnKSk7XG4gIH1cblxuICBzZXRFbGVtZW50Rm9jdXMoKSB7XG4gICAgdGhpcy5lbC5mb2N1cygpO1xuICB9XG5cbiAgc2V0RWxlbWVudEJsdXIoKSB7XG4gICAgdGhpcy5lbC5ibHVyKCk7XG4gIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGV4dC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgbG9vcHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2xvb3BzfVxuICogXG4gKiBAdGFnIGZvclxuICogQHNlbGVjdG9yIGZvcltpbl0sb2xbaW5dLHVsW2luXSx0aGVhZFtpbl0sdGJvZHlbaW5dLHRmb290W2luXVxuICogQGF0dHIge29iamVjdHxhcnJheX0gaW4gLSBkYXRhIHRvIGNyZWF0ZSB0aGUgbG9vcFxuICogQG1lc3NhZ2Uge29iamVjdHxhcnJheX0gb3V0IC0gc2VudCBvbiB0aGUgZGF0YSBjaGFuZ2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW2luXSc7XG4gIHN0YXRpYyBldmVudHMgPSBbJ291dCddO1xuICBzdGF0aWMgc2F2ZUF0dHJpYnV0ZVByb3h5SW4gPSB0cnVlOyAgXG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2ZvcicsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnb2wnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3VsJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0aGVhZCcsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGJvZHknLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3Rmb290JywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0cicsIHRoaXMuTG9vcCk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdsb29wJywgdGhpcy5Mb29wKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICBcbiAgICB0aGlzLml0ZXJhdG9ycyA9IFtdO1xuICAgIHRoaXMuaXRlcmF0b3JSZWYgPSBudWxsO1xuICAgIHRoaXMuaXRlcmF0b3JPdXRlckhUTUwgPSBudWxsO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7ICAgIFxuICAgIHRoaXMuY3JlYXRlSXRlcmF0b3IoKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cignaW4nLCB0aGlzLmRyYXcpO1xuICB9XG5cbiAgY3JlYXRlSXRlcmF0b3IoKSB7XG4gICAgbGV0IGVsO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5lbC5jaGlsZHJlbltpXTtcblxuICAgICAgaWYgKGNoaWxkLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50JykgPT0gJ2xvb3AnKSB7XG4gICAgICAgIGVsID0gY2hpbGQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBlbCA9IGNoaWxkO1xuICAgIH1cblxuICAgIGlmICghZWwpIHtcbiAgICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbG9vcCcpOyAgICAgIFxuICAgICAgZWwuaW5uZXJIVE1MID0gdGhpcy5lbC5pbm5lckhUTUw7IFxuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJzsgICAgIFxuICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChlbCk7XG4gICAgfVxuXG4gICAgbGV0IGNvbXBvbmVudE5hbWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpO1xuXG4gICAgaWYgKGNvbXBvbmVudE5hbWUgIT0gJ2xvb3AnKSB7XG4gICAgICBsZXQgY29tcG9uZW50ID0gQWtpbGkuY29tcG9uZW50KGNvbXBvbmVudE5hbWUgfHwgZWwudGFnTmFtZSk7XG5cbiAgICAgIGlmICghY29tcG9uZW50KSB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY29tcG9uZW50JywgJ2xvb3AnKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCEoY29tcG9uZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIEZvcikpIHtcbiAgICAgICAgbGV0IG1hc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsb29wJyk7XG4gICAgICAgIG1hc2suYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICBlbCA9IG1hc2s7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5odG1sID0gZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuaXRlcmF0b3JSZWYgPSBlbC5uZXh0U2libGluZztcbiAgICB0aGlzLml0ZXJhdG9yT3V0ZXJIVE1MID0gZWwub3V0ZXJIVE1MO1xuICAgIGVsLnJlbW92ZSgpO1xuICB9XG5cbiAgY3JlYXRlSXRlcmF0b3JFbGVtZW50KCkge1xuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgZWwuaW5uZXJIVE1MID0gdGhpcy5pdGVyYXRvck91dGVySFRNTDtcbiAgICBlbCA9IGVsLmNvbnRlbnQuZmlyc3RDaGlsZDtcbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBsb29wKGtleSwgdmFsdWUsIGluZGV4KSB7XG4gICAgdGhpcy5fX2luZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5fX2tleSA9IGtleTtcbiAgICB0aGlzLl9fdmFsdWUgPSB2YWx1ZTsgICAgXG4gICAgdGhpcy5fX2NvbXBhcmlzb25WYWx1ZSA9IHV0aWxzLmNvcHkodmFsdWUpO1xuXG4gICAgaWYodGhpcy5pdGVyYXRvcnMubGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIGxldCBpdGVyYXRvciA9IHRoaXMuaXRlcmF0b3JzW2luZGV4XTtcbiAgICAgIGxldCBjQ29weSA9IGl0ZXJhdG9yLmNvbXBhcnNpb24uY29weTtcbiAgICAgICAgXG4gICAgICBpZiAodGhpcy5fX2luZGV4ICE9PSBpdGVyYXRvci5pbmRleCkge1xuICAgICAgICBpdGVyYXRvci5zZXRJbmRleCgpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldEluZGV4KHRydWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fX2tleSAhPT0gaXRlcmF0b3Iua2V5KSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldEtleSgpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldEtleSh0cnVlKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKCF1dGlscy5jb21wYXJlKGNDb3B5LCB0aGlzLl9fY29tcGFyaXNvblZhbHVlLCB7IGlnbm9yZVVuZGVmaW5lZDogdHJ1ZSB9KSkge1xuICAgICAgICBpdGVyYXRvci5zZXRWYWx1ZSgpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldFZhbHVlKHRydWUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9fcHJvbWlzZXMucHVzaChBa2lsaS5jb21waWxlKGl0ZXJhdG9yLmVsLCB7IHJlY29tcGlsZTogeyBjaGVja0NoYW5nZXM6IHRydWUgfSB9KSk7XG4gICAgICByZXR1cm4gaXRlcmF0b3I7XG4gICAgfVxuICAgIFxuICAgIGxldCBlbCA9IHRoaXMuY3JlYXRlSXRlcmF0b3JFbGVtZW50KCk7XG4gICAgZWwuaW5uZXJIVE1MID0gdGhpcy5odG1sO1xuICAgIHRoaXMuZWwuaW5zZXJ0QmVmb3JlKGVsLCB0aGlzLml0ZXJhdG9yUmVmKTtcbiAgICB0aGlzLl9fcHJvbWlzZXMucHVzaChBa2lsaS5jb21waWxlKGVsKSk7XG4gICAgdGhpcy5pdGVyYXRvcnMucHVzaChlbC5fX2FraWxpKTtcbiAgICByZXR1cm4gZWwuX19ha2lsaTtcbiAgfVxuXG4gIGRyYXcoZGF0YSkge1xuICAgIGlmICh0eXBlb2YgZGF0YSAhPSAnb2JqZWN0JyB8fCBkYXRhID09PSBudWxsKSB7XG4gICAgICBpZiAoQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLndhcm4oYFwiRm9yXCIgY29tcG9uZW50IFwiaW5cIiBhdHRyaWJ1dGUgdmFsdWUgdHlwZSBtdXN0IGJlIGFuIG9iamVjdC9hcnJheWApOyAgICAgICAgXG4gICAgICB9XG5cbiAgICAgIGRhdGEgPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGEgPSBkYXRhOyAgIFxuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICBjb25zdCBsb29wID0gKGtleSwgdmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBsZXQgaXRlcmF0b3IgPSB0aGlzLmxvb3Aoa2V5LCB2YWx1ZSwgaW5kZXgpO1xuICAgICAgaXRlcmF0b3IuaXRlcmF0ZShpbmRleCk7XG4gICAgfTtcblxuICAgIGlmKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIGZvciAobGV0IGwgPSBkYXRhLmxlbmd0aDsgaW5kZXggPCBsOyBpbmRleCsrKSB7XG4gICAgICAgIGxvb3AoaW5kZXgsIGRhdGFbaW5kZXhdLCBpbmRleCk7XG4gICAgICB9ICAgICBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpO1xuXG4gICAgICBmb3IgKGxldCBsID0ga2V5cy5sZW5ndGg7IGluZGV4IDwgbDsgaW5kZXgrKykge1xuICAgICAgICBsZXQga2V5ID0ga2V5c1tpbmRleF07XG4gICAgICAgIGxvb3Aoa2V5LCBkYXRhW2tleV0sIGluZGV4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gaW5kZXgsIGwgPSB0aGlzLml0ZXJhdG9ycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBpdGVyYXRvciA9IHRoaXMuaXRlcmF0b3JzW2ldO1xuICAgICAgaXRlcmF0b3IuX19kZXN0cm95KCk7XG4gICAgICB0aGlzLml0ZXJhdG9ycy5zcGxpY2UoaSwgMSk7XG4gICAgICBsLS07XG4gICAgICBpLS07XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHRoaXMuX19wcm9taXNlcykudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB0aGlzLmF0dHJzLm9uT3V0LnRyaWdnZXIoZGF0YSwgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgIH0pOyAgICBcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCB0aGUgaW5pdGlhbCBzdGF0ZVxuICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5fX2l0ZXJhdG9yID0gbnVsbDtcbiAgICB0aGlzLl9faW5kZXggPSAwO1xuICAgIHRoaXMuX19rZXkgPSAnJztcbiAgICB0aGlzLl9fdmFsdWUgPSBudWxsO1xuICAgIHRoaXMuX19jb21wYXJpc29uVmFsdWUgPSBudWxsO1xuICAgIHRoaXMuX19wcm9taXNlcyA9IFtdO1xuICB9XG59XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBsb29wcy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfbG9vcHN9XG4gKiBcbiAqIEB0YWcgbG9vcFxuICogQHNlbGVjdG9yIGxvb3AsdHJcbiAqIEBhdHRyIEBzZWUgRm9yXG4gKiBAc2NvcGUgeyp9IGxvb3BWYWx1ZSAtIGRhdGEgaXRlbSdzIHZhbHVlIG9mIHRoZSBjdXJyZW50IGl0ZXJhdGlvbiBcbiAqIEBzY29wZSB7c3RyaW5nfG51bWJlcn0gbG9vcEtleSAtIGtleSBvZiB0aGUgaXRlcmF0aW9uXG4gKiBAc2NvcGUge251bWJlcn0gbG9vcEluZGV4IC0gaW5kZXggb2YgdGhlIGl0ZXJhdGlvblxuICovXG5leHBvcnQgY2xhc3MgTG9vcCBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG4gIHN0YXRpYyBjb250cm9sQXR0cmlidXRlcyA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5mb3IgPSBudWxsO1xuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuaXNGb3IgPSB0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnaW4nKTtcblxuICAgIGlmICghdGhpcy5pc0ZvciAmJiAhKHRoaXMuZWwucGFyZW50Tm9kZS5fX2FraWxpIGluc3RhbmNlb2YgRm9yKSkge1xuICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2l0ZXJhdG9yID0gdGhpcztcbiAgICB0aGlzLmZvciA9IHRoaXMuX19wYXJlbnQuX19ha2lsaTtcbiAgICB0aGlzLnNldEluZGV4KHRydWUpO1xuICAgIHRoaXMuc2V0S2V5KHRydWUpO1xuICAgIHRoaXMuc2V0VmFsdWUodHJ1ZSk7XG5cbiAgICBpZih0aGlzLmlzRm9yKSB7XG4gICAgICByZXR1cm4gc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIGlmKHRoaXMuaXNGb3IpIHtcbiAgICAgIHJldHVybiBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIHNldEluZGV4KHRhcmdldCkge1xuICAgIHRoaXMuaW5kZXggPSB0aGlzLmZvci5fX2luZGV4O1xuICAgIHRoaXMuc2NvcGUuX19zZXQoJ2xvb3BJbmRleCcsIHRoaXMuaW5kZXgsIGZhbHNlLCB0YXJnZXQpO1xuICB9XG5cbiAgc2V0S2V5KHRhcmdldCkge1xuICAgIHRoaXMua2V5ID0gdGhpcy5mb3IuX19rZXk7XG4gICAgdGhpcy5zY29wZS5fX3NldCgnbG9vcEtleScsIHRoaXMua2V5LCBmYWxzZSwgdGFyZ2V0KTtcbiAgfVxuXG4gIHNldFZhbHVlKHRhcmdldCkge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLmZvci5fX3ZhbHVlO1xuICAgIHRoaXMuc2NvcGUuX19zZXQoJ2xvb3BWYWx1ZScsIHRoaXMudmFsdWUsIHRydWUsIHRhcmdldCk7XG5cbiAgICB0aGlzLmNvbXBhcnNpb24gPSB7XG4gICAgICBjb3B5OiB0aGlzLmZvci5fX2NvbXBhcmlzb25WYWx1ZSxcbiAgICAgIHZhbHVlOiB0aGlzLmZvci5fX3ZhbHVlXG4gICAgfTtcbiAgfVxuXG4gIGl0ZXJhdGUoKSB7fVxufVxuXG5Gb3IuTG9vcCA9IExvb3A7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZm9yLmpzIiwiaW1wb3J0IEFraWxpIGZyb20gJy4vYWtpbGkuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuXG4vKipcbiAqIFNjb3BlIGNsYXNzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3Njb3BlfVxuICpcbiAqIEFsbCBwcm9wZXJ0aWVzIHN0YXJ0aW5nIHdpdGggX18gYXJlIG5vdCBtb25pdG9yZWQuXG4gKiBZb3UgY2FuIHVzZSB0aGVtIGZvciBpbnRlcm5hbCBtYW5pcHVsYXRpb25zLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29wZSB7XG4gIHN0YXRpYyBuZXN0ZWRXYXRjaGluZztcblxuICBjb25zdHJ1Y3RvcihuYW1lLCBlbCwgY29tcG9uZW50KSB7XG4gICAgdGhpcy5fX25hbWUgPSBuYW1lO1xuICAgIHRoaXMuX19lbCA9IGVsO1xuICAgIHRoaXMuX19jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgZWwuc2V0QXR0cmlidXRlKCdzY29wZScsIG5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBhIHNjb3BlIHZhbHVlXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbc3RyaWN0PWZhbHNlXSAtIHdpdGhvdXQgb2JqZWN0IGNvcHlpbmdcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXQoa2V5cywgdmFsdWUsIHN0cmljdCA9IGZhbHNlLCB0YXJnZXQgPSBmYWxzZSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG4gICAgXG4gICAgQWtpbGkudW5pc29sYXRlKCgpID0+IHtcbiAgICAgIHN0cmljdCAmJiAodGhpcy5fX2NvbXBvbmVudC5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgPSB0cnVlKTtcbiAgICAgIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKGtleXMsIHRhcmdldD8gdGhpcy5fX3RhcmdldDogdGhpcywgKGxhc3QsIHZhbCkgPT4ge1xuICAgICAgICBpZiAoIWxhc3QpIHtcbiAgICAgICAgICByZXR1cm4gdmFsIHx8IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICBzdHJpY3QgJiYgKHRoaXMuX19jb21wb25lbnQuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nID0gZmFsc2UpO1xuICAgIH0pO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Njb3BlLmpzIiwiaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG4vKipcbiAqIENsYXNzIGZvciB3b3JraW5nIHdpdGggZXZlbnRzLlxuICogQW4gaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBhbGxvd3MgeW91IHRvIHRyaWdnZXIgY3VzdG9tIGphdmFzY3JpcHQgZXZlbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2V2ZW50c31cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZWwsIGNvbXBvbmVudCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbCA9IGVsO1xuICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIHRoaXMuZWxDb21wb25lbnQgPSB0aGlzLmVsLl9fYWtpbGkgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIHRoZSBldmVudFxuICAgKlxuICAgKiBAcGFyYW0geyp9IGRhdGEgLSBzZW5kaW5nIGRhdGEuIFdpbGwgYmUgaW4gdGhlIGV2ZW50LmRldGFpbFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlXVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHRyaWdnZXIoZGF0YSwgb3B0aW9ucyA9IHt9LCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgaWYgKGZvcmNlIHx8ICF0aGlzLmluRXZhbHVhdGluZygpKSB7XG4gICAgICB0aGlzLmVsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KHRoaXMubmFtZSwgdGhpcy5wcmVwYXJlT3B0aW9ucyh7IGRldGFpbDogZGF0YSwgIC4uLm9wdGlvbnMgfSkpKTtcbiAgICB9ICAgXG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2ggdGhlIGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IF9FdmVudCAtIGNsYXNzIG9mIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlXVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGRpc3BhdGNoKF9FdmVudCwgb3B0aW9ucyA9IHt9LCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgaWYgKGZvcmNlIHx8ICF0aGlzLmluRXZhbHVhdGluZygpKSB7XG4gICAgICB0aGlzLmVsLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudCh0aGlzLm5hbWUsIHRoaXMucHJlcGFyZU9wdGlvbnMob3B0aW9ucykpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUHJlcGVyZSBhbiBldmVudCBvcHRpb25zXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIFxuICAgKi9cbiAgcHJlcGFyZU9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IHsgYnViYmxlczogdHJ1ZSwgLi4ub3B0aW9ucyB9OyAgXG4gICAgdGhpcy5lbENvbXBvbmVudCAmJiAhdGhpcy5lbENvbXBvbmVudC5fX3NhdmVBdHRyaWJ1dGVQcm94eU91dCAmJiAob3B0aW9ucy5kZXRhaWwgPSB1dGlscy5jb3B5KG9wdGlvbnMuZGV0YWlsKSk7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgZXZlbnQgY2FsbGJhY2sgZG9lc24ndCBydW4gcmVjdXJzaXZlXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaW5FdmFsdWF0aW5nKCkge1xuICAgIGxldCBkYXRhID0gdGhpcy5jb21wb25lbnQuX19ldmFsdWF0aW5nRXZlbnQ7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YS5lbCA9PT0gdGhpcy5lbCAmJiBkYXRhLmV2ZW50LnR5cGUgPT09IHRoaXMubmFtZSAmJiBkYXRhLmNvbXBvbmVudCA9PT0gdGhpcy5jb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogQmluZCB0aGUgZnVuY3Rpb25cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICovXG4gIGJpbmQoZm4pIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5uYW1lLCB0aGlzLmZuID0gZm4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCB0aGUgZnVuY3Rpb25cbiAgICovXG4gIHVuYmluZCgpIHtcbiAgICB0aGlzLmZuICYmIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMuZm4pO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBTdG9yZSBhbGxvd3MgeW91IHRvIHNhdmUgYW5kIGRpc3RyaWJ1dGUgZGF0YS5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9zdG9yZX1cbiAqL1xuY29uc3Qgc3RvcmUgPSBuZXcgUHJveHkoe30sIHtcbiAgZ2V0OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICBpZiAoa2V5ID09IFwiX190YXJnZXRcIikge1xuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gIH0sXG4gIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgIGlmKHV0aWxzLmNvbXBhcmUodGFyZ2V0W2tleV0sIHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxuICAgIHZhbHVlID0gdXRpbHMuY29weSh2YWx1ZSk7XG4gICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICBBa2lsaS5yb290ICYmIEFraWxpLnJvb3QuX19zdG9yZVRyaWdnZXJCeU5hbWUoa2V5LCB2YWx1ZSk7ICAgIFxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBkZWxldGVQcm9wZXJ0eTogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgQWtpbGkucm9vdCAmJiBBa2lsaS5yb290Ll9fc3RvcmVUcmlnZ2VyQnlOYW1lKGtleSwgdW5kZWZpbmVkKTtcbiAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvc3RvcmUuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCByb3V0ZXIgdGVtcGxhdGVzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmcjZG9jc190ZW1wbGF0ZXN9XG4gKiBcbiAqIEB0YWcgcm91dGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgncm91dGUnLCB0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtUcmFuc2l0aW9ufSB0cmFuc2l0aW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgc2V0VHJhbnNpdGlvbih0cmFuc2l0aW9uKSB7XG4gICAgbGV0IHN0YXRlID0gdHJhbnNpdGlvbi5wYXRoLnN0YXRlO1xuXG4gICAgY29uc3QgZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uID0gKHBhdGgpID0+IHtcbiAgICAgIGlmIChwYXRoLnBhcmVudCkge1xuICAgICAgICBpZiAocGF0aC5wYXJlbnQuY29tcG9uZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHBhdGgucGFyZW50LmNvbXBvbmVudC5fX3Njb3BlLl9fdHJhbnNpdGlvbi5wYXRoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldFBhcmVudFNjb3BlVHJhbnNpdGlvbihwYXRoLnBhcmVudCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBpbGUgPSAoaHRtbCkgPT4geyBcbiAgICAgIHRoaXMuZW1wdHkoKTsgIFxuICAgICAgbGV0IG5hbWUgPSAnY29tcG9uZW50JztcblxuICAgICAgaWYoc3RhdGUuY29tcG9uZW50KSB7XG4gICAgICAgIGxldCBleGlzdHMgPSBmYWxzZTtcbiAgICBcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gQWtpbGkuX19jb21wb25lbnRzKSB7XG4gICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gQWtpbGkuX19jb21wb25lbnRzW2tleV07XG4gICAgXG4gICAgICAgICAgaWYoY29tcG9uZW50ID09PSBzdGF0ZS5jb21wb25lbnQpIHtcbiAgICAgICAgICAgIG5hbWUgPSBrZXk7ICAgICAgICAgICAgXG4gICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGlmKCFleGlzdHMpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBcIiR7c3RhdGUubmFtZX1cIiBoYXMgbm8gZGVmaW5lZCBjb21wb25lbnRgKVxuICAgICAgICB9IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9IGA8JHsgbmFtZSB9PiR7IGh0bWwgfTwvJHsgbmFtZSB9PmA7XG4gICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl9fc2NvcGUuX190cmFuc2l0aW9uID0geyAgXG4gICAgICBwYXJlbnQ6IGdldFBhcmVudFNjb3BlVHJhbnNpdGlvbih0cmFuc2l0aW9uLnBhdGgpLCAgIFxuICAgICAgc3RhdGU6IHRyYW5zaXRpb24ucGF0aC5zdGF0ZSxcbiAgICAgIGRhdGE6IHRyYW5zaXRpb24ucGF0aC5kYXRhLFxuICAgICAgdXJsOiB0cmFuc2l0aW9uLnBhdGgudXJsLFxuICAgICAgcGFyYW1zOiB0cmFuc2l0aW9uLnBhdGgucGFyYW1zLFxuICAgICAgcXVlcnk6IHRyYW5zaXRpb24ucGF0aC5xdWVyeSxcbiAgICAgIGhhc2g6IHRyYW5zaXRpb24ucGF0aC5oYXNoXG4gICAgfTtcblxuICAgIGlmICghdHJhbnNpdGlvbi5wYXRoLmxvYWRlZCkge1xuICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKHN0YXRlLnRlbXBsYXRlKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS50ZW1wbGF0ZTtcbiAgICAgIH1cbiAgXG4gICAgICBpZiAoc3RhdGUudGVtcGxhdGVVcmwpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QuZ2V0KHN0YXRlLnRlbXBsYXRlVXJsKS50aGVuKHJlcyA9PiByZXMuZGF0YSk7XG4gICAgICB9XG4gICAgfSkudGhlbihodG1sID0+IGNvbXBpbGUoaHRtbCkpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvcm91dGUuanMiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vcmVxdWVzdC5qcyc7XG5pbXBvcnQgUm91dGUgZnJvbSAnLi4vY29tcG9uZW50cy9yb3V0ZS5qcyc7XG5cbi8qKlxuICogVHJhbnNpdGlvbiBjbGFzcy5cbiAqIEFuIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgY29uc2lzdHMgdGhlIGxhc3QgYWN0dWFsIHJvdXRlciB0cmFuc2l0aW9uIGluZm9ybWF0aW9uLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmcjZG9jc190cmFuc2l0aW9ufVxuICovXG5leHBvcnQgY2xhc3MgVHJhbnNpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHByZXZpb3VzID0gbnVsbCkgeyAgICBcbiAgICB0aGlzLnByZXZpb3VzID0gcHJldmlvdXM7XG4gICAgdGhpcy5wYXRoID0gbnVsbDtcbiAgICB0aGlzLnJvdXRlcyA9IFtdO1xuICAgIHRoaXMuc3RhdGVzID0ge307XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZGlyZWN0IHRvIGFub3RoZXIgc3RhdGVcbiAgICogXG4gICAqIEBzZWUgcm91dGVyLnN0YXRlXG4gICAqL1xuICByZWRpcmVjdCgpIHtcbiAgICB0aGlzLmNhbmNlbCgpOyAgIFxuICAgIHJvdXRlci5zdGF0ZS5hcHBseShyb3V0ZXIsIGFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogUmVsb2FkIHRoZSBjdXJyZW50IHN0YXRlXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc11cbiAgICogQHBhcmFtIHtvYmplY3R9IFtxdWVyeV1cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoXVxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqL1xuICByZWxvYWQocGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSB1bmRlZmluZWQsIG9wdGlvbnMgPSB7fSkge1xuICAgIHBhcmFtcyA9IHsgLi4udGhpcy5wYXRoLnBhcmFtcywgLi4ucGFyYW1zIH07XG4gICAgcXVlcnkgPSB7IC4uLnRoaXMucGF0aC5xdWVyeSwgLi4ucXVlcnkgfTtcbiAgICBoYXNoID0gaGFzaCA9PT0gdW5kZWZpbmVkPyB0aGlzLnBhdGguaGFzaDogaGFzaDtcbiAgICByZXR1cm4gdGhpcy5yZWRpcmVjdCh0aGlzLnBhdGguc3RhdGUubmFtZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBjdXJyZW50IHBhdGhcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXRoIFxuICAgKi9cbiAgc2V0UGF0aChwYXRoKSB7XG4gICAgcGF0aC5wYXJlbnQgPSB0aGlzLnBhdGggfHwgbnVsbDtcbiAgICB0aGlzLnBhdGggPSB7IHBhcmFtczoge30sIHF1ZXJ5OiB7fSwgLi4ucGF0aCB9O1xuICAgIHRoaXMucm91dGVzLnB1c2godGhpcy5wYXRoKTtcbiAgICB0aGlzLnN0YXRlc1t0aGlzLnBhdGguc3RhdGUubmFtZV0gPSB0aGlzLnBhdGg7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgcm91dGUgYnkgdGhlIHN0YXRlXG4gICAqICBcbiAgICogQHBhcmFtIHsqfSBzdGF0ZSBcbiAgICovXG4gIGdldFJvdXRlKHN0YXRlKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnJvdXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByb3V0ZSA9IHRoaXMucm91dGVzW2ldO1xuXG4gICAgICBpZiAocm91dGUuc3RhdGUgPT09IHN0YXRlKSB7XG4gICAgICAgIHJldHVybiByb3V0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBpdCBoYXMgdGhlIHN0YXRlXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgXG4gICAqL1xuICBoYXNTdGF0ZShzdGF0ZSkge1xuICAgIHJldHVybiAhIXRoaXMuc3RhdGVzW3N0YXRlLm5hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbmNlbCB0aGUgY3VycmVudCB0cmFuc2l0aW9uXG4gICAqL1xuICBjYW5jZWwoKSB7XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBBa2lsaSByb3V0ZXJcbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nfVxuICovXG5jb25zdCByb3V0ZXIgPSB7fTtcblxuLyoqXG4gKiBTZXQgcm91dGVyJ3MgZGVmYXVsdCB2YXJpYWJsZXNcbiAqL1xucm91dGVyLnNldERlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmJhc2VVcmwgPSBcIi9cIjtcbiAgdGhpcy5zdGF0ZXMgPSBbXTtcbiAgdGhpcy5oYXNoTW9kZSA9IHRydWU7XG4gIHRoaXMuX19yZWRpcmVjdHMgPSAwO1xuICB0aGlzLl9faW5pdCA9IGZhbHNlO1xuICB0aGlzLl9fb3B0aW9ucyA9IHt9O1xuICB0aGlzLl9fcGFyYW1SZWdleCA9IC8oXFwvPzooW1xcd1xcZC1dKykpL2c7XG4gIHRoaXMuX19yb3V0ZVNlbGVjdG9yID0gYyA9PiBjIGluc3RhbmNlb2YgUm91dGU7XG59XG5cbi8qKlxuICogQWRkIG5ldyBzdGF0ZSB0byB0aGUgcm91dGVyXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzdGF0ZSBuYW1lLiBUbyBzZXQgcGFyZW50cyB5b3UgY2FuIHVzZSBkb3QsIGUuZy4gJ2FwcC5hcnRpY2xlLmVkaXQnXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVybiAtIHVybCBwYXR0ZXJuIGxpa2UgJ2FwcC9hcnRpY2xlLzppZCdcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtyb3V0ZXJ9XG4gKi9cbnJvdXRlci5hZGQgPSBmdW5jdGlvbiAobmFtZSwgcGF0dGVybiwgb3B0aW9ucyA9IHt9KSB7XG4gIGlmKHR5cGVvZiBuYW1lID09ICdvYmplY3QnKSB7XG4gICAgb3B0aW9ucyA9IG5hbWU7XG4gICAgcGF0dGVybiA9IG9wdGlvbnMucGF0dGVybjtcbiAgICBuYW1lID0gb3B0aW9ucy5zdGF0ZTtcbiAgICBkZWxldGUgb3B0aW9ucy5wYXR0ZXJuO1xuICAgIGRlbGV0ZSBvcHRpb25zLnN0YXRlO1xuICB9XG5cbiAgaWYoIW5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBtdXN0IGhhdmUgYSBuYW1lYCk7XG4gIH1cblxuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICB0ZW1wbGF0ZTogJycsXG4gICAgdGVtcGxhdGVVcmw6ICcnLFxuICAgIGFic3RyYWN0OiBmYWxzZSxcbiAgICBjb21wb25lbnQ6IG51bGwsXG4gICAgcGFyYW1zOiB7fSxcbiAgICBxdWVyeToge30sXG4gICAgaGFzaDogbnVsbCxcbiAgICBoYW5kbGVyOiAoKSA9PiB7fSxcbiAgfTtcblxuICBpZihBa2lsaS5vcHRpb25zLmRlYnVnICYmIG9wdGlvbnMuY29tcG9uZW50ICYmIChvcHRpb25zLnRlbXBsYXRlIHx8IG9wdGlvbnMudGVtcGxhdGVVcmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oYFJvdXRlciBzdGF0ZSBcIiR7bmFtZX1cIiBtdXN0IG9ubHkgaGF2ZSBhIGNvbXBvbmVudCBvciB0ZW1wbGF0ZSBvcHRpb25gKTtcbiAgfSBcblxuICBpZiAoIW9wdGlvbnMudGVtcGxhdGUgJiYgIW9wdGlvbnMudGVtcGxhdGVVcmwgJiYgIW9wdGlvbnMuY29tcG9uZW50KSB7XG4gICAgb3B0aW9ucy5hYnN0cmFjdCA9IHRydWU7XG4gIH1cblxuICBpZiAodGhpcy5oYXMobmFtZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBcIiR7bmFtZX1cIiBpcyBhbHJlYWR5IGV4aXN0c2ApXG4gIH1cblxuICB0aGlzLnNldFN0YXRlKG5hbWUsIHBhdHRlcm4sIHsuLi5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9uc30pO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIHN0YXRlIGZyb20gdGhlIGxpc3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5yb3V0ZXIucmVtb3ZlID0gZnVuY3Rpb24obmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmICh0aGlzLnN0YXRlc1tpXS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHRoaXMuc3RhdGVzLnNwbGljZShpLCAxKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBDaGVjayBzdGF0ZSBleGlzdHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnJvdXRlci5oYXMgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKHRoaXMuc3RhdGVzW2ldLm5hbWUgPT0gbmFtZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBDaGFuZ2UgdGhlIHN0YXRlIHRvIHRoZSBwYXNzZWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSAtIHBhcmFtcyBmb3Igc3RhdGUge2lkOiAxfSA9PiAnL2FwcC86aWQnID0+ICcvYXBwLzEnXG4gKiBAcGFyYW0ge29iamVjdH0gW3F1ZXJ5XSAtIHF1ZXJ5IHt4OiAxfSA9PiAnL2FwcC8/eD0xJ1xuICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoXVxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICovXG5yb3V0ZXIuc3RhdGUgPSBmdW5jdGlvbiAoc3RhdGUsIHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gdW5kZWZpbmVkLCBvcHRpb25zID0ge30pIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG4gIFxuICBpZiAoIXN0YXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgcm91dGUgc3RhdGUgd2l0aCBuYW1lICR7c3RhdGV9YCk7XG4gIH1cblxuICBsZXQgdXJsID0gdGhpcy5jcmVhdGVTdGF0ZVVybChzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCk7ICBcbiAgdGhpcy5fX29wdGlvbnMgPSBvcHRpb25zO1xuICB0aGlzLl9fb3B0aW9ucy5tYW51YWwgPSB0cnVlO1xuICB0aGlzLnNldFVybCh1cmwpO1xufTtcblxuLyoqXG4gKiBHbyBiYWNrXG4gKi9cbnJvdXRlci5iYWNrID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeS5iYWNrLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBHbyB0byBhbnkgd2F5XG4gKi9cbnJvdXRlci5nbyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkuZ28uYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIEdvIGZvcndhcmRcbiAqL1xucm91dGVyLmZvcndhcmQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LmZvcndhcmQuYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIENoYW5nZSBzdGF0ZSBieSB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKi9cbnJvdXRlci5sb2NhdGlvbiA9IGZ1bmN0aW9uKHVybCwgb3B0aW9ucyA9IHsgcmVsb2FkOiBmYWxzZSB9KSB7XG4gIHRoaXMuX19vcHRpb25zID0gb3B0aW9ucztcbiAgdGhpcy5fX29wdGlvbnMubWFudWFsID0gdHJ1ZTtcblxuICBpZiAodGhpcy5oYXNoTW9kZSkge1xuICAgIGxldCBjdXJyZW50ID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTtcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHVybDtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGN1cnJlbnQgPT09IHVybCAmJiB0aGlzLmNoYW5nZVN0YXRlKCkuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgfVxuICBlbHNlIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgJycsIHVybCk7XG4gIH1cbn07XG5cbi8qKlxuICogUm91dGVyIGluaXRpYWxpemF0aW9uLiBTaG91bGQgYmUgY2FsbGVkIGJlZm9yZSBBa2lsaS5pbml0KClcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW2RlZmF1bHRVcmxdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtoYXNoTW9kZT10cnVlXVxuICovXG5yb3V0ZXIuaW5pdCA9IGZ1bmN0aW9uIChkZWZhdWx0VXJsID0gJycsIGhhc2hNb2RlID0gdHJ1ZSkge1xuICBsZXQgb2xkUHVzaFN0YXRlID0gd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlO1xuXG4gIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCByZXMgPSBvbGRQdXNoU3RhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIHJvdXRlci5jaGFuZ2VTdGF0ZSgpLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICB0aGlzLl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICB0aGlzLmNoYW5nZVN0YXRlKCkuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgfTtcblxuICB0aGlzLmRlZmF1bHRVcmwgPSBkZWZhdWx0VXJsO1xuICB0aGlzLmhhc2hNb2RlID0gaGFzaE1vZGU7XG5cbiAgdGhpcy5zdGF0ZXMuc29ydCgoYSwgYikgPT4ge1xuICAgIGEgPSBhLm5hbWUuc3BsaXQoJy4nKS5sZW5ndGg7XG4gICAgYiA9IGIubmFtZS5zcGxpdCgnLicpLmxlbmd0aDtcbiAgICByZXR1cm4gYSAtIGI7XG4gIH0pO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdGhpcy5pbml0U3RhdGUodGhpcy5zdGF0ZXNbaV0pO1xuICB9XG5cbiAgaWYgKCF0aGlzLnN0YXRlcy5sZW5ndGggJiYgQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKGBZb3UgZGlkbid0IGFkZCBhbnkgcm91dGVzIHRvIHRoZSByb3V0ZXJgKTtcbiAgfVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMuX19vblN0YXRlQ2hhbmdlSGFuZGxlcik7XG4gIHRoaXMuX19pbml0ID0gdHJ1ZTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgc3RhdGUgXG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSBcbiAqL1xucm91dGVyLmluaXRTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICBsZXQgcGFyZW50cyA9IFtdO1xuICBzdGF0ZS5jaGlsZHJlbiA9IFtdO1xuICBwYXJlbnRzID0gc3RhdGUubmFtZS5zcGxpdCgnLicpO1xuICBwYXJlbnRzLnBvcCgpO1xuICBzdGF0ZS5sZXZlbCA9IHN0YXRlLmFic3RyYWN0PyBudWxsOiBwYXJlbnRzLmxlbmd0aDtcblxuICBpZiAocGFyZW50cy5sZW5ndGgpIHtcbiAgICBsZXQgcGFyZW50TmFtZSA9IHBhcmVudHMuam9pbignLicpO1xuICAgIGxldCBwYXJlbnQgPSB0aGlzLmdldFN0YXRlKHBhcmVudE5hbWUpO1xuXG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIHBhcmVudCByb3V0ZSBzdGF0ZSBcIiR7cGFyZW50TmFtZX1cIiBmb3IgXCIke3N0YXRlLm5hbWV9XCJgKVxuICAgIH1cblxuICAgIGlmIChzdGF0ZS5sZXZlbCAhPT0gbnVsbCAmJiBwYXJlbnQuYWJzdHJhY3QpIHtcbiAgICAgIHN0YXRlLmxldmVsLS07XG4gICAgfVxuXG4gICAgc3RhdGUuZnVsbFBhdHRlcm4gPSB0aGlzLnNwbGl0U2xhc2hlcyhwYXJlbnQuZnVsbFBhdHRlcm4gKyAnLycgKyBzdGF0ZS5wYXR0ZXJuKTtcbiAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaChzdGF0ZSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgc3RhdGUuZnVsbFBhdHRlcm4gPSBzdGF0ZS5wYXR0ZXJuO1xuICB9XG59XG5cbi8qKlxuICogR2V0IHN0YXRlIGJ5IG5hbWVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHJldHVybnMge29iamVjdHxudWxsfVxuICovXG5yb3V0ZXIuZ2V0U3RhdGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLm5hbWUgPT0gbmFtZSkge1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBTZXQgc3RhdGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IHBhdHRlcm5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKi9cbnJvdXRlci5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChuYW1lLCBwYXR0ZXJuLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IHN0YXRlID0gey4uLm9wdGlvbnMsIG5hbWUsIHBhdHRlcm59O1xuICB0aGlzLnN0YXRlcy5wdXNoKHN0YXRlKTtcbiAgdGhpcy5fX2luaXQgJiYgdGhpcy5pbml0U3RhdGUoc3RhdGUpO1xuICByZXR1cm4gc3RhdGU7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBzdGF0ZSBieSBuYW1lXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucm91dGVyLnJlbW92ZVN0YXRlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHRoaXMuc3RhdGVzLnNwbGljZShpLCAxKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBTZXQgdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICovXG5yb3V0ZXIuc2V0VXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB0aGlzLmhhc2hNb2RlPyB0aGlzLnNldEhhc2hVcmwodXJsKTogdGhpcy5zZXRIaXN0b3J5VXJsKHVybCk7XG59O1xuXG4vKipcbiAqIFNldCB1cmwgdXNpbmcgaGlzdG9yeVxuICpcbiAqIEBwYXJhbSB1cmxcbiAqL1xucm91dGVyLnNldEhpc3RvcnlVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCAnJywgdXJsKTtcbn07XG5cbi8qKlxuICogU2V0IHVybCB1c2luZyBoYXNoXG4gKlxuICogQHBhcmFtIHVybFxuICovXG5yb3V0ZXIuc2V0SGFzaFVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIycgKyAodXJsIHx8ICcvJyk7XG59O1xuXG4vKipcbiAqIEdldCB1cmxcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuZ2V0VXJsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5oYXNoTW9kZSA/IHRoaXMuZ2V0SGFzaFVybCgpIDogdGhpcy5nZXRIaXN0b3J5VXJsKCk7XG59O1xuXG4vKipcbiAqIEdldCB1cmwgdXNpbmcgaGlzdG9yeVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRIaXN0b3J5VXJsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArIHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xufTtcblxuLyoqXG4gKiBHZXQgdXJsIHVzaW5nIGhhc2hcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuZ2V0SGFzaFVybCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoL14jLywgJycpO1xufTtcblxuLyoqXG4gKiBHZXQgcXVlcnkgcGFyYW1zXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldFVybFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmhhc2hNb2RlID8gdGhpcy5nZXRIYXNoVXJsUXVlcnkoKSA6IHRoaXMuZ2V0SGlzdG9yeVVybFF1ZXJ5KCk7XG59O1xuXG4vKipcbiAqIEdldCBxdWVyeSBwYXJhbXMgdXNpbmcgaGlzdG9yeVxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRIaXN0b3J5VXJsUXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJlcXVlc3QucGFyYW1zRnJvbVF1ZXJ5KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSk7XG59O1xuXG4vKipcbiAqIEdldCBxdWVyeSBwYXJhbXMgdXNpbmcgaGFzaFxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRIYXNoVXJsUXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJlcXVlc3QucGFyYW1zRnJvbVF1ZXJ5KCh3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnPycpWzFdIHx8ICcnKSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSB1cmwgYnkgZGF0YVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXVxuICogQHBhcmFtIHtvYmplY3R9IFtxdWVyeV1cbiAqIEBwYXJhbSB7c3RyaW5nfSBbaGFzaF1cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3ByZXBhcmU9dHJ1ZV1cbiAqL1xucm91dGVyLmNyZWF0ZVN0YXRlVXJsID0gZnVuY3Rpb24gKHN0YXRlLCBwYXJhbXMgPSB7fSwgcXVlcnkgPSB7fSwgaGFzaCA9IHVuZGVmaW5lZCwgcHJlcGFyZSA9IHRydWUpIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG4gIHByZXBhcmUgJiYgKHBhcmFtcyA9IHRoaXMucHJlcGFyZVN0YXRlUGFyYW1zKHN0YXRlLCBwYXJhbXMpKTtcbiAgcHJlcGFyZSAmJiAocXVlcnkgPSB0aGlzLnByZXBhcmVTdGF0ZVF1ZXJ5KHN0YXRlLCBxdWVyeSkpO1xuICBwcmVwYXJlICYmIChoYXNoID0gdGhpcy5wcmVwYXJlU3RhdGVIYXNoKHN0YXRlLCBoYXNoKSk7XG4gIGxldCB1cmwgPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAobSwgZiwgdikgPT4gJy8nICsgKHBhcmFtc1t2XSB8fCAnJykpO1xuICB1cmwgPSB1cmwucmVwbGFjZSgvXlxcXi8sICcnKTtcbiAgdXJsID0gdGhpcy5zcGxpdFNsYXNoZXModXJsKTtcblxuICBpZiAoT2JqZWN0LmtleXMocXVlcnkpLmxlbmd0aCkge1xuICAgIHVybCArPSAnPycgKyByZXF1ZXN0LnBhcmFtc1RvUXVlcnkocXVlcnkpO1xuICB9XG5cbiAgaWYgKCF0aGlzLmhhc2hNb2RlICYmIGhhc2gpIHtcbiAgICB1cmwgKz0gJyMnICsgaGFzaC5yZXBsYWNlKCcjJywgJycpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG5cbi8qKlxuICogUHJlcGFyZSB0aGUgc3RhdGUgcGFyYW1zXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXNcbiAqL1xucm91dGVyLnByZXBhcmVTdGF0ZVBhcmFtcyA9IGZ1bmN0aW9uKHN0YXRlLCBwYXJhbXMpIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7ICBcbiAgbGV0IGFsbFBhcmFtcyA9IHt9OyAgXG4gIGxldCBsYXN0U3RhdGUgPSAnJztcbiAgY29uc3QgZGVmYXVsdFBhcmFtcyA9IHt9O1xuICBjb25zdCBzdGF0ZXMgPSBzdGF0ZS5uYW1lLnNwbGl0KCcuJyk7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IHN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgY3VycmVudCA9IGxhc3RTdGF0ZSArIHN0YXRlc1tpXTtcbiAgICBhbGxQYXJhbXMgPSB7IC4uLmFsbFBhcmFtcywgLi4udGhpcy5nZXRTdGF0ZShjdXJyZW50KS5wYXJhbXMgfTtcbiAgICBsYXN0U3RhdGUgPSBjdXJyZW50ICsgJy4nO1xuICB9XG5cbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMoYWxsUGFyYW1zKTtcbiBcbiAgZm9yKGxldCBpID0gMCwgbCA9IHBhcmFtS2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQga2V5ID0gcGFyYW1LZXlzW2ldO1xuICAgIGxldCB2YWwgPSBhbGxQYXJhbXNba2V5XTtcbiAgICBkZWZhdWx0UGFyYW1zW2tleV0gPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic/IHZhbChyb3V0ZXIudHJhbnNpdGlvbiwgcGFyYW1zW2tleV0pOiB2YWw7XG4gIH1cblxuICBmb3IobGV0IGtleSBpbiBwYXJhbXMpIHtcbiAgICBjb25zdCB2YWwgPSBwYXJhbXNba2V5XTtcblxuICAgIGlmKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZih2YWwgPT09IG51bGwpIHtcbiAgICAgIGRlbGV0ZSBkZWZhdWx0UGFyYW1zW2tleV07XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBkZWZhdWx0UGFyYW1zW2tleV0gPSB2YWw7XG4gIH1cblxuICByZXR1cm4gZGVmYXVsdFBhcmFtczsgIFxufVxuXG4vKipcbiAqIFByZXBhcmUgdGhlIHN0YXRlIHF1ZXJ5XG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBxdWVyeVxuICovXG5yb3V0ZXIucHJlcGFyZVN0YXRlUXVlcnkgPSBmdW5jdGlvbihzdGF0ZSwgcXVlcnkpIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7IFxuICBsZXQgYWxsUXVlcnkgPSB7fTtcbiAgbGV0IGxhc3RTdGF0ZSA9ICcnO1xuICBjb25zdCBkZWZhdWx0UXVlcnkgPSB7fTtcbiAgY29uc3Qgc3RhdGVzID0gc3RhdGUubmFtZS5zcGxpdCgnLicpO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBzdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgY29uc3QgY3VycmVudCA9IGxhc3RTdGF0ZSArIHN0YXRlc1tpXTtcbiAgICBhbGxRdWVyeSA9IHsgLi4uYWxsUXVlcnksIC4uLnRoaXMuZ2V0U3RhdGUoY3VycmVudCkucXVlcnkgfTtcbiAgICBsYXN0U3RhdGUgPSBjdXJyZW50ICsgJy4nO1xuICB9XG5cbiAgY29uc3QgcXVlcnlLZXlzID0gT2JqZWN0LmtleXMoYWxsUXVlcnkpO1xuIFxuICBmb3IobGV0IGkgPSAwLCBsID0gcXVlcnlLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrZXkgPSBxdWVyeUtleXNbaV07XG4gICAgbGV0IHZhbCA9IGFsbFF1ZXJ5W2tleV07XG4gICAgZGVmYXVsdFF1ZXJ5W2tleV0gPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic/IHZhbChyb3V0ZXIudHJhbnNpdGlvbiwgcXVlcnlba2V5XSk6IHZhbDtcbiAgfVxuXG4gIGZvcihsZXQga2V5IGluIHF1ZXJ5KSB7XG4gICAgY29uc3QgdmFsID0gcXVlcnlba2V5XTtcblxuICAgIGlmKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZih2YWwgPT09IG51bGwpIHtcbiAgICAgIGRlbGV0ZSBkZWZhdWx0UXVlcnlba2V5XTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGRlZmF1bHRRdWVyeVtrZXldID0gdmFsO1xuICB9XG5cbiAgcmV0dXJuIGRlZmF1bHRRdWVyeTsgIFxufVxuXG4vKipcbiAqIFByZXBhcmUgdGhlIHN0YXRlIGhhc2hcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGhhc2hcbiAqL1xucm91dGVyLnByZXBhcmVTdGF0ZUhhc2ggPSBmdW5jdGlvbihzdGF0ZSwgaGFzaCkge1xuICBpZihoYXNoICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gaGFzaDtcbiAgfVxuXG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBjb25zdCBzdGF0ZXMgPSBzdGF0ZS5uYW1lLnNwbGl0KCcuJyk7XG4gIGxldCBsYXN0U3RhdGUgPSAnJztcblxuICBmb3IobGV0IGkgPSAwLCBsID0gc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBsYXN0U3RhdGUgKyBzdGF0ZXNbaV07XG4gICAgY29uc3QgY3VycmVudEhhc2ggPSB0aGlzLmdldFN0YXRlKGN1cnJlbnQpLmhhc2g7XG4gICAgY3VycmVudEhhc2ggIT09IHVuZGVmaW5lZCAmJiAoaGFzaCA9IGN1cnJlbnRIYXNoKTtcbiAgICBsYXN0U3RhdGUgPSBjdXJyZW50ICsgJy4nO1xuICB9XG5cbiAgcmV0dXJuIGhhc2ggfHwgJyc7XG59XG5cbi8qKlxuICogUmVtb3ZlIGFsbCB1bm5lY2Vzc2FyeSBzbGFzaGVzIGZyb20gYW4gdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLnNwbGl0U2xhc2hlcyA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgcmV0dXJuIHVybC5yZXBsYWNlKC9bL10rL2csICcvJyk7XG59O1xuXG4vKipcbiAqIEdldCBzdGF0ZSB1cmwgY29udGVudFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRQYXR0ZXJuQ29udGVudCA9IGZ1bmN0aW9uIChzdGF0ZSwgdXJsKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBsZXQga2V5cyA9IFtdO1xuICBsZXQgcGFyYW1zID0ge307XG5cbiAgdXJsID0gdXJsLnNwbGl0KCc/JylbMF07XG4gIHVybCA9IHVybC5zcGxpdCgnIycpWzBdO1xuXG4gIGxldCB1cmxQYXR0ZXJuID0gc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZSh0aGlzLl9fcGFyYW1SZWdleCwgKG0sIGYsIHYpID0+IHtcbiAgICBrZXlzLnB1c2godik7XG4gICAgcmV0dXJuICcvPyhbXi9dKiknO1xuICB9KTtcblxuICB1cmxQYXR0ZXJuID0gdXJsUGF0dGVybi5yZXBsYWNlKC8oW15eL10rKVsvXSskLywgJyQxJyk7XG4gIGxldCByZWdleCA9IG5ldyBSZWdFeHAodXJsUGF0dGVybiwgJ2cnKTtcbiAgbGV0IGlzSW5jbHVkZWQgPSB1cmwubWF0Y2gocmVnZXgpO1xuICBcbiAgaWYgKCFpc0luY2x1ZGVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB1cmwucmVwbGFjZShyZWdleCwgKG0sIC4uLmFyZ3MpID0+IHsgXG4gICAgYXJncyA9IGFyZ3Muc2xpY2UoMCwgYXJncy5sZW5ndGggLSAyKTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBhcmdzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHYgPSBhcmdzW2ldO1xuICAgICAgdiAmJiAocGFyYW1zW2tleXNbaV1dID0gdik7XG4gICAgfSAgXG4gIH0pO1xuXG4gIHJldHVybiB7IHBhcmFtcyB9O1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgc3RhdGUgaXMgYWN0aXZlIG5vd1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5jbHVkZXNcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaXNBY3RpdmVTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlLCBpbmNsdWRlcyA9IGZhbHNlKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBsZXQgdXJsID0gdGhpcy5zcGxpdFNsYXNoZXMoJy8nICsgdGhpcy5nZXRVcmwoKS5zcGxpdCgnPycpWzBdICsgJy8nKTtcbiAgbGV0IHVybFBhdHRlcm4gPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAnLz8oW14vXSopJyk7XG4gIHVybFBhdHRlcm4gPSB1cmxQYXR0ZXJuLnJlcGxhY2UoL15cXF4vLCAnJykucmVwbGFjZSgvXFwkJC8sICcnKTtcbiAgbGV0IHN0ciA9IGluY2x1ZGVzPyB1cmxQYXR0ZXJuOiB0aGlzLnNwbGl0U2xhc2hlcygnXi8nICsgdXJsUGF0dGVybiArICcvJCcpO1xuICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKHN0cik7ICBcbiAgcmV0dXJuIHJlZ2V4LnRlc3QodXJsKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIGN1cnJlbnQgdXJsIGluY2x1ZGVzIGEgc3RhdGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmluQWN0aXZlU3RhdGUgPSBmdW5jdGlvbihzdGF0ZSkge1xuICByZXR1cm4gcm91dGVyLmlzQWN0aXZlU3RhdGUoc3RhdGUsIHRydWUpO1xufTtcblxuLyoqXG4gKiBHZXQgcm91dGUgY29tcG9uZW50IGJ5IGxldmVsXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxldmVsXG4gKi9cbnJvdXRlci5nZXRSb3V0ZSA9IGZ1bmN0aW9uIChsZXZlbCkge1xuICBsZXQgaSA9IDA7XG5cbiAgY29uc3QgZmluZCA9IChlbCkgPT4ge1xuICAgIGxldCByb3V0ZSA9IGVsLmNoaWxkKHRoaXMuX19yb3V0ZVNlbGVjdG9yKTtcblxuICAgIGlmICghcm91dGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChpID09IGxldmVsKSB7XG4gICAgICByZXR1cm4gcm91dGU7XG4gICAgfVxuXG4gICAgaSsrO1xuICAgIHJldHVybiBmaW5kKHJvdXRlKTtcbiAgfTtcblxuICByZXR1cm4gZmluZChBa2lsaS5yb290KTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBmaXJzdCBtYXRjaFxuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGFyclxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge29iamVjdHxudWxsfVxuICovXG5yb3V0ZXIuZ2V0QXJyYXlQYXR0ZXJuQ29udGVudCA9IGZ1bmN0aW9uIChhcnIsIHVybCkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSBhcnJbaV07XG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldFBhdHRlcm5Db250ZW50KHN0YXRlLCB1cmwpO1xuXG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdGF0ZTogc3RhdGUsIC4uLmNvbnRlbnQgfTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBHZXQgc3RhdGVzIGJ5IGxldmVsXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxldmVsXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbnJvdXRlci5nZXRTdGF0ZXNCeUxldmVsID0gZnVuY3Rpb24gKGxldmVsKSB7XG4gIGxldCBzdGF0ZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLmxldmVsIDwgbGV2ZWwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChzdGF0ZS5sZXZlbCA+IGxldmVsKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzdGF0ZXMucHVzaChzdGF0ZSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVzO1xufTtcblxuLyoqXG4gKiBSZWxvYWQgdGhlIHN0YXRlXG4gKiBcbiAqIEBzZWUgVHJhbnNpdGlvbi5yZWxvYWRcbiAqL1xucm91dGVyLnJlbG9hZCA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgaWYoIXRoaXMudHJhbnNpdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcignTm90IGZvdW5kIGFuIGFjdGl2ZSB0cmFuc2l0aW9uIHRvIHJlbG9hZCB0aGUgc3RhdGUnKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLnRyYW5zaXRpb24ucmVsb2FkKC4uLmFyZ3MpO1xufVxuXG4vKipcbiAqIElzb2xhdGUgdGhlIGZ1bmN0aW9uIHRvIG5vdCB0cmlnZ2VyIHJvdXRlciBoYW5kbGVycyBpbnNpZGVcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbnJvdXRlci5pc29sYXRlID0gZnVuY3Rpb24gKGZuKSB7XG4gIHRoaXMuX19pc29sYXRlZCA9IHRydWU7XG4gIGxldCByZXMgPSBmbigpO1xuICB0aGlzLl9faXNvbGF0ZWQgPSBmYWxzZTtcbiAgcmV0dXJuIHJlcztcbn1cblxuLyoqXG4gKiBDaGFuZ2Ugc3RhdGVcbiAqL1xucm91dGVyLmNoYW5nZVN0YXRlID0gZnVuY3Rpb24gKCkgeyAgICBcbiAgaWYodGhpcy5fX2lzb2xhdGVkKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG4gIFxuICBsZXQgdXJsID0gdGhpcy5nZXRVcmwoKTtcbiAgbGV0IHBhcmFtcyA9IHt9O1xuICBsZXQgcXVlcnkgPSB0aGlzLmdldFVybFF1ZXJ5KCk7ICBcbiAgbGV0IGhhc2ggPSB0aGlzLmhhc2hNb2RlPyAnJzogd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTsgXG4gIGxldCBwcmV2VHJhbnNpdGlvbiA9IHJvdXRlci50cmFuc2l0aW9uIHx8IG51bGw7XG4gIGxldCB0cmFuc2l0aW9uID0gcm91dGVyLnRyYW5zaXRpb24gPSBuZXcgVHJhbnNpdGlvbihwcmV2VHJhbnNpdGlvbik7XG4gIGxldCBsZXZlbCA9IDA7XG4gIGxldCBjb21wb25lbnRMZXZlbCA9IDA7XG4gICBcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzdGF0ZS1jaGFuZ2UnLCB7IGRldGFpbDogdHJhbnNpdGlvbiB9KSk7XG5cbiAgY29uc3QgbmV4dCA9IChzdGF0ZXMsIG9uRW5kKSA9PiB7ICAgIFxuICAgIGlmICghc3RhdGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG9uRW5kICYmIG9uRW5kKCk7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldEFycmF5UGF0dGVybkNvbnRlbnQoc3RhdGVzLCB1cmwpO1xuXG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICByZXR1cm4gb25FbmQgJiYgb25FbmQoKTtcbiAgICB9XG5cbiAgICBsZXQgc3RhdGUgPSBjb250ZW50LnN0YXRlO1xuICAgIHRyYW5zaXRpb24uc2V0UGF0aCh7IHN0YXRlLCBjb21wb25lbnQ6IHJvdXRlLCBsb2FkZWQ6IHRydWUgfSk7XG4gICAgbGV0IGN1cnJlbnRVcmwgPSB0aGlzLmNyZWF0ZVN0YXRlVXJsKHN0YXRlLCBjb250ZW50LnBhcmFtcywgcXVlcnksIGhhc2gsIGZhbHNlKTtcbiAgICBwYXJhbXMgPSB0aGlzLnByZXBhcmVTdGF0ZVBhcmFtcyhzdGF0ZSwgeyAuLi5wYXJhbXMsIC4uLmNvbnRlbnQucGFyYW1zIH0pO1xuICAgIHF1ZXJ5ID0gdGhpcy5wcmVwYXJlU3RhdGVRdWVyeShzdGF0ZSwgcXVlcnkpO1xuICAgIGhhc2ggPSB0aGlzLnByZXBhcmVTdGF0ZUhhc2goc3RhdGUsIGhhc2ggfHwgKCF0aGlzLl9fb3B0aW9ucy5tYW51YWw/IHVuZGVmaW5lZDogJycpKSB8fCAnJztcbiAgICBsZXQgcmVhbFVybCA9IHRoaXMuY3JlYXRlU3RhdGVVcmwoc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gsIGZhbHNlKTsgXG4gICAgY3VycmVudFVybCAhPSByZWFsVXJsICYmIHRoaXMuaXNvbGF0ZSgoKSA9PiB0aGlzLnNldFVybChyZWFsVXJsKSk7ICAgXG4gICAgbGV0IHJvdXRlID0gc3RhdGUuYWJzdHJhY3Q/IG51bGw6IHRoaXMuZ2V0Um91dGUoY29tcG9uZW50TGV2ZWwpO1xuXG4gICAgaWYgKCFyb3V0ZSAmJiAhc3RhdGUuYWJzdHJhY3QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvciAoYE5vdCBmb3VuZCByb3V0ZSBjb21wb25lbnQgZm9yIHN0YXRlIFwiJHtzdGF0ZS5uYW1lfVwiYCk7XG4gICAgfSAgICBcblxuICAgIHRyYW5zaXRpb24ucGF0aC5wYXJhbXMgPSBwYXJhbXM7XG4gICAgdHJhbnNpdGlvbi5wYXRoLnF1ZXJ5ID0gcXVlcnk7XG4gICAgdHJhbnNpdGlvbi5wYXRoLmhhc2ggPSBoYXNoO1xuICAgIHRyYW5zaXRpb24ucGF0aC51cmwgPSByZWFsVXJsO1xuICAgICFzdGF0ZS5hYnN0cmFjdCAmJiBjb21wb25lbnRMZXZlbCsrO1xuICAgIGxldmVsKys7ICAgIFxuXG4gICAgbGV0IGhhc1N0YXRlID0gcHJldlRyYW5zaXRpb24gJiYgcHJldlRyYW5zaXRpb24uaGFzU3RhdGUoc3RhdGUpO1xuICAgIGxldCBpc0RpZmZlcmVudCA9IHRydWU7XG4gICAgIFxuICAgIGlmIChoYXNTdGF0ZSAmJiB0aGlzLl9fb3B0aW9ucy5tYW51YWwgJiYgcmVhbFVybCAhPSB1cmwpIHtcbiAgICAgIGxldCByb3V0ZSA9IHByZXZUcmFuc2l0aW9uLmdldFJvdXRlKHN0YXRlKTsgICAgICBcbiAgICAgIGxldCBwcmV2ID0geyBwYXJhbXM6IHJvdXRlLnBhcmFtcywgcXVlcnk6IHJvdXRlLnF1ZXJ5LCBoYXNoOiByb3V0ZS5oYXNoIH07XG4gICAgICBsZXQgY3VycmVudCA9IHsgcGFyYW1zLCBxdWVyeSwgaGFzaCB9O1xuICAgICAgaXNEaWZmZXJlbnQgPSAhdXRpbHMuY29tcGFyZShwcmV2LCBjdXJyZW50KTtcbiAgICB9ICAgXG4gICAgXG4gICAgdHJhbnNpdGlvbi5wYXRoLmxvYWRlZCA9IGlzRGlmZmVyZW50ICYmIHRoaXMuX19vcHRpb25zLnJlbG9hZCAhPT0gZmFsc2U7XG4gICAgXG4gICAgUHJvbWlzZS5yZXNvbHZlKHRyYW5zaXRpb24ucGF0aC5sb2FkZWQ/IHN0YXRlLmhhbmRsZXIodHJhbnNpdGlvbik6IHRyYW5zaXRpb24ucGF0aC5kYXRhKS50aGVuKChkYXRhKSA9PiB7ICBcbiAgICAgIGlmICh0cmFuc2l0aW9uLl9fY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBvbkVuZCAmJiBvbkVuZCgpO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0cmFuc2l0aW9uLnBhdGguZGF0YSA9IGRhdGE7XG4gICAgICBzdGF0ZS50aXRsZSAmJiAoZG9jdW1lbnQudGl0bGUgPSB0eXBlb2Ygc3RhdGUudGl0bGUgPT0gJ2Z1bmN0aW9uJz8gc3RhdGUudGl0bGUodHJhbnNpdGlvbik6IHN0YXRlLnRpdGxlKTtcblxuICAgICAgaWYgKHN0YXRlLmFic3RyYWN0KSB7XG4gICAgICAgIHJldHVybiBuZXh0KHN0YXRlLmNoaWxkcmVuLCBvbkVuZCk7XG4gICAgICB9XG4gXG4gICAgICByb3V0ZS5zZXRUcmFuc2l0aW9uKHRyYW5zaXRpb24pLnRoZW4oKCkgPT4ge1xuICAgICAgICBuZXh0KHN0YXRlLmNoaWxkcmVuLCBvbkVuZCk7XG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiBvbkVuZCAmJiBvbkVuZChlcnIpKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIG5leHQodGhpcy5nZXRTdGF0ZXNCeUxldmVsKDApLCAoZXJyKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0cmFuc2l0aW9uLnJvdXRlcy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKHRoaXMuX19yZWRpcmVjdHMpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihgV3Jvbmcgcm91dGVyIGRlZmF1bHQgdXJsIFwiJHt0aGlzLmRlZmF1bHRVcmx9XCJgKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0VXJsKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFVybCA9PSB0aGlzLmdldFVybCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihgTm90IGZvdW5kIGFueSByb3V0ZXNgKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5pc29sYXRlKCgpID0+IHRoaXMuc2V0VXJsKHRoaXMuZGVmYXVsdFVybCkpOyAgICAgICAgICBcbiAgICAgICAgICB0aGlzLl9fcmVkaXJlY3RzKys7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlU3RhdGUoKS50aGVuKHJlc29sdmUpLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLndhcm4oYE5vdCBmb3VuZCBhIGRlZmF1bHQgcm91dGUuIFlvdSBjYW4gcGFzcyBpdCBpbiBcInJvdXRlci5pbml0KGRlZmF1bHRVcmwpXCIgZnVuY3Rpb25gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoIXRoaXMuX19vcHRpb25zLnNhdmVTY3JvbGxQb3NpdGlvbiAmJiAoIXRyYW5zaXRpb24ucGF0aCB8fCAhdHJhbnNpdGlvbi5wYXRoLmhhc2gpKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fX29wdGlvbnMgPSB7fTtcbiAgICAgIHRoaXMuX19yZWRpcmVjdHMgPSAwO1xuXG4gICAgICBpZiAocHJldlRyYW5zaXRpb24pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGxldmVsLCBsID0gcHJldlRyYW5zaXRpb24ucm91dGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGxldCByb3V0ZSA9IHByZXZUcmFuc2l0aW9uLnJvdXRlc1tpXTtcbiAgICAgICAgICByb3V0ZS5jb21wb25lbnQgJiYgcm91dGUuY29tcG9uZW50LmVtcHR5KCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzdGF0ZS1jaGFuZ2VkJywgeyBkZXRhaWw6IHRyYW5zaXRpb24gfSkpO1xuICAgICAgcmVzb2x2ZSh0cmFuc2l0aW9uKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIERlaW5pdCByb3V0ZXJcbiAqL1xucm91dGVyLmRlaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5fX29uU3RhdGVDaGFuZ2VIYW5kbGVyKTtcbiAgcm91dGVyLnNldERlZmF1bHRzKCk7XG59O1xuXG5yb3V0ZXIuVHJhbnNpdGlvbiA9IFRyYW5zaXRpb247XG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG5yb3V0ZXIuc2V0RGVmYXVsdHMoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvcm91dGVyLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGNvbmRpdGlvbmFsIHN0YXRlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NvbmRpdGlvbmFsX3N0YXRlbWVudHN9XG4gKiBcbiAqIEB0YWcgaWZcbiAqIEBzZWxlY3RvciBpZltpc11cbiAqIEBhdHRyIHtib29sZWFufSBpcyAtIHNob3cgdGhlIGVsZW1lbnQgY29udGVudCBvciBub3RcbiAqIEBhdHRyIHtib29sZWFufSByZWNyZWF0ZSAtIGRlbGV0ZSB0aGUgY29udGVudCBhbmQgcmVjcmVhdGUgb3IganVzdCBzaG93L2hpZGUgXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElmIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gdHJ1ZTsgXG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tpc10nO1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ3JlY3JlYXRlJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2lmJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdlbHNlLWlmJywgdGhpcy5FbHNlSWYpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnZWxzZScsIHRoaXMuRWxzZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuc3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMucmVjcmVhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ29tcGlsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRpc3BsYXkgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpLmRpc3BsYXk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ3JlY3JlYXRlJywgdGhpcy5zZXRSZWNyZWF0aW9uKTtcbiAgICByZXR1cm4gdGhpcy5hdHRyKCdpcycsIHZhbCA9PiAodGhpcy5zdGF0ZSA9ICEhdmFsLCB0aGlzLnNldFN0YXRlKCkpKTtcbiAgfVxuXG4gIHNldEFjdGl2aXR5KGFjdGl2ZSkge1xuICAgIHRoaXMuYWN0aXZlID0gYWN0aXZlO1xuICB9XG5cbiAgc2V0UmVjcmVhdGlvbihyZWNyZWF0ZSkge1xuICAgIHRoaXMucmVjcmVhdGUgPSByZWNyZWF0ZTtcbiAgfVxuXG4gIHNldFN0YXRlKCkge1xuICAgIGxldCByZXMgPSB0aGlzLmNvbXBpbGF0aW9uKCk7XG4gICAgbGV0IG5leHQgPSB0aGlzLmVsLm5leHRFbGVtZW50U2libGluZztcbiAgICBsZXQgcmVzdWx0O1xuXG4gICAgaWYgKCFuZXh0IHx8ICFuZXh0Lm1hdGNoZXMoJ2Vsc2UtaWYsZWxzZScpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmV4dC5fX2FraWxpLnNldEFjdGl2aXR5KHRoaXMuYWN0aXZlIHx8IHRoaXMuc3RhdGUpO1xuICAgIG5leHQuX19ha2lsaS5zZXRSZWNyZWF0aW9uKHRoaXMucmVjcmVhdGUpO1xuICAgIHJlc3VsdCA9IG5leHQuX19ha2lsaS5zZXRTdGF0ZSgpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzKS50aGVuKCgpID0+ICByZXN1bHQpO1xuICB9XG5cbiAgY29tcGlsYXRpb24oKSB7XG4gICAgbGV0IHJlcztcblxuICAgIGlmICh0aGlzLnN0YXRlICYmICF0aGlzLmFjdGl2ZSkge1xuICAgICAgaWYgKHRoaXMucmVjcmVhdGUgfHwgIXRoaXMuaXNDb21waWxlZCkge1xuICAgICAgICByZXMgPSB0aGlzLmNvbXBpbGUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbC5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsIHRoaXMuZGlzcGxheSwgJ2ltcG9ydGFudCcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnJlY3JlYXRlKSB7XG4gICAgICAgIHRoaXMuZW1wdHkoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCF0aGlzLmlzQ29tcGlsZWQpIHtcbiAgICAgICAgcmVzID0gdGhpcy5jb21waWxlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScsICdpbXBvcnRhbnQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgY29tcGlsZSgpIHtcbiAgICBsZXQgcmVzO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5odG1sOyAgICBcbiAgICByZXMgPSBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgIHRoaXMuaXNDb21waWxlZCA9IHRydWU7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxufVxuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgY29uZGl0aW9uYWwgc3RhdGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfY29uZGl0aW9uYWxfc3RhdGVtZW50c31cbiAqIFxuICogQHRhZyBlbHNlLWlmXG4gKiBAc2VsZWN0b3IgZWxzZS1pZltpc11cbiAqIEBhdHRyIHtib29sZWFufSBpcyBAc2VlIElmXG4gKi9cbmV4cG9ydCBjbGFzcyBFbHNlSWYgZXh0ZW5kcyBJZiB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgY29uZGl0aW9uYWwgc3RhdGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfY29uZGl0aW9uYWxfc3RhdGVtZW50c31cbiAqIFxuICogQHRhZyBlbHNlXG4gKi9cbmV4cG9ydCBjbGFzcyBFbHNlIGV4dGVuZHMgRWxzZUlmIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnaXMnLCAndHJ1ZScpO1xuICB9XG59XG5cbklmLkVsc2VJZiA9IEVsc2VJZjtcbklmLkVsc2UgPSBFbHNlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2lmLmpzIiwiaW1wb3J0IEZvciwgeyBMb29wIH0gZnJvbSAnLi9mb3IuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCBzZWxlY3QuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX3NlbGVjdH1cbiAqIFxuICogQHRhZyBzZWxlY3QgIFxuICogQGF0dHIge3N0cmluZ30gdmFsdWUgLSBhY3R1YWwgdmFsdWVcbiAqIEBhdHRyIFtpbl0gQHNlZSBGb3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydtdWx0aXBsZSddLmNvbmNhdChGb3IuYm9vbGVhbkF0dHJpYnV0ZXMpO1xuICBzdGF0aWMgZXZlbnRzID0gWydjaGFuZ2UnXS5jb25jYXQoRm9yLmV2ZW50cyk7XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3NlbGVjdCcsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnb3B0aW9uJywgdGhpcy5PcHRpb24pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pdGVyYXRvclRhZ05hbWUgPSAnb3B0aW9uJztcbiAgICB0aGlzLmlzTXVsdGlwbGUgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkgeyBcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHRoaXMuZWwuY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpKTtcbiAgICBsZXQgcmVzID0gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgICBcbiAgICB0aGlzLmF0dHIoJ211bHRpcGxlJywgdGhpcy5zZXRNdWx0aXBsZSk7XG4gICAgdGhpcy5hdHRyKCdjb250ZW50JywgdGhpcy5zZXRDb250ZW50KTtcbiAgICB0aGlzLmF0dHIoJ2luJywgdGhpcy5kcmF3U2VsZWN0KTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgc2V0TXVsdGlwbGUodmFsdWUpIHtcbiAgICB0aGlzLmlzTXVsdGlwbGUgPSB2YWx1ZTtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUodXRpbHMuY29weSh0aGlzLmVsLmNvbnRlbnQpKSk7XG4gIH1cblxuICBzZXRDb250ZW50KHZhbHVlKSB7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKHZhbHVlKSk7XG4gIH1cblxuICBkcmF3U2VsZWN0KCkge1xuICAgIGxldCBzZWxlY3RlZCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldLl9fYWtpbGk7XG4gICAgICBsZXQgc2VsZWN0aW9uID0gb3B0aW9uLmF0dHJzLnNlbGVjdGVkO1xuXG4gICAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICAgIHNlbGVjdGVkLnB1c2gob3B0aW9uLmVsLnZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgb3B0aW9uLmVsLnNlbGVjdGVkID0gc2VsZWN0aW9uO1xuICAgIH1cblxuICAgIGlmICghc2VsZWN0ZWQubGVuZ3RoKSB7XG4gICAgICB0aGlzLnJlZGVmaW5lKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKHNlbGVjdGVkKSk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlSXRlcmF0b3JFbGVtZW50KCkge1xuICAgIGxldCBlbCA9IHN1cGVyLmNyZWF0ZUl0ZXJhdG9yRWxlbWVudCgpO1xuXG4gICAgaWYgKCFlbC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0aGlzLmh0bWwudHJpbSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIGlmICghdGhpcy5pc011bHRpcGxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbC52YWx1ZTtcbiAgICB9XG5cbiAgICBsZXQgY29udGVudCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldO1xuXG4gICAgICBpZiAob3B0aW9uLnNlbGVjdGVkKSB7XG4gICAgICAgIGNvbnRlbnQucHVzaChvcHRpb24udmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgZm9ybWF0VmFsdWUodmFsdWUpIHtcbiAgICBpZiAodGhpcy5pc011bHRpcGxlKSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpPyBbdmFsdWVdOiBbXTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5sZW5ndGg/IHZhbHVlWzBdOiAnJztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJlZGVmaW5lKCkge1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5nZXRDb250ZW50KCkpO1xuICB9XG5cbiAgY2hhbmdlVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodXRpbHMuY29tcGFyZSh0aGlzLmVsLmNvbnRlbnQsIHZhbHVlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdGhpcy5lbC52YWx1ZSA9IHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXTtcblxuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB2YWx1ZS5pbmRleE9mKG9wdGlvbi52YWx1ZSkgIT0gLTE7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5lbC52YWx1ZSA9IHZhbHVlO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXTtcblxuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBvcHRpb24udmFsdWUgPT0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5lbC5jb250ZW50ID0gdmFsdWU7XG4gICAgdGhpcy5hdHRycy5vbkNoYW5nZS5kaXNwYXRjaChFdmVudCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBPcHRpb24gZXh0ZW5kcyBMb29wIHtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydzZWxlY3RlZCddO1xuXG4gIF9fZ2V0UGFyc2VkRXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG4gICAgcmV0dXJuIHV0aWxzLmRlY29kZUh0bWxFbnRpdGllcyhleHByZXNzaW9uKTtcbiAgfVxuXG4gIGNoYW5nZWRTZWxlY3RlZCh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U2VsZWN0ZWQodmFsdWUpO1xuICB9XG5cbiAgc2V0U2VsZWN0ZWQodmFsdWUpIHtcbiAgICB0aGlzLmVsLnNlbGVjdGVkID0gdmFsdWU7XG4gICAgdGhpcy5mb3IucmVkZWZpbmUoKTtcbiAgfVxufVxuXG5TZWxlY3QuT3B0aW9uID0gT3B0aW9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3NlbGVjdC5qcyIsImltcG9ydCBUZXh0IGZyb20gJy4vdGV4dC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggaW5wdXQgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2lucHV0fVxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfY2hlY2tib3hfYW5kX3JhZGlvfVxuICogXG4gKiBAdGFnIGlucHV0XG4gKiBAYXR0ciBAc2VlIFRleHRcbiAqIEBtZXNzYWdlIEBzZWUgVGV4dFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCBleHRlbmRzIFRleHQge1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ2NoZWNrZWQnLCAnbXVsdGlwbGUnXS5jb25jYXQoVGV4dC5ib29sZWFuQXR0cmlidXRlcyk7XG4gIHN0YXRpYyBldmVudHMgPSBbJ2NoYW5nZSddLmNvbmNhdChUZXh0LmV2ZW50cyk7XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2lucHV0JywgdGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmlzQ2hlY2tib3ggPSB0aGlzLmVsLnR5cGUgPT0gJ2NoZWNrYm94JztcbiAgICB0aGlzLmlzUmFkaW8gPSB0aGlzLmVsLnR5cGUgPT0gJ3JhZGlvJzsgICAgXG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIGlmKHRoaXMuaXNSYWRpbyB8fCB0aGlzLmlzQ2hlY2tib3gpIHtcbiAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0Q2hlY2tlZCh0aGlzLmVsLmNoZWNrZWQsIGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgIFxuICAgIHJldHVybiBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICByZXNvbHZlZCgpIHtcbiAgICAodGhpcy5pc0NoZWNrYm94IHx8IHRoaXMuaXNSYWRpbykgJiYgdGhpcy5hdHRyKCdjaGVja2VkJywgdGhpcy5zZXRDaGVja2VkKTtcbiAgICByZXR1cm4gc3VwZXIucmVzb2x2ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfSAgXG5cbiAgc2V0Q2hlY2tlZCh2YWx1ZSwgdHJpZ2dlciA9IHRydWUpIHtcbiAgICB2YWx1ZSA9ICEhdmFsdWU7XG5cbiAgICBpZiAodGhpcy5wcmV2Q2hlY2tlZCA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmVsLmNoZWNrZWQgPSB0aGlzLnByZXZDaGVja2VkID0gdmFsdWU7XG4gICAgdHJpZ2dlciAmJiB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgdGhpcy5pc1JhZGlvICYmIHRoaXMuY2hhbmdlUmFkaW8oKTtcbiAgfVxuXG4gIHNldFZhbHVlKCkge1xuICAgIHN1cGVyLnNldFZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5pc1JhZGlvICYmIHRoaXMuYXR0cnMub25DaGFuZ2UuZGlzcGF0Y2goRXZlbnQsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgfVxuXG4gIGNoYW5nZVJhZGlvKCkge1xuICAgIGxldCBuYW1lID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICBsZXQgc2VsZWN0b3IgPSBgaW5wdXRbdHlwZT1yYWRpb11bbmFtZT0nJHtuYW1lfSddOm5vdChbc2NvcGU9JyR7dGhpcy5zY29wZS5fX25hbWV9J10pYDtcbiAgICBsZXQgY2hpbGRyZW4gPSBBa2lsaS5yb290LmNoaWxkcmVuKHNlbGVjdG9yKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcmFkaW8gPSBjaGlsZHJlbltpXTtcbiAgICAgIHJhZGlvLnNldENoZWNrZWQocmFkaW8uZWwuY2hlY2tlZCk7XG4gICAgfVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaW5wdXQuanMiLCJpbXBvcnQgRm9yLCB7IExvb3AgfSBmcm9tICcuL2Zvci5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggcmFkaW8gZ3JvdXAuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX3JhZGlvX2dyb3VwfVxuICogXG4gKiBAdGFnIHJhZGlvXG4gKiBAc2VsZWN0b3IgcmFkaW9bbmFtZV1cbiAqIEBhdHRyIHtzdHJpbmd9IG5hbWUgLSBuYW1lIG9mIHRoZSBncm91cFxuICogQGF0dHIge3N0cmluZ3xudWxsfSB2YWx1ZSAtIHNlbGVjdGVkIHZhbHVlXG4gKiBAYXR0ciBbaW5dIEBzZWUgRm9yXG4gKiBAbWVzc2FnZSB7c3RyaW5nfSByYWRpbyAtIHNlbnQgb24gdmFsdWUgY2hhbmdlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZGlvIGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW25hbWVdJztcbiAgc3RhdGljIGV2ZW50cyA9IFsncmFkaW8nXS5jb25jYXQoRm9yLmV2ZW50cyk7XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JhZGlvJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdyYWRpby1idXR0b24nLCB0aGlzLlJhZGlvQnV0dG9uKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXRlcmFibGUgPSB0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnaW4nKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgaWYodGhpcy5pdGVyYWJsZSkge1xuICAgICAgcmV0dXJuIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIEFraWxpLm5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5nZXRSYWRpb1ZhbHVlKCk7XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSB0aGlzLnByZXZWYWx1ZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJldlZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuYXR0cnMub25SYWRpby50cmlnZ2VyKHZhbHVlLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmKHRoaXMuaXRlcmFibGUpIHtcbiAgICAgIHJldHVybiBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIHJlc29sdmVkKCkge1xuICAgIHRoaXMuYXR0cignaW4nLCB0aGlzLnNldE5hbWVzLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTsgICBcbiAgICB0aGlzLmF0dHIoJ3ZhbHVlJywgdGhpcy5zZXRWYWx1ZSk7IFxuICAgIHRoaXMuYXR0cignbmFtZScsIHRoaXMuc2V0TmFtZXMpO1xuXG4gICAgaWYodGhpcy5pdGVyYWJsZSkge1xuICAgICAgcmV0dXJuIHN1cGVyLnJlc29sdmVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgc2V0TmFtZXMobmFtZSkge1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oJ2lucHV0W3R5cGU9cmFkaW9dJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY2hpbGRyZW5baV0uZWwuc2V0QXR0cmlidXRlKCduYW1lJywgbmFtZSB8fCB0aGlzLmF0dHJzLm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSB0aGlzLnByZXZWYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBwcmV2ID0gdGhpcy5wcmV2VmFsdWU7XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbignaW5wdXRbdHlwZT1yYWRpb10nKTtcbiAgICBsZXQgaXNUcnVlID0gZmFsc2U7XG4gICAgdGhpcy5wcmV2VmFsdWUgPSB2YWx1ZTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcmFkaW8gPSBjaGlsZHJlbltpXTtcbiAgICAgIGxldCBpc1NlbGVjdGVkID0gcmFkaW8uZWwudmFsdWUgPT09IHZhbHVlO1xuXG4gICAgICBpc1NlbGVjdGVkICYmIChpc1RydWUgPSB0cnVlKTtcbiAgICAgIHJhZGlvLnNldENoZWNrZWQoaXNTZWxlY3RlZCk7XG4gICAgfVxuXG4gICAgaWYgKCFpc1RydWUpIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICBpZiAocHJldiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmF0dHJzLm9uUmFkaW8udHJpZ2dlcih2YWx1ZSwgeyBidWJibGVzOiB0cnVlIH0pO1xuICB9XG5cbiAgZ2V0UmFkaW9WYWx1ZSgpIHtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICBpZiAocmFkaW8uZWwuY2hlY2tlZCkge1xuICAgICAgICByZXR1cm4gcmFkaW8uZWwudmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIHJhZGlvIGdyb3VwIGl0ZW0uXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX3JhZGlvX2dyb3VwfVxuICogXG4gKiBAdGFnIHJhZGlvLWJ1dHRvblxuICogQGF0dHIge3N0cmluZ30gdmFsdWUgLSB2YWx1ZVxuICovXG5leHBvcnQgY2xhc3MgUmFkaW9CdXR0b24gZXh0ZW5kcyBMb29wIHtcbiAgc3RhdGljIHRlbXBsYXRlID0gJzxsYWJlbD48aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIke3RoaXMudmFsdWV9XCIvPiR7dGhpcy5fX2NvbnRlbnR9PC9sYWJlbD4nO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cigndmFsdWUnLCAndmFsdWUnKTtcbiAgICByZXR1cm4gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5SYWRpby5SYWRpb0J1dHRvbiA9IFJhZGlvQnV0dG9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3JhZGlvLmpzIiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCB0ZXh0YXJlYS5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfdGV4dGFyZWF9XG4gKiBcbiAqIEB0YWcgdGV4dGFyZWFcbiAqIEBhdHRyIEBzZWUgVGV4dFxuICogQG1lc3NhZ2UgQHNlZSBUZXh0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRhcmVhIGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0ZXh0YXJlYScsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGV4dGFyZWEuanMiLCJpbXBvcnQgVGV4dCBmcm9tICcuL3RleHQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGVsZW1lbnRzIHdpdGggY29udGVudGVkaXRhYmxlIGF0dHJpYnV0ZS5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfY29udGVudGVkaXRhYmxlfVxuICogXG4gKiBAdGFnIGNvbnRlbnRcbiAqIEBzZWxlY3RvciBjb250ZW50LFtjb250ZW50ZWRpdGFibGVdXG4gKiBAYXR0ciBAc2VlIFRleHRcbiAqIEBhdHRyIHtib29sZWFufSBbZWRpdGFibGVdIC0gZWRpdGFibGUgb3Igbm90XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnQgZXh0ZW5kcyBUZXh0IHtcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2NvbnRlbnQnLCB0aGlzKTtcbiAgICBBa2lsaS5hbGlhcygnW2NvbnRlbnRlZGl0YWJsZV0nLCAnY29udGVudCcpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgaWYgKHRoaXMuZWwuaGFzQXR0cmlidXRlKCdlZGl0YWJsZScpKSB7XG4gICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ2VkaXRhYmxlJykpO1xuICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoJ2VkaXRhYmxlJyk7XG4gICAgfVxuXG4gICAgaWYgKGdldENvbXB1dGVkU3R5bGUodGhpcy5lbCkuZGlzcGxheSA9PSAnaW5saW5lJykge1xuICAgICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlS2V5ID0gJ2lubmVySFRNTCc7XG4gIH1cblxuICBzZXRFbGVtZW50Rm9jdXMoKSB7XG4gICAgbGV0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICBsZXQgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuXG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKHRoaXMuZWwpO1xuICAgIHJhbmdlLmNvbGxhcHNlKGZhbHNlKTtcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9jb250ZW50LmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byBpbmNsdWRlIHRlbXBsYXRlcyBieSB1cmwuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2h0bWxfdGVtcGxhdGVzfVxuICogXG4gKiBAdGFnIGluY2x1ZGVcbiAqIEBzZWxlY3RvciBpbmNsdWRlW3VybF1cbiAqIEBhdHRyIHtzdHJpbmd9IHVybCAtIHRlbXBsYXRlIHBhdGhcbiAqIEBhdHRyIHtudW1iZXJ8ZnVuY3Rpb258Ym9vbGVhbn0gW2NhY2hlXSAtIHJlcXVlc3QgY2FjaGUge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yZXF1ZXN0cyNkb2NzX2NhY2hlfVxuICogQG1lc3NhZ2Uge3ZvaWR9IGxvYWQgLSBzZW50IG9uIHRoZSB0ZW1wbGF0ZSBsb2FkXG4gKiBAbWVzc2FnZSB7RXJyb3J9IGVycm9yIC0gc2VudCBvbiBlcnJvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmNsdWRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gdHJ1ZTsgXG4gIHN0YXRpYyBtYXRjaGVzID0gJ1t1cmxdJztcbiAgc3RhdGljIGV2ZW50cyA9IFsnbG9hZCcsICdlcnJvciddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpbmNsdWRlJywgdGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ2NhY2hlJywgdGhpcy5zZXRDYWNoZSk7XG4gICAgcmV0dXJuIHRoaXMuYXR0cigndXJsJywgdGhpcy5zZXRUZW1wbGF0ZSk7XG4gIH1cblxuICBzZXRDYWNoZShjYWNoZSkge1xuICAgIHRoaXMuY2FjaGUgPSBjYWNoZTtcbiAgfVxuXG4gIHNldFRlbXBsYXRlKHVybCkge1xuICAgIHRoaXMuY29ubmVjdGlvbiAmJiB0aGlzLmNvbm5lY3Rpb24uYWJvcnQoKTtcblxuICAgIHJldHVybiByZXF1ZXN0LmdldCh1cmwsIHtcbiAgICAgIGNhY2hlOiB0aGlzLmNhY2hlLFxuICAgICAgb25TdGFydDogKHhocikgPT4ge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSB4aHI7XG4gICAgICB9XG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgdGhpcy5lbXB0eSgpO1xuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XG4gICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCByZXMuZGF0YSk7XG5cbiAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uTG9hZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgIH0pO1xuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHRoaXMuYXR0cnMub25FcnJvci50cmlnZ2VyKGVyciwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2luY2x1ZGUuanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBpZnJhbWVzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgaWZyYW1lXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZnJhbWUgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpZnJhbWUnLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2lmcmFtZS5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGltYWdlcy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIGltZ1xuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2UgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpbWcnLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2ltYWdlLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgZW1iZWQgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBlbWJlZFxuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1iZWQgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdlbWJlZCcsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZW1iZWQuanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBhdWRpbyBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIGF1ZGlvXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpbyBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2F1ZGlvJywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9hdWRpby5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIHZpZGVvIGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgdmlkZW9cbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZGVvIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgndmlkZW8nLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3ZpZGVvLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgdHJhY2sgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyB0cmFja1xuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhY2sgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0cmFjaycsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdHJhY2suanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBzb3VyY2UgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBzb3VyY2VcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdXJjZSBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3NvdXJjZScsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvc291cmNlLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3Igb2JqZWN0IGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgb2JqZWN0XG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3RzIGV4dGVuZHMgVXJsIHsgIFxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnVybEF0dHJpYnV0ZSA9ICdkYXRhJztcbiAgfVxuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdvYmplY3QnLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL29iamVjdC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi4vc2VydmljZXMvcm91dGVyLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBsaW5rcy5cbiAqIEl0IHdvcmtzIHdpdGggcm91dGVyIHRvby4gXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2xpbmtzfVxuICogXG4gKiBAdGFnIGFcbiAqIEBzZWxlY3RvciBhW3N0YXRlXTpub3QoW3VybF0pLGFbdXJsXTpub3QoW3N0YXRlXSlcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdIC0gdXJsIHRvIGdvIG9uIGNsaWNrXG4gKiBAYXR0ciB7c3RyaW5nfSBbc3RhdGVdIC0gc3RhdGUgb2Ygcm91dGVyIHRvIGdvIG9uIGNsaWNrIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZ31cbiAqIEBhdHRyIHtvYmplY3R9IFtwYXJhbXNdIC0gcGFyYW1zIGZvciB0aGUgc3RhdGUge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3Nfc3RhdGVfcGFyYW1zfVxuICogQGF0dHIge29iamVjdH0gW3F1ZXJ5XSAtIHF1ZXJ5IGZvciB0aGUgc3RhdGUge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3Nfc3RhdGVfcXVlcnl9XG4gKiBAYXR0ciB7c3RyaW5nfSBbaGFzaF0gLSBoYXNoIGZvciB0aGUgc3RhdGUge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3Nfc3RhdGVfaGFzaH1cbiAqIEBhdHRyIHtvYmplY3R9IFtvcHRpb25zXSAtIG9wdGlvbnMgZm9yIHRoZSBzdGF0ZSB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmcjZG9jc19yb3V0ZXIubG9jYXRpb259XG4gKiBAc2NvcGUge2Jvb2xlYW59IGlzQWN0aXZlU3RhdGUgLSB0aGUgc3RhdGUgaXMgYWN0aXZlIG9yIG5vdCBcbiAqIEBzY29wZSB7Ym9vbGVhbn0gaW5BY3RpdmVTdGF0ZSAtIHRoZSBzdGF0ZSBpcyBwYXJ0IG9mIHRoZSBhY3RpdmUgc3RhdGUgb3Igbm90XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbc3RhdGVdOm5vdChbdXJsXSksW3VybF06bm90KFtzdGF0ZV0pJztcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gdHJ1ZTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnYScsIHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IG51bGw7XG4gICAgdGhpcy5wYXJhbXMgPSB7fTtcbiAgICB0aGlzLnF1ZXJ5ID0ge307XG4gICAgdGhpcy5oYXNoID0gbnVsbDtcbiAgICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgICB0aGlzLmlzVXJsID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3VybCcpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmICh0aGlzLmlzVXJsKSB7XG4gICAgICAgIHJvdXRlci5sb2NhdGlvbih0aGlzLmF0dHJzLnVybCwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByb3V0ZXIuc3RhdGUodGhpcy5zdGF0ZS5uYW1lLCB0aGlzLnBhcmFtcywgdGhpcy5xdWVyeSwgdGhpcy5oYXNoLCAgdGhpcy5vcHRpb25zKTtcbiAgICB9KTtcblxuICAgIHRoaXMub25TdGF0ZUNoYW5nZWQgPSAoKSA9PiB0aGlzLnN0YXRlICYmIHRoaXMuc2V0QWN0aXZpdHkoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3RhdGUtY2hhbmdlZCcsIHRoaXMub25TdGF0ZUNoYW5nZWQpO1xuXG4gICAgdGhpcy5hdHRyKCdzdGF0ZScsIHRoaXMuc2V0U3RhdGUpO1xuICAgIHRoaXMuYXR0cigncGFyYW1zJywgdGhpcy5zZXRQYXJhbXMpO1xuICAgIHRoaXMuYXR0cigncXVlcnknLCB0aGlzLnNldFF1ZXJ5KTtcbiAgICB0aGlzLmF0dHIoJ2hhc2gnLCB0aGlzLnNldEhhc2gpO1xuICAgIHRoaXMuYXR0cignb3B0aW9ucycsIHRoaXMuc2V0T3B0aW9ucyk7XG4gICAgdGhpcy5hdHRyKCd1cmwnLCB0aGlzLnNldFVybCk7XG4gICAgdGhpcy5hdHRyKCdzdGF0ZScsIHRoaXMucmVzZXRIcmVmLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTtcbiAgICB0aGlzLmF0dHIoJ3BhcmFtcycsIHRoaXMucmVzZXRIcmVmLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTtcbiAgICB0aGlzLmF0dHIoJ3F1ZXJ5JywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cignaGFzaCcsIHRoaXMucmVzZXRIcmVmLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTtcbiAgICB0aGlzLmF0dHIoJ3VybCcsIHRoaXMucmVzZXRIcmVmLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTtcbiAgICB0aGlzLnJlc2V0SHJlZigpO1xuICB9XG5cbiAgcmVtb3ZlZCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3RhdGUtY2hhbmdlZCcsIHRoaXMub25TdGF0ZUNoYW5nZWQpO1xuICB9XG5cbiAgc2V0VXJsKHVybCkge1xuICAgIHRoaXMudXJsID0gdXJsO1xuICB9XG5cbiAgc2V0U3RhdGUobmFtZSkge1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldFN0YXRlKG5hbWUpO1xuICAgIHRoaXMuc2V0QWN0aXZpdHkoKTtcbiAgfVxuXG4gIHNldEFjdGl2aXR5KCkge1xuICAgIHRoaXMuc2NvcGUuaXNBY3RpdmVTdGF0ZSA9IHJvdXRlci5pc0FjdGl2ZVN0YXRlKHRoaXMuc3RhdGUpO1xuICAgIHRoaXMuc2NvcGUuaW5BY3RpdmVTdGF0ZSA9IHJvdXRlci5pbkFjdGl2ZVN0YXRlKHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgc2V0UGFyYW1zKHBhcmFtcykge1xuICAgIGlmICh0eXBlb2YgcGFyYW1zICE9ICdvYmplY3QnIHx8ICFwYXJhbXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIHBhcmFtcyBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICB9XG5cbiAgc2V0UXVlcnkocXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5ICE9ICdvYmplY3QnIHx8ICFxdWVyeSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgcXVlcnkgbXVzdCBiZSBhbiBvYmplY3RgKTtcbiAgICB9XG5cbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gIH1cblxuICBzZXRIYXNoKGhhc2gpIHtcbiAgICBpZiAodHlwZW9mIGhhc2ggIT0gJ3N0cmluZycgJiYgaGFzaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBoYXNoIG11c3QgYmUgYSBzdHJpbmdgKTtcbiAgICB9XG5cbiAgICB0aGlzLmhhc2ggPSBoYXNoO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zICE9ICdvYmplY3QnIHx8ICFvcHRpb25zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBvcHRpb25zIG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIGdldFN0YXRlKG5hbWUpIHtcbiAgICBsZXQgc3RhdGUgPSByb3V0ZXIuZ2V0U3RhdGUobmFtZSk7XG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCByb3V0ZXIgc3RhdGUgd2l0aCBuYW1lIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgcmVzZXRIcmVmKCkge1xuICAgIGlmICh0aGlzLnVybCkge1xuICAgICAgdGhpcy5hdHRycy5ocmVmID0gdGhpcy51cmw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5hdHRycy5ocmVmID0gcm91dGVyLmNyZWF0ZVN0YXRlVXJsKHRoaXMuc3RhdGUsIHRoaXMucGFyYW1zLCB0aGlzLnF1ZXJ5LCB0aGlzLmhhc2gpO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2EuanMiXSwic291cmNlUm9vdCI6IiJ9