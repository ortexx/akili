/*!
 * Akili is a javascript framework
 * 
 * const Akili = makeItEasy(js + html);
 * 
 * @version 0.6.24
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
    debug: true
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

  for (var key in _globals2.default) {
    delete _globals2.default[key];
  }

  _globals2.default.utils = _utils2.default;

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
      Akili.__evaluation.component.__addTag(options.tag, Akili.__evaluation.node);
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
 * Evaluate the tags node expressions
 * 
 * @param {string|string[]} tags
 */
Akili.evaluateTag = function (tags) {
  if (!this.root) {
    return;
  }

  if (!Array.isArray(tags)) {
    tags = [tags];
  }

  var children = this.root.children();

  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var childTags = child.__tags;

    for (var j = 0, s = tags.length; j < s; j++) {
      var tag = tags[j];

      if (!childTags[tag]) {
        continue;
      }

      for (var k = 0, c = childTags[tag].length; k < c; k++) {
        var obj = childTags[tag][k];
        child.__evaluateNode(obj.node, false);
      }
    }
  }
};

/**
 * Remove the tags
 * 
 * @param {string|string[]} tags
 */
Akili.removeTag = function (tags) {
  if (!this.root) {
    return;
  }

  if (!Array.isArray(tags)) {
    tags = [tags];
  }

  var children = this.root.children();

  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];

    for (var j = 0, s = tags.length; j < s; j++) {
      child.__removeTag(tags[j]);
    }
  }
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
    this.options.globals[key] = this.wrap(this.options.globals[key], { tag: 'globals.' + key });
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

var _globals = __webpack_require__(10);

var _globals2 = _interopRequireDefault(_globals);

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
     * @param {object} [vars]
     */

  }, {
    key: 'parse',
    value: function parse(context, expression) {
      var variables = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      variables = _extends({}, _globals2.default, variables);
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
    this.__tags = {};
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
     * Add tag
     * 
     * @param {string} tag
     * @param {Node} node
     * @protected
     */

  }, {
    key: '__addTag',
    value: function __addTag(tag, node) {
      if (!this.__tags[tag]) {
        this.__tags[tag] = [];
      }

      if (!this.__hasTag(tag)) {
        this.__tags[tag].push({ node: node });
      }
    }

    /**
     * Check the tag exists
     * 
     * @param {string} tag
     * @param {Node} node
     * @protected
     * @returns {boolean}
     */

  }, {
    key: '__hasTag',
    value: function __hasTag(tag, node) {
      if (!this.__tags[tag]) {
        return false;
      }

      for (var i = 0, l = this.__tags[tag].length; i < l; i++) {
        if (this.__tags[tag][i].node === node) {
          return true;
        }
      }

      return false;
    }

    /**
     * Remove the tag
     * 
     * @param {string} tag
     * @param {Node} [node]
     * @protected
     */

  }, {
    key: '__removeTag',
    value: function __removeTag(tag, node) {
      if (!node) {
        delete this.__tags[tag];
        return;
      }

      for (var i = 0, l = this.__tags[tag].length; i < l; i++) {
        if (this.__tags[tag][i].node === node) {
          this.__tags[tag].splice(i, 1);
          break;
        }
      }

      if (!this.__tags[tag].length) {
        delete this.__tags[tag];
      }
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

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Globals to use the custom variablres in scope expressions
 * 
 * {@link https://akilijs.com/docs/scope#docs_globals}
 */
var globals = new Proxy({}, {
  set: function set(target, key, value) {
    target[key] = _akili2.default.wrap(value, { tag: 'globals.' + key });
    return true;
  },
  deleteProperty: function deleteProperty(target, key) {
    _akili2.default.removeTag('globals.' + key);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2FmNzE1Njk3YzM1MmIyMjc2ODgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FraWxpLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91cmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9nbG9iYWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JvdXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaWYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JhZGlvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHRhcmVhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5jbHVkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZW1iZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdHJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc291cmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hLmpzIl0sIm5hbWVzIjpbIkFraWxpIiwiX19kZWZhdWx0cyIsInNldERlZmF1bHRzIiwib3B0aW9ucyIsImRlYnVnIiwiX19pbml0IiwiX19jbGVhcmVkIiwiX19jb21wb25lbnRzIiwiX19hbGlhc2VzIiwiX19zY29wZXMiLCJfX3N0b3JlTGlua3MiLCJfX3dpbmRvdyIsIl9faXNvbGF0aW9uIiwiX19ldmFsdWF0aW9uIiwiX193cmFwcGluZyIsIl9fb25FcnJvciIsInRyaWdnZXJJbml0IiwiaHRtbEJvb2xlYW5BdHRyaWJ1dGVzIiwia2V5IiwidXRpbHMiLCJjb21wb25lbnRzIiwic2VydmljZXMiLCJDb21wb25lbnQiLCJFdmVudEVtaXR0ZXIiLCJTY29wZSIsImdsb2JhbHMiLCJBIiwiQXVkaW8iLCJDb250ZW50IiwiRm9yIiwiRW1iZWQiLCJJZiIsIkluY2x1ZGUiLCJJbnB1dCIsIklmcmFtZSIsIkltYWdlIiwiT2JqZWN0IiwiUmFkaW8iLCJSb3V0ZSIsIlNlbGVjdCIsIlNvdXJjZSIsIlRleHQiLCJUZXh0YXJlYSIsIlRyYWNrIiwiVXJsIiwiVmlkZW8iLCJyZXF1ZXN0Iiwicm91dGVyIiwic3RvcmUiLCJkZWZpbmUiLCJlcnJvckhhbmRsaW5nIiwiaXNvbGF0ZUV2ZW50cyIsImlzb2xhdGVBcnJheVByb3RvdHlwZSIsImlzb2xhdGVXaW5kb3dGdW5jdGlvbnMiLCJpIiwibCIsImxlbmd0aCIsImRlZmF1bHRzIiwiZm4iLCJwdXNoIiwiY2xlYXJHbG9iYWxzIiwiRWxlbWVudCIsInByb3RvdHlwZSIsIkFycmF5IiwidW53cmFwIiwid2luZG93Iiwic2V0VGltZW91dCIsInNldEludGVydmFsIiwiUHJvbWlzZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJqb2luQmluZGluZ0tleXMiLCJrZXlzIiwibWFwIiwiZWwiLCJ0b1N0cmluZyIsImpvaW4iLCJhZGRTY29wZSIsInNjb3BlIiwiX19uYW1lIiwiRXJyb3IiLCJnZXRTY29wZSIsIm5hbWUiLCJyZW1vdmVTY29wZSIsImdldEFraWxpUGFyZW50cyIsInRyZWUiLCJhcnIiLCJjaGVjayIsIm5vZGUiLCJwYXJlbnROb2RlIiwiX19ha2lsaSIsInNldFRlbXBsYXRlIiwidGVtcGxhdGUiLCJyZXBsYWNlIiwiaW5uZXJIVE1MIiwiY3JlYXRlU2NvcGVOYW1lIiwiY3JlYXRlUmFuZG9tU3RyaW5nIiwic3RyIiwiaXNvbGF0ZSIsInJlcyIsInByb3BzIiwiayIsImhhc093blByb3BlcnR5IiwicHJvcCIsInZhbCIsImdldFByb3BlcnR5QnlLZXlzIiwiY29tcG9uZW50IiwiX19zY29wZSIsIl9faXNSZXNvbHZlZCIsIl9fdHJpZ2dlclN0b3JlQW5kQXR0ciIsIl9fZXZhbHVhdGVCeUtleXMiLCJpc0RlbGV0ZWQiLCJ1bmV2YWx1YXRlIiwiZXZhbHVhdGlvbiIsIndyYXBwaW5nIiwidW5pc29sYXRlIiwiaXNvbGF0aW9uIiwibmV4dFRpY2siLCJyZXNvbHZlIiwidGhlbiIsImluaXRpYWxpemUiLCJyZWNvbXBpbGUiLCJfX3JlY29tcGlsZSIsImlzUm9vdCIsIl9fcm9vdCIsImNvbXBvbmVudE5hbWUiLCJ0b0Rhc2hDYXNlIiwiZ2V0QXR0cmlidXRlIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwiX0NvbXBvbmVudCIsIkNIRUNLX0FMSUFTRVMiLCJzZWxlY3RvcnMiLCJzZWxlY3RvckFsbCIsIm1hdGNoZXMiLCJzZWxlY3RvciIsIl9fY2FuY2VsbGVkIiwiZmluZCIsInAiLCJfX3ByZXZlbnQiLCJfX2NyZWF0ZSIsImNvbXBpbGUiLCJyb290IiwiZWxlbWVudHMiLCJuZXN0ZWRJbml0aWFsaXppbmciLCJjaGlsZHJlbiIsImNoaWxkIiwiX19jb21waWxlIiwiYWxsIiwiciIsIl9fcmVzb2x2ZSIsImNvbnNvbGUiLCJ3YXJuIiwicmVtb3ZlQ29tcG9uZW50IiwiYWxpYXMiLCJyZW1vdmVBbGlhcyIsImdldE93blByb3BlcnR5TmFtZXMiLCJvbGQiLCJfX2lzUHJveHkiLCJhcHBseSIsImFyZ3VtZW50cyIsImNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uIiwiQUtJTElfU1NSIiwiY29uc3RydWN0b3IiLCJjYXRjaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmUiLCJfX2FraWxpTGlzdGVuZXJzIiwiYXJncyIsInNsaWNlIiwiY2FsbCIsImxpbmsiLCJsaXN0ZW5lciIsInNwbGljZSIsInBvcyIsImlzQXJyYXkiLCJudW0iLCJpbmRleCIsImNhbGxiYWNrIiwiX19pc29sYXRlZCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsInZhbHVlIiwid3JhcCIsIm9iaiIsImN1cnJlbnQiLCJ3cmFwRnVuY3Rpb24iLCJjIiwiZGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwicmV2ZXJzZSIsImFraWxpV3JhcHBlZEZ1bmN0aW9uIiwidGFnIiwiX19hZGRUYWciLCJldmFsdWF0ZVRhZyIsInRhZ3MiLCJjaGlsZFRhZ3MiLCJfX3RhZ3MiLCJqIiwicyIsIl9fZXZhbHVhdGVOb2RlIiwicmVtb3ZlVGFnIiwiX19yZW1vdmVUYWciLCJzdGF0dXMiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJpbml0IiwiZG9jdW1lbnQiLCJib2R5IiwiZG9jdW1lbnRFbGVtZW50IiwiQUtJTElfU0VSVkVSIiwiaW5pdFNlcnZlclNpZGVIdG1sIiwiaHRtbCIsImluaXRTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlIiwicmVxdWVzdENhY2hlIiwiQUtJTElfQ0xJRU5UIiwicHJlcGFyZVNlcnZlclNpZGVIdG1sIiwiY2hhbmdlU3RhdGUiLCJwcmVwYXJlU2VydmVyU2lkZVJlcXVlc3RDYWNoZSIsImVyciIsImF0dHJpYnV0ZXMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJkb2MiLCJwYXJzZUZyb21TdHJpbmciLCJxdWVyeVNlbGVjdG9yIiwiYXR0ciIsInNldEF0dHJpYnV0ZSIsImluc3RhbmNlIiwiX19jYWNoZSIsIl9faW5zdGFuY2VzIiwib3V0ZXJIVE1MIiwiY2FjaGUiLCJfX21haW4iLCJkZWluaXQiLCJzdG9yZUtleXMiLCJfX3RhcmdldCIsImNsYXNzIiwiY2xhc3NlcyIsInN0eWxlIiwic3R5bGVzIiwic3BsaXQiLCJkZWwiLCJleGNsdWRlIiwiZXhwcyIsImxhc3QiLCJSZWdFeHAiLCJpbmRleE9mIiwib3BlbiIsImZpbHRlciIsImhhbmRsZXIiLCJtYXRjaCIsIml0ZW0iLCJmaWx0ZXJlZCIsInNvcnQiLCJvcmRlciIsImEiLCJiIiwiRGF0ZSIsImdldFRpbWUiLCJuZXh0IiwiYVYiLCJiViIsImluY2x1ZGVLZXlzIiwibmV3T2JqIiwib2JqS2V5cyIsImV4Y2x1ZGVLZXlzIiwiaXNTY29wZVByb3h5IiwiaXNQbGFpbk9iamVjdCIsImNvcHkiLCJuZXN0ZWQiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIm1ha2VBdHRyaWJ1dGVWYWx1ZSIsInVuZGVmaW5lZCIsImNvbXBhcmUiLCJjbGVhclVuZGVmaW5lZCIsImlnbm9yZVVuZGVmaW5lZCIsImFLZXlzIiwiYktleXMiLCJjb21wYXJlUHJldmlvdXNWYWx1ZSIsInByZXZpb3VzIiwicHJldmlvdXNDb3B5IiwiZW5jb2RlSHRtbEVudGl0aWVzIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiZGVjb2RlSHRtbEVudGl0aWVzIiwidG9DYW1lbENhc2UiLCJtIiwidG9VcHBlckNhc2UiLCJjYXBpdGFsaXplIiwib2JqZWN0IiwicmVkdWNlIiwibyIsImhhc1Byb3BlcnR5QnlLZXlzIiwiaGFzIiwic2V0UHJvcGVydHlCeUtleXMiLCJkZWxldGVQcm9wZXJ0eUJ5S2V5cyIsImdldEVudW1lcmFibGVQcm9wZXJ0eVRhcmdldCIsInRhcmdldCIsInByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJnZXRPd25Qcm9wZXJ0eVRhcmdldCIsIk1hdGgiLCJyYW5kb20iLCJzdWJzdHJpbmciLCJ1cmxBdHRyaWJ1dGUiLCJzZXRVcmwiLCJ1cmwiLCJhdHRycyIsImV2YWx1YXRpb25SZWdleCIsImV2YWx1YXRpb25SZWdleEdsb2JhbCIsInNvdXJjZSIsInN5c3RlbUF0dHJpYnV0ZXMiLCJjb250ZXh0IiwiZXhwcmVzc2lvbiIsInZhcmlhYmxlcyIsInZhcnMiLCJGdW5jdGlvbiIsIl9faXNNb3VudGVkIiwiX19pc0NvbXBpbGVkIiwiX19iaW5kaW5ncyIsIl9fZXZhbHVhdGluZ0V2ZW50IiwiX19yZWNvbXBpbGluZyIsIl9fY29tcGlsaW5nIiwiX19kaXNhYmxlUHJveHkiLCJfX2Rpc2FibGVTdG9yZUtleXMiLCJfX2Rpc2FibGVBdHRyS2V5cyIsIl9fY2hpbGRyZW4iLCJfX3BhcmVudCIsIl9fcGFyZW50cyIsIl9fYXR0cnMiLCJfX2F0dHJMaW5rcyIsIl9fYXR0cmlidXRlT2YiLCJfX2V2YWx1YXRpb25Db21wb25lbnQiLCJjaGVja0NoYW5nZXMiLCJzZXRFdmVudHMiLCJzZXRQYXJlbnRzIiwic2V0Qm9vbGVhbkF0dHJpYnV0ZXMiLCJkZWZpbmVBdHRyaWJ1dGVzIiwiX19jcmVhdGVDb21waWxhdGlvbk9wdGlvbnMiLCJfX2NyZWF0ZVJlY29tcGlsYXRpb25PcHRpb25zIiwiX19zZXRFdmVudHMiLCJfX3NldFBhcmVudHMiLCJfX3NldEJvb2xlYW5BdHRyaWJ1dGVzIiwiX19kZWZpbmVBdHRyaWJ1dGVzIiwiX19pbml0aWFsaXplIiwiY3JlYXRlZCIsImNvbnRyb2wiLCJfX2NvbnRyb2xBdHRyaWJ1dGVzIiwiX19ldmFsdWF0ZVBhcmVudCIsIm5ld1BhcmVudCIsIl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzIiwiaW50ZXJwb2xhdGUiLCJwYXJlbnQiLCJub2RlVHlwZSIsIl9faW5pdGlhbGl6ZU5vZGUiLCJjaGlsZE5vZGVzIiwib25Db21waWxlZCIsInRyaWdnZXIiLCJidWJibGVzIiwiY29tcGlsZWQiLCJ0ZW1wbGF0ZVVybCIsImdldCIsInRlbXBsYXRlQ2FjaGUiLCJfX2NvbnRlbnQiLCJkYXRhIiwib25SZWNvbXBpbGVkIiwicmVjb21waWxlZCIsIm9uUmVzb2x2ZWQiLCJyZXNvbHZlZCIsIl9zY29wZSIsImFzc2lnbiIsImNvbnRyb2xBdHRyaWJ1dGVzIiwiZXZlbnRzIiwiX19ldmVudHMiLCJfX3NhdmVBdHRyaWJ1dGVQcm94eUluIiwic2F2ZUF0dHJpYnV0ZVByb3h5SW4iLCJfX3NhdmVBdHRyaWJ1dGVQcm94eU91dCIsInNhdmVBdHRyaWJ1dGVQcm94eU91dCIsIl9fbmVzdGVkT2JzZXJ2ZSIsImJvb2xlYW5BdHRyaWJ1dGVzIiwiY29uY2F0Iiwic2V0QXR0ciIsIm5vZGVOYW1lIiwiaGFzQXR0cmlidXRlIiwiZXYiLCJ0ZXN0IiwicGFyZW50cyIsImV2YWx1YXRlUGFyZW50IiwidHJhbnNwYXJlbnQiLCJfX2RldGFjaCIsIl9fYWRkQ2hpbGQiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvcGVydGllcyIsIl9fZ2V0Tm9kZVByb3BlcnR5IiwiX19jb21wb25lbnQiLCJhdHRyTmFtZSIsImVsZW1lbnROYW1lIiwiX19lbGVtZW50IiwiYXR0cmlidXRlTmFtZSIsIkF0dHIiLCJtZXNzYWdlcyIsIm1lc3NhZ2UiLCJfX2V4cHJlc3Npb24iLCJjb3VudGVyIiwiYXR0cmlidXRlVmFsdWUiLCJldmFsQ29tcG9uZW50IiwiY29tIiwiZCIsImV2YWx1YXRlIiwiZXhpc3RpbmdCaW5kaW5ncyIsInBhcmVudEJpbmRpbmdzIiwicGFyc2VWYWx1ZSIsIl9fZ2V0UGFyc2VkRXhwcmVzc2lvbiIsImxpc3QiLCJwYXJzZSIsIl9fY3JlYXRlRXhjZXB0aW9uTWVzc2FnZSIsImhhc2giLCJfX2NyZWF0ZUtleXNIYXNoIiwicGFyZW50c0hhc2giLCJub3RCaW5kaW5nIiwicGFyZW50VmFsdWUiLCJyZWFsQ29tcG9uZW50IiwiX19iaW5kQW5kU2V0UHJvcGVydHkiLCJldmFsdWF0ZWQiLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsImJpbmQiLCJfX2dldEJvdW5kTm9kZSIsIl9fYmluZCIsIl9fc2V0Tm9kZVByb3BlcnR5Iiwid2l0aG91dFBhcmVudHMiLCJsYXN0UHJvcHMiLCJwcm9wc0xlbmd0aCIsImVsRXZhbHVhdGUiLCJlbGVtZW50IiwiX19nZXRCaW5kIiwiX19kYXRhIiwiX19nZXRBbGxCaW5kcyIsIl9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2UiLCJfX2Rpc2FibGVLZXlzIiwiY2hlY2tQcm9wIiwiX19zZXQiLCJfayIsIl9wcm9wIiwiX19lbmFibGVLZXlzIiwidW5iaW5kIiwiX19pc1N5c3RlbUJpbmRpbmdLZXkiLCJfa2V5cyIsIl9fa2V5cyIsIl9pc0RlbGV0ZWQiLCJoYXNLZXkiLCJzaGlmdCIsIl9fZXZhbHVhdGVOZXN0ZWQiLCJfX3VuYmluZCIsImV4ZWMiLCJldmVudCIsIl9fY2hlY2tFdmFsdWF0aW9uIiwiX19ldmFsdWF0ZSIsImlzQm9vbGVhbkF0dHJpYnV0ZSIsImNsZWFyQXR0cmlidXRlIiwiY2FtZWxBdHRyaWJ1dGUiLCJfX2F0dHJpYnV0ZU9uIiwiX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyIiwiX19hdHRyVHJpZ2dlckJ5TmFtZSIsImF0dHJpYnV0ZU9mIiwiZXZlbnROYW1lIiwiX19ldmVudCIsImVtaXR0ZXIiLCJfX2V2YWx1YXRlRXZlbnQiLCJfX2luaXRpYWxpemVkIiwidHJpbSIsImhhc0JpbmRpbmciLCJpc0Jvb2xlYW4iLCJpc0V2ZW50IiwiX19pc0V2ZW50IiwiX19oYXNCaW5kaW5ncyIsIl9faXNCb29sZWFuIiwiX191bmJpbmRCeU5vZGVzIiwiX19pbml0aWFsaXplQXR0cmlidXRlIiwiY2hhbmdlQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlTm9kZSIsIl9fZGVpbml0aWFsaXplTm9kZSIsIlByb3h5Iiwic2V0IiwiYXR0cktleSIsImRlbGV0ZVByb3BlcnR5IiwiX19pc1N5c3RlbUtleSIsImV4Y0FyciIsInJlYWxUYXJnZXQiLCJmb3JQYXJlbnRzIiwiZm9yRGF0YSIsInBvcCIsIl9fYmluZE5vZGUiLCJfX2NoZWNrRGlzYWJsZW1lbnQiLCJDSEVDS19FWElTVEVOQ0UiLCJ0YXJnZXRQYXJlbnRWYWx1ZSIsIl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0Iiwia2V5U3RyaW5nIiwiX19zdG9yZVRyaWdnZXJCeUtleXMiLCJfX2F0dHJUcmlnZ2VyQnlLZXlzIiwidHlwZSIsInByb3h5IiwiX19nZXREaXNhYmxlbWVudFR5cGVTdG9yZSIsIl9fYWxsIiwibGlua3MiLCJfX3N0b3JlVHJpZ2dlckJ5TmFtZSIsImluZm8iLCJkYXRlIiwibm93IiwiY2FsbE9uU3RhcnQiLCJhdHRyc0tleXMiLCJzdGFydEtleXMiLCJvYnNlcnZlIiwiQ0hFQ0tfUFJPWFkiLCJfX2Rpc2FibGVQcm94eVJlZGVmaW5pbmciLCJfX29ic2VydmUiLCJpc29sYXRpb25IYXNoIiwidXBkYXRlZEF0IiwicGFyZW50S2V5c1N0cmluZyIsImtleXNTdHJpbmciLCJjb2xsZWN0IiwiX19oYXNUYWciLCJfX2RlbGV0ZU5vZGVQcm9wZXJ0eSIsIm5vZGVzIiwiX19jbGVhckVtcHR5QmluZGluZ3MiLCJjbGVhciIsIl9fcmVtb3ZlIiwiX19jbGVhclN0b3JlTGlua3MiLCJvblJlbW92ZWQiLCJyZW1vdmVkIiwiX19zcGxpY2VDaGlsZCIsIl9fcmVtb3ZlQ2hpbGRyZW4iLCJmaW5kQWxsIiwibGV2ZWxzIiwibGV2ZWwiLCJyaWdodCIsImxldmVsRWxlbWVudHMiLCJ1bnNoaWZ0IiwiX19zdG9yZUJ5RnVuY3Rpb24iLCJfX3N0b3JlQnlLZXlzIiwiX19hdHRyQnlGdW5jdGlvbiIsIl9fYXR0ckJ5S2V5cyIsIl9fdW5zdG9yZUJ5RnVuY3Rpb24iLCJfX3Vuc3RvcmVCeUtleXMiLCJfX3VuYXR0ckJ5RnVuY3Rpb24iLCJfX3VuYXR0ckJ5S2V5cyIsIl9fZ2V0UGFyZW50IiwiX19nZXRDaGlsZHJlbiIsIl9fZ2V0TmVhciIsImFwcGVuZENoaWxkIiwiX19lbXB0eSIsIl9fZGVzdHJveSIsIlJlcXVlc3QiLCJiYXNlVXJsIiwiZ2V0SGVhZGVycyIsInhociIsImhlYWRlcnMiLCJnZXRBbGxSZXNwb25zZUhlYWRlcnMiLCJsaW5lIiwic3RhdHVzRXJyb3JQYXR0ZXJuIiwicmVqZWN0IiwibWV0aG9kIiwiWE1MSHR0cFJlcXVlc3QiLCJiZWZvcmUiLCJ0cmFuc2Zvcm1CZWZvcmUiLCJvblN0YXJ0IiwianNvbiIsInJlc3BvbnNlVHlwZSIsImZvcm0iLCJjcmVhdGVGb3JtRGF0YSIsInBhcmFtcyIsInBhcmFtc1RvUXVlcnkiLCJjcmVhdGVDYWNoZUhhc2giLCJ1c2VyIiwicGFzc3dvcmQiLCJfY2FjaGUiLCJnZXRDYWNoZSIsImNyZWF0ZWRBdCIsInRyYW5zZm9ybUFmdGVyIiwicmVzdWx0IiwidGltZW91dCIsIndpdGhDcmVkZW50aWFscyIsImhlYWRlcktleXMiLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25Qcm9ncmVzcyIsIm9ucHJvZ3Jlc3MiLCJvbmxvYWQiLCJyZXNwb25zZSIsInJlYWR5U3RhdGUiLCJzdGF0dXNUZXh0IiwicmVzcG9uc2VUZXh0IiwicmVzcG9uc2VYTUwiLCJyZXNwb25zZVVSTCIsImNyZWF0ZUNhY2hlIiwib250aW1lb3V0Iiwib25lcnJvciIsInNlbmQiLCJjaGFyIiwiY2hhckNvZGVBdCIsInNlcCIsImVxIiwia3MiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ2Iiwib3B0IiwicXVlcnkiLCJhbXBzIiwiZXFzIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwibmFtZXNwYWNlIiwiZmQiLCJGb3JtRGF0YSIsImFwcGVuZCIsInRvSVNPU3RyaW5nIiwiYWRkSW5zdGFuY2UiLCJyZW1vdmVJbnN0YW5jZSIsInZhbHVlS2V5IiwiZGVib3VuY2VJbnRlcnZhbCIsImRlYm91bmNlVGltZW91dCIsImNsZWFyVGltZW91dCIsIm9uRGVib3VuY2UiLCJzZXRGb2N1cyIsInNldFZhbHVlIiwic2V0RGVib3VuY2UiLCJpbnRlcnZhbCIsInNldEVsZW1lbnRGb2N1cyIsInNldEVsZW1lbnRCbHVyIiwiZm9jdXMiLCJibHVyIiwiTG9vcCIsIml0ZXJhdG9ycyIsIml0ZXJhdG9yUmVmIiwiaXRlcmF0b3JPdXRlckhUTUwiLCJyZXNldCIsImNyZWF0ZUl0ZXJhdG9yIiwiZHJhdyIsIm1hc2siLCJuZXh0U2libGluZyIsImNvbnRlbnQiLCJmaXJzdENoaWxkIiwiX19pbmRleCIsIl9fa2V5IiwiX192YWx1ZSIsIl9fY29tcGFyaXNvblZhbHVlIiwiaXRlcmF0b3IiLCJjQ29weSIsImNvbXBhcnNpb24iLCJzZXRJbmRleCIsInNldEtleSIsIl9fcHJvbWlzZXMiLCJjcmVhdGVJdGVyYXRvckVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJsb29wIiwiaXRlcmF0ZSIsIm9uT3V0IiwiX19pdGVyYXRvciIsImZvciIsImlzRm9yIiwiY2FuY2VsIiwiX19lbCIsInN0cmljdCIsImVsQ29tcG9uZW50IiwiZm9yY2UiLCJpbkV2YWx1YXRpbmciLCJwcmVwYXJlT3B0aW9ucyIsIl9FdmVudCIsInRyYW5zaXRpb24iLCJzdGF0ZSIsInBhdGgiLCJnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24iLCJfX3RyYW5zaXRpb24iLCJlbXB0eSIsImV4aXN0cyIsImxvYWRlZCIsIlRyYW5zaXRpb24iLCJyb3V0ZXMiLCJzdGF0ZXMiLCJyZWRpcmVjdCIsInJvdXRlIiwiaGFzU3RhdGUiLCJwYXJhbUtleXMiLCJmdWxsUGF0dGVybiIsIl9fcGFyYW1SZWdleCIsImYiLCJxdWVyeUtleXMiLCJ3YXRjaEhhc2giLCJwcmV2Um91dGUiLCJnZXRSb3V0ZSIsInByZXYiLCJoYXNoTW9kZSIsIl9fcmVkaXJlY3RzIiwiX19vcHRpb25zIiwiX19yb3V0ZVNlbGVjdG9yIiwiYWRkIiwicGF0dGVybiIsImRlZmF1bHRPcHRpb25zIiwiYWJzdHJhY3QiLCJzZXRTdGF0ZSIsImdldFN0YXRlIiwicHJlcGFyZVN0YXRlQXJncyIsImNyZWF0ZVN0YXRlVXJsIiwiaGFzaElzTnVsbCIsIm1hbnVhbCIsImJhY2siLCJoaXN0b3J5IiwiZ28iLCJmb3J3YXJkIiwibG9jYXRpb24iLCJyZWxvYWQiLCJwdXNoU3RhdGUiLCJkZWZhdWx0VXJsIiwib2xkUHVzaFN0YXRlIiwiZXJyb3IiLCJfX29uU3RhdGVDaGFuZ2VIYW5kbGVyIiwiaW5pdFN0YXRlIiwicGFyZW50TmFtZSIsInNwbGl0U2xhc2hlcyIsInJlbW92ZVN0YXRlIiwic2V0SGFzaFVybCIsInNldEhpc3RvcnlVcmwiLCJnZXRVcmwiLCJnZXRIYXNoVXJsIiwiZ2V0SGlzdG9yeVVybCIsInBhdGhuYW1lIiwic2VhcmNoIiwiZ2V0VXJsUXVlcnkiLCJnZXRIYXNoVXJsUXVlcnkiLCJnZXRIaXN0b3J5VXJsUXVlcnkiLCJwYXJhbXNGcm9tUXVlcnkiLCJwcmVwYXJlIiwicGFyYW1zVGVtcCIsInByZXBhcmVTdGF0ZVBhcmFtcyIsInF1ZXJ5VGVtcCIsInByZXBhcmVTdGF0ZVF1ZXJ5IiwiaGFzaFRlbXAiLCJwcmVwYXJlU3RhdGVIYXNoIiwiY3JlYXRlU3RhdGVBcmdzIiwiZXhjbHVkZWQiLCJnZXRQYXR0ZXJuQ29udGVudCIsInVybFBhdHRlcm4iLCJyZWdleCIsImlzSW5jbHVkZWQiLCJpc0FjdGl2ZVN0YXRlIiwiaW5jbHVkZXMiLCJpbkFjdGl2ZVN0YXRlIiwiZ2V0QXJyYXlQYXR0ZXJuQ29udGVudCIsImdldFN0YXRlc0J5TGV2ZWwiLCJwcmV2VHJhbnNpdGlvbiIsIm9uRW5kIiwic2V0UGF0aCIsImN1cnJlbnRVcmwiLCJyZWFsVXJsIiwiaXNEaWZmZXJlbnQiLCJpc1JvdXRlQ2hhbmdlZCIsInRpdGxlIiwic2V0VHJhbnNpdGlvbiIsInNhdmVTY3JvbGxQb3NpdGlvbiIsInNjcm9sbFRvIiwiRWxzZUlmIiwiRWxzZSIsImFjdGl2ZSIsInJlY3JlYXRlIiwiaXNDb21waWxlZCIsImRpc3BsYXkiLCJnZXRDb21wdXRlZFN0eWxlIiwic2V0UmVjcmVhdGlvbiIsImNvbXBpbGF0aW9uIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwic2V0QWN0aXZpdHkiLCJzZXRQcm9wZXJ0eSIsIk9wdGlvbiIsIml0ZXJhdG9yVGFnTmFtZSIsImlzTXVsdGlwbGUiLCJnZXRDb250ZW50Iiwic2V0TXVsdGlwbGUiLCJzZXRDb250ZW50IiwiZHJhd1NlbGVjdCIsImNoYW5nZVZhbHVlIiwiZm9ybWF0VmFsdWUiLCJzZWxlY3RlZCIsIm9wdGlvbiIsInNlbGVjdGlvbiIsInJlZGVmaW5lIiwib25DaGFuZ2UiLCJkaXNwYXRjaCIsIkV2ZW50Iiwic2V0U2VsZWN0ZWQiLCJpc0NoZWNrYm94IiwiaXNSYWRpbyIsInNldENoZWNrZWQiLCJjaGVja2VkIiwiY2hhbmdlUmFkaW8iLCJyYWRpbyIsIlJhZGlvQnV0dG9uIiwiaXRlcmFibGUiLCJnZXRSYWRpb1ZhbHVlIiwicHJldlZhbHVlIiwib25SYWRpbyIsInNldE5hbWVzIiwiaXNUcnVlIiwiaXNTZWxlY3RlZCIsInJhbmdlIiwiY3JlYXRlUmFuZ2UiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiY29ubmVjdGlvbiIsInNldENhY2hlIiwiYWJvcnQiLCJvbkxvYWQiLCJvbkVycm9yIiwiT2JqZWN0cyIsImlzVXJsIiwicHJldmVudERlZmF1bHQiLCJvblN0YXRlQ2hhbmdlZCIsInNldFBhcmFtcyIsInNldFF1ZXJ5Iiwic2V0SGFzaCIsInNldE9wdGlvbnMiLCJyZXNldEhyZWYiLCJocmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7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RyxPLEdBQVUsdUM7QUFERTNHLEMsQ0FFWjZWLGlCLEdBQW9CLEk7a0JBRlI3VixDIiwiZmlsZSI6ImFraWxpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgM2FmNzE1Njk3YzM1MmIyMjc2ODgiLCIvKipcbiAqIEphdmFzY3JpcHQgZnJhbWV3b3JrXG4gKlxuICogY29uc3QgQWtpbGkgPSBtYWtlSXRFYXN5KGpzICsgaHRtbCk7XG4gKlxuICogQGF1dGhvciBBbGV4YW5kciBCYWxhc3lhbiA8bXl3ZWJzdHJlZXRAZ21haWwuY29tPlxuICogQGxpbmsgaHR0cDovL2FraWxpanMuY29tXG4gKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgSWYgZnJvbSAnLi9jb21wb25lbnRzL2lmLmpzJztcbmltcG9ydCBGb3IgZnJvbSAnLi9jb21wb25lbnRzL2Zvci5qcyc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vY29tcG9uZW50cy9zZWxlY3QuanMnO1xuaW1wb3J0IElucHV0IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC5qcyc7XG5pbXBvcnQgUmFkaW8gZnJvbSAnLi9jb21wb25lbnRzL3JhZGlvLmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vY29tcG9uZW50cy90ZXh0LmpzJztcbmltcG9ydCBUZXh0YXJlYSBmcm9tICcuL2NvbXBvbmVudHMvdGV4dGFyZWEuanMnO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb21wb25lbnRzL2NvbnRlbnQuanMnO1xuaW1wb3J0IEluY2x1ZGUgZnJvbSAnLi9jb21wb25lbnRzL2luY2x1ZGUuanMnO1xuaW1wb3J0IElmcmFtZSBmcm9tICcuL2NvbXBvbmVudHMvaWZyYW1lLmpzJztcbmltcG9ydCBJbWFnZSBmcm9tICcuL2NvbXBvbmVudHMvaW1hZ2UuanMnO1xuaW1wb3J0IEVtYmVkIGZyb20gJy4vY29tcG9uZW50cy9lbWJlZC5qcyc7XG5pbXBvcnQgQXVkaW8gZnJvbSAnLi9jb21wb25lbnRzL2F1ZGlvLmpzJztcbmltcG9ydCBWaWRlbyBmcm9tICcuL2NvbXBvbmVudHMvdmlkZW8uanMnO1xuaW1wb3J0IFRyYWNrIGZyb20gJy4vY29tcG9uZW50cy90cmFjay5qcyc7XG5pbXBvcnQgU291cmNlIGZyb20gJy4vY29tcG9uZW50cy9zb3VyY2UuanMnO1xuaW1wb3J0IE9iamVjdHMgZnJvbSAnLi9jb21wb25lbnRzL29iamVjdC5qcyc7XG5pbXBvcnQgUm91dGUgZnJvbSAnLi9jb21wb25lbnRzL3JvdXRlLmpzJztcbmltcG9ydCBVcmwgZnJvbSAnLi9jb21wb25lbnRzL3VybC5qcyc7XG5pbXBvcnQgQSBmcm9tICcuL2NvbXBvbmVudHMvYS5qcyc7XG5pbXBvcnQgU2NvcGUgZnJvbSAnLi9zY29wZS5qcyc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlci5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuL3NlcnZpY2VzL3JvdXRlci5qcyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zZXJ2aWNlcy9zdG9yZS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgZ2xvYmFscyBmcm9tICcuL2dsb2JhbHMuanMnO1xuXG4vKipcbiAqIFRoZSBmcmFtZXdvcmsgb2JqZWN0XG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvZ2V0dGluZy1zdGFydGVkfVxuICovXG5jb25zdCBBa2lsaSA9IHt9O1xuXG5Ba2lsaS5fX2RlZmF1bHRzID0gW107XG5cbi8qKlxuICogU2V0IHRoZSBmcmFtZXdvcmsncyBkZWZhdWx0IHZhcmlhYmxlc1xuICovXG5Ba2lsaS5zZXREZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5vcHRpb25zID0ge1xuICAgIGRlYnVnOiB0cnVlXG4gIH07XG4gIFxuICB0aGlzLl9faW5pdCA9IG51bGw7XG4gIHRoaXMuX19jbGVhcmVkID0gZmFsc2U7XG4gIHRoaXMuX19jb21wb25lbnRzID0ge307XG4gIHRoaXMuX19hbGlhc2VzID0ge307XG4gIHRoaXMuX19zY29wZXMgPSB7fTtcbiAgdGhpcy5fX3N0b3JlTGlua3MgPSB7fTtcbiAgdGhpcy5fX3dpbmRvdyA9IHt9O1xuICB0aGlzLl9faXNvbGF0aW9uID0gbnVsbDtcbiAgdGhpcy5fX2V2YWx1YXRpb24gPSBudWxsO1xuICB0aGlzLl9fd3JhcHBpbmcgPSBmYWxzZTtcbiAgdGhpcy5fX29uRXJyb3IgPSAoKSA9PiB0aGlzLnRyaWdnZXJJbml0KGZhbHNlKTtcbiAgXG4gIHRoaXMuaHRtbEJvb2xlYW5BdHRyaWJ1dGVzID0gW1xuICAgICdkaXNhYmxlZCcsICdjb250ZW50ZWRpdGFibGUnLCAnaGlkZGVuJ1xuICBdO1xuXG4gIGZvcihsZXQga2V5IGluIGdsb2JhbHMpIHtcbiAgICBkZWxldGUgZ2xvYmFsc1trZXldO1xuICB9XG5cbiAgZ2xvYmFscy51dGlscyA9IHV0aWxzO1xuXG4gIHRoaXMuY29tcG9uZW50cyA9IHt9O1xuICB0aGlzLnNlcnZpY2VzID0ge307XG5cbiAgdGhpcy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG4gIHRoaXMuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuICB0aGlzLlNjb3BlID0gU2NvcGU7XG4gIHRoaXMudXRpbHMgPSB1dGlscztcbiAgdGhpcy5nbG9iYWxzID0gZ2xvYmFscztcbiAgdGhpcy5jb21wb25lbnRzLkEgPSBBO1xuICB0aGlzLmNvbXBvbmVudHMuQXVkaW8gPSBBdWRpbztcbiAgdGhpcy5jb21wb25lbnRzLkNvbnRlbnQgPSBDb250ZW50O1xuICB0aGlzLmNvbXBvbmVudHMuRm9yID0gRm9yO1xuICB0aGlzLmNvbXBvbmVudHMuRW1iZWQgPSBFbWJlZDtcbiAgdGhpcy5jb21wb25lbnRzLklmID0gSWY7XG4gIHRoaXMuY29tcG9uZW50cy5JbmNsdWRlID0gSW5jbHVkZTtcbiAgdGhpcy5jb21wb25lbnRzLklucHV0ID0gSW5wdXQ7XG4gIHRoaXMuY29tcG9uZW50cy5JZnJhbWUgPSBJZnJhbWU7XG4gIHRoaXMuY29tcG9uZW50cy5JbWFnZSA9IEltYWdlO1xuICB0aGlzLmNvbXBvbmVudHMuT2JqZWN0ID0gT2JqZWN0cztcbiAgdGhpcy5jb21wb25lbnRzLlJhZGlvID0gUmFkaW87XG4gIHRoaXMuY29tcG9uZW50cy5Sb3V0ZSA9IFJvdXRlO1xuICB0aGlzLmNvbXBvbmVudHMuU2VsZWN0ID0gU2VsZWN0O1xuICB0aGlzLmNvbXBvbmVudHMuU291cmNlID0gU291cmNlO1xuICB0aGlzLmNvbXBvbmVudHMuVGV4dCA9IFRleHQ7XG4gIHRoaXMuY29tcG9uZW50cy5UZXh0YXJlYSA9IFRleHRhcmVhO1xuICB0aGlzLmNvbXBvbmVudHMuVHJhY2sgPSBUcmFjaztcbiAgdGhpcy5jb21wb25lbnRzLlVybCA9IFVybDtcbiAgdGhpcy5jb21wb25lbnRzLlZpZGVvID0gVmlkZW87XG4gIHRoaXMuc2VydmljZXMucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIHRoaXMuc2VydmljZXMucm91dGVyID0gcm91dGVyO1xuICB0aGlzLnNlcnZpY2VzLnN0b3JlID0gc3RvcmU7XG5cbiAgdGhpcy5kZWZpbmUoKTtcbiAgdGhpcy5lcnJvckhhbmRsaW5nKCk7XG4gIHRoaXMuaXNvbGF0ZUV2ZW50cygpO1xuICB0aGlzLmlzb2xhdGVBcnJheVByb3RvdHlwZSgpO1xuICB0aGlzLmlzb2xhdGVXaW5kb3dGdW5jdGlvbnMoKTsgXG4gIFxuICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5fX2RlZmF1bHRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHRoaXMuX19kZWZhdWx0c1tpXSgpO1xuICB9XG59XG5cbi8qKlxuICogRGVmaW5lIGFsbCBkZWZhdWx0IGNvbXBvbmVudHNcbiAqL1xuQWtpbGkuZGVmaW5lID0gZnVuY3Rpb24gKCkge1xuICBBLmRlZmluZSgpO1xuICBBdWRpby5kZWZpbmUoKTtcbiAgQ29udGVudC5kZWZpbmUoKTtcbiAgQ29tcG9uZW50LmRlZmluZSgpO1xuICBFbWJlZC5kZWZpbmUoKTtcbiAgRm9yLmRlZmluZSgpO1xuICBJbmNsdWRlLmRlZmluZSgpO1xuICBJZnJhbWUuZGVmaW5lKCk7XG4gIEltYWdlLmRlZmluZSgpO1xuICBJbnB1dC5kZWZpbmUoKTtcbiAgSWYuZGVmaW5lKCk7XG4gIE9iamVjdHMuZGVmaW5lKCk7XG4gIFJhZGlvLmRlZmluZSgpO1xuICBSb3V0ZS5kZWZpbmUoKTtcbiAgU2VsZWN0LmRlZmluZSgpO1xuICBTb3VyY2UuZGVmaW5lKCk7XG4gIFRleHRhcmVhLmRlZmluZSgpO1xuICBUcmFjay5kZWZpbmUoKTtcbiAgVmlkZW8uZGVmaW5lKCk7XG59O1xuXG4vKipcbiAqIFNldCBkZWZhdWx0c1xuICogXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiBcbiAqL1xuQWtpbGkuZGVmYXVsdHMgPSBmdW5jdGlvbiAoZm4pIHsgIFxuICB0aGlzLl9fZGVmYXVsdHMucHVzaChmbik7XG4gIGZuKCk7XG59XG5cbi8qKlxuICogQ2xlYXIgdGhlIGdsb2JhbCBjb250ZXh0XG4gKi9cbkFraWxpLmNsZWFyR2xvYmFscyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYodGhpcy5fX2NsZWFyZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZSkge1xuICAgIEVsZW1lbnQucHJvdG90eXBlW2tleV0gPSB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlW2tleV07XG4gIH1cblxuICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fX3dpbmRvdy5BcnJheS5wcm90b3R5cGUpIHtcbiAgICBBcnJheS5wcm90b3R5cGVba2V5XSA9IHRoaXMuX193aW5kb3cuQXJyYXkucHJvdG90eXBlW2tleV07XG4gIH1cblxuICBmb3IobGV0IGtleSBpbiB0aGlzLm9wdGlvbnMuZ2xvYmFscykge1xuICAgIHRoaXMub3B0aW9ucy5nbG9iYWxzW2tleV0gPSB0aGlzLnVud3JhcCh0aGlzLm9wdGlvbnMuZ2xvYmFsc1trZXldKTtcbiAgfVxuXG4gIHdpbmRvdy5zZXRUaW1lb3V0ID0gdGhpcy5fX3dpbmRvdy5zZXRUaW1lb3V0O1xuICB3aW5kb3cuc2V0SW50ZXJ2YWwgPSB0aGlzLl9fd2luZG93LnNldEludGVydmFsO1xuICB3aW5kb3cuUHJvbWlzZSA9IHRoaXMuX193aW5kb3cuUHJvbWlzZTtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgdGhpcy5fX29uRXJyb3IpO1xuICB0aGlzLl9fY2xlYXJlZCA9IHRydWU7XG59O1xuXG4vKipcbiAqIEpvaW4gYmluZGluZyBrZXlzXG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBiaW5kaW5nIGtleXNcbiAqL1xuQWtpbGkuam9pbkJpbmRpbmdLZXlzID0gZnVuY3Rpb24gKGtleXMpIHtcbiAgcmV0dXJuIGtleXMubWFwKGVsID0+IGVsLnRvU3RyaW5nKCkpLmpvaW4oJy4nKTtcbn07XG5cbi8qKlxuICogQWRkIHNjb3BlIHRvIHRoZSBzY29wZXMgbGlzdFxuICpcbiAqIEBwYXJhbSBzY29wZVxuICovXG5Ba2lsaS5hZGRTY29wZSA9IGZ1bmN0aW9uIChzY29wZSkge1xuICBpZiAodGhpcy5fX3Njb3Blc1tzY29wZS5fX25hbWVdKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBTY29wZSBuYW1lICR7c2NvcGUuX19uYW1lfSBhbHJlYWR5IGV4aXN0c2ApO1xuICB9XG5cbiAgdGhpcy5fX3Njb3Blc1tzY29wZS5fX25hbWVdID0gc2NvcGU7XG59O1xuXG4vKipcbiAqIEdldCBzY29wZSBmcm9tIHRoZSBzY29wZXMgbGlzdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc2NvcGUgbmFtZVxuICogQHJldHVybnMge1Njb3BlfVxuICovXG5Ba2lsaS5nZXRTY29wZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiB0aGlzLl9fc2NvcGVzW25hbWVdO1xufTtcblxuLyoqXG4gKiBEZWxldGUgc2NvcGUgZnJvbSB0aGUgc2NvcGVzIGxpc3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHNjb3BlIG5hbWVcbiAqL1xuQWtpbGkucmVtb3ZlU2NvcGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICB0aGlzLl9fc2NvcGVzW25hbWVdID0gbnVsbDtcbiAgZGVsZXRlIHRoaXMuX19zY29wZXNbbmFtZV07XG59O1xuXG4vKipcbiAqIEdldCBhbGwgZWxlbWVudHMgd2l0aCBhdHRhY2hlZCBBa2lsaSBjb21wb25lbnRzXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtib29sZWFufSBbdHJlZT10cnVlXSAtIHJldHVybiBhcnJheSBvZiB0aGUgcGFyZW50cyBpZiB0cnVlLCBjbG9zZXN0IHBhcmVudCBpZiBmYWxzZVxuICogQHJldHVybnMge0FycmF5fEVsZW1lbnR8bnVsbH1cbiAqL1xuQWtpbGkuZ2V0QWtpbGlQYXJlbnRzID0gZnVuY3Rpb24gKGVsLCB0cmVlID0gdHJ1ZSkge1xuICBsZXQgYXJyID0gW107XG5cbiAgZnVuY3Rpb24gY2hlY2sobm9kZSkge1xuICAgIGlmICghbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5vZGUucGFyZW50Tm9kZS5fX2FraWxpKSB7XG4gICAgICBhcnIucHVzaChub2RlLnBhcmVudE5vZGUpO1xuXG4gICAgICBpZiAoIXRyZWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrKG5vZGUucGFyZW50Tm9kZSk7XG4gIH1cblxuICBjaGVjayhlbCk7XG4gIHJldHVybiB0cmVlPyBhcnI6IGFyclswXTtcbn07XG5cbi8qKlxuICogU2V0IGVsZW1lbnQgaW5uZXIgaHRtbCB3aXRoIGNvbnRlbnQgcmVwbGFjZW1lbnRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcIjxpPkhlbGxvPC9pPjxiPldvcmxkPC9iPlwiXG4gKiBlbC5pbm5lckhUTUwgPSBcIjxiPldvcmxkPC9iPlwiO1xuICogQWtpbGkuc2V0VGVtcGxhdGUoZWwsIFwiPGk+SGVsbG88L2k+JHt0aGlzLl9fY2hpbGRyZW59XCIpO1xuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuQWtpbGkuc2V0VGVtcGxhdGUgPSBmdW5jdGlvbiAoZWwsIHRlbXBsYXRlKSB7XG4gIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZSgvXFwkeygoKD8hXFwkeylcXHMqdGhpc1xcLl9fY29udGVudFxccyopKil9LywgZWwuaW5uZXJIVE1MKTtcbiAgZWwuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG5cbiAgcmV0dXJuIGVsLmlubmVySFRNTDtcbn07XG5cbi8qKlxuICogR2VuZXJhdGUgdW5pcXVlIHNjb3BlIG5hbWVcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5Ba2lsaS5jcmVhdGVTY29wZU5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB1dGlscy5jcmVhdGVSYW5kb21TdHJpbmcoMTYsIChzdHIpID0+IHtcbiAgICByZXR1cm4gISF0aGlzLl9fc2NvcGVzW3N0cl07XG4gIH0pO1xufTtcblxuLyoqXG4gKiBJc29sYXRlIGZ1bmN0aW9uLlxuICogRXZlcnkgc2NvcGUgdmFyaWFibGUgY2hhbmdlIGNhbGxzIGFjY29yZGluZyBub2RlIGV2YWx1YXRpb24uXG4gKiBGb3IgZXhhbXBsZSwgaWYgeW91IGNoYW5nZSBzb21lIHNjb3BlIHZhcmlhYmxlIGluIHRoZSBsb29wIC0gZXZhbHVhdGlvbiB3aWxsIGJlIGNhbGxlZCBvbiB0aGUgZWFjaCBjaGFuZ2UuXG4gKiBJdCBtYXkgYmUgc2xvdyBmb3IgdGhlIGFwcGxpY2F0aW9uLlxuICogWW91IGNhbiBpc29sYXRlIHRoaXMgYWN0aW9uIGFuZCBydW4gYWxsIGV2YWx1YXRpb24gcHJvY2VzcyBhZnRlciBwYXNzZWQgZnVuY3Rpb24gYXQgb25jZS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLmlzb2xhdGUgPSBmdW5jdGlvbiAoZm4pIHsgXG4gIGlmICh0aGlzLl9faXNvbGF0aW9uKSB7XG4gICAgcmV0dXJuIGZuKCk7XG4gIH1cblxuICB0aGlzLl9faXNvbGF0aW9uID0ge307XG4gIGxldCByZXMgPSBmbigpO1xuICBsZXQgcHJvcHMgPSBbXTtcblxuICBmb3IgKGxldCBrIGluIHRoaXMuX19pc29sYXRpb24pIHtcbiAgICBpZiAoIXRoaXMuX19pc29sYXRpb24uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHByb3BzLnB1c2godGhpcy5fX2lzb2xhdGlvbltrXSk7XG4gIH1cblxuICB0aGlzLl9faXNvbGF0aW9uID0gbnVsbDtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHByb3BzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvbnN0IHByb3AgPSBwcm9wc1tpXTtcbiAgICBjb25zdCB2YWwgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhwcm9wLmtleXMsIHByb3AuY29tcG9uZW50Ll9fc2NvcGUpOyAgICBcbiAgICBwcm9wLmNvbXBvbmVudC5fX2lzUmVzb2x2ZWQgJiYgcHJvcC5jb21wb25lbnQuX190cmlnZ2VyU3RvcmVBbmRBdHRyKHByb3Aua2V5cywgdmFsKTtcbiAgICBwcm9wLmNvbXBvbmVudC5fX2V2YWx1YXRlQnlLZXlzKHByb3Aua2V5cywgdmFsLCBwcm9wLmlzRGVsZXRlZCk7XG4gIH1cblxuICBwcm9wcyA9IG51bGw7XG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIFN0b3AgZXZhbHVhdGlvbiBiZWZvcmUgdGhlIGZ1bmN0aW9uIGFuZCBjb250aW51ZSBhZnRlclxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkudW5ldmFsdWF0ZSA9IGZ1bmN0aW9uIChmbikge1xuICBsZXQgZXZhbHVhdGlvbiA9IHRoaXMuX19ldmFsdWF0aW9uO1xuICBsZXQgcmVzO1xuICB0aGlzLl9fZXZhbHVhdGlvbiA9IG51bGw7XG4gIHJlcyA9IGZuKCk7XG4gIHRoaXMuX19ldmFsdWF0aW9uID0gZXZhbHVhdGlvbjtcbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogRXZhbHVhdGUgb25seSByb290IHByb3BlcnRpZXNcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLndyYXBwaW5nID0gZnVuY3Rpb24gKGZuKSB7XG4gIGlmKHRoaXMuX193cmFwcGluZykge1xuICAgIHJldHVybiBmbigpO1xuICB9XG4gIFxuICB0aGlzLl9fd3JhcHBpbmcgPSB0cnVlO1xuICBsZXQgcmVzID0gZm4oKTsgIFxuICB0aGlzLl9fd3JhcHBpbmcgPSBmYWxzZTsgIFxuICByZXR1cm4gcmVzOyAgIFxufVxuXG4vKipcbiAqIFN0b3AgaXNvbGF0aW9uIGJlZm9yZSB0aGUgZnVuY3Rpb24gYW5kIGNvbnRpbnVlIGFmdGVyXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS51bmlzb2xhdGUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgbGV0IGlzb2xhdGlvbiA9IHRoaXMuX19pc29sYXRpb247XG4gIGxldCByZXM7XG4gIHRoaXMuX19pc29sYXRpb24gPSBudWxsO1xuICByZXMgPSBmbigpO1xuICB0aGlzLl9faXNvbGF0aW9uID0gaXNvbGF0aW9uO1xuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBSdW4gdGhlIGZ1bmN0aW9uIG9uIHRoZSBuZXh0IHRpY2tcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbkFraWxpLm5leHRUaWNrID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzKSA9PiBzZXRUaW1lb3V0KCgpID0+IFByb21pc2UucmVzb2x2ZShmbigpKS50aGVuKHJlcykpKTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zPXt9XVxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoZWwsIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgcmVjb21waWxlID0gb3B0aW9ucy5yZWNvbXBpbGU7XG4gIGxldCBjb21wb25lbnQgPSBlbC5fX2FraWxpO1xuXG4gIGlmIChjb21wb25lbnQpIHtcbiAgICBpZiAocmVjb21waWxlKSB7XG4gICAgICBjb21wb25lbnQuX19yZWNvbXBpbGUocmVjb21waWxlID09PSB0cnVlPyB7fTogcmVjb21waWxlKTtcbiAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGlzUm9vdCA9IGVsID09PSB0aGlzLl9fcm9vdDtcbiAgbGV0IGNvbXBvbmVudE5hbWUgPSB1dGlscy50b0Rhc2hDYXNlKGVsLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50JykgfHwgZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgbGV0IF9Db21wb25lbnQgPSB0aGlzLl9fY29tcG9uZW50c1tjb21wb25lbnROYW1lXTtcblxuICBDSEVDS19BTElBU0VTOiBpZiAoIV9Db21wb25lbnQpIHtcbiAgICBsZXQgc2VsZWN0b3JzID0gT2JqZWN0LmtleXModGhpcy5fX2FsaWFzZXMpO1xuXG4gICAgaWYgKCFzZWxlY3RvcnMubGVuZ3RoKSB7XG4gICAgICBicmVhayBDSEVDS19BTElBU0VTO1xuICAgIH1cblxuICAgIGxldCBzZWxlY3RvckFsbCA9IHNlbGVjdG9ycy5qb2luKCcsJyk7XG5cbiAgICBpZiAoIWVsLm1hdGNoZXMoc2VsZWN0b3JBbGwpKSB7XG4gICAgICBicmVhayBDSEVDS19BTElBU0VTO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gc2VsZWN0b3JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHNlbGVjdG9yID0gc2VsZWN0b3JzW2ldO1xuXG4gICAgICBpZiAoZWwubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgX0NvbXBvbmVudCA9IHRoaXMuX19jb21wb25lbnRzW3RoaXMuX19hbGlhc2VzW3NlbGVjdG9yXV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICghX0NvbXBvbmVudCAmJiAhaXNSb290KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFfQ29tcG9uZW50KSB7XG4gICAgX0NvbXBvbmVudCA9IHRoaXMuQ29tcG9uZW50O1xuICB9XG5cbiAgaWYgKF9Db21wb25lbnQubWF0Y2hlcyAmJiAhZWwubWF0Y2hlcyhfQ29tcG9uZW50Lm1hdGNoZXMpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29tcG9uZW50ID0gbmV3IF9Db21wb25lbnQoZWwsIHt9KTsgIFxuICBcbiAgaWYgKGNvbXBvbmVudC5fX2NhbmNlbGxlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKEFraWxpLmdldEFraWxpUGFyZW50cyhlbCkuZmluZChwID0+IHAuX19ha2lsaS5fX3ByZXZlbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29tcG9uZW50Ll9fY3JlYXRlKCk7XG4gIHJldHVybiBjb21wb25lbnQ7XG59O1xuXG4vKipcbiAqIENvbXBpbGUgdGhlIGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5Ba2lsaS5jb21waWxlID0gZnVuY3Rpb24gKHJvb3QsIG9wdGlvbnMgPSB7IHJlY29tcGlsZTogZmFsc2UgfSkgeyAgXG4gIGxldCBlbGVtZW50cyA9IFtdO1xuXG4gIGNvbnN0IG5lc3RlZEluaXRpYWxpemluZyA9IChlbCkgPT4ge1xuICAgIGxldCBjb21wb25lbnQgPSB0aGlzLmluaXRpYWxpemUoZWwsIG9wdGlvbnMpO1xuICAgIGxldCBjaGlsZHJlbiA9IGVsLmNoaWxkcmVuO1xuICAgIGNvbXBvbmVudCAmJiBlbGVtZW50cy5wdXNoKGNvbXBvbmVudCk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBuZXN0ZWRJbml0aWFsaXppbmcoY2hpbGQpO1xuICAgIH1cbiAgfTtcblxuICBuZXN0ZWRJbml0aWFsaXppbmcocm9vdCk7XG4gIGxldCBwID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgY29tcG9uZW50ID0gZWxlbWVudHNbaV07XG4gICAgcC5wdXNoKGNvbXBvbmVudC5fX2NvbXBpbGUoKSk7XG4gIH1cblxuICByZXR1cm4gUHJvbWlzZS5hbGwocCkudGhlbigoKSA9PiB7XG4gICAgbGV0IHIgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSBlbGVtZW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IGNvbXBvbmVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgci5wdXNoKGNvbXBvbmVudC5fX3Jlc29sdmUoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHIpO1xuICB9KTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIGNvbXBvbmVudCBvciBnZXQgaXQgaWYgZm4gaXMgbm90IHBhc3NlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gW2ZuXVxuICovXG5Ba2lsaS5jb21wb25lbnQgPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuICBpZiAoIWZuKSB7XG4gICAgcmV0dXJuIHRoaXMuX19jb21wb25lbnRzW25hbWVdIHx8IG51bGw7XG4gIH1cbiAgXG4gIGlmICh0aGlzLl9fY29tcG9uZW50c1tuYW1lXSAmJiBBa2lsaS5vcHRpb25zLmRlYnVnKSB7ICBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihgQ29tcG9uZW50ICR7bmFtZX0gYWxyZWFkeSB3YXMgYWRkZWRgKTtcbiAgfVxuXG4gIHRoaXMuX19jb21wb25lbnRzW25hbWVdID0gZm47XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgY29tcG9uZW50XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xuQWtpbGkucmVtb3ZlQ29tcG9uZW50ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZGVsZXRlIHRoaXMuX19jb21wb25lbnRzW25hbWVdO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciB0aGUgc2VsZWN0b3IgYWxpYXMgb3IgZ2V0IGl0IGlmIGNvbXBvbmVudCBuYW1lIGlzIG5vdCBwYXNzZWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgLSBET00gc2VsZWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29tcG9uZW50TmFtZV1cbiAqL1xuQWtpbGkuYWxpYXMgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGNvbXBvbmVudE5hbWUgPSAnJykge1xuICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmICghY29tcG9uZW50TmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gJiYgQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKGBBbGlhcyB3aXRoIHNlbGVjdG9yICR7c2VsZWN0b3J9IGFscmVhZHkgd2FzIGFkZGVkYCk7XG4gIH1cblxuICB0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gPSBjb21wb25lbnROYW1lO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIHNlbGVjdG9yIGFsaWFzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gKi9cbkFraWxpLnJlbW92ZUFsaWFzID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gIGRlbGV0ZSB0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl07XG59O1xuXG4vKipcbiAqIElzb2xhdGUgYXJyYXkgcHJvdG90eXBlIGZ1bmN0aW9uc1xuICovXG5Ba2lsaS5pc29sYXRlQXJyYXlQcm90b3R5cGUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX193aW5kb3cuQXJyYXkgPSB7IHByb3RvdHlwZToge30gfTtcblxuICBsZXQga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKEFycmF5LnByb3RvdHlwZSk7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgIGxldCBvbGQgPSBBcnJheS5wcm90b3R5cGVba2V5XTtcblxuICAgIGlmICh0eXBlb2Ygb2xkICE9ICdmdW5jdGlvbicgfHwga2V5ID09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHRoaXMuX193aW5kb3cuQXJyYXkucHJvdG90eXBlW2tleV0gPSBvbGQ7XG5cbiAgICBBcnJheS5wcm90b3R5cGVba2V5XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBBa2lsaS51bmV2YWx1YXRlKCgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLl9faXNQcm94eSkge1xuICAgICAgICAgIHJldHVybiBvbGQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIEFraWxpLmlzb2xhdGUoKCkgPT4gb2xkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxufTtcblxuLyoqXG4gKiBJc29sYXRlIHNvbWUgd2luZG93IGZ1bmN0aW9uc1xuICovXG5Ba2lsaS5pc29sYXRlV2luZG93RnVuY3Rpb25zID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9fd2luZG93LnNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICB0aGlzLl9fd2luZG93LnNldEludGVydmFsID0gc2V0SW50ZXJ2YWw7XG4gIHRoaXMuX193aW5kb3cuUHJvbWlzZSA9IHdpbmRvdy5Qcm9taXNlO1xuICB3aW5kb3cuc2V0VGltZW91dCA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LnNldFRpbWVvdXQsIDApO1xuICB3aW5kb3cuc2V0SW50ZXJ2YWwgPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5zZXRJbnRlcnZhbCwgMCk7XG4gIFxuICBpZighd2luZG93LkFLSUxJX1NTUikge1xuICAgIHdpbmRvdy5Qcm9taXNlLmNvbnN0cnVjdG9yID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuUHJvbWlzZS5jb25zdHJ1Y3Rvcik7XG4gICAgd2luZG93LlByb21pc2UucHJvdG90eXBlLnRoZW4gPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS50aGVuLCBbMCwgJ2xhc3QnXSk7XG4gICAgd2luZG93LlByb21pc2UucHJvdG90eXBlLmNhdGNoID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gpO1xuICB9ICBcbn07XG5cbi8qKlxuICogSXNvbGF0ZSBldmVudCBsaXN0ZW5lcnNcbiAqL1xuQWtpbGkuaXNvbGF0ZUV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50ID0geyBwcm90b3R5cGU6IHt9IH07XG4gIHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IEVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI7XG4gIHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXI7XG4gIHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlID0gRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlO1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBkZWxldGUgdGhpcy5fX2FraWxpTGlzdGVuZXJzO1xuICAgIHJldHVybiBBa2lsaS5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICBFbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKG5hbWUsIGZuKSB7XG4gICAgbGV0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVycykge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzID0ge307XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGlmKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYXJnc1sxXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIEFraWxpLmlzb2xhdGUoKCkgPT4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgICB9O1xuICAgIH0gICAgXG5cbiAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ucHVzaCh7XG4gICAgICBsaW5rOiBmbixcbiAgICAgIGZuOiBhcmdzWzFdXG4gICAgfSk7XG5cbiAgICByZXR1cm4gQWtpbGkuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfTtcblxuICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKG5hbWUsIGZuKSB7XG4gICAgbGV0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVycykge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzID0ge307XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGxpc3RlbmVyID0gdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdW2ldO1xuXG4gICAgICBpZiAobGlzdGVuZXIubGluayA9PT0gZm4pIHtcbiAgICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLnNwbGljZShpLCAxKTtcbiAgICAgICAgYXJnc1sxXSA9IGxpc3RlbmVyLmZuO1xuICAgICAgICBpLS07XG4gICAgICAgIGwtLTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdO1xuICAgIH1cblxuICAgIHJldHVybiBBa2lsaS5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xufTtcblxuLyoqXG4gKiBXcmFwIHRoZSBmdW5jdGlvbiBjYWxsYmFjayB0byBhbiBpc29sYXRlIGNvbnRleHRcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfG51bWJlcltdfHN0cmluZ1tdfSBbcG9zPVwibGFzdFwiXVxuICogQHJldHVybnMge2Z1bmN0aW9ufVxuICovXG5Ba2lsaS5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbiA9IGZ1bmN0aW9uIChmbiwgcG9zID0gJ2xhc3QnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgIUFycmF5LmlzQXJyYXkocG9zKSAmJiAocG9zID0gW3Bvc10pO1xuICAgIFxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBwb3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbnVtID0gcG9zW2ldO1xuICAgICAgbGV0IGluZGV4ID0gbnVtO1xuICAgICAgbGV0IGNhbGxiYWNrID0gYXJnc1tudW1dO1xuXG4gICAgICBpZihudW0gPT0gJ2xhc3QnKSB7XG4gICAgICAgIGluZGV4ID0gYXJncy5sZW5ndGggLSAxO1xuICAgICAgICBjYWxsYmFjayA9IGFyZ3NbaW5kZXhdO1xuICAgICAgfVxuXG4gICAgICBpZih0eXBlb2YgY2FsbGJhY2sgIT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYoIWNhbGxiYWNrLl9faXNvbGF0ZWQpIHtcbiAgICAgICAgYXJnc1tpbmRleF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIEFraWxpLmlzb2xhdGUoKCkgPT4gY2FsbGJhY2suYXBwbHkoY2FsbGJhY2ssIGFyZ3VtZW50cykpO1xuICAgICAgICB9O1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhcmdzW2luZGV4XSwgJ19faXNvbGF0ZWQnLCB7XG4gICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgdmFsdWU6IGNhbGxiYWNrXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfTtcbn07XG5cbi8qKlxuICogV3JhcCBvYmplY3RzL2NsYXNzZXMgdG8gaXNvbGF0ZSBhbmQgdW5ldmFsdWF0ZSBkYXRhXG4gKlxuICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IG9ialxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSBcbiAqL1xuQWtpbGkud3JhcCA9IGZ1bmN0aW9uIChvYmosIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgY3VycmVudCA9IG9iajtcblxuICBpZih0eXBlb2Ygb2JqID09ICdmdW5jdGlvbicpIHtcbiAgICBvYmogPSB0aGlzLndyYXBGdW5jdGlvbihvYmosIG9wdGlvbnMpO1xuXG4gICAgaWYob2JqID09PSBjdXJyZW50KSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgfVxuICBlbHNlIGlmKCFvYmogfHwgdHlwZW9mIG9iaiAhPSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgbGV0IGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopO1xuXG4gIGZvcihsZXQgayA9IDAsIGMgPSBrZXlzLmxlbmd0aDsgayA8IGM7IGsrKykge1xuICAgIGxldCBrZXkgPSBrZXlzW2tdO1xuICAgIGxldCBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSk7XG5cbiAgICBpZighZGVzY3JpcHRvci5jb25maWd1cmFibGUgfHwgIWRlc2NyaXB0b3Iud3JpdGFibGUpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmKG9wdGlvbnMucmV2ZXJzZSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7Li4uZGVzY3JpcHRvciwgdmFsdWU6IG9ialtrZXldLl9fYWtpbGkgfHwgb2JqW2tleV0gfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7Li4uZGVzY3JpcHRvciwgdmFsdWU6IHRoaXMud3JhcChvYmpba2V5XSwgb3B0aW9ucykgfSk7XG4gIH0gXG4gIFxuICByZXR1cm4gb2JqO1xufTtcblxuLyoqXG4gKiBVbndyYXAgb2JqZWN0cy9jbGFzc2VzXG4gKlxuICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IG9ialxuICovXG5Ba2lsaS51bndyYXAgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0aGlzLndyYXAob2JqLCB7IHJldmVyc2U6IHRydWUgfSk7XG59XG5cbi8qKlxuICogSXNvbGF0ZSBhIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqL1xuQWtpbGkud3JhcEZ1bmN0aW9uID0gZnVuY3Rpb24gKGZuLCBvcHRpb25zID0ge30pIHtcbiAgaWYgKGZuLl9fYWtpbGkpIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICBjb25zdCBha2lsaVdyYXBwZWRGdW5jdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZihvcHRpb25zLnRhZyAmJiBBa2lsaS5fX2V2YWx1YXRpb24pIHtcbiAgICAgIEFraWxpLl9fZXZhbHVhdGlvbi5jb21wb25lbnQuX19hZGRUYWcob3B0aW9ucy50YWcsIEFraWxpLl9fZXZhbHVhdGlvbi5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gQWtpbGkud3JhcHBpbmcoKCkgPT4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH07XG5cbiAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhmbik7XG4gIGFraWxpV3JhcHBlZEZ1bmN0aW9uLnByb3RvdHlwZSA9IGZuLnByb3RvdHlwZTtcblxuICBmb3IobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICBha2lsaVdyYXBwZWRGdW5jdGlvbltrZXldID0gZm5ba2V5XTtcbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShha2lsaVdyYXBwZWRGdW5jdGlvbiwgJ19fYWtpbGknLCB7XG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgdmFsdWU6IGZuXG4gIH0pO1xuXG4gIHJldHVybiBha2lsaVdyYXBwZWRGdW5jdGlvbjtcbn07XG5cbi8qKlxuICogRXZhbHVhdGUgdGhlIHRhZ3Mgbm9kZSBleHByZXNzaW9uc1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gdGFnc1xuICovXG5Ba2lsaS5ldmFsdWF0ZVRhZyA9IGZ1bmN0aW9uICh0YWdzKSB7XG4gIGlmKCF0aGlzLnJvb3QpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIGlmKCFBcnJheS5pc0FycmF5KHRhZ3MpKSB7XG4gICAgdGFncyA9IFt0YWdzXTtcbiAgfVxuXG4gIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5yb290LmNoaWxkcmVuKCk7XG4gIFxuICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICBjb25zdCBjaGlsZFRhZ3MgPSBjaGlsZC5fX3RhZ3M7ICAgIFxuXG4gICAgZm9yKGxldCBqID0gMCwgcyA9IHRhZ3MubGVuZ3RoOyBqIDwgczsgaisrKSB7XG4gICAgICBjb25zdCB0YWcgPSB0YWdzW2pdO1xuICAgICAgXG4gICAgICBpZighY2hpbGRUYWdzW3RhZ10pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gIFxuICAgICAgZm9yKGxldCBrID0gMCwgYyA9IGNoaWxkVGFnc1t0YWddLmxlbmd0aDsgayA8IGM7IGsrKykge1xuICAgICAgICBjb25zdCBvYmogPSBjaGlsZFRhZ3NbdGFnXVtrXTtcbiAgICAgICAgY2hpbGQuX19ldmFsdWF0ZU5vZGUob2JqLm5vZGUsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gIFxufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgdGFnc1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gdGFnc1xuICovXG5Ba2lsaS5yZW1vdmVUYWcgPSBmdW5jdGlvbiAodGFncykge1xuICBpZighdGhpcy5yb290KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICBpZighQXJyYXkuaXNBcnJheSh0YWdzKSkge1xuICAgIHRhZ3MgPSBbdGFnc107XG4gIH1cblxuICBjb25zdCBjaGlsZHJlbiA9IHRoaXMucm9vdC5jaGlsZHJlbigpO1xuICBcbiAgZm9yKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baV07IFxuXG4gICAgZm9yKGxldCBqID0gMCwgcyA9IHRhZ3MubGVuZ3RoOyBqIDwgczsgaisrKSB7XG4gICAgICBjaGlsZC5fX3JlbW92ZVRhZyh0YWdzW2pdKTtcbiAgICB9XG4gIH0gIFxufVxuXG4vKipcbiAqIEVycm9yIGhhbmRsaW5nXG4gKi9cbkFraWxpLmVycm9ySGFuZGxpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIHRoaXMuX19vbkVycm9yKTtcbn07XG5cbi8qKlxuICogVHJpZ2dlciBhbiBpbml0aWFsaXphdGlvbiBzdGF0dXNcbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHN0YXR1c1xuICovXG5Ba2lsaS50cmlnZ2VySW5pdCA9IGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgQWtpbGkuX19pbml0ID0gc3RhdHVzO1xuICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2FraWxpLWluaXQnLCB7IGRldGFpbDogc3RhdHVzIH0pKTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgYXBwbGljYXRpb25cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IFtyb290XVxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbkFraWxpLmluaXQgPSBmdW5jdGlvbiAocm9vdCkge1xuICByb290ID0gcm9vdCB8fCBkb2N1bWVudC5ib2R5O1xuXG4gIGlmKCEocm9vdCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBSb290IGVsZW1lbnQgbXVzdCBiZSBhbiBodG1sIGVsZW1lbnRgKTtcbiAgfVxuXG4gIGlmKHJvb3QgPT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgXCJodG1sXCIgY2FuJ3QgYmUgdGhlIHJvb3QgZWxlbWVudGApO1xuICB9XG5cbiAgdGhpcy5fX3Jvb3QgPSByb290O1xuICBcbiAgaWYod2luZG93LkFLSUxJX1NFUlZFUikgeyAgICBcbiAgICBBa2lsaS5pbml0U2VydmVyU2lkZUh0bWwod2luZG93LkFLSUxJX1NFUlZFUi5odG1sKTtcbiAgICBBa2lsaS5pbml0U2VydmVyU2lkZVJlcXVlc3RDYWNoZSh3aW5kb3cuQUtJTElfU0VSVkVSLnJlcXVlc3RDYWNoZSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgd2luZG93LkFLSUxJX0NMSUVOVCA9IHtcbiAgICAgIGh0bWw6IHRoaXMucHJlcGFyZVNlcnZlclNpZGVIdG1sKCkgICAgICBcbiAgICB9XG4gIH1cblxuICBmb3IobGV0IGtleSBpbiB0aGlzLm9wdGlvbnMuZ2xvYmFscykge1xuICAgIHRoaXMub3B0aW9ucy5nbG9iYWxzW2tleV0gPSB0aGlzLndyYXAodGhpcy5vcHRpb25zLmdsb2JhbHNba2V5XSwgeyB0YWc6IGBnbG9iYWxzLiR7a2V5fWAgfSk7XG4gIH1cbiAgXG4gIHJldHVybiB0aGlzLmNvbXBpbGUodGhpcy5fX3Jvb3QpLnRoZW4oKCkgPT4ge1xuICAgIGlmIChyb3V0ZXIuX19pbml0KSB7XG4gICAgICByZXR1cm4gcm91dGVyLmNoYW5nZVN0YXRlKCk7XG4gICAgfVxuICB9KS50aGVuKCgpID0+IHsgICAgXG4gICAgd2luZG93LkFLSUxJX0NMSUVOVCAmJiAod2luZG93LkFLSUxJX0NMSUVOVC5yZXF1ZXN0Q2FjaGUgPSB0aGlzLnByZXBhcmVTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlKCkpO1xuICAgIHRoaXMudHJpZ2dlckluaXQodHJ1ZSk7XG4gIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICB0aGlzLnRyaWdnZXJJbml0KGZhbHNlKTtcbiAgICB0aHJvdyBlcnI7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHNlcnZlci1zaWRlIHJlbmRlcmluZyBodG1sXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBodG1sXG4gKi9cbkFraWxpLmluaXRTZXJ2ZXJTaWRlSHRtbCA9IGZ1bmN0aW9uIChodG1sKSB7XG4gIGZvciAobGV0IGkgPSB0aGlzLl9fcm9vdC5hdHRyaWJ1dGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICB0aGlzLl9fcm9vdC5yZW1vdmVBdHRyaWJ1dGUodGhpcy5fX3Jvb3QuYXR0cmlidXRlc1tpXS5uYW1lKTtcbiAgfVxuXG4gIGxldCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gIGxldCBkb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGh0bWwsIFwidGV4dC9odG1sXCIpO1xuICBsZXQgZWwgPSBkb2MucXVlcnlTZWxlY3Rvcih0aGlzLl9fcm9vdCA9PT0gZG9jdW1lbnQuYm9keT8gJ2JvZHknOiAnYm9keSA+IConKTsgICAgXG4gIHRoaXMuX19yb290LmlubmVySFRNTCA9IGVsLmlubmVySFRNTDtcblxuICBmb3IgKGxldCBpID0gZWwuYXR0cmlidXRlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGxldCBhdHRyID0gZWwuYXR0cmlidXRlc1tpXTtcbiAgICB0aGlzLl9fcm9vdC5zZXRBdHRyaWJ1dGUoYXR0ci5uYW1lLCBhdHRyLnZhbHVlKTtcbiAgfSAgXG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgcmVxdWVzdCBjYWNoZVxuICogXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKi9cbkFraWxpLmluaXRTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlID0gZnVuY3Rpb24gKG9iaikge1xuICBjb25zdCBpbml0ID0gKGluc3RhbmNlLCBvYmopID0+IHtcbiAgICBmb3IobGV0IGtleSBpbiBvYmopIHtcbiAgICAgIGluc3RhbmNlLl9fY2FjaGVba2V5XSA9IG9ialtrZXldO1xuICAgIH1cbiAgfVxuICBcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xuICAgIGxldCBpbnN0YW5jZSA9IGtleSA9PT0gJ19fbWFpbic/IHJlcXVlc3Q6IHJlcXVlc3QuX19pbnN0YW5jZXNba2V5XTtcbiAgICBpbml0KGluc3RhbmNlLCBvYmpba2V5XSk7XG4gIH1cbn1cblxuLyoqXG4gKiBQcmVwYXJlIHNlcnZlci1zaWRlIHJlbmRlcmluZyBodG1sXG4gKi9cbkFraWxpLnByZXBhcmVTZXJ2ZXJTaWRlSHRtbCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX19yb290Lm91dGVySFRNTDtcbn1cblxuLyoqXG4gKiBQcmVwYXJlIHNlcnZlci1zaWRlIHJlbmRlcmluZyByZXF1ZXN0IGNhY2hlXG4gKi9cbkFraWxpLnByZXBhcmVTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlID0gZnVuY3Rpb24gKCkge1xuICBsZXQgY2FjaGUgPSB7IF9fbWFpbjogcmVxdWVzdC5fX2NhY2hlIH07XG5cbiAgZm9yKGxldCBrZXkgaW4gcmVxdWVzdC5fX2luc3RhbmNlcykge1xuICAgIGNhY2hlW2tleV0gPSByZXF1ZXN0Ll9faW5zdGFuY2VzW2tleV0uX19jYWNoZTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuLyoqXG4gKiBEZWluaXRpYWxpemUgdGhlIGFwcGxpY2F0aW9uXG4gKi9cbkFraWxpLmRlaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jbGVhckdsb2JhbHMoKTtcbiAgcm91dGVyLmRlaW5pdCgpO1xuICByZXF1ZXN0LmRlaW5pdCgpO1xuICBsZXQgc3RvcmVLZXlzID0gT2JqZWN0LmtleXMoc3RvcmUuX190YXJnZXQpO1xuICBcbiAgZm9yKGxldCBpID0gMCwgbCA9IHN0b3JlS2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBkZWxldGUgc3RvcmUuX190YXJnZXRbc3RvcmVLZXlzW2ldXTtcbiAgfVxuXG4gIHRoaXMuc2V0RGVmYXVsdHMoKTtcbn07XG5cbndpbmRvdy5Ba2lsaSA9IEFraWxpO1xuZXhwb3J0IGRlZmF1bHQgQWtpbGk7XG5Ba2lsaS5zZXREZWZhdWx0cygpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ha2lsaS5qcyIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyLmpzJ1xuXG4vKipcbiAqIEFuIG9iamVjdCB3aXRoIGEgbG90IG9mIHVzZWZ1bCBmdW5jdGlvbnNcbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy91dGlsc31cbiAqL1xuY29uc3QgdXRpbHMgPSB7fTtcblxuLyoqXG4gKiBDcmVhdGUgY2xhc3MgYXR0cmlidXRlIGZyb20gYW4gb2JqZWN0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJyZWQgYWN0aXZlXCJcbiAqIHV0aWxzLmNsYXNzKHtyZWQ6IHRydWUsIGFjdGl2ZTogdHJ1ZSwgZ3JlZW46IGZhbHNlfSk7XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuY2xhc3MgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgbGV0IGNsYXNzZXMgPSBbXTtcbiAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgayA9IGtleXNbaV07XG4gICAgbGV0IHZhbCA9IG9ialtrXTtcbiAgICB2YWwgJiYgY2xhc3Nlcy5wdXNoKGspO1xuICB9XG5cbiAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgc3R5bGUgYXR0cmlidXRlIGZyb20gYW4gb2JqZWN0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJjb2xvcjpyZWQ7d2lkdGg6MTBweFwiXG4gKiB1dGlscy5zdHlsZSh7Y29sb3I6IFwicmVkXCIsIGJhY2tncm91bmQ6IGZhbHNlLCB3aWR0aDogXCIxMHB4XCJ9KTtcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5zdHlsZSA9IGZ1bmN0aW9uKG9iaikge1xuICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGxldCBzdHlsZXMgPSBbXTtcbiAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgayA9IGtleXNbaV07XG4gICAgbGV0IHZhbCA9IG9ialtrXTtcbiAgICB2YWwgJiYgc3R5bGVzLnB1c2goYCR7dGhpcy50b0Rhc2hDYXNlKGspfToke3ZhbH1gKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZXMuam9pbignOycpO1xufTtcblxuLyoqXG4gKiBFeHRlbmRlZCBzcGxpdCBvZiB0aGUgc3RyaW5nXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFtcIkhlbGxvXCIsIFwiV29ybGRcIl1cbiAqIHV0aWxzLnNwbGl0KFwiSGVsbG8gV29ybGRcIiwgXCIgXCIpO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbJ3ggPSA1JywgJyB5ID0gXCIxOzI7M1wiJ11cbiAqIHV0aWxzLnNwbGl0KCd4ID0gNTsgeSA9IFwiMTsyOzNcIicsIFwiO1wiLCBbJ1wiJ10pO1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ3xSZWdFeHB9IHN0ciBcbiAqIEBwYXJhbSB7c3RyaW5nfSBbZGVsXVxuICogQHBhcmFtIHtzdHJpbmdbXX0gW2V4Y2x1ZGVdIFxuICovXG51dGlscy5zcGxpdCA9IGZ1bmN0aW9uKHN0ciwgZGVsID0gJycsIGV4Y2x1ZGUgPSBbXSkge1xuXHRjb25zdCBleHBzID0gW107ICAgICBcbiAgbGV0IGxhc3QgPSAnJztcblxuICBpZighZGVsKSB7XG4gICAgcmV0dXJuIHN0ci5zcGxpdCgnJyk7XG4gIH1cbiAgZWxzZSBpZihkZWwgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICByZXR1cm4gc3RyLnNwbGl0KGRlbCk7XG4gIH1cbiAgZWxzZSBpZihzdHIuaW5kZXhPZihkZWwpID09IC0xKSB7XG4gICAgbGFzdCA9IHN0cjtcbiAgfVxuICBlbHNlIHtcbiAgICBjb25zdCBhcnIgPSBzdHIuc3BsaXQoJycpO1xuICAgIGxldCBvcGVuID0gJyc7IFxuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCB2YWwgPSBhcnJbaV07XG4gICAgICBsZXQgaW5kZXggPSBleGNsdWRlLmluZGV4T2YodmFsKTsgICAgICBcblxuICAgICAgaWYoaW5kZXggPiAtMSAmJiAoIW9wZW4gfHwgb3BlbiA9PSB2YWwpKSB7XG4gICAgICAgICFvcGVuPyBvcGVuID0gZXhjbHVkZVtpbmRleF06IG9wZW4gPSAnJztcbiAgICAgIH1cblxuICAgICAgaWYodmFsID09IGRlbCAmJiAhb3Blbikge1xuICAgICAgICBleHBzLnB1c2gobGFzdCk7XG4gICAgICAgIGxhc3QgPSAnJztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGxhc3QgKz0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGxhc3QgJiYgZXhwcy5wdXNoKGxhc3QpO1xuICByZXR1cm4gZXhwcztcbn1cblxuLyoqXG4gKiBGaWx0ZXIgYW4gYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMSwgMTFdXG4gKiB1dGlscy5maWx0ZXIoWzEsIDIsIDMsIDExXSwgJzEnKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDF9LCB7eDogMTF9XVxuICogdXRpbHMuZmlsdGVyKFt7eDogMX0sIHt4OiAyfSwge3g6IDN9LCB7eDogMTF9XSwgJzEnLCAneCcpO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDF9LCB7eDogMTF9XVxuICogdXRpbHMuZmlsdGVyKFt7eDogMX0sIHt4OiAyfSwge3g6IDN9LCB7eDogMTF9XSwgJzEnLCBbJ3gnXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMX0sIHt4OiAxMX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxfSwge3g6IDJ9LCB7eDogM30sIHt4OiAxMX1dLCAnMScsIFtbJ3gnXV0pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IHt5OiAxfX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiB7eTogMX19LCB7eDoge3k6IDJ9fV0sICcxJywgW1sneCcsICd5J11dKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OjEsIHk6IDJ9LCB7eDogMiwgeToxfV0gXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxLCB5OiAyfSwge3g6IDMsIHk6IDN9LCB7eDogMiwgeTogMX1dLCAnMScsIFsneCcsICd5J10pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6MSwgeTogMn0sIHt4OiAyLCB5OjF9XVxuICogdXRpbHMuZmlsdGVyKFt7eDogMSwgeTogMn0sIHt4OiAzLCB5OiAzfSwge3g6IDIsIHk6IDF9XSwgJzEnLCBbWyd4J10sIFsneSddXSk7XG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0ge3N0cmluZ3xSZWdFeHB8ZnVuY3Rpb259IGhhbmRsZXIgLSB0eXBlIG9mIGZpbHRlcmluZ1xuICogQHBhcmFtIHtzdHJpbmdbXXxzdHJpbmd9IFtrZXlzXSAtIGZpbHRlciBpbiB0aGUga2V5cyBpZiBhcnJheSBlbGVtZW50cyBhcmUgb2JqZWN0XG4gKiBAcmV0dXJucyB7QXJyYXl9IC0gcmV0dXJucyBvdGhlciBhcnJheVxuICovXG51dGlscy5maWx0ZXIgPSBmdW5jdGlvbiAoYXJyLCBoYW5kbGVyLCBrZXlzID0gbnVsbCkge1xuICBsZXQgcmVzID0gW107XG5cbiAgaWYgKGtleXMgJiYgIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICBrZXlzID0gW2tleXNdO1xuICB9XG5cbiAgaWYodHlwZW9mIGhhbmRsZXIgIT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHN0ciA9IGhhbmRsZXI/IChoYW5kbGVyICsgJycpLnRvTG93ZXJDYXNlKCk6ICcnO1xuICAgIGhhbmRsZXIgPSB2YWwgPT4gKHZhbD8gKHZhbCArICcnKS50b0xvd2VyQ2FzZSgpOiAnJykubWF0Y2goc3RyKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBpdGVtID0gYXJyW2ldO1xuICAgIGxldCBmaWx0ZXJlZCA9IGZhbHNlO1xuXG4gICAgaWYoIWtleXMgJiYgaGFuZGxlcihpdGVtKSkge1xuICAgICAgZmlsdGVyZWQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmKGtleXMpIHtcbiAgICAgIGZvcihsZXQgayA9IDAsIGMgPSBrZXlzLmxlbmd0aDsgayA8IGM7IGsrKykge1xuICAgICAgICBsZXQga2V5ID0ga2V5c1trXTtcbiAgICAgICAga2V5ID0gQXJyYXkuaXNBcnJheShrZXkpPyBrZXk6IFtrZXldO1xuICAgICAgICBsZXQgdmFsID0ga2V5PyB0aGlzLmdldFByb3BlcnR5QnlLZXlzKGtleSwgaXRlbSk6IGl0ZW07XG4gICAgXG4gICAgICAgIGlmIChoYW5kbGVyKHZhbCkpIHtcbiAgICAgICAgICBmaWx0ZXJlZCA9IHRydWU7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmaWx0ZXJlZCAmJiByZXMucHVzaChpdGVtKTsgICBcbiAgfVxuXG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIE9yZGVyIGFuIGFycmF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWzEsIDIsIDNdXG4gKiB1dGlscy5zb3J0KFszLCAyLCAxXSwgdHJ1ZSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWzMsIDIsIDFdXG4gKiB1dGlscy5zb3J0KFsxLCAyLCAzXSwgZmFsc2UpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XVxuICogdXRpbHMuc29ydChbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV0sIFtbJ3gnXV0sIFt0cnVlXSk7XG4gKiB1dGlscy5zb3J0KFt7eDogM30sIHt4OiAyfSwge3g6IDF9XSwgWyd4J10sIHRydWUpO1xuICogdXRpbHMuc29ydChbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV0sICd4Jyk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dXG4gKiB1dGlscy5zb3J0KFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XSwgW1sneCddXSwgW2ZhbHNlXSk7XG4gKiB1dGlscy5zb3J0KFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XSwgWyd4J10sIGZhbHNlKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dLCAneCcsIGZhbHNlKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDEsIHk6IDN9LCB7eDogMiwgeTogMX0sIHt4OjIsIHk6IDJ9XVxuICogdXRpbHMuc29ydChbe3g6IDIsIHk6IDJ9LCB7eDogMiwgeTogMX0sIHt4OiAyLCB5OiAzfV0sIFtbJ3gnXSwgWyd5J11dLCBbdHJ1ZSwgdHJ1ZV0pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IHt5OiAxfX0sIHt4OiB7eTogMn19XVxuICogdXRpbHMuc29ydChbe3g6IHt5OiAyfX0sIHt4OiB7eTogMX19XSwgW1sneCcsICd5J11dLCBbdHJ1ZV0pO1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICogQHBhcmFtIHtib29sZWFufEFycmF5W118c3RyaW5nW118c3RyaW5nfSBba2V5c11cbiAqIEBwYXJhbSB7Ym9vbGVhbnxib29sZWFuW119IFtvcmRlcl0gLSByZXZlcnNlIG9yIG5vdFxuICogQHJldHVybnMge0FycmF5fVxuICovXG51dGlscy5zb3J0ID0gZnVuY3Rpb24oYXJyLCBrZXlzID0gdHJ1ZSwgb3JkZXIgPSBbXSkge1xuICBhcnIgPSBhcnIuc2xpY2UoKTtcblxuICBpZiAoa2V5cyA9PT0gdHJ1ZSkge1xuICAgIGtleXMgPSBbXTtcbiAgICBvcmRlciA9IFt0cnVlXTtcbiAgfVxuICBlbHNlIGlmIChrZXlzID09PSBmYWxzZSkge1xuICAgIGtleXMgPSBbXTtcbiAgICBvcmRlciA9IFtmYWxzZV07XG4gIH1cblxuICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICBrZXlzID0gW2tleXNdO1xuICB9XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KG9yZGVyKSkge1xuICAgIG9yZGVyID0gW29yZGVyXTtcbiAgfVxuXG4gIGxldCBsID0ga2V5cy5sZW5ndGg7XG5cbiAgYXJyLnNvcnQoKGEsIGIpID0+IHtcbiAgICBsZXQgaSA9IDA7XG5cbiAgICBjb25zdCBjaGVjayA9IChhLCBiLCByZXZlcnNlID0gZmFsc2UpID0+IHtcbiAgICAgIGlmIChhIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBhID0gYS5nZXRUaW1lKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChiIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBiID0gYi5nZXRUaW1lKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhID4gYikge1xuICAgICAgICByZXR1cm4gcmV2ZXJzZT8gLTE6IDE7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChhIDwgYikge1xuICAgICAgICByZXR1cm4gcmV2ZXJzZT8gMTogLTE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAwO1xuICAgIH07XG5cbiAgICBjb25zdCBuZXh0ID0gKCkgPT4ge1xuICAgICAgaWYgKGkgPj0gbCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cblxuICAgICAgbGV0IGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShrZXkpKSB7XG4gICAgICAgIGtleSA9IFtrZXldO1xuICAgICAgfVxuXG4gICAgICBsZXQgYVYgPSB0aGlzLmdldFByb3BlcnR5QnlLZXlzKGtleSwgYSk7XG4gICAgICBsZXQgYlYgPSB0aGlzLmdldFByb3BlcnR5QnlLZXlzKGtleSwgYik7XG4gICAgICBsZXQgcmVzID0gY2hlY2soYVYsIGJWLCBvcmRlcltpXSA9PT0gZmFsc2UpO1xuXG4gICAgICBpZiAocmVzICE9PSAwKSB7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9XG5cbiAgICAgIGkrKztcbiAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgfTtcblxuICAgIGlmICghbCkge1xuICAgICAgcmV0dXJuIGNoZWNrKGEsIGIsIG9yZGVyW2ldID09PSBmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8qKlxuICogUmV0dXJuIG5ldyBvYmplY3Qgd2l0aCB0aGUgc3BlY2lmaWVkIGtleXNcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMge3g6IDEsIHo6IDF9XG4gKiB1dGlscy5pbmNsdWRlS2V5cyh7eDogMSwgeTogMSwgejogMX0sIFsneCcsICd6J10pO1xuICogXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKi9cbnV0aWxzLmluY2x1ZGVLZXlzID0gZnVuY3Rpb24ob2JqLCBrZXlzKSB7XG4gIGxldCBuZXdPYmogPSB7fTtcbiAgbGV0IG9iaktleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBvYmpLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrZXkgPSBvYmpLZXlzW2ldO1xuXG4gICAgaWYoa2V5cy5pbmRleE9mKGtleSkgIT0gLTEpIHtcbiAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxuLyoqXG4gKiBSZXR1cm4gbmV3IG9iamVjdCB3aXRob3V0IHRoZSBzcGVjaWZpZWQga2V5c1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB7eDogMSwgejogMX1cbiAqIHV0aWxzLmluY2x1ZGVLZXlzKHt4OiAxLCB5OiAxLCB6OiAxfSwgWyd5J10pO1xuICogXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKi9cbnV0aWxzLmV4Y2x1ZGVLZXlzID0gZnVuY3Rpb24ob2JqLCBrZXlzKSB7XG4gIGxldCBuZXdPYmogPSB7fTtcbiAgbGV0IG9iaktleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBvYmpLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrZXkgPSBvYmpLZXlzW2ldO1xuXG4gICAgaWYoa2V5cy5pbmRleE9mKGtleSkgPT0gLTEpIHtcbiAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxuLyoqXG4gKiBDaGVjayB0aGUgdmFsdWUgaXMgY29tcG9uZW50IHNjb3BlIHByb3h5IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaXNTY29wZVByb3h5ID0gZnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiAhISh2YWwgJiYgdHlwZW9mIHZhbCA9PSAnb2JqZWN0JyAmJiB2YWwuX19pc1Byb3h5KTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIHZhbHVlIGlzIHBsYWluIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaXNQbGFpbk9iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuICByZXR1cm4gISEob2JqICYmIHR5cGVvZiBvYmogPT0gJ29iamVjdCcgJiYgKG9iai5jb25zdHJ1Y3RvciA9PSBPYmplY3QgfHwgb2JqLmNvbnN0cnVjdG9yID09IEFycmF5KSk7XG59O1xuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9uc10gXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuY29weSA9IGZ1bmN0aW9uKHZhbHVlLCBvcHRpb25zID0ge30pIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCAhdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBvcHRpb25zID0geyBuZXN0ZWQ6IHRydWUsIGVudW1lcmFibGU6IHRydWUsIC4uLm9wdGlvbnMgfTtcblxuICBjb25zdCBuZXh0ID0gKG9iaikgPT4ge1xuICAgIG9iaiA9IHRoaXMuaXNTY29wZVByb3h5KG9iaik/IG9iai5fX3RhcmdldDogb2JqO1xuICAgIGxldCBrZXlzID0gIW9wdGlvbnMuZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKTogT2JqZWN0LmtleXMob2JqKTtcbiAgICBsZXQgbmV3T2JqID0gQXJyYXkuaXNBcnJheShvYmopPyBbXToge307XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgICBsZXQgdmFsID0gb2JqW2tleV07XG4gICAgICB2YWwgPSB2YWwgJiYgdHlwZW9mIHZhbCA9PSAnb2JqZWN0JyAmJiBvcHRpb25zLm5lc3RlZD8gbmV4dCh2YWwpOiB2YWw7ICAgICAgXG4gICAgICBcbiAgICAgIGlmKCFvYmoucHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIHtcbiAgICAgICAgICAuLi5PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSxcbiAgICAgICAgICB2YWx1ZTogdmFsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBuZXdPYmpba2V5XSA9IHZhbDsgIFxuICAgIH1cblxuICAgIHJldHVybiBuZXdPYmo7XG4gIH1cblxuICByZXR1cm4gbmV4dCh2YWx1ZSk7XG59O1xuXG4vKipcbiAqIENoYW5nZSB0aGUgdmFsdWUgdG8gYXR0cmlidXRlIGFwcHJvcHJpYXRlIGZvcm1hdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5tYWtlQXR0cmlidXRlVmFsdWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IGZhbHNlIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBFdmVudEVtaXR0ZXIpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgRXZlbnRdJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiAnW29iamVjdCBGdW5jdGlvbl0nO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlICsgJyc7XG59O1xuXG4vKipcbiAqIENvbXBhcmUgdHdvIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7Kn0gYVxuICogQHBhcmFtIHsqfSBiXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuY29tcGFyZSA9IGZ1bmN0aW9uIChhLCBiLCBvcHRpb25zID0ge30pIHtcbiAgaWYgKChhIGluc3RhbmNlb2YgRGF0ZSkgJiYgKGIgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgIHJldHVybiBhLmdldFRpbWUoKSA9PT0gYi5nZXRUaW1lKCk7XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIGEgPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgYiA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGEudG9TdHJpbmcoKSA9PT0gYi50b1N0cmluZygpO1xuICB9XG4gIGVsc2UgaWYgKHR5cGVvZiBhID09ICdvYmplY3QnICYmIHR5cGVvZiBiID09ICdvYmplY3QnKSB7XG4gICAgaWYgKGEgPT09IG51bGwgfHwgYiA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGEgPT09IGI7XG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgLi4ub3B0aW9ucyB9O1xuXG4gICAgY29uc3QgY2xlYXJVbmRlZmluZWQgPSAodmFsKSA9PiB7XG4gICAgICBsZXQgb2JqID0gQXJyYXkuaXNBcnJheSh2YWwpPyBbXToge307XG4gICAgICBsZXQga2V5cyA9ICFvcHRpb25zLmVudW1lcmFibGU/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKCk6IE9iamVjdC5rZXlzKHZhbCk7XG5cbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgdmFsW2tleV0gIT09IHVuZGVmaW5lZCAmJiAob2JqW2tleV0gPSB2YWxba2V5XSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBpZihvcHRpb25zLmlnbm9yZVVuZGVmaW5lZCkge1xuICAgICAgYSA9IGNsZWFyVW5kZWZpbmVkKGEpO1xuICAgICAgYiA9IGNsZWFyVW5kZWZpbmVkKGIpO1xuICAgIH1cblxuICAgIGxldCBhS2V5cyA9ICFvcHRpb25zLmVudW1lcmFibGU/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKCk6IE9iamVjdC5rZXlzKGEpO1xuICAgIGxldCBiS2V5cyA9ICFvcHRpb25zLmVudW1lcmFibGU/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKCk6IE9iamVjdC5rZXlzKGIpO1xuICAgIFxuICAgIGlmIChhS2V5cy5sZW5ndGggIT0gYktleXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgYSA9IHRoaXMuaXNTY29wZVByb3h5KGEpPyBhLl9fdGFyZ2V0OiBhO1xuICAgIGIgPSB0aGlzLmlzU2NvcGVQcm94eShiKT8gYi5fX3RhcmdldDogYjtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBhS2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBrZXkgPSBhS2V5c1tpXTtcblxuICAgICAgaWYgKCF0aGlzLmNvbXBhcmUoYVtrZXldLCBiW2tleV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBhID09PSBiO1xufTtcblxuLyoqXG4gKiBDb21wYXJlIHRoZSBjdXJyZW50IHZhbHVlIHdpdGggdGhlIHByZXZpb3VzXG4gKlxuICogQHBhcmFtIHsqfSBjdXJyZW50IC0gdGhlIGN1cnJlbnQgdmFsdWVcbiAqIEBwYXJhbSB7Kn0gcHJldmlvdXMgLSB0aGUgcHJldmlvdXMgdmFsdWVcbiAqIEBwYXJhbSB7Kn0gcHJldmlvdXNDb3B5IC0gdGhlIHByZXZpb3VzIHZhbHVlIGNvcHlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSA9IGZ1bmN0aW9uKGN1cnJlbnQsIHByZXZpb3VzLCBwcmV2aW91c0NvcHksIG9wdGlvbnMpIHtcbiAgaWYgKGN1cnJlbnQgIT09IHByZXZpb3VzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuY29tcGFyZShjdXJyZW50LCBwcmV2aW91c0NvcHksIG9wdGlvbnMpO1xufTtcblxuLyoqXG4gKiBFbmNvZGUgaHRtbCBlbnRpdGllc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwieW91ICZhbXAgbWVcIlxuICogdXRpbHMuZW5jb2RlSHRtbEVudGl0aWVzKCd5b3UgJiBtZScpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBodG1sXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5lbmNvZGVIdG1sRW50aXRpZXMgPSBmdW5jdGlvbihodG1sKSB7XG4gIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB2YWx1ZTtcbiAgZWwudGV4dENvbnRlbnQgPSBodG1sO1xuICB2YWx1ZSA9IGVsLmlubmVySFRNTDtcbiAgZWwucmVtb3ZlKCk7XG4gIGVsID0gbnVsbDtcbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuLyoqXG4gKiBEZWNvZGUgaHRtbCBlbnRpdGllc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwieW91ICYgbWVcIlxuICogdXRpbHMuZGVjb2RlSHRtbEVudGl0aWVzKCd5b3UgJmFtcCBtZScpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBodG1sXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5kZWNvZGVIdG1sRW50aXRpZXMgPSBmdW5jdGlvbihodG1sKSB7XG4gIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgbGV0IHZhbHVlO1xuICBlbC5pbm5lckhUTUwgPSBodG1sO1xuICB2YWx1ZSA9IGVsLnZhbHVlO1xuICBlbC5yZW1vdmUoKTtcbiAgZWwgPSBudWxsO1xuICByZXR1cm4gdmFsdWU7XG59O1xuXG4vKipcbiAqIENoYW5nZSBzdHJpbmcgZnJvbSBkYXNoIHRvIGNhbWVsIGNhc2UgZm9ybWF0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMudG9DYW1lbENhc2UgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXFcrKC4pL2csIChtLCBjKSA9PiBjLnRvVXBwZXJDYXNlKCkpO1xufTtcblxuLyoqXG4gKiBDYXBpdGFsaXplIHRoZSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5jYXBpdGFsaXplID0gZnVuY3Rpb24oc3RyKSB7XG4gIHJldHVybiBzdHJbMF0udG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHN0cmluZyBmcm9tIGNhbWVsIHRvIGRhc2ggY2FzZSBmb3JtYXRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy50b0Rhc2hDYXNlID0gZnVuY3Rpb24oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCAobSwgYykgPT4gYC0ke2MudG9Mb3dlckNhc2UoKX1gKTtcbn07XG5cbi8qKlxuICogR2V0IG5lc3RlZCBvYmplY3QgcHJvcGVydHkgYnkgYXJyYXkga2V5c1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIDVcbiAqIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuZ2V0UHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QpIHtcbiAgbGV0IGN1cnJlbnQ7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKChvLCBrKSA9PiB7XG4gICAgaSsrO1xuXG4gICAgaWYgKHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gbztcbiAgICB9XG5cbiAgICBpZiAob1trXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgKGkgPT0gbGVuZ3RoKSAmJiAoY3VycmVudCA9IG9ba10pO1xuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiBjdXJyZW50O1xufTtcblxuLyoqXG4gKiBDaGVjayBuZXN0ZWQgb2JqZWN0cyB0cmVlIGhhcyBwcm9wZXJ0eSBvciBub3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB0cnVlXG4gKiB1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0KSB7XG4gIGxldCBoYXMgPSBmYWxzZTtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoKG8sIGspID0+IHtcbiAgICBpKys7XG5cbiAgICBpZiAodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiAhIW87XG4gICAgfVxuXG4gICAgaWYgKCFvLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgKGkgPT0gbGVuZ3RoKSAmJiAoaGFzID0gby5oYXNPd25Qcm9wZXJ0eShrKSk7XG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIGhhcztcbn07XG5cbi8qKlxuICogU2V0IG5lc3RlZCBvYmplY3RzIHRyZWUgcHJvcGVydHlcbiAqIFJldHVybnMgY2hhbmdlZCBwcm9wZXJ0eSBvYmplY3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB7eTogNn1cbiAqIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19LCAobGFzdCwgdmFsKSA9PiBsYXN0PyA2OiAodmFsIHx8IHt9KSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCwgZm4pIHtcbiAgbGV0IGN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKChvLCBrKSA9PiB7XG4gICAgaSsrO1xuXG4gICAgaWYgKHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFvLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICBvW2tdID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIG9ba10gPSBmbihpID09IGxlbmd0aCwgb1trXSk7XG4gICAgY3VycmVudCA9IG87XG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIGN1cnJlbnQ7XG59O1xuXG4vKipcbiAqXG4gKiBEZWxldGUgcHJvcGVydHkgZnJvbSBuZXN0ZWQgb2JqZWN0cyB0cmVlXG4gKiBSZXR1cm5zIGRlbGV0ZWQgcHJvcGVydHkgdmFsdWVcbiAqIFlvdSBjYW4gY2FuY2VsIGRlbGV0aW5nIGlmIHdpbGwgcmV0dXJuIGZhbHNlIGluIHRoZSBjYWxsYmFjayBmdW5jdGlvblxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIDVcbiAqIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19KTtcbiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyA1XG4gKiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSwgdmFsID0+IHZhbCAhPSA1KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbZm5dXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QsIGZuKSB7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IHZhbHVlO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoKG8sIGspID0+IHtcbiAgICBpKys7XG5cbiAgICBpZiAodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBpZiAoaSA9PSBsZW5ndGgpIHtcbiAgICAgIHZhbHVlID0gb1trXTtcbiAgICAgICghZm4gfHwgZm4odmFsdWUpKSAmJiAoZGVsZXRlIG9ba10pO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgdGFyZ2V0IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cblxudXRpbHMuZ2V0RW51bWVyYWJsZVByb3BlcnR5VGFyZ2V0ID0gZnVuY3Rpb24odGFyZ2V0LCBrZXkpIHtcbiAgY29uc3QgY2hlY2sgPSAob2JqKSA9PiB7XG4gICAgaWYgKG9iai5wcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGxldCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuXG4gICAgaWYgKCFwcm90bykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoZWNrKHByb3RvKTtcbiAgfTtcblxuICByZXR1cm4gY2hlY2sodGFyZ2V0KTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBvd24gcHJvcGVydHkgdGFyZ2V0IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnV0aWxzLmdldE93blByb3BlcnR5VGFyZ2V0ID0gZnVuY3Rpb24odGFyZ2V0LCBrZXkpIHtcbiAgY29uc3QgY2hlY2sgPSAob2JqKSA9PiB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGxldCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuXG4gICAgaWYgKCFwcm90bykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoZWNrKHByb3RvKTtcbiAgfTtcblxuICByZXR1cm4gY2hlY2sodGFyZ2V0KTtcbn07XG5cbi8qKlxuICogR2VuZXJhdGUgcmFuZG9tIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuY3JlYXRlUmFuZG9tU3RyaW5nID0gZnVuY3Rpb24obGVuZ3RoID0gMTYsIGZuID0gbnVsbCkge1xuICBsZXQgc3RyID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIGxlbmd0aCArIDIpO1xuICBsZXQgdmFsID0gJyc7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBzdHIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjY2KSB7XG4gICAgICB2YWwgKz0gc3RyW2ldLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFsICs9IHN0cltpXTtcbiAgICB9XG4gIH1cblxuICBpZiAoZm4gJiYgZm4odmFsKSkge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZVJhbmRvbVN0cmluZyhsZW5ndGgsIGZuKTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1dGlscztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IGZvciBlbGVtZW50cyB3aGljaCBoYXZlIGFzeW5jIGF0dHJpYnV0ZSBjb250ZW50LlxyXG4gKiBcclxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxyXG4gKiBcclxuICogQHRhZyB1cmxcclxuICogQGF0dHIge3N0cmluZ30gW3VybF1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVybCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIG1hdGNoZXMgPSAnW3VybF0nO1xyXG5cclxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XHJcbiAgICBzdXBlciguLi5hcmdzKTtcclxuICAgIHRoaXMudXJsQXR0cmlidXRlID0gJ3NyYyc7XHJcbiAgfVxyXG5cclxuICBjb21waWxlZCgpIHtcclxuICAgIHRoaXMuYXR0cigndXJsJywgdGhpcy5zZXRVcmwpO1xyXG4gIH1cclxuXHJcbiAgc2V0VXJsKHVybCkge1xyXG4gICAgdGhpcy5hdHRyc1t0aGlzLnVybEF0dHJpYnV0ZV0gPSB1cmw7XHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdXJsLmpzIiwiaW1wb3J0IEFraWxpIGZyb20gJy4vYWtpbGkuanMnO1xuaW1wb3J0IFNjb3BlIGZyb20gJy4vc2NvcGUuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9zZXJ2aWNlcy9yZXF1ZXN0LmpzJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3NlcnZpY2VzL3N0b3JlLmpzJztcbmltcG9ydCBnbG9iYWxzIGZyb20gJy4vZ2xvYmFscy5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5cbmV4cG9ydCBjb25zdCBldmFsdWF0aW9uUmVnZXggPSAvXFwkeygoKD8hXFwkeykuKSopfS87XG5leHBvcnQgY29uc3QgZXZhbHVhdGlvblJlZ2V4R2xvYmFsID0gbmV3IFJlZ0V4cChldmFsdWF0aW9uUmVnZXguc291cmNlLCBcImdcIik7XG5leHBvcnQgY29uc3Qgc3lzdGVtQXR0cmlidXRlcyA9IFsnY29tcG9uZW50JywgJ3Njb3BlJ107XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmcm9tIHdoaWNoIGFsbCBjb21wb25lbnRzIGFyZSBpbmhlcml0ZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gW107XG4gIHN0YXRpYyBldmVudHMgPSBbXTtcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gZmFsc2U7XG4gIHN0YXRpYyBzYXZlQXR0cmlidXRlUHJveHlJbiA9IGZhbHNlO1xuICBzdGF0aWMgc2F2ZUF0dHJpYnV0ZVByb3h5T3V0ID0gZmFsc2U7XG4gIHN0YXRpYyB0cmFuc3BhcmVudCA9IGZhbHNlO1xuICBzdGF0aWMgdGVtcGxhdGUgPSAnJztcbiAgc3RhdGljIHRlbXBsYXRlVXJsID0gJyc7XG4gIHN0YXRpYyBzY29wZSA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRvIGRlZmluZSB0aGUgY29tcG9uZW50XG4gICAqL1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnY29tcG9uZW50JywgQ29tcG9uZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSB0aGUgZXhwcmVzc2lvblxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwcmVzc2lvblxuICAgKiBAcGFyYW0ge29iamVjdH0gW3ZhcnNdXG4gICAqL1xuICBzdGF0aWMgcGFyc2UoY29udGV4dCwgZXhwcmVzc2lvbiwgdmFyaWFibGVzID0ge30pIHtcbiAgICB2YXJpYWJsZXMgPSB7IC4uLmdsb2JhbHMsIC4uLnZhcmlhYmxlc307XG4gICAgY29uc3Qga2V5cyA9IFtdO1xuICAgIGNvbnN0IHZhcnMgPSBbXTtcbiAgICBjb25zdCBleHBzID0gdXRpbHMuc3BsaXQoZXhwcmVzc2lvbiwgJzsnLCBbJ1wiJywgXCInXCIsICdgJ10pOyAgXG4gICAgZXhwc1tleHBzLmxlbmd0aCAtIDFdID0gYHJldHVybiAke2V4cHNbZXhwcy5sZW5ndGggLSAxXX1gO1xuXG4gICAgZm9yIChsZXQga2V5IGluIHZhcmlhYmxlcykge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICB2YXJzLnB1c2godmFyaWFibGVzW2tleV0pO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKC4uLmtleXMsIGAke2V4cHMuam9pbignOyAnKX1gKS5hcHBseShjb250ZXh0LCB2YXJzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKiBcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbCBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtzY29wZV0gXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbCwgc2NvcGUgPSB7fSkge1xuICAgIGlmICghKGVsIGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IG11c3QgcGFzcyBhbiBodG1sIGVsZW1lbnQgdG8gdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvcmApO1xuICAgIH1cblxuICAgIHRoaXMuX19pc01vdW50ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9faXNDb21waWxlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19pc1Jlc29sdmVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19wcmV2ZW50ID0gZmFsc2U7XG4gICAgdGhpcy5fX2JpbmRpbmdzID0ge307XG4gICAgdGhpcy5fX3RhZ3MgPSB7fTtcbiAgICB0aGlzLl9fZXZhbHVhdGluZ0V2ZW50ID0gbnVsbDtcbiAgICB0aGlzLl9fcmVjb21waWxpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0gbnVsbDtcbiAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0ge307XG4gICAgdGhpcy5fX2Rpc2FibGVTdG9yZUtleXMgPSB7fTtcbiAgICB0aGlzLl9fZGlzYWJsZUF0dHJLZXlzID0ge307XG4gICAgdGhpcy5fX2NoaWxkcmVuID0gW107XG4gICAgdGhpcy5fX3BhcmVudCA9IG51bGw7XG4gICAgdGhpcy5fX3BhcmVudHMgPSBbXTtcbiAgICB0aGlzLl9fYXR0cnMgPSB7fTtcbiAgICB0aGlzLl9fYXR0ckxpbmtzID0ge307XG4gICAgdGhpcy5fX3N0b3JlTGlua3MgPSB7fTtcbiAgICB0aGlzLl9fYXR0cmlidXRlT2YgPSBudWxsO1xuICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50ID0gdGhpcztcbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgdGhpcy5lbCA9IGVsO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBjb21waWxhdGlvbiBvcHRpb25zIFxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZUNvbXBpbGF0aW9uT3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4geyBcbiAgICAgIGNoZWNrQ2hhbmdlczogZmFsc2UsIFxuICAgICAgc2V0RXZlbnRzOiB0cnVlLFxuICAgICAgc2V0UGFyZW50czogdHJ1ZSxcbiAgICAgIHNldEJvb2xlYW5BdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgZGVmaW5lQXR0cmlidXRlczogdHJ1ZSxcbiAgICAgIC4uLm9wdGlvbnMgXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgcmVjb21waWxhdGlvbiBvcHRpb25zIFxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZVJlY29tcGlsYXRpb25PcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB7IFxuICAgICAgLi4udGhpcy5fX2NyZWF0ZUNvbXBpbGF0aW9uT3B0aW9ucygpLFxuICAgICAgc2V0RXZlbnRzOiBmYWxzZSxcbiAgICAgIHNldFBhcmVudHM6IGZhbHNlLFxuICAgICAgc2V0Qm9vbGVhbkF0dHJpYnV0ZXM6IGZhbHNlLFxuICAgICAgZGVmaW5lQXR0cmlidXRlczogZmFsc2UsXG4gICAgICAuLi5vcHRpb25zIFxuICAgIH07XG4gIH1cbiBcbiAgLyoqXG4gICAqIENhbGxlZCBvbiB0aGUgcmVjb21waWxhdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlY29tcGlsZShvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLl9faXNNb3VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX3JlY29tcGlsaW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5fX2Rpc2FibGVQcm94eSA9IHt9O1xuICAgIHRoaXMuX19jb21waWxpbmcgPSB0aGlzLl9fY3JlYXRlUmVjb21waWxhdGlvbk9wdGlvbnMob3B0aW9ucyk7ICAgIFxuICAgIHRoaXMuX19jb21waWxpbmcuc2V0RXZlbnRzICYmIHRoaXMuX19zZXRFdmVudHMoKTtcbiAgICB0aGlzLl9fY29tcGlsaW5nLnNldFBhcmVudHMgJiYgdGhpcy5fX3NldFBhcmVudHMoKTtcbiAgICB0aGlzLl9fY29tcGlsaW5nLnNldEJvb2xlYW5BdHRyaWJ1dGVzICYmIHRoaXMuX19zZXRCb29sZWFuQXR0cmlidXRlcygpO1xuICAgIHRoaXMuX19jb21waWxpbmcuZGVmaW5lQXR0cmlidXRlcyAmJiB0aGlzLl9fZGVmaW5lQXR0cmlidXRlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiB0aGUgY3JlYXRpb25cbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGUoKSB7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IHRoaXMuX19jcmVhdGVDb21waWxhdGlvbk9wdGlvbnMoKTsgICBcbiAgICB0aGlzLl9faW5pdGlhbGl6ZSgpO1xuICAgIHRoaXMuX19zZXRFdmVudHMoKTtcbiAgICB0aGlzLl9fc2V0UGFyZW50cygpO1xuICAgIHRoaXMuX19zZXRCb29sZWFuQXR0cmlidXRlcygpO1xuICAgIHRoaXMuX19kZWZpbmVBdHRyaWJ1dGVzKCk7XG4gICAgQWtpbGkuaXNvbGF0ZSgoKSA9PiB0aGlzLmNyZWF0ZWQodGhpcy5hdHRycykpOyAgICAgICBcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gdGhlIGNvbXBpbGF0aW9uXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBfX2NvbXBpbGUoKSB7XG4gICAgbGV0IGNvbnRyb2wgPSB0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMgfHwgIXRoaXMuX19ldmFsdWF0ZVBhcmVudDtcbiAgICBsZXQgcCA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIHRoaXMuX19hdHRyaWJ1dGVPZiA9IGNvbnRyb2w/IHRoaXM6IHRoaXMuX19ldmFsdWF0ZVBhcmVudC5fX2FraWxpO1xuXG4gICAgaWYgKCF0aGlzLl9fcmVjb21waWxpbmcgfHwgdGhpcy5fX2NvbXBpbGluZy5uZXdQYXJlbnQgfHwgdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzKSB7XG4gICAgICB0aGlzLl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKHRoaXMuZWwsIHRoaXMuX19hdHRyaWJ1dGVPZik7XG4gICAgfVxuXG4gICAgY29uc3QgaW50ZXJwb2xhdGUgPSAoY2hpbGRyZW4sIHBhcmVudCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlID09IDMgJiYgdGhpcy5fX2luaXRpYWxpemVOb2RlKGNoaWxkLCBwYXJlbnQpKSB7XG4gICAgICAgICAgdGhpcy5fX2V2YWx1YXRlTm9kZShjaGlsZCwgdGhpcy5fX2NvbXBpbGluZz8gdGhpcy5fX2NvbXBpbGluZy5jaGVja0NoYW5nZXM6IGZhbHNlKTsgICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaGlsZC5ub2RlVHlwZSA9PSAxICYmICFjaGlsZC5fX2FraWxpKSB7XG4gICAgICAgICAgdGhpcy5fX2ludGVycG9sYXRlQXR0cmlidXRlcyhjaGlsZCk7XG4gICAgICAgICAgaW50ZXJwb2xhdGUoY2hpbGQuY2hpbGROb2RlcywgY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGludGVycG9sYXRlKHRoaXMuZWwuY2hpbGROb2RlcywgdGhpcy5lbCk7XG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IHRydWU7XG4gICAgbGV0IHJlcztcblxuICAgIGlmICghdGhpcy5fX3JlY29tcGlsaW5nKSB7XG4gICAgICByZXMgPSBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgdGhpcy5hdHRycy5vbkNvbXBpbGVkICYmIHRoaXMuYXR0cnMub25Db21waWxlZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGlsZWQoKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkge1xuICAgICAgICBwID0gcmVxdWVzdC5nZXQodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCwgeyBjYWNoZTogdGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZUNhY2hlIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5fX2NvbnRlbnQ7XG4gICAgICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgcmVzLmRhdGEpO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9fY29udGVudDsgICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJlcyA9IEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uUmVjb21waWxlZCAmJiB0aGlzLmF0dHJzLm9uUmVjb21waWxlZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgICAgdGhpcy5yZWNvbXBpbGVkKCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5fX3JlY29tcGlsaW5nID0gZmFsc2U7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IG51bGw7XG5cbiAgICByZXR1cm4gcC50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuX19pc0NvbXBpbGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZSB0aGUgY29tcG9uZW50XG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBfX3Jlc29sdmUoKSB7XG4gICAgaWYgKHRoaXMuX19pc1Jlc29sdmVkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuYXR0cnMub25SZXNvbHZlZCAmJiB0aGlzLmF0dHJzLm9uUmVzb2x2ZWQudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKEFraWxpLmlzb2xhdGUoKCkgPT4gdGhpcy5yZXNvbHZlZCgpKSkudGhlbihyZXMgPT4ge1xuICAgICAgdGhpcy5fX2lzUmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJ0IG9mIHRoZSB7QHNlZSBDb21wb25lbnQjX19jb21waWxlfSBtZXRob2RcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbml0aWFsaXplKCkgeyAgICBcbiAgICBsZXQgcGFyZW50ID0gQWtpbGkuZ2V0QWtpbGlQYXJlbnRzKHRoaXMuZWwsIGZhbHNlKTsgICAgIFxuICAgIGxldCBTY29wZSA9IHRoaXMuY29uc3RydWN0b3Iuc2NvcGUgfHwgQWtpbGkuU2NvcGU7XG4gICAgbGV0IHNjb3BlO1xuICAgIGxldCBpc1Jvb3QgPSBBa2lsaS5fX3Jvb3QgPT09IHRoaXMuZWw7XG4gICAgdGhpcy5lbC5fX2FraWxpID0gdGhpcztcblxuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIHNjb3BlID0gbmV3IFNjb3BlKHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdzY29wZScpIHx8IEFraWxpLmNyZWF0ZVNjb3BlTmFtZSgpLCB0aGlzLmVsLCB0aGlzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzY29wZSA9IG5ldyBTY29wZShpc1Jvb3Q/ICdyb290JzogQWtpbGkuY3JlYXRlU2NvcGVOYW1lKCksIHRoaXMuZWwsIHRoaXMpO1xuICAgICAgaXNSb290ICYmIChBa2lsaS5yb290ID0gdGhpcyk7XG4gICAgfVxuXG4gICAgbGV0IF9fc2NvcGUgPSBzY29wZTtcbiAgICBsZXQgX3Njb3BlID0gT2JqZWN0LmFzc2lnbihzY29wZSwgdGhpcy5zY29wZSk7XG4gICAgbGV0IGNvbnRyb2xBdHRyaWJ1dGVzID0gdGhpcy5jb25zdHJ1Y3Rvci5jb250cm9sQXR0cmlidXRlcztcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5jb25zdHJ1Y3Rvci5ldmVudHM7XG5cbiAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZSkge1xuICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgdGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGVVcmwpIHtcbiAgICAgIHRoaXMuX19jb250ZW50ID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIH1cblxuICAgIHRoaXMuX19zY29wZSA9IF9fc2NvcGU7XG4gICAgdGhpcy5fX2V2ZW50cyA9IGV2ZW50cztcbiAgICB0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMgPSBjb250cm9sQXR0cmlidXRlcztcbiAgICB0aGlzLl9fc2F2ZUF0dHJpYnV0ZVByb3h5SW4gPSB0aGlzLmNvbnN0cnVjdG9yLnNhdmVBdHRyaWJ1dGVQcm94eUluO1xuICAgIHRoaXMuX19zYXZlQXR0cmlidXRlUHJveHlPdXQgPSB0aGlzLmNvbnN0cnVjdG9yLnNhdmVBdHRyaWJ1dGVQcm94eU91dDtcblxuICAgIEFraWxpLmFkZFNjb3BlKHNjb3BlKTtcbiAgICB0aGlzLnNjb3BlID0gdGhpcy5fX25lc3RlZE9ic2VydmUoX3Njb3BlLCBbXSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGJvb2xlYW4gYXR0cmlidXRlc1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldEJvb2xlYW5BdHRyaWJ1dGVzKCkge1xuICAgIHRoaXMuYm9vbGVhbkF0dHJpYnV0ZXMgPSBbXS5jb25jYXQoQWtpbGkuaHRtbEJvb2xlYW5BdHRyaWJ1dGVzLCB0aGlzLmNvbnN0cnVjdG9yLmJvb2xlYW5BdHRyaWJ1dGVzKTtcblxuICAgIGNvbnN0IHNldEF0dHIgPSAoZWwpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBhdHRycyA9IGVsLmF0dHJpYnV0ZXMsIGwgPSBhdHRycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IG5vZGUgPSBhdHRyc1tpXTtcblxuICAgICAgICBpZiAodGhpcy5ib29sZWFuQXR0cmlidXRlcy5pbmRleE9mKG5vZGUubm9kZU5hbWUpICE9IC0xKSB7XG4gICAgICAgICAgaWYgKGVsLmhhc0F0dHJpYnV0ZShgYm9vbGVhbi0ke25vZGUubm9kZU5hbWV9YCkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShgYm9vbGVhbi0ke25vZGUubm9kZU5hbWV9YCwgZWwuZ2V0QXR0cmlidXRlKG5vZGUubm9kZU5hbWUpIHx8IG5vZGUubm9kZU5hbWUpO1xuICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShub2RlLm5vZGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGVsLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBlbC5jaGlsZHJlbltpXTtcblxuICAgICAgICBpZiAoIWNoaWxkLl9fYWtpbGkpIHtcbiAgICAgICAgICBzZXRBdHRyKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBzZXRBdHRyKHRoaXMuZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBldmVudHNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXRFdmVudHMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLl9fZXZlbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGV2ID0gdGhpcy5fX2V2ZW50c1tpXTtcbiAgICAgICEvXm9uLS9pLnRlc3QoZXYpICYmIChldiA9ICdvbi0nICsgZXYpO1xuXG4gICAgICBpZiAoIXRoaXMuZWwuaGFzQXR0cmlidXRlKGV2KSkge1xuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZShldiwgJycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgY29tcG9uZW50IHBhcmVudHNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXRQYXJlbnRzKCkge1xuICAgIGxldCBwYXJlbnRzID0gQWtpbGkuZ2V0QWtpbGlQYXJlbnRzKHRoaXMuZWwpO1xuXG4gICAgaWYgKCFwYXJlbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBuZXdQYXJlbnQgPSB0aGlzLl9fcGFyZW50ICE9PSBwYXJlbnRzWzBdO1xuICAgIGxldCBldmFsdWF0ZVBhcmVudCA9IG51bGw7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHBhcmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcGFyZW50ID0gcGFyZW50c1tpXTtcblxuICAgICAgaWYgKCFwYXJlbnQuX19ha2lsaS5jb25zdHJ1Y3Rvci50cmFuc3BhcmVudCkge1xuICAgICAgICBldmFsdWF0ZVBhcmVudCA9IHBhcmVudDtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9fY29tcGlsaW5nLm5ld1BhcmVudCA9IG5ld1BhcmVudDtcbiAgICBuZXdQYXJlbnQgJiYgdGhpcy5fX2RldGFjaCgpO1xuXG4gICAgaWYgKHRoaXMuY29uc3RydWN0b3IudHJhbnNwYXJlbnQpIHtcbiAgICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50ID0gZXZhbHVhdGVQYXJlbnQuX19ha2lsaTtcbiAgICB9XG5cbiAgICB0aGlzLl9fZXZhbHVhdGVQYXJlbnQgPSBldmFsdWF0ZVBhcmVudDtcbiAgICB0aGlzLl9fcGFyZW50ID0gcGFyZW50c1swXTtcbiAgICB0aGlzLl9fcGFyZW50cyA9IHBhcmVudHM7XG4gICAgdGhpcy5zY29wZS5fX3BhcmVudCA9IHRoaXMuX19ldmFsdWF0ZVBhcmVudC5fX2FraWxpLnNjb3BlO1xuICAgICF0aGlzLl9fcmVjb21waWxpbmcgJiYgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fYWRkQ2hpbGQodGhpcy5lbCk7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMuc2NvcGUsIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX3Njb3BlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgY2hpbGQgZWxlbWVudCB0byB0aGUgbGlzdFxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYWRkQ2hpbGQoZWwpIHtcbiAgICB0aGlzLl9fY2hpbGRyZW4ucHVzaChlbCk7XG4gIH1cblxuICAvKipcbiAgICogU3BsaWNlIGNoaWxkIGZyb20gdGhlIGxpc3RcbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NwbGljZUNoaWxkKGVsKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLl9fY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLl9fY2hpbGRyZW5baV07XG5cbiAgICAgIGlmIChjaGlsZCA9PT0gZWwpIHtcbiAgICAgICAgdGhpcy5fX2NoaWxkcmVuLnNwbGljZShpLCAxKTtcbiAgICAgICAgaS0tO1xuICAgICAgICBsLS07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFlvdSBjYW4gY2hhbmdlIGV4cHJlc3Npb24gYmVmb3JlIHBhcnNpbmcgaGVyZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwcmVzc2lvblxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRQYXJzZWRFeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBub2RlIGhhcyBhbnkgcHJvcGVydHkgY2hhbmdlcyBvciBub3RcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NoZWNrRXZhbHVhdGlvbihub2RlKSB7XG4gICAgaWYgKCFPYmplY3Qua2V5cyhub2RlLl9fcHJvcGVydGllcykubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBrIGluIG5vZGUuX19wcm9wZXJ0aWVzKSB7XG4gICAgICBpZiAoIW5vZGUuX19wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgcHJvcCA9IG5vZGUuX19wcm9wZXJ0aWVzW2tdO1xuICAgICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMocHJvcC5rZXlzLCBwcm9wLmNvbXBvbmVudC5fX3Njb3BlKTtcblxuICAgICAgaWYgKCF1dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSh2YWx1ZSwgcHJvcC52YWx1ZSwgcHJvcC5jb3B5KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogIENoZWNrIG5vZGUgaGFzIGNoYW5nZWQgb24gdGhlIGNlcnRhaW4ga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NoZWNrTm9kZVByb3BlcnR5Q2hhbmdlKG5vZGUsIGtleXMsIHZhbHVlKSB7XG4gICAgbGV0IHByb3AgPSB0aGlzLl9fZ2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMpO1xuICAgIFxuICAgIGlmICghcHJvcCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuICF1dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSh2YWx1ZSwgcHJvcC52YWx1ZSwgcHJvcC5jb3B5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gZXhjZXB0aW9uIG1lc3NhZ2VcbiAgICogXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBcbiAgICogQHBhcmFtIHtFcnJvcn0gZXJyIFxuICAgKi9cbiAgX19jcmVhdGVFeGNlcHRpb25NZXNzYWdlKG5vZGUsIGVycikge1xuICAgIGxldCB0YWdOYW1lID0gbm9kZS5fX2NvbXBvbmVudC5lbC50YWdOYW1lO1xuICAgIGxldCBhdHRyTmFtZSA9IG5vZGUuX19jb21wb25lbnQuZWwuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKTtcbiAgICBsZXQgY29tcG9uZW50TmFtZSA9IChhdHRyTmFtZSB8fCB0YWdOYW1lKS50b0xvd2VyQ2FzZSgpO1xuICAgIGxldCBlbGVtZW50TmFtZSA9IG5vZGUuX19lbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBsZXQgYXR0cmlidXRlTmFtZSA9IChub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpPyBub2RlLm5hbWUudG9Mb3dlckNhc2UoKTogJyc7ICAgICAgICBcbiAgICBsZXQgbWVzc2FnZXMgPSBbIGVyci5tZXNzYWdlLCBub2RlLl9fZXhwcmVzc2lvbiBdO1xuICAgIGF0dHJpYnV0ZU5hbWUgJiYgbWVzc2FnZXMucHVzaChgW2F0dHJpYnV0ZSAke2F0dHJpYnV0ZU5hbWV9XWApO1xuICAgIG1lc3NhZ2VzID0gbWVzc2FnZXMuY29uY2F0KFsgYFtlbGVtZW50ICR7ZWxlbWVudE5hbWV9XWAsIGBbY29tcG9uZW50ICR7Y29tcG9uZW50TmFtZX1dYCBdKTtcbiAgICByZXR1cm4gYEV4cHJlc3Npb24gZXJyb3I6IGAgKyBtZXNzYWdlcy5qb2luKCdcXG5cXHRhdCAnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSBub2RlIGV4cHJlc3Npb25cbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlKG5vZGUpIHtcbiAgICBsZXQgY291bnRlciA9IDA7XG4gICAgbGV0IGF0dHJpYnV0ZVZhbHVlO1xuICAgIGxldCBleHByZXNzaW9uO1xuICAgIGNvbnN0IGV2YWxDb21wb25lbnQgPSBub2RlLl9fYXR0cmlidXRlT2YgfHwgbm9kZS5fX2NvbXBvbmVudDtcblxuICAgIGlmIChub2RlLl9fY29tcG9uZW50LnBhcmVudHMoKGNvbSkgPT4gY29tLl9fcHJldmVudCkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4geyByZXM6IG5vZGUuX19leHByZXNzaW9uIH07XG4gICAgfVxuXG4gICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKSAmJiBub2RlLl9fY29tcG9uZW50Ll9fcHJldmVudCkge1xuICAgICAgcmV0dXJuIHsgcmVzOiBub2RlLl9fZXhwcmVzc2lvbiB9O1xuICAgIH1cbiAgICBcbiAgICBsZXQgcmVzID0gbm9kZS5fX2V4cHJlc3Npb24ucmVwbGFjZShldmFsdWF0aW9uUmVnZXhHbG9iYWwsIChtLCBkKSA9PiB7XG4gICAgICBjb3VudGVyKys7XG4gICAgICBsZXQgZXZhbHVhdGU7XG4gICAgICBsZXQgZXZhbHVhdGlvbiA9IFtdO1xuICAgICAgbGV0IGV4aXN0aW5nQmluZGluZ3MgPSB7fTtcbiAgICAgIGxldCBwYXJlbnRCaW5kaW5ncyA9IHt9O1xuICAgICAgbGV0IHBhcnNlVmFsdWUgPSBub2RlLl9fY29tcG9uZW50Ll9fZ2V0UGFyc2VkRXhwcmVzc2lvbihkKTtcbiAgICAgIEFraWxpLl9fZXZhbHVhdGlvbiA9IHsgbm9kZTogbm9kZSwgbGlzdDogW10sIGNvbXBvbmVudDogbm9kZS5fX2NvbXBvbmVudCB9O1xuICAgICAgXG4gICAgICB0cnkge1xuICAgICAgICBldmFsdWF0ZSA9IHRoaXMuY29uc3RydWN0b3IucGFyc2UoZXZhbENvbXBvbmVudC5fX2V2YWx1YXRpb25Db21wb25lbnQuc2NvcGUsIHBhcnNlVmFsdWUpO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGVycikgeyAgICAgICAgXG4gICAgICAgIHRocm93IHRoaXMuX19jcmVhdGVFeGNlcHRpb25NZXNzYWdlKG5vZGUsIGVycik7XG4gICAgICB9XG5cbiAgICAgIGlmIChBa2lsaS5fX2V2YWx1YXRpb24pIHtcbiAgICAgICAgZXZhbHVhdGlvbiA9IEFraWxpLl9fZXZhbHVhdGlvbi5saXN0O1xuICAgICAgICBBa2lsaS5fX2V2YWx1YXRpb24ubGlzdCA9IG51bGw7XG4gICAgICAgIEFraWxpLl9fZXZhbHVhdGlvbiA9IG51bGw7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGZvciAobGV0IGkgPSBldmFsdWF0aW9uLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGxldCBkYXRhID0gZXZhbHVhdGlvbltpXTtcbiAgICAgICAgbGV0IGhhc2ggPSBkYXRhLmNvbXBvbmVudC5fX2NyZWF0ZUtleXNIYXNoKGRhdGEua2V5cyk7XG4gICAgICAgIGxldCBwYXJlbnRzSGFzaCA9IGRhdGEuY29tcG9uZW50Ll9fY3JlYXRlS2V5c0hhc2goZGF0YS5wYXJlbnRzKTtcbiAgICAgICBcbiAgICAgICAgaWYgKGRhdGEubm90QmluZGluZykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nQmluZGluZ3NbaGFzaF0pIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwYXJlbnRWYWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGRhdGEucGFyZW50cywgZGF0YS5jb21wb25lbnQuX19zY29wZSk7ICAgICAgICBcblxuICAgICAgICBpZiAocGFyZW50VmFsdWUgJiYgdHlwZW9mIHBhcmVudFZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgaWYgKEFraWxpLm9wdGlvbnMuZGVidWcgJiYgcGFyZW50QmluZGluZ3NbcGFyZW50c0hhc2hdID09IDUwKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgY29uc29sZS53YXJuKFtcbiAgICAgICAgICAgICAgYEZvciBoaWdoZXIgcGVyZm9ybWFuY2UsIGRvbid0IGxvb3AgUHJveHkgYXJyYXlzL29iamVjdHMgaW5zaWRlIGV4cHJlc3Npb24gZnVuY3Rpb25zLCBvciB1c2UgQWtpbGkudW5ldmFsdWF0ZSgpIHRvIHdyYXAgeW91IGNvZGUuYCxcbiAgICAgICAgICAgICAgYCR7IG5vZGUuX19leHByZXNzaW9uIH1gLFxuICAgICAgICAgICAgICBgc2NvcGUgcHJvcGVydHkgXCIkeyBkYXRhLnBhcmVudHMuam9pbignLicpfVwiYFxuICAgICAgICAgICAgXS5qb2luKCdcXG5cXHRhdCAnKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICFwYXJlbnRCaW5kaW5nc1twYXJlbnRzSGFzaF0/IHBhcmVudEJpbmRpbmdzW3BhcmVudHNIYXNoXSA9IDE6IHBhcmVudEJpbmRpbmdzW3BhcmVudHNIYXNoXSsrO1xuICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIGlmIChcbiAgICAgICAgICB1dGlscy5pc1Njb3BlUHJveHkocGFyZW50VmFsdWUpICYmIFxuICAgICAgICAgIGRhdGEuY29tcG9uZW50ICE9PSBldmFsQ29tcG9uZW50Ll9fZXZhbHVhdGlvbkNvbXBvbmVudCAmJiBcbiAgICAgICAgICBkYXRhLmNvbXBvbmVudCA9PT0gZGF0YS5yZWFsQ29tcG9uZW50XG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9ICBcblxuICAgICAgICBkYXRhLmNvbXBvbmVudC5fX2JpbmRBbmRTZXRQcm9wZXJ0eShub2RlLCBkYXRhLmtleXMsIGRhdGEuZXZhbHVhdGVkKTtcbiAgICAgICAgZXhpc3RpbmdCaW5kaW5nc1toYXNoXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGV4aXN0aW5nQmluZGluZ3MgPSBudWxsO1xuICAgICAgZXZhbHVhdGlvbiA9IG51bGw7XG5cbiAgICAgIGlmIChub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpIHtcbiAgICAgICAgZXhwcmVzc2lvbiA9IG07XG4gICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gZXZhbHVhdGU7XG4gICAgICAgIHJldHVybiB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUoZXZhbHVhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGV2YWx1YXRlID09ICdvYmplY3QnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGV2YWx1YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlKSB7XG4gICAgICAgICAgcmV0dXJuIGV2YWx1YXRlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBldmFsdWF0ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7IHJlcywgY291bnRlciwgZXhwcmVzc2lvbiwgYXR0cmlidXRlVmFsdWUgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIHRoZSBub2RlIGFuZCBzZXQgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtib29sZWFufSBbZXZhbHVhdGVkXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2JpbmRBbmRTZXRQcm9wZXJ0eShub2RlLCBrZXlzLCBldmFsdWF0ZWQpIHtcbiAgICBsZXQgYmluZCA9IHRoaXMuX19nZXRCb3VuZE5vZGUoa2V5cywgbm9kZSk7XG4gICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKTtcblxuICAgIGlmICghYmluZCkge1xuICAgICAgdGhpcy5fX2JpbmQoa2V5cywgeyBub2RlIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX19zZXROb2RlUHJvcGVydHkobm9kZSwga2V5cywgdmFsdWUsIGV2YWx1YXRlZCk7XG4gIH1cblxuICAvKipcbiAgICogTmVzdGVkIGV2YWx1YXRpb24gYnkga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3dpdGhvdXRQYXJlbnRzPWZhbHNlXSAtIGlmIHRydWUgZXZhbHVhdGlvbiB3aWxsIGJlIG9ubHkgZm9yIHRoZSBjdXJyZW50IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZU5lc3RlZChrZXlzLCB3aXRob3V0UGFyZW50cyA9IGZhbHNlKSB7XG4gICAgbGV0IHNjb3BlID0gdGhpcy5fX3Njb3BlO1xuICAgIGxldCBwcm9wcyA9IFtdOyAgICBcbiAgICBcbiAgICBpZiAoIXdpdGhvdXRQYXJlbnRzKSB7XG4gICAgICBsZXQgbGFzdFByb3BzID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgICAgIGxldCB2YWx1ZTtcblxuICAgICAgICBsYXN0UHJvcHMgPSBbLi4ubGFzdFByb3BzLCBrZXldO1xuICAgICAgICB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGxhc3RQcm9wcywgc2NvcGUpO1xuICAgICAgICBwcm9wcy5wdXNoKHsga2V5czogbGFzdFByb3BzLCB2YWx1ZTogdmFsdWV9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBwcm9wcy5wdXNoKHsga2V5czoga2V5cywgdmFsdWU6IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHNjb3BlKX0pO1xuICAgIH1cblxuICAgIGxldCBwcm9wc0xlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICAgIGNvbnN0IGVsRXZhbHVhdGUgPSAoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgY29tcG9uZW50ID0gZWxlbWVudC5fX2FraWxpOyAgICAgXG5cbiAgICAgIGZvciAobGV0IG0gPSAwOyBtIDwgcHJvcHNMZW5ndGg7IG0rKykge1xuICAgICAgICBsZXQgcHJvcCA9IHByb3BzW21dO1xuICAgICAgICBsZXQgZGF0YTtcbiAgICAgICAgXG4gICAgICAgIGlmIChjb21wb25lbnQgPT09IHRoaXMpIHtcbiAgICAgICAgICBsZXQgYmluZCA9IGNvbXBvbmVudC5fX2dldEJpbmQocHJvcC5rZXlzKTtcbiAgICAgICAgICBkYXRhID0gYmluZD8gKGJpbmQuX19kYXRhIHx8IFtdKTogW107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGF0YSA9IGNvbXBvbmVudC5fX2dldEFsbEJpbmRzKHByb3Aua2V5cyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICghZGF0YSB8fCAhZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGsgPSAwLCBjID0gZGF0YS5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgICAgICBjb25zdCBiaW5kID0gZGF0YVtrXTsgXG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKGNvbXBvbmVudC5fX2NoZWNrTm9kZVByb3BlcnR5Q2hhbmdlKGJpbmQubm9kZSwgcHJvcC5rZXlzLCBwcm9wLnZhbHVlKSkgeyAgXG4gICAgICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlS2V5cyhwcm9wLmtleXMpOyAgICAgXG4gICAgICAgICAgICBjb25zdCBjaGVja1Byb3AgPSBjb21wb25lbnQuX19nZXROb2RlUHJvcGVydHkoYmluZC5ub2RlLCBwcm9wLmtleXMpO1xuICAgICAgICAgICAgY2hlY2tQcm9wICYmIGNoZWNrUHJvcC5ldmFsdWF0ZWQgJiYgY29tcG9uZW50LnNjb3BlLl9fc2V0KHByb3Aua2V5cywgcHJvcC52YWx1ZSwgZmFsc2UsIHRydWUpOyBcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2V2YWx1YXRlTm9kZShiaW5kLm5vZGUsIGZhbHNlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yIChsZXQgX2sgaW4gYmluZC5ub2RlLl9fcHJvcGVydGllcykge1xuICAgICAgICAgICAgICBpZiAoIWJpbmQubm9kZS5fX3Byb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoX2spKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGxldCBfcHJvcCA9IGJpbmQubm9kZS5fX3Byb3BlcnRpZXNbX2tdO1xuICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhfcHJvcC5rZXlzLCBfcHJvcC5jb21wb25lbnQuX19zY29wZSk7XG4gICAgICAgICAgICAgIF9wcm9wLmNvbXBvbmVudC5fX3NldE5vZGVQcm9wZXJ0eShiaW5kLm5vZGUsIF9wcm9wLmtleXMsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29tcG9uZW50Ll9fZW5hYmxlS2V5cyhwcm9wLmtleXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH07XG5cbiAgICBjb25zdCBldmFsdWF0ZSA9IChlbGVtZW50cykgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IGVsRXZhbHVhdGUoZWxlbWVudHNbaV0pO1xuICAgICAgICBldmFsdWF0ZShjb21wb25lbnQuX19jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGVsRXZhbHVhdGUodGhpcy5lbCk7XG4gICAgZXZhbHVhdGUodGhpcy5fX2NoaWxkcmVuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSB2YWx1ZSBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlbGV0ZWQ9ZmFsc2VdIC0gdHJ1ZSBpZiB2YWx1ZSBpcyBkZWxldGluZ1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlQnlLZXlzIChrZXlzLCB2YWx1ZSwgaXNEZWxldGVkID0gZmFsc2UpIHsgICAgIFxuICAgIGxldCBkYXRhID0gdGhpcy5fX2dldEJpbmQoa2V5cyk7XG5cbiAgICBjb25zdCB1bmJpbmQgPSAob2JqLCBwYXJlbnRzKSA9PiB7XG4gICAgICBmb3IgKGxldCBrIGluIG9iaikge1xuICAgICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSB8fCB0aGlzLl9faXNTeXN0ZW1CaW5kaW5nS2V5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgX2tleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tdKTtcbiAgICAgICAgbGV0IF9fa2V5cyA9IF9rZXlzLnNsaWNlKCk7XG4gICAgICAgIGxldCBfaXNEZWxldGVkID0gZmFsc2U7XG4gICAgICAgIGxldCB2YWwgPSBvYmpba107XG4gICAgICAgIGxldCBoYXNLZXk7XG4gICAgICAgIFxuICAgICAgICBfX2tleXMuc2hpZnQoKTtcbiAgICAgICAgaGFzS2V5ID0gdXRpbHMuaGFzUHJvcGVydHlCeUtleXMoX19rZXlzLCB2YWx1ZSk7XG5cbiAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JyAmJiAhaGFzS2V5KSB7XG4gICAgICAgICAgX2lzRGVsZXRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsICYmIHR5cGVvZiB2YWwgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB1bmJpbmQodmFsLCBfa2V5cyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19ldmFsdWF0ZU5lc3RlZChfa2V5cywgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCAhaGFzS2V5KSB7XG4gICAgICAgICAgdGhpcy5fX3VuYmluZChfa2V5cyk7XG4gICAgICAgICAgX2lzRGVsZXRlZCAmJiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhfX2tleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgZGF0YSAmJiB1bmJpbmQoZGF0YSwgW10uY29uY2F0KGtleXMpKTtcbiAgICB0aGlzLl9fZXZhbHVhdGVOZXN0ZWQoa2V5cywgZmFsc2UpO1xuXG4gICAgaWYgKGlzRGVsZXRlZCkge1xuICAgICAgdGhpcy5fX3VuYmluZChrZXlzKTtcbiAgICAgIGlzRGVsZXRlZCAmJiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSBldmVudCBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZUV2ZW50KG5vZGUsIGVsLCBlKSB7XG4gICAgbGV0IGV4cHJlc3Npb24gPSBldmFsdWF0aW9uUmVnZXguZXhlYyhub2RlLl9fZXhwcmVzc2lvbik7XG4gICAgbGV0IGV2YWx1YXRlO1xuXG4gICAgaWYgKCFleHByZXNzaW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fX2V2YWx1YXRpbmdFdmVudCA9IHtcbiAgICAgIGVsOiBlbCxcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIGV2ZW50OiBlLFxuICAgICAgbm9kZVxuICAgIH07XG5cbiAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0ge307XG5cbiAgICB0cnkge1xuICAgICAgZXZhbHVhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLnBhcnNlKHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50LnNjb3BlLCBleHByZXNzaW9uWzFdLCB7IGV2ZW50OiBlIH0pO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7ICAgICAgICBcbiAgICAgIHRocm93IHRoaXMuX19jcmVhdGVFeGNlcHRpb25NZXNzYWdlKG5vZGUsIGVycik7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSBudWxsO1xuICAgIHJldHVybiBldmFsdWF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBjaGFuZ2VzIGFuZCBldmFsdWF0ZSB0aGUgcGFzc2VkIG5vZGVcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2NoZWNrXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlTm9kZShub2RlLCBjaGVjayA9IHRydWUpIHtcbiAgICBjb25zdCBrZXkgPSBub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHI/ICd2YWx1ZSc6ICdub2RlVmFsdWUnO1xuXG4gICAgaWYgKGNoZWNrPyB0aGlzLl9fY2hlY2tFdmFsdWF0aW9uKG5vZGUpOiB0cnVlKSB7ICAgICAgXG4gICAgICBjb25zdCB7IHJlcywgYXR0cmlidXRlVmFsdWUsIGV4cHJlc3Npb24sIGNvdW50ZXIgfSA9IHRoaXMuX19ldmFsdWF0ZShub2RlKTsgICAgIFxuICAgICAgbm9kZVtrZXldICE9IHJlcyAmJiAobm9kZVtrZXldID0gcmVzKTtcblxuICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cikge1xuICAgICAgICBsZXQgdmFsdWUgPSByZXM7XG4gICAgICAgIGxldCBpc0Jvb2xlYW5BdHRyaWJ1dGUgPSBmYWxzZTtcbiAgXG4gICAgICAgIGlmIChjb3VudGVyID09IDEgJiYgZXhwcmVzc2lvbiAmJiBub2RlLl9fZXhwcmVzc2lvbiA9PSBleHByZXNzaW9uKSB7XG4gICAgICAgICAgdmFsdWUgPSBhdHRyaWJ1dGVWYWx1ZTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgY29uc3QgY2xlYXJBdHRyaWJ1dGUgPSBub2RlLm5vZGVOYW1lLnJlcGxhY2UoL15ib29sZWFuLSguKykvaSwgJyQxJyk7XG4gICAgICAgIGNvbnN0IGNhbWVsQXR0cmlidXRlID0gdXRpbHMudG9DYW1lbENhc2UoY2xlYXJBdHRyaWJ1dGUpO1xuICBcbiAgICAgICAgaWYgKGNsZWFyQXR0cmlidXRlICE9IG5vZGUubm9kZU5hbWUpIHtcbiAgICAgICAgICBpc0Jvb2xlYW5BdHRyaWJ1dGUgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlID0gISF2YWx1ZTtcbiAgICAgICAgfSAgICAgICAgICBcbiAgXG4gICAgICAgIGlmIChub2RlLl9fYXR0cmlidXRlT24pIHsgICAgICAgIFxuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5vZGUuX19hdHRyaWJ1dGVPbjtcbiAgICAgICAgICAhY29tcG9uZW50Ll9fc2F2ZUF0dHJpYnV0ZVByb3h5SW4gJiYgKHZhbHVlID0gdXRpbHMuY29weSh2YWx1ZSkpO1xuICAgICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSB0cnVlO1xuICAgICAgICAgIGNvbXBvbmVudC5hdHRyc1tjYW1lbEF0dHJpYnV0ZV0gPSB2YWx1ZTtcbiAgICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gZmFsc2U7XG4gIFxuICAgICAgICAgIGlmIChjb21wb25lbnQuX19pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2F0dHJUcmlnZ2VyQnlOYW1lKGNhbWVsQXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzQm9vbGVhbkF0dHJpYnV0ZSkge1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBub2RlLl9fZWxlbWVudDtcbiAgICAgICAgICB2YWx1ZT8gZWxlbWVudC5zZXRBdHRyaWJ1dGUoY2FtZWxBdHRyaWJ1dGUsICd0cnVlJyk6IGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGNhbWVsQXR0cmlidXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlW2tleV07XG4gIH1cblxuICAvKipcbiAgICogQXR0cmlidXRlIG5vZGUgaW5pdGlhbGl6aW5nXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBhdHRyaWJ1dGVPZiAtIGlmIG5vZGUgaXMgbGlua2VkIHdpdGggcGFyZW50IHNjb3BlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZUF0dHJpYnV0ZShub2RlLCBlbCwgYXR0cmlidXRlT2YpIHtcbiAgICBpZiAoIW5vZGUgfHwgc3lzdGVtQXR0cmlidXRlcy5pbmRleE9mKG5vZGUubm9kZU5hbWUpICE9IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoIXRoaXMuX19pbml0aWFsaXplTm9kZShub2RlLCBlbCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZXZlbnROYW1lID0gbm9kZS5ub2RlTmFtZS5yZXBsYWNlKC9eb24tKC4rKS9pLCAnJDEnKTtcbiAgICBsZXQgbm9kZU5hbWUgPSB1dGlscy50b0NhbWVsQ2FzZShub2RlLm5vZGVOYW1lKTtcbiAgICBsZXQgY29tcG9uZW50ID0gYXR0cmlidXRlT2Y/IGF0dHJpYnV0ZU9mOiB0aGlzO1xuXG4gICAgaWYgKGV2ZW50TmFtZSAhPSBub2RlLm5vZGVOYW1lKSB7XG4gICAgICBpZiAobm9kZS5fX2V2ZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGVtaXR0ZXIgPSBuZXcgQWtpbGkuRXZlbnRFbWl0dGVyKGV2ZW50TmFtZSwgZWwsIGNvbXBvbmVudCk7XG5cbiAgICAgIGlmIChub2RlLl9fZXhwcmVzc2lvbikge1xuICAgICAgICBlbWl0dGVyLmJpbmQoKGUpID0+IHtcbiAgICAgICAgICByZXR1cm4gY29tcG9uZW50Ll9fZXZhbHVhdGVFdmVudChub2RlLCBlbCwgZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBub2RlLl9fZXZlbnQgPSBlbWl0dGVyO1xuICAgICAgZWwuc2V0QXR0cmlidXRlKG5vZGUubm9kZU5hbWUsIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZShlbWl0dGVyKSk7XG5cbiAgICAgIGlmIChhdHRyaWJ1dGVPZikge1xuICAgICAgICB0aGlzLl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IHRydWU7XG4gICAgICAgIHRoaXMuYXR0cnNbbm9kZU5hbWVdID0gZW1pdHRlcjtcbiAgICAgICAgdGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChhdHRyaWJ1dGVPZikge1xuICAgICAgbm9kZS5fX2F0dHJpYnV0ZU9uID0gdGhpcztcbiAgICAgIG5vZGUuX19hdHRyaWJ1dGVPZiA9IGNvbXBvbmVudDtcbiAgICB9XG4gICAgXG4gICAgbGV0IGNoZWNrID0gdGhpcy5fX2NvbXBpbGluZz8gdGhpcy5fX2NvbXBpbGluZy5jaGVja0NoYW5nZXM6IGZhbHNlO1xuICAgIGNvbXBvbmVudC5fX2V2YWx1YXRlTm9kZShub2RlLCBjaGVjayk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgbm9kZVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbml0aWFsaXplTm9kZShub2RlLCBlbCkge1xuICAgIGlmIChub2RlLl9faW5pdGlhbGl6ZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbCA9IG5vZGVbKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cik/ICd2YWx1ZSc6ICdub2RlVmFsdWUnXS50cmltKCk7XG4gICAgY29uc3QgaGFzQmluZGluZyA9IGV2YWx1YXRpb25SZWdleC50ZXN0KHZhbCk7XG4gICAgY29uc3QgaXNCb29sZWFuID0gL15ib29sZWFuLS9pLnRlc3Qobm9kZS5ub2RlTmFtZSk7XG4gICAgY29uc3QgaXNFdmVudCA9IC9eb24tKC4rKS9pLnRlc3Qobm9kZS5ub2RlTmFtZSk7XG5cbiAgICBpZighZWwuX19ha2lsaSAmJiAhaGFzQmluZGluZyAmJiAhaXNCb29sZWFuICYmICFpc0V2ZW50KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbm9kZS5fX2lzRXZlbnQgPSBpc0V2ZW50O1xuICAgIG5vZGUuX19oYXNCaW5kaW5ncyA9IGhhc0JpbmRpbmc7XG4gICAgbm9kZS5fX2lzQm9vbGVhbiA9IGlzQm9vbGVhbjtcbiAgICBub2RlLl9fZXhwcmVzc2lvbiA9IHZhbDtcbiAgICBub2RlLl9fcHJvcGVydGllcyA9IHt9O1xuICAgIG5vZGUuX19hdHRyaWJ1dGVPZiA9IG51bGw7XG4gICAgbm9kZS5fX2F0dHJpYnV0ZU9uID0gbnVsbDtcbiAgICBub2RlLl9fZXZlbnQgPSBudWxsOyAgICBcbiAgICBub2RlLl9faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIG5vZGUuX19jb21wb25lbnQgPSB0aGlzO1xuICAgIG5vZGUuX19lbGVtZW50ID0gZWw7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRGVpbml0aWFsaXplIHRoZSBub2RlXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RlaW5pdGlhbGl6ZU5vZGUobm9kZSkge1xuICAgIGlmIChub2RlLl9fZXZlbnQpIHtcbiAgICAgIG5vZGUuX19ldmVudC51bmJpbmQoKTtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5fX2hhc0JpbmRpbmdzKSB7XG4gICAgICB0aGlzLl9fcGFyZW50ICYmIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2V2YWx1YXRpb25Db21wb25lbnQuX191bmJpbmRCeU5vZGVzKFtub2RlXSk7ICAgICAgICAgIFxuICAgIH1cblxuICAgIGRlbGV0ZSBub2RlLl9faGFzQmluZGluZ3M7XG4gICAgZGVsZXRlIG5vZGUuX19pc0Jvb2xlYW47XG4gICAgZGVsZXRlIG5vZGUuX19pc0V2ZW50O1xuICAgIGRlbGV0ZSBub2RlLl9fZXhwcmVzc2lvbjtcbiAgICBkZWxldGUgbm9kZS5fX3Byb3BlcnRpZXM7XG4gICAgZGVsZXRlIG5vZGUuX19hdHRyaWJ1dGVPZjtcbiAgICBkZWxldGUgbm9kZS5fX2F0dHJpYnV0ZU9uO1xuICAgIGRlbGV0ZSBub2RlLl9fZXZlbnQ7ICAgIFxuICAgIGRlbGV0ZSBub2RlLl9faW5pdGlhbGl6ZWQ7XG4gICAgZGVsZXRlIG5vZGUuX19jb21wb25lbnQ7XG4gICAgZGVsZXRlIG5vZGUuX19lbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEludGVycG9sYXRlIGF0dHJpYnV0ZXMgb2YgdGhlIGVsZW1lbnRcbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gW2F0dHJpYnV0ZU9mPW51bGxdIC0gaWYgbm9kZSBpcyBsaW5rZWQgd2l0aCBwYXJlbnQgc2NvcGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXMoZWwsIGF0dHJpYnV0ZU9mID0gbnVsbCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBhdHRycyA9IGVsLmF0dHJpYnV0ZXMsIGwgPSBhdHRycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHRoaXMuX19pbml0aWFsaXplQXR0cmlidXRlKGF0dHJzW2ldLCBlbCwgYXR0cmlidXRlT2YpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmUgYXR0cmlidXRlcyBhcyBwcm94eVxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RlZmluZUF0dHJpYnV0ZXMoKSB7XG4gICAgY29uc3QgY2hhbmdlQXR0cmlidXRlID0gKGtleSwgdmFsdWUsIGlzRGVsZXRlZCA9IGZhbHNlKSA9PiB7XG4gICAgICBpZiAodGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgbm9kZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlTm9kZShrZXkpO1xuXG4gICAgICBpZiAoaXNEZWxldGVkKSB7XG4gICAgICAgIG5vZGUgJiYgdGhpcy5fX2RlaW5pdGlhbGl6ZU5vZGUobm9kZSk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgIHJldHVybiBcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCFub2RlKSB7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgICBub2RlID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGVOb2RlKGtleSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbm9kZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9fZGVpbml0aWFsaXplTm9kZShub2RlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fX2luaXRpYWxpemVBdHRyaWJ1dGUobm9kZSwgdGhpcy5lbCwgdGhpcy5fX2F0dHJpYnV0ZU9mKTtcbiAgICB9O1xuXG4gICAgdGhpcy5hdHRycyA9IG5ldyBQcm94eSh0aGlzLl9fYXR0cnMsIHtcbiAgICAgIGdldDogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGlmIChrZXkgPT0gJ19faXNQcm94eScpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgIH0sXG4gICAgICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IGF0dHJLZXkgPSB1dGlscy50b0Rhc2hDYXNlKGtleSk7XG5cbiAgICAgICAgaWYgKHRoaXMuYm9vbGVhbkF0dHJpYnV0ZXMuaW5kZXhPZihhdHRyS2V5KSAhPSAtMSkge1xuICAgICAgICAgIGF0dHJLZXkgPSBgYm9vbGVhbi0ke2F0dHJLZXl9YDtcbiAgICAgICAgICB2YWx1ZT8gdGhpcy5lbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk6IHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgIGNoYW5nZUF0dHJpYnV0ZShhdHRyS2V5LCB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUodmFsdWUpKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgICAgZGVsZXRlUHJvcGVydHk6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IGF0dHJLZXkgPSB1dGlscy50b0Rhc2hDYXNlKGtleSk7XG4gICAgICAgIGNoYW5nZUF0dHJpYnV0ZShhdHRyS2V5LCB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUodmFsdWUpLCB0cnVlKTtcbiAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgcHJveHkgdG8gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcmV0dXJucyB7UHJveHl9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fb2JzZXJ2ZShvYmosIHBhcmVudHMpIHtcbiAgICByZXR1cm4gbmV3IFByb3h5KG9iaiwge1xuICAgICAgZ2V0OiAodGFyZ2V0LCBrZXkpID0+IHsgXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX2lzUHJveHlcIikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PSBcIl9fdGFyZ2V0XCIpIHtcbiAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PSBcIl9fY29tcG9uZW50XCIpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX2tleXNcIikge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5fX2lzU3lzdGVtS2V5KGtleSkpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQWtpbGkuX19ldmFsdWF0aW9uKSB7ICBcbiAgICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG4gICAgICAgICAgbGV0IG5vdEJpbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBsZXQgZXZhbHVhdGVkID0gIXV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19zY29wZSk7IFxuICAgICAgICAgIGxldCBjb21wb25lbnQgPSB0aGlzO1xuICAgICAgICAgIGxldCBleGNBcnIgPSBrZXlzLnNsaWNlKCk7XG5cbiAgICAgICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgU2NvcGUpIHtcbiAgICAgICAgICAgIGxldCByZWFsVGFyZ2V0ID0gdXRpbHMuZ2V0T3duUHJvcGVydHlUYXJnZXQodGFyZ2V0LCBrZXkpO1xuICAgICAgICAgICAgcmVhbFRhcmdldCAmJiAocmVhbFRhcmdldCBpbnN0YW5jZW9mIFNjb3BlKSAmJiAoY29tcG9uZW50ID0gIHJlYWxUYXJnZXQuX19jb21wb25lbnQpO1xuICAgICAgICAgIH0gXG5cbiAgICAgICAgICBpZiAoQWtpbGkuX193cmFwcGluZyAmJiBrZXlzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBmb3JQYXJlbnRzID0gQWtpbGkuX19ldmFsdWF0aW9uLmNvbXBvbmVudC5wYXJlbnRzKGMgPT4gYyBpbnN0YW5jZW9mIEFraWxpLmNvbXBvbmVudHMuRm9yKTtcblxuICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZm9yUGFyZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGsgPSAwLCBjID0ga2V5cy5sZW5ndGg7IGsgPCBjOyBrKyspIHsgXG4gICAgICAgICAgICAgIGNvbnN0IGZvckRhdGEgPSBmb3JQYXJlbnRzW2ldLmRhdGE7XG4gICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhleGNBcnIsIGNvbXBvbmVudC5fX3Njb3BlKTtcblxuICAgICAgICAgICAgICBpZiAoZGF0YSAmJiB0eXBlb2YgZGF0YSA9PSAnb2JqZWN0JyAmJiBmb3JEYXRhID09PSBkYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgICBleGNBcnIucG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgaWYgKCEoa2V5IGluIHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH0gICAgICAgICAgXG4gICAgICAgICAgZWxzZSBpZiAoIXV0aWxzLmdldEVudW1lcmFibGVQcm9wZXJ0eVRhcmdldCh0YXJnZXQsIGtleSkpIHtcbiAgICAgICAgICAgIG5vdEJpbmRpbmcgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX19iaW5kTm9kZShBa2lsaS5fX2V2YWx1YXRpb24ubGlzdCwgY29tcG9uZW50LCBrZXlzLCBwYXJlbnRzLCB0YXJnZXRba2V5XSwgbm90QmluZGluZywgZXZhbHVhdGVkKTtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICB9LFxuICAgICAgc2V0OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7IFxuICAgICAgICBpZiAodGhpcy5fX2lzU3lzdGVtS2V5KGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhbHVlID0gQWtpbGkud3JhcEZ1bmN0aW9uKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrZXldKTtcblxuICAgICAgICBpZiAodGhpcy5fX2NoZWNrRGlzYWJsZW1lbnQoa2V5cykpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgQ0hFQ0tfRVhJU1RFTkNFOiBpZiAocGFyZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGV0IHRhcmdldFBhcmVudFZhbHVlID0gcGFyZW50cy5sZW5ndGggPiAxPyB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhwYXJlbnRzLnNsaWNlKDAsIC0xKSwgdGhpcy5fX3Njb3BlKTogdGhpcy5fX3Njb3BlO1xuICAgICAgICAgIFxuICAgICAgICAgIGZvciAobGV0IGsgaW4gdGFyZ2V0UGFyZW50VmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghdGFyZ2V0UGFyZW50VmFsdWUuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXRQYXJlbnRWYWx1ZVtrXSAmJiB0YXJnZXRQYXJlbnRWYWx1ZVtrXS5fX3RhcmdldCA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgIGJyZWFrIENIRUNLX0VYSVNURU5DRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0W2tleV0gPSB0aGlzLl9fbmVzdGVkT2JzZXJ2ZSh2YWx1ZSwga2V5cyk7XG5cbiAgICAgICAgaWYoIXRoaXMuX19pc1Jlc29sdmVkKSB7XG4gICAgICAgICAgdGhpcy5fX3RyaWdnZXJTdG9yZUFuZEF0dHIoa2V5cywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgXG4gICAgICAgIGlmIChBa2lsaS5fX2lzb2xhdGlvbikgeyBcbiAgICAgICAgICB0aGlzLl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0KHBhcmVudHMsIGtleSwgZmFsc2UpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5fX2lzUmVzb2x2ZWQpIHtcbiAgICAgICAgICB0aGlzLl9fdHJpZ2dlclN0b3JlQW5kQXR0cihrZXlzLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLl9faXNNb3VudGVkKSB7ICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgIHRoaXMuX19ldmFsdWF0ZUJ5S2V5cyhrZXlzLCB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBkZWxldGVQcm9wZXJ0eTogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tleV0pO1xuXG4gICAgICAgIGlmICh0aGlzLl9fY2hlY2tEaXNhYmxlbWVudChrZXlzKSkge1xuICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9faXNTeXN0ZW1LZXkoa2V5KSkge1xuICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcblxuICAgICAgICBpZighdGhpcy5fX2lzUmVzb2x2ZWQpIHtcbiAgICAgICAgICB0aGlzLl9fdHJpZ2dlclN0b3JlQW5kQXR0cihrZXlzLCB1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoQWtpbGkuX19pc29sYXRpb24pIHtcbiAgICAgICAgICB0aGlzLl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0KHBhcmVudHMsIGtleSwgdHJ1ZSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLl9faXNSZXNvbHZlZCkge1xuICAgICAgICAgIHRoaXMuX190cmlnZ2VyU3RvcmVBbmRBdHRyKGtleXMsIHVuZGVmaW5lZCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9fZXZhbHVhdGVCeUtleXMoa2V5cywgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciBzdG9yZSBhbmQgYXR0cmlidXRlcyBjaGFuZ2VcbiAgICovXG4gIF9fdHJpZ2dlclN0b3JlQW5kQXR0cihrZXlzLCB2YWx1ZSkge1xuICAgIGNvbnN0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcblxuICAgIGlmICh0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddKSB7XG4gICAgICB0aGlzLl9fc3RvcmVUcmlnZ2VyQnlLZXlzKGtleXMsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddKSB7XG4gICAgICB0aGlzLl9fYXR0clRyaWdnZXJCeUtleXMoa2V5cywgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgaGFzaCBmb3IgdGhlIGtleXNcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9ICAgIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZUtleXNIYXNoKGtleXMpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5fX3Njb3BlLl9fbmFtZX0uJHtBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyl9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHN0b3JlIG9mIHRoZSBkaXNhYmxlbWVudCB0eXBlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBcbiAgICovXG4gIF9fZ2V0RGlzYWJsZW1lbnRUeXBlU3RvcmUodHlwZSkge1xuICAgIHJldHVybiAoe1xuICAgICAgcHJveHk6ICdfX2Rpc2FibGVQcm94eScsXG4gICAgICBzdG9yZTogJ19fZGlzYWJsZVN0b3JlS2V5cycsXG4gICAgICBhdHRyOiAnX19kaXNhYmxlQXR0cktleXMnXG4gICAgfSlbdHlwZV07XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZSB0aGUga2V5cyBzZXR0ZXJcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3R5cGVdICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kaXNhYmxlS2V5cyhrZXlzLCB0eXBlID0gJ3Byb3h5JykgeyAgICBcbiAgICB0aGlzW3RoaXMuX19nZXREaXNhYmxlbWVudFR5cGVTdG9yZSh0eXBlKV1ba2V5cz8gdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpOiAnX19hbGwnXSA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIHRoZSBrZXlzIHNldHRlclxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlXSAgIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2VuYWJsZUtleXMoa2V5cywgdHlwZSA9ICdwcm94eScpIHtcbiAgICBkZWxldGUgdGhpc1t0aGlzLl9fZ2V0RGlzYWJsZW1lbnRUeXBlU3RvcmUodHlwZSldW2tleXM/IHRoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKTogJ19fYWxsJ107XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGtleXMgc2V0dGVyIGRpc2FibGVtYW50XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3R5cGVdICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2hlY2tEaXNhYmxlbWVudChrZXlzLCB0eXBlID0gJ3Byb3h5Jykge1xuICAgIGNvbnN0IHN0b3JlID0gdGhpcy5fX2dldERpc2FibGVtZW50VHlwZVN0b3JlKHR5cGUpO1xuICAgIHJldHVybiB0aGlzW3N0b3JlXS5fX2FsbD8gdHJ1ZTogdGhpc1tzdG9yZV1bdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlIHRoZSB2YWx1ZSB0byB0aGUgc3RvcmUgYnkgdGhlIGtleXNcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc3RvcmVUcmlnZ2VyQnlLZXlzKGtleXMsIHZhbHVlKSB7IFxuICAgIGlmICh0aGlzLl9fY2hlY2tEaXNhYmxlbWVudChrZXlzLCAnc3RvcmUnKSkgeyAgICAgIFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGxpbmtzID0gdGhpcy5fX3N0b3JlTGlua3NbQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpXTtcblxuICAgIGlmICghbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICB2YWx1ZSA9IHV0aWxzLmNvcHkodmFsdWUpO1xuICAgIGNvbnN0IHAgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGlua3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBsaW5rID0gbGlua3NbaV07ICAgXG4gICAgICBcbiAgICAgIGlmICghbGluay5zZXQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHAucHVzaCh0aGlzLl9fc3RvcmVUcmlnZ2VyQnlOYW1lKGxpbmsubmFtZSwgdmFsdWUpKTsgICAgICBcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmUgdGhlIHZhbHVlIHRvIHRoZSBzdG9yZSBieSB0aGUgbmFtZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc3RvcmVUcmlnZ2VyQnlOYW1lKG5hbWUsIHZhbHVlKSB7ICBcbiAgICBzdG9yZS5fX3RhcmdldFtuYW1lXSA9IHZhbHVlO1xuICAgIGxldCBsaW5rcyA9IChBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0gfHwgW10pLmNvbmNhdChBa2lsaS5fX3N0b3JlTGlua3NbJyonXSB8fCBbXSk7XG5cbiAgICBpZiAoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsaW5rcyA9IHV0aWxzLnNvcnQobGlua3MsIFsnZGF0ZSddLCB0cnVlKTtcblxuICAgIHJldHVybiBBa2lsaS5uZXh0VGljaygoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxpbmtzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5rID0gbGlua3NbaV07XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGxpbmsuY29tcG9uZW50O1xuXG4gICAgICAgIGlmIChjb21wb25lbnQgPT09IHRoaXMpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKGxpbmsuZm4pIHtcbiAgICAgICAgICBBa2lsaS51bmlzb2xhdGUoKCkgPT4gbGluay5mbi5jYWxsKGNvbXBvbmVudCwgdmFsdWUsIG5hbWUpKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWxpbmsuZ2V0KSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlS2V5cyhsaW5rLmtleXMsICdzdG9yZScpO1xuICAgICAgICBsZXQgY3VycmVudCA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGxpbmsua2V5cywgY29tcG9uZW50Ll9fc2NvcGUpO1xuICAgICAgICAhdXRpbHMuY29tcGFyZShjdXJyZW50LCB2YWx1ZSkgJiYgY29tcG9uZW50LnNjb3BlLl9fc2V0KGxpbmsua2V5cywgdmFsdWUpOyAgIFxuICAgICAgICBjb21wb25lbnQuX19lbmFibGVLZXlzKGxpbmsua2V5cywgJ3N0b3JlJyk7XG4gICAgICB9ICBcbiAgICB9KTsgICBcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBzdG9yZSBsaW5rIHdpdGggdGhlIHNjb3BlIHByb3BlcnR5XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtvYmhlY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3N0b3JlQnlLZXlzKG5hbWUsIGtleXMsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSB7IGdldDogdHJ1ZSwgc2V0OiB0cnVlLCAuLi5vcHRpb25zIH07XG5cbiAgICBpZiAoIWtleXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgU3RvcmUgbGluayBcIiR7bmFtZX1cIiBtdXN0IGhhdmUgdGhlIHNjb3BlIHByb3BlcnR5IG5hbWVgKTtcbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbnMuZ2V0ICYmICFvcHRpb25zLnNldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBTdG9yZSBsaW5rIFwiJHtuYW1lfVwiIG11c3QgaGF2ZSBhdCBsZWFzdCBcImdldFwiIG9yIFwic2V0XCIgb3B0aW9uIGFzIHRydWVgKTtcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuICAgIFxuICAgIHRoaXMuX19kaXNhYmxlS2V5cyhrZXlzLCAnc3RvcmUnKTtcbiAgICAoc3RvcmUuaGFzT3duUHJvcGVydHkobmFtZSkgfHwgIXV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19zY29wZSkpICYmIHRoaXMuc2NvcGUuX19zZXQoa2V5cywgc3RvcmVbbmFtZV0pO1xuICAgIHRoaXMuX19lbmFibGVLZXlzKGtleXMsICdzdG9yZScpO1xuICAgIGxldCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG4gICAgbGV0IGluZm87XG5cbiAgICBpZiAoIXRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ10pIHtcbiAgICAgIHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ10gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgYXJyID0gdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuXG4gICAgICBpZiAocmVzLmNvbXBvbmVudCA9PT0gdGhpcyAmJiByZXMubmFtZSA9PSBuYW1lICYmIHJlcy5rZXlTdHJpbmcgPT0ga2V5U3RyaW5nKSB7XG4gICAgICAgIHJlcy5zZXQgPSBvcHRpb25zLnNldDtcbiAgICAgICAgcmVzLmdldCA9IG9wdGlvbnMuZ2V0O1xuICAgICAgICByZXMuZGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIUFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSkge1xuICAgICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgaW5mbyA9IHsgY29tcG9uZW50OiB0aGlzLCBuYW1lLCBrZXlzLCBrZXlTdHJpbmcsIGRhdGU6IERhdGUubm93KCksIHNldDogb3B0aW9ucy5zZXQsIGdldDogb3B0aW9ucy5nZXQgfTtcbiAgICB0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddLnB1c2goaW5mbyk7XG4gICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdLnB1c2goaW5mbyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgc3RvcmUgbGluayB3aXRoIHRoZSBmdW5jdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuICAgXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIF9fc3RvcmVCeUZ1bmN0aW9uKG5hbWUsIGZuLCBvcHRpb25zID0ge30pIHsgXG4gICAgbGV0IGNhbGwgPSBvcHRpb25zLmNhbGxPblN0YXJ0ID09PSB1bmRlZmluZWQ/IHN0b3JlLl9fdGFyZ2V0Lmhhc093blByb3BlcnR5KG5hbWUpOiBvcHRpb25zLmNhbGxPblN0YXJ0O1xuXG4gICAgaWYgKCFBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0pIHtcbiAgICAgIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGxldCBsaW5rcyA9IEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYgKHJlcy5jb21wb25lbnQgPT09IHRoaXMgJiYgcmVzLm5hbWUgPT0gbmFtZSAmJiByZXMuZm4gPT09IGZuKSB7XG4gICAgICAgIHJlcy5kYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXS5wdXNoKHsgY29tcG9uZW50OiB0aGlzLCBuYW1lLCBmbiwgZGF0ZTogRGF0ZS5ub3coKSB9KTtcblxuICAgIGlmIChuYW1lID09ICcqJyAmJiBvcHRpb25zLmNhbGxPblN0YXJ0ICE9PSBmYWxzZSkge1xuICAgICAgbGV0IHN0b3JlS2V5cyA9IE9iamVjdC5rZXlzKHN0b3JlLl9fdGFyZ2V0KTtcbiAgICAgIGxldCBwID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gc3RvcmVLZXlzLmxlbmd0aCA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGtleSA9IHN0b3JlS2V5c1tpXTtcbiAgICAgICAgbGV0IHZhbCA9IHN0b3JlLl9fdGFyZ2V0W2tleV07XG4gICAgICAgIHAucHVzaChBa2lsaS51bmlzb2xhdGUoKCkgPT4gZm4uY2FsbCh0aGlzLCB2YWwsIGtleSkpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHApO1xuICAgIH1cblxuICAgIGlmIChjYWxsKSB7XG4gICAgICByZXR1cm4gQWtpbGkudW5pc29sYXRlKCgpID0+IGZuLmNhbGwodGhpcywgc3RvcmVbbmFtZV0pKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBzdG9yZSBsaW5rIHdpdGggdGhlIHNjb3BlIHByb3BlcnR5XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3Vuc3RvcmVCeUtleXMobmFtZSwga2V5cykge1xuICAgIGlmICgha2V5cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgaGF2ZSB0byBwYXNzIHRoZSBzY29wZSBwcm9wZXJ0eSBuYW1lIGZvciBzdG9yZSBsaW5rIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cblxuICAgIGxldCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG4gICAgbGV0IGFyciA9IHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ107XG5cbiAgICBpZiAoIWFyci5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGFycltpXTtcbiAgICAgIGxldCBsaW5rcyA9IEFraWxpLl9fc3RvcmVMaW5rc1tyZXMubmFtZV07XG5cbiAgICAgIGlmIChyZXMuY29tcG9uZW50ICE9PSB0aGlzIHx8IHJlcy5uYW1lICE9IG5hbWUgfHwgcmVzLmtleVN0cmluZyAhPSBrZXlTdHJpbmcpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGFyci5zcGxpY2UoaSwgMSk7XG5cbiAgICAgIGlmICghbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgayA9IGxpbmtzLmxlbmd0aCAtIDE7IGsgPj0gMDsgay0tKSB7XG4gICAgICAgIGxldCBsaW5rID0gbGlua3Nba107XG5cbiAgICAgICAgaWYgKGxpbmsuY29tcG9uZW50ID09PSB0aGlzICYmIGxpbmsua2V5U3RyaW5nID09IGtleVN0cmluZykge1xuICAgICAgICAgIGxpbmtzLnNwbGljZShrLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWxpbmtzLmxlbmd0aCkge1xuICAgICAgICBkZWxldGUgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghYXJyLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ107XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgc3RvcmUgbGluayB3aXRoIHRoZSBmdW5jdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3Vuc3RvcmVCeUZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYgKCFBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV07XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IGxpbmtzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gbGlua3NbaV07XG5cbiAgICAgIGlmIChyZXMuY29tcG9uZW50ID09PSB0aGlzICYmIHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmZuID09PSBmbikge1xuICAgICAgICBsaW5rcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghbGlua3MubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIGFuIGF0dHJpYnV0ZSBldmVudCBieSB0aGUga2V5c1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hdHRyVHJpZ2dlckJ5S2V5cyhrZXlzLCB2YWx1ZSkge1xuICAgIGlmICh0aGlzLl9fY2hlY2tEaXNhYmxlbWVudChrZXlzLCAnYXR0cicpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGxpbmtzID0gdGhpcy5fX2F0dHJMaW5rc1tBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyldO1xuICAgXG4gICAgaWYgKCFsaW5rcyB8fCAhbGlua3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBBa2lsaS5uZXh0VGljaygoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxpbmtzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5rID0gbGlua3NbaV07XG5cbiAgICAgICAgaWYgKGxpbmsuZm4pIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbGluay5zZXQpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgZXYgPSAnb24nICsgdXRpbHMuY2FwaXRhbGl6ZShsaW5rLm5hbWUpO1xuICAgICAgICB0aGlzLmF0dHJzW2V2XSAmJiB0aGlzLmF0dHJzW2V2XS50cmlnZ2VyKHZhbHVlLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgICB9XG4gICAgfSk7ICBcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIGFuIGF0dHJpYnV0ZSBldmVudCBieSB0aGUgbmFtZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYXR0clRyaWdnZXJCeU5hbWUobmFtZSwgdmFsdWUpIHtcbiAgICBsZXQgbGlua3MgPSAodGhpcy5fX2F0dHJMaW5rc1tuYW1lXSB8fCBbXSkuY29uY2F0KHRoaXMuX19hdHRyTGlua3NbJyonXSB8fCBbXSk7XG4gICAgXG4gICAgaWYgKCFsaW5rcyB8fCAhbGlua3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAgXG4gICAgXG4gICAgbGlua3MgPSB1dGlscy5zb3J0KGxpbmtzLCBbJ2RhdGUnXSwgdHJ1ZSk7XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTsgICAgXG5cbiAgICAgIGlmIChsaW5rLmZuKSB7XG4gICAgICAgIEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBsaW5rLmZuLmNhbGwodGhpcywgdmFsdWUsIHV0aWxzLnRvRGFzaENhc2UobmFtZSkpKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmKCFsaW5rLmdldCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdGhpcy5fX2Rpc2FibGVLZXlzKGxpbmsua2V5cywgJ2F0dHInKTtcbiAgICAgIGxldCBjdXJyZW50ID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMobGluay5rZXlzLCB0aGlzLl9fc2NvcGUpO1xuICAgICAgIXV0aWxzLmNvbXBhcmUoY3VycmVudCwgdmFsdWUpICYmIHRoaXMuc2NvcGUuX19zZXQobGluay5rZXlzLCB2YWx1ZSk7XG4gICAgICB0aGlzLl9fZW5hYmxlS2V5cyhsaW5rLmtleXMsICdhdHRyJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBhdHRyaWJ1dGUgbGluayB3aXRoIHRoZSBzY29wZSBwcm9wZXJ0eVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hdHRyQnlLZXlzKG5hbWUsIGtleXMsIG9wdGlvbnMgPSB7fSkgeyAgIFxuICAgIG9wdGlvbnMgPSB7IGdldDogdHJ1ZSwgc2V0OiB0cnVlLCAuLi5vcHRpb25zIH07XG4gICAgbmFtZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKG5hbWUpO1xuXG4gICAgaWYgKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEF0dHJpYnV0ZSBsaW5rIFwiJHtuYW1lfVwiIG11c3QgaGF2ZSB0aGUgc2NvcGUgcHJvcGVydHkgbmFtZWApO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5fX2Rpc2FibGVLZXlzKGtleXMsICdhdHRyJyk7XG4gICAgKHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkobmFtZSkgfHwgIXV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19zY29wZSkpICYmIHRoaXMuc2NvcGUuX19zZXQoa2V5cywgdGhpcy5hdHRyc1tuYW1lXSk7IFxuICAgIHRoaXMuX19lbmFibGVLZXlzKGtleXMsICdhdHRyJyk7XG4gICAgbGV0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcbiAgICBcbiAgICBpZiAoIXRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXSkge1xuICAgICAgdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddID0gW107XG4gICAgfVxuXG4gICAgbGV0IGFyciA9IHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuXG4gICAgICBpZiAocmVzLm5hbWUgPT0gbmFtZSAmJiByZXMua2V5U3RyaW5nID09IGtleVN0cmluZykge1xuICAgICAgICByZXMuZ2V0ID0gb3B0aW9ucy5nZXQ7XG4gICAgICAgIHJlcy5zZXQgPSBvcHRpb25zLnNldDtcbiAgICAgICAgcmVzLmRhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddLnB1c2goeyBuYW1lLCBrZXlzLCBrZXlTdHJpbmcsIGRhdGU6IERhdGUubm93KCksIHNldDogb3B0aW9ucy5zZXQsIGdldDogb3B0aW9ucy5nZXQgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGF0dHJpYnV0ZSBsaW5rIHdpdGggdGhlIGZ1bmN0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkIFxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIF9fYXR0ckJ5RnVuY3Rpb24obmFtZSwgZm4sIG9wdGlvbnMgPSB7fSkgeyAgICBcbiAgICBuYW1lID0gdXRpbHMudG9DYW1lbENhc2UobmFtZSk7XG4gICAgbGV0IGNhbGwgPSBvcHRpb25zLmNhbGxPblN0YXJ0ID09PSB1bmRlZmluZWQ/IHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkobmFtZSk6IG9wdGlvbnMuY2FsbE9uU3RhcnQ7ICAgIFxuXG4gICAgaWYgKCF0aGlzLl9fYXR0ckxpbmtzW25hbWVdKSB7XG4gICAgICB0aGlzLl9fYXR0ckxpbmtzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYgKHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmZuID09PSBmbikge1xuICAgICAgICByZXMuZGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdGhpcy5fX2F0dHJMaW5rc1tuYW1lXS5wdXNoKHsgbmFtZSwgZm4sIGRhdGU6IERhdGUubm93KCkgfSk7XG5cbiAgICBpZiAobmFtZSA9PSAnKicgJiYgb3B0aW9ucy5jYWxsT25TdGFydCAhPT0gZmFsc2UpIHtcbiAgICAgIGxldCBhdHRyc0tleXMgPSBPYmplY3Qua2V5cyh0aGlzLl9fYXR0cnMpLmZpbHRlcihrID0+ICEodGhpcy5fX2F0dHJzW2tdIGluc3RhbmNlb2YgQWtpbGkuRXZlbnRFbWl0dGVyKSk7XG4gICAgICBsZXQgcCA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGF0dHJzS2V5cy5sZW5ndGggOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBhdHRyc0tleXNbaV07XG4gICAgICAgIGxldCB2YWwgPSB0aGlzLl9fYXR0cnNba2V5XTtcbiAgICAgICAgcC5wdXNoKEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBmbi5jYWxsKHRoaXMsIHZhbCwgdXRpbHMudG9EYXNoQ2FzZShrZXkpKSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwocCk7XG4gICAgfVxuICAgIFxuICAgIGlmIChjYWxsKSB7XG4gICAgICByZXR1cm4gQWtpbGkudW5pc29sYXRlKCgpID0+IGZuLmNhbGwodGhpcywgdGhpcy5hdHRyc1tuYW1lXSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGF0dHJpYnV0ZSBsaW5rIHdpdGggdGhlIHNjb3BlIHByb3BlcnR5XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYXR0ckJ5S2V5cyhuYW1lLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBoYXZlIHRvIHBhc3MgdGhlIHNjb3BlIHByb3BlcnR5IG5hbWUgZm9yIGF0dHJpYnV0ZSBsaW5rIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cblxuICAgIGxldCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG4gICAgbGV0IGFyciA9IHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXTtcblxuICAgIGlmICghYXJyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuXG4gICAgICBpZiAocmVzLm5hbWUgIT0gbmFtZSB8fCByZXMua2V5U3RyaW5nICE9IGtleVN0cmluZykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgYXJyLnNwbGljZShpLCAxKTtcbiAgICB9XG5cbiAgICBpZiAoIWFyci5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ107XG4gICAgfVxuICB9XG5cbiAgIC8qKlxuICAgKiBSZW1vdmUgdGhlIGF0dHJpYnV0ZSBsaW5rIHdpdGggdGhlIGZ1bmN0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmF0dHJCeUZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYgKCF0aGlzLl9fYXR0ckxpbmtzW25hbWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYgKHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmZuID09PSBmbikge1xuICAgICAgICBsaW5rcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghbGlua3MubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGtleSBpcyBzeXN0ZW1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pc1N5c3RlbUtleSAoa2V5KSB7XG4gICAgaWYgKGtleSA9PSAnX18nIHx8IChrZXlbMF0gPT0gJ18nICYmIGtleVsxXSA9PSAnXycpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoWydjb25zdHJ1Y3RvciddLmluZGV4T2Yoa2V5KSAhPSAtMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIE5lc3RlZCBvYnNlcnZpbmcgdGhlIHZhbHVlXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gW3N0YXJ0S2V5c11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19uZXN0ZWRPYnNlcnZlICh2YWx1ZSwgc3RhcnRLZXlzKSB7XG4gICAgY29uc3Qgb2JzZXJ2ZSA9ICh2YWx1ZSwgcGFyZW50cykgPT4ge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghdXRpbHMuaXNQbGFpbk9iamVjdCh2YWx1ZSkgJiYgIXV0aWxzLmlzU2NvcGVQcm94eSh2YWx1ZSkgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIFNjb3BlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGxldCB0YXJnZXQgPSB2YWx1ZTtcblxuICAgICAgQ0hFQ0tfUFJPWFk6IGlmICh2YWx1ZS5fX2lzUHJveHkpIHtcbiAgICAgICAgdGFyZ2V0ID0gdmFsdWUuX190YXJnZXQ7XG5cbiAgICAgICAgaWYgKHRoaXMuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nKSB7XG4gICAgICAgICAgYnJlYWsgQ0hFQ0tfUFJPWFk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChcbiAgICAgICAgICB2YWx1ZS5fX2NvbXBvbmVudCAhPT0gdGhpcyB8fFxuICAgICAgICAgIEFraWxpLmpvaW5CaW5kaW5nS2V5cyhwYXJlbnRzKSAhPSBBa2lsaS5qb2luQmluZGluZ0tleXModmFsdWUuX19rZXlzKVxuICAgICAgICApIHtcbiAgICAgICAgICB0YXJnZXQgPSB1dGlscy5jb3B5KHRhcmdldCwgeyBuZXN0ZWQ6IGZhbHNlIH0pO1xuICAgICAgICAgIHZhbHVlID0gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghdGhpcy5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIFNjb3BlKSkge1xuICAgICAgICB0YXJnZXQgPSB1dGlscy5jb3B5KHRhcmdldCwgeyBuZXN0ZWQ6IGZhbHNlIH0gKTsgICAgICAgICAgXG4gICAgICAgIHZhbHVlID0gdGFyZ2V0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBrIGluIHRhcmdldCkgeyAgICAgICAgXG4gICAgICAgIGlmICghdGFyZ2V0Lmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmFsID0gdGFyZ2V0W2tdOyAgICAgICAgXG4gICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrXSk7ICAgXG4gICAgICAgIHRhcmdldFtrXSA9IG9ic2VydmUodmFsLCBrZXlzKTsgIFxuICAgICAgfVxuXG4gICAgICBpZiAoIXZhbHVlLl9faXNQcm94eSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX29ic2VydmUodmFsdWUsIHBhcmVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcblxuICAgIGxldCByZXMgPSBvYnNlcnZlKHZhbHVlLCBzdGFydEtleXMgfHwgW10pO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAgLyoqXG4gICAqIENyZWF0ZSBhbiBpc29sYXRpb24gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHBhcmVudHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlbGV0ZWQ9ZmFsc2VdXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZUlzb2xhdGlvbk9iamVjdCAocGFyZW50cywga2V5LCBpc0RlbGV0ZWQgPSBmYWxzZSkge1xuICAgIGNvbnN0IGtleXMgPSBwYXJlbnRzLmxlbmd0aD8gW3BhcmVudHNbMF1dOiBba2V5XTtcbiAgICBjb25zdCBpc29sYXRpb25IYXNoID0gdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpO1xuXG4gICAgaWYgKHBhcmVudHMubGVuZ3RoKSB7XG4gICAgICBpc0RlbGV0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIUFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbkhhc2hdKSB7XG4gICAgICBBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25IYXNoXSA9IHtcbiAgICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgICBrZXlzXG4gICAgICB9O1xuICAgIH1cblxuICAgIChpc0RlbGV0ZWQgIT09IHVuZGVmaW5lZCkgJiYgKEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbkhhc2hdLmlzRGVsZXRlZCA9IGlzRGVsZXRlZCk7XG4gICAgcmV0dXJuIEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbkhhc2hdO1xuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgdGhlIG5vZGUgdG8gYmluZGluZ1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gYmluZCAtIGJ5IGRlZmF1bHQgaXMgY29tcG9uZW50Ll9fZXZhbHVhdGlvbi5saXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW25vdEJpbmRpbmc9ZmFsc2VdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2V2YWx1YXRlZD1mYWxzZV1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19iaW5kTm9kZShiaW5kLCByZWFsQ29tcG9uZW50LCBrZXlzLCBwYXJlbnRzLCB2YWx1ZSwgbm90QmluZGluZyA9IGZhbHNlLCBldmFsdWF0ZWQgPSBmYWxzZSkge1xuICAgIGxldCBwYXJlbnRLZXlzU3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKHBhcmVudHMpO1xuICAgIGxldCBjb21wb25lbnQgPSB0aGlzO1xuXG4gICAgaWYgKGJpbmQubGVuZ3RoICYmICFub3RCaW5kaW5nKSB7XG4gICAgICBsZXQgbCA9IGJpbmQubGVuZ3RoIC0gMTtcbiAgICAgIGxldCBkYXRhID0gYmluZFtsXTtcblxuICAgICAgaWYgKGRhdGEucmVhbENvbXBvbmVudCA9PT0gdGhpcyAmJiBkYXRhLmtleXNTdHJpbmcgPT0gcGFyZW50S2V5c1N0cmluZykge1xuICAgICAgICBjb21wb25lbnQgPSBkYXRhLmNvbXBvbmVudDtcbiAgICAgIH0gICAgICBcbiAgICAgIFxuICAgICAgaWYgKGRhdGEua2V5c1N0cmluZyA9PSBwYXJlbnRLZXlzU3RyaW5nICYmIGRhdGEuY29tcG9uZW50ID09PSBjb21wb25lbnQpIHtcbiAgICAgICAgYmluZC5zcGxpY2UobCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGJpbmQucHVzaCh7XG4gICAgICBjb21wb25lbnQsXG4gICAgICByZWFsQ29tcG9uZW50OiByZWFsQ29tcG9uZW50LFxuICAgICAga2V5c1N0cmluZzogQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpLFxuICAgICAgcGFyZW50cyxcbiAgICAgIGtleXMsXG4gICAgICB2YWx1ZSxcbiAgICAgIGV2YWx1YXRlZCxcbiAgICAgIG5vdEJpbmRpbmdcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUga2V5IGlzIHN5c3RlbSBiaW5kaW5nIHRoaW5nXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovIFxuICBfX2lzU3lzdGVtQmluZGluZ0tleShrZXkpIHtcbiAgICByZXR1cm4ga2V5ID09ICdfX2RhdGEnO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBiaW5kaW5nIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0QmluZChrZXlzKSB7XG4gICAgcmV0dXJuIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncykgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIG5lc3RlZCBiaW5kaW5ncyBieSBrZXlzXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKi9cbiAgX19nZXRBbGxCaW5kcyhrZXlzKSB7XG4gICAgY29uc3Qgcm9vdCA9IHRoaXMuX19nZXRCaW5kKGtleXMpO1xuXG4gICAgaWYgKCFyb290KSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgbGV0IGRhdGEgPSBbXTtcblxuICAgIGNvbnN0IGNvbGxlY3QgPSAob2JqKSA9PiB7XG4gICAgICBkYXRhID0gZGF0YS5jb25jYXQob2JqLl9fZGF0YSB8fCBbXSk7XG5cbiAgICAgIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoa2V5KSB8fCBrZXkgPT0gJ19fZGF0YScpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbGxlY3Qob2JqW2tleV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbGxlY3Qocm9vdCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGJpbmRpbmcgYnkga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0Qm91bmROb2RlKGtleXMsIG5vZGUpIHtcbiAgICBsZXQgYmluZCA9ICB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MpO1xuXG4gICAgaWYgKCFiaW5kIHx8ICFiaW5kLl9fZGF0YSB8fCAhYmluZC5fX2RhdGEubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGJpbmQuX19kYXRhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGRhdGEgPSBiaW5kLl9fZGF0YVtpXTtcblxuICAgICAgaWYgKGRhdGEubm9kZSA9PT0gbm9kZSkge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIG5vZGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtldmFsdWF0ZWQ9ZmFsc2VdXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzLCB2YWx1ZSwgZXZhbHVhdGVkID0gZmFsc2UpIHtcbiAgICBsZXQgcHJvcCA9IHRoaXMuX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cyk7ICAgIFxuICAgIGxldCBjb3B5ID0gdXRpbHMuY29weSh2YWx1ZSk7XG5cbiAgICBpZiAocHJvcCkge1xuICAgICAgbGV0IHJlcyA9IHV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlKHZhbHVlLCBwcm9wLnZhbHVlLCBwcm9wLmNvcHkpO1xuICAgICAgcHJvcC52YWx1ZSA9IHZhbHVlO1xuICAgICAgcHJvcC5jb3B5ID0gY29weTtcbiAgICAgIHJldHVybiAhcmVzO1xuICAgIH1cbiAgICBcbiAgICBub2RlLl9fcHJvcGVydGllc1t0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyldID0ge1xuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgdmFsdWUsXG4gICAgICBjb3B5LCAgICAgIFxuICAgICAga2V5cyxcbiAgICAgIGV2YWx1YXRlZCAgXG4gICAgfTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbm9kZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMpIHtcbiAgICByZXR1cm4gbm9kZS5fX3Byb3BlcnRpZXNbdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpXSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSB0aGUgbm9kZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RlbGV0ZU5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKSB7XG4gICAgbGV0IGhhc2ggPSBgJHt0aGlzLl9fc2NvcGUuX19uYW1lfS4ke0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKX1gO1xuICAgIGRlbGV0ZSBub2RlLl9fcHJvcGVydGllc1toYXNoXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgdGFnXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2FkZFRhZyh0YWcsIG5vZGUpIHtcbiAgICBpZighdGhpcy5fX3RhZ3NbdGFnXSkge1xuICAgICAgdGhpcy5fX3RhZ3NbdGFnXSA9IFtdOyAgICBcbiAgICB9XG5cbiAgICBpZighdGhpcy5fX2hhc1RhZyh0YWcpKSB7XG4gICAgICB0aGlzLl9fdGFnc1t0YWddLnB1c2goeyBub2RlIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgdGFnIGV4aXN0c1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRhZ1xuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIF9faGFzVGFnKHRhZywgbm9kZSkge1xuICAgIGlmKCF0aGlzLl9fdGFnc1t0YWddKSB7XG4gICAgICByZXR1cm4gZmFsc2U7ICAgIFxuICAgIH1cblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLl9fdGFnc1t0YWddLmxlbmd0aDsgaSA8IGw7IGkrKykgeyAgICBcbiAgICAgIGlmKHRoaXMuX190YWdzW3RhZ11baV0ubm9kZSA9PT0gbm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSB0YWdcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YWdcbiAgICogQHBhcmFtIHtOb2RlfSBbbm9kZV1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZW1vdmVUYWcgKHRhZywgbm9kZSkge1xuICAgIGlmKCFub2RlKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX3RhZ3NbdGFnXTtcbiAgICAgIHJldHVybjsgICAgXG4gICAgfVxuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuX190YWdzW3RhZ10ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZih0aGlzLl9fdGFnc1t0YWddW2ldLm5vZGUgPT09IG5vZGUpIHtcbiAgICAgICAgdGhpcy5fX3RhZ3NbdGFnXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKCF0aGlzLl9fdGFnc1t0YWddLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIHRoaXMuX190YWdzW3RhZ107XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgZGF0YSB3aXRoIHRoZSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19iaW5kKGtleXMsIGRhdGEpIHtcbiAgICB1dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MsIChsYXN0LCB2YWx1ZSkgPT4ge1xuICAgICAgbGV0IG9iaiA9IHsgX19kYXRhOiBbXSB9O1xuXG4gICAgICBpZiAoIWxhc3QpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlPyB2YWx1ZTogb2JqO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgICAgIG9iaiA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9iai5fX2RhdGEpIHtcbiAgICAgICAgb2JqLl9fZGF0YSA9IFtdO1xuICAgICAgfVxuXG4gICAgICBvYmouX19kYXRhLnB1c2goZGF0YSk7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCB0aGUga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5iaW5kKGtleXMpIHtcbiAgICBsZXQgYmluZCA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncyk7XG5cbiAgICBpZiAoIWJpbmQgfHwgIWJpbmQuX19kYXRhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBiaW5kLl9fZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBub2RlID0gYmluZC5fX2RhdGFbaV0ubm9kZTtcbiAgICAgIHRoaXMuX19kZWxldGVOb2RlUHJvcGVydHkobm9kZSwga2V5cyk7XG4gICAgfVxuXG4gICAgdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzLCAodmFsdWUpID0+IHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID4gMSkge1xuICAgICAgICB2YWx1ZS5fX2RhdGEgPSBbXTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgZGF0YSBieSBub2Rlc1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGVbXX0gbm9kZXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmJpbmRCeU5vZGVzKG5vZGVzKSB7XG4gICAgY29uc3QgdW5iaW5kID0gKG9iaikgPT4ge1xuICAgICAgZm9yIChsZXQgayBpbiBvYmopIHtcbiAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKGsgPT0gJ19fZGF0YScpIHtcbiAgICAgICAgICBsZXQgZGF0YSA9IG9ialtrXSB8fCBbXTtcbiAgICAgICAgICBsZXQgbCA9IGRhdGEubGVuZ3RoO1xuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBiaW5kID0gZGF0YVtpXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKG5vZGVzLmluZGV4T2YoYmluZC5ub2RlKSAhPSAtMSkgeyAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGRhdGEuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgIGwtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWwpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmpba107XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLl9faXNTeXN0ZW1CaW5kaW5nS2V5KGspKSB7XG4gICAgICAgICAgdW5iaW5kKG9ialtrXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIHVuYmluZCh0aGlzLl9fYmluZGluZ3MpO1xuICAgIHRoaXMuX19jbGVhckVtcHR5QmluZGluZ3MoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbGwgZW1wdHkgYmluZGluZ3NcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvYmpdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2xlYXJFbXB0eUJpbmRpbmdzKG9iaikge1xuICAgIGNvbnN0IGNsZWFyID0gKG9iaiwgcGFyZW50LCBrZXkpID0+IHtcbiAgICAgIGZvciAobGV0IGsgaW4gb2JqKSB7XG4gICAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmFsID0gb2JqW2tdO1xuXG4gICAgICAgIGlmIChrID09ICdfX2RhdGEnICYmICghdmFsIHx8ICF2YWwubGVuZ3RoKSkge1xuICAgICAgICAgIGRlbGV0ZSBvYmpba107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXRoaXMuX19pc1N5c3RlbUJpbmRpbmdLZXkoaykpIHtcbiAgICAgICAgICBpZiAoIU9iamVjdC5rZXlzKG9ialtrXSkubGVuZ3RoKSB7XG4gICAgICAgICAgICBkZWxldGUgb2JqW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsZWFyKG9ialtrXSwgb2JqLCBrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFPYmplY3Qua2V5cyhvYmopLmxlbmd0aCAmJiBwYXJlbnQpIHtcbiAgICAgICAgZGVsZXRlIHBhcmVudFtrZXldO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjbGVhcihvYmogfHwgdGhpcy5fX2JpbmRpbmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciB0aGUgbGlua3NcbiAgICogXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2xlYXJTdG9yZUxpbmtzKCkge1xuICAgIGNvbnN0IGxpbmtzID0gQWtpbGkuX19zdG9yZUxpbmtzO1xuXG4gICAgZm9yIChsZXQga2V5IGluIGxpbmtzKSB7XG4gICAgICBjb25zdCBhcnIgPSBsaW5rc1trZXldO1xuXG4gICAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBhcnJbaV07XG4gIFxuICAgICAgICBpZiAobGluay5jb21wb25lbnQgPT09IHRoaXMpIHtcbiAgICAgICAgICBhcnIuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghYXJyLmxlbmd0aCkge1xuICAgICAgICBkZWxldGUgbGlua3Nba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBjaGlsZCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcmVtb3ZlQ2hpbGRyZW4oKSB7XG4gICAgY29uc3QgcmVtb3ZlID0gKGNoaWxkcmVuKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIHJlbW92ZShjaGlsZC5fX2FraWxpLl9fY2hpbGRyZW4pO1xuICAgICAgICBjaGlsZC5fX2FraWxpLl9fcmVtb3ZlKCk7XG4gICAgICAgIGktLTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVtb3ZlKHRoaXMuX19jaGlsZHJlbik7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBjb21wb25lbnQgd2l0aG91dCBjaGlsZHJlbiByZW1vdmluZ1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlbW92ZSgpIHtcbiAgICB0aGlzLl9fZGV0YWNoKCk7XG4gICAgdGhpcy5fX2NsZWFyU3RvcmVMaW5rcygpO1xuICAgIHRoaXMuYXR0cnMub25SZW1vdmVkICYmIHRoaXMuYXR0cnMub25SZW1vdmVkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgIHRoaXMucmVtb3ZlZCgpOyAgICBcbiAgICBBa2lsaS5yZW1vdmVTY29wZSh0aGlzLl9fc2NvcGUuX19uYW1lKTsgICAgXG4gICAgdGhpcy5lbC5yZW1vdmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRhY2ggdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RldGFjaCgpIHtcbiAgICBpZiAodGhpcy5fX2V2YWx1YXRlUGFyZW50ICYmICF0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMpIHtcbiAgICAgIHRoaXMuX19ldmFsdWF0ZVBhcmVudC5fX2FraWxpLl9fdW5iaW5kQnlOb2RlcyhbXS5zbGljZS5jYWxsKHRoaXMuZWwuYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9fcGFyZW50KSB7XG4gICAgICB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19zcGxpY2VDaGlsZCh0aGlzLmVsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBjb21wb25lbnQgd2l0aCBjaGlsZHJlblxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2Rlc3Ryb3koKSB7XG4gICAgdGhpcy5fX3JlbW92ZUNoaWxkcmVuKCk7XG4gICAgdGhpcy5fX3JlbW92ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBjb21wb25lbnQgaHRtbFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2VtcHR5KCkge1xuICAgIGxldCBub2RlcyA9IFtdO1xuICAgIHRoaXMuX19yZW1vdmVDaGlsZHJlbigpO1xuXG4gICAgY29uc3QgZmluZCA9IChjaGlsZHJlbikgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlID09IDMpIHtcbiAgICAgICAgICBub2Rlcy5wdXNoKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaGlsZC5ub2RlVHlwZSA9PSAxICYmICFjaGlsZC5fX2FraWxpKSB7XG4gICAgICAgICAgZm9yIChsZXQgayA9IDAsIGF0dHJzID0gY2hpbGQuYXR0cmlidXRlcywgYyA9IGF0dHJzLmxlbmd0aDsgayA8IGM7IGsrKykge1xuICAgICAgICAgICAgbm9kZXMucHVzaChhdHRyc1tpXSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZmluZChjaGlsZC5jaGlsZE5vZGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgZmluZCh0aGlzLmVsLmNoaWxkTm9kZXMpO1xuICAgIHRoaXMuX191bmJpbmRCeU5vZGVzKG5vZGVzKTtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBwYXJlbnQgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kQWxsPXRydWVdIC0gZ2V0IGFycmF5IGlmIHRydWVcbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudHxDb21wb25lbnRbXX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRQYXJlbnQoc2VsZWN0b3IgPSAnJywgZmluZEFsbCA9IGZhbHNlLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGxldCBsZXZlbCA9IDA7XG5cbiAgICBpZiAodHlwZW9mIGxldmVscyAhPSAnb2JqZWN0Jykge1xuICAgICAgbGV2ZWxzID0gW2xldmVsc107XG4gICAgfVxuXG4gICAgY29uc3QgZmluZCA9IChwYXJlbnQpID0+IHtcbiAgICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFsZXZlbHMgfHwgbGV2ZWxzLmluZGV4T2YobGV2ZWwpICE9IC0xKSB7XG4gICAgICAgIGlmICghc2VsZWN0b3IgfHwgcGFyZW50Ll9fYWtpbGkubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICBpZiAoIWZpbmRBbGwpIHtcbiAgICAgICAgICAgIGFyci5wdXNoKHBhcmVudC5fX2FraWxpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhcnIucHVzaChwYXJlbnQuX19ha2lsaSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV2ZWwrKztcbiAgICAgIGZpbmQocGFyZW50Ll9fYWtpbGkuX19wYXJlbnQpO1xuICAgIH07XG5cbiAgICBmaW5kKHRoaXMuX19wYXJlbnQpO1xuICAgIHJldHVybiBmaW5kQWxsPyBhcnI6IChhcnJbMF0gfHwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNoaWxkIGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0Q2hpbGRyZW4oc2VsZWN0b3IgPSAnJywgZmluZEFsbCA9IHRydWUsIGxldmVscyA9IG51bGwpIHtcbiAgICBsZXQgYXJyID0gW107XG4gICAgbGV0IGxldmVsID0gMDtcblxuICAgIGlmICh0eXBlb2YgbGV2ZWxzICE9ICdvYmplY3QnKSB7XG4gICAgICBsZXZlbHMgPSBbbGV2ZWxzXTtcbiAgICB9XG5cbiAgICBjb25zdCBmaW5kID0gKGNoaWxkcmVuKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcblxuICAgICAgICBpZiAoIWxldmVscyB8fCBsZXZlbHMuaW5kZXhPZihsZXZlbCkgIT0gLTEpIHtcbiAgICAgICAgICBpZiAoIXNlbGVjdG9yIHx8IGNoaWxkLl9fYWtpbGkubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIGlmICghZmluZEFsbCkge1xuICAgICAgICAgICAgICBhcnIucHVzaChjaGlsZC5fX2FraWxpKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhcnIucHVzaChjaGlsZC5fX2FraWxpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV2ZWwrKztcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgZmluZChjaGlsZHJlbltpXS5fX2FraWxpLl9fY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmaW5kKHRoaXMuX19jaGlsZHJlbik7XG4gICAgcmV0dXJuIGZpbmRBbGw/IGFycjogKGFyclswXSB8fCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbmVhcmVzdCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZpbmRBbGw9dHJ1ZV0gLSBnZXQgYXJyYXkgaWYgdHJ1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyaWdodD1mYWxzZV0gLSBmcm9tIHRoZSByaWdodCBzaWRlIGlmIHRydWVcbiAgICogQHJldHVybnMge0NvbXBvbmVudHxDb21wb25lbnRbXX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXROZWFyKHNlbGVjdG9yID0gJycsIGZpbmRBbGwgPSB0cnVlLCByaWdodCA9IGZhbHNlKSB7XG4gICAgaWYgKCF0aGlzLl9fcGFyZW50KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgbGV2ZWxFbGVtZW50cyA9IHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2NoaWxkcmVuLnNsaWNlKCk7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIHJpZ2h0ICYmIGxldmVsRWxlbWVudHMucmV2ZXJzZSgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsZXZlbEVsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGVsID0gbGV2ZWxFbGVtZW50c1tpXTtcblxuICAgICAgaWYgKGVsID09PSB0aGlzLmVsKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXNlbGVjdG9yIHx8IGVsLl9fYWtpbGkubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgYXJyLnB1c2goZWwuX19ha2lsaSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYXJyLnJldmVyc2UoKTtcblxuICAgIGlmICghZmluZEFsbCkge1xuICAgICAgcmV0dXJuIGFyci5sZW5ndGg/IGFyclswXTogbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGxpbmsgdG8gdGhlIHN0b3JlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHN0b3JlKG5hbWUsIGhhbmRsZXIpIHtcbiAgICBpZiAoIXRoaXMuX19pc01vdW50ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTWV0aG9kIFwic3RvcmVcIiBtdXN0IGJlIGNhbGxlZCBhZnRlciB0aGUgY29tcGlsYXRpb24uIEZvciBleGFtcGxlLCBpbiBcImNvbXBpbGVkXCIgbWV0aG9kLmApO1xuICAgIH1cblxuICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodHlwZW9mIG5hbWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYXJncy51bnNoaWZ0KCcqJyk7XG4gICAgICBoYW5kbGVyID0gbmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbic/IHRoaXMuX19zdG9yZUJ5RnVuY3Rpb24oLi4uYXJncyk6IHRoaXMuX19zdG9yZUJ5S2V5cyguLi5hcmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBsaW5rIHdpdGggdGhlIGF0dHJpYnV0ZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfGZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBhdHRyKG5hbWUsIGhhbmRsZXIpIHtcbiAgICBpZiAoIXRoaXMuX19pc01vdW50ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTWV0aG9kIFwiYXR0clwiIG11c3QgYmUgY2FsbGVkIGFmdGVyIHRoZSBjb21waWxhdGlvbi4gRm9yIGV4YW1wbGUsIGluIFwiY29tcGlsZWRcIiBtZXRob2QuYCk7XG4gICAgfVxuXG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICh0eXBlb2YgbmFtZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhcmdzLnVuc2hpZnQoJyonKTtcbiAgICAgIGhhbmRsZXIgPSBuYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJz8gdGhpcy5fX2F0dHJCeUZ1bmN0aW9uKC4uLmFyZ3MpOiB0aGlzLl9fYXR0ckJ5S2V5cyguLi5hcmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHN0b3JlIGxpbmtcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXXxmdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgdW5zdG9yZShuYW1lLCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLl9faXNNb3VudGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE1ldGhvZCBcInVuc3RvcmVcIiBtdXN0IGJlIGNhbGxlZCBhZnRlciB0aGUgY29tcGlsYXRpb24uIEZvciBleGFtcGxlLCBpbiBcImNvbXBpbGVkXCIgbWV0aG9kLmApO1xuICAgIH1cblxuICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodHlwZW9mIG5hbWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYXJncy51bnNoaWZ0KCcqJyk7XG4gICAgICBoYW5kbGVyID0gbmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbic/IHRoaXMuX191bnN0b3JlQnlGdW5jdGlvbiguLi5hcmd1bWVudHMpOiB0aGlzLl9fdW5zdG9yZUJ5S2V5cyguLi5hcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgYXR0cmlidXRlIGxpbmtcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXXxmdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgdW5hdHRyKG5hbWUsIGhhbmRsZXIpIHtcbiAgICBpZiAoIXRoaXMuX19pc01vdW50ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTWV0aG9kIFwidW5hdHRyXCIgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgdGhlIGNvbXBpbGF0aW9uLiBGb3IgZXhhbXBsZSwgaW4gXCJjb21waWxlZFwiIG1ldGhvZC5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYgKHR5cGVvZiBuYW1lID09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFyZ3MudW5zaGlmdCgnKicpO1xuICAgICAgaGFuZGxlciA9IG5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nPyB0aGlzLl9fdW5hdHRyQnlGdW5jdGlvbiguLi5hcmd1bWVudHMpOiB0aGlzLl9fdW5hdHRyQnlLZXlzKC4uLmFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGNvbXBvbmVudCBtYXRjaGVzIHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBzZWxlY3RvclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIG1hdGNoZXMoc2VsZWN0b3IpIHtcbiAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBzZWxlY3Rvcih0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5lbC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBwYXJlbnQgY29tcG9uZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR9XG4gICAqL1xuICBwYXJlbnQoc2VsZWN0b3IgPSAnJywgbGV2ZWxzID0gbnVsbCkge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0UGFyZW50KHNlbGVjdG9yLCBmYWxzZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgcGFyZW50IGNvbXBvbmVudHMgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgcGFyZW50cyhzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRQYXJlbnQoc2VsZWN0b3IsIHRydWUsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNsb3Nlc3QgY2hpbGQgY29tcG9uZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR9XG4gICAqL1xuICBjaGlsZChzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRDaGlsZHJlbihzZWxlY3RvciwgZmFsc2UsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFycmF5IG9mIGNoaWxkIGNvbXBvbmVudHMgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgY2hpbGRyZW4oc2VsZWN0b3IgPSAnJywgbGV2ZWxzID0gbnVsbCkge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0Q2hpbGRyZW4oc2VsZWN0b3IsIHRydWUsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFycmF5IG9mIGNvbXBvbmVudHMgbGVmdCBmcm9tIHRoZSBjdXJyZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGJlZm9yZShzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCB0cnVlLCBmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFycmF5IG9mIGNvbXBvbmVudHMgcmlnaHQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBhZnRlcihzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCB0cnVlLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBjb21wb25lbnQgbGVmdCBmcm9tIHRoZSBjdXJyZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR9XG4gICAqL1xuICBwcmV2KHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIGZhbHNlLCBmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNsb3Nlc3QgY29tcG9uZW50IHJpZ2h0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIG5leHQoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgZmFsc2UsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBlbGVtZW50IHBhcmVudFxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHBhcmVudFxuICAgKi9cbiAgYXBwZW5kVG8ocGFyZW50KSB7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWwpO1xuICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB7IHNldFBhcmVudHM6IHRydWUsIGNoZWNrQ2hhbmdlczogZmFsc2UgfSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW5jZWwgY29tcG9uZW50IGNvbXBpbGF0aW9uXG4gICAqL1xuICBjYW5jZWwoKSB7XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ29tcGFsZSB0aGUgY29tcG9uZW50LCBidXQgY2FuY2VsIHRoZSBjb21waWxhdGlvbiBpbnNpZGUgb2YgaXRcbiAgICovXG4gIHByZXZlbnQoKSB7XG4gICAgdGhpcy5fX3ByZXZlbnQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGVsZW1lbnQgaHRtbFxuICAgKlxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIGVtcHR5KCkge1xuICAgIHJldHVybiB0aGlzLl9fZW1wdHkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgZWxlbWVudFxuICAgKlxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIHJlbW92ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2Rlc3Ryb3kuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7fVxuICBjb21waWxlZCgpIHt9XG4gIHJlY29tcGlsZWQoKSB7fVxuICByZXNvbHZlZCgpIHt9XG4gIHJlbW92ZWQoKSB7fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnQuanMiLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBSZXF1ZXN0IGNsYXNzLlxuICogQW4gaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBhbGxvd3MgeW91IHRvIG1ha2UgcmVxdWVzdHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvcmVxdWVzdHN9XG4gKi9cbmV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcbiAgX19jYWNoZSA9IHt9O1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVcmxcbiAgICogQHBhcmFtIHtvYmplY3R9IFtkZWZhdWx0c10gXG4gICAqL1xuICBjb25zdHJ1Y3RvcihiYXNlVXJsLCBkZWZhdWx0cykge1xuICAgIHRoaXMuYmFzZVVybCA9IGJhc2VVcmw/IChiYXNlVXJsLnJlcGxhY2UoL1xcLyQvLCAnJykgKyAnLycpOiAnJztcblxuICAgIHRoaXMuZGVmYXVsdHMgPSB7XG4gICAgICBzdGF0dXNFcnJvclBhdHRlcm46IC9eW14yM10vLFxuICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgLi4uKGRlZmF1bHRzIHx8IHt9KVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogU2VuZCByZXF1ZXN0IHdpdGggYW55IG1ldGhvZFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHF1ZXJ5KG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgb3B0aW9ucyA9IHsuLi50aGlzLmRlZmF1bHRzLCAuLi4ob3B0aW9ucyB8fCB7fSl9OyBcbiAgICAgIG9wdGlvbnMudXJsID0gdGhpcy5iYXNlVXJsPyBgJHt0aGlzLmJhc2VVcmx9JHtvcHRpb25zLnVybC5yZXBsYWNlKC9eXFwvLywgJycpfWA6IG9wdGlvbnMudXJsOyAgXG4gICAgICBvcHRpb25zLm1ldGhvZCA9IG9wdGlvbnMubWV0aG9kIHx8ICdHRVQnO1xuICAgICAgXG4gICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7ICAgICAgXG4gICAgICBjb25zdCBiZWZvcmUgPSB0aGlzLnRyYW5zZm9ybUJlZm9yZSh4aHIsIG9wdGlvbnMpO1xuICAgICAgeGhyID0gYmVmb3JlLnhocjtcbiAgICAgIG9wdGlvbnMgPSBiZWZvcmUub3B0aW9ucztcbiAgICAgICh0eXBlb2Ygb3B0aW9ucy5vblN0YXJ0ID09ICdmdW5jdGlvbicpICYmIG9wdGlvbnMub25TdGFydCh4aHIpOyAgXG4gICAgICBvcHRpb25zLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwge307XG4gICAgICBcbiAgICAgIGlmIChvcHRpb25zLmpzb24pIHtcbiAgICAgICAgb3B0aW9ucy5qc29uICE9PSB0cnVlICYmIChvcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShvcHRpb25zLmpzb24pKTtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzWydjb250ZW50LXR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgb3B0aW9ucy5yZXNwb25zZVR5cGUgPSBvcHRpb25zLnJlc3BvbnNlVHlwZSB8fCAnanNvbic7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChvcHRpb25zLmZvcm0pIHtcbiAgICAgICAgb3B0aW9ucy5ib2R5ID0gdGhpcy5jcmVhdGVGb3JtRGF0YShvcHRpb25zLmZvcm0pO1xuICAgICAgICBvcHRpb25zLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddID0gJ211bHRpcGFydC9mb3JtLWRhdGEnO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5wYXJhbXMpIHtcbiAgICAgICAgbGV0IHN0ciA9IHRoaXMucGFyYW1zVG9RdWVyeShvcHRpb25zLnBhcmFtcyk7XG4gICAgICAgIHN0ciAmJiAob3B0aW9ucy51cmwgKz0gXCI/XCIgKyBzdHIpO1xuICAgICAgfVxuICAgICAgICAgICBcbiAgICAgIGxldCBoYXNoID0gbnVsbDtcbiAgICAgIGxldCBjYWNoZSA9IHR5cGVvZiBvcHRpb25zLmNhY2hlID09ICdmdW5jdGlvbic/IG9wdGlvbnMuY2FjaGUob3B0aW9ucyk6IG9wdGlvbnMuY2FjaGU7XG4gICAgICAod2luZG93LkFLSUxJX1NFUlZFUiAmJiAhQWtpbGkuX19pbml0KSAmJiAoY2FjaGUgPSB0cnVlKTtcblxuICAgICAgaWYob3B0aW9ucy5tZXRob2QudG9VcHBlckNhc2UoKSA9PSAnR0VUJyAmJiAoIW9wdGlvbnMuYm9keSB8fCB0eXBlb2Ygb3B0aW9ucy5ib2R5ID09ICdzdHJpbmcnKSkge1xuICAgICAgICBoYXNoID0gdGhpcy5jcmVhdGVDYWNoZUhhc2goeyBcbiAgICAgICAgICB1cmw6IG9wdGlvbnMudXJsLCBcbiAgICAgICAgICBtZXRob2Q6IG9wdGlvbnMubWV0aG9kLFxuICAgICAgICAgIHVzZXI6IG9wdGlvbnMudXNlciwgXG4gICAgICAgICAgcGFzc3dvcmQ6IG9wdGlvbnMucGFzc3dvcmQsIFxuICAgICAgICAgIGJvZHk6IG9wdGlvbnMuYm9keSBcbiAgICAgICAgfSk7ICAgICAgICBcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYoY2FjaGUgJiYgaGFzaCkgeyAgICAgICAgXG4gICAgICAgIGxldCBfY2FjaGUgPSB0aGlzLmdldENhY2hlKGhhc2gpO1xuICAgICAgICBsZXQgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgaWYoX2NhY2hlICYmIChjYWNoZSA9PT0gdHJ1ZSB8fCBub3cgLSBfY2FjaGUuY3JlYXRlZEF0IDw9IGNhY2hlKSkge1xuICAgICAgICAgIHJldHVybiByZXNvbHZlKHRoaXMudHJhbnNmb3JtQWZ0ZXIoX2NhY2hlLnJlc3VsdCkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCBvcHRpb25zLnVybCwgdHJ1ZSwgb3B0aW9ucy51c2VyLCBvcHRpb25zLnBhc3N3b3JkKTtcblxuICAgICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ3RpbWVvdXQnKSkge1xuICAgICAgICB4aHIudGltZW91dCA9IG9wdGlvbnMudGltZW91dDtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMucmVzcG9uc2VUeXBlKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSBvcHRpb25zLnJlc3BvbnNlVHlwZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSBvcHRpb25zLndpdGhDcmVkZW50aWFscztcbiAgICAgIH1cblxuICAgICAgbGV0IGhlYWRlcktleXMgPSBPYmplY3Qua2V5cyhvcHRpb25zLmhlYWRlcnMpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGhlYWRlcktleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrID0gaGVhZGVyS2V5c1tpXTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaywgb3B0aW9ucy5oZWFkZXJzW2tdKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm9uUHJvZ3Jlc3MgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB4aHIub25wcm9ncmVzcyA9ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gb3B0aW9ucy5vblByb2dyZXNzKHhocik7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgICByZXNwb25zZTogeGhyLnJlc3BvbnNlLFxuICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgICAgICByZWFkeVN0YXRlOiB4aHIucmVhZHlTdGF0ZSxcbiAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHhoci53aXRoQ3JlZGVudGlhbHMsXG4gICAgICAgICAgcmVzcG9uc2VUeXBlOiB4aHIucmVzcG9uc2VUeXBlLFxuICAgICAgICAgIHJlc3BvbnNlVGV4dDogeGhyLnJlc3BvbnNlVHlwZSA9PSAndGV4dCc/IHhoci5yZXNwb25zZVRleHQ6ICcnLFxuICAgICAgICAgIHJlc3BvbnNlWE1MOiB4aHIucmVzcG9uc2VUeXBlID09ICdkb2N1bWVudCc/IHhoci5yZXNwb25zZVhNTDogJycsXG4gICAgICAgICAgcmVzcG9uc2VVUkw6IHhoci5yZXNwb25zZVVSTCxcbiAgICAgICAgICB0aW1lb3V0OiB4aHIudGltZW91dCxcbiAgICAgICAgICBoZWFkZXJzOiB0aGlzLmdldEhlYWRlcnMoeGhyKSwgICAgICAgICBcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHRoaXMudHJhbnNmb3JtQWZ0ZXIocmVzdWx0KTtcblxuICAgICAgICBpZiAob3B0aW9ucy5zdGF0dXNFcnJvclBhdHRlcm4gJiYgKHhoci5zdGF0dXMgKyAnJykubWF0Y2gob3B0aW9ucy5zdGF0dXNFcnJvclBhdHRlcm4pKSB7XG4gICAgICAgICAgbGV0IGVyciA9IG5ldyBFcnJvcihgUmVxdWVzdCB0byBcIiR7b3B0aW9ucy51cmx9XCIgcmV0dXJucyBmYWlsdXJlIHN0YXR1cyBjb2RlICR7eGhyLnN0YXR1c31gKTtcbiAgICAgICAgICBlcnIucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgIH0gXG5cbiAgICAgICAgaGFzaCAmJiB0aGlzLmNyZWF0ZUNhY2hlKGhhc2gsIHJlc3VsdCk7ICAgICAgICBcbiAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub250aW1lb3V0ID0gKCkgPT4ge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKGBSZXF1ZXN0IHRvIFwiJHtvcHRpb25zLnVybH1cIiB0aW1lZCBvdXRgKSk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub25lcnJvciA9IHJlamVjdDtcbiAgICAgIHhoci5zZW5kKG9wdGlvbnMuYm9keSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGhlYWRlcnMgb2YgYSBYTUxIdHRwUmVxdWVzdCBpbnN0YW5jZVxuICAgKiBcbiAgICogQHBhcmFtIHtYTUxIdHRwUmVxdWVzdH1cbiAgICovXG4gIGdldEhlYWRlcnMgPSBmdW5jdGlvbih4aHIpIHtcbiAgICBsZXQgaGVhZGVycyA9IHt9O1xuICAgIGxldCBzdHIgPSB4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCk7ICBcbiAgICBsZXQgYXJyID0gc3RyLnNwbGl0KCdcXHUwMDBkXFx1MDAwYScpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbGluZSA9IGFycltpXTtcbiAgICAgIGxldCBpbmRleCA9IGxpbmUuaW5kZXhPZignXFx1MDAzYVxcdTAwMjAnKTtcblxuICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICBsZXQga2V5ID0gbGluZS5zdWJzdHJpbmcoMCwgaW5kZXgpO1xuICAgICAgICBsZXQgdmFsID0gbGluZS5zdWJzdHJpbmcoaW5kZXggKyAyKTtcbiAgICAgICAgaGVhZGVyc1trZXldID0gdmFsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBoZWFkZXJzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjYWNoZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhhc2hcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIGdldENhY2hlKGhhc2gpIHtcbiAgICByZXR1cm4gdGhpcy5fX2NhY2hlW2hhc2hdIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGNhY2hlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGFzaFxuICAgKiBAcGFyYW0ge29iamVjdH0gcmVzdWx0XG4gICAqL1xuICBjcmVhdGVDYWNoZShoYXNoLCByZXN1bHQpIHtcbiAgICB0aGlzLl9fY2FjaGVbaGFzaF0gPSB7IHJlc3VsdCwgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLmdldFRpbWUoKSB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBjYWNoZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhhc2hcbiAgICovXG4gIHJlbW92ZUNhY2hlKGhhc2gpIHtcbiAgICBkZWxldGUgdGhpcy5fX2NhY2hlW2hhc2hdO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGhhc2ggdG8gc2F2ZSBpbiB0aGUgY2FjaGVcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBjcmVhdGVDYWNoZUhhc2goZGF0YSkge1xuICAgIGxldCBoYXNoID0gMDtcbiAgICBsZXQgc3RyID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0ICBjaGFyID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBjaGFyO1xuICAgICAgaGFzaCA9IGhhc2ggJiBoYXNoOyBcbiAgICB9XG5cbiAgICByZXR1cm4gaGFzaCArICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgb2JqZWN0IHRvIHF1ZXJ5IHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBwYXJhbXNUb1F1ZXJ5KG9iaikge1xuICAgIGxldCBzZXAgPSAnJic7XG4gICAgbGV0IGVxID0gJz0nO1xuXG4gICAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5tYXAoKGspID0+IHtcbiAgICAgIGxldCBrcyA9IGVuY29kZVVSSUNvbXBvbmVudChrKTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgICBrcyA9IGVuY29kZVVSSUNvbXBvbmVudChrKTtcbiAgICAgICAgcmV0dXJuIG9ialtrXS5tYXAoKHYsIGkpID0+IGtzICsgYFske2l9XWAgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudCh2KSkuam9pbihzZXApO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAob2JqW2tdICYmIHR5cGVvZiBvYmpba10gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGxldCBvcHQgPSBbXTtcbiAgICAgICAgT2JqZWN0LmtleXMob2JqW2tdKS5tYXAoKGtleSkgPT4gb3B0LnB1c2goa3MgKyBgWyR7a2V5fV1gICsgZXEgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tdW2tleV0pKSk7XG4gICAgICAgIHJldHVybiBvcHQuam9pbihzZXApO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBrcyArIGVxICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrXSk7XG4gICAgICB9XG4gICAgfSkuam9pbihzZXApO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgcXVlcnkgc3RyaW5nIHRvIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICBwYXJhbXNGcm9tUXVlcnkoc3RyKSB7XG4gICAgbGV0IHF1ZXJ5ID0ge307XG4gICAgbGV0IGFtcHMgPSBzdHIuc3BsaXQoJyYnKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYW1wcy5sZW5ndGg7IGkgPGw7IGkrKykge1xuICAgICAgbGV0IGVxcyA9ICBhbXBzW2ldLnNwbGl0KCc9Jyk7XG4gICAgICBsZXQga2V5ID0gZGVjb2RlVVJJQ29tcG9uZW50KGVxc1swXSk7XG4gICAgICBsZXQgdmFsID0gZGVjb2RlVVJJQ29tcG9uZW50KGVxc1sxXSk7XG5cbiAgICAgIGlmICgha2V5KSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgICBxdWVyeVtrZXldLnB1c2godmFsKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHF1ZXJ5W2tleV0pIHtcbiAgICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldLCB2YWxdO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHF1ZXJ5W2tleV0gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBtdWx0aXBhcnQgZm9ybSBkYXRhIGZyb20gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICogQHBhcmFtIHtGb3JtRGF0YX0gW2RhdGFdXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbmFtZXNwYWNlXSAgICpcbiAgICogQHJldHVybnMge0Zvcm1EYXRhfVxuICAgKi9cbiAgY3JlYXRlRm9ybURhdGEob2JqLCBkYXRhID0gbnVsbCwgbmFtZXNwYWNlID0gJycpIHtcbiAgICBsZXQgZmQgPSBkYXRhIHx8IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgZm9yIChsZXQgayBpbiBvYmopIHtcbiAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaykgJiYgb2JqW2tdKSB7XG4gICAgICAgIGxldCBrZXkgPSBuYW1lc3BhY2U/IG5hbWVzcGFjZSArICdbJyArIGsgKyAnXSc6IGs7XG5cbiAgICAgICAgaWYgKG9ialtrXSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICBmZC5hcHBlbmQoa2V5LCBvYmpba10udG9JU09TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodXRpbHMuaXNQbGFpbk9iamVjdChvYmpba10pKSB7XG4gICAgICAgICAgdGhpcy5jcmVhdGVGb3JtRGF0YShvYmpba10sIGZkLCBrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGZkLmFwcGVuZChrZXksIG9ialtrXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmQ7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIGRhdGEgYmVmb3JlIGEgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge1hNTEh0dHBSZXF1ZXN0fSB4aHJcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHRyYW5zZm9ybUJlZm9yZSh4aHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4geyB4aHIsIG9wdGlvbnMgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBkYXRhIGFmdGVyIGEgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gcmVzdWx0XG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICB0cmFuc2Zvcm1BZnRlcihyZXN1bHQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ucmVzdWx0LFxuICAgICAgZGF0YTogcmVzdWx0LnJlc3BvbnNlLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgR0VUIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGdldCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ0dFVCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBERUxFVEUgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZGVsZXRlKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnREVMRVRFJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIFBPU1QgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcG9zdCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ1BPU1QnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgUFVUIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHB1dCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ1BVVCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBQQVRDSCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBwYXRjaCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ1BBVENIJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgIC8qKlxuICAgKiAgTWFrZSBIRUFEIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGhlYWQodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdIRUFEJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG59XG5cbmNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCgpO1xuXG4vKipcbiAqIFNldCByb3V0ZXIncyBkZWZhdWx0IHZhcmlhYmxlc1xuICovXG5yZXF1ZXN0LnNldERlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9faW5zdGFuY2VzID0ge307XG4gIHRoaXMuX19jYWNoZSA9IHt9O1xufVxuXG4vKipcbiAqIEFkZCBuZXcgcmVxdWVzdCBpbnN0YW5jZSB0byB0aGUgbWFpbiBzZXJ2aWNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7UmVxdWVzdH0gaW5zdGFuY2VcbiAqL1xucmVxdWVzdC5hZGRJbnN0YW5jZSA9IGZ1bmN0aW9uKG5hbWUsIGluc3RhbmNlKSB7XG4gIHRoaXMuX19pbnN0YW5jZXNbbmFtZV0gPSBpbnN0YW5jZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGluc3RhbmNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucmVxdWVzdC5yZW1vdmVJbnN0YW5jZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZGVsZXRlIHRoaXMuX19pbnN0YW5jZXNbbmFtZV07XG59O1xuXG4vKipcbiAqIERlaW5pdCByb3V0ZXJcbiAqL1xucmVxdWVzdC5kZWluaXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zZXREZWZhdWx0cygpO1xufTtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWVzdCwgJ3VzZScsIHtcbiAgZ2V0OiAoKSA9PiB7XG4gICAgcmV0dXJuIHJlcXVlc3QuX19pbnN0YW5jZXM7XG4gIH1cbn0pO1xuXG5yZXF1ZXN0LlJlcXVlc3QgPSBSZXF1ZXN0O1xuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdDtcbnJlcXVlc3Quc2V0RGVmYXVsdHMoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvcmVxdWVzdC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcblxuLyoqXG4gKiBCYXNlIGNvbXBvbmVudCB0byB3b3JrIHdpdGggdGV4dCBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW5wdXR9XG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc190ZXh0YXJlYX1cbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NvbnRlbnRlZGl0YWJsZX1cbiAqIFxuICogQGF0dHIge3N0cmluZ30gdmFsdWUgLSBhY3R1YWwgdmFsdWVcbiAqIEBhdHRyIHtib29sZWFufSBmb2N1cyAtIHNldCB0aGUgZm9jdXMgb3Igbm90XG4gKiBAYXR0ciB7bnVtYmVyfSBkZWJvdW5jZSAtIGRlYm91bmNlIGRlbGF5XG4gKiBAbWVzc2FnZSB7dm9pZH0gZGVib3VuY2UgLSBzZW50IG9uIHRoZSBkZWJvdW5jZSB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbnB1dH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMudmFsdWVLZXkgPSAndmFsdWUnO1xuICAgIHRoaXMuZGVib3VuY2VJbnRlcnZhbCA9IDUwMDtcbiAgICB0aGlzLmRlYm91bmNlVGltZW91dCA9IG51bGw7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICBpZih0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnb24tZGVib3VuY2UnKSkge1xuICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHsgICAgICAgIFxuICAgICAgICB0aGlzLmRlYm91bmNlVGltZW91dCAmJiBjbGVhclRpbWVvdXQodGhpcy5kZWJvdW5jZVRpbWVvdXQpO1xuICAgICAgICB0aGlzLmRlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuYXR0cnMub25EZWJvdW5jZS50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgICAgICB9LCB0aGlzLmRlYm91bmNlSW50ZXJ2YWwpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5hdHRyKCdmb2N1cycsIHRoaXMuc2V0Rm9jdXMpO1xuICAgIHRoaXMuYXR0cigndmFsdWUnLCB0aGlzLnNldFZhbHVlKTtcbiAgICB0aGlzLmF0dHIoJ2RlYm91bmNlJywgdGhpcy5zZXREZWJvdW5jZSk7XG4gIH1cblxuICByZW1vdmVkKCkge1xuICAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ICYmIGNsZWFyVGltZW91dCh0aGlzLmRlYm91bmNlVGltZW91dCk7XG4gIH1cblxuICBzZXREZWJvdW5jZShpbnRlcnZhbCkge1xuICAgIHRoaXMuZGVib3VuY2VJbnRlcnZhbCA9ICtpbnRlcnZhbDtcbiAgfVxuXG4gIHNldEZvY3VzKHZhbHVlKSB7XG4gICAgdmFsdWU/IHRoaXMuc2V0RWxlbWVudEZvY3VzKCk6IHRoaXMuc2V0RWxlbWVudEJsdXIoKTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgKHRoaXMuZWxbdGhpcy52YWx1ZUtleV0gIT09IHZhbHVlKSAmJiAodGhpcy5lbFt0aGlzLnZhbHVlS2V5XSA9IHZhbHVlID09PSAwPyAnMCc6ICh2YWx1ZSB8fCAnJykpO1xuICB9XG5cbiAgc2V0RWxlbWVudEZvY3VzKCkge1xuICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgfVxuXG4gIHNldEVsZW1lbnRCbHVyKCkge1xuICAgIHRoaXMuZWwuYmx1cigpO1xuICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RleHQuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGxvb3BzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19sb29wc31cbiAqIFxuICogQHRhZyBmb3JcbiAqIEBzZWxlY3RvciBmb3JbaW5dLG9sW2luXSx1bFtpbl0sdGhlYWRbaW5dLHRib2R5W2luXSx0Zm9vdFtpbl1cbiAqIEBhdHRyIHtvYmplY3R8YXJyYXl9IGluIC0gZGF0YSB0byBjcmVhdGUgdGhlIGxvb3BcbiAqIEBtZXNzYWdlIHtvYmplY3R8YXJyYXl9IG91dCAtIHNlbnQgb24gdGhlIGRhdGEgY2hhbmdlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tpbl0nO1xuICBzdGF0aWMgZXZlbnRzID0gWydvdXQnXTtcbiAgc3RhdGljIHNhdmVBdHRyaWJ1dGVQcm94eUluID0gdHJ1ZTsgIFxuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdmb3InLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ29sJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd1bCcsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGhlYWQnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3Rib2R5JywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0Zm9vdCcsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndHInLCB0aGlzLkxvb3ApO1xuICAgIEFraWxpLmNvbXBvbmVudCgnbG9vcCcsIHRoaXMuTG9vcCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgXG4gICAgdGhpcy5pdGVyYXRvcnMgPSBbXTtcbiAgICB0aGlzLml0ZXJhdG9yUmVmID0gbnVsbDtcbiAgICB0aGlzLml0ZXJhdG9yT3V0ZXJIVE1MID0gbnVsbDtcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH1cblxuICBjcmVhdGVkKCkgeyAgICBcbiAgICB0aGlzLmNyZWF0ZUl0ZXJhdG9yKCk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ2luJywgdGhpcy5kcmF3KTtcbiAgfVxuXG4gIGNyZWF0ZUl0ZXJhdG9yKCkge1xuICAgIGxldCBlbDtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuZWwuY2hpbGRyZW5baV07XG5cbiAgICAgIGlmIChjaGlsZC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpID09ICdsb29wJykge1xuICAgICAgICBlbCA9IGNoaWxkO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZWwgPSBjaGlsZDtcbiAgICB9XG5cbiAgICBpZiAoIWVsKSB7XG4gICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xvb3AnKTsgICAgICBcbiAgICAgIGVsLmlubmVySFRNTCA9IHRoaXMuZWwuaW5uZXJIVE1MOyBcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7ICAgICBcbiAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoZWwpO1xuICAgIH1cblxuICAgIGxldCBjb21wb25lbnROYW1lID0gZWwuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKTtcblxuICAgIGlmIChjb21wb25lbnROYW1lICE9ICdsb29wJykge1xuICAgICAgbGV0IGNvbXBvbmVudCA9IEFraWxpLmNvbXBvbmVudChjb21wb25lbnROYW1lIHx8IGVsLnRhZ05hbWUpO1xuXG4gICAgICBpZiAoIWNvbXBvbmVudCkge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcsICdsb29wJyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghKGNvbXBvbmVudC5wcm90b3R5cGUgaW5zdGFuY2VvZiBGb3IpKSB7XG4gICAgICAgIGxldCBtYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbG9vcCcpO1xuICAgICAgICBtYXNrLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgZWwgPSBtYXNrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaHRtbCA9IGVsLmlubmVySFRNTDtcbiAgICB0aGlzLml0ZXJhdG9yUmVmID0gZWwubmV4dFNpYmxpbmc7XG4gICAgdGhpcy5pdGVyYXRvck91dGVySFRNTCA9IGVsLm91dGVySFRNTDtcbiAgICBlbC5yZW1vdmUoKTtcbiAgfVxuXG4gIGNyZWF0ZUl0ZXJhdG9yRWxlbWVudCgpIHtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIGVsLmlubmVySFRNTCA9IHRoaXMuaXRlcmF0b3JPdXRlckhUTUw7XG4gICAgZWwgPSBlbC5jb250ZW50LmZpcnN0Q2hpbGQ7XG4gICAgcmV0dXJuIGVsO1xuICB9XG5cbiAgbG9vcChrZXksIHZhbHVlLCBpbmRleCkge1xuICAgIHRoaXMuX19pbmRleCA9IGluZGV4O1xuICAgIHRoaXMuX19rZXkgPSBrZXk7XG4gICAgdGhpcy5fX3ZhbHVlID0gdmFsdWU7ICAgIFxuICAgIHRoaXMuX19jb21wYXJpc29uVmFsdWUgPSB1dGlscy5jb3B5KHZhbHVlKTtcblxuICAgIGlmKHRoaXMuaXRlcmF0b3JzLmxlbmd0aCA+IGluZGV4KSB7XG4gICAgICBsZXQgaXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yc1tpbmRleF07XG4gICAgICBsZXQgY0NvcHkgPSBpdGVyYXRvci5jb21wYXJzaW9uLmNvcHk7XG4gICAgICAgIFxuICAgICAgaWYgKHRoaXMuX19pbmRleCAhPT0gaXRlcmF0b3IuaW5kZXgpIHtcbiAgICAgICAgaXRlcmF0b3Iuc2V0SW5kZXgoKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpdGVyYXRvci5zZXRJbmRleCh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX19rZXkgIT09IGl0ZXJhdG9yLmtleSkge1xuICAgICAgICBpdGVyYXRvci5zZXRLZXkoKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpdGVyYXRvci5zZXRLZXkodHJ1ZSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmICghdXRpbHMuY29tcGFyZShjQ29weSwgdGhpcy5fX2NvbXBhcmlzb25WYWx1ZSwgeyBpZ25vcmVVbmRlZmluZWQ6IHRydWUgfSkpIHtcbiAgICAgICAgaXRlcmF0b3Iuc2V0VmFsdWUoKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpdGVyYXRvci5zZXRWYWx1ZSh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fX3Byb21pc2VzLnB1c2goQWtpbGkuY29tcGlsZShpdGVyYXRvci5lbCwgeyByZWNvbXBpbGU6IHsgY2hlY2tDaGFuZ2VzOiB0cnVlIH0gfSkpO1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgIH1cbiAgICBcbiAgICBsZXQgZWwgPSB0aGlzLmNyZWF0ZUl0ZXJhdG9yRWxlbWVudCgpO1xuICAgIGVsLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcbiAgICB0aGlzLmVsLmluc2VydEJlZm9yZShlbCwgdGhpcy5pdGVyYXRvclJlZik7XG4gICAgdGhpcy5fX3Byb21pc2VzLnB1c2goQWtpbGkuY29tcGlsZShlbCkpO1xuICAgIHRoaXMuaXRlcmF0b3JzLnB1c2goZWwuX19ha2lsaSk7XG4gICAgcmV0dXJuIGVsLl9fYWtpbGk7XG4gIH1cblxuICBkcmF3KGRhdGEpIHtcbiAgICBpZiAodHlwZW9mIGRhdGEgIT0gJ29iamVjdCcgfHwgZGF0YSA9PT0gbnVsbCkge1xuICAgICAgaWYgKEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS53YXJuKGBcIkZvclwiIGNvbXBvbmVudCBcImluXCIgYXR0cmlidXRlIHZhbHVlIHR5cGUgbXVzdCBiZSBhbiBvYmplY3QvYXJyYXlgKTsgICAgICAgIFxuICAgICAgfVxuXG4gICAgICBkYXRhID0gW107XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhID0gZGF0YTsgICBcbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgY29uc3QgbG9vcCA9IChrZXksIHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IGl0ZXJhdG9yID0gdGhpcy5sb29wKGtleSwgdmFsdWUsIGluZGV4KTtcbiAgICAgIGl0ZXJhdG9yLml0ZXJhdGUoaW5kZXgpO1xuICAgIH07XG5cbiAgICBpZihBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICBmb3IgKGxldCBsID0gZGF0YS5sZW5ndGg7IGluZGV4IDwgbDsgaW5kZXgrKykge1xuICAgICAgICBsb29wKGluZGV4LCBkYXRhW2luZGV4XSwgaW5kZXgpO1xuICAgICAgfSAgICAgXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKTtcblxuICAgICAgZm9yIChsZXQgbCA9IGtleXMubGVuZ3RoOyBpbmRleCA8IGw7IGluZGV4KyspIHtcbiAgICAgICAgbGV0IGtleSA9IGtleXNbaW5kZXhdO1xuICAgICAgICBsb29wKGtleSwgZGF0YVtrZXldLCBpbmRleCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IGluZGV4LCBsID0gdGhpcy5pdGVyYXRvcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgaXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yc1tpXTtcbiAgICAgIGl0ZXJhdG9yLl9fZGVzdHJveSgpO1xuICAgICAgdGhpcy5pdGVyYXRvcnMuc3BsaWNlKGksIDEpO1xuICAgICAgbC0tO1xuICAgICAgaS0tO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLmFsbCh0aGlzLl9fcHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgdGhpcy5hdHRycy5vbk91dC50cmlnZ2VyKGRhdGEsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICB9KTsgICAgXG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGhlIGluaXRpYWwgc3RhdGVcbiAgICovXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuX19pdGVyYXRvciA9IG51bGw7XG4gICAgdGhpcy5fX2luZGV4ID0gMDtcbiAgICB0aGlzLl9fa2V5ID0gJyc7XG4gICAgdGhpcy5fX3ZhbHVlID0gbnVsbDtcbiAgICB0aGlzLl9fY29tcGFyaXNvblZhbHVlID0gbnVsbDtcbiAgICB0aGlzLl9fcHJvbWlzZXMgPSBbXTtcbiAgfVxufVxuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgbG9vcHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2xvb3BzfVxuICogXG4gKiBAdGFnIGxvb3BcbiAqIEBzZWxlY3RvciBsb29wLHRyXG4gKiBAYXR0ciBAc2VlIEZvclxuICogQHNjb3BlIHsqfSBsb29wVmFsdWUgLSBkYXRhIGl0ZW0ncyB2YWx1ZSBvZiB0aGUgY3VycmVudCBpdGVyYXRpb24gXG4gKiBAc2NvcGUge3N0cmluZ3xudW1iZXJ9IGxvb3BLZXkgLSBrZXkgb2YgdGhlIGl0ZXJhdGlvblxuICogQHNjb3BlIHtudW1iZXJ9IGxvb3BJbmRleCAtIGluZGV4IG9mIHRoZSBpdGVyYXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIExvb3AgZXh0ZW5kcyBGb3Ige1xuICBzdGF0aWMgbWF0Y2hlcyA9ICcnO1xuICBzdGF0aWMgY29udHJvbEF0dHJpYnV0ZXMgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuZm9yID0gbnVsbDtcbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmlzRm9yID0gdGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ2luJyk7XG5cbiAgICBpZiAoIXRoaXMuaXNGb3IgJiYgISh0aGlzLmVsLnBhcmVudE5vZGUuX19ha2lsaSBpbnN0YW5jZW9mIEZvcikpIHtcbiAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19pdGVyYXRvciA9IHRoaXM7XG4gICAgdGhpcy5mb3IgPSB0aGlzLl9fcGFyZW50Ll9fYWtpbGk7XG4gICAgdGhpcy5zZXRJbmRleCh0cnVlKTtcbiAgICB0aGlzLnNldEtleSh0cnVlKTtcbiAgICB0aGlzLnNldFZhbHVlKHRydWUpO1xuXG4gICAgaWYodGhpcy5pc0Zvcikge1xuICAgICAgcmV0dXJuIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICBpZih0aGlzLmlzRm9yKSB7XG4gICAgICByZXR1cm4gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBzZXRJbmRleCh0YXJnZXQpIHtcbiAgICB0aGlzLmluZGV4ID0gdGhpcy5mb3IuX19pbmRleDtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wSW5kZXgnLCB0aGlzLmluZGV4LCBmYWxzZSwgdGFyZ2V0KTtcbiAgfVxuXG4gIHNldEtleSh0YXJnZXQpIHtcbiAgICB0aGlzLmtleSA9IHRoaXMuZm9yLl9fa2V5O1xuICAgIHRoaXMuc2NvcGUuX19zZXQoJ2xvb3BLZXknLCB0aGlzLmtleSwgZmFsc2UsIHRhcmdldCk7XG4gIH1cblxuICBzZXRWYWx1ZSh0YXJnZXQpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3IuX192YWx1ZTtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wVmFsdWUnLCB0aGlzLnZhbHVlLCB0cnVlLCB0YXJnZXQpO1xuXG4gICAgdGhpcy5jb21wYXJzaW9uID0ge1xuICAgICAgY29weTogdGhpcy5mb3IuX19jb21wYXJpc29uVmFsdWUsXG4gICAgICB2YWx1ZTogdGhpcy5mb3IuX192YWx1ZVxuICAgIH07XG4gIH1cblxuICBpdGVyYXRlKCkge31cbn1cblxuRm9yLkxvb3AgPSBMb29wO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Zvci5qcyIsImltcG9ydCBBa2lsaSBmcm9tICcuL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcblxuLyoqXG4gKiBTY29wZSBjbGFzcy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9zY29wZX1cbiAqXG4gKiBBbGwgcHJvcGVydGllcyBzdGFydGluZyB3aXRoIF9fIGFyZSBub3QgbW9uaXRvcmVkLlxuICogWW91IGNhbiB1c2UgdGhlbSBmb3IgaW50ZXJuYWwgbWFuaXB1bGF0aW9ucy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcGUge1xuICBzdGF0aWMgbmVzdGVkV2F0Y2hpbmc7XG5cbiAgY29uc3RydWN0b3IobmFtZSwgZWwsIGNvbXBvbmVudCkge1xuICAgIHRoaXMuX19uYW1lID0gbmFtZTtcbiAgICB0aGlzLl9fZWwgPSBlbDtcbiAgICB0aGlzLl9fY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIGVsLnNldEF0dHJpYnV0ZSgnc2NvcGUnLCBuYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYSBzY29wZSB2YWx1ZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3N0cmljdD1mYWxzZV0gLSB3aXRob3V0IG9iamVjdCBjb3B5aW5nXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0KGtleXMsIHZhbHVlLCBzdHJpY3QgPSBmYWxzZSwgdGFyZ2V0ID0gZmFsc2UpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuICAgIFxuICAgIEFraWxpLnVuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICBzdHJpY3QgJiYgKHRoaXMuX19jb21wb25lbnQuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nID0gdHJ1ZSk7XG4gICAgICB1dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0YXJnZXQ/IHRoaXMuX190YXJnZXQ6IHRoaXMsIChsYXN0LCB2YWwpID0+IHtcbiAgICAgICAgaWYgKCFsYXN0KSB7XG4gICAgICAgICAgcmV0dXJuIHZhbCB8fCB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgc3RyaWN0ICYmICh0aGlzLl9fY29tcG9uZW50Ll9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyA9IGZhbHNlKTtcbiAgICB9KTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY29wZS5qcyIsImltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJztcblxuLyoqXG4gKiBDbGFzcyBmb3Igd29ya2luZyB3aXRoIGV2ZW50cy5cbiAqIEFuIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgYWxsb3dzIHlvdSB0byB0cmlnZ2VyIGN1c3RvbSBqYXZhc2NyaXB0IGV2ZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9ldmVudHN9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVsLCBjb21wb25lbnQpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICB0aGlzLmVsQ29tcG9uZW50ID0gdGhpcy5lbC5fX2FraWxpIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciB0aGUgZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIHsqfSBkYXRhIC0gc2VuZGluZyBkYXRhLiBXaWxsIGJlIGluIHRoZSBldmVudC5kZXRhaWxcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZV1cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICB0cmlnZ2VyKGRhdGEsIG9wdGlvbnMgPSB7fSwgZm9yY2UgPSBmYWxzZSkge1xuICAgIGlmIChmb3JjZSB8fCAhdGhpcy5pbkV2YWx1YXRpbmcoKSkge1xuICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCh0aGlzLm5hbWUsIHRoaXMucHJlcGFyZU9wdGlvbnMoeyBkZXRhaWw6IGRhdGEsICAuLi5vcHRpb25zIH0pKSk7XG4gICAgfSAgIFxuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoIHRoZSBldmVudFxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBfRXZlbnQgLSBjbGFzcyBvZiB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZV1cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBkaXNwYXRjaChfRXZlbnQsIG9wdGlvbnMgPSB7fSwgZm9yY2UgPSBmYWxzZSkge1xuICAgIGlmIChmb3JjZSB8fCAhdGhpcy5pbkV2YWx1YXRpbmcoKSkge1xuICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnQodGhpcy5uYW1lLCB0aGlzLnByZXBhcmVPcHRpb25zKG9wdGlvbnMpKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFByZXBlcmUgYW4gZXZlbnQgb3B0aW9uc1xuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSBcbiAgICovXG4gIHByZXBhcmVPcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSB7IGJ1YmJsZXM6IHRydWUsIC4uLm9wdGlvbnMgfTsgIFxuICAgIHRoaXMuZWxDb21wb25lbnQgJiYgIXRoaXMuZWxDb21wb25lbnQuX19zYXZlQXR0cmlidXRlUHJveHlPdXQgJiYgKG9wdGlvbnMuZGV0YWlsID0gdXRpbHMuY29weShvcHRpb25zLmRldGFpbCkpO1xuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGV2ZW50IGNhbGxiYWNrIGRvZXNuJ3QgcnVuIHJlY3Vyc2l2ZVxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGluRXZhbHVhdGluZygpIHtcbiAgICBsZXQgZGF0YSA9IHRoaXMuY29tcG9uZW50Ll9fZXZhbHVhdGluZ0V2ZW50O1xuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGEuZWwgPT09IHRoaXMuZWwgJiYgZGF0YS5ldmVudC50eXBlID09PSB0aGlzLm5hbWUgJiYgZGF0YS5jb21wb25lbnQgPT09IHRoaXMuY29tcG9uZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgdGhlIGZ1bmN0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gICAqL1xuICBiaW5kKGZuKSB7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKHRoaXMubmFtZSwgdGhpcy5mbiA9IGZuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgdGhlIGZ1bmN0aW9uXG4gICAqL1xuICB1bmJpbmQoKSB7XG4gICAgdGhpcy5mbiAmJiB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5uYW1lLCB0aGlzLmZuKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ldmVudC1lbWl0dGVyLmpzIiwiaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbi8qKlxuICogU3RvcmUgYWxsb3dzIHlvdSB0byBzYXZlIGFuZCBkaXN0cmlidXRlIGRhdGEuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvc3RvcmV9XG4gKi9cbmNvbnN0IHN0b3JlID0gbmV3IFByb3h5KHt9LCB7XG4gIGdldDogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgaWYgKGtleSA9PSBcIl9fdGFyZ2V0XCIpIHtcbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICB9LFxuICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICBpZih1dGlscy5jb21wYXJlKHRhcmdldFtrZXldLCB2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBcbiAgICB2YWx1ZSA9IHV0aWxzLmNvcHkodmFsdWUpO1xuICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgQWtpbGkucm9vdCAmJiBBa2lsaS5yb290Ll9fc3RvcmVUcmlnZ2VyQnlOYW1lKGtleSwgdmFsdWUpOyAgICBcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgZGVsZXRlUHJvcGVydHk6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgIEFraWxpLnJvb3QgJiYgQWtpbGkucm9vdC5fX3N0b3JlVHJpZ2dlckJ5TmFtZShrZXksIHVuZGVmaW5lZCk7XG4gICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL3N0b3JlLmpzIiwiaW1wb3J0IEFraWxpIGZyb20gJy4vYWtpbGkuanMnO1xuXG4vKipcbiAqIEdsb2JhbHMgdG8gdXNlIHRoZSBjdXN0b20gdmFyaWFibHJlcyBpbiBzY29wZSBleHByZXNzaW9uc1xuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3Njb3BlI2RvY3NfZ2xvYmFsc31cbiAqL1xuY29uc3QgZ2xvYmFscyA9IG5ldyBQcm94eSh7fSwge1xuICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHsgICAgXG4gICAgdGFyZ2V0W2tleV0gPSBBa2lsaS53cmFwKHZhbHVlLCB7IHRhZzogYGdsb2JhbHMuJHtrZXl9YCB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgZGVsZXRlUHJvcGVydHk6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgIEFraWxpLnJlbW92ZVRhZyhgZ2xvYmFscy4ke2tleX1gKTtcbiAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBnbG9iYWxzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nbG9iYWxzLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggcm91dGVyIHRlbXBsYXRlcy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3NfdGVtcGxhdGVzfVxuICogXG4gKiBAdGFnIHJvdXRlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JvdXRlJywgdGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7VHJhbnNpdGlvbn0gdHJhbnNpdGlvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHNldFRyYW5zaXRpb24odHJhbnNpdGlvbikge1xuICAgIGxldCBzdGF0ZSA9IHRyYW5zaXRpb24ucGF0aC5zdGF0ZTtcblxuICAgIGNvbnN0IGdldFBhcmVudFNjb3BlVHJhbnNpdGlvbiA9IChwYXRoKSA9PiB7XG4gICAgICBpZiAocGF0aC5wYXJlbnQpIHtcbiAgICAgICAgaWYgKHBhdGgucGFyZW50LmNvbXBvbmVudCkge1xuICAgICAgICAgIHJldHVybiBwYXRoLnBhcmVudC5jb21wb25lbnQuX19zY29wZS5fX3RyYW5zaXRpb24ucGF0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24ocGF0aC5wYXJlbnQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBjb21waWxlID0gKGh0bWwpID0+IHsgXG4gICAgICB0aGlzLmVtcHR5KCk7ICBcbiAgICAgIGxldCBuYW1lID0gJ2NvbXBvbmVudCc7XG5cbiAgICAgIGlmKHN0YXRlLmNvbXBvbmVudCkge1xuICAgICAgICBsZXQgZXhpc3RzID0gZmFsc2U7XG4gICAgXG4gICAgICAgIGZvcihsZXQga2V5IGluIEFraWxpLl9fY29tcG9uZW50cykge1xuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IEFraWxpLl9fY29tcG9uZW50c1trZXldO1xuICAgIFxuICAgICAgICAgIGlmKGNvbXBvbmVudCA9PT0gc3RhdGUuY29tcG9uZW50KSB7XG4gICAgICAgICAgICBuYW1lID0ga2V5OyAgICAgICAgICAgIFxuICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICBpZighZXhpc3RzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgXCIke3N0YXRlLm5hbWV9XCIgaGFzIG5vIGRlZmluZWQgY29tcG9uZW50YClcbiAgICAgICAgfSBcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBgPCR7IG5hbWUgfT4keyBodG1sIH08LyR7IG5hbWUgfT5gO1xuICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fX3Njb3BlLl9fdHJhbnNpdGlvbiA9IHsgIFxuICAgICAgcGFyZW50OiBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24odHJhbnNpdGlvbi5wYXRoKSwgICBcbiAgICAgIHN0YXRlOiB0cmFuc2l0aW9uLnBhdGguc3RhdGUsXG4gICAgICBkYXRhOiB0cmFuc2l0aW9uLnBhdGguZGF0YSxcbiAgICAgIHVybDogdHJhbnNpdGlvbi5wYXRoLnVybCxcbiAgICAgIHBhcmFtczogdHJhbnNpdGlvbi5wYXRoLnBhcmFtcyxcbiAgICAgIHF1ZXJ5OiB0cmFuc2l0aW9uLnBhdGgucXVlcnksXG4gICAgICBoYXNoOiB0cmFuc2l0aW9uLnBhdGguaGFzaFxuICAgIH07XG5cbiAgICBpZiAoIXRyYW5zaXRpb24ucGF0aC5sb2FkZWQpIHtcbiAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB7IGNoZWNrQ2hhbmdlczogdHJ1ZSB9IH0pO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIGlmIChzdGF0ZS50ZW1wbGF0ZSkge1xuICAgICAgICByZXR1cm4gc3RhdGUudGVtcGxhdGU7XG4gICAgICB9XG4gIFxuICAgICAgaWYgKHN0YXRlLnRlbXBsYXRlVXJsKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0LmdldChzdGF0ZS50ZW1wbGF0ZVVybCkudGhlbihyZXMgPT4gcmVzLmRhdGEpO1xuICAgICAgfVxuICAgIH0pLnRoZW4oaHRtbCA9PiBjb21waWxlKGh0bWwpKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3JvdXRlLmpzIiwiaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3JlcXVlc3QuanMnO1xuaW1wb3J0IFJvdXRlIGZyb20gJy4uL2NvbXBvbmVudHMvcm91dGUuanMnO1xuXG4vKipcbiAqIFRyYW5zaXRpb24gY2xhc3MuXG4gKiBBbiBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGNvbnNpc3RzIHRoZSBsYXN0IGFjdHVhbCByb3V0ZXIgdHJhbnNpdGlvbiBpbmZvcm1hdGlvbi5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3NfdHJhbnNpdGlvbn1cbiAqL1xuZXhwb3J0IGNsYXNzIFRyYW5zaXRpb24ge1xuICBjb25zdHJ1Y3RvcihwcmV2aW91cyA9IG51bGwpIHsgICAgXG4gICAgdGhpcy5wcmV2aW91cyA9IHByZXZpb3VzO1xuICAgIHRoaXMucGF0aCA9IG51bGw7XG4gICAgdGhpcy5yb3V0ZXMgPSBbXTtcbiAgICB0aGlzLnN0YXRlcyA9IHt9O1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWRpcmVjdCB0byBhbm90aGVyIHN0YXRlXG4gICAqIFxuICAgKiBAc2VlIHJvdXRlci5zdGF0ZVxuICAgKi9cbiAgcmVkaXJlY3QoKSB7XG4gICAgdGhpcy5jYW5jZWwoKTsgICBcbiAgICByZXR1cm4gcm91dGVyLnN0YXRlLmFwcGx5KHJvdXRlciwgYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWxvYWQgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXVxuICAgKiBAcGFyYW0ge29iamVjdH0gW3F1ZXJ5XVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2hhc2hdXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICovXG4gIHJlbG9hZChwYXJhbXMgPSB7fSwgcXVlcnkgPSB7fSwgaGFzaCA9IHVuZGVmaW5lZCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcGFyYW1zID0geyAuLi50aGlzLnBhdGgucGFyYW1zLCAuLi5wYXJhbXMgfTtcbiAgICBxdWVyeSA9IHsgLi4udGhpcy5wYXRoLnF1ZXJ5LCAuLi5xdWVyeSB9O1xuICAgIGhhc2ggPSBoYXNoID09PSB1bmRlZmluZWQ/IHRoaXMucGF0aC5oYXNoOiBoYXNoO1xuICAgIHJldHVybiB0aGlzLnJlZGlyZWN0KHRoaXMucGF0aC5zdGF0ZS5uYW1lLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGN1cnJlbnQgcGF0aFxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IHBhdGggXG4gICAqL1xuICBzZXRQYXRoKHBhdGgpIHtcbiAgICBwYXRoLnBhcmVudCA9IHRoaXMucGF0aCB8fCBudWxsO1xuICAgIHRoaXMucGF0aCA9IHsgcGFyYW1zOiB7fSwgcXVlcnk6IHt9LCAuLi5wYXRoIH07XG4gICAgdGhpcy5yb3V0ZXMucHVzaCh0aGlzLnBhdGgpO1xuICAgIHRoaXMuc3RhdGVzW3RoaXMucGF0aC5zdGF0ZS5uYW1lXSA9IHRoaXMucGF0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSByb3V0ZSBieSB0aGUgc3RhdGVcbiAgICogIFxuICAgKiBAcGFyYW0geyp9IHN0YXRlIFxuICAgKi9cbiAgZ2V0Um91dGUoc3RhdGUpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMucm91dGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJvdXRlID0gdGhpcy5yb3V0ZXNbaV07XG5cbiAgICAgIGlmIChyb3V0ZS5zdGF0ZSA9PT0gc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHJvdXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGl0IGhhcyB0aGUgc3RhdGVcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSBcbiAgICovXG4gIGhhc1N0YXRlKHN0YXRlKSB7XG4gICAgcmV0dXJuICEhdGhpcy5zdGF0ZXNbc3RhdGUubmFtZV07XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIHJvdXRlIGlzIGNoYW5nZWRcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSByb3V0ZVxuICAgKi9cbiAgaXNSb3V0ZUNoYW5nZWQocm91dGUpIHtcbiAgICBpZighdGhpcy5wcmV2aW91cykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGUgPSByb3V0ZS5zdGF0ZTtcblxuICAgIGlmKCF0aGlzLnByZXZpb3VzLmhhc1N0YXRlKHN0YXRlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyYW1LZXlzID0gW107XG4gICAgc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZShyb3V0ZXIuX19wYXJhbVJlZ2V4LCAobSwgZiwgdikgPT4gcGFyYW1LZXlzLnB1c2godikpO1xuICAgIFxuICAgIGZvcihsZXQga2V5IGluIHN0YXRlLnBhcmFtcykge1xuICAgICAgaWYocGFyYW1LZXlzLmluZGV4T2Yoa2V5KSA9PSAtMSkge1xuICAgICAgICBwYXJhbUtleXMucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5S2V5cyA9IE9iamVjdC5rZXlzKHN0YXRlLnF1ZXJ5KTtcbiAgICBjb25zdCB3YXRjaEhhc2ggPSBzdGF0ZS5oYXNoICE9PSB1bmRlZmluZWQ7ICAgIFxuICAgIGNvbnN0IHByZXZSb3V0ZSA9IHRoaXMucHJldmlvdXMuZ2V0Um91dGUoc3RhdGUpOyBcblxuICAgIGNvbnN0IHByZXYgPSB7IFxuICAgICAgcGFyYW1zOiB1dGlscy5pbmNsdWRlS2V5cyhwcmV2Um91dGUucGFyYW1zLCBwYXJhbUtleXMpLCBcbiAgICAgIHF1ZXJ5OiB1dGlscy5pbmNsdWRlS2V5cyhwcmV2Um91dGUucXVlcnksIHF1ZXJ5S2V5cylcbiAgICB9O1xuXG4gICAgY29uc3QgY3VycmVudCA9IHtcbiAgICAgIHBhcmFtczogdXRpbHMuaW5jbHVkZUtleXMocm91dGUucGFyYW1zLCBwYXJhbUtleXMpLFxuICAgICAgcXVlcnk6IHV0aWxzLmluY2x1ZGVLZXlzKHJvdXRlLnF1ZXJ5LCBxdWVyeUtleXMpXG4gICAgfVxuXG4gICAgaWYod2F0Y2hIYXNoKSB7XG4gICAgICBwcmV2Lmhhc2ggPSBwcmV2Um91dGUuaGFzaDtcbiAgICAgIGN1cnJlbnQuaGFzaCA9IHJvdXRlLmhhc2g7XG4gICAgfVxuXG4gICAgcmV0dXJuICF1dGlscy5jb21wYXJlKHByZXYsIGN1cnJlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbmNlbCB0aGUgY3VycmVudCB0cmFuc2l0aW9uXG4gICAqL1xuICBjYW5jZWwoKSB7XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBBa2lsaSByb3V0ZXJcbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nfVxuICovXG5jb25zdCByb3V0ZXIgPSB7fTtcblxuLyoqXG4gKiBTZXQgcm91dGVyJ3MgZGVmYXVsdCB2YXJpYWJsZXNcbiAqL1xucm91dGVyLnNldERlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmJhc2VVcmwgPSBcIi9cIjtcbiAgdGhpcy5zdGF0ZXMgPSBbXTtcbiAgdGhpcy5oYXNoTW9kZSA9IHRydWU7XG4gIHRoaXMuX19yZWRpcmVjdHMgPSAwO1xuICB0aGlzLl9faW5pdCA9IGZhbHNlO1xuICB0aGlzLl9fb3B0aW9ucyA9IHt9O1xuICB0aGlzLl9fcGFyYW1SZWdleCA9IC8oXFwvPzooW1xcd1xcZC1dKykpL2c7XG4gIHRoaXMuX19yb3V0ZVNlbGVjdG9yID0gYyA9PiBjIGluc3RhbmNlb2YgUm91dGU7XG59XG5cbi8qKlxuICogQWRkIG5ldyBzdGF0ZSB0byB0aGUgcm91dGVyXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzdGF0ZSBuYW1lLiBUbyBzZXQgcGFyZW50cyB5b3UgY2FuIHVzZSBkb3QsIGUuZy4gJ2FwcC5hcnRpY2xlLmVkaXQnXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVybiAtIHVybCBwYXR0ZXJuIGxpa2UgJ2FwcC9hcnRpY2xlLzppZCdcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtyb3V0ZXJ9XG4gKi9cbnJvdXRlci5hZGQgPSBmdW5jdGlvbiAobmFtZSwgcGF0dGVybiwgb3B0aW9ucyA9IHt9KSB7XG4gIGlmKHR5cGVvZiBuYW1lID09ICdvYmplY3QnKSB7XG4gICAgb3B0aW9ucyA9IG5hbWU7XG4gICAgcGF0dGVybiA9IG9wdGlvbnMucGF0dGVybjtcbiAgICBuYW1lID0gb3B0aW9ucy5zdGF0ZTtcbiAgICBkZWxldGUgb3B0aW9ucy5wYXR0ZXJuO1xuICAgIGRlbGV0ZSBvcHRpb25zLnN0YXRlO1xuICB9XG5cbiAgaWYoIW5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBtdXN0IGhhdmUgYSBuYW1lYCk7XG4gIH1cblxuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICB0ZW1wbGF0ZTogJycsXG4gICAgdGVtcGxhdGVVcmw6ICcnLFxuICAgIGFic3RyYWN0OiBmYWxzZSxcbiAgICBjb21wb25lbnQ6IG51bGwsXG4gICAgcGFyYW1zOiB7fSxcbiAgICBxdWVyeToge30sXG4gICAgaGFuZGxlcjogKCkgPT4ge30sXG4gIH07XG5cbiAgaWYoQWtpbGkub3B0aW9ucy5kZWJ1ZyAmJiBvcHRpb25zLmNvbXBvbmVudCAmJiAob3B0aW9ucy50ZW1wbGF0ZSB8fCBvcHRpb25zLnRlbXBsYXRlVXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKGBSb3V0ZXIgc3RhdGUgXCIke25hbWV9XCIgbXVzdCBvbmx5IGhhdmUgYSBjb21wb25lbnQgb3IgdGVtcGxhdGUgb3B0aW9uYCk7XG4gIH0gXG5cbiAgaWYgKCFvcHRpb25zLnRlbXBsYXRlICYmICFvcHRpb25zLnRlbXBsYXRlVXJsICYmICFvcHRpb25zLmNvbXBvbmVudCkge1xuICAgIG9wdGlvbnMuYWJzdHJhY3QgPSB0cnVlO1xuICB9XG5cbiAgaWYgKHRoaXMuaGFzKG5hbWUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgXCIke25hbWV9XCIgaXMgYWxyZWFkeSBleGlzdHNgKVxuICB9XG5cbiAgdGhpcy5zZXRTdGF0ZShuYW1lLCBwYXR0ZXJuLCB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnN9KTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBzdGF0ZSBmcm9tIHRoZSBsaXN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucm91dGVyLnJlbW92ZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAodGhpcy5zdGF0ZXNbaV0ubmFtZSA9PSBuYW1lKSB7XG4gICAgICB0aGlzLnN0YXRlcy5zcGxpY2UoaSwgMSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQ2hlY2sgc3RhdGUgZXhpc3RzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmICh0aGlzLnN0YXRlc1tpXS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHRoZSBzdGF0ZSB0byB0aGUgcGFzc2VkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gLSBwYXJhbXMgZm9yIHN0YXRlIHtpZDogMX0gPT4gJy9hcHAvOmlkJyA9PiAnL2FwcC8xJ1xuICogQHBhcmFtIHtvYmplY3R9IFtxdWVyeV0gLSBxdWVyeSB7eDogMX0gPT4gJy9hcHAvP3g9MSdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbaGFzaF1cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqL1xucm91dGVyLnN0YXRlID0gZnVuY3Rpb24gKHN0YXRlLCBwYXJhbXMgPSB7fSwgcXVlcnkgPSB7fSwgaGFzaCA9IHVuZGVmaW5lZCwgb3B0aW9ucyA9IHt9KSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBcbiAgaWYgKCFzdGF0ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIHJvdXRlIHN0YXRlIHdpdGggbmFtZSAke3N0YXRlfWApO1xuICB9XG5cbiAgKHsgcGFyYW1zLCBxdWVyeSwgaGFzaCB9ID0gdGhpcy5wcmVwYXJlU3RhdGVBcmdzKHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoKSk7XG4gIGxldCB1cmwgPSB0aGlzLmNyZWF0ZVN0YXRlVXJsKHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBmYWxzZSk7ICBcbiAgdGhpcy5fX29wdGlvbnMgPSBvcHRpb25zO1xuICB0aGlzLl9fb3B0aW9ucy5oYXNoSXNOdWxsID0gaGFzaCA9PT0gbnVsbDsgIFxuICB0aGlzLl9fb3B0aW9ucy5tYW51YWwgPSB0cnVlO1xuICB0aGlzLmlzb2xhdGUoKCkgPT4gdGhpcy5zZXRVcmwodXJsKSk7XG4gIHJldHVybiB0aGlzLmNoYW5nZVN0YXRlKCk7XG59O1xuXG4vKipcbiAqIEdvIGJhY2tcbiAqL1xucm91dGVyLmJhY2sgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LmJhY2suYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIEdvIHRvIGFueSB3YXlcbiAqL1xucm91dGVyLmdvID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeS5nby5hcHBseSh3aW5kb3cuaGlzdG9yeSwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogR28gZm9yd2FyZFxuICovXG5yb3V0ZXIuZm9yd2FyZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkuZm9yd2FyZC5hcHBseSh3aW5kb3cuaGlzdG9yeSwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHN0YXRlIGJ5IHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqL1xucm91dGVyLmxvY2F0aW9uID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucyA9IHsgcmVsb2FkOiBmYWxzZSB9KSB7XG4gIHRoaXMuX19vcHRpb25zID0gb3B0aW9ucztcbiAgdGhpcy5fX29wdGlvbnMubWFudWFsID0gdHJ1ZTtcblxuICB0aGlzLmlzb2xhdGUoKCkgPT4ge1xuICAgIGlmICh0aGlzLmhhc2hNb2RlKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHVybDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgJycsIHVybCk7XG4gICAgfVxuICB9KVxuXG4gIHJldHVybiB0aGlzLmNoYW5nZVN0YXRlKCk7XG59O1xuXG4vKipcbiAqIFJvdXRlciBpbml0aWFsaXphdGlvbi4gU2hvdWxkIGJlIGNhbGxlZCBiZWZvcmUgQWtpbGkuaW5pdCgpXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFtkZWZhdWx0VXJsXVxuICogQHBhcmFtIHtib29sZWFufSBbaGFzaE1vZGU9dHJ1ZV1cbiAqL1xucm91dGVyLmluaXQgPSBmdW5jdGlvbiAoZGVmYXVsdFVybCA9ICcnLCBoYXNoTW9kZSA9IHRydWUpIHtcbiAgbGV0IG9sZFB1c2hTdGF0ZSA9IHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZTtcblxuICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgcmVzID0gb2xkUHVzaFN0YXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICByb3V0ZXIuY2hhbmdlU3RhdGUoKS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgdGhpcy5fX29uU3RhdGVDaGFuZ2VIYW5kbGVyID0gKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgdGhpcy5jaGFuZ2VTdGF0ZSgpLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gIH07XG5cbiAgdGhpcy5kZWZhdWx0VXJsID0gZGVmYXVsdFVybDtcbiAgdGhpcy5oYXNoTW9kZSA9IGhhc2hNb2RlO1xuXG4gIHRoaXMuc3RhdGVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICBhID0gYS5uYW1lLnNwbGl0KCcuJykubGVuZ3RoO1xuICAgIGIgPSBiLm5hbWUuc3BsaXQoJy4nKS5sZW5ndGg7XG4gICAgcmV0dXJuIGEgLSBiO1xuICB9KTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHRoaXMuaW5pdFN0YXRlKHRoaXMuc3RhdGVzW2ldKTtcbiAgfVxuXG4gIGlmICghdGhpcy5zdGF0ZXMubGVuZ3RoICYmIEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihgWW91IGRpZG4ndCBhZGQgYW55IHJvdXRlcyB0byB0aGUgcm91dGVyYCk7XG4gIH1cblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIpO1xuICB0aGlzLl9faW5pdCA9IHRydWU7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIHN0YXRlIFxuICogXG4gKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgXG4gKi9cbnJvdXRlci5pbml0U3RhdGUgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgbGV0IHBhcmVudHMgPSBbXTtcbiAgc3RhdGUuY2hpbGRyZW4gPSBbXTtcbiAgcGFyZW50cyA9IHN0YXRlLm5hbWUuc3BsaXQoJy4nKTtcbiAgcGFyZW50cy5wb3AoKTtcbiAgc3RhdGUubGV2ZWwgPSBzdGF0ZS5hYnN0cmFjdD8gbnVsbDogcGFyZW50cy5sZW5ndGg7XG5cbiAgaWYgKHBhcmVudHMubGVuZ3RoKSB7XG4gICAgbGV0IHBhcmVudE5hbWUgPSBwYXJlbnRzLmpvaW4oJy4nKTtcbiAgICBsZXQgcGFyZW50ID0gdGhpcy5nZXRTdGF0ZShwYXJlbnROYW1lKTtcblxuICAgIGlmICghcGFyZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCBwYXJlbnQgcm91dGUgc3RhdGUgXCIke3BhcmVudE5hbWV9XCIgZm9yIFwiJHtzdGF0ZS5uYW1lfVwiYClcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUubGV2ZWwgIT09IG51bGwgJiYgcGFyZW50LmFic3RyYWN0KSB7XG4gICAgICBzdGF0ZS5sZXZlbC0tO1xuICAgIH1cblxuICAgIHN0YXRlLmZ1bGxQYXR0ZXJuID0gdGhpcy5zcGxpdFNsYXNoZXMocGFyZW50LmZ1bGxQYXR0ZXJuICsgJy8nICsgc3RhdGUucGF0dGVybik7XG4gICAgcGFyZW50LmNoaWxkcmVuLnB1c2goc3RhdGUpO1xuICB9XG4gIGVsc2Uge1xuICAgIHN0YXRlLmZ1bGxQYXR0ZXJuID0gc3RhdGUucGF0dGVybjtcbiAgfVxufVxuXG4vKipcbiAqIEdldCBzdGF0ZSBieSBuYW1lXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAqL1xucm91dGVyLmdldFN0YXRlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogU2V0IHN0YXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXR0ZXJuXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICovXG5yb3V0ZXIuc2V0U3RhdGUgPSBmdW5jdGlvbiAobmFtZSwgcGF0dGVybiwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBzdGF0ZSA9IHsuLi5vcHRpb25zLCBuYW1lLCBwYXR0ZXJufTtcbiAgdGhpcy5zdGF0ZXMucHVzaChzdGF0ZSk7XG4gIHRoaXMuX19pbml0ICYmIHRoaXMuaW5pdFN0YXRlKHN0YXRlKTtcbiAgcmV0dXJuIHN0YXRlO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgc3RhdGUgYnkgbmFtZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnJvdXRlci5yZW1vdmVTdGF0ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZXNbaV07XG5cbiAgICBpZiAoc3RhdGUubmFtZSA9PSBuYW1lKSB7XG4gICAgICB0aGlzLnN0YXRlcy5zcGxpY2UoaSwgMSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogU2V0IHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqL1xucm91dGVyLnNldFVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgdGhpcy5oYXNoTW9kZT8gdGhpcy5zZXRIYXNoVXJsKHVybCk6IHRoaXMuc2V0SGlzdG9yeVVybCh1cmwpO1xufTtcblxuLyoqXG4gKiBTZXQgdXJsIHVzaW5nIGhpc3RvcnlcbiAqXG4gKiBAcGFyYW0gdXJsXG4gKi9cbnJvdXRlci5zZXRIaXN0b3J5VXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgJycsIHVybCk7XG59O1xuXG4vKipcbiAqIFNldCB1cmwgdXNpbmcgaGFzaFxuICpcbiAqIEBwYXJhbSB1cmxcbiAqL1xucm91dGVyLnNldEhhc2hVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyMnICsgKHVybCB8fCAnLycpO1xufTtcblxuLyoqXG4gKiBHZXQgdXJsXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLmdldFVybCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuaGFzaE1vZGUgPyB0aGlzLmdldEhhc2hVcmwoKSA6IHRoaXMuZ2V0SGlzdG9yeVVybCgpO1xufTtcblxuLyoqXG4gKiBHZXQgdXJsIHVzaW5nIGhpc3RvcnlcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuZ2V0SGlzdG9yeVVybCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyB3aW5kb3cubG9jYXRpb24uaGFzaDtcbn07XG5cbi8qKlxuICogR2V0IHVybCB1c2luZyBoYXNoXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLmdldEhhc2hVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKC9eIy8sICcnKTtcbn07XG5cbi8qKlxuICogR2V0IHF1ZXJ5IHBhcmFtc1xuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5oYXNoTW9kZSA/IHRoaXMuZ2V0SGFzaFVybFF1ZXJ5KCkgOiB0aGlzLmdldEhpc3RvcnlVcmxRdWVyeSgpO1xufTtcblxuLyoqXG4gKiBHZXQgcXVlcnkgcGFyYW1zIHVzaW5nIGhpc3RvcnlcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0SGlzdG9yeVVybFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByZXF1ZXN0LnBhcmFtc0Zyb21RdWVyeSh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykpO1xufTtcblxuLyoqXG4gKiBHZXQgcXVlcnkgcGFyYW1zIHVzaW5nIGhhc2hcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0SGFzaFVybFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByZXF1ZXN0LnBhcmFtc0Zyb21RdWVyeSgod2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJz8nKVsxXSB8fCAnJykpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgdXJsIGJ5IGRhdGFcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc11cbiAqIEBwYXJhbSB7b2JqZWN0fSBbcXVlcnldXG4gKiBAcGFyYW0ge3N0cmluZ30gW2hhc2hdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtwcmVwYXJlPXRydWVdXG4gKi9cbnJvdXRlci5jcmVhdGVTdGF0ZVVybCA9IGZ1bmN0aW9uIChzdGF0ZSwgcGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSB1bmRlZmluZWQsIHByZXBhcmUgPSB0cnVlKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBcbiAgaWYocHJlcGFyZSkge1xuICAgICh7IHBhcmFtcywgcXVlcnksIGhhc2ggfSA9IHRoaXMucHJlcGFyZVN0YXRlQXJncyhzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCkpO1xuICB9XG5cbiAgbGV0IHVybCA9IHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2UodGhpcy5fX3BhcmFtUmVnZXgsIChtLCBmLCB2KSA9PiAnLycgKyAocGFyYW1zW3ZdIHx8ICcnKSk7XG4gIHVybCA9IHVybC5yZXBsYWNlKC9eXFxeLywgJycpO1xuICB1cmwgPSB0aGlzLnNwbGl0U2xhc2hlcyh1cmwpO1xuXG4gIGlmIChPYmplY3Qua2V5cyhxdWVyeSkubGVuZ3RoKSB7XG4gICAgdXJsICs9ICc/JyArIHJlcXVlc3QucGFyYW1zVG9RdWVyeShxdWVyeSk7XG4gIH1cblxuICBpZiAoIXRoaXMuaGFzaE1vZGUgJiYgaGFzaCkge1xuICAgIHVybCArPSAnIycgKyBoYXNoLnJlcGxhY2UoJyMnLCAnJyk7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcblxuLyoqXG4gKiBQcmVwYXJlIHRoZSBzdGF0ZSBhcmd1bWVudHNcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdXG4gKiBAcGFyYW0ge29iamVjdH0gW3F1ZXJ5XVxuICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoXVxuICovXG5yb3V0ZXIucHJlcGFyZVN0YXRlQXJncyA9IGZ1bmN0aW9uIChzdGF0ZSwgcGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSB1bmRlZmluZWQpIHtcbiAgbGV0IGFyZ3MgPSB7IHBhcmFtcywgcXVlcnksIGhhc2ggfTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XG4gICAgY29uc3QgcGFyYW1zVGVtcCA9IHRoaXMucHJlcGFyZVN0YXRlUGFyYW1zKHN0YXRlLCBwYXJhbXMsIGFyZ3MpO1xuICAgIGNvbnN0IHF1ZXJ5VGVtcCA9IHRoaXMucHJlcGFyZVN0YXRlUXVlcnkoc3RhdGUsIHF1ZXJ5LCBhcmdzKTtcbiAgICBjb25zdCBoYXNoVGVtcCA9IHRoaXMucHJlcGFyZVN0YXRlSGFzaChzdGF0ZSwgaGFzaCwgYXJncyk7XG4gICAgYXJncyA9IHsgcGFyYW1zOiBwYXJhbXNUZW1wLCBxdWVyeTogcXVlcnlUZW1wLCBoYXNoOiBoYXNoVGVtcCB9O1xuICB9XG4gIFxuICByZXR1cm4gYXJncztcbn1cblxuLyoqXG4gKiBQcmVwYXJlIHRoZSBzdGF0ZSBwYXJhbXNcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IHBhcmFtc1xuICogQHBhcmFtIHtvYmplY3R9IFthcmdzXVxuICovXG5yb3V0ZXIucHJlcGFyZVN0YXRlUGFyYW1zID0gZnVuY3Rpb24oc3RhdGUsIHBhcmFtcywgYXJncykge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgY29uc3QgbGlzdCA9IFtwYXJhbXNdO1xuICBjb25zdCBzdGF0ZXMgPSBzdGF0ZS5uYW1lLnNwbGl0KCcuJyk7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IHN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgY3VycmVudCA9IHN0YXRlcy5zbGljZSgwLCBzdGF0ZXMubGVuZ3RoIC0gaSkuam9pbignLicpO1xuICAgIGxpc3QucHVzaCh0aGlzLmdldFN0YXRlKGN1cnJlbnQpLnBhcmFtcyk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5jcmVhdGVTdGF0ZUFyZ3MobGlzdCwgYXJncyk7XG59XG5cbi8qKlxuICogUHJlcGFyZSB0aGUgc3RhdGUgcXVlcnlcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IHF1ZXJ5XG4gKiBAcGFyYW0ge29iamVjdH0gW2FyZ3NdXG4gKi9cbnJvdXRlci5wcmVwYXJlU3RhdGVRdWVyeSA9IGZ1bmN0aW9uKHN0YXRlLCBxdWVyeSwgYXJncykgeyAgXG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBjb25zdCBsaXN0ID0gW3F1ZXJ5XTtcbiAgY29uc3Qgc3RhdGVzID0gc3RhdGUubmFtZS5zcGxpdCgnLicpOyAgXG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IHN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjb25zdCBjdXJyZW50ID0gc3RhdGVzLnNsaWNlKDAsIHN0YXRlcy5sZW5ndGggLSBpKS5qb2luKCcuJyk7XG4gICAgbGlzdC5wdXNoKHRoaXMuZ2V0U3RhdGUoY3VycmVudCkucXVlcnkpO1xuICB9XG4gXG4gIHJldHVybiB0aGlzLmNyZWF0ZVN0YXRlQXJncyhsaXN0LCBhcmdzKTtcbn1cblxuLyoqXG4gKiBNZXJnZSBsaXN0IGl0ZW1zIGFzIHRyYW5zaXRpb24gb2JqZWN0c1xuICogXG4gKiBAcGFyYW0ge29iamVjdFtdfSBsaXN0XG4gKiBAcGFyYW0ge29iamVjdH0gW2FyZ3NdXG4gKi9cbnJvdXRlci5jcmVhdGVTdGF0ZUFyZ3MgPSBmdW5jdGlvbiAobGlzdCwgYXJncyA9IHsgcGFyYW1zOiB7fSwgcXVlcnk6IHt9IH0pIHtcbiAgY29uc3QgYWxsID0ge307XG4gIGNvbnN0IGV4Y2x1ZGVkID0ge307XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IGxpc3QubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgY29uc3Qgb2JqID0gbGlzdFtpXTtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiBcbiAgICBmb3IobGV0IGsgPSAwLCBjID0ga2V5cy5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgIGxldCBrZXkgPSBrZXlzW2tdO1xuICAgICAgbGV0IHZhbCA9IG9ialtrZXldO1xuXG4gICAgICBpZihleGNsdWRlZFtrZXldKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB2YWwgPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic/IHZhbChhcmdzKTogdmFsO1xuXG4gICAgICBpZih2YWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYodmFsID09PSBudWxsKSB7XG4gICAgICAgIGRlbGV0ZSBhbGxba2V5XTtcbiAgICAgICAgZXhjbHVkZWRba2V5XSA9IHRydWU7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBhbGxba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYWxsOyBcbn1cblxuLyoqXG4gKiBQcmVwYXJlIHRoZSBzdGF0ZSBoYXNoXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXG4gKiBAcGFyYW0ge29iamVjdH0gW2FyZ3NdXG4gKi9cbnJvdXRlci5wcmVwYXJlU3RhdGVIYXNoID0gZnVuY3Rpb24oc3RhdGUsIGhhc2gsIGFyZ3MpIHtcbiAgaWYoaGFzaCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBoYXNoO1xuICB9XG5cbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG4gIGNvbnN0IHN0YXRlcyA9IHN0YXRlLm5hbWUuc3BsaXQoJy4nKTtcblxuICBmb3IobGV0IGkgPSAwLCBsID0gc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBzdGF0ZXMuc2xpY2UoMCwgc3RhdGVzLmxlbmd0aCAtIGkpLmpvaW4oJy4nKTtcbiAgICBsZXQgdmFsID0gdGhpcy5nZXRTdGF0ZShjdXJyZW50KS5oYXNoO1xuICAgIHZhbCA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJz8gdmFsKGFyZ3MpOiB2YWw7XG5cbiAgICBpZih2YWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYodmFsID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBoYXNoID0gdmFsO1xuICB9XG5cbiAgcmV0dXJuIGhhc2g7XG59XG5cbi8qKlxuICogUmVtb3ZlIGFsbCB1bm5lY2Vzc2FyeSBzbGFzaGVzIGZyb20gYW4gdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLnNwbGl0U2xhc2hlcyA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgcmV0dXJuIHVybC5yZXBsYWNlKC9bL10rL2csICcvJyk7XG59O1xuXG4vKipcbiAqIEdldCBzdGF0ZSB1cmwgY29udGVudFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRQYXR0ZXJuQ29udGVudCA9IGZ1bmN0aW9uIChzdGF0ZSwgdXJsKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBsZXQga2V5cyA9IFtdO1xuICBsZXQgcGFyYW1zID0ge307XG5cbiAgdXJsID0gdXJsLnNwbGl0KCc/JylbMF07XG4gIHVybCA9IHVybC5zcGxpdCgnIycpWzBdO1xuXG4gIGxldCB1cmxQYXR0ZXJuID0gc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZSh0aGlzLl9fcGFyYW1SZWdleCwgKG0sIGYsIHYpID0+IHtcbiAgICBrZXlzLnB1c2godik7XG4gICAgcmV0dXJuICcvPyhbXi9dKiknO1xuICB9KTtcblxuICB1cmxQYXR0ZXJuID0gdXJsUGF0dGVybi5yZXBsYWNlKC8oW15eL10rKVsvXSskLywgJyQxJyk7XG4gIGxldCByZWdleCA9IG5ldyBSZWdFeHAodXJsUGF0dGVybiwgJ2cnKTtcbiAgbGV0IGlzSW5jbHVkZWQgPSB1cmwubWF0Y2gocmVnZXgpO1xuICBcbiAgaWYgKCFpc0luY2x1ZGVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB1cmwucmVwbGFjZShyZWdleCwgKG0sIC4uLmFyZ3MpID0+IHsgXG4gICAgYXJncyA9IGFyZ3Muc2xpY2UoMCwgYXJncy5sZW5ndGggLSAyKTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBhcmdzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHYgPSBhcmdzW2ldO1xuICAgICAgdiAmJiAocGFyYW1zW2tleXNbaV1dID0gdik7XG4gICAgfSAgXG4gIH0pO1xuXG4gIHJldHVybiB7IHBhcmFtcyB9O1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgc3RhdGUgaXMgYWN0aXZlIG5vd1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5jbHVkZXNcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaXNBY3RpdmVTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlLCBpbmNsdWRlcyA9IGZhbHNlKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBsZXQgdXJsID0gdGhpcy5zcGxpdFNsYXNoZXMoJy8nICsgdGhpcy5nZXRVcmwoKS5zcGxpdCgnPycpWzBdICsgJy8nKTtcbiAgbGV0IHVybFBhdHRlcm4gPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAnLz8oW14vXSopJyk7XG4gIHVybFBhdHRlcm4gPSB1cmxQYXR0ZXJuLnJlcGxhY2UoL15cXF4vLCAnJykucmVwbGFjZSgvXFwkJC8sICcnKTtcbiAgbGV0IHN0ciA9IGluY2x1ZGVzPyB1cmxQYXR0ZXJuOiB0aGlzLnNwbGl0U2xhc2hlcygnXi8nICsgdXJsUGF0dGVybiArICcvJCcpO1xuICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKHN0cik7ICBcbiAgcmV0dXJuIHJlZ2V4LnRlc3QodXJsKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIGN1cnJlbnQgdXJsIGluY2x1ZGVzIGEgc3RhdGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmluQWN0aXZlU3RhdGUgPSBmdW5jdGlvbihzdGF0ZSkge1xuICByZXR1cm4gcm91dGVyLmlzQWN0aXZlU3RhdGUoc3RhdGUsIHRydWUpO1xufTtcblxuLyoqXG4gKiBHZXQgcm91dGUgY29tcG9uZW50IGJ5IGxldmVsXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxldmVsXG4gKi9cbnJvdXRlci5nZXRSb3V0ZSA9IGZ1bmN0aW9uIChsZXZlbCkge1xuICBsZXQgaSA9IDA7XG5cbiAgY29uc3QgZmluZCA9IChlbCkgPT4ge1xuICAgIGxldCByb3V0ZSA9IGVsLmNoaWxkKHRoaXMuX19yb3V0ZVNlbGVjdG9yKTtcblxuICAgIGlmICghcm91dGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChpID09IGxldmVsKSB7XG4gICAgICByZXR1cm4gcm91dGU7XG4gICAgfVxuXG4gICAgaSsrO1xuICAgIHJldHVybiBmaW5kKHJvdXRlKTtcbiAgfTtcblxuICByZXR1cm4gZmluZChBa2lsaS5yb290KTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBmaXJzdCBtYXRjaFxuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGFyclxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge29iamVjdHxudWxsfVxuICovXG5yb3V0ZXIuZ2V0QXJyYXlQYXR0ZXJuQ29udGVudCA9IGZ1bmN0aW9uIChhcnIsIHVybCkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSBhcnJbaV07XG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldFBhdHRlcm5Db250ZW50KHN0YXRlLCB1cmwpO1xuXG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdGF0ZTogc3RhdGUsIC4uLmNvbnRlbnQgfTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBHZXQgc3RhdGVzIGJ5IGxldmVsXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxldmVsXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbnJvdXRlci5nZXRTdGF0ZXNCeUxldmVsID0gZnVuY3Rpb24gKGxldmVsKSB7XG4gIGxldCBzdGF0ZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLmxldmVsIDwgbGV2ZWwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChzdGF0ZS5sZXZlbCA+IGxldmVsKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzdGF0ZXMucHVzaChzdGF0ZSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVzO1xufTtcblxuLyoqXG4gKiBSZWxvYWQgdGhlIHN0YXRlXG4gKiBcbiAqIEBzZWUgVHJhbnNpdGlvbi5yZWxvYWRcbiAqL1xucm91dGVyLnJlbG9hZCA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgaWYoIXRoaXMudHJhbnNpdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcignTm90IGZvdW5kIGFuIGFjdGl2ZSB0cmFuc2l0aW9uIHRvIHJlbG9hZCB0aGUgc3RhdGUnKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLnRyYW5zaXRpb24ucmVsb2FkKC4uLmFyZ3MpO1xufVxuXG4vKipcbiAqIElzb2xhdGUgdGhlIGZ1bmN0aW9uIHRvIG5vdCB0cmlnZ2VyIHJvdXRlciBoYW5kbGVycyBpbnNpZGVcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbnJvdXRlci5pc29sYXRlID0gZnVuY3Rpb24gKGZuKSB7XG4gIHRoaXMuX19pc29sYXRlZCA9IHRydWU7XG4gIGxldCByZXMgPSBmbigpO1xuICB0aGlzLl9faXNvbGF0ZWQgPSBmYWxzZTtcbiAgcmV0dXJuIHJlcztcbn1cblxuLyoqXG4gKiBDaGFuZ2Ugc3RhdGVcbiAqL1xucm91dGVyLmNoYW5nZVN0YXRlID0gZnVuY3Rpb24gKCkgeyAgICBcbiAgaWYodGhpcy5fX2lzb2xhdGVkKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG4gIFxuICBsZXQgdXJsID0gdGhpcy5nZXRVcmwoKTtcbiAgbGV0IHBhcmFtcyA9IHt9O1xuICBsZXQgcXVlcnkgPSB0aGlzLmdldFVybFF1ZXJ5KCk7ICBcbiAgbGV0IGhhc2ggPSB0aGlzLmhhc2hNb2RlPyAnJzogd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTsgXG4gIGxldCBwcmV2VHJhbnNpdGlvbiA9IHJvdXRlci50cmFuc2l0aW9uIHx8IG51bGw7XG4gIGxldCB0cmFuc2l0aW9uID0gcm91dGVyLnRyYW5zaXRpb24gPSBuZXcgVHJhbnNpdGlvbihwcmV2VHJhbnNpdGlvbik7XG4gIGxldCBsZXZlbCA9IDA7XG4gICBcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzdGF0ZS1jaGFuZ2UnLCB7IGRldGFpbDogdHJhbnNpdGlvbiB9KSk7XG5cbiAgY29uc3QgbmV4dCA9IChzdGF0ZXMsIG9uRW5kKSA9PiB7ICAgIFxuICAgIGlmICghc3RhdGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG9uRW5kICYmIG9uRW5kKCk7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldEFycmF5UGF0dGVybkNvbnRlbnQoc3RhdGVzLCB1cmwpO1xuXG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICByZXR1cm4gb25FbmQgJiYgb25FbmQoKTtcbiAgICB9XG5cbiAgICBsZXQgc3RhdGUgPSBjb250ZW50LnN0YXRlO1xuICAgIHRyYW5zaXRpb24uc2V0UGF0aCh7IHN0YXRlLCBjb21wb25lbnQ6IHJvdXRlLCBsb2FkZWQ6IHRydWUgfSk7XG4gICAgbGV0IGN1cnJlbnRVcmwgPSB0aGlzLmNyZWF0ZVN0YXRlVXJsKHN0YXRlLCBjb250ZW50LnBhcmFtcywgcXVlcnksIGhhc2gsIGZhbHNlKTsgIFxuICAgIHBhcmFtcyA9IHsgLi4ucGFyYW1zLCAuLi5jb250ZW50LnBhcmFtcyB9O1xuICAgIGhhc2ggPSBoYXNoIHx8ICh0aGlzLl9fb3B0aW9ucy5oYXNoSXNOdWxsPyBudWxsOiAnJyk7XG4gICAgKHsgcGFyYW1zLCBxdWVyeSwgaGFzaCB9ID0gdGhpcy5wcmVwYXJlU3RhdGVBcmdzKHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoKSk7IFxuICAgIGhhc2ggPSBoYXNoIHx8ICcnO1xuICAgIGxldCByZWFsVXJsID0gdGhpcy5jcmVhdGVTdGF0ZVVybChzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgZmFsc2UpOyBcbiAgICBjdXJyZW50VXJsICE9IHJlYWxVcmwgJiYgdGhpcy5pc29sYXRlKCgpID0+IHRoaXMuc2V0VXJsKHJlYWxVcmwpKTsgICBcbiAgICBsZXQgcm91dGUgPSBzdGF0ZS5hYnN0cmFjdD8gbnVsbDogdGhpcy5nZXRSb3V0ZShsZXZlbCk7XG5cbiAgICBpZiAoIXJvdXRlICYmICFzdGF0ZS5hYnN0cmFjdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yIChgTm90IGZvdW5kIHJvdXRlIGNvbXBvbmVudCBmb3Igc3RhdGUgXCIke3N0YXRlLm5hbWV9XCJgKTtcbiAgICB9ICAgIFxuXG4gICAgdHJhbnNpdGlvbi5wYXRoLnBhcmFtcyA9IHBhcmFtcztcbiAgICB0cmFuc2l0aW9uLnBhdGgucXVlcnkgPSBxdWVyeTtcbiAgICB0cmFuc2l0aW9uLnBhdGguaGFzaCA9IGhhc2g7XG4gICAgdHJhbnNpdGlvbi5wYXRoLnVybCA9IHJlYWxVcmw7XG4gICAgIXN0YXRlLmFic3RyYWN0ICYmIGxldmVsKys7XG4gICAgbGV0IGlzRGlmZmVyZW50ID0gdHJ1ZTtcblxuICAgIGlmKHJlYWxVcmwgIT0gdXJsKSB7XG4gICAgICBpc0RpZmZlcmVudCA9IHRyYW5zaXRpb24uaXNSb3V0ZUNoYW5nZWQodHJhbnNpdGlvbi5wYXRoKTtcbiAgICB9XG4gICAgXG4gICAgdHJhbnNpdGlvbi5wYXRoLmxvYWRlZCA9IGlzRGlmZmVyZW50ICYmIHRoaXMuX19vcHRpb25zLnJlbG9hZCAhPT0gZmFsc2U7ICAgXG4gICAgXG4gICAgUHJvbWlzZS5yZXNvbHZlKHRyYW5zaXRpb24ucGF0aC5sb2FkZWQ/IHN0YXRlLmhhbmRsZXIodHJhbnNpdGlvbik6IHRyYW5zaXRpb24ucGF0aC5kYXRhKS50aGVuKChkYXRhKSA9PiB7ICBcbiAgICAgIGlmICh0cmFuc2l0aW9uLl9fY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZGF0YSkudGhlbigoKSA9PiBvbkVuZCAmJiBvbkVuZCgpKS5jYXRjaCgoZXJyKSA9PiBvbkVuZCAmJiBvbkVuZChlcnIpKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdHJhbnNpdGlvbi5wYXRoLmRhdGEgPSBkYXRhO1xuICAgICAgc3RhdGUudGl0bGUgJiYgKGRvY3VtZW50LnRpdGxlID0gdHlwZW9mIHN0YXRlLnRpdGxlID09ICdmdW5jdGlvbic/IHN0YXRlLnRpdGxlKHRyYW5zaXRpb24pOiBzdGF0ZS50aXRsZSk7XG5cbiAgICAgIGlmIChzdGF0ZS5hYnN0cmFjdCkge1xuICAgICAgICByZXR1cm4gbmV4dChzdGF0ZS5jaGlsZHJlbiwgb25FbmQpO1xuICAgICAgfVxuIFxuICAgICAgcm91dGUuc2V0VHJhbnNpdGlvbih0cmFuc2l0aW9uKS50aGVuKCgpID0+IHtcbiAgICAgICAgbmV4dChzdGF0ZS5jaGlsZHJlbiwgb25FbmQpO1xuICAgICAgfSkuY2F0Y2goKGVycikgPT4gb25FbmQgJiYgb25FbmQoZXJyKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBuZXh0KHRoaXMuZ2V0U3RhdGVzQnlMZXZlbCgwKSwgKGVycikgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICB9XG5cbiAgICAgIGlmICghdHJhbnNpdGlvbi5yb3V0ZXMubGVuZ3RoKSB7XG4gICAgICAgIGlmICh0aGlzLl9fcmVkaXJlY3RzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYFdyb25nIHJvdXRlciBkZWZhdWx0IHVybCBcIiR7dGhpcy5kZWZhdWx0VXJsfVwiYCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFVybCkge1xuICAgICAgICAgIGlmICh0aGlzLmRlZmF1bHRVcmwgPT0gdGhpcy5nZXRVcmwoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYE5vdCBmb3VuZCBhbnkgcm91dGVzYCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuaXNvbGF0ZSgoKSA9PiB0aGlzLnNldFVybCh0aGlzLmRlZmF1bHRVcmwpKTsgICAgICAgICAgXG4gICAgICAgICAgdGhpcy5fX3JlZGlyZWN0cysrO1xuICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZVN0YXRlKCkudGhlbihyZXNvbHZlKS5jYXRjaChyZWplY3QpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS53YXJuKGBOb3QgZm91bmQgYSBkZWZhdWx0IHJvdXRlLiBZb3UgY2FuIHBhc3MgaXQgaW4gXCJyb3V0ZXIuaW5pdChkZWZhdWx0VXJsKVwiIGZ1bmN0aW9uYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKCF0aGlzLl9fb3B0aW9ucy5zYXZlU2Nyb2xsUG9zaXRpb24gJiYgKCF0cmFuc2l0aW9uLnBhdGggfHwgIXRyYW5zaXRpb24ucGF0aC5oYXNoKSkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX19vcHRpb25zID0ge307XG4gICAgICB0aGlzLl9fcmVkaXJlY3RzID0gMDtcblxuICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzdGF0ZS1jaGFuZ2VkJywgeyBkZXRhaWw6IHRyYW5zaXRpb24gfSkpO1xuICAgICAgcmVzb2x2ZSh0cmFuc2l0aW9uKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIERlaW5pdCByb3V0ZXJcbiAqL1xucm91dGVyLmRlaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5fX29uU3RhdGVDaGFuZ2VIYW5kbGVyKTtcbiAgcm91dGVyLnNldERlZmF1bHRzKCk7XG59O1xuXG5yb3V0ZXIuVHJhbnNpdGlvbiA9IFRyYW5zaXRpb247XG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG5yb3V0ZXIuc2V0RGVmYXVsdHMoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvcm91dGVyLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGNvbmRpdGlvbmFsIHN0YXRlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NvbmRpdGlvbmFsX3N0YXRlbWVudHN9XG4gKiBcbiAqIEB0YWcgaWZcbiAqIEBzZWxlY3RvciBpZltpc11cbiAqIEBhdHRyIHtib29sZWFufSBpcyAtIHNob3cgdGhlIGVsZW1lbnQgY29udGVudCBvciBub3RcbiAqIEBhdHRyIHtib29sZWFufSByZWNyZWF0ZSAtIGRlbGV0ZSB0aGUgY29udGVudCBhbmQgcmVjcmVhdGUgb3IganVzdCBzaG93L2hpZGUgXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElmIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gdHJ1ZTsgXG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tpc10nO1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ3JlY3JlYXRlJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2lmJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdlbHNlLWlmJywgdGhpcy5FbHNlSWYpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnZWxzZScsIHRoaXMuRWxzZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuc3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMucmVjcmVhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ29tcGlsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRpc3BsYXkgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpLmRpc3BsYXk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ3JlY3JlYXRlJywgdGhpcy5zZXRSZWNyZWF0aW9uKTtcbiAgICByZXR1cm4gdGhpcy5hdHRyKCdpcycsIHZhbCA9PiAodGhpcy5zdGF0ZSA9ICEhdmFsLCB0aGlzLnNldFN0YXRlKCkpKTtcbiAgfVxuXG4gIHNldEFjdGl2aXR5KGFjdGl2ZSkge1xuICAgIHRoaXMuYWN0aXZlID0gYWN0aXZlO1xuICB9XG5cbiAgc2V0UmVjcmVhdGlvbihyZWNyZWF0ZSkge1xuICAgIHRoaXMucmVjcmVhdGUgPSByZWNyZWF0ZTtcbiAgfVxuXG4gIHNldFN0YXRlKCkge1xuICAgIGxldCByZXMgPSB0aGlzLmNvbXBpbGF0aW9uKCk7XG4gICAgbGV0IG5leHQgPSB0aGlzLmVsLm5leHRFbGVtZW50U2libGluZztcbiAgICBsZXQgcmVzdWx0O1xuXG4gICAgaWYgKCFuZXh0IHx8ICFuZXh0Lm1hdGNoZXMoJ2Vsc2UtaWYsZWxzZScpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmV4dC5fX2FraWxpLnNldEFjdGl2aXR5KHRoaXMuYWN0aXZlIHx8IHRoaXMuc3RhdGUpO1xuICAgIG5leHQuX19ha2lsaS5zZXRSZWNyZWF0aW9uKHRoaXMucmVjcmVhdGUpO1xuICAgIHJlc3VsdCA9IG5leHQuX19ha2lsaS5zZXRTdGF0ZSgpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzKS50aGVuKCgpID0+ICByZXN1bHQpO1xuICB9XG5cbiAgY29tcGlsYXRpb24oKSB7XG4gICAgbGV0IHJlcztcblxuICAgIGlmICh0aGlzLnN0YXRlICYmICF0aGlzLmFjdGl2ZSkge1xuICAgICAgaWYgKHRoaXMucmVjcmVhdGUgfHwgIXRoaXMuaXNDb21waWxlZCkge1xuICAgICAgICByZXMgPSB0aGlzLmNvbXBpbGUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbC5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsIHRoaXMuZGlzcGxheSwgJ2ltcG9ydGFudCcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnJlY3JlYXRlKSB7XG4gICAgICAgIHRoaXMuZW1wdHkoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCF0aGlzLmlzQ29tcGlsZWQpIHtcbiAgICAgICAgcmVzID0gdGhpcy5jb21waWxlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScsICdpbXBvcnRhbnQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgY29tcGlsZSgpIHtcbiAgICBsZXQgcmVzO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5odG1sOyAgICBcbiAgICByZXMgPSBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgIHRoaXMuaXNDb21waWxlZCA9IHRydWU7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxufVxuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgY29uZGl0aW9uYWwgc3RhdGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfY29uZGl0aW9uYWxfc3RhdGVtZW50c31cbiAqIFxuICogQHRhZyBlbHNlLWlmXG4gKiBAc2VsZWN0b3IgZWxzZS1pZltpc11cbiAqIEBhdHRyIHtib29sZWFufSBpcyBAc2VlIElmXG4gKi9cbmV4cG9ydCBjbGFzcyBFbHNlSWYgZXh0ZW5kcyBJZiB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgY29uZGl0aW9uYWwgc3RhdGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfY29uZGl0aW9uYWxfc3RhdGVtZW50c31cbiAqIFxuICogQHRhZyBlbHNlXG4gKi9cbmV4cG9ydCBjbGFzcyBFbHNlIGV4dGVuZHMgRWxzZUlmIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnaXMnLCAndHJ1ZScpO1xuICB9XG59XG5cbklmLkVsc2VJZiA9IEVsc2VJZjtcbklmLkVsc2UgPSBFbHNlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2lmLmpzIiwiaW1wb3J0IEZvciwgeyBMb29wIH0gZnJvbSAnLi9mb3IuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCBzZWxlY3QuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX3NlbGVjdH1cbiAqIFxuICogQHRhZyBzZWxlY3QgIFxuICogQGF0dHIge3N0cmluZ30gdmFsdWUgLSBhY3R1YWwgdmFsdWVcbiAqIEBhdHRyIFtpbl0gQHNlZSBGb3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydtdWx0aXBsZSddLmNvbmNhdChGb3IuYm9vbGVhbkF0dHJpYnV0ZXMpO1xuICBzdGF0aWMgZXZlbnRzID0gWydjaGFuZ2UnXS5jb25jYXQoRm9yLmV2ZW50cyk7XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3NlbGVjdCcsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnb3B0aW9uJywgdGhpcy5PcHRpb24pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pdGVyYXRvclRhZ05hbWUgPSAnb3B0aW9uJztcbiAgICB0aGlzLmlzTXVsdGlwbGUgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkgeyBcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHRoaXMuZWwuY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpKTtcbiAgICBsZXQgcmVzID0gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgICBcbiAgICB0aGlzLmF0dHIoJ211bHRpcGxlJywgdGhpcy5zZXRNdWx0aXBsZSk7XG4gICAgdGhpcy5hdHRyKCdjb250ZW50JywgdGhpcy5zZXRDb250ZW50KTtcbiAgICB0aGlzLmF0dHIoJ2luJywgdGhpcy5kcmF3U2VsZWN0KTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgc2V0TXVsdGlwbGUodmFsdWUpIHtcbiAgICB0aGlzLmlzTXVsdGlwbGUgPSB2YWx1ZTtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUodXRpbHMuY29weSh0aGlzLmVsLmNvbnRlbnQpKSk7XG4gIH1cblxuICBzZXRDb250ZW50KHZhbHVlKSB7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKHZhbHVlKSk7XG4gIH1cblxuICBkcmF3U2VsZWN0KCkge1xuICAgIGxldCBzZWxlY3RlZCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldLl9fYWtpbGk7XG4gICAgICBsZXQgc2VsZWN0aW9uID0gb3B0aW9uLmF0dHJzLnNlbGVjdGVkO1xuXG4gICAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICAgIHNlbGVjdGVkLnB1c2gob3B0aW9uLmVsLnZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgb3B0aW9uLmVsLnNlbGVjdGVkID0gc2VsZWN0aW9uO1xuICAgIH1cblxuICAgIGlmICghc2VsZWN0ZWQubGVuZ3RoKSB7XG4gICAgICB0aGlzLnJlZGVmaW5lKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKHNlbGVjdGVkKSk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlSXRlcmF0b3JFbGVtZW50KCkge1xuICAgIGxldCBlbCA9IHN1cGVyLmNyZWF0ZUl0ZXJhdG9yRWxlbWVudCgpO1xuXG4gICAgaWYgKCFlbC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0aGlzLmh0bWwudHJpbSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIGlmICghdGhpcy5pc011bHRpcGxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbC52YWx1ZTtcbiAgICB9XG5cbiAgICBsZXQgY29udGVudCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldO1xuXG4gICAgICBpZiAob3B0aW9uLnNlbGVjdGVkKSB7XG4gICAgICAgIGNvbnRlbnQucHVzaChvcHRpb24udmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgZm9ybWF0VmFsdWUodmFsdWUpIHtcbiAgICBpZiAodGhpcy5pc011bHRpcGxlKSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpPyBbdmFsdWVdOiBbXTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5sZW5ndGg/IHZhbHVlWzBdOiAnJztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJlZGVmaW5lKCkge1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5nZXRDb250ZW50KCkpO1xuICB9XG5cbiAgY2hhbmdlVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodXRpbHMuY29tcGFyZSh0aGlzLmVsLmNvbnRlbnQsIHZhbHVlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdGhpcy5lbC52YWx1ZSA9IHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXTtcblxuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB2YWx1ZS5pbmRleE9mKG9wdGlvbi52YWx1ZSkgIT0gLTE7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5lbC52YWx1ZSA9IHZhbHVlO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXTtcblxuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBvcHRpb24udmFsdWUgPT0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5lbC5jb250ZW50ID0gdmFsdWU7XG4gICAgdGhpcy5hdHRycy5vbkNoYW5nZS5kaXNwYXRjaChFdmVudCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBPcHRpb24gZXh0ZW5kcyBMb29wIHtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydzZWxlY3RlZCddO1xuXG4gIF9fZ2V0UGFyc2VkRXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG4gICAgcmV0dXJuIHV0aWxzLmRlY29kZUh0bWxFbnRpdGllcyhleHByZXNzaW9uKTtcbiAgfVxuXG4gIGNoYW5nZWRTZWxlY3RlZCh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U2VsZWN0ZWQodmFsdWUpO1xuICB9XG5cbiAgc2V0U2VsZWN0ZWQodmFsdWUpIHtcbiAgICB0aGlzLmVsLnNlbGVjdGVkID0gdmFsdWU7XG4gICAgdGhpcy5mb3IucmVkZWZpbmUoKTtcbiAgfVxufVxuXG5TZWxlY3QuT3B0aW9uID0gT3B0aW9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3NlbGVjdC5qcyIsImltcG9ydCBUZXh0IGZyb20gJy4vdGV4dC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggaW5wdXQgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2lucHV0fVxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfY2hlY2tib3hfYW5kX3JhZGlvfVxuICogXG4gKiBAdGFnIGlucHV0XG4gKiBAYXR0ciBAc2VlIFRleHRcbiAqIEBtZXNzYWdlIEBzZWUgVGV4dFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCBleHRlbmRzIFRleHQge1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ2NoZWNrZWQnLCAnbXVsdGlwbGUnXS5jb25jYXQoVGV4dC5ib29sZWFuQXR0cmlidXRlcyk7XG4gIHN0YXRpYyBldmVudHMgPSBbJ2NoYW5nZSddLmNvbmNhdChUZXh0LmV2ZW50cyk7XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2lucHV0JywgdGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmlzQ2hlY2tib3ggPSB0aGlzLmVsLnR5cGUgPT0gJ2NoZWNrYm94JztcbiAgICB0aGlzLmlzUmFkaW8gPSB0aGlzLmVsLnR5cGUgPT0gJ3JhZGlvJzsgICAgXG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICAodGhpcy5pc0NoZWNrYm94IHx8IHRoaXMuaXNSYWRpbykgJiYgdGhpcy5hdHRyKCdjaGVja2VkJywgdGhpcy5zZXRDaGVja2VkKTtcbiAgICByZXR1cm4gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfSAgXG5cbiAgc2V0Q2hlY2tlZCh2YWx1ZSkge1xuICAgIHZhbHVlID0gISF2YWx1ZTtcbiAgICBcbiAgICBpZiAodGhpcy5lbC5jaGVja2VkID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZWwuY2hlY2tlZCA9IHZhbHVlO1xuICAgIHRoaXMuX19pc0NvbXBpbGVkICYmIHRoaXMuYXR0cnMub25DaGFuZ2UuZGlzcGF0Y2goRXZlbnQsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICB0aGlzLmlzUmFkaW8gJiYgdGhpcy5jaGFuZ2VSYWRpbygpO1xuICB9XG5cbiAgc2V0VmFsdWUoKSB7XG4gICAgc3VwZXIuc2V0VmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLmlzUmFkaW8gJiYgdGhpcy5hdHRycy5vbkNoYW5nZS5kaXNwYXRjaChFdmVudCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICB9XG5cbiAgY2hhbmdlUmFkaW8oKSB7XG4gICAgbGV0IG5hbWUgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICAgIGxldCBzZWxlY3RvciA9IGBpbnB1dFt0eXBlPXJhZGlvXVtuYW1lPScke25hbWV9J106bm90KFtzY29wZT0nJHt0aGlzLnNjb3BlLl9fbmFtZX0nXSlgO1xuICAgIGxldCBjaGlsZHJlbiA9IEFraWxpLnJvb3QuY2hpbGRyZW4oc2VsZWN0b3IpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuICAgICAgcmFkaW8uc2V0Q2hlY2tlZChyYWRpby5lbC5jaGVja2VkKTtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pbnB1dC5qcyIsImltcG9ydCBGb3IsIHsgTG9vcCB9IGZyb20gJy4vZm9yLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCByYWRpbyBncm91cC5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfcmFkaW9fZ3JvdXB9XG4gKiBcbiAqIEB0YWcgcmFkaW9cbiAqIEBzZWxlY3RvciByYWRpb1tuYW1lXVxuICogQGF0dHIge3N0cmluZ30gbmFtZSAtIG5hbWUgb2YgdGhlIGdyb3VwXG4gKiBAYXR0ciB7c3RyaW5nfG51bGx9IHZhbHVlIC0gc2VsZWN0ZWQgdmFsdWVcbiAqIEBhdHRyIFtpbl0gQHNlZSBGb3JcbiAqIEBtZXNzYWdlIHtzdHJpbmd9IHJhZGlvIC0gc2VudCBvbiB2YWx1ZSBjaGFuZ2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaW8gZXh0ZW5kcyBGb3Ige1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbbmFtZV0nO1xuICBzdGF0aWMgZXZlbnRzID0gWydyYWRpbyddLmNvbmNhdChGb3IuZXZlbnRzKTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgncmFkaW8nLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JhZGlvLWJ1dHRvbicsIHRoaXMuUmFkaW9CdXR0b24pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pdGVyYWJsZSA9IHRoaXMuZWwuaGFzQXR0cmlidXRlKCdpbicpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICBpZih0aGlzLml0ZXJhYmxlKSB7XG4gICAgICByZXR1cm4gc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgQWtpbGkubmV4dFRpY2soKCkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLmdldFJhZGlvVmFsdWUoKTtcblxuICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMucHJldlZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5hdHRycy5vblJhZGlvLnRyaWdnZXIodmFsdWUsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYodGhpcy5pdGVyYWJsZSkge1xuICAgICAgcmV0dXJuIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgcmVzb2x2ZWQoKSB7XG4gICAgdGhpcy5hdHRyKCdpbicsIHRoaXMuc2V0TmFtZXMsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pOyAgIFxuICAgIHRoaXMuYXR0cigndmFsdWUnLCB0aGlzLnNldFZhbHVlKTsgXG4gICAgdGhpcy5hdHRyKCduYW1lJywgdGhpcy5zZXROYW1lcyk7XG5cbiAgICBpZih0aGlzLml0ZXJhYmxlKSB7XG4gICAgICByZXR1cm4gc3VwZXIucmVzb2x2ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBzZXROYW1lcyhuYW1lKSB7XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbignaW5wdXRbdHlwZT1yYWRpb10nKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjaGlsZHJlbltpXS5lbC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBuYW1lIHx8IHRoaXMuYXR0cnMubmFtZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IHRoaXMucHJldlZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHByZXYgPSB0aGlzLnByZXZWYWx1ZTtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuICAgIGxldCBpc1RydWUgPSBmYWxzZTtcbiAgICB0aGlzLnByZXZWYWx1ZSA9IHZhbHVlO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuICAgICAgbGV0IGlzU2VsZWN0ZWQgPSByYWRpby5lbC52YWx1ZSA9PT0gdmFsdWU7XG5cbiAgICAgIGlzU2VsZWN0ZWQgJiYgKGlzVHJ1ZSA9IHRydWUpO1xuICAgICAgcmFkaW8uc2V0Q2hlY2tlZChpc1NlbGVjdGVkKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzVHJ1ZSkge1xuICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIGlmIChwcmV2ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnByZXZWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYXR0cnMub25SYWRpby50cmlnZ2VyKHZhbHVlLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cblxuICBnZXRSYWRpb1ZhbHVlKCkge1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oJ2lucHV0W3R5cGU9cmFkaW9dJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJhZGlvID0gY2hpbGRyZW5baV07XG5cbiAgICAgIGlmIChyYWRpby5lbC5jaGVja2VkKSB7XG4gICAgICAgIHJldHVybiByYWRpby5lbC52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggcmFkaW8gZ3JvdXAgaXRlbS5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfcmFkaW9fZ3JvdXB9XG4gKiBcbiAqIEB0YWcgcmFkaW8tYnV0dG9uXG4gKiBAYXR0ciB7c3RyaW5nfSB2YWx1ZSAtIHZhbHVlXG4gKi9cbmV4cG9ydCBjbGFzcyBSYWRpb0J1dHRvbiBleHRlbmRzIExvb3Age1xuICBzdGF0aWMgdGVtcGxhdGUgPSAnPGxhYmVsPjxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIiR7dGhpcy52YWx1ZX1cIi8+JHt0aGlzLl9fY29udGVudH08L2xhYmVsPic7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRyKCd2YWx1ZScsICd2YWx1ZScpO1xuICAgIHJldHVybiBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG59XG5cblJhZGlvLlJhZGlvQnV0dG9uID0gUmFkaW9CdXR0b247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvcmFkaW8uanMiLCJpbXBvcnQgVGV4dCBmcm9tICcuL3RleHQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIHRleHRhcmVhLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc190ZXh0YXJlYX1cbiAqIFxuICogQHRhZyB0ZXh0YXJlYVxuICogQGF0dHIgQHNlZSBUZXh0XG4gKiBAbWVzc2FnZSBAc2VlIFRleHRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dGFyZWEgZXh0ZW5kcyBUZXh0IHtcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RleHRhcmVhJywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90ZXh0YXJlYS5qcyIsImltcG9ydCBUZXh0IGZyb20gJy4vdGV4dC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgZWxlbWVudHMgd2l0aCBjb250ZW50ZWRpdGFibGUgYXR0cmlidXRlLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jb250ZW50ZWRpdGFibGV9XG4gKiBcbiAqIEB0YWcgY29udGVudFxuICogQHNlbGVjdG9yIGNvbnRlbnQsW2NvbnRlbnRlZGl0YWJsZV1cbiAqIEBhdHRyIEBzZWUgVGV4dFxuICogQGF0dHIge2Jvb2xlYW59IFtlZGl0YWJsZV0gLSBlZGl0YWJsZSBvciBub3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudCBleHRlbmRzIFRleHQge1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnY29udGVudCcsIHRoaXMpO1xuICAgIEFraWxpLmFsaWFzKCdbY29udGVudGVkaXRhYmxlXScsICdjb250ZW50Jyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICBpZiAodGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ2VkaXRhYmxlJykpIHtcbiAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0aGlzLmVsLmdldEF0dHJpYnV0ZSgnZWRpdGFibGUnKSk7XG4gICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZSgnZWRpdGFibGUnKTtcbiAgICB9XG5cbiAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKS5kaXNwbGF5ID09ICdpbmxpbmUnKSB7XG4gICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIHRoaXMudmFsdWVLZXkgPSAnaW5uZXJIVE1MJztcbiAgfVxuXG4gIHNldEVsZW1lbnRGb2N1cygpIHtcbiAgICBsZXQgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIGxldCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG5cbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGhpcy5lbCk7XG4gICAgcmFuZ2UuY29sbGFwc2UoZmFsc2UpO1xuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2NvbnRlbnQuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIGluY2x1ZGUgdGVtcGxhdGVzIGJ5IHVybC5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaHRtbF90ZW1wbGF0ZXN9XG4gKiBcbiAqIEB0YWcgaW5jbHVkZVxuICogQHNlbGVjdG9yIGluY2x1ZGVbdXJsXVxuICogQGF0dHIge3N0cmluZ30gdXJsIC0gdGVtcGxhdGUgcGF0aFxuICogQGF0dHIge251bWJlcnxmdW5jdGlvbnxib29sZWFufSBbY2FjaGVdIC0gcmVxdWVzdCBjYWNoZSB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JlcXVlc3RzI2RvY3NfY2FjaGV9XG4gKiBAbWVzc2FnZSB7dm9pZH0gbG9hZCAtIHNlbnQgb24gdGhlIHRlbXBsYXRlIGxvYWRcbiAqIEBtZXNzYWdlIHtFcnJvcn0gZXJyb3IgLSBzZW50IG9uIGVycm9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluY2x1ZGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgdHJhbnNwYXJlbnQgPSB0cnVlOyBcbiAgc3RhdGljIG1hdGNoZXMgPSAnW3VybF0nO1xuICBzdGF0aWMgZXZlbnRzID0gWydsb2FkJywgJ2Vycm9yJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2luY2x1ZGUnLCB0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cignY2FjaGUnLCB0aGlzLnNldENhY2hlKTtcbiAgICByZXR1cm4gdGhpcy5hdHRyKCd1cmwnLCB0aGlzLnNldFRlbXBsYXRlKTtcbiAgfVxuXG4gIHNldENhY2hlKGNhY2hlKSB7XG4gICAgdGhpcy5jYWNoZSA9IGNhY2hlO1xuICB9XG5cbiAgc2V0VGVtcGxhdGUodXJsKSB7XG4gICAgdGhpcy5jb25uZWN0aW9uICYmIHRoaXMuY29ubmVjdGlvbi5hYm9ydCgpO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KHVybCwge1xuICAgICAgY2FjaGU6IHRoaXMuY2FjaGUsXG4gICAgICBvblN0YXJ0OiAoeGhyKSA9PiB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IHhocjtcbiAgICAgIH1cbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gICAgICB0aGlzLmVtcHR5KCk7XG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcbiAgICAgIEFraWxpLnNldFRlbXBsYXRlKHRoaXMuZWwsIHJlcy5kYXRhKTtcblxuICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0cnMub25Mb2FkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgfSk7XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgdGhpcy5hdHRycy5vbkVycm9yLnRyaWdnZXIoZXJyLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaW5jbHVkZS5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGlmcmFtZXMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBpZnJhbWVcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElmcmFtZSBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2lmcmFtZScsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaWZyYW1lLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgaW1hZ2VzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgaW1nXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZSBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2ltZycsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBlbWJlZCBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIGVtYmVkXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWJlZCBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2VtYmVkJywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9lbWJlZC5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGF1ZGlvIGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgYXVkaW9cbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnYXVkaW8nLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2F1ZGlvLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgdmlkZW8gZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyB2aWRlb1xuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlkZW8gZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd2aWRlbycsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdmlkZW8uanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciB0cmFjayBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIHRyYWNrXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFjayBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RyYWNrJywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90cmFjay5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIHNvdXJjZSBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIHNvdXJjZVxuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU291cmNlIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnc291cmNlJywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9zb3VyY2UuanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBvYmplY3QgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBvYmplY3RcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdHMgZXh0ZW5kcyBVcmwgeyAgXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMudXJsQXR0cmlidXRlID0gJ2RhdGEnO1xuICB9XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ29iamVjdCcsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvb2JqZWN0LmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuLi9zZXJ2aWNlcy9yb3V0ZXIuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGxpbmtzLlxuICogSXQgd29ya3Mgd2l0aCByb3V0ZXIgdG9vLiBcbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfbGlua3N9XG4gKiBcbiAqIEB0YWcgYVxuICogQHNlbGVjdG9yIGFbc3RhdGVdOm5vdChbdXJsXSksYVt1cmxdOm5vdChbc3RhdGVdKVxuICogQGF0dHIge3N0cmluZ30gW3VybF0gLSB1cmwgdG8gZ28gb24gY2xpY2tcbiAqIEBhdHRyIHtzdHJpbmd9IFtzdGF0ZV0gLSBzdGF0ZSBvZiByb3V0ZXIgdG8gZ28gb24gY2xpY2sge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nfVxuICogQGF0dHIge29iamVjdH0gW3BhcmFtc10gLSBwYXJhbXMgZm9yIHRoZSBzdGF0ZSB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmcjZG9jc19zdGF0ZV9wYXJhbXN9XG4gKiBAYXR0ciB7b2JqZWN0fSBbcXVlcnldIC0gcXVlcnkgZm9yIHRoZSBzdGF0ZSB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmcjZG9jc19zdGF0ZV9xdWVyeX1cbiAqIEBhdHRyIHtzdHJpbmd9IFtoYXNoXSAtIGhhc2ggZm9yIHRoZSBzdGF0ZSB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmcjZG9jc19zdGF0ZV9oYXNofVxuICogQGF0dHIge29iamVjdH0gW29wdGlvbnNdIC0gb3B0aW9ucyBmb3IgdGhlIHN0YXRlIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3JvdXRlci5sb2NhdGlvbn1cbiAqIEBzY29wZSB7Ym9vbGVhbn0gaXNBY3RpdmVTdGF0ZSAtIHRoZSBzdGF0ZSBpcyBhY3RpdmUgb3Igbm90IFxuICogQHNjb3BlIHtib29sZWFufSBpbkFjdGl2ZVN0YXRlIC0gdGhlIHN0YXRlIGlzIHBhcnQgb2YgdGhlIGFjdGl2ZSBzdGF0ZSBvciBub3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tzdGF0ZV06bm90KFt1cmxdKSxbdXJsXTpub3QoW3N0YXRlXSknO1xuICBzdGF0aWMgY29udHJvbEF0dHJpYnV0ZXMgPSB0cnVlO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdhJywgdGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnN0YXRlID0gbnVsbDtcbiAgICB0aGlzLnBhcmFtcyA9IHt9O1xuICAgIHRoaXMucXVlcnkgPSB7fTtcbiAgICB0aGlzLmhhc2ggPSBudWxsO1xuICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuICAgIHRoaXMuaXNVcmwgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZSgndXJsJyk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKHRoaXMuaXNVcmwpIHtcbiAgICAgICAgcm91dGVyLmxvY2F0aW9uKHRoaXMuYXR0cnMudXJsLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJvdXRlci5zdGF0ZSh0aGlzLnN0YXRlLm5hbWUsIHRoaXMucGFyYW1zLCB0aGlzLnF1ZXJ5LCB0aGlzLmhhc2gsICB0aGlzLm9wdGlvbnMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZCA9ICgpID0+IHRoaXMuc3RhdGUgJiYgdGhpcy5zZXRBY3Rpdml0eSgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzdGF0ZS1jaGFuZ2VkJywgdGhpcy5vblN0YXRlQ2hhbmdlZCk7XG5cbiAgICB0aGlzLmF0dHIoJ3N0YXRlJywgdGhpcy5zZXRTdGF0ZSk7XG4gICAgdGhpcy5hdHRyKCdwYXJhbXMnLCB0aGlzLnNldFBhcmFtcyk7XG4gICAgdGhpcy5hdHRyKCdxdWVyeScsIHRoaXMuc2V0UXVlcnkpO1xuICAgIHRoaXMuYXR0cignaGFzaCcsIHRoaXMuc2V0SGFzaCk7XG4gICAgdGhpcy5hdHRyKCdvcHRpb25zJywgdGhpcy5zZXRPcHRpb25zKTtcbiAgICB0aGlzLmF0dHIoJ3VybCcsIHRoaXMuc2V0VXJsKTtcbiAgICB0aGlzLmF0dHIoJ3N0YXRlJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cigncGFyYW1zJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cigncXVlcnknLCB0aGlzLnJlc2V0SHJlZiwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5hdHRyKCdoYXNoJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cigndXJsJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMucmVzZXRIcmVmKCk7XG4gIH1cblxuICByZW1vdmVkKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzdGF0ZS1jaGFuZ2VkJywgdGhpcy5vblN0YXRlQ2hhbmdlZCk7XG4gIH1cblxuICBzZXRVcmwodXJsKSB7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gIH1cblxuICBzZXRTdGF0ZShuYW1lKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0U3RhdGUobmFtZSk7XG4gICAgdGhpcy5zZXRBY3Rpdml0eSgpO1xuICB9XG5cbiAgc2V0QWN0aXZpdHkoKSB7XG4gICAgdGhpcy5zY29wZS5pc0FjdGl2ZVN0YXRlID0gcm91dGVyLmlzQWN0aXZlU3RhdGUodGhpcy5zdGF0ZSk7XG4gICAgdGhpcy5zY29wZS5pbkFjdGl2ZVN0YXRlID0gcm91dGVyLmluQWN0aXZlU3RhdGUodGhpcy5zdGF0ZSk7XG4gIH1cblxuICBzZXRQYXJhbXMocGFyYW1zKSB7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMgIT0gJ29iamVjdCcgfHwgIXBhcmFtcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgcGFyYW1zIG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gIH1cblxuICBzZXRRdWVyeShxdWVyeSkge1xuICAgIGlmICh0eXBlb2YgcXVlcnkgIT0gJ29iamVjdCcgfHwgIXF1ZXJ5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBxdWVyeSBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgfVxuXG4gIHNldEhhc2goaGFzaCkge1xuICAgIGlmICh0eXBlb2YgaGFzaCAhPSAnc3RyaW5nJyAmJiBoYXNoICE9PSB1bmRlZmluZWQgJiYgaGFzaCAhPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgaGFzaCBtdXN0IGJlIGEgc3RyaW5nfG51bGxgKTtcbiAgICB9XG5cbiAgICB0aGlzLmhhc2ggPSBoYXNoO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zICE9ICdvYmplY3QnIHx8ICFvcHRpb25zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBvcHRpb25zIG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIGdldFN0YXRlKG5hbWUpIHtcbiAgICBsZXQgc3RhdGUgPSByb3V0ZXIuZ2V0U3RhdGUobmFtZSk7XG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCByb3V0ZXIgc3RhdGUgd2l0aCBuYW1lIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgcmVzZXRIcmVmKCkge1xuICAgIGlmICh0aGlzLnVybCkge1xuICAgICAgdGhpcy5hdHRycy5ocmVmID0gdGhpcy51cmw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5hdHRycy5ocmVmID0gcm91dGVyLmNyZWF0ZVN0YXRlVXJsKHRoaXMuc3RhdGUsIHRoaXMucGFyYW1zLCB0aGlzLnF1ZXJ5LCB0aGlzLmhhc2gpO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2EuanMiXSwic291cmNlUm9vdCI6IiJ9