/*!
 * Akili is a javascript framework
 * 
 * const Akili = makeItEasy(js + html);
 * 
 * @version 0.7.11
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

var _component2 = __webpack_require__(2);

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

var _url = __webpack_require__(1);

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

var _utils = __webpack_require__(3);

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
  var scope = this.__scopes[name];
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

    if (options.tag && Akili.__evaluation && Akili.options.ignoredTags.indexOf(options.tag) == -1) {
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(2);

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
/* 2 */
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

var _utils = __webpack_require__(3);

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

        if (!node.__component.__compareNodePropertyValue(prop, value)) {
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

      return !node.__component.__compareNodePropertyValue(prop, value);
    }

    /**
     * Compare a node property value
     * 
     * @param {object} prop 
     * @param {*} value 
     * @param {object} [options] 
     */

  }, {
    key: '__compareNodePropertyValue',
    value: function __compareNodePropertyValue(prop, value) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
        value = { hash: _utils2.default.createObjectHash(value) };
      }

      return _utils2.default.compare(value, prop.copy, options);
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

            if (!_bind.node.__initialized) {
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
     * Prepare the attribute value for getting
     * 
     * @param {Node} node
     * @param {*} value
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
     */

  }, {
    key: '__prepareAttributeOut',
    value: function __prepareAttributeOut(node, value) {
      return _utils2.default.copy(value, { plain: true });
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

        var emitter = new _akili2.default.EventEmitter(eventName, node, el, component);

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
     * @param {object} [options]
     * @protected
     */

  }, {
    key: '__deinitializeNode',
    value: function __deinitializeNode(node) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (node.__event) {
        node.__event.unbind();
      }

      if (node.__hasBindings && !options.saveBindings) {
        this.__unbindParentsByNodes(node);
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
     * Trigger store and attributes change
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
      var copy = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object' ? { hash: _utils2.default.createObjectHash(value) } : _utils2.default.copy(value);

      if (prop) {
        var res = node.__component.__compareNodePropertyValue(prop, value);
        prop.value = value;
        prop.copy = copy;
        return !res;
      }

      node.__properties[this.__createKeysHash(keys)] = {
        component: this,
        value: value,
        copy: copy,
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
     * Map nodes
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

      options = _extends({ rootAttrs: true, attrs: true, node: true }, options);

      var find = function find(el) {
        if (!el) {
          return;
        }

        if (options.attrs && (el !== _this16.el || options.rootAttrs)) {
          for (var k = 0, attrs = el.attributes, c = attrs.length; k < c; k++) {
            fn(attrs[k]);
          }
        }

        for (var i = 0, l = el.childNodes.length; i < l; i++) {
          var node = el.childNodes[i];

          if (node.nodeType == 3) {
            options.node && fn(node);
          } else if (node.nodeType == 1 && !node.__akili) {
            find(node);
          }
        }
      };

      find(this.el);
    }

    /**
     * Get all nodes
     * 
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
     * @param {Node|Node[]} nodes
     * @protected
     */

  }, {
    key: '__unbindByNodes',
    value: function __unbindByNodes(nodes) {
      var _this17 = this;

      !Array.isArray(nodes) && (nodes = [nodes]);

      var unbind = function unbind(obj) {
        var keys = Object.keys(obj);

        for (var j = 0, c = keys.length; j < c; j++) {
          var k = keys[j];

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
          } else if (!_this17.__isSystemBindingKey(k)) {
            unbind(obj[k]);
          }
        }
      };

      unbind(this.__bindings);
      this.__clearEmptyBindings();
    }

    /**
     * Remove all parents bindings with the nodes
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
     * Clear all empty bindings
     *
     * @param {object} [obj]
     * @protected
     */

  }, {
    key: '__clearEmptyBindings',
    value: function __clearEmptyBindings(obj) {
      var _this18 = this;

      var clear = function clear(obj, parent, key) {
        for (var k in obj) {
          if (!obj.hasOwnProperty(k)) {
            continue;
          }

          var _val2 = obj[k];

          if (k == '__data' && (!_val2 || !_val2.length)) {
            delete obj[k];
          } else if (!_this18.__isSystemBindingKey(k)) {
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
     * @param {object} [options]
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
     * Remove the component without children removing
     *
     * @param {object} [options]
     * @protected
     */

  }, {
    key: '__remove',
    value: function __remove() {
      var _this19 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var nodes = [];
      this.attrs.onRemoved && this.attrs.onRemoved.trigger(undefined, { bubbles: false });
      nodes = nodes.concat(this.__detach({ saveBindings: true }));
      nodes = nodes.concat(this.__empty({ saveBindings: true }));
      this.__clearStoreLinks();
      this.removed();
      _akili2.default.removeScope(this.__scope.__name);
      this.el.remove();

      if (!options.saveBindings) {
        this.__unbindParentsByNodes(nodes);
      }

      _akili2.default.nextTick(function () {
        delete _this19.el.__akili;
        _this19.__bindings = null;
        _this19.__tags = null;
        _this19.__evaluatingEvent = null;
        _this19.__recompiling = false;
        _this19.__compiling = null;
        _this19.__disableProxy = null;
        _this19.__disableStoreKeys = null;
        _this19.__disableAttrKeys = null;
        _this19.__children = null;
        _this19.__parent = null;
        _this19.__parents = null;
        _this19.__attrs = null;
        _this19.__attrLinks = null;
        _this19.__storeLinks = null;
        _this19.__attributeOf = null;
        _this19.__evaluationComponent = null;
        _this19.scope = null;
        _this19.el = null;
      });

      return nodes;
    }

    /**
     * Detach the component
     *
     * @param {object} [options]
     * @protected
     */

  }, {
    key: '__detach',
    value: function __detach() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.__parent && this.__parent.__akili.__spliceChild(this.el);
      var nodes = [].slice.call(this.el.attributes).filter(function (node) {
        return node.__initialized;
      });

      if (!options.saveBindings) {
        this.__unbindParentsByNodes(nodes);
      }

      return nodes;
    }

    /**
     * Clear the component html
     *
     * @param {object} [options]
     * @protected
     */

  }, {
    key: '__empty',
    value: function __empty() {
      var _this20 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var nodes = this.__removeChildren({ saveBindings: true });

      this.__mapNodes(function (node) {
        if (!node.__initialized) {
          return;
        }

        _this20.__deinitializeNode(node, { saveBindings: true });
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
/* 3 */
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
 * Create a string hash from an object
 * 
 * @param {object} obj
 */
utils.createObjectHash = function (obj) {
  var hash = 0;
  var str = JSON.stringify(obj);

  for (var i = 0; i < str.length; i++) {
    var char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }

  return hash + '';
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

var _utils = __webpack_require__(3);

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
      return _utils2.default.createObjectHash(data);
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

var _component = __webpack_require__(2);

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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(2);

var _component2 = _interopRequireDefault(_component);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

var _utils = __webpack_require__(3);

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
      this.__comparisonValue = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object' ? { hash: _utils2.default.createObjectHash(value) } : _utils2.default.copy(value);

      if (this.iterators.length > index) {
        var iterator = this.iterators[index];

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

        if (!_utils2.default.compare(this.__comparisonValue, iterator.comparisonValue)) {
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
      var children = [].slice.call(this.el.children);
      this.iterators.sort(function (a, b) {
        return children.indexOf(a.el) - children.indexOf(b.el);
      });

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
      this.comparisonValue = this.for.__comparisonValue;
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

var _utils = __webpack_require__(3);

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class for working with events.
 * An instance of this class allows you to trigger custom javascript events.
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
   * @param {*} data - sending data. Will be in the event.detail
   * @param {object} [options]
   * @param {boolean} [force]
   * @returns {Promise}
   */


  _createClass(EventEmitter, [{
    key: "trigger",
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
    key: "dispatch",
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
    key: "prepareOptions",
    value: function prepareOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      options = _extends({ bubbles: true }, options);
      this.node.__component.__prepareAttributeOut(this.node, options.detail);
      return options;
    }

    /**
     * Check event callback doesn't run recursive
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

var _utils = __webpack_require__(3);

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

/**
 * Globals to use the custom variables in scope expressions
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

var _component = __webpack_require__(2);

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

var _utils = __webpack_require__(3);

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
 * Set router's default variables
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

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  options = _extends({}, options);
  options.manual = true;
  this.isolate(function () {
    return _this2.setUrl(url);
  });
  return this.changeState(options);
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
  window.history.pushState(undefined, undefined, url);
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
 * Replace url
 *
 * @param {string} url
 */
router.replaceUrl = function (url) {
  this.hashMode ? this.replaceHashUrl(url) : this.replaceHistoryUrl(url);
};

/**
 * Set url using history
 *
 * @param url
 */
router.replaceHistoryUrl = function (url) {
  window.history.replaceState(undefined, undefined, url);
};

/**
 * Set url using hash
 *
 * @param url
 */
router.replaceHashUrl = function (url) {
  window.history.replaceState(undefined, undefined, '#' + (url || '/'));
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

  for (var i = 0; i < 9; i++) {
    var paramsTemp = this.prepareStateParams(state, params, args);
    var queryTemp = this.prepareStateQuery(state, query, args);
    var hashTemp = this.prepareStateHash(state, hash, args);

    if (hashTemp === null) {
      options.emptyHash = null;
    } else if (hashTemp === '') {
      options.emptyHash = '';
    }

    args = { params: paramsTemp, query: queryTemp, hash: hashTemp, options: options };
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
  var url = router.transition && !router.transition.__finished ? router.transition.url : this.getUrl();
  url = this.splitSlashes('/' + url.split('?')[0] + '/');
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

var _component = __webpack_require__(2);

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

var _utils = __webpack_require__(3);

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

var _component = __webpack_require__(2);

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

var _url = __webpack_require__(1);

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

var _url = __webpack_require__(1);

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

var _url = __webpack_require__(1);

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

var _url = __webpack_require__(1);

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

var _url = __webpack_require__(1);

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

var _url = __webpack_require__(1);

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

var _url = __webpack_require__(1);

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

var _url = __webpack_require__(1);

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

var _component = __webpack_require__(2);

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
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmNjMGZkMzk4ODMyZjgzYTBkYTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FraWxpLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VybC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9nbG9iYWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JvdXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaWYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JhZGlvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHRhcmVhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5jbHVkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZW1iZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdHJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc291cmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hLmpzIl0sIm5hbWVzIjpbIkFraWxpIiwiX19kZWZhdWx0cyIsInNldERlZmF1bHRzIiwib3B0aW9ucyIsImRlYnVnIiwiaWdub3JlZFRhZ3MiLCJfX2luaXQiLCJfX2NsZWFyZWQiLCJfX2NvbXBvbmVudHMiLCJfX2FsaWFzZXMiLCJfX3Njb3BlcyIsIl9fc3RvcmVMaW5rcyIsIl9fd2luZG93IiwiX19pc29sYXRpb24iLCJfX2V2YWx1YXRpb24iLCJfX3dyYXBwaW5nIiwiX19vbkVycm9yIiwidHJpZ2dlckluaXQiLCJodG1sQm9vbGVhbkF0dHJpYnV0ZXMiLCJrZXkiLCJnbG9iYWxzIiwidXRpbHMiLCJjb21wb25lbnRzIiwic2VydmljZXMiLCJDb21wb25lbnQiLCJFdmVudEVtaXR0ZXIiLCJTY29wZSIsIkEiLCJBdWRpbyIsIkNvbnRlbnQiLCJGb3IiLCJFbWJlZCIsIklmIiwiSW5jbHVkZSIsIklucHV0IiwiSWZyYW1lIiwiSW1hZ2UiLCJPYmplY3QiLCJPYmplY3RzIiwiUmFkaW8iLCJSb3V0ZSIsIlNlbGVjdCIsIlNvdXJjZSIsIlRleHQiLCJUZXh0YXJlYSIsIlRyYWNrIiwiVXJsIiwiVmlkZW8iLCJyZXF1ZXN0Iiwicm91dGVyIiwic3RvcmUiLCJkZWZpbmUiLCJlcnJvckhhbmRsaW5nIiwiaXNvbGF0ZUV2ZW50cyIsImlzb2xhdGVBcnJheVByb3RvdHlwZSIsImlzb2xhdGVXaW5kb3dGdW5jdGlvbnMiLCJpIiwibCIsImxlbmd0aCIsImRlZmF1bHRzIiwiZm4iLCJwdXNoIiwiY2xlYXJHbG9iYWxzIiwiRWxlbWVudCIsInByb3RvdHlwZSIsIkFycmF5IiwidW53cmFwIiwid2luZG93Iiwic2V0VGltZW91dCIsInNldEludGVydmFsIiwiUHJvbWlzZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJqb2luQmluZGluZ0tleXMiLCJrZXlzIiwibWFwIiwiZWwiLCJ0b1N0cmluZyIsImpvaW4iLCJhZGRTY29wZSIsInNjb3BlIiwiX19uYW1lIiwiRXJyb3IiLCJnZXRTY29wZSIsIm5hbWUiLCJyZW1vdmVTY29wZSIsIl9fZWwiLCJfX2NvbXBvbmVudCIsIl9fcGFyZW50IiwiZ2V0QWtpbGlQYXJlbnRzIiwidHJlZSIsImFyciIsImNoZWNrIiwibm9kZSIsInBhcmVudE5vZGUiLCJfX2FraWxpIiwic2V0VGVtcGxhdGUiLCJ0ZW1wbGF0ZSIsInJlcGxhY2UiLCJpbm5lckhUTUwiLCJjcmVhdGVTY29wZU5hbWUiLCJjcmVhdGVSYW5kb21TdHJpbmciLCJzdHIiLCJpc29sYXRlIiwicmVzIiwicHJvcHMiLCJrIiwiaGFzT3duUHJvcGVydHkiLCJwcm9wIiwidmFsIiwiZ2V0UHJvcGVydHlCeUtleXMiLCJjb21wb25lbnQiLCJfX3Njb3BlIiwiX19pc1Jlc29sdmVkIiwiX190cmlnZ2VyU3RvcmVBbmRBdHRyIiwiX19ldmFsdWF0ZUJ5S2V5cyIsImlzRGVsZXRlZCIsInVuZXZhbHVhdGUiLCJldmFsdWF0aW9uIiwid3JhcHBpbmciLCJ1bmlzb2xhdGUiLCJpc29sYXRpb24iLCJuZXh0VGljayIsInJlc29sdmUiLCJ0aGVuIiwiaW5pdGlhbGl6ZSIsInJlY29tcGlsZSIsIl9fcmVjb21waWxlIiwiaXNSb290IiwiX19yb290IiwiY29tcG9uZW50TmFtZSIsInRvRGFzaENhc2UiLCJnZXRBdHRyaWJ1dGUiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJfQ29tcG9uZW50IiwiQ0hFQ0tfQUxJQVNFUyIsInNlbGVjdG9ycyIsInNlbGVjdG9yQWxsIiwibWF0Y2hlcyIsInNlbGVjdG9yIiwiX19jYW5jZWxsZWQiLCJmaW5kIiwicCIsIl9fcHJldmVudCIsIl9fY3JlYXRlIiwiY29tcGlsZSIsInJvb3QiLCJlbGVtZW50cyIsIm5lc3RlZEluaXRpYWxpemluZyIsImNoaWxkcmVuIiwiY2hpbGQiLCJfX2NvbXBpbGUiLCJhbGwiLCJyIiwiX19yZXNvbHZlIiwiY29uc29sZSIsIndhcm4iLCJyZW1vdmVDb21wb25lbnQiLCJhbGlhcyIsInJlbW92ZUFsaWFzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsIm9sZCIsIl9faXNQcm94eSIsImFwcGx5IiwiYXJndW1lbnRzIiwiY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24iLCJBS0lMSV9TU1IiLCJjb25zdHJ1Y3RvciIsImNhdGNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsIl9fYWtpbGlMaXN0ZW5lcnMiLCJhcmdzIiwic2xpY2UiLCJjYWxsIiwibGluayIsImxpc3RlbmVyIiwic3BsaWNlIiwicG9zIiwiaXNBcnJheSIsIm51bSIsImluZGV4IiwiY2FsbGJhY2siLCJfX2lzb2xhdGVkIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwidmFsdWUiLCJ3cmFwIiwib2JqIiwiY3VycmVudCIsIndyYXBGdW5jdGlvbiIsImMiLCJkZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJyZXZlcnNlIiwiYWtpbGlXcmFwcGVkRnVuY3Rpb24iLCJ0YWciLCJpbmRleE9mIiwiX19hZGRUYWciLCJldmFsdWF0ZVRhZyIsInRhZ3MiLCJjaGlsZFRhZ3MiLCJfX3RhZ3MiLCJqIiwicyIsIl9fZXZhbHVhdGVOb2RlIiwicmVtb3ZlVGFnIiwiX19yZW1vdmVUYWciLCJzdGF0dXMiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJpbml0IiwiZG9jdW1lbnQiLCJib2R5IiwiZG9jdW1lbnRFbGVtZW50IiwiQUtJTElfU0VSVkVSIiwiaW5pdFNlcnZlclNpZGVIdG1sIiwiaHRtbCIsImluaXRTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlIiwicmVxdWVzdENhY2hlIiwiQUtJTElfQ0xJRU5UIiwicHJlcGFyZVNlcnZlclNpZGVIdG1sIiwiY2hhbmdlU3RhdGUiLCJwcmVwYXJlU2VydmVyU2lkZVJlcXVlc3RDYWNoZSIsImVyciIsImF0dHJpYnV0ZXMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJkb2MiLCJwYXJzZUZyb21TdHJpbmciLCJxdWVyeVNlbGVjdG9yIiwiYXR0ciIsInNldEF0dHJpYnV0ZSIsImluc3RhbmNlIiwiX19jYWNoZSIsIl9faW5zdGFuY2VzIiwib3V0ZXJIVE1MIiwiY2FjaGUiLCJfX21haW4iLCJkZWluaXQiLCJzdG9yZUtleXMiLCJfX3RhcmdldCIsInVybEF0dHJpYnV0ZSIsInNldFVybCIsInVybCIsImF0dHJzIiwiZXZhbHVhdGlvblJlZ2V4IiwiZXZhbHVhdGlvblJlZ2V4R2xvYmFsIiwiUmVnRXhwIiwic291cmNlIiwic3lzdGVtQXR0cmlidXRlcyIsImNvbnRleHQiLCJleHByZXNzaW9uIiwidmFyaWFibGVzIiwidmFycyIsImV4cHMiLCJzcGxpdCIsIkZ1bmN0aW9uIiwiX19pc01vdW50ZWQiLCJfX2lzQ29tcGlsZWQiLCJfX2JpbmRpbmdzIiwiX19ldmFsdWF0aW5nRXZlbnQiLCJfX3JlY29tcGlsaW5nIiwiX19jb21waWxpbmciLCJfX2Rpc2FibGVQcm94eSIsIl9fZGlzYWJsZVN0b3JlS2V5cyIsIl9fZGlzYWJsZUF0dHJLZXlzIiwiX19jaGlsZHJlbiIsIl9fcGFyZW50cyIsIl9fYXR0cnMiLCJfX2F0dHJMaW5rcyIsIl9fYXR0cmlidXRlT2YiLCJfX2V2YWx1YXRpb25Db21wb25lbnQiLCJjaGVja0NoYW5nZXMiLCJzZXRFdmVudHMiLCJzZXRQYXJlbnRzIiwic2V0Qm9vbGVhbkF0dHJpYnV0ZXMiLCJkZWZpbmVBdHRyaWJ1dGVzIiwiX19jcmVhdGVDb21waWxhdGlvbk9wdGlvbnMiLCJfX2NyZWF0ZVJlY29tcGlsYXRpb25PcHRpb25zIiwiX19zZXRFdmVudHMiLCJfX3NldFBhcmVudHMiLCJfX3NldEJvb2xlYW5BdHRyaWJ1dGVzIiwiX19kZWZpbmVBdHRyaWJ1dGVzIiwiX19pbml0aWFsaXplIiwiY3JlYXRlZCIsImNvbnRyb2wiLCJfX2NvbnRyb2xBdHRyaWJ1dGVzIiwiX19ldmFsdWF0ZVBhcmVudCIsIm5ld1BhcmVudCIsIl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzIiwiaW50ZXJwb2xhdGUiLCJwYXJlbnQiLCJub2RlVHlwZSIsIl9faW5pdGlhbGl6ZU5vZGUiLCJjaGlsZE5vZGVzIiwib25Db21waWxlZCIsInRyaWdnZXIiLCJ1bmRlZmluZWQiLCJidWJibGVzIiwiY29tcGlsZWQiLCJ0ZW1wbGF0ZVVybCIsImdldCIsInRlbXBsYXRlQ2FjaGUiLCJfX2NvbnRlbnQiLCJkYXRhIiwib25SZWNvbXBpbGVkIiwicmVjb21waWxlZCIsIm9uUmVzb2x2ZWQiLCJyZXNvbHZlZCIsIl9zY29wZSIsImFzc2lnbiIsImNvbnRyb2xBdHRyaWJ1dGVzIiwiZXZlbnRzIiwiX19ldmVudHMiLCJfX25lc3RlZE9ic2VydmUiLCJib29sZWFuQXR0cmlidXRlcyIsImNvbmNhdCIsInNldEF0dHIiLCJub2RlTmFtZSIsImhhc0F0dHJpYnV0ZSIsImV2IiwidGVzdCIsInBhcmVudHMiLCJldmFsdWF0ZVBhcmVudCIsInRyYW5zcGFyZW50IiwiX19kZXRhY2giLCJfX2FkZENoaWxkIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3BlcnRpZXMiLCJfX2NvbXBhcmVOb2RlUHJvcGVydHlWYWx1ZSIsIl9fZ2V0Tm9kZVByb3BlcnR5IiwiaGFzaCIsImNyZWF0ZU9iamVjdEhhc2giLCJjb21wYXJlIiwiY29weSIsImF0dHJOYW1lIiwiZWxlbWVudE5hbWUiLCJfX2VsZW1lbnQiLCJhdHRyaWJ1dGVOYW1lIiwiQXR0ciIsIm1lc3NhZ2VzIiwibWVzc2FnZSIsIl9fZXhwcmVzc2lvbiIsImNvdW50ZXIiLCJhdHRyaWJ1dGVWYWx1ZSIsImV2YWxDb21wb25lbnQiLCJjb20iLCJtIiwiZCIsImV2YWx1YXRlIiwiZXhpc3RpbmdCaW5kaW5ncyIsInBhcmVudEJpbmRpbmdzIiwicGFyc2VWYWx1ZSIsIl9fZ2V0UGFyc2VkRXhwcmVzc2lvbiIsImxpc3QiLCJwYXJzZSIsIl9fY3JlYXRlRXhjZXB0aW9uTWVzc2FnZSIsIl9fY3JlYXRlS2V5c0hhc2giLCJwYXJlbnRzSGFzaCIsIm5vdEJpbmRpbmciLCJwYXJlbnRWYWx1ZSIsImlzU2NvcGVQcm94eSIsInJlYWxDb21wb25lbnQiLCJfX2JpbmRBbmRTZXRQcm9wZXJ0eSIsImV2YWx1YXRlZCIsIm1ha2VBdHRyaWJ1dGVWYWx1ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlIiwiYmluZCIsIl9fZ2V0Qm91bmROb2RlIiwiX19iaW5kIiwiX19zZXROb2RlUHJvcGVydHkiLCJ3aXRob3V0UGFyZW50cyIsImxhc3RQcm9wcyIsInByb3BzTGVuZ3RoIiwiZWxFdmFsdWF0ZSIsImVsZW1lbnQiLCJfX2dldEJpbmQiLCJfX2RhdGEiLCJfX2dldEFsbEJpbmRzIiwiX19pbml0aWFsaXplZCIsIl9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2UiLCJfX2Rpc2FibGVLZXlzIiwiY2hlY2tQcm9wIiwiX19zZXQiLCJfayIsIl9wcm9wIiwiX19lbmFibGVLZXlzIiwidW5iaW5kIiwiX19pc1N5c3RlbUJpbmRpbmdLZXkiLCJfa2V5cyIsIl9fa2V5cyIsIl9pc0RlbGV0ZWQiLCJoYXNLZXkiLCJzaGlmdCIsImhhc1Byb3BlcnR5QnlLZXlzIiwiX19ldmFsdWF0ZU5lc3RlZCIsIl9fdW5iaW5kIiwiZGVsZXRlUHJvcGVydHlCeUtleXMiLCJleGVjIiwiZXZlbnQiLCJfX2NoZWNrRXZhbHVhdGlvbiIsIl9fZXZhbHVhdGUiLCJpc0Jvb2xlYW5BdHRyaWJ1dGUiLCJjbGVhckF0dHJpYnV0ZSIsImNhbWVsQXR0cmlidXRlIiwidG9DYW1lbENhc2UiLCJfX2F0dHJpYnV0ZU9uIiwiX19wcmVwYXJlQXR0cmlidXRlSW4iLCJfX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIiLCJfX2F0dHJUcmlnZ2VyQnlOYW1lIiwicGxhaW4iLCJhdHRyaWJ1dGVPZiIsImV2ZW50TmFtZSIsIl9fZXZlbnQiLCJlbWl0dGVyIiwiX19ldmFsdWF0ZUV2ZW50IiwidHJpbSIsImhhc0JpbmRpbmciLCJpc0Jvb2xlYW4iLCJpc0V2ZW50IiwiX19pc0V2ZW50IiwiX19oYXNCaW5kaW5ncyIsIl9faXNCb29sZWFuIiwic2F2ZUJpbmRpbmdzIiwiX191bmJpbmRQYXJlbnRzQnlOb2RlcyIsIl9faW5pdGlhbGl6ZUF0dHJpYnV0ZSIsImNoYW5nZUF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZU5vZGUiLCJfX2RlaW5pdGlhbGl6ZU5vZGUiLCJQcm94eSIsInRhcmdldCIsInNldCIsImF0dHJLZXkiLCJkZWxldGVQcm9wZXJ0eSIsIl9faXNTeXN0ZW1LZXkiLCJleGNBcnIiLCJyZWFsVGFyZ2V0IiwiZ2V0T3duUHJvcGVydHlUYXJnZXQiLCJmb3JQYXJlbnRzIiwiZm9yRGF0YSIsInBvcCIsImdldEVudW1lcmFibGVQcm9wZXJ0eVRhcmdldCIsIl9fYmluZE5vZGUiLCJfX2NoZWNrRGlzYWJsZW1lbnQiLCJDSEVDS19FWElTVEVOQ0UiLCJ0YXJnZXRQYXJlbnRWYWx1ZSIsIl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0IiwiY3VycmVudEtleXMiLCJjdXJyZW50S2V5U3RyaW5nIiwiX19zdG9yZVRyaWdnZXJCeUtleXMiLCJfX2F0dHJUcmlnZ2VyQnlLZXlzIiwidHlwZSIsInByb3h5IiwiX19nZXREaXNhYmxlbWVudFR5cGVTdG9yZSIsIl9fYWxsIiwibGlua3MiLCJfX3N0b3JlVHJpZ2dlckJ5TmFtZSIsInNvcnQiLCJrZXlTdHJpbmciLCJpbmZvIiwiZGF0ZSIsIkRhdGUiLCJub3ciLCJjYWxsT25TdGFydCIsImNhcGl0YWxpemUiLCJhdHRyc0tleXMiLCJmaWx0ZXIiLCJzdGFydEtleXMiLCJvYnNlcnZlIiwiaXNQbGFpbk9iamVjdCIsIkNIRUNLX1BST1hZIiwiX19kaXNhYmxlUHJveHlSZWRlZmluaW5nIiwibmVzdGVkIiwidGFyZ2V0S2V5cyIsIl9fb2JzZXJ2ZSIsImlzb2xhdGlvbkhhc2giLCJ1cGRhdGVkQXQiLCJnZXRUaW1lIiwicGFyZW50S2V5c1N0cmluZyIsImtleXNTdHJpbmciLCJjb2xsZWN0Iiwicm9vdEF0dHJzIiwibm9kZXMiLCJfX21hcE5vZGVzIiwiX19oYXNUYWciLCJzZXRQcm9wZXJ0eUJ5S2V5cyIsImxhc3QiLCJfX2RlbGV0ZU5vZGVQcm9wZXJ0eSIsIl9fY2xlYXJFbXB0eUJpbmRpbmdzIiwiX191bmJpbmRCeU5vZGVzIiwiY2xlYXIiLCJfX3JlbW92ZSIsIm9uUmVtb3ZlZCIsIl9fZW1wdHkiLCJfX2NsZWFyU3RvcmVMaW5rcyIsInJlbW92ZWQiLCJfX3NwbGljZUNoaWxkIiwiX19yZW1vdmVDaGlsZHJlbiIsImZpbmRBbGwiLCJsZXZlbHMiLCJsZXZlbCIsInJpZ2h0IiwibGV2ZWxFbGVtZW50cyIsImhhbmRsZXIiLCJ1bnNoaWZ0IiwiX19zdG9yZUJ5RnVuY3Rpb24iLCJfX3N0b3JlQnlLZXlzIiwiX19hdHRyQnlGdW5jdGlvbiIsIl9fYXR0ckJ5S2V5cyIsIl9fdW5zdG9yZUJ5RnVuY3Rpb24iLCJfX3Vuc3RvcmVCeUtleXMiLCJfX3VuYXR0ckJ5RnVuY3Rpb24iLCJfX3VuYXR0ckJ5S2V5cyIsIl9fZ2V0UGFyZW50IiwiX19nZXRDaGlsZHJlbiIsIl9fZ2V0TmVhciIsImFwcGVuZENoaWxkIiwiY2xhc3MiLCJjbGFzc2VzIiwic3R5bGUiLCJzdHlsZXMiLCJkZWwiLCJleGNsdWRlIiwib3BlbiIsIm1hdGNoIiwiaXRlbSIsImZpbHRlcmVkIiwib3JkZXIiLCJhIiwiYiIsIm5leHQiLCJhViIsImJWIiwiaW5jbHVkZUtleXMiLCJuZXdPYmoiLCJvYmpLZXlzIiwiZXhjbHVkZUtleXMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImlnbm9yZVVuZGVmaW5lZCIsImNsZWFyVW5kZWZpbmVkIiwiYUtleXMiLCJiS2V5cyIsImNoYXIiLCJjaGFyQ29kZUF0IiwiZW5jb2RlSHRtbEVudGl0aWVzIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiZGVjb2RlSHRtbEVudGl0aWVzIiwidG9VcHBlckNhc2UiLCJvYmplY3QiLCJyZWR1Y2UiLCJvIiwiaGFzIiwicHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk1hdGgiLCJyYW5kb20iLCJzdWJzdHJpbmciLCJSZXF1ZXN0IiwiYmFzZVVybCIsImdldEhlYWRlcnMiLCJ4aHIiLCJoZWFkZXJzIiwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIiwibGluZSIsInN0YXR1c0Vycm9yUGF0dGVybiIsInJlamVjdCIsIm1ldGhvZCIsIlhNTEh0dHBSZXF1ZXN0IiwiYmVmb3JlIiwidHJhbnNmb3JtQmVmb3JlIiwib25TdGFydCIsImpzb24iLCJyZXNwb25zZVR5cGUiLCJmb3JtIiwiY3JlYXRlRm9ybURhdGEiLCJwYXJhbXMiLCJwYXJhbXNUb1F1ZXJ5IiwiY3JlYXRlQ2FjaGVIYXNoIiwidXNlciIsInBhc3N3b3JkIiwiX2NhY2hlIiwiZ2V0Q2FjaGUiLCJjcmVhdGVkQXQiLCJ0cmFuc2Zvcm1BZnRlciIsInJlc3VsdCIsInRpbWVvdXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJoZWFkZXJLZXlzIiwic2V0UmVxdWVzdEhlYWRlciIsIm9uUHJvZ3Jlc3MiLCJvbnByb2dyZXNzIiwib25sb2FkIiwicmVzcG9uc2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzVGV4dCIsInJlc3BvbnNlVGV4dCIsInJlc3BvbnNlWE1MIiwicmVzcG9uc2VVUkwiLCJjcmVhdGVDYWNoZSIsIm9udGltZW91dCIsIm9uZXJyb3IiLCJzZW5kIiwic2VwIiwiZXEiLCJrcyIsImVuY29kZVVSSUNvbXBvbmVudCIsInYiLCJvcHQiLCJxdWVyeSIsImFtcHMiLCJlcXMiLCJkZWNvZGVVUklDb21wb25lbnQiLCJuYW1lc3BhY2UiLCJmZCIsIkZvcm1EYXRhIiwiYXBwZW5kIiwidG9JU09TdHJpbmciLCJhZGRJbnN0YW5jZSIsInJlbW92ZUluc3RhbmNlIiwidmFsdWVLZXkiLCJkZWJvdW5jZUludGVydmFsIiwiZGVib3VuY2VUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwib25EZWJvdW5jZSIsInNldEZvY3VzIiwic2V0VmFsdWUiLCJzZXREZWJvdW5jZSIsImludGVydmFsIiwic2V0RWxlbWVudEZvY3VzIiwic2V0RWxlbWVudEJsdXIiLCJmb2N1cyIsImJsdXIiLCJMb29wIiwiaXRlcmF0b3JzIiwiaXRlcmF0b3JSZWYiLCJpdGVyYXRvck91dGVySFRNTCIsInJlc2V0IiwiY3JlYXRlSXRlcmF0b3IiLCJkcmF3IiwibWFzayIsIm5leHRTaWJsaW5nIiwiY29udGVudCIsImZpcnN0Q2hpbGQiLCJfX2luZGV4IiwiX19rZXkiLCJfX3ZhbHVlIiwiX19jb21wYXJpc29uVmFsdWUiLCJpdGVyYXRvciIsInNldEluZGV4Iiwic2V0S2V5IiwiY29tcGFyaXNvblZhbHVlIiwiX19wcm9taXNlcyIsImNyZWF0ZUl0ZXJhdG9yRWxlbWVudCIsImluc2VydEJlZm9yZSIsImxvb3AiLCJpdGVyYXRlIiwib25PdXQiLCJfX2l0ZXJhdG9yIiwiZm9yIiwiaXNGb3IiLCJjYW5jZWwiLCJzdHJpY3QiLCJmb3JjZSIsImluRXZhbHVhdGluZyIsInByZXBhcmVPcHRpb25zIiwiX0V2ZW50IiwiX19wcmVwYXJlQXR0cmlidXRlT3V0IiwidHJhbnNpdGlvbiIsImxvYWQiLCJzdGF0ZSIsInBhdGgiLCJnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24iLCJfX3RyYW5zaXRpb24iLCJlbXB0eSIsImV4aXN0cyIsIlRyYW5zaXRpb24iLCJwcmV2aW91cyIsInJvdXRlcyIsInN0YXRlcyIsIl9fZmluaXNlZCIsInJlZGlyZWN0Iiwicm91dGUiLCJoYXNTdGF0ZSIsInBhcmFtS2V5cyIsImZ1bGxQYXR0ZXJuIiwiX19wYXJhbVJlZ2V4IiwiZiIsInF1ZXJ5S2V5cyIsIndhdGNoSGFzaCIsInByZXZSb3V0ZSIsImdldFJvdXRlIiwicHJldiIsImZpbmlzaCIsImhhc2hNb2RlIiwiX19yZWRpcmVjdHMiLCJfX3JvdXRlU2VsZWN0b3IiLCJhZGQiLCJwYXR0ZXJuIiwiZGVmYXVsdE9wdGlvbnMiLCJhYnN0cmFjdCIsInNldFN0YXRlIiwiZ2V0U3RhdGUiLCJtYW51YWwiLCJwcmVwYXJlU3RhdGVBcmdzIiwiY3JlYXRlU3RhdGVVcmwiLCJiYWNrIiwiaGlzdG9yeSIsImdvIiwiZm9yd2FyZCIsImxvY2F0aW9uIiwiZGVmYXVsdFVybCIsIm9sZFB1c2hTdGF0ZSIsInB1c2hTdGF0ZSIsImVycm9yIiwiX19vblN0YXRlQ2hhbmdlSGFuZGxlciIsImluaXRTdGF0ZSIsInBhcmVudE5hbWUiLCJzcGxpdFNsYXNoZXMiLCJyZW1vdmVTdGF0ZSIsInNldEhhc2hVcmwiLCJzZXRIaXN0b3J5VXJsIiwicmVwbGFjZVVybCIsInJlcGxhY2VIYXNoVXJsIiwicmVwbGFjZUhpc3RvcnlVcmwiLCJyZXBsYWNlU3RhdGUiLCJnZXRVcmwiLCJnZXRIYXNoVXJsIiwiZ2V0SGlzdG9yeVVybCIsInBhdGhuYW1lIiwic2VhcmNoIiwiZ2V0VXJsUXVlcnkiLCJnZXRIYXNoVXJsUXVlcnkiLCJnZXRIaXN0b3J5VXJsUXVlcnkiLCJwYXJhbXNGcm9tUXVlcnkiLCJwcmVwYXJlIiwicGFyYW1zVGVtcCIsInByZXBhcmVTdGF0ZVBhcmFtcyIsInF1ZXJ5VGVtcCIsInByZXBhcmVTdGF0ZVF1ZXJ5IiwiaGFzaFRlbXAiLCJwcmVwYXJlU3RhdGVIYXNoIiwiZW1wdHlIYXNoIiwiY3JlYXRlU3RhdGVBcmdzIiwiZXhjbHVkZWQiLCJnZXRQYXR0ZXJuQ29udGVudCIsInVybFBhdHRlcm4iLCJyZWdleCIsImlzSW5jbHVkZWQiLCJpc0FjdGl2ZVN0YXRlIiwiaW5jbHVkZXMiLCJfX2ZpbmlzaGVkIiwiaW5BY3RpdmVTdGF0ZSIsImdldEFycmF5UGF0dGVybkNvbnRlbnQiLCJnZXRTdGF0ZXNCeUxldmVsIiwicmVsb2FkIiwicHJldlRyYW5zaXRpb24iLCJzZXRQYXRoIiwicmVhbFVybCIsImlzRGlmZmVyZW50IiwiaXNSb3V0ZUNoYW5nZWQiLCJ0aXRsZSIsImxvYWRlZCIsInNldFRyYW5zaXRpb24iLCJzYXZlU2Nyb2xsUG9zaXRpb24iLCJzY3JvbGxUbyIsIkVsc2VJZiIsIkVsc2UiLCJhY3RpdmUiLCJyZWNyZWF0ZSIsImlzQ29tcGlsZWQiLCJkaXNwbGF5IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInNldFJlY3JlYXRpb24iLCJjb21waWxhdGlvbiIsIm5leHRFbGVtZW50U2libGluZyIsInNldEFjdGl2aXR5Iiwic2V0UHJvcGVydHkiLCJPcHRpb24iLCJpdGVyYXRvclRhZ05hbWUiLCJpc011bHRpcGxlIiwiZ2V0Q29udGVudCIsInNldE11bHRpcGxlIiwic2V0Q29udGVudCIsImRyYXdTZWxlY3QiLCJjaGFuZ2VWYWx1ZSIsImZvcm1hdFZhbHVlIiwic2VsZWN0ZWQiLCJvcHRpb24iLCJzZWxlY3Rpb24iLCJyZWRlZmluZSIsIm9uQ2hhbmdlIiwiZGlzcGF0Y2giLCJFdmVudCIsInNldFNlbGVjdGVkIiwiaXNDaGVja2JveCIsImlzUmFkaW8iLCJzZXRDaGVja2VkIiwiY2hlY2tlZCIsImNoYW5nZVJhZGlvIiwicmFkaW8iLCJSYWRpb0J1dHRvbiIsIml0ZXJhYmxlIiwiZ2V0UmFkaW9WYWx1ZSIsInByZXZWYWx1ZSIsIm9uUmFkaW8iLCJzZXROYW1lcyIsImlzVHJ1ZSIsImlzU2VsZWN0ZWQiLCJyYW5nZSIsImNyZWF0ZVJhbmdlIiwiZ2V0U2VsZWN0aW9uIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwiY29sbGFwc2UiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsImNvbm5lY3Rpb24iLCJzZXRDYWNoZSIsImFib3J0Iiwib25Mb2FkIiwib25FcnJvciIsImlzVXJsIiwicHJldmVudERlZmF1bHQiLCJvblN0YXRlQ2hhbmdlZCIsInNldFBhcmFtcyIsInNldFF1ZXJ5Iiwic2V0SGFzaCIsInNldE9wdGlvbnMiLCJyZXNldEhyZWYiLCJocmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OzhRQzdEQTs7Ozs7Ozs7O0FBU0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBOzs7OztBQUtBLElBQU1BLFFBQVEsRUFBZDs7QUFFQUEsTUFBTUMsVUFBTixHQUFtQixFQUFuQjs7QUFFQTs7O0FBR0FELE1BQU1FLFdBQU4sR0FBb0IsWUFBWTtBQUFBOztBQUM5QixPQUFLQyxPQUFMLEdBQWU7QUFDYkMsV0FBTyxJQURNO0FBRWJDLGlCQUFhLENBQUMsZUFBRDtBQUZBLEdBQWY7O0FBS0EsT0FBS0MsTUFBTCxHQUFjLElBQWQ7QUFDQSxPQUFLQyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsT0FBS0MsWUFBTCxHQUFvQixFQUFwQjtBQUNBLE9BQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxPQUFLQyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsT0FBS0MsWUFBTCxHQUFvQixFQUFwQjtBQUNBLE9BQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxPQUFLQyxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsT0FBS0MsWUFBTCxHQUFvQixJQUFwQjtBQUNBLE9BQUtDLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxPQUFLQyxTQUFMLEdBQWlCO0FBQUEsV0FBTSxNQUFLQyxXQUFMLENBQWlCLEtBQWpCLENBQU47QUFBQSxHQUFqQjs7QUFFQSxPQUFLQyxxQkFBTCxHQUE2QixDQUMzQixVQUQyQixFQUNmLGlCQURlLEVBQ0ksUUFESixDQUE3Qjs7QUFJQSxPQUFJLElBQUlDLEdBQVIsSUFBZUMsaUJBQWYsRUFBd0I7QUFDdEIsV0FBT0Esa0JBQVFELEdBQVIsQ0FBUDtBQUNEOztBQUVEQyxvQkFBUUMsS0FBUixHQUFnQkEsZUFBaEI7O0FBRUEsT0FBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLE9BQUtDLFFBQUwsR0FBZ0IsRUFBaEI7O0FBRUEsT0FBS0MsU0FBTCxHQUFpQkEsbUJBQWpCO0FBQ0EsT0FBS0MsWUFBTCxHQUFvQkEsc0JBQXBCO0FBQ0EsT0FBS0MsS0FBTCxHQUFhQSxlQUFiO0FBQ0EsT0FBS0wsS0FBTCxHQUFhQSxlQUFiO0FBQ0EsT0FBS0QsT0FBTCxHQUFlQSxpQkFBZjtBQUNBLE9BQUtFLFVBQUwsQ0FBZ0JLLENBQWhCLEdBQW9CQSxXQUFwQjtBQUNBLE9BQUtMLFVBQUwsQ0FBZ0JNLEtBQWhCLEdBQXdCQSxlQUF4QjtBQUNBLE9BQUtOLFVBQUwsQ0FBZ0JPLE9BQWhCLEdBQTBCQSxpQkFBMUI7QUFDQSxPQUFLUCxVQUFMLENBQWdCUSxHQUFoQixHQUFzQkEsYUFBdEI7QUFDQSxPQUFLUixVQUFMLENBQWdCUyxLQUFoQixHQUF3QkEsZUFBeEI7QUFDQSxPQUFLVCxVQUFMLENBQWdCVSxFQUFoQixHQUFxQkEsWUFBckI7QUFDQSxPQUFLVixVQUFMLENBQWdCVyxPQUFoQixHQUEwQkEsaUJBQTFCO0FBQ0EsT0FBS1gsVUFBTCxDQUFnQlksS0FBaEIsR0FBd0JBLGVBQXhCO0FBQ0EsT0FBS1osVUFBTCxDQUFnQmEsTUFBaEIsR0FBeUJBLGdCQUF6QjtBQUNBLE9BQUtiLFVBQUwsQ0FBZ0JjLEtBQWhCLEdBQXdCQSxlQUF4QjtBQUNBLE9BQUtkLFVBQUwsQ0FBZ0JlLE1BQWhCLEdBQXlCQyxnQkFBekI7QUFDQSxPQUFLaEIsVUFBTCxDQUFnQmlCLEtBQWhCLEdBQXdCQSxlQUF4QjtBQUNBLE9BQUtqQixVQUFMLENBQWdCa0IsS0FBaEIsR0FBd0JBLGVBQXhCO0FBQ0EsT0FBS2xCLFVBQUwsQ0FBZ0JtQixNQUFoQixHQUF5QkEsZ0JBQXpCO0FBQ0EsT0FBS25CLFVBQUwsQ0FBZ0JvQixNQUFoQixHQUF5QkEsZ0JBQXpCO0FBQ0EsT0FBS3BCLFVBQUwsQ0FBZ0JxQixJQUFoQixHQUF1QkEsY0FBdkI7QUFDQSxPQUFLckIsVUFBTCxDQUFnQnNCLFFBQWhCLEdBQTJCQSxrQkFBM0I7QUFDQSxPQUFLdEIsVUFBTCxDQUFnQnVCLEtBQWhCLEdBQXdCQSxlQUF4QjtBQUNBLE9BQUt2QixVQUFMLENBQWdCd0IsR0FBaEIsR0FBc0JBLGFBQXRCO0FBQ0EsT0FBS3hCLFVBQUwsQ0FBZ0J5QixLQUFoQixHQUF3QkEsZUFBeEI7QUFDQSxPQUFLeEIsUUFBTCxDQUFjeUIsT0FBZCxHQUF3QkEsaUJBQXhCO0FBQ0EsT0FBS3pCLFFBQUwsQ0FBYzBCLE1BQWQsR0FBdUJBLGdCQUF2QjtBQUNBLE9BQUsxQixRQUFMLENBQWMyQixLQUFkLEdBQXNCQSxlQUF0Qjs7QUFFQSxPQUFLQyxNQUFMO0FBQ0EsT0FBS0MsYUFBTDtBQUNBLE9BQUtDLGFBQUw7QUFDQSxPQUFLQyxxQkFBTDtBQUNBLE9BQUtDLHNCQUFMOztBQUVBLE9BQUksSUFBSUMsSUFBSSxDQUFSLEVBQVdDLElBQUksS0FBS3hELFVBQUwsQ0FBZ0J5RCxNQUFuQyxFQUEyQ0YsSUFBSUMsQ0FBL0MsRUFBa0RELEdBQWxELEVBQXVEO0FBQ3JELFNBQUt2RCxVQUFMLENBQWdCdUQsQ0FBaEI7QUFDRDtBQUNGLENBckVEOztBQXVFQTs7O0FBR0F4RCxNQUFNbUQsTUFBTixHQUFlLFlBQVk7QUFDekJ4QixjQUFFd0IsTUFBRjtBQUNBdkIsa0JBQU11QixNQUFOO0FBQ0F0QixvQkFBUXNCLE1BQVI7QUFDQTNCLHNCQUFVMkIsTUFBVjtBQUNBcEIsa0JBQU1vQixNQUFOO0FBQ0FyQixnQkFBSXFCLE1BQUo7QUFDQWxCLG9CQUFRa0IsTUFBUjtBQUNBaEIsbUJBQU9nQixNQUFQO0FBQ0FmLGtCQUFNZSxNQUFOO0FBQ0FqQixrQkFBTWlCLE1BQU47QUFDQW5CLGVBQUdtQixNQUFIO0FBQ0FiLG1CQUFRYSxNQUFSO0FBQ0FaLGtCQUFNWSxNQUFOO0FBQ0FYLGtCQUFNVyxNQUFOO0FBQ0FWLG1CQUFPVSxNQUFQO0FBQ0FULG1CQUFPUyxNQUFQO0FBQ0FQLHFCQUFTTyxNQUFUO0FBQ0FOLGtCQUFNTSxNQUFOO0FBQ0FKLGtCQUFNSSxNQUFOO0FBQ0QsQ0FwQkQ7O0FBc0JBOzs7OztBQUtBbkQsTUFBTTJELFFBQU4sR0FBaUIsVUFBVUMsRUFBVixFQUFjO0FBQzdCLE9BQUszRCxVQUFMLENBQWdCNEQsSUFBaEIsQ0FBcUJELEVBQXJCO0FBQ0FBO0FBQ0QsQ0FIRDs7QUFLQTs7O0FBR0E1RCxNQUFNOEQsWUFBTixHQUFxQixZQUFZO0FBQy9CLE1BQUcsS0FBS3ZELFNBQVIsRUFBbUI7QUFDakI7QUFDRDs7QUFFRCxPQUFLLElBQUlZLEdBQVQsSUFBZ0IsS0FBS1AsUUFBTCxDQUFjbUQsT0FBZCxDQUFzQkMsU0FBdEMsRUFBaUQ7QUFDL0NELFlBQVFDLFNBQVIsQ0FBa0I3QyxHQUFsQixJQUF5QixLQUFLUCxRQUFMLENBQWNtRCxPQUFkLENBQXNCQyxTQUF0QixDQUFnQzdDLEdBQWhDLENBQXpCO0FBQ0Q7O0FBRUQsT0FBSyxJQUFJQSxJQUFULElBQWdCLEtBQUtQLFFBQUwsQ0FBY3FELEtBQWQsQ0FBb0JELFNBQXBDLEVBQStDO0FBQzdDQyxVQUFNRCxTQUFOLENBQWdCN0MsSUFBaEIsSUFBdUIsS0FBS1AsUUFBTCxDQUFjcUQsS0FBZCxDQUFvQkQsU0FBcEIsQ0FBOEI3QyxJQUE5QixDQUF2QjtBQUNEOztBQUVELE9BQUksSUFBSUEsS0FBUixJQUFlLEtBQUtoQixPQUFMLENBQWFpQixPQUE1QixFQUFxQztBQUNuQyxTQUFLakIsT0FBTCxDQUFhaUIsT0FBYixDQUFxQkQsS0FBckIsSUFBNEIsS0FBSytDLE1BQUwsQ0FBWSxLQUFLL0QsT0FBTCxDQUFhaUIsT0FBYixDQUFxQkQsS0FBckIsQ0FBWixDQUE1QjtBQUNEOztBQUVEZ0QsU0FBT0MsVUFBUCxHQUFvQixLQUFLeEQsUUFBTCxDQUFjd0QsVUFBbEM7QUFDQUQsU0FBT0UsV0FBUCxHQUFxQixLQUFLekQsUUFBTCxDQUFjeUQsV0FBbkM7QUFDQUYsU0FBT0csT0FBUCxHQUFpQixLQUFLMUQsUUFBTCxDQUFjMEQsT0FBL0I7QUFDQUgsU0FBT0ksbUJBQVAsQ0FBMkIsT0FBM0IsRUFBb0MsS0FBS3ZELFNBQXpDO0FBQ0EsT0FBS1QsU0FBTCxHQUFpQixJQUFqQjtBQUNELENBdEJEOztBQXdCQTs7Ozs7QUFLQVAsTUFBTXdFLGVBQU4sR0FBd0IsVUFBVUMsSUFBVixFQUFnQjtBQUN0QyxTQUFPQSxLQUFLQyxHQUFMLENBQVM7QUFBQSxXQUFNQyxHQUFHQyxRQUFILEVBQU47QUFBQSxHQUFULEVBQThCQyxJQUE5QixDQUFtQyxHQUFuQyxDQUFQO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7QUFLQTdFLE1BQU04RSxRQUFOLEdBQWlCLFVBQVVDLEtBQVYsRUFBaUI7QUFDaEMsTUFBSSxLQUFLckUsUUFBTCxDQUFjcUUsTUFBTUMsTUFBcEIsQ0FBSixFQUFpQztBQUMvQixVQUFNLElBQUlDLEtBQUosaUJBQXdCRixNQUFNQyxNQUE5QixxQkFBTjtBQUNEOztBQUVELE9BQUt0RSxRQUFMLENBQWNxRSxNQUFNQyxNQUFwQixJQUE4QkQsS0FBOUI7QUFDRCxDQU5EOztBQVFBOzs7Ozs7QUFNQS9FLE1BQU1rRixRQUFOLEdBQWlCLFVBQVVDLElBQVYsRUFBZ0I7QUFDL0IsU0FBTyxLQUFLekUsUUFBTCxDQUFjeUUsSUFBZCxDQUFQO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7QUFLQW5GLE1BQU1vRixXQUFOLEdBQW9CLFVBQVVELElBQVYsRUFBZ0I7QUFDbEMsTUFBTUosUUFBUSxLQUFLckUsUUFBTCxDQUFjeUUsSUFBZCxDQUFkO0FBQ0FKLFFBQU1NLElBQU4sR0FBYSxJQUFiO0FBQ0FOLFFBQU1PLFdBQU4sR0FBb0IsSUFBcEI7QUFDQVAsUUFBTVEsUUFBTixHQUFpQixJQUFqQjtBQUNBLE9BQUs3RSxRQUFMLENBQWN5RSxJQUFkLElBQXNCLElBQXRCO0FBQ0EsU0FBTyxLQUFLekUsUUFBTCxDQUFjeUUsSUFBZCxDQUFQO0FBQ0QsQ0FQRDs7QUFTQTs7Ozs7OztBQU9BbkYsTUFBTXdGLGVBQU4sR0FBd0IsVUFBVWIsRUFBVixFQUEyQjtBQUFBLE1BQWJjLElBQWEsdUVBQU4sSUFBTTs7QUFDakQsTUFBSUMsTUFBTSxFQUFWOztBQUVBLFdBQVNDLEtBQVQsQ0FBZUMsSUFBZixFQUFxQjtBQUNuQixRQUFJLENBQUNBLEtBQUtDLFVBQVYsRUFBc0I7QUFDcEI7QUFDRDs7QUFFRCxRQUFJRCxLQUFLQyxVQUFMLENBQWdCQyxPQUFwQixFQUE2QjtBQUMzQkosVUFBSTdCLElBQUosQ0FBUytCLEtBQUtDLFVBQWQ7O0FBRUEsVUFBSSxDQUFDSixJQUFMLEVBQVc7QUFDVDtBQUNEO0FBQ0Y7O0FBRURFLFVBQU1DLEtBQUtDLFVBQVg7QUFDRDs7QUFFREYsUUFBTWhCLEVBQU47QUFDQSxTQUFPYyxPQUFNQyxHQUFOLEdBQVdBLElBQUksQ0FBSixDQUFsQjtBQUNELENBckJEOztBQXVCQTs7Ozs7Ozs7Ozs7O0FBWUExRixNQUFNK0YsV0FBTixHQUFvQixVQUFVcEIsRUFBVixFQUFjcUIsUUFBZCxFQUF3QjtBQUMxQ0EsYUFBV0EsU0FBU0MsT0FBVCxDQUFpQix1Q0FBakIsRUFBMER0QixHQUFHdUIsU0FBN0QsQ0FBWDtBQUNBdkIsS0FBR3VCLFNBQUgsR0FBZUYsUUFBZjs7QUFFQSxTQUFPckIsR0FBR3VCLFNBQVY7QUFDRCxDQUxEOztBQU9BOzs7OztBQUtBbEcsTUFBTW1HLGVBQU4sR0FBd0IsWUFBWTtBQUFBOztBQUNsQyxTQUFPOUUsZ0JBQU0rRSxrQkFBTixDQUF5QixFQUF6QixFQUE2QixVQUFDQyxHQUFELEVBQVM7QUFDM0MsV0FBTyxDQUFDLENBQUMsT0FBSzNGLFFBQUwsQ0FBYzJGLEdBQWQsQ0FBVDtBQUNELEdBRk0sQ0FBUDtBQUdELENBSkQ7O0FBTUE7Ozs7Ozs7Ozs7QUFVQXJHLE1BQU1zRyxPQUFOLEdBQWdCLFVBQVUxQyxFQUFWLEVBQWM7QUFDNUIsTUFBSSxLQUFLL0MsV0FBVCxFQUFzQjtBQUNwQixXQUFPK0MsSUFBUDtBQUNEOztBQUVELE9BQUsvQyxXQUFMLEdBQW1CLEVBQW5CO0FBQ0EsTUFBSTBGLE1BQU0zQyxJQUFWO0FBQ0EsTUFBSTRDLFFBQVEsRUFBWjs7QUFFQSxPQUFLLElBQUlDLENBQVQsSUFBYyxLQUFLNUYsV0FBbkIsRUFBZ0M7QUFDOUIsUUFBSSxDQUFDLEtBQUtBLFdBQUwsQ0FBaUI2RixjQUFqQixDQUFnQ0QsQ0FBaEMsQ0FBTCxFQUF5QztBQUN2QztBQUNEOztBQUVERCxVQUFNM0MsSUFBTixDQUFXLEtBQUtoRCxXQUFMLENBQWlCNEYsQ0FBakIsQ0FBWDtBQUNEOztBQUVELE9BQUs1RixXQUFMLEdBQW1CLElBQW5COztBQUVBLE9BQUssSUFBSTJDLElBQUksQ0FBUixFQUFXQyxJQUFJK0MsTUFBTTlDLE1BQTFCLEVBQWtDRixJQUFJQyxDQUF0QyxFQUF5Q0QsR0FBekMsRUFBOEM7QUFDNUMsUUFBTW1ELE9BQU9ILE1BQU1oRCxDQUFOLENBQWI7QUFDQSxRQUFNb0QsTUFBTXZGLGdCQUFNd0YsaUJBQU4sQ0FBd0JGLEtBQUtsQyxJQUE3QixFQUFtQ2tDLEtBQUtHLFNBQUwsQ0FBZUMsT0FBbEQsQ0FBWjtBQUNBSixTQUFLRyxTQUFMLENBQWVFLFlBQWYsSUFBK0JMLEtBQUtHLFNBQUwsQ0FBZUcscUJBQWYsQ0FBcUNOLEtBQUtsQyxJQUExQyxDQUEvQjtBQUNBa0MsU0FBS0csU0FBTCxDQUFlSSxnQkFBZixDQUFnQ1AsS0FBS2xDLElBQXJDLEVBQTJDbUMsR0FBM0MsRUFBZ0RELEtBQUtRLFNBQXJEO0FBQ0Q7O0FBRURYLFVBQVEsSUFBUjtBQUNBLFNBQU9ELEdBQVA7QUFDRCxDQTVCRDs7QUE4QkE7Ozs7OztBQU1BdkcsTUFBTW9ILFVBQU4sR0FBbUIsVUFBVXhELEVBQVYsRUFBYztBQUMvQixNQUFJeUQsYUFBYSxLQUFLdkcsWUFBdEI7QUFDQSxNQUFJeUYsWUFBSjtBQUNBLE9BQUt6RixZQUFMLEdBQW9CLElBQXBCO0FBQ0F5RixRQUFNM0MsSUFBTjtBQUNBLE9BQUs5QyxZQUFMLEdBQW9CdUcsVUFBcEI7QUFDQSxTQUFPZCxHQUFQO0FBQ0QsQ0FQRDs7QUFTQTs7Ozs7O0FBTUF2RyxNQUFNc0gsUUFBTixHQUFpQixVQUFVMUQsRUFBVixFQUFjO0FBQzdCLE1BQUcsS0FBSzdDLFVBQVIsRUFBb0I7QUFDbEIsV0FBTzZDLElBQVA7QUFDRDs7QUFFRCxPQUFLN0MsVUFBTCxHQUFrQixJQUFsQjtBQUNBLE1BQUl3RixNQUFNM0MsSUFBVjtBQUNBLE9BQUs3QyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsU0FBT3dGLEdBQVA7QUFDRCxDQVREOztBQVdBOzs7Ozs7QUFNQXZHLE1BQU11SCxTQUFOLEdBQWtCLFVBQVUzRCxFQUFWLEVBQWM7QUFDOUIsTUFBSTRELFlBQVksS0FBSzNHLFdBQXJCO0FBQ0EsTUFBSTBGLFlBQUo7QUFDQSxPQUFLMUYsV0FBTCxHQUFtQixJQUFuQjtBQUNBMEYsUUFBTTNDLElBQU47QUFDQSxPQUFLL0MsV0FBTCxHQUFtQjJHLFNBQW5CO0FBQ0EsU0FBT2pCLEdBQVA7QUFDRCxDQVBEOztBQVNBOzs7Ozs7QUFNQXZHLE1BQU15SCxRQUFOLEdBQWlCLFVBQVU3RCxFQUFWLEVBQWM7QUFDN0IsU0FBTyxJQUFJVSxPQUFKLENBQVksVUFBQ2lDLEdBQUQ7QUFBQSxXQUFTbkMsV0FBVztBQUFBLGFBQU1FLFFBQVFvRCxPQUFSLENBQWdCOUQsSUFBaEIsRUFBc0IrRCxJQUF0QixDQUEyQnBCLEdBQTNCLENBQU47QUFBQSxLQUFYLENBQVQ7QUFBQSxHQUFaLENBQVA7QUFDRCxDQUZEOztBQUlBOzs7Ozs7O0FBT0F2RyxNQUFNNEgsVUFBTixHQUFtQixVQUFVakQsRUFBVixFQUE0QjtBQUFBLE1BQWR4RSxPQUFjLHVFQUFKLEVBQUk7O0FBQzdDLE1BQUkwSCxZQUFZMUgsUUFBUTBILFNBQXhCO0FBQ0EsTUFBSWYsWUFBWW5DLEdBQUdtQixPQUFuQjs7QUFFQSxNQUFJZ0IsU0FBSixFQUFlO0FBQ2IsUUFBSWUsU0FBSixFQUFlO0FBQ2JmLGdCQUFVZ0IsV0FBVixDQUFzQkQsY0FBYyxJQUFkLEdBQW9CLEVBQXBCLEdBQXdCQSxTQUE5QztBQUNBLGFBQU9mLFNBQVA7QUFDRDs7QUFFRDtBQUNEOztBQUVELE1BQUlpQixTQUFTcEQsT0FBTyxLQUFLcUQsTUFBekI7QUFDQSxNQUFJQyxnQkFBZ0I1RyxnQkFBTTZHLFVBQU4sQ0FBaUJ2RCxHQUFHd0QsWUFBSCxDQUFnQixXQUFoQixLQUFnQ3hELEdBQUd5RCxPQUFILENBQVdDLFdBQVgsRUFBakQsQ0FBcEI7QUFDQSxNQUFJQyxhQUFhLEtBQUs5SCxZQUFMLENBQWtCeUgsYUFBbEIsQ0FBakI7O0FBRUFNLGlCQUFlLElBQUksQ0FBQ0QsVUFBTCxFQUFpQjtBQUM5QixRQUFJRSxZQUFZbkcsT0FBT29DLElBQVAsQ0FBWSxLQUFLaEUsU0FBakIsQ0FBaEI7O0FBRUEsUUFBSSxDQUFDK0gsVUFBVTlFLE1BQWYsRUFBdUI7QUFDckIsWUFBTTZFLGFBQU47QUFDRDs7QUFFRCxRQUFJRSxjQUFjRCxVQUFVM0QsSUFBVixDQUFlLEdBQWYsQ0FBbEI7O0FBRUEsUUFBSSxDQUFDRixHQUFHK0QsT0FBSCxDQUFXRCxXQUFYLENBQUwsRUFBOEI7QUFDNUIsWUFBTUYsYUFBTjtBQUNEOztBQUVELFNBQUssSUFBSS9FLElBQUksQ0FBUixFQUFXQyxJQUFJK0UsVUFBVTlFLE1BQTlCLEVBQXNDRixJQUFJQyxDQUExQyxFQUE2Q0QsR0FBN0MsRUFBa0Q7QUFDaEQsVUFBSW1GLFdBQVdILFVBQVVoRixDQUFWLENBQWY7O0FBRUEsVUFBSW1CLEdBQUcrRCxPQUFILENBQVdDLFFBQVgsQ0FBSixFQUEwQjtBQUN4QkwscUJBQWEsS0FBSzlILFlBQUwsQ0FBa0IsS0FBS0MsU0FBTCxDQUFla0ksUUFBZixDQUFsQixDQUFiO0FBQ0E7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsTUFBSSxDQUFDTCxVQUFELElBQWUsQ0FBQ1AsTUFBcEIsRUFBNEI7QUFDMUI7QUFDRDs7QUFFRCxNQUFJLENBQUNPLFVBQUwsRUFBaUI7QUFDZkEsaUJBQWEsS0FBSzlHLFNBQWxCO0FBQ0Q7O0FBRUQsTUFBSThHLFdBQVdJLE9BQVgsSUFBc0IsQ0FBQy9ELEdBQUcrRCxPQUFILENBQVdKLFdBQVdJLE9BQXRCLENBQTNCLEVBQTJEO0FBQ3pEO0FBQ0Q7O0FBRUQ1QixjQUFZLElBQUl3QixVQUFKLENBQWUzRCxFQUFmLEVBQW1CLEVBQW5CLENBQVo7O0FBRUEsTUFBSW1DLFVBQVU4QixXQUFkLEVBQTJCO0FBQ3pCO0FBQ0Q7O0FBRUQsTUFBRzVJLE1BQU13RixlQUFOLENBQXNCYixFQUF0QixFQUEwQmtFLElBQTFCLENBQStCO0FBQUEsV0FBS0MsRUFBRWhELE9BQUYsQ0FBVWlELFNBQWY7QUFBQSxHQUEvQixDQUFILEVBQTZEO0FBQzNEO0FBQ0Q7O0FBRURqQyxZQUFVa0MsUUFBVjtBQUNBLFNBQU9sQyxTQUFQO0FBQ0QsQ0FoRUQ7O0FBa0VBOzs7Ozs7O0FBT0E5RyxNQUFNaUosT0FBTixHQUFnQixVQUFVQyxJQUFWLEVBQWdEO0FBQUE7O0FBQUEsTUFBaEMvSSxPQUFnQyx1RUFBdEIsRUFBRTBILFdBQVcsS0FBYixFQUFzQjs7QUFDOUQsTUFBSXNCLFdBQVcsRUFBZjs7QUFFQSxNQUFNQyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDekUsRUFBRCxFQUFRO0FBQ2pDLFFBQUltQyxZQUFZLE9BQUtjLFVBQUwsQ0FBZ0JqRCxFQUFoQixFQUFvQnhFLE9BQXBCLENBQWhCO0FBQ0EsUUFBSWtKLFdBQVcxRSxHQUFHMEUsUUFBbEI7QUFDQXZDLGlCQUFhcUMsU0FBU3RGLElBQVQsQ0FBY2lELFNBQWQsQ0FBYjs7QUFFQSxTQUFLLElBQUl0RCxJQUFJLENBQVIsRUFBV0MsSUFBSTRGLFNBQVMzRixNQUE3QixFQUFxQ0YsSUFBSUMsQ0FBekMsRUFBNENELEdBQTVDLEVBQWlEO0FBQy9DLFVBQUk4RixRQUFRRCxTQUFTN0YsQ0FBVCxDQUFaO0FBQ0E0Rix5QkFBbUJFLEtBQW5CO0FBQ0Q7QUFDRixHQVREOztBQVdBRixxQkFBbUJGLElBQW5CO0FBQ0EsTUFBSUosSUFBSSxFQUFSOztBQUVBLE9BQUssSUFBSXRGLElBQUksQ0FBUixFQUFXQyxJQUFJMEYsU0FBU3pGLE1BQTdCLEVBQXFDRixJQUFJQyxDQUF6QyxFQUE0Q0QsR0FBNUMsRUFBaUQ7QUFDL0MsUUFBSXNELFlBQVlxQyxTQUFTM0YsQ0FBVCxDQUFoQjtBQUNBc0YsTUFBRWpGLElBQUYsQ0FBT2lELFVBQVV5QyxTQUFWLEVBQVA7QUFDRDs7QUFFRCxTQUFPakYsUUFBUWtGLEdBQVIsQ0FBWVYsQ0FBWixFQUFlbkIsSUFBZixDQUFvQixZQUFNO0FBQy9CLFFBQUk4QixJQUFJLEVBQVI7O0FBRUEsU0FBSyxJQUFJakcsS0FBSTJGLFNBQVN6RixNQUFULEdBQWtCLENBQS9CLEVBQWtDRixNQUFLLENBQXZDLEVBQTBDQSxJQUExQyxFQUErQztBQUM3QyxVQUFJc0QsYUFBWXFDLFNBQVMzRixFQUFULENBQWhCO0FBQ0FpRyxRQUFFNUYsSUFBRixDQUFPaUQsV0FBVTRDLFNBQVYsRUFBUDtBQUNEOztBQUVELFdBQU9wRixRQUFRa0YsR0FBUixDQUFZQyxDQUFaLENBQVA7QUFDRCxHQVRNLENBQVA7QUFVRCxDQWhDRDs7QUFrQ0E7Ozs7OztBQU1BekosTUFBTThHLFNBQU4sR0FBa0IsVUFBVTNCLElBQVYsRUFBZ0J2QixFQUFoQixFQUFvQjtBQUNwQ3VCLFNBQU9BLEtBQUtrRCxXQUFMLEVBQVA7O0FBRUEsTUFBSSxDQUFDekUsRUFBTCxFQUFTO0FBQ1AsV0FBTyxLQUFLcEQsWUFBTCxDQUFrQjJFLElBQWxCLEtBQTJCLElBQWxDO0FBQ0Q7O0FBRUQsTUFBSSxLQUFLM0UsWUFBTCxDQUFrQjJFLElBQWxCLEtBQTJCbkYsTUFBTUcsT0FBTixDQUFjQyxLQUE3QyxFQUFvRDtBQUNsRDtBQUNBdUosWUFBUUMsSUFBUixnQkFBMEJ6RSxJQUExQjtBQUNEOztBQUVELE9BQUszRSxZQUFMLENBQWtCMkUsSUFBbEIsSUFBMEJ2QixFQUExQjtBQUNELENBYkQ7O0FBZUE7Ozs7O0FBS0E1RCxNQUFNNkosZUFBTixHQUF3QixVQUFVMUUsSUFBVixFQUFnQjtBQUN0QyxTQUFPLEtBQUszRSxZQUFMLENBQWtCMkUsSUFBbEIsQ0FBUDtBQUNELENBRkQ7O0FBSUE7Ozs7OztBQU1BbkYsTUFBTThKLEtBQU4sR0FBYyxVQUFVbkIsUUFBVixFQUF3QztBQUFBLE1BQXBCVixhQUFvQix1RUFBSixFQUFJOztBQUNwREEsa0JBQWdCQSxjQUFjSSxXQUFkLEVBQWhCOztBQUVBLE1BQUksQ0FBQ0osYUFBTCxFQUFvQjtBQUNsQixXQUFPLEtBQUt4SCxTQUFMLENBQWVrSSxRQUFmLEtBQTRCLElBQW5DO0FBQ0Q7O0FBRUQsTUFBSSxLQUFLbEksU0FBTCxDQUFla0ksUUFBZixLQUE0QjNJLE1BQU1HLE9BQU4sQ0FBY0MsS0FBOUMsRUFBcUQ7QUFDbkQ7QUFDQXVKLFlBQVFDLElBQVIsMEJBQW9DakIsUUFBcEM7QUFDRDs7QUFFRCxPQUFLbEksU0FBTCxDQUFla0ksUUFBZixJQUEyQlYsYUFBM0I7QUFDRCxDQWJEOztBQWVBOzs7OztBQUtBakksTUFBTStKLFdBQU4sR0FBb0IsVUFBVXBCLFFBQVYsRUFBb0I7QUFDdEMsU0FBTyxLQUFLbEksU0FBTCxDQUFla0ksUUFBZixDQUFQO0FBQ0QsQ0FGRDs7QUFJQTs7O0FBR0EzSSxNQUFNc0QscUJBQU4sR0FBOEIsWUFBWTtBQUFBOztBQUN4QyxPQUFLMUMsUUFBTCxDQUFjcUQsS0FBZCxHQUFzQixFQUFFRCxXQUFXLEVBQWIsRUFBdEI7O0FBRUEsTUFBSVMsT0FBT3BDLE9BQU8ySCxtQkFBUCxDQUEyQi9GLE1BQU1ELFNBQWpDLENBQVg7O0FBSHdDLDZCQUsvQlIsQ0FMK0IsRUFLeEJDLENBTHdCO0FBTXRDLFFBQUl0QyxNQUFNc0QsS0FBS2pCLENBQUwsQ0FBVjtBQUNBLFFBQUl5RyxNQUFNaEcsTUFBTUQsU0FBTixDQUFnQjdDLEdBQWhCLENBQVY7O0FBRUEsUUFBSSxPQUFPOEksR0FBUCxJQUFjLFVBQWQsSUFBNEI5SSxPQUFPLGFBQXZDLEVBQXNEO0FBQ3BEO0FBQ0Q7O0FBRUQsV0FBS1AsUUFBTCxDQUFjcUQsS0FBZCxDQUFvQkQsU0FBcEIsQ0FBOEI3QyxHQUE5QixJQUFxQzhJLEdBQXJDOztBQUVBaEcsVUFBTUQsU0FBTixDQUFnQjdDLEdBQWhCLElBQXVCLFlBQVk7QUFBQTtBQUFBOztBQUNqQyxhQUFPbkIsTUFBTW9ILFVBQU4sQ0FBaUIsWUFBTTtBQUM1QixZQUFJLENBQUMsT0FBSzhDLFNBQVYsRUFBcUI7QUFDbkIsaUJBQU9ELElBQUlFLEtBQUosQ0FBVSxNQUFWLEVBQWdCQyxVQUFoQixDQUFQO0FBQ0Q7O0FBRUQsZUFBT3BLLE1BQU1zRyxPQUFOLENBQWM7QUFBQSxpQkFBTTJELElBQUlFLEtBQUosQ0FBVSxNQUFWLEVBQWdCQyxVQUFoQixDQUFOO0FBQUEsU0FBZCxDQUFQO0FBQ0QsT0FOTSxDQUFQO0FBT0QsS0FSRDtBQWZzQzs7QUFLeEMsT0FBSyxJQUFJNUcsSUFBSSxDQUFSLEVBQVdDLElBQUlnQixLQUFLZixNQUF6QixFQUFpQ0YsSUFBSUMsQ0FBckMsRUFBd0NELEdBQXhDLEVBQTZDO0FBQUEscUJBQXBDQSxDQUFvQyxFQUE3QkMsQ0FBNkI7O0FBQUEsNkJBS3pDO0FBY0g7QUFDRixDQXpCRDs7QUEyQkE7OztBQUdBekQsTUFBTXVELHNCQUFOLEdBQStCLFlBQVk7QUFDekMsT0FBSzNDLFFBQUwsQ0FBY3dELFVBQWQsR0FBMkJBLFVBQTNCO0FBQ0EsT0FBS3hELFFBQUwsQ0FBY3lELFdBQWQsR0FBNEJBLFdBQTVCO0FBQ0EsT0FBS3pELFFBQUwsQ0FBYzBELE9BQWQsR0FBd0JILE9BQU9HLE9BQS9CO0FBQ0FILFNBQU9DLFVBQVAsR0FBb0IsS0FBS2lHLHVCQUFMLENBQTZCbEcsT0FBT0MsVUFBcEMsRUFBZ0QsQ0FBaEQsQ0FBcEI7QUFDQUQsU0FBT0UsV0FBUCxHQUFxQixLQUFLZ0csdUJBQUwsQ0FBNkJsRyxPQUFPRSxXQUFwQyxFQUFpRCxDQUFqRCxDQUFyQjs7QUFFQSxNQUFHLENBQUNGLE9BQU9tRyxTQUFYLEVBQXNCO0FBQ3BCbkcsV0FBT0csT0FBUCxDQUFlaUcsV0FBZixHQUE2QixLQUFLRix1QkFBTCxDQUE2QmxHLE9BQU9HLE9BQVAsQ0FBZWlHLFdBQTVDLENBQTdCO0FBQ0FwRyxXQUFPRyxPQUFQLENBQWVOLFNBQWYsQ0FBeUIyRCxJQUF6QixHQUFnQyxLQUFLMEMsdUJBQUwsQ0FBNkJsRyxPQUFPRyxPQUFQLENBQWVOLFNBQWYsQ0FBeUIyRCxJQUF0RCxFQUE0RCxDQUFDLENBQUQsRUFBSSxNQUFKLENBQTVELENBQWhDO0FBQ0F4RCxXQUFPRyxPQUFQLENBQWVOLFNBQWYsQ0FBeUJ3RyxLQUF6QixHQUFpQyxLQUFLSCx1QkFBTCxDQUE2QmxHLE9BQU9HLE9BQVAsQ0FBZU4sU0FBZixDQUF5QndHLEtBQXRELENBQWpDO0FBQ0Q7QUFDRixDQVpEOztBQWNBOzs7QUFHQXhLLE1BQU1xRCxhQUFOLEdBQXNCLFlBQVk7QUFDaEMsT0FBS3pDLFFBQUwsQ0FBY21ELE9BQWQsR0FBd0IsRUFBRUMsV0FBVyxFQUFiLEVBQXhCO0FBQ0EsT0FBS3BELFFBQUwsQ0FBY21ELE9BQWQsQ0FBc0JDLFNBQXRCLENBQWdDeUcsZ0JBQWhDLEdBQW1EMUcsUUFBUUMsU0FBUixDQUFrQnlHLGdCQUFyRTtBQUNBLE9BQUs3SixRQUFMLENBQWNtRCxPQUFkLENBQXNCQyxTQUF0QixDQUFnQ08sbUJBQWhDLEdBQXNEUixRQUFRQyxTQUFSLENBQWtCTyxtQkFBeEU7QUFDQSxPQUFLM0QsUUFBTCxDQUFjbUQsT0FBZCxDQUFzQkMsU0FBdEIsQ0FBZ0MwRyxNQUFoQyxHQUF5QzNHLFFBQVFDLFNBQVIsQ0FBa0IwRyxNQUEzRDs7QUFFQTNHLFVBQVFDLFNBQVIsQ0FBa0IwRyxNQUFsQixHQUEyQixZQUFZO0FBQ3JDLFdBQU8sS0FBS0MsZ0JBQVo7QUFDQSxXQUFPM0ssTUFBTVksUUFBTixDQUFlbUQsT0FBZixDQUF1QkMsU0FBdkIsQ0FBaUMwRyxNQUFqQyxDQUF3Q1AsS0FBeEMsQ0FBOEMsSUFBOUMsRUFBb0RDLFNBQXBELENBQVA7QUFDRCxHQUhEOztBQUtBckcsVUFBUUMsU0FBUixDQUFrQnlHLGdCQUFsQixHQUFxQyxVQUFVdEYsSUFBVixFQUFnQnZCLEVBQWhCLEVBQW9CO0FBQ3ZELFFBQUlnSCxPQUFPLEdBQUdDLEtBQUgsQ0FBU0MsSUFBVCxDQUFjVixTQUFkLENBQVg7O0FBRUEsUUFBSSxDQUFDLEtBQUtPLGdCQUFWLEVBQTRCO0FBQzFCLFdBQUtBLGdCQUFMLEdBQXdCLEVBQXhCO0FBQ0Q7O0FBRUQsUUFBSSxDQUFDLEtBQUtBLGdCQUFMLENBQXNCeEYsSUFBdEIsQ0FBTCxFQUFrQztBQUNoQyxXQUFLd0YsZ0JBQUwsQ0FBc0J4RixJQUF0QixJQUE4QixFQUE5QjtBQUNEOztBQUVELFFBQUcsT0FBT3ZCLEVBQVAsS0FBYyxVQUFqQixFQUE2QjtBQUMzQmdILFdBQUssQ0FBTCxJQUFVLFlBQVk7QUFBQTtBQUFBOztBQUNwQixlQUFPNUssTUFBTXNHLE9BQU4sQ0FBYztBQUFBLGlCQUFNMUMsR0FBR3VHLEtBQUgsQ0FBUyxNQUFULEVBQWVDLFdBQWYsQ0FBTjtBQUFBLFNBQWQsQ0FBUDtBQUNELE9BRkQ7QUFHRDs7QUFFRCxTQUFLTyxnQkFBTCxDQUFzQnhGLElBQXRCLEVBQTRCdEIsSUFBNUIsQ0FBaUM7QUFDL0JrSCxZQUFNbkgsRUFEeUI7QUFFL0JBLFVBQUlnSCxLQUFLLENBQUw7QUFGMkIsS0FBakM7O0FBS0EsV0FBTzVLLE1BQU1ZLFFBQU4sQ0FBZW1ELE9BQWYsQ0FBdUJDLFNBQXZCLENBQWlDeUcsZ0JBQWpDLENBQWtETixLQUFsRCxDQUF3RCxJQUF4RCxFQUE4RFMsSUFBOUQsQ0FBUDtBQUNELEdBdkJEOztBQXlCQTdHLFVBQVFDLFNBQVIsQ0FBa0JPLG1CQUFsQixHQUF3QyxVQUFVWSxJQUFWLEVBQWdCdkIsRUFBaEIsRUFBb0I7QUFDMUQsUUFBSWdILE9BQU8sR0FBR0MsS0FBSCxDQUFTQyxJQUFULENBQWNWLFNBQWQsQ0FBWDs7QUFFQSxRQUFJLENBQUMsS0FBS08sZ0JBQVYsRUFBNEI7QUFDMUIsV0FBS0EsZ0JBQUwsR0FBd0IsRUFBeEI7QUFDRDs7QUFFRCxRQUFJLENBQUMsS0FBS0EsZ0JBQUwsQ0FBc0J4RixJQUF0QixDQUFMLEVBQWtDO0FBQ2hDLFdBQUt3RixnQkFBTCxDQUFzQnhGLElBQXRCLElBQThCLEVBQTlCO0FBQ0Q7O0FBRUQsU0FBSyxJQUFJM0IsSUFBSSxDQUFSLEVBQVdDLElBQUksS0FBS2tILGdCQUFMLENBQXNCeEYsSUFBdEIsRUFBNEJ6QixNQUFoRCxFQUF3REYsSUFBSUMsQ0FBNUQsRUFBK0RELEdBQS9ELEVBQW9FO0FBQ2xFLFVBQUl3SCxXQUFXLEtBQUtMLGdCQUFMLENBQXNCeEYsSUFBdEIsRUFBNEIzQixDQUE1QixDQUFmOztBQUVBLFVBQUl3SCxTQUFTRCxJQUFULEtBQWtCbkgsRUFBdEIsRUFBMEI7QUFDeEIsYUFBSytHLGdCQUFMLENBQXNCeEYsSUFBdEIsRUFBNEI4RixNQUE1QixDQUFtQ3pILENBQW5DLEVBQXNDLENBQXRDO0FBQ0FvSCxhQUFLLENBQUwsSUFBVUksU0FBU3BILEVBQW5CO0FBQ0FKO0FBQ0FDO0FBQ0E7QUFDRDtBQUNGOztBQUVELFFBQUksQ0FBQyxLQUFLa0gsZ0JBQUwsQ0FBc0J4RixJQUF0QixFQUE0QnpCLE1BQWpDLEVBQXlDO0FBQ3ZDLGFBQU8sS0FBS2lILGdCQUFMLENBQXNCeEYsSUFBdEIsQ0FBUDtBQUNEOztBQUVELFdBQU9uRixNQUFNWSxRQUFOLENBQWVtRCxPQUFmLENBQXVCQyxTQUF2QixDQUFpQ08sbUJBQWpDLENBQXFENEYsS0FBckQsQ0FBMkQsSUFBM0QsRUFBaUVTLElBQWpFLENBQVA7QUFDRCxHQTVCRDtBQTZCRCxDQWpFRDs7QUFtRUE7Ozs7Ozs7QUFPQTVLLE1BQU1xSyx1QkFBTixHQUFnQyxVQUFVekcsRUFBVixFQUE0QjtBQUFBLE1BQWRzSCxHQUFjLHVFQUFSLE1BQVE7O0FBQzFELFNBQU8sWUFBWTtBQUNqQixRQUFJTixPQUFPLEdBQUdDLEtBQUgsQ0FBU0MsSUFBVCxDQUFjVixTQUFkLENBQVg7QUFDQSxLQUFDbkcsTUFBTWtILE9BQU4sQ0FBY0QsR0FBZCxDQUFELEtBQXdCQSxNQUFNLENBQUNBLEdBQUQsQ0FBOUI7O0FBRmlCLGlDQUlUMUgsQ0FKUyxFQUlGQyxDQUpFO0FBS2YsVUFBSTJILE1BQU1GLElBQUkxSCxDQUFKLENBQVY7QUFDQSxVQUFJNkgsUUFBUUQsR0FBWjtBQUNBLFVBQUlFLFdBQVdWLEtBQUtRLEdBQUwsQ0FBZjs7QUFFQSxVQUFHQSxPQUFPLE1BQVYsRUFBa0I7QUFDaEJDLGdCQUFRVCxLQUFLbEgsTUFBTCxHQUFjLENBQXRCO0FBQ0E0SCxtQkFBV1YsS0FBS1MsS0FBTCxDQUFYO0FBQ0Q7O0FBRUQsVUFBRyxPQUFPQyxRQUFQLElBQW1CLFVBQXRCLEVBQWtDO0FBQ2hDO0FBQ0Q7O0FBRUQsVUFBRyxDQUFDQSxTQUFTQyxVQUFiLEVBQXlCO0FBQ3ZCWCxhQUFLUyxLQUFMLElBQWMsWUFBWTtBQUFBOztBQUN4QixpQkFBT3JMLE1BQU1zRyxPQUFOLENBQWM7QUFBQSxtQkFBTWdGLFNBQVNuQixLQUFULENBQWVtQixRQUFmLEVBQXlCbEIsV0FBekIsQ0FBTjtBQUFBLFdBQWQsQ0FBUDtBQUNELFNBRkQ7O0FBSUEvSCxlQUFPbUosY0FBUCxDQUFzQlosS0FBS1MsS0FBTCxDQUF0QixFQUFtQyxZQUFuQyxFQUFpRDtBQUMvQ0ksc0JBQVksS0FEbUM7QUFFL0NDLGlCQUFPSjtBQUZ3QyxTQUFqRDtBQUlEO0FBM0JjOztBQUlqQixTQUFJLElBQUk5SCxJQUFJLENBQVIsRUFBV0MsSUFBSXlILElBQUl4SCxNQUF2QixFQUErQkYsSUFBSUMsQ0FBbkMsRUFBc0NELEdBQXRDLEVBQTJDO0FBQUEseUJBQW5DQSxDQUFtQyxFQUE1QkMsQ0FBNEI7O0FBQUEsZ0NBV3ZDO0FBYUg7O0FBRUQsV0FBT0csR0FBR3VHLEtBQUgsQ0FBUyxJQUFULEVBQWVTLElBQWYsQ0FBUDtBQUNELEdBL0JEO0FBZ0NELENBakNEOztBQW1DQTs7Ozs7O0FBTUE1SyxNQUFNMkwsSUFBTixHQUFhLFVBQVVDLEdBQVYsRUFBNkI7QUFBQSxNQUFkekwsT0FBYyx1RUFBSixFQUFJOztBQUN4QyxNQUFJMEwsVUFBVUQsR0FBZDs7QUFFQSxNQUFHLE9BQU9BLEdBQVAsSUFBYyxVQUFqQixFQUE2QjtBQUMzQkEsVUFBTSxLQUFLRSxZQUFMLENBQWtCRixHQUFsQixFQUF1QnpMLE9BQXZCLENBQU47O0FBRUEsUUFBR3lMLFFBQVFDLE9BQVgsRUFBb0I7QUFDbEIsYUFBT0QsR0FBUDtBQUNEO0FBQ0YsR0FORCxNQU9LLElBQUcsQ0FBQ0EsR0FBRCxJQUFRLFFBQU9BLEdBQVAseUNBQU9BLEdBQVAsTUFBYyxRQUF0QixJQUFrQzNILE1BQU1rSCxPQUFOLENBQWNTLEdBQWQsQ0FBckMsRUFBeUQ7QUFDNUQsV0FBT0EsR0FBUDtBQUNEOztBQUVELE1BQUluSCxPQUFPcEMsT0FBTzJILG1CQUFQLENBQTJCNEIsR0FBM0IsQ0FBWDs7QUFFQSxPQUFJLElBQUluRixJQUFJLENBQVIsRUFBV3NGLElBQUl0SCxLQUFLZixNQUF4QixFQUFnQytDLElBQUlzRixDQUFwQyxFQUF1Q3RGLEdBQXZDLEVBQTRDO0FBQzFDLFFBQUl0RixNQUFNc0QsS0FBS2dDLENBQUwsQ0FBVjtBQUNBLFFBQUl1RixhQUFhM0osT0FBTzRKLHdCQUFQLENBQWdDTCxHQUFoQyxFQUFxQ3pLLEdBQXJDLENBQWpCOztBQUVBLFFBQUcsQ0FBQzZLLFdBQVdFLFlBQVosSUFBNEIsQ0FBQ0YsV0FBV0csUUFBM0MsRUFBcUQ7QUFDbkQ7QUFDRDs7QUFFRCxRQUFHaE0sUUFBUWlNLE9BQVgsRUFBb0I7QUFDbEIvSixhQUFPbUosY0FBUCxDQUFzQkksR0FBdEIsRUFBMkJ6SyxHQUEzQixlQUFvQzZLLFVBQXBDLElBQWdETixPQUFPRSxJQUFJekssR0FBSixFQUFTMkUsT0FBVCxJQUFvQjhGLElBQUl6SyxHQUFKLENBQTNFO0FBQ0E7QUFDRDs7QUFFRGtCLFdBQU9tSixjQUFQLENBQXNCSSxHQUF0QixFQUEyQnpLLEdBQTNCLGVBQW9DNkssVUFBcEMsSUFBZ0ROLE9BQU8sS0FBS0MsSUFBTCxDQUFVQyxJQUFJekssR0FBSixDQUFWLEVBQW9CaEIsT0FBcEIsQ0FBdkQ7QUFDRDs7QUFFRCxTQUFPeUwsR0FBUDtBQUNELENBakNEOztBQW1DQTs7Ozs7QUFLQTVMLE1BQU1rRSxNQUFOLEdBQWUsVUFBVTBILEdBQVYsRUFBZTtBQUM1QixTQUFPLEtBQUtELElBQUwsQ0FBVUMsR0FBVixFQUFlLEVBQUVRLFNBQVMsSUFBWCxFQUFmLENBQVA7QUFDRCxDQUZEOztBQUlBOzs7Ozs7O0FBT0FwTSxNQUFNOEwsWUFBTixHQUFxQixVQUFVbEksRUFBVixFQUE0QjtBQUFBLE1BQWR6RCxPQUFjLHVFQUFKLEVBQUk7O0FBQy9DLE1BQUl5RCxHQUFHa0MsT0FBUCxFQUFnQjtBQUNkLFdBQU9sQyxFQUFQO0FBQ0Q7O0FBRUQsTUFBTXlJLHVCQUF1QixTQUF2QkEsb0JBQXVCLEdBQVk7QUFBQTtBQUFBOztBQUN2QyxRQUFHbE0sUUFBUW1NLEdBQVIsSUFBZXRNLE1BQU1jLFlBQXJCLElBQXFDZCxNQUFNRyxPQUFOLENBQWNFLFdBQWQsQ0FBMEJrTSxPQUExQixDQUFrQ3BNLFFBQVFtTSxHQUExQyxLQUFrRCxDQUFDLENBQTNGLEVBQThGO0FBQzVGdE0sWUFBTWMsWUFBTixDQUFtQmdHLFNBQW5CLENBQTZCMEYsUUFBN0IsQ0FBc0NyTSxRQUFRbU0sR0FBOUMsRUFBbUR0TSxNQUFNYyxZQUFOLENBQW1COEUsSUFBdEU7QUFDRDs7QUFFRCxXQUFPNUYsTUFBTXNILFFBQU4sQ0FBZTtBQUFBLGFBQU0xRCxHQUFHdUcsS0FBSCxDQUFTLE1BQVQsRUFBZUMsV0FBZixDQUFOO0FBQUEsS0FBZixDQUFQO0FBQ0QsR0FORDs7QUFRQSxNQUFJM0YsT0FBT3BDLE9BQU9vQyxJQUFQLENBQVliLEVBQVosQ0FBWDtBQUNBeUksdUJBQXFCckksU0FBckIsR0FBaUNKLEdBQUdJLFNBQXBDOztBQUVBLE9BQUksSUFBSVIsSUFBSSxDQUFSLEVBQVdDLElBQUlnQixLQUFLZixNQUF4QixFQUFnQ0YsSUFBSUMsQ0FBcEMsRUFBdUNELEdBQXZDLEVBQTRDO0FBQzFDLFFBQUlyQyxNQUFNc0QsS0FBS2pCLENBQUwsQ0FBVjtBQUNBNkkseUJBQXFCbEwsR0FBckIsSUFBNEJ5QyxHQUFHekMsR0FBSCxDQUE1QjtBQUNEOztBQUVEa0IsU0FBT21KLGNBQVAsQ0FBc0JhLG9CQUF0QixFQUE0QyxTQUE1QyxFQUF1RDtBQUNyRFosZ0JBQVksS0FEeUM7QUFFckRDLFdBQU85SDtBQUY4QyxHQUF2RDs7QUFLQSxTQUFPeUksb0JBQVA7QUFDRCxDQTNCRDs7QUE2QkE7Ozs7O0FBS0FyTSxNQUFNeU0sV0FBTixHQUFvQixVQUFVQyxJQUFWLEVBQWdCO0FBQ2xDLE1BQUcsQ0FBQyxLQUFLeEQsSUFBVCxFQUFlO0FBQ2I7QUFDRDs7QUFFRCxNQUFHLENBQUNqRixNQUFNa0gsT0FBTixDQUFjdUIsSUFBZCxDQUFKLEVBQXlCO0FBQ3ZCQSxXQUFPLENBQUNBLElBQUQsQ0FBUDtBQUNEOztBQUVELE1BQU1yRCxXQUFXLEtBQUtILElBQUwsQ0FBVUcsUUFBVixFQUFqQjs7QUFFQSxPQUFJLElBQUk3RixJQUFJLENBQVIsRUFBV0MsSUFBSTRGLFNBQVMzRixNQUE1QixFQUFvQ0YsSUFBSUMsQ0FBeEMsRUFBMkNELEdBQTNDLEVBQWdEO0FBQzlDLFFBQU04RixRQUFRRCxTQUFTN0YsQ0FBVCxDQUFkO0FBQ0EsUUFBTW1KLFlBQVlyRCxNQUFNc0QsTUFBeEI7O0FBRUEsU0FBSSxJQUFJQyxJQUFJLENBQVIsRUFBV0MsSUFBSUosS0FBS2hKLE1BQXhCLEVBQWdDbUosSUFBSUMsQ0FBcEMsRUFBdUNELEdBQXZDLEVBQTRDO0FBQzFDLFVBQU1QLE1BQU1JLEtBQUtHLENBQUwsQ0FBWjs7QUFFQSxVQUFHLENBQUNGLFVBQVVMLEdBQVYsQ0FBSixFQUFvQjtBQUNsQjtBQUNEOztBQUVELFdBQUksSUFBSTdGLElBQUksQ0FBUixFQUFXc0YsSUFBSVksVUFBVUwsR0FBVixFQUFlNUksTUFBbEMsRUFBMEMrQyxJQUFJc0YsQ0FBOUMsRUFBaUR0RixHQUFqRCxFQUFzRDtBQUNwRCxZQUFNbUYsTUFBTWUsVUFBVUwsR0FBVixFQUFlN0YsQ0FBZixDQUFaO0FBQ0E2QyxjQUFNeUQsY0FBTixDQUFxQm5CLElBQUloRyxJQUF6QixFQUErQixLQUEvQjtBQUNEO0FBQ0Y7QUFDRjtBQUNGLENBNUJEOztBQThCQTs7Ozs7QUFLQTVGLE1BQU1nTixTQUFOLEdBQWtCLFVBQVVOLElBQVYsRUFBZ0I7QUFDaEMsTUFBRyxDQUFDLEtBQUt4RCxJQUFULEVBQWU7QUFDYjtBQUNEOztBQUVELE1BQUcsQ0FBQ2pGLE1BQU1rSCxPQUFOLENBQWN1QixJQUFkLENBQUosRUFBeUI7QUFDdkJBLFdBQU8sQ0FBQ0EsSUFBRCxDQUFQO0FBQ0Q7O0FBRUQsTUFBTXJELFdBQVcsS0FBS0gsSUFBTCxDQUFVRyxRQUFWLEVBQWpCOztBQUVBLE9BQUksSUFBSTdGLElBQUksQ0FBUixFQUFXQyxJQUFJNEYsU0FBUzNGLE1BQTVCLEVBQW9DRixJQUFJQyxDQUF4QyxFQUEyQ0QsR0FBM0MsRUFBZ0Q7QUFDOUMsUUFBTThGLFFBQVFELFNBQVM3RixDQUFULENBQWQ7O0FBRUEsU0FBSSxJQUFJcUosSUFBSSxDQUFSLEVBQVdDLElBQUlKLEtBQUtoSixNQUF4QixFQUFnQ21KLElBQUlDLENBQXBDLEVBQXVDRCxHQUF2QyxFQUE0QztBQUMxQ3ZELFlBQU0yRCxXQUFOLENBQWtCUCxLQUFLRyxDQUFMLENBQWxCO0FBQ0Q7QUFDRjtBQUNGLENBbEJEOztBQW9CQTs7O0FBR0E3TSxNQUFNb0QsYUFBTixHQUFzQixZQUFZO0FBQ2hDZSxTQUFPc0csZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsS0FBS3pKLFNBQXRDO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7QUFLQWhCLE1BQU1pQixXQUFOLEdBQW9CLFVBQVVpTSxNQUFWLEVBQWtCO0FBQ3BDbE4sUUFBTU0sTUFBTixHQUFlNE0sTUFBZjtBQUNBL0ksU0FBT2dKLGFBQVAsQ0FBcUIsSUFBSUMsV0FBSixDQUFnQixZQUFoQixFQUE4QixFQUFFQyxRQUFRSCxNQUFWLEVBQTlCLENBQXJCO0FBQ0QsQ0FIRDs7QUFLQTs7Ozs7O0FBTUFsTixNQUFNc04sSUFBTixHQUFhLFVBQVVwRSxJQUFWLEVBQWdCO0FBQUE7O0FBQzNCQSxTQUFPQSxRQUFRcUUsU0FBU0MsSUFBeEI7O0FBRUEsTUFBRyxFQUFFdEUsZ0JBQWdCbkYsT0FBbEIsQ0FBSCxFQUErQjtBQUM3QixVQUFNLElBQUlrQixLQUFKLHdDQUFOO0FBQ0Q7O0FBRUQsTUFBR2lFLFNBQVNxRSxTQUFTRSxlQUFyQixFQUFzQztBQUNwQyxVQUFNLElBQUl4SSxLQUFKLHFDQUFOO0FBQ0Q7O0FBRUQsT0FBSytDLE1BQUwsR0FBY2tCLElBQWQ7O0FBRUEsTUFBRy9FLE9BQU91SixZQUFWLEVBQXdCO0FBQ3RCMU4sVUFBTTJOLGtCQUFOLENBQXlCeEosT0FBT3VKLFlBQVAsQ0FBb0JFLElBQTdDO0FBQ0E1TixVQUFNNk4sMEJBQU4sQ0FBaUMxSixPQUFPdUosWUFBUCxDQUFvQkksWUFBckQ7QUFDRCxHQUhELE1BSUs7QUFDSDNKLFdBQU80SixZQUFQLEdBQXNCO0FBQ3BCSCxZQUFNLEtBQUtJLHFCQUFMO0FBRGMsS0FBdEI7QUFHRDs7QUFFRCxPQUFJLElBQUk3TSxHQUFSLElBQWUsS0FBS2hCLE9BQUwsQ0FBYWlCLE9BQTVCLEVBQXFDO0FBQ25DLFNBQUtqQixPQUFMLENBQWFpQixPQUFiLENBQXFCRCxHQUFyQixJQUE0QixLQUFLd0ssSUFBTCxDQUFVLEtBQUt4TCxPQUFMLENBQWFpQixPQUFiLENBQXFCRCxHQUFyQixDQUFWLEVBQXFDLEVBQUVtTCxrQkFBZ0JuTCxHQUFsQixFQUFyQyxDQUE1QjtBQUNEOztBQUVELFNBQU8sS0FBSzhILE9BQUwsQ0FBYSxLQUFLakIsTUFBbEIsRUFBMEJMLElBQTFCLENBQStCLFlBQU07QUFDMUMsUUFBSTFFLGlCQUFPM0MsTUFBWCxFQUFtQjtBQUNqQixhQUFPMkMsaUJBQU9nTCxXQUFQLENBQW1CLEVBQUVYLE1BQU0sSUFBUixFQUFuQixDQUFQO0FBQ0Q7QUFDRixHQUpNLEVBSUozRixJQUpJLENBSUMsWUFBTTtBQUNaeEQsV0FBTzRKLFlBQVAsS0FBd0I1SixPQUFPNEosWUFBUCxDQUFvQkQsWUFBcEIsR0FBbUMsT0FBS0ksNkJBQUwsRUFBM0Q7QUFDQSxXQUFLak4sV0FBTCxDQUFpQixJQUFqQjtBQUNELEdBUE0sRUFPSnVKLEtBUEksQ0FPRSxVQUFDMkQsR0FBRCxFQUFTO0FBQ2hCLFdBQUtsTixXQUFMLENBQWlCLEtBQWpCO0FBQ0EsVUFBTWtOLEdBQU47QUFDRCxHQVZNLENBQVA7QUFXRCxDQXRDRDs7QUF3Q0E7Ozs7O0FBS0FuTyxNQUFNMk4sa0JBQU4sR0FBMkIsVUFBVUMsSUFBVixFQUFnQjtBQUN6QyxPQUFLLElBQUlwSyxJQUFJLEtBQUt3RSxNQUFMLENBQVlvRyxVQUFaLENBQXVCMUssTUFBdkIsR0FBZ0MsQ0FBN0MsRUFBZ0RGLEtBQUssQ0FBckQsRUFBd0RBLEdBQXhELEVBQTREO0FBQzFELFNBQUt3RSxNQUFMLENBQVlxRyxlQUFaLENBQTRCLEtBQUtyRyxNQUFMLENBQVlvRyxVQUFaLENBQXVCNUssQ0FBdkIsRUFBMEIyQixJQUF0RDtBQUNEOztBQUVELE1BQUltSixTQUFTLElBQUlDLFNBQUosRUFBYjtBQUNBLE1BQUlDLE1BQU1GLE9BQU9HLGVBQVAsQ0FBdUJiLElBQXZCLEVBQTZCLFdBQTdCLENBQVY7QUFDQSxNQUFJakosS0FBSzZKLElBQUlFLGFBQUosQ0FBa0IsS0FBSzFHLE1BQUwsS0FBZ0J1RixTQUFTQyxJQUF6QixHQUErQixNQUEvQixHQUF1QyxVQUF6RCxDQUFUO0FBQ0EsT0FBS3hGLE1BQUwsQ0FBWTlCLFNBQVosR0FBd0J2QixHQUFHdUIsU0FBM0I7O0FBRUEsT0FBSyxJQUFJMUMsTUFBSW1CLEdBQUd5SixVQUFILENBQWMxSyxNQUFkLEdBQXVCLENBQXBDLEVBQXVDRixPQUFLLENBQTVDLEVBQStDQSxLQUEvQyxFQUFvRDtBQUNsRCxRQUFJbUwsT0FBT2hLLEdBQUd5SixVQUFILENBQWM1SyxHQUFkLENBQVg7QUFDQSxTQUFLd0UsTUFBTCxDQUFZNEcsWUFBWixDQUF5QkQsS0FBS3hKLElBQTlCLEVBQW9Dd0osS0FBS2pELEtBQXpDO0FBQ0Q7QUFDRixDQWREOztBQWdCQTs7Ozs7QUFLQTFMLE1BQU02TiwwQkFBTixHQUFtQyxVQUFVakMsR0FBVixFQUFlO0FBQ2hELE1BQU0wQixPQUFPLFNBQVBBLElBQU8sQ0FBQ3VCLFFBQUQsRUFBV2pELEdBQVgsRUFBbUI7QUFDOUIsU0FBSSxJQUFJekssR0FBUixJQUFleUssR0FBZixFQUFvQjtBQUNsQmlELGVBQVNDLE9BQVQsQ0FBaUIzTixHQUFqQixJQUF3QnlLLElBQUl6SyxHQUFKLENBQXhCO0FBQ0Q7QUFDRixHQUpEOztBQU1BLE9BQUssSUFBSUEsR0FBVCxJQUFnQnlLLEdBQWhCLEVBQXFCO0FBQ25CLFFBQUlpRCxXQUFXMU4sUUFBUSxRQUFSLEdBQWtCNkIsaUJBQWxCLEdBQTJCQSxrQkFBUStMLFdBQVIsQ0FBb0I1TixHQUFwQixDQUExQztBQUNBbU0sU0FBS3VCLFFBQUwsRUFBZWpELElBQUl6SyxHQUFKLENBQWY7QUFDRDtBQUNGLENBWEQ7O0FBYUE7OztBQUdBbkIsTUFBTWdPLHFCQUFOLEdBQThCLFlBQVk7QUFDeEMsU0FBTyxLQUFLaEcsTUFBTCxDQUFZZ0gsU0FBbkI7QUFDRCxDQUZEOztBQUlBOzs7QUFHQWhQLE1BQU1rTyw2QkFBTixHQUFzQyxZQUFZO0FBQ2hELE1BQUllLFFBQVEsRUFBRUMsUUFBUWxNLGtCQUFROEwsT0FBbEIsRUFBWjs7QUFFQSxPQUFJLElBQUkzTixHQUFSLElBQWU2QixrQkFBUStMLFdBQXZCLEVBQW9DO0FBQ2xDRSxVQUFNOU4sR0FBTixJQUFhNkIsa0JBQVErTCxXQUFSLENBQW9CNU4sR0FBcEIsRUFBeUIyTixPQUF0QztBQUNEOztBQUVELFNBQU9HLEtBQVA7QUFDRCxDQVJEOztBQVVBOzs7QUFHQWpQLE1BQU1tUCxNQUFOLEdBQWUsWUFBWTtBQUN6QixPQUFLckwsWUFBTDtBQUNBYixtQkFBT2tNLE1BQVA7QUFDQW5NLG9CQUFRbU0sTUFBUjtBQUNBLE1BQUlDLFlBQVkvTSxPQUFPb0MsSUFBUCxDQUFZdkIsZ0JBQU1tTSxRQUFsQixDQUFoQjs7QUFFQSxPQUFJLElBQUk3TCxJQUFJLENBQVIsRUFBV0MsSUFBSTJMLFVBQVUxTCxNQUE3QixFQUFxQ0YsSUFBSUMsQ0FBekMsRUFBNENELEdBQTVDLEVBQWlEO0FBQy9DLFdBQU9OLGdCQUFNbU0sUUFBTixDQUFlRCxVQUFVNUwsQ0FBVixDQUFmLENBQVA7QUFDRDs7QUFFRCxPQUFLdEQsV0FBTDtBQUNELENBWEQ7O0FBYUFpRSxPQUFPbkUsS0FBUCxHQUFlQSxLQUFmO2tCQUNlQSxLOztBQUNmQSxNQUFNRSxXQUFOLEc7Ozs7Ozs7Ozs7Ozs7OztBQzcrQkE7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7OztJQVFxQjRDLEc7OztBQUduQixpQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTjhILElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLHFJQUNWQSxJQURVOztBQUVuQixVQUFLMEUsWUFBTCxHQUFvQixLQUFwQjtBQUZtQjtBQUdwQjs7OzsrQkFFVTtBQUNULFdBQUtYLElBQUwsQ0FBVSxLQUFWLEVBQWlCLEtBQUtZLE1BQXRCO0FBQ0Q7OzsyQkFFTUMsRyxFQUFLO0FBQ1YsV0FBS0MsS0FBTCxDQUFXLEtBQUtILFlBQWhCLElBQWdDRSxHQUFoQztBQUNEOzs7O0VBZDhCaE8sbUI7O0FBQVpzQixHLENBQ1o0RixPLEdBQVUsTztrQkFERTVGLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVnJCOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVPLElBQU00TSw0Q0FBa0IsbUJBQXhCO0FBQ0EsSUFBTUMsd0RBQXdCLElBQUlDLE1BQUosQ0FBV0YsZ0JBQWdCRyxNQUEzQixFQUFtQyxHQUFuQyxDQUE5QjtBQUNBLElBQU1DLDhDQUFtQixDQUFDLFdBQUQsRUFBYyxPQUFkLENBQXpCOztBQUVQOzs7O0lBR3FCdE8sUzs7Ozs7QUFVbkI7Ozs2QkFHZ0I7QUFDZHhCLHNCQUFNOEcsU0FBTixDQUFnQixXQUFoQixFQUE2QnRGLFNBQTdCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7MEJBT2F1TyxPLEVBQVNDLFUsRUFBNEI7QUFBQSxVQUFoQkMsU0FBZ0IsdUVBQUosRUFBSTs7QUFDaERBLCtCQUFpQjdPLGlCQUFqQixFQUE2QjZPLFNBQTdCO0FBQ0EsVUFBTXhMLE9BQU8sRUFBYjtBQUNBLFVBQU15TCxPQUFPLEVBQWI7QUFDQSxVQUFNQyxPQUFPOU8sZ0JBQU0rTyxLQUFOLENBQVlKLFVBQVosRUFBd0IsR0FBeEIsRUFBNkIsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FBN0IsQ0FBYjtBQUNBRyxXQUFLQSxLQUFLek0sTUFBTCxHQUFjLENBQW5CLGdCQUFrQ3lNLEtBQUtBLEtBQUt6TSxNQUFMLEdBQWMsQ0FBbkIsQ0FBbEM7O0FBRUEsV0FBSyxJQUFJdkMsR0FBVCxJQUFnQjhPLFNBQWhCLEVBQTJCO0FBQ3pCeEwsYUFBS1osSUFBTCxDQUFVMUMsR0FBVjtBQUNBK08sYUFBS3JNLElBQUwsQ0FBVW9NLFVBQVU5TyxHQUFWLENBQVY7QUFDRDs7QUFFRCxhQUFPLG1DQUFJa1AsUUFBSixnQkFBZ0I1TCxJQUFoQixRQUF5QjBMLEtBQUt0TCxJQUFMLENBQVUsSUFBVixDQUF6QixPQUE0Q3NGLEtBQTVDLENBQWtENEYsT0FBbEQsRUFBMkRHLElBQTNELENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7O0FBTUEscUJBQVl2TCxFQUFaLEVBQTRCO0FBQUEsUUFBWkksS0FBWSx1RUFBSixFQUFJOztBQUFBOztBQUMxQixRQUFJLEVBQUVKLGNBQWNaLE9BQWhCLENBQUosRUFBOEI7QUFDNUIsWUFBTSxJQUFJa0IsS0FBSiw4REFBTjtBQUNEOztBQUVELFNBQUtxTCxXQUFMLEdBQW1CLEtBQW5CO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixLQUFwQjtBQUNBLFNBQUt2SixZQUFMLEdBQW9CLEtBQXBCO0FBQ0EsU0FBSzRCLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxTQUFLRyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsU0FBS3lILFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxTQUFLNUQsTUFBTCxHQUFjLEVBQWQ7QUFDQSxTQUFLNkQsaUJBQUwsR0FBeUIsSUFBekI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLEtBQXJCO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixJQUFuQjtBQUNBLFNBQUtDLGNBQUwsR0FBc0IsRUFBdEI7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQixFQUExQjtBQUNBLFNBQUtDLGlCQUFMLEdBQXlCLEVBQXpCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFNBQUt4TCxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsU0FBS3lMLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxTQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxTQUFLdlEsWUFBTCxHQUFvQixFQUFwQjtBQUNBLFNBQUt3USxhQUFMLEdBQXFCLElBQXJCO0FBQ0EsU0FBS0MscUJBQUwsR0FBNkIsSUFBN0I7QUFDQSxTQUFLck0sS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0osRUFBTCxHQUFVQSxFQUFWO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7aURBTXlDO0FBQUEsVUFBZHhFLE9BQWMsdUVBQUosRUFBSTs7QUFDdkM7QUFDRWtSLHNCQUFjLEtBRGhCO0FBRUVDLG1CQUFXLElBRmI7QUFHRUMsb0JBQVksSUFIZDtBQUlFQyw4QkFBc0IsSUFKeEI7QUFLRUMsMEJBQWtCO0FBTHBCLFNBTUt0UixPQU5MO0FBUUQ7O0FBRUQ7Ozs7Ozs7OzttREFNMkM7QUFBQSxVQUFkQSxPQUFjLHVFQUFKLEVBQUk7O0FBQ3pDLDBCQUNLLEtBQUt1UiwwQkFBTCxFQURMO0FBRUVKLG1CQUFXLEtBRmI7QUFHRUMsb0JBQVksS0FIZDtBQUlFQyw4QkFBc0IsS0FKeEI7QUFLRUMsMEJBQWtCO0FBTHBCLFNBTUt0UixPQU5MO0FBUUQ7O0FBRUQ7Ozs7Ozs7OztrQ0FNMEI7QUFBQSxVQUFkQSxPQUFjLHVFQUFKLEVBQUk7O0FBQ3hCLFdBQUttUSxXQUFMLEdBQW1CLEtBQW5CO0FBQ0EsV0FBS0ksYUFBTCxHQUFxQixJQUFyQjtBQUNBLFdBQUtVLHFCQUFMLENBQTJCUixjQUEzQixHQUE0QyxFQUE1QztBQUNBLFdBQUtELFdBQUwsR0FBbUIsS0FBS2dCLDRCQUFMLENBQWtDeFIsT0FBbEMsQ0FBbkI7QUFDQSxXQUFLd1EsV0FBTCxDQUFpQlcsU0FBakIsSUFBOEIsS0FBS00sV0FBTCxFQUE5QjtBQUNBLFdBQUtqQixXQUFMLENBQWlCWSxVQUFqQixJQUErQixLQUFLTSxZQUFMLEVBQS9CO0FBQ0EsV0FBS2xCLFdBQUwsQ0FBaUJhLG9CQUFqQixJQUF5QyxLQUFLTSxzQkFBTCxFQUF6QztBQUNBLFdBQUtuQixXQUFMLENBQWlCYyxnQkFBakIsSUFBcUMsS0FBS00sa0JBQUwsRUFBckM7QUFDRDs7QUFFRDs7Ozs7Ozs7K0JBS1c7QUFBQTs7QUFDVCxXQUFLcEIsV0FBTCxHQUFtQixLQUFLZSwwQkFBTCxFQUFuQjtBQUNBLFdBQUtNLFlBQUw7QUFDQSxXQUFLSixXQUFMO0FBQ0EsV0FBS0MsWUFBTDtBQUNBLFdBQUtDLHNCQUFMO0FBQ0EsV0FBS0Msa0JBQUw7QUFDQS9SLHNCQUFNc0csT0FBTixDQUFjO0FBQUEsZUFBTSxNQUFLMkwsT0FBTCxDQUFhLE1BQUt4QyxLQUFsQixDQUFOO0FBQUEsT0FBZDtBQUNEOztBQUVEOzs7Ozs7Ozs7Z0NBTVk7QUFBQTs7QUFDVixVQUFJeUMsVUFBVSxLQUFLQyxtQkFBTCxJQUE0QixDQUFDLEtBQUtDLGdCQUFoRDtBQUNBLFVBQUl0SixJQUFJeEUsUUFBUW9ELE9BQVIsRUFBUjtBQUNBLFdBQUt5SixhQUFMLEdBQXFCZSxVQUFTLElBQVQsR0FBZSxLQUFLRSxnQkFBTCxDQUFzQnRNLE9BQTFEOztBQUVBLFVBQUksQ0FBQyxLQUFLNEssYUFBTixJQUF1QixLQUFLQyxXQUFMLENBQWlCMEIsU0FBeEMsSUFBcUQsS0FBS0YsbUJBQTlELEVBQW1GO0FBQ2pGLGFBQUtHLHVCQUFMLENBQTZCLEtBQUszTixFQUFsQyxFQUFzQyxLQUFLd00sYUFBM0M7QUFDRDs7QUFFRCxVQUFNb0IsY0FBYyxTQUFkQSxXQUFjLENBQUNsSixRQUFELEVBQVdtSixNQUFYLEVBQXNCO0FBQ3hDLGFBQUssSUFBSWhQLElBQUksQ0FBUixFQUFXQyxJQUFJNEYsU0FBUzNGLE1BQTdCLEVBQXFDRixJQUFJQyxDQUF6QyxFQUE0Q0QsR0FBNUMsRUFBaUQ7QUFDL0MsY0FBSThGLFFBQVFELFNBQVM3RixDQUFULENBQVo7O0FBRUEsY0FBSThGLE1BQU1tSixRQUFOLElBQWtCLENBQWxCLElBQXVCLE9BQUtDLGdCQUFMLENBQXNCcEosS0FBdEIsRUFBNkJrSixNQUE3QixDQUEzQixFQUFpRTtBQUMvRCxtQkFBS3pGLGNBQUwsQ0FBb0J6RCxLQUFwQixFQUEyQixPQUFLcUgsV0FBTCxHQUFrQixPQUFLQSxXQUFMLENBQWlCVSxZQUFuQyxHQUFpRCxLQUE1RTtBQUNELFdBRkQsTUFHSyxJQUFJL0gsTUFBTW1KLFFBQU4sSUFBa0IsQ0FBbEIsSUFBdUIsQ0FBQ25KLE1BQU14RCxPQUFsQyxFQUEyQztBQUM5QyxtQkFBS3dNLHVCQUFMLENBQTZCaEosS0FBN0I7QUFDQWlKLHdCQUFZakosTUFBTXFKLFVBQWxCLEVBQThCckosS0FBOUI7QUFDRDtBQUNGO0FBQ0YsT0FaRDs7QUFjQWlKLGtCQUFZLEtBQUs1TixFQUFMLENBQVFnTyxVQUFwQixFQUFnQyxLQUFLaE8sRUFBckM7QUFDQSxXQUFLMkwsV0FBTCxHQUFtQixJQUFuQjtBQUNBLFVBQUkvSixZQUFKOztBQUVBLFVBQUksQ0FBQyxLQUFLbUssYUFBVixFQUF5QjtBQUN2Qm5LLGNBQU12RyxnQkFBTXNHLE9BQU4sQ0FBYyxZQUFNO0FBQ3hCLGlCQUFLbUosS0FBTCxDQUFXbUQsVUFBWCxJQUF5QixPQUFLbkQsS0FBTCxDQUFXbUQsVUFBWCxDQUFzQkMsT0FBdEIsQ0FBOEJDLFNBQTlCLEVBQXlDLEVBQUVDLFNBQVMsS0FBWCxFQUF6QyxDQUF6QjtBQUNBLGlCQUFPLE9BQUtDLFFBQUwsRUFBUDtBQUNELFNBSEssQ0FBTjs7QUFLQSxZQUFJLEtBQUt6SSxXQUFMLENBQWlCMEksV0FBckIsRUFBa0M7QUFDaENuSyxjQUFJOUYsa0JBQVFrUSxHQUFSLENBQVksS0FBSzNJLFdBQUwsQ0FBaUIwSSxXQUE3QixFQUEwQyxFQUFFaEUsT0FBTyxLQUFLMUUsV0FBTCxDQUFpQjRJLGFBQTFCLEVBQTFDLEVBQXFGeEwsSUFBckYsQ0FBMEYsVUFBQ3BCLEdBQUQsRUFBUztBQUNyRyxtQkFBSzVCLEVBQUwsQ0FBUXVCLFNBQVIsR0FBb0IsT0FBS2tOLFNBQXpCO0FBQ0FwVCw0QkFBTStGLFdBQU4sQ0FBa0IsT0FBS3BCLEVBQXZCLEVBQTJCNEIsSUFBSThNLElBQS9CO0FBQ0EsbUJBQU8sT0FBS0QsU0FBWjtBQUNBLG1CQUFPcFQsZ0JBQU1pSixPQUFOLENBQWMsT0FBS3RFLEVBQW5CLEVBQXVCLEVBQUVrRCxXQUFXLElBQWIsRUFBdkIsQ0FBUDtBQUNELFdBTEcsQ0FBSjtBQU1EO0FBQ0YsT0FkRCxNQWVLO0FBQ0h0QixjQUFNdkcsZ0JBQU1zRyxPQUFOLENBQWMsWUFBTTtBQUN4QixpQkFBS21KLEtBQUwsQ0FBVzZELFlBQVgsSUFBMkIsT0FBSzdELEtBQUwsQ0FBVzZELFlBQVgsQ0FBd0JULE9BQXhCLENBQWdDQyxTQUFoQyxFQUEyQyxFQUFFQyxTQUFTLEtBQVgsRUFBM0MsQ0FBM0I7QUFDQSxpQkFBS1EsVUFBTDtBQUNELFNBSEssQ0FBTjtBQUlEOztBQUVELFdBQUs3QyxhQUFMLEdBQXFCLEtBQXJCO0FBQ0EsV0FBS0MsV0FBTCxHQUFtQixJQUFuQjs7QUFFQSxhQUFPN0gsRUFBRW5CLElBQUYsQ0FBTyxZQUFNO0FBQ2xCLGVBQUs0SSxZQUFMLEdBQW9CLElBQXBCO0FBQ0EsZUFBT2hLLEdBQVA7QUFDRCxPQUhNLENBQVA7QUFJRDs7QUFFRDs7Ozs7Ozs7O2dDQU1ZO0FBQUE7O0FBQ1YsVUFBSSxLQUFLUyxZQUFULEVBQXVCO0FBQ3JCLGVBQU8xQyxRQUFRb0QsT0FBUixFQUFQO0FBQ0Q7O0FBRUQsV0FBSytILEtBQUwsQ0FBVytELFVBQVgsSUFBeUIsS0FBSy9ELEtBQUwsQ0FBVytELFVBQVgsQ0FBc0JYLE9BQXRCLENBQThCQyxTQUE5QixFQUF5QyxFQUFFQyxTQUFTLEtBQVgsRUFBekMsQ0FBekI7O0FBRUEsYUFBT3pPLFFBQVFvRCxPQUFSLENBQWdCMUgsZ0JBQU1zRyxPQUFOLENBQWM7QUFBQSxlQUFNLE9BQUttTixRQUFMLEVBQU47QUFBQSxPQUFkLENBQWhCLEVBQXNEOUwsSUFBdEQsQ0FBMkQsZUFBTztBQUN2RSxlQUFLWCxZQUFMLEdBQW9CLElBQXBCO0FBQ0EsZUFBT1QsR0FBUDtBQUNELE9BSE0sQ0FBUDtBQUlEOztBQUVEOzs7Ozs7OzttQ0FLZTtBQUNiLFVBQUlpTSxTQUFTeFMsZ0JBQU13RixlQUFOLENBQXNCLEtBQUtiLEVBQTNCLEVBQStCLEtBQS9CLENBQWI7QUFDQSxVQUFJakQsUUFBUSxLQUFLNkksV0FBTCxDQUFpQnhGLEtBQWpCLElBQTBCL0UsZ0JBQU0wQixLQUE1QztBQUNBLFVBQUlxRCxjQUFKO0FBQ0EsVUFBSWdELFNBQVMvSCxnQkFBTWdJLE1BQU4sS0FBaUIsS0FBS3JELEVBQW5DO0FBQ0EsV0FBS0EsRUFBTCxDQUFRbUIsT0FBUixHQUFrQixJQUFsQjs7QUFFQSxVQUFJME0sTUFBSixFQUFZO0FBQ1Z6TixnQkFBUSxJQUFJckQsS0FBSixDQUFVLEtBQUtpRCxFQUFMLENBQVF3RCxZQUFSLENBQXFCLE9BQXJCLEtBQWlDbkksZ0JBQU1tRyxlQUFOLEVBQTNDLEVBQW9FLEtBQUt4QixFQUF6RSxFQUE2RSxJQUE3RSxDQUFSO0FBQ0QsT0FGRCxNQUdLO0FBQ0hJLGdCQUFRLElBQUlyRCxLQUFKLENBQVVxRyxTQUFRLE1BQVIsR0FBZ0IvSCxnQkFBTW1HLGVBQU4sRUFBMUIsRUFBbUQsS0FBS3hCLEVBQXhELEVBQTRELElBQTVELENBQVI7QUFDQW9ELG1CQUFXL0gsZ0JBQU1rSixJQUFOLEdBQWEsSUFBeEI7QUFDRDs7QUFFRCxVQUFJbkMsVUFBVWhDLEtBQWQ7QUFDQSxVQUFJMk8sU0FBU3JSLE9BQU9zUixNQUFQLENBQWM1TyxLQUFkLEVBQXFCLEtBQUtBLEtBQTFCLENBQWI7QUFDQSxVQUFJNk8sb0JBQW9CLEtBQUtySixXQUFMLENBQWlCcUosaUJBQXpDO0FBQ0EsVUFBSUMsU0FBUyxLQUFLdEosV0FBTCxDQUFpQnNKLE1BQTlCOztBQUVBLFVBQUksS0FBS3RKLFdBQUwsQ0FBaUJ2RSxRQUFyQixFQUErQjtBQUM3QmhHLHdCQUFNK0YsV0FBTixDQUFrQixLQUFLcEIsRUFBdkIsRUFBMkIsS0FBSzRGLFdBQUwsQ0FBaUJ2RSxRQUE1QztBQUNEOztBQUVELFVBQUksS0FBS3VFLFdBQUwsQ0FBaUIwSSxXQUFyQixFQUFrQztBQUNoQyxhQUFLRyxTQUFMLEdBQWlCLEtBQUt6TyxFQUFMLENBQVF1QixTQUF6QjtBQUNBLGFBQUt2QixFQUFMLENBQVF1QixTQUFSLEdBQW9CLEVBQXBCO0FBQ0Q7O0FBRUQsV0FBS2EsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsV0FBSytNLFFBQUwsR0FBZ0JELE1BQWhCO0FBQ0EsV0FBSzFCLG1CQUFMLEdBQTJCeUIsaUJBQTNCOztBQUVBNVQsc0JBQU04RSxRQUFOLENBQWVDLEtBQWY7QUFDQSxXQUFLQSxLQUFMLEdBQWEsS0FBS2dQLGVBQUwsQ0FBcUJMLE1BQXJCLEVBQTZCLEVBQTdCLENBQWI7QUFDQSxhQUFPLElBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7NkNBS3lCO0FBQUE7O0FBQ3ZCLFdBQUtNLGlCQUFMLEdBQXlCLEdBQUdDLE1BQUgsQ0FBVWpVLGdCQUFNa0IscUJBQWhCLEVBQXVDLEtBQUtxSixXQUFMLENBQWlCeUosaUJBQXhELENBQXpCOztBQUVBLFVBQU1FLFVBQVUsU0FBVkEsT0FBVSxDQUFDdlAsRUFBRCxFQUFRO0FBQ3RCLGFBQUssSUFBSW5CLElBQUksQ0FBUixFQUFXaU0sUUFBUTlLLEdBQUd5SixVQUF0QixFQUFrQzNLLElBQUlnTSxNQUFNL0wsTUFBakQsRUFBeURGLElBQUlDLENBQTdELEVBQWdFRCxHQUFoRSxFQUFxRTtBQUNuRSxjQUFJb0MsT0FBTzZKLE1BQU1qTSxDQUFOLENBQVg7O0FBRUEsY0FBSSxPQUFLd1EsaUJBQUwsQ0FBdUJ6SCxPQUF2QixDQUErQjNHLEtBQUt1TyxRQUFwQyxLQUFpRCxDQUFDLENBQXRELEVBQXlEO0FBQ3ZELGdCQUFJeFAsR0FBR3lQLFlBQUgsY0FBMkJ4TyxLQUFLdU8sUUFBaEMsQ0FBSixFQUFpRDtBQUMvQztBQUNEOztBQUVEeFAsZUFBR2lLLFlBQUgsY0FBMkJoSixLQUFLdU8sUUFBaEMsRUFBNEN4UCxHQUFHd0QsWUFBSCxDQUFnQnZDLEtBQUt1TyxRQUFyQixLQUFrQ3ZPLEtBQUt1TyxRQUFuRjtBQUNBeFAsZUFBRzBKLGVBQUgsQ0FBbUJ6SSxLQUFLdU8sUUFBeEI7QUFDRDtBQUNGOztBQUVELGFBQUssSUFBSTNRLEtBQUksQ0FBUixFQUFXQyxLQUFJa0IsR0FBRzBFLFFBQUgsQ0FBWTNGLE1BQWhDLEVBQXdDRixLQUFJQyxFQUE1QyxFQUErQ0QsSUFBL0MsRUFBb0Q7QUFDbEQsY0FBSThGLFFBQVEzRSxHQUFHMEUsUUFBSCxDQUFZN0YsRUFBWixDQUFaOztBQUVBLGNBQUksQ0FBQzhGLE1BQU14RCxPQUFYLEVBQW9CO0FBQ2xCb08sb0JBQVE1SyxLQUFSO0FBQ0Q7QUFDRjtBQUNGLE9BckJEOztBQXVCQTRLLGNBQVEsS0FBS3ZQLEVBQWI7QUFDRDs7QUFFRDs7Ozs7Ozs7a0NBS2M7QUFDWixXQUFLLElBQUluQixJQUFJLENBQVIsRUFBV0MsSUFBSSxLQUFLcVEsUUFBTCxDQUFjcFEsTUFBbEMsRUFBMENGLElBQUlDLENBQTlDLEVBQWlERCxHQUFqRCxFQUFzRDtBQUNwRCxZQUFJNlEsS0FBSyxLQUFLUCxRQUFMLENBQWN0USxDQUFkLENBQVQ7QUFDQSxTQUFDLFFBQVE4USxJQUFSLENBQWFELEVBQWIsQ0FBRCxLQUFzQkEsS0FBSyxRQUFRQSxFQUFuQzs7QUFFQSxZQUFJLENBQUMsS0FBSzFQLEVBQUwsQ0FBUXlQLFlBQVIsQ0FBcUJDLEVBQXJCLENBQUwsRUFBK0I7QUFDN0IsZUFBSzFQLEVBQUwsQ0FBUWlLLFlBQVIsQ0FBcUJ5RixFQUFyQixFQUF5QixFQUF6QjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRDs7Ozs7Ozs7bUNBS2U7QUFDYixVQUFJRSxVQUFVdlUsZ0JBQU13RixlQUFOLENBQXNCLEtBQUtiLEVBQTNCLENBQWQ7O0FBRUEsVUFBSSxDQUFDNFAsUUFBUTdRLE1BQWIsRUFBcUI7QUFDbkI7QUFDRDs7QUFFRCxVQUFJMk8sWUFBWSxLQUFLOU0sUUFBTCxLQUFrQmdQLFFBQVEsQ0FBUixDQUFsQztBQUNBLFVBQUlDLGlCQUFpQixJQUFyQjs7QUFFQSxXQUFLLElBQUloUixJQUFJLENBQVIsRUFBV0MsSUFBSThRLFFBQVE3USxNQUE1QixFQUFvQ0YsSUFBSUMsQ0FBeEMsRUFBMkNELEdBQTNDLEVBQWdEO0FBQzlDLFlBQUlnUCxTQUFTK0IsUUFBUS9RLENBQVIsQ0FBYjs7QUFFQSxZQUFJLENBQUNnUCxPQUFPMU0sT0FBUCxDQUFleUUsV0FBZixDQUEyQmtLLFdBQWhDLEVBQTZDO0FBQzNDRCwyQkFBaUJoQyxNQUFqQjs7QUFFQTtBQUNEO0FBQ0Y7O0FBRUQsV0FBSzdCLFdBQUwsQ0FBaUIwQixTQUFqQixHQUE2QkEsU0FBN0I7QUFDQUEsbUJBQWEsS0FBS3FDLFFBQUwsRUFBYjs7QUFFQSxVQUFJLEtBQUtuSyxXQUFMLENBQWlCa0ssV0FBckIsRUFBa0M7QUFDaEMsYUFBS3JELHFCQUFMLEdBQTZCb0QsZUFBZTFPLE9BQTVDO0FBQ0Q7O0FBRUQsV0FBS3NNLGdCQUFMLEdBQXdCb0MsY0FBeEI7QUFDQSxXQUFLalAsUUFBTCxHQUFnQmdQLFFBQVEsQ0FBUixDQUFoQjtBQUNBLFdBQUt2RCxTQUFMLEdBQWlCdUQsT0FBakI7QUFDQSxXQUFLeFAsS0FBTCxDQUFXUSxRQUFYLEdBQXNCLEtBQUs2TSxnQkFBTCxDQUFzQnRNLE9BQXRCLENBQThCZixLQUFwRDtBQUNBLE9BQUMsS0FBSzJMLGFBQU4sSUFBdUIsS0FBS25MLFFBQUwsQ0FBY08sT0FBZCxDQUFzQjZPLFVBQXRCLENBQWlDLEtBQUtoUSxFQUF0QyxDQUF2QjtBQUNBdEMsYUFBT3VTLGNBQVAsQ0FBc0IsS0FBSzdQLEtBQTNCLEVBQWtDLEtBQUtRLFFBQUwsQ0FBY08sT0FBZCxDQUFzQmlCLE9BQXhEO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OzsrQkFNV3BDLEUsRUFBSTtBQUNiLFdBQUtvTSxVQUFMLENBQWdCbE4sSUFBaEIsQ0FBcUJjLEVBQXJCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OztrQ0FNY0EsRSxFQUFJO0FBQ2hCLFdBQUssSUFBSW5CLElBQUksQ0FBUixFQUFXQyxJQUFJLEtBQUtzTixVQUFMLENBQWdCck4sTUFBcEMsRUFBNENGLElBQUlDLENBQWhELEVBQW1ERCxHQUFuRCxFQUF3RDtBQUN0RCxZQUFJOEYsUUFBUSxLQUFLeUgsVUFBTCxDQUFnQnZOLENBQWhCLENBQVo7O0FBRUEsWUFBSThGLFVBQVUzRSxFQUFkLEVBQWtCO0FBQ2hCLGVBQUtvTSxVQUFMLENBQWdCOUYsTUFBaEIsQ0FBdUJ6SCxDQUF2QixFQUEwQixDQUExQjtBQUNBQTtBQUNBQztBQUNEO0FBQ0Y7QUFDRjs7QUFFRDs7Ozs7Ozs7OzswQ0FPc0J1TSxVLEVBQVk7QUFDaEMsYUFBT0EsVUFBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7O3NDQU9rQnBLLEksRUFBTTtBQUN0QixVQUFJLENBQUN2RCxPQUFPb0MsSUFBUCxDQUFZbUIsS0FBS2lQLFlBQWpCLEVBQStCblIsTUFBcEMsRUFBNEM7QUFDMUMsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsV0FBSyxJQUFJK0MsQ0FBVCxJQUFjYixLQUFLaVAsWUFBbkIsRUFBaUM7QUFDL0IsWUFBSSxDQUFDalAsS0FBS2lQLFlBQUwsQ0FBa0JuTyxjQUFsQixDQUFpQ0QsQ0FBakMsQ0FBTCxFQUEwQztBQUN4QztBQUNEOztBQUVELFlBQUlFLE9BQU9mLEtBQUtpUCxZQUFMLENBQWtCcE8sQ0FBbEIsQ0FBWDtBQUNBLFlBQUlpRixRQUFRckssZ0JBQU13RixpQkFBTixDQUF3QkYsS0FBS2xDLElBQTdCLEVBQW1Da0MsS0FBS0csU0FBTCxDQUFlQyxPQUFsRCxDQUFaOztBQUVBLFlBQUksQ0FBQ25CLEtBQUtOLFdBQUwsQ0FBaUJ3UCwwQkFBakIsQ0FBNENuTyxJQUE1QyxFQUFrRCtFLEtBQWxELENBQUwsRUFBK0Q7QUFDN0QsaUJBQU8sSUFBUDtBQUNEO0FBQ0Y7O0FBRUQsYUFBTyxLQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7Ozs4Q0FTMEI5RixJLEVBQU1uQixJLEVBQU1pSCxLLEVBQU87QUFDM0MsVUFBSS9FLE9BQU8sS0FBS29PLGlCQUFMLENBQXVCblAsSUFBdkIsRUFBNkJuQixJQUE3QixDQUFYOztBQUVBLFVBQUksQ0FBQ2tDLElBQUwsRUFBVztBQUNULGVBQU8sSUFBUDtBQUNEOztBQUVELGFBQU8sQ0FBQ2YsS0FBS04sV0FBTCxDQUFpQndQLDBCQUFqQixDQUE0Q25PLElBQTVDLEVBQWtEK0UsS0FBbEQsQ0FBUjtBQUNEOztBQUVEOzs7Ozs7Ozs7OytDQU8yQi9FLEksRUFBTStFLEssRUFBcUI7QUFBQSxVQUFkdkwsT0FBYyx1RUFBSixFQUFJOztBQUNwRCxVQUFHLFFBQU91TCxLQUFQLHlDQUFPQSxLQUFQLE1BQWdCLFFBQW5CLEVBQTZCO0FBQzNCQSxnQkFBUSxFQUFFc0osTUFBTTNULGdCQUFNNFQsZ0JBQU4sQ0FBdUJ2SixLQUF2QixDQUFSLEVBQVI7QUFDRDs7QUFFRCxhQUFPckssZ0JBQU02VCxPQUFOLENBQWN4SixLQUFkLEVBQXFCL0UsS0FBS3dPLElBQTFCLEVBQWdDaFYsT0FBaEMsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7NkNBTXlCeUYsSSxFQUFNdUksRyxFQUFLO0FBQ2xDLFVBQUkvRixVQUFVeEMsS0FBS04sV0FBTCxDQUFpQlgsRUFBakIsQ0FBb0J5RCxPQUFsQztBQUNBLFVBQUlnTixXQUFXeFAsS0FBS04sV0FBTCxDQUFpQlgsRUFBakIsQ0FBb0J3RCxZQUFwQixDQUFpQyxXQUFqQyxDQUFmO0FBQ0EsVUFBSUYsZ0JBQWdCLENBQUNtTixZQUFZaE4sT0FBYixFQUFzQkMsV0FBdEIsRUFBcEI7QUFDQSxVQUFJZ04sY0FBY3pQLEtBQUswUCxTQUFMLENBQWVsTixPQUFmLENBQXVCQyxXQUF2QixFQUFsQjtBQUNBLFVBQUlrTixnQkFBaUIzUCxnQkFBZ0J6QixPQUFPcVIsSUFBeEIsR0FBK0I1UCxLQUFLVCxJQUFMLENBQVVrRCxXQUFWLEVBQS9CLEdBQXdELEVBQTVFO0FBQ0EsVUFBSW9OLFdBQVcsQ0FBRXRILElBQUl1SCxPQUFOLEVBQWU5UCxLQUFLK1AsWUFBcEIsQ0FBZjtBQUNBSix1QkFBaUJFLFNBQVM1UixJQUFULGlCQUE0QjBSLGFBQTVCLE9BQWpCO0FBQ0FFLGlCQUFXQSxTQUFTeEIsTUFBVCxDQUFnQixlQUFjb0IsV0FBZCx3QkFBNENwTixhQUE1QyxPQUFoQixDQUFYO0FBQ0EsYUFBTyx1QkFBdUJ3TixTQUFTNVEsSUFBVCxDQUFjLFNBQWQsQ0FBOUI7QUFDRDs7QUFFRDs7Ozs7Ozs7OzsrQkFPV2UsSSxFQUFNO0FBQUE7O0FBQ2YsVUFBSWdRLFVBQVUsQ0FBZDtBQUNBLFVBQUlDLHVCQUFKO0FBQ0EsVUFBSTdGLG1CQUFKO0FBQ0EsVUFBTThGLGdCQUFnQmxRLEtBQUt1TCxhQUFMLElBQXNCdkwsS0FBS04sV0FBakQ7O0FBRUEsVUFBSU0sS0FBS04sV0FBTCxDQUFpQmlQLE9BQWpCLENBQXlCLFVBQUN3QixHQUFEO0FBQUEsZUFBU0EsSUFBSWhOLFNBQWI7QUFBQSxPQUF6QixFQUFpRHJGLE1BQXJELEVBQTZEO0FBQzNELGVBQU8sRUFBRTZDLEtBQUtYLEtBQUsrUCxZQUFaLEVBQVA7QUFDRDs7QUFFRCxVQUFJLEVBQUUvUCxnQkFBZ0J6QixPQUFPcVIsSUFBekIsS0FBa0M1UCxLQUFLTixXQUFMLENBQWlCeUQsU0FBdkQsRUFBa0U7QUFDaEUsZUFBTyxFQUFFeEMsS0FBS1gsS0FBSytQLFlBQVosRUFBUDtBQUNEOztBQUVELFVBQUlwUCxNQUFNWCxLQUFLK1AsWUFBTCxDQUFrQjFQLE9BQWxCLENBQTBCMEoscUJBQTFCLEVBQWlELFVBQUNxRyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNuRUw7QUFDQSxZQUFJTSxpQkFBSjtBQUNBLFlBQUk3TyxhQUFhLEVBQWpCO0FBQ0EsWUFBSThPLG1CQUFtQixFQUF2QjtBQUNBLFlBQUlDLGlCQUFpQixFQUFyQjtBQUNBLFlBQUlDLGFBQWF6USxLQUFLTixXQUFMLENBQWlCZ1IscUJBQWpCLENBQXVDTCxDQUF2QyxDQUFqQjtBQUNBalcsd0JBQU1jLFlBQU4sR0FBcUIsRUFBRThFLE1BQU1BLElBQVIsRUFBYzJRLE1BQU0sRUFBcEIsRUFBd0J6UCxXQUFXbEIsS0FBS04sV0FBeEMsRUFBckI7O0FBRUEsWUFBSTtBQUNGNFEscUJBQVcsT0FBSzNMLFdBQUwsQ0FBaUJpTSxLQUFqQixDQUF1QlYsY0FBYzFFLHFCQUFkLENBQW9Dck0sS0FBM0QsRUFBa0VzUixVQUFsRSxDQUFYO0FBQ0QsU0FGRCxDQUdBLE9BQU9sSSxHQUFQLEVBQVk7QUFDVixnQkFBTSxPQUFLc0ksd0JBQUwsQ0FBOEI3USxJQUE5QixFQUFvQ3VJLEdBQXBDLENBQU47QUFDRDs7QUFFRCxZQUFJbk8sZ0JBQU1jLFlBQVYsRUFBd0I7QUFDdEJ1Ryx1QkFBYXJILGdCQUFNYyxZQUFOLENBQW1CeVYsSUFBaEM7QUFDQXZXLDBCQUFNYyxZQUFOLENBQW1CeVYsSUFBbkIsR0FBMEIsSUFBMUI7QUFDQXZXLDBCQUFNYyxZQUFOLEdBQXFCLElBQXJCO0FBQ0Q7O0FBRUQsYUFBSyxJQUFJMEMsSUFBSTZELFdBQVczRCxNQUFYLEdBQW9CLENBQWpDLEVBQW9DRixLQUFLLENBQXpDLEVBQTRDQSxHQUE1QyxFQUFpRDtBQUMvQyxjQUFJNlAsT0FBT2hNLFdBQVc3RCxDQUFYLENBQVg7QUFDQSxjQUFJd1IsT0FBTzNCLEtBQUt2TSxTQUFMLENBQWU0UCxnQkFBZixDQUFnQ3JELEtBQUs1TyxJQUFyQyxDQUFYO0FBQ0EsY0FBSWtTLGNBQWN0RCxLQUFLdk0sU0FBTCxDQUFlNFAsZ0JBQWYsQ0FBZ0NyRCxLQUFLa0IsT0FBckMsQ0FBbEI7O0FBRUEsY0FBSWxCLEtBQUt1RCxVQUFULEVBQXFCO0FBQ25CO0FBQ0Q7O0FBRUQsY0FBSVQsaUJBQWlCbkIsSUFBakIsQ0FBSixFQUE0QjtBQUMxQjtBQUNEOztBQUVELGNBQUk2QixjQUFjeFYsZ0JBQU13RixpQkFBTixDQUF3QndNLEtBQUtrQixPQUE3QixFQUFzQ2xCLEtBQUt2TSxTQUFMLENBQWVDLE9BQXJELENBQWxCOztBQUVBLGNBQUk4UCxlQUFlLFFBQU9BLFdBQVAseUNBQU9BLFdBQVAsTUFBc0IsUUFBekMsRUFBbUQ7QUFDakQsZ0JBQUk3VyxnQkFBTUcsT0FBTixDQUFjQyxLQUFkLElBQXVCZ1csZUFBZU8sV0FBZixLQUErQixFQUExRCxFQUE4RDtBQUM1RDtBQUNBaE4sc0JBQVFDLElBQVIsQ0FBYSwySUFFUGhFLEtBQUsrUCxZQUZFLHVCQUdTdEMsS0FBS2tCLE9BQUwsQ0FBYTFQLElBQWIsQ0FBa0IsR0FBbEIsQ0FIVCxRQUlYQSxJQUpXLENBSU4sU0FKTSxDQUFiO0FBS0Q7O0FBRUQsYUFBQ3VSLGVBQWVPLFdBQWYsQ0FBRCxHQUE4QlAsZUFBZU8sV0FBZixJQUE4QixDQUE1RCxHQUErRFAsZUFBZU8sV0FBZixHQUEvRDtBQUNEOztBQUVELGNBQ0V0VixnQkFBTXlWLFlBQU4sQ0FBbUJELFdBQW5CLEtBQ0F4RCxLQUFLdk0sU0FBTCxLQUFtQmdQLGNBQWMxRSxxQkFEakMsSUFFQWlDLEtBQUt2TSxTQUFMLEtBQW1CdU0sS0FBSzBELGFBSDFCLEVBSUU7QUFDQTtBQUNEOztBQUVEMUQsZUFBS3ZNLFNBQUwsQ0FBZWtRLG9CQUFmLENBQW9DcFIsSUFBcEMsRUFBMEN5TixLQUFLNU8sSUFBL0MsRUFBcUQ0TyxLQUFLNEQsU0FBMUQ7QUFDQWQsMkJBQWlCbkIsSUFBakIsSUFBeUIsSUFBekI7QUFDRDs7QUFFRG1CLDJCQUFtQixJQUFuQjtBQUNBOU8scUJBQWEsSUFBYjs7QUFFQSxZQUFJekIsZ0JBQWdCekIsT0FBT3FSLElBQTNCLEVBQWlDO0FBQy9CeEYsdUJBQWFnRyxDQUFiO0FBQ0FILDJCQUFpQkssUUFBakI7QUFDQSxpQkFBTzdVLGdCQUFNNlYsa0JBQU4sQ0FBeUJoQixRQUF6QixDQUFQO0FBQ0Q7O0FBRUQsWUFBSSxRQUFPQSxRQUFQLHlDQUFPQSxRQUFQLE1BQW1CLFFBQXZCLEVBQWlDO0FBQy9CLGNBQUk7QUFDRixtQkFBT2lCLEtBQUtDLFNBQUwsQ0FBZWxCLFFBQWYsQ0FBUDtBQUNELFdBRkQsQ0FHQSxPQUFNbUIsQ0FBTixFQUFTO0FBQ1AsbUJBQU9uQixRQUFQO0FBQ0Q7QUFDRjs7QUFFRCxlQUFPQSxRQUFQO0FBQ0QsT0FqRlMsQ0FBVjs7QUFtRkEsYUFBTyxFQUFFM1AsUUFBRixFQUFPcVAsZ0JBQVAsRUFBZ0I1RixzQkFBaEIsRUFBNEI2Riw4QkFBNUIsRUFBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7Ozt5Q0FRcUJqUSxJLEVBQU1uQixJLEVBQU13UyxTLEVBQVc7QUFDMUMsVUFBSUssT0FBTyxLQUFLQyxjQUFMLENBQW9COVMsSUFBcEIsRUFBMEJtQixJQUExQixDQUFYO0FBQ0EsVUFBSThGLFFBQVFySyxnQkFBTXdGLGlCQUFOLENBQXdCcEMsSUFBeEIsRUFBOEIsS0FBS3NDLE9BQW5DLENBQVo7O0FBRUEsVUFBSSxDQUFDdVEsSUFBTCxFQUFXO0FBQ1QsYUFBS0UsTUFBTCxDQUFZL1MsSUFBWixFQUFrQixFQUFFbUIsVUFBRixFQUFsQjtBQUNEOztBQUVELFdBQUs2UixpQkFBTCxDQUF1QjdSLElBQXZCLEVBQTZCbkIsSUFBN0IsRUFBbUNpSCxLQUFuQyxFQUEwQ3VMLFNBQTFDO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7cUNBT2lCeFMsSSxFQUE4QjtBQUFBOztBQUFBLFVBQXhCaVQsY0FBd0IsdUVBQVAsS0FBTzs7QUFDN0MsVUFBSTNTLFFBQVEsS0FBS2dDLE9BQWpCO0FBQ0EsVUFBSVAsUUFBUSxFQUFaOztBQUVBLFVBQUksQ0FBQ2tSLGNBQUwsRUFBcUI7QUFDbkIsWUFBSUMsWUFBWSxFQUFoQjs7QUFFQSxhQUFLLElBQUluVSxJQUFJLENBQVIsRUFBV0MsSUFBSWdCLEtBQUtmLE1BQXpCLEVBQWlDRixJQUFJQyxDQUFyQyxFQUF3Q0QsR0FBeEMsRUFBNkM7QUFDM0MsY0FBSXJDLE1BQU1zRCxLQUFLakIsQ0FBTCxDQUFWO0FBQ0EsY0FBSWtJLGNBQUo7O0FBRUFpTSxtREFBZ0JBLFNBQWhCLElBQTJCeFcsR0FBM0I7QUFDQXVLLGtCQUFRckssZ0JBQU13RixpQkFBTixDQUF3QjhRLFNBQXhCLEVBQW1DNVMsS0FBbkMsQ0FBUjtBQUNBeUIsZ0JBQU0zQyxJQUFOLENBQVcsRUFBRVksTUFBTWtULFNBQVIsRUFBbUJqTSxPQUFPQSxLQUExQixFQUFYO0FBQ0Q7QUFDRixPQVhELE1BWUs7QUFDSGxGLGNBQU0zQyxJQUFOLENBQVcsRUFBRVksTUFBTUEsSUFBUixFQUFjaUgsT0FBT3JLLGdCQUFNd0YsaUJBQU4sQ0FBd0JwQyxJQUF4QixFQUE4Qk0sS0FBOUIsQ0FBckIsRUFBWDtBQUNEOztBQUVELFVBQUk2UyxjQUFjcFIsTUFBTTlDLE1BQXhCOztBQUVBLFVBQU1tVSxhQUFhLFNBQWJBLFVBQWEsQ0FBQ0MsT0FBRCxFQUFhO0FBQzlCLFlBQU1oUixZQUFZZ1IsUUFBUWhTLE9BQTFCOztBQUVBLGFBQUssSUFBSWtRLElBQUksQ0FBYixFQUFnQkEsSUFBSTRCLFdBQXBCLEVBQWlDNUIsR0FBakMsRUFBc0M7QUFDcEMsY0FBSXJQLE9BQU9ILE1BQU13UCxDQUFOLENBQVg7QUFDQSxjQUFJM0MsYUFBSjs7QUFFQSxjQUFJdk0sY0FBYyxNQUFsQixFQUF3QjtBQUN0QixnQkFBSXdRLE9BQU94USxVQUFVaVIsU0FBVixDQUFvQnBSLEtBQUtsQyxJQUF6QixDQUFYO0FBQ0E0TyxtQkFBT2lFLE9BQU9BLEtBQUtVLE1BQUwsSUFBZSxFQUF0QixHQUEyQixFQUFsQztBQUNELFdBSEQsTUFJSztBQUNIM0UsbUJBQU92TSxVQUFVbVIsYUFBVixDQUF3QnRSLEtBQUtsQyxJQUE3QixDQUFQO0FBQ0Q7O0FBRUQsY0FBSSxDQUFDNE8sSUFBRCxJQUFTLENBQUNBLEtBQUszUCxNQUFuQixFQUEyQjtBQUN6QjtBQUNEOztBQUVELGVBQUssSUFBSStDLElBQUksQ0FBUixFQUFXc0YsSUFBSXNILEtBQUszUCxNQUF6QixFQUFpQytDLElBQUlzRixDQUFyQyxFQUF3Q3RGLEdBQXhDLEVBQTZDO0FBQzNDLGdCQUFNNlEsUUFBT2pFLEtBQUs1TSxDQUFMLENBQWI7O0FBRUEsZ0JBQUcsQ0FBQzZRLE1BQUsxUixJQUFMLENBQVVzUyxhQUFkLEVBQTZCO0FBQzNCO0FBQ0Q7O0FBRUQsZ0JBQUlwUixVQUFVcVIseUJBQVYsQ0FBb0NiLE1BQUsxUixJQUF6QyxFQUErQ2UsS0FBS2xDLElBQXBELEVBQTBEa0MsS0FBSytFLEtBQS9ELENBQUosRUFBMkU7QUFDekU1RSx3QkFBVXNSLGFBQVYsQ0FBd0J6UixLQUFLbEMsSUFBN0I7QUFDQSxrQkFBTTRULFlBQVl2UixVQUFVaU8saUJBQVYsQ0FBNEJ1QyxNQUFLMVIsSUFBakMsRUFBdUNlLEtBQUtsQyxJQUE1QyxDQUFsQjtBQUNBNFQsMkJBQWFBLFVBQVVwQixTQUF2QixJQUFvQ25RLFVBQVUvQixLQUFWLENBQWdCdVQsS0FBaEIsQ0FBc0IzUixLQUFLbEMsSUFBM0IsRUFBaUNrQyxLQUFLK0UsS0FBdEMsRUFBNkMsS0FBN0MsRUFBb0QsSUFBcEQsQ0FBcEM7QUFDQTVFLHdCQUFVaUcsY0FBVixDQUF5QnVLLE1BQUsxUixJQUE5QixFQUFvQyxLQUFwQzs7QUFFQSxtQkFBSyxJQUFJMlMsRUFBVCxJQUFlakIsTUFBSzFSLElBQUwsQ0FBVWlQLFlBQXpCLEVBQXVDO0FBQ3JDLG9CQUFJLENBQUN5QyxNQUFLMVIsSUFBTCxDQUFVaVAsWUFBVixDQUF1Qm5PLGNBQXZCLENBQXNDNlIsRUFBdEMsQ0FBTCxFQUFnRDtBQUM5QztBQUNEOztBQUVELG9CQUFJQyxRQUFRbEIsTUFBSzFSLElBQUwsQ0FBVWlQLFlBQVYsQ0FBdUIwRCxFQUF2QixDQUFaO0FBQ0Esb0JBQUk3TSxTQUFRckssZ0JBQU13RixpQkFBTixDQUF3QjJSLE1BQU0vVCxJQUE5QixFQUFvQytULE1BQU0xUixTQUFOLENBQWdCQyxPQUFwRCxDQUFaO0FBQ0F5UixzQkFBTTFSLFNBQU4sQ0FBZ0IyUSxpQkFBaEIsQ0FBa0NILE1BQUsxUixJQUF2QyxFQUE2QzRTLE1BQU0vVCxJQUFuRCxFQUF5RGlILE1BQXpEO0FBQ0Q7O0FBRUQ1RSx3QkFBVTJSLFlBQVYsQ0FBdUI5UixLQUFLbEMsSUFBNUI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsZUFBT3FDLFNBQVA7QUFDRCxPQWhERDs7QUFrREEsVUFBTW9QLFdBQVcsU0FBWEEsUUFBVyxDQUFDL00sUUFBRCxFQUFjO0FBQzdCLGFBQUssSUFBSTNGLE1BQUksQ0FBUixFQUFXQyxNQUFJMEYsU0FBU3pGLE1BQTdCLEVBQXFDRixNQUFJQyxHQUF6QyxFQUE0Q0QsS0FBNUMsRUFBaUQ7QUFDL0MsY0FBSXNELFlBQVkrUSxXQUFXMU8sU0FBUzNGLEdBQVQsQ0FBWCxDQUFoQjtBQUNBMFMsbUJBQVNwUCxVQUFVaUssVUFBbkI7QUFDRDtBQUNGLE9BTEQ7O0FBT0E4RyxpQkFBVyxLQUFLbFQsRUFBaEI7QUFDQXVSLGVBQVMsS0FBS25GLFVBQWQ7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7cUNBUWtCdE0sSSxFQUFNaUgsSyxFQUEwQjtBQUFBOztBQUFBLFVBQW5CdkUsU0FBbUIsdUVBQVAsS0FBTzs7QUFDaEQsVUFBSWtNLE9BQU8sS0FBSzBFLFNBQUwsQ0FBZXRULElBQWYsQ0FBWDs7QUFFQSxVQUFNaVUsU0FBUyxTQUFUQSxNQUFTLENBQUM5TSxHQUFELEVBQU0ySSxPQUFOLEVBQWtCO0FBQy9CLGFBQUssSUFBSTlOLENBQVQsSUFBY21GLEdBQWQsRUFBbUI7QUFDakIsY0FBSSxDQUFDQSxJQUFJbEYsY0FBSixDQUFtQkQsQ0FBbkIsQ0FBRCxJQUEwQixPQUFLa1Msb0JBQUwsQ0FBMEJsUyxDQUExQixDQUE5QixFQUE0RDtBQUMxRDtBQUNEOztBQUVELGNBQUltUyxRQUFRLEdBQUczRSxNQUFILENBQVVNLE9BQVYsRUFBbUIsQ0FBQzlOLENBQUQsQ0FBbkIsQ0FBWjtBQUNBLGNBQUlvUyxTQUFTRCxNQUFNL04sS0FBTixFQUFiO0FBQ0EsY0FBSWlPLGFBQWEsS0FBakI7QUFDQSxjQUFJbFMsTUFBTWdGLElBQUluRixDQUFKLENBQVY7QUFDQSxjQUFJc1MsZUFBSjs7QUFFQUYsaUJBQU9HLEtBQVA7QUFDQUQsbUJBQVMxWCxnQkFBTTRYLGlCQUFOLENBQXdCSixNQUF4QixFQUFnQ25OLEtBQWhDLENBQVQ7O0FBRUEsY0FBSUEsU0FBUyxRQUFPQSxLQUFQLHlDQUFPQSxLQUFQLE1BQWdCLFFBQXpCLElBQXFDLENBQUNxTixNQUExQyxFQUFrRDtBQUNoREQseUJBQWEsSUFBYjtBQUNEOztBQUVELGNBQUlsUyxPQUFPLFFBQU9BLEdBQVAseUNBQU9BLEdBQVAsTUFBYyxRQUF6QixFQUFtQztBQUNqQzhSLG1CQUFPOVIsR0FBUCxFQUFZZ1MsS0FBWjtBQUNEOztBQUVELGlCQUFLTSxnQkFBTCxDQUFzQk4sS0FBdEIsRUFBNkIsSUFBN0I7O0FBRUEsY0FBSWxOLFVBQVUsSUFBVixJQUFrQixRQUFPQSxLQUFQLHlDQUFPQSxLQUFQLE1BQWdCLFFBQWxDLElBQThDLENBQUNxTixNQUFuRCxFQUEyRDtBQUN6RCxtQkFBS0ksUUFBTCxDQUFjUCxLQUFkO0FBQ0FFLDBCQUFjelgsZ0JBQU0rWCxvQkFBTixDQUEyQlAsTUFBM0IsRUFBbUNuTixLQUFuQyxDQUFkO0FBQ0Q7QUFDRjtBQUNGLE9BOUJEOztBQWdDQTJILGNBQVFxRixPQUFPckYsSUFBUCxFQUFhLEdBQUdZLE1BQUgsQ0FBVXhQLElBQVYsQ0FBYixDQUFSO0FBQ0EsV0FBS3lVLGdCQUFMLENBQXNCelUsSUFBdEIsRUFBNEIsS0FBNUI7O0FBRUEsVUFBSTBDLFNBQUosRUFBZTtBQUNiLGFBQUtnUyxRQUFMLENBQWMxVSxJQUFkO0FBQ0EwQyxxQkFBYTlGLGdCQUFNK1gsb0JBQU4sQ0FBMkIzVSxJQUEzQixFQUFpQyxLQUFLc0MsT0FBdEMsQ0FBYjtBQUNEO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7O29DQVFnQm5CLEksRUFBTWpCLEUsRUFBSTBTLEMsRUFBRztBQUMzQixVQUFJckgsYUFBYU4sZ0JBQWdCMkosSUFBaEIsQ0FBcUJ6VCxLQUFLK1AsWUFBMUIsQ0FBakI7QUFDQSxVQUFJTyxpQkFBSjs7QUFFQSxVQUFJLENBQUNsRyxVQUFMLEVBQWlCO0FBQ2Y7QUFDRDs7QUFFRCxXQUFLUyxpQkFBTCxHQUF5QjtBQUN2QjlMLFlBQUlBLEVBRG1CO0FBRXZCbUMsbUJBQVcsSUFGWTtBQUd2QndTLGVBQU9qQyxDQUhnQjtBQUl2QnpSO0FBSnVCLE9BQXpCOztBQU9BLFdBQUtnTCxjQUFMLEdBQXNCLEVBQXRCOztBQUVBLFVBQUk7QUFDRnNGLG1CQUFXLEtBQUszTCxXQUFMLENBQWlCaU0sS0FBakIsQ0FBdUIsS0FBS3BGLHFCQUFMLENBQTJCck0sS0FBbEQsRUFBeURpTCxXQUFXLENBQVgsQ0FBekQsRUFBd0UsRUFBRXNKLE9BQU9qQyxDQUFULEVBQXhFLENBQVg7QUFDRCxPQUZELENBR0EsT0FBT2xKLEdBQVAsRUFBWTtBQUNWLGNBQU0sS0FBS3NJLHdCQUFMLENBQThCN1EsSUFBOUIsRUFBb0N1SSxHQUFwQyxDQUFOO0FBQ0Q7O0FBRUQsV0FBS3NDLGlCQUFMLEdBQXlCLElBQXpCO0FBQ0EsYUFBT3lGLFFBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7OzttQ0FPZXRRLEksRUFBb0I7QUFBQSxVQUFkRCxLQUFjLHVFQUFOLElBQU07O0FBQ2pDLFVBQU14RSxNQUFNeUUsZ0JBQWdCekIsT0FBT3FSLElBQXZCLEdBQTZCLE9BQTdCLEdBQXNDLFdBQWxEOztBQUVBLFVBQUk3UCxRQUFPLEtBQUs0VCxpQkFBTCxDQUF1QjNULElBQXZCLENBQVAsR0FBcUMsSUFBekMsRUFBK0M7QUFBQSx3QkFDUSxLQUFLNFQsVUFBTCxDQUFnQjVULElBQWhCLENBRFI7QUFBQSxZQUNyQ1csR0FEcUMsYUFDckNBLEdBRHFDO0FBQUEsWUFDaENzUCxjQURnQyxhQUNoQ0EsY0FEZ0M7QUFBQSxZQUNoQjdGLFVBRGdCLGFBQ2hCQSxVQURnQjtBQUFBLFlBQ0o0RixPQURJLGFBQ0pBLE9BREk7O0FBRTdDaFEsYUFBS3pFLEdBQUwsS0FBYW9GLEdBQWIsS0FBcUJYLEtBQUt6RSxHQUFMLElBQVlvRixHQUFqQzs7QUFFQSxZQUFJWCxnQkFBZ0J6QixPQUFPcVIsSUFBM0IsRUFBaUM7QUFDL0IsY0FBSTlKLFFBQVFuRixHQUFaO0FBQ0EsY0FBSWtULHFCQUFxQixLQUF6Qjs7QUFFQSxjQUFJN0QsV0FBVyxDQUFYLElBQWdCNUYsVUFBaEIsSUFBOEJwSyxLQUFLK1AsWUFBTCxJQUFxQjNGLFVBQXZELEVBQW1FO0FBQ2pFdEUsb0JBQVFtSyxjQUFSO0FBQ0Q7O0FBRUQsY0FBTTZELGlCQUFpQjlULEtBQUt1TyxRQUFMLENBQWNsTyxPQUFkLENBQXNCLGdCQUF0QixFQUF3QyxJQUF4QyxDQUF2QjtBQUNBLGNBQU0wVCxpQkFBaUJ0WSxnQkFBTXVZLFdBQU4sQ0FBa0JGLGNBQWxCLENBQXZCOztBQUVBLGNBQUlBLGtCQUFrQjlULEtBQUt1TyxRQUEzQixFQUFxQztBQUNuQ3NGLGlDQUFxQixJQUFyQjtBQUNBL04sb0JBQVEsQ0FBQyxDQUFDQSxLQUFWO0FBQ0Q7O0FBRUQsY0FBSTlGLEtBQUtpVSxhQUFULEVBQXdCO0FBQ3RCLGdCQUFNL1MsWUFBWWxCLEtBQUtpVSxhQUF2QjtBQUNBbk8sb0JBQVE1RSxVQUFVZ1Qsb0JBQVYsQ0FBK0JsVSxJQUEvQixFQUFxQzhGLEtBQXJDLENBQVI7QUFDQTVFLHNCQUFVaVQsd0JBQVYsR0FBcUMsSUFBckM7QUFDQWpULHNCQUFVMkksS0FBVixDQUFnQmtLLGNBQWhCLElBQWtDak8sS0FBbEM7QUFDQTVFLHNCQUFVaVQsd0JBQVYsR0FBcUMsS0FBckM7O0FBRUEsZ0JBQUlqVCxVQUFVd0osV0FBZCxFQUEyQjtBQUN6QnhKLHdCQUFVa1QsbUJBQVYsQ0FBOEJMLGNBQTlCLEVBQThDak8sS0FBOUM7QUFDRDtBQUNGLFdBVkQsTUFXSyxJQUFJK04sa0JBQUosRUFBd0I7QUFDM0IsZ0JBQU0zQixVQUFVbFMsS0FBSzBQLFNBQXJCO0FBQ0E1SixvQkFBT29NLFFBQVFsSixZQUFSLENBQXFCK0ssY0FBckIsRUFBcUMsTUFBckMsQ0FBUCxHQUFxRDdCLFFBQVF6SixlQUFSLENBQXdCc0wsY0FBeEIsQ0FBckQ7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsYUFBTy9ULEtBQUt6RSxHQUFMLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7O3lDQU1xQnlFLEksRUFBTThGLEssRUFBTztBQUNoQyxhQUFPckssZ0JBQU04VCxJQUFOLENBQVd6SixLQUFYLEVBQWtCLEVBQUV1TyxPQUFPLElBQVQsRUFBbEIsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7MENBTXNCclUsSSxFQUFNOEYsSyxFQUFPO0FBQ2pDLGFBQU9ySyxnQkFBTThULElBQU4sQ0FBV3pKLEtBQVgsRUFBa0IsRUFBRXVPLE9BQU8sSUFBVCxFQUFsQixDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7OzBDQVFzQnJVLEksRUFBTWpCLEUsRUFBSXVWLFcsRUFBYTtBQUMzQyxVQUFJLENBQUN0VSxJQUFELElBQVNrSyxpQkFBaUJ2RCxPQUFqQixDQUF5QjNHLEtBQUt1TyxRQUE5QixLQUEyQyxDQUFDLENBQXpELEVBQTREO0FBQzFEO0FBQ0Q7O0FBRUQsVUFBRyxDQUFDLEtBQUt6QixnQkFBTCxDQUFzQjlNLElBQXRCLEVBQTRCakIsRUFBNUIsQ0FBSixFQUFxQztBQUNuQztBQUNEOztBQUVELFVBQUl3VixZQUFZdlUsS0FBS3VPLFFBQUwsQ0FBY2xPLE9BQWQsQ0FBc0IsV0FBdEIsRUFBbUMsSUFBbkMsQ0FBaEI7QUFDQSxVQUFJa08sV0FBVzlTLGdCQUFNdVksV0FBTixDQUFrQmhVLEtBQUt1TyxRQUF2QixDQUFmO0FBQ0EsVUFBSXJOLFlBQVlvVCxjQUFhQSxXQUFiLEdBQTBCLElBQTFDOztBQUVBLFVBQUlDLGFBQWF2VSxLQUFLdU8sUUFBdEIsRUFBZ0M7QUFDOUIsWUFBSXZPLEtBQUt3VSxPQUFULEVBQWtCO0FBQ2hCO0FBQ0Q7O0FBRUQsWUFBTUMsVUFBVSxJQUFJcmEsZ0JBQU15QixZQUFWLENBQXVCMFksU0FBdkIsRUFBa0N2VSxJQUFsQyxFQUF3Q2pCLEVBQXhDLEVBQTRDbUMsU0FBNUMsQ0FBaEI7O0FBRUEsWUFBSWxCLEtBQUsrUCxZQUFULEVBQXVCO0FBQ3JCMEUsa0JBQVEvQyxJQUFSLENBQWEsVUFBQ0QsQ0FBRCxFQUFPO0FBQ2xCLG1CQUFPdlEsVUFBVXdULGVBQVYsQ0FBMEIxVSxJQUExQixFQUFnQ2pCLEVBQWhDLEVBQW9DMFMsQ0FBcEMsQ0FBUDtBQUNELFdBRkQ7QUFHRDs7QUFFRHpSLGFBQUt3VSxPQUFMLEdBQWVDLE9BQWY7QUFDQTFWLFdBQUdpSyxZQUFILENBQWdCaEosS0FBS3VPLFFBQXJCLEVBQStCOVMsZ0JBQU02VixrQkFBTixDQUF5Qm1ELE9BQXpCLENBQS9COztBQUVBLFlBQUlILFdBQUosRUFBaUI7QUFDZixlQUFLSCx3QkFBTCxHQUFnQyxJQUFoQztBQUNBLGVBQUt0SyxLQUFMLENBQVcwRSxRQUFYLElBQXVCa0csT0FBdkI7QUFDQSxlQUFLTix3QkFBTCxHQUFnQyxLQUFoQztBQUNEOztBQUVEO0FBQ0Q7O0FBRUQsVUFBSUcsV0FBSixFQUFpQjtBQUNmdFUsYUFBS2lVLGFBQUwsR0FBcUIsSUFBckI7QUFDQWpVLGFBQUt1TCxhQUFMLEdBQXFCckssU0FBckI7QUFDRDs7QUFFRCxVQUFJbkIsUUFBUSxLQUFLZ0wsV0FBTCxHQUFrQixLQUFLQSxXQUFMLENBQWlCVSxZQUFuQyxHQUFpRCxLQUE3RDtBQUNBdkssZ0JBQVVpRyxjQUFWLENBQXlCbkgsSUFBekIsRUFBK0JELEtBQS9CO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7O3FDQVFpQkMsSSxFQUFNakIsRSxFQUFJO0FBQ3pCLFVBQUlpQixLQUFLc1MsYUFBVCxFQUF3QjtBQUN0QixlQUFPLElBQVA7QUFDRDs7QUFFRCxVQUFNdFIsTUFBTWhCLEtBQU1BLGdCQUFnQnpCLE9BQU9xUixJQUF4QixHQUErQixPQUEvQixHQUF3QyxXQUE3QyxFQUEwRCtFLElBQTFELEVBQVo7QUFDQSxVQUFNQyxhQUFhOUssZ0JBQWdCNEUsSUFBaEIsQ0FBcUIxTixHQUFyQixDQUFuQjtBQUNBLFVBQU02VCxZQUFZLGFBQWFuRyxJQUFiLENBQWtCMU8sS0FBS3VPLFFBQXZCLENBQWxCO0FBQ0EsVUFBTXVHLFVBQVUsWUFBWXBHLElBQVosQ0FBaUIxTyxLQUFLdU8sUUFBdEIsQ0FBaEI7O0FBRUEsVUFBRyxDQUFDeFAsR0FBR21CLE9BQUosSUFBZSxDQUFDMFUsVUFBaEIsSUFBOEIsQ0FBQ0MsU0FBL0IsSUFBNEMsQ0FBQ0MsT0FBaEQsRUFBeUQ7QUFDdkQsZUFBTyxLQUFQO0FBQ0Q7O0FBRUQ5VSxXQUFLK1UsU0FBTCxHQUFpQkQsT0FBakI7QUFDQTlVLFdBQUtnVixhQUFMLEdBQXFCSixVQUFyQjtBQUNBNVUsV0FBS2lWLFdBQUwsR0FBbUJKLFNBQW5CO0FBQ0E3VSxXQUFLK1AsWUFBTCxHQUFvQi9PLEdBQXBCO0FBQ0FoQixXQUFLaVAsWUFBTCxHQUFvQixFQUFwQjtBQUNBalAsV0FBS3VMLGFBQUwsR0FBcUIsSUFBckI7QUFDQXZMLFdBQUtpVSxhQUFMLEdBQXFCLElBQXJCO0FBQ0FqVSxXQUFLd1UsT0FBTCxHQUFlLElBQWY7QUFDQXhVLFdBQUtzUyxhQUFMLEdBQXFCLElBQXJCO0FBQ0F0UyxXQUFLTixXQUFMLEdBQW1CLElBQW5CO0FBQ0FNLFdBQUswUCxTQUFMLEdBQWlCM1EsRUFBakI7QUFDQSxhQUFPLElBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozt1Q0FPbUJpQixJLEVBQW9CO0FBQUEsVUFBZHpGLE9BQWMsdUVBQUosRUFBSTs7QUFDckMsVUFBSXlGLEtBQUt3VSxPQUFULEVBQWtCO0FBQ2hCeFUsYUFBS3dVLE9BQUwsQ0FBYTFCLE1BQWI7QUFDRDs7QUFFRCxVQUFJOVMsS0FBS2dWLGFBQUwsSUFBc0IsQ0FBQ3phLFFBQVEyYSxZQUFuQyxFQUFpRDtBQUMvQyxhQUFLQyxzQkFBTCxDQUE0Qm5WLElBQTVCO0FBQ0Q7O0FBRUQsYUFBT0EsS0FBS2dWLGFBQVo7QUFDQSxhQUFPaFYsS0FBS2lWLFdBQVo7QUFDQSxhQUFPalYsS0FBSytVLFNBQVo7QUFDQSxhQUFPL1UsS0FBSytQLFlBQVo7QUFDQSxhQUFPL1AsS0FBS2lQLFlBQVo7QUFDQSxhQUFPalAsS0FBS3VMLGFBQVo7QUFDQSxhQUFPdkwsS0FBS2lVLGFBQVo7QUFDQSxhQUFPalUsS0FBS3dVLE9BQVo7QUFDQSxhQUFPeFUsS0FBS3NTLGFBQVo7QUFDQSxhQUFPdFMsS0FBS04sV0FBWjtBQUNBLGFBQU9NLEtBQUswUCxTQUFaO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7NENBT3dCM1EsRSxFQUF3QjtBQUFBLFVBQXBCdVYsV0FBb0IsdUVBQU4sSUFBTTs7QUFDOUMsV0FBSyxJQUFJMVcsSUFBSSxDQUFSLEVBQVdpTSxRQUFROUssR0FBR3lKLFVBQXRCLEVBQWtDM0ssSUFBSWdNLE1BQU0vTCxNQUFqRCxFQUF5REYsSUFBSUMsQ0FBN0QsRUFBZ0VELEdBQWhFLEVBQXFFO0FBQ25FLGFBQUt3WCxxQkFBTCxDQUEyQnZMLE1BQU1qTSxDQUFOLENBQTNCLEVBQXFDbUIsRUFBckMsRUFBeUN1VixXQUF6QztBQUNEO0FBQ0Y7O0FBRUQ7Ozs7Ozs7O3lDQUtxQjtBQUFBOztBQUNuQixVQUFNZSxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUM5WixHQUFELEVBQU11SyxLQUFOLEVBQW1DO0FBQUEsWUFBdEJ2RSxTQUFzQix1RUFBVixLQUFVOztBQUN6RCxZQUFJLE9BQUs0Uyx3QkFBVCxFQUFtQztBQUNqQztBQUNEOztBQUVELFlBQUluVSxPQUFPLE9BQUtqQixFQUFMLENBQVF1VyxnQkFBUixDQUF5Qi9aLEdBQXpCLENBQVg7O0FBRUEsWUFBSWdHLFNBQUosRUFBZTtBQUNidkIsa0JBQVEsT0FBS3VWLGtCQUFMLENBQXdCdlYsSUFBeEIsQ0FBUjtBQUNBLGlCQUFLakIsRUFBTCxDQUFRMEosZUFBUixDQUF3QmxOLEdBQXhCO0FBQ0E7QUFDRCxTQUpELE1BS0ssSUFBSSxDQUFDeUUsSUFBTCxFQUFXO0FBQ2QsaUJBQUtqQixFQUFMLENBQVFpSyxZQUFSLENBQXFCek4sR0FBckIsRUFBMEJ1SyxLQUExQjtBQUNBOUYsaUJBQU8sT0FBS2pCLEVBQUwsQ0FBUXVXLGdCQUFSLENBQXlCL1osR0FBekIsQ0FBUDtBQUNELFNBSEksTUFJQTtBQUNIeUUsZUFBSzhGLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGlCQUFLeVAsa0JBQUwsQ0FBd0J2VixJQUF4QjtBQUNEOztBQUVELGVBQUtvVixxQkFBTCxDQUEyQnBWLElBQTNCLEVBQWlDLE9BQUtqQixFQUF0QyxFQUEwQyxPQUFLd00sYUFBL0M7QUFDRCxPQXRCRDs7QUF3QkEsV0FBSzFCLEtBQUwsR0FBYSxJQUFJMkwsS0FBSixDQUFVLEtBQUtuSyxPQUFmLEVBQXdCO0FBQ25DaUMsYUFBSyxhQUFDbUksTUFBRCxFQUFTbGEsR0FBVCxFQUFpQjtBQUNwQixjQUFJQSxPQUFPLFdBQVgsRUFBd0I7QUFDdEIsbUJBQU8sSUFBUDtBQUNEOztBQUVELGlCQUFPa2EsT0FBT2xhLEdBQVAsQ0FBUDtBQUNELFNBUGtDO0FBUW5DbWEsYUFBSyxhQUFDRCxNQUFELEVBQVNsYSxHQUFULEVBQWN1SyxLQUFkLEVBQXdCO0FBQzNCLGNBQUk2UCxVQUFVbGEsZ0JBQU02RyxVQUFOLENBQWlCL0csR0FBakIsQ0FBZDs7QUFFQSxjQUFJLE9BQUs2UyxpQkFBTCxDQUF1QnpILE9BQXZCLENBQStCZ1AsT0FBL0IsS0FBMkMsQ0FBQyxDQUFoRCxFQUFtRDtBQUNqREEsbUNBQXFCQSxPQUFyQjtBQUNBN1Asb0JBQU8sT0FBSy9HLEVBQUwsQ0FBUWlLLFlBQVIsQ0FBcUJ6TixHQUFyQixFQUEwQnVLLEtBQTFCLENBQVAsR0FBeUMsT0FBSy9HLEVBQUwsQ0FBUTBKLGVBQVIsQ0FBd0JsTixHQUF4QixDQUF6QztBQUNEOztBQUVEa2EsaUJBQU9sYSxHQUFQLElBQWN1SyxLQUFkO0FBQ0F1UCwwQkFBZ0JNLE9BQWhCLEVBQXlCbGEsZ0JBQU02VixrQkFBTixDQUF5QnhMLEtBQXpCLENBQXpCO0FBQ0EsaUJBQU8sSUFBUDtBQUNELFNBbkJrQztBQW9CbkM4UCx3QkFBZ0Isd0JBQUNILE1BQUQsRUFBU2xhLEdBQVQsRUFBY3VLLEtBQWQsRUFBd0I7QUFDdEMsY0FBSTZQLFVBQVVsYSxnQkFBTTZHLFVBQU4sQ0FBaUIvRyxHQUFqQixDQUFkO0FBQ0E4WiwwQkFBZ0JNLE9BQWhCLEVBQXlCbGEsZ0JBQU02VixrQkFBTixDQUF5QnhMLEtBQXpCLENBQXpCLEVBQTBELElBQTFEO0FBQ0EsaUJBQU8yUCxPQUFPbGEsR0FBUCxDQUFQO0FBQ0EsaUJBQU8sSUFBUDtBQUNEO0FBekJrQyxPQUF4QixDQUFiO0FBMkJEOztBQUVEOzs7Ozs7Ozs7Ozs4QkFRVXlLLEcsRUFBSzJJLE8sRUFBUztBQUFBOztBQUN0QixhQUFPLElBQUk2RyxLQUFKLENBQVV4UCxHQUFWLEVBQWU7QUFDcEJzSCxhQUFLLGFBQUNtSSxNQUFELEVBQVNsYSxHQUFULEVBQWlCO0FBQ3BCLGNBQUlBLE9BQU8sV0FBWCxFQUF3QjtBQUN0QixtQkFBTyxJQUFQO0FBQ0Q7O0FBRUQsY0FBSUEsT0FBTyxVQUFYLEVBQXVCO0FBQ3JCLG1CQUFPeUssR0FBUDtBQUNEOztBQUVELGNBQUl6SyxPQUFPLGFBQVgsRUFBMEI7QUFDeEIsbUJBQU8sTUFBUDtBQUNEOztBQUVELGNBQUlBLE9BQU8sUUFBWCxFQUFxQjtBQUNuQixtQkFBT29ULE9BQVA7QUFDRDs7QUFFRCxjQUFJLE9BQUtrSCxhQUFMLENBQW1CdGEsR0FBbkIsQ0FBSixFQUE2QjtBQUMzQixtQkFBT2thLE9BQU9sYSxHQUFQLENBQVA7QUFDRDs7QUFFRCxjQUFJbkIsZ0JBQU1jLFlBQVYsRUFBd0I7QUFDdEIsZ0JBQUkyRCxPQUFPLEdBQUd3UCxNQUFILENBQVVNLE9BQVYsRUFBbUIsQ0FBQ3BULEdBQUQsQ0FBbkIsQ0FBWDtBQUNBLGdCQUFJeVYsYUFBYSxLQUFqQjtBQUNBLGdCQUFJSyxZQUFZLENBQUM1VixnQkFBTTRYLGlCQUFOLENBQXdCeFUsSUFBeEIsRUFBOEIsT0FBS3NDLE9BQW5DLENBQWpCO0FBQ0EsZ0JBQUlELFlBQVksTUFBaEI7QUFDQSxnQkFBSTRVLFNBQVNqWCxLQUFLb0csS0FBTCxFQUFiOztBQUVBLGdCQUFJd1Esa0JBQWtCM1osZUFBdEIsRUFBNkI7QUFDM0Isa0JBQUlpYSxhQUFhdGEsZ0JBQU11YSxvQkFBTixDQUEyQlAsTUFBM0IsRUFBbUNsYSxHQUFuQyxDQUFqQjtBQUNBd2EsNEJBQWVBLHNCQUFzQmphLGVBQXJDLEtBQWdEb0YsWUFBYTZVLFdBQVdyVyxXQUF4RTtBQUNEOztBQUVELGdCQUFJdEYsZ0JBQU1lLFVBQU4sSUFBb0IwRCxLQUFLZixNQUFMLEdBQWMsQ0FBdEMsRUFBeUM7QUFDdkMscUJBQU8yWCxPQUFPbGEsR0FBUCxDQUFQO0FBQ0Q7O0FBRUQsZ0JBQU0wYSxhQUFhN2IsZ0JBQU1jLFlBQU4sQ0FBbUJnRyxTQUFuQixDQUE2QnlOLE9BQTdCLENBQXFDO0FBQUEscUJBQUt4SSxhQUFhL0wsZ0JBQU1zQixVQUFOLENBQWlCUSxHQUFuQztBQUFBLGFBQXJDLENBQW5COztBQUVBLGlCQUFLLElBQUkwQixJQUFJLENBQVIsRUFBV0MsSUFBSW9ZLFdBQVduWSxNQUEvQixFQUF1Q0YsSUFBSUMsQ0FBM0MsRUFBOENELEdBQTlDLEVBQW1EO0FBQ2pELG1CQUFLLElBQUlpRCxJQUFJLENBQVIsRUFBV3NGLElBQUl0SCxLQUFLZixNQUF6QixFQUFpQytDLElBQUlzRixDQUFyQyxFQUF3Q3RGLEdBQXhDLEVBQTZDO0FBQzNDLG9CQUFNcVYsVUFBVUQsV0FBV3JZLENBQVgsRUFBYzZQLElBQTlCO0FBQ0Esb0JBQU1BLE9BQU9oUyxnQkFBTXdGLGlCQUFOLENBQXdCNlUsTUFBeEIsRUFBZ0M1VSxVQUFVQyxPQUExQyxDQUFiOztBQUVBLG9CQUFJc00sUUFBUSxRQUFPQSxJQUFQLHlDQUFPQSxJQUFQLE1BQWUsUUFBdkIsSUFBbUN5SSxZQUFZekksSUFBbkQsRUFBeUQ7QUFDdkQseUJBQU9nSSxPQUFPbGEsR0FBUCxDQUFQO0FBQ0Q7O0FBRUR1YSx1QkFBT0ssR0FBUDtBQUNEO0FBQ0Y7O0FBRUQsZ0JBQUksRUFBRTVhLE9BQU9rYSxNQUFULENBQUosRUFBc0I7QUFDcEJBLHFCQUFPbGEsR0FBUCxJQUFjMlIsU0FBZDtBQUNELGFBRkQsTUFHSyxJQUFJLENBQUN6UixnQkFBTTJhLDJCQUFOLENBQWtDWCxNQUFsQyxFQUEwQ2xhLEdBQTFDLENBQUwsRUFBcUQ7QUFDeER5ViwyQkFBYSxJQUFiO0FBQ0Q7O0FBRUQsbUJBQUtxRixVQUFMLENBQWdCamMsZ0JBQU1jLFlBQU4sQ0FBbUJ5VixJQUFuQyxFQUF5Q3pQLFNBQXpDLEVBQW9EckMsSUFBcEQsRUFBMEQ4UCxPQUExRCxFQUFtRThHLE9BQU9sYSxHQUFQLENBQW5FLEVBQWdGeVYsVUFBaEYsRUFBNEZLLFNBQTVGO0FBQ0EsbUJBQU9vRSxPQUFPbGEsR0FBUCxDQUFQO0FBQ0Q7O0FBRUQsaUJBQU9rYSxPQUFPbGEsR0FBUCxDQUFQO0FBQ0QsU0FqRW1CO0FBa0VwQm1hLGFBQUssYUFBQ0QsTUFBRCxFQUFTbGEsR0FBVCxFQUFjdUssS0FBZCxFQUF3QjtBQUMzQixjQUFJLE9BQUsrUCxhQUFMLENBQW1CdGEsR0FBbkIsQ0FBSixFQUE2QjtBQUMzQmthLG1CQUFPbGEsR0FBUCxJQUFjdUssS0FBZDtBQUNBLG1CQUFPLElBQVA7QUFDRDs7QUFFRCxjQUFJLE9BQU8yUCxPQUFPbGEsR0FBUCxDQUFQLEtBQXVCLFVBQTNCLEVBQXVDO0FBQ3JDdUssb0JBQVExTCxnQkFBTThMLFlBQU4sQ0FBbUJKLEtBQW5CLENBQVI7QUFDRDs7QUFFRCxjQUFJakgsT0FBTyxHQUFHd1AsTUFBSCxDQUFVTSxPQUFWLEVBQW1CLENBQUNwVCxHQUFELENBQW5CLENBQVg7O0FBRUEsY0FBSSxPQUFLK2Esa0JBQUwsQ0FBd0J6WCxJQUF4QixDQUFKLEVBQW1DO0FBQ2pDNFcsbUJBQU9sYSxHQUFQLElBQWN1SyxLQUFkO0FBQ0EsbUJBQU8sSUFBUDtBQUNEOztBQUVEeVEsMkJBQWlCLElBQUk1SCxRQUFRN1EsTUFBUixHQUFpQixDQUFyQixFQUF3QjtBQUN2QyxnQkFBSTBZLG9CQUFvQjdILFFBQVE3USxNQUFSLEdBQWlCLENBQWpCLEdBQW9CckMsZ0JBQU13RixpQkFBTixDQUF3QjBOLFFBQVExSixLQUFSLENBQWMsQ0FBZCxFQUFpQixDQUFDLENBQWxCLENBQXhCLEVBQThDLE9BQUs5RCxPQUFuRCxDQUFwQixHQUFpRixPQUFLQSxPQUE5Rzs7QUFFQSxpQkFBSyxJQUFJTixDQUFULElBQWMyVixpQkFBZCxFQUFpQztBQUMvQixrQkFBSSxDQUFDQSxrQkFBa0IxVixjQUFsQixDQUFpQ0QsQ0FBakMsQ0FBTCxFQUEwQztBQUN4QztBQUNEOztBQUVELGtCQUFJMlYsa0JBQWtCM1YsQ0FBbEIsS0FBd0IyVixrQkFBa0IzVixDQUFsQixFQUFxQjRJLFFBQXJCLEtBQWtDZ00sTUFBOUQsRUFBc0U7QUFDcEUsc0JBQU1jLGVBQU47QUFDRDtBQUNGOztBQUVEZCxtQkFBT2xhLEdBQVAsSUFBY3VLLEtBQWQ7QUFDQSxtQkFBTyxJQUFQO0FBQ0Q7O0FBRUQyUCxpQkFBT2xhLEdBQVAsSUFBYyxPQUFLNFMsZUFBTCxDQUFxQnJJLEtBQXJCLEVBQTRCakgsSUFBNUIsQ0FBZDs7QUFFQSxjQUFHLENBQUMsT0FBS3VDLFlBQVQsRUFBdUI7QUFDckIsbUJBQUtDLHFCQUFMLENBQTJCeEMsSUFBM0I7QUFDRDs7QUFFRCxjQUFJekUsZ0JBQU1hLFdBQVYsRUFBdUI7QUFDckIsbUJBQUt3Yix1QkFBTCxDQUE2QjlILE9BQTdCLEVBQXNDcFQsR0FBdEMsRUFBMkMsS0FBM0M7QUFDQSxtQkFBTyxJQUFQO0FBQ0Q7O0FBRUQsY0FBRyxPQUFLNkYsWUFBUixFQUFzQjtBQUNwQixtQkFBS0MscUJBQUwsQ0FBMkJ4QyxJQUEzQjtBQUNEOztBQUVELGNBQUksT0FBSzZMLFdBQVQsRUFBc0I7QUFDcEIsbUJBQUtwSixnQkFBTCxDQUFzQnpDLElBQXRCLEVBQTRCaUgsS0FBNUI7QUFDRDs7QUFFRCxpQkFBTyxJQUFQO0FBQ0QsU0F4SG1CO0FBeUhwQjhQLHdCQUFnQix3QkFBQ0gsTUFBRCxFQUFTbGEsR0FBVCxFQUFpQjtBQUMvQixjQUFNc0QsT0FBTyxHQUFHd1AsTUFBSCxDQUFVTSxPQUFWLEVBQW1CLENBQUNwVCxHQUFELENBQW5CLENBQWI7O0FBRUEsY0FBSSxPQUFLK2Esa0JBQUwsQ0FBd0J6WCxJQUF4QixDQUFKLEVBQW1DO0FBQ2pDLG1CQUFPNFcsT0FBT2xhLEdBQVAsQ0FBUDtBQUNBLG1CQUFPLElBQVA7QUFDRDs7QUFFRCxjQUFJLE9BQUtzYSxhQUFMLENBQW1CdGEsR0FBbkIsQ0FBSixFQUE2QjtBQUMzQixtQkFBT2thLE9BQU9sYSxHQUFQLENBQVA7QUFDQSxtQkFBTyxJQUFQO0FBQ0Q7O0FBRUQsaUJBQU9rYSxPQUFPbGEsR0FBUCxDQUFQOztBQUVBLGNBQUcsQ0FBQyxPQUFLNkYsWUFBVCxFQUF1QjtBQUNyQixtQkFBS0MscUJBQUwsQ0FBMkJ4QyxJQUEzQjtBQUNEOztBQUVELGNBQUl6RSxnQkFBTWEsV0FBVixFQUF1QjtBQUNyQixtQkFBS3diLHVCQUFMLENBQTZCOUgsT0FBN0IsRUFBc0NwVCxHQUF0QyxFQUEyQyxJQUEzQztBQUNBLG1CQUFPLElBQVA7QUFDRDs7QUFFRCxjQUFHLE9BQUs2RixZQUFSLEVBQXNCO0FBQ3BCLG1CQUFLQyxxQkFBTCxDQUEyQnhDLElBQTNCO0FBQ0Q7O0FBRUQsaUJBQUt5QyxnQkFBTCxDQUFzQnpDLElBQXRCLEVBQTRCcU8sU0FBNUIsRUFBdUMsSUFBdkM7QUFDQSxpQkFBTyxJQUFQO0FBQ0Q7QUF2Sm1CLE9BQWYsQ0FBUDtBQXlKRDs7QUFFRDs7Ozs7OzBDQUdzQnJPLEksRUFBTTtBQUMxQixXQUFJLElBQUlqQixJQUFJLENBQVIsRUFBV0MsSUFBSWdCLEtBQUtmLE1BQXhCLEVBQWdDRixJQUFJQyxDQUFwQyxFQUF1Q0QsR0FBdkMsRUFBNEM7QUFDMUMsWUFBTThZLGNBQWM3WCxLQUFLb0csS0FBTCxDQUFXLENBQVgsRUFBY3BILElBQUlELENBQWxCLENBQXBCO0FBQ0EsWUFBTStZLG1CQUFtQnZjLGdCQUFNd0UsZUFBTixDQUFzQjhYLFdBQXRCLENBQXpCO0FBQ0EsWUFBTTFWLE1BQU12RixnQkFBTXdGLGlCQUFOLENBQXdCeVYsV0FBeEIsRUFBcUMsS0FBS3ZWLE9BQTFDLENBQVo7O0FBRUEsWUFBSSxLQUFLcEcsWUFBTCxDQUFrQjRiLGdCQUFsQixDQUFKLEVBQXlDO0FBQ3ZDLGVBQUtDLG9CQUFMLENBQTBCRixXQUExQixFQUF1QzFWLEdBQXZDO0FBQ0Q7O0FBRUQsWUFBSSxLQUFLc0ssV0FBTCxDQUFpQnFMLGdCQUFqQixDQUFKLEVBQXdDO0FBQ3RDLGVBQUtFLG1CQUFMLENBQXlCSCxXQUF6QixFQUFzQzFWLEdBQXRDO0FBQ0Q7QUFDRjtBQUNGOztBQUVEOzs7Ozs7Ozs7O3FDQU9pQm5DLEksRUFBTTtBQUNyQixhQUFVLEtBQUtzQyxPQUFMLENBQWEvQixNQUF2QixTQUFpQ2hGLGdCQUFNd0UsZUFBTixDQUFzQkMsSUFBdEIsQ0FBakM7QUFDRDs7QUFFRDs7Ozs7Ozs7OENBSzBCaVksSSxFQUFNO0FBQzlCLGFBQVE7QUFDTkMsZUFBTyxnQkFERDtBQUVOelosZUFBTyxvQkFGRDtBQUdOeUwsY0FBTTtBQUhBLE9BQUQsQ0FJSitOLElBSkksQ0FBUDtBQUtEOztBQUVEOzs7Ozs7Ozs7O2tDQU9jalksSSxFQUFzQjtBQUFBLFVBQWhCaVksSUFBZ0IsdUVBQVQsT0FBUzs7QUFDbEMsV0FBSyxLQUFLRSx5QkFBTCxDQUErQkYsSUFBL0IsQ0FBTCxFQUEyQ2pZLE9BQU0sS0FBS2lTLGdCQUFMLENBQXNCalMsSUFBdEIsQ0FBTixHQUFtQyxPQUE5RSxJQUF5RixJQUF6RjtBQUNEOztBQUVEOzs7Ozs7Ozs7O2lDQU9hQSxJLEVBQXNCO0FBQUEsVUFBaEJpWSxJQUFnQix1RUFBVCxPQUFTOztBQUNqQyxhQUFPLEtBQUssS0FBS0UseUJBQUwsQ0FBK0JGLElBQS9CLENBQUwsRUFBMkNqWSxPQUFNLEtBQUtpUyxnQkFBTCxDQUFzQmpTLElBQXRCLENBQU4sR0FBbUMsT0FBOUUsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7O3VDQU9tQkEsSSxFQUFzQjtBQUFBLFVBQWhCaVksSUFBZ0IsdUVBQVQsT0FBUzs7QUFDdkMsVUFBTXhaLFFBQVEsS0FBSzBaLHlCQUFMLENBQStCRixJQUEvQixDQUFkO0FBQ0EsYUFBTyxLQUFLeFosS0FBTCxFQUFZMlosS0FBWixHQUFtQixJQUFuQixHQUF5QixLQUFLM1osS0FBTCxFQUFZLEtBQUt3VCxnQkFBTCxDQUFzQmpTLElBQXRCLENBQVosQ0FBaEM7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozt5Q0FPcUJBLEksRUFBTWlILEssRUFBTztBQUNoQyxVQUFJLEtBQUt3USxrQkFBTCxDQUF3QnpYLElBQXhCLEVBQThCLE9BQTlCLENBQUosRUFBNEM7QUFDMUM7QUFDRDs7QUFFRCxVQUFNcVksUUFBUSxLQUFLbmMsWUFBTCxDQUFrQlgsZ0JBQU13RSxlQUFOLENBQXNCQyxJQUF0QixDQUFsQixDQUFkOztBQUVBLFVBQUksQ0FBQ3FZLEtBQUQsSUFBVSxDQUFDQSxNQUFNcFosTUFBckIsRUFBNkI7QUFDM0I7QUFDRDs7QUFFRGdJLGNBQVFySyxnQkFBTThULElBQU4sQ0FBV3pKLEtBQVgsRUFBa0IsRUFBRXVPLE9BQU8sSUFBVCxFQUFsQixDQUFSO0FBQ0EsVUFBTW5SLElBQUksRUFBVjs7QUFFQSxXQUFLLElBQUl0RixJQUFJLENBQVIsRUFBV0MsSUFBSXFaLE1BQU1wWixNQUExQixFQUFrQ0YsSUFBSUMsQ0FBdEMsRUFBeUNELEdBQXpDLEVBQThDO0FBQzVDLFlBQU11SCxPQUFPK1IsTUFBTXRaLENBQU4sQ0FBYjs7QUFFQSxZQUFJLENBQUN1SCxLQUFLdVEsR0FBVixFQUFlO0FBQ2I7QUFDRDs7QUFFRHhTLFVBQUVqRixJQUFGLENBQU8sS0FBS2taLG9CQUFMLENBQTBCaFMsS0FBSzVGLElBQS9CLEVBQXFDdUcsS0FBckMsQ0FBUDtBQUNEOztBQUVELGFBQU9wSCxRQUFRa0YsR0FBUixDQUFZVixDQUFaLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozt5Q0FPcUIzRCxJLEVBQU11RyxLLEVBQU87QUFBQTs7QUFDaEN4SSxzQkFBTW1NLFFBQU4sQ0FBZWxLLElBQWYsSUFBdUJ1RyxLQUF2QjtBQUNBLFVBQUlvUixRQUFRLENBQUM5YyxnQkFBTVcsWUFBTixDQUFtQndFLElBQW5CLEtBQTRCLEVBQTdCLEVBQWlDOE8sTUFBakMsQ0FBd0NqVSxnQkFBTVcsWUFBTixDQUFtQixHQUFuQixLQUEyQixFQUFuRSxDQUFaOztBQUVBLFVBQUksQ0FBQ21jLEtBQUQsSUFBVSxDQUFDQSxNQUFNcFosTUFBckIsRUFBNkI7QUFDM0I7QUFDRDs7QUFFRG9aLGNBQVF6YixnQkFBTTJiLElBQU4sQ0FBV0YsS0FBWCxFQUFrQixDQUFDLE1BQUQsQ0FBbEIsRUFBNEIsSUFBNUIsQ0FBUjs7QUFFQSxhQUFPOWMsZ0JBQU15SCxRQUFOLENBQWUsWUFBTTtBQUFBLG1DQUNqQmpFLENBRGlCLEVBQ1ZDLENBRFU7QUFFeEIsY0FBTXNILE9BQU8rUixNQUFNdFosQ0FBTixDQUFiO0FBQ0EsY0FBTXNELFlBQVlpRSxLQUFLakUsU0FBdkI7O0FBRUEsY0FBSUEsY0FBYyxPQUFsQixFQUF3QjtBQUN0QjtBQUNEOztBQUVELGNBQUlpRSxLQUFLbkgsRUFBVCxFQUFhO0FBQ1g1RCw0QkFBTXVILFNBQU4sQ0FBZ0I7QUFBQSxxQkFBTXdELEtBQUtuSCxFQUFMLENBQVFrSCxJQUFSLENBQWFoRSxTQUFiLEVBQXdCNEUsS0FBeEIsRUFBK0J2RyxJQUEvQixDQUFOO0FBQUEsYUFBaEI7QUFDQTtBQUNEO0FBQ0QsY0FBSSxDQUFDNEYsS0FBS21JLEdBQVYsRUFBZTtBQUNiO0FBQ0Q7O0FBRURwTSxvQkFBVXNSLGFBQVYsQ0FBd0JyTixLQUFLdEcsSUFBN0IsRUFBbUMsT0FBbkM7QUFDQSxjQUFJb0gsVUFBVXhLLGdCQUFNd0YsaUJBQU4sQ0FBd0JrRSxLQUFLdEcsSUFBN0IsRUFBbUNxQyxVQUFVQyxPQUE3QyxDQUFkO0FBQ0EsV0FBQzFGLGdCQUFNNlQsT0FBTixDQUFjckosT0FBZCxFQUF1QkgsS0FBdkIsQ0FBRCxJQUFrQzVFLFVBQVUvQixLQUFWLENBQWdCdVQsS0FBaEIsQ0FBc0J2TixLQUFLdEcsSUFBM0IsRUFBaUNpSCxLQUFqQyxDQUFsQztBQUNBNUUsb0JBQVUyUixZQUFWLENBQXVCMU4sS0FBS3RHLElBQTVCLEVBQWtDLE9BQWxDO0FBcEJ3Qjs7QUFDMUIsYUFBSyxJQUFJakIsSUFBSSxDQUFSLEVBQVdDLElBQUlxWixNQUFNcFosTUFBMUIsRUFBa0NGLElBQUlDLENBQXRDLEVBQXlDRCxHQUF6QyxFQUE4QztBQUFBLDJCQUFyQ0EsQ0FBcUMsRUFBOUJDLENBQThCOztBQUFBLG1DQWExQztBQU9IO0FBQ0YsT0F0Qk0sQ0FBUDtBQXVCRDs7QUFFRDs7Ozs7Ozs7Ozs7a0NBUWMwQixJLEVBQU1WLEksRUFBb0I7QUFBQSxVQUFkdEUsT0FBYyx1RUFBSixFQUFJOztBQUN0Q0EsMkJBQVkrUyxLQUFLLElBQWpCLEVBQXVCb0ksS0FBSyxJQUE1QixJQUFxQ25iLE9BQXJDOztBQUVBLFVBQUksQ0FBQ3NFLElBQUwsRUFBVztBQUNULGNBQU0sSUFBSVEsS0FBSixrQkFBeUJFLElBQXpCLHlDQUFOO0FBQ0Q7O0FBRUQsVUFBSSxDQUFDaEYsUUFBUStTLEdBQVQsSUFBZ0IsQ0FBQy9TLFFBQVFtYixHQUE3QixFQUFrQztBQUNoQyxjQUFNLElBQUlyVyxLQUFKLGtCQUF5QkUsSUFBekIsd0RBQU47QUFDRDs7QUFFRCxVQUFJLENBQUNsQixNQUFNa0gsT0FBTixDQUFjMUcsSUFBZCxDQUFMLEVBQTBCO0FBQ3hCQSxlQUFPLENBQUNBLElBQUQsQ0FBUDtBQUNEOztBQUVELFdBQUsyVCxhQUFMLENBQW1CM1QsSUFBbkIsRUFBeUIsT0FBekI7QUFDQSxPQUFDdkIsZ0JBQU13RCxjQUFOLENBQXFCdkIsSUFBckIsS0FBOEIsQ0FBQzlELGdCQUFNNFgsaUJBQU4sQ0FBd0J4VSxJQUF4QixFQUE4QixLQUFLc0MsT0FBbkMsQ0FBaEMsS0FBZ0YsS0FBS2hDLEtBQUwsQ0FBV3VULEtBQVgsQ0FBaUI3VCxJQUFqQixFQUF1QnZCLGdCQUFNaUMsSUFBTixDQUF2QixDQUFoRjtBQUNBLFdBQUtzVCxZQUFMLENBQWtCaFUsSUFBbEIsRUFBd0IsT0FBeEI7QUFDQSxVQUFJd1ksWUFBWWpkLGdCQUFNd0UsZUFBTixDQUFzQkMsSUFBdEIsQ0FBaEI7QUFDQSxVQUFJeVksYUFBSjs7QUFFQSxVQUFJLENBQUMsS0FBS3ZjLFlBQUwsQ0FBa0JzYyxTQUFsQixDQUFMLEVBQW1DO0FBQ2pDLGFBQUt0YyxZQUFMLENBQWtCc2MsU0FBbEIsSUFBK0IsRUFBL0I7QUFDRDs7QUFFRCxVQUFJdlgsTUFBTSxLQUFLL0UsWUFBTCxDQUFrQnNjLFNBQWxCLENBQVY7O0FBRUEsV0FBSyxJQUFJelosSUFBSWtDLElBQUloQyxNQUFKLEdBQWEsQ0FBMUIsRUFBNkJGLEtBQUssQ0FBbEMsRUFBcUNBLEdBQXJDLEVBQTBDO0FBQ3hDLFlBQUkrQyxNQUFNYixJQUFJbEMsQ0FBSixDQUFWOztBQUVBLFlBQUkrQyxJQUFJTyxTQUFKLEtBQWtCLElBQWxCLElBQTBCUCxJQUFJcEIsSUFBSixJQUFZQSxJQUF0QyxJQUE4Q29CLElBQUkwVyxTQUFKLElBQWlCQSxTQUFuRSxFQUE4RTtBQUM1RTFXLGNBQUkrVSxHQUFKLEdBQVVuYixRQUFRbWIsR0FBbEI7QUFDQS9VLGNBQUkyTSxHQUFKLEdBQVUvUyxRQUFRK1MsR0FBbEI7QUFDQTNNLGNBQUk0VyxJQUFKLEdBQVdDLEtBQUtDLEdBQUwsRUFBWDtBQUNBO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJLENBQUNyZCxnQkFBTVcsWUFBTixDQUFtQndFLElBQW5CLENBQUwsRUFBK0I7QUFDN0JuRix3QkFBTVcsWUFBTixDQUFtQndFLElBQW5CLElBQTJCLEVBQTNCO0FBQ0Q7O0FBRUQrWCxhQUFPLEVBQUVwVyxXQUFXLElBQWIsRUFBbUIzQixVQUFuQixFQUF5QlYsVUFBekIsRUFBK0J3WSxvQkFBL0IsRUFBMENFLE1BQU1DLEtBQUtDLEdBQUwsRUFBaEQsRUFBNEQvQixLQUFLbmIsUUFBUW1iLEdBQXpFLEVBQThFcEksS0FBSy9TLFFBQVErUyxHQUEzRixFQUFQO0FBQ0EsV0FBS3ZTLFlBQUwsQ0FBa0JzYyxTQUFsQixFQUE2QnBaLElBQTdCLENBQWtDcVosSUFBbEM7QUFDQWxkLHNCQUFNVyxZQUFOLENBQW1Cd0UsSUFBbkIsRUFBeUJ0QixJQUF6QixDQUE4QnFaLElBQTlCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7OztzQ0FTa0IvWCxJLEVBQU12QixFLEVBQWtCO0FBQUE7O0FBQUEsVUFBZHpELE9BQWMsdUVBQUosRUFBSTs7QUFDeEMsVUFBSTJLLE9BQU8zSyxRQUFRbWQsV0FBUixLQUF3QnhLLFNBQXhCLEdBQW1DNVAsZ0JBQU1tTSxRQUFOLENBQWUzSSxjQUFmLENBQThCdkIsSUFBOUIsQ0FBbkMsR0FBd0VoRixRQUFRbWQsV0FBM0Y7O0FBRUEsVUFBSSxDQUFDdGQsZ0JBQU1XLFlBQU4sQ0FBbUJ3RSxJQUFuQixDQUFMLEVBQStCO0FBQzdCbkYsd0JBQU1XLFlBQU4sQ0FBbUJ3RSxJQUFuQixJQUEyQixFQUEzQjtBQUNEOztBQUVELFVBQUkyWCxRQUFROWMsZ0JBQU1XLFlBQU4sQ0FBbUJ3RSxJQUFuQixDQUFaOztBQUVBLFdBQUssSUFBSTNCLElBQUlzWixNQUFNcFosTUFBTixHQUFlLENBQTVCLEVBQStCRixLQUFLLENBQXBDLEVBQXVDQSxHQUF2QyxFQUE0QztBQUMxQyxZQUFJK0MsTUFBTXVXLE1BQU10WixDQUFOLENBQVY7O0FBRUEsWUFBSStDLElBQUlPLFNBQUosS0FBa0IsSUFBbEIsSUFBMEJQLElBQUlwQixJQUFKLElBQVlBLElBQXRDLElBQThDb0IsSUFBSTNDLEVBQUosS0FBV0EsRUFBN0QsRUFBaUU7QUFDL0QyQyxjQUFJNFcsSUFBSixHQUFXQyxLQUFLQyxHQUFMLEVBQVg7QUFDQTtBQUNEO0FBQ0Y7O0FBRURyZCxzQkFBTVcsWUFBTixDQUFtQndFLElBQW5CLEVBQXlCdEIsSUFBekIsQ0FBOEIsRUFBRWlELFdBQVcsSUFBYixFQUFtQjNCLFVBQW5CLEVBQXlCdkIsTUFBekIsRUFBNkJ1WixNQUFNQyxLQUFLQyxHQUFMLEVBQW5DLEVBQTlCOztBQUVBLFVBQUlsWSxRQUFRLEdBQVIsSUFBZWhGLFFBQVFtZCxXQUFSLEtBQXdCLEtBQTNDLEVBQWtEO0FBQ2hELFlBQUlsTyxZQUFZL00sT0FBT29DLElBQVAsQ0FBWXZCLGdCQUFNbU0sUUFBbEIsQ0FBaEI7QUFDQSxZQUFJdkcsSUFBSSxFQUFSOztBQUZnRCxxQ0FJaENyRixDQUpnQyxFQUl2Q0QsR0FKdUM7QUFLOUMsY0FBSXJDLE1BQU1pTyxVQUFVNUwsR0FBVixDQUFWO0FBQ0EsY0FBSW9ELE1BQU0xRCxnQkFBTW1NLFFBQU4sQ0FBZWxPLEdBQWYsQ0FBVjtBQUNBMkgsWUFBRWpGLElBQUYsQ0FBTzdELGdCQUFNdUgsU0FBTixDQUFnQjtBQUFBLG1CQUFNM0QsR0FBR2tILElBQUgsQ0FBUSxPQUFSLEVBQWNsRSxHQUFkLEVBQW1CekYsR0FBbkIsQ0FBTjtBQUFBLFdBQWhCLENBQVA7QUFQOEM7O0FBSWhELGFBQUssSUFBSXFDLE1BQUksQ0FBUixFQUFXQyxJQUFJMkwsVUFBVTFMLE1BQTlCLEVBQXVDRixNQUFJQyxDQUEzQyxFQUE4Q0QsS0FBOUMsRUFBbUQ7QUFBQSxpQkFBbkNDLENBQW1DLEVBQTFDRCxHQUEwQztBQUlsRDs7QUFFRCxlQUFPYyxRQUFRa0YsR0FBUixDQUFZVixDQUFaLENBQVA7QUFDRDs7QUFFRCxVQUFJZ0MsSUFBSixFQUFVO0FBQ1IsZUFBTzlLLGdCQUFNdUgsU0FBTixDQUFnQjtBQUFBLGlCQUFNM0QsR0FBR2tILElBQUgsQ0FBUSxPQUFSLEVBQWM1SCxnQkFBTWlDLElBQU4sQ0FBZCxDQUFOO0FBQUEsU0FBaEIsQ0FBUDtBQUNEO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7b0NBT2dCQSxJLEVBQU1WLEksRUFBTTtBQUMxQixVQUFJLENBQUNBLElBQUwsRUFBVztBQUNULGNBQU0sSUFBSVEsS0FBSiwrREFBc0VFLElBQXRFLE9BQU47QUFDRDs7QUFFRCxVQUFJLENBQUNsQixNQUFNa0gsT0FBTixDQUFjMUcsSUFBZCxDQUFMLEVBQTBCO0FBQ3hCQSxlQUFPLENBQUNBLElBQUQsQ0FBUDtBQUNEOztBQUVELFVBQUl3WSxZQUFZamQsZ0JBQU13RSxlQUFOLENBQXNCQyxJQUF0QixDQUFoQjtBQUNBLFVBQUlpQixNQUFNLEtBQUsvRSxZQUFMLENBQWtCc2MsU0FBbEIsQ0FBVjs7QUFFQSxVQUFJLENBQUN2WCxJQUFJaEMsTUFBVCxFQUFpQjtBQUNmO0FBQ0Q7O0FBRUQsV0FBSyxJQUFJRixJQUFJa0MsSUFBSWhDLE1BQUosR0FBYSxDQUExQixFQUE2QkYsS0FBSyxDQUFsQyxFQUFxQ0EsR0FBckMsRUFBMEM7QUFDeEMsWUFBSStDLE1BQU1iLElBQUlsQyxDQUFKLENBQVY7QUFDQSxZQUFJc1osUUFBUTljLGdCQUFNVyxZQUFOLENBQW1CNEYsSUFBSXBCLElBQXZCLENBQVo7O0FBRUEsWUFBSW9CLElBQUlPLFNBQUosS0FBa0IsSUFBbEIsSUFBMEJQLElBQUlwQixJQUFKLElBQVlBLElBQXRDLElBQThDb0IsSUFBSTBXLFNBQUosSUFBaUJBLFNBQW5FLEVBQThFO0FBQzVFO0FBQ0Q7O0FBRUR2WCxZQUFJdUYsTUFBSixDQUFXekgsQ0FBWCxFQUFjLENBQWQ7O0FBRUEsWUFBSSxDQUFDc1osS0FBRCxJQUFVLENBQUNBLE1BQU1wWixNQUFyQixFQUE2QjtBQUMzQjtBQUNEOztBQUVELGFBQUssSUFBSStDLElBQUlxVyxNQUFNcFosTUFBTixHQUFlLENBQTVCLEVBQStCK0MsS0FBSyxDQUFwQyxFQUF1Q0EsR0FBdkMsRUFBNEM7QUFDMUMsY0FBSXNFLFFBQU8rUixNQUFNclcsQ0FBTixDQUFYOztBQUVBLGNBQUlzRSxNQUFLakUsU0FBTCxLQUFtQixJQUFuQixJQUEyQmlFLE1BQUtrUyxTQUFMLElBQWtCQSxTQUFqRCxFQUE0RDtBQUMxREgsa0JBQU03UixNQUFOLENBQWF4RSxDQUFiLEVBQWdCLENBQWhCO0FBQ0Q7QUFDRjs7QUFFRCxZQUFJLENBQUNxVyxNQUFNcFosTUFBWCxFQUFtQjtBQUNqQixpQkFBTzFELGdCQUFNVyxZQUFOLENBQW1Cd0UsSUFBbkIsQ0FBUDtBQUNEO0FBQ0Y7O0FBRUQsVUFBSSxDQUFDTyxJQUFJaEMsTUFBVCxFQUFpQjtBQUNmLGVBQU8sS0FBSy9DLFlBQUwsQ0FBa0JzYyxTQUFsQixDQUFQO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7Ozs7Ozt3Q0FPb0I5WCxJLEVBQU12QixFLEVBQUk7QUFDNUIsVUFBSSxDQUFDNUQsZ0JBQU1XLFlBQU4sQ0FBbUJ3RSxJQUFuQixDQUFMLEVBQStCO0FBQzdCO0FBQ0Q7O0FBRUQsVUFBSTJYLFFBQVE5YyxnQkFBTVcsWUFBTixDQUFtQndFLElBQW5CLENBQVo7O0FBRUEsV0FBSyxJQUFJM0IsSUFBSXNaLE1BQU1wWixNQUFOLEdBQWUsQ0FBNUIsRUFBK0JGLEtBQUssQ0FBcEMsRUFBdUNBLEdBQXZDLEVBQTRDO0FBQzFDLFlBQUkrQyxNQUFNdVcsTUFBTXRaLENBQU4sQ0FBVjs7QUFFQSxZQUFJK0MsSUFBSU8sU0FBSixLQUFrQixJQUFsQixJQUEwQlAsSUFBSXBCLElBQUosSUFBWUEsSUFBdEMsSUFBOENvQixJQUFJM0MsRUFBSixLQUFXQSxFQUE3RCxFQUFpRTtBQUMvRGtaLGdCQUFNN1IsTUFBTixDQUFhekgsQ0FBYixFQUFnQixDQUFoQjtBQUNBO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJLENBQUNzWixNQUFNcFosTUFBWCxFQUFtQjtBQUNqQixlQUFPMUQsZ0JBQU1XLFlBQU4sQ0FBbUJ3RSxJQUFuQixDQUFQO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7Ozs7Ozt3Q0FPb0JWLEksRUFBTWlILEssRUFBTztBQUFBOztBQUMvQixVQUFJLEtBQUt3USxrQkFBTCxDQUF3QnpYLElBQXhCLEVBQThCLE1BQTlCLENBQUosRUFBMkM7QUFDekM7QUFDRDs7QUFFRCxVQUFNcVksUUFBUSxLQUFLNUwsV0FBTCxDQUFpQmxSLGdCQUFNd0UsZUFBTixDQUFzQkMsSUFBdEIsQ0FBakIsQ0FBZDs7QUFFQSxVQUFJLENBQUNxWSxLQUFELElBQVUsQ0FBQ0EsTUFBTXBaLE1BQXJCLEVBQTZCO0FBQzNCO0FBQ0Q7O0FBRUQsYUFBTzFELGdCQUFNeUgsUUFBTixDQUFlLFlBQU07QUFDMUIsYUFBSyxJQUFJakUsSUFBSSxDQUFSLEVBQVdDLElBQUlxWixNQUFNcFosTUFBMUIsRUFBa0NGLElBQUlDLENBQXRDLEVBQXlDRCxHQUF6QyxFQUE4QztBQUM1QyxjQUFNdUgsU0FBTytSLE1BQU10WixDQUFOLENBQWI7O0FBRUEsY0FBSXVILE9BQUtuSCxFQUFULEVBQWE7QUFDWDtBQUNEOztBQUVELGNBQUksQ0FBQ21ILE9BQUt1USxHQUFWLEVBQWU7QUFDYjtBQUNEOztBQUVELGNBQU1qSCxLQUFLLE9BQU9oVCxnQkFBTWtjLFVBQU4sQ0FBaUJ4UyxPQUFLNUYsSUFBdEIsQ0FBbEI7QUFDQSxrQkFBS3NLLEtBQUwsQ0FBVzRFLEVBQVgsS0FBa0IsUUFBSzVFLEtBQUwsQ0FBVzRFLEVBQVgsRUFBZXhCLE9BQWYsQ0FBdUJuSCxLQUF2QixFQUE4QixFQUFFcUgsU0FBUyxJQUFYLEVBQTlCLENBQWxCO0FBQ0Q7QUFDRixPQWZNLENBQVA7QUFnQkQ7O0FBRUQ7Ozs7Ozs7Ozs7d0NBT29CNU4sSSxFQUFNdUcsSyxFQUFPO0FBQUE7O0FBQy9CLFVBQUlvUixRQUFRLENBQUMsS0FBSzVMLFdBQUwsQ0FBaUIvTCxJQUFqQixLQUEwQixFQUEzQixFQUErQjhPLE1BQS9CLENBQXNDLEtBQUsvQyxXQUFMLENBQWlCLEdBQWpCLEtBQXlCLEVBQS9ELENBQVo7O0FBRUEsVUFBSSxDQUFDNEwsS0FBRCxJQUFVLENBQUNBLE1BQU1wWixNQUFyQixFQUE2QjtBQUMzQjtBQUNEOztBQUVEb1osY0FBUXpiLGdCQUFNMmIsSUFBTixDQUFXRixLQUFYLEVBQWtCLENBQUMsTUFBRCxDQUFsQixFQUE0QixJQUE1QixDQUFSOztBQVArQixtQ0FTdEJ0WixDQVRzQixFQVNmQyxDQVRlO0FBVTdCLFlBQU1zSCxPQUFPK1IsTUFBTXRaLENBQU4sQ0FBYjs7QUFFQSxZQUFJdUgsS0FBS25ILEVBQVQsRUFBYTtBQUNYNUQsMEJBQU11SCxTQUFOLENBQWdCO0FBQUEsbUJBQU13RCxLQUFLbkgsRUFBTCxDQUFRa0gsSUFBUixDQUFhLE9BQWIsRUFBbUJZLEtBQW5CLEVBQTBCckssZ0JBQU02RyxVQUFOLENBQWlCL0MsSUFBakIsQ0FBMUIsQ0FBTjtBQUFBLFdBQWhCO0FBQ0E7QUFDRDs7QUFFRCxZQUFHLENBQUM0RixLQUFLbUksR0FBVCxFQUFjO0FBQ1o7QUFDRDs7QUFFRCxnQkFBS2tGLGFBQUwsQ0FBbUJyTixLQUFLdEcsSUFBeEIsRUFBOEIsTUFBOUI7QUFDQSxZQUFJb0gsVUFBVXhLLGdCQUFNd0YsaUJBQU4sQ0FBd0JrRSxLQUFLdEcsSUFBN0IsRUFBbUMsUUFBS3NDLE9BQXhDLENBQWQ7QUFDQSxTQUFDMUYsZ0JBQU02VCxPQUFOLENBQWNySixPQUFkLEVBQXVCSCxLQUF2QixDQUFELElBQWtDLFFBQUszRyxLQUFMLENBQVd1VCxLQUFYLENBQWlCdk4sS0FBS3RHLElBQXRCLEVBQTRCaUgsS0FBNUIsQ0FBbEM7QUFDQSxnQkFBSytNLFlBQUwsQ0FBa0IxTixLQUFLdEcsSUFBdkIsRUFBNkIsTUFBN0I7QUF4QjZCOztBQVMvQixXQUFLLElBQUlqQixJQUFJLENBQVIsRUFBV0MsSUFBSXFaLE1BQU1wWixNQUExQixFQUFrQ0YsSUFBSUMsQ0FBdEMsRUFBeUNELEdBQXpDLEVBQThDO0FBQUEsMkJBQXJDQSxDQUFxQyxFQUE5QkMsQ0FBOEI7O0FBQUEsa0NBUzFDO0FBT0g7QUFDRjs7QUFFRDs7Ozs7Ozs7Ozs7aUNBUWEwQixJLEVBQU1WLEksRUFBb0I7QUFBQSxVQUFkdEUsT0FBYyx1RUFBSixFQUFJOztBQUNyQ0EsMkJBQVkrUyxLQUFLLElBQWpCLEVBQXVCb0ksS0FBSyxJQUE1QixJQUFxQ25iLE9BQXJDO0FBQ0FnRixhQUFPOUQsZ0JBQU11WSxXQUFOLENBQWtCelUsSUFBbEIsQ0FBUDs7QUFFQSxVQUFJLENBQUNWLElBQUwsRUFBVztBQUNULGNBQU0sSUFBSVEsS0FBSixzQkFBNkJFLElBQTdCLHlDQUFOO0FBQ0Q7O0FBRUQsVUFBSSxDQUFDbEIsTUFBTWtILE9BQU4sQ0FBYzFHLElBQWQsQ0FBTCxFQUEwQjtBQUN4QkEsZUFBTyxDQUFDQSxJQUFELENBQVA7QUFDRDs7QUFFRCxXQUFLMlQsYUFBTCxDQUFtQjNULElBQW5CLEVBQXlCLE1BQXpCO0FBQ0EsT0FBQyxLQUFLZ0wsS0FBTCxDQUFXL0ksY0FBWCxDQUEwQnZCLElBQTFCLEtBQW1DLENBQUM5RCxnQkFBTTRYLGlCQUFOLENBQXdCeFUsSUFBeEIsRUFBOEIsS0FBS3NDLE9BQW5DLENBQXJDLEtBQXFGLEtBQUtoQyxLQUFMLENBQVd1VCxLQUFYLENBQWlCN1QsSUFBakIsRUFBdUIsS0FBS2dMLEtBQUwsQ0FBV3RLLElBQVgsQ0FBdkIsQ0FBckY7QUFDQSxXQUFLc1QsWUFBTCxDQUFrQmhVLElBQWxCLEVBQXdCLE1BQXhCO0FBQ0EsVUFBSXdZLFlBQVlqZCxnQkFBTXdFLGVBQU4sQ0FBc0JDLElBQXRCLENBQWhCOztBQUVBLFVBQUksQ0FBQyxLQUFLeU0sV0FBTCxDQUFpQitMLFNBQWpCLENBQUwsRUFBa0M7QUFDaEMsYUFBSy9MLFdBQUwsQ0FBaUIrTCxTQUFqQixJQUE4QixFQUE5QjtBQUNEOztBQUVELFVBQUl2WCxNQUFNLEtBQUt3TCxXQUFMLENBQWlCK0wsU0FBakIsQ0FBVjs7QUFFQSxXQUFLLElBQUl6WixJQUFJa0MsSUFBSWhDLE1BQUosR0FBYSxDQUExQixFQUE2QkYsS0FBSyxDQUFsQyxFQUFxQ0EsR0FBckMsRUFBMEM7QUFDeEMsWUFBSStDLE1BQU1iLElBQUlsQyxDQUFKLENBQVY7O0FBRUEsWUFBSStDLElBQUlwQixJQUFKLElBQVlBLElBQVosSUFBb0JvQixJQUFJMFcsU0FBSixJQUFpQkEsU0FBekMsRUFBb0Q7QUFDbEQxVyxjQUFJMk0sR0FBSixHQUFVL1MsUUFBUStTLEdBQWxCO0FBQ0EzTSxjQUFJK1UsR0FBSixHQUFVbmIsUUFBUW1iLEdBQWxCO0FBQ0EvVSxjQUFJNFcsSUFBSixHQUFXQyxLQUFLQyxHQUFMLEVBQVg7QUFDQTtBQUNEO0FBQ0Y7O0FBRUQsV0FBS25NLFdBQUwsQ0FBaUIrTCxTQUFqQixFQUE0QnBaLElBQTVCLENBQWlDLEVBQUVzQixVQUFGLEVBQVFWLFVBQVIsRUFBY3dZLG9CQUFkLEVBQXlCRSxNQUFNQyxLQUFLQyxHQUFMLEVBQS9CLEVBQTJDL0IsS0FBS25iLFFBQVFtYixHQUF4RCxFQUE2RHBJLEtBQUsvUyxRQUFRK1MsR0FBMUUsRUFBakM7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7O3FDQVNpQi9OLEksRUFBTXZCLEUsRUFBa0I7QUFBQTs7QUFBQSxVQUFkekQsT0FBYyx1RUFBSixFQUFJOztBQUN2Q2dGLGFBQU85RCxnQkFBTXVZLFdBQU4sQ0FBa0J6VSxJQUFsQixDQUFQO0FBQ0EsVUFBSTJGLE9BQU8zSyxRQUFRbWQsV0FBUixLQUF3QnhLLFNBQXhCLEdBQW1DLEtBQUtyRCxLQUFMLENBQVcvSSxjQUFYLENBQTBCdkIsSUFBMUIsQ0FBbkMsR0FBb0VoRixRQUFRbWQsV0FBdkY7O0FBRUEsVUFBSSxDQUFDLEtBQUtwTSxXQUFMLENBQWlCL0wsSUFBakIsQ0FBTCxFQUE2QjtBQUMzQixhQUFLK0wsV0FBTCxDQUFpQi9MLElBQWpCLElBQXlCLEVBQXpCO0FBQ0Q7O0FBRUQsVUFBSTJYLFFBQVEsS0FBSzVMLFdBQUwsQ0FBaUIvTCxJQUFqQixDQUFaOztBQUVBLFdBQUssSUFBSTNCLElBQUlzWixNQUFNcFosTUFBTixHQUFlLENBQTVCLEVBQStCRixLQUFLLENBQXBDLEVBQXVDQSxHQUF2QyxFQUE0QztBQUMxQyxZQUFJK0MsTUFBTXVXLE1BQU10WixDQUFOLENBQVY7O0FBRUEsWUFBSStDLElBQUlwQixJQUFKLElBQVlBLElBQVosSUFBb0JvQixJQUFJM0MsRUFBSixLQUFXQSxFQUFuQyxFQUF1QztBQUNyQzJDLGNBQUk0VyxJQUFKLEdBQVdDLEtBQUtDLEdBQUwsRUFBWDtBQUNBO0FBQ0Q7QUFDRjs7QUFFRCxXQUFLbk0sV0FBTCxDQUFpQi9MLElBQWpCLEVBQXVCdEIsSUFBdkIsQ0FBNEIsRUFBRXNCLFVBQUYsRUFBUXZCLE1BQVIsRUFBWXVaLE1BQU1DLEtBQUtDLEdBQUwsRUFBbEIsRUFBNUI7O0FBRUEsVUFBSWxZLFFBQVEsR0FBUixJQUFlaEYsUUFBUW1kLFdBQVIsS0FBd0IsS0FBM0MsRUFBa0Q7QUFDaEQsWUFBSUUsWUFBWW5iLE9BQU9vQyxJQUFQLENBQVksS0FBS3dNLE9BQWpCLEVBQTBCd00sTUFBMUIsQ0FBaUM7QUFBQSxpQkFBSyxFQUFFLFFBQUt4TSxPQUFMLENBQWF4SyxDQUFiLGFBQTJCekcsZ0JBQU15QixZQUFuQyxDQUFMO0FBQUEsU0FBakMsQ0FBaEI7QUFDQSxZQUFJcUgsSUFBSSxFQUFSOztBQUZnRCxxQ0FJaENyRixDQUpnQyxFQUl2Q0QsR0FKdUM7QUFLOUMsY0FBSXJDLE1BQU1xYyxVQUFVaGEsR0FBVixDQUFWO0FBQ0EsY0FBSW9ELE1BQU0sUUFBS3FLLE9BQUwsQ0FBYTlQLEdBQWIsQ0FBVjtBQUNBMkgsWUFBRWpGLElBQUYsQ0FBTzdELGdCQUFNdUgsU0FBTixDQUFnQjtBQUFBLG1CQUFNM0QsR0FBR2tILElBQUgsQ0FBUSxPQUFSLEVBQWNsRSxHQUFkLEVBQW1CdkYsZ0JBQU02RyxVQUFOLENBQWlCL0csR0FBakIsQ0FBbkIsQ0FBTjtBQUFBLFdBQWhCLENBQVA7QUFQOEM7O0FBSWhELGFBQUssSUFBSXFDLE1BQUksQ0FBUixFQUFXQyxJQUFJK1osVUFBVTlaLE1BQTlCLEVBQXVDRixNQUFJQyxDQUEzQyxFQUE4Q0QsS0FBOUMsRUFBbUQ7QUFBQSxpQkFBbkNDLENBQW1DLEVBQTFDRCxHQUEwQztBQUlsRDs7QUFFRCxlQUFPYyxRQUFRa0YsR0FBUixDQUFZVixDQUFaLENBQVA7QUFDRDs7QUFFRCxVQUFJZ0MsSUFBSixFQUFVO0FBQ1IsZUFBTzlLLGdCQUFNdUgsU0FBTixDQUFnQjtBQUFBLGlCQUFNM0QsR0FBR2tILElBQUgsQ0FBUSxPQUFSLEVBQWMsUUFBSzJFLEtBQUwsQ0FBV3RLLElBQVgsQ0FBZCxDQUFOO0FBQUEsU0FBaEIsQ0FBUDtBQUNEO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7bUNBT2VBLEksRUFBTVYsSSxFQUFNO0FBQ3pCLFVBQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1QsY0FBTSxJQUFJUSxLQUFKLG1FQUEwRUUsSUFBMUUsT0FBTjtBQUNEOztBQUVELFVBQUksQ0FBQ2xCLE1BQU1rSCxPQUFOLENBQWMxRyxJQUFkLENBQUwsRUFBMEI7QUFDeEJBLGVBQU8sQ0FBQ0EsSUFBRCxDQUFQO0FBQ0Q7O0FBRUQsVUFBSXdZLFlBQVlqZCxnQkFBTXdFLGVBQU4sQ0FBc0JDLElBQXRCLENBQWhCO0FBQ0EsVUFBSWlCLE1BQU0sS0FBS3dMLFdBQUwsQ0FBaUIrTCxTQUFqQixDQUFWOztBQUVBLFVBQUksQ0FBQ3ZYLElBQUloQyxNQUFULEVBQWlCO0FBQ2Y7QUFDRDs7QUFFRCxXQUFLLElBQUlGLElBQUlrQyxJQUFJaEMsTUFBSixHQUFhLENBQTFCLEVBQTZCRixLQUFLLENBQWxDLEVBQXFDQSxHQUFyQyxFQUEwQztBQUN4QyxZQUFJK0MsTUFBTWIsSUFBSWxDLENBQUosQ0FBVjs7QUFFQSxZQUFJK0MsSUFBSXBCLElBQUosSUFBWUEsSUFBWixJQUFvQm9CLElBQUkwVyxTQUFKLElBQWlCQSxTQUF6QyxFQUFvRDtBQUNsRDtBQUNEOztBQUVEdlgsWUFBSXVGLE1BQUosQ0FBV3pILENBQVgsRUFBYyxDQUFkO0FBQ0Q7O0FBRUQsVUFBSSxDQUFDa0MsSUFBSWhDLE1BQVQsRUFBaUI7QUFDZixlQUFPLEtBQUt3TixXQUFMLENBQWlCK0wsU0FBakIsQ0FBUDtBQUNEO0FBQ0Y7O0FBRUE7Ozs7Ozs7Ozs7dUNBT2tCOVgsSSxFQUFNdkIsRSxFQUFJO0FBQzNCLFVBQUksQ0FBQyxLQUFLc04sV0FBTCxDQUFpQi9MLElBQWpCLENBQUwsRUFBNkI7QUFDM0I7QUFDRDs7QUFFRCxVQUFJMlgsUUFBUSxLQUFLNUwsV0FBTCxDQUFpQi9MLElBQWpCLENBQVo7O0FBRUEsV0FBSyxJQUFJM0IsSUFBSXNaLE1BQU1wWixNQUFOLEdBQWUsQ0FBNUIsRUFBK0JGLEtBQUssQ0FBcEMsRUFBdUNBLEdBQXZDLEVBQTRDO0FBQzFDLFlBQUkrQyxNQUFNdVcsTUFBTXRaLENBQU4sQ0FBVjs7QUFFQSxZQUFJK0MsSUFBSXBCLElBQUosSUFBWUEsSUFBWixJQUFvQm9CLElBQUkzQyxFQUFKLEtBQVdBLEVBQW5DLEVBQXVDO0FBQ3JDa1osZ0JBQU03UixNQUFOLENBQWF6SCxDQUFiLEVBQWdCLENBQWhCO0FBQ0E7QUFDRDtBQUNGOztBQUVELFVBQUksQ0FBQ3NaLE1BQU1wWixNQUFYLEVBQW1CO0FBQ2pCLGVBQU8sS0FBS3dOLFdBQUwsQ0FBaUIvTCxJQUFqQixDQUFQO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7Ozs7OztrQ0FPZWhFLEcsRUFBSztBQUNsQixVQUFJQSxPQUFPLElBQVAsSUFBZ0JBLElBQUksQ0FBSixLQUFVLEdBQVYsSUFBaUJBLElBQUksQ0FBSixLQUFVLEdBQS9DLEVBQXFEO0FBQ25ELGVBQU8sSUFBUDtBQUNELE9BRkQsTUFHSyxJQUFJLENBQUMsYUFBRCxFQUFnQm9MLE9BQWhCLENBQXdCcEwsR0FBeEIsS0FBZ0MsQ0FBQyxDQUFyQyxFQUF3QztBQUMzQyxlQUFPLElBQVA7QUFDRDs7QUFFRCxhQUFPLEtBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7OztvQ0FPaUJ1SyxLLEVBQU9nUyxTLEVBQVc7QUFBQTs7QUFDakMsVUFBTUMsVUFBVSxTQUFWQSxPQUFVLENBQUNqUyxLQUFELEVBQVE2SSxPQUFSLEVBQW9CO0FBQ2xDLFlBQUksUUFBTzdJLEtBQVAseUNBQU9BLEtBQVAsTUFBZ0IsUUFBaEIsSUFBNEJBLFVBQVUsSUFBMUMsRUFBZ0Q7QUFDOUMsaUJBQU9BLEtBQVA7QUFDRDs7QUFFRCxZQUFJLENBQUNySyxnQkFBTXVjLGFBQU4sQ0FBb0JsUyxLQUFwQixDQUFELElBQStCLENBQUNySyxnQkFBTXlWLFlBQU4sQ0FBbUJwTCxLQUFuQixDQUFoQyxJQUE2RCxFQUFFQSxpQkFBaUJoSyxlQUFuQixDQUFqRSxFQUE0RjtBQUMxRixpQkFBT2dLLEtBQVA7QUFDRDs7QUFFRCxZQUFJMlAsU0FBUzNQLEtBQWI7O0FBRUFtUyxxQkFBYSxJQUFJblMsTUFBTXhCLFNBQVYsRUFBcUI7QUFDaENtUixtQkFBUzNQLE1BQU0yRCxRQUFmOztBQUVBLGNBQUksUUFBS3lPLHdCQUFULEVBQW1DO0FBQ2pDLGtCQUFNRCxXQUFOO0FBQ0Q7O0FBRUQsY0FDRW5TLE1BQU1wRyxXQUFOLEtBQXNCLE9BQXRCLElBQ0F0RixnQkFBTXdFLGVBQU4sQ0FBc0IrUCxPQUF0QixLQUFrQ3ZVLGdCQUFNd0UsZUFBTixDQUFzQmtILE1BQU1tTixNQUE1QixDQUZwQyxFQUdFO0FBQ0F3QyxxQkFBU2hhLGdCQUFNOFQsSUFBTixDQUFXa0csTUFBWCxFQUFtQixFQUFFMEMsUUFBUSxLQUFWLEVBQW5CLENBQVQ7QUFDQXJTLG9CQUFRMlAsTUFBUjtBQUNEO0FBQ0YsU0FkWSxNQWVSLElBQUksQ0FBQyxRQUFLeUMsd0JBQU4sSUFBa0MsRUFBRXBTLGlCQUFpQmhLLGVBQW5CLENBQXRDLEVBQWlFO0FBQ3BFMlosbUJBQVNoYSxnQkFBTThULElBQU4sQ0FBV2tHLE1BQVgsRUFBbUIsRUFBRTBDLFFBQVEsS0FBVixFQUFuQixDQUFUO0FBQ0FyUyxrQkFBUTJQLE1BQVI7QUFDRDs7QUFFRCxZQUFNMkMsYUFBYTNiLE9BQU9vQyxJQUFQLENBQVk0VyxNQUFaLENBQW5COztBQUVBLGFBQUssSUFBSTdYLElBQUksQ0FBUixFQUFXQyxJQUFJdWEsV0FBV3RhLE1BQS9CLEVBQXVDRixJQUFJQyxDQUEzQyxFQUE4Q0QsR0FBOUMsRUFBbUQ7QUFDakQsY0FBTWlELElBQUl1WCxXQUFXeGEsQ0FBWCxDQUFWO0FBQ0EsY0FBTW9ELE9BQU15VSxPQUFPNVUsQ0FBUCxDQUFaO0FBQ0EsY0FBTWhDLE9BQU8sR0FBR3dQLE1BQUgsQ0FBVU0sT0FBVixFQUFtQixDQUFDOU4sQ0FBRCxDQUFuQixDQUFiO0FBQ0E0VSxpQkFBTzVVLENBQVAsSUFBWWtYLFFBQVEvVyxJQUFSLEVBQWFuQyxJQUFiLENBQVo7QUFDRDs7QUFFRCxZQUFJLENBQUNpSCxNQUFNeEIsU0FBWCxFQUFzQjtBQUNwQixpQkFBTyxRQUFLK1QsU0FBTCxDQUFldlMsS0FBZixFQUFzQjZJLE9BQXRCLENBQVA7QUFDRDs7QUFFRCxlQUFPN0ksS0FBUDtBQUNELE9BN0NEOztBQStDQSxhQUFPaVMsUUFBUWpTLEtBQVIsRUFBZWdTLGFBQWEsRUFBNUIsQ0FBUDtBQUNEOztBQUVBOzs7Ozs7Ozs7Ozs7NENBU3dCbkosTyxFQUFTcFQsRyxFQUF3QjtBQUFBLFVBQW5CZ0csU0FBbUIsdUVBQVAsS0FBTzs7QUFDeEQsVUFBTTFDLE9BQU84UCxRQUFRN1EsTUFBUixHQUFnQixDQUFDNlEsUUFBUSxDQUFSLENBQUQsQ0FBaEIsR0FBOEIsQ0FBQ3BULEdBQUQsQ0FBM0M7QUFDQSxVQUFNK2MsZ0JBQWdCLEtBQUt4SCxnQkFBTCxDQUFzQmpTLElBQXRCLENBQXRCOztBQUVBLFVBQUk4UCxRQUFRN1EsTUFBWixFQUFvQjtBQUNsQnlELG9CQUFZLEtBQVo7QUFDRDs7QUFFRCxVQUFJLENBQUNuSCxnQkFBTWEsV0FBTixDQUFrQnFkLGFBQWxCLENBQUwsRUFBdUM7QUFDckNsZSx3QkFBTWEsV0FBTixDQUFrQnFkLGFBQWxCLElBQW1DO0FBQ2pDQyxxQkFBVyxJQUFJZixJQUFKLEdBQVdnQixPQUFYLEVBRHNCO0FBRWpDdFgscUJBQVcsSUFGc0I7QUFHakNyQztBQUhpQyxTQUFuQztBQUtEOztBQUVBMEMsb0JBQWMyTCxTQUFmLEtBQThCOVMsZ0JBQU1hLFdBQU4sQ0FBa0JxZCxhQUFsQixFQUFpQy9XLFNBQWpDLEdBQTZDQSxTQUEzRTtBQUNBLGFBQU9uSCxnQkFBTWEsV0FBTixDQUFrQnFkLGFBQWxCLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7K0JBV1c1RyxJLEVBQU1QLGEsRUFBZXRTLEksRUFBTThQLE8sRUFBUzdJLEssRUFBOEM7QUFBQSxVQUF2Q2tMLFVBQXVDLHVFQUExQixLQUEwQjtBQUFBLFVBQW5CSyxTQUFtQix1RUFBUCxLQUFPOztBQUMzRixVQUFJb0gsbUJBQW1CcmUsZ0JBQU13RSxlQUFOLENBQXNCK1AsT0FBdEIsQ0FBdkI7QUFDQSxVQUFJek4sWUFBWSxJQUFoQjs7QUFFQSxVQUFJd1EsS0FBSzVULE1BQUwsSUFBZSxDQUFDa1QsVUFBcEIsRUFBZ0M7QUFDOUIsWUFBSW5ULElBQUk2VCxLQUFLNVQsTUFBTCxHQUFjLENBQXRCO0FBQ0EsWUFBSTJQLE9BQU9pRSxLQUFLN1QsQ0FBTCxDQUFYOztBQUVBLFlBQUk0UCxLQUFLMEQsYUFBTCxLQUF1QixJQUF2QixJQUErQjFELEtBQUtpTCxVQUFMLElBQW1CRCxnQkFBdEQsRUFBd0U7QUFDdEV2WCxzQkFBWXVNLEtBQUt2TSxTQUFqQjtBQUNEOztBQUVELFlBQUl1TSxLQUFLaUwsVUFBTCxJQUFtQkQsZ0JBQW5CLElBQXVDaEwsS0FBS3ZNLFNBQUwsS0FBbUJBLFNBQTlELEVBQXlFO0FBQ3ZFd1EsZUFBS3JNLE1BQUwsQ0FBWXhILENBQVosRUFBZSxDQUFmO0FBQ0Q7QUFDRjs7QUFFRDZULFdBQUt6VCxJQUFMLENBQVU7QUFDUmlELDRCQURRO0FBRVJpUSx1QkFBZUEsYUFGUDtBQUdSdUgsb0JBQVl0ZSxnQkFBTXdFLGVBQU4sQ0FBc0JDLElBQXRCLENBSEo7QUFJUjhQLHdCQUpRO0FBS1I5UCxrQkFMUTtBQU1SaUgsb0JBTlE7QUFPUnVMLDRCQVBRO0FBUVJMO0FBUlEsT0FBVjtBQVVEOztBQUVEOzs7Ozs7Ozs7O3lDQU9xQnpWLEcsRUFBSztBQUN4QixhQUFPQSxPQUFPLFFBQWQ7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs4QkFPVXNELEksRUFBTTtBQUNkLGFBQU9wRCxnQkFBTXdGLGlCQUFOLENBQXdCcEMsSUFBeEIsRUFBOEIsS0FBSytMLFVBQW5DLEtBQWtELElBQXpEO0FBQ0Q7O0FBRUQ7Ozs7Ozs7O2tDQUtjL0wsSSxFQUFNO0FBQ2xCLFVBQU15RSxPQUFPLEtBQUs2TyxTQUFMLENBQWV0VCxJQUFmLENBQWI7O0FBRUEsVUFBSSxDQUFDeUUsSUFBTCxFQUFXO0FBQ1QsZUFBTyxFQUFQO0FBQ0Q7O0FBRUQsVUFBSW1LLE9BQU8sRUFBWDs7QUFFQSxVQUFNa0wsVUFBVSxTQUFWQSxPQUFVLENBQUMzUyxHQUFELEVBQVM7QUFDdkJ5SCxlQUFPQSxLQUFLWSxNQUFMLENBQVlySSxJQUFJb00sTUFBSixJQUFjLEVBQTFCLENBQVA7O0FBRUEsYUFBSyxJQUFJN1csSUFBVCxJQUFnQnlLLEdBQWhCLEVBQXFCO0FBQ25CLGNBQUksQ0FBQ0EsSUFBSWxGLGNBQUosQ0FBbUJ2RixJQUFuQixDQUFELElBQTRCQSxRQUFPLFFBQXZDLEVBQWlEO0FBQy9DO0FBQ0Q7O0FBRURvZCxrQkFBUTNTLElBQUl6SyxJQUFKLENBQVI7QUFDRDtBQUNGLE9BVkQ7O0FBWUFvZCxjQUFRclYsSUFBUjtBQUNBLGFBQU9tSyxJQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7O21DQVFlNU8sSSxFQUFNbUIsSSxFQUFNO0FBQ3pCLFVBQUkwUixPQUFRalcsZ0JBQU13RixpQkFBTixDQUF3QnBDLElBQXhCLEVBQThCLEtBQUsrTCxVQUFuQyxDQUFaOztBQUVBLFVBQUksQ0FBQzhHLElBQUQsSUFBUyxDQUFDQSxLQUFLVSxNQUFmLElBQXlCLENBQUNWLEtBQUtVLE1BQUwsQ0FBWXRVLE1BQTFDLEVBQWtEO0FBQ2hELGVBQU8sSUFBUDtBQUNEOztBQUVELFdBQUssSUFBSUYsSUFBSSxDQUFSLEVBQVdDLElBQUk2VCxLQUFLVSxNQUFMLENBQVl0VSxNQUFoQyxFQUF3Q0YsSUFBSUMsQ0FBNUMsRUFBK0NELEdBQS9DLEVBQW9EO0FBQ2xELFlBQUk2UCxPQUFPaUUsS0FBS1UsTUFBTCxDQUFZeFUsQ0FBWixDQUFYOztBQUVBLFlBQUk2UCxLQUFLek4sSUFBTCxLQUFjQSxJQUFsQixFQUF3QjtBQUN0QixpQkFBT3lOLElBQVA7QUFDRDtBQUNGOztBQUVELGFBQU8sSUFBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7Ozs7O3NDQVVrQnpOLEksRUFBTW5CLEksRUFBTWlILEssRUFBMEI7QUFBQSxVQUFuQnVMLFNBQW1CLHVFQUFQLEtBQU87O0FBQ3RELFVBQUl0USxPQUFPLEtBQUtvTyxpQkFBTCxDQUF1Qm5QLElBQXZCLEVBQTZCbkIsSUFBN0IsQ0FBWDtBQUNBLFVBQUkwUSxPQUFPLFFBQU96SixLQUFQLHlDQUFPQSxLQUFQLE1BQWdCLFFBQWhCLEdBQTBCLEVBQUVzSixNQUFNM1QsZ0JBQU00VCxnQkFBTixDQUF1QnZKLEtBQXZCLENBQVIsRUFBMUIsR0FBbUVySyxnQkFBTThULElBQU4sQ0FBV3pKLEtBQVgsQ0FBOUU7O0FBRUEsVUFBSS9FLElBQUosRUFBVTtBQUNSLFlBQUlKLE1BQU1YLEtBQUtOLFdBQUwsQ0FBaUJ3UCwwQkFBakIsQ0FBNENuTyxJQUE1QyxFQUFrRCtFLEtBQWxELENBQVY7QUFDQS9FLGFBQUsrRSxLQUFMLEdBQWFBLEtBQWI7QUFDQS9FLGFBQUt3TyxJQUFMLEdBQVlBLElBQVo7QUFDQSxlQUFPLENBQUM1TyxHQUFSO0FBQ0Q7O0FBRURYLFdBQUtpUCxZQUFMLENBQWtCLEtBQUs2QixnQkFBTCxDQUFzQmpTLElBQXRCLENBQWxCLElBQWlEO0FBQy9DcUMsbUJBQVcsSUFEb0M7QUFFL0M0RSxvQkFGK0M7QUFHL0N5SixrQkFIK0M7QUFJL0N2UCxrQkFKK0M7QUFLL0NuQixrQkFMK0M7QUFNL0N3UztBQU4rQyxPQUFqRDs7QUFTQSxhQUFPLElBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7c0NBUWtCclIsSSxFQUFNbkIsSSxFQUFNO0FBQzVCLGFBQU9tQixLQUFLaVAsWUFBTCxDQUFrQixLQUFLNkIsZ0JBQUwsQ0FBc0JqUyxJQUF0QixDQUFsQixLQUFrRCxJQUF6RDtBQUNEOztBQUVEOzs7Ozs7Ozs7O3lDQU9xQm1CLEksRUFBTW5CLEksRUFBTTtBQUMvQixVQUFJdVEsT0FBVSxLQUFLak8sT0FBTCxDQUFhL0IsTUFBdkIsU0FBaUNoRixnQkFBTXdFLGVBQU4sQ0FBc0JDLElBQXRCLENBQXJDO0FBQ0EsYUFBT21CLEtBQUtpUCxZQUFMLENBQWtCRyxJQUFsQixDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7K0JBT1dwUixFLEVBQWtCO0FBQUE7O0FBQUEsVUFBZHpELE9BQWMsdUVBQUosRUFBSTs7QUFDM0JBLDJCQUFZcWUsV0FBVyxJQUF2QixFQUE2Qi9PLE9BQU8sSUFBcEMsRUFBMEM3SixNQUFNLElBQWhELElBQXlEekYsT0FBekQ7O0FBRUEsVUFBTTBJLE9BQU8sU0FBUEEsSUFBTyxDQUFDbEUsRUFBRCxFQUFRO0FBQ25CLFlBQUcsQ0FBQ0EsRUFBSixFQUFRO0FBQ047QUFDRDs7QUFFRCxZQUFHeEUsUUFBUXNQLEtBQVIsS0FBa0I5SyxPQUFPLFFBQUtBLEVBQVosSUFBa0J4RSxRQUFRcWUsU0FBNUMsQ0FBSCxFQUEyRDtBQUN6RCxlQUFLLElBQUkvWCxJQUFJLENBQVIsRUFBV2dKLFFBQVE5SyxHQUFHeUosVUFBdEIsRUFBa0NyQyxJQUFJMEQsTUFBTS9MLE1BQWpELEVBQXlEK0MsSUFBSXNGLENBQTdELEVBQWdFdEYsR0FBaEUsRUFBcUU7QUFDbkU3QyxlQUFHNkwsTUFBTWhKLENBQU4sQ0FBSDtBQUNEO0FBQ0Y7O0FBRUQsYUFBSyxJQUFJakQsSUFBSSxDQUFSLEVBQVdDLElBQUlrQixHQUFHZ08sVUFBSCxDQUFjalAsTUFBbEMsRUFBMENGLElBQUlDLENBQTlDLEVBQWlERCxHQUFqRCxFQUFzRDtBQUNwRCxjQUFNb0MsT0FBT2pCLEdBQUdnTyxVQUFILENBQWNuUCxDQUFkLENBQWI7O0FBRUEsY0FBSW9DLEtBQUs2TSxRQUFMLElBQWlCLENBQXJCLEVBQXdCO0FBQ3RCdFMsb0JBQVF5RixJQUFSLElBQWdCaEMsR0FBR2dDLElBQUgsQ0FBaEI7QUFDRCxXQUZELE1BR0ssSUFBSUEsS0FBSzZNLFFBQUwsSUFBaUIsQ0FBakIsSUFBc0IsQ0FBQzdNLEtBQUtFLE9BQWhDLEVBQXlDO0FBQzVDK0MsaUJBQUtqRCxJQUFMO0FBQ0Q7QUFDRjtBQUNGLE9BckJEOztBQXVCQWlELFdBQUssS0FBS2xFLEVBQVY7QUFDRDs7QUFFRDs7Ozs7Ozs7b0NBS2dCO0FBQ2QsVUFBTThaLFFBQVEsRUFBZDtBQUNBLFdBQUtDLFVBQUwsQ0FBZ0I7QUFBQSxlQUFRRCxNQUFNNWEsSUFBTixDQUFXK0IsSUFBWCxDQUFSO0FBQUEsT0FBaEI7QUFDQSxhQUFPNlksS0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7OzZCQU9TblMsRyxFQUFLMUcsSSxFQUFNO0FBQ2xCLFVBQUcsQ0FBQyxLQUFLZ0gsTUFBTCxDQUFZTixHQUFaLENBQUosRUFBc0I7QUFDcEIsYUFBS00sTUFBTCxDQUFZTixHQUFaLElBQW1CLEVBQW5CO0FBQ0Q7O0FBRUQsVUFBRyxDQUFDLEtBQUtxUyxRQUFMLENBQWNyUyxHQUFkLENBQUosRUFBd0I7QUFDdEIsYUFBS00sTUFBTCxDQUFZTixHQUFaLEVBQWlCekksSUFBakIsQ0FBc0IsRUFBRStCLFVBQUYsRUFBdEI7QUFDRDtBQUNGOztBQUVEOzs7Ozs7Ozs7Ozs2QkFRUzBHLEcsRUFBSzFHLEksRUFBTTtBQUNsQixVQUFHLENBQUMsS0FBS2dILE1BQUwsQ0FBWU4sR0FBWixDQUFKLEVBQXNCO0FBQ3BCLGVBQU8sS0FBUDtBQUNEOztBQUVELFdBQUksSUFBSTlJLElBQUksQ0FBUixFQUFXQyxJQUFJLEtBQUttSixNQUFMLENBQVlOLEdBQVosRUFBaUI1SSxNQUFwQyxFQUE0Q0YsSUFBSUMsQ0FBaEQsRUFBbURELEdBQW5ELEVBQXdEO0FBQ3RELFlBQUcsS0FBS29KLE1BQUwsQ0FBWU4sR0FBWixFQUFpQjlJLENBQWpCLEVBQW9Cb0MsSUFBcEIsS0FBNkJBLElBQWhDLEVBQXNDO0FBQ3BDLGlCQUFPLElBQVA7QUFDRDtBQUNGOztBQUVELGFBQU8sS0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7O2dDQU9hMEcsRyxFQUFLMUcsSSxFQUFNO0FBQ3RCLFVBQUcsQ0FBQ0EsSUFBSixFQUFVO0FBQ1IsZUFBTyxLQUFLZ0gsTUFBTCxDQUFZTixHQUFaLENBQVA7QUFDQTtBQUNEOztBQUVELFdBQUksSUFBSTlJLElBQUksQ0FBUixFQUFXQyxJQUFJLEtBQUttSixNQUFMLENBQVlOLEdBQVosRUFBaUI1SSxNQUFwQyxFQUE0Q0YsSUFBSUMsQ0FBaEQsRUFBbURELEdBQW5ELEVBQXdEO0FBQ3RELFlBQUcsS0FBS29KLE1BQUwsQ0FBWU4sR0FBWixFQUFpQjlJLENBQWpCLEVBQW9Cb0MsSUFBcEIsS0FBNkJBLElBQWhDLEVBQXNDO0FBQ3BDLGVBQUtnSCxNQUFMLENBQVlOLEdBQVosRUFBaUJyQixNQUFqQixDQUF3QnpILENBQXhCLEVBQTJCLENBQTNCO0FBQ0E7QUFDRDtBQUNGOztBQUVELFVBQUcsQ0FBQyxLQUFLb0osTUFBTCxDQUFZTixHQUFaLEVBQWlCNUksTUFBckIsRUFBNkI7QUFDM0IsZUFBTyxLQUFLa0osTUFBTCxDQUFZTixHQUFaLENBQVA7QUFDRDtBQUNGOztBQUVEOzs7Ozs7Ozs7OzJCQU9PN0gsSSxFQUFNNE8sSSxFQUFNO0FBQ2pCaFMsc0JBQU11ZCxpQkFBTixDQUF3Qm5hLElBQXhCLEVBQThCLEtBQUsrTCxVQUFuQyxFQUErQyxVQUFDcU8sSUFBRCxFQUFPblQsS0FBUCxFQUFpQjtBQUM5RCxZQUFJRSxNQUFNLEVBQUVvTSxRQUFRLEVBQVYsRUFBVjs7QUFFQSxZQUFJLENBQUM2RyxJQUFMLEVBQVc7QUFDVCxpQkFBT25ULFFBQU9BLEtBQVAsR0FBY0UsR0FBckI7QUFDRDs7QUFFRCxZQUFJLFFBQU9GLEtBQVAseUNBQU9BLEtBQVAsTUFBZ0IsUUFBcEIsRUFBOEI7QUFDNUJFLGdCQUFNRixLQUFOO0FBQ0Q7O0FBRUQsWUFBSSxDQUFDRSxJQUFJb00sTUFBVCxFQUFpQjtBQUNmcE0sY0FBSW9NLE1BQUosR0FBYSxFQUFiO0FBQ0Q7O0FBRURwTSxZQUFJb00sTUFBSixDQUFXblUsSUFBWCxDQUFnQndQLElBQWhCO0FBQ0EsZUFBT3pILEdBQVA7QUFDRCxPQWpCRDtBQWtCRDs7QUFFRDs7Ozs7Ozs7OzZCQU1TbkgsSSxFQUFNO0FBQ2IsVUFBSTZTLE9BQU9qVyxnQkFBTXdGLGlCQUFOLENBQXdCcEMsSUFBeEIsRUFBOEIsS0FBSytMLFVBQW5DLENBQVg7O0FBRUEsVUFBSSxDQUFDOEcsSUFBRCxJQUFTLENBQUNBLEtBQUtVLE1BQW5CLEVBQTJCO0FBQ3pCO0FBQ0Q7O0FBRUQsV0FBSyxJQUFJeFUsSUFBSSxDQUFSLEVBQVdDLElBQUk2VCxLQUFLVSxNQUFMLENBQVl0VSxNQUFoQyxFQUF3Q0YsSUFBSUMsQ0FBNUMsRUFBK0NELEdBQS9DLEVBQW9EO0FBQ2xELFlBQUlvQyxPQUFPMFIsS0FBS1UsTUFBTCxDQUFZeFUsQ0FBWixFQUFlb0MsSUFBMUI7QUFDQSxhQUFLa1osb0JBQUwsQ0FBMEJsWixJQUExQixFQUFnQ25CLElBQWhDO0FBQ0Q7O0FBRURwRCxzQkFBTStYLG9CQUFOLENBQTJCM1UsSUFBM0IsRUFBaUMsS0FBSytMLFVBQXRDLEVBQWtELFVBQUM5RSxLQUFELEVBQVc7QUFDM0QsWUFBSXJKLE9BQU9vQyxJQUFQLENBQVlpSCxLQUFaLEVBQW1CaEksTUFBbkIsR0FBNEIsQ0FBaEMsRUFBbUM7QUFDakNnSSxnQkFBTXNNLE1BQU4sR0FBZSxFQUFmO0FBQ0EsaUJBQU8sS0FBUDtBQUNEOztBQUVELGVBQU8sSUFBUDtBQUNELE9BUEQ7QUFRRDs7QUFFRDs7Ozs7Ozs7O29DQU1nQnlHLEssRUFBTztBQUFBOztBQUNyQixPQUFDeGEsTUFBTWtILE9BQU4sQ0FBY3NULEtBQWQsQ0FBRCxLQUEwQkEsUUFBUSxDQUFDQSxLQUFELENBQWxDOztBQUVBLFVBQU0vRixTQUFTLFNBQVRBLE1BQVMsQ0FBQzlNLEdBQUQsRUFBUztBQUN0QixZQUFNbkgsT0FBT3BDLE9BQU9vQyxJQUFQLENBQVltSCxHQUFaLENBQWI7O0FBRUEsYUFBSyxJQUFJaUIsSUFBSSxDQUFSLEVBQVdkLElBQUl0SCxLQUFLZixNQUF6QixFQUFpQ21KLElBQUlkLENBQXJDLEVBQXdDYyxHQUF4QyxFQUE2QztBQUMzQyxjQUFNcEcsSUFBSWhDLEtBQUtvSSxDQUFMLENBQVY7O0FBRUEsY0FBSXBHLEtBQUssUUFBVCxFQUFtQjtBQUNqQixnQkFBSTRNLE9BQU96SCxJQUFJbkYsQ0FBSixLQUFVLEVBQXJCO0FBQ0EsZ0JBQUloRCxJQUFJNFAsS0FBSzNQLE1BQWI7O0FBRUEsaUJBQUssSUFBSUYsSUFBSSxDQUFiLEVBQWdCQSxJQUFJQyxDQUFwQixFQUF1QkQsR0FBdkIsRUFBNEI7QUFDMUIsa0JBQUk4VCxPQUFPakUsS0FBSzdQLENBQUwsQ0FBWDs7QUFFQSxrQkFBSWliLE1BQU1sUyxPQUFOLENBQWMrSyxLQUFLMVIsSUFBbkIsS0FBNEIsQ0FBQyxDQUFqQyxFQUFvQztBQUNsQ3lOLHFCQUFLcEksTUFBTCxDQUFZekgsQ0FBWixFQUFlLENBQWY7QUFDQUE7QUFDQUM7QUFDRDtBQUNGOztBQUVELGdCQUFJLENBQUNBLENBQUwsRUFBUTtBQUNOLHFCQUFPbUksSUFBSW5GLENBQUosQ0FBUDtBQUNEO0FBQ0YsV0FqQkQsTUFrQkssSUFBSSxDQUFDLFFBQUtrUyxvQkFBTCxDQUEwQmxTLENBQTFCLENBQUwsRUFBbUM7QUFDdENpUyxtQkFBTzlNLElBQUluRixDQUFKLENBQVA7QUFDRDtBQUNGO0FBQ0YsT0E1QkQ7O0FBOEJBaVMsYUFBTyxLQUFLbEksVUFBWjtBQUNBLFdBQUt1TyxvQkFBTDtBQUNEOztBQUVEOzs7Ozs7Ozs7MkNBTXVCTixLLEVBQU87QUFDNUIsV0FBSSxJQUFJamIsSUFBSSxDQUFSLEVBQVdDLElBQUksS0FBS3VOLFNBQUwsQ0FBZXROLE1BQWxDLEVBQTBDRixJQUFJQyxDQUE5QyxFQUFpREQsR0FBakQsRUFBc0Q7QUFDcEQsWUFBTWdQLFNBQVMsS0FBS3hCLFNBQUwsQ0FBZXhOLENBQWYsQ0FBZjtBQUNBZ1Asa0JBQVVBLE9BQU8xTSxPQUFqQixJQUE0QjBNLE9BQU8xTSxPQUFQLENBQWVrWixlQUFmLENBQStCUCxLQUEvQixDQUE1QjtBQUNEO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozt5Q0FNcUI3UyxHLEVBQUs7QUFBQTs7QUFDeEIsVUFBTXFULFFBQVEsU0FBUkEsS0FBUSxDQUFDclQsR0FBRCxFQUFNNEcsTUFBTixFQUFjclIsR0FBZCxFQUFzQjtBQUNsQyxhQUFLLElBQUlzRixDQUFULElBQWNtRixHQUFkLEVBQW1CO0FBQ2pCLGNBQUksQ0FBQ0EsSUFBSWxGLGNBQUosQ0FBbUJELENBQW5CLENBQUwsRUFBNEI7QUFDMUI7QUFDRDs7QUFFRCxjQUFJRyxRQUFNZ0YsSUFBSW5GLENBQUosQ0FBVjs7QUFFQSxjQUFJQSxLQUFLLFFBQUwsS0FBa0IsQ0FBQ0csS0FBRCxJQUFRLENBQUNBLE1BQUlsRCxNQUEvQixDQUFKLEVBQTRDO0FBQzFDLG1CQUFPa0ksSUFBSW5GLENBQUosQ0FBUDtBQUNELFdBRkQsTUFHSyxJQUFJLENBQUMsUUFBS2tTLG9CQUFMLENBQTBCbFMsQ0FBMUIsQ0FBTCxFQUFtQztBQUN0QyxnQkFBSSxDQUFDcEUsT0FBT29DLElBQVAsQ0FBWW1ILElBQUluRixDQUFKLENBQVosRUFBb0IvQyxNQUF6QixFQUFpQztBQUMvQixxQkFBT2tJLElBQUluRixDQUFKLENBQVA7QUFDRCxhQUZELE1BR0s7QUFDSHdZLG9CQUFNclQsSUFBSW5GLENBQUosQ0FBTixFQUFjbUYsR0FBZCxFQUFtQm5GLENBQW5CO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFlBQUksQ0FBQ3BFLE9BQU9vQyxJQUFQLENBQVltSCxHQUFaLEVBQWlCbEksTUFBbEIsSUFBNEI4TyxNQUFoQyxFQUF3QztBQUN0QyxpQkFBT0EsT0FBT3JSLEdBQVAsQ0FBUDtBQUNEO0FBQ0YsT0F4QkQ7O0FBMEJBOGQsWUFBTXJULE9BQU8sS0FBSzRFLFVBQWxCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7O3dDQUtvQjtBQUNsQixVQUFNc00sUUFBUTljLGdCQUFNVyxZQUFwQjs7QUFFQSxXQUFLLElBQUlRLEtBQVQsSUFBZ0IyYixLQUFoQixFQUF1QjtBQUNyQixZQUFNcFgsTUFBTW9YLE1BQU0zYixLQUFOLENBQVo7O0FBRUEsYUFBSyxJQUFJcUMsSUFBSWtDLElBQUloQyxNQUFKLEdBQWEsQ0FBMUIsRUFBNkJGLEtBQUssQ0FBbEMsRUFBcUNBLEdBQXJDLEVBQTBDO0FBQ3hDLGNBQU11SCxTQUFPckYsSUFBSWxDLENBQUosQ0FBYjs7QUFFQSxjQUFJdUgsT0FBS2pFLFNBQUwsS0FBbUIsSUFBdkIsRUFBNkI7QUFDM0JwQixnQkFBSXVGLE1BQUosQ0FBV3pILENBQVgsRUFBYyxDQUFkO0FBQ0Q7QUFDRjs7QUFFRCxZQUFJLENBQUNrQyxJQUFJaEMsTUFBVCxFQUFpQjtBQUNmLGlCQUFPb1osTUFBTTNiLEtBQU4sQ0FBUDtBQUNEO0FBQ0Y7QUFDRjs7QUFFRDs7Ozs7Ozs7O3VDQU0rQjtBQUFBLFVBQWRoQixPQUFjLHVFQUFKLEVBQUk7O0FBQzdCLFVBQUlzZSxRQUFRLEVBQVo7O0FBRUEsVUFBTS9ULFNBQVMsU0FBVEEsTUFBUyxDQUFDckIsUUFBRCxFQUFjO0FBQzNCLGFBQUssSUFBSTdGLElBQUksQ0FBYixFQUFnQkEsSUFBSTZGLFNBQVMzRixNQUE3QixFQUFxQ0YsR0FBckMsRUFBMEM7QUFDeEMsY0FBSThGLFFBQVFELFNBQVM3RixDQUFULENBQVo7QUFDQWtILGlCQUFPcEIsTUFBTXhELE9BQU4sQ0FBY2lMLFVBQXJCO0FBQ0EwTixrQkFBUUEsTUFBTXhLLE1BQU4sQ0FBYTNLLE1BQU14RCxPQUFOLENBQWNvWixRQUFkLENBQXVCL2UsT0FBdkIsQ0FBYixDQUFSO0FBQ0FxRDtBQUNEO0FBQ0YsT0FQRDs7QUFTQWtILGFBQU8sS0FBS3FHLFVBQVo7QUFDQSxhQUFPME4sS0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7K0JBTXVCO0FBQUE7O0FBQUEsVUFBZHRlLE9BQWMsdUVBQUosRUFBSTs7QUFDckIsVUFBSXNlLFFBQVEsRUFBWjtBQUNBLFdBQUtoUCxLQUFMLENBQVcwUCxTQUFYLElBQXdCLEtBQUsxUCxLQUFMLENBQVcwUCxTQUFYLENBQXFCdE0sT0FBckIsQ0FBNkJDLFNBQTdCLEVBQXdDLEVBQUVDLFNBQVMsS0FBWCxFQUF4QyxDQUF4QjtBQUNBMEwsY0FBUUEsTUFBTXhLLE1BQU4sQ0FBYSxLQUFLUyxRQUFMLENBQWMsRUFBRW9HLGNBQWMsSUFBaEIsRUFBZCxDQUFiLENBQVI7QUFDQTJELGNBQVFBLE1BQU14SyxNQUFOLENBQWEsS0FBS21MLE9BQUwsQ0FBYSxFQUFFdEUsY0FBYyxJQUFoQixFQUFiLENBQWIsQ0FBUjtBQUNBLFdBQUt1RSxpQkFBTDtBQUNBLFdBQUtDLE9BQUw7QUFDQXRmLHNCQUFNb0YsV0FBTixDQUFrQixLQUFLMkIsT0FBTCxDQUFhL0IsTUFBL0I7QUFDQSxXQUFLTCxFQUFMLENBQVErRixNQUFSOztBQUVBLFVBQUcsQ0FBQ3ZLLFFBQVEyYSxZQUFaLEVBQTBCO0FBQ3hCLGFBQUtDLHNCQUFMLENBQTRCMEQsS0FBNUI7QUFDRDs7QUFFRHplLHNCQUFNeUgsUUFBTixDQUFlLFlBQU07QUFDbkIsZUFBTyxRQUFLOUMsRUFBTCxDQUFRbUIsT0FBZjtBQUNBLGdCQUFLMEssVUFBTCxHQUFrQixJQUFsQjtBQUNBLGdCQUFLNUQsTUFBTCxHQUFjLElBQWQ7QUFDQSxnQkFBSzZELGlCQUFMLEdBQXlCLElBQXpCO0FBQ0EsZ0JBQUtDLGFBQUwsR0FBcUIsS0FBckI7QUFDQSxnQkFBS0MsV0FBTCxHQUFtQixJQUFuQjtBQUNBLGdCQUFLQyxjQUFMLEdBQXNCLElBQXRCO0FBQ0EsZ0JBQUtDLGtCQUFMLEdBQTBCLElBQTFCO0FBQ0EsZ0JBQUtDLGlCQUFMLEdBQXlCLElBQXpCO0FBQ0EsZ0JBQUtDLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxnQkFBS3hMLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxnQkFBS3lMLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxnQkFBS0MsT0FBTCxHQUFlLElBQWY7QUFDQSxnQkFBS0MsV0FBTCxHQUFtQixJQUFuQjtBQUNBLGdCQUFLdlEsWUFBTCxHQUFvQixJQUFwQjtBQUNBLGdCQUFLd1EsYUFBTCxHQUFxQixJQUFyQjtBQUNBLGdCQUFLQyxxQkFBTCxHQUE2QixJQUE3QjtBQUNBLGdCQUFLck0sS0FBTCxHQUFhLElBQWI7QUFDQSxnQkFBS0osRUFBTCxHQUFVLElBQVY7QUFDRCxPQXBCRDs7QUFzQkEsYUFBTzhaLEtBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7OytCQU11QjtBQUFBLFVBQWR0ZSxPQUFjLHVFQUFKLEVBQUk7O0FBQ3JCLFdBQUtvRixRQUFMLElBQWlCLEtBQUtBLFFBQUwsQ0FBY08sT0FBZCxDQUFzQnlaLGFBQXRCLENBQW9DLEtBQUs1YSxFQUF6QyxDQUFqQjtBQUNBLFVBQU04WixRQUFRLEdBQUc1VCxLQUFILENBQVNDLElBQVQsQ0FBYyxLQUFLbkcsRUFBTCxDQUFReUosVUFBdEIsRUFBa0NxUCxNQUFsQyxDQUF5QztBQUFBLGVBQVE3WCxLQUFLc1MsYUFBYjtBQUFBLE9BQXpDLENBQWQ7O0FBRUEsVUFBRyxDQUFDL1gsUUFBUTJhLFlBQVosRUFBMEI7QUFDeEIsYUFBS0Msc0JBQUwsQ0FBNEIwRCxLQUE1QjtBQUNEOztBQUVELGFBQU9BLEtBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7OzhCQU1zQjtBQUFBOztBQUFBLFVBQWR0ZSxPQUFjLHVFQUFKLEVBQUk7O0FBQ3BCLFVBQU1zZSxRQUFRLEtBQUtlLGdCQUFMLENBQXNCLEVBQUUxRSxjQUFjLElBQWhCLEVBQXRCLENBQWQ7O0FBRUEsV0FBSzRELFVBQUwsQ0FBZ0IsZ0JBQVE7QUFDdEIsWUFBRyxDQUFDOVksS0FBS3NTLGFBQVQsRUFBd0I7QUFDdEI7QUFDRDs7QUFFRCxnQkFBS2lELGtCQUFMLENBQXdCdlYsSUFBeEIsRUFBOEIsRUFBRWtWLGNBQWMsSUFBaEIsRUFBOUI7QUFDQTJELGNBQU01YSxJQUFOLENBQVcrQixJQUFYO0FBQ0QsT0FQRCxFQU9HLEVBQUU0WSxXQUFXLEtBQWIsRUFQSDs7QUFTQSxVQUFHLENBQUNyZSxRQUFRMmEsWUFBWixFQUEwQjtBQUN4QixhQUFLa0UsZUFBTCxDQUFxQlAsS0FBckI7QUFDQSxhQUFLMUQsc0JBQUwsQ0FBNEIwRCxLQUE1QjtBQUNEOztBQUVELFdBQUs5WixFQUFMLENBQVF1QixTQUFSLEdBQW9CLEVBQXBCO0FBQ0EsYUFBT3VZLEtBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7O2tDQVMyRDtBQUFBLFVBQS9DOVYsUUFBK0MsdUVBQXBDLEVBQW9DO0FBQUEsVUFBaEM4VyxPQUFnQyx1RUFBdEIsS0FBc0I7QUFBQSxVQUFmQyxNQUFlLHVFQUFOLElBQU07O0FBQ3pELFVBQUloYSxNQUFNLEVBQVY7QUFDQSxVQUFJaWEsUUFBUSxDQUFaOztBQUVBLFVBQUksUUFBT0QsTUFBUCx5Q0FBT0EsTUFBUCxNQUFpQixRQUFyQixFQUErQjtBQUM3QkEsaUJBQVMsQ0FBQ0EsTUFBRCxDQUFUO0FBQ0Q7O0FBRUQsVUFBTTdXLE9BQU8sU0FBUEEsSUFBTyxDQUFDMkosTUFBRCxFQUFZO0FBQ3ZCLFlBQUksQ0FBQ0EsTUFBTCxFQUFhO0FBQ1g7QUFDRDs7QUFFRCxZQUFJLENBQUNrTixNQUFELElBQVdBLE9BQU9uVCxPQUFQLENBQWVvVCxLQUFmLEtBQXlCLENBQUMsQ0FBekMsRUFBNEM7QUFDMUMsY0FBSSxDQUFDaFgsUUFBRCxJQUFhNkosT0FBTzFNLE9BQVAsQ0FBZTRDLE9BQWYsQ0FBdUJDLFFBQXZCLENBQWpCLEVBQW1EO0FBQ2pELGdCQUFJLENBQUM4VyxPQUFMLEVBQWM7QUFDWi9aLGtCQUFJN0IsSUFBSixDQUFTMk8sT0FBTzFNLE9BQWhCO0FBQ0E7QUFDRDs7QUFFREosZ0JBQUk3QixJQUFKLENBQVMyTyxPQUFPMU0sT0FBaEI7QUFDRDtBQUNGOztBQUVENlo7QUFDQTlXLGFBQUsySixPQUFPMU0sT0FBUCxDQUFlUCxRQUFwQjtBQUNELE9BbEJEOztBQW9CQXNELFdBQUssS0FBS3RELFFBQVY7QUFDQSxhQUFPa2EsVUFBUy9aLEdBQVQsR0FBZUEsSUFBSSxDQUFKLEtBQVUsSUFBaEM7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7O29DQVM0RDtBQUFBLFVBQTlDaUQsUUFBOEMsdUVBQW5DLEVBQW1DO0FBQUEsVUFBL0I4VyxPQUErQix1RUFBckIsSUFBcUI7QUFBQSxVQUFmQyxNQUFlLHVFQUFOLElBQU07O0FBQzFELFVBQUloYSxNQUFNLEVBQVY7QUFDQSxVQUFJaWEsUUFBUSxDQUFaOztBQUVBLFVBQUksUUFBT0QsTUFBUCx5Q0FBT0EsTUFBUCxNQUFpQixRQUFyQixFQUErQjtBQUM3QkEsaUJBQVMsQ0FBQ0EsTUFBRCxDQUFUO0FBQ0Q7O0FBRUQsVUFBTTdXLE9BQU8sU0FBUEEsSUFBTyxDQUFDUSxRQUFELEVBQWM7QUFDekIsYUFBSyxJQUFJN0YsSUFBSSxDQUFSLEVBQVdDLElBQUk0RixTQUFTM0YsTUFBN0IsRUFBcUNGLElBQUlDLENBQXpDLEVBQTRDRCxHQUE1QyxFQUFpRDtBQUMvQyxjQUFJOEYsUUFBUUQsU0FBUzdGLENBQVQsQ0FBWjs7QUFFQSxjQUFJLENBQUNrYyxNQUFELElBQVdBLE9BQU9uVCxPQUFQLENBQWVvVCxLQUFmLEtBQXlCLENBQUMsQ0FBekMsRUFBNEM7QUFDMUMsZ0JBQUksQ0FBQ2hYLFFBQUQsSUFBYVcsTUFBTXhELE9BQU4sQ0FBYzRDLE9BQWQsQ0FBc0JDLFFBQXRCLENBQWpCLEVBQWtEO0FBQ2hELGtCQUFJLENBQUM4VyxPQUFMLEVBQWM7QUFDWi9aLG9CQUFJN0IsSUFBSixDQUFTeUYsTUFBTXhELE9BQWY7QUFDQTtBQUNEOztBQUVESixrQkFBSTdCLElBQUosQ0FBU3lGLE1BQU14RCxPQUFmO0FBQ0Q7QUFDRjtBQUNGOztBQUVENlo7O0FBRUEsYUFBSyxJQUFJbmMsTUFBSSxDQUFSLEVBQVdDLE1BQUk0RixTQUFTM0YsTUFBN0IsRUFBcUNGLE1BQUlDLEdBQXpDLEVBQTRDRCxLQUE1QyxFQUFpRDtBQUMvQ3FGLGVBQUtRLFNBQVM3RixHQUFULEVBQVlzQyxPQUFaLENBQW9CaUwsVUFBekI7QUFDRDtBQUNGLE9BckJEOztBQXVCQWxJLFdBQUssS0FBS2tJLFVBQVY7QUFDQSxhQUFPME8sVUFBUy9aLEdBQVQsR0FBZUEsSUFBSSxDQUFKLEtBQVUsSUFBaEM7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7O2dDQVN3RDtBQUFBLFVBQTlDaUQsUUFBOEMsdUVBQW5DLEVBQW1DO0FBQUEsVUFBL0I4VyxPQUErQix1RUFBckIsSUFBcUI7QUFBQSxVQUFmRyxLQUFlLHVFQUFQLEtBQU87O0FBQ3RELFVBQUksQ0FBQyxLQUFLcmEsUUFBVixFQUFvQjtBQUNsQixlQUFPLElBQVA7QUFDRDs7QUFFRCxVQUFJc2EsZ0JBQWdCLEtBQUt0YSxRQUFMLENBQWNPLE9BQWQsQ0FBc0JpTCxVQUF0QixDQUFpQ2xHLEtBQWpDLEVBQXBCO0FBQ0EsVUFBSW5GLE1BQU0sRUFBVjtBQUNBa2EsZUFBU0MsY0FBY3pULE9BQWQsRUFBVDs7QUFFQSxXQUFLLElBQUk1SSxJQUFJLENBQVIsRUFBV0MsSUFBSW9jLGNBQWNuYyxNQUFsQyxFQUEwQ0YsSUFBSUMsQ0FBOUMsRUFBaURELEdBQWpELEVBQXNEO0FBQ3BELFlBQUltQixLQUFLa2IsY0FBY3JjLENBQWQsQ0FBVDs7QUFFQSxZQUFJbUIsT0FBTyxLQUFLQSxFQUFoQixFQUFvQjtBQUNsQjtBQUNEOztBQUVELFlBQUksQ0FBQ2dFLFFBQUQsSUFBYWhFLEdBQUdtQixPQUFILENBQVc0QyxPQUFYLENBQW1CQyxRQUFuQixDQUFqQixFQUErQztBQUM3Q2pELGNBQUk3QixJQUFKLENBQVNjLEdBQUdtQixPQUFaO0FBQ0Q7QUFDRjs7QUFFREosVUFBSTBHLE9BQUo7O0FBRUEsVUFBSSxDQUFDcVQsT0FBTCxFQUFjO0FBQ1osZUFBTy9aLElBQUloQyxNQUFKLEdBQVlnQyxJQUFJLENBQUosQ0FBWixHQUFvQixJQUEzQjtBQUNEOztBQUVELGFBQU9BLEdBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7OzBCQU1NUCxJLEVBQU0yYSxPLEVBQVM7QUFDbkIsVUFBSSxDQUFDLEtBQUt4UCxXQUFWLEVBQXVCO0FBQ3JCLGNBQU0sSUFBSXJMLEtBQUosMkZBQU47QUFDRDs7QUFFRCxVQUFNMkYsT0FBTyxHQUFHQyxLQUFILENBQVNDLElBQVQsQ0FBY1YsU0FBZCxDQUFiOztBQUVBLFVBQUksT0FBT2pGLElBQVAsSUFBZSxVQUFuQixFQUErQjtBQUM3QnlGLGFBQUttVixPQUFMLENBQWEsR0FBYjtBQUNBRCxrQkFBVTNhLElBQVY7QUFDRDs7QUFFRCxhQUFPLE9BQU8yYSxPQUFQLEtBQW1CLFVBQW5CLEdBQStCLEtBQUtFLGlCQUFMLGdDQUEwQnBWLElBQTFCLEVBQS9CLEdBQWdFLEtBQUtxVixhQUFMLGdDQUFzQnJWLElBQXRCLEVBQXZFO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozt5QkFNS3pGLEksRUFBTTJhLE8sRUFBUztBQUNsQixVQUFJLENBQUMsS0FBS3hQLFdBQVYsRUFBdUI7QUFDckIsY0FBTSxJQUFJckwsS0FBSiwwRkFBTjtBQUNEOztBQUVELFVBQU0yRixPQUFPLEdBQUdDLEtBQUgsQ0FBU0MsSUFBVCxDQUFjVixTQUFkLENBQWI7O0FBRUEsVUFBSSxPQUFPakYsSUFBUCxJQUFlLFVBQW5CLEVBQStCO0FBQzdCeUYsYUFBS21WLE9BQUwsQ0FBYSxHQUFiO0FBQ0FELGtCQUFVM2EsSUFBVjtBQUNEOztBQUVELGFBQU8sT0FBTzJhLE9BQVAsS0FBbUIsVUFBbkIsR0FBK0IsS0FBS0ksZ0JBQUwsZ0NBQXlCdFYsSUFBekIsRUFBL0IsR0FBK0QsS0FBS3VWLFlBQUwsZ0NBQXFCdlYsSUFBckIsRUFBdEU7QUFDRDs7QUFFRDs7Ozs7Ozs7OzRCQU1RekYsSSxFQUFNMmEsTyxFQUFTO0FBQ3JCLFVBQUksQ0FBQyxLQUFLeFAsV0FBVixFQUF1QjtBQUNyQixjQUFNLElBQUlyTCxLQUFKLDZGQUFOO0FBQ0Q7O0FBRUQsVUFBTTJGLE9BQU8sR0FBR0MsS0FBSCxDQUFTQyxJQUFULENBQWNWLFNBQWQsQ0FBYjs7QUFFQSxVQUFJLE9BQU9qRixJQUFQLElBQWUsVUFBbkIsRUFBK0I7QUFDN0J5RixhQUFLbVYsT0FBTCxDQUFhLEdBQWI7QUFDQUQsa0JBQVUzYSxJQUFWO0FBQ0Q7O0FBRUQsYUFBTyxPQUFPMmEsT0FBUCxLQUFtQixVQUFuQixHQUErQixLQUFLTSxtQkFBTCxhQUE0QmhXLFNBQTVCLENBQS9CLEdBQXVFLEtBQUtpVyxlQUFMLGFBQXdCalcsU0FBeEIsQ0FBOUU7QUFDRDs7QUFFRDs7Ozs7Ozs7OzJCQU1PakYsSSxFQUFNMmEsTyxFQUFTO0FBQ3BCLFVBQUksQ0FBQyxLQUFLeFAsV0FBVixFQUF1QjtBQUNyQixjQUFNLElBQUlyTCxLQUFKLDRGQUFOO0FBQ0Q7O0FBRUQsVUFBTTJGLE9BQU8sR0FBR0MsS0FBSCxDQUFTQyxJQUFULENBQWNWLFNBQWQsQ0FBYjs7QUFFQSxVQUFJLE9BQU9qRixJQUFQLElBQWUsVUFBbkIsRUFBK0I7QUFDN0J5RixhQUFLbVYsT0FBTCxDQUFhLEdBQWI7QUFDQUQsa0JBQVUzYSxJQUFWO0FBQ0Q7O0FBRUQsYUFBTyxPQUFPMmEsT0FBUCxLQUFtQixVQUFuQixHQUErQixLQUFLUSxrQkFBTCxhQUEyQmxXLFNBQTNCLENBQS9CLEdBQXNFLEtBQUttVyxjQUFMLGFBQXVCblcsU0FBdkIsQ0FBN0U7QUFDRDs7QUFFRDs7Ozs7Ozs7OzRCQU1RekIsUSxFQUFVO0FBQ2hCLFVBQUksT0FBT0EsUUFBUCxJQUFtQixVQUF2QixFQUFtQztBQUNqQyxlQUFPQSxTQUFTLElBQVQsQ0FBUDtBQUNEOztBQUVELGFBQU8sS0FBS2hFLEVBQUwsQ0FBUStELE9BQVIsQ0FBZ0JDLFFBQWhCLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs2QkFPcUM7QUFBQSxVQUE5QkEsUUFBOEIsdUVBQW5CLEVBQW1CO0FBQUEsVUFBZitXLE1BQWUsdUVBQU4sSUFBTTs7QUFDbkMsYUFBTyxLQUFLYyxXQUFMLENBQWlCN1gsUUFBakIsRUFBMkIsS0FBM0IsRUFBa0MrVyxNQUFsQyxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7OEJBT3NDO0FBQUEsVUFBOUIvVyxRQUE4Qix1RUFBbkIsRUFBbUI7QUFBQSxVQUFmK1csTUFBZSx1RUFBTixJQUFNOztBQUNwQyxhQUFPLEtBQUtjLFdBQUwsQ0FBaUI3WCxRQUFqQixFQUEyQixJQUEzQixFQUFpQytXLE1BQWpDLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs0QkFPb0M7QUFBQSxVQUE5Qi9XLFFBQThCLHVFQUFuQixFQUFtQjtBQUFBLFVBQWYrVyxNQUFlLHVFQUFOLElBQU07O0FBQ2xDLGFBQU8sS0FBS2UsYUFBTCxDQUFtQjlYLFFBQW5CLEVBQTZCLEtBQTdCLEVBQW9DK1csTUFBcEMsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7OytCQU91QztBQUFBLFVBQTlCL1csUUFBOEIsdUVBQW5CLEVBQW1CO0FBQUEsVUFBZitXLE1BQWUsdUVBQU4sSUFBTTs7QUFDckMsYUFBTyxLQUFLZSxhQUFMLENBQW1COVgsUUFBbkIsRUFBNkIsSUFBN0IsRUFBbUMrVyxNQUFuQyxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs2QkFNc0I7QUFBQSxVQUFmL1csUUFBZSx1RUFBSixFQUFJOztBQUNwQixhQUFPLEtBQUsrWCxTQUFMLENBQWUvWCxRQUFmLEVBQXlCLElBQXpCLEVBQStCLEtBQS9CLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7OzRCQU1xQjtBQUFBLFVBQWZBLFFBQWUsdUVBQUosRUFBSTs7QUFDbkIsYUFBTyxLQUFLK1gsU0FBTCxDQUFlL1gsUUFBZixFQUF5QixJQUF6QixFQUErQixJQUEvQixDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OzsyQkFNb0I7QUFBQSxVQUFmQSxRQUFlLHVFQUFKLEVBQUk7O0FBQ2xCLGFBQU8sS0FBSytYLFNBQUwsQ0FBZS9YLFFBQWYsRUFBeUIsS0FBekIsRUFBZ0MsS0FBaEMsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7MkJBTW9CO0FBQUEsVUFBZkEsUUFBZSx1RUFBSixFQUFJOztBQUNsQixhQUFPLEtBQUsrWCxTQUFMLENBQWUvWCxRQUFmLEVBQXlCLEtBQXpCLEVBQWdDLElBQWhDLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7NkJBS1M2SixNLEVBQVE7QUFDZkEsYUFBT21PLFdBQVAsQ0FBbUIsS0FBS2hjLEVBQXhCO0FBQ0EsYUFBTzNFLGdCQUFNaUosT0FBTixDQUFjLEtBQUt0RSxFQUFuQixFQUF1QixFQUFFa0QsV0FBVyxFQUFFMEosWUFBWSxJQUFkLEVBQW9CRixjQUFjLEtBQWxDLEVBQWIsRUFBdkIsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7NkJBR1M7QUFDUCxXQUFLekksV0FBTCxHQUFtQixJQUFuQjtBQUNEOztBQUVEOzs7Ozs7OEJBR1U7QUFDUixXQUFLRyxTQUFMLEdBQWlCLElBQWpCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OzRCQUtRO0FBQ04sYUFBTyxLQUFLcVcsT0FBTCxDQUFhalYsS0FBYixDQUFtQixJQUFuQixFQUF5QkMsU0FBekIsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs2QkFLUztBQUNQLGFBQU8sS0FBSzhVLFFBQUwsQ0FBYy9VLEtBQWQsQ0FBb0IsSUFBcEIsRUFBMEJDLFNBQTFCLENBQVA7QUFDRDs7OzhCQUVTLENBQUU7OzsrQkFDRCxDQUFFOzs7aUNBQ0EsQ0FBRTs7OytCQUNKLENBQUU7Ozs4QkFDSCxDQUFFOzs7Ozs7QUFsdkZPNUksUyxDQUNaa0gsTyxHQUFVLEU7QUFERWxILFMsQ0FFWndTLGlCLEdBQW9CLEU7QUFGUnhTLFMsQ0FHWnFTLE0sR0FBUyxFO0FBSEdyUyxTLENBSVpvUyxpQixHQUFvQixLO0FBSlJwUyxTLENBS1ppVCxXLEdBQWMsSztBQUxGalQsUyxDQU1ad0UsUSxHQUFXLEU7QUFOQ3hFLFMsQ0FPWnlSLFcsR0FBYyxFO0FBUEZ6UixTLENBUVp1RCxLLEdBQVEsSTtrQkFSSXZELFM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZHJCOzs7Ozs7QUFFQTs7Ozs7QUFLQSxJQUFNSCxRQUFRLEVBQWQ7O0FBRUE7Ozs7Ozs7Ozs7QUFVQUEsTUFBTXVmLEtBQU4sR0FBYyxVQUFVaFYsR0FBVixFQUFlO0FBQzNCLE1BQUksQ0FBQ0EsR0FBRCxJQUFRLFFBQU9BLEdBQVAseUNBQU9BLEdBQVAsT0FBZSxRQUEzQixFQUFxQztBQUNuQyxXQUFPLEVBQVA7QUFDRDs7QUFFRCxNQUFJaVYsVUFBVSxFQUFkO0FBQ0EsTUFBSXBjLE9BQU9wQyxPQUFPb0MsSUFBUCxDQUFZbUgsR0FBWixDQUFYOztBQUVBLE9BQUssSUFBSXBJLElBQUksQ0FBUixFQUFXQyxJQUFJZ0IsS0FBS2YsTUFBekIsRUFBaUNGLElBQUlDLENBQXJDLEVBQXdDRCxHQUF4QyxFQUE2QztBQUMzQyxRQUFJaUQsSUFBSWhDLEtBQUtqQixDQUFMLENBQVI7QUFDQSxRQUFJb0QsTUFBTWdGLElBQUluRixDQUFKLENBQVY7QUFDQUcsV0FBT2lhLFFBQVFoZCxJQUFSLENBQWE0QyxDQUFiLENBQVA7QUFDRDs7QUFFRCxTQUFPb2EsUUFBUWhjLElBQVIsQ0FBYSxHQUFiLENBQVA7QUFDRCxDQWZEOztBQWlCQTs7Ozs7Ozs7OztBQVVBeEQsTUFBTXlmLEtBQU4sR0FBYyxVQUFTbFYsR0FBVCxFQUFjO0FBQzFCLE1BQUksQ0FBQ0EsR0FBRCxJQUFRLFFBQU9BLEdBQVAseUNBQU9BLEdBQVAsT0FBZSxRQUEzQixFQUFxQztBQUNuQyxXQUFPLEVBQVA7QUFDRDs7QUFFRCxNQUFJbVYsU0FBUyxFQUFiO0FBQ0EsTUFBSXRjLE9BQU9wQyxPQUFPb0MsSUFBUCxDQUFZbUgsR0FBWixDQUFYOztBQUVBLE9BQUssSUFBSXBJLElBQUksQ0FBUixFQUFXQyxJQUFJZ0IsS0FBS2YsTUFBekIsRUFBaUNGLElBQUlDLENBQXJDLEVBQXdDRCxHQUF4QyxFQUE2QztBQUMzQyxRQUFJaUQsSUFBSWhDLEtBQUtqQixDQUFMLENBQVI7QUFDQSxRQUFJb0QsTUFBTWdGLElBQUluRixDQUFKLENBQVY7QUFDQUcsV0FBT21hLE9BQU9sZCxJQUFQLENBQWUsS0FBS3FFLFVBQUwsQ0FBZ0J6QixDQUFoQixDQUFmLFNBQXFDRyxHQUFyQyxDQUFQO0FBQ0Q7O0FBRUQsU0FBT21hLE9BQU9sYyxJQUFQLENBQVksR0FBWixDQUFQO0FBQ0QsQ0FmRDs7QUFpQkE7Ozs7Ozs7Ozs7Ozs7OztBQWVBeEQsTUFBTStPLEtBQU4sR0FBYyxVQUFTL0osR0FBVCxFQUFzQztBQUFBLE1BQXhCMmEsR0FBd0IsdUVBQWxCLEVBQWtCO0FBQUEsTUFBZEMsT0FBYyx1RUFBSixFQUFJOztBQUNuRCxNQUFNOVEsT0FBTyxFQUFiO0FBQ0MsTUFBSTBPLE9BQU8sRUFBWDs7QUFFQSxNQUFHLENBQUNtQyxHQUFKLEVBQVM7QUFDUCxXQUFPM2EsSUFBSStKLEtBQUosQ0FBVSxFQUFWLENBQVA7QUFDRCxHQUZELE1BR0ssSUFBRzRRLGVBQWVwUixNQUFsQixFQUEwQjtBQUM3QixXQUFPdkosSUFBSStKLEtBQUosQ0FBVTRRLEdBQVYsQ0FBUDtBQUNELEdBRkksTUFHQSxJQUFHM2EsSUFBSWtHLE9BQUosQ0FBWXlVLEdBQVosS0FBb0IsQ0FBQyxDQUF4QixFQUEyQjtBQUM5Qm5DLFdBQU94WSxHQUFQO0FBQ0QsR0FGSSxNQUdBO0FBQ0gsUUFBTVgsTUFBTVcsSUFBSStKLEtBQUosQ0FBVSxFQUFWLENBQVo7QUFDQSxRQUFJOFEsT0FBTyxFQUFYOztBQUVBLFNBQUksSUFBSTFkLElBQUksQ0FBUixFQUFXQyxJQUFJaUMsSUFBSWhDLE1BQXZCLEVBQStCRixJQUFJQyxDQUFuQyxFQUFzQ0QsR0FBdEMsRUFBMkM7QUFDekMsVUFBSW9ELE1BQU1sQixJQUFJbEMsQ0FBSixDQUFWO0FBQ0EsVUFBSTZILFFBQVE0VixRQUFRMVUsT0FBUixDQUFnQjNGLEdBQWhCLENBQVo7O0FBRUEsVUFBR3lFLFFBQVEsQ0FBQyxDQUFULEtBQWUsQ0FBQzZWLElBQUQsSUFBU0EsUUFBUXRhLEdBQWhDLENBQUgsRUFBeUM7QUFDdkMsU0FBQ3NhLElBQUQsR0FBT0EsT0FBT0QsUUFBUTVWLEtBQVIsQ0FBZCxHQUE4QjZWLE9BQU8sRUFBckM7QUFDRDs7QUFFRCxVQUFHdGEsT0FBT29hLEdBQVAsSUFBYyxDQUFDRSxJQUFsQixFQUF3QjtBQUN0Qi9RLGFBQUt0TSxJQUFMLENBQVVnYixJQUFWO0FBQ0FBLGVBQU8sRUFBUDtBQUNBO0FBQ0Q7O0FBRURBLGNBQVFqWSxHQUFSO0FBQ0Q7QUFDRjs7QUFFRGlZLFVBQVExTyxLQUFLdE0sSUFBTCxDQUFVZ2IsSUFBVixDQUFSO0FBQ0EsU0FBTzFPLElBQVA7QUFDRCxDQXJDRDs7QUF1Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9DQTlPLE1BQU1vYyxNQUFOLEdBQWUsVUFBVS9YLEdBQVYsRUFBZW9hLE9BQWYsRUFBcUM7QUFBQSxNQUFicmIsSUFBYSx1RUFBTixJQUFNOztBQUNsRCxNQUFJOEIsTUFBTSxFQUFWOztBQUVBLE1BQUk5QixRQUFRLENBQUNSLE1BQU1rSCxPQUFOLENBQWMxRyxJQUFkLENBQWIsRUFBa0M7QUFDaENBLFdBQU8sQ0FBQ0EsSUFBRCxDQUFQO0FBQ0Q7O0FBRUQsTUFBRyxPQUFPcWIsT0FBUCxJQUFrQixVQUFyQixFQUFpQztBQUMvQixRQUFNelosTUFBTXlaLFVBQVMsQ0FBQ0EsVUFBVSxFQUFYLEVBQWV6WCxXQUFmLEVBQVQsR0FBdUMsRUFBbkQ7QUFDQXlYLGNBQVU7QUFBQSxhQUFPLENBQUNsWixNQUFLLENBQUNBLE1BQU0sRUFBUCxFQUFXeUIsV0FBWCxFQUFMLEdBQStCLEVBQWhDLEVBQW9DOFksS0FBcEMsQ0FBMEM5YSxHQUExQyxDQUFQO0FBQUEsS0FBVjtBQUNEOztBQUVELE9BQUssSUFBSTdDLElBQUksQ0FBUixFQUFXQyxJQUFJaUMsSUFBSWhDLE1BQXhCLEVBQWdDRixJQUFJQyxDQUFwQyxFQUF1Q0QsR0FBdkMsRUFBNEM7QUFDMUMsUUFBSTRkLE9BQU8xYixJQUFJbEMsQ0FBSixDQUFYO0FBQ0EsUUFBSTZkLFdBQVcsS0FBZjs7QUFFQSxRQUFHLENBQUM1YyxJQUFELElBQVNxYixRQUFRc0IsSUFBUixDQUFaLEVBQTJCO0FBQ3pCQyxpQkFBVyxJQUFYO0FBQ0QsS0FGRCxNQUdLLElBQUc1YyxJQUFILEVBQVM7QUFDWixXQUFJLElBQUlnQyxJQUFJLENBQVIsRUFBV3NGLElBQUl0SCxLQUFLZixNQUF4QixFQUFnQytDLElBQUlzRixDQUFwQyxFQUF1Q3RGLEdBQXZDLEVBQTRDO0FBQzFDLFlBQUl0RixNQUFNc0QsS0FBS2dDLENBQUwsQ0FBVjtBQUNBdEYsY0FBTThDLE1BQU1rSCxPQUFOLENBQWNoSyxHQUFkLElBQW9CQSxHQUFwQixHQUF5QixDQUFDQSxHQUFELENBQS9CO0FBQ0EsWUFBSXlGLE1BQU16RixNQUFLLEtBQUswRixpQkFBTCxDQUF1QjFGLEdBQXZCLEVBQTRCaWdCLElBQTVCLENBQUwsR0FBd0NBLElBQWxEOztBQUVBLFlBQUl0QixRQUFRbFosR0FBUixDQUFKLEVBQWtCO0FBQ2hCeWEscUJBQVcsSUFBWDtBQUNBO0FBQ0Q7QUFDRjtBQUNGOztBQUVEQSxnQkFBWTlhLElBQUkxQyxJQUFKLENBQVN1ZCxJQUFULENBQVo7QUFDRDs7QUFFRCxTQUFPN2EsR0FBUDtBQUNELENBcENEOztBQXNDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0NBbEYsTUFBTTJiLElBQU4sR0FBYSxVQUFTdFgsR0FBVCxFQUF1QztBQUFBOztBQUFBLE1BQXpCakIsSUFBeUIsdUVBQWxCLElBQWtCO0FBQUEsTUFBWjZjLEtBQVksdUVBQUosRUFBSTs7QUFDbEQ1YixRQUFNQSxJQUFJbUYsS0FBSixFQUFOOztBQUVBLE1BQUlwRyxTQUFTLElBQWIsRUFBbUI7QUFDakJBLFdBQU8sRUFBUDtBQUNBNmMsWUFBUSxDQUFDLElBQUQsQ0FBUjtBQUNELEdBSEQsTUFJSyxJQUFJN2MsU0FBUyxLQUFiLEVBQW9CO0FBQ3ZCQSxXQUFPLEVBQVA7QUFDQTZjLFlBQVEsQ0FBQyxLQUFELENBQVI7QUFDRDs7QUFFRCxNQUFJLENBQUNyZCxNQUFNa0gsT0FBTixDQUFjMUcsSUFBZCxDQUFMLEVBQTBCO0FBQ3hCQSxXQUFPLENBQUNBLElBQUQsQ0FBUDtBQUNEOztBQUVELE1BQUksQ0FBQ1IsTUFBTWtILE9BQU4sQ0FBY21XLEtBQWQsQ0FBTCxFQUEyQjtBQUN6QkEsWUFBUSxDQUFDQSxLQUFELENBQVI7QUFDRDs7QUFFRCxNQUFJN2QsSUFBSWdCLEtBQUtmLE1BQWI7O0FBRUFnQyxNQUFJc1gsSUFBSixDQUFTLFVBQUN1RSxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNqQixRQUFJaGUsSUFBSSxDQUFSOztBQUVBLFFBQU1tQyxRQUFRLFNBQVJBLEtBQVEsQ0FBQzRiLENBQUQsRUFBSUMsQ0FBSixFQUEyQjtBQUFBLFVBQXBCcFYsT0FBb0IsdUVBQVYsS0FBVTs7QUFDdkMsVUFBSW1WLGFBQWFuRSxJQUFqQixFQUF1QjtBQUNyQm1FLFlBQUlBLEVBQUVuRCxPQUFGLEVBQUo7QUFDRDs7QUFFRCxVQUFJb0QsYUFBYXBFLElBQWpCLEVBQXVCO0FBQ3JCb0UsWUFBSUEsRUFBRXBELE9BQUYsRUFBSjtBQUNEOztBQUVELFVBQUltRCxJQUFJQyxDQUFSLEVBQVc7QUFDVCxlQUFPcFYsVUFBUyxDQUFDLENBQVYsR0FBYSxDQUFwQjtBQUNELE9BRkQsTUFHSyxJQUFJbVYsSUFBSUMsQ0FBUixFQUFXO0FBQ2QsZUFBT3BWLFVBQVMsQ0FBVCxHQUFZLENBQUMsQ0FBcEI7QUFDRDs7QUFFRCxhQUFPLENBQVA7QUFDRCxLQWpCRDs7QUFtQkEsUUFBTXFWLE9BQU8sU0FBUEEsSUFBTyxHQUFNO0FBQ2pCLFVBQUlqZSxLQUFLQyxDQUFULEVBQVk7QUFDVixlQUFPLENBQVA7QUFDRDs7QUFFRCxVQUFJdEMsTUFBTXNELEtBQUtqQixDQUFMLENBQVY7O0FBRUEsVUFBSSxDQUFDUyxNQUFNa0gsT0FBTixDQUFjaEssR0FBZCxDQUFMLEVBQXlCO0FBQ3ZCQSxjQUFNLENBQUNBLEdBQUQsQ0FBTjtBQUNEOztBQUVELFVBQUl1Z0IsS0FBSyxNQUFLN2EsaUJBQUwsQ0FBdUIxRixHQUF2QixFQUE0Qm9nQixDQUE1QixDQUFUO0FBQ0EsVUFBSUksS0FBSyxNQUFLOWEsaUJBQUwsQ0FBdUIxRixHQUF2QixFQUE0QnFnQixDQUE1QixDQUFUO0FBQ0EsVUFBSWpiLE1BQU1aLE1BQU0rYixFQUFOLEVBQVVDLEVBQVYsRUFBY0wsTUFBTTlkLENBQU4sTUFBYSxLQUEzQixDQUFWOztBQUVBLFVBQUkrQyxRQUFRLENBQVosRUFBZTtBQUNiLGVBQU9BLEdBQVA7QUFDRDs7QUFFRC9DO0FBQ0EsYUFBT2llLE1BQVA7QUFDRCxLQXJCRDs7QUF1QkEsUUFBSSxDQUFDaGUsQ0FBTCxFQUFRO0FBQ04sYUFBT2tDLE1BQU00YixDQUFOLEVBQVNDLENBQVQsRUFBWUYsTUFBTTlkLENBQU4sTUFBYSxLQUF6QixDQUFQO0FBQ0Q7O0FBRUQsV0FBT2llLE1BQVA7QUFDRCxHQWxERDs7QUFvREEsU0FBTy9iLEdBQVA7QUFDRCxDQTNFRDs7QUE2RUE7Ozs7Ozs7Ozs7QUFVQXJFLE1BQU11Z0IsV0FBTixHQUFvQixVQUFTaFcsR0FBVCxFQUFjbkgsSUFBZCxFQUFvQjtBQUN0QyxNQUFJb2QsU0FBUyxFQUFiO0FBQ0EsTUFBSUMsVUFBVXpmLE9BQU9vQyxJQUFQLENBQVltSCxHQUFaLENBQWQ7O0FBRUEsT0FBSSxJQUFJcEksSUFBSSxDQUFSLEVBQVdDLElBQUlxZSxRQUFRcGUsTUFBM0IsRUFBbUNGLElBQUlDLENBQXZDLEVBQTBDRCxHQUExQyxFQUErQztBQUM3QyxRQUFJckMsTUFBTTJnQixRQUFRdGUsQ0FBUixDQUFWOztBQUVBLFFBQUdpQixLQUFLOEgsT0FBTCxDQUFhcEwsR0FBYixLQUFxQixDQUFDLENBQXpCLEVBQTRCO0FBQzFCMGdCLGFBQU8xZ0IsR0FBUCxJQUFjeUssSUFBSXpLLEdBQUosQ0FBZDtBQUNEO0FBQ0Y7O0FBRUQsU0FBTzBnQixNQUFQO0FBQ0QsQ0FiRDs7QUFlQTs7Ozs7Ozs7OztBQVVBeGdCLE1BQU0wZ0IsV0FBTixHQUFvQixVQUFTblcsR0FBVCxFQUFjbkgsSUFBZCxFQUFvQjtBQUN0QyxNQUFJb2QsU0FBUyxFQUFiO0FBQ0EsTUFBSUMsVUFBVXpmLE9BQU9vQyxJQUFQLENBQVltSCxHQUFaLENBQWQ7O0FBRUEsT0FBSSxJQUFJcEksSUFBSSxDQUFSLEVBQVdDLElBQUlxZSxRQUFRcGUsTUFBM0IsRUFBbUNGLElBQUlDLENBQXZDLEVBQTBDRCxHQUExQyxFQUErQztBQUM3QyxRQUFJckMsTUFBTTJnQixRQUFRdGUsQ0FBUixDQUFWOztBQUVBLFFBQUdpQixLQUFLOEgsT0FBTCxDQUFhcEwsR0FBYixLQUFxQixDQUFDLENBQXpCLEVBQTRCO0FBQzFCMGdCLGFBQU8xZ0IsR0FBUCxJQUFjeUssSUFBSXpLLEdBQUosQ0FBZDtBQUNEO0FBQ0Y7O0FBRUQsU0FBTzBnQixNQUFQO0FBQ0QsQ0FiRDs7QUFlQTs7Ozs7O0FBTUF4Z0IsTUFBTXlWLFlBQU4sR0FBcUIsVUFBU2xRLEdBQVQsRUFBYztBQUNqQyxTQUFPLENBQUMsRUFBRUEsT0FBTyxRQUFPQSxHQUFQLHlDQUFPQSxHQUFQLE1BQWMsUUFBckIsSUFBaUNBLElBQUlzRCxTQUF2QyxDQUFSO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7O0FBTUE3SSxNQUFNdWMsYUFBTixHQUFzQixVQUFTaFMsR0FBVCxFQUFjO0FBQ2xDLFNBQU8sQ0FBQyxFQUFFQSxPQUFPLFFBQU9BLEdBQVAseUNBQU9BLEdBQVAsTUFBYyxRQUFyQixLQUFrQ0EsSUFBSXJCLFdBQUosSUFBbUJsSSxNQUFuQixJQUE2QnVKLElBQUlyQixXQUFKLElBQW1CdEcsS0FBbEYsQ0FBRixDQUFSO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7OztBQU9BNUMsTUFBTThULElBQU4sR0FBYSxVQUFTekosS0FBVCxFQUE4QjtBQUFBOztBQUFBLE1BQWR2TCxPQUFjLHVFQUFKLEVBQUk7O0FBQ3pDLE1BQUksUUFBT3VMLEtBQVAseUNBQU9BLEtBQVAsTUFBZ0IsUUFBaEIsSUFBNEIsQ0FBQ0EsS0FBakMsRUFBd0M7QUFDdEMsV0FBT0EsS0FBUDtBQUNEOztBQUVEdkwsdUJBQVk0ZCxRQUFRLElBQXBCLEVBQTBCdFMsWUFBWSxJQUF0QyxFQUE0Q3dPLE9BQU8sS0FBbkQsSUFBNkQ5WixPQUE3RDs7QUFFQSxNQUFNc2hCLE9BQU8sU0FBUEEsSUFBTyxDQUFDN1YsR0FBRCxFQUFTO0FBQ3BCLFFBQUd6TCxRQUFROFosS0FBUixJQUFpQixDQUFDLE9BQUsyRCxhQUFMLENBQW1CaFMsR0FBbkIsQ0FBckIsRUFBOEM7QUFDNUMsYUFBT0EsR0FBUDtBQUNEOztBQUVEQSxVQUFNLE9BQUtrTCxZQUFMLENBQWtCbEwsR0FBbEIsSUFBd0JBLElBQUl5RCxRQUE1QixHQUFzQ3pELEdBQTVDO0FBQ0EsUUFBSW5ILE9BQU8sQ0FBQ3RFLFFBQVFzTCxVQUFULEdBQXFCcEosT0FBTzJILG1CQUFQLENBQTJCNEIsR0FBM0IsQ0FBckIsR0FBc0R2SixPQUFPb0MsSUFBUCxDQUFZbUgsR0FBWixDQUFqRTtBQUNBLFFBQUlpVyxTQUFTNWQsTUFBTWtILE9BQU4sQ0FBY1MsR0FBZCxJQUFvQixFQUFwQixHQUF3QixFQUFyQzs7QUFFQSxTQUFLLElBQUlwSSxJQUFJLENBQVIsRUFBV0MsSUFBSWdCLEtBQUtmLE1BQXpCLEVBQWlDRixJQUFJQyxDQUFyQyxFQUF3Q0QsR0FBeEMsRUFBNkM7QUFDM0MsVUFBSXJDLE1BQU1zRCxLQUFLakIsQ0FBTCxDQUFWO0FBQ0EsVUFBSW9ELE1BQU1nRixJQUFJekssR0FBSixDQUFWO0FBQ0F5RixZQUFNQSxPQUFPLFFBQU9BLEdBQVAseUNBQU9BLEdBQVAsTUFBYyxRQUFyQixJQUFpQ3pHLFFBQVE0ZCxNQUF6QyxHQUFpRDBELEtBQUs3YSxHQUFMLENBQWpELEdBQTREQSxHQUFsRTs7QUFFQSxVQUFHLENBQUNnRixJQUFJb1csb0JBQUosQ0FBeUI3Z0IsR0FBekIsQ0FBSixFQUFtQztBQUNqQ2tCLGVBQU9tSixjQUFQLENBQXNCcVcsTUFBdEIsRUFBOEIxZ0IsR0FBOUIsZUFDS2tCLE9BQU80Six3QkFBUCxDQUFnQ0wsR0FBaEMsRUFBcUN6SyxHQUFyQyxDQURMO0FBRUV1SyxpQkFBTzlFO0FBRlQ7O0FBS0E7QUFDRDs7QUFFRGliLGFBQU8xZ0IsR0FBUCxJQUFjeUYsR0FBZDtBQUNEOztBQUVELFdBQU9pYixNQUFQO0FBQ0QsR0EzQkQ7O0FBNkJBLFNBQU9KLEtBQUsvVixLQUFMLENBQVA7QUFDRCxDQXJDRDs7QUF1Q0E7Ozs7OztBQU1BckssTUFBTTZWLGtCQUFOLEdBQTJCLFVBQVN4TCxLQUFULEVBQWdCO0FBQ3pDLE1BQUlBLFVBQVUsS0FBVixJQUFtQkEsVUFBVSxJQUE3QixJQUFxQ0EsVUFBVW9ILFNBQW5ELEVBQThEO0FBQzVELFdBQU8sRUFBUDtBQUNEOztBQUVELE1BQUlwSCxpQkFBaUJqSyxzQkFBckIsRUFBbUM7QUFDakMsV0FBTyxnQkFBUDtBQUNEOztBQUVELE1BQUksT0FBT2lLLEtBQVAsSUFBZ0IsVUFBcEIsRUFBZ0M7QUFDOUIsV0FBTyxtQkFBUDtBQUNEOztBQUVELE1BQUksUUFBT0EsS0FBUCx5Q0FBT0EsS0FBUCxNQUFnQixRQUFwQixFQUE4QjtBQUM1QixXQUFPckosT0FBTzJCLFNBQVAsQ0FBaUJZLFFBQWpCLENBQTBCa0csSUFBMUIsQ0FBK0JZLEtBQS9CLENBQVA7QUFDRDs7QUFFRCxTQUFPQSxRQUFRLEVBQWY7QUFDRCxDQWxCRDs7QUFvQkE7Ozs7Ozs7O0FBUUFySyxNQUFNNlQsT0FBTixHQUFnQixVQUFVcU0sQ0FBVixFQUFhQyxDQUFiLEVBQThCO0FBQUEsTUFBZHJoQixPQUFjLHVFQUFKLEVBQUk7O0FBQzVDLE1BQUtvaEIsYUFBYW5FLElBQWQsSUFBd0JvRSxhQUFhcEUsSUFBekMsRUFBZ0Q7QUFDOUMsV0FBT21FLEVBQUVuRCxPQUFGLE9BQWdCb0QsRUFBRXBELE9BQUYsRUFBdkI7QUFDRCxHQUZELE1BR0ssSUFBSSxPQUFPbUQsQ0FBUCxJQUFZLFVBQVosSUFBMEIsT0FBT0MsQ0FBUCxJQUFZLFVBQTFDLEVBQXNEO0FBQ3pELFdBQU9ELEVBQUUzYyxRQUFGLE9BQWlCNGMsRUFBRTVjLFFBQUYsRUFBeEI7QUFDRCxHQUZJLE1BR0EsSUFBSSxRQUFPMmMsQ0FBUCx5Q0FBT0EsQ0FBUCxNQUFZLFFBQVosSUFBd0IsUUFBT0MsQ0FBUCx5Q0FBT0EsQ0FBUCxNQUFZLFFBQXhDLEVBQWtEO0FBQ3JELFFBQUlELE1BQU0sSUFBTixJQUFjQyxNQUFNLElBQXhCLEVBQThCO0FBQzVCLGFBQU9ELE1BQU1DLENBQWI7QUFDRDs7QUFFRHJoQix5QkFBWXNMLFlBQVksSUFBeEIsRUFBOEJ3VyxpQkFBaUIsSUFBL0MsSUFBd0Q5aEIsT0FBeEQ7O0FBRUEsUUFBTStoQixpQkFBaUIsU0FBakJBLGNBQWlCLENBQUN0YixHQUFELEVBQVM7QUFDOUIsVUFBSWdGLE1BQU0zSCxNQUFNa0gsT0FBTixDQUFjdkUsR0FBZCxJQUFvQixFQUFwQixHQUF3QixFQUFsQztBQUNBLFVBQUluQyxPQUFPLENBQUN0RSxRQUFRc0wsVUFBVCxHQUFxQnBKLE9BQU8ySCxtQkFBUCxFQUFyQixHQUFtRDNILE9BQU9vQyxJQUFQLENBQVltQyxHQUFaLENBQTlEOztBQUVBLFdBQUksSUFBSXBELElBQUksQ0FBUixFQUFXQyxJQUFJZ0IsS0FBS2YsTUFBeEIsRUFBZ0NGLElBQUlDLENBQXBDLEVBQXVDRCxHQUF2QyxFQUE0QztBQUMxQyxZQUFJckMsTUFBTXNELEtBQUtqQixDQUFMLENBQVY7QUFDQW9ELFlBQUl6RixHQUFKLE1BQWEyUixTQUFiLEtBQTJCbEgsSUFBSXpLLEdBQUosSUFBV3lGLElBQUl6RixHQUFKLENBQXRDO0FBQ0Q7O0FBRUQsYUFBT3lLLEdBQVA7QUFDRCxLQVZEOztBQVlBLFFBQUd6TCxRQUFROGhCLGVBQVgsRUFBNEI7QUFDMUJWLFVBQUlXLGVBQWVYLENBQWYsQ0FBSjtBQUNBQyxVQUFJVSxlQUFlVixDQUFmLENBQUo7QUFDRDs7QUFFRCxRQUFJVyxRQUFRLENBQUNoaUIsUUFBUXNMLFVBQVQsR0FBcUJwSixPQUFPMkgsbUJBQVAsRUFBckIsR0FBbUQzSCxPQUFPb0MsSUFBUCxDQUFZOGMsQ0FBWixDQUEvRDtBQUNBLFFBQUlhLFFBQVEsQ0FBQ2ppQixRQUFRc0wsVUFBVCxHQUFxQnBKLE9BQU8ySCxtQkFBUCxFQUFyQixHQUFtRDNILE9BQU9vQyxJQUFQLENBQVkrYyxDQUFaLENBQS9EOztBQUVBLFFBQUlXLE1BQU16ZSxNQUFOLElBQWdCMGUsTUFBTTFlLE1BQTFCLEVBQWtDO0FBQ2hDLGFBQU8sS0FBUDtBQUNEOztBQUVENmQsUUFBSSxLQUFLekssWUFBTCxDQUFrQnlLLENBQWxCLElBQXNCQSxFQUFFbFMsUUFBeEIsR0FBa0NrUyxDQUF0QztBQUNBQyxRQUFJLEtBQUsxSyxZQUFMLENBQWtCMEssQ0FBbEIsSUFBc0JBLEVBQUVuUyxRQUF4QixHQUFrQ21TLENBQXRDOztBQUVBLFNBQUksSUFBSWhlLElBQUksQ0FBUixFQUFXQyxJQUFJMGUsTUFBTXplLE1BQXpCLEVBQWlDRixJQUFJQyxDQUFyQyxFQUF3Q0QsR0FBeEMsRUFBNkM7QUFDM0MsVUFBTXJDLE1BQU1naEIsTUFBTTNlLENBQU4sQ0FBWjs7QUFFQSxVQUFJLENBQUMsS0FBSzBSLE9BQUwsQ0FBYXFNLEVBQUVwZ0IsR0FBRixDQUFiLEVBQXFCcWdCLEVBQUVyZ0IsR0FBRixDQUFyQixDQUFMLEVBQW1DO0FBQ2pDLGVBQU8sS0FBUDtBQUNEO0FBQ0Y7O0FBRUQsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsU0FBT29nQixNQUFNQyxDQUFiO0FBQ0QsQ0FyREQ7O0FBdURBOzs7OztBQUtBbmdCLE1BQU00VCxnQkFBTixHQUF5QixVQUFTckosR0FBVCxFQUFjO0FBQ3JDLE1BQUlvSixPQUFPLENBQVg7QUFDQSxNQUFJM08sTUFBTThRLEtBQUtDLFNBQUwsQ0FBZXhMLEdBQWYsQ0FBVjs7QUFFQSxPQUFLLElBQUlwSSxJQUFJLENBQWIsRUFBZ0JBLElBQUk2QyxJQUFJM0MsTUFBeEIsRUFBZ0NGLEdBQWhDLEVBQXFDO0FBQ25DLFFBQUk2ZSxPQUFPaGMsSUFBSWljLFVBQUosQ0FBZTllLENBQWYsQ0FBWDtBQUNBd1IsV0FBUSxDQUFDQSxRQUFRLENBQVQsSUFBY0EsSUFBZixHQUF1QnFOLElBQTlCO0FBQ0FyTixXQUFPQSxPQUFPQSxJQUFkO0FBQ0Q7O0FBRUQsU0FBT0EsT0FBTyxFQUFkO0FBQ0QsQ0FYRDs7QUFhQTs7Ozs7Ozs7OztBQVVBM1QsTUFBTWtoQixrQkFBTixHQUEyQixVQUFTM1UsSUFBVCxFQUFlO0FBQ3hDLE1BQUlqSixLQUFLNEksU0FBU2lWLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVDtBQUNBLE1BQUk5VyxjQUFKO0FBQ0EvRyxLQUFHOGQsV0FBSCxHQUFpQjdVLElBQWpCO0FBQ0FsQyxVQUFRL0csR0FBR3VCLFNBQVg7QUFDQXZCLEtBQUcrRixNQUFIO0FBQ0EvRixPQUFLLElBQUw7QUFDQSxTQUFPK0csS0FBUDtBQUNELENBUkQ7O0FBVUE7Ozs7Ozs7Ozs7QUFVQXJLLE1BQU1xaEIsa0JBQU4sR0FBMkIsVUFBUzlVLElBQVQsRUFBZTtBQUN4QyxNQUFJakosS0FBSzRJLFNBQVNpVixhQUFULENBQXVCLFVBQXZCLENBQVQ7QUFDQSxNQUFJOVcsY0FBSjtBQUNBL0csS0FBR3VCLFNBQUgsR0FBZTBILElBQWY7QUFDQWxDLFVBQVEvRyxHQUFHK0csS0FBWDtBQUNBL0csS0FBRytGLE1BQUg7QUFDQS9GLE9BQUssSUFBTDtBQUNBLFNBQU8rRyxLQUFQO0FBQ0QsQ0FSRDs7QUFVQTs7Ozs7O0FBTUFySyxNQUFNdVksV0FBTixHQUFvQixVQUFTdlQsR0FBVCxFQUFjO0FBQ2hDLFNBQU9BLElBQUlKLE9BQUosQ0FBWSxTQUFaLEVBQXVCLFVBQUMrUCxDQUFELEVBQUlqSyxDQUFKO0FBQUEsV0FBVUEsRUFBRTRXLFdBQUYsRUFBVjtBQUFBLEdBQXZCLENBQVA7QUFDRCxDQUZEOztBQUlBOzs7Ozs7QUFNQXRoQixNQUFNa2MsVUFBTixHQUFtQixVQUFTbFgsR0FBVCxFQUFjO0FBQy9CLFNBQU9BLElBQUksQ0FBSixFQUFPc2MsV0FBUCxLQUF1QnRjLElBQUl3RSxLQUFKLENBQVUsQ0FBVixDQUE5QjtBQUNELENBRkQ7O0FBSUE7Ozs7OztBQU1BeEosTUFBTTZHLFVBQU4sR0FBbUIsVUFBUzdCLEdBQVQsRUFBYztBQUMvQixTQUFPQSxJQUFJSixPQUFKLENBQVksVUFBWixFQUF3QixVQUFDK1AsQ0FBRCxFQUFJakssQ0FBSjtBQUFBLGlCQUFjQSxFQUFFMUQsV0FBRixFQUFkO0FBQUEsR0FBeEIsQ0FBUDtBQUNELENBRkQ7O0FBSUE7Ozs7Ozs7Ozs7O0FBV0FoSCxNQUFNd0YsaUJBQU4sR0FBMEIsVUFBU3BDLElBQVQsRUFBZW1lLE1BQWYsRUFBdUI7QUFDL0MsTUFBSS9XLGdCQUFKO0FBQ0EsTUFBSW5JLFNBQVNlLEtBQUtmLE1BQWxCO0FBQ0EsTUFBSUYsSUFBSSxDQUFSOztBQUVBaUIsT0FBS29lLE1BQUwsQ0FBWSxVQUFDQyxDQUFELEVBQUlyYyxDQUFKLEVBQVU7QUFDcEJqRDs7QUFFQSxRQUFJLFFBQU9zZixDQUFQLHlDQUFPQSxDQUFQLE1BQVksUUFBaEIsRUFBMEI7QUFDeEIsYUFBT0EsQ0FBUDtBQUNEOztBQUVELFFBQUlBLEVBQUVyYyxDQUFGLE1BQVNxTSxTQUFiLEVBQXdCO0FBQ3RCLGFBQU8sRUFBUDtBQUNEOztBQUVBdFAsU0FBS0UsTUFBTixLQUFrQm1JLFVBQVVpWCxFQUFFcmMsQ0FBRixDQUE1QjtBQUNBLFdBQU9xYyxFQUFFcmMsQ0FBRixDQUFQO0FBQ0QsR0FiRCxFQWFHbWMsTUFiSDs7QUFlQSxTQUFPL1csT0FBUDtBQUNELENBckJEOztBQXVCQTs7Ozs7Ozs7Ozs7QUFXQXhLLE1BQU00WCxpQkFBTixHQUEwQixVQUFTeFUsSUFBVCxFQUFlbWUsTUFBZixFQUF1QjtBQUMvQyxNQUFJRyxNQUFNLEtBQVY7QUFDQSxNQUFJcmYsU0FBU2UsS0FBS2YsTUFBbEI7QUFDQSxNQUFJRixJQUFJLENBQVI7O0FBRUFpQixPQUFLb2UsTUFBTCxDQUFZLFVBQUNDLENBQUQsRUFBSXJjLENBQUosRUFBVTtBQUNwQmpEOztBQUVBLFFBQUksUUFBT3NmLENBQVAseUNBQU9BLENBQVAsTUFBWSxRQUFoQixFQUEwQjtBQUN4QixhQUFPLENBQUMsQ0FBQ0EsQ0FBVDtBQUNEOztBQUVELFFBQUksQ0FBQ0EsRUFBRXBjLGNBQUYsQ0FBaUJELENBQWpCLENBQUwsRUFBMEI7QUFDeEIsYUFBTyxFQUFQO0FBQ0Q7O0FBRUFqRCxTQUFLRSxNQUFOLEtBQWtCcWYsTUFBTUQsRUFBRXBjLGNBQUYsQ0FBaUJELENBQWpCLENBQXhCO0FBQ0EsV0FBT3FjLEVBQUVyYyxDQUFGLENBQVA7QUFDRCxHQWJELEVBYUdtYyxNQWJIOztBQWVBLFNBQU9HLEdBQVA7QUFDRCxDQXJCRDs7QUF1QkE7Ozs7Ozs7Ozs7Ozs7QUFhQTFoQixNQUFNdWQsaUJBQU4sR0FBMEIsVUFBU25hLElBQVQsRUFBZW1lLE1BQWYsRUFBdUJoZixFQUF2QixFQUEyQjtBQUNuRCxNQUFJaUksVUFBVWlILFNBQWQ7QUFDQSxNQUFJcFAsU0FBU2UsS0FBS2YsTUFBbEI7QUFDQSxNQUFJRixJQUFJLENBQVI7O0FBRUFpQixPQUFLb2UsTUFBTCxDQUFZLFVBQUNDLENBQUQsRUFBSXJjLENBQUosRUFBVTtBQUNwQmpEOztBQUVBLFFBQUksUUFBT3NmLENBQVAseUNBQU9BLENBQVAsTUFBWSxRQUFoQixFQUEwQjtBQUN4QjtBQUNEOztBQUVELFFBQUksQ0FBQ0EsRUFBRXBjLGNBQUYsQ0FBaUJELENBQWpCLENBQUwsRUFBMEI7QUFDeEJxYyxRQUFFcmMsQ0FBRixJQUFPcU0sU0FBUDtBQUNEOztBQUVEZ1EsTUFBRXJjLENBQUYsSUFBTzdDLEdBQUdKLEtBQUtFLE1BQVIsRUFBZ0JvZixFQUFFcmMsQ0FBRixDQUFoQixDQUFQO0FBQ0FvRixjQUFVaVgsQ0FBVjtBQUNBLFdBQU9BLEVBQUVyYyxDQUFGLENBQVA7QUFDRCxHQWRELEVBY0dtYyxNQWRIOztBQWdCQSxTQUFPL1csT0FBUDtBQUNELENBdEJEOztBQXdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBeEssTUFBTStYLG9CQUFOLEdBQTZCLFVBQVMzVSxJQUFULEVBQWVtZSxNQUFmLEVBQXVCaGYsRUFBdkIsRUFBMkI7QUFDdEQsTUFBSUYsU0FBU2UsS0FBS2YsTUFBbEI7QUFDQSxNQUFJZ0ksY0FBSjtBQUNBLE1BQUlsSSxJQUFJLENBQVI7O0FBRUFpQixPQUFLb2UsTUFBTCxDQUFZLFVBQUNDLENBQUQsRUFBSXJjLENBQUosRUFBVTtBQUNwQmpEOztBQUVBLFFBQUksUUFBT3NmLENBQVAseUNBQU9BLENBQVAsTUFBWSxRQUFoQixFQUEwQjtBQUN4QjtBQUNEOztBQUVELFFBQUksQ0FBQ0EsRUFBRXBjLGNBQUYsQ0FBaUJELENBQWpCLENBQUwsRUFBMEI7QUFDeEIsYUFBTyxFQUFQO0FBQ0Q7O0FBRUQsUUFBSWpELEtBQUtFLE1BQVQsRUFBaUI7QUFDZmdJLGNBQVFvWCxFQUFFcmMsQ0FBRixDQUFSO0FBQ0EsT0FBQyxDQUFDN0MsRUFBRCxJQUFPQSxHQUFHOEgsS0FBSCxDQUFSLEtBQXVCLE9BQU9vWCxFQUFFcmMsQ0FBRixDQUE5QjtBQUNBLGFBQU9pRixLQUFQO0FBQ0Q7O0FBRUQsV0FBT29YLEVBQUVyYyxDQUFGLENBQVA7QUFDRCxHQWxCRCxFQWtCR21jLE1BbEJIOztBQW9CQSxTQUFPbFgsS0FBUDtBQUNELENBMUJEOztBQTZCQTs7Ozs7Ozs7QUFRQXJLLE1BQU0yYSwyQkFBTixHQUFvQyxVQUFTWCxNQUFULEVBQWlCbGEsR0FBakIsRUFBc0I7QUFDeEQsTUFBTXdFLFFBQVEsU0FBUkEsS0FBUSxDQUFDaUcsR0FBRCxFQUFTO0FBQ3JCLFFBQUlBLElBQUlvVyxvQkFBSixDQUF5QjdnQixHQUF6QixDQUFKLEVBQW1DO0FBQ2pDLGFBQU95SyxHQUFQO0FBQ0Q7O0FBRUQsUUFBSW9YLFFBQVEzZ0IsT0FBTzRnQixjQUFQLENBQXNCclgsR0FBdEIsQ0FBWjs7QUFFQSxRQUFJLENBQUNvWCxLQUFMLEVBQVk7QUFDVixhQUFPLElBQVA7QUFDRDs7QUFFRCxXQUFPcmQsTUFBTXFkLEtBQU4sQ0FBUDtBQUNELEdBWkQ7O0FBY0EsU0FBT3JkLE1BQU0wVixNQUFOLENBQVA7QUFDRCxDQWhCRDs7QUFrQkE7Ozs7Ozs7QUFPQWhhLE1BQU11YSxvQkFBTixHQUE2QixVQUFTUCxNQUFULEVBQWlCbGEsR0FBakIsRUFBc0I7QUFDakQsTUFBTXdFLFFBQVEsU0FBUkEsS0FBUSxDQUFDaUcsR0FBRCxFQUFTO0FBQ3JCLFFBQUlBLElBQUlsRixjQUFKLENBQW1CdkYsR0FBbkIsQ0FBSixFQUE2QjtBQUMzQixhQUFPeUssR0FBUDtBQUNEOztBQUVELFFBQUlvWCxRQUFRM2dCLE9BQU80Z0IsY0FBUCxDQUFzQnJYLEdBQXRCLENBQVo7O0FBRUEsUUFBSSxDQUFDb1gsS0FBTCxFQUFZO0FBQ1YsYUFBTyxJQUFQO0FBQ0Q7O0FBRUQsV0FBT3JkLE1BQU1xZCxLQUFOLENBQVA7QUFDRCxHQVpEOztBQWNBLFNBQU9yZCxNQUFNMFYsTUFBTixDQUFQO0FBQ0QsQ0FoQkQ7O0FBa0JBOzs7Ozs7O0FBT0FoYSxNQUFNK0Usa0JBQU4sR0FBMkIsWUFBaUM7QUFBQSxNQUF4QjFDLE1BQXdCLHVFQUFmLEVBQWU7QUFBQSxNQUFYRSxFQUFXLHVFQUFOLElBQU07O0FBQzFELE1BQUl5QyxNQUFNNmMsS0FBS0MsTUFBTCxHQUFjdmUsUUFBZCxDQUF1QixFQUF2QixFQUEyQndlLFNBQTNCLENBQXFDLENBQXJDLEVBQXdDMWYsU0FBUyxDQUFqRCxDQUFWO0FBQ0EsTUFBSWtELE1BQU0sRUFBVjs7QUFFQSxPQUFLLElBQUlwRCxJQUFJLENBQVIsRUFBV0MsSUFBSTRDLElBQUkzQyxNQUF4QixFQUFnQ0YsSUFBSUMsQ0FBcEMsRUFBdUNELEdBQXZDLEVBQTRDO0FBQzFDLFFBQUkwZixLQUFLQyxNQUFMLEtBQWdCLElBQXBCLEVBQTBCO0FBQ3hCdmMsYUFBT1AsSUFBSTdDLENBQUosRUFBT21mLFdBQVAsRUFBUDtBQUNELEtBRkQsTUFHSztBQUNIL2IsYUFBT1AsSUFBSTdDLENBQUosQ0FBUDtBQUNEO0FBQ0Y7O0FBRUQsTUFBSUksTUFBTUEsR0FBR2dELEdBQUgsQ0FBVixFQUFtQjtBQUNqQixXQUFPLEtBQUtSLGtCQUFMLENBQXdCMUMsTUFBeEIsRUFBZ0NFLEVBQWhDLENBQVA7QUFDRDs7QUFFRCxTQUFPZ0QsR0FBUDtBQUNELENBbEJEOztrQkFvQmV2RixLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzN6QmY7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTs7Ozs7O0lBTWFnaUIsTyxXQUFBQSxPOztBQUdYOzs7Ozs7QUFNQSxtQkFBWUMsT0FBWixFQUFxQjNmLFFBQXJCLEVBQStCO0FBQUE7O0FBQUEsU0FSL0JtTCxPQVErQixHQVJyQixFQVFxQjs7QUFBQSxTQXVJL0J5VSxVQXZJK0IsR0F1SWxCLFVBQVNDLEdBQVQsRUFBYztBQUN6QixVQUFJQyxVQUFVLEVBQWQ7QUFDQSxVQUFJcGQsTUFBTW1kLElBQUlFLHFCQUFKLEVBQVY7QUFDQSxVQUFJaGUsTUFBTVcsSUFBSStKLEtBQUosQ0FBVSxNQUFWLENBQVY7O0FBRUEsV0FBSyxJQUFJNU0sSUFBSSxDQUFSLEVBQVdDLElBQUlpQyxJQUFJaEMsTUFBeEIsRUFBZ0NGLElBQUlDLENBQXBDLEVBQXVDRCxHQUF2QyxFQUE0QztBQUMxQyxZQUFJbWdCLE9BQU9qZSxJQUFJbEMsQ0FBSixDQUFYO0FBQ0EsWUFBSTZILFFBQVFzWSxLQUFLcFgsT0FBTCxDQUFhLElBQWIsQ0FBWjs7QUFFQSxZQUFJbEIsUUFBUSxDQUFaLEVBQWU7QUFDYixjQUFJbEssTUFBTXdpQixLQUFLUCxTQUFMLENBQWUsQ0FBZixFQUFrQi9YLEtBQWxCLENBQVY7QUFDQSxjQUFJekUsTUFBTStjLEtBQUtQLFNBQUwsQ0FBZS9YLFFBQVEsQ0FBdkIsQ0FBVjtBQUNBb1ksa0JBQVF0aUIsR0FBUixJQUFleUYsR0FBZjtBQUNEO0FBQ0Y7O0FBRUQsYUFBTzZjLE9BQVA7QUFDRCxLQXhKOEI7O0FBQzdCLFNBQUtILE9BQUwsR0FBZUEsVUFBVUEsUUFBUXJkLE9BQVIsQ0FBZ0IsS0FBaEIsRUFBdUIsRUFBdkIsSUFBNkIsR0FBdkMsR0FBNkMsRUFBNUQ7O0FBRUEsU0FBS3RDLFFBQUw7QUFDRWlnQiwwQkFBb0IsUUFEdEI7QUFFRTNVLGFBQU87QUFGVCxPQUdNdEwsWUFBWSxFQUhsQjtBQUtEOztBQUVEOzs7Ozs7Ozs7OzBCQU1NeEQsTyxFQUFTO0FBQUE7O0FBQ2IsYUFBTyxJQUFJbUUsT0FBSixDQUFZLFVBQUNvRCxPQUFELEVBQVVtYyxNQUFWLEVBQXFCO0FBQ3RDMWpCLCtCQUFjLE1BQUt3RCxRQUFuQixFQUFpQ3hELFdBQVcsRUFBNUM7QUFDQUEsZ0JBQVFxUCxHQUFSLEdBQWMsTUFBSzhULE9BQUwsUUFBaUIsTUFBS0EsT0FBdEIsR0FBZ0NuakIsUUFBUXFQLEdBQVIsQ0FBWXZKLE9BQVosQ0FBb0IsS0FBcEIsRUFBMkIsRUFBM0IsQ0FBaEMsR0FBa0U5RixRQUFRcVAsR0FBeEY7QUFDQXJQLGdCQUFRMmpCLE1BQVIsR0FBaUIzakIsUUFBUTJqQixNQUFSLElBQWtCLEtBQW5DOztBQUVBLFlBQUlOLE1BQU0sSUFBSU8sY0FBSixFQUFWO0FBQ0EsWUFBTUMsU0FBUyxNQUFLQyxlQUFMLENBQXFCVCxHQUFyQixFQUEwQnJqQixPQUExQixDQUFmO0FBQ0FxakIsY0FBTVEsT0FBT1IsR0FBYjtBQUNBcmpCLGtCQUFVNmpCLE9BQU83akIsT0FBakI7QUFDQyxlQUFPQSxRQUFRK2pCLE9BQWYsSUFBMEIsVUFBM0IsSUFBMEMvakIsUUFBUStqQixPQUFSLENBQWdCVixHQUFoQixDQUExQztBQUNBcmpCLGdCQUFRc2pCLE9BQVIsR0FBa0J0akIsUUFBUXNqQixPQUFSLElBQW1CLEVBQXJDOztBQUVBLFlBQUl0akIsUUFBUWdrQixJQUFaLEVBQWtCO0FBQ2hCaGtCLGtCQUFRZ2tCLElBQVIsS0FBaUIsSUFBakIsS0FBMEJoa0IsUUFBUXFOLElBQVIsR0FBZTJKLEtBQUtDLFNBQUwsQ0FBZWpYLFFBQVFna0IsSUFBdkIsQ0FBekM7QUFDQWhrQixrQkFBUXNqQixPQUFSLENBQWdCLGNBQWhCLElBQWtDLGtCQUFsQztBQUNBdGpCLGtCQUFRaWtCLFlBQVIsR0FBdUJqa0IsUUFBUWlrQixZQUFSLElBQXdCLE1BQS9DO0FBQ0QsU0FKRCxNQUtLLElBQUlqa0IsUUFBUWtrQixJQUFaLEVBQWtCO0FBQ3JCbGtCLGtCQUFRcU4sSUFBUixHQUFlLE1BQUs4VyxjQUFMLENBQW9CbmtCLFFBQVFra0IsSUFBNUIsQ0FBZjtBQUNBbGtCLGtCQUFRc2pCLE9BQVIsQ0FBZ0IsY0FBaEIsSUFBa0MscUJBQWxDO0FBQ0Q7O0FBRUQsWUFBSXRqQixRQUFRb2tCLE1BQVosRUFBb0I7QUFDbEIsY0FBSWxlLE1BQU0sTUFBS21lLGFBQUwsQ0FBbUJya0IsUUFBUW9rQixNQUEzQixDQUFWO0FBQ0FsZSxrQkFBUWxHLFFBQVFxUCxHQUFSLElBQWUsTUFBTW5KLEdBQTdCO0FBQ0Q7O0FBRUQsWUFBSTJPLE9BQU8sSUFBWDtBQUNBLFlBQUkvRixRQUFRLE9BQU85TyxRQUFROE8sS0FBZixJQUF3QixVQUF4QixHQUFvQzlPLFFBQVE4TyxLQUFSLENBQWM5TyxPQUFkLENBQXBDLEdBQTREQSxRQUFROE8sS0FBaEY7QUFDQyxTQUFDOUssT0FBT21HLFNBQVIsSUFBcUIsQ0FBQ3RLLGdCQUFNTSxNQUE3QixLQUF5QzJPLFFBQVEsSUFBakQ7O0FBRUEsWUFBRzlPLFFBQVEyakIsTUFBUixDQUFlbkIsV0FBZixNQUFnQyxLQUFoQyxLQUEwQyxDQUFDeGlCLFFBQVFxTixJQUFULElBQWlCLE9BQU9yTixRQUFRcU4sSUFBZixJQUF1QixRQUFsRixDQUFILEVBQWdHO0FBQzlGd0gsaUJBQU8sTUFBS3lQLGVBQUwsQ0FBcUI7QUFDMUJqVixpQkFBS3JQLFFBQVFxUCxHQURhO0FBRTFCc1Usb0JBQVEzakIsUUFBUTJqQixNQUZVO0FBRzFCWSxrQkFBTXZrQixRQUFRdWtCLElBSFk7QUFJMUJDLHNCQUFVeGtCLFFBQVF3a0IsUUFKUTtBQUsxQm5YLGtCQUFNck4sUUFBUXFOO0FBTFksV0FBckIsQ0FBUDtBQU9EOztBQUVELFlBQUd5QixTQUFTK0YsSUFBWixFQUFrQjtBQUNoQixjQUFJNFAsU0FBUyxNQUFLQyxRQUFMLENBQWM3UCxJQUFkLENBQWI7QUFDQSxjQUFJcUksTUFBTSxJQUFJRCxJQUFKLEdBQVdnQixPQUFYLEVBQVY7O0FBRUEsY0FBR3dHLFdBQVczVixVQUFVLElBQVYsSUFBa0JvTyxNQUFNdUgsT0FBT0UsU0FBYixJQUEwQjdWLEtBQXZELENBQUgsRUFBa0U7QUFDaEUsbUJBQU92SCxRQUFRLE1BQUtxZCxjQUFMLENBQW9CSCxPQUFPSSxNQUEzQixDQUFSLENBQVA7QUFDRDtBQUNGOztBQUVEeEIsWUFBSXRDLElBQUosQ0FBUy9nQixRQUFRMmpCLE1BQWpCLEVBQXlCM2pCLFFBQVFxUCxHQUFqQyxFQUFzQyxJQUF0QyxFQUE0Q3JQLFFBQVF1a0IsSUFBcEQsRUFBMER2a0IsUUFBUXdrQixRQUFsRTs7QUFFQSxZQUFJeGtCLFFBQVF1RyxjQUFSLENBQXVCLFNBQXZCLENBQUosRUFBdUM7QUFDckM4YyxjQUFJeUIsT0FBSixHQUFjOWtCLFFBQVE4a0IsT0FBdEI7QUFDRDs7QUFFRCxZQUFJOWtCLFFBQVFpa0IsWUFBWixFQUEwQjtBQUN4QlosY0FBSVksWUFBSixHQUFtQmprQixRQUFRaWtCLFlBQTNCO0FBQ0Q7O0FBRUQsWUFBSWprQixRQUFRK2tCLGVBQVosRUFBNkI7QUFDM0IxQixjQUFJMEIsZUFBSixHQUFzQi9rQixRQUFRK2tCLGVBQTlCO0FBQ0Q7O0FBRUQsWUFBSUMsYUFBYTlpQixPQUFPb0MsSUFBUCxDQUFZdEUsUUFBUXNqQixPQUFwQixDQUFqQjs7QUFFQSxhQUFLLElBQUlqZ0IsSUFBSSxDQUFSLEVBQVdDLElBQUkwaEIsV0FBV3poQixNQUEvQixFQUF1Q0YsSUFBSUMsQ0FBM0MsRUFBOENELEdBQTlDLEVBQW1EO0FBQ2pELGNBQUlpRCxJQUFJMGUsV0FBVzNoQixDQUFYLENBQVI7QUFDQWdnQixjQUFJNEIsZ0JBQUosQ0FBcUIzZSxDQUFyQixFQUF3QnRHLFFBQVFzakIsT0FBUixDQUFnQmhkLENBQWhCLENBQXhCO0FBQ0Q7O0FBRUQsWUFBSSxPQUFPdEcsUUFBUWtsQixVQUFmLElBQTZCLFVBQWpDLEVBQTZDO0FBQzNDN0IsY0FBSThCLFVBQUosR0FBaUIsWUFBTTtBQUNyQixtQkFBT25sQixRQUFRa2xCLFVBQVIsQ0FBbUI3QixHQUFuQixDQUFQO0FBQ0QsV0FGRDtBQUdEOztBQUVEQSxZQUFJK0IsTUFBSixHQUFhLFlBQU07QUFDakIsY0FBTVAsU0FBUztBQUNiUSxzQkFBVWhDLElBQUlnQyxRQUREO0FBRWJ0WSxvQkFBUXNXLElBQUl0VyxNQUZDO0FBR2J1WSx3QkFBWWpDLElBQUlpQyxVQUhIO0FBSWJDLHdCQUFZbEMsSUFBSWtDLFVBSkg7QUFLYlIsNkJBQWlCMUIsSUFBSTBCLGVBTFI7QUFNYmQsMEJBQWNaLElBQUlZLFlBTkw7QUFPYnVCLDBCQUFjbkMsSUFBSVksWUFBSixJQUFvQixNQUFwQixHQUE0QlosSUFBSW1DLFlBQWhDLEdBQThDLEVBUC9DO0FBUWJDLHlCQUFhcEMsSUFBSVksWUFBSixJQUFvQixVQUFwQixHQUFnQ1osSUFBSW9DLFdBQXBDLEdBQWlELEVBUmpEO0FBU2JDLHlCQUFhckMsSUFBSXFDLFdBVEo7QUFVYloscUJBQVN6QixJQUFJeUIsT0FWQTtBQVdieEIscUJBQVMsTUFBS0YsVUFBTCxDQUFnQkMsR0FBaEI7QUFYSSxXQUFmOztBQWNBLGNBQU1nQyxXQUFXLE1BQUtULGNBQUwsQ0FBb0JDLE1BQXBCLENBQWpCOztBQUVBLGNBQUk3a0IsUUFBUXlqQixrQkFBUixJQUE4QixDQUFDSixJQUFJdFcsTUFBSixHQUFhLEVBQWQsRUFBa0JpVSxLQUFsQixDQUF3QmhoQixRQUFReWpCLGtCQUFoQyxDQUFsQyxFQUF1RjtBQUNyRixnQkFBSXpWLE1BQU0sSUFBSWxKLEtBQUosa0JBQXlCOUUsUUFBUXFQLEdBQWpDLHNDQUFxRWdVLElBQUl0VyxNQUF6RSxDQUFWO0FBQ0FpQixnQkFBSXFYLFFBQUosR0FBZUEsUUFBZjtBQUNBLG1CQUFPM0IsT0FBTzFWLEdBQVAsQ0FBUDtBQUNEOztBQUVELFdBQUNjLFNBQVM5SyxPQUFPbUcsU0FBakIsS0FBK0IwSyxJQUEvQixJQUF1QyxNQUFLOFEsV0FBTCxDQUFpQjlRLElBQWpCLEVBQXVCZ1EsTUFBdkIsQ0FBdkM7QUFDQXRkLGtCQUFROGQsUUFBUjtBQUNELFNBekJEOztBQTJCQWhDLFlBQUl1QyxTQUFKLEdBQWdCLFlBQU07QUFDcEJsQyxpQkFBTyxJQUFJNWUsS0FBSixrQkFBeUI5RSxRQUFRcVAsR0FBakMsaUJBQVA7QUFDRCxTQUZEOztBQUlBZ1UsWUFBSXdDLE9BQUosR0FBY25DLE1BQWQ7QUFDQUwsWUFBSXlDLElBQUosQ0FBUzlsQixRQUFRcU4sSUFBakI7QUFDRCxPQTlHTSxDQUFQO0FBK0dEOztBQUVEOzs7Ozs7Ozs7O0FBd0JBOzs7Ozs7NkJBTVN3SCxJLEVBQU07QUFDYixhQUFPLEtBQUtsRyxPQUFMLENBQWFrRyxJQUFiLEtBQXNCLElBQTdCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OztnQ0FNWUEsSSxFQUFNZ1EsTSxFQUFRO0FBQ3hCLFdBQUtsVyxPQUFMLENBQWFrRyxJQUFiLElBQXFCLEVBQUVnUSxjQUFGLEVBQVVGLFdBQVcsSUFBSTFILElBQUosR0FBV2dCLE9BQVgsRUFBckIsRUFBckI7QUFDRDs7QUFFRDs7Ozs7Ozs7Z0NBS1lwSixJLEVBQU07QUFDaEIsYUFBTyxLQUFLbEcsT0FBTCxDQUFha0csSUFBYixDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OztvQ0FNZ0IzQixJLEVBQU07QUFDcEIsYUFBT2hTLGdCQUFNNFQsZ0JBQU4sQ0FBdUI1QixJQUF2QixDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OztrQ0FNY3pILEcsRUFBSztBQUNqQixVQUFJc2EsTUFBTSxHQUFWO0FBQ0EsVUFBSUMsS0FBSyxHQUFUOztBQUVBLFVBQUksQ0FBQ3ZhLEdBQUQsSUFBUSxRQUFPQSxHQUFQLHlDQUFPQSxHQUFQLE9BQWUsUUFBM0IsRUFBcUM7QUFDbkMsZUFBTyxFQUFQO0FBQ0Q7O0FBRUQsYUFBT3ZKLE9BQU9vQyxJQUFQLENBQVltSCxHQUFaLEVBQWlCbEgsR0FBakIsQ0FBcUIsVUFBQytCLENBQUQsRUFBTztBQUNqQyxZQUFJMmYsS0FBS0MsbUJBQW1CNWYsQ0FBbkIsQ0FBVDs7QUFFQSxZQUFJeEMsTUFBTWtILE9BQU4sQ0FBY1MsSUFBSW5GLENBQUosQ0FBZCxDQUFKLEVBQTJCO0FBQ3pCMmYsZUFBS0MsbUJBQW1CNWYsQ0FBbkIsQ0FBTDtBQUNBLGlCQUFPbUYsSUFBSW5GLENBQUosRUFBTy9CLEdBQVAsQ0FBVyxVQUFDNGhCLENBQUQsRUFBSTlpQixDQUFKO0FBQUEsbUJBQVU0aUIsWUFBUzVpQixDQUFULFVBQWdCMmlCLEVBQWhCLEdBQXFCRSxtQkFBbUJDLENBQW5CLENBQS9CO0FBQUEsV0FBWCxFQUFpRXpoQixJQUFqRSxDQUFzRXFoQixHQUF0RSxDQUFQO0FBQ0QsU0FIRCxNQUlLLElBQUl0YSxJQUFJbkYsQ0FBSixLQUFVLFFBQU9tRixJQUFJbkYsQ0FBSixDQUFQLE1BQWtCLFFBQWhDLEVBQTBDO0FBQzdDLGNBQUk4ZixNQUFNLEVBQVY7QUFDQWxrQixpQkFBT29DLElBQVAsQ0FBWW1ILElBQUluRixDQUFKLENBQVosRUFBb0IvQixHQUFwQixDQUF3QixVQUFDdkQsR0FBRDtBQUFBLG1CQUFTb2xCLElBQUkxaUIsSUFBSixDQUFTdWlCLFlBQVNqbEIsR0FBVCxVQUFrQmdsQixFQUFsQixHQUF1QkUsbUJBQW1CemEsSUFBSW5GLENBQUosRUFBT3RGLEdBQVAsQ0FBbkIsQ0FBaEMsQ0FBVDtBQUFBLFdBQXhCO0FBQ0EsaUJBQU9vbEIsSUFBSTFoQixJQUFKLENBQVNxaEIsR0FBVCxDQUFQO0FBQ0QsU0FKSSxNQUtBO0FBQ0gsaUJBQU9FLEtBQUtELEVBQUwsR0FBVUUsbUJBQW1CemEsSUFBSW5GLENBQUosQ0FBbkIsQ0FBakI7QUFDRDtBQUNGLE9BZk0sRUFlSjVCLElBZkksQ0FlQ3FoQixHQWZELENBQVA7QUFnQkQ7O0FBRUQ7Ozs7Ozs7OztvQ0FNZ0I3ZixHLEVBQUs7QUFDbkIsVUFBSW1nQixRQUFRLEVBQVo7QUFDQSxVQUFJQyxPQUFPcGdCLElBQUkrSixLQUFKLENBQVUsR0FBVixDQUFYOztBQUVBLFdBQUssSUFBSTVNLElBQUksQ0FBUixFQUFXQyxJQUFJZ2pCLEtBQUsvaUIsTUFBekIsRUFBaUNGLElBQUdDLENBQXBDLEVBQXVDRCxHQUF2QyxFQUE0QztBQUMxQyxZQUFJa2pCLE1BQU9ELEtBQUtqakIsQ0FBTCxFQUFRNE0sS0FBUixDQUFjLEdBQWQsQ0FBWDtBQUNBLFlBQUlqUCxNQUFNd2xCLG1CQUFtQkQsSUFBSSxDQUFKLENBQW5CLENBQVY7QUFDQSxZQUFJOWYsTUFBTStmLG1CQUFtQkQsSUFBSSxDQUFKLENBQW5CLENBQVY7O0FBRUEsWUFBSSxDQUFDdmxCLEdBQUwsRUFBVTtBQUNSO0FBQ0Q7O0FBRUQsWUFBSThDLE1BQU1rSCxPQUFOLENBQWNxYixNQUFNcmxCLEdBQU4sQ0FBZCxDQUFKLEVBQStCO0FBQzdCcWxCLGdCQUFNcmxCLEdBQU4sRUFBVzBDLElBQVgsQ0FBZ0IrQyxHQUFoQjtBQUNELFNBRkQsTUFHSyxJQUFJNGYsTUFBTXJsQixHQUFOLENBQUosRUFBZ0I7QUFDbkJxbEIsZ0JBQU1ybEIsR0FBTixJQUFhLENBQUNxbEIsTUFBTXJsQixHQUFOLENBQUQsRUFBYXlGLEdBQWIsQ0FBYjtBQUNELFNBRkksTUFHQTtBQUNINGYsZ0JBQU1ybEIsR0FBTixJQUFheUYsR0FBYjtBQUNEO0FBQ0Y7O0FBRUQsYUFBTzRmLEtBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7bUNBUWU1YSxHLEVBQWtDO0FBQUEsVUFBN0J5SCxJQUE2Qix1RUFBdEIsSUFBc0I7QUFBQSxVQUFoQnVULFNBQWdCLHVFQUFKLEVBQUk7O0FBQy9DLFVBQUlDLEtBQUt4VCxRQUFRLElBQUl5VCxRQUFKLEVBQWpCOztBQUVBLFdBQUssSUFBSXJnQixDQUFULElBQWNtRixHQUFkLEVBQW1CO0FBQ2pCLFlBQUlBLElBQUlsRixjQUFKLENBQW1CRCxDQUFuQixLQUF5Qm1GLElBQUluRixDQUFKLENBQTdCLEVBQXFDO0FBQ25DLGNBQUl0RixNQUFNeWxCLFlBQVdBLFlBQVksR0FBWixHQUFrQm5nQixDQUFsQixHQUFzQixHQUFqQyxHQUFzQ0EsQ0FBaEQ7O0FBRUEsY0FBSW1GLElBQUluRixDQUFKLGFBQWtCMlcsSUFBdEIsRUFBNEI7QUFDMUJ5SixlQUFHRSxNQUFILENBQVU1bEIsR0FBVixFQUFleUssSUFBSW5GLENBQUosRUFBT3VnQixXQUFQLEVBQWY7QUFDRCxXQUZELE1BR0ssSUFBSTNsQixnQkFBTXVjLGFBQU4sQ0FBb0JoUyxJQUFJbkYsQ0FBSixDQUFwQixDQUFKLEVBQWlDO0FBQ3BDLGlCQUFLNmQsY0FBTCxDQUFvQjFZLElBQUluRixDQUFKLENBQXBCLEVBQTRCb2dCLEVBQTVCLEVBQWdDMWxCLEdBQWhDO0FBQ0QsV0FGSSxNQUdBO0FBQ0gwbEIsZUFBR0UsTUFBSCxDQUFVNWxCLEdBQVYsRUFBZXlLLElBQUluRixDQUFKLENBQWY7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsYUFBT29nQixFQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7b0NBT2dCckQsRyxFQUFLcmpCLE8sRUFBUztBQUM1QixhQUFPLEVBQUVxakIsUUFBRixFQUFPcmpCLGdCQUFQLEVBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7O21DQU1lNmtCLE0sRUFBUTtBQUNyQiwwQkFDS0EsTUFETDtBQUVFM1IsY0FBTTJSLE9BQU9RO0FBRmY7QUFJRDs7QUFFRDs7Ozs7Ozs7Ozt3QkFPSWhXLEcsRUFBbUI7QUFBQSxVQUFkclAsT0FBYyx1RUFBSixFQUFJOztBQUNyQkEsY0FBUXFQLEdBQVIsR0FBY0EsR0FBZDtBQUNBclAsY0FBUTJqQixNQUFSLEdBQWlCLEtBQWpCOztBQUVBLGFBQU8sS0FBSzBDLEtBQUwsQ0FBV3JtQixPQUFYLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs0QkFPT3FQLEcsRUFBbUI7QUFBQSxVQUFkclAsT0FBYyx1RUFBSixFQUFJOztBQUN4QkEsY0FBUXFQLEdBQVIsR0FBY0EsR0FBZDtBQUNBclAsY0FBUTJqQixNQUFSLEdBQWlCLFFBQWpCOztBQUVBLGFBQU8sS0FBSzBDLEtBQUwsQ0FBV3JtQixPQUFYLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozt5QkFPS3FQLEcsRUFBbUI7QUFBQSxVQUFkclAsT0FBYyx1RUFBSixFQUFJOztBQUN0QkEsY0FBUXFQLEdBQVIsR0FBY0EsR0FBZDtBQUNBclAsY0FBUTJqQixNQUFSLEdBQWlCLE1BQWpCOztBQUVBLGFBQU8sS0FBSzBDLEtBQUwsQ0FBV3JtQixPQUFYLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozt3QkFPSXFQLEcsRUFBbUI7QUFBQSxVQUFkclAsT0FBYyx1RUFBSixFQUFJOztBQUNyQkEsY0FBUXFQLEdBQVIsR0FBY0EsR0FBZDtBQUNBclAsY0FBUTJqQixNQUFSLEdBQWlCLEtBQWpCOztBQUVBLGFBQU8sS0FBSzBDLEtBQUwsQ0FBV3JtQixPQUFYLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7OzswQkFPTXFQLEcsRUFBbUI7QUFBQSxVQUFkclAsT0FBYyx1RUFBSixFQUFJOztBQUN2QkEsY0FBUXFQLEdBQVIsR0FBY0EsR0FBZDtBQUNBclAsY0FBUTJqQixNQUFSLEdBQWlCLE9BQWpCOztBQUVBLGFBQU8sS0FBSzBDLEtBQUwsQ0FBV3JtQixPQUFYLENBQVA7QUFDRDs7QUFFQTs7Ozs7Ozs7Ozt5QkFPSXFQLEcsRUFBbUI7QUFBQSxVQUFkclAsT0FBYyx1RUFBSixFQUFJOztBQUN0QkEsY0FBUXFQLEdBQVIsR0FBY0EsR0FBZDtBQUNBclAsY0FBUTJqQixNQUFSLEdBQWlCLE1BQWpCOztBQUVBLGFBQU8sS0FBSzBDLEtBQUwsQ0FBV3JtQixPQUFYLENBQVA7QUFDRDs7Ozs7O0FBR0gsSUFBTTZDLFVBQVUsSUFBSXFnQixPQUFKLEVBQWhCOztBQUVBOzs7QUFHQXJnQixRQUFROUMsV0FBUixHQUFzQixZQUFZO0FBQ2hDLE9BQUs2TyxXQUFMLEdBQW1CLEVBQW5CO0FBQ0EsT0FBS0QsT0FBTCxHQUFlLEVBQWY7QUFDRCxDQUhEOztBQUtBOzs7Ozs7QUFNQTlMLFFBQVFpa0IsV0FBUixHQUFzQixVQUFTOWhCLElBQVQsRUFBZTBKLFFBQWYsRUFBeUI7QUFDN0MsT0FBS0UsV0FBTCxDQUFpQjVKLElBQWpCLElBQXlCMEosUUFBekI7QUFDRCxDQUZEOztBQUlBOzs7OztBQUtBN0wsUUFBUWtrQixjQUFSLEdBQXlCLFVBQVMvaEIsSUFBVCxFQUFlO0FBQ3RDLFNBQU8sS0FBSzRKLFdBQUwsQ0FBaUI1SixJQUFqQixDQUFQO0FBQ0QsQ0FGRDs7QUFJQTs7O0FBR0FuQyxRQUFRbU0sTUFBUixHQUFpQixZQUFXO0FBQzFCLE9BQUtqUCxXQUFMO0FBQ0QsQ0FGRDs7QUFLQW1DLE9BQU9tSixjQUFQLENBQXNCeEksT0FBdEIsRUFBK0IsS0FBL0IsRUFBc0M7QUFDcENrUSxPQUFLLGVBQU07QUFDVCxXQUFPbFEsUUFBUStMLFdBQWY7QUFDRDtBQUhtQyxDQUF0Qzs7QUFNQS9MLFFBQVFxZ0IsT0FBUixHQUFrQkEsT0FBbEI7a0JBQ2VyZ0IsTzs7QUFDZkEsUUFBUTlDLFdBQVIsRzs7Ozs7Ozs7Ozs7Ozs7O0FDNWNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0lBWXFCeUMsSTs7O0FBQ25CLGtCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOaUksSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsdUlBQ1ZBLElBRFU7O0FBR25CLFVBQUt1YyxRQUFMLEdBQWdCLE9BQWhCO0FBQ0EsVUFBS0MsZ0JBQUwsR0FBd0IsR0FBeEI7QUFDQSxVQUFLQyxlQUFMLEdBQXVCLElBQXZCO0FBTG1CO0FBTXBCOzs7OytCQUVVO0FBQUE7O0FBQ1QsVUFBRyxLQUFLMWlCLEVBQUwsQ0FBUXlQLFlBQVIsQ0FBcUIsYUFBckIsQ0FBSCxFQUF3QztBQUN0QyxhQUFLelAsRUFBTCxDQUFROEYsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsWUFBTTtBQUN0QyxpQkFBSzRjLGVBQUwsSUFBd0JDLGFBQWEsT0FBS0QsZUFBbEIsQ0FBeEI7QUFDQSxpQkFBS0EsZUFBTCxHQUF1QmpqQixXQUFXLFlBQU07QUFDdEMsbUJBQUtxTCxLQUFMLENBQVc4WCxVQUFYLENBQXNCMVUsT0FBdEIsQ0FBOEJDLFNBQTlCLEVBQXlDLEVBQUVDLFNBQVMsSUFBWCxFQUF6QztBQUNELFdBRnNCLEVBRXBCLE9BQUtxVSxnQkFGZSxDQUF2QjtBQUdELFNBTEQ7QUFNRDs7QUFFRCxXQUFLelksSUFBTCxDQUFVLE9BQVYsRUFBbUIsS0FBSzZZLFFBQXhCO0FBQ0EsV0FBSzdZLElBQUwsQ0FBVSxPQUFWLEVBQW1CLEtBQUs4WSxRQUF4QjtBQUNBLFdBQUs5WSxJQUFMLENBQVUsVUFBVixFQUFzQixLQUFLK1ksV0FBM0I7QUFDRDs7OzhCQUVTO0FBQ1IsV0FBS0wsZUFBTCxJQUF3QkMsYUFBYSxLQUFLRCxlQUFsQixDQUF4QjtBQUNEOzs7Z0NBRVdNLFEsRUFBVTtBQUNwQixXQUFLUCxnQkFBTCxHQUF3QixDQUFDTyxRQUF6QjtBQUNEOzs7NkJBRVFqYyxLLEVBQU87QUFDZEEsY0FBTyxLQUFLa2MsZUFBTCxFQUFQLEdBQStCLEtBQUtDLGNBQUwsRUFBL0I7QUFDRDs7OzZCQUVRbmMsSyxFQUFPO0FBQ2IsV0FBSy9HLEVBQUwsQ0FBUSxLQUFLd2lCLFFBQWIsTUFBMkJ6YixLQUE1QixLQUF1QyxLQUFLL0csRUFBTCxDQUFRLEtBQUt3aUIsUUFBYixJQUF5QnpiLFVBQVUsQ0FBVixHQUFhLEdBQWIsR0FBbUJBLFNBQVMsRUFBNUY7QUFDRDs7O3NDQUVpQjtBQUNoQixXQUFLL0csRUFBTCxDQUFRbWpCLEtBQVI7QUFDRDs7O3FDQUVnQjtBQUNmLFdBQUtuakIsRUFBTCxDQUFRb2pCLElBQVI7QUFDRDs7OztFQTlDK0J2bUIsbUI7O2tCQUFibUIsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkckI7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7OztJQVVxQmIsRzs7Ozs7NkJBSUg7QUFDZDlCLHNCQUFNOEcsU0FBTixDQUFnQixLQUFoQixFQUF1QixJQUF2QjtBQUNBOUcsc0JBQU04RyxTQUFOLENBQWdCLElBQWhCLEVBQXNCLElBQXRCO0FBQ0E5RyxzQkFBTThHLFNBQU4sQ0FBZ0IsSUFBaEIsRUFBc0IsSUFBdEI7QUFDQTlHLHNCQUFNOEcsU0FBTixDQUFnQixPQUFoQixFQUF5QixJQUF6QjtBQUNBOUcsc0JBQU04RyxTQUFOLENBQWdCLE9BQWhCLEVBQXlCLElBQXpCO0FBQ0E5RyxzQkFBTThHLFNBQU4sQ0FBZ0IsT0FBaEIsRUFBeUIsSUFBekI7QUFDQTlHLHNCQUFNOEcsU0FBTixDQUFnQixJQUFoQixFQUFzQixLQUFLa2hCLElBQTNCO0FBQ0Fob0Isc0JBQU04RyxTQUFOLENBQWdCLE1BQWhCLEVBQXdCLEtBQUtraEIsSUFBN0I7QUFDRDs7O0FBRUQsaUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5wZCxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSxxSUFDVkEsSUFEVTs7QUFHbkIsVUFBS3FkLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxVQUFLQyxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsVUFBS0MsaUJBQUwsR0FBeUIsSUFBekI7QUFDQSxVQUFLQyxLQUFMO0FBTm1CO0FBT3BCOzs7O3lDQUVvQnhpQixJLEVBQU04RixLLEVBQU87QUFDaEMsVUFBSTlGLGdCQUFnQnpCLE9BQU9xUixJQUF4QixJQUFpQzVQLEtBQUtULElBQUwsSUFBYSxJQUFqRCxFQUF1RDtBQUNyRCxlQUFPdUcsS0FBUDtBQUNEOztBQUVELGFBQU8sb0dBQTJCdkIsS0FBM0IsQ0FBaUMsSUFBakMsRUFBdUNDLFNBQXZDLENBQVA7QUFDRDs7OytDQUUwQnpELEksRUFBTStFLEssRUFBTztBQUN0QyxVQUFNOUYsT0FBT2UsS0FBS2YsSUFBbEI7O0FBRUEsVUFBSUEsZ0JBQWdCekIsT0FBT3FSLElBQXhCLElBQWlDNVAsS0FBS1QsSUFBTCxJQUFhLElBQTlDLElBQXNEd0IsS0FBSytFLEtBQUwsS0FBZUEsS0FBeEUsRUFBK0U7QUFDN0UsZUFBTyxLQUFQO0FBQ0Q7O0FBRUQsYUFBTywwR0FBaUN2QixLQUFqQyxDQUF1QyxJQUF2QyxFQUE2Q0MsU0FBN0MsQ0FBUDtBQUNEOzs7OEJBRVM7QUFDUixXQUFLaWUsY0FBTDtBQUNEOzs7K0JBRVU7QUFDVCxXQUFLMVosSUFBTCxDQUFVLElBQVYsRUFBZ0IsS0FBSzJaLElBQXJCO0FBQ0Q7OztxQ0FFZ0I7QUFDZixVQUFJM2pCLFdBQUo7O0FBRUEsV0FBSyxJQUFJbkIsSUFBSSxDQUFSLEVBQVdDLElBQUksS0FBS2tCLEVBQUwsQ0FBUTBFLFFBQVIsQ0FBaUIzRixNQUFyQyxFQUE2Q0YsSUFBSUMsQ0FBakQsRUFBb0RELEdBQXBELEVBQXlEO0FBQ3ZELFlBQUk4RixRQUFRLEtBQUszRSxFQUFMLENBQVEwRSxRQUFSLENBQWlCN0YsQ0FBakIsQ0FBWjs7QUFFQSxZQUFJOEYsTUFBTW5CLFlBQU4sQ0FBbUIsV0FBbkIsS0FBbUMsTUFBdkMsRUFBK0M7QUFDN0N4RCxlQUFLMkUsS0FBTDtBQUNBO0FBQ0Q7O0FBRUQzRSxhQUFLMkUsS0FBTDtBQUNEOztBQUVELFVBQUksQ0FBQzNFLEVBQUwsRUFBUztBQUNQQSxhQUFLNEksU0FBU2lWLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBTDtBQUNBN2QsV0FBR3VCLFNBQUgsR0FBZSxLQUFLdkIsRUFBTCxDQUFRdUIsU0FBdkI7QUFDQSxhQUFLdkIsRUFBTCxDQUFRdUIsU0FBUixHQUFvQixFQUFwQjtBQUNBLGFBQUt2QixFQUFMLENBQVFnYyxXQUFSLENBQW9CaGMsRUFBcEI7QUFDRDs7QUFFRCxVQUFJc0QsZ0JBQWdCdEQsR0FBR3dELFlBQUgsQ0FBZ0IsV0FBaEIsQ0FBcEI7O0FBRUEsVUFBSUYsaUJBQWlCLE1BQXJCLEVBQTZCO0FBQzNCLFlBQUluQixZQUFZOUcsZ0JBQU04RyxTQUFOLENBQWdCbUIsaUJBQWlCdEQsR0FBR3lELE9BQXBDLENBQWhCOztBQUVBLFlBQUksQ0FBQ3RCLFNBQUwsRUFBZ0I7QUFDZG5DLGFBQUdpSyxZQUFILENBQWdCLFdBQWhCLEVBQTZCLE1BQTdCO0FBQ0QsU0FGRCxNQUdLLElBQUksRUFBRTlILFVBQVU5QyxTQUFWLFlBQStCbEMsR0FBakMsQ0FBSixFQUEyQztBQUM5QyxjQUFJeW1CLE9BQU9oYixTQUFTaVYsYUFBVCxDQUF1QixNQUF2QixDQUFYO0FBQ0ErRixlQUFLNUgsV0FBTCxDQUFpQmhjLEVBQWpCO0FBQ0FBLGVBQUs0akIsSUFBTDtBQUNEO0FBQ0Y7O0FBRUQsV0FBSzNhLElBQUwsR0FBWWpKLEdBQUd1QixTQUFmO0FBQ0EsV0FBS2dpQixXQUFMLEdBQW1CdmpCLEdBQUc2akIsV0FBdEI7QUFDQSxXQUFLTCxpQkFBTCxHQUF5QnhqQixHQUFHcUssU0FBNUI7QUFDQXJLLFNBQUcrRixNQUFIO0FBQ0Q7Ozs0Q0FFdUI7QUFDdEIsVUFBSS9GLEtBQUs0SSxTQUFTaVYsYUFBVCxDQUF1QixVQUF2QixDQUFUO0FBQ0E3ZCxTQUFHdUIsU0FBSCxHQUFlLEtBQUtpaUIsaUJBQXBCO0FBQ0F4akIsV0FBS0EsR0FBRzhqQixPQUFILENBQVdDLFVBQWhCO0FBQ0EsYUFBTy9qQixFQUFQO0FBQ0Q7Ozt5QkFFSXhELEcsRUFBS3VLLEssRUFBT0wsSyxFQUFPO0FBQ3RCLFdBQUtzZCxPQUFMLEdBQWV0ZCxLQUFmO0FBQ0EsV0FBS3VkLEtBQUwsR0FBYXpuQixHQUFiO0FBQ0EsV0FBSzBuQixPQUFMLEdBQWVuZCxLQUFmO0FBQ0EsV0FBS29kLGlCQUFMLEdBQXlCLFFBQU9wZCxLQUFQLHlDQUFPQSxLQUFQLE1BQWdCLFFBQWhCLEdBQTBCLEVBQUVzSixNQUFNM1QsZ0JBQU00VCxnQkFBTixDQUF1QnZKLEtBQXZCLENBQVIsRUFBMUIsR0FBbUVySyxnQkFBTThULElBQU4sQ0FBV3pKLEtBQVgsQ0FBNUY7O0FBRUEsVUFBRyxLQUFLdWMsU0FBTCxDQUFldmtCLE1BQWYsR0FBd0IySCxLQUEzQixFQUFrQztBQUNoQyxZQUFJMGQsV0FBVyxLQUFLZCxTQUFMLENBQWU1YyxLQUFmLENBQWY7O0FBRUEsWUFBSSxLQUFLc2QsT0FBTCxLQUFpQkksU0FBUzFkLEtBQTlCLEVBQXFDO0FBQ25DMGQsbUJBQVNDLFFBQVQ7QUFDRCxTQUZELE1BR0s7QUFDSEQsbUJBQVNDLFFBQVQsQ0FBa0IsSUFBbEI7QUFDRDs7QUFFRCxZQUFJLEtBQUtKLEtBQUwsS0FBZUcsU0FBUzVuQixHQUE1QixFQUFpQztBQUMvQjRuQixtQkFBU0UsTUFBVDtBQUNELFNBRkQsTUFHSztBQUNIRixtQkFBU0UsTUFBVCxDQUFnQixJQUFoQjtBQUNEOztBQUVELFlBQUksQ0FBQzVuQixnQkFBTTZULE9BQU4sQ0FBYyxLQUFLNFQsaUJBQW5CLEVBQXNDQyxTQUFTRyxlQUEvQyxDQUFMLEVBQXNFO0FBQ3BFSCxtQkFBU3RCLFFBQVQ7QUFDRCxTQUZELE1BR0s7QUFDSHNCLG1CQUFTdEIsUUFBVCxDQUFrQixJQUFsQjtBQUNEOztBQUVELGFBQUswQixVQUFMLENBQWdCdGxCLElBQWhCLENBQXFCN0QsZ0JBQU1pSixPQUFOLENBQWM4ZixTQUFTcGtCLEVBQXZCLEVBQTJCLEVBQUVrRCxXQUFXLEVBQUV3SixjQUFjLElBQWhCLEVBQWIsRUFBM0IsQ0FBckI7QUFDQSxlQUFPMFgsUUFBUDtBQUNEOztBQUVELFVBQUlwa0IsS0FBSyxLQUFLeWtCLHFCQUFMLEVBQVQ7QUFDQXprQixTQUFHdUIsU0FBSCxHQUFlLEtBQUswSCxJQUFwQjtBQUNBLFdBQUtqSixFQUFMLENBQVEwa0IsWUFBUixDQUFxQjFrQixFQUFyQixFQUF5QixLQUFLdWpCLFdBQTlCO0FBQ0EsV0FBS2lCLFVBQUwsQ0FBZ0J0bEIsSUFBaEIsQ0FBcUI3RCxnQkFBTWlKLE9BQU4sQ0FBY3RFLEVBQWQsQ0FBckI7QUFDQSxXQUFLc2pCLFNBQUwsQ0FBZXBrQixJQUFmLENBQW9CYyxHQUFHbUIsT0FBdkI7QUFDQSxhQUFPbkIsR0FBR21CLE9BQVY7QUFDRDs7O3lCQUVJdU4sSSxFQUFNO0FBQUE7O0FBQ1QsVUFBSSxRQUFPQSxJQUFQLHlDQUFPQSxJQUFQLE1BQWUsUUFBZixJQUEyQkEsU0FBUyxJQUF4QyxFQUE4QztBQUM1QyxZQUFJclQsZ0JBQU1HLE9BQU4sQ0FBY0MsS0FBbEIsRUFBeUI7QUFDdkI7QUFDQXVKLGtCQUFRQyxJQUFSO0FBQ0Q7O0FBRUR5SixlQUFPLEVBQVA7QUFDRDs7QUFFRCxXQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDQSxVQUFJaEksUUFBUSxDQUFaO0FBQ0EsVUFBTWhDLFdBQVcsR0FBR3dCLEtBQUgsQ0FBU0MsSUFBVCxDQUFjLEtBQUtuRyxFQUFMLENBQVEwRSxRQUF0QixDQUFqQjtBQUNBLFdBQUs0ZSxTQUFMLENBQWVqTCxJQUFmLENBQW9CLFVBQUN1RSxDQUFELEVBQUlDLENBQUo7QUFBQSxlQUFVblksU0FBU2tELE9BQVQsQ0FBaUJnVixFQUFFNWMsRUFBbkIsSUFBeUIwRSxTQUFTa0QsT0FBVCxDQUFpQmlWLEVBQUU3YyxFQUFuQixDQUFuQztBQUFBLE9BQXBCOztBQUVBLFVBQU0ya0IsT0FBTyxTQUFQQSxJQUFPLENBQUNub0IsR0FBRCxFQUFNdUssS0FBTixFQUFhTCxLQUFiLEVBQXVCO0FBQ2xDLFlBQUkwZCxXQUFXLE9BQUtPLElBQUwsQ0FBVW5vQixHQUFWLEVBQWV1SyxLQUFmLEVBQXNCTCxLQUF0QixDQUFmO0FBQ0EwZCxpQkFBU1EsT0FBVCxDQUFpQmxlLEtBQWpCO0FBQ0QsT0FIRDs7QUFLQSxVQUFHcEgsTUFBTWtILE9BQU4sQ0FBY2tJLElBQWQsQ0FBSCxFQUF3QjtBQUN0QixhQUFLLElBQUk1UCxJQUFJNFAsS0FBSzNQLE1BQWxCLEVBQTBCMkgsUUFBUTVILENBQWxDLEVBQXFDNEgsT0FBckMsRUFBOEM7QUFDNUNpZSxlQUFLamUsS0FBTCxFQUFZZ0ksS0FBS2hJLEtBQUwsQ0FBWixFQUF5QkEsS0FBekI7QUFDRDtBQUNGLE9BSkQsTUFLSztBQUNILFlBQUk1RyxPQUFPcEMsT0FBT29DLElBQVAsQ0FBWTRPLElBQVosQ0FBWDs7QUFFQSxhQUFLLElBQUk1UCxLQUFJZ0IsS0FBS2YsTUFBbEIsRUFBMEIySCxRQUFRNUgsRUFBbEMsRUFBcUM0SCxPQUFyQyxFQUE4QztBQUM1QyxjQUFJbEssTUFBTXNELEtBQUs0RyxLQUFMLENBQVY7QUFDQWllLGVBQUtub0IsR0FBTCxFQUFVa1MsS0FBS2xTLEdBQUwsQ0FBVixFQUFxQmtLLEtBQXJCO0FBQ0Q7QUFDRjs7QUFFRCxXQUFLLElBQUk3SCxJQUFJNkgsS0FBUixFQUFlNUgsTUFBSSxLQUFLd2tCLFNBQUwsQ0FBZXZrQixNQUF2QyxFQUErQ0YsSUFBSUMsR0FBbkQsRUFBc0RELEdBQXRELEVBQTJEO0FBQ3pELFlBQUl1bEIsV0FBVyxLQUFLZCxTQUFMLENBQWV6a0IsQ0FBZixDQUFmO0FBQ0F1bEIsaUJBQVM3SixRQUFUO0FBQ0EsYUFBSytJLFNBQUwsQ0FBZWhkLE1BQWYsQ0FBc0J6SCxDQUF0QixFQUF5QixDQUF6QjtBQUNBQztBQUNBRDtBQUNEOztBQUVELGFBQU9jLFFBQVFrRixHQUFSLENBQVksS0FBSzJmLFVBQWpCLEVBQTZCeGhCLElBQTdCLENBQWtDLFlBQU07QUFDN0MsZUFBS3lnQixLQUFMO0FBQ0EsZUFBSzNZLEtBQUwsQ0FBVytaLEtBQVgsQ0FBaUIzVyxPQUFqQixDQUF5QlEsSUFBekIsRUFBK0IsRUFBRU4sU0FBUyxJQUFYLEVBQS9CO0FBQ0QsT0FITSxDQUFQO0FBSUQ7O0FBRUQ7Ozs7Ozs0QkFHUTtBQUNOLFdBQUswVyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsV0FBS2QsT0FBTCxHQUFlLENBQWY7QUFDQSxXQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUNBLFdBQUtDLE9BQUwsR0FBZSxJQUFmO0FBQ0EsV0FBS0MsaUJBQUwsR0FBeUIsSUFBekI7QUFDQSxXQUFLSyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0Q7Ozs7RUF2TThCM25CLG1COztBQTBNakM7Ozs7Ozs7Ozs7Ozs7O0FBMU1xQk0sRyxDQUNaNEcsTyxHQUFVLE07QUFERTVHLEcsQ0FFWitSLE0sR0FBUyxDQUFDLEtBQUQsQztrQkFGRy9SLEc7O0lBc05Sa21CLEksV0FBQUEsSTs7O0FBSVgsa0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsdUNBQU5wZCxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSwwSUFDVkEsSUFEVTs7QUFHbkIsV0FBSzhlLEdBQUwsR0FBVyxJQUFYO0FBQ0EsV0FBSzliLElBQUwsR0FBWSxPQUFLakosRUFBTCxDQUFRdUIsU0FBcEI7QUFDQSxXQUFLeWpCLEtBQUwsR0FBYSxPQUFLaGxCLEVBQUwsQ0FBUXlQLFlBQVIsQ0FBcUIsSUFBckIsQ0FBYjs7QUFFQSxRQUFJLENBQUMsT0FBS3VWLEtBQU4sSUFBZSxFQUFFLE9BQUtobEIsRUFBTCxDQUFRa0IsVUFBUixDQUFtQkMsT0FBbkIsWUFBc0NoRSxHQUF4QyxDQUFuQixFQUFpRTtBQUMvRCxhQUFLOG5CLE1BQUw7QUFDRDtBQVRrQjtBQVVwQjs7Ozs4QkFFUztBQUNSLFdBQUtya0IsUUFBTCxDQUFjTyxPQUFkLENBQXNCMmpCLFVBQXRCLEdBQW1DLElBQW5DO0FBQ0EsV0FBS0MsR0FBTCxHQUFXLEtBQUtua0IsUUFBTCxDQUFjTyxPQUF6QjtBQUNBLFdBQUtrakIsUUFBTCxDQUFjLElBQWQ7QUFDQSxXQUFLQyxNQUFMLENBQVksSUFBWjtBQUNBLFdBQUt4QixRQUFMLENBQWMsSUFBZDs7QUFFQSxVQUFHLEtBQUtrQyxLQUFSLEVBQWU7QUFDYixlQUFPLHlGQUFjeGYsS0FBZCxDQUFvQixJQUFwQixFQUEwQkMsU0FBMUIsQ0FBUDtBQUNEO0FBQ0Y7OzsrQkFFVTtBQUNULFVBQUcsS0FBS3VmLEtBQVIsRUFBZTtBQUNiLGVBQU8sMEZBQWV4ZixLQUFmLENBQXFCLElBQXJCLEVBQTJCQyxTQUEzQixDQUFQO0FBQ0Q7QUFDRjs7OzZCQUVRaVIsTSxFQUFRO0FBQ2YsV0FBS2hRLEtBQUwsR0FBYSxLQUFLcWUsR0FBTCxDQUFTZixPQUF0QjtBQUNBLFdBQUs1akIsS0FBTCxDQUFXdVQsS0FBWCxDQUFpQixXQUFqQixFQUE4QixLQUFLak4sS0FBbkMsRUFBMEMsS0FBMUMsRUFBaURnUSxNQUFqRDtBQUNEOzs7MkJBRU1BLE0sRUFBUTtBQUNiLFdBQUtsYSxHQUFMLEdBQVcsS0FBS3VvQixHQUFMLENBQVNkLEtBQXBCO0FBQ0EsV0FBSzdqQixLQUFMLENBQVd1VCxLQUFYLENBQWlCLFNBQWpCLEVBQTRCLEtBQUtuWCxHQUFqQyxFQUFzQyxLQUF0QyxFQUE2Q2thLE1BQTdDO0FBQ0Q7Ozs2QkFFUUEsTSxFQUFRO0FBQ2YsV0FBSzNQLEtBQUwsR0FBYSxLQUFLZ2UsR0FBTCxDQUFTYixPQUF0QjtBQUNBLFdBQUs5akIsS0FBTCxDQUFXdVQsS0FBWCxDQUFpQixXQUFqQixFQUE4QixLQUFLNU0sS0FBbkMsRUFBMEMsSUFBMUMsRUFBZ0QyUCxNQUFoRDtBQUNBLFdBQUs2TixlQUFMLEdBQXdCLEtBQUtRLEdBQUwsQ0FBU1osaUJBQWpDO0FBQ0Q7Ozs4QkFFUyxDQUFFOzs7O0VBbERZaG5CLEc7O0FBQWJrbUIsSSxDQUNKdGYsTyxHQUFVLEU7QUFETnNmLEksQ0FFSnBVLGlCLEdBQW9CLEk7OztBQW1EN0I5UixJQUFJa21CLElBQUosR0FBV0EsSUFBWCxDOzs7Ozs7Ozs7Ozs7Ozs7QUN6UkE7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7SUFRcUJ0bUIsSztBQUduQixpQkFBWXlELElBQVosRUFBa0JSLEVBQWxCLEVBQXNCbUMsU0FBdEIsRUFBaUM7QUFBQTs7QUFDL0IsU0FBSzlCLE1BQUwsR0FBY0csSUFBZDtBQUNBLFNBQUtFLElBQUwsR0FBWVYsRUFBWjtBQUNBLFNBQUtXLFdBQUwsR0FBbUJ3QixTQUFuQjtBQUNBbkMsT0FBR2lLLFlBQUgsQ0FBZ0IsT0FBaEIsRUFBeUJ6SixJQUF6QjtBQUNEOztBQUVEOzs7Ozs7Ozs7OzswQkFPTVYsSSxFQUFNaUgsSyxFQUF1QztBQUFBOztBQUFBLFVBQWhDbWUsTUFBZ0MsdUVBQXZCLEtBQXVCO0FBQUEsVUFBaEJ4TyxNQUFnQix1RUFBUCxLQUFPOztBQUNqRCxVQUFJLENBQUNwWCxNQUFNa0gsT0FBTixDQUFjMUcsSUFBZCxDQUFMLEVBQTBCO0FBQ3hCQSxlQUFPLENBQUNBLElBQUQsQ0FBUDtBQUNEOztBQUVEekUsc0JBQU11SCxTQUFOLENBQWdCLFlBQU07QUFDcEJzaUIsbUJBQVcsTUFBS3ZrQixXQUFMLENBQWlCd1ksd0JBQWpCLEdBQTRDLElBQXZEO0FBQ0F6Yyx3QkFBTXVkLGlCQUFOLENBQXdCbmEsSUFBeEIsRUFBOEI0VyxTQUFRLE1BQUtoTSxRQUFiLEdBQXVCLEtBQXJELEVBQTJELFVBQUN3UCxJQUFELEVBQU9qWSxHQUFQLEVBQWU7QUFDeEUsY0FBSSxDQUFDaVksSUFBTCxFQUFXO0FBQ1QsbUJBQU9qWSxPQUFPLEVBQWQ7QUFDRDs7QUFFRCxpQkFBTzhFLEtBQVA7QUFDRCxTQU5EO0FBT0FtZSxtQkFBVyxNQUFLdmtCLFdBQUwsQ0FBaUJ3WSx3QkFBakIsR0FBNEMsS0FBdkQ7QUFDRCxPQVZEO0FBV0Q7Ozs7OztrQkFqQ2tCcGMsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hyQjs7Ozs7O0lBTXFCRCxZO0FBQ25CLHdCQUFZMEQsSUFBWixFQUFrQlMsSUFBbEIsRUFBd0JqQixFQUF4QixFQUE0Qm1DLFNBQTVCLEVBQXVDO0FBQUE7O0FBQ3JDLFNBQUszQixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLUyxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLakIsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsU0FBS21DLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7Ozs0QkFRUXVNLEksRUFBbUM7QUFBQSxVQUE3QmxULE9BQTZCLHVFQUFuQixFQUFtQjtBQUFBLFVBQWYycEIsS0FBZSx1RUFBUCxLQUFPOztBQUN6QyxVQUFJQSxTQUFTLENBQUMsS0FBS0MsWUFBTCxFQUFkLEVBQW1DO0FBQ2pDLGFBQUtwbEIsRUFBTCxDQUFRd0ksYUFBUixDQUFzQixJQUFJQyxXQUFKLENBQWdCLEtBQUtqSSxJQUFyQixFQUEyQixLQUFLNmtCLGNBQUwsWUFBc0IzYyxRQUFRZ0csSUFBOUIsSUFBd0NsVCxPQUF4QyxFQUEzQixDQUF0QjtBQUNEO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7OzZCQVFTOHBCLE0sRUFBcUM7QUFBQSxVQUE3QjlwQixPQUE2Qix1RUFBbkIsRUFBbUI7QUFBQSxVQUFmMnBCLEtBQWUsdUVBQVAsS0FBTzs7QUFDNUMsVUFBSUEsU0FBUyxDQUFDLEtBQUtDLFlBQUwsRUFBZCxFQUFtQztBQUNqQyxhQUFLcGxCLEVBQUwsQ0FBUXdJLGFBQVIsQ0FBc0IsSUFBSThjLE1BQUosQ0FBVyxLQUFLOWtCLElBQWhCLEVBQXNCLEtBQUs2a0IsY0FBTCxDQUFvQjdwQixPQUFwQixDQUF0QixDQUF0QjtBQUNEO0FBQ0Y7O0FBRUQ7Ozs7Ozs7O3FDQUs2QjtBQUFBLFVBQWRBLE9BQWMsdUVBQUosRUFBSTs7QUFDM0JBLDJCQUFZNFMsU0FBUyxJQUFyQixJQUE4QjVTLE9BQTlCO0FBQ0EsV0FBS3lGLElBQUwsQ0FBVU4sV0FBVixDQUFzQjRrQixxQkFBdEIsQ0FBNEMsS0FBS3RrQixJQUFqRCxFQUF1RHpGLFFBQVFrTixNQUEvRDtBQUNBLGFBQU9sTixPQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7O21DQUtlO0FBQ2IsVUFBSWtULE9BQU8sS0FBS3ZNLFNBQUwsQ0FBZTJKLGlCQUExQjs7QUFFQSxVQUFJLENBQUM0QyxJQUFMLEVBQVc7QUFDVCxlQUFPLEtBQVA7QUFDRDs7QUFFRCxhQUFPQSxLQUFLMU8sRUFBTCxLQUFZLEtBQUtBLEVBQWpCLElBQXVCME8sS0FBS2lHLEtBQUwsQ0FBV29ELElBQVgsS0FBb0IsS0FBS3ZYLElBQWhELElBQXdEa08sS0FBS3ZNLFNBQUwsS0FBbUIsS0FBS0EsU0FBdkY7QUFDRDs7QUFFRDs7Ozs7Ozs7eUJBS0tsRCxFLEVBQUk7QUFDUCxXQUFLZSxFQUFMLENBQVE4RixnQkFBUixDQUF5QixLQUFLdEYsSUFBOUIsRUFBb0MsS0FBS3ZCLEVBQUwsR0FBVUEsRUFBOUM7QUFDRDs7QUFFRDs7Ozs7OzZCQUdTO0FBQ1AsV0FBS0EsRUFBTCxJQUFXLEtBQUtlLEVBQUwsQ0FBUUosbUJBQVIsQ0FBNEIsS0FBS1ksSUFBakMsRUFBdUMsS0FBS3ZCLEVBQTVDLENBQVg7QUFDRDs7Ozs7O2tCQTVFa0JuQyxZOzs7Ozs7Ozs7Ozs7O0FDTnJCOzs7O0FBQ0E7Ozs7OztBQUVBOzs7OztBQUtBLElBQU15QixRQUFRLElBQUlrWSxLQUFKLENBQVUsRUFBVixFQUFjO0FBQzFCbEksT0FBSyxhQUFDbUksTUFBRCxFQUFTbGEsR0FBVCxFQUFpQjtBQUNwQixRQUFJQSxPQUFPLFVBQVgsRUFBdUI7QUFDckIsYUFBT2thLE1BQVA7QUFDRDs7QUFFRCxXQUFPQSxPQUFPbGEsR0FBUCxDQUFQO0FBQ0QsR0FQeUI7QUFRMUJtYSxPQUFLLGFBQUNELE1BQUQsRUFBU2xhLEdBQVQsRUFBY3VLLEtBQWQsRUFBd0I7QUFDM0IsUUFBR3JLLGdCQUFNNlQsT0FBTixDQUFjbUcsT0FBT2xhLEdBQVAsQ0FBZCxFQUEyQnVLLEtBQTNCLENBQUgsRUFBc0M7QUFDcEMsYUFBTyxJQUFQO0FBQ0Q7O0FBRURBLFlBQVFySyxnQkFBTThULElBQU4sQ0FBV3pKLEtBQVgsRUFBa0IsRUFBRXVPLE9BQU8sSUFBVCxFQUFsQixDQUFSO0FBQ0FvQixXQUFPbGEsR0FBUCxJQUFjdUssS0FBZDtBQUNBMUwsb0JBQU1rSixJQUFOLElBQWNsSixnQkFBTWtKLElBQU4sQ0FBVzZULG9CQUFYLENBQWdDNWIsR0FBaEMsRUFBcUN1SyxLQUFyQyxDQUFkO0FBQ0EsV0FBTyxJQUFQO0FBQ0QsR0FqQnlCO0FBa0IxQjhQLGtCQUFnQix3QkFBQ0gsTUFBRCxFQUFTbGEsR0FBVCxFQUFpQjtBQUMvQm5CLG9CQUFNa0osSUFBTixJQUFjbEosZ0JBQU1rSixJQUFOLENBQVc2VCxvQkFBWCxDQUFnQzViLEdBQWhDLEVBQXFDMlIsU0FBckMsQ0FBZDtBQUNBLFdBQU91SSxPQUFPbGEsR0FBUCxDQUFQO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7QUF0QnlCLENBQWQsQ0FBZDs7a0JBeUJlK0IsSzs7Ozs7Ozs7Ozs7OztBQ2pDZjs7Ozs7O0FBRUE7Ozs7O0FBS0EsSUFBTTlCLFVBQVUsSUFBSWdhLEtBQUosQ0FBVSxFQUFWLEVBQWM7QUFDNUJFLE9BQUssYUFBQ0QsTUFBRCxFQUFTbGEsR0FBVCxFQUFjdUssS0FBZCxFQUF3QjtBQUMzQjJQLFdBQU9sYSxHQUFQLElBQWNuQixnQkFBTTJMLElBQU4sQ0FBV0QsS0FBWCxFQUFrQixFQUFFWSxrQkFBZ0JuTCxHQUFsQixFQUFsQixDQUFkO0FBQ0EsV0FBTyxJQUFQO0FBQ0QsR0FKMkI7QUFLNUJxYSxrQkFBZ0Isd0JBQUNILE1BQUQsRUFBU2xhLEdBQVQsRUFBaUI7QUFDL0JuQixvQkFBTWdOLFNBQU4sY0FBMkI3TCxHQUEzQjtBQUNBLFdBQU9rYSxPQUFPbGEsR0FBUCxDQUFQO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7QUFUMkIsQ0FBZCxDQUFoQjs7a0JBWWVDLE87Ozs7Ozs7Ozs7Ozs7OztBQ25CZjs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7O0lBT3FCb0IsSzs7Ozs7NkJBQ0g7QUFDZHhDLHNCQUFNOEcsU0FBTixDQUFnQixPQUFoQixFQUF5QixJQUF6QjtBQUNEOzs7QUFFRCxtQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTjhELElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLHlJQUNWQSxJQURVOztBQUduQixVQUFLakcsRUFBTCxDQUFRdUIsU0FBUixHQUFvQixFQUFwQjtBQUhtQjtBQUlwQjs7QUFFRDs7Ozs7Ozs7O2tDQUtjaWtCLFUsRUFBeUI7QUFBQTs7QUFBQSxVQUFiQyxJQUFhLHVFQUFOLElBQU07O0FBQ3JDLFVBQUlDLFFBQVFGLFdBQVdHLElBQVgsQ0FBZ0JELEtBQTVCOztBQUVBLFVBQU1FLDJCQUEyQixTQUEzQkEsd0JBQTJCLENBQUNELElBQUQsRUFBVTtBQUN6QyxZQUFJQSxLQUFLOVgsTUFBVCxFQUFpQjtBQUNmLGNBQUk4WCxLQUFLOVgsTUFBTCxDQUFZMUwsU0FBaEIsRUFBMkI7QUFDekIsbUJBQU93akIsS0FBSzlYLE1BQUwsQ0FBWTFMLFNBQVosQ0FBc0JDLE9BQXRCLENBQThCeWpCLFlBQTlCLENBQTJDRixJQUFsRDtBQUNEOztBQUVELGlCQUFPQyx5QkFBeUJELEtBQUs5WCxNQUE5QixDQUFQO0FBQ0Q7O0FBRUQsZUFBTyxJQUFQO0FBQ0QsT0FWRDs7QUFZQSxVQUFNdkosVUFBVSxTQUFWQSxPQUFVLENBQUMyRSxJQUFELEVBQVU7QUFDeEIsZUFBSzZjLEtBQUw7QUFDQSxZQUFJdGxCLE9BQU8sV0FBWDs7QUFFQSxZQUFHa2xCLE1BQU12akIsU0FBVCxFQUFvQjtBQUNsQixjQUFJNGpCLFNBQVMsS0FBYjs7QUFFQSxlQUFJLElBQUl2cEIsR0FBUixJQUFlbkIsZ0JBQU1RLFlBQXJCLEVBQW1DO0FBQ2pDLGdCQUFNc0csWUFBWTlHLGdCQUFNUSxZQUFOLENBQW1CVyxHQUFuQixDQUFsQjs7QUFFQSxnQkFBRzJGLGNBQWN1akIsTUFBTXZqQixTQUF2QixFQUFrQztBQUNoQzNCLHFCQUFPaEUsR0FBUDtBQUNBdXBCLHVCQUFTLElBQVQ7QUFDQTtBQUNEO0FBQ0Y7O0FBRUQsY0FBRyxDQUFDQSxNQUFKLEVBQVk7QUFDVixrQkFBTSxJQUFJemxCLEtBQUosb0JBQTJCb2xCLE1BQU1sbEIsSUFBakMsZ0NBQU47QUFDRDtBQUNGOztBQUVELGVBQUtSLEVBQUwsQ0FBUXVCLFNBQVIsU0FBeUJmLElBQXpCLFNBQW1DeUksSUFBbkMsVUFBOEN6SSxJQUE5QztBQUNBLGVBQU9uRixnQkFBTWlKLE9BQU4sQ0FBYyxPQUFLdEUsRUFBbkIsRUFBdUIsRUFBRWtELFdBQVcsSUFBYixFQUF2QixDQUFQO0FBQ0QsT0F4QkQ7O0FBMEJBLFdBQUtkLE9BQUwsQ0FBYXlqQixZQUFiLEdBQTRCO0FBQzFCaFksZ0JBQVErWCx5QkFBeUJKLFdBQVdHLElBQXBDLENBRGtCO0FBRTFCRCxlQUFPRixXQUFXRyxJQUFYLENBQWdCRCxLQUZHO0FBRzFCaFgsY0FBTThXLFdBQVdHLElBQVgsQ0FBZ0JqWCxJQUhJO0FBSTFCN0QsYUFBSzJhLFdBQVdHLElBQVgsQ0FBZ0I5YSxHQUpLO0FBSzFCK1UsZ0JBQVE0RixXQUFXRyxJQUFYLENBQWdCL0YsTUFMRTtBQU0xQmlDLGVBQU8yRCxXQUFXRyxJQUFYLENBQWdCOUQsS0FORztBQU8xQnhSLGNBQU1tVixXQUFXRyxJQUFYLENBQWdCdFY7QUFQSSxPQUE1Qjs7QUFVQSxVQUFJLENBQUNvVixJQUFMLEVBQVc7QUFDVCxlQUFPcHFCLGdCQUFNaUosT0FBTixDQUFjLEtBQUt0RSxFQUFuQixFQUF1QixFQUFFa0QsV0FBVyxFQUFFd0osY0FBYyxJQUFoQixFQUFiLEVBQXZCLENBQVA7QUFDRDs7QUFFRCxhQUFPL00sUUFBUW9ELE9BQVIsR0FBa0JDLElBQWxCLENBQXVCLFlBQU07QUFDbEMsWUFBSTBpQixNQUFNcmtCLFFBQVYsRUFBb0I7QUFDbEIsaUJBQU9xa0IsTUFBTXJrQixRQUFiO0FBQ0Q7O0FBRUQsWUFBSXFrQixNQUFNcFgsV0FBVixFQUF1QjtBQUNyQixpQkFBT2pRLGtCQUFRa1EsR0FBUixDQUFZbVgsTUFBTXBYLFdBQWxCLEVBQStCdEwsSUFBL0IsQ0FBb0M7QUFBQSxtQkFBT3BCLElBQUk4TSxJQUFYO0FBQUEsV0FBcEMsQ0FBUDtBQUNEO0FBQ0YsT0FSTSxFQVFKMUwsSUFSSSxDQVFDO0FBQUEsZUFBUXNCLFFBQVEyRSxJQUFSLENBQVI7QUFBQSxPQVJELENBQVA7QUFTRDs7OztFQWhGZ0NwTSxtQjs7a0JBQWRnQixLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hyQjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTs7Ozs7O0lBTWFtb0IsVSxXQUFBQSxVO0FBQ1gsc0JBQVluYixHQUFaLEVBQWtDO0FBQUEsUUFBakJvYixRQUFpQix1RUFBTixJQUFNOztBQUFBOztBQUNoQyxTQUFLcGIsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS29iLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS04sSUFBTCxHQUFZLElBQVo7QUFDQSxTQUFLTyxNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUtDLE1BQUwsR0FBYyxFQUFkO0FBQ0EsU0FBS2xpQixXQUFMLEdBQW1CLEtBQW5CO0FBQ0EsU0FBS21pQixTQUFMLEdBQWlCLEtBQWpCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs2QkFLU1YsSyxFQUFnRTtBQUFBLFVBQXpEOUYsTUFBeUQsdUVBQWhELEVBQWdEO0FBQUEsVUFBNUNpQyxLQUE0Qyx1RUFBcEMsRUFBb0M7QUFBQSxVQUFoQ3hSLElBQWdDLHVFQUF6QmxDLFNBQXlCO0FBQUEsVUFBZDNTLE9BQWMsdUVBQUosRUFBSTs7QUFDdkVBLDZCQUFlOEMsT0FBT2tuQixVQUFQLENBQWtCRyxJQUFsQixDQUF1Qm5xQixPQUF0QyxFQUFrREEsT0FBbEQ7QUFDQSxXQUFLeXBCLE1BQUw7QUFDQSxhQUFPM21CLE9BQU9vbkIsS0FBUCxDQUFhdmYsSUFBYixDQUFrQjdILE1BQWxCLEVBQTBCb25CLEtBQTFCLEVBQWlDOUYsTUFBakMsRUFBeUNpQyxLQUF6QyxFQUFnRHhSLElBQWhELEVBQXNEN1UsT0FBdEQsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs2QkFLZ0U7QUFBQSxVQUF6RG9rQixNQUF5RCx1RUFBaEQsRUFBZ0Q7QUFBQSxVQUE1Q2lDLEtBQTRDLHVFQUFwQyxFQUFvQztBQUFBLFVBQWhDeFIsSUFBZ0MsdUVBQXpCbEMsU0FBeUI7QUFBQSxVQUFkM1MsT0FBYyx1RUFBSixFQUFJOztBQUM5RG9rQiw0QkFBYyxLQUFLK0YsSUFBTCxDQUFVL0YsTUFBeEIsRUFBbUNBLE1BQW5DO0FBQ0FpQywyQkFBYSxLQUFLOEQsSUFBTCxDQUFVOUQsS0FBdkIsRUFBaUNBLEtBQWpDO0FBQ0F4UixhQUFPQSxTQUFTbEMsU0FBVCxHQUFvQixLQUFLd1gsSUFBTCxDQUFVdFYsSUFBOUIsR0FBb0NBLElBQTNDO0FBQ0EsYUFBTyxLQUFLZ1csUUFBTCxDQUFjLEtBQUtWLElBQUwsQ0FBVUQsS0FBVixDQUFnQmxsQixJQUE5QixFQUFvQ29mLE1BQXBDLEVBQTRDaUMsS0FBNUMsRUFBbUR4UixJQUFuRCxFQUF5RDdVLE9BQXpELENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7NEJBS1FtcUIsSSxFQUFNO0FBQ1pBLFdBQUs5WCxNQUFMLEdBQWMsS0FBSzhYLElBQUwsSUFBYSxJQUEzQjtBQUNBLFdBQUtBLElBQUwsY0FBYy9GLFFBQVEsRUFBdEIsRUFBMEJpQyxPQUFPLEVBQWpDLElBQXdDOEQsSUFBeEM7QUFDQSxXQUFLTyxNQUFMLENBQVlobkIsSUFBWixDQUFpQixLQUFLeW1CLElBQXRCO0FBQ0EsV0FBS1EsTUFBTCxDQUFZLEtBQUtSLElBQUwsQ0FBVUQsS0FBVixDQUFnQmxsQixJQUE1QixJQUFvQyxLQUFLbWxCLElBQXpDO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OzZCQUtTRCxLLEVBQU87QUFDZCxXQUFLLElBQUk3bUIsSUFBSSxDQUFSLEVBQVdDLElBQUksS0FBS29uQixNQUFMLENBQVlubkIsTUFBaEMsRUFBd0NGLElBQUlDLENBQTVDLEVBQStDRCxHQUEvQyxFQUFvRDtBQUNsRCxZQUFJeW5CLFFBQVEsS0FBS0osTUFBTCxDQUFZcm5CLENBQVosQ0FBWjs7QUFFQSxZQUFJeW5CLE1BQU1aLEtBQU4sS0FBZ0JBLEtBQXBCLEVBQTJCO0FBQ3pCLGlCQUFPWSxLQUFQO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPLElBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7NkJBS1NaLEssRUFBTztBQUNkLGFBQU8sQ0FBQyxDQUFDLEtBQUtTLE1BQUwsQ0FBWVQsTUFBTWxsQixJQUFsQixDQUFUO0FBQ0Q7O0FBRUQ7Ozs7Ozs7O21DQUtlOGxCLEssRUFBTztBQUNwQixVQUFHLENBQUMsS0FBS0wsUUFBVCxFQUFtQjtBQUNqQixlQUFPLElBQVA7QUFDRDs7QUFFRCxVQUFNUCxRQUFRWSxNQUFNWixLQUFwQjs7QUFFQSxVQUFHLENBQUMsS0FBS08sUUFBTCxDQUFjTSxRQUFkLENBQXVCYixLQUF2QixDQUFKLEVBQW1DO0FBQ2pDLGVBQU8sSUFBUDtBQUNEOztBQUVELFVBQU1jLFlBQVksRUFBbEI7QUFDQWQsWUFBTWUsV0FBTixDQUFrQm5sQixPQUFsQixDQUEwQmhELE9BQU9vb0IsWUFBakMsRUFBK0MsVUFBQ3JWLENBQUQsRUFBSXNWLENBQUosRUFBT2hGLENBQVA7QUFBQSxlQUFhNkUsVUFBVXRuQixJQUFWLENBQWV5aUIsQ0FBZixDQUFiO0FBQUEsT0FBL0M7O0FBRUEsV0FBSSxJQUFJbmxCLEdBQVIsSUFBZWtwQixNQUFNOUYsTUFBckIsRUFBNkI7QUFDM0IsWUFBRzRHLFVBQVU1ZSxPQUFWLENBQWtCcEwsR0FBbEIsS0FBMEIsQ0FBQyxDQUE5QixFQUFpQztBQUMvQmdxQixvQkFBVXRuQixJQUFWLENBQWUxQyxHQUFmO0FBQ0Q7QUFDRjs7QUFFRCxVQUFNb3FCLFlBQVlscEIsT0FBT29DLElBQVAsQ0FBWTRsQixNQUFNN0QsS0FBbEIsQ0FBbEI7QUFDQSxVQUFNZ0YsWUFBWW5CLE1BQU1yVixJQUFOLEtBQWVsQyxTQUFqQztBQUNBLFVBQU0yWSxZQUFZLEtBQUtiLFFBQUwsQ0FBY2MsUUFBZCxDQUF1QnJCLEtBQXZCLENBQWxCOztBQUVBLFVBQU1zQixPQUFPO0FBQ1hwSCxnQkFBUWxqQixnQkFBTXVnQixXQUFOLENBQWtCNkosVUFBVWxILE1BQTVCLEVBQW9DNEcsU0FBcEMsQ0FERztBQUVYM0UsZUFBT25sQixnQkFBTXVnQixXQUFOLENBQWtCNkosVUFBVWpGLEtBQTVCLEVBQW1DK0UsU0FBbkM7QUFGSSxPQUFiOztBQUtBLFVBQU0xZixVQUFVO0FBQ2QwWSxnQkFBUWxqQixnQkFBTXVnQixXQUFOLENBQWtCcUosTUFBTTFHLE1BQXhCLEVBQWdDNEcsU0FBaEMsQ0FETTtBQUVkM0UsZUFBT25sQixnQkFBTXVnQixXQUFOLENBQWtCcUosTUFBTXpFLEtBQXhCLEVBQStCK0UsU0FBL0I7QUFGTyxPQUFoQjs7QUFLQSxVQUFHQyxTQUFILEVBQWM7QUFDWkcsYUFBSzNXLElBQUwsR0FBWXlXLFVBQVV6VyxJQUF0QjtBQUNBbkosZ0JBQVFtSixJQUFSLEdBQWVpVyxNQUFNalcsSUFBckI7QUFDRDs7QUFFRCxhQUFPLENBQUMzVCxnQkFBTTZULE9BQU4sQ0FBY3lXLElBQWQsRUFBb0I5ZixPQUFwQixDQUFSO0FBQ0Q7O0FBRUQ7Ozs7Ozs2QkFHUztBQUNQLFdBQUtqRCxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsV0FBS2dqQixNQUFMO0FBQ0Q7O0FBRUQ7Ozs7Ozs2QkFHUztBQUNQLFdBQUtiLFNBQUwsR0FBaUIsSUFBakI7QUFDRDs7Ozs7O0FBR0g7Ozs7Ozs7QUFLQSxJQUFNOW5CLFNBQVMsRUFBZjs7QUFFQTs7O0FBR0FBLE9BQU8vQyxXQUFQLEdBQXFCLFlBQVk7QUFDL0IsT0FBS29qQixPQUFMLEdBQWUsR0FBZjtBQUNBLE9BQUt3SCxNQUFMLEdBQWMsRUFBZDtBQUNBLE9BQUtlLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxPQUFLQyxXQUFMLEdBQW1CLENBQW5CO0FBQ0EsT0FBS3hyQixNQUFMLEdBQWMsS0FBZDtBQUNBLE9BQUsrcUIsWUFBTCxHQUFvQixtQkFBcEI7QUFDQSxPQUFLVSxlQUFMLEdBQXVCO0FBQUEsV0FBS2hnQixhQUFhdkosZUFBbEI7QUFBQSxHQUF2QjtBQUNELENBUkQ7O0FBVUE7Ozs7Ozs7O0FBUUFTLE9BQU8rb0IsR0FBUCxHQUFhLFVBQVU3bUIsSUFBVixFQUFnQjhtQixPQUFoQixFQUF1QztBQUFBLE1BQWQ5ckIsT0FBYyx1RUFBSixFQUFJOztBQUNsRCxNQUFHLFFBQU9nRixJQUFQLHlDQUFPQSxJQUFQLE1BQWUsUUFBbEIsRUFBNEI7QUFDMUJoRixjQUFVZ0YsSUFBVjtBQUNBOG1CLGNBQVU5ckIsUUFBUThyQixPQUFsQjtBQUNBOW1CLFdBQU9oRixRQUFRa3FCLEtBQWY7QUFDQSxXQUFPbHFCLFFBQVE4ckIsT0FBZjtBQUNBLFdBQU85ckIsUUFBUWtxQixLQUFmO0FBQ0Q7O0FBRUQsTUFBRyxDQUFDbGxCLElBQUosRUFBVTtBQUNSLFVBQU0sSUFBSUYsS0FBSixpQ0FBTjtBQUNEOztBQUVELE1BQU1pbkIsaUJBQWlCO0FBQ3JCbG1CLGNBQVUsRUFEVztBQUVyQmlOLGlCQUFhLEVBRlE7QUFHckJrWixjQUFVLEtBSFc7QUFJckJybEIsZUFBVyxJQUpVO0FBS3JCeWQsWUFBUSxFQUxhO0FBTXJCaUMsV0FBTyxFQU5jO0FBT3JCMUcsYUFBUyxtQkFBTSxDQUFFO0FBUEksR0FBdkI7O0FBVUEsTUFBRzlmLGdCQUFNRyxPQUFOLENBQWNDLEtBQWQsSUFBdUJELFFBQVEyRyxTQUEvQixLQUE2QzNHLFFBQVE2RixRQUFSLElBQW9CN0YsUUFBUThTLFdBQXpFLENBQUgsRUFBMEY7QUFDeEY7QUFDQXRKLFlBQVFDLElBQVIsb0JBQThCekUsSUFBOUI7QUFDRDs7QUFFRCxNQUFJLENBQUNoRixRQUFRNkYsUUFBVCxJQUFxQixDQUFDN0YsUUFBUThTLFdBQTlCLElBQTZDLENBQUM5UyxRQUFRMkcsU0FBMUQsRUFBcUU7QUFDbkUzRyxZQUFRZ3NCLFFBQVIsR0FBbUIsSUFBbkI7QUFDRDs7QUFFRCxNQUFJLEtBQUtwSixHQUFMLENBQVM1ZCxJQUFULENBQUosRUFBb0I7QUFDbEIsVUFBTSxJQUFJRixLQUFKLG9CQUEyQkUsSUFBM0IseUJBQU47QUFDRDs7QUFFRCxPQUFLaW5CLFFBQUwsQ0FBY2puQixJQUFkLEVBQW9COG1CLE9BQXBCLGVBQWlDQyxjQUFqQyxFQUFvRC9yQixPQUFwRDtBQUNBLFNBQU8sSUFBUDtBQUNELENBdENEOztBQXdDQTs7Ozs7QUFLQThDLE9BQU95SCxNQUFQLEdBQWdCLFVBQVN2RixJQUFULEVBQWU7QUFDN0IsT0FBSyxJQUFJM0IsSUFBSSxDQUFSLEVBQVdDLElBQUksS0FBS3FuQixNQUFMLENBQVlwbkIsTUFBaEMsRUFBd0NGLElBQUlDLENBQTVDLEVBQStDRCxHQUEvQyxFQUFvRDtBQUNsRCxRQUFJLEtBQUtzbkIsTUFBTCxDQUFZdG5CLENBQVosRUFBZTJCLElBQWYsSUFBdUJBLElBQTNCLEVBQWlDO0FBQy9CLFdBQUsybEIsTUFBTCxDQUFZN2YsTUFBWixDQUFtQnpILENBQW5CLEVBQXNCLENBQXRCOztBQUVBO0FBQ0Q7QUFDRjtBQUNGLENBUkQ7O0FBVUE7Ozs7OztBQU1BUCxPQUFPOGYsR0FBUCxHQUFhLFVBQVM1ZCxJQUFULEVBQWU7QUFDMUIsT0FBSyxJQUFJM0IsSUFBSSxDQUFSLEVBQVdDLElBQUksS0FBS3FuQixNQUFMLENBQVlwbkIsTUFBaEMsRUFBd0NGLElBQUlDLENBQTVDLEVBQStDRCxHQUEvQyxFQUFvRDtBQUNsRCxRQUFJLEtBQUtzbkIsTUFBTCxDQUFZdG5CLENBQVosRUFBZTJCLElBQWYsSUFBdUJBLElBQTNCLEVBQWlDO0FBQy9CLGFBQU8sSUFBUDtBQUNEO0FBQ0Y7O0FBRUQsU0FBTyxLQUFQO0FBQ0QsQ0FSRDs7QUFVQTs7Ozs7Ozs7O0FBU0FsQyxPQUFPb25CLEtBQVAsR0FBZSxVQUFVQSxLQUFWLEVBQTBFO0FBQUEsTUFBekQ5RixNQUF5RCx1RUFBaEQsRUFBZ0Q7QUFBQSxNQUE1Q2lDLEtBQTRDLHVFQUFwQyxFQUFvQzs7QUFBQTs7QUFBQSxNQUFoQ3hSLElBQWdDLHVFQUF6QmxDLFNBQXlCO0FBQUEsTUFBZDNTLE9BQWMsdUVBQUosRUFBSTs7QUFDdkYsVUFBT2txQixLQUFQLHlDQUFPQSxLQUFQLE9BQWlCLFFBQWpCLEtBQThCQSxRQUFRLEtBQUtnQyxRQUFMLENBQWNoQyxLQUFkLENBQXRDOztBQUVBLE1BQUksQ0FBQ0EsS0FBTCxFQUFZO0FBQ1YsVUFBTSxJQUFJcGxCLEtBQUosc0NBQTZDb2xCLEtBQTdDLENBQU47QUFDRDs7QUFFRGxxQix5QkFBZUEsT0FBZjtBQUNBQSxVQUFRbXNCLE1BQVIsR0FBaUIsSUFBakI7O0FBUnVGLDBCQVNuRCxLQUFLQyxnQkFBTCxDQUFzQmxDLEtBQXRCLEVBQTZCOUYsTUFBN0IsRUFBcUNpQyxLQUFyQyxFQUE0Q3hSLElBQTVDLEVBQWtEN1UsT0FBbEQsRUFBMkQsS0FBM0QsQ0FUbUQ7O0FBU3BGb2tCLFFBVG9GLHFCQVNwRkEsTUFUb0Y7QUFTNUVpQyxPQVQ0RSxxQkFTNUVBLEtBVDRFO0FBU3JFeFIsTUFUcUUscUJBU3JFQSxJQVRxRTtBQVMvRDdVLFNBVCtELHFCQVMvREEsT0FUK0Q7O0FBVXZGLE1BQUlxUCxNQUFNLEtBQUtnZCxjQUFMLENBQW9CbkMsS0FBcEIsRUFBMkI5RixNQUEzQixFQUFtQ2lDLEtBQW5DLEVBQTBDeFIsSUFBMUMsRUFBZ0Q3VSxPQUFoRCxDQUFWO0FBQ0EsT0FBS21HLE9BQUwsQ0FBYTtBQUFBLFdBQU0sTUFBS2lKLE1BQUwsQ0FBWUMsR0FBWixDQUFOO0FBQUEsR0FBYjtBQUNBLFNBQU8sS0FBS3ZCLFdBQUwsQ0FBaUI5TixPQUFqQixDQUFQO0FBQ0QsQ0FiRDs7QUFlQTs7O0FBR0E4QyxPQUFPd3BCLElBQVAsR0FBYyxZQUFXO0FBQ3ZCLFNBQU90b0IsT0FBT3VvQixPQUFQLENBQWVELElBQWYsQ0FBb0J0aUIsS0FBcEIsQ0FBMEJoRyxPQUFPdW9CLE9BQWpDLEVBQTBDdGlCLFNBQTFDLENBQVA7QUFDRCxDQUZEOztBQUlBOzs7QUFHQW5ILE9BQU8wcEIsRUFBUCxHQUFZLFlBQVc7QUFDckIsU0FBT3hvQixPQUFPdW9CLE9BQVAsQ0FBZUMsRUFBZixDQUFrQnhpQixLQUFsQixDQUF3QmhHLE9BQU91b0IsT0FBL0IsRUFBd0N0aUIsU0FBeEMsQ0FBUDtBQUNELENBRkQ7O0FBSUE7OztBQUdBbkgsT0FBTzJwQixPQUFQLEdBQWlCLFlBQVc7QUFDMUIsU0FBT3pvQixPQUFPdW9CLE9BQVAsQ0FBZUUsT0FBZixDQUF1QnppQixLQUF2QixDQUE2QmhHLE9BQU91b0IsT0FBcEMsRUFBNkN0aUIsU0FBN0MsQ0FBUDtBQUNELENBRkQ7O0FBSUE7Ozs7OztBQU1BbkgsT0FBTzRwQixRQUFQLEdBQWtCLFVBQVVyZCxHQUFWLEVBQTZCO0FBQUE7O0FBQUEsTUFBZHJQLE9BQWMsdUVBQUosRUFBSTs7QUFDN0NBLHlCQUFlQSxPQUFmO0FBQ0FBLFVBQVFtc0IsTUFBUixHQUFpQixJQUFqQjtBQUNBLE9BQUtobUIsT0FBTCxDQUFhO0FBQUEsV0FBTSxPQUFLaUosTUFBTCxDQUFZQyxHQUFaLENBQU47QUFBQSxHQUFiO0FBQ0EsU0FBTyxLQUFLdkIsV0FBTCxDQUFpQjlOLE9BQWpCLENBQVA7QUFDRCxDQUxEOztBQU9BOzs7Ozs7QUFNQThDLE9BQU9xSyxJQUFQLEdBQWMsWUFBNEM7QUFBQTs7QUFBQSxNQUFsQ3dmLFVBQWtDLHVFQUFyQixFQUFxQjtBQUFBLE1BQWpCakIsUUFBaUIsdUVBQU4sSUFBTTs7QUFDeEQsTUFBSWtCLGVBQWU1b0IsT0FBT3VvQixPQUFQLENBQWVNLFNBQWxDOztBQUVBN29CLFNBQU91b0IsT0FBUCxDQUFlTSxTQUFmLEdBQTJCLFlBQVc7QUFDcEMsUUFBSXptQixNQUFNd21CLGFBQWE1aUIsS0FBYixDQUFtQixJQUFuQixFQUF5QkMsU0FBekIsQ0FBVjtBQUNBO0FBQ0FuSCxXQUFPZ0wsV0FBUCxHQUFxQnpELEtBQXJCLENBQTJCLFVBQUMyRCxHQUFEO0FBQUEsYUFBU3hFLFFBQVFzakIsS0FBUixDQUFjOWUsR0FBZCxDQUFUO0FBQUEsS0FBM0I7QUFDQSxXQUFPNUgsR0FBUDtBQUNELEdBTEQ7O0FBT0EsT0FBSzJtQixzQkFBTCxHQUE4QixZQUFNO0FBQ2xDO0FBQ0EsV0FBS2pmLFdBQUwsR0FBbUJ6RCxLQUFuQixDQUF5QixVQUFDMkQsR0FBRDtBQUFBLGFBQVN4RSxRQUFRc2pCLEtBQVIsQ0FBYzllLEdBQWQsQ0FBVDtBQUFBLEtBQXpCO0FBQ0QsR0FIRDs7QUFLQSxPQUFLMmUsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxPQUFLakIsUUFBTCxHQUFnQkEsUUFBaEI7O0FBRUEsT0FBS2YsTUFBTCxDQUFZOU4sSUFBWixDQUFpQixVQUFDdUUsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDekJELFFBQUlBLEVBQUVwYyxJQUFGLENBQU9pTCxLQUFQLENBQWEsR0FBYixFQUFrQjFNLE1BQXRCO0FBQ0E4ZCxRQUFJQSxFQUFFcmMsSUFBRixDQUFPaUwsS0FBUCxDQUFhLEdBQWIsRUFBa0IxTSxNQUF0QjtBQUNBLFdBQU82ZCxJQUFJQyxDQUFYO0FBQ0QsR0FKRDs7QUFNQSxPQUFLLElBQUloZSxJQUFJLENBQVIsRUFBV0MsSUFBSSxLQUFLcW5CLE1BQUwsQ0FBWXBuQixNQUFoQyxFQUF3Q0YsSUFBSUMsQ0FBNUMsRUFBK0NELEdBQS9DLEVBQW9EO0FBQ2xELFNBQUsycEIsU0FBTCxDQUFlLEtBQUtyQyxNQUFMLENBQVl0bkIsQ0FBWixDQUFmO0FBQ0Q7O0FBRUQsTUFBSSxDQUFDLEtBQUtzbkIsTUFBTCxDQUFZcG5CLE1BQWIsSUFBdUIxRCxnQkFBTUcsT0FBTixDQUFjQyxLQUF6QyxFQUFnRDtBQUM5QztBQUNBdUosWUFBUUMsSUFBUjtBQUNEOztBQUVEekYsU0FBT3NHLGdCQUFQLENBQXdCLFVBQXhCLEVBQW9DLEtBQUt5aUIsc0JBQXpDO0FBQ0EsT0FBSzVzQixNQUFMLEdBQWMsSUFBZDtBQUNELENBbkNEOztBQXFDQTs7Ozs7QUFLQTJDLE9BQU9rcUIsU0FBUCxHQUFtQixVQUFVOUMsS0FBVixFQUFpQjtBQUNsQyxNQUFJOVYsVUFBVSxFQUFkO0FBQ0E4VixRQUFNaGhCLFFBQU4sR0FBaUIsRUFBakI7QUFDQWtMLFlBQVU4VixNQUFNbGxCLElBQU4sQ0FBV2lMLEtBQVgsQ0FBaUIsR0FBakIsQ0FBVjtBQUNBbUUsVUFBUXdILEdBQVI7QUFDQXNPLFFBQU0xSyxLQUFOLEdBQWMwSyxNQUFNOEIsUUFBTixHQUFnQixJQUFoQixHQUFzQjVYLFFBQVE3USxNQUE1Qzs7QUFFQSxNQUFJNlEsUUFBUTdRLE1BQVosRUFBb0I7QUFDbEIsUUFBSTBwQixhQUFhN1ksUUFBUTFQLElBQVIsQ0FBYSxHQUFiLENBQWpCO0FBQ0EsUUFBSTJOLFNBQVMsS0FBSzZaLFFBQUwsQ0FBY2UsVUFBZCxDQUFiOztBQUVBLFFBQUksQ0FBQzVhLE1BQUwsRUFBYTtBQUNYLFlBQU0sSUFBSXZOLEtBQUosb0NBQTJDbW9CLFVBQTNDLGVBQStEL0MsTUFBTWxsQixJQUFyRSxPQUFOO0FBQ0Q7O0FBRUQsUUFBSWtsQixNQUFNMUssS0FBTixLQUFnQixJQUFoQixJQUF3Qm5OLE9BQU8yWixRQUFuQyxFQUE2QztBQUMzQzlCLFlBQU0xSyxLQUFOO0FBQ0Q7O0FBRUQwSyxVQUFNZSxXQUFOLEdBQW9CLEtBQUtpQyxZQUFMLENBQWtCN2EsT0FBTzRZLFdBQVAsR0FBcUIsR0FBckIsR0FBMkJmLE1BQU00QixPQUFuRCxDQUFwQjtBQUNBelosV0FBT25KLFFBQVAsQ0FBZ0J4RixJQUFoQixDQUFxQndtQixLQUFyQjtBQUNELEdBZEQsTUFlSztBQUNIQSxVQUFNZSxXQUFOLEdBQW9CZixNQUFNNEIsT0FBMUI7QUFDRDtBQUNGLENBekJEOztBQTJCQTs7Ozs7O0FBTUFocEIsT0FBT29wQixRQUFQLEdBQWtCLFVBQVVsbkIsSUFBVixFQUFnQjtBQUNoQyxPQUFLLElBQUkzQixJQUFJLENBQVIsRUFBV0MsSUFBSSxLQUFLcW5CLE1BQUwsQ0FBWXBuQixNQUFoQyxFQUF3Q0YsSUFBSUMsQ0FBNUMsRUFBK0NELEdBQS9DLEVBQW9EO0FBQ2xELFFBQUk2bUIsUUFBUSxLQUFLUyxNQUFMLENBQVl0bkIsQ0FBWixDQUFaOztBQUVBLFFBQUk2bUIsTUFBTWxsQixJQUFOLElBQWNBLElBQWxCLEVBQXdCO0FBQ3RCLGFBQU9rbEIsS0FBUDtBQUNEO0FBQ0Y7O0FBRUQsU0FBTyxJQUFQO0FBQ0QsQ0FWRDs7QUFZQTs7Ozs7OztBQU9BcG5CLE9BQU9tcEIsUUFBUCxHQUFrQixVQUFVam5CLElBQVYsRUFBZ0I4bUIsT0FBaEIsRUFBdUM7QUFBQSxNQUFkOXJCLE9BQWMsdUVBQUosRUFBSTs7QUFDdkQsTUFBSWtxQixxQkFBWWxxQixPQUFaLElBQXFCZ0YsVUFBckIsRUFBMkI4bUIsZ0JBQTNCLEdBQUo7QUFDQSxPQUFLbkIsTUFBTCxDQUFZam5CLElBQVosQ0FBaUJ3bUIsS0FBakI7QUFDQSxPQUFLL3BCLE1BQUwsSUFBZSxLQUFLNnNCLFNBQUwsQ0FBZTlDLEtBQWYsQ0FBZjtBQUNBLFNBQU9BLEtBQVA7QUFDRCxDQUxEOztBQU9BOzs7OztBQUtBcG5CLE9BQU9xcUIsV0FBUCxHQUFxQixVQUFVbm9CLElBQVYsRUFBZ0I7QUFDbkMsT0FBSyxJQUFJM0IsSUFBSSxDQUFSLEVBQVdDLElBQUksS0FBS3FuQixNQUFMLENBQVlwbkIsTUFBaEMsRUFBd0NGLElBQUlDLENBQTVDLEVBQStDRCxHQUEvQyxFQUFvRDtBQUNsRCxRQUFJNm1CLFFBQVEsS0FBS1MsTUFBTCxDQUFZdG5CLENBQVosQ0FBWjs7QUFFQSxRQUFJNm1CLE1BQU1sbEIsSUFBTixJQUFjQSxJQUFsQixFQUF3QjtBQUN0QixXQUFLMmxCLE1BQUwsQ0FBWTdmLE1BQVosQ0FBbUJ6SCxDQUFuQixFQUFzQixDQUF0Qjs7QUFFQTtBQUNEO0FBQ0Y7QUFDRixDQVZEOztBQVlBOzs7OztBQUtBUCxPQUFPc00sTUFBUCxHQUFnQixVQUFVQyxHQUFWLEVBQWU7QUFDN0IsT0FBS3FjLFFBQUwsR0FBZSxLQUFLMEIsVUFBTCxDQUFnQi9kLEdBQWhCLENBQWYsR0FBcUMsS0FBS2dlLGFBQUwsQ0FBbUJoZSxHQUFuQixDQUFyQztBQUNELENBRkQ7O0FBSUE7Ozs7O0FBS0F2TSxPQUFPdXFCLGFBQVAsR0FBdUIsVUFBVWhlLEdBQVYsRUFBZTtBQUNwQ3JMLFNBQU91b0IsT0FBUCxDQUFlTSxTQUFmLENBQXlCbGEsU0FBekIsRUFBb0NBLFNBQXBDLEVBQStDdEQsR0FBL0M7QUFDRCxDQUZEOztBQUlBOzs7OztBQUtBdk0sT0FBT3NxQixVQUFQLEdBQW9CLFVBQVUvZCxHQUFWLEVBQWU7QUFDakNyTCxTQUFPMG9CLFFBQVAsQ0FBZ0I3WCxJQUFoQixHQUF1QixPQUFPeEYsT0FBTyxHQUFkLENBQXZCO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7QUFLQXZNLE9BQU93cUIsVUFBUCxHQUFvQixVQUFVamUsR0FBVixFQUFlO0FBQ2pDLE9BQUtxYyxRQUFMLEdBQWUsS0FBSzZCLGNBQUwsQ0FBb0JsZSxHQUFwQixDQUFmLEdBQXlDLEtBQUttZSxpQkFBTCxDQUF1Qm5lLEdBQXZCLENBQXpDO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7QUFLQXZNLE9BQU8wcUIsaUJBQVAsR0FBMkIsVUFBVW5lLEdBQVYsRUFBZTtBQUN4Q3JMLFNBQU91b0IsT0FBUCxDQUFla0IsWUFBZixDQUE0QjlhLFNBQTVCLEVBQXVDQSxTQUF2QyxFQUFrRHRELEdBQWxEO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7QUFLQXZNLE9BQU95cUIsY0FBUCxHQUF3QixVQUFVbGUsR0FBVixFQUFlO0FBQ3JDckwsU0FBT3VvQixPQUFQLENBQWVrQixZQUFmLENBQTRCOWEsU0FBNUIsRUFBdUNBLFNBQXZDLEVBQWtELE9BQU90RCxPQUFPLEdBQWQsQ0FBbEQ7QUFDRCxDQUZEOztBQUlBOzs7OztBQUtBdk0sT0FBTzRxQixNQUFQLEdBQWdCLFlBQVk7QUFDMUIsU0FBTyxLQUFLaEMsUUFBTCxHQUFnQixLQUFLaUMsVUFBTCxFQUFoQixHQUFvQyxLQUFLQyxhQUFMLEVBQTNDO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7QUFLQTlxQixPQUFPOHFCLGFBQVAsR0FBdUIsWUFBWTtBQUNqQyxTQUFPNXBCLE9BQU8wb0IsUUFBUCxDQUFnQm1CLFFBQWhCLEdBQTJCN3BCLE9BQU8wb0IsUUFBUCxDQUFnQm9CLE1BQTNDLEdBQW9EOXBCLE9BQU8wb0IsUUFBUCxDQUFnQjdYLElBQTNFO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7QUFLQS9SLE9BQU82cUIsVUFBUCxHQUFvQixZQUFZO0FBQzlCLFNBQU8zcEIsT0FBTzBvQixRQUFQLENBQWdCN1gsSUFBaEIsQ0FBcUIvTyxPQUFyQixDQUE2QixJQUE3QixFQUFtQyxFQUFuQyxDQUFQO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7QUFLQWhELE9BQU9pckIsV0FBUCxHQUFxQixZQUFXO0FBQzlCLFNBQU8sS0FBS3JDLFFBQUwsR0FBZ0IsS0FBS3NDLGVBQUwsRUFBaEIsR0FBeUMsS0FBS0Msa0JBQUwsRUFBaEQ7QUFDRCxDQUZEOztBQUlBOzs7OztBQUtBbnJCLE9BQU9tckIsa0JBQVAsR0FBNEIsWUFBVztBQUNyQyxTQUFPcHJCLGtCQUFRcXJCLGVBQVIsQ0FBd0JscUIsT0FBTzBvQixRQUFQLENBQWdCb0IsTUFBaEIsQ0FBdUJob0IsT0FBdkIsQ0FBK0IsS0FBL0IsRUFBc0MsRUFBdEMsQ0FBeEIsQ0FBUDtBQUNELENBRkQ7O0FBSUE7Ozs7O0FBS0FoRCxPQUFPa3JCLGVBQVAsR0FBeUIsWUFBVztBQUNsQyxTQUFPbnJCLGtCQUFRcXJCLGVBQVIsQ0FBeUJscUIsT0FBTzBvQixRQUFQLENBQWdCN1gsSUFBaEIsQ0FBcUI1RSxLQUFyQixDQUEyQixHQUEzQixFQUFnQyxDQUFoQyxLQUFzQyxFQUEvRCxDQUFQO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7Ozs7OztBQVVBbk4sT0FBT3VwQixjQUFQLEdBQXdCLFVBQVVuQyxLQUFWLEVBQTBGO0FBQUEsTUFBekU5RixNQUF5RSx1RUFBaEUsRUFBZ0U7QUFBQSxNQUE1RGlDLEtBQTRELHVFQUFwRCxFQUFvRDtBQUFBLE1BQWhEeFIsSUFBZ0QsdUVBQXpDbEMsU0FBeUM7QUFBQSxNQUE5QjNTLE9BQThCLHVFQUFwQixFQUFvQjtBQUFBLE1BQWhCbXVCLE9BQWdCLHVFQUFOLElBQU07O0FBQ2hILFVBQU9qRSxLQUFQLHlDQUFPQSxLQUFQLE9BQWlCLFFBQWpCLEtBQThCQSxRQUFRLEtBQUtnQyxRQUFMLENBQWNoQyxLQUFkLENBQXRDO0FBQ0FscUIseUJBQWVBLE9BQWY7O0FBRUEsTUFBR211QixPQUFILEVBQVk7QUFBQSw2QkFDMEIsS0FBSy9CLGdCQUFMLENBQXNCbEMsS0FBdEIsRUFBNkI5RixNQUE3QixFQUFxQ2lDLEtBQXJDLEVBQTRDeFIsSUFBNUMsRUFBa0Q3VSxPQUFsRCxDQUQxQjs7QUFDUG9rQixVQURPLHNCQUNQQSxNQURPO0FBQ0NpQyxTQURELHNCQUNDQSxLQUREO0FBQ1F4UixRQURSLHNCQUNRQSxJQURSO0FBQ2M3VSxXQURkLHNCQUNjQSxPQURkO0FBRVg7O0FBRUQsTUFBSXFQLE1BQU02YSxNQUFNZSxXQUFOLENBQWtCbmxCLE9BQWxCLENBQTBCLEtBQUtvbEIsWUFBL0IsRUFBNkMsVUFBQ3JWLENBQUQsRUFBSXNWLENBQUosRUFBT2hGLENBQVA7QUFBQSxXQUFhLE9BQU8vQixPQUFPK0IsQ0FBUCxLQUFhLEVBQXBCLENBQWI7QUFBQSxHQUE3QyxDQUFWO0FBQ0E5VyxRQUFNQSxJQUFJdkosT0FBSixDQUFZLEtBQVosRUFBbUIsRUFBbkIsQ0FBTjtBQUNBdUosUUFBTSxLQUFLNmQsWUFBTCxDQUFrQjdkLEdBQWxCLENBQU47O0FBRUEsTUFBSW5OLE9BQU9vQyxJQUFQLENBQVkraEIsS0FBWixFQUFtQjlpQixNQUF2QixFQUErQjtBQUM3QjhMLFdBQU8sTUFBTXhNLGtCQUFRd2hCLGFBQVIsQ0FBc0JnQyxLQUF0QixDQUFiO0FBQ0Q7O0FBRUQsTUFBSSxDQUFDLEtBQUtxRixRQUFOLElBQWtCN1csSUFBdEIsRUFBNEI7QUFDMUJ4RixXQUFPLE1BQU13RixLQUFLL08sT0FBTCxDQUFhLEdBQWIsRUFBa0IsRUFBbEIsQ0FBYjtBQUNEOztBQUVELFNBQU91SixHQUFQO0FBQ0QsQ0FyQkQ7O0FBdUJBOzs7Ozs7Ozs7QUFTQXZNLE9BQU9zcEIsZ0JBQVAsR0FBMEIsVUFBVWxDLEtBQVYsRUFBMEU7QUFBQSxNQUF6RDlGLE1BQXlELHVFQUFoRCxFQUFnRDtBQUFBLE1BQTVDaUMsS0FBNEMsdUVBQXBDLEVBQW9DO0FBQUEsTUFBaEN4UixJQUFnQyx1RUFBekJsQyxTQUF5QjtBQUFBLE1BQWQzUyxPQUFjLHVFQUFKLEVBQUk7O0FBQ2xHLE1BQUl5SyxPQUFPLEVBQUUyWixjQUFGLEVBQVVpQyxZQUFWLEVBQWlCeFIsVUFBakIsRUFBdUI3VSxnQkFBdkIsRUFBWDs7QUFFQSxPQUFJLElBQUlxRCxJQUFJLENBQVosRUFBZUEsSUFBSSxDQUFuQixFQUFzQkEsR0FBdEIsRUFBMkI7QUFDekIsUUFBTStxQixhQUFhLEtBQUtDLGtCQUFMLENBQXdCbkUsS0FBeEIsRUFBK0I5RixNQUEvQixFQUF1QzNaLElBQXZDLENBQW5CO0FBQ0EsUUFBTTZqQixZQUFZLEtBQUtDLGlCQUFMLENBQXVCckUsS0FBdkIsRUFBOEI3RCxLQUE5QixFQUFxQzViLElBQXJDLENBQWxCO0FBQ0EsUUFBTStqQixXQUFXLEtBQUtDLGdCQUFMLENBQXNCdkUsS0FBdEIsRUFBNkJyVixJQUE3QixFQUFtQ3BLLElBQW5DLENBQWpCOztBQUVBLFFBQUcrakIsYUFBYSxJQUFoQixFQUFzQjtBQUNwQnh1QixjQUFRMHVCLFNBQVIsR0FBb0IsSUFBcEI7QUFDRCxLQUZELE1BR0ssSUFBR0YsYUFBYSxFQUFoQixFQUFvQjtBQUN2Qnh1QixjQUFRMHVCLFNBQVIsR0FBb0IsRUFBcEI7QUFDRDs7QUFFRGprQixXQUFPLEVBQUUyWixRQUFRZ0ssVUFBVixFQUFzQi9ILE9BQU9pSSxTQUE3QixFQUF3Q3paLE1BQU0yWixRQUE5QyxFQUF3RHh1QixnQkFBeEQsRUFBUDtBQUNEOztBQUVELFNBQU95SyxJQUFQO0FBQ0QsQ0FuQkQ7O0FBcUJBOzs7Ozs7O0FBT0EzSCxPQUFPdXJCLGtCQUFQLEdBQTRCLFVBQVNuRSxLQUFULEVBQWdCOUYsTUFBaEIsRUFBd0IzWixJQUF4QixFQUE4QjtBQUN4RCxVQUFPeWYsS0FBUCx5Q0FBT0EsS0FBUCxPQUFpQixRQUFqQixLQUE4QkEsUUFBUSxLQUFLZ0MsUUFBTCxDQUFjaEMsS0FBZCxDQUF0QztBQUNBLE1BQU05VCxPQUFPLENBQUNnTyxNQUFELENBQWI7QUFDQSxNQUFNdUcsU0FBU1QsTUFBTWxsQixJQUFOLENBQVdpTCxLQUFYLENBQWlCLEdBQWpCLENBQWY7O0FBRUEsT0FBSSxJQUFJNU0sSUFBSSxDQUFSLEVBQVdDLElBQUlxbkIsT0FBT3BuQixNQUExQixFQUFrQ0YsSUFBSUMsQ0FBdEMsRUFBeUNELEdBQXpDLEVBQThDO0FBQzVDLFFBQUlxSSxVQUFVaWYsT0FBT2pnQixLQUFQLENBQWEsQ0FBYixFQUFnQmlnQixPQUFPcG5CLE1BQVAsR0FBZ0JGLENBQWhDLEVBQW1DcUIsSUFBbkMsQ0FBd0MsR0FBeEMsQ0FBZDtBQUNBMFIsU0FBSzFTLElBQUwsQ0FBVSxLQUFLd29CLFFBQUwsQ0FBY3hnQixPQUFkLEVBQXVCMFksTUFBakM7QUFDRDs7QUFFRCxTQUFPLEtBQUt1SyxlQUFMLENBQXFCdlksSUFBckIsRUFBMkIzTCxJQUEzQixDQUFQO0FBQ0QsQ0FYRDs7QUFhQTs7Ozs7OztBQU9BM0gsT0FBT3lyQixpQkFBUCxHQUEyQixVQUFTckUsS0FBVCxFQUFnQjdELEtBQWhCLEVBQXVCNWIsSUFBdkIsRUFBNkI7QUFDdEQsVUFBT3lmLEtBQVAseUNBQU9BLEtBQVAsT0FBaUIsUUFBakIsS0FBOEJBLFFBQVEsS0FBS2dDLFFBQUwsQ0FBY2hDLEtBQWQsQ0FBdEM7QUFDQSxNQUFNOVQsT0FBTyxDQUFDaVEsS0FBRCxDQUFiO0FBQ0EsTUFBTXNFLFNBQVNULE1BQU1sbEIsSUFBTixDQUFXaUwsS0FBWCxDQUFpQixHQUFqQixDQUFmOztBQUVBLE9BQUksSUFBSTVNLElBQUksQ0FBUixFQUFXQyxJQUFJcW5CLE9BQU9wbkIsTUFBMUIsRUFBa0NGLElBQUlDLENBQXRDLEVBQXlDRCxHQUF6QyxFQUE4QztBQUM1QyxRQUFNcUksVUFBVWlmLE9BQU9qZ0IsS0FBUCxDQUFhLENBQWIsRUFBZ0JpZ0IsT0FBT3BuQixNQUFQLEdBQWdCRixDQUFoQyxFQUFtQ3FCLElBQW5DLENBQXdDLEdBQXhDLENBQWhCO0FBQ0EwUixTQUFLMVMsSUFBTCxDQUFVLEtBQUt3b0IsUUFBTCxDQUFjeGdCLE9BQWQsRUFBdUIyYSxLQUFqQztBQUNEOztBQUVELFNBQU8sS0FBS3NJLGVBQUwsQ0FBcUJ2WSxJQUFyQixFQUEyQjNMLElBQTNCLENBQVA7QUFDRCxDQVhEOztBQWFBOzs7Ozs7QUFNQTNILE9BQU82ckIsZUFBUCxHQUF5QixVQUFVdlksSUFBVixFQUFrRDtBQUFBLE1BQWxDM0wsSUFBa0MsdUVBQTNCLEVBQUUyWixRQUFRLEVBQVYsRUFBY2lDLE9BQU8sRUFBckIsRUFBMkI7O0FBQ3pFLE1BQU1oZCxNQUFNLEVBQVo7QUFDQSxNQUFNdWxCLFdBQVcsRUFBakI7O0FBRUEsT0FBSSxJQUFJdnJCLElBQUksQ0FBUixFQUFXQyxJQUFJOFMsS0FBSzdTLE1BQXhCLEVBQWdDRixJQUFJQyxDQUFwQyxFQUF1Q0QsR0FBdkMsRUFBNEM7QUFDMUMsUUFBTW9JLE1BQU0ySyxLQUFLL1MsQ0FBTCxDQUFaO0FBQ0EsUUFBTWlCLE9BQU9wQyxPQUFPb0MsSUFBUCxDQUFZbUgsR0FBWixDQUFiOztBQUVBLFNBQUksSUFBSW5GLElBQUksQ0FBUixFQUFXc0YsSUFBSXRILEtBQUtmLE1BQXhCLEVBQWdDK0MsSUFBSXNGLENBQXBDLEVBQXVDdEYsR0FBdkMsRUFBNEM7QUFDMUMsVUFBSXRGLE1BQU1zRCxLQUFLZ0MsQ0FBTCxDQUFWO0FBQ0EsVUFBSUcsTUFBTWdGLElBQUl6SyxHQUFKLENBQVY7O0FBRUEsVUFBRzR0QixTQUFTNXRCLEdBQVQsQ0FBSCxFQUFrQjtBQUNoQjtBQUNEOztBQUVEeUYsWUFBTSxPQUFPQSxHQUFQLElBQWMsVUFBZCxHQUEwQkEsSUFBSWdFLElBQUosQ0FBMUIsR0FBcUNoRSxHQUEzQzs7QUFFQSxVQUFHQSxRQUFRa00sU0FBWCxFQUFzQjtBQUNwQjtBQUNEOztBQUVELFVBQUdsTSxRQUFRLElBQVgsRUFBaUI7QUFDZixlQUFPNEMsSUFBSXJJLEdBQUosQ0FBUDtBQUNBNHRCLGlCQUFTNXRCLEdBQVQsSUFBZ0IsSUFBaEI7QUFDQTtBQUNEOztBQUVEcUksVUFBSXJJLEdBQUosSUFBV3lGLEdBQVg7QUFDRDtBQUNGOztBQUVELFNBQU80QyxHQUFQO0FBQ0QsQ0FqQ0Q7O0FBbUNBOzs7Ozs7O0FBT0F2RyxPQUFPMnJCLGdCQUFQLEdBQTBCLFVBQVN2RSxLQUFULEVBQWdCclYsSUFBaEIsRUFBc0JwSyxJQUF0QixFQUE0QjtBQUNwRCxNQUFHb0ssU0FBUyxJQUFaLEVBQWtCO0FBQ2hCLFdBQU9BLElBQVA7QUFDRDs7QUFFRCxVQUFPcVYsS0FBUCx5Q0FBT0EsS0FBUCxPQUFpQixRQUFqQixLQUE4QkEsUUFBUSxLQUFLZ0MsUUFBTCxDQUFjaEMsS0FBZCxDQUF0QztBQUNBLE1BQU1TLFNBQVNULE1BQU1sbEIsSUFBTixDQUFXaUwsS0FBWCxDQUFpQixHQUFqQixDQUFmOztBQUVBLE9BQUksSUFBSTVNLElBQUksQ0FBUixFQUFXQyxJQUFJcW5CLE9BQU9wbkIsTUFBMUIsRUFBa0NGLElBQUlDLENBQXRDLEVBQXlDRCxHQUF6QyxFQUE4QztBQUM1QyxRQUFNcUksVUFBVWlmLE9BQU9qZ0IsS0FBUCxDQUFhLENBQWIsRUFBZ0JpZ0IsT0FBT3BuQixNQUFQLEdBQWdCRixDQUFoQyxFQUFtQ3FCLElBQW5DLENBQXdDLEdBQXhDLENBQWhCO0FBQ0EsUUFBSStCLE1BQU0sS0FBS3lsQixRQUFMLENBQWN4Z0IsT0FBZCxFQUF1Qm1KLElBQWpDO0FBQ0FwTyxVQUFNLE9BQU9BLEdBQVAsSUFBYyxVQUFkLEdBQTBCQSxJQUFJZ0UsSUFBSixDQUExQixHQUFxQ2hFLEdBQTNDOztBQUVBLFFBQUdBLFFBQVFrTSxTQUFYLEVBQXNCO0FBQ3BCO0FBQ0Q7O0FBRUQsUUFBR2xNLFFBQVEsSUFBWCxFQUFpQjtBQUNmLGFBQU8sSUFBUDtBQUNEOztBQUVEb08sV0FBT3BPLEdBQVA7QUFDRDs7QUFFRCxTQUFPb08sSUFBUDtBQUNELENBekJEOztBQTJCQTs7Ozs7O0FBTUEvUixPQUFPb3FCLFlBQVAsR0FBc0IsVUFBVTdkLEdBQVYsRUFBZTtBQUNuQyxTQUFPQSxJQUFJdkosT0FBSixDQUFZLE9BQVosRUFBcUIsR0FBckIsQ0FBUDtBQUNELENBRkQ7O0FBSUE7Ozs7Ozs7QUFPQWhELE9BQU8rckIsaUJBQVAsR0FBMkIsVUFBVTNFLEtBQVYsRUFBaUI3YSxHQUFqQixFQUFzQjtBQUMvQyxVQUFPNmEsS0FBUCx5Q0FBT0EsS0FBUCxPQUFpQixRQUFqQixLQUE4QkEsUUFBUSxLQUFLZ0MsUUFBTCxDQUFjaEMsS0FBZCxDQUF0QztBQUNBLE1BQUk1bEIsT0FBTyxFQUFYO0FBQ0EsTUFBSThmLFNBQVMsRUFBYjs7QUFFQS9VLFFBQU1BLElBQUlZLEtBQUosQ0FBVSxHQUFWLEVBQWUsQ0FBZixDQUFOO0FBQ0FaLFFBQU1BLElBQUlZLEtBQUosQ0FBVSxHQUFWLEVBQWUsQ0FBZixDQUFOOztBQUVBLE1BQUk2ZSxhQUFhNUUsTUFBTWUsV0FBTixDQUFrQm5sQixPQUFsQixDQUEwQixLQUFLb2xCLFlBQS9CLEVBQTZDLFVBQUNyVixDQUFELEVBQUlzVixDQUFKLEVBQU9oRixDQUFQLEVBQWE7QUFDekU3aEIsU0FBS1osSUFBTCxDQUFVeWlCLENBQVY7QUFDQSxXQUFPLFdBQVA7QUFDRCxHQUhnQixDQUFqQjs7QUFLQTJJLGVBQWFBLFdBQVdocEIsT0FBWCxDQUFtQixlQUFuQixFQUFvQyxJQUFwQyxDQUFiO0FBQ0EsTUFBSWlwQixRQUFRLElBQUl0ZixNQUFKLENBQVdxZixVQUFYLEVBQXVCLEdBQXZCLENBQVo7QUFDQSxNQUFJRSxhQUFhM2YsSUFBSTJSLEtBQUosQ0FBVStOLEtBQVYsQ0FBakI7O0FBRUEsTUFBSSxDQUFDQyxVQUFMLEVBQWlCO0FBQ2YsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQzZixNQUFJdkosT0FBSixDQUFZaXBCLEtBQVosRUFBbUIsVUFBQ2xaLENBQUQsRUFBZ0I7QUFBQSxzQ0FBVHBMLElBQVM7QUFBVEEsVUFBUztBQUFBOztBQUNqQ0EsV0FBT0EsS0FBS0MsS0FBTCxDQUFXLENBQVgsRUFBY0QsS0FBS2xILE1BQUwsR0FBYyxDQUE1QixDQUFQOztBQUVBLFNBQUksSUFBSUYsSUFBSSxDQUFSLEVBQVdDLElBQUltSCxLQUFLbEgsTUFBeEIsRUFBZ0NGLElBQUlDLENBQXBDLEVBQXVDRCxHQUF2QyxFQUE0QztBQUMxQyxVQUFJOGlCLElBQUkxYixLQUFLcEgsQ0FBTCxDQUFSO0FBQ0E4aUIsWUFBTS9CLE9BQU85ZixLQUFLakIsQ0FBTCxDQUFQLElBQWtCOGlCLENBQXhCO0FBQ0Q7QUFDRixHQVBEOztBQVNBLFNBQU8sRUFBRS9CLGNBQUYsRUFBUDtBQUNELENBL0JEOztBQWlDQTs7Ozs7OztBQU9BdGhCLE9BQU9tc0IsYUFBUCxHQUF1QixVQUFTL0UsS0FBVCxFQUFrQztBQUFBLE1BQWxCZ0YsUUFBa0IsdUVBQVAsS0FBTzs7QUFDdkQsVUFBT2hGLEtBQVAseUNBQU9BLEtBQVAsT0FBaUIsUUFBakIsS0FBOEJBLFFBQVEsS0FBS2dDLFFBQUwsQ0FBY2hDLEtBQWQsQ0FBdEM7QUFDQSxNQUFJN2EsTUFBTXZNLE9BQU9rbkIsVUFBUCxJQUFxQixDQUFDbG5CLE9BQU9rbkIsVUFBUCxDQUFrQm1GLFVBQXhDLEdBQW9EcnNCLE9BQU9rbkIsVUFBUCxDQUFrQjNhLEdBQXRFLEdBQTJFLEtBQUtxZSxNQUFMLEVBQXJGO0FBQ0FyZSxRQUFNLEtBQUs2ZCxZQUFMLENBQWtCLE1BQU03ZCxJQUFJWSxLQUFKLENBQVUsR0FBVixFQUFlLENBQWYsQ0FBTixHQUEwQixHQUE1QyxDQUFOO0FBQ0EsTUFBSTZlLGFBQWE1RSxNQUFNZSxXQUFOLENBQWtCbmxCLE9BQWxCLENBQTBCLEtBQUtvbEIsWUFBL0IsRUFBNkMsV0FBN0MsQ0FBakI7QUFDQTRELGVBQWFBLFdBQVdocEIsT0FBWCxDQUFtQixLQUFuQixFQUEwQixFQUExQixFQUE4QkEsT0FBOUIsQ0FBc0MsS0FBdEMsRUFBNkMsRUFBN0MsQ0FBYjtBQUNBLE1BQUlJLE1BQU1ncEIsV0FBVUosVUFBVixHQUFzQixLQUFLNUIsWUFBTCxDQUFrQixPQUFPNEIsVUFBUCxHQUFvQixJQUF0QyxDQUFoQztBQUNBLE1BQUlDLFFBQVEsSUFBSXRmLE1BQUosQ0FBV3ZKLEdBQVgsQ0FBWjtBQUNBLFNBQU82b0IsTUFBTTVhLElBQU4sQ0FBVzlFLEdBQVgsQ0FBUDtBQUNELENBVEQ7O0FBV0E7Ozs7OztBQU1Bdk0sT0FBT3NzQixhQUFQLEdBQXVCLFVBQVNsRixLQUFULEVBQWdCO0FBQ3JDLFNBQU9wbkIsT0FBT21zQixhQUFQLENBQXFCL0UsS0FBckIsRUFBNEIsSUFBNUIsQ0FBUDtBQUNELENBRkQ7O0FBSUE7Ozs7O0FBS0FwbkIsT0FBT3lvQixRQUFQLEdBQWtCLFVBQVUvTCxLQUFWLEVBQWlCO0FBQUE7O0FBQ2pDLE1BQUluYyxJQUFJLENBQVI7O0FBRUEsTUFBTXFGLE9BQU8sU0FBUEEsSUFBTyxDQUFDbEUsRUFBRCxFQUFRO0FBQ25CLFFBQUlzbUIsUUFBUXRtQixHQUFHMkUsS0FBSCxDQUFTLE9BQUt5aUIsZUFBZCxDQUFaOztBQUVBLFFBQUksQ0FBQ2QsS0FBTCxFQUFZO0FBQ1YsYUFBTyxJQUFQO0FBQ0Q7O0FBRUQsUUFBSXpuQixLQUFLbWMsS0FBVCxFQUFnQjtBQUNkLGFBQU9zTCxLQUFQO0FBQ0Q7O0FBRUR6bkI7QUFDQSxXQUFPcUYsS0FBS29pQixLQUFMLENBQVA7QUFDRCxHQWJEOztBQWVBLFNBQU9waUIsS0FBSzdJLGdCQUFNa0osSUFBWCxDQUFQO0FBQ0QsQ0FuQkQ7O0FBcUJBOzs7Ozs7O0FBT0FqRyxPQUFPdXNCLHNCQUFQLEdBQWdDLFVBQVU5cEIsR0FBVixFQUFlOEosR0FBZixFQUFvQjtBQUNsRCxPQUFLLElBQUloTSxJQUFJLENBQVIsRUFBV0MsSUFBSWlDLElBQUloQyxNQUF4QixFQUFnQ0YsSUFBSUMsQ0FBcEMsRUFBdUNELEdBQXZDLEVBQTRDO0FBQzFDLFFBQUk2bUIsUUFBUTNrQixJQUFJbEMsQ0FBSixDQUFaO0FBQ0EsUUFBSWlsQixVQUFVLEtBQUt1RyxpQkFBTCxDQUF1QjNFLEtBQXZCLEVBQThCN2EsR0FBOUIsQ0FBZDs7QUFFQSxRQUFJLENBQUNpWixPQUFMLEVBQWM7QUFDWjtBQUNEOztBQUVELHNCQUFTNEIsT0FBT0EsS0FBaEIsSUFBMEI1QixPQUExQjtBQUNEOztBQUVELFNBQU8sSUFBUDtBQUNELENBYkQ7O0FBZUE7Ozs7OztBQU1BeGxCLE9BQU93c0IsZ0JBQVAsR0FBMEIsVUFBVTlQLEtBQVYsRUFBaUI7QUFDekMsTUFBSW1MLFNBQVMsRUFBYjs7QUFFQSxPQUFLLElBQUl0bkIsSUFBSSxDQUFSLEVBQVdDLElBQUksS0FBS3FuQixNQUFMLENBQVlwbkIsTUFBaEMsRUFBd0NGLElBQUlDLENBQTVDLEVBQStDRCxHQUEvQyxFQUFvRDtBQUNsRCxRQUFJNm1CLFFBQVEsS0FBS1MsTUFBTCxDQUFZdG5CLENBQVosQ0FBWjs7QUFFQSxRQUFJNm1CLE1BQU0xSyxLQUFOLEdBQWNBLEtBQWxCLEVBQXlCO0FBQ3ZCO0FBQ0QsS0FGRCxNQUdLLElBQUkwSyxNQUFNMUssS0FBTixHQUFjQSxLQUFsQixFQUF5QjtBQUM1QjtBQUNEOztBQUVEbUwsV0FBT2puQixJQUFQLENBQVl3bUIsS0FBWjtBQUNEOztBQUVELFNBQU9TLE1BQVA7QUFDRCxDQWpCRDs7QUFtQkE7Ozs7O0FBS0E3bkIsT0FBT3lzQixNQUFQLEdBQWdCLFlBQWtCO0FBQUE7O0FBQ2hDLE1BQUcsQ0FBQyxLQUFLdkYsVUFBVCxFQUFxQjtBQUNuQixVQUFNLElBQUlsbEIsS0FBSixDQUFVLG9EQUFWLENBQU47QUFDRDs7QUFFRCxTQUFPLG9CQUFLa2xCLFVBQUwsRUFBZ0J1RixNQUFoQiw4QkFBUDtBQUNELENBTkQ7O0FBUUE7Ozs7OztBQU1BenNCLE9BQU9xRCxPQUFQLEdBQWlCLFVBQVUxQyxFQUFWLEVBQWM7QUFDN0IsT0FBSzJILFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxNQUFJaEYsTUFBTTNDLElBQVY7QUFDQSxPQUFLMkgsVUFBTCxHQUFrQixLQUFsQjtBQUNBLFNBQU9oRixHQUFQO0FBQ0QsQ0FMRDs7QUFPQTs7Ozs7QUFLQXRELE9BQU9nTCxXQUFQLEdBQXFCLFlBQXdCO0FBQUE7O0FBQUEsTUFBZDlOLE9BQWMsdUVBQUosRUFBSTs7QUFDM0MsTUFBRyxLQUFLb0wsVUFBUixFQUFvQjtBQUNsQixXQUFPakgsUUFBUW9ELE9BQVIsRUFBUDtBQUNEOztBQUVELE1BQUk4SCxNQUFNLEtBQUtxZSxNQUFMLEVBQVY7QUFDQSxNQUFJdEosU0FBUyxFQUFiO0FBQ0EsTUFBSWlDLFFBQVEsS0FBSzBILFdBQUwsRUFBWjtBQUNBLE1BQUlsWixPQUFPLEtBQUs2VyxRQUFMLEdBQWUsRUFBZixHQUFtQjFuQixPQUFPMG9CLFFBQVAsQ0FBZ0I3WCxJQUFoQixDQUFxQi9PLE9BQXJCLENBQTZCLEdBQTdCLEVBQWtDLEVBQWxDLENBQTlCO0FBQ0EsTUFBSTBwQixpQkFBaUIxc0IsT0FBT2tuQixVQUFQLElBQXFCLElBQTFDO0FBQ0EsTUFBSUEsYUFBYWxuQixPQUFPa25CLFVBQVAsR0FBb0IsSUFBSVEsVUFBSixDQUFlbmIsR0FBZixFQUFvQm1nQixjQUFwQixDQUFyQztBQUNBLE1BQUloUSxRQUFRLENBQVo7O0FBRUF4YixTQUFPZ0osYUFBUCxDQUFxQixJQUFJQyxXQUFKLENBQWdCLGNBQWhCLEVBQWdDLEVBQUVDLFFBQVE4YyxVQUFWLEVBQWhDLENBQXJCOztBQUVBLE1BQU0xSSxPQUFPLFNBQVBBLElBQU8sQ0FBQ3FKLE1BQUQsRUFBWTtBQUN2QixRQUFJLENBQUNBLE9BQU9wbkIsTUFBWixFQUFvQjtBQUNsQixhQUFPWSxRQUFRb0QsT0FBUixFQUFQO0FBQ0Q7O0FBRUQsUUFBSStnQixVQUFVLE9BQUsrRyxzQkFBTCxDQUE0QjFFLE1BQTVCLEVBQW9DdGIsR0FBcEMsQ0FBZDs7QUFFQSxRQUFJLENBQUNpWixPQUFMLEVBQWM7QUFDWixhQUFPbmtCLFFBQVFvRCxPQUFSLEVBQVA7QUFDRDs7QUFFRCxRQUFJMmlCLFFBQVE1QixRQUFRNEIsS0FBcEI7QUFDQUYsZUFBV3lGLE9BQVgsQ0FBbUIsRUFBRXZGLFlBQUYsRUFBU3ZqQixXQUFXbWtCLEtBQXBCLEVBQW5CO0FBQ0ExRywwQkFBY0EsTUFBZCxFQUF5QmtFLFFBQVFsRSxNQUFqQztBQUNBdlAsV0FBT0EsUUFBUTdVLFFBQVEwdUIsU0FBdkI7O0FBZHVCLDZCQWVhLE9BQUt0QyxnQkFBTCxDQUFzQmxDLEtBQXRCLEVBQTZCOUYsTUFBN0IsRUFBcUNpQyxLQUFyQyxFQUE0Q3hSLElBQTVDLEVBQWtEN1UsT0FBbEQsQ0FmYjs7QUFlcEJva0IsVUFmb0Isc0JBZXBCQSxNQWZvQjtBQWVaaUMsU0FmWSxzQkFlWkEsS0FmWTtBQWVMeFIsUUFmSyxzQkFlTEEsSUFmSztBQWVDN1UsV0FmRCxzQkFlQ0EsT0FmRDs7QUFnQnZCNlUsV0FBT0EsUUFBUSxFQUFmO0FBQ0EsUUFBSTZhLFVBQVUsT0FBS3JELGNBQUwsQ0FBb0JuQyxLQUFwQixFQUEyQjlGLE1BQTNCLEVBQW1DaUMsS0FBbkMsRUFBMEN4UixJQUExQyxFQUFnRDdVLE9BQWhELEVBQXlELEtBQXpELENBQWQ7QUFDQSxXQUFLbUcsT0FBTCxDQUFhO0FBQUEsYUFBTSxPQUFLbW5CLFVBQUwsQ0FBZ0JvQyxPQUFoQixDQUFOO0FBQUEsS0FBYjtBQUNBLFFBQUk1RSxRQUFRWixNQUFNOEIsUUFBTixHQUFnQixJQUFoQixHQUFzQixPQUFLVCxRQUFMLENBQWMvTCxLQUFkLENBQWxDOztBQUVBLFFBQUksQ0FBQ3NMLEtBQUQsSUFBVSxDQUFDWixNQUFNOEIsUUFBckIsRUFBK0I7QUFDN0IsWUFBTSxJQUFJbG5CLEtBQUosMkNBQW1Eb2xCLE1BQU1sbEIsSUFBekQsT0FBTjtBQUNEOztBQUVEZ2xCLGVBQVdHLElBQVgsQ0FBZ0IvRixNQUFoQixHQUF5QkEsTUFBekI7QUFDQTRGLGVBQVdHLElBQVgsQ0FBZ0I5RCxLQUFoQixHQUF3QkEsS0FBeEI7QUFDQTJELGVBQVdHLElBQVgsQ0FBZ0J0VixJQUFoQixHQUF1QkEsSUFBdkI7QUFDQW1WLGVBQVdHLElBQVgsQ0FBZ0I5YSxHQUFoQixHQUFzQnFnQixPQUF0QjtBQUNBMUYsZUFBV0csSUFBWCxDQUFnQm5xQixPQUFoQixHQUEwQkEsT0FBMUI7QUFDQSxLQUFDa3FCLE1BQU04QixRQUFQLElBQW1CeE0sT0FBbkI7QUFDQSxRQUFJbVEsY0FBYyxJQUFsQjs7QUFFQSxRQUFHRCxXQUFXcmdCLEdBQWQsRUFBbUI7QUFDakJzZ0Isb0JBQWMzRixXQUFXNEYsY0FBWCxDQUEwQjVGLFdBQVdHLElBQXJDLENBQWQ7QUFDRDs7QUFFRCxRQUFJRixPQUFPMEYsZUFBZTN2QixRQUFRdXZCLE1BQVIsS0FBbUIsS0FBN0M7O0FBRUEsV0FBT3ByQixRQUFRb0QsT0FBUixDQUFnQjBpQixPQUFNQyxNQUFNdkssT0FBTixDQUFjcUssVUFBZCxDQUFOLEdBQWlDQSxXQUFXRyxJQUFYLENBQWdCalgsSUFBakUsRUFBdUUxTCxJQUF2RSxDQUE0RSxVQUFDMEwsSUFBRCxFQUFVO0FBQzNGOFcsaUJBQVdHLElBQVgsQ0FBZ0JqWCxJQUFoQixHQUF1QkEsSUFBdkI7QUFDQWdYLFlBQU0yRixLQUFOLEtBQWdCemlCLFNBQVN5aUIsS0FBVCxHQUFpQixPQUFPM0YsTUFBTTJGLEtBQWIsSUFBc0IsVUFBdEIsR0FBa0MzRixNQUFNMkYsS0FBTixDQUFZN0YsVUFBWixDQUFsQyxHQUEyREUsTUFBTTJGLEtBQWxHOztBQUVBLFVBQUk3RixXQUFXdmhCLFdBQWYsRUFBNEI7QUFDMUI7QUFDRDs7QUFFRCxVQUFJeWhCLE1BQU04QixRQUFWLEVBQW9CO0FBQ2xCO0FBQ0Q7O0FBRUQsVUFBTVYsWUFBWXRCLFdBQVdTLFFBQVgsSUFBdUJULFdBQVdTLFFBQVgsQ0FBb0JjLFFBQXBCLENBQTZCckIsS0FBN0IsQ0FBekM7QUFDQ29CLG1CQUFhLENBQUNBLFVBQVV3RSxNQUF6QixLQUFxQzdGLE9BQU8sSUFBNUM7QUFDQSxhQUFPYSxNQUFNaUYsYUFBTixDQUFvQi9GLFVBQXBCLEVBQWdDQyxJQUFoQyxFQUFzQ3ppQixJQUF0QyxDQUEyQztBQUFBLGVBQU13aUIsV0FBV0csSUFBWCxDQUFnQjJGLE1BQWhCLEdBQXlCLElBQS9CO0FBQUEsT0FBM0MsQ0FBUDtBQUNELEtBZk0sRUFlSnRvQixJQWZJLENBZUMsWUFBTTtBQUNaLGFBQU84WixLQUFLNEksTUFBTWhoQixRQUFYLENBQVA7QUFDRCxLQWpCTSxDQUFQO0FBa0JELEdBekREOztBQTJEQSxTQUFPb1ksS0FBSyxLQUFLZ08sZ0JBQUwsQ0FBc0IsQ0FBdEIsQ0FBTCxFQUErQjluQixJQUEvQixDQUFvQyxZQUFNO0FBQy9DLFFBQUksQ0FBQ3dpQixXQUFXVSxNQUFYLENBQWtCbm5CLE1BQXZCLEVBQStCO0FBQzdCLFVBQUksT0FBS29vQixXQUFULEVBQXNCO0FBQ3BCLGNBQU0sSUFBSTdtQixLQUFKLGdDQUF1QyxPQUFLNm5CLFVBQTVDLE9BQU47QUFDRDs7QUFFRCxVQUFJLE9BQUtBLFVBQVQsRUFBcUI7QUFDbkIsWUFBSSxPQUFLQSxVQUFMLElBQW1CLE9BQUtlLE1BQUwsRUFBdkIsRUFBc0M7QUFDckMsZ0JBQU0sSUFBSTVvQixLQUFKLHdCQUFOO0FBQ0E7O0FBRUQsZUFBS3FCLE9BQUwsQ0FBYTtBQUFBLGlCQUFNLE9BQUttbkIsVUFBTCxDQUFnQixPQUFLWCxVQUFyQixDQUFOO0FBQUEsU0FBYjtBQUNBLGVBQUtoQixXQUFMO0FBQ0EsZUFBTyxPQUFLN2QsV0FBTCxFQUFQO0FBQ0Q7O0FBRUQsVUFBSWpPLGdCQUFNRyxPQUFOLENBQWNDLEtBQWxCLEVBQXlCO0FBQ3ZCO0FBQ0F1SixnQkFBUUMsSUFBUjtBQUNEO0FBQ0Y7O0FBRUQsUUFBSSxDQUFDekosUUFBUWd3QixrQkFBVCxLQUFnQyxDQUFDaEcsV0FBV0csSUFBWixJQUFvQixDQUFDSCxXQUFXRyxJQUFYLENBQWdCdFYsSUFBckUsQ0FBSixFQUFnRjtBQUM5RTdRLGFBQU9pc0IsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQjtBQUNEOztBQUVELFdBQUt0RSxXQUFMLEdBQW1CLENBQW5CO0FBQ0EzQixlQUFXeUIsTUFBWDtBQUNBem5CLFdBQU9nSixhQUFQLENBQXFCLElBQUlDLFdBQUosQ0FBZ0IsZUFBaEIsRUFBaUMsRUFBRUMsUUFBUThjLFVBQVYsRUFBakMsQ0FBckI7QUFDQSxXQUFPQSxVQUFQO0FBQ0QsR0E5Qk0sQ0FBUDtBQStCRCxDQXpHRDs7QUEyR0E7OztBQUdBbG5CLE9BQU9rTSxNQUFQLEdBQWdCLFlBQVk7QUFDMUJoTCxTQUFPSSxtQkFBUCxDQUEyQixVQUEzQixFQUF1QyxLQUFLMm9CLHNCQUE1QztBQUNBanFCLFNBQU8vQyxXQUFQO0FBQ0QsQ0FIRDs7QUFLQStDLE9BQU8wbkIsVUFBUCxHQUFvQkEsVUFBcEI7a0JBQ2UxbkIsTTs7QUFDZkEsT0FBTy9DLFdBQVAsRzs7Ozs7Ozs7Ozs7Ozs7OztBQ3AvQkE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7SUFVcUI4QixFOzs7Ozs2QkFLSDtBQUNkaEMsc0JBQU04RyxTQUFOLENBQWdCLElBQWhCLEVBQXNCLElBQXRCO0FBQ0E5RyxzQkFBTThHLFNBQU4sQ0FBZ0IsU0FBaEIsRUFBMkIsS0FBS3VwQixNQUFoQztBQUNBcndCLHNCQUFNOEcsU0FBTixDQUFnQixNQUFoQixFQUF3QixLQUFLd3BCLElBQTdCO0FBQ0Q7OztBQUVELGdCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOMWxCLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLG1JQUNWQSxJQURVOztBQUduQixVQUFLZ0QsSUFBTCxHQUFZLE1BQUtqSixFQUFMLENBQVF1QixTQUFwQjtBQUNBLFVBQUt2QixFQUFMLENBQVF1QixTQUFSLEdBQW9CLEVBQXBCO0FBQ0EsVUFBS21rQixLQUFMLEdBQWEsS0FBYjtBQUNBLFVBQUtrRyxNQUFMLEdBQWMsS0FBZDtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxVQUFLQyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsVUFBS0MsT0FBTCxHQUFlQyxpQkFBaUIsTUFBS2hzQixFQUF0QixFQUEwQityQixPQUF6QztBQVRtQjtBQVVwQjs7OzsrQkFFVTtBQUFBOztBQUNULFdBQUsvaEIsSUFBTCxDQUFVLFVBQVYsRUFBc0IsS0FBS2lpQixhQUEzQjtBQUNBLGFBQU8sS0FBS2ppQixJQUFMLENBQVUsSUFBVixFQUFnQjtBQUFBLGVBQVEsT0FBSzBiLEtBQUwsR0FBYSxDQUFDLENBQUN6akIsR0FBZixFQUFvQixPQUFLd2xCLFFBQUwsRUFBNUI7QUFBQSxPQUFoQixDQUFQO0FBQ0Q7OztnQ0FFV21FLE0sRUFBUTtBQUNsQixXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7O2tDQUVhQyxRLEVBQVU7QUFDdEIsV0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDs7OytCQUVVO0FBQ1QsVUFBSWpxQixNQUFNLEtBQUtzcUIsV0FBTCxFQUFWO0FBQ0EsVUFBSXBQLE9BQU8sS0FBSzljLEVBQUwsQ0FBUW1zQixrQkFBbkI7QUFDQSxVQUFJOUwsZUFBSjs7QUFFQSxVQUFJLENBQUN2RCxJQUFELElBQVMsQ0FBQ0EsS0FBSy9ZLE9BQUwsQ0FBYSxjQUFiLENBQWQsRUFBNEM7QUFDMUM7QUFDRDs7QUFFRCtZLFdBQUszYixPQUFMLENBQWFpckIsV0FBYixDQUF5QixLQUFLUixNQUFMLElBQWUsS0FBS2xHLEtBQTdDO0FBQ0E1SSxXQUFLM2IsT0FBTCxDQUFhOHFCLGFBQWIsQ0FBMkIsS0FBS0osUUFBaEM7QUFDQXhMLGVBQVN2RCxLQUFLM2IsT0FBTCxDQUFhc21CLFFBQWIsRUFBVDtBQUNBLGFBQU85bkIsUUFBUW9ELE9BQVIsQ0FBZ0JuQixHQUFoQixFQUFxQm9CLElBQXJCLENBQTBCO0FBQUEsZUFBT3FkLE1BQVA7QUFBQSxPQUExQixDQUFQO0FBQ0Q7OztrQ0FFYTtBQUNaLFVBQUl6ZSxZQUFKOztBQUVBLFVBQUksS0FBSzhqQixLQUFMLElBQWMsQ0FBQyxLQUFLa0csTUFBeEIsRUFBZ0M7QUFDOUIsWUFBSSxLQUFLQyxRQUFMLElBQWlCLENBQUMsS0FBS0MsVUFBM0IsRUFBdUM7QUFDckNscUIsZ0JBQU0sS0FBSzBDLE9BQUwsRUFBTjtBQUNEOztBQUVELGFBQUt0RSxFQUFMLENBQVFtYyxLQUFSLENBQWNrUSxXQUFkLENBQTBCLFNBQTFCLEVBQXFDLEtBQUtOLE9BQTFDLEVBQW1ELFdBQW5EO0FBQ0QsT0FORCxNQU9LO0FBQ0gsWUFBSSxLQUFLRixRQUFULEVBQW1CO0FBQ2pCLGVBQUsvRixLQUFMO0FBQ0QsU0FGRCxNQUdLLElBQUksQ0FBQyxLQUFLZ0csVUFBVixFQUFzQjtBQUN6QmxxQixnQkFBTSxLQUFLMEMsT0FBTCxFQUFOO0FBQ0Q7O0FBRUQsYUFBS3RFLEVBQUwsQ0FBUW1jLEtBQVIsQ0FBY2tRLFdBQWQsQ0FBMEIsU0FBMUIsRUFBcUMsTUFBckMsRUFBNkMsV0FBN0M7QUFDRDs7QUFFRCxhQUFPenFCLEdBQVA7QUFDRDs7OzhCQUVTO0FBQ1IsVUFBSUEsWUFBSjtBQUNBLFdBQUs1QixFQUFMLENBQVF1QixTQUFSLEdBQW9CLEtBQUswSCxJQUF6QjtBQUNBckgsWUFBTXZHLGdCQUFNaUosT0FBTixDQUFjLEtBQUt0RSxFQUFuQixFQUF1QixFQUFFa0QsV0FBVyxJQUFiLEVBQXZCLENBQU47QUFDQSxXQUFLNG9CLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxhQUFPbHFCLEdBQVA7QUFDRDs7OztFQWpGNkIvRSxtQjs7QUFvRmhDOzs7Ozs7Ozs7OztBQXBGcUJRLEUsQ0FDWnlTLFcsR0FBYyxJO0FBREZ6UyxFLENBRVowRyxPLEdBQVUsTTtBQUZFMUcsRSxDQUdaZ1MsaUIsR0FBb0IsQ0FBQyxVQUFELEM7a0JBSFJoUyxFOztJQTZGUnF1QixNLFdBQUFBLE07OztBQUNYLG9CQUFxQjtBQUFBOztBQUFBOztBQUFBLHVDQUFOemxCLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLDhJQUNWQSxJQURVOztBQUduQixXQUFLMmxCLE1BQUwsR0FBYyxJQUFkO0FBSG1CO0FBSXBCOzs7RUFMeUJ2dUIsRTs7QUFRNUI7Ozs7Ozs7OztJQU9hc3VCLEksV0FBQUEsSTs7O0FBR1gsa0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsdUNBQU4xbEIsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsMElBQ1ZBLElBRFU7O0FBR25CLFdBQUtqRyxFQUFMLENBQVFpSyxZQUFSLENBQXFCLElBQXJCLEVBQTJCLE1BQTNCO0FBSG1CO0FBSXBCOzs7RUFQdUJ5aEIsTTs7QUFBYkMsSSxDQUNKNW5CLE8sR0FBVSxFOzs7QUFTbkIxRyxHQUFHcXVCLE1BQUgsR0FBWUEsTUFBWjtBQUNBcnVCLEdBQUdzdUIsSUFBSCxHQUFVQSxJQUFWLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcElBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7OztJQVNxQjd0QixNOzs7Ozs2QkFJSDtBQUNkekMsc0JBQU04RyxTQUFOLENBQWdCLFFBQWhCLEVBQTBCLElBQTFCO0FBQ0E5RyxzQkFBTThHLFNBQU4sQ0FBZ0IsUUFBaEIsRUFBMEIsS0FBS21xQixNQUEvQjtBQUNEOzs7QUFFRCxvQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTnJtQixJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSwySUFDVkEsSUFEVTs7QUFHbkIsVUFBS3NtQixlQUFMLEdBQXVCLFFBQXZCO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixLQUFsQjtBQUptQjtBQUtwQjs7OzsrQkFFVTtBQUFBOztBQUNULFdBQUt4c0IsRUFBTCxDQUFROEYsZ0JBQVIsQ0FBeUIsUUFBekIsRUFBbUM7QUFBQSxlQUFNLE9BQUs5RixFQUFMLENBQVE4akIsT0FBUixHQUFrQixPQUFLMkksVUFBTCxFQUF4QjtBQUFBLE9BQW5DO0FBQ0EsVUFBSTdxQixNQUFNLDhGQUFlNEQsS0FBZixDQUFxQixJQUFyQixFQUEyQkMsU0FBM0IsQ0FBVjtBQUNBLFdBQUt1RSxJQUFMLENBQVUsVUFBVixFQUFzQixLQUFLMGlCLFdBQTNCO0FBQ0EsV0FBSzFpQixJQUFMLENBQVUsU0FBVixFQUFxQixLQUFLMmlCLFVBQTFCO0FBQ0EsV0FBSzNpQixJQUFMLENBQVUsSUFBVixFQUFnQixLQUFLNGlCLFVBQXJCO0FBQ0EsYUFBT2hyQixHQUFQO0FBQ0Q7OztnQ0FFV21GLEssRUFBTztBQUNqQixXQUFLeWxCLFVBQUwsR0FBa0J6bEIsS0FBbEI7QUFDQSxXQUFLOGxCLFdBQUwsQ0FBaUIsS0FBS0MsV0FBTCxDQUFpQnB3QixnQkFBTThULElBQU4sQ0FBVyxLQUFLeFEsRUFBTCxDQUFROGpCLE9BQW5CLENBQWpCLENBQWpCO0FBQ0Q7OzsrQkFFVS9jLEssRUFBTztBQUNoQixXQUFLOGxCLFdBQUwsQ0FBaUIsS0FBS0MsV0FBTCxDQUFpQi9sQixLQUFqQixDQUFqQjtBQUNEOzs7aUNBRVk7QUFDWCxVQUFJZ21CLFdBQVcsRUFBZjs7QUFFQSxXQUFLLElBQUlsdUIsSUFBSSxDQUFSLEVBQVdDLElBQUksS0FBS2tCLEVBQUwsQ0FBUXhFLE9BQVIsQ0FBZ0J1RCxNQUFwQyxFQUE0Q0YsSUFBSUMsQ0FBaEQsRUFBbURELEdBQW5ELEVBQXdEO0FBQ3RELFlBQUltdUIsU0FBUyxLQUFLaHRCLEVBQUwsQ0FBUXhFLE9BQVIsQ0FBZ0JxRCxDQUFoQixFQUFtQnNDLE9BQWhDO0FBQ0EsWUFBSThyQixZQUFZRCxPQUFPbGlCLEtBQVAsQ0FBYWlpQixRQUE3Qjs7QUFFQSxZQUFJRSxTQUFKLEVBQWU7QUFDYkYsbUJBQVM3dEIsSUFBVCxDQUFjOHRCLE9BQU9odEIsRUFBUCxDQUFVK0csS0FBeEI7QUFDRDs7QUFFRGltQixlQUFPaHRCLEVBQVAsQ0FBVStzQixRQUFWLEdBQXFCRSxTQUFyQjtBQUNEOztBQUVELFVBQUksQ0FBQ0YsU0FBU2h1QixNQUFkLEVBQXNCO0FBQ3BCLGFBQUttdUIsUUFBTDtBQUNELE9BRkQsTUFHSztBQUNILGFBQUtMLFdBQUwsQ0FBaUIsS0FBS0MsV0FBTCxDQUFpQkMsUUFBakIsQ0FBakI7QUFDRDtBQUNGOzs7NENBRXVCO0FBQ3RCLFVBQUkvc0IsMEhBQUo7O0FBRUEsVUFBSSxDQUFDQSxHQUFHeVAsWUFBSCxDQUFnQixPQUFoQixDQUFMLEVBQStCO0FBQzdCelAsV0FBR2lLLFlBQUgsQ0FBZ0IsT0FBaEIsRUFBeUIsS0FBS2hCLElBQUwsQ0FBVTJNLElBQVYsRUFBekI7QUFDRDs7QUFFRCxhQUFPNVYsRUFBUDtBQUNEOzs7aUNBRVk7QUFDWCxVQUFJLENBQUMsS0FBS3dzQixVQUFWLEVBQXNCO0FBQ3BCLGVBQU8sS0FBS3hzQixFQUFMLENBQVErRyxLQUFmO0FBQ0Q7O0FBRUQsVUFBSStjLFVBQVUsRUFBZDs7QUFFQSxXQUFLLElBQUlqbEIsSUFBSSxDQUFSLEVBQVdDLElBQUksS0FBS2tCLEVBQUwsQ0FBUXhFLE9BQVIsQ0FBZ0J1RCxNQUFwQyxFQUE0Q0YsSUFBSUMsQ0FBaEQsRUFBbURELEdBQW5ELEVBQXdEO0FBQ3RELFlBQUltdUIsU0FBUyxLQUFLaHRCLEVBQUwsQ0FBUXhFLE9BQVIsQ0FBZ0JxRCxDQUFoQixDQUFiOztBQUVBLFlBQUltdUIsT0FBT0QsUUFBWCxFQUFxQjtBQUNuQmpKLGtCQUFRNWtCLElBQVIsQ0FBYTh0QixPQUFPam1CLEtBQXBCO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPK2MsT0FBUDtBQUNEOzs7Z0NBRVcvYyxLLEVBQU87QUFDakIsVUFBSSxLQUFLeWxCLFVBQVQsRUFBcUI7QUFDbkIsWUFBSSxDQUFDbHRCLE1BQU1rSCxPQUFOLENBQWNPLEtBQWQsQ0FBTCxFQUEyQjtBQUN6QkEsa0JBQVNBLFVBQVVvSCxTQUFWLElBQXVCcEgsVUFBVSxJQUFsQyxHQUF5QyxDQUFDQSxLQUFELENBQXpDLEdBQWtELEVBQTFEO0FBQ0Q7QUFDRixPQUpELE1BS0s7QUFDSCxZQUFJekgsTUFBTWtILE9BQU4sQ0FBY08sS0FBZCxDQUFKLEVBQTBCO0FBQ3hCQSxrQkFBUUEsTUFBTWhJLE1BQU4sR0FBY2dJLE1BQU0sQ0FBTixDQUFkLEdBQXdCLEVBQWhDO0FBQ0QsU0FGRCxNQUdLLElBQUksUUFBT0EsS0FBUCx5Q0FBT0EsS0FBUCxNQUFnQixRQUFoQixJQUE0QixPQUFPQSxLQUFQLElBQWdCLFVBQWhELEVBQTREO0FBQy9EQSxrQkFBUSxFQUFSO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPQSxLQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFdBQUs4bEIsV0FBTCxDQUFpQixLQUFLSixVQUFMLEVBQWpCO0FBQ0Q7OztnQ0FFVzFsQixLLEVBQU87QUFDakIsVUFBSXJLLGdCQUFNNlQsT0FBTixDQUFjLEtBQUt2USxFQUFMLENBQVE4akIsT0FBdEIsRUFBK0IvYyxLQUEvQixDQUFKLEVBQTJDO0FBQ3pDO0FBQ0Q7O0FBRUQsVUFBSXpILE1BQU1rSCxPQUFOLENBQWNPLEtBQWQsQ0FBSixFQUEwQjtBQUN4QixhQUFLL0csRUFBTCxDQUFRK0csS0FBUixHQUFnQkEsTUFBTUEsTUFBTWhJLE1BQU4sR0FBZSxDQUFyQixDQUFoQjs7QUFFQSxhQUFLLElBQUlGLElBQUksQ0FBUixFQUFXQyxJQUFJLEtBQUtrQixFQUFMLENBQVF4RSxPQUFSLENBQWdCdUQsTUFBcEMsRUFBNENGLElBQUlDLENBQWhELEVBQW1ERCxHQUFuRCxFQUF3RDtBQUN0RCxjQUFJbXVCLFNBQVMsS0FBS2h0QixFQUFMLENBQVF4RSxPQUFSLENBQWdCcUQsQ0FBaEIsQ0FBYjs7QUFFQW11QixpQkFBT0QsUUFBUCxHQUFrQmhtQixNQUFNYSxPQUFOLENBQWNvbEIsT0FBT2ptQixLQUFyQixLQUErQixDQUFDLENBQWxEO0FBQ0Q7QUFDRixPQVJELE1BU0s7QUFDSCxhQUFLL0csRUFBTCxDQUFRK0csS0FBUixHQUFnQkEsS0FBaEI7O0FBRUEsYUFBSyxJQUFJbEksS0FBSSxDQUFSLEVBQVdDLEtBQUksS0FBS2tCLEVBQUwsQ0FBUXhFLE9BQVIsQ0FBZ0J1RCxNQUFwQyxFQUE0Q0YsS0FBSUMsRUFBaEQsRUFBbURELElBQW5ELEVBQXdEO0FBQ3RELGNBQUltdUIsVUFBUyxLQUFLaHRCLEVBQUwsQ0FBUXhFLE9BQVIsQ0FBZ0JxRCxFQUFoQixDQUFiOztBQUVBbXVCLGtCQUFPRCxRQUFQLEdBQWtCQyxRQUFPam1CLEtBQVAsSUFBZ0JBLEtBQWxDO0FBQ0Q7QUFDRjs7QUFFRCxXQUFLL0csRUFBTCxDQUFROGpCLE9BQVIsR0FBa0IvYyxLQUFsQjtBQUNBLFdBQUsrRCxLQUFMLENBQVdxaUIsUUFBWCxDQUFvQkMsUUFBcEIsQ0FBNkJDLEtBQTdCLEVBQW9DLEVBQUVqZixTQUFTLElBQVgsRUFBcEM7QUFDRDs7OztFQXBJaUNqUixhOztBQUFmVyxNLENBQ1p1UixpQixHQUFvQixDQUFDLFVBQUQsRUFBYUMsTUFBYixDQUFvQm5TLGNBQUlrUyxpQkFBeEIsQztBQURSdlIsTSxDQUVab1IsTSxHQUFTLENBQUMsUUFBRCxFQUFXSSxNQUFYLENBQWtCblMsY0FBSStSLE1BQXRCLEM7a0JBRkdwUixNOztJQXVJUnd1QixNLFdBQUFBLE07Ozs7Ozs7Ozs7OzBDQUdXamhCLFUsRUFBWTtBQUNoQyxhQUFPM08sZ0JBQU1xaEIsa0JBQU4sQ0FBeUIxUyxVQUF6QixDQUFQO0FBQ0Q7OztvQ0FFZXRFLEssRUFBTztBQUNyQixXQUFLdW1CLFdBQUwsQ0FBaUJ2bUIsS0FBakI7QUFDRDs7O2dDQUVXQSxLLEVBQU87QUFDakIsV0FBSy9HLEVBQUwsQ0FBUStzQixRQUFSLEdBQW1CaG1CLEtBQW5CO0FBQ0EsV0FBS2dlLEdBQUwsQ0FBU21JLFFBQVQ7QUFDRDs7OztFQWR5QjdKLFM7O0FBQWZpSixNLENBQ0pqZCxpQixHQUFvQixDQUFDLFVBQUQsQzs7O0FBZ0I3QnZSLE9BQU93dUIsTUFBUCxHQUFnQkEsTUFBaEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyS0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7SUFVcUIvdUIsSzs7Ozs7NkJBSUg7QUFDZGxDLHNCQUFNOEcsU0FBTixDQUFnQixPQUFoQixFQUF5QixJQUF6QjtBQUNEOzs7QUFFRCxtQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTjhELElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLHlJQUNWQSxJQURVOztBQUduQixVQUFLc25CLFVBQUwsR0FBa0IsTUFBS3Z0QixFQUFMLENBQVErWCxJQUFSLElBQWdCLFVBQWxDO0FBQ0EsVUFBS3lWLE9BQUwsR0FBZSxNQUFLeHRCLEVBQUwsQ0FBUStYLElBQVIsSUFBZ0IsT0FBL0I7QUFKbUI7QUFLcEI7Ozs7K0JBRVU7QUFDVCxPQUFDLEtBQUt3VixVQUFMLElBQW1CLEtBQUtDLE9BQXpCLEtBQXFDLEtBQUt4akIsSUFBTCxDQUFVLFNBQVYsRUFBcUIsS0FBS3lqQixVQUExQixDQUFyQztBQUNBLGFBQU8sNEZBQWVqb0IsS0FBZixDQUFxQixJQUFyQixFQUEyQkMsU0FBM0IsQ0FBUDtBQUNEOzs7K0JBRVVzQixLLEVBQU87QUFDaEJBLGNBQVEsQ0FBQyxDQUFDQSxLQUFWOztBQUVBLFVBQUksS0FBSy9HLEVBQUwsQ0FBUTB0QixPQUFSLEtBQW9CM21CLEtBQXhCLEVBQStCO0FBQzdCO0FBQ0Q7O0FBRUQsV0FBSy9HLEVBQUwsQ0FBUTB0QixPQUFSLEdBQWtCM21CLEtBQWxCO0FBQ0EsV0FBSzZFLFlBQUwsSUFBcUIsS0FBS2QsS0FBTCxDQUFXcWlCLFFBQVgsQ0FBb0JDLFFBQXBCLENBQTZCQyxLQUE3QixFQUFvQyxFQUFFamYsU0FBUyxJQUFYLEVBQXBDLENBQXJCO0FBQ0EsV0FBS29mLE9BQUwsSUFBZ0IsS0FBS0csV0FBTCxFQUFoQjtBQUNEOzs7K0JBRVU7QUFDVCxrR0FBZW5vQixLQUFmLENBQXFCLElBQXJCLEVBQTJCQyxTQUEzQjtBQUNBLFdBQUsrbkIsT0FBTCxJQUFnQixLQUFLMWlCLEtBQUwsQ0FBV3FpQixRQUFYLENBQW9CQyxRQUFwQixDQUE2QkMsS0FBN0IsRUFBb0MsRUFBRWpmLFNBQVMsSUFBWCxFQUFwQyxDQUFoQjtBQUNEOzs7a0NBRWE7QUFDWixVQUFJNU4sT0FBTyxLQUFLUixFQUFMLENBQVF3RCxZQUFSLENBQXFCLE1BQXJCLENBQVg7QUFDQSxVQUFJUSx5Q0FBc0N4RCxJQUF0Qyx5QkFBNEQsS0FBS0osS0FBTCxDQUFXQyxNQUF2RSxTQUFKO0FBQ0EsVUFBSXFFLFdBQVdySixnQkFBTWtKLElBQU4sQ0FBV0csUUFBWCxDQUFvQlYsUUFBcEIsQ0FBZjs7QUFFQSxXQUFLLElBQUluRixJQUFJLENBQVIsRUFBV0MsSUFBSTRGLFNBQVMzRixNQUE3QixFQUFxQ0YsSUFBSUMsQ0FBekMsRUFBNENELEdBQTVDLEVBQWlEO0FBQy9DLFlBQUkrdUIsUUFBUWxwQixTQUFTN0YsQ0FBVCxDQUFaO0FBQ0ErdUIsY0FBTUgsVUFBTixDQUFpQkcsTUFBTTV0QixFQUFOLENBQVMwdEIsT0FBMUI7QUFDRDtBQUNGOzs7O0VBOUNnQzF2QixjOztBQUFkVCxLLENBQ1o4UixpQixHQUFvQixDQUFDLFNBQUQsRUFBWSxVQUFaLEVBQXdCQyxNQUF4QixDQUErQnRSLGVBQUtxUixpQkFBcEMsQztBQURSOVIsSyxDQUVaMlIsTSxHQUFTLENBQUMsUUFBRCxFQUFXSSxNQUFYLENBQWtCdFIsZUFBS2tSLE1BQXZCLEM7a0JBRkczUixLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNickI7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7OztJQVlxQkssSzs7Ozs7NkJBSUg7QUFDZHZDLHNCQUFNOEcsU0FBTixDQUFnQixPQUFoQixFQUF5QixJQUF6QjtBQUNBOUcsc0JBQU04RyxTQUFOLENBQWdCLGNBQWhCLEVBQWdDLEtBQUswckIsV0FBckM7QUFDRDs7O0FBRUQsbUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU41bkIsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEseUlBQ1ZBLElBRFU7O0FBR25CLFVBQUs2bkIsUUFBTCxHQUFnQixNQUFLOXRCLEVBQUwsQ0FBUXlQLFlBQVIsQ0FBcUIsSUFBckIsQ0FBaEI7QUFIbUI7QUFJcEI7Ozs7OEJBRVM7QUFDUixVQUFHLEtBQUtxZSxRQUFSLEVBQWtCO0FBQ2hCLGVBQU8sMkZBQWN0b0IsS0FBZCxDQUFvQixJQUFwQixFQUEwQkMsU0FBMUIsQ0FBUDtBQUNEO0FBQ0Y7OzsrQkFFVTtBQUFBOztBQUNULFdBQUt6RixFQUFMLENBQVE4RixnQkFBUixDQUF5QixRQUF6QixFQUFtQyxZQUFNO0FBQ3ZDekssd0JBQU15SCxRQUFOLENBQWUsWUFBTTtBQUNuQixjQUFJaUUsUUFBUSxPQUFLZ25CLGFBQUwsRUFBWjs7QUFFQSxjQUFJaG5CLFVBQVUsT0FBS2luQixTQUFuQixFQUE4QjtBQUM1QjtBQUNEOztBQUVELGlCQUFLQSxTQUFMLEdBQWlCam5CLEtBQWpCO0FBQ0EsaUJBQUsrRCxLQUFMLENBQVdtakIsT0FBWCxDQUFtQi9mLE9BQW5CLENBQTJCbkgsS0FBM0IsRUFBa0MsRUFBRXFILFNBQVMsSUFBWCxFQUFsQztBQUNELFNBVEQ7QUFVRCxPQVhEOztBQWFBLFVBQUcsS0FBSzBmLFFBQVIsRUFBa0I7QUFDaEIsZUFBTyw0RkFBZXRvQixLQUFmLENBQXFCLElBQXJCLEVBQTJCQyxTQUEzQixDQUFQO0FBQ0Q7QUFDRjs7OytCQUVVO0FBQ1QsV0FBS3VFLElBQUwsQ0FBVSxJQUFWLEVBQWdCLEtBQUtra0IsUUFBckIsRUFBK0IsRUFBRXZWLGFBQWEsS0FBZixFQUEvQjtBQUNBLFdBQUszTyxJQUFMLENBQVUsT0FBVixFQUFtQixLQUFLOFksUUFBeEI7QUFDQSxXQUFLOVksSUFBTCxDQUFVLE1BQVYsRUFBa0IsS0FBS2trQixRQUF2Qjs7QUFFQSxVQUFHLEtBQUtKLFFBQVIsRUFBa0I7QUFDaEIsZUFBTyw0RkFBZXRvQixLQUFmLENBQXFCLElBQXJCLEVBQTJCQyxTQUEzQixDQUFQO0FBQ0Q7QUFDRjs7OzZCQUVRakYsSSxFQUFNO0FBQ2IsVUFBSWtFLFdBQVcsS0FBS0EsUUFBTCxDQUFjLG1CQUFkLENBQWY7O0FBRUEsV0FBSyxJQUFJN0YsSUFBSSxDQUFSLEVBQVdDLElBQUk0RixTQUFTM0YsTUFBN0IsRUFBcUNGLElBQUlDLENBQXpDLEVBQTRDRCxHQUE1QyxFQUFpRDtBQUMvQzZGLGlCQUFTN0YsQ0FBVCxFQUFZbUIsRUFBWixDQUFlaUssWUFBZixDQUE0QixNQUE1QixFQUFvQ3pKLFFBQVEsS0FBS3NLLEtBQUwsQ0FBV3RLLElBQXZEO0FBQ0Q7QUFDRjs7OzZCQUVRdUcsSyxFQUFPO0FBQ2QsVUFBSUEsVUFBVSxLQUFLaW5CLFNBQW5CLEVBQThCO0FBQzVCO0FBQ0Q7O0FBRUQsVUFBSWhILE9BQU8sS0FBS2dILFNBQWhCO0FBQ0EsVUFBSXRwQixXQUFXLEtBQUtBLFFBQUwsQ0FBYyxtQkFBZCxDQUFmO0FBQ0EsVUFBSXlwQixTQUFTLEtBQWI7QUFDQSxXQUFLSCxTQUFMLEdBQWlCam5CLEtBQWpCOztBQUVBLFdBQUssSUFBSWxJLElBQUksQ0FBUixFQUFXQyxJQUFJNEYsU0FBUzNGLE1BQTdCLEVBQXFDRixJQUFJQyxDQUF6QyxFQUE0Q0QsR0FBNUMsRUFBaUQ7QUFDL0MsWUFBSSt1QixRQUFRbHBCLFNBQVM3RixDQUFULENBQVo7QUFDQSxZQUFJdXZCLGFBQWFSLE1BQU01dEIsRUFBTixDQUFTK0csS0FBVCxLQUFtQkEsS0FBcEM7O0FBRUFxbkIsdUJBQWVELFNBQVMsSUFBeEI7QUFDQVAsY0FBTUgsVUFBTixDQUFpQlcsVUFBakI7QUFDRDs7QUFFRCxVQUFJLENBQUNELE1BQUwsRUFBYTtBQUNYLFlBQUlwbkIsVUFBVSxJQUFkLEVBQW9CO0FBQ2xCLGNBQUlpZ0IsU0FBUzdZLFNBQWIsRUFBd0I7QUFDdEI7QUFDRDtBQUNGLFNBSkQsTUFLSztBQUNILGVBQUs2ZixTQUFMLEdBQWlCN2YsU0FBakI7QUFDQXBILGtCQUFRLElBQVI7QUFDRDtBQUNGOztBQUVELFdBQUsrRCxLQUFMLENBQVdtakIsT0FBWCxDQUFtQi9mLE9BQW5CLENBQTJCbkgsS0FBM0IsRUFBa0MsRUFBRXFILFNBQVMsSUFBWCxFQUFsQztBQUNEOzs7b0NBRWU7QUFDZCxVQUFJMUosV0FBVyxLQUFLQSxRQUFMLENBQWMsbUJBQWQsQ0FBZjs7QUFFQSxXQUFLLElBQUk3RixJQUFJLENBQVIsRUFBV0MsSUFBSTRGLFNBQVMzRixNQUE3QixFQUFxQ0YsSUFBSUMsQ0FBekMsRUFBNENELEdBQTVDLEVBQWlEO0FBQy9DLFlBQUkrdUIsUUFBUWxwQixTQUFTN0YsQ0FBVCxDQUFaOztBQUVBLFlBQUkrdUIsTUFBTTV0QixFQUFOLENBQVMwdEIsT0FBYixFQUFzQjtBQUNwQixpQkFBT0UsTUFBTTV0QixFQUFOLENBQVMrRyxLQUFoQjtBQUNEO0FBQ0Y7O0FBRUQsYUFBTyxJQUFQO0FBQ0Q7Ozs7RUF2R2dDNUosYTs7QUEwR25DOzs7Ozs7Ozs7O0FBMUdxQlMsSyxDQUNabUcsTyxHQUFVLFE7QUFERW5HLEssQ0FFWnNSLE0sR0FBUyxDQUFDLE9BQUQsRUFBVUksTUFBVixDQUFpQm5TLGNBQUkrUixNQUFyQixDO2tCQUZHdFIsSzs7SUFrSFJpd0IsVyxXQUFBQSxXOzs7QUFHWCx5QkFBcUI7QUFBQTs7QUFBQTs7QUFBQSx1Q0FBTjVuQixJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSxrSkFDVkEsSUFEVTtBQUVwQjs7OzsrQkFFVTtBQUNULFdBQUsrRCxJQUFMLENBQVUsT0FBVixFQUFtQixPQUFuQjtBQUNBLGFBQU8sd0dBQWV4RSxLQUFmLENBQXFCLElBQXJCLEVBQTJCQyxTQUEzQixDQUFQO0FBQ0Q7Ozs7RUFWOEI0ZCxTOztBQUFwQndLLFcsQ0FDSnhzQixRLEdBQVcsNkU7OztBQVlwQnpELE1BQU1pd0IsV0FBTixHQUFvQkEsV0FBcEIsQzs7Ozs7Ozs7Ozs7Ozs7O0FDOUlBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7SUFTcUI1dkIsUTs7Ozs7Ozs7Ozs7NkJBQ0g7QUFDZDVDLHNCQUFNOEcsU0FBTixDQUFnQixVQUFoQixFQUE0QixJQUE1QjtBQUNEOzs7O0VBSG1DbkUsYzs7a0JBQWpCQyxROzs7Ozs7Ozs7Ozs7Ozs7QUNackI7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7SUFVcUJmLE87Ozs7OzZCQUNIO0FBQ2Q3QixzQkFBTThHLFNBQU4sQ0FBZ0IsU0FBaEIsRUFBMkIsSUFBM0I7QUFDQTlHLHNCQUFNOEosS0FBTixDQUFZLG1CQUFaLEVBQWlDLFNBQWpDO0FBQ0Q7OztBQUVELHFCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOYyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSw2SUFDVkEsSUFEVTs7QUFHbkIsUUFBSSxNQUFLakcsRUFBTCxDQUFReVAsWUFBUixDQUFxQixVQUFyQixDQUFKLEVBQXNDO0FBQ3BDLFlBQUt6UCxFQUFMLENBQVFpSyxZQUFSLENBQXFCLGlCQUFyQixFQUF3QyxNQUFLakssRUFBTCxDQUFRd0QsWUFBUixDQUFxQixVQUFyQixDQUF4QztBQUNBLFlBQUt4RCxFQUFMLENBQVEwSixlQUFSLENBQXdCLFVBQXhCO0FBQ0Q7O0FBRUQsUUFBSXNpQixpQkFBaUIsTUFBS2hzQixFQUF0QixFQUEwQityQixPQUExQixJQUFxQyxRQUF6QyxFQUFtRDtBQUNqRCxZQUFLL3JCLEVBQUwsQ0FBUW1jLEtBQVIsQ0FBYzRQLE9BQWQsR0FBd0IsT0FBeEI7QUFDRDs7QUFFRCxVQUFLdkosUUFBTCxHQUFnQixXQUFoQjtBQVptQjtBQWFwQjs7OztzQ0FFaUI7QUFDaEIsVUFBSTZMLFFBQVF6bEIsU0FBUzBsQixXQUFULEVBQVo7QUFDQSxVQUFJckIsWUFBWXp0QixPQUFPK3VCLFlBQVAsRUFBaEI7O0FBRUFGLFlBQU1HLGtCQUFOLENBQXlCLEtBQUt4dUIsRUFBOUI7QUFDQXF1QixZQUFNSSxRQUFOLENBQWUsS0FBZjtBQUNBeEIsZ0JBQVV5QixlQUFWO0FBQ0F6QixnQkFBVTBCLFFBQVYsQ0FBbUJOLEtBQW5CO0FBQ0EsV0FBS3J1QixFQUFMLENBQVFtakIsS0FBUjtBQUNEOzs7O0VBOUJrQ25sQixjOztrQkFBaEJkLE87Ozs7Ozs7Ozs7Ozs7OztBQ2JyQjs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7SUFZcUJJLE87Ozs7OzZCQUtIO0FBQ2RqQyxzQkFBTThHLFNBQU4sQ0FBZ0IsU0FBaEIsRUFBMkIsSUFBM0I7QUFDRDs7O0FBRUQscUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU44RCxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSw2SUFDVkEsSUFEVTs7QUFHbkIsVUFBS2dELElBQUwsR0FBWSxNQUFLakosRUFBTCxDQUFRdUIsU0FBcEI7QUFDQSxVQUFLdkIsRUFBTCxDQUFRdUIsU0FBUixHQUFvQixFQUFwQjtBQUNBLFVBQUtxdEIsVUFBTCxHQUFrQixJQUFsQjtBQUxtQjtBQU1wQjs7OzsrQkFFVTtBQUNULFdBQUs1a0IsSUFBTCxDQUFVLE9BQVYsRUFBbUIsS0FBSzZrQixRQUF4QjtBQUNBLGFBQU8sS0FBSzdrQixJQUFMLENBQVUsS0FBVixFQUFpQixLQUFLNUksV0FBdEIsQ0FBUDtBQUNEOzs7NkJBRVFrSixLLEVBQU87QUFDZCxXQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7O2dDQUVXTyxHLEVBQUs7QUFBQTs7QUFDZixXQUFLK2pCLFVBQUwsSUFBbUIsS0FBS0EsVUFBTCxDQUFnQkUsS0FBaEIsRUFBbkI7O0FBRUEsYUFBT3p3QixrQkFBUWtRLEdBQVIsQ0FBWTFELEdBQVosRUFBaUI7QUFDdEJQLGVBQU8sS0FBS0EsS0FEVTtBQUV0QmlWLGlCQUFTLGlCQUFDVixHQUFELEVBQVM7QUFDaEIsaUJBQUsrUCxVQUFMLEdBQWtCL1AsR0FBbEI7QUFDRDtBQUpxQixPQUFqQixFQUtKN2IsSUFMSSxDQUtDLFVBQUNwQixHQUFELEVBQVM7QUFDZixlQUFLZ3RCLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxlQUFLOUksS0FBTDtBQUNBLGVBQUs5bEIsRUFBTCxDQUFRdUIsU0FBUixHQUFvQixPQUFLMEgsSUFBekI7QUFDQTVOLHdCQUFNK0YsV0FBTixDQUFrQixPQUFLcEIsRUFBdkIsRUFBMkI0QixJQUFJOE0sSUFBL0I7O0FBRUEsZUFBT3JULGdCQUFNaUosT0FBTixDQUFjLE9BQUt0RSxFQUFuQixFQUF1QixFQUFFa0QsV0FBVyxJQUFiLEVBQXZCLEVBQTRDRixJQUE1QyxDQUFpRCxZQUFNO0FBQzVELGlCQUFLOEgsS0FBTCxDQUFXaWtCLE1BQVgsQ0FBa0I3Z0IsT0FBbEIsQ0FBMEJDLFNBQTFCLEVBQXFDLEVBQUVDLFNBQVMsS0FBWCxFQUFyQztBQUNELFNBRk0sQ0FBUDtBQUdELE9BZE0sRUFjSnZJLEtBZEksQ0FjRSxVQUFDMkQsR0FBRCxFQUFTO0FBQ2hCLGVBQUtzQixLQUFMLENBQVdra0IsT0FBWCxDQUFtQjlnQixPQUFuQixDQUEyQjFFLEdBQTNCLEVBQWdDLEVBQUU0RSxTQUFTLEtBQVgsRUFBaEM7QUFDQSxjQUFNNUUsR0FBTjtBQUNELE9BakJNLENBQVA7QUFrQkQ7Ozs7RUEvQ2tDM00sbUI7O0FBQWhCUyxPLENBQ1p3UyxXLEdBQWMsSTtBQURGeFMsTyxDQUVaeUcsTyxHQUFVLE87QUFGRXpHLE8sQ0FHWjRSLE0sR0FBUyxDQUFDLE1BQUQsRUFBUyxPQUFULEM7a0JBSEc1UixPOzs7Ozs7Ozs7Ozs7Ozs7QUNoQnJCOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7OztJQVFxQkUsTTs7Ozs7Ozs7Ozs7NkJBQ0g7QUFDZG5DLHNCQUFNOEcsU0FBTixDQUFnQixRQUFoQixFQUEwQixJQUExQjtBQUNEOzs7O0VBSGlDaEUsYTs7a0JBQWZYLE07Ozs7Ozs7Ozs7Ozs7OztBQ1hyQjs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7SUFRcUJDLEs7Ozs7Ozs7Ozs7OzZCQUNIO0FBQ2RwQyxzQkFBTThHLFNBQU4sQ0FBZ0IsS0FBaEIsRUFBdUIsSUFBdkI7QUFDRDs7OztFQUhnQ2hFLGE7O2tCQUFkVixLOzs7Ozs7Ozs7Ozs7Ozs7QUNYckI7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0lBUXFCTCxLOzs7Ozs7Ozs7Ozs2QkFDSDtBQUNkL0Isc0JBQU04RyxTQUFOLENBQWdCLE9BQWhCLEVBQXlCLElBQXpCO0FBQ0Q7Ozs7RUFIZ0NoRSxhOztrQkFBZGYsSzs7Ozs7Ozs7Ozs7Ozs7O0FDWHJCOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7OztJQVFxQkgsSzs7Ozs7Ozs7Ozs7NkJBQ0g7QUFDZDVCLHNCQUFNOEcsU0FBTixDQUFnQixPQUFoQixFQUF5QixJQUF6QjtBQUNEOzs7O0VBSGdDaEUsYTs7a0JBQWRsQixLOzs7Ozs7Ozs7Ozs7Ozs7QUNYckI7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0lBUXFCbUIsSzs7Ozs7Ozs7Ozs7NkJBQ0g7QUFDZC9DLHNCQUFNOEcsU0FBTixDQUFnQixPQUFoQixFQUF5QixJQUF6QjtBQUNEOzs7O0VBSGdDaEUsYTs7a0JBQWRDLEs7Ozs7Ozs7Ozs7Ozs7OztBQ1hyQjs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7SUFRcUJGLEs7Ozs7Ozs7Ozs7OzZCQUNIO0FBQ2Q3QyxzQkFBTThHLFNBQU4sQ0FBZ0IsT0FBaEIsRUFBeUIsSUFBekI7QUFDRDs7OztFQUhnQ2hFLGE7O2tCQUFkRCxLOzs7Ozs7Ozs7Ozs7Ozs7QUNYckI7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0lBUXFCSCxNOzs7Ozs7Ozs7Ozs2QkFDSDtBQUNkMUMsc0JBQU04RyxTQUFOLENBQWdCLFFBQWhCLEVBQTBCLElBQTFCO0FBQ0Q7Ozs7RUFIaUNoRSxhOztrQkFBZkosTTs7Ozs7Ozs7Ozs7Ozs7O0FDWHJCOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7OztJQVFxQkosTzs7O0FBQ25CLHFCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOc0ksSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsNklBQ1ZBLElBRFU7O0FBR25CLFVBQUswRSxZQUFMLEdBQW9CLE1BQXBCO0FBSG1CO0FBSXBCOzs7OzZCQUVlO0FBQ2R0UCxzQkFBTThHLFNBQU4sQ0FBZ0IsUUFBaEIsRUFBMEIsSUFBMUI7QUFDRDs7OztFQVRrQ2hFLGE7O2tCQUFoQlIsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYckI7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFpQnFCWCxDOzs7Ozs2QkFJSDtBQUNkM0Isc0JBQU04RyxTQUFOLENBQWdCLEdBQWhCLEVBQXFCLElBQXJCO0FBQ0Q7OztBQUVELGVBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU44RCxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSxpSUFDVkEsSUFEVTs7QUFHbkIsVUFBS3lmLEtBQUwsR0FBYSxJQUFiO0FBQ0EsVUFBSzlGLE1BQUwsR0FBYyxFQUFkO0FBQ0EsVUFBS2lDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsVUFBS3JtQixPQUFMLEdBQWUsRUFBZjtBQUNBLFVBQUt5ekIsS0FBTCxHQUFhLE1BQUtqdkIsRUFBTCxDQUFReVAsWUFBUixDQUFxQixLQUFyQixDQUFiO0FBUG1CO0FBUXBCOzs7OytCQUVVO0FBQUE7O0FBQ1QsV0FBS3pQLEVBQUwsQ0FBUThGLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFVBQUM0TSxDQUFELEVBQU87QUFDdkNBLFVBQUV3YyxjQUFGOztBQUVBLFlBQUksT0FBS0QsS0FBVCxFQUFnQjtBQUNkM3dCLDJCQUFPNHBCLFFBQVAsQ0FBZ0IsT0FBS3BkLEtBQUwsQ0FBV0QsR0FBM0IsRUFBZ0MsT0FBS3JQLE9BQXJDO0FBQ0E7QUFDRDs7QUFFRDhDLHlCQUFPb25CLEtBQVAsQ0FBYSxPQUFLQSxLQUFMLENBQVdsbEIsSUFBeEIsRUFBOEIsT0FBS29mLE1BQW5DLEVBQTJDLE9BQUtpQyxLQUFoRCxFQUF1RCxPQUFLeFIsSUFBNUQsRUFBbUUsT0FBSzdVLE9BQXhFO0FBQ0QsT0FURDs7QUFXQSxXQUFLMnpCLGNBQUwsR0FBc0I7QUFBQSxlQUFNLE9BQUt6SixLQUFMLElBQWMsT0FBSzBHLFdBQUwsRUFBcEI7QUFBQSxPQUF0QjtBQUNBNXNCLGFBQU9zRyxnQkFBUCxDQUF3QixlQUF4QixFQUF5QyxLQUFLcXBCLGNBQTlDOztBQUVBLFdBQUtubEIsSUFBTCxDQUFVLE9BQVYsRUFBbUIsS0FBS3lkLFFBQXhCO0FBQ0EsV0FBS3pkLElBQUwsQ0FBVSxRQUFWLEVBQW9CLEtBQUtvbEIsU0FBekI7QUFDQSxXQUFLcGxCLElBQUwsQ0FBVSxPQUFWLEVBQW1CLEtBQUtxbEIsUUFBeEI7QUFDQSxXQUFLcmxCLElBQUwsQ0FBVSxNQUFWLEVBQWtCLEtBQUtzbEIsT0FBdkI7QUFDQSxXQUFLdGxCLElBQUwsQ0FBVSxTQUFWLEVBQXFCLEtBQUt1bEIsVUFBMUI7QUFDQSxXQUFLdmxCLElBQUwsQ0FBVSxLQUFWLEVBQWlCLEtBQUtZLE1BQXRCO0FBQ0EsV0FBS1osSUFBTCxDQUFVLE9BQVYsRUFBbUIsS0FBS3dsQixTQUF4QixFQUFtQyxFQUFFN1csYUFBYSxLQUFmLEVBQW5DO0FBQ0EsV0FBSzNPLElBQUwsQ0FBVSxRQUFWLEVBQW9CLEtBQUt3bEIsU0FBekIsRUFBb0MsRUFBRTdXLGFBQWEsS0FBZixFQUFwQztBQUNBLFdBQUszTyxJQUFMLENBQVUsT0FBVixFQUFtQixLQUFLd2xCLFNBQXhCLEVBQW1DLEVBQUU3VyxhQUFhLEtBQWYsRUFBbkM7QUFDQSxXQUFLM08sSUFBTCxDQUFVLE1BQVYsRUFBa0IsS0FBS3dsQixTQUF2QixFQUFrQyxFQUFFN1csYUFBYSxLQUFmLEVBQWxDO0FBQ0EsV0FBSzNPLElBQUwsQ0FBVSxLQUFWLEVBQWlCLEtBQUt3bEIsU0FBdEIsRUFBaUMsRUFBRTdXLGFBQWEsS0FBZixFQUFqQztBQUNBLFdBQUs2VyxTQUFMO0FBQ0Q7Ozs4QkFFUztBQUNSaHdCLGFBQU9JLG1CQUFQLENBQTJCLGVBQTNCLEVBQTRDLEtBQUt1dkIsY0FBakQ7QUFDRDs7OzJCQUVNdGtCLEcsRUFBSztBQUNWLFdBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNEOzs7NkJBRVFySyxJLEVBQU07QUFDYixXQUFLa2xCLEtBQUwsR0FBYSxLQUFLZ0MsUUFBTCxDQUFjbG5CLElBQWQsQ0FBYjtBQUNBLFdBQUs0ckIsV0FBTDtBQUNEOzs7a0NBRWE7QUFDWixXQUFLaHNCLEtBQUwsQ0FBV3FxQixhQUFYLEdBQTJCbnNCLGlCQUFPbXNCLGFBQVAsQ0FBcUIsS0FBSy9FLEtBQTFCLENBQTNCO0FBQ0EsV0FBS3RsQixLQUFMLENBQVd3cUIsYUFBWCxHQUEyQnRzQixpQkFBT3NzQixhQUFQLENBQXFCLEtBQUtsRixLQUExQixDQUEzQjtBQUNEOzs7OEJBRVM5RixNLEVBQVE7QUFDaEIsVUFBSSxRQUFPQSxNQUFQLHlDQUFPQSxNQUFQLE1BQWlCLFFBQWpCLElBQTZCLENBQUNBLE1BQWxDLEVBQTBDO0FBQ3hDLGNBQU0sSUFBSXRmLEtBQUoseUNBQU47QUFDRDs7QUFFRCxXQUFLc2YsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs2QkFFUWlDLEssRUFBTztBQUNkLFVBQUksUUFBT0EsS0FBUCx5Q0FBT0EsS0FBUCxNQUFnQixRQUFoQixJQUE0QixDQUFDQSxLQUFqQyxFQUF3QztBQUN0QyxjQUFNLElBQUl2aEIsS0FBSix3Q0FBTjtBQUNEOztBQUVELFdBQUt1aEIsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs0QkFFT3hSLEksRUFBTTtBQUNaLFVBQUksT0FBT0EsSUFBUCxJQUFlLFFBQWYsSUFBMkJBLFNBQVNsQyxTQUFwQyxJQUFpRGtDLFNBQVMsSUFBOUQsRUFBb0U7QUFDbEUsY0FBTSxJQUFJL1AsS0FBSiwyQ0FBTjtBQUNEOztBQUVELFdBQUsrUCxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OytCQUVVN1UsTyxFQUFTO0FBQ2xCLFVBQUksUUFBT0EsT0FBUCx5Q0FBT0EsT0FBUCxNQUFrQixRQUFsQixJQUE4QixDQUFDQSxPQUFuQyxFQUE0QztBQUMxQyxjQUFNLElBQUk4RSxLQUFKLDBDQUFOO0FBQ0Q7O0FBRUQsV0FBSzlFLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7NkJBRVFnRixJLEVBQU07QUFDYixVQUFJa2xCLFFBQVFwbkIsaUJBQU9vcEIsUUFBUCxDQUFnQmxuQixJQUFoQixDQUFaOztBQUVBLFVBQUksQ0FBQ2tsQixLQUFMLEVBQVk7QUFDVixjQUFNLElBQUlwbEIsS0FBSix3Q0FBK0NFLElBQS9DLE9BQU47QUFDRDs7QUFFRCxhQUFPa2xCLEtBQVA7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBSSxLQUFLN2EsR0FBVCxFQUFjO0FBQ1osYUFBS0MsS0FBTCxDQUFXMmtCLElBQVgsR0FBa0IsS0FBSzVrQixHQUF2QjtBQUNELE9BRkQsTUFHSztBQUNILGFBQUtDLEtBQUwsQ0FBVzJrQixJQUFYLEdBQWtCbnhCLGlCQUFPdXBCLGNBQVAsQ0FBc0IsS0FBS25DLEtBQTNCLEVBQWtDLEtBQUs5RixNQUF2QyxFQUErQyxLQUFLaUMsS0FBcEQsRUFBMkQsS0FBS3hSLElBQWhFLEVBQXNFLEtBQUs3VSxPQUEzRSxDQUFsQjtBQUNEO0FBQ0Y7Ozs7RUFsSDRCcUIsbUI7O0FBQVZHLEMsQ0FDWitHLE8sR0FBVSx1QztBQURFL0csQyxDQUVaaVMsaUIsR0FBb0IsSTtrQkFGUmpTLEMiLCJmaWxlIjoiYWtpbGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyY2MwZmQzOTg4MzJmODNhMGRhNSIsIi8qKlxuICogSmF2YXNjcmlwdCBmcmFtZXdvcmtcbiAqXG4gKiBjb25zdCBBa2lsaSA9IG1ha2VJdEVhc3koanMgKyBodG1sKTtcbiAqXG4gKiBAYXV0aG9yIEFsZXhhbmRyIEJhbGFzeWFuIDxteXdlYnN0cmVldEBnbWFpbC5jb20+XG4gKiBAbGluayBodHRwOi8vYWtpbGlqcy5jb21cbiAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50LmpzJztcbmltcG9ydCBJZiBmcm9tICcuL2NvbXBvbmVudHMvaWYuanMnO1xuaW1wb3J0IEZvciBmcm9tICcuL2NvbXBvbmVudHMvZm9yLmpzJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdC5qcyc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9jb21wb25lbnRzL2lucHV0LmpzJztcbmltcG9ydCBSYWRpbyBmcm9tICcuL2NvbXBvbmVudHMvcmFkaW8uanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9jb21wb25lbnRzL3RleHQuanMnO1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJy4vY29tcG9uZW50cy90ZXh0YXJlYS5qcyc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuL2NvbXBvbmVudHMvY29udGVudC5qcyc7XG5pbXBvcnQgSW5jbHVkZSBmcm9tICcuL2NvbXBvbmVudHMvaW5jbHVkZS5qcyc7XG5pbXBvcnQgSWZyYW1lIGZyb20gJy4vY29tcG9uZW50cy9pZnJhbWUuanMnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vY29tcG9uZW50cy9pbWFnZS5qcyc7XG5pbXBvcnQgRW1iZWQgZnJvbSAnLi9jb21wb25lbnRzL2VtYmVkLmpzJztcbmltcG9ydCBBdWRpbyBmcm9tICcuL2NvbXBvbmVudHMvYXVkaW8uanMnO1xuaW1wb3J0IFZpZGVvIGZyb20gJy4vY29tcG9uZW50cy92aWRlby5qcyc7XG5pbXBvcnQgVHJhY2sgZnJvbSAnLi9jb21wb25lbnRzL3RyYWNrLmpzJztcbmltcG9ydCBTb3VyY2UgZnJvbSAnLi9jb21wb25lbnRzL3NvdXJjZS5qcyc7XG5pbXBvcnQgT2JqZWN0cyBmcm9tICcuL2NvbXBvbmVudHMvb2JqZWN0LmpzJztcbmltcG9ydCBSb3V0ZSBmcm9tICcuL2NvbXBvbmVudHMvcm91dGUuanMnO1xuaW1wb3J0IFVybCBmcm9tICcuL2NvbXBvbmVudHMvdXJsLmpzJztcbmltcG9ydCBBIGZyb20gJy4vY29tcG9uZW50cy9hLmpzJztcbmltcG9ydCBTY29wZSBmcm9tICcuL3Njb3BlLmpzJztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4vc2VydmljZXMvcm91dGVyLmpzJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3NlcnZpY2VzL3N0b3JlLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCBnbG9iYWxzIGZyb20gJy4vZ2xvYmFscy5qcyc7XG5cbi8qKlxuICogVGhlIGZyYW1ld29yayBvYmplY3RcbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9nZXR0aW5nLXN0YXJ0ZWR9XG4gKi9cbmNvbnN0IEFraWxpID0ge307XG5cbkFraWxpLl9fZGVmYXVsdHMgPSBbXTtcblxuLyoqXG4gKiBTZXQgdGhlIGZyYW1ld29yaydzIGRlZmF1bHQgdmFyaWFibGVzXG4gKi9cbkFraWxpLnNldERlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgZGVidWc6IHRydWUsXG4gICAgaWdub3JlZFRhZ3M6IFsnZ2xvYmFscy51dGlscyddXG4gIH07XG4gIFxuICB0aGlzLl9faW5pdCA9IG51bGw7XG4gIHRoaXMuX19jbGVhcmVkID0gZmFsc2U7XG4gIHRoaXMuX19jb21wb25lbnRzID0ge307XG4gIHRoaXMuX19hbGlhc2VzID0ge307XG4gIHRoaXMuX19zY29wZXMgPSB7fTtcbiAgdGhpcy5fX3N0b3JlTGlua3MgPSB7fTtcbiAgdGhpcy5fX3dpbmRvdyA9IHt9O1xuICB0aGlzLl9faXNvbGF0aW9uID0gbnVsbDtcbiAgdGhpcy5fX2V2YWx1YXRpb24gPSBudWxsO1xuICB0aGlzLl9fd3JhcHBpbmcgPSBmYWxzZTtcbiAgdGhpcy5fX29uRXJyb3IgPSAoKSA9PiB0aGlzLnRyaWdnZXJJbml0KGZhbHNlKTtcbiAgXG4gIHRoaXMuaHRtbEJvb2xlYW5BdHRyaWJ1dGVzID0gW1xuICAgICdkaXNhYmxlZCcsICdjb250ZW50ZWRpdGFibGUnLCAnaGlkZGVuJ1xuICBdO1xuXG4gIGZvcihsZXQga2V5IGluIGdsb2JhbHMpIHtcbiAgICBkZWxldGUgZ2xvYmFsc1trZXldO1xuICB9XG5cbiAgZ2xvYmFscy51dGlscyA9IHV0aWxzO1xuXG4gIHRoaXMuY29tcG9uZW50cyA9IHt9O1xuICB0aGlzLnNlcnZpY2VzID0ge307XG5cbiAgdGhpcy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG4gIHRoaXMuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuICB0aGlzLlNjb3BlID0gU2NvcGU7XG4gIHRoaXMudXRpbHMgPSB1dGlscztcbiAgdGhpcy5nbG9iYWxzID0gZ2xvYmFscztcbiAgdGhpcy5jb21wb25lbnRzLkEgPSBBO1xuICB0aGlzLmNvbXBvbmVudHMuQXVkaW8gPSBBdWRpbztcbiAgdGhpcy5jb21wb25lbnRzLkNvbnRlbnQgPSBDb250ZW50O1xuICB0aGlzLmNvbXBvbmVudHMuRm9yID0gRm9yO1xuICB0aGlzLmNvbXBvbmVudHMuRW1iZWQgPSBFbWJlZDtcbiAgdGhpcy5jb21wb25lbnRzLklmID0gSWY7XG4gIHRoaXMuY29tcG9uZW50cy5JbmNsdWRlID0gSW5jbHVkZTtcbiAgdGhpcy5jb21wb25lbnRzLklucHV0ID0gSW5wdXQ7XG4gIHRoaXMuY29tcG9uZW50cy5JZnJhbWUgPSBJZnJhbWU7XG4gIHRoaXMuY29tcG9uZW50cy5JbWFnZSA9IEltYWdlO1xuICB0aGlzLmNvbXBvbmVudHMuT2JqZWN0ID0gT2JqZWN0cztcbiAgdGhpcy5jb21wb25lbnRzLlJhZGlvID0gUmFkaW87XG4gIHRoaXMuY29tcG9uZW50cy5Sb3V0ZSA9IFJvdXRlO1xuICB0aGlzLmNvbXBvbmVudHMuU2VsZWN0ID0gU2VsZWN0O1xuICB0aGlzLmNvbXBvbmVudHMuU291cmNlID0gU291cmNlO1xuICB0aGlzLmNvbXBvbmVudHMuVGV4dCA9IFRleHQ7XG4gIHRoaXMuY29tcG9uZW50cy5UZXh0YXJlYSA9IFRleHRhcmVhO1xuICB0aGlzLmNvbXBvbmVudHMuVHJhY2sgPSBUcmFjaztcbiAgdGhpcy5jb21wb25lbnRzLlVybCA9IFVybDtcbiAgdGhpcy5jb21wb25lbnRzLlZpZGVvID0gVmlkZW87XG4gIHRoaXMuc2VydmljZXMucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIHRoaXMuc2VydmljZXMucm91dGVyID0gcm91dGVyO1xuICB0aGlzLnNlcnZpY2VzLnN0b3JlID0gc3RvcmU7XG5cbiAgdGhpcy5kZWZpbmUoKTtcbiAgdGhpcy5lcnJvckhhbmRsaW5nKCk7XG4gIHRoaXMuaXNvbGF0ZUV2ZW50cygpO1xuICB0aGlzLmlzb2xhdGVBcnJheVByb3RvdHlwZSgpO1xuICB0aGlzLmlzb2xhdGVXaW5kb3dGdW5jdGlvbnMoKTsgXG4gIFxuICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5fX2RlZmF1bHRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHRoaXMuX19kZWZhdWx0c1tpXSgpO1xuICB9XG59XG5cbi8qKlxuICogRGVmaW5lIGFsbCBkZWZhdWx0IGNvbXBvbmVudHNcbiAqL1xuQWtpbGkuZGVmaW5lID0gZnVuY3Rpb24gKCkge1xuICBBLmRlZmluZSgpO1xuICBBdWRpby5kZWZpbmUoKTtcbiAgQ29udGVudC5kZWZpbmUoKTtcbiAgQ29tcG9uZW50LmRlZmluZSgpO1xuICBFbWJlZC5kZWZpbmUoKTtcbiAgRm9yLmRlZmluZSgpO1xuICBJbmNsdWRlLmRlZmluZSgpO1xuICBJZnJhbWUuZGVmaW5lKCk7XG4gIEltYWdlLmRlZmluZSgpO1xuICBJbnB1dC5kZWZpbmUoKTtcbiAgSWYuZGVmaW5lKCk7XG4gIE9iamVjdHMuZGVmaW5lKCk7XG4gIFJhZGlvLmRlZmluZSgpO1xuICBSb3V0ZS5kZWZpbmUoKTtcbiAgU2VsZWN0LmRlZmluZSgpO1xuICBTb3VyY2UuZGVmaW5lKCk7XG4gIFRleHRhcmVhLmRlZmluZSgpO1xuICBUcmFjay5kZWZpbmUoKTtcbiAgVmlkZW8uZGVmaW5lKCk7XG59O1xuXG4vKipcbiAqIFNldCBkZWZhdWx0c1xuICogXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiBcbiAqL1xuQWtpbGkuZGVmYXVsdHMgPSBmdW5jdGlvbiAoZm4pIHsgIFxuICB0aGlzLl9fZGVmYXVsdHMucHVzaChmbik7XG4gIGZuKCk7XG59XG5cbi8qKlxuICogQ2xlYXIgdGhlIGdsb2JhbCBjb250ZXh0XG4gKi9cbkFraWxpLmNsZWFyR2xvYmFscyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYodGhpcy5fX2NsZWFyZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZSkge1xuICAgIEVsZW1lbnQucHJvdG90eXBlW2tleV0gPSB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlW2tleV07XG4gIH1cblxuICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fX3dpbmRvdy5BcnJheS5wcm90b3R5cGUpIHtcbiAgICBBcnJheS5wcm90b3R5cGVba2V5XSA9IHRoaXMuX193aW5kb3cuQXJyYXkucHJvdG90eXBlW2tleV07XG4gIH1cblxuICBmb3IobGV0IGtleSBpbiB0aGlzLm9wdGlvbnMuZ2xvYmFscykge1xuICAgIHRoaXMub3B0aW9ucy5nbG9iYWxzW2tleV0gPSB0aGlzLnVud3JhcCh0aGlzLm9wdGlvbnMuZ2xvYmFsc1trZXldKTtcbiAgfVxuXG4gIHdpbmRvdy5zZXRUaW1lb3V0ID0gdGhpcy5fX3dpbmRvdy5zZXRUaW1lb3V0O1xuICB3aW5kb3cuc2V0SW50ZXJ2YWwgPSB0aGlzLl9fd2luZG93LnNldEludGVydmFsO1xuICB3aW5kb3cuUHJvbWlzZSA9IHRoaXMuX193aW5kb3cuUHJvbWlzZTtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgdGhpcy5fX29uRXJyb3IpO1xuICB0aGlzLl9fY2xlYXJlZCA9IHRydWU7XG59O1xuXG4vKipcbiAqIEpvaW4gYmluZGluZyBrZXlzXG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBiaW5kaW5nIGtleXNcbiAqL1xuQWtpbGkuam9pbkJpbmRpbmdLZXlzID0gZnVuY3Rpb24gKGtleXMpIHtcbiAgcmV0dXJuIGtleXMubWFwKGVsID0+IGVsLnRvU3RyaW5nKCkpLmpvaW4oJy4nKTtcbn07XG5cbi8qKlxuICogQWRkIHNjb3BlIHRvIHRoZSBzY29wZXMgbGlzdFxuICpcbiAqIEBwYXJhbSBzY29wZVxuICovXG5Ba2lsaS5hZGRTY29wZSA9IGZ1bmN0aW9uIChzY29wZSkge1xuICBpZiAodGhpcy5fX3Njb3Blc1tzY29wZS5fX25hbWVdKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBTY29wZSBuYW1lICR7c2NvcGUuX19uYW1lfSBhbHJlYWR5IGV4aXN0c2ApO1xuICB9XG5cbiAgdGhpcy5fX3Njb3Blc1tzY29wZS5fX25hbWVdID0gc2NvcGU7XG59O1xuXG4vKipcbiAqIEdldCBzY29wZSBmcm9tIHRoZSBzY29wZXMgbGlzdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc2NvcGUgbmFtZVxuICogQHJldHVybnMge1Njb3BlfVxuICovXG5Ba2lsaS5nZXRTY29wZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiB0aGlzLl9fc2NvcGVzW25hbWVdO1xufTtcblxuLyoqXG4gKiBEZWxldGUgc2NvcGUgZnJvbSB0aGUgc2NvcGVzIGxpc3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHNjb3BlIG5hbWVcbiAqL1xuQWtpbGkucmVtb3ZlU2NvcGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICBjb25zdCBzY29wZSA9IHRoaXMuX19zY29wZXNbbmFtZV07XG4gIHNjb3BlLl9fZWwgPSBudWxsO1xuICBzY29wZS5fX2NvbXBvbmVudCA9IG51bGw7XG4gIHNjb3BlLl9fcGFyZW50ID0gbnVsbDtcbiAgdGhpcy5fX3Njb3Blc1tuYW1lXSA9IG51bGw7XG4gIGRlbGV0ZSB0aGlzLl9fc2NvcGVzW25hbWVdO1xufTtcblxuLyoqXG4gKiBHZXQgYWxsIGVsZW1lbnRzIHdpdGggYXR0YWNoZWQgQWtpbGkgY29tcG9uZW50c1xuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3RyZWU9dHJ1ZV0gLSByZXR1cm4gYXJyYXkgb2YgdGhlIHBhcmVudHMgaWYgdHJ1ZSwgY2xvc2VzdCBwYXJlbnQgaWYgZmFsc2VcbiAqIEByZXR1cm5zIHtBcnJheXxFbGVtZW50fG51bGx9XG4gKi9cbkFraWxpLmdldEFraWxpUGFyZW50cyA9IGZ1bmN0aW9uIChlbCwgdHJlZSA9IHRydWUpIHtcbiAgbGV0IGFyciA9IFtdO1xuXG4gIGZ1bmN0aW9uIGNoZWNrKG5vZGUpIHtcbiAgICBpZiAoIW5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChub2RlLnBhcmVudE5vZGUuX19ha2lsaSkge1xuICAgICAgYXJyLnB1c2gobm9kZS5wYXJlbnROb2RlKTtcblxuICAgICAgaWYgKCF0cmVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVjayhub2RlLnBhcmVudE5vZGUpO1xuICB9XG5cbiAgY2hlY2soZWwpO1xuICByZXR1cm4gdHJlZT8gYXJyOiBhcnJbMF07XG59O1xuXG4vKipcbiAqIFNldCBlbGVtZW50IGlubmVyIGh0bWwgd2l0aCBjb250ZW50IHJlcGxhY2VtZW50XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCI8aT5IZWxsbzwvaT48Yj5Xb3JsZDwvYj5cIlxuICogZWwuaW5uZXJIVE1MID0gXCI8Yj5Xb3JsZDwvYj5cIjtcbiAqIEFraWxpLnNldFRlbXBsYXRlKGVsLCBcIjxpPkhlbGxvPC9pPiR7dGhpcy5fX2NoaWxkcmVufVwiKTtcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbkFraWxpLnNldFRlbXBsYXRlID0gZnVuY3Rpb24gKGVsLCB0ZW1wbGF0ZSkge1xuICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoL1xcJHsoKCg/IVxcJHspXFxzKnRoaXNcXC5fX2NvbnRlbnRcXHMqKSopfS8sIGVsLmlubmVySFRNTCk7XG4gIGVsLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuXG4gIHJldHVybiBlbC5pbm5lckhUTUw7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIHVuaXF1ZSBzY29wZSBuYW1lXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuQWtpbGkuY3JlYXRlU2NvcGVOYW1lID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdXRpbHMuY3JlYXRlUmFuZG9tU3RyaW5nKDE2LCAoc3RyKSA9PiB7XG4gICAgcmV0dXJuICEhdGhpcy5fX3Njb3Blc1tzdHJdO1xuICB9KTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSBmdW5jdGlvbi5cbiAqIEV2ZXJ5IHNjb3BlIHZhcmlhYmxlIGNoYW5nZSBjYWxscyBhY2NvcmRpbmcgbm9kZSBldmFsdWF0aW9uLlxuICogRm9yIGV4YW1wbGUsIGlmIHlvdSBjaGFuZ2Ugc29tZSBzY29wZSB2YXJpYWJsZSBpbiB0aGUgbG9vcCAtIGV2YWx1YXRpb24gd2lsbCBiZSBjYWxsZWQgb24gdGhlIGVhY2ggY2hhbmdlLlxuICogSXQgbWF5IGJlIHNsb3cgZm9yIHRoZSBhcHBsaWNhdGlvbi5cbiAqIFlvdSBjYW4gaXNvbGF0ZSB0aGlzIGFjdGlvbiBhbmQgcnVuIGFsbCBldmFsdWF0aW9uIHByb2Nlc3MgYWZ0ZXIgcGFzc2VkIGZ1bmN0aW9uIGF0IG9uY2UuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS5pc29sYXRlID0gZnVuY3Rpb24gKGZuKSB7IFxuICBpZiAodGhpcy5fX2lzb2xhdGlvbikge1xuICAgIHJldHVybiBmbigpO1xuICB9XG5cbiAgdGhpcy5fX2lzb2xhdGlvbiA9IHt9O1xuICBsZXQgcmVzID0gZm4oKTtcbiAgbGV0IHByb3BzID0gW107XG5cbiAgZm9yIChsZXQgayBpbiB0aGlzLl9faXNvbGF0aW9uKSB7XG4gICAgaWYgKCF0aGlzLl9faXNvbGF0aW9uLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBwcm9wcy5wdXNoKHRoaXMuX19pc29sYXRpb25ba10pO1xuICB9XG5cbiAgdGhpcy5fX2lzb2xhdGlvbiA9IG51bGw7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBwcm9wcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjb25zdCBwcm9wID0gcHJvcHNbaV07XG4gICAgY29uc3QgdmFsID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMocHJvcC5rZXlzLCBwcm9wLmNvbXBvbmVudC5fX3Njb3BlKTsgICAgXG4gICAgcHJvcC5jb21wb25lbnQuX19pc1Jlc29sdmVkICYmIHByb3AuY29tcG9uZW50Ll9fdHJpZ2dlclN0b3JlQW5kQXR0cihwcm9wLmtleXMpO1xuICAgIHByb3AuY29tcG9uZW50Ll9fZXZhbHVhdGVCeUtleXMocHJvcC5rZXlzLCB2YWwsIHByb3AuaXNEZWxldGVkKTtcbiAgfVxuXG4gIHByb3BzID0gbnVsbDtcbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogU3RvcCBldmFsdWF0aW9uIGJlZm9yZSB0aGUgZnVuY3Rpb24gYW5kIGNvbnRpbnVlIGFmdGVyXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS51bmV2YWx1YXRlID0gZnVuY3Rpb24gKGZuKSB7XG4gIGxldCBldmFsdWF0aW9uID0gdGhpcy5fX2V2YWx1YXRpb247XG4gIGxldCByZXM7XG4gIHRoaXMuX19ldmFsdWF0aW9uID0gbnVsbDtcbiAgcmVzID0gZm4oKTtcbiAgdGhpcy5fX2V2YWx1YXRpb24gPSBldmFsdWF0aW9uO1xuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBFdmFsdWF0ZSBvbmx5IHJvb3QgcHJvcGVydGllc1xuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkud3JhcHBpbmcgPSBmdW5jdGlvbiAoZm4pIHtcbiAgaWYodGhpcy5fX3dyYXBwaW5nKSB7XG4gICAgcmV0dXJuIGZuKCk7XG4gIH1cbiAgXG4gIHRoaXMuX193cmFwcGluZyA9IHRydWU7XG4gIGxldCByZXMgPSBmbigpOyAgXG4gIHRoaXMuX193cmFwcGluZyA9IGZhbHNlOyAgXG4gIHJldHVybiByZXM7ICAgXG59XG5cbi8qKlxuICogU3RvcCBpc29sYXRpb24gYmVmb3JlIHRoZSBmdW5jdGlvbiBhbmQgY29udGludWUgYWZ0ZXJcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLnVuaXNvbGF0ZSA9IGZ1bmN0aW9uIChmbikge1xuICBsZXQgaXNvbGF0aW9uID0gdGhpcy5fX2lzb2xhdGlvbjtcbiAgbGV0IHJlcztcbiAgdGhpcy5fX2lzb2xhdGlvbiA9IG51bGw7XG4gIHJlcyA9IGZuKCk7XG4gIHRoaXMuX19pc29sYXRpb24gPSBpc29sYXRpb247XG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIFJ1biB0aGUgZnVuY3Rpb24gb24gdGhlIG5leHQgdGlja1xuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuQWtpbGkubmV4dFRpY2sgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMpID0+IHNldFRpbWVvdXQoKCkgPT4gUHJvbWlzZS5yZXNvbHZlKGZuKCkpLnRoZW4ocmVzKSkpO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnM9e31dXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChlbCwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCByZWNvbXBpbGUgPSBvcHRpb25zLnJlY29tcGlsZTtcbiAgbGV0IGNvbXBvbmVudCA9IGVsLl9fYWtpbGk7XG5cbiAgaWYgKGNvbXBvbmVudCkge1xuICAgIGlmIChyZWNvbXBpbGUpIHtcbiAgICAgIGNvbXBvbmVudC5fX3JlY29tcGlsZShyZWNvbXBpbGUgPT09IHRydWU/IHt9OiByZWNvbXBpbGUpO1xuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgaXNSb290ID0gZWwgPT09IHRoaXMuX19yb290O1xuICBsZXQgY29tcG9uZW50TmFtZSA9IHV0aWxzLnRvRGFzaENhc2UoZWwuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKSB8fCBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpO1xuICBsZXQgX0NvbXBvbmVudCA9IHRoaXMuX19jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdO1xuXG4gIENIRUNLX0FMSUFTRVM6IGlmICghX0NvbXBvbmVudCkge1xuICAgIGxldCBzZWxlY3RvcnMgPSBPYmplY3Qua2V5cyh0aGlzLl9fYWxpYXNlcyk7XG5cbiAgICBpZiAoIXNlbGVjdG9ycy5sZW5ndGgpIHtcbiAgICAgIGJyZWFrIENIRUNLX0FMSUFTRVM7XG4gICAgfVxuXG4gICAgbGV0IHNlbGVjdG9yQWxsID0gc2VsZWN0b3JzLmpvaW4oJywnKTtcblxuICAgIGlmICghZWwubWF0Y2hlcyhzZWxlY3RvckFsbCkpIHtcbiAgICAgIGJyZWFrIENIRUNLX0FMSUFTRVM7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBzZWxlY3RvcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgc2VsZWN0b3IgPSBzZWxlY3RvcnNbaV07XG5cbiAgICAgIGlmIChlbC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBfQ29tcG9uZW50ID0gdGhpcy5fX2NvbXBvbmVudHNbdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKCFfQ29tcG9uZW50ICYmICFpc1Jvb3QpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIV9Db21wb25lbnQpIHtcbiAgICBfQ29tcG9uZW50ID0gdGhpcy5Db21wb25lbnQ7XG4gIH1cblxuICBpZiAoX0NvbXBvbmVudC5tYXRjaGVzICYmICFlbC5tYXRjaGVzKF9Db21wb25lbnQubWF0Y2hlcykpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb21wb25lbnQgPSBuZXcgX0NvbXBvbmVudChlbCwge30pOyAgXG4gIFxuICBpZiAoY29tcG9uZW50Ll9fY2FuY2VsbGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYoQWtpbGkuZ2V0QWtpbGlQYXJlbnRzKGVsKS5maW5kKHAgPT4gcC5fX2FraWxpLl9fcHJldmVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb21wb25lbnQuX19jcmVhdGUoKTtcbiAgcmV0dXJuIGNvbXBvbmVudDtcbn07XG5cbi8qKlxuICogQ29tcGlsZSB0aGUgZWxlbWVudFxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbkFraWxpLmNvbXBpbGUgPSBmdW5jdGlvbiAocm9vdCwgb3B0aW9ucyA9IHsgcmVjb21waWxlOiBmYWxzZSB9KSB7ICBcbiAgbGV0IGVsZW1lbnRzID0gW107XG5cbiAgY29uc3QgbmVzdGVkSW5pdGlhbGl6aW5nID0gKGVsKSA9PiB7XG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXMuaW5pdGlhbGl6ZShlbCwgb3B0aW9ucyk7XG4gICAgbGV0IGNoaWxkcmVuID0gZWwuY2hpbGRyZW47XG4gICAgY29tcG9uZW50ICYmIGVsZW1lbnRzLnB1c2goY29tcG9uZW50KTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5lc3RlZEluaXRpYWxpemluZyhjaGlsZCk7XG4gICAgfVxuICB9O1xuXG4gIG5lc3RlZEluaXRpYWxpemluZyhyb290KTtcbiAgbGV0IHAgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBjb21wb25lbnQgPSBlbGVtZW50c1tpXTtcbiAgICBwLnB1c2goY29tcG9uZW50Ll9fY29tcGlsZSgpKTtcbiAgfVxuXG4gIHJldHVybiBQcm9taXNlLmFsbChwKS50aGVuKCgpID0+IHtcbiAgICBsZXQgciA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IGVsZW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgY29tcG9uZW50ID0gZWxlbWVudHNbaV07XG4gICAgICByLnB1c2goY29tcG9uZW50Ll9fcmVzb2x2ZSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocik7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciB0aGUgY29tcG9uZW50IG9yIGdldCBpdCBpZiBmbiBpcyBub3QgcGFzc2VkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBbZm5dXG4gKi9cbkFraWxpLmNvbXBvbmVudCA9IGZ1bmN0aW9uIChuYW1lLCBmbikge1xuICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmICghZm4pIHtcbiAgICByZXR1cm4gdGhpcy5fX2NvbXBvbmVudHNbbmFtZV0gfHwgbnVsbDtcbiAgfVxuICBcbiAgaWYgKHRoaXMuX19jb21wb25lbnRzW25hbWVdICYmIEFraWxpLm9wdGlvbnMuZGVidWcpIHsgIFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKGBDb21wb25lbnQgJHtuYW1lfSBhbHJlYWR5IHdhcyBhZGRlZGApO1xuICB9XG5cbiAgdGhpcy5fX2NvbXBvbmVudHNbbmFtZV0gPSBmbjtcbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5Ba2lsaS5yZW1vdmVDb21wb25lbnQgPSBmdW5jdGlvbiAobmFtZSkge1xuICBkZWxldGUgdGhpcy5fX2NvbXBvbmVudHNbbmFtZV07XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIHRoZSBzZWxlY3RvciBhbGlhcyBvciBnZXQgaXQgaWYgY29tcG9uZW50IG5hbWUgaXMgbm90IHBhc3NlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciAtIERPTSBzZWxlY3RvclxuICogQHBhcmFtIHtzdHJpbmd9IFtjb21wb25lbnROYW1lXVxuICovXG5Ba2lsaS5hbGlhcyA9IGZ1bmN0aW9uIChzZWxlY3RvciwgY29tcG9uZW50TmFtZSA9ICcnKSB7XG4gIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYgKCFjb21wb25lbnROYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXSAmJiBBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oYEFsaWFzIHdpdGggc2VsZWN0b3IgJHtzZWxlY3Rvcn0gYWxyZWFkeSB3YXMgYWRkZWRgKTtcbiAgfVxuXG4gIHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXSA9IGNvbXBvbmVudE5hbWU7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgc2VsZWN0b3IgYWxpYXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqL1xuQWtpbGkucmVtb3ZlQWxpYXMgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgZGVsZXRlIHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSBhcnJheSBwcm90b3R5cGUgZnVuY3Rpb25zXG4gKi9cbkFraWxpLmlzb2xhdGVBcnJheVByb3RvdHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fX3dpbmRvdy5BcnJheSA9IHsgcHJvdG90eXBlOiB7fSB9O1xuXG4gIGxldCBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoQXJyYXkucHJvdG90eXBlKTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgbGV0IG9sZCA9IEFycmF5LnByb3RvdHlwZVtrZXldO1xuXG4gICAgaWYgKHR5cGVvZiBvbGQgIT0gJ2Z1bmN0aW9uJyB8fCBrZXkgPT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdGhpcy5fX3dpbmRvdy5BcnJheS5wcm90b3R5cGVba2V5XSA9IG9sZDtcblxuICAgIEFycmF5LnByb3RvdHlwZVtrZXldID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIEFraWxpLnVuZXZhbHVhdGUoKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX19pc1Byb3h5KSB7XG4gICAgICAgICAgcmV0dXJuIG9sZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiBvbGQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG59O1xuXG4vKipcbiAqIElzb2xhdGUgc29tZSB3aW5kb3cgZnVuY3Rpb25zXG4gKi9cbkFraWxpLmlzb2xhdGVXaW5kb3dGdW5jdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX193aW5kb3cuc2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gIHRoaXMuX193aW5kb3cuc2V0SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbDtcbiAgdGhpcy5fX3dpbmRvdy5Qcm9taXNlID0gd2luZG93LlByb21pc2U7XG4gIHdpbmRvdy5zZXRUaW1lb3V0ID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuc2V0VGltZW91dCwgMCk7XG4gIHdpbmRvdy5zZXRJbnRlcnZhbCA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LnNldEludGVydmFsLCAwKTtcbiAgXG4gIGlmKCF3aW5kb3cuQUtJTElfU1NSKSB7XG4gICAgd2luZG93LlByb21pc2UuY29uc3RydWN0b3IgPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5Qcm9taXNlLmNvbnN0cnVjdG9yKTtcbiAgICB3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LlByb21pc2UucHJvdG90eXBlLnRoZW4sIFswLCAnbGFzdCddKTtcbiAgICB3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2ggPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS5jYXRjaCk7XG4gIH0gIFxufTtcblxuLyoqXG4gKiBJc29sYXRlIGV2ZW50IGxpc3RlbmVyc1xuICovXG5Ba2lsaS5pc29sYXRlRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQgPSB7IHByb3RvdHlwZToge30gfTtcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcjtcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcjtcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmU7XG5cbiAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgIGRlbGV0ZSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnM7XG4gICAgcmV0dXJuIEFraWxpLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgICBsZXQgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgaWYodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhcmdzWzFdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICAgIH07XG4gICAgfSAgICBcblxuICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5wdXNoKHtcbiAgICAgIGxpbms6IGZuLFxuICAgICAgZm46IGFyZ3NbMV1cbiAgICB9KTtcblxuICAgIHJldHVybiBBa2lsaS5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgICBsZXQgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV1baV07XG5cbiAgICAgIGlmIChsaXN0ZW5lci5saW5rID09PSBmbikge1xuICAgICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICBhcmdzWzFdID0gbGlzdGVuZXIuZm47XG4gICAgICAgIGktLTtcbiAgICAgICAgbC0tO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIEFraWxpLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG59O1xuXG4vKipcbiAqIFdyYXAgdGhlIGZ1bmN0aW9uIGNhbGxiYWNrIHRvIGFuIGlzb2xhdGUgY29udGV4dFxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd8bnVtYmVyW118c3RyaW5nW119IFtwb3M9XCJsYXN0XCJdXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbkFraWxpLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uID0gZnVuY3Rpb24gKGZuLCBwb3MgPSAnbGFzdCcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAhQXJyYXkuaXNBcnJheShwb3MpICYmIChwb3MgPSBbcG9zXSk7XG4gICAgXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHBvcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBudW0gPSBwb3NbaV07XG4gICAgICBsZXQgaW5kZXggPSBudW07XG4gICAgICBsZXQgY2FsbGJhY2sgPSBhcmdzW251bV07XG5cbiAgICAgIGlmKG51bSA9PSAnbGFzdCcpIHtcbiAgICAgICAgaW5kZXggPSBhcmdzLmxlbmd0aCAtIDE7XG4gICAgICAgIGNhbGxiYWNrID0gYXJnc1tpbmRleF07XG4gICAgICB9XG5cbiAgICAgIGlmKHR5cGVvZiBjYWxsYmFjayAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZighY2FsbGJhY2suX19pc29sYXRlZCkge1xuICAgICAgICBhcmdzW2luZGV4XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiBjYWxsYmFjay5hcHBseShjYWxsYmFjaywgYXJndW1lbnRzKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFyZ3NbaW5kZXhdLCAnX19pc29sYXRlZCcsIHtcbiAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICB2YWx1ZTogY2FsbGJhY2tcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xufTtcblxuLyoqXG4gKiBXcmFwIG9iamVjdHMvY2xhc3NlcyB0byBpc29sYXRlIGFuZCB1bmV2YWx1YXRlIGRhdGFcbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gb2JqXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIFxuICovXG5Ba2lsaS53cmFwID0gZnVuY3Rpb24gKG9iaiwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBjdXJyZW50ID0gb2JqO1xuXG4gIGlmKHR5cGVvZiBvYmogPT0gJ2Z1bmN0aW9uJykge1xuICAgIG9iaiA9IHRoaXMud3JhcEZ1bmN0aW9uKG9iaiwgb3B0aW9ucyk7XG5cbiAgICBpZihvYmogPT09IGN1cnJlbnQpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICB9XG4gIGVsc2UgaWYoIW9iaiB8fCB0eXBlb2Ygb2JqICE9ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBsZXQga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaik7XG5cbiAgZm9yKGxldCBrID0gMCwgYyA9IGtleXMubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgbGV0IGtleSA9IGtleXNba107XG4gICAgbGV0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KTtcblxuICAgIGlmKCFkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSB8fCAhZGVzY3JpcHRvci53cml0YWJsZSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYob3B0aW9ucy5yZXZlcnNlKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsuLi5kZXNjcmlwdG9yLCB2YWx1ZTogb2JqW2tleV0uX19ha2lsaSB8fCBvYmpba2V5XSB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsuLi5kZXNjcmlwdG9yLCB2YWx1ZTogdGhpcy53cmFwKG9ialtrZXldLCBvcHRpb25zKSB9KTtcbiAgfSBcbiAgXG4gIHJldHVybiBvYmo7XG59O1xuXG4vKipcbiAqIFVud3JhcCBvYmplY3RzL2NsYXNzZXNcbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gb2JqXG4gKi9cbkFraWxpLnVud3JhcCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRoaXMud3JhcChvYmosIHsgcmV2ZXJzZTogdHJ1ZSB9KTtcbn1cblxuLyoqXG4gKiBJc29sYXRlIGEgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge2Z1bmN0aW9ufVxuICovXG5Ba2lsaS53cmFwRnVuY3Rpb24gPSBmdW5jdGlvbiAoZm4sIG9wdGlvbnMgPSB7fSkge1xuICBpZiAoZm4uX19ha2lsaSkge1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIGNvbnN0IGFraWxpV3JhcHBlZEZ1bmN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIGlmKG9wdGlvbnMudGFnICYmIEFraWxpLl9fZXZhbHVhdGlvbiAmJiBBa2lsaS5vcHRpb25zLmlnbm9yZWRUYWdzLmluZGV4T2Yob3B0aW9ucy50YWcpID09IC0xKSB7XG4gICAgICBBa2lsaS5fX2V2YWx1YXRpb24uY29tcG9uZW50Ll9fYWRkVGFnKG9wdGlvbnMudGFnLCBBa2lsaS5fX2V2YWx1YXRpb24ubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIEFraWxpLndyYXBwaW5nKCgpID0+IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xuXG4gIGxldCBrZXlzID0gT2JqZWN0LmtleXMoZm4pO1xuICBha2lsaVdyYXBwZWRGdW5jdGlvbi5wcm90b3R5cGUgPSBmbi5wcm90b3R5cGU7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgYWtpbGlXcmFwcGVkRnVuY3Rpb25ba2V5XSA9IGZuW2tleV07XG4gIH1cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYWtpbGlXcmFwcGVkRnVuY3Rpb24sICdfX2FraWxpJywge1xuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIHZhbHVlOiBmblxuICB9KTtcblxuICByZXR1cm4gYWtpbGlXcmFwcGVkRnVuY3Rpb247XG59O1xuXG4vKipcbiAqIEV2YWx1YXRlIHRoZSB0YWdzIG5vZGUgZXhwcmVzc2lvbnNcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IHRhZ3NcbiAqL1xuQWtpbGkuZXZhbHVhdGVUYWcgPSBmdW5jdGlvbiAodGFncykge1xuICBpZighdGhpcy5yb290KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICBpZighQXJyYXkuaXNBcnJheSh0YWdzKSkge1xuICAgIHRhZ3MgPSBbdGFnc107XG4gIH1cblxuICBjb25zdCBjaGlsZHJlbiA9IHRoaXMucm9vdC5jaGlsZHJlbigpO1xuICBcbiAgZm9yKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgY29uc3QgY2hpbGRUYWdzID0gY2hpbGQuX190YWdzOyAgICBcblxuICAgIGZvcihsZXQgaiA9IDAsIHMgPSB0YWdzLmxlbmd0aDsgaiA8IHM7IGorKykge1xuICAgICAgY29uc3QgdGFnID0gdGFnc1tqXTtcbiAgICAgIFxuICAgICAgaWYoIWNoaWxkVGFnc1t0YWddKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICBcbiAgICAgIGZvcihsZXQgayA9IDAsIGMgPSBjaGlsZFRhZ3NbdGFnXS5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgICAgY29uc3Qgb2JqID0gY2hpbGRUYWdzW3RhZ11ba107XG4gICAgICAgIGNoaWxkLl9fZXZhbHVhdGVOb2RlKG9iai5ub2RlLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9ICBcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIHRhZ3NcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IHRhZ3NcbiAqL1xuQWtpbGkucmVtb3ZlVGFnID0gZnVuY3Rpb24gKHRhZ3MpIHtcbiAgaWYoIXRoaXMucm9vdCkge1xuICAgIHJldHVybjtcbiAgfVxuICBcbiAgaWYoIUFycmF5LmlzQXJyYXkodGFncykpIHtcbiAgICB0YWdzID0gW3RhZ3NdO1xuICB9XG5cbiAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLnJvb3QuY2hpbGRyZW4oKTtcbiAgXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2ldOyBcblxuICAgIGZvcihsZXQgaiA9IDAsIHMgPSB0YWdzLmxlbmd0aDsgaiA8IHM7IGorKykge1xuICAgICAgY2hpbGQuX19yZW1vdmVUYWcodGFnc1tqXSk7XG4gICAgfVxuICB9ICBcbn1cblxuLyoqXG4gKiBFcnJvciBoYW5kbGluZ1xuICovXG5Ba2lsaS5lcnJvckhhbmRsaW5nID0gZnVuY3Rpb24gKCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCB0aGlzLl9fb25FcnJvcik7XG59O1xuXG4vKipcbiAqIFRyaWdnZXIgYW4gaW5pdGlhbGl6YXRpb24gc3RhdHVzXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBzdGF0dXNcbiAqL1xuQWtpbGkudHJpZ2dlckluaXQgPSBmdW5jdGlvbiAoc3RhdHVzKSB7XG4gIEFraWxpLl9faW5pdCA9IHN0YXR1cztcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdha2lsaS1pbml0JywgeyBkZXRhaWw6IHN0YXR1cyB9KSk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIGFwcGxpY2F0aW9uXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBbcm9vdF1cbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5Ba2lsaS5pbml0ID0gZnVuY3Rpb24gKHJvb3QpIHtcbiAgcm9vdCA9IHJvb3QgfHwgZG9jdW1lbnQuYm9keTtcblxuICBpZighKHJvb3QgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgUm9vdCBlbGVtZW50IG11c3QgYmUgYW4gaHRtbCBlbGVtZW50YCk7XG4gIH1cblxuICBpZihyb290ID09PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFwiaHRtbFwiIGNhbid0IGJlIHRoZSByb290IGVsZW1lbnRgKTtcbiAgfVxuXG4gIHRoaXMuX19yb290ID0gcm9vdDtcbiAgXG4gIGlmKHdpbmRvdy5BS0lMSV9TRVJWRVIpIHsgICAgXG4gICAgQWtpbGkuaW5pdFNlcnZlclNpZGVIdG1sKHdpbmRvdy5BS0lMSV9TRVJWRVIuaHRtbCk7XG4gICAgQWtpbGkuaW5pdFNlcnZlclNpZGVSZXF1ZXN0Q2FjaGUod2luZG93LkFLSUxJX1NFUlZFUi5yZXF1ZXN0Q2FjaGUpO1xuICB9XG4gIGVsc2Uge1xuICAgIHdpbmRvdy5BS0lMSV9DTElFTlQgPSB7XG4gICAgICBodG1sOiB0aGlzLnByZXBhcmVTZXJ2ZXJTaWRlSHRtbCgpICAgICAgXG4gICAgfVxuICB9XG5cbiAgZm9yKGxldCBrZXkgaW4gdGhpcy5vcHRpb25zLmdsb2JhbHMpIHtcbiAgICB0aGlzLm9wdGlvbnMuZ2xvYmFsc1trZXldID0gdGhpcy53cmFwKHRoaXMub3B0aW9ucy5nbG9iYWxzW2tleV0sIHsgdGFnOiBgZ2xvYmFscy4ke2tleX1gIH0pO1xuICB9XG4gIFxuICByZXR1cm4gdGhpcy5jb21waWxlKHRoaXMuX19yb290KS50aGVuKCgpID0+IHtcbiAgICBpZiAocm91dGVyLl9faW5pdCkge1xuICAgICAgcmV0dXJuIHJvdXRlci5jaGFuZ2VTdGF0ZSh7IGluaXQ6IHRydWUgfSk7XG4gICAgfVxuICB9KS50aGVuKCgpID0+IHsgICAgXG4gICAgd2luZG93LkFLSUxJX0NMSUVOVCAmJiAod2luZG93LkFLSUxJX0NMSUVOVC5yZXF1ZXN0Q2FjaGUgPSB0aGlzLnByZXBhcmVTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlKCkpO1xuICAgIHRoaXMudHJpZ2dlckluaXQodHJ1ZSk7XG4gIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICB0aGlzLnRyaWdnZXJJbml0KGZhbHNlKTtcbiAgICB0aHJvdyBlcnI7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHNlcnZlci1zaWRlIHJlbmRlcmluZyBodG1sXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBodG1sXG4gKi9cbkFraWxpLmluaXRTZXJ2ZXJTaWRlSHRtbCA9IGZ1bmN0aW9uIChodG1sKSB7XG4gIGZvciAobGV0IGkgPSB0aGlzLl9fcm9vdC5hdHRyaWJ1dGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICB0aGlzLl9fcm9vdC5yZW1vdmVBdHRyaWJ1dGUodGhpcy5fX3Jvb3QuYXR0cmlidXRlc1tpXS5uYW1lKTtcbiAgfVxuXG4gIGxldCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gIGxldCBkb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGh0bWwsIFwidGV4dC9odG1sXCIpO1xuICBsZXQgZWwgPSBkb2MucXVlcnlTZWxlY3Rvcih0aGlzLl9fcm9vdCA9PT0gZG9jdW1lbnQuYm9keT8gJ2JvZHknOiAnYm9keSA+IConKTsgICAgXG4gIHRoaXMuX19yb290LmlubmVySFRNTCA9IGVsLmlubmVySFRNTDtcblxuICBmb3IgKGxldCBpID0gZWwuYXR0cmlidXRlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGxldCBhdHRyID0gZWwuYXR0cmlidXRlc1tpXTtcbiAgICB0aGlzLl9fcm9vdC5zZXRBdHRyaWJ1dGUoYXR0ci5uYW1lLCBhdHRyLnZhbHVlKTtcbiAgfSAgXG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgcmVxdWVzdCBjYWNoZVxuICogXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKi9cbkFraWxpLmluaXRTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlID0gZnVuY3Rpb24gKG9iaikge1xuICBjb25zdCBpbml0ID0gKGluc3RhbmNlLCBvYmopID0+IHtcbiAgICBmb3IobGV0IGtleSBpbiBvYmopIHtcbiAgICAgIGluc3RhbmNlLl9fY2FjaGVba2V5XSA9IG9ialtrZXldO1xuICAgIH1cbiAgfVxuICBcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xuICAgIGxldCBpbnN0YW5jZSA9IGtleSA9PT0gJ19fbWFpbic/IHJlcXVlc3Q6IHJlcXVlc3QuX19pbnN0YW5jZXNba2V5XTtcbiAgICBpbml0KGluc3RhbmNlLCBvYmpba2V5XSk7XG4gIH1cbn1cblxuLyoqXG4gKiBQcmVwYXJlIHNlcnZlci1zaWRlIHJlbmRlcmluZyBodG1sXG4gKi9cbkFraWxpLnByZXBhcmVTZXJ2ZXJTaWRlSHRtbCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX19yb290Lm91dGVySFRNTDtcbn1cblxuLyoqXG4gKiBQcmVwYXJlIHNlcnZlci1zaWRlIHJlbmRlcmluZyByZXF1ZXN0IGNhY2hlXG4gKi9cbkFraWxpLnByZXBhcmVTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlID0gZnVuY3Rpb24gKCkge1xuICBsZXQgY2FjaGUgPSB7IF9fbWFpbjogcmVxdWVzdC5fX2NhY2hlIH07XG5cbiAgZm9yKGxldCBrZXkgaW4gcmVxdWVzdC5fX2luc3RhbmNlcykge1xuICAgIGNhY2hlW2tleV0gPSByZXF1ZXN0Ll9faW5zdGFuY2VzW2tleV0uX19jYWNoZTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuLyoqXG4gKiBEZWluaXRpYWxpemUgdGhlIGFwcGxpY2F0aW9uXG4gKi9cbkFraWxpLmRlaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jbGVhckdsb2JhbHMoKTtcbiAgcm91dGVyLmRlaW5pdCgpO1xuICByZXF1ZXN0LmRlaW5pdCgpO1xuICBsZXQgc3RvcmVLZXlzID0gT2JqZWN0LmtleXMoc3RvcmUuX190YXJnZXQpO1xuICBcbiAgZm9yKGxldCBpID0gMCwgbCA9IHN0b3JlS2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBkZWxldGUgc3RvcmUuX190YXJnZXRbc3RvcmVLZXlzW2ldXTtcbiAgfVxuXG4gIHRoaXMuc2V0RGVmYXVsdHMoKTtcbn07XG5cbndpbmRvdy5Ba2lsaSA9IEFraWxpO1xuZXhwb3J0IGRlZmF1bHQgQWtpbGk7XG5Ba2lsaS5zZXREZWZhdWx0cygpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ha2lsaS5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgZm9yIGVsZW1lbnRzIHdoaWNoIGhhdmUgYXN5bmMgYXR0cmlidXRlIGNvbnRlbnQuXHJcbiAqIFxyXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XHJcbiAqIFxyXG4gKiBAdGFnIHVybFxyXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXJsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgbWF0Y2hlcyA9ICdbdXJsXSc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcclxuICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG4gICAgdGhpcy51cmxBdHRyaWJ1dGUgPSAnc3JjJztcclxuICB9XHJcblxyXG4gIGNvbXBpbGVkKCkge1xyXG4gICAgdGhpcy5hdHRyKCd1cmwnLCB0aGlzLnNldFVybCk7XHJcbiAgfVxyXG5cclxuICBzZXRVcmwodXJsKSB7XHJcbiAgICB0aGlzLmF0dHJzW3RoaXMudXJsQXR0cmlidXRlXSA9IHVybDtcclxuICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy91cmwuanMiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi9ha2lsaS5qcyc7XG5pbXBvcnQgU2NvcGUgZnJvbSAnLi9zY29wZS5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc2VydmljZXMvc3RvcmUuanMnO1xuaW1wb3J0IGdsb2JhbHMgZnJvbSAnLi9nbG9iYWxzLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcblxuZXhwb3J0IGNvbnN0IGV2YWx1YXRpb25SZWdleCA9IC9cXCR7KCgoPyFcXCR7KS4pKil9LztcbmV4cG9ydCBjb25zdCBldmFsdWF0aW9uUmVnZXhHbG9iYWwgPSBuZXcgUmVnRXhwKGV2YWx1YXRpb25SZWdleC5zb3VyY2UsIFwiZ1wiKTtcbmV4cG9ydCBjb25zdCBzeXN0ZW1BdHRyaWJ1dGVzID0gWydjb21wb25lbnQnLCAnc2NvcGUnXTtcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZyb20gd2hpY2ggYWxsIGNvbXBvbmVudHMgYXJlIGluaGVyaXRlZFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICcnO1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbXTtcbiAgc3RhdGljIGV2ZW50cyA9IFtdO1xuICBzdGF0aWMgY29udHJvbEF0dHJpYnV0ZXMgPSBmYWxzZTtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gZmFsc2U7XG4gIHN0YXRpYyB0ZW1wbGF0ZSA9ICcnO1xuICBzdGF0aWMgdGVtcGxhdGVVcmwgPSAnJztcbiAgc3RhdGljIHNjb3BlID0gbnVsbDtcblxuICAvKipcbiAgICogRnVuY3Rpb24gdG8gZGVmaW5lIHRoZSBjb21wb25lbnRcbiAgICovXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdjb21wb25lbnQnLCBDb21wb25lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIHRoZSBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBleHByZXNzaW9uXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbdmFyc11cbiAgICovXG4gIHN0YXRpYyBwYXJzZShjb250ZXh0LCBleHByZXNzaW9uLCB2YXJpYWJsZXMgPSB7fSkge1xuICAgIHZhcmlhYmxlcyA9IHsgLi4uZ2xvYmFscywgLi4udmFyaWFibGVzfTtcbiAgICBjb25zdCBrZXlzID0gW107XG4gICAgY29uc3QgdmFycyA9IFtdO1xuICAgIGNvbnN0IGV4cHMgPSB1dGlscy5zcGxpdChleHByZXNzaW9uLCAnOycsIFsnXCInLCBcIidcIiwgJ2AnXSk7ICBcbiAgICBleHBzW2V4cHMubGVuZ3RoIC0gMV0gPSBgcmV0dXJuICR7ZXhwc1tleHBzLmxlbmd0aCAtIDFdfWA7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gdmFyaWFibGVzKSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgIHZhcnMucHVzaCh2YXJpYWJsZXNba2V5XSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBuZXcgRnVuY3Rpb24oLi4ua2V5cywgYCR7ZXhwcy5qb2luKCc7ICcpfWApLmFwcGx5KGNvbnRleHQsIHZhcnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqIFxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW3Njb3BlXSBcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsLCBzY29wZSA9IHt9KSB7XG4gICAgaWYgKCEoZWwgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgbXVzdCBwYXNzIGFuIGh0bWwgZWxlbWVudCB0byB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yYCk7XG4gICAgfVxuXG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19pc0NvbXBpbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2lzUmVzb2x2ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX3ByZXZlbnQgPSBmYWxzZTtcbiAgICB0aGlzLl9fYmluZGluZ3MgPSB7fTtcbiAgICB0aGlzLl9fdGFncyA9IHt9O1xuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSBudWxsO1xuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IGZhbHNlO1xuICAgIHRoaXMuX19jb21waWxpbmcgPSBudWxsO1xuICAgIHRoaXMuX19kaXNhYmxlUHJveHkgPSB7fTtcbiAgICB0aGlzLl9fZGlzYWJsZVN0b3JlS2V5cyA9IHt9O1xuICAgIHRoaXMuX19kaXNhYmxlQXR0cktleXMgPSB7fTtcbiAgICB0aGlzLl9fY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLl9fcGFyZW50ID0gbnVsbDtcbiAgICB0aGlzLl9fcGFyZW50cyA9IFtdO1xuICAgIHRoaXMuX19hdHRycyA9IHt9O1xuICAgIHRoaXMuX19hdHRyTGlua3MgPSB7fTtcbiAgICB0aGlzLl9fc3RvcmVMaW5rcyA9IHt9O1xuICAgIHRoaXMuX19hdHRyaWJ1dGVPZiA9IG51bGw7XG4gICAgdGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQgPSB0aGlzO1xuICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICB0aGlzLmVsID0gZWw7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGNvbXBpbGF0aW9uIG9wdGlvbnMgXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlQ29tcGlsYXRpb25PcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB7IFxuICAgICAgY2hlY2tDaGFuZ2VzOiBmYWxzZSwgXG4gICAgICBzZXRFdmVudHM6IHRydWUsXG4gICAgICBzZXRQYXJlbnRzOiB0cnVlLFxuICAgICAgc2V0Qm9vbGVhbkF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICBkZWZpbmVBdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgLi4ub3B0aW9ucyBcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSByZWNvbXBpbGF0aW9uIG9wdGlvbnMgXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlUmVjb21waWxhdGlvbk9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHsgXG4gICAgICAuLi50aGlzLl9fY3JlYXRlQ29tcGlsYXRpb25PcHRpb25zKCksXG4gICAgICBzZXRFdmVudHM6IGZhbHNlLFxuICAgICAgc2V0UGFyZW50czogZmFsc2UsXG4gICAgICBzZXRCb29sZWFuQXR0cmlidXRlczogZmFsc2UsXG4gICAgICBkZWZpbmVBdHRyaWJ1dGVzOiBmYWxzZSxcbiAgICAgIC4uLm9wdGlvbnMgXG4gICAgfTtcbiAgfVxuIFxuICAvKipcbiAgICogQ2FsbGVkIG9uIHRoZSByZWNvbXBpbGF0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcmVjb21waWxlKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuX19pc01vdW50ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fcmVjb21waWxpbmcgPSB0cnVlO1xuICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50Ll9fZGlzYWJsZVByb3h5ID0ge307XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IHRoaXMuX19jcmVhdGVSZWNvbXBpbGF0aW9uT3B0aW9ucyhvcHRpb25zKTsgICAgXG4gICAgdGhpcy5fX2NvbXBpbGluZy5zZXRFdmVudHMgJiYgdGhpcy5fX3NldEV2ZW50cygpO1xuICAgIHRoaXMuX19jb21waWxpbmcuc2V0UGFyZW50cyAmJiB0aGlzLl9fc2V0UGFyZW50cygpO1xuICAgIHRoaXMuX19jb21waWxpbmcuc2V0Qm9vbGVhbkF0dHJpYnV0ZXMgJiYgdGhpcy5fX3NldEJvb2xlYW5BdHRyaWJ1dGVzKCk7XG4gICAgdGhpcy5fX2NvbXBpbGluZy5kZWZpbmVBdHRyaWJ1dGVzICYmIHRoaXMuX19kZWZpbmVBdHRyaWJ1dGVzKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIG9uIHRoZSBjcmVhdGlvblxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZSgpIHtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0gdGhpcy5fX2NyZWF0ZUNvbXBpbGF0aW9uT3B0aW9ucygpOyAgIFxuICAgIHRoaXMuX19pbml0aWFsaXplKCk7XG4gICAgdGhpcy5fX3NldEV2ZW50cygpO1xuICAgIHRoaXMuX19zZXRQYXJlbnRzKCk7XG4gICAgdGhpcy5fX3NldEJvb2xlYW5BdHRyaWJ1dGVzKCk7XG4gICAgdGhpcy5fX2RlZmluZUF0dHJpYnV0ZXMoKTtcbiAgICBBa2lsaS5pc29sYXRlKCgpID0+IHRoaXMuY3JlYXRlZCh0aGlzLmF0dHJzKSk7ICAgICAgIFxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiB0aGUgY29tcGlsYXRpb25cbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIF9fY29tcGlsZSgpIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuX19jb250cm9sQXR0cmlidXRlcyB8fCAhdGhpcy5fX2V2YWx1YXRlUGFyZW50O1xuICAgIGxldCBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgdGhpcy5fX2F0dHJpYnV0ZU9mID0gY29udHJvbD8gdGhpczogdGhpcy5fX2V2YWx1YXRlUGFyZW50Ll9fYWtpbGk7XG5cbiAgICBpZiAoIXRoaXMuX19yZWNvbXBpbGluZyB8fCB0aGlzLl9fY29tcGlsaW5nLm5ld1BhcmVudCB8fCB0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMpIHtcbiAgICAgIHRoaXMuX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXModGhpcy5lbCwgdGhpcy5fX2F0dHJpYnV0ZU9mKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnRlcnBvbGF0ZSA9IChjaGlsZHJlbiwgcGFyZW50KSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcblxuICAgICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT0gMyAmJiB0aGlzLl9faW5pdGlhbGl6ZU5vZGUoY2hpbGQsIHBhcmVudCkpIHtcbiAgICAgICAgICB0aGlzLl9fZXZhbHVhdGVOb2RlKGNoaWxkLCB0aGlzLl9fY29tcGlsaW5nPyB0aGlzLl9fY29tcGlsaW5nLmNoZWNrQ2hhbmdlczogZmFsc2UpOyAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoaWxkLm5vZGVUeXBlID09IDEgJiYgIWNoaWxkLl9fYWtpbGkpIHtcbiAgICAgICAgICB0aGlzLl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKGNoaWxkKTtcbiAgICAgICAgICBpbnRlcnBvbGF0ZShjaGlsZC5jaGlsZE5vZGVzLCBjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaW50ZXJwb2xhdGUodGhpcy5lbC5jaGlsZE5vZGVzLCB0aGlzLmVsKTtcbiAgICB0aGlzLl9faXNNb3VudGVkID0gdHJ1ZTtcbiAgICBsZXQgcmVzO1xuXG4gICAgaWYgKCF0aGlzLl9fcmVjb21waWxpbmcpIHtcbiAgICAgIHJlcyA9IEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uQ29tcGlsZWQgJiYgdGhpcy5hdHRycy5vbkNvbXBpbGVkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5jb21waWxlZCgpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlVXJsKSB7XG4gICAgICAgIHAgPSByZXF1ZXN0LmdldCh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlVXJsLCB7IGNhY2hlOiB0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlQ2FjaGUgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLl9fY29udGVudDtcbiAgICAgICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCByZXMuZGF0YSk7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX19jb250ZW50OyAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmVzID0gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0cnMub25SZWNvbXBpbGVkICYmIHRoaXMuYXR0cnMub25SZWNvbXBpbGVkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgICB0aGlzLnJlY29tcGlsZWQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLl9fcmVjb21waWxpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0gbnVsbDtcblxuICAgIHJldHVybiBwLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5fX2lzQ29tcGlsZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlIHRoZSBjb21wb25lbnRcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIF9fcmVzb2x2ZSgpIHtcbiAgICBpZiAodGhpcy5fX2lzUmVzb2x2ZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5hdHRycy5vblJlc29sdmVkICYmIHRoaXMuYXR0cnMub25SZXNvbHZlZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoQWtpbGkuaXNvbGF0ZSgoKSA9PiB0aGlzLnJlc29sdmVkKCkpKS50aGVuKHJlcyA9PiB7XG4gICAgICB0aGlzLl9faXNSZXNvbHZlZCA9IHRydWU7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnQgb2YgdGhlIHtAc2VlIENvbXBvbmVudCNfX2NvbXBpbGV9IG1ldGhvZFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemUoKSB7ICAgIFxuICAgIGxldCBwYXJlbnQgPSBBa2lsaS5nZXRBa2lsaVBhcmVudHModGhpcy5lbCwgZmFsc2UpOyAgICAgXG4gICAgbGV0IFNjb3BlID0gdGhpcy5jb25zdHJ1Y3Rvci5zY29wZSB8fCBBa2lsaS5TY29wZTtcbiAgICBsZXQgc2NvcGU7XG4gICAgbGV0IGlzUm9vdCA9IEFraWxpLl9fcm9vdCA9PT0gdGhpcy5lbDtcbiAgICB0aGlzLmVsLl9fYWtpbGkgPSB0aGlzO1xuXG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgc2NvcGUgPSBuZXcgU2NvcGUodGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3Njb3BlJykgfHwgQWtpbGkuY3JlYXRlU2NvcGVOYW1lKCksIHRoaXMuZWwsIHRoaXMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNjb3BlID0gbmV3IFNjb3BlKGlzUm9vdD8gJ3Jvb3QnOiBBa2lsaS5jcmVhdGVTY29wZU5hbWUoKSwgdGhpcy5lbCwgdGhpcyk7XG4gICAgICBpc1Jvb3QgJiYgKEFraWxpLnJvb3QgPSB0aGlzKTtcbiAgICB9XG5cbiAgICBsZXQgX19zY29wZSA9IHNjb3BlO1xuICAgIGxldCBfc2NvcGUgPSBPYmplY3QuYXNzaWduKHNjb3BlLCB0aGlzLnNjb3BlKTtcbiAgICBsZXQgY29udHJvbEF0dHJpYnV0ZXMgPSB0aGlzLmNvbnN0cnVjdG9yLmNvbnRyb2xBdHRyaWJ1dGVzO1xuICAgIGxldCBldmVudHMgPSB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50cztcblxuICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlKSB7XG4gICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCB0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkge1xuICAgICAgdGhpcy5fX2NvbnRlbnQgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gICAgdGhpcy5fX3Njb3BlID0gX19zY29wZTtcbiAgICB0aGlzLl9fZXZlbnRzID0gZXZlbnRzO1xuICAgIHRoaXMuX19jb250cm9sQXR0cmlidXRlcyA9IGNvbnRyb2xBdHRyaWJ1dGVzO1xuXG4gICAgQWtpbGkuYWRkU2NvcGUoc2NvcGUpO1xuICAgIHRoaXMuc2NvcGUgPSB0aGlzLl9fbmVzdGVkT2JzZXJ2ZShfc2NvcGUsIFtdKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYm9vbGVhbiBhdHRyaWJ1dGVzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKSB7XG4gICAgdGhpcy5ib29sZWFuQXR0cmlidXRlcyA9IFtdLmNvbmNhdChBa2lsaS5odG1sQm9vbGVhbkF0dHJpYnV0ZXMsIHRoaXMuY29uc3RydWN0b3IuYm9vbGVhbkF0dHJpYnV0ZXMpO1xuXG4gICAgY29uc3Qgc2V0QXR0ciA9IChlbCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGF0dHJzID0gZWwuYXR0cmlidXRlcywgbCA9IGF0dHJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgbm9kZSA9IGF0dHJzW2ldO1xuXG4gICAgICAgIGlmICh0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzLmluZGV4T2Yobm9kZS5ub2RlTmFtZSkgIT0gLTEpIHtcbiAgICAgICAgICBpZiAoZWwuaGFzQXR0cmlidXRlKGBib29sZWFuLSR7bm9kZS5ub2RlTmFtZX1gKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGBib29sZWFuLSR7bm9kZS5ub2RlTmFtZX1gLCBlbC5nZXRBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSkgfHwgbm9kZS5ub2RlTmFtZSk7XG4gICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKG5vZGUubm9kZU5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZWwuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGVsLmNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmICghY2hpbGQuX19ha2lsaSkge1xuICAgICAgICAgIHNldEF0dHIoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNldEF0dHIodGhpcy5lbCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGV2ZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldEV2ZW50cygpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuX19ldmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgZXYgPSB0aGlzLl9fZXZlbnRzW2ldO1xuICAgICAgIS9eb24tL2kudGVzdChldikgJiYgKGV2ID0gJ29uLScgKyBldik7XG5cbiAgICAgIGlmICghdGhpcy5lbC5oYXNBdHRyaWJ1dGUoZXYpKSB7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGV2LCAnJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjb21wb25lbnQgcGFyZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldFBhcmVudHMoKSB7XG4gICAgbGV0IHBhcmVudHMgPSBBa2lsaS5nZXRBa2lsaVBhcmVudHModGhpcy5lbCk7XG5cbiAgICBpZiAoIXBhcmVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IG5ld1BhcmVudCA9IHRoaXMuX19wYXJlbnQgIT09IHBhcmVudHNbMF07XG4gICAgbGV0IGV2YWx1YXRlUGFyZW50ID0gbnVsbDtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gcGFyZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBwYXJlbnQgPSBwYXJlbnRzW2ldO1xuXG4gICAgICBpZiAoIXBhcmVudC5fX2FraWxpLmNvbnN0cnVjdG9yLnRyYW5zcGFyZW50KSB7XG4gICAgICAgIGV2YWx1YXRlUGFyZW50ID0gcGFyZW50O1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX19jb21waWxpbmcubmV3UGFyZW50ID0gbmV3UGFyZW50O1xuICAgIG5ld1BhcmVudCAmJiB0aGlzLl9fZGV0YWNoKCk7XG5cbiAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50cmFuc3BhcmVudCkge1xuICAgICAgdGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQgPSBldmFsdWF0ZVBhcmVudC5fX2FraWxpO1xuICAgIH1cblxuICAgIHRoaXMuX19ldmFsdWF0ZVBhcmVudCA9IGV2YWx1YXRlUGFyZW50O1xuICAgIHRoaXMuX19wYXJlbnQgPSBwYXJlbnRzWzBdO1xuICAgIHRoaXMuX19wYXJlbnRzID0gcGFyZW50cztcbiAgICB0aGlzLnNjb3BlLl9fcGFyZW50ID0gdGhpcy5fX2V2YWx1YXRlUGFyZW50Ll9fYWtpbGkuc2NvcGU7XG4gICAgIXRoaXMuX19yZWNvbXBpbGluZyAmJiB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19hZGRDaGlsZCh0aGlzLmVsKTtcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcy5zY29wZSwgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fc2NvcGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBjaGlsZCBlbGVtZW50IHRvIHRoZSBsaXN0XG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hZGRDaGlsZChlbCkge1xuICAgIHRoaXMuX19jaGlsZHJlbi5wdXNoKGVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGxpY2UgY2hpbGQgZnJvbSB0aGUgbGlzdFxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc3BsaWNlQ2hpbGQoZWwpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuX19jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuX19jaGlsZHJlbltpXTtcblxuICAgICAgaWYgKGNoaWxkID09PSBlbCkge1xuICAgICAgICB0aGlzLl9fY2hpbGRyZW4uc3BsaWNlKGksIDEpO1xuICAgICAgICBpLS07XG4gICAgICAgIGwtLTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogWW91IGNhbiBjaGFuZ2UgZXhwcmVzc2lvbiBiZWZvcmUgcGFyc2luZyBoZXJlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBleHByZXNzaW9uXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldFBhcnNlZEV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIG5vZGUgaGFzIGFueSBwcm9wZXJ0eSBjaGFuZ2VzIG9yIG5vdFxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2hlY2tFdmFsdWF0aW9uKG5vZGUpIHtcbiAgICBpZiAoIU9iamVjdC5rZXlzKG5vZGUuX19wcm9wZXJ0aWVzKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGsgaW4gbm9kZS5fX3Byb3BlcnRpZXMpIHtcbiAgICAgIGlmICghbm9kZS5fX3Byb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGxldCBwcm9wID0gbm9kZS5fX3Byb3BlcnRpZXNba107XG4gICAgICBsZXQgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhwcm9wLmtleXMsIHByb3AuY29tcG9uZW50Ll9fc2NvcGUpO1xuXG4gICAgICBpZiAoIW5vZGUuX19jb21wb25lbnQuX19jb21wYXJlTm9kZVByb3BlcnR5VmFsdWUocHJvcCwgdmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgQ2hlY2sgbm9kZSBoYXMgY2hhbmdlZCBvbiB0aGUgY2VydGFpbiBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2Uobm9kZSwga2V5cywgdmFsdWUpIHtcbiAgICBsZXQgcHJvcCA9IHRoaXMuX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cyk7XG4gICAgXG4gICAgaWYgKCFwcm9wKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gIW5vZGUuX19jb21wb25lbnQuX19jb21wYXJlTm9kZVByb3BlcnR5VmFsdWUocHJvcCwgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXBhcmUgYSBub2RlIHByb3BlcnR5IHZhbHVlXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gcHJvcCBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSBcbiAgICovXG4gIF9fY29tcGFyZU5vZGVQcm9wZXJ0eVZhbHVlKHByb3AsIHZhbHVlLCBvcHRpb25zID0ge30pIHtcbiAgICBpZih0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICAgIHZhbHVlID0geyBoYXNoOiB1dGlscy5jcmVhdGVPYmplY3RIYXNoKHZhbHVlKSB9O1xuICAgIH1cbiAgXG4gICAgcmV0dXJuIHV0aWxzLmNvbXBhcmUodmFsdWUsIHByb3AuY29weSwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGV4Y2VwdGlvbiBtZXNzYWdlXG4gICAqIFxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGUgXG4gICAqIEBwYXJhbSB7RXJyb3J9IGVyciBcbiAgICovXG4gIF9fY3JlYXRlRXhjZXB0aW9uTWVzc2FnZShub2RlLCBlcnIpIHtcbiAgICBsZXQgdGFnTmFtZSA9IG5vZGUuX19jb21wb25lbnQuZWwudGFnTmFtZTtcbiAgICBsZXQgYXR0ck5hbWUgPSBub2RlLl9fY29tcG9uZW50LmVsLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50Jyk7XG4gICAgbGV0IGNvbXBvbmVudE5hbWUgPSAoYXR0ck5hbWUgfHwgdGFnTmFtZSkudG9Mb3dlckNhc2UoKTtcbiAgICBsZXQgZWxlbWVudE5hbWUgPSBub2RlLl9fZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgbGV0IGF0dHJpYnV0ZU5hbWUgPSAobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKT8gbm9kZS5uYW1lLnRvTG93ZXJDYXNlKCk6ICcnOyAgICAgICAgXG4gICAgbGV0IG1lc3NhZ2VzID0gWyBlcnIubWVzc2FnZSwgbm9kZS5fX2V4cHJlc3Npb24gXTtcbiAgICBhdHRyaWJ1dGVOYW1lICYmIG1lc3NhZ2VzLnB1c2goYFthdHRyaWJ1dGUgJHthdHRyaWJ1dGVOYW1lfV1gKTtcbiAgICBtZXNzYWdlcyA9IG1lc3NhZ2VzLmNvbmNhdChbIGBbZWxlbWVudCAke2VsZW1lbnROYW1lfV1gLCBgW2NvbXBvbmVudCAke2NvbXBvbmVudE5hbWV9XWAgXSk7XG4gICAgcmV0dXJuIGBFeHByZXNzaW9uIGVycm9yOiBgICsgbWVzc2FnZXMuam9pbignXFxuXFx0YXQgJyk7XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgbm9kZSBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZShub2RlKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGxldCBhdHRyaWJ1dGVWYWx1ZTtcbiAgICBsZXQgZXhwcmVzc2lvbjtcbiAgICBjb25zdCBldmFsQ29tcG9uZW50ID0gbm9kZS5fX2F0dHJpYnV0ZU9mIHx8IG5vZGUuX19jb21wb25lbnQ7XG5cbiAgICBpZiAobm9kZS5fX2NvbXBvbmVudC5wYXJlbnRzKChjb20pID0+IGNvbS5fX3ByZXZlbnQpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHsgcmVzOiBub2RlLl9fZXhwcmVzc2lvbiB9O1xuICAgIH1cblxuICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cikgJiYgbm9kZS5fX2NvbXBvbmVudC5fX3ByZXZlbnQpIHtcbiAgICAgIHJldHVybiB7IHJlczogbm9kZS5fX2V4cHJlc3Npb24gfTtcbiAgICB9XG4gICAgXG4gICAgbGV0IHJlcyA9IG5vZGUuX19leHByZXNzaW9uLnJlcGxhY2UoZXZhbHVhdGlvblJlZ2V4R2xvYmFsLCAobSwgZCkgPT4ge1xuICAgICAgY291bnRlcisrO1xuICAgICAgbGV0IGV2YWx1YXRlO1xuICAgICAgbGV0IGV2YWx1YXRpb24gPSBbXTtcbiAgICAgIGxldCBleGlzdGluZ0JpbmRpbmdzID0ge307XG4gICAgICBsZXQgcGFyZW50QmluZGluZ3MgPSB7fTtcbiAgICAgIGxldCBwYXJzZVZhbHVlID0gbm9kZS5fX2NvbXBvbmVudC5fX2dldFBhcnNlZEV4cHJlc3Npb24oZCk7XG4gICAgICBBa2lsaS5fX2V2YWx1YXRpb24gPSB7IG5vZGU6IG5vZGUsIGxpc3Q6IFtdLCBjb21wb25lbnQ6IG5vZGUuX19jb21wb25lbnQgfTtcbiAgICAgIFxuICAgICAgdHJ5IHtcbiAgICAgICAgZXZhbHVhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLnBhcnNlKGV2YWxDb21wb25lbnQuX19ldmFsdWF0aW9uQ29tcG9uZW50LnNjb3BlLCBwYXJzZVZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlcnIpIHsgICAgICAgIFxuICAgICAgICB0aHJvdyB0aGlzLl9fY3JlYXRlRXhjZXB0aW9uTWVzc2FnZShub2RlLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoQWtpbGkuX19ldmFsdWF0aW9uKSB7XG4gICAgICAgIGV2YWx1YXRpb24gPSBBa2lsaS5fX2V2YWx1YXRpb24ubGlzdDtcbiAgICAgICAgQWtpbGkuX19ldmFsdWF0aW9uLmxpc3QgPSBudWxsO1xuICAgICAgICBBa2lsaS5fX2V2YWx1YXRpb24gPSBudWxsO1xuICAgICAgfVxuICAgICAgXG4gICAgICBmb3IgKGxldCBpID0gZXZhbHVhdGlvbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBsZXQgZGF0YSA9IGV2YWx1YXRpb25baV07XG4gICAgICAgIGxldCBoYXNoID0gZGF0YS5jb21wb25lbnQuX19jcmVhdGVLZXlzSGFzaChkYXRhLmtleXMpO1xuICAgICAgICBsZXQgcGFyZW50c0hhc2ggPSBkYXRhLmNvbXBvbmVudC5fX2NyZWF0ZUtleXNIYXNoKGRhdGEucGFyZW50cyk7XG4gICAgICAgXG4gICAgICAgIGlmIChkYXRhLm5vdEJpbmRpbmcpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChleGlzdGluZ0JpbmRpbmdzW2hhc2hdKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcGFyZW50VmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhkYXRhLnBhcmVudHMsIGRhdGEuY29tcG9uZW50Ll9fc2NvcGUpOyAgICAgICAgXG5cbiAgICAgICAgaWYgKHBhcmVudFZhbHVlICYmIHR5cGVvZiBwYXJlbnRWYWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGlmIChBa2lsaS5vcHRpb25zLmRlYnVnICYmIHBhcmVudEJpbmRpbmdzW3BhcmVudHNIYXNoXSA9PSA1MCkge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihbXG4gICAgICAgICAgICAgIGBGb3IgaGlnaGVyIHBlcmZvcm1hbmNlLCBkb24ndCBsb29wIFByb3h5IGFycmF5cy9vYmplY3RzIGluc2lkZSBleHByZXNzaW9uIGZ1bmN0aW9ucywgb3IgdXNlIEFraWxpLnVuZXZhbHVhdGUoKSB0byB3cmFwIHlvdSBjb2RlLmAsXG4gICAgICAgICAgICAgIGAkeyBub2RlLl9fZXhwcmVzc2lvbiB9YCxcbiAgICAgICAgICAgICAgYHNjb3BlIHByb3BlcnR5IFwiJHsgZGF0YS5wYXJlbnRzLmpvaW4oJy4nKX1cImBcbiAgICAgICAgICAgIF0uam9pbignXFxuXFx0YXQgJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAhcGFyZW50QmluZGluZ3NbcGFyZW50c0hhc2hdPyBwYXJlbnRCaW5kaW5nc1twYXJlbnRzSGFzaF0gPSAxOiBwYXJlbnRCaW5kaW5nc1twYXJlbnRzSGFzaF0rKztcbiAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICBpZiAoXG4gICAgICAgICAgdXRpbHMuaXNTY29wZVByb3h5KHBhcmVudFZhbHVlKSAmJiBcbiAgICAgICAgICBkYXRhLmNvbXBvbmVudCAhPT0gZXZhbENvbXBvbmVudC5fX2V2YWx1YXRpb25Db21wb25lbnQgJiYgXG4gICAgICAgICAgZGF0YS5jb21wb25lbnQgPT09IGRhdGEucmVhbENvbXBvbmVudFxuICAgICAgICApIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSAgXG5cbiAgICAgICAgZGF0YS5jb21wb25lbnQuX19iaW5kQW5kU2V0UHJvcGVydHkobm9kZSwgZGF0YS5rZXlzLCBkYXRhLmV2YWx1YXRlZCk7XG4gICAgICAgIGV4aXN0aW5nQmluZGluZ3NbaGFzaF0gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBleGlzdGluZ0JpbmRpbmdzID0gbnVsbDtcbiAgICAgIGV2YWx1YXRpb24gPSBudWxsO1xuXG4gICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKSB7XG4gICAgICAgIGV4cHJlc3Npb24gPSBtO1xuICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IGV2YWx1YXRlO1xuICAgICAgICByZXR1cm4gdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKGV2YWx1YXRlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBldmFsdWF0ZSA9PSAnb2JqZWN0Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShldmFsdWF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZSkge1xuICAgICAgICAgIHJldHVybiBldmFsdWF0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZXZhbHVhdGU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4geyByZXMsIGNvdW50ZXIsIGV4cHJlc3Npb24sIGF0dHJpYnV0ZVZhbHVlIH07XG4gIH1cblxuICAvKipcbiAgICogQmluZCB0aGUgbm9kZSBhbmQgc2V0IHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2V2YWx1YXRlZF1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19iaW5kQW5kU2V0UHJvcGVydHkobm9kZSwga2V5cywgZXZhbHVhdGVkKSB7XG4gICAgbGV0IGJpbmQgPSB0aGlzLl9fZ2V0Qm91bmROb2RlKGtleXMsIG5vZGUpO1xuICAgIGxldCB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19zY29wZSk7XG5cbiAgICBpZiAoIWJpbmQpIHtcbiAgICAgIHRoaXMuX19iaW5kKGtleXMsIHsgbm9kZSB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl9fc2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMsIHZhbHVlLCBldmFsdWF0ZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5lc3RlZCBldmFsdWF0aW9uIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFt3aXRob3V0UGFyZW50cz1mYWxzZV0gLSBpZiB0cnVlIGV2YWx1YXRpb24gd2lsbCBiZSBvbmx5IGZvciB0aGUgY3VycmVudCBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVOZXN0ZWQoa2V5cywgd2l0aG91dFBhcmVudHMgPSBmYWxzZSkge1xuICAgIGxldCBzY29wZSA9IHRoaXMuX19zY29wZTtcbiAgICBsZXQgcHJvcHMgPSBbXTsgICAgXG4gICAgXG4gICAgaWYgKCF3aXRob3V0UGFyZW50cykge1xuICAgICAgbGV0IGxhc3RQcm9wcyA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICBsZXQgdmFsdWU7XG5cbiAgICAgICAgbGFzdFByb3BzID0gWy4uLmxhc3RQcm9wcywga2V5XTtcbiAgICAgICAgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhsYXN0UHJvcHMsIHNjb3BlKTtcbiAgICAgICAgcHJvcHMucHVzaCh7IGtleXM6IGxhc3RQcm9wcywgdmFsdWU6IHZhbHVlfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcHJvcHMucHVzaCh7IGtleXM6IGtleXMsIHZhbHVlOiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCBzY29wZSl9KTtcbiAgICB9XG5cbiAgICBsZXQgcHJvcHNMZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgICBjb25zdCBlbEV2YWx1YXRlID0gKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGVsZW1lbnQuX19ha2lsaTsgICAgIFxuXG4gICAgICBmb3IgKGxldCBtID0gMDsgbSA8IHByb3BzTGVuZ3RoOyBtKyspIHtcbiAgICAgICAgbGV0IHByb3AgPSBwcm9wc1ttXTtcbiAgICAgICAgbGV0IGRhdGE7XG4gICAgICAgIFxuICAgICAgICBpZiAoY29tcG9uZW50ID09PSB0aGlzKSB7XG4gICAgICAgICAgbGV0IGJpbmQgPSBjb21wb25lbnQuX19nZXRCaW5kKHByb3Aua2V5cyk7XG4gICAgICAgICAgZGF0YSA9IGJpbmQ/IChiaW5kLl9fZGF0YSB8fCBbXSk6IFtdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRhdGEgPSBjb21wb25lbnQuX19nZXRBbGxCaW5kcyhwcm9wLmtleXMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIWRhdGEgfHwgIWRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgICBmb3IgKGxldCBrID0gMCwgYyA9IGRhdGEubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICAgICAgY29uc3QgYmluZCA9IGRhdGFba107XG5cbiAgICAgICAgICBpZighYmluZC5ub2RlLl9faW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBpZiAoY29tcG9uZW50Ll9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2UoYmluZC5ub2RlLCBwcm9wLmtleXMsIHByb3AudmFsdWUpKSB7ICBcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVLZXlzKHByb3Aua2V5cyk7ICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrUHJvcCA9IGNvbXBvbmVudC5fX2dldE5vZGVQcm9wZXJ0eShiaW5kLm5vZGUsIHByb3Aua2V5cyk7XG4gICAgICAgICAgICBjaGVja1Byb3AgJiYgY2hlY2tQcm9wLmV2YWx1YXRlZCAmJiBjb21wb25lbnQuc2NvcGUuX19zZXQocHJvcC5rZXlzLCBwcm9wLnZhbHVlLCBmYWxzZSwgdHJ1ZSk7IFxuICAgICAgICAgICAgY29tcG9uZW50Ll9fZXZhbHVhdGVOb2RlKGJpbmQubm9kZSwgZmFsc2UpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBfayBpbiBiaW5kLm5vZGUuX19wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgIGlmICghYmluZC5ub2RlLl9fcHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShfaykpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgbGV0IF9wcm9wID0gYmluZC5ub2RlLl9fcHJvcGVydGllc1tfa107XG4gICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKF9wcm9wLmtleXMsIF9wcm9wLmNvbXBvbmVudC5fX3Njb3BlKTtcbiAgICAgICAgICAgICAgX3Byb3AuY29tcG9uZW50Ll9fc2V0Tm9kZVByb3BlcnR5KGJpbmQubm9kZSwgX3Byb3Aua2V5cywgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb21wb25lbnQuX19lbmFibGVLZXlzKHByb3Aua2V5cyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGV2YWx1YXRlID0gKGVsZW1lbnRzKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gZWxFdmFsdWF0ZShlbGVtZW50c1tpXSk7XG4gICAgICAgIGV2YWx1YXRlKGNvbXBvbmVudC5fX2NoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZWxFdmFsdWF0ZSh0aGlzLmVsKTtcbiAgICBldmFsdWF0ZSh0aGlzLl9fY2hpbGRyZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIHZhbHVlIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVsZXRlZD1mYWxzZV0gLSB0cnVlIGlmIHZhbHVlIGlzIGRlbGV0aW5nXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVCeUtleXMgKGtleXMsIHZhbHVlLCBpc0RlbGV0ZWQgPSBmYWxzZSkgeyAgICAgXG4gICAgbGV0IGRhdGEgPSB0aGlzLl9fZ2V0QmluZChrZXlzKTtcblxuICAgIGNvbnN0IHVuYmluZCA9IChvYmosIHBhcmVudHMpID0+IHtcbiAgICAgIGZvciAobGV0IGsgaW4gb2JqKSB7XG4gICAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGspIHx8IHRoaXMuX19pc1N5c3RlbUJpbmRpbmdLZXkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBfa2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba10pO1xuICAgICAgICBsZXQgX19rZXlzID0gX2tleXMuc2xpY2UoKTtcbiAgICAgICAgbGV0IF9pc0RlbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IHZhbCA9IG9ialtrXTtcbiAgICAgICAgbGV0IGhhc0tleTtcbiAgICAgICAgXG4gICAgICAgIF9fa2V5cy5zaGlmdCgpO1xuICAgICAgICBoYXNLZXkgPSB1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhfX2tleXMsIHZhbHVlKTtcblxuICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnICYmICFoYXNLZXkpIHtcbiAgICAgICAgICBfaXNEZWxldGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWwgJiYgdHlwZW9mIHZhbCA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHVuYmluZCh2YWwsIF9rZXlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX19ldmFsdWF0ZU5lc3RlZChfa2V5cywgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCAhaGFzS2V5KSB7XG4gICAgICAgICAgdGhpcy5fX3VuYmluZChfa2V5cyk7XG4gICAgICAgICAgX2lzRGVsZXRlZCAmJiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhfX2tleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgZGF0YSAmJiB1bmJpbmQoZGF0YSwgW10uY29uY2F0KGtleXMpKTtcbiAgICB0aGlzLl9fZXZhbHVhdGVOZXN0ZWQoa2V5cywgZmFsc2UpO1xuXG4gICAgaWYgKGlzRGVsZXRlZCkge1xuICAgICAgdGhpcy5fX3VuYmluZChrZXlzKTtcbiAgICAgIGlzRGVsZXRlZCAmJiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSBldmVudCBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZUV2ZW50KG5vZGUsIGVsLCBlKSB7XG4gICAgbGV0IGV4cHJlc3Npb24gPSBldmFsdWF0aW9uUmVnZXguZXhlYyhub2RlLl9fZXhwcmVzc2lvbik7XG4gICAgbGV0IGV2YWx1YXRlO1xuXG4gICAgaWYgKCFleHByZXNzaW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fX2V2YWx1YXRpbmdFdmVudCA9IHtcbiAgICAgIGVsOiBlbCxcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIGV2ZW50OiBlLFxuICAgICAgbm9kZVxuICAgIH07XG5cbiAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0ge307XG5cbiAgICB0cnkge1xuICAgICAgZXZhbHVhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLnBhcnNlKHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50LnNjb3BlLCBleHByZXNzaW9uWzFdLCB7IGV2ZW50OiBlIH0pO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7ICAgICAgICBcbiAgICAgIHRocm93IHRoaXMuX19jcmVhdGVFeGNlcHRpb25NZXNzYWdlKG5vZGUsIGVycik7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSBudWxsO1xuICAgIHJldHVybiBldmFsdWF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBjaGFuZ2VzIGFuZCBldmFsdWF0ZSB0aGUgcGFzc2VkIG5vZGVcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2NoZWNrXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlTm9kZShub2RlLCBjaGVjayA9IHRydWUpIHtcbiAgICBjb25zdCBrZXkgPSBub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHI/ICd2YWx1ZSc6ICdub2RlVmFsdWUnO1xuXG4gICAgaWYgKGNoZWNrPyB0aGlzLl9fY2hlY2tFdmFsdWF0aW9uKG5vZGUpOiB0cnVlKSB7ICAgICAgXG4gICAgICBjb25zdCB7IHJlcywgYXR0cmlidXRlVmFsdWUsIGV4cHJlc3Npb24sIGNvdW50ZXIgfSA9IHRoaXMuX19ldmFsdWF0ZShub2RlKTsgICAgIFxuICAgICAgbm9kZVtrZXldICE9IHJlcyAmJiAobm9kZVtrZXldID0gcmVzKTtcblxuICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cikge1xuICAgICAgICBsZXQgdmFsdWUgPSByZXM7XG4gICAgICAgIGxldCBpc0Jvb2xlYW5BdHRyaWJ1dGUgPSBmYWxzZTtcbiAgXG4gICAgICAgIGlmIChjb3VudGVyID09IDEgJiYgZXhwcmVzc2lvbiAmJiBub2RlLl9fZXhwcmVzc2lvbiA9PSBleHByZXNzaW9uKSB7XG4gICAgICAgICAgdmFsdWUgPSBhdHRyaWJ1dGVWYWx1ZTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgY29uc3QgY2xlYXJBdHRyaWJ1dGUgPSBub2RlLm5vZGVOYW1lLnJlcGxhY2UoL15ib29sZWFuLSguKykvaSwgJyQxJyk7XG4gICAgICAgIGNvbnN0IGNhbWVsQXR0cmlidXRlID0gdXRpbHMudG9DYW1lbENhc2UoY2xlYXJBdHRyaWJ1dGUpO1xuICBcbiAgICAgICAgaWYgKGNsZWFyQXR0cmlidXRlICE9IG5vZGUubm9kZU5hbWUpIHtcbiAgICAgICAgICBpc0Jvb2xlYW5BdHRyaWJ1dGUgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlID0gISF2YWx1ZTtcbiAgICAgICAgfSAgICAgICAgICBcbiAgXG4gICAgICAgIGlmIChub2RlLl9fYXR0cmlidXRlT24pIHsgICAgICAgIFxuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5vZGUuX19hdHRyaWJ1dGVPbjtcbiAgICAgICAgICB2YWx1ZSA9IGNvbXBvbmVudC5fX3ByZXBhcmVBdHRyaWJ1dGVJbihub2RlLCB2YWx1ZSk7XG4gICAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IHRydWU7XG4gICAgICAgICAgY29tcG9uZW50LmF0dHJzW2NhbWVsQXR0cmlidXRlXSA9IHZhbHVlO1xuICAgICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSBmYWxzZTtcbiAgXG4gICAgICAgICAgaWYgKGNvbXBvbmVudC5fX2lzTW91bnRlZCkge1xuICAgICAgICAgICAgY29tcG9uZW50Ll9fYXR0clRyaWdnZXJCeU5hbWUoY2FtZWxBdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNCb29sZWFuQXR0cmlidXRlKSB7XG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IG5vZGUuX19lbGVtZW50O1xuICAgICAgICAgIHZhbHVlPyBlbGVtZW50LnNldEF0dHJpYnV0ZShjYW1lbEF0dHJpYnV0ZSwgJ3RydWUnKTogZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoY2FtZWxBdHRyaWJ1dGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVba2V5XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlIHRoZSBhdHRyaWJ1dGUgdmFsdWUgZm9yIGdldHRpbmdcbiAgICogXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqL1xuICBfX3ByZXBhcmVBdHRyaWJ1dGVJbihub2RlLCB2YWx1ZSkgeyAgICBcbiAgICByZXR1cm4gdXRpbHMuY29weSh2YWx1ZSwgeyBwbGFpbjogdHJ1ZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlIHRoZSBhdHRyaWJ1dGUgdmFsdWUgZm9yIHNlbmRpbmdcbiAgICogXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqL1xuICBfX3ByZXBhcmVBdHRyaWJ1dGVPdXQobm9kZSwgdmFsdWUpIHsgICAgXG4gICAgcmV0dXJuIHV0aWxzLmNvcHkodmFsdWUsIHsgcGxhaW46IHRydWUgfSk7XG4gIH1cblxuICAvKipcbiAgICogQXR0cmlidXRlIG5vZGUgaW5pdGlhbGl6aW5nXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBhdHRyaWJ1dGVPZiAtIGlmIG5vZGUgaXMgbGlua2VkIHdpdGggcGFyZW50IHNjb3BlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZUF0dHJpYnV0ZShub2RlLCBlbCwgYXR0cmlidXRlT2YpIHtcbiAgICBpZiAoIW5vZGUgfHwgc3lzdGVtQXR0cmlidXRlcy5pbmRleE9mKG5vZGUubm9kZU5hbWUpICE9IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoIXRoaXMuX19pbml0aWFsaXplTm9kZShub2RlLCBlbCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZXZlbnROYW1lID0gbm9kZS5ub2RlTmFtZS5yZXBsYWNlKC9eb24tKC4rKS9pLCAnJDEnKTtcbiAgICBsZXQgbm9kZU5hbWUgPSB1dGlscy50b0NhbWVsQ2FzZShub2RlLm5vZGVOYW1lKTtcbiAgICBsZXQgY29tcG9uZW50ID0gYXR0cmlidXRlT2Y/IGF0dHJpYnV0ZU9mOiB0aGlzO1xuXG4gICAgaWYgKGV2ZW50TmFtZSAhPSBub2RlLm5vZGVOYW1lKSB7XG4gICAgICBpZiAobm9kZS5fX2V2ZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZW1pdHRlciA9IG5ldyBBa2lsaS5FdmVudEVtaXR0ZXIoZXZlbnROYW1lLCBub2RlLCBlbCwgY29tcG9uZW50KTtcblxuICAgICAgaWYgKG5vZGUuX19leHByZXNzaW9uKSB7XG4gICAgICAgIGVtaXR0ZXIuYmluZCgoZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBjb21wb25lbnQuX19ldmFsdWF0ZUV2ZW50KG5vZGUsIGVsLCBlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIG5vZGUuX19ldmVudCA9IGVtaXR0ZXI7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKGVtaXR0ZXIpKTtcblxuICAgICAgaWYgKGF0dHJpYnV0ZU9mKSB7XG4gICAgICAgIHRoaXMuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hdHRyc1tub2RlTmFtZV0gPSBlbWl0dGVyO1xuICAgICAgICB0aGlzLl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGF0dHJpYnV0ZU9mKSB7XG4gICAgICBub2RlLl9fYXR0cmlidXRlT24gPSB0aGlzO1xuICAgICAgbm9kZS5fX2F0dHJpYnV0ZU9mID0gY29tcG9uZW50O1xuICAgIH1cbiAgICBcbiAgICBsZXQgY2hlY2sgPSB0aGlzLl9fY29tcGlsaW5nPyB0aGlzLl9fY29tcGlsaW5nLmNoZWNrQ2hhbmdlczogZmFsc2U7XG4gICAgY29tcG9uZW50Ll9fZXZhbHVhdGVOb2RlKG5vZGUsIGNoZWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBub2RlXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemVOb2RlKG5vZGUsIGVsKSB7XG4gICAgaWYgKG5vZGUuX19pbml0aWFsaXplZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgdmFsID0gbm9kZVsobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKT8gJ3ZhbHVlJzogJ25vZGVWYWx1ZSddLnRyaW0oKTtcbiAgICBjb25zdCBoYXNCaW5kaW5nID0gZXZhbHVhdGlvblJlZ2V4LnRlc3QodmFsKTtcbiAgICBjb25zdCBpc0Jvb2xlYW4gPSAvXmJvb2xlYW4tL2kudGVzdChub2RlLm5vZGVOYW1lKTtcbiAgICBjb25zdCBpc0V2ZW50ID0gL15vbi0oLispL2kudGVzdChub2RlLm5vZGVOYW1lKTtcblxuICAgIGlmKCFlbC5fX2FraWxpICYmICFoYXNCaW5kaW5nICYmICFpc0Jvb2xlYW4gJiYgIWlzRXZlbnQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBub2RlLl9faXNFdmVudCA9IGlzRXZlbnQ7XG4gICAgbm9kZS5fX2hhc0JpbmRpbmdzID0gaGFzQmluZGluZztcbiAgICBub2RlLl9faXNCb29sZWFuID0gaXNCb29sZWFuO1xuICAgIG5vZGUuX19leHByZXNzaW9uID0gdmFsO1xuICAgIG5vZGUuX19wcm9wZXJ0aWVzID0ge307XG4gICAgbm9kZS5fX2F0dHJpYnV0ZU9mID0gbnVsbDtcbiAgICBub2RlLl9fYXR0cmlidXRlT24gPSBudWxsO1xuICAgIG5vZGUuX19ldmVudCA9IG51bGw7ICAgIFxuICAgIG5vZGUuX19pbml0aWFsaXplZCA9IHRydWU7XG4gICAgbm9kZS5fX2NvbXBvbmVudCA9IHRoaXM7XG4gICAgbm9kZS5fX2VsZW1lbnQgPSBlbDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWluaXRpYWxpemUgdGhlIG5vZGVcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZWluaXRpYWxpemVOb2RlKG5vZGUsIG9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChub2RlLl9fZXZlbnQpIHtcbiAgICAgIG5vZGUuX19ldmVudC51bmJpbmQoKTtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5fX2hhc0JpbmRpbmdzICYmICFvcHRpb25zLnNhdmVCaW5kaW5ncykge1xuICAgICAgdGhpcy5fX3VuYmluZFBhcmVudHNCeU5vZGVzKG5vZGUpOyAgICAgICAgICBcbiAgICB9XG5cbiAgICBkZWxldGUgbm9kZS5fX2hhc0JpbmRpbmdzO1xuICAgIGRlbGV0ZSBub2RlLl9faXNCb29sZWFuO1xuICAgIGRlbGV0ZSBub2RlLl9faXNFdmVudDtcbiAgICBkZWxldGUgbm9kZS5fX2V4cHJlc3Npb247XG4gICAgZGVsZXRlIG5vZGUuX19wcm9wZXJ0aWVzO1xuICAgIGRlbGV0ZSBub2RlLl9fYXR0cmlidXRlT2Y7XG4gICAgZGVsZXRlIG5vZGUuX19hdHRyaWJ1dGVPbjtcbiAgICBkZWxldGUgbm9kZS5fX2V2ZW50OyAgICBcbiAgICBkZWxldGUgbm9kZS5fX2luaXRpYWxpemVkO1xuICAgIGRlbGV0ZSBub2RlLl9fY29tcG9uZW50O1xuICAgIGRlbGV0ZSBub2RlLl9fZWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcnBvbGF0ZSBhdHRyaWJ1dGVzIG9mIHRoZSBlbGVtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtDb21wb25lbnR9IFthdHRyaWJ1dGVPZj1udWxsXSAtIGlmIG5vZGUgaXMgbGlua2VkIHdpdGggcGFyZW50IHNjb3BlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKGVsLCBhdHRyaWJ1dGVPZiA9IG51bGwpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgYXR0cnMgPSBlbC5hdHRyaWJ1dGVzLCBsID0gYXR0cnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB0aGlzLl9faW5pdGlhbGl6ZUF0dHJpYnV0ZShhdHRyc1tpXSwgZWwsIGF0dHJpYnV0ZU9mKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lIGF0dHJpYnV0ZXMgYXMgcHJveHlcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZWZpbmVBdHRyaWJ1dGVzKCkge1xuICAgIGNvbnN0IGNoYW5nZUF0dHJpYnV0ZSA9IChrZXksIHZhbHVlLCBpc0RlbGV0ZWQgPSBmYWxzZSkgPT4ge1xuICAgICAgaWYgKHRoaXMuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IG5vZGUgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZU5vZGUoa2V5KTtcblxuICAgICAgaWYgKGlzRGVsZXRlZCkge1xuICAgICAgICBub2RlICYmIHRoaXMuX19kZWluaXRpYWxpemVOb2RlKG5vZGUpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgICByZXR1cm4gXG4gICAgICB9XG4gICAgICBlbHNlIGlmICghbm9kZSkge1xuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICAgICAgbm9kZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlTm9kZShrZXkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG5vZGUudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fX2RlaW5pdGlhbGl6ZU5vZGUobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX19pbml0aWFsaXplQXR0cmlidXRlKG5vZGUsIHRoaXMuZWwsIHRoaXMuX19hdHRyaWJ1dGVPZik7XG4gICAgfTtcblxuICAgIHRoaXMuYXR0cnMgPSBuZXcgUHJveHkodGhpcy5fX2F0dHJzLCB7XG4gICAgICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBpZiAoa2V5ID09ICdfX2lzUHJveHknKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICB9LFxuICAgICAgc2V0OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBhdHRyS2V5ID0gdXRpbHMudG9EYXNoQ2FzZShrZXkpO1xuXG4gICAgICAgIGlmICh0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzLmluZGV4T2YoYXR0cktleSkgIT0gLTEpIHtcbiAgICAgICAgICBhdHRyS2V5ID0gYGJvb2xlYW4tJHthdHRyS2V5fWA7XG4gICAgICAgICAgdmFsdWU/IHRoaXMuZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpOiB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICBjaGFuZ2VBdHRyaWJ1dGUoYXR0cktleSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKHZhbHVlKSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBhdHRyS2V5ID0gdXRpbHMudG9EYXNoQ2FzZShrZXkpO1xuICAgICAgICBjaGFuZ2VBdHRyaWJ1dGUoYXR0cktleSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKHZhbHVlKSwgdHJ1ZSk7XG4gICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHByb3h5IHRvIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHBhcmVudHNcbiAgICogQHJldHVybnMge1Byb3h5fVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX29ic2VydmUob2JqLCBwYXJlbnRzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm94eShvYmosIHtcbiAgICAgIGdldDogKHRhcmdldCwga2V5KSA9PiB7IFxuICAgICAgICBpZiAoa2V5ID09IFwiX19pc1Byb3h5XCIpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX3RhcmdldFwiKSB7XG4gICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX2NvbXBvbmVudFwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IFwiX19rZXlzXCIpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50cztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFraWxpLl9fZXZhbHVhdGlvbikgeyAgXG4gICAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tleV0pO1xuICAgICAgICAgIGxldCBub3RCaW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgbGV0IGV2YWx1YXRlZCA9ICF1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpOyBcbiAgICAgICAgICBsZXQgY29tcG9uZW50ID0gdGhpcztcbiAgICAgICAgICBsZXQgZXhjQXJyID0ga2V5cy5zbGljZSgpO1xuXG4gICAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIFNjb3BlKSB7XG4gICAgICAgICAgICBsZXQgcmVhbFRhcmdldCA9IHV0aWxzLmdldE93blByb3BlcnR5VGFyZ2V0KHRhcmdldCwga2V5KTtcbiAgICAgICAgICAgIHJlYWxUYXJnZXQgJiYgKHJlYWxUYXJnZXQgaW5zdGFuY2VvZiBTY29wZSkgJiYgKGNvbXBvbmVudCA9ICByZWFsVGFyZ2V0Ll9fY29tcG9uZW50KTtcbiAgICAgICAgICB9IFxuXG4gICAgICAgICAgaWYgKEFraWxpLl9fd3JhcHBpbmcgJiYga2V5cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZm9yUGFyZW50cyA9IEFraWxpLl9fZXZhbHVhdGlvbi5jb21wb25lbnQucGFyZW50cyhjID0+IGMgaW5zdGFuY2VvZiBBa2lsaS5jb21wb25lbnRzLkZvcik7XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGZvclBhcmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrID0gMCwgYyA9IGtleXMubGVuZ3RoOyBrIDwgYzsgaysrKSB7IFxuICAgICAgICAgICAgICBjb25zdCBmb3JEYXRhID0gZm9yUGFyZW50c1tpXS5kYXRhO1xuICAgICAgICAgICAgICBjb25zdCBkYXRhID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoZXhjQXJyLCBjb21wb25lbnQuX19zY29wZSk7XG5cbiAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgdHlwZW9mIGRhdGEgPT0gJ29iamVjdCcgJiYgZm9yRGF0YSA9PT0gZGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgICAgZXhjQXJyLnBvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gICAgICAgICAgICAgICBcblxuICAgICAgICAgIGlmICghKGtleSBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9ICAgICAgICAgIFxuICAgICAgICAgIGVsc2UgaWYgKCF1dGlscy5nZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQodGFyZ2V0LCBrZXkpKSB7XG4gICAgICAgICAgICBub3RCaW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9fYmluZE5vZGUoQWtpbGkuX19ldmFsdWF0aW9uLmxpc3QsIGNvbXBvbmVudCwga2V5cywgcGFyZW50cywgdGFyZ2V0W2tleV0sIG5vdEJpbmRpbmcsIGV2YWx1YXRlZCk7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgfSxcbiAgICAgIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4geyBcbiAgICAgICAgaWYgKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YWx1ZSA9IEFraWxpLndyYXBGdW5jdGlvbih2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG5cbiAgICAgICAgaWYgKHRoaXMuX19jaGVja0Rpc2FibGVtZW50KGtleXMpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIENIRUNLX0VYSVNURU5DRTogaWYgKHBhcmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxldCB0YXJnZXRQYXJlbnRWYWx1ZSA9IHBhcmVudHMubGVuZ3RoID4gMT8gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMocGFyZW50cy5zbGljZSgwLCAtMSksIHRoaXMuX19zY29wZSk6IHRoaXMuX19zY29wZTtcbiAgICAgICAgICBcbiAgICAgICAgICBmb3IgKGxldCBrIGluIHRhcmdldFBhcmVudFZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIXRhcmdldFBhcmVudFZhbHVlLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGFyZ2V0UGFyZW50VmFsdWVba10gJiYgdGFyZ2V0UGFyZW50VmFsdWVba10uX190YXJnZXQgPT09IHRhcmdldCkge1xuICAgICAgICAgICAgICBicmVhayBDSEVDS19FWElTVEVOQ0U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldFtrZXldID0gdGhpcy5fX25lc3RlZE9ic2VydmUodmFsdWUsIGtleXMpO1xuXG4gICAgICAgIGlmKCF0aGlzLl9faXNSZXNvbHZlZCkge1xuICAgICAgICAgIHRoaXMuX190cmlnZ2VyU3RvcmVBbmRBdHRyKGtleXMpO1xuICAgICAgICB9XG4gICAgICAgXG4gICAgICAgIGlmIChBa2lsaS5fX2lzb2xhdGlvbikgeyBcbiAgICAgICAgICB0aGlzLl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0KHBhcmVudHMsIGtleSwgZmFsc2UpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5fX2lzUmVzb2x2ZWQpIHtcbiAgICAgICAgICB0aGlzLl9fdHJpZ2dlclN0b3JlQW5kQXR0cihrZXlzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuX19pc01vdW50ZWQpIHsgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgdGhpcy5fX2V2YWx1YXRlQnlLZXlzKGtleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgY29uc3Qga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG5cbiAgICAgICAgaWYgKHRoaXMuX19jaGVja0Rpc2FibGVtZW50KGtleXMpKSB7XG4gICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuXG4gICAgICAgIGlmKCF0aGlzLl9faXNSZXNvbHZlZCkge1xuICAgICAgICAgIHRoaXMuX190cmlnZ2VyU3RvcmVBbmRBdHRyKGtleXMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoQWtpbGkuX19pc29sYXRpb24pIHtcbiAgICAgICAgICB0aGlzLl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0KHBhcmVudHMsIGtleSwgdHJ1ZSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLl9faXNSZXNvbHZlZCkge1xuICAgICAgICAgIHRoaXMuX190cmlnZ2VyU3RvcmVBbmRBdHRyKGtleXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fX2V2YWx1YXRlQnlLZXlzKGtleXMsIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgc3RvcmUgYW5kIGF0dHJpYnV0ZXMgY2hhbmdlXG4gICAqL1xuICBfX3RyaWdnZXJTdG9yZUFuZEF0dHIoa2V5cykge1xuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY29uc3QgY3VycmVudEtleXMgPSBrZXlzLnNsaWNlKDAsIGwgLSBpKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRLZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoY3VycmVudEtleXMpO1xuICAgICAgY29uc3QgdmFsID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoY3VycmVudEtleXMsIHRoaXMuX19zY29wZSk7XG5cbiAgICAgIGlmICh0aGlzLl9fc3RvcmVMaW5rc1tjdXJyZW50S2V5U3RyaW5nXSkgeyAgXG4gICAgICAgIHRoaXMuX19zdG9yZVRyaWdnZXJCeUtleXMoY3VycmVudEtleXMsIHZhbCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9fYXR0ckxpbmtzW2N1cnJlbnRLZXlTdHJpbmddKSB7XG4gICAgICAgIHRoaXMuX19hdHRyVHJpZ2dlckJ5S2V5cyhjdXJyZW50S2V5cywgdmFsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGhhc2ggZm9yIHRoZSBrZXlzXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGVLZXlzSGFzaChrZXlzKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuX19zY29wZS5fX25hbWV9LiR7QWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpfWA7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBzdG9yZSBvZiB0aGUgZGlzYWJsZW1lbnQgdHlwZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgXG4gICAqL1xuICBfX2dldERpc2FibGVtZW50VHlwZVN0b3JlKHR5cGUpIHtcbiAgICByZXR1cm4gKHtcbiAgICAgIHByb3h5OiAnX19kaXNhYmxlUHJveHknLFxuICAgICAgc3RvcmU6ICdfX2Rpc2FibGVTdG9yZUtleXMnLFxuICAgICAgYXR0cjogJ19fZGlzYWJsZUF0dHJLZXlzJ1xuICAgIH0pW3R5cGVdO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGUgdGhlIGtleXMgc2V0dGVyXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzICBcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlXSAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGlzYWJsZUtleXMoa2V5cywgdHlwZSA9ICdwcm94eScpIHsgICAgXG4gICAgdGhpc1t0aGlzLl9fZ2V0RGlzYWJsZW1lbnRUeXBlU3RvcmUodHlwZSldW2tleXM/IHRoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKTogJ19fYWxsJ10gPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSB0aGUga2V5cyBzZXR0ZXJcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZV0gICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19lbmFibGVLZXlzKGtleXMsIHR5cGUgPSAncHJveHknKSB7XG4gICAgZGVsZXRlIHRoaXNbdGhpcy5fX2dldERpc2FibGVtZW50VHlwZVN0b3JlKHR5cGUpXVtrZXlzPyB0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyk6ICdfX2FsbCddO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBrZXlzIHNldHRlciBkaXNhYmxlbWFudFxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlXSAgIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NoZWNrRGlzYWJsZW1lbnQoa2V5cywgdHlwZSA9ICdwcm94eScpIHtcbiAgICBjb25zdCBzdG9yZSA9IHRoaXMuX19nZXREaXNhYmxlbWVudFR5cGVTdG9yZSh0eXBlKTtcbiAgICByZXR1cm4gdGhpc1tzdG9yZV0uX19hbGw/IHRydWU6IHRoaXNbc3RvcmVdW3RoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKV07XG4gIH1cblxuICAvKipcbiAgICogU2F2ZSB0aGUgdmFsdWUgdG8gdGhlIHN0b3JlIGJ5IHRoZSBrZXlzXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKiBAcGFyYW0geyp9IHZhbHVlICAgIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3N0b3JlVHJpZ2dlckJ5S2V5cyhrZXlzLCB2YWx1ZSkgeyBcbiAgICBpZiAodGhpcy5fX2NoZWNrRGlzYWJsZW1lbnQoa2V5cywgJ3N0b3JlJykpIHsgICAgICBcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBsaW5rcyA9IHRoaXMuX19zdG9yZUxpbmtzW0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKV07XG5cbiAgICBpZiAoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgdmFsdWUgPSB1dGlscy5jb3B5KHZhbHVlLCB7IHBsYWluOiB0cnVlIH0pO1xuICAgIGNvbnN0IHAgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGlua3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBsaW5rID0gbGlua3NbaV07ICAgXG4gICAgICBcbiAgICAgIGlmICghbGluay5zZXQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHAucHVzaCh0aGlzLl9fc3RvcmVUcmlnZ2VyQnlOYW1lKGxpbmsubmFtZSwgdmFsdWUpKTsgICAgICBcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmUgdGhlIHZhbHVlIHRvIHRoZSBzdG9yZSBieSB0aGUgbmFtZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc3RvcmVUcmlnZ2VyQnlOYW1lKG5hbWUsIHZhbHVlKSB7ICBcbiAgICBzdG9yZS5fX3RhcmdldFtuYW1lXSA9IHZhbHVlO1xuICAgIGxldCBsaW5rcyA9IChBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0gfHwgW10pLmNvbmNhdChBa2lsaS5fX3N0b3JlTGlua3NbJyonXSB8fCBbXSk7XG5cbiAgICBpZiAoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsaW5rcyA9IHV0aWxzLnNvcnQobGlua3MsIFsnZGF0ZSddLCB0cnVlKTtcblxuICAgIHJldHVybiBBa2lsaS5uZXh0VGljaygoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxpbmtzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5rID0gbGlua3NbaV07XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGxpbmsuY29tcG9uZW50O1xuXG4gICAgICAgIGlmIChjb21wb25lbnQgPT09IHRoaXMpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKGxpbmsuZm4pIHtcbiAgICAgICAgICBBa2lsaS51bmlzb2xhdGUoKCkgPT4gbGluay5mbi5jYWxsKGNvbXBvbmVudCwgdmFsdWUsIG5hbWUpKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWxpbmsuZ2V0KSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlS2V5cyhsaW5rLmtleXMsICdzdG9yZScpO1xuICAgICAgICBsZXQgY3VycmVudCA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGxpbmsua2V5cywgY29tcG9uZW50Ll9fc2NvcGUpO1xuICAgICAgICAhdXRpbHMuY29tcGFyZShjdXJyZW50LCB2YWx1ZSkgJiYgY29tcG9uZW50LnNjb3BlLl9fc2V0KGxpbmsua2V5cywgdmFsdWUpOyAgIFxuICAgICAgICBjb21wb25lbnQuX19lbmFibGVLZXlzKGxpbmsua2V5cywgJ3N0b3JlJyk7XG4gICAgICB9ICBcbiAgICB9KTsgICBcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBzdG9yZSBsaW5rIHdpdGggdGhlIHNjb3BlIHByb3BlcnR5XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtvYmhlY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3N0b3JlQnlLZXlzKG5hbWUsIGtleXMsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSB7IGdldDogdHJ1ZSwgc2V0OiB0cnVlLCAuLi5vcHRpb25zIH07XG5cbiAgICBpZiAoIWtleXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgU3RvcmUgbGluayBcIiR7bmFtZX1cIiBtdXN0IGhhdmUgdGhlIHNjb3BlIHByb3BlcnR5IG5hbWVgKTtcbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbnMuZ2V0ICYmICFvcHRpb25zLnNldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBTdG9yZSBsaW5rIFwiJHtuYW1lfVwiIG11c3QgaGF2ZSBhdCBsZWFzdCBcImdldFwiIG9yIFwic2V0XCIgb3B0aW9uIGFzIHRydWVgKTtcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuICAgIFxuICAgIHRoaXMuX19kaXNhYmxlS2V5cyhrZXlzLCAnc3RvcmUnKTtcbiAgICAoc3RvcmUuaGFzT3duUHJvcGVydHkobmFtZSkgfHwgIXV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19zY29wZSkpICYmIHRoaXMuc2NvcGUuX19zZXQoa2V5cywgc3RvcmVbbmFtZV0pO1xuICAgIHRoaXMuX19lbmFibGVLZXlzKGtleXMsICdzdG9yZScpO1xuICAgIGxldCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG4gICAgbGV0IGluZm87XG5cbiAgICBpZiAoIXRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ10pIHtcbiAgICAgIHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ10gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgYXJyID0gdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuXG4gICAgICBpZiAocmVzLmNvbXBvbmVudCA9PT0gdGhpcyAmJiByZXMubmFtZSA9PSBuYW1lICYmIHJlcy5rZXlTdHJpbmcgPT0ga2V5U3RyaW5nKSB7XG4gICAgICAgIHJlcy5zZXQgPSBvcHRpb25zLnNldDtcbiAgICAgICAgcmVzLmdldCA9IG9wdGlvbnMuZ2V0O1xuICAgICAgICByZXMuZGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIUFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSkge1xuICAgICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgaW5mbyA9IHsgY29tcG9uZW50OiB0aGlzLCBuYW1lLCBrZXlzLCBrZXlTdHJpbmcsIGRhdGU6IERhdGUubm93KCksIHNldDogb3B0aW9ucy5zZXQsIGdldDogb3B0aW9ucy5nZXQgfTtcbiAgICB0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddLnB1c2goaW5mbyk7XG4gICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdLnB1c2goaW5mbyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgc3RvcmUgbGluayB3aXRoIHRoZSBmdW5jdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuICAgXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIF9fc3RvcmVCeUZ1bmN0aW9uKG5hbWUsIGZuLCBvcHRpb25zID0ge30pIHsgXG4gICAgbGV0IGNhbGwgPSBvcHRpb25zLmNhbGxPblN0YXJ0ID09PSB1bmRlZmluZWQ/IHN0b3JlLl9fdGFyZ2V0Lmhhc093blByb3BlcnR5KG5hbWUpOiBvcHRpb25zLmNhbGxPblN0YXJ0O1xuXG4gICAgaWYgKCFBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0pIHtcbiAgICAgIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGxldCBsaW5rcyA9IEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYgKHJlcy5jb21wb25lbnQgPT09IHRoaXMgJiYgcmVzLm5hbWUgPT0gbmFtZSAmJiByZXMuZm4gPT09IGZuKSB7XG4gICAgICAgIHJlcy5kYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXS5wdXNoKHsgY29tcG9uZW50OiB0aGlzLCBuYW1lLCBmbiwgZGF0ZTogRGF0ZS5ub3coKSB9KTtcblxuICAgIGlmIChuYW1lID09ICcqJyAmJiBvcHRpb25zLmNhbGxPblN0YXJ0ICE9PSBmYWxzZSkge1xuICAgICAgbGV0IHN0b3JlS2V5cyA9IE9iamVjdC5rZXlzKHN0b3JlLl9fdGFyZ2V0KTtcbiAgICAgIGxldCBwID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gc3RvcmVLZXlzLmxlbmd0aCA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGtleSA9IHN0b3JlS2V5c1tpXTtcbiAgICAgICAgbGV0IHZhbCA9IHN0b3JlLl9fdGFyZ2V0W2tleV07XG4gICAgICAgIHAucHVzaChBa2lsaS51bmlzb2xhdGUoKCkgPT4gZm4uY2FsbCh0aGlzLCB2YWwsIGtleSkpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHApO1xuICAgIH1cblxuICAgIGlmIChjYWxsKSB7XG4gICAgICByZXR1cm4gQWtpbGkudW5pc29sYXRlKCgpID0+IGZuLmNhbGwodGhpcywgc3RvcmVbbmFtZV0pKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBzdG9yZSBsaW5rIHdpdGggdGhlIHNjb3BlIHByb3BlcnR5XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3Vuc3RvcmVCeUtleXMobmFtZSwga2V5cykge1xuICAgIGlmICgha2V5cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgaGF2ZSB0byBwYXNzIHRoZSBzY29wZSBwcm9wZXJ0eSBuYW1lIGZvciBzdG9yZSBsaW5rIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cblxuICAgIGxldCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG4gICAgbGV0IGFyciA9IHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ107XG5cbiAgICBpZiAoIWFyci5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGFycltpXTtcbiAgICAgIGxldCBsaW5rcyA9IEFraWxpLl9fc3RvcmVMaW5rc1tyZXMubmFtZV07XG5cbiAgICAgIGlmIChyZXMuY29tcG9uZW50ICE9PSB0aGlzIHx8IHJlcy5uYW1lICE9IG5hbWUgfHwgcmVzLmtleVN0cmluZyAhPSBrZXlTdHJpbmcpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGFyci5zcGxpY2UoaSwgMSk7XG5cbiAgICAgIGlmICghbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgayA9IGxpbmtzLmxlbmd0aCAtIDE7IGsgPj0gMDsgay0tKSB7XG4gICAgICAgIGxldCBsaW5rID0gbGlua3Nba107XG5cbiAgICAgICAgaWYgKGxpbmsuY29tcG9uZW50ID09PSB0aGlzICYmIGxpbmsua2V5U3RyaW5nID09IGtleVN0cmluZykge1xuICAgICAgICAgIGxpbmtzLnNwbGljZShrLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWxpbmtzLmxlbmd0aCkge1xuICAgICAgICBkZWxldGUgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghYXJyLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ107XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgc3RvcmUgbGluayB3aXRoIHRoZSBmdW5jdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3Vuc3RvcmVCeUZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYgKCFBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV07XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IGxpbmtzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gbGlua3NbaV07XG5cbiAgICAgIGlmIChyZXMuY29tcG9uZW50ID09PSB0aGlzICYmIHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmZuID09PSBmbikge1xuICAgICAgICBsaW5rcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghbGlua3MubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIGFuIGF0dHJpYnV0ZSBldmVudCBieSB0aGUga2V5c1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hdHRyVHJpZ2dlckJ5S2V5cyhrZXlzLCB2YWx1ZSkge1xuICAgIGlmICh0aGlzLl9fY2hlY2tEaXNhYmxlbWVudChrZXlzLCAnYXR0cicpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGxpbmtzID0gdGhpcy5fX2F0dHJMaW5rc1tBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyldO1xuICAgXG4gICAgaWYgKCFsaW5rcyB8fCAhbGlua3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBBa2lsaS5uZXh0VGljaygoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxpbmtzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5rID0gbGlua3NbaV07XG5cbiAgICAgICAgaWYgKGxpbmsuZm4pIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbGluay5zZXQpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgZXYgPSAnb24nICsgdXRpbHMuY2FwaXRhbGl6ZShsaW5rLm5hbWUpO1xuICAgICAgICB0aGlzLmF0dHJzW2V2XSAmJiB0aGlzLmF0dHJzW2V2XS50cmlnZ2VyKHZhbHVlLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgICB9XG4gICAgfSk7ICBcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIGFuIGF0dHJpYnV0ZSBldmVudCBieSB0aGUgbmFtZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYXR0clRyaWdnZXJCeU5hbWUobmFtZSwgdmFsdWUpIHtcbiAgICBsZXQgbGlua3MgPSAodGhpcy5fX2F0dHJMaW5rc1tuYW1lXSB8fCBbXSkuY29uY2F0KHRoaXMuX19hdHRyTGlua3NbJyonXSB8fCBbXSk7XG4gICAgXG4gICAgaWYgKCFsaW5rcyB8fCAhbGlua3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAgXG4gICAgXG4gICAgbGlua3MgPSB1dGlscy5zb3J0KGxpbmtzLCBbJ2RhdGUnXSwgdHJ1ZSk7XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTsgICAgXG5cbiAgICAgIGlmIChsaW5rLmZuKSB7XG4gICAgICAgIEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBsaW5rLmZuLmNhbGwodGhpcywgdmFsdWUsIHV0aWxzLnRvRGFzaENhc2UobmFtZSkpKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmKCFsaW5rLmdldCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdGhpcy5fX2Rpc2FibGVLZXlzKGxpbmsua2V5cywgJ2F0dHInKTtcbiAgICAgIGxldCBjdXJyZW50ID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMobGluay5rZXlzLCB0aGlzLl9fc2NvcGUpO1xuICAgICAgIXV0aWxzLmNvbXBhcmUoY3VycmVudCwgdmFsdWUpICYmIHRoaXMuc2NvcGUuX19zZXQobGluay5rZXlzLCB2YWx1ZSk7XG4gICAgICB0aGlzLl9fZW5hYmxlS2V5cyhsaW5rLmtleXMsICdhdHRyJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBhdHRyaWJ1dGUgbGluayB3aXRoIHRoZSBzY29wZSBwcm9wZXJ0eVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hdHRyQnlLZXlzKG5hbWUsIGtleXMsIG9wdGlvbnMgPSB7fSkgeyAgIFxuICAgIG9wdGlvbnMgPSB7IGdldDogdHJ1ZSwgc2V0OiB0cnVlLCAuLi5vcHRpb25zIH07XG4gICAgbmFtZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKG5hbWUpO1xuXG4gICAgaWYgKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEF0dHJpYnV0ZSBsaW5rIFwiJHtuYW1lfVwiIG11c3QgaGF2ZSB0aGUgc2NvcGUgcHJvcGVydHkgbmFtZWApO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5fX2Rpc2FibGVLZXlzKGtleXMsICdhdHRyJyk7XG4gICAgKHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkobmFtZSkgfHwgIXV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19zY29wZSkpICYmIHRoaXMuc2NvcGUuX19zZXQoa2V5cywgdGhpcy5hdHRyc1tuYW1lXSk7IFxuICAgIHRoaXMuX19lbmFibGVLZXlzKGtleXMsICdhdHRyJyk7XG4gICAgbGV0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcbiAgICBcbiAgICBpZiAoIXRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXSkge1xuICAgICAgdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddID0gW107XG4gICAgfVxuXG4gICAgbGV0IGFyciA9IHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuXG4gICAgICBpZiAocmVzLm5hbWUgPT0gbmFtZSAmJiByZXMua2V5U3RyaW5nID09IGtleVN0cmluZykge1xuICAgICAgICByZXMuZ2V0ID0gb3B0aW9ucy5nZXQ7XG4gICAgICAgIHJlcy5zZXQgPSBvcHRpb25zLnNldDtcbiAgICAgICAgcmVzLmRhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddLnB1c2goeyBuYW1lLCBrZXlzLCBrZXlTdHJpbmcsIGRhdGU6IERhdGUubm93KCksIHNldDogb3B0aW9ucy5zZXQsIGdldDogb3B0aW9ucy5nZXQgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGF0dHJpYnV0ZSBsaW5rIHdpdGggdGhlIGZ1bmN0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkIFxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIF9fYXR0ckJ5RnVuY3Rpb24obmFtZSwgZm4sIG9wdGlvbnMgPSB7fSkgeyAgICBcbiAgICBuYW1lID0gdXRpbHMudG9DYW1lbENhc2UobmFtZSk7XG4gICAgbGV0IGNhbGwgPSBvcHRpb25zLmNhbGxPblN0YXJ0ID09PSB1bmRlZmluZWQ/IHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkobmFtZSk6IG9wdGlvbnMuY2FsbE9uU3RhcnQ7ICAgIFxuXG4gICAgaWYgKCF0aGlzLl9fYXR0ckxpbmtzW25hbWVdKSB7XG4gICAgICB0aGlzLl9fYXR0ckxpbmtzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYgKHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmZuID09PSBmbikge1xuICAgICAgICByZXMuZGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdGhpcy5fX2F0dHJMaW5rc1tuYW1lXS5wdXNoKHsgbmFtZSwgZm4sIGRhdGU6IERhdGUubm93KCkgfSk7XG5cbiAgICBpZiAobmFtZSA9PSAnKicgJiYgb3B0aW9ucy5jYWxsT25TdGFydCAhPT0gZmFsc2UpIHtcbiAgICAgIGxldCBhdHRyc0tleXMgPSBPYmplY3Qua2V5cyh0aGlzLl9fYXR0cnMpLmZpbHRlcihrID0+ICEodGhpcy5fX2F0dHJzW2tdIGluc3RhbmNlb2YgQWtpbGkuRXZlbnRFbWl0dGVyKSk7XG4gICAgICBsZXQgcCA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGF0dHJzS2V5cy5sZW5ndGggOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBhdHRyc0tleXNbaV07XG4gICAgICAgIGxldCB2YWwgPSB0aGlzLl9fYXR0cnNba2V5XTtcbiAgICAgICAgcC5wdXNoKEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBmbi5jYWxsKHRoaXMsIHZhbCwgdXRpbHMudG9EYXNoQ2FzZShrZXkpKSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwocCk7XG4gICAgfVxuICAgIFxuICAgIGlmIChjYWxsKSB7XG4gICAgICByZXR1cm4gQWtpbGkudW5pc29sYXRlKCgpID0+IGZuLmNhbGwodGhpcywgdGhpcy5hdHRyc1tuYW1lXSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGF0dHJpYnV0ZSBsaW5rIHdpdGggdGhlIHNjb3BlIHByb3BlcnR5XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYXR0ckJ5S2V5cyhuYW1lLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBoYXZlIHRvIHBhc3MgdGhlIHNjb3BlIHByb3BlcnR5IG5hbWUgZm9yIGF0dHJpYnV0ZSBsaW5rIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cblxuICAgIGxldCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG4gICAgbGV0IGFyciA9IHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXTtcblxuICAgIGlmICghYXJyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuXG4gICAgICBpZiAocmVzLm5hbWUgIT0gbmFtZSB8fCByZXMua2V5U3RyaW5nICE9IGtleVN0cmluZykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgYXJyLnNwbGljZShpLCAxKTtcbiAgICB9XG5cbiAgICBpZiAoIWFyci5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ107XG4gICAgfVxuICB9XG5cbiAgIC8qKlxuICAgKiBSZW1vdmUgdGhlIGF0dHJpYnV0ZSBsaW5rIHdpdGggdGhlIGZ1bmN0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmF0dHJCeUZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYgKCF0aGlzLl9fYXR0ckxpbmtzW25hbWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYgKHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmZuID09PSBmbikge1xuICAgICAgICBsaW5rcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghbGlua3MubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGtleSBpcyBzeXN0ZW1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pc1N5c3RlbUtleSAoa2V5KSB7XG4gICAgaWYgKGtleSA9PSAnX18nIHx8IChrZXlbMF0gPT0gJ18nICYmIGtleVsxXSA9PSAnXycpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoWydjb25zdHJ1Y3RvciddLmluZGV4T2Yoa2V5KSAhPSAtMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIE5lc3RlZCBvYnNlcnZpbmcgdGhlIHZhbHVlXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gW3N0YXJ0S2V5c11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19uZXN0ZWRPYnNlcnZlICh2YWx1ZSwgc3RhcnRLZXlzKSB7XG4gICAgY29uc3Qgb2JzZXJ2ZSA9ICh2YWx1ZSwgcGFyZW50cykgPT4ge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghdXRpbHMuaXNQbGFpbk9iamVjdCh2YWx1ZSkgJiYgIXV0aWxzLmlzU2NvcGVQcm94eSh2YWx1ZSkgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIFNjb3BlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGxldCB0YXJnZXQgPSB2YWx1ZTtcblxuICAgICAgQ0hFQ0tfUFJPWFk6IGlmICh2YWx1ZS5fX2lzUHJveHkpIHtcbiAgICAgICAgdGFyZ2V0ID0gdmFsdWUuX190YXJnZXQ7XG5cbiAgICAgICAgaWYgKHRoaXMuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nKSB7XG4gICAgICAgICAgYnJlYWsgQ0hFQ0tfUFJPWFk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChcbiAgICAgICAgICB2YWx1ZS5fX2NvbXBvbmVudCAhPT0gdGhpcyB8fFxuICAgICAgICAgIEFraWxpLmpvaW5CaW5kaW5nS2V5cyhwYXJlbnRzKSAhPSBBa2lsaS5qb2luQmluZGluZ0tleXModmFsdWUuX19rZXlzKVxuICAgICAgICApIHtcbiAgICAgICAgICB0YXJnZXQgPSB1dGlscy5jb3B5KHRhcmdldCwgeyBuZXN0ZWQ6IGZhbHNlIH0pO1xuICAgICAgICAgIHZhbHVlID0gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghdGhpcy5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIFNjb3BlKSkge1xuICAgICAgICB0YXJnZXQgPSB1dGlscy5jb3B5KHRhcmdldCwgeyBuZXN0ZWQ6IGZhbHNlIH0gKTsgICAgICAgICAgXG4gICAgICAgIHZhbHVlID0gdGFyZ2V0O1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0YXJnZXRLZXlzID0gT2JqZWN0LmtleXModGFyZ2V0KTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0YXJnZXRLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykgeyAgICBcbiAgICAgICAgY29uc3QgayA9IHRhcmdldEtleXNbaV07XG4gICAgICAgIGNvbnN0IHZhbCA9IHRhcmdldFtrXTsgICAgICAgIFxuICAgICAgICBjb25zdCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrXSk7ICAgXG4gICAgICAgIHRhcmdldFtrXSA9IG9ic2VydmUodmFsLCBrZXlzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF2YWx1ZS5fX2lzUHJveHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19vYnNlcnZlKHZhbHVlLCBwYXJlbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG5cbiAgICByZXR1cm4gb2JzZXJ2ZSh2YWx1ZSwgc3RhcnRLZXlzIHx8IFtdKTtcbiAgfVxuXG4gICAvKipcbiAgICogQ3JlYXRlIGFuIGlzb2xhdGlvbiBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVsZXRlZD1mYWxzZV1cbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0IChwYXJlbnRzLCBrZXksIGlzRGVsZXRlZCA9IGZhbHNlKSB7XG4gICAgY29uc3Qga2V5cyA9IHBhcmVudHMubGVuZ3RoPyBbcGFyZW50c1swXV06IFtrZXldO1xuICAgIGNvbnN0IGlzb2xhdGlvbkhhc2ggPSB0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyk7XG5cbiAgICBpZiAocGFyZW50cy5sZW5ndGgpIHtcbiAgICAgIGlzRGVsZXRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uSGFzaF0pIHtcbiAgICAgIEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbkhhc2hdID0ge1xuICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICAgIGtleXNcbiAgICAgIH07XG4gICAgfVxuXG4gICAgKGlzRGVsZXRlZCAhPT0gdW5kZWZpbmVkKSAmJiAoQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uSGFzaF0uaXNEZWxldGVkID0gaXNEZWxldGVkKTtcbiAgICByZXR1cm4gQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uSGFzaF07XG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSB0aGUgbm9kZSB0byBiaW5kaW5nXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBiaW5kIC0gYnkgZGVmYXVsdCBpcyBjb21wb25lbnQuX19ldmFsdWF0aW9uLmxpc3RcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbbm90QmluZGluZz1mYWxzZV1cbiAgICogQHBhcmFtIHtib29sZWFufSBbZXZhbHVhdGVkPWZhbHNlXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2JpbmROb2RlKGJpbmQsIHJlYWxDb21wb25lbnQsIGtleXMsIHBhcmVudHMsIHZhbHVlLCBub3RCaW5kaW5nID0gZmFsc2UsIGV2YWx1YXRlZCA9IGZhbHNlKSB7XG4gICAgbGV0IHBhcmVudEtleXNTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMocGFyZW50cyk7XG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXM7XG5cbiAgICBpZiAoYmluZC5sZW5ndGggJiYgIW5vdEJpbmRpbmcpIHtcbiAgICAgIGxldCBsID0gYmluZC5sZW5ndGggLSAxO1xuICAgICAgbGV0IGRhdGEgPSBiaW5kW2xdO1xuXG4gICAgICBpZiAoZGF0YS5yZWFsQ29tcG9uZW50ID09PSB0aGlzICYmIGRhdGEua2V5c1N0cmluZyA9PSBwYXJlbnRLZXlzU3RyaW5nKSB7XG4gICAgICAgIGNvbXBvbmVudCA9IGRhdGEuY29tcG9uZW50O1xuICAgICAgfSAgICAgIFxuICAgICAgXG4gICAgICBpZiAoZGF0YS5rZXlzU3RyaW5nID09IHBhcmVudEtleXNTdHJpbmcgJiYgZGF0YS5jb21wb25lbnQgPT09IGNvbXBvbmVudCkge1xuICAgICAgICBiaW5kLnNwbGljZShsLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgYmluZC5wdXNoKHtcbiAgICAgIGNvbXBvbmVudCxcbiAgICAgIHJlYWxDb21wb25lbnQ6IHJlYWxDb21wb25lbnQsXG4gICAgICBrZXlzU3RyaW5nOiBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyksXG4gICAgICBwYXJlbnRzLFxuICAgICAga2V5cyxcbiAgICAgIHZhbHVlLFxuICAgICAgZXZhbHVhdGVkLFxuICAgICAgbm90QmluZGluZ1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBrZXkgaXMgc3lzdGVtIGJpbmRpbmcgdGhpbmdcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi8gXG4gIF9faXNTeXN0ZW1CaW5kaW5nS2V5KGtleSkge1xuICAgIHJldHVybiBrZXkgPT0gJ19fZGF0YSc7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGJpbmRpbmcgYnkga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRCaW5kKGtleXMpIHtcbiAgICByZXR1cm4gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzKSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgbmVzdGVkIGJpbmRpbmdzIGJ5IGtleXNcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqL1xuICBfX2dldEFsbEJpbmRzKGtleXMpIHtcbiAgICBjb25zdCByb290ID0gdGhpcy5fX2dldEJpbmQoa2V5cyk7XG5cbiAgICBpZiAoIXJvb3QpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBsZXQgZGF0YSA9IFtdO1xuXG4gICAgY29uc3QgY29sbGVjdCA9IChvYmopID0+IHtcbiAgICAgIGRhdGEgPSBkYXRhLmNvbmNhdChvYmouX19kYXRhIHx8IFtdKTtcblxuICAgICAgZm9yIChsZXQga2V5IGluIG9iaikge1xuICAgICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrZXkpIHx8IGtleSA9PSAnX19kYXRhJykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29sbGVjdChvYmpba2V5XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29sbGVjdChyb290KTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYmluZGluZyBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRCb3VuZE5vZGUoa2V5cywgbm9kZSkge1xuICAgIGxldCBiaW5kID0gIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncyk7XG5cbiAgICBpZiAoIWJpbmQgfHwgIWJpbmQuX19kYXRhIHx8ICFiaW5kLl9fZGF0YS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYmluZC5fX2RhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgZGF0YSA9IGJpbmQuX19kYXRhW2ldO1xuXG4gICAgICBpZiAoZGF0YS5ub2RlID09PSBub2RlKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgbm9kZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2V2YWx1YXRlZD1mYWxzZV1cbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMsIHZhbHVlLCBldmFsdWF0ZWQgPSBmYWxzZSkge1xuICAgIGxldCBwcm9wID0gdGhpcy5fX2dldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKTsgICAgXG4gICAgbGV0IGNvcHkgPSB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc/IHsgaGFzaDogdXRpbHMuY3JlYXRlT2JqZWN0SGFzaCh2YWx1ZSkgfTogdXRpbHMuY29weSh2YWx1ZSk7XG5cbiAgICBpZiAocHJvcCkge1xuICAgICAgbGV0IHJlcyA9IG5vZGUuX19jb21wb25lbnQuX19jb21wYXJlTm9kZVByb3BlcnR5VmFsdWUocHJvcCwgdmFsdWUpO1xuICAgICAgcHJvcC52YWx1ZSA9IHZhbHVlO1xuICAgICAgcHJvcC5jb3B5ID0gY29weTtcbiAgICAgIHJldHVybiAhcmVzO1xuICAgIH1cbiAgICBcbiAgICBub2RlLl9fcHJvcGVydGllc1t0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyldID0ge1xuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgdmFsdWUsXG4gICAgICBjb3B5LFxuICAgICAgbm9kZSxcbiAgICAgIGtleXMsXG4gICAgICBldmFsdWF0ZWQgIFxuICAgIH07XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5vZGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKSB7XG4gICAgcmV0dXJuIG5vZGUuX19wcm9wZXJ0aWVzW3RoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKV0gfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgdGhlIG5vZGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZWxldGVOb2RlUHJvcGVydHkobm9kZSwga2V5cykge1xuICAgIGxldCBoYXNoID0gYCR7dGhpcy5fX3Njb3BlLl9fbmFtZX0uJHtBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyl9YDtcbiAgICBkZWxldGUgbm9kZS5fX3Byb3BlcnRpZXNbaGFzaF07XG4gIH1cblxuICAvKipcbiAgICogTWFwIG5vZGVzXG4gICAqIFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fbWFwTm9kZXMoZm4sIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSB7IHJvb3RBdHRyczogdHJ1ZSwgYXR0cnM6IHRydWUsIG5vZGU6IHRydWUsIC4uLm9wdGlvbnMgfTtcblxuICAgIGNvbnN0IGZpbmQgPSAoZWwpID0+IHtcbiAgICAgIGlmKCFlbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmKG9wdGlvbnMuYXR0cnMgJiYgKGVsICE9PSB0aGlzLmVsIHx8IG9wdGlvbnMucm9vdEF0dHJzKSkge1xuICAgICAgICBmb3IgKGxldCBrID0gMCwgYXR0cnMgPSBlbC5hdHRyaWJ1dGVzLCBjID0gYXR0cnMubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICAgICAgZm4oYXR0cnNba10pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZWwuY2hpbGROb2Rlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGVsLmNoaWxkTm9kZXNbaV07XG5cbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT0gMykge1xuICAgICAgICAgIG9wdGlvbnMubm9kZSAmJiBmbihub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09IDEgJiYgIW5vZGUuX19ha2lsaSkge1xuICAgICAgICAgIGZpbmQobm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIGZpbmQodGhpcy5lbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBub2Rlc1xuICAgKiBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRBbGxOb2RlcygpIHtcbiAgICBjb25zdCBub2RlcyA9IFtdO1xuICAgIHRoaXMuX19tYXBOb2Rlcyhub2RlID0+IG5vZGVzLnB1c2gobm9kZSkpO1xuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgdGFnXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2FkZFRhZyh0YWcsIG5vZGUpIHtcbiAgICBpZighdGhpcy5fX3RhZ3NbdGFnXSkge1xuICAgICAgdGhpcy5fX3RhZ3NbdGFnXSA9IFtdOyAgICBcbiAgICB9XG5cbiAgICBpZighdGhpcy5fX2hhc1RhZyh0YWcpKSB7XG4gICAgICB0aGlzLl9fdGFnc1t0YWddLnB1c2goeyBub2RlIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgdGFnIGV4aXN0c1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRhZ1xuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIF9faGFzVGFnKHRhZywgbm9kZSkge1xuICAgIGlmKCF0aGlzLl9fdGFnc1t0YWddKSB7XG4gICAgICByZXR1cm4gZmFsc2U7ICAgIFxuICAgIH1cblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLl9fdGFnc1t0YWddLmxlbmd0aDsgaSA8IGw7IGkrKykgeyAgICBcbiAgICAgIGlmKHRoaXMuX190YWdzW3RhZ11baV0ubm9kZSA9PT0gbm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSB0YWdcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YWdcbiAgICogQHBhcmFtIHtOb2RlfSBbbm9kZV1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZW1vdmVUYWcgKHRhZywgbm9kZSkge1xuICAgIGlmKCFub2RlKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX3RhZ3NbdGFnXTtcbiAgICAgIHJldHVybjsgICAgXG4gICAgfVxuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuX190YWdzW3RhZ10ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZih0aGlzLl9fdGFnc1t0YWddW2ldLm5vZGUgPT09IG5vZGUpIHtcbiAgICAgICAgdGhpcy5fX3RhZ3NbdGFnXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKCF0aGlzLl9fdGFnc1t0YWddLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIHRoaXMuX190YWdzW3RhZ107XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgZGF0YSB3aXRoIHRoZSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19iaW5kKGtleXMsIGRhdGEpIHtcbiAgICB1dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MsIChsYXN0LCB2YWx1ZSkgPT4ge1xuICAgICAgbGV0IG9iaiA9IHsgX19kYXRhOiBbXSB9O1xuXG4gICAgICBpZiAoIWxhc3QpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlPyB2YWx1ZTogb2JqO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgICAgIG9iaiA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9iai5fX2RhdGEpIHtcbiAgICAgICAgb2JqLl9fZGF0YSA9IFtdO1xuICAgICAgfVxuXG4gICAgICBvYmouX19kYXRhLnB1c2goZGF0YSk7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCB0aGUga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5iaW5kKGtleXMpIHtcbiAgICBsZXQgYmluZCA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncyk7XG5cbiAgICBpZiAoIWJpbmQgfHwgIWJpbmQuX19kYXRhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBiaW5kLl9fZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBub2RlID0gYmluZC5fX2RhdGFbaV0ubm9kZTtcbiAgICAgIHRoaXMuX19kZWxldGVOb2RlUHJvcGVydHkobm9kZSwga2V5cyk7XG4gICAgfVxuXG4gICAgdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzLCAodmFsdWUpID0+IHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID4gMSkge1xuICAgICAgICB2YWx1ZS5fX2RhdGEgPSBbXTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgZGF0YSBieSBub2Rlc1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGV8Tm9kZVtdfSBub2Rlc1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYmluZEJ5Tm9kZXMobm9kZXMpIHtcbiAgICAhQXJyYXkuaXNBcnJheShub2RlcykgJiYgKG5vZGVzID0gW25vZGVzXSk7XG5cbiAgICBjb25zdCB1bmJpbmQgPSAob2JqKSA9PiB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICAgICAgZm9yIChsZXQgaiA9IDAsIGMgPSBrZXlzLmxlbmd0aDsgaiA8IGM7IGorKykge1xuICAgICAgICBjb25zdCBrID0ga2V5c1tqXTtcbiAgICAgICAgXG4gICAgICAgIGlmIChrID09ICdfX2RhdGEnKSB7XG4gICAgICAgICAgbGV0IGRhdGEgPSBvYmpba10gfHwgW107XG4gICAgICAgICAgbGV0IGwgPSBkYXRhLmxlbmd0aDtcblxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYmluZCA9IGRhdGFbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChub2Rlcy5pbmRleE9mKGJpbmQubm9kZSkgIT0gLTEpIHsgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBkYXRhLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICBsLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFsKSB7XG4gICAgICAgICAgICBkZWxldGUgb2JqW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghdGhpcy5fX2lzU3lzdGVtQmluZGluZ0tleShrKSkge1xuICAgICAgICAgIHVuYmluZChvYmpba10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICB1bmJpbmQodGhpcy5fX2JpbmRpbmdzKTtcbiAgICB0aGlzLl9fY2xlYXJFbXB0eUJpbmRpbmdzKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBwYXJlbnRzIGJpbmRpbmdzIHdpdGggdGhlIG5vZGVzXG4gICAqIFxuICAgKiBAcGFyYW0ge05vZGV8Tm9kZVtdfSBub2Rlc1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYmluZFBhcmVudHNCeU5vZGVzKG5vZGVzKSB7ICAgIFxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLl9fcGFyZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX19wYXJlbnRzW2ldO1xuICAgICAgcGFyZW50ICYmIHBhcmVudC5fX2FraWxpICYmIHBhcmVudC5fX2FraWxpLl9fdW5iaW5kQnlOb2Rlcyhub2Rlcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCBlbXB0eSBiaW5kaW5nc1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gW29ial1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jbGVhckVtcHR5QmluZGluZ3Mob2JqKSB7XG4gICAgY29uc3QgY2xlYXIgPSAob2JqLCBwYXJlbnQsIGtleSkgPT4ge1xuICAgICAgZm9yIChsZXQgayBpbiBvYmopIHtcbiAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2YWwgPSBvYmpba107XG5cbiAgICAgICAgaWYgKGsgPT0gJ19fZGF0YScgJiYgKCF2YWwgfHwgIXZhbC5sZW5ndGgpKSB7XG4gICAgICAgICAgZGVsZXRlIG9ialtrXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghdGhpcy5fX2lzU3lzdGVtQmluZGluZ0tleShrKSkge1xuICAgICAgICAgIGlmICghT2JqZWN0LmtleXMob2JqW2tdKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmpba107XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xlYXIob2JqW2tdLCBvYmosIGspO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIU9iamVjdC5rZXlzKG9iaikubGVuZ3RoICYmIHBhcmVudCkge1xuICAgICAgICBkZWxldGUgcGFyZW50W2tleV07XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNsZWFyKG9iaiB8fCB0aGlzLl9fYmluZGluZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBsaW5rc1xuICAgKiBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jbGVhclN0b3JlTGlua3MoKSB7XG4gICAgY29uc3QgbGlua3MgPSBBa2lsaS5fX3N0b3JlTGlua3M7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gbGlua3MpIHtcbiAgICAgIGNvbnN0IGFyciA9IGxpbmtzW2tleV07XG5cbiAgICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgbGluayA9IGFycltpXTtcbiAgXG4gICAgICAgIGlmIChsaW5rLmNvbXBvbmVudCA9PT0gdGhpcykge1xuICAgICAgICAgIGFyci5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFhcnIubGVuZ3RoKSB7XG4gICAgICAgIGRlbGV0ZSBsaW5rc1trZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIGNoaWxkIGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlbW92ZUNoaWxkcmVuKG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBub2RlcyA9IFtdO1xuXG4gICAgY29uc3QgcmVtb3ZlID0gKGNoaWxkcmVuKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICByZW1vdmUoY2hpbGQuX19ha2lsaS5fX2NoaWxkcmVuKTtcbiAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQoY2hpbGQuX19ha2lsaS5fX3JlbW92ZShvcHRpb25zKSk7XG4gICAgICAgIGktLTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVtb3ZlKHRoaXMuX19jaGlsZHJlbik7XG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgY29tcG9uZW50IHdpdGhvdXQgY2hpbGRyZW4gcmVtb3ZpbmdcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlbW92ZShvcHRpb25zID0ge30pIHsgXG4gICAgbGV0IG5vZGVzID0gW107XG4gICAgdGhpcy5hdHRycy5vblJlbW92ZWQgJiYgdGhpcy5hdHRycy5vblJlbW92ZWQudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7ICAgXG4gICAgbm9kZXMgPSBub2Rlcy5jb25jYXQodGhpcy5fX2RldGFjaCh7IHNhdmVCaW5kaW5nczogdHJ1ZSB9KSk7XG4gICAgbm9kZXMgPSBub2Rlcy5jb25jYXQodGhpcy5fX2VtcHR5KHsgc2F2ZUJpbmRpbmdzOiB0cnVlIH0pKTtcbiAgICB0aGlzLl9fY2xlYXJTdG9yZUxpbmtzKCk7ICAgIFxuICAgIHRoaXMucmVtb3ZlZCgpOyAgICBcbiAgICBBa2lsaS5yZW1vdmVTY29wZSh0aGlzLl9fc2NvcGUuX19uYW1lKTsgICAgXG4gICAgdGhpcy5lbC5yZW1vdmUoKTtcblxuICAgIGlmKCFvcHRpb25zLnNhdmVCaW5kaW5ncykge1xuICAgICAgdGhpcy5fX3VuYmluZFBhcmVudHNCeU5vZGVzKG5vZGVzKTtcbiAgICB9XG5cbiAgICBBa2lsaS5uZXh0VGljaygoKSA9PiB7XG4gICAgICBkZWxldGUgdGhpcy5lbC5fX2FraWxpO1xuICAgICAgdGhpcy5fX2JpbmRpbmdzID0gbnVsbDtcbiAgICAgIHRoaXMuX190YWdzID0gbnVsbDsgICAgXG4gICAgICB0aGlzLl9fZXZhbHVhdGluZ0V2ZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5fX2NvbXBpbGluZyA9IG51bGw7XG4gICAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0gbnVsbDtcbiAgICAgIHRoaXMuX19kaXNhYmxlU3RvcmVLZXlzID0gbnVsbDtcbiAgICAgIHRoaXMuX19kaXNhYmxlQXR0cktleXMgPSBudWxsO1xuICAgICAgdGhpcy5fX2NoaWxkcmVuID0gbnVsbDtcbiAgICAgIHRoaXMuX19wYXJlbnQgPSBudWxsO1xuICAgICAgdGhpcy5fX3BhcmVudHMgPSBudWxsO1xuICAgICAgdGhpcy5fX2F0dHJzID0gbnVsbDtcbiAgICAgIHRoaXMuX19hdHRyTGlua3MgPSBudWxsO1xuICAgICAgdGhpcy5fX3N0b3JlTGlua3MgPSBudWxsO1xuICAgICAgdGhpcy5fX2F0dHJpYnV0ZU9mID0gbnVsbDtcbiAgICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xuICAgICAgdGhpcy5lbCA9IG51bGw7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICAvKipcbiAgICogRGV0YWNoIHRoZSBjb21wb25lbnRcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RldGFjaChvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLl9fcGFyZW50ICYmIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX3NwbGljZUNoaWxkKHRoaXMuZWwpO1xuICAgIGNvbnN0IG5vZGVzID0gW10uc2xpY2UuY2FsbCh0aGlzLmVsLmF0dHJpYnV0ZXMpLmZpbHRlcihub2RlID0+IG5vZGUuX19pbml0aWFsaXplZCk7XG5cbiAgICBpZighb3B0aW9ucy5zYXZlQmluZGluZ3MpIHtcbiAgICAgIHRoaXMuX191bmJpbmRQYXJlbnRzQnlOb2Rlcyhub2Rlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBjb21wb25lbnQgaHRtbFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZW1wdHkob3B0aW9ucyA9IHt9KSB7ICAgIFxuICAgIGNvbnN0IG5vZGVzID0gdGhpcy5fX3JlbW92ZUNoaWxkcmVuKHsgc2F2ZUJpbmRpbmdzOiB0cnVlIH0pO1xuXG4gICAgdGhpcy5fX21hcE5vZGVzKG5vZGUgPT4ge1xuICAgICAgaWYoIW5vZGUuX19pbml0aWFsaXplZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRoaXMuX19kZWluaXRpYWxpemVOb2RlKG5vZGUsIHsgc2F2ZUJpbmRpbmdzOiB0cnVlIH0pOyAgXG4gICAgICBub2Rlcy5wdXNoKG5vZGUpOyAgICBcbiAgICB9LCB7IHJvb3RBdHRyczogZmFsc2UgfSk7XG5cbiAgICBpZighb3B0aW9ucy5zYXZlQmluZGluZ3MpIHtcbiAgICAgIHRoaXMuX191bmJpbmRCeU5vZGVzKG5vZGVzKTtcbiAgICAgIHRoaXMuX191bmJpbmRQYXJlbnRzQnlOb2Rlcyhub2Rlcyk7XG4gICAgfVxuXG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHBhcmVudCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZpbmRBbGw9dHJ1ZV0gLSBnZXQgYXJyYXkgaWYgdHJ1ZVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldFBhcmVudChzZWxlY3RvciA9ICcnLCBmaW5kQWxsID0gZmFsc2UsIGxldmVscyA9IG51bGwpIHtcbiAgICBsZXQgYXJyID0gW107XG4gICAgbGV0IGxldmVsID0gMDtcblxuICAgIGlmICh0eXBlb2YgbGV2ZWxzICE9ICdvYmplY3QnKSB7XG4gICAgICBsZXZlbHMgPSBbbGV2ZWxzXTtcbiAgICB9XG5cbiAgICBjb25zdCBmaW5kID0gKHBhcmVudCkgPT4ge1xuICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWxldmVscyB8fCBsZXZlbHMuaW5kZXhPZihsZXZlbCkgIT0gLTEpIHtcbiAgICAgICAgaWYgKCFzZWxlY3RvciB8fCBwYXJlbnQuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIGlmICghZmluZEFsbCkge1xuICAgICAgICAgICAgYXJyLnB1c2gocGFyZW50Ll9fYWtpbGkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFyci5wdXNoKHBhcmVudC5fX2FraWxpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXZlbCsrO1xuICAgICAgZmluZChwYXJlbnQuX19ha2lsaS5fX3BhcmVudCk7XG4gICAgfTtcblxuICAgIGZpbmQodGhpcy5fX3BhcmVudCk7XG4gICAgcmV0dXJuIGZpbmRBbGw/IGFycjogKGFyclswXSB8fCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2hpbGQgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kQWxsPXRydWVdIC0gZ2V0IGFycmF5IGlmIHRydWVcbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudHxDb21wb25lbnRbXX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRDaGlsZHJlbihzZWxlY3RvciA9ICcnLCBmaW5kQWxsID0gdHJ1ZSwgbGV2ZWxzID0gbnVsbCkge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBsZXQgbGV2ZWwgPSAwO1xuXG4gICAgaWYgKHR5cGVvZiBsZXZlbHMgIT0gJ29iamVjdCcpIHtcbiAgICAgIGxldmVscyA9IFtsZXZlbHNdO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbmQgPSAoY2hpbGRyZW4pID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmICghbGV2ZWxzIHx8IGxldmVscy5pbmRleE9mKGxldmVsKSAhPSAtMSkge1xuICAgICAgICAgIGlmICghc2VsZWN0b3IgfHwgY2hpbGQuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgaWYgKCFmaW5kQWxsKSB7XG4gICAgICAgICAgICAgIGFyci5wdXNoKGNoaWxkLl9fYWtpbGkpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFyci5wdXNoKGNoaWxkLl9fYWtpbGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXZlbCsrO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBmaW5kKGNoaWxkcmVuW2ldLl9fYWtpbGkuX19jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZpbmQodGhpcy5fX2NoaWxkcmVuKTtcbiAgICByZXR1cm4gZmluZEFsbD8gYXJyOiAoYXJyWzBdIHx8IG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBuZWFyZXN0IGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JpZ2h0PWZhbHNlXSAtIGZyb20gdGhlIHJpZ2h0IHNpZGUgaWYgdHJ1ZVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldE5lYXIoc2VsZWN0b3IgPSAnJywgZmluZEFsbCA9IHRydWUsIHJpZ2h0ID0gZmFsc2UpIHtcbiAgICBpZiAoIXRoaXMuX19wYXJlbnQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCBsZXZlbEVsZW1lbnRzID0gdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fY2hpbGRyZW4uc2xpY2UoKTtcbiAgICBsZXQgYXJyID0gW107XG4gICAgcmlnaHQgJiYgbGV2ZWxFbGVtZW50cy5yZXZlcnNlKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxldmVsRWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgZWwgPSBsZXZlbEVsZW1lbnRzW2ldO1xuXG4gICAgICBpZiAoZWwgPT09IHRoaXMuZWwpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmICghc2VsZWN0b3IgfHwgZWwuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBhcnIucHVzaChlbC5fX2FraWxpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhcnIucmV2ZXJzZSgpO1xuXG4gICAgaWYgKCFmaW5kQWxsKSB7XG4gICAgICByZXR1cm4gYXJyLmxlbmd0aD8gYXJyWzBdOiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbGluayB0byB0aGUgc3RvcmVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXXxmdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgc3RvcmUobmFtZSwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5fX2lzTW91bnRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNZXRob2QgXCJzdG9yZVwiIG11c3QgYmUgY2FsbGVkIGFmdGVyIHRoZSBjb21waWxhdGlvbi4gRm9yIGV4YW1wbGUsIGluIFwiY29tcGlsZWRcIiBtZXRob2QuYCk7XG4gICAgfVxuXG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICh0eXBlb2YgbmFtZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhcmdzLnVuc2hpZnQoJyonKTtcbiAgICAgIGhhbmRsZXIgPSBuYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJz8gdGhpcy5fX3N0b3JlQnlGdW5jdGlvbiguLi5hcmdzKTogdGhpcy5fX3N0b3JlQnlLZXlzKC4uLmFyZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGxpbmsgd2l0aCB0aGUgYXR0cmlidXRlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGF0dHIobmFtZSwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5fX2lzTW91bnRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNZXRob2QgXCJhdHRyXCIgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgdGhlIGNvbXBpbGF0aW9uLiBGb3IgZXhhbXBsZSwgaW4gXCJjb21waWxlZFwiIG1ldGhvZC5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYgKHR5cGVvZiBuYW1lID09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFyZ3MudW5zaGlmdCgnKicpO1xuICAgICAgaGFuZGxlciA9IG5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nPyB0aGlzLl9fYXR0ckJ5RnVuY3Rpb24oLi4uYXJncyk6IHRoaXMuX19hdHRyQnlLZXlzKC4uLmFyZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgc3RvcmUgbGlua1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfGZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICB1bnN0b3JlKG5hbWUsIGhhbmRsZXIpIHtcbiAgICBpZiAoIXRoaXMuX19pc01vdW50ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTWV0aG9kIFwidW5zdG9yZVwiIG11c3QgYmUgY2FsbGVkIGFmdGVyIHRoZSBjb21waWxhdGlvbi4gRm9yIGV4YW1wbGUsIGluIFwiY29tcGlsZWRcIiBtZXRob2QuYCk7XG4gICAgfVxuXG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICh0eXBlb2YgbmFtZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhcmdzLnVuc2hpZnQoJyonKTtcbiAgICAgIGhhbmRsZXIgPSBuYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJz8gdGhpcy5fX3Vuc3RvcmVCeUZ1bmN0aW9uKC4uLmFyZ3VtZW50cyk6IHRoaXMuX191bnN0b3JlQnlLZXlzKC4uLmFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBhdHRyaWJ1dGUgbGlua1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfGZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICB1bmF0dHIobmFtZSwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5fX2lzTW91bnRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNZXRob2QgXCJ1bmF0dHJcIiBtdXN0IGJlIGNhbGxlZCBhZnRlciB0aGUgY29tcGlsYXRpb24uIEZvciBleGFtcGxlLCBpbiBcImNvbXBpbGVkXCIgbWV0aG9kLmApO1xuICAgIH1cblxuICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodHlwZW9mIG5hbWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYXJncy51bnNoaWZ0KCcqJyk7XG4gICAgICBoYW5kbGVyID0gbmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbic/IHRoaXMuX191bmF0dHJCeUZ1bmN0aW9uKC4uLmFyZ3VtZW50cyk6IHRoaXMuX191bmF0dHJCeUtleXMoLi4uYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgY29tcG9uZW50IG1hdGNoZXMgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IHNlbGVjdG9yXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgbWF0Y2hlcyhzZWxlY3Rvcikge1xuICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHNlbGVjdG9yKHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmVsLm1hdGNoZXMoc2VsZWN0b3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IHBhcmVudCBjb21wb25lbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIHBhcmVudChzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRQYXJlbnQoc2VsZWN0b3IsIGZhbHNlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBwYXJlbnQgY29tcG9uZW50cyBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBwYXJlbnRzKHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldFBhcmVudChzZWxlY3RvciwgdHJ1ZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBjaGlsZCBjb21wb25lbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIGNoaWxkKHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldENoaWxkcmVuKHNlbGVjdG9yLCBmYWxzZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY2hpbGQgY29tcG9uZW50cyBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBjaGlsZHJlbihzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRDaGlsZHJlbihzZWxlY3RvciwgdHJ1ZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY29tcG9uZW50cyBsZWZ0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgYmVmb3JlKHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIHRydWUsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY29tcG9uZW50cyByaWdodCBmcm9tIHRoZSBjdXJyZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGFmdGVyKHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIHRydWUsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IGNvbXBvbmVudCBsZWZ0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIHByZXYoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgZmFsc2UsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBjb21wb25lbnQgcmlnaHQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgbmV4dChzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCBmYWxzZSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGVsZW1lbnQgcGFyZW50XG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gcGFyZW50XG4gICAqL1xuICBhcHBlbmRUbyhwYXJlbnQpIHsgICBcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHsgc2V0UGFyZW50czogdHJ1ZSwgY2hlY2tDaGFuZ2VzOiBmYWxzZSB9IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbmNlbCBjb21wb25lbnQgY29tcGlsYXRpb25cbiAgICovXG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wYWxlIHRoZSBjb21wb25lbnQsIGJ1dCBjYW5jZWwgdGhlIGNvbXBpbGF0aW9uIGluc2lkZSBvZiBpdFxuICAgKi9cbiAgcHJldmVudCgpIHtcbiAgICB0aGlzLl9fcHJldmVudCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgZWxlbWVudCBodG1sXG4gICAqXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgZW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19lbXB0eS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBlbGVtZW50XG4gICAqXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgcmVtb3ZlKCkge1xuICAgIHJldHVybiB0aGlzLl9fcmVtb3ZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjcmVhdGVkKCkge31cbiAgY29tcGlsZWQoKSB7fVxuICByZWNvbXBpbGVkKCkge31cbiAgcmVzb2x2ZWQoKSB7fVxuICByZW1vdmVkKCkge31cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50LmpzIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXIuanMnXG5cbi8qKlxuICogQW4gb2JqZWN0IHdpdGggYSBsb3Qgb2YgdXNlZnVsIGZ1bmN0aW9uc1xuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3V0aWxzfVxuICovXG5jb25zdCB1dGlscyA9IHt9O1xuXG4vKipcbiAqIENyZWF0ZSBjbGFzcyBhdHRyaWJ1dGUgZnJvbSBhbiBvYmplY3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcInJlZCBhY3RpdmVcIlxuICogdXRpbHMuY2xhc3Moe3JlZDogdHJ1ZSwgYWN0aXZlOiB0cnVlLCBncmVlbjogZmFsc2V9KTtcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5jbGFzcyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBsZXQgY2xhc3NlcyA9IFtdO1xuICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrID0ga2V5c1tpXTtcbiAgICBsZXQgdmFsID0gb2JqW2tdO1xuICAgIHZhbCAmJiBjbGFzc2VzLnB1c2goayk7XG4gIH1cblxuICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBzdHlsZSBhdHRyaWJ1dGUgZnJvbSBhbiBvYmplY3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcImNvbG9yOnJlZDt3aWR0aDoxMHB4XCJcbiAqIHV0aWxzLnN0eWxlKHtjb2xvcjogXCJyZWRcIiwgYmFja2dyb3VuZDogZmFsc2UsIHdpZHRoOiBcIjEwcHhcIn0pO1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnN0eWxlID0gZnVuY3Rpb24ob2JqKSB7XG4gIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgbGV0IHN0eWxlcyA9IFtdO1xuICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrID0ga2V5c1tpXTtcbiAgICBsZXQgdmFsID0gb2JqW2tdO1xuICAgIHZhbCAmJiBzdHlsZXMucHVzaChgJHt0aGlzLnRvRGFzaENhc2Uoayl9OiR7dmFsfWApO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlcy5qb2luKCc7Jyk7XG59O1xuXG4vKipcbiAqIEV4dGVuZGVkIHNwbGl0IG9mIHRoZSBzdHJpbmdcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW1wiSGVsbG9cIiwgXCJXb3JsZFwiXVxuICogdXRpbHMuc3BsaXQoXCJIZWxsbyBXb3JsZFwiLCBcIiBcIik7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsneCA9IDUnLCAnIHkgPSBcIjE7MjszXCInXVxuICogdXRpbHMuc3BsaXQoJ3ggPSA1OyB5ID0gXCIxOzI7M1wiJywgXCI7XCIsIFsnXCInXSk7XG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cH0gc3RyIFxuICogQHBhcmFtIHtzdHJpbmd9IFtkZWxdXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBbZXhjbHVkZV0gXG4gKi9cbnV0aWxzLnNwbGl0ID0gZnVuY3Rpb24oc3RyLCBkZWwgPSAnJywgZXhjbHVkZSA9IFtdKSB7XG5cdGNvbnN0IGV4cHMgPSBbXTsgICAgIFxuICBsZXQgbGFzdCA9ICcnO1xuXG4gIGlmKCFkZWwpIHtcbiAgICByZXR1cm4gc3RyLnNwbGl0KCcnKTtcbiAgfVxuICBlbHNlIGlmKGRlbCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIHJldHVybiBzdHIuc3BsaXQoZGVsKTtcbiAgfVxuICBlbHNlIGlmKHN0ci5pbmRleE9mKGRlbCkgPT0gLTEpIHtcbiAgICBsYXN0ID0gc3RyO1xuICB9XG4gIGVsc2Uge1xuICAgIGNvbnN0IGFyciA9IHN0ci5zcGxpdCgnJyk7XG4gICAgbGV0IG9wZW4gPSAnJzsgXG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHZhbCA9IGFycltpXTtcbiAgICAgIGxldCBpbmRleCA9IGV4Y2x1ZGUuaW5kZXhPZih2YWwpOyAgICAgIFxuXG4gICAgICBpZihpbmRleCA+IC0xICYmICghb3BlbiB8fCBvcGVuID09IHZhbCkpIHtcbiAgICAgICAgIW9wZW4/IG9wZW4gPSBleGNsdWRlW2luZGV4XTogb3BlbiA9ICcnO1xuICAgICAgfVxuXG4gICAgICBpZih2YWwgPT0gZGVsICYmICFvcGVuKSB7XG4gICAgICAgIGV4cHMucHVzaChsYXN0KTtcbiAgICAgICAgbGFzdCA9ICcnO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbGFzdCArPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgbGFzdCAmJiBleHBzLnB1c2gobGFzdCk7XG4gIHJldHVybiBleHBzO1xufVxuXG4vKipcbiAqIEZpbHRlciBhbiBhcnJheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsxLCAxMV1cbiAqIHV0aWxzLmZpbHRlcihbMSwgMiwgMywgMTFdLCAnMScpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMX0sIHt4OiAxMX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxfSwge3g6IDJ9LCB7eDogM30sIHt4OiAxMX1dLCAnMScsICd4Jyk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMX0sIHt4OiAxMX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxfSwge3g6IDJ9LCB7eDogM30sIHt4OiAxMX1dLCAnMScsIFsneCddKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxfSwge3g6IDExfV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IDF9LCB7eDogMn0sIHt4OiAzfSwge3g6IDExfV0sICcxJywgW1sneCddXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoge3k6IDF9fV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IHt5OiAxfX0sIHt4OiB7eTogMn19XSwgJzEnLCBbWyd4JywgJ3knXV0pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6MSwgeTogMn0sIHt4OiAyLCB5OjF9XSBcbiAqIHV0aWxzLmZpbHRlcihbe3g6IDEsIHk6IDJ9LCB7eDogMywgeTogM30sIHt4OiAyLCB5OiAxfV0sICcxJywgWyd4JywgJ3knXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoxLCB5OiAyfSwge3g6IDIsIHk6MX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxLCB5OiAyfSwge3g6IDMsIHk6IDN9LCB7eDogMiwgeTogMX1dLCAnMScsIFtbJ3gnXSwgWyd5J11dKTtcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cHxmdW5jdGlvbn0gaGFuZGxlciAtIHR5cGUgb2YgZmlsdGVyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ1tdfHN0cmluZ30gW2tleXNdIC0gZmlsdGVyIGluIHRoZSBrZXlzIGlmIGFycmF5IGVsZW1lbnRzIGFyZSBvYmplY3RcbiAqIEByZXR1cm5zIHtBcnJheX0gLSByZXR1cm5zIG90aGVyIGFycmF5XG4gKi9cbnV0aWxzLmZpbHRlciA9IGZ1bmN0aW9uIChhcnIsIGhhbmRsZXIsIGtleXMgPSBudWxsKSB7XG4gIGxldCByZXMgPSBbXTtcblxuICBpZiAoa2V5cyAmJiAhQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgIGtleXMgPSBba2V5c107XG4gIH1cblxuICBpZih0eXBlb2YgaGFuZGxlciAhPSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3Qgc3RyID0gaGFuZGxlcj8gKGhhbmRsZXIgKyAnJykudG9Mb3dlckNhc2UoKTogJyc7XG4gICAgaGFuZGxlciA9IHZhbCA9PiAodmFsPyAodmFsICsgJycpLnRvTG93ZXJDYXNlKCk6ICcnKS5tYXRjaChzdHIpO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGl0ZW0gPSBhcnJbaV07XG4gICAgbGV0IGZpbHRlcmVkID0gZmFsc2U7XG5cbiAgICBpZigha2V5cyAmJiBoYW5kbGVyKGl0ZW0pKSB7XG4gICAgICBmaWx0ZXJlZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYoa2V5cykge1xuICAgICAgZm9yKGxldCBrID0gMCwgYyA9IGtleXMubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2tdO1xuICAgICAgICBrZXkgPSBBcnJheS5pc0FycmF5KGtleSk/IGtleTogW2tleV07XG4gICAgICAgIGxldCB2YWwgPSBrZXk/IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5LCBpdGVtKTogaXRlbTtcbiAgICBcbiAgICAgICAgaWYgKGhhbmRsZXIodmFsKSkge1xuICAgICAgICAgIGZpbHRlcmVkID0gdHJ1ZTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZpbHRlcmVkICYmIHJlcy5wdXNoKGl0ZW0pOyAgIFxuICB9XG5cbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogT3JkZXIgYW4gYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMSwgMiwgM11cbiAqIHV0aWxzLnNvcnQoWzMsIDIsIDFdLCB0cnVlKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMywgMiwgMV1cbiAqIHV0aWxzLnNvcnQoWzEsIDIsIDNdLCBmYWxzZSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dXG4gKiB1dGlscy5zb3J0KFt7eDogM30sIHt4OiAyfSwge3g6IDF9XSwgW1sneCddXSwgW3RydWVdKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCBbJ3gnXSwgdHJ1ZSk7XG4gKiB1dGlscy5zb3J0KFt7eDogM30sIHt4OiAyfSwge3g6IDF9XSwgJ3gnKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dLCBbWyd4J11dLCBbZmFsc2VdKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dLCBbJ3gnXSwgZmFsc2UpO1xuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sICd4JywgZmFsc2UpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMSwgeTogM30sIHt4OiAyLCB5OiAxfSwge3g6MiwgeTogMn1dXG4gKiB1dGlscy5zb3J0KFt7eDogMiwgeTogMn0sIHt4OiAyLCB5OiAxfSwge3g6IDIsIHk6IDN9XSwgW1sneCddLCBbJ3knXV0sIFt0cnVlLCB0cnVlXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoge3k6IDF9fSwge3g6IHt5OiAyfX1dXG4gKiB1dGlscy5zb3J0KFt7eDoge3k6IDJ9fSwge3g6IHt5OiAxfX1dLCBbWyd4JywgJ3knXV0sIFt0cnVlXSk7XG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0ge2Jvb2xlYW58QXJyYXlbXXxzdHJpbmdbXXxzdHJpbmd9IFtrZXlzXVxuICogQHBhcmFtIHtib29sZWFufGJvb2xlYW5bXX0gW29yZGVyXSAtIHJldmVyc2Ugb3Igbm90XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbnV0aWxzLnNvcnQgPSBmdW5jdGlvbihhcnIsIGtleXMgPSB0cnVlLCBvcmRlciA9IFtdKSB7XG4gIGFyciA9IGFyci5zbGljZSgpO1xuXG4gIGlmIChrZXlzID09PSB0cnVlKSB7XG4gICAga2V5cyA9IFtdO1xuICAgIG9yZGVyID0gW3RydWVdO1xuICB9XG4gIGVsc2UgaWYgKGtleXMgPT09IGZhbHNlKSB7XG4gICAga2V5cyA9IFtdO1xuICAgIG9yZGVyID0gW2ZhbHNlXTtcbiAgfVxuXG4gIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgIGtleXMgPSBba2V5c107XG4gIH1cblxuICBpZiAoIUFycmF5LmlzQXJyYXkob3JkZXIpKSB7XG4gICAgb3JkZXIgPSBbb3JkZXJdO1xuICB9XG5cbiAgbGV0IGwgPSBrZXlzLmxlbmd0aDtcblxuICBhcnIuc29ydCgoYSwgYikgPT4ge1xuICAgIGxldCBpID0gMDtcblxuICAgIGNvbnN0IGNoZWNrID0gKGEsIGIsIHJldmVyc2UgPSBmYWxzZSkgPT4ge1xuICAgICAgaWYgKGEgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIGEgPSBhLmdldFRpbWUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGIgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIGIgPSBiLmdldFRpbWUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGEgPiBiKSB7XG4gICAgICAgIHJldHVybiByZXZlcnNlPyAtMTogMTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGEgPCBiKSB7XG4gICAgICAgIHJldHVybiByZXZlcnNlPyAxOiAtMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDA7XG4gICAgfTtcblxuICAgIGNvbnN0IG5leHQgPSAoKSA9PiB7XG4gICAgICBpZiAoaSA+PSBsKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuXG4gICAgICBsZXQga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGtleSkpIHtcbiAgICAgICAga2V5ID0gW2tleV07XG4gICAgICB9XG5cbiAgICAgIGxldCBhViA9IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5LCBhKTtcbiAgICAgIGxldCBiViA9IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5LCBiKTtcbiAgICAgIGxldCByZXMgPSBjaGVjayhhViwgYlYsIG9yZGVyW2ldID09PSBmYWxzZSk7XG5cbiAgICAgIGlmIChyZXMgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1cblxuICAgICAgaSsrO1xuICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICB9O1xuXG4gICAgaWYgKCFsKSB7XG4gICAgICByZXR1cm4gY2hlY2soYSwgYiwgb3JkZXJbaV0gPT09IGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dCgpO1xuICB9KTtcblxuICByZXR1cm4gYXJyO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gbmV3IG9iamVjdCB3aXRoIHRoZSBzcGVjaWZpZWQga2V5c1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB7eDogMSwgejogMX1cbiAqIHV0aWxzLmluY2x1ZGVLZXlzKHt4OiAxLCB5OiAxLCB6OiAxfSwgWyd4JywgJ3onXSk7XG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqL1xudXRpbHMuaW5jbHVkZUtleXMgPSBmdW5jdGlvbihvYmosIGtleXMpIHtcbiAgbGV0IG5ld09iaiA9IHt9O1xuICBsZXQgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IG9iaktleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGtleSA9IG9iaktleXNbaV07XG5cbiAgICBpZihrZXlzLmluZGV4T2Yoa2V5KSAhPSAtMSkge1xuICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG4vKipcbiAqIFJldHVybiBuZXcgb2JqZWN0IHdpdGhvdXQgdGhlIHNwZWNpZmllZCBrZXlzXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHt4OiAxLCB6OiAxfVxuICogdXRpbHMuaW5jbHVkZUtleXMoe3g6IDEsIHk6IDEsIHo6IDF9LCBbJ3knXSk7XG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqL1xudXRpbHMuZXhjbHVkZUtleXMgPSBmdW5jdGlvbihvYmosIGtleXMpIHtcbiAgbGV0IG5ld09iaiA9IHt9O1xuICBsZXQgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IG9iaktleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGtleSA9IG9iaktleXNbaV07XG5cbiAgICBpZihrZXlzLmluZGV4T2Yoa2V5KSA9PSAtMSkge1xuICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG4vKipcbiAqIENoZWNrIHRoZSB2YWx1ZSBpcyBjb21wb25lbnQgc2NvcGUgcHJveHkgb2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5pc1Njb3BlUHJveHkgPSBmdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuICEhKHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnICYmIHZhbC5fX2lzUHJveHkpO1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgdmFsdWUgaXMgcGxhaW4gb2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSBvYmpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5pc1BsYWluT2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XG4gIHJldHVybiAhIShvYmogJiYgdHlwZW9mIG9iaiA9PSAnb2JqZWN0JyAmJiAob2JqLmNvbnN0cnVjdG9yID09IE9iamVjdCB8fCBvYmouY29uc3RydWN0b3IgPT0gQXJyYXkpKTtcbn07XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVcbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zXSBcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5jb3B5ID0gZnVuY3Rpb24odmFsdWUsIG9wdGlvbnMgPSB7fSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8ICF2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIG9wdGlvbnMgPSB7IG5lc3RlZDogdHJ1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgcGxhaW46IGZhbHNlLCAuLi5vcHRpb25zIH07XG5cbiAgY29uc3QgbmV4dCA9IChvYmopID0+IHtcbiAgICBpZihvcHRpb25zLnBsYWluICYmICF0aGlzLmlzUGxhaW5PYmplY3Qob2JqKSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBvYmogPSB0aGlzLmlzU2NvcGVQcm94eShvYmopPyBvYmouX190YXJnZXQ6IG9iajtcbiAgICBsZXQga2V5cyA9ICFvcHRpb25zLmVudW1lcmFibGU/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaik6IE9iamVjdC5rZXlzKG9iaik7XG4gICAgbGV0IG5ld09iaiA9IEFycmF5LmlzQXJyYXkob2JqKT8gW106IHt9O1xuICAgIFxuICAgIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgbGV0IHZhbCA9IG9ialtrZXldO1xuICAgICAgdmFsID0gdmFsICYmIHR5cGVvZiB2YWwgPT0gJ29iamVjdCcgJiYgb3B0aW9ucy5uZXN0ZWQ/IG5leHQodmFsKTogdmFsOyAgICAgIFxuICAgICAgXG4gICAgICBpZighb2JqLnByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCB7XG4gICAgICAgICAgLi4uT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSksXG4gICAgICAgICAgdmFsdWU6IHZhbFxuICAgICAgICB9KTtcblxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbmV3T2JqW2tleV0gPSB2YWw7ICBcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3T2JqO1xuICB9XG5cbiAgcmV0dXJuIG5leHQodmFsdWUpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2UgdGhlIHZhbHVlIHRvIGF0dHJpYnV0ZSBhcHByb3ByaWF0ZSBmb3JtYXRcbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBmYWxzZSB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRXZlbnRFbWl0dGVyKSB7XG4gICAgcmV0dXJuICdbb2JqZWN0IEV2ZW50XSc7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZSArICcnO1xufTtcblxuLyoqXG4gKiBDb21wYXJlIHR3byB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0geyp9IGFcbiAqIEBwYXJhbSB7Kn0gYlxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmNvbXBhcmUgPSBmdW5jdGlvbiAoYSwgYiwgb3B0aW9ucyA9IHt9KSB7XG4gIGlmICgoYSBpbnN0YW5jZW9mIERhdGUpICYmIChiIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICByZXR1cm4gYS5nZXRUaW1lKCkgPT09IGIuZ2V0VGltZSgpO1xuICB9XG4gIGVsc2UgaWYgKHR5cGVvZiBhID09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGIgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBhLnRvU3RyaW5nKCkgPT09IGIudG9TdHJpbmcoKTtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiA9PSAnb2JqZWN0Jykge1xuICAgIGlmIChhID09PSBudWxsIHx8IGIgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBhID09PSBiO1xuICAgIH1cblxuICAgIG9wdGlvbnMgPSB7IGVudW1lcmFibGU6IHRydWUsIGlnbm9yZVVuZGVmaW5lZDogdHJ1ZSwgLi4ub3B0aW9ucyB9O1xuXG4gICAgY29uc3QgY2xlYXJVbmRlZmluZWQgPSAodmFsKSA9PiB7XG4gICAgICBsZXQgb2JqID0gQXJyYXkuaXNBcnJheSh2YWwpPyBbXToge307XG4gICAgICBsZXQga2V5cyA9ICFvcHRpb25zLmVudW1lcmFibGU/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKCk6IE9iamVjdC5rZXlzKHZhbCk7XG5cbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgdmFsW2tleV0gIT09IHVuZGVmaW5lZCAmJiAob2JqW2tleV0gPSB2YWxba2V5XSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBpZihvcHRpb25zLmlnbm9yZVVuZGVmaW5lZCkge1xuICAgICAgYSA9IGNsZWFyVW5kZWZpbmVkKGEpO1xuICAgICAgYiA9IGNsZWFyVW5kZWZpbmVkKGIpO1xuICAgIH1cblxuICAgIGxldCBhS2V5cyA9ICFvcHRpb25zLmVudW1lcmFibGU/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKCk6IE9iamVjdC5rZXlzKGEpO1xuICAgIGxldCBiS2V5cyA9ICFvcHRpb25zLmVudW1lcmFibGU/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKCk6IE9iamVjdC5rZXlzKGIpO1xuICAgIFxuICAgIGlmIChhS2V5cy5sZW5ndGggIT0gYktleXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgYSA9IHRoaXMuaXNTY29wZVByb3h5KGEpPyBhLl9fdGFyZ2V0OiBhO1xuICAgIGIgPSB0aGlzLmlzU2NvcGVQcm94eShiKT8gYi5fX3RhcmdldDogYjtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBhS2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGtleSA9IGFLZXlzW2ldO1xuXG4gICAgICBpZiAoIXRoaXMuY29tcGFyZShhW2tleV0sIGJba2V5XSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGEgPT09IGI7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIHN0cmluZyBoYXNoIGZyb20gYW4gb2JqZWN0XG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqL1xudXRpbHMuY3JlYXRlT2JqZWN0SGFzaCA9IGZ1bmN0aW9uKG9iaikge1xuICBsZXQgaGFzaCA9IDA7XG4gIGxldCBzdHIgPSBKU09OLnN0cmluZ2lmeShvYmopO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGNoYXIgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBjaGFyO1xuICAgIGhhc2ggPSBoYXNoICYgaGFzaDsgXG4gIH1cblxuICByZXR1cm4gaGFzaCArICcnO1xufVxuXG4vKipcbiAqIEVuY29kZSBodG1sIGVudGl0aWVzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJ5b3UgJmFtcCBtZVwiXG4gKiB1dGlscy5lbmNvZGVIdG1sRW50aXRpZXMoJ3lvdSAmIG1lJyk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmVuY29kZUh0bWxFbnRpdGllcyA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHZhbHVlO1xuICBlbC50ZXh0Q29udGVudCA9IGh0bWw7XG4gIHZhbHVlID0gZWwuaW5uZXJIVE1MO1xuICBlbC5yZW1vdmUoKTtcbiAgZWwgPSBudWxsO1xuICByZXR1cm4gdmFsdWU7XG59O1xuXG4vKipcbiAqIERlY29kZSBodG1sIGVudGl0aWVzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJ5b3UgJiBtZVwiXG4gKiB1dGlscy5kZWNvZGVIdG1sRW50aXRpZXMoJ3lvdSAmYW1wIG1lJyk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmRlY29kZUh0bWxFbnRpdGllcyA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBsZXQgdmFsdWU7XG4gIGVsLmlubmVySFRNTCA9IGh0bWw7XG4gIHZhbHVlID0gZWwudmFsdWU7XG4gIGVsLnJlbW92ZSgpO1xuICBlbCA9IG51bGw7XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHN0cmluZyBmcm9tIGRhc2ggdG8gY2FtZWwgY2FzZSBmb3JtYXRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy50b0NhbWVsQ2FzZSA9IGZ1bmN0aW9uKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcVysoLikvZywgKG0sIGMpID0+IGMudG9VcHBlckNhc2UoKSk7XG59O1xuXG4vKipcbiAqIENhcGl0YWxpemUgdGhlIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmNhcGl0YWxpemUgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RyaW5nIGZyb20gY2FtZWwgdG8gZGFzaCBjYXNlIGZvcm1hdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnRvRGFzaENhc2UgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIChtLCBjKSA9PiBgLSR7Yy50b0xvd2VyQ2FzZSgpfWApO1xufTtcblxuLyoqXG4gKiBHZXQgbmVzdGVkIG9iamVjdCBwcm9wZXJ0eSBieSBhcnJheSBrZXlzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCkge1xuICBsZXQgY3VycmVudDtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoKG8sIGspID0+IHtcbiAgICBpKys7XG5cbiAgICBpZiAodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBvO1xuICAgIH1cblxuICAgIGlmIChvW2tdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAoaSA9PSBsZW5ndGgpICYmIChjdXJyZW50ID0gb1trXSk7XG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIGN1cnJlbnQ7XG59O1xuXG4vKipcbiAqIENoZWNrIG5lc3RlZCBvYmplY3RzIHRyZWUgaGFzIHByb3BlcnR5IG9yIG5vdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHRydWVcbiAqIHV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaGFzUHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QpIHtcbiAgbGV0IGhhcyA9IGZhbHNlO1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZSgobywgaykgPT4ge1xuICAgIGkrKztcblxuICAgIGlmICh0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuICEhbztcbiAgICB9XG5cbiAgICBpZiAoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAoaSA9PSBsZW5ndGgpICYmIChoYXMgPSBvLmhhc093blByb3BlcnR5KGspKTtcbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gaGFzO1xufTtcblxuLyoqXG4gKiBTZXQgbmVzdGVkIG9iamVjdHMgdHJlZSBwcm9wZXJ0eVxuICogUmV0dXJucyBjaGFuZ2VkIHByb3BlcnR5IG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHt5OiA2fVxuICogdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0sIChsYXN0LCB2YWwpID0+IGxhc3Q/IDY6ICh2YWwgfHwge30pKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLnNldFByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0LCBmbikge1xuICBsZXQgY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoKG8sIGspID0+IHtcbiAgICBpKys7XG5cbiAgICBpZiAodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIG9ba10gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgb1trXSA9IGZuKGkgPT0gbGVuZ3RoLCBvW2tdKTtcbiAgICBjdXJyZW50ID0gbztcbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gY3VycmVudDtcbn07XG5cbi8qKlxuICpcbiAqIERlbGV0ZSBwcm9wZXJ0eSBmcm9tIG5lc3RlZCBvYmplY3RzIHRyZWVcbiAqIFJldHVybnMgZGVsZXRlZCBwcm9wZXJ0eSB2YWx1ZVxuICogWW91IGNhbiBjYW5jZWwgZGVsZXRpbmcgaWYgd2lsbCByZXR1cm4gZmFsc2UgaW4gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0sIHZhbCA9PiB2YWwgIT0gNSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHBhcmFtIHtmdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0LCBmbikge1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCB2YWx1ZTtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKChvLCBrKSA9PiB7XG4gICAgaSsrO1xuXG4gICAgaWYgKHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFvLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgaWYgKGkgPT0gbGVuZ3RoKSB7XG4gICAgICB2YWx1ZSA9IG9ba107XG4gICAgICAoIWZuIHx8IGZuKHZhbHVlKSkgJiYgKGRlbGV0ZSBvW2tdKTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IHRhcmdldCBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5cbnV0aWxzLmdldEVudW1lcmFibGVQcm9wZXJ0eVRhcmdldCA9IGZ1bmN0aW9uKHRhcmdldCwga2V5KSB7XG4gIGNvbnN0IGNoZWNrID0gKG9iaikgPT4ge1xuICAgIGlmIChvYmoucHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBsZXQgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcblxuICAgIGlmICghcHJvdG8pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjaGVjayhwcm90byk7XG4gIH07XG5cbiAgcmV0dXJuIGNoZWNrKHRhcmdldCk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgb3duIHByb3BlcnR5IHRhcmdldCBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG51dGlscy5nZXRPd25Qcm9wZXJ0eVRhcmdldCA9IGZ1bmN0aW9uKHRhcmdldCwga2V5KSB7XG4gIGNvbnN0IGNoZWNrID0gKG9iaikgPT4ge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBsZXQgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcblxuICAgIGlmICghcHJvdG8pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjaGVjayhwcm90byk7XG4gIH07XG5cbiAgcmV0dXJuIGNoZWNrKHRhcmdldCk7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIHJhbmRvbSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmNyZWF0ZVJhbmRvbVN0cmluZyA9IGZ1bmN0aW9uKGxlbmd0aCA9IDE2LCBmbiA9IG51bGwpIHtcbiAgbGV0IHN0ciA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCBsZW5ndGggKyAyKTtcbiAgbGV0IHZhbCA9ICcnO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gc3RyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC42Nikge1xuICAgICAgdmFsICs9IHN0cltpXS50b1VwcGVyQ2FzZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhbCArPSBzdHJbaV07XG4gICAgfVxuICB9XG5cbiAgaWYgKGZuICYmIGZuKHZhbCkpIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVSYW5kb21TdHJpbmcobGVuZ3RoLCBmbik7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXRpbHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzLmpzIiwiaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogUmVxdWVzdCBjbGFzcy5cbiAqIEFuIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgYWxsb3dzIHlvdSB0byBtYWtlIHJlcXVlc3RzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JlcXVlc3RzfVxuICovXG5leHBvcnQgY2xhc3MgUmVxdWVzdCB7XG4gIF9fY2FjaGUgPSB7fTtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbZGVmYXVsdHNdIFxuICAgKi9cbiAgY29uc3RydWN0b3IoYmFzZVVybCwgZGVmYXVsdHMpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSBiYXNlVXJsPyAoYmFzZVVybC5yZXBsYWNlKC9cXC8kLywgJycpICsgJy8nKTogJyc7XG5cbiAgICB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgc3RhdHVzRXJyb3JQYXR0ZXJuOiAvXlteMjNdLyxcbiAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgIC4uLihkZWZhdWx0cyB8fCB7fSlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgcmVxdWVzdCB3aXRoIGFueSBtZXRob2RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBxdWVyeShvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIG9wdGlvbnMgPSB7Li4udGhpcy5kZWZhdWx0cywgLi4uKG9wdGlvbnMgfHwge30pfTsgXG4gICAgICBvcHRpb25zLnVybCA9IHRoaXMuYmFzZVVybD8gYCR7dGhpcy5iYXNlVXJsfSR7b3B0aW9ucy51cmwucmVwbGFjZSgvXlxcLy8sICcnKX1gOiBvcHRpb25zLnVybDsgIFxuICAgICAgb3B0aW9ucy5tZXRob2QgPSBvcHRpb25zLm1ldGhvZCB8fCAnR0VUJztcbiAgICAgIFxuICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOyAgICAgIFxuICAgICAgY29uc3QgYmVmb3JlID0gdGhpcy50cmFuc2Zvcm1CZWZvcmUoeGhyLCBvcHRpb25zKTtcbiAgICAgIHhociA9IGJlZm9yZS54aHI7XG4gICAgICBvcHRpb25zID0gYmVmb3JlLm9wdGlvbnM7XG4gICAgICAodHlwZW9mIG9wdGlvbnMub25TdGFydCA9PSAnZnVuY3Rpb24nKSAmJiBvcHRpb25zLm9uU3RhcnQoeGhyKTsgIFxuICAgICAgb3B0aW9ucy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzIHx8IHt9O1xuICAgICAgXG4gICAgICBpZiAob3B0aW9ucy5qc29uKSB7XG4gICAgICAgIG9wdGlvbnMuanNvbiAhPT0gdHJ1ZSAmJiAob3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5qc29uKSk7XG4gICAgICAgIG9wdGlvbnMuaGVhZGVyc1snY29udGVudC10eXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgIG9wdGlvbnMucmVzcG9uc2VUeXBlID0gb3B0aW9ucy5yZXNwb25zZVR5cGUgfHwgJ2pzb24nO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAob3B0aW9ucy5mb3JtKSB7XG4gICAgICAgIG9wdGlvbnMuYm9keSA9IHRoaXMuY3JlYXRlRm9ybURhdGEob3B0aW9ucy5mb3JtKTtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzWydjb250ZW50LXR5cGUnXSA9ICdtdWx0aXBhcnQvZm9ybS1kYXRhJztcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMucGFyYW1zKSB7XG4gICAgICAgIGxldCBzdHIgPSB0aGlzLnBhcmFtc1RvUXVlcnkob3B0aW9ucy5wYXJhbXMpO1xuICAgICAgICBzdHIgJiYgKG9wdGlvbnMudXJsICs9IFwiP1wiICsgc3RyKTtcbiAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICBsZXQgaGFzaCA9IG51bGw7XG4gICAgICBsZXQgY2FjaGUgPSB0eXBlb2Ygb3B0aW9ucy5jYWNoZSA9PSAnZnVuY3Rpb24nPyBvcHRpb25zLmNhY2hlKG9wdGlvbnMpOiBvcHRpb25zLmNhY2hlO1xuICAgICAgKCF3aW5kb3cuQUtJTElfU1NSICYmICFBa2lsaS5fX2luaXQpICYmIChjYWNoZSA9IHRydWUpO1xuXG4gICAgICBpZihvcHRpb25zLm1ldGhvZC50b1VwcGVyQ2FzZSgpID09ICdHRVQnICYmICghb3B0aW9ucy5ib2R5IHx8IHR5cGVvZiBvcHRpb25zLmJvZHkgPT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGhhc2ggPSB0aGlzLmNyZWF0ZUNhY2hlSGFzaCh7IFxuICAgICAgICAgIHVybDogb3B0aW9ucy51cmwsXG4gICAgICAgICAgbWV0aG9kOiBvcHRpb25zLm1ldGhvZCxcbiAgICAgICAgICB1c2VyOiBvcHRpb25zLnVzZXIsIFxuICAgICAgICAgIHBhc3N3b3JkOiBvcHRpb25zLnBhc3N3b3JkLCBcbiAgICAgICAgICBib2R5OiBvcHRpb25zLmJvZHkgXG4gICAgICAgIH0pOyAgICAgICAgXG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmKGNhY2hlICYmIGhhc2gpIHsgICAgICAgIFxuICAgICAgICBsZXQgX2NhY2hlID0gdGhpcy5nZXRDYWNoZShoYXNoKTtcbiAgICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgICAgIGlmKF9jYWNoZSAmJiAoY2FjaGUgPT09IHRydWUgfHwgbm93IC0gX2NhY2hlLmNyZWF0ZWRBdCA8PSBjYWNoZSkpIHtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0aGlzLnRyYW5zZm9ybUFmdGVyKF9jYWNoZS5yZXN1bHQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB4aHIub3BlbihvcHRpb25zLm1ldGhvZCwgb3B0aW9ucy51cmwsIHRydWUsIG9wdGlvbnMudXNlciwgb3B0aW9ucy5wYXNzd29yZCk7XG5cbiAgICAgIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KCd0aW1lb3V0JykpIHtcbiAgICAgICAgeGhyLnRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnJlc3BvbnNlVHlwZSkge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gb3B0aW9ucy5yZXNwb25zZVR5cGU7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLndpdGhDcmVkZW50aWFscykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gb3B0aW9ucy53aXRoQ3JlZGVudGlhbHM7XG4gICAgICB9XG5cbiAgICAgIGxldCBoZWFkZXJLZXlzID0gT2JqZWN0LmtleXMob3B0aW9ucy5oZWFkZXJzKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBoZWFkZXJLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgayA9IGhlYWRlcktleXNbaV07XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGssIG9wdGlvbnMuaGVhZGVyc1trXSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5vblByb2dyZXNzID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgeGhyLm9ucHJvZ3Jlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9wdGlvbnMub25Qcm9ncmVzcyh4aHIpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgcmVzcG9uc2U6IHhoci5yZXNwb25zZSxcbiAgICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICAgICAgcmVhZHlTdGF0ZTogeGhyLnJlYWR5U3RhdGUsXG4gICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHQsXG4gICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB4aHIud2l0aENyZWRlbnRpYWxzLFxuICAgICAgICAgIHJlc3BvbnNlVHlwZTogeGhyLnJlc3BvbnNlVHlwZSxcbiAgICAgICAgICByZXNwb25zZVRleHQ6IHhoci5yZXNwb25zZVR5cGUgPT0gJ3RleHQnPyB4aHIucmVzcG9uc2VUZXh0OiAnJyxcbiAgICAgICAgICByZXNwb25zZVhNTDogeGhyLnJlc3BvbnNlVHlwZSA9PSAnZG9jdW1lbnQnPyB4aHIucmVzcG9uc2VYTUw6ICcnLFxuICAgICAgICAgIHJlc3BvbnNlVVJMOiB4aHIucmVzcG9uc2VVUkwsXG4gICAgICAgICAgdGltZW91dDogeGhyLnRpbWVvdXQsXG4gICAgICAgICAgaGVhZGVyczogdGhpcy5nZXRIZWFkZXJzKHhociksICAgICAgICAgXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB0aGlzLnRyYW5zZm9ybUFmdGVyKHJlc3VsdCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc3RhdHVzRXJyb3JQYXR0ZXJuICYmICh4aHIuc3RhdHVzICsgJycpLm1hdGNoKG9wdGlvbnMuc3RhdHVzRXJyb3JQYXR0ZXJuKSkge1xuICAgICAgICAgIGxldCBlcnIgPSBuZXcgRXJyb3IoYFJlcXVlc3QgdG8gXCIke29wdGlvbnMudXJsfVwiIHJldHVybnMgZmFpbHVyZSBzdGF0dXMgY29kZSAke3hoci5zdGF0dXN9YCk7XG4gICAgICAgICAgZXJyLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICB9IFxuXG4gICAgICAgIChjYWNoZSB8fCB3aW5kb3cuQUtJTElfU1NSKSAmJiBoYXNoICYmIHRoaXMuY3JlYXRlQ2FjaGUoaGFzaCwgcmVzdWx0KTtcbiAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub250aW1lb3V0ID0gKCkgPT4ge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKGBSZXF1ZXN0IHRvIFwiJHtvcHRpb25zLnVybH1cIiB0aW1lZCBvdXRgKSk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub25lcnJvciA9IHJlamVjdDtcbiAgICAgIHhoci5zZW5kKG9wdGlvbnMuYm9keSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGhlYWRlcnMgb2YgYSBYTUxIdHRwUmVxdWVzdCBpbnN0YW5jZVxuICAgKiBcbiAgICogQHBhcmFtIHtYTUxIdHRwUmVxdWVzdH1cbiAgICovXG4gIGdldEhlYWRlcnMgPSBmdW5jdGlvbih4aHIpIHtcbiAgICBsZXQgaGVhZGVycyA9IHt9O1xuICAgIGxldCBzdHIgPSB4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCk7ICBcbiAgICBsZXQgYXJyID0gc3RyLnNwbGl0KCdcXHUwMDBkXFx1MDAwYScpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbGluZSA9IGFycltpXTtcbiAgICAgIGxldCBpbmRleCA9IGxpbmUuaW5kZXhPZignXFx1MDAzYVxcdTAwMjAnKTtcblxuICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICBsZXQga2V5ID0gbGluZS5zdWJzdHJpbmcoMCwgaW5kZXgpO1xuICAgICAgICBsZXQgdmFsID0gbGluZS5zdWJzdHJpbmcoaW5kZXggKyAyKTtcbiAgICAgICAgaGVhZGVyc1trZXldID0gdmFsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBoZWFkZXJzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjYWNoZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhhc2hcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIGdldENhY2hlKGhhc2gpIHtcbiAgICByZXR1cm4gdGhpcy5fX2NhY2hlW2hhc2hdIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGNhY2hlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGFzaFxuICAgKiBAcGFyYW0ge29iamVjdH0gcmVzdWx0XG4gICAqL1xuICBjcmVhdGVDYWNoZShoYXNoLCByZXN1bHQpIHtcbiAgICB0aGlzLl9fY2FjaGVbaGFzaF0gPSB7IHJlc3VsdCwgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLmdldFRpbWUoKSB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBjYWNoZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhhc2hcbiAgICovXG4gIHJlbW92ZUNhY2hlKGhhc2gpIHtcbiAgICBkZWxldGUgdGhpcy5fX2NhY2hlW2hhc2hdO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGhhc2ggdG8gc2F2ZSBpbiB0aGUgY2FjaGVcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBjcmVhdGVDYWNoZUhhc2goZGF0YSkge1xuICAgIHJldHVybiB1dGlscy5jcmVhdGVPYmplY3RIYXNoKGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgb2JqZWN0IHRvIHF1ZXJ5IHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBwYXJhbXNUb1F1ZXJ5KG9iaikge1xuICAgIGxldCBzZXAgPSAnJic7XG4gICAgbGV0IGVxID0gJz0nO1xuXG4gICAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5tYXAoKGspID0+IHtcbiAgICAgIGxldCBrcyA9IGVuY29kZVVSSUNvbXBvbmVudChrKTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgICBrcyA9IGVuY29kZVVSSUNvbXBvbmVudChrKTtcbiAgICAgICAgcmV0dXJuIG9ialtrXS5tYXAoKHYsIGkpID0+IGtzICsgYFske2l9XWAgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudCh2KSkuam9pbihzZXApO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAob2JqW2tdICYmIHR5cGVvZiBvYmpba10gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGxldCBvcHQgPSBbXTtcbiAgICAgICAgT2JqZWN0LmtleXMob2JqW2tdKS5tYXAoKGtleSkgPT4gb3B0LnB1c2goa3MgKyBgWyR7a2V5fV1gICsgZXEgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tdW2tleV0pKSk7XG4gICAgICAgIHJldHVybiBvcHQuam9pbihzZXApO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBrcyArIGVxICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrXSk7XG4gICAgICB9XG4gICAgfSkuam9pbihzZXApO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgcXVlcnkgc3RyaW5nIHRvIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICBwYXJhbXNGcm9tUXVlcnkoc3RyKSB7XG4gICAgbGV0IHF1ZXJ5ID0ge307XG4gICAgbGV0IGFtcHMgPSBzdHIuc3BsaXQoJyYnKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYW1wcy5sZW5ndGg7IGkgPGw7IGkrKykge1xuICAgICAgbGV0IGVxcyA9ICBhbXBzW2ldLnNwbGl0KCc9Jyk7XG4gICAgICBsZXQga2V5ID0gZGVjb2RlVVJJQ29tcG9uZW50KGVxc1swXSk7XG4gICAgICBsZXQgdmFsID0gZGVjb2RlVVJJQ29tcG9uZW50KGVxc1sxXSk7XG5cbiAgICAgIGlmICgha2V5KSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgICBxdWVyeVtrZXldLnB1c2godmFsKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHF1ZXJ5W2tleV0pIHtcbiAgICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldLCB2YWxdO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHF1ZXJ5W2tleV0gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBtdWx0aXBhcnQgZm9ybSBkYXRhIGZyb20gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICogQHBhcmFtIHtGb3JtRGF0YX0gW2RhdGFdXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbmFtZXNwYWNlXSAgICpcbiAgICogQHJldHVybnMge0Zvcm1EYXRhfVxuICAgKi9cbiAgY3JlYXRlRm9ybURhdGEob2JqLCBkYXRhID0gbnVsbCwgbmFtZXNwYWNlID0gJycpIHtcbiAgICBsZXQgZmQgPSBkYXRhIHx8IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgZm9yIChsZXQgayBpbiBvYmopIHtcbiAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaykgJiYgb2JqW2tdKSB7XG4gICAgICAgIGxldCBrZXkgPSBuYW1lc3BhY2U/IG5hbWVzcGFjZSArICdbJyArIGsgKyAnXSc6IGs7XG5cbiAgICAgICAgaWYgKG9ialtrXSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICBmZC5hcHBlbmQoa2V5LCBvYmpba10udG9JU09TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodXRpbHMuaXNQbGFpbk9iamVjdChvYmpba10pKSB7XG4gICAgICAgICAgdGhpcy5jcmVhdGVGb3JtRGF0YShvYmpba10sIGZkLCBrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGZkLmFwcGVuZChrZXksIG9ialtrXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmQ7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIGRhdGEgYmVmb3JlIGEgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge1hNTEh0dHBSZXF1ZXN0fSB4aHJcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHRyYW5zZm9ybUJlZm9yZSh4aHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4geyB4aHIsIG9wdGlvbnMgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBkYXRhIGFmdGVyIGEgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gcmVzdWx0XG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICB0cmFuc2Zvcm1BZnRlcihyZXN1bHQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ucmVzdWx0LFxuICAgICAgZGF0YTogcmVzdWx0LnJlc3BvbnNlLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgR0VUIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGdldCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ0dFVCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBERUxFVEUgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZGVsZXRlKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnREVMRVRFJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIFBPU1QgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcG9zdCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ1BPU1QnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgUFVUIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHB1dCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ1BVVCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBQQVRDSCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBwYXRjaCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ1BBVENIJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgIC8qKlxuICAgKiAgTWFrZSBIRUFEIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGhlYWQodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdIRUFEJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG59XG5cbmNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCgpO1xuXG4vKipcbiAqIFNldCByb3V0ZXIncyBkZWZhdWx0IHZhcmlhYmxlc1xuICovXG5yZXF1ZXN0LnNldERlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9faW5zdGFuY2VzID0ge307XG4gIHRoaXMuX19jYWNoZSA9IHt9O1xufVxuXG4vKipcbiAqIEFkZCBuZXcgcmVxdWVzdCBpbnN0YW5jZSB0byB0aGUgbWFpbiBzZXJ2aWNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7UmVxdWVzdH0gaW5zdGFuY2VcbiAqL1xucmVxdWVzdC5hZGRJbnN0YW5jZSA9IGZ1bmN0aW9uKG5hbWUsIGluc3RhbmNlKSB7XG4gIHRoaXMuX19pbnN0YW5jZXNbbmFtZV0gPSBpbnN0YW5jZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGluc3RhbmNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucmVxdWVzdC5yZW1vdmVJbnN0YW5jZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZGVsZXRlIHRoaXMuX19pbnN0YW5jZXNbbmFtZV07XG59O1xuXG4vKipcbiAqIERlaW5pdCByb3V0ZXJcbiAqL1xucmVxdWVzdC5kZWluaXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zZXREZWZhdWx0cygpO1xufTtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWVzdCwgJ3VzZScsIHtcbiAgZ2V0OiAoKSA9PiB7XG4gICAgcmV0dXJuIHJlcXVlc3QuX19pbnN0YW5jZXM7XG4gIH1cbn0pO1xuXG5yZXF1ZXN0LlJlcXVlc3QgPSBSZXF1ZXN0O1xuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdDtcbnJlcXVlc3Quc2V0RGVmYXVsdHMoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvcmVxdWVzdC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcblxuLyoqXG4gKiBCYXNlIGNvbXBvbmVudCB0byB3b3JrIHdpdGggdGV4dCBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW5wdXR9XG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc190ZXh0YXJlYX1cbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NvbnRlbnRlZGl0YWJsZX1cbiAqIFxuICogQGF0dHIge3N0cmluZ30gdmFsdWUgLSBhY3R1YWwgdmFsdWVcbiAqIEBhdHRyIHtib29sZWFufSBmb2N1cyAtIHNldCB0aGUgZm9jdXMgb3Igbm90XG4gKiBAYXR0ciB7bnVtYmVyfSBkZWJvdW5jZSAtIGRlYm91bmNlIGRlbGF5XG4gKiBAbWVzc2FnZSB7dm9pZH0gZGVib3VuY2UgLSBzZW50IG9uIHRoZSBkZWJvdW5jZSB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbnB1dH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMudmFsdWVLZXkgPSAndmFsdWUnO1xuICAgIHRoaXMuZGVib3VuY2VJbnRlcnZhbCA9IDUwMDtcbiAgICB0aGlzLmRlYm91bmNlVGltZW91dCA9IG51bGw7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICBpZih0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnb24tZGVib3VuY2UnKSkge1xuICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHsgICAgICAgIFxuICAgICAgICB0aGlzLmRlYm91bmNlVGltZW91dCAmJiBjbGVhclRpbWVvdXQodGhpcy5kZWJvdW5jZVRpbWVvdXQpO1xuICAgICAgICB0aGlzLmRlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuYXR0cnMub25EZWJvdW5jZS50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgICAgICB9LCB0aGlzLmRlYm91bmNlSW50ZXJ2YWwpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5hdHRyKCdmb2N1cycsIHRoaXMuc2V0Rm9jdXMpO1xuICAgIHRoaXMuYXR0cigndmFsdWUnLCB0aGlzLnNldFZhbHVlKTtcbiAgICB0aGlzLmF0dHIoJ2RlYm91bmNlJywgdGhpcy5zZXREZWJvdW5jZSk7XG4gIH1cblxuICByZW1vdmVkKCkge1xuICAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ICYmIGNsZWFyVGltZW91dCh0aGlzLmRlYm91bmNlVGltZW91dCk7XG4gIH1cblxuICBzZXREZWJvdW5jZShpbnRlcnZhbCkge1xuICAgIHRoaXMuZGVib3VuY2VJbnRlcnZhbCA9ICtpbnRlcnZhbDtcbiAgfVxuXG4gIHNldEZvY3VzKHZhbHVlKSB7XG4gICAgdmFsdWU/IHRoaXMuc2V0RWxlbWVudEZvY3VzKCk6IHRoaXMuc2V0RWxlbWVudEJsdXIoKTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgKHRoaXMuZWxbdGhpcy52YWx1ZUtleV0gIT09IHZhbHVlKSAmJiAodGhpcy5lbFt0aGlzLnZhbHVlS2V5XSA9IHZhbHVlID09PSAwPyAnMCc6ICh2YWx1ZSB8fCAnJykpO1xuICB9XG5cbiAgc2V0RWxlbWVudEZvY3VzKCkge1xuICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgfVxuXG4gIHNldEVsZW1lbnRCbHVyKCkge1xuICAgIHRoaXMuZWwuYmx1cigpO1xuICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RleHQuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGxvb3BzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19sb29wc31cbiAqIFxuICogQHRhZyBmb3JcbiAqIEBzZWxlY3RvciBmb3JbaW5dLG9sW2luXSx1bFtpbl0sdGhlYWRbaW5dLHRib2R5W2luXSx0Zm9vdFtpbl1cbiAqIEBhdHRyIHtvYmplY3R8YXJyYXl9IGluIC0gZGF0YSB0byBjcmVhdGUgdGhlIGxvb3BcbiAqIEBtZXNzYWdlIHtvYmplY3R8YXJyYXl9IG91dCAtIHNlbnQgb24gdGhlIGRhdGEgY2hhbmdlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tpbl0nO1xuICBzdGF0aWMgZXZlbnRzID0gWydvdXQnXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnZm9yJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdvbCcsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndWwnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RoZWFkJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0Ym9keScsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGZvb3QnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RyJywgdGhpcy5Mb29wKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2xvb3AnLCB0aGlzLkxvb3ApO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIFxuICAgIHRoaXMuaXRlcmF0b3JzID0gW107XG4gICAgdGhpcy5pdGVyYXRvclJlZiA9IG51bGw7XG4gICAgdGhpcy5pdGVyYXRvck91dGVySFRNTCA9IG51bGw7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgX19wcmVwYXJlQXR0cmlidXRlSW4obm9kZSwgdmFsdWUpIHsgIFxuICAgIGlmKChub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpICYmIG5vZGUubmFtZSA9PSAnaW4nKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLl9fcHJlcGFyZUF0dHJpYnV0ZUluLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfX2NvbXBhcmVOb2RlUHJvcGVydHlWYWx1ZShwcm9wLCB2YWx1ZSkge1xuICAgIGNvbnN0IG5vZGUgPSBwcm9wLm5vZGU7XG5cbiAgICBpZigobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKSAmJiBub2RlLm5hbWUgPT0gJ2luJyAmJiBwcm9wLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gc3VwZXIuX19jb21wYXJlTm9kZVByb3BlcnR5VmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7ICAgIFxuICAgIHRoaXMuY3JlYXRlSXRlcmF0b3IoKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cignaW4nLCB0aGlzLmRyYXcpO1xuICB9XG5cbiAgY3JlYXRlSXRlcmF0b3IoKSB7XG4gICAgbGV0IGVsO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5lbC5jaGlsZHJlbltpXTtcblxuICAgICAgaWYgKGNoaWxkLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50JykgPT0gJ2xvb3AnKSB7XG4gICAgICAgIGVsID0gY2hpbGQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBlbCA9IGNoaWxkO1xuICAgIH1cblxuICAgIGlmICghZWwpIHtcbiAgICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbG9vcCcpOyAgICAgIFxuICAgICAgZWwuaW5uZXJIVE1MID0gdGhpcy5lbC5pbm5lckhUTUw7IFxuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJzsgICAgIFxuICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChlbCk7XG4gICAgfVxuXG4gICAgbGV0IGNvbXBvbmVudE5hbWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpO1xuXG4gICAgaWYgKGNvbXBvbmVudE5hbWUgIT0gJ2xvb3AnKSB7XG4gICAgICBsZXQgY29tcG9uZW50ID0gQWtpbGkuY29tcG9uZW50KGNvbXBvbmVudE5hbWUgfHwgZWwudGFnTmFtZSk7XG5cbiAgICAgIGlmICghY29tcG9uZW50KSB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY29tcG9uZW50JywgJ2xvb3AnKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCEoY29tcG9uZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIEZvcikpIHtcbiAgICAgICAgbGV0IG1hc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsb29wJyk7XG4gICAgICAgIG1hc2suYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICBlbCA9IG1hc2s7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5odG1sID0gZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuaXRlcmF0b3JSZWYgPSBlbC5uZXh0U2libGluZztcbiAgICB0aGlzLml0ZXJhdG9yT3V0ZXJIVE1MID0gZWwub3V0ZXJIVE1MO1xuICAgIGVsLnJlbW92ZSgpO1xuICB9XG5cbiAgY3JlYXRlSXRlcmF0b3JFbGVtZW50KCkge1xuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgZWwuaW5uZXJIVE1MID0gdGhpcy5pdGVyYXRvck91dGVySFRNTDtcbiAgICBlbCA9IGVsLmNvbnRlbnQuZmlyc3RDaGlsZDtcbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBsb29wKGtleSwgdmFsdWUsIGluZGV4KSB7XG4gICAgdGhpcy5fX2luZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5fX2tleSA9IGtleTtcbiAgICB0aGlzLl9fdmFsdWUgPSB2YWx1ZTsgICAgXG4gICAgdGhpcy5fX2NvbXBhcmlzb25WYWx1ZSA9IHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jz8geyBoYXNoOiB1dGlscy5jcmVhdGVPYmplY3RIYXNoKHZhbHVlKSB9OiB1dGlscy5jb3B5KHZhbHVlKTtcblxuICAgIGlmKHRoaXMuaXRlcmF0b3JzLmxlbmd0aCA+IGluZGV4KSB7XG4gICAgICBsZXQgaXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yc1tpbmRleF07XG4gICAgICAgIFxuICAgICAgaWYgKHRoaXMuX19pbmRleCAhPT0gaXRlcmF0b3IuaW5kZXgpIHtcbiAgICAgICAgaXRlcmF0b3Iuc2V0SW5kZXgoKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpdGVyYXRvci5zZXRJbmRleCh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX19rZXkgIT09IGl0ZXJhdG9yLmtleSkge1xuICAgICAgICBpdGVyYXRvci5zZXRLZXkoKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpdGVyYXRvci5zZXRLZXkodHJ1ZSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmICghdXRpbHMuY29tcGFyZSh0aGlzLl9fY29tcGFyaXNvblZhbHVlLCBpdGVyYXRvci5jb21wYXJpc29uVmFsdWUpKSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldFZhbHVlKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaXRlcmF0b3Iuc2V0VmFsdWUodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX19wcm9taXNlcy5wdXNoKEFraWxpLmNvbXBpbGUoaXRlcmF0b3IuZWwsIHsgcmVjb21waWxlOiB7IGNoZWNrQ2hhbmdlczogdHJ1ZSB9IH0pKTtcbiAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICB9XG4gICAgXG4gICAgbGV0IGVsID0gdGhpcy5jcmVhdGVJdGVyYXRvckVsZW1lbnQoKTtcbiAgICBlbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XG4gICAgdGhpcy5lbC5pbnNlcnRCZWZvcmUoZWwsIHRoaXMuaXRlcmF0b3JSZWYpO1xuICAgIHRoaXMuX19wcm9taXNlcy5wdXNoKEFraWxpLmNvbXBpbGUoZWwpKTtcbiAgICB0aGlzLml0ZXJhdG9ycy5wdXNoKGVsLl9fYWtpbGkpO1xuICAgIHJldHVybiBlbC5fX2FraWxpO1xuICB9XG5cbiAgZHJhdyhkYXRhKSB7XG4gICAgaWYgKHR5cGVvZiBkYXRhICE9ICdvYmplY3QnIHx8IGRhdGEgPT09IG51bGwpIHtcbiAgICAgIGlmIChBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgIGNvbnNvbGUud2FybihgXCJGb3JcIiBjb21wb25lbnQgXCJpblwiIGF0dHJpYnV0ZSB2YWx1ZSB0eXBlIG11c3QgYmUgYW4gb2JqZWN0L2FycmF5YCk7ICAgICAgICBcbiAgICAgIH1cblxuICAgICAgZGF0YSA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMuZGF0YSA9IGRhdGE7ICAgXG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBjb25zdCBjaGlsZHJlbiA9IFtdLnNsaWNlLmNhbGwodGhpcy5lbC5jaGlsZHJlbik7IFxuICAgIHRoaXMuaXRlcmF0b3JzLnNvcnQoKGEsIGIpID0+IGNoaWxkcmVuLmluZGV4T2YoYS5lbCkgLSBjaGlsZHJlbi5pbmRleE9mKGIuZWwpKTtcblxuICAgIGNvbnN0IGxvb3AgPSAoa2V5LCB2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBpdGVyYXRvciA9IHRoaXMubG9vcChrZXksIHZhbHVlLCBpbmRleCk7XG4gICAgICBpdGVyYXRvci5pdGVyYXRlKGluZGV4KTtcbiAgICB9O1xuXG4gICAgaWYoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgZm9yIChsZXQgbCA9IGRhdGEubGVuZ3RoOyBpbmRleCA8IGw7IGluZGV4KyspIHtcbiAgICAgICAgbG9vcChpbmRleCwgZGF0YVtpbmRleF0sIGluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpO1xuXG4gICAgICBmb3IgKGxldCBsID0ga2V5cy5sZW5ndGg7IGluZGV4IDwgbDsgaW5kZXgrKykge1xuICAgICAgICBsZXQga2V5ID0ga2V5c1tpbmRleF07XG4gICAgICAgIGxvb3Aoa2V5LCBkYXRhW2tleV0sIGluZGV4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gaW5kZXgsIGwgPSB0aGlzLml0ZXJhdG9ycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBpdGVyYXRvciA9IHRoaXMuaXRlcmF0b3JzW2ldO1xuICAgICAgaXRlcmF0b3IuX19yZW1vdmUoKTtcbiAgICAgIHRoaXMuaXRlcmF0b3JzLnNwbGljZShpLCAxKTtcbiAgICAgIGwtLTtcbiAgICAgIGktLTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwodGhpcy5fX3Byb21pc2VzKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIHRoaXMuYXR0cnMub25PdXQudHJpZ2dlcihkYXRhLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgfSk7ICAgIFxuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBpbml0aWFsIHN0YXRlXG4gICAqL1xuICByZXNldCgpIHtcbiAgICB0aGlzLl9faXRlcmF0b3IgPSBudWxsO1xuICAgIHRoaXMuX19pbmRleCA9IDA7XG4gICAgdGhpcy5fX2tleSA9ICcnO1xuICAgIHRoaXMuX192YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5fX2NvbXBhcmlzb25WYWx1ZSA9IG51bGw7XG4gICAgdGhpcy5fX3Byb21pc2VzID0gW107XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGxvb3BzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19sb29wc31cbiAqIFxuICogQHRhZyBsb29wXG4gKiBAc2VsZWN0b3IgbG9vcCx0clxuICogQGF0dHIgQHNlZSBGb3JcbiAqIEBzY29wZSB7Kn0gbG9vcFZhbHVlIC0gZGF0YSBpdGVtJ3MgdmFsdWUgb2YgdGhlIGN1cnJlbnQgaXRlcmF0aW9uIFxuICogQHNjb3BlIHtzdHJpbmd8bnVtYmVyfSBsb29wS2V5IC0ga2V5IG9mIHRoZSBpdGVyYXRpb25cbiAqIEBzY29wZSB7bnVtYmVyfSBsb29wSW5kZXggLSBpbmRleCBvZiB0aGUgaXRlcmF0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBMb29wIGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmZvciA9IG51bGw7XG4gICAgdGhpcy5odG1sID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgdGhpcy5pc0ZvciA9IHRoaXMuZWwuaGFzQXR0cmlidXRlKCdpbicpO1xuXG4gICAgaWYgKCF0aGlzLmlzRm9yICYmICEodGhpcy5lbC5wYXJlbnROb2RlLl9fYWtpbGkgaW5zdGFuY2VvZiBGb3IpKSB7XG4gICAgICB0aGlzLmNhbmNlbCgpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9faXRlcmF0b3IgPSB0aGlzO1xuICAgIHRoaXMuZm9yID0gdGhpcy5fX3BhcmVudC5fX2FraWxpO1xuICAgIHRoaXMuc2V0SW5kZXgodHJ1ZSk7XG4gICAgdGhpcy5zZXRLZXkodHJ1ZSk7XG4gICAgdGhpcy5zZXRWYWx1ZSh0cnVlKTtcblxuICAgIGlmKHRoaXMuaXNGb3IpIHtcbiAgICAgIHJldHVybiBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgaWYodGhpcy5pc0Zvcikge1xuICAgICAgcmV0dXJuIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgc2V0SW5kZXgodGFyZ2V0KSB7XG4gICAgdGhpcy5pbmRleCA9IHRoaXMuZm9yLl9faW5kZXg7XG4gICAgdGhpcy5zY29wZS5fX3NldCgnbG9vcEluZGV4JywgdGhpcy5pbmRleCwgZmFsc2UsIHRhcmdldCk7XG4gIH1cblxuICBzZXRLZXkodGFyZ2V0KSB7XG4gICAgdGhpcy5rZXkgPSB0aGlzLmZvci5fX2tleTtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wS2V5JywgdGhpcy5rZXksIGZhbHNlLCB0YXJnZXQpO1xuICB9XG5cbiAgc2V0VmFsdWUodGFyZ2V0KSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuZm9yLl9fdmFsdWU7XG4gICAgdGhpcy5zY29wZS5fX3NldCgnbG9vcFZhbHVlJywgdGhpcy52YWx1ZSwgdHJ1ZSwgdGFyZ2V0KTtcbiAgICB0aGlzLmNvbXBhcmlzb25WYWx1ZSA9ICB0aGlzLmZvci5fX2NvbXBhcmlzb25WYWx1ZTtcbiAgfVxuXG4gIGl0ZXJhdGUoKSB7fVxufVxuXG5Gb3IuTG9vcCA9IExvb3A7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZm9yLmpzIiwiaW1wb3J0IEFraWxpIGZyb20gJy4vYWtpbGkuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuXG4vKipcbiAqIFNjb3BlIGNsYXNzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3Njb3BlfVxuICpcbiAqIEFsbCBwcm9wZXJ0aWVzIHN0YXJ0aW5nIHdpdGggX18gYXJlIG5vdCBtb25pdG9yZWQuXG4gKiBZb3UgY2FuIHVzZSB0aGVtIGZvciBpbnRlcm5hbCBtYW5pcHVsYXRpb25zLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29wZSB7XG4gIHN0YXRpYyBuZXN0ZWRXYXRjaGluZztcblxuICBjb25zdHJ1Y3RvcihuYW1lLCBlbCwgY29tcG9uZW50KSB7XG4gICAgdGhpcy5fX25hbWUgPSBuYW1lO1xuICAgIHRoaXMuX19lbCA9IGVsO1xuICAgIHRoaXMuX19jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgZWwuc2V0QXR0cmlidXRlKCdzY29wZScsIG5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBhIHNjb3BlIHZhbHVlXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbc3RyaWN0PWZhbHNlXSAtIHdpdGhvdXQgb2JqZWN0IGNvcHlpbmdcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXQoa2V5cywgdmFsdWUsIHN0cmljdCA9IGZhbHNlLCB0YXJnZXQgPSBmYWxzZSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG4gICAgXG4gICAgQWtpbGkudW5pc29sYXRlKCgpID0+IHtcbiAgICAgIHN0cmljdCAmJiAodGhpcy5fX2NvbXBvbmVudC5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgPSB0cnVlKTtcbiAgICAgIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKGtleXMsIHRhcmdldD8gdGhpcy5fX3RhcmdldDogdGhpcywgKGxhc3QsIHZhbCkgPT4ge1xuICAgICAgICBpZiAoIWxhc3QpIHtcbiAgICAgICAgICByZXR1cm4gdmFsIHx8IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICBzdHJpY3QgJiYgKHRoaXMuX19jb21wb25lbnQuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nID0gZmFsc2UpO1xuICAgIH0pO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Njb3BlLmpzIiwiLyoqXG4gKiBDbGFzcyBmb3Igd29ya2luZyB3aXRoIGV2ZW50cy5cbiAqIEFuIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgYWxsb3dzIHlvdSB0byB0cmlnZ2VyIGN1c3RvbSBqYXZhc2NyaXB0IGV2ZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9ldmVudHN9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIG5vZGUsIGVsLCBjb21wb25lbnQpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5lbCA9IGVsO1xuICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgdGhlIGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSAtIHNlbmRpbmcgZGF0YS4gV2lsbCBiZSBpbiB0aGUgZXZlbnQuZGV0YWlsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgdHJpZ2dlcihkYXRhLCBvcHRpb25zID0ge30sIGZvcmNlID0gZmFsc2UpIHtcbiAgICBpZiAoZm9yY2UgfHwgIXRoaXMuaW5FdmFsdWF0aW5nKCkpIHtcbiAgICAgIHRoaXMuZWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQodGhpcy5uYW1lLCB0aGlzLnByZXBhcmVPcHRpb25zKHsgZGV0YWlsOiBkYXRhLCAgLi4ub3B0aW9ucyB9KSkpO1xuICAgIH0gICBcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaCB0aGUgZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gX0V2ZW50IC0gY2xhc3Mgb2YgdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZGlzcGF0Y2goX0V2ZW50LCBvcHRpb25zID0ge30sIGZvcmNlID0gZmFsc2UpIHtcbiAgICBpZiAoZm9yY2UgfHwgIXRoaXMuaW5FdmFsdWF0aW5nKCkpIHtcbiAgICAgIHRoaXMuZWwuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50KHRoaXMubmFtZSwgdGhpcy5wcmVwYXJlT3B0aW9ucyhvcHRpb25zKSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwZXJlIGFuIGV2ZW50IG9wdGlvbnNcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gXG4gICAqL1xuICBwcmVwYXJlT3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0geyBidWJibGVzOiB0cnVlLCAuLi5vcHRpb25zIH07IFxuICAgIHRoaXMubm9kZS5fX2NvbXBvbmVudC5fX3ByZXBhcmVBdHRyaWJ1dGVPdXQodGhpcy5ub2RlLCBvcHRpb25zLmRldGFpbCk7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgZXZlbnQgY2FsbGJhY2sgZG9lc24ndCBydW4gcmVjdXJzaXZlXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaW5FdmFsdWF0aW5nKCkge1xuICAgIGxldCBkYXRhID0gdGhpcy5jb21wb25lbnQuX19ldmFsdWF0aW5nRXZlbnQ7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YS5lbCA9PT0gdGhpcy5lbCAmJiBkYXRhLmV2ZW50LnR5cGUgPT09IHRoaXMubmFtZSAmJiBkYXRhLmNvbXBvbmVudCA9PT0gdGhpcy5jb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogQmluZCB0aGUgZnVuY3Rpb25cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICovXG4gIGJpbmQoZm4pIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5uYW1lLCB0aGlzLmZuID0gZm4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCB0aGUgZnVuY3Rpb25cbiAgICovXG4gIHVuYmluZCgpIHtcbiAgICB0aGlzLmZuICYmIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMuZm4pO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBTdG9yZSBhbGxvd3MgeW91IHRvIHNhdmUgYW5kIGRpc3RyaWJ1dGUgZGF0YS5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9zdG9yZX1cbiAqL1xuY29uc3Qgc3RvcmUgPSBuZXcgUHJveHkoe30sIHtcbiAgZ2V0OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICBpZiAoa2V5ID09IFwiX190YXJnZXRcIikge1xuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gIH0sXG4gIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgIGlmKHV0aWxzLmNvbXBhcmUodGFyZ2V0W2tleV0sIHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxuICAgIHZhbHVlID0gdXRpbHMuY29weSh2YWx1ZSwgeyBwbGFpbjogdHJ1ZSB9KTtcbiAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgIEFraWxpLnJvb3QgJiYgQWtpbGkucm9vdC5fX3N0b3JlVHJpZ2dlckJ5TmFtZShrZXksIHZhbHVlKTsgICAgXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICBBa2lsaS5yb290ICYmIEFraWxpLnJvb3QuX19zdG9yZVRyaWdnZXJCeU5hbWUoa2V5LCB1bmRlZmluZWQpO1xuICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2aWNlcy9zdG9yZS5qcyIsImltcG9ydCBBa2lsaSBmcm9tICcuL2FraWxpLmpzJztcblxuLyoqXG4gKiBHbG9iYWxzIHRvIHVzZSB0aGUgY3VzdG9tIHZhcmlhYmxlcyBpbiBzY29wZSBleHByZXNzaW9uc1xuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3Njb3BlI2RvY3NfZ2xvYmFsc31cbiAqL1xuY29uc3QgZ2xvYmFscyA9IG5ldyBQcm94eSh7fSwge1xuICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHsgICAgXG4gICAgdGFyZ2V0W2tleV0gPSBBa2lsaS53cmFwKHZhbHVlLCB7IHRhZzogYGdsb2JhbHMuJHtrZXl9YCB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgZGVsZXRlUHJvcGVydHk6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgIEFraWxpLnJlbW92ZVRhZyhgZ2xvYmFscy4ke2tleX1gKTtcbiAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBnbG9iYWxzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nbG9iYWxzLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggcm91dGVyIHRlbXBsYXRlcy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3NfdGVtcGxhdGVzfVxuICogXG4gKiBAdGFnIHJvdXRlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JvdXRlJywgdGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7VHJhbnNpdGlvbn0gdHJhbnNpdGlvblxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvYWRcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBzZXRUcmFuc2l0aW9uKHRyYW5zaXRpb24sIGxvYWQgPSB0cnVlKSB7XG4gICAgbGV0IHN0YXRlID0gdHJhbnNpdGlvbi5wYXRoLnN0YXRlO1xuXG4gICAgY29uc3QgZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uID0gKHBhdGgpID0+IHtcbiAgICAgIGlmIChwYXRoLnBhcmVudCkge1xuICAgICAgICBpZiAocGF0aC5wYXJlbnQuY29tcG9uZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHBhdGgucGFyZW50LmNvbXBvbmVudC5fX3Njb3BlLl9fdHJhbnNpdGlvbi5wYXRoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldFBhcmVudFNjb3BlVHJhbnNpdGlvbihwYXRoLnBhcmVudCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBpbGUgPSAoaHRtbCkgPT4geyBcbiAgICAgIHRoaXMuZW1wdHkoKTsgIFxuICAgICAgbGV0IG5hbWUgPSAnY29tcG9uZW50JztcblxuICAgICAgaWYoc3RhdGUuY29tcG9uZW50KSB7XG4gICAgICAgIGxldCBleGlzdHMgPSBmYWxzZTtcbiAgICBcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gQWtpbGkuX19jb21wb25lbnRzKSB7XG4gICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gQWtpbGkuX19jb21wb25lbnRzW2tleV07XG4gICAgXG4gICAgICAgICAgaWYoY29tcG9uZW50ID09PSBzdGF0ZS5jb21wb25lbnQpIHtcbiAgICAgICAgICAgIG5hbWUgPSBrZXk7ICAgICAgICAgICAgXG4gICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGlmKCFleGlzdHMpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBcIiR7c3RhdGUubmFtZX1cIiBoYXMgbm8gZGVmaW5lZCBjb21wb25lbnRgKVxuICAgICAgICB9IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9IGA8JHsgbmFtZSB9PiR7IGh0bWwgfTwvJHsgbmFtZSB9PmA7XG4gICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl9fc2NvcGUuX190cmFuc2l0aW9uID0geyAgXG4gICAgICBwYXJlbnQ6IGdldFBhcmVudFNjb3BlVHJhbnNpdGlvbih0cmFuc2l0aW9uLnBhdGgpLCAgIFxuICAgICAgc3RhdGU6IHRyYW5zaXRpb24ucGF0aC5zdGF0ZSxcbiAgICAgIGRhdGE6IHRyYW5zaXRpb24ucGF0aC5kYXRhLFxuICAgICAgdXJsOiB0cmFuc2l0aW9uLnBhdGgudXJsLFxuICAgICAgcGFyYW1zOiB0cmFuc2l0aW9uLnBhdGgucGFyYW1zLFxuICAgICAgcXVlcnk6IHRyYW5zaXRpb24ucGF0aC5xdWVyeSxcbiAgICAgIGhhc2g6IHRyYW5zaXRpb24ucGF0aC5oYXNoXG4gICAgfTtcblxuICAgIGlmICghbG9hZCkge1xuICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHsgY2hlY2tDaGFuZ2VzOiB0cnVlIH0gfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKHN0YXRlLnRlbXBsYXRlKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS50ZW1wbGF0ZTtcbiAgICAgIH1cbiAgXG4gICAgICBpZiAoc3RhdGUudGVtcGxhdGVVcmwpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QuZ2V0KHN0YXRlLnRlbXBsYXRlVXJsKS50aGVuKHJlcyA9PiByZXMuZGF0YSk7XG4gICAgICB9XG4gICAgfSkudGhlbihodG1sID0+IGNvbXBpbGUoaHRtbCkpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvcm91dGUuanMiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vcmVxdWVzdC5qcyc7XG5pbXBvcnQgUm91dGUgZnJvbSAnLi4vY29tcG9uZW50cy9yb3V0ZS5qcyc7XG5cbi8qKlxuICogVHJhbnNpdGlvbiBjbGFzcy5cbiAqIEFuIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgY29uc2lzdHMgdGhlIGxhc3QgYWN0dWFsIHJvdXRlciB0cmFuc2l0aW9uIGluZm9ybWF0aW9uLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmcjZG9jc190cmFuc2l0aW9ufVxuICovXG5leHBvcnQgY2xhc3MgVHJhbnNpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHVybCwgcHJldmlvdXMgPSBudWxsKSB7ICBcbiAgICB0aGlzLnVybCA9IHVybDsgIFxuICAgIHRoaXMucHJldmlvdXMgPSBwcmV2aW91cztcbiAgICB0aGlzLnBhdGggPSBudWxsO1xuICAgIHRoaXMucm91dGVzID0gW107XG4gICAgdGhpcy5zdGF0ZXMgPSB7fTtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2ZpbmlzZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWRpcmVjdCB0byBhbm90aGVyIHN0YXRlXG4gICAqIFxuICAgKiBAc2VlIHJvdXRlci5zdGF0ZVxuICAgKi9cbiAgcmVkaXJlY3Qoc3RhdGUsIHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gdW5kZWZpbmVkLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0geyAuLi5yb3V0ZXIudHJhbnNpdGlvbi5wYXRoLm9wdGlvbnMsIC4uLm9wdGlvbnMgfTtcbiAgICB0aGlzLmNhbmNlbCgpOyAgIFxuICAgIHJldHVybiByb3V0ZXIuc3RhdGUuY2FsbChyb3V0ZXIsIHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWxvYWQgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICogXG4gICAqIEBzZWUgVHJhbnNpdGlvbi5wcm90b3R5cGUucmVkaXJlY3RcbiAgICovXG4gIHJlbG9hZChwYXJhbXMgPSB7fSwgcXVlcnkgPSB7fSwgaGFzaCA9IHVuZGVmaW5lZCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcGFyYW1zID0geyAuLi50aGlzLnBhdGgucGFyYW1zLCAuLi5wYXJhbXMgfTtcbiAgICBxdWVyeSA9IHsgLi4udGhpcy5wYXRoLnF1ZXJ5LCAuLi5xdWVyeSB9O1xuICAgIGhhc2ggPSBoYXNoID09PSB1bmRlZmluZWQ/IHRoaXMucGF0aC5oYXNoOiBoYXNoO1xuICAgIHJldHVybiB0aGlzLnJlZGlyZWN0KHRoaXMucGF0aC5zdGF0ZS5uYW1lLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGN1cnJlbnQgcGF0aFxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IHBhdGggXG4gICAqL1xuICBzZXRQYXRoKHBhdGgpIHtcbiAgICBwYXRoLnBhcmVudCA9IHRoaXMucGF0aCB8fCBudWxsO1xuICAgIHRoaXMucGF0aCA9IHsgcGFyYW1zOiB7fSwgcXVlcnk6IHt9LCAuLi5wYXRoIH07XG4gICAgdGhpcy5yb3V0ZXMucHVzaCh0aGlzLnBhdGgpO1xuICAgIHRoaXMuc3RhdGVzW3RoaXMucGF0aC5zdGF0ZS5uYW1lXSA9IHRoaXMucGF0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSByb3V0ZSBieSB0aGUgc3RhdGVcbiAgICogIFxuICAgKiBAcGFyYW0geyp9IHN0YXRlIFxuICAgKi9cbiAgZ2V0Um91dGUoc3RhdGUpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMucm91dGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJvdXRlID0gdGhpcy5yb3V0ZXNbaV07XG5cbiAgICAgIGlmIChyb3V0ZS5zdGF0ZSA9PT0gc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHJvdXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGl0IGhhcyB0aGUgc3RhdGVcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSBcbiAgICovXG4gIGhhc1N0YXRlKHN0YXRlKSB7XG4gICAgcmV0dXJuICEhdGhpcy5zdGF0ZXNbc3RhdGUubmFtZV07XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIHJvdXRlIGlzIGNoYW5nZWRcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSByb3V0ZVxuICAgKi9cbiAgaXNSb3V0ZUNoYW5nZWQocm91dGUpIHtcbiAgICBpZighdGhpcy5wcmV2aW91cykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGUgPSByb3V0ZS5zdGF0ZTtcblxuICAgIGlmKCF0aGlzLnByZXZpb3VzLmhhc1N0YXRlKHN0YXRlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyYW1LZXlzID0gW107XG4gICAgc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZShyb3V0ZXIuX19wYXJhbVJlZ2V4LCAobSwgZiwgdikgPT4gcGFyYW1LZXlzLnB1c2godikpO1xuICAgIFxuICAgIGZvcihsZXQga2V5IGluIHN0YXRlLnBhcmFtcykge1xuICAgICAgaWYocGFyYW1LZXlzLmluZGV4T2Yoa2V5KSA9PSAtMSkge1xuICAgICAgICBwYXJhbUtleXMucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5S2V5cyA9IE9iamVjdC5rZXlzKHN0YXRlLnF1ZXJ5KTtcbiAgICBjb25zdCB3YXRjaEhhc2ggPSBzdGF0ZS5oYXNoICE9PSB1bmRlZmluZWQ7ICAgIFxuICAgIGNvbnN0IHByZXZSb3V0ZSA9IHRoaXMucHJldmlvdXMuZ2V0Um91dGUoc3RhdGUpOyBcblxuICAgIGNvbnN0IHByZXYgPSB7IFxuICAgICAgcGFyYW1zOiB1dGlscy5pbmNsdWRlS2V5cyhwcmV2Um91dGUucGFyYW1zLCBwYXJhbUtleXMpLCBcbiAgICAgIHF1ZXJ5OiB1dGlscy5pbmNsdWRlS2V5cyhwcmV2Um91dGUucXVlcnksIHF1ZXJ5S2V5cylcbiAgICB9O1xuXG4gICAgY29uc3QgY3VycmVudCA9IHtcbiAgICAgIHBhcmFtczogdXRpbHMuaW5jbHVkZUtleXMocm91dGUucGFyYW1zLCBwYXJhbUtleXMpLFxuICAgICAgcXVlcnk6IHV0aWxzLmluY2x1ZGVLZXlzKHJvdXRlLnF1ZXJ5LCBxdWVyeUtleXMpXG4gICAgfVxuXG4gICAgaWYod2F0Y2hIYXNoKSB7XG4gICAgICBwcmV2Lmhhc2ggPSBwcmV2Um91dGUuaGFzaDtcbiAgICAgIGN1cnJlbnQuaGFzaCA9IHJvdXRlLmhhc2g7XG4gICAgfVxuXG4gICAgcmV0dXJuICF1dGlscy5jb21wYXJlKHByZXYsIGN1cnJlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbmNlbCB0aGUgY3VycmVudCB0cmFuc2l0aW9uXG4gICAqL1xuICBjYW5jZWwoKSB7ICAgXG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IHRydWU7XG4gICAgdGhpcy5maW5pc2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5pc2ggdGhlIHRyYW5zaXRpb25cbiAgICovXG4gIGZpbmlzaCgpIHtcbiAgICB0aGlzLl9fZmluaXNlZCA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBBa2lsaSByb3V0ZXJcbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nfVxuICovXG5jb25zdCByb3V0ZXIgPSB7fTtcblxuLyoqXG4gKiBTZXQgcm91dGVyJ3MgZGVmYXVsdCB2YXJpYWJsZXNcbiAqL1xucm91dGVyLnNldERlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmJhc2VVcmwgPSBcIi9cIjtcbiAgdGhpcy5zdGF0ZXMgPSBbXTtcbiAgdGhpcy5oYXNoTW9kZSA9IHRydWU7XG4gIHRoaXMuX19yZWRpcmVjdHMgPSAwO1xuICB0aGlzLl9faW5pdCA9IGZhbHNlO1xuICB0aGlzLl9fcGFyYW1SZWdleCA9IC8oXFwvPzooW1xcd1xcZC1dKykpL2c7XG4gIHRoaXMuX19yb3V0ZVNlbGVjdG9yID0gYyA9PiBjIGluc3RhbmNlb2YgUm91dGU7XG59XG5cbi8qKlxuICogQWRkIG5ldyBzdGF0ZSB0byB0aGUgcm91dGVyXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzdGF0ZSBuYW1lLiBUbyBzZXQgcGFyZW50cyB5b3UgY2FuIHVzZSBkb3QsIGUuZy4gJ2FwcC5hcnRpY2xlLmVkaXQnXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVybiAtIHVybCBwYXR0ZXJuIGxpa2UgJ2FwcC9hcnRpY2xlLzppZCdcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtyb3V0ZXJ9XG4gKi9cbnJvdXRlci5hZGQgPSBmdW5jdGlvbiAobmFtZSwgcGF0dGVybiwgb3B0aW9ucyA9IHt9KSB7XG4gIGlmKHR5cGVvZiBuYW1lID09ICdvYmplY3QnKSB7XG4gICAgb3B0aW9ucyA9IG5hbWU7XG4gICAgcGF0dGVybiA9IG9wdGlvbnMucGF0dGVybjtcbiAgICBuYW1lID0gb3B0aW9ucy5zdGF0ZTtcbiAgICBkZWxldGUgb3B0aW9ucy5wYXR0ZXJuO1xuICAgIGRlbGV0ZSBvcHRpb25zLnN0YXRlO1xuICB9XG5cbiAgaWYoIW5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBtdXN0IGhhdmUgYSBuYW1lYCk7XG4gIH1cblxuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICB0ZW1wbGF0ZTogJycsXG4gICAgdGVtcGxhdGVVcmw6ICcnLFxuICAgIGFic3RyYWN0OiBmYWxzZSxcbiAgICBjb21wb25lbnQ6IG51bGwsXG4gICAgcGFyYW1zOiB7fSxcbiAgICBxdWVyeToge30sXG4gICAgaGFuZGxlcjogKCkgPT4ge30sXG4gIH07XG5cbiAgaWYoQWtpbGkub3B0aW9ucy5kZWJ1ZyAmJiBvcHRpb25zLmNvbXBvbmVudCAmJiAob3B0aW9ucy50ZW1wbGF0ZSB8fCBvcHRpb25zLnRlbXBsYXRlVXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKGBSb3V0ZXIgc3RhdGUgXCIke25hbWV9XCIgbXVzdCBvbmx5IGhhdmUgYSBjb21wb25lbnQgb3IgdGVtcGxhdGUgb3B0aW9uYCk7XG4gIH0gXG5cbiAgaWYgKCFvcHRpb25zLnRlbXBsYXRlICYmICFvcHRpb25zLnRlbXBsYXRlVXJsICYmICFvcHRpb25zLmNvbXBvbmVudCkge1xuICAgIG9wdGlvbnMuYWJzdHJhY3QgPSB0cnVlO1xuICB9XG5cbiAgaWYgKHRoaXMuaGFzKG5hbWUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgXCIke25hbWV9XCIgaXMgYWxyZWFkeSBleGlzdHNgKVxuICB9XG5cbiAgdGhpcy5zZXRTdGF0ZShuYW1lLCBwYXR0ZXJuLCB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnN9KTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBzdGF0ZSBmcm9tIHRoZSBsaXN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucm91dGVyLnJlbW92ZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAodGhpcy5zdGF0ZXNbaV0ubmFtZSA9PSBuYW1lKSB7XG4gICAgICB0aGlzLnN0YXRlcy5zcGxpY2UoaSwgMSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQ2hlY2sgc3RhdGUgZXhpc3RzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmICh0aGlzLnN0YXRlc1tpXS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHRoZSBzdGF0ZSB0byB0aGUgcGFzc2VkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gLSBwYXJhbXMgZm9yIHN0YXRlIHtpZDogMX0gPT4gJy9hcHAvOmlkJyA9PiAnL2FwcC8xJ1xuICogQHBhcmFtIHtvYmplY3R9IFtxdWVyeV0gLSBxdWVyeSB7eDogMX0gPT4gJy9hcHAvP3g9MSdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbaGFzaF1cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqL1xucm91dGVyLnN0YXRlID0gZnVuY3Rpb24gKHN0YXRlLCBwYXJhbXMgPSB7fSwgcXVlcnkgPSB7fSwgaGFzaCA9IHVuZGVmaW5lZCwgb3B0aW9ucyA9IHt9KSB7ICBcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG4gIFxuICBpZiAoIXN0YXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgcm91dGUgc3RhdGUgd2l0aCBuYW1lICR7c3RhdGV9YCk7XG4gIH1cblxuICBvcHRpb25zID0geyAuLi5vcHRpb25zIH07XG4gIG9wdGlvbnMubWFudWFsID0gdHJ1ZTtcbiAgKHsgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucyB9ID0gdGhpcy5wcmVwYXJlU3RhdGVBcmdzKHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zLCBmYWxzZSkpOyAgXG4gIGxldCB1cmwgPSB0aGlzLmNyZWF0ZVN0YXRlVXJsKHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zKTsgICAgXG4gIHRoaXMuaXNvbGF0ZSgoKSA9PiB0aGlzLnNldFVybCh1cmwpKTtcbiAgcmV0dXJuIHRoaXMuY2hhbmdlU3RhdGUob3B0aW9ucyk7XG59O1xuXG4vKipcbiAqIEdvIGJhY2tcbiAqL1xucm91dGVyLmJhY2sgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LmJhY2suYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIEdvIHRvIGFueSB3YXlcbiAqL1xucm91dGVyLmdvID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeS5nby5hcHBseSh3aW5kb3cuaGlzdG9yeSwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogR28gZm9yd2FyZFxuICovXG5yb3V0ZXIuZm9yd2FyZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkuZm9yd2FyZC5hcHBseSh3aW5kb3cuaGlzdG9yeSwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHN0YXRlIGJ5IHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqL1xucm91dGVyLmxvY2F0aW9uID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gIG9wdGlvbnMgPSB7IC4uLm9wdGlvbnMgfTtcbiAgb3B0aW9ucy5tYW51YWwgPSB0cnVlO1xuICB0aGlzLmlzb2xhdGUoKCkgPT4gdGhpcy5zZXRVcmwodXJsKSk7ICBcbiAgcmV0dXJuIHRoaXMuY2hhbmdlU3RhdGUob3B0aW9ucyk7XG59O1xuXG4vKipcbiAqIFJvdXRlciBpbml0aWFsaXphdGlvbi4gU2hvdWxkIGJlIGNhbGxlZCBiZWZvcmUgQWtpbGkuaW5pdCgpXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFtkZWZhdWx0VXJsXVxuICogQHBhcmFtIHtib29sZWFufSBbaGFzaE1vZGU9dHJ1ZV1cbiAqL1xucm91dGVyLmluaXQgPSBmdW5jdGlvbiAoZGVmYXVsdFVybCA9ICcnLCBoYXNoTW9kZSA9IHRydWUpIHtcbiAgbGV0IG9sZFB1c2hTdGF0ZSA9IHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZTtcblxuICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgcmVzID0gb2xkUHVzaFN0YXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICByb3V0ZXIuY2hhbmdlU3RhdGUoKS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgdGhpcy5fX29uU3RhdGVDaGFuZ2VIYW5kbGVyID0gKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgdGhpcy5jaGFuZ2VTdGF0ZSgpLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gIH07XG5cbiAgdGhpcy5kZWZhdWx0VXJsID0gZGVmYXVsdFVybDtcbiAgdGhpcy5oYXNoTW9kZSA9IGhhc2hNb2RlOyAgICBcblxuICB0aGlzLnN0YXRlcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgYSA9IGEubmFtZS5zcGxpdCgnLicpLmxlbmd0aDtcbiAgICBiID0gYi5uYW1lLnNwbGl0KCcuJykubGVuZ3RoO1xuICAgIHJldHVybiBhIC0gYjtcbiAgfSk7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB0aGlzLmluaXRTdGF0ZSh0aGlzLnN0YXRlc1tpXSk7XG4gIH1cblxuICBpZiAoIXRoaXMuc3RhdGVzLmxlbmd0aCAmJiBBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oYFlvdSBkaWRuJ3QgYWRkIGFueSByb3V0ZXMgdG8gdGhlIHJvdXRlcmApO1xuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5fX29uU3RhdGVDaGFuZ2VIYW5kbGVyKTtcbiAgdGhpcy5fX2luaXQgPSB0cnVlO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBzdGF0ZSBcbiAqIFxuICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIFxuICovXG5yb3V0ZXIuaW5pdFN0YXRlID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gIGxldCBwYXJlbnRzID0gW107XG4gIHN0YXRlLmNoaWxkcmVuID0gW107XG4gIHBhcmVudHMgPSBzdGF0ZS5uYW1lLnNwbGl0KCcuJyk7XG4gIHBhcmVudHMucG9wKCk7XG4gIHN0YXRlLmxldmVsID0gc3RhdGUuYWJzdHJhY3Q/IG51bGw6IHBhcmVudHMubGVuZ3RoO1xuXG4gIGlmIChwYXJlbnRzLmxlbmd0aCkge1xuICAgIGxldCBwYXJlbnROYW1lID0gcGFyZW50cy5qb2luKCcuJyk7XG4gICAgbGV0IHBhcmVudCA9IHRoaXMuZ2V0U3RhdGUocGFyZW50TmFtZSk7XG5cbiAgICBpZiAoIXBhcmVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgcGFyZW50IHJvdXRlIHN0YXRlIFwiJHtwYXJlbnROYW1lfVwiIGZvciBcIiR7c3RhdGUubmFtZX1cImApXG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmxldmVsICE9PSBudWxsICYmIHBhcmVudC5hYnN0cmFjdCkge1xuICAgICAgc3RhdGUubGV2ZWwtLTtcbiAgICB9XG5cbiAgICBzdGF0ZS5mdWxsUGF0dGVybiA9IHRoaXMuc3BsaXRTbGFzaGVzKHBhcmVudC5mdWxsUGF0dGVybiArICcvJyArIHN0YXRlLnBhdHRlcm4pO1xuICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKHN0YXRlKTtcbiAgfVxuICBlbHNlIHtcbiAgICBzdGF0ZS5mdWxsUGF0dGVybiA9IHN0YXRlLnBhdHRlcm47XG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgc3RhdGUgYnkgbmFtZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gKi9cbnJvdXRlci5nZXRTdGF0ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZXNbaV07XG5cbiAgICBpZiAoc3RhdGUubmFtZSA9PSBuYW1lKSB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIFNldCBzdGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVyblxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqL1xucm91dGVyLnNldFN0YXRlID0gZnVuY3Rpb24gKG5hbWUsIHBhdHRlcm4sIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgc3RhdGUgPSB7Li4ub3B0aW9ucywgbmFtZSwgcGF0dGVybn07XG4gIHRoaXMuc3RhdGVzLnB1c2goc3RhdGUpO1xuICB0aGlzLl9faW5pdCAmJiB0aGlzLmluaXRTdGF0ZShzdGF0ZSk7XG4gIHJldHVybiBzdGF0ZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIHN0YXRlIGJ5IG5hbWVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5yb3V0ZXIucmVtb3ZlU3RhdGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLm5hbWUgPT0gbmFtZSkge1xuICAgICAgdGhpcy5zdGF0ZXMuc3BsaWNlKGksIDEpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFNldCB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKi9cbnJvdXRlci5zZXRVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHRoaXMuaGFzaE1vZGU/IHRoaXMuc2V0SGFzaFVybCh1cmwpOiB0aGlzLnNldEhpc3RvcnlVcmwodXJsKTtcbn07XG5cbi8qKlxuICogU2V0IHVybCB1c2luZyBoaXN0b3J5XG4gKlxuICogQHBhcmFtIHVybFxuICovXG5yb3V0ZXIuc2V0SGlzdG9yeVVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1cmwpO1xufTtcblxuLyoqXG4gKiBTZXQgdXJsIHVzaW5nIGhhc2hcbiAqXG4gKiBAcGFyYW0gdXJsXG4gKi9cbnJvdXRlci5zZXRIYXNoVXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjJyArICh1cmwgfHwgJy8nKTtcbn07XG5cbi8qKlxuICogUmVwbGFjZSB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKi9cbnJvdXRlci5yZXBsYWNlVXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB0aGlzLmhhc2hNb2RlPyB0aGlzLnJlcGxhY2VIYXNoVXJsKHVybCk6IHRoaXMucmVwbGFjZUhpc3RvcnlVcmwodXJsKTtcbn07XG5cbi8qKlxuICogU2V0IHVybCB1c2luZyBoaXN0b3J5XG4gKlxuICogQHBhcmFtIHVybFxuICovXG5yb3V0ZXIucmVwbGFjZUhpc3RvcnlVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgdXJsKTtcbn07XG5cbi8qKlxuICogU2V0IHVybCB1c2luZyBoYXNoXG4gKlxuICogQHBhcmFtIHVybFxuICovXG5yb3V0ZXIucmVwbGFjZUhhc2hVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgJyMnICsgKHVybCB8fCAnLycpKTtcbn07XG5cbi8qKlxuICogR2V0IHVybFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmhhc2hNb2RlID8gdGhpcy5nZXRIYXNoVXJsKCkgOiB0aGlzLmdldEhpc3RvcnlVcmwoKTtcbn07XG5cbi8qKlxuICogR2V0IHVybCB1c2luZyBoaXN0b3J5XG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLmdldEhpc3RvcnlVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoICsgd2luZG93LmxvY2F0aW9uLmhhc2g7XG59O1xuXG4vKipcbiAqIEdldCB1cmwgdXNpbmcgaGFzaFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRIYXNoVXJsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgvXiMvLCAnJyk7XG59O1xuXG4vKipcbiAqIEdldCBxdWVyeSBwYXJhbXNcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0VXJsUXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuaGFzaE1vZGUgPyB0aGlzLmdldEhhc2hVcmxRdWVyeSgpIDogdGhpcy5nZXRIaXN0b3J5VXJsUXVlcnkoKTtcbn07XG5cbi8qKlxuICogR2V0IHF1ZXJ5IHBhcmFtcyB1c2luZyBoaXN0b3J5XG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldEhpc3RvcnlVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcmVxdWVzdC5wYXJhbXNGcm9tUXVlcnkod2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpKTtcbn07XG5cbi8qKlxuICogR2V0IHF1ZXJ5IHBhcmFtcyB1c2luZyBoYXNoXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldEhhc2hVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcmVxdWVzdC5wYXJhbXNGcm9tUXVlcnkoKHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCc/JylbMV0gfHwgJycpKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIHVybCBieSBkYXRhXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdXG4gKiBAcGFyYW0ge29iamVjdH0gW3F1ZXJ5XVxuICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoXVxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtib29sZWFufSBbcHJlcGFyZV1cbiAqL1xucm91dGVyLmNyZWF0ZVN0YXRlVXJsID0gZnVuY3Rpb24gKHN0YXRlLCBwYXJhbXMgPSB7fSwgcXVlcnkgPSB7fSwgaGFzaCA9IHVuZGVmaW5lZCwgb3B0aW9ucyA9IHt9LCBwcmVwYXJlID0gdHJ1ZSkge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgb3B0aW9ucyA9IHsgLi4ub3B0aW9ucyB9O1xuICBcbiAgaWYocHJlcGFyZSkge1xuICAgICh7IHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMgfSA9IHRoaXMucHJlcGFyZVN0YXRlQXJncyhzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucykpO1xuICB9XG5cbiAgbGV0IHVybCA9IHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2UodGhpcy5fX3BhcmFtUmVnZXgsIChtLCBmLCB2KSA9PiAnLycgKyAocGFyYW1zW3ZdIHx8ICcnKSk7XG4gIHVybCA9IHVybC5yZXBsYWNlKC9eXFxeLywgJycpO1xuICB1cmwgPSB0aGlzLnNwbGl0U2xhc2hlcyh1cmwpO1xuXG4gIGlmIChPYmplY3Qua2V5cyhxdWVyeSkubGVuZ3RoKSB7XG4gICAgdXJsICs9ICc/JyArIHJlcXVlc3QucGFyYW1zVG9RdWVyeShxdWVyeSk7XG4gIH1cblxuICBpZiAoIXRoaXMuaGFzaE1vZGUgJiYgaGFzaCkge1xuICAgIHVybCArPSAnIycgKyBoYXNoLnJlcGxhY2UoJyMnLCAnJyk7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcblxuLyoqXG4gKiBQcmVwYXJlIHRoZSBzdGF0ZSBhcmd1bWVudHNcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdXG4gKiBAcGFyYW0ge29iamVjdH0gW3F1ZXJ5XVxuICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoXVxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICovXG5yb3V0ZXIucHJlcGFyZVN0YXRlQXJncyA9IGZ1bmN0aW9uIChzdGF0ZSwgcGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSB1bmRlZmluZWQsIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgYXJncyA9IHsgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucyB9O1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcbiAgICBjb25zdCBwYXJhbXNUZW1wID0gdGhpcy5wcmVwYXJlU3RhdGVQYXJhbXMoc3RhdGUsIHBhcmFtcywgYXJncyk7XG4gICAgY29uc3QgcXVlcnlUZW1wID0gdGhpcy5wcmVwYXJlU3RhdGVRdWVyeShzdGF0ZSwgcXVlcnksIGFyZ3MpO1xuICAgIGNvbnN0IGhhc2hUZW1wID0gdGhpcy5wcmVwYXJlU3RhdGVIYXNoKHN0YXRlLCBoYXNoLCBhcmdzKTtcbiAgICBcbiAgICBpZihoYXNoVGVtcCA9PT0gbnVsbCkge1xuICAgICAgb3B0aW9ucy5lbXB0eUhhc2ggPSBudWxsO1xuICAgIH1cbiAgICBlbHNlIGlmKGhhc2hUZW1wID09PSAnJykge1xuICAgICAgb3B0aW9ucy5lbXB0eUhhc2ggPSAnJztcbiAgICB9XG5cbiAgICBhcmdzID0geyBwYXJhbXM6IHBhcmFtc1RlbXAsIHF1ZXJ5OiBxdWVyeVRlbXAsIGhhc2g6IGhhc2hUZW1wLCBvcHRpb25zIH07XG4gIH1cbiAgICBcbiAgcmV0dXJuIGFyZ3M7XG59XG5cbi8qKlxuICogUHJlcGFyZSB0aGUgc3RhdGUgcGFyYW1zXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBbYXJnc11cbiAqL1xucm91dGVyLnByZXBhcmVTdGF0ZVBhcmFtcyA9IGZ1bmN0aW9uKHN0YXRlLCBwYXJhbXMsIGFyZ3MpIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG4gIGNvbnN0IGxpc3QgPSBbcGFyYW1zXTtcbiAgY29uc3Qgc3RhdGVzID0gc3RhdGUubmFtZS5zcGxpdCgnLicpO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBzdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGN1cnJlbnQgPSBzdGF0ZXMuc2xpY2UoMCwgc3RhdGVzLmxlbmd0aCAtIGkpLmpvaW4oJy4nKTtcbiAgICBsaXN0LnB1c2godGhpcy5nZXRTdGF0ZShjdXJyZW50KS5wYXJhbXMpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuY3JlYXRlU3RhdGVBcmdzKGxpc3QsIGFyZ3MpO1xufVxuXG4vKipcbiAqIFByZXBhcmUgdGhlIHN0YXRlIHF1ZXJ5XG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBxdWVyeVxuICogQHBhcmFtIHtvYmplY3R9IFthcmdzXVxuICovXG5yb3V0ZXIucHJlcGFyZVN0YXRlUXVlcnkgPSBmdW5jdGlvbihzdGF0ZSwgcXVlcnksIGFyZ3MpIHsgIFxuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgY29uc3QgbGlzdCA9IFtxdWVyeV07XG4gIGNvbnN0IHN0YXRlcyA9IHN0YXRlLm5hbWUuc3BsaXQoJy4nKTsgIFxuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBzdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgY29uc3QgY3VycmVudCA9IHN0YXRlcy5zbGljZSgwLCBzdGF0ZXMubGVuZ3RoIC0gaSkuam9pbignLicpO1xuICAgIGxpc3QucHVzaCh0aGlzLmdldFN0YXRlKGN1cnJlbnQpLnF1ZXJ5KTtcbiAgfVxuIFxuICByZXR1cm4gdGhpcy5jcmVhdGVTdGF0ZUFyZ3MobGlzdCwgYXJncyk7XG59XG5cbi8qKlxuICogTWVyZ2UgbGlzdCBpdGVtcyBhcyB0cmFuc2l0aW9uIG9iamVjdHNcbiAqIFxuICogQHBhcmFtIHtvYmplY3RbXX0gbGlzdFxuICogQHBhcmFtIHtvYmplY3R9IFthcmdzXVxuICovXG5yb3V0ZXIuY3JlYXRlU3RhdGVBcmdzID0gZnVuY3Rpb24gKGxpc3QsIGFyZ3MgPSB7IHBhcmFtczoge30sIHF1ZXJ5OiB7fSB9KSB7XG4gIGNvbnN0IGFsbCA9IHt9O1xuICBjb25zdCBleGNsdWRlZCA9IHt9O1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBsaXN0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvbnN0IG9iaiA9IGxpc3RbaV07XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gXG4gICAgZm9yKGxldCBrID0gMCwgYyA9IGtleXMubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICBsZXQga2V5ID0ga2V5c1trXTtcbiAgICAgIGxldCB2YWwgPSBvYmpba2V5XTtcblxuICAgICAgaWYoZXhjbHVkZWRba2V5XSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFsID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nPyB2YWwoYXJncyk6IHZhbDtcblxuICAgICAgaWYodmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmKHZhbCA9PT0gbnVsbCkge1xuICAgICAgICBkZWxldGUgYWxsW2tleV07XG4gICAgICAgIGV4Y2x1ZGVkW2tleV0gPSB0cnVlO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgYWxsW2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFsbDsgXG59XG5cbi8qKlxuICogUHJlcGFyZSB0aGUgc3RhdGUgaGFzaFxuICogXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gaGFzaFxuICogQHBhcmFtIHtvYmplY3R9IFthcmdzXVxuICovXG5yb3V0ZXIucHJlcGFyZVN0YXRlSGFzaCA9IGZ1bmN0aW9uKHN0YXRlLCBoYXNoLCBhcmdzKSB7XG4gIGlmKGhhc2ggPT09IG51bGwpIHtcbiAgICByZXR1cm4gaGFzaDtcbiAgfVxuXG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBjb25zdCBzdGF0ZXMgPSBzdGF0ZS5uYW1lLnNwbGl0KCcuJyk7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IHN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjb25zdCBjdXJyZW50ID0gc3RhdGVzLnNsaWNlKDAsIHN0YXRlcy5sZW5ndGggLSBpKS5qb2luKCcuJyk7XG4gICAgbGV0IHZhbCA9IHRoaXMuZ2V0U3RhdGUoY3VycmVudCkuaGFzaDtcbiAgICB2YWwgPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic/IHZhbChhcmdzKTogdmFsO1xuXG4gICAgaWYodmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmKHZhbCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaGFzaCA9IHZhbDtcbiAgfVxuXG4gIHJldHVybiBoYXNoO1xufVxuXG4vKipcbiAqIFJlbW92ZSBhbGwgdW5uZWNlc3Nhcnkgc2xhc2hlcyBmcm9tIGFuIHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5zcGxpdFNsYXNoZXMgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHJldHVybiB1cmwucmVwbGFjZSgvWy9dKy9nLCAnLycpO1xufTtcblxuLyoqXG4gKiBHZXQgc3RhdGUgdXJsIGNvbnRlbnRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0UGF0dGVybkNvbnRlbnQgPSBmdW5jdGlvbiAoc3RhdGUsIHVybCkge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgbGV0IGtleXMgPSBbXTtcbiAgbGV0IHBhcmFtcyA9IHt9O1xuXG4gIHVybCA9IHVybC5zcGxpdCgnPycpWzBdO1xuICB1cmwgPSB1cmwuc3BsaXQoJyMnKVswXTtcblxuICBsZXQgdXJsUGF0dGVybiA9IHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2UodGhpcy5fX3BhcmFtUmVnZXgsIChtLCBmLCB2KSA9PiB7XG4gICAga2V5cy5wdXNoKHYpO1xuICAgIHJldHVybiAnLz8oW14vXSopJztcbiAgfSk7XG5cbiAgdXJsUGF0dGVybiA9IHVybFBhdHRlcm4ucmVwbGFjZSgvKFteXi9dKylbL10rJC8sICckMScpO1xuICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKHVybFBhdHRlcm4sICdnJyk7XG4gIGxldCBpc0luY2x1ZGVkID0gdXJsLm1hdGNoKHJlZ2V4KTtcbiAgXG4gIGlmICghaXNJbmNsdWRlZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdXJsLnJlcGxhY2UocmVnZXgsIChtLCAuLi5hcmdzKSA9PiB7IFxuICAgIGFyZ3MgPSBhcmdzLnNsaWNlKDAsIGFyZ3MubGVuZ3RoIC0gMik7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gYXJncy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCB2ID0gYXJnc1tpXTtcbiAgICAgIHYgJiYgKHBhcmFtc1trZXlzW2ldXSA9IHYpO1xuICAgIH0gIFxuICB9KTtcblxuICByZXR1cm4geyBwYXJhbXMgfTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIHN0YXRlIGlzIGFjdGl2ZSBub3dcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVzXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmlzQWN0aXZlU3RhdGUgPSBmdW5jdGlvbihzdGF0ZSwgaW5jbHVkZXMgPSBmYWxzZSkge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgbGV0IHVybCA9IHJvdXRlci50cmFuc2l0aW9uICYmICFyb3V0ZXIudHJhbnNpdGlvbi5fX2ZpbmlzaGVkPyByb3V0ZXIudHJhbnNpdGlvbi51cmw6IHRoaXMuZ2V0VXJsKCk7XG4gIHVybCA9IHRoaXMuc3BsaXRTbGFzaGVzKCcvJyArIHVybC5zcGxpdCgnPycpWzBdICsgJy8nKTtcbiAgbGV0IHVybFBhdHRlcm4gPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAnLz8oW14vXSopJyk7XG4gIHVybFBhdHRlcm4gPSB1cmxQYXR0ZXJuLnJlcGxhY2UoL15cXF4vLCAnJykucmVwbGFjZSgvXFwkJC8sICcnKTtcbiAgbGV0IHN0ciA9IGluY2x1ZGVzPyB1cmxQYXR0ZXJuOiB0aGlzLnNwbGl0U2xhc2hlcygnXi8nICsgdXJsUGF0dGVybiArICcvJCcpO1xuICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKHN0cik7ICBcbiAgcmV0dXJuIHJlZ2V4LnRlc3QodXJsKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIGN1cnJlbnQgdXJsIGluY2x1ZGVzIGEgc3RhdGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmluQWN0aXZlU3RhdGUgPSBmdW5jdGlvbihzdGF0ZSkge1xuICByZXR1cm4gcm91dGVyLmlzQWN0aXZlU3RhdGUoc3RhdGUsIHRydWUpO1xufTtcblxuLyoqXG4gKiBHZXQgcm91dGUgY29tcG9uZW50IGJ5IGxldmVsXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxldmVsXG4gKi9cbnJvdXRlci5nZXRSb3V0ZSA9IGZ1bmN0aW9uIChsZXZlbCkge1xuICBsZXQgaSA9IDA7XG5cbiAgY29uc3QgZmluZCA9IChlbCkgPT4ge1xuICAgIGxldCByb3V0ZSA9IGVsLmNoaWxkKHRoaXMuX19yb3V0ZVNlbGVjdG9yKTtcblxuICAgIGlmICghcm91dGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChpID09IGxldmVsKSB7XG4gICAgICByZXR1cm4gcm91dGU7XG4gICAgfVxuXG4gICAgaSsrO1xuICAgIHJldHVybiBmaW5kKHJvdXRlKTtcbiAgfTtcblxuICByZXR1cm4gZmluZChBa2lsaS5yb290KTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBmaXJzdCBtYXRjaFxuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGFyclxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge29iamVjdHxudWxsfVxuICovXG5yb3V0ZXIuZ2V0QXJyYXlQYXR0ZXJuQ29udGVudCA9IGZ1bmN0aW9uIChhcnIsIHVybCkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSBhcnJbaV07XG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldFBhdHRlcm5Db250ZW50KHN0YXRlLCB1cmwpO1xuXG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdGF0ZTogc3RhdGUsIC4uLmNvbnRlbnQgfTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBHZXQgc3RhdGVzIGJ5IGxldmVsXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxldmVsXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbnJvdXRlci5nZXRTdGF0ZXNCeUxldmVsID0gZnVuY3Rpb24gKGxldmVsKSB7XG4gIGxldCBzdGF0ZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLmxldmVsIDwgbGV2ZWwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChzdGF0ZS5sZXZlbCA+IGxldmVsKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzdGF0ZXMucHVzaChzdGF0ZSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVzO1xufTtcblxuLyoqXG4gKiBSZWxvYWQgdGhlIHN0YXRlXG4gKiBcbiAqIEBzZWUgVHJhbnNpdGlvbi5yZWxvYWRcbiAqL1xucm91dGVyLnJlbG9hZCA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgaWYoIXRoaXMudHJhbnNpdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcignTm90IGZvdW5kIGFuIGFjdGl2ZSB0cmFuc2l0aW9uIHRvIHJlbG9hZCB0aGUgc3RhdGUnKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLnRyYW5zaXRpb24ucmVsb2FkKC4uLmFyZ3MpO1xufVxuXG4vKipcbiAqIElzb2xhdGUgdGhlIGZ1bmN0aW9uIHRvIG5vdCB0cmlnZ2VyIHJvdXRlciBoYW5kbGVycyBpbnNpZGVcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbnJvdXRlci5pc29sYXRlID0gZnVuY3Rpb24gKGZuKSB7XG4gIHRoaXMuX19pc29sYXRlZCA9IHRydWU7XG4gIGxldCByZXMgPSBmbigpO1xuICB0aGlzLl9faXNvbGF0ZWQgPSBmYWxzZTtcbiAgcmV0dXJuIHJlcztcbn1cblxuLyoqXG4gKiBDaGFuZ2Ugc3RhdGVcbiAqIFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICovXG5yb3V0ZXIuY2hhbmdlU3RhdGUgPSBmdW5jdGlvbiAob3B0aW9ucyA9IHt9KSB7ICAgIFxuICBpZih0aGlzLl9faXNvbGF0ZWQpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cbiAgXG4gIGxldCB1cmwgPSB0aGlzLmdldFVybCgpO1xuICBsZXQgcGFyYW1zID0ge307XG4gIGxldCBxdWVyeSA9IHRoaXMuZ2V0VXJsUXVlcnkoKTsgIFxuICBsZXQgaGFzaCA9IHRoaXMuaGFzaE1vZGU/ICcnOiB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpOyBcbiAgbGV0IHByZXZUcmFuc2l0aW9uID0gcm91dGVyLnRyYW5zaXRpb24gfHwgbnVsbDtcbiAgbGV0IHRyYW5zaXRpb24gPSByb3V0ZXIudHJhbnNpdGlvbiA9IG5ldyBUcmFuc2l0aW9uKHVybCwgcHJldlRyYW5zaXRpb24pO1xuICBsZXQgbGV2ZWwgPSAwO1xuICBcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzdGF0ZS1jaGFuZ2UnLCB7IGRldGFpbDogdHJhbnNpdGlvbiB9KSk7XG5cbiAgY29uc3QgbmV4dCA9IChzdGF0ZXMpID0+IHsgICAgXG4gICAgaWYgKCFzdGF0ZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldEFycmF5UGF0dGVybkNvbnRlbnQoc3RhdGVzLCB1cmwpO1xuXG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgbGV0IHN0YXRlID0gY29udGVudC5zdGF0ZTsgXG4gICAgdHJhbnNpdGlvbi5zZXRQYXRoKHsgc3RhdGUsIGNvbXBvbmVudDogcm91dGUgfSk7ICAgIFxuICAgIHBhcmFtcyA9IHsgLi4ucGFyYW1zLCAuLi5jb250ZW50LnBhcmFtcyB9O1xuICAgIGhhc2ggPSBoYXNoIHx8IG9wdGlvbnMuZW1wdHlIYXNoO1xuICAgICh7IHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMgfSA9IHRoaXMucHJlcGFyZVN0YXRlQXJncyhzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucykpOyAgICAgXG4gICAgaGFzaCA9IGhhc2ggfHwgJyc7XG4gICAgbGV0IHJlYWxVcmwgPSB0aGlzLmNyZWF0ZVN0YXRlVXJsKHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zLCBmYWxzZSk7IFxuICAgIHRoaXMuaXNvbGF0ZSgoKSA9PiB0aGlzLnJlcGxhY2VVcmwocmVhbFVybCkpOyBcbiAgICBsZXQgcm91dGUgPSBzdGF0ZS5hYnN0cmFjdD8gbnVsbDogdGhpcy5nZXRSb3V0ZShsZXZlbCk7XG4gICAgXG4gICAgaWYgKCFyb3V0ZSAmJiAhc3RhdGUuYWJzdHJhY3QpIHsgICAgICBcbiAgICAgIHRocm93IG5ldyBFcnJvciAoYE5vdCBmb3VuZCByb3V0ZSBjb21wb25lbnQgZm9yIHN0YXRlIFwiJHtzdGF0ZS5uYW1lfVwiYCk7XG4gICAgfSAgICBcblxuICAgIHRyYW5zaXRpb24ucGF0aC5wYXJhbXMgPSBwYXJhbXM7XG4gICAgdHJhbnNpdGlvbi5wYXRoLnF1ZXJ5ID0gcXVlcnk7XG4gICAgdHJhbnNpdGlvbi5wYXRoLmhhc2ggPSBoYXNoO1xuICAgIHRyYW5zaXRpb24ucGF0aC51cmwgPSByZWFsVXJsO1xuICAgIHRyYW5zaXRpb24ucGF0aC5vcHRpb25zID0gb3B0aW9ucztcbiAgICAhc3RhdGUuYWJzdHJhY3QgJiYgbGV2ZWwrKztcbiAgICBsZXQgaXNEaWZmZXJlbnQgPSB0cnVlO1xuXG4gICAgaWYocmVhbFVybCAhPSB1cmwpIHtcbiAgICAgIGlzRGlmZmVyZW50ID0gdHJhbnNpdGlvbi5pc1JvdXRlQ2hhbmdlZCh0cmFuc2l0aW9uLnBhdGgpO1xuICAgIH1cbiAgICAgICBcbiAgICBsZXQgbG9hZCA9IGlzRGlmZmVyZW50ICYmIG9wdGlvbnMucmVsb2FkICE9PSBmYWxzZTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobG9hZD8gc3RhdGUuaGFuZGxlcih0cmFuc2l0aW9uKTogdHJhbnNpdGlvbi5wYXRoLmRhdGEpLnRoZW4oKGRhdGEpID0+IHsgICAgICAgXG4gICAgICB0cmFuc2l0aW9uLnBhdGguZGF0YSA9IGRhdGE7XG4gICAgICBzdGF0ZS50aXRsZSAmJiAoZG9jdW1lbnQudGl0bGUgPSB0eXBlb2Ygc3RhdGUudGl0bGUgPT0gJ2Z1bmN0aW9uJz8gc3RhdGUudGl0bGUodHJhbnNpdGlvbik6IHN0YXRlLnRpdGxlKTtcblxuICAgICAgaWYgKHRyYW5zaXRpb24uX19jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUuYWJzdHJhY3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwcmV2Um91dGUgPSB0cmFuc2l0aW9uLnByZXZpb3VzICYmIHRyYW5zaXRpb24ucHJldmlvdXMuZ2V0Um91dGUoc3RhdGUpO1xuICAgICAgKHByZXZSb3V0ZSAmJiAhcHJldlJvdXRlLmxvYWRlZCkgJiYgKGxvYWQgPSB0cnVlKTtcbiAgICAgIHJldHVybiByb3V0ZS5zZXRUcmFuc2l0aW9uKHRyYW5zaXRpb24sIGxvYWQpLnRoZW4oKCkgPT4gdHJhbnNpdGlvbi5wYXRoLmxvYWRlZCA9IHRydWUpO1xuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgcmV0dXJuIG5leHQoc3RhdGUuY2hpbGRyZW4pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBuZXh0KHRoaXMuZ2V0U3RhdGVzQnlMZXZlbCgwKSkudGhlbigoKSA9PiB7XG4gICAgaWYgKCF0cmFuc2l0aW9uLnJvdXRlcy5sZW5ndGgpIHtcbiAgICAgIGlmICh0aGlzLl9fcmVkaXJlY3RzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgV3Jvbmcgcm91dGVyIGRlZmF1bHQgdXJsIFwiJHt0aGlzLmRlZmF1bHRVcmx9XCJgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZGVmYXVsdFVybCkge1xuICAgICAgICBpZiAodGhpcy5kZWZhdWx0VXJsID09IHRoaXMuZ2V0VXJsKCkpIHtcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIGFueSByb3V0ZXNgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNvbGF0ZSgoKSA9PiB0aGlzLnJlcGxhY2VVcmwodGhpcy5kZWZhdWx0VXJsKSk7ICAgICAgICAgIFxuICAgICAgICB0aGlzLl9fcmVkaXJlY3RzKys7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZVN0YXRlKCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmIChBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgIGNvbnNvbGUud2FybihgTm90IGZvdW5kIGEgZGVmYXVsdCByb3V0ZS4gWW91IGNhbiBwYXNzIGl0IGluIFwicm91dGVyLmluaXQoZGVmYXVsdFVybClcIiBmdW5jdGlvbmApO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAoIW9wdGlvbnMuc2F2ZVNjcm9sbFBvc2l0aW9uICYmICghdHJhbnNpdGlvbi5wYXRoIHx8ICF0cmFuc2l0aW9uLnBhdGguaGFzaCkpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICB9XG5cbiAgICB0aGlzLl9fcmVkaXJlY3RzID0gMDtcbiAgICB0cmFuc2l0aW9uLmZpbmlzaCgpO1xuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc3RhdGUtY2hhbmdlZCcsIHsgZGV0YWlsOiB0cmFuc2l0aW9uIH0pKTtcbiAgICByZXR1cm4gdHJhbnNpdGlvbjtcbiAgfSk7XG59O1xuXG4vKipcbiAqIERlaW5pdCByb3V0ZXJcbiAqL1xucm91dGVyLmRlaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5fX29uU3RhdGVDaGFuZ2VIYW5kbGVyKTtcbiAgcm91dGVyLnNldERlZmF1bHRzKCk7XG59O1xuXG5yb3V0ZXIuVHJhbnNpdGlvbiA9IFRyYW5zaXRpb247XG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG5yb3V0ZXIuc2V0RGVmYXVsdHMoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvcm91dGVyLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGNvbmRpdGlvbmFsIHN0YXRlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NvbmRpdGlvbmFsX3N0YXRlbWVudHN9XG4gKiBcbiAqIEB0YWcgaWZcbiAqIEBzZWxlY3RvciBpZltpc11cbiAqIEBhdHRyIHtib29sZWFufSBpcyAtIHNob3cgdGhlIGVsZW1lbnQgY29udGVudCBvciBub3RcbiAqIEBhdHRyIHtib29sZWFufSByZWNyZWF0ZSAtIGRlbGV0ZSB0aGUgY29udGVudCBhbmQgcmVjcmVhdGUgb3IganVzdCBzaG93L2hpZGUgXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElmIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gdHJ1ZTsgXG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tpc10nO1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ3JlY3JlYXRlJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2lmJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdlbHNlLWlmJywgdGhpcy5FbHNlSWYpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnZWxzZScsIHRoaXMuRWxzZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuc3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMucmVjcmVhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ29tcGlsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRpc3BsYXkgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpLmRpc3BsYXk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ3JlY3JlYXRlJywgdGhpcy5zZXRSZWNyZWF0aW9uKTtcbiAgICByZXR1cm4gdGhpcy5hdHRyKCdpcycsIHZhbCA9PiAodGhpcy5zdGF0ZSA9ICEhdmFsLCB0aGlzLnNldFN0YXRlKCkpKTtcbiAgfVxuXG4gIHNldEFjdGl2aXR5KGFjdGl2ZSkge1xuICAgIHRoaXMuYWN0aXZlID0gYWN0aXZlO1xuICB9XG5cbiAgc2V0UmVjcmVhdGlvbihyZWNyZWF0ZSkge1xuICAgIHRoaXMucmVjcmVhdGUgPSByZWNyZWF0ZTtcbiAgfVxuXG4gIHNldFN0YXRlKCkge1xuICAgIGxldCByZXMgPSB0aGlzLmNvbXBpbGF0aW9uKCk7XG4gICAgbGV0IG5leHQgPSB0aGlzLmVsLm5leHRFbGVtZW50U2libGluZztcbiAgICBsZXQgcmVzdWx0O1xuXG4gICAgaWYgKCFuZXh0IHx8ICFuZXh0Lm1hdGNoZXMoJ2Vsc2UtaWYsZWxzZScpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmV4dC5fX2FraWxpLnNldEFjdGl2aXR5KHRoaXMuYWN0aXZlIHx8IHRoaXMuc3RhdGUpO1xuICAgIG5leHQuX19ha2lsaS5zZXRSZWNyZWF0aW9uKHRoaXMucmVjcmVhdGUpO1xuICAgIHJlc3VsdCA9IG5leHQuX19ha2lsaS5zZXRTdGF0ZSgpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzKS50aGVuKCgpID0+ICByZXN1bHQpO1xuICB9XG5cbiAgY29tcGlsYXRpb24oKSB7XG4gICAgbGV0IHJlcztcblxuICAgIGlmICh0aGlzLnN0YXRlICYmICF0aGlzLmFjdGl2ZSkge1xuICAgICAgaWYgKHRoaXMucmVjcmVhdGUgfHwgIXRoaXMuaXNDb21waWxlZCkge1xuICAgICAgICByZXMgPSB0aGlzLmNvbXBpbGUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbC5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsIHRoaXMuZGlzcGxheSwgJ2ltcG9ydGFudCcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnJlY3JlYXRlKSB7XG4gICAgICAgIHRoaXMuZW1wdHkoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCF0aGlzLmlzQ29tcGlsZWQpIHtcbiAgICAgICAgcmVzID0gdGhpcy5jb21waWxlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScsICdpbXBvcnRhbnQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgY29tcGlsZSgpIHtcbiAgICBsZXQgcmVzO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5odG1sOyAgICBcbiAgICByZXMgPSBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgIHRoaXMuaXNDb21waWxlZCA9IHRydWU7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxufVxuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgY29uZGl0aW9uYWwgc3RhdGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfY29uZGl0aW9uYWxfc3RhdGVtZW50c31cbiAqIFxuICogQHRhZyBlbHNlLWlmXG4gKiBAc2VsZWN0b3IgZWxzZS1pZltpc11cbiAqIEBhdHRyIHtib29sZWFufSBpcyBAc2VlIElmXG4gKi9cbmV4cG9ydCBjbGFzcyBFbHNlSWYgZXh0ZW5kcyBJZiB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgY29uZGl0aW9uYWwgc3RhdGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfY29uZGl0aW9uYWxfc3RhdGVtZW50c31cbiAqIFxuICogQHRhZyBlbHNlXG4gKi9cbmV4cG9ydCBjbGFzcyBFbHNlIGV4dGVuZHMgRWxzZUlmIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnaXMnLCAndHJ1ZScpO1xuICB9XG59XG5cbklmLkVsc2VJZiA9IEVsc2VJZjtcbklmLkVsc2UgPSBFbHNlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2lmLmpzIiwiaW1wb3J0IEZvciwgeyBMb29wIH0gZnJvbSAnLi9mb3IuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCBzZWxlY3QuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX3NlbGVjdH1cbiAqIFxuICogQHRhZyBzZWxlY3QgIFxuICogQGF0dHIge3N0cmluZ30gdmFsdWUgLSBhY3R1YWwgdmFsdWVcbiAqIEBhdHRyIFtpbl0gQHNlZSBGb3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydtdWx0aXBsZSddLmNvbmNhdChGb3IuYm9vbGVhbkF0dHJpYnV0ZXMpO1xuICBzdGF0aWMgZXZlbnRzID0gWydjaGFuZ2UnXS5jb25jYXQoRm9yLmV2ZW50cyk7XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3NlbGVjdCcsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnb3B0aW9uJywgdGhpcy5PcHRpb24pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pdGVyYXRvclRhZ05hbWUgPSAnb3B0aW9uJztcbiAgICB0aGlzLmlzTXVsdGlwbGUgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkgeyBcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHRoaXMuZWwuY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpKTtcbiAgICBsZXQgcmVzID0gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgICBcbiAgICB0aGlzLmF0dHIoJ211bHRpcGxlJywgdGhpcy5zZXRNdWx0aXBsZSk7XG4gICAgdGhpcy5hdHRyKCdjb250ZW50JywgdGhpcy5zZXRDb250ZW50KTtcbiAgICB0aGlzLmF0dHIoJ2luJywgdGhpcy5kcmF3U2VsZWN0KTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgc2V0TXVsdGlwbGUodmFsdWUpIHtcbiAgICB0aGlzLmlzTXVsdGlwbGUgPSB2YWx1ZTtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUodXRpbHMuY29weSh0aGlzLmVsLmNvbnRlbnQpKSk7XG4gIH1cblxuICBzZXRDb250ZW50KHZhbHVlKSB7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKHZhbHVlKSk7XG4gIH1cblxuICBkcmF3U2VsZWN0KCkge1xuICAgIGxldCBzZWxlY3RlZCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldLl9fYWtpbGk7XG4gICAgICBsZXQgc2VsZWN0aW9uID0gb3B0aW9uLmF0dHJzLnNlbGVjdGVkO1xuXG4gICAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICAgIHNlbGVjdGVkLnB1c2gob3B0aW9uLmVsLnZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgb3B0aW9uLmVsLnNlbGVjdGVkID0gc2VsZWN0aW9uO1xuICAgIH1cblxuICAgIGlmICghc2VsZWN0ZWQubGVuZ3RoKSB7XG4gICAgICB0aGlzLnJlZGVmaW5lKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKHNlbGVjdGVkKSk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlSXRlcmF0b3JFbGVtZW50KCkge1xuICAgIGxldCBlbCA9IHN1cGVyLmNyZWF0ZUl0ZXJhdG9yRWxlbWVudCgpO1xuXG4gICAgaWYgKCFlbC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0aGlzLmh0bWwudHJpbSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIGlmICghdGhpcy5pc011bHRpcGxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbC52YWx1ZTtcbiAgICB9XG5cbiAgICBsZXQgY29udGVudCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldO1xuXG4gICAgICBpZiAob3B0aW9uLnNlbGVjdGVkKSB7XG4gICAgICAgIGNvbnRlbnQucHVzaChvcHRpb24udmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgZm9ybWF0VmFsdWUodmFsdWUpIHtcbiAgICBpZiAodGhpcy5pc011bHRpcGxlKSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpPyBbdmFsdWVdOiBbXTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5sZW5ndGg/IHZhbHVlWzBdOiAnJztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJlZGVmaW5lKCkge1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5nZXRDb250ZW50KCkpO1xuICB9XG5cbiAgY2hhbmdlVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodXRpbHMuY29tcGFyZSh0aGlzLmVsLmNvbnRlbnQsIHZhbHVlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdGhpcy5lbC52YWx1ZSA9IHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXTtcblxuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB2YWx1ZS5pbmRleE9mKG9wdGlvbi52YWx1ZSkgIT0gLTE7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5lbC52YWx1ZSA9IHZhbHVlO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXTtcblxuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBvcHRpb24udmFsdWUgPT0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5lbC5jb250ZW50ID0gdmFsdWU7XG4gICAgdGhpcy5hdHRycy5vbkNoYW5nZS5kaXNwYXRjaChFdmVudCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBPcHRpb24gZXh0ZW5kcyBMb29wIHtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydzZWxlY3RlZCddO1xuXG4gIF9fZ2V0UGFyc2VkRXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG4gICAgcmV0dXJuIHV0aWxzLmRlY29kZUh0bWxFbnRpdGllcyhleHByZXNzaW9uKTtcbiAgfVxuXG4gIGNoYW5nZWRTZWxlY3RlZCh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U2VsZWN0ZWQodmFsdWUpO1xuICB9XG5cbiAgc2V0U2VsZWN0ZWQodmFsdWUpIHtcbiAgICB0aGlzLmVsLnNlbGVjdGVkID0gdmFsdWU7XG4gICAgdGhpcy5mb3IucmVkZWZpbmUoKTtcbiAgfVxufVxuXG5TZWxlY3QuT3B0aW9uID0gT3B0aW9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3NlbGVjdC5qcyIsImltcG9ydCBUZXh0IGZyb20gJy4vdGV4dC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggaW5wdXQgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2lucHV0fVxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfY2hlY2tib3hfYW5kX3JhZGlvfVxuICogXG4gKiBAdGFnIGlucHV0XG4gKiBAYXR0ciBAc2VlIFRleHRcbiAqIEBtZXNzYWdlIEBzZWUgVGV4dFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCBleHRlbmRzIFRleHQge1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ2NoZWNrZWQnLCAnbXVsdGlwbGUnXS5jb25jYXQoVGV4dC5ib29sZWFuQXR0cmlidXRlcyk7XG4gIHN0YXRpYyBldmVudHMgPSBbJ2NoYW5nZSddLmNvbmNhdChUZXh0LmV2ZW50cyk7XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2lucHV0JywgdGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmlzQ2hlY2tib3ggPSB0aGlzLmVsLnR5cGUgPT0gJ2NoZWNrYm94JztcbiAgICB0aGlzLmlzUmFkaW8gPSB0aGlzLmVsLnR5cGUgPT0gJ3JhZGlvJzsgICAgXG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICAodGhpcy5pc0NoZWNrYm94IHx8IHRoaXMuaXNSYWRpbykgJiYgdGhpcy5hdHRyKCdjaGVja2VkJywgdGhpcy5zZXRDaGVja2VkKTtcbiAgICByZXR1cm4gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfSAgXG5cbiAgc2V0Q2hlY2tlZCh2YWx1ZSkge1xuICAgIHZhbHVlID0gISF2YWx1ZTtcbiAgICBcbiAgICBpZiAodGhpcy5lbC5jaGVja2VkID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZWwuY2hlY2tlZCA9IHZhbHVlO1xuICAgIHRoaXMuX19pc0NvbXBpbGVkICYmIHRoaXMuYXR0cnMub25DaGFuZ2UuZGlzcGF0Y2goRXZlbnQsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICB0aGlzLmlzUmFkaW8gJiYgdGhpcy5jaGFuZ2VSYWRpbygpO1xuICB9XG5cbiAgc2V0VmFsdWUoKSB7XG4gICAgc3VwZXIuc2V0VmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLmlzUmFkaW8gJiYgdGhpcy5hdHRycy5vbkNoYW5nZS5kaXNwYXRjaChFdmVudCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICB9XG5cbiAgY2hhbmdlUmFkaW8oKSB7XG4gICAgbGV0IG5hbWUgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICAgIGxldCBzZWxlY3RvciA9IGBpbnB1dFt0eXBlPXJhZGlvXVtuYW1lPScke25hbWV9J106bm90KFtzY29wZT0nJHt0aGlzLnNjb3BlLl9fbmFtZX0nXSlgO1xuICAgIGxldCBjaGlsZHJlbiA9IEFraWxpLnJvb3QuY2hpbGRyZW4oc2VsZWN0b3IpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuICAgICAgcmFkaW8uc2V0Q2hlY2tlZChyYWRpby5lbC5jaGVja2VkKTtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pbnB1dC5qcyIsImltcG9ydCBGb3IsIHsgTG9vcCB9IGZyb20gJy4vZm9yLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCByYWRpbyBncm91cC5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfcmFkaW9fZ3JvdXB9XG4gKiBcbiAqIEB0YWcgcmFkaW9cbiAqIEBzZWxlY3RvciByYWRpb1tuYW1lXVxuICogQGF0dHIge3N0cmluZ30gbmFtZSAtIG5hbWUgb2YgdGhlIGdyb3VwXG4gKiBAYXR0ciB7c3RyaW5nfG51bGx9IHZhbHVlIC0gc2VsZWN0ZWQgdmFsdWVcbiAqIEBhdHRyIFtpbl0gQHNlZSBGb3JcbiAqIEBtZXNzYWdlIHtzdHJpbmd9IHJhZGlvIC0gc2VudCBvbiB2YWx1ZSBjaGFuZ2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaW8gZXh0ZW5kcyBGb3Ige1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbbmFtZV0nO1xuICBzdGF0aWMgZXZlbnRzID0gWydyYWRpbyddLmNvbmNhdChGb3IuZXZlbnRzKTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgncmFkaW8nLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JhZGlvLWJ1dHRvbicsIHRoaXMuUmFkaW9CdXR0b24pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pdGVyYWJsZSA9IHRoaXMuZWwuaGFzQXR0cmlidXRlKCdpbicpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICBpZih0aGlzLml0ZXJhYmxlKSB7XG4gICAgICByZXR1cm4gc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgQWtpbGkubmV4dFRpY2soKCkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLmdldFJhZGlvVmFsdWUoKTtcblxuICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMucHJldlZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5hdHRycy5vblJhZGlvLnRyaWdnZXIodmFsdWUsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYodGhpcy5pdGVyYWJsZSkge1xuICAgICAgcmV0dXJuIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgcmVzb2x2ZWQoKSB7XG4gICAgdGhpcy5hdHRyKCdpbicsIHRoaXMuc2V0TmFtZXMsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pOyAgIFxuICAgIHRoaXMuYXR0cigndmFsdWUnLCB0aGlzLnNldFZhbHVlKTsgXG4gICAgdGhpcy5hdHRyKCduYW1lJywgdGhpcy5zZXROYW1lcyk7XG5cbiAgICBpZih0aGlzLml0ZXJhYmxlKSB7XG4gICAgICByZXR1cm4gc3VwZXIucmVzb2x2ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBzZXROYW1lcyhuYW1lKSB7XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbignaW5wdXRbdHlwZT1yYWRpb10nKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjaGlsZHJlbltpXS5lbC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBuYW1lIHx8IHRoaXMuYXR0cnMubmFtZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IHRoaXMucHJldlZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHByZXYgPSB0aGlzLnByZXZWYWx1ZTtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuICAgIGxldCBpc1RydWUgPSBmYWxzZTtcbiAgICB0aGlzLnByZXZWYWx1ZSA9IHZhbHVlO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuICAgICAgbGV0IGlzU2VsZWN0ZWQgPSByYWRpby5lbC52YWx1ZSA9PT0gdmFsdWU7XG5cbiAgICAgIGlzU2VsZWN0ZWQgJiYgKGlzVHJ1ZSA9IHRydWUpO1xuICAgICAgcmFkaW8uc2V0Q2hlY2tlZChpc1NlbGVjdGVkKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzVHJ1ZSkge1xuICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIGlmIChwcmV2ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnByZXZWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYXR0cnMub25SYWRpby50cmlnZ2VyKHZhbHVlLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cblxuICBnZXRSYWRpb1ZhbHVlKCkge1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oJ2lucHV0W3R5cGU9cmFkaW9dJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJhZGlvID0gY2hpbGRyZW5baV07XG5cbiAgICAgIGlmIChyYWRpby5lbC5jaGVja2VkKSB7XG4gICAgICAgIHJldHVybiByYWRpby5lbC52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggcmFkaW8gZ3JvdXAgaXRlbS5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfcmFkaW9fZ3JvdXB9XG4gKiBcbiAqIEB0YWcgcmFkaW8tYnV0dG9uXG4gKiBAYXR0ciB7c3RyaW5nfSB2YWx1ZSAtIHZhbHVlXG4gKi9cbmV4cG9ydCBjbGFzcyBSYWRpb0J1dHRvbiBleHRlbmRzIExvb3Age1xuICBzdGF0aWMgdGVtcGxhdGUgPSAnPGxhYmVsPjxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIiR7dGhpcy52YWx1ZX1cIi8+JHt0aGlzLl9fY29udGVudH08L2xhYmVsPic7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRyKCd2YWx1ZScsICd2YWx1ZScpO1xuICAgIHJldHVybiBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG59XG5cblJhZGlvLlJhZGlvQnV0dG9uID0gUmFkaW9CdXR0b247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvcmFkaW8uanMiLCJpbXBvcnQgVGV4dCBmcm9tICcuL3RleHQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIHRleHRhcmVhLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc190ZXh0YXJlYX1cbiAqIFxuICogQHRhZyB0ZXh0YXJlYVxuICogQGF0dHIgQHNlZSBUZXh0XG4gKiBAbWVzc2FnZSBAc2VlIFRleHRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dGFyZWEgZXh0ZW5kcyBUZXh0IHtcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RleHRhcmVhJywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90ZXh0YXJlYS5qcyIsImltcG9ydCBUZXh0IGZyb20gJy4vdGV4dC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgZWxlbWVudHMgd2l0aCBjb250ZW50ZWRpdGFibGUgYXR0cmlidXRlLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jb250ZW50ZWRpdGFibGV9XG4gKiBcbiAqIEB0YWcgY29udGVudFxuICogQHNlbGVjdG9yIGNvbnRlbnQsW2NvbnRlbnRlZGl0YWJsZV1cbiAqIEBhdHRyIEBzZWUgVGV4dFxuICogQGF0dHIge2Jvb2xlYW59IFtlZGl0YWJsZV0gLSBlZGl0YWJsZSBvciBub3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudCBleHRlbmRzIFRleHQge1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnY29udGVudCcsIHRoaXMpO1xuICAgIEFraWxpLmFsaWFzKCdbY29udGVudGVkaXRhYmxlXScsICdjb250ZW50Jyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICBpZiAodGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ2VkaXRhYmxlJykpIHtcbiAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0aGlzLmVsLmdldEF0dHJpYnV0ZSgnZWRpdGFibGUnKSk7XG4gICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZSgnZWRpdGFibGUnKTtcbiAgICB9XG5cbiAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKS5kaXNwbGF5ID09ICdpbmxpbmUnKSB7XG4gICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIHRoaXMudmFsdWVLZXkgPSAnaW5uZXJIVE1MJztcbiAgfVxuXG4gIHNldEVsZW1lbnRGb2N1cygpIHtcbiAgICBsZXQgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIGxldCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG5cbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGhpcy5lbCk7XG4gICAgcmFuZ2UuY29sbGFwc2UoZmFsc2UpO1xuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2NvbnRlbnQuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIGluY2x1ZGUgdGVtcGxhdGVzIGJ5IHVybC5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaHRtbF90ZW1wbGF0ZXN9XG4gKiBcbiAqIEB0YWcgaW5jbHVkZVxuICogQHNlbGVjdG9yIGluY2x1ZGVbdXJsXVxuICogQGF0dHIge3N0cmluZ30gdXJsIC0gdGVtcGxhdGUgcGF0aFxuICogQGF0dHIge251bWJlcnxmdW5jdGlvbnxib29sZWFufSBbY2FjaGVdIC0gcmVxdWVzdCBjYWNoZSB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JlcXVlc3RzI2RvY3NfY2FjaGV9XG4gKiBAbWVzc2FnZSB7dm9pZH0gbG9hZCAtIHNlbnQgb24gdGhlIHRlbXBsYXRlIGxvYWRcbiAqIEBtZXNzYWdlIHtFcnJvcn0gZXJyb3IgLSBzZW50IG9uIGVycm9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluY2x1ZGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgdHJhbnNwYXJlbnQgPSB0cnVlOyBcbiAgc3RhdGljIG1hdGNoZXMgPSAnW3VybF0nO1xuICBzdGF0aWMgZXZlbnRzID0gWydsb2FkJywgJ2Vycm9yJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2luY2x1ZGUnLCB0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cignY2FjaGUnLCB0aGlzLnNldENhY2hlKTtcbiAgICByZXR1cm4gdGhpcy5hdHRyKCd1cmwnLCB0aGlzLnNldFRlbXBsYXRlKTtcbiAgfVxuXG4gIHNldENhY2hlKGNhY2hlKSB7XG4gICAgdGhpcy5jYWNoZSA9IGNhY2hlO1xuICB9XG5cbiAgc2V0VGVtcGxhdGUodXJsKSB7XG4gICAgdGhpcy5jb25uZWN0aW9uICYmIHRoaXMuY29ubmVjdGlvbi5hYm9ydCgpO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KHVybCwge1xuICAgICAgY2FjaGU6IHRoaXMuY2FjaGUsXG4gICAgICBvblN0YXJ0OiAoeGhyKSA9PiB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IHhocjtcbiAgICAgIH1cbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gICAgICB0aGlzLmVtcHR5KCk7XG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcbiAgICAgIEFraWxpLnNldFRlbXBsYXRlKHRoaXMuZWwsIHJlcy5kYXRhKTtcblxuICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0cnMub25Mb2FkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgfSk7XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgdGhpcy5hdHRycy5vbkVycm9yLnRyaWdnZXIoZXJyLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaW5jbHVkZS5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGlmcmFtZXMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBpZnJhbWVcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElmcmFtZSBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2lmcmFtZScsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaWZyYW1lLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgaW1hZ2VzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgaW1nXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZSBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2ltZycsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBlbWJlZCBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIGVtYmVkXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWJlZCBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2VtYmVkJywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9lbWJlZC5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGF1ZGlvIGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgYXVkaW9cbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnYXVkaW8nLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2F1ZGlvLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgdmlkZW8gZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyB2aWRlb1xuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlkZW8gZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd2aWRlbycsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdmlkZW8uanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciB0cmFjayBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIHRyYWNrXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFjayBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RyYWNrJywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90cmFjay5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIHNvdXJjZSBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIHNvdXJjZVxuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU291cmNlIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnc291cmNlJywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9zb3VyY2UuanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBvYmplY3QgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBvYmplY3RcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdHMgZXh0ZW5kcyBVcmwgeyAgXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMudXJsQXR0cmlidXRlID0gJ2RhdGEnO1xuICB9XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ29iamVjdCcsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvb2JqZWN0LmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuLi9zZXJ2aWNlcy9yb3V0ZXIuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGxpbmtzLlxuICogSXQgd29ya3Mgd2l0aCByb3V0ZXIgdG9vLiBcbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfbGlua3N9XG4gKiBcbiAqIEB0YWcgYVxuICogQHNlbGVjdG9yIGFbc3RhdGVdOm5vdChbdXJsXSksYVt1cmxdOm5vdChbc3RhdGVdKVxuICogQGF0dHIge3N0cmluZ30gW3VybF0gLSB1cmwgdG8gZ28gb24gY2xpY2tcbiAqIEBhdHRyIHtzdHJpbmd9IFtzdGF0ZV0gLSBzdGF0ZSBvZiByb3V0ZXIgdG8gZ28gb24gY2xpY2sge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nfVxuICogQGF0dHIge29iamVjdH0gW3BhcmFtc10gLSBwYXJhbXMgZm9yIHRoZSBzdGF0ZSB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmcjZG9jc19zdGF0ZV9wYXJhbXN9XG4gKiBAYXR0ciB7b2JqZWN0fSBbcXVlcnldIC0gcXVlcnkgZm9yIHRoZSBzdGF0ZSB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmcjZG9jc19zdGF0ZV9xdWVyeX1cbiAqIEBhdHRyIHtzdHJpbmd9IFtoYXNoXSAtIGhhc2ggZm9yIHRoZSBzdGF0ZSB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmcjZG9jc19zdGF0ZV9oYXNofVxuICogQGF0dHIge29iamVjdH0gW29wdGlvbnNdIC0gb3B0aW9ucyBmb3IgdGhlIHN0YXRlIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3JvdXRlci5sb2NhdGlvbn1cbiAqIEBzY29wZSB7Ym9vbGVhbn0gaXNBY3RpdmVTdGF0ZSAtIHRoZSBzdGF0ZSBpcyBhY3RpdmUgb3Igbm90IFxuICogQHNjb3BlIHtib29sZWFufSBpbkFjdGl2ZVN0YXRlIC0gdGhlIHN0YXRlIGlzIHBhcnQgb2YgdGhlIGFjdGl2ZSBzdGF0ZSBvciBub3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tzdGF0ZV06bm90KFt1cmxdKSxbdXJsXTpub3QoW3N0YXRlXSknO1xuICBzdGF0aWMgY29udHJvbEF0dHJpYnV0ZXMgPSB0cnVlO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdhJywgdGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnN0YXRlID0gbnVsbDtcbiAgICB0aGlzLnBhcmFtcyA9IHt9O1xuICAgIHRoaXMucXVlcnkgPSB7fTtcbiAgICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgICB0aGlzLmlzVXJsID0gdGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ3VybCcpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmICh0aGlzLmlzVXJsKSB7XG4gICAgICAgIHJvdXRlci5sb2NhdGlvbih0aGlzLmF0dHJzLnVybCwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByb3V0ZXIuc3RhdGUodGhpcy5zdGF0ZS5uYW1lLCB0aGlzLnBhcmFtcywgdGhpcy5xdWVyeSwgdGhpcy5oYXNoLCAgdGhpcy5vcHRpb25zKTtcbiAgICB9KTtcblxuICAgIHRoaXMub25TdGF0ZUNoYW5nZWQgPSAoKSA9PiB0aGlzLnN0YXRlICYmIHRoaXMuc2V0QWN0aXZpdHkoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3RhdGUtY2hhbmdlZCcsIHRoaXMub25TdGF0ZUNoYW5nZWQpO1xuXG4gICAgdGhpcy5hdHRyKCdzdGF0ZScsIHRoaXMuc2V0U3RhdGUpO1xuICAgIHRoaXMuYXR0cigncGFyYW1zJywgdGhpcy5zZXRQYXJhbXMpO1xuICAgIHRoaXMuYXR0cigncXVlcnknLCB0aGlzLnNldFF1ZXJ5KTtcbiAgICB0aGlzLmF0dHIoJ2hhc2gnLCB0aGlzLnNldEhhc2gpO1xuICAgIHRoaXMuYXR0cignb3B0aW9ucycsIHRoaXMuc2V0T3B0aW9ucyk7XG4gICAgdGhpcy5hdHRyKCd1cmwnLCB0aGlzLnNldFVybCk7XG4gICAgdGhpcy5hdHRyKCdzdGF0ZScsIHRoaXMucmVzZXRIcmVmLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTtcbiAgICB0aGlzLmF0dHIoJ3BhcmFtcycsIHRoaXMucmVzZXRIcmVmLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTtcbiAgICB0aGlzLmF0dHIoJ3F1ZXJ5JywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cignaGFzaCcsIHRoaXMucmVzZXRIcmVmLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTtcbiAgICB0aGlzLmF0dHIoJ3VybCcsIHRoaXMucmVzZXRIcmVmLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTtcbiAgICB0aGlzLnJlc2V0SHJlZigpO1xuICB9XG5cbiAgcmVtb3ZlZCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3RhdGUtY2hhbmdlZCcsIHRoaXMub25TdGF0ZUNoYW5nZWQpO1xuICB9XG5cbiAgc2V0VXJsKHVybCkge1xuICAgIHRoaXMudXJsID0gdXJsO1xuICB9XG5cbiAgc2V0U3RhdGUobmFtZSkge1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldFN0YXRlKG5hbWUpO1xuICAgIHRoaXMuc2V0QWN0aXZpdHkoKTtcbiAgfVxuXG4gIHNldEFjdGl2aXR5KCkge1xuICAgIHRoaXMuc2NvcGUuaXNBY3RpdmVTdGF0ZSA9IHJvdXRlci5pc0FjdGl2ZVN0YXRlKHRoaXMuc3RhdGUpO1xuICAgIHRoaXMuc2NvcGUuaW5BY3RpdmVTdGF0ZSA9IHJvdXRlci5pbkFjdGl2ZVN0YXRlKHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgc2V0UGFyYW1zKHBhcmFtcykge1xuICAgIGlmICh0eXBlb2YgcGFyYW1zICE9ICdvYmplY3QnIHx8ICFwYXJhbXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIHBhcmFtcyBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICB9XG5cbiAgc2V0UXVlcnkocXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5ICE9ICdvYmplY3QnIHx8ICFxdWVyeSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgcXVlcnkgbXVzdCBiZSBhbiBvYmplY3RgKTtcbiAgICB9XG5cbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gIH1cblxuICBzZXRIYXNoKGhhc2gpIHtcbiAgICBpZiAodHlwZW9mIGhhc2ggIT0gJ3N0cmluZycgJiYgaGFzaCAhPT0gdW5kZWZpbmVkICYmIGhhc2ggIT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIGhhc2ggbXVzdCBiZSBhIHN0cmluZ3xudWxsYCk7XG4gICAgfVxuXG4gICAgdGhpcy5oYXNoID0gaGFzaDtcbiAgfVxuXG4gIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPSAnb2JqZWN0JyB8fCAhb3B0aW9ucykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgb3B0aW9ucyBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBnZXRTdGF0ZShuYW1lKSB7XG4gICAgbGV0IHN0YXRlID0gcm91dGVyLmdldFN0YXRlKG5hbWUpO1xuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgcm91dGVyIHN0YXRlIHdpdGggbmFtZSBcIiR7bmFtZX1cImApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIHJlc2V0SHJlZigpIHtcbiAgICBpZiAodGhpcy51cmwpIHtcbiAgICAgIHRoaXMuYXR0cnMuaHJlZiA9IHRoaXMudXJsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuYXR0cnMuaHJlZiA9IHJvdXRlci5jcmVhdGVTdGF0ZVVybCh0aGlzLnN0YXRlLCB0aGlzLnBhcmFtcywgdGhpcy5xdWVyeSwgdGhpcy5oYXNoLCB0aGlzLm9wdGlvbnMpO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2EuanMiXSwic291cmNlUm9vdCI6IiJ9