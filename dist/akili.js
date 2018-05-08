/*!
 * Akili is a javascript framework
 * 
 * const Akili = makeItEasy(js + html);
 * 
 * @version 0.7.1
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2FmNzE1Njk3YzM1MmIyMjc2ODgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FraWxpLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91cmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9nbG9iYWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JvdXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaWYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JhZGlvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHRhcmVhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5jbHVkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZW1iZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdHJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc291cmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hLmpzIl0sIm5hbWVzIjpbIkFraWxpIiwiX19kZWZhdWx0cyIsInNldERlZmF1bHRzIiwib3B0aW9ucyIsImRlYnVnIiwiX19pbml0IiwiX19jbGVhcmVkIiwiX19jb21wb25lbnRzIiwiX19hbGlhc2VzIiwiX19zY29wZXMiLCJfX3N0b3JlTGlua3MiLCJfX3dpbmRvdyIsIl9faXNvbGF0aW9uIiwiX19ldmFsdWF0aW9uIiwiX193cmFwcGluZyIsIl9fb25FcnJvciIsInRyaWdnZXJJbml0IiwiaHRtbEJvb2xlYW5BdHRyaWJ1dGVzIiwia2V5IiwiZ2xvYmFscyIsInV0aWxzIiwiY29tcG9uZW50cyIsInNlcnZpY2VzIiwiQ29tcG9uZW50IiwiRXZlbnRFbWl0dGVyIiwiU2NvcGUiLCJBIiwiQXVkaW8iLCJDb250ZW50IiwiRm9yIiwiRW1iZWQiLCJJZiIsIkluY2x1ZGUiLCJJbnB1dCIsIklmcmFtZSIsIkltYWdlIiwiT2JqZWN0IiwiT2JqZWN0cyIsIlJhZGlvIiwiUm91dGUiLCJTZWxlY3QiLCJTb3VyY2UiLCJUZXh0IiwiVGV4dGFyZWEiLCJUcmFjayIsIlVybCIsIlZpZGVvIiwicmVxdWVzdCIsInJvdXRlciIsInN0b3JlIiwiZGVmaW5lIiwiZXJyb3JIYW5kbGluZyIsImlzb2xhdGVFdmVudHMiLCJpc29sYXRlQXJyYXlQcm90b3R5cGUiLCJpc29sYXRlV2luZG93RnVuY3Rpb25zIiwiaSIsImwiLCJsZW5ndGgiLCJkZWZhdWx0cyIsImZuIiwicHVzaCIsImNsZWFyR2xvYmFscyIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJBcnJheSIsInVud3JhcCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJzZXRJbnRlcnZhbCIsIlByb21pc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiam9pbkJpbmRpbmdLZXlzIiwia2V5cyIsIm1hcCIsImVsIiwidG9TdHJpbmciLCJqb2luIiwiYWRkU2NvcGUiLCJzY29wZSIsIl9fbmFtZSIsIkVycm9yIiwiZ2V0U2NvcGUiLCJuYW1lIiwicmVtb3ZlU2NvcGUiLCJnZXRBa2lsaVBhcmVudHMiLCJ0cmVlIiwiYXJyIiwiY2hlY2siLCJub2RlIiwicGFyZW50Tm9kZSIsIl9fYWtpbGkiLCJzZXRUZW1wbGF0ZSIsInRlbXBsYXRlIiwicmVwbGFjZSIsImlubmVySFRNTCIsImNyZWF0ZVNjb3BlTmFtZSIsImNyZWF0ZVJhbmRvbVN0cmluZyIsInN0ciIsImlzb2xhdGUiLCJyZXMiLCJwcm9wcyIsImsiLCJoYXNPd25Qcm9wZXJ0eSIsInByb3AiLCJ2YWwiLCJnZXRQcm9wZXJ0eUJ5S2V5cyIsImNvbXBvbmVudCIsIl9fc2NvcGUiLCJfX2lzUmVzb2x2ZWQiLCJfX3RyaWdnZXJTdG9yZUFuZEF0dHIiLCJfX2V2YWx1YXRlQnlLZXlzIiwiaXNEZWxldGVkIiwidW5ldmFsdWF0ZSIsImV2YWx1YXRpb24iLCJ3cmFwcGluZyIsInVuaXNvbGF0ZSIsImlzb2xhdGlvbiIsIm5leHRUaWNrIiwicmVzb2x2ZSIsInRoZW4iLCJpbml0aWFsaXplIiwicmVjb21waWxlIiwiX19yZWNvbXBpbGUiLCJpc1Jvb3QiLCJfX3Jvb3QiLCJjb21wb25lbnROYW1lIiwidG9EYXNoQ2FzZSIsImdldEF0dHJpYnV0ZSIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsIl9Db21wb25lbnQiLCJDSEVDS19BTElBU0VTIiwic2VsZWN0b3JzIiwic2VsZWN0b3JBbGwiLCJtYXRjaGVzIiwic2VsZWN0b3IiLCJfX2NhbmNlbGxlZCIsImZpbmQiLCJwIiwiX19wcmV2ZW50IiwiX19jcmVhdGUiLCJjb21waWxlIiwicm9vdCIsImVsZW1lbnRzIiwibmVzdGVkSW5pdGlhbGl6aW5nIiwiY2hpbGRyZW4iLCJjaGlsZCIsIl9fY29tcGlsZSIsImFsbCIsInIiLCJfX3Jlc29sdmUiLCJjb25zb2xlIiwid2FybiIsInJlbW92ZUNvbXBvbmVudCIsImFsaWFzIiwicmVtb3ZlQWxpYXMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwib2xkIiwiX19pc1Byb3h5IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJjcmVhdGVDYWxsYmFja0lzb2xhdGlvbiIsIkFLSUxJX1NTUiIsImNvbnN0cnVjdG9yIiwiY2F0Y2giLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwiX19ha2lsaUxpc3RlbmVycyIsImFyZ3MiLCJzbGljZSIsImNhbGwiLCJsaW5rIiwibGlzdGVuZXIiLCJzcGxpY2UiLCJwb3MiLCJpc0FycmF5IiwibnVtIiwiaW5kZXgiLCJjYWxsYmFjayIsIl9faXNvbGF0ZWQiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJ2YWx1ZSIsIndyYXAiLCJvYmoiLCJjdXJyZW50Iiwid3JhcEZ1bmN0aW9uIiwiYyIsImRlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsInJldmVyc2UiLCJha2lsaVdyYXBwZWRGdW5jdGlvbiIsInRhZyIsIl9fYWRkVGFnIiwiZXZhbHVhdGVUYWciLCJ0YWdzIiwiY2hpbGRUYWdzIiwiX190YWdzIiwiaiIsInMiLCJfX2V2YWx1YXRlTm9kZSIsInJlbW92ZVRhZyIsIl9fcmVtb3ZlVGFnIiwic3RhdHVzIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiaW5pdCIsImRvY3VtZW50IiwiYm9keSIsImRvY3VtZW50RWxlbWVudCIsIkFLSUxJX1NFUlZFUiIsImluaXRTZXJ2ZXJTaWRlSHRtbCIsImh0bWwiLCJpbml0U2VydmVyU2lkZVJlcXVlc3RDYWNoZSIsInJlcXVlc3RDYWNoZSIsIkFLSUxJX0NMSUVOVCIsInByZXBhcmVTZXJ2ZXJTaWRlSHRtbCIsImNoYW5nZVN0YXRlIiwicHJlcGFyZVNlcnZlclNpZGVSZXF1ZXN0Q2FjaGUiLCJlcnIiLCJhdHRyaWJ1dGVzIiwicmVtb3ZlQXR0cmlidXRlIiwicGFyc2VyIiwiRE9NUGFyc2VyIiwiZG9jIiwicGFyc2VGcm9tU3RyaW5nIiwicXVlcnlTZWxlY3RvciIsImF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJpbnN0YW5jZSIsIl9fY2FjaGUiLCJfX2luc3RhbmNlcyIsIm91dGVySFRNTCIsImNhY2hlIiwiX19tYWluIiwiZGVpbml0Iiwic3RvcmVLZXlzIiwiX190YXJnZXQiLCJjbGFzcyIsImNsYXNzZXMiLCJzdHlsZSIsInN0eWxlcyIsInNwbGl0IiwiZGVsIiwiZXhjbHVkZSIsImV4cHMiLCJsYXN0IiwiUmVnRXhwIiwiaW5kZXhPZiIsIm9wZW4iLCJmaWx0ZXIiLCJoYW5kbGVyIiwibWF0Y2giLCJpdGVtIiwiZmlsdGVyZWQiLCJzb3J0Iiwib3JkZXIiLCJhIiwiYiIsIkRhdGUiLCJnZXRUaW1lIiwibmV4dCIsImFWIiwiYlYiLCJpbmNsdWRlS2V5cyIsIm5ld09iaiIsIm9iaktleXMiLCJleGNsdWRlS2V5cyIsImlzU2NvcGVQcm94eSIsImlzUGxhaW5PYmplY3QiLCJjb3B5IiwibmVzdGVkIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJtYWtlQXR0cmlidXRlVmFsdWUiLCJ1bmRlZmluZWQiLCJjb21wYXJlIiwiY2xlYXJVbmRlZmluZWQiLCJpZ25vcmVVbmRlZmluZWQiLCJhS2V5cyIsImJLZXlzIiwiY29tcGFyZVByZXZpb3VzVmFsdWUiLCJwcmV2aW91cyIsInByZXZpb3VzQ29weSIsImVuY29kZUh0bWxFbnRpdGllcyIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlY29kZUh0bWxFbnRpdGllcyIsInRvQ2FtZWxDYXNlIiwibSIsInRvVXBwZXJDYXNlIiwiY2FwaXRhbGl6ZSIsIm9iamVjdCIsInJlZHVjZSIsIm8iLCJoYXNQcm9wZXJ0eUJ5S2V5cyIsImhhcyIsInNldFByb3BlcnR5QnlLZXlzIiwiZGVsZXRlUHJvcGVydHlCeUtleXMiLCJnZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQiLCJ0YXJnZXQiLCJwcm90byIsImdldFByb3RvdHlwZU9mIiwiZ2V0T3duUHJvcGVydHlUYXJnZXQiLCJNYXRoIiwicmFuZG9tIiwic3Vic3RyaW5nIiwidXJsQXR0cmlidXRlIiwic2V0VXJsIiwidXJsIiwiYXR0cnMiLCJldmFsdWF0aW9uUmVnZXgiLCJldmFsdWF0aW9uUmVnZXhHbG9iYWwiLCJzb3VyY2UiLCJzeXN0ZW1BdHRyaWJ1dGVzIiwiY29udGV4dCIsImV4cHJlc3Npb24iLCJ2YXJpYWJsZXMiLCJ2YXJzIiwiRnVuY3Rpb24iLCJfX2lzTW91bnRlZCIsIl9faXNDb21waWxlZCIsIl9fYmluZGluZ3MiLCJfX2V2YWx1YXRpbmdFdmVudCIsIl9fcmVjb21waWxpbmciLCJfX2NvbXBpbGluZyIsIl9fZGlzYWJsZVByb3h5IiwiX19kaXNhYmxlU3RvcmVLZXlzIiwiX19kaXNhYmxlQXR0cktleXMiLCJfX2NoaWxkcmVuIiwiX19wYXJlbnQiLCJfX3BhcmVudHMiLCJfX2F0dHJzIiwiX19hdHRyTGlua3MiLCJfX2F0dHJpYnV0ZU9mIiwiX19ldmFsdWF0aW9uQ29tcG9uZW50IiwiY2hlY2tDaGFuZ2VzIiwic2V0RXZlbnRzIiwic2V0UGFyZW50cyIsInNldEJvb2xlYW5BdHRyaWJ1dGVzIiwiZGVmaW5lQXR0cmlidXRlcyIsIl9fY3JlYXRlQ29tcGlsYXRpb25PcHRpb25zIiwiX19jcmVhdGVSZWNvbXBpbGF0aW9uT3B0aW9ucyIsIl9fc2V0RXZlbnRzIiwiX19zZXRQYXJlbnRzIiwiX19zZXRCb29sZWFuQXR0cmlidXRlcyIsIl9fZGVmaW5lQXR0cmlidXRlcyIsIl9faW5pdGlhbGl6ZSIsImNyZWF0ZWQiLCJjb250cm9sIiwiX19jb250cm9sQXR0cmlidXRlcyIsIl9fZXZhbHVhdGVQYXJlbnQiLCJuZXdQYXJlbnQiLCJfX2ludGVycG9sYXRlQXR0cmlidXRlcyIsImludGVycG9sYXRlIiwicGFyZW50Iiwibm9kZVR5cGUiLCJfX2luaXRpYWxpemVOb2RlIiwiY2hpbGROb2RlcyIsIm9uQ29tcGlsZWQiLCJ0cmlnZ2VyIiwiYnViYmxlcyIsImNvbXBpbGVkIiwidGVtcGxhdGVVcmwiLCJnZXQiLCJ0ZW1wbGF0ZUNhY2hlIiwiX19jb250ZW50IiwiZGF0YSIsIm9uUmVjb21waWxlZCIsInJlY29tcGlsZWQiLCJvblJlc29sdmVkIiwicmVzb2x2ZWQiLCJfc2NvcGUiLCJhc3NpZ24iLCJjb250cm9sQXR0cmlidXRlcyIsImV2ZW50cyIsIl9fZXZlbnRzIiwiX19zYXZlQXR0cmlidXRlUHJveHlJbiIsInNhdmVBdHRyaWJ1dGVQcm94eUluIiwiX19zYXZlQXR0cmlidXRlUHJveHlPdXQiLCJzYXZlQXR0cmlidXRlUHJveHlPdXQiLCJfX25lc3RlZE9ic2VydmUiLCJib29sZWFuQXR0cmlidXRlcyIsImNvbmNhdCIsInNldEF0dHIiLCJub2RlTmFtZSIsImhhc0F0dHJpYnV0ZSIsImV2IiwidGVzdCIsInBhcmVudHMiLCJldmFsdWF0ZVBhcmVudCIsInRyYW5zcGFyZW50IiwiX19kZXRhY2giLCJfX2FkZENoaWxkIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3BlcnRpZXMiLCJfX2dldE5vZGVQcm9wZXJ0eSIsIl9fY29tcG9uZW50IiwiYXR0ck5hbWUiLCJlbGVtZW50TmFtZSIsIl9fZWxlbWVudCIsImF0dHJpYnV0ZU5hbWUiLCJBdHRyIiwibWVzc2FnZXMiLCJtZXNzYWdlIiwiX19leHByZXNzaW9uIiwiY291bnRlciIsImF0dHJpYnV0ZVZhbHVlIiwiZXZhbENvbXBvbmVudCIsImNvbSIsImQiLCJldmFsdWF0ZSIsImV4aXN0aW5nQmluZGluZ3MiLCJwYXJlbnRCaW5kaW5ncyIsInBhcnNlVmFsdWUiLCJfX2dldFBhcnNlZEV4cHJlc3Npb24iLCJsaXN0IiwicGFyc2UiLCJfX2NyZWF0ZUV4Y2VwdGlvbk1lc3NhZ2UiLCJoYXNoIiwiX19jcmVhdGVLZXlzSGFzaCIsInBhcmVudHNIYXNoIiwibm90QmluZGluZyIsInBhcmVudFZhbHVlIiwicmVhbENvbXBvbmVudCIsIl9fYmluZEFuZFNldFByb3BlcnR5IiwiZXZhbHVhdGVkIiwiSlNPTiIsInN0cmluZ2lmeSIsImUiLCJiaW5kIiwiX19nZXRCb3VuZE5vZGUiLCJfX2JpbmQiLCJfX3NldE5vZGVQcm9wZXJ0eSIsIndpdGhvdXRQYXJlbnRzIiwibGFzdFByb3BzIiwicHJvcHNMZW5ndGgiLCJlbEV2YWx1YXRlIiwiZWxlbWVudCIsIl9fZ2V0QmluZCIsIl9fZGF0YSIsIl9fZ2V0QWxsQmluZHMiLCJfX2NoZWNrTm9kZVByb3BlcnR5Q2hhbmdlIiwiX19kaXNhYmxlS2V5cyIsImNoZWNrUHJvcCIsIl9fc2V0IiwiX2siLCJfcHJvcCIsIl9fZW5hYmxlS2V5cyIsInVuYmluZCIsIl9faXNTeXN0ZW1CaW5kaW5nS2V5IiwiX2tleXMiLCJfX2tleXMiLCJfaXNEZWxldGVkIiwiaGFzS2V5Iiwic2hpZnQiLCJfX2V2YWx1YXRlTmVzdGVkIiwiX191bmJpbmQiLCJleGVjIiwiZXZlbnQiLCJfX2NoZWNrRXZhbHVhdGlvbiIsIl9fZXZhbHVhdGUiLCJpc0Jvb2xlYW5BdHRyaWJ1dGUiLCJjbGVhckF0dHJpYnV0ZSIsImNhbWVsQXR0cmlidXRlIiwiX19hdHRyaWJ1dGVPbiIsIl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciIsIl9fYXR0clRyaWdnZXJCeU5hbWUiLCJhdHRyaWJ1dGVPZiIsImV2ZW50TmFtZSIsIl9fZXZlbnQiLCJlbWl0dGVyIiwiX19ldmFsdWF0ZUV2ZW50IiwiX19pbml0aWFsaXplZCIsInRyaW0iLCJoYXNCaW5kaW5nIiwiaXNCb29sZWFuIiwiaXNFdmVudCIsIl9faXNFdmVudCIsIl9faGFzQmluZGluZ3MiLCJfX2lzQm9vbGVhbiIsIl9fdW5iaW5kQnlOb2RlcyIsIl9faW5pdGlhbGl6ZUF0dHJpYnV0ZSIsImNoYW5nZUF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZU5vZGUiLCJfX2RlaW5pdGlhbGl6ZU5vZGUiLCJQcm94eSIsInNldCIsImF0dHJLZXkiLCJkZWxldGVQcm9wZXJ0eSIsIl9faXNTeXN0ZW1LZXkiLCJleGNBcnIiLCJyZWFsVGFyZ2V0IiwiZm9yUGFyZW50cyIsImZvckRhdGEiLCJwb3AiLCJfX2JpbmROb2RlIiwiX19jaGVja0Rpc2FibGVtZW50IiwiQ0hFQ0tfRVhJU1RFTkNFIiwidGFyZ2V0UGFyZW50VmFsdWUiLCJfX2NyZWF0ZUlzb2xhdGlvbk9iamVjdCIsImtleVN0cmluZyIsIl9fc3RvcmVUcmlnZ2VyQnlLZXlzIiwiX19hdHRyVHJpZ2dlckJ5S2V5cyIsInR5cGUiLCJwcm94eSIsIl9fZ2V0RGlzYWJsZW1lbnRUeXBlU3RvcmUiLCJfX2FsbCIsImxpbmtzIiwiX19zdG9yZVRyaWdnZXJCeU5hbWUiLCJpbmZvIiwiZGF0ZSIsIm5vdyIsImNhbGxPblN0YXJ0IiwiYXR0cnNLZXlzIiwic3RhcnRLZXlzIiwib2JzZXJ2ZSIsIkNIRUNLX1BST1hZIiwiX19kaXNhYmxlUHJveHlSZWRlZmluaW5nIiwiX19vYnNlcnZlIiwiaXNvbGF0aW9uSGFzaCIsInVwZGF0ZWRBdCIsInBhcmVudEtleXNTdHJpbmciLCJrZXlzU3RyaW5nIiwiY29sbGVjdCIsIl9faGFzVGFnIiwiX19kZWxldGVOb2RlUHJvcGVydHkiLCJub2RlcyIsIl9fY2xlYXJFbXB0eUJpbmRpbmdzIiwiY2xlYXIiLCJfX3JlbW92ZSIsIl9fY2xlYXJTdG9yZUxpbmtzIiwib25SZW1vdmVkIiwicmVtb3ZlZCIsIl9fc3BsaWNlQ2hpbGQiLCJfX3JlbW92ZUNoaWxkcmVuIiwiZmluZEFsbCIsImxldmVscyIsImxldmVsIiwicmlnaHQiLCJsZXZlbEVsZW1lbnRzIiwidW5zaGlmdCIsIl9fc3RvcmVCeUZ1bmN0aW9uIiwiX19zdG9yZUJ5S2V5cyIsIl9fYXR0ckJ5RnVuY3Rpb24iLCJfX2F0dHJCeUtleXMiLCJfX3Vuc3RvcmVCeUZ1bmN0aW9uIiwiX191bnN0b3JlQnlLZXlzIiwiX191bmF0dHJCeUZ1bmN0aW9uIiwiX191bmF0dHJCeUtleXMiLCJfX2dldFBhcmVudCIsIl9fZ2V0Q2hpbGRyZW4iLCJfX2dldE5lYXIiLCJhcHBlbmRDaGlsZCIsIl9fZW1wdHkiLCJfX2Rlc3Ryb3kiLCJSZXF1ZXN0IiwiYmFzZVVybCIsImdldEhlYWRlcnMiLCJ4aHIiLCJoZWFkZXJzIiwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIiwibGluZSIsInN0YXR1c0Vycm9yUGF0dGVybiIsInJlamVjdCIsIm1ldGhvZCIsIlhNTEh0dHBSZXF1ZXN0IiwiYmVmb3JlIiwidHJhbnNmb3JtQmVmb3JlIiwib25TdGFydCIsImpzb24iLCJyZXNwb25zZVR5cGUiLCJmb3JtIiwiY3JlYXRlRm9ybURhdGEiLCJwYXJhbXMiLCJwYXJhbXNUb1F1ZXJ5IiwiY3JlYXRlQ2FjaGVIYXNoIiwidXNlciIsInBhc3N3b3JkIiwiX2NhY2hlIiwiZ2V0Q2FjaGUiLCJjcmVhdGVkQXQiLCJ0cmFuc2Zvcm1BZnRlciIsInJlc3VsdCIsInRpbWVvdXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJoZWFkZXJLZXlzIiwic2V0UmVxdWVzdEhlYWRlciIsIm9uUHJvZ3Jlc3MiLCJvbnByb2dyZXNzIiwib25sb2FkIiwicmVzcG9uc2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzVGV4dCIsInJlc3BvbnNlVGV4dCIsInJlc3BvbnNlWE1MIiwicmVzcG9uc2VVUkwiLCJjcmVhdGVDYWNoZSIsIm9udGltZW91dCIsIm9uZXJyb3IiLCJzZW5kIiwiY2hhciIsImNoYXJDb2RlQXQiLCJzZXAiLCJlcSIsImtzIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidiIsIm9wdCIsInF1ZXJ5IiwiYW1wcyIsImVxcyIsImRlY29kZVVSSUNvbXBvbmVudCIsIm5hbWVzcGFjZSIsImZkIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ0b0lTT1N0cmluZyIsImFkZEluc3RhbmNlIiwicmVtb3ZlSW5zdGFuY2UiLCJ2YWx1ZUtleSIsImRlYm91bmNlSW50ZXJ2YWwiLCJkZWJvdW5jZVRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJvbkRlYm91bmNlIiwic2V0Rm9jdXMiLCJzZXRWYWx1ZSIsInNldERlYm91bmNlIiwiaW50ZXJ2YWwiLCJzZXRFbGVtZW50Rm9jdXMiLCJzZXRFbGVtZW50Qmx1ciIsImZvY3VzIiwiYmx1ciIsIkxvb3AiLCJpdGVyYXRvcnMiLCJpdGVyYXRvclJlZiIsIml0ZXJhdG9yT3V0ZXJIVE1MIiwicmVzZXQiLCJjcmVhdGVJdGVyYXRvciIsImRyYXciLCJtYXNrIiwibmV4dFNpYmxpbmciLCJjb250ZW50IiwiZmlyc3RDaGlsZCIsIl9faW5kZXgiLCJfX2tleSIsIl9fdmFsdWUiLCJfX2NvbXBhcmlzb25WYWx1ZSIsIml0ZXJhdG9yIiwiY0NvcHkiLCJjb21wYXJzaW9uIiwic2V0SW5kZXgiLCJzZXRLZXkiLCJfX3Byb21pc2VzIiwiY3JlYXRlSXRlcmF0b3JFbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwibG9vcCIsIml0ZXJhdGUiLCJvbk91dCIsIl9faXRlcmF0b3IiLCJmb3IiLCJpc0ZvciIsImNhbmNlbCIsIl9fZWwiLCJzdHJpY3QiLCJlbENvbXBvbmVudCIsImZvcmNlIiwiaW5FdmFsdWF0aW5nIiwicHJlcGFyZU9wdGlvbnMiLCJfRXZlbnQiLCJ0cmFuc2l0aW9uIiwic3RhdGUiLCJwYXRoIiwiZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uIiwiX190cmFuc2l0aW9uIiwiZW1wdHkiLCJleGlzdHMiLCJsb2FkZWQiLCJUcmFuc2l0aW9uIiwicm91dGVzIiwic3RhdGVzIiwicmVkaXJlY3QiLCJyb3V0ZSIsImhhc1N0YXRlIiwicGFyYW1LZXlzIiwiZnVsbFBhdHRlcm4iLCJfX3BhcmFtUmVnZXgiLCJmIiwicXVlcnlLZXlzIiwid2F0Y2hIYXNoIiwicHJldlJvdXRlIiwiZ2V0Um91dGUiLCJwcmV2IiwiaGFzaE1vZGUiLCJfX3JlZGlyZWN0cyIsIl9fb3B0aW9ucyIsIl9fcm91dGVTZWxlY3RvciIsImFkZCIsInBhdHRlcm4iLCJkZWZhdWx0T3B0aW9ucyIsImFic3RyYWN0Iiwic2V0U3RhdGUiLCJnZXRTdGF0ZSIsInByZXBhcmVTdGF0ZUFyZ3MiLCJjcmVhdGVTdGF0ZVVybCIsImhhc2hJc051bGwiLCJtYW51YWwiLCJiYWNrIiwiaGlzdG9yeSIsImdvIiwiZm9yd2FyZCIsImxvY2F0aW9uIiwicmVsb2FkIiwicHVzaFN0YXRlIiwiZGVmYXVsdFVybCIsIm9sZFB1c2hTdGF0ZSIsImVycm9yIiwiX19vblN0YXRlQ2hhbmdlSGFuZGxlciIsImluaXRTdGF0ZSIsInBhcmVudE5hbWUiLCJzcGxpdFNsYXNoZXMiLCJyZW1vdmVTdGF0ZSIsInNldEhhc2hVcmwiLCJzZXRIaXN0b3J5VXJsIiwiZ2V0VXJsIiwiZ2V0SGFzaFVybCIsImdldEhpc3RvcnlVcmwiLCJwYXRobmFtZSIsInNlYXJjaCIsImdldFVybFF1ZXJ5IiwiZ2V0SGFzaFVybFF1ZXJ5IiwiZ2V0SGlzdG9yeVVybFF1ZXJ5IiwicGFyYW1zRnJvbVF1ZXJ5IiwicHJlcGFyZSIsInBhcmFtc1RlbXAiLCJwcmVwYXJlU3RhdGVQYXJhbXMiLCJxdWVyeVRlbXAiLCJwcmVwYXJlU3RhdGVRdWVyeSIsImhhc2hUZW1wIiwicHJlcGFyZVN0YXRlSGFzaCIsImNyZWF0ZVN0YXRlQXJncyIsImV4Y2x1ZGVkIiwiZ2V0UGF0dGVybkNvbnRlbnQiLCJ1cmxQYXR0ZXJuIiwicmVnZXgiLCJpc0luY2x1ZGVkIiwiaXNBY3RpdmVTdGF0ZSIsImluY2x1ZGVzIiwiaW5BY3RpdmVTdGF0ZSIsImdldEFycmF5UGF0dGVybkNvbnRlbnQiLCJnZXRTdGF0ZXNCeUxldmVsIiwicHJldlRyYW5zaXRpb24iLCJvbkVuZCIsInNldFBhdGgiLCJjdXJyZW50VXJsIiwicmVhbFVybCIsImlzRGlmZmVyZW50IiwiaXNSb3V0ZUNoYW5nZWQiLCJ0aXRsZSIsInNldFRyYW5zaXRpb24iLCJzYXZlU2Nyb2xsUG9zaXRpb24iLCJzY3JvbGxUbyIsIkVsc2VJZiIsIkVsc2UiLCJhY3RpdmUiLCJyZWNyZWF0ZSIsImlzQ29tcGlsZWQiLCJkaXNwbGF5IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInNldFJlY3JlYXRpb24iLCJjb21waWxhdGlvbiIsIm5leHRFbGVtZW50U2libGluZyIsInNldEFjdGl2aXR5Iiwic2V0UHJvcGVydHkiLCJPcHRpb24iLCJpdGVyYXRvclRhZ05hbWUiLCJpc011bHRpcGxlIiwiZ2V0Q29udGVudCIsInNldE11bHRpcGxlIiwic2V0Q29udGVudCIsImRyYXdTZWxlY3QiLCJjaGFuZ2VWYWx1ZSIsImZvcm1hdFZhbHVlIiwic2VsZWN0ZWQiLCJvcHRpb24iLCJzZWxlY3Rpb24iLCJyZWRlZmluZSIsIm9uQ2hhbmdlIiwiZGlzcGF0Y2giLCJFdmVudCIsInNldFNlbGVjdGVkIiwiaXNDaGVja2JveCIsImlzUmFkaW8iLCJzZXRDaGVja2VkIiwiY2hlY2tlZCIsImNoYW5nZVJhZGlvIiwicmFkaW8iLCJSYWRpb0J1dHRvbiIsIml0ZXJhYmxlIiwiZ2V0UmFkaW9WYWx1ZSIsInByZXZWYWx1ZSIsIm9uUmFkaW8iLCJzZXROYW1lcyIsImlzVHJ1ZSIsImlzU2VsZWN0ZWQiLCJyYW5nZSIsImNyZWF0ZVJhbmdlIiwiZ2V0U2VsZWN0aW9uIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwiY29sbGFwc2UiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsImNvbm5lY3Rpb24iLCJzZXRDYWNoZSIsImFib3J0Iiwib25Mb2FkIiwib25FcnJvciIsImlzVXJsIiwicHJldmVudERlZmF1bHQiLCJvblN0YXRlQ2hhbmdlZCIsInNldFBhcmFtcyIsInNldFF1ZXJ5Iiwic2V0SGFzaCIsInNldE9wdGlvbnMiLCJyZXNldEhyZWYiLCJocmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7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QU47QUFDRDs7QUFFRCxhQUFPK2tCLEtBQVA7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBSSxLQUFLMVcsR0FBVCxFQUFjO0FBQ1osYUFBS0MsS0FBTCxDQUFXbWdCLElBQVgsR0FBa0IsS0FBS3BnQixHQUF2QjtBQUNELE9BRkQsTUFHSztBQUNILGFBQUtDLEtBQUwsQ0FBV21nQixJQUFYLEdBQWtCM3dCLGlCQUFPa3BCLGNBQVAsQ0FBc0IsS0FBS2pDLEtBQTNCLEVBQWtDLEtBQUtqRyxNQUF2QyxFQUErQyxLQUFLbUMsS0FBcEQsRUFBMkQsS0FBSzlMLElBQWhFLENBQWxCO0FBQ0Q7QUFDRjs7OztFQW5INEI5WSxtQjs7QUFBVkcsQyxDQUNaNEcsTyxHQUFVLHVDO0FBREU1RyxDLENBRVo4VixpQixHQUFvQixJO2tCQUZSOVYsQyIsImZpbGUiOiJha2lsaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDNhZjcxNTY5N2MzNTJiMjI3Njg4IiwiLyoqXG4gKiBKYXZhc2NyaXB0IGZyYW1ld29ya1xuICpcbiAqIGNvbnN0IEFraWxpID0gbWFrZUl0RWFzeShqcyArIGh0bWwpO1xuICpcbiAqIEBhdXRob3IgQWxleGFuZHIgQmFsYXN5YW4gPG15d2Vic3RyZWV0QGdtYWlsLmNvbT5cbiAqIEBsaW5rIGh0dHA6Ly9ha2lsaWpzLmNvbVxuICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IElmIGZyb20gJy4vY29tcG9uZW50cy9pZi5qcyc7XG5pbXBvcnQgRm9yIGZyb20gJy4vY29tcG9uZW50cy9mb3IuanMnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL2NvbXBvbmVudHMvc2VsZWN0LmpzJztcbmltcG9ydCBJbnB1dCBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQuanMnO1xuaW1wb3J0IFJhZGlvIGZyb20gJy4vY29tcG9uZW50cy9yYWRpby5qcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL2NvbXBvbmVudHMvdGV4dC5qcyc7XG5pbXBvcnQgVGV4dGFyZWEgZnJvbSAnLi9jb21wb25lbnRzL3RleHRhcmVhLmpzJztcbmltcG9ydCBDb250ZW50IGZyb20gJy4vY29tcG9uZW50cy9jb250ZW50LmpzJztcbmltcG9ydCBJbmNsdWRlIGZyb20gJy4vY29tcG9uZW50cy9pbmNsdWRlLmpzJztcbmltcG9ydCBJZnJhbWUgZnJvbSAnLi9jb21wb25lbnRzL2lmcmFtZS5qcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9jb21wb25lbnRzL2ltYWdlLmpzJztcbmltcG9ydCBFbWJlZCBmcm9tICcuL2NvbXBvbmVudHMvZW1iZWQuanMnO1xuaW1wb3J0IEF1ZGlvIGZyb20gJy4vY29tcG9uZW50cy9hdWRpby5qcyc7XG5pbXBvcnQgVmlkZW8gZnJvbSAnLi9jb21wb25lbnRzL3ZpZGVvLmpzJztcbmltcG9ydCBUcmFjayBmcm9tICcuL2NvbXBvbmVudHMvdHJhY2suanMnO1xuaW1wb3J0IFNvdXJjZSBmcm9tICcuL2NvbXBvbmVudHMvc291cmNlLmpzJztcbmltcG9ydCBPYmplY3RzIGZyb20gJy4vY29tcG9uZW50cy9vYmplY3QuanMnO1xuaW1wb3J0IFJvdXRlIGZyb20gJy4vY29tcG9uZW50cy9yb3V0ZS5qcyc7XG5pbXBvcnQgVXJsIGZyb20gJy4vY29tcG9uZW50cy91cmwuanMnO1xuaW1wb3J0IEEgZnJvbSAnLi9jb21wb25lbnRzL2EuanMnO1xuaW1wb3J0IFNjb3BlIGZyb20gJy4vc2NvcGUuanMnO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXIuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9zZXJ2aWNlcy9yZXF1ZXN0LmpzJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9zZXJ2aWNlcy9yb3V0ZXIuanMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc2VydmljZXMvc3RvcmUuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IGdsb2JhbHMgZnJvbSAnLi9nbG9iYWxzLmpzJztcblxuLyoqXG4gKiBUaGUgZnJhbWV3b3JrIG9iamVjdFxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2dldHRpbmctc3RhcnRlZH1cbiAqL1xuY29uc3QgQWtpbGkgPSB7fTtcblxuQWtpbGkuX19kZWZhdWx0cyA9IFtdO1xuXG4vKipcbiAqIFNldCB0aGUgZnJhbWV3b3JrJ3MgZGVmYXVsdCB2YXJpYWJsZXNcbiAqL1xuQWtpbGkuc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMub3B0aW9ucyA9IHtcbiAgICBkZWJ1ZzogdHJ1ZVxuICB9O1xuICBcbiAgdGhpcy5fX2luaXQgPSBudWxsO1xuICB0aGlzLl9fY2xlYXJlZCA9IGZhbHNlO1xuICB0aGlzLl9fY29tcG9uZW50cyA9IHt9O1xuICB0aGlzLl9fYWxpYXNlcyA9IHt9O1xuICB0aGlzLl9fc2NvcGVzID0ge307XG4gIHRoaXMuX19zdG9yZUxpbmtzID0ge307XG4gIHRoaXMuX193aW5kb3cgPSB7fTtcbiAgdGhpcy5fX2lzb2xhdGlvbiA9IG51bGw7XG4gIHRoaXMuX19ldmFsdWF0aW9uID0gbnVsbDtcbiAgdGhpcy5fX3dyYXBwaW5nID0gZmFsc2U7XG4gIHRoaXMuX19vbkVycm9yID0gKCkgPT4gdGhpcy50cmlnZ2VySW5pdChmYWxzZSk7XG4gIFxuICB0aGlzLmh0bWxCb29sZWFuQXR0cmlidXRlcyA9IFtcbiAgICAnZGlzYWJsZWQnLCAnY29udGVudGVkaXRhYmxlJywgJ2hpZGRlbidcbiAgXTtcblxuICBmb3IobGV0IGtleSBpbiBnbG9iYWxzKSB7XG4gICAgZGVsZXRlIGdsb2JhbHNba2V5XTtcbiAgfVxuXG4gIGdsb2JhbHMudXRpbHMgPSB1dGlscztcblxuICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcbiAgdGhpcy5zZXJ2aWNlcyA9IHt9O1xuXG4gIHRoaXMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuICB0aGlzLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcbiAgdGhpcy5TY29wZSA9IFNjb3BlO1xuICB0aGlzLnV0aWxzID0gdXRpbHM7XG4gIHRoaXMuZ2xvYmFscyA9IGdsb2JhbHM7XG4gIHRoaXMuY29tcG9uZW50cy5BID0gQTtcbiAgdGhpcy5jb21wb25lbnRzLkF1ZGlvID0gQXVkaW87XG4gIHRoaXMuY29tcG9uZW50cy5Db250ZW50ID0gQ29udGVudDtcbiAgdGhpcy5jb21wb25lbnRzLkZvciA9IEZvcjtcbiAgdGhpcy5jb21wb25lbnRzLkVtYmVkID0gRW1iZWQ7XG4gIHRoaXMuY29tcG9uZW50cy5JZiA9IElmO1xuICB0aGlzLmNvbXBvbmVudHMuSW5jbHVkZSA9IEluY2x1ZGU7XG4gIHRoaXMuY29tcG9uZW50cy5JbnB1dCA9IElucHV0O1xuICB0aGlzLmNvbXBvbmVudHMuSWZyYW1lID0gSWZyYW1lO1xuICB0aGlzLmNvbXBvbmVudHMuSW1hZ2UgPSBJbWFnZTtcbiAgdGhpcy5jb21wb25lbnRzLk9iamVjdCA9IE9iamVjdHM7XG4gIHRoaXMuY29tcG9uZW50cy5SYWRpbyA9IFJhZGlvO1xuICB0aGlzLmNvbXBvbmVudHMuUm91dGUgPSBSb3V0ZTtcbiAgdGhpcy5jb21wb25lbnRzLlNlbGVjdCA9IFNlbGVjdDtcbiAgdGhpcy5jb21wb25lbnRzLlNvdXJjZSA9IFNvdXJjZTtcbiAgdGhpcy5jb21wb25lbnRzLlRleHQgPSBUZXh0O1xuICB0aGlzLmNvbXBvbmVudHMuVGV4dGFyZWEgPSBUZXh0YXJlYTtcbiAgdGhpcy5jb21wb25lbnRzLlRyYWNrID0gVHJhY2s7XG4gIHRoaXMuY29tcG9uZW50cy5VcmwgPSBVcmw7XG4gIHRoaXMuY29tcG9uZW50cy5WaWRlbyA9IFZpZGVvO1xuICB0aGlzLnNlcnZpY2VzLnJlcXVlc3QgPSByZXF1ZXN0O1xuICB0aGlzLnNlcnZpY2VzLnJvdXRlciA9IHJvdXRlcjtcbiAgdGhpcy5zZXJ2aWNlcy5zdG9yZSA9IHN0b3JlO1xuXG4gIHRoaXMuZGVmaW5lKCk7XG4gIHRoaXMuZXJyb3JIYW5kbGluZygpO1xuICB0aGlzLmlzb2xhdGVFdmVudHMoKTtcbiAgdGhpcy5pc29sYXRlQXJyYXlQcm90b3R5cGUoKTtcbiAgdGhpcy5pc29sYXRlV2luZG93RnVuY3Rpb25zKCk7IFxuICBcbiAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuX19kZWZhdWx0cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB0aGlzLl9fZGVmYXVsdHNbaV0oKTtcbiAgfVxufVxuXG4vKipcbiAqIERlZmluZSBhbGwgZGVmYXVsdCBjb21wb25lbnRzXG4gKi9cbkFraWxpLmRlZmluZSA9IGZ1bmN0aW9uICgpIHtcbiAgQS5kZWZpbmUoKTtcbiAgQXVkaW8uZGVmaW5lKCk7XG4gIENvbnRlbnQuZGVmaW5lKCk7XG4gIENvbXBvbmVudC5kZWZpbmUoKTtcbiAgRW1iZWQuZGVmaW5lKCk7XG4gIEZvci5kZWZpbmUoKTtcbiAgSW5jbHVkZS5kZWZpbmUoKTtcbiAgSWZyYW1lLmRlZmluZSgpO1xuICBJbWFnZS5kZWZpbmUoKTtcbiAgSW5wdXQuZGVmaW5lKCk7XG4gIElmLmRlZmluZSgpO1xuICBPYmplY3RzLmRlZmluZSgpO1xuICBSYWRpby5kZWZpbmUoKTtcbiAgUm91dGUuZGVmaW5lKCk7XG4gIFNlbGVjdC5kZWZpbmUoKTtcbiAgU291cmNlLmRlZmluZSgpO1xuICBUZXh0YXJlYS5kZWZpbmUoKTtcbiAgVHJhY2suZGVmaW5lKCk7XG4gIFZpZGVvLmRlZmluZSgpO1xufTtcblxuLyoqXG4gKiBTZXQgZGVmYXVsdHNcbiAqIFxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gXG4gKi9cbkFraWxpLmRlZmF1bHRzID0gZnVuY3Rpb24gKGZuKSB7ICBcbiAgdGhpcy5fX2RlZmF1bHRzLnB1c2goZm4pO1xuICBmbigpO1xufVxuXG4vKipcbiAqIENsZWFyIHRoZSBnbG9iYWwgY29udGV4dFxuICovXG5Ba2lsaS5jbGVhckdsb2JhbHMgPSBmdW5jdGlvbiAoKSB7XG4gIGlmKHRoaXMuX19jbGVhcmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZm9yIChsZXQga2V5IGluIHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUpIHtcbiAgICBFbGVtZW50LnByb3RvdHlwZVtrZXldID0gdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZVtrZXldO1xuICB9XG5cbiAgZm9yIChsZXQga2V5IGluIHRoaXMuX193aW5kb3cuQXJyYXkucHJvdG90eXBlKSB7XG4gICAgQXJyYXkucHJvdG90eXBlW2tleV0gPSB0aGlzLl9fd2luZG93LkFycmF5LnByb3RvdHlwZVtrZXldO1xuICB9XG5cbiAgZm9yKGxldCBrZXkgaW4gdGhpcy5vcHRpb25zLmdsb2JhbHMpIHtcbiAgICB0aGlzLm9wdGlvbnMuZ2xvYmFsc1trZXldID0gdGhpcy51bndyYXAodGhpcy5vcHRpb25zLmdsb2JhbHNba2V5XSk7XG4gIH1cblxuICB3aW5kb3cuc2V0VGltZW91dCA9IHRoaXMuX193aW5kb3cuc2V0VGltZW91dDtcbiAgd2luZG93LnNldEludGVydmFsID0gdGhpcy5fX3dpbmRvdy5zZXRJbnRlcnZhbDtcbiAgd2luZG93LlByb21pc2UgPSB0aGlzLl9fd2luZG93LlByb21pc2U7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIHRoaXMuX19vbkVycm9yKTtcbiAgdGhpcy5fX2NsZWFyZWQgPSB0cnVlO1xufTtcblxuLyoqXG4gKiBKb2luIGJpbmRpbmcga2V5c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgYmluZGluZyBrZXlzXG4gKi9cbkFraWxpLmpvaW5CaW5kaW5nS2V5cyA9IGZ1bmN0aW9uIChrZXlzKSB7XG4gIHJldHVybiBrZXlzLm1hcChlbCA9PiBlbC50b1N0cmluZygpKS5qb2luKCcuJyk7XG59O1xuXG4vKipcbiAqIEFkZCBzY29wZSB0byB0aGUgc2NvcGVzIGxpc3RcbiAqXG4gKiBAcGFyYW0gc2NvcGVcbiAqL1xuQWtpbGkuYWRkU2NvcGUgPSBmdW5jdGlvbiAoc2NvcGUpIHtcbiAgaWYgKHRoaXMuX19zY29wZXNbc2NvcGUuX19uYW1lXSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgU2NvcGUgbmFtZSAke3Njb3BlLl9fbmFtZX0gYWxyZWFkeSBleGlzdHNgKTtcbiAgfVxuXG4gIHRoaXMuX19zY29wZXNbc2NvcGUuX19uYW1lXSA9IHNjb3BlO1xufTtcblxuLyoqXG4gKiBHZXQgc2NvcGUgZnJvbSB0aGUgc2NvcGVzIGxpc3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHNjb3BlIG5hbWVcbiAqIEByZXR1cm5zIHtTY29wZX1cbiAqL1xuQWtpbGkuZ2V0U2NvcGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gdGhpcy5fX3Njb3Blc1tuYW1lXTtcbn07XG5cbi8qKlxuICogRGVsZXRlIHNjb3BlIGZyb20gdGhlIHNjb3BlcyBsaXN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzY29wZSBuYW1lXG4gKi9cbkFraWxpLnJlbW92ZVNjb3BlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdGhpcy5fX3Njb3Blc1tuYW1lXSA9IG51bGw7XG4gIGRlbGV0ZSB0aGlzLl9fc2NvcGVzW25hbWVdO1xufTtcblxuLyoqXG4gKiBHZXQgYWxsIGVsZW1lbnRzIHdpdGggYXR0YWNoZWQgQWtpbGkgY29tcG9uZW50c1xuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3RyZWU9dHJ1ZV0gLSByZXR1cm4gYXJyYXkgb2YgdGhlIHBhcmVudHMgaWYgdHJ1ZSwgY2xvc2VzdCBwYXJlbnQgaWYgZmFsc2VcbiAqIEByZXR1cm5zIHtBcnJheXxFbGVtZW50fG51bGx9XG4gKi9cbkFraWxpLmdldEFraWxpUGFyZW50cyA9IGZ1bmN0aW9uIChlbCwgdHJlZSA9IHRydWUpIHtcbiAgbGV0IGFyciA9IFtdO1xuXG4gIGZ1bmN0aW9uIGNoZWNrKG5vZGUpIHtcbiAgICBpZiAoIW5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChub2RlLnBhcmVudE5vZGUuX19ha2lsaSkge1xuICAgICAgYXJyLnB1c2gobm9kZS5wYXJlbnROb2RlKTtcblxuICAgICAgaWYgKCF0cmVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVjayhub2RlLnBhcmVudE5vZGUpO1xuICB9XG5cbiAgY2hlY2soZWwpO1xuICByZXR1cm4gdHJlZT8gYXJyOiBhcnJbMF07XG59O1xuXG4vKipcbiAqIFNldCBlbGVtZW50IGlubmVyIGh0bWwgd2l0aCBjb250ZW50IHJlcGxhY2VtZW50XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCI8aT5IZWxsbzwvaT48Yj5Xb3JsZDwvYj5cIlxuICogZWwuaW5uZXJIVE1MID0gXCI8Yj5Xb3JsZDwvYj5cIjtcbiAqIEFraWxpLnNldFRlbXBsYXRlKGVsLCBcIjxpPkhlbGxvPC9pPiR7dGhpcy5fX2NoaWxkcmVufVwiKTtcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbkFraWxpLnNldFRlbXBsYXRlID0gZnVuY3Rpb24gKGVsLCB0ZW1wbGF0ZSkge1xuICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoL1xcJHsoKCg/IVxcJHspXFxzKnRoaXNcXC5fX2NvbnRlbnRcXHMqKSopfS8sIGVsLmlubmVySFRNTCk7XG4gIGVsLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuXG4gIHJldHVybiBlbC5pbm5lckhUTUw7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIHVuaXF1ZSBzY29wZSBuYW1lXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuQWtpbGkuY3JlYXRlU2NvcGVOYW1lID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdXRpbHMuY3JlYXRlUmFuZG9tU3RyaW5nKDE2LCAoc3RyKSA9PiB7XG4gICAgcmV0dXJuICEhdGhpcy5fX3Njb3Blc1tzdHJdO1xuICB9KTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSBmdW5jdGlvbi5cbiAqIEV2ZXJ5IHNjb3BlIHZhcmlhYmxlIGNoYW5nZSBjYWxscyBhY2NvcmRpbmcgbm9kZSBldmFsdWF0aW9uLlxuICogRm9yIGV4YW1wbGUsIGlmIHlvdSBjaGFuZ2Ugc29tZSBzY29wZSB2YXJpYWJsZSBpbiB0aGUgbG9vcCAtIGV2YWx1YXRpb24gd2lsbCBiZSBjYWxsZWQgb24gdGhlIGVhY2ggY2hhbmdlLlxuICogSXQgbWF5IGJlIHNsb3cgZm9yIHRoZSBhcHBsaWNhdGlvbi5cbiAqIFlvdSBjYW4gaXNvbGF0ZSB0aGlzIGFjdGlvbiBhbmQgcnVuIGFsbCBldmFsdWF0aW9uIHByb2Nlc3MgYWZ0ZXIgcGFzc2VkIGZ1bmN0aW9uIGF0IG9uY2UuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS5pc29sYXRlID0gZnVuY3Rpb24gKGZuKSB7IFxuICBpZiAodGhpcy5fX2lzb2xhdGlvbikge1xuICAgIHJldHVybiBmbigpO1xuICB9XG5cbiAgdGhpcy5fX2lzb2xhdGlvbiA9IHt9O1xuICBsZXQgcmVzID0gZm4oKTtcbiAgbGV0IHByb3BzID0gW107XG5cbiAgZm9yIChsZXQgayBpbiB0aGlzLl9faXNvbGF0aW9uKSB7XG4gICAgaWYgKCF0aGlzLl9faXNvbGF0aW9uLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBwcm9wcy5wdXNoKHRoaXMuX19pc29sYXRpb25ba10pO1xuICB9XG5cbiAgdGhpcy5fX2lzb2xhdGlvbiA9IG51bGw7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBwcm9wcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjb25zdCBwcm9wID0gcHJvcHNbaV07XG4gICAgY29uc3QgdmFsID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMocHJvcC5rZXlzLCBwcm9wLmNvbXBvbmVudC5fX3Njb3BlKTsgICAgXG4gICAgcHJvcC5jb21wb25lbnQuX19pc1Jlc29sdmVkICYmIHByb3AuY29tcG9uZW50Ll9fdHJpZ2dlclN0b3JlQW5kQXR0cihwcm9wLmtleXMsIHZhbCk7XG4gICAgcHJvcC5jb21wb25lbnQuX19ldmFsdWF0ZUJ5S2V5cyhwcm9wLmtleXMsIHZhbCwgcHJvcC5pc0RlbGV0ZWQpO1xuICB9XG5cbiAgcHJvcHMgPSBudWxsO1xuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBTdG9wIGV2YWx1YXRpb24gYmVmb3JlIHRoZSBmdW5jdGlvbiBhbmQgY29udGludWUgYWZ0ZXJcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLnVuZXZhbHVhdGUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgbGV0IGV2YWx1YXRpb24gPSB0aGlzLl9fZXZhbHVhdGlvbjtcbiAgbGV0IHJlcztcbiAgdGhpcy5fX2V2YWx1YXRpb24gPSBudWxsO1xuICByZXMgPSBmbigpO1xuICB0aGlzLl9fZXZhbHVhdGlvbiA9IGV2YWx1YXRpb247XG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIEV2YWx1YXRlIG9ubHkgcm9vdCBwcm9wZXJ0aWVzXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS53cmFwcGluZyA9IGZ1bmN0aW9uIChmbikge1xuICBpZih0aGlzLl9fd3JhcHBpbmcpIHtcbiAgICByZXR1cm4gZm4oKTtcbiAgfVxuICBcbiAgdGhpcy5fX3dyYXBwaW5nID0gdHJ1ZTtcbiAgbGV0IHJlcyA9IGZuKCk7ICBcbiAgdGhpcy5fX3dyYXBwaW5nID0gZmFsc2U7ICBcbiAgcmV0dXJuIHJlczsgICBcbn1cblxuLyoqXG4gKiBTdG9wIGlzb2xhdGlvbiBiZWZvcmUgdGhlIGZ1bmN0aW9uIGFuZCBjb250aW51ZSBhZnRlclxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkudW5pc29sYXRlID0gZnVuY3Rpb24gKGZuKSB7XG4gIGxldCBpc29sYXRpb24gPSB0aGlzLl9faXNvbGF0aW9uO1xuICBsZXQgcmVzO1xuICB0aGlzLl9faXNvbGF0aW9uID0gbnVsbDtcbiAgcmVzID0gZm4oKTtcbiAgdGhpcy5fX2lzb2xhdGlvbiA9IGlzb2xhdGlvbjtcbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogUnVuIHRoZSBmdW5jdGlvbiBvbiB0aGUgbmV4dCB0aWNrXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5Ba2lsaS5uZXh0VGljayA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcykgPT4gc2V0VGltZW91dCgoKSA9PiBQcm9taXNlLnJlc29sdmUoZm4oKSkudGhlbihyZXMpKSk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgZWxlbWVudFxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucz17fV1cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS5pbml0aWFsaXplID0gZnVuY3Rpb24gKGVsLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IHJlY29tcGlsZSA9IG9wdGlvbnMucmVjb21waWxlO1xuICBsZXQgY29tcG9uZW50ID0gZWwuX19ha2lsaTtcblxuICBpZiAoY29tcG9uZW50KSB7XG4gICAgaWYgKHJlY29tcGlsZSkge1xuICAgICAgY29tcG9uZW50Ll9fcmVjb21waWxlKHJlY29tcGlsZSA9PT0gdHJ1ZT8ge306IHJlY29tcGlsZSk7XG4gICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBpc1Jvb3QgPSBlbCA9PT0gdGhpcy5fX3Jvb3Q7XG4gIGxldCBjb21wb25lbnROYW1lID0gdXRpbHMudG9EYXNoQ2FzZShlbC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpIHx8IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSk7XG4gIGxldCBfQ29tcG9uZW50ID0gdGhpcy5fX2NvbXBvbmVudHNbY29tcG9uZW50TmFtZV07XG5cbiAgQ0hFQ0tfQUxJQVNFUzogaWYgKCFfQ29tcG9uZW50KSB7XG4gICAgbGV0IHNlbGVjdG9ycyA9IE9iamVjdC5rZXlzKHRoaXMuX19hbGlhc2VzKTtcblxuICAgIGlmICghc2VsZWN0b3JzLmxlbmd0aCkge1xuICAgICAgYnJlYWsgQ0hFQ0tfQUxJQVNFUztcbiAgICB9XG5cbiAgICBsZXQgc2VsZWN0b3JBbGwgPSBzZWxlY3RvcnMuam9pbignLCcpO1xuXG4gICAgaWYgKCFlbC5tYXRjaGVzKHNlbGVjdG9yQWxsKSkge1xuICAgICAgYnJlYWsgQ0hFQ0tfQUxJQVNFUztcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHNlbGVjdG9ycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBzZWxlY3RvciA9IHNlbGVjdG9yc1tpXTtcblxuICAgICAgaWYgKGVsLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIF9Db21wb25lbnQgPSB0aGlzLl9fY29tcG9uZW50c1t0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl1dO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoIV9Db21wb25lbnQgJiYgIWlzUm9vdCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghX0NvbXBvbmVudCkge1xuICAgIF9Db21wb25lbnQgPSB0aGlzLkNvbXBvbmVudDtcbiAgfVxuXG4gIGlmIChfQ29tcG9uZW50Lm1hdGNoZXMgJiYgIWVsLm1hdGNoZXMoX0NvbXBvbmVudC5tYXRjaGVzKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbXBvbmVudCA9IG5ldyBfQ29tcG9uZW50KGVsLCB7fSk7ICBcbiAgXG4gIGlmIChjb21wb25lbnQuX19jYW5jZWxsZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZihBa2lsaS5nZXRBa2lsaVBhcmVudHMoZWwpLmZpbmQocCA9PiBwLl9fYWtpbGkuX19wcmV2ZW50KSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbXBvbmVudC5fX2NyZWF0ZSgpO1xuICByZXR1cm4gY29tcG9uZW50O1xufTtcblxuLyoqXG4gKiBDb21waWxlIHRoZSBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSByb290XG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuQWtpbGkuY29tcGlsZSA9IGZ1bmN0aW9uIChyb290LCBvcHRpb25zID0geyByZWNvbXBpbGU6IGZhbHNlIH0pIHsgIFxuICBsZXQgZWxlbWVudHMgPSBbXTtcblxuICBjb25zdCBuZXN0ZWRJbml0aWFsaXppbmcgPSAoZWwpID0+IHtcbiAgICBsZXQgY29tcG9uZW50ID0gdGhpcy5pbml0aWFsaXplKGVsLCBvcHRpb25zKTtcbiAgICBsZXQgY2hpbGRyZW4gPSBlbC5jaGlsZHJlbjtcbiAgICBjb21wb25lbnQgJiYgZWxlbWVudHMucHVzaChjb21wb25lbnQpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmVzdGVkSW5pdGlhbGl6aW5nKGNoaWxkKTtcbiAgICB9XG4gIH07XG5cbiAgbmVzdGVkSW5pdGlhbGl6aW5nKHJvb3QpO1xuICBsZXQgcCA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGNvbXBvbmVudCA9IGVsZW1lbnRzW2ldO1xuICAgIHAucHVzaChjb21wb25lbnQuX19jb21waWxlKCkpO1xuICB9XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKHApLnRoZW4oKCkgPT4ge1xuICAgIGxldCByID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gZWxlbWVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBjb21wb25lbnQgPSBlbGVtZW50c1tpXTtcbiAgICAgIHIucHVzaChjb21wb25lbnQuX19yZXNvbHZlKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLmFsbChyKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIHRoZSBjb21wb25lbnQgb3IgZ2V0IGl0IGlmIGZuIGlzIG5vdCBwYXNzZWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtDb21wb25lbnR9IFtmbl1cbiAqL1xuQWtpbGkuY29tcG9uZW50ID0gZnVuY3Rpb24gKG5hbWUsIGZuKSB7XG4gIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYgKCFmbikge1xuICAgIHJldHVybiB0aGlzLl9fY29tcG9uZW50c1tuYW1lXSB8fCBudWxsO1xuICB9XG4gIFxuICBpZiAodGhpcy5fX2NvbXBvbmVudHNbbmFtZV0gJiYgQWtpbGkub3B0aW9ucy5kZWJ1ZykgeyAgXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oYENvbXBvbmVudCAke25hbWV9IGFscmVhZHkgd2FzIGFkZGVkYCk7XG4gIH1cblxuICB0aGlzLl9fY29tcG9uZW50c1tuYW1lXSA9IGZuO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIGNvbXBvbmVudFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbkFraWxpLnJlbW92ZUNvbXBvbmVudCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLl9fY29tcG9uZW50c1tuYW1lXTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIHNlbGVjdG9yIGFsaWFzIG9yIGdldCBpdCBpZiBjb21wb25lbnQgbmFtZSBpcyBub3QgcGFzc2VkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIC0gRE9NIHNlbGVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvbXBvbmVudE5hbWVdXG4gKi9cbkFraWxpLmFsaWFzID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBjb21wb25lbnROYW1lID0gJycpIHtcbiAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUudG9Mb3dlckNhc2UoKTtcblxuICBpZiAoIWNvbXBvbmVudE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdIHx8IG51bGw7XG4gIH1cblxuICBpZiAodGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdICYmIEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihgQWxpYXMgd2l0aCBzZWxlY3RvciAke3NlbGVjdG9yfSBhbHJlYWR5IHdhcyBhZGRlZGApO1xuICB9XG5cbiAgdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdID0gY29tcG9uZW50TmFtZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBzZWxlY3RvciBhbGlhc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICovXG5Ba2lsaS5yZW1vdmVBbGlhcyA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICBkZWxldGUgdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdO1xufTtcblxuLyoqXG4gKiBJc29sYXRlIGFycmF5IHByb3RvdHlwZSBmdW5jdGlvbnNcbiAqL1xuQWtpbGkuaXNvbGF0ZUFycmF5UHJvdG90eXBlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9fd2luZG93LkFycmF5ID0geyBwcm90b3R5cGU6IHt9IH07XG5cbiAgbGV0IGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhBcnJheS5wcm90b3R5cGUpO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICBsZXQgb2xkID0gQXJyYXkucHJvdG90eXBlW2tleV07XG5cbiAgICBpZiAodHlwZW9mIG9sZCAhPSAnZnVuY3Rpb24nIHx8IGtleSA9PSAnY29uc3RydWN0b3InKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB0aGlzLl9fd2luZG93LkFycmF5LnByb3RvdHlwZVtrZXldID0gb2xkO1xuXG4gICAgQXJyYXkucHJvdG90eXBlW2tleV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gQWtpbGkudW5ldmFsdWF0ZSgoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5fX2lzUHJveHkpIHtcbiAgICAgICAgICByZXR1cm4gb2xkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IG9sZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbn07XG5cbi8qKlxuICogSXNvbGF0ZSBzb21lIHdpbmRvdyBmdW5jdGlvbnNcbiAqL1xuQWtpbGkuaXNvbGF0ZVdpbmRvd0Z1bmN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fX3dpbmRvdy5zZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgdGhpcy5fX3dpbmRvdy5zZXRJbnRlcnZhbCA9IHNldEludGVydmFsO1xuICB0aGlzLl9fd2luZG93LlByb21pc2UgPSB3aW5kb3cuUHJvbWlzZTtcbiAgd2luZG93LnNldFRpbWVvdXQgPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5zZXRUaW1lb3V0LCAwKTtcbiAgd2luZG93LnNldEludGVydmFsID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuc2V0SW50ZXJ2YWwsIDApO1xuICBcbiAgaWYoIXdpbmRvdy5BS0lMSV9TU1IpIHtcbiAgICB3aW5kb3cuUHJvbWlzZS5jb25zdHJ1Y3RvciA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LlByb21pc2UuY29uc3RydWN0b3IpO1xuICAgIHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS50aGVuID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUudGhlbiwgWzAsICdsYXN0J10pO1xuICAgIHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS5jYXRjaCA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LlByb21pc2UucHJvdG90eXBlLmNhdGNoKTtcbiAgfSAgXG59O1xuXG4vKipcbiAqIElzb2xhdGUgZXZlbnQgbGlzdGVuZXJzXG4gKi9cbkFraWxpLmlzb2xhdGVFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX193aW5kb3cuRWxlbWVudCA9IHsgcHJvdG90eXBlOiB7fSB9O1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBFbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyO1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyO1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZTtcblxuICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZGVsZXRlIHRoaXMuX19ha2lsaUxpc3RlbmVycztcbiAgICByZXR1cm4gQWtpbGkuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChuYW1lLCBmbikge1xuICAgIGxldCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYgKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVycyA9IHt9O1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBpZih0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFyZ3NbMV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgICAgfTtcbiAgICB9ICAgIFxuXG4gICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLnB1c2goe1xuICAgICAgbGluazogZm4sXG4gICAgICBmbjogYXJnc1sxXVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIEFraWxpLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG5cbiAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChuYW1lLCBmbikge1xuICAgIGxldCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYgKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVycyA9IHt9O1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBsaXN0ZW5lciA9IHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXVtpXTtcblxuICAgICAgaWYgKGxpc3RlbmVyLmxpbmsgPT09IGZuKSB7XG4gICAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGFyZ3NbMV0gPSBsaXN0ZW5lci5mbjtcbiAgICAgICAgaS0tO1xuICAgICAgICBsLS07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXTtcbiAgICB9XG5cbiAgICByZXR1cm4gQWtpbGkuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfTtcbn07XG5cbi8qKlxuICogV3JhcCB0aGUgZnVuY3Rpb24gY2FsbGJhY2sgdG8gYW4gaXNvbGF0ZSBjb250ZXh0XG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ3xudW1iZXJbXXxzdHJpbmdbXX0gW3Bvcz1cImxhc3RcIl1cbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqL1xuQWtpbGkuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24gPSBmdW5jdGlvbiAoZm4sIHBvcyA9ICdsYXN0Jykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGxldCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICFBcnJheS5pc0FycmF5KHBvcykgJiYgKHBvcyA9IFtwb3NdKTtcbiAgICBcbiAgICBmb3IobGV0IGkgPSAwLCBsID0gcG9zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG51bSA9IHBvc1tpXTtcbiAgICAgIGxldCBpbmRleCA9IG51bTtcbiAgICAgIGxldCBjYWxsYmFjayA9IGFyZ3NbbnVtXTtcblxuICAgICAgaWYobnVtID09ICdsYXN0Jykge1xuICAgICAgICBpbmRleCA9IGFyZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgY2FsbGJhY2sgPSBhcmdzW2luZGV4XTtcbiAgICAgIH1cblxuICAgICAgaWYodHlwZW9mIGNhbGxiYWNrICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmKCFjYWxsYmFjay5fX2lzb2xhdGVkKSB7XG4gICAgICAgIGFyZ3NbaW5kZXhdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IGNhbGxiYWNrLmFwcGx5KGNhbGxiYWNrLCBhcmd1bWVudHMpKTtcbiAgICAgICAgfTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYXJnc1tpbmRleF0sICdfX2lzb2xhdGVkJywge1xuICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgIHZhbHVlOiBjYWxsYmFja1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG59O1xuXG4vKipcbiAqIFdyYXAgb2JqZWN0cy9jbGFzc2VzIHRvIGlzb2xhdGUgYW5kIHVuZXZhbHVhdGUgZGF0YVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBvYmpcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gXG4gKi9cbkFraWxpLndyYXAgPSBmdW5jdGlvbiAob2JqLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IGN1cnJlbnQgPSBvYmo7XG5cbiAgaWYodHlwZW9mIG9iaiA9PSAnZnVuY3Rpb24nKSB7XG4gICAgb2JqID0gdGhpcy53cmFwRnVuY3Rpb24ob2JqLCBvcHRpb25zKTtcblxuICAgIGlmKG9iaiA9PT0gY3VycmVudCkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gIH1cbiAgZWxzZSBpZighb2JqIHx8IHR5cGVvZiBvYmogIT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGxldCBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKTtcblxuICBmb3IobGV0IGsgPSAwLCBjID0ga2V5cy5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICBsZXQga2V5ID0ga2V5c1trXTtcbiAgICBsZXQgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpO1xuXG4gICAgaWYoIWRlc2NyaXB0b3IuY29uZmlndXJhYmxlIHx8ICFkZXNjcmlwdG9yLndyaXRhYmxlKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZihvcHRpb25zLnJldmVyc2UpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgey4uLmRlc2NyaXB0b3IsIHZhbHVlOiBvYmpba2V5XS5fX2FraWxpIHx8IG9ialtrZXldIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIFxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgey4uLmRlc2NyaXB0b3IsIHZhbHVlOiB0aGlzLndyYXAob2JqW2tleV0sIG9wdGlvbnMpIH0pO1xuICB9IFxuICBcbiAgcmV0dXJuIG9iajtcbn07XG5cbi8qKlxuICogVW53cmFwIG9iamVjdHMvY2xhc3Nlc1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBvYmpcbiAqL1xuQWtpbGkudW53cmFwID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdGhpcy53cmFwKG9iaiwgeyByZXZlcnNlOiB0cnVlIH0pO1xufVxuXG4vKipcbiAqIElzb2xhdGUgYSBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbkFraWxpLndyYXBGdW5jdGlvbiA9IGZ1bmN0aW9uIChmbiwgb3B0aW9ucyA9IHt9KSB7XG4gIGlmIChmbi5fX2FraWxpKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgY29uc3QgYWtpbGlXcmFwcGVkRnVuY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYob3B0aW9ucy50YWcgJiYgQWtpbGkuX19ldmFsdWF0aW9uKSB7XG4gICAgICBBa2lsaS5fX2V2YWx1YXRpb24uY29tcG9uZW50Ll9fYWRkVGFnKG9wdGlvbnMudGFnLCBBa2lsaS5fX2V2YWx1YXRpb24ubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIEFraWxpLndyYXBwaW5nKCgpID0+IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xuXG4gIGxldCBrZXlzID0gT2JqZWN0LmtleXMoZm4pO1xuICBha2lsaVdyYXBwZWRGdW5jdGlvbi5wcm90b3R5cGUgPSBmbi5wcm90b3R5cGU7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgYWtpbGlXcmFwcGVkRnVuY3Rpb25ba2V5XSA9IGZuW2tleV07XG4gIH1cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYWtpbGlXcmFwcGVkRnVuY3Rpb24sICdfX2FraWxpJywge1xuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIHZhbHVlOiBmblxuICB9KTtcblxuICByZXR1cm4gYWtpbGlXcmFwcGVkRnVuY3Rpb247XG59O1xuXG4vKipcbiAqIEV2YWx1YXRlIHRoZSB0YWdzIG5vZGUgZXhwcmVzc2lvbnNcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IHRhZ3NcbiAqL1xuQWtpbGkuZXZhbHVhdGVUYWcgPSBmdW5jdGlvbiAodGFncykge1xuICBpZighdGhpcy5yb290KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICBpZighQXJyYXkuaXNBcnJheSh0YWdzKSkge1xuICAgIHRhZ3MgPSBbdGFnc107XG4gIH1cblxuICBjb25zdCBjaGlsZHJlbiA9IHRoaXMucm9vdC5jaGlsZHJlbigpO1xuICBcbiAgZm9yKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgY29uc3QgY2hpbGRUYWdzID0gY2hpbGQuX190YWdzOyAgICBcblxuICAgIGZvcihsZXQgaiA9IDAsIHMgPSB0YWdzLmxlbmd0aDsgaiA8IHM7IGorKykge1xuICAgICAgY29uc3QgdGFnID0gdGFnc1tqXTtcbiAgICAgIFxuICAgICAgaWYoIWNoaWxkVGFnc1t0YWddKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICBcbiAgICAgIGZvcihsZXQgayA9IDAsIGMgPSBjaGlsZFRhZ3NbdGFnXS5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgICAgY29uc3Qgb2JqID0gY2hpbGRUYWdzW3RhZ11ba107XG4gICAgICAgIGNoaWxkLl9fZXZhbHVhdGVOb2RlKG9iai5ub2RlLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9ICBcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIHRhZ3NcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IHRhZ3NcbiAqL1xuQWtpbGkucmVtb3ZlVGFnID0gZnVuY3Rpb24gKHRhZ3MpIHtcbiAgaWYoIXRoaXMucm9vdCkge1xuICAgIHJldHVybjtcbiAgfVxuICBcbiAgaWYoIUFycmF5LmlzQXJyYXkodGFncykpIHtcbiAgICB0YWdzID0gW3RhZ3NdO1xuICB9XG5cbiAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLnJvb3QuY2hpbGRyZW4oKTtcbiAgXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2ldOyBcblxuICAgIGZvcihsZXQgaiA9IDAsIHMgPSB0YWdzLmxlbmd0aDsgaiA8IHM7IGorKykge1xuICAgICAgY2hpbGQuX19yZW1vdmVUYWcodGFnc1tqXSk7XG4gICAgfVxuICB9ICBcbn1cblxuLyoqXG4gKiBFcnJvciBoYW5kbGluZ1xuICovXG5Ba2lsaS5lcnJvckhhbmRsaW5nID0gZnVuY3Rpb24gKCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCB0aGlzLl9fb25FcnJvcik7XG59O1xuXG4vKipcbiAqIFRyaWdnZXIgYW4gaW5pdGlhbGl6YXRpb24gc3RhdHVzXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBzdGF0dXNcbiAqL1xuQWtpbGkudHJpZ2dlckluaXQgPSBmdW5jdGlvbiAoc3RhdHVzKSB7XG4gIEFraWxpLl9faW5pdCA9IHN0YXR1cztcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdha2lsaS1pbml0JywgeyBkZXRhaWw6IHN0YXR1cyB9KSk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIGFwcGxpY2F0aW9uXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBbcm9vdF1cbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5Ba2lsaS5pbml0ID0gZnVuY3Rpb24gKHJvb3QpIHtcbiAgcm9vdCA9IHJvb3QgfHwgZG9jdW1lbnQuYm9keTtcblxuICBpZighKHJvb3QgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgUm9vdCBlbGVtZW50IG11c3QgYmUgYW4gaHRtbCBlbGVtZW50YCk7XG4gIH1cblxuICBpZihyb290ID09PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFwiaHRtbFwiIGNhbid0IGJlIHRoZSByb290IGVsZW1lbnRgKTtcbiAgfVxuXG4gIHRoaXMuX19yb290ID0gcm9vdDtcbiAgXG4gIGlmKHdpbmRvdy5BS0lMSV9TRVJWRVIpIHsgICAgXG4gICAgQWtpbGkuaW5pdFNlcnZlclNpZGVIdG1sKHdpbmRvdy5BS0lMSV9TRVJWRVIuaHRtbCk7XG4gICAgQWtpbGkuaW5pdFNlcnZlclNpZGVSZXF1ZXN0Q2FjaGUod2luZG93LkFLSUxJX1NFUlZFUi5yZXF1ZXN0Q2FjaGUpO1xuICB9XG4gIGVsc2Uge1xuICAgIHdpbmRvdy5BS0lMSV9DTElFTlQgPSB7XG4gICAgICBodG1sOiB0aGlzLnByZXBhcmVTZXJ2ZXJTaWRlSHRtbCgpICAgICAgXG4gICAgfVxuICB9XG5cbiAgZm9yKGxldCBrZXkgaW4gdGhpcy5vcHRpb25zLmdsb2JhbHMpIHtcbiAgICB0aGlzLm9wdGlvbnMuZ2xvYmFsc1trZXldID0gdGhpcy53cmFwKHRoaXMub3B0aW9ucy5nbG9iYWxzW2tleV0sIHsgdGFnOiBgZ2xvYmFscy4ke2tleX1gIH0pO1xuICB9XG4gIFxuICByZXR1cm4gdGhpcy5jb21waWxlKHRoaXMuX19yb290KS50aGVuKCgpID0+IHtcbiAgICBpZiAocm91dGVyLl9faW5pdCkge1xuICAgICAgcmV0dXJuIHJvdXRlci5jaGFuZ2VTdGF0ZSgpO1xuICAgIH1cbiAgfSkudGhlbigoKSA9PiB7ICAgIFxuICAgIHdpbmRvdy5BS0lMSV9DTElFTlQgJiYgKHdpbmRvdy5BS0lMSV9DTElFTlQucmVxdWVzdENhY2hlID0gdGhpcy5wcmVwYXJlU2VydmVyU2lkZVJlcXVlc3RDYWNoZSgpKTtcbiAgICB0aGlzLnRyaWdnZXJJbml0KHRydWUpO1xuICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgdGhpcy50cmlnZ2VySW5pdChmYWxzZSk7XG4gICAgdGhyb3cgZXJyO1xuICB9KTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgaHRtbFxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuICovXG5Ba2lsaS5pbml0U2VydmVyU2lkZUh0bWwgPSBmdW5jdGlvbiAoaHRtbCkge1xuICBmb3IgKGxldCBpID0gdGhpcy5fX3Jvb3QuYXR0cmlidXRlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSl7XG4gICAgdGhpcy5fX3Jvb3QucmVtb3ZlQXR0cmlidXRlKHRoaXMuX19yb290LmF0dHJpYnV0ZXNbaV0ubmFtZSk7XG4gIH1cblxuICBsZXQgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICBsZXQgZG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhodG1sLCBcInRleHQvaHRtbFwiKTtcbiAgbGV0IGVsID0gZG9jLnF1ZXJ5U2VsZWN0b3IodGhpcy5fX3Jvb3QgPT09IGRvY3VtZW50LmJvZHk/ICdib2R5JzogJ2JvZHkgPiAqJyk7ICAgIFxuICB0aGlzLl9fcm9vdC5pbm5lckhUTUwgPSBlbC5pbm5lckhUTUw7XG5cbiAgZm9yIChsZXQgaSA9IGVsLmF0dHJpYnV0ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBsZXQgYXR0ciA9IGVsLmF0dHJpYnV0ZXNbaV07XG4gICAgdGhpcy5fX3Jvb3Quc2V0QXR0cmlidXRlKGF0dHIubmFtZSwgYXR0ci52YWx1ZSk7XG4gIH0gIFxufVxuXG4vKipcbiAqIEluaXRpYWxpemUgc2VydmVyLXNpZGUgcmVuZGVyaW5nIHJlcXVlc3QgY2FjaGVcbiAqIFxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICovXG5Ba2lsaS5pbml0U2VydmVyU2lkZVJlcXVlc3RDYWNoZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgY29uc3QgaW5pdCA9IChpbnN0YW5jZSwgb2JqKSA9PiB7XG4gICAgZm9yKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgICBpbnN0YW5jZS5fX2NhY2hlW2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gIH1cbiAgXG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICBsZXQgaW5zdGFuY2UgPSBrZXkgPT09ICdfX21haW4nPyByZXF1ZXN0OiByZXF1ZXN0Ll9faW5zdGFuY2VzW2tleV07XG4gICAgaW5pdChpbnN0YW5jZSwgb2JqW2tleV0pO1xuICB9XG59XG5cbi8qKlxuICogUHJlcGFyZSBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgaHRtbFxuICovXG5Ba2lsaS5wcmVwYXJlU2VydmVyU2lkZUh0bWwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLl9fcm9vdC5vdXRlckhUTUw7XG59XG5cbi8qKlxuICogUHJlcGFyZSBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgcmVxdWVzdCBjYWNoZVxuICovXG5Ba2lsaS5wcmVwYXJlU2VydmVyU2lkZVJlcXVlc3RDYWNoZSA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IGNhY2hlID0geyBfX21haW46IHJlcXVlc3QuX19jYWNoZSB9O1xuXG4gIGZvcihsZXQga2V5IGluIHJlcXVlc3QuX19pbnN0YW5jZXMpIHtcbiAgICBjYWNoZVtrZXldID0gcmVxdWVzdC5fX2luc3RhbmNlc1trZXldLl9fY2FjaGU7XG4gIH1cblxuICByZXR1cm4gY2FjaGU7XG59XG5cbi8qKlxuICogRGVpbml0aWFsaXplIHRoZSBhcHBsaWNhdGlvblxuICovXG5Ba2lsaS5kZWluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY2xlYXJHbG9iYWxzKCk7XG4gIHJvdXRlci5kZWluaXQoKTtcbiAgcmVxdWVzdC5kZWluaXQoKTtcbiAgbGV0IHN0b3JlS2V5cyA9IE9iamVjdC5rZXlzKHN0b3JlLl9fdGFyZ2V0KTtcbiAgXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBzdG9yZUtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZGVsZXRlIHN0b3JlLl9fdGFyZ2V0W3N0b3JlS2V5c1tpXV07XG4gIH1cblxuICB0aGlzLnNldERlZmF1bHRzKCk7XG59O1xuXG53aW5kb3cuQWtpbGkgPSBBa2lsaTtcbmV4cG9ydCBkZWZhdWx0IEFraWxpO1xuQWtpbGkuc2V0RGVmYXVsdHMoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYWtpbGkuanMiLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlci5qcydcblxuLyoqXG4gKiBBbiBvYmplY3Qgd2l0aCBhIGxvdCBvZiB1c2VmdWwgZnVuY3Rpb25zXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvdXRpbHN9XG4gKi9cbmNvbnN0IHV0aWxzID0ge307XG5cbi8qKlxuICogQ3JlYXRlIGNsYXNzIGF0dHJpYnV0ZSBmcm9tIGFuIG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwicmVkIGFjdGl2ZVwiXG4gKiB1dGlscy5jbGFzcyh7cmVkOiB0cnVlLCBhY3RpdmU6IHRydWUsIGdyZWVuOiBmYWxzZX0pO1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmNsYXNzID0gZnVuY3Rpb24gKG9iaikge1xuICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGxldCBjbGFzc2VzID0gW107XG4gIGxldCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGsgPSBrZXlzW2ldO1xuICAgIGxldCB2YWwgPSBvYmpba107XG4gICAgdmFsICYmIGNsYXNzZXMucHVzaChrKTtcbiAgfVxuXG4gIHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIHN0eWxlIGF0dHJpYnV0ZSBmcm9tIGFuIG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwiY29sb3I6cmVkO3dpZHRoOjEwcHhcIlxuICogdXRpbHMuc3R5bGUoe2NvbG9yOiBcInJlZFwiLCBiYWNrZ3JvdW5kOiBmYWxzZSwgd2lkdGg6IFwiMTBweFwifSk7XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuc3R5bGUgPSBmdW5jdGlvbihvYmopIHtcbiAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBsZXQgc3R5bGVzID0gW107XG4gIGxldCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGsgPSBrZXlzW2ldO1xuICAgIGxldCB2YWwgPSBvYmpba107XG4gICAgdmFsICYmIHN0eWxlcy5wdXNoKGAke3RoaXMudG9EYXNoQ2FzZShrKX06JHt2YWx9YCk7XG4gIH1cblxuICByZXR1cm4gc3R5bGVzLmpvaW4oJzsnKTtcbn07XG5cbi8qKlxuICogRXh0ZW5kZWQgc3BsaXQgb2YgdGhlIHN0cmluZ1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbXCJIZWxsb1wiLCBcIldvcmxkXCJdXG4gKiB1dGlscy5zcGxpdChcIkhlbGxvIFdvcmxkXCIsIFwiIFwiKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWyd4ID0gNScsICcgeSA9IFwiMTsyOzNcIiddXG4gKiB1dGlscy5zcGxpdCgneCA9IDU7IHkgPSBcIjE7MjszXCInLCBcIjtcIiwgWydcIiddKTtcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfSBzdHIgXG4gKiBAcGFyYW0ge3N0cmluZ30gW2RlbF1cbiAqIEBwYXJhbSB7c3RyaW5nW119IFtleGNsdWRlXSBcbiAqL1xudXRpbHMuc3BsaXQgPSBmdW5jdGlvbihzdHIsIGRlbCA9ICcnLCBleGNsdWRlID0gW10pIHtcblx0Y29uc3QgZXhwcyA9IFtdOyAgICAgXG4gIGxldCBsYXN0ID0gJyc7XG5cbiAgaWYoIWRlbCkge1xuICAgIHJldHVybiBzdHIuc3BsaXQoJycpO1xuICB9XG4gIGVsc2UgaWYoZGVsIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgcmV0dXJuIHN0ci5zcGxpdChkZWwpO1xuICB9XG4gIGVsc2UgaWYoc3RyLmluZGV4T2YoZGVsKSA9PSAtMSkge1xuICAgIGxhc3QgPSBzdHI7XG4gIH1cbiAgZWxzZSB7XG4gICAgY29uc3QgYXJyID0gc3RyLnNwbGl0KCcnKTtcbiAgICBsZXQgb3BlbiA9ICcnOyBcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgdmFsID0gYXJyW2ldO1xuICAgICAgbGV0IGluZGV4ID0gZXhjbHVkZS5pbmRleE9mKHZhbCk7ICAgICAgXG5cbiAgICAgIGlmKGluZGV4ID4gLTEgJiYgKCFvcGVuIHx8IG9wZW4gPT0gdmFsKSkge1xuICAgICAgICAhb3Blbj8gb3BlbiA9IGV4Y2x1ZGVbaW5kZXhdOiBvcGVuID0gJyc7XG4gICAgICB9XG5cbiAgICAgIGlmKHZhbCA9PSBkZWwgJiYgIW9wZW4pIHtcbiAgICAgICAgZXhwcy5wdXNoKGxhc3QpO1xuICAgICAgICBsYXN0ID0gJyc7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsYXN0ICs9IHZhbDtcbiAgICB9XG4gIH1cblxuICBsYXN0ICYmIGV4cHMucHVzaChsYXN0KTtcbiAgcmV0dXJuIGV4cHM7XG59XG5cbi8qKlxuICogRmlsdGVyIGFuIGFycmF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWzEsIDExXVxuICogdXRpbHMuZmlsdGVyKFsxLCAyLCAzLCAxMV0sICcxJyk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxfSwge3g6IDExfV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IDF9LCB7eDogMn0sIHt4OiAzfSwge3g6IDExfV0sICcxJywgJ3gnKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxfSwge3g6IDExfV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IDF9LCB7eDogMn0sIHt4OiAzfSwge3g6IDExfV0sICcxJywgWyd4J10pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDF9LCB7eDogMTF9XVxuICogdXRpbHMuZmlsdGVyKFt7eDogMX0sIHt4OiAyfSwge3g6IDN9LCB7eDogMTF9XSwgJzEnLCBbWyd4J11dKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiB7eTogMX19XVxuICogdXRpbHMuZmlsdGVyKFt7eDoge3k6IDF9fSwge3g6IHt5OiAyfX1dLCAnMScsIFtbJ3gnLCAneSddXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoxLCB5OiAyfSwge3g6IDIsIHk6MX1dIFxuICogdXRpbHMuZmlsdGVyKFt7eDogMSwgeTogMn0sIHt4OiAzLCB5OiAzfSwge3g6IDIsIHk6IDF9XSwgJzEnLCBbJ3gnLCAneSddKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OjEsIHk6IDJ9LCB7eDogMiwgeToxfV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IDEsIHk6IDJ9LCB7eDogMywgeTogM30sIHt4OiAyLCB5OiAxfV0sICcxJywgW1sneCddLCBbJ3knXV0pO1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfGZ1bmN0aW9ufSBoYW5kbGVyIC0gdHlwZSBvZiBmaWx0ZXJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nW118c3RyaW5nfSBba2V5c10gLSBmaWx0ZXIgaW4gdGhlIGtleXMgaWYgYXJyYXkgZWxlbWVudHMgYXJlIG9iamVjdFxuICogQHJldHVybnMge0FycmF5fSAtIHJldHVybnMgb3RoZXIgYXJyYXlcbiAqL1xudXRpbHMuZmlsdGVyID0gZnVuY3Rpb24gKGFyciwgaGFuZGxlciwga2V5cyA9IG51bGwpIHtcbiAgbGV0IHJlcyA9IFtdO1xuXG4gIGlmIChrZXlzICYmICFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAga2V5cyA9IFtrZXlzXTtcbiAgfVxuXG4gIGlmKHR5cGVvZiBoYW5kbGVyICE9ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBzdHIgPSBoYW5kbGVyPyAoaGFuZGxlciArICcnKS50b0xvd2VyQ2FzZSgpOiAnJztcbiAgICBoYW5kbGVyID0gdmFsID0+ICh2YWw/ICh2YWwgKyAnJykudG9Mb3dlckNhc2UoKTogJycpLm1hdGNoKHN0cik7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgaXRlbSA9IGFycltpXTtcbiAgICBsZXQgZmlsdGVyZWQgPSBmYWxzZTtcblxuICAgIGlmKCFrZXlzICYmIGhhbmRsZXIoaXRlbSkpIHtcbiAgICAgIGZpbHRlcmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZihrZXlzKSB7XG4gICAgICBmb3IobGV0IGsgPSAwLCBjID0ga2V5cy5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgICAgbGV0IGtleSA9IGtleXNba107XG4gICAgICAgIGtleSA9IEFycmF5LmlzQXJyYXkoa2V5KT8ga2V5OiBba2V5XTtcbiAgICAgICAgbGV0IHZhbCA9IGtleT8gdGhpcy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXksIGl0ZW0pOiBpdGVtO1xuICAgIFxuICAgICAgICBpZiAoaGFuZGxlcih2YWwpKSB7XG4gICAgICAgICAgZmlsdGVyZWQgPSB0cnVlO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZmlsdGVyZWQgJiYgcmVzLnB1c2goaXRlbSk7ICAgXG4gIH1cblxuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBPcmRlciBhbiBhcnJheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsxLCAyLCAzXVxuICogdXRpbHMuc29ydChbMywgMiwgMV0sIHRydWUpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFszLCAyLCAxXVxuICogdXRpbHMuc29ydChbMSwgMiwgM10sIGZhbHNlKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCBbWyd4J11dLCBbdHJ1ZV0pO1xuICogdXRpbHMuc29ydChbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV0sIFsneCddLCB0cnVlKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCAneCcpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogM30sIHt4OiAyfSwge3g6IDF9XVxuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sIFtbJ3gnXV0sIFtmYWxzZV0pO1xuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sIFsneCddLCBmYWxzZSk7XG4gKiB1dGlscy5zb3J0KFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XSwgJ3gnLCBmYWxzZSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxLCB5OiAzfSwge3g6IDIsIHk6IDF9LCB7eDoyLCB5OiAyfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAyLCB5OiAyfSwge3g6IDIsIHk6IDF9LCB7eDogMiwgeTogM31dLCBbWyd4J10sIFsneSddXSwgW3RydWUsIHRydWVdKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiB7eTogMX19LCB7eDoge3k6IDJ9fV1cbiAqIHV0aWxzLnNvcnQoW3t4OiB7eTogMn19LCB7eDoge3k6IDF9fV0sIFtbJ3gnLCAneSddXSwgW3RydWVdKTtcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7Ym9vbGVhbnxBcnJheVtdfHN0cmluZ1tdfHN0cmluZ30gW2tleXNdXG4gKiBAcGFyYW0ge2Jvb2xlYW58Ym9vbGVhbltdfSBbb3JkZXJdIC0gcmV2ZXJzZSBvciBub3RcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xudXRpbHMuc29ydCA9IGZ1bmN0aW9uKGFyciwga2V5cyA9IHRydWUsIG9yZGVyID0gW10pIHtcbiAgYXJyID0gYXJyLnNsaWNlKCk7XG5cbiAgaWYgKGtleXMgPT09IHRydWUpIHtcbiAgICBrZXlzID0gW107XG4gICAgb3JkZXIgPSBbdHJ1ZV07XG4gIH1cbiAgZWxzZSBpZiAoa2V5cyA9PT0gZmFsc2UpIHtcbiAgICBrZXlzID0gW107XG4gICAgb3JkZXIgPSBbZmFsc2VdO1xuICB9XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAga2V5cyA9IFtrZXlzXTtcbiAgfVxuXG4gIGlmICghQXJyYXkuaXNBcnJheShvcmRlcikpIHtcbiAgICBvcmRlciA9IFtvcmRlcl07XG4gIH1cblxuICBsZXQgbCA9IGtleXMubGVuZ3RoO1xuXG4gIGFyci5zb3J0KChhLCBiKSA9PiB7XG4gICAgbGV0IGkgPSAwO1xuXG4gICAgY29uc3QgY2hlY2sgPSAoYSwgYiwgcmV2ZXJzZSA9IGZhbHNlKSA9PiB7XG4gICAgICBpZiAoYSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgYSA9IGEuZ2V0VGltZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgYiA9IGIuZ2V0VGltZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYSA+IGIpIHtcbiAgICAgICAgcmV0dXJuIHJldmVyc2U/IC0xOiAxO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoYSA8IGIpIHtcbiAgICAgICAgcmV0dXJuIHJldmVyc2U/IDE6IC0xO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgICB9O1xuXG4gICAgY29uc3QgbmV4dCA9ICgpID0+IHtcbiAgICAgIGlmIChpID49IGwpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG5cbiAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5KSkge1xuICAgICAgICBrZXkgPSBba2V5XTtcbiAgICAgIH1cblxuICAgICAgbGV0IGFWID0gdGhpcy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXksIGEpO1xuICAgICAgbGV0IGJWID0gdGhpcy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXksIGIpO1xuICAgICAgbGV0IHJlcyA9IGNoZWNrKGFWLCBiViwgb3JkZXJbaV0gPT09IGZhbHNlKTtcblxuICAgICAgaWYgKHJlcyAhPT0gMCkge1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfVxuXG4gICAgICBpKys7XG4gICAgICByZXR1cm4gbmV4dCgpO1xuICAgIH07XG5cbiAgICBpZiAoIWwpIHtcbiAgICAgIHJldHVybiBjaGVjayhhLCBiLCBvcmRlcltpXSA9PT0gZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0KCk7XG4gIH0pO1xuXG4gIHJldHVybiBhcnI7XG59O1xuXG4vKipcbiAqIFJldHVybiBuZXcgb2JqZWN0IHdpdGggdGhlIHNwZWNpZmllZCBrZXlzXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHt4OiAxLCB6OiAxfVxuICogdXRpbHMuaW5jbHVkZUtleXMoe3g6IDEsIHk6IDEsIHo6IDF9LCBbJ3gnLCAneiddKTtcbiAqIFxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICovXG51dGlscy5pbmNsdWRlS2V5cyA9IGZ1bmN0aW9uKG9iaiwga2V5cykge1xuICBsZXQgbmV3T2JqID0ge307XG4gIGxldCBvYmpLZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICBmb3IobGV0IGkgPSAwLCBsID0gb2JqS2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQga2V5ID0gb2JqS2V5c1tpXTtcblxuICAgIGlmKGtleXMuaW5kZXhPZihrZXkpICE9IC0xKSB7XG4gICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbi8qKlxuICogUmV0dXJuIG5ldyBvYmplY3Qgd2l0aG91dCB0aGUgc3BlY2lmaWVkIGtleXNcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMge3g6IDEsIHo6IDF9XG4gKiB1dGlscy5pbmNsdWRlS2V5cyh7eDogMSwgeTogMSwgejogMX0sIFsneSddKTtcbiAqIFxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICovXG51dGlscy5leGNsdWRlS2V5cyA9IGZ1bmN0aW9uKG9iaiwga2V5cykge1xuICBsZXQgbmV3T2JqID0ge307XG4gIGxldCBvYmpLZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICBmb3IobGV0IGkgPSAwLCBsID0gb2JqS2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQga2V5ID0gb2JqS2V5c1tpXTtcblxuICAgIGlmKGtleXMuaW5kZXhPZihrZXkpID09IC0xKSB7XG4gICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbi8qKlxuICogQ2hlY2sgdGhlIHZhbHVlIGlzIGNvbXBvbmVudCBzY29wZSBwcm94eSBvYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmlzU2NvcGVQcm94eSA9IGZ1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gISEodmFsICYmIHR5cGVvZiB2YWwgPT0gJ29iamVjdCcgJiYgdmFsLl9faXNQcm94eSk7XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSB2YWx1ZSBpcyBwbGFpbiBvYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmlzUGxhaW5PYmplY3QgPSBmdW5jdGlvbihvYmopIHtcbiAgcmV0dXJuICEhKG9iaiAmJiB0eXBlb2Ygb2JqID09ICdvYmplY3QnICYmIChvYmouY29uc3RydWN0b3IgPT0gT2JqZWN0IHx8IG9iai5jb25zdHJ1Y3RvciA9PSBBcnJheSkpO1xufTtcblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZVxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnNdIFxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmNvcHkgPSBmdW5jdGlvbih2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ29iamVjdCcgfHwgIXZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgb3B0aW9ucyA9IHsgbmVzdGVkOiB0cnVlLCBlbnVtZXJhYmxlOiB0cnVlLCAuLi5vcHRpb25zIH07XG5cbiAgY29uc3QgbmV4dCA9IChvYmopID0+IHtcbiAgICBvYmogPSB0aGlzLmlzU2NvcGVQcm94eShvYmopPyBvYmouX190YXJnZXQ6IG9iajtcbiAgICBsZXQga2V5cyA9ICFvcHRpb25zLmVudW1lcmFibGU/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaik6IE9iamVjdC5rZXlzKG9iaik7XG4gICAgbGV0IG5ld09iaiA9IEFycmF5LmlzQXJyYXkob2JqKT8gW106IHt9O1xuICAgIFxuICAgIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgbGV0IHZhbCA9IG9ialtrZXldO1xuICAgICAgdmFsID0gdmFsICYmIHR5cGVvZiB2YWwgPT0gJ29iamVjdCcgJiYgb3B0aW9ucy5uZXN0ZWQ/IG5leHQodmFsKTogdmFsOyAgICAgIFxuICAgICAgXG4gICAgICBpZighb2JqLnByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCB7XG4gICAgICAgICAgLi4uT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSksXG4gICAgICAgICAgdmFsdWU6IHZhbFxuICAgICAgICB9KTtcblxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbmV3T2JqW2tleV0gPSB2YWw7ICBcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3T2JqO1xuICB9XG5cbiAgcmV0dXJuIG5leHQodmFsdWUpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2UgdGhlIHZhbHVlIHRvIGF0dHJpYnV0ZSBhcHByb3ByaWF0ZSBmb3JtYXRcbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBmYWxzZSB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRXZlbnRFbWl0dGVyKSB7XG4gICAgcmV0dXJuICdbb2JqZWN0IEV2ZW50XSc7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZSArICcnO1xufTtcblxuLyoqXG4gKiBDb21wYXJlIHR3byB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0geyp9IGFcbiAqIEBwYXJhbSB7Kn0gYlxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmNvbXBhcmUgPSBmdW5jdGlvbiAoYSwgYiwgb3B0aW9ucyA9IHt9KSB7XG4gIGlmICgoYSBpbnN0YW5jZW9mIERhdGUpICYmIChiIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICByZXR1cm4gYS5nZXRUaW1lKCkgPT09IGIuZ2V0VGltZSgpO1xuICB9XG4gIGVsc2UgaWYgKHR5cGVvZiBhID09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGIgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBhLnRvU3RyaW5nKCkgPT09IGIudG9TdHJpbmcoKTtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiA9PSAnb2JqZWN0Jykge1xuICAgIGlmIChhID09PSBudWxsIHx8IGIgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBhID09PSBiO1xuICAgIH1cblxuICAgIG9wdGlvbnMgPSB7IGVudW1lcmFibGU6IHRydWUsIC4uLm9wdGlvbnMgfTtcblxuICAgIGNvbnN0IGNsZWFyVW5kZWZpbmVkID0gKHZhbCkgPT4ge1xuICAgICAgbGV0IG9iaiA9IEFycmF5LmlzQXJyYXkodmFsKT8gW106IHt9O1xuICAgICAgbGV0IGtleXMgPSAhb3B0aW9ucy5lbnVtZXJhYmxlPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcygpOiBPYmplY3Qua2V5cyh2YWwpO1xuXG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgICAgIHZhbFtrZXldICE9PSB1bmRlZmluZWQgJiYgKG9ialtrZXldID0gdmFsW2tleV0pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgaWYob3B0aW9ucy5pZ25vcmVVbmRlZmluZWQpIHtcbiAgICAgIGEgPSBjbGVhclVuZGVmaW5lZChhKTtcbiAgICAgIGIgPSBjbGVhclVuZGVmaW5lZChiKTtcbiAgICB9XG5cbiAgICBsZXQgYUtleXMgPSAhb3B0aW9ucy5lbnVtZXJhYmxlPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcygpOiBPYmplY3Qua2V5cyhhKTtcbiAgICBsZXQgYktleXMgPSAhb3B0aW9ucy5lbnVtZXJhYmxlPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcygpOiBPYmplY3Qua2V5cyhiKTtcbiAgICBcbiAgICBpZiAoYUtleXMubGVuZ3RoICE9IGJLZXlzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGEgPSB0aGlzLmlzU2NvcGVQcm94eShhKT8gYS5fX3RhcmdldDogYTtcbiAgICBiID0gdGhpcy5pc1Njb3BlUHJveHkoYik/IGIuX190YXJnZXQ6IGI7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gYUtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQga2V5ID0gYUtleXNbaV07XG5cbiAgICAgIGlmICghdGhpcy5jb21wYXJlKGFba2V5XSwgYltrZXldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gYSA9PT0gYjtcbn07XG5cbi8qKlxuICogQ29tcGFyZSB0aGUgY3VycmVudCB2YWx1ZSB3aXRoIHRoZSBwcmV2aW91c1xuICpcbiAqIEBwYXJhbSB7Kn0gY3VycmVudCAtIHRoZSBjdXJyZW50IHZhbHVlXG4gKiBAcGFyYW0geyp9IHByZXZpb3VzIC0gdGhlIHByZXZpb3VzIHZhbHVlXG4gKiBAcGFyYW0geyp9IHByZXZpb3VzQ29weSAtIHRoZSBwcmV2aW91cyB2YWx1ZSBjb3B5XG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuY29tcGFyZVByZXZpb3VzVmFsdWUgPSBmdW5jdGlvbihjdXJyZW50LCBwcmV2aW91cywgcHJldmlvdXNDb3B5LCBvcHRpb25zKSB7XG4gIGlmIChjdXJyZW50ICE9PSBwcmV2aW91cykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmNvbXBhcmUoY3VycmVudCwgcHJldmlvdXNDb3B5LCBvcHRpb25zKTtcbn07XG5cbi8qKlxuICogRW5jb2RlIGh0bWwgZW50aXRpZXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcInlvdSAmYW1wIG1lXCJcbiAqIHV0aWxzLmVuY29kZUh0bWxFbnRpdGllcygneW91ICYgbWUnKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuZW5jb2RlSHRtbEVudGl0aWVzID0gZnVuY3Rpb24oaHRtbCkge1xuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgdmFsdWU7XG4gIGVsLnRleHRDb250ZW50ID0gaHRtbDtcbiAgdmFsdWUgPSBlbC5pbm5lckhUTUw7XG4gIGVsLnJlbW92ZSgpO1xuICBlbCA9IG51bGw7XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbi8qKlxuICogRGVjb2RlIGh0bWwgZW50aXRpZXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcInlvdSAmIG1lXCJcbiAqIHV0aWxzLmRlY29kZUh0bWxFbnRpdGllcygneW91ICZhbXAgbWUnKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuZGVjb2RlSHRtbEVudGl0aWVzID0gZnVuY3Rpb24oaHRtbCkge1xuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGxldCB2YWx1ZTtcbiAgZWwuaW5uZXJIVE1MID0gaHRtbDtcbiAgdmFsdWUgPSBlbC52YWx1ZTtcbiAgZWwucmVtb3ZlKCk7XG4gIGVsID0gbnVsbDtcbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RyaW5nIGZyb20gZGFzaCB0byBjYW1lbCBjYXNlIGZvcm1hdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnRvQ2FtZWxDYXNlID0gZnVuY3Rpb24oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXFxXKyguKS9nLCAobSwgYykgPT4gYy50b1VwcGVyQ2FzZSgpKTtcbn07XG5cbi8qKlxuICogQ2FwaXRhbGl6ZSB0aGUgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuY2FwaXRhbGl6ZSA9IGZ1bmN0aW9uKHN0cikge1xuICByZXR1cm4gc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59O1xuXG4vKipcbiAqIENoYW5nZSBzdHJpbmcgZnJvbSBjYW1lbCB0byBkYXNoIGNhc2UgZm9ybWF0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMudG9EYXNoQ2FzZSA9IGZ1bmN0aW9uKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgKG0sIGMpID0+IGAtJHtjLnRvTG93ZXJDYXNlKCl9YCk7XG59O1xuXG4vKipcbiAqIEdldCBuZXN0ZWQgb2JqZWN0IHByb3BlcnR5IGJ5IGFycmF5IGtleXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyA1XG4gKiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmdldFByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0KSB7XG4gIGxldCBjdXJyZW50O1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZSgobywgaykgPT4ge1xuICAgIGkrKztcblxuICAgIGlmICh0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIG87XG4gICAgfVxuXG4gICAgaWYgKG9ba10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIChpID09IGxlbmd0aCkgJiYgKGN1cnJlbnQgPSBvW2tdKTtcbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gY3VycmVudDtcbn07XG5cbi8qKlxuICogQ2hlY2sgbmVzdGVkIG9iamVjdHMgdHJlZSBoYXMgcHJvcGVydHkgb3Igbm90XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgdHJ1ZVxuICogdXRpbHMuaGFzUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCkge1xuICBsZXQgaGFzID0gZmFsc2U7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKChvLCBrKSA9PiB7XG4gICAgaSsrO1xuXG4gICAgaWYgKHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gISFvO1xuICAgIH1cblxuICAgIGlmICghby5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIChpID09IGxlbmd0aCkgJiYgKGhhcyA9IG8uaGFzT3duUHJvcGVydHkoaykpO1xuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiBoYXM7XG59O1xuXG4vKipcbiAqIFNldCBuZXN0ZWQgb2JqZWN0cyB0cmVlIHByb3BlcnR5XG4gKiBSZXR1cm5zIGNoYW5nZWQgcHJvcGVydHkgb2JqZWN0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMge3k6IDZ9XG4gKiB1dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSwgKGxhc3QsIHZhbCkgPT4gbGFzdD8gNjogKHZhbCB8fCB7fSkpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuc2V0UHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QsIGZuKSB7XG4gIGxldCBjdXJyZW50ID0gdW5kZWZpbmVkO1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZSgobywgaykgPT4ge1xuICAgIGkrKztcblxuICAgIGlmICh0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghby5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgb1trXSA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBvW2tdID0gZm4oaSA9PSBsZW5ndGgsIG9ba10pO1xuICAgIGN1cnJlbnQgPSBvO1xuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiBjdXJyZW50O1xufTtcblxuLyoqXG4gKlxuICogRGVsZXRlIHByb3BlcnR5IGZyb20gbmVzdGVkIG9iamVjdHMgdHJlZVxuICogUmV0dXJucyBkZWxldGVkIHByb3BlcnR5IHZhbHVlXG4gKiBZb3UgY2FuIGNhbmNlbCBkZWxldGluZyBpZiB3aWxsIHJldHVybiBmYWxzZSBpbiB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyA1XG4gKiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSk7XG4gQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0sIHZhbCA9PiB2YWwgIT0gNSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHBhcmFtIHtmdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0LCBmbikge1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCB2YWx1ZTtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKChvLCBrKSA9PiB7XG4gICAgaSsrO1xuXG4gICAgaWYgKHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFvLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgaWYgKGkgPT0gbGVuZ3RoKSB7XG4gICAgICB2YWx1ZSA9IG9ba107XG4gICAgICAoIWZuIHx8IGZuKHZhbHVlKSkgJiYgKGRlbGV0ZSBvW2tdKTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IHRhcmdldCBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5cbnV0aWxzLmdldEVudW1lcmFibGVQcm9wZXJ0eVRhcmdldCA9IGZ1bmN0aW9uKHRhcmdldCwga2V5KSB7XG4gIGNvbnN0IGNoZWNrID0gKG9iaikgPT4ge1xuICAgIGlmIChvYmoucHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBsZXQgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcblxuICAgIGlmICghcHJvdG8pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjaGVjayhwcm90byk7XG4gIH07XG5cbiAgcmV0dXJuIGNoZWNrKHRhcmdldCk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgb3duIHByb3BlcnR5IHRhcmdldCBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG51dGlscy5nZXRPd25Qcm9wZXJ0eVRhcmdldCA9IGZ1bmN0aW9uKHRhcmdldCwga2V5KSB7XG4gIGNvbnN0IGNoZWNrID0gKG9iaikgPT4ge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBsZXQgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcblxuICAgIGlmICghcHJvdG8pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjaGVjayhwcm90byk7XG4gIH07XG5cbiAgcmV0dXJuIGNoZWNrKHRhcmdldCk7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIHJhbmRvbSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmNyZWF0ZVJhbmRvbVN0cmluZyA9IGZ1bmN0aW9uKGxlbmd0aCA9IDE2LCBmbiA9IG51bGwpIHtcbiAgbGV0IHN0ciA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCBsZW5ndGggKyAyKTtcbiAgbGV0IHZhbCA9ICcnO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gc3RyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC42Nikge1xuICAgICAgdmFsICs9IHN0cltpXS50b1VwcGVyQ2FzZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhbCArPSBzdHJbaV07XG4gICAgfVxuICB9XG5cbiAgaWYgKGZuICYmIGZuKHZhbCkpIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVSYW5kb21TdHJpbmcobGVuZ3RoLCBmbik7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXRpbHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCBmb3IgZWxlbWVudHMgd2hpY2ggaGF2ZSBhc3luYyBhdHRyaWJ1dGUgY29udGVudC5cclxuICogXHJcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cclxuICogXHJcbiAqIEB0YWcgdXJsXHJcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcmwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBtYXRjaGVzID0gJ1t1cmxdJztcclxuXHJcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xyXG4gICAgc3VwZXIoLi4uYXJncyk7XHJcbiAgICB0aGlzLnVybEF0dHJpYnV0ZSA9ICdzcmMnO1xyXG4gIH1cclxuXHJcbiAgY29tcGlsZWQoKSB7XHJcbiAgICB0aGlzLmF0dHIoJ3VybCcsIHRoaXMuc2V0VXJsKTtcclxuICB9XHJcblxyXG4gIHNldFVybCh1cmwpIHtcclxuICAgIHRoaXMuYXR0cnNbdGhpcy51cmxBdHRyaWJ1dGVdID0gdXJsO1xyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3VybC5qcyIsImltcG9ydCBBa2lsaSBmcm9tICcuL2FraWxpLmpzJztcbmltcG9ydCBTY29wZSBmcm9tICcuL3Njb3BlLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zZXJ2aWNlcy9zdG9yZS5qcyc7XG5pbXBvcnQgZ2xvYmFscyBmcm9tICcuL2dsb2JhbHMuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuXG5leHBvcnQgY29uc3QgZXZhbHVhdGlvblJlZ2V4ID0gL1xcJHsoKCg/IVxcJHspLikqKX0vO1xuZXhwb3J0IGNvbnN0IGV2YWx1YXRpb25SZWdleEdsb2JhbCA9IG5ldyBSZWdFeHAoZXZhbHVhdGlvblJlZ2V4LnNvdXJjZSwgXCJnXCIpO1xuZXhwb3J0IGNvbnN0IHN5c3RlbUF0dHJpYnV0ZXMgPSBbJ2NvbXBvbmVudCcsICdzY29wZSddO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZnJvbSB3aGljaCBhbGwgY29tcG9uZW50cyBhcmUgaW5oZXJpdGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFtdO1xuICBzdGF0aWMgZXZlbnRzID0gW107XG4gIHN0YXRpYyBjb250cm9sQXR0cmlidXRlcyA9IGZhbHNlO1xuICBzdGF0aWMgc2F2ZUF0dHJpYnV0ZVByb3h5SW4gPSBmYWxzZTtcbiAgc3RhdGljIHNhdmVBdHRyaWJ1dGVQcm94eU91dCA9IGZhbHNlO1xuICBzdGF0aWMgdHJhbnNwYXJlbnQgPSBmYWxzZTtcbiAgc3RhdGljIHRlbXBsYXRlID0gJyc7XG4gIHN0YXRpYyB0ZW1wbGF0ZVVybCA9ICcnO1xuICBzdGF0aWMgc2NvcGUgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0byBkZWZpbmUgdGhlIGNvbXBvbmVudFxuICAgKi9cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2NvbXBvbmVudCcsIENvbXBvbmVudCk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgdGhlIGV4cHJlc3Npb25cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4cHJlc3Npb25cbiAgICogQHBhcmFtIHtvYmplY3R9IFt2YXJzXVxuICAgKi9cbiAgc3RhdGljIHBhcnNlKGNvbnRleHQsIGV4cHJlc3Npb24sIHZhcmlhYmxlcyA9IHt9KSB7XG4gICAgdmFyaWFibGVzID0geyAuLi5nbG9iYWxzLCAuLi52YXJpYWJsZXN9O1xuICAgIGNvbnN0IGtleXMgPSBbXTtcbiAgICBjb25zdCB2YXJzID0gW107XG4gICAgY29uc3QgZXhwcyA9IHV0aWxzLnNwbGl0KGV4cHJlc3Npb24sICc7JywgWydcIicsIFwiJ1wiLCAnYCddKTsgIFxuICAgIGV4cHNbZXhwcy5sZW5ndGggLSAxXSA9IGByZXR1cm4gJHtleHBzW2V4cHMubGVuZ3RoIC0gMV19YDtcblxuICAgIGZvciAobGV0IGtleSBpbiB2YXJpYWJsZXMpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgdmFycy5wdXNoKHZhcmlhYmxlc1trZXldKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbiguLi5rZXlzLCBgJHtleHBzLmpvaW4oJzsgJyl9YCkuYXBwbHkoY29udGV4dCwgdmFycyk7XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICogXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWwgXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbc2NvcGVdIFxuICAgKi9cbiAgY29uc3RydWN0b3IoZWwsIHNjb3BlID0ge30pIHtcbiAgICBpZiAoIShlbCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBtdXN0IHBhc3MgYW4gaHRtbCBlbGVtZW50IHRvIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3JgKTtcbiAgICB9XG5cbiAgICB0aGlzLl9faXNNb3VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2lzQ29tcGlsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9faXNSZXNvbHZlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fcHJldmVudCA9IGZhbHNlO1xuICAgIHRoaXMuX19iaW5kaW5ncyA9IHt9O1xuICAgIHRoaXMuX190YWdzID0ge307XG4gICAgdGhpcy5fX2V2YWx1YXRpbmdFdmVudCA9IG51bGw7XG4gICAgdGhpcy5fX3JlY29tcGlsaW5nID0gZmFsc2U7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IG51bGw7XG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IHt9O1xuICAgIHRoaXMuX19kaXNhYmxlU3RvcmVLZXlzID0ge307XG4gICAgdGhpcy5fX2Rpc2FibGVBdHRyS2V5cyA9IHt9O1xuICAgIHRoaXMuX19jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuX19wYXJlbnQgPSBudWxsO1xuICAgIHRoaXMuX19wYXJlbnRzID0gW107XG4gICAgdGhpcy5fX2F0dHJzID0ge307XG4gICAgdGhpcy5fX2F0dHJMaW5rcyA9IHt9O1xuICAgIHRoaXMuX19zdG9yZUxpbmtzID0ge307XG4gICAgdGhpcy5fX2F0dHJpYnV0ZU9mID0gbnVsbDtcbiAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudCA9IHRoaXM7XG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgY29tcGlsYXRpb24gb3B0aW9ucyBcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGVDb21waWxhdGlvbk9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHsgXG4gICAgICBjaGVja0NoYW5nZXM6IGZhbHNlLCBcbiAgICAgIHNldEV2ZW50czogdHJ1ZSxcbiAgICAgIHNldFBhcmVudHM6IHRydWUsXG4gICAgICBzZXRCb29sZWFuQXR0cmlidXRlczogdHJ1ZSxcbiAgICAgIGRlZmluZUF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAuLi5vcHRpb25zIFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHJlY29tcGlsYXRpb24gb3B0aW9ucyBcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGVSZWNvbXBpbGF0aW9uT3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4geyBcbiAgICAgIC4uLnRoaXMuX19jcmVhdGVDb21waWxhdGlvbk9wdGlvbnMoKSxcbiAgICAgIHNldEV2ZW50czogZmFsc2UsXG4gICAgICBzZXRQYXJlbnRzOiBmYWxzZSxcbiAgICAgIHNldEJvb2xlYW5BdHRyaWJ1dGVzOiBmYWxzZSxcbiAgICAgIGRlZmluZUF0dHJpYnV0ZXM6IGZhbHNlLFxuICAgICAgLi4ub3B0aW9ucyBcbiAgICB9O1xuICB9XG4gXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gdGhlIHJlY29tcGlsYXRpb25cbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZWNvbXBpbGUob3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IHRydWU7XG4gICAgdGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQuX19kaXNhYmxlUHJveHkgPSB7fTtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0gdGhpcy5fX2NyZWF0ZVJlY29tcGlsYXRpb25PcHRpb25zKG9wdGlvbnMpOyAgICBcbiAgICB0aGlzLl9fY29tcGlsaW5nLnNldEV2ZW50cyAmJiB0aGlzLl9fc2V0RXZlbnRzKCk7XG4gICAgdGhpcy5fX2NvbXBpbGluZy5zZXRQYXJlbnRzICYmIHRoaXMuX19zZXRQYXJlbnRzKCk7XG4gICAgdGhpcy5fX2NvbXBpbGluZy5zZXRCb29sZWFuQXR0cmlidXRlcyAmJiB0aGlzLl9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKTtcbiAgICB0aGlzLl9fY29tcGlsaW5nLmRlZmluZUF0dHJpYnV0ZXMgJiYgdGhpcy5fX2RlZmluZUF0dHJpYnV0ZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gdGhlIGNyZWF0aW9uXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlKCkge1xuICAgIHRoaXMuX19jb21waWxpbmcgPSB0aGlzLl9fY3JlYXRlQ29tcGlsYXRpb25PcHRpb25zKCk7ICAgXG4gICAgdGhpcy5fX2luaXRpYWxpemUoKTtcbiAgICB0aGlzLl9fc2V0RXZlbnRzKCk7XG4gICAgdGhpcy5fX3NldFBhcmVudHMoKTtcbiAgICB0aGlzLl9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKTtcbiAgICB0aGlzLl9fZGVmaW5lQXR0cmlidXRlcygpO1xuICAgIEFraWxpLmlzb2xhdGUoKCkgPT4gdGhpcy5jcmVhdGVkKHRoaXMuYXR0cnMpKTsgICAgICAgXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIG9uIHRoZSBjb21waWxhdGlvblxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgX19jb21waWxlKCkge1xuICAgIGxldCBjb250cm9sID0gdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzIHx8ICF0aGlzLl9fZXZhbHVhdGVQYXJlbnQ7XG4gICAgbGV0IHAgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB0aGlzLl9fYXR0cmlidXRlT2YgPSBjb250cm9sPyB0aGlzOiB0aGlzLl9fZXZhbHVhdGVQYXJlbnQuX19ha2lsaTtcblxuICAgIGlmICghdGhpcy5fX3JlY29tcGlsaW5nIHx8IHRoaXMuX19jb21waWxpbmcubmV3UGFyZW50IHx8IHRoaXMuX19jb250cm9sQXR0cmlidXRlcykge1xuICAgICAgdGhpcy5fX2ludGVycG9sYXRlQXR0cmlidXRlcyh0aGlzLmVsLCB0aGlzLl9fYXR0cmlidXRlT2YpO1xuICAgIH1cblxuICAgIGNvbnN0IGludGVycG9sYXRlID0gKGNoaWxkcmVuLCBwYXJlbnQpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PSAzICYmIHRoaXMuX19pbml0aWFsaXplTm9kZShjaGlsZCwgcGFyZW50KSkge1xuICAgICAgICAgIHRoaXMuX19ldmFsdWF0ZU5vZGUoY2hpbGQsIHRoaXMuX19jb21waWxpbmc/IHRoaXMuX19jb21waWxpbmcuY2hlY2tDaGFuZ2VzOiBmYWxzZSk7ICAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hpbGQubm9kZVR5cGUgPT0gMSAmJiAhY2hpbGQuX19ha2lsaSkge1xuICAgICAgICAgIHRoaXMuX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXMoY2hpbGQpO1xuICAgICAgICAgIGludGVycG9sYXRlKGNoaWxkLmNoaWxkTm9kZXMsIGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpbnRlcnBvbGF0ZSh0aGlzLmVsLmNoaWxkTm9kZXMsIHRoaXMuZWwpO1xuICAgIHRoaXMuX19pc01vdW50ZWQgPSB0cnVlO1xuICAgIGxldCByZXM7XG5cbiAgICBpZiAoIXRoaXMuX19yZWNvbXBpbGluZykge1xuICAgICAgcmVzID0gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0cnMub25Db21waWxlZCAmJiB0aGlzLmF0dHJzLm9uQ29tcGlsZWQudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBpbGVkKCk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGVVcmwpIHtcbiAgICAgICAgcCA9IHJlcXVlc3QuZ2V0KHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGVVcmwsIHsgY2FjaGU6IHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGVDYWNoZSB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMuX19jb250ZW50O1xuICAgICAgICAgIEFraWxpLnNldFRlbXBsYXRlKHRoaXMuZWwsIHJlcy5kYXRhKTtcbiAgICAgICAgICBkZWxldGUgdGhpcy5fX2NvbnRlbnQ7ICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXMgPSBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgdGhpcy5hdHRycy5vblJlY29tcGlsZWQgJiYgdGhpcy5hdHRycy5vblJlY29tcGlsZWQudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICAgIHRoaXMucmVjb21waWxlZCgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IGZhbHNlO1xuICAgIHRoaXMuX19jb21waWxpbmcgPSBudWxsO1xuXG4gICAgcmV0dXJuIHAudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLl9faXNDb21waWxlZCA9IHRydWU7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmUgdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgX19yZXNvbHZlKCkge1xuICAgIGlmICh0aGlzLl9faXNSZXNvbHZlZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmF0dHJzLm9uUmVzb2x2ZWQgJiYgdGhpcy5hdHRycy5vblJlc29sdmVkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShBa2lsaS5pc29sYXRlKCgpID0+IHRoaXMucmVzb2x2ZWQoKSkpLnRoZW4ocmVzID0+IHtcbiAgICAgIHRoaXMuX19pc1Jlc29sdmVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUGFydCBvZiB0aGUge0BzZWUgQ29tcG9uZW50I19fY29tcGlsZX0gbWV0aG9kXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZSgpIHsgICAgXG4gICAgbGV0IHBhcmVudCA9IEFraWxpLmdldEFraWxpUGFyZW50cyh0aGlzLmVsLCBmYWxzZSk7ICAgICBcbiAgICBsZXQgU2NvcGUgPSB0aGlzLmNvbnN0cnVjdG9yLnNjb3BlIHx8IEFraWxpLlNjb3BlO1xuICAgIGxldCBzY29wZTtcbiAgICBsZXQgaXNSb290ID0gQWtpbGkuX19yb290ID09PSB0aGlzLmVsO1xuICAgIHRoaXMuZWwuX19ha2lsaSA9IHRoaXM7XG5cbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBzY29wZSA9IG5ldyBTY29wZSh0aGlzLmVsLmdldEF0dHJpYnV0ZSgnc2NvcGUnKSB8fCBBa2lsaS5jcmVhdGVTY29wZU5hbWUoKSwgdGhpcy5lbCwgdGhpcyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2NvcGUgPSBuZXcgU2NvcGUoaXNSb290PyAncm9vdCc6IEFraWxpLmNyZWF0ZVNjb3BlTmFtZSgpLCB0aGlzLmVsLCB0aGlzKTtcbiAgICAgIGlzUm9vdCAmJiAoQWtpbGkucm9vdCA9IHRoaXMpO1xuICAgIH1cblxuICAgIGxldCBfX3Njb3BlID0gc2NvcGU7XG4gICAgbGV0IF9zY29wZSA9IE9iamVjdC5hc3NpZ24oc2NvcGUsIHRoaXMuc2NvcGUpO1xuICAgIGxldCBjb250cm9sQXR0cmlidXRlcyA9IHRoaXMuY29uc3RydWN0b3IuY29udHJvbEF0dHJpYnV0ZXM7XG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuY29uc3RydWN0b3IuZXZlbnRzO1xuXG4gICAgaWYgKHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGUpIHtcbiAgICAgIEFraWxpLnNldFRlbXBsYXRlKHRoaXMuZWwsIHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlVXJsKSB7XG4gICAgICB0aGlzLl9fY29udGVudCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgICB9XG5cbiAgICB0aGlzLl9fc2NvcGUgPSBfX3Njb3BlO1xuICAgIHRoaXMuX19ldmVudHMgPSBldmVudHM7XG4gICAgdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzID0gY29udHJvbEF0dHJpYnV0ZXM7XG4gICAgdGhpcy5fX3NhdmVBdHRyaWJ1dGVQcm94eUluID0gdGhpcy5jb25zdHJ1Y3Rvci5zYXZlQXR0cmlidXRlUHJveHlJbjtcbiAgICB0aGlzLl9fc2F2ZUF0dHJpYnV0ZVByb3h5T3V0ID0gdGhpcy5jb25zdHJ1Y3Rvci5zYXZlQXR0cmlidXRlUHJveHlPdXQ7XG5cbiAgICBBa2lsaS5hZGRTY29wZShzY29wZSk7XG4gICAgdGhpcy5zY29wZSA9IHRoaXMuX19uZXN0ZWRPYnNlcnZlKF9zY29wZSwgW10pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBib29sZWFuIGF0dHJpYnV0ZXNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXRCb29sZWFuQXR0cmlidXRlcygpIHtcbiAgICB0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzID0gW10uY29uY2F0KEFraWxpLmh0bWxCb29sZWFuQXR0cmlidXRlcywgdGhpcy5jb25zdHJ1Y3Rvci5ib29sZWFuQXR0cmlidXRlcyk7XG5cbiAgICBjb25zdCBzZXRBdHRyID0gKGVsKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgYXR0cnMgPSBlbC5hdHRyaWJ1dGVzLCBsID0gYXR0cnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBub2RlID0gYXR0cnNbaV07XG5cbiAgICAgICAgaWYgKHRoaXMuYm9vbGVhbkF0dHJpYnV0ZXMuaW5kZXhPZihub2RlLm5vZGVOYW1lKSAhPSAtMSkge1xuICAgICAgICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoYGJvb2xlYW4tJHtub2RlLm5vZGVOYW1lfWApKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYGJvb2xlYW4tJHtub2RlLm5vZGVOYW1lfWAsIGVsLmdldEF0dHJpYnV0ZShub2RlLm5vZGVOYW1lKSB8fCBub2RlLm5vZGVOYW1lKTtcbiAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBlbC5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gZWwuY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYgKCFjaGlsZC5fX2FraWxpKSB7XG4gICAgICAgICAgc2V0QXR0cihjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2V0QXR0cih0aGlzLmVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZXZlbnRzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0RXZlbnRzKCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5fX2V2ZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBldiA9IHRoaXMuX19ldmVudHNbaV07XG4gICAgICAhL15vbi0vaS50ZXN0KGV2KSAmJiAoZXYgPSAnb24tJyArIGV2KTtcblxuICAgICAgaWYgKCF0aGlzLmVsLmhhc0F0dHJpYnV0ZShldikpIHtcbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoZXYsICcnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IGNvbXBvbmVudCBwYXJlbnRzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0UGFyZW50cygpIHtcbiAgICBsZXQgcGFyZW50cyA9IEFraWxpLmdldEFraWxpUGFyZW50cyh0aGlzLmVsKTtcblxuICAgIGlmICghcGFyZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbmV3UGFyZW50ID0gdGhpcy5fX3BhcmVudCAhPT0gcGFyZW50c1swXTtcbiAgICBsZXQgZXZhbHVhdGVQYXJlbnQgPSBudWxsO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBwYXJlbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHBhcmVudCA9IHBhcmVudHNbaV07XG5cbiAgICAgIGlmICghcGFyZW50Ll9fYWtpbGkuY29uc3RydWN0b3IudHJhbnNwYXJlbnQpIHtcbiAgICAgICAgZXZhbHVhdGVQYXJlbnQgPSBwYXJlbnQ7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fX2NvbXBpbGluZy5uZXdQYXJlbnQgPSBuZXdQYXJlbnQ7XG4gICAgbmV3UGFyZW50ICYmIHRoaXMuX19kZXRhY2goKTtcblxuICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLnRyYW5zcGFyZW50KSB7XG4gICAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudCA9IGV2YWx1YXRlUGFyZW50Ll9fYWtpbGk7XG4gICAgfVxuXG4gICAgdGhpcy5fX2V2YWx1YXRlUGFyZW50ID0gZXZhbHVhdGVQYXJlbnQ7XG4gICAgdGhpcy5fX3BhcmVudCA9IHBhcmVudHNbMF07XG4gICAgdGhpcy5fX3BhcmVudHMgPSBwYXJlbnRzO1xuICAgIHRoaXMuc2NvcGUuX19wYXJlbnQgPSB0aGlzLl9fZXZhbHVhdGVQYXJlbnQuX19ha2lsaS5zY29wZTtcbiAgICAhdGhpcy5fX3JlY29tcGlsaW5nICYmIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2FkZENoaWxkKHRoaXMuZWwpO1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLnNjb3BlLCB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19zY29wZSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGNoaWxkIGVsZW1lbnQgdG8gdGhlIGxpc3RcbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2FkZENoaWxkKGVsKSB7XG4gICAgdGhpcy5fX2NoaWxkcmVuLnB1c2goZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwbGljZSBjaGlsZCBmcm9tIHRoZSBsaXN0XG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zcGxpY2VDaGlsZChlbCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5fX2NoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5fX2NoaWxkcmVuW2ldO1xuXG4gICAgICBpZiAoY2hpbGQgPT09IGVsKSB7XG4gICAgICAgIHRoaXMuX19jaGlsZHJlbi5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGktLTtcbiAgICAgICAgbC0tO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBZb3UgY2FuIGNoYW5nZSBleHByZXNzaW9uIGJlZm9yZSBwYXJzaW5nIGhlcmVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4cHJlc3Npb25cbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0UGFyc2VkRXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgbm9kZSBoYXMgYW55IHByb3BlcnR5IGNoYW5nZXMgb3Igbm90XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jaGVja0V2YWx1YXRpb24obm9kZSkge1xuICAgIGlmICghT2JqZWN0LmtleXMobm9kZS5fX3Byb3BlcnRpZXMpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgayBpbiBub2RlLl9fcHJvcGVydGllcykge1xuICAgICAgaWYgKCFub2RlLl9fcHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IHByb3AgPSBub2RlLl9fcHJvcGVydGllc1trXTtcbiAgICAgIGxldCB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKHByb3Aua2V5cywgcHJvcC5jb21wb25lbnQuX19zY29wZSk7XG5cbiAgICAgIGlmICghdXRpbHMuY29tcGFyZVByZXZpb3VzVmFsdWUodmFsdWUsIHByb3AudmFsdWUsIHByb3AuY29weSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqICBDaGVjayBub2RlIGhhcyBjaGFuZ2VkIG9uIHRoZSBjZXJ0YWluIGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jaGVja05vZGVQcm9wZXJ0eUNoYW5nZShub2RlLCBrZXlzLCB2YWx1ZSkge1xuICAgIGxldCBwcm9wID0gdGhpcy5fX2dldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKTtcbiAgICBcbiAgICBpZiAoIXByb3ApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiAhdXRpbHMuY29tcGFyZVByZXZpb3VzVmFsdWUodmFsdWUsIHByb3AudmFsdWUsIHByb3AuY29weSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGV4Y2VwdGlvbiBtZXNzYWdlXG4gICAqIFxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGUgXG4gICAqIEBwYXJhbSB7RXJyb3J9IGVyciBcbiAgICovXG4gIF9fY3JlYXRlRXhjZXB0aW9uTWVzc2FnZShub2RlLCBlcnIpIHtcbiAgICBsZXQgdGFnTmFtZSA9IG5vZGUuX19jb21wb25lbnQuZWwudGFnTmFtZTtcbiAgICBsZXQgYXR0ck5hbWUgPSBub2RlLl9fY29tcG9uZW50LmVsLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50Jyk7XG4gICAgbGV0IGNvbXBvbmVudE5hbWUgPSAoYXR0ck5hbWUgfHwgdGFnTmFtZSkudG9Mb3dlckNhc2UoKTtcbiAgICBsZXQgZWxlbWVudE5hbWUgPSBub2RlLl9fZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgbGV0IGF0dHJpYnV0ZU5hbWUgPSAobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKT8gbm9kZS5uYW1lLnRvTG93ZXJDYXNlKCk6ICcnOyAgICAgICAgXG4gICAgbGV0IG1lc3NhZ2VzID0gWyBlcnIubWVzc2FnZSwgbm9kZS5fX2V4cHJlc3Npb24gXTtcbiAgICBhdHRyaWJ1dGVOYW1lICYmIG1lc3NhZ2VzLnB1c2goYFthdHRyaWJ1dGUgJHthdHRyaWJ1dGVOYW1lfV1gKTtcbiAgICBtZXNzYWdlcyA9IG1lc3NhZ2VzLmNvbmNhdChbIGBbZWxlbWVudCAke2VsZW1lbnROYW1lfV1gLCBgW2NvbXBvbmVudCAke2NvbXBvbmVudE5hbWV9XWAgXSk7XG4gICAgcmV0dXJuIGBFeHByZXNzaW9uIGVycm9yOiBgICsgbWVzc2FnZXMuam9pbignXFxuXFx0YXQgJyk7XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgbm9kZSBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZShub2RlKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGxldCBhdHRyaWJ1dGVWYWx1ZTtcbiAgICBsZXQgZXhwcmVzc2lvbjtcbiAgICBjb25zdCBldmFsQ29tcG9uZW50ID0gbm9kZS5fX2F0dHJpYnV0ZU9mIHx8IG5vZGUuX19jb21wb25lbnQ7XG5cbiAgICBpZiAobm9kZS5fX2NvbXBvbmVudC5wYXJlbnRzKChjb20pID0+IGNvbS5fX3ByZXZlbnQpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHsgcmVzOiBub2RlLl9fZXhwcmVzc2lvbiB9O1xuICAgIH1cblxuICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cikgJiYgbm9kZS5fX2NvbXBvbmVudC5fX3ByZXZlbnQpIHtcbiAgICAgIHJldHVybiB7IHJlczogbm9kZS5fX2V4cHJlc3Npb24gfTtcbiAgICB9XG4gICAgXG4gICAgbGV0IHJlcyA9IG5vZGUuX19leHByZXNzaW9uLnJlcGxhY2UoZXZhbHVhdGlvblJlZ2V4R2xvYmFsLCAobSwgZCkgPT4ge1xuICAgICAgY291bnRlcisrO1xuICAgICAgbGV0IGV2YWx1YXRlO1xuICAgICAgbGV0IGV2YWx1YXRpb24gPSBbXTtcbiAgICAgIGxldCBleGlzdGluZ0JpbmRpbmdzID0ge307XG4gICAgICBsZXQgcGFyZW50QmluZGluZ3MgPSB7fTtcbiAgICAgIGxldCBwYXJzZVZhbHVlID0gbm9kZS5fX2NvbXBvbmVudC5fX2dldFBhcnNlZEV4cHJlc3Npb24oZCk7XG4gICAgICBBa2lsaS5fX2V2YWx1YXRpb24gPSB7IG5vZGU6IG5vZGUsIGxpc3Q6IFtdLCBjb21wb25lbnQ6IG5vZGUuX19jb21wb25lbnQgfTtcbiAgICAgIFxuICAgICAgdHJ5IHtcbiAgICAgICAgZXZhbHVhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLnBhcnNlKGV2YWxDb21wb25lbnQuX19ldmFsdWF0aW9uQ29tcG9uZW50LnNjb3BlLCBwYXJzZVZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlcnIpIHsgICAgICAgIFxuICAgICAgICB0aHJvdyB0aGlzLl9fY3JlYXRlRXhjZXB0aW9uTWVzc2FnZShub2RlLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoQWtpbGkuX19ldmFsdWF0aW9uKSB7XG4gICAgICAgIGV2YWx1YXRpb24gPSBBa2lsaS5fX2V2YWx1YXRpb24ubGlzdDtcbiAgICAgICAgQWtpbGkuX19ldmFsdWF0aW9uLmxpc3QgPSBudWxsO1xuICAgICAgICBBa2lsaS5fX2V2YWx1YXRpb24gPSBudWxsO1xuICAgICAgfVxuICAgICAgXG4gICAgICBmb3IgKGxldCBpID0gZXZhbHVhdGlvbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBsZXQgZGF0YSA9IGV2YWx1YXRpb25baV07XG4gICAgICAgIGxldCBoYXNoID0gZGF0YS5jb21wb25lbnQuX19jcmVhdGVLZXlzSGFzaChkYXRhLmtleXMpO1xuICAgICAgICBsZXQgcGFyZW50c0hhc2ggPSBkYXRhLmNvbXBvbmVudC5fX2NyZWF0ZUtleXNIYXNoKGRhdGEucGFyZW50cyk7XG4gICAgICAgXG4gICAgICAgIGlmIChkYXRhLm5vdEJpbmRpbmcpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChleGlzdGluZ0JpbmRpbmdzW2hhc2hdKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcGFyZW50VmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhkYXRhLnBhcmVudHMsIGRhdGEuY29tcG9uZW50Ll9fc2NvcGUpOyAgICAgICAgXG5cbiAgICAgICAgaWYgKHBhcmVudFZhbHVlICYmIHR5cGVvZiBwYXJlbnRWYWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGlmIChBa2lsaS5vcHRpb25zLmRlYnVnICYmIHBhcmVudEJpbmRpbmdzW3BhcmVudHNIYXNoXSA9PSA1MCkge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihbXG4gICAgICAgICAgICAgIGBGb3IgaGlnaGVyIHBlcmZvcm1hbmNlLCBkb24ndCBsb29wIFByb3h5IGFycmF5cy9vYmplY3RzIGluc2lkZSBleHByZXNzaW9uIGZ1bmN0aW9ucywgb3IgdXNlIEFraWxpLnVuZXZhbHVhdGUoKSB0byB3cmFwIHlvdSBjb2RlLmAsXG4gICAgICAgICAgICAgIGAkeyBub2RlLl9fZXhwcmVzc2lvbiB9YCxcbiAgICAgICAgICAgICAgYHNjb3BlIHByb3BlcnR5IFwiJHsgZGF0YS5wYXJlbnRzLmpvaW4oJy4nKX1cImBcbiAgICAgICAgICAgIF0uam9pbignXFxuXFx0YXQgJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAhcGFyZW50QmluZGluZ3NbcGFyZW50c0hhc2hdPyBwYXJlbnRCaW5kaW5nc1twYXJlbnRzSGFzaF0gPSAxOiBwYXJlbnRCaW5kaW5nc1twYXJlbnRzSGFzaF0rKztcbiAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICBpZiAoXG4gICAgICAgICAgdXRpbHMuaXNTY29wZVByb3h5KHBhcmVudFZhbHVlKSAmJiBcbiAgICAgICAgICBkYXRhLmNvbXBvbmVudCAhPT0gZXZhbENvbXBvbmVudC5fX2V2YWx1YXRpb25Db21wb25lbnQgJiYgXG4gICAgICAgICAgZGF0YS5jb21wb25lbnQgPT09IGRhdGEucmVhbENvbXBvbmVudFxuICAgICAgICApIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSAgXG5cbiAgICAgICAgZGF0YS5jb21wb25lbnQuX19iaW5kQW5kU2V0UHJvcGVydHkobm9kZSwgZGF0YS5rZXlzLCBkYXRhLmV2YWx1YXRlZCk7XG4gICAgICAgIGV4aXN0aW5nQmluZGluZ3NbaGFzaF0gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBleGlzdGluZ0JpbmRpbmdzID0gbnVsbDtcbiAgICAgIGV2YWx1YXRpb24gPSBudWxsO1xuXG4gICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKSB7XG4gICAgICAgIGV4cHJlc3Npb24gPSBtO1xuICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IGV2YWx1YXRlO1xuICAgICAgICByZXR1cm4gdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKGV2YWx1YXRlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBldmFsdWF0ZSA9PSAnb2JqZWN0Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShldmFsdWF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZSkge1xuICAgICAgICAgIHJldHVybiBldmFsdWF0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZXZhbHVhdGU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4geyByZXMsIGNvdW50ZXIsIGV4cHJlc3Npb24sIGF0dHJpYnV0ZVZhbHVlIH07XG4gIH1cblxuICAvKipcbiAgICogQmluZCB0aGUgbm9kZSBhbmQgc2V0IHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2V2YWx1YXRlZF1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19iaW5kQW5kU2V0UHJvcGVydHkobm9kZSwga2V5cywgZXZhbHVhdGVkKSB7XG4gICAgbGV0IGJpbmQgPSB0aGlzLl9fZ2V0Qm91bmROb2RlKGtleXMsIG5vZGUpO1xuICAgIGxldCB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19zY29wZSk7XG5cbiAgICBpZiAoIWJpbmQpIHtcbiAgICAgIHRoaXMuX19iaW5kKGtleXMsIHsgbm9kZSB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl9fc2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMsIHZhbHVlLCBldmFsdWF0ZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5lc3RlZCBldmFsdWF0aW9uIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFt3aXRob3V0UGFyZW50cz1mYWxzZV0gLSBpZiB0cnVlIGV2YWx1YXRpb24gd2lsbCBiZSBvbmx5IGZvciB0aGUgY3VycmVudCBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVOZXN0ZWQoa2V5cywgd2l0aG91dFBhcmVudHMgPSBmYWxzZSkge1xuICAgIGxldCBzY29wZSA9IHRoaXMuX19zY29wZTtcbiAgICBsZXQgcHJvcHMgPSBbXTsgICAgXG4gICAgXG4gICAgaWYgKCF3aXRob3V0UGFyZW50cykge1xuICAgICAgbGV0IGxhc3RQcm9wcyA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICBsZXQgdmFsdWU7XG5cbiAgICAgICAgbGFzdFByb3BzID0gWy4uLmxhc3RQcm9wcywga2V5XTtcbiAgICAgICAgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhsYXN0UHJvcHMsIHNjb3BlKTtcbiAgICAgICAgcHJvcHMucHVzaCh7IGtleXM6IGxhc3RQcm9wcywgdmFsdWU6IHZhbHVlfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcHJvcHMucHVzaCh7IGtleXM6IGtleXMsIHZhbHVlOiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCBzY29wZSl9KTtcbiAgICB9XG5cbiAgICBsZXQgcHJvcHNMZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgICBjb25zdCBlbEV2YWx1YXRlID0gKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGVsZW1lbnQuX19ha2lsaTsgICAgIFxuXG4gICAgICBmb3IgKGxldCBtID0gMDsgbSA8IHByb3BzTGVuZ3RoOyBtKyspIHtcbiAgICAgICAgbGV0IHByb3AgPSBwcm9wc1ttXTtcbiAgICAgICAgbGV0IGRhdGE7XG4gICAgICAgIFxuICAgICAgICBpZiAoY29tcG9uZW50ID09PSB0aGlzKSB7XG4gICAgICAgICAgbGV0IGJpbmQgPSBjb21wb25lbnQuX19nZXRCaW5kKHByb3Aua2V5cyk7XG4gICAgICAgICAgZGF0YSA9IGJpbmQ/IChiaW5kLl9fZGF0YSB8fCBbXSk6IFtdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRhdGEgPSBjb21wb25lbnQuX19nZXRBbGxCaW5kcyhwcm9wLmtleXMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIWRhdGEgfHwgIWRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgICBmb3IgKGxldCBrID0gMCwgYyA9IGRhdGEubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICAgICAgY29uc3QgYmluZCA9IGRhdGFba107IFxuICAgICAgICAgIFxuICAgICAgICAgIGlmIChjb21wb25lbnQuX19jaGVja05vZGVQcm9wZXJ0eUNoYW5nZShiaW5kLm5vZGUsIHByb3Aua2V5cywgcHJvcC52YWx1ZSkpIHsgIFxuICAgICAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZUtleXMocHJvcC5rZXlzKTsgICAgIFxuICAgICAgICAgICAgY29uc3QgY2hlY2tQcm9wID0gY29tcG9uZW50Ll9fZ2V0Tm9kZVByb3BlcnR5KGJpbmQubm9kZSwgcHJvcC5rZXlzKTtcbiAgICAgICAgICAgIGNoZWNrUHJvcCAmJiBjaGVja1Byb3AuZXZhbHVhdGVkICYmIGNvbXBvbmVudC5zY29wZS5fX3NldChwcm9wLmtleXMsIHByb3AudmFsdWUsIGZhbHNlLCB0cnVlKTsgXG4gICAgICAgICAgICBjb21wb25lbnQuX19ldmFsdWF0ZU5vZGUoYmluZC5ub2RlLCBmYWxzZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IF9rIGluIGJpbmQubm9kZS5fX3Byb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgaWYgKCFiaW5kLm5vZGUuX19wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KF9rKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBsZXQgX3Byb3AgPSBiaW5kLm5vZGUuX19wcm9wZXJ0aWVzW19rXTtcbiAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoX3Byb3Aua2V5cywgX3Byb3AuY29tcG9uZW50Ll9fc2NvcGUpO1xuICAgICAgICAgICAgICBfcHJvcC5jb21wb25lbnQuX19zZXROb2RlUHJvcGVydHkoYmluZC5ub2RlLCBfcHJvcC5rZXlzLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2VuYWJsZUtleXMocHJvcC5rZXlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9O1xuXG4gICAgY29uc3QgZXZhbHVhdGUgPSAoZWxlbWVudHMpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBlbEV2YWx1YXRlKGVsZW1lbnRzW2ldKTtcbiAgICAgICAgZXZhbHVhdGUoY29tcG9uZW50Ll9fY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBlbEV2YWx1YXRlKHRoaXMuZWwpO1xuICAgIGV2YWx1YXRlKHRoaXMuX19jaGlsZHJlbik7XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgdmFsdWUgYnkga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbaXNEZWxldGVkPWZhbHNlXSAtIHRydWUgaWYgdmFsdWUgaXMgZGVsZXRpbmdcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZUJ5S2V5cyAoa2V5cywgdmFsdWUsIGlzRGVsZXRlZCA9IGZhbHNlKSB7ICAgICBcbiAgICBsZXQgZGF0YSA9IHRoaXMuX19nZXRCaW5kKGtleXMpO1xuXG4gICAgY29uc3QgdW5iaW5kID0gKG9iaiwgcGFyZW50cykgPT4ge1xuICAgICAgZm9yIChsZXQgayBpbiBvYmopIHtcbiAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoaykgfHwgdGhpcy5fX2lzU3lzdGVtQmluZGluZ0tleShrKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IF9rZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrXSk7XG4gICAgICAgIGxldCBfX2tleXMgPSBfa2V5cy5zbGljZSgpO1xuICAgICAgICBsZXQgX2lzRGVsZXRlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgdmFsID0gb2JqW2tdO1xuICAgICAgICBsZXQgaGFzS2V5O1xuICAgICAgICBcbiAgICAgICAgX19rZXlzLnNoaWZ0KCk7XG4gICAgICAgIGhhc0tleSA9IHV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKF9fa2V5cywgdmFsdWUpO1xuXG4gICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgJiYgIWhhc0tleSkge1xuICAgICAgICAgIF9pc0RlbGV0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdW5iaW5kKHZhbCwgX2tleXMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9fZXZhbHVhdGVOZXN0ZWQoX2tleXMsIHRydWUpO1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgIT0gJ29iamVjdCcgfHwgIWhhc0tleSkge1xuICAgICAgICAgIHRoaXMuX191bmJpbmQoX2tleXMpO1xuICAgICAgICAgIF9pc0RlbGV0ZWQgJiYgdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoX19rZXlzLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIGRhdGEgJiYgdW5iaW5kKGRhdGEsIFtdLmNvbmNhdChrZXlzKSk7XG4gICAgdGhpcy5fX2V2YWx1YXRlTmVzdGVkKGtleXMsIGZhbHNlKTtcblxuICAgIGlmIChpc0RlbGV0ZWQpIHtcbiAgICAgIHRoaXMuX191bmJpbmQoa2V5cyk7XG4gICAgICBpc0RlbGV0ZWQgJiYgdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgZXZlbnQgZXhwcmVzc2lvblxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVFdmVudChub2RlLCBlbCwgZSkge1xuICAgIGxldCBleHByZXNzaW9uID0gZXZhbHVhdGlvblJlZ2V4LmV4ZWMobm9kZS5fX2V4cHJlc3Npb24pO1xuICAgIGxldCBldmFsdWF0ZTtcblxuICAgIGlmICghZXhwcmVzc2lvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSB7XG4gICAgICBlbDogZWwsXG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICBldmVudDogZSxcbiAgICAgIG5vZGVcbiAgICB9O1xuXG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IHt9O1xuXG4gICAgdHJ5IHtcbiAgICAgIGV2YWx1YXRlID0gdGhpcy5jb25zdHJ1Y3Rvci5wYXJzZSh0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5zY29wZSwgZXhwcmVzc2lvblsxXSwgeyBldmVudDogZSB9KTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikgeyAgICAgICAgXG4gICAgICB0aHJvdyB0aGlzLl9fY3JlYXRlRXhjZXB0aW9uTWVzc2FnZShub2RlLCBlcnIpO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLl9fZXZhbHVhdGluZ0V2ZW50ID0gbnVsbDtcbiAgICByZXR1cm4gZXZhbHVhdGU7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgY2hhbmdlcyBhbmQgZXZhbHVhdGUgdGhlIHBhc3NlZCBub2RlXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtjaGVja11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZU5vZGUobm9kZSwgY2hlY2sgPSB0cnVlKSB7XG4gICAgY29uc3Qga2V5ID0gbm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyPyAndmFsdWUnOiAnbm9kZVZhbHVlJztcblxuICAgIGlmIChjaGVjaz8gdGhpcy5fX2NoZWNrRXZhbHVhdGlvbihub2RlKTogdHJ1ZSkgeyAgICAgIFxuICAgICAgY29uc3QgeyByZXMsIGF0dHJpYnV0ZVZhbHVlLCBleHByZXNzaW9uLCBjb3VudGVyIH0gPSB0aGlzLl9fZXZhbHVhdGUobm9kZSk7ICAgICBcbiAgICAgIG5vZGVba2V5XSAhPSByZXMgJiYgKG5vZGVba2V5XSA9IHJlcyk7XG5cbiAgICAgIGlmIChub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gcmVzO1xuICAgICAgICBsZXQgaXNCb29sZWFuQXR0cmlidXRlID0gZmFsc2U7XG4gIFxuICAgICAgICBpZiAoY291bnRlciA9PSAxICYmIGV4cHJlc3Npb24gJiYgbm9kZS5fX2V4cHJlc3Npb24gPT0gZXhwcmVzc2lvbikge1xuICAgICAgICAgIHZhbHVlID0gYXR0cmlidXRlVmFsdWU7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGNvbnN0IGNsZWFyQXR0cmlidXRlID0gbm9kZS5ub2RlTmFtZS5yZXBsYWNlKC9eYm9vbGVhbi0oLispL2ksICckMScpO1xuICAgICAgICBjb25zdCBjYW1lbEF0dHJpYnV0ZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKGNsZWFyQXR0cmlidXRlKTtcbiAgXG4gICAgICAgIGlmIChjbGVhckF0dHJpYnV0ZSAhPSBub2RlLm5vZGVOYW1lKSB7XG4gICAgICAgICAgaXNCb29sZWFuQXR0cmlidXRlID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZSA9ICEhdmFsdWU7XG4gICAgICAgIH0gICAgICAgICAgXG4gIFxuICAgICAgICBpZiAobm9kZS5fX2F0dHJpYnV0ZU9uKSB7ICAgICAgICBcbiAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBub2RlLl9fYXR0cmlidXRlT247XG4gICAgICAgICAgIWNvbXBvbmVudC5fX3NhdmVBdHRyaWJ1dGVQcm94eUluICYmICh2YWx1ZSA9IHV0aWxzLmNvcHkodmFsdWUpKTtcbiAgICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gdHJ1ZTtcbiAgICAgICAgICBjb21wb25lbnQuYXR0cnNbY2FtZWxBdHRyaWJ1dGVdID0gdmFsdWU7XG4gICAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IGZhbHNlO1xuICBcbiAgICAgICAgICBpZiAoY29tcG9uZW50Ll9faXNNb3VudGVkKSB7XG4gICAgICAgICAgICBjb21wb25lbnQuX19hdHRyVHJpZ2dlckJ5TmFtZShjYW1lbEF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0Jvb2xlYW5BdHRyaWJ1dGUpIHtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gbm9kZS5fX2VsZW1lbnQ7XG4gICAgICAgICAgdmFsdWU/IGVsZW1lbnQuc2V0QXR0cmlidXRlKGNhbWVsQXR0cmlidXRlLCAndHJ1ZScpOiBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShjYW1lbEF0dHJpYnV0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZVtrZXldO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dHJpYnV0ZSBub2RlIGluaXRpYWxpemluZ1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gYXR0cmlidXRlT2YgLSBpZiBub2RlIGlzIGxpbmtlZCB3aXRoIHBhcmVudCBzY29wZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemVBdHRyaWJ1dGUobm9kZSwgZWwsIGF0dHJpYnV0ZU9mKSB7XG4gICAgaWYgKCFub2RlIHx8IHN5c3RlbUF0dHJpYnV0ZXMuaW5kZXhPZihub2RlLm5vZGVOYW1lKSAhPSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKCF0aGlzLl9faW5pdGlhbGl6ZU5vZGUobm9kZSwgZWwpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGV2ZW50TmFtZSA9IG5vZGUubm9kZU5hbWUucmVwbGFjZSgvXm9uLSguKykvaSwgJyQxJyk7XG4gICAgbGV0IG5vZGVOYW1lID0gdXRpbHMudG9DYW1lbENhc2Uobm9kZS5ub2RlTmFtZSk7XG4gICAgbGV0IGNvbXBvbmVudCA9IGF0dHJpYnV0ZU9mPyBhdHRyaWJ1dGVPZjogdGhpcztcblxuICAgIGlmIChldmVudE5hbWUgIT0gbm9kZS5ub2RlTmFtZSkge1xuICAgICAgaWYgKG5vZGUuX19ldmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBlbWl0dGVyID0gbmV3IEFraWxpLkV2ZW50RW1pdHRlcihldmVudE5hbWUsIGVsLCBjb21wb25lbnQpO1xuXG4gICAgICBpZiAobm9kZS5fX2V4cHJlc3Npb24pIHtcbiAgICAgICAgZW1pdHRlci5iaW5kKChlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5fX2V2YWx1YXRlRXZlbnQobm9kZSwgZWwsIGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgbm9kZS5fX2V2ZW50ID0gZW1pdHRlcjtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShub2RlLm5vZGVOYW1lLCB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUoZW1pdHRlcikpO1xuXG4gICAgICBpZiAoYXR0cmlidXRlT2YpIHtcbiAgICAgICAgdGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLmF0dHJzW25vZGVOYW1lXSA9IGVtaXR0ZXI7XG4gICAgICAgIHRoaXMuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoYXR0cmlidXRlT2YpIHtcbiAgICAgIG5vZGUuX19hdHRyaWJ1dGVPbiA9IHRoaXM7XG4gICAgICBub2RlLl9fYXR0cmlidXRlT2YgPSBjb21wb25lbnQ7XG4gICAgfVxuICAgIFxuICAgIGxldCBjaGVjayA9IHRoaXMuX19jb21waWxpbmc/IHRoaXMuX19jb21waWxpbmcuY2hlY2tDaGFuZ2VzOiBmYWxzZTtcbiAgICBjb21wb25lbnQuX19ldmFsdWF0ZU5vZGUobm9kZSwgY2hlY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIG5vZGVcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZU5vZGUobm9kZSwgZWwpIHtcbiAgICBpZiAobm9kZS5fX2luaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCB2YWwgPSBub2RlWyhub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpPyAndmFsdWUnOiAnbm9kZVZhbHVlJ10udHJpbSgpO1xuICAgIGNvbnN0IGhhc0JpbmRpbmcgPSBldmFsdWF0aW9uUmVnZXgudGVzdCh2YWwpO1xuICAgIGNvbnN0IGlzQm9vbGVhbiA9IC9eYm9vbGVhbi0vaS50ZXN0KG5vZGUubm9kZU5hbWUpO1xuICAgIGNvbnN0IGlzRXZlbnQgPSAvXm9uLSguKykvaS50ZXN0KG5vZGUubm9kZU5hbWUpO1xuXG4gICAgaWYoIWVsLl9fYWtpbGkgJiYgIWhhc0JpbmRpbmcgJiYgIWlzQm9vbGVhbiAmJiAhaXNFdmVudCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5vZGUuX19pc0V2ZW50ID0gaXNFdmVudDtcbiAgICBub2RlLl9faGFzQmluZGluZ3MgPSBoYXNCaW5kaW5nO1xuICAgIG5vZGUuX19pc0Jvb2xlYW4gPSBpc0Jvb2xlYW47XG4gICAgbm9kZS5fX2V4cHJlc3Npb24gPSB2YWw7XG4gICAgbm9kZS5fX3Byb3BlcnRpZXMgPSB7fTtcbiAgICBub2RlLl9fYXR0cmlidXRlT2YgPSBudWxsO1xuICAgIG5vZGUuX19hdHRyaWJ1dGVPbiA9IG51bGw7XG4gICAgbm9kZS5fX2V2ZW50ID0gbnVsbDsgICAgXG4gICAgbm9kZS5fX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICBub2RlLl9fY29tcG9uZW50ID0gdGhpcztcbiAgICBub2RlLl9fZWxlbWVudCA9IGVsO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIERlaW5pdGlhbGl6ZSB0aGUgbm9kZVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZWluaXRpYWxpemVOb2RlKG5vZGUpIHtcbiAgICBpZiAobm9kZS5fX2V2ZW50KSB7XG4gICAgICBub2RlLl9fZXZlbnQudW5iaW5kKCk7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUuX19oYXNCaW5kaW5ncykge1xuICAgICAgdGhpcy5fX3BhcmVudCAmJiB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19ldmFsdWF0aW9uQ29tcG9uZW50Ll9fdW5iaW5kQnlOb2Rlcyhbbm9kZV0pOyAgICAgICAgICBcbiAgICB9XG5cbiAgICBkZWxldGUgbm9kZS5fX2hhc0JpbmRpbmdzO1xuICAgIGRlbGV0ZSBub2RlLl9faXNCb29sZWFuO1xuICAgIGRlbGV0ZSBub2RlLl9faXNFdmVudDtcbiAgICBkZWxldGUgbm9kZS5fX2V4cHJlc3Npb247XG4gICAgZGVsZXRlIG5vZGUuX19wcm9wZXJ0aWVzO1xuICAgIGRlbGV0ZSBub2RlLl9fYXR0cmlidXRlT2Y7XG4gICAgZGVsZXRlIG5vZGUuX19hdHRyaWJ1dGVPbjtcbiAgICBkZWxldGUgbm9kZS5fX2V2ZW50OyAgICBcbiAgICBkZWxldGUgbm9kZS5fX2luaXRpYWxpemVkO1xuICAgIGRlbGV0ZSBub2RlLl9fY29tcG9uZW50O1xuICAgIGRlbGV0ZSBub2RlLl9fZWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcnBvbGF0ZSBhdHRyaWJ1dGVzIG9mIHRoZSBlbGVtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtDb21wb25lbnR9IFthdHRyaWJ1dGVPZj1udWxsXSAtIGlmIG5vZGUgaXMgbGlua2VkIHdpdGggcGFyZW50IHNjb3BlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKGVsLCBhdHRyaWJ1dGVPZiA9IG51bGwpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgYXR0cnMgPSBlbC5hdHRyaWJ1dGVzLCBsID0gYXR0cnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB0aGlzLl9faW5pdGlhbGl6ZUF0dHJpYnV0ZShhdHRyc1tpXSwgZWwsIGF0dHJpYnV0ZU9mKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lIGF0dHJpYnV0ZXMgYXMgcHJveHlcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZWZpbmVBdHRyaWJ1dGVzKCkge1xuICAgIGNvbnN0IGNoYW5nZUF0dHJpYnV0ZSA9IChrZXksIHZhbHVlLCBpc0RlbGV0ZWQgPSBmYWxzZSkgPT4ge1xuICAgICAgaWYgKHRoaXMuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IG5vZGUgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZU5vZGUoa2V5KTtcblxuICAgICAgaWYgKGlzRGVsZXRlZCkge1xuICAgICAgICBub2RlICYmIHRoaXMuX19kZWluaXRpYWxpemVOb2RlKG5vZGUpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgICByZXR1cm4gXG4gICAgICB9XG4gICAgICBlbHNlIGlmICghbm9kZSkge1xuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICAgICAgbm9kZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlTm9kZShrZXkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG5vZGUudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fX2RlaW5pdGlhbGl6ZU5vZGUobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX19pbml0aWFsaXplQXR0cmlidXRlKG5vZGUsIHRoaXMuZWwsIHRoaXMuX19hdHRyaWJ1dGVPZik7XG4gICAgfTtcblxuICAgIHRoaXMuYXR0cnMgPSBuZXcgUHJveHkodGhpcy5fX2F0dHJzLCB7XG4gICAgICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBpZiAoa2V5ID09ICdfX2lzUHJveHknKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICB9LFxuICAgICAgc2V0OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBhdHRyS2V5ID0gdXRpbHMudG9EYXNoQ2FzZShrZXkpO1xuXG4gICAgICAgIGlmICh0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzLmluZGV4T2YoYXR0cktleSkgIT0gLTEpIHtcbiAgICAgICAgICBhdHRyS2V5ID0gYGJvb2xlYW4tJHthdHRyS2V5fWA7XG4gICAgICAgICAgdmFsdWU/IHRoaXMuZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpOiB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICBjaGFuZ2VBdHRyaWJ1dGUoYXR0cktleSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKHZhbHVlKSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBhdHRyS2V5ID0gdXRpbHMudG9EYXNoQ2FzZShrZXkpO1xuICAgICAgICBjaGFuZ2VBdHRyaWJ1dGUoYXR0cktleSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKHZhbHVlKSwgdHJ1ZSk7XG4gICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHByb3h5IHRvIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHBhcmVudHNcbiAgICogQHJldHVybnMge1Byb3h5fVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX29ic2VydmUob2JqLCBwYXJlbnRzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm94eShvYmosIHtcbiAgICAgIGdldDogKHRhcmdldCwga2V5KSA9PiB7IFxuICAgICAgICBpZiAoa2V5ID09IFwiX19pc1Byb3h5XCIpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX3RhcmdldFwiKSB7XG4gICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX2NvbXBvbmVudFwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IFwiX19rZXlzXCIpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50cztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFraWxpLl9fZXZhbHVhdGlvbikgeyAgXG4gICAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tleV0pO1xuICAgICAgICAgIGxldCBub3RCaW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgbGV0IGV2YWx1YXRlZCA9ICF1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpOyBcbiAgICAgICAgICBsZXQgY29tcG9uZW50ID0gdGhpcztcbiAgICAgICAgICBsZXQgZXhjQXJyID0ga2V5cy5zbGljZSgpO1xuXG4gICAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIFNjb3BlKSB7XG4gICAgICAgICAgICBsZXQgcmVhbFRhcmdldCA9IHV0aWxzLmdldE93blByb3BlcnR5VGFyZ2V0KHRhcmdldCwga2V5KTtcbiAgICAgICAgICAgIHJlYWxUYXJnZXQgJiYgKHJlYWxUYXJnZXQgaW5zdGFuY2VvZiBTY29wZSkgJiYgKGNvbXBvbmVudCA9ICByZWFsVGFyZ2V0Ll9fY29tcG9uZW50KTtcbiAgICAgICAgICB9IFxuXG4gICAgICAgICAgaWYgKEFraWxpLl9fd3JhcHBpbmcgJiYga2V5cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZm9yUGFyZW50cyA9IEFraWxpLl9fZXZhbHVhdGlvbi5jb21wb25lbnQucGFyZW50cyhjID0+IGMgaW5zdGFuY2VvZiBBa2lsaS5jb21wb25lbnRzLkZvcik7XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGZvclBhcmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrID0gMCwgYyA9IGtleXMubGVuZ3RoOyBrIDwgYzsgaysrKSB7IFxuICAgICAgICAgICAgICBjb25zdCBmb3JEYXRhID0gZm9yUGFyZW50c1tpXS5kYXRhO1xuICAgICAgICAgICAgICBjb25zdCBkYXRhID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoZXhjQXJyLCBjb21wb25lbnQuX19zY29wZSk7XG5cbiAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgdHlwZW9mIGRhdGEgPT0gJ29iamVjdCcgJiYgZm9yRGF0YSA9PT0gZGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgICAgZXhjQXJyLnBvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gICAgICAgICAgICAgICBcblxuICAgICAgICAgIGlmICghKGtleSBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9ICAgICAgICAgIFxuICAgICAgICAgIGVsc2UgaWYgKCF1dGlscy5nZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQodGFyZ2V0LCBrZXkpKSB7XG4gICAgICAgICAgICBub3RCaW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9fYmluZE5vZGUoQWtpbGkuX19ldmFsdWF0aW9uLmxpc3QsIGNvbXBvbmVudCwga2V5cywgcGFyZW50cywgdGFyZ2V0W2tleV0sIG5vdEJpbmRpbmcsIGV2YWx1YXRlZCk7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgfSxcbiAgICAgIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4geyBcbiAgICAgICAgaWYgKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YWx1ZSA9IEFraWxpLndyYXBGdW5jdGlvbih2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG5cbiAgICAgICAgaWYgKHRoaXMuX19jaGVja0Rpc2FibGVtZW50KGtleXMpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIENIRUNLX0VYSVNURU5DRTogaWYgKHBhcmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxldCB0YXJnZXRQYXJlbnRWYWx1ZSA9IHBhcmVudHMubGVuZ3RoID4gMT8gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMocGFyZW50cy5zbGljZSgwLCAtMSksIHRoaXMuX19zY29wZSk6IHRoaXMuX19zY29wZTtcbiAgICAgICAgICBcbiAgICAgICAgICBmb3IgKGxldCBrIGluIHRhcmdldFBhcmVudFZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIXRhcmdldFBhcmVudFZhbHVlLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGFyZ2V0UGFyZW50VmFsdWVba10gJiYgdGFyZ2V0UGFyZW50VmFsdWVba10uX190YXJnZXQgPT09IHRhcmdldCkge1xuICAgICAgICAgICAgICBicmVhayBDSEVDS19FWElTVEVOQ0U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldFtrZXldID0gdGhpcy5fX25lc3RlZE9ic2VydmUodmFsdWUsIGtleXMpO1xuXG4gICAgICAgIGlmKCF0aGlzLl9faXNSZXNvbHZlZCkge1xuICAgICAgICAgIHRoaXMuX190cmlnZ2VyU3RvcmVBbmRBdHRyKGtleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgIFxuICAgICAgICBpZiAoQWtpbGkuX19pc29sYXRpb24pIHsgXG4gICAgICAgICAgdGhpcy5fX2NyZWF0ZUlzb2xhdGlvbk9iamVjdChwYXJlbnRzLCBrZXksIGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuX19pc1Jlc29sdmVkKSB7XG4gICAgICAgICAgdGhpcy5fX3RyaWdnZXJTdG9yZUFuZEF0dHIoa2V5cywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5fX2lzTW91bnRlZCkgeyAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICB0aGlzLl9fZXZhbHVhdGVCeUtleXMoa2V5cywgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgICAgZGVsZXRlUHJvcGVydHk6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBjb25zdCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrZXldKTtcblxuICAgICAgICBpZiAodGhpcy5fX2NoZWNrRGlzYWJsZW1lbnQoa2V5cykpIHtcbiAgICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fX2lzU3lzdGVtS2V5KGtleSkpIHtcbiAgICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG5cbiAgICAgICAgaWYoIXRoaXMuX19pc1Jlc29sdmVkKSB7XG4gICAgICAgICAgdGhpcy5fX3RyaWdnZXJTdG9yZUFuZEF0dHIoa2V5cywgdW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKEFraWxpLl9faXNvbGF0aW9uKSB7XG4gICAgICAgICAgdGhpcy5fX2NyZWF0ZUlzb2xhdGlvbk9iamVjdChwYXJlbnRzLCBrZXksIHRydWUpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5fX2lzUmVzb2x2ZWQpIHtcbiAgICAgICAgICB0aGlzLl9fdHJpZ2dlclN0b3JlQW5kQXR0cihrZXlzLCB1bmRlZmluZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fX2V2YWx1YXRlQnlLZXlzKGtleXMsIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgc3RvcmUgYW5kIGF0dHJpYnV0ZXMgY2hhbmdlXG4gICAqL1xuICBfX3RyaWdnZXJTdG9yZUFuZEF0dHIoa2V5cywgdmFsdWUpIHtcbiAgICBjb25zdCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG5cbiAgICBpZiAodGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXSkge1xuICAgICAgdGhpcy5fX3N0b3JlVHJpZ2dlckJ5S2V5cyhrZXlzLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXSkge1xuICAgICAgdGhpcy5fX2F0dHJUcmlnZ2VyQnlLZXlzKGtleXMsIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGhhc2ggZm9yIHRoZSBrZXlzXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGVLZXlzSGFzaChrZXlzKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuX19zY29wZS5fX25hbWV9LiR7QWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpfWA7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBzdG9yZSBvZiB0aGUgZGlzYWJsZW1lbnQgdHlwZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgXG4gICAqL1xuICBfX2dldERpc2FibGVtZW50VHlwZVN0b3JlKHR5cGUpIHtcbiAgICByZXR1cm4gKHtcbiAgICAgIHByb3h5OiAnX19kaXNhYmxlUHJveHknLFxuICAgICAgc3RvcmU6ICdfX2Rpc2FibGVTdG9yZUtleXMnLFxuICAgICAgYXR0cjogJ19fZGlzYWJsZUF0dHJLZXlzJ1xuICAgIH0pW3R5cGVdO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGUgdGhlIGtleXMgc2V0dGVyXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzICBcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlXSAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGlzYWJsZUtleXMoa2V5cywgdHlwZSA9ICdwcm94eScpIHsgICAgXG4gICAgdGhpc1t0aGlzLl9fZ2V0RGlzYWJsZW1lbnRUeXBlU3RvcmUodHlwZSldW2tleXM/IHRoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKTogJ19fYWxsJ10gPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSB0aGUga2V5cyBzZXR0ZXJcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZV0gICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19lbmFibGVLZXlzKGtleXMsIHR5cGUgPSAncHJveHknKSB7XG4gICAgZGVsZXRlIHRoaXNbdGhpcy5fX2dldERpc2FibGVtZW50VHlwZVN0b3JlKHR5cGUpXVtrZXlzPyB0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyk6ICdfX2FsbCddO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBrZXlzIHNldHRlciBkaXNhYmxlbWFudFxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlXSAgIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NoZWNrRGlzYWJsZW1lbnQoa2V5cywgdHlwZSA9ICdwcm94eScpIHtcbiAgICBjb25zdCBzdG9yZSA9IHRoaXMuX19nZXREaXNhYmxlbWVudFR5cGVTdG9yZSh0eXBlKTtcbiAgICByZXR1cm4gdGhpc1tzdG9yZV0uX19hbGw/IHRydWU6IHRoaXNbc3RvcmVdW3RoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKV07XG4gIH1cblxuICAvKipcbiAgICogU2F2ZSB0aGUgdmFsdWUgdG8gdGhlIHN0b3JlIGJ5IHRoZSBrZXlzXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKiBAcGFyYW0geyp9IHZhbHVlICAgIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3N0b3JlVHJpZ2dlckJ5S2V5cyhrZXlzLCB2YWx1ZSkgeyBcbiAgICBpZiAodGhpcy5fX2NoZWNrRGlzYWJsZW1lbnQoa2V5cywgJ3N0b3JlJykpIHsgICAgICBcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBsaW5rcyA9IHRoaXMuX19zdG9yZUxpbmtzW0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKV07XG5cbiAgICBpZiAoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgdmFsdWUgPSB1dGlscy5jb3B5KHZhbHVlKTtcbiAgICBjb25zdCBwID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxpbmtzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY29uc3QgbGluayA9IGxpbmtzW2ldOyAgIFxuICAgICAgXG4gICAgICBpZiAoIWxpbmsuc2V0KSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBwLnB1c2godGhpcy5fX3N0b3JlVHJpZ2dlckJ5TmFtZShsaW5rLm5hbWUsIHZhbHVlKSk7ICAgICAgXG4gICAgfVxuICAgIFxuICAgIHJldHVybiBQcm9taXNlLmFsbChwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlIHRoZSB2YWx1ZSB0byB0aGUgc3RvcmUgYnkgdGhlIG5hbWVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3N0b3JlVHJpZ2dlckJ5TmFtZShuYW1lLCB2YWx1ZSkgeyAgXG4gICAgc3RvcmUuX190YXJnZXRbbmFtZV0gPSB2YWx1ZTtcbiAgICBsZXQgbGlua3MgPSAoQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdIHx8IFtdKS5jb25jYXQoQWtpbGkuX19zdG9yZUxpbmtzWycqJ10gfHwgW10pO1xuXG4gICAgaWYgKCFsaW5rcyB8fCAhbGlua3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGlua3MgPSB1dGlscy5zb3J0KGxpbmtzLCBbJ2RhdGUnXSwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gQWtpbGkubmV4dFRpY2soKCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGluayA9IGxpbmtzW2ldO1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBsaW5rLmNvbXBvbmVudDtcblxuICAgICAgICBpZiAoY29tcG9uZW50ID09PSB0aGlzKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChsaW5rLmZuKSB7XG4gICAgICAgICAgQWtpbGkudW5pc29sYXRlKCgpID0+IGxpbmsuZm4uY2FsbChjb21wb25lbnQsIHZhbHVlLCBuYW1lKSk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFsaW5rLmdldCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZUtleXMobGluay5rZXlzLCAnc3RvcmUnKTtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhsaW5rLmtleXMsIGNvbXBvbmVudC5fX3Njb3BlKTtcbiAgICAgICAgIXV0aWxzLmNvbXBhcmUoY3VycmVudCwgdmFsdWUpICYmIGNvbXBvbmVudC5zY29wZS5fX3NldChsaW5rLmtleXMsIHZhbHVlKTsgICBcbiAgICAgICAgY29tcG9uZW50Ll9fZW5hYmxlS2V5cyhsaW5rLmtleXMsICdzdG9yZScpO1xuICAgICAgfSAgXG4gICAgfSk7ICAgXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgc3RvcmUgbGluayB3aXRoIHRoZSBzY29wZSBwcm9wZXJ0eVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7b2JoZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zdG9yZUJ5S2V5cyhuYW1lLCBrZXlzLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0geyBnZXQ6IHRydWUsIHNldDogdHJ1ZSwgLi4ub3B0aW9ucyB9O1xuXG4gICAgaWYgKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFN0b3JlIGxpbmsgXCIke25hbWV9XCIgbXVzdCBoYXZlIHRoZSBzY29wZSBwcm9wZXJ0eSBuYW1lYCk7XG4gICAgfVxuXG4gICAgaWYgKCFvcHRpb25zLmdldCAmJiAhb3B0aW9ucy5zZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgU3RvcmUgbGluayBcIiR7bmFtZX1cIiBtdXN0IGhhdmUgYXQgbGVhc3QgXCJnZXRcIiBvciBcInNldFwiIG9wdGlvbiBhcyB0cnVlYCk7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLl9fZGlzYWJsZUtleXMoa2V5cywgJ3N0b3JlJyk7XG4gICAgKHN0b3JlLmhhc093blByb3BlcnR5KG5hbWUpIHx8ICF1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpKSAmJiB0aGlzLnNjb3BlLl9fc2V0KGtleXMsIHN0b3JlW25hbWVdKTtcbiAgICB0aGlzLl9fZW5hYmxlS2V5cyhrZXlzLCAnc3RvcmUnKTtcbiAgICBsZXQga2V5U3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpO1xuICAgIGxldCBpbmZvO1xuXG4gICAgaWYgKCF0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddKSB7XG4gICAgICB0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddID0gW107XG4gICAgfVxuXG4gICAgbGV0IGFyciA9IHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ107XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGFycltpXTtcblxuICAgICAgaWYgKHJlcy5jb21wb25lbnQgPT09IHRoaXMgJiYgcmVzLm5hbWUgPT0gbmFtZSAmJiByZXMua2V5U3RyaW5nID09IGtleVN0cmluZykge1xuICAgICAgICByZXMuc2V0ID0gb3B0aW9ucy5zZXQ7XG4gICAgICAgIHJlcy5nZXQgPSBvcHRpb25zLmdldDtcbiAgICAgICAgcmVzLmRhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0pIHtcbiAgICAgIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGluZm8gPSB7IGNvbXBvbmVudDogdGhpcywgbmFtZSwga2V5cywga2V5U3RyaW5nLCBkYXRlOiBEYXRlLm5vdygpLCBzZXQ6IG9wdGlvbnMuc2V0LCBnZXQ6IG9wdGlvbnMuZ2V0IH07XG4gICAgdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXS5wdXNoKGluZm8pO1xuICAgIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXS5wdXNoKGluZm8pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHN0b3JlIGxpbmsgd2l0aCB0aGUgZnVuY3Rpb25cbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiAgIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBfX3N0b3JlQnlGdW5jdGlvbihuYW1lLCBmbiwgb3B0aW9ucyA9IHt9KSB7IFxuICAgIGxldCBjYWxsID0gb3B0aW9ucy5jYWxsT25TdGFydCA9PT0gdW5kZWZpbmVkPyBzdG9yZS5fX3RhcmdldC5oYXNPd25Qcm9wZXJ0eShuYW1lKTogb3B0aW9ucy5jYWxsT25TdGFydDtcblxuICAgIGlmICghQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdKSB7XG4gICAgICBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV07XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IGxpbmtzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gbGlua3NbaV07XG5cbiAgICAgIGlmIChyZXMuY29tcG9uZW50ID09PSB0aGlzICYmIHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmZuID09PSBmbikge1xuICAgICAgICByZXMuZGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0ucHVzaCh7IGNvbXBvbmVudDogdGhpcywgbmFtZSwgZm4sIGRhdGU6IERhdGUubm93KCkgfSk7XG5cbiAgICBpZiAobmFtZSA9PSAnKicgJiYgb3B0aW9ucy5jYWxsT25TdGFydCAhPT0gZmFsc2UpIHtcbiAgICAgIGxldCBzdG9yZUtleXMgPSBPYmplY3Qua2V5cyhzdG9yZS5fX3RhcmdldCk7XG4gICAgICBsZXQgcCA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHN0b3JlS2V5cy5sZW5ndGggOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBzdG9yZUtleXNbaV07XG4gICAgICAgIGxldCB2YWwgPSBzdG9yZS5fX3RhcmdldFtrZXldO1xuICAgICAgICBwLnB1c2goQWtpbGkudW5pc29sYXRlKCgpID0+IGZuLmNhbGwodGhpcywgdmFsLCBrZXkpKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChwKTtcbiAgICB9XG5cbiAgICBpZiAoY2FsbCkge1xuICAgICAgcmV0dXJuIEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBmbi5jYWxsKHRoaXMsIHN0b3JlW25hbWVdKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgc3RvcmUgbGluayB3aXRoIHRoZSBzY29wZSBwcm9wZXJ0eVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bnN0b3JlQnlLZXlzKG5hbWUsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IGhhdmUgdG8gcGFzcyB0aGUgc2NvcGUgcHJvcGVydHkgbmFtZSBmb3Igc3RvcmUgbGluayBcIiR7bmFtZX1cImApO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG5cbiAgICBsZXQga2V5U3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpO1xuICAgIGxldCBhcnIgPSB0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddO1xuXG4gICAgaWYgKCFhcnIubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBhcnJbaV07XG4gICAgICBsZXQgbGlua3MgPSBBa2lsaS5fX3N0b3JlTGlua3NbcmVzLm5hbWVdO1xuXG4gICAgICBpZiAocmVzLmNvbXBvbmVudCAhPT0gdGhpcyB8fCByZXMubmFtZSAhPSBuYW1lIHx8IHJlcy5rZXlTdHJpbmcgIT0ga2V5U3RyaW5nKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBhcnIuc3BsaWNlKGksIDEpO1xuXG4gICAgICBpZiAoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGsgPSBsaW5rcy5sZW5ndGggLSAxOyBrID49IDA7IGstLSkge1xuICAgICAgICBsZXQgbGluayA9IGxpbmtzW2tdO1xuXG4gICAgICAgIGlmIChsaW5rLmNvbXBvbmVudCA9PT0gdGhpcyAmJiBsaW5rLmtleVN0cmluZyA9PSBrZXlTdHJpbmcpIHtcbiAgICAgICAgICBsaW5rcy5zcGxpY2UoaywgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFsaW5rcy5sZW5ndGgpIHtcbiAgICAgICAgZGVsZXRlIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWFyci5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHN0b3JlIGxpbmsgd2l0aCB0aGUgZnVuY3Rpb25cbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bnN0b3JlQnlGdW5jdGlvbihuYW1lLCBmbikge1xuICAgIGlmICghQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSBsaW5rcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGxpbmtzW2ldO1xuXG4gICAgICBpZiAocmVzLmNvbXBvbmVudCA9PT0gdGhpcyAmJiByZXMubmFtZSA9PSBuYW1lICYmIHJlcy5mbiA9PT0gZm4pIHtcbiAgICAgICAgbGlua3Muc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWxpbmtzLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciBhbiBhdHRyaWJ1dGUgZXZlbnQgYnkgdGhlIGtleXNcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYXR0clRyaWdnZXJCeUtleXMoa2V5cywgdmFsdWUpIHtcbiAgICBpZiAodGhpcy5fX2NoZWNrRGlzYWJsZW1lbnQoa2V5cywgJ2F0dHInKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBsaW5rcyA9IHRoaXMuX19hdHRyTGlua3NbQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpXTtcbiAgIFxuICAgIGlmICghbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gQWtpbGkubmV4dFRpY2soKCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGluayA9IGxpbmtzW2ldO1xuXG4gICAgICAgIGlmIChsaW5rLmZuKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWxpbmsuc2V0KSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGV2ID0gJ29uJyArIHV0aWxzLmNhcGl0YWxpemUobGluay5uYW1lKTtcbiAgICAgICAgdGhpcy5hdHRyc1tldl0gJiYgdGhpcy5hdHRyc1tldl0udHJpZ2dlcih2YWx1ZSwgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgICAgfVxuICAgIH0pOyAgXG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciBhbiBhdHRyaWJ1dGUgZXZlbnQgYnkgdGhlIG5hbWVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2F0dHJUcmlnZ2VyQnlOYW1lKG5hbWUsIHZhbHVlKSB7XG4gICAgbGV0IGxpbmtzID0gKHRoaXMuX19hdHRyTGlua3NbbmFtZV0gfHwgW10pLmNvbmNhdCh0aGlzLl9fYXR0ckxpbmtzWycqJ10gfHwgW10pO1xuICAgIFxuICAgIGlmICghbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gIFxuICAgIFxuICAgIGxpbmtzID0gdXRpbHMuc29ydChsaW5rcywgWydkYXRlJ10sIHRydWUpO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGlua3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBsaW5rID0gbGlua3NbaV07ICAgIFxuXG4gICAgICBpZiAobGluay5mbikge1xuICAgICAgICBBa2lsaS51bmlzb2xhdGUoKCkgPT4gbGluay5mbi5jYWxsKHRoaXMsIHZhbHVlLCB1dGlscy50b0Rhc2hDYXNlKG5hbWUpKSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZighbGluay5nZXQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRoaXMuX19kaXNhYmxlS2V5cyhsaW5rLmtleXMsICdhdHRyJyk7XG4gICAgICBsZXQgY3VycmVudCA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGxpbmsua2V5cywgdGhpcy5fX3Njb3BlKTtcbiAgICAgICF1dGlscy5jb21wYXJlKGN1cnJlbnQsIHZhbHVlKSAmJiB0aGlzLnNjb3BlLl9fc2V0KGxpbmsua2V5cywgdmFsdWUpO1xuICAgICAgdGhpcy5fX2VuYWJsZUtleXMobGluay5rZXlzLCAnYXR0cicpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gYXR0cmlidXRlIGxpbmsgd2l0aCB0aGUgc2NvcGUgcHJvcGVydHlcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYXR0ckJ5S2V5cyhuYW1lLCBrZXlzLCBvcHRpb25zID0ge30pIHsgICBcbiAgICBvcHRpb25zID0geyBnZXQ6IHRydWUsIHNldDogdHJ1ZSwgLi4ub3B0aW9ucyB9O1xuICAgIG5hbWUgPSB1dGlscy50b0NhbWVsQ2FzZShuYW1lKTtcblxuICAgIGlmICgha2V5cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBBdHRyaWJ1dGUgbGluayBcIiR7bmFtZX1cIiBtdXN0IGhhdmUgdGhlIHNjb3BlIHByb3BlcnR5IG5hbWVgKTtcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuICAgIFxuICAgIHRoaXMuX19kaXNhYmxlS2V5cyhrZXlzLCAnYXR0cicpO1xuICAgICh0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KG5hbWUpIHx8ICF1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpKSAmJiB0aGlzLnNjb3BlLl9fc2V0KGtleXMsIHRoaXMuYXR0cnNbbmFtZV0pOyBcbiAgICB0aGlzLl9fZW5hYmxlS2V5cyhrZXlzLCAnYXR0cicpO1xuICAgIGxldCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG4gICAgXG4gICAgaWYgKCF0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ10pIHtcbiAgICAgIHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXSA9IFtdO1xuICAgIH1cblxuICAgIGxldCBhcnIgPSB0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ107XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGFycltpXTtcblxuICAgICAgaWYgKHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmtleVN0cmluZyA9PSBrZXlTdHJpbmcpIHtcbiAgICAgICAgcmVzLmdldCA9IG9wdGlvbnMuZ2V0O1xuICAgICAgICByZXMuc2V0ID0gb3B0aW9ucy5zZXQ7XG4gICAgICAgIHJlcy5kYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXS5wdXNoKHsgbmFtZSwga2V5cywga2V5U3RyaW5nLCBkYXRlOiBEYXRlLm5vdygpLCBzZXQ6IG9wdGlvbnMuc2V0LCBnZXQ6IG9wdGlvbnMuZ2V0IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBhdHRyaWJ1dGUgbGluayB3aXRoIHRoZSBmdW5jdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZCBcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBfX2F0dHJCeUZ1bmN0aW9uKG5hbWUsIGZuLCBvcHRpb25zID0ge30pIHsgICAgXG4gICAgbmFtZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKG5hbWUpO1xuICAgIGxldCBjYWxsID0gb3B0aW9ucy5jYWxsT25TdGFydCA9PT0gdW5kZWZpbmVkPyB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KG5hbWUpOiBvcHRpb25zLmNhbGxPblN0YXJ0OyAgICBcblxuICAgIGlmICghdGhpcy5fX2F0dHJMaW5rc1tuYW1lXSkge1xuICAgICAgdGhpcy5fX2F0dHJMaW5rc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGxldCBsaW5rcyA9IHRoaXMuX19hdHRyTGlua3NbbmFtZV07XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IGxpbmtzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gbGlua3NbaV07XG5cbiAgICAgIGlmIChyZXMubmFtZSA9PSBuYW1lICYmIHJlcy5mbiA9PT0gZm4pIHtcbiAgICAgICAgcmVzLmRhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHRoaXMuX19hdHRyTGlua3NbbmFtZV0ucHVzaCh7IG5hbWUsIGZuLCBkYXRlOiBEYXRlLm5vdygpIH0pO1xuXG4gICAgaWYgKG5hbWUgPT0gJyonICYmIG9wdGlvbnMuY2FsbE9uU3RhcnQgIT09IGZhbHNlKSB7XG4gICAgICBsZXQgYXR0cnNLZXlzID0gT2JqZWN0LmtleXModGhpcy5fX2F0dHJzKS5maWx0ZXIoayA9PiAhKHRoaXMuX19hdHRyc1trXSBpbnN0YW5jZW9mIEFraWxpLkV2ZW50RW1pdHRlcikpO1xuICAgICAgbGV0IHAgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBhdHRyc0tleXMubGVuZ3RoIDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQga2V5ID0gYXR0cnNLZXlzW2ldO1xuICAgICAgICBsZXQgdmFsID0gdGhpcy5fX2F0dHJzW2tleV07XG4gICAgICAgIHAucHVzaChBa2lsaS51bmlzb2xhdGUoKCkgPT4gZm4uY2FsbCh0aGlzLCB2YWwsIHV0aWxzLnRvRGFzaENhc2Uoa2V5KSkpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHApO1xuICAgIH1cbiAgICBcbiAgICBpZiAoY2FsbCkge1xuICAgICAgcmV0dXJuIEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBmbi5jYWxsKHRoaXMsIHRoaXMuYXR0cnNbbmFtZV0pKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBhdHRyaWJ1dGUgbGluayB3aXRoIHRoZSBzY29wZSBwcm9wZXJ0eVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmF0dHJCeUtleXMobmFtZSwga2V5cykge1xuICAgIGlmICgha2V5cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgaGF2ZSB0byBwYXNzIHRoZSBzY29wZSBwcm9wZXJ0eSBuYW1lIGZvciBhdHRyaWJ1dGUgbGluayBcIiR7bmFtZX1cImApO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG5cbiAgICBsZXQga2V5U3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpO1xuICAgIGxldCBhcnIgPSB0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ107XG5cbiAgICBpZiAoIWFyci5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGFycltpXTtcblxuICAgICAgaWYgKHJlcy5uYW1lICE9IG5hbWUgfHwgcmVzLmtleVN0cmluZyAhPSBrZXlTdHJpbmcpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGFyci5zcGxpY2UoaSwgMSk7XG4gICAgfVxuXG4gICAgaWYgKCFhcnIubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddO1xuICAgIH1cbiAgfVxuXG4gICAvKipcbiAgICogUmVtb3ZlIHRoZSBhdHRyaWJ1dGUgbGluayB3aXRoIHRoZSBmdW5jdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5hdHRyQnlGdW5jdGlvbihuYW1lLCBmbikge1xuICAgIGlmICghdGhpcy5fX2F0dHJMaW5rc1tuYW1lXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBsaW5rcyA9IHRoaXMuX19hdHRyTGlua3NbbmFtZV07XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IGxpbmtzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gbGlua3NbaV07XG5cbiAgICAgIGlmIChyZXMubmFtZSA9PSBuYW1lICYmIHJlcy5mbiA9PT0gZm4pIHtcbiAgICAgICAgbGlua3Muc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWxpbmtzLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIHRoaXMuX19hdHRyTGlua3NbbmFtZV07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBrZXkgaXMgc3lzdGVtXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faXNTeXN0ZW1LZXkgKGtleSkge1xuICAgIGlmIChrZXkgPT0gJ19fJyB8fCAoa2V5WzBdID09ICdfJyAmJiBrZXlbMV0gPT0gJ18nKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKFsnY29uc3RydWN0b3InXS5pbmRleE9mKGtleSkgIT0gLTEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOZXN0ZWQgb2JzZXJ2aW5nIHRoZSB2YWx1ZVxuICAgKlxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IFtzdGFydEtleXNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fbmVzdGVkT2JzZXJ2ZSAodmFsdWUsIHN0YXJ0S2V5cykge1xuICAgIGNvbnN0IG9ic2VydmUgPSAodmFsdWUsIHBhcmVudHMpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXV0aWxzLmlzUGxhaW5PYmplY3QodmFsdWUpICYmICF1dGlscy5pc1Njb3BlUHJveHkodmFsdWUpICYmICEodmFsdWUgaW5zdGFuY2VvZiBTY29wZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgdGFyZ2V0ID0gdmFsdWU7XG5cbiAgICAgIENIRUNLX1BST1hZOiBpZiAodmFsdWUuX19pc1Byb3h5KSB7XG4gICAgICAgIHRhcmdldCA9IHZhbHVlLl9fdGFyZ2V0O1xuXG4gICAgICAgIGlmICh0aGlzLl9fZGlzYWJsZVByb3h5UmVkZWZpbmluZykge1xuICAgICAgICAgIGJyZWFrIENIRUNLX1BST1hZO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoXG4gICAgICAgICAgdmFsdWUuX19jb21wb25lbnQgIT09IHRoaXMgfHxcbiAgICAgICAgICBBa2lsaS5qb2luQmluZGluZ0tleXMocGFyZW50cykgIT0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKHZhbHVlLl9fa2V5cylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGFyZ2V0ID0gdXRpbHMuY29weSh0YXJnZXQsIHsgbmVzdGVkOiBmYWxzZSB9KTtcbiAgICAgICAgICB2YWx1ZSA9IHRhcmdldDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIXRoaXMuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nICYmICEodmFsdWUgaW5zdGFuY2VvZiBTY29wZSkpIHtcbiAgICAgICAgdGFyZ2V0ID0gdXRpbHMuY29weSh0YXJnZXQsIHsgbmVzdGVkOiBmYWxzZSB9ICk7ICAgICAgICAgIFxuICAgICAgICB2YWx1ZSA9IHRhcmdldDtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgayBpbiB0YXJnZXQpIHsgICAgICAgIFxuICAgICAgICBpZiAoIXRhcmdldC5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHZhbCA9IHRhcmdldFtrXTsgICAgICAgIFxuICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba10pOyAgIFxuICAgICAgICB0YXJnZXRba10gPSBvYnNlcnZlKHZhbCwga2V5cyk7ICBcbiAgICAgIH1cblxuICAgICAgaWYgKCF2YWx1ZS5fX2lzUHJveHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19vYnNlcnZlKHZhbHVlLCBwYXJlbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG5cbiAgICBsZXQgcmVzID0gb2JzZXJ2ZSh2YWx1ZSwgc3RhcnRLZXlzIHx8IFtdKTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgIC8qKlxuICAgKiBDcmVhdGUgYW4gaXNvbGF0aW9uIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHBhcmFtIHtib29sZWFufSBbaXNEZWxldGVkPWZhbHNlXVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGVJc29sYXRpb25PYmplY3QgKHBhcmVudHMsIGtleSwgaXNEZWxldGVkID0gZmFsc2UpIHtcbiAgICBjb25zdCBrZXlzID0gcGFyZW50cy5sZW5ndGg/IFtwYXJlbnRzWzBdXTogW2tleV07XG4gICAgY29uc3QgaXNvbGF0aW9uSGFzaCA9IHRoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKTtcblxuICAgIGlmIChwYXJlbnRzLmxlbmd0aCkge1xuICAgICAgaXNEZWxldGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25IYXNoXSkge1xuICAgICAgQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uSGFzaF0gPSB7XG4gICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAga2V5c1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAoaXNEZWxldGVkICE9PSB1bmRlZmluZWQpICYmIChBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25IYXNoXS5pc0RlbGV0ZWQgPSBpc0RlbGV0ZWQpO1xuICAgIHJldHVybiBBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25IYXNoXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlIHRoZSBub2RlIHRvIGJpbmRpbmdcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGJpbmQgLSBieSBkZWZhdWx0IGlzIGNvbXBvbmVudC5fX2V2YWx1YXRpb24ubGlzdFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHBhcmVudHNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtub3RCaW5kaW5nPWZhbHNlXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtldmFsdWF0ZWQ9ZmFsc2VdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYmluZE5vZGUoYmluZCwgcmVhbENvbXBvbmVudCwga2V5cywgcGFyZW50cywgdmFsdWUsIG5vdEJpbmRpbmcgPSBmYWxzZSwgZXZhbHVhdGVkID0gZmFsc2UpIHtcbiAgICBsZXQgcGFyZW50S2V5c1N0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhwYXJlbnRzKTtcbiAgICBsZXQgY29tcG9uZW50ID0gdGhpcztcblxuICAgIGlmIChiaW5kLmxlbmd0aCAmJiAhbm90QmluZGluZykge1xuICAgICAgbGV0IGwgPSBiaW5kLmxlbmd0aCAtIDE7XG4gICAgICBsZXQgZGF0YSA9IGJpbmRbbF07XG5cbiAgICAgIGlmIChkYXRhLnJlYWxDb21wb25lbnQgPT09IHRoaXMgJiYgZGF0YS5rZXlzU3RyaW5nID09IHBhcmVudEtleXNTdHJpbmcpIHtcbiAgICAgICAgY29tcG9uZW50ID0gZGF0YS5jb21wb25lbnQ7XG4gICAgICB9ICAgICAgXG4gICAgICBcbiAgICAgIGlmIChkYXRhLmtleXNTdHJpbmcgPT0gcGFyZW50S2V5c1N0cmluZyAmJiBkYXRhLmNvbXBvbmVudCA9PT0gY29tcG9uZW50KSB7XG4gICAgICAgIGJpbmQuc3BsaWNlKGwsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBiaW5kLnB1c2goe1xuICAgICAgY29tcG9uZW50LFxuICAgICAgcmVhbENvbXBvbmVudDogcmVhbENvbXBvbmVudCxcbiAgICAgIGtleXNTdHJpbmc6IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKSxcbiAgICAgIHBhcmVudHMsXG4gICAgICBrZXlzLFxuICAgICAgdmFsdWUsXG4gICAgICBldmFsdWF0ZWQsXG4gICAgICBub3RCaW5kaW5nXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGtleSBpcyBzeXN0ZW0gYmluZGluZyB0aGluZ1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqLyBcbiAgX19pc1N5c3RlbUJpbmRpbmdLZXkoa2V5KSB7XG4gICAgcmV0dXJuIGtleSA9PSAnX19kYXRhJztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYmluZGluZyBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldEJpbmQoa2V5cykge1xuICAgIHJldHVybiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MpIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBuZXN0ZWQgYmluZGluZ3MgYnkga2V5c1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICovXG4gIF9fZ2V0QWxsQmluZHMoa2V5cykge1xuICAgIGNvbnN0IHJvb3QgPSB0aGlzLl9fZ2V0QmluZChrZXlzKTtcblxuICAgIGlmICghcm9vdCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGxldCBkYXRhID0gW107XG5cbiAgICBjb25zdCBjb2xsZWN0ID0gKG9iaikgPT4ge1xuICAgICAgZGF0YSA9IGRhdGEuY29uY2F0KG9iai5fX2RhdGEgfHwgW10pO1xuXG4gICAgICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGtleSkgfHwga2V5ID09ICdfX2RhdGEnKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb2xsZWN0KG9ialtrZXldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb2xsZWN0KHJvb3QpO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBiaW5kaW5nIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldEJvdW5kTm9kZShrZXlzLCBub2RlKSB7XG4gICAgbGV0IGJpbmQgPSAgdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzKTtcblxuICAgIGlmICghYmluZCB8fCAhYmluZC5fX2RhdGEgfHwgIWJpbmQuX19kYXRhLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBiaW5kLl9fZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBkYXRhID0gYmluZC5fX2RhdGFbaV07XG5cbiAgICAgIGlmIChkYXRhLm5vZGUgPT09IG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBub2RlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbZXZhbHVhdGVkPWZhbHNlXVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXROb2RlUHJvcGVydHkobm9kZSwga2V5cywgdmFsdWUsIGV2YWx1YXRlZCA9IGZhbHNlKSB7XG4gICAgbGV0IHByb3AgPSB0aGlzLl9fZ2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMpOyAgICBcbiAgICBsZXQgY29weSA9IHV0aWxzLmNvcHkodmFsdWUpO1xuXG4gICAgaWYgKHByb3ApIHtcbiAgICAgIGxldCByZXMgPSB1dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSh2YWx1ZSwgcHJvcC52YWx1ZSwgcHJvcC5jb3B5KTtcbiAgICAgIHByb3AudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHByb3AuY29weSA9IGNvcHk7XG4gICAgICByZXR1cm4gIXJlcztcbiAgICB9XG4gICAgXG4gICAgbm9kZS5fX3Byb3BlcnRpZXNbdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpXSA9IHtcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIHZhbHVlLFxuICAgICAgY29weSwgICAgICBcbiAgICAgIGtleXMsXG4gICAgICBldmFsdWF0ZWQgIFxuICAgIH07XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5vZGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKSB7XG4gICAgcmV0dXJuIG5vZGUuX19wcm9wZXJ0aWVzW3RoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKV0gfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgdGhlIG5vZGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZWxldGVOb2RlUHJvcGVydHkobm9kZSwga2V5cykge1xuICAgIGxldCBoYXNoID0gYCR7dGhpcy5fX3Njb3BlLl9fbmFtZX0uJHtBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyl9YDtcbiAgICBkZWxldGUgbm9kZS5fX3Byb3BlcnRpZXNbaGFzaF07XG4gIH1cblxuICAvKipcbiAgICogQWRkIHRhZ1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRhZ1xuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hZGRUYWcodGFnLCBub2RlKSB7XG4gICAgaWYoIXRoaXMuX190YWdzW3RhZ10pIHtcbiAgICAgIHRoaXMuX190YWdzW3RhZ10gPSBbXTsgICAgXG4gICAgfVxuXG4gICAgaWYoIXRoaXMuX19oYXNUYWcodGFnKSkge1xuICAgICAgdGhpcy5fX3RhZ3NbdGFnXS5wdXNoKHsgbm9kZSB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIHRhZyBleGlzdHNcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YWdcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBfX2hhc1RhZyh0YWcsIG5vZGUpIHtcbiAgICBpZighdGhpcy5fX3RhZ3NbdGFnXSkge1xuICAgICAgcmV0dXJuIGZhbHNlOyAgICBcbiAgICB9XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5fX3RhZ3NbdGFnXS5sZW5ndGg7IGkgPCBsOyBpKyspIHsgICAgXG4gICAgICBpZih0aGlzLl9fdGFnc1t0YWddW2ldLm5vZGUgPT09IG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgdGFnXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnXG4gICAqIEBwYXJhbSB7Tm9kZX0gW25vZGVdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcmVtb3ZlVGFnICh0YWcsIG5vZGUpIHtcbiAgICBpZighbm9kZSkge1xuICAgICAgZGVsZXRlIHRoaXMuX190YWdzW3RhZ107XG4gICAgICByZXR1cm47ICAgIFxuICAgIH1cblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLl9fdGFnc1t0YWddLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYodGhpcy5fX3RhZ3NbdGFnXVtpXS5ub2RlID09PSBub2RlKSB7XG4gICAgICAgIHRoaXMuX190YWdzW3RhZ10uc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZighdGhpcy5fX3RhZ3NbdGFnXS5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fdGFnc1t0YWddO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIGRhdGEgd2l0aCB0aGUga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYmluZChrZXlzLCBkYXRhKSB7XG4gICAgdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzLCAobGFzdCwgdmFsdWUpID0+IHtcbiAgICAgIGxldCBvYmogPSB7IF9fZGF0YTogW10gfTtcblxuICAgICAgaWYgKCFsYXN0KSB7XG4gICAgICAgIHJldHVybiB2YWx1ZT8gdmFsdWU6IG9iajtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgICAgICBvYmogPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFvYmouX19kYXRhKSB7XG4gICAgICAgIG9iai5fX2RhdGEgPSBbXTtcbiAgICAgIH1cblxuICAgICAgb2JqLl9fZGF0YS5wdXNoKGRhdGEpO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgdGhlIGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYmluZChrZXlzKSB7XG4gICAgbGV0IGJpbmQgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MpO1xuXG4gICAgaWYgKCFiaW5kIHx8ICFiaW5kLl9fZGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYmluZC5fX2RhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IGJpbmQuX19kYXRhW2ldLm5vZGU7XG4gICAgICB0aGlzLl9fZGVsZXRlTm9kZVByb3BlcnR5KG5vZGUsIGtleXMpO1xuICAgIH1cblxuICAgIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncywgKHZhbHVlKSA9PiB7XG4gICAgICBpZiAoT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdmFsdWUuX19kYXRhID0gW107XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIGRhdGEgYnkgbm9kZXNcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlW119IG5vZGVzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5iaW5kQnlOb2Rlcyhub2Rlcykge1xuICAgIGNvbnN0IHVuYmluZCA9IChvYmopID0+IHtcbiAgICAgIGZvciAobGV0IGsgaW4gb2JqKSB7XG4gICAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChrID09ICdfX2RhdGEnKSB7XG4gICAgICAgICAgbGV0IGRhdGEgPSBvYmpba10gfHwgW107XG4gICAgICAgICAgbGV0IGwgPSBkYXRhLmxlbmd0aDtcblxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYmluZCA9IGRhdGFbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChub2Rlcy5pbmRleE9mKGJpbmQubm9kZSkgIT0gLTEpIHsgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBkYXRhLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICBsLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFsKSB7XG4gICAgICAgICAgICBkZWxldGUgb2JqW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghdGhpcy5fX2lzU3lzdGVtQmluZGluZ0tleShrKSkge1xuICAgICAgICAgIHVuYmluZChvYmpba10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICB1bmJpbmQodGhpcy5fX2JpbmRpbmdzKTtcbiAgICB0aGlzLl9fY2xlYXJFbXB0eUJpbmRpbmdzKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWxsIGVtcHR5IGJpbmRpbmdzXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb2JqXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NsZWFyRW1wdHlCaW5kaW5ncyhvYmopIHtcbiAgICBjb25zdCBjbGVhciA9IChvYmosIHBhcmVudCwga2V5KSA9PiB7XG4gICAgICBmb3IgKGxldCBrIGluIG9iaikge1xuICAgICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHZhbCA9IG9ialtrXTtcblxuICAgICAgICBpZiAoayA9PSAnX19kYXRhJyAmJiAoIXZhbCB8fCAhdmFsLmxlbmd0aCkpIHtcbiAgICAgICAgICBkZWxldGUgb2JqW2tdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLl9faXNTeXN0ZW1CaW5kaW5nS2V5KGspKSB7XG4gICAgICAgICAgaWYgKCFPYmplY3Qua2V5cyhvYmpba10pLmxlbmd0aCkge1xuICAgICAgICAgICAgZGVsZXRlIG9ialtrXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjbGVhcihvYmpba10sIG9iaiwgayk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghT2JqZWN0LmtleXMob2JqKS5sZW5ndGggJiYgcGFyZW50KSB7XG4gICAgICAgIGRlbGV0ZSBwYXJlbnRba2V5XTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY2xlYXIob2JqIHx8IHRoaXMuX19iaW5kaW5ncyk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIGxpbmtzXG4gICAqIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NsZWFyU3RvcmVMaW5rcygpIHtcbiAgICBjb25zdCBsaW5rcyA9IEFraWxpLl9fc3RvcmVMaW5rcztcblxuICAgIGZvciAobGV0IGtleSBpbiBsaW5rcykge1xuICAgICAgY29uc3QgYXJyID0gbGlua3Nba2V5XTtcblxuICAgICAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjb25zdCBsaW5rID0gYXJyW2ldO1xuICBcbiAgICAgICAgaWYgKGxpbmsuY29tcG9uZW50ID09PSB0aGlzKSB7XG4gICAgICAgICAgYXJyLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWFyci5sZW5ndGgpIHtcbiAgICAgICAgZGVsZXRlIGxpbmtzW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgY2hpbGQgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlbW92ZUNoaWxkcmVuKCkge1xuICAgIGNvbnN0IHJlbW92ZSA9IChjaGlsZHJlbikgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcblxuICAgICAgICByZW1vdmUoY2hpbGQuX19ha2lsaS5fX2NoaWxkcmVuKTtcbiAgICAgICAgY2hpbGQuX19ha2lsaS5fX3JlbW92ZSgpO1xuICAgICAgICBpLS07XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJlbW92ZSh0aGlzLl9fY2hpbGRyZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgY29tcG9uZW50IHdpdGhvdXQgY2hpbGRyZW4gcmVtb3ZpbmdcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZW1vdmUoKSB7XG4gICAgdGhpcy5fX2RldGFjaCgpO1xuICAgIHRoaXMuX19jbGVhclN0b3JlTGlua3MoKTtcbiAgICB0aGlzLmF0dHJzLm9uUmVtb3ZlZCAmJiB0aGlzLmF0dHJzLm9uUmVtb3ZlZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICB0aGlzLnJlbW92ZWQoKTsgICAgXG4gICAgQWtpbGkucmVtb3ZlU2NvcGUodGhpcy5fX3Njb3BlLl9fbmFtZSk7ICAgIFxuICAgIHRoaXMuZWwucmVtb3ZlKCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0YWNoIHRoZSBjb21wb25lbnRcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZXRhY2goKSB7XG4gICAgaWYgKHRoaXMuX19ldmFsdWF0ZVBhcmVudCAmJiAhdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzKSB7XG4gICAgICB0aGlzLl9fZXZhbHVhdGVQYXJlbnQuX19ha2lsaS5fX3VuYmluZEJ5Tm9kZXMoW10uc2xpY2UuY2FsbCh0aGlzLmVsLmF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fX3BhcmVudCkge1xuICAgICAgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fc3BsaWNlQ2hpbGQodGhpcy5lbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgY29tcG9uZW50IHdpdGggY2hpbGRyZW5cbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZXN0cm95KCkge1xuICAgIHRoaXMuX19yZW1vdmVDaGlsZHJlbigpO1xuICAgIHRoaXMuX19yZW1vdmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciB0aGUgY29tcG9uZW50IGh0bWxcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19lbXB0eSgpIHtcbiAgICBsZXQgbm9kZXMgPSBbXTtcbiAgICB0aGlzLl9fcmVtb3ZlQ2hpbGRyZW4oKTtcblxuICAgIGNvbnN0IGZpbmQgPSAoY2hpbGRyZW4pID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PSAzKSB7XG4gICAgICAgICAgbm9kZXMucHVzaChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hpbGQubm9kZVR5cGUgPT0gMSAmJiAhY2hpbGQuX19ha2lsaSkge1xuICAgICAgICAgIGZvciAobGV0IGsgPSAwLCBhdHRycyA9IGNoaWxkLmF0dHJpYnV0ZXMsIGMgPSBhdHRycy5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgICAgICAgIG5vZGVzLnB1c2goYXR0cnNbaV0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZpbmQoY2hpbGQuY2hpbGROb2Rlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIGZpbmQodGhpcy5lbC5jaGlsZE5vZGVzKTtcbiAgICB0aGlzLl9fdW5iaW5kQnlOb2Rlcyhub2Rlcyk7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcGFyZW50IGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0UGFyZW50KHNlbGVjdG9yID0gJycsIGZpbmRBbGwgPSBmYWxzZSwgbGV2ZWxzID0gbnVsbCkge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBsZXQgbGV2ZWwgPSAwO1xuXG4gICAgaWYgKHR5cGVvZiBsZXZlbHMgIT0gJ29iamVjdCcpIHtcbiAgICAgIGxldmVscyA9IFtsZXZlbHNdO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbmQgPSAocGFyZW50KSA9PiB7XG4gICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghbGV2ZWxzIHx8IGxldmVscy5pbmRleE9mKGxldmVsKSAhPSAtMSkge1xuICAgICAgICBpZiAoIXNlbGVjdG9yIHx8IHBhcmVudC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgaWYgKCFmaW5kQWxsKSB7XG4gICAgICAgICAgICBhcnIucHVzaChwYXJlbnQuX19ha2lsaSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYXJyLnB1c2gocGFyZW50Ll9fYWtpbGkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldmVsKys7XG4gICAgICBmaW5kKHBhcmVudC5fX2FraWxpLl9fcGFyZW50KTtcbiAgICB9O1xuXG4gICAgZmluZCh0aGlzLl9fcGFyZW50KTtcbiAgICByZXR1cm4gZmluZEFsbD8gYXJyOiAoYXJyWzBdIHx8IG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjaGlsZCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZpbmRBbGw9dHJ1ZV0gLSBnZXQgYXJyYXkgaWYgdHJ1ZVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldENoaWxkcmVuKHNlbGVjdG9yID0gJycsIGZpbmRBbGwgPSB0cnVlLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGxldCBsZXZlbCA9IDA7XG5cbiAgICBpZiAodHlwZW9mIGxldmVscyAhPSAnb2JqZWN0Jykge1xuICAgICAgbGV2ZWxzID0gW2xldmVsc107XG4gICAgfVxuXG4gICAgY29uc3QgZmluZCA9IChjaGlsZHJlbikgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYgKCFsZXZlbHMgfHwgbGV2ZWxzLmluZGV4T2YobGV2ZWwpICE9IC0xKSB7XG4gICAgICAgICAgaWYgKCFzZWxlY3RvciB8fCBjaGlsZC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICBpZiAoIWZpbmRBbGwpIHtcbiAgICAgICAgICAgICAgYXJyLnB1c2goY2hpbGQuX19ha2lsaSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXJyLnB1c2goY2hpbGQuX19ha2lsaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldmVsKys7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGZpbmQoY2hpbGRyZW5baV0uX19ha2lsaS5fX2NoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmluZCh0aGlzLl9fY2hpbGRyZW4pO1xuICAgIHJldHVybiBmaW5kQWxsPyBhcnI6IChhcnJbMF0gfHwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG5lYXJlc3QgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kQWxsPXRydWVdIC0gZ2V0IGFycmF5IGlmIHRydWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbcmlnaHQ9ZmFsc2VdIC0gZnJvbSB0aGUgcmlnaHQgc2lkZSBpZiB0cnVlXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0TmVhcihzZWxlY3RvciA9ICcnLCBmaW5kQWxsID0gdHJ1ZSwgcmlnaHQgPSBmYWxzZSkge1xuICAgIGlmICghdGhpcy5fX3BhcmVudCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGxldmVsRWxlbWVudHMgPSB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19jaGlsZHJlbi5zbGljZSgpO1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICByaWdodCAmJiBsZXZlbEVsZW1lbnRzLnJldmVyc2UoKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGV2ZWxFbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBlbCA9IGxldmVsRWxlbWVudHNbaV07XG5cbiAgICAgIGlmIChlbCA9PT0gdGhpcy5lbCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKCFzZWxlY3RvciB8fCBlbC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGFyci5wdXNoKGVsLl9fYWtpbGkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFyci5yZXZlcnNlKCk7XG5cbiAgICBpZiAoIWZpbmRBbGwpIHtcbiAgICAgIHJldHVybiBhcnIubGVuZ3RoPyBhcnJbMF06IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBsaW5rIHRvIHRoZSBzdG9yZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfGZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBzdG9yZShuYW1lLCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLl9faXNNb3VudGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE1ldGhvZCBcInN0b3JlXCIgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgdGhlIGNvbXBpbGF0aW9uLiBGb3IgZXhhbXBsZSwgaW4gXCJjb21waWxlZFwiIG1ldGhvZC5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYgKHR5cGVvZiBuYW1lID09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFyZ3MudW5zaGlmdCgnKicpO1xuICAgICAgaGFuZGxlciA9IG5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nPyB0aGlzLl9fc3RvcmVCeUZ1bmN0aW9uKC4uLmFyZ3MpOiB0aGlzLl9fc3RvcmVCeUtleXMoLi4uYXJncyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbGluayB3aXRoIHRoZSBhdHRyaWJ1dGVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXXxmdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgYXR0cihuYW1lLCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLl9faXNNb3VudGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE1ldGhvZCBcImF0dHJcIiBtdXN0IGJlIGNhbGxlZCBhZnRlciB0aGUgY29tcGlsYXRpb24uIEZvciBleGFtcGxlLCBpbiBcImNvbXBpbGVkXCIgbWV0aG9kLmApO1xuICAgIH1cblxuICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodHlwZW9mIG5hbWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYXJncy51bnNoaWZ0KCcqJyk7XG4gICAgICBoYW5kbGVyID0gbmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbic/IHRoaXMuX19hdHRyQnlGdW5jdGlvbiguLi5hcmdzKTogdGhpcy5fX2F0dHJCeUtleXMoLi4uYXJncyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBzdG9yZSBsaW5rXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHVuc3RvcmUobmFtZSwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5fX2lzTW91bnRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNZXRob2QgXCJ1bnN0b3JlXCIgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgdGhlIGNvbXBpbGF0aW9uLiBGb3IgZXhhbXBsZSwgaW4gXCJjb21waWxlZFwiIG1ldGhvZC5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYgKHR5cGVvZiBuYW1lID09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFyZ3MudW5zaGlmdCgnKicpO1xuICAgICAgaGFuZGxlciA9IG5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nPyB0aGlzLl9fdW5zdG9yZUJ5RnVuY3Rpb24oLi4uYXJndW1lbnRzKTogdGhpcy5fX3Vuc3RvcmVCeUtleXMoLi4uYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGF0dHJpYnV0ZSBsaW5rXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHVuYXR0cihuYW1lLCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLl9faXNNb3VudGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE1ldGhvZCBcInVuYXR0clwiIG11c3QgYmUgY2FsbGVkIGFmdGVyIHRoZSBjb21waWxhdGlvbi4gRm9yIGV4YW1wbGUsIGluIFwiY29tcGlsZWRcIiBtZXRob2QuYCk7XG4gICAgfVxuXG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICh0eXBlb2YgbmFtZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhcmdzLnVuc2hpZnQoJyonKTtcbiAgICAgIGhhbmRsZXIgPSBuYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJz8gdGhpcy5fX3VuYXR0ckJ5RnVuY3Rpb24oLi4uYXJndW1lbnRzKTogdGhpcy5fX3VuYXR0ckJ5S2V5cyguLi5hcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBjb21wb25lbnQgbWF0Y2hlcyBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gc2VsZWN0b3JcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBtYXRjaGVzKHNlbGVjdG9yKSB7XG4gICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3IodGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZWwubWF0Y2hlcyhzZWxlY3Rvcik7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNsb3Nlc3QgcGFyZW50IGNvbXBvbmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgcGFyZW50KHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldFBhcmVudChzZWxlY3RvciwgZmFsc2UsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFycmF5IG9mIHBhcmVudCBjb21wb25lbnRzIGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIHBhcmVudHMoc2VsZWN0b3IgPSAnJywgbGV2ZWxzID0gbnVsbCkge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0UGFyZW50KHNlbGVjdG9yLCB0cnVlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IGNoaWxkIGNvbXBvbmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgY2hpbGQoc2VsZWN0b3IgPSAnJywgbGV2ZWxzID0gbnVsbCkge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0Q2hpbGRyZW4oc2VsZWN0b3IsIGZhbHNlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBjaGlsZCBjb21wb25lbnRzIGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGNoaWxkcmVuKHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldENoaWxkcmVuKHNlbGVjdG9yLCB0cnVlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBjb21wb25lbnRzIGxlZnQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBiZWZvcmUoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgdHJ1ZSwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBjb21wb25lbnRzIHJpZ2h0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgYWZ0ZXIoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgdHJ1ZSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNsb3Nlc3QgY29tcG9uZW50IGxlZnQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgcHJldihzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCBmYWxzZSwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IGNvbXBvbmVudCByaWdodCBmcm9tIHRoZSBjdXJyZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR9XG4gICAqL1xuICBuZXh0KHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIGZhbHNlLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgZWxlbWVudCBwYXJlbnRcbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBwYXJlbnRcbiAgICovXG4gIGFwcGVuZFRvKHBhcmVudCkge1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogeyBzZXRQYXJlbnRzOiB0cnVlLCBjaGVja0NoYW5nZXM6IGZhbHNlIH0gfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FuY2VsIGNvbXBvbmVudCBjb21waWxhdGlvblxuICAgKi9cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXBhbGUgdGhlIGNvbXBvbmVudCwgYnV0IGNhbmNlbCB0aGUgY29tcGlsYXRpb24gaW5zaWRlIG9mIGl0XG4gICAqL1xuICBwcmV2ZW50KCkge1xuICAgIHRoaXMuX19wcmV2ZW50ID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBlbGVtZW50IGh0bWxcbiAgICpcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBlbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2VtcHR5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGVsZW1lbnRcbiAgICpcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICByZW1vdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19kZXN0cm95LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjcmVhdGVkKCkge31cbiAgY29tcGlsZWQoKSB7fVxuICByZWNvbXBpbGVkKCkge31cbiAgcmVzb2x2ZWQoKSB7fVxuICByZW1vdmVkKCkge31cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50LmpzIiwiaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogUmVxdWVzdCBjbGFzcy5cbiAqIEFuIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgYWxsb3dzIHlvdSB0byBtYWtlIHJlcXVlc3RzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JlcXVlc3RzfVxuICovXG5leHBvcnQgY2xhc3MgUmVxdWVzdCB7XG4gIF9fY2FjaGUgPSB7fTtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbZGVmYXVsdHNdIFxuICAgKi9cbiAgY29uc3RydWN0b3IoYmFzZVVybCwgZGVmYXVsdHMpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSBiYXNlVXJsPyAoYmFzZVVybC5yZXBsYWNlKC9cXC8kLywgJycpICsgJy8nKTogJyc7XG5cbiAgICB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgc3RhdHVzRXJyb3JQYXR0ZXJuOiAvXlteMjNdLyxcbiAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgIC4uLihkZWZhdWx0cyB8fCB7fSlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgcmVxdWVzdCB3aXRoIGFueSBtZXRob2RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBxdWVyeShvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIG9wdGlvbnMgPSB7Li4udGhpcy5kZWZhdWx0cywgLi4uKG9wdGlvbnMgfHwge30pfTsgXG4gICAgICBvcHRpb25zLnVybCA9IHRoaXMuYmFzZVVybD8gYCR7dGhpcy5iYXNlVXJsfSR7b3B0aW9ucy51cmwucmVwbGFjZSgvXlxcLy8sICcnKX1gOiBvcHRpb25zLnVybDsgIFxuICAgICAgb3B0aW9ucy5tZXRob2QgPSBvcHRpb25zLm1ldGhvZCB8fCAnR0VUJztcbiAgICAgIFxuICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOyAgICAgIFxuICAgICAgY29uc3QgYmVmb3JlID0gdGhpcy50cmFuc2Zvcm1CZWZvcmUoeGhyLCBvcHRpb25zKTtcbiAgICAgIHhociA9IGJlZm9yZS54aHI7XG4gICAgICBvcHRpb25zID0gYmVmb3JlLm9wdGlvbnM7XG4gICAgICAodHlwZW9mIG9wdGlvbnMub25TdGFydCA9PSAnZnVuY3Rpb24nKSAmJiBvcHRpb25zLm9uU3RhcnQoeGhyKTsgIFxuICAgICAgb3B0aW9ucy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzIHx8IHt9O1xuICAgICAgXG4gICAgICBpZiAob3B0aW9ucy5qc29uKSB7XG4gICAgICAgIG9wdGlvbnMuanNvbiAhPT0gdHJ1ZSAmJiAob3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5qc29uKSk7XG4gICAgICAgIG9wdGlvbnMuaGVhZGVyc1snY29udGVudC10eXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgIG9wdGlvbnMucmVzcG9uc2VUeXBlID0gb3B0aW9ucy5yZXNwb25zZVR5cGUgfHwgJ2pzb24nO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAob3B0aW9ucy5mb3JtKSB7XG4gICAgICAgIG9wdGlvbnMuYm9keSA9IHRoaXMuY3JlYXRlRm9ybURhdGEob3B0aW9ucy5mb3JtKTtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzWydjb250ZW50LXR5cGUnXSA9ICdtdWx0aXBhcnQvZm9ybS1kYXRhJztcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMucGFyYW1zKSB7XG4gICAgICAgIGxldCBzdHIgPSB0aGlzLnBhcmFtc1RvUXVlcnkob3B0aW9ucy5wYXJhbXMpO1xuICAgICAgICBzdHIgJiYgKG9wdGlvbnMudXJsICs9IFwiP1wiICsgc3RyKTtcbiAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICBsZXQgaGFzaCA9IG51bGw7XG4gICAgICBsZXQgY2FjaGUgPSB0eXBlb2Ygb3B0aW9ucy5jYWNoZSA9PSAnZnVuY3Rpb24nPyBvcHRpb25zLmNhY2hlKG9wdGlvbnMpOiBvcHRpb25zLmNhY2hlO1xuICAgICAgKHdpbmRvdy5BS0lMSV9TRVJWRVIgJiYgIUFraWxpLl9faW5pdCkgJiYgKGNhY2hlID0gdHJ1ZSk7XG5cbiAgICAgIGlmKG9wdGlvbnMubWV0aG9kLnRvVXBwZXJDYXNlKCkgPT0gJ0dFVCcgJiYgKCFvcHRpb25zLmJvZHkgfHwgdHlwZW9mIG9wdGlvbnMuYm9keSA9PSAnc3RyaW5nJykpIHtcbiAgICAgICAgaGFzaCA9IHRoaXMuY3JlYXRlQ2FjaGVIYXNoKHsgXG4gICAgICAgICAgdXJsOiBvcHRpb25zLnVybCwgXG4gICAgICAgICAgbWV0aG9kOiBvcHRpb25zLm1ldGhvZCxcbiAgICAgICAgICB1c2VyOiBvcHRpb25zLnVzZXIsIFxuICAgICAgICAgIHBhc3N3b3JkOiBvcHRpb25zLnBhc3N3b3JkLCBcbiAgICAgICAgICBib2R5OiBvcHRpb25zLmJvZHkgXG4gICAgICAgIH0pOyAgICAgICAgXG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmKGNhY2hlICYmIGhhc2gpIHsgICAgICAgIFxuICAgICAgICBsZXQgX2NhY2hlID0gdGhpcy5nZXRDYWNoZShoYXNoKTtcbiAgICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgICAgIGlmKF9jYWNoZSAmJiAoY2FjaGUgPT09IHRydWUgfHwgbm93IC0gX2NhY2hlLmNyZWF0ZWRBdCA8PSBjYWNoZSkpIHtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0aGlzLnRyYW5zZm9ybUFmdGVyKF9jYWNoZS5yZXN1bHQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB4aHIub3BlbihvcHRpb25zLm1ldGhvZCwgb3B0aW9ucy51cmwsIHRydWUsIG9wdGlvbnMudXNlciwgb3B0aW9ucy5wYXNzd29yZCk7XG5cbiAgICAgIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KCd0aW1lb3V0JykpIHtcbiAgICAgICAgeGhyLnRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnJlc3BvbnNlVHlwZSkge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gb3B0aW9ucy5yZXNwb25zZVR5cGU7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLndpdGhDcmVkZW50aWFscykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gb3B0aW9ucy53aXRoQ3JlZGVudGlhbHM7XG4gICAgICB9XG5cbiAgICAgIGxldCBoZWFkZXJLZXlzID0gT2JqZWN0LmtleXMob3B0aW9ucy5oZWFkZXJzKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBoZWFkZXJLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgayA9IGhlYWRlcktleXNbaV07XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGssIG9wdGlvbnMuaGVhZGVyc1trXSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5vblByb2dyZXNzID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgeGhyLm9ucHJvZ3Jlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9wdGlvbnMub25Qcm9ncmVzcyh4aHIpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgcmVzcG9uc2U6IHhoci5yZXNwb25zZSxcbiAgICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICAgICAgcmVhZHlTdGF0ZTogeGhyLnJlYWR5U3RhdGUsXG4gICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHQsXG4gICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB4aHIud2l0aENyZWRlbnRpYWxzLFxuICAgICAgICAgIHJlc3BvbnNlVHlwZTogeGhyLnJlc3BvbnNlVHlwZSxcbiAgICAgICAgICByZXNwb25zZVRleHQ6IHhoci5yZXNwb25zZVR5cGUgPT0gJ3RleHQnPyB4aHIucmVzcG9uc2VUZXh0OiAnJyxcbiAgICAgICAgICByZXNwb25zZVhNTDogeGhyLnJlc3BvbnNlVHlwZSA9PSAnZG9jdW1lbnQnPyB4aHIucmVzcG9uc2VYTUw6ICcnLFxuICAgICAgICAgIHJlc3BvbnNlVVJMOiB4aHIucmVzcG9uc2VVUkwsXG4gICAgICAgICAgdGltZW91dDogeGhyLnRpbWVvdXQsXG4gICAgICAgICAgaGVhZGVyczogdGhpcy5nZXRIZWFkZXJzKHhociksICAgICAgICAgXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB0aGlzLnRyYW5zZm9ybUFmdGVyKHJlc3VsdCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc3RhdHVzRXJyb3JQYXR0ZXJuICYmICh4aHIuc3RhdHVzICsgJycpLm1hdGNoKG9wdGlvbnMuc3RhdHVzRXJyb3JQYXR0ZXJuKSkge1xuICAgICAgICAgIGxldCBlcnIgPSBuZXcgRXJyb3IoYFJlcXVlc3QgdG8gXCIke29wdGlvbnMudXJsfVwiIHJldHVybnMgZmFpbHVyZSBzdGF0dXMgY29kZSAke3hoci5zdGF0dXN9YCk7XG4gICAgICAgICAgZXJyLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICB9IFxuXG4gICAgICAgIGhhc2ggJiYgdGhpcy5jcmVhdGVDYWNoZShoYXNoLCByZXN1bHQpOyAgICAgICAgXG4gICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9udGltZW91dCA9ICgpID0+IHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgUmVxdWVzdCB0byBcIiR7b3B0aW9ucy51cmx9XCIgdGltZWQgb3V0YCkpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICB4aHIuc2VuZChvcHRpb25zLmJvZHkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBoZWFkZXJzIG9mIGEgWE1MSHR0cFJlcXVlc3QgaW5zdGFuY2VcbiAgICogXG4gICAqIEBwYXJhbSB7WE1MSHR0cFJlcXVlc3R9XG4gICAqL1xuICBnZXRIZWFkZXJzID0gZnVuY3Rpb24oeGhyKSB7XG4gICAgbGV0IGhlYWRlcnMgPSB7fTtcbiAgICBsZXQgc3RyID0geGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpOyAgXG4gICAgbGV0IGFyciA9IHN0ci5zcGxpdCgnXFx1MDAwZFxcdTAwMGEnKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGxpbmUgPSBhcnJbaV07XG4gICAgICBsZXQgaW5kZXggPSBsaW5lLmluZGV4T2YoJ1xcdTAwM2FcXHUwMDIwJyk7XG5cbiAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgbGV0IGtleSA9IGxpbmUuc3Vic3RyaW5nKDAsIGluZGV4KTtcbiAgICAgICAgbGV0IHZhbCA9IGxpbmUuc3Vic3RyaW5nKGluZGV4ICsgMik7XG4gICAgICAgIGhlYWRlcnNba2V5XSA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaGVhZGVycztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2FjaGVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICBnZXRDYWNoZShoYXNoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19jYWNoZVtoYXNoXSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBjYWNoZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhhc2hcbiAgICogQHBhcmFtIHtvYmplY3R9IHJlc3VsdFxuICAgKi9cbiAgY3JlYXRlQ2FjaGUoaGFzaCwgcmVzdWx0KSB7XG4gICAgdGhpcy5fX2NhY2hlW2hhc2hdID0geyByZXN1bHQsIGNyZWF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKCkgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgY2FjaGVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXG4gICAqL1xuICByZW1vdmVDYWNoZShoYXNoKSB7XG4gICAgZGVsZXRlIHRoaXMuX19jYWNoZVtoYXNoXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBoYXNoIHRvIHNhdmUgaW4gdGhlIGNhY2hlXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgY3JlYXRlQ2FjaGVIYXNoKGRhdGEpIHtcbiAgICBsZXQgaGFzaCA9IDA7XG4gICAgbGV0IHN0ciA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCAgY2hhciA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgaGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgY2hhcjtcbiAgICAgIGhhc2ggPSBoYXNoICYgaGFzaDsgXG4gICAgfVxuXG4gICAgcmV0dXJuIGhhc2ggKyAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IG9iamVjdCB0byBxdWVyeSBzdHJpbmdcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgcGFyYW1zVG9RdWVyeShvYmopIHtcbiAgICBsZXQgc2VwID0gJyYnO1xuICAgIGxldCBlcSA9ICc9JztcblxuICAgIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubWFwKChrKSA9PiB7XG4gICAgICBsZXQga3MgPSBlbmNvZGVVUklDb21wb25lbnQoayk7XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9ialtrXSkpIHtcbiAgICAgICAga3MgPSBlbmNvZGVVUklDb21wb25lbnQoayk7XG4gICAgICAgIHJldHVybiBvYmpba10ubWFwKCh2LCBpKSA9PiBrcyArIGBbJHtpfV1gICsgZXEgKyBlbmNvZGVVUklDb21wb25lbnQodikpLmpvaW4oc2VwKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG9ialtrXSAmJiB0eXBlb2Ygb2JqW2tdID09PSAnb2JqZWN0Jykge1xuICAgICAgICBsZXQgb3B0ID0gW107XG4gICAgICAgIE9iamVjdC5rZXlzKG9ialtrXSkubWFwKChrZXkpID0+IG9wdC5wdXNoKGtzICsgYFske2tleX1dYCArIGVxICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrXVtrZXldKSkpO1xuICAgICAgICByZXR1cm4gb3B0LmpvaW4oc2VwKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4ga3MgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba10pO1xuICAgICAgfVxuICAgIH0pLmpvaW4oc2VwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHF1ZXJ5IHN0cmluZyB0byBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgcGFyYW1zRnJvbVF1ZXJ5KHN0cikge1xuICAgIGxldCBxdWVyeSA9IHt9O1xuICAgIGxldCBhbXBzID0gc3RyLnNwbGl0KCcmJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGFtcHMubGVuZ3RoOyBpIDxsOyBpKyspIHtcbiAgICAgIGxldCBlcXMgPSAgYW1wc1tpXS5zcGxpdCgnPScpO1xuICAgICAgbGV0IGtleSA9IGRlY29kZVVSSUNvbXBvbmVudChlcXNbMF0pO1xuICAgICAgbGV0IHZhbCA9IGRlY29kZVVSSUNvbXBvbmVudChlcXNbMV0pO1xuXG4gICAgICBpZiAoIWtleSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgICAgcXVlcnlba2V5XS5wdXNoKHZhbCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChxdWVyeVtrZXldKSB7XG4gICAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSwgdmFsXTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBxdWVyeVtrZXldID0gdmFsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbXVsdGlwYXJ0IGZvcm0gZGF0YSBmcm9tIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEBwYXJhbSB7Rm9ybURhdGF9IFtkYXRhXVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25hbWVzcGFjZV0gICAqXG4gICAqIEByZXR1cm5zIHtGb3JtRGF0YX1cbiAgICovXG4gIGNyZWF0ZUZvcm1EYXRhKG9iaiwgZGF0YSA9IG51bGwsIG5hbWVzcGFjZSA9ICcnKSB7XG4gICAgbGV0IGZkID0gZGF0YSB8fCBuZXcgRm9ybURhdGEoKTtcblxuICAgIGZvciAobGV0IGsgaW4gb2JqKSB7XG4gICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGspICYmIG9ialtrXSkge1xuICAgICAgICBsZXQga2V5ID0gbmFtZXNwYWNlPyBuYW1lc3BhY2UgKyAnWycgKyBrICsgJ10nOiBrO1xuXG4gICAgICAgIGlmIChvYmpba10gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgZmQuYXBwZW5kKGtleSwgb2JqW2tdLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3Qob2JqW2tdKSkge1xuICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybURhdGEob2JqW2tdLCBmZCwga2V5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBmZC5hcHBlbmQoa2V5LCBvYmpba10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZkO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBkYXRhIGJlZm9yZSBhIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtYTUxIdHRwUmVxdWVzdH0geGhyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICB0cmFuc2Zvcm1CZWZvcmUoeGhyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHsgeGhyLCBvcHRpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gZGF0YSBhZnRlciBhIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IHJlc3VsdFxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgdHJhbnNmb3JtQWZ0ZXIocmVzdWx0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnJlc3VsdCxcbiAgICAgIGRhdGE6IHJlc3VsdC5yZXNwb25zZSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIEdFVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBnZXQodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdHRVQnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgREVMRVRFIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGRlbGV0ZSh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ0RFTEVURSc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBQT1NUIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHBvc3QodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQT1NUJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIFBVVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBwdXQodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQVVQnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgUEFUQ0ggcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcGF0Y2godXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQQVRDSCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gICAvKipcbiAgICogIE1ha2UgSEVBRCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBoZWFkKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnSEVBRCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoKTtcblxuLyoqXG4gKiBTZXQgcm91dGVyJ3MgZGVmYXVsdCB2YXJpYWJsZXNcbiAqL1xucmVxdWVzdC5zZXREZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fX2luc3RhbmNlcyA9IHt9O1xuICB0aGlzLl9fY2FjaGUgPSB7fTtcbn1cblxuLyoqXG4gKiBBZGQgbmV3IHJlcXVlc3QgaW5zdGFuY2UgdG8gdGhlIG1haW4gc2VydmljZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1JlcXVlc3R9IGluc3RhbmNlXG4gKi9cbnJlcXVlc3QuYWRkSW5zdGFuY2UgPSBmdW5jdGlvbihuYW1lLCBpbnN0YW5jZSkge1xuICB0aGlzLl9faW5zdGFuY2VzW25hbWVdID0gaW5zdGFuY2U7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnJlcXVlc3QucmVtb3ZlSW5zdGFuY2UgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLl9faW5zdGFuY2VzW25hbWVdO1xufTtcblxuLyoqXG4gKiBEZWluaXQgcm91dGVyXG4gKi9cbnJlcXVlc3QuZGVpbml0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2V0RGVmYXVsdHMoKTtcbn07XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVlc3QsICd1c2UnLCB7XG4gIGdldDogKCkgPT4ge1xuICAgIHJldHVybiByZXF1ZXN0Ll9faW5zdGFuY2VzO1xuICB9XG59KTtcblxucmVxdWVzdC5SZXF1ZXN0ID0gUmVxdWVzdDtcbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3Q7XG5yZXF1ZXN0LnNldERlZmF1bHRzKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL3JlcXVlc3QuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5cbi8qKlxuICogQmFzZSBjb21wb25lbnQgdG8gd29yayB3aXRoIHRleHQgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2lucHV0fVxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfdGV4dGFyZWF9XG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jb250ZW50ZWRpdGFibGV9XG4gKiBcbiAqIEBhdHRyIHtzdHJpbmd9IHZhbHVlIC0gYWN0dWFsIHZhbHVlXG4gKiBAYXR0ciB7Ym9vbGVhbn0gZm9jdXMgLSBzZXQgdGhlIGZvY3VzIG9yIG5vdFxuICogQGF0dHIge251bWJlcn0gZGVib3VuY2UgLSBkZWJvdW5jZSBkZWxheVxuICogQG1lc3NhZ2Uge3ZvaWR9IGRlYm91bmNlIC0gc2VudCBvbiB0aGUgZGVib3VuY2Uge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW5wdXR9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnZhbHVlS2V5ID0gJ3ZhbHVlJztcbiAgICB0aGlzLmRlYm91bmNlSW50ZXJ2YWwgPSA1MDA7XG4gICAgdGhpcy5kZWJvdW5jZVRpbWVvdXQgPSBudWxsO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgaWYodGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ29uLWRlYm91bmNlJykpIHtcbiAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7ICAgICAgICBcbiAgICAgICAgdGhpcy5kZWJvdW5jZVRpbWVvdXQgJiYgY2xlYXJUaW1lb3V0KHRoaXMuZGVib3VuY2VUaW1lb3V0KTtcbiAgICAgICAgdGhpcy5kZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmF0dHJzLm9uRGVib3VuY2UudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICAgICAgfSwgdGhpcy5kZWJvdW5jZUludGVydmFsKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuYXR0cignZm9jdXMnLCB0aGlzLnNldEZvY3VzKTtcbiAgICB0aGlzLmF0dHIoJ3ZhbHVlJywgdGhpcy5zZXRWYWx1ZSk7XG4gICAgdGhpcy5hdHRyKCdkZWJvdW5jZScsIHRoaXMuc2V0RGVib3VuY2UpO1xuICB9XG5cbiAgcmVtb3ZlZCgpIHtcbiAgICB0aGlzLmRlYm91bmNlVGltZW91dCAmJiBjbGVhclRpbWVvdXQodGhpcy5kZWJvdW5jZVRpbWVvdXQpO1xuICB9XG5cbiAgc2V0RGVib3VuY2UoaW50ZXJ2YWwpIHtcbiAgICB0aGlzLmRlYm91bmNlSW50ZXJ2YWwgPSAraW50ZXJ2YWw7XG4gIH1cblxuICBzZXRGb2N1cyh2YWx1ZSkge1xuICAgIHZhbHVlPyB0aGlzLnNldEVsZW1lbnRGb2N1cygpOiB0aGlzLnNldEVsZW1lbnRCbHVyKCk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICh0aGlzLmVsW3RoaXMudmFsdWVLZXldICE9PSB2YWx1ZSkgJiYgKHRoaXMuZWxbdGhpcy52YWx1ZUtleV0gPSB2YWx1ZSA9PT0gMD8gJzAnOiAodmFsdWUgfHwgJycpKTtcbiAgfVxuXG4gIHNldEVsZW1lbnRGb2N1cygpIHtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cblxuICBzZXRFbGVtZW50Qmx1cigpIHtcbiAgICB0aGlzLmVsLmJsdXIoKTtcbiAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBsb29wcy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfbG9vcHN9XG4gKiBcbiAqIEB0YWcgZm9yXG4gKiBAc2VsZWN0b3IgZm9yW2luXSxvbFtpbl0sdWxbaW5dLHRoZWFkW2luXSx0Ym9keVtpbl0sdGZvb3RbaW5dXG4gKiBAYXR0ciB7b2JqZWN0fGFycmF5fSBpbiAtIGRhdGEgdG8gY3JlYXRlIHRoZSBsb29wXG4gKiBAbWVzc2FnZSB7b2JqZWN0fGFycmF5fSBvdXQgLSBzZW50IG9uIHRoZSBkYXRhIGNoYW5nZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbaW5dJztcbiAgc3RhdGljIGV2ZW50cyA9IFsnb3V0J107XG4gIHN0YXRpYyBzYXZlQXR0cmlidXRlUHJveHlJbiA9IHRydWU7ICBcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnZm9yJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdvbCcsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndWwnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RoZWFkJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0Ym9keScsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGZvb3QnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RyJywgdGhpcy5Mb29wKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2xvb3AnLCB0aGlzLkxvb3ApO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIFxuICAgIHRoaXMuaXRlcmF0b3JzID0gW107XG4gICAgdGhpcy5pdGVyYXRvclJlZiA9IG51bGw7XG4gICAgdGhpcy5pdGVyYXRvck91dGVySFRNTCA9IG51bGw7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHsgICAgXG4gICAgdGhpcy5jcmVhdGVJdGVyYXRvcigpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRyKCdpbicsIHRoaXMuZHJhdyk7XG4gIH1cblxuICBjcmVhdGVJdGVyYXRvcigpIHtcbiAgICBsZXQgZWw7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLmVsLmNoaWxkcmVuW2ldO1xuXG4gICAgICBpZiAoY2hpbGQuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKSA9PSAnbG9vcCcpIHtcbiAgICAgICAgZWwgPSBjaGlsZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGVsID0gY2hpbGQ7XG4gICAgfVxuXG4gICAgaWYgKCFlbCkge1xuICAgICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsb29wJyk7ICAgICAgXG4gICAgICBlbC5pbm5lckhUTUwgPSB0aGlzLmVsLmlubmVySFRNTDsgXG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnOyAgICAgXG4gICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGVsKTtcbiAgICB9XG5cbiAgICBsZXQgY29tcG9uZW50TmFtZSA9IGVsLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50Jyk7XG5cbiAgICBpZiAoY29tcG9uZW50TmFtZSAhPSAnbG9vcCcpIHtcbiAgICAgIGxldCBjb21wb25lbnQgPSBBa2lsaS5jb21wb25lbnQoY29tcG9uZW50TmFtZSB8fCBlbC50YWdOYW1lKTtcblxuICAgICAgaWYgKCFjb21wb25lbnQpIHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdjb21wb25lbnQnLCAnbG9vcCcpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIShjb21wb25lbnQucHJvdG90eXBlIGluc3RhbmNlb2YgRm9yKSkge1xuICAgICAgICBsZXQgbWFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xvb3AnKTtcbiAgICAgICAgbWFzay5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIGVsID0gbWFzaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmh0bWwgPSBlbC5pbm5lckhUTUw7XG4gICAgdGhpcy5pdGVyYXRvclJlZiA9IGVsLm5leHRTaWJsaW5nO1xuICAgIHRoaXMuaXRlcmF0b3JPdXRlckhUTUwgPSBlbC5vdXRlckhUTUw7XG4gICAgZWwucmVtb3ZlKCk7XG4gIH1cblxuICBjcmVhdGVJdGVyYXRvckVsZW1lbnQoKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICBlbC5pbm5lckhUTUwgPSB0aGlzLml0ZXJhdG9yT3V0ZXJIVE1MO1xuICAgIGVsID0gZWwuY29udGVudC5maXJzdENoaWxkO1xuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIGxvb3Aoa2V5LCB2YWx1ZSwgaW5kZXgpIHtcbiAgICB0aGlzLl9faW5kZXggPSBpbmRleDtcbiAgICB0aGlzLl9fa2V5ID0ga2V5O1xuICAgIHRoaXMuX192YWx1ZSA9IHZhbHVlOyAgICBcbiAgICB0aGlzLl9fY29tcGFyaXNvblZhbHVlID0gdXRpbHMuY29weSh2YWx1ZSk7XG5cbiAgICBpZih0aGlzLml0ZXJhdG9ycy5sZW5ndGggPiBpbmRleCkge1xuICAgICAgbGV0IGl0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcnNbaW5kZXhdO1xuICAgICAgbGV0IGNDb3B5ID0gaXRlcmF0b3IuY29tcGFyc2lvbi5jb3B5O1xuICAgICAgICBcbiAgICAgIGlmICh0aGlzLl9faW5kZXggIT09IGl0ZXJhdG9yLmluZGV4KSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldEluZGV4KCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaXRlcmF0b3Iuc2V0SW5kZXgodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9fa2V5ICE9PSBpdGVyYXRvci5rZXkpIHtcbiAgICAgICAgaXRlcmF0b3Iuc2V0S2V5KCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaXRlcmF0b3Iuc2V0S2V5KHRydWUpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoIXV0aWxzLmNvbXBhcmUoY0NvcHksIHRoaXMuX19jb21wYXJpc29uVmFsdWUsIHsgaWdub3JlVW5kZWZpbmVkOiB0cnVlIH0pKSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldFZhbHVlKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaXRlcmF0b3Iuc2V0VmFsdWUodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX19wcm9taXNlcy5wdXNoKEFraWxpLmNvbXBpbGUoaXRlcmF0b3IuZWwsIHsgcmVjb21waWxlOiB7IGNoZWNrQ2hhbmdlczogdHJ1ZSB9IH0pKTtcbiAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICB9XG4gICAgXG4gICAgbGV0IGVsID0gdGhpcy5jcmVhdGVJdGVyYXRvckVsZW1lbnQoKTtcbiAgICBlbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XG4gICAgdGhpcy5lbC5pbnNlcnRCZWZvcmUoZWwsIHRoaXMuaXRlcmF0b3JSZWYpO1xuICAgIHRoaXMuX19wcm9taXNlcy5wdXNoKEFraWxpLmNvbXBpbGUoZWwpKTtcbiAgICB0aGlzLml0ZXJhdG9ycy5wdXNoKGVsLl9fYWtpbGkpO1xuICAgIHJldHVybiBlbC5fX2FraWxpO1xuICB9XG5cbiAgZHJhdyhkYXRhKSB7XG4gICAgaWYgKHR5cGVvZiBkYXRhICE9ICdvYmplY3QnIHx8IGRhdGEgPT09IG51bGwpIHtcbiAgICAgIGlmIChBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgIGNvbnNvbGUud2FybihgXCJGb3JcIiBjb21wb25lbnQgXCJpblwiIGF0dHJpYnV0ZSB2YWx1ZSB0eXBlIG11c3QgYmUgYW4gb2JqZWN0L2FycmF5YCk7ICAgICAgICBcbiAgICAgIH1cblxuICAgICAgZGF0YSA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMuZGF0YSA9IGRhdGE7ICAgXG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIGNvbnN0IGxvb3AgPSAoa2V5LCB2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBpdGVyYXRvciA9IHRoaXMubG9vcChrZXksIHZhbHVlLCBpbmRleCk7XG4gICAgICBpdGVyYXRvci5pdGVyYXRlKGluZGV4KTtcbiAgICB9O1xuXG4gICAgaWYoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgZm9yIChsZXQgbCA9IGRhdGEubGVuZ3RoOyBpbmRleCA8IGw7IGluZGV4KyspIHtcbiAgICAgICAgbG9vcChpbmRleCwgZGF0YVtpbmRleF0sIGluZGV4KTtcbiAgICAgIH0gICAgIFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSk7XG5cbiAgICAgIGZvciAobGV0IGwgPSBrZXlzLmxlbmd0aDsgaW5kZXggPCBsOyBpbmRleCsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2luZGV4XTtcbiAgICAgICAgbG9vcChrZXksIGRhdGFba2V5XSwgaW5kZXgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSBpbmRleCwgbCA9IHRoaXMuaXRlcmF0b3JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGl0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcnNbaV07XG4gICAgICBpdGVyYXRvci5fX2Rlc3Ryb3koKTtcbiAgICAgIHRoaXMuaXRlcmF0b3JzLnNwbGljZShpLCAxKTtcbiAgICAgIGwtLTtcbiAgICAgIGktLTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwodGhpcy5fX3Byb21pc2VzKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIHRoaXMuYXR0cnMub25PdXQudHJpZ2dlcihkYXRhLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgfSk7ICAgIFxuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBpbml0aWFsIHN0YXRlXG4gICAqL1xuICByZXNldCgpIHtcbiAgICB0aGlzLl9faXRlcmF0b3IgPSBudWxsO1xuICAgIHRoaXMuX19pbmRleCA9IDA7XG4gICAgdGhpcy5fX2tleSA9ICcnO1xuICAgIHRoaXMuX192YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5fX2NvbXBhcmlzb25WYWx1ZSA9IG51bGw7XG4gICAgdGhpcy5fX3Byb21pc2VzID0gW107XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGxvb3BzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19sb29wc31cbiAqIFxuICogQHRhZyBsb29wXG4gKiBAc2VsZWN0b3IgbG9vcCx0clxuICogQGF0dHIgQHNlZSBGb3JcbiAqIEBzY29wZSB7Kn0gbG9vcFZhbHVlIC0gZGF0YSBpdGVtJ3MgdmFsdWUgb2YgdGhlIGN1cnJlbnQgaXRlcmF0aW9uIFxuICogQHNjb3BlIHtzdHJpbmd8bnVtYmVyfSBsb29wS2V5IC0ga2V5IG9mIHRoZSBpdGVyYXRpb25cbiAqIEBzY29wZSB7bnVtYmVyfSBsb29wSW5kZXggLSBpbmRleCBvZiB0aGUgaXRlcmF0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBMb29wIGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmZvciA9IG51bGw7XG4gICAgdGhpcy5odG1sID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgdGhpcy5pc0ZvciA9IHRoaXMuZWwuaGFzQXR0cmlidXRlKCdpbicpO1xuXG4gICAgaWYgKCF0aGlzLmlzRm9yICYmICEodGhpcy5lbC5wYXJlbnROb2RlLl9fYWtpbGkgaW5zdGFuY2VvZiBGb3IpKSB7XG4gICAgICB0aGlzLmNhbmNlbCgpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9faXRlcmF0b3IgPSB0aGlzO1xuICAgIHRoaXMuZm9yID0gdGhpcy5fX3BhcmVudC5fX2FraWxpO1xuICAgIHRoaXMuc2V0SW5kZXgodHJ1ZSk7XG4gICAgdGhpcy5zZXRLZXkodHJ1ZSk7XG4gICAgdGhpcy5zZXRWYWx1ZSh0cnVlKTtcblxuICAgIGlmKHRoaXMuaXNGb3IpIHtcbiAgICAgIHJldHVybiBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgaWYodGhpcy5pc0Zvcikge1xuICAgICAgcmV0dXJuIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgc2V0SW5kZXgodGFyZ2V0KSB7XG4gICAgdGhpcy5pbmRleCA9IHRoaXMuZm9yLl9faW5kZXg7XG4gICAgdGhpcy5zY29wZS5fX3NldCgnbG9vcEluZGV4JywgdGhpcy5pbmRleCwgZmFsc2UsIHRhcmdldCk7XG4gIH1cblxuICBzZXRLZXkodGFyZ2V0KSB7XG4gICAgdGhpcy5rZXkgPSB0aGlzLmZvci5fX2tleTtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wS2V5JywgdGhpcy5rZXksIGZhbHNlLCB0YXJnZXQpO1xuICB9XG5cbiAgc2V0VmFsdWUodGFyZ2V0KSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuZm9yLl9fdmFsdWU7XG4gICAgdGhpcy5zY29wZS5fX3NldCgnbG9vcFZhbHVlJywgdGhpcy52YWx1ZSwgdHJ1ZSwgdGFyZ2V0KTtcblxuICAgIHRoaXMuY29tcGFyc2lvbiA9IHtcbiAgICAgIGNvcHk6IHRoaXMuZm9yLl9fY29tcGFyaXNvblZhbHVlLFxuICAgICAgdmFsdWU6IHRoaXMuZm9yLl9fdmFsdWVcbiAgICB9O1xuICB9XG5cbiAgaXRlcmF0ZSgpIHt9XG59XG5cbkZvci5Mb29wID0gTG9vcDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9mb3IuanMiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5cbi8qKlxuICogU2NvcGUgY2xhc3MuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvc2NvcGV9XG4gKlxuICogQWxsIHByb3BlcnRpZXMgc3RhcnRpbmcgd2l0aCBfXyBhcmUgbm90IG1vbml0b3JlZC5cbiAqIFlvdSBjYW4gdXNlIHRoZW0gZm9yIGludGVybmFsIG1hbmlwdWxhdGlvbnMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3BlIHtcbiAgc3RhdGljIG5lc3RlZFdhdGNoaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVsLCBjb21wb25lbnQpIHtcbiAgICB0aGlzLl9fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fX2VsID0gZWw7XG4gICAgdGhpcy5fX2NvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ3Njb3BlJywgbmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGEgc2NvcGUgdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzdHJpY3Q9ZmFsc2VdIC0gd2l0aG91dCBvYmplY3QgY29weWluZ1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldChrZXlzLCB2YWx1ZSwgc3RyaWN0ID0gZmFsc2UsIHRhcmdldCA9IGZhbHNlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cbiAgICBcbiAgICBBa2lsaS51bmlzb2xhdGUoKCkgPT4ge1xuICAgICAgc3RyaWN0ICYmICh0aGlzLl9fY29tcG9uZW50Ll9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyA9IHRydWUpO1xuICAgICAgdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGFyZ2V0PyB0aGlzLl9fdGFyZ2V0OiB0aGlzLCAobGFzdCwgdmFsKSA9PiB7XG4gICAgICAgIGlmICghbGFzdCkge1xuICAgICAgICAgIHJldHVybiB2YWwgfHwge307XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHN0cmljdCAmJiAodGhpcy5fX2NvbXBvbmVudC5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgPSBmYWxzZSk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NvcGUuanMiLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5cbi8qKlxuICogQ2xhc3MgZm9yIHdvcmtpbmcgd2l0aCBldmVudHMuXG4gKiBBbiBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGFsbG93cyB5b3UgdG8gdHJpZ2dlciBjdXN0b20gamF2YXNjcmlwdCBldmVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvZXZlbnRzfVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBlbCwgY29tcG9uZW50KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmVsID0gZWw7XG4gICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgdGhpcy5lbENvbXBvbmVudCA9IHRoaXMuZWwuX19ha2lsaSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgdGhlIGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSAtIHNlbmRpbmcgZGF0YS4gV2lsbCBiZSBpbiB0aGUgZXZlbnQuZGV0YWlsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgdHJpZ2dlcihkYXRhLCBvcHRpb25zID0ge30sIGZvcmNlID0gZmFsc2UpIHtcbiAgICBpZiAoZm9yY2UgfHwgIXRoaXMuaW5FdmFsdWF0aW5nKCkpIHtcbiAgICAgIHRoaXMuZWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQodGhpcy5uYW1lLCB0aGlzLnByZXBhcmVPcHRpb25zKHsgZGV0YWlsOiBkYXRhLCAgLi4ub3B0aW9ucyB9KSkpO1xuICAgIH0gICBcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaCB0aGUgZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gX0V2ZW50IC0gY2xhc3Mgb2YgdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZGlzcGF0Y2goX0V2ZW50LCBvcHRpb25zID0ge30sIGZvcmNlID0gZmFsc2UpIHtcbiAgICBpZiAoZm9yY2UgfHwgIXRoaXMuaW5FdmFsdWF0aW5nKCkpIHtcbiAgICAgIHRoaXMuZWwuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50KHRoaXMubmFtZSwgdGhpcy5wcmVwYXJlT3B0aW9ucyhvcHRpb25zKSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwZXJlIGFuIGV2ZW50IG9wdGlvbnNcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gXG4gICAqL1xuICBwcmVwYXJlT3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0geyBidWJibGVzOiB0cnVlLCAuLi5vcHRpb25zIH07ICBcbiAgICB0aGlzLmVsQ29tcG9uZW50ICYmICF0aGlzLmVsQ29tcG9uZW50Ll9fc2F2ZUF0dHJpYnV0ZVByb3h5T3V0ICYmIChvcHRpb25zLmRldGFpbCA9IHV0aWxzLmNvcHkob3B0aW9ucy5kZXRhaWwpKTtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBldmVudCBjYWxsYmFjayBkb2Vzbid0IHJ1biByZWN1cnNpdmVcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpbkV2YWx1YXRpbmcoKSB7XG4gICAgbGV0IGRhdGEgPSB0aGlzLmNvbXBvbmVudC5fX2V2YWx1YXRpbmdFdmVudDtcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhLmVsID09PSB0aGlzLmVsICYmIGRhdGEuZXZlbnQudHlwZSA9PT0gdGhpcy5uYW1lICYmIGRhdGEuY29tcG9uZW50ID09PSB0aGlzLmNvbXBvbmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIHRoZSBmdW5jdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICAgKi9cbiAgYmluZChmbikge1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMuZm4gPSBmbik7XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIHRoZSBmdW5jdGlvblxuICAgKi9cbiAgdW5iaW5kKCkge1xuICAgIHRoaXMuZm4gJiYgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubmFtZSwgdGhpcy5mbik7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXZlbnQtZW1pdHRlci5qcyIsImltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG4vKipcbiAqIFN0b3JlIGFsbG93cyB5b3UgdG8gc2F2ZSBhbmQgZGlzdHJpYnV0ZSBkYXRhLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3N0b3JlfVxuICovXG5jb25zdCBzdG9yZSA9IG5ldyBQcm94eSh7fSwge1xuICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgIGlmIChrZXkgPT0gXCJfX3RhcmdldFwiKSB7XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgfSxcbiAgc2V0OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgaWYodXRpbHMuY29tcGFyZSh0YXJnZXRba2V5XSwgdmFsdWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgdmFsdWUgPSB1dGlscy5jb3B5KHZhbHVlKTtcbiAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgIEFraWxpLnJvb3QgJiYgQWtpbGkucm9vdC5fX3N0b3JlVHJpZ2dlckJ5TmFtZShrZXksIHZhbHVlKTsgICAgXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICBBa2lsaS5yb290ICYmIEFraWxpLnJvb3QuX19zdG9yZVRyaWdnZXJCeU5hbWUoa2V5LCB1bmRlZmluZWQpO1xuICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2aWNlcy9zdG9yZS5qcyIsImltcG9ydCBBa2lsaSBmcm9tICcuL2FraWxpLmpzJztcblxuLyoqXG4gKiBHbG9iYWxzIHRvIHVzZSB0aGUgY3VzdG9tIHZhcmlhYmxyZXMgaW4gc2NvcGUgZXhwcmVzc2lvbnNcbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9zY29wZSNkb2NzX2dsb2JhbHN9XG4gKi9cbmNvbnN0IGdsb2JhbHMgPSBuZXcgUHJveHkoe30sIHtcbiAgc2V0OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7ICAgIFxuICAgIHRhcmdldFtrZXldID0gQWtpbGkud3JhcCh2YWx1ZSwgeyB0YWc6IGBnbG9iYWxzLiR7a2V5fWAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICBBa2lsaS5yZW1vdmVUYWcoYGdsb2JhbHMuJHtrZXl9YCk7XG4gICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFscztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2xvYmFscy5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi9zZXJ2aWNlcy9yZXF1ZXN0LmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIHJvdXRlciB0ZW1wbGF0ZXMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3RlbXBsYXRlc31cbiAqIFxuICogQHRhZyByb3V0ZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdyb3V0ZScsIHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1RyYW5zaXRpb259IHRyYW5zaXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBzZXRUcmFuc2l0aW9uKHRyYW5zaXRpb24pIHtcbiAgICBsZXQgc3RhdGUgPSB0cmFuc2l0aW9uLnBhdGguc3RhdGU7XG5cbiAgICBjb25zdCBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24gPSAocGF0aCkgPT4ge1xuICAgICAgaWYgKHBhdGgucGFyZW50KSB7XG4gICAgICAgIGlmIChwYXRoLnBhcmVudC5jb21wb25lbnQpIHtcbiAgICAgICAgICByZXR1cm4gcGF0aC5wYXJlbnQuY29tcG9uZW50Ll9fc2NvcGUuX190cmFuc2l0aW9uLnBhdGg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uKHBhdGgucGFyZW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcGlsZSA9IChodG1sKSA9PiB7IFxuICAgICAgdGhpcy5lbXB0eSgpOyAgXG4gICAgICBsZXQgbmFtZSA9ICdjb21wb25lbnQnO1xuXG4gICAgICBpZihzdGF0ZS5jb21wb25lbnQpIHtcbiAgICAgICAgbGV0IGV4aXN0cyA9IGZhbHNlO1xuICAgIFxuICAgICAgICBmb3IobGV0IGtleSBpbiBBa2lsaS5fX2NvbXBvbmVudHMpIHtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBBa2lsaS5fX2NvbXBvbmVudHNba2V5XTtcbiAgICBcbiAgICAgICAgICBpZihjb21wb25lbnQgPT09IHN0YXRlLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgbmFtZSA9IGtleTsgICAgICAgICAgICBcbiAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaWYoIWV4aXN0cykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIFwiJHtzdGF0ZS5uYW1lfVwiIGhhcyBubyBkZWZpbmVkIGNvbXBvbmVudGApXG4gICAgICAgIH0gXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gYDwkeyBuYW1lIH0+JHsgaHRtbCB9PC8keyBuYW1lIH0+YDtcbiAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX19zY29wZS5fX3RyYW5zaXRpb24gPSB7ICBcbiAgICAgIHBhcmVudDogZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uKHRyYW5zaXRpb24ucGF0aCksICAgXG4gICAgICBzdGF0ZTogdHJhbnNpdGlvbi5wYXRoLnN0YXRlLFxuICAgICAgZGF0YTogdHJhbnNpdGlvbi5wYXRoLmRhdGEsXG4gICAgICB1cmw6IHRyYW5zaXRpb24ucGF0aC51cmwsXG4gICAgICBwYXJhbXM6IHRyYW5zaXRpb24ucGF0aC5wYXJhbXMsXG4gICAgICBxdWVyeTogdHJhbnNpdGlvbi5wYXRoLnF1ZXJ5LFxuICAgICAgaGFzaDogdHJhbnNpdGlvbi5wYXRoLmhhc2hcbiAgICB9O1xuXG4gICAgaWYgKCF0cmFuc2l0aW9uLnBhdGgubG9hZGVkKSB7XG4gICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogeyBjaGVja0NoYW5nZXM6IHRydWUgfSB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICBpZiAoc3RhdGUudGVtcGxhdGUpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnRlbXBsYXRlO1xuICAgICAgfVxuICBcbiAgICAgIGlmIChzdGF0ZS50ZW1wbGF0ZVVybCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdC5nZXQoc3RhdGUudGVtcGxhdGVVcmwpLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcbiAgICAgIH1cbiAgICB9KS50aGVuKGh0bWwgPT4gY29tcGlsZShodG1sKSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9yb3V0ZS5qcyIsImltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9yZXF1ZXN0LmpzJztcbmltcG9ydCBSb3V0ZSBmcm9tICcuLi9jb21wb25lbnRzL3JvdXRlLmpzJztcblxuLyoqXG4gKiBUcmFuc2l0aW9uIGNsYXNzLlxuICogQW4gaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBjb25zaXN0cyB0aGUgbGFzdCBhY3R1YWwgcm91dGVyIHRyYW5zaXRpb24gaW5mb3JtYXRpb24uXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3RyYW5zaXRpb259XG4gKi9cbmV4cG9ydCBjbGFzcyBUcmFuc2l0aW9uIHtcbiAgY29uc3RydWN0b3IocHJldmlvdXMgPSBudWxsKSB7ICAgIFxuICAgIHRoaXMucHJldmlvdXMgPSBwcmV2aW91cztcbiAgICB0aGlzLnBhdGggPSBudWxsO1xuICAgIHRoaXMucm91dGVzID0gW107XG4gICAgdGhpcy5zdGF0ZXMgPSB7fTtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogUmVkaXJlY3QgdG8gYW5vdGhlciBzdGF0ZVxuICAgKiBcbiAgICogQHNlZSByb3V0ZXIuc3RhdGVcbiAgICovXG4gIHJlZGlyZWN0KCkge1xuICAgIHRoaXMuY2FuY2VsKCk7ICAgXG4gICAgcmV0dXJuIHJvdXRlci5zdGF0ZS5hcHBseShyb3V0ZXIsIGFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogUmVsb2FkIHRoZSBjdXJyZW50IHN0YXRlXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc11cbiAgICogQHBhcmFtIHtvYmplY3R9IFtxdWVyeV1cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoXVxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqL1xuICByZWxvYWQocGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSB1bmRlZmluZWQsIG9wdGlvbnMgPSB7fSkge1xuICAgIHBhcmFtcyA9IHsgLi4udGhpcy5wYXRoLnBhcmFtcywgLi4ucGFyYW1zIH07XG4gICAgcXVlcnkgPSB7IC4uLnRoaXMucGF0aC5xdWVyeSwgLi4ucXVlcnkgfTtcbiAgICBoYXNoID0gaGFzaCA9PT0gdW5kZWZpbmVkPyB0aGlzLnBhdGguaGFzaDogaGFzaDtcbiAgICByZXR1cm4gdGhpcy5yZWRpcmVjdCh0aGlzLnBhdGguc3RhdGUubmFtZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBjdXJyZW50IHBhdGhcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXRoIFxuICAgKi9cbiAgc2V0UGF0aChwYXRoKSB7XG4gICAgcGF0aC5wYXJlbnQgPSB0aGlzLnBhdGggfHwgbnVsbDtcbiAgICB0aGlzLnBhdGggPSB7IHBhcmFtczoge30sIHF1ZXJ5OiB7fSwgLi4ucGF0aCB9O1xuICAgIHRoaXMucm91dGVzLnB1c2godGhpcy5wYXRoKTtcbiAgICB0aGlzLnN0YXRlc1t0aGlzLnBhdGguc3RhdGUubmFtZV0gPSB0aGlzLnBhdGg7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgcm91dGUgYnkgdGhlIHN0YXRlXG4gICAqICBcbiAgICogQHBhcmFtIHsqfSBzdGF0ZSBcbiAgICovXG4gIGdldFJvdXRlKHN0YXRlKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnJvdXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByb3V0ZSA9IHRoaXMucm91dGVzW2ldO1xuXG4gICAgICBpZiAocm91dGUuc3RhdGUgPT09IHN0YXRlKSB7XG4gICAgICAgIHJldHVybiByb3V0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBpdCBoYXMgdGhlIHN0YXRlXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgXG4gICAqL1xuICBoYXNTdGF0ZShzdGF0ZSkge1xuICAgIHJldHVybiAhIXRoaXMuc3RhdGVzW3N0YXRlLm5hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSByb3V0ZSBpcyBjaGFuZ2VkXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gcm91dGVcbiAgICovXG4gIGlzUm91dGVDaGFuZ2VkKHJvdXRlKSB7XG4gICAgaWYoIXRoaXMucHJldmlvdXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXRlID0gcm91dGUuc3RhdGU7XG5cbiAgICBpZighdGhpcy5wcmV2aW91cy5oYXNTdGF0ZShzdGF0ZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmFtS2V5cyA9IFtdO1xuICAgIHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2Uocm91dGVyLl9fcGFyYW1SZWdleCwgKG0sIGYsIHYpID0+IHBhcmFtS2V5cy5wdXNoKHYpKTtcbiAgICBcbiAgICBmb3IobGV0IGtleSBpbiBzdGF0ZS5wYXJhbXMpIHtcbiAgICAgIGlmKHBhcmFtS2V5cy5pbmRleE9mKGtleSkgPT0gLTEpIHtcbiAgICAgICAgcGFyYW1LZXlzLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBxdWVyeUtleXMgPSBPYmplY3Qua2V5cyhzdGF0ZS5xdWVyeSk7XG4gICAgY29uc3Qgd2F0Y2hIYXNoID0gc3RhdGUuaGFzaCAhPT0gdW5kZWZpbmVkOyAgICBcbiAgICBjb25zdCBwcmV2Um91dGUgPSB0aGlzLnByZXZpb3VzLmdldFJvdXRlKHN0YXRlKTsgXG5cbiAgICBjb25zdCBwcmV2ID0geyBcbiAgICAgIHBhcmFtczogdXRpbHMuaW5jbHVkZUtleXMocHJldlJvdXRlLnBhcmFtcywgcGFyYW1LZXlzKSwgXG4gICAgICBxdWVyeTogdXRpbHMuaW5jbHVkZUtleXMocHJldlJvdXRlLnF1ZXJ5LCBxdWVyeUtleXMpXG4gICAgfTtcblxuICAgIGNvbnN0IGN1cnJlbnQgPSB7XG4gICAgICBwYXJhbXM6IHV0aWxzLmluY2x1ZGVLZXlzKHJvdXRlLnBhcmFtcywgcGFyYW1LZXlzKSxcbiAgICAgIHF1ZXJ5OiB1dGlscy5pbmNsdWRlS2V5cyhyb3V0ZS5xdWVyeSwgcXVlcnlLZXlzKVxuICAgIH1cblxuICAgIGlmKHdhdGNoSGFzaCkge1xuICAgICAgcHJldi5oYXNoID0gcHJldlJvdXRlLmhhc2g7XG4gICAgICBjdXJyZW50Lmhhc2ggPSByb3V0ZS5oYXNoO1xuICAgIH1cblxuICAgIHJldHVybiAhdXRpbHMuY29tcGFyZShwcmV2LCBjdXJyZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW5jZWwgdGhlIGN1cnJlbnQgdHJhbnNpdGlvblxuICAgKi9cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogQWtpbGkgcm91dGVyXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZ31cbiAqL1xuY29uc3Qgcm91dGVyID0ge307XG5cbi8qKlxuICogU2V0IHJvdXRlcidzIGRlZmF1bHQgdmFyaWFibGVzXG4gKi9cbnJvdXRlci5zZXREZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5iYXNlVXJsID0gXCIvXCI7XG4gIHRoaXMuc3RhdGVzID0gW107XG4gIHRoaXMuaGFzaE1vZGUgPSB0cnVlO1xuICB0aGlzLl9fcmVkaXJlY3RzID0gMDtcbiAgdGhpcy5fX2luaXQgPSBmYWxzZTtcbiAgdGhpcy5fX29wdGlvbnMgPSB7fTtcbiAgdGhpcy5fX3BhcmFtUmVnZXggPSAvKFxcLz86KFtcXHdcXGQtXSspKS9nO1xuICB0aGlzLl9fcm91dGVTZWxlY3RvciA9IGMgPT4gYyBpbnN0YW5jZW9mIFJvdXRlO1xufVxuXG4vKipcbiAqIEFkZCBuZXcgc3RhdGUgdG8gdGhlIHJvdXRlclxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc3RhdGUgbmFtZS4gVG8gc2V0IHBhcmVudHMgeW91IGNhbiB1c2UgZG90LCBlLmcuICdhcHAuYXJ0aWNsZS5lZGl0J1xuICogQHBhcmFtIHtzdHJpbmd9IHBhdHRlcm4gLSB1cmwgcGF0dGVybiBsaWtlICdhcHAvYXJ0aWNsZS86aWQnXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7cm91dGVyfVxuICovXG5yb3V0ZXIuYWRkID0gZnVuY3Rpb24gKG5hbWUsIHBhdHRlcm4sIG9wdGlvbnMgPSB7fSkge1xuICBpZih0eXBlb2YgbmFtZSA9PSAnb2JqZWN0Jykge1xuICAgIG9wdGlvbnMgPSBuYW1lO1xuICAgIHBhdHRlcm4gPSBvcHRpb25zLnBhdHRlcm47XG4gICAgbmFtZSA9IG9wdGlvbnMuc3RhdGU7XG4gICAgZGVsZXRlIG9wdGlvbnMucGF0dGVybjtcbiAgICBkZWxldGUgb3B0aW9ucy5zdGF0ZTtcbiAgfVxuXG4gIGlmKCFuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgbXVzdCBoYXZlIGEgbmFtZWApO1xuICB9XG5cbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgdGVtcGxhdGU6ICcnLFxuICAgIHRlbXBsYXRlVXJsOiAnJyxcbiAgICBhYnN0cmFjdDogZmFsc2UsXG4gICAgY29tcG9uZW50OiBudWxsLFxuICAgIHBhcmFtczoge30sXG4gICAgcXVlcnk6IHt9LFxuICAgIGhhbmRsZXI6ICgpID0+IHt9LFxuICB9O1xuXG4gIGlmKEFraWxpLm9wdGlvbnMuZGVidWcgJiYgb3B0aW9ucy5jb21wb25lbnQgJiYgKG9wdGlvbnMudGVtcGxhdGUgfHwgb3B0aW9ucy50ZW1wbGF0ZVVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihgUm91dGVyIHN0YXRlIFwiJHtuYW1lfVwiIG11c3Qgb25seSBoYXZlIGEgY29tcG9uZW50IG9yIHRlbXBsYXRlIG9wdGlvbmApO1xuICB9IFxuXG4gIGlmICghb3B0aW9ucy50ZW1wbGF0ZSAmJiAhb3B0aW9ucy50ZW1wbGF0ZVVybCAmJiAhb3B0aW9ucy5jb21wb25lbnQpIHtcbiAgICBvcHRpb25zLmFic3RyYWN0ID0gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0aGlzLmhhcyhuYW1lKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIFwiJHtuYW1lfVwiIGlzIGFscmVhZHkgZXhpc3RzYClcbiAgfVxuXG4gIHRoaXMuc2V0U3RhdGUobmFtZSwgcGF0dGVybiwgey4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zfSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgc3RhdGUgZnJvbSB0aGUgbGlzdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnJvdXRlci5yZW1vdmUgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKHRoaXMuc3RhdGVzW2ldLm5hbWUgPT0gbmFtZSkge1xuICAgICAgdGhpcy5zdGF0ZXMuc3BsaWNlKGksIDEpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIENoZWNrIHN0YXRlIGV4aXN0c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAodGhpcy5zdGF0ZXNbaV0ubmFtZSA9PSBuYW1lKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIENoYW5nZSB0aGUgc3RhdGUgdG8gdGhlIHBhc3NlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIC0gcGFyYW1zIGZvciBzdGF0ZSB7aWQ6IDF9ID0+ICcvYXBwLzppZCcgPT4gJy9hcHAvMSdcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcXVlcnldIC0gcXVlcnkge3g6IDF9ID0+ICcvYXBwLz94PTEnXG4gKiBAcGFyYW0ge3N0cmluZ30gW2hhc2hdXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKi9cbnJvdXRlci5zdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSwgcGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSB1bmRlZmluZWQsIG9wdGlvbnMgPSB7fSkge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgXG4gIGlmICghc3RhdGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCByb3V0ZSBzdGF0ZSB3aXRoIG5hbWUgJHtzdGF0ZX1gKTtcbiAgfVxuXG4gICh7IHBhcmFtcywgcXVlcnksIGhhc2ggfSA9IHRoaXMucHJlcGFyZVN0YXRlQXJncyhzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCkpO1xuICBsZXQgdXJsID0gdGhpcy5jcmVhdGVTdGF0ZVVybChzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgZmFsc2UpOyAgXG4gIHRoaXMuX19vcHRpb25zID0gb3B0aW9ucztcbiAgdGhpcy5fX29wdGlvbnMuaGFzaElzTnVsbCA9IGhhc2ggPT09IG51bGw7ICBcbiAgdGhpcy5fX29wdGlvbnMubWFudWFsID0gdHJ1ZTtcbiAgdGhpcy5pc29sYXRlKCgpID0+IHRoaXMuc2V0VXJsKHVybCkpO1xuICByZXR1cm4gdGhpcy5jaGFuZ2VTdGF0ZSgpO1xufTtcblxuLyoqXG4gKiBHbyBiYWNrXG4gKi9cbnJvdXRlci5iYWNrID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeS5iYWNrLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBHbyB0byBhbnkgd2F5XG4gKi9cbnJvdXRlci5nbyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkuZ28uYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIEdvIGZvcndhcmRcbiAqL1xucm91dGVyLmZvcndhcmQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LmZvcndhcmQuYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIENoYW5nZSBzdGF0ZSBieSB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKi9cbnJvdXRlci5sb2NhdGlvbiA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMgPSB7IHJlbG9hZDogZmFsc2UgfSkge1xuICB0aGlzLl9fb3B0aW9ucyA9IG9wdGlvbnM7XG4gIHRoaXMuX19vcHRpb25zLm1hbnVhbCA9IHRydWU7XG5cbiAgdGhpcy5pc29sYXRlKCgpID0+IHtcbiAgICBpZiAodGhpcy5oYXNoTW9kZSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB1cmw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsICcnLCB1cmwpO1xuICAgIH1cbiAgfSlcblxuICByZXR1cm4gdGhpcy5jaGFuZ2VTdGF0ZSgpO1xufTtcblxuLyoqXG4gKiBSb3V0ZXIgaW5pdGlhbGl6YXRpb24uIFNob3VsZCBiZSBjYWxsZWQgYmVmb3JlIEFraWxpLmluaXQoKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbZGVmYXVsdFVybF1cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2hhc2hNb2RlPXRydWVdXG4gKi9cbnJvdXRlci5pbml0ID0gZnVuY3Rpb24gKGRlZmF1bHRVcmwgPSAnJywgaGFzaE1vZGUgPSB0cnVlKSB7XG4gIGxldCBvbGRQdXNoU3RhdGUgPSB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGU7XG5cbiAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IHJlcyA9IG9sZFB1c2hTdGF0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgcm91dGVyLmNoYW5nZVN0YXRlKCkuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIHRoaXMuX19vblN0YXRlQ2hhbmdlSGFuZGxlciA9ICgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIHRoaXMuY2hhbmdlU3RhdGUoKS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICB9O1xuXG4gIHRoaXMuZGVmYXVsdFVybCA9IGRlZmF1bHRVcmw7XG4gIHRoaXMuaGFzaE1vZGUgPSBoYXNoTW9kZTtcblxuICB0aGlzLnN0YXRlcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgYSA9IGEubmFtZS5zcGxpdCgnLicpLmxlbmd0aDtcbiAgICBiID0gYi5uYW1lLnNwbGl0KCcuJykubGVuZ3RoO1xuICAgIHJldHVybiBhIC0gYjtcbiAgfSk7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB0aGlzLmluaXRTdGF0ZSh0aGlzLnN0YXRlc1tpXSk7XG4gIH1cblxuICBpZiAoIXRoaXMuc3RhdGVzLmxlbmd0aCAmJiBBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oYFlvdSBkaWRuJ3QgYWRkIGFueSByb3V0ZXMgdG8gdGhlIHJvdXRlcmApO1xuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5fX29uU3RhdGVDaGFuZ2VIYW5kbGVyKTtcbiAgdGhpcy5fX2luaXQgPSB0cnVlO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBzdGF0ZSBcbiAqIFxuICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIFxuICovXG5yb3V0ZXIuaW5pdFN0YXRlID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gIGxldCBwYXJlbnRzID0gW107XG4gIHN0YXRlLmNoaWxkcmVuID0gW107XG4gIHBhcmVudHMgPSBzdGF0ZS5uYW1lLnNwbGl0KCcuJyk7XG4gIHBhcmVudHMucG9wKCk7XG4gIHN0YXRlLmxldmVsID0gc3RhdGUuYWJzdHJhY3Q/IG51bGw6IHBhcmVudHMubGVuZ3RoO1xuXG4gIGlmIChwYXJlbnRzLmxlbmd0aCkge1xuICAgIGxldCBwYXJlbnROYW1lID0gcGFyZW50cy5qb2luKCcuJyk7XG4gICAgbGV0IHBhcmVudCA9IHRoaXMuZ2V0U3RhdGUocGFyZW50TmFtZSk7XG5cbiAgICBpZiAoIXBhcmVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgcGFyZW50IHJvdXRlIHN0YXRlIFwiJHtwYXJlbnROYW1lfVwiIGZvciBcIiR7c3RhdGUubmFtZX1cImApXG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmxldmVsICE9PSBudWxsICYmIHBhcmVudC5hYnN0cmFjdCkge1xuICAgICAgc3RhdGUubGV2ZWwtLTtcbiAgICB9XG5cbiAgICBzdGF0ZS5mdWxsUGF0dGVybiA9IHRoaXMuc3BsaXRTbGFzaGVzKHBhcmVudC5mdWxsUGF0dGVybiArICcvJyArIHN0YXRlLnBhdHRlcm4pO1xuICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKHN0YXRlKTtcbiAgfVxuICBlbHNlIHtcbiAgICBzdGF0ZS5mdWxsUGF0dGVybiA9IHN0YXRlLnBhdHRlcm47XG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgc3RhdGUgYnkgbmFtZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gKi9cbnJvdXRlci5nZXRTdGF0ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZXNbaV07XG5cbiAgICBpZiAoc3RhdGUubmFtZSA9PSBuYW1lKSB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIFNldCBzdGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVyblxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqL1xucm91dGVyLnNldFN0YXRlID0gZnVuY3Rpb24gKG5hbWUsIHBhdHRlcm4sIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgc3RhdGUgPSB7Li4ub3B0aW9ucywgbmFtZSwgcGF0dGVybn07XG4gIHRoaXMuc3RhdGVzLnB1c2goc3RhdGUpO1xuICB0aGlzLl9faW5pdCAmJiB0aGlzLmluaXRTdGF0ZShzdGF0ZSk7XG4gIHJldHVybiBzdGF0ZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIHN0YXRlIGJ5IG5hbWVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5yb3V0ZXIucmVtb3ZlU3RhdGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLm5hbWUgPT0gbmFtZSkge1xuICAgICAgdGhpcy5zdGF0ZXMuc3BsaWNlKGksIDEpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFNldCB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKi9cbnJvdXRlci5zZXRVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHRoaXMuaGFzaE1vZGU/IHRoaXMuc2V0SGFzaFVybCh1cmwpOiB0aGlzLnNldEhpc3RvcnlVcmwodXJsKTtcbn07XG5cbi8qKlxuICogU2V0IHVybCB1c2luZyBoaXN0b3J5XG4gKlxuICogQHBhcmFtIHVybFxuICovXG5yb3V0ZXIuc2V0SGlzdG9yeVVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsICcnLCB1cmwpO1xufTtcblxuLyoqXG4gKiBTZXQgdXJsIHVzaW5nIGhhc2hcbiAqXG4gKiBAcGFyYW0gdXJsXG4gKi9cbnJvdXRlci5zZXRIYXNoVXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjJyArICh1cmwgfHwgJy8nKTtcbn07XG5cbi8qKlxuICogR2V0IHVybFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmhhc2hNb2RlID8gdGhpcy5nZXRIYXNoVXJsKCkgOiB0aGlzLmdldEhpc3RvcnlVcmwoKTtcbn07XG5cbi8qKlxuICogR2V0IHVybCB1c2luZyBoaXN0b3J5XG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLmdldEhpc3RvcnlVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoICsgd2luZG93LmxvY2F0aW9uLmhhc2g7XG59O1xuXG4vKipcbiAqIEdldCB1cmwgdXNpbmcgaGFzaFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRIYXNoVXJsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgvXiMvLCAnJyk7XG59O1xuXG4vKipcbiAqIEdldCBxdWVyeSBwYXJhbXNcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0VXJsUXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuaGFzaE1vZGUgPyB0aGlzLmdldEhhc2hVcmxRdWVyeSgpIDogdGhpcy5nZXRIaXN0b3J5VXJsUXVlcnkoKTtcbn07XG5cbi8qKlxuICogR2V0IHF1ZXJ5IHBhcmFtcyB1c2luZyBoaXN0b3J5XG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldEhpc3RvcnlVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcmVxdWVzdC5wYXJhbXNGcm9tUXVlcnkod2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpKTtcbn07XG5cbi8qKlxuICogR2V0IHF1ZXJ5IHBhcmFtcyB1c2luZyBoYXNoXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldEhhc2hVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcmVxdWVzdC5wYXJhbXNGcm9tUXVlcnkoKHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCc/JylbMV0gfHwgJycpKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIHVybCBieSBkYXRhXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdXG4gKiBAcGFyYW0ge29iamVjdH0gW3F1ZXJ5XVxuICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoXVxuICogQHBhcmFtIHtib29sZWFufSBbcHJlcGFyZT10cnVlXVxuICovXG5yb3V0ZXIuY3JlYXRlU3RhdGVVcmwgPSBmdW5jdGlvbiAoc3RhdGUsIHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gdW5kZWZpbmVkLCBwcmVwYXJlID0gdHJ1ZSkge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgXG4gIGlmKHByZXBhcmUpIHtcbiAgICAoeyBwYXJhbXMsIHF1ZXJ5LCBoYXNoIH0gPSB0aGlzLnByZXBhcmVTdGF0ZUFyZ3Moc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gpKTtcbiAgfVxuXG4gIGxldCB1cmwgPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAobSwgZiwgdikgPT4gJy8nICsgKHBhcmFtc1t2XSB8fCAnJykpO1xuICB1cmwgPSB1cmwucmVwbGFjZSgvXlxcXi8sICcnKTtcbiAgdXJsID0gdGhpcy5zcGxpdFNsYXNoZXModXJsKTtcblxuICBpZiAoT2JqZWN0LmtleXMocXVlcnkpLmxlbmd0aCkge1xuICAgIHVybCArPSAnPycgKyByZXF1ZXN0LnBhcmFtc1RvUXVlcnkocXVlcnkpO1xuICB9XG5cbiAgaWYgKCF0aGlzLmhhc2hNb2RlICYmIGhhc2gpIHtcbiAgICB1cmwgKz0gJyMnICsgaGFzaC5yZXBsYWNlKCcjJywgJycpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG5cbi8qKlxuICogUHJlcGFyZSB0aGUgc3RhdGUgYXJndW1lbnRzXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXVxuICogQHBhcmFtIHtvYmplY3R9IFtxdWVyeV1cbiAqIEBwYXJhbSB7c3RyaW5nfSBbaGFzaF1cbiAqL1xucm91dGVyLnByZXBhcmVTdGF0ZUFyZ3MgPSBmdW5jdGlvbiAoc3RhdGUsIHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gdW5kZWZpbmVkKSB7XG4gIGxldCBhcmdzID0geyBwYXJhbXMsIHF1ZXJ5LCBoYXNoIH07XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IDk7IGkrKykge1xuICAgIGNvbnN0IHBhcmFtc1RlbXAgPSB0aGlzLnByZXBhcmVTdGF0ZVBhcmFtcyhzdGF0ZSwgcGFyYW1zLCBhcmdzKTtcbiAgICBjb25zdCBxdWVyeVRlbXAgPSB0aGlzLnByZXBhcmVTdGF0ZVF1ZXJ5KHN0YXRlLCBxdWVyeSwgYXJncyk7XG4gICAgY29uc3QgaGFzaFRlbXAgPSB0aGlzLnByZXBhcmVTdGF0ZUhhc2goc3RhdGUsIGhhc2gsIGFyZ3MpO1xuICAgIGFyZ3MgPSB7IHBhcmFtczogcGFyYW1zVGVtcCwgcXVlcnk6IHF1ZXJ5VGVtcCwgaGFzaDogaGFzaFRlbXAgfTtcbiAgfVxuICBcbiAgcmV0dXJuIGFyZ3M7XG59XG5cbi8qKlxuICogUHJlcGFyZSB0aGUgc3RhdGUgcGFyYW1zXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBbYXJnc11cbiAqL1xucm91dGVyLnByZXBhcmVTdGF0ZVBhcmFtcyA9IGZ1bmN0aW9uKHN0YXRlLCBwYXJhbXMsIGFyZ3MpIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG4gIGNvbnN0IGxpc3QgPSBbcGFyYW1zXTtcbiAgY29uc3Qgc3RhdGVzID0gc3RhdGUubmFtZS5zcGxpdCgnLicpO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBzdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGN1cnJlbnQgPSBzdGF0ZXMuc2xpY2UoMCwgc3RhdGVzLmxlbmd0aCAtIGkpLmpvaW4oJy4nKTtcbiAgICBsaXN0LnB1c2godGhpcy5nZXRTdGF0ZShjdXJyZW50KS5wYXJhbXMpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuY3JlYXRlU3RhdGVBcmdzKGxpc3QsIGFyZ3MpO1xufVxuXG4vKipcbiAqIFByZXBhcmUgdGhlIHN0YXRlIHF1ZXJ5XG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBxdWVyeVxuICogQHBhcmFtIHtvYmplY3R9IFthcmdzXVxuICovXG5yb3V0ZXIucHJlcGFyZVN0YXRlUXVlcnkgPSBmdW5jdGlvbihzdGF0ZSwgcXVlcnksIGFyZ3MpIHsgIFxuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgY29uc3QgbGlzdCA9IFtxdWVyeV07XG4gIGNvbnN0IHN0YXRlcyA9IHN0YXRlLm5hbWUuc3BsaXQoJy4nKTsgIFxuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBzdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgY29uc3QgY3VycmVudCA9IHN0YXRlcy5zbGljZSgwLCBzdGF0ZXMubGVuZ3RoIC0gaSkuam9pbignLicpO1xuICAgIGxpc3QucHVzaCh0aGlzLmdldFN0YXRlKGN1cnJlbnQpLnF1ZXJ5KTtcbiAgfVxuIFxuICByZXR1cm4gdGhpcy5jcmVhdGVTdGF0ZUFyZ3MobGlzdCwgYXJncyk7XG59XG5cbi8qKlxuICogTWVyZ2UgbGlzdCBpdGVtcyBhcyB0cmFuc2l0aW9uIG9iamVjdHNcbiAqIFxuICogQHBhcmFtIHtvYmplY3RbXX0gbGlzdFxuICogQHBhcmFtIHtvYmplY3R9IFthcmdzXVxuICovXG5yb3V0ZXIuY3JlYXRlU3RhdGVBcmdzID0gZnVuY3Rpb24gKGxpc3QsIGFyZ3MgPSB7IHBhcmFtczoge30sIHF1ZXJ5OiB7fSB9KSB7XG4gIGNvbnN0IGFsbCA9IHt9O1xuICBjb25zdCBleGNsdWRlZCA9IHt9O1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBsaXN0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvbnN0IG9iaiA9IGxpc3RbaV07XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gXG4gICAgZm9yKGxldCBrID0gMCwgYyA9IGtleXMubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICBsZXQga2V5ID0ga2V5c1trXTtcbiAgICAgIGxldCB2YWwgPSBvYmpba2V5XTtcblxuICAgICAgaWYoZXhjbHVkZWRba2V5XSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFsID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nPyB2YWwoYXJncyk6IHZhbDtcblxuICAgICAgaWYodmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmKHZhbCA9PT0gbnVsbCkge1xuICAgICAgICBkZWxldGUgYWxsW2tleV07XG4gICAgICAgIGV4Y2x1ZGVkW2tleV0gPSB0cnVlO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgYWxsW2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFsbDsgXG59XG5cbi8qKlxuICogUHJlcGFyZSB0aGUgc3RhdGUgaGFzaFxuICogXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gaGFzaFxuICogQHBhcmFtIHtvYmplY3R9IFthcmdzXVxuICovXG5yb3V0ZXIucHJlcGFyZVN0YXRlSGFzaCA9IGZ1bmN0aW9uKHN0YXRlLCBoYXNoLCBhcmdzKSB7XG4gIGlmKGhhc2ggPT09IG51bGwpIHtcbiAgICByZXR1cm4gaGFzaDtcbiAgfVxuXG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBjb25zdCBzdGF0ZXMgPSBzdGF0ZS5uYW1lLnNwbGl0KCcuJyk7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IHN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjb25zdCBjdXJyZW50ID0gc3RhdGVzLnNsaWNlKDAsIHN0YXRlcy5sZW5ndGggLSBpKS5qb2luKCcuJyk7XG4gICAgbGV0IHZhbCA9IHRoaXMuZ2V0U3RhdGUoY3VycmVudCkuaGFzaDtcbiAgICB2YWwgPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic/IHZhbChhcmdzKTogdmFsO1xuXG4gICAgaWYodmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmKHZhbCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaGFzaCA9IHZhbDtcbiAgfVxuXG4gIHJldHVybiBoYXNoO1xufVxuXG4vKipcbiAqIFJlbW92ZSBhbGwgdW5uZWNlc3Nhcnkgc2xhc2hlcyBmcm9tIGFuIHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5zcGxpdFNsYXNoZXMgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHJldHVybiB1cmwucmVwbGFjZSgvWy9dKy9nLCAnLycpO1xufTtcblxuLyoqXG4gKiBHZXQgc3RhdGUgdXJsIGNvbnRlbnRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0UGF0dGVybkNvbnRlbnQgPSBmdW5jdGlvbiAoc3RhdGUsIHVybCkge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgbGV0IGtleXMgPSBbXTtcbiAgbGV0IHBhcmFtcyA9IHt9O1xuXG4gIHVybCA9IHVybC5zcGxpdCgnPycpWzBdO1xuICB1cmwgPSB1cmwuc3BsaXQoJyMnKVswXTtcblxuICBsZXQgdXJsUGF0dGVybiA9IHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2UodGhpcy5fX3BhcmFtUmVnZXgsIChtLCBmLCB2KSA9PiB7XG4gICAga2V5cy5wdXNoKHYpO1xuICAgIHJldHVybiAnLz8oW14vXSopJztcbiAgfSk7XG5cbiAgdXJsUGF0dGVybiA9IHVybFBhdHRlcm4ucmVwbGFjZSgvKFteXi9dKylbL10rJC8sICckMScpO1xuICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKHVybFBhdHRlcm4sICdnJyk7XG4gIGxldCBpc0luY2x1ZGVkID0gdXJsLm1hdGNoKHJlZ2V4KTtcbiAgXG4gIGlmICghaXNJbmNsdWRlZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdXJsLnJlcGxhY2UocmVnZXgsIChtLCAuLi5hcmdzKSA9PiB7IFxuICAgIGFyZ3MgPSBhcmdzLnNsaWNlKDAsIGFyZ3MubGVuZ3RoIC0gMik7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gYXJncy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCB2ID0gYXJnc1tpXTtcbiAgICAgIHYgJiYgKHBhcmFtc1trZXlzW2ldXSA9IHYpO1xuICAgIH0gIFxuICB9KTtcblxuICByZXR1cm4geyBwYXJhbXMgfTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIHN0YXRlIGlzIGFjdGl2ZSBub3dcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVzXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmlzQWN0aXZlU3RhdGUgPSBmdW5jdGlvbihzdGF0ZSwgaW5jbHVkZXMgPSBmYWxzZSkge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgbGV0IHVybCA9IHRoaXMuc3BsaXRTbGFzaGVzKCcvJyArIHRoaXMuZ2V0VXJsKCkuc3BsaXQoJz8nKVswXSArICcvJyk7XG4gIGxldCB1cmxQYXR0ZXJuID0gc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZSh0aGlzLl9fcGFyYW1SZWdleCwgJy8/KFteL10qKScpO1xuICB1cmxQYXR0ZXJuID0gdXJsUGF0dGVybi5yZXBsYWNlKC9eXFxeLywgJycpLnJlcGxhY2UoL1xcJCQvLCAnJyk7XG4gIGxldCBzdHIgPSBpbmNsdWRlcz8gdXJsUGF0dGVybjogdGhpcy5zcGxpdFNsYXNoZXMoJ14vJyArIHVybFBhdHRlcm4gKyAnLyQnKTtcbiAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChzdHIpOyAgXG4gIHJldHVybiByZWdleC50ZXN0KHVybCk7XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSBjdXJyZW50IHVybCBpbmNsdWRlcyBhIHN0YXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnJvdXRlci5pbkFjdGl2ZVN0YXRlID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgcmV0dXJuIHJvdXRlci5pc0FjdGl2ZVN0YXRlKHN0YXRlLCB0cnVlKTtcbn07XG5cbi8qKlxuICogR2V0IHJvdXRlIGNvbXBvbmVudCBieSBsZXZlbFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZXZlbFxuICovXG5yb3V0ZXIuZ2V0Um91dGUgPSBmdW5jdGlvbiAobGV2ZWwpIHtcbiAgbGV0IGkgPSAwO1xuXG4gIGNvbnN0IGZpbmQgPSAoZWwpID0+IHtcbiAgICBsZXQgcm91dGUgPSBlbC5jaGlsZCh0aGlzLl9fcm91dGVTZWxlY3Rvcik7XG5cbiAgICBpZiAoIXJvdXRlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoaSA9PSBsZXZlbCkge1xuICAgICAgcmV0dXJuIHJvdXRlO1xuICAgIH1cblxuICAgIGkrKztcbiAgICByZXR1cm4gZmluZChyb3V0ZSk7XG4gIH07XG5cbiAgcmV0dXJuIGZpbmQoQWtpbGkucm9vdCk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgZmlyc3QgbWF0Y2hcbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBhcnJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAqL1xucm91dGVyLmdldEFycmF5UGF0dGVybkNvbnRlbnQgPSBmdW5jdGlvbiAoYXJyLCB1cmwpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gYXJyW2ldO1xuICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRQYXR0ZXJuQ29udGVudChzdGF0ZSwgdXJsKTtcblxuICAgIGlmICghY29udGVudCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3RhdGU6IHN0YXRlLCAuLi5jb250ZW50IH07XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogR2V0IHN0YXRlcyBieSBsZXZlbFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZXZlbFxuICogQHJldHVybnMge0FycmF5fVxuICovXG5yb3V0ZXIuZ2V0U3RhdGVzQnlMZXZlbCA9IGZ1bmN0aW9uIChsZXZlbCkge1xuICBsZXQgc3RhdGVzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZS5sZXZlbCA8IGxldmVsKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc3RhdGUubGV2ZWwgPiBsZXZlbCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgc3RhdGVzLnB1c2goc3RhdGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlcztcbn07XG5cbi8qKlxuICogUmVsb2FkIHRoZSBzdGF0ZVxuICogXG4gKiBAc2VlIFRyYW5zaXRpb24ucmVsb2FkXG4gKi9cbnJvdXRlci5yZWxvYWQgPSBmdW5jdGlvbiguLi5hcmdzKSB7XG4gIGlmKCF0aGlzLnRyYW5zaXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBmb3VuZCBhbiBhY3RpdmUgdHJhbnNpdGlvbiB0byByZWxvYWQgdGhlIHN0YXRlJyk7XG4gIH1cblxuICByZXR1cm4gdGhpcy50cmFuc2l0aW9uLnJlbG9hZCguLi5hcmdzKTtcbn1cblxuLyoqXG4gKiBJc29sYXRlIHRoZSBmdW5jdGlvbiB0byBub3QgdHJpZ2dlciByb3V0ZXIgaGFuZGxlcnMgaW5zaWRlXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5yb3V0ZXIuaXNvbGF0ZSA9IGZ1bmN0aW9uIChmbikge1xuICB0aGlzLl9faXNvbGF0ZWQgPSB0cnVlO1xuICBsZXQgcmVzID0gZm4oKTtcbiAgdGhpcy5fX2lzb2xhdGVkID0gZmFsc2U7XG4gIHJldHVybiByZXM7XG59XG5cbi8qKlxuICogQ2hhbmdlIHN0YXRlXG4gKi9cbnJvdXRlci5jaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uICgpIHsgICAgXG4gIGlmKHRoaXMuX19pc29sYXRlZCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuICBcbiAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKCk7XG4gIGxldCBwYXJhbXMgPSB7fTtcbiAgbGV0IHF1ZXJ5ID0gdGhpcy5nZXRVcmxRdWVyeSgpOyAgXG4gIGxldCBoYXNoID0gdGhpcy5oYXNoTW9kZT8gJyc6IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7IFxuICBsZXQgcHJldlRyYW5zaXRpb24gPSByb3V0ZXIudHJhbnNpdGlvbiB8fCBudWxsO1xuICBsZXQgdHJhbnNpdGlvbiA9IHJvdXRlci50cmFuc2l0aW9uID0gbmV3IFRyYW5zaXRpb24ocHJldlRyYW5zaXRpb24pO1xuICBsZXQgbGV2ZWwgPSAwO1xuICAgXG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc3RhdGUtY2hhbmdlJywgeyBkZXRhaWw6IHRyYW5zaXRpb24gfSkpO1xuXG4gIGNvbnN0IG5leHQgPSAoc3RhdGVzLCBvbkVuZCkgPT4geyAgICBcbiAgICBpZiAoIXN0YXRlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBvbkVuZCAmJiBvbkVuZCgpO1xuICAgIH1cblxuICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRBcnJheVBhdHRlcm5Db250ZW50KHN0YXRlcywgdXJsKTtcblxuICAgIGlmICghY29udGVudCkge1xuICAgICAgcmV0dXJuIG9uRW5kICYmIG9uRW5kKCk7XG4gICAgfVxuXG4gICAgbGV0IHN0YXRlID0gY29udGVudC5zdGF0ZTtcbiAgICB0cmFuc2l0aW9uLnNldFBhdGgoeyBzdGF0ZSwgY29tcG9uZW50OiByb3V0ZSwgbG9hZGVkOiB0cnVlIH0pO1xuICAgIGxldCBjdXJyZW50VXJsID0gdGhpcy5jcmVhdGVTdGF0ZVVybChzdGF0ZSwgY29udGVudC5wYXJhbXMsIHF1ZXJ5LCBoYXNoLCBmYWxzZSk7ICBcbiAgICBwYXJhbXMgPSB7IC4uLnBhcmFtcywgLi4uY29udGVudC5wYXJhbXMgfTtcbiAgICBoYXNoID0gaGFzaCB8fCAodGhpcy5fX29wdGlvbnMuaGFzaElzTnVsbD8gbnVsbDogJycpO1xuICAgICh7IHBhcmFtcywgcXVlcnksIGhhc2ggfSA9IHRoaXMucHJlcGFyZVN0YXRlQXJncyhzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCkpOyBcbiAgICBoYXNoID0gaGFzaCB8fCAnJztcbiAgICBsZXQgcmVhbFVybCA9IHRoaXMuY3JlYXRlU3RhdGVVcmwoc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gsIGZhbHNlKTsgXG4gICAgY3VycmVudFVybCAhPSByZWFsVXJsICYmIHRoaXMuaXNvbGF0ZSgoKSA9PiB0aGlzLnNldFVybChyZWFsVXJsKSk7ICAgXG4gICAgbGV0IHJvdXRlID0gc3RhdGUuYWJzdHJhY3Q/IG51bGw6IHRoaXMuZ2V0Um91dGUobGV2ZWwpO1xuXG4gICAgaWYgKCFyb3V0ZSAmJiAhc3RhdGUuYWJzdHJhY3QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvciAoYE5vdCBmb3VuZCByb3V0ZSBjb21wb25lbnQgZm9yIHN0YXRlIFwiJHtzdGF0ZS5uYW1lfVwiYCk7XG4gICAgfSAgICBcblxuICAgIHRyYW5zaXRpb24ucGF0aC5wYXJhbXMgPSBwYXJhbXM7XG4gICAgdHJhbnNpdGlvbi5wYXRoLnF1ZXJ5ID0gcXVlcnk7XG4gICAgdHJhbnNpdGlvbi5wYXRoLmhhc2ggPSBoYXNoO1xuICAgIHRyYW5zaXRpb24ucGF0aC51cmwgPSByZWFsVXJsO1xuICAgICFzdGF0ZS5hYnN0cmFjdCAmJiBsZXZlbCsrO1xuICAgIGxldCBpc0RpZmZlcmVudCA9IHRydWU7XG5cbiAgICBpZihyZWFsVXJsICE9IHVybCkge1xuICAgICAgaXNEaWZmZXJlbnQgPSB0cmFuc2l0aW9uLmlzUm91dGVDaGFuZ2VkKHRyYW5zaXRpb24ucGF0aCk7XG4gICAgfVxuICAgIFxuICAgIHRyYW5zaXRpb24ucGF0aC5sb2FkZWQgPSBpc0RpZmZlcmVudCAmJiB0aGlzLl9fb3B0aW9ucy5yZWxvYWQgIT09IGZhbHNlOyAgIFxuICAgIFxuICAgIFByb21pc2UucmVzb2x2ZSh0cmFuc2l0aW9uLnBhdGgubG9hZGVkPyBzdGF0ZS5oYW5kbGVyKHRyYW5zaXRpb24pOiB0cmFuc2l0aW9uLnBhdGguZGF0YSkudGhlbigoZGF0YSkgPT4geyAgXG4gICAgICBpZiAodHJhbnNpdGlvbi5fX2NhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRhdGEpLnRoZW4oKCkgPT4gb25FbmQgJiYgb25FbmQoKSkuY2F0Y2goKGVycikgPT4gb25FbmQgJiYgb25FbmQoZXJyKSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRyYW5zaXRpb24ucGF0aC5kYXRhID0gZGF0YTtcbiAgICAgIHN0YXRlLnRpdGxlICYmIChkb2N1bWVudC50aXRsZSA9IHR5cGVvZiBzdGF0ZS50aXRsZSA9PSAnZnVuY3Rpb24nPyBzdGF0ZS50aXRsZSh0cmFuc2l0aW9uKTogc3RhdGUudGl0bGUpO1xuXG4gICAgICBpZiAoc3RhdGUuYWJzdHJhY3QpIHtcbiAgICAgICAgcmV0dXJuIG5leHQoc3RhdGUuY2hpbGRyZW4sIG9uRW5kKTtcbiAgICAgIH1cbiBcbiAgICAgIHJvdXRlLnNldFRyYW5zaXRpb24odHJhbnNpdGlvbikudGhlbigoKSA9PiB7XG4gICAgICAgIG5leHQoc3RhdGUuY2hpbGRyZW4sIG9uRW5kKTtcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IG9uRW5kICYmIG9uRW5kKGVycikpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbmV4dCh0aGlzLmdldFN0YXRlc0J5TGV2ZWwoMCksIChlcnIpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRyYW5zaXRpb24ucm91dGVzLmxlbmd0aCkge1xuICAgICAgICBpZiAodGhpcy5fX3JlZGlyZWN0cykge1xuICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKGBXcm9uZyByb3V0ZXIgZGVmYXVsdCB1cmwgXCIke3RoaXMuZGVmYXVsdFVybH1cImApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRVcmwpIHtcbiAgICAgICAgICBpZiAodGhpcy5kZWZhdWx0VXJsID09IHRoaXMuZ2V0VXJsKCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKGBOb3QgZm91bmQgYW55IHJvdXRlc2ApKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmlzb2xhdGUoKCkgPT4gdGhpcy5zZXRVcmwodGhpcy5kZWZhdWx0VXJsKSk7ICAgICAgICAgIFxuICAgICAgICAgIHRoaXMuX19yZWRpcmVjdHMrKztcbiAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2VTdGF0ZSgpLnRoZW4ocmVzb2x2ZSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUud2FybihgTm90IGZvdW5kIGEgZGVmYXVsdCByb3V0ZS4gWW91IGNhbiBwYXNzIGl0IGluIFwicm91dGVyLmluaXQoZGVmYXVsdFVybClcIiBmdW5jdGlvbmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmICghdGhpcy5fX29wdGlvbnMuc2F2ZVNjcm9sbFBvc2l0aW9uICYmICghdHJhbnNpdGlvbi5wYXRoIHx8ICF0cmFuc2l0aW9uLnBhdGguaGFzaCkpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9fb3B0aW9ucyA9IHt9O1xuICAgICAgdGhpcy5fX3JlZGlyZWN0cyA9IDA7XG5cbiAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc3RhdGUtY2hhbmdlZCcsIHsgZGV0YWlsOiB0cmFuc2l0aW9uIH0pKTtcbiAgICAgIHJlc29sdmUodHJhbnNpdGlvbik7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBEZWluaXQgcm91dGVyXG4gKi9cbnJvdXRlci5kZWluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMuX19vblN0YXRlQ2hhbmdlSGFuZGxlcik7XG4gIHJvdXRlci5zZXREZWZhdWx0cygpO1xufTtcblxucm91dGVyLlRyYW5zaXRpb24gPSBUcmFuc2l0aW9uO1xuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xucm91dGVyLnNldERlZmF1bHRzKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL3JvdXRlci5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBjb25kaXRpb25hbCBzdGF0ZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jb25kaXRpb25hbF9zdGF0ZW1lbnRzfVxuICogXG4gKiBAdGFnIGlmXG4gKiBAc2VsZWN0b3IgaWZbaXNdXG4gKiBAYXR0ciB7Ym9vbGVhbn0gaXMgLSBzaG93IHRoZSBlbGVtZW50IGNvbnRlbnQgb3Igbm90XG4gKiBAYXR0ciB7Ym9vbGVhbn0gcmVjcmVhdGUgLSBkZWxldGUgdGhlIGNvbnRlbnQgYW5kIHJlY3JlYXRlIG9yIGp1c3Qgc2hvdy9oaWRlIFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyB0cmFuc3BhcmVudCA9IHRydWU7IFxuICBzdGF0aWMgbWF0Y2hlcyA9ICdbaXNdJztcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydyZWNyZWF0ZSddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpZicsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnZWxzZS1pZicsIHRoaXMuRWxzZUlmKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2Vsc2UnLCB0aGlzLkVsc2UpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5odG1sID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLnN0YXRlID0gZmFsc2U7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnJlY3JlYXRlID0gZmFsc2U7XG4gICAgdGhpcy5pc0NvbXBpbGVkID0gZmFsc2U7XG4gICAgdGhpcy5kaXNwbGF5ID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKS5kaXNwbGF5O1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRyKCdyZWNyZWF0ZScsIHRoaXMuc2V0UmVjcmVhdGlvbik7XG4gICAgcmV0dXJuIHRoaXMuYXR0cignaXMnLCB2YWwgPT4gKHRoaXMuc3RhdGUgPSAhIXZhbCwgdGhpcy5zZXRTdGF0ZSgpKSk7XG4gIH1cblxuICBzZXRBY3Rpdml0eShhY3RpdmUpIHtcbiAgICB0aGlzLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgfVxuXG4gIHNldFJlY3JlYXRpb24ocmVjcmVhdGUpIHtcbiAgICB0aGlzLnJlY3JlYXRlID0gcmVjcmVhdGU7XG4gIH1cblxuICBzZXRTdGF0ZSgpIHtcbiAgICBsZXQgcmVzID0gdGhpcy5jb21waWxhdGlvbigpO1xuICAgIGxldCBuZXh0ID0gdGhpcy5lbC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgbGV0IHJlc3VsdDtcblxuICAgIGlmICghbmV4dCB8fCAhbmV4dC5tYXRjaGVzKCdlbHNlLWlmLGVsc2UnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5leHQuX19ha2lsaS5zZXRBY3Rpdml0eSh0aGlzLmFjdGl2ZSB8fCB0aGlzLnN0YXRlKTtcbiAgICBuZXh0Ll9fYWtpbGkuc2V0UmVjcmVhdGlvbih0aGlzLnJlY3JlYXRlKTtcbiAgICByZXN1bHQgPSBuZXh0Ll9fYWtpbGkuc2V0U3RhdGUoKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcykudGhlbigoKSA9PiAgcmVzdWx0KTtcbiAgfVxuXG4gIGNvbXBpbGF0aW9uKCkge1xuICAgIGxldCByZXM7XG5cbiAgICBpZiAodGhpcy5zdGF0ZSAmJiAhdGhpcy5hY3RpdmUpIHtcbiAgICAgIGlmICh0aGlzLnJlY3JlYXRlIHx8ICF0aGlzLmlzQ29tcGlsZWQpIHtcbiAgICAgICAgcmVzID0gdGhpcy5jb21waWxlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCB0aGlzLmRpc3BsYXksICdpbXBvcnRhbnQnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAodGhpcy5yZWNyZWF0ZSkge1xuICAgICAgICB0aGlzLmVtcHR5KCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghdGhpcy5pc0NvbXBpbGVkKSB7XG4gICAgICAgIHJlcyA9IHRoaXMuY29tcGlsZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnLCAnaW1wb3J0YW50Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGNvbXBpbGUoKSB7XG4gICAgbGV0IHJlcztcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMuaHRtbDsgICAgXG4gICAgcmVzID0gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICB0aGlzLmlzQ29tcGlsZWQgPSB0cnVlO1xuICAgIHJldHVybiByZXM7XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGNvbmRpdGlvbmFsIHN0YXRlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NvbmRpdGlvbmFsX3N0YXRlbWVudHN9XG4gKiBcbiAqIEB0YWcgZWxzZS1pZlxuICogQHNlbGVjdG9yIGVsc2UtaWZbaXNdXG4gKiBAYXR0ciB7Ym9vbGVhbn0gaXMgQHNlZSBJZlxuICovXG5leHBvcnQgY2xhc3MgRWxzZUlmIGV4dGVuZHMgSWYge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGNvbmRpdGlvbmFsIHN0YXRlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NvbmRpdGlvbmFsX3N0YXRlbWVudHN9XG4gKiBcbiAqIEB0YWcgZWxzZVxuICovXG5leHBvcnQgY2xhc3MgRWxzZSBleHRlbmRzIEVsc2VJZiB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2lzJywgJ3RydWUnKTtcbiAgfVxufVxuXG5JZi5FbHNlSWYgPSBFbHNlSWY7XG5JZi5FbHNlID0gRWxzZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pZi5qcyIsImltcG9ydCBGb3IsIHsgTG9vcCB9IGZyb20gJy4vZm9yLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggc2VsZWN0LlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19zZWxlY3R9XG4gKiBcbiAqIEB0YWcgc2VsZWN0ICBcbiAqIEBhdHRyIHtzdHJpbmd9IHZhbHVlIC0gYWN0dWFsIHZhbHVlXG4gKiBAYXR0ciBbaW5dIEBzZWUgRm9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnbXVsdGlwbGUnXS5jb25jYXQoRm9yLmJvb2xlYW5BdHRyaWJ1dGVzKTtcbiAgc3RhdGljIGV2ZW50cyA9IFsnY2hhbmdlJ10uY29uY2F0KEZvci5ldmVudHMpO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdzZWxlY3QnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ29wdGlvbicsIHRoaXMuT3B0aW9uKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXRlcmF0b3JUYWdOYW1lID0gJ29wdGlvbic7XG4gICAgdGhpcy5pc011bHRpcGxlID0gZmFsc2U7XG4gIH1cblxuICBjb21waWxlZCgpIHsgXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB0aGlzLmVsLmNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSk7XG4gICAgbGV0IHJlcyA9IHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7ICAgXG4gICAgdGhpcy5hdHRyKCdtdWx0aXBsZScsIHRoaXMuc2V0TXVsdGlwbGUpO1xuICAgIHRoaXMuYXR0cignY29udGVudCcsIHRoaXMuc2V0Q29udGVudCk7XG4gICAgdGhpcy5hdHRyKCdpbicsIHRoaXMuZHJhd1NlbGVjdCk7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHNldE11bHRpcGxlKHZhbHVlKSB7XG4gICAgdGhpcy5pc011bHRpcGxlID0gdmFsdWU7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKHV0aWxzLmNvcHkodGhpcy5lbC5jb250ZW50KSkpO1xuICB9XG5cbiAgc2V0Q29udGVudCh2YWx1ZSkge1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5mb3JtYXRWYWx1ZSh2YWx1ZSkpO1xuICB9XG5cbiAgZHJhd1NlbGVjdCgpIHtcbiAgICBsZXQgc2VsZWN0ZWQgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXS5fX2FraWxpO1xuICAgICAgbGV0IHNlbGVjdGlvbiA9IG9wdGlvbi5hdHRycy5zZWxlY3RlZDtcblxuICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICBzZWxlY3RlZC5wdXNoKG9wdGlvbi5lbC52YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbi5lbC5zZWxlY3RlZCA9IHNlbGVjdGlvbjtcbiAgICB9XG5cbiAgICBpZiAoIXNlbGVjdGVkLmxlbmd0aCkge1xuICAgICAgdGhpcy5yZWRlZmluZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5mb3JtYXRWYWx1ZShzZWxlY3RlZCkpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUl0ZXJhdG9yRWxlbWVudCgpIHtcbiAgICBsZXQgZWwgPSBzdXBlci5jcmVhdGVJdGVyYXRvckVsZW1lbnQoKTtcblxuICAgIGlmICghZWwuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGhpcy5odG1sLnRyaW0oKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBpZiAoIXRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZWwudmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnQgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXTtcblxuICAgICAgaWYgKG9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICBjb250ZW50LnB1c2gob3B0aW9uLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGZvcm1hdFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9ICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKT8gW3ZhbHVlXTogW107XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUubGVuZ3RoPyB2YWx1ZVswXTogJyc7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZWRlZmluZSgpIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZ2V0Q29udGVudCgpKTtcbiAgfVxuXG4gIGNoYW5nZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHV0aWxzLmNvbXBhcmUodGhpcy5lbC5jb250ZW50LCB2YWx1ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuZWwudmFsdWUgPSB2YWx1ZVt2YWx1ZS5sZW5ndGggLSAxXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdmFsdWUuaW5kZXhPZihvcHRpb24udmFsdWUpICE9IC0xO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZWwudmFsdWUgPSB2YWx1ZTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gb3B0aW9uLnZhbHVlID09IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZWwuY29udGVudCA9IHZhbHVlO1xuICAgIHRoaXMuYXR0cnMub25DaGFuZ2UuZGlzcGF0Y2goRXZlbnQsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgT3B0aW9uIGV4dGVuZHMgTG9vcCB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnc2VsZWN0ZWQnXTtcblxuICBfX2dldFBhcnNlZEV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIHJldHVybiB1dGlscy5kZWNvZGVIdG1sRW50aXRpZXMoZXhwcmVzc2lvbik7XG4gIH1cblxuICBjaGFuZ2VkU2VsZWN0ZWQodmFsdWUpIHtcbiAgICB0aGlzLnNldFNlbGVjdGVkKHZhbHVlKTtcbiAgfVxuXG4gIHNldFNlbGVjdGVkKHZhbHVlKSB7XG4gICAgdGhpcy5lbC5zZWxlY3RlZCA9IHZhbHVlO1xuICAgIHRoaXMuZm9yLnJlZGVmaW5lKCk7XG4gIH1cbn1cblxuU2VsZWN0Lk9wdGlvbiA9IE9wdGlvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9zZWxlY3QuanMiLCJpbXBvcnQgVGV4dCBmcm9tICcuL3RleHQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIGlucHV0IGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbnB1dH1cbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NoZWNrYm94X2FuZF9yYWRpb31cbiAqIFxuICogQHRhZyBpbnB1dFxuICogQGF0dHIgQHNlZSBUZXh0XG4gKiBAbWVzc2FnZSBAc2VlIFRleHRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBUZXh0IHtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydjaGVja2VkJywgJ211bHRpcGxlJ10uY29uY2F0KFRleHQuYm9vbGVhbkF0dHJpYnV0ZXMpO1xuICBzdGF0aWMgZXZlbnRzID0gWydjaGFuZ2UnXS5jb25jYXQoVGV4dC5ldmVudHMpO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpbnB1dCcsIHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pc0NoZWNrYm94ID0gdGhpcy5lbC50eXBlID09ICdjaGVja2JveCc7XG4gICAgdGhpcy5pc1JhZGlvID0gdGhpcy5lbC50eXBlID09ICdyYWRpbyc7ICAgIFxuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgKHRoaXMuaXNDaGVja2JveCB8fCB0aGlzLmlzUmFkaW8pICYmIHRoaXMuYXR0cignY2hlY2tlZCcsIHRoaXMuc2V0Q2hlY2tlZCk7XG4gICAgcmV0dXJuIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH0gIFxuXG4gIHNldENoZWNrZWQodmFsdWUpIHtcbiAgICB2YWx1ZSA9ICEhdmFsdWU7XG4gICAgXG4gICAgaWYgKHRoaXMuZWwuY2hlY2tlZCA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmVsLmNoZWNrZWQgPSB2YWx1ZTtcbiAgICB0aGlzLl9faXNDb21waWxlZCAmJiB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgdGhpcy5pc1JhZGlvICYmIHRoaXMuY2hhbmdlUmFkaW8oKTtcbiAgfVxuXG4gIHNldFZhbHVlKCkge1xuICAgIHN1cGVyLnNldFZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5pc1JhZGlvICYmIHRoaXMuYXR0cnMub25DaGFuZ2UuZGlzcGF0Y2goRXZlbnQsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgfVxuXG4gIGNoYW5nZVJhZGlvKCkge1xuICAgIGxldCBuYW1lID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICBsZXQgc2VsZWN0b3IgPSBgaW5wdXRbdHlwZT1yYWRpb11bbmFtZT0nJHtuYW1lfSddOm5vdChbc2NvcGU9JyR7dGhpcy5zY29wZS5fX25hbWV9J10pYDtcbiAgICBsZXQgY2hpbGRyZW4gPSBBa2lsaS5yb290LmNoaWxkcmVuKHNlbGVjdG9yKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcmFkaW8gPSBjaGlsZHJlbltpXTtcbiAgICAgIHJhZGlvLnNldENoZWNrZWQocmFkaW8uZWwuY2hlY2tlZCk7XG4gICAgfVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaW5wdXQuanMiLCJpbXBvcnQgRm9yLCB7IExvb3AgfSBmcm9tICcuL2Zvci5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggcmFkaW8gZ3JvdXAuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX3JhZGlvX2dyb3VwfVxuICogXG4gKiBAdGFnIHJhZGlvXG4gKiBAc2VsZWN0b3IgcmFkaW9bbmFtZV1cbiAqIEBhdHRyIHtzdHJpbmd9IG5hbWUgLSBuYW1lIG9mIHRoZSBncm91cFxuICogQGF0dHIge3N0cmluZ3xudWxsfSB2YWx1ZSAtIHNlbGVjdGVkIHZhbHVlXG4gKiBAYXR0ciBbaW5dIEBzZWUgRm9yXG4gKiBAbWVzc2FnZSB7c3RyaW5nfSByYWRpbyAtIHNlbnQgb24gdmFsdWUgY2hhbmdlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZGlvIGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW25hbWVdJztcbiAgc3RhdGljIGV2ZW50cyA9IFsncmFkaW8nXS5jb25jYXQoRm9yLmV2ZW50cyk7XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JhZGlvJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdyYWRpby1idXR0b24nLCB0aGlzLlJhZGlvQnV0dG9uKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXRlcmFibGUgPSB0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnaW4nKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgaWYodGhpcy5pdGVyYWJsZSkge1xuICAgICAgcmV0dXJuIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIEFraWxpLm5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5nZXRSYWRpb1ZhbHVlKCk7XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSB0aGlzLnByZXZWYWx1ZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJldlZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuYXR0cnMub25SYWRpby50cmlnZ2VyKHZhbHVlLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmKHRoaXMuaXRlcmFibGUpIHtcbiAgICAgIHJldHVybiBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIHJlc29sdmVkKCkge1xuICAgIHRoaXMuYXR0cignaW4nLCB0aGlzLnNldE5hbWVzLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTsgICBcbiAgICB0aGlzLmF0dHIoJ3ZhbHVlJywgdGhpcy5zZXRWYWx1ZSk7IFxuICAgIHRoaXMuYXR0cignbmFtZScsIHRoaXMuc2V0TmFtZXMpO1xuXG4gICAgaWYodGhpcy5pdGVyYWJsZSkge1xuICAgICAgcmV0dXJuIHN1cGVyLnJlc29sdmVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgc2V0TmFtZXMobmFtZSkge1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oJ2lucHV0W3R5cGU9cmFkaW9dJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY2hpbGRyZW5baV0uZWwuc2V0QXR0cmlidXRlKCduYW1lJywgbmFtZSB8fCB0aGlzLmF0dHJzLm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSB0aGlzLnByZXZWYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBwcmV2ID0gdGhpcy5wcmV2VmFsdWU7XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbignaW5wdXRbdHlwZT1yYWRpb10nKTtcbiAgICBsZXQgaXNUcnVlID0gZmFsc2U7XG4gICAgdGhpcy5wcmV2VmFsdWUgPSB2YWx1ZTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcmFkaW8gPSBjaGlsZHJlbltpXTtcbiAgICAgIGxldCBpc1NlbGVjdGVkID0gcmFkaW8uZWwudmFsdWUgPT09IHZhbHVlO1xuXG4gICAgICBpc1NlbGVjdGVkICYmIChpc1RydWUgPSB0cnVlKTtcbiAgICAgIHJhZGlvLnNldENoZWNrZWQoaXNTZWxlY3RlZCk7XG4gICAgfVxuXG4gICAgaWYgKCFpc1RydWUpIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICBpZiAocHJldiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmF0dHJzLm9uUmFkaW8udHJpZ2dlcih2YWx1ZSwgeyBidWJibGVzOiB0cnVlIH0pO1xuICB9XG5cbiAgZ2V0UmFkaW9WYWx1ZSgpIHtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICBpZiAocmFkaW8uZWwuY2hlY2tlZCkge1xuICAgICAgICByZXR1cm4gcmFkaW8uZWwudmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIHJhZGlvIGdyb3VwIGl0ZW0uXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX3JhZGlvX2dyb3VwfVxuICogXG4gKiBAdGFnIHJhZGlvLWJ1dHRvblxuICogQGF0dHIge3N0cmluZ30gdmFsdWUgLSB2YWx1ZVxuICovXG5leHBvcnQgY2xhc3MgUmFkaW9CdXR0b24gZXh0ZW5kcyBMb29wIHtcbiAgc3RhdGljIHRlbXBsYXRlID0gJzxsYWJlbD48aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIke3RoaXMudmFsdWV9XCIvPiR7dGhpcy5fX2NvbnRlbnR9PC9sYWJlbD4nO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cigndmFsdWUnLCAndmFsdWUnKTtcbiAgICByZXR1cm4gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5SYWRpby5SYWRpb0J1dHRvbiA9IFJhZGlvQnV0dG9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3JhZGlvLmpzIiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCB0ZXh0YXJlYS5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfdGV4dGFyZWF9XG4gKiBcbiAqIEB0YWcgdGV4dGFyZWFcbiAqIEBhdHRyIEBzZWUgVGV4dFxuICogQG1lc3NhZ2UgQHNlZSBUZXh0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRhcmVhIGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0ZXh0YXJlYScsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGV4dGFyZWEuanMiLCJpbXBvcnQgVGV4dCBmcm9tICcuL3RleHQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGVsZW1lbnRzIHdpdGggY29udGVudGVkaXRhYmxlIGF0dHJpYnV0ZS5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfY29udGVudGVkaXRhYmxlfVxuICogXG4gKiBAdGFnIGNvbnRlbnRcbiAqIEBzZWxlY3RvciBjb250ZW50LFtjb250ZW50ZWRpdGFibGVdXG4gKiBAYXR0ciBAc2VlIFRleHRcbiAqIEBhdHRyIHtib29sZWFufSBbZWRpdGFibGVdIC0gZWRpdGFibGUgb3Igbm90XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnQgZXh0ZW5kcyBUZXh0IHtcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2NvbnRlbnQnLCB0aGlzKTtcbiAgICBBa2lsaS5hbGlhcygnW2NvbnRlbnRlZGl0YWJsZV0nLCAnY29udGVudCcpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgaWYgKHRoaXMuZWwuaGFzQXR0cmlidXRlKCdlZGl0YWJsZScpKSB7XG4gICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ2VkaXRhYmxlJykpO1xuICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoJ2VkaXRhYmxlJyk7XG4gICAgfVxuXG4gICAgaWYgKGdldENvbXB1dGVkU3R5bGUodGhpcy5lbCkuZGlzcGxheSA9PSAnaW5saW5lJykge1xuICAgICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlS2V5ID0gJ2lubmVySFRNTCc7XG4gIH1cblxuICBzZXRFbGVtZW50Rm9jdXMoKSB7XG4gICAgbGV0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICBsZXQgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuXG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKHRoaXMuZWwpO1xuICAgIHJhbmdlLmNvbGxhcHNlKGZhbHNlKTtcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9jb250ZW50LmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byBpbmNsdWRlIHRlbXBsYXRlcyBieSB1cmwuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2h0bWxfdGVtcGxhdGVzfVxuICogXG4gKiBAdGFnIGluY2x1ZGVcbiAqIEBzZWxlY3RvciBpbmNsdWRlW3VybF1cbiAqIEBhdHRyIHtzdHJpbmd9IHVybCAtIHRlbXBsYXRlIHBhdGhcbiAqIEBhdHRyIHtudW1iZXJ8ZnVuY3Rpb258Ym9vbGVhbn0gW2NhY2hlXSAtIHJlcXVlc3QgY2FjaGUge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yZXF1ZXN0cyNkb2NzX2NhY2hlfVxuICogQG1lc3NhZ2Uge3ZvaWR9IGxvYWQgLSBzZW50IG9uIHRoZSB0ZW1wbGF0ZSBsb2FkXG4gKiBAbWVzc2FnZSB7RXJyb3J9IGVycm9yIC0gc2VudCBvbiBlcnJvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmNsdWRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gdHJ1ZTsgXG4gIHN0YXRpYyBtYXRjaGVzID0gJ1t1cmxdJztcbiAgc3RhdGljIGV2ZW50cyA9IFsnbG9hZCcsICdlcnJvciddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpbmNsdWRlJywgdGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ2NhY2hlJywgdGhpcy5zZXRDYWNoZSk7XG4gICAgcmV0dXJuIHRoaXMuYXR0cigndXJsJywgdGhpcy5zZXRUZW1wbGF0ZSk7XG4gIH1cblxuICBzZXRDYWNoZShjYWNoZSkge1xuICAgIHRoaXMuY2FjaGUgPSBjYWNoZTtcbiAgfVxuXG4gIHNldFRlbXBsYXRlKHVybCkge1xuICAgIHRoaXMuY29ubmVjdGlvbiAmJiB0aGlzLmNvbm5lY3Rpb24uYWJvcnQoKTtcblxuICAgIHJldHVybiByZXF1ZXN0LmdldCh1cmwsIHtcbiAgICAgIGNhY2hlOiB0aGlzLmNhY2hlLFxuICAgICAgb25TdGFydDogKHhocikgPT4ge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSB4aHI7XG4gICAgICB9XG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgdGhpcy5lbXB0eSgpO1xuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XG4gICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCByZXMuZGF0YSk7XG5cbiAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uTG9hZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgIH0pO1xuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHRoaXMuYXR0cnMub25FcnJvci50cmlnZ2VyKGVyciwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2luY2x1ZGUuanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBpZnJhbWVzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgaWZyYW1lXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZnJhbWUgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpZnJhbWUnLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2lmcmFtZS5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGltYWdlcy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIGltZ1xuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2UgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpbWcnLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2ltYWdlLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgZW1iZWQgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBlbWJlZFxuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1iZWQgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdlbWJlZCcsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZW1iZWQuanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBhdWRpbyBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIGF1ZGlvXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpbyBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2F1ZGlvJywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9hdWRpby5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIHZpZGVvIGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgdmlkZW9cbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZGVvIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgndmlkZW8nLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3ZpZGVvLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgdHJhY2sgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyB0cmFja1xuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhY2sgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0cmFjaycsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdHJhY2suanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBzb3VyY2UgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBzb3VyY2VcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdXJjZSBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3NvdXJjZScsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvc291cmNlLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3Igb2JqZWN0IGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgb2JqZWN0XG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3RzIGV4dGVuZHMgVXJsIHsgIFxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnVybEF0dHJpYnV0ZSA9ICdkYXRhJztcbiAgfVxuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdvYmplY3QnLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL29iamVjdC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi4vc2VydmljZXMvcm91dGVyLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBsaW5rcy5cbiAqIEl0IHdvcmtzIHdpdGggcm91dGVyIHRvby4gXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2xpbmtzfVxuICogXG4gKiBAdGFnIGFcbiAqIEBzZWxlY3RvciBhW3N0YXRlXTpub3QoW3VybF0pLGFbdXJsXTpub3QoW3N0YXRlXSlcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdIC0gdXJsIHRvIGdvIG9uIGNsaWNrXG4gKiBAYXR0ciB7c3RyaW5nfSBbc3RhdGVdIC0gc3RhdGUgb2Ygcm91dGVyIHRvIGdvIG9uIGNsaWNrIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZ31cbiAqIEBhdHRyIHtvYmplY3R9IFtwYXJhbXNdIC0gcGFyYW1zIGZvciB0aGUgc3RhdGUge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3Nfc3RhdGVfcGFyYW1zfVxuICogQGF0dHIge29iamVjdH0gW3F1ZXJ5XSAtIHF1ZXJ5IGZvciB0aGUgc3RhdGUge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3Nfc3RhdGVfcXVlcnl9XG4gKiBAYXR0ciB7c3RyaW5nfSBbaGFzaF0gLSBoYXNoIGZvciB0aGUgc3RhdGUge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3Nfc3RhdGVfaGFzaH1cbiAqIEBhdHRyIHtvYmplY3R9IFtvcHRpb25zXSAtIG9wdGlvbnMgZm9yIHRoZSBzdGF0ZSB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmcjZG9jc19yb3V0ZXIubG9jYXRpb259XG4gKiBAc2NvcGUge2Jvb2xlYW59IGlzQWN0aXZlU3RhdGUgLSB0aGUgc3RhdGUgaXMgYWN0aXZlIG9yIG5vdCBcbiAqIEBzY29wZSB7Ym9vbGVhbn0gaW5BY3RpdmVTdGF0ZSAtIHRoZSBzdGF0ZSBpcyBwYXJ0IG9mIHRoZSBhY3RpdmUgc3RhdGUgb3Igbm90XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbc3RhdGVdOm5vdChbdXJsXSksW3VybF06bm90KFtzdGF0ZV0pJztcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gdHJ1ZTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnYScsIHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IG51bGw7XG4gICAgdGhpcy5wYXJhbXMgPSB7fTtcbiAgICB0aGlzLnF1ZXJ5ID0ge307XG4gICAgdGhpcy5oYXNoID0gbnVsbDtcbiAgICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgICB0aGlzLmlzVXJsID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3VybCcpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmICh0aGlzLmlzVXJsKSB7XG4gICAgICAgIHJvdXRlci5sb2NhdGlvbih0aGlzLmF0dHJzLnVybCwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByb3V0ZXIuc3RhdGUodGhpcy5zdGF0ZS5uYW1lLCB0aGlzLnBhcmFtcywgdGhpcy5xdWVyeSwgdGhpcy5oYXNoLCAgdGhpcy5vcHRpb25zKTtcbiAgICB9KTtcblxuICAgIHRoaXMub25TdGF0ZUNoYW5nZWQgPSAoKSA9PiB0aGlzLnN0YXRlICYmIHRoaXMuc2V0QWN0aXZpdHkoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3RhdGUtY2hhbmdlZCcsIHRoaXMub25TdGF0ZUNoYW5nZWQpO1xuXG4gICAgdGhpcy5hdHRyKCdzdGF0ZScsIHRoaXMuc2V0U3RhdGUpO1xuICAgIHRoaXMuYXR0cigncGFyYW1zJywgdGhpcy5zZXRQYXJhbXMpO1xuICAgIHRoaXMuYXR0cigncXVlcnknLCB0aGlzLnNldFF1ZXJ5KTtcbiAgICB0aGlzLmF0dHIoJ2hhc2gnLCB0aGlzLnNldEhhc2gpO1xuICAgIHRoaXMuYXR0cignb3B0aW9ucycsIHRoaXMuc2V0T3B0aW9ucyk7XG4gICAgdGhpcy5hdHRyKCd1cmwnLCB0aGlzLnNldFVybCk7XG4gICAgdGhpcy5hdHRyKCdzdGF0ZScsIHRoaXMucmVzZXRIcmVmLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTtcbiAgICB0aGlzLmF0dHIoJ3BhcmFtcycsIHRoaXMucmVzZXRIcmVmLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTtcbiAgICB0aGlzLmF0dHIoJ3F1ZXJ5JywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cignaGFzaCcsIHRoaXMucmVzZXRIcmVmLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTtcbiAgICB0aGlzLmF0dHIoJ3VybCcsIHRoaXMucmVzZXRIcmVmLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTtcbiAgICB0aGlzLnJlc2V0SHJlZigpO1xuICB9XG5cbiAgcmVtb3ZlZCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3RhdGUtY2hhbmdlZCcsIHRoaXMub25TdGF0ZUNoYW5nZWQpO1xuICB9XG5cbiAgc2V0VXJsKHVybCkge1xuICAgIHRoaXMudXJsID0gdXJsO1xuICB9XG5cbiAgc2V0U3RhdGUobmFtZSkge1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldFN0YXRlKG5hbWUpO1xuICAgIHRoaXMuc2V0QWN0aXZpdHkoKTtcbiAgfVxuXG4gIHNldEFjdGl2aXR5KCkge1xuICAgIHRoaXMuc2NvcGUuaXNBY3RpdmVTdGF0ZSA9IHJvdXRlci5pc0FjdGl2ZVN0YXRlKHRoaXMuc3RhdGUpO1xuICAgIHRoaXMuc2NvcGUuaW5BY3RpdmVTdGF0ZSA9IHJvdXRlci5pbkFjdGl2ZVN0YXRlKHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgc2V0UGFyYW1zKHBhcmFtcykge1xuICAgIGlmICh0eXBlb2YgcGFyYW1zICE9ICdvYmplY3QnIHx8ICFwYXJhbXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIHBhcmFtcyBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICB9XG5cbiAgc2V0UXVlcnkocXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5ICE9ICdvYmplY3QnIHx8ICFxdWVyeSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgcXVlcnkgbXVzdCBiZSBhbiBvYmplY3RgKTtcbiAgICB9XG5cbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gIH1cblxuICBzZXRIYXNoKGhhc2gpIHtcbiAgICBpZiAodHlwZW9mIGhhc2ggIT0gJ3N0cmluZycgJiYgaGFzaCAhPT0gdW5kZWZpbmVkICYmIGhhc2ggIT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIGhhc2ggbXVzdCBiZSBhIHN0cmluZ3xudWxsYCk7XG4gICAgfVxuXG4gICAgdGhpcy5oYXNoID0gaGFzaDtcbiAgfVxuXG4gIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPSAnb2JqZWN0JyB8fCAhb3B0aW9ucykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgb3B0aW9ucyBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBnZXRTdGF0ZShuYW1lKSB7XG4gICAgbGV0IHN0YXRlID0gcm91dGVyLmdldFN0YXRlKG5hbWUpO1xuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgcm91dGVyIHN0YXRlIHdpdGggbmFtZSBcIiR7bmFtZX1cImApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIHJlc2V0SHJlZigpIHtcbiAgICBpZiAodGhpcy51cmwpIHtcbiAgICAgIHRoaXMuYXR0cnMuaHJlZiA9IHRoaXMudXJsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuYXR0cnMuaHJlZiA9IHJvdXRlci5jcmVhdGVTdGF0ZVVybCh0aGlzLnN0YXRlLCB0aGlzLnBhcmFtcywgdGhpcy5xdWVyeSwgdGhpcy5oYXNoKTtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9hLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==