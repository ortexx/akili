/*!
 * Akili is a javascript framework
 * 
 * const Akili = makeItEasy(js + html);
 * 
 * @version 0.6.23
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
    var val = _utils2.default.getPropertyByKeys(prop.keys, prop.component.__scope);
    prop.component.__isResolved && prop.component.__triggerStoreAndAttr(prop.keys, val);
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
 * Isolate some window functions
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
     * Create an exception message
     * 
     * @param {Node} node 
     * @param {Error} err 
     */

  }, {
    key: '__createExceptionMessage',
    value: function __createExceptionMessage(node, err) {
      var tagName = node.__component.el.tagName;
      var attrName = node.__component.el.getAttribute('component');
      var componentName = (attrName || tagName).toLowerCase();
      var elementName = node.__element.tagName.toLowerCase();
      var attributeName = node instanceof window.Attr ? node.name.toLowerCase() : '';
      var messages = [err.message, node.__expression];
      attributeName && messages.push('[attribute ' + attributeName + ']');
      messages = messages.concat(['[element ' + elementName + ']', '[component ' + componentName + ']']);
      return 'Expression error: ' + messages.join('\n\tat ');
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
          evaluate = _this5.constructor.parse(evalComponent.__evaluationComponent.scope, parseValue);
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
      this.__evaluateNested(keys, false);

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

      try {
        evaluate = this.constructor.parse(this.__evaluationComponent.scope, expression[1], { event: e });
      } catch (err) {
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

      if (!this.__initializeNode(node, el)) {
        return;
      }

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

      var val = node[node instanceof window.Attr ? 'value' : 'nodeValue'].trim();
      var hasBinding = evaluationRegex.test(val);
      var isBoolean = /^boolean-/i.test(node.nodeName);
      var isEvent = /^on-(.+)/i.test(node.nodeName);

      if (!el.__akili && !hasBinding && !isBoolean && !isEvent) {
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
     * @protected
     */

  }, {
    key: '__deinitializeNode',
    value: function __deinitializeNode(node) {
      if (node.__event) {
        node.__event.unbind();
      }

      if (node.__hasBindings) {
        this.__parent && this.__parent.__akili.__evaluationComponent.__unbindByNodes([node]);
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
            _this9.__triggerStoreAndAttr(keys, value);
          }

          if (_akili2.default.__isolation) {
            _this9.__createIsolationObject(parents, key, false);
            return true;
          }

          if (_this9.__isResolved) {
            _this9.__triggerStoreAndAttr(keys, value);
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
            _this9.__triggerStoreAndAttr(keys, undefined);
          }

          if (_akili2.default.__isolation) {
            _this9.__createIsolationObject(parents, key, true);
            return true;
          }

          if (_this9.__isResolved) {
            _this9.__triggerStoreAndAttr(keys, undefined);
          }

          _this9.__evaluateByKeys(keys, undefined, true);
          return true;
        }
      });
    }

    /**
     * Trigger store and attributes change
     */

  }, {
    key: '__triggerStoreAndAttr',
    value: function __triggerStoreAndAttr(keys, value) {
      var keyString = _akili2.default.joinBindingKeys(keys);

      if (this.__storeLinks[keyString]) {
        this.__storeTriggerByKeys(keys, value);
      }

      if (this.__attrLinks[keyString]) {
        this.__attrTriggerByKeys(keys, value);
      }
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
     * Get the store of the disablement type
     * 
     * @param {string} type 
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

      value = _utils2.default.copy(value);
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
     * @param {boolean} [evaluated=false]
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
      statusErrorPattern: /^[^23]/,
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

          if (options.statusErrorPattern && (xhr.status + '').match(options.statusErrorPattern)) {
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

        xhr.onerror = reject;
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
            return opt.push(ks + ('[' + key + ']') + eq + encodeURIComponent(obj[k][key]));
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

var _route = __webpack_require__(10);

var _route2 = _interopRequireDefault(_route);

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
      return router.state.apply(router, arguments);
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
    return c instanceof _route2.default;
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

  var _this = this;

  var hash = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  (typeof state === 'undefined' ? 'undefined' : _typeof(state)) !== 'object' && (state = this.getState(state));

  if (!state) {
    throw new Error('Not found route state with name ' + state);
  }

  var _prepareStateArgs = this.prepareStateArgs(state, params, query, hash);

  params = _prepareStateArgs.params;
  query = _prepareStateArgs.query;
  hash = _prepareStateArgs.hash;

  var url = this.createStateUrl(state, params, query, hash, false);
  this.__options = options;
  this.__options.hashIsNull = hash === null;
  this.__options.manual = true;
  this.isolate(function () {
    return _this.setUrl(url);
  });
  return this.changeState();
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
  var _this2 = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { reload: false };

  this.__options = options;
  this.__options.manual = true;

  this.isolate(function () {
    if (_this2.hashMode) {
      window.location.hash = url;
    } else {
      window.history.pushState(null, '', url);
    }
  });

  return this.changeState();
};

/**
 * Router initialization. Should be called before Akili.init()
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

  if (prepare) {
    var _prepareStateArgs2 = this.prepareStateArgs(state, params, query, hash);

    params = _prepareStateArgs2.params;
    query = _prepareStateArgs2.query;
    hash = _prepareStateArgs2.hash;
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
 */
router.prepareStateArgs = function (state) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var hash = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;

  var args = { params: params, query: query, hash: hash };

  for (var i = 0; i < 9; i++) {
    var paramsTemp = this.prepareStateParams(state, params, args);
    var queryTemp = this.prepareStateQuery(state, query, args);
    var hashTemp = this.prepareStateHash(state, hash, args);
    args = { params: paramsTemp, query: queryTemp, hash: hashTemp };
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
 * Merge list items as transition objects
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
  var _this5 = this;

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

  window.dispatchEvent(new CustomEvent('state-change', { detail: transition }));

  var next = function next(states, onEnd) {
    if (!states.length) {
      return onEnd && onEnd();
    }

    var content = _this5.getArrayPatternContent(states, url);

    if (!content) {
      return onEnd && onEnd();
    }

    var state = content.state;
    transition.setPath({ state: state, component: route, loaded: true });
    var currentUrl = _this5.createStateUrl(state, content.params, query, hash, false);
    params = _extends({}, params, content.params);
    hash = hash || (_this5.__options.hashIsNull ? null : '');

    var _prepareStateArgs3 = _this5.prepareStateArgs(state, params, query, hash);

    params = _prepareStateArgs3.params;
    query = _prepareStateArgs3.query;
    hash = _prepareStateArgs3.hash;

    hash = hash || '';
    var realUrl = _this5.createStateUrl(state, params, query, hash, false);
    currentUrl != realUrl && _this5.isolate(function () {
      return _this5.setUrl(realUrl);
    });
    var route = state.abstract ? null : _this5.getRoute(level);

    if (!route && !state.abstract) {
      throw new Error('Not found route component for state "' + state.name + '"');
    }

    transition.path.params = params;
    transition.path.query = query;
    transition.path.hash = hash;
    transition.path.url = realUrl;
    !state.abstract && level++;
    var isDifferent = true;

    if (realUrl != url) {
      isDifferent = transition.isRouteChanged(transition.path);
    }

    transition.path.loaded = isDifferent && _this5.__options.reload !== false;

    Promise.resolve(transition.path.loaded ? state.handler(transition) : transition.path.data).then(function (data) {
      if (transition.__cancelled) {
        return Promise.resolve(data).then(function () {
          return onEnd && onEnd();
        }).catch(function (err) {
          return onEnd && onEnd(err);
        });
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
    next(_this5.getStatesByLevel(0), function (err) {
      if (err) {
        return reject(err);
      }

      if (!transition.routes.length) {
        if (_this5.__redirects) {
          return reject(new Error('Wrong router default url "' + _this5.defaultUrl + '"'));
        }

        if (_this5.defaultUrl) {
          if (_this5.defaultUrl == _this5.getUrl()) {
            return reject(new Error('Not found any routes'));
          }

          _this5.isolate(function () {
            return _this5.setUrl(_this5.defaultUrl);
          });
          _this5.__redirects++;
          return _this5.changeState().then(resolve).catch(reject);
        }

        if (_akili2.default.options.debug) {
          // eslint-disable-next-line no-console
          console.warn('Not found a default route. You can pass it in "router.init(defaultUrl)" function');
        }
      }

      if (!_this5.__options.saveScrollPosition && (!transition.path || !transition.path.hash)) {
        window.scrollTo(0, 0);
      }

      _this5.__options = {};
      _this5.__redirects = 0;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjE0Zjc0YjI0NmQ1YTA2ZWQxYzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FraWxpLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91cmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JvdXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaWYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JhZGlvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHRhcmVhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5jbHVkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZW1iZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdHJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc291cmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hLmpzIl0sIm5hbWVzIjpbIkFraWxpIiwiX19kZWZhdWx0cyIsInNldERlZmF1bHRzIiwib3B0aW9ucyIsImRlYnVnIiwiZ2xvYmFscyIsInV0aWxzIiwiX19pbml0IiwiX19jbGVhcmVkIiwiX19jb21wb25lbnRzIiwiX19hbGlhc2VzIiwiX19zY29wZXMiLCJfX3N0b3JlTGlua3MiLCJfX3dpbmRvdyIsIl9faXNvbGF0aW9uIiwiX19ldmFsdWF0aW9uIiwiX193cmFwcGluZyIsIl9fb25FcnJvciIsInRyaWdnZXJJbml0IiwiaHRtbEJvb2xlYW5BdHRyaWJ1dGVzIiwiY29tcG9uZW50cyIsInNlcnZpY2VzIiwiQ29tcG9uZW50IiwiRXZlbnRFbWl0dGVyIiwiU2NvcGUiLCJBIiwiQXVkaW8iLCJDb250ZW50IiwiRm9yIiwiRW1iZWQiLCJJZiIsIkluY2x1ZGUiLCJJbnB1dCIsIklmcmFtZSIsIkltYWdlIiwiT2JqZWN0IiwiUmFkaW8iLCJSb3V0ZSIsIlNlbGVjdCIsIlNvdXJjZSIsIlRleHQiLCJUZXh0YXJlYSIsIlRyYWNrIiwiVXJsIiwiVmlkZW8iLCJyZXF1ZXN0Iiwicm91dGVyIiwic3RvcmUiLCJkZWZpbmUiLCJlcnJvckhhbmRsaW5nIiwiaXNvbGF0ZUV2ZW50cyIsImlzb2xhdGVBcnJheVByb3RvdHlwZSIsImlzb2xhdGVXaW5kb3dGdW5jdGlvbnMiLCJpIiwibCIsImxlbmd0aCIsImRlZmF1bHRzIiwiZm4iLCJwdXNoIiwiY2xlYXJHbG9iYWxzIiwia2V5IiwiRWxlbWVudCIsInByb3RvdHlwZSIsIkFycmF5IiwidW53cmFwIiwid2luZG93Iiwic2V0VGltZW91dCIsInNldEludGVydmFsIiwiUHJvbWlzZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJqb2luQmluZGluZ0tleXMiLCJrZXlzIiwibWFwIiwiZWwiLCJ0b1N0cmluZyIsImpvaW4iLCJhZGRTY29wZSIsInNjb3BlIiwiX19uYW1lIiwiRXJyb3IiLCJnZXRTY29wZSIsIm5hbWUiLCJyZW1vdmVTY29wZSIsImdldEFraWxpUGFyZW50cyIsInRyZWUiLCJhcnIiLCJjaGVjayIsIm5vZGUiLCJwYXJlbnROb2RlIiwiX19ha2lsaSIsInNldFRlbXBsYXRlIiwidGVtcGxhdGUiLCJyZXBsYWNlIiwiaW5uZXJIVE1MIiwiY3JlYXRlU2NvcGVOYW1lIiwiY3JlYXRlUmFuZG9tU3RyaW5nIiwic3RyIiwiaXNvbGF0ZSIsInJlcyIsInByb3BzIiwiayIsImhhc093blByb3BlcnR5IiwicHJvcCIsInZhbCIsImdldFByb3BlcnR5QnlLZXlzIiwiY29tcG9uZW50IiwiX19zY29wZSIsIl9faXNSZXNvbHZlZCIsIl9fdHJpZ2dlclN0b3JlQW5kQXR0ciIsIl9fZXZhbHVhdGVCeUtleXMiLCJpc0RlbGV0ZWQiLCJ1bmV2YWx1YXRlIiwiZXZhbHVhdGlvbiIsIndyYXBwaW5nIiwidW5pc29sYXRlIiwiaXNvbGF0aW9uIiwibmV4dFRpY2siLCJyZXNvbHZlIiwidGhlbiIsImluaXRpYWxpemUiLCJyZWNvbXBpbGUiLCJfX3JlY29tcGlsZSIsImlzUm9vdCIsIl9fcm9vdCIsImNvbXBvbmVudE5hbWUiLCJ0b0Rhc2hDYXNlIiwiZ2V0QXR0cmlidXRlIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwiX0NvbXBvbmVudCIsIkNIRUNLX0FMSUFTRVMiLCJzZWxlY3RvcnMiLCJzZWxlY3RvckFsbCIsIm1hdGNoZXMiLCJzZWxlY3RvciIsIl9fY2FuY2VsbGVkIiwiZmluZCIsInAiLCJfX3ByZXZlbnQiLCJfX2NyZWF0ZSIsImNvbXBpbGUiLCJyb290IiwiZWxlbWVudHMiLCJuZXN0ZWRJbml0aWFsaXppbmciLCJjaGlsZHJlbiIsImNoaWxkIiwiX19jb21waWxlIiwiYWxsIiwiciIsIl9fcmVzb2x2ZSIsImNvbnNvbGUiLCJ3YXJuIiwidW5yZWdpc3RlckNvbXBvbmVudCIsImFsaWFzIiwidW5yZWdpc3RlckFsaWFzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsIm9sZCIsIl9faXNQcm94eSIsImFwcGx5IiwiYXJndW1lbnRzIiwiY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24iLCJBS0lMSV9TU1IiLCJjb25zdHJ1Y3RvciIsImNhdGNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsIl9fYWtpbGlMaXN0ZW5lcnMiLCJhcmdzIiwic2xpY2UiLCJjYWxsIiwibGluayIsImxpc3RlbmVyIiwic3BsaWNlIiwicG9zIiwiaXNBcnJheSIsIm51bSIsImluZGV4IiwiY2FsbGJhY2siLCJfX2lzb2xhdGVkIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwidmFsdWUiLCJ3cmFwIiwib2JqIiwiY3VycmVudCIsIndyYXBGdW5jdGlvbiIsImMiLCJkZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJyZXZlcnNlIiwiYWtpbGlXcmFwcGVkRnVuY3Rpb24iLCJzdGF0dXMiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJpbml0IiwiZG9jdW1lbnQiLCJib2R5IiwiZG9jdW1lbnRFbGVtZW50IiwiQUtJTElfU0VSVkVSIiwiaW5pdFNlcnZlclNpZGVIdG1sIiwiaHRtbCIsImluaXRTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlIiwicmVxdWVzdENhY2hlIiwiQUtJTElfQ0xJRU5UIiwicHJlcGFyZVNlcnZlclNpZGVIdG1sIiwiY2hhbmdlU3RhdGUiLCJwcmVwYXJlU2VydmVyU2lkZVJlcXVlc3RDYWNoZSIsImVyciIsImF0dHJpYnV0ZXMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJkb2MiLCJwYXJzZUZyb21TdHJpbmciLCJxdWVyeVNlbGVjdG9yIiwiYXR0ciIsInNldEF0dHJpYnV0ZSIsImluc3RhbmNlIiwiX19jYWNoZSIsIl9faW5zdGFuY2VzIiwib3V0ZXJIVE1MIiwiY2FjaGUiLCJfX21haW4iLCJkZWluaXQiLCJzdG9yZUtleXMiLCJfX3RhcmdldCIsImNsYXNzIiwiY2xhc3NlcyIsInN0eWxlIiwic3R5bGVzIiwic3BsaXQiLCJkZWwiLCJleGNsdWRlIiwiZXhwcyIsImxhc3QiLCJSZWdFeHAiLCJpbmRleE9mIiwib3BlbiIsImZpbHRlciIsImhhbmRsZXIiLCJtYXRjaCIsIml0ZW0iLCJmaWx0ZXJlZCIsInNvcnQiLCJvcmRlciIsImEiLCJiIiwiRGF0ZSIsImdldFRpbWUiLCJuZXh0IiwiYVYiLCJiViIsImluY2x1ZGVLZXlzIiwibmV3T2JqIiwib2JqS2V5cyIsImV4Y2x1ZGVLZXlzIiwiaXNTY29wZVByb3h5IiwiaXNQbGFpbk9iamVjdCIsImNvcHkiLCJuZXN0ZWQiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIm1ha2VBdHRyaWJ1dGVWYWx1ZSIsInVuZGVmaW5lZCIsImNvbXBhcmUiLCJjbGVhclVuZGVmaW5lZCIsImlnbm9yZVVuZGVmaW5lZCIsImFLZXlzIiwiYktleXMiLCJjb21wYXJlUHJldmlvdXNWYWx1ZSIsInByZXZpb3VzIiwicHJldmlvdXNDb3B5IiwiZW5jb2RlSHRtbEVudGl0aWVzIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiZGVjb2RlSHRtbEVudGl0aWVzIiwidG9DYW1lbENhc2UiLCJtIiwidG9VcHBlckNhc2UiLCJjYXBpdGFsaXplIiwib2JqZWN0IiwicmVkdWNlIiwibyIsImhhc1Byb3BlcnR5QnlLZXlzIiwiaGFzIiwic2V0UHJvcGVydHlCeUtleXMiLCJkZWxldGVQcm9wZXJ0eUJ5S2V5cyIsImdldEVudW1lcmFibGVQcm9wZXJ0eVRhcmdldCIsInRhcmdldCIsInByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJnZXRPd25Qcm9wZXJ0eVRhcmdldCIsIk1hdGgiLCJyYW5kb20iLCJzdWJzdHJpbmciLCJ1cmxBdHRyaWJ1dGUiLCJzZXRVcmwiLCJ1cmwiLCJhdHRycyIsImV2YWx1YXRpb25SZWdleCIsImV2YWx1YXRpb25SZWdleEdsb2JhbCIsInNvdXJjZSIsInN5c3RlbUF0dHJpYnV0ZXMiLCJjb250ZXh0IiwiZXhwcmVzc2lvbiIsInZhcnMiLCJGdW5jdGlvbiIsIl9faXNNb3VudGVkIiwiX19pc0NvbXBpbGVkIiwiX19iaW5kaW5ncyIsIl9fZXZhbHVhdGluZ0V2ZW50IiwiX19yZWNvbXBpbGluZyIsIl9fY29tcGlsaW5nIiwiX19kaXNhYmxlUHJveHkiLCJfX2Rpc2FibGVTdG9yZUtleXMiLCJfX2Rpc2FibGVBdHRyS2V5cyIsIl9fY2hpbGRyZW4iLCJfX3BhcmVudCIsIl9fcGFyZW50cyIsIl9fYXR0cnMiLCJfX2F0dHJMaW5rcyIsIl9fYXR0cmlidXRlT2YiLCJfX2V2YWx1YXRpb25Db21wb25lbnQiLCJjaGVja0NoYW5nZXMiLCJzZXRFdmVudHMiLCJzZXRQYXJlbnRzIiwic2V0Qm9vbGVhbkF0dHJpYnV0ZXMiLCJkZWZpbmVBdHRyaWJ1dGVzIiwiX19jcmVhdGVDb21waWxhdGlvbk9wdGlvbnMiLCJfX2NyZWF0ZVJlY29tcGlsYXRpb25PcHRpb25zIiwiX19zZXRFdmVudHMiLCJfX3NldFBhcmVudHMiLCJfX3NldEJvb2xlYW5BdHRyaWJ1dGVzIiwiX19kZWZpbmVBdHRyaWJ1dGVzIiwiX19pbml0aWFsaXplIiwiY3JlYXRlZCIsImNvbnRyb2wiLCJfX2NvbnRyb2xBdHRyaWJ1dGVzIiwiX19ldmFsdWF0ZVBhcmVudCIsIm5ld1BhcmVudCIsIl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzIiwiaW50ZXJwb2xhdGUiLCJwYXJlbnQiLCJub2RlVHlwZSIsIl9faW5pdGlhbGl6ZU5vZGUiLCJfX2V2YWx1YXRlTm9kZSIsImNoaWxkTm9kZXMiLCJvbkNvbXBpbGVkIiwidHJpZ2dlciIsImJ1YmJsZXMiLCJjb21waWxlZCIsInRlbXBsYXRlVXJsIiwiZ2V0IiwidGVtcGxhdGVDYWNoZSIsIl9fY29udGVudCIsImRhdGEiLCJvblJlY29tcGlsZWQiLCJyZWNvbXBpbGVkIiwib25SZXNvbHZlZCIsInJlc29sdmVkIiwiX3Njb3BlIiwiYXNzaWduIiwiY29udHJvbEF0dHJpYnV0ZXMiLCJldmVudHMiLCJfX2V2ZW50cyIsIl9fc2F2ZUF0dHJpYnV0ZVByb3h5SW4iLCJzYXZlQXR0cmlidXRlUHJveHlJbiIsIl9fc2F2ZUF0dHJpYnV0ZVByb3h5T3V0Iiwic2F2ZUF0dHJpYnV0ZVByb3h5T3V0IiwiX19uZXN0ZWRPYnNlcnZlIiwiYm9vbGVhbkF0dHJpYnV0ZXMiLCJjb25jYXQiLCJzZXRBdHRyIiwibm9kZU5hbWUiLCJoYXNBdHRyaWJ1dGUiLCJldiIsInRlc3QiLCJwYXJlbnRzIiwiZXZhbHVhdGVQYXJlbnQiLCJ0cmFuc3BhcmVudCIsIl9fZGV0YWNoIiwiX19hZGRDaGlsZCIsInNldFByb3RvdHlwZU9mIiwiX19wcm9wZXJ0aWVzIiwiX19nZXROb2RlUHJvcGVydHkiLCJfX2NvbXBvbmVudCIsImF0dHJOYW1lIiwiZWxlbWVudE5hbWUiLCJfX2VsZW1lbnQiLCJhdHRyaWJ1dGVOYW1lIiwiQXR0ciIsIm1lc3NhZ2VzIiwibWVzc2FnZSIsIl9fZXhwcmVzc2lvbiIsImNvdW50ZXIiLCJhdHRyaWJ1dGVWYWx1ZSIsImV2YWxDb21wb25lbnQiLCJjb20iLCJkIiwiZXZhbHVhdGUiLCJleGlzdGluZ0JpbmRpbmdzIiwicGFyZW50QmluZGluZ3MiLCJwYXJzZVZhbHVlIiwiX19nZXRQYXJzZWRFeHByZXNzaW9uIiwibGlzdCIsInBhcnNlIiwiX19jcmVhdGVFeGNlcHRpb25NZXNzYWdlIiwiaGFzaCIsIl9fY3JlYXRlS2V5c0hhc2giLCJwYXJlbnRzSGFzaCIsIm5vdEJpbmRpbmciLCJwYXJlbnRWYWx1ZSIsInJlYWxDb21wb25lbnQiLCJfX2JpbmRBbmRTZXRQcm9wZXJ0eSIsImV2YWx1YXRlZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJlIiwiYmluZCIsIl9fZ2V0Qm91bmROb2RlIiwiX19iaW5kIiwiX19zZXROb2RlUHJvcGVydHkiLCJ3aXRob3V0UGFyZW50cyIsImxhc3RQcm9wcyIsInByb3BzTGVuZ3RoIiwiZWxFdmFsdWF0ZSIsImVsZW1lbnQiLCJfX2dldEJpbmQiLCJfX2RhdGEiLCJfX2dldEFsbEJpbmRzIiwiX19jaGVja05vZGVQcm9wZXJ0eUNoYW5nZSIsIl9fZGlzYWJsZUtleXMiLCJjaGVja1Byb3AiLCJfX3NldCIsIl9rIiwiX3Byb3AiLCJfX2VuYWJsZUtleXMiLCJ1bmJpbmQiLCJfX2lzU3lzdGVtQmluZGluZ0tleSIsIl9rZXlzIiwiX19rZXlzIiwiX2lzRGVsZXRlZCIsImhhc0tleSIsInNoaWZ0IiwiX19ldmFsdWF0ZU5lc3RlZCIsIl9fdW5iaW5kIiwiZXhlYyIsImV2ZW50IiwiX19jaGVja0V2YWx1YXRpb24iLCJfX2V2YWx1YXRlIiwiaXNCb29sZWFuQXR0cmlidXRlIiwiY2xlYXJBdHRyaWJ1dGUiLCJjYW1lbEF0dHJpYnV0ZSIsIl9fYXR0cmlidXRlT24iLCJfX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIiLCJfX2F0dHJUcmlnZ2VyQnlOYW1lIiwiYXR0cmlidXRlT2YiLCJldmVudE5hbWUiLCJfX2V2ZW50IiwiZW1pdHRlciIsIl9fZXZhbHVhdGVFdmVudCIsIl9faW5pdGlhbGl6ZWQiLCJ0cmltIiwiaGFzQmluZGluZyIsImlzQm9vbGVhbiIsImlzRXZlbnQiLCJfX2lzRXZlbnQiLCJfX2hhc0JpbmRpbmdzIiwiX19pc0Jvb2xlYW4iLCJfX3VuYmluZEJ5Tm9kZXMiLCJfX2luaXRpYWxpemVBdHRyaWJ1dGUiLCJjaGFuZ2VBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGVOb2RlIiwiX19kZWluaXRpYWxpemVOb2RlIiwiUHJveHkiLCJzZXQiLCJhdHRyS2V5IiwiZGVsZXRlUHJvcGVydHkiLCJfX2lzU3lzdGVtS2V5IiwiZXhjQXJyIiwicmVhbFRhcmdldCIsImZvclBhcmVudHMiLCJmb3JEYXRhIiwicG9wIiwiX19iaW5kTm9kZSIsIl9fY2hlY2tEaXNhYmxlbWVudCIsIkNIRUNLX0VYSVNURU5DRSIsInRhcmdldFBhcmVudFZhbHVlIiwiX19jcmVhdGVJc29sYXRpb25PYmplY3QiLCJrZXlTdHJpbmciLCJfX3N0b3JlVHJpZ2dlckJ5S2V5cyIsIl9fYXR0clRyaWdnZXJCeUtleXMiLCJ0eXBlIiwicHJveHkiLCJfX2dldERpc2FibGVtZW50VHlwZVN0b3JlIiwiX19hbGwiLCJsaW5rcyIsIl9fc3RvcmVUcmlnZ2VyQnlOYW1lIiwiaW5mbyIsImRhdGUiLCJub3ciLCJjYWxsT25TdGFydCIsImF0dHJzS2V5cyIsInN0YXJ0S2V5cyIsIm9ic2VydmUiLCJDSEVDS19QUk9YWSIsIl9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyIsIl9fb2JzZXJ2ZSIsImlzb2xhdGlvbkhhc2giLCJ1cGRhdGVkQXQiLCJwYXJlbnRLZXlzU3RyaW5nIiwia2V5c1N0cmluZyIsImNvbGxlY3QiLCJfX2RlbGV0ZU5vZGVQcm9wZXJ0eSIsIm5vZGVzIiwiX19jbGVhckVtcHR5QmluZGluZ3MiLCJjbGVhciIsIl9fcmVtb3ZlIiwiX19jbGVhclN0b3JlTGlua3MiLCJvblJlbW92ZWQiLCJyZW1vdmVkIiwiX19zcGxpY2VDaGlsZCIsIl9fcmVtb3ZlQ2hpbGRyZW4iLCJmaW5kQWxsIiwibGV2ZWxzIiwibGV2ZWwiLCJyaWdodCIsImxldmVsRWxlbWVudHMiLCJ1bnNoaWZ0IiwiX19zdG9yZUJ5RnVuY3Rpb24iLCJfX3N0b3JlQnlLZXlzIiwiX19hdHRyQnlGdW5jdGlvbiIsIl9fYXR0ckJ5S2V5cyIsIl9fdW5zdG9yZUJ5RnVuY3Rpb24iLCJfX3Vuc3RvcmVCeUtleXMiLCJfX3VuYXR0ckJ5RnVuY3Rpb24iLCJfX3VuYXR0ckJ5S2V5cyIsIl9fZ2V0UGFyZW50IiwiX19nZXRDaGlsZHJlbiIsIl9fZ2V0TmVhciIsImFwcGVuZENoaWxkIiwiX19lbXB0eSIsIl9fZGVzdHJveSIsIlJlcXVlc3QiLCJiYXNlVXJsIiwiZ2V0SGVhZGVycyIsInhociIsImhlYWRlcnMiLCJnZXRBbGxSZXNwb25zZUhlYWRlcnMiLCJsaW5lIiwic3RhdHVzRXJyb3JQYXR0ZXJuIiwicmVqZWN0IiwibWV0aG9kIiwiWE1MSHR0cFJlcXVlc3QiLCJiZWZvcmUiLCJ0cmFuc2Zvcm1CZWZvcmUiLCJvblN0YXJ0IiwianNvbiIsInJlc3BvbnNlVHlwZSIsImZvcm0iLCJjcmVhdGVGb3JtRGF0YSIsInBhcmFtcyIsInBhcmFtc1RvUXVlcnkiLCJjcmVhdGVDYWNoZUhhc2giLCJ1c2VyIiwicGFzc3dvcmQiLCJfY2FjaGUiLCJnZXRDYWNoZSIsImNyZWF0ZWRBdCIsInRyYW5zZm9ybUFmdGVyIiwicmVzdWx0IiwidGltZW91dCIsIndpdGhDcmVkZW50aWFscyIsImhlYWRlcktleXMiLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25Qcm9ncmVzcyIsIm9ucHJvZ3Jlc3MiLCJvbmxvYWQiLCJyZXNwb25zZSIsInJlYWR5U3RhdGUiLCJzdGF0dXNUZXh0IiwicmVzcG9uc2VUZXh0IiwicmVzcG9uc2VYTUwiLCJyZXNwb25zZVVSTCIsImNyZWF0ZUNhY2hlIiwib250aW1lb3V0Iiwib25lcnJvciIsInNlbmQiLCJjaGFyIiwiY2hhckNvZGVBdCIsInNlcCIsImVxIiwia3MiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ2Iiwib3B0IiwicXVlcnkiLCJhbXBzIiwiZXFzIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwibmFtZXNwYWNlIiwiZmQiLCJGb3JtRGF0YSIsImFwcGVuZCIsInRvSVNPU3RyaW5nIiwiYWRkSW5zdGFuY2UiLCJyZW1vdmVJbnN0YW5jZSIsInZhbHVlS2V5IiwiZGVib3VuY2VJbnRlcnZhbCIsImRlYm91bmNlVGltZW91dCIsImNsZWFyVGltZW91dCIsIm9uRGVib3VuY2UiLCJzZXRGb2N1cyIsInNldFZhbHVlIiwic2V0RGVib3VuY2UiLCJpbnRlcnZhbCIsInNldEVsZW1lbnRGb2N1cyIsInNldEVsZW1lbnRCbHVyIiwiZm9jdXMiLCJibHVyIiwiTG9vcCIsIml0ZXJhdG9ycyIsIml0ZXJhdG9yUmVmIiwiaXRlcmF0b3JPdXRlckhUTUwiLCJyZXNldCIsImNyZWF0ZUl0ZXJhdG9yIiwiZHJhdyIsIm1hc2siLCJuZXh0U2libGluZyIsImNvbnRlbnQiLCJmaXJzdENoaWxkIiwiX19pbmRleCIsIl9fa2V5IiwiX192YWx1ZSIsIl9fY29tcGFyaXNvblZhbHVlIiwiaXRlcmF0b3IiLCJjQ29weSIsImNvbXBhcnNpb24iLCJzZXRJbmRleCIsInNldEtleSIsIl9fcHJvbWlzZXMiLCJjcmVhdGVJdGVyYXRvckVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJsb29wIiwiaXRlcmF0ZSIsIm9uT3V0IiwiX19pdGVyYXRvciIsImZvciIsImlzRm9yIiwiY2FuY2VsIiwiX19lbCIsInN0cmljdCIsImVsQ29tcG9uZW50IiwiZm9yY2UiLCJpbkV2YWx1YXRpbmciLCJwcmVwYXJlT3B0aW9ucyIsIl9FdmVudCIsInRyYW5zaXRpb24iLCJzdGF0ZSIsInBhdGgiLCJnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24iLCJfX3RyYW5zaXRpb24iLCJlbXB0eSIsImV4aXN0cyIsImxvYWRlZCIsIlRyYW5zaXRpb24iLCJyb3V0ZXMiLCJzdGF0ZXMiLCJyZWRpcmVjdCIsInJvdXRlIiwiaGFzU3RhdGUiLCJwYXJhbUtleXMiLCJmdWxsUGF0dGVybiIsIl9fcGFyYW1SZWdleCIsImYiLCJxdWVyeUtleXMiLCJ3YXRjaEhhc2giLCJwcmV2Um91dGUiLCJnZXRSb3V0ZSIsInByZXYiLCJoYXNoTW9kZSIsIl9fcmVkaXJlY3RzIiwiX19vcHRpb25zIiwiX19yb3V0ZVNlbGVjdG9yIiwiYWRkIiwicGF0dGVybiIsImRlZmF1bHRPcHRpb25zIiwiYWJzdHJhY3QiLCJzZXRTdGF0ZSIsImdldFN0YXRlIiwicHJlcGFyZVN0YXRlQXJncyIsImNyZWF0ZVN0YXRlVXJsIiwiaGFzaElzTnVsbCIsIm1hbnVhbCIsImJhY2siLCJoaXN0b3J5IiwiZ28iLCJmb3J3YXJkIiwibG9jYXRpb24iLCJyZWxvYWQiLCJwdXNoU3RhdGUiLCJkZWZhdWx0VXJsIiwib2xkUHVzaFN0YXRlIiwiZXJyb3IiLCJfX29uU3RhdGVDaGFuZ2VIYW5kbGVyIiwiaW5pdFN0YXRlIiwicGFyZW50TmFtZSIsInNwbGl0U2xhc2hlcyIsInJlbW92ZVN0YXRlIiwic2V0SGFzaFVybCIsInNldEhpc3RvcnlVcmwiLCJnZXRVcmwiLCJnZXRIYXNoVXJsIiwiZ2V0SGlzdG9yeVVybCIsInBhdGhuYW1lIiwic2VhcmNoIiwiZ2V0VXJsUXVlcnkiLCJnZXRIYXNoVXJsUXVlcnkiLCJnZXRIaXN0b3J5VXJsUXVlcnkiLCJwYXJhbXNGcm9tUXVlcnkiLCJwcmVwYXJlIiwicGFyYW1zVGVtcCIsInByZXBhcmVTdGF0ZVBhcmFtcyIsInF1ZXJ5VGVtcCIsInByZXBhcmVTdGF0ZVF1ZXJ5IiwiaGFzaFRlbXAiLCJwcmVwYXJlU3RhdGVIYXNoIiwiY3JlYXRlU3RhdGVBcmdzIiwiZXhjbHVkZWQiLCJnZXRQYXR0ZXJuQ29udGVudCIsInVybFBhdHRlcm4iLCJyZWdleCIsImlzSW5jbHVkZWQiLCJpc0FjdGl2ZVN0YXRlIiwiaW5jbHVkZXMiLCJpbkFjdGl2ZVN0YXRlIiwiZ2V0QXJyYXlQYXR0ZXJuQ29udGVudCIsImdldFN0YXRlc0J5TGV2ZWwiLCJwcmV2VHJhbnNpdGlvbiIsIm9uRW5kIiwic2V0UGF0aCIsImN1cnJlbnRVcmwiLCJyZWFsVXJsIiwiaXNEaWZmZXJlbnQiLCJpc1JvdXRlQ2hhbmdlZCIsInRpdGxlIiwic2V0VHJhbnNpdGlvbiIsInNhdmVTY3JvbGxQb3NpdGlvbiIsInNjcm9sbFRvIiwiRWxzZUlmIiwiRWxzZSIsImFjdGl2ZSIsInJlY3JlYXRlIiwiaXNDb21waWxlZCIsImRpc3BsYXkiLCJnZXRDb21wdXRlZFN0eWxlIiwic2V0UmVjcmVhdGlvbiIsImNvbXBpbGF0aW9uIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwic2V0QWN0aXZpdHkiLCJzZXRQcm9wZXJ0eSIsIk9wdGlvbiIsIml0ZXJhdG9yVGFnTmFtZSIsImlzTXVsdGlwbGUiLCJnZXRDb250ZW50Iiwic2V0TXVsdGlwbGUiLCJzZXRDb250ZW50IiwiZHJhd1NlbGVjdCIsImNoYW5nZVZhbHVlIiwiZm9ybWF0VmFsdWUiLCJzZWxlY3RlZCIsIm9wdGlvbiIsInNlbGVjdGlvbiIsInJlZGVmaW5lIiwib25DaGFuZ2UiLCJkaXNwYXRjaCIsIkV2ZW50Iiwic2V0U2VsZWN0ZWQiLCJpc0NoZWNrYm94IiwiaXNSYWRpbyIsInNldENoZWNrZWQiLCJjaGVja2VkIiwiY2hhbmdlUmFkaW8iLCJyYWRpbyIsIlJhZGlvQnV0dG9uIiwiaXRlcmFibGUiLCJnZXRSYWRpb1ZhbHVlIiwicHJldlZhbHVlIiwib25SYWRpbyIsInNldE5hbWVzIiwiaXNUcnVlIiwiaXNTZWxlY3RlZCIsInJhbmdlIiwiY3JlYXRlUmFuZ2UiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiY29ubmVjdGlvbiIsInNldENhY2hlIiwiYWJvcnQiLCJvbkxvYWQiLCJvbkVycm9yIiwiT2JqZWN0cyIsImlzVXJsIiwicHJldmVudERlZmF1bHQiLCJvblN0YXRlQ2hhbmdlZCIsInNldFBhcmFtcyIsInNldFF1ZXJ5Iiwic2V0SGFzaCIsInNldE9wdGlvbnMiLCJyZXNldEhyZWYiLCJocmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FB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QUVELGFBQU9ta0IsS0FBUDtBQUNEOzs7Z0NBRVc7QUFDVixVQUFJLEtBQUt6VyxHQUFULEVBQWM7QUFDWixhQUFLQyxLQUFMLENBQVdtZ0IsSUFBWCxHQUFrQixLQUFLcGdCLEdBQXZCO0FBQ0QsT0FGRCxNQUdLO0FBQ0gsYUFBS0MsS0FBTCxDQUFXbWdCLElBQVgsR0FBa0IsaUJBQU8xSCxjQUFQLENBQXNCLEtBQUtqQyxLQUEzQixFQUFrQyxLQUFLakcsTUFBdkMsRUFBK0MsS0FBS21DLEtBQXBELEVBQTJELEtBQUs3TCxJQUFoRSxDQUFsQjtBQUNEO0FBQ0Y7Ozs7OztBQW5Ia0JoWSxDLENBQ1o0RyxPLEdBQVUsdUM7QUFERTVHLEMsQ0FFWm1WLGlCLEdBQW9CLEk7a0JBRlJuVixDIiwiZmlsZSI6ImFraWxpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjE0Zjc0YjI0NmQ1YTA2ZWQxYzgiLCIvKipcbiAqIEphdmFzY3JpcHQgZnJhbWV3b3JrXG4gKlxuICogY29uc3QgQWtpbGkgPSBtYWtlSXRFYXN5KGpzICsgaHRtbCk7XG4gKlxuICogQGF1dGhvciBBbGV4YW5kciBCYWxhc3lhbiA8bXl3ZWJzdHJlZXRAZ21haWwuY29tPlxuICogQGxpbmsgaHR0cDovL2FraWxpanMuY29tXG4gKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgSWYgZnJvbSAnLi9jb21wb25lbnRzL2lmLmpzJztcbmltcG9ydCBGb3IgZnJvbSAnLi9jb21wb25lbnRzL2Zvci5qcyc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vY29tcG9uZW50cy9zZWxlY3QuanMnO1xuaW1wb3J0IElucHV0IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC5qcyc7XG5pbXBvcnQgUmFkaW8gZnJvbSAnLi9jb21wb25lbnRzL3JhZGlvLmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vY29tcG9uZW50cy90ZXh0LmpzJztcbmltcG9ydCBUZXh0YXJlYSBmcm9tICcuL2NvbXBvbmVudHMvdGV4dGFyZWEuanMnO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb21wb25lbnRzL2NvbnRlbnQuanMnO1xuaW1wb3J0IEluY2x1ZGUgZnJvbSAnLi9jb21wb25lbnRzL2luY2x1ZGUuanMnO1xuaW1wb3J0IElmcmFtZSBmcm9tICcuL2NvbXBvbmVudHMvaWZyYW1lLmpzJztcbmltcG9ydCBJbWFnZSBmcm9tICcuL2NvbXBvbmVudHMvaW1hZ2UuanMnO1xuaW1wb3J0IEVtYmVkIGZyb20gJy4vY29tcG9uZW50cy9lbWJlZC5qcyc7XG5pbXBvcnQgQXVkaW8gZnJvbSAnLi9jb21wb25lbnRzL2F1ZGlvLmpzJztcbmltcG9ydCBWaWRlbyBmcm9tICcuL2NvbXBvbmVudHMvdmlkZW8uanMnO1xuaW1wb3J0IFRyYWNrIGZyb20gJy4vY29tcG9uZW50cy90cmFjay5qcyc7XG5pbXBvcnQgU291cmNlIGZyb20gJy4vY29tcG9uZW50cy9zb3VyY2UuanMnO1xuaW1wb3J0IE9iamVjdHMgZnJvbSAnLi9jb21wb25lbnRzL29iamVjdC5qcyc7XG5pbXBvcnQgUm91dGUgZnJvbSAnLi9jb21wb25lbnRzL3JvdXRlLmpzJztcbmltcG9ydCBVcmwgZnJvbSAnLi9jb21wb25lbnRzL3VybC5qcyc7XG5pbXBvcnQgQSBmcm9tICcuL2NvbXBvbmVudHMvYS5qcyc7XG5pbXBvcnQgU2NvcGUgZnJvbSAnLi9zY29wZS5qcyc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlci5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuL3NlcnZpY2VzL3JvdXRlci5qcyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zZXJ2aWNlcy9zdG9yZS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5cbi8qKlxuICogVGhlIGZyYW1ld29yayBvYmplY3RcbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9nZXR0aW5nLXN0YXJ0ZWR9XG4gKi9cbmNvbnN0IEFraWxpID0ge307XG5cbkFraWxpLl9fZGVmYXVsdHMgPSBbXTtcblxuLyoqXG4gKiBTZXQgdGhlIGZyYW1ld29yaydzIGRlZmF1bHQgdmFyaWFibGVzXG4gKi9cbkFraWxpLnNldERlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgZGVidWc6IHRydWUsXG4gICAgZ2xvYmFsczogeyB1dGlscyB9XG4gIH07XG4gIFxuICB0aGlzLl9faW5pdCA9IG51bGw7XG4gIHRoaXMuX19jbGVhcmVkID0gZmFsc2U7XG4gIHRoaXMuX19jb21wb25lbnRzID0ge307XG4gIHRoaXMuX19hbGlhc2VzID0ge307XG4gIHRoaXMuX19zY29wZXMgPSB7fTtcbiAgdGhpcy5fX3N0b3JlTGlua3MgPSB7fTtcbiAgdGhpcy5fX3dpbmRvdyA9IHt9O1xuICB0aGlzLl9faXNvbGF0aW9uID0gbnVsbDtcbiAgdGhpcy5fX2V2YWx1YXRpb24gPSBudWxsO1xuICB0aGlzLl9fd3JhcHBpbmcgPSBmYWxzZTtcbiAgdGhpcy5fX29uRXJyb3IgPSAoKSA9PiB0aGlzLnRyaWdnZXJJbml0KGZhbHNlKTtcbiAgXG4gIHRoaXMuaHRtbEJvb2xlYW5BdHRyaWJ1dGVzID0gW1xuICAgICdkaXNhYmxlZCcsICdjb250ZW50ZWRpdGFibGUnLCAnaGlkZGVuJ1xuICBdO1xuXG4gIHRoaXMuY29tcG9uZW50cyA9IHt9O1xuICB0aGlzLnNlcnZpY2VzID0ge307XG5cbiAgdGhpcy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG4gIHRoaXMuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuICB0aGlzLlNjb3BlID0gU2NvcGU7XG4gIHRoaXMudXRpbHMgPSB1dGlscztcbiAgdGhpcy5jb21wb25lbnRzLkEgPSBBO1xuICB0aGlzLmNvbXBvbmVudHMuQXVkaW8gPSBBdWRpbztcbiAgdGhpcy5jb21wb25lbnRzLkNvbnRlbnQgPSBDb250ZW50O1xuICB0aGlzLmNvbXBvbmVudHMuRm9yID0gRm9yO1xuICB0aGlzLmNvbXBvbmVudHMuRW1iZWQgPSBFbWJlZDtcbiAgdGhpcy5jb21wb25lbnRzLklmID0gSWY7XG4gIHRoaXMuY29tcG9uZW50cy5JbmNsdWRlID0gSW5jbHVkZTtcbiAgdGhpcy5jb21wb25lbnRzLklucHV0ID0gSW5wdXQ7XG4gIHRoaXMuY29tcG9uZW50cy5JZnJhbWUgPSBJZnJhbWU7XG4gIHRoaXMuY29tcG9uZW50cy5JbWFnZSA9IEltYWdlO1xuICB0aGlzLmNvbXBvbmVudHMuT2JqZWN0ID0gT2JqZWN0cztcbiAgdGhpcy5jb21wb25lbnRzLlJhZGlvID0gUmFkaW87XG4gIHRoaXMuY29tcG9uZW50cy5Sb3V0ZSA9IFJvdXRlO1xuICB0aGlzLmNvbXBvbmVudHMuU2VsZWN0ID0gU2VsZWN0O1xuICB0aGlzLmNvbXBvbmVudHMuU291cmNlID0gU291cmNlO1xuICB0aGlzLmNvbXBvbmVudHMuVGV4dCA9IFRleHQ7XG4gIHRoaXMuY29tcG9uZW50cy5UZXh0YXJlYSA9IFRleHRhcmVhO1xuICB0aGlzLmNvbXBvbmVudHMuVHJhY2sgPSBUcmFjaztcbiAgdGhpcy5jb21wb25lbnRzLlVybCA9IFVybDtcbiAgdGhpcy5jb21wb25lbnRzLlZpZGVvID0gVmlkZW87XG4gIHRoaXMuc2VydmljZXMucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIHRoaXMuc2VydmljZXMucm91dGVyID0gcm91dGVyO1xuICB0aGlzLnNlcnZpY2VzLnN0b3JlID0gc3RvcmU7XG5cbiAgdGhpcy5kZWZpbmUoKTtcbiAgdGhpcy5lcnJvckhhbmRsaW5nKCk7XG4gIHRoaXMuaXNvbGF0ZUV2ZW50cygpO1xuICB0aGlzLmlzb2xhdGVBcnJheVByb3RvdHlwZSgpO1xuICB0aGlzLmlzb2xhdGVXaW5kb3dGdW5jdGlvbnMoKTsgXG4gIFxuICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5fX2RlZmF1bHRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHRoaXMuX19kZWZhdWx0c1tpXSgpO1xuICB9XG59XG5cbi8qKlxuICogRGVmaW5lIGFsbCBkZWZhdWx0IGNvbXBvbmVudHNcbiAqL1xuQWtpbGkuZGVmaW5lID0gZnVuY3Rpb24gKCkge1xuICBBLmRlZmluZSgpO1xuICBBdWRpby5kZWZpbmUoKTtcbiAgQ29udGVudC5kZWZpbmUoKTtcbiAgQ29tcG9uZW50LmRlZmluZSgpO1xuICBFbWJlZC5kZWZpbmUoKTtcbiAgRm9yLmRlZmluZSgpO1xuICBJbmNsdWRlLmRlZmluZSgpO1xuICBJZnJhbWUuZGVmaW5lKCk7XG4gIEltYWdlLmRlZmluZSgpO1xuICBJbnB1dC5kZWZpbmUoKTtcbiAgSWYuZGVmaW5lKCk7XG4gIE9iamVjdHMuZGVmaW5lKCk7XG4gIFJhZGlvLmRlZmluZSgpO1xuICBSb3V0ZS5kZWZpbmUoKTtcbiAgU2VsZWN0LmRlZmluZSgpO1xuICBTb3VyY2UuZGVmaW5lKCk7XG4gIFRleHRhcmVhLmRlZmluZSgpO1xuICBUcmFjay5kZWZpbmUoKTtcbiAgVmlkZW8uZGVmaW5lKCk7XG59O1xuXG4vKipcbiAqIFNldCBkZWZhdWx0c1xuICogXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiBcbiAqL1xuQWtpbGkuZGVmYXVsdHMgPSBmdW5jdGlvbihmbikgeyAgXG4gIHRoaXMuX19kZWZhdWx0cy5wdXNoKGZuKTtcbiAgZm4oKTtcbn1cblxuLyoqXG4gKiBDbGVhciB0aGUgZ2xvYmFsIGNvbnRleHRcbiAqL1xuQWtpbGkuY2xlYXJHbG9iYWxzID0gZnVuY3Rpb24gKCkge1xuICBpZih0aGlzLl9fY2xlYXJlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGZvciAobGV0IGtleSBpbiB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlKSB7XG4gICAgRWxlbWVudC5wcm90b3R5cGVba2V5XSA9IHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGVba2V5XTtcbiAgfVxuXG4gIGZvciAobGV0IGtleSBpbiB0aGlzLl9fd2luZG93LkFycmF5LnByb3RvdHlwZSkge1xuICAgIEFycmF5LnByb3RvdHlwZVtrZXldID0gdGhpcy5fX3dpbmRvdy5BcnJheS5wcm90b3R5cGVba2V5XTtcbiAgfVxuXG4gIGZvcihsZXQga2V5IGluIHRoaXMub3B0aW9ucy5nbG9iYWxzKSB7XG4gICAgdGhpcy5vcHRpb25zLmdsb2JhbHNba2V5XSA9IHRoaXMudW53cmFwKHRoaXMub3B0aW9ucy5nbG9iYWxzW2tleV0pO1xuICB9XG5cbiAgd2luZG93LnNldFRpbWVvdXQgPSB0aGlzLl9fd2luZG93LnNldFRpbWVvdXQ7XG4gIHdpbmRvdy5zZXRJbnRlcnZhbCA9IHRoaXMuX193aW5kb3cuc2V0SW50ZXJ2YWw7XG4gIHdpbmRvdy5Qcm9taXNlID0gdGhpcy5fX3dpbmRvdy5Qcm9taXNlO1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCB0aGlzLl9fb25FcnJvcik7XG4gIHRoaXMuX19jbGVhcmVkID0gdHJ1ZTtcbn07XG5cbi8qKlxuICogSm9pbiBiaW5kaW5nIGtleXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIGJpbmRpbmcga2V5c1xuICovXG5Ba2lsaS5qb2luQmluZGluZ0tleXMgPSBmdW5jdGlvbiAoa2V5cykge1xuICByZXR1cm4ga2V5cy5tYXAoZWwgPT4gZWwudG9TdHJpbmcoKSkuam9pbignLicpO1xufTtcblxuLyoqXG4gKiBBZGQgc2NvcGUgdG8gdGhlIHNjb3BlcyBsaXN0XG4gKlxuICogQHBhcmFtIHNjb3BlXG4gKi9cbkFraWxpLmFkZFNjb3BlID0gZnVuY3Rpb24gKHNjb3BlKSB7XG4gIGlmICh0aGlzLl9fc2NvcGVzW3Njb3BlLl9fbmFtZV0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFNjb3BlIG5hbWUgJHtzY29wZS5fX25hbWV9IGFscmVhZHkgZXhpc3RzYCk7XG4gIH1cblxuICB0aGlzLl9fc2NvcGVzW3Njb3BlLl9fbmFtZV0gPSBzY29wZTtcbn07XG5cbi8qKlxuICogR2V0IHNjb3BlIGZyb20gdGhlIHNjb3BlcyBsaXN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzY29wZSBuYW1lXG4gKiBAcmV0dXJucyB7U2NvcGV9XG4gKi9cbkFraWxpLmdldFNjb3BlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuX19zY29wZXNbbmFtZV07XG59O1xuXG4vKipcbiAqIERlbGV0ZSBzY29wZSBmcm9tIHRoZSBzY29wZXMgbGlzdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc2NvcGUgbmFtZVxuICovXG5Ba2lsaS5yZW1vdmVTY29wZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHRoaXMuX19zY29wZXNbbmFtZV0gPSBudWxsO1xuICBkZWxldGUgdGhpcy5fX3Njb3Blc1tuYW1lXTtcbn07XG5cbi8qKlxuICogR2V0IGFsbCBlbGVtZW50cyB3aXRoIGF0dGFjaGVkIEFraWxpIGNvbXBvbmVudHNcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFt0cmVlPXRydWVdIC0gcmV0dXJuIGFycmF5IG9mIHRoZSBwYXJlbnRzIGlmIHRydWUsIGNsb3Nlc3QgcGFyZW50IGlmIGZhbHNlXG4gKiBAcmV0dXJucyB7QXJyYXl8RWxlbWVudHxudWxsfVxuICovXG5Ba2lsaS5nZXRBa2lsaVBhcmVudHMgPSBmdW5jdGlvbiAoZWwsIHRyZWUgPSB0cnVlKSB7XG4gIGxldCBhcnIgPSBbXTtcblxuICBmdW5jdGlvbiBjaGVjayhub2RlKSB7XG4gICAgaWYgKCFub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5wYXJlbnROb2RlLl9fYWtpbGkpIHtcbiAgICAgIGFyci5wdXNoKG5vZGUucGFyZW50Tm9kZSk7XG5cbiAgICAgIGlmICghdHJlZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2sobm9kZS5wYXJlbnROb2RlKTtcbiAgfVxuXG4gIGNoZWNrKGVsKTtcbiAgcmV0dXJuIHRyZWU/IGFycjogYXJyWzBdO1xufTtcblxuLyoqXG4gKiBTZXQgZWxlbWVudCBpbm5lciBodG1sIHdpdGggY29udGVudCByZXBsYWNlbWVudFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwiPGk+SGVsbG88L2k+PGI+V29ybGQ8L2I+XCJcbiAqIGVsLmlubmVySFRNTCA9IFwiPGI+V29ybGQ8L2I+XCI7XG4gKiBBa2lsaS5zZXRUZW1wbGF0ZShlbCwgXCI8aT5IZWxsbzwvaT4ke3RoaXMuX19jaGlsZHJlbn1cIik7XG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5Ba2lsaS5zZXRUZW1wbGF0ZSA9IGZ1bmN0aW9uIChlbCwgdGVtcGxhdGUpIHtcbiAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKC9cXCR7KCgoPyFcXCR7KVxccyp0aGlzXFwuX19jb250ZW50XFxzKikqKX0vLCBlbC5pbm5lckhUTUwpO1xuICBlbC5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcblxuICByZXR1cm4gZWwuaW5uZXJIVE1MO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSB1bmlxdWUgc2NvcGUgbmFtZVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbkFraWxpLmNyZWF0ZVNjb3BlTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHV0aWxzLmNyZWF0ZVJhbmRvbVN0cmluZygxNiwgKHN0cikgPT4ge1xuICAgIHJldHVybiAhIXRoaXMuX19zY29wZXNbc3RyXTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIElzb2xhdGUgZnVuY3Rpb24uXG4gKiBFdmVyeSBzY29wZSB2YXJpYWJsZSBjaGFuZ2UgY2FsbHMgYWNjb3JkaW5nIG5vZGUgZXZhbHVhdGlvbi5cbiAqIEZvciBleGFtcGxlLCBpZiB5b3UgY2hhbmdlIHNvbWUgc2NvcGUgdmFyaWFibGUgaW4gdGhlIGxvb3AgLSBldmFsdWF0aW9uIHdpbGwgYmUgY2FsbGVkIG9uIHRoZSBlYWNoIGNoYW5nZS5cbiAqIEl0IG1heSBiZSBzbG93IGZvciB0aGUgYXBwbGljYXRpb24uXG4gKiBZb3UgY2FuIGlzb2xhdGUgdGhpcyBhY3Rpb24gYW5kIHJ1biBhbGwgZXZhbHVhdGlvbiBwcm9jZXNzIGFmdGVyIHBhc3NlZCBmdW5jdGlvbiBhdCBvbmNlLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkuaXNvbGF0ZSA9IGZ1bmN0aW9uIChmbikgeyBcbiAgaWYgKHRoaXMuX19pc29sYXRpb24pIHtcbiAgICByZXR1cm4gZm4oKTtcbiAgfVxuXG4gIHRoaXMuX19pc29sYXRpb24gPSB7fTtcbiAgbGV0IHJlcyA9IGZuKCk7XG4gIGxldCBwcm9wcyA9IFtdO1xuXG4gIGZvciAobGV0IGsgaW4gdGhpcy5fX2lzb2xhdGlvbikge1xuICAgIGlmICghdGhpcy5fX2lzb2xhdGlvbi5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcHJvcHMucHVzaCh0aGlzLl9faXNvbGF0aW9uW2tdKTtcbiAgfVxuXG4gIHRoaXMuX19pc29sYXRpb24gPSBudWxsO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gcHJvcHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgY29uc3QgcHJvcCA9IHByb3BzW2ldO1xuICAgIGNvbnN0IHZhbCA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKHByb3Aua2V5cywgcHJvcC5jb21wb25lbnQuX19zY29wZSk7ICAgIFxuICAgIHByb3AuY29tcG9uZW50Ll9faXNSZXNvbHZlZCAmJiBwcm9wLmNvbXBvbmVudC5fX3RyaWdnZXJTdG9yZUFuZEF0dHIocHJvcC5rZXlzLCB2YWwpO1xuICAgIHByb3AuY29tcG9uZW50Ll9fZXZhbHVhdGVCeUtleXMocHJvcC5rZXlzLCB2YWwsIHByb3AuaXNEZWxldGVkKTtcbiAgfVxuXG4gIHByb3BzID0gbnVsbDtcbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogU3RvcCBldmFsdWF0aW9uIGJlZm9yZSB0aGUgZnVuY3Rpb24gYW5kIGNvbnRpbnVlIGFmdGVyXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS51bmV2YWx1YXRlID0gZnVuY3Rpb24gKGZuKSB7XG4gIGxldCBldmFsdWF0aW9uID0gdGhpcy5fX2V2YWx1YXRpb247XG4gIGxldCByZXM7XG4gIHRoaXMuX19ldmFsdWF0aW9uID0gbnVsbDtcbiAgcmVzID0gZm4oKTtcbiAgdGhpcy5fX2V2YWx1YXRpb24gPSBldmFsdWF0aW9uO1xuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBFdmFsdWF0ZSBvbmx5IHJvb3QgcHJvcGVydGllc1xuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkud3JhcHBpbmcgPSBmdW5jdGlvbihmbikge1xuICBpZih0aGlzLl9fd3JhcHBpbmcpIHtcbiAgICByZXR1cm4gZm4oKTtcbiAgfVxuICBcbiAgdGhpcy5fX3dyYXBwaW5nID0gdHJ1ZTtcbiAgbGV0IHJlcyA9IGZuKCk7ICBcbiAgdGhpcy5fX3dyYXBwaW5nID0gZmFsc2U7ICBcbiAgcmV0dXJuIHJlczsgICBcbn1cblxuLyoqXG4gKiBTdG9wIGlzb2xhdGlvbiBiZWZvcmUgdGhlIGZ1bmN0aW9uIGFuZCBjb250aW51ZSBhZnRlclxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkudW5pc29sYXRlID0gZnVuY3Rpb24gKGZuKSB7XG4gIGxldCBpc29sYXRpb24gPSB0aGlzLl9faXNvbGF0aW9uO1xuICBsZXQgcmVzO1xuICB0aGlzLl9faXNvbGF0aW9uID0gbnVsbDtcbiAgcmVzID0gZm4oKTtcbiAgdGhpcy5fX2lzb2xhdGlvbiA9IGlzb2xhdGlvbjtcbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogUnVuIHRoZSBmdW5jdGlvbiBvbiB0aGUgbmV4dCB0aWNrXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5Ba2lsaS5uZXh0VGljayA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcykgPT4gc2V0VGltZW91dCgoKSA9PiBQcm9taXNlLnJlc29sdmUoZm4oKSkudGhlbihyZXMpKSk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgZWxlbWVudFxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucz17fV1cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS5pbml0aWFsaXplID0gZnVuY3Rpb24gKGVsLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IHJlY29tcGlsZSA9IG9wdGlvbnMucmVjb21waWxlO1xuICBsZXQgY29tcG9uZW50ID0gZWwuX19ha2lsaTtcblxuICBpZiAoY29tcG9uZW50KSB7XG4gICAgaWYgKHJlY29tcGlsZSkge1xuICAgICAgY29tcG9uZW50Ll9fcmVjb21waWxlKHJlY29tcGlsZSA9PT0gdHJ1ZT8ge306IHJlY29tcGlsZSk7XG4gICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBpc1Jvb3QgPSBlbCA9PT0gdGhpcy5fX3Jvb3Q7XG4gIGxldCBjb21wb25lbnROYW1lID0gdXRpbHMudG9EYXNoQ2FzZShlbC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpIHx8IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSk7XG4gIGxldCBfQ29tcG9uZW50ID0gdGhpcy5fX2NvbXBvbmVudHNbY29tcG9uZW50TmFtZV07XG5cbiAgQ0hFQ0tfQUxJQVNFUzogaWYgKCFfQ29tcG9uZW50KSB7XG4gICAgbGV0IHNlbGVjdG9ycyA9IE9iamVjdC5rZXlzKHRoaXMuX19hbGlhc2VzKTtcblxuICAgIGlmICghc2VsZWN0b3JzLmxlbmd0aCkge1xuICAgICAgYnJlYWsgQ0hFQ0tfQUxJQVNFUztcbiAgICB9XG5cbiAgICBsZXQgc2VsZWN0b3JBbGwgPSBzZWxlY3RvcnMuam9pbignLCcpO1xuXG4gICAgaWYgKCFlbC5tYXRjaGVzKHNlbGVjdG9yQWxsKSkge1xuICAgICAgYnJlYWsgQ0hFQ0tfQUxJQVNFUztcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHNlbGVjdG9ycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBzZWxlY3RvciA9IHNlbGVjdG9yc1tpXTtcblxuICAgICAgaWYgKGVsLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIF9Db21wb25lbnQgPSB0aGlzLl9fY29tcG9uZW50c1t0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl1dO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoIV9Db21wb25lbnQgJiYgIWlzUm9vdCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghX0NvbXBvbmVudCkge1xuICAgIF9Db21wb25lbnQgPSB0aGlzLkNvbXBvbmVudDtcbiAgfVxuXG4gIGlmIChfQ29tcG9uZW50Lm1hdGNoZXMgJiYgIWVsLm1hdGNoZXMoX0NvbXBvbmVudC5tYXRjaGVzKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbXBvbmVudCA9IG5ldyBfQ29tcG9uZW50KGVsLCB7fSk7ICBcbiAgXG4gIGlmIChjb21wb25lbnQuX19jYW5jZWxsZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZihBa2lsaS5nZXRBa2lsaVBhcmVudHMoZWwpLmZpbmQocCA9PiBwLl9fYWtpbGkuX19wcmV2ZW50KSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbXBvbmVudC5fX2NyZWF0ZSgpO1xuICByZXR1cm4gY29tcG9uZW50O1xufTtcblxuLyoqXG4gKiBDb21waWxlIHRoZSBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSByb290XG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuQWtpbGkuY29tcGlsZSA9IGZ1bmN0aW9uIChyb290LCBvcHRpb25zID0geyByZWNvbXBpbGU6IGZhbHNlIH0pIHsgIFxuICBsZXQgZWxlbWVudHMgPSBbXTtcblxuICBjb25zdCBuZXN0ZWRJbml0aWFsaXppbmcgPSAoZWwpID0+IHtcbiAgICBsZXQgY29tcG9uZW50ID0gdGhpcy5pbml0aWFsaXplKGVsLCBvcHRpb25zKTtcbiAgICBsZXQgY2hpbGRyZW4gPSBlbC5jaGlsZHJlbjtcbiAgICBjb21wb25lbnQgJiYgZWxlbWVudHMucHVzaChjb21wb25lbnQpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmVzdGVkSW5pdGlhbGl6aW5nKGNoaWxkKTtcbiAgICB9XG4gIH07XG5cbiAgbmVzdGVkSW5pdGlhbGl6aW5nKHJvb3QpO1xuICBsZXQgcCA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGNvbXBvbmVudCA9IGVsZW1lbnRzW2ldO1xuICAgIHAucHVzaChjb21wb25lbnQuX19jb21waWxlKCkpO1xuICB9XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKHApLnRoZW4oKCkgPT4ge1xuICAgIGxldCByID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gZWxlbWVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBjb21wb25lbnQgPSBlbGVtZW50c1tpXTtcbiAgICAgIHIucHVzaChjb21wb25lbnQuX19yZXNvbHZlKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLmFsbChyKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIHRoZSBjb21wb25lbnQgb3IgZ2V0IGl0IGlmIGZuIGlzIG5vdCBwYXNzZWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtDb21wb25lbnR9IFtmbl1cbiAqL1xuQWtpbGkuY29tcG9uZW50ID0gZnVuY3Rpb24gKG5hbWUsIGZuKSB7XG4gIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYgKCFmbikge1xuICAgIHJldHVybiB0aGlzLl9fY29tcG9uZW50c1tuYW1lXSB8fCBudWxsO1xuICB9XG4gIFxuICBpZiAodGhpcy5fX2NvbXBvbmVudHNbbmFtZV0gJiYgQWtpbGkub3B0aW9ucy5kZWJ1ZykgeyAgXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oYENvbXBvbmVudCAke25hbWV9IGFscmVhZHkgd2FzIGFkZGVkYCk7XG4gIH1cblxuICB0aGlzLl9fY29tcG9uZW50c1tuYW1lXSA9IGZuO1xufTtcblxuLyoqXG4gKiBVbnJlZ2lzdGVyIHRoZSBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5Ba2lsaS51bnJlZ2lzdGVyQ29tcG9uZW50ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZGVsZXRlIHRoaXMuX19jb21wb25lbnRzW25hbWVdO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciB0aGUgc2VsZWN0b3IgYWxpYXMgb3IgZ2V0IGl0IGlmIGNvbXBvbmVudCBuYW1lIGlzIG5vdCBwYXNzZWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgLSBET00gc2VsZWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29tcG9uZW50TmFtZV1cbiAqL1xuQWtpbGkuYWxpYXMgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGNvbXBvbmVudE5hbWUgPSAnJykge1xuICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmICghY29tcG9uZW50TmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gJiYgQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKGBBbGlhcyB3aXRoIHNlbGVjdG9yICR7c2VsZWN0b3J9IGFscmVhZHkgd2FzIGFkZGVkYCk7XG4gIH1cblxuICB0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gPSBjb21wb25lbnROYW1lO1xufTtcblxuLyoqXG4gKiBVbnJlZ2lzdGVyIHRoZSBzZWxlY3RvciBhbGlhc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICovXG5Ba2lsaS51bnJlZ2lzdGVyQWxpYXMgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgZGVsZXRlIHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSBhcnJheSBwcm90b3R5cGUgZnVuY3Rpb25zXG4gKi9cbkFraWxpLmlzb2xhdGVBcnJheVByb3RvdHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fX3dpbmRvdy5BcnJheSA9IHsgcHJvdG90eXBlOiB7fSB9O1xuXG4gIGxldCBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoQXJyYXkucHJvdG90eXBlKTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgbGV0IG9sZCA9IEFycmF5LnByb3RvdHlwZVtrZXldO1xuXG4gICAgaWYgKHR5cGVvZiBvbGQgIT0gJ2Z1bmN0aW9uJyB8fCBrZXkgPT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdGhpcy5fX3dpbmRvdy5BcnJheS5wcm90b3R5cGVba2V5XSA9IG9sZDtcblxuICAgIEFycmF5LnByb3RvdHlwZVtrZXldID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIEFraWxpLnVuZXZhbHVhdGUoKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX19pc1Byb3h5KSB7XG4gICAgICAgICAgcmV0dXJuIG9sZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiBvbGQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG59O1xuXG4vKipcbiAqIElzb2xhdGUgc29tZSB3aW5kb3cgZnVuY3Rpb25zXG4gKi9cbkFraWxpLmlzb2xhdGVXaW5kb3dGdW5jdGlvbnMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fX3dpbmRvdy5zZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgdGhpcy5fX3dpbmRvdy5zZXRJbnRlcnZhbCA9IHNldEludGVydmFsO1xuICB0aGlzLl9fd2luZG93LlByb21pc2UgPSB3aW5kb3cuUHJvbWlzZTtcbiAgd2luZG93LnNldFRpbWVvdXQgPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5zZXRUaW1lb3V0LCAwKTtcbiAgd2luZG93LnNldEludGVydmFsID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuc2V0SW50ZXJ2YWwsIDApO1xuICBcbiAgaWYoIXdpbmRvdy5BS0lMSV9TU1IpIHtcbiAgICB3aW5kb3cuUHJvbWlzZS5jb25zdHJ1Y3RvciA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LlByb21pc2UuY29uc3RydWN0b3IpO1xuICAgIHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS50aGVuID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUudGhlbiwgWzAsICdsYXN0J10pO1xuICAgIHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS5jYXRjaCA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LlByb21pc2UucHJvdG90eXBlLmNhdGNoKTtcbiAgfSAgXG59O1xuXG4vKipcbiAqIElzb2xhdGUgZXZlbnQgbGlzdGVuZXJzXG4gKi9cbkFraWxpLmlzb2xhdGVFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX193aW5kb3cuRWxlbWVudCA9IHsgcHJvdG90eXBlOiB7fSB9O1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBFbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyO1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyO1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZTtcblxuICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZGVsZXRlIHRoaXMuX19ha2lsaUxpc3RlbmVycztcbiAgICByZXR1cm4gQWtpbGkuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChuYW1lLCBmbikge1xuICAgIGxldCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYgKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVycyA9IHt9O1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBpZih0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFyZ3NbMV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgICAgfTtcbiAgICB9ICAgIFxuXG4gICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLnB1c2goe1xuICAgICAgbGluazogZm4sXG4gICAgICBmbjogYXJnc1sxXVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIEFraWxpLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG5cbiAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChuYW1lLCBmbikge1xuICAgIGxldCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYgKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVycyA9IHt9O1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBsaXN0ZW5lciA9IHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXVtpXTtcblxuICAgICAgaWYgKGxpc3RlbmVyLmxpbmsgPT09IGZuKSB7XG4gICAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGFyZ3NbMV0gPSBsaXN0ZW5lci5mbjtcbiAgICAgICAgaS0tO1xuICAgICAgICBsLS07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXTtcbiAgICB9XG5cbiAgICByZXR1cm4gQWtpbGkuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfTtcbn07XG5cbi8qKlxuICogV3JhcCB0aGUgZnVuY3Rpb24gY2FsbGJhY2sgdG8gYW4gaXNvbGF0ZSBjb250ZXh0XG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ3xudW1iZXJbXXxzdHJpbmdbXX0gW3Bvcz1cImxhc3RcIl1cbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqL1xuQWtpbGkuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24gPSBmdW5jdGlvbiAoZm4sIHBvcyA9ICdsYXN0Jykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGxldCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICFBcnJheS5pc0FycmF5KHBvcykgJiYgKHBvcyA9IFtwb3NdKTtcbiAgICBcbiAgICBmb3IobGV0IGkgPSAwLCBsID0gcG9zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG51bSA9IHBvc1tpXTtcbiAgICAgIGxldCBpbmRleCA9IG51bTtcbiAgICAgIGxldCBjYWxsYmFjayA9IGFyZ3NbbnVtXTtcblxuICAgICAgaWYobnVtID09ICdsYXN0Jykge1xuICAgICAgICBpbmRleCA9IGFyZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgY2FsbGJhY2sgPSBhcmdzW2luZGV4XTtcbiAgICAgIH1cblxuICAgICAgaWYodHlwZW9mIGNhbGxiYWNrICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmKCFjYWxsYmFjay5fX2lzb2xhdGVkKSB7XG4gICAgICAgIGFyZ3NbaW5kZXhdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIEFraWxpLmlzb2xhdGUoKCkgPT4gY2FsbGJhY2suYXBwbHkoY2FsbGJhY2ssIGFyZ3VtZW50cykpO1xuICAgICAgICB9O1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhcmdzW2luZGV4XSwgJ19faXNvbGF0ZWQnLCB7XG4gICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgdmFsdWU6IGNhbGxiYWNrXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfTtcbn07XG5cbi8qKlxuICogV3JhcCBvYmplY3RzL2NsYXNzZXMgdG8gaXNvbGF0ZSBhbmQgdW5ldmFsdWF0ZSBkYXRhXG4gKlxuICogQHBhcmFtIHsqfSBvYmpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBbb3B0aW9uc10gXG4gKi9cbkFraWxpLndyYXAgPSBmdW5jdGlvbiAob2JqLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IGN1cnJlbnQgPSBvYmo7XG5cbiAgaWYodHlwZW9mIG9iaiA9PSAnZnVuY3Rpb24nKSB7XG4gICAgb2JqID0gdGhpcy53cmFwRnVuY3Rpb24ob2JqKTtcblxuICAgIGlmKG9iaiA9PT0gY3VycmVudCkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gIH1cbiAgZWxzZSBpZighb2JqIHx8IHR5cGVvZiBvYmogIT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGxldCBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKTtcblxuICBmb3IobGV0IGsgPSAwLCBjID0ga2V5cy5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICBsZXQga2V5ID0ga2V5c1trXTtcbiAgICBsZXQgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpO1xuXG4gICAgaWYoIWRlc2NyaXB0b3IuY29uZmlndXJhYmxlIHx8ICFkZXNjcmlwdG9yLndyaXRhYmxlKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZihvcHRpb25zLnJldmVyc2UpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgey4uLmRlc2NyaXB0b3IsIHZhbHVlOiBvYmpba2V5XS5fX2FraWxpIHx8IG9ialtrZXldIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIFxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgey4uLmRlc2NyaXB0b3IsIHZhbHVlOiB0aGlzLndyYXAob2JqW2tleV0sIG9wdGlvbnMpIH0pO1xuICB9IFxuICBcbiAgcmV0dXJuIG9iajtcbn07XG5cbi8qKlxuICogVW53cmFwIG9iamVjdHMvY2xhc3Nlc1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBvYmpcbiAqL1xuQWtpbGkudW53cmFwID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdGhpcy53cmFwKG9iaiwgeyByZXZlcnNlOiB0cnVlIH0pO1xufVxuXG4vKipcbiAqIElzb2xhdGUgYSBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbkFraWxpLndyYXBGdW5jdGlvbiA9IGZ1bmN0aW9uKGZuKSB7XG4gIGlmIChmbi5fX2FraWxpKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgY29uc3QgYWtpbGlXcmFwcGVkRnVuY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIEFraWxpLndyYXBwaW5nKCgpID0+IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xuXG4gIGxldCBrZXlzID0gT2JqZWN0LmtleXMoZm4pO1xuICBha2lsaVdyYXBwZWRGdW5jdGlvbi5wcm90b3R5cGUgPSBmbi5wcm90b3R5cGU7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgYWtpbGlXcmFwcGVkRnVuY3Rpb25ba2V5XSA9IGZuW2tleV07XG4gIH1cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYWtpbGlXcmFwcGVkRnVuY3Rpb24sICdfX2FraWxpJywge1xuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIHZhbHVlOiBmblxuICB9KTtcblxuICByZXR1cm4gYWtpbGlXcmFwcGVkRnVuY3Rpb247XG59O1xuXG4vKipcbiAqIEVycm9yIGhhbmRsaW5nXG4gKi9cbkFraWxpLmVycm9ySGFuZGxpbmcgPSBmdW5jdGlvbigpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgdGhpcy5fX29uRXJyb3IpO1xufTtcblxuLyoqXG4gKiBUcmlnZ2VyIGFuIGluaXRpYWxpemF0aW9uIHN0YXR1c1xuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc3RhdHVzXG4gKi9cbkFraWxpLnRyaWdnZXJJbml0ID0gZnVuY3Rpb24oc3RhdHVzKSB7XG4gIEFraWxpLl9faW5pdCA9IHN0YXR1cztcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdha2lsaS1pbml0JywgeyBkZXRhaWw6IHN0YXR1cyB9KSk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIGFwcGxpY2F0aW9uXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBbcm9vdF1cbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5Ba2lsaS5pbml0ID0gZnVuY3Rpb24ocm9vdCkge1xuICByb290ID0gcm9vdCB8fCBkb2N1bWVudC5ib2R5O1xuXG4gIGlmKCEocm9vdCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBSb290IGVsZW1lbnQgbXVzdCBiZSBhbiBodG1sIGVsZW1lbnRgKTtcbiAgfVxuXG4gIGlmKHJvb3QgPT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgXCJodG1sXCIgY2FuJ3QgYmUgdGhlIHJvb3QgZWxlbWVudGApO1xuICB9XG5cbiAgdGhpcy5fX3Jvb3QgPSByb290O1xuICBcbiAgaWYod2luZG93LkFLSUxJX1NFUlZFUikgeyAgICBcbiAgICBBa2lsaS5pbml0U2VydmVyU2lkZUh0bWwod2luZG93LkFLSUxJX1NFUlZFUi5odG1sKTtcbiAgICBBa2lsaS5pbml0U2VydmVyU2lkZVJlcXVlc3RDYWNoZSh3aW5kb3cuQUtJTElfU0VSVkVSLnJlcXVlc3RDYWNoZSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgd2luZG93LkFLSUxJX0NMSUVOVCA9IHtcbiAgICAgIGh0bWw6IHRoaXMucHJlcGFyZVNlcnZlclNpZGVIdG1sKCkgICAgICBcbiAgICB9XG4gIH1cblxuICBmb3IobGV0IGtleSBpbiB0aGlzLm9wdGlvbnMuZ2xvYmFscykge1xuICAgIHRoaXMub3B0aW9ucy5nbG9iYWxzW2tleV0gPSB0aGlzLndyYXAodGhpcy5vcHRpb25zLmdsb2JhbHNba2V5XSk7XG4gIH1cbiAgXG4gIHJldHVybiB0aGlzLmNvbXBpbGUodGhpcy5fX3Jvb3QpLnRoZW4oKCkgPT4ge1xuICAgIGlmIChyb3V0ZXIuX19pbml0KSB7XG4gICAgICByZXR1cm4gcm91dGVyLmNoYW5nZVN0YXRlKCk7XG4gICAgfVxuICB9KS50aGVuKCgpID0+IHsgICAgXG4gICAgd2luZG93LkFLSUxJX0NMSUVOVCAmJiAod2luZG93LkFLSUxJX0NMSUVOVC5yZXF1ZXN0Q2FjaGUgPSB0aGlzLnByZXBhcmVTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlKCkpO1xuICAgIHRoaXMudHJpZ2dlckluaXQodHJ1ZSk7XG4gIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICB0aGlzLnRyaWdnZXJJbml0KGZhbHNlKTtcbiAgICB0aHJvdyBlcnI7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHNlcnZlci1zaWRlIHJlbmRlcmluZyBodG1sXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBodG1sXG4gKi9cbkFraWxpLmluaXRTZXJ2ZXJTaWRlSHRtbCA9IGZ1bmN0aW9uIChodG1sKSB7XG4gIGZvciAobGV0IGkgPSB0aGlzLl9fcm9vdC5hdHRyaWJ1dGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICB0aGlzLl9fcm9vdC5yZW1vdmVBdHRyaWJ1dGUodGhpcy5fX3Jvb3QuYXR0cmlidXRlc1tpXS5uYW1lKTtcbiAgfVxuXG4gIGxldCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gIGxldCBkb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGh0bWwsIFwidGV4dC9odG1sXCIpO1xuICBsZXQgZWwgPSBkb2MucXVlcnlTZWxlY3Rvcih0aGlzLl9fcm9vdCA9PT0gZG9jdW1lbnQuYm9keT8gJ2JvZHknOiAnYm9keSA+IConKTsgICAgXG4gIHRoaXMuX19yb290LmlubmVySFRNTCA9IGVsLmlubmVySFRNTDtcblxuICBmb3IgKGxldCBpID0gZWwuYXR0cmlidXRlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGxldCBhdHRyID0gZWwuYXR0cmlidXRlc1tpXTtcbiAgICB0aGlzLl9fcm9vdC5zZXRBdHRyaWJ1dGUoYXR0ci5uYW1lLCBhdHRyLnZhbHVlKTtcbiAgfSAgXG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgcmVxdWVzdCBjYWNoZVxuICogXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKi9cbkFraWxpLmluaXRTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlID0gZnVuY3Rpb24gKG9iaikge1xuICBjb25zdCBpbml0ID0gKGluc3RhbmNlLCBvYmopID0+IHtcbiAgICBmb3IobGV0IGtleSBpbiBvYmopIHtcbiAgICAgIGluc3RhbmNlLl9fY2FjaGVba2V5XSA9IG9ialtrZXldO1xuICAgIH1cbiAgfVxuICBcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xuICAgIGxldCBpbnN0YW5jZSA9IGtleSA9PT0gJ19fbWFpbic/IHJlcXVlc3Q6IHJlcXVlc3QuX19pbnN0YW5jZXNba2V5XTtcbiAgICBpbml0KGluc3RhbmNlLCBvYmpba2V5XSk7XG4gIH1cbn1cblxuLyoqXG4gKiBQcmVwYXJlIHNlcnZlci1zaWRlIHJlbmRlcmluZyBodG1sXG4gKi9cbkFraWxpLnByZXBhcmVTZXJ2ZXJTaWRlSHRtbCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX19yb290Lm91dGVySFRNTDtcbn1cblxuLyoqXG4gKiBQcmVwYXJlIHNlcnZlci1zaWRlIHJlbmRlcmluZyByZXF1ZXN0IGNhY2hlXG4gKi9cbkFraWxpLnByZXBhcmVTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlID0gZnVuY3Rpb24gKCkge1xuICBsZXQgY2FjaGUgPSB7IF9fbWFpbjogcmVxdWVzdC5fX2NhY2hlIH07XG5cbiAgZm9yKGxldCBrZXkgaW4gcmVxdWVzdC5fX2luc3RhbmNlcykge1xuICAgIGNhY2hlW2tleV0gPSByZXF1ZXN0Ll9faW5zdGFuY2VzW2tleV0uX19jYWNoZTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuLyoqXG4gKiBEZWluaXRpYWxpemUgdGhlIGFwcGxpY2F0aW9uXG4gKi9cbkFraWxpLmRlaW5pdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmNsZWFyR2xvYmFscygpO1xuICByb3V0ZXIuZGVpbml0KCk7XG4gIHJlcXVlc3QuZGVpbml0KCk7XG4gIGxldCBzdG9yZUtleXMgPSBPYmplY3Qua2V5cyhzdG9yZS5fX3RhcmdldCk7XG4gIFxuICBmb3IobGV0IGkgPSAwLCBsID0gc3RvcmVLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGRlbGV0ZSBzdG9yZS5fX3RhcmdldFtzdG9yZUtleXNbaV1dO1xuICB9XG5cbiAgdGhpcy5zZXREZWZhdWx0cygpO1xufTtcblxud2luZG93LkFraWxpID0gQWtpbGk7XG5leHBvcnQgZGVmYXVsdCBBa2lsaTtcbkFraWxpLnNldERlZmF1bHRzKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FraWxpLmpzIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXIuanMnXG5cbi8qKlxuICogQW4gb2JqZWN0IHdpdGggYSBsb3Qgb2YgdXNlZnVsIGZ1bmN0aW9uc1xuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3V0aWxzfVxuICovXG5jb25zdCB1dGlscyA9IHt9O1xuXG4vKipcbiAqIENyZWF0ZSBjbGFzcyBhdHRyaWJ1dGUgZnJvbSBhbiBvYmplY3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcInJlZCBhY3RpdmVcIlxuICogdXRpbHMuY2xhc3Moe3JlZDogdHJ1ZSwgYWN0aXZlOiB0cnVlLCBncmVlbjogZmFsc2V9KTtcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5jbGFzcyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBsZXQgY2xhc3NlcyA9IFtdO1xuICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrID0ga2V5c1tpXTtcbiAgICBsZXQgdmFsID0gb2JqW2tdO1xuICAgIHZhbCAmJiBjbGFzc2VzLnB1c2goayk7XG4gIH1cblxuICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBzdHlsZSBhdHRyaWJ1dGUgZnJvbSBhbiBvYmplY3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcImNvbG9yOnJlZDt3aWR0aDoxMHB4XCJcbiAqIHV0aWxzLnN0eWxlKHtjb2xvcjogXCJyZWRcIiwgYmFja2dyb3VuZDogZmFsc2UsIHdpZHRoOiBcIjEwcHhcIn0pO1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnN0eWxlID0gZnVuY3Rpb24ob2JqKSB7XG4gIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgbGV0IHN0eWxlcyA9IFtdO1xuICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrID0ga2V5c1tpXTtcbiAgICBsZXQgdmFsID0gb2JqW2tdO1xuICAgIHZhbCAmJiBzdHlsZXMucHVzaChgJHt0aGlzLnRvRGFzaENhc2Uoayl9OiR7dmFsfWApO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlcy5qb2luKCc7Jyk7XG59O1xuXG4vKipcbiAqIEV4dGVuZGVkIHNwbGl0IG9mIHRoZSBzdHJpbmdcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW1wiSGVsbG9cIiwgXCJXb3JsZFwiXVxuICogdXRpbHMuc3BsaXQoXCJIZWxsbyBXb3JsZFwiLCBcIiBcIik7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsneCA9IDUnLCAnIHkgPSBcIjE7MjszXCInXVxuICogdXRpbHMuc3BsaXQoJ3ggPSA1OyB5ID0gXCIxOzI7M1wiJywgXCI7XCIsIFsnXCInXSk7XG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cH0gc3RyIFxuICogQHBhcmFtIHtzdHJpbmd9IFtkZWxdXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBbZXhjbHVkZV0gXG4gKi9cbnV0aWxzLnNwbGl0ID0gZnVuY3Rpb24oc3RyLCBkZWwgPSAnJywgZXhjbHVkZSA9IFtdKSB7XG5cdGNvbnN0IGV4cHMgPSBbXTsgICAgIFxuICBsZXQgbGFzdCA9ICcnO1xuXG4gIGlmKCFkZWwpIHtcbiAgICByZXR1cm4gc3RyLnNwbGl0KCcnKTtcbiAgfVxuICBlbHNlIGlmKGRlbCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIHJldHVybiBzdHIuc3BsaXQoZGVsKTtcbiAgfVxuICBlbHNlIGlmKHN0ci5pbmRleE9mKGRlbCkgPT0gLTEpIHtcbiAgICBsYXN0ID0gc3RyO1xuICB9XG4gIGVsc2Uge1xuICAgIGNvbnN0IGFyciA9IHN0ci5zcGxpdCgnJyk7XG4gICAgbGV0IG9wZW4gPSAnJzsgXG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHZhbCA9IGFycltpXTtcbiAgICAgIGxldCBpbmRleCA9IGV4Y2x1ZGUuaW5kZXhPZih2YWwpOyAgICAgIFxuXG4gICAgICBpZihpbmRleCA+IC0xICYmICghb3BlbiB8fCBvcGVuID09IHZhbCkpIHtcbiAgICAgICAgIW9wZW4/IG9wZW4gPSBleGNsdWRlW2luZGV4XTogb3BlbiA9ICcnO1xuICAgICAgfVxuXG4gICAgICBpZih2YWwgPT0gZGVsICYmICFvcGVuKSB7XG4gICAgICAgIGV4cHMucHVzaChsYXN0KTtcbiAgICAgICAgbGFzdCA9ICcnO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbGFzdCArPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgbGFzdCAmJiBleHBzLnB1c2gobGFzdCk7XG4gIHJldHVybiBleHBzO1xufVxuXG4vKipcbiAqIEZpbHRlciBhbiBhcnJheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsxLCAxMV1cbiAqIHV0aWxzLmZpbHRlcihbMSwgMiwgMywgMTFdLCAnMScpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMX0sIHt4OiAxMX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxfSwge3g6IDJ9LCB7eDogM30sIHt4OiAxMX1dLCAnMScsICd4Jyk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMX0sIHt4OiAxMX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxfSwge3g6IDJ9LCB7eDogM30sIHt4OiAxMX1dLCAnMScsIFsneCddKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxfSwge3g6IDExfV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IDF9LCB7eDogMn0sIHt4OiAzfSwge3g6IDExfV0sICcxJywgW1sneCddXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoge3k6IDF9fV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IHt5OiAxfX0sIHt4OiB7eTogMn19XSwgJzEnLCBbWyd4JywgJ3knXV0pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6MSwgeTogMn0sIHt4OiAyLCB5OjF9XSBcbiAqIHV0aWxzLmZpbHRlcihbe3g6IDEsIHk6IDJ9LCB7eDogMywgeTogM30sIHt4OiAyLCB5OiAxfV0sICcxJywgWyd4JywgJ3knXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoxLCB5OiAyfSwge3g6IDIsIHk6MX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxLCB5OiAyfSwge3g6IDMsIHk6IDN9LCB7eDogMiwgeTogMX1dLCAnMScsIFtbJ3gnXSwgWyd5J11dKTtcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cHxmdW5jdGlvbn0gaGFuZGxlciAtIHR5cGUgb2YgZmlsdGVyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ1tdfHN0cmluZ30gW2tleXNdIC0gZmlsdGVyIGluIHRoZSBrZXlzIGlmIGFycmF5IGVsZW1lbnRzIGFyZSBvYmplY3RcbiAqIEByZXR1cm5zIHtBcnJheX0gLSByZXR1cm5zIG90aGVyIGFycmF5XG4gKi9cbnV0aWxzLmZpbHRlciA9IGZ1bmN0aW9uIChhcnIsIGhhbmRsZXIsIGtleXMgPSBudWxsKSB7XG4gIGxldCByZXMgPSBbXTtcblxuICBpZiAoa2V5cyAmJiAhQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgIGtleXMgPSBba2V5c107XG4gIH1cblxuICBpZih0eXBlb2YgaGFuZGxlciAhPSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3Qgc3RyID0gaGFuZGxlcj8gKGhhbmRsZXIgKyAnJykudG9Mb3dlckNhc2UoKTogJyc7XG4gICAgaGFuZGxlciA9IHZhbCA9PiAodmFsPyAodmFsICsgJycpLnRvTG93ZXJDYXNlKCk6ICcnKS5tYXRjaChzdHIpO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGl0ZW0gPSBhcnJbaV07XG4gICAgbGV0IGZpbHRlcmVkID0gZmFsc2U7XG5cbiAgICBpZigha2V5cyAmJiBoYW5kbGVyKGl0ZW0pKSB7XG4gICAgICBmaWx0ZXJlZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYoa2V5cykge1xuICAgICAgZm9yKGxldCBrID0gMCwgYyA9IGtleXMubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2tdO1xuICAgICAgICBrZXkgPSBBcnJheS5pc0FycmF5KGtleSk/IGtleTogW2tleV07XG4gICAgICAgIGxldCB2YWwgPSBrZXk/IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5LCBpdGVtKTogaXRlbTtcbiAgICBcbiAgICAgICAgaWYgKGhhbmRsZXIodmFsKSkge1xuICAgICAgICAgIGZpbHRlcmVkID0gdHJ1ZTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZpbHRlcmVkICYmIHJlcy5wdXNoKGl0ZW0pOyAgIFxuICB9XG5cbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogT3JkZXIgYW4gYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMSwgMiwgM11cbiAqIHV0aWxzLnNvcnQoWzMsIDIsIDFdLCB0cnVlKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMywgMiwgMV1cbiAqIHV0aWxzLnNvcnQoWzEsIDIsIDNdLCBmYWxzZSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dXG4gKiB1dGlscy5zb3J0KFt7eDogM30sIHt4OiAyfSwge3g6IDF9XSwgW1sneCddXSwgW3RydWVdKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCBbJ3gnXSwgdHJ1ZSk7XG4gKiB1dGlscy5zb3J0KFt7eDogM30sIHt4OiAyfSwge3g6IDF9XSwgJ3gnKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dLCBbWyd4J11dLCBbZmFsc2VdKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dLCBbJ3gnXSwgZmFsc2UpO1xuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sICd4JywgZmFsc2UpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMSwgeTogM30sIHt4OiAyLCB5OiAxfSwge3g6MiwgeTogMn1dXG4gKiB1dGlscy5zb3J0KFt7eDogMiwgeTogMn0sIHt4OiAyLCB5OiAxfSwge3g6IDIsIHk6IDN9XSwgW1sneCddLCBbJ3knXV0sIFt0cnVlLCB0cnVlXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoge3k6IDF9fSwge3g6IHt5OiAyfX1dXG4gKiB1dGlscy5zb3J0KFt7eDoge3k6IDJ9fSwge3g6IHt5OiAxfX1dLCBbWyd4JywgJ3knXV0sIFt0cnVlXSk7XG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0ge2Jvb2xlYW58QXJyYXlbXXxzdHJpbmdbXXxzdHJpbmd9IFtrZXlzXVxuICogQHBhcmFtIHtib29sZWFufGJvb2xlYW5bXX0gW29yZGVyXSAtIHJldmVyc2Ugb3Igbm90XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbnV0aWxzLnNvcnQgPSBmdW5jdGlvbihhcnIsIGtleXMgPSB0cnVlLCBvcmRlciA9IFtdKSB7XG4gIGFyciA9IGFyci5zbGljZSgpO1xuXG4gIGlmIChrZXlzID09PSB0cnVlKSB7XG4gICAga2V5cyA9IFtdO1xuICAgIG9yZGVyID0gW3RydWVdO1xuICB9XG4gIGVsc2UgaWYgKGtleXMgPT09IGZhbHNlKSB7XG4gICAga2V5cyA9IFtdO1xuICAgIG9yZGVyID0gW2ZhbHNlXTtcbiAgfVxuXG4gIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgIGtleXMgPSBba2V5c107XG4gIH1cblxuICBpZiAoIUFycmF5LmlzQXJyYXkob3JkZXIpKSB7XG4gICAgb3JkZXIgPSBbb3JkZXJdO1xuICB9XG5cbiAgbGV0IGwgPSBrZXlzLmxlbmd0aDtcblxuICBhcnIuc29ydCgoYSwgYikgPT4ge1xuICAgIGxldCBpID0gMDtcblxuICAgIGNvbnN0IGNoZWNrID0gKGEsIGIsIHJldmVyc2UgPSBmYWxzZSkgPT4ge1xuICAgICAgaWYgKGEgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIGEgPSBhLmdldFRpbWUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGIgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIGIgPSBiLmdldFRpbWUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGEgPiBiKSB7XG4gICAgICAgIHJldHVybiByZXZlcnNlPyAtMTogMTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGEgPCBiKSB7XG4gICAgICAgIHJldHVybiByZXZlcnNlPyAxOiAtMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDA7XG4gICAgfTtcblxuICAgIGNvbnN0IG5leHQgPSAoKSA9PiB7XG4gICAgICBpZiAoaSA+PSBsKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuXG4gICAgICBsZXQga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGtleSkpIHtcbiAgICAgICAga2V5ID0gW2tleV07XG4gICAgICB9XG5cbiAgICAgIGxldCBhViA9IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5LCBhKTtcbiAgICAgIGxldCBiViA9IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5LCBiKTtcbiAgICAgIGxldCByZXMgPSBjaGVjayhhViwgYlYsIG9yZGVyW2ldID09PSBmYWxzZSk7XG5cbiAgICAgIGlmIChyZXMgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1cblxuICAgICAgaSsrO1xuICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICB9O1xuXG4gICAgaWYgKCFsKSB7XG4gICAgICByZXR1cm4gY2hlY2soYSwgYiwgb3JkZXJbaV0gPT09IGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dCgpO1xuICB9KTtcblxuICByZXR1cm4gYXJyO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gbmV3IG9iamVjdCB3aXRoIHRoZSBzcGVjaWZpZWQga2V5c1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB7eDogMSwgejogMX1cbiAqIHV0aWxzLmluY2x1ZGVLZXlzKHt4OiAxLCB5OiAxLCB6OiAxfSwgWyd4JywgJ3onXSk7XG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqL1xudXRpbHMuaW5jbHVkZUtleXMgPSBmdW5jdGlvbihvYmosIGtleXMpIHtcbiAgbGV0IG5ld09iaiA9IHt9O1xuICBsZXQgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IG9iaktleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGtleSA9IG9iaktleXNbaV07XG5cbiAgICBpZihrZXlzLmluZGV4T2Yoa2V5KSAhPSAtMSkge1xuICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG4vKipcbiAqIFJldHVybiBuZXcgb2JqZWN0IHdpdGhvdXQgdGhlIHNwZWNpZmllZCBrZXlzXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHt4OiAxLCB6OiAxfVxuICogdXRpbHMuaW5jbHVkZUtleXMoe3g6IDEsIHk6IDEsIHo6IDF9LCBbJ3knXSk7XG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqL1xudXRpbHMuZXhjbHVkZUtleXMgPSBmdW5jdGlvbihvYmosIGtleXMpIHtcbiAgbGV0IG5ld09iaiA9IHt9O1xuICBsZXQgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IG9iaktleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGtleSA9IG9iaktleXNbaV07XG5cbiAgICBpZihrZXlzLmluZGV4T2Yoa2V5KSA9PSAtMSkge1xuICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG4vKipcbiAqIENoZWNrIHRoZSB2YWx1ZSBpcyBjb21wb25lbnQgc2NvcGUgcHJveHkgb2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5pc1Njb3BlUHJveHkgPSBmdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuICEhKHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnICYmIHZhbC5fX2lzUHJveHkpO1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgdmFsdWUgaXMgcGxhaW4gb2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSBvYmpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5pc1BsYWluT2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XG4gIHJldHVybiAhIShvYmogJiYgdHlwZW9mIG9iaiA9PSAnb2JqZWN0JyAmJiAob2JqLmNvbnN0cnVjdG9yID09IE9iamVjdCB8fCBvYmouY29uc3RydWN0b3IgPT0gQXJyYXkpKTtcbn07XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVcbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zXSBcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5jb3B5ID0gZnVuY3Rpb24odmFsdWUsIG9wdGlvbnMgPSB7fSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8ICF2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIG9wdGlvbnMgPSB7IG5lc3RlZDogdHJ1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgLi4ub3B0aW9ucyB9O1xuXG4gIGNvbnN0IG5leHQgPSAob2JqKSA9PiB7XG4gICAgb2JqID0gdGhpcy5pc1Njb3BlUHJveHkob2JqKT8gb2JqLl9fdGFyZ2V0OiBvYmo7XG4gICAgbGV0IGtleXMgPSAhb3B0aW9ucy5lbnVtZXJhYmxlPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopOiBPYmplY3Qua2V5cyhvYmopO1xuICAgIGxldCBuZXdPYmogPSBBcnJheS5pc0FycmF5KG9iaik/IFtdOiB7fTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgIGxldCB2YWwgPSBvYmpba2V5XTtcbiAgICAgIHZhbCA9IHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnICYmIG9wdGlvbnMubmVzdGVkPyBuZXh0KHZhbCk6IHZhbDsgICAgICBcbiAgICAgIFxuICAgICAgaWYoIW9iai5wcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwge1xuICAgICAgICAgIC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpLFxuICAgICAgICAgIHZhbHVlOiB2YWxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIG5ld09ialtrZXldID0gdmFsOyAgXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld09iajtcbiAgfVxuXG4gIHJldHVybiBuZXh0KHZhbHVlKTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHRoZSB2YWx1ZSB0byBhdHRyaWJ1dGUgYXBwcm9wcmlhdGUgZm9ybWF0XG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gZmFsc2UgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEV2ZW50RW1pdHRlcikge1xuICAgIHJldHVybiAnW29iamVjdCBFdmVudF0nO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gdmFsdWUgKyAnJztcbn07XG5cbi8qKlxuICogQ29tcGFyZSB0d28gdmFsdWVzXG4gKlxuICogQHBhcmFtIHsqfSBhXG4gKiBAcGFyYW0geyp9IGJcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5jb21wYXJlID0gZnVuY3Rpb24gKGEsIGIsIG9wdGlvbnMgPSB7fSkge1xuICBpZiAoKGEgaW5zdGFuY2VvZiBEYXRlKSAmJiAoYiBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgcmV0dXJuIGEuZ2V0VGltZSgpID09PSBiLmdldFRpbWUoKTtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgYSA9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBiID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYS50b1N0cmluZygpID09PSBiLnRvU3RyaW5nKCk7XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT0gJ29iamVjdCcpIHtcbiAgICBpZiAoYSA9PT0gbnVsbCB8fCBiID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gYSA9PT0gYjtcbiAgICB9XG5cbiAgICBvcHRpb25zID0geyBlbnVtZXJhYmxlOiB0cnVlLCAuLi5vcHRpb25zIH07XG5cbiAgICBjb25zdCBjbGVhclVuZGVmaW5lZCA9ICh2YWwpID0+IHtcbiAgICAgIGxldCBvYmogPSBBcnJheS5pc0FycmF5KHZhbCk/IFtdOiB7fTtcbiAgICAgIGxldCBrZXlzID0gIW9wdGlvbnMuZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoKTogT2JqZWN0LmtleXModmFsKTtcblxuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICB2YWxba2V5XSAhPT0gdW5kZWZpbmVkICYmIChvYmpba2V5XSA9IHZhbFtrZXldKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGlmKG9wdGlvbnMuaWdub3JlVW5kZWZpbmVkKSB7XG4gICAgICBhID0gY2xlYXJVbmRlZmluZWQoYSk7XG4gICAgICBiID0gY2xlYXJVbmRlZmluZWQoYik7XG4gICAgfVxuXG4gICAgbGV0IGFLZXlzID0gIW9wdGlvbnMuZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoKTogT2JqZWN0LmtleXMoYSk7XG4gICAgbGV0IGJLZXlzID0gIW9wdGlvbnMuZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoKTogT2JqZWN0LmtleXMoYik7XG4gICAgXG4gICAgaWYgKGFLZXlzLmxlbmd0aCAhPSBiS2V5cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBhID0gdGhpcy5pc1Njb3BlUHJveHkoYSk/IGEuX190YXJnZXQ6IGE7XG4gICAgYiA9IHRoaXMuaXNTY29wZVByb3h5KGIpPyBiLl9fdGFyZ2V0OiBiO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGFLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGtleSA9IGFLZXlzW2ldO1xuXG4gICAgICBpZiAoIXRoaXMuY29tcGFyZShhW2tleV0sIGJba2V5XSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGEgPT09IGI7XG59O1xuXG4vKipcbiAqIENvbXBhcmUgdGhlIGN1cnJlbnQgdmFsdWUgd2l0aCB0aGUgcHJldmlvdXNcbiAqXG4gKiBAcGFyYW0geyp9IGN1cnJlbnQgLSB0aGUgY3VycmVudCB2YWx1ZVxuICogQHBhcmFtIHsqfSBwcmV2aW91cyAtIHRoZSBwcmV2aW91cyB2YWx1ZVxuICogQHBhcmFtIHsqfSBwcmV2aW91c0NvcHkgLSB0aGUgcHJldmlvdXMgdmFsdWUgY29weVxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlID0gZnVuY3Rpb24oY3VycmVudCwgcHJldmlvdXMsIHByZXZpb3VzQ29weSwgb3B0aW9ucykge1xuICBpZiAoY3VycmVudCAhPT0gcHJldmlvdXMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdGhpcy5jb21wYXJlKGN1cnJlbnQsIHByZXZpb3VzQ29weSwgb3B0aW9ucyk7XG59O1xuXG4vKipcbiAqIEVuY29kZSBodG1sIGVudGl0aWVzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJ5b3UgJmFtcCBtZVwiXG4gKiB1dGlscy5lbmNvZGVIdG1sRW50aXRpZXMoJ3lvdSAmIG1lJyk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmVuY29kZUh0bWxFbnRpdGllcyA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHZhbHVlO1xuICBlbC50ZXh0Q29udGVudCA9IGh0bWw7XG4gIHZhbHVlID0gZWwuaW5uZXJIVE1MO1xuICBlbC5yZW1vdmUoKTtcbiAgZWwgPSBudWxsO1xuICByZXR1cm4gdmFsdWU7XG59O1xuXG4vKipcbiAqIERlY29kZSBodG1sIGVudGl0aWVzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJ5b3UgJiBtZVwiXG4gKiB1dGlscy5kZWNvZGVIdG1sRW50aXRpZXMoJ3lvdSAmYW1wIG1lJyk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmRlY29kZUh0bWxFbnRpdGllcyA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBsZXQgdmFsdWU7XG4gIGVsLmlubmVySFRNTCA9IGh0bWw7XG4gIHZhbHVlID0gZWwudmFsdWU7XG4gIGVsLnJlbW92ZSgpO1xuICBlbCA9IG51bGw7XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHN0cmluZyBmcm9tIGRhc2ggdG8gY2FtZWwgY2FzZSBmb3JtYXRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy50b0NhbWVsQ2FzZSA9IGZ1bmN0aW9uKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcVysoLikvZywgKG0sIGMpID0+IGMudG9VcHBlckNhc2UoKSk7XG59O1xuXG4vKipcbiAqIENhcGl0YWxpemUgdGhlIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmNhcGl0YWxpemUgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RyaW5nIGZyb20gY2FtZWwgdG8gZGFzaCBjYXNlIGZvcm1hdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnRvRGFzaENhc2UgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIChtLCBjKSA9PiBgLSR7Yy50b0xvd2VyQ2FzZSgpfWApO1xufTtcblxuLyoqXG4gKiBHZXQgbmVzdGVkIG9iamVjdCBwcm9wZXJ0eSBieSBhcnJheSBrZXlzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCkge1xuICBsZXQgY3VycmVudDtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoKG8sIGspID0+IHtcbiAgICBpKys7XG5cbiAgICBpZiAodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBvO1xuICAgIH1cblxuICAgIGlmIChvW2tdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAoaSA9PSBsZW5ndGgpICYmIChjdXJyZW50ID0gb1trXSk7XG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIGN1cnJlbnQ7XG59O1xuXG4vKipcbiAqIENoZWNrIG5lc3RlZCBvYmplY3RzIHRyZWUgaGFzIHByb3BlcnR5IG9yIG5vdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHRydWVcbiAqIHV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaGFzUHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QpIHtcbiAgbGV0IGhhcyA9IGZhbHNlO1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZSgobywgaykgPT4ge1xuICAgIGkrKztcblxuICAgIGlmICh0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuICEhbztcbiAgICB9XG5cbiAgICBpZiAoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAoaSA9PSBsZW5ndGgpICYmIChoYXMgPSBvLmhhc093blByb3BlcnR5KGspKTtcbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gaGFzO1xufTtcblxuLyoqXG4gKiBTZXQgbmVzdGVkIG9iamVjdHMgdHJlZSBwcm9wZXJ0eVxuICogUmV0dXJucyBjaGFuZ2VkIHByb3BlcnR5IG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHt5OiA2fVxuICogdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0sIChsYXN0LCB2YWwpID0+IGxhc3Q/IDY6ICh2YWwgfHwge30pKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLnNldFByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0LCBmbikge1xuICBsZXQgY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoKG8sIGspID0+IHtcbiAgICBpKys7XG5cbiAgICBpZiAodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIG9ba10gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgb1trXSA9IGZuKGkgPT0gbGVuZ3RoLCBvW2tdKTtcbiAgICBjdXJyZW50ID0gbztcbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gY3VycmVudDtcbn07XG5cbi8qKlxuICpcbiAqIERlbGV0ZSBwcm9wZXJ0eSBmcm9tIG5lc3RlZCBvYmplY3RzIHRyZWVcbiAqIFJldHVybnMgZGVsZXRlZCBwcm9wZXJ0eSB2YWx1ZVxuICogWW91IGNhbiBjYW5jZWwgZGVsZXRpbmcgaWYgd2lsbCByZXR1cm4gZmFsc2UgaW4gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIDVcbiAqIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19LCB2YWwgPT4gdmFsICE9IDUpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtmbl1cbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCwgZm4pIHtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgdmFsdWU7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZSgobywgaykgPT4ge1xuICAgIGkrKztcblxuICAgIGlmICh0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghby5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGlmIChpID09IGxlbmd0aCkge1xuICAgICAgdmFsdWUgPSBvW2tdO1xuICAgICAgKCFmbiB8fCBmbih2YWx1ZSkpICYmIChkZWxldGUgb1trXSk7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuXG4vKipcbiAqIEdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSB0YXJnZXQgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xuXG51dGlscy5nZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQgPSBmdW5jdGlvbih0YXJnZXQsIGtleSkge1xuICBjb25zdCBjaGVjayA9IChvYmopID0+IHtcbiAgICBpZiAob2JqLnByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgbGV0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG5cbiAgICBpZiAoIXByb3RvKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hlY2socHJvdG8pO1xuICB9O1xuXG4gIHJldHVybiBjaGVjayh0YXJnZXQpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIG93biBwcm9wZXJ0eSB0YXJnZXQgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xudXRpbHMuZ2V0T3duUHJvcGVydHlUYXJnZXQgPSBmdW5jdGlvbih0YXJnZXQsIGtleSkge1xuICBjb25zdCBjaGVjayA9IChvYmopID0+IHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgbGV0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG5cbiAgICBpZiAoIXByb3RvKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hlY2socHJvdG8pO1xuICB9O1xuXG4gIHJldHVybiBjaGVjayh0YXJnZXQpO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSByYW5kb20gc3RyaW5nXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5jcmVhdGVSYW5kb21TdHJpbmcgPSBmdW5jdGlvbihsZW5ndGggPSAxNiwgZm4gPSBudWxsKSB7XG4gIGxldCBzdHIgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgbGVuZ3RoICsgMik7XG4gIGxldCB2YWwgPSAnJztcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHN0ci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNjYpIHtcbiAgICAgIHZhbCArPSBzdHJbaV0udG9VcHBlckNhc2UoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YWwgKz0gc3RyW2ldO1xuICAgIH1cbiAgfVxuXG4gIGlmIChmbiAmJiBmbih2YWwpKSB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlUmFuZG9tU3RyaW5nKGxlbmd0aCwgZm4pO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHV0aWxzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgZm9yIGVsZW1lbnRzIHdoaWNoIGhhdmUgYXN5bmMgYXR0cmlidXRlIGNvbnRlbnQuXHJcbiAqIFxyXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XHJcbiAqIFxyXG4gKiBAdGFnIHVybFxyXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXJsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgbWF0Y2hlcyA9ICdbdXJsXSc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcclxuICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG4gICAgdGhpcy51cmxBdHRyaWJ1dGUgPSAnc3JjJztcclxuICB9XHJcblxyXG4gIGNvbXBpbGVkKCkge1xyXG4gICAgdGhpcy5hdHRyKCd1cmwnLCB0aGlzLnNldFVybCk7XHJcbiAgfVxyXG5cclxuICBzZXRVcmwodXJsKSB7XHJcbiAgICB0aGlzLmF0dHJzW3RoaXMudXJsQXR0cmlidXRlXSA9IHVybDtcclxuICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy91cmwuanMiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi9ha2lsaS5qcyc7XG5pbXBvcnQgU2NvcGUgZnJvbSAnLi9zY29wZS5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc2VydmljZXMvc3RvcmUuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuXG5leHBvcnQgY29uc3QgZXZhbHVhdGlvblJlZ2V4ID0gL1xcJHsoKCg/IVxcJHspLikqKX0vO1xuZXhwb3J0IGNvbnN0IGV2YWx1YXRpb25SZWdleEdsb2JhbCA9IG5ldyBSZWdFeHAoZXZhbHVhdGlvblJlZ2V4LnNvdXJjZSwgXCJnXCIpO1xuZXhwb3J0IGNvbnN0IHN5c3RlbUF0dHJpYnV0ZXMgPSBbJ2NvbXBvbmVudCcsICdzY29wZSddO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZnJvbSB3aGljaCBhbGwgY29tcG9uZW50cyBhcmUgaW5oZXJpdGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFtdO1xuICBzdGF0aWMgZXZlbnRzID0gW107XG4gIHN0YXRpYyBjb250cm9sQXR0cmlidXRlcyA9IGZhbHNlO1xuICBzdGF0aWMgc2F2ZUF0dHJpYnV0ZVByb3h5SW4gPSBmYWxzZTtcbiAgc3RhdGljIHNhdmVBdHRyaWJ1dGVQcm94eU91dCA9IGZhbHNlO1xuICBzdGF0aWMgdHJhbnNwYXJlbnQgPSBmYWxzZTtcbiAgc3RhdGljIHRlbXBsYXRlID0gJyc7XG4gIHN0YXRpYyB0ZW1wbGF0ZVVybCA9ICcnO1xuICBzdGF0aWMgc2NvcGUgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0byBkZWZpbmUgdGhlIGNvbXBvbmVudFxuICAgKi9cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2NvbXBvbmVudCcsIENvbXBvbmVudCk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgdGhlIGV4cHJlc3Npb25cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4cHJlc3Npb25cbiAgICogQHBhcmFtIHtvYmplY3R9IFtnbG9iYWxzXVxuICAgKi9cbiAgc3RhdGljIHBhcnNlKGNvbnRleHQsIGV4cHJlc3Npb24sIGdsb2JhbHMgPSB7fSkge1xuICAgIGdsb2JhbHMgPSB7IC4uLkFraWxpLm9wdGlvbnMuZ2xvYmFscywgLi4uZ2xvYmFsc307XG4gICAgY29uc3Qga2V5cyA9IFtdO1xuICAgIGNvbnN0IHZhcnMgPSBbXTtcbiAgICBjb25zdCBleHBzID0gdXRpbHMuc3BsaXQoZXhwcmVzc2lvbiwgJzsnLCBbJ1wiJywgXCInXCIsICdgJ10pOyAgXG4gICAgZXhwc1tleHBzLmxlbmd0aCAtIDFdID0gYHJldHVybiAke2V4cHNbZXhwcy5sZW5ndGggLSAxXX1gO1xuXG4gICAgZm9yIChsZXQga2V5IGluIGdsb2JhbHMpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgdmFycy5wdXNoKGdsb2JhbHNba2V5XSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBuZXcgRnVuY3Rpb24oLi4ua2V5cywgYCR7ZXhwcy5qb2luKCc7ICcpfWApLmFwcGx5KGNvbnRleHQsIHZhcnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqIFxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW3Njb3BlXSBcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsLCBzY29wZSA9IHt9KSB7XG4gICAgaWYgKCEoZWwgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgbXVzdCBwYXNzIGFuIGh0bWwgZWxlbWVudCB0byB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yYCk7XG4gICAgfVxuXG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19pc0NvbXBpbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2lzUmVzb2x2ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX3ByZXZlbnQgPSBmYWxzZTtcbiAgICB0aGlzLl9fYmluZGluZ3MgPSB7fTtcbiAgICB0aGlzLl9fZXZhbHVhdGluZ0V2ZW50ID0gbnVsbDtcbiAgICB0aGlzLl9fcmVjb21waWxpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0gbnVsbDtcbiAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0ge307XG4gICAgdGhpcy5fX2Rpc2FibGVTdG9yZUtleXMgPSB7fTtcbiAgICB0aGlzLl9fZGlzYWJsZUF0dHJLZXlzID0ge307XG4gICAgdGhpcy5fX2NoaWxkcmVuID0gW107XG4gICAgdGhpcy5fX3BhcmVudCA9IG51bGw7XG4gICAgdGhpcy5fX3BhcmVudHMgPSBbXTtcbiAgICB0aGlzLl9fYXR0cnMgPSB7fTtcbiAgICB0aGlzLl9fYXR0ckxpbmtzID0ge307XG4gICAgdGhpcy5fX3N0b3JlTGlua3MgPSB7fTtcbiAgICB0aGlzLl9fYXR0cmlidXRlT2YgPSBudWxsO1xuICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50ID0gdGhpcztcbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgdGhpcy5lbCA9IGVsO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBjb21waWxhdGlvbiBvcHRpb25zIFxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZUNvbXBpbGF0aW9uT3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4geyBcbiAgICAgIGNoZWNrQ2hhbmdlczogZmFsc2UsIFxuICAgICAgc2V0RXZlbnRzOiB0cnVlLFxuICAgICAgc2V0UGFyZW50czogdHJ1ZSxcbiAgICAgIHNldEJvb2xlYW5BdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgZGVmaW5lQXR0cmlidXRlczogdHJ1ZSxcbiAgICAgIC4uLm9wdGlvbnMgXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgcmVjb21waWxhdGlvbiBvcHRpb25zIFxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZVJlY29tcGlsYXRpb25PcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB7IFxuICAgICAgLi4udGhpcy5fX2NyZWF0ZUNvbXBpbGF0aW9uT3B0aW9ucygpLFxuICAgICAgc2V0RXZlbnRzOiBmYWxzZSxcbiAgICAgIHNldFBhcmVudHM6IGZhbHNlLFxuICAgICAgc2V0Qm9vbGVhbkF0dHJpYnV0ZXM6IGZhbHNlLFxuICAgICAgZGVmaW5lQXR0cmlidXRlczogZmFsc2UsXG4gICAgICAuLi5vcHRpb25zIFxuICAgIH07XG4gIH1cbiBcbiAgLyoqXG4gICAqIENhbGxlZCBvbiB0aGUgcmVjb21waWxhdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlY29tcGlsZShvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLl9faXNNb3VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX3JlY29tcGlsaW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5fX2Rpc2FibGVQcm94eSA9IHt9O1xuICAgIHRoaXMuX19jb21waWxpbmcgPSB0aGlzLl9fY3JlYXRlUmVjb21waWxhdGlvbk9wdGlvbnMob3B0aW9ucyk7ICAgIFxuICAgIHRoaXMuX19jb21waWxpbmcuc2V0RXZlbnRzICYmIHRoaXMuX19zZXRFdmVudHMoKTtcbiAgICB0aGlzLl9fY29tcGlsaW5nLnNldFBhcmVudHMgJiYgdGhpcy5fX3NldFBhcmVudHMoKTtcbiAgICB0aGlzLl9fY29tcGlsaW5nLnNldEJvb2xlYW5BdHRyaWJ1dGVzICYmIHRoaXMuX19zZXRCb29sZWFuQXR0cmlidXRlcygpO1xuICAgIHRoaXMuX19jb21waWxpbmcuZGVmaW5lQXR0cmlidXRlcyAmJiB0aGlzLl9fZGVmaW5lQXR0cmlidXRlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiB0aGUgY3JlYXRpb25cbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGUoKSB7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IHRoaXMuX19jcmVhdGVDb21waWxhdGlvbk9wdGlvbnMoKTsgICBcbiAgICB0aGlzLl9faW5pdGlhbGl6ZSgpO1xuICAgIHRoaXMuX19zZXRFdmVudHMoKTtcbiAgICB0aGlzLl9fc2V0UGFyZW50cygpO1xuICAgIHRoaXMuX19zZXRCb29sZWFuQXR0cmlidXRlcygpO1xuICAgIHRoaXMuX19kZWZpbmVBdHRyaWJ1dGVzKCk7XG4gICAgQWtpbGkuaXNvbGF0ZSgoKSA9PiB0aGlzLmNyZWF0ZWQodGhpcy5hdHRycykpOyAgICAgICBcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gdGhlIGNvbXBpbGF0aW9uXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBfX2NvbXBpbGUoKSB7XG4gICAgbGV0IGNvbnRyb2wgPSB0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMgfHwgIXRoaXMuX19ldmFsdWF0ZVBhcmVudDtcbiAgICBsZXQgcCA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIHRoaXMuX19hdHRyaWJ1dGVPZiA9IGNvbnRyb2w/IHRoaXM6IHRoaXMuX19ldmFsdWF0ZVBhcmVudC5fX2FraWxpO1xuXG4gICAgaWYgKCF0aGlzLl9fcmVjb21waWxpbmcgfHwgdGhpcy5fX2NvbXBpbGluZy5uZXdQYXJlbnQgfHwgdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzKSB7XG4gICAgICB0aGlzLl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKHRoaXMuZWwsIHRoaXMuX19hdHRyaWJ1dGVPZik7XG4gICAgfVxuXG4gICAgY29uc3QgaW50ZXJwb2xhdGUgPSAoY2hpbGRyZW4sIHBhcmVudCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlID09IDMgJiYgdGhpcy5fX2luaXRpYWxpemVOb2RlKGNoaWxkLCBwYXJlbnQpKSB7XG4gICAgICAgICAgdGhpcy5fX2V2YWx1YXRlTm9kZShjaGlsZCwgdGhpcy5fX2NvbXBpbGluZz8gdGhpcy5fX2NvbXBpbGluZy5jaGVja0NoYW5nZXM6IGZhbHNlKTsgICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaGlsZC5ub2RlVHlwZSA9PSAxICYmICFjaGlsZC5fX2FraWxpKSB7XG4gICAgICAgICAgdGhpcy5fX2ludGVycG9sYXRlQXR0cmlidXRlcyhjaGlsZCk7XG4gICAgICAgICAgaW50ZXJwb2xhdGUoY2hpbGQuY2hpbGROb2RlcywgY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGludGVycG9sYXRlKHRoaXMuZWwuY2hpbGROb2RlcywgdGhpcy5lbCk7XG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IHRydWU7XG4gICAgbGV0IHJlcztcblxuICAgIGlmICghdGhpcy5fX3JlY29tcGlsaW5nKSB7XG4gICAgICByZXMgPSBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgdGhpcy5hdHRycy5vbkNvbXBpbGVkICYmIHRoaXMuYXR0cnMub25Db21waWxlZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGlsZWQoKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkge1xuICAgICAgICBwID0gcmVxdWVzdC5nZXQodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCwgeyBjYWNoZTogdGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZUNhY2hlIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5fX2NvbnRlbnQ7XG4gICAgICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgcmVzLmRhdGEpO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9fY29udGVudDsgICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJlcyA9IEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uUmVjb21waWxlZCAmJiB0aGlzLmF0dHJzLm9uUmVjb21waWxlZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgICAgdGhpcy5yZWNvbXBpbGVkKCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5fX3JlY29tcGlsaW5nID0gZmFsc2U7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IG51bGw7XG5cbiAgICByZXR1cm4gcC50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuX19pc0NvbXBpbGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZSB0aGUgY29tcG9uZW50XG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBfX3Jlc29sdmUoKSB7XG4gICAgaWYgKHRoaXMuX19pc1Jlc29sdmVkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuYXR0cnMub25SZXNvbHZlZCAmJiB0aGlzLmF0dHJzLm9uUmVzb2x2ZWQudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKEFraWxpLmlzb2xhdGUoKCkgPT4gdGhpcy5yZXNvbHZlZCgpKSkudGhlbihyZXMgPT4ge1xuICAgICAgdGhpcy5fX2lzUmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJ0IG9mIHRoZSB7QHNlZSBDb21wb25lbnQjX19jb21waWxlfSBtZXRob2RcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbml0aWFsaXplKCkgeyAgICBcbiAgICBsZXQgcGFyZW50ID0gQWtpbGkuZ2V0QWtpbGlQYXJlbnRzKHRoaXMuZWwsIGZhbHNlKTsgICAgIFxuICAgIGxldCBTY29wZSA9IHRoaXMuY29uc3RydWN0b3Iuc2NvcGUgfHwgQWtpbGkuU2NvcGU7XG4gICAgbGV0IHNjb3BlO1xuICAgIGxldCBpc1Jvb3QgPSBBa2lsaS5fX3Jvb3QgPT09IHRoaXMuZWw7XG4gICAgdGhpcy5lbC5fX2FraWxpID0gdGhpcztcblxuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIHNjb3BlID0gbmV3IFNjb3BlKHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdzY29wZScpIHx8IEFraWxpLmNyZWF0ZVNjb3BlTmFtZSgpLCB0aGlzLmVsLCB0aGlzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzY29wZSA9IG5ldyBTY29wZShpc1Jvb3Q/ICdyb290JzogQWtpbGkuY3JlYXRlU2NvcGVOYW1lKCksIHRoaXMuZWwsIHRoaXMpO1xuICAgICAgaXNSb290ICYmIChBa2lsaS5yb290ID0gdGhpcyk7XG4gICAgfVxuXG4gICAgbGV0IF9fc2NvcGUgPSBzY29wZTtcbiAgICBsZXQgX3Njb3BlID0gT2JqZWN0LmFzc2lnbihzY29wZSwgdGhpcy5zY29wZSk7XG4gICAgbGV0IGNvbnRyb2xBdHRyaWJ1dGVzID0gdGhpcy5jb25zdHJ1Y3Rvci5jb250cm9sQXR0cmlidXRlcztcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5jb25zdHJ1Y3Rvci5ldmVudHM7XG5cbiAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZSkge1xuICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgdGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGVVcmwpIHtcbiAgICAgIHRoaXMuX19jb250ZW50ID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIH1cblxuICAgIHRoaXMuX19zY29wZSA9IF9fc2NvcGU7XG4gICAgdGhpcy5fX2V2ZW50cyA9IGV2ZW50cztcbiAgICB0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMgPSBjb250cm9sQXR0cmlidXRlcztcbiAgICB0aGlzLl9fc2F2ZUF0dHJpYnV0ZVByb3h5SW4gPSB0aGlzLmNvbnN0cnVjdG9yLnNhdmVBdHRyaWJ1dGVQcm94eUluO1xuICAgIHRoaXMuX19zYXZlQXR0cmlidXRlUHJveHlPdXQgPSB0aGlzLmNvbnN0cnVjdG9yLnNhdmVBdHRyaWJ1dGVQcm94eU91dDtcblxuICAgIEFraWxpLmFkZFNjb3BlKHNjb3BlKTtcbiAgICB0aGlzLnNjb3BlID0gdGhpcy5fX25lc3RlZE9ic2VydmUoX3Njb3BlLCBbXSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGJvb2xlYW4gYXR0cmlidXRlc1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldEJvb2xlYW5BdHRyaWJ1dGVzKCkge1xuICAgIHRoaXMuYm9vbGVhbkF0dHJpYnV0ZXMgPSBbXS5jb25jYXQoQWtpbGkuaHRtbEJvb2xlYW5BdHRyaWJ1dGVzLCB0aGlzLmNvbnN0cnVjdG9yLmJvb2xlYW5BdHRyaWJ1dGVzKTtcblxuICAgIGNvbnN0IHNldEF0dHIgPSAoZWwpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBhdHRycyA9IGVsLmF0dHJpYnV0ZXMsIGwgPSBhdHRycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IG5vZGUgPSBhdHRyc1tpXTtcblxuICAgICAgICBpZiAodGhpcy5ib29sZWFuQXR0cmlidXRlcy5pbmRleE9mKG5vZGUubm9kZU5hbWUpICE9IC0xKSB7XG4gICAgICAgICAgaWYgKGVsLmhhc0F0dHJpYnV0ZShgYm9vbGVhbi0ke25vZGUubm9kZU5hbWV9YCkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShgYm9vbGVhbi0ke25vZGUubm9kZU5hbWV9YCwgZWwuZ2V0QXR0cmlidXRlKG5vZGUubm9kZU5hbWUpIHx8IG5vZGUubm9kZU5hbWUpO1xuICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShub2RlLm5vZGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGVsLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBlbC5jaGlsZHJlbltpXTtcblxuICAgICAgICBpZiAoIWNoaWxkLl9fYWtpbGkpIHtcbiAgICAgICAgICBzZXRBdHRyKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBzZXRBdHRyKHRoaXMuZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBldmVudHNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXRFdmVudHMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLl9fZXZlbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGV2ID0gdGhpcy5fX2V2ZW50c1tpXTtcbiAgICAgICEvXm9uLS9pLnRlc3QoZXYpICYmIChldiA9ICdvbi0nICsgZXYpO1xuXG4gICAgICBpZiAoIXRoaXMuZWwuaGFzQXR0cmlidXRlKGV2KSkge1xuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZShldiwgJycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgY29tcG9uZW50IHBhcmVudHNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXRQYXJlbnRzKCkge1xuICAgIGxldCBwYXJlbnRzID0gQWtpbGkuZ2V0QWtpbGlQYXJlbnRzKHRoaXMuZWwpO1xuXG4gICAgaWYgKCFwYXJlbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBuZXdQYXJlbnQgPSB0aGlzLl9fcGFyZW50ICE9PSBwYXJlbnRzWzBdO1xuICAgIGxldCBldmFsdWF0ZVBhcmVudCA9IG51bGw7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHBhcmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcGFyZW50ID0gcGFyZW50c1tpXTtcblxuICAgICAgaWYgKCFwYXJlbnQuX19ha2lsaS5jb25zdHJ1Y3Rvci50cmFuc3BhcmVudCkge1xuICAgICAgICBldmFsdWF0ZVBhcmVudCA9IHBhcmVudDtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9fY29tcGlsaW5nLm5ld1BhcmVudCA9IG5ld1BhcmVudDtcbiAgICBuZXdQYXJlbnQgJiYgdGhpcy5fX2RldGFjaCgpO1xuXG4gICAgaWYgKHRoaXMuY29uc3RydWN0b3IudHJhbnNwYXJlbnQpIHtcbiAgICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50ID0gZXZhbHVhdGVQYXJlbnQuX19ha2lsaTtcbiAgICB9XG5cbiAgICB0aGlzLl9fZXZhbHVhdGVQYXJlbnQgPSBldmFsdWF0ZVBhcmVudDtcbiAgICB0aGlzLl9fcGFyZW50ID0gcGFyZW50c1swXTtcbiAgICB0aGlzLl9fcGFyZW50cyA9IHBhcmVudHM7XG4gICAgdGhpcy5zY29wZS5fX3BhcmVudCA9IHRoaXMuX19ldmFsdWF0ZVBhcmVudC5fX2FraWxpLnNjb3BlO1xuICAgICF0aGlzLl9fcmVjb21waWxpbmcgJiYgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fYWRkQ2hpbGQodGhpcy5lbCk7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMuc2NvcGUsIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX3Njb3BlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgY2hpbGQgZWxlbWVudCB0byB0aGUgbGlzdFxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYWRkQ2hpbGQoZWwpIHtcbiAgICB0aGlzLl9fY2hpbGRyZW4ucHVzaChlbCk7XG4gIH1cblxuICAvKipcbiAgICogU3BsaWNlIGNoaWxkIGZyb20gdGhlIGxpc3RcbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NwbGljZUNoaWxkKGVsKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLl9fY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLl9fY2hpbGRyZW5baV07XG5cbiAgICAgIGlmIChjaGlsZCA9PT0gZWwpIHtcbiAgICAgICAgdGhpcy5fX2NoaWxkcmVuLnNwbGljZShpLCAxKTtcbiAgICAgICAgaS0tO1xuICAgICAgICBsLS07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFlvdSBjYW4gY2hhbmdlIGV4cHJlc3Npb24gYmVmb3JlIHBhcnNpbmcgaGVyZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwcmVzc2lvblxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRQYXJzZWRFeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBub2RlIGhhcyBhbnkgcHJvcGVydHkgY2hhbmdlcyBvciBub3RcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NoZWNrRXZhbHVhdGlvbihub2RlKSB7XG4gICAgaWYgKCFPYmplY3Qua2V5cyhub2RlLl9fcHJvcGVydGllcykubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBrIGluIG5vZGUuX19wcm9wZXJ0aWVzKSB7XG4gICAgICBpZiAoIW5vZGUuX19wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgcHJvcCA9IG5vZGUuX19wcm9wZXJ0aWVzW2tdO1xuICAgICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMocHJvcC5rZXlzLCBwcm9wLmNvbXBvbmVudC5fX3Njb3BlKTtcblxuICAgICAgaWYgKCF1dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSh2YWx1ZSwgcHJvcC52YWx1ZSwgcHJvcC5jb3B5KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogIENoZWNrIG5vZGUgaGFzIGNoYW5nZWQgb24gdGhlIGNlcnRhaW4ga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NoZWNrTm9kZVByb3BlcnR5Q2hhbmdlKG5vZGUsIGtleXMsIHZhbHVlKSB7XG4gICAgbGV0IHByb3AgPSB0aGlzLl9fZ2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMpO1xuICAgIFxuICAgIGlmICghcHJvcCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuICF1dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSh2YWx1ZSwgcHJvcC52YWx1ZSwgcHJvcC5jb3B5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gZXhjZXB0aW9uIG1lc3NhZ2VcbiAgICogXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBcbiAgICogQHBhcmFtIHtFcnJvcn0gZXJyIFxuICAgKi9cbiAgX19jcmVhdGVFeGNlcHRpb25NZXNzYWdlKG5vZGUsIGVycikge1xuICAgIGxldCB0YWdOYW1lID0gbm9kZS5fX2NvbXBvbmVudC5lbC50YWdOYW1lO1xuICAgIGxldCBhdHRyTmFtZSA9IG5vZGUuX19jb21wb25lbnQuZWwuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKTtcbiAgICBsZXQgY29tcG9uZW50TmFtZSA9IChhdHRyTmFtZSB8fCB0YWdOYW1lKS50b0xvd2VyQ2FzZSgpO1xuICAgIGxldCBlbGVtZW50TmFtZSA9IG5vZGUuX19lbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBsZXQgYXR0cmlidXRlTmFtZSA9IChub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpPyBub2RlLm5hbWUudG9Mb3dlckNhc2UoKTogJyc7ICAgICAgICBcbiAgICBsZXQgbWVzc2FnZXMgPSBbIGVyci5tZXNzYWdlLCBub2RlLl9fZXhwcmVzc2lvbiBdO1xuICAgIGF0dHJpYnV0ZU5hbWUgJiYgbWVzc2FnZXMucHVzaChgW2F0dHJpYnV0ZSAke2F0dHJpYnV0ZU5hbWV9XWApO1xuICAgIG1lc3NhZ2VzID0gbWVzc2FnZXMuY29uY2F0KFsgYFtlbGVtZW50ICR7ZWxlbWVudE5hbWV9XWAsIGBbY29tcG9uZW50ICR7Y29tcG9uZW50TmFtZX1dYCBdKTtcbiAgICByZXR1cm4gYEV4cHJlc3Npb24gZXJyb3I6IGAgKyBtZXNzYWdlcy5qb2luKCdcXG5cXHRhdCAnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSBub2RlIGV4cHJlc3Npb25cbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlKG5vZGUpIHtcbiAgICBsZXQgY291bnRlciA9IDA7XG4gICAgbGV0IGF0dHJpYnV0ZVZhbHVlO1xuICAgIGxldCBleHByZXNzaW9uO1xuICAgIGNvbnN0IGV2YWxDb21wb25lbnQgPSBub2RlLl9fYXR0cmlidXRlT2YgfHwgbm9kZS5fX2NvbXBvbmVudDtcblxuICAgIGlmIChub2RlLl9fY29tcG9uZW50LnBhcmVudHMoKGNvbSkgPT4gY29tLl9fcHJldmVudCkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4geyByZXM6IG5vZGUuX19leHByZXNzaW9uIH07XG4gICAgfVxuXG4gICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKSAmJiBub2RlLl9fY29tcG9uZW50Ll9fcHJldmVudCkge1xuICAgICAgcmV0dXJuIHsgcmVzOiBub2RlLl9fZXhwcmVzc2lvbiB9O1xuICAgIH1cbiAgICBcbiAgICBsZXQgcmVzID0gbm9kZS5fX2V4cHJlc3Npb24ucmVwbGFjZShldmFsdWF0aW9uUmVnZXhHbG9iYWwsIChtLCBkKSA9PiB7XG4gICAgICBjb3VudGVyKys7XG4gICAgICBsZXQgZXZhbHVhdGU7XG4gICAgICBsZXQgZXZhbHVhdGlvbiA9IFtdO1xuICAgICAgbGV0IGV4aXN0aW5nQmluZGluZ3MgPSB7fTtcbiAgICAgIGxldCBwYXJlbnRCaW5kaW5ncyA9IHt9O1xuICAgICAgbGV0IHBhcnNlVmFsdWUgPSBub2RlLl9fY29tcG9uZW50Ll9fZ2V0UGFyc2VkRXhwcmVzc2lvbihkKTtcbiAgICAgIEFraWxpLl9fZXZhbHVhdGlvbiA9IHsgbm9kZTogbm9kZSwgbGlzdDogW10sIGNvbXBvbmVudDogbm9kZS5fX2NvbXBvbmVudCB9O1xuICAgICAgXG4gICAgICB0cnkge1xuICAgICAgICBldmFsdWF0ZSA9IHRoaXMuY29uc3RydWN0b3IucGFyc2UoZXZhbENvbXBvbmVudC5fX2V2YWx1YXRpb25Db21wb25lbnQuc2NvcGUsIHBhcnNlVmFsdWUpO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGVycikgeyAgICAgICAgXG4gICAgICAgIHRocm93IHRoaXMuX19jcmVhdGVFeGNlcHRpb25NZXNzYWdlKG5vZGUsIGVycik7XG4gICAgICB9XG5cbiAgICAgIGlmIChBa2lsaS5fX2V2YWx1YXRpb24pIHtcbiAgICAgICAgZXZhbHVhdGlvbiA9IEFraWxpLl9fZXZhbHVhdGlvbi5saXN0O1xuICAgICAgICBBa2lsaS5fX2V2YWx1YXRpb24ubGlzdCA9IG51bGw7XG4gICAgICAgIEFraWxpLl9fZXZhbHVhdGlvbiA9IG51bGw7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGZvciAobGV0IGkgPSBldmFsdWF0aW9uLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGxldCBkYXRhID0gZXZhbHVhdGlvbltpXTtcbiAgICAgICAgbGV0IGhhc2ggPSBkYXRhLmNvbXBvbmVudC5fX2NyZWF0ZUtleXNIYXNoKGRhdGEua2V5cyk7XG4gICAgICAgIGxldCBwYXJlbnRzSGFzaCA9IGRhdGEuY29tcG9uZW50Ll9fY3JlYXRlS2V5c0hhc2goZGF0YS5wYXJlbnRzKTtcbiAgICAgICBcbiAgICAgICAgaWYgKGRhdGEubm90QmluZGluZykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nQmluZGluZ3NbaGFzaF0pIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwYXJlbnRWYWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGRhdGEucGFyZW50cywgZGF0YS5jb21wb25lbnQuX19zY29wZSk7ICAgICAgICBcblxuICAgICAgICBpZiAocGFyZW50VmFsdWUgJiYgdHlwZW9mIHBhcmVudFZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgaWYgKEFraWxpLm9wdGlvbnMuZGVidWcgJiYgcGFyZW50QmluZGluZ3NbcGFyZW50c0hhc2hdID09IDUwKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgY29uc29sZS53YXJuKFtcbiAgICAgICAgICAgICAgYEZvciBoaWdoZXIgcGVyZm9ybWFuY2UsIGRvbid0IGxvb3AgUHJveHkgYXJyYXlzL29iamVjdHMgaW5zaWRlIGV4cHJlc3Npb24gZnVuY3Rpb25zLCBvciB1c2UgQWtpbGkudW5ldmFsdWF0ZSgpIHRvIHdyYXAgeW91IGNvZGUuYCxcbiAgICAgICAgICAgICAgYCR7IG5vZGUuX19leHByZXNzaW9uIH1gLFxuICAgICAgICAgICAgICBgc2NvcGUgcHJvcGVydHkgXCIkeyBkYXRhLnBhcmVudHMuam9pbignLicpfVwiYFxuICAgICAgICAgICAgXS5qb2luKCdcXG5cXHRhdCAnKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICFwYXJlbnRCaW5kaW5nc1twYXJlbnRzSGFzaF0/IHBhcmVudEJpbmRpbmdzW3BhcmVudHNIYXNoXSA9IDE6IHBhcmVudEJpbmRpbmdzW3BhcmVudHNIYXNoXSsrO1xuICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIGlmIChcbiAgICAgICAgICB1dGlscy5pc1Njb3BlUHJveHkocGFyZW50VmFsdWUpICYmIFxuICAgICAgICAgIGRhdGEuY29tcG9uZW50ICE9PSBldmFsQ29tcG9uZW50Ll9fZXZhbHVhdGlvbkNvbXBvbmVudCAmJiBcbiAgICAgICAgICBkYXRhLmNvbXBvbmVudCA9PT0gZGF0YS5yZWFsQ29tcG9uZW50XG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9ICBcblxuICAgICAgICBkYXRhLmNvbXBvbmVudC5fX2JpbmRBbmRTZXRQcm9wZXJ0eShub2RlLCBkYXRhLmtleXMsIGRhdGEuZXZhbHVhdGVkKTtcbiAgICAgICAgZXhpc3RpbmdCaW5kaW5nc1toYXNoXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGV4aXN0aW5nQmluZGluZ3MgPSBudWxsO1xuICAgICAgZXZhbHVhdGlvbiA9IG51bGw7XG5cbiAgICAgIGlmIChub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpIHtcbiAgICAgICAgZXhwcmVzc2lvbiA9IG07XG4gICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gZXZhbHVhdGU7XG4gICAgICAgIHJldHVybiB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUoZXZhbHVhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGV2YWx1YXRlID09ICdvYmplY3QnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGV2YWx1YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlKSB7XG4gICAgICAgICAgcmV0dXJuIGV2YWx1YXRlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBldmFsdWF0ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7IHJlcywgY291bnRlciwgZXhwcmVzc2lvbiwgYXR0cmlidXRlVmFsdWUgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIHRoZSBub2RlIGFuZCBzZXQgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtib29sZWFufSBbZXZhbHVhdGVkXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2JpbmRBbmRTZXRQcm9wZXJ0eShub2RlLCBrZXlzLCBldmFsdWF0ZWQpIHtcbiAgICBsZXQgYmluZCA9IHRoaXMuX19nZXRCb3VuZE5vZGUoa2V5cywgbm9kZSk7XG4gICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKTtcblxuICAgIGlmICghYmluZCkge1xuICAgICAgdGhpcy5fX2JpbmQoa2V5cywgeyBub2RlIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX19zZXROb2RlUHJvcGVydHkobm9kZSwga2V5cywgdmFsdWUsIGV2YWx1YXRlZCk7XG4gIH1cblxuICAvKipcbiAgICogTmVzdGVkIGV2YWx1YXRpb24gYnkga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3dpdGhvdXRQYXJlbnRzPWZhbHNlXSAtIGlmIHRydWUgZXZhbHVhdGlvbiB3aWxsIGJlIG9ubHkgZm9yIHRoZSBjdXJyZW50IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZU5lc3RlZChrZXlzLCB3aXRob3V0UGFyZW50cyA9IGZhbHNlKSB7XG4gICAgbGV0IHNjb3BlID0gdGhpcy5fX3Njb3BlO1xuICAgIGxldCBwcm9wcyA9IFtdOyAgICBcbiAgICBcbiAgICBpZiAoIXdpdGhvdXRQYXJlbnRzKSB7XG4gICAgICBsZXQgbGFzdFByb3BzID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgICAgIGxldCB2YWx1ZTtcblxuICAgICAgICBsYXN0UHJvcHMgPSBbLi4ubGFzdFByb3BzLCBrZXldO1xuICAgICAgICB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGxhc3RQcm9wcywgc2NvcGUpO1xuICAgICAgICBwcm9wcy5wdXNoKHsga2V5czogbGFzdFByb3BzLCB2YWx1ZTogdmFsdWV9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBwcm9wcy5wdXNoKHsga2V5czoga2V5cywgdmFsdWU6IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHNjb3BlKX0pO1xuICAgIH1cblxuICAgIGxldCBwcm9wc0xlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICAgIGNvbnN0IGVsRXZhbHVhdGUgPSAoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgY29tcG9uZW50ID0gZWxlbWVudC5fX2FraWxpOyAgICAgXG5cbiAgICAgIGZvciAobGV0IG0gPSAwOyBtIDwgcHJvcHNMZW5ndGg7IG0rKykge1xuICAgICAgICBsZXQgcHJvcCA9IHByb3BzW21dO1xuICAgICAgICBsZXQgZGF0YTtcbiAgICAgICAgXG4gICAgICAgIGlmIChjb21wb25lbnQgPT09IHRoaXMpIHtcbiAgICAgICAgICBsZXQgYmluZCA9IGNvbXBvbmVudC5fX2dldEJpbmQocHJvcC5rZXlzKTtcbiAgICAgICAgICBkYXRhID0gYmluZD8gKGJpbmQuX19kYXRhIHx8IFtdKTogW107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGF0YSA9IGNvbXBvbmVudC5fX2dldEFsbEJpbmRzKHByb3Aua2V5cyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICghZGF0YSB8fCAhZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGsgPSAwLCBjID0gZGF0YS5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgICAgICBjb25zdCBiaW5kID0gZGF0YVtrXTsgXG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKGNvbXBvbmVudC5fX2NoZWNrTm9kZVByb3BlcnR5Q2hhbmdlKGJpbmQubm9kZSwgcHJvcC5rZXlzLCBwcm9wLnZhbHVlKSkgeyAgXG4gICAgICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlS2V5cyhwcm9wLmtleXMpOyAgICAgXG4gICAgICAgICAgICBjb25zdCBjaGVja1Byb3AgPSBjb21wb25lbnQuX19nZXROb2RlUHJvcGVydHkoYmluZC5ub2RlLCBwcm9wLmtleXMpO1xuICAgICAgICAgICAgY2hlY2tQcm9wICYmIGNoZWNrUHJvcC5ldmFsdWF0ZWQgJiYgY29tcG9uZW50LnNjb3BlLl9fc2V0KHByb3Aua2V5cywgcHJvcC52YWx1ZSwgZmFsc2UsIHRydWUpOyBcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2V2YWx1YXRlTm9kZShiaW5kLm5vZGUsIGZhbHNlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yIChsZXQgX2sgaW4gYmluZC5ub2RlLl9fcHJvcGVydGllcykge1xuICAgICAgICAgICAgICBpZiAoIWJpbmQubm9kZS5fX3Byb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoX2spKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGxldCBfcHJvcCA9IGJpbmQubm9kZS5fX3Byb3BlcnRpZXNbX2tdO1xuICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhfcHJvcC5rZXlzLCBfcHJvcC5jb21wb25lbnQuX19zY29wZSk7XG4gICAgICAgICAgICAgIF9wcm9wLmNvbXBvbmVudC5fX3NldE5vZGVQcm9wZXJ0eShiaW5kLm5vZGUsIF9wcm9wLmtleXMsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29tcG9uZW50Ll9fZW5hYmxlS2V5cyhwcm9wLmtleXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH07XG5cbiAgICBjb25zdCBldmFsdWF0ZSA9IChlbGVtZW50cykgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IGVsRXZhbHVhdGUoZWxlbWVudHNbaV0pO1xuICAgICAgICBldmFsdWF0ZShjb21wb25lbnQuX19jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGVsRXZhbHVhdGUodGhpcy5lbCk7XG4gICAgZXZhbHVhdGUodGhpcy5fX2NoaWxkcmVuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSB2YWx1ZSBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlbGV0ZWQ9ZmFsc2VdIC0gdHJ1ZSBpZiB2YWx1ZSBpcyBkZWxldGluZ1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlQnlLZXlzIChrZXlzLCB2YWx1ZSwgaXNEZWxldGVkID0gZmFsc2UpIHsgICAgIFxuICAgIGxldCBkYXRhID0gdGhpcy5fX2dldEJpbmQoa2V5cyk7XG5cbiAgICBjb25zdCB1bmJpbmQgPSAob2JqLCBwYXJlbnRzKSA9PiB7XG4gICAgICBmb3IgKGxldCBrIGluIG9iaikge1xuICAgICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSB8fCB0aGlzLl9faXNTeXN0ZW1CaW5kaW5nS2V5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgX2tleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tdKTtcbiAgICAgICAgbGV0IF9fa2V5cyA9IF9rZXlzLnNsaWNlKCk7XG4gICAgICAgIGxldCBfaXNEZWxldGVkID0gZmFsc2U7XG4gICAgICAgIGxldCB2YWwgPSBvYmpba107XG4gICAgICAgIGxldCBoYXNLZXk7XG4gICAgICAgIFxuICAgICAgICBfX2tleXMuc2hpZnQoKTtcbiAgICAgICAgaGFzS2V5ID0gdXRpbHMuaGFzUHJvcGVydHlCeUtleXMoX19rZXlzLCB2YWx1ZSk7XG5cbiAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JyAmJiAhaGFzS2V5KSB7XG4gICAgICAgICAgX2lzRGVsZXRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsICYmIHR5cGVvZiB2YWwgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB1bmJpbmQodmFsLCBfa2V5cyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19ldmFsdWF0ZU5lc3RlZChfa2V5cywgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCAhaGFzS2V5KSB7XG4gICAgICAgICAgdGhpcy5fX3VuYmluZChfa2V5cyk7XG4gICAgICAgICAgX2lzRGVsZXRlZCAmJiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhfX2tleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgZGF0YSAmJiB1bmJpbmQoZGF0YSwgW10uY29uY2F0KGtleXMpKTtcbiAgICB0aGlzLl9fZXZhbHVhdGVOZXN0ZWQoa2V5cywgZmFsc2UpO1xuXG4gICAgaWYgKGlzRGVsZXRlZCkge1xuICAgICAgdGhpcy5fX3VuYmluZChrZXlzKTtcbiAgICAgIGlzRGVsZXRlZCAmJiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSBldmVudCBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZUV2ZW50KG5vZGUsIGVsLCBlKSB7XG4gICAgbGV0IGV4cHJlc3Npb24gPSBldmFsdWF0aW9uUmVnZXguZXhlYyhub2RlLl9fZXhwcmVzc2lvbik7XG4gICAgbGV0IGV2YWx1YXRlO1xuXG4gICAgaWYgKCFleHByZXNzaW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fX2V2YWx1YXRpbmdFdmVudCA9IHtcbiAgICAgIGVsOiBlbCxcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIGV2ZW50OiBlLFxuICAgICAgbm9kZVxuICAgIH07XG5cbiAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0ge307XG5cbiAgICB0cnkge1xuICAgICAgZXZhbHVhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLnBhcnNlKHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50LnNjb3BlLCBleHByZXNzaW9uWzFdLCB7IGV2ZW50OiBlIH0pO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7ICAgICAgICBcbiAgICAgIHRocm93IHRoaXMuX19jcmVhdGVFeGNlcHRpb25NZXNzYWdlKG5vZGUsIGVycik7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSBudWxsO1xuICAgIHJldHVybiBldmFsdWF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBjaGFuZ2VzIGFuZCBldmFsdWF0ZSB0aGUgcGFzc2VkIG5vZGVcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2NoZWNrXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlTm9kZShub2RlLCBjaGVjayA9IHRydWUpIHtcbiAgICBjb25zdCBrZXkgPSBub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHI/ICd2YWx1ZSc6ICdub2RlVmFsdWUnO1xuXG4gICAgaWYgKGNoZWNrPyB0aGlzLl9fY2hlY2tFdmFsdWF0aW9uKG5vZGUpOiB0cnVlKSB7ICAgICAgXG4gICAgICBjb25zdCB7IHJlcywgYXR0cmlidXRlVmFsdWUsIGV4cHJlc3Npb24sIGNvdW50ZXIgfSA9IHRoaXMuX19ldmFsdWF0ZShub2RlKTsgICAgIFxuICAgICAgbm9kZVtrZXldICE9IHJlcyAmJiAobm9kZVtrZXldID0gcmVzKTtcblxuICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cikge1xuICAgICAgICBsZXQgdmFsdWUgPSByZXM7XG4gICAgICAgIGxldCBpc0Jvb2xlYW5BdHRyaWJ1dGUgPSBmYWxzZTtcbiAgXG4gICAgICAgIGlmIChjb3VudGVyID09IDEgJiYgZXhwcmVzc2lvbiAmJiBub2RlLl9fZXhwcmVzc2lvbiA9PSBleHByZXNzaW9uKSB7XG4gICAgICAgICAgdmFsdWUgPSBhdHRyaWJ1dGVWYWx1ZTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgY29uc3QgY2xlYXJBdHRyaWJ1dGUgPSBub2RlLm5vZGVOYW1lLnJlcGxhY2UoL15ib29sZWFuLSguKykvaSwgJyQxJyk7XG4gICAgICAgIGNvbnN0IGNhbWVsQXR0cmlidXRlID0gdXRpbHMudG9DYW1lbENhc2UoY2xlYXJBdHRyaWJ1dGUpO1xuICBcbiAgICAgICAgaWYgKGNsZWFyQXR0cmlidXRlICE9IG5vZGUubm9kZU5hbWUpIHtcbiAgICAgICAgICBpc0Jvb2xlYW5BdHRyaWJ1dGUgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlID0gISF2YWx1ZTtcbiAgICAgICAgfSAgICAgICAgICBcbiAgXG4gICAgICAgIGlmIChub2RlLl9fYXR0cmlidXRlT24pIHsgICAgICAgIFxuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5vZGUuX19hdHRyaWJ1dGVPbjtcbiAgICAgICAgICAhY29tcG9uZW50Ll9fc2F2ZUF0dHJpYnV0ZVByb3h5SW4gJiYgKHZhbHVlID0gdXRpbHMuY29weSh2YWx1ZSkpO1xuICAgICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSB0cnVlO1xuICAgICAgICAgIGNvbXBvbmVudC5hdHRyc1tjYW1lbEF0dHJpYnV0ZV0gPSB2YWx1ZTtcbiAgICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gZmFsc2U7XG4gIFxuICAgICAgICAgIGlmIChjb21wb25lbnQuX19pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2F0dHJUcmlnZ2VyQnlOYW1lKGNhbWVsQXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzQm9vbGVhbkF0dHJpYnV0ZSkge1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBub2RlLl9fZWxlbWVudDtcbiAgICAgICAgICB2YWx1ZT8gZWxlbWVudC5zZXRBdHRyaWJ1dGUoY2FtZWxBdHRyaWJ1dGUsICd0cnVlJyk6IGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGNhbWVsQXR0cmlidXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlW2tleV07XG4gIH1cblxuICAvKipcbiAgICogQXR0cmlidXRlIG5vZGUgaW5pdGlhbGl6aW5nXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBhdHRyaWJ1dGVPZiAtIGlmIG5vZGUgaXMgbGlua2VkIHdpdGggcGFyZW50IHNjb3BlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZUF0dHJpYnV0ZShub2RlLCBlbCwgYXR0cmlidXRlT2YpIHtcbiAgICBpZiAoIW5vZGUgfHwgc3lzdGVtQXR0cmlidXRlcy5pbmRleE9mKG5vZGUubm9kZU5hbWUpICE9IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoIXRoaXMuX19pbml0aWFsaXplTm9kZShub2RlLCBlbCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZXZlbnROYW1lID0gbm9kZS5ub2RlTmFtZS5yZXBsYWNlKC9eb24tKC4rKS9pLCAnJDEnKTtcbiAgICBsZXQgbm9kZU5hbWUgPSB1dGlscy50b0NhbWVsQ2FzZShub2RlLm5vZGVOYW1lKTtcbiAgICBsZXQgY29tcG9uZW50ID0gYXR0cmlidXRlT2Y/IGF0dHJpYnV0ZU9mOiB0aGlzO1xuXG4gICAgaWYgKGV2ZW50TmFtZSAhPSBub2RlLm5vZGVOYW1lKSB7XG4gICAgICBpZiAobm9kZS5fX2V2ZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGVtaXR0ZXIgPSBuZXcgQWtpbGkuRXZlbnRFbWl0dGVyKGV2ZW50TmFtZSwgZWwsIGNvbXBvbmVudCk7XG5cbiAgICAgIGlmIChub2RlLl9fZXhwcmVzc2lvbikge1xuICAgICAgICBlbWl0dGVyLmJpbmQoKGUpID0+IHtcbiAgICAgICAgICByZXR1cm4gY29tcG9uZW50Ll9fZXZhbHVhdGVFdmVudChub2RlLCBlbCwgZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBub2RlLl9fZXZlbnQgPSBlbWl0dGVyO1xuICAgICAgZWwuc2V0QXR0cmlidXRlKG5vZGUubm9kZU5hbWUsIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZShlbWl0dGVyKSk7XG5cbiAgICAgIGlmIChhdHRyaWJ1dGVPZikge1xuICAgICAgICB0aGlzLl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IHRydWU7XG4gICAgICAgIHRoaXMuYXR0cnNbbm9kZU5hbWVdID0gZW1pdHRlcjtcbiAgICAgICAgdGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChhdHRyaWJ1dGVPZikge1xuICAgICAgbm9kZS5fX2F0dHJpYnV0ZU9uID0gdGhpcztcbiAgICAgIG5vZGUuX19hdHRyaWJ1dGVPZiA9IGNvbXBvbmVudDtcbiAgICB9XG4gICAgXG4gICAgbGV0IGNoZWNrID0gdGhpcy5fX2NvbXBpbGluZz8gdGhpcy5fX2NvbXBpbGluZy5jaGVja0NoYW5nZXM6IGZhbHNlO1xuICAgIGNvbXBvbmVudC5fX2V2YWx1YXRlTm9kZShub2RlLCBjaGVjayk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgbm9kZVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbml0aWFsaXplTm9kZShub2RlLCBlbCkge1xuICAgIGlmIChub2RlLl9faW5pdGlhbGl6ZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbCA9IG5vZGVbKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cik/ICd2YWx1ZSc6ICdub2RlVmFsdWUnXS50cmltKCk7XG4gICAgY29uc3QgaGFzQmluZGluZyA9IGV2YWx1YXRpb25SZWdleC50ZXN0KHZhbCk7XG4gICAgY29uc3QgaXNCb29sZWFuID0gL15ib29sZWFuLS9pLnRlc3Qobm9kZS5ub2RlTmFtZSk7XG4gICAgY29uc3QgaXNFdmVudCA9IC9eb24tKC4rKS9pLnRlc3Qobm9kZS5ub2RlTmFtZSk7XG5cbiAgICBpZighZWwuX19ha2lsaSAmJiAhaGFzQmluZGluZyAmJiAhaXNCb29sZWFuICYmICFpc0V2ZW50KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbm9kZS5fX2lzRXZlbnQgPSBpc0V2ZW50O1xuICAgIG5vZGUuX19oYXNCaW5kaW5ncyA9IGhhc0JpbmRpbmc7XG4gICAgbm9kZS5fX2lzQm9vbGVhbiA9IGlzQm9vbGVhbjtcbiAgICBub2RlLl9fZXhwcmVzc2lvbiA9IHZhbDtcbiAgICBub2RlLl9fcHJvcGVydGllcyA9IHt9O1xuICAgIG5vZGUuX19hdHRyaWJ1dGVPZiA9IG51bGw7XG4gICAgbm9kZS5fX2F0dHJpYnV0ZU9uID0gbnVsbDtcbiAgICBub2RlLl9fZXZlbnQgPSBudWxsOyAgICBcbiAgICBub2RlLl9faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIG5vZGUuX19jb21wb25lbnQgPSB0aGlzO1xuICAgIG5vZGUuX19lbGVtZW50ID0gZWw7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRGVpbml0aWFsaXplIHRoZSBub2RlXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RlaW5pdGlhbGl6ZU5vZGUobm9kZSkge1xuICAgIGlmIChub2RlLl9fZXZlbnQpIHtcbiAgICAgIG5vZGUuX19ldmVudC51bmJpbmQoKTtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5fX2hhc0JpbmRpbmdzKSB7XG4gICAgICB0aGlzLl9fcGFyZW50ICYmIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2V2YWx1YXRpb25Db21wb25lbnQuX191bmJpbmRCeU5vZGVzKFtub2RlXSk7ICAgICAgICAgIFxuICAgIH1cblxuICAgIGRlbGV0ZSBub2RlLl9faGFzQmluZGluZ3M7XG4gICAgZGVsZXRlIG5vZGUuX19pc0Jvb2xlYW47XG4gICAgZGVsZXRlIG5vZGUuX19pc0V2ZW50O1xuICAgIGRlbGV0ZSBub2RlLl9fZXhwcmVzc2lvbjtcbiAgICBkZWxldGUgbm9kZS5fX3Byb3BlcnRpZXM7XG4gICAgZGVsZXRlIG5vZGUuX19hdHRyaWJ1dGVPZjtcbiAgICBkZWxldGUgbm9kZS5fX2F0dHJpYnV0ZU9uO1xuICAgIGRlbGV0ZSBub2RlLl9fZXZlbnQ7ICAgIFxuICAgIGRlbGV0ZSBub2RlLl9faW5pdGlhbGl6ZWQ7XG4gICAgZGVsZXRlIG5vZGUuX19jb21wb25lbnQ7XG4gICAgZGVsZXRlIG5vZGUuX19lbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEludGVycG9sYXRlIGF0dHJpYnV0ZXMgb2YgdGhlIGVsZW1lbnRcbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gW2F0dHJpYnV0ZU9mPW51bGxdIC0gaWYgbm9kZSBpcyBsaW5rZWQgd2l0aCBwYXJlbnQgc2NvcGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXMoZWwsIGF0dHJpYnV0ZU9mID0gbnVsbCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBhdHRycyA9IGVsLmF0dHJpYnV0ZXMsIGwgPSBhdHRycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHRoaXMuX19pbml0aWFsaXplQXR0cmlidXRlKGF0dHJzW2ldLCBlbCwgYXR0cmlidXRlT2YpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmUgYXR0cmlidXRlcyBhcyBwcm94eVxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RlZmluZUF0dHJpYnV0ZXMoKSB7XG4gICAgY29uc3QgY2hhbmdlQXR0cmlidXRlID0gKGtleSwgdmFsdWUsIGlzRGVsZXRlZCA9IGZhbHNlKSA9PiB7XG4gICAgICBpZiAodGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgbm9kZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlTm9kZShrZXkpO1xuXG4gICAgICBpZiAoaXNEZWxldGVkKSB7XG4gICAgICAgIG5vZGUgJiYgdGhpcy5fX2RlaW5pdGlhbGl6ZU5vZGUobm9kZSk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgIHJldHVybiBcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCFub2RlKSB7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgICBub2RlID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGVOb2RlKGtleSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbm9kZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9fZGVpbml0aWFsaXplTm9kZShub2RlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fX2luaXRpYWxpemVBdHRyaWJ1dGUobm9kZSwgdGhpcy5lbCwgdGhpcy5fX2F0dHJpYnV0ZU9mKTtcbiAgICB9O1xuXG4gICAgdGhpcy5hdHRycyA9IG5ldyBQcm94eSh0aGlzLl9fYXR0cnMsIHtcbiAgICAgIGdldDogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGlmIChrZXkgPT0gJ19faXNQcm94eScpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgIH0sXG4gICAgICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IGF0dHJLZXkgPSB1dGlscy50b0Rhc2hDYXNlKGtleSk7XG5cbiAgICAgICAgaWYgKHRoaXMuYm9vbGVhbkF0dHJpYnV0ZXMuaW5kZXhPZihhdHRyS2V5KSAhPSAtMSkge1xuICAgICAgICAgIGF0dHJLZXkgPSBgYm9vbGVhbi0ke2F0dHJLZXl9YDtcbiAgICAgICAgICB2YWx1ZT8gdGhpcy5lbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk6IHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgIGNoYW5nZUF0dHJpYnV0ZShhdHRyS2V5LCB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUodmFsdWUpKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgICAgZGVsZXRlUHJvcGVydHk6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IGF0dHJLZXkgPSB1dGlscy50b0Rhc2hDYXNlKGtleSk7XG4gICAgICAgIGNoYW5nZUF0dHJpYnV0ZShhdHRyS2V5LCB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUodmFsdWUpLCB0cnVlKTtcbiAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgcHJveHkgdG8gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcmV0dXJucyB7UHJveHl9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fb2JzZXJ2ZShvYmosIHBhcmVudHMpIHtcbiAgICByZXR1cm4gbmV3IFByb3h5KG9iaiwge1xuICAgICAgZ2V0OiAodGFyZ2V0LCBrZXkpID0+IHsgXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX2lzUHJveHlcIikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PSBcIl9fdGFyZ2V0XCIpIHtcbiAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PSBcIl9fY29tcG9uZW50XCIpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX2tleXNcIikge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5fX2lzU3lzdGVtS2V5KGtleSkpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQWtpbGkuX19ldmFsdWF0aW9uKSB7ICBcbiAgICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG4gICAgICAgICAgbGV0IG5vdEJpbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBsZXQgZXZhbHVhdGVkID0gIXV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19zY29wZSk7IFxuICAgICAgICAgIGxldCBjb21wb25lbnQgPSB0aGlzO1xuICAgICAgICAgIGxldCBleGNBcnIgPSBrZXlzLnNsaWNlKCk7XG5cbiAgICAgICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgU2NvcGUpIHtcbiAgICAgICAgICAgIGxldCByZWFsVGFyZ2V0ID0gdXRpbHMuZ2V0T3duUHJvcGVydHlUYXJnZXQodGFyZ2V0LCBrZXkpO1xuICAgICAgICAgICAgcmVhbFRhcmdldCAmJiAocmVhbFRhcmdldCBpbnN0YW5jZW9mIFNjb3BlKSAmJiAoY29tcG9uZW50ID0gIHJlYWxUYXJnZXQuX19jb21wb25lbnQpO1xuICAgICAgICAgIH0gXG5cbiAgICAgICAgICBpZiAoQWtpbGkuX193cmFwcGluZyAmJiBrZXlzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBmb3JQYXJlbnRzID0gQWtpbGkuX19ldmFsdWF0aW9uLmNvbXBvbmVudC5wYXJlbnRzKGMgPT4gYyBpbnN0YW5jZW9mIEFraWxpLmNvbXBvbmVudHMuRm9yKTtcblxuICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZm9yUGFyZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGsgPSAwLCBjID0ga2V5cy5sZW5ndGg7IGsgPCBjOyBrKyspIHsgXG4gICAgICAgICAgICAgIGNvbnN0IGZvckRhdGEgPSBmb3JQYXJlbnRzW2ldLmRhdGE7XG4gICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhleGNBcnIsIGNvbXBvbmVudC5fX3Njb3BlKTtcblxuICAgICAgICAgICAgICBpZiAoZGF0YSAmJiB0eXBlb2YgZGF0YSA9PSAnb2JqZWN0JyAmJiBmb3JEYXRhID09PSBkYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgICBleGNBcnIucG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgaWYgKCEoa2V5IGluIHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH0gICAgICAgICAgXG4gICAgICAgICAgZWxzZSBpZiAoIXV0aWxzLmdldEVudW1lcmFibGVQcm9wZXJ0eVRhcmdldCh0YXJnZXQsIGtleSkpIHtcbiAgICAgICAgICAgIG5vdEJpbmRpbmcgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX19iaW5kTm9kZShBa2lsaS5fX2V2YWx1YXRpb24ubGlzdCwgY29tcG9uZW50LCBrZXlzLCBwYXJlbnRzLCB0YXJnZXRba2V5XSwgbm90QmluZGluZywgZXZhbHVhdGVkKTtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICB9LFxuICAgICAgc2V0OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7IFxuICAgICAgICBpZiAodGhpcy5fX2lzU3lzdGVtS2V5KGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhbHVlID0gQWtpbGkud3JhcEZ1bmN0aW9uKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrZXldKTtcblxuICAgICAgICBpZiAodGhpcy5fX2NoZWNrRGlzYWJsZW1lbnQoa2V5cykpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgQ0hFQ0tfRVhJU1RFTkNFOiBpZiAocGFyZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGV0IHRhcmdldFBhcmVudFZhbHVlID0gcGFyZW50cy5sZW5ndGggPiAxPyB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhwYXJlbnRzLnNsaWNlKDAsIC0xKSwgdGhpcy5fX3Njb3BlKTogdGhpcy5fX3Njb3BlO1xuICAgICAgICAgIFxuICAgICAgICAgIGZvciAobGV0IGsgaW4gdGFyZ2V0UGFyZW50VmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghdGFyZ2V0UGFyZW50VmFsdWUuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXRQYXJlbnRWYWx1ZVtrXSAmJiB0YXJnZXRQYXJlbnRWYWx1ZVtrXS5fX3RhcmdldCA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgIGJyZWFrIENIRUNLX0VYSVNURU5DRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0W2tleV0gPSB0aGlzLl9fbmVzdGVkT2JzZXJ2ZSh2YWx1ZSwga2V5cyk7XG5cbiAgICAgICAgaWYoIXRoaXMuX19pc1Jlc29sdmVkKSB7XG4gICAgICAgICAgdGhpcy5fX3RyaWdnZXJTdG9yZUFuZEF0dHIoa2V5cywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgXG4gICAgICAgIGlmIChBa2lsaS5fX2lzb2xhdGlvbikgeyBcbiAgICAgICAgICB0aGlzLl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0KHBhcmVudHMsIGtleSwgZmFsc2UpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5fX2lzUmVzb2x2ZWQpIHtcbiAgICAgICAgICB0aGlzLl9fdHJpZ2dlclN0b3JlQW5kQXR0cihrZXlzLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLl9faXNNb3VudGVkKSB7ICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgIHRoaXMuX19ldmFsdWF0ZUJ5S2V5cyhrZXlzLCB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBkZWxldGVQcm9wZXJ0eTogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tleV0pO1xuXG4gICAgICAgIGlmICh0aGlzLl9fY2hlY2tEaXNhYmxlbWVudChrZXlzKSkge1xuICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9faXNTeXN0ZW1LZXkoa2V5KSkge1xuICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcblxuICAgICAgICBpZighdGhpcy5fX2lzUmVzb2x2ZWQpIHtcbiAgICAgICAgICB0aGlzLl9fdHJpZ2dlclN0b3JlQW5kQXR0cihrZXlzLCB1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoQWtpbGkuX19pc29sYXRpb24pIHtcbiAgICAgICAgICB0aGlzLl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0KHBhcmVudHMsIGtleSwgdHJ1ZSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLl9faXNSZXNvbHZlZCkge1xuICAgICAgICAgIHRoaXMuX190cmlnZ2VyU3RvcmVBbmRBdHRyKGtleXMsIHVuZGVmaW5lZCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9fZXZhbHVhdGVCeUtleXMoa2V5cywgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciBzdG9yZSBhbmQgYXR0cmlidXRlcyBjaGFuZ2VcbiAgICovXG4gIF9fdHJpZ2dlclN0b3JlQW5kQXR0cihrZXlzLCB2YWx1ZSkge1xuICAgIGNvbnN0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcblxuICAgIGlmICh0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddKSB7XG4gICAgICB0aGlzLl9fc3RvcmVUcmlnZ2VyQnlLZXlzKGtleXMsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddKSB7XG4gICAgICB0aGlzLl9fYXR0clRyaWdnZXJCeUtleXMoa2V5cywgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgaGFzaCBmb3IgdGhlIGtleXNcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9ICAgIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZUtleXNIYXNoKGtleXMpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5fX3Njb3BlLl9fbmFtZX0uJHtBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyl9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHN0b3JlIG9mIHRoZSBkaXNhYmxlbWVudCB0eXBlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBcbiAgICovXG4gIF9fZ2V0RGlzYWJsZW1lbnRUeXBlU3RvcmUodHlwZSkge1xuICAgIHJldHVybiAoe1xuICAgICAgcHJveHk6ICdfX2Rpc2FibGVQcm94eScsXG4gICAgICBzdG9yZTogJ19fZGlzYWJsZVN0b3JlS2V5cycsXG4gICAgICBhdHRyOiAnX19kaXNhYmxlQXR0cktleXMnXG4gICAgfSlbdHlwZV07XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZSB0aGUga2V5cyBzZXR0ZXJcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3R5cGVdICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kaXNhYmxlS2V5cyhrZXlzLCB0eXBlID0gJ3Byb3h5JykgeyAgICBcbiAgICB0aGlzW3RoaXMuX19nZXREaXNhYmxlbWVudFR5cGVTdG9yZSh0eXBlKV1ba2V5cz8gdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpOiAnX19hbGwnXSA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIHRoZSBrZXlzIHNldHRlclxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlXSAgIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2VuYWJsZUtleXMoa2V5cywgdHlwZSA9ICdwcm94eScpIHtcbiAgICBkZWxldGUgdGhpc1t0aGlzLl9fZ2V0RGlzYWJsZW1lbnRUeXBlU3RvcmUodHlwZSldW2tleXM/IHRoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKTogJ19fYWxsJ107XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGtleXMgc2V0dGVyIGRpc2FibGVtYW50XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3R5cGVdICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2hlY2tEaXNhYmxlbWVudChrZXlzLCB0eXBlID0gJ3Byb3h5Jykge1xuICAgIGNvbnN0IHN0b3JlID0gdGhpcy5fX2dldERpc2FibGVtZW50VHlwZVN0b3JlKHR5cGUpO1xuICAgIHJldHVybiB0aGlzW3N0b3JlXS5fX2FsbD8gdHJ1ZTogdGhpc1tzdG9yZV1bdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlIHRoZSB2YWx1ZSB0byB0aGUgc3RvcmUgYnkgdGhlIGtleXNcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc3RvcmVUcmlnZ2VyQnlLZXlzKGtleXMsIHZhbHVlKSB7IFxuICAgIGlmICh0aGlzLl9fY2hlY2tEaXNhYmxlbWVudChrZXlzLCAnc3RvcmUnKSkgeyAgICAgIFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGxpbmtzID0gdGhpcy5fX3N0b3JlTGlua3NbQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpXTtcblxuICAgIGlmICghbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICB2YWx1ZSA9IHV0aWxzLmNvcHkodmFsdWUpO1xuICAgIGNvbnN0IHAgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGlua3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBsaW5rID0gbGlua3NbaV07ICAgXG4gICAgICBcbiAgICAgIGlmICghbGluay5zZXQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHAucHVzaCh0aGlzLl9fc3RvcmVUcmlnZ2VyQnlOYW1lKGxpbmsubmFtZSwgdmFsdWUpKTsgICAgICBcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmUgdGhlIHZhbHVlIHRvIHRoZSBzdG9yZSBieSB0aGUgbmFtZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc3RvcmVUcmlnZ2VyQnlOYW1lKG5hbWUsIHZhbHVlKSB7ICBcbiAgICBzdG9yZS5fX3RhcmdldFtuYW1lXSA9IHZhbHVlO1xuICAgIGxldCBsaW5rcyA9IChBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0gfHwgW10pLmNvbmNhdChBa2lsaS5fX3N0b3JlTGlua3NbJyonXSB8fCBbXSk7XG5cbiAgICBpZiAoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsaW5rcyA9IHV0aWxzLnNvcnQobGlua3MsIFsnZGF0ZSddLCB0cnVlKTtcblxuICAgIHJldHVybiBBa2lsaS5uZXh0VGljaygoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxpbmtzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5rID0gbGlua3NbaV07XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGxpbmsuY29tcG9uZW50O1xuXG4gICAgICAgIGlmIChjb21wb25lbnQgPT09IHRoaXMpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKGxpbmsuZm4pIHtcbiAgICAgICAgICBBa2lsaS51bmlzb2xhdGUoKCkgPT4gbGluay5mbi5jYWxsKGNvbXBvbmVudCwgdmFsdWUsIG5hbWUpKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWxpbmsuZ2V0KSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlS2V5cyhsaW5rLmtleXMsICdzdG9yZScpO1xuICAgICAgICBsZXQgY3VycmVudCA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGxpbmsua2V5cywgY29tcG9uZW50Ll9fc2NvcGUpO1xuICAgICAgICAhdXRpbHMuY29tcGFyZShjdXJyZW50LCB2YWx1ZSkgJiYgY29tcG9uZW50LnNjb3BlLl9fc2V0KGxpbmsua2V5cywgdmFsdWUpOyAgIFxuICAgICAgICBjb21wb25lbnQuX19lbmFibGVLZXlzKGxpbmsua2V5cywgJ3N0b3JlJyk7XG4gICAgICB9ICBcbiAgICB9KTsgICBcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBzdG9yZSBsaW5rIHdpdGggdGhlIHNjb3BlIHByb3BlcnR5XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtvYmhlY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3N0b3JlQnlLZXlzKG5hbWUsIGtleXMsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSB7IGdldDogdHJ1ZSwgc2V0OiB0cnVlLCAuLi5vcHRpb25zIH07XG5cbiAgICBpZiAoIWtleXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgU3RvcmUgbGluayBcIiR7bmFtZX1cIiBtdXN0IGhhdmUgdGhlIHNjb3BlIHByb3BlcnR5IG5hbWVgKTtcbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbnMuZ2V0ICYmICFvcHRpb25zLnNldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBTdG9yZSBsaW5rIFwiJHtuYW1lfVwiIG11c3QgaGF2ZSBhdCBsZWFzdCBcImdldFwiIG9yIFwic2V0XCIgb3B0aW9uIGFzIHRydWVgKTtcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuICAgIFxuICAgIHRoaXMuX19kaXNhYmxlS2V5cyhrZXlzLCAnc3RvcmUnKTtcbiAgICAoc3RvcmUuaGFzT3duUHJvcGVydHkobmFtZSkgfHwgIXV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19zY29wZSkpICYmIHRoaXMuc2NvcGUuX19zZXQoa2V5cywgc3RvcmVbbmFtZV0pO1xuICAgIHRoaXMuX19lbmFibGVLZXlzKGtleXMsICdzdG9yZScpO1xuICAgIGxldCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG4gICAgbGV0IGluZm87XG5cbiAgICBpZiAoIXRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ10pIHtcbiAgICAgIHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ10gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgYXJyID0gdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuXG4gICAgICBpZiAocmVzLmNvbXBvbmVudCA9PT0gdGhpcyAmJiByZXMubmFtZSA9PSBuYW1lICYmIHJlcy5rZXlTdHJpbmcgPT0ga2V5U3RyaW5nKSB7XG4gICAgICAgIHJlcy5zZXQgPSBvcHRpb25zLnNldDtcbiAgICAgICAgcmVzLmdldCA9IG9wdGlvbnMuZ2V0O1xuICAgICAgICByZXMuZGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIUFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSkge1xuICAgICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgaW5mbyA9IHsgY29tcG9uZW50OiB0aGlzLCBuYW1lLCBrZXlzLCBrZXlTdHJpbmcsIGRhdGU6IERhdGUubm93KCksIHNldDogb3B0aW9ucy5zZXQsIGdldDogb3B0aW9ucy5nZXQgfTtcbiAgICB0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddLnB1c2goaW5mbyk7XG4gICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdLnB1c2goaW5mbyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgc3RvcmUgbGluayB3aXRoIHRoZSBmdW5jdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuICAgXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIF9fc3RvcmVCeUZ1bmN0aW9uKG5hbWUsIGZuLCBvcHRpb25zID0ge30pIHsgXG4gICAgbGV0IGNhbGwgPSBvcHRpb25zLmNhbGxPblN0YXJ0ID09PSB1bmRlZmluZWQ/IHN0b3JlLl9fdGFyZ2V0Lmhhc093blByb3BlcnR5KG5hbWUpOiBvcHRpb25zLmNhbGxPblN0YXJ0O1xuXG4gICAgaWYgKCFBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0pIHtcbiAgICAgIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGxldCBsaW5rcyA9IEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYgKHJlcy5jb21wb25lbnQgPT09IHRoaXMgJiYgcmVzLm5hbWUgPT0gbmFtZSAmJiByZXMuZm4gPT09IGZuKSB7XG4gICAgICAgIHJlcy5kYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXS5wdXNoKHsgY29tcG9uZW50OiB0aGlzLCBuYW1lLCBmbiwgZGF0ZTogRGF0ZS5ub3coKSB9KTtcblxuICAgIGlmIChuYW1lID09ICcqJyAmJiBvcHRpb25zLmNhbGxPblN0YXJ0ICE9PSBmYWxzZSkge1xuICAgICAgbGV0IHN0b3JlS2V5cyA9IE9iamVjdC5rZXlzKHN0b3JlLl9fdGFyZ2V0KTtcbiAgICAgIGxldCBwID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gc3RvcmVLZXlzLmxlbmd0aCA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGtleSA9IHN0b3JlS2V5c1tpXTtcbiAgICAgICAgbGV0IHZhbCA9IHN0b3JlLl9fdGFyZ2V0W2tleV07XG4gICAgICAgIHAucHVzaChBa2lsaS51bmlzb2xhdGUoKCkgPT4gZm4uY2FsbCh0aGlzLCB2YWwsIGtleSkpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHApO1xuICAgIH1cblxuICAgIGlmIChjYWxsKSB7XG4gICAgICByZXR1cm4gQWtpbGkudW5pc29sYXRlKCgpID0+IGZuLmNhbGwodGhpcywgc3RvcmVbbmFtZV0pKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBzdG9yZSBsaW5rIHdpdGggdGhlIHNjb3BlIHByb3BlcnR5XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3Vuc3RvcmVCeUtleXMobmFtZSwga2V5cykge1xuICAgIGlmICgha2V5cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgaGF2ZSB0byBwYXNzIHRoZSBzY29wZSBwcm9wZXJ0eSBuYW1lIGZvciBzdG9yZSBsaW5rIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cblxuICAgIGxldCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG4gICAgbGV0IGFyciA9IHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ107XG5cbiAgICBpZiAoIWFyci5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGFycltpXTtcbiAgICAgIGxldCBsaW5rcyA9IEFraWxpLl9fc3RvcmVMaW5rc1tyZXMubmFtZV07XG5cbiAgICAgIGlmIChyZXMuY29tcG9uZW50ICE9PSB0aGlzIHx8IHJlcy5uYW1lICE9IG5hbWUgfHwgcmVzLmtleVN0cmluZyAhPSBrZXlTdHJpbmcpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGFyci5zcGxpY2UoaSwgMSk7XG5cbiAgICAgIGlmICghbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgayA9IGxpbmtzLmxlbmd0aCAtIDE7IGsgPj0gMDsgay0tKSB7XG4gICAgICAgIGxldCBsaW5rID0gbGlua3Nba107XG5cbiAgICAgICAgaWYgKGxpbmsuY29tcG9uZW50ID09PSB0aGlzICYmIGxpbmsua2V5U3RyaW5nID09IGtleVN0cmluZykge1xuICAgICAgICAgIGxpbmtzLnNwbGljZShrLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWxpbmtzLmxlbmd0aCkge1xuICAgICAgICBkZWxldGUgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghYXJyLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ107XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgc3RvcmUgbGluayB3aXRoIHRoZSBmdW5jdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3Vuc3RvcmVCeUZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYgKCFBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV07XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IGxpbmtzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gbGlua3NbaV07XG5cbiAgICAgIGlmIChyZXMuY29tcG9uZW50ID09PSB0aGlzICYmIHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmZuID09PSBmbikge1xuICAgICAgICBsaW5rcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghbGlua3MubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIGFuIGF0dHJpYnV0ZSBldmVudCBieSB0aGUga2V5c1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hdHRyVHJpZ2dlckJ5S2V5cyhrZXlzLCB2YWx1ZSkge1xuICAgIGlmICh0aGlzLl9fY2hlY2tEaXNhYmxlbWVudChrZXlzLCAnYXR0cicpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGxpbmtzID0gdGhpcy5fX2F0dHJMaW5rc1tBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyldO1xuICAgXG4gICAgaWYgKCFsaW5rcyB8fCAhbGlua3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBBa2lsaS5uZXh0VGljaygoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxpbmtzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5rID0gbGlua3NbaV07XG5cbiAgICAgICAgaWYgKGxpbmsuZm4pIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbGluay5zZXQpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgZXYgPSAnb24nICsgdXRpbHMuY2FwaXRhbGl6ZShsaW5rLm5hbWUpO1xuICAgICAgICB0aGlzLmF0dHJzW2V2XSAmJiB0aGlzLmF0dHJzW2V2XS50cmlnZ2VyKHZhbHVlLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgICB9XG4gICAgfSk7ICBcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIGFuIGF0dHJpYnV0ZSBldmVudCBieSB0aGUgbmFtZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYXR0clRyaWdnZXJCeU5hbWUobmFtZSwgdmFsdWUpIHtcbiAgICBsZXQgbGlua3MgPSAodGhpcy5fX2F0dHJMaW5rc1tuYW1lXSB8fCBbXSkuY29uY2F0KHRoaXMuX19hdHRyTGlua3NbJyonXSB8fCBbXSk7XG4gICAgXG4gICAgaWYgKCFsaW5rcyB8fCAhbGlua3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAgXG4gICAgXG4gICAgbGlua3MgPSB1dGlscy5zb3J0KGxpbmtzLCBbJ2RhdGUnXSwgdHJ1ZSk7XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTsgICAgXG5cbiAgICAgIGlmIChsaW5rLmZuKSB7XG4gICAgICAgIEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBsaW5rLmZuLmNhbGwodGhpcywgdmFsdWUsIHV0aWxzLnRvRGFzaENhc2UobmFtZSkpKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmKCFsaW5rLmdldCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdGhpcy5fX2Rpc2FibGVLZXlzKGxpbmsua2V5cywgJ2F0dHInKTtcbiAgICAgIGxldCBjdXJyZW50ID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMobGluay5rZXlzLCB0aGlzLl9fc2NvcGUpO1xuICAgICAgIXV0aWxzLmNvbXBhcmUoY3VycmVudCwgdmFsdWUpICYmIHRoaXMuc2NvcGUuX19zZXQobGluay5rZXlzLCB2YWx1ZSk7XG4gICAgICB0aGlzLl9fZW5hYmxlS2V5cyhsaW5rLmtleXMsICdhdHRyJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBhdHRyaWJ1dGUgbGluayB3aXRoIHRoZSBzY29wZSBwcm9wZXJ0eVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hdHRyQnlLZXlzKG5hbWUsIGtleXMsIG9wdGlvbnMgPSB7fSkgeyAgIFxuICAgIG9wdGlvbnMgPSB7IGdldDogdHJ1ZSwgc2V0OiB0cnVlLCAuLi5vcHRpb25zIH07XG4gICAgbmFtZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKG5hbWUpO1xuXG4gICAgaWYgKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEF0dHJpYnV0ZSBsaW5rIFwiJHtuYW1lfVwiIG11c3QgaGF2ZSB0aGUgc2NvcGUgcHJvcGVydHkgbmFtZWApO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5fX2Rpc2FibGVLZXlzKGtleXMsICdhdHRyJyk7XG4gICAgKHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkobmFtZSkgfHwgIXV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19zY29wZSkpICYmIHRoaXMuc2NvcGUuX19zZXQoa2V5cywgdGhpcy5hdHRyc1tuYW1lXSk7IFxuICAgIHRoaXMuX19lbmFibGVLZXlzKGtleXMsICdhdHRyJyk7XG4gICAgbGV0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcbiAgICBcbiAgICBpZiAoIXRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXSkge1xuICAgICAgdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddID0gW107XG4gICAgfVxuXG4gICAgbGV0IGFyciA9IHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuXG4gICAgICBpZiAocmVzLm5hbWUgPT0gbmFtZSAmJiByZXMua2V5U3RyaW5nID09IGtleVN0cmluZykge1xuICAgICAgICByZXMuZ2V0ID0gb3B0aW9ucy5nZXQ7XG4gICAgICAgIHJlcy5zZXQgPSBvcHRpb25zLnNldDtcbiAgICAgICAgcmVzLmRhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddLnB1c2goeyBuYW1lLCBrZXlzLCBrZXlTdHJpbmcsIGRhdGU6IERhdGUubm93KCksIHNldDogb3B0aW9ucy5zZXQsIGdldDogb3B0aW9ucy5nZXQgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGF0dHJpYnV0ZSBsaW5rIHdpdGggdGhlIGZ1bmN0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkIFxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIF9fYXR0ckJ5RnVuY3Rpb24obmFtZSwgZm4sIG9wdGlvbnMgPSB7fSkgeyAgICBcbiAgICBuYW1lID0gdXRpbHMudG9DYW1lbENhc2UobmFtZSk7XG4gICAgbGV0IGNhbGwgPSBvcHRpb25zLmNhbGxPblN0YXJ0ID09PSB1bmRlZmluZWQ/IHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkobmFtZSk6IG9wdGlvbnMuY2FsbE9uU3RhcnQ7ICAgIFxuXG4gICAgaWYgKCF0aGlzLl9fYXR0ckxpbmtzW25hbWVdKSB7XG4gICAgICB0aGlzLl9fYXR0ckxpbmtzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYgKHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmZuID09PSBmbikge1xuICAgICAgICByZXMuZGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdGhpcy5fX2F0dHJMaW5rc1tuYW1lXS5wdXNoKHsgbmFtZSwgZm4sIGRhdGU6IERhdGUubm93KCkgfSk7XG5cbiAgICBpZiAobmFtZSA9PSAnKicgJiYgb3B0aW9ucy5jYWxsT25TdGFydCAhPT0gZmFsc2UpIHtcbiAgICAgIGxldCBhdHRyc0tleXMgPSBPYmplY3Qua2V5cyh0aGlzLl9fYXR0cnMpLmZpbHRlcihrID0+ICEodGhpcy5fX2F0dHJzW2tdIGluc3RhbmNlb2YgQWtpbGkuRXZlbnRFbWl0dGVyKSk7XG4gICAgICBsZXQgcCA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGF0dHJzS2V5cy5sZW5ndGggOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBhdHRyc0tleXNbaV07XG4gICAgICAgIGxldCB2YWwgPSB0aGlzLl9fYXR0cnNba2V5XTtcbiAgICAgICAgcC5wdXNoKEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBmbi5jYWxsKHRoaXMsIHZhbCwgdXRpbHMudG9EYXNoQ2FzZShrZXkpKSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwocCk7XG4gICAgfVxuICAgIFxuICAgIGlmIChjYWxsKSB7XG4gICAgICByZXR1cm4gQWtpbGkudW5pc29sYXRlKCgpID0+IGZuLmNhbGwodGhpcywgdGhpcy5hdHRyc1tuYW1lXSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGF0dHJpYnV0ZSBsaW5rIHdpdGggdGhlIHNjb3BlIHByb3BlcnR5XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYXR0ckJ5S2V5cyhuYW1lLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBoYXZlIHRvIHBhc3MgdGhlIHNjb3BlIHByb3BlcnR5IG5hbWUgZm9yIGF0dHJpYnV0ZSBsaW5rIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cblxuICAgIGxldCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG4gICAgbGV0IGFyciA9IHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXTtcblxuICAgIGlmICghYXJyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuXG4gICAgICBpZiAocmVzLm5hbWUgIT0gbmFtZSB8fCByZXMua2V5U3RyaW5nICE9IGtleVN0cmluZykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgYXJyLnNwbGljZShpLCAxKTtcbiAgICB9XG5cbiAgICBpZiAoIWFyci5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ107XG4gICAgfVxuICB9XG5cbiAgIC8qKlxuICAgKiBSZW1vdmUgdGhlIGF0dHJpYnV0ZSBsaW5rIHdpdGggdGhlIGZ1bmN0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmF0dHJCeUZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYgKCF0aGlzLl9fYXR0ckxpbmtzW25hbWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYgKHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmZuID09PSBmbikge1xuICAgICAgICBsaW5rcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghbGlua3MubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGtleSBpcyBzeXN0ZW1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pc1N5c3RlbUtleSAoa2V5KSB7XG4gICAgaWYgKGtleSA9PSAnX18nIHx8IChrZXlbMF0gPT0gJ18nICYmIGtleVsxXSA9PSAnXycpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoWydjb25zdHJ1Y3RvciddLmluZGV4T2Yoa2V5KSAhPSAtMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIE5lc3RlZCBvYnNlcnZpbmcgdGhlIHZhbHVlXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gW3N0YXJ0S2V5c11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19uZXN0ZWRPYnNlcnZlICh2YWx1ZSwgc3RhcnRLZXlzKSB7XG4gICAgY29uc3Qgb2JzZXJ2ZSA9ICh2YWx1ZSwgcGFyZW50cykgPT4ge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghdXRpbHMuaXNQbGFpbk9iamVjdCh2YWx1ZSkgJiYgIXV0aWxzLmlzU2NvcGVQcm94eSh2YWx1ZSkgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIFNjb3BlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGxldCB0YXJnZXQgPSB2YWx1ZTtcblxuICAgICAgQ0hFQ0tfUFJPWFk6IGlmICh2YWx1ZS5fX2lzUHJveHkpIHtcbiAgICAgICAgdGFyZ2V0ID0gdmFsdWUuX190YXJnZXQ7XG5cbiAgICAgICAgaWYgKHRoaXMuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nKSB7XG4gICAgICAgICAgYnJlYWsgQ0hFQ0tfUFJPWFk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChcbiAgICAgICAgICB2YWx1ZS5fX2NvbXBvbmVudCAhPT0gdGhpcyB8fFxuICAgICAgICAgIEFraWxpLmpvaW5CaW5kaW5nS2V5cyhwYXJlbnRzKSAhPSBBa2lsaS5qb2luQmluZGluZ0tleXModmFsdWUuX19rZXlzKVxuICAgICAgICApIHtcbiAgICAgICAgICB0YXJnZXQgPSB1dGlscy5jb3B5KHRhcmdldCwgeyBuZXN0ZWQ6IGZhbHNlIH0pO1xuICAgICAgICAgIHZhbHVlID0gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghdGhpcy5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIFNjb3BlKSkge1xuICAgICAgICB0YXJnZXQgPSB1dGlscy5jb3B5KHRhcmdldCwgeyBuZXN0ZWQ6IGZhbHNlIH0gKTsgICAgICAgICAgXG4gICAgICAgIHZhbHVlID0gdGFyZ2V0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBrIGluIHRhcmdldCkgeyAgICAgICAgXG4gICAgICAgIGlmICghdGFyZ2V0Lmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmFsID0gdGFyZ2V0W2tdOyAgICAgICAgXG4gICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrXSk7ICAgXG4gICAgICAgIHRhcmdldFtrXSA9IG9ic2VydmUodmFsLCBrZXlzKTsgIFxuICAgICAgfVxuXG4gICAgICBpZiAoIXZhbHVlLl9faXNQcm94eSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX29ic2VydmUodmFsdWUsIHBhcmVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcblxuICAgIGxldCByZXMgPSBvYnNlcnZlKHZhbHVlLCBzdGFydEtleXMgfHwgW10pO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAgLyoqXG4gICAqIENyZWF0ZSBhbiBpc29sYXRpb24gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHBhcmVudHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlbGV0ZWQ9ZmFsc2VdXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZUlzb2xhdGlvbk9iamVjdCAocGFyZW50cywga2V5LCBpc0RlbGV0ZWQgPSBmYWxzZSkge1xuICAgIGNvbnN0IGtleXMgPSBwYXJlbnRzLmxlbmd0aD8gW3BhcmVudHNbMF1dOiBba2V5XTtcbiAgICBjb25zdCBpc29sYXRpb25IYXNoID0gdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpO1xuXG4gICAgaWYgKHBhcmVudHMubGVuZ3RoKSB7XG4gICAgICBpc0RlbGV0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIUFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbkhhc2hdKSB7XG4gICAgICBBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25IYXNoXSA9IHtcbiAgICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgICBrZXlzXG4gICAgICB9O1xuICAgIH1cblxuICAgIChpc0RlbGV0ZWQgIT09IHVuZGVmaW5lZCkgJiYgKEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbkhhc2hdLmlzRGVsZXRlZCA9IGlzRGVsZXRlZCk7XG4gICAgcmV0dXJuIEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbkhhc2hdO1xuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgdGhlIG5vZGUgdG8gYmluZGluZ1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gYmluZCAtIGJ5IGRlZmF1bHQgaXMgY29tcG9uZW50Ll9fZXZhbHVhdGlvbi5saXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW25vdEJpbmRpbmc9ZmFsc2VdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2V2YWx1YXRlZD1mYWxzZV1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19iaW5kTm9kZShiaW5kLCByZWFsQ29tcG9uZW50LCBrZXlzLCBwYXJlbnRzLCB2YWx1ZSwgbm90QmluZGluZyA9IGZhbHNlLCBldmFsdWF0ZWQgPSBmYWxzZSkge1xuICAgIGxldCBwYXJlbnRLZXlzU3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKHBhcmVudHMpO1xuICAgIGxldCBjb21wb25lbnQgPSB0aGlzO1xuXG4gICAgaWYgKGJpbmQubGVuZ3RoICYmICFub3RCaW5kaW5nKSB7XG4gICAgICBsZXQgbCA9IGJpbmQubGVuZ3RoIC0gMTtcbiAgICAgIGxldCBkYXRhID0gYmluZFtsXTtcblxuICAgICAgaWYgKGRhdGEucmVhbENvbXBvbmVudCA9PT0gdGhpcyAmJiBkYXRhLmtleXNTdHJpbmcgPT0gcGFyZW50S2V5c1N0cmluZykge1xuICAgICAgICBjb21wb25lbnQgPSBkYXRhLmNvbXBvbmVudDtcbiAgICAgIH0gICAgICBcbiAgICAgIFxuICAgICAgaWYgKGRhdGEua2V5c1N0cmluZyA9PSBwYXJlbnRLZXlzU3RyaW5nICYmIGRhdGEuY29tcG9uZW50ID09PSBjb21wb25lbnQpIHtcbiAgICAgICAgYmluZC5zcGxpY2UobCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGJpbmQucHVzaCh7XG4gICAgICBjb21wb25lbnQsXG4gICAgICByZWFsQ29tcG9uZW50OiByZWFsQ29tcG9uZW50LFxuICAgICAga2V5c1N0cmluZzogQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpLFxuICAgICAgcGFyZW50cyxcbiAgICAgIGtleXMsXG4gICAgICB2YWx1ZSxcbiAgICAgIGV2YWx1YXRlZCxcbiAgICAgIG5vdEJpbmRpbmdcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUga2V5IGlzIHN5c3RlbSBiaW5kaW5nIHRoaW5nXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovIFxuICBfX2lzU3lzdGVtQmluZGluZ0tleShrZXkpIHtcbiAgICByZXR1cm4ga2V5ID09ICdfX2RhdGEnO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBiaW5kaW5nIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0QmluZChrZXlzKSB7XG4gICAgcmV0dXJuIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncykgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIG5lc3RlZCBiaW5kaW5ncyBieSBrZXlzXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKi9cbiAgX19nZXRBbGxCaW5kcyhrZXlzKSB7XG4gICAgY29uc3Qgcm9vdCA9IHRoaXMuX19nZXRCaW5kKGtleXMpO1xuXG4gICAgaWYgKCFyb290KSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgbGV0IGRhdGEgPSBbXTtcblxuICAgIGNvbnN0IGNvbGxlY3QgPSAob2JqKSA9PiB7XG4gICAgICBkYXRhID0gZGF0YS5jb25jYXQob2JqLl9fZGF0YSB8fCBbXSk7XG5cbiAgICAgIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoa2V5KSB8fCBrZXkgPT0gJ19fZGF0YScpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbGxlY3Qob2JqW2tleV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbGxlY3Qocm9vdCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGJpbmRpbmcgYnkga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0Qm91bmROb2RlKGtleXMsIG5vZGUpIHtcbiAgICBsZXQgYmluZCA9ICB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MpO1xuXG4gICAgaWYgKCFiaW5kIHx8ICFiaW5kLl9fZGF0YSB8fCAhYmluZC5fX2RhdGEubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGJpbmQuX19kYXRhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGRhdGEgPSBiaW5kLl9fZGF0YVtpXTtcblxuICAgICAgaWYgKGRhdGEubm9kZSA9PT0gbm9kZSkge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIG5vZGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtldmFsdWF0ZWQ9ZmFsc2VdXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzLCB2YWx1ZSwgZXZhbHVhdGVkID0gZmFsc2UpIHtcbiAgICBsZXQgcHJvcCA9IHRoaXMuX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cyk7ICAgIFxuICAgIGxldCBjb3B5ID0gdXRpbHMuY29weSh2YWx1ZSk7XG5cbiAgICBpZiAocHJvcCkge1xuICAgICAgbGV0IHJlcyA9IHV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlKHZhbHVlLCBwcm9wLnZhbHVlLCBwcm9wLmNvcHkpO1xuICAgICAgcHJvcC52YWx1ZSA9IHZhbHVlO1xuICAgICAgcHJvcC5jb3B5ID0gY29weTtcbiAgICAgIHJldHVybiAhcmVzO1xuICAgIH1cbiAgICBcbiAgICBub2RlLl9fcHJvcGVydGllc1t0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyldID0ge1xuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgdmFsdWUsXG4gICAgICBjb3B5LCAgICAgIFxuICAgICAga2V5cyxcbiAgICAgIGV2YWx1YXRlZCAgXG4gICAgfTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbm9kZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMpIHtcbiAgICByZXR1cm4gbm9kZS5fX3Byb3BlcnRpZXNbdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpXSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSB0aGUgbm9kZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RlbGV0ZU5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKSB7XG4gICAgbGV0IGhhc2ggPSBgJHt0aGlzLl9fc2NvcGUuX19uYW1lfS4ke0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKX1gO1xuICAgIGRlbGV0ZSBub2RlLl9fcHJvcGVydGllc1toYXNoXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIGRhdGEgd2l0aCB0aGUga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYmluZChrZXlzLCBkYXRhKSB7XG4gICAgdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzLCAobGFzdCwgdmFsdWUpID0+IHtcbiAgICAgIGxldCBvYmogPSB7IF9fZGF0YTogW10gfTtcblxuICAgICAgaWYgKCFsYXN0KSB7XG4gICAgICAgIHJldHVybiB2YWx1ZT8gdmFsdWU6IG9iajtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgICAgICBvYmogPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFvYmouX19kYXRhKSB7XG4gICAgICAgIG9iai5fX2RhdGEgPSBbXTtcbiAgICAgIH1cblxuICAgICAgb2JqLl9fZGF0YS5wdXNoKGRhdGEpO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgdGhlIGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYmluZChrZXlzKSB7XG4gICAgbGV0IGJpbmQgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MpO1xuXG4gICAgaWYgKCFiaW5kIHx8ICFiaW5kLl9fZGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYmluZC5fX2RhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IGJpbmQuX19kYXRhW2ldLm5vZGU7XG4gICAgICB0aGlzLl9fZGVsZXRlTm9kZVByb3BlcnR5KG5vZGUsIGtleXMpO1xuICAgIH1cblxuICAgIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncywgKHZhbHVlKSA9PiB7XG4gICAgICBpZiAoT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdmFsdWUuX19kYXRhID0gW107XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIGRhdGEgYnkgbm9kZXNcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlW119IG5vZGVzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5iaW5kQnlOb2Rlcyhub2Rlcykge1xuICAgIGNvbnN0IHVuYmluZCA9IChvYmopID0+IHtcbiAgICAgIGZvciAobGV0IGsgaW4gb2JqKSB7XG4gICAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChrID09ICdfX2RhdGEnKSB7XG4gICAgICAgICAgbGV0IGRhdGEgPSBvYmpba10gfHwgW107XG4gICAgICAgICAgbGV0IGwgPSBkYXRhLmxlbmd0aDtcblxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYmluZCA9IGRhdGFbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChub2Rlcy5pbmRleE9mKGJpbmQubm9kZSkgIT0gLTEpIHsgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBkYXRhLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICBsLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFsKSB7XG4gICAgICAgICAgICBkZWxldGUgb2JqW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghdGhpcy5fX2lzU3lzdGVtQmluZGluZ0tleShrKSkge1xuICAgICAgICAgIHVuYmluZChvYmpba10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICB1bmJpbmQodGhpcy5fX2JpbmRpbmdzKTtcbiAgICB0aGlzLl9fY2xlYXJFbXB0eUJpbmRpbmdzKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWxsIGVtcHR5IGJpbmRpbmdzXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb2JqXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NsZWFyRW1wdHlCaW5kaW5ncyhvYmopIHtcbiAgICBjb25zdCBjbGVhciA9IChvYmosIHBhcmVudCwga2V5KSA9PiB7XG4gICAgICBmb3IgKGxldCBrIGluIG9iaikge1xuICAgICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHZhbCA9IG9ialtrXTtcblxuICAgICAgICBpZiAoayA9PSAnX19kYXRhJyAmJiAoIXZhbCB8fCAhdmFsLmxlbmd0aCkpIHtcbiAgICAgICAgICBkZWxldGUgb2JqW2tdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLl9faXNTeXN0ZW1CaW5kaW5nS2V5KGspKSB7XG4gICAgICAgICAgaWYgKCFPYmplY3Qua2V5cyhvYmpba10pLmxlbmd0aCkge1xuICAgICAgICAgICAgZGVsZXRlIG9ialtrXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjbGVhcihvYmpba10sIG9iaiwgayk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghT2JqZWN0LmtleXMob2JqKS5sZW5ndGggJiYgcGFyZW50KSB7XG4gICAgICAgIGRlbGV0ZSBwYXJlbnRba2V5XTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY2xlYXIob2JqIHx8IHRoaXMuX19iaW5kaW5ncyk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIGxpbmtzXG4gICAqIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NsZWFyU3RvcmVMaW5rcygpIHtcbiAgICBjb25zdCBsaW5rcyA9IEFraWxpLl9fc3RvcmVMaW5rcztcblxuICAgIGZvciAobGV0IGtleSBpbiBsaW5rcykge1xuICAgICAgY29uc3QgYXJyID0gbGlua3Nba2V5XTtcblxuICAgICAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjb25zdCBsaW5rID0gYXJyW2ldO1xuICBcbiAgICAgICAgaWYgKGxpbmsuY29tcG9uZW50ID09PSB0aGlzKSB7XG4gICAgICAgICAgYXJyLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWFyci5sZW5ndGgpIHtcbiAgICAgICAgZGVsZXRlIGxpbmtzW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgY2hpbGQgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlbW92ZUNoaWxkcmVuKCkge1xuICAgIGNvbnN0IHJlbW92ZSA9IChjaGlsZHJlbikgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcblxuICAgICAgICByZW1vdmUoY2hpbGQuX19ha2lsaS5fX2NoaWxkcmVuKTtcbiAgICAgICAgY2hpbGQuX19ha2lsaS5fX3JlbW92ZSgpO1xuICAgICAgICBpLS07XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJlbW92ZSh0aGlzLl9fY2hpbGRyZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgY29tcG9uZW50IHdpdGhvdXQgY2hpbGRyZW4gcmVtb3ZpbmdcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZW1vdmUoKSB7XG4gICAgdGhpcy5fX2RldGFjaCgpO1xuICAgIHRoaXMuX19jbGVhclN0b3JlTGlua3MoKTtcbiAgICB0aGlzLmF0dHJzLm9uUmVtb3ZlZCAmJiB0aGlzLmF0dHJzLm9uUmVtb3ZlZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICB0aGlzLnJlbW92ZWQoKTsgICAgXG4gICAgQWtpbGkucmVtb3ZlU2NvcGUodGhpcy5fX3Njb3BlLl9fbmFtZSk7XG4gICAgdGhpcy5lbC5yZW1vdmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRhY2ggdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RldGFjaCgpIHtcbiAgICBpZiAodGhpcy5fX2V2YWx1YXRlUGFyZW50ICYmICF0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMpIHtcbiAgICAgIHRoaXMuX19ldmFsdWF0ZVBhcmVudC5fX2FraWxpLl9fdW5iaW5kQnlOb2RlcyhbXS5zbGljZS5jYWxsKHRoaXMuZWwuYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9fcGFyZW50KSB7XG4gICAgICB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19zcGxpY2VDaGlsZCh0aGlzLmVsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBjb21wb25lbnQgd2l0aCBjaGlsZHJlblxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2Rlc3Ryb3koKSB7XG4gICAgdGhpcy5fX3JlbW92ZUNoaWxkcmVuKCk7XG4gICAgdGhpcy5fX3JlbW92ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBjb21wb25lbnQgaHRtbFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2VtcHR5KCkge1xuICAgIGxldCBub2RlcyA9IFtdO1xuICAgIHRoaXMuX19yZW1vdmVDaGlsZHJlbigpO1xuICAgIGNvbnN0IGZpbmQgPSAoY2hpbGRyZW4pID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PSAzKSB7XG4gICAgICAgICAgbm9kZXMucHVzaChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hpbGQubm9kZVR5cGUgPT0gMSAmJiAhY2hpbGQuX19ha2lsaSkge1xuICAgICAgICAgIGZvciAobGV0IGsgPSAwLCBhdHRycyA9IGNoaWxkLmF0dHJpYnV0ZXMsIGMgPSBhdHRycy5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgICAgICAgIG5vZGVzLnB1c2goYXR0cnNbaV0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZpbmQoY2hpbGQuY2hpbGROb2Rlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIGZpbmQodGhpcy5lbC5jaGlsZE5vZGVzKTtcbiAgICB0aGlzLl9fdW5iaW5kQnlOb2Rlcyhub2Rlcyk7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcGFyZW50IGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0UGFyZW50KHNlbGVjdG9yID0gJycsIGZpbmRBbGwgPSBmYWxzZSwgbGV2ZWxzID0gbnVsbCkge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBsZXQgbGV2ZWwgPSAwO1xuXG4gICAgaWYgKHR5cGVvZiBsZXZlbHMgIT0gJ29iamVjdCcpIHtcbiAgICAgIGxldmVscyA9IFtsZXZlbHNdO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbmQgPSAocGFyZW50KSA9PiB7XG4gICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghbGV2ZWxzIHx8IGxldmVscy5pbmRleE9mKGxldmVsKSAhPSAtMSkge1xuICAgICAgICBpZiAoIXNlbGVjdG9yIHx8IHBhcmVudC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgaWYgKCFmaW5kQWxsKSB7XG4gICAgICAgICAgICBhcnIucHVzaChwYXJlbnQuX19ha2lsaSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYXJyLnB1c2gocGFyZW50Ll9fYWtpbGkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldmVsKys7XG4gICAgICBmaW5kKHBhcmVudC5fX2FraWxpLl9fcGFyZW50KTtcbiAgICB9O1xuXG4gICAgZmluZCh0aGlzLl9fcGFyZW50KTtcbiAgICByZXR1cm4gZmluZEFsbD8gYXJyOiAoYXJyWzBdIHx8IG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjaGlsZCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZpbmRBbGw9dHJ1ZV0gLSBnZXQgYXJyYXkgaWYgdHJ1ZVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldENoaWxkcmVuKHNlbGVjdG9yID0gJycsIGZpbmRBbGwgPSB0cnVlLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGxldCBsZXZlbCA9IDA7XG5cbiAgICBpZiAodHlwZW9mIGxldmVscyAhPSAnb2JqZWN0Jykge1xuICAgICAgbGV2ZWxzID0gW2xldmVsc107XG4gICAgfVxuXG4gICAgY29uc3QgZmluZCA9IChjaGlsZHJlbikgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYgKCFsZXZlbHMgfHwgbGV2ZWxzLmluZGV4T2YobGV2ZWwpICE9IC0xKSB7XG4gICAgICAgICAgaWYgKCFzZWxlY3RvciB8fCBjaGlsZC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICBpZiAoIWZpbmRBbGwpIHtcbiAgICAgICAgICAgICAgYXJyLnB1c2goY2hpbGQuX19ha2lsaSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXJyLnB1c2goY2hpbGQuX19ha2lsaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldmVsKys7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGZpbmQoY2hpbGRyZW5baV0uX19ha2lsaS5fX2NoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmluZCh0aGlzLl9fY2hpbGRyZW4pO1xuICAgIHJldHVybiBmaW5kQWxsPyBhcnI6IChhcnJbMF0gfHwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG5lYXJlc3QgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kQWxsPXRydWVdIC0gZ2V0IGFycmF5IGlmIHRydWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbcmlnaHQ9ZmFsc2VdIC0gZnJvbSB0aGUgcmlnaHQgc2lkZSBpZiB0cnVlXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0TmVhcihzZWxlY3RvciA9ICcnLCBmaW5kQWxsID0gdHJ1ZSwgcmlnaHQgPSBmYWxzZSkge1xuICAgIGlmICghdGhpcy5fX3BhcmVudCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGxldmVsRWxlbWVudHMgPSB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19jaGlsZHJlbi5zbGljZSgpO1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICByaWdodCAmJiBsZXZlbEVsZW1lbnRzLnJldmVyc2UoKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGV2ZWxFbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBlbCA9IGxldmVsRWxlbWVudHNbaV07XG5cbiAgICAgIGlmIChlbCA9PT0gdGhpcy5lbCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKCFzZWxlY3RvciB8fCBlbC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGFyci5wdXNoKGVsLl9fYWtpbGkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFyci5yZXZlcnNlKCk7XG5cbiAgICBpZiAoIWZpbmRBbGwpIHtcbiAgICAgIHJldHVybiBhcnIubGVuZ3RoPyBhcnJbMF06IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBsaW5rIHRvIHRoZSBzdG9yZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfGZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBzdG9yZShuYW1lLCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLl9faXNNb3VudGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE1ldGhvZCBcInN0b3JlXCIgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgdGhlIGNvbXBpbGF0aW9uLiBGb3IgZXhhbXBsZSwgaW4gXCJjb21waWxlZFwiIG1ldGhvZC5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYgKHR5cGVvZiBuYW1lID09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFyZ3MudW5zaGlmdCgnKicpO1xuICAgICAgaGFuZGxlciA9IG5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nPyB0aGlzLl9fc3RvcmVCeUZ1bmN0aW9uKC4uLmFyZ3MpOiB0aGlzLl9fc3RvcmVCeUtleXMoLi4uYXJncyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbGluayB3aXRoIHRoZSBhdHRyaWJ1dGVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXXxmdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgYXR0cihuYW1lLCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLl9faXNNb3VudGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE1ldGhvZCBcImF0dHJcIiBtdXN0IGJlIGNhbGxlZCBhZnRlciB0aGUgY29tcGlsYXRpb24uIEZvciBleGFtcGxlLCBpbiBcImNvbXBpbGVkXCIgbWV0aG9kLmApO1xuICAgIH1cblxuICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodHlwZW9mIG5hbWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYXJncy51bnNoaWZ0KCcqJyk7XG4gICAgICBoYW5kbGVyID0gbmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbic/IHRoaXMuX19hdHRyQnlGdW5jdGlvbiguLi5hcmdzKTogdGhpcy5fX2F0dHJCeUtleXMoLi4uYXJncyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBzdG9yZSBsaW5rXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHVuc3RvcmUobmFtZSwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5fX2lzTW91bnRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNZXRob2QgXCJ1bnN0b3JlXCIgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgdGhlIGNvbXBpbGF0aW9uLiBGb3IgZXhhbXBsZSwgaW4gXCJjb21waWxlZFwiIG1ldGhvZC5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYgKHR5cGVvZiBuYW1lID09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFyZ3MudW5zaGlmdCgnKicpO1xuICAgICAgaGFuZGxlciA9IG5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nPyB0aGlzLl9fdW5zdG9yZUJ5RnVuY3Rpb24oLi4uYXJndW1lbnRzKTogdGhpcy5fX3Vuc3RvcmVCeUtleXMoLi4uYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGF0dHJpYnV0ZSBsaW5rXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHVuYXR0cihuYW1lLCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLl9faXNNb3VudGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE1ldGhvZCBcInVuYXR0clwiIG11c3QgYmUgY2FsbGVkIGFmdGVyIHRoZSBjb21waWxhdGlvbi4gRm9yIGV4YW1wbGUsIGluIFwiY29tcGlsZWRcIiBtZXRob2QuYCk7XG4gICAgfVxuXG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICh0eXBlb2YgbmFtZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhcmdzLnVuc2hpZnQoJyonKTtcbiAgICAgIGhhbmRsZXIgPSBuYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJz8gdGhpcy5fX3VuYXR0ckJ5RnVuY3Rpb24oLi4uYXJndW1lbnRzKTogdGhpcy5fX3VuYXR0ckJ5S2V5cyguLi5hcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBjb21wb25lbnQgbWF0Y2hlcyBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gc2VsZWN0b3JcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBtYXRjaGVzKHNlbGVjdG9yKSB7XG4gICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3IodGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZWwubWF0Y2hlcyhzZWxlY3Rvcik7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNsb3Nlc3QgcGFyZW50IGNvbXBvbmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgcGFyZW50KHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldFBhcmVudChzZWxlY3RvciwgZmFsc2UsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFycmF5IG9mIHBhcmVudCBjb21wb25lbnRzIGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIHBhcmVudHMoc2VsZWN0b3IgPSAnJywgbGV2ZWxzID0gbnVsbCkge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0UGFyZW50KHNlbGVjdG9yLCB0cnVlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IGNoaWxkIGNvbXBvbmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgY2hpbGQoc2VsZWN0b3IgPSAnJywgbGV2ZWxzID0gbnVsbCkge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0Q2hpbGRyZW4oc2VsZWN0b3IsIGZhbHNlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBjaGlsZCBjb21wb25lbnRzIGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGNoaWxkcmVuKHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldENoaWxkcmVuKHNlbGVjdG9yLCB0cnVlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBjb21wb25lbnRzIGxlZnQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBiZWZvcmUoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgdHJ1ZSwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBjb21wb25lbnRzIHJpZ2h0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgYWZ0ZXIoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgdHJ1ZSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNsb3Nlc3QgY29tcG9uZW50IGxlZnQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgcHJldihzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCBmYWxzZSwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IGNvbXBvbmVudCByaWdodCBmcm9tIHRoZSBjdXJyZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR9XG4gICAqL1xuICBuZXh0KHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIGZhbHNlLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgZWxlbWVudCBwYXJlbnRcbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBwYXJlbnRcbiAgICovXG4gIGFwcGVuZFRvKHBhcmVudCkge1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogeyBzZXRQYXJlbnRzOiB0cnVlLCBjaGVja0NoYW5nZXM6IGZhbHNlIH0gfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FuY2VsIGNvbXBvbmVudCBjb21waWxhdGlvblxuICAgKi9cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXBhbGUgdGhlIGNvbXBvbmVudCwgYnV0IGNhbmNlbCB0aGUgY29tcGlsYXRpb24gaW5zaWRlIG9mIGl0XG4gICAqL1xuICBwcmV2ZW50KCkge1xuICAgIHRoaXMuX19wcmV2ZW50ID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBlbGVtZW50IGh0bWxcbiAgICpcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBlbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2VtcHR5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGVsZW1lbnRcbiAgICpcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICByZW1vdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19kZXN0cm95LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjcmVhdGVkKCkge31cbiAgY29tcGlsZWQoKSB7fVxuICByZWNvbXBpbGVkKCkge31cbiAgcmVzb2x2ZWQoKSB7fVxuICByZW1vdmVkKCkge31cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50LmpzIiwiaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogUmVxdWVzdCBjbGFzcy5cbiAqIEFuIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgYWxsb3dzIHlvdSB0byBtYWtlIHJlcXVlc3RzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JlcXVlc3RzfVxuICovXG5leHBvcnQgY2xhc3MgUmVxdWVzdCB7XG4gIF9fY2FjaGUgPSB7fTtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbZGVmYXVsdHNdIFxuICAgKi9cbiAgY29uc3RydWN0b3IoYmFzZVVybCwgZGVmYXVsdHMpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSBiYXNlVXJsPyAoYmFzZVVybC5yZXBsYWNlKC9cXC8kLywgJycpICsgJy8nKTogJyc7XG5cbiAgICB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgc3RhdHVzRXJyb3JQYXR0ZXJuOiAvXlteMjNdLyxcbiAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgIC4uLihkZWZhdWx0cyB8fCB7fSlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgcmVxdWVzdCB3aXRoIGFueSBtZXRob2RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBxdWVyeShvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIG9wdGlvbnMgPSB7Li4udGhpcy5kZWZhdWx0cywgLi4uKG9wdGlvbnMgfHwge30pfTsgXG4gICAgICBvcHRpb25zLnVybCA9IHRoaXMuYmFzZVVybD8gYCR7dGhpcy5iYXNlVXJsfSR7b3B0aW9ucy51cmwucmVwbGFjZSgvXlxcLy8sICcnKX1gOiBvcHRpb25zLnVybDsgIFxuICAgICAgb3B0aW9ucy5tZXRob2QgPSBvcHRpb25zLm1ldGhvZCB8fCAnR0VUJztcbiAgICAgIFxuICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOyAgICAgIFxuICAgICAgY29uc3QgYmVmb3JlID0gdGhpcy50cmFuc2Zvcm1CZWZvcmUoeGhyLCBvcHRpb25zKTtcbiAgICAgIHhociA9IGJlZm9yZS54aHI7XG4gICAgICBvcHRpb25zID0gYmVmb3JlLm9wdGlvbnM7XG4gICAgICAodHlwZW9mIG9wdGlvbnMub25TdGFydCA9PSAnZnVuY3Rpb24nKSAmJiBvcHRpb25zLm9uU3RhcnQoeGhyKTsgIFxuICAgICAgb3B0aW9ucy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzIHx8IHt9O1xuICAgICAgXG4gICAgICBpZiAob3B0aW9ucy5qc29uKSB7XG4gICAgICAgIG9wdGlvbnMuanNvbiAhPT0gdHJ1ZSAmJiAob3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5qc29uKSk7XG4gICAgICAgIG9wdGlvbnMuaGVhZGVyc1snY29udGVudC10eXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgIG9wdGlvbnMucmVzcG9uc2VUeXBlID0gb3B0aW9ucy5yZXNwb25zZVR5cGUgfHwgJ2pzb24nO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAob3B0aW9ucy5mb3JtKSB7XG4gICAgICAgIG9wdGlvbnMuYm9keSA9IHRoaXMuY3JlYXRlRm9ybURhdGEob3B0aW9ucy5mb3JtKTtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzWydjb250ZW50LXR5cGUnXSA9ICdtdWx0aXBhcnQvZm9ybS1kYXRhJztcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMucGFyYW1zKSB7XG4gICAgICAgIGxldCBzdHIgPSB0aGlzLnBhcmFtc1RvUXVlcnkob3B0aW9ucy5wYXJhbXMpO1xuICAgICAgICBzdHIgJiYgKG9wdGlvbnMudXJsICs9IFwiP1wiICsgc3RyKTtcbiAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICBsZXQgaGFzaCA9IG51bGw7XG4gICAgICBsZXQgY2FjaGUgPSB0eXBlb2Ygb3B0aW9ucy5jYWNoZSA9PSAnZnVuY3Rpb24nPyBvcHRpb25zLmNhY2hlKG9wdGlvbnMpOiBvcHRpb25zLmNhY2hlO1xuICAgICAgKHdpbmRvdy5BS0lMSV9TRVJWRVIgJiYgIUFraWxpLl9faW5pdCkgJiYgKGNhY2hlID0gdHJ1ZSk7XG5cbiAgICAgIGlmKG9wdGlvbnMubWV0aG9kLnRvVXBwZXJDYXNlKCkgPT0gJ0dFVCcgJiYgKCFvcHRpb25zLmJvZHkgfHwgdHlwZW9mIG9wdGlvbnMuYm9keSA9PSAnc3RyaW5nJykpIHtcbiAgICAgICAgaGFzaCA9IHRoaXMuY3JlYXRlQ2FjaGVIYXNoKHsgXG4gICAgICAgICAgdXJsOiBvcHRpb25zLnVybCwgXG4gICAgICAgICAgbWV0aG9kOiBvcHRpb25zLm1ldGhvZCxcbiAgICAgICAgICB1c2VyOiBvcHRpb25zLnVzZXIsIFxuICAgICAgICAgIHBhc3N3b3JkOiBvcHRpb25zLnBhc3N3b3JkLCBcbiAgICAgICAgICBib2R5OiBvcHRpb25zLmJvZHkgXG4gICAgICAgIH0pOyAgICAgICAgXG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmKGNhY2hlICYmIGhhc2gpIHsgICAgICAgIFxuICAgICAgICBsZXQgX2NhY2hlID0gdGhpcy5nZXRDYWNoZShoYXNoKTtcbiAgICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgICAgIGlmKF9jYWNoZSAmJiAoY2FjaGUgPT09IHRydWUgfHwgbm93IC0gX2NhY2hlLmNyZWF0ZWRBdCA8PSBjYWNoZSkpIHtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0aGlzLnRyYW5zZm9ybUFmdGVyKF9jYWNoZS5yZXN1bHQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB4aHIub3BlbihvcHRpb25zLm1ldGhvZCwgb3B0aW9ucy51cmwsIHRydWUsIG9wdGlvbnMudXNlciwgb3B0aW9ucy5wYXNzd29yZCk7XG5cbiAgICAgIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KCd0aW1lb3V0JykpIHtcbiAgICAgICAgeGhyLnRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnJlc3BvbnNlVHlwZSkge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gb3B0aW9ucy5yZXNwb25zZVR5cGU7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLndpdGhDcmVkZW50aWFscykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gb3B0aW9ucy53aXRoQ3JlZGVudGlhbHM7XG4gICAgICB9XG5cbiAgICAgIGxldCBoZWFkZXJLZXlzID0gT2JqZWN0LmtleXMob3B0aW9ucy5oZWFkZXJzKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBoZWFkZXJLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgayA9IGhlYWRlcktleXNbaV07XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGssIG9wdGlvbnMuaGVhZGVyc1trXSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5vblByb2dyZXNzID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgeGhyLm9ucHJvZ3Jlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9wdGlvbnMub25Qcm9ncmVzcyh4aHIpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgcmVzcG9uc2U6IHhoci5yZXNwb25zZSxcbiAgICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICAgICAgcmVhZHlTdGF0ZTogeGhyLnJlYWR5U3RhdGUsXG4gICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHQsXG4gICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB4aHIud2l0aENyZWRlbnRpYWxzLFxuICAgICAgICAgIHJlc3BvbnNlVHlwZTogeGhyLnJlc3BvbnNlVHlwZSxcbiAgICAgICAgICByZXNwb25zZVRleHQ6IHhoci5yZXNwb25zZVR5cGUgPT0gJ3RleHQnPyB4aHIucmVzcG9uc2VUZXh0OiAnJyxcbiAgICAgICAgICByZXNwb25zZVhNTDogeGhyLnJlc3BvbnNlVHlwZSA9PSAnZG9jdW1lbnQnPyB4aHIucmVzcG9uc2VYTUw6ICcnLFxuICAgICAgICAgIHJlc3BvbnNlVVJMOiB4aHIucmVzcG9uc2VVUkwsXG4gICAgICAgICAgdGltZW91dDogeGhyLnRpbWVvdXQsXG4gICAgICAgICAgaGVhZGVyczogdGhpcy5nZXRIZWFkZXJzKHhociksICAgICAgICAgXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB0aGlzLnRyYW5zZm9ybUFmdGVyKHJlc3VsdCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc3RhdHVzRXJyb3JQYXR0ZXJuICYmICh4aHIuc3RhdHVzICsgJycpLm1hdGNoKG9wdGlvbnMuc3RhdHVzRXJyb3JQYXR0ZXJuKSkge1xuICAgICAgICAgIGxldCBlcnIgPSBuZXcgRXJyb3IoYFJlcXVlc3QgdG8gXCIke29wdGlvbnMudXJsfVwiIHJldHVybnMgZmFpbHVyZSBzdGF0dXMgY29kZSAke3hoci5zdGF0dXN9YCk7XG4gICAgICAgICAgZXJyLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICB9IFxuXG4gICAgICAgIGhhc2ggJiYgdGhpcy5jcmVhdGVDYWNoZShoYXNoLCByZXN1bHQpOyAgICAgICAgXG4gICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9udGltZW91dCA9ICgpID0+IHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgUmVxdWVzdCB0byBcIiR7b3B0aW9ucy51cmx9XCIgdGltZWQgb3V0YCkpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICB4aHIuc2VuZChvcHRpb25zLmJvZHkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBoZWFkZXJzIG9mIGEgWE1MSHR0cFJlcXVlc3QgaW5zdGFuY2VcbiAgICogXG4gICAqIEBwYXJhbSB7WE1MSHR0cFJlcXVlc3R9XG4gICAqL1xuICBnZXRIZWFkZXJzID0gZnVuY3Rpb24oeGhyKSB7XG4gICAgbGV0IGhlYWRlcnMgPSB7fTtcbiAgICBsZXQgc3RyID0geGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpOyAgXG4gICAgbGV0IGFyciA9IHN0ci5zcGxpdCgnXFx1MDAwZFxcdTAwMGEnKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGxpbmUgPSBhcnJbaV07XG4gICAgICBsZXQgaW5kZXggPSBsaW5lLmluZGV4T2YoJ1xcdTAwM2FcXHUwMDIwJyk7XG5cbiAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgbGV0IGtleSA9IGxpbmUuc3Vic3RyaW5nKDAsIGluZGV4KTtcbiAgICAgICAgbGV0IHZhbCA9IGxpbmUuc3Vic3RyaW5nKGluZGV4ICsgMik7XG4gICAgICAgIGhlYWRlcnNba2V5XSA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaGVhZGVycztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2FjaGVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICBnZXRDYWNoZShoYXNoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19jYWNoZVtoYXNoXSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBjYWNoZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhhc2hcbiAgICogQHBhcmFtIHtvYmplY3R9IHJlc3VsdFxuICAgKi9cbiAgY3JlYXRlQ2FjaGUoaGFzaCwgcmVzdWx0KSB7XG4gICAgdGhpcy5fX2NhY2hlW2hhc2hdID0geyByZXN1bHQsIGNyZWF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKCkgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgY2FjaGVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXG4gICAqL1xuICByZW1vdmVDYWNoZShoYXNoKSB7XG4gICAgZGVsZXRlIHRoaXMuX19jYWNoZVtoYXNoXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBoYXNoIHRvIHNhdmUgaW4gdGhlIGNhY2hlXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgY3JlYXRlQ2FjaGVIYXNoKGRhdGEpIHtcbiAgICBsZXQgaGFzaCA9IDA7XG4gICAgbGV0IHN0ciA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCAgY2hhciA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgaGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgY2hhcjtcbiAgICAgIGhhc2ggPSBoYXNoICYgaGFzaDsgXG4gICAgfVxuXG4gICAgcmV0dXJuIGhhc2ggKyAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IG9iamVjdCB0byBxdWVyeSBzdHJpbmdcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgcGFyYW1zVG9RdWVyeShvYmopIHtcbiAgICBsZXQgc2VwID0gJyYnO1xuICAgIGxldCBlcSA9ICc9JztcblxuICAgIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubWFwKChrKSA9PiB7XG4gICAgICBsZXQga3MgPSBlbmNvZGVVUklDb21wb25lbnQoayk7XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9ialtrXSkpIHtcbiAgICAgICAga3MgPSBlbmNvZGVVUklDb21wb25lbnQoayk7XG4gICAgICAgIHJldHVybiBvYmpba10ubWFwKCh2LCBpKSA9PiBrcyArIGBbJHtpfV1gICsgZXEgKyBlbmNvZGVVUklDb21wb25lbnQodikpLmpvaW4oc2VwKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG9ialtrXSAmJiB0eXBlb2Ygb2JqW2tdID09PSAnb2JqZWN0Jykge1xuICAgICAgICBsZXQgb3B0ID0gW107XG4gICAgICAgIE9iamVjdC5rZXlzKG9ialtrXSkubWFwKChrZXkpID0+IG9wdC5wdXNoKGtzICsgYFske2tleX1dYCArIGVxICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrXVtrZXldKSkpO1xuICAgICAgICByZXR1cm4gb3B0LmpvaW4oc2VwKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4ga3MgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba10pO1xuICAgICAgfVxuICAgIH0pLmpvaW4oc2VwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHF1ZXJ5IHN0cmluZyB0byBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgcGFyYW1zRnJvbVF1ZXJ5KHN0cikge1xuICAgIGxldCBxdWVyeSA9IHt9O1xuICAgIGxldCBhbXBzID0gc3RyLnNwbGl0KCcmJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGFtcHMubGVuZ3RoOyBpIDxsOyBpKyspIHtcbiAgICAgIGxldCBlcXMgPSAgYW1wc1tpXS5zcGxpdCgnPScpO1xuICAgICAgbGV0IGtleSA9IGRlY29kZVVSSUNvbXBvbmVudChlcXNbMF0pO1xuICAgICAgbGV0IHZhbCA9IGRlY29kZVVSSUNvbXBvbmVudChlcXNbMV0pO1xuXG4gICAgICBpZiAoIWtleSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgICAgcXVlcnlba2V5XS5wdXNoKHZhbCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChxdWVyeVtrZXldKSB7XG4gICAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSwgdmFsXTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBxdWVyeVtrZXldID0gdmFsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbXVsdGlwYXJ0IGZvcm0gZGF0YSBmcm9tIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEBwYXJhbSB7Rm9ybURhdGF9IFtkYXRhXVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25hbWVzcGFjZV0gICAqXG4gICAqIEByZXR1cm5zIHtGb3JtRGF0YX1cbiAgICovXG4gIGNyZWF0ZUZvcm1EYXRhKG9iaiwgZGF0YSA9IG51bGwsIG5hbWVzcGFjZSA9ICcnKSB7XG4gICAgbGV0IGZkID0gZGF0YSB8fCBuZXcgRm9ybURhdGEoKTtcblxuICAgIGZvciAobGV0IGsgaW4gb2JqKSB7XG4gICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGspICYmIG9ialtrXSkge1xuICAgICAgICBsZXQga2V5ID0gbmFtZXNwYWNlPyBuYW1lc3BhY2UgKyAnWycgKyBrICsgJ10nOiBrO1xuXG4gICAgICAgIGlmIChvYmpba10gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgZmQuYXBwZW5kKGtleSwgb2JqW2tdLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3Qob2JqW2tdKSkge1xuICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybURhdGEob2JqW2tdLCBmZCwga2V5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBmZC5hcHBlbmQoa2V5LCBvYmpba10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZkO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBkYXRhIGJlZm9yZSBhIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtYTUxIdHRwUmVxdWVzdH0geGhyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICB0cmFuc2Zvcm1CZWZvcmUoeGhyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHsgeGhyLCBvcHRpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gZGF0YSBhZnRlciBhIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IHJlc3VsdFxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgdHJhbnNmb3JtQWZ0ZXIocmVzdWx0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnJlc3VsdCxcbiAgICAgIGRhdGE6IHJlc3VsdC5yZXNwb25zZSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIEdFVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBnZXQodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdHRVQnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgREVMRVRFIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGRlbGV0ZSh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ0RFTEVURSc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBQT1NUIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHBvc3QodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQT1NUJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIFBVVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBwdXQodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQVVQnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgUEFUQ0ggcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcGF0Y2godXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQQVRDSCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gICAvKipcbiAgICogIE1ha2UgSEVBRCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBoZWFkKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnSEVBRCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoKTtcblxuLyoqXG4gKiBTZXQgcm91dGVyJ3MgZGVmYXVsdCB2YXJpYWJsZXNcbiAqL1xucmVxdWVzdC5zZXREZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fX2luc3RhbmNlcyA9IHt9O1xuICB0aGlzLl9fY2FjaGUgPSB7fTtcbn1cblxuLyoqXG4gKiBBZGQgbmV3IHJlcXVlc3QgaW5zdGFuY2UgdG8gdGhlIG1haW4gc2VydmljZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1JlcXVlc3R9IGluc3RhbmNlXG4gKi9cbnJlcXVlc3QuYWRkSW5zdGFuY2UgPSBmdW5jdGlvbihuYW1lLCBpbnN0YW5jZSkge1xuICB0aGlzLl9faW5zdGFuY2VzW25hbWVdID0gaW5zdGFuY2U7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnJlcXVlc3QucmVtb3ZlSW5zdGFuY2UgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLl9faW5zdGFuY2VzW25hbWVdO1xufTtcblxuLyoqXG4gKiBEZWluaXQgcm91dGVyXG4gKi9cbnJlcXVlc3QuZGVpbml0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2V0RGVmYXVsdHMoKTtcbn07XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVlc3QsICd1c2UnLCB7XG4gIGdldDogKCkgPT4ge1xuICAgIHJldHVybiByZXF1ZXN0Ll9faW5zdGFuY2VzO1xuICB9XG59KTtcblxucmVxdWVzdC5SZXF1ZXN0ID0gUmVxdWVzdDtcbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3Q7XG5yZXF1ZXN0LnNldERlZmF1bHRzKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL3JlcXVlc3QuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5cbi8qKlxuICogQmFzZSBjb21wb25lbnQgdG8gd29yayB3aXRoIHRleHQgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2lucHV0fVxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfdGV4dGFyZWF9XG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jb250ZW50ZWRpdGFibGV9XG4gKiBcbiAqIEBhdHRyIHtzdHJpbmd9IHZhbHVlIC0gYWN0dWFsIHZhbHVlXG4gKiBAYXR0ciB7Ym9vbGVhbn0gZm9jdXMgLSBzZXQgdGhlIGZvY3VzIG9yIG5vdFxuICogQGF0dHIge251bWJlcn0gZGVib3VuY2UgLSBkZWJvdW5jZSBkZWxheVxuICogQG1lc3NhZ2Uge3ZvaWR9IGRlYm91bmNlIC0gc2VudCBvbiB0aGUgZGVib3VuY2Uge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW5wdXR9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnZhbHVlS2V5ID0gJ3ZhbHVlJztcbiAgICB0aGlzLmRlYm91bmNlSW50ZXJ2YWwgPSA1MDA7XG4gICAgdGhpcy5kZWJvdW5jZVRpbWVvdXQgPSBudWxsO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgaWYodGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ29uLWRlYm91bmNlJykpIHtcbiAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7ICAgICAgICBcbiAgICAgICAgdGhpcy5kZWJvdW5jZVRpbWVvdXQgJiYgY2xlYXJUaW1lb3V0KHRoaXMuZGVib3VuY2VUaW1lb3V0KTtcbiAgICAgICAgdGhpcy5kZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmF0dHJzLm9uRGVib3VuY2UudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICAgICAgfSwgdGhpcy5kZWJvdW5jZUludGVydmFsKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuYXR0cignZm9jdXMnLCB0aGlzLnNldEZvY3VzKTtcbiAgICB0aGlzLmF0dHIoJ3ZhbHVlJywgdGhpcy5zZXRWYWx1ZSk7XG4gICAgdGhpcy5hdHRyKCdkZWJvdW5jZScsIHRoaXMuc2V0RGVib3VuY2UpO1xuICB9XG5cbiAgcmVtb3ZlZCgpIHtcbiAgICB0aGlzLmRlYm91bmNlVGltZW91dCAmJiBjbGVhclRpbWVvdXQodGhpcy5kZWJvdW5jZVRpbWVvdXQpO1xuICB9XG5cbiAgc2V0RGVib3VuY2UoaW50ZXJ2YWwpIHtcbiAgICB0aGlzLmRlYm91bmNlSW50ZXJ2YWwgPSAraW50ZXJ2YWw7XG4gIH1cblxuICBzZXRGb2N1cyh2YWx1ZSkge1xuICAgIHZhbHVlPyB0aGlzLnNldEVsZW1lbnRGb2N1cygpOiB0aGlzLnNldEVsZW1lbnRCbHVyKCk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICh0aGlzLmVsW3RoaXMudmFsdWVLZXldICE9PSB2YWx1ZSkgJiYgKHRoaXMuZWxbdGhpcy52YWx1ZUtleV0gPSB2YWx1ZSA9PT0gMD8gJzAnOiAodmFsdWUgfHwgJycpKTtcbiAgfVxuXG4gIHNldEVsZW1lbnRGb2N1cygpIHtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cblxuICBzZXRFbGVtZW50Qmx1cigpIHtcbiAgICB0aGlzLmVsLmJsdXIoKTtcbiAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBsb29wcy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfbG9vcHN9XG4gKiBcbiAqIEB0YWcgZm9yXG4gKiBAc2VsZWN0b3IgZm9yW2luXSxvbFtpbl0sdWxbaW5dLHRoZWFkW2luXSx0Ym9keVtpbl0sdGZvb3RbaW5dXG4gKiBAYXR0ciB7b2JqZWN0fGFycmF5fSBpbiAtIGRhdGEgdG8gY3JlYXRlIHRoZSBsb29wXG4gKiBAbWVzc2FnZSB7b2JqZWN0fGFycmF5fSBvdXQgLSBzZW50IG9uIHRoZSBkYXRhIGNoYW5nZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbaW5dJztcbiAgc3RhdGljIGV2ZW50cyA9IFsnb3V0J107XG4gIHN0YXRpYyBzYXZlQXR0cmlidXRlUHJveHlJbiA9IHRydWU7ICBcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnZm9yJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdvbCcsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndWwnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RoZWFkJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0Ym9keScsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGZvb3QnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RyJywgdGhpcy5Mb29wKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2xvb3AnLCB0aGlzLkxvb3ApO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIFxuICAgIHRoaXMuaXRlcmF0b3JzID0gW107XG4gICAgdGhpcy5pdGVyYXRvclJlZiA9IG51bGw7XG4gICAgdGhpcy5pdGVyYXRvck91dGVySFRNTCA9IG51bGw7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHsgICAgXG4gICAgdGhpcy5jcmVhdGVJdGVyYXRvcigpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRyKCdpbicsIHRoaXMuZHJhdyk7XG4gIH1cblxuICBjcmVhdGVJdGVyYXRvcigpIHtcbiAgICBsZXQgZWw7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLmVsLmNoaWxkcmVuW2ldO1xuXG4gICAgICBpZiAoY2hpbGQuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKSA9PSAnbG9vcCcpIHtcbiAgICAgICAgZWwgPSBjaGlsZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGVsID0gY2hpbGQ7XG4gICAgfVxuXG4gICAgaWYgKCFlbCkge1xuICAgICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsb29wJyk7ICAgICAgXG4gICAgICBlbC5pbm5lckhUTUwgPSB0aGlzLmVsLmlubmVySFRNTDsgXG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnOyAgICAgXG4gICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGVsKTtcbiAgICB9XG5cbiAgICBsZXQgY29tcG9uZW50TmFtZSA9IGVsLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50Jyk7XG5cbiAgICBpZiAoY29tcG9uZW50TmFtZSAhPSAnbG9vcCcpIHtcbiAgICAgIGxldCBjb21wb25lbnQgPSBBa2lsaS5jb21wb25lbnQoY29tcG9uZW50TmFtZSB8fCBlbC50YWdOYW1lKTtcblxuICAgICAgaWYgKCFjb21wb25lbnQpIHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdjb21wb25lbnQnLCAnbG9vcCcpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIShjb21wb25lbnQucHJvdG90eXBlIGluc3RhbmNlb2YgRm9yKSkge1xuICAgICAgICBsZXQgbWFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xvb3AnKTtcbiAgICAgICAgbWFzay5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIGVsID0gbWFzaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmh0bWwgPSBlbC5pbm5lckhUTUw7XG4gICAgdGhpcy5pdGVyYXRvclJlZiA9IGVsLm5leHRTaWJsaW5nO1xuICAgIHRoaXMuaXRlcmF0b3JPdXRlckhUTUwgPSBlbC5vdXRlckhUTUw7XG4gICAgZWwucmVtb3ZlKCk7XG4gIH1cblxuICBjcmVhdGVJdGVyYXRvckVsZW1lbnQoKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICBlbC5pbm5lckhUTUwgPSB0aGlzLml0ZXJhdG9yT3V0ZXJIVE1MO1xuICAgIGVsID0gZWwuY29udGVudC5maXJzdENoaWxkO1xuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIGxvb3Aoa2V5LCB2YWx1ZSwgaW5kZXgpIHtcbiAgICB0aGlzLl9faW5kZXggPSBpbmRleDtcbiAgICB0aGlzLl9fa2V5ID0ga2V5O1xuICAgIHRoaXMuX192YWx1ZSA9IHZhbHVlOyAgICBcbiAgICB0aGlzLl9fY29tcGFyaXNvblZhbHVlID0gdXRpbHMuY29weSh2YWx1ZSk7XG5cbiAgICBpZih0aGlzLml0ZXJhdG9ycy5sZW5ndGggPiBpbmRleCkge1xuICAgICAgbGV0IGl0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcnNbaW5kZXhdO1xuICAgICAgbGV0IGNDb3B5ID0gaXRlcmF0b3IuY29tcGFyc2lvbi5jb3B5O1xuICAgICAgICBcbiAgICAgIGlmICh0aGlzLl9faW5kZXggIT09IGl0ZXJhdG9yLmluZGV4KSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldEluZGV4KCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaXRlcmF0b3Iuc2V0SW5kZXgodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9fa2V5ICE9PSBpdGVyYXRvci5rZXkpIHtcbiAgICAgICAgaXRlcmF0b3Iuc2V0S2V5KCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaXRlcmF0b3Iuc2V0S2V5KHRydWUpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoIXV0aWxzLmNvbXBhcmUoY0NvcHksIHRoaXMuX19jb21wYXJpc29uVmFsdWUsIHsgaWdub3JlVW5kZWZpbmVkOiB0cnVlIH0pKSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldFZhbHVlKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaXRlcmF0b3Iuc2V0VmFsdWUodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX19wcm9taXNlcy5wdXNoKEFraWxpLmNvbXBpbGUoaXRlcmF0b3IuZWwsIHsgcmVjb21waWxlOiB7IGNoZWNrQ2hhbmdlczogdHJ1ZSB9IH0pKTtcbiAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICB9XG4gICAgXG4gICAgbGV0IGVsID0gdGhpcy5jcmVhdGVJdGVyYXRvckVsZW1lbnQoKTtcbiAgICBlbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XG4gICAgdGhpcy5lbC5pbnNlcnRCZWZvcmUoZWwsIHRoaXMuaXRlcmF0b3JSZWYpO1xuICAgIHRoaXMuX19wcm9taXNlcy5wdXNoKEFraWxpLmNvbXBpbGUoZWwpKTtcbiAgICB0aGlzLml0ZXJhdG9ycy5wdXNoKGVsLl9fYWtpbGkpO1xuICAgIHJldHVybiBlbC5fX2FraWxpO1xuICB9XG5cbiAgZHJhdyhkYXRhKSB7XG4gICAgaWYgKHR5cGVvZiBkYXRhICE9ICdvYmplY3QnIHx8IGRhdGEgPT09IG51bGwpIHtcbiAgICAgIGlmIChBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgIGNvbnNvbGUud2FybihgXCJGb3JcIiBjb21wb25lbnQgXCJpblwiIGF0dHJpYnV0ZSB2YWx1ZSB0eXBlIG11c3QgYmUgYW4gb2JqZWN0L2FycmF5YCk7ICAgICAgICBcbiAgICAgIH1cblxuICAgICAgZGF0YSA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMuZGF0YSA9IGRhdGE7ICAgXG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIGNvbnN0IGxvb3AgPSAoa2V5LCB2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBpdGVyYXRvciA9IHRoaXMubG9vcChrZXksIHZhbHVlLCBpbmRleCk7XG4gICAgICBpdGVyYXRvci5pdGVyYXRlKGluZGV4KTtcbiAgICB9O1xuXG4gICAgaWYoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgZm9yIChsZXQgbCA9IGRhdGEubGVuZ3RoOyBpbmRleCA8IGw7IGluZGV4KyspIHtcbiAgICAgICAgbG9vcChpbmRleCwgZGF0YVtpbmRleF0sIGluZGV4KTtcbiAgICAgIH0gICAgIFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSk7XG5cbiAgICAgIGZvciAobGV0IGwgPSBrZXlzLmxlbmd0aDsgaW5kZXggPCBsOyBpbmRleCsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2luZGV4XTtcbiAgICAgICAgbG9vcChrZXksIGRhdGFba2V5XSwgaW5kZXgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSBpbmRleCwgbCA9IHRoaXMuaXRlcmF0b3JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGl0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcnNbaV07XG4gICAgICBpdGVyYXRvci5fX2Rlc3Ryb3koKTtcbiAgICAgIHRoaXMuaXRlcmF0b3JzLnNwbGljZShpLCAxKTtcbiAgICAgIGwtLTtcbiAgICAgIGktLTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwodGhpcy5fX3Byb21pc2VzKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIHRoaXMuYXR0cnMub25PdXQudHJpZ2dlcihkYXRhLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgfSk7ICAgIFxuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBpbml0aWFsIHN0YXRlXG4gICAqL1xuICByZXNldCgpIHtcbiAgICB0aGlzLl9faXRlcmF0b3IgPSBudWxsO1xuICAgIHRoaXMuX19pbmRleCA9IDA7XG4gICAgdGhpcy5fX2tleSA9ICcnO1xuICAgIHRoaXMuX192YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5fX2NvbXBhcmlzb25WYWx1ZSA9IG51bGw7XG4gICAgdGhpcy5fX3Byb21pc2VzID0gW107XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGxvb3BzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19sb29wc31cbiAqIFxuICogQHRhZyBsb29wXG4gKiBAc2VsZWN0b3IgbG9vcCx0clxuICogQGF0dHIgQHNlZSBGb3JcbiAqIEBzY29wZSB7Kn0gbG9vcFZhbHVlIC0gZGF0YSBpdGVtJ3MgdmFsdWUgb2YgdGhlIGN1cnJlbnQgaXRlcmF0aW9uIFxuICogQHNjb3BlIHtzdHJpbmd8bnVtYmVyfSBsb29wS2V5IC0ga2V5IG9mIHRoZSBpdGVyYXRpb25cbiAqIEBzY29wZSB7bnVtYmVyfSBsb29wSW5kZXggLSBpbmRleCBvZiB0aGUgaXRlcmF0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBMb29wIGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmZvciA9IG51bGw7XG4gICAgdGhpcy5odG1sID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgdGhpcy5pc0ZvciA9IHRoaXMuZWwuaGFzQXR0cmlidXRlKCdpbicpO1xuXG4gICAgaWYgKCF0aGlzLmlzRm9yICYmICEodGhpcy5lbC5wYXJlbnROb2RlLl9fYWtpbGkgaW5zdGFuY2VvZiBGb3IpKSB7XG4gICAgICB0aGlzLmNhbmNlbCgpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9faXRlcmF0b3IgPSB0aGlzO1xuICAgIHRoaXMuZm9yID0gdGhpcy5fX3BhcmVudC5fX2FraWxpO1xuICAgIHRoaXMuc2V0SW5kZXgodHJ1ZSk7XG4gICAgdGhpcy5zZXRLZXkodHJ1ZSk7XG4gICAgdGhpcy5zZXRWYWx1ZSh0cnVlKTtcblxuICAgIGlmKHRoaXMuaXNGb3IpIHtcbiAgICAgIHJldHVybiBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgaWYodGhpcy5pc0Zvcikge1xuICAgICAgcmV0dXJuIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgc2V0SW5kZXgodGFyZ2V0KSB7XG4gICAgdGhpcy5pbmRleCA9IHRoaXMuZm9yLl9faW5kZXg7XG4gICAgdGhpcy5zY29wZS5fX3NldCgnbG9vcEluZGV4JywgdGhpcy5pbmRleCwgZmFsc2UsIHRhcmdldCk7XG4gIH1cblxuICBzZXRLZXkodGFyZ2V0KSB7XG4gICAgdGhpcy5rZXkgPSB0aGlzLmZvci5fX2tleTtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wS2V5JywgdGhpcy5rZXksIGZhbHNlLCB0YXJnZXQpO1xuICB9XG5cbiAgc2V0VmFsdWUodGFyZ2V0KSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuZm9yLl9fdmFsdWU7XG4gICAgdGhpcy5zY29wZS5fX3NldCgnbG9vcFZhbHVlJywgdGhpcy52YWx1ZSwgdHJ1ZSwgdGFyZ2V0KTtcblxuICAgIHRoaXMuY29tcGFyc2lvbiA9IHtcbiAgICAgIGNvcHk6IHRoaXMuZm9yLl9fY29tcGFyaXNvblZhbHVlLFxuICAgICAgdmFsdWU6IHRoaXMuZm9yLl9fdmFsdWVcbiAgICB9O1xuICB9XG5cbiAgaXRlcmF0ZSgpIHt9XG59XG5cbkZvci5Mb29wID0gTG9vcDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9mb3IuanMiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5cbi8qKlxuICogU2NvcGUgY2xhc3MuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvc2NvcGV9XG4gKlxuICogQWxsIHByb3BlcnRpZXMgc3RhcnRpbmcgd2l0aCBfXyBhcmUgbm90IG1vbml0b3JlZC5cbiAqIFlvdSBjYW4gdXNlIHRoZW0gZm9yIGludGVybmFsIG1hbmlwdWxhdGlvbnMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3BlIHtcbiAgc3RhdGljIG5lc3RlZFdhdGNoaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVsLCBjb21wb25lbnQpIHtcbiAgICB0aGlzLl9fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fX2VsID0gZWw7XG4gICAgdGhpcy5fX2NvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ3Njb3BlJywgbmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGEgc2NvcGUgdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzdHJpY3Q9ZmFsc2VdIC0gd2l0aG91dCBvYmplY3QgY29weWluZ1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldChrZXlzLCB2YWx1ZSwgc3RyaWN0ID0gZmFsc2UsIHRhcmdldCA9IGZhbHNlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cbiAgICBcbiAgICBBa2lsaS51bmlzb2xhdGUoKCkgPT4ge1xuICAgICAgc3RyaWN0ICYmICh0aGlzLl9fY29tcG9uZW50Ll9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyA9IHRydWUpO1xuICAgICAgdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGFyZ2V0PyB0aGlzLl9fdGFyZ2V0OiB0aGlzLCAobGFzdCwgdmFsKSA9PiB7XG4gICAgICAgIGlmICghbGFzdCkge1xuICAgICAgICAgIHJldHVybiB2YWwgfHwge307XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHN0cmljdCAmJiAodGhpcy5fX2NvbXBvbmVudC5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgPSBmYWxzZSk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NvcGUuanMiLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5cbi8qKlxuICogQ2xhc3MgZm9yIHdvcmtpbmcgd2l0aCBldmVudHMuXG4gKiBBbiBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGFsbG93cyB5b3UgdG8gdHJpZ2dlciBjdXN0b20gamF2YXNjcmlwdCBldmVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvZXZlbnRzfVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBlbCwgY29tcG9uZW50KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmVsID0gZWw7XG4gICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgdGhpcy5lbENvbXBvbmVudCA9IHRoaXMuZWwuX19ha2lsaSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgdGhlIGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSAtIHNlbmRpbmcgZGF0YS4gV2lsbCBiZSBpbiB0aGUgZXZlbnQuZGV0YWlsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgdHJpZ2dlcihkYXRhLCBvcHRpb25zID0ge30sIGZvcmNlID0gZmFsc2UpIHtcbiAgICBpZiAoZm9yY2UgfHwgIXRoaXMuaW5FdmFsdWF0aW5nKCkpIHtcbiAgICAgIHRoaXMuZWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQodGhpcy5uYW1lLCB0aGlzLnByZXBhcmVPcHRpb25zKHsgZGV0YWlsOiBkYXRhLCAgLi4ub3B0aW9ucyB9KSkpO1xuICAgIH0gICBcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaCB0aGUgZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gX0V2ZW50IC0gY2xhc3Mgb2YgdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZGlzcGF0Y2goX0V2ZW50LCBvcHRpb25zID0ge30sIGZvcmNlID0gZmFsc2UpIHtcbiAgICBpZiAoZm9yY2UgfHwgIXRoaXMuaW5FdmFsdWF0aW5nKCkpIHtcbiAgICAgIHRoaXMuZWwuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50KHRoaXMubmFtZSwgdGhpcy5wcmVwYXJlT3B0aW9ucyhvcHRpb25zKSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwZXJlIGFuIGV2ZW50IG9wdGlvbnNcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gXG4gICAqL1xuICBwcmVwYXJlT3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0geyBidWJibGVzOiB0cnVlLCAuLi5vcHRpb25zIH07ICBcbiAgICB0aGlzLmVsQ29tcG9uZW50ICYmICF0aGlzLmVsQ29tcG9uZW50Ll9fc2F2ZUF0dHJpYnV0ZVByb3h5T3V0ICYmIChvcHRpb25zLmRldGFpbCA9IHV0aWxzLmNvcHkob3B0aW9ucy5kZXRhaWwpKTtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBldmVudCBjYWxsYmFjayBkb2Vzbid0IHJ1biByZWN1cnNpdmVcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpbkV2YWx1YXRpbmcoKSB7XG4gICAgbGV0IGRhdGEgPSB0aGlzLmNvbXBvbmVudC5fX2V2YWx1YXRpbmdFdmVudDtcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhLmVsID09PSB0aGlzLmVsICYmIGRhdGEuZXZlbnQudHlwZSA9PT0gdGhpcy5uYW1lICYmIGRhdGEuY29tcG9uZW50ID09PSB0aGlzLmNvbXBvbmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIHRoZSBmdW5jdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICAgKi9cbiAgYmluZChmbikge1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMuZm4gPSBmbik7XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIHRoZSBmdW5jdGlvblxuICAgKi9cbiAgdW5iaW5kKCkge1xuICAgIHRoaXMuZm4gJiYgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubmFtZSwgdGhpcy5mbik7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXZlbnQtZW1pdHRlci5qcyIsImltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG4vKipcbiAqIFN0b3JlIGFsbG93cyB5b3UgdG8gc2F2ZSBhbmQgZGlzdHJpYnV0ZSBkYXRhLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3N0b3JlfVxuICovXG5jb25zdCBzdG9yZSA9IG5ldyBQcm94eSh7fSwge1xuICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgIGlmIChrZXkgPT0gXCJfX3RhcmdldFwiKSB7XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgfSxcbiAgc2V0OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgaWYodXRpbHMuY29tcGFyZSh0YXJnZXRba2V5XSwgdmFsdWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgdmFsdWUgPSB1dGlscy5jb3B5KHZhbHVlKTtcbiAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgIEFraWxpLnJvb3QgJiYgQWtpbGkucm9vdC5fX3N0b3JlVHJpZ2dlckJ5TmFtZShrZXksIHZhbHVlKTsgICAgXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICBBa2lsaS5yb290ICYmIEFraWxpLnJvb3QuX19zdG9yZVRyaWdnZXJCeU5hbWUoa2V5LCB1bmRlZmluZWQpO1xuICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2aWNlcy9zdG9yZS5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi9zZXJ2aWNlcy9yZXF1ZXN0LmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIHJvdXRlciB0ZW1wbGF0ZXMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3RlbXBsYXRlc31cbiAqIFxuICogQHRhZyByb3V0ZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdyb3V0ZScsIHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1RyYW5zaXRpb259IHRyYW5zaXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBzZXRUcmFuc2l0aW9uKHRyYW5zaXRpb24pIHtcbiAgICBsZXQgc3RhdGUgPSB0cmFuc2l0aW9uLnBhdGguc3RhdGU7XG5cbiAgICBjb25zdCBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24gPSAocGF0aCkgPT4ge1xuICAgICAgaWYgKHBhdGgucGFyZW50KSB7XG4gICAgICAgIGlmIChwYXRoLnBhcmVudC5jb21wb25lbnQpIHtcbiAgICAgICAgICByZXR1cm4gcGF0aC5wYXJlbnQuY29tcG9uZW50Ll9fc2NvcGUuX190cmFuc2l0aW9uLnBhdGg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uKHBhdGgucGFyZW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcGlsZSA9IChodG1sKSA9PiB7IFxuICAgICAgdGhpcy5lbXB0eSgpOyAgXG4gICAgICBsZXQgbmFtZSA9ICdjb21wb25lbnQnO1xuXG4gICAgICBpZihzdGF0ZS5jb21wb25lbnQpIHtcbiAgICAgICAgbGV0IGV4aXN0cyA9IGZhbHNlO1xuICAgIFxuICAgICAgICBmb3IobGV0IGtleSBpbiBBa2lsaS5fX2NvbXBvbmVudHMpIHtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBBa2lsaS5fX2NvbXBvbmVudHNba2V5XTtcbiAgICBcbiAgICAgICAgICBpZihjb21wb25lbnQgPT09IHN0YXRlLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgbmFtZSA9IGtleTsgICAgICAgICAgICBcbiAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaWYoIWV4aXN0cykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIFwiJHtzdGF0ZS5uYW1lfVwiIGhhcyBubyBkZWZpbmVkIGNvbXBvbmVudGApXG4gICAgICAgIH0gXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gYDwkeyBuYW1lIH0+JHsgaHRtbCB9PC8keyBuYW1lIH0+YDtcbiAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX19zY29wZS5fX3RyYW5zaXRpb24gPSB7ICBcbiAgICAgIHBhcmVudDogZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uKHRyYW5zaXRpb24ucGF0aCksICAgXG4gICAgICBzdGF0ZTogdHJhbnNpdGlvbi5wYXRoLnN0YXRlLFxuICAgICAgZGF0YTogdHJhbnNpdGlvbi5wYXRoLmRhdGEsXG4gICAgICB1cmw6IHRyYW5zaXRpb24ucGF0aC51cmwsXG4gICAgICBwYXJhbXM6IHRyYW5zaXRpb24ucGF0aC5wYXJhbXMsXG4gICAgICBxdWVyeTogdHJhbnNpdGlvbi5wYXRoLnF1ZXJ5LFxuICAgICAgaGFzaDogdHJhbnNpdGlvbi5wYXRoLmhhc2hcbiAgICB9O1xuXG4gICAgaWYgKCF0cmFuc2l0aW9uLnBhdGgubG9hZGVkKSB7XG4gICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogeyBjaGVja0NoYW5nZXM6IHRydWUgfSB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICBpZiAoc3RhdGUudGVtcGxhdGUpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnRlbXBsYXRlO1xuICAgICAgfVxuICBcbiAgICAgIGlmIChzdGF0ZS50ZW1wbGF0ZVVybCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdC5nZXQoc3RhdGUudGVtcGxhdGVVcmwpLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcbiAgICAgIH1cbiAgICB9KS50aGVuKGh0bWwgPT4gY29tcGlsZShodG1sKSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9yb3V0ZS5qcyIsImltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9yZXF1ZXN0LmpzJztcbmltcG9ydCBSb3V0ZSBmcm9tICcuLi9jb21wb25lbnRzL3JvdXRlLmpzJztcblxuLyoqXG4gKiBUcmFuc2l0aW9uIGNsYXNzLlxuICogQW4gaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBjb25zaXN0cyB0aGUgbGFzdCBhY3R1YWwgcm91dGVyIHRyYW5zaXRpb24gaW5mb3JtYXRpb24uXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3RyYW5zaXRpb259XG4gKi9cbmV4cG9ydCBjbGFzcyBUcmFuc2l0aW9uIHtcbiAgY29uc3RydWN0b3IocHJldmlvdXMgPSBudWxsKSB7ICAgIFxuICAgIHRoaXMucHJldmlvdXMgPSBwcmV2aW91cztcbiAgICB0aGlzLnBhdGggPSBudWxsO1xuICAgIHRoaXMucm91dGVzID0gW107XG4gICAgdGhpcy5zdGF0ZXMgPSB7fTtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogUmVkaXJlY3QgdG8gYW5vdGhlciBzdGF0ZVxuICAgKiBcbiAgICogQHNlZSByb3V0ZXIuc3RhdGVcbiAgICovXG4gIHJlZGlyZWN0KCkge1xuICAgIHRoaXMuY2FuY2VsKCk7ICAgXG4gICAgcmV0dXJuIHJvdXRlci5zdGF0ZS5hcHBseShyb3V0ZXIsIGFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogUmVsb2FkIHRoZSBjdXJyZW50IHN0YXRlXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc11cbiAgICogQHBhcmFtIHtvYmplY3R9IFtxdWVyeV1cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoXVxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqL1xuICByZWxvYWQocGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSB1bmRlZmluZWQsIG9wdGlvbnMgPSB7fSkge1xuICAgIHBhcmFtcyA9IHsgLi4udGhpcy5wYXRoLnBhcmFtcywgLi4ucGFyYW1zIH07XG4gICAgcXVlcnkgPSB7IC4uLnRoaXMucGF0aC5xdWVyeSwgLi4ucXVlcnkgfTtcbiAgICBoYXNoID0gaGFzaCA9PT0gdW5kZWZpbmVkPyB0aGlzLnBhdGguaGFzaDogaGFzaDtcbiAgICByZXR1cm4gdGhpcy5yZWRpcmVjdCh0aGlzLnBhdGguc3RhdGUubmFtZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBjdXJyZW50IHBhdGhcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXRoIFxuICAgKi9cbiAgc2V0UGF0aChwYXRoKSB7XG4gICAgcGF0aC5wYXJlbnQgPSB0aGlzLnBhdGggfHwgbnVsbDtcbiAgICB0aGlzLnBhdGggPSB7IHBhcmFtczoge30sIHF1ZXJ5OiB7fSwgLi4ucGF0aCB9O1xuICAgIHRoaXMucm91dGVzLnB1c2godGhpcy5wYXRoKTtcbiAgICB0aGlzLnN0YXRlc1t0aGlzLnBhdGguc3RhdGUubmFtZV0gPSB0aGlzLnBhdGg7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgcm91dGUgYnkgdGhlIHN0YXRlXG4gICAqICBcbiAgICogQHBhcmFtIHsqfSBzdGF0ZSBcbiAgICovXG4gIGdldFJvdXRlKHN0YXRlKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnJvdXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByb3V0ZSA9IHRoaXMucm91dGVzW2ldO1xuXG4gICAgICBpZiAocm91dGUuc3RhdGUgPT09IHN0YXRlKSB7XG4gICAgICAgIHJldHVybiByb3V0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBpdCBoYXMgdGhlIHN0YXRlXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgXG4gICAqL1xuICBoYXNTdGF0ZShzdGF0ZSkge1xuICAgIHJldHVybiAhIXRoaXMuc3RhdGVzW3N0YXRlLm5hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSByb3V0ZSBpcyBjaGFuZ2VkXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gcm91dGVcbiAgICovXG4gIGlzUm91dGVDaGFuZ2VkKHJvdXRlKSB7XG4gICAgaWYoIXRoaXMucHJldmlvdXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXRlID0gcm91dGUuc3RhdGU7XG5cbiAgICBpZighdGhpcy5wcmV2aW91cy5oYXNTdGF0ZShzdGF0ZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmFtS2V5cyA9IFtdO1xuICAgIHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2Uocm91dGVyLl9fcGFyYW1SZWdleCwgKG0sIGYsIHYpID0+IHBhcmFtS2V5cy5wdXNoKHYpKTtcbiAgICBcbiAgICBmb3IobGV0IGtleSBpbiBzdGF0ZS5wYXJhbXMpIHtcbiAgICAgIGlmKHBhcmFtS2V5cy5pbmRleE9mKGtleSkgPT0gLTEpIHtcbiAgICAgICAgcGFyYW1LZXlzLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBxdWVyeUtleXMgPSBPYmplY3Qua2V5cyhzdGF0ZS5xdWVyeSk7XG4gICAgY29uc3Qgd2F0Y2hIYXNoID0gc3RhdGUuaGFzaCAhPT0gdW5kZWZpbmVkOyAgICBcbiAgICBjb25zdCBwcmV2Um91dGUgPSB0aGlzLnByZXZpb3VzLmdldFJvdXRlKHN0YXRlKTsgXG5cbiAgICBjb25zdCBwcmV2ID0geyBcbiAgICAgIHBhcmFtczogdXRpbHMuaW5jbHVkZUtleXMocHJldlJvdXRlLnBhcmFtcywgcGFyYW1LZXlzKSwgXG4gICAgICBxdWVyeTogdXRpbHMuaW5jbHVkZUtleXMocHJldlJvdXRlLnF1ZXJ5LCBxdWVyeUtleXMpXG4gICAgfTtcblxuICAgIGNvbnN0IGN1cnJlbnQgPSB7XG4gICAgICBwYXJhbXM6IHV0aWxzLmluY2x1ZGVLZXlzKHJvdXRlLnBhcmFtcywgcGFyYW1LZXlzKSxcbiAgICAgIHF1ZXJ5OiB1dGlscy5pbmNsdWRlS2V5cyhyb3V0ZS5xdWVyeSwgcXVlcnlLZXlzKVxuICAgIH1cblxuICAgIGlmKHdhdGNoSGFzaCkge1xuICAgICAgcHJldi5oYXNoID0gcHJldlJvdXRlLmhhc2g7XG4gICAgICBjdXJyZW50Lmhhc2ggPSByb3V0ZS5oYXNoO1xuICAgIH1cblxuICAgIHJldHVybiAhdXRpbHMuY29tcGFyZShwcmV2LCBjdXJyZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW5jZWwgdGhlIGN1cnJlbnQgdHJhbnNpdGlvblxuICAgKi9cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogQWtpbGkgcm91dGVyXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZ31cbiAqL1xuY29uc3Qgcm91dGVyID0ge307XG5cbi8qKlxuICogU2V0IHJvdXRlcidzIGRlZmF1bHQgdmFyaWFibGVzXG4gKi9cbnJvdXRlci5zZXREZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5iYXNlVXJsID0gXCIvXCI7XG4gIHRoaXMuc3RhdGVzID0gW107XG4gIHRoaXMuaGFzaE1vZGUgPSB0cnVlO1xuICB0aGlzLl9fcmVkaXJlY3RzID0gMDtcbiAgdGhpcy5fX2luaXQgPSBmYWxzZTtcbiAgdGhpcy5fX29wdGlvbnMgPSB7fTtcbiAgdGhpcy5fX3BhcmFtUmVnZXggPSAvKFxcLz86KFtcXHdcXGQtXSspKS9nO1xuICB0aGlzLl9fcm91dGVTZWxlY3RvciA9IGMgPT4gYyBpbnN0YW5jZW9mIFJvdXRlO1xufVxuXG4vKipcbiAqIEFkZCBuZXcgc3RhdGUgdG8gdGhlIHJvdXRlclxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc3RhdGUgbmFtZS4gVG8gc2V0IHBhcmVudHMgeW91IGNhbiB1c2UgZG90LCBlLmcuICdhcHAuYXJ0aWNsZS5lZGl0J1xuICogQHBhcmFtIHtzdHJpbmd9IHBhdHRlcm4gLSB1cmwgcGF0dGVybiBsaWtlICdhcHAvYXJ0aWNsZS86aWQnXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7cm91dGVyfVxuICovXG5yb3V0ZXIuYWRkID0gZnVuY3Rpb24gKG5hbWUsIHBhdHRlcm4sIG9wdGlvbnMgPSB7fSkge1xuICBpZih0eXBlb2YgbmFtZSA9PSAnb2JqZWN0Jykge1xuICAgIG9wdGlvbnMgPSBuYW1lO1xuICAgIHBhdHRlcm4gPSBvcHRpb25zLnBhdHRlcm47XG4gICAgbmFtZSA9IG9wdGlvbnMuc3RhdGU7XG4gICAgZGVsZXRlIG9wdGlvbnMucGF0dGVybjtcbiAgICBkZWxldGUgb3B0aW9ucy5zdGF0ZTtcbiAgfVxuXG4gIGlmKCFuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgbXVzdCBoYXZlIGEgbmFtZWApO1xuICB9XG5cbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgdGVtcGxhdGU6ICcnLFxuICAgIHRlbXBsYXRlVXJsOiAnJyxcbiAgICBhYnN0cmFjdDogZmFsc2UsXG4gICAgY29tcG9uZW50OiBudWxsLFxuICAgIHBhcmFtczoge30sXG4gICAgcXVlcnk6IHt9LFxuICAgIGhhbmRsZXI6ICgpID0+IHt9LFxuICB9O1xuXG4gIGlmKEFraWxpLm9wdGlvbnMuZGVidWcgJiYgb3B0aW9ucy5jb21wb25lbnQgJiYgKG9wdGlvbnMudGVtcGxhdGUgfHwgb3B0aW9ucy50ZW1wbGF0ZVVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihgUm91dGVyIHN0YXRlIFwiJHtuYW1lfVwiIG11c3Qgb25seSBoYXZlIGEgY29tcG9uZW50IG9yIHRlbXBsYXRlIG9wdGlvbmApO1xuICB9IFxuXG4gIGlmICghb3B0aW9ucy50ZW1wbGF0ZSAmJiAhb3B0aW9ucy50ZW1wbGF0ZVVybCAmJiAhb3B0aW9ucy5jb21wb25lbnQpIHtcbiAgICBvcHRpb25zLmFic3RyYWN0ID0gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0aGlzLmhhcyhuYW1lKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIFwiJHtuYW1lfVwiIGlzIGFscmVhZHkgZXhpc3RzYClcbiAgfVxuXG4gIHRoaXMuc2V0U3RhdGUobmFtZSwgcGF0dGVybiwgey4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zfSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgc3RhdGUgZnJvbSB0aGUgbGlzdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnJvdXRlci5yZW1vdmUgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKHRoaXMuc3RhdGVzW2ldLm5hbWUgPT0gbmFtZSkge1xuICAgICAgdGhpcy5zdGF0ZXMuc3BsaWNlKGksIDEpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIENoZWNrIHN0YXRlIGV4aXN0c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAodGhpcy5zdGF0ZXNbaV0ubmFtZSA9PSBuYW1lKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIENoYW5nZSB0aGUgc3RhdGUgdG8gdGhlIHBhc3NlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIC0gcGFyYW1zIGZvciBzdGF0ZSB7aWQ6IDF9ID0+ICcvYXBwLzppZCcgPT4gJy9hcHAvMSdcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcXVlcnldIC0gcXVlcnkge3g6IDF9ID0+ICcvYXBwLz94PTEnXG4gKiBAcGFyYW0ge3N0cmluZ30gW2hhc2hdXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKi9cbnJvdXRlci5zdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSwgcGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSB1bmRlZmluZWQsIG9wdGlvbnMgPSB7fSkge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgXG4gIGlmICghc3RhdGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCByb3V0ZSBzdGF0ZSB3aXRoIG5hbWUgJHtzdGF0ZX1gKTtcbiAgfVxuXG4gICh7IHBhcmFtcywgcXVlcnksIGhhc2ggfSA9IHRoaXMucHJlcGFyZVN0YXRlQXJncyhzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCkpO1xuICBsZXQgdXJsID0gdGhpcy5jcmVhdGVTdGF0ZVVybChzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgZmFsc2UpOyAgXG4gIHRoaXMuX19vcHRpb25zID0gb3B0aW9ucztcbiAgdGhpcy5fX29wdGlvbnMuaGFzaElzTnVsbCA9IGhhc2ggPT09IG51bGw7ICBcbiAgdGhpcy5fX29wdGlvbnMubWFudWFsID0gdHJ1ZTtcbiAgdGhpcy5pc29sYXRlKCgpID0+IHRoaXMuc2V0VXJsKHVybCkpO1xuICByZXR1cm4gdGhpcy5jaGFuZ2VTdGF0ZSgpO1xufTtcblxuLyoqXG4gKiBHbyBiYWNrXG4gKi9cbnJvdXRlci5iYWNrID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeS5iYWNrLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBHbyB0byBhbnkgd2F5XG4gKi9cbnJvdXRlci5nbyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkuZ28uYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIEdvIGZvcndhcmRcbiAqL1xucm91dGVyLmZvcndhcmQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LmZvcndhcmQuYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIENoYW5nZSBzdGF0ZSBieSB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKi9cbnJvdXRlci5sb2NhdGlvbiA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMgPSB7IHJlbG9hZDogZmFsc2UgfSkge1xuICB0aGlzLl9fb3B0aW9ucyA9IG9wdGlvbnM7XG4gIHRoaXMuX19vcHRpb25zLm1hbnVhbCA9IHRydWU7XG5cbiAgdGhpcy5pc29sYXRlKCgpID0+IHtcbiAgICBpZiAodGhpcy5oYXNoTW9kZSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB1cmw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsICcnLCB1cmwpO1xuICAgIH1cbiAgfSlcblxuICByZXR1cm4gdGhpcy5jaGFuZ2VTdGF0ZSgpO1xufTtcblxuLyoqXG4gKiBSb3V0ZXIgaW5pdGlhbGl6YXRpb24uIFNob3VsZCBiZSBjYWxsZWQgYmVmb3JlIEFraWxpLmluaXQoKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbZGVmYXVsdFVybF1cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2hhc2hNb2RlPXRydWVdXG4gKi9cbnJvdXRlci5pbml0ID0gZnVuY3Rpb24gKGRlZmF1bHRVcmwgPSAnJywgaGFzaE1vZGUgPSB0cnVlKSB7XG4gIGxldCBvbGRQdXNoU3RhdGUgPSB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGU7XG5cbiAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IHJlcyA9IG9sZFB1c2hTdGF0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgcm91dGVyLmNoYW5nZVN0YXRlKCkuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIHRoaXMuX19vblN0YXRlQ2hhbmdlSGFuZGxlciA9ICgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIHRoaXMuY2hhbmdlU3RhdGUoKS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICB9O1xuXG4gIHRoaXMuZGVmYXVsdFVybCA9IGRlZmF1bHRVcmw7XG4gIHRoaXMuaGFzaE1vZGUgPSBoYXNoTW9kZTtcblxuICB0aGlzLnN0YXRlcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgYSA9IGEubmFtZS5zcGxpdCgnLicpLmxlbmd0aDtcbiAgICBiID0gYi5uYW1lLnNwbGl0KCcuJykubGVuZ3RoO1xuICAgIHJldHVybiBhIC0gYjtcbiAgfSk7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB0aGlzLmluaXRTdGF0ZSh0aGlzLnN0YXRlc1tpXSk7XG4gIH1cblxuICBpZiAoIXRoaXMuc3RhdGVzLmxlbmd0aCAmJiBBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oYFlvdSBkaWRuJ3QgYWRkIGFueSByb3V0ZXMgdG8gdGhlIHJvdXRlcmApO1xuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5fX29uU3RhdGVDaGFuZ2VIYW5kbGVyKTtcbiAgdGhpcy5fX2luaXQgPSB0cnVlO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBzdGF0ZSBcbiAqIFxuICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIFxuICovXG5yb3V0ZXIuaW5pdFN0YXRlID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gIGxldCBwYXJlbnRzID0gW107XG4gIHN0YXRlLmNoaWxkcmVuID0gW107XG4gIHBhcmVudHMgPSBzdGF0ZS5uYW1lLnNwbGl0KCcuJyk7XG4gIHBhcmVudHMucG9wKCk7XG4gIHN0YXRlLmxldmVsID0gc3RhdGUuYWJzdHJhY3Q/IG51bGw6IHBhcmVudHMubGVuZ3RoO1xuXG4gIGlmIChwYXJlbnRzLmxlbmd0aCkge1xuICAgIGxldCBwYXJlbnROYW1lID0gcGFyZW50cy5qb2luKCcuJyk7XG4gICAgbGV0IHBhcmVudCA9IHRoaXMuZ2V0U3RhdGUocGFyZW50TmFtZSk7XG5cbiAgICBpZiAoIXBhcmVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgcGFyZW50IHJvdXRlIHN0YXRlIFwiJHtwYXJlbnROYW1lfVwiIGZvciBcIiR7c3RhdGUubmFtZX1cImApXG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmxldmVsICE9PSBudWxsICYmIHBhcmVudC5hYnN0cmFjdCkge1xuICAgICAgc3RhdGUubGV2ZWwtLTtcbiAgICB9XG5cbiAgICBzdGF0ZS5mdWxsUGF0dGVybiA9IHRoaXMuc3BsaXRTbGFzaGVzKHBhcmVudC5mdWxsUGF0dGVybiArICcvJyArIHN0YXRlLnBhdHRlcm4pO1xuICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKHN0YXRlKTtcbiAgfVxuICBlbHNlIHtcbiAgICBzdGF0ZS5mdWxsUGF0dGVybiA9IHN0YXRlLnBhdHRlcm47XG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgc3RhdGUgYnkgbmFtZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gKi9cbnJvdXRlci5nZXRTdGF0ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZXNbaV07XG5cbiAgICBpZiAoc3RhdGUubmFtZSA9PSBuYW1lKSB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIFNldCBzdGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVyblxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqL1xucm91dGVyLnNldFN0YXRlID0gZnVuY3Rpb24gKG5hbWUsIHBhdHRlcm4sIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgc3RhdGUgPSB7Li4ub3B0aW9ucywgbmFtZSwgcGF0dGVybn07XG4gIHRoaXMuc3RhdGVzLnB1c2goc3RhdGUpO1xuICB0aGlzLl9faW5pdCAmJiB0aGlzLmluaXRTdGF0ZShzdGF0ZSk7XG4gIHJldHVybiBzdGF0ZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIHN0YXRlIGJ5IG5hbWVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5yb3V0ZXIucmVtb3ZlU3RhdGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLm5hbWUgPT0gbmFtZSkge1xuICAgICAgdGhpcy5zdGF0ZXMuc3BsaWNlKGksIDEpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFNldCB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKi9cbnJvdXRlci5zZXRVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHRoaXMuaGFzaE1vZGU/IHRoaXMuc2V0SGFzaFVybCh1cmwpOiB0aGlzLnNldEhpc3RvcnlVcmwodXJsKTtcbn07XG5cbi8qKlxuICogU2V0IHVybCB1c2luZyBoaXN0b3J5XG4gKlxuICogQHBhcmFtIHVybFxuICovXG5yb3V0ZXIuc2V0SGlzdG9yeVVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsICcnLCB1cmwpO1xufTtcblxuLyoqXG4gKiBTZXQgdXJsIHVzaW5nIGhhc2hcbiAqXG4gKiBAcGFyYW0gdXJsXG4gKi9cbnJvdXRlci5zZXRIYXNoVXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjJyArICh1cmwgfHwgJy8nKTtcbn07XG5cbi8qKlxuICogR2V0IHVybFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmhhc2hNb2RlID8gdGhpcy5nZXRIYXNoVXJsKCkgOiB0aGlzLmdldEhpc3RvcnlVcmwoKTtcbn07XG5cbi8qKlxuICogR2V0IHVybCB1c2luZyBoaXN0b3J5XG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLmdldEhpc3RvcnlVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoICsgd2luZG93LmxvY2F0aW9uLmhhc2g7XG59O1xuXG4vKipcbiAqIEdldCB1cmwgdXNpbmcgaGFzaFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRIYXNoVXJsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgvXiMvLCAnJyk7XG59O1xuXG4vKipcbiAqIEdldCBxdWVyeSBwYXJhbXNcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0VXJsUXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuaGFzaE1vZGUgPyB0aGlzLmdldEhhc2hVcmxRdWVyeSgpIDogdGhpcy5nZXRIaXN0b3J5VXJsUXVlcnkoKTtcbn07XG5cbi8qKlxuICogR2V0IHF1ZXJ5IHBhcmFtcyB1c2luZyBoaXN0b3J5XG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldEhpc3RvcnlVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcmVxdWVzdC5wYXJhbXNGcm9tUXVlcnkod2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpKTtcbn07XG5cbi8qKlxuICogR2V0IHF1ZXJ5IHBhcmFtcyB1c2luZyBoYXNoXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldEhhc2hVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcmVxdWVzdC5wYXJhbXNGcm9tUXVlcnkoKHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCc/JylbMV0gfHwgJycpKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIHVybCBieSBkYXRhXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdXG4gKiBAcGFyYW0ge29iamVjdH0gW3F1ZXJ5XVxuICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoXVxuICogQHBhcmFtIHtib29sZWFufSBbcHJlcGFyZT10cnVlXVxuICovXG5yb3V0ZXIuY3JlYXRlU3RhdGVVcmwgPSBmdW5jdGlvbiAoc3RhdGUsIHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gdW5kZWZpbmVkLCBwcmVwYXJlID0gdHJ1ZSkge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgXG4gIGlmKHByZXBhcmUpIHtcbiAgICAoeyBwYXJhbXMsIHF1ZXJ5LCBoYXNoIH0gPSB0aGlzLnByZXBhcmVTdGF0ZUFyZ3Moc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gpKTtcbiAgfVxuXG4gIGxldCB1cmwgPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAobSwgZiwgdikgPT4gJy8nICsgKHBhcmFtc1t2XSB8fCAnJykpO1xuICB1cmwgPSB1cmwucmVwbGFjZSgvXlxcXi8sICcnKTtcbiAgdXJsID0gdGhpcy5zcGxpdFNsYXNoZXModXJsKTtcblxuICBpZiAoT2JqZWN0LmtleXMocXVlcnkpLmxlbmd0aCkge1xuICAgIHVybCArPSAnPycgKyByZXF1ZXN0LnBhcmFtc1RvUXVlcnkocXVlcnkpO1xuICB9XG5cbiAgaWYgKCF0aGlzLmhhc2hNb2RlICYmIGhhc2gpIHtcbiAgICB1cmwgKz0gJyMnICsgaGFzaC5yZXBsYWNlKCcjJywgJycpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG5cbi8qKlxuICogUHJlcGFyZSB0aGUgc3RhdGUgYXJndW1lbnRzXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXVxuICogQHBhcmFtIHtvYmplY3R9IFtxdWVyeV1cbiAqIEBwYXJhbSB7c3RyaW5nfSBbaGFzaF1cbiAqL1xucm91dGVyLnByZXBhcmVTdGF0ZUFyZ3MgPSBmdW5jdGlvbiAoc3RhdGUsIHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gdW5kZWZpbmVkKSB7XG4gIGxldCBhcmdzID0geyBwYXJhbXMsIHF1ZXJ5LCBoYXNoIH07XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IDk7IGkrKykge1xuICAgIGNvbnN0IHBhcmFtc1RlbXAgPSB0aGlzLnByZXBhcmVTdGF0ZVBhcmFtcyhzdGF0ZSwgcGFyYW1zLCBhcmdzKTtcbiAgICBjb25zdCBxdWVyeVRlbXAgPSB0aGlzLnByZXBhcmVTdGF0ZVF1ZXJ5KHN0YXRlLCBxdWVyeSwgYXJncyk7XG4gICAgY29uc3QgaGFzaFRlbXAgPSB0aGlzLnByZXBhcmVTdGF0ZUhhc2goc3RhdGUsIGhhc2gsIGFyZ3MpO1xuICAgIGFyZ3MgPSB7IHBhcmFtczogcGFyYW1zVGVtcCwgcXVlcnk6IHF1ZXJ5VGVtcCwgaGFzaDogaGFzaFRlbXAgfTtcbiAgfVxuICBcbiAgcmV0dXJuIGFyZ3M7XG59XG5cbi8qKlxuICogUHJlcGFyZSB0aGUgc3RhdGUgcGFyYW1zXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBbYXJnc11cbiAqL1xucm91dGVyLnByZXBhcmVTdGF0ZVBhcmFtcyA9IGZ1bmN0aW9uKHN0YXRlLCBwYXJhbXMsIGFyZ3MpIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG4gIGNvbnN0IGxpc3QgPSBbcGFyYW1zXTtcbiAgY29uc3Qgc3RhdGVzID0gc3RhdGUubmFtZS5zcGxpdCgnLicpO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBzdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGN1cnJlbnQgPSBzdGF0ZXMuc2xpY2UoMCwgc3RhdGVzLmxlbmd0aCAtIGkpLmpvaW4oJy4nKTtcbiAgICBsaXN0LnB1c2godGhpcy5nZXRTdGF0ZShjdXJyZW50KS5wYXJhbXMpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuY3JlYXRlU3RhdGVBcmdzKGxpc3QsIGFyZ3MpO1xufVxuXG4vKipcbiAqIFByZXBhcmUgdGhlIHN0YXRlIHF1ZXJ5XG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBxdWVyeVxuICogQHBhcmFtIHtvYmplY3R9IFthcmdzXVxuICovXG5yb3V0ZXIucHJlcGFyZVN0YXRlUXVlcnkgPSBmdW5jdGlvbihzdGF0ZSwgcXVlcnksIGFyZ3MpIHsgIFxuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgY29uc3QgbGlzdCA9IFtxdWVyeV07XG4gIGNvbnN0IHN0YXRlcyA9IHN0YXRlLm5hbWUuc3BsaXQoJy4nKTsgIFxuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBzdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgY29uc3QgY3VycmVudCA9IHN0YXRlcy5zbGljZSgwLCBzdGF0ZXMubGVuZ3RoIC0gaSkuam9pbignLicpO1xuICAgIGxpc3QucHVzaCh0aGlzLmdldFN0YXRlKGN1cnJlbnQpLnF1ZXJ5KTtcbiAgfVxuIFxuICByZXR1cm4gdGhpcy5jcmVhdGVTdGF0ZUFyZ3MobGlzdCwgYXJncyk7XG59XG5cbi8qKlxuICogTWVyZ2UgbGlzdCBpdGVtcyBhcyB0cmFuc2l0aW9uIG9iamVjdHNcbiAqIFxuICogQHBhcmFtIHtvYmplY3RbXX0gbGlzdFxuICogQHBhcmFtIHtvYmplY3R9IFthcmdzXVxuICovXG5yb3V0ZXIuY3JlYXRlU3RhdGVBcmdzID0gZnVuY3Rpb24gKGxpc3QsIGFyZ3MgPSB7IHBhcmFtczoge30sIHF1ZXJ5OiB7fSB9KSB7XG4gIGNvbnN0IGFsbCA9IHt9O1xuICBjb25zdCBleGNsdWRlZCA9IHt9O1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBsaXN0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvbnN0IG9iaiA9IGxpc3RbaV07XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gXG4gICAgZm9yKGxldCBrID0gMCwgYyA9IGtleXMubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICBsZXQga2V5ID0ga2V5c1trXTtcbiAgICAgIGxldCB2YWwgPSBvYmpba2V5XTtcblxuICAgICAgaWYoZXhjbHVkZWRba2V5XSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFsID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nPyB2YWwoYXJncyk6IHZhbDtcblxuICAgICAgaWYodmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmKHZhbCA9PT0gbnVsbCkge1xuICAgICAgICBkZWxldGUgYWxsW2tleV07XG4gICAgICAgIGV4Y2x1ZGVkW2tleV0gPSB0cnVlO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgYWxsW2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFsbDsgXG59XG5cbi8qKlxuICogUHJlcGFyZSB0aGUgc3RhdGUgaGFzaFxuICogXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gaGFzaFxuICogQHBhcmFtIHtvYmplY3R9IFthcmdzXVxuICovXG5yb3V0ZXIucHJlcGFyZVN0YXRlSGFzaCA9IGZ1bmN0aW9uKHN0YXRlLCBoYXNoLCBhcmdzKSB7XG4gIGlmKGhhc2ggPT09IG51bGwpIHtcbiAgICByZXR1cm4gaGFzaDtcbiAgfVxuXG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBjb25zdCBzdGF0ZXMgPSBzdGF0ZS5uYW1lLnNwbGl0KCcuJyk7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IHN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjb25zdCBjdXJyZW50ID0gc3RhdGVzLnNsaWNlKDAsIHN0YXRlcy5sZW5ndGggLSBpKS5qb2luKCcuJyk7XG4gICAgbGV0IHZhbCA9IHRoaXMuZ2V0U3RhdGUoY3VycmVudCkuaGFzaDtcbiAgICB2YWwgPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic/IHZhbChhcmdzKTogdmFsO1xuXG4gICAgaWYodmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmKHZhbCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaGFzaCA9IHZhbDtcbiAgfVxuXG4gIHJldHVybiBoYXNoO1xufVxuXG4vKipcbiAqIFJlbW92ZSBhbGwgdW5uZWNlc3Nhcnkgc2xhc2hlcyBmcm9tIGFuIHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5zcGxpdFNsYXNoZXMgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHJldHVybiB1cmwucmVwbGFjZSgvWy9dKy9nLCAnLycpO1xufTtcblxuLyoqXG4gKiBHZXQgc3RhdGUgdXJsIGNvbnRlbnRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0UGF0dGVybkNvbnRlbnQgPSBmdW5jdGlvbiAoc3RhdGUsIHVybCkge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgbGV0IGtleXMgPSBbXTtcbiAgbGV0IHBhcmFtcyA9IHt9O1xuXG4gIHVybCA9IHVybC5zcGxpdCgnPycpWzBdO1xuICB1cmwgPSB1cmwuc3BsaXQoJyMnKVswXTtcblxuICBsZXQgdXJsUGF0dGVybiA9IHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2UodGhpcy5fX3BhcmFtUmVnZXgsIChtLCBmLCB2KSA9PiB7XG4gICAga2V5cy5wdXNoKHYpO1xuICAgIHJldHVybiAnLz8oW14vXSopJztcbiAgfSk7XG5cbiAgdXJsUGF0dGVybiA9IHVybFBhdHRlcm4ucmVwbGFjZSgvKFteXi9dKylbL10rJC8sICckMScpO1xuICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKHVybFBhdHRlcm4sICdnJyk7XG4gIGxldCBpc0luY2x1ZGVkID0gdXJsLm1hdGNoKHJlZ2V4KTtcbiAgXG4gIGlmICghaXNJbmNsdWRlZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdXJsLnJlcGxhY2UocmVnZXgsIChtLCAuLi5hcmdzKSA9PiB7IFxuICAgIGFyZ3MgPSBhcmdzLnNsaWNlKDAsIGFyZ3MubGVuZ3RoIC0gMik7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gYXJncy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCB2ID0gYXJnc1tpXTtcbiAgICAgIHYgJiYgKHBhcmFtc1trZXlzW2ldXSA9IHYpO1xuICAgIH0gIFxuICB9KTtcblxuICByZXR1cm4geyBwYXJhbXMgfTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIHN0YXRlIGlzIGFjdGl2ZSBub3dcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVzXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmlzQWN0aXZlU3RhdGUgPSBmdW5jdGlvbihzdGF0ZSwgaW5jbHVkZXMgPSBmYWxzZSkge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgbGV0IHVybCA9IHRoaXMuc3BsaXRTbGFzaGVzKCcvJyArIHRoaXMuZ2V0VXJsKCkuc3BsaXQoJz8nKVswXSArICcvJyk7XG4gIGxldCB1cmxQYXR0ZXJuID0gc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZSh0aGlzLl9fcGFyYW1SZWdleCwgJy8/KFteL10qKScpO1xuICB1cmxQYXR0ZXJuID0gdXJsUGF0dGVybi5yZXBsYWNlKC9eXFxeLywgJycpLnJlcGxhY2UoL1xcJCQvLCAnJyk7XG4gIGxldCBzdHIgPSBpbmNsdWRlcz8gdXJsUGF0dGVybjogdGhpcy5zcGxpdFNsYXNoZXMoJ14vJyArIHVybFBhdHRlcm4gKyAnLyQnKTtcbiAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChzdHIpOyAgXG4gIHJldHVybiByZWdleC50ZXN0KHVybCk7XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSBjdXJyZW50IHVybCBpbmNsdWRlcyBhIHN0YXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnJvdXRlci5pbkFjdGl2ZVN0YXRlID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgcmV0dXJuIHJvdXRlci5pc0FjdGl2ZVN0YXRlKHN0YXRlLCB0cnVlKTtcbn07XG5cbi8qKlxuICogR2V0IHJvdXRlIGNvbXBvbmVudCBieSBsZXZlbFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZXZlbFxuICovXG5yb3V0ZXIuZ2V0Um91dGUgPSBmdW5jdGlvbiAobGV2ZWwpIHtcbiAgbGV0IGkgPSAwO1xuXG4gIGNvbnN0IGZpbmQgPSAoZWwpID0+IHtcbiAgICBsZXQgcm91dGUgPSBlbC5jaGlsZCh0aGlzLl9fcm91dGVTZWxlY3Rvcik7XG5cbiAgICBpZiAoIXJvdXRlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoaSA9PSBsZXZlbCkge1xuICAgICAgcmV0dXJuIHJvdXRlO1xuICAgIH1cblxuICAgIGkrKztcbiAgICByZXR1cm4gZmluZChyb3V0ZSk7XG4gIH07XG5cbiAgcmV0dXJuIGZpbmQoQWtpbGkucm9vdCk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgZmlyc3QgbWF0Y2hcbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBhcnJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAqL1xucm91dGVyLmdldEFycmF5UGF0dGVybkNvbnRlbnQgPSBmdW5jdGlvbiAoYXJyLCB1cmwpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gYXJyW2ldO1xuICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRQYXR0ZXJuQ29udGVudChzdGF0ZSwgdXJsKTtcblxuICAgIGlmICghY29udGVudCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3RhdGU6IHN0YXRlLCAuLi5jb250ZW50IH07XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogR2V0IHN0YXRlcyBieSBsZXZlbFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZXZlbFxuICogQHJldHVybnMge0FycmF5fVxuICovXG5yb3V0ZXIuZ2V0U3RhdGVzQnlMZXZlbCA9IGZ1bmN0aW9uIChsZXZlbCkge1xuICBsZXQgc3RhdGVzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZS5sZXZlbCA8IGxldmVsKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc3RhdGUubGV2ZWwgPiBsZXZlbCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgc3RhdGVzLnB1c2goc3RhdGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlcztcbn07XG5cbi8qKlxuICogUmVsb2FkIHRoZSBzdGF0ZVxuICogXG4gKiBAc2VlIFRyYW5zaXRpb24ucmVsb2FkXG4gKi9cbnJvdXRlci5yZWxvYWQgPSBmdW5jdGlvbiguLi5hcmdzKSB7XG4gIGlmKCF0aGlzLnRyYW5zaXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBmb3VuZCBhbiBhY3RpdmUgdHJhbnNpdGlvbiB0byByZWxvYWQgdGhlIHN0YXRlJyk7XG4gIH1cblxuICByZXR1cm4gdGhpcy50cmFuc2l0aW9uLnJlbG9hZCguLi5hcmdzKTtcbn1cblxuLyoqXG4gKiBJc29sYXRlIHRoZSBmdW5jdGlvbiB0byBub3QgdHJpZ2dlciByb3V0ZXIgaGFuZGxlcnMgaW5zaWRlXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5yb3V0ZXIuaXNvbGF0ZSA9IGZ1bmN0aW9uIChmbikge1xuICB0aGlzLl9faXNvbGF0ZWQgPSB0cnVlO1xuICBsZXQgcmVzID0gZm4oKTtcbiAgdGhpcy5fX2lzb2xhdGVkID0gZmFsc2U7XG4gIHJldHVybiByZXM7XG59XG5cbi8qKlxuICogQ2hhbmdlIHN0YXRlXG4gKi9cbnJvdXRlci5jaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uICgpIHsgICAgXG4gIGlmKHRoaXMuX19pc29sYXRlZCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuICBcbiAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKCk7XG4gIGxldCBwYXJhbXMgPSB7fTtcbiAgbGV0IHF1ZXJ5ID0gdGhpcy5nZXRVcmxRdWVyeSgpOyAgXG4gIGxldCBoYXNoID0gdGhpcy5oYXNoTW9kZT8gJyc6IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7IFxuICBsZXQgcHJldlRyYW5zaXRpb24gPSByb3V0ZXIudHJhbnNpdGlvbiB8fCBudWxsO1xuICBsZXQgdHJhbnNpdGlvbiA9IHJvdXRlci50cmFuc2l0aW9uID0gbmV3IFRyYW5zaXRpb24ocHJldlRyYW5zaXRpb24pO1xuICBsZXQgbGV2ZWwgPSAwO1xuICAgXG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc3RhdGUtY2hhbmdlJywgeyBkZXRhaWw6IHRyYW5zaXRpb24gfSkpO1xuXG4gIGNvbnN0IG5leHQgPSAoc3RhdGVzLCBvbkVuZCkgPT4geyAgICBcbiAgICBpZiAoIXN0YXRlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBvbkVuZCAmJiBvbkVuZCgpO1xuICAgIH1cblxuICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRBcnJheVBhdHRlcm5Db250ZW50KHN0YXRlcywgdXJsKTtcblxuICAgIGlmICghY29udGVudCkge1xuICAgICAgcmV0dXJuIG9uRW5kICYmIG9uRW5kKCk7XG4gICAgfVxuXG4gICAgbGV0IHN0YXRlID0gY29udGVudC5zdGF0ZTtcbiAgICB0cmFuc2l0aW9uLnNldFBhdGgoeyBzdGF0ZSwgY29tcG9uZW50OiByb3V0ZSwgbG9hZGVkOiB0cnVlIH0pO1xuICAgIGxldCBjdXJyZW50VXJsID0gdGhpcy5jcmVhdGVTdGF0ZVVybChzdGF0ZSwgY29udGVudC5wYXJhbXMsIHF1ZXJ5LCBoYXNoLCBmYWxzZSk7ICBcbiAgICBwYXJhbXMgPSB7IC4uLnBhcmFtcywgLi4uY29udGVudC5wYXJhbXMgfTtcbiAgICBoYXNoID0gaGFzaCB8fCAodGhpcy5fX29wdGlvbnMuaGFzaElzTnVsbD8gbnVsbDogJycpO1xuICAgICh7IHBhcmFtcywgcXVlcnksIGhhc2ggfSA9IHRoaXMucHJlcGFyZVN0YXRlQXJncyhzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCkpOyBcbiAgICBoYXNoID0gaGFzaCB8fCAnJztcbiAgICBsZXQgcmVhbFVybCA9IHRoaXMuY3JlYXRlU3RhdGVVcmwoc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gsIGZhbHNlKTsgXG4gICAgY3VycmVudFVybCAhPSByZWFsVXJsICYmIHRoaXMuaXNvbGF0ZSgoKSA9PiB0aGlzLnNldFVybChyZWFsVXJsKSk7ICAgXG4gICAgbGV0IHJvdXRlID0gc3RhdGUuYWJzdHJhY3Q/IG51bGw6IHRoaXMuZ2V0Um91dGUobGV2ZWwpO1xuXG4gICAgaWYgKCFyb3V0ZSAmJiAhc3RhdGUuYWJzdHJhY3QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvciAoYE5vdCBmb3VuZCByb3V0ZSBjb21wb25lbnQgZm9yIHN0YXRlIFwiJHtzdGF0ZS5uYW1lfVwiYCk7XG4gICAgfSAgICBcblxuICAgIHRyYW5zaXRpb24ucGF0aC5wYXJhbXMgPSBwYXJhbXM7XG4gICAgdHJhbnNpdGlvbi5wYXRoLnF1ZXJ5ID0gcXVlcnk7XG4gICAgdHJhbnNpdGlvbi5wYXRoLmhhc2ggPSBoYXNoO1xuICAgIHRyYW5zaXRpb24ucGF0aC51cmwgPSByZWFsVXJsO1xuICAgICFzdGF0ZS5hYnN0cmFjdCAmJiBsZXZlbCsrO1xuICAgIGxldCBpc0RpZmZlcmVudCA9IHRydWU7XG5cbiAgICBpZihyZWFsVXJsICE9IHVybCkge1xuICAgICAgaXNEaWZmZXJlbnQgPSB0cmFuc2l0aW9uLmlzUm91dGVDaGFuZ2VkKHRyYW5zaXRpb24ucGF0aCk7XG4gICAgfVxuICAgIFxuICAgIHRyYW5zaXRpb24ucGF0aC5sb2FkZWQgPSBpc0RpZmZlcmVudCAmJiB0aGlzLl9fb3B0aW9ucy5yZWxvYWQgIT09IGZhbHNlOyAgIFxuICAgIFxuICAgIFByb21pc2UucmVzb2x2ZSh0cmFuc2l0aW9uLnBhdGgubG9hZGVkPyBzdGF0ZS5oYW5kbGVyKHRyYW5zaXRpb24pOiB0cmFuc2l0aW9uLnBhdGguZGF0YSkudGhlbigoZGF0YSkgPT4geyAgXG4gICAgICBpZiAodHJhbnNpdGlvbi5fX2NhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRhdGEpLnRoZW4oKCkgPT4gb25FbmQgJiYgb25FbmQoKSkuY2F0Y2goKGVycikgPT4gb25FbmQgJiYgb25FbmQoZXJyKSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRyYW5zaXRpb24ucGF0aC5kYXRhID0gZGF0YTtcbiAgICAgIHN0YXRlLnRpdGxlICYmIChkb2N1bWVudC50aXRsZSA9IHR5cGVvZiBzdGF0ZS50aXRsZSA9PSAnZnVuY3Rpb24nPyBzdGF0ZS50aXRsZSh0cmFuc2l0aW9uKTogc3RhdGUudGl0bGUpO1xuXG4gICAgICBpZiAoc3RhdGUuYWJzdHJhY3QpIHtcbiAgICAgICAgcmV0dXJuIG5leHQoc3RhdGUuY2hpbGRyZW4sIG9uRW5kKTtcbiAgICAgIH1cbiBcbiAgICAgIHJvdXRlLnNldFRyYW5zaXRpb24odHJhbnNpdGlvbikudGhlbigoKSA9PiB7XG4gICAgICAgIG5leHQoc3RhdGUuY2hpbGRyZW4sIG9uRW5kKTtcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IG9uRW5kICYmIG9uRW5kKGVycikpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbmV4dCh0aGlzLmdldFN0YXRlc0J5TGV2ZWwoMCksIChlcnIpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRyYW5zaXRpb24ucm91dGVzLmxlbmd0aCkge1xuICAgICAgICBpZiAodGhpcy5fX3JlZGlyZWN0cykge1xuICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKGBXcm9uZyByb3V0ZXIgZGVmYXVsdCB1cmwgXCIke3RoaXMuZGVmYXVsdFVybH1cImApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRVcmwpIHtcbiAgICAgICAgICBpZiAodGhpcy5kZWZhdWx0VXJsID09IHRoaXMuZ2V0VXJsKCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKGBOb3QgZm91bmQgYW55IHJvdXRlc2ApKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmlzb2xhdGUoKCkgPT4gdGhpcy5zZXRVcmwodGhpcy5kZWZhdWx0VXJsKSk7ICAgICAgICAgIFxuICAgICAgICAgIHRoaXMuX19yZWRpcmVjdHMrKztcbiAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2VTdGF0ZSgpLnRoZW4ocmVzb2x2ZSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUud2FybihgTm90IGZvdW5kIGEgZGVmYXVsdCByb3V0ZS4gWW91IGNhbiBwYXNzIGl0IGluIFwicm91dGVyLmluaXQoZGVmYXVsdFVybClcIiBmdW5jdGlvbmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmICghdGhpcy5fX29wdGlvbnMuc2F2ZVNjcm9sbFBvc2l0aW9uICYmICghdHJhbnNpdGlvbi5wYXRoIHx8ICF0cmFuc2l0aW9uLnBhdGguaGFzaCkpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9fb3B0aW9ucyA9IHt9O1xuICAgICAgdGhpcy5fX3JlZGlyZWN0cyA9IDA7XG5cbiAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc3RhdGUtY2hhbmdlZCcsIHsgZGV0YWlsOiB0cmFuc2l0aW9uIH0pKTtcbiAgICAgIHJlc29sdmUodHJhbnNpdGlvbik7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBEZWluaXQgcm91dGVyXG4gKi9cbnJvdXRlci5kZWluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMuX19vblN0YXRlQ2hhbmdlSGFuZGxlcik7XG4gIHJvdXRlci5zZXREZWZhdWx0cygpO1xufTtcblxucm91dGVyLlRyYW5zaXRpb24gPSBUcmFuc2l0aW9uO1xuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xucm91dGVyLnNldERlZmF1bHRzKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL3JvdXRlci5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBjb25kaXRpb25hbCBzdGF0ZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jb25kaXRpb25hbF9zdGF0ZW1lbnRzfVxuICogXG4gKiBAdGFnIGlmXG4gKiBAc2VsZWN0b3IgaWZbaXNdXG4gKiBAYXR0ciB7Ym9vbGVhbn0gaXMgLSBzaG93IHRoZSBlbGVtZW50IGNvbnRlbnQgb3Igbm90XG4gKiBAYXR0ciB7Ym9vbGVhbn0gcmVjcmVhdGUgLSBkZWxldGUgdGhlIGNvbnRlbnQgYW5kIHJlY3JlYXRlIG9yIGp1c3Qgc2hvdy9oaWRlIFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyB0cmFuc3BhcmVudCA9IHRydWU7IFxuICBzdGF0aWMgbWF0Y2hlcyA9ICdbaXNdJztcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydyZWNyZWF0ZSddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpZicsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnZWxzZS1pZicsIHRoaXMuRWxzZUlmKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2Vsc2UnLCB0aGlzLkVsc2UpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5odG1sID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLnN0YXRlID0gZmFsc2U7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnJlY3JlYXRlID0gZmFsc2U7XG4gICAgdGhpcy5pc0NvbXBpbGVkID0gZmFsc2U7XG4gICAgdGhpcy5kaXNwbGF5ID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKS5kaXNwbGF5O1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRyKCdyZWNyZWF0ZScsIHRoaXMuc2V0UmVjcmVhdGlvbik7XG4gICAgcmV0dXJuIHRoaXMuYXR0cignaXMnLCB2YWwgPT4gKHRoaXMuc3RhdGUgPSAhIXZhbCwgdGhpcy5zZXRTdGF0ZSgpKSk7XG4gIH1cblxuICBzZXRBY3Rpdml0eShhY3RpdmUpIHtcbiAgICB0aGlzLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgfVxuXG4gIHNldFJlY3JlYXRpb24ocmVjcmVhdGUpIHtcbiAgICB0aGlzLnJlY3JlYXRlID0gcmVjcmVhdGU7XG4gIH1cblxuICBzZXRTdGF0ZSgpIHtcbiAgICBsZXQgcmVzID0gdGhpcy5jb21waWxhdGlvbigpO1xuICAgIGxldCBuZXh0ID0gdGhpcy5lbC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgbGV0IHJlc3VsdDtcblxuICAgIGlmICghbmV4dCB8fCAhbmV4dC5tYXRjaGVzKCdlbHNlLWlmLGVsc2UnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5leHQuX19ha2lsaS5zZXRBY3Rpdml0eSh0aGlzLmFjdGl2ZSB8fCB0aGlzLnN0YXRlKTtcbiAgICBuZXh0Ll9fYWtpbGkuc2V0UmVjcmVhdGlvbih0aGlzLnJlY3JlYXRlKTtcbiAgICByZXN1bHQgPSBuZXh0Ll9fYWtpbGkuc2V0U3RhdGUoKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcykudGhlbigoKSA9PiAgcmVzdWx0KTtcbiAgfVxuXG4gIGNvbXBpbGF0aW9uKCkge1xuICAgIGxldCByZXM7XG5cbiAgICBpZiAodGhpcy5zdGF0ZSAmJiAhdGhpcy5hY3RpdmUpIHtcbiAgICAgIGlmICh0aGlzLnJlY3JlYXRlIHx8ICF0aGlzLmlzQ29tcGlsZWQpIHtcbiAgICAgICAgcmVzID0gdGhpcy5jb21waWxlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCB0aGlzLmRpc3BsYXksICdpbXBvcnRhbnQnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAodGhpcy5yZWNyZWF0ZSkge1xuICAgICAgICB0aGlzLmVtcHR5KCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghdGhpcy5pc0NvbXBpbGVkKSB7XG4gICAgICAgIHJlcyA9IHRoaXMuY29tcGlsZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnLCAnaW1wb3J0YW50Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGNvbXBpbGUoKSB7XG4gICAgbGV0IHJlcztcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMuaHRtbDsgICAgXG4gICAgcmVzID0gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICB0aGlzLmlzQ29tcGlsZWQgPSB0cnVlO1xuICAgIHJldHVybiByZXM7XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGNvbmRpdGlvbmFsIHN0YXRlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NvbmRpdGlvbmFsX3N0YXRlbWVudHN9XG4gKiBcbiAqIEB0YWcgZWxzZS1pZlxuICogQHNlbGVjdG9yIGVsc2UtaWZbaXNdXG4gKiBAYXR0ciB7Ym9vbGVhbn0gaXMgQHNlZSBJZlxuICovXG5leHBvcnQgY2xhc3MgRWxzZUlmIGV4dGVuZHMgSWYge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGNvbmRpdGlvbmFsIHN0YXRlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NvbmRpdGlvbmFsX3N0YXRlbWVudHN9XG4gKiBcbiAqIEB0YWcgZWxzZVxuICovXG5leHBvcnQgY2xhc3MgRWxzZSBleHRlbmRzIEVsc2VJZiB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2lzJywgJ3RydWUnKTtcbiAgfVxufVxuXG5JZi5FbHNlSWYgPSBFbHNlSWY7XG5JZi5FbHNlID0gRWxzZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pZi5qcyIsImltcG9ydCBGb3IsIHsgTG9vcCB9IGZyb20gJy4vZm9yLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggc2VsZWN0LlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19zZWxlY3R9XG4gKiBcbiAqIEB0YWcgc2VsZWN0ICBcbiAqIEBhdHRyIHtzdHJpbmd9IHZhbHVlIC0gYWN0dWFsIHZhbHVlXG4gKiBAYXR0ciBbaW5dIEBzZWUgRm9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnbXVsdGlwbGUnXS5jb25jYXQoRm9yLmJvb2xlYW5BdHRyaWJ1dGVzKTtcbiAgc3RhdGljIGV2ZW50cyA9IFsnY2hhbmdlJ10uY29uY2F0KEZvci5ldmVudHMpO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdzZWxlY3QnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ29wdGlvbicsIHRoaXMuT3B0aW9uKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXRlcmF0b3JUYWdOYW1lID0gJ29wdGlvbic7XG4gICAgdGhpcy5pc011bHRpcGxlID0gZmFsc2U7XG4gIH1cblxuICBjb21waWxlZCgpIHsgXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB0aGlzLmVsLmNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSk7XG4gICAgbGV0IHJlcyA9IHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7ICAgXG4gICAgdGhpcy5hdHRyKCdtdWx0aXBsZScsIHRoaXMuc2V0TXVsdGlwbGUpO1xuICAgIHRoaXMuYXR0cignY29udGVudCcsIHRoaXMuc2V0Q29udGVudCk7XG4gICAgdGhpcy5hdHRyKCdpbicsIHRoaXMuZHJhd1NlbGVjdCk7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHNldE11bHRpcGxlKHZhbHVlKSB7XG4gICAgdGhpcy5pc011bHRpcGxlID0gdmFsdWU7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKHV0aWxzLmNvcHkodGhpcy5lbC5jb250ZW50KSkpO1xuICB9XG5cbiAgc2V0Q29udGVudCh2YWx1ZSkge1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5mb3JtYXRWYWx1ZSh2YWx1ZSkpO1xuICB9XG5cbiAgZHJhd1NlbGVjdCgpIHtcbiAgICBsZXQgc2VsZWN0ZWQgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXS5fX2FraWxpO1xuICAgICAgbGV0IHNlbGVjdGlvbiA9IG9wdGlvbi5hdHRycy5zZWxlY3RlZDtcblxuICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICBzZWxlY3RlZC5wdXNoKG9wdGlvbi5lbC52YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbi5lbC5zZWxlY3RlZCA9IHNlbGVjdGlvbjtcbiAgICB9XG5cbiAgICBpZiAoIXNlbGVjdGVkLmxlbmd0aCkge1xuICAgICAgdGhpcy5yZWRlZmluZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5mb3JtYXRWYWx1ZShzZWxlY3RlZCkpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUl0ZXJhdG9yRWxlbWVudCgpIHtcbiAgICBsZXQgZWwgPSBzdXBlci5jcmVhdGVJdGVyYXRvckVsZW1lbnQoKTtcblxuICAgIGlmICghZWwuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGhpcy5odG1sLnRyaW0oKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBpZiAoIXRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZWwudmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnQgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXTtcblxuICAgICAgaWYgKG9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICBjb250ZW50LnB1c2gob3B0aW9uLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGZvcm1hdFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9ICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKT8gW3ZhbHVlXTogW107XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUubGVuZ3RoPyB2YWx1ZVswXTogJyc7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZWRlZmluZSgpIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZ2V0Q29udGVudCgpKTtcbiAgfVxuXG4gIGNoYW5nZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHV0aWxzLmNvbXBhcmUodGhpcy5lbC5jb250ZW50LCB2YWx1ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuZWwudmFsdWUgPSB2YWx1ZVt2YWx1ZS5sZW5ndGggLSAxXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdmFsdWUuaW5kZXhPZihvcHRpb24udmFsdWUpICE9IC0xO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZWwudmFsdWUgPSB2YWx1ZTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gb3B0aW9uLnZhbHVlID09IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZWwuY29udGVudCA9IHZhbHVlO1xuICAgIHRoaXMuYXR0cnMub25DaGFuZ2UuZGlzcGF0Y2goRXZlbnQsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgT3B0aW9uIGV4dGVuZHMgTG9vcCB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnc2VsZWN0ZWQnXTtcblxuICBfX2dldFBhcnNlZEV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIHJldHVybiB1dGlscy5kZWNvZGVIdG1sRW50aXRpZXMoZXhwcmVzc2lvbik7XG4gIH1cblxuICBjaGFuZ2VkU2VsZWN0ZWQodmFsdWUpIHtcbiAgICB0aGlzLnNldFNlbGVjdGVkKHZhbHVlKTtcbiAgfVxuXG4gIHNldFNlbGVjdGVkKHZhbHVlKSB7XG4gICAgdGhpcy5lbC5zZWxlY3RlZCA9IHZhbHVlO1xuICAgIHRoaXMuZm9yLnJlZGVmaW5lKCk7XG4gIH1cbn1cblxuU2VsZWN0Lk9wdGlvbiA9IE9wdGlvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9zZWxlY3QuanMiLCJpbXBvcnQgVGV4dCBmcm9tICcuL3RleHQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIGlucHV0IGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbnB1dH1cbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NoZWNrYm94X2FuZF9yYWRpb31cbiAqIFxuICogQHRhZyBpbnB1dFxuICogQGF0dHIgQHNlZSBUZXh0XG4gKiBAbWVzc2FnZSBAc2VlIFRleHRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBUZXh0IHtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydjaGVja2VkJywgJ211bHRpcGxlJ10uY29uY2F0KFRleHQuYm9vbGVhbkF0dHJpYnV0ZXMpO1xuICBzdGF0aWMgZXZlbnRzID0gWydjaGFuZ2UnXS5jb25jYXQoVGV4dC5ldmVudHMpO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpbnB1dCcsIHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pc0NoZWNrYm94ID0gdGhpcy5lbC50eXBlID09ICdjaGVja2JveCc7XG4gICAgdGhpcy5pc1JhZGlvID0gdGhpcy5lbC50eXBlID09ICdyYWRpbyc7ICAgIFxuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgKHRoaXMuaXNDaGVja2JveCB8fCB0aGlzLmlzUmFkaW8pICYmIHRoaXMuYXR0cignY2hlY2tlZCcsIHRoaXMuc2V0Q2hlY2tlZCk7XG4gICAgcmV0dXJuIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH0gIFxuXG4gIHNldENoZWNrZWQodmFsdWUpIHtcbiAgICB2YWx1ZSA9ICEhdmFsdWU7XG4gICAgXG4gICAgaWYgKHRoaXMuZWwuY2hlY2tlZCA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmVsLmNoZWNrZWQgPSB2YWx1ZTtcbiAgICB0aGlzLl9faXNDb21waWxlZCAmJiB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgdGhpcy5pc1JhZGlvICYmIHRoaXMuY2hhbmdlUmFkaW8oKTtcbiAgfVxuXG4gIHNldFZhbHVlKCkge1xuICAgIHN1cGVyLnNldFZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5pc1JhZGlvICYmIHRoaXMuYXR0cnMub25DaGFuZ2UuZGlzcGF0Y2goRXZlbnQsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgfVxuXG4gIGNoYW5nZVJhZGlvKCkge1xuICAgIGxldCBuYW1lID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICBsZXQgc2VsZWN0b3IgPSBgaW5wdXRbdHlwZT1yYWRpb11bbmFtZT0nJHtuYW1lfSddOm5vdChbc2NvcGU9JyR7dGhpcy5zY29wZS5fX25hbWV9J10pYDtcbiAgICBsZXQgY2hpbGRyZW4gPSBBa2lsaS5yb290LmNoaWxkcmVuKHNlbGVjdG9yKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcmFkaW8gPSBjaGlsZHJlbltpXTtcbiAgICAgIHJhZGlvLnNldENoZWNrZWQocmFkaW8uZWwuY2hlY2tlZCk7XG4gICAgfVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaW5wdXQuanMiLCJpbXBvcnQgRm9yLCB7IExvb3AgfSBmcm9tICcuL2Zvci5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggcmFkaW8gZ3JvdXAuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX3JhZGlvX2dyb3VwfVxuICogXG4gKiBAdGFnIHJhZGlvXG4gKiBAc2VsZWN0b3IgcmFkaW9bbmFtZV1cbiAqIEBhdHRyIHtzdHJpbmd9IG5hbWUgLSBuYW1lIG9mIHRoZSBncm91cFxuICogQGF0dHIge3N0cmluZ3xudWxsfSB2YWx1ZSAtIHNlbGVjdGVkIHZhbHVlXG4gKiBAYXR0ciBbaW5dIEBzZWUgRm9yXG4gKiBAbWVzc2FnZSB7c3RyaW5nfSByYWRpbyAtIHNlbnQgb24gdmFsdWUgY2hhbmdlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZGlvIGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW25hbWVdJztcbiAgc3RhdGljIGV2ZW50cyA9IFsncmFkaW8nXS5jb25jYXQoRm9yLmV2ZW50cyk7XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JhZGlvJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdyYWRpby1idXR0b24nLCB0aGlzLlJhZGlvQnV0dG9uKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXRlcmFibGUgPSB0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnaW4nKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgaWYodGhpcy5pdGVyYWJsZSkge1xuICAgICAgcmV0dXJuIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIEFraWxpLm5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5nZXRSYWRpb1ZhbHVlKCk7XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSB0aGlzLnByZXZWYWx1ZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJldlZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuYXR0cnMub25SYWRpby50cmlnZ2VyKHZhbHVlLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmKHRoaXMuaXRlcmFibGUpIHtcbiAgICAgIHJldHVybiBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIHJlc29sdmVkKCkge1xuICAgIHRoaXMuYXR0cignaW4nLCB0aGlzLnNldE5hbWVzLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTsgICBcbiAgICB0aGlzLmF0dHIoJ3ZhbHVlJywgdGhpcy5zZXRWYWx1ZSk7IFxuICAgIHRoaXMuYXR0cignbmFtZScsIHRoaXMuc2V0TmFtZXMpO1xuXG4gICAgaWYodGhpcy5pdGVyYWJsZSkge1xuICAgICAgcmV0dXJuIHN1cGVyLnJlc29sdmVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgc2V0TmFtZXMobmFtZSkge1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oJ2lucHV0W3R5cGU9cmFkaW9dJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY2hpbGRyZW5baV0uZWwuc2V0QXR0cmlidXRlKCduYW1lJywgbmFtZSB8fCB0aGlzLmF0dHJzLm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSB0aGlzLnByZXZWYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBwcmV2ID0gdGhpcy5wcmV2VmFsdWU7XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbignaW5wdXRbdHlwZT1yYWRpb10nKTtcbiAgICBsZXQgaXNUcnVlID0gZmFsc2U7XG4gICAgdGhpcy5wcmV2VmFsdWUgPSB2YWx1ZTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcmFkaW8gPSBjaGlsZHJlbltpXTtcbiAgICAgIGxldCBpc1NlbGVjdGVkID0gcmFkaW8uZWwudmFsdWUgPT09IHZhbHVlO1xuXG4gICAgICBpc1NlbGVjdGVkICYmIChpc1RydWUgPSB0cnVlKTtcbiAgICAgIHJhZGlvLnNldENoZWNrZWQoaXNTZWxlY3RlZCk7XG4gICAgfVxuXG4gICAgaWYgKCFpc1RydWUpIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICBpZiAocHJldiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmF0dHJzLm9uUmFkaW8udHJpZ2dlcih2YWx1ZSwgeyBidWJibGVzOiB0cnVlIH0pO1xuICB9XG5cbiAgZ2V0UmFkaW9WYWx1ZSgpIHtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICBpZiAocmFkaW8uZWwuY2hlY2tlZCkge1xuICAgICAgICByZXR1cm4gcmFkaW8uZWwudmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIHJhZGlvIGdyb3VwIGl0ZW0uXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX3JhZGlvX2dyb3VwfVxuICogXG4gKiBAdGFnIHJhZGlvLWJ1dHRvblxuICogQGF0dHIge3N0cmluZ30gdmFsdWUgLSB2YWx1ZVxuICovXG5leHBvcnQgY2xhc3MgUmFkaW9CdXR0b24gZXh0ZW5kcyBMb29wIHtcbiAgc3RhdGljIHRlbXBsYXRlID0gJzxsYWJlbD48aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIke3RoaXMudmFsdWV9XCIvPiR7dGhpcy5fX2NvbnRlbnR9PC9sYWJlbD4nO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cigndmFsdWUnLCAndmFsdWUnKTtcbiAgICByZXR1cm4gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5SYWRpby5SYWRpb0J1dHRvbiA9IFJhZGlvQnV0dG9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3JhZGlvLmpzIiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCB0ZXh0YXJlYS5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfdGV4dGFyZWF9XG4gKiBcbiAqIEB0YWcgdGV4dGFyZWFcbiAqIEBhdHRyIEBzZWUgVGV4dFxuICogQG1lc3NhZ2UgQHNlZSBUZXh0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRhcmVhIGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0ZXh0YXJlYScsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGV4dGFyZWEuanMiLCJpbXBvcnQgVGV4dCBmcm9tICcuL3RleHQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGVsZW1lbnRzIHdpdGggY29udGVudGVkaXRhYmxlIGF0dHJpYnV0ZS5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfY29udGVudGVkaXRhYmxlfVxuICogXG4gKiBAdGFnIGNvbnRlbnRcbiAqIEBzZWxlY3RvciBjb250ZW50LFtjb250ZW50ZWRpdGFibGVdXG4gKiBAYXR0ciBAc2VlIFRleHRcbiAqIEBhdHRyIHtib29sZWFufSBbZWRpdGFibGVdIC0gZWRpdGFibGUgb3Igbm90XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnQgZXh0ZW5kcyBUZXh0IHtcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2NvbnRlbnQnLCB0aGlzKTtcbiAgICBBa2lsaS5hbGlhcygnW2NvbnRlbnRlZGl0YWJsZV0nLCAnY29udGVudCcpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgaWYgKHRoaXMuZWwuaGFzQXR0cmlidXRlKCdlZGl0YWJsZScpKSB7XG4gICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ2VkaXRhYmxlJykpO1xuICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoJ2VkaXRhYmxlJyk7XG4gICAgfVxuXG4gICAgaWYgKGdldENvbXB1dGVkU3R5bGUodGhpcy5lbCkuZGlzcGxheSA9PSAnaW5saW5lJykge1xuICAgICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlS2V5ID0gJ2lubmVySFRNTCc7XG4gIH1cblxuICBzZXRFbGVtZW50Rm9jdXMoKSB7XG4gICAgbGV0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICBsZXQgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuXG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKHRoaXMuZWwpO1xuICAgIHJhbmdlLmNvbGxhcHNlKGZhbHNlKTtcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9jb250ZW50LmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byBpbmNsdWRlIHRlbXBsYXRlcyBieSB1cmwuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2h0bWxfdGVtcGxhdGVzfVxuICogXG4gKiBAdGFnIGluY2x1ZGVcbiAqIEBzZWxlY3RvciBpbmNsdWRlW3VybF1cbiAqIEBhdHRyIHtzdHJpbmd9IHVybCAtIHRlbXBsYXRlIHBhdGhcbiAqIEBhdHRyIHtudW1iZXJ8ZnVuY3Rpb258Ym9vbGVhbn0gW2NhY2hlXSAtIHJlcXVlc3QgY2FjaGUge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yZXF1ZXN0cyNkb2NzX2NhY2hlfVxuICogQG1lc3NhZ2Uge3ZvaWR9IGxvYWQgLSBzZW50IG9uIHRoZSB0ZW1wbGF0ZSBsb2FkXG4gKiBAbWVzc2FnZSB7RXJyb3J9IGVycm9yIC0gc2VudCBvbiBlcnJvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmNsdWRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gdHJ1ZTsgXG4gIHN0YXRpYyBtYXRjaGVzID0gJ1t1cmxdJztcbiAgc3RhdGljIGV2ZW50cyA9IFsnbG9hZCcsICdlcnJvciddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpbmNsdWRlJywgdGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ2NhY2hlJywgdGhpcy5zZXRDYWNoZSk7XG4gICAgcmV0dXJuIHRoaXMuYXR0cigndXJsJywgdGhpcy5zZXRUZW1wbGF0ZSk7XG4gIH1cblxuICBzZXRDYWNoZShjYWNoZSkge1xuICAgIHRoaXMuY2FjaGUgPSBjYWNoZTtcbiAgfVxuXG4gIHNldFRlbXBsYXRlKHVybCkge1xuICAgIHRoaXMuY29ubmVjdGlvbiAmJiB0aGlzLmNvbm5lY3Rpb24uYWJvcnQoKTtcblxuICAgIHJldHVybiByZXF1ZXN0LmdldCh1cmwsIHtcbiAgICAgIGNhY2hlOiB0aGlzLmNhY2hlLFxuICAgICAgb25TdGFydDogKHhocikgPT4ge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSB4aHI7XG4gICAgICB9XG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgdGhpcy5lbXB0eSgpO1xuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XG4gICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCByZXMuZGF0YSk7XG5cbiAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uTG9hZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgIH0pO1xuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHRoaXMuYXR0cnMub25FcnJvci50cmlnZ2VyKGVyciwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2luY2x1ZGUuanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBpZnJhbWVzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgaWZyYW1lXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZnJhbWUgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpZnJhbWUnLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2lmcmFtZS5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGltYWdlcy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIGltZ1xuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2UgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpbWcnLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2ltYWdlLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgZW1iZWQgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBlbWJlZFxuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1iZWQgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdlbWJlZCcsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZW1iZWQuanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBhdWRpbyBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIGF1ZGlvXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpbyBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2F1ZGlvJywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9hdWRpby5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIHZpZGVvIGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgdmlkZW9cbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZGVvIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgndmlkZW8nLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3ZpZGVvLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgdHJhY2sgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyB0cmFja1xuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhY2sgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0cmFjaycsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdHJhY2suanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBzb3VyY2UgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBzb3VyY2VcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdXJjZSBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3NvdXJjZScsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvc291cmNlLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3Igb2JqZWN0IGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgb2JqZWN0XG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3RzIGV4dGVuZHMgVXJsIHsgIFxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnVybEF0dHJpYnV0ZSA9ICdkYXRhJztcbiAgfVxuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdvYmplY3QnLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL29iamVjdC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi4vc2VydmljZXMvcm91dGVyLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBsaW5rcy5cbiAqIEl0IHdvcmtzIHdpdGggcm91dGVyIHRvby4gXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2xpbmtzfVxuICogXG4gKiBAdGFnIGFcbiAqIEBzZWxlY3RvciBhW3N0YXRlXTpub3QoW3VybF0pLGFbdXJsXTpub3QoW3N0YXRlXSlcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdIC0gdXJsIHRvIGdvIG9uIGNsaWNrXG4gKiBAYXR0ciB7c3RyaW5nfSBbc3RhdGVdIC0gc3RhdGUgb2Ygcm91dGVyIHRvIGdvIG9uIGNsaWNrIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZ31cbiAqIEBhdHRyIHtvYmplY3R9IFtwYXJhbXNdIC0gcGFyYW1zIGZvciB0aGUgc3RhdGUge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3Nfc3RhdGVfcGFyYW1zfVxuICogQGF0dHIge29iamVjdH0gW3F1ZXJ5XSAtIHF1ZXJ5IGZvciB0aGUgc3RhdGUge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3Nfc3RhdGVfcXVlcnl9XG4gKiBAYXR0ciB7c3RyaW5nfSBbaGFzaF0gLSBoYXNoIGZvciB0aGUgc3RhdGUge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3Nfc3RhdGVfaGFzaH1cbiAqIEBhdHRyIHtvYmplY3R9IFtvcHRpb25zXSAtIG9wdGlvbnMgZm9yIHRoZSBzdGF0ZSB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmcjZG9jc19yb3V0ZXIubG9jYXRpb259XG4gKiBAc2NvcGUge2Jvb2xlYW59IGlzQWN0aXZlU3RhdGUgLSB0aGUgc3RhdGUgaXMgYWN0aXZlIG9yIG5vdCBcbiAqIEBzY29wZSB7Ym9vbGVhbn0gaW5BY3RpdmVTdGF0ZSAtIHRoZSBzdGF0ZSBpcyBwYXJ0IG9mIHRoZSBhY3RpdmUgc3RhdGUgb3Igbm90XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbc3RhdGVdOm5vdChbdXJsXSksW3VybF06bm90KFtzdGF0ZV0pJztcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gdHJ1ZTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnYScsIHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IG51bGw7XG4gICAgdGhpcy5wYXJhbXMgPSB7fTtcbiAgICB0aGlzLnF1ZXJ5ID0ge307XG4gICAgdGhpcy5oYXNoID0gbnVsbDtcbiAgICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgICB0aGlzLmlzVXJsID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3VybCcpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmICh0aGlzLmlzVXJsKSB7XG4gICAgICAgIHJvdXRlci5sb2NhdGlvbih0aGlzLmF0dHJzLnVybCwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByb3V0ZXIuc3RhdGUodGhpcy5zdGF0ZS5uYW1lLCB0aGlzLnBhcmFtcywgdGhpcy5xdWVyeSwgdGhpcy5oYXNoLCAgdGhpcy5vcHRpb25zKTtcbiAgICB9KTtcblxuICAgIHRoaXMub25TdGF0ZUNoYW5nZWQgPSAoKSA9PiB0aGlzLnN0YXRlICYmIHRoaXMuc2V0QWN0aXZpdHkoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3RhdGUtY2hhbmdlZCcsIHRoaXMub25TdGF0ZUNoYW5nZWQpO1xuXG4gICAgdGhpcy5hdHRyKCdzdGF0ZScsIHRoaXMuc2V0U3RhdGUpO1xuICAgIHRoaXMuYXR0cigncGFyYW1zJywgdGhpcy5zZXRQYXJhbXMpO1xuICAgIHRoaXMuYXR0cigncXVlcnknLCB0aGlzLnNldFF1ZXJ5KTtcbiAgICB0aGlzLmF0dHIoJ2hhc2gnLCB0aGlzLnNldEhhc2gpO1xuICAgIHRoaXMuYXR0cignb3B0aW9ucycsIHRoaXMuc2V0T3B0aW9ucyk7XG4gICAgdGhpcy5hdHRyKCd1cmwnLCB0aGlzLnNldFVybCk7XG4gICAgdGhpcy5hdHRyKCdzdGF0ZScsIHRoaXMucmVzZXRIcmVmLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTtcbiAgICB0aGlzLmF0dHIoJ3BhcmFtcycsIHRoaXMucmVzZXRIcmVmLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTtcbiAgICB0aGlzLmF0dHIoJ3F1ZXJ5JywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cignaGFzaCcsIHRoaXMucmVzZXRIcmVmLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTtcbiAgICB0aGlzLmF0dHIoJ3VybCcsIHRoaXMucmVzZXRIcmVmLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTtcbiAgICB0aGlzLnJlc2V0SHJlZigpO1xuICB9XG5cbiAgcmVtb3ZlZCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3RhdGUtY2hhbmdlZCcsIHRoaXMub25TdGF0ZUNoYW5nZWQpO1xuICB9XG5cbiAgc2V0VXJsKHVybCkge1xuICAgIHRoaXMudXJsID0gdXJsO1xuICB9XG5cbiAgc2V0U3RhdGUobmFtZSkge1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldFN0YXRlKG5hbWUpO1xuICAgIHRoaXMuc2V0QWN0aXZpdHkoKTtcbiAgfVxuXG4gIHNldEFjdGl2aXR5KCkge1xuICAgIHRoaXMuc2NvcGUuaXNBY3RpdmVTdGF0ZSA9IHJvdXRlci5pc0FjdGl2ZVN0YXRlKHRoaXMuc3RhdGUpO1xuICAgIHRoaXMuc2NvcGUuaW5BY3RpdmVTdGF0ZSA9IHJvdXRlci5pbkFjdGl2ZVN0YXRlKHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgc2V0UGFyYW1zKHBhcmFtcykge1xuICAgIGlmICh0eXBlb2YgcGFyYW1zICE9ICdvYmplY3QnIHx8ICFwYXJhbXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIHBhcmFtcyBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICB9XG5cbiAgc2V0UXVlcnkocXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5ICE9ICdvYmplY3QnIHx8ICFxdWVyeSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgcXVlcnkgbXVzdCBiZSBhbiBvYmplY3RgKTtcbiAgICB9XG5cbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gIH1cblxuICBzZXRIYXNoKGhhc2gpIHtcbiAgICBpZiAodHlwZW9mIGhhc2ggIT0gJ3N0cmluZycgJiYgaGFzaCAhPT0gdW5kZWZpbmVkICYmIGhhc2ggIT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIGhhc2ggbXVzdCBiZSBhIHN0cmluZ3xudWxsYCk7XG4gICAgfVxuXG4gICAgdGhpcy5oYXNoID0gaGFzaDtcbiAgfVxuXG4gIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPSAnb2JqZWN0JyB8fCAhb3B0aW9ucykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgb3B0aW9ucyBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBnZXRTdGF0ZShuYW1lKSB7XG4gICAgbGV0IHN0YXRlID0gcm91dGVyLmdldFN0YXRlKG5hbWUpO1xuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgcm91dGVyIHN0YXRlIHdpdGggbmFtZSBcIiR7bmFtZX1cImApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIHJlc2V0SHJlZigpIHtcbiAgICBpZiAodGhpcy51cmwpIHtcbiAgICAgIHRoaXMuYXR0cnMuaHJlZiA9IHRoaXMudXJsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuYXR0cnMuaHJlZiA9IHJvdXRlci5jcmVhdGVTdGF0ZVVybCh0aGlzLnN0YXRlLCB0aGlzLnBhcmFtcywgdGhpcy5xdWVyeSwgdGhpcy5oYXNoKTtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9hLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==