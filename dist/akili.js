/*!
 * Akili is a javascript framework
 * 
 * const Akili = makeItEasy(js + html);
 * 
 * @version 0.6.9
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
 * Set element inner html with content replacing
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
            _this2.__evaluateNode(child, _this2.__compiling.checkChanges);
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

      return res;
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
          var data = component.__getBind(prop.keys);

          if (!data || !data.__data) {
            continue;
          }

          for (var k = 0, c = data.__data.length; k < c; k++) {
            var bind = data.__data[k];

            if (component.__checkNodePropertyChange(bind.node, prop.keys, prop.value)) {
              component.__disableKeys(prop.keys);
              var checkProp = component.__getNodeProperty(bind.node, prop.keys);
              checkProp && checkProp.evaluated && component.scope.__set(prop.keys, prop.value, false, true);
              component.__evaluateNode(bind.node, false);

              for (var _k in bind.node.__properties) {
                if (!bind.node.__properties.hasOwnProperty(_k)) {
                  continue;
                }

                var _prop = bind.node.__properties[_k];
                var _value = _utils2.default.getPropertyByKeys(_prop.keys, _prop.component.__scope);
                _prop.component.__setNodeProperty(bind.node, _prop.keys, _value);
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
      var _this6 = this;

      var isDeleted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var data = this.__getBind(keys);

      var unbind = function unbind(obj, parents) {
        for (var k in obj) {
          if (!obj.hasOwnProperty(k) || _this6.__isSystemBindingKey(k)) {
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

          _this6.__evaluateNested(_keys, true);

          if (value === null || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) != 'object' || !hasKey) {
            _this6.__unbind(_keys);
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
        var res = this.__evaluate(node);
        node[key] != res && (node[key] = res);
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
      el.setAttribute(node.nodeName, component.__evaluateNode(node, check));
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
      var _this7 = this;

      var changeAttribute = function changeAttribute(key, value) {
        var isDeleted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (_this7.__disableAttributeSetter) {
          return;
        }

        var node = _this7.el.getAttributeNode(key);

        if (isDeleted) {
          node && _this7.__deinitializeNode(node);
          _this7.el.removeAttribute(key);
          return;
        } else if (!node) {
          _this7.el.setAttribute(key, value);
          node = _this7.el.getAttributeNode(key);
        } else {
          node.value = value;
          _this7.__deinitializeNode(node);
        }

        _this7.__initializeAttribute(node, _this7.el, _this7.__attributeOf);
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

          if (_this7.booleanAttributes.indexOf(attrKey) != -1) {
            attrKey = 'boolean-' + attrKey;
            value ? _this7.el.setAttribute(key, value) : _this7.el.removeAttribute(key);
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
      var _this8 = this;

      return new Proxy(obj, {
        get: function get(target, key) {
          if (key == "__isProxy") {
            return true;
          }

          if (key == "__target") {
            return obj;
          }

          if (key == "__component") {
            return _this8;
          }

          if (key == "__keys") {
            return parents;
          }

          if (_this8.__isSystemKey(key)) {
            return target[key];
          }

          if (_akili2.default.__evaluation) {
            var keys = [].concat(parents, [key]);
            var notBinding = false;
            var evaluated = !_utils2.default.hasPropertyByKeys(keys, _this8.__scope);
            var component = _this8;
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

            _this8.__bindNode(_akili2.default.__evaluation.list, component, keys, parents, target[key], notBinding, evaluated);
            return target[key];
          }

          return target[key];
        },
        set: function set(target, key, value) {
          if (_this8.__isSystemKey(key)) {
            target[key] = value;
            return true;
          }

          if (typeof target[key] === 'function') {
            value = _akili2.default.wrapFunction(value);
          }

          var keys = [].concat(parents, [key]);

          if (_this8.__checkDisablement(keys)) {
            target[key] = value;
            return true;
          }

          var keyString = _akili2.default.joinBindingKeys(keys);

          CHECK_EXISTENCE: if (parents.length > 0) {
            var targetParentValue = parents.length > 1 ? _utils2.default.getPropertyByKeys(parents.slice(0, -1), _this8.__scope) : _this8.__scope;

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

          if (_this8.__storeLinks[keyString]) {
            _this8.__storeTriggerByKeys(keys, value);
          }

          if (_this8.__attrLinks[keyString]) {
            _this8.__attrTriggerByKeys(keys, value);
          }

          target[key] = _this8.__nestedObserve(value, keys);

          if (_akili2.default.__isolation) {
            _this8.__createIsolationObject(parents, key, false);
            return true;
          }

          if (_this8.__isMounted) {
            _this8.__evaluateByKeys(keys, value);
          }

          return true;
        },
        deleteProperty: function deleteProperty(target, key) {
          var keys = [].concat(parents, [key]);

          if (_this8.__checkDisablement(keys)) {
            delete target[key];
            return true;
          }

          if (_this8.__isSystemKey(key)) {
            delete target[key];
            return true;
          }

          if (_akili2.default.__isolation) {
            delete target[key];
            _this8.__createIsolationObject(parents, key, true);
            return true;
          }

          delete target[key];
          _this8.__evaluateByKeys(keys, undefined, true);
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
      var _this9 = this;

      _store2.default.__target[name] = value;
      var links = _akili2.default.__storeLinks[name];

      if (!links || !links.length) {
        return;
      }

      var _loop = function _loop(i, l) {
        var link = links[i];
        var component = link.component;

        if (component === _this9) {
          return 'continue';
        }

        if (link.fn) {
          _akili2.default.unisolate(function () {
            return link.fn.call(component, value);
          });
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
     * @protected
     */

  }, {
    key: '__storeByKeys',
    value: function __storeByKeys(name, keys) {
      if (!keys) {
        throw new Error('Store link "' + name + '" must have the scope property name');
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
          return;
        }
      }

      if (!_akili2.default.__storeLinks[name]) {
        _akili2.default.__storeLinks[name] = [];
      }

      info = { component: this, name: name, keys: keys, keyString: keyString };
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
      var _this10 = this;

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

      _akili2.default.__storeLinks[name].push({ component: this, name: name, fn: fn });

      if (call) {
        return _akili2.default.unisolate(function () {
          return fn.call(_this10, _store2.default[name]);
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
      var _this11 = this;

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

          var ev = 'on' + _utils2.default.capitalize(_link2.name);
          _this11.attrs[ev] && _this11.attrs[ev].trigger(value, { bubbles: true });
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
      var _this12 = this;

      var links = this.__attrLinks[name];

      if (!links || !links.length) {
        return;
      }

      var _loop2 = function _loop2(i, l) {
        var link = links[i];
        _this12.__disableAttrTriggering = true;

        if (link.fn) {
          _akili2.default.unisolate(function () {
            return link.fn.call(_this12, value);
          });
        } else {
          var current = _utils2.default.getPropertyByKeys(link.keys, _this12.__scope);
          !_utils2.default.compare(current, value) && _this12.scope.__set(link.keys, value);
        }

        _this12.__disableAttrTriggering = false;
      };

      for (var i = 0, l = links.length; i < l; i++) {
        _loop2(i, l);
      }
    }

    /**
     * Create an attribute link with the scope property
     * 
     * @param {string} name 
     * @param {string|string[]} keys
     * @protected
     */

  }, {
    key: '__attrByKeys',
    value: function __attrByKeys(name, keys) {
      if (!keys) {
        throw new Error('Attribute link "' + name + '" must have the scope property name');
      }

      if (!Array.isArray(keys)) {
        keys = [keys];
      }

      name = _utils2.default.toCamelCase(name);
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
          return;
        }
      }

      this.__attrLinks[keyString].push({ name: name, keys: keys, keyString: keyString });
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
      var _this13 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var call = options.callOnStart === undefined ? this.attrs.hasOwnProperty(name) : options.callOnStart;
      name = _utils2.default.toCamelCase(name);

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

      this.__attrLinks[name].push({ name: name, fn: fn });

      if (call) {
        return _akili2.default.unisolate(function () {
          return fn.call(_this13, _this13.attrs[name]);
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
      var _this14 = this;

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

          if (_this14.__disableProxyRedefining) {
            break CHECK_PROXY;
          }

          if (value.__component !== _this14 || _akili2.default.joinBindingKeys(parents) != _akili2.default.joinBindingKeys(value.__keys)) {
            target = _utils2.default.copy(target, { nested: false });
            value = target;
          }
        } else if (!_this14.__disableProxyRedefining && !(value instanceof _scope3.default)) {
          target = _utils2.default.copy(target, { nested: false });
          value = target;
        }

        for (var k in target) {
          if (!target.hasOwnProperty(k)) {
            continue;
          }

          var val = target[k];
          var keys = [].concat(parents, [k]);
          target[k] = observe(val, keys);
        }

        if (!value.__isProxy) {
          return _this14.__observe(value, parents);
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
      var _this15 = this;

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
          } else if (!_this15.__isSystemBindingKey(k)) {
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
      var _this16 = this;

      var clear = function clear(obj, parent, key) {
        for (var k in obj) {
          if (!obj.hasOwnProperty(k)) {
            continue;
          }

          var val = obj[k];

          if (k == '__data' && (!val || !val.length)) {
            delete obj[k];
          } else if (!_this16.__isSystemBindingKey(k)) {
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

      for (var key in links) {
        var arr = links[key];

        for (var i = arr.length - 1; i >= 0; i--) {
          var _link3 = arr[i];

          if (_link3.component === this) {
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

        for (var _i3 = 0, _l3 = children.length; _i3 < _l3; _i3++) {
          find(children[_i3].__akili.__children);
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

      return typeof handler === 'function' ? this.__storeByFunction.apply(this, arguments) : this.__storeByKeys.apply(this, arguments);
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

      return typeof handler === 'function' ? this.__attrByFunction.apply(this, arguments) : this.__attrByKeys.apply(this, arguments);
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
    key: 'created',
    value: function created() {
      var _this2 = this;

      if (this.el.hasAttribute('on-debounce')) {
        this.el.addEventListener('input', function () {
          _this2.debounceTimeout && clearTimeout(_this2.debounceTimeout);
          _this2.debounceTimeout = setTimeout(function () {
            _this2.attrs.onDebounce.trigger(undefined, { bubbles: true });
          }, _this2.debounceInterval);
        });
      }
    }
  }, {
    key: 'compiled',
    value: function compiled() {
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
    return _this;
  }

  _createClass(For, [{
    key: 'created',
    value: function created() {
      this.reset();
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

      var loop = function loop(key, value, index) {
        var iterator = _this2.loop(key, value, index);
        iterator.iterate(index);
      };

      if (Array.isArray(data)) {
        for (var i = 0, l = data.length; i < l; i++) {
          loop(i, data[i], i);
        }
      } else {
        var keys = Object.keys(data);

        for (var _i = 0, _l = keys.length; _i < _l; _i++) {
          var key = keys[_i];
          loop(key, data[key], _i);
        }
      }

      for (var _i2 = this.__index + 1, _l2 = this.iterators.length; _i2 < _l2; _i2++) {
        var iterator = this.iterators[_i2];
        iterator.__destroy();
        this.iterators.splice(_i2, 1);
        _l2--;
        _i2--;
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
      var params = transition.path.params;
      var url = transition.url;
      var query = transition.query;

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
        path: {
          state: state.name,
          data: transition.path.data,
          params: params,
          parent: getParentScopeTransition(transition.path)
        },
        params: transition.params,
        url: url,
        query: query
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
  function Transition(url, query) {
    var hash = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var previous = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    _classCallCheck(this, Transition);

    this.url = url;
    this.query = query;
    this.hash = hash;
    this.previous = previous;
    this.path = null;
    this.routes = [];
    this.states = {};
    this.params = {};
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
     * Set the current path
     * 
     * @param {object} path 
     */

  }, {
    key: 'setPath',
    value: function setPath(path) {
      path.parent = this.path || null;
      this.path = path;
      this.routes.push(path);
      this.states[path.state.name] = path;
      this.params = !path.parent ? path.params : _extends({}, path.parent.params, path.params);
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
  this.__paramRegex = /(:([\w\d-]+))/g;
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
 * @param {string} name - state name
 * @param {object} [params] - params for state {id: 1} => '/app/:id' => '/app/1'
 * @param {object} [query] - query {x: 1} => '/app/?x=1'
 * @param {string} [hash]
 * @param {object} [options]
 */
router.state = function (name) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var hash = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var state = this.getState(name);

  if (!state) {
    throw new Error('Not found route state with name ' + name);
  }

  var url = this.createStateUrl(state, params, query, hash);

  if (!options.reload && url === this.getUrl()) {
    return;
  }

  this.__options = options;
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
 */
router.createStateUrl = function (state) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var hash = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

  (typeof state === 'undefined' ? 'undefined' : _typeof(state)) !== 'object' && (state = this.getState(state));

  var url = state.fullPattern.replace(this.__paramRegex, function (m, f, v) {
    return params[v] || '';
  });
  url = url.replace(/^\^/, '');
  url = this.splitSlashes(url);

  if (Object.keys(query).length) {
    url += '?' + _request2.default.paramsToQuery(query);
  }

  hash = (hash || '').replace('#', '');

  if (!this.hashMode && hash) {
    url += '#' + hash;
  }

  return url;
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
  var i = 0;
  var params = {};

  url = url.split('?')[0];
  url = url.split('#')[0];

  var urlPattern = state.fullPattern.replace(this.__paramRegex, function (m, f, v) {
    keys.push(v);
    return '([^\\/]*)';
  });

  var regex = new RegExp(urlPattern);
  var isIncluded = url.match(regex);

  if (!isIncluded) {
    return null;
  }

  url.replace(regex, function (m, v) {
    v && (params[keys[i]] = v);
    i++;
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
  var url = this.splitSlashes(this.getUrl().split('?')[0] + '/');
  var urlPattern = state.fullPattern.replace(this.__paramRegex, '([^\\/]*)');
  var str = includes ? urlPattern : this.splitSlashes('^' + urlPattern + '/$');
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

  if (this.__disableChange) {
    delete this.__disableChange;
    return Promise.resolve();
  }

  var url = this.getUrl();
  var hash = this.hashMode ? '' : window.location.hash.replace('#', '');
  var query = this.getUrlQuery();
  var prevTransition = router.transition || null;
  var transition = router.transition = new Transition(url, query, hash, prevTransition);
  var level = 0;

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
    var params = content.params;
    var route = state.abstract ? null : _this3.getRoute(state.level);

    if (!route && !state.abstract) {
      throw new Error('Not found route component for state "' + state.name + '"');
    }

    transition.setPath({ state: state, params: params, query: query, hash: hash, component: route, loaded: true });
    level++;

    var hasState = prevTransition && prevTransition.hasState(state);
    var isDifferent = true;

    if (hasState) {
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

          _this3.__disableChange = true;
          _this3.setUrl(_this3.defaultUrl);
          _this3.__redirects++;

          return _this3.changeState().then(resolve).catch(reject);
        }

        if (_akili2.default.options.debug) {
          // eslint-disable-next-line no-console
          console.warn('Not found a default route. You can pass it in "router.init(defaultUrl)" function');
        }
      }

      if (!_this3.__options.saveScrollPosition && !transition.hash) {
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

        this.el.style.display = this.display;
      } else {
        if (this.recreate) {
          this.empty();
        } else if (!this.isCompiled) {
          res = this.compile();
        }

        this.el.style.display = "none";
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
    key: 'created',
    value: function created() {
      var _this2 = this;

      this.el.addEventListener('change', function () {
        _this2.el.content = _this2.getContent();
      });

      return _get(Select.prototype.__proto__ || Object.getPrototypeOf(Select.prototype), 'created', this).apply(this, arguments);
    }
  }, {
    key: 'compiled',
    value: function compiled() {
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
      var _this2 = this;

      this.el.addEventListener('change', function () {
        setTimeout(function () {
          var value = _this2.getRadioValue();

          if (value === _this2.prevValue) {
            return;
          }

          _this2.prevValue = value;
          _this2.attrs.onRadio.trigger(value, { bubbles: true });
        });
      });

      if (this.iterable) {
        return _get(Radio.prototype.__proto__ || Object.getPrototypeOf(Radio.prototype), 'created', this).apply(this, arguments);
      }
    }
  }, {
    key: 'resolved',
    value: function resolved() {
      this.attr('in', this.setNames, { callOnStart: false });
      this.attr('value', this.setValue);
      this.attr('name', this.setNames);
      return _get(Radio.prototype.__proto__ || Object.getPrototypeOf(Radio.prototype), 'resolved', this).apply(this, arguments);
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
    _this.hash = '';
    _this.options = {};
    _this.isUrl = _this.el.getAttribute('url');
    return _this;
  }

  _createClass(A, [{
    key: 'created',
    value: function created() {
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
    }
  }, {
    key: 'compiled',
    value: function compiled() {
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
      if (typeof hash != 'string') {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWVkM2JjZTg4NzM0NGFiNjdjZTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2FraWxpLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91cmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JvdXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaWYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JhZGlvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHRhcmVhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5jbHVkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZW1iZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdHJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc291cmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hLmpzIl0sIm5hbWVzIjpbIkFraWxpIiwiX19kZWZhdWx0cyIsInNldERlZmF1bHRzIiwib3B0aW9ucyIsImRlYnVnIiwiZ2xvYmFscyIsInV0aWxzIiwiX19pbml0IiwiX19jbGVhcmVkIiwiX19jb21wb25lbnRzIiwiX19hbGlhc2VzIiwiX19zY29wZXMiLCJfX3N0b3JlTGlua3MiLCJfX3dpbmRvdyIsIl9faXNvbGF0aW9uIiwiX19ldmFsdWF0aW9uIiwiX193cmFwcGluZyIsIl9fb25FcnJvciIsInRyaWdnZXJJbml0IiwiaHRtbEJvb2xlYW5BdHRyaWJ1dGVzIiwiY29tcG9uZW50cyIsInNlcnZpY2VzIiwiQ29tcG9uZW50IiwiRXZlbnRFbWl0dGVyIiwiU2NvcGUiLCJBIiwiQXVkaW8iLCJDb250ZW50IiwiRm9yIiwiRW1iZWQiLCJJZiIsIkluY2x1ZGUiLCJJbnB1dCIsIklmcmFtZSIsIkltYWdlIiwiT2JqZWN0IiwiUmFkaW8iLCJSb3V0ZSIsIlNlbGVjdCIsIlNvdXJjZSIsIlRleHQiLCJUZXh0YXJlYSIsIlRyYWNrIiwiVXJsIiwiVmlkZW8iLCJyZXF1ZXN0Iiwicm91dGVyIiwic3RvcmUiLCJkZWZpbmUiLCJlcnJvckhhbmRsaW5nIiwiaXNvbGF0ZUV2ZW50cyIsImlzb2xhdGVBcnJheVByb3RvdHlwZSIsImlzb2xhdGVXaW5kb3dGdW5jdGlvbnMiLCJpIiwibCIsImxlbmd0aCIsImRlZmF1bHRzIiwiZm4iLCJwdXNoIiwiY2xlYXJHbG9iYWxzIiwia2V5IiwiRWxlbWVudCIsInByb3RvdHlwZSIsIkFycmF5IiwidW53cmFwIiwid2luZG93Iiwic2V0VGltZW91dCIsInNldEludGVydmFsIiwiUHJvbWlzZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJqb2luQmluZGluZ0tleXMiLCJrZXlzIiwibWFwIiwiZWwiLCJ0b1N0cmluZyIsImpvaW4iLCJhZGRTY29wZSIsInNjb3BlIiwiX19uYW1lIiwiRXJyb3IiLCJnZXRTY29wZSIsIm5hbWUiLCJyZW1vdmVTY29wZSIsImdldEFraWxpUGFyZW50cyIsInRyZWUiLCJhcnIiLCJjaGVjayIsIm5vZGUiLCJwYXJlbnROb2RlIiwiX19ha2lsaSIsInNldFRlbXBsYXRlIiwidGVtcGxhdGUiLCJyZXBsYWNlIiwiaW5uZXJIVE1MIiwiY3JlYXRlU2NvcGVOYW1lIiwiY3JlYXRlUmFuZG9tU3RyaW5nIiwic3RyIiwiaXNvbGF0ZSIsInJlcyIsInByb3BzIiwiayIsImhhc093blByb3BlcnR5IiwicHJvcCIsImlzRGVsZXRlZCIsImNvbXBvbmVudCIsIl9fZXZhbHVhdGVCeUtleXMiLCJ1bmRlZmluZWQiLCJfX3NldCIsImdldFByb3BlcnR5QnlLZXlzIiwiX19zY29wZSIsInVuZXZhbHVhdGUiLCJldmFsdWF0aW9uIiwid3JhcHBpbmciLCJ1bmlzb2xhdGUiLCJpc29sYXRpb24iLCJuZXh0VGljayIsInJlc29sdmUiLCJ0aGVuIiwiaW5pdGlhbGl6ZSIsInJlY29tcGlsZSIsIl9fcmVjb21waWxlIiwiaXNSb290IiwiX19yb290IiwiY29tcG9uZW50TmFtZSIsInRvRGFzaENhc2UiLCJnZXRBdHRyaWJ1dGUiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJfQ29tcG9uZW50IiwiQ0hFQ0tfQUxJQVNFUyIsInNlbGVjdG9ycyIsInNlbGVjdG9yQWxsIiwibWF0Y2hlcyIsInNlbGVjdG9yIiwiX19jYW5jZWxsZWQiLCJmaW5kIiwicCIsIl9fcHJldmVudCIsIl9fY3JlYXRlIiwiY29tcGlsZSIsInJvb3QiLCJlbGVtZW50cyIsIm5lc3RlZEluaXRpYWxpemluZyIsImNoaWxkcmVuIiwiY2hpbGQiLCJfX2NvbXBpbGUiLCJhbGwiLCJyIiwiX19yZXNvbHZlIiwiY29uc29sZSIsIndhcm4iLCJ1bnJlZ2lzdGVyQ29tcG9uZW50IiwiYWxpYXMiLCJ1bnJlZ2lzdGVyQWxpYXMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwib2xkIiwiX19pc1Byb3h5IiwiYXBwbHkiLCJjcmVhdGVDYWxsYmFja0lzb2xhdGlvbiIsImNvbnN0cnVjdG9yIiwiY2F0Y2giLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwiX19ha2lsaUxpc3RlbmVycyIsImFyZ3VtZW50cyIsImFyZ3MiLCJzbGljZSIsImNhbGwiLCJsaW5rIiwibGlzdGVuZXIiLCJzcGxpY2UiLCJwb3MiLCJpc0FycmF5IiwibnVtIiwiaW5kZXgiLCJjYWxsYmFjayIsIndyYXAiLCJvYmoiLCJjdXJyZW50Iiwid3JhcEZ1bmN0aW9uIiwiYyIsImRlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsInJldmVyc2UiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiYWtpbGlXcmFwcGVkRnVuY3Rpb24iLCJlbnVtZXJhYmxlIiwic3RhdHVzIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiaW5pdCIsImRvY3VtZW50IiwiYm9keSIsImRvY3VtZW50RWxlbWVudCIsIkFLSUxJX1NFUlZFUiIsImluaXRTZXJ2ZXJTaWRlSHRtbCIsImh0bWwiLCJpbml0U2VydmVyU2lkZVJlcXVlc3RDYWNoZSIsInJlcXVlc3RDYWNoZSIsIkFLSUxJX0NMSUVOVCIsInByZXBhcmVTZXJ2ZXJTaWRlSHRtbCIsImNoYW5nZVN0YXRlIiwicHJlcGFyZVNlcnZlclNpZGVSZXF1ZXN0Q2FjaGUiLCJlcnIiLCJhdHRyaWJ1dGVzIiwicmVtb3ZlQXR0cmlidXRlIiwicGFyc2VyIiwiRE9NUGFyc2VyIiwiZG9jIiwicGFyc2VGcm9tU3RyaW5nIiwicXVlcnlTZWxlY3RvciIsImF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJpbnN0YW5jZSIsIl9fY2FjaGUiLCJfX2luc3RhbmNlcyIsIm91dGVySFRNTCIsImNhY2hlIiwiX19tYWluIiwiZGVpbml0Iiwic3RvcmVLZXlzIiwiX190YXJnZXQiLCJjbGFzcyIsImNsYXNzZXMiLCJ2YWwiLCJzdHlsZSIsInN0eWxlcyIsInNwbGl0IiwiZGVsIiwiZXhjbHVkZSIsImV4cHMiLCJsYXN0IiwiUmVnRXhwIiwiaW5kZXhPZiIsIm9wZW4iLCJmaWx0ZXIiLCJoYW5kbGVyIiwibWF0Y2giLCJpdGVtIiwiZmlsdGVyZWQiLCJzb3J0Iiwib3JkZXIiLCJhIiwiYiIsIkRhdGUiLCJnZXRUaW1lIiwibmV4dCIsImFWIiwiYlYiLCJpbmNsdWRlS2V5cyIsIm5ld09iaiIsIm9iaktleXMiLCJleGNsdWRlS2V5cyIsImlzU2NvcGVQcm94eSIsImlzUGxhaW5PYmplY3QiLCJjb3B5IiwibmVzdGVkIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJtYWtlQXR0cmlidXRlVmFsdWUiLCJjb21wYXJlIiwiY2xlYXJVbmRlZmluZWQiLCJpZ25vcmVVbmRlZmluZWQiLCJhS2V5cyIsImJLZXlzIiwiY29tcGFyZVByZXZpb3VzVmFsdWUiLCJwcmV2aW91cyIsInByZXZpb3VzQ29weSIsImVuY29kZUh0bWxFbnRpdGllcyIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlY29kZUh0bWxFbnRpdGllcyIsInRvQ2FtZWxDYXNlIiwibSIsInRvVXBwZXJDYXNlIiwiY2FwaXRhbGl6ZSIsIm9iamVjdCIsInJlZHVjZSIsIm8iLCJoYXNQcm9wZXJ0eUJ5S2V5cyIsImhhcyIsInNldFByb3BlcnR5QnlLZXlzIiwiZGVsZXRlUHJvcGVydHlCeUtleXMiLCJnZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQiLCJ0YXJnZXQiLCJwcm90byIsImdldFByb3RvdHlwZU9mIiwiZ2V0T3duUHJvcGVydHlUYXJnZXQiLCJNYXRoIiwicmFuZG9tIiwic3Vic3RyaW5nIiwidXJsQXR0cmlidXRlIiwic2V0VXJsIiwidXJsIiwiYXR0cnMiLCJldmFsdWF0aW9uUmVnZXgiLCJldmFsdWF0aW9uUmVnZXhHbG9iYWwiLCJzb3VyY2UiLCJzeXN0ZW1BdHRyaWJ1dGVzIiwiY29udGV4dCIsImV4cHJlc3Npb24iLCJ2YXJzIiwiRnVuY3Rpb24iLCJfX2lzTW91bnRlZCIsIl9faXNDb21waWxlZCIsIl9faXNSZXNvbHZlZCIsIl9fYmluZGluZ3MiLCJfX2V2YWx1YXRpbmdFdmVudCIsIl9fcmVjb21waWxpbmciLCJfX2NvbXBpbGluZyIsIl9fZGlzYWJsZVByb3h5IiwiX19kaXNhYmxlQXR0clRyaWdnZXJpbmciLCJfX2NoaWxkcmVuIiwiX19wYXJlbnQiLCJfX3BhcmVudHMiLCJfX2F0dHJzIiwiX19hdHRyTGlua3MiLCJfX2F0dHJpYnV0ZU9mIiwiX19ldmFsdWF0aW9uQ29tcG9uZW50IiwiY2hlY2tDaGFuZ2VzIiwic2V0RXZlbnRzIiwic2V0UGFyZW50cyIsInNldEJvb2xlYW5BdHRyaWJ1dGVzIiwiZGVmaW5lQXR0cmlidXRlcyIsIl9fY3JlYXRlQ29tcGlsYXRpb25PcHRpb25zIiwiX19jcmVhdGVSZWNvbXBpbGF0aW9uT3B0aW9ucyIsIl9fc2V0RXZlbnRzIiwiX19zZXRQYXJlbnRzIiwiX19zZXRCb29sZWFuQXR0cmlidXRlcyIsIl9fZGVmaW5lQXR0cmlidXRlcyIsIl9faW5pdGlhbGl6ZSIsImNyZWF0ZWQiLCJjb250cm9sIiwiX19jb250cm9sQXR0cmlidXRlcyIsIl9fZXZhbHVhdGVQYXJlbnQiLCJuZXdQYXJlbnQiLCJfX2ludGVycG9sYXRlQXR0cmlidXRlcyIsImludGVycG9sYXRlIiwicGFyZW50Iiwibm9kZVR5cGUiLCJfX2luaXRpYWxpemVOb2RlIiwiX19ldmFsdWF0ZU5vZGUiLCJjaGlsZE5vZGVzIiwib25Db21waWxlZCIsInRyaWdnZXIiLCJidWJibGVzIiwiY29tcGlsZWQiLCJ0ZW1wbGF0ZVVybCIsImdldCIsInRlbXBsYXRlQ2FjaGUiLCJfX2NvbnRlbnQiLCJkYXRhIiwib25SZWNvbXBpbGVkIiwicmVjb21waWxlZCIsIm9uUmVzb2x2ZWQiLCJyZXNvbHZlZCIsIl9zY29wZSIsImFzc2lnbiIsImNvbnRyb2xBdHRyaWJ1dGVzIiwiZXZlbnRzIiwiX19ldmVudHMiLCJfX3NhdmVBdHRyaWJ1dGVQcm94eUluIiwic2F2ZUF0dHJpYnV0ZVByb3h5SW4iLCJfX3NhdmVBdHRyaWJ1dGVQcm94eU91dCIsInNhdmVBdHRyaWJ1dGVQcm94eU91dCIsIl9fbmVzdGVkT2JzZXJ2ZSIsImJvb2xlYW5BdHRyaWJ1dGVzIiwiY29uY2F0Iiwic2V0QXR0ciIsIm5vZGVOYW1lIiwiaGFzQXR0cmlidXRlIiwiZXYiLCJ0ZXN0IiwicGFyZW50cyIsImV2YWx1YXRlUGFyZW50IiwidHJhbnNwYXJlbnQiLCJfX2RldGFjaCIsIl9fYWRkQ2hpbGQiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvcGVydGllcyIsIl9fZ2V0Tm9kZVByb3BlcnR5IiwiY291bnRlciIsImF0dHJpYnV0ZVZhbHVlIiwiX19jb21wb25lbnQiLCJjb20iLCJfX2V4cHJlc3Npb24iLCJBdHRyIiwiZCIsImV2YWx1YXRlIiwiZXhpc3RpbmdCaW5kaW5ncyIsInBhcmVudEJpbmRpbmdzIiwicGFyc2VWYWx1ZSIsIl9fZ2V0UGFyc2VkRXhwcmVzc2lvbiIsImxpc3QiLCJwYXJzZSIsImF0dHJOYW1lIiwiZWxlbWVudE5hbWUiLCJfX2VsZW1lbnQiLCJhdHRyaWJ1dGVOYW1lIiwibWVzc2FnZXMiLCJtZXNzYWdlIiwiaGFzaCIsIl9fY3JlYXRlS2V5c0hhc2giLCJwYXJlbnRzSGFzaCIsIm5vdEJpbmRpbmciLCJwYXJlbnRWYWx1ZSIsImV2YWxDb21wb25lbnQiLCJyZWFsQ29tcG9uZW50IiwiX19iaW5kQW5kU2V0UHJvcGVydHkiLCJldmFsdWF0ZWQiLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsImlzQm9vbGVhbkF0dHJpYnV0ZSIsImNsZWFyQXR0cmlidXRlIiwiY2FtZWxBdHRyaWJ1dGUiLCJfX2F0dHJpYnV0ZU9uIiwiX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyIiwiX19hdHRyVHJpZ2dlckJ5TmFtZSIsImVsZW1lbnQiLCJiaW5kIiwiX19nZXRCb3VuZE5vZGUiLCJfX2JpbmQiLCJfX3NldE5vZGVQcm9wZXJ0eSIsIndpdGhvdXRQYXJlbnRzIiwibGFzdFByb3BzIiwicHJvcHNMZW5ndGgiLCJlbEV2YWx1YXRlIiwiX19nZXRCaW5kIiwiX19kYXRhIiwiX19jaGVja05vZGVQcm9wZXJ0eUNoYW5nZSIsIl9fZGlzYWJsZUtleXMiLCJjaGVja1Byb3AiLCJfayIsIl9wcm9wIiwiX19lbmFibGVLZXlzIiwidW5iaW5kIiwiX19pc1N5c3RlbUJpbmRpbmdLZXkiLCJfa2V5cyIsIl9fa2V5cyIsIl9pc0RlbGV0ZWQiLCJoYXNLZXkiLCJzaGlmdCIsIl9fZXZhbHVhdGVOZXN0ZWQiLCJfX3VuYmluZCIsImV4ZWMiLCJldmVudCIsIl9fY2hlY2tFdmFsdWF0aW9uIiwiX19ldmFsdWF0ZSIsImF0dHJpYnV0ZU9mIiwiZXZlbnROYW1lIiwiX19ldmVudCIsImVtaXR0ZXIiLCJfX2V2YWx1YXRlRXZlbnQiLCJjaGVja0JpbmRpbmciLCJfX2luaXRpYWxpemVkIiwidHJpbSIsImhhc0JpbmRpbmciLCJfX2hhc0JpbmRpbmdzIiwiX191bmJpbmRCeU5vZGVzIiwiX19pbml0aWFsaXplQXR0cmlidXRlIiwiY2hhbmdlQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlTm9kZSIsIl9fZGVpbml0aWFsaXplTm9kZSIsIlByb3h5Iiwic2V0IiwiYXR0cktleSIsImRlbGV0ZVByb3BlcnR5IiwiX19pc1N5c3RlbUtleSIsImV4Y0FyciIsInJlYWxUYXJnZXQiLCJmb3JQYXJlbnRzIiwiZm9yRGF0YSIsInBvcCIsIl9fYmluZE5vZGUiLCJfX2NoZWNrRGlzYWJsZW1lbnQiLCJrZXlTdHJpbmciLCJDSEVDS19FWElTVEVOQ0UiLCJ0YXJnZXRQYXJlbnRWYWx1ZSIsIl9fc3RvcmVUcmlnZ2VyQnlLZXlzIiwiX19hdHRyVHJpZ2dlckJ5S2V5cyIsIl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0IiwiX19hbGwiLCJsaW5rcyIsIl9fc3RvcmVUcmlnZ2VyQnlOYW1lIiwiaW5mbyIsImNhbGxPblN0YXJ0Iiwic3RhcnRLZXlzIiwib2JzZXJ2ZSIsIkNIRUNLX1BST1hZIiwiX19kaXNhYmxlUHJveHlSZWRlZmluaW5nIiwiX19vYnNlcnZlIiwiaXNvbGF0aW9uS2V5IiwidXBkYXRlZEF0IiwicGFyZW50S2V5c1N0cmluZyIsImtleXNTdHJpbmciLCJfX2RlbGV0ZU5vZGVQcm9wZXJ0eSIsIm5vZGVzIiwiX19jbGVhckVtcHR5QmluZGluZ3MiLCJjbGVhciIsIl9fcmVtb3ZlIiwiX19jbGVhclN0b3JlTGlua3MiLCJvblJlbW92ZWQiLCJyZW1vdmVkIiwiX19zcGxpY2VDaGlsZCIsIl9fcmVtb3ZlQ2hpbGRyZW4iLCJmaW5kQWxsIiwibGV2ZWxzIiwibGV2ZWwiLCJyaWdodCIsImxldmVsRWxlbWVudHMiLCJfX3N0b3JlQnlGdW5jdGlvbiIsIl9fc3RvcmVCeUtleXMiLCJfX2F0dHJCeUZ1bmN0aW9uIiwiX19hdHRyQnlLZXlzIiwiX191bnN0b3JlQnlGdW5jdGlvbiIsIl9fdW5zdG9yZUJ5S2V5cyIsIl9fdW5hdHRyQnlGdW5jdGlvbiIsIl9fdW5hdHRyQnlLZXlzIiwiX19nZXRQYXJlbnQiLCJfX2dldENoaWxkcmVuIiwiX19nZXROZWFyIiwiYXBwZW5kQ2hpbGQiLCJfX2VtcHR5IiwiX19kZXN0cm95IiwiUmVxdWVzdCIsImJhc2VVcmwiLCJnZXRIZWFkZXJzIiwieGhyIiwiaGVhZGVycyIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsImxpbmUiLCJzdGF0dXNFcnJvcnNQYXR0ZXJuIiwicmVqZWN0IiwibWV0aG9kIiwiWE1MSHR0cFJlcXVlc3QiLCJiZWZvcmUiLCJ0cmFuc2Zvcm1CZWZvcmUiLCJvblN0YXJ0IiwianNvbiIsInJlc3BvbnNlVHlwZSIsImZvcm0iLCJjcmVhdGVGb3JtRGF0YSIsInBhcmFtcyIsInBhcmFtc1RvUXVlcnkiLCJjcmVhdGVDYWNoZUhhc2giLCJ1c2VyIiwicGFzc3dvcmQiLCJfY2FjaGUiLCJnZXRDYWNoZSIsIm5vdyIsImNyZWF0ZWRBdCIsInRyYW5zZm9ybUFmdGVyIiwicmVzdWx0IiwidGltZW91dCIsIndpdGhDcmVkZW50aWFscyIsImhlYWRlcktleXMiLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25Qcm9ncmVzcyIsIm9ucHJvZ3Jlc3MiLCJvbmxvYWQiLCJyZXNwb25zZSIsInJlYWR5U3RhdGUiLCJzdGF0dXNUZXh0IiwicmVzcG9uc2VUZXh0IiwicmVzcG9uc2VYTUwiLCJyZXNwb25zZVVSTCIsImNyZWF0ZUNhY2hlIiwib250aW1lb3V0Iiwib25lcnJvciIsInNlbmQiLCJjaGFyIiwiY2hhckNvZGVBdCIsInNlcCIsImVxIiwia3MiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ2Iiwib3B0IiwicXVlcnkiLCJhbXBzIiwiZXFzIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwibmFtZXNwYWNlIiwiZmQiLCJGb3JtRGF0YSIsImFwcGVuZCIsInRvSVNPU3RyaW5nIiwiYWRkSW5zdGFuY2UiLCJyZW1vdmVJbnN0YW5jZSIsInZhbHVlS2V5IiwiZGVib3VuY2VJbnRlcnZhbCIsImRlYm91bmNlVGltZW91dCIsImNsZWFyVGltZW91dCIsIm9uRGVib3VuY2UiLCJzZXRGb2N1cyIsInNldFZhbHVlIiwic2V0RGVib3VuY2UiLCJpbnRlcnZhbCIsInNldEVsZW1lbnRGb2N1cyIsInNldEVsZW1lbnRCbHVyIiwiZm9jdXMiLCJibHVyIiwiTG9vcCIsIml0ZXJhdG9ycyIsIml0ZXJhdG9yUmVmIiwiaXRlcmF0b3JPdXRlckhUTUwiLCJyZXNldCIsImNyZWF0ZUl0ZXJhdG9yIiwiZHJhdyIsIm1hc2siLCJuZXh0U2libGluZyIsImNvbnRlbnQiLCJmaXJzdENoaWxkIiwiX19pbmRleCIsIl9fa2V5IiwiX192YWx1ZSIsIl9fY29tcGFyaXNvblZhbHVlIiwiaXRlcmF0b3IiLCJjQ29weSIsImNvbXBhcnNpb24iLCJzZXRJbmRleCIsInNldEtleSIsIl9fcHJvbWlzZXMiLCJjcmVhdGVJdGVyYXRvckVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJsb29wIiwiaXRlcmF0ZSIsIm9uT3V0IiwiX19pdGVyYXRvciIsImZvciIsImlzRm9yIiwiY2FuY2VsIiwiX19lbCIsInN0cmljdCIsImVsQ29tcG9uZW50IiwiZm9yY2UiLCJpbkV2YWx1YXRpbmciLCJwcmVwYXJlT3B0aW9ucyIsIl9FdmVudCIsInR5cGUiLCJ0cmFuc2l0aW9uIiwic3RhdGUiLCJwYXRoIiwiZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uIiwiX190cmFuc2l0aW9uIiwiZW1wdHkiLCJleGlzdHMiLCJsb2FkZWQiLCJUcmFuc2l0aW9uIiwicm91dGVzIiwic3RhdGVzIiwicm91dGUiLCJoYXNoTW9kZSIsIl9fcmVkaXJlY3RzIiwiX19vcHRpb25zIiwiX19wYXJhbVJlZ2V4IiwiX19yb3V0ZVNlbGVjdG9yIiwiYWRkIiwicGF0dGVybiIsImRlZmF1bHRPcHRpb25zIiwiYWJzdHJhY3QiLCJzZXRTdGF0ZSIsImdldFN0YXRlIiwiY3JlYXRlU3RhdGVVcmwiLCJyZWxvYWQiLCJnZXRVcmwiLCJiYWNrIiwiaGlzdG9yeSIsImdvIiwiZm9yd2FyZCIsImxvY2F0aW9uIiwiZXJyb3IiLCJwdXNoU3RhdGUiLCJkZWZhdWx0VXJsIiwib2xkUHVzaFN0YXRlIiwiX19vblN0YXRlQ2hhbmdlSGFuZGxlciIsImluaXRTdGF0ZSIsInBhcmVudE5hbWUiLCJmdWxsUGF0dGVybiIsInNwbGl0U2xhc2hlcyIsInJlbW92ZVN0YXRlIiwic2V0SGFzaFVybCIsInNldEhpc3RvcnlVcmwiLCJnZXRIYXNoVXJsIiwiZ2V0SGlzdG9yeVVybCIsInBhdGhuYW1lIiwic2VhcmNoIiwiZ2V0VXJsUXVlcnkiLCJnZXRIYXNoVXJsUXVlcnkiLCJnZXRIaXN0b3J5VXJsUXVlcnkiLCJwYXJhbXNGcm9tUXVlcnkiLCJmIiwiZ2V0UGF0dGVybkNvbnRlbnQiLCJ1cmxQYXR0ZXJuIiwicmVnZXgiLCJpc0luY2x1ZGVkIiwiaXNBY3RpdmVTdGF0ZSIsImluY2x1ZGVzIiwiaW5BY3RpdmVTdGF0ZSIsImdldFJvdXRlIiwiZ2V0QXJyYXlQYXR0ZXJuQ29udGVudCIsImdldFN0YXRlc0J5TGV2ZWwiLCJfX2lzb2xhdGVkIiwiX19kaXNhYmxlQ2hhbmdlIiwicHJldlRyYW5zaXRpb24iLCJvbkVuZCIsInNldFBhdGgiLCJoYXNTdGF0ZSIsImlzRGlmZmVyZW50IiwicHJldiIsInRpdGxlIiwic2V0VHJhbnNpdGlvbiIsInNhdmVTY3JvbGxQb3NpdGlvbiIsInNjcm9sbFRvIiwiRWxzZUlmIiwiRWxzZSIsImFjdGl2ZSIsInJlY3JlYXRlIiwiaXNDb21waWxlZCIsImRpc3BsYXkiLCJnZXRDb21wdXRlZFN0eWxlIiwic2V0UmVjcmVhdGlvbiIsImNvbXBpbGF0aW9uIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwic2V0QWN0aXZpdHkiLCJPcHRpb24iLCJpdGVyYXRvclRhZ05hbWUiLCJpc011bHRpcGxlIiwiZ2V0Q29udGVudCIsInNldE11bHRpcGxlIiwic2V0Q29udGVudCIsImRyYXdTZWxlY3QiLCJjaGFuZ2VWYWx1ZSIsImZvcm1hdFZhbHVlIiwic2VsZWN0ZWQiLCJvcHRpb24iLCJzZWxlY3Rpb24iLCJyZWRlZmluZSIsIm9uQ2hhbmdlIiwiZGlzcGF0Y2giLCJFdmVudCIsInNldFNlbGVjdGVkIiwiaXNDaGVja2JveCIsImlzUmFkaW8iLCJzZXRDaGVja2VkIiwiY2hlY2tlZCIsInByZXZDaGVja2VkIiwiY2hhbmdlUmFkaW8iLCJyYWRpbyIsIlJhZGlvQnV0dG9uIiwiaXRlcmFibGUiLCJnZXRSYWRpb1ZhbHVlIiwicHJldlZhbHVlIiwib25SYWRpbyIsInNldE5hbWVzIiwiaXNUcnVlIiwiaXNTZWxlY3RlZCIsInJhbmdlIiwiY3JlYXRlUmFuZ2UiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiY29ubmVjdGlvbiIsInNldENhY2hlIiwiYWJvcnQiLCJvbkxvYWQiLCJvbkVycm9yIiwiT2JqZWN0cyIsImlzVXJsIiwicHJldmVudERlZmF1bHQiLCJvblN0YXRlQ2hhbmdlZCIsInNldFBhcmFtcyIsInNldFF1ZXJ5Iiwic2V0SGFzaCIsInNldE9wdGlvbnMiLCJyZXNldEhyZWYiLCJocmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OzhRQzdEQTs7Ozs7Ozs7O0FBU0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTs7Ozs7QUFLQSxJQUFNQSxRQUFRLEVBQWQ7O0FBRUFBLE1BQU1DLFVBQU4sR0FBbUIsRUFBbkI7O0FBRUE7OztBQUdBRCxNQUFNRSxXQUFOLEdBQW9CLFlBQVk7QUFBQTs7QUFDOUIsT0FBS0MsT0FBTCxHQUFlO0FBQ2JDLFdBQU8sSUFETTtBQUViQyxhQUFTLEVBQUVDLHNCQUFGO0FBRkksR0FB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QUFsQjtBQUNEO0FBQ0Y7Ozs7OztBQXJIa0IzWCxDLENBQ1oyRyxPLEdBQVUsdUM7QUFERTNHLEMsQ0FFWmdWLGlCLEdBQW9CLEk7a0JBRlJoVixDIiwiZmlsZSI6ImFraWxpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNWVkM2JjZTg4NzM0NGFiNjdjZTciLCIvKipcbiAqIEphdmFzY3JpcHQgZnJhbWV3b3JrXG4gKlxuICogY29uc3QgQWtpbGkgPSBtYWtlSXRFYXN5KGpzICsgaHRtbCk7XG4gKlxuICogQGF1dGhvciBBbGV4YW5kciBCYWxhc3lhbiA8bXl3ZWJzdHJlZXRAZ21haWwuY29tPlxuICogQGxpbmsgaHR0cDovL2FraWxpanMuY29tXG4gKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgSWYgZnJvbSAnLi9jb21wb25lbnRzL2lmLmpzJztcbmltcG9ydCBGb3IgZnJvbSAnLi9jb21wb25lbnRzL2Zvci5qcyc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vY29tcG9uZW50cy9zZWxlY3QuanMnO1xuaW1wb3J0IElucHV0IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC5qcyc7XG5pbXBvcnQgUmFkaW8gZnJvbSAnLi9jb21wb25lbnRzL3JhZGlvLmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vY29tcG9uZW50cy90ZXh0LmpzJztcbmltcG9ydCBUZXh0YXJlYSBmcm9tICcuL2NvbXBvbmVudHMvdGV4dGFyZWEuanMnO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb21wb25lbnRzL2NvbnRlbnQuanMnO1xuaW1wb3J0IEluY2x1ZGUgZnJvbSAnLi9jb21wb25lbnRzL2luY2x1ZGUuanMnO1xuaW1wb3J0IElmcmFtZSBmcm9tICcuL2NvbXBvbmVudHMvaWZyYW1lLmpzJztcbmltcG9ydCBJbWFnZSBmcm9tICcuL2NvbXBvbmVudHMvaW1hZ2UuanMnO1xuaW1wb3J0IEVtYmVkIGZyb20gJy4vY29tcG9uZW50cy9lbWJlZC5qcyc7XG5pbXBvcnQgQXVkaW8gZnJvbSAnLi9jb21wb25lbnRzL2F1ZGlvLmpzJztcbmltcG9ydCBWaWRlbyBmcm9tICcuL2NvbXBvbmVudHMvdmlkZW8uanMnO1xuaW1wb3J0IFRyYWNrIGZyb20gJy4vY29tcG9uZW50cy90cmFjay5qcyc7XG5pbXBvcnQgU291cmNlIGZyb20gJy4vY29tcG9uZW50cy9zb3VyY2UuanMnO1xuaW1wb3J0IE9iamVjdHMgZnJvbSAnLi9jb21wb25lbnRzL29iamVjdC5qcyc7XG5pbXBvcnQgUm91dGUgZnJvbSAnLi9jb21wb25lbnRzL3JvdXRlLmpzJztcbmltcG9ydCBVcmwgZnJvbSAnLi9jb21wb25lbnRzL3VybC5qcyc7XG5pbXBvcnQgQSBmcm9tICcuL2NvbXBvbmVudHMvYS5qcyc7XG5pbXBvcnQgU2NvcGUgZnJvbSAnLi9zY29wZS5qcyc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlci5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuL3NlcnZpY2VzL3JvdXRlci5qcyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zZXJ2aWNlcy9zdG9yZS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5cbi8qKlxuICogVGhlIGZyYW1ld29yayBvYmplY3RcbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9nZXR0aW5nLXN0YXJ0ZWR9XG4gKi9cbmNvbnN0IEFraWxpID0ge307XG5cbkFraWxpLl9fZGVmYXVsdHMgPSBbXTtcblxuLyoqXG4gKiBTZXQgdGhlIGZyYW1ld29yaydzIGRlZmF1bHQgdmFyaWFibGVzXG4gKi9cbkFraWxpLnNldERlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgZGVidWc6IHRydWUsXG4gICAgZ2xvYmFsczogeyB1dGlscyB9XG4gIH07XG4gIFxuICB0aGlzLl9faW5pdCA9IG51bGw7XG4gIHRoaXMuX19jbGVhcmVkID0gZmFsc2U7XG4gIHRoaXMuX19jb21wb25lbnRzID0ge307XG4gIHRoaXMuX19hbGlhc2VzID0ge307XG4gIHRoaXMuX19zY29wZXMgPSB7fTtcbiAgdGhpcy5fX3N0b3JlTGlua3MgPSB7fTtcbiAgdGhpcy5fX3dpbmRvdyA9IHt9O1xuICB0aGlzLl9faXNvbGF0aW9uID0gbnVsbDtcbiAgdGhpcy5fX2V2YWx1YXRpb24gPSBudWxsO1xuICB0aGlzLl9fd3JhcHBpbmcgPSBmYWxzZTtcbiAgdGhpcy5fX29uRXJyb3IgPSAoKSA9PiB0aGlzLnRyaWdnZXJJbml0KGZhbHNlKTtcbiAgXG4gIHRoaXMuaHRtbEJvb2xlYW5BdHRyaWJ1dGVzID0gW1xuICAgICdkaXNhYmxlZCcsICdjb250ZW50ZWRpdGFibGUnLCAnaGlkZGVuJ1xuICBdO1xuXG4gIHRoaXMuY29tcG9uZW50cyA9IHt9O1xuICB0aGlzLnNlcnZpY2VzID0ge307XG5cbiAgdGhpcy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG4gIHRoaXMuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuICB0aGlzLlNjb3BlID0gU2NvcGU7XG4gIHRoaXMudXRpbHMgPSB1dGlscztcbiAgdGhpcy5jb21wb25lbnRzLkEgPSBBO1xuICB0aGlzLmNvbXBvbmVudHMuQXVkaW8gPSBBdWRpbztcbiAgdGhpcy5jb21wb25lbnRzLkNvbnRlbnQgPSBDb250ZW50O1xuICB0aGlzLmNvbXBvbmVudHMuRm9yID0gRm9yO1xuICB0aGlzLmNvbXBvbmVudHMuRW1iZWQgPSBFbWJlZDtcbiAgdGhpcy5jb21wb25lbnRzLklmID0gSWY7XG4gIHRoaXMuY29tcG9uZW50cy5JbmNsdWRlID0gSW5jbHVkZTtcbiAgdGhpcy5jb21wb25lbnRzLklucHV0ID0gSW5wdXQ7XG4gIHRoaXMuY29tcG9uZW50cy5JZnJhbWUgPSBJZnJhbWU7XG4gIHRoaXMuY29tcG9uZW50cy5JbWFnZSA9IEltYWdlO1xuICB0aGlzLmNvbXBvbmVudHMuT2JqZWN0ID0gT2JqZWN0cztcbiAgdGhpcy5jb21wb25lbnRzLlJhZGlvID0gUmFkaW87XG4gIHRoaXMuY29tcG9uZW50cy5Sb3V0ZSA9IFJvdXRlO1xuICB0aGlzLmNvbXBvbmVudHMuU2VsZWN0ID0gU2VsZWN0O1xuICB0aGlzLmNvbXBvbmVudHMuU291cmNlID0gU291cmNlO1xuICB0aGlzLmNvbXBvbmVudHMuVGV4dCA9IFRleHQ7XG4gIHRoaXMuY29tcG9uZW50cy5UZXh0YXJlYSA9IFRleHRhcmVhO1xuICB0aGlzLmNvbXBvbmVudHMuVHJhY2sgPSBUcmFjaztcbiAgdGhpcy5jb21wb25lbnRzLlVybCA9IFVybDtcbiAgdGhpcy5jb21wb25lbnRzLlZpZGVvID0gVmlkZW87XG4gIHRoaXMuc2VydmljZXMucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIHRoaXMuc2VydmljZXMucm91dGVyID0gcm91dGVyO1xuICB0aGlzLnNlcnZpY2VzLnN0b3JlID0gc3RvcmU7XG5cbiAgdGhpcy5kZWZpbmUoKTtcbiAgdGhpcy5lcnJvckhhbmRsaW5nKCk7XG4gIHRoaXMuaXNvbGF0ZUV2ZW50cygpO1xuICB0aGlzLmlzb2xhdGVBcnJheVByb3RvdHlwZSgpO1xuICB0aGlzLmlzb2xhdGVXaW5kb3dGdW5jdGlvbnMoKTsgXG4gIFxuICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5fX2RlZmF1bHRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHRoaXMuX19kZWZhdWx0c1tpXSgpO1xuICB9XG59XG5cbi8qKlxuICogRGVmaW5lIGFsbCBkZWZhdWx0IGNvbXBvbmVudHNcbiAqL1xuQWtpbGkuZGVmaW5lID0gZnVuY3Rpb24gKCkge1xuICBBLmRlZmluZSgpO1xuICBBdWRpby5kZWZpbmUoKTtcbiAgQ29udGVudC5kZWZpbmUoKTtcbiAgQ29tcG9uZW50LmRlZmluZSgpO1xuICBFbWJlZC5kZWZpbmUoKTtcbiAgRm9yLmRlZmluZSgpO1xuICBJbmNsdWRlLmRlZmluZSgpO1xuICBJZnJhbWUuZGVmaW5lKCk7XG4gIEltYWdlLmRlZmluZSgpO1xuICBJbnB1dC5kZWZpbmUoKTtcbiAgSWYuZGVmaW5lKCk7XG4gIE9iamVjdHMuZGVmaW5lKCk7XG4gIFJhZGlvLmRlZmluZSgpO1xuICBSb3V0ZS5kZWZpbmUoKTtcbiAgU2VsZWN0LmRlZmluZSgpO1xuICBTb3VyY2UuZGVmaW5lKCk7XG4gIFRleHRhcmVhLmRlZmluZSgpO1xuICBUcmFjay5kZWZpbmUoKTtcbiAgVmlkZW8uZGVmaW5lKCk7XG59O1xuXG4vKipcbiAqIFNldCBkZWZhdWx0c1xuICogXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiBcbiAqL1xuQWtpbGkuZGVmYXVsdHMgPSBmdW5jdGlvbihmbikgeyAgXG4gIHRoaXMuX19kZWZhdWx0cy5wdXNoKGZuKTtcbiAgZm4oKTtcbn1cblxuLyoqXG4gKiBDbGVhciB0aGUgZ2xvYmFsIGNvbnRleHRcbiAqL1xuQWtpbGkuY2xlYXJHbG9iYWxzID0gZnVuY3Rpb24gKCkge1xuICBpZih0aGlzLl9fY2xlYXJlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGZvciAobGV0IGtleSBpbiB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlKSB7XG4gICAgRWxlbWVudC5wcm90b3R5cGVba2V5XSA9IHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGVba2V5XTtcbiAgfVxuXG4gIGZvciAobGV0IGtleSBpbiB0aGlzLl9fd2luZG93LkFycmF5LnByb3RvdHlwZSkge1xuICAgIEFycmF5LnByb3RvdHlwZVtrZXldID0gdGhpcy5fX3dpbmRvdy5BcnJheS5wcm90b3R5cGVba2V5XTtcbiAgfVxuXG4gIGZvcihsZXQga2V5IGluIHRoaXMub3B0aW9ucy5nbG9iYWxzKSB7XG4gICAgdGhpcy5vcHRpb25zLmdsb2JhbHNba2V5XSA9IHRoaXMudW53cmFwKHRoaXMub3B0aW9ucy5nbG9iYWxzW2tleV0pO1xuICB9XG5cbiAgd2luZG93LnNldFRpbWVvdXQgPSB0aGlzLl9fd2luZG93LnNldFRpbWVvdXQ7XG4gIHdpbmRvdy5zZXRJbnRlcnZhbCA9IHRoaXMuX193aW5kb3cuc2V0SW50ZXJ2YWw7XG4gIHdpbmRvdy5Qcm9taXNlID0gdGhpcy5fX3dpbmRvdy5Qcm9taXNlO1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCB0aGlzLl9fb25FcnJvcik7XG4gIHRoaXMuX19jbGVhcmVkID0gdHJ1ZTtcbn07XG5cbi8qKlxuICogSm9pbiBiaW5kaW5nIGtleXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIGJpbmRpbmcga2V5c1xuICovXG5Ba2lsaS5qb2luQmluZGluZ0tleXMgPSBmdW5jdGlvbiAoa2V5cykge1xuICByZXR1cm4ga2V5cy5tYXAoZWwgPT4gZWwudG9TdHJpbmcoKSkuam9pbignLicpO1xufTtcblxuLyoqXG4gKiBBZGQgc2NvcGUgdG8gdGhlIHNjb3BlcyBsaXN0XG4gKlxuICogQHBhcmFtIHNjb3BlXG4gKi9cbkFraWxpLmFkZFNjb3BlID0gZnVuY3Rpb24gKHNjb3BlKSB7XG4gIGlmICh0aGlzLl9fc2NvcGVzW3Njb3BlLl9fbmFtZV0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFNjb3BlIG5hbWUgJHtzY29wZS5fX25hbWV9IGFscmVhZHkgZXhpc3RzYCk7XG4gIH1cblxuICB0aGlzLl9fc2NvcGVzW3Njb3BlLl9fbmFtZV0gPSBzY29wZTtcbn07XG5cbi8qKlxuICogR2V0IHNjb3BlIGZyb20gdGhlIHNjb3BlcyBsaXN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzY29wZSBuYW1lXG4gKiBAcmV0dXJucyB7U2NvcGV9XG4gKi9cbkFraWxpLmdldFNjb3BlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuX19zY29wZXNbbmFtZV07XG59O1xuXG4vKipcbiAqIERlbGV0ZSBzY29wZSBmcm9tIHRoZSBzY29wZXMgbGlzdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc2NvcGUgbmFtZVxuICovXG5Ba2lsaS5yZW1vdmVTY29wZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHRoaXMuX19zY29wZXNbbmFtZV0gPSBudWxsO1xuICBkZWxldGUgdGhpcy5fX3Njb3Blc1tuYW1lXTtcbn07XG5cbi8qKlxuICogR2V0IGFsbCBlbGVtZW50cyB3aXRoIGF0dGFjaGVkIEFraWxpIGNvbXBvbmVudHNcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFt0cmVlPXRydWVdIC0gcmV0dXJuIGFycmF5IG9mIHRoZSBwYXJlbnRzIGlmIHRydWUsIGNsb3Nlc3QgcGFyZW50IGlmIGZhbHNlXG4gKiBAcmV0dXJucyB7QXJyYXl8RWxlbWVudHxudWxsfVxuICovXG5Ba2lsaS5nZXRBa2lsaVBhcmVudHMgPSBmdW5jdGlvbiAoZWwsIHRyZWUgPSB0cnVlKSB7XG4gIGxldCBhcnIgPSBbXTtcblxuICBmdW5jdGlvbiBjaGVjayhub2RlKSB7XG4gICAgaWYgKCFub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5wYXJlbnROb2RlLl9fYWtpbGkpIHtcbiAgICAgIGFyci5wdXNoKG5vZGUucGFyZW50Tm9kZSk7XG5cbiAgICAgIGlmICghdHJlZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2sobm9kZS5wYXJlbnROb2RlKTtcbiAgfVxuXG4gIGNoZWNrKGVsKTtcbiAgcmV0dXJuIHRyZWU/IGFycjogYXJyWzBdO1xufTtcblxuLyoqXG4gKiBTZXQgZWxlbWVudCBpbm5lciBodG1sIHdpdGggY29udGVudCByZXBsYWNpbmdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcIjxpPkhlbGxvPC9pPjxiPldvcmxkPC9iPlwiXG4gKiBlbC5pbm5lckhUTUwgPSBcIjxiPldvcmxkPC9iPlwiO1xuICogQWtpbGkuc2V0VGVtcGxhdGUoZWwsIFwiPGk+SGVsbG88L2k+JHt0aGlzLl9fY2hpbGRyZW59XCIpO1xuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuQWtpbGkuc2V0VGVtcGxhdGUgPSBmdW5jdGlvbiAoZWwsIHRlbXBsYXRlKSB7XG4gIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZSgvXFwkeygoKD8hXFwkeylcXHMqdGhpc1xcLl9fY29udGVudFxccyopKil9LywgZWwuaW5uZXJIVE1MKTtcbiAgZWwuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG5cbiAgcmV0dXJuIGVsLmlubmVySFRNTDtcbn07XG5cbi8qKlxuICogR2VuZXJhdGUgdW5pcXVlIHNjb3BlIG5hbWVcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5Ba2lsaS5jcmVhdGVTY29wZU5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB1dGlscy5jcmVhdGVSYW5kb21TdHJpbmcoMTYsIChzdHIpID0+IHtcbiAgICByZXR1cm4gISF0aGlzLl9fc2NvcGVzW3N0cl07XG4gIH0pO1xufTtcblxuLyoqXG4gKiBJc29sYXRlIGZ1bmN0aW9uLlxuICogRXZlcnkgc2NvcGUgdmFyaWFibGUgY2hhbmdlIGNhbGxzIGFjY29yZGluZyBub2RlIGV2YWx1YXRpb24uXG4gKiBGb3IgZXhhbXBsZSwgaWYgeW91IGNoYW5nZSBzb21lIHNjb3BlIHZhcmlhYmxlIGluIHRoZSBsb29wIC0gZXZhbHVhdGlvbiB3aWxsIGJlIGNhbGxlZCBvbiB0aGUgZWFjaCBjaGFuZ2UuXG4gKiBJdCBtYXkgYmUgc2xvdyBmb3IgdGhlIGFwcGxpY2F0aW9uLlxuICogWW91IGNhbiBpc29sYXRlIHRoaXMgYWN0aW9uIGFuZCBydW4gYWxsIGV2YWx1YXRpb24gcHJvY2VzcyBhZnRlciBwYXNzZWQgZnVuY3Rpb24gYXQgb25jZS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLmlzb2xhdGUgPSBmdW5jdGlvbiAoZm4pIHsgXG4gIGlmICh0aGlzLl9faXNvbGF0aW9uKSB7XG4gICAgcmV0dXJuIGZuKCk7XG4gIH1cblxuICB0aGlzLl9faXNvbGF0aW9uID0ge307XG4gIGxldCByZXMgPSBmbigpO1xuICBsZXQgcHJvcHMgPSBbXTtcblxuICBmb3IgKGxldCBrIGluIHRoaXMuX19pc29sYXRpb24pIHtcbiAgICBpZiAoIXRoaXMuX19pc29sYXRpb24uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHByb3BzLnB1c2godGhpcy5fX2lzb2xhdGlvbltrXSk7XG4gIH1cblxuICB0aGlzLl9faXNvbGF0aW9uID0gbnVsbDtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHByb3BzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBwcm9wID0gcHJvcHNbaV07XG5cbiAgICBpZiAocHJvcC5pc0RlbGV0ZWQpIHtcbiAgICAgIHByb3AuY29tcG9uZW50Ll9fZXZhbHVhdGVCeUtleXMocHJvcC5rZXlzLCB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIFxuICAgIHByb3AuY29tcG9uZW50LnNjb3BlLl9fc2V0KHByb3Aua2V5cywgdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMocHJvcC5rZXlzLCBwcm9wLmNvbXBvbmVudC5fX3Njb3BlKSk7XG4gIH1cblxuICBwcm9wcyA9IG51bGw7XG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIFN0b3AgZXZhbHVhdGlvbiBiZWZvcmUgdGhlIGZ1bmN0aW9uIGFuZCBjb250aW51ZSBhZnRlclxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkudW5ldmFsdWF0ZSA9IGZ1bmN0aW9uIChmbikge1xuICBsZXQgZXZhbHVhdGlvbiA9IHRoaXMuX19ldmFsdWF0aW9uO1xuICBsZXQgcmVzO1xuICB0aGlzLl9fZXZhbHVhdGlvbiA9IG51bGw7XG4gIHJlcyA9IGZuKCk7XG4gIHRoaXMuX19ldmFsdWF0aW9uID0gZXZhbHVhdGlvbjtcbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogRXZhbHVhdGUgb25seSByb290IHByb3BlcnRpZXNcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLndyYXBwaW5nID0gZnVuY3Rpb24oZm4pIHtcbiAgaWYodGhpcy5fX3dyYXBwaW5nKSB7XG4gICAgcmV0dXJuIGZuKCk7XG4gIH1cbiAgXG4gIHRoaXMuX193cmFwcGluZyA9IHRydWU7XG4gIGxldCByZXMgPSBmbigpOyAgXG4gIHRoaXMuX193cmFwcGluZyA9IGZhbHNlOyAgXG4gIHJldHVybiByZXM7ICAgXG59XG5cbi8qKlxuICogU3RvcCBpc29sYXRpb24gYmVmb3JlIHRoZSBmdW5jdGlvbiBhbmQgY29udGludWUgYWZ0ZXJcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLnVuaXNvbGF0ZSA9IGZ1bmN0aW9uIChmbikge1xuICBsZXQgaXNvbGF0aW9uID0gdGhpcy5fX2lzb2xhdGlvbjtcbiAgbGV0IHJlcztcbiAgdGhpcy5fX2lzb2xhdGlvbiA9IG51bGw7XG4gIHJlcyA9IGZuKCk7XG4gIHRoaXMuX19pc29sYXRpb24gPSBpc29sYXRpb247XG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIFJ1biB0aGUgZnVuY3Rpb24gb24gdGhlIG5leHQgdGlja1xuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuQWtpbGkubmV4dFRpY2sgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMpID0+IHNldFRpbWVvdXQoKCkgPT4gUHJvbWlzZS5yZXNvbHZlKGZuKCkpLnRoZW4ocmVzKSkpO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnM9e31dXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChlbCwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCByZWNvbXBpbGUgPSBvcHRpb25zLnJlY29tcGlsZTtcbiAgbGV0IGNvbXBvbmVudCA9IGVsLl9fYWtpbGk7XG5cbiAgaWYgKGNvbXBvbmVudCkge1xuICAgIGlmIChyZWNvbXBpbGUpIHtcbiAgICAgIGNvbXBvbmVudC5fX3JlY29tcGlsZShyZWNvbXBpbGUgPT09IHRydWU/IHt9OiByZWNvbXBpbGUpO1xuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgaXNSb290ID0gZWwgPT09IHRoaXMuX19yb290O1xuICBsZXQgY29tcG9uZW50TmFtZSA9IHV0aWxzLnRvRGFzaENhc2UoZWwuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKSB8fCBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpO1xuICBsZXQgX0NvbXBvbmVudCA9IHRoaXMuX19jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdO1xuXG4gIENIRUNLX0FMSUFTRVM6IGlmICghX0NvbXBvbmVudCkge1xuICAgIGxldCBzZWxlY3RvcnMgPSBPYmplY3Qua2V5cyh0aGlzLl9fYWxpYXNlcyk7XG5cbiAgICBpZiAoIXNlbGVjdG9ycy5sZW5ndGgpIHtcbiAgICAgIGJyZWFrIENIRUNLX0FMSUFTRVM7XG4gICAgfVxuXG4gICAgbGV0IHNlbGVjdG9yQWxsID0gc2VsZWN0b3JzLmpvaW4oJywnKTtcblxuICAgIGlmICghZWwubWF0Y2hlcyhzZWxlY3RvckFsbCkpIHtcbiAgICAgIGJyZWFrIENIRUNLX0FMSUFTRVM7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBzZWxlY3RvcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgc2VsZWN0b3IgPSBzZWxlY3RvcnNbaV07XG5cbiAgICAgIGlmIChlbC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBfQ29tcG9uZW50ID0gdGhpcy5fX2NvbXBvbmVudHNbdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKCFfQ29tcG9uZW50ICYmICFpc1Jvb3QpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIV9Db21wb25lbnQpIHtcbiAgICBfQ29tcG9uZW50ID0gdGhpcy5Db21wb25lbnQ7XG4gIH1cblxuICBpZiAoX0NvbXBvbmVudC5tYXRjaGVzICYmICFlbC5tYXRjaGVzKF9Db21wb25lbnQubWF0Y2hlcykpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb21wb25lbnQgPSBuZXcgX0NvbXBvbmVudChlbCwge30pOyAgXG4gIFxuICBpZiAoY29tcG9uZW50Ll9fY2FuY2VsbGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYoQWtpbGkuZ2V0QWtpbGlQYXJlbnRzKGVsKS5maW5kKHAgPT4gcC5fX2FraWxpLl9fcHJldmVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb21wb25lbnQuX19jcmVhdGUoKTtcbiAgcmV0dXJuIGNvbXBvbmVudDtcbn07XG5cbi8qKlxuICogQ29tcGlsZSB0aGUgZWxlbWVudFxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbkFraWxpLmNvbXBpbGUgPSBmdW5jdGlvbiAocm9vdCwgb3B0aW9ucyA9IHsgcmVjb21waWxlOiBmYWxzZSB9KSB7ICBcbiAgbGV0IGVsZW1lbnRzID0gW107XG5cbiAgY29uc3QgbmVzdGVkSW5pdGlhbGl6aW5nID0gKGVsKSA9PiB7XG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXMuaW5pdGlhbGl6ZShlbCwgb3B0aW9ucyk7XG4gICAgbGV0IGNoaWxkcmVuID0gZWwuY2hpbGRyZW47XG4gICAgY29tcG9uZW50ICYmIGVsZW1lbnRzLnB1c2goY29tcG9uZW50KTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5lc3RlZEluaXRpYWxpemluZyhjaGlsZCk7XG4gICAgfVxuICB9O1xuXG4gIG5lc3RlZEluaXRpYWxpemluZyhyb290KTtcbiAgbGV0IHAgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBjb21wb25lbnQgPSBlbGVtZW50c1tpXTtcbiAgICBwLnB1c2goY29tcG9uZW50Ll9fY29tcGlsZSgpKTtcbiAgfVxuXG4gIHJldHVybiBQcm9taXNlLmFsbChwKS50aGVuKCgpID0+IHtcbiAgICBsZXQgciA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IGVsZW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgY29tcG9uZW50ID0gZWxlbWVudHNbaV07XG4gICAgICByLnB1c2goY29tcG9uZW50Ll9fcmVzb2x2ZSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocik7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciB0aGUgY29tcG9uZW50IG9yIGdldCBpdCBpZiBmbiBpcyBub3QgcGFzc2VkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBbZm5dXG4gKi9cbkFraWxpLmNvbXBvbmVudCA9IGZ1bmN0aW9uIChuYW1lLCBmbikge1xuICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmICghZm4pIHtcbiAgICByZXR1cm4gdGhpcy5fX2NvbXBvbmVudHNbbmFtZV0gfHwgbnVsbDtcbiAgfVxuICBcbiAgaWYgKHRoaXMuX19jb21wb25lbnRzW25hbWVdICYmIEFraWxpLm9wdGlvbnMuZGVidWcpIHsgIFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKGBDb21wb25lbnQgJHtuYW1lfSBhbHJlYWR5IHdhcyBhZGRlZGApO1xuICB9XG5cbiAgdGhpcy5fX2NvbXBvbmVudHNbbmFtZV0gPSBmbjtcbn07XG5cbi8qKlxuICogVW5yZWdpc3RlciB0aGUgY29tcG9uZW50XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xuQWtpbGkudW5yZWdpc3RlckNvbXBvbmVudCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLl9fY29tcG9uZW50c1tuYW1lXTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIHNlbGVjdG9yIGFsaWFzIG9yIGdldCBpdCBpZiBjb21wb25lbnQgbmFtZSBpcyBub3QgcGFzc2VkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIC0gRE9NIHNlbGVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvbXBvbmVudE5hbWVdXG4gKi9cbkFraWxpLmFsaWFzID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBjb21wb25lbnROYW1lID0gJycpIHtcbiAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUudG9Mb3dlckNhc2UoKTtcblxuICBpZiAoIWNvbXBvbmVudE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdIHx8IG51bGw7XG4gIH1cblxuICBpZiAodGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdICYmIEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihgQWxpYXMgd2l0aCBzZWxlY3RvciAke3NlbGVjdG9yfSBhbHJlYWR5IHdhcyBhZGRlZGApO1xuICB9XG5cbiAgdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdID0gY29tcG9uZW50TmFtZTtcbn07XG5cbi8qKlxuICogVW5yZWdpc3RlciB0aGUgc2VsZWN0b3IgYWxpYXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqL1xuQWtpbGkudW5yZWdpc3RlckFsaWFzID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gIGRlbGV0ZSB0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl07XG59O1xuXG4vKipcbiAqIElzb2xhdGUgYXJyYXkgcHJvdG90eXBlIGZ1bmN0aW9uc1xuICovXG5Ba2lsaS5pc29sYXRlQXJyYXlQcm90b3R5cGUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX193aW5kb3cuQXJyYXkgPSB7IHByb3RvdHlwZToge30gfTtcblxuICBsZXQga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKEFycmF5LnByb3RvdHlwZSk7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgIGxldCBvbGQgPSBBcnJheS5wcm90b3R5cGVba2V5XTtcblxuICAgIGlmICh0eXBlb2Ygb2xkICE9ICdmdW5jdGlvbicgfHwga2V5ID09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHRoaXMuX193aW5kb3cuQXJyYXkucHJvdG90eXBlW2tleV0gPSBvbGQ7XG5cbiAgICBBcnJheS5wcm90b3R5cGVba2V5XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBBa2lsaS51bmV2YWx1YXRlKCgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLl9faXNQcm94eSkge1xuICAgICAgICAgIHJldHVybiBvbGQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBvbGQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG59O1xuXG4vKipcbiAqIElzb2xhdGUgc29tZSB3aW5kb3cgZnVuY3Rpb25zXG4gKi9cbkFraWxpLmlzb2xhdGVXaW5kb3dGdW5jdGlvbnMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fX3dpbmRvdy5zZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgdGhpcy5fX3dpbmRvdy5zZXRJbnRlcnZhbCA9IHNldEludGVydmFsO1xuICB0aGlzLl9fd2luZG93LlByb21pc2UgPSBQcm9taXNlO1xuICB3aW5kb3cuc2V0VGltZW91dCA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LnNldFRpbWVvdXQsIDApO1xuICB3aW5kb3cuc2V0SW50ZXJ2YWwgPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5zZXRJbnRlcnZhbCwgMCk7XG4gIHdpbmRvdy5Qcm9taXNlLmNvbnN0cnVjdG9yID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuUHJvbWlzZS5jb25zdHJ1Y3Rvcik7XG4gIHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS50aGVuID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUudGhlbiwgWzAsICdsYXN0J10pO1xuICB3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2ggPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS5jYXRjaCk7XG59O1xuXG4vKipcbiAqIElzb2xhdGUgZXZlbnQgbGlzdGVuZXJzXG4gKi9cbkFraWxpLmlzb2xhdGVFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX193aW5kb3cuRWxlbWVudCA9IHsgcHJvdG90eXBlOiB7fSB9O1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBFbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyO1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyO1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZTtcblxuICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZGVsZXRlIHRoaXMuX19ha2lsaUxpc3RlbmVycztcbiAgICByZXR1cm4gQWtpbGkuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChuYW1lLCBmbikge1xuICAgIGxldCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYgKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVycyA9IHt9O1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBhcmdzWzFdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ucHVzaCh7XG4gICAgICBsaW5rOiBmbixcbiAgICAgIGZuOiBhcmdzWzFdXG4gICAgfSk7XG5cbiAgICByZXR1cm4gQWtpbGkuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfTtcblxuICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKG5hbWUsIGZuKSB7XG4gICAgbGV0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVycykge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzID0ge307XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGxpc3RlbmVyID0gdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdW2ldO1xuXG4gICAgICBpZiAobGlzdGVuZXIubGluayA9PT0gZm4pIHtcbiAgICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLnNwbGljZShpLCAxKTtcbiAgICAgICAgYXJnc1sxXSA9IGxpc3RlbmVyLmZuO1xuICAgICAgICBpLS07XG4gICAgICAgIGwtLTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdO1xuICAgIH1cblxuICAgIHJldHVybiBBa2lsaS5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xufTtcblxuLyoqXG4gKiBXcmFwIHRoZSBmdW5jdGlvbiBjYWxsYmFjayB0byBhbiBpc29sYXRlIGNvbnRleHRcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfG51bWJlcltdfHN0cmluZ1tdfSBbcG9zPVwibGFzdFwiXVxuICogQHJldHVybnMge2Z1bmN0aW9ufVxuICovXG5Ba2lsaS5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbiA9IGZ1bmN0aW9uIChmbiwgcG9zID0gJ2xhc3QnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgIUFycmF5LmlzQXJyYXkocG9zKSAmJiAocG9zID0gW3Bvc10pO1xuICAgIFxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBwb3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbnVtID0gcG9zW2ldO1xuICAgICAgbGV0IGluZGV4ID0gbnVtO1xuICAgICAgbGV0IGNhbGxiYWNrID0gYXJnc1tudW1dO1xuXG4gICAgICBpZihudW0gPT0gJ2xhc3QnKSB7XG4gICAgICAgIGluZGV4ID0gYXJncy5sZW5ndGggLSAxO1xuICAgICAgICBjYWxsYmFjayA9IGFyZ3NbaW5kZXhdO1xuICAgICAgfVxuXG4gICAgICBpZih0eXBlb2YgY2FsbGJhY2sgIT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgYXJnc1tpbmRleF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjay5hcHBseShjYWxsYmFjaywgYXJndW1lbnRzKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfTtcbn07XG5cbi8qKlxuICogV3JhcCBvYmplY3RzL2NsYXNzZXMgdG8gaXNvbGF0ZSBhbmQgdW5ldmFsdWF0ZSBkYXRhXG4gKlxuICogQHBhcmFtIHsqfSBvYmpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBbb3B0aW9uc10gXG4gKi9cbkFraWxpLndyYXAgPSBmdW5jdGlvbiAob2JqLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IGN1cnJlbnQgPSBvYmo7XG5cbiAgaWYodHlwZW9mIG9iaiA9PSAnZnVuY3Rpb24nKSB7XG4gICAgb2JqID0gdGhpcy53cmFwRnVuY3Rpb24ob2JqKTtcblxuICAgIGlmKG9iaiA9PT0gY3VycmVudCkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gIH1cbiAgZWxzZSBpZighb2JqIHx8IHR5cGVvZiBvYmogIT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGxldCBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKTtcblxuICBmb3IobGV0IGsgPSAwLCBjID0ga2V5cy5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICBsZXQga2V5ID0ga2V5c1trXTtcbiAgICBsZXQgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpO1xuXG4gICAgaWYoIWRlc2NyaXB0b3IuY29uZmlndXJhYmxlIHx8ICFkZXNjcmlwdG9yLndyaXRhYmxlKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZihvcHRpb25zLnJldmVyc2UpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgey4uLmRlc2NyaXB0b3IsIHZhbHVlOiBvYmpba2V5XS5fX2FraWxpIHx8IG9ialtrZXldIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIFxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgey4uLmRlc2NyaXB0b3IsIHZhbHVlOiB0aGlzLndyYXAob2JqW2tleV0sIG9wdGlvbnMpIH0pO1xuICB9IFxuICBcbiAgcmV0dXJuIG9iajtcbn07XG5cbi8qKlxuICogVW53cmFwIG9iamVjdHMvY2xhc3Nlc1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBvYmpcbiAqL1xuQWtpbGkudW53cmFwID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdGhpcy53cmFwKG9iaiwgeyByZXZlcnNlOiB0cnVlIH0pO1xufVxuXG4vKipcbiAqIElzb2xhdGUgYSBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbkFraWxpLndyYXBGdW5jdGlvbiA9IGZ1bmN0aW9uKGZuKSB7XG4gIGlmIChmbi5fX2FraWxpKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgY29uc3QgYWtpbGlXcmFwcGVkRnVuY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIEFraWxpLndyYXBwaW5nKCgpID0+IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xuXG4gIGxldCBrZXlzID0gT2JqZWN0LmtleXMoZm4pO1xuICBha2lsaVdyYXBwZWRGdW5jdGlvbi5wcm90b3R5cGUgPSBmbi5wcm90b3R5cGU7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgYWtpbGlXcmFwcGVkRnVuY3Rpb25ba2V5XSA9IGZuW2tleV07XG4gIH1cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYWtpbGlXcmFwcGVkRnVuY3Rpb24sICdfX2FraWxpJywge1xuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIHZhbHVlOiBmblxuICB9KTtcblxuICByZXR1cm4gYWtpbGlXcmFwcGVkRnVuY3Rpb247XG59O1xuXG4vKipcbiAqIEVycm9yIGhhbmRsaW5nXG4gKi9cbkFraWxpLmVycm9ySGFuZGxpbmcgPSBmdW5jdGlvbigpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgdGhpcy5fX29uRXJyb3IpO1xufTtcblxuLyoqXG4gKiBUcmlnZ2VyIGFuIGluaXRpYWxpemF0aW9uIHN0YXR1c1xuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc3RhdHVzXG4gKi9cbkFraWxpLnRyaWdnZXJJbml0ID0gZnVuY3Rpb24oc3RhdHVzKSB7XG4gIEFraWxpLl9faW5pdCA9IHN0YXR1cztcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdha2lsaS1pbml0JywgeyBkZXRhaWw6IHN0YXR1cyB9KSk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIGFwcGxpY2F0aW9uXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBbcm9vdF1cbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5Ba2lsaS5pbml0ID0gZnVuY3Rpb24ocm9vdCkge1xuICByb290ID0gcm9vdCB8fCBkb2N1bWVudC5ib2R5O1xuXG4gIGlmKCEocm9vdCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBSb290IGVsZW1lbnQgbXVzdCBiZSBhbiBodG1sIGVsZW1lbnRgKTtcbiAgfVxuXG4gIGlmKHJvb3QgPT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgXCJodG1sXCIgY2FuJ3QgYmUgdGhlIHJvb3QgZWxlbWVudGApO1xuICB9XG5cbiAgdGhpcy5fX3Jvb3QgPSByb290O1xuICBcbiAgaWYod2luZG93LkFLSUxJX1NFUlZFUikgeyAgICBcbiAgICBBa2lsaS5pbml0U2VydmVyU2lkZUh0bWwod2luZG93LkFLSUxJX1NFUlZFUi5odG1sKTtcbiAgICBBa2lsaS5pbml0U2VydmVyU2lkZVJlcXVlc3RDYWNoZSh3aW5kb3cuQUtJTElfU0VSVkVSLnJlcXVlc3RDYWNoZSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgd2luZG93LkFLSUxJX0NMSUVOVCA9IHtcbiAgICAgIGh0bWw6IHRoaXMucHJlcGFyZVNlcnZlclNpZGVIdG1sKCkgICAgICBcbiAgICB9XG4gIH1cblxuICBmb3IobGV0IGtleSBpbiB0aGlzLm9wdGlvbnMuZ2xvYmFscykge1xuICAgIHRoaXMub3B0aW9ucy5nbG9iYWxzW2tleV0gPSB0aGlzLndyYXAodGhpcy5vcHRpb25zLmdsb2JhbHNba2V5XSk7XG4gIH1cbiAgXG4gIHJldHVybiB0aGlzLmNvbXBpbGUodGhpcy5fX3Jvb3QpLnRoZW4oKCkgPT4ge1xuICAgIGlmIChyb3V0ZXIuX19pbml0KSB7XG4gICAgICByZXR1cm4gcm91dGVyLmNoYW5nZVN0YXRlKCk7XG4gICAgfVxuICB9KS50aGVuKCgpID0+IHsgICAgXG4gICAgd2luZG93LkFLSUxJX0NMSUVOVCAmJiAod2luZG93LkFLSUxJX0NMSUVOVC5yZXF1ZXN0Q2FjaGUgPSB0aGlzLnByZXBhcmVTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlKCkpO1xuICAgIHRoaXMudHJpZ2dlckluaXQodHJ1ZSk7XG4gIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICB0aGlzLnRyaWdnZXJJbml0KGZhbHNlKTtcbiAgICB0aHJvdyBlcnI7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHNlcnZlci1zaWRlIHJlbmRlcmluZyBodG1sXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBodG1sXG4gKi9cbkFraWxpLmluaXRTZXJ2ZXJTaWRlSHRtbCA9IGZ1bmN0aW9uIChodG1sKSB7XG4gIGZvciAobGV0IGkgPSB0aGlzLl9fcm9vdC5hdHRyaWJ1dGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICB0aGlzLl9fcm9vdC5yZW1vdmVBdHRyaWJ1dGUodGhpcy5fX3Jvb3QuYXR0cmlidXRlc1tpXS5uYW1lKTtcbiAgfVxuXG4gIGxldCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gIGxldCBkb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGh0bWwsIFwidGV4dC9odG1sXCIpO1xuICBsZXQgZWwgPSBkb2MucXVlcnlTZWxlY3Rvcih0aGlzLl9fcm9vdCA9PT0gZG9jdW1lbnQuYm9keT8gJ2JvZHknOiAnYm9keSA+IConKTsgICAgXG4gIHRoaXMuX19yb290LmlubmVySFRNTCA9IGVsLmlubmVySFRNTDtcblxuICBmb3IgKGxldCBpID0gZWwuYXR0cmlidXRlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGxldCBhdHRyID0gZWwuYXR0cmlidXRlc1tpXTtcbiAgICB0aGlzLl9fcm9vdC5zZXRBdHRyaWJ1dGUoYXR0ci5uYW1lLCBhdHRyLnZhbHVlKTtcbiAgfSAgXG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgcmVxdWVzdCBjYWNoZVxuICogXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKi9cbkFraWxpLmluaXRTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlID0gZnVuY3Rpb24gKG9iaikge1xuICBjb25zdCBpbml0ID0gKGluc3RhbmNlLCBvYmopID0+IHtcbiAgICBmb3IobGV0IGtleSBpbiBvYmopIHtcbiAgICAgIGluc3RhbmNlLl9fY2FjaGVba2V5XSA9IG9ialtrZXldO1xuICAgIH1cbiAgfVxuICBcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xuICAgIGxldCBpbnN0YW5jZSA9IGtleSA9PT0gJ19fbWFpbic/IHJlcXVlc3Q6IHJlcXVlc3QuX19pbnN0YW5jZXNba2V5XTtcbiAgICBpbml0KGluc3RhbmNlLCBvYmpba2V5XSk7XG4gIH1cbn1cblxuLyoqXG4gKiBQcmVwYXJlIHNlcnZlci1zaWRlIHJlbmRlcmluZyBodG1sXG4gKi9cbkFraWxpLnByZXBhcmVTZXJ2ZXJTaWRlSHRtbCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX19yb290Lm91dGVySFRNTDtcbn1cblxuLyoqXG4gKiBQcmVwYXJlIHNlcnZlci1zaWRlIHJlbmRlcmluZyByZXF1ZXN0IGNhY2hlXG4gKi9cbkFraWxpLnByZXBhcmVTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlID0gZnVuY3Rpb24gKCkge1xuICBsZXQgY2FjaGUgPSB7IF9fbWFpbjogcmVxdWVzdC5fX2NhY2hlIH07XG5cbiAgZm9yKGxldCBrZXkgaW4gcmVxdWVzdC5fX2luc3RhbmNlcykge1xuICAgIGNhY2hlW2tleV0gPSByZXF1ZXN0Ll9faW5zdGFuY2VzW2tleV0uX19jYWNoZTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuLyoqXG4gKiBEZWluaXRpYWxpemUgdGhlIGFwcGxpY2F0aW9uXG4gKi9cbkFraWxpLmRlaW5pdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmNsZWFyR2xvYmFscygpO1xuICByb3V0ZXIuZGVpbml0KCk7XG4gIHJlcXVlc3QuZGVpbml0KCk7XG4gIGxldCBzdG9yZUtleXMgPSBPYmplY3Qua2V5cyhzdG9yZS5fX3RhcmdldCk7XG4gIFxuICBmb3IobGV0IGkgPSAwLCBsID0gc3RvcmVLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGRlbGV0ZSBzdG9yZS5fX3RhcmdldFtzdG9yZUtleXNbaV1dO1xuICB9XG5cbiAgdGhpcy5zZXREZWZhdWx0cygpO1xufTtcblxud2luZG93LkFraWxpID0gQWtpbGk7XG5leHBvcnQgZGVmYXVsdCBBa2lsaTtcbkFraWxpLnNldERlZmF1bHRzKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FraWxpLmpzIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXIuanMnXG5cbi8qKlxuICogQW4gb2JqZWN0IHdpdGggYSBsb3Qgb2YgdXNlZnVsIGZ1bmN0aW9uc1xuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3V0aWxzfVxuICovXG5jb25zdCB1dGlscyA9IHt9O1xuXG4vKipcbiAqIENyZWF0ZSBjbGFzcyBhdHRyaWJ1dGUgZnJvbSBhbiBvYmplY3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcInJlZCBhY3RpdmVcIlxuICogdXRpbHMuY2xhc3Moe3JlZDogdHJ1ZSwgYWN0aXZlOiB0cnVlLCBncmVlbjogZmFsc2V9KTtcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5jbGFzcyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBsZXQgY2xhc3NlcyA9IFtdO1xuICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrID0ga2V5c1tpXTtcbiAgICBsZXQgdmFsID0gb2JqW2tdO1xuICAgIHZhbCAmJiBjbGFzc2VzLnB1c2goayk7XG4gIH1cblxuICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBzdHlsZSBhdHRyaWJ1dGUgZnJvbSBhbiBvYmplY3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcImNvbG9yOnJlZDt3aWR0aDoxMHB4XCJcbiAqIHV0aWxzLnN0eWxlKHtjb2xvcjogXCJyZWRcIiwgYmFja2dyb3VuZDogZmFsc2UsIHdpZHRoOiBcIjEwcHhcIn0pO1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnN0eWxlID0gZnVuY3Rpb24ob2JqKSB7XG4gIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgbGV0IHN0eWxlcyA9IFtdO1xuICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrID0ga2V5c1tpXTtcbiAgICBsZXQgdmFsID0gb2JqW2tdO1xuICAgIHZhbCAmJiBzdHlsZXMucHVzaChgJHt0aGlzLnRvRGFzaENhc2Uoayl9OiR7dmFsfWApO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlcy5qb2luKCc7Jyk7XG59O1xuXG4vKipcbiAqIEV4dGVuZGVkIHNwbGl0IG9mIHRoZSBzdHJpbmdcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW1wiSGVsbG9cIiwgXCJXb3JsZFwiXVxuICogdXRpbHMuc3BsaXQoXCJIZWxsbyBXb3JsZFwiLCBcIiBcIik7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsneCA9IDUnLCAnIHkgPSBcIjE7MjszXCInXVxuICogdXRpbHMuc3BsaXQoJ3ggPSA1OyB5ID0gXCIxOzI7M1wiJywgXCI7XCIsIFsnXCInXSk7XG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cH0gc3RyIFxuICogQHBhcmFtIHtzdHJpbmd9IFtkZWxdXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBbZXhjbHVkZV0gXG4gKi9cbnV0aWxzLnNwbGl0ID0gZnVuY3Rpb24oc3RyLCBkZWwgPSAnJywgZXhjbHVkZSA9IFtdKSB7XG5cdGNvbnN0IGV4cHMgPSBbXTsgICAgIFxuICBsZXQgbGFzdCA9ICcnO1xuXG4gIGlmKCFkZWwpIHtcbiAgICByZXR1cm4gc3RyLnNwbGl0KCcnKTtcbiAgfVxuICBlbHNlIGlmKGRlbCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIHJldHVybiBzdHIuc3BsaXQoZGVsKTtcbiAgfVxuICBlbHNlIGlmKHN0ci5pbmRleE9mKGRlbCkgPT0gLTEpIHtcbiAgICBsYXN0ID0gc3RyO1xuICB9XG4gIGVsc2Uge1xuICAgIGNvbnN0IGFyciA9IHN0ci5zcGxpdCgnJyk7XG4gICAgbGV0IG9wZW4gPSAnJzsgXG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHZhbCA9IGFycltpXTtcbiAgICAgIGxldCBpbmRleCA9IGV4Y2x1ZGUuaW5kZXhPZih2YWwpOyAgICAgIFxuXG4gICAgICBpZihpbmRleCA+IC0xICYmICghb3BlbiB8fCBvcGVuID09IHZhbCkpIHtcbiAgICAgICAgIW9wZW4/IG9wZW4gPSBleGNsdWRlW2luZGV4XTogb3BlbiA9ICcnO1xuICAgICAgfVxuXG4gICAgICBpZih2YWwgPT0gZGVsICYmICFvcGVuKSB7XG4gICAgICAgIGV4cHMucHVzaChsYXN0KTtcbiAgICAgICAgbGFzdCA9ICcnO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbGFzdCArPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgbGFzdCAmJiBleHBzLnB1c2gobGFzdCk7XG4gIHJldHVybiBleHBzO1xufVxuXG4vKipcbiAqIEZpbHRlciBhbiBhcnJheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsxLCAxMV1cbiAqIHV0aWxzLmZpbHRlcihbMSwgMiwgMywgMTFdLCAnMScpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMX0sIHt4OiAxMX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxfSwge3g6IDJ9LCB7eDogM30sIHt4OiAxMX1dLCAnMScsICd4Jyk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMX0sIHt4OiAxMX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxfSwge3g6IDJ9LCB7eDogM30sIHt4OiAxMX1dLCAnMScsIFsneCddKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxfSwge3g6IDExfV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IDF9LCB7eDogMn0sIHt4OiAzfSwge3g6IDExfV0sICcxJywgW1sneCddXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoge3k6IDF9fV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IHt5OiAxfX0sIHt4OiB7eTogMn19XSwgJzEnLCBbWyd4JywgJ3knXV0pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6MSwgeTogMn0sIHt4OiAyLCB5OjF9XSBcbiAqIHV0aWxzLmZpbHRlcihbe3g6IDEsIHk6IDJ9LCB7eDogMywgeTogM30sIHt4OiAyLCB5OiAxfV0sICcxJywgWyd4JywgJ3knXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoxLCB5OiAyfSwge3g6IDIsIHk6MX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxLCB5OiAyfSwge3g6IDMsIHk6IDN9LCB7eDogMiwgeTogMX1dLCAnMScsIFtbJ3gnXSwgWyd5J11dKTtcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cHxmdW5jdGlvbn0gaGFuZGxlciAtIHR5cGUgb2YgZmlsdGVyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ1tdfHN0cmluZ30gW2tleXNdIC0gZmlsdGVyIGluIHRoZSBrZXlzIGlmIGFycmF5IGVsZW1lbnRzIGFyZSBvYmplY3RcbiAqIEByZXR1cm5zIHtBcnJheX0gLSByZXR1cm5zIG90aGVyIGFycmF5XG4gKi9cbnV0aWxzLmZpbHRlciA9IGZ1bmN0aW9uIChhcnIsIGhhbmRsZXIsIGtleXMgPSBudWxsKSB7XG4gIGxldCByZXMgPSBbXTtcblxuICBpZiAoa2V5cyAmJiAhQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgIGtleXMgPSBba2V5c107XG4gIH1cblxuICBpZih0eXBlb2YgaGFuZGxlciAhPSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3Qgc3RyID0gaGFuZGxlcj8gKGhhbmRsZXIgKyAnJykudG9Mb3dlckNhc2UoKTogJyc7XG4gICAgaGFuZGxlciA9IHZhbCA9PiAodmFsPyAodmFsICsgJycpLnRvTG93ZXJDYXNlKCk6ICcnKS5tYXRjaChzdHIpO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGl0ZW0gPSBhcnJbaV07XG4gICAgbGV0IGZpbHRlcmVkID0gZmFsc2U7XG5cbiAgICBpZigha2V5cyAmJiBoYW5kbGVyKGl0ZW0pKSB7XG4gICAgICBmaWx0ZXJlZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYoa2V5cykge1xuICAgICAgZm9yKGxldCBrID0gMCwgYyA9IGtleXMubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2tdO1xuICAgICAgICBrZXkgPSBBcnJheS5pc0FycmF5KGtleSk/IGtleTogW2tleV07XG4gICAgICAgIGxldCB2YWwgPSBrZXk/IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5LCBpdGVtKTogaXRlbTtcbiAgICBcbiAgICAgICAgaWYgKGhhbmRsZXIodmFsKSkge1xuICAgICAgICAgIGZpbHRlcmVkID0gdHJ1ZTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZpbHRlcmVkICYmIHJlcy5wdXNoKGl0ZW0pOyAgIFxuICB9XG5cbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogT3JkZXIgYW4gYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMSwgMiwgM11cbiAqIHV0aWxzLnNvcnQoWzMsIDIsIDFdLCB0cnVlKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMywgMiwgMV1cbiAqIHV0aWxzLnNvcnQoWzEsIDIsIDNdLCBmYWxzZSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dXG4gKiB1dGlscy5zb3J0KFt7eDogM30sIHt4OiAyfSwge3g6IDF9XSwgW1sneCddXSwgW3RydWVdKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCBbJ3gnXSwgdHJ1ZSk7XG4gKiB1dGlscy5zb3J0KFt7eDogM30sIHt4OiAyfSwge3g6IDF9XSwgJ3gnKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dLCBbWyd4J11dLCBbZmFsc2VdKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dLCBbJ3gnXSwgZmFsc2UpO1xuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sICd4JywgZmFsc2UpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMSwgeTogM30sIHt4OiAyLCB5OiAxfSwge3g6MiwgeTogMn1dXG4gKiB1dGlscy5zb3J0KFt7eDogMiwgeTogMn0sIHt4OiAyLCB5OiAxfSwge3g6IDIsIHk6IDN9XSwgW1sneCddLCBbJ3knXV0sIFt0cnVlLCB0cnVlXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoge3k6IDF9fSwge3g6IHt5OiAyfX1dXG4gKiB1dGlscy5zb3J0KFt7eDoge3k6IDJ9fSwge3g6IHt5OiAxfX1dLCBbWyd4JywgJ3knXV0sIFt0cnVlXSk7XG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0ge2Jvb2xlYW58QXJyYXlbXXxzdHJpbmdbXXxzdHJpbmd9IFtrZXlzXVxuICogQHBhcmFtIHtib29sZWFufGJvb2xlYW5bXX0gW29yZGVyXSAtIHJldmVyc2Ugb3Igbm90XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbnV0aWxzLnNvcnQgPSBmdW5jdGlvbihhcnIsIGtleXMgPSB0cnVlLCBvcmRlciA9IFtdKSB7XG4gIGFyciA9IGFyci5zbGljZSgpO1xuXG4gIGlmIChrZXlzID09PSB0cnVlKSB7XG4gICAga2V5cyA9IFtdO1xuICAgIG9yZGVyID0gW3RydWVdO1xuICB9XG4gIGVsc2UgaWYgKGtleXMgPT09IGZhbHNlKSB7XG4gICAga2V5cyA9IFtdO1xuICAgIG9yZGVyID0gW2ZhbHNlXTtcbiAgfVxuXG4gIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgIGtleXMgPSBba2V5c107XG4gIH1cblxuICBpZiAoIUFycmF5LmlzQXJyYXkob3JkZXIpKSB7XG4gICAgb3JkZXIgPSBbb3JkZXJdO1xuICB9XG5cbiAgbGV0IGwgPSBrZXlzLmxlbmd0aDtcblxuICBhcnIuc29ydCgoYSwgYikgPT4ge1xuICAgIGxldCBpID0gMDtcblxuICAgIGNvbnN0IGNoZWNrID0gKGEsIGIsIHJldmVyc2UgPSBmYWxzZSkgPT4ge1xuICAgICAgaWYgKGEgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIGEgPSBhLmdldFRpbWUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGIgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIGIgPSBiLmdldFRpbWUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGEgPiBiKSB7XG4gICAgICAgIHJldHVybiByZXZlcnNlPyAtMTogMTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGEgPCBiKSB7XG4gICAgICAgIHJldHVybiByZXZlcnNlPyAxOiAtMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDA7XG4gICAgfTtcblxuICAgIGNvbnN0IG5leHQgPSAoKSA9PiB7XG4gICAgICBpZiAoaSA+PSBsKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuXG4gICAgICBsZXQga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGtleSkpIHtcbiAgICAgICAga2V5ID0gW2tleV07XG4gICAgICB9XG5cbiAgICAgIGxldCBhViA9IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5LCBhKTtcbiAgICAgIGxldCBiViA9IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5LCBiKTtcbiAgICAgIGxldCByZXMgPSBjaGVjayhhViwgYlYsIG9yZGVyW2ldID09PSBmYWxzZSk7XG5cbiAgICAgIGlmIChyZXMgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1cblxuICAgICAgaSsrO1xuICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICB9O1xuXG4gICAgaWYgKCFsKSB7XG4gICAgICByZXR1cm4gY2hlY2soYSwgYiwgb3JkZXJbaV0gPT09IGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dCgpO1xuICB9KTtcblxuICByZXR1cm4gYXJyO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gbmV3IG9iamVjdCB3aXRoIHRoZSBzcGVjaWZpZWQga2V5c1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB7eDogMSwgejogMX1cbiAqIHV0aWxzLmluY2x1ZGVLZXlzKHt4OiAxLCB5OiAxLCB6OiAxfSwgWyd4JywgJ3onXSk7XG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqL1xudXRpbHMuaW5jbHVkZUtleXMgPSBmdW5jdGlvbihvYmosIGtleXMpIHtcbiAgbGV0IG5ld09iaiA9IHt9O1xuICBsZXQgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IG9iaktleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGtleSA9IG9iaktleXNbaV07XG5cbiAgICBpZihrZXlzLmluZGV4T2Yoa2V5KSAhPSAtMSkge1xuICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG4vKipcbiAqIFJldHVybiBuZXcgb2JqZWN0IHdpdGhvdXQgdGhlIHNwZWNpZmllZCBrZXlzXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHt4OiAxLCB6OiAxfVxuICogdXRpbHMuaW5jbHVkZUtleXMoe3g6IDEsIHk6IDEsIHo6IDF9LCBbJ3knXSk7XG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqL1xudXRpbHMuZXhjbHVkZUtleXMgPSBmdW5jdGlvbihvYmosIGtleXMpIHtcbiAgbGV0IG5ld09iaiA9IHt9O1xuICBsZXQgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IG9iaktleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGtleSA9IG9iaktleXNbaV07XG5cbiAgICBpZihrZXlzLmluZGV4T2Yoa2V5KSA9PSAtMSkge1xuICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG4vKipcbiAqIENoZWNrIHRoZSB2YWx1ZSBpcyBjb21wb25lbnQgc2NvcGUgcHJveHkgb2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5pc1Njb3BlUHJveHkgPSBmdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuICEhKHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnICYmIHZhbC5fX2lzUHJveHkpO1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgdmFsdWUgaXMgcGxhaW4gb2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSBvYmpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5pc1BsYWluT2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XG4gIHJldHVybiAhIShvYmogJiYgdHlwZW9mIG9iaiA9PSAnb2JqZWN0JyAmJiAob2JqLmNvbnN0cnVjdG9yID09IE9iamVjdCB8fCBvYmouY29uc3RydWN0b3IgPT0gQXJyYXkpKTtcbn07XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVcbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zXSBcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5jb3B5ID0gZnVuY3Rpb24odmFsdWUsIG9wdGlvbnMgPSB7fSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8ICF2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIG9wdGlvbnMgPSB7IG5lc3RlZDogdHJ1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgLi4ub3B0aW9ucyB9O1xuXG4gIGNvbnN0IG5leHQgPSAob2JqKSA9PiB7XG4gICAgb2JqID0gdGhpcy5pc1Njb3BlUHJveHkob2JqKT8gb2JqLl9fdGFyZ2V0OiBvYmo7XG4gICAgbGV0IGtleXMgPSAhb3B0aW9ucy5lbnVtZXJhYmxlPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopOiBPYmplY3Qua2V5cyhvYmopO1xuICAgIGxldCBuZXdPYmogPSBBcnJheS5pc0FycmF5KG9iaik/IFtdOiB7fTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgIGxldCB2YWwgPSBvYmpba2V5XTtcbiAgICAgIHZhbCA9IHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnICYmIG9wdGlvbnMubmVzdGVkPyBuZXh0KHZhbCk6IHZhbDsgICAgICBcbiAgICAgIFxuICAgICAgaWYoIW9iai5wcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwge1xuICAgICAgICAgIC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpLFxuICAgICAgICAgIHZhbHVlOiB2YWxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIG5ld09ialtrZXldID0gdmFsOyAgXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld09iajtcbiAgfVxuXG4gIHJldHVybiBuZXh0KHZhbHVlKTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHRoZSB2YWx1ZSB0byBhdHRyaWJ1dGUgYXBwcm9wcmlhdGUgZm9ybWF0XG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gZmFsc2UgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEV2ZW50RW1pdHRlcikge1xuICAgIHJldHVybiAnW29iamVjdCBFdmVudF0nO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gdmFsdWUgKyAnJztcbn07XG5cbi8qKlxuICogQ29tcGFyZSB0d28gdmFsdWVzXG4gKlxuICogQHBhcmFtIHsqfSBhXG4gKiBAcGFyYW0geyp9IGJcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5jb21wYXJlID0gZnVuY3Rpb24gKGEsIGIsIG9wdGlvbnMgPSB7fSkge1xuICBpZiAoKGEgaW5zdGFuY2VvZiBEYXRlKSAmJiAoYiBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgcmV0dXJuIGEuZ2V0VGltZSgpID09PSBiLmdldFRpbWUoKTtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgYSA9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBiID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYS50b1N0cmluZygpID09PSBiLnRvU3RyaW5nKCk7XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT0gJ29iamVjdCcpIHtcbiAgICBpZiAoYSA9PT0gbnVsbCB8fCBiID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gYSA9PT0gYjtcbiAgICB9XG5cbiAgICBvcHRpb25zID0geyBlbnVtZXJhYmxlOiB0cnVlLCAuLi5vcHRpb25zIH07XG5cbiAgICBjb25zdCBjbGVhclVuZGVmaW5lZCA9ICh2YWwpID0+IHtcbiAgICAgIGxldCBvYmogPSBBcnJheS5pc0FycmF5KHZhbCk/IFtdOiB7fTtcbiAgICAgIGxldCBrZXlzID0gIW9wdGlvbnMuZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoKTogT2JqZWN0LmtleXModmFsKTtcblxuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICB2YWxba2V5XSAhPT0gdW5kZWZpbmVkICYmIChvYmpba2V5XSA9IHZhbFtrZXldKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGlmKG9wdGlvbnMuaWdub3JlVW5kZWZpbmVkKSB7XG4gICAgICBhID0gY2xlYXJVbmRlZmluZWQoYSk7XG4gICAgICBiID0gY2xlYXJVbmRlZmluZWQoYik7XG4gICAgfVxuXG4gICAgbGV0IGFLZXlzID0gIW9wdGlvbnMuZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoKTogT2JqZWN0LmtleXMoYSk7XG4gICAgbGV0IGJLZXlzID0gIW9wdGlvbnMuZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoKTogT2JqZWN0LmtleXMoYik7XG4gICAgXG4gICAgaWYgKGFLZXlzLmxlbmd0aCAhPSBiS2V5cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBhID0gdGhpcy5pc1Njb3BlUHJveHkoYSk/IGEuX190YXJnZXQ6IGE7XG4gICAgYiA9IHRoaXMuaXNTY29wZVByb3h5KGIpPyBiLl9fdGFyZ2V0OiBiO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGFLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGtleSA9IGFLZXlzW2ldO1xuXG4gICAgICBpZiAoIXRoaXMuY29tcGFyZShhW2tleV0sIGJba2V5XSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGEgPT09IGI7XG59O1xuXG4vKipcbiAqIENvbXBhcmUgdGhlIGN1cnJlbnQgdmFsdWUgd2l0aCB0aGUgcHJldmlvdXNcbiAqXG4gKiBAcGFyYW0geyp9IGN1cnJlbnQgLSB0aGUgY3VycmVudCB2YWx1ZVxuICogQHBhcmFtIHsqfSBwcmV2aW91cyAtIHRoZSBwcmV2aW91cyB2YWx1ZVxuICogQHBhcmFtIHsqfSBwcmV2aW91c0NvcHkgLSB0aGUgcHJldmlvdXMgdmFsdWUgY29weVxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlID0gZnVuY3Rpb24oY3VycmVudCwgcHJldmlvdXMsIHByZXZpb3VzQ29weSwgb3B0aW9ucykge1xuICBpZiAoY3VycmVudCAhPT0gcHJldmlvdXMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdGhpcy5jb21wYXJlKGN1cnJlbnQsIHByZXZpb3VzQ29weSwgb3B0aW9ucyk7XG59O1xuXG4vKipcbiAqIEVuY29kZSBodG1sIGVudGl0aWVzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJ5b3UgJmFtcCBtZVwiXG4gKiB1dGlscy5lbmNvZGVIdG1sRW50aXRpZXMoJ3lvdSAmIG1lJyk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmVuY29kZUh0bWxFbnRpdGllcyA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHZhbHVlO1xuICBlbC50ZXh0Q29udGVudCA9IGh0bWw7XG4gIHZhbHVlID0gZWwuaW5uZXJIVE1MO1xuICBlbC5yZW1vdmUoKTtcbiAgZWwgPSBudWxsO1xuICByZXR1cm4gdmFsdWU7XG59O1xuXG4vKipcbiAqIERlY29kZSBodG1sIGVudGl0aWVzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJ5b3UgJiBtZVwiXG4gKiB1dGlscy5kZWNvZGVIdG1sRW50aXRpZXMoJ3lvdSAmYW1wIG1lJyk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmRlY29kZUh0bWxFbnRpdGllcyA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBsZXQgdmFsdWU7XG4gIGVsLmlubmVySFRNTCA9IGh0bWw7XG4gIHZhbHVlID0gZWwudmFsdWU7XG4gIGVsLnJlbW92ZSgpO1xuICBlbCA9IG51bGw7XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHN0cmluZyBmcm9tIGRhc2ggdG8gY2FtZWwgY2FzZSBmb3JtYXRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy50b0NhbWVsQ2FzZSA9IGZ1bmN0aW9uKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcVysoLikvZywgKG0sIGMpID0+IGMudG9VcHBlckNhc2UoKSk7XG59O1xuXG4vKipcbiAqIENhcGl0YWxpemUgdGhlIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmNhcGl0YWxpemUgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RyaW5nIGZyb20gY2FtZWwgdG8gZGFzaCBjYXNlIGZvcm1hdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnRvRGFzaENhc2UgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIChtLCBjKSA9PiBgLSR7Yy50b0xvd2VyQ2FzZSgpfWApO1xufTtcblxuLyoqXG4gKiBHZXQgbmVzdGVkIG9iamVjdCBwcm9wZXJ0eSBieSBhcnJheSBrZXlzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCkge1xuICBsZXQgY3VycmVudDtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoKG8sIGspID0+IHtcbiAgICBpKys7XG5cbiAgICBpZiAodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBvO1xuICAgIH1cblxuICAgIGlmIChvW2tdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAoaSA9PSBsZW5ndGgpICYmIChjdXJyZW50ID0gb1trXSk7XG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIGN1cnJlbnQ7XG59O1xuXG4vKipcbiAqIENoZWNrIG5lc3RlZCBvYmplY3RzIHRyZWUgaGFzIHByb3BlcnR5IG9yIG5vdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHRydWVcbiAqIHV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaGFzUHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QpIHtcbiAgbGV0IGhhcyA9IGZhbHNlO1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZSgobywgaykgPT4ge1xuICAgIGkrKztcblxuICAgIGlmICh0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuICEhbztcbiAgICB9XG5cbiAgICBpZiAoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAoaSA9PSBsZW5ndGgpICYmIChoYXMgPSBvLmhhc093blByb3BlcnR5KGspKTtcbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gaGFzO1xufTtcblxuLyoqXG4gKiBTZXQgbmVzdGVkIG9iamVjdHMgdHJlZSBwcm9wZXJ0eVxuICogUmV0dXJucyBjaGFuZ2VkIHByb3BlcnR5IG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHt5OiA2fVxuICogdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0sIChsYXN0LCB2YWwpID0+IGxhc3Q/IDY6ICh2YWwgfHwge30pKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLnNldFByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0LCBmbikge1xuICBsZXQgY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoKG8sIGspID0+IHtcbiAgICBpKys7XG5cbiAgICBpZiAodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIG9ba10gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgb1trXSA9IGZuKGkgPT0gbGVuZ3RoLCBvW2tdKTtcbiAgICBjdXJyZW50ID0gbztcbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gY3VycmVudDtcbn07XG5cbi8qKlxuICpcbiAqIERlbGV0ZSBwcm9wZXJ0eSBmcm9tIG5lc3RlZCBvYmplY3RzIHRyZWVcbiAqIFJldHVybnMgZGVsZXRlZCBwcm9wZXJ0eSB2YWx1ZVxuICogWW91IGNhbiBjYW5jZWwgZGVsZXRpbmcgaWYgd2lsbCByZXR1cm4gZmFsc2UgaW4gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIDVcbiAqIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19LCB2YWwgPT4gdmFsICE9IDUpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtmbl1cbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCwgZm4pIHtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgdmFsdWU7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZSgobywgaykgPT4ge1xuICAgIGkrKztcblxuICAgIGlmICh0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghby5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGlmIChpID09IGxlbmd0aCkge1xuICAgICAgdmFsdWUgPSBvW2tdO1xuICAgICAgKCFmbiB8fCBmbih2YWx1ZSkpICYmIChkZWxldGUgb1trXSk7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuXG4vKipcbiAqIEdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSB0YXJnZXQgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xuXG51dGlscy5nZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQgPSBmdW5jdGlvbih0YXJnZXQsIGtleSkge1xuICBjb25zdCBjaGVjayA9IChvYmopID0+IHtcbiAgICBpZiAob2JqLnByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgbGV0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG5cbiAgICBpZiAoIXByb3RvKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hlY2socHJvdG8pO1xuICB9O1xuXG4gIHJldHVybiBjaGVjayh0YXJnZXQpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIG93biBwcm9wZXJ0eSB0YXJnZXQgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xudXRpbHMuZ2V0T3duUHJvcGVydHlUYXJnZXQgPSBmdW5jdGlvbih0YXJnZXQsIGtleSkge1xuICBjb25zdCBjaGVjayA9IChvYmopID0+IHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgbGV0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG5cbiAgICBpZiAoIXByb3RvKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hlY2socHJvdG8pO1xuICB9O1xuXG4gIHJldHVybiBjaGVjayh0YXJnZXQpO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSByYW5kb20gc3RyaW5nXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5jcmVhdGVSYW5kb21TdHJpbmcgPSBmdW5jdGlvbihsZW5ndGggPSAxNiwgZm4gPSBudWxsKSB7XG4gIGxldCBzdHIgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgbGVuZ3RoICsgMik7XG4gIGxldCB2YWwgPSAnJztcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHN0ci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNjYpIHtcbiAgICAgIHZhbCArPSBzdHJbaV0udG9VcHBlckNhc2UoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YWwgKz0gc3RyW2ldO1xuICAgIH1cbiAgfVxuXG4gIGlmIChmbiAmJiBmbih2YWwpKSB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlUmFuZG9tU3RyaW5nKGxlbmd0aCwgZm4pO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHV0aWxzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgZm9yIGVsZW1lbnRzIHdoaWNoIGhhdmUgYXN5bmMgYXR0cmlidXRlIGNvbnRlbnQuXHJcbiAqIFxyXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XHJcbiAqIFxyXG4gKiBAdGFnIHVybFxyXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXJsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgbWF0Y2hlcyA9ICdbdXJsXSc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcclxuICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG4gICAgdGhpcy51cmxBdHRyaWJ1dGUgPSAnc3JjJztcclxuICB9XHJcblxyXG4gIGNvbXBpbGVkKCkge1xyXG4gICAgdGhpcy5hdHRyKCd1cmwnLCB0aGlzLnNldFVybCk7XHJcbiAgfVxyXG5cclxuICBzZXRVcmwodXJsKSB7XHJcbiAgICB0aGlzLmF0dHJzW3RoaXMudXJsQXR0cmlidXRlXSA9IHVybDtcclxuICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy91cmwuanMiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi9ha2lsaS5qcyc7XG5pbXBvcnQgU2NvcGUgZnJvbSAnLi9zY29wZS5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc2VydmljZXMvc3RvcmUuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuXG5leHBvcnQgY29uc3QgZXZhbHVhdGlvblJlZ2V4ID0gL1xcJHsoKCg/IVxcJHspLikqKX0vO1xuZXhwb3J0IGNvbnN0IGV2YWx1YXRpb25SZWdleEdsb2JhbCA9IG5ldyBSZWdFeHAoZXZhbHVhdGlvblJlZ2V4LnNvdXJjZSwgXCJnXCIpO1xuZXhwb3J0IGNvbnN0IHN5c3RlbUF0dHJpYnV0ZXMgPSBbJ2NvbXBvbmVudCcsICdzY29wZSddO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZnJvbSB3aGljaCBhbGwgY29tcG9uZW50cyBhcmUgaW5oZXJpdGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFtdO1xuICBzdGF0aWMgZXZlbnRzID0gW107XG4gIHN0YXRpYyBjb250cm9sQXR0cmlidXRlcyA9IGZhbHNlO1xuICBzdGF0aWMgc2F2ZUF0dHJpYnV0ZVByb3h5SW4gPSBmYWxzZTtcbiAgc3RhdGljIHNhdmVBdHRyaWJ1dGVQcm94eU91dCA9IGZhbHNlO1xuICBzdGF0aWMgdHJhbnNwYXJlbnQgPSBmYWxzZTtcbiAgc3RhdGljIHRlbXBsYXRlID0gJyc7XG4gIHN0YXRpYyB0ZW1wbGF0ZVVybCA9ICcnO1xuICBzdGF0aWMgc2NvcGUgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0byBkZWZpbmUgdGhlIGNvbXBvbmVudFxuICAgKi9cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2NvbXBvbmVudCcsIENvbXBvbmVudCk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgdGhlIGV4cHJlc3Npb25cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4cHJlc3Npb25cbiAgICogQHBhcmFtIHtvYmplY3R9IFtnbG9iYWxzXVxuICAgKi9cbiAgc3RhdGljIHBhcnNlKGNvbnRleHQsIGV4cHJlc3Npb24sIGdsb2JhbHMgPSB7fSkge1xuICAgIGdsb2JhbHMgPSB7IC4uLkFraWxpLm9wdGlvbnMuZ2xvYmFscywgLi4uZ2xvYmFsc307XG4gICAgY29uc3Qga2V5cyA9IFtdO1xuICAgIGNvbnN0IHZhcnMgPSBbXTtcbiAgICBjb25zdCBleHBzID0gdXRpbHMuc3BsaXQoZXhwcmVzc2lvbiwgJzsnLCBbJ1wiJywgXCInXCIsICdgJ10pOyAgXG4gICAgZXhwc1tleHBzLmxlbmd0aCAtIDFdID0gYHJldHVybiAke2V4cHNbZXhwcy5sZW5ndGggLSAxXX1gO1xuXG4gICAgZm9yKGxldCBrZXkgaW4gZ2xvYmFscykge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICB2YXJzLnB1c2goZ2xvYmFsc1trZXldKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbiguLi5rZXlzLCBgJHtleHBzLmpvaW4oJzsgJyl9YCkuYXBwbHkoY29udGV4dCwgdmFycyk7XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICogXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWwgXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbc2NvcGVdIFxuICAgKi9cbiAgY29uc3RydWN0b3IoZWwsIHNjb3BlID0ge30pIHtcbiAgICBpZighKGVsIGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IG11c3QgcGFzcyBhbiBodG1sIGVsZW1lbnQgdG8gdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvcmApO1xuICAgIH1cblxuICAgIHRoaXMuX19pc01vdW50ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9faXNDb21waWxlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19pc1Jlc29sdmVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19wcmV2ZW50ID0gZmFsc2U7XG4gICAgdGhpcy5fX2JpbmRpbmdzID0ge307XG4gICAgdGhpcy5fX2V2YWx1YXRpbmdFdmVudCA9IG51bGw7XG4gICAgdGhpcy5fX3JlY29tcGlsaW5nID0gZmFsc2U7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IG51bGw7XG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IHt9O1xuICAgIHRoaXMuX19kaXNhYmxlQXR0clRyaWdnZXJpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9fY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLl9fcGFyZW50ID0gbnVsbDtcbiAgICB0aGlzLl9fcGFyZW50cyA9IFtdO1xuICAgIHRoaXMuX19hdHRycyA9IHt9O1xuICAgIHRoaXMuX19hdHRyTGlua3MgPSB7fTtcbiAgICB0aGlzLl9fc3RvcmVMaW5rcyA9IHt9O1xuICAgIHRoaXMuX19hdHRyaWJ1dGVPZiA9IG51bGw7XG4gICAgdGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQgPSB0aGlzO1xuICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICB0aGlzLmVsID0gZWw7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGNvbXBpbGF0aW9uIG9wdGlvbnMgXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlQ29tcGlsYXRpb25PcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB7IFxuICAgICAgY2hlY2tDaGFuZ2VzOiBmYWxzZSwgXG4gICAgICBzZXRFdmVudHM6IHRydWUsXG4gICAgICBzZXRQYXJlbnRzOiB0cnVlLFxuICAgICAgc2V0Qm9vbGVhbkF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICBkZWZpbmVBdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgLi4ub3B0aW9ucyBcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSByZWNvbXBpbGF0aW9uIG9wdGlvbnMgXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlUmVjb21waWxhdGlvbk9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHsgXG4gICAgICAuLi50aGlzLl9fY3JlYXRlQ29tcGlsYXRpb25PcHRpb25zKCksICAgIFxuICAgICAgc2V0RXZlbnRzOiBmYWxzZSxcbiAgICAgIHNldFBhcmVudHM6IGZhbHNlLFxuICAgICAgc2V0Qm9vbGVhbkF0dHJpYnV0ZXM6IGZhbHNlLFxuICAgICAgZGVmaW5lQXR0cmlidXRlczogZmFsc2UsXG4gICAgICAuLi5vcHRpb25zIFxuICAgIH07XG4gIH1cbiBcbiAgLyoqXG4gICAqIENhbGxlZCBvbiB0aGUgcmVjb21waWxhdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlY29tcGlsZShvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLl9faXNNb3VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX3JlY29tcGlsaW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5fX2Rpc2FibGVQcm94eSA9IHt9O1xuICAgIHRoaXMuX19jb21waWxpbmcgPSB0aGlzLl9fY3JlYXRlUmVjb21waWxhdGlvbk9wdGlvbnMob3B0aW9ucyk7ICAgIFxuICAgIHRoaXMuX19jb21waWxpbmcuc2V0RXZlbnRzICYmIHRoaXMuX19zZXRFdmVudHMoKTtcbiAgICB0aGlzLl9fY29tcGlsaW5nLnNldFBhcmVudHMgJiYgdGhpcy5fX3NldFBhcmVudHMoKTtcbiAgICB0aGlzLl9fY29tcGlsaW5nLnNldEJvb2xlYW5BdHRyaWJ1dGVzICYmIHRoaXMuX19zZXRCb29sZWFuQXR0cmlidXRlcygpO1xuICAgIHRoaXMuX19jb21waWxpbmcuZGVmaW5lQXR0cmlidXRlcyAmJiB0aGlzLl9fZGVmaW5lQXR0cmlidXRlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiB0aGUgY3JlYXRpb25cbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGUoKSB7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IHRoaXMuX19jcmVhdGVDb21waWxhdGlvbk9wdGlvbnMoKTsgICBcbiAgICB0aGlzLl9faW5pdGlhbGl6ZSgpO1xuICAgIHRoaXMuX19zZXRFdmVudHMoKTtcbiAgICB0aGlzLl9fc2V0UGFyZW50cygpO1xuICAgIHRoaXMuX19zZXRCb29sZWFuQXR0cmlidXRlcygpO1xuICAgIHRoaXMuX19kZWZpbmVBdHRyaWJ1dGVzKCk7XG4gICAgQWtpbGkuaXNvbGF0ZSgoKSA9PiB0aGlzLmNyZWF0ZWQodGhpcy5hdHRycykpOyAgICAgICBcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gdGhlIGNvbXBpbGF0aW9uXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBfX2NvbXBpbGUoKSB7XG4gICAgbGV0IGNvbnRyb2wgPSB0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMgfHwgIXRoaXMuX19ldmFsdWF0ZVBhcmVudDtcbiAgICBsZXQgcCA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIHRoaXMuX19hdHRyaWJ1dGVPZiA9IGNvbnRyb2w/IHRoaXM6IHRoaXMuX19ldmFsdWF0ZVBhcmVudC5fX2FraWxpO1xuXG4gICAgaWYgKCF0aGlzLl9fcmVjb21waWxpbmcgfHwgdGhpcy5fX2NvbXBpbGluZy5uZXdQYXJlbnQgfHwgdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzKSB7XG4gICAgICB0aGlzLl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKHRoaXMuZWwsIHRoaXMuX19hdHRyaWJ1dGVPZik7XG4gICAgfVxuXG4gICAgY29uc3QgaW50ZXJwb2xhdGUgPSAoY2hpbGRyZW4sIHBhcmVudCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlID09IDMgJiYgdGhpcy5fX2luaXRpYWxpemVOb2RlKGNoaWxkLCBwYXJlbnQsIHRydWUpKSB7IFxuICAgICAgICAgIHRoaXMuX19ldmFsdWF0ZU5vZGUoY2hpbGQsIHRoaXMuX19jb21waWxpbmcuY2hlY2tDaGFuZ2VzKTsgICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaGlsZC5ub2RlVHlwZSA9PSAxICYmICFjaGlsZC5fX2FraWxpKSB7XG4gICAgICAgICAgdGhpcy5fX2ludGVycG9sYXRlQXR0cmlidXRlcyhjaGlsZCk7XG4gICAgICAgICAgaW50ZXJwb2xhdGUoY2hpbGQuY2hpbGROb2RlcywgY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGludGVycG9sYXRlKHRoaXMuZWwuY2hpbGROb2RlcywgdGhpcy5lbCk7XG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IHRydWU7XG4gICAgbGV0IHJlcztcblxuICAgIGlmICghdGhpcy5fX3JlY29tcGlsaW5nKSB7XG4gICAgICByZXMgPSBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgdGhpcy5hdHRycy5vbkNvbXBpbGVkICYmIHRoaXMuYXR0cnMub25Db21waWxlZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGlsZWQoKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkge1xuICAgICAgICBwID0gcmVxdWVzdC5nZXQodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCwgeyBjYWNoZTogdGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZUNhY2hlIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5fX2NvbnRlbnQ7XG4gICAgICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgcmVzLmRhdGEpO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9fY29udGVudDsgICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uUmVjb21waWxlZCAmJiB0aGlzLmF0dHJzLm9uUmVjb21waWxlZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgICAgdGhpcy5yZWNvbXBpbGVkKCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5fX3JlY29tcGlsaW5nID0gZmFsc2U7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IG51bGw7XG5cbiAgICByZXR1cm4gcC50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuX19pc0NvbXBpbGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZSB0aGUgY29tcG9uZW50XG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBfX3Jlc29sdmUoKSB7XG4gICAgaWYgKHRoaXMuX19yZWNvbXBpbGluZykge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmF0dHJzLm9uUmVzb2x2ZWQgJiYgdGhpcy5hdHRycy5vblJlc29sdmVkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnJlc29sdmVkKCkpLnRoZW4ocmVzID0+IHtcbiAgICAgIHRoaXMuX19pc1Jlc29sdmVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUGFydCBvZiB0aGUge0BzZWUgQ29tcG9uZW50I19fY29tcGlsZX0gbWV0aG9kXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZSgpIHsgICAgXG4gICAgbGV0IHBhcmVudCA9IEFraWxpLmdldEFraWxpUGFyZW50cyh0aGlzLmVsLCBmYWxzZSk7ICAgICBcbiAgICBsZXQgU2NvcGUgPSB0aGlzLmNvbnN0cnVjdG9yLnNjb3BlIHx8IEFraWxpLlNjb3BlO1xuICAgIGxldCBzY29wZTtcbiAgICBsZXQgaXNSb290ID0gQWtpbGkuX19yb290ID09PSB0aGlzLmVsO1xuICAgIHRoaXMuZWwuX19ha2lsaSA9IHRoaXM7XG5cbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBzY29wZSA9IG5ldyBTY29wZSh0aGlzLmVsLmdldEF0dHJpYnV0ZSgnc2NvcGUnKSB8fCBBa2lsaS5jcmVhdGVTY29wZU5hbWUoKSwgdGhpcy5lbCwgdGhpcyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2NvcGUgPSBuZXcgU2NvcGUoaXNSb290PyAncm9vdCc6IEFraWxpLmNyZWF0ZVNjb3BlTmFtZSgpLCB0aGlzLmVsLCB0aGlzKTtcbiAgICAgIGlzUm9vdCAmJiAoQWtpbGkucm9vdCA9IHRoaXMpO1xuICAgIH1cblxuICAgIGxldCBfX3Njb3BlID0gc2NvcGU7XG4gICAgbGV0IF9zY29wZSA9IE9iamVjdC5hc3NpZ24oc2NvcGUsIHRoaXMuc2NvcGUpO1xuICAgIGxldCBjb250cm9sQXR0cmlidXRlcyA9IHRoaXMuY29uc3RydWN0b3IuY29udHJvbEF0dHJpYnV0ZXM7XG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuY29uc3RydWN0b3IuZXZlbnRzO1xuXG4gICAgaWYgKHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGUpIHtcbiAgICAgIEFraWxpLnNldFRlbXBsYXRlKHRoaXMuZWwsIHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlVXJsKSB7XG4gICAgICB0aGlzLl9fY29udGVudCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgICB9XG5cbiAgICB0aGlzLl9fc2NvcGUgPSBfX3Njb3BlO1xuICAgIHRoaXMuX19ldmVudHMgPSBldmVudHM7XG4gICAgdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzID0gY29udHJvbEF0dHJpYnV0ZXM7XG4gICAgdGhpcy5fX3NhdmVBdHRyaWJ1dGVQcm94eUluID0gdGhpcy5jb25zdHJ1Y3Rvci5zYXZlQXR0cmlidXRlUHJveHlJbjtcbiAgICB0aGlzLl9fc2F2ZUF0dHJpYnV0ZVByb3h5T3V0ID0gdGhpcy5jb25zdHJ1Y3Rvci5zYXZlQXR0cmlidXRlUHJveHlPdXQ7XG5cbiAgICBBa2lsaS5hZGRTY29wZShzY29wZSk7XG4gICAgdGhpcy5zY29wZSA9IHRoaXMuX19uZXN0ZWRPYnNlcnZlKF9zY29wZSwgW10pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBib29sZWFuIGF0dHJpYnV0ZXNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXRCb29sZWFuQXR0cmlidXRlcygpIHtcbiAgICB0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzID0gW10uY29uY2F0KEFraWxpLmh0bWxCb29sZWFuQXR0cmlidXRlcywgdGhpcy5jb25zdHJ1Y3Rvci5ib29sZWFuQXR0cmlidXRlcyk7XG5cbiAgICBjb25zdCBzZXRBdHRyID0gKGVsKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgYXR0cnMgPSBlbC5hdHRyaWJ1dGVzLCBsID0gYXR0cnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBub2RlID0gYXR0cnNbaV07XG5cbiAgICAgICAgaWYgKHRoaXMuYm9vbGVhbkF0dHJpYnV0ZXMuaW5kZXhPZihub2RlLm5vZGVOYW1lKSAhPSAtMSkge1xuICAgICAgICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoYGJvb2xlYW4tJHtub2RlLm5vZGVOYW1lfWApKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYGJvb2xlYW4tJHtub2RlLm5vZGVOYW1lfWAsIGVsLmdldEF0dHJpYnV0ZShub2RlLm5vZGVOYW1lKSB8fCBub2RlLm5vZGVOYW1lKTtcbiAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBlbC5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gZWwuY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYgKCFjaGlsZC5fX2FraWxpKSB7XG4gICAgICAgICAgc2V0QXR0cihjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2V0QXR0cih0aGlzLmVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZXZlbnRzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0RXZlbnRzKCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5fX2V2ZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBldiA9IHRoaXMuX19ldmVudHNbaV07XG4gICAgICAhL15vbi0vaS50ZXN0KGV2KSAmJiAoZXYgPSAnb24tJyArIGV2KTtcblxuICAgICAgaWYgKCF0aGlzLmVsLmhhc0F0dHJpYnV0ZShldikpIHtcbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoZXYsICcnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IGNvbXBvbmVudCBwYXJlbnRzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0UGFyZW50cygpIHtcbiAgICBsZXQgcGFyZW50cyA9IEFraWxpLmdldEFraWxpUGFyZW50cyh0aGlzLmVsKTtcblxuICAgIGlmICghcGFyZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbmV3UGFyZW50ID0gdGhpcy5fX3BhcmVudCAhPT0gcGFyZW50c1swXTtcbiAgICBsZXQgZXZhbHVhdGVQYXJlbnQgPSBudWxsO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBwYXJlbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHBhcmVudCA9IHBhcmVudHNbaV07XG5cbiAgICAgIGlmICghcGFyZW50Ll9fYWtpbGkuY29uc3RydWN0b3IudHJhbnNwYXJlbnQpIHtcbiAgICAgICAgZXZhbHVhdGVQYXJlbnQgPSBwYXJlbnQ7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fX2NvbXBpbGluZy5uZXdQYXJlbnQgPSBuZXdQYXJlbnQ7XG4gICAgbmV3UGFyZW50ICYmIHRoaXMuX19kZXRhY2goKTtcblxuICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLnRyYW5zcGFyZW50KSB7XG4gICAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudCA9IGV2YWx1YXRlUGFyZW50Ll9fYWtpbGk7XG4gICAgfVxuXG4gICAgdGhpcy5fX2V2YWx1YXRlUGFyZW50ID0gZXZhbHVhdGVQYXJlbnQ7XG4gICAgdGhpcy5fX3BhcmVudCA9IHBhcmVudHNbMF07XG4gICAgdGhpcy5fX3BhcmVudHMgPSBwYXJlbnRzO1xuICAgIHRoaXMuc2NvcGUuX19wYXJlbnQgPSB0aGlzLl9fZXZhbHVhdGVQYXJlbnQuX19ha2lsaS5zY29wZTtcbiAgICAhdGhpcy5fX3JlY29tcGlsaW5nICYmIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2FkZENoaWxkKHRoaXMuZWwpO1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLnNjb3BlLCB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19zY29wZSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGNoaWxkIGVsZW1lbnQgdG8gdGhlIGxpc3RcbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2FkZENoaWxkKGVsKSB7XG4gICAgdGhpcy5fX2NoaWxkcmVuLnB1c2goZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwbGljZSBjaGlsZCBmcm9tIHRoZSBsaXN0XG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zcGxpY2VDaGlsZChlbCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5fX2NoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5fX2NoaWxkcmVuW2ldO1xuXG4gICAgICBpZiAoY2hpbGQgPT09IGVsKSB7XG4gICAgICAgIHRoaXMuX19jaGlsZHJlbi5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGktLTtcbiAgICAgICAgbC0tO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBZb3UgY2FuIGNoYW5nZSBleHByZXNzaW9uIGJlZm9yZSBwYXJzaW5nIGhlcmVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4cHJlc3Npb25cbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0UGFyc2VkRXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgbm9kZSBoYXMgYW55IHByb3BlcnR5IGNoYW5nZXMgb3Igbm90XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jaGVja0V2YWx1YXRpb24obm9kZSkge1xuICAgIGlmICghT2JqZWN0LmtleXMobm9kZS5fX3Byb3BlcnRpZXMpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgayBpbiBub2RlLl9fcHJvcGVydGllcykge1xuICAgICAgaWYgKCFub2RlLl9fcHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IHByb3AgPSBub2RlLl9fcHJvcGVydGllc1trXTtcbiAgICAgIGxldCB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKHByb3Aua2V5cywgcHJvcC5jb21wb25lbnQuX19zY29wZSk7XG5cbiAgICAgIGlmICghdXRpbHMuY29tcGFyZVByZXZpb3VzVmFsdWUodmFsdWUsIHByb3AudmFsdWUsIHByb3AuY29weSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqICBDaGVjayBub2RlIGhhcyBjaGFuZ2VkIG9uIHRoZSBjZXJ0YWluIGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jaGVja05vZGVQcm9wZXJ0eUNoYW5nZShub2RlLCBrZXlzLCB2YWx1ZSkge1xuICAgIGxldCBwcm9wID0gdGhpcy5fX2dldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKTtcbiAgICBcbiAgICBpZiAoIXByb3ApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiAhdXRpbHMuY29tcGFyZVByZXZpb3VzVmFsdWUodmFsdWUsIHByb3AudmFsdWUsIHByb3AuY29weSk7XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgbm9kZSBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZShub2RlKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGxldCBhdHRyaWJ1dGVWYWx1ZTtcbiAgICBsZXQgZXhwcmVzc2lvbjtcblxuICAgIGlmIChub2RlLl9fY29tcG9uZW50LnBhcmVudHMoKGNvbSkgPT4gY29tLl9fcHJldmVudCkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbm9kZS5fX2V4cHJlc3Npb247XG4gICAgfVxuXG4gICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKSAmJiBub2RlLl9fY29tcG9uZW50Ll9fcHJldmVudCkge1xuICAgICAgcmV0dXJuIG5vZGUuX19leHByZXNzaW9uO1xuICAgIH1cbiAgICBcbiAgICBsZXQgcmVzID0gbm9kZS5fX2V4cHJlc3Npb24ucmVwbGFjZShldmFsdWF0aW9uUmVnZXhHbG9iYWwsIChtLCBkKSA9PiB7XG4gICAgICBjb3VudGVyKys7XG4gICAgICBsZXQgZXZhbHVhdGU7XG4gICAgICBsZXQgZXZhbHVhdGlvbiA9IFtdO1xuICAgICAgbGV0IGV4aXN0aW5nQmluZGluZ3MgPSB7fTtcbiAgICAgIGxldCBwYXJlbnRCaW5kaW5ncyA9IHt9O1xuICAgICAgbGV0IHBhcnNlVmFsdWUgPSBub2RlLl9fY29tcG9uZW50Ll9fZ2V0UGFyc2VkRXhwcmVzc2lvbihkKTtcbiAgICAgIEFraWxpLl9fZXZhbHVhdGlvbiA9IHsgbm9kZTogbm9kZSwgbGlzdDogW10sIGNvbXBvbmVudDogbm9kZS5fX2NvbXBvbmVudCB9O1xuICAgICAgXG4gICAgICB0cnkge1xuICAgICAgICBldmFsdWF0ZSA9IHRoaXMuY29uc3RydWN0b3IucGFyc2UodGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQuc2NvcGUsIHBhcnNlVmFsdWUpO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICBsZXQgdGFnTmFtZSA9IG5vZGUuX19jb21wb25lbnQuZWwudGFnTmFtZTtcbiAgICAgICAgbGV0IGF0dHJOYW1lID0gbm9kZS5fX2NvbXBvbmVudC5lbC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpO1xuICAgICAgICBsZXQgY29tcG9uZW50TmFtZSA9IChhdHRyTmFtZSB8fCB0YWdOYW1lKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBsZXQgZWxlbWVudE5hbWUgPSBub2RlLl9fZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGxldCBhdHRyaWJ1dGVOYW1lID0gKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cik/IG5vZGUubmFtZS50b0xvd2VyQ2FzZSgpOiAnJzsgICAgICAgIFxuICAgICAgICBsZXQgbWVzc2FnZXMgPSBbIGVyci5tZXNzYWdlLCBub2RlLl9fZXhwcmVzc2lvbiBdO1xuICAgICAgICBhdHRyaWJ1dGVOYW1lICYmIG1lc3NhZ2VzLnB1c2goYFthdHRyaWJ1dGUgJHthdHRyaWJ1dGVOYW1lfV1gKTtcbiAgICAgICAgbWVzc2FnZXMgPSBtZXNzYWdlcy5jb25jYXQoWyBgW2VsZW1lbnQgJHtlbGVtZW50TmFtZX1dYCwgYFtjb21wb25lbnQgJHtjb21wb25lbnROYW1lfV1gIF0pO1xuICAgICAgICB0aHJvdyBgRXhwcmVzc2lvbiBlcnJvcjogYCArIG1lc3NhZ2VzLmpvaW4oJ1xcblxcdGF0ICcpO1xuICAgICAgfVxuXG4gICAgICBpZihBa2lsaS5fX2V2YWx1YXRpb24pIHtcbiAgICAgICAgZXZhbHVhdGlvbiA9IEFraWxpLl9fZXZhbHVhdGlvbi5saXN0O1xuICAgICAgICBBa2lsaS5fX2V2YWx1YXRpb24ubGlzdCA9IG51bGw7XG4gICAgICAgIEFraWxpLl9fZXZhbHVhdGlvbiA9IG51bGw7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGZvciAobGV0IGkgPSBldmFsdWF0aW9uLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGxldCBkYXRhID0gZXZhbHVhdGlvbltpXTtcbiAgICAgICAgbGV0IGhhc2ggPSBkYXRhLmNvbXBvbmVudC5fX2NyZWF0ZUtleXNIYXNoKGRhdGEua2V5cyk7XG4gICAgICAgIGxldCBwYXJlbnRzSGFzaCA9IGRhdGEuY29tcG9uZW50Ll9fY3JlYXRlS2V5c0hhc2goZGF0YS5wYXJlbnRzKTtcbiAgICAgICBcbiAgICAgICAgaWYgKGRhdGEubm90QmluZGluZykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nQmluZGluZ3NbaGFzaF0pIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwYXJlbnRWYWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGRhdGEucGFyZW50cywgZGF0YS5jb21wb25lbnQuX19zY29wZSk7XG4gICAgICAgIGxldCBldmFsQ29tcG9uZW50ID0gbm9kZS5fX2F0dHJpYnV0ZU9mIHx8IG5vZGUuX19jb21wb25lbnQ7XG5cbiAgICAgICAgaWYgKHBhcmVudFZhbHVlICYmIHR5cGVvZiBwYXJlbnRWYWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGlmKEFraWxpLm9wdGlvbnMuZGVidWcgJiYgcGFyZW50QmluZGluZ3NbcGFyZW50c0hhc2hdID09IDUwKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgY29uc29sZS53YXJuKFtcbiAgICAgICAgICAgICAgYEZvciBoaWdoZXIgcGVyZm9ybWFuY2UsIGRvbid0IGxvb3AgUHJveHkgYXJyYXlzL29iamVjdHMgaW5zaWRlIGV4cHJlc3Npb24gZnVuY3Rpb25zLCBvciB1c2UgQWtpbGkudW5ldmFsdWF0ZSgpIHRvIHdyYXAgeW91IGNvZGUuYCxcbiAgICAgICAgICAgICAgYCR7IG5vZGUuX19leHByZXNzaW9uIH1gLFxuICAgICAgICAgICAgICBgc2NvcGUgcHJvcGVydHkgXCIkeyBkYXRhLnBhcmVudHMuam9pbignLicpfVwiYFxuICAgICAgICAgICAgXS5qb2luKCdcXG5cXHRhdCAnKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICFwYXJlbnRCaW5kaW5nc1twYXJlbnRzSGFzaF0/IHBhcmVudEJpbmRpbmdzW3BhcmVudHNIYXNoXSA9IDE6IHBhcmVudEJpbmRpbmdzW3BhcmVudHNIYXNoXSsrO1xuICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIGlmIChcbiAgICAgICAgICB1dGlscy5pc1Njb3BlUHJveHkocGFyZW50VmFsdWUpICYmIFxuICAgICAgICAgIGRhdGEuY29tcG9uZW50ICE9PSBldmFsQ29tcG9uZW50Ll9fZXZhbHVhdGlvbkNvbXBvbmVudCAmJiBcbiAgICAgICAgICBkYXRhLmNvbXBvbmVudCA9PT0gZGF0YS5yZWFsQ29tcG9uZW50XG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9ICBcblxuICAgICAgICBkYXRhLmNvbXBvbmVudC5fX2JpbmRBbmRTZXRQcm9wZXJ0eShub2RlLCBkYXRhLmtleXMsIGRhdGEuZXZhbHVhdGVkKTtcbiAgICAgICAgZXhpc3RpbmdCaW5kaW5nc1toYXNoXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGV4aXN0aW5nQmluZGluZ3MgPSBudWxsO1xuICAgICAgZXZhbHVhdGlvbiA9IG51bGw7XG5cbiAgICAgIGlmIChub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpIHtcbiAgICAgICAgZXhwcmVzc2lvbiA9IG07XG4gICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gZXZhbHVhdGU7XG4gICAgICAgIHJldHVybiB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUoZXZhbHVhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGV2YWx1YXRlID09ICdvYmplY3QnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGV2YWx1YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlKSB7XG4gICAgICAgICAgcmV0dXJuIGV2YWx1YXRlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBldmFsdWF0ZTtcbiAgICB9KTtcblxuICAgIGlmIChub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpIHtcbiAgICAgIGxldCB2YWx1ZSA9IHJlcztcbiAgICAgIGxldCBpc0Jvb2xlYW5BdHRyaWJ1dGUgPSBmYWxzZTtcblxuICAgICAgaWYgKGNvdW50ZXIgPT0gMSAmJiBleHByZXNzaW9uICYmIG5vZGUuX19leHByZXNzaW9uID09IGV4cHJlc3Npb24pIHtcbiAgICAgICAgdmFsdWUgPSBhdHRyaWJ1dGVWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IGNsZWFyQXR0cmlidXRlID0gbm9kZS5ub2RlTmFtZS5yZXBsYWNlKC9eYm9vbGVhbi0oLispL2ksICckMScpO1xuICAgICAgbGV0IGNhbWVsQXR0cmlidXRlID0gdXRpbHMudG9DYW1lbENhc2UoY2xlYXJBdHRyaWJ1dGUpO1xuXG4gICAgICBpZiAoY2xlYXJBdHRyaWJ1dGUgIT0gbm9kZS5ub2RlTmFtZSkge1xuICAgICAgICBpc0Jvb2xlYW5BdHRyaWJ1dGUgPSB0cnVlO1xuICAgICAgICB2YWx1ZSA9ICEhdmFsdWU7XG4gICAgICB9ICAgICAgICAgIFxuXG4gICAgICBpZiAobm9kZS5fX2F0dHJpYnV0ZU9uKSB7ICAgICAgICBcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IG5vZGUuX19hdHRyaWJ1dGVPbjtcbiAgICAgICAgIWNvbXBvbmVudC5fX3NhdmVBdHRyaWJ1dGVQcm94eUluICYmICh2YWx1ZSA9IHV0aWxzLmNvcHkodmFsdWUpKTtcbiAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IHRydWU7XG4gICAgICAgIGNvbXBvbmVudC5hdHRyc1tjYW1lbEF0dHJpYnV0ZV0gPSB2YWx1ZTtcbiAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChjb21wb25lbnQuX19pc01vdW50ZWQpIHtcbiAgICAgICAgICBjb21wb25lbnQuX19hdHRyVHJpZ2dlckJ5TmFtZShjYW1lbEF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpc0Jvb2xlYW5BdHRyaWJ1dGUpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBub2RlLl9fZWxlbWVudDtcbiAgICAgICAgdmFsdWU/IGVsZW1lbnQuc2V0QXR0cmlidXRlKGNhbWVsQXR0cmlidXRlLCAndHJ1ZScpOiBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShjYW1lbEF0dHJpYnV0ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIHRoZSBub2RlIGFuZCBzZXQgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtib29sZWFufSBbZXZhbHVhdGVkXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2JpbmRBbmRTZXRQcm9wZXJ0eShub2RlLCBrZXlzLCBldmFsdWF0ZWQpIHtcbiAgICBsZXQgYmluZCA9IHRoaXMuX19nZXRCb3VuZE5vZGUoa2V5cywgbm9kZSk7XG4gICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKTtcblxuICAgIGlmICghYmluZCkge1xuICAgICAgdGhpcy5fX2JpbmQoa2V5cywgeyBub2RlIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX19zZXROb2RlUHJvcGVydHkobm9kZSwga2V5cywgdmFsdWUsIGV2YWx1YXRlZCk7XG4gIH1cblxuICAvKipcbiAgICogTmVzdGVkIGV2YWx1YXRpb24gYnkga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3dpdGhvdXRQYXJlbnRzPWZhbHNlXSAtIGlmIHRydWUgZXZhbHVhdGlvbiB3aWxsIGJlIG9ubHkgZm9yIHRoZSBjdXJyZW50IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZU5lc3RlZChrZXlzLCB3aXRob3V0UGFyZW50cyA9IGZhbHNlKSB7XG4gICAgbGV0IHNjb3BlID0gdGhpcy5fX3Njb3BlO1xuICAgIGxldCBwcm9wcyA9IFtdOyAgICBcblxuICAgIGlmICghd2l0aG91dFBhcmVudHMpIHtcbiAgICAgIGxldCBsYXN0UHJvcHMgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgbGV0IHZhbHVlO1xuXG4gICAgICAgIGxhc3RQcm9wcyA9IFsuLi5sYXN0UHJvcHMsIGtleV07XG4gICAgICAgIHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMobGFzdFByb3BzLCBzY29wZSk7XG4gICAgICAgIHByb3BzLnB1c2goeyBrZXlzOiBsYXN0UHJvcHMsIHZhbHVlOiB2YWx1ZX0pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHByb3BzLnB1c2goeyBrZXlzOiBrZXlzLCB2YWx1ZTogdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgc2NvcGUpfSk7XG4gICAgfVxuXG4gICAgbGV0IHByb3BzTGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gICAgY29uc3QgZWxFdmFsdWF0ZSA9IChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBjb21wb25lbnQgPSBlbGVtZW50Ll9fYWtpbGk7ICAgICBcblxuICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCBwcm9wc0xlbmd0aDsgbSsrKSB7XG4gICAgICAgIGxldCBwcm9wID0gcHJvcHNbbV07XG4gICAgICAgIGxldCBkYXRhID0gY29tcG9uZW50Ll9fZ2V0QmluZChwcm9wLmtleXMpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhLl9fZGF0YSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgayA9IDAsIGMgPSBkYXRhLl9fZGF0YS5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgICAgICBsZXQgYmluZCA9IGRhdGEuX19kYXRhW2tdOyBcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAoY29tcG9uZW50Ll9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2UoYmluZC5ub2RlLCBwcm9wLmtleXMsIHByb3AudmFsdWUpKSB7ICAgICBcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVLZXlzKHByb3Aua2V5cyk7XG4gICAgICAgICAgICBsZXQgY2hlY2tQcm9wID0gY29tcG9uZW50Ll9fZ2V0Tm9kZVByb3BlcnR5KGJpbmQubm9kZSwgcHJvcC5rZXlzKTsgICAgICAgICAgICBcbiAgICAgICAgICAgIGNoZWNrUHJvcCAmJiBjaGVja1Byb3AuZXZhbHVhdGVkICYmIGNvbXBvbmVudC5zY29wZS5fX3NldChwcm9wLmtleXMsIHByb3AudmFsdWUsIGZhbHNlLCB0cnVlKTsgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgY29tcG9uZW50Ll9fZXZhbHVhdGVOb2RlKGJpbmQubm9kZSwgZmFsc2UpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBfayBpbiBiaW5kLm5vZGUuX19wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgIGlmICghYmluZC5ub2RlLl9fcHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShfaykpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgbGV0IF9wcm9wID0gYmluZC5ub2RlLl9fcHJvcGVydGllc1tfa107XG4gICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKF9wcm9wLmtleXMsIF9wcm9wLmNvbXBvbmVudC5fX3Njb3BlKTtcbiAgICAgICAgICAgICAgX3Byb3AuY29tcG9uZW50Ll9fc2V0Tm9kZVByb3BlcnR5KGJpbmQubm9kZSwgX3Byb3Aua2V5cywgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb21wb25lbnQuX19lbmFibGVLZXlzKHByb3Aua2V5cyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGV2YWx1YXRlID0gKGVsZW1lbnRzKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gZWxFdmFsdWF0ZShlbGVtZW50c1tpXSk7XG4gICAgICAgIGV2YWx1YXRlKGNvbXBvbmVudC5fX2NoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZWxFdmFsdWF0ZSh0aGlzLmVsKTtcbiAgICBldmFsdWF0ZSh0aGlzLl9fY2hpbGRyZW4pO1xuICB9ICBcblxuICAvKipcbiAgICogRXZhbHVhdGUgdmFsdWUgYnkga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbaXNEZWxldGVkPWZhbHNlXSAtIHRydWUgaWYgdmFsdWUgaXMgZGVsZXRpbmdcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZUJ5S2V5cyAoa2V5cywgdmFsdWUsIGlzRGVsZXRlZCA9IGZhbHNlKSB7ICAgICBcbiAgICBsZXQgZGF0YSA9IHRoaXMuX19nZXRCaW5kKGtleXMpO1xuXG4gICAgY29uc3QgdW5iaW5kID0gKG9iaiwgcGFyZW50cykgPT4ge1xuICAgICAgZm9yIChsZXQgayBpbiBvYmopIHtcbiAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoaykgfHwgdGhpcy5fX2lzU3lzdGVtQmluZGluZ0tleShrKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IF9rZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrXSk7XG4gICAgICAgIGxldCBfX2tleXMgPSBfa2V5cy5zbGljZSgpO1xuICAgICAgICBsZXQgX2lzRGVsZXRlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgdmFsID0gb2JqW2tdO1xuICAgICAgICBsZXQgaGFzS2V5O1xuICAgICAgICBcbiAgICAgICAgX19rZXlzLnNoaWZ0KCk7XG4gICAgICAgIGhhc0tleSA9IHV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKF9fa2V5cywgdmFsdWUpO1xuXG4gICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgJiYgIWhhc0tleSkge1xuICAgICAgICAgIF9pc0RlbGV0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdW5iaW5kKHZhbCwgX2tleXMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fZXZhbHVhdGVOZXN0ZWQoX2tleXMsIHRydWUpO1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgIT0gJ29iamVjdCcgfHwgIWhhc0tleSkge1xuICAgICAgICAgIHRoaXMuX191bmJpbmQoX2tleXMpO1xuICAgICAgICAgIF9pc0RlbGV0ZWQgJiYgdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoX19rZXlzLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIGRhdGEgJiYgdW5iaW5kKGRhdGEsIFtdLmNvbmNhdChrZXlzKSk7XG4gICAgdGhpcy5fX2V2YWx1YXRlTmVzdGVkKGtleXMpO1xuXG4gICAgaWYgKGlzRGVsZXRlZCkge1xuICAgICAgdGhpcy5fX3VuYmluZChrZXlzKTtcbiAgICAgIGlzRGVsZXRlZCAmJiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSBldmVudCBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZUV2ZW50KG5vZGUsIGVsLCBlKSB7XG4gICAgbGV0IGV4cHJlc3Npb24gPSBldmFsdWF0aW9uUmVnZXguZXhlYyhub2RlLl9fZXhwcmVzc2lvbik7XG4gICAgbGV0IGV2YWx1YXRlO1xuXG4gICAgaWYgKCFleHByZXNzaW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fX2V2YWx1YXRpbmdFdmVudCA9IHtcbiAgICAgIGVsOiBlbCxcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIGV2ZW50OiBlLFxuICAgICAgbm9kZTogbm9kZVxuICAgIH07XG5cbiAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0ge307XG4gICAgZXZhbHVhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLnBhcnNlKHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50LnNjb3BlLCBleHByZXNzaW9uWzFdLCB7IGV2ZW50OiBlIH0pO1xuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSBudWxsO1xuICAgIHJldHVybiBldmFsdWF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBjaGFuZ2VzIGFuZCBldmFsdWF0ZSB0aGUgcGFzc2VkIG5vZGVcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2NoZWNrXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlTm9kZShub2RlLCBjaGVjayA9IHRydWUpIHtcbiAgICBsZXQga2V5ID0gbm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyPyAndmFsdWUnOiAnbm9kZVZhbHVlJztcblxuICAgIGlmIChjaGVjaz8gdGhpcy5fX2NoZWNrRXZhbHVhdGlvbihub2RlKTogdHJ1ZSkgeyAgICAgIFxuICAgICAgbGV0IHJlcyA9IHRoaXMuX19ldmFsdWF0ZShub2RlKTsgICAgIFxuICAgICAgbm9kZVtrZXldICE9IHJlcyAmJiAobm9kZVtrZXldID0gcmVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZVtrZXldO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dHJpYnV0ZSBub2RlIGluaXRpYWxpemluZ1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gYXR0cmlidXRlT2YgLSBpZiBub2RlIGlzIGxpbmtlZCB3aXRoIHBhcmVudCBzY29wZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemVBdHRyaWJ1dGUobm9kZSwgZWwsIGF0dHJpYnV0ZU9mKSB7XG4gICAgaWYgKCFub2RlIHx8IHN5c3RlbUF0dHJpYnV0ZXMuaW5kZXhPZihub2RlLm5vZGVOYW1lKSAhPSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX19pbml0aWFsaXplTm9kZShub2RlLCBlbCk7XG4gICAgbGV0IGV2ZW50TmFtZSA9IG5vZGUubm9kZU5hbWUucmVwbGFjZSgvXm9uLSguKykvaSwgJyQxJyk7XG4gICAgbGV0IG5vZGVOYW1lID0gdXRpbHMudG9DYW1lbENhc2Uobm9kZS5ub2RlTmFtZSk7XG4gICAgbGV0IGNvbXBvbmVudCA9IGF0dHJpYnV0ZU9mPyBhdHRyaWJ1dGVPZjogdGhpcztcblxuICAgIGlmIChldmVudE5hbWUgIT0gbm9kZS5ub2RlTmFtZSkge1xuICAgICAgaWYgKG5vZGUuX19ldmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBlbWl0dGVyID0gbmV3IEFraWxpLkV2ZW50RW1pdHRlcihldmVudE5hbWUsIGVsLCBjb21wb25lbnQpO1xuXG4gICAgICBpZiAobm9kZS5fX2V4cHJlc3Npb24pIHtcbiAgICAgICAgZW1pdHRlci5iaW5kKChlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5fX2V2YWx1YXRlRXZlbnQobm9kZSwgZWwsIGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgbm9kZS5fX2V2ZW50ID0gZW1pdHRlcjtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShub2RlLm5vZGVOYW1lLCB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUoZW1pdHRlcikpO1xuXG4gICAgICBpZiAoYXR0cmlidXRlT2YpIHtcbiAgICAgICAgdGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLmF0dHJzW25vZGVOYW1lXSA9IGVtaXR0ZXI7XG4gICAgICAgIHRoaXMuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoYXR0cmlidXRlT2YpIHtcbiAgICAgIG5vZGUuX19hdHRyaWJ1dGVPbiA9IHRoaXM7XG4gICAgICBub2RlLl9fYXR0cmlidXRlT2YgPSBjb21wb25lbnQ7XG4gICAgfVxuXG4gICAgbGV0IGNoZWNrID0gdGhpcy5fX2NvbXBpbGluZz8gdGhpcy5fX2NvbXBpbGluZy5jaGVja0NoYW5nZXM6IGZhbHNlO1xuICAgIGVsLnNldEF0dHJpYnV0ZShub2RlLm5vZGVOYW1lLCBjb21wb25lbnQuX19ldmFsdWF0ZU5vZGUobm9kZSwgY2hlY2spKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBub2RlXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2NoZWNrQmluZGluZ11cbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZU5vZGUobm9kZSwgZWwsIGNoZWNrQmluZGluZyA9IGZhbHNlKSB7XG4gICAgaWYgKG5vZGUuX19pbml0aWFsaXplZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgbGV0IHZhbCA9IG5vZGVbKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cik/ICd2YWx1ZSc6ICdub2RlVmFsdWUnXS50cmltKCk7XG4gICAgbGV0IGhhc0JpbmRpbmcgPSBjaGVja0JpbmRpbmc/IGV2YWx1YXRpb25SZWdleC50ZXN0KHZhbCk6IGZhbHNlO1xuICAgIFxuICAgIGlmKGNoZWNrQmluZGluZyAmJiAhaGFzQmluZGluZykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5vZGUuX19leHByZXNzaW9uID0gdmFsO1xuICAgIG5vZGUuX19wcm9wZXJ0aWVzID0ge307XG4gICAgbm9kZS5fX2F0dHJpYnV0ZU9mID0gbnVsbDtcbiAgICBub2RlLl9fYXR0cmlidXRlT24gPSBudWxsO1xuICAgIG5vZGUuX19ldmVudCA9IG51bGw7XG4gICAgbm9kZS5fX2hhc0JpbmRpbmdzID0gaGFzQmluZGluZztcbiAgICBub2RlLl9faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIG5vZGUuX19jb21wb25lbnQgPSB0aGlzO1xuICAgIG5vZGUuX19lbGVtZW50ID0gZWw7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRGVpbml0aWFsaXplIHRoZSBub2RlXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RlaW5pdGlhbGl6ZU5vZGUobm9kZSkge1xuICAgIGlmIChub2RlLl9fZXZlbnQpIHtcbiAgICAgIG5vZGUuX19ldmVudC51bmJpbmQoKTtcbiAgICAgIG5vZGUuX19ldmVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUuX19oYXNCaW5kaW5ncykge1xuICAgICAgdGhpcy5fX3BhcmVudCAmJiB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19ldmFsdWF0aW9uQ29tcG9uZW50Ll9fdW5iaW5kQnlOb2Rlcyhbbm9kZV0pOyAgICAgICAgICBcbiAgICB9XG5cbiAgICBkZWxldGUgbm9kZS5fX2V4cHJlc3Npb247XG4gICAgZGVsZXRlIG5vZGUuX19wcm9wZXJ0aWVzO1xuICAgIGRlbGV0ZSBub2RlLl9fYXR0cmlidXRlT2Y7XG4gICAgZGVsZXRlIG5vZGUuX19hdHRyaWJ1dGVPbjtcbiAgICBkZWxldGUgbm9kZS5fX2V2ZW50O1xuICAgIGRlbGV0ZSBub2RlLl9faGFzQmluZGluZ3M7XG4gICAgZGVsZXRlIG5vZGUuX19pbml0aWFsaXplZDtcbiAgICBkZWxldGUgbm9kZS5fX2NvbXBvbmVudDtcbiAgICBkZWxldGUgbm9kZS5fX2VsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJwb2xhdGUgYXR0cmlidXRlcyBvZiB0aGUgZWxlbWVudFxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBbYXR0cmlidXRlT2Y9bnVsbF0gLSBpZiBub2RlIGlzIGxpbmtlZCB3aXRoIHBhcmVudCBzY29wZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2ludGVycG9sYXRlQXR0cmlidXRlcyhlbCwgYXR0cmlidXRlT2YgPSBudWxsKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGF0dHJzID0gZWwuYXR0cmlidXRlcywgbCA9IGF0dHJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdGhpcy5fX2luaXRpYWxpemVBdHRyaWJ1dGUoYXR0cnNbaV0sIGVsLCBhdHRyaWJ1dGVPZik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZSBhdHRyaWJ1dGVzIGFzIHByb3h5XG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVmaW5lQXR0cmlidXRlcygpIHtcbiAgICBjb25zdCBjaGFuZ2VBdHRyaWJ1dGUgPSAoa2V5LCB2YWx1ZSwgaXNEZWxldGVkID0gZmFsc2UpID0+IHtcbiAgICAgIGlmICh0aGlzLl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBub2RlID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGVOb2RlKGtleSk7XG5cbiAgICAgIGlmIChpc0RlbGV0ZWQpIHtcbiAgICAgICAgbm9kZSAmJiB0aGlzLl9fZGVpbml0aWFsaXplTm9kZShub2RlKTtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICAgICAgcmV0dXJuIFxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIW5vZGUpIHtcbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgICAgIG5vZGUgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZU5vZGUoa2V5KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBub2RlLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX19kZWluaXRpYWxpemVOb2RlKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9faW5pdGlhbGl6ZUF0dHJpYnV0ZShub2RlLCB0aGlzLmVsLCB0aGlzLl9fYXR0cmlidXRlT2YpO1xuICAgIH07XG5cbiAgICB0aGlzLmF0dHJzID0gbmV3IFByb3h5KHRoaXMuX19hdHRycywge1xuICAgICAgZ2V0OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgaWYgKGtleSA9PSAnX19pc1Byb3h5Jykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgfSxcbiAgICAgIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgYXR0cktleSA9IHV0aWxzLnRvRGFzaENhc2Uoa2V5KTtcblxuICAgICAgICBpZiAodGhpcy5ib29sZWFuQXR0cmlidXRlcy5pbmRleE9mKGF0dHJLZXkpICE9IC0xKSB7XG4gICAgICAgICAgYXR0cktleSA9IGBib29sZWFuLSR7YXR0cktleX1gO1xuICAgICAgICAgIHZhbHVlPyB0aGlzLmVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTogdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgY2hhbmdlQXR0cmlidXRlKGF0dHJLZXksIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZSh2YWx1ZSkpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBkZWxldGVQcm9wZXJ0eTogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgYXR0cktleSA9IHV0aWxzLnRvRGFzaENhc2Uoa2V5KTtcbiAgICAgICAgY2hhbmdlQXR0cmlidXRlKGF0dHJLZXksIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZSh2YWx1ZSksIHRydWUpO1xuICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBwcm94eSB0byBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEByZXR1cm5zIHtQcm94eX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19vYnNlcnZlKG9iaiwgcGFyZW50cykge1xuICAgIHJldHVybiBuZXcgUHJveHkob2JqLCB7XG4gICAgICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4geyBcbiAgICAgICAgaWYgKGtleSA9PSBcIl9faXNQcm94eVwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IFwiX190YXJnZXRcIikge1xuICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IFwiX19jb21wb25lbnRcIikge1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PSBcIl9fa2V5c1wiKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudHM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLl9faXNTeXN0ZW1LZXkoa2V5KSkge1xuICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBa2lsaS5fX2V2YWx1YXRpb24pIHsgIFxuICAgICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrZXldKTtcbiAgICAgICAgICBsZXQgbm90QmluZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGxldCBldmFsdWF0ZWQgPSAhdXRpbHMuaGFzUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKTsgXG4gICAgICAgICAgbGV0IGNvbXBvbmVudCA9IHRoaXM7XG4gICAgICAgICAgbGV0IGV4Y0FyciA9IGtleXMuc2xpY2UoKTtcblxuICAgICAgICAgIGlmKHRhcmdldCBpbnN0YW5jZW9mIFNjb3BlKSB7XG4gICAgICAgICAgICBsZXQgcmVhbFRhcmdldCA9IHV0aWxzLmdldE93blByb3BlcnR5VGFyZ2V0KHRhcmdldCwga2V5KTtcbiAgICAgICAgICAgIHJlYWxUYXJnZXQgJiYgKHJlYWxUYXJnZXQgaW5zdGFuY2VvZiBTY29wZSkgJiYgKGNvbXBvbmVudCA9ICByZWFsVGFyZ2V0Ll9fY29tcG9uZW50KTtcbiAgICAgICAgICB9IFxuXG4gICAgICAgICAgaWYoQWtpbGkuX193cmFwcGluZyAmJiBrZXlzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBmb3JQYXJlbnRzID0gQWtpbGkuX19ldmFsdWF0aW9uLmNvbXBvbmVudC5wYXJlbnRzKGMgPT4gYyBpbnN0YW5jZW9mIEFraWxpLmNvbXBvbmVudHMuRm9yKTtcblxuICAgICAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBmb3JQYXJlbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgZm9yKGxldCBrID0gMCwgYyA9IGtleXMubGVuZ3RoOyBrIDwgYzsgaysrKSB7IFxuICAgICAgICAgICAgICBjb25zdCBmb3JEYXRhID0gZm9yUGFyZW50c1tpXS5kYXRhO1xuICAgICAgICAgICAgICBjb25zdCBkYXRhID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoZXhjQXJyLCBjb21wb25lbnQuX19zY29wZSk7XG5cbiAgICAgICAgICAgICAgaWYoZGF0YSAmJiB0eXBlb2YgZGF0YSA9PSAnb2JqZWN0JyAmJiBmb3JEYXRhID09PSBkYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgICBleGNBcnIucG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgaWYgKCEoa2V5IGluIHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH0gICAgICAgICAgXG4gICAgICAgICAgZWxzZSBpZiAoIXV0aWxzLmdldEVudW1lcmFibGVQcm9wZXJ0eVRhcmdldCh0YXJnZXQsIGtleSkpIHtcbiAgICAgICAgICAgIG5vdEJpbmRpbmcgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX19iaW5kTm9kZShBa2lsaS5fX2V2YWx1YXRpb24ubGlzdCwgY29tcG9uZW50LCBrZXlzLCBwYXJlbnRzLCB0YXJnZXRba2V5XSwgbm90QmluZGluZywgZXZhbHVhdGVkKTtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICB9LFxuICAgICAgc2V0OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7IFxuICAgICAgICBpZiAodGhpcy5fX2lzU3lzdGVtS2V5KGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhbHVlID0gQWtpbGkud3JhcEZ1bmN0aW9uKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrZXldKTtcblxuICAgICAgICBpZiAodGhpcy5fX2NoZWNrRGlzYWJsZW1lbnQoa2V5cykpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcblxuICAgICAgICBDSEVDS19FWElTVEVOQ0U6IGlmKHBhcmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxldCB0YXJnZXRQYXJlbnRWYWx1ZSA9IHBhcmVudHMubGVuZ3RoID4gMT8gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMocGFyZW50cy5zbGljZSgwLCAtMSksIHRoaXMuX19zY29wZSk6IHRoaXMuX19zY29wZTtcbiAgICAgICAgICBcbiAgICAgICAgICBmb3IobGV0IGsgaW4gdGFyZ2V0UGFyZW50VmFsdWUpIHtcbiAgICAgICAgICAgIGlmKCF0YXJnZXRQYXJlbnRWYWx1ZS5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodGFyZ2V0UGFyZW50VmFsdWVba10gJiYgdGFyZ2V0UGFyZW50VmFsdWVba10uX190YXJnZXQgPT09IHRhcmdldCkge1xuICAgICAgICAgICAgICBicmVhayBDSEVDS19FWElTVEVOQ0U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXSkge1xuICAgICAgICAgIHRoaXMuX19zdG9yZVRyaWdnZXJCeUtleXMoa2V5cywgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddKSB7XG4gICAgICAgICAgdGhpcy5fX2F0dHJUcmlnZ2VyQnlLZXlzKGtleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldFtrZXldID0gdGhpcy5fX25lc3RlZE9ic2VydmUodmFsdWUsIGtleXMpO1xuICAgICAgICBcbiAgICAgICAgaWYgKEFraWxpLl9faXNvbGF0aW9uKSB7IFxuICAgICAgICAgIHRoaXMuX19jcmVhdGVJc29sYXRpb25PYmplY3QocGFyZW50cywga2V5LCBmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLl9faXNNb3VudGVkKSB7ICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgIHRoaXMuX19ldmFsdWF0ZUJ5S2V5cyhrZXlzLCB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBkZWxldGVQcm9wZXJ0eTogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrZXldKTtcblxuICAgICAgICBpZiAodGhpcy5fX2NoZWNrRGlzYWJsZW1lbnQoa2V5cykpIHtcbiAgICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fX2lzU3lzdGVtS2V5KGtleSkpIHtcbiAgICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChBa2lsaS5fX2lzb2xhdGlvbikge1xuICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgICB0aGlzLl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0KHBhcmVudHMsIGtleSwgdHJ1ZSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgdGhpcy5fX2V2YWx1YXRlQnlLZXlzKGtleXMsIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBoYXNoIGZvciB0aGUga2V5c1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHJldHVybnMge3N0cmluZ30gICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlS2V5c0hhc2goa2V5cykge1xuICAgIHJldHVybiBgJHt0aGlzLl9fc2NvcGUuX19uYW1lfS4ke0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGUgdGhlIGtleXMgc2V0dGVyXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzICAgIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2Rpc2FibGVLZXlzKGtleXMpIHtcbiAgICB0aGlzLl9fZGlzYWJsZVByb3h5W2tleXM/IHRoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKTogJ19fYWxsJ10gPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSB0aGUga2V5cyBzZXR0ZXJcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZW5hYmxlS2V5cyhrZXlzKSB7XG4gICAgZGVsZXRlIHRoaXMuX19kaXNhYmxlUHJveHlba2V5cz8gdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpOiAnX19hbGwnXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUga2V5cyBzZXR0ZXIgZGlzYWJsZW1hbnRcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2hlY2tEaXNhYmxlbWVudChrZXlzKSB7XG4gICAgcmV0dXJuIHRoaXMuX19kaXNhYmxlUHJveHkuX19hbGw/IHRydWU6IHRoaXMuX19kaXNhYmxlUHJveHlbdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlIHRoZSB2YWx1ZSB0byB0aGUgc3RvcmUgYnkgdGhlIGtleXNcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc3RvcmVUcmlnZ2VyQnlLZXlzKGtleXMsIHZhbHVlKSB7XG4gICAgY29uc3QgbGlua3MgPSB0aGlzLl9fc3RvcmVMaW5rc1tBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyldO1xuICAgIFxuICAgIGlmKCFsaW5rcyB8fCAhbGlua3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFsdWUgPSB1dGlscy5jb3B5KHZhbHVlKTtcbiAgICB0aGlzLl9fZGlzYWJsZUtleXMoa2V5cyk7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gbGlua3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBsaW5rID0gbGlua3NbaV07XG4gICAgICBcbiAgICAgIHRoaXMuX19zdG9yZVRyaWdnZXJCeU5hbWUobGluay5uYW1lLCB2YWx1ZSk7XG4gICAgICBcbiAgICB9XG4gICAgXG4gICAgdGhpcy5fX2VuYWJsZUtleXMoa2V5cyk7XG4gIH1cblxuICAvKipcbiAgICogU2F2ZSB0aGUgdmFsdWUgdG8gdGhlIHN0b3JlIGJ5IHRoZSBuYW1lXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zdG9yZVRyaWdnZXJCeU5hbWUobmFtZSwgdmFsdWUpIHsgIFxuICAgIHN0b3JlLl9fdGFyZ2V0W25hbWVdID0gdmFsdWU7XG4gICAgY29uc3QgbGlua3MgPSBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV07XG5cbiAgICBpZighbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBmb3IobGV0IGkgPSAwLCBsID0gbGlua3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBsaW5rID0gbGlua3NbaV07XG4gICAgICBjb25zdCBjb21wb25lbnQgPSBsaW5rLmNvbXBvbmVudDtcblxuICAgICAgaWYoY29tcG9uZW50ID09PSB0aGlzKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZihsaW5rLmZuKSB7XG4gICAgICAgIEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBsaW5rLmZuLmNhbGwoY29tcG9uZW50LCB2YWx1ZSkpXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgXG4gICAgICBsZXQgY3VycmVudCA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGxpbmsua2V5cywgY29tcG9uZW50Ll9fc2NvcGUpO1xuICAgICAgIXV0aWxzLmNvbXBhcmUoY3VycmVudCwgdmFsdWUpICYmIGNvbXBvbmVudC5zY29wZS5fX3NldChsaW5rLmtleXMsIHZhbHVlKTsgICAgIFxuICAgIH0gICAgIFxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHN0b3JlIGxpbmsgd2l0aCB0aGUgc2NvcGUgcHJvcGVydHlcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3N0b3JlQnlLZXlzKG5hbWUsIGtleXMpIHtcbiAgICBpZigha2V5cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBTdG9yZSBsaW5rIFwiJHtuYW1lfVwiIG11c3QgaGF2ZSB0aGUgc2NvcGUgcHJvcGVydHkgbmFtZWApO1xuICAgIH1cblxuICAgIGlmKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cblxuICAgIHRoaXMuc2NvcGUuX19zZXQoa2V5cywgc3RvcmVbbmFtZV0pO1xuICAgIGxldCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG4gICAgbGV0IGluZm87XG5cbiAgICBpZighdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXSkge1xuICAgICAgdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXSA9IFtdO1xuICAgIH1cblxuICAgIGxldCBhcnIgPSB0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddO1xuICAgIFxuICAgIGZvcihsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGFycltpXTtcblxuICAgICAgaWYocmVzLmNvbXBvbmVudCA9PT0gdGhpcyAmJiByZXMubmFtZSA9PSBuYW1lICYmIHJlcy5rZXlTdHJpbmcgPT0ga2V5U3RyaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZighQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdKSB7XG4gICAgICBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBpbmZvID0geyBjb21wb25lbnQ6IHRoaXMsIG5hbWUsIGtleXMsIGtleVN0cmluZyB9O1xuICAgIHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ10ucHVzaChpbmZvKTtcbiAgICBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0ucHVzaChpbmZvKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBzdG9yZSBsaW5rIHdpdGggdGhlIGZ1bmN0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gICBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgX19zdG9yZUJ5RnVuY3Rpb24obmFtZSwgZm4sIG9wdGlvbnMgPSB7fSkgeyBcbiAgICBsZXQgY2FsbCA9IG9wdGlvbnMuY2FsbE9uU3RhcnQgPT09IHVuZGVmaW5lZD8gc3RvcmUuX190YXJnZXQuaGFzT3duUHJvcGVydHkobmFtZSk6IG9wdGlvbnMuY2FsbE9uU3RhcnQ7XG5cbiAgICBpZighQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdKSB7XG4gICAgICBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV07XG4gICAgXG4gICAgZm9yKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYocmVzLmNvbXBvbmVudCA9PT0gdGhpcyAmJiByZXMubmFtZSA9PSBuYW1lICYmIHJlcy5mbiA9PT0gZm4pIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdLnB1c2goeyBjb21wb25lbnQ6IHRoaXMsIG5hbWUsIGZuIH0pO1xuXG4gICAgaWYoY2FsbCkge1xuICAgICAgcmV0dXJuIEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBmbi5jYWxsKHRoaXMsIHN0b3JlW25hbWVdKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgc3RvcmUgbGluayB3aXRoIHRoZSBzY29wZSBwcm9wZXJ0eVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bnN0b3JlQnlLZXlzKG5hbWUsIGtleXMpIHtcbiAgICBpZigha2V5cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgaGF2ZSB0byBwYXNzIHRoZSBzY29wZSBwcm9wZXJ0eSBuYW1lIGZvciBzdG9yZSBsaW5rIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgaWYoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuXG4gICAgbGV0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcbiAgICBsZXQgYXJyID0gdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXTtcblxuICAgIGlmKCFhcnIubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGZvcihsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGFycltpXTtcbiAgICAgIGxldCBsaW5rcyA9IEFraWxpLl9fc3RvcmVMaW5rc1tyZXMubmFtZV07XG5cbiAgICAgIGlmKHJlcy5jb21wb25lbnQgIT09IHRoaXMgfHwgcmVzLm5hbWUgIT0gbmFtZSB8fCByZXMua2V5U3RyaW5nICE9IGtleVN0cmluZykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgYXJyLnNwbGljZShpLCAxKTtcblxuICAgICAgaWYoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGZvcihsZXQgayA9IGxpbmtzLmxlbmd0aCAtIDE7IGsgPj0gMDsgay0tKSB7XG4gICAgICAgIGxldCBsaW5rID0gbGlua3Nba107XG5cbiAgICAgICAgaWYobGluay5jb21wb25lbnQgPT09IHRoaXMgJiYgbGluay5rZXlTdHJpbmcgPT0ga2V5U3RyaW5nKSB7XG4gICAgICAgICAgbGlua3Muc3BsaWNlKGssIDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKCFsaW5rcy5sZW5ndGgpIHtcbiAgICAgICAgZGVsZXRlIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZighYXJyLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ107XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgc3RvcmUgbGluayB3aXRoIHRoZSBmdW5jdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3Vuc3RvcmVCeUZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYoIUFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBsaW5rcyA9IEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IobGV0IGkgPSBsaW5rcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGxpbmtzW2ldO1xuXG4gICAgICBpZihyZXMuY29tcG9uZW50ID09PSB0aGlzICYmIHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmZuID09PSBmbikge1xuICAgICAgICBsaW5rcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKCFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgYW4gYXR0cmlidXRlIGV2ZW50IGJ5IHRoZSBrZXlzXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKiBAcGFyYW0geyp9IHZhbHVlICAgIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2F0dHJUcmlnZ2VyQnlLZXlzKGtleXMsIHZhbHVlKSB7XG4gICAgaWYodGhpcy5fX2Rpc2FibGVBdHRyVHJpZ2dlcmluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBsaW5rcyA9IHRoaXMuX19hdHRyTGlua3NbQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpXTtcbiAgIFxuICAgIGlmKCFsaW5rcyB8fCAhbGlua3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBBa2lsaS5uZXh0VGljaygoKSA9PiB7XG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0gbGlua3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTtcblxuICAgICAgICBpZihsaW5rLmZuKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGV2ID0gJ29uJyArIHV0aWxzLmNhcGl0YWxpemUobGluay5uYW1lKTtcbiAgICAgICAgdGhpcy5hdHRyc1tldl0gJiYgdGhpcy5hdHRyc1tldl0udHJpZ2dlcih2YWx1ZSwgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgICAgfVxuICAgIH0pOyAgXG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciBhbiBhdHRyaWJ1dGUgZXZlbnQgYnkgdGhlIG5hbWVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2F0dHJUcmlnZ2VyQnlOYW1lKG5hbWUsIHZhbHVlKSB7XG4gICAgY29uc3QgbGlua3MgPSB0aGlzLl9fYXR0ckxpbmtzW25hbWVdO1xuXG4gICAgaWYoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9ICAgIFxuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGxpbmtzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY29uc3QgbGluayA9IGxpbmtzW2ldOyAgICBcbiAgICAgIHRoaXMuX19kaXNhYmxlQXR0clRyaWdnZXJpbmcgPSB0cnVlO1xuXG4gICAgICBpZihsaW5rLmZuKSB7XG4gICAgICAgIEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBsaW5rLmZuLmNhbGwodGhpcywgdmFsdWUpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsZXQgY3VycmVudCA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGxpbmsua2V5cywgdGhpcy5fX3Njb3BlKTtcbiAgICAgICAgIXV0aWxzLmNvbXBhcmUoY3VycmVudCwgdmFsdWUpICYmIHRoaXMuc2NvcGUuX19zZXQobGluay5rZXlzLCB2YWx1ZSk7XG4gICAgICB9IFxuXG4gICAgICB0aGlzLl9fZGlzYWJsZUF0dHJUcmlnZ2VyaW5nID0gZmFsc2U7IFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gYXR0cmlidXRlIGxpbmsgd2l0aCB0aGUgc2NvcGUgcHJvcGVydHlcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2F0dHJCeUtleXMobmFtZSwga2V5cykgeyAgICBcbiAgICBpZigha2V5cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBBdHRyaWJ1dGUgbGluayBcIiR7bmFtZX1cIiBtdXN0IGhhdmUgdGhlIHNjb3BlIHByb3BlcnR5IG5hbWVgKTtcbiAgICB9XG5cbiAgICBpZighQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG5cbiAgICBuYW1lID0gdXRpbHMudG9DYW1lbENhc2UobmFtZSk7XG4gICAgdGhpcy5fX2Rpc2FibGVBdHRyVHJpZ2dlcmluZyA9IHRydWU7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eShuYW1lKSAmJiB0aGlzLnNjb3BlLl9fc2V0KGtleXMsIHRoaXMuYXR0cnNbbmFtZV0pOyAgXG4gICAgdGhpcy5fX2Rpc2FibGVBdHRyVHJpZ2dlcmluZyA9IGZhbHNlOyAgXG4gICAgbGV0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcblxuICAgIGlmKCF0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ10pIHtcbiAgICAgIHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXSA9IFtdO1xuICAgIH1cblxuICAgIGxldCBhcnIgPSB0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ107XG4gICAgXG4gICAgZm9yKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuXG4gICAgICBpZihyZXMubmFtZSA9PSBuYW1lICYmIHJlcy5rZXlTdHJpbmcgPT0ga2V5U3RyaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ10ucHVzaCh7IG5hbWUsIGtleXMsIGtleVN0cmluZyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gYXR0cmlidXRlIGxpbmsgd2l0aCB0aGUgZnVuY3Rpb25cbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWQgXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgX19hdHRyQnlGdW5jdGlvbihuYW1lLCBmbiwgb3B0aW9ucyA9IHt9KSB7ICAgIFxuICAgIGxldCBjYWxsID0gb3B0aW9ucy5jYWxsT25TdGFydCA9PT0gdW5kZWZpbmVkPyB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KG5hbWUpOiBvcHRpb25zLmNhbGxPblN0YXJ0O1xuICAgIG5hbWUgPSB1dGlscy50b0NhbWVsQ2FzZShuYW1lKTtcblxuICAgIGlmKCF0aGlzLl9fYXR0ckxpbmtzW25hbWVdKSB7XG4gICAgICB0aGlzLl9fYXR0ckxpbmtzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IobGV0IGkgPSBsaW5rcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGxpbmtzW2ldO1xuXG4gICAgICBpZihyZXMubmFtZSA9PSBuYW1lICYmIHJlcy5mbiA9PT0gZm4pIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHRoaXMuX19hdHRyTGlua3NbbmFtZV0ucHVzaCh7IG5hbWUsIGZuIH0pO1xuICAgIFxuICAgIGlmKGNhbGwpIHtcbiAgICAgIHJldHVybiBBa2lsaS51bmlzb2xhdGUoKCkgPT4gZm4uY2FsbCh0aGlzLCB0aGlzLmF0dHJzW25hbWVdKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgYXR0cmlidXRlIGxpbmsgd2l0aCB0aGUgc2NvcGUgcHJvcGVydHlcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5hdHRyQnlLZXlzKG5hbWUsIGtleXMpIHtcbiAgICBpZigha2V5cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgaGF2ZSB0byBwYXNzIHRoZSBzY29wZSBwcm9wZXJ0eSBuYW1lIGZvciBhdHRyaWJ1dGUgbGluayBcIiR7bmFtZX1cImApO1xuICAgIH1cblxuICAgIGlmKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cblxuICAgIGxldCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG4gICAgbGV0IGFyciA9IHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXTtcblxuICAgIGlmKCFhcnIubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGZvcihsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGFycltpXTtcblxuICAgICAgaWYocmVzLm5hbWUgIT0gbmFtZSB8fCByZXMua2V5U3RyaW5nICE9IGtleVN0cmluZykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgYXJyLnNwbGljZShpLCAxKTtcbiAgICB9XG5cbiAgICBpZighYXJyLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXTtcbiAgICB9XG4gIH1cblxuICAgLyoqXG4gICAqIFJlbW92ZSB0aGUgYXR0cmlidXRlIGxpbmsgd2l0aCB0aGUgZnVuY3Rpb25cbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYXR0ckJ5RnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZighdGhpcy5fX2F0dHJMaW5rc1tuYW1lXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBsaW5rcyA9IHRoaXMuX19hdHRyTGlua3NbbmFtZV07XG4gICAgXG4gICAgZm9yKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYocmVzLm5hbWUgPT0gbmFtZSAmJiByZXMuZm4gPT09IGZuKSB7XG4gICAgICAgIGxpbmtzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoIWxpbmtzLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIHRoaXMuX19hdHRyTGlua3NbbmFtZV07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBrZXkgaXMgc3lzdGVtXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faXNTeXN0ZW1LZXkgKGtleSkge1xuICAgIGlmIChrZXkgPT0gJ19fJyB8fCAoa2V5WzBdID09ICdfJyAmJiBrZXlbMV0gPT0gJ18nKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKFsnY29uc3RydWN0b3InXS5pbmRleE9mKGtleSkgIT0gLTEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOZXN0ZWQgb2JzZXJ2aW5nIHRoZSB2YWx1ZVxuICAgKlxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IFtzdGFydEtleXNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fbmVzdGVkT2JzZXJ2ZSAodmFsdWUsIHN0YXJ0S2V5cykge1xuICAgIGNvbnN0IG9ic2VydmUgPSAodmFsdWUsIHBhcmVudHMpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXV0aWxzLmlzUGxhaW5PYmplY3QodmFsdWUpICYmICF1dGlscy5pc1Njb3BlUHJveHkodmFsdWUpICYmICEodmFsdWUgaW5zdGFuY2VvZiBTY29wZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgdGFyZ2V0ID0gdmFsdWU7XG5cbiAgICAgIENIRUNLX1BST1hZOiBpZiAodmFsdWUuX19pc1Byb3h5KSB7XG4gICAgICAgIHRhcmdldCA9IHZhbHVlLl9fdGFyZ2V0O1xuXG4gICAgICAgIGlmICh0aGlzLl9fZGlzYWJsZVByb3h5UmVkZWZpbmluZykge1xuICAgICAgICAgIGJyZWFrIENIRUNLX1BST1hZO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoXG4gICAgICAgICAgdmFsdWUuX19jb21wb25lbnQgIT09IHRoaXMgfHxcbiAgICAgICAgICBBa2lsaS5qb2luQmluZGluZ0tleXMocGFyZW50cykgIT0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKHZhbHVlLl9fa2V5cylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGFyZ2V0ID0gdXRpbHMuY29weSh0YXJnZXQsIHsgbmVzdGVkOiBmYWxzZSB9KTtcbiAgICAgICAgICB2YWx1ZSA9IHRhcmdldDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIXRoaXMuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nICYmICEodmFsdWUgaW5zdGFuY2VvZiBTY29wZSkpIHtcbiAgICAgICAgdGFyZ2V0ID0gdXRpbHMuY29weSh0YXJnZXQsIHsgbmVzdGVkOiBmYWxzZSB9ICk7ICAgICAgICAgIFxuICAgICAgICB2YWx1ZSA9IHRhcmdldDtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgayBpbiB0YXJnZXQpIHsgICAgICAgIFxuICAgICAgICBpZiAoIXRhcmdldC5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHZhbCA9IHRhcmdldFtrXTsgICAgICAgIFxuICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba10pOyAgIFxuICAgICAgICB0YXJnZXRba10gPSBvYnNlcnZlKHZhbCwga2V5cyk7ICBcbiAgICAgIH1cblxuICAgICAgaWYgKCF2YWx1ZS5fX2lzUHJveHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19vYnNlcnZlKHZhbHVlLCBwYXJlbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG5cbiAgICBsZXQgcmVzID0gb2JzZXJ2ZSh2YWx1ZSwgc3RhcnRLZXlzIHx8IFtdKTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBpc29sYXRpb24gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHBhcmVudHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlbGV0ZWQ9ZmFsc2VdXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZUlzb2xhdGlvbk9iamVjdCAocGFyZW50cywga2V5LCBpc0RlbGV0ZWQgPSBmYWxzZSkge1xuICAgIGxldCBrZXlzID0gcGFyZW50cy5sZW5ndGg/IFtwYXJlbnRzWzBdXTogW2tleV07XG4gICAgbGV0IGlzb2xhdGlvbktleSA9IHRoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKTtcblxuICAgIGlmIChwYXJlbnRzLmxlbmd0aCkge1xuICAgICAgaXNEZWxldGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25LZXldKSB7XG4gICAgICBBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25LZXldID0ge1xuICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICAgIGtleXM6IGtleXNcbiAgICAgIH07XG4gICAgfVxuXG4gICAgKGlzRGVsZXRlZCAhPT0gdW5kZWZpbmVkKSAmJiAoQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uS2V5XS5pc0RlbGV0ZWQgPSBpc0RlbGV0ZWQpO1xuICAgIHJldHVybiBBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25LZXldO1xuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgdGhlIG5vZGUgdG8gYmluZGluZ1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gYmluZCAtIGJ5IGRlZmF1bHQgaXMgY29tcG9uZW50Ll9fZXZhbHVhdGlvbi5saXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW25vdEJpbmRpbmc9ZmFsc2VdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2V2YWx1YXRlZD1mYWxzZV1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19iaW5kTm9kZShiaW5kLCByZWFsQ29tcG9uZW50LCBrZXlzLCBwYXJlbnRzLCB2YWx1ZSwgbm90QmluZGluZyA9IGZhbHNlLCBldmFsdWF0ZWQgPSBmYWxzZSkge1xuICAgIGxldCBwYXJlbnRLZXlzU3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKHBhcmVudHMpO1xuICAgIGxldCBjb21wb25lbnQgPSB0aGlzO1xuXG4gICAgaWYgKGJpbmQubGVuZ3RoICYmICFub3RCaW5kaW5nKSB7XG4gICAgICBsZXQgbCA9IGJpbmQubGVuZ3RoIC0gMTtcbiAgICAgIGxldCBkYXRhID0gYmluZFtsXTtcblxuICAgICAgaWYoZGF0YS5yZWFsQ29tcG9uZW50ID09PSB0aGlzICYmIGRhdGEua2V5c1N0cmluZyA9PSBwYXJlbnRLZXlzU3RyaW5nKSB7XG4gICAgICAgIGNvbXBvbmVudCA9IGRhdGEuY29tcG9uZW50O1xuICAgICAgfSAgICAgIFxuICAgICAgXG4gICAgICBpZiAoZGF0YS5rZXlzU3RyaW5nID09IHBhcmVudEtleXNTdHJpbmcgJiYgZGF0YS5jb21wb25lbnQgPT09IGNvbXBvbmVudCkge1xuICAgICAgICBiaW5kLnNwbGljZShsLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgYmluZC5wdXNoKHtcbiAgICAgIGNvbXBvbmVudCxcbiAgICAgIHJlYWxDb21wb25lbnQ6IHJlYWxDb21wb25lbnQsXG4gICAgICBrZXlzU3RyaW5nOiBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyksXG4gICAgICBwYXJlbnRzLFxuICAgICAga2V5cyxcbiAgICAgIHZhbHVlLFxuICAgICAgZXZhbHVhdGVkLFxuICAgICAgbm90QmluZGluZ1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBrZXkgaXMgc3lzdGVtIGJpbmRpbmcgdGhpbmdcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi8gXG4gIF9faXNTeXN0ZW1CaW5kaW5nS2V5KGtleSkge1xuICAgIHJldHVybiBrZXkgPT0gJ19fZGF0YSc7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGJpbmRpbmcgYnkga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRCaW5kKGtleXMpIHtcbiAgICByZXR1cm4gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzKSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBiaW5kaW5nIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldEJvdW5kTm9kZShrZXlzLCBub2RlKSB7XG4gICAgbGV0IGJpbmQgPSAgdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzKTtcblxuICAgIGlmICghYmluZCB8fCAhYmluZC5fX2RhdGEgfHwgIWJpbmQuX19kYXRhLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBiaW5kLl9fZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBkYXRhID0gYmluZC5fX2RhdGFbaV07XG5cbiAgICAgIGlmIChkYXRhLm5vZGUgPT09IG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBub2RlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbZXZhbHVhdGVkXVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXROb2RlUHJvcGVydHkobm9kZSwga2V5cywgdmFsdWUsIGV2YWx1YXRlZCA9IGZhbHNlKSB7XG4gICAgbGV0IHByb3AgPSB0aGlzLl9fZ2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMpOyAgICBcbiAgICBsZXQgY29weSA9IHV0aWxzLmNvcHkodmFsdWUpO1xuXG4gICAgaWYgKHByb3ApIHtcbiAgICAgIGxldCByZXMgPSB1dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSh2YWx1ZSwgcHJvcC52YWx1ZSwgcHJvcC5jb3B5KTtcbiAgICAgIHByb3AudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHByb3AuY29weSA9IGNvcHk7XG4gICAgICByZXR1cm4gIXJlcztcbiAgICB9XG4gICAgXG4gICAgbm9kZS5fX3Byb3BlcnRpZXNbdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpXSA9IHtcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIHZhbHVlLFxuICAgICAgY29weSwgICAgICBcbiAgICAgIGtleXMsXG4gICAgICBldmFsdWF0ZWQgICAgICBcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBub2RlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cykge1xuICAgIHJldHVybiBub2RlLl9fcHJvcGVydGllc1t0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyldIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIHRoZSBub2RlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVsZXRlTm9kZVByb3BlcnR5KG5vZGUsIGtleXMpIHtcbiAgICBsZXQgaGFzaCA9IGAke3RoaXMuX19zY29wZS5fX25hbWV9LiR7QWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpfWA7XG4gICAgZGVsZXRlIG5vZGUuX19wcm9wZXJ0aWVzW2hhc2hdO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgZGF0YSB3aXRoIHRoZSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19iaW5kKGtleXMsIGRhdGEpIHtcbiAgICB1dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MsIChsYXN0LCB2YWx1ZSkgPT4ge1xuICAgICAgbGV0IG9iaiA9IHsgX19kYXRhOiBbXSB9O1xuXG4gICAgICBpZiAoIWxhc3QpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlPyB2YWx1ZTogb2JqO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgICAgIG9iaiA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9iai5fX2RhdGEpIHtcbiAgICAgICAgb2JqLl9fZGF0YSA9IFtdO1xuICAgICAgfVxuXG4gICAgICBvYmouX19kYXRhLnB1c2goZGF0YSk7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCB0aGUga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5iaW5kKGtleXMpIHtcbiAgICBsZXQgYmluZCA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncyk7XG5cbiAgICBpZiAoIWJpbmQgfHwgIWJpbmQuX19kYXRhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBiaW5kLl9fZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBub2RlID0gYmluZC5fX2RhdGFbaV0ubm9kZTtcbiAgICAgIHRoaXMuX19kZWxldGVOb2RlUHJvcGVydHkobm9kZSwga2V5cyk7XG4gICAgfVxuXG4gICAgdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzLCAodmFsdWUpID0+IHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID4gMSkge1xuICAgICAgICB2YWx1ZS5fX2RhdGEgPSBbXTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgZGF0YSBieSBub2Rlc1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGVbXX0gbm9kZXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmJpbmRCeU5vZGVzKG5vZGVzKSB7XG4gICAgY29uc3QgdW5iaW5kID0gKG9iaikgPT4ge1xuICAgICAgZm9yIChsZXQgayBpbiBvYmopIHtcbiAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKGsgPT0gJ19fZGF0YScpIHtcbiAgICAgICAgICBsZXQgZGF0YSA9IG9ialtrXSB8fCBbXTtcbiAgICAgICAgICBsZXQgbCA9IGRhdGEubGVuZ3RoO1xuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBiaW5kID0gZGF0YVtpXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKG5vZGVzLmluZGV4T2YoYmluZC5ub2RlKSAhPSAtMSkgeyAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGRhdGEuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgIGwtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWwpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmpba107XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoIXRoaXMuX19pc1N5c3RlbUJpbmRpbmdLZXkoaykpIHtcbiAgICAgICAgICB1bmJpbmQob2JqW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgdW5iaW5kKHRoaXMuX19iaW5kaW5ncyk7XG4gICAgdGhpcy5fX2NsZWFyRW1wdHlCaW5kaW5ncygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCBlbXB0eSBiaW5kaW5nc1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gW29ial1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jbGVhckVtcHR5QmluZGluZ3Mob2JqKSB7XG4gICAgY29uc3QgY2xlYXIgPSAob2JqLCBwYXJlbnQsIGtleSkgPT4ge1xuICAgICAgZm9yIChsZXQgayBpbiBvYmopIHtcbiAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2YWwgPSBvYmpba107XG5cbiAgICAgICAgaWYgKGsgPT0gJ19fZGF0YScgJiYgKCF2YWwgfHwgIXZhbC5sZW5ndGgpKSB7XG4gICAgICAgICAgZGVsZXRlIG9ialtrXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghdGhpcy5fX2lzU3lzdGVtQmluZGluZ0tleShrKSkge1xuICAgICAgICAgIGlmICghT2JqZWN0LmtleXMob2JqW2tdKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmpba107XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xlYXIob2JqW2tdLCBvYmosIGspO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIU9iamVjdC5rZXlzKG9iaikubGVuZ3RoICYmIHBhcmVudCkge1xuICAgICAgICBkZWxldGUgcGFyZW50W2tleV07XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNsZWFyKG9iaiB8fCB0aGlzLl9fYmluZGluZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBsaW5rc1xuICAgKiBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jbGVhclN0b3JlTGlua3MoKSB7XG4gICAgY29uc3QgbGlua3MgPSBBa2lsaS5fX3N0b3JlTGlua3M7XG5cbiAgICBmb3IobGV0IGtleSBpbiBsaW5rcykge1xuICAgICAgY29uc3QgYXJyID0gbGlua3Nba2V5XTtcblxuICAgICAgZm9yKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBhcnJbaV07XG4gIFxuICAgICAgICBpZihsaW5rLmNvbXBvbmVudCA9PT0gdGhpcykge1xuICAgICAgICAgIGFyci5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoIWFyci5sZW5ndGgpIHtcbiAgICAgICAgZGVsZXRlIGxpbmtzW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgY2hpbGQgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlbW92ZUNoaWxkcmVuKCkge1xuICAgIGNvbnN0IHJlbW92ZSA9IChjaGlsZHJlbikgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcblxuICAgICAgICByZW1vdmUoY2hpbGQuX19ha2lsaS5fX2NoaWxkcmVuKTtcbiAgICAgICAgY2hpbGQuX19ha2lsaS5fX3JlbW92ZSgpO1xuICAgICAgICBpLS07XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJlbW92ZSh0aGlzLl9fY2hpbGRyZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgY29tcG9uZW50IHdpdGhvdXQgY2hpbGRyZW4gcmVtb3ZpbmdcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZW1vdmUoKSB7XG4gICAgdGhpcy5fX2RldGFjaCgpO1xuICAgIHRoaXMuX19jbGVhclN0b3JlTGlua3MoKTtcbiAgICB0aGlzLmF0dHJzLm9uUmVtb3ZlZCAmJiB0aGlzLmF0dHJzLm9uUmVtb3ZlZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICB0aGlzLnJlbW92ZWQoKTsgICAgXG4gICAgQWtpbGkucmVtb3ZlU2NvcGUodGhpcy5fX3Njb3BlLl9fbmFtZSk7XG4gICAgdGhpcy5lbC5yZW1vdmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRhY2ggdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RldGFjaCgpIHtcbiAgICBpZiAodGhpcy5fX2V2YWx1YXRlUGFyZW50ICYmICF0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMpIHtcbiAgICAgIHRoaXMuX19ldmFsdWF0ZVBhcmVudC5fX2FraWxpLl9fdW5iaW5kQnlOb2RlcyhbXS5zbGljZS5jYWxsKHRoaXMuZWwuYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9fcGFyZW50KSB7XG4gICAgICB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19zcGxpY2VDaGlsZCh0aGlzLmVsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBjb21wb25lbnQgd2l0aCBjaGlsZHJlblxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2Rlc3Ryb3koKSB7XG4gICAgdGhpcy5fX3JlbW92ZUNoaWxkcmVuKCk7XG4gICAgdGhpcy5fX3JlbW92ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBjb21wb25lbnQgaHRtbFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2VtcHR5KCkge1xuICAgIGxldCBub2RlcyA9IFtdO1xuICAgIHRoaXMuX19yZW1vdmVDaGlsZHJlbigpO1xuICAgIGNvbnN0IGZpbmQgPSAoY2hpbGRyZW4pID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PSAzKSB7XG4gICAgICAgICAgbm9kZXMucHVzaChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hpbGQubm9kZVR5cGUgPT0gMSAmJiAhY2hpbGQuX19ha2lsaSkge1xuICAgICAgICAgIGZvciAobGV0IGsgPSAwLCBhdHRycyA9IGNoaWxkLmF0dHJpYnV0ZXMsIGMgPSBhdHRycy5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgICAgICAgIG5vZGVzLnB1c2goYXR0cnNbaV0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZpbmQoY2hpbGQuY2hpbGROb2Rlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIGZpbmQodGhpcy5lbC5jaGlsZE5vZGVzKTtcbiAgICB0aGlzLl9fdW5iaW5kQnlOb2Rlcyhub2Rlcyk7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcGFyZW50IGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0UGFyZW50KHNlbGVjdG9yID0gJycsIGZpbmRBbGwgPSBmYWxzZSwgbGV2ZWxzID0gbnVsbCkge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBsZXQgbGV2ZWwgPSAwO1xuXG4gICAgaWYgKHR5cGVvZiBsZXZlbHMgIT0gJ29iamVjdCcpIHtcbiAgICAgIGxldmVscyA9IFtsZXZlbHNdO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbmQgPSAocGFyZW50KSA9PiB7XG4gICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghbGV2ZWxzIHx8IGxldmVscy5pbmRleE9mKGxldmVsKSAhPSAtMSkge1xuICAgICAgICBpZiAoIXNlbGVjdG9yIHx8IHBhcmVudC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgaWYgKCFmaW5kQWxsKSB7XG4gICAgICAgICAgICBhcnIucHVzaChwYXJlbnQuX19ha2lsaSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYXJyLnB1c2gocGFyZW50Ll9fYWtpbGkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldmVsKys7XG4gICAgICBmaW5kKHBhcmVudC5fX2FraWxpLl9fcGFyZW50KTtcbiAgICB9O1xuXG4gICAgZmluZCh0aGlzLl9fcGFyZW50KTtcbiAgICByZXR1cm4gZmluZEFsbD8gYXJyOiAoYXJyWzBdIHx8IG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjaGlsZCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZpbmRBbGw9dHJ1ZV0gLSBnZXQgYXJyYXkgaWYgdHJ1ZVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldENoaWxkcmVuKHNlbGVjdG9yID0gJycsIGZpbmRBbGwgPSB0cnVlLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGxldCBsZXZlbCA9IDA7XG5cbiAgICBpZiAodHlwZW9mIGxldmVscyAhPSAnb2JqZWN0Jykge1xuICAgICAgbGV2ZWxzID0gW2xldmVsc107XG4gICAgfVxuXG4gICAgY29uc3QgZmluZCA9IChjaGlsZHJlbikgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYgKCFsZXZlbHMgfHwgbGV2ZWxzLmluZGV4T2YobGV2ZWwpICE9IC0xKSB7XG4gICAgICAgICAgaWYgKCFzZWxlY3RvciB8fCBjaGlsZC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICBpZiAoIWZpbmRBbGwpIHtcbiAgICAgICAgICAgICAgYXJyLnB1c2goY2hpbGQuX19ha2lsaSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXJyLnB1c2goY2hpbGQuX19ha2lsaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldmVsKys7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGZpbmQoY2hpbGRyZW5baV0uX19ha2lsaS5fX2NoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmluZCh0aGlzLl9fY2hpbGRyZW4pO1xuICAgIHJldHVybiBmaW5kQWxsPyBhcnI6IChhcnJbMF0gfHwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG5lYXJlc3QgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kQWxsPXRydWVdIC0gZ2V0IGFycmF5IGlmIHRydWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbcmlnaHQ9ZmFsc2VdIC0gZnJvbSB0aGUgcmlnaHQgc2lkZSBpZiB0cnVlXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0TmVhcihzZWxlY3RvciA9ICcnLCBmaW5kQWxsID0gdHJ1ZSwgcmlnaHQgPSBmYWxzZSkge1xuICAgIGlmICghdGhpcy5fX3BhcmVudCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGxldmVsRWxlbWVudHMgPSB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19jaGlsZHJlbi5zbGljZSgpO1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICByaWdodCAmJiBsZXZlbEVsZW1lbnRzLnJldmVyc2UoKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGV2ZWxFbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBlbCA9IGxldmVsRWxlbWVudHNbaV07XG5cbiAgICAgIGlmIChlbCA9PT0gdGhpcy5lbCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKCFzZWxlY3RvciB8fCBlbC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGFyci5wdXNoKGVsLl9fYWtpbGkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFyci5yZXZlcnNlKCk7XG5cbiAgICBpZiAoIWZpbmRBbGwpIHtcbiAgICAgIHJldHVybiBhcnIubGVuZ3RoPyBhcnJbMF06IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBsaW5rIHRvIHRoZSBzdG9yZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfGZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBzdG9yZShuYW1lLCBoYW5kbGVyKSB7XG4gICAgaWYoIXRoaXMuX19pc01vdW50ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTWV0aG9kIFwic3RvcmVcIiBtdXN0IGJlIGNhbGxlZCBhZnRlciB0aGUgY29tcGlsYXRpb24uIEZvciBleGFtcGxlLCBpbiBcImNvbXBpbGVkXCIgbWV0aG9kLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJz8gdGhpcy5fX3N0b3JlQnlGdW5jdGlvbiguLi5hcmd1bWVudHMpOiB0aGlzLl9fc3RvcmVCeUtleXMoLi4uYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBsaW5rIHdpdGggdGhlIGF0dHJpYnV0ZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfGZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBhdHRyKG5hbWUsIGhhbmRsZXIpIHtcbiAgICBpZighdGhpcy5fX2lzTW91bnRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNZXRob2QgXCJhdHRyXCIgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgdGhlIGNvbXBpbGF0aW9uLiBGb3IgZXhhbXBsZSwgaW4gXCJjb21waWxlZFwiIG1ldGhvZC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbic/IHRoaXMuX19hdHRyQnlGdW5jdGlvbiguLi5hcmd1bWVudHMpOiB0aGlzLl9fYXR0ckJ5S2V5cyguLi5hcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgc3RvcmUgbGlua1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfGZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICB1bnN0b3JlKG5hbWUsIGhhbmRsZXIpIHtcbiAgICBpZighdGhpcy5fX2lzTW91bnRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNZXRob2QgXCJ1bnN0b3JlXCIgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgdGhlIGNvbXBpbGF0aW9uLiBGb3IgZXhhbXBsZSwgaW4gXCJjb21waWxlZFwiIG1ldGhvZC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbic/IHRoaXMuX191bnN0b3JlQnlGdW5jdGlvbiguLi5hcmd1bWVudHMpOiB0aGlzLl9fdW5zdG9yZUJ5S2V5cyguLi5hcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgYXR0cmlidXRlIGxpbmtcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXXxmdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgdW5hdHRyKG5hbWUsIGhhbmRsZXIpIHtcbiAgICBpZighdGhpcy5fX2lzTW91bnRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNZXRob2QgXCJ1bmF0dHJcIiBtdXN0IGJlIGNhbGxlZCBhZnRlciB0aGUgY29tcGlsYXRpb24uIEZvciBleGFtcGxlLCBpbiBcImNvbXBpbGVkXCIgbWV0aG9kLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJz8gdGhpcy5fX3VuYXR0ckJ5RnVuY3Rpb24oLi4uYXJndW1lbnRzKTogdGhpcy5fX3VuYXR0ckJ5S2V5cyguLi5hcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBjb21wb25lbnQgbWF0Y2hlcyBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gc2VsZWN0b3JcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBtYXRjaGVzKHNlbGVjdG9yKSB7XG4gICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3IodGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZWwubWF0Y2hlcyhzZWxlY3Rvcik7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNsb3Nlc3QgcGFyZW50IGNvbXBvbmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgcGFyZW50KHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldFBhcmVudChzZWxlY3RvciwgZmFsc2UsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFycmF5IG9mIHBhcmVudCBjb21wb25lbnRzIGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIHBhcmVudHMoc2VsZWN0b3IgPSAnJywgbGV2ZWxzID0gbnVsbCkge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0UGFyZW50KHNlbGVjdG9yLCB0cnVlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IGNoaWxkIGNvbXBvbmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgY2hpbGQoc2VsZWN0b3IgPSAnJywgbGV2ZWxzID0gbnVsbCkge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0Q2hpbGRyZW4oc2VsZWN0b3IsIGZhbHNlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBjaGlsZCBjb21wb25lbnRzIGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGNoaWxkcmVuKHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldENoaWxkcmVuKHNlbGVjdG9yLCB0cnVlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBjb21wb25lbnRzIGxlZnQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBiZWZvcmUoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgdHJ1ZSwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBjb21wb25lbnRzIHJpZ2h0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgYWZ0ZXIoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgdHJ1ZSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNsb3Nlc3QgY29tcG9uZW50IGxlZnQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgcHJldihzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCBmYWxzZSwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IGNvbXBvbmVudCByaWdodCBmcm9tIHRoZSBjdXJyZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR9XG4gICAqL1xuICBuZXh0KHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIGZhbHNlLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgZWxlbWVudCBwYXJlbnRcbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBwYXJlbnRcbiAgICovXG4gIGFwcGVuZFRvKHBhcmVudCkge1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogeyBzZXRQYXJlbnRzOiB0cnVlLCBjaGVja0NoYW5nZXM6IGZhbHNlIH0gfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FuY2VsIGNvbXBvbmVudCBjb21waWxhdGlvblxuICAgKi9cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXBhbGUgdGhlIGNvbXBvbmVudCwgYnV0IGNhbmNlbCB0aGUgY29tcGlsYXRpb24gaW5zaWRlIG9mIGl0XG4gICAqL1xuICBwcmV2ZW50KCkge1xuICAgIHRoaXMuX19wcmV2ZW50ID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBlbGVtZW50IGh0bWxcbiAgICpcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBlbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2VtcHR5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGVsZW1lbnRcbiAgICpcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICByZW1vdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19kZXN0cm95LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjcmVhdGVkKCkge31cbiAgY29tcGlsZWQoKSB7fVxuICByZWNvbXBpbGVkKCkge31cbiAgcmVzb2x2ZWQoKSB7fVxuICByZW1vdmVkKCkge31cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50LmpzIiwiaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogUmVxdWVzdCBjbGFzcy5cbiAqIEFuIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgYWxsb3dzIHlvdSB0byBtYWtlIHJlcXVlc3RzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JlcXVlc3RzfVxuICovXG5leHBvcnQgY2xhc3MgUmVxdWVzdCB7XG4gIF9fY2FjaGUgPSB7fTtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbZGVmYXVsdHNdIFxuICAgKi9cbiAgY29uc3RydWN0b3IoYmFzZVVybCwgZGVmYXVsdHMpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSBiYXNlVXJsPyAoYmFzZVVybC5yZXBsYWNlKC9cXC8kLywgJycpICsgJy8nKTogJyc7XG5cbiAgICB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgc3RhdHVzRXJyb3JzUGF0dGVybjogL14oW14yM10pfDQwNC8sXG4gICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAuLi4oZGVmYXVsdHMgfHwge30pXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIHJlcXVlc3Qgd2l0aCBhbnkgbWV0aG9kXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcXVlcnkob3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBvcHRpb25zID0gey4uLnRoaXMuZGVmYXVsdHMsIC4uLihvcHRpb25zIHx8IHt9KX07IFxuICAgICAgb3B0aW9ucy51cmwgPSB0aGlzLmJhc2VVcmw/IGAke3RoaXMuYmFzZVVybH0ke29wdGlvbnMudXJsLnJlcGxhY2UoL15cXC8vLCAnJyl9YDogb3B0aW9ucy51cmw7ICBcbiAgICAgIG9wdGlvbnMubWV0aG9kID0gb3B0aW9ucy5tZXRob2QgfHwgJ0dFVCc7XG4gICAgICBcbiAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsgICAgICBcbiAgICAgIGNvbnN0IGJlZm9yZSA9IHRoaXMudHJhbnNmb3JtQmVmb3JlKHhociwgb3B0aW9ucyk7XG4gICAgICB4aHIgPSBiZWZvcmUueGhyO1xuICAgICAgb3B0aW9ucyA9IGJlZm9yZS5vcHRpb25zO1xuICAgICAgKHR5cGVvZiBvcHRpb25zLm9uU3RhcnQgPT0gJ2Z1bmN0aW9uJykgJiYgb3B0aW9ucy5vblN0YXJ0KHhocik7ICBcbiAgICAgIG9wdGlvbnMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyB8fCB7fTtcbiAgICAgIFxuICAgICAgaWYgKG9wdGlvbnMuanNvbikge1xuICAgICAgICBvcHRpb25zLmpzb24gIT09IHRydWUgJiYgKG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuanNvbikpO1xuICAgICAgICBvcHRpb25zLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICBvcHRpb25zLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlIHx8ICdqc29uJztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG9wdGlvbnMuZm9ybSkge1xuICAgICAgICBvcHRpb25zLmJvZHkgPSB0aGlzLmNyZWF0ZUZvcm1EYXRhKG9wdGlvbnMuZm9ybSk7XG4gICAgICAgIG9wdGlvbnMuaGVhZGVyc1snY29udGVudC10eXBlJ10gPSAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnBhcmFtcykge1xuICAgICAgICBsZXQgc3RyID0gdGhpcy5wYXJhbXNUb1F1ZXJ5KG9wdGlvbnMucGFyYW1zKTtcbiAgICAgICAgc3RyICYmIChvcHRpb25zLnVybCArPSBcIj9cIiArIHN0cik7XG4gICAgICB9XG4gICAgICAgICAgIFxuICAgICAgbGV0IGhhc2ggPSBudWxsO1xuICAgICAgbGV0IGNhY2hlID0gdHlwZW9mIG9wdGlvbnMuY2FjaGUgPT0gJ2Z1bmN0aW9uJz8gb3B0aW9ucy5jYWNoZShvcHRpb25zKTogb3B0aW9ucy5jYWNoZTtcbiAgICAgICh3aW5kb3cuQUtJTElfU0VSVkVSICYmICFBa2lsaS5fX2luaXQpICYmIChjYWNoZSA9IHRydWUpO1xuXG4gICAgICBpZihvcHRpb25zLm1ldGhvZC50b1VwcGVyQ2FzZSgpID09ICdHRVQnICYmICghb3B0aW9ucy5ib2R5IHx8IHR5cGVvZiBvcHRpb25zLmJvZHkgPT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGhhc2ggPSB0aGlzLmNyZWF0ZUNhY2hlSGFzaCh7IFxuICAgICAgICAgIHVybDogb3B0aW9ucy51cmwsIFxuICAgICAgICAgIG1ldGhvZDogb3B0aW9ucy5tZXRob2QsXG4gICAgICAgICAgdXNlcjogb3B0aW9ucy51c2VyLCBcbiAgICAgICAgICBwYXNzd29yZDogb3B0aW9ucy5wYXNzd29yZCwgXG4gICAgICAgICAgYm9keTogb3B0aW9ucy5ib2R5IFxuICAgICAgICB9KTsgICAgICAgIFxuICAgICAgfVxuICAgICAgXG4gICAgICBpZihjYWNoZSAmJiBoYXNoKSB7ICAgICAgICBcbiAgICAgICAgbGV0IF9jYWNoZSA9IHRoaXMuZ2V0Q2FjaGUoaGFzaCk7XG4gICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgICAgICBpZihfY2FjaGUgJiYgKGNhY2hlID09PSB0cnVlIHx8IG5vdyAtIF9jYWNoZS5jcmVhdGVkQXQgPD0gY2FjaGUpKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUodGhpcy50cmFuc2Zvcm1BZnRlcihfY2FjaGUucmVzdWx0KSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgeGhyLm9wZW4ob3B0aW9ucy5tZXRob2QsIG9wdGlvbnMudXJsLCB0cnVlLCBvcHRpb25zLnVzZXIsIG9wdGlvbnMucGFzc3dvcmQpO1xuXG4gICAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgndGltZW91dCcpKSB7XG4gICAgICAgIHhoci50aW1lb3V0ID0gb3B0aW9ucy50aW1lb3V0O1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5yZXNwb25zZVR5cGUpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IG9wdGlvbnMud2l0aENyZWRlbnRpYWxzO1xuICAgICAgfVxuXG4gICAgICBsZXQgaGVhZGVyS2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnMuaGVhZGVycyk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gaGVhZGVyS2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGsgPSBoZWFkZXJLZXlzW2ldO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrLCBvcHRpb25zLmhlYWRlcnNba10pO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMub25Qcm9ncmVzcyA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHhoci5vbnByb2dyZXNzID0gKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBvcHRpb25zLm9uUHJvZ3Jlc3MoeGhyKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICAgIHJlc3BvbnNlOiB4aHIucmVzcG9uc2UsXG4gICAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxuICAgICAgICAgIHJlYWR5U3RhdGU6IHhoci5yZWFkeVN0YXRlLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxuICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogeGhyLndpdGhDcmVkZW50aWFscyxcbiAgICAgICAgICByZXNwb25zZVR5cGU6IHhoci5yZXNwb25zZVR5cGUsXG4gICAgICAgICAgcmVzcG9uc2VUZXh0OiB4aHIucmVzcG9uc2VUeXBlID09ICd0ZXh0Jz8geGhyLnJlc3BvbnNlVGV4dDogJycsXG4gICAgICAgICAgcmVzcG9uc2VYTUw6IHhoci5yZXNwb25zZVR5cGUgPT0gJ2RvY3VtZW50Jz8geGhyLnJlc3BvbnNlWE1MOiAnJyxcbiAgICAgICAgICByZXNwb25zZVVSTDogeGhyLnJlc3BvbnNlVVJMLFxuICAgICAgICAgIHRpbWVvdXQ6IHhoci50aW1lb3V0LFxuICAgICAgICAgIGhlYWRlcnM6IHRoaXMuZ2V0SGVhZGVycyh4aHIpLCAgICAgICAgIFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gdGhpcy50cmFuc2Zvcm1BZnRlcihyZXN1bHQpO1xuXG4gICAgICAgIGlmICgoeGhyLnN0YXR1cyArICcnKS5tYXRjaChvcHRpb25zLnN0YXR1c0Vycm9yc1BhdHRlcm4pKSB7XG4gICAgICAgICAgbGV0IGVyciA9IG5ldyBFcnJvcihgUmVxdWVzdCB0byBcIiR7b3B0aW9ucy51cmx9XCIgcmV0dXJucyBmYWlsdXJlIHN0YXR1cyBjb2RlICR7eGhyLnN0YXR1c31gKTtcbiAgICAgICAgICBlcnIucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgIH0gXG5cbiAgICAgICAgaGFzaCAmJiB0aGlzLmNyZWF0ZUNhY2hlKGhhc2gsIHJlc3VsdCk7ICAgICAgICBcbiAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub250aW1lb3V0ID0gKCkgPT4ge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKGBSZXF1ZXN0IHRvIFwiJHtvcHRpb25zLnVybH1cIiB0aW1lZCBvdXRgKSk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub25lcnJvciA9IChlcnIpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9O1xuXG4gICAgICB4aHIuc2VuZChvcHRpb25zLmJvZHkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBoZWFkZXJzIG9mIGEgWE1MSHR0cFJlcXVlc3QgaW5zdGFuY2VcbiAgICogXG4gICAqIEBwYXJhbSB7WE1MSHR0cFJlcXVlc3R9XG4gICAqL1xuICBnZXRIZWFkZXJzID0gZnVuY3Rpb24oeGhyKSB7XG4gICAgbGV0IGhlYWRlcnMgPSB7fTtcbiAgICBsZXQgc3RyID0geGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpOyAgXG4gICAgbGV0IGFyciA9IHN0ci5zcGxpdCgnXFx1MDAwZFxcdTAwMGEnKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGxpbmUgPSBhcnJbaV07XG4gICAgICBsZXQgaW5kZXggPSBsaW5lLmluZGV4T2YoJ1xcdTAwM2FcXHUwMDIwJyk7XG5cbiAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgbGV0IGtleSA9IGxpbmUuc3Vic3RyaW5nKDAsIGluZGV4KTtcbiAgICAgICAgbGV0IHZhbCA9IGxpbmUuc3Vic3RyaW5nKGluZGV4ICsgMik7XG4gICAgICAgIGhlYWRlcnNba2V5XSA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaGVhZGVycztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2FjaGVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICBnZXRDYWNoZShoYXNoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19jYWNoZVtoYXNoXSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBjYWNoZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhhc2hcbiAgICogQHBhcmFtIHtvYmplY3R9IHJlc3VsdFxuICAgKi9cbiAgY3JlYXRlQ2FjaGUoaGFzaCwgcmVzdWx0KSB7XG4gICAgdGhpcy5fX2NhY2hlW2hhc2hdID0geyByZXN1bHQsIGNyZWF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKCkgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgY2FjaGVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXG4gICAqL1xuICByZW1vdmVDYWNoZShoYXNoKSB7XG4gICAgZGVsZXRlIHRoaXMuX19jYWNoZVtoYXNoXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBoYXNoIHRvIHNhdmUgaW4gdGhlIGNhY2hlXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgY3JlYXRlQ2FjaGVIYXNoKGRhdGEpIHtcbiAgICBsZXQgaGFzaCA9IDA7XG4gICAgbGV0IHN0ciA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0ICBjaGFyID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIGNoYXI7XG4gICAgICAgIGhhc2ggPSBoYXNoICYgaGFzaDsgXG4gICAgfVxuXG4gICAgcmV0dXJuIGhhc2ggKyAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IG9iamVjdCB0byBxdWVyeSBzdHJpbmdcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgcGFyYW1zVG9RdWVyeShvYmopIHtcbiAgICBsZXQgc2VwID0gJyYnO1xuICAgIGxldCBlcSA9ICc9JztcblxuICAgIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubWFwKChrKSA9PiB7XG4gICAgICBsZXQga3MgPSBlbmNvZGVVUklDb21wb25lbnQoayk7XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9ialtrXSkpIHtcbiAgICAgICAga3MgPSBlbmNvZGVVUklDb21wb25lbnQoayk7XG5cbiAgICAgICAgcmV0dXJuIG9ialtrXS5tYXAoKHYsIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4ga3MgKyBgWyR7aX1dYCArIGVxICsgZW5jb2RlVVJJQ29tcG9uZW50KHYpO1xuICAgICAgICB9KS5qb2luKHNlcCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChvYmpba10gJiYgdHlwZW9mIG9ialtrXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbGV0IG9wdCA9IFtdO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKG9ialtrXSkubWFwKChrZXkpID0+IHtcbiAgICAgICAgICBvcHQucHVzaChrcyArIGBbJHtrZXl9XWAgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba11ba2V5XSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gb3B0LmpvaW4oc2VwKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4ga3MgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba10pO1xuICAgICAgfVxuICAgIH0pLmpvaW4oc2VwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHF1ZXJ5IHN0cmluZyB0byBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgcGFyYW1zRnJvbVF1ZXJ5KHN0cikge1xuICAgIGxldCBxdWVyeSA9IHt9O1xuICAgIGxldCBhbXBzID0gc3RyLnNwbGl0KCcmJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGFtcHMubGVuZ3RoOyBpIDxsOyBpKyspIHtcbiAgICAgIGxldCBlcXMgPSAgYW1wc1tpXS5zcGxpdCgnPScpO1xuICAgICAgbGV0IGtleSA9IGRlY29kZVVSSUNvbXBvbmVudChlcXNbMF0pO1xuICAgICAgbGV0IHZhbCA9IGRlY29kZVVSSUNvbXBvbmVudChlcXNbMV0pO1xuXG4gICAgICBpZiAoIWtleSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgICAgcXVlcnlba2V5XS5wdXNoKHZhbCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChxdWVyeVtrZXldKSB7XG4gICAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSwgdmFsXTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBxdWVyeVtrZXldID0gdmFsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbXVsdGlwYXJ0IGZvcm0gZGF0YSBmcm9tIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEBwYXJhbSB7Rm9ybURhdGF9IFtkYXRhXVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25hbWVzcGFjZV0gICAqXG4gICAqIEByZXR1cm5zIHtGb3JtRGF0YX1cbiAgICovXG4gIGNyZWF0ZUZvcm1EYXRhKG9iaiwgZGF0YSA9IG51bGwsIG5hbWVzcGFjZSA9ICcnKSB7XG4gICAgbGV0IGZkID0gZGF0YSB8fCBuZXcgRm9ybURhdGEoKTtcblxuICAgIGZvciAobGV0IGsgaW4gb2JqKSB7XG4gICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGspICYmIG9ialtrXSkge1xuICAgICAgICBsZXQga2V5ID0gbmFtZXNwYWNlPyBuYW1lc3BhY2UgKyAnWycgKyBrICsgJ10nOiBrO1xuXG4gICAgICAgIGlmIChvYmpba10gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgZmQuYXBwZW5kKGtleSwgb2JqW2tdLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3Qob2JqW2tdKSkge1xuICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybURhdGEob2JqW2tdLCBmZCwga2V5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBmZC5hcHBlbmQoa2V5LCBvYmpba10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZkO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBkYXRhIGJlZm9yZSBhIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtYTUxIdHRwUmVxdWVzdH0geGhyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICB0cmFuc2Zvcm1CZWZvcmUoeGhyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHsgeGhyLCBvcHRpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gZGF0YSBhZnRlciBhIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IHJlc3VsdFxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgdHJhbnNmb3JtQWZ0ZXIocmVzdWx0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnJlc3VsdCxcbiAgICAgIGRhdGE6IHJlc3VsdC5yZXNwb25zZSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIEdFVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBnZXQodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdHRVQnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgREVMRVRFIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGRlbGV0ZSh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ0RFTEVURSc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBQT1NUIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHBvc3QodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQT1NUJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIFBVVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBwdXQodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQVVQnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgUEFUQ0ggcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcGF0Y2godXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQQVRDSCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoKTtcblxuLyoqXG4gKiBTZXQgcm91dGVyJ3MgZGVmYXVsdCB2YXJpYWJsZXNcbiAqL1xucmVxdWVzdC5zZXREZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fX2luc3RhbmNlcyA9IHt9O1xuICB0aGlzLl9fY2FjaGUgPSB7fTtcbn1cblxuLyoqXG4gKiBBZGQgbmV3IHJlcXVlc3QgaW5zdGFuY2UgdG8gdGhlIG1haW4gc2VydmljZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1JlcXVlc3R9IGluc3RhbmNlXG4gKi9cbnJlcXVlc3QuYWRkSW5zdGFuY2UgPSBmdW5jdGlvbihuYW1lLCBpbnN0YW5jZSkge1xuICB0aGlzLl9faW5zdGFuY2VzW25hbWVdID0gaW5zdGFuY2U7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnJlcXVlc3QucmVtb3ZlSW5zdGFuY2UgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLl9faW5zdGFuY2VzW25hbWVdO1xufTtcblxuLyoqXG4gKiBEZWluaXQgcm91dGVyXG4gKi9cbnJlcXVlc3QuZGVpbml0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2V0RGVmYXVsdHMoKTtcbn07XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVlc3QsICd1c2UnLCB7XG4gIGdldDogKCkgPT4ge1xuICAgIHJldHVybiByZXF1ZXN0Ll9faW5zdGFuY2VzO1xuICB9XG59KTtcblxucmVxdWVzdC5SZXF1ZXN0ID0gUmVxdWVzdDtcbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3Q7XG5yZXF1ZXN0LnNldERlZmF1bHRzKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL3JlcXVlc3QuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5cbi8qKlxuICogQmFzZSBjb21wb25lbnQgdG8gd29yayB3aXRoIHRleHQgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2lucHV0fVxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfdGV4dGFyZWF9XG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jb250ZW50ZWRpdGFibGV9XG4gKiBcbiAqIEBhdHRyIHtzdHJpbmd9IHZhbHVlIC0gYWN0dWFsIHZhbHVlXG4gKiBAYXR0ciB7Ym9vbGVhbn0gZm9jdXMgLSBzZXQgdGhlIGZvY3VzIG9yIG5vdFxuICogQGF0dHIge251bWJlcn0gZGVib3VuY2UgLSBkZWJvdW5jZSBkZWxheVxuICogQG1lc3NhZ2Uge3ZvaWR9IGRlYm91bmNlIC0gc2VudCBvbiB0aGUgZGVib3VuY2Uge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW5wdXR9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnZhbHVlS2V5ID0gJ3ZhbHVlJztcbiAgICB0aGlzLmRlYm91bmNlSW50ZXJ2YWwgPSA1MDA7XG4gICAgdGhpcy5kZWJvdW5jZVRpbWVvdXQgPSBudWxsO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICBpZih0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnb24tZGVib3VuY2UnKSkge1xuICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHsgICAgICAgIFxuICAgICAgICB0aGlzLmRlYm91bmNlVGltZW91dCAmJiBjbGVhclRpbWVvdXQodGhpcy5kZWJvdW5jZVRpbWVvdXQpO1xuICAgICAgICB0aGlzLmRlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuYXR0cnMub25EZWJvdW5jZS50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgICAgICB9LCB0aGlzLmRlYm91bmNlSW50ZXJ2YWwpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRyKCdmb2N1cycsIHRoaXMuc2V0Rm9jdXMpO1xuICAgIHRoaXMuYXR0cigndmFsdWUnLCB0aGlzLnNldFZhbHVlKTtcbiAgICB0aGlzLmF0dHIoJ2RlYm91bmNlJywgdGhpcy5zZXREZWJvdW5jZSk7XG4gIH1cblxuICByZW1vdmVkKCkge1xuICAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ICYmIGNsZWFyVGltZW91dCh0aGlzLmRlYm91bmNlVGltZW91dCk7XG4gIH1cblxuICBzZXREZWJvdW5jZShpbnRlcnZhbCkge1xuICAgIHRoaXMuZGVib3VuY2VJbnRlcnZhbCA9ICtpbnRlcnZhbDtcbiAgfVxuXG4gIHNldEZvY3VzKHZhbHVlKSB7XG4gICAgdmFsdWU/IHRoaXMuc2V0RWxlbWVudEZvY3VzKCk6IHRoaXMuc2V0RWxlbWVudEJsdXIoKTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgKHRoaXMuZWxbdGhpcy52YWx1ZUtleV0gIT09IHZhbHVlKSAmJiAodGhpcy5lbFt0aGlzLnZhbHVlS2V5XSA9IHZhbHVlID09PSAwPyAnMCc6ICh2YWx1ZSB8fCAnJykpO1xuICB9XG5cbiAgc2V0RWxlbWVudEZvY3VzKCkge1xuICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgfVxuXG4gIHNldEVsZW1lbnRCbHVyKCkge1xuICAgIHRoaXMuZWwuYmx1cigpO1xuICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RleHQuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGxvb3BzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19sb29wc31cbiAqIFxuICogQHRhZyBmb3JcbiAqIEBzZWxlY3RvciBmb3JbaW5dLG9sW2luXSx1bFtpbl0sdGhlYWRbaW5dLHRib2R5W2luXSx0Zm9vdFtpbl1cbiAqIEBhdHRyIHtvYmplY3R8YXJyYXl9IGluIC0gZGF0YSB0byBjcmVhdGUgdGhlIGxvb3BcbiAqIEBtZXNzYWdlIHtvYmplY3R8YXJyYXl9IG91dCAtIHNlbnQgb24gdGhlIGRhdGEgY2hhbmdlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tpbl0nO1xuICBzdGF0aWMgZXZlbnRzID0gWydvdXQnXTtcbiAgc3RhdGljIHNhdmVBdHRyaWJ1dGVQcm94eUluID0gdHJ1ZTsgIFxuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdmb3InLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ29sJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd1bCcsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGhlYWQnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3Rib2R5JywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0Zm9vdCcsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndHInLCB0aGlzLkxvb3ApO1xuICAgIEFraWxpLmNvbXBvbmVudCgnbG9vcCcsIHRoaXMuTG9vcCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgXG4gICAgdGhpcy5pdGVyYXRvcnMgPSBbXTtcbiAgICB0aGlzLml0ZXJhdG9yUmVmID0gbnVsbDtcbiAgICB0aGlzLml0ZXJhdG9yT3V0ZXJIVE1MID0gbnVsbDtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5yZXNldCgpO1xuICAgIHRoaXMuY3JlYXRlSXRlcmF0b3IoKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cignaW4nLCB0aGlzLmRyYXcpO1xuICB9XG5cbiAgY3JlYXRlSXRlcmF0b3IoKSB7XG4gICAgbGV0IGVsO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5lbC5jaGlsZHJlbltpXTtcblxuICAgICAgaWYgKGNoaWxkLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50JykgPT0gJ2xvb3AnKSB7XG4gICAgICAgIGVsID0gY2hpbGQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBlbCA9IGNoaWxkO1xuICAgIH1cblxuICAgIGlmICghZWwpIHtcbiAgICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbG9vcCcpOyAgICAgIFxuICAgICAgZWwuaW5uZXJIVE1MID0gdGhpcy5lbC5pbm5lckhUTUw7IFxuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJzsgICAgIFxuICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChlbCk7XG4gICAgfVxuXG4gICAgbGV0IGNvbXBvbmVudE5hbWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpO1xuXG4gICAgaWYgKGNvbXBvbmVudE5hbWUgIT0gJ2xvb3AnKSB7XG4gICAgICBsZXQgY29tcG9uZW50ID0gQWtpbGkuY29tcG9uZW50KGNvbXBvbmVudE5hbWUgfHwgZWwudGFnTmFtZSk7XG5cbiAgICAgIGlmICghY29tcG9uZW50KSB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY29tcG9uZW50JywgJ2xvb3AnKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCEoY29tcG9uZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIEZvcikpIHtcbiAgICAgICAgbGV0IG1hc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsb29wJyk7XG4gICAgICAgIG1hc2suYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICBlbCA9IG1hc2s7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5odG1sID0gZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuaXRlcmF0b3JSZWYgPSBlbC5uZXh0U2libGluZztcbiAgICB0aGlzLml0ZXJhdG9yT3V0ZXJIVE1MID0gZWwub3V0ZXJIVE1MO1xuICAgIGVsLnJlbW92ZSgpO1xuICB9XG5cbiAgY3JlYXRlSXRlcmF0b3JFbGVtZW50KCkge1xuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgZWwuaW5uZXJIVE1MID0gdGhpcy5pdGVyYXRvck91dGVySFRNTDtcbiAgICBlbCA9IGVsLmNvbnRlbnQuZmlyc3RDaGlsZDtcbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBsb29wKGtleSwgdmFsdWUsIGluZGV4KSB7XG4gICAgdGhpcy5fX2luZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5fX2tleSA9IGtleTtcbiAgICB0aGlzLl9fdmFsdWUgPSB2YWx1ZTsgICAgXG4gICAgdGhpcy5fX2NvbXBhcmlzb25WYWx1ZSA9IHV0aWxzLmNvcHkodmFsdWUpO1xuXG4gICAgaWYodGhpcy5pdGVyYXRvcnMubGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIGxldCBpdGVyYXRvciA9IHRoaXMuaXRlcmF0b3JzW2luZGV4XTtcbiAgICAgIGxldCBjQ29weSA9IGl0ZXJhdG9yLmNvbXBhcnNpb24uY29weTtcbiAgICAgICAgXG4gICAgICBpZiAodGhpcy5fX2luZGV4ICE9PSBpdGVyYXRvci5pbmRleCkge1xuICAgICAgICBpdGVyYXRvci5zZXRJbmRleCgpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldEluZGV4KHRydWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fX2tleSAhPT0gaXRlcmF0b3Iua2V5KSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldEtleSgpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldEtleSh0cnVlKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKCF1dGlscy5jb21wYXJlKGNDb3B5LCB0aGlzLl9fY29tcGFyaXNvblZhbHVlLCB7IGlnbm9yZVVuZGVmaW5lZDogdHJ1ZSB9KSkge1xuICAgICAgICBpdGVyYXRvci5zZXRWYWx1ZSgpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldFZhbHVlKHRydWUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9fcHJvbWlzZXMucHVzaChBa2lsaS5jb21waWxlKGl0ZXJhdG9yLmVsLCB7IHJlY29tcGlsZTogeyBjaGVja0NoYW5nZXM6IHRydWUgfSB9KSk7XG4gICAgICByZXR1cm4gaXRlcmF0b3I7XG4gICAgfVxuICAgIFxuICAgIGxldCBlbCA9IHRoaXMuY3JlYXRlSXRlcmF0b3JFbGVtZW50KCk7XG4gICAgZWwuaW5uZXJIVE1MID0gdGhpcy5odG1sO1xuICAgIHRoaXMuZWwuaW5zZXJ0QmVmb3JlKGVsLCB0aGlzLml0ZXJhdG9yUmVmKTtcbiAgICB0aGlzLl9fcHJvbWlzZXMucHVzaChBa2lsaS5jb21waWxlKGVsKSk7XG4gICAgdGhpcy5pdGVyYXRvcnMucHVzaChlbC5fX2FraWxpKTtcbiAgICByZXR1cm4gZWwuX19ha2lsaTtcbiAgfVxuXG4gIGRyYXcoZGF0YSkge1xuICAgIGlmICh0eXBlb2YgZGF0YSAhPSAnb2JqZWN0JyB8fCBkYXRhID09PSBudWxsKSB7XG4gICAgICBpZiAoQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLndhcm4oYFwiRm9yXCIgY29tcG9uZW50IFwiaW5cIiBhdHRyaWJ1dGUgdmFsdWUgdHlwZSBtdXN0IGJlIGFuIG9iamVjdC9hcnJheWApOyAgICAgICAgXG4gICAgICB9XG5cbiAgICAgIGRhdGEgPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGEgPSBkYXRhOyAgIFxuXG4gICAgY29uc3QgbG9vcCA9IChrZXksIHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IGl0ZXJhdG9yID0gdGhpcy5sb29wKGtleSwgdmFsdWUsIGluZGV4KTtcbiAgICAgIGl0ZXJhdG9yLml0ZXJhdGUoaW5kZXgpO1xuICAgIH07XG5cbiAgICBpZihBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGRhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxvb3AoaSwgZGF0YVtpXSwgaSk7XG4gICAgICB9ICAgICBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICBsb29wKGtleSwgZGF0YVtrZXldLCBpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gdGhpcy5fX2luZGV4ICsgMSwgbCA9IHRoaXMuaXRlcmF0b3JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGl0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcnNbaV07XG4gICAgICBpdGVyYXRvci5fX2Rlc3Ryb3koKTtcbiAgICAgIHRoaXMuaXRlcmF0b3JzLnNwbGljZShpLCAxKTtcbiAgICAgIGwtLTtcbiAgICAgIGktLTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwodGhpcy5fX3Byb21pc2VzKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIHRoaXMuYXR0cnMub25PdXQudHJpZ2dlcihkYXRhLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgfSk7ICAgIFxuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBpbml0aWFsIHN0YXRlXG4gICAqL1xuICByZXNldCgpIHtcbiAgICB0aGlzLl9faXRlcmF0b3IgPSBudWxsO1xuICAgIHRoaXMuX19pbmRleCA9IDA7XG4gICAgdGhpcy5fX2tleSA9ICcnO1xuICAgIHRoaXMuX192YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5fX2NvbXBhcmlzb25WYWx1ZSA9IG51bGw7XG4gICAgdGhpcy5fX3Byb21pc2VzID0gW107XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGxvb3BzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19sb29wc31cbiAqIFxuICogQHRhZyBsb29wXG4gKiBAc2VsZWN0b3IgbG9vcCx0clxuICogQGF0dHIgQHNlZSBGb3JcbiAqIEBzY29wZSB7Kn0gbG9vcFZhbHVlIC0gZGF0YSBpdGVtJ3MgdmFsdWUgb2YgdGhlIGN1cnJlbnQgaXRlcmF0aW9uIFxuICogQHNjb3BlIHtzdHJpbmd8bnVtYmVyfSBsb29wS2V5IC0ga2V5IG9mIHRoZSBpdGVyYXRpb25cbiAqIEBzY29wZSB7bnVtYmVyfSBsb29wSW5kZXggLSBpbmRleCBvZiB0aGUgaXRlcmF0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBMb29wIGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmZvciA9IG51bGw7XG4gICAgdGhpcy5odG1sID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgdGhpcy5pc0ZvciA9IHRoaXMuZWwuaGFzQXR0cmlidXRlKCdpbicpO1xuXG4gICAgaWYgKCF0aGlzLmlzRm9yICYmICEodGhpcy5lbC5wYXJlbnROb2RlLl9fYWtpbGkgaW5zdGFuY2VvZiBGb3IpKSB7XG4gICAgICB0aGlzLmNhbmNlbCgpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9faXRlcmF0b3IgPSB0aGlzO1xuICAgIHRoaXMuZm9yID0gdGhpcy5fX3BhcmVudC5fX2FraWxpO1xuICAgIHRoaXMuc2V0SW5kZXgodHJ1ZSk7XG4gICAgdGhpcy5zZXRLZXkodHJ1ZSk7XG4gICAgdGhpcy5zZXRWYWx1ZSh0cnVlKTtcblxuICAgIGlmKHRoaXMuaXNGb3IpIHtcbiAgICAgIHJldHVybiBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgaWYodGhpcy5pc0Zvcikge1xuICAgICAgcmV0dXJuIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgc2V0SW5kZXgodGFyZ2V0KSB7XG4gICAgdGhpcy5pbmRleCA9IHRoaXMuZm9yLl9faW5kZXg7XG4gICAgdGhpcy5zY29wZS5fX3NldCgnbG9vcEluZGV4JywgdGhpcy5pbmRleCwgZmFsc2UsIHRhcmdldCk7XG4gIH1cblxuICBzZXRLZXkodGFyZ2V0KSB7XG4gICAgdGhpcy5rZXkgPSB0aGlzLmZvci5fX2tleTtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wS2V5JywgdGhpcy5rZXksIGZhbHNlLCB0YXJnZXQpO1xuICB9XG5cbiAgc2V0VmFsdWUodGFyZ2V0KSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuZm9yLl9fdmFsdWU7XG4gICAgdGhpcy5zY29wZS5fX3NldCgnbG9vcFZhbHVlJywgdGhpcy52YWx1ZSwgdHJ1ZSwgdGFyZ2V0KTtcblxuICAgIHRoaXMuY29tcGFyc2lvbiA9IHtcbiAgICAgIGNvcHk6IHRoaXMuZm9yLl9fY29tcGFyaXNvblZhbHVlLFxuICAgICAgdmFsdWU6IHRoaXMuZm9yLl9fdmFsdWVcbiAgICB9O1xuICB9XG5cbiAgaXRlcmF0ZSgpIHt9XG59XG5cbkZvci5Mb29wID0gTG9vcDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9mb3IuanMiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5cbi8qKlxuICogU2NvcGUgY2xhc3MuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvc2NvcGV9XG4gKlxuICogQWxsIHByb3BlcnRpZXMgc3RhcnRpbmcgd2l0aCBfXyBhcmUgbm90IG1vbml0b3JlZC5cbiAqIFlvdSBjYW4gdXNlIHRoZW0gZm9yIGludGVybmFsIG1hbmlwdWxhdGlvbnMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3BlIHtcbiAgc3RhdGljIG5lc3RlZFdhdGNoaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVsLCBjb21wb25lbnQpIHtcbiAgICB0aGlzLl9fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fX2VsID0gZWw7XG4gICAgdGhpcy5fX2NvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ3Njb3BlJywgbmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGEgc2NvcGUgdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzdHJpY3Q9ZmFsc2VdIC0gd2l0aG91dCBvYmplY3QgY29weWluZ1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldChrZXlzLCB2YWx1ZSwgc3RyaWN0ID0gZmFsc2UsIHRhcmdldCA9IGZhbHNlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cbiAgICBcbiAgICBBa2lsaS51bmlzb2xhdGUoKCkgPT4ge1xuICAgICAgc3RyaWN0ICYmICh0aGlzLl9fY29tcG9uZW50Ll9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyA9IHRydWUpO1xuICAgICAgdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGFyZ2V0PyB0aGlzLl9fdGFyZ2V0OiB0aGlzLCAobGFzdCwgdmFsKSA9PiB7XG4gICAgICAgIGlmICghbGFzdCkge1xuICAgICAgICAgIHJldHVybiB2YWwgfHwge307XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHN0cmljdCAmJiAodGhpcy5fX2NvbXBvbmVudC5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgPSBmYWxzZSk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NvcGUuanMiLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5cbi8qKlxuICogQ2xhc3MgZm9yIHdvcmtpbmcgd2l0aCBldmVudHMuXG4gKiBBbiBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGFsbG93cyB5b3UgdG8gdHJpZ2dlciBjdXN0b20gamF2YXNjcmlwdCBldmVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvZXZlbnRzfVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBlbCwgY29tcG9uZW50KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmVsID0gZWw7XG4gICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgdGhpcy5lbENvbXBvbmVudCA9IHRoaXMuZWwuX19ha2lsaSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgdGhlIGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSAtIHNlbmRpbmcgZGF0YS4gV2lsbCBiZSBpbiB0aGUgZXZlbnQuZGV0YWlsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgdHJpZ2dlcihkYXRhLCBvcHRpb25zID0ge30sIGZvcmNlID0gZmFsc2UpIHtcbiAgICBpZiAoZm9yY2UgfHwgIXRoaXMuaW5FdmFsdWF0aW5nKCkpIHtcbiAgICAgIHRoaXMuZWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQodGhpcy5uYW1lLCB0aGlzLnByZXBhcmVPcHRpb25zKHsgZGV0YWlsOiBkYXRhLCAgLi4ub3B0aW9ucyB9KSkpO1xuICAgIH0gICBcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaCB0aGUgZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gX0V2ZW50IC0gY2xhc3Mgb2YgdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZGlzcGF0Y2goX0V2ZW50LCBvcHRpb25zID0ge30sIGZvcmNlID0gZmFsc2UpIHtcbiAgICBpZiAoZm9yY2UgfHwgIXRoaXMuaW5FdmFsdWF0aW5nKCkpIHtcbiAgICAgIHRoaXMuZWwuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50KHRoaXMubmFtZSwgdGhpcy5wcmVwYXJlT3B0aW9ucyhvcHRpb25zKSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwZXJlIGFuIGV2ZW50IG9wdGlvbnNcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gXG4gICAqL1xuICBwcmVwYXJlT3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0geyBidWJibGVzOiB0cnVlLCAuLi5vcHRpb25zIH07ICBcbiAgICB0aGlzLmVsQ29tcG9uZW50ICYmICF0aGlzLmVsQ29tcG9uZW50Ll9fc2F2ZUF0dHJpYnV0ZVByb3h5T3V0ICYmIChvcHRpb25zLmRldGFpbCA9IHV0aWxzLmNvcHkob3B0aW9ucy5kZXRhaWwpKTtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBldmVudCBjYWxsYmFjayBkb2Vzbid0IHJ1biByZWN1cnNpdmVcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpbkV2YWx1YXRpbmcoKSB7XG4gICAgbGV0IGRhdGEgPSB0aGlzLmNvbXBvbmVudC5fX2V2YWx1YXRpbmdFdmVudDtcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhLmVsID09PSB0aGlzLmVsICYmIGRhdGEuZXZlbnQudHlwZSA9PT0gdGhpcy5uYW1lICYmIGRhdGEuY29tcG9uZW50ID09PSB0aGlzLmNvbXBvbmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIHRoZSBmdW5jdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICAgKi9cbiAgYmluZChmbikge1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMuZm4gPSBmbik7XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIHRoZSBmdW5jdGlvblxuICAgKi9cbiAgdW5iaW5kKCkge1xuICAgIHRoaXMuZm4gJiYgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubmFtZSwgdGhpcy5mbik7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXZlbnQtZW1pdHRlci5qcyIsImltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG4vKipcbiAqIFN0b3JlIGFsbG93cyB5b3UgdG8gc2F2ZSBhbmQgZGlzdHJpYnV0ZSBkYXRhLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3N0b3JlfVxuICovXG5jb25zdCBzdG9yZSA9IG5ldyBQcm94eSh7fSwge1xuICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgIGlmIChrZXkgPT0gXCJfX3RhcmdldFwiKSB7XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgfSxcbiAgc2V0OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgaWYodXRpbHMuY29tcGFyZSh0YXJnZXRba2V5XSwgdmFsdWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgdmFsdWUgPSB1dGlscy5jb3B5KHZhbHVlKTtcbiAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgIEFraWxpLnJvb3QgJiYgQWtpbGkucm9vdC5fX3N0b3JlVHJpZ2dlckJ5TmFtZShrZXksIHZhbHVlKTsgICAgXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICBBa2lsaS5yb290ICYmIEFraWxpLnJvb3QuX19zdG9yZVRyaWdnZXJCeU5hbWUoa2V5LCB1bmRlZmluZWQpO1xuICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2aWNlcy9zdG9yZS5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi9zZXJ2aWNlcy9yZXF1ZXN0LmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIHJvdXRlciB0ZW1wbGF0ZXMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3RlbXBsYXRlc31cbiAqIFxuICogQHRhZyByb3V0ZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdyb3V0ZScsIHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1RyYW5zaXRpb259IHRyYW5zaXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBzZXRUcmFuc2l0aW9uKHRyYW5zaXRpb24pIHtcbiAgICBsZXQgc3RhdGUgPSB0cmFuc2l0aW9uLnBhdGguc3RhdGU7XG4gICAgbGV0IHBhcmFtcyA9IHRyYW5zaXRpb24ucGF0aC5wYXJhbXM7XG4gICAgbGV0IHVybCA9IHRyYW5zaXRpb24udXJsO1xuICAgIGxldCBxdWVyeSA9IHRyYW5zaXRpb24ucXVlcnk7XG5cbiAgICBjb25zdCBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24gPSAocGF0aCkgPT4ge1xuICAgICAgaWYgKHBhdGgucGFyZW50KSB7XG4gICAgICAgIGlmIChwYXRoLnBhcmVudC5jb21wb25lbnQpIHtcbiAgICAgICAgICByZXR1cm4gcGF0aC5wYXJlbnQuY29tcG9uZW50Ll9fc2NvcGUuX190cmFuc2l0aW9uLnBhdGg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uKHBhdGgucGFyZW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcGlsZSA9IChodG1sKSA9PiB7IFxuICAgICAgdGhpcy5lbXB0eSgpOyAgXG4gICAgICBsZXQgbmFtZSA9ICdjb21wb25lbnQnO1xuXG4gICAgICBpZihzdGF0ZS5jb21wb25lbnQpIHtcbiAgICAgICAgbGV0IGV4aXN0cyA9IGZhbHNlO1xuICAgIFxuICAgICAgICBmb3IobGV0IGtleSBpbiBBa2lsaS5fX2NvbXBvbmVudHMpIHtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBBa2lsaS5fX2NvbXBvbmVudHNba2V5XTtcbiAgICBcbiAgICAgICAgICBpZihjb21wb25lbnQgPT09IHN0YXRlLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgbmFtZSA9IGtleTsgICAgICAgICAgICBcbiAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaWYoIWV4aXN0cykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIFwiJHtzdGF0ZS5uYW1lfVwiIGhhcyBubyBkZWZpbmVkIGNvbXBvbmVudGApXG4gICAgICAgIH0gXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gYDwkeyBuYW1lIH0+JHsgaHRtbCB9PC8keyBuYW1lIH0+YDtcbiAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX19zY29wZS5fX3RyYW5zaXRpb24gPSB7XG4gICAgICBwYXRoOiB7XG4gICAgICAgIHN0YXRlOiBzdGF0ZS5uYW1lLFxuICAgICAgICBkYXRhOiB0cmFuc2l0aW9uLnBhdGguZGF0YSxcbiAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgIHBhcmVudDogZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uKHRyYW5zaXRpb24ucGF0aClcbiAgICAgIH0sXG4gICAgICBwYXJhbXM6IHRyYW5zaXRpb24ucGFyYW1zLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBxdWVyeTogcXVlcnlcbiAgICB9O1xuXG4gICAgaWYgKCF0cmFuc2l0aW9uLnBhdGgubG9hZGVkKSB7XG4gICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICBpZiAoc3RhdGUudGVtcGxhdGUpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnRlbXBsYXRlO1xuICAgICAgfVxuICBcbiAgICAgIGlmIChzdGF0ZS50ZW1wbGF0ZVVybCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdC5nZXQoc3RhdGUudGVtcGxhdGVVcmwpLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcbiAgICAgIH1cbiAgICB9KS50aGVuKGh0bWwgPT4gY29tcGlsZShodG1sKSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9yb3V0ZS5qcyIsImltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9yZXF1ZXN0LmpzJztcbmltcG9ydCBSb3V0ZSBmcm9tICcuLi9jb21wb25lbnRzL3JvdXRlLmpzJztcblxuLyoqXG4gKiBUcmFuc2l0aW9uIGNsYXNzLlxuICogQW4gaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBjb25zaXN0cyB0aGUgbGFzdCBhY3R1YWwgcm91dGVyIHRyYW5zaXRpb24gaW5mb3JtYXRpb24uXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3RyYW5zaXRpb259XG4gKi9cbmV4cG9ydCBjbGFzcyBUcmFuc2l0aW9uIHtcbiAgY29uc3RydWN0b3IodXJsLCBxdWVyeSwgaGFzaCA9ICcnLCBwcmV2aW91cyA9IG51bGwpIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgdGhpcy5oYXNoID0gaGFzaDtcbiAgICB0aGlzLnByZXZpb3VzID0gcHJldmlvdXM7XG4gICAgdGhpcy5wYXRoID0gbnVsbDtcbiAgICB0aGlzLnJvdXRlcyA9IFtdO1xuICAgIHRoaXMuc3RhdGVzID0ge307XG4gICAgdGhpcy5wYXJhbXMgPSB7fTtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogUmVkaXJlY3QgdG8gYW5vdGhlciBzdGF0ZVxuICAgKiBcbiAgICogQHNlZSByb3V0ZXIuc3RhdGVcbiAgICovXG4gIHJlZGlyZWN0KCkge1xuICAgIHRoaXMuY2FuY2VsKCk7ICAgIFxuICAgIHJvdXRlci5zdGF0ZS5hcHBseShyb3V0ZXIsIGFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBjdXJyZW50IHBhdGhcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXRoIFxuICAgKi9cbiAgc2V0UGF0aChwYXRoKSB7XG4gICAgcGF0aC5wYXJlbnQgPSB0aGlzLnBhdGggfHwgbnVsbDtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIHRoaXMucm91dGVzLnB1c2gocGF0aCk7XG4gICAgdGhpcy5zdGF0ZXNbcGF0aC5zdGF0ZS5uYW1lXSA9IHBhdGg7XG4gICAgdGhpcy5wYXJhbXMgPSAhcGF0aC5wYXJlbnQ/IHBhdGgucGFyYW1zOiB7Li4ucGF0aC5wYXJlbnQucGFyYW1zLCAuLi5wYXRoLnBhcmFtc307XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgcm91dGUgYnkgdGhlIHN0YXRlXG4gICAqICBcbiAgICogQHBhcmFtIHsqfSBzdGF0ZSBcbiAgICovXG4gIGdldFJvdXRlKHN0YXRlKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnJvdXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByb3V0ZSA9IHRoaXMucm91dGVzW2ldO1xuXG4gICAgICBpZiAocm91dGUuc3RhdGUgPT09IHN0YXRlKSB7XG4gICAgICAgIHJldHVybiByb3V0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBpdCBoYXMgdGhlIHN0YXRlXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgXG4gICAqL1xuICBoYXNTdGF0ZShzdGF0ZSkge1xuICAgIHJldHVybiAhIXRoaXMuc3RhdGVzW3N0YXRlLm5hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbmNlbCB0aGUgY3VycmVudCB0cmFuc2l0aW9uXG4gICAqL1xuICBjYW5jZWwoKSB7XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBBa2lsaSByb3V0ZXJcbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nfVxuICovXG5jb25zdCByb3V0ZXIgPSB7fTtcblxuLyoqXG4gKiBTZXQgcm91dGVyJ3MgZGVmYXVsdCB2YXJpYWJsZXNcbiAqL1xucm91dGVyLnNldERlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmJhc2VVcmwgPSBcIi9cIjtcbiAgdGhpcy5zdGF0ZXMgPSBbXTtcbiAgdGhpcy5oYXNoTW9kZSA9IHRydWU7XG4gIHRoaXMuX19yZWRpcmVjdHMgPSAwO1xuICB0aGlzLl9faW5pdCA9IGZhbHNlO1xuICB0aGlzLl9fb3B0aW9ucyA9IHt9O1xuICB0aGlzLl9fcGFyYW1SZWdleCA9IC8oOihbXFx3XFxkLV0rKSkvZztcbiAgdGhpcy5fX3JvdXRlU2VsZWN0b3IgPSBjID0+IGMgaW5zdGFuY2VvZiBSb3V0ZTtcbn1cblxuLyoqXG4gKiBBZGQgbmV3IHN0YXRlIHRvIHRoZSByb3V0ZXJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHN0YXRlIG5hbWUuIFRvIHNldCBwYXJlbnRzIHlvdSBjYW4gdXNlIGRvdCwgZS5nLiAnYXBwLmFydGljbGUuZWRpdCdcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXR0ZXJuIC0gdXJsIHBhdHRlcm4gbGlrZSAnYXBwL2FydGljbGUvOmlkJ1xuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge3JvdXRlcn1cbiAqL1xucm91dGVyLmFkZCA9IGZ1bmN0aW9uIChuYW1lLCBwYXR0ZXJuLCBvcHRpb25zID0ge30pIHtcbiAgaWYodHlwZW9mIG5hbWUgPT0gJ29iamVjdCcpIHtcbiAgICBvcHRpb25zID0gbmFtZTtcbiAgICBwYXR0ZXJuID0gb3B0aW9ucy5wYXR0ZXJuO1xuICAgIG5hbWUgPSBvcHRpb25zLnN0YXRlO1xuICAgIGRlbGV0ZSBvcHRpb25zLnBhdHRlcm47XG4gICAgZGVsZXRlIG9wdGlvbnMuc3RhdGU7XG4gIH1cblxuICBpZighbmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIG11c3QgaGF2ZSBhIG5hbWVgKTtcbiAgfVxuXG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIHRlbXBsYXRlOiAnJyxcbiAgICB0ZW1wbGF0ZVVybDogJycsXG4gICAgYWJzdHJhY3Q6IGZhbHNlLFxuICAgIGNvbXBvbmVudDogbnVsbCxcbiAgICBoYW5kbGVyOiAoKSA9PiB7fSxcbiAgfTtcblxuICBpZihBa2lsaS5vcHRpb25zLmRlYnVnICYmIG9wdGlvbnMuY29tcG9uZW50ICYmIChvcHRpb25zLnRlbXBsYXRlIHx8IG9wdGlvbnMudGVtcGxhdGVVcmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oYFJvdXRlciBzdGF0ZSBcIiR7bmFtZX1cIiBtdXN0IG9ubHkgaGF2ZSBhIGNvbXBvbmVudCBvciB0ZW1wbGF0ZSBvcHRpb25gKTtcbiAgfSBcblxuICBpZiAoIW9wdGlvbnMudGVtcGxhdGUgJiYgIW9wdGlvbnMudGVtcGxhdGVVcmwgJiYgIW9wdGlvbnMuY29tcG9uZW50KSB7XG4gICAgb3B0aW9ucy5hYnN0cmFjdCA9IHRydWU7XG4gIH1cblxuICBpZiAodGhpcy5oYXMobmFtZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBcIiR7bmFtZX1cIiBpcyBhbHJlYWR5IGV4aXN0c2ApXG4gIH1cblxuICB0aGlzLnNldFN0YXRlKG5hbWUsIHBhdHRlcm4sIHsuLi5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9uc30pO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIHN0YXRlIGZyb20gdGhlIGxpc3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5yb3V0ZXIucmVtb3ZlID0gZnVuY3Rpb24obmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmICh0aGlzLnN0YXRlc1tpXS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHRoaXMuc3RhdGVzLnNwbGljZShpLCAxKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBDaGVjayBzdGF0ZSBleGlzdHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnJvdXRlci5oYXMgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKHRoaXMuc3RhdGVzW2ldLm5hbWUgPT0gbmFtZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBDaGFuZ2UgdGhlIHN0YXRlIHRvIHRoZSBwYXNzZWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHN0YXRlIG5hbWVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSAtIHBhcmFtcyBmb3Igc3RhdGUge2lkOiAxfSA9PiAnL2FwcC86aWQnID0+ICcvYXBwLzEnXG4gKiBAcGFyYW0ge29iamVjdH0gW3F1ZXJ5XSAtIHF1ZXJ5IHt4OiAxfSA9PiAnL2FwcC8/eD0xJ1xuICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoXVxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICovXG5yb3V0ZXIuc3RhdGUgPSBmdW5jdGlvbiAobmFtZSwgcGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSAnJywgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUobmFtZSk7XG4gIFxuICBpZiAoIXN0YXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgcm91dGUgc3RhdGUgd2l0aCBuYW1lICR7bmFtZX1gKTtcbiAgfVxuXG4gIGxldCB1cmwgPSB0aGlzLmNyZWF0ZVN0YXRlVXJsKHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoKTtcblxuICBpZiAoIW9wdGlvbnMucmVsb2FkICYmIHVybCA9PT0gdGhpcy5nZXRVcmwoKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBcbiAgdGhpcy5fX29wdGlvbnMgPSBvcHRpb25zO1xuICB0aGlzLnNldFVybCh1cmwpO1xufTtcblxuLyoqXG4gKiBHbyBiYWNrXG4gKi9cbnJvdXRlci5iYWNrID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeS5iYWNrLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBHbyB0byBhbnkgd2F5XG4gKi9cbnJvdXRlci5nbyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkuZ28uYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIEdvIGZvcndhcmRcbiAqL1xucm91dGVyLmZvcndhcmQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LmZvcndhcmQuYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIENoYW5nZSBzdGF0ZSBieSB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKi9cbnJvdXRlci5sb2NhdGlvbiA9IGZ1bmN0aW9uKHVybCwgb3B0aW9ucyA9IHsgcmVsb2FkOiBmYWxzZSB9KSB7XG4gIHRoaXMuX19vcHRpb25zID0gb3B0aW9ucztcblxuICBpZiAodGhpcy5oYXNoTW9kZSkge1xuICAgIGxldCBjdXJyZW50ID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTtcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHVybDtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGN1cnJlbnQgPT09IHVybCAmJiB0aGlzLmNoYW5nZVN0YXRlKCkuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgfVxuICBlbHNlIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgJycsIHVybCk7XG4gIH1cbn07XG5cbi8qKlxuICogUm91dGVyIGluaXRpYWxpemF0aW9uLiBTaG91bGQgYmUgY2FsbGVkIGJlZm9yZSBBa2lsaS5pbml0KClcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW2RlZmF1bHRVcmxdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtoYXNoTW9kZT10cnVlXVxuICovXG5yb3V0ZXIuaW5pdCA9IGZ1bmN0aW9uIChkZWZhdWx0VXJsID0gJycsIGhhc2hNb2RlID0gdHJ1ZSkge1xuICBsZXQgb2xkUHVzaFN0YXRlID0gd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlO1xuXG4gIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCByZXMgPSBvbGRQdXNoU3RhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIHJvdXRlci5jaGFuZ2VTdGF0ZSgpLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICB0aGlzLl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICB0aGlzLmNoYW5nZVN0YXRlKCkuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgfTtcblxuICB0aGlzLmRlZmF1bHRVcmwgPSBkZWZhdWx0VXJsO1xuICB0aGlzLmhhc2hNb2RlID0gaGFzaE1vZGU7XG5cbiAgdGhpcy5zdGF0ZXMuc29ydCgoYSwgYikgPT4ge1xuICAgIGEgPSBhLm5hbWUuc3BsaXQoJy4nKS5sZW5ndGg7XG4gICAgYiA9IGIubmFtZS5zcGxpdCgnLicpLmxlbmd0aDtcbiAgICByZXR1cm4gYSAtIGI7XG4gIH0pO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdGhpcy5pbml0U3RhdGUodGhpcy5zdGF0ZXNbaV0pO1xuICB9XG5cbiAgaWYgKCF0aGlzLnN0YXRlcy5sZW5ndGggJiYgQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKGBZb3UgZGlkbid0IGFkZCBhbnkgcm91dGVzIHRvIHRoZSByb3V0ZXJgKTtcbiAgfVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMuX19vblN0YXRlQ2hhbmdlSGFuZGxlcik7XG4gIHRoaXMuX19pbml0ID0gdHJ1ZTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgc3RhdGUgXG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSBcbiAqL1xucm91dGVyLmluaXRTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICBsZXQgcGFyZW50cyA9IFtdO1xuICBzdGF0ZS5jaGlsZHJlbiA9IFtdO1xuICBwYXJlbnRzID0gc3RhdGUubmFtZS5zcGxpdCgnLicpO1xuICBwYXJlbnRzLnBvcCgpO1xuICBzdGF0ZS5sZXZlbCA9IHN0YXRlLmFic3RyYWN0PyBudWxsOiBwYXJlbnRzLmxlbmd0aDtcblxuICBpZiAocGFyZW50cy5sZW5ndGgpIHtcbiAgICBsZXQgcGFyZW50TmFtZSA9IHBhcmVudHMuam9pbignLicpO1xuICAgIGxldCBwYXJlbnQgPSB0aGlzLmdldFN0YXRlKHBhcmVudE5hbWUpO1xuXG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIHBhcmVudCByb3V0ZSBzdGF0ZSBcIiR7cGFyZW50TmFtZX1cIiBmb3IgXCIke3N0YXRlLm5hbWV9XCJgKVxuICAgIH1cblxuICAgIGlmIChzdGF0ZS5sZXZlbCAhPT0gbnVsbCAmJiBwYXJlbnQuYWJzdHJhY3QpIHtcbiAgICAgIHN0YXRlLmxldmVsLS07XG4gICAgfVxuXG4gICAgc3RhdGUuZnVsbFBhdHRlcm4gPSB0aGlzLnNwbGl0U2xhc2hlcyhwYXJlbnQuZnVsbFBhdHRlcm4gKyAnLycgKyBzdGF0ZS5wYXR0ZXJuKTtcbiAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaChzdGF0ZSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgc3RhdGUuZnVsbFBhdHRlcm4gPSBzdGF0ZS5wYXR0ZXJuO1xuICB9XG59XG5cbi8qKlxuICogR2V0IHN0YXRlIGJ5IG5hbWVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHJldHVybnMge29iamVjdHxudWxsfVxuICovXG5yb3V0ZXIuZ2V0U3RhdGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLm5hbWUgPT0gbmFtZSkge1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBTZXQgc3RhdGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IHBhdHRlcm5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKi9cbnJvdXRlci5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChuYW1lLCBwYXR0ZXJuLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IHN0YXRlID0gey4uLm9wdGlvbnMsIG5hbWUsIHBhdHRlcm59O1xuICB0aGlzLnN0YXRlcy5wdXNoKHN0YXRlKTtcbiAgdGhpcy5fX2luaXQgJiYgdGhpcy5pbml0U3RhdGUoc3RhdGUpO1xuICByZXR1cm4gc3RhdGU7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBzdGF0ZSBieSBuYW1lXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucm91dGVyLnJlbW92ZVN0YXRlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHRoaXMuc3RhdGVzLnNwbGljZShpLCAxKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBTZXQgdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICovXG5yb3V0ZXIuc2V0VXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB0aGlzLmhhc2hNb2RlPyB0aGlzLnNldEhhc2hVcmwodXJsKTogdGhpcy5zZXRIaXN0b3J5VXJsKHVybCk7XG59O1xuXG4vKipcbiAqIFNldCB1cmwgdXNpbmcgaGlzdG9yeVxuICpcbiAqIEBwYXJhbSB1cmxcbiAqL1xucm91dGVyLnNldEhpc3RvcnlVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCAnJywgdXJsKTtcbn07XG5cbi8qKlxuICogU2V0IHVybCB1c2luZyBoYXNoXG4gKlxuICogQHBhcmFtIHVybFxuICovXG5yb3V0ZXIuc2V0SGFzaFVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIycgKyAodXJsIHx8ICcvJyk7XG59O1xuXG4vKipcbiAqIEdldCB1cmxcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuZ2V0VXJsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5oYXNoTW9kZSA/IHRoaXMuZ2V0SGFzaFVybCgpIDogdGhpcy5nZXRIaXN0b3J5VXJsKCk7XG59O1xuXG4vKipcbiAqIEdldCB1cmwgdXNpbmcgaGlzdG9yeVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRIaXN0b3J5VXJsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArIHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xufTtcblxuLyoqXG4gKiBHZXQgdXJsIHVzaW5nIGhhc2hcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuZ2V0SGFzaFVybCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoL14jLywgJycpO1xufTtcblxuLyoqXG4gKiBHZXQgcXVlcnkgcGFyYW1zXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldFVybFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmhhc2hNb2RlID8gdGhpcy5nZXRIYXNoVXJsUXVlcnkoKSA6IHRoaXMuZ2V0SGlzdG9yeVVybFF1ZXJ5KCk7XG59O1xuXG4vKipcbiAqIEdldCBxdWVyeSBwYXJhbXMgdXNpbmcgaGlzdG9yeVxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRIaXN0b3J5VXJsUXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJlcXVlc3QucGFyYW1zRnJvbVF1ZXJ5KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSk7XG59O1xuXG4vKipcbiAqIEdldCBxdWVyeSBwYXJhbXMgdXNpbmcgaGFzaFxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRIYXNoVXJsUXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJlcXVlc3QucGFyYW1zRnJvbVF1ZXJ5KCh3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnPycpWzFdIHx8ICcnKSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSB1cmwgYnkgZGF0YVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXVxuICogQHBhcmFtIHtvYmplY3R9IFtxdWVyeV1cbiAqIEBwYXJhbSB7c3RyaW5nfSBbaGFzaF1cbiAqL1xucm91dGVyLmNyZWF0ZVN0YXRlVXJsID0gZnVuY3Rpb24gKHN0YXRlLCBwYXJhbXMgPSB7fSwgcXVlcnkgPSB7fSwgaGFzaCA9ICcnKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuXG4gIGxldCB1cmwgPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAobSwgZiwgdikgPT4gcGFyYW1zW3ZdIHx8ICcnKTtcbiAgdXJsID0gdXJsLnJlcGxhY2UoL15cXF4vLCAnJyk7XG4gIHVybCA9IHRoaXMuc3BsaXRTbGFzaGVzKHVybCk7XG5cbiAgaWYgKE9iamVjdC5rZXlzKHF1ZXJ5KS5sZW5ndGgpIHtcbiAgICB1cmwgKz0gJz8nICsgcmVxdWVzdC5wYXJhbXNUb1F1ZXJ5KHF1ZXJ5KTtcbiAgfVxuXG4gIGhhc2ggPSAoaGFzaCB8fCAnJykucmVwbGFjZSgnIycsICcnKTtcblxuICBpZiAoIXRoaXMuaGFzaE1vZGUgJiYgaGFzaCkge1xuICAgIHVybCArPSAnIycgKyBoYXNoO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCB1bm5lY2Vzc2FyeSBzbGFzaGVzIGZyb20gYW4gdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLnNwbGl0U2xhc2hlcyA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgcmV0dXJuIHVybC5yZXBsYWNlKC9bL10rL2csICcvJyk7XG59O1xuXG4vKipcbiAqIEdldCBzdGF0ZSB1cmwgY29udGVudFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRQYXR0ZXJuQ29udGVudCA9IGZ1bmN0aW9uIChzdGF0ZSwgdXJsKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuXG4gIGxldCBrZXlzID0gW107XG4gIGxldCBpID0gMDtcbiAgbGV0IHBhcmFtcyA9IHt9O1xuXG4gIHVybCA9IHVybC5zcGxpdCgnPycpWzBdO1xuICB1cmwgPSB1cmwuc3BsaXQoJyMnKVswXTtcblxuICBsZXQgdXJsUGF0dGVybiA9IHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2UodGhpcy5fX3BhcmFtUmVnZXgsIChtLCBmLCB2KSA9PiB7XG4gICAga2V5cy5wdXNoKHYpO1xuICAgIHJldHVybiAnKFteXFxcXC9dKiknO1xuICB9KTtcblxuICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKHVybFBhdHRlcm4pO1xuICBsZXQgaXNJbmNsdWRlZCA9IHVybC5tYXRjaChyZWdleCk7XG5cbiAgaWYgKCFpc0luY2x1ZGVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB1cmwucmVwbGFjZShyZWdleCwgKG0sIHYpID0+IHtcbiAgICB2ICYmIChwYXJhbXNba2V5c1tpXV0gPSB2KTtcbiAgICBpKys7XG4gIH0pO1xuXG4gIHJldHVybiB7IHBhcmFtcyB9O1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgc3RhdGUgaXMgYWN0aXZlIG5vd1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5jbHVkZXNcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaXNBY3RpdmVTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlLCBpbmNsdWRlcyA9IGZhbHNlKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBsZXQgdXJsID0gdGhpcy5zcGxpdFNsYXNoZXModGhpcy5nZXRVcmwoKS5zcGxpdCgnPycpWzBdICsgJy8nKTtcbiAgbGV0IHVybFBhdHRlcm4gPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAnKFteXFxcXC9dKiknKTtcbiAgbGV0IHN0ciA9IGluY2x1ZGVzPyB1cmxQYXR0ZXJuOiB0aGlzLnNwbGl0U2xhc2hlcygnXicgKyB1cmxQYXR0ZXJuICsgJy8kJyk7XG4gIGxldCByZWdleCA9IG5ldyBSZWdFeHAoc3RyKTsgIFxuICByZXR1cm4gcmVnZXgudGVzdCh1cmwpO1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgY3VycmVudCB1cmwgaW5jbHVkZXMgYSBzdGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaW5BY3RpdmVTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gIHJldHVybiByb3V0ZXIuaXNBY3RpdmVTdGF0ZShzdGF0ZSwgdHJ1ZSk7XG59O1xuXG4vKipcbiAqIEdldCByb3V0ZSBjb21wb25lbnQgYnkgbGV2ZWxcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbGV2ZWxcbiAqL1xucm91dGVyLmdldFJvdXRlID0gZnVuY3Rpb24gKGxldmVsKSB7XG4gIGxldCBpID0gMDtcblxuICBjb25zdCBmaW5kID0gKGVsKSA9PiB7XG4gICAgbGV0IHJvdXRlID0gZWwuY2hpbGQodGhpcy5fX3JvdXRlU2VsZWN0b3IpO1xuXG4gICAgaWYgKCFyb3V0ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGkgPT0gbGV2ZWwpIHtcbiAgICAgIHJldHVybiByb3V0ZTtcbiAgICB9XG5cbiAgICBpKys7XG5cbiAgICByZXR1cm4gZmluZChyb3V0ZSk7XG4gIH07XG5cbiAgcmV0dXJuIGZpbmQoQWtpbGkucm9vdCk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgZmlyc3QgbWF0Y2hcbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBhcnJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAqL1xucm91dGVyLmdldEFycmF5UGF0dGVybkNvbnRlbnQgPSBmdW5jdGlvbiAoYXJyLCB1cmwpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gYXJyW2ldO1xuICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRQYXR0ZXJuQ29udGVudChzdGF0ZSwgdXJsKTtcblxuICAgIGlmICghY29udGVudCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtzdGF0ZTogc3RhdGUsIC4uLmNvbnRlbnR9O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIEdldCBzdGF0ZXMgYnkgbGV2ZWxcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbGV2ZWxcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xucm91dGVyLmdldFN0YXRlc0J5TGV2ZWwgPSBmdW5jdGlvbiAobGV2ZWwpIHtcbiAgbGV0IHN0YXRlcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZXNbaV07XG5cbiAgICBpZiAoc3RhdGUubGV2ZWwgPCBsZXZlbCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHN0YXRlLmxldmVsID4gbGV2ZWwpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHN0YXRlcy5wdXNoKHN0YXRlKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZXM7XG59O1xuXG4vKipcbiAqIElzb2xhdGUgdGhlIGZ1bmN0aW9uIHRvIG5vdCB0cmlnZ2VyIHJvdXRlciBoYW5kbGVycyBpbnNpZGVcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbnJvdXRlci5pc29sYXRlID0gZnVuY3Rpb24oZm4pIHtcbiAgdGhpcy5fX2lzb2xhdGVkID0gdHJ1ZTtcbiAgbGV0IHJlcyA9IGZuKCk7XG4gIHRoaXMuX19pc29sYXRlZCA9IGZhbHNlO1xuICByZXR1cm4gcmVzO1xufVxuXG4vKipcbiAqIENoYW5nZSBzdGF0ZVxuICovXG5yb3V0ZXIuY2hhbmdlU3RhdGUgPSBmdW5jdGlvbiAoKSB7ICAgIFxuICBpZih0aGlzLl9faXNvbGF0ZWQpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICBpZiAodGhpcy5fX2Rpc2FibGVDaGFuZ2UpIHtcbiAgICBkZWxldGUgdGhpcy5fX2Rpc2FibGVDaGFuZ2U7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKCk7XG4gIGxldCBoYXNoID0gdGhpcy5oYXNoTW9kZT8gJyc6IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7XG4gIGxldCBxdWVyeSA9IHRoaXMuZ2V0VXJsUXVlcnkoKTtcbiAgbGV0IHByZXZUcmFuc2l0aW9uID0gcm91dGVyLnRyYW5zaXRpb24gfHwgbnVsbDtcbiAgbGV0IHRyYW5zaXRpb24gPSByb3V0ZXIudHJhbnNpdGlvbiA9IG5ldyBUcmFuc2l0aW9uKHVybCwgcXVlcnksIGhhc2gsIHByZXZUcmFuc2l0aW9uKTtcbiAgbGV0IGxldmVsID0gMDtcbiBcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzdGF0ZS1jaGFuZ2UnLCB7IGRldGFpbDogdHJhbnNpdGlvbiB9KSk7XG5cbiAgY29uc3QgbmV4dCA9IChzdGF0ZXMsIG9uRW5kKSA9PiB7ICAgIFxuICAgIGlmICghc3RhdGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG9uRW5kICYmIG9uRW5kKCk7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldEFycmF5UGF0dGVybkNvbnRlbnQoc3RhdGVzLCB1cmwpO1xuXG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICByZXR1cm4gb25FbmQgJiYgb25FbmQoKTtcbiAgICB9XG5cbiAgICBsZXQgc3RhdGUgPSBjb250ZW50LnN0YXRlO1xuICAgIGxldCBwYXJhbXMgPSBjb250ZW50LnBhcmFtcztcbiAgICBsZXQgcm91dGUgPSBzdGF0ZS5hYnN0cmFjdD8gbnVsbDogdGhpcy5nZXRSb3V0ZShzdGF0ZS5sZXZlbCk7XG5cbiAgICBpZiAoIXJvdXRlICYmICFzdGF0ZS5hYnN0cmFjdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yIChgTm90IGZvdW5kIHJvdXRlIGNvbXBvbmVudCBmb3Igc3RhdGUgXCIke3N0YXRlLm5hbWV9XCJgKTtcbiAgICB9ICAgIFxuXG4gICAgdHJhbnNpdGlvbi5zZXRQYXRoKHsgc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gsIGNvbXBvbmVudDogcm91dGUsIGxvYWRlZDogdHJ1ZSB9KTtcbiAgICBsZXZlbCsrO1xuXG4gICAgbGV0IGhhc1N0YXRlID0gcHJldlRyYW5zaXRpb24gJiYgcHJldlRyYW5zaXRpb24uaGFzU3RhdGUoc3RhdGUpO1xuICAgIGxldCBpc0RpZmZlcmVudCA9IHRydWU7XG4gICAgIFxuICAgIGlmIChoYXNTdGF0ZSkge1xuICAgICAgbGV0IHJvdXRlID0gcHJldlRyYW5zaXRpb24uZ2V0Um91dGUoc3RhdGUpOyAgICAgIFxuICAgICAgbGV0IHByZXYgPSB7IHBhcmFtczogcm91dGUucGFyYW1zLCBxdWVyeTogcm91dGUucXVlcnksIGhhc2g6IHJvdXRlLmhhc2ggfTtcbiAgICAgIGxldCBjdXJyZW50ID0geyBwYXJhbXMsIHF1ZXJ5LCBoYXNoIH07XG4gICAgICBpc0RpZmZlcmVudCA9ICF1dGlscy5jb21wYXJlKHByZXYsIGN1cnJlbnQpO1xuICAgIH1cblxuICAgIHRyYW5zaXRpb24ucGF0aC5sb2FkZWQgPSBpc0RpZmZlcmVudCAmJiB0aGlzLl9fb3B0aW9ucy5yZWxvYWQgIT09IGZhbHNlO1xuICAgIFxuICAgIFByb21pc2UucmVzb2x2ZSh0cmFuc2l0aW9uLnBhdGgubG9hZGVkPyBzdGF0ZS5oYW5kbGVyKHRyYW5zaXRpb24pOiB0cmFuc2l0aW9uLnBhdGguZGF0YSkudGhlbigoZGF0YSkgPT4geyAgXG4gICAgICBpZiAodHJhbnNpdGlvbi5fX2NhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gb25FbmQgJiYgb25FbmQoKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdHJhbnNpdGlvbi5wYXRoLmRhdGEgPSBkYXRhO1xuICAgICAgc3RhdGUudGl0bGUgJiYgKGRvY3VtZW50LnRpdGxlID0gdHlwZW9mIHN0YXRlLnRpdGxlID09ICdmdW5jdGlvbic/IHN0YXRlLnRpdGxlKHRyYW5zaXRpb24pOiBzdGF0ZS50aXRsZSk7XG5cbiAgICAgIGlmIChzdGF0ZS5hYnN0cmFjdCkge1xuICAgICAgICByZXR1cm4gbmV4dChzdGF0ZS5jaGlsZHJlbiwgb25FbmQpO1xuICAgICAgfVxuIFxuICAgICAgcm91dGUuc2V0VHJhbnNpdGlvbih0cmFuc2l0aW9uKS50aGVuKCgpID0+IHtcbiAgICAgICAgbmV4dChzdGF0ZS5jaGlsZHJlbiwgb25FbmQpO1xuICAgICAgfSkuY2F0Y2goKGVycikgPT4gb25FbmQgJiYgb25FbmQoZXJyKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBuZXh0KHRoaXMuZ2V0U3RhdGVzQnlMZXZlbCgwKSwgKGVycikgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICB9XG5cbiAgICAgIGlmICghdHJhbnNpdGlvbi5yb3V0ZXMubGVuZ3RoKSB7XG4gICAgICAgIGlmICh0aGlzLl9fcmVkaXJlY3RzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYFdyb25nIHJvdXRlciBkZWZhdWx0IHVybCBcIiR7dGhpcy5kZWZhdWx0VXJsfVwiYCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFVybCkge1xuICAgICAgICAgIGlmICh0aGlzLmRlZmF1bHRVcmwgPT0gdGhpcy5nZXRVcmwoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYE5vdCBmb3VuZCBhbnkgcm91dGVzYCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX19kaXNhYmxlQ2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnNldFVybCh0aGlzLmRlZmF1bHRVcmwpO1xuICAgICAgICAgIHRoaXMuX19yZWRpcmVjdHMrKztcblxuICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZVN0YXRlKCkudGhlbihyZXNvbHZlKS5jYXRjaChyZWplY3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUud2FybihgTm90IGZvdW5kIGEgZGVmYXVsdCByb3V0ZS4gWW91IGNhbiBwYXNzIGl0IGluIFwicm91dGVyLmluaXQoZGVmYXVsdFVybClcIiBmdW5jdGlvbmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmICghdGhpcy5fX29wdGlvbnMuc2F2ZVNjcm9sbFBvc2l0aW9uICYmICF0cmFuc2l0aW9uLmhhc2gpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9fb3B0aW9ucyA9IHt9O1xuICAgICAgdGhpcy5fX3JlZGlyZWN0cyA9IDA7XG5cbiAgICAgIGlmIChwcmV2VHJhbnNpdGlvbikge1xuICAgICAgICBmb3IgKGxldCBpID0gbGV2ZWwsIGwgPSBwcmV2VHJhbnNpdGlvbi5yb3V0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgbGV0IHJvdXRlID0gcHJldlRyYW5zaXRpb24ucm91dGVzW2ldOyAgICAgICAgICBcbiAgICAgICAgICByb3V0ZS5jb21wb25lbnQgJiYgcm91dGUuY29tcG9uZW50LmVtcHR5KCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzdGF0ZS1jaGFuZ2VkJywgeyBkZXRhaWw6IHRyYW5zaXRpb24gfSkpO1xuICAgICAgcmVzb2x2ZSh0cmFuc2l0aW9uKTsgIFxuICAgIH0pO1xuICB9KTtcbn07XG5cbi8qKlxuICogRGVpbml0IHJvdXRlclxuICovXG5yb3V0ZXIuZGVpbml0ID0gZnVuY3Rpb24gKCkge1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIpO1xuICByb3V0ZXIuc2V0RGVmYXVsdHMoKTtcbn07XG5cbnJvdXRlci5UcmFuc2l0aW9uID0gVHJhbnNpdGlvbjtcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbnJvdXRlci5zZXREZWZhdWx0cygpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2aWNlcy9yb3V0ZXIuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgY29uZGl0aW9uYWwgc3RhdGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfY29uZGl0aW9uYWxfc3RhdGVtZW50c31cbiAqIFxuICogQHRhZyBpZlxuICogQHNlbGVjdG9yIGlmW2lzXVxuICogQGF0dHIge2Jvb2xlYW59IGlzIC0gc2hvdyB0aGUgZWxlbWVudCBjb250ZW50IG9yIG5vdFxuICogQGF0dHIge2Jvb2xlYW59IHJlY3JlYXRlIC0gZGVsZXRlIHRoZSBjb250ZW50IGFuZCByZWNyZWF0ZSBvciBqdXN0IHNob3cvaGlkZSBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWYgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgdHJhbnNwYXJlbnQgPSB0cnVlOyBcbiAgc3RhdGljIG1hdGNoZXMgPSAnW2lzXSc7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsncmVjcmVhdGUnXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaWYnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2Vsc2UtaWYnLCB0aGlzLkVsc2VJZik7XG4gICAgQWtpbGkuY29tcG9uZW50KCdlbHNlJywgdGhpcy5FbHNlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5zdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5yZWNyZWF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuaXNDb21waWxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGlzcGxheSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5lbCkuZGlzcGxheTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cigncmVjcmVhdGUnLCB0aGlzLnNldFJlY3JlYXRpb24pO1xuICAgIHJldHVybiB0aGlzLmF0dHIoJ2lzJywgdmFsID0+ICh0aGlzLnN0YXRlID0gISF2YWwsIHRoaXMuc2V0U3RhdGUoKSkpO1xuICB9XG5cbiAgc2V0QWN0aXZpdHkoYWN0aXZlKSB7XG4gICAgdGhpcy5hY3RpdmUgPSBhY3RpdmU7XG4gIH1cblxuICBzZXRSZWNyZWF0aW9uKHJlY3JlYXRlKSB7XG4gICAgdGhpcy5yZWNyZWF0ZSA9IHJlY3JlYXRlO1xuICB9XG5cbiAgc2V0U3RhdGUoKSB7XG4gICAgbGV0IHJlcyA9IHRoaXMuY29tcGlsYXRpb24oKTtcbiAgICBsZXQgbmV4dCA9IHRoaXMuZWwubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGxldCByZXN1bHQ7XG5cbiAgICBpZiAoIW5leHQgfHwgIW5leHQubWF0Y2hlcygnZWxzZS1pZixlbHNlJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXh0Ll9fYWtpbGkuc2V0QWN0aXZpdHkodGhpcy5hY3RpdmUgfHwgdGhpcy5zdGF0ZSk7XG4gICAgbmV4dC5fX2FraWxpLnNldFJlY3JlYXRpb24odGhpcy5yZWNyZWF0ZSk7XG4gICAgcmVzdWx0ID0gbmV4dC5fX2FraWxpLnNldFN0YXRlKCk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMpLnRoZW4oKCkgPT4gIHJlc3VsdCk7XG4gIH1cblxuICBjb21waWxhdGlvbigpIHtcbiAgICBsZXQgcmVzO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUgJiYgIXRoaXMuYWN0aXZlKSB7XG4gICAgICBpZiAodGhpcy5yZWNyZWF0ZSB8fCAhdGhpcy5pc0NvbXBpbGVkKSB7XG4gICAgICAgIHJlcyA9IHRoaXMuY29tcGlsZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmRpc3BsYXk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHRoaXMucmVjcmVhdGUpIHtcbiAgICAgICAgdGhpcy5lbXB0eSgpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIXRoaXMuaXNDb21waWxlZCkge1xuICAgICAgICByZXMgPSB0aGlzLmNvbXBpbGUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGNvbXBpbGUoKSB7XG4gICAgbGV0IHJlcztcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMuaHRtbDsgICAgXG4gICAgcmVzID0gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICB0aGlzLmlzQ29tcGlsZWQgPSB0cnVlO1xuICAgIHJldHVybiByZXM7XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGNvbmRpdGlvbmFsIHN0YXRlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NvbmRpdGlvbmFsX3N0YXRlbWVudHN9XG4gKiBcbiAqIEB0YWcgZWxzZS1pZlxuICogQHNlbGVjdG9yIGVsc2UtaWZbaXNdXG4gKiBAYXR0ciB7Ym9vbGVhbn0gaXMgQHNlZSBJZlxuICovXG5leHBvcnQgY2xhc3MgRWxzZUlmIGV4dGVuZHMgSWYge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGNvbmRpdGlvbmFsIHN0YXRlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NvbmRpdGlvbmFsX3N0YXRlbWVudHN9XG4gKiBcbiAqIEB0YWcgZWxzZVxuICovXG5leHBvcnQgY2xhc3MgRWxzZSBleHRlbmRzIEVsc2VJZiB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2lzJywgJ3RydWUnKTtcbiAgfVxufVxuXG5JZi5FbHNlSWYgPSBFbHNlSWY7XG5JZi5FbHNlID0gRWxzZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pZi5qcyIsImltcG9ydCBGb3IsIHsgTG9vcCB9IGZyb20gJy4vZm9yLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggc2VsZWN0LlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19zZWxlY3R9XG4gKiBcbiAqIEB0YWcgc2VsZWN0ICBcbiAqIEBhdHRyIHtzdHJpbmd9IHZhbHVlIC0gYWN0dWFsIHZhbHVlXG4gKiBAYXR0ciBbaW5dIEBzZWUgRm9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnbXVsdGlwbGUnXS5jb25jYXQoRm9yLmJvb2xlYW5BdHRyaWJ1dGVzKTtcbiAgc3RhdGljIGV2ZW50cyA9IFsnY2hhbmdlJ10uY29uY2F0KEZvci5ldmVudHMpO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdzZWxlY3QnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ29wdGlvbicsIHRoaXMuT3B0aW9uKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXRlcmF0b3JUYWdOYW1lID0gJ29wdGlvbic7XG4gICAgdGhpcy5pc011bHRpcGxlID0gZmFsc2U7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5lbC5jb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7IFxuICAgIGxldCByZXMgPSBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAgIFxuICAgIHRoaXMuYXR0cignbXVsdGlwbGUnLCB0aGlzLnNldE11bHRpcGxlKTtcbiAgICB0aGlzLmF0dHIoJ2NvbnRlbnQnLCB0aGlzLnNldENvbnRlbnQpO1xuICAgIHRoaXMuYXR0cignaW4nLCB0aGlzLmRyYXdTZWxlY3QpO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBzZXRNdWx0aXBsZSh2YWx1ZSkge1xuICAgIHRoaXMuaXNNdWx0aXBsZSA9IHZhbHVlO1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5mb3JtYXRWYWx1ZSh1dGlscy5jb3B5KHRoaXMuZWwuY29udGVudCkpKTtcbiAgfVxuXG4gIHNldENvbnRlbnQodmFsdWUpIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUodmFsdWUpKTtcbiAgfVxuXG4gIGRyYXdTZWxlY3QoKSB7XG4gICAgbGV0IHNlbGVjdGVkID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV0uX19ha2lsaTtcbiAgICAgIGxldCBzZWxlY3Rpb24gPSBvcHRpb24uYXR0cnMuc2VsZWN0ZWQ7XG5cbiAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgc2VsZWN0ZWQucHVzaChvcHRpb24uZWwudmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBvcHRpb24uZWwuc2VsZWN0ZWQgPSBzZWxlY3Rpb247XG4gICAgfVxuXG4gICAgaWYgKCFzZWxlY3RlZC5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVkZWZpbmUoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUoc2VsZWN0ZWQpKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVJdGVyYXRvckVsZW1lbnQoKSB7XG4gICAgbGV0IGVsID0gc3VwZXIuY3JlYXRlSXRlcmF0b3JFbGVtZW50KCk7XG5cbiAgICBpZiAoIWVsLmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRoaXMuaHRtbC50cmltKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgaWYgKCF0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsLnZhbHVlO1xuICAgIH1cblxuICAgIGxldCBjb250ZW50ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgIGlmIChvcHRpb24uc2VsZWN0ZWQpIHtcbiAgICAgICAgY29udGVudC5wdXNoKG9wdGlvbi52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBmb3JtYXRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCk/IFt2YWx1ZV06IFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLmxlbmd0aD8gdmFsdWVbMF06ICcnO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmVkZWZpbmUoKSB7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmdldENvbnRlbnQoKSk7XG4gIH1cblxuICBjaGFuZ2VWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh1dGlscy5jb21wYXJlKHRoaXMuZWwuY29udGVudCwgdmFsdWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB0aGlzLmVsLnZhbHVlID0gdmFsdWVbdmFsdWUubGVuZ3RoIC0gMV07XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldO1xuXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHZhbHVlLmluZGV4T2Yob3B0aW9uLnZhbHVlKSAhPSAtMTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmVsLnZhbHVlID0gdmFsdWU7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldO1xuXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IG9wdGlvbi52YWx1ZSA9PSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmVsLmNvbnRlbnQgPSB2YWx1ZTtcbiAgICB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9wdGlvbiBleHRlbmRzIExvb3Age1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ3NlbGVjdGVkJ107XG5cbiAgX19nZXRQYXJzZWRFeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgICByZXR1cm4gdXRpbHMuZGVjb2RlSHRtbEVudGl0aWVzKGV4cHJlc3Npb24pO1xuICB9XG5cbiAgY2hhbmdlZFNlbGVjdGVkKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTZWxlY3RlZCh2YWx1ZSk7XG4gIH1cblxuICBzZXRTZWxlY3RlZCh2YWx1ZSkge1xuICAgIHRoaXMuZWwuc2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICB0aGlzLmZvci5yZWRlZmluZSgpO1xuICB9XG59XG5cblNlbGVjdC5PcHRpb24gPSBPcHRpb247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvc2VsZWN0LmpzIiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCBpbnB1dCBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW5wdXR9XG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jaGVja2JveF9hbmRfcmFkaW99XG4gKiBcbiAqIEB0YWcgaW5wdXRcbiAqIEBhdHRyIEBzZWUgVGV4dFxuICogQG1lc3NhZ2UgQHNlZSBUZXh0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnY2hlY2tlZCcsICdtdWx0aXBsZSddLmNvbmNhdChUZXh0LmJvb2xlYW5BdHRyaWJ1dGVzKTtcbiAgc3RhdGljIGV2ZW50cyA9IFsnY2hhbmdlJ10uY29uY2F0KFRleHQuZXZlbnRzKTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaW5wdXQnLCB0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXNDaGVja2JveCA9IHRoaXMuZWwudHlwZSA9PSAnY2hlY2tib3gnO1xuICAgIHRoaXMuaXNSYWRpbyA9IHRoaXMuZWwudHlwZSA9PSAncmFkaW8nOyAgICBcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgaWYodGhpcy5pc1JhZGlvIHx8IHRoaXMuaXNDaGVja2JveCkge1xuICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRDaGVja2VkKHRoaXMuZWwuY2hlY2tlZCwgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfVxuICAgXG4gICAgcmV0dXJuIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJlc29sdmVkKCkge1xuICAgICh0aGlzLmlzQ2hlY2tib3ggfHwgdGhpcy5pc1JhZGlvKSAmJiB0aGlzLmF0dHIoJ2NoZWNrZWQnLCB0aGlzLnNldENoZWNrZWQpO1xuICAgIHJldHVybiBzdXBlci5yZXNvbHZlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9ICBcblxuICBzZXRDaGVja2VkKHZhbHVlLCB0cmlnZ2VyID0gdHJ1ZSkge1xuICAgIHZhbHVlID0gISF2YWx1ZTtcblxuICAgIGlmICh0aGlzLnByZXZDaGVja2VkID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZWwuY2hlY2tlZCA9IHRoaXMucHJldkNoZWNrZWQgPSB2YWx1ZTtcbiAgICB0cmlnZ2VyICYmIHRoaXMuYXR0cnMub25DaGFuZ2UuZGlzcGF0Y2goRXZlbnQsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICB0aGlzLmlzUmFkaW8gJiYgdGhpcy5jaGFuZ2VSYWRpbygpO1xuICB9XG5cbiAgc2V0VmFsdWUoKSB7XG4gICAgc3VwZXIuc2V0VmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLmlzUmFkaW8gJiYgdGhpcy5hdHRycy5vbkNoYW5nZS5kaXNwYXRjaChFdmVudCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICB9XG5cbiAgY2hhbmdlUmFkaW8oKSB7XG4gICAgbGV0IG5hbWUgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICAgIGxldCBzZWxlY3RvciA9IGBpbnB1dFt0eXBlPXJhZGlvXVtuYW1lPScke25hbWV9J106bm90KFtzY29wZT0nJHt0aGlzLnNjb3BlLl9fbmFtZX0nXSlgO1xuICAgIGxldCBjaGlsZHJlbiA9IEFraWxpLnJvb3QuY2hpbGRyZW4oc2VsZWN0b3IpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuICAgICAgcmFkaW8uc2V0Q2hlY2tlZChyYWRpby5lbC5jaGVja2VkKTtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pbnB1dC5qcyIsImltcG9ydCBGb3IsIHsgTG9vcCB9IGZyb20gJy4vZm9yLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCByYWRpbyBncm91cC5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfcmFkaW9fZ3JvdXB9XG4gKiBcbiAqIEB0YWcgcmFkaW9cbiAqIEBzZWxlY3RvciByYWRpb1tuYW1lXVxuICogQGF0dHIge3N0cmluZ30gbmFtZSAtIG5hbWUgb2YgdGhlIGdyb3VwXG4gKiBAYXR0ciB7c3RyaW5nfG51bGx9IHZhbHVlIC0gc2VsZWN0ZWQgdmFsdWVcbiAqIEBhdHRyIFtpbl0gQHNlZSBGb3JcbiAqIEBtZXNzYWdlIHtzdHJpbmd9IHJhZGlvIC0gc2VudCBvbiB2YWx1ZSBjaGFuZ2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaW8gZXh0ZW5kcyBGb3Ige1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbbmFtZV0nO1xuICBzdGF0aWMgZXZlbnRzID0gWydyYWRpbyddLmNvbmNhdChGb3IuZXZlbnRzKTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgncmFkaW8nLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JhZGlvLWJ1dHRvbicsIHRoaXMuUmFkaW9CdXR0b24pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pdGVyYWJsZSA9IHRoaXMuZWwuaGFzQXR0cmlidXRlKCdpbicpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLmdldFJhZGlvVmFsdWUoKTtcblxuICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMucHJldlZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5hdHRycy5vblJhZGlvLnRyaWdnZXIodmFsdWUsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYodGhpcy5pdGVyYWJsZSkge1xuICAgICAgcmV0dXJuIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICByZXNvbHZlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ2luJywgdGhpcy5zZXROYW1lcywgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7ICAgXG4gICAgdGhpcy5hdHRyKCd2YWx1ZScsIHRoaXMuc2V0VmFsdWUpOyBcbiAgICB0aGlzLmF0dHIoJ25hbWUnLCB0aGlzLnNldE5hbWVzKTtcbiAgICByZXR1cm4gc3VwZXIucmVzb2x2ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHNldE5hbWVzKG5hbWUpIHtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNoaWxkcmVuW2ldLmVsLnNldEF0dHJpYnV0ZSgnbmFtZScsIG5hbWUgfHwgdGhpcy5hdHRycy5uYW1lKTtcbiAgICB9XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5wcmV2VmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcHJldiA9IHRoaXMucHJldlZhbHVlO1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oJ2lucHV0W3R5cGU9cmFkaW9dJyk7XG4gICAgbGV0IGlzVHJ1ZSA9IGZhbHNlO1xuICAgIHRoaXMucHJldlZhbHVlID0gdmFsdWU7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJhZGlvID0gY2hpbGRyZW5baV07XG4gICAgICBsZXQgaXNTZWxlY3RlZCA9IHJhZGlvLmVsLnZhbHVlID09PSB2YWx1ZTtcblxuICAgICAgaXNTZWxlY3RlZCAmJiAoaXNUcnVlID0gdHJ1ZSk7XG4gICAgICByYWRpby5zZXRDaGVja2VkKGlzU2VsZWN0ZWQpO1xuICAgIH1cblxuICAgIGlmICghaXNUcnVlKSB7XG4gICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgaWYgKHByZXYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMucHJldlZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hdHRycy5vblJhZGlvLnRyaWdnZXIodmFsdWUsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgfVxuXG4gIGdldFJhZGlvVmFsdWUoKSB7XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbignaW5wdXRbdHlwZT1yYWRpb10nKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcmFkaW8gPSBjaGlsZHJlbltpXTtcblxuICAgICAgaWYgKHJhZGlvLmVsLmNoZWNrZWQpIHtcbiAgICAgICAgcmV0dXJuIHJhZGlvLmVsLnZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCByYWRpbyBncm91cCBpdGVtLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19yYWRpb19ncm91cH1cbiAqIFxuICogQHRhZyByYWRpby1idXR0b25cbiAqIEBhdHRyIHtzdHJpbmd9IHZhbHVlIC0gdmFsdWVcbiAqL1xuZXhwb3J0IGNsYXNzIFJhZGlvQnV0dG9uIGV4dGVuZHMgTG9vcCB7XG4gIHN0YXRpYyB0ZW1wbGF0ZSA9ICc8bGFiZWw+PGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiJHt0aGlzLnZhbHVlfVwiLz4ke3RoaXMuX19jb250ZW50fTwvbGFiZWw+JztcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ3ZhbHVlJywgJ3ZhbHVlJyk7XG4gICAgcmV0dXJuIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cbn1cblxuUmFkaW8uUmFkaW9CdXR0b24gPSBSYWRpb0J1dHRvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9yYWRpby5qcyIsImltcG9ydCBUZXh0IGZyb20gJy4vdGV4dC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggdGV4dGFyZWEuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX3RleHRhcmVhfVxuICogXG4gKiBAdGFnIHRleHRhcmVhXG4gKiBAYXR0ciBAc2VlIFRleHRcbiAqIEBtZXNzYWdlIEBzZWUgVGV4dFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0YXJlYSBleHRlbmRzIFRleHQge1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgndGV4dGFyZWEnLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RleHRhcmVhLmpzIiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBlbGVtZW50cyB3aXRoIGNvbnRlbnRlZGl0YWJsZSBhdHRyaWJ1dGUuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NvbnRlbnRlZGl0YWJsZX1cbiAqIFxuICogQHRhZyBjb250ZW50XG4gKiBAc2VsZWN0b3IgY29udGVudCxbY29udGVudGVkaXRhYmxlXVxuICogQGF0dHIgQHNlZSBUZXh0XG4gKiBAYXR0ciB7Ym9vbGVhbn0gW2VkaXRhYmxlXSAtIGVkaXRhYmxlIG9yIG5vdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50IGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdjb250ZW50JywgdGhpcyk7XG4gICAgQWtpbGkuYWxpYXMoJ1tjb250ZW50ZWRpdGFibGVdJywgJ2NvbnRlbnQnKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIGlmICh0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnZWRpdGFibGUnKSkge1xuICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdlZGl0YWJsZScpKTtcbiAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKCdlZGl0YWJsZScpO1xuICAgIH1cblxuICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpLmRpc3BsYXkgPT0gJ2lubGluZScpIHtcbiAgICAgIHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuXG4gICAgdGhpcy52YWx1ZUtleSA9ICdpbm5lckhUTUwnO1xuICB9XG5cbiAgc2V0RWxlbWVudEZvY3VzKCkge1xuICAgIGxldCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgbGV0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcblxuICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyh0aGlzLmVsKTtcbiAgICByYW5nZS5jb2xsYXBzZShmYWxzZSk7XG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gICAgdGhpcy5lbC5mb2N1cygpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvY29udGVudC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi9zZXJ2aWNlcy9yZXF1ZXN0LmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gaW5jbHVkZSB0ZW1wbGF0ZXMgYnkgdXJsLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19odG1sX3RlbXBsYXRlc31cbiAqIFxuICogQHRhZyBpbmNsdWRlXG4gKiBAc2VsZWN0b3IgaW5jbHVkZVt1cmxdXG4gKiBAYXR0ciB7c3RyaW5nfSB1cmwgLSB0ZW1wbGF0ZSBwYXRoXG4gKiBAYXR0ciB7bnVtYmVyfGZ1bmN0aW9ufGJvb2xlYW59IFtjYWNoZV0gLSByZXF1ZXN0IGNhY2hlIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvcmVxdWVzdHMjZG9jc19jYWNoZX1cbiAqIEBtZXNzYWdlIHt2b2lkfSBsb2FkIC0gc2VudCBvbiB0aGUgdGVtcGxhdGUgbG9hZFxuICogQG1lc3NhZ2Uge0Vycm9yfSBlcnJvciAtIHNlbnQgb24gZXJyb3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5jbHVkZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyB0cmFuc3BhcmVudCA9IHRydWU7IFxuICBzdGF0aWMgbWF0Y2hlcyA9ICdbdXJsXSc7XG4gIHN0YXRpYyBldmVudHMgPSBbJ2xvYWQnLCAnZXJyb3InXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaW5jbHVkZScsIHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5odG1sID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRyKCdjYWNoZScsIHRoaXMuc2V0Q2FjaGUpO1xuICAgIHJldHVybiB0aGlzLmF0dHIoJ3VybCcsIHRoaXMuc2V0VGVtcGxhdGUpO1xuICB9XG5cbiAgc2V0Q2FjaGUoY2FjaGUpIHtcbiAgICB0aGlzLmNhY2hlID0gY2FjaGU7XG4gIH1cblxuICBzZXRUZW1wbGF0ZSh1cmwpIHtcbiAgICB0aGlzLmNvbm5lY3Rpb24gJiYgdGhpcy5jb25uZWN0aW9uLmFib3J0KCk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQodXJsLCB7XG4gICAgICBjYWNoZTogdGhpcy5jYWNoZSxcbiAgICAgIG9uU3RhcnQ6ICh4aHIpID0+IHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0geGhyO1xuICAgICAgfVxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgICAgIHRoaXMuZW1wdHkoKTtcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5odG1sO1xuICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgcmVzLmRhdGEpO1xuXG4gICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5hdHRycy5vbkxvYWQudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICB9KTtcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICB0aGlzLmF0dHJzLm9uRXJyb3IudHJpZ2dlcihlcnIsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pbmNsdWRlLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgaWZyYW1lcy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIGlmcmFtZVxuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWZyYW1lIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaWZyYW1lJywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pZnJhbWUuanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBpbWFnZXMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBpbWdcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaW1nJywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pbWFnZS5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGVtYmVkIGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgZW1iZWRcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtYmVkIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnZW1iZWQnLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2VtYmVkLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgYXVkaW8gZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBhdWRpb1xuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW8gZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdhdWRpbycsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYXVkaW8uanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciB2aWRlbyBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIHZpZGVvXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlbyBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3ZpZGVvJywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy92aWRlby5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIHRyYWNrIGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgdHJhY2tcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYWNrIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgndHJhY2snLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RyYWNrLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3Igc291cmNlIGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgc291cmNlXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VyY2UgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdzb3VyY2UnLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3NvdXJjZS5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIG9iamVjdCBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIG9iamVjdFxuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0cyBleHRlbmRzIFVybCB7ICBcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy51cmxBdHRyaWJ1dGUgPSAnZGF0YSc7XG4gIH1cblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnb2JqZWN0JywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9vYmplY3QuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4uL3NlcnZpY2VzL3JvdXRlci5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgbGlua3MuXG4gKiBJdCB3b3JrcyB3aXRoIHJvdXRlciB0b28uIFxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19saW5rc31cbiAqIFxuICogQHRhZyBhXG4gKiBAc2VsZWN0b3IgYVtzdGF0ZV06bm90KFt1cmxdKSxhW3VybF06bm90KFtzdGF0ZV0pXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXSAtIHVybCB0byBnbyBvbiBjbGlja1xuICogQGF0dHIge3N0cmluZ30gW3N0YXRlXSAtIHN0YXRlIG9mIHJvdXRlciB0byBnbyBvbiBjbGljayB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmd9XG4gKiBAYXR0ciB7b2JqZWN0fSBbcGFyYW1zXSAtIHBhcmFtcyBmb3IgdGhlIHN0YXRlIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3N0YXRlX3BhcmFtc31cbiAqIEBhdHRyIHtvYmplY3R9IFtxdWVyeV0gLSBxdWVyeSBmb3IgdGhlIHN0YXRlIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3N0YXRlX3F1ZXJ5fVxuICogQGF0dHIge3N0cmluZ30gW2hhc2hdIC0gaGFzaCBmb3IgdGhlIHN0YXRlIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3N0YXRlX2hhc2h9XG4gKiBAYXR0ciB7b2JqZWN0fSBbb3B0aW9uc10gLSBvcHRpb25zIGZvciB0aGUgc3RhdGUge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3Nfcm91dGVyLmxvY2F0aW9ufVxuICogQHNjb3BlIHtib29sZWFufSBpc0FjdGl2ZVN0YXRlIC0gdGhlIHN0YXRlIGlzIGFjdGl2ZSBvciBub3QgXG4gKiBAc2NvcGUge2Jvb2xlYW59IGluQWN0aXZlU3RhdGUgLSB0aGUgc3RhdGUgaXMgcGFydCBvZiB0aGUgYWN0aXZlIHN0YXRlIG9yIG5vdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW3N0YXRlXTpub3QoW3VybF0pLFt1cmxdOm5vdChbc3RhdGVdKSc7XG4gIHN0YXRpYyBjb250cm9sQXR0cmlidXRlcyA9IHRydWU7XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2EnLCB0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuc3RhdGUgPSBudWxsO1xuICAgIHRoaXMucGFyYW1zID0ge307XG4gICAgdGhpcy5xdWVyeSA9IHt9O1xuICAgIHRoaXMuaGFzaCA9ICcnO1xuICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuICAgIHRoaXMuaXNVcmwgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZSgndXJsJyk7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAodGhpcy5pc1VybCkge1xuICAgICAgICByb3V0ZXIubG9jYXRpb24odGhpcy5hdHRycy51cmwsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcm91dGVyLnN0YXRlKHRoaXMuc3RhdGUubmFtZSwgdGhpcy5wYXJhbXMsIHRoaXMucXVlcnksIHRoaXMuaGFzaCwgIHRoaXMub3B0aW9ucyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2VkID0gKCkgPT4gdGhpcy5zdGF0ZSAmJiB0aGlzLnNldEFjdGl2aXR5KCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3N0YXRlLWNoYW5nZWQnLCB0aGlzLm9uU3RhdGVDaGFuZ2VkKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cignc3RhdGUnLCB0aGlzLnNldFN0YXRlKTtcbiAgICB0aGlzLmF0dHIoJ3BhcmFtcycsIHRoaXMuc2V0UGFyYW1zKTtcbiAgICB0aGlzLmF0dHIoJ3F1ZXJ5JywgdGhpcy5zZXRRdWVyeSk7XG4gICAgdGhpcy5hdHRyKCdoYXNoJywgdGhpcy5zZXRIYXNoKTtcbiAgICB0aGlzLmF0dHIoJ29wdGlvbnMnLCB0aGlzLnNldE9wdGlvbnMpO1xuICAgIHRoaXMuYXR0cigndXJsJywgdGhpcy5zZXRVcmwpO1xuICAgIHRoaXMuYXR0cignc3RhdGUnLCB0aGlzLnJlc2V0SHJlZiwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5hdHRyKCdwYXJhbXMnLCB0aGlzLnJlc2V0SHJlZiwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5hdHRyKCdxdWVyeScsIHRoaXMucmVzZXRIcmVmLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTtcbiAgICB0aGlzLmF0dHIoJ2hhc2gnLCB0aGlzLnJlc2V0SHJlZiwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5hdHRyKCd1cmwnLCB0aGlzLnJlc2V0SHJlZiwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5yZXNldEhyZWYoKTtcbiAgfVxuXG4gIHJlbW92ZWQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N0YXRlLWNoYW5nZWQnLCB0aGlzLm9uU3RhdGVDaGFuZ2VkKTtcbiAgfVxuXG4gIHNldFVybCh1cmwpIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgfVxuXG4gIHNldFN0YXRlKG5hbWUpIHtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5nZXRTdGF0ZShuYW1lKTtcbiAgICB0aGlzLnNldEFjdGl2aXR5KCk7XG4gIH1cblxuICBzZXRBY3Rpdml0eSgpIHtcbiAgICB0aGlzLnNjb3BlLmlzQWN0aXZlU3RhdGUgPSByb3V0ZXIuaXNBY3RpdmVTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgICB0aGlzLnNjb3BlLmluQWN0aXZlU3RhdGUgPSByb3V0ZXIuaW5BY3RpdmVTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHNldFBhcmFtcyhwYXJhbXMpIHtcbiAgICBpZiAodHlwZW9mIHBhcmFtcyAhPSAnb2JqZWN0JyB8fCAhcGFyYW1zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBwYXJhbXMgbXVzdCBiZSBhbiBvYmplY3RgKTtcbiAgICB9XG5cbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgfVxuXG4gIHNldFF1ZXJ5KHF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeSAhPSAnb2JqZWN0JyB8fCAhcXVlcnkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIHF1ZXJ5IG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICB9XG5cbiAgc2V0SGFzaChoYXNoKSB7XG4gICAgaWYgKHR5cGVvZiBoYXNoICE9ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBoYXNoIG11c3QgYmUgYSBzdHJpbmdgKTtcbiAgICB9XG5cbiAgICB0aGlzLmhhc2ggPSBoYXNoO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zICE9ICdvYmplY3QnIHx8ICFvcHRpb25zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBvcHRpb25zIG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIGdldFN0YXRlKG5hbWUpIHtcbiAgICBsZXQgc3RhdGUgPSByb3V0ZXIuZ2V0U3RhdGUobmFtZSk7XG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCByb3V0ZXIgc3RhdGUgd2l0aCBuYW1lIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgcmVzZXRIcmVmKCkge1xuICAgIGlmICh0aGlzLnVybCkge1xuICAgICAgdGhpcy5hdHRycy5ocmVmID0gdGhpcy51cmw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5hdHRycy5ocmVmID0gcm91dGVyLmNyZWF0ZVN0YXRlVXJsKHRoaXMuc3RhdGUsIHRoaXMucGFyYW1zLCB0aGlzLnF1ZXJ5LCB0aGlzLmhhc2gpO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2EuanMiXSwic291cmNlUm9vdCI6IiJ9