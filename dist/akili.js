/*!
 * Akili is a javascript framework
 * 
 * const Akili = makeItEasy(js + html);
 * 
 * @version 0.7.2
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTZlNGFlMjczOGI3NDQ5ZDZmMmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FraWxpLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91cmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9nbG9iYWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JvdXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaWYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JhZGlvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHRhcmVhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5jbHVkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZW1iZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdHJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc291cmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hLmpzIl0sIm5hbWVzIjpbIkFraWxpIiwiX19kZWZhdWx0cyIsInNldERlZmF1bHRzIiwib3B0aW9ucyIsImRlYnVnIiwiX19pbml0IiwiX19jbGVhcmVkIiwiX19jb21wb25lbnRzIiwiX19hbGlhc2VzIiwiX19zY29wZXMiLCJfX3N0b3JlTGlua3MiLCJfX3dpbmRvdyIsIl9faXNvbGF0aW9uIiwiX19ldmFsdWF0aW9uIiwiX193cmFwcGluZyIsIl9fb25FcnJvciIsInRyaWdnZXJJbml0IiwiaHRtbEJvb2xlYW5BdHRyaWJ1dGVzIiwia2V5IiwiZ2xvYmFscyIsInV0aWxzIiwiY29tcG9uZW50cyIsInNlcnZpY2VzIiwiQ29tcG9uZW50IiwiRXZlbnRFbWl0dGVyIiwiU2NvcGUiLCJBIiwiQXVkaW8iLCJDb250ZW50IiwiRm9yIiwiRW1iZWQiLCJJZiIsIkluY2x1ZGUiLCJJbnB1dCIsIklmcmFtZSIsIkltYWdlIiwiT2JqZWN0IiwiT2JqZWN0cyIsIlJhZGlvIiwiUm91dGUiLCJTZWxlY3QiLCJTb3VyY2UiLCJUZXh0IiwiVGV4dGFyZWEiLCJUcmFjayIsIlVybCIsIlZpZGVvIiwicmVxdWVzdCIsInJvdXRlciIsInN0b3JlIiwiZGVmaW5lIiwiZXJyb3JIYW5kbGluZyIsImlzb2xhdGVFdmVudHMiLCJpc29sYXRlQXJyYXlQcm90b3R5cGUiLCJpc29sYXRlV2luZG93RnVuY3Rpb25zIiwiaSIsImwiLCJsZW5ndGgiLCJkZWZhdWx0cyIsImZuIiwicHVzaCIsImNsZWFyR2xvYmFscyIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJBcnJheSIsInVud3JhcCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJzZXRJbnRlcnZhbCIsIlByb21pc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiam9pbkJpbmRpbmdLZXlzIiwia2V5cyIsIm1hcCIsImVsIiwidG9TdHJpbmciLCJqb2luIiwiYWRkU2NvcGUiLCJzY29wZSIsIl9fbmFtZSIsIkVycm9yIiwiZ2V0U2NvcGUiLCJuYW1lIiwicmVtb3ZlU2NvcGUiLCJnZXRBa2lsaVBhcmVudHMiLCJ0cmVlIiwiYXJyIiwiY2hlY2siLCJub2RlIiwicGFyZW50Tm9kZSIsIl9fYWtpbGkiLCJzZXRUZW1wbGF0ZSIsInRlbXBsYXRlIiwicmVwbGFjZSIsImlubmVySFRNTCIsImNyZWF0ZVNjb3BlTmFtZSIsImNyZWF0ZVJhbmRvbVN0cmluZyIsInN0ciIsImlzb2xhdGUiLCJyZXMiLCJwcm9wcyIsImsiLCJoYXNPd25Qcm9wZXJ0eSIsInByb3AiLCJ2YWwiLCJnZXRQcm9wZXJ0eUJ5S2V5cyIsImNvbXBvbmVudCIsIl9fc2NvcGUiLCJfX2lzUmVzb2x2ZWQiLCJfX3RyaWdnZXJTdG9yZUFuZEF0dHIiLCJfX2V2YWx1YXRlQnlLZXlzIiwiaXNEZWxldGVkIiwidW5ldmFsdWF0ZSIsImV2YWx1YXRpb24iLCJ3cmFwcGluZyIsInVuaXNvbGF0ZSIsImlzb2xhdGlvbiIsIm5leHRUaWNrIiwicmVzb2x2ZSIsInRoZW4iLCJpbml0aWFsaXplIiwicmVjb21waWxlIiwiX19yZWNvbXBpbGUiLCJpc1Jvb3QiLCJfX3Jvb3QiLCJjb21wb25lbnROYW1lIiwidG9EYXNoQ2FzZSIsImdldEF0dHJpYnV0ZSIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsIl9Db21wb25lbnQiLCJDSEVDS19BTElBU0VTIiwic2VsZWN0b3JzIiwic2VsZWN0b3JBbGwiLCJtYXRjaGVzIiwic2VsZWN0b3IiLCJfX2NhbmNlbGxlZCIsImZpbmQiLCJwIiwiX19wcmV2ZW50IiwiX19jcmVhdGUiLCJjb21waWxlIiwicm9vdCIsImVsZW1lbnRzIiwibmVzdGVkSW5pdGlhbGl6aW5nIiwiY2hpbGRyZW4iLCJjaGlsZCIsIl9fY29tcGlsZSIsImFsbCIsInIiLCJfX3Jlc29sdmUiLCJjb25zb2xlIiwid2FybiIsInJlbW92ZUNvbXBvbmVudCIsImFsaWFzIiwicmVtb3ZlQWxpYXMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwib2xkIiwiX19pc1Byb3h5IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJjcmVhdGVDYWxsYmFja0lzb2xhdGlvbiIsIkFLSUxJX1NTUiIsImNvbnN0cnVjdG9yIiwiY2F0Y2giLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwiX19ha2lsaUxpc3RlbmVycyIsImFyZ3MiLCJzbGljZSIsImNhbGwiLCJsaW5rIiwibGlzdGVuZXIiLCJzcGxpY2UiLCJwb3MiLCJpc0FycmF5IiwibnVtIiwiaW5kZXgiLCJjYWxsYmFjayIsIl9faXNvbGF0ZWQiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJ2YWx1ZSIsIndyYXAiLCJvYmoiLCJjdXJyZW50Iiwid3JhcEZ1bmN0aW9uIiwiYyIsImRlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsInJldmVyc2UiLCJha2lsaVdyYXBwZWRGdW5jdGlvbiIsInRhZyIsIl9fYWRkVGFnIiwiZXZhbHVhdGVUYWciLCJ0YWdzIiwiY2hpbGRUYWdzIiwiX190YWdzIiwiaiIsInMiLCJfX2V2YWx1YXRlTm9kZSIsInJlbW92ZVRhZyIsIl9fcmVtb3ZlVGFnIiwic3RhdHVzIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiaW5pdCIsImRvY3VtZW50IiwiYm9keSIsImRvY3VtZW50RWxlbWVudCIsIkFLSUxJX1NFUlZFUiIsImluaXRTZXJ2ZXJTaWRlSHRtbCIsImh0bWwiLCJpbml0U2VydmVyU2lkZVJlcXVlc3RDYWNoZSIsInJlcXVlc3RDYWNoZSIsIkFLSUxJX0NMSUVOVCIsInByZXBhcmVTZXJ2ZXJTaWRlSHRtbCIsImNoYW5nZVN0YXRlIiwicHJlcGFyZVNlcnZlclNpZGVSZXF1ZXN0Q2FjaGUiLCJlcnIiLCJhdHRyaWJ1dGVzIiwicmVtb3ZlQXR0cmlidXRlIiwicGFyc2VyIiwiRE9NUGFyc2VyIiwiZG9jIiwicGFyc2VGcm9tU3RyaW5nIiwicXVlcnlTZWxlY3RvciIsImF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJpbnN0YW5jZSIsIl9fY2FjaGUiLCJfX2luc3RhbmNlcyIsIm91dGVySFRNTCIsImNhY2hlIiwiX19tYWluIiwiZGVpbml0Iiwic3RvcmVLZXlzIiwiX190YXJnZXQiLCJjbGFzcyIsImNsYXNzZXMiLCJzdHlsZSIsInN0eWxlcyIsInNwbGl0IiwiZGVsIiwiZXhjbHVkZSIsImV4cHMiLCJsYXN0IiwiUmVnRXhwIiwiaW5kZXhPZiIsIm9wZW4iLCJmaWx0ZXIiLCJoYW5kbGVyIiwibWF0Y2giLCJpdGVtIiwiZmlsdGVyZWQiLCJzb3J0Iiwib3JkZXIiLCJhIiwiYiIsIkRhdGUiLCJnZXRUaW1lIiwibmV4dCIsImFWIiwiYlYiLCJpbmNsdWRlS2V5cyIsIm5ld09iaiIsIm9iaktleXMiLCJleGNsdWRlS2V5cyIsImlzU2NvcGVQcm94eSIsImlzUGxhaW5PYmplY3QiLCJjb3B5IiwibmVzdGVkIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJtYWtlQXR0cmlidXRlVmFsdWUiLCJ1bmRlZmluZWQiLCJjb21wYXJlIiwiY2xlYXJVbmRlZmluZWQiLCJpZ25vcmVVbmRlZmluZWQiLCJhS2V5cyIsImJLZXlzIiwiY29tcGFyZVByZXZpb3VzVmFsdWUiLCJwcmV2aW91cyIsInByZXZpb3VzQ29weSIsImVuY29kZUh0bWxFbnRpdGllcyIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlY29kZUh0bWxFbnRpdGllcyIsInRvQ2FtZWxDYXNlIiwibSIsInRvVXBwZXJDYXNlIiwiY2FwaXRhbGl6ZSIsIm9iamVjdCIsInJlZHVjZSIsIm8iLCJoYXNQcm9wZXJ0eUJ5S2V5cyIsImhhcyIsInNldFByb3BlcnR5QnlLZXlzIiwiZGVsZXRlUHJvcGVydHlCeUtleXMiLCJnZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQiLCJ0YXJnZXQiLCJwcm90byIsImdldFByb3RvdHlwZU9mIiwiZ2V0T3duUHJvcGVydHlUYXJnZXQiLCJNYXRoIiwicmFuZG9tIiwic3Vic3RyaW5nIiwidXJsQXR0cmlidXRlIiwic2V0VXJsIiwidXJsIiwiYXR0cnMiLCJldmFsdWF0aW9uUmVnZXgiLCJldmFsdWF0aW9uUmVnZXhHbG9iYWwiLCJzb3VyY2UiLCJzeXN0ZW1BdHRyaWJ1dGVzIiwiY29udGV4dCIsImV4cHJlc3Npb24iLCJ2YXJpYWJsZXMiLCJ2YXJzIiwiRnVuY3Rpb24iLCJfX2lzTW91bnRlZCIsIl9faXNDb21waWxlZCIsIl9fYmluZGluZ3MiLCJfX2V2YWx1YXRpbmdFdmVudCIsIl9fcmVjb21waWxpbmciLCJfX2NvbXBpbGluZyIsIl9fZGlzYWJsZVByb3h5IiwiX19kaXNhYmxlU3RvcmVLZXlzIiwiX19kaXNhYmxlQXR0cktleXMiLCJfX2NoaWxkcmVuIiwiX19wYXJlbnQiLCJfX3BhcmVudHMiLCJfX2F0dHJzIiwiX19hdHRyTGlua3MiLCJfX2F0dHJpYnV0ZU9mIiwiX19ldmFsdWF0aW9uQ29tcG9uZW50IiwiY2hlY2tDaGFuZ2VzIiwic2V0RXZlbnRzIiwic2V0UGFyZW50cyIsInNldEJvb2xlYW5BdHRyaWJ1dGVzIiwiZGVmaW5lQXR0cmlidXRlcyIsIl9fY3JlYXRlQ29tcGlsYXRpb25PcHRpb25zIiwiX19jcmVhdGVSZWNvbXBpbGF0aW9uT3B0aW9ucyIsIl9fc2V0RXZlbnRzIiwiX19zZXRQYXJlbnRzIiwiX19zZXRCb29sZWFuQXR0cmlidXRlcyIsIl9fZGVmaW5lQXR0cmlidXRlcyIsIl9faW5pdGlhbGl6ZSIsImNyZWF0ZWQiLCJjb250cm9sIiwiX19jb250cm9sQXR0cmlidXRlcyIsIl9fZXZhbHVhdGVQYXJlbnQiLCJuZXdQYXJlbnQiLCJfX2ludGVycG9sYXRlQXR0cmlidXRlcyIsImludGVycG9sYXRlIiwicGFyZW50Iiwibm9kZVR5cGUiLCJfX2luaXRpYWxpemVOb2RlIiwiY2hpbGROb2RlcyIsIm9uQ29tcGlsZWQiLCJ0cmlnZ2VyIiwiYnViYmxlcyIsImNvbXBpbGVkIiwidGVtcGxhdGVVcmwiLCJnZXQiLCJ0ZW1wbGF0ZUNhY2hlIiwiX19jb250ZW50IiwiZGF0YSIsIm9uUmVjb21waWxlZCIsInJlY29tcGlsZWQiLCJvblJlc29sdmVkIiwicmVzb2x2ZWQiLCJfc2NvcGUiLCJhc3NpZ24iLCJjb250cm9sQXR0cmlidXRlcyIsImV2ZW50cyIsIl9fZXZlbnRzIiwiX19zYXZlQXR0cmlidXRlUHJveHlJbiIsInNhdmVBdHRyaWJ1dGVQcm94eUluIiwiX19zYXZlQXR0cmlidXRlUHJveHlPdXQiLCJzYXZlQXR0cmlidXRlUHJveHlPdXQiLCJfX25lc3RlZE9ic2VydmUiLCJib29sZWFuQXR0cmlidXRlcyIsImNvbmNhdCIsInNldEF0dHIiLCJub2RlTmFtZSIsImhhc0F0dHJpYnV0ZSIsImV2IiwidGVzdCIsInBhcmVudHMiLCJldmFsdWF0ZVBhcmVudCIsInRyYW5zcGFyZW50IiwiX19kZXRhY2giLCJfX2FkZENoaWxkIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3BlcnRpZXMiLCJfX2dldE5vZGVQcm9wZXJ0eSIsIl9fY29tcG9uZW50IiwiYXR0ck5hbWUiLCJlbGVtZW50TmFtZSIsIl9fZWxlbWVudCIsImF0dHJpYnV0ZU5hbWUiLCJBdHRyIiwibWVzc2FnZXMiLCJtZXNzYWdlIiwiX19leHByZXNzaW9uIiwiY291bnRlciIsImF0dHJpYnV0ZVZhbHVlIiwiZXZhbENvbXBvbmVudCIsImNvbSIsImQiLCJldmFsdWF0ZSIsImV4aXN0aW5nQmluZGluZ3MiLCJwYXJlbnRCaW5kaW5ncyIsInBhcnNlVmFsdWUiLCJfX2dldFBhcnNlZEV4cHJlc3Npb24iLCJsaXN0IiwicGFyc2UiLCJfX2NyZWF0ZUV4Y2VwdGlvbk1lc3NhZ2UiLCJoYXNoIiwiX19jcmVhdGVLZXlzSGFzaCIsInBhcmVudHNIYXNoIiwibm90QmluZGluZyIsInBhcmVudFZhbHVlIiwicmVhbENvbXBvbmVudCIsIl9fYmluZEFuZFNldFByb3BlcnR5IiwiZXZhbHVhdGVkIiwiSlNPTiIsInN0cmluZ2lmeSIsImUiLCJiaW5kIiwiX19nZXRCb3VuZE5vZGUiLCJfX2JpbmQiLCJfX3NldE5vZGVQcm9wZXJ0eSIsIndpdGhvdXRQYXJlbnRzIiwibGFzdFByb3BzIiwicHJvcHNMZW5ndGgiLCJlbEV2YWx1YXRlIiwiZWxlbWVudCIsIl9fZ2V0QmluZCIsIl9fZGF0YSIsIl9fZ2V0QWxsQmluZHMiLCJfX2NoZWNrTm9kZVByb3BlcnR5Q2hhbmdlIiwiX19kaXNhYmxlS2V5cyIsImNoZWNrUHJvcCIsIl9fc2V0IiwiX2siLCJfcHJvcCIsIl9fZW5hYmxlS2V5cyIsInVuYmluZCIsIl9faXNTeXN0ZW1CaW5kaW5nS2V5IiwiX2tleXMiLCJfX2tleXMiLCJfaXNEZWxldGVkIiwiaGFzS2V5Iiwic2hpZnQiLCJfX2V2YWx1YXRlTmVzdGVkIiwiX191bmJpbmQiLCJleGVjIiwiZXZlbnQiLCJfX2NoZWNrRXZhbHVhdGlvbiIsIl9fZXZhbHVhdGUiLCJpc0Jvb2xlYW5BdHRyaWJ1dGUiLCJjbGVhckF0dHJpYnV0ZSIsImNhbWVsQXR0cmlidXRlIiwiX19hdHRyaWJ1dGVPbiIsIl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciIsIl9fYXR0clRyaWdnZXJCeU5hbWUiLCJhdHRyaWJ1dGVPZiIsImV2ZW50TmFtZSIsIl9fZXZlbnQiLCJlbWl0dGVyIiwiX19ldmFsdWF0ZUV2ZW50IiwiX19pbml0aWFsaXplZCIsInRyaW0iLCJoYXNCaW5kaW5nIiwiaXNCb29sZWFuIiwiaXNFdmVudCIsIl9faXNFdmVudCIsIl9faGFzQmluZGluZ3MiLCJfX2lzQm9vbGVhbiIsIl9fdW5iaW5kQnlOb2RlcyIsIl9faW5pdGlhbGl6ZUF0dHJpYnV0ZSIsImNoYW5nZUF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZU5vZGUiLCJfX2RlaW5pdGlhbGl6ZU5vZGUiLCJQcm94eSIsInNldCIsImF0dHJLZXkiLCJkZWxldGVQcm9wZXJ0eSIsIl9faXNTeXN0ZW1LZXkiLCJleGNBcnIiLCJyZWFsVGFyZ2V0IiwiZm9yUGFyZW50cyIsImZvckRhdGEiLCJwb3AiLCJfX2JpbmROb2RlIiwiX19jaGVja0Rpc2FibGVtZW50IiwiQ0hFQ0tfRVhJU1RFTkNFIiwidGFyZ2V0UGFyZW50VmFsdWUiLCJfX2NyZWF0ZUlzb2xhdGlvbk9iamVjdCIsImtleVN0cmluZyIsIl9fc3RvcmVUcmlnZ2VyQnlLZXlzIiwiX19hdHRyVHJpZ2dlckJ5S2V5cyIsInR5cGUiLCJwcm94eSIsIl9fZ2V0RGlzYWJsZW1lbnRUeXBlU3RvcmUiLCJfX2FsbCIsImxpbmtzIiwiX19zdG9yZVRyaWdnZXJCeU5hbWUiLCJpbmZvIiwiZGF0ZSIsIm5vdyIsImNhbGxPblN0YXJ0IiwiYXR0cnNLZXlzIiwic3RhcnRLZXlzIiwib2JzZXJ2ZSIsIkNIRUNLX1BST1hZIiwiX19kaXNhYmxlUHJveHlSZWRlZmluaW5nIiwiX19vYnNlcnZlIiwiaXNvbGF0aW9uSGFzaCIsInVwZGF0ZWRBdCIsInBhcmVudEtleXNTdHJpbmciLCJrZXlzU3RyaW5nIiwiY29sbGVjdCIsIl9faGFzVGFnIiwiX19kZWxldGVOb2RlUHJvcGVydHkiLCJub2RlcyIsIl9fY2xlYXJFbXB0eUJpbmRpbmdzIiwiY2xlYXIiLCJfX3JlbW92ZSIsIl9fY2xlYXJTdG9yZUxpbmtzIiwib25SZW1vdmVkIiwicmVtb3ZlZCIsIl9fc3BsaWNlQ2hpbGQiLCJfX3JlbW92ZUNoaWxkcmVuIiwiZmluZEFsbCIsImxldmVscyIsImxldmVsIiwicmlnaHQiLCJsZXZlbEVsZW1lbnRzIiwidW5zaGlmdCIsIl9fc3RvcmVCeUZ1bmN0aW9uIiwiX19zdG9yZUJ5S2V5cyIsIl9fYXR0ckJ5RnVuY3Rpb24iLCJfX2F0dHJCeUtleXMiLCJfX3Vuc3RvcmVCeUZ1bmN0aW9uIiwiX191bnN0b3JlQnlLZXlzIiwiX191bmF0dHJCeUZ1bmN0aW9uIiwiX191bmF0dHJCeUtleXMiLCJfX2dldFBhcmVudCIsIl9fZ2V0Q2hpbGRyZW4iLCJfX2dldE5lYXIiLCJhcHBlbmRDaGlsZCIsIl9fZW1wdHkiLCJfX2Rlc3Ryb3kiLCJSZXF1ZXN0IiwiYmFzZVVybCIsImdldEhlYWRlcnMiLCJ4aHIiLCJoZWFkZXJzIiwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIiwibGluZSIsInN0YXR1c0Vycm9yUGF0dGVybiIsInJlamVjdCIsIm1ldGhvZCIsIlhNTEh0dHBSZXF1ZXN0IiwiYmVmb3JlIiwidHJhbnNmb3JtQmVmb3JlIiwib25TdGFydCIsImpzb24iLCJyZXNwb25zZVR5cGUiLCJmb3JtIiwiY3JlYXRlRm9ybURhdGEiLCJwYXJhbXMiLCJwYXJhbXNUb1F1ZXJ5IiwiY3JlYXRlQ2FjaGVIYXNoIiwidXNlciIsInBhc3N3b3JkIiwiX2NhY2hlIiwiZ2V0Q2FjaGUiLCJjcmVhdGVkQXQiLCJ0cmFuc2Zvcm1BZnRlciIsInJlc3VsdCIsInRpbWVvdXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJoZWFkZXJLZXlzIiwic2V0UmVxdWVzdEhlYWRlciIsIm9uUHJvZ3Jlc3MiLCJvbnByb2dyZXNzIiwib25sb2FkIiwicmVzcG9uc2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzVGV4dCIsInJlc3BvbnNlVGV4dCIsInJlc3BvbnNlWE1MIiwicmVzcG9uc2VVUkwiLCJjcmVhdGVDYWNoZSIsIm9udGltZW91dCIsIm9uZXJyb3IiLCJzZW5kIiwiY2hhciIsImNoYXJDb2RlQXQiLCJzZXAiLCJlcSIsImtzIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidiIsIm9wdCIsInF1ZXJ5IiwiYW1wcyIsImVxcyIsImRlY29kZVVSSUNvbXBvbmVudCIsIm5hbWVzcGFjZSIsImZkIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ0b0lTT1N0cmluZyIsImFkZEluc3RhbmNlIiwicmVtb3ZlSW5zdGFuY2UiLCJ2YWx1ZUtleSIsImRlYm91bmNlSW50ZXJ2YWwiLCJkZWJvdW5jZVRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJvbkRlYm91bmNlIiwic2V0Rm9jdXMiLCJzZXRWYWx1ZSIsInNldERlYm91bmNlIiwiaW50ZXJ2YWwiLCJzZXRFbGVtZW50Rm9jdXMiLCJzZXRFbGVtZW50Qmx1ciIsImZvY3VzIiwiYmx1ciIsIkxvb3AiLCJpdGVyYXRvcnMiLCJpdGVyYXRvclJlZiIsIml0ZXJhdG9yT3V0ZXJIVE1MIiwicmVzZXQiLCJjcmVhdGVJdGVyYXRvciIsImRyYXciLCJtYXNrIiwibmV4dFNpYmxpbmciLCJjb250ZW50IiwiZmlyc3RDaGlsZCIsIl9faW5kZXgiLCJfX2tleSIsIl9fdmFsdWUiLCJfX2NvbXBhcmlzb25WYWx1ZSIsIml0ZXJhdG9yIiwiY0NvcHkiLCJjb21wYXJzaW9uIiwic2V0SW5kZXgiLCJzZXRLZXkiLCJfX3Byb21pc2VzIiwiY3JlYXRlSXRlcmF0b3JFbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwibG9vcCIsIml0ZXJhdGUiLCJvbk91dCIsIl9faXRlcmF0b3IiLCJmb3IiLCJpc0ZvciIsImNhbmNlbCIsIl9fZWwiLCJzdHJpY3QiLCJlbENvbXBvbmVudCIsImZvcmNlIiwiaW5FdmFsdWF0aW5nIiwicHJlcGFyZU9wdGlvbnMiLCJfRXZlbnQiLCJ0cmFuc2l0aW9uIiwibG9hZCIsInN0YXRlIiwicGF0aCIsImdldFBhcmVudFNjb3BlVHJhbnNpdGlvbiIsIl9fdHJhbnNpdGlvbiIsImVtcHR5IiwiZXhpc3RzIiwiVHJhbnNpdGlvbiIsInJvdXRlcyIsInN0YXRlcyIsIl9fZmluaXNlZCIsInJlZGlyZWN0Iiwicm91dGUiLCJoYXNTdGF0ZSIsInBhcmFtS2V5cyIsImZ1bGxQYXR0ZXJuIiwiX19wYXJhbVJlZ2V4IiwiZiIsInF1ZXJ5S2V5cyIsIndhdGNoSGFzaCIsInByZXZSb3V0ZSIsImdldFJvdXRlIiwicHJldiIsImZpbmlzaCIsImhhc2hNb2RlIiwiX19yZWRpcmVjdHMiLCJfX3JvdXRlU2VsZWN0b3IiLCJhZGQiLCJwYXR0ZXJuIiwiZGVmYXVsdE9wdGlvbnMiLCJhYnN0cmFjdCIsInNldFN0YXRlIiwiZ2V0U3RhdGUiLCJtYW51YWwiLCJwcmVwYXJlU3RhdGVBcmdzIiwiY3JlYXRlU3RhdGVVcmwiLCJiYWNrIiwiaGlzdG9yeSIsImdvIiwiZm9yd2FyZCIsImxvY2F0aW9uIiwiZGVmYXVsdFVybCIsIm9sZFB1c2hTdGF0ZSIsInB1c2hTdGF0ZSIsImVycm9yIiwiX19vblN0YXRlQ2hhbmdlSGFuZGxlciIsImluaXRTdGF0ZSIsInBhcmVudE5hbWUiLCJzcGxpdFNsYXNoZXMiLCJyZW1vdmVTdGF0ZSIsInNldEhhc2hVcmwiLCJzZXRIaXN0b3J5VXJsIiwicmVwbGFjZVVybCIsInJlcGxhY2VIYXNoVXJsIiwicmVwbGFjZUhpc3RvcnlVcmwiLCJyZXBsYWNlU3RhdGUiLCJnZXRVcmwiLCJnZXRIYXNoVXJsIiwiZ2V0SGlzdG9yeVVybCIsInBhdGhuYW1lIiwic2VhcmNoIiwiZ2V0VXJsUXVlcnkiLCJnZXRIYXNoVXJsUXVlcnkiLCJnZXRIaXN0b3J5VXJsUXVlcnkiLCJwYXJhbXNGcm9tUXVlcnkiLCJwcmVwYXJlIiwicGFyYW1zVGVtcCIsInByZXBhcmVTdGF0ZVBhcmFtcyIsInF1ZXJ5VGVtcCIsInByZXBhcmVTdGF0ZVF1ZXJ5IiwiaGFzaFRlbXAiLCJwcmVwYXJlU3RhdGVIYXNoIiwiZW1wdHlIYXNoIiwiY3JlYXRlU3RhdGVBcmdzIiwiZXhjbHVkZWQiLCJnZXRQYXR0ZXJuQ29udGVudCIsInVybFBhdHRlcm4iLCJyZWdleCIsImlzSW5jbHVkZWQiLCJpc0FjdGl2ZVN0YXRlIiwiaW5jbHVkZXMiLCJfX2ZpbmlzaGVkIiwiaW5BY3RpdmVTdGF0ZSIsImdldEFycmF5UGF0dGVybkNvbnRlbnQiLCJnZXRTdGF0ZXNCeUxldmVsIiwicmVsb2FkIiwicHJldlRyYW5zaXRpb24iLCJzZXRQYXRoIiwicmVhbFVybCIsImlzRGlmZmVyZW50IiwiaXNSb3V0ZUNoYW5nZWQiLCJ0aXRsZSIsImxvYWRlZCIsInNldFRyYW5zaXRpb24iLCJzYXZlU2Nyb2xsUG9zaXRpb24iLCJzY3JvbGxUbyIsIkVsc2VJZiIsIkVsc2UiLCJhY3RpdmUiLCJyZWNyZWF0ZSIsImlzQ29tcGlsZWQiLCJkaXNwbGF5IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInNldFJlY3JlYXRpb24iLCJjb21waWxhdGlvbiIsIm5leHRFbGVtZW50U2libGluZyIsInNldEFjdGl2aXR5Iiwic2V0UHJvcGVydHkiLCJPcHRpb24iLCJpdGVyYXRvclRhZ05hbWUiLCJpc011bHRpcGxlIiwiZ2V0Q29udGVudCIsInNldE11bHRpcGxlIiwic2V0Q29udGVudCIsImRyYXdTZWxlY3QiLCJjaGFuZ2VWYWx1ZSIsImZvcm1hdFZhbHVlIiwic2VsZWN0ZWQiLCJvcHRpb24iLCJzZWxlY3Rpb24iLCJyZWRlZmluZSIsIm9uQ2hhbmdlIiwiZGlzcGF0Y2giLCJFdmVudCIsInNldFNlbGVjdGVkIiwiaXNDaGVja2JveCIsImlzUmFkaW8iLCJzZXRDaGVja2VkIiwiY2hlY2tlZCIsImNoYW5nZVJhZGlvIiwicmFkaW8iLCJSYWRpb0J1dHRvbiIsIml0ZXJhYmxlIiwiZ2V0UmFkaW9WYWx1ZSIsInByZXZWYWx1ZSIsIm9uUmFkaW8iLCJzZXROYW1lcyIsImlzVHJ1ZSIsImlzU2VsZWN0ZWQiLCJyYW5nZSIsImNyZWF0ZVJhbmdlIiwiZ2V0U2VsZWN0aW9uIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwiY29sbGFwc2UiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsImNvbm5lY3Rpb24iLCJzZXRDYWNoZSIsImFib3J0Iiwib25Mb2FkIiwib25FcnJvciIsImlzVXJsIiwicHJldmVudERlZmF1bHQiLCJvblN0YXRlQ2hhbmdlZCIsInNldFBhcmFtcyIsInNldFF1ZXJ5Iiwic2V0SGFzaCIsInNldE9wdGlvbnMiLCJyZXNldEhyZWYiLCJocmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LGNBQVAsQ0FBc0IsS0FBS2xDLEtBQTNCLEVBQWtDLEtBQUtsRyxNQUF2QyxFQUErQyxLQUFLbUMsS0FBcEQsRUFBMkQsS0FBSzlMLElBQWhFLEVBQXNFLEtBQUtsYSxPQUEzRSxDQUFsQjtBQUNEO0FBQ0Y7Ozs7RUFsSDRCb0IsbUI7O0FBQVZHLEMsQ0FDWjRHLE8sR0FBVSx1QztBQURFNUcsQyxDQUVaOFYsaUIsR0FBb0IsSTtrQkFGUjlWLEMiLCJmaWxlIjoiYWtpbGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxNmU0YWUyNzM4Yjc0NDlkNmYyZiIsIi8qKlxuICogSmF2YXNjcmlwdCBmcmFtZXdvcmtcbiAqXG4gKiBjb25zdCBBa2lsaSA9IG1ha2VJdEVhc3koanMgKyBodG1sKTtcbiAqXG4gKiBAYXV0aG9yIEFsZXhhbmRyIEJhbGFzeWFuIDxteXdlYnN0cmVldEBnbWFpbC5jb20+XG4gKiBAbGluayBodHRwOi8vYWtpbGlqcy5jb21cbiAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50LmpzJztcbmltcG9ydCBJZiBmcm9tICcuL2NvbXBvbmVudHMvaWYuanMnO1xuaW1wb3J0IEZvciBmcm9tICcuL2NvbXBvbmVudHMvZm9yLmpzJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdC5qcyc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9jb21wb25lbnRzL2lucHV0LmpzJztcbmltcG9ydCBSYWRpbyBmcm9tICcuL2NvbXBvbmVudHMvcmFkaW8uanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9jb21wb25lbnRzL3RleHQuanMnO1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJy4vY29tcG9uZW50cy90ZXh0YXJlYS5qcyc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuL2NvbXBvbmVudHMvY29udGVudC5qcyc7XG5pbXBvcnQgSW5jbHVkZSBmcm9tICcuL2NvbXBvbmVudHMvaW5jbHVkZS5qcyc7XG5pbXBvcnQgSWZyYW1lIGZyb20gJy4vY29tcG9uZW50cy9pZnJhbWUuanMnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vY29tcG9uZW50cy9pbWFnZS5qcyc7XG5pbXBvcnQgRW1iZWQgZnJvbSAnLi9jb21wb25lbnRzL2VtYmVkLmpzJztcbmltcG9ydCBBdWRpbyBmcm9tICcuL2NvbXBvbmVudHMvYXVkaW8uanMnO1xuaW1wb3J0IFZpZGVvIGZyb20gJy4vY29tcG9uZW50cy92aWRlby5qcyc7XG5pbXBvcnQgVHJhY2sgZnJvbSAnLi9jb21wb25lbnRzL3RyYWNrLmpzJztcbmltcG9ydCBTb3VyY2UgZnJvbSAnLi9jb21wb25lbnRzL3NvdXJjZS5qcyc7XG5pbXBvcnQgT2JqZWN0cyBmcm9tICcuL2NvbXBvbmVudHMvb2JqZWN0LmpzJztcbmltcG9ydCBSb3V0ZSBmcm9tICcuL2NvbXBvbmVudHMvcm91dGUuanMnO1xuaW1wb3J0IFVybCBmcm9tICcuL2NvbXBvbmVudHMvdXJsLmpzJztcbmltcG9ydCBBIGZyb20gJy4vY29tcG9uZW50cy9hLmpzJztcbmltcG9ydCBTY29wZSBmcm9tICcuL3Njb3BlLmpzJztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4vc2VydmljZXMvcm91dGVyLmpzJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3NlcnZpY2VzL3N0b3JlLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCBnbG9iYWxzIGZyb20gJy4vZ2xvYmFscy5qcyc7XG5cbi8qKlxuICogVGhlIGZyYW1ld29yayBvYmplY3RcbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9nZXR0aW5nLXN0YXJ0ZWR9XG4gKi9cbmNvbnN0IEFraWxpID0ge307XG5cbkFraWxpLl9fZGVmYXVsdHMgPSBbXTtcblxuLyoqXG4gKiBTZXQgdGhlIGZyYW1ld29yaydzIGRlZmF1bHQgdmFyaWFibGVzXG4gKi9cbkFraWxpLnNldERlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgZGVidWc6IHRydWVcbiAgfTtcbiAgXG4gIHRoaXMuX19pbml0ID0gbnVsbDtcbiAgdGhpcy5fX2NsZWFyZWQgPSBmYWxzZTtcbiAgdGhpcy5fX2NvbXBvbmVudHMgPSB7fTtcbiAgdGhpcy5fX2FsaWFzZXMgPSB7fTtcbiAgdGhpcy5fX3Njb3BlcyA9IHt9O1xuICB0aGlzLl9fc3RvcmVMaW5rcyA9IHt9O1xuICB0aGlzLl9fd2luZG93ID0ge307XG4gIHRoaXMuX19pc29sYXRpb24gPSBudWxsO1xuICB0aGlzLl9fZXZhbHVhdGlvbiA9IG51bGw7XG4gIHRoaXMuX193cmFwcGluZyA9IGZhbHNlO1xuICB0aGlzLl9fb25FcnJvciA9ICgpID0+IHRoaXMudHJpZ2dlckluaXQoZmFsc2UpO1xuICBcbiAgdGhpcy5odG1sQm9vbGVhbkF0dHJpYnV0ZXMgPSBbXG4gICAgJ2Rpc2FibGVkJywgJ2NvbnRlbnRlZGl0YWJsZScsICdoaWRkZW4nXG4gIF07XG5cbiAgZm9yKGxldCBrZXkgaW4gZ2xvYmFscykge1xuICAgIGRlbGV0ZSBnbG9iYWxzW2tleV07XG4gIH1cblxuICBnbG9iYWxzLnV0aWxzID0gdXRpbHM7XG5cbiAgdGhpcy5jb21wb25lbnRzID0ge307XG4gIHRoaXMuc2VydmljZXMgPSB7fTtcblxuICB0aGlzLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbiAgdGhpcy5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG4gIHRoaXMuU2NvcGUgPSBTY29wZTtcbiAgdGhpcy51dGlscyA9IHV0aWxzO1xuICB0aGlzLmdsb2JhbHMgPSBnbG9iYWxzO1xuICB0aGlzLmNvbXBvbmVudHMuQSA9IEE7XG4gIHRoaXMuY29tcG9uZW50cy5BdWRpbyA9IEF1ZGlvO1xuICB0aGlzLmNvbXBvbmVudHMuQ29udGVudCA9IENvbnRlbnQ7XG4gIHRoaXMuY29tcG9uZW50cy5Gb3IgPSBGb3I7XG4gIHRoaXMuY29tcG9uZW50cy5FbWJlZCA9IEVtYmVkO1xuICB0aGlzLmNvbXBvbmVudHMuSWYgPSBJZjtcbiAgdGhpcy5jb21wb25lbnRzLkluY2x1ZGUgPSBJbmNsdWRlO1xuICB0aGlzLmNvbXBvbmVudHMuSW5wdXQgPSBJbnB1dDtcbiAgdGhpcy5jb21wb25lbnRzLklmcmFtZSA9IElmcmFtZTtcbiAgdGhpcy5jb21wb25lbnRzLkltYWdlID0gSW1hZ2U7XG4gIHRoaXMuY29tcG9uZW50cy5PYmplY3QgPSBPYmplY3RzO1xuICB0aGlzLmNvbXBvbmVudHMuUmFkaW8gPSBSYWRpbztcbiAgdGhpcy5jb21wb25lbnRzLlJvdXRlID0gUm91dGU7XG4gIHRoaXMuY29tcG9uZW50cy5TZWxlY3QgPSBTZWxlY3Q7XG4gIHRoaXMuY29tcG9uZW50cy5Tb3VyY2UgPSBTb3VyY2U7XG4gIHRoaXMuY29tcG9uZW50cy5UZXh0ID0gVGV4dDtcbiAgdGhpcy5jb21wb25lbnRzLlRleHRhcmVhID0gVGV4dGFyZWE7XG4gIHRoaXMuY29tcG9uZW50cy5UcmFjayA9IFRyYWNrO1xuICB0aGlzLmNvbXBvbmVudHMuVXJsID0gVXJsO1xuICB0aGlzLmNvbXBvbmVudHMuVmlkZW8gPSBWaWRlbztcbiAgdGhpcy5zZXJ2aWNlcy5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgdGhpcy5zZXJ2aWNlcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIHRoaXMuc2VydmljZXMuc3RvcmUgPSBzdG9yZTtcblxuICB0aGlzLmRlZmluZSgpO1xuICB0aGlzLmVycm9ySGFuZGxpbmcoKTtcbiAgdGhpcy5pc29sYXRlRXZlbnRzKCk7XG4gIHRoaXMuaXNvbGF0ZUFycmF5UHJvdG90eXBlKCk7XG4gIHRoaXMuaXNvbGF0ZVdpbmRvd0Z1bmN0aW9ucygpOyBcbiAgXG4gIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLl9fZGVmYXVsdHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdGhpcy5fX2RlZmF1bHRzW2ldKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEZWZpbmUgYWxsIGRlZmF1bHQgY29tcG9uZW50c1xuICovXG5Ba2lsaS5kZWZpbmUgPSBmdW5jdGlvbiAoKSB7XG4gIEEuZGVmaW5lKCk7XG4gIEF1ZGlvLmRlZmluZSgpO1xuICBDb250ZW50LmRlZmluZSgpO1xuICBDb21wb25lbnQuZGVmaW5lKCk7XG4gIEVtYmVkLmRlZmluZSgpO1xuICBGb3IuZGVmaW5lKCk7XG4gIEluY2x1ZGUuZGVmaW5lKCk7XG4gIElmcmFtZS5kZWZpbmUoKTtcbiAgSW1hZ2UuZGVmaW5lKCk7XG4gIElucHV0LmRlZmluZSgpO1xuICBJZi5kZWZpbmUoKTtcbiAgT2JqZWN0cy5kZWZpbmUoKTtcbiAgUmFkaW8uZGVmaW5lKCk7XG4gIFJvdXRlLmRlZmluZSgpO1xuICBTZWxlY3QuZGVmaW5lKCk7XG4gIFNvdXJjZS5kZWZpbmUoKTtcbiAgVGV4dGFyZWEuZGVmaW5lKCk7XG4gIFRyYWNrLmRlZmluZSgpO1xuICBWaWRlby5kZWZpbmUoKTtcbn07XG5cbi8qKlxuICogU2V0IGRlZmF1bHRzXG4gKiBcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIFxuICovXG5Ba2lsaS5kZWZhdWx0cyA9IGZ1bmN0aW9uIChmbikgeyAgXG4gIHRoaXMuX19kZWZhdWx0cy5wdXNoKGZuKTtcbiAgZm4oKTtcbn1cblxuLyoqXG4gKiBDbGVhciB0aGUgZ2xvYmFsIGNvbnRleHRcbiAqL1xuQWtpbGkuY2xlYXJHbG9iYWxzID0gZnVuY3Rpb24gKCkge1xuICBpZih0aGlzLl9fY2xlYXJlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGZvciAobGV0IGtleSBpbiB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlKSB7XG4gICAgRWxlbWVudC5wcm90b3R5cGVba2V5XSA9IHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGVba2V5XTtcbiAgfVxuXG4gIGZvciAobGV0IGtleSBpbiB0aGlzLl9fd2luZG93LkFycmF5LnByb3RvdHlwZSkge1xuICAgIEFycmF5LnByb3RvdHlwZVtrZXldID0gdGhpcy5fX3dpbmRvdy5BcnJheS5wcm90b3R5cGVba2V5XTtcbiAgfVxuXG4gIGZvcihsZXQga2V5IGluIHRoaXMub3B0aW9ucy5nbG9iYWxzKSB7XG4gICAgdGhpcy5vcHRpb25zLmdsb2JhbHNba2V5XSA9IHRoaXMudW53cmFwKHRoaXMub3B0aW9ucy5nbG9iYWxzW2tleV0pO1xuICB9XG5cbiAgd2luZG93LnNldFRpbWVvdXQgPSB0aGlzLl9fd2luZG93LnNldFRpbWVvdXQ7XG4gIHdpbmRvdy5zZXRJbnRlcnZhbCA9IHRoaXMuX193aW5kb3cuc2V0SW50ZXJ2YWw7XG4gIHdpbmRvdy5Qcm9taXNlID0gdGhpcy5fX3dpbmRvdy5Qcm9taXNlO1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCB0aGlzLl9fb25FcnJvcik7XG4gIHRoaXMuX19jbGVhcmVkID0gdHJ1ZTtcbn07XG5cbi8qKlxuICogSm9pbiBiaW5kaW5nIGtleXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIGJpbmRpbmcga2V5c1xuICovXG5Ba2lsaS5qb2luQmluZGluZ0tleXMgPSBmdW5jdGlvbiAoa2V5cykge1xuICByZXR1cm4ga2V5cy5tYXAoZWwgPT4gZWwudG9TdHJpbmcoKSkuam9pbignLicpO1xufTtcblxuLyoqXG4gKiBBZGQgc2NvcGUgdG8gdGhlIHNjb3BlcyBsaXN0XG4gKlxuICogQHBhcmFtIHNjb3BlXG4gKi9cbkFraWxpLmFkZFNjb3BlID0gZnVuY3Rpb24gKHNjb3BlKSB7XG4gIGlmICh0aGlzLl9fc2NvcGVzW3Njb3BlLl9fbmFtZV0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFNjb3BlIG5hbWUgJHtzY29wZS5fX25hbWV9IGFscmVhZHkgZXhpc3RzYCk7XG4gIH1cblxuICB0aGlzLl9fc2NvcGVzW3Njb3BlLl9fbmFtZV0gPSBzY29wZTtcbn07XG5cbi8qKlxuICogR2V0IHNjb3BlIGZyb20gdGhlIHNjb3BlcyBsaXN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzY29wZSBuYW1lXG4gKiBAcmV0dXJucyB7U2NvcGV9XG4gKi9cbkFraWxpLmdldFNjb3BlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuX19zY29wZXNbbmFtZV07XG59O1xuXG4vKipcbiAqIERlbGV0ZSBzY29wZSBmcm9tIHRoZSBzY29wZXMgbGlzdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc2NvcGUgbmFtZVxuICovXG5Ba2lsaS5yZW1vdmVTY29wZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHRoaXMuX19zY29wZXNbbmFtZV0gPSBudWxsO1xuICBkZWxldGUgdGhpcy5fX3Njb3Blc1tuYW1lXTtcbn07XG5cbi8qKlxuICogR2V0IGFsbCBlbGVtZW50cyB3aXRoIGF0dGFjaGVkIEFraWxpIGNvbXBvbmVudHNcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFt0cmVlPXRydWVdIC0gcmV0dXJuIGFycmF5IG9mIHRoZSBwYXJlbnRzIGlmIHRydWUsIGNsb3Nlc3QgcGFyZW50IGlmIGZhbHNlXG4gKiBAcmV0dXJucyB7QXJyYXl8RWxlbWVudHxudWxsfVxuICovXG5Ba2lsaS5nZXRBa2lsaVBhcmVudHMgPSBmdW5jdGlvbiAoZWwsIHRyZWUgPSB0cnVlKSB7XG4gIGxldCBhcnIgPSBbXTtcblxuICBmdW5jdGlvbiBjaGVjayhub2RlKSB7XG4gICAgaWYgKCFub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5wYXJlbnROb2RlLl9fYWtpbGkpIHtcbiAgICAgIGFyci5wdXNoKG5vZGUucGFyZW50Tm9kZSk7XG5cbiAgICAgIGlmICghdHJlZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2sobm9kZS5wYXJlbnROb2RlKTtcbiAgfVxuXG4gIGNoZWNrKGVsKTtcbiAgcmV0dXJuIHRyZWU/IGFycjogYXJyWzBdO1xufTtcblxuLyoqXG4gKiBTZXQgZWxlbWVudCBpbm5lciBodG1sIHdpdGggY29udGVudCByZXBsYWNlbWVudFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwiPGk+SGVsbG88L2k+PGI+V29ybGQ8L2I+XCJcbiAqIGVsLmlubmVySFRNTCA9IFwiPGI+V29ybGQ8L2I+XCI7XG4gKiBBa2lsaS5zZXRUZW1wbGF0ZShlbCwgXCI8aT5IZWxsbzwvaT4ke3RoaXMuX19jaGlsZHJlbn1cIik7XG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5Ba2lsaS5zZXRUZW1wbGF0ZSA9IGZ1bmN0aW9uIChlbCwgdGVtcGxhdGUpIHtcbiAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKC9cXCR7KCgoPyFcXCR7KVxccyp0aGlzXFwuX19jb250ZW50XFxzKikqKX0vLCBlbC5pbm5lckhUTUwpO1xuICBlbC5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcblxuICByZXR1cm4gZWwuaW5uZXJIVE1MO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSB1bmlxdWUgc2NvcGUgbmFtZVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbkFraWxpLmNyZWF0ZVNjb3BlTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHV0aWxzLmNyZWF0ZVJhbmRvbVN0cmluZygxNiwgKHN0cikgPT4ge1xuICAgIHJldHVybiAhIXRoaXMuX19zY29wZXNbc3RyXTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIElzb2xhdGUgZnVuY3Rpb24uXG4gKiBFdmVyeSBzY29wZSB2YXJpYWJsZSBjaGFuZ2UgY2FsbHMgYWNjb3JkaW5nIG5vZGUgZXZhbHVhdGlvbi5cbiAqIEZvciBleGFtcGxlLCBpZiB5b3UgY2hhbmdlIHNvbWUgc2NvcGUgdmFyaWFibGUgaW4gdGhlIGxvb3AgLSBldmFsdWF0aW9uIHdpbGwgYmUgY2FsbGVkIG9uIHRoZSBlYWNoIGNoYW5nZS5cbiAqIEl0IG1heSBiZSBzbG93IGZvciB0aGUgYXBwbGljYXRpb24uXG4gKiBZb3UgY2FuIGlzb2xhdGUgdGhpcyBhY3Rpb24gYW5kIHJ1biBhbGwgZXZhbHVhdGlvbiBwcm9jZXNzIGFmdGVyIHBhc3NlZCBmdW5jdGlvbiBhdCBvbmNlLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkuaXNvbGF0ZSA9IGZ1bmN0aW9uIChmbikgeyBcbiAgaWYgKHRoaXMuX19pc29sYXRpb24pIHtcbiAgICByZXR1cm4gZm4oKTtcbiAgfVxuXG4gIHRoaXMuX19pc29sYXRpb24gPSB7fTtcbiAgbGV0IHJlcyA9IGZuKCk7XG4gIGxldCBwcm9wcyA9IFtdO1xuXG4gIGZvciAobGV0IGsgaW4gdGhpcy5fX2lzb2xhdGlvbikge1xuICAgIGlmICghdGhpcy5fX2lzb2xhdGlvbi5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcHJvcHMucHVzaCh0aGlzLl9faXNvbGF0aW9uW2tdKTtcbiAgfVxuXG4gIHRoaXMuX19pc29sYXRpb24gPSBudWxsO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gcHJvcHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgY29uc3QgcHJvcCA9IHByb3BzW2ldO1xuICAgIGNvbnN0IHZhbCA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKHByb3Aua2V5cywgcHJvcC5jb21wb25lbnQuX19zY29wZSk7ICAgIFxuICAgIHByb3AuY29tcG9uZW50Ll9faXNSZXNvbHZlZCAmJiBwcm9wLmNvbXBvbmVudC5fX3RyaWdnZXJTdG9yZUFuZEF0dHIocHJvcC5rZXlzLCB2YWwpO1xuICAgIHByb3AuY29tcG9uZW50Ll9fZXZhbHVhdGVCeUtleXMocHJvcC5rZXlzLCB2YWwsIHByb3AuaXNEZWxldGVkKTtcbiAgfVxuXG4gIHByb3BzID0gbnVsbDtcbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogU3RvcCBldmFsdWF0aW9uIGJlZm9yZSB0aGUgZnVuY3Rpb24gYW5kIGNvbnRpbnVlIGFmdGVyXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS51bmV2YWx1YXRlID0gZnVuY3Rpb24gKGZuKSB7XG4gIGxldCBldmFsdWF0aW9uID0gdGhpcy5fX2V2YWx1YXRpb247XG4gIGxldCByZXM7XG4gIHRoaXMuX19ldmFsdWF0aW9uID0gbnVsbDtcbiAgcmVzID0gZm4oKTtcbiAgdGhpcy5fX2V2YWx1YXRpb24gPSBldmFsdWF0aW9uO1xuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBFdmFsdWF0ZSBvbmx5IHJvb3QgcHJvcGVydGllc1xuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkud3JhcHBpbmcgPSBmdW5jdGlvbiAoZm4pIHtcbiAgaWYodGhpcy5fX3dyYXBwaW5nKSB7XG4gICAgcmV0dXJuIGZuKCk7XG4gIH1cbiAgXG4gIHRoaXMuX193cmFwcGluZyA9IHRydWU7XG4gIGxldCByZXMgPSBmbigpOyAgXG4gIHRoaXMuX193cmFwcGluZyA9IGZhbHNlOyAgXG4gIHJldHVybiByZXM7ICAgXG59XG5cbi8qKlxuICogU3RvcCBpc29sYXRpb24gYmVmb3JlIHRoZSBmdW5jdGlvbiBhbmQgY29udGludWUgYWZ0ZXJcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLnVuaXNvbGF0ZSA9IGZ1bmN0aW9uIChmbikge1xuICBsZXQgaXNvbGF0aW9uID0gdGhpcy5fX2lzb2xhdGlvbjtcbiAgbGV0IHJlcztcbiAgdGhpcy5fX2lzb2xhdGlvbiA9IG51bGw7XG4gIHJlcyA9IGZuKCk7XG4gIHRoaXMuX19pc29sYXRpb24gPSBpc29sYXRpb247XG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIFJ1biB0aGUgZnVuY3Rpb24gb24gdGhlIG5leHQgdGlja1xuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuQWtpbGkubmV4dFRpY2sgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMpID0+IHNldFRpbWVvdXQoKCkgPT4gUHJvbWlzZS5yZXNvbHZlKGZuKCkpLnRoZW4ocmVzKSkpO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnM9e31dXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChlbCwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCByZWNvbXBpbGUgPSBvcHRpb25zLnJlY29tcGlsZTtcbiAgbGV0IGNvbXBvbmVudCA9IGVsLl9fYWtpbGk7XG5cbiAgaWYgKGNvbXBvbmVudCkge1xuICAgIGlmIChyZWNvbXBpbGUpIHtcbiAgICAgIGNvbXBvbmVudC5fX3JlY29tcGlsZShyZWNvbXBpbGUgPT09IHRydWU/IHt9OiByZWNvbXBpbGUpO1xuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgaXNSb290ID0gZWwgPT09IHRoaXMuX19yb290O1xuICBsZXQgY29tcG9uZW50TmFtZSA9IHV0aWxzLnRvRGFzaENhc2UoZWwuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKSB8fCBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpO1xuICBsZXQgX0NvbXBvbmVudCA9IHRoaXMuX19jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdO1xuXG4gIENIRUNLX0FMSUFTRVM6IGlmICghX0NvbXBvbmVudCkge1xuICAgIGxldCBzZWxlY3RvcnMgPSBPYmplY3Qua2V5cyh0aGlzLl9fYWxpYXNlcyk7XG5cbiAgICBpZiAoIXNlbGVjdG9ycy5sZW5ndGgpIHtcbiAgICAgIGJyZWFrIENIRUNLX0FMSUFTRVM7XG4gICAgfVxuXG4gICAgbGV0IHNlbGVjdG9yQWxsID0gc2VsZWN0b3JzLmpvaW4oJywnKTtcblxuICAgIGlmICghZWwubWF0Y2hlcyhzZWxlY3RvckFsbCkpIHtcbiAgICAgIGJyZWFrIENIRUNLX0FMSUFTRVM7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBzZWxlY3RvcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgc2VsZWN0b3IgPSBzZWxlY3RvcnNbaV07XG5cbiAgICAgIGlmIChlbC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBfQ29tcG9uZW50ID0gdGhpcy5fX2NvbXBvbmVudHNbdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKCFfQ29tcG9uZW50ICYmICFpc1Jvb3QpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIV9Db21wb25lbnQpIHtcbiAgICBfQ29tcG9uZW50ID0gdGhpcy5Db21wb25lbnQ7XG4gIH1cblxuICBpZiAoX0NvbXBvbmVudC5tYXRjaGVzICYmICFlbC5tYXRjaGVzKF9Db21wb25lbnQubWF0Y2hlcykpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb21wb25lbnQgPSBuZXcgX0NvbXBvbmVudChlbCwge30pOyAgXG4gIFxuICBpZiAoY29tcG9uZW50Ll9fY2FuY2VsbGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYoQWtpbGkuZ2V0QWtpbGlQYXJlbnRzKGVsKS5maW5kKHAgPT4gcC5fX2FraWxpLl9fcHJldmVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb21wb25lbnQuX19jcmVhdGUoKTtcbiAgcmV0dXJuIGNvbXBvbmVudDtcbn07XG5cbi8qKlxuICogQ29tcGlsZSB0aGUgZWxlbWVudFxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbkFraWxpLmNvbXBpbGUgPSBmdW5jdGlvbiAocm9vdCwgb3B0aW9ucyA9IHsgcmVjb21waWxlOiBmYWxzZSB9KSB7ICBcbiAgbGV0IGVsZW1lbnRzID0gW107XG5cbiAgY29uc3QgbmVzdGVkSW5pdGlhbGl6aW5nID0gKGVsKSA9PiB7XG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXMuaW5pdGlhbGl6ZShlbCwgb3B0aW9ucyk7XG4gICAgbGV0IGNoaWxkcmVuID0gZWwuY2hpbGRyZW47XG4gICAgY29tcG9uZW50ICYmIGVsZW1lbnRzLnB1c2goY29tcG9uZW50KTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5lc3RlZEluaXRpYWxpemluZyhjaGlsZCk7XG4gICAgfVxuICB9O1xuXG4gIG5lc3RlZEluaXRpYWxpemluZyhyb290KTtcbiAgbGV0IHAgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBjb21wb25lbnQgPSBlbGVtZW50c1tpXTtcbiAgICBwLnB1c2goY29tcG9uZW50Ll9fY29tcGlsZSgpKTtcbiAgfVxuXG4gIHJldHVybiBQcm9taXNlLmFsbChwKS50aGVuKCgpID0+IHtcbiAgICBsZXQgciA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IGVsZW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgY29tcG9uZW50ID0gZWxlbWVudHNbaV07XG4gICAgICByLnB1c2goY29tcG9uZW50Ll9fcmVzb2x2ZSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocik7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciB0aGUgY29tcG9uZW50IG9yIGdldCBpdCBpZiBmbiBpcyBub3QgcGFzc2VkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBbZm5dXG4gKi9cbkFraWxpLmNvbXBvbmVudCA9IGZ1bmN0aW9uIChuYW1lLCBmbikge1xuICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmICghZm4pIHtcbiAgICByZXR1cm4gdGhpcy5fX2NvbXBvbmVudHNbbmFtZV0gfHwgbnVsbDtcbiAgfVxuICBcbiAgaWYgKHRoaXMuX19jb21wb25lbnRzW25hbWVdICYmIEFraWxpLm9wdGlvbnMuZGVidWcpIHsgIFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKGBDb21wb25lbnQgJHtuYW1lfSBhbHJlYWR5IHdhcyBhZGRlZGApO1xuICB9XG5cbiAgdGhpcy5fX2NvbXBvbmVudHNbbmFtZV0gPSBmbjtcbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5Ba2lsaS5yZW1vdmVDb21wb25lbnQgPSBmdW5jdGlvbiAobmFtZSkge1xuICBkZWxldGUgdGhpcy5fX2NvbXBvbmVudHNbbmFtZV07XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIHRoZSBzZWxlY3RvciBhbGlhcyBvciBnZXQgaXQgaWYgY29tcG9uZW50IG5hbWUgaXMgbm90IHBhc3NlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciAtIERPTSBzZWxlY3RvclxuICogQHBhcmFtIHtzdHJpbmd9IFtjb21wb25lbnROYW1lXVxuICovXG5Ba2lsaS5hbGlhcyA9IGZ1bmN0aW9uIChzZWxlY3RvciwgY29tcG9uZW50TmFtZSA9ICcnKSB7XG4gIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYgKCFjb21wb25lbnROYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXSAmJiBBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oYEFsaWFzIHdpdGggc2VsZWN0b3IgJHtzZWxlY3Rvcn0gYWxyZWFkeSB3YXMgYWRkZWRgKTtcbiAgfVxuXG4gIHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXSA9IGNvbXBvbmVudE5hbWU7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgc2VsZWN0b3IgYWxpYXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqL1xuQWtpbGkucmVtb3ZlQWxpYXMgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgZGVsZXRlIHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSBhcnJheSBwcm90b3R5cGUgZnVuY3Rpb25zXG4gKi9cbkFraWxpLmlzb2xhdGVBcnJheVByb3RvdHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fX3dpbmRvdy5BcnJheSA9IHsgcHJvdG90eXBlOiB7fSB9O1xuXG4gIGxldCBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoQXJyYXkucHJvdG90eXBlKTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgbGV0IG9sZCA9IEFycmF5LnByb3RvdHlwZVtrZXldO1xuXG4gICAgaWYgKHR5cGVvZiBvbGQgIT0gJ2Z1bmN0aW9uJyB8fCBrZXkgPT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdGhpcy5fX3dpbmRvdy5BcnJheS5wcm90b3R5cGVba2V5XSA9IG9sZDtcblxuICAgIEFycmF5LnByb3RvdHlwZVtrZXldID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIEFraWxpLnVuZXZhbHVhdGUoKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX19pc1Byb3h5KSB7XG4gICAgICAgICAgcmV0dXJuIG9sZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiBvbGQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG59O1xuXG4vKipcbiAqIElzb2xhdGUgc29tZSB3aW5kb3cgZnVuY3Rpb25zXG4gKi9cbkFraWxpLmlzb2xhdGVXaW5kb3dGdW5jdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX193aW5kb3cuc2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gIHRoaXMuX193aW5kb3cuc2V0SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbDtcbiAgdGhpcy5fX3dpbmRvdy5Qcm9taXNlID0gd2luZG93LlByb21pc2U7XG4gIHdpbmRvdy5zZXRUaW1lb3V0ID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuc2V0VGltZW91dCwgMCk7XG4gIHdpbmRvdy5zZXRJbnRlcnZhbCA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LnNldEludGVydmFsLCAwKTtcbiAgXG4gIGlmKCF3aW5kb3cuQUtJTElfU1NSKSB7XG4gICAgd2luZG93LlByb21pc2UuY29uc3RydWN0b3IgPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5Qcm9taXNlLmNvbnN0cnVjdG9yKTtcbiAgICB3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LlByb21pc2UucHJvdG90eXBlLnRoZW4sIFswLCAnbGFzdCddKTtcbiAgICB3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2ggPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS5jYXRjaCk7XG4gIH0gIFxufTtcblxuLyoqXG4gKiBJc29sYXRlIGV2ZW50IGxpc3RlbmVyc1xuICovXG5Ba2lsaS5pc29sYXRlRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQgPSB7IHByb3RvdHlwZToge30gfTtcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcjtcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcjtcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmU7XG5cbiAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgIGRlbGV0ZSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnM7XG4gICAgcmV0dXJuIEFraWxpLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgICBsZXQgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgaWYodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhcmdzWzFdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICAgIH07XG4gICAgfSAgICBcblxuICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5wdXNoKHtcbiAgICAgIGxpbms6IGZuLFxuICAgICAgZm46IGFyZ3NbMV1cbiAgICB9KTtcblxuICAgIHJldHVybiBBa2lsaS5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgICBsZXQgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV1baV07XG5cbiAgICAgIGlmIChsaXN0ZW5lci5saW5rID09PSBmbikge1xuICAgICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICBhcmdzWzFdID0gbGlzdGVuZXIuZm47XG4gICAgICAgIGktLTtcbiAgICAgICAgbC0tO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIEFraWxpLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG59O1xuXG4vKipcbiAqIFdyYXAgdGhlIGZ1bmN0aW9uIGNhbGxiYWNrIHRvIGFuIGlzb2xhdGUgY29udGV4dFxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd8bnVtYmVyW118c3RyaW5nW119IFtwb3M9XCJsYXN0XCJdXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbkFraWxpLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uID0gZnVuY3Rpb24gKGZuLCBwb3MgPSAnbGFzdCcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAhQXJyYXkuaXNBcnJheShwb3MpICYmIChwb3MgPSBbcG9zXSk7XG4gICAgXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHBvcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBudW0gPSBwb3NbaV07XG4gICAgICBsZXQgaW5kZXggPSBudW07XG4gICAgICBsZXQgY2FsbGJhY2sgPSBhcmdzW251bV07XG5cbiAgICAgIGlmKG51bSA9PSAnbGFzdCcpIHtcbiAgICAgICAgaW5kZXggPSBhcmdzLmxlbmd0aCAtIDE7XG4gICAgICAgIGNhbGxiYWNrID0gYXJnc1tpbmRleF07XG4gICAgICB9XG5cbiAgICAgIGlmKHR5cGVvZiBjYWxsYmFjayAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZighY2FsbGJhY2suX19pc29sYXRlZCkge1xuICAgICAgICBhcmdzW2luZGV4XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiBjYWxsYmFjay5hcHBseShjYWxsYmFjaywgYXJndW1lbnRzKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFyZ3NbaW5kZXhdLCAnX19pc29sYXRlZCcsIHtcbiAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICB2YWx1ZTogY2FsbGJhY2tcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xufTtcblxuLyoqXG4gKiBXcmFwIG9iamVjdHMvY2xhc3NlcyB0byBpc29sYXRlIGFuZCB1bmV2YWx1YXRlIGRhdGFcbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gb2JqXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIFxuICovXG5Ba2lsaS53cmFwID0gZnVuY3Rpb24gKG9iaiwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBjdXJyZW50ID0gb2JqO1xuXG4gIGlmKHR5cGVvZiBvYmogPT0gJ2Z1bmN0aW9uJykge1xuICAgIG9iaiA9IHRoaXMud3JhcEZ1bmN0aW9uKG9iaiwgb3B0aW9ucyk7XG5cbiAgICBpZihvYmogPT09IGN1cnJlbnQpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICB9XG4gIGVsc2UgaWYoIW9iaiB8fCB0eXBlb2Ygb2JqICE9ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBsZXQga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaik7XG5cbiAgZm9yKGxldCBrID0gMCwgYyA9IGtleXMubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgbGV0IGtleSA9IGtleXNba107XG4gICAgbGV0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KTtcblxuICAgIGlmKCFkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSB8fCAhZGVzY3JpcHRvci53cml0YWJsZSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYob3B0aW9ucy5yZXZlcnNlKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsuLi5kZXNjcmlwdG9yLCB2YWx1ZTogb2JqW2tleV0uX19ha2lsaSB8fCBvYmpba2V5XSB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsuLi5kZXNjcmlwdG9yLCB2YWx1ZTogdGhpcy53cmFwKG9ialtrZXldLCBvcHRpb25zKSB9KTtcbiAgfSBcbiAgXG4gIHJldHVybiBvYmo7XG59O1xuXG4vKipcbiAqIFVud3JhcCBvYmplY3RzL2NsYXNzZXNcbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gb2JqXG4gKi9cbkFraWxpLnVud3JhcCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRoaXMud3JhcChvYmosIHsgcmV2ZXJzZTogdHJ1ZSB9KTtcbn1cblxuLyoqXG4gKiBJc29sYXRlIGEgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge2Z1bmN0aW9ufVxuICovXG5Ba2lsaS53cmFwRnVuY3Rpb24gPSBmdW5jdGlvbiAoZm4sIG9wdGlvbnMgPSB7fSkge1xuICBpZiAoZm4uX19ha2lsaSkge1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIGNvbnN0IGFraWxpV3JhcHBlZEZ1bmN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIGlmKG9wdGlvbnMudGFnICYmIEFraWxpLl9fZXZhbHVhdGlvbikge1xuICAgICAgQWtpbGkuX19ldmFsdWF0aW9uLmNvbXBvbmVudC5fX2FkZFRhZyhvcHRpb25zLnRhZywgQWtpbGkuX19ldmFsdWF0aW9uLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBBa2lsaS53cmFwcGluZygoKSA9PiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfTtcblxuICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGZuKTtcbiAgYWtpbGlXcmFwcGVkRnVuY3Rpb24ucHJvdG90eXBlID0gZm4ucHJvdG90eXBlO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgIGFraWxpV3JhcHBlZEZ1bmN0aW9uW2tleV0gPSBmbltrZXldO1xuICB9XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFraWxpV3JhcHBlZEZ1bmN0aW9uLCAnX19ha2lsaScsIHtcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICB2YWx1ZTogZm5cbiAgfSk7XG5cbiAgcmV0dXJuIGFraWxpV3JhcHBlZEZ1bmN0aW9uO1xufTtcblxuLyoqXG4gKiBFdmFsdWF0ZSB0aGUgdGFncyBub2RlIGV4cHJlc3Npb25zXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSB0YWdzXG4gKi9cbkFraWxpLmV2YWx1YXRlVGFnID0gZnVuY3Rpb24gKHRhZ3MpIHtcbiAgaWYoIXRoaXMucm9vdCkge1xuICAgIHJldHVybjtcbiAgfVxuICBcbiAgaWYoIUFycmF5LmlzQXJyYXkodGFncykpIHtcbiAgICB0YWdzID0gW3RhZ3NdO1xuICB9XG5cbiAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLnJvb3QuY2hpbGRyZW4oKTtcbiAgXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgIGNvbnN0IGNoaWxkVGFncyA9IGNoaWxkLl9fdGFnczsgICAgXG5cbiAgICBmb3IobGV0IGogPSAwLCBzID0gdGFncy5sZW5ndGg7IGogPCBzOyBqKyspIHtcbiAgICAgIGNvbnN0IHRhZyA9IHRhZ3Nbal07XG4gICAgICBcbiAgICAgIGlmKCFjaGlsZFRhZ3NbdGFnXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgXG4gICAgICBmb3IobGV0IGsgPSAwLCBjID0gY2hpbGRUYWdzW3RhZ10ubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IGNoaWxkVGFnc1t0YWddW2tdO1xuICAgICAgICBjaGlsZC5fX2V2YWx1YXRlTm9kZShvYmoubm9kZSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSAgXG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSB0YWdzXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSB0YWdzXG4gKi9cbkFraWxpLnJlbW92ZVRhZyA9IGZ1bmN0aW9uICh0YWdzKSB7XG4gIGlmKCF0aGlzLnJvb3QpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIGlmKCFBcnJheS5pc0FycmF5KHRhZ3MpKSB7XG4gICAgdGFncyA9IFt0YWdzXTtcbiAgfVxuXG4gIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5yb290LmNoaWxkcmVuKCk7XG4gIFxuICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbltpXTsgXG5cbiAgICBmb3IobGV0IGogPSAwLCBzID0gdGFncy5sZW5ndGg7IGogPCBzOyBqKyspIHtcbiAgICAgIGNoaWxkLl9fcmVtb3ZlVGFnKHRhZ3Nbal0pO1xuICAgIH1cbiAgfSAgXG59XG5cbi8qKlxuICogRXJyb3IgaGFuZGxpbmdcbiAqL1xuQWtpbGkuZXJyb3JIYW5kbGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgdGhpcy5fX29uRXJyb3IpO1xufTtcblxuLyoqXG4gKiBUcmlnZ2VyIGFuIGluaXRpYWxpemF0aW9uIHN0YXR1c1xuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc3RhdHVzXG4gKi9cbkFraWxpLnRyaWdnZXJJbml0ID0gZnVuY3Rpb24gKHN0YXR1cykge1xuICBBa2lsaS5fX2luaXQgPSBzdGF0dXM7XG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnYWtpbGktaW5pdCcsIHsgZGV0YWlsOiBzdGF0dXMgfSkpO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBhcHBsaWNhdGlvblxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gW3Jvb3RdXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuQWtpbGkuaW5pdCA9IGZ1bmN0aW9uIChyb290KSB7XG4gIHJvb3QgPSByb290IHx8IGRvY3VtZW50LmJvZHk7XG5cbiAgaWYoIShyb290IGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFJvb3QgZWxlbWVudCBtdXN0IGJlIGFuIGh0bWwgZWxlbWVudGApO1xuICB9XG5cbiAgaWYocm9vdCA9PT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBcImh0bWxcIiBjYW4ndCBiZSB0aGUgcm9vdCBlbGVtZW50YCk7XG4gIH1cblxuICB0aGlzLl9fcm9vdCA9IHJvb3Q7XG4gIFxuICBpZih3aW5kb3cuQUtJTElfU0VSVkVSKSB7ICAgIFxuICAgIEFraWxpLmluaXRTZXJ2ZXJTaWRlSHRtbCh3aW5kb3cuQUtJTElfU0VSVkVSLmh0bWwpO1xuICAgIEFraWxpLmluaXRTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlKHdpbmRvdy5BS0lMSV9TRVJWRVIucmVxdWVzdENhY2hlKTtcbiAgfVxuICBlbHNlIHtcbiAgICB3aW5kb3cuQUtJTElfQ0xJRU5UID0ge1xuICAgICAgaHRtbDogdGhpcy5wcmVwYXJlU2VydmVyU2lkZUh0bWwoKSAgICAgIFxuICAgIH1cbiAgfVxuXG4gIGZvcihsZXQga2V5IGluIHRoaXMub3B0aW9ucy5nbG9iYWxzKSB7XG4gICAgdGhpcy5vcHRpb25zLmdsb2JhbHNba2V5XSA9IHRoaXMud3JhcCh0aGlzLm9wdGlvbnMuZ2xvYmFsc1trZXldLCB7IHRhZzogYGdsb2JhbHMuJHtrZXl9YCB9KTtcbiAgfVxuICBcbiAgcmV0dXJuIHRoaXMuY29tcGlsZSh0aGlzLl9fcm9vdCkudGhlbigoKSA9PiB7XG4gICAgaWYgKHJvdXRlci5fX2luaXQpIHtcbiAgICAgIHJldHVybiByb3V0ZXIuY2hhbmdlU3RhdGUoKTtcbiAgICB9XG4gIH0pLnRoZW4oKCkgPT4geyAgICBcbiAgICB3aW5kb3cuQUtJTElfQ0xJRU5UICYmICh3aW5kb3cuQUtJTElfQ0xJRU5ULnJlcXVlc3RDYWNoZSA9IHRoaXMucHJlcGFyZVNlcnZlclNpZGVSZXF1ZXN0Q2FjaGUoKSk7XG4gICAgdGhpcy50cmlnZ2VySW5pdCh0cnVlKTtcbiAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgIHRoaXMudHJpZ2dlckluaXQoZmFsc2UpO1xuICAgIHRocm93IGVycjtcbiAgfSk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgc2VydmVyLXNpZGUgcmVuZGVyaW5nIGh0bWxcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqL1xuQWtpbGkuaW5pdFNlcnZlclNpZGVIdG1sID0gZnVuY3Rpb24gKGh0bWwpIHtcbiAgZm9yIChsZXQgaSA9IHRoaXMuX19yb290LmF0dHJpYnV0ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgIHRoaXMuX19yb290LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLl9fcm9vdC5hdHRyaWJ1dGVzW2ldLm5hbWUpO1xuICB9XG5cbiAgbGV0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgbGV0IGRvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbCwgXCJ0ZXh0L2h0bWxcIik7XG4gIGxldCBlbCA9IGRvYy5xdWVyeVNlbGVjdG9yKHRoaXMuX19yb290ID09PSBkb2N1bWVudC5ib2R5PyAnYm9keSc6ICdib2R5ID4gKicpOyAgICBcbiAgdGhpcy5fX3Jvb3QuaW5uZXJIVE1MID0gZWwuaW5uZXJIVE1MO1xuXG4gIGZvciAobGV0IGkgPSBlbC5hdHRyaWJ1dGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgbGV0IGF0dHIgPSBlbC5hdHRyaWJ1dGVzW2ldO1xuICAgIHRoaXMuX19yb290LnNldEF0dHJpYnV0ZShhdHRyLm5hbWUsIGF0dHIudmFsdWUpO1xuICB9ICBcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIHNlcnZlci1zaWRlIHJlbmRlcmluZyByZXF1ZXN0IGNhY2hlXG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqL1xuQWtpbGkuaW5pdFNlcnZlclNpZGVSZXF1ZXN0Q2FjaGUgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGNvbnN0IGluaXQgPSAoaW5zdGFuY2UsIG9iaikgPT4ge1xuICAgIGZvcihsZXQga2V5IGluIG9iaikge1xuICAgICAgaW5zdGFuY2UuX19jYWNoZVtrZXldID0gb2JqW2tleV07XG4gICAgfVxuICB9XG4gIFxuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgbGV0IGluc3RhbmNlID0ga2V5ID09PSAnX19tYWluJz8gcmVxdWVzdDogcmVxdWVzdC5fX2luc3RhbmNlc1trZXldO1xuICAgIGluaXQoaW5zdGFuY2UsIG9ialtrZXldKTtcbiAgfVxufVxuXG4vKipcbiAqIFByZXBhcmUgc2VydmVyLXNpZGUgcmVuZGVyaW5nIGh0bWxcbiAqL1xuQWtpbGkucHJlcGFyZVNlcnZlclNpZGVIdG1sID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fX3Jvb3Qub3V0ZXJIVE1MO1xufVxuXG4vKipcbiAqIFByZXBhcmUgc2VydmVyLXNpZGUgcmVuZGVyaW5nIHJlcXVlc3QgY2FjaGVcbiAqL1xuQWtpbGkucHJlcGFyZVNlcnZlclNpZGVSZXF1ZXN0Q2FjaGUgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBjYWNoZSA9IHsgX19tYWluOiByZXF1ZXN0Ll9fY2FjaGUgfTtcblxuICBmb3IobGV0IGtleSBpbiByZXF1ZXN0Ll9faW5zdGFuY2VzKSB7XG4gICAgY2FjaGVba2V5XSA9IHJlcXVlc3QuX19pbnN0YW5jZXNba2V5XS5fX2NhY2hlO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG4vKipcbiAqIERlaW5pdGlhbGl6ZSB0aGUgYXBwbGljYXRpb25cbiAqL1xuQWtpbGkuZGVpbml0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNsZWFyR2xvYmFscygpO1xuICByb3V0ZXIuZGVpbml0KCk7XG4gIHJlcXVlc3QuZGVpbml0KCk7XG4gIGxldCBzdG9yZUtleXMgPSBPYmplY3Qua2V5cyhzdG9yZS5fX3RhcmdldCk7XG4gIFxuICBmb3IobGV0IGkgPSAwLCBsID0gc3RvcmVLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGRlbGV0ZSBzdG9yZS5fX3RhcmdldFtzdG9yZUtleXNbaV1dO1xuICB9XG5cbiAgdGhpcy5zZXREZWZhdWx0cygpO1xufTtcblxud2luZG93LkFraWxpID0gQWtpbGk7XG5leHBvcnQgZGVmYXVsdCBBa2lsaTtcbkFraWxpLnNldERlZmF1bHRzKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FraWxpLmpzIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXIuanMnXG5cbi8qKlxuICogQW4gb2JqZWN0IHdpdGggYSBsb3Qgb2YgdXNlZnVsIGZ1bmN0aW9uc1xuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3V0aWxzfVxuICovXG5jb25zdCB1dGlscyA9IHt9O1xuXG4vKipcbiAqIENyZWF0ZSBjbGFzcyBhdHRyaWJ1dGUgZnJvbSBhbiBvYmplY3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcInJlZCBhY3RpdmVcIlxuICogdXRpbHMuY2xhc3Moe3JlZDogdHJ1ZSwgYWN0aXZlOiB0cnVlLCBncmVlbjogZmFsc2V9KTtcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5jbGFzcyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBsZXQgY2xhc3NlcyA9IFtdO1xuICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrID0ga2V5c1tpXTtcbiAgICBsZXQgdmFsID0gb2JqW2tdO1xuICAgIHZhbCAmJiBjbGFzc2VzLnB1c2goayk7XG4gIH1cblxuICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBzdHlsZSBhdHRyaWJ1dGUgZnJvbSBhbiBvYmplY3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcImNvbG9yOnJlZDt3aWR0aDoxMHB4XCJcbiAqIHV0aWxzLnN0eWxlKHtjb2xvcjogXCJyZWRcIiwgYmFja2dyb3VuZDogZmFsc2UsIHdpZHRoOiBcIjEwcHhcIn0pO1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnN0eWxlID0gZnVuY3Rpb24ob2JqKSB7XG4gIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgbGV0IHN0eWxlcyA9IFtdO1xuICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrID0ga2V5c1tpXTtcbiAgICBsZXQgdmFsID0gb2JqW2tdO1xuICAgIHZhbCAmJiBzdHlsZXMucHVzaChgJHt0aGlzLnRvRGFzaENhc2Uoayl9OiR7dmFsfWApO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlcy5qb2luKCc7Jyk7XG59O1xuXG4vKipcbiAqIEV4dGVuZGVkIHNwbGl0IG9mIHRoZSBzdHJpbmdcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW1wiSGVsbG9cIiwgXCJXb3JsZFwiXVxuICogdXRpbHMuc3BsaXQoXCJIZWxsbyBXb3JsZFwiLCBcIiBcIik7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsneCA9IDUnLCAnIHkgPSBcIjE7MjszXCInXVxuICogdXRpbHMuc3BsaXQoJ3ggPSA1OyB5ID0gXCIxOzI7M1wiJywgXCI7XCIsIFsnXCInXSk7XG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cH0gc3RyIFxuICogQHBhcmFtIHtzdHJpbmd9IFtkZWxdXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBbZXhjbHVkZV0gXG4gKi9cbnV0aWxzLnNwbGl0ID0gZnVuY3Rpb24oc3RyLCBkZWwgPSAnJywgZXhjbHVkZSA9IFtdKSB7XG5cdGNvbnN0IGV4cHMgPSBbXTsgICAgIFxuICBsZXQgbGFzdCA9ICcnO1xuXG4gIGlmKCFkZWwpIHtcbiAgICByZXR1cm4gc3RyLnNwbGl0KCcnKTtcbiAgfVxuICBlbHNlIGlmKGRlbCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIHJldHVybiBzdHIuc3BsaXQoZGVsKTtcbiAgfVxuICBlbHNlIGlmKHN0ci5pbmRleE9mKGRlbCkgPT0gLTEpIHtcbiAgICBsYXN0ID0gc3RyO1xuICB9XG4gIGVsc2Uge1xuICAgIGNvbnN0IGFyciA9IHN0ci5zcGxpdCgnJyk7XG4gICAgbGV0IG9wZW4gPSAnJzsgXG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHZhbCA9IGFycltpXTtcbiAgICAgIGxldCBpbmRleCA9IGV4Y2x1ZGUuaW5kZXhPZih2YWwpOyAgICAgIFxuXG4gICAgICBpZihpbmRleCA+IC0xICYmICghb3BlbiB8fCBvcGVuID09IHZhbCkpIHtcbiAgICAgICAgIW9wZW4/IG9wZW4gPSBleGNsdWRlW2luZGV4XTogb3BlbiA9ICcnO1xuICAgICAgfVxuXG4gICAgICBpZih2YWwgPT0gZGVsICYmICFvcGVuKSB7XG4gICAgICAgIGV4cHMucHVzaChsYXN0KTtcbiAgICAgICAgbGFzdCA9ICcnO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbGFzdCArPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgbGFzdCAmJiBleHBzLnB1c2gobGFzdCk7XG4gIHJldHVybiBleHBzO1xufVxuXG4vKipcbiAqIEZpbHRlciBhbiBhcnJheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsxLCAxMV1cbiAqIHV0aWxzLmZpbHRlcihbMSwgMiwgMywgMTFdLCAnMScpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMX0sIHt4OiAxMX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxfSwge3g6IDJ9LCB7eDogM30sIHt4OiAxMX1dLCAnMScsICd4Jyk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMX0sIHt4OiAxMX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxfSwge3g6IDJ9LCB7eDogM30sIHt4OiAxMX1dLCAnMScsIFsneCddKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxfSwge3g6IDExfV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IDF9LCB7eDogMn0sIHt4OiAzfSwge3g6IDExfV0sICcxJywgW1sneCddXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoge3k6IDF9fV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IHt5OiAxfX0sIHt4OiB7eTogMn19XSwgJzEnLCBbWyd4JywgJ3knXV0pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6MSwgeTogMn0sIHt4OiAyLCB5OjF9XSBcbiAqIHV0aWxzLmZpbHRlcihbe3g6IDEsIHk6IDJ9LCB7eDogMywgeTogM30sIHt4OiAyLCB5OiAxfV0sICcxJywgWyd4JywgJ3knXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoxLCB5OiAyfSwge3g6IDIsIHk6MX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxLCB5OiAyfSwge3g6IDMsIHk6IDN9LCB7eDogMiwgeTogMX1dLCAnMScsIFtbJ3gnXSwgWyd5J11dKTtcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cHxmdW5jdGlvbn0gaGFuZGxlciAtIHR5cGUgb2YgZmlsdGVyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ1tdfHN0cmluZ30gW2tleXNdIC0gZmlsdGVyIGluIHRoZSBrZXlzIGlmIGFycmF5IGVsZW1lbnRzIGFyZSBvYmplY3RcbiAqIEByZXR1cm5zIHtBcnJheX0gLSByZXR1cm5zIG90aGVyIGFycmF5XG4gKi9cbnV0aWxzLmZpbHRlciA9IGZ1bmN0aW9uIChhcnIsIGhhbmRsZXIsIGtleXMgPSBudWxsKSB7XG4gIGxldCByZXMgPSBbXTtcblxuICBpZiAoa2V5cyAmJiAhQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgIGtleXMgPSBba2V5c107XG4gIH1cblxuICBpZih0eXBlb2YgaGFuZGxlciAhPSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3Qgc3RyID0gaGFuZGxlcj8gKGhhbmRsZXIgKyAnJykudG9Mb3dlckNhc2UoKTogJyc7XG4gICAgaGFuZGxlciA9IHZhbCA9PiAodmFsPyAodmFsICsgJycpLnRvTG93ZXJDYXNlKCk6ICcnKS5tYXRjaChzdHIpO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGl0ZW0gPSBhcnJbaV07XG4gICAgbGV0IGZpbHRlcmVkID0gZmFsc2U7XG5cbiAgICBpZigha2V5cyAmJiBoYW5kbGVyKGl0ZW0pKSB7XG4gICAgICBmaWx0ZXJlZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYoa2V5cykge1xuICAgICAgZm9yKGxldCBrID0gMCwgYyA9IGtleXMubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2tdO1xuICAgICAgICBrZXkgPSBBcnJheS5pc0FycmF5KGtleSk/IGtleTogW2tleV07XG4gICAgICAgIGxldCB2YWwgPSBrZXk/IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5LCBpdGVtKTogaXRlbTtcbiAgICBcbiAgICAgICAgaWYgKGhhbmRsZXIodmFsKSkge1xuICAgICAgICAgIGZpbHRlcmVkID0gdHJ1ZTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZpbHRlcmVkICYmIHJlcy5wdXNoKGl0ZW0pOyAgIFxuICB9XG5cbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogT3JkZXIgYW4gYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMSwgMiwgM11cbiAqIHV0aWxzLnNvcnQoWzMsIDIsIDFdLCB0cnVlKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMywgMiwgMV1cbiAqIHV0aWxzLnNvcnQoWzEsIDIsIDNdLCBmYWxzZSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dXG4gKiB1dGlscy5zb3J0KFt7eDogM30sIHt4OiAyfSwge3g6IDF9XSwgW1sneCddXSwgW3RydWVdKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCBbJ3gnXSwgdHJ1ZSk7XG4gKiB1dGlscy5zb3J0KFt7eDogM30sIHt4OiAyfSwge3g6IDF9XSwgJ3gnKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dLCBbWyd4J11dLCBbZmFsc2VdKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dLCBbJ3gnXSwgZmFsc2UpO1xuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sICd4JywgZmFsc2UpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMSwgeTogM30sIHt4OiAyLCB5OiAxfSwge3g6MiwgeTogMn1dXG4gKiB1dGlscy5zb3J0KFt7eDogMiwgeTogMn0sIHt4OiAyLCB5OiAxfSwge3g6IDIsIHk6IDN9XSwgW1sneCddLCBbJ3knXV0sIFt0cnVlLCB0cnVlXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoge3k6IDF9fSwge3g6IHt5OiAyfX1dXG4gKiB1dGlscy5zb3J0KFt7eDoge3k6IDJ9fSwge3g6IHt5OiAxfX1dLCBbWyd4JywgJ3knXV0sIFt0cnVlXSk7XG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0ge2Jvb2xlYW58QXJyYXlbXXxzdHJpbmdbXXxzdHJpbmd9IFtrZXlzXVxuICogQHBhcmFtIHtib29sZWFufGJvb2xlYW5bXX0gW29yZGVyXSAtIHJldmVyc2Ugb3Igbm90XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbnV0aWxzLnNvcnQgPSBmdW5jdGlvbihhcnIsIGtleXMgPSB0cnVlLCBvcmRlciA9IFtdKSB7XG4gIGFyciA9IGFyci5zbGljZSgpO1xuXG4gIGlmIChrZXlzID09PSB0cnVlKSB7XG4gICAga2V5cyA9IFtdO1xuICAgIG9yZGVyID0gW3RydWVdO1xuICB9XG4gIGVsc2UgaWYgKGtleXMgPT09IGZhbHNlKSB7XG4gICAga2V5cyA9IFtdO1xuICAgIG9yZGVyID0gW2ZhbHNlXTtcbiAgfVxuXG4gIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgIGtleXMgPSBba2V5c107XG4gIH1cblxuICBpZiAoIUFycmF5LmlzQXJyYXkob3JkZXIpKSB7XG4gICAgb3JkZXIgPSBbb3JkZXJdO1xuICB9XG5cbiAgbGV0IGwgPSBrZXlzLmxlbmd0aDtcblxuICBhcnIuc29ydCgoYSwgYikgPT4ge1xuICAgIGxldCBpID0gMDtcblxuICAgIGNvbnN0IGNoZWNrID0gKGEsIGIsIHJldmVyc2UgPSBmYWxzZSkgPT4ge1xuICAgICAgaWYgKGEgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIGEgPSBhLmdldFRpbWUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGIgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIGIgPSBiLmdldFRpbWUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGEgPiBiKSB7XG4gICAgICAgIHJldHVybiByZXZlcnNlPyAtMTogMTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGEgPCBiKSB7XG4gICAgICAgIHJldHVybiByZXZlcnNlPyAxOiAtMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDA7XG4gICAgfTtcblxuICAgIGNvbnN0IG5leHQgPSAoKSA9PiB7XG4gICAgICBpZiAoaSA+PSBsKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuXG4gICAgICBsZXQga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGtleSkpIHtcbiAgICAgICAga2V5ID0gW2tleV07XG4gICAgICB9XG5cbiAgICAgIGxldCBhViA9IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5LCBhKTtcbiAgICAgIGxldCBiViA9IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5LCBiKTtcbiAgICAgIGxldCByZXMgPSBjaGVjayhhViwgYlYsIG9yZGVyW2ldID09PSBmYWxzZSk7XG5cbiAgICAgIGlmIChyZXMgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1cblxuICAgICAgaSsrO1xuICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICB9O1xuXG4gICAgaWYgKCFsKSB7XG4gICAgICByZXR1cm4gY2hlY2soYSwgYiwgb3JkZXJbaV0gPT09IGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dCgpO1xuICB9KTtcblxuICByZXR1cm4gYXJyO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gbmV3IG9iamVjdCB3aXRoIHRoZSBzcGVjaWZpZWQga2V5c1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB7eDogMSwgejogMX1cbiAqIHV0aWxzLmluY2x1ZGVLZXlzKHt4OiAxLCB5OiAxLCB6OiAxfSwgWyd4JywgJ3onXSk7XG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqL1xudXRpbHMuaW5jbHVkZUtleXMgPSBmdW5jdGlvbihvYmosIGtleXMpIHtcbiAgbGV0IG5ld09iaiA9IHt9O1xuICBsZXQgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IG9iaktleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGtleSA9IG9iaktleXNbaV07XG5cbiAgICBpZihrZXlzLmluZGV4T2Yoa2V5KSAhPSAtMSkge1xuICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG4vKipcbiAqIFJldHVybiBuZXcgb2JqZWN0IHdpdGhvdXQgdGhlIHNwZWNpZmllZCBrZXlzXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHt4OiAxLCB6OiAxfVxuICogdXRpbHMuaW5jbHVkZUtleXMoe3g6IDEsIHk6IDEsIHo6IDF9LCBbJ3knXSk7XG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqL1xudXRpbHMuZXhjbHVkZUtleXMgPSBmdW5jdGlvbihvYmosIGtleXMpIHtcbiAgbGV0IG5ld09iaiA9IHt9O1xuICBsZXQgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IG9iaktleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGtleSA9IG9iaktleXNbaV07XG5cbiAgICBpZihrZXlzLmluZGV4T2Yoa2V5KSA9PSAtMSkge1xuICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG4vKipcbiAqIENoZWNrIHRoZSB2YWx1ZSBpcyBjb21wb25lbnQgc2NvcGUgcHJveHkgb2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5pc1Njb3BlUHJveHkgPSBmdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuICEhKHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnICYmIHZhbC5fX2lzUHJveHkpO1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgdmFsdWUgaXMgcGxhaW4gb2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSBvYmpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5pc1BsYWluT2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XG4gIHJldHVybiAhIShvYmogJiYgdHlwZW9mIG9iaiA9PSAnb2JqZWN0JyAmJiAob2JqLmNvbnN0cnVjdG9yID09IE9iamVjdCB8fCBvYmouY29uc3RydWN0b3IgPT0gQXJyYXkpKTtcbn07XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVcbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zXSBcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5jb3B5ID0gZnVuY3Rpb24odmFsdWUsIG9wdGlvbnMgPSB7fSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8ICF2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIG9wdGlvbnMgPSB7IG5lc3RlZDogdHJ1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgLi4ub3B0aW9ucyB9O1xuXG4gIGNvbnN0IG5leHQgPSAob2JqKSA9PiB7XG4gICAgb2JqID0gdGhpcy5pc1Njb3BlUHJveHkob2JqKT8gb2JqLl9fdGFyZ2V0OiBvYmo7XG4gICAgbGV0IGtleXMgPSAhb3B0aW9ucy5lbnVtZXJhYmxlPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopOiBPYmplY3Qua2V5cyhvYmopO1xuICAgIGxldCBuZXdPYmogPSBBcnJheS5pc0FycmF5KG9iaik/IFtdOiB7fTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgIGxldCB2YWwgPSBvYmpba2V5XTtcbiAgICAgIHZhbCA9IHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnICYmIG9wdGlvbnMubmVzdGVkPyBuZXh0KHZhbCk6IHZhbDsgICAgICBcbiAgICAgIFxuICAgICAgaWYoIW9iai5wcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwge1xuICAgICAgICAgIC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpLFxuICAgICAgICAgIHZhbHVlOiB2YWxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIG5ld09ialtrZXldID0gdmFsOyAgXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld09iajtcbiAgfVxuXG4gIHJldHVybiBuZXh0KHZhbHVlKTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHRoZSB2YWx1ZSB0byBhdHRyaWJ1dGUgYXBwcm9wcmlhdGUgZm9ybWF0XG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gZmFsc2UgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEV2ZW50RW1pdHRlcikge1xuICAgIHJldHVybiAnW29iamVjdCBFdmVudF0nO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gdmFsdWUgKyAnJztcbn07XG5cbi8qKlxuICogQ29tcGFyZSB0d28gdmFsdWVzXG4gKlxuICogQHBhcmFtIHsqfSBhXG4gKiBAcGFyYW0geyp9IGJcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5jb21wYXJlID0gZnVuY3Rpb24gKGEsIGIsIG9wdGlvbnMgPSB7fSkge1xuICBpZiAoKGEgaW5zdGFuY2VvZiBEYXRlKSAmJiAoYiBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgcmV0dXJuIGEuZ2V0VGltZSgpID09PSBiLmdldFRpbWUoKTtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgYSA9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBiID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYS50b1N0cmluZygpID09PSBiLnRvU3RyaW5nKCk7XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT0gJ29iamVjdCcpIHtcbiAgICBpZiAoYSA9PT0gbnVsbCB8fCBiID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gYSA9PT0gYjtcbiAgICB9XG5cbiAgICBvcHRpb25zID0geyBlbnVtZXJhYmxlOiB0cnVlLCAuLi5vcHRpb25zIH07XG5cbiAgICBjb25zdCBjbGVhclVuZGVmaW5lZCA9ICh2YWwpID0+IHtcbiAgICAgIGxldCBvYmogPSBBcnJheS5pc0FycmF5KHZhbCk/IFtdOiB7fTtcbiAgICAgIGxldCBrZXlzID0gIW9wdGlvbnMuZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoKTogT2JqZWN0LmtleXModmFsKTtcblxuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICB2YWxba2V5XSAhPT0gdW5kZWZpbmVkICYmIChvYmpba2V5XSA9IHZhbFtrZXldKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGlmKG9wdGlvbnMuaWdub3JlVW5kZWZpbmVkKSB7XG4gICAgICBhID0gY2xlYXJVbmRlZmluZWQoYSk7XG4gICAgICBiID0gY2xlYXJVbmRlZmluZWQoYik7XG4gICAgfVxuXG4gICAgbGV0IGFLZXlzID0gIW9wdGlvbnMuZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoKTogT2JqZWN0LmtleXMoYSk7XG4gICAgbGV0IGJLZXlzID0gIW9wdGlvbnMuZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoKTogT2JqZWN0LmtleXMoYik7XG4gICAgXG4gICAgaWYgKGFLZXlzLmxlbmd0aCAhPSBiS2V5cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBhID0gdGhpcy5pc1Njb3BlUHJveHkoYSk/IGEuX190YXJnZXQ6IGE7XG4gICAgYiA9IHRoaXMuaXNTY29wZVByb3h5KGIpPyBiLl9fdGFyZ2V0OiBiO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGFLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGtleSA9IGFLZXlzW2ldO1xuXG4gICAgICBpZiAoIXRoaXMuY29tcGFyZShhW2tleV0sIGJba2V5XSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGEgPT09IGI7XG59O1xuXG4vKipcbiAqIENvbXBhcmUgdGhlIGN1cnJlbnQgdmFsdWUgd2l0aCB0aGUgcHJldmlvdXNcbiAqXG4gKiBAcGFyYW0geyp9IGN1cnJlbnQgLSB0aGUgY3VycmVudCB2YWx1ZVxuICogQHBhcmFtIHsqfSBwcmV2aW91cyAtIHRoZSBwcmV2aW91cyB2YWx1ZVxuICogQHBhcmFtIHsqfSBwcmV2aW91c0NvcHkgLSB0aGUgcHJldmlvdXMgdmFsdWUgY29weVxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlID0gZnVuY3Rpb24oY3VycmVudCwgcHJldmlvdXMsIHByZXZpb3VzQ29weSwgb3B0aW9ucykge1xuICBpZiAoY3VycmVudCAhPT0gcHJldmlvdXMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdGhpcy5jb21wYXJlKGN1cnJlbnQsIHByZXZpb3VzQ29weSwgb3B0aW9ucyk7XG59O1xuXG4vKipcbiAqIEVuY29kZSBodG1sIGVudGl0aWVzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJ5b3UgJmFtcCBtZVwiXG4gKiB1dGlscy5lbmNvZGVIdG1sRW50aXRpZXMoJ3lvdSAmIG1lJyk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmVuY29kZUh0bWxFbnRpdGllcyA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHZhbHVlO1xuICBlbC50ZXh0Q29udGVudCA9IGh0bWw7XG4gIHZhbHVlID0gZWwuaW5uZXJIVE1MO1xuICBlbC5yZW1vdmUoKTtcbiAgZWwgPSBudWxsO1xuICByZXR1cm4gdmFsdWU7XG59O1xuXG4vKipcbiAqIERlY29kZSBodG1sIGVudGl0aWVzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJ5b3UgJiBtZVwiXG4gKiB1dGlscy5kZWNvZGVIdG1sRW50aXRpZXMoJ3lvdSAmYW1wIG1lJyk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmRlY29kZUh0bWxFbnRpdGllcyA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBsZXQgdmFsdWU7XG4gIGVsLmlubmVySFRNTCA9IGh0bWw7XG4gIHZhbHVlID0gZWwudmFsdWU7XG4gIGVsLnJlbW92ZSgpO1xuICBlbCA9IG51bGw7XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHN0cmluZyBmcm9tIGRhc2ggdG8gY2FtZWwgY2FzZSBmb3JtYXRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy50b0NhbWVsQ2FzZSA9IGZ1bmN0aW9uKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcVysoLikvZywgKG0sIGMpID0+IGMudG9VcHBlckNhc2UoKSk7XG59O1xuXG4vKipcbiAqIENhcGl0YWxpemUgdGhlIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmNhcGl0YWxpemUgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RyaW5nIGZyb20gY2FtZWwgdG8gZGFzaCBjYXNlIGZvcm1hdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnRvRGFzaENhc2UgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIChtLCBjKSA9PiBgLSR7Yy50b0xvd2VyQ2FzZSgpfWApO1xufTtcblxuLyoqXG4gKiBHZXQgbmVzdGVkIG9iamVjdCBwcm9wZXJ0eSBieSBhcnJheSBrZXlzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCkge1xuICBsZXQgY3VycmVudDtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoKG8sIGspID0+IHtcbiAgICBpKys7XG5cbiAgICBpZiAodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBvO1xuICAgIH1cblxuICAgIGlmIChvW2tdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAoaSA9PSBsZW5ndGgpICYmIChjdXJyZW50ID0gb1trXSk7XG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIGN1cnJlbnQ7XG59O1xuXG4vKipcbiAqIENoZWNrIG5lc3RlZCBvYmplY3RzIHRyZWUgaGFzIHByb3BlcnR5IG9yIG5vdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHRydWVcbiAqIHV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaGFzUHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QpIHtcbiAgbGV0IGhhcyA9IGZhbHNlO1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZSgobywgaykgPT4ge1xuICAgIGkrKztcblxuICAgIGlmICh0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuICEhbztcbiAgICB9XG5cbiAgICBpZiAoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAoaSA9PSBsZW5ndGgpICYmIChoYXMgPSBvLmhhc093blByb3BlcnR5KGspKTtcbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gaGFzO1xufTtcblxuLyoqXG4gKiBTZXQgbmVzdGVkIG9iamVjdHMgdHJlZSBwcm9wZXJ0eVxuICogUmV0dXJucyBjaGFuZ2VkIHByb3BlcnR5IG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHt5OiA2fVxuICogdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0sIChsYXN0LCB2YWwpID0+IGxhc3Q/IDY6ICh2YWwgfHwge30pKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLnNldFByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0LCBmbikge1xuICBsZXQgY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoKG8sIGspID0+IHtcbiAgICBpKys7XG5cbiAgICBpZiAodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIG9ba10gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgb1trXSA9IGZuKGkgPT0gbGVuZ3RoLCBvW2tdKTtcbiAgICBjdXJyZW50ID0gbztcbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gY3VycmVudDtcbn07XG5cbi8qKlxuICpcbiAqIERlbGV0ZSBwcm9wZXJ0eSBmcm9tIG5lc3RlZCBvYmplY3RzIHRyZWVcbiAqIFJldHVybnMgZGVsZXRlZCBwcm9wZXJ0eSB2YWx1ZVxuICogWW91IGNhbiBjYW5jZWwgZGVsZXRpbmcgaWYgd2lsbCByZXR1cm4gZmFsc2UgaW4gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIDVcbiAqIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19LCB2YWwgPT4gdmFsICE9IDUpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtmbl1cbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCwgZm4pIHtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgdmFsdWU7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZSgobywgaykgPT4ge1xuICAgIGkrKztcblxuICAgIGlmICh0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghby5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGlmIChpID09IGxlbmd0aCkge1xuICAgICAgdmFsdWUgPSBvW2tdO1xuICAgICAgKCFmbiB8fCBmbih2YWx1ZSkpICYmIChkZWxldGUgb1trXSk7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuXG4vKipcbiAqIEdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSB0YXJnZXQgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xuXG51dGlscy5nZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQgPSBmdW5jdGlvbih0YXJnZXQsIGtleSkge1xuICBjb25zdCBjaGVjayA9IChvYmopID0+IHtcbiAgICBpZiAob2JqLnByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgbGV0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG5cbiAgICBpZiAoIXByb3RvKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hlY2socHJvdG8pO1xuICB9O1xuXG4gIHJldHVybiBjaGVjayh0YXJnZXQpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIG93biBwcm9wZXJ0eSB0YXJnZXQgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xudXRpbHMuZ2V0T3duUHJvcGVydHlUYXJnZXQgPSBmdW5jdGlvbih0YXJnZXQsIGtleSkge1xuICBjb25zdCBjaGVjayA9IChvYmopID0+IHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgbGV0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG5cbiAgICBpZiAoIXByb3RvKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hlY2socHJvdG8pO1xuICB9O1xuXG4gIHJldHVybiBjaGVjayh0YXJnZXQpO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSByYW5kb20gc3RyaW5nXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5jcmVhdGVSYW5kb21TdHJpbmcgPSBmdW5jdGlvbihsZW5ndGggPSAxNiwgZm4gPSBudWxsKSB7XG4gIGxldCBzdHIgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgbGVuZ3RoICsgMik7XG4gIGxldCB2YWwgPSAnJztcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHN0ci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNjYpIHtcbiAgICAgIHZhbCArPSBzdHJbaV0udG9VcHBlckNhc2UoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YWwgKz0gc3RyW2ldO1xuICAgIH1cbiAgfVxuXG4gIGlmIChmbiAmJiBmbih2YWwpKSB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlUmFuZG9tU3RyaW5nKGxlbmd0aCwgZm4pO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHV0aWxzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgZm9yIGVsZW1lbnRzIHdoaWNoIGhhdmUgYXN5bmMgYXR0cmlidXRlIGNvbnRlbnQuXHJcbiAqIFxyXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XHJcbiAqIFxyXG4gKiBAdGFnIHVybFxyXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXJsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgbWF0Y2hlcyA9ICdbdXJsXSc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcclxuICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG4gICAgdGhpcy51cmxBdHRyaWJ1dGUgPSAnc3JjJztcclxuICB9XHJcblxyXG4gIGNvbXBpbGVkKCkge1xyXG4gICAgdGhpcy5hdHRyKCd1cmwnLCB0aGlzLnNldFVybCk7XHJcbiAgfVxyXG5cclxuICBzZXRVcmwodXJsKSB7XHJcbiAgICB0aGlzLmF0dHJzW3RoaXMudXJsQXR0cmlidXRlXSA9IHVybDtcclxuICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy91cmwuanMiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi9ha2lsaS5qcyc7XG5pbXBvcnQgU2NvcGUgZnJvbSAnLi9zY29wZS5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc2VydmljZXMvc3RvcmUuanMnO1xuaW1wb3J0IGdsb2JhbHMgZnJvbSAnLi9nbG9iYWxzLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcblxuZXhwb3J0IGNvbnN0IGV2YWx1YXRpb25SZWdleCA9IC9cXCR7KCgoPyFcXCR7KS4pKil9LztcbmV4cG9ydCBjb25zdCBldmFsdWF0aW9uUmVnZXhHbG9iYWwgPSBuZXcgUmVnRXhwKGV2YWx1YXRpb25SZWdleC5zb3VyY2UsIFwiZ1wiKTtcbmV4cG9ydCBjb25zdCBzeXN0ZW1BdHRyaWJ1dGVzID0gWydjb21wb25lbnQnLCAnc2NvcGUnXTtcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZyb20gd2hpY2ggYWxsIGNvbXBvbmVudHMgYXJlIGluaGVyaXRlZFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICcnO1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbXTtcbiAgc3RhdGljIGV2ZW50cyA9IFtdO1xuICBzdGF0aWMgY29udHJvbEF0dHJpYnV0ZXMgPSBmYWxzZTtcbiAgc3RhdGljIHNhdmVBdHRyaWJ1dGVQcm94eUluID0gZmFsc2U7XG4gIHN0YXRpYyBzYXZlQXR0cmlidXRlUHJveHlPdXQgPSBmYWxzZTtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gZmFsc2U7XG4gIHN0YXRpYyB0ZW1wbGF0ZSA9ICcnO1xuICBzdGF0aWMgdGVtcGxhdGVVcmwgPSAnJztcbiAgc3RhdGljIHNjb3BlID0gbnVsbDtcblxuICAvKipcbiAgICogRnVuY3Rpb24gdG8gZGVmaW5lIHRoZSBjb21wb25lbnRcbiAgICovXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdjb21wb25lbnQnLCBDb21wb25lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIHRoZSBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBleHByZXNzaW9uXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbdmFyc11cbiAgICovXG4gIHN0YXRpYyBwYXJzZShjb250ZXh0LCBleHByZXNzaW9uLCB2YXJpYWJsZXMgPSB7fSkge1xuICAgIHZhcmlhYmxlcyA9IHsgLi4uZ2xvYmFscywgLi4udmFyaWFibGVzfTtcbiAgICBjb25zdCBrZXlzID0gW107XG4gICAgY29uc3QgdmFycyA9IFtdO1xuICAgIGNvbnN0IGV4cHMgPSB1dGlscy5zcGxpdChleHByZXNzaW9uLCAnOycsIFsnXCInLCBcIidcIiwgJ2AnXSk7ICBcbiAgICBleHBzW2V4cHMubGVuZ3RoIC0gMV0gPSBgcmV0dXJuICR7ZXhwc1tleHBzLmxlbmd0aCAtIDFdfWA7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gdmFyaWFibGVzKSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgIHZhcnMucHVzaCh2YXJpYWJsZXNba2V5XSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBuZXcgRnVuY3Rpb24oLi4ua2V5cywgYCR7ZXhwcy5qb2luKCc7ICcpfWApLmFwcGx5KGNvbnRleHQsIHZhcnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqIFxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW3Njb3BlXSBcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsLCBzY29wZSA9IHt9KSB7XG4gICAgaWYgKCEoZWwgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgbXVzdCBwYXNzIGFuIGh0bWwgZWxlbWVudCB0byB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yYCk7XG4gICAgfVxuXG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19pc0NvbXBpbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2lzUmVzb2x2ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX3ByZXZlbnQgPSBmYWxzZTtcbiAgICB0aGlzLl9fYmluZGluZ3MgPSB7fTtcbiAgICB0aGlzLl9fdGFncyA9IHt9O1xuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSBudWxsO1xuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IGZhbHNlO1xuICAgIHRoaXMuX19jb21waWxpbmcgPSBudWxsO1xuICAgIHRoaXMuX19kaXNhYmxlUHJveHkgPSB7fTtcbiAgICB0aGlzLl9fZGlzYWJsZVN0b3JlS2V5cyA9IHt9O1xuICAgIHRoaXMuX19kaXNhYmxlQXR0cktleXMgPSB7fTtcbiAgICB0aGlzLl9fY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLl9fcGFyZW50ID0gbnVsbDtcbiAgICB0aGlzLl9fcGFyZW50cyA9IFtdO1xuICAgIHRoaXMuX19hdHRycyA9IHt9O1xuICAgIHRoaXMuX19hdHRyTGlua3MgPSB7fTtcbiAgICB0aGlzLl9fc3RvcmVMaW5rcyA9IHt9O1xuICAgIHRoaXMuX19hdHRyaWJ1dGVPZiA9IG51bGw7XG4gICAgdGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQgPSB0aGlzO1xuICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICB0aGlzLmVsID0gZWw7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGNvbXBpbGF0aW9uIG9wdGlvbnMgXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlQ29tcGlsYXRpb25PcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB7IFxuICAgICAgY2hlY2tDaGFuZ2VzOiBmYWxzZSwgXG4gICAgICBzZXRFdmVudHM6IHRydWUsXG4gICAgICBzZXRQYXJlbnRzOiB0cnVlLFxuICAgICAgc2V0Qm9vbGVhbkF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICBkZWZpbmVBdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgLi4ub3B0aW9ucyBcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSByZWNvbXBpbGF0aW9uIG9wdGlvbnMgXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlUmVjb21waWxhdGlvbk9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHsgXG4gICAgICAuLi50aGlzLl9fY3JlYXRlQ29tcGlsYXRpb25PcHRpb25zKCksXG4gICAgICBzZXRFdmVudHM6IGZhbHNlLFxuICAgICAgc2V0UGFyZW50czogZmFsc2UsXG4gICAgICBzZXRCb29sZWFuQXR0cmlidXRlczogZmFsc2UsXG4gICAgICBkZWZpbmVBdHRyaWJ1dGVzOiBmYWxzZSxcbiAgICAgIC4uLm9wdGlvbnMgXG4gICAgfTtcbiAgfVxuIFxuICAvKipcbiAgICogQ2FsbGVkIG9uIHRoZSByZWNvbXBpbGF0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcmVjb21waWxlKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuX19pc01vdW50ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fcmVjb21waWxpbmcgPSB0cnVlO1xuICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50Ll9fZGlzYWJsZVByb3h5ID0ge307XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IHRoaXMuX19jcmVhdGVSZWNvbXBpbGF0aW9uT3B0aW9ucyhvcHRpb25zKTsgICAgXG4gICAgdGhpcy5fX2NvbXBpbGluZy5zZXRFdmVudHMgJiYgdGhpcy5fX3NldEV2ZW50cygpO1xuICAgIHRoaXMuX19jb21waWxpbmcuc2V0UGFyZW50cyAmJiB0aGlzLl9fc2V0UGFyZW50cygpO1xuICAgIHRoaXMuX19jb21waWxpbmcuc2V0Qm9vbGVhbkF0dHJpYnV0ZXMgJiYgdGhpcy5fX3NldEJvb2xlYW5BdHRyaWJ1dGVzKCk7XG4gICAgdGhpcy5fX2NvbXBpbGluZy5kZWZpbmVBdHRyaWJ1dGVzICYmIHRoaXMuX19kZWZpbmVBdHRyaWJ1dGVzKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIG9uIHRoZSBjcmVhdGlvblxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZSgpIHtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0gdGhpcy5fX2NyZWF0ZUNvbXBpbGF0aW9uT3B0aW9ucygpOyAgIFxuICAgIHRoaXMuX19pbml0aWFsaXplKCk7XG4gICAgdGhpcy5fX3NldEV2ZW50cygpO1xuICAgIHRoaXMuX19zZXRQYXJlbnRzKCk7XG4gICAgdGhpcy5fX3NldEJvb2xlYW5BdHRyaWJ1dGVzKCk7XG4gICAgdGhpcy5fX2RlZmluZUF0dHJpYnV0ZXMoKTtcbiAgICBBa2lsaS5pc29sYXRlKCgpID0+IHRoaXMuY3JlYXRlZCh0aGlzLmF0dHJzKSk7ICAgICAgIFxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiB0aGUgY29tcGlsYXRpb25cbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIF9fY29tcGlsZSgpIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuX19jb250cm9sQXR0cmlidXRlcyB8fCAhdGhpcy5fX2V2YWx1YXRlUGFyZW50O1xuICAgIGxldCBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgdGhpcy5fX2F0dHJpYnV0ZU9mID0gY29udHJvbD8gdGhpczogdGhpcy5fX2V2YWx1YXRlUGFyZW50Ll9fYWtpbGk7XG5cbiAgICBpZiAoIXRoaXMuX19yZWNvbXBpbGluZyB8fCB0aGlzLl9fY29tcGlsaW5nLm5ld1BhcmVudCB8fCB0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMpIHtcbiAgICAgIHRoaXMuX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXModGhpcy5lbCwgdGhpcy5fX2F0dHJpYnV0ZU9mKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnRlcnBvbGF0ZSA9IChjaGlsZHJlbiwgcGFyZW50KSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcblxuICAgICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT0gMyAmJiB0aGlzLl9faW5pdGlhbGl6ZU5vZGUoY2hpbGQsIHBhcmVudCkpIHtcbiAgICAgICAgICB0aGlzLl9fZXZhbHVhdGVOb2RlKGNoaWxkLCB0aGlzLl9fY29tcGlsaW5nPyB0aGlzLl9fY29tcGlsaW5nLmNoZWNrQ2hhbmdlczogZmFsc2UpOyAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoaWxkLm5vZGVUeXBlID09IDEgJiYgIWNoaWxkLl9fYWtpbGkpIHtcbiAgICAgICAgICB0aGlzLl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKGNoaWxkKTtcbiAgICAgICAgICBpbnRlcnBvbGF0ZShjaGlsZC5jaGlsZE5vZGVzLCBjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaW50ZXJwb2xhdGUodGhpcy5lbC5jaGlsZE5vZGVzLCB0aGlzLmVsKTtcbiAgICB0aGlzLl9faXNNb3VudGVkID0gdHJ1ZTtcbiAgICBsZXQgcmVzO1xuXG4gICAgaWYgKCF0aGlzLl9fcmVjb21waWxpbmcpIHtcbiAgICAgIHJlcyA9IEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uQ29tcGlsZWQgJiYgdGhpcy5hdHRycy5vbkNvbXBpbGVkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5jb21waWxlZCgpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlVXJsKSB7XG4gICAgICAgIHAgPSByZXF1ZXN0LmdldCh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlVXJsLCB7IGNhY2hlOiB0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlQ2FjaGUgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLl9fY29udGVudDtcbiAgICAgICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCByZXMuZGF0YSk7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX19jb250ZW50OyAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmVzID0gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0cnMub25SZWNvbXBpbGVkICYmIHRoaXMuYXR0cnMub25SZWNvbXBpbGVkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgICB0aGlzLnJlY29tcGlsZWQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLl9fcmVjb21waWxpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0gbnVsbDtcblxuICAgIHJldHVybiBwLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5fX2lzQ29tcGlsZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlIHRoZSBjb21wb25lbnRcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIF9fcmVzb2x2ZSgpIHtcbiAgICBpZiAodGhpcy5fX2lzUmVzb2x2ZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5hdHRycy5vblJlc29sdmVkICYmIHRoaXMuYXR0cnMub25SZXNvbHZlZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoQWtpbGkuaXNvbGF0ZSgoKSA9PiB0aGlzLnJlc29sdmVkKCkpKS50aGVuKHJlcyA9PiB7XG4gICAgICB0aGlzLl9faXNSZXNvbHZlZCA9IHRydWU7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnQgb2YgdGhlIHtAc2VlIENvbXBvbmVudCNfX2NvbXBpbGV9IG1ldGhvZFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemUoKSB7ICAgIFxuICAgIGxldCBwYXJlbnQgPSBBa2lsaS5nZXRBa2lsaVBhcmVudHModGhpcy5lbCwgZmFsc2UpOyAgICAgXG4gICAgbGV0IFNjb3BlID0gdGhpcy5jb25zdHJ1Y3Rvci5zY29wZSB8fCBBa2lsaS5TY29wZTtcbiAgICBsZXQgc2NvcGU7XG4gICAgbGV0IGlzUm9vdCA9IEFraWxpLl9fcm9vdCA9PT0gdGhpcy5lbDtcbiAgICB0aGlzLmVsLl9fYWtpbGkgPSB0aGlzO1xuXG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgc2NvcGUgPSBuZXcgU2NvcGUodGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3Njb3BlJykgfHwgQWtpbGkuY3JlYXRlU2NvcGVOYW1lKCksIHRoaXMuZWwsIHRoaXMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNjb3BlID0gbmV3IFNjb3BlKGlzUm9vdD8gJ3Jvb3QnOiBBa2lsaS5jcmVhdGVTY29wZU5hbWUoKSwgdGhpcy5lbCwgdGhpcyk7XG4gICAgICBpc1Jvb3QgJiYgKEFraWxpLnJvb3QgPSB0aGlzKTtcbiAgICB9XG5cbiAgICBsZXQgX19zY29wZSA9IHNjb3BlO1xuICAgIGxldCBfc2NvcGUgPSBPYmplY3QuYXNzaWduKHNjb3BlLCB0aGlzLnNjb3BlKTtcbiAgICBsZXQgY29udHJvbEF0dHJpYnV0ZXMgPSB0aGlzLmNvbnN0cnVjdG9yLmNvbnRyb2xBdHRyaWJ1dGVzO1xuICAgIGxldCBldmVudHMgPSB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50cztcblxuICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlKSB7XG4gICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCB0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkge1xuICAgICAgdGhpcy5fX2NvbnRlbnQgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gICAgdGhpcy5fX3Njb3BlID0gX19zY29wZTtcbiAgICB0aGlzLl9fZXZlbnRzID0gZXZlbnRzO1xuICAgIHRoaXMuX19jb250cm9sQXR0cmlidXRlcyA9IGNvbnRyb2xBdHRyaWJ1dGVzO1xuICAgIHRoaXMuX19zYXZlQXR0cmlidXRlUHJveHlJbiA9IHRoaXMuY29uc3RydWN0b3Iuc2F2ZUF0dHJpYnV0ZVByb3h5SW47XG4gICAgdGhpcy5fX3NhdmVBdHRyaWJ1dGVQcm94eU91dCA9IHRoaXMuY29uc3RydWN0b3Iuc2F2ZUF0dHJpYnV0ZVByb3h5T3V0O1xuXG4gICAgQWtpbGkuYWRkU2NvcGUoc2NvcGUpO1xuICAgIHRoaXMuc2NvcGUgPSB0aGlzLl9fbmVzdGVkT2JzZXJ2ZShfc2NvcGUsIFtdKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYm9vbGVhbiBhdHRyaWJ1dGVzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKSB7XG4gICAgdGhpcy5ib29sZWFuQXR0cmlidXRlcyA9IFtdLmNvbmNhdChBa2lsaS5odG1sQm9vbGVhbkF0dHJpYnV0ZXMsIHRoaXMuY29uc3RydWN0b3IuYm9vbGVhbkF0dHJpYnV0ZXMpO1xuXG4gICAgY29uc3Qgc2V0QXR0ciA9IChlbCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGF0dHJzID0gZWwuYXR0cmlidXRlcywgbCA9IGF0dHJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgbm9kZSA9IGF0dHJzW2ldO1xuXG4gICAgICAgIGlmICh0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzLmluZGV4T2Yobm9kZS5ub2RlTmFtZSkgIT0gLTEpIHtcbiAgICAgICAgICBpZiAoZWwuaGFzQXR0cmlidXRlKGBib29sZWFuLSR7bm9kZS5ub2RlTmFtZX1gKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGBib29sZWFuLSR7bm9kZS5ub2RlTmFtZX1gLCBlbC5nZXRBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSkgfHwgbm9kZS5ub2RlTmFtZSk7XG4gICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKG5vZGUubm9kZU5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZWwuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGVsLmNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmICghY2hpbGQuX19ha2lsaSkge1xuICAgICAgICAgIHNldEF0dHIoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNldEF0dHIodGhpcy5lbCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGV2ZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldEV2ZW50cygpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuX19ldmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgZXYgPSB0aGlzLl9fZXZlbnRzW2ldO1xuICAgICAgIS9eb24tL2kudGVzdChldikgJiYgKGV2ID0gJ29uLScgKyBldik7XG5cbiAgICAgIGlmICghdGhpcy5lbC5oYXNBdHRyaWJ1dGUoZXYpKSB7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGV2LCAnJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjb21wb25lbnQgcGFyZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldFBhcmVudHMoKSB7XG4gICAgbGV0IHBhcmVudHMgPSBBa2lsaS5nZXRBa2lsaVBhcmVudHModGhpcy5lbCk7XG5cbiAgICBpZiAoIXBhcmVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IG5ld1BhcmVudCA9IHRoaXMuX19wYXJlbnQgIT09IHBhcmVudHNbMF07XG4gICAgbGV0IGV2YWx1YXRlUGFyZW50ID0gbnVsbDtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gcGFyZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBwYXJlbnQgPSBwYXJlbnRzW2ldO1xuXG4gICAgICBpZiAoIXBhcmVudC5fX2FraWxpLmNvbnN0cnVjdG9yLnRyYW5zcGFyZW50KSB7XG4gICAgICAgIGV2YWx1YXRlUGFyZW50ID0gcGFyZW50O1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX19jb21waWxpbmcubmV3UGFyZW50ID0gbmV3UGFyZW50O1xuICAgIG5ld1BhcmVudCAmJiB0aGlzLl9fZGV0YWNoKCk7XG5cbiAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50cmFuc3BhcmVudCkge1xuICAgICAgdGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQgPSBldmFsdWF0ZVBhcmVudC5fX2FraWxpO1xuICAgIH1cblxuICAgIHRoaXMuX19ldmFsdWF0ZVBhcmVudCA9IGV2YWx1YXRlUGFyZW50O1xuICAgIHRoaXMuX19wYXJlbnQgPSBwYXJlbnRzWzBdO1xuICAgIHRoaXMuX19wYXJlbnRzID0gcGFyZW50cztcbiAgICB0aGlzLnNjb3BlLl9fcGFyZW50ID0gdGhpcy5fX2V2YWx1YXRlUGFyZW50Ll9fYWtpbGkuc2NvcGU7XG4gICAgIXRoaXMuX19yZWNvbXBpbGluZyAmJiB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19hZGRDaGlsZCh0aGlzLmVsKTtcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcy5zY29wZSwgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fc2NvcGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBjaGlsZCBlbGVtZW50IHRvIHRoZSBsaXN0XG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hZGRDaGlsZChlbCkge1xuICAgIHRoaXMuX19jaGlsZHJlbi5wdXNoKGVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGxpY2UgY2hpbGQgZnJvbSB0aGUgbGlzdFxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc3BsaWNlQ2hpbGQoZWwpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuX19jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuX19jaGlsZHJlbltpXTtcblxuICAgICAgaWYgKGNoaWxkID09PSBlbCkge1xuICAgICAgICB0aGlzLl9fY2hpbGRyZW4uc3BsaWNlKGksIDEpO1xuICAgICAgICBpLS07XG4gICAgICAgIGwtLTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogWW91IGNhbiBjaGFuZ2UgZXhwcmVzc2lvbiBiZWZvcmUgcGFyc2luZyBoZXJlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBleHByZXNzaW9uXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldFBhcnNlZEV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIG5vZGUgaGFzIGFueSBwcm9wZXJ0eSBjaGFuZ2VzIG9yIG5vdFxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2hlY2tFdmFsdWF0aW9uKG5vZGUpIHtcbiAgICBpZiAoIU9iamVjdC5rZXlzKG5vZGUuX19wcm9wZXJ0aWVzKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGsgaW4gbm9kZS5fX3Byb3BlcnRpZXMpIHtcbiAgICAgIGlmICghbm9kZS5fX3Byb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGxldCBwcm9wID0gbm9kZS5fX3Byb3BlcnRpZXNba107XG4gICAgICBsZXQgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhwcm9wLmtleXMsIHByb3AuY29tcG9uZW50Ll9fc2NvcGUpO1xuXG4gICAgICBpZiAoIXV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlKHZhbHVlLCBwcm9wLnZhbHVlLCBwcm9wLmNvcHkpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgQ2hlY2sgbm9kZSBoYXMgY2hhbmdlZCBvbiB0aGUgY2VydGFpbiBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2Uobm9kZSwga2V5cywgdmFsdWUpIHtcbiAgICBsZXQgcHJvcCA9IHRoaXMuX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cyk7XG4gICAgXG4gICAgaWYgKCFwcm9wKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gIXV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlKHZhbHVlLCBwcm9wLnZhbHVlLCBwcm9wLmNvcHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBleGNlcHRpb24gbWVzc2FnZVxuICAgKiBcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlIFxuICAgKiBAcGFyYW0ge0Vycm9yfSBlcnIgXG4gICAqL1xuICBfX2NyZWF0ZUV4Y2VwdGlvbk1lc3NhZ2Uobm9kZSwgZXJyKSB7XG4gICAgbGV0IHRhZ05hbWUgPSBub2RlLl9fY29tcG9uZW50LmVsLnRhZ05hbWU7XG4gICAgbGV0IGF0dHJOYW1lID0gbm9kZS5fX2NvbXBvbmVudC5lbC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpO1xuICAgIGxldCBjb21wb25lbnROYW1lID0gKGF0dHJOYW1lIHx8IHRhZ05hbWUpLnRvTG93ZXJDYXNlKCk7XG4gICAgbGV0IGVsZW1lbnROYW1lID0gbm9kZS5fX2VsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGxldCBhdHRyaWJ1dGVOYW1lID0gKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cik/IG5vZGUubmFtZS50b0xvd2VyQ2FzZSgpOiAnJzsgICAgICAgIFxuICAgIGxldCBtZXNzYWdlcyA9IFsgZXJyLm1lc3NhZ2UsIG5vZGUuX19leHByZXNzaW9uIF07XG4gICAgYXR0cmlidXRlTmFtZSAmJiBtZXNzYWdlcy5wdXNoKGBbYXR0cmlidXRlICR7YXR0cmlidXRlTmFtZX1dYCk7XG4gICAgbWVzc2FnZXMgPSBtZXNzYWdlcy5jb25jYXQoWyBgW2VsZW1lbnQgJHtlbGVtZW50TmFtZX1dYCwgYFtjb21wb25lbnQgJHtjb21wb25lbnROYW1lfV1gIF0pO1xuICAgIHJldHVybiBgRXhwcmVzc2lvbiBlcnJvcjogYCArIG1lc3NhZ2VzLmpvaW4oJ1xcblxcdGF0ICcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIG5vZGUgZXhwcmVzc2lvblxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGUobm9kZSkge1xuICAgIGxldCBjb3VudGVyID0gMDtcbiAgICBsZXQgYXR0cmlidXRlVmFsdWU7XG4gICAgbGV0IGV4cHJlc3Npb247XG4gICAgY29uc3QgZXZhbENvbXBvbmVudCA9IG5vZGUuX19hdHRyaWJ1dGVPZiB8fCBub2RlLl9fY29tcG9uZW50O1xuXG4gICAgaWYgKG5vZGUuX19jb21wb25lbnQucGFyZW50cygoY29tKSA9PiBjb20uX19wcmV2ZW50KS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB7IHJlczogbm9kZS5fX2V4cHJlc3Npb24gfTtcbiAgICB9XG5cbiAgICBpZiAoIShub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpICYmIG5vZGUuX19jb21wb25lbnQuX19wcmV2ZW50KSB7XG4gICAgICByZXR1cm4geyByZXM6IG5vZGUuX19leHByZXNzaW9uIH07XG4gICAgfVxuICAgIFxuICAgIGxldCByZXMgPSBub2RlLl9fZXhwcmVzc2lvbi5yZXBsYWNlKGV2YWx1YXRpb25SZWdleEdsb2JhbCwgKG0sIGQpID0+IHtcbiAgICAgIGNvdW50ZXIrKztcbiAgICAgIGxldCBldmFsdWF0ZTtcbiAgICAgIGxldCBldmFsdWF0aW9uID0gW107XG4gICAgICBsZXQgZXhpc3RpbmdCaW5kaW5ncyA9IHt9O1xuICAgICAgbGV0IHBhcmVudEJpbmRpbmdzID0ge307XG4gICAgICBsZXQgcGFyc2VWYWx1ZSA9IG5vZGUuX19jb21wb25lbnQuX19nZXRQYXJzZWRFeHByZXNzaW9uKGQpO1xuICAgICAgQWtpbGkuX19ldmFsdWF0aW9uID0geyBub2RlOiBub2RlLCBsaXN0OiBbXSwgY29tcG9uZW50OiBub2RlLl9fY29tcG9uZW50IH07XG4gICAgICBcbiAgICAgIHRyeSB7XG4gICAgICAgIGV2YWx1YXRlID0gdGhpcy5jb25zdHJ1Y3Rvci5wYXJzZShldmFsQ29tcG9uZW50Ll9fZXZhbHVhdGlvbkNvbXBvbmVudC5zY29wZSwgcGFyc2VWYWx1ZSk7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZXJyKSB7ICAgICAgICBcbiAgICAgICAgdGhyb3cgdGhpcy5fX2NyZWF0ZUV4Y2VwdGlvbk1lc3NhZ2Uobm9kZSwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKEFraWxpLl9fZXZhbHVhdGlvbikge1xuICAgICAgICBldmFsdWF0aW9uID0gQWtpbGkuX19ldmFsdWF0aW9uLmxpc3Q7XG4gICAgICAgIEFraWxpLl9fZXZhbHVhdGlvbi5saXN0ID0gbnVsbDtcbiAgICAgICAgQWtpbGkuX19ldmFsdWF0aW9uID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgZm9yIChsZXQgaSA9IGV2YWx1YXRpb24ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgbGV0IGRhdGEgPSBldmFsdWF0aW9uW2ldO1xuICAgICAgICBsZXQgaGFzaCA9IGRhdGEuY29tcG9uZW50Ll9fY3JlYXRlS2V5c0hhc2goZGF0YS5rZXlzKTtcbiAgICAgICAgbGV0IHBhcmVudHNIYXNoID0gZGF0YS5jb21wb25lbnQuX19jcmVhdGVLZXlzSGFzaChkYXRhLnBhcmVudHMpO1xuICAgICAgIFxuICAgICAgICBpZiAoZGF0YS5ub3RCaW5kaW5nKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXhpc3RpbmdCaW5kaW5nc1toYXNoXSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBhcmVudFZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoZGF0YS5wYXJlbnRzLCBkYXRhLmNvbXBvbmVudC5fX3Njb3BlKTsgICAgICAgIFxuXG4gICAgICAgIGlmIChwYXJlbnRWYWx1ZSAmJiB0eXBlb2YgcGFyZW50VmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBpZiAoQWtpbGkub3B0aW9ucy5kZWJ1ZyAmJiBwYXJlbnRCaW5kaW5nc1twYXJlbnRzSGFzaF0gPT0gNTApIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oW1xuICAgICAgICAgICAgICBgRm9yIGhpZ2hlciBwZXJmb3JtYW5jZSwgZG9uJ3QgbG9vcCBQcm94eSBhcnJheXMvb2JqZWN0cyBpbnNpZGUgZXhwcmVzc2lvbiBmdW5jdGlvbnMsIG9yIHVzZSBBa2lsaS51bmV2YWx1YXRlKCkgdG8gd3JhcCB5b3UgY29kZS5gLFxuICAgICAgICAgICAgICBgJHsgbm9kZS5fX2V4cHJlc3Npb24gfWAsXG4gICAgICAgICAgICAgIGBzY29wZSBwcm9wZXJ0eSBcIiR7IGRhdGEucGFyZW50cy5qb2luKCcuJyl9XCJgXG4gICAgICAgICAgICBdLmpvaW4oJ1xcblxcdGF0ICcpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgIXBhcmVudEJpbmRpbmdzW3BhcmVudHNIYXNoXT8gcGFyZW50QmluZGluZ3NbcGFyZW50c0hhc2hdID0gMTogcGFyZW50QmluZGluZ3NbcGFyZW50c0hhc2hdKys7XG4gICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHV0aWxzLmlzU2NvcGVQcm94eShwYXJlbnRWYWx1ZSkgJiYgXG4gICAgICAgICAgZGF0YS5jb21wb25lbnQgIT09IGV2YWxDb21wb25lbnQuX19ldmFsdWF0aW9uQ29tcG9uZW50ICYmIFxuICAgICAgICAgIGRhdGEuY29tcG9uZW50ID09PSBkYXRhLnJlYWxDb21wb25lbnRcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gIFxuXG4gICAgICAgIGRhdGEuY29tcG9uZW50Ll9fYmluZEFuZFNldFByb3BlcnR5KG5vZGUsIGRhdGEua2V5cywgZGF0YS5ldmFsdWF0ZWQpO1xuICAgICAgICBleGlzdGluZ0JpbmRpbmdzW2hhc2hdID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgZXhpc3RpbmdCaW5kaW5ncyA9IG51bGw7XG4gICAgICBldmFsdWF0aW9uID0gbnVsbDtcblxuICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cikge1xuICAgICAgICBleHByZXNzaW9uID0gbTtcbiAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBldmFsdWF0ZTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZShldmFsdWF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZXZhbHVhdGUgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZXZhbHVhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGUpIHtcbiAgICAgICAgICByZXR1cm4gZXZhbHVhdGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGV2YWx1YXRlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgcmVzLCBjb3VudGVyLCBleHByZXNzaW9uLCBhdHRyaWJ1dGVWYWx1ZSB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgdGhlIG5vZGUgYW5kIHNldCBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtldmFsdWF0ZWRdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYmluZEFuZFNldFByb3BlcnR5KG5vZGUsIGtleXMsIGV2YWx1YXRlZCkge1xuICAgIGxldCBiaW5kID0gdGhpcy5fX2dldEJvdW5kTm9kZShrZXlzLCBub2RlKTtcbiAgICBsZXQgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpO1xuXG4gICAgaWYgKCFiaW5kKSB7XG4gICAgICB0aGlzLl9fYmluZChrZXlzLCB7IG5vZGUgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fX3NldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzLCB2YWx1ZSwgZXZhbHVhdGVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOZXN0ZWQgZXZhbHVhdGlvbiBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtib29sZWFufSBbd2l0aG91dFBhcmVudHM9ZmFsc2VdIC0gaWYgdHJ1ZSBldmFsdWF0aW9uIHdpbGwgYmUgb25seSBmb3IgdGhlIGN1cnJlbnQga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlTmVzdGVkKGtleXMsIHdpdGhvdXRQYXJlbnRzID0gZmFsc2UpIHtcbiAgICBsZXQgc2NvcGUgPSB0aGlzLl9fc2NvcGU7XG4gICAgbGV0IHByb3BzID0gW107ICAgIFxuICAgIFxuICAgIGlmICghd2l0aG91dFBhcmVudHMpIHtcbiAgICAgIGxldCBsYXN0UHJvcHMgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgbGV0IHZhbHVlO1xuXG4gICAgICAgIGxhc3RQcm9wcyA9IFsuLi5sYXN0UHJvcHMsIGtleV07XG4gICAgICAgIHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMobGFzdFByb3BzLCBzY29wZSk7XG4gICAgICAgIHByb3BzLnB1c2goeyBrZXlzOiBsYXN0UHJvcHMsIHZhbHVlOiB2YWx1ZX0pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHByb3BzLnB1c2goeyBrZXlzOiBrZXlzLCB2YWx1ZTogdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgc2NvcGUpfSk7XG4gICAgfVxuXG4gICAgbGV0IHByb3BzTGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gICAgY29uc3QgZWxFdmFsdWF0ZSA9IChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBjb21wb25lbnQgPSBlbGVtZW50Ll9fYWtpbGk7ICAgICBcblxuICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCBwcm9wc0xlbmd0aDsgbSsrKSB7XG4gICAgICAgIGxldCBwcm9wID0gcHJvcHNbbV07XG4gICAgICAgIGxldCBkYXRhO1xuICAgICAgICBcbiAgICAgICAgaWYgKGNvbXBvbmVudCA9PT0gdGhpcykge1xuICAgICAgICAgIGxldCBiaW5kID0gY29tcG9uZW50Ll9fZ2V0QmluZChwcm9wLmtleXMpO1xuICAgICAgICAgIGRhdGEgPSBiaW5kPyAoYmluZC5fX2RhdGEgfHwgW10pOiBbXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkYXRhID0gY29tcG9uZW50Ll9fZ2V0QWxsQmluZHMocHJvcC5rZXlzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgayA9IDAsIGMgPSBkYXRhLmxlbmd0aDsgayA8IGM7IGsrKykge1xuICAgICAgICAgIGNvbnN0IGJpbmQgPSBkYXRhW2tdOyBcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAoY29tcG9uZW50Ll9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2UoYmluZC5ub2RlLCBwcm9wLmtleXMsIHByb3AudmFsdWUpKSB7ICBcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVLZXlzKHByb3Aua2V5cyk7ICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrUHJvcCA9IGNvbXBvbmVudC5fX2dldE5vZGVQcm9wZXJ0eShiaW5kLm5vZGUsIHByb3Aua2V5cyk7XG4gICAgICAgICAgICBjaGVja1Byb3AgJiYgY2hlY2tQcm9wLmV2YWx1YXRlZCAmJiBjb21wb25lbnQuc2NvcGUuX19zZXQocHJvcC5rZXlzLCBwcm9wLnZhbHVlLCBmYWxzZSwgdHJ1ZSk7IFxuICAgICAgICAgICAgY29tcG9uZW50Ll9fZXZhbHVhdGVOb2RlKGJpbmQubm9kZSwgZmFsc2UpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBfayBpbiBiaW5kLm5vZGUuX19wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgIGlmICghYmluZC5ub2RlLl9fcHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShfaykpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgbGV0IF9wcm9wID0gYmluZC5ub2RlLl9fcHJvcGVydGllc1tfa107XG4gICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKF9wcm9wLmtleXMsIF9wcm9wLmNvbXBvbmVudC5fX3Njb3BlKTtcbiAgICAgICAgICAgICAgX3Byb3AuY29tcG9uZW50Ll9fc2V0Tm9kZVByb3BlcnR5KGJpbmQubm9kZSwgX3Byb3Aua2V5cywgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb21wb25lbnQuX19lbmFibGVLZXlzKHByb3Aua2V5cyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGV2YWx1YXRlID0gKGVsZW1lbnRzKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gZWxFdmFsdWF0ZShlbGVtZW50c1tpXSk7XG4gICAgICAgIGV2YWx1YXRlKGNvbXBvbmVudC5fX2NoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZWxFdmFsdWF0ZSh0aGlzLmVsKTtcbiAgICBldmFsdWF0ZSh0aGlzLl9fY2hpbGRyZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIHZhbHVlIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVsZXRlZD1mYWxzZV0gLSB0cnVlIGlmIHZhbHVlIGlzIGRlbGV0aW5nXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVCeUtleXMgKGtleXMsIHZhbHVlLCBpc0RlbGV0ZWQgPSBmYWxzZSkgeyAgICAgXG4gICAgbGV0IGRhdGEgPSB0aGlzLl9fZ2V0QmluZChrZXlzKTtcblxuICAgIGNvbnN0IHVuYmluZCA9IChvYmosIHBhcmVudHMpID0+IHtcbiAgICAgIGZvciAobGV0IGsgaW4gb2JqKSB7XG4gICAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGspIHx8IHRoaXMuX19pc1N5c3RlbUJpbmRpbmdLZXkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBfa2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba10pO1xuICAgICAgICBsZXQgX19rZXlzID0gX2tleXMuc2xpY2UoKTtcbiAgICAgICAgbGV0IF9pc0RlbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IHZhbCA9IG9ialtrXTtcbiAgICAgICAgbGV0IGhhc0tleTtcbiAgICAgICAgXG4gICAgICAgIF9fa2V5cy5zaGlmdCgpO1xuICAgICAgICBoYXNLZXkgPSB1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhfX2tleXMsIHZhbHVlKTtcblxuICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnICYmICFoYXNLZXkpIHtcbiAgICAgICAgICBfaXNEZWxldGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWwgJiYgdHlwZW9mIHZhbCA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHVuYmluZCh2YWwsIF9rZXlzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5fX2V2YWx1YXRlTmVzdGVkKF9rZXlzLCB0cnVlKTtcblxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8ICFoYXNLZXkpIHtcbiAgICAgICAgICB0aGlzLl9fdW5iaW5kKF9rZXlzKTtcbiAgICAgICAgICBfaXNEZWxldGVkICYmIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKF9fa2V5cywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICBkYXRhICYmIHVuYmluZChkYXRhLCBbXS5jb25jYXQoa2V5cykpO1xuICAgIHRoaXMuX19ldmFsdWF0ZU5lc3RlZChrZXlzLCBmYWxzZSk7XG5cbiAgICBpZiAoaXNEZWxldGVkKSB7XG4gICAgICB0aGlzLl9fdW5iaW5kKGtleXMpO1xuICAgICAgaXNEZWxldGVkICYmIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19zY29wZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIGV2ZW50IGV4cHJlc3Npb25cbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlRXZlbnQobm9kZSwgZWwsIGUpIHtcbiAgICBsZXQgZXhwcmVzc2lvbiA9IGV2YWx1YXRpb25SZWdleC5leGVjKG5vZGUuX19leHByZXNzaW9uKTtcbiAgICBsZXQgZXZhbHVhdGU7XG5cbiAgICBpZiAoIWV4cHJlc3Npb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9fZXZhbHVhdGluZ0V2ZW50ID0ge1xuICAgICAgZWw6IGVsLFxuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgZXZlbnQ6IGUsXG4gICAgICBub2RlXG4gICAgfTtcblxuICAgIHRoaXMuX19kaXNhYmxlUHJveHkgPSB7fTtcblxuICAgIHRyeSB7XG4gICAgICBldmFsdWF0ZSA9IHRoaXMuY29uc3RydWN0b3IucGFyc2UodGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQuc2NvcGUsIGV4cHJlc3Npb25bMV0sIHsgZXZlbnQ6IGUgfSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHsgICAgICAgIFxuICAgICAgdGhyb3cgdGhpcy5fX2NyZWF0ZUV4Y2VwdGlvbk1lc3NhZ2Uobm9kZSwgZXJyKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5fX2V2YWx1YXRpbmdFdmVudCA9IG51bGw7XG4gICAgcmV0dXJuIGV2YWx1YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGNoYW5nZXMgYW5kIGV2YWx1YXRlIHRoZSBwYXNzZWQgbm9kZVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtib29sZWFufSBbY2hlY2tdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVOb2RlKG5vZGUsIGNoZWNrID0gdHJ1ZSkge1xuICAgIGNvbnN0IGtleSA9IG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cj8gJ3ZhbHVlJzogJ25vZGVWYWx1ZSc7XG5cbiAgICBpZiAoY2hlY2s/IHRoaXMuX19jaGVja0V2YWx1YXRpb24obm9kZSk6IHRydWUpIHsgICAgICBcbiAgICAgIGNvbnN0IHsgcmVzLCBhdHRyaWJ1dGVWYWx1ZSwgZXhwcmVzc2lvbiwgY291bnRlciB9ID0gdGhpcy5fX2V2YWx1YXRlKG5vZGUpOyAgICAgXG4gICAgICBub2RlW2tleV0gIT0gcmVzICYmIChub2RlW2tleV0gPSByZXMpO1xuXG4gICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHJlcztcbiAgICAgICAgbGV0IGlzQm9vbGVhbkF0dHJpYnV0ZSA9IGZhbHNlO1xuICBcbiAgICAgICAgaWYgKGNvdW50ZXIgPT0gMSAmJiBleHByZXNzaW9uICYmIG5vZGUuX19leHByZXNzaW9uID09IGV4cHJlc3Npb24pIHtcbiAgICAgICAgICB2YWx1ZSA9IGF0dHJpYnV0ZVZhbHVlO1xuICAgICAgICB9XG4gIFxuICAgICAgICBjb25zdCBjbGVhckF0dHJpYnV0ZSA9IG5vZGUubm9kZU5hbWUucmVwbGFjZSgvXmJvb2xlYW4tKC4rKS9pLCAnJDEnKTtcbiAgICAgICAgY29uc3QgY2FtZWxBdHRyaWJ1dGUgPSB1dGlscy50b0NhbWVsQ2FzZShjbGVhckF0dHJpYnV0ZSk7XG4gIFxuICAgICAgICBpZiAoY2xlYXJBdHRyaWJ1dGUgIT0gbm9kZS5ub2RlTmFtZSkge1xuICAgICAgICAgIGlzQm9vbGVhbkF0dHJpYnV0ZSA9IHRydWU7XG4gICAgICAgICAgdmFsdWUgPSAhIXZhbHVlO1xuICAgICAgICB9ICAgICAgICAgIFxuICBcbiAgICAgICAgaWYgKG5vZGUuX19hdHRyaWJ1dGVPbikgeyAgICAgICAgXG4gICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbm9kZS5fX2F0dHJpYnV0ZU9uO1xuICAgICAgICAgICFjb21wb25lbnQuX19zYXZlQXR0cmlidXRlUHJveHlJbiAmJiAodmFsdWUgPSB1dGlscy5jb3B5KHZhbHVlKSk7XG4gICAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IHRydWU7XG4gICAgICAgICAgY29tcG9uZW50LmF0dHJzW2NhbWVsQXR0cmlidXRlXSA9IHZhbHVlO1xuICAgICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSBmYWxzZTtcbiAgXG4gICAgICAgICAgaWYgKGNvbXBvbmVudC5fX2lzTW91bnRlZCkge1xuICAgICAgICAgICAgY29tcG9uZW50Ll9fYXR0clRyaWdnZXJCeU5hbWUoY2FtZWxBdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNCb29sZWFuQXR0cmlidXRlKSB7XG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IG5vZGUuX19lbGVtZW50O1xuICAgICAgICAgIHZhbHVlPyBlbGVtZW50LnNldEF0dHJpYnV0ZShjYW1lbEF0dHJpYnV0ZSwgJ3RydWUnKTogZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoY2FtZWxBdHRyaWJ1dGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVba2V5XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRyaWJ1dGUgbm9kZSBpbml0aWFsaXppbmdcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtDb21wb25lbnR9IGF0dHJpYnV0ZU9mIC0gaWYgbm9kZSBpcyBsaW5rZWQgd2l0aCBwYXJlbnQgc2NvcGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbml0aWFsaXplQXR0cmlidXRlKG5vZGUsIGVsLCBhdHRyaWJ1dGVPZikge1xuICAgIGlmICghbm9kZSB8fCBzeXN0ZW1BdHRyaWJ1dGVzLmluZGV4T2Yobm9kZS5ub2RlTmFtZSkgIT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZighdGhpcy5fX2luaXRpYWxpemVOb2RlKG5vZGUsIGVsKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBldmVudE5hbWUgPSBub2RlLm5vZGVOYW1lLnJlcGxhY2UoL15vbi0oLispL2ksICckMScpO1xuICAgIGxldCBub2RlTmFtZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKG5vZGUubm9kZU5hbWUpO1xuICAgIGxldCBjb21wb25lbnQgPSBhdHRyaWJ1dGVPZj8gYXR0cmlidXRlT2Y6IHRoaXM7XG5cbiAgICBpZiAoZXZlbnROYW1lICE9IG5vZGUubm9kZU5hbWUpIHtcbiAgICAgIGlmIChub2RlLl9fZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgZW1pdHRlciA9IG5ldyBBa2lsaS5FdmVudEVtaXR0ZXIoZXZlbnROYW1lLCBlbCwgY29tcG9uZW50KTtcblxuICAgICAgaWYgKG5vZGUuX19leHByZXNzaW9uKSB7XG4gICAgICAgIGVtaXR0ZXIuYmluZCgoZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBjb21wb25lbnQuX19ldmFsdWF0ZUV2ZW50KG5vZGUsIGVsLCBlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIG5vZGUuX19ldmVudCA9IGVtaXR0ZXI7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKGVtaXR0ZXIpKTtcblxuICAgICAgaWYgKGF0dHJpYnV0ZU9mKSB7XG4gICAgICAgIHRoaXMuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hdHRyc1tub2RlTmFtZV0gPSBlbWl0dGVyO1xuICAgICAgICB0aGlzLl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGF0dHJpYnV0ZU9mKSB7XG4gICAgICBub2RlLl9fYXR0cmlidXRlT24gPSB0aGlzO1xuICAgICAgbm9kZS5fX2F0dHJpYnV0ZU9mID0gY29tcG9uZW50O1xuICAgIH1cbiAgICBcbiAgICBsZXQgY2hlY2sgPSB0aGlzLl9fY29tcGlsaW5nPyB0aGlzLl9fY29tcGlsaW5nLmNoZWNrQ2hhbmdlczogZmFsc2U7XG4gICAgY29tcG9uZW50Ll9fZXZhbHVhdGVOb2RlKG5vZGUsIGNoZWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBub2RlXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemVOb2RlKG5vZGUsIGVsKSB7XG4gICAgaWYgKG5vZGUuX19pbml0aWFsaXplZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgdmFsID0gbm9kZVsobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKT8gJ3ZhbHVlJzogJ25vZGVWYWx1ZSddLnRyaW0oKTtcbiAgICBjb25zdCBoYXNCaW5kaW5nID0gZXZhbHVhdGlvblJlZ2V4LnRlc3QodmFsKTtcbiAgICBjb25zdCBpc0Jvb2xlYW4gPSAvXmJvb2xlYW4tL2kudGVzdChub2RlLm5vZGVOYW1lKTtcbiAgICBjb25zdCBpc0V2ZW50ID0gL15vbi0oLispL2kudGVzdChub2RlLm5vZGVOYW1lKTtcblxuICAgIGlmKCFlbC5fX2FraWxpICYmICFoYXNCaW5kaW5nICYmICFpc0Jvb2xlYW4gJiYgIWlzRXZlbnQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBub2RlLl9faXNFdmVudCA9IGlzRXZlbnQ7XG4gICAgbm9kZS5fX2hhc0JpbmRpbmdzID0gaGFzQmluZGluZztcbiAgICBub2RlLl9faXNCb29sZWFuID0gaXNCb29sZWFuO1xuICAgIG5vZGUuX19leHByZXNzaW9uID0gdmFsO1xuICAgIG5vZGUuX19wcm9wZXJ0aWVzID0ge307XG4gICAgbm9kZS5fX2F0dHJpYnV0ZU9mID0gbnVsbDtcbiAgICBub2RlLl9fYXR0cmlidXRlT24gPSBudWxsO1xuICAgIG5vZGUuX19ldmVudCA9IG51bGw7ICAgIFxuICAgIG5vZGUuX19pbml0aWFsaXplZCA9IHRydWU7XG4gICAgbm9kZS5fX2NvbXBvbmVudCA9IHRoaXM7XG4gICAgbm9kZS5fX2VsZW1lbnQgPSBlbDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWluaXRpYWxpemUgdGhlIG5vZGVcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVpbml0aWFsaXplTm9kZShub2RlKSB7XG4gICAgaWYgKG5vZGUuX19ldmVudCkge1xuICAgICAgbm9kZS5fX2V2ZW50LnVuYmluZCgpO1xuICAgIH1cblxuICAgIGlmIChub2RlLl9faGFzQmluZGluZ3MpIHtcbiAgICAgIHRoaXMuX19wYXJlbnQgJiYgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5fX3VuYmluZEJ5Tm9kZXMoW25vZGVdKTsgICAgICAgICAgXG4gICAgfVxuXG4gICAgZGVsZXRlIG5vZGUuX19oYXNCaW5kaW5ncztcbiAgICBkZWxldGUgbm9kZS5fX2lzQm9vbGVhbjtcbiAgICBkZWxldGUgbm9kZS5fX2lzRXZlbnQ7XG4gICAgZGVsZXRlIG5vZGUuX19leHByZXNzaW9uO1xuICAgIGRlbGV0ZSBub2RlLl9fcHJvcGVydGllcztcbiAgICBkZWxldGUgbm9kZS5fX2F0dHJpYnV0ZU9mO1xuICAgIGRlbGV0ZSBub2RlLl9fYXR0cmlidXRlT247XG4gICAgZGVsZXRlIG5vZGUuX19ldmVudDsgICAgXG4gICAgZGVsZXRlIG5vZGUuX19pbml0aWFsaXplZDtcbiAgICBkZWxldGUgbm9kZS5fX2NvbXBvbmVudDtcbiAgICBkZWxldGUgbm9kZS5fX2VsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJwb2xhdGUgYXR0cmlidXRlcyBvZiB0aGUgZWxlbWVudFxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBbYXR0cmlidXRlT2Y9bnVsbF0gLSBpZiBub2RlIGlzIGxpbmtlZCB3aXRoIHBhcmVudCBzY29wZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2ludGVycG9sYXRlQXR0cmlidXRlcyhlbCwgYXR0cmlidXRlT2YgPSBudWxsKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGF0dHJzID0gZWwuYXR0cmlidXRlcywgbCA9IGF0dHJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdGhpcy5fX2luaXRpYWxpemVBdHRyaWJ1dGUoYXR0cnNbaV0sIGVsLCBhdHRyaWJ1dGVPZik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZSBhdHRyaWJ1dGVzIGFzIHByb3h5XG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVmaW5lQXR0cmlidXRlcygpIHtcbiAgICBjb25zdCBjaGFuZ2VBdHRyaWJ1dGUgPSAoa2V5LCB2YWx1ZSwgaXNEZWxldGVkID0gZmFsc2UpID0+IHtcbiAgICAgIGlmICh0aGlzLl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBub2RlID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGVOb2RlKGtleSk7XG5cbiAgICAgIGlmIChpc0RlbGV0ZWQpIHtcbiAgICAgICAgbm9kZSAmJiB0aGlzLl9fZGVpbml0aWFsaXplTm9kZShub2RlKTtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICAgICAgcmV0dXJuIFxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIW5vZGUpIHtcbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgICAgIG5vZGUgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZU5vZGUoa2V5KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBub2RlLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX19kZWluaXRpYWxpemVOb2RlKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9faW5pdGlhbGl6ZUF0dHJpYnV0ZShub2RlLCB0aGlzLmVsLCB0aGlzLl9fYXR0cmlidXRlT2YpO1xuICAgIH07XG5cbiAgICB0aGlzLmF0dHJzID0gbmV3IFByb3h5KHRoaXMuX19hdHRycywge1xuICAgICAgZ2V0OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgaWYgKGtleSA9PSAnX19pc1Byb3h5Jykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgfSxcbiAgICAgIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgYXR0cktleSA9IHV0aWxzLnRvRGFzaENhc2Uoa2V5KTtcblxuICAgICAgICBpZiAodGhpcy5ib29sZWFuQXR0cmlidXRlcy5pbmRleE9mKGF0dHJLZXkpICE9IC0xKSB7XG4gICAgICAgICAgYXR0cktleSA9IGBib29sZWFuLSR7YXR0cktleX1gO1xuICAgICAgICAgIHZhbHVlPyB0aGlzLmVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTogdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgY2hhbmdlQXR0cmlidXRlKGF0dHJLZXksIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZSh2YWx1ZSkpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBkZWxldGVQcm9wZXJ0eTogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgYXR0cktleSA9IHV0aWxzLnRvRGFzaENhc2Uoa2V5KTtcbiAgICAgICAgY2hhbmdlQXR0cmlidXRlKGF0dHJLZXksIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZSh2YWx1ZSksIHRydWUpO1xuICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBwcm94eSB0byBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEByZXR1cm5zIHtQcm94eX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19vYnNlcnZlKG9iaiwgcGFyZW50cykge1xuICAgIHJldHVybiBuZXcgUHJveHkob2JqLCB7XG4gICAgICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4geyBcbiAgICAgICAgaWYgKGtleSA9PSBcIl9faXNQcm94eVwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IFwiX190YXJnZXRcIikge1xuICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IFwiX19jb21wb25lbnRcIikge1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PSBcIl9fa2V5c1wiKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudHM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLl9faXNTeXN0ZW1LZXkoa2V5KSkge1xuICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBa2lsaS5fX2V2YWx1YXRpb24pIHsgIFxuICAgICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrZXldKTtcbiAgICAgICAgICBsZXQgbm90QmluZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGxldCBldmFsdWF0ZWQgPSAhdXRpbHMuaGFzUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKTsgXG4gICAgICAgICAgbGV0IGNvbXBvbmVudCA9IHRoaXM7XG4gICAgICAgICAgbGV0IGV4Y0FyciA9IGtleXMuc2xpY2UoKTtcblxuICAgICAgICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBTY29wZSkge1xuICAgICAgICAgICAgbGV0IHJlYWxUYXJnZXQgPSB1dGlscy5nZXRPd25Qcm9wZXJ0eVRhcmdldCh0YXJnZXQsIGtleSk7XG4gICAgICAgICAgICByZWFsVGFyZ2V0ICYmIChyZWFsVGFyZ2V0IGluc3RhbmNlb2YgU2NvcGUpICYmIChjb21wb25lbnQgPSAgcmVhbFRhcmdldC5fX2NvbXBvbmVudCk7XG4gICAgICAgICAgfSBcblxuICAgICAgICAgIGlmIChBa2lsaS5fX3dyYXBwaW5nICYmIGtleXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGZvclBhcmVudHMgPSBBa2lsaS5fX2V2YWx1YXRpb24uY29tcG9uZW50LnBhcmVudHMoYyA9PiBjIGluc3RhbmNlb2YgQWtpbGkuY29tcG9uZW50cy5Gb3IpO1xuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBmb3JQYXJlbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgayA9IDAsIGMgPSBrZXlzLmxlbmd0aDsgayA8IGM7IGsrKykgeyBcbiAgICAgICAgICAgICAgY29uc3QgZm9yRGF0YSA9IGZvclBhcmVudHNbaV0uZGF0YTtcbiAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGV4Y0FyciwgY29tcG9uZW50Ll9fc2NvcGUpO1xuXG4gICAgICAgICAgICAgIGlmIChkYXRhICYmIHR5cGVvZiBkYXRhID09ICdvYmplY3QnICYmIGZvckRhdGEgPT09IGRhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICAgIGV4Y0Fyci5wb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9ICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICBpZiAoIShrZXkgaW4gdGFyZ2V0KSkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfSAgICAgICAgICBcbiAgICAgICAgICBlbHNlIGlmICghdXRpbHMuZ2V0RW51bWVyYWJsZVByb3BlcnR5VGFyZ2V0KHRhcmdldCwga2V5KSkge1xuICAgICAgICAgICAgbm90QmluZGluZyA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fX2JpbmROb2RlKEFraWxpLl9fZXZhbHVhdGlvbi5saXN0LCBjb21wb25lbnQsIGtleXMsIHBhcmVudHMsIHRhcmdldFtrZXldLCBub3RCaW5kaW5nLCBldmFsdWF0ZWQpO1xuICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgIH0sXG4gICAgICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHsgXG4gICAgICAgIGlmICh0aGlzLl9faXNTeXN0ZW1LZXkoa2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRhcmdldFtrZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdmFsdWUgPSBBa2lsaS53cmFwRnVuY3Rpb24odmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tleV0pO1xuXG4gICAgICAgIGlmICh0aGlzLl9fY2hlY2tEaXNhYmxlbWVudChrZXlzKSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBDSEVDS19FWElTVEVOQ0U6IGlmIChwYXJlbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsZXQgdGFyZ2V0UGFyZW50VmFsdWUgPSBwYXJlbnRzLmxlbmd0aCA+IDE/IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKHBhcmVudHMuc2xpY2UoMCwgLTEpLCB0aGlzLl9fc2NvcGUpOiB0aGlzLl9fc2NvcGU7XG4gICAgICAgICAgXG4gICAgICAgICAgZm9yIChsZXQgayBpbiB0YXJnZXRQYXJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgaWYgKCF0YXJnZXRQYXJlbnRWYWx1ZS5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRhcmdldFBhcmVudFZhbHVlW2tdICYmIHRhcmdldFBhcmVudFZhbHVlW2tdLl9fdGFyZ2V0ID09PSB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgYnJlYWsgQ0hFQ0tfRVhJU1RFTkNFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXRba2V5XSA9IHRoaXMuX19uZXN0ZWRPYnNlcnZlKHZhbHVlLCBrZXlzKTtcblxuICAgICAgICBpZighdGhpcy5fX2lzUmVzb2x2ZWQpIHtcbiAgICAgICAgICB0aGlzLl9fdHJpZ2dlclN0b3JlQW5kQXR0cihrZXlzLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICBcbiAgICAgICAgaWYgKEFraWxpLl9faXNvbGF0aW9uKSB7IFxuICAgICAgICAgIHRoaXMuX19jcmVhdGVJc29sYXRpb25PYmplY3QocGFyZW50cywga2V5LCBmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLl9faXNSZXNvbHZlZCkge1xuICAgICAgICAgIHRoaXMuX190cmlnZ2VyU3RvcmVBbmRBdHRyKGtleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuX19pc01vdW50ZWQpIHsgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgdGhpcy5fX2V2YWx1YXRlQnlLZXlzKGtleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgY29uc3Qga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG5cbiAgICAgICAgaWYgKHRoaXMuX19jaGVja0Rpc2FibGVtZW50KGtleXMpKSB7XG4gICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuXG4gICAgICAgIGlmKCF0aGlzLl9faXNSZXNvbHZlZCkge1xuICAgICAgICAgIHRoaXMuX190cmlnZ2VyU3RvcmVBbmRBdHRyKGtleXMsIHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChBa2lsaS5fX2lzb2xhdGlvbikge1xuICAgICAgICAgIHRoaXMuX19jcmVhdGVJc29sYXRpb25PYmplY3QocGFyZW50cywga2V5LCB0cnVlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuX19pc1Jlc29sdmVkKSB7XG4gICAgICAgICAgdGhpcy5fX3RyaWdnZXJTdG9yZUFuZEF0dHIoa2V5cywgdW5kZWZpbmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX19ldmFsdWF0ZUJ5S2V5cyhrZXlzLCB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIHN0b3JlIGFuZCBhdHRyaWJ1dGVzIGNoYW5nZVxuICAgKi9cbiAgX190cmlnZ2VyU3RvcmVBbmRBdHRyKGtleXMsIHZhbHVlKSB7XG4gICAgY29uc3Qga2V5U3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpO1xuXG4gICAgaWYgKHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ10pIHtcbiAgICAgIHRoaXMuX19zdG9yZVRyaWdnZXJCeUtleXMoa2V5cywgdmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ10pIHtcbiAgICAgIHRoaXMuX19hdHRyVHJpZ2dlckJ5S2V5cyhrZXlzLCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBoYXNoIGZvciB0aGUga2V5c1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHJldHVybnMge3N0cmluZ30gICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlS2V5c0hhc2goa2V5cykge1xuICAgIHJldHVybiBgJHt0aGlzLl9fc2NvcGUuX19uYW1lfS4ke0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgc3RvcmUgb2YgdGhlIGRpc2FibGVtZW50IHR5cGVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFxuICAgKi9cbiAgX19nZXREaXNhYmxlbWVudFR5cGVTdG9yZSh0eXBlKSB7XG4gICAgcmV0dXJuICh7XG4gICAgICBwcm94eTogJ19fZGlzYWJsZVByb3h5JyxcbiAgICAgIHN0b3JlOiAnX19kaXNhYmxlU3RvcmVLZXlzJyxcbiAgICAgIGF0dHI6ICdfX2Rpc2FibGVBdHRyS2V5cydcbiAgICB9KVt0eXBlXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIHRoZSBrZXlzIHNldHRlclxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyAgXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZV0gIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2Rpc2FibGVLZXlzKGtleXMsIHR5cGUgPSAncHJveHknKSB7ICAgIFxuICAgIHRoaXNbdGhpcy5fX2dldERpc2FibGVtZW50VHlwZVN0b3JlKHR5cGUpXVtrZXlzPyB0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyk6ICdfX2FsbCddID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgdGhlIGtleXMgc2V0dGVyXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3R5cGVdICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZW5hYmxlS2V5cyhrZXlzLCB0eXBlID0gJ3Byb3h5Jykge1xuICAgIGRlbGV0ZSB0aGlzW3RoaXMuX19nZXREaXNhYmxlbWVudFR5cGVTdG9yZSh0eXBlKV1ba2V5cz8gdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpOiAnX19hbGwnXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUga2V5cyBzZXR0ZXIgZGlzYWJsZW1hbnRcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZV0gICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jaGVja0Rpc2FibGVtZW50KGtleXMsIHR5cGUgPSAncHJveHknKSB7XG4gICAgY29uc3Qgc3RvcmUgPSB0aGlzLl9fZ2V0RGlzYWJsZW1lbnRUeXBlU3RvcmUodHlwZSk7XG4gICAgcmV0dXJuIHRoaXNbc3RvcmVdLl9fYWxsPyB0cnVlOiB0aGlzW3N0b3JlXVt0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyldO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmUgdGhlIHZhbHVlIHRvIHRoZSBzdG9yZSBieSB0aGUga2V5c1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zdG9yZVRyaWdnZXJCeUtleXMoa2V5cywgdmFsdWUpIHsgXG4gICAgaWYgKHRoaXMuX19jaGVja0Rpc2FibGVtZW50KGtleXMsICdzdG9yZScpKSB7ICAgICAgXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbGlua3MgPSB0aGlzLl9fc3RvcmVMaW5rc1tBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyldO1xuXG4gICAgaWYgKCFsaW5rcyB8fCAhbGlua3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIHZhbHVlID0gdXRpbHMuY29weSh2YWx1ZSk7XG4gICAgY29uc3QgcCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTsgICBcbiAgICAgIFxuICAgICAgaWYgKCFsaW5rLnNldCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgcC5wdXNoKHRoaXMuX19zdG9yZVRyaWdnZXJCeU5hbWUobGluay5uYW1lLCB2YWx1ZSkpOyAgICAgIFxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocCk7XG4gIH1cblxuICAvKipcbiAgICogU2F2ZSB0aGUgdmFsdWUgdG8gdGhlIHN0b3JlIGJ5IHRoZSBuYW1lXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zdG9yZVRyaWdnZXJCeU5hbWUobmFtZSwgdmFsdWUpIHsgIFxuICAgIHN0b3JlLl9fdGFyZ2V0W25hbWVdID0gdmFsdWU7XG4gICAgbGV0IGxpbmtzID0gKEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSB8fCBbXSkuY29uY2F0KEFraWxpLl9fc3RvcmVMaW5rc1snKiddIHx8IFtdKTtcblxuICAgIGlmICghbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxpbmtzID0gdXRpbHMuc29ydChsaW5rcywgWydkYXRlJ10sIHRydWUpO1xuXG4gICAgcmV0dXJuIEFraWxpLm5leHRUaWNrKCgpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGlua3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbGluay5jb21wb25lbnQ7XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudCA9PT0gdGhpcykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAobGluay5mbikge1xuICAgICAgICAgIEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBsaW5rLmZuLmNhbGwoY29tcG9uZW50LCB2YWx1ZSwgbmFtZSkpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbGluay5nZXQpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVLZXlzKGxpbmsua2V5cywgJ3N0b3JlJyk7XG4gICAgICAgIGxldCBjdXJyZW50ID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMobGluay5rZXlzLCBjb21wb25lbnQuX19zY29wZSk7XG4gICAgICAgICF1dGlscy5jb21wYXJlKGN1cnJlbnQsIHZhbHVlKSAmJiBjb21wb25lbnQuc2NvcGUuX19zZXQobGluay5rZXlzLCB2YWx1ZSk7ICAgXG4gICAgICAgIGNvbXBvbmVudC5fX2VuYWJsZUtleXMobGluay5rZXlzLCAnc3RvcmUnKTtcbiAgICAgIH0gIFxuICAgIH0pOyAgIFxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHN0b3JlIGxpbmsgd2l0aCB0aGUgc2NvcGUgcHJvcGVydHlcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge29iaGVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc3RvcmVCeUtleXMobmFtZSwga2V5cywgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IHsgZ2V0OiB0cnVlLCBzZXQ6IHRydWUsIC4uLm9wdGlvbnMgfTtcblxuICAgIGlmICgha2V5cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBTdG9yZSBsaW5rIFwiJHtuYW1lfVwiIG11c3QgaGF2ZSB0aGUgc2NvcGUgcHJvcGVydHkgbmFtZWApO1xuICAgIH1cblxuICAgIGlmICghb3B0aW9ucy5nZXQgJiYgIW9wdGlvbnMuc2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFN0b3JlIGxpbmsgXCIke25hbWV9XCIgbXVzdCBoYXZlIGF0IGxlYXN0IFwiZ2V0XCIgb3IgXCJzZXRcIiBvcHRpb24gYXMgdHJ1ZWApO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5fX2Rpc2FibGVLZXlzKGtleXMsICdzdG9yZScpO1xuICAgIChzdG9yZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSB8fCAhdXRpbHMuaGFzUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKSkgJiYgdGhpcy5zY29wZS5fX3NldChrZXlzLCBzdG9yZVtuYW1lXSk7XG4gICAgdGhpcy5fX2VuYWJsZUtleXMoa2V5cywgJ3N0b3JlJyk7XG4gICAgbGV0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcbiAgICBsZXQgaW5mbztcblxuICAgIGlmICghdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXSkge1xuICAgICAgdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXSA9IFtdO1xuICAgIH1cblxuICAgIGxldCBhcnIgPSB0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBhcnJbaV07XG5cbiAgICAgIGlmIChyZXMuY29tcG9uZW50ID09PSB0aGlzICYmIHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmtleVN0cmluZyA9PSBrZXlTdHJpbmcpIHtcbiAgICAgICAgcmVzLnNldCA9IG9wdGlvbnMuc2V0O1xuICAgICAgICByZXMuZ2V0ID0gb3B0aW9ucy5nZXQ7XG4gICAgICAgIHJlcy5kYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdKSB7XG4gICAgICBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBpbmZvID0geyBjb21wb25lbnQ6IHRoaXMsIG5hbWUsIGtleXMsIGtleVN0cmluZywgZGF0ZTogRGF0ZS5ub3coKSwgc2V0OiBvcHRpb25zLnNldCwgZ2V0OiBvcHRpb25zLmdldCB9O1xuICAgIHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ10ucHVzaChpbmZvKTtcbiAgICBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0ucHVzaChpbmZvKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBzdG9yZSBsaW5rIHdpdGggdGhlIGZ1bmN0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gICBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgX19zdG9yZUJ5RnVuY3Rpb24obmFtZSwgZm4sIG9wdGlvbnMgPSB7fSkgeyBcbiAgICBsZXQgY2FsbCA9IG9wdGlvbnMuY2FsbE9uU3RhcnQgPT09IHVuZGVmaW5lZD8gc3RvcmUuX190YXJnZXQuaGFzT3duUHJvcGVydHkobmFtZSk6IG9wdGlvbnMuY2FsbE9uU3RhcnQ7XG5cbiAgICBpZiAoIUFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSkge1xuICAgICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSBsaW5rcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGxpbmtzW2ldO1xuXG4gICAgICBpZiAocmVzLmNvbXBvbmVudCA9PT0gdGhpcyAmJiByZXMubmFtZSA9PSBuYW1lICYmIHJlcy5mbiA9PT0gZm4pIHtcbiAgICAgICAgcmVzLmRhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdLnB1c2goeyBjb21wb25lbnQ6IHRoaXMsIG5hbWUsIGZuLCBkYXRlOiBEYXRlLm5vdygpIH0pO1xuXG4gICAgaWYgKG5hbWUgPT0gJyonICYmIG9wdGlvbnMuY2FsbE9uU3RhcnQgIT09IGZhbHNlKSB7XG4gICAgICBsZXQgc3RvcmVLZXlzID0gT2JqZWN0LmtleXMoc3RvcmUuX190YXJnZXQpO1xuICAgICAgbGV0IHAgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBzdG9yZUtleXMubGVuZ3RoIDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQga2V5ID0gc3RvcmVLZXlzW2ldO1xuICAgICAgICBsZXQgdmFsID0gc3RvcmUuX190YXJnZXRba2V5XTtcbiAgICAgICAgcC5wdXNoKEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBmbi5jYWxsKHRoaXMsIHZhbCwga2V5KSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwocCk7XG4gICAgfVxuXG4gICAgaWYgKGNhbGwpIHtcbiAgICAgIHJldHVybiBBa2lsaS51bmlzb2xhdGUoKCkgPT4gZm4uY2FsbCh0aGlzLCBzdG9yZVtuYW1lXSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHN0b3JlIGxpbmsgd2l0aCB0aGUgc2NvcGUgcHJvcGVydHlcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5zdG9yZUJ5S2V5cyhuYW1lLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBoYXZlIHRvIHBhc3MgdGhlIHNjb3BlIHByb3BlcnR5IG5hbWUgZm9yIHN0b3JlIGxpbmsgXCIke25hbWV9XCJgKTtcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuXG4gICAgbGV0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcbiAgICBsZXQgYXJyID0gdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXTtcblxuICAgIGlmICghYXJyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuICAgICAgbGV0IGxpbmtzID0gQWtpbGkuX19zdG9yZUxpbmtzW3Jlcy5uYW1lXTtcblxuICAgICAgaWYgKHJlcy5jb21wb25lbnQgIT09IHRoaXMgfHwgcmVzLm5hbWUgIT0gbmFtZSB8fCByZXMua2V5U3RyaW5nICE9IGtleVN0cmluZykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgYXJyLnNwbGljZShpLCAxKTtcblxuICAgICAgaWYgKCFsaW5rcyB8fCAhbGlua3MubGVuZ3RoKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBrID0gbGlua3MubGVuZ3RoIC0gMTsgayA+PSAwOyBrLS0pIHtcbiAgICAgICAgbGV0IGxpbmsgPSBsaW5rc1trXTtcblxuICAgICAgICBpZiAobGluay5jb21wb25lbnQgPT09IHRoaXMgJiYgbGluay5rZXlTdHJpbmcgPT0ga2V5U3RyaW5nKSB7XG4gICAgICAgICAgbGlua3Muc3BsaWNlKGssIDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghbGlua3MubGVuZ3RoKSB7XG4gICAgICAgIGRlbGV0ZSBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFhcnIubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBzdG9yZSBsaW5rIHdpdGggdGhlIGZ1bmN0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5zdG9yZUJ5RnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZiAoIUFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBsaW5rcyA9IEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYgKHJlcy5jb21wb25lbnQgPT09IHRoaXMgJiYgcmVzLm5hbWUgPT0gbmFtZSAmJiByZXMuZm4gPT09IGZuKSB7XG4gICAgICAgIGxpbmtzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgYW4gYXR0cmlidXRlIGV2ZW50IGJ5IHRoZSBrZXlzXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKiBAcGFyYW0geyp9IHZhbHVlICAgIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2F0dHJUcmlnZ2VyQnlLZXlzKGtleXMsIHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuX19jaGVja0Rpc2FibGVtZW50KGtleXMsICdhdHRyJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbGlua3MgPSB0aGlzLl9fYXR0ckxpbmtzW0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKV07XG4gICBcbiAgICBpZiAoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIEFraWxpLm5leHRUaWNrKCgpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGlua3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTtcblxuICAgICAgICBpZiAobGluay5mbikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFsaW5rLnNldCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBldiA9ICdvbicgKyB1dGlscy5jYXBpdGFsaXplKGxpbmsubmFtZSk7XG4gICAgICAgIHRoaXMuYXR0cnNbZXZdICYmIHRoaXMuYXR0cnNbZXZdLnRyaWdnZXIodmFsdWUsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9KTsgIFxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgYW4gYXR0cmlidXRlIGV2ZW50IGJ5IHRoZSBuYW1lXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hdHRyVHJpZ2dlckJ5TmFtZShuYW1lLCB2YWx1ZSkge1xuICAgIGxldCBsaW5rcyA9ICh0aGlzLl9fYXR0ckxpbmtzW25hbWVdIHx8IFtdKS5jb25jYXQodGhpcy5fX2F0dHJMaW5rc1snKiddIHx8IFtdKTtcbiAgICBcbiAgICBpZiAoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9ICBcbiAgICBcbiAgICBsaW5rcyA9IHV0aWxzLnNvcnQobGlua3MsIFsnZGF0ZSddLCB0cnVlKTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxpbmtzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY29uc3QgbGluayA9IGxpbmtzW2ldOyAgICBcblxuICAgICAgaWYgKGxpbmsuZm4pIHtcbiAgICAgICAgQWtpbGkudW5pc29sYXRlKCgpID0+IGxpbmsuZm4uY2FsbCh0aGlzLCB2YWx1ZSwgdXRpbHMudG9EYXNoQ2FzZShuYW1lKSkpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYoIWxpbmsuZ2V0KSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0aGlzLl9fZGlzYWJsZUtleXMobGluay5rZXlzLCAnYXR0cicpO1xuICAgICAgbGV0IGN1cnJlbnQgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhsaW5rLmtleXMsIHRoaXMuX19zY29wZSk7XG4gICAgICAhdXRpbHMuY29tcGFyZShjdXJyZW50LCB2YWx1ZSkgJiYgdGhpcy5zY29wZS5fX3NldChsaW5rLmtleXMsIHZhbHVlKTtcbiAgICAgIHRoaXMuX19lbmFibGVLZXlzKGxpbmsua2V5cywgJ2F0dHInKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGF0dHJpYnV0ZSBsaW5rIHdpdGggdGhlIHNjb3BlIHByb3BlcnR5XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2F0dHJCeUtleXMobmFtZSwga2V5cywgb3B0aW9ucyA9IHt9KSB7ICAgXG4gICAgb3B0aW9ucyA9IHsgZ2V0OiB0cnVlLCBzZXQ6IHRydWUsIC4uLm9wdGlvbnMgfTtcbiAgICBuYW1lID0gdXRpbHMudG9DYW1lbENhc2UobmFtZSk7XG5cbiAgICBpZiAoIWtleXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQXR0cmlidXRlIGxpbmsgXCIke25hbWV9XCIgbXVzdCBoYXZlIHRoZSBzY29wZSBwcm9wZXJ0eSBuYW1lYCk7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLl9fZGlzYWJsZUtleXMoa2V5cywgJ2F0dHInKTtcbiAgICAodGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eShuYW1lKSB8fCAhdXRpbHMuaGFzUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKSkgJiYgdGhpcy5zY29wZS5fX3NldChrZXlzLCB0aGlzLmF0dHJzW25hbWVdKTsgXG4gICAgdGhpcy5fX2VuYWJsZUtleXMoa2V5cywgJ2F0dHInKTtcbiAgICBsZXQga2V5U3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpO1xuICAgIFxuICAgIGlmICghdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddKSB7XG4gICAgICB0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ10gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgYXJyID0gdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBhcnJbaV07XG5cbiAgICAgIGlmIChyZXMubmFtZSA9PSBuYW1lICYmIHJlcy5rZXlTdHJpbmcgPT0ga2V5U3RyaW5nKSB7XG4gICAgICAgIHJlcy5nZXQgPSBvcHRpb25zLmdldDtcbiAgICAgICAgcmVzLnNldCA9IG9wdGlvbnMuc2V0O1xuICAgICAgICByZXMuZGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ10ucHVzaCh7IG5hbWUsIGtleXMsIGtleVN0cmluZywgZGF0ZTogRGF0ZS5ub3coKSwgc2V0OiBvcHRpb25zLnNldCwgZ2V0OiBvcHRpb25zLmdldCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gYXR0cmlidXRlIGxpbmsgd2l0aCB0aGUgZnVuY3Rpb25cbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWQgXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgX19hdHRyQnlGdW5jdGlvbihuYW1lLCBmbiwgb3B0aW9ucyA9IHt9KSB7ICAgIFxuICAgIG5hbWUgPSB1dGlscy50b0NhbWVsQ2FzZShuYW1lKTtcbiAgICBsZXQgY2FsbCA9IG9wdGlvbnMuY2FsbE9uU3RhcnQgPT09IHVuZGVmaW5lZD8gdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eShuYW1lKTogb3B0aW9ucy5jYWxsT25TdGFydDsgICAgXG5cbiAgICBpZiAoIXRoaXMuX19hdHRyTGlua3NbbmFtZV0pIHtcbiAgICAgIHRoaXMuX19hdHRyTGlua3NbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSB0aGlzLl9fYXR0ckxpbmtzW25hbWVdO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSBsaW5rcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGxpbmtzW2ldO1xuXG4gICAgICBpZiAocmVzLm5hbWUgPT0gbmFtZSAmJiByZXMuZm4gPT09IGZuKSB7XG4gICAgICAgIHJlcy5kYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB0aGlzLl9fYXR0ckxpbmtzW25hbWVdLnB1c2goeyBuYW1lLCBmbiwgZGF0ZTogRGF0ZS5ub3coKSB9KTtcblxuICAgIGlmIChuYW1lID09ICcqJyAmJiBvcHRpb25zLmNhbGxPblN0YXJ0ICE9PSBmYWxzZSkge1xuICAgICAgbGV0IGF0dHJzS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuX19hdHRycykuZmlsdGVyKGsgPT4gISh0aGlzLl9fYXR0cnNba10gaW5zdGFuY2VvZiBBa2lsaS5FdmVudEVtaXR0ZXIpKTtcbiAgICAgIGxldCBwID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gYXR0cnNLZXlzLmxlbmd0aCA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGtleSA9IGF0dHJzS2V5c1tpXTtcbiAgICAgICAgbGV0IHZhbCA9IHRoaXMuX19hdHRyc1trZXldO1xuICAgICAgICBwLnB1c2goQWtpbGkudW5pc29sYXRlKCgpID0+IGZuLmNhbGwodGhpcywgdmFsLCB1dGlscy50b0Rhc2hDYXNlKGtleSkpKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChwKTtcbiAgICB9XG4gICAgXG4gICAgaWYgKGNhbGwpIHtcbiAgICAgIHJldHVybiBBa2lsaS51bmlzb2xhdGUoKCkgPT4gZm4uY2FsbCh0aGlzLCB0aGlzLmF0dHJzW25hbWVdKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgYXR0cmlidXRlIGxpbmsgd2l0aCB0aGUgc2NvcGUgcHJvcGVydHlcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5hdHRyQnlLZXlzKG5hbWUsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IGhhdmUgdG8gcGFzcyB0aGUgc2NvcGUgcHJvcGVydHkgbmFtZSBmb3IgYXR0cmlidXRlIGxpbmsgXCIke25hbWV9XCJgKTtcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuXG4gICAgbGV0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcbiAgICBsZXQgYXJyID0gdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddO1xuXG4gICAgaWYgKCFhcnIubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBhcnJbaV07XG5cbiAgICAgIGlmIChyZXMubmFtZSAhPSBuYW1lIHx8IHJlcy5rZXlTdHJpbmcgIT0ga2V5U3RyaW5nKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBhcnIuc3BsaWNlKGksIDEpO1xuICAgIH1cblxuICAgIGlmICghYXJyLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXTtcbiAgICB9XG4gIH1cblxuICAgLyoqXG4gICAqIFJlbW92ZSB0aGUgYXR0cmlidXRlIGxpbmsgd2l0aCB0aGUgZnVuY3Rpb25cbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYXR0ckJ5RnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZiAoIXRoaXMuX19hdHRyTGlua3NbbmFtZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSB0aGlzLl9fYXR0ckxpbmtzW25hbWVdO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSBsaW5rcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGxpbmtzW2ldO1xuXG4gICAgICBpZiAocmVzLm5hbWUgPT0gbmFtZSAmJiByZXMuZm4gPT09IGZuKSB7XG4gICAgICAgIGxpbmtzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fYXR0ckxpbmtzW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUga2V5IGlzIHN5c3RlbVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2lzU3lzdGVtS2V5IChrZXkpIHtcbiAgICBpZiAoa2V5ID09ICdfXycgfHwgKGtleVswXSA9PSAnXycgJiYga2V5WzFdID09ICdfJykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChbJ2NvbnN0cnVjdG9yJ10uaW5kZXhPZihrZXkpICE9IC0xKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogTmVzdGVkIG9ic2VydmluZyB0aGUgdmFsdWVcbiAgICpcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBbc3RhcnRLZXlzXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX25lc3RlZE9ic2VydmUgKHZhbHVlLCBzdGFydEtleXMpIHtcbiAgICBjb25zdCBvYnNlcnZlID0gKHZhbHVlLCBwYXJlbnRzKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF1dGlscy5pc1BsYWluT2JqZWN0KHZhbHVlKSAmJiAhdXRpbHMuaXNTY29wZVByb3h5KHZhbHVlKSAmJiAhKHZhbHVlIGluc3RhbmNlb2YgU2NvcGUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IHRhcmdldCA9IHZhbHVlO1xuXG4gICAgICBDSEVDS19QUk9YWTogaWYgKHZhbHVlLl9faXNQcm94eSkge1xuICAgICAgICB0YXJnZXQgPSB2YWx1ZS5fX3RhcmdldDtcblxuICAgICAgICBpZiAodGhpcy5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcpIHtcbiAgICAgICAgICBicmVhayBDSEVDS19QUk9YWTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHZhbHVlLl9fY29tcG9uZW50ICE9PSB0aGlzIHx8XG4gICAgICAgICAgQWtpbGkuam9pbkJpbmRpbmdLZXlzKHBhcmVudHMpICE9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyh2YWx1ZS5fX2tleXMpXG4gICAgICAgICkge1xuICAgICAgICAgIHRhcmdldCA9IHV0aWxzLmNvcHkodGFyZ2V0LCB7IG5lc3RlZDogZmFsc2UgfSk7XG4gICAgICAgICAgdmFsdWUgPSB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCF0aGlzLl9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyAmJiAhKHZhbHVlIGluc3RhbmNlb2YgU2NvcGUpKSB7XG4gICAgICAgIHRhcmdldCA9IHV0aWxzLmNvcHkodGFyZ2V0LCB7IG5lc3RlZDogZmFsc2UgfSApOyAgICAgICAgICBcbiAgICAgICAgdmFsdWUgPSB0YXJnZXQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGsgaW4gdGFyZ2V0KSB7ICAgICAgICBcbiAgICAgICAgaWYgKCF0YXJnZXQuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2YWwgPSB0YXJnZXRba107ICAgICAgICBcbiAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tdKTsgICBcbiAgICAgICAgdGFyZ2V0W2tdID0gb2JzZXJ2ZSh2YWwsIGtleXMpOyAgXG4gICAgICB9XG5cbiAgICAgIGlmICghdmFsdWUuX19pc1Byb3h5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fb2JzZXJ2ZSh2YWx1ZSwgcGFyZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuXG4gICAgbGV0IHJlcyA9IG9ic2VydmUodmFsdWUsIHN0YXJ0S2V5cyB8fCBbXSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gICAvKipcbiAgICogQ3JlYXRlIGFuIGlzb2xhdGlvbiBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVsZXRlZD1mYWxzZV1cbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0IChwYXJlbnRzLCBrZXksIGlzRGVsZXRlZCA9IGZhbHNlKSB7XG4gICAgY29uc3Qga2V5cyA9IHBhcmVudHMubGVuZ3RoPyBbcGFyZW50c1swXV06IFtrZXldO1xuICAgIGNvbnN0IGlzb2xhdGlvbkhhc2ggPSB0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyk7XG5cbiAgICBpZiAocGFyZW50cy5sZW5ndGgpIHtcbiAgICAgIGlzRGVsZXRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uSGFzaF0pIHtcbiAgICAgIEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbkhhc2hdID0ge1xuICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICAgIGtleXNcbiAgICAgIH07XG4gICAgfVxuXG4gICAgKGlzRGVsZXRlZCAhPT0gdW5kZWZpbmVkKSAmJiAoQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uSGFzaF0uaXNEZWxldGVkID0gaXNEZWxldGVkKTtcbiAgICByZXR1cm4gQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uSGFzaF07XG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSB0aGUgbm9kZSB0byBiaW5kaW5nXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBiaW5kIC0gYnkgZGVmYXVsdCBpcyBjb21wb25lbnQuX19ldmFsdWF0aW9uLmxpc3RcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbbm90QmluZGluZz1mYWxzZV1cbiAgICogQHBhcmFtIHtib29sZWFufSBbZXZhbHVhdGVkPWZhbHNlXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2JpbmROb2RlKGJpbmQsIHJlYWxDb21wb25lbnQsIGtleXMsIHBhcmVudHMsIHZhbHVlLCBub3RCaW5kaW5nID0gZmFsc2UsIGV2YWx1YXRlZCA9IGZhbHNlKSB7XG4gICAgbGV0IHBhcmVudEtleXNTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMocGFyZW50cyk7XG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXM7XG5cbiAgICBpZiAoYmluZC5sZW5ndGggJiYgIW5vdEJpbmRpbmcpIHtcbiAgICAgIGxldCBsID0gYmluZC5sZW5ndGggLSAxO1xuICAgICAgbGV0IGRhdGEgPSBiaW5kW2xdO1xuXG4gICAgICBpZiAoZGF0YS5yZWFsQ29tcG9uZW50ID09PSB0aGlzICYmIGRhdGEua2V5c1N0cmluZyA9PSBwYXJlbnRLZXlzU3RyaW5nKSB7XG4gICAgICAgIGNvbXBvbmVudCA9IGRhdGEuY29tcG9uZW50O1xuICAgICAgfSAgICAgIFxuICAgICAgXG4gICAgICBpZiAoZGF0YS5rZXlzU3RyaW5nID09IHBhcmVudEtleXNTdHJpbmcgJiYgZGF0YS5jb21wb25lbnQgPT09IGNvbXBvbmVudCkge1xuICAgICAgICBiaW5kLnNwbGljZShsLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgYmluZC5wdXNoKHtcbiAgICAgIGNvbXBvbmVudCxcbiAgICAgIHJlYWxDb21wb25lbnQ6IHJlYWxDb21wb25lbnQsXG4gICAgICBrZXlzU3RyaW5nOiBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyksXG4gICAgICBwYXJlbnRzLFxuICAgICAga2V5cyxcbiAgICAgIHZhbHVlLFxuICAgICAgZXZhbHVhdGVkLFxuICAgICAgbm90QmluZGluZ1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBrZXkgaXMgc3lzdGVtIGJpbmRpbmcgdGhpbmdcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi8gXG4gIF9faXNTeXN0ZW1CaW5kaW5nS2V5KGtleSkge1xuICAgIHJldHVybiBrZXkgPT0gJ19fZGF0YSc7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGJpbmRpbmcgYnkga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRCaW5kKGtleXMpIHtcbiAgICByZXR1cm4gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzKSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgbmVzdGVkIGJpbmRpbmdzIGJ5IGtleXNcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqL1xuICBfX2dldEFsbEJpbmRzKGtleXMpIHtcbiAgICBjb25zdCByb290ID0gdGhpcy5fX2dldEJpbmQoa2V5cyk7XG5cbiAgICBpZiAoIXJvb3QpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBsZXQgZGF0YSA9IFtdO1xuXG4gICAgY29uc3QgY29sbGVjdCA9IChvYmopID0+IHtcbiAgICAgIGRhdGEgPSBkYXRhLmNvbmNhdChvYmouX19kYXRhIHx8IFtdKTtcblxuICAgICAgZm9yIChsZXQga2V5IGluIG9iaikge1xuICAgICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrZXkpIHx8IGtleSA9PSAnX19kYXRhJykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29sbGVjdChvYmpba2V5XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29sbGVjdChyb290KTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYmluZGluZyBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRCb3VuZE5vZGUoa2V5cywgbm9kZSkge1xuICAgIGxldCBiaW5kID0gIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncyk7XG5cbiAgICBpZiAoIWJpbmQgfHwgIWJpbmQuX19kYXRhIHx8ICFiaW5kLl9fZGF0YS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYmluZC5fX2RhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgZGF0YSA9IGJpbmQuX19kYXRhW2ldO1xuXG4gICAgICBpZiAoZGF0YS5ub2RlID09PSBub2RlKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgbm9kZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2V2YWx1YXRlZD1mYWxzZV1cbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMsIHZhbHVlLCBldmFsdWF0ZWQgPSBmYWxzZSkge1xuICAgIGxldCBwcm9wID0gdGhpcy5fX2dldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKTsgICAgXG4gICAgbGV0IGNvcHkgPSB1dGlscy5jb3B5KHZhbHVlKTtcblxuICAgIGlmIChwcm9wKSB7XG4gICAgICBsZXQgcmVzID0gdXRpbHMuY29tcGFyZVByZXZpb3VzVmFsdWUodmFsdWUsIHByb3AudmFsdWUsIHByb3AuY29weSk7XG4gICAgICBwcm9wLnZhbHVlID0gdmFsdWU7XG4gICAgICBwcm9wLmNvcHkgPSBjb3B5O1xuICAgICAgcmV0dXJuICFyZXM7XG4gICAgfVxuICAgIFxuICAgIG5vZGUuX19wcm9wZXJ0aWVzW3RoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKV0gPSB7XG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICB2YWx1ZSxcbiAgICAgIGNvcHksICAgICAgXG4gICAgICBrZXlzLFxuICAgICAgZXZhbHVhdGVkICBcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBub2RlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cykge1xuICAgIHJldHVybiBub2RlLl9fcHJvcGVydGllc1t0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyldIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIHRoZSBub2RlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVsZXRlTm9kZVByb3BlcnR5KG5vZGUsIGtleXMpIHtcbiAgICBsZXQgaGFzaCA9IGAke3RoaXMuX19zY29wZS5fX25hbWV9LiR7QWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpfWA7XG4gICAgZGVsZXRlIG5vZGUuX19wcm9wZXJ0aWVzW2hhc2hdO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCB0YWdcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YWdcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYWRkVGFnKHRhZywgbm9kZSkge1xuICAgIGlmKCF0aGlzLl9fdGFnc1t0YWddKSB7XG4gICAgICB0aGlzLl9fdGFnc1t0YWddID0gW107ICAgIFxuICAgIH1cblxuICAgIGlmKCF0aGlzLl9faGFzVGFnKHRhZykpIHtcbiAgICAgIHRoaXMuX190YWdzW3RhZ10ucHVzaCh7IG5vZGUgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSB0YWcgZXhpc3RzXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgX19oYXNUYWcodGFnLCBub2RlKSB7XG4gICAgaWYoIXRoaXMuX190YWdzW3RhZ10pIHtcbiAgICAgIHJldHVybiBmYWxzZTsgICAgXG4gICAgfVxuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuX190YWdzW3RhZ10ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7ICAgIFxuICAgICAgaWYodGhpcy5fX3RhZ3NbdGFnXVtpXS5ub2RlID09PSBub2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHRhZ1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRhZ1xuICAgKiBAcGFyYW0ge05vZGV9IFtub2RlXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlbW92ZVRhZyAodGFnLCBub2RlKSB7XG4gICAgaWYoIW5vZGUpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fdGFnc1t0YWddO1xuICAgICAgcmV0dXJuOyAgICBcbiAgICB9XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5fX3RhZ3NbdGFnXS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmKHRoaXMuX190YWdzW3RhZ11baV0ubm9kZSA9PT0gbm9kZSkge1xuICAgICAgICB0aGlzLl9fdGFnc1t0YWddLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoIXRoaXMuX190YWdzW3RhZ10ubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX3RhZ3NbdGFnXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQmluZCBkYXRhIHdpdGggdGhlIGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2JpbmQoa2V5cywgZGF0YSkge1xuICAgIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncywgKGxhc3QsIHZhbHVlKSA9PiB7XG4gICAgICBsZXQgb2JqID0geyBfX2RhdGE6IFtdIH07XG5cbiAgICAgIGlmICghbGFzdCkge1xuICAgICAgICByZXR1cm4gdmFsdWU/IHZhbHVlOiBvYmo7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgb2JqID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghb2JqLl9fZGF0YSkge1xuICAgICAgICBvYmouX19kYXRhID0gW107XG4gICAgICB9XG5cbiAgICAgIG9iai5fX2RhdGEucHVzaChkYXRhKTtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIHRoZSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmJpbmQoa2V5cykge1xuICAgIGxldCBiaW5kID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzKTtcblxuICAgIGlmICghYmluZCB8fCAhYmluZC5fX2RhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGJpbmQuX19kYXRhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG5vZGUgPSBiaW5kLl9fZGF0YVtpXS5ub2RlO1xuICAgICAgdGhpcy5fX2RlbGV0ZU5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKTtcbiAgICB9XG5cbiAgICB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MsICh2YWx1ZSkgPT4ge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPiAxKSB7XG4gICAgICAgIHZhbHVlLl9fZGF0YSA9IFtdO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCBkYXRhIGJ5IG5vZGVzXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZVtdfSBub2Rlc1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYmluZEJ5Tm9kZXMobm9kZXMpIHtcbiAgICBjb25zdCB1bmJpbmQgPSAob2JqKSA9PiB7XG4gICAgICBmb3IgKGxldCBrIGluIG9iaikge1xuICAgICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoayA9PSAnX19kYXRhJykge1xuICAgICAgICAgIGxldCBkYXRhID0gb2JqW2tdIHx8IFtdO1xuICAgICAgICAgIGxldCBsID0gZGF0YS5sZW5ndGg7XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJpbmQgPSBkYXRhW2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAobm9kZXMuaW5kZXhPZihiaW5kLm5vZGUpICE9IC0xKSB7ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgZGF0YS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgbC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghbCkge1xuICAgICAgICAgICAgZGVsZXRlIG9ialtrXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXRoaXMuX19pc1N5c3RlbUJpbmRpbmdLZXkoaykpIHtcbiAgICAgICAgICB1bmJpbmQob2JqW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgdW5iaW5kKHRoaXMuX19iaW5kaW5ncyk7XG4gICAgdGhpcy5fX2NsZWFyRW1wdHlCaW5kaW5ncygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCBlbXB0eSBiaW5kaW5nc1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gW29ial1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jbGVhckVtcHR5QmluZGluZ3Mob2JqKSB7XG4gICAgY29uc3QgY2xlYXIgPSAob2JqLCBwYXJlbnQsIGtleSkgPT4ge1xuICAgICAgZm9yIChsZXQgayBpbiBvYmopIHtcbiAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2YWwgPSBvYmpba107XG5cbiAgICAgICAgaWYgKGsgPT0gJ19fZGF0YScgJiYgKCF2YWwgfHwgIXZhbC5sZW5ndGgpKSB7XG4gICAgICAgICAgZGVsZXRlIG9ialtrXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghdGhpcy5fX2lzU3lzdGVtQmluZGluZ0tleShrKSkge1xuICAgICAgICAgIGlmICghT2JqZWN0LmtleXMob2JqW2tdKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmpba107XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xlYXIob2JqW2tdLCBvYmosIGspO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIU9iamVjdC5rZXlzKG9iaikubGVuZ3RoICYmIHBhcmVudCkge1xuICAgICAgICBkZWxldGUgcGFyZW50W2tleV07XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNsZWFyKG9iaiB8fCB0aGlzLl9fYmluZGluZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBsaW5rc1xuICAgKiBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jbGVhclN0b3JlTGlua3MoKSB7XG4gICAgY29uc3QgbGlua3MgPSBBa2lsaS5fX3N0b3JlTGlua3M7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gbGlua3MpIHtcbiAgICAgIGNvbnN0IGFyciA9IGxpbmtzW2tleV07XG5cbiAgICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgbGluayA9IGFycltpXTtcbiAgXG4gICAgICAgIGlmIChsaW5rLmNvbXBvbmVudCA9PT0gdGhpcykge1xuICAgICAgICAgIGFyci5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFhcnIubGVuZ3RoKSB7XG4gICAgICAgIGRlbGV0ZSBsaW5rc1trZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIGNoaWxkIGNvbXBvbmVudHNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZW1vdmVDaGlsZHJlbigpIHtcbiAgICBjb25zdCByZW1vdmUgPSAoY2hpbGRyZW4pID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgcmVtb3ZlKGNoaWxkLl9fYWtpbGkuX19jaGlsZHJlbik7XG4gICAgICAgIGNoaWxkLl9fYWtpbGkuX19yZW1vdmUoKTtcbiAgICAgICAgaS0tO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZW1vdmUodGhpcy5fX2NoaWxkcmVuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGNvbXBvbmVudCB3aXRob3V0IGNoaWxkcmVuIHJlbW92aW5nXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcmVtb3ZlKCkge1xuICAgIHRoaXMuX19kZXRhY2goKTtcbiAgICB0aGlzLl9fY2xlYXJTdG9yZUxpbmtzKCk7XG4gICAgdGhpcy5hdHRycy5vblJlbW92ZWQgJiYgdGhpcy5hdHRycy5vblJlbW92ZWQudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgdGhpcy5yZW1vdmVkKCk7ICAgIFxuICAgIEFraWxpLnJlbW92ZVNjb3BlKHRoaXMuX19zY29wZS5fX25hbWUpOyAgICBcbiAgICB0aGlzLmVsLnJlbW92ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGFjaCB0aGUgY29tcG9uZW50XG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGV0YWNoKCkge1xuICAgIGlmICh0aGlzLl9fZXZhbHVhdGVQYXJlbnQgJiYgIXRoaXMuX19jb250cm9sQXR0cmlidXRlcykge1xuICAgICAgdGhpcy5fX2V2YWx1YXRlUGFyZW50Ll9fYWtpbGkuX191bmJpbmRCeU5vZGVzKFtdLnNsaWNlLmNhbGwodGhpcy5lbC5hdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX19wYXJlbnQpIHtcbiAgICAgIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX3NwbGljZUNoaWxkKHRoaXMuZWwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGNvbXBvbmVudCB3aXRoIGNoaWxkcmVuXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVzdHJveSgpIHtcbiAgICB0aGlzLl9fcmVtb3ZlQ2hpbGRyZW4oKTtcbiAgICB0aGlzLl9fcmVtb3ZlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIGNvbXBvbmVudCBodG1sXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZW1wdHkoKSB7XG4gICAgbGV0IG5vZGVzID0gW107XG4gICAgdGhpcy5fX3JlbW92ZUNoaWxkcmVuKCk7XG5cbiAgICBjb25zdCBmaW5kID0gKGNoaWxkcmVuKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcblxuICAgICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT0gMykge1xuICAgICAgICAgIG5vZGVzLnB1c2goY2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoaWxkLm5vZGVUeXBlID09IDEgJiYgIWNoaWxkLl9fYWtpbGkpIHtcbiAgICAgICAgICBmb3IgKGxldCBrID0gMCwgYXR0cnMgPSBjaGlsZC5hdHRyaWJ1dGVzLCBjID0gYXR0cnMubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICAgICAgICBub2Rlcy5wdXNoKGF0dHJzW2ldKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmaW5kKGNoaWxkLmNoaWxkTm9kZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICBmaW5kKHRoaXMuZWwuY2hpbGROb2Rlcyk7XG4gICAgdGhpcy5fX3VuYmluZEJ5Tm9kZXMobm9kZXMpO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHBhcmVudCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZpbmRBbGw9dHJ1ZV0gLSBnZXQgYXJyYXkgaWYgdHJ1ZVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldFBhcmVudChzZWxlY3RvciA9ICcnLCBmaW5kQWxsID0gZmFsc2UsIGxldmVscyA9IG51bGwpIHtcbiAgICBsZXQgYXJyID0gW107XG4gICAgbGV0IGxldmVsID0gMDtcblxuICAgIGlmICh0eXBlb2YgbGV2ZWxzICE9ICdvYmplY3QnKSB7XG4gICAgICBsZXZlbHMgPSBbbGV2ZWxzXTtcbiAgICB9XG5cbiAgICBjb25zdCBmaW5kID0gKHBhcmVudCkgPT4ge1xuICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWxldmVscyB8fCBsZXZlbHMuaW5kZXhPZihsZXZlbCkgIT0gLTEpIHtcbiAgICAgICAgaWYgKCFzZWxlY3RvciB8fCBwYXJlbnQuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIGlmICghZmluZEFsbCkge1xuICAgICAgICAgICAgYXJyLnB1c2gocGFyZW50Ll9fYWtpbGkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFyci5wdXNoKHBhcmVudC5fX2FraWxpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXZlbCsrO1xuICAgICAgZmluZChwYXJlbnQuX19ha2lsaS5fX3BhcmVudCk7XG4gICAgfTtcblxuICAgIGZpbmQodGhpcy5fX3BhcmVudCk7XG4gICAgcmV0dXJuIGZpbmRBbGw/IGFycjogKGFyclswXSB8fCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2hpbGQgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kQWxsPXRydWVdIC0gZ2V0IGFycmF5IGlmIHRydWVcbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudHxDb21wb25lbnRbXX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRDaGlsZHJlbihzZWxlY3RvciA9ICcnLCBmaW5kQWxsID0gdHJ1ZSwgbGV2ZWxzID0gbnVsbCkge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBsZXQgbGV2ZWwgPSAwO1xuXG4gICAgaWYgKHR5cGVvZiBsZXZlbHMgIT0gJ29iamVjdCcpIHtcbiAgICAgIGxldmVscyA9IFtsZXZlbHNdO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbmQgPSAoY2hpbGRyZW4pID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmICghbGV2ZWxzIHx8IGxldmVscy5pbmRleE9mKGxldmVsKSAhPSAtMSkge1xuICAgICAgICAgIGlmICghc2VsZWN0b3IgfHwgY2hpbGQuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgaWYgKCFmaW5kQWxsKSB7XG4gICAgICAgICAgICAgIGFyci5wdXNoKGNoaWxkLl9fYWtpbGkpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFyci5wdXNoKGNoaWxkLl9fYWtpbGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXZlbCsrO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBmaW5kKGNoaWxkcmVuW2ldLl9fYWtpbGkuX19jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZpbmQodGhpcy5fX2NoaWxkcmVuKTtcbiAgICByZXR1cm4gZmluZEFsbD8gYXJyOiAoYXJyWzBdIHx8IG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBuZWFyZXN0IGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JpZ2h0PWZhbHNlXSAtIGZyb20gdGhlIHJpZ2h0IHNpZGUgaWYgdHJ1ZVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldE5lYXIoc2VsZWN0b3IgPSAnJywgZmluZEFsbCA9IHRydWUsIHJpZ2h0ID0gZmFsc2UpIHtcbiAgICBpZiAoIXRoaXMuX19wYXJlbnQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCBsZXZlbEVsZW1lbnRzID0gdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fY2hpbGRyZW4uc2xpY2UoKTtcbiAgICBsZXQgYXJyID0gW107XG4gICAgcmlnaHQgJiYgbGV2ZWxFbGVtZW50cy5yZXZlcnNlKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxldmVsRWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgZWwgPSBsZXZlbEVsZW1lbnRzW2ldO1xuXG4gICAgICBpZiAoZWwgPT09IHRoaXMuZWwpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmICghc2VsZWN0b3IgfHwgZWwuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBhcnIucHVzaChlbC5fX2FraWxpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhcnIucmV2ZXJzZSgpO1xuXG4gICAgaWYgKCFmaW5kQWxsKSB7XG4gICAgICByZXR1cm4gYXJyLmxlbmd0aD8gYXJyWzBdOiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbGluayB0byB0aGUgc3RvcmVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXXxmdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgc3RvcmUobmFtZSwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5fX2lzTW91bnRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNZXRob2QgXCJzdG9yZVwiIG11c3QgYmUgY2FsbGVkIGFmdGVyIHRoZSBjb21waWxhdGlvbi4gRm9yIGV4YW1wbGUsIGluIFwiY29tcGlsZWRcIiBtZXRob2QuYCk7XG4gICAgfVxuXG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICh0eXBlb2YgbmFtZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhcmdzLnVuc2hpZnQoJyonKTtcbiAgICAgIGhhbmRsZXIgPSBuYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJz8gdGhpcy5fX3N0b3JlQnlGdW5jdGlvbiguLi5hcmdzKTogdGhpcy5fX3N0b3JlQnlLZXlzKC4uLmFyZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGxpbmsgd2l0aCB0aGUgYXR0cmlidXRlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGF0dHIobmFtZSwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5fX2lzTW91bnRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNZXRob2QgXCJhdHRyXCIgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgdGhlIGNvbXBpbGF0aW9uLiBGb3IgZXhhbXBsZSwgaW4gXCJjb21waWxlZFwiIG1ldGhvZC5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYgKHR5cGVvZiBuYW1lID09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFyZ3MudW5zaGlmdCgnKicpO1xuICAgICAgaGFuZGxlciA9IG5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nPyB0aGlzLl9fYXR0ckJ5RnVuY3Rpb24oLi4uYXJncyk6IHRoaXMuX19hdHRyQnlLZXlzKC4uLmFyZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgc3RvcmUgbGlua1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfGZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICB1bnN0b3JlKG5hbWUsIGhhbmRsZXIpIHtcbiAgICBpZiAoIXRoaXMuX19pc01vdW50ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTWV0aG9kIFwidW5zdG9yZVwiIG11c3QgYmUgY2FsbGVkIGFmdGVyIHRoZSBjb21waWxhdGlvbi4gRm9yIGV4YW1wbGUsIGluIFwiY29tcGlsZWRcIiBtZXRob2QuYCk7XG4gICAgfVxuXG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICh0eXBlb2YgbmFtZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhcmdzLnVuc2hpZnQoJyonKTtcbiAgICAgIGhhbmRsZXIgPSBuYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJz8gdGhpcy5fX3Vuc3RvcmVCeUZ1bmN0aW9uKC4uLmFyZ3VtZW50cyk6IHRoaXMuX191bnN0b3JlQnlLZXlzKC4uLmFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBhdHRyaWJ1dGUgbGlua1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfGZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICB1bmF0dHIobmFtZSwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5fX2lzTW91bnRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNZXRob2QgXCJ1bmF0dHJcIiBtdXN0IGJlIGNhbGxlZCBhZnRlciB0aGUgY29tcGlsYXRpb24uIEZvciBleGFtcGxlLCBpbiBcImNvbXBpbGVkXCIgbWV0aG9kLmApO1xuICAgIH1cblxuICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodHlwZW9mIG5hbWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYXJncy51bnNoaWZ0KCcqJyk7XG4gICAgICBoYW5kbGVyID0gbmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbic/IHRoaXMuX191bmF0dHJCeUZ1bmN0aW9uKC4uLmFyZ3VtZW50cyk6IHRoaXMuX191bmF0dHJCeUtleXMoLi4uYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgY29tcG9uZW50IG1hdGNoZXMgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IHNlbGVjdG9yXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgbWF0Y2hlcyhzZWxlY3Rvcikge1xuICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHNlbGVjdG9yKHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmVsLm1hdGNoZXMoc2VsZWN0b3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IHBhcmVudCBjb21wb25lbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIHBhcmVudChzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRQYXJlbnQoc2VsZWN0b3IsIGZhbHNlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBwYXJlbnQgY29tcG9uZW50cyBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBwYXJlbnRzKHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldFBhcmVudChzZWxlY3RvciwgdHJ1ZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBjaGlsZCBjb21wb25lbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIGNoaWxkKHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldENoaWxkcmVuKHNlbGVjdG9yLCBmYWxzZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY2hpbGQgY29tcG9uZW50cyBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBjaGlsZHJlbihzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRDaGlsZHJlbihzZWxlY3RvciwgdHJ1ZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY29tcG9uZW50cyBsZWZ0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgYmVmb3JlKHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIHRydWUsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY29tcG9uZW50cyByaWdodCBmcm9tIHRoZSBjdXJyZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGFmdGVyKHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIHRydWUsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IGNvbXBvbmVudCBsZWZ0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIHByZXYoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgZmFsc2UsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBjb21wb25lbnQgcmlnaHQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgbmV4dChzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCBmYWxzZSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGVsZW1lbnQgcGFyZW50XG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gcGFyZW50XG4gICAqL1xuICBhcHBlbmRUbyhwYXJlbnQpIHtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHsgc2V0UGFyZW50czogdHJ1ZSwgY2hlY2tDaGFuZ2VzOiBmYWxzZSB9IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbmNlbCBjb21wb25lbnQgY29tcGlsYXRpb25cbiAgICovXG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wYWxlIHRoZSBjb21wb25lbnQsIGJ1dCBjYW5jZWwgdGhlIGNvbXBpbGF0aW9uIGluc2lkZSBvZiBpdFxuICAgKi9cbiAgcHJldmVudCgpIHtcbiAgICB0aGlzLl9fcHJldmVudCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgZWxlbWVudCBodG1sXG4gICAqXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgZW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19lbXB0eS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBlbGVtZW50XG4gICAqXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgcmVtb3ZlKCkge1xuICAgIHJldHVybiB0aGlzLl9fZGVzdHJveS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHt9XG4gIGNvbXBpbGVkKCkge31cbiAgcmVjb21waWxlZCgpIHt9XG4gIHJlc29sdmVkKCkge31cbiAgcmVtb3ZlZCgpIHt9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudC5qcyIsImltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIFJlcXVlc3QgY2xhc3MuXG4gKiBBbiBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGFsbG93cyB5b3UgdG8gbWFrZSByZXF1ZXN0cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yZXF1ZXN0c31cbiAqL1xuZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xuICBfX2NhY2hlID0ge307XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gW2RlZmF1bHRzXSBcbiAgICovXG4gIGNvbnN0cnVjdG9yKGJhc2VVcmwsIGRlZmF1bHRzKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gYmFzZVVybD8gKGJhc2VVcmwucmVwbGFjZSgvXFwvJC8sICcnKSArICcvJyk6ICcnO1xuXG4gICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgIHN0YXR1c0Vycm9yUGF0dGVybjogL15bXjIzXS8sXG4gICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAuLi4oZGVmYXVsdHMgfHwge30pXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIHJlcXVlc3Qgd2l0aCBhbnkgbWV0aG9kXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcXVlcnkob3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBvcHRpb25zID0gey4uLnRoaXMuZGVmYXVsdHMsIC4uLihvcHRpb25zIHx8IHt9KX07IFxuICAgICAgb3B0aW9ucy51cmwgPSB0aGlzLmJhc2VVcmw/IGAke3RoaXMuYmFzZVVybH0ke29wdGlvbnMudXJsLnJlcGxhY2UoL15cXC8vLCAnJyl9YDogb3B0aW9ucy51cmw7ICBcbiAgICAgIG9wdGlvbnMubWV0aG9kID0gb3B0aW9ucy5tZXRob2QgfHwgJ0dFVCc7XG4gICAgICBcbiAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsgICAgICBcbiAgICAgIGNvbnN0IGJlZm9yZSA9IHRoaXMudHJhbnNmb3JtQmVmb3JlKHhociwgb3B0aW9ucyk7XG4gICAgICB4aHIgPSBiZWZvcmUueGhyO1xuICAgICAgb3B0aW9ucyA9IGJlZm9yZS5vcHRpb25zO1xuICAgICAgKHR5cGVvZiBvcHRpb25zLm9uU3RhcnQgPT0gJ2Z1bmN0aW9uJykgJiYgb3B0aW9ucy5vblN0YXJ0KHhocik7ICBcbiAgICAgIG9wdGlvbnMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyB8fCB7fTtcbiAgICAgIFxuICAgICAgaWYgKG9wdGlvbnMuanNvbikge1xuICAgICAgICBvcHRpb25zLmpzb24gIT09IHRydWUgJiYgKG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuanNvbikpO1xuICAgICAgICBvcHRpb25zLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICBvcHRpb25zLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlIHx8ICdqc29uJztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG9wdGlvbnMuZm9ybSkge1xuICAgICAgICBvcHRpb25zLmJvZHkgPSB0aGlzLmNyZWF0ZUZvcm1EYXRhKG9wdGlvbnMuZm9ybSk7XG4gICAgICAgIG9wdGlvbnMuaGVhZGVyc1snY29udGVudC10eXBlJ10gPSAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnBhcmFtcykge1xuICAgICAgICBsZXQgc3RyID0gdGhpcy5wYXJhbXNUb1F1ZXJ5KG9wdGlvbnMucGFyYW1zKTtcbiAgICAgICAgc3RyICYmIChvcHRpb25zLnVybCArPSBcIj9cIiArIHN0cik7XG4gICAgICB9XG4gICAgICAgICAgIFxuICAgICAgbGV0IGhhc2ggPSBudWxsO1xuICAgICAgbGV0IGNhY2hlID0gdHlwZW9mIG9wdGlvbnMuY2FjaGUgPT0gJ2Z1bmN0aW9uJz8gb3B0aW9ucy5jYWNoZShvcHRpb25zKTogb3B0aW9ucy5jYWNoZTtcbiAgICAgICh3aW5kb3cuQUtJTElfU0VSVkVSICYmICFBa2lsaS5fX2luaXQpICYmIChjYWNoZSA9IHRydWUpO1xuXG4gICAgICBpZihvcHRpb25zLm1ldGhvZC50b1VwcGVyQ2FzZSgpID09ICdHRVQnICYmICghb3B0aW9ucy5ib2R5IHx8IHR5cGVvZiBvcHRpb25zLmJvZHkgPT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGhhc2ggPSB0aGlzLmNyZWF0ZUNhY2hlSGFzaCh7IFxuICAgICAgICAgIHVybDogb3B0aW9ucy51cmwsIFxuICAgICAgICAgIG1ldGhvZDogb3B0aW9ucy5tZXRob2QsXG4gICAgICAgICAgdXNlcjogb3B0aW9ucy51c2VyLCBcbiAgICAgICAgICBwYXNzd29yZDogb3B0aW9ucy5wYXNzd29yZCwgXG4gICAgICAgICAgYm9keTogb3B0aW9ucy5ib2R5IFxuICAgICAgICB9KTsgICAgICAgIFxuICAgICAgfVxuICAgICAgXG4gICAgICBpZihjYWNoZSAmJiBoYXNoKSB7ICAgICAgICBcbiAgICAgICAgbGV0IF9jYWNoZSA9IHRoaXMuZ2V0Q2FjaGUoaGFzaCk7XG4gICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgICAgICBpZihfY2FjaGUgJiYgKGNhY2hlID09PSB0cnVlIHx8IG5vdyAtIF9jYWNoZS5jcmVhdGVkQXQgPD0gY2FjaGUpKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUodGhpcy50cmFuc2Zvcm1BZnRlcihfY2FjaGUucmVzdWx0KSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgeGhyLm9wZW4ob3B0aW9ucy5tZXRob2QsIG9wdGlvbnMudXJsLCB0cnVlLCBvcHRpb25zLnVzZXIsIG9wdGlvbnMucGFzc3dvcmQpO1xuXG4gICAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgndGltZW91dCcpKSB7XG4gICAgICAgIHhoci50aW1lb3V0ID0gb3B0aW9ucy50aW1lb3V0O1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5yZXNwb25zZVR5cGUpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IG9wdGlvbnMud2l0aENyZWRlbnRpYWxzO1xuICAgICAgfVxuXG4gICAgICBsZXQgaGVhZGVyS2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnMuaGVhZGVycyk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gaGVhZGVyS2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGsgPSBoZWFkZXJLZXlzW2ldO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrLCBvcHRpb25zLmhlYWRlcnNba10pO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMub25Qcm9ncmVzcyA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHhoci5vbnByb2dyZXNzID0gKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBvcHRpb25zLm9uUHJvZ3Jlc3MoeGhyKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICAgIHJlc3BvbnNlOiB4aHIucmVzcG9uc2UsXG4gICAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxuICAgICAgICAgIHJlYWR5U3RhdGU6IHhoci5yZWFkeVN0YXRlLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxuICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogeGhyLndpdGhDcmVkZW50aWFscyxcbiAgICAgICAgICByZXNwb25zZVR5cGU6IHhoci5yZXNwb25zZVR5cGUsXG4gICAgICAgICAgcmVzcG9uc2VUZXh0OiB4aHIucmVzcG9uc2VUeXBlID09ICd0ZXh0Jz8geGhyLnJlc3BvbnNlVGV4dDogJycsXG4gICAgICAgICAgcmVzcG9uc2VYTUw6IHhoci5yZXNwb25zZVR5cGUgPT0gJ2RvY3VtZW50Jz8geGhyLnJlc3BvbnNlWE1MOiAnJyxcbiAgICAgICAgICByZXNwb25zZVVSTDogeGhyLnJlc3BvbnNlVVJMLFxuICAgICAgICAgIHRpbWVvdXQ6IHhoci50aW1lb3V0LFxuICAgICAgICAgIGhlYWRlcnM6IHRoaXMuZ2V0SGVhZGVycyh4aHIpLCAgICAgICAgIFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gdGhpcy50cmFuc2Zvcm1BZnRlcihyZXN1bHQpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnN0YXR1c0Vycm9yUGF0dGVybiAmJiAoeGhyLnN0YXR1cyArICcnKS5tYXRjaChvcHRpb25zLnN0YXR1c0Vycm9yUGF0dGVybikpIHtcbiAgICAgICAgICBsZXQgZXJyID0gbmV3IEVycm9yKGBSZXF1ZXN0IHRvIFwiJHtvcHRpb25zLnVybH1cIiByZXR1cm5zIGZhaWx1cmUgc3RhdHVzIGNvZGUgJHt4aHIuc3RhdHVzfWApO1xuICAgICAgICAgIGVyci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgfSBcblxuICAgICAgICBoYXNoICYmIHRoaXMuY3JlYXRlQ2FjaGUoaGFzaCwgcmVzdWx0KTsgICAgICAgIFxuICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbnRpbWVvdXQgPSAoKSA9PiB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFJlcXVlc3QgdG8gXCIke29wdGlvbnMudXJsfVwiIHRpbWVkIG91dGApKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgeGhyLnNlbmQob3B0aW9ucy5ib2R5KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaGVhZGVycyBvZiBhIFhNTEh0dHBSZXF1ZXN0IGluc3RhbmNlXG4gICAqIFxuICAgKiBAcGFyYW0ge1hNTEh0dHBSZXF1ZXN0fVxuICAgKi9cbiAgZ2V0SGVhZGVycyA9IGZ1bmN0aW9uKHhocikge1xuICAgIGxldCBoZWFkZXJzID0ge307XG4gICAgbGV0IHN0ciA9IHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKTsgIFxuICAgIGxldCBhcnIgPSBzdHIuc3BsaXQoJ1xcdTAwMGRcXHUwMDBhJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBsaW5lID0gYXJyW2ldO1xuICAgICAgbGV0IGluZGV4ID0gbGluZS5pbmRleE9mKCdcXHUwMDNhXFx1MDAyMCcpO1xuXG4gICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgIGxldCBrZXkgPSBsaW5lLnN1YnN0cmluZygwLCBpbmRleCk7XG4gICAgICAgIGxldCB2YWwgPSBsaW5lLnN1YnN0cmluZyhpbmRleCArIDIpO1xuICAgICAgICBoZWFkZXJzW2tleV0gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGhlYWRlcnM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNhY2hlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGFzaFxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgZ2V0Q2FjaGUoaGFzaCkge1xuICAgIHJldHVybiB0aGlzLl9fY2FjaGVbaGFzaF0gfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgY2FjaGVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXG4gICAqIEBwYXJhbSB7b2JqZWN0fSByZXN1bHRcbiAgICovXG4gIGNyZWF0ZUNhY2hlKGhhc2gsIHJlc3VsdCkge1xuICAgIHRoaXMuX19jYWNoZVtoYXNoXSA9IHsgcmVzdWx0LCBjcmVhdGVkQXQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpIH07XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGNhY2hlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGFzaFxuICAgKi9cbiAgcmVtb3ZlQ2FjaGUoaGFzaCkge1xuICAgIGRlbGV0ZSB0aGlzLl9fY2FjaGVbaGFzaF07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgaGFzaCB0byBzYXZlIGluIHRoZSBjYWNoZVxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGNyZWF0ZUNhY2hlSGFzaChkYXRhKSB7XG4gICAgbGV0IGhhc2ggPSAwO1xuICAgIGxldCBzdHIgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgIGNoYXIgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIGNoYXI7XG4gICAgICBoYXNoID0gaGFzaCAmIGhhc2g7IFxuICAgIH1cblxuICAgIHJldHVybiBoYXNoICsgJyc7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBvYmplY3QgdG8gcXVlcnkgc3RyaW5nXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHBhcmFtc1RvUXVlcnkob2JqKSB7XG4gICAgbGV0IHNlcCA9ICcmJztcbiAgICBsZXQgZXEgPSAnPSc7XG5cbiAgICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLm1hcCgoaykgPT4ge1xuICAgICAgbGV0IGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KGspO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmpba10pKSB7XG4gICAgICAgIGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KGspO1xuICAgICAgICByZXR1cm4gb2JqW2tdLm1hcCgodiwgaSkgPT4ga3MgKyBgWyR7aX1dYCArIGVxICsgZW5jb2RlVVJJQ29tcG9uZW50KHYpKS5qb2luKHNlcCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChvYmpba10gJiYgdHlwZW9mIG9ialtrXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbGV0IG9wdCA9IFtdO1xuICAgICAgICBPYmplY3Qua2V5cyhvYmpba10pLm1hcCgoa2V5KSA9PiBvcHQucHVzaChrcyArIGBbJHtrZXl9XWAgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba11ba2V5XSkpKTtcbiAgICAgICAgcmV0dXJuIG9wdC5qb2luKHNlcCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGtzICsgZXEgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tdKTtcbiAgICAgIH1cbiAgICB9KS5qb2luKHNlcCk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBxdWVyeSBzdHJpbmcgdG8gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHBhcmFtc0Zyb21RdWVyeShzdHIpIHtcbiAgICBsZXQgcXVlcnkgPSB7fTtcbiAgICBsZXQgYW1wcyA9IHN0ci5zcGxpdCgnJicpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBhbXBzLmxlbmd0aDsgaSA8bDsgaSsrKSB7XG4gICAgICBsZXQgZXFzID0gIGFtcHNbaV0uc3BsaXQoJz0nKTtcbiAgICAgIGxldCBrZXkgPSBkZWNvZGVVUklDb21wb25lbnQoZXFzWzBdKTtcbiAgICAgIGxldCB2YWwgPSBkZWNvZGVVUklDb21wb25lbnQoZXFzWzFdKTtcblxuICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICAgIHF1ZXJ5W2tleV0ucHVzaCh2YWwpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAocXVlcnlba2V5XSkge1xuICAgICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0sIHZhbF07XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcXVlcnlba2V5XSA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIG11bHRpcGFydCBmb3JtIGRhdGEgZnJvbSBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgKiBAcGFyYW0ge0Zvcm1EYXRhfSBbZGF0YV1cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtuYW1lc3BhY2VdICAgKlxuICAgKiBAcmV0dXJucyB7Rm9ybURhdGF9XG4gICAqL1xuICBjcmVhdGVGb3JtRGF0YShvYmosIGRhdGEgPSBudWxsLCBuYW1lc3BhY2UgPSAnJykge1xuICAgIGxldCBmZCA9IGRhdGEgfHwgbmV3IEZvcm1EYXRhKCk7XG5cbiAgICBmb3IgKGxldCBrIGluIG9iaikge1xuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrKSAmJiBvYmpba10pIHtcbiAgICAgICAgbGV0IGtleSA9IG5hbWVzcGFjZT8gbmFtZXNwYWNlICsgJ1snICsgayArICddJzogaztcblxuICAgICAgICBpZiAob2JqW2tdIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgIGZkLmFwcGVuZChrZXksIG9ialtrXS50b0lTT1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KG9ialtrXSkpIHtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm1EYXRhKG9ialtrXSwgZmQsIGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZmQuYXBwZW5kKGtleSwgb2JqW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gZGF0YSBiZWZvcmUgYSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7WE1MSHR0cFJlcXVlc3R9IHhoclxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgdHJhbnNmb3JtQmVmb3JlKHhociwgb3B0aW9ucykge1xuICAgIHJldHVybiB7IHhociwgb3B0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIGRhdGEgYWZ0ZXIgYSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSByZXN1bHRcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHRyYW5zZm9ybUFmdGVyKHJlc3VsdCkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5yZXN1bHQsXG4gICAgICBkYXRhOiByZXN1bHQucmVzcG9uc2UsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBHRVQgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZ2V0KHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnR0VUJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIERFTEVURSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBkZWxldGUodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdERUxFVEUnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgUE9TVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBwb3N0KHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnUE9TVCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBQVVQgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcHV0KHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnUFVUJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIFBBVENIIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHBhdGNoKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnUEFUQ0gnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAgLyoqXG4gICAqICBNYWtlIEhFQUQgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgaGVhZCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ0hFQUQnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KCk7XG5cbi8qKlxuICogU2V0IHJvdXRlcidzIGRlZmF1bHQgdmFyaWFibGVzXG4gKi9cbnJlcXVlc3Quc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX19pbnN0YW5jZXMgPSB7fTtcbiAgdGhpcy5fX2NhY2hlID0ge307XG59XG5cbi8qKlxuICogQWRkIG5ldyByZXF1ZXN0IGluc3RhbmNlIHRvIHRoZSBtYWluIHNlcnZpY2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtSZXF1ZXN0fSBpbnN0YW5jZVxuICovXG5yZXF1ZXN0LmFkZEluc3RhbmNlID0gZnVuY3Rpb24obmFtZSwgaW5zdGFuY2UpIHtcbiAgdGhpcy5fX2luc3RhbmNlc1tuYW1lXSA9IGluc3RhbmNlO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgaW5zdGFuY2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5yZXF1ZXN0LnJlbW92ZUluc3RhbmNlID0gZnVuY3Rpb24obmFtZSkge1xuICBkZWxldGUgdGhpcy5fX2luc3RhbmNlc1tuYW1lXTtcbn07XG5cbi8qKlxuICogRGVpbml0IHJvdXRlclxuICovXG5yZXF1ZXN0LmRlaW5pdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNldERlZmF1bHRzKCk7XG59O1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1ZXN0LCAndXNlJywge1xuICBnZXQ6ICgpID0+IHtcbiAgICByZXR1cm4gcmVxdWVzdC5fX2luc3RhbmNlcztcbiAgfVxufSk7XG5cbnJlcXVlc3QuUmVxdWVzdCA9IFJlcXVlc3Q7XG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0O1xucmVxdWVzdC5zZXREZWZhdWx0cygpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2aWNlcy9yZXF1ZXN0LmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuXG4vKipcbiAqIEJhc2UgY29tcG9uZW50IHRvIHdvcmsgd2l0aCB0ZXh0IGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbnB1dH1cbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX3RleHRhcmVhfVxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfY29udGVudGVkaXRhYmxlfVxuICogXG4gKiBAYXR0ciB7c3RyaW5nfSB2YWx1ZSAtIGFjdHVhbCB2YWx1ZVxuICogQGF0dHIge2Jvb2xlYW59IGZvY3VzIC0gc2V0IHRoZSBmb2N1cyBvciBub3RcbiAqIEBhdHRyIHtudW1iZXJ9IGRlYm91bmNlIC0gZGVib3VuY2UgZGVsYXlcbiAqIEBtZXNzYWdlIHt2b2lkfSBkZWJvdW5jZSAtIHNlbnQgb24gdGhlIGRlYm91bmNlIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2lucHV0fVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy52YWx1ZUtleSA9ICd2YWx1ZSc7XG4gICAgdGhpcy5kZWJvdW5jZUludGVydmFsID0gNTAwO1xuICAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ID0gbnVsbDtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIGlmKHRoaXMuZWwuaGFzQXR0cmlidXRlKCdvbi1kZWJvdW5jZScpKSB7XG4gICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4geyAgICAgICAgXG4gICAgICAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ICYmIGNsZWFyVGltZW91dCh0aGlzLmRlYm91bmNlVGltZW91dCk7XG4gICAgICAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5hdHRycy5vbkRlYm91bmNlLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgICAgIH0sIHRoaXMuZGVib3VuY2VJbnRlcnZhbCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmF0dHIoJ2ZvY3VzJywgdGhpcy5zZXRGb2N1cyk7XG4gICAgdGhpcy5hdHRyKCd2YWx1ZScsIHRoaXMuc2V0VmFsdWUpO1xuICAgIHRoaXMuYXR0cignZGVib3VuY2UnLCB0aGlzLnNldERlYm91bmNlKTtcbiAgfVxuXG4gIHJlbW92ZWQoKSB7XG4gICAgdGhpcy5kZWJvdW5jZVRpbWVvdXQgJiYgY2xlYXJUaW1lb3V0KHRoaXMuZGVib3VuY2VUaW1lb3V0KTtcbiAgfVxuXG4gIHNldERlYm91bmNlKGludGVydmFsKSB7XG4gICAgdGhpcy5kZWJvdW5jZUludGVydmFsID0gK2ludGVydmFsO1xuICB9XG5cbiAgc2V0Rm9jdXModmFsdWUpIHtcbiAgICB2YWx1ZT8gdGhpcy5zZXRFbGVtZW50Rm9jdXMoKTogdGhpcy5zZXRFbGVtZW50Qmx1cigpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAodGhpcy5lbFt0aGlzLnZhbHVlS2V5XSAhPT0gdmFsdWUpICYmICh0aGlzLmVsW3RoaXMudmFsdWVLZXldID0gdmFsdWUgPT09IDA/ICcwJzogKHZhbHVlIHx8ICcnKSk7XG4gIH1cblxuICBzZXRFbGVtZW50Rm9jdXMoKSB7XG4gICAgdGhpcy5lbC5mb2N1cygpO1xuICB9XG5cbiAgc2V0RWxlbWVudEJsdXIoKSB7XG4gICAgdGhpcy5lbC5ibHVyKCk7XG4gIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGV4dC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgbG9vcHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2xvb3BzfVxuICogXG4gKiBAdGFnIGZvclxuICogQHNlbGVjdG9yIGZvcltpbl0sb2xbaW5dLHVsW2luXSx0aGVhZFtpbl0sdGJvZHlbaW5dLHRmb290W2luXVxuICogQGF0dHIge29iamVjdHxhcnJheX0gaW4gLSBkYXRhIHRvIGNyZWF0ZSB0aGUgbG9vcFxuICogQG1lc3NhZ2Uge29iamVjdHxhcnJheX0gb3V0IC0gc2VudCBvbiB0aGUgZGF0YSBjaGFuZ2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW2luXSc7XG4gIHN0YXRpYyBldmVudHMgPSBbJ291dCddO1xuICBzdGF0aWMgc2F2ZUF0dHJpYnV0ZVByb3h5SW4gPSB0cnVlOyAgXG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2ZvcicsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnb2wnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3VsJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0aGVhZCcsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGJvZHknLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3Rmb290JywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0cicsIHRoaXMuTG9vcCk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdsb29wJywgdGhpcy5Mb29wKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICBcbiAgICB0aGlzLml0ZXJhdG9ycyA9IFtdO1xuICAgIHRoaXMuaXRlcmF0b3JSZWYgPSBudWxsO1xuICAgIHRoaXMuaXRlcmF0b3JPdXRlckhUTUwgPSBudWxsO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7ICAgIFxuICAgIHRoaXMuY3JlYXRlSXRlcmF0b3IoKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cignaW4nLCB0aGlzLmRyYXcpO1xuICB9XG5cbiAgY3JlYXRlSXRlcmF0b3IoKSB7XG4gICAgbGV0IGVsO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5lbC5jaGlsZHJlbltpXTtcblxuICAgICAgaWYgKGNoaWxkLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50JykgPT0gJ2xvb3AnKSB7XG4gICAgICAgIGVsID0gY2hpbGQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBlbCA9IGNoaWxkO1xuICAgIH1cblxuICAgIGlmICghZWwpIHtcbiAgICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbG9vcCcpOyAgICAgIFxuICAgICAgZWwuaW5uZXJIVE1MID0gdGhpcy5lbC5pbm5lckhUTUw7IFxuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJzsgICAgIFxuICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChlbCk7XG4gICAgfVxuXG4gICAgbGV0IGNvbXBvbmVudE5hbWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpO1xuXG4gICAgaWYgKGNvbXBvbmVudE5hbWUgIT0gJ2xvb3AnKSB7XG4gICAgICBsZXQgY29tcG9uZW50ID0gQWtpbGkuY29tcG9uZW50KGNvbXBvbmVudE5hbWUgfHwgZWwudGFnTmFtZSk7XG5cbiAgICAgIGlmICghY29tcG9uZW50KSB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY29tcG9uZW50JywgJ2xvb3AnKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCEoY29tcG9uZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIEZvcikpIHtcbiAgICAgICAgbGV0IG1hc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsb29wJyk7XG4gICAgICAgIG1hc2suYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICBlbCA9IG1hc2s7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5odG1sID0gZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuaXRlcmF0b3JSZWYgPSBlbC5uZXh0U2libGluZztcbiAgICB0aGlzLml0ZXJhdG9yT3V0ZXJIVE1MID0gZWwub3V0ZXJIVE1MO1xuICAgIGVsLnJlbW92ZSgpO1xuICB9XG5cbiAgY3JlYXRlSXRlcmF0b3JFbGVtZW50KCkge1xuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgZWwuaW5uZXJIVE1MID0gdGhpcy5pdGVyYXRvck91dGVySFRNTDtcbiAgICBlbCA9IGVsLmNvbnRlbnQuZmlyc3RDaGlsZDtcbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBsb29wKGtleSwgdmFsdWUsIGluZGV4KSB7XG4gICAgdGhpcy5fX2luZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5fX2tleSA9IGtleTtcbiAgICB0aGlzLl9fdmFsdWUgPSB2YWx1ZTsgICAgXG4gICAgdGhpcy5fX2NvbXBhcmlzb25WYWx1ZSA9IHV0aWxzLmNvcHkodmFsdWUpO1xuXG4gICAgaWYodGhpcy5pdGVyYXRvcnMubGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIGxldCBpdGVyYXRvciA9IHRoaXMuaXRlcmF0b3JzW2luZGV4XTtcbiAgICAgIGxldCBjQ29weSA9IGl0ZXJhdG9yLmNvbXBhcnNpb24uY29weTtcbiAgICAgICAgXG4gICAgICBpZiAodGhpcy5fX2luZGV4ICE9PSBpdGVyYXRvci5pbmRleCkge1xuICAgICAgICBpdGVyYXRvci5zZXRJbmRleCgpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldEluZGV4KHRydWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fX2tleSAhPT0gaXRlcmF0b3Iua2V5KSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldEtleSgpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldEtleSh0cnVlKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKCF1dGlscy5jb21wYXJlKGNDb3B5LCB0aGlzLl9fY29tcGFyaXNvblZhbHVlLCB7IGlnbm9yZVVuZGVmaW5lZDogdHJ1ZSB9KSkge1xuICAgICAgICBpdGVyYXRvci5zZXRWYWx1ZSgpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldFZhbHVlKHRydWUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9fcHJvbWlzZXMucHVzaChBa2lsaS5jb21waWxlKGl0ZXJhdG9yLmVsLCB7IHJlY29tcGlsZTogeyBjaGVja0NoYW5nZXM6IHRydWUgfSB9KSk7XG4gICAgICByZXR1cm4gaXRlcmF0b3I7XG4gICAgfVxuICAgIFxuICAgIGxldCBlbCA9IHRoaXMuY3JlYXRlSXRlcmF0b3JFbGVtZW50KCk7XG4gICAgZWwuaW5uZXJIVE1MID0gdGhpcy5odG1sO1xuICAgIHRoaXMuZWwuaW5zZXJ0QmVmb3JlKGVsLCB0aGlzLml0ZXJhdG9yUmVmKTtcbiAgICB0aGlzLl9fcHJvbWlzZXMucHVzaChBa2lsaS5jb21waWxlKGVsKSk7XG4gICAgdGhpcy5pdGVyYXRvcnMucHVzaChlbC5fX2FraWxpKTtcbiAgICByZXR1cm4gZWwuX19ha2lsaTtcbiAgfVxuXG4gIGRyYXcoZGF0YSkge1xuICAgIGlmICh0eXBlb2YgZGF0YSAhPSAnb2JqZWN0JyB8fCBkYXRhID09PSBudWxsKSB7XG4gICAgICBpZiAoQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLndhcm4oYFwiRm9yXCIgY29tcG9uZW50IFwiaW5cIiBhdHRyaWJ1dGUgdmFsdWUgdHlwZSBtdXN0IGJlIGFuIG9iamVjdC9hcnJheWApOyAgICAgICAgXG4gICAgICB9XG5cbiAgICAgIGRhdGEgPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGEgPSBkYXRhOyAgIFxuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICBjb25zdCBsb29wID0gKGtleSwgdmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBsZXQgaXRlcmF0b3IgPSB0aGlzLmxvb3Aoa2V5LCB2YWx1ZSwgaW5kZXgpO1xuICAgICAgaXRlcmF0b3IuaXRlcmF0ZShpbmRleCk7XG4gICAgfTtcblxuICAgIGlmKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIGZvciAobGV0IGwgPSBkYXRhLmxlbmd0aDsgaW5kZXggPCBsOyBpbmRleCsrKSB7XG4gICAgICAgIGxvb3AoaW5kZXgsIGRhdGFbaW5kZXhdLCBpbmRleCk7XG4gICAgICB9ICAgICBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpO1xuXG4gICAgICBmb3IgKGxldCBsID0ga2V5cy5sZW5ndGg7IGluZGV4IDwgbDsgaW5kZXgrKykge1xuICAgICAgICBsZXQga2V5ID0ga2V5c1tpbmRleF07XG4gICAgICAgIGxvb3Aoa2V5LCBkYXRhW2tleV0sIGluZGV4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gaW5kZXgsIGwgPSB0aGlzLml0ZXJhdG9ycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBpdGVyYXRvciA9IHRoaXMuaXRlcmF0b3JzW2ldO1xuICAgICAgaXRlcmF0b3IuX19kZXN0cm95KCk7XG4gICAgICB0aGlzLml0ZXJhdG9ycy5zcGxpY2UoaSwgMSk7XG4gICAgICBsLS07XG4gICAgICBpLS07XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHRoaXMuX19wcm9taXNlcykudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB0aGlzLmF0dHJzLm9uT3V0LnRyaWdnZXIoZGF0YSwgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgIH0pOyAgICBcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCB0aGUgaW5pdGlhbCBzdGF0ZVxuICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5fX2l0ZXJhdG9yID0gbnVsbDtcbiAgICB0aGlzLl9faW5kZXggPSAwO1xuICAgIHRoaXMuX19rZXkgPSAnJztcbiAgICB0aGlzLl9fdmFsdWUgPSBudWxsO1xuICAgIHRoaXMuX19jb21wYXJpc29uVmFsdWUgPSBudWxsO1xuICAgIHRoaXMuX19wcm9taXNlcyA9IFtdO1xuICB9XG59XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBsb29wcy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfbG9vcHN9XG4gKiBcbiAqIEB0YWcgbG9vcFxuICogQHNlbGVjdG9yIGxvb3AsdHJcbiAqIEBhdHRyIEBzZWUgRm9yXG4gKiBAc2NvcGUgeyp9IGxvb3BWYWx1ZSAtIGRhdGEgaXRlbSdzIHZhbHVlIG9mIHRoZSBjdXJyZW50IGl0ZXJhdGlvbiBcbiAqIEBzY29wZSB7c3RyaW5nfG51bWJlcn0gbG9vcEtleSAtIGtleSBvZiB0aGUgaXRlcmF0aW9uXG4gKiBAc2NvcGUge251bWJlcn0gbG9vcEluZGV4IC0gaW5kZXggb2YgdGhlIGl0ZXJhdGlvblxuICovXG5leHBvcnQgY2xhc3MgTG9vcCBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG4gIHN0YXRpYyBjb250cm9sQXR0cmlidXRlcyA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5mb3IgPSBudWxsO1xuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuaXNGb3IgPSB0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnaW4nKTtcblxuICAgIGlmICghdGhpcy5pc0ZvciAmJiAhKHRoaXMuZWwucGFyZW50Tm9kZS5fX2FraWxpIGluc3RhbmNlb2YgRm9yKSkge1xuICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2l0ZXJhdG9yID0gdGhpcztcbiAgICB0aGlzLmZvciA9IHRoaXMuX19wYXJlbnQuX19ha2lsaTtcbiAgICB0aGlzLnNldEluZGV4KHRydWUpO1xuICAgIHRoaXMuc2V0S2V5KHRydWUpO1xuICAgIHRoaXMuc2V0VmFsdWUodHJ1ZSk7XG5cbiAgICBpZih0aGlzLmlzRm9yKSB7XG4gICAgICByZXR1cm4gc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIGlmKHRoaXMuaXNGb3IpIHtcbiAgICAgIHJldHVybiBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIHNldEluZGV4KHRhcmdldCkge1xuICAgIHRoaXMuaW5kZXggPSB0aGlzLmZvci5fX2luZGV4O1xuICAgIHRoaXMuc2NvcGUuX19zZXQoJ2xvb3BJbmRleCcsIHRoaXMuaW5kZXgsIGZhbHNlLCB0YXJnZXQpO1xuICB9XG5cbiAgc2V0S2V5KHRhcmdldCkge1xuICAgIHRoaXMua2V5ID0gdGhpcy5mb3IuX19rZXk7XG4gICAgdGhpcy5zY29wZS5fX3NldCgnbG9vcEtleScsIHRoaXMua2V5LCBmYWxzZSwgdGFyZ2V0KTtcbiAgfVxuXG4gIHNldFZhbHVlKHRhcmdldCkge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLmZvci5fX3ZhbHVlO1xuICAgIHRoaXMuc2NvcGUuX19zZXQoJ2xvb3BWYWx1ZScsIHRoaXMudmFsdWUsIHRydWUsIHRhcmdldCk7XG5cbiAgICB0aGlzLmNvbXBhcnNpb24gPSB7XG4gICAgICBjb3B5OiB0aGlzLmZvci5fX2NvbXBhcmlzb25WYWx1ZSxcbiAgICAgIHZhbHVlOiB0aGlzLmZvci5fX3ZhbHVlXG4gICAgfTtcbiAgfVxuXG4gIGl0ZXJhdGUoKSB7fVxufVxuXG5Gb3IuTG9vcCA9IExvb3A7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZm9yLmpzIiwiaW1wb3J0IEFraWxpIGZyb20gJy4vYWtpbGkuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuXG4vKipcbiAqIFNjb3BlIGNsYXNzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3Njb3BlfVxuICpcbiAqIEFsbCBwcm9wZXJ0aWVzIHN0YXJ0aW5nIHdpdGggX18gYXJlIG5vdCBtb25pdG9yZWQuXG4gKiBZb3UgY2FuIHVzZSB0aGVtIGZvciBpbnRlcm5hbCBtYW5pcHVsYXRpb25zLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29wZSB7XG4gIHN0YXRpYyBuZXN0ZWRXYXRjaGluZztcblxuICBjb25zdHJ1Y3RvcihuYW1lLCBlbCwgY29tcG9uZW50KSB7XG4gICAgdGhpcy5fX25hbWUgPSBuYW1lO1xuICAgIHRoaXMuX19lbCA9IGVsO1xuICAgIHRoaXMuX19jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgZWwuc2V0QXR0cmlidXRlKCdzY29wZScsIG5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBhIHNjb3BlIHZhbHVlXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbc3RyaWN0PWZhbHNlXSAtIHdpdGhvdXQgb2JqZWN0IGNvcHlpbmdcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXQoa2V5cywgdmFsdWUsIHN0cmljdCA9IGZhbHNlLCB0YXJnZXQgPSBmYWxzZSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG4gICAgXG4gICAgQWtpbGkudW5pc29sYXRlKCgpID0+IHtcbiAgICAgIHN0cmljdCAmJiAodGhpcy5fX2NvbXBvbmVudC5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgPSB0cnVlKTtcbiAgICAgIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKGtleXMsIHRhcmdldD8gdGhpcy5fX3RhcmdldDogdGhpcywgKGxhc3QsIHZhbCkgPT4ge1xuICAgICAgICBpZiAoIWxhc3QpIHtcbiAgICAgICAgICByZXR1cm4gdmFsIHx8IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICBzdHJpY3QgJiYgKHRoaXMuX19jb21wb25lbnQuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nID0gZmFsc2UpO1xuICAgIH0pO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Njb3BlLmpzIiwiaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG4vKipcbiAqIENsYXNzIGZvciB3b3JraW5nIHdpdGggZXZlbnRzLlxuICogQW4gaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBhbGxvd3MgeW91IHRvIHRyaWdnZXIgY3VzdG9tIGphdmFzY3JpcHQgZXZlbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2V2ZW50c31cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZWwsIGNvbXBvbmVudCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbCA9IGVsO1xuICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIHRoaXMuZWxDb21wb25lbnQgPSB0aGlzLmVsLl9fYWtpbGkgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIHRoZSBldmVudFxuICAgKlxuICAgKiBAcGFyYW0geyp9IGRhdGEgLSBzZW5kaW5nIGRhdGEuIFdpbGwgYmUgaW4gdGhlIGV2ZW50LmRldGFpbFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlXVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHRyaWdnZXIoZGF0YSwgb3B0aW9ucyA9IHt9LCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgaWYgKGZvcmNlIHx8ICF0aGlzLmluRXZhbHVhdGluZygpKSB7XG4gICAgICB0aGlzLmVsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KHRoaXMubmFtZSwgdGhpcy5wcmVwYXJlT3B0aW9ucyh7IGRldGFpbDogZGF0YSwgIC4uLm9wdGlvbnMgfSkpKTtcbiAgICB9ICAgXG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2ggdGhlIGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IF9FdmVudCAtIGNsYXNzIG9mIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlXVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGRpc3BhdGNoKF9FdmVudCwgb3B0aW9ucyA9IHt9LCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgaWYgKGZvcmNlIHx8ICF0aGlzLmluRXZhbHVhdGluZygpKSB7XG4gICAgICB0aGlzLmVsLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudCh0aGlzLm5hbWUsIHRoaXMucHJlcGFyZU9wdGlvbnMob3B0aW9ucykpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUHJlcGVyZSBhbiBldmVudCBvcHRpb25zXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIFxuICAgKi9cbiAgcHJlcGFyZU9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IHsgYnViYmxlczogdHJ1ZSwgLi4ub3B0aW9ucyB9OyAgXG4gICAgdGhpcy5lbENvbXBvbmVudCAmJiAhdGhpcy5lbENvbXBvbmVudC5fX3NhdmVBdHRyaWJ1dGVQcm94eU91dCAmJiAob3B0aW9ucy5kZXRhaWwgPSB1dGlscy5jb3B5KG9wdGlvbnMuZGV0YWlsKSk7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgZXZlbnQgY2FsbGJhY2sgZG9lc24ndCBydW4gcmVjdXJzaXZlXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaW5FdmFsdWF0aW5nKCkge1xuICAgIGxldCBkYXRhID0gdGhpcy5jb21wb25lbnQuX19ldmFsdWF0aW5nRXZlbnQ7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YS5lbCA9PT0gdGhpcy5lbCAmJiBkYXRhLmV2ZW50LnR5cGUgPT09IHRoaXMubmFtZSAmJiBkYXRhLmNvbXBvbmVudCA9PT0gdGhpcy5jb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogQmluZCB0aGUgZnVuY3Rpb25cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICovXG4gIGJpbmQoZm4pIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5uYW1lLCB0aGlzLmZuID0gZm4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCB0aGUgZnVuY3Rpb25cbiAgICovXG4gIHVuYmluZCgpIHtcbiAgICB0aGlzLmZuICYmIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMuZm4pO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBTdG9yZSBhbGxvd3MgeW91IHRvIHNhdmUgYW5kIGRpc3RyaWJ1dGUgZGF0YS5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9zdG9yZX1cbiAqL1xuY29uc3Qgc3RvcmUgPSBuZXcgUHJveHkoe30sIHtcbiAgZ2V0OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICBpZiAoa2V5ID09IFwiX190YXJnZXRcIikge1xuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gIH0sXG4gIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgIGlmKHV0aWxzLmNvbXBhcmUodGFyZ2V0W2tleV0sIHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxuICAgIHZhbHVlID0gdXRpbHMuY29weSh2YWx1ZSk7XG4gICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICBBa2lsaS5yb290ICYmIEFraWxpLnJvb3QuX19zdG9yZVRyaWdnZXJCeU5hbWUoa2V5LCB2YWx1ZSk7ICAgIFxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBkZWxldGVQcm9wZXJ0eTogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgQWtpbGkucm9vdCAmJiBBa2lsaS5yb290Ll9fc3RvcmVUcmlnZ2VyQnlOYW1lKGtleSwgdW5kZWZpbmVkKTtcbiAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvc3RvcmUuanMiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogR2xvYmFscyB0byB1c2UgdGhlIGN1c3RvbSB2YXJpYWJscmVzIGluIHNjb3BlIGV4cHJlc3Npb25zXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvc2NvcGUjZG9jc19nbG9iYWxzfVxuICovXG5jb25zdCBnbG9iYWxzID0gbmV3IFByb3h5KHt9LCB7XG4gIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4geyAgICBcbiAgICB0YXJnZXRba2V5XSA9IEFraWxpLndyYXAodmFsdWUsIHsgdGFnOiBgZ2xvYmFscy4ke2tleX1gIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBkZWxldGVQcm9wZXJ0eTogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgQWtpbGkucmVtb3ZlVGFnKGBnbG9iYWxzLiR7a2V5fWApO1xuICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGdsb2JhbHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dsb2JhbHMuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCByb3V0ZXIgdGVtcGxhdGVzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmcjZG9jc190ZW1wbGF0ZXN9XG4gKiBcbiAqIEB0YWcgcm91dGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgncm91dGUnLCB0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtUcmFuc2l0aW9ufSB0cmFuc2l0aW9uXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9hZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHNldFRyYW5zaXRpb24odHJhbnNpdGlvbiwgbG9hZCA9IHRydWUpIHtcbiAgICBsZXQgc3RhdGUgPSB0cmFuc2l0aW9uLnBhdGguc3RhdGU7XG5cbiAgICBjb25zdCBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24gPSAocGF0aCkgPT4ge1xuICAgICAgaWYgKHBhdGgucGFyZW50KSB7XG4gICAgICAgIGlmIChwYXRoLnBhcmVudC5jb21wb25lbnQpIHtcbiAgICAgICAgICByZXR1cm4gcGF0aC5wYXJlbnQuY29tcG9uZW50Ll9fc2NvcGUuX190cmFuc2l0aW9uLnBhdGg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uKHBhdGgucGFyZW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcGlsZSA9IChodG1sKSA9PiB7IFxuICAgICAgdGhpcy5lbXB0eSgpOyAgXG4gICAgICBsZXQgbmFtZSA9ICdjb21wb25lbnQnO1xuXG4gICAgICBpZihzdGF0ZS5jb21wb25lbnQpIHtcbiAgICAgICAgbGV0IGV4aXN0cyA9IGZhbHNlO1xuICAgIFxuICAgICAgICBmb3IobGV0IGtleSBpbiBBa2lsaS5fX2NvbXBvbmVudHMpIHtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBBa2lsaS5fX2NvbXBvbmVudHNba2V5XTtcbiAgICBcbiAgICAgICAgICBpZihjb21wb25lbnQgPT09IHN0YXRlLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgbmFtZSA9IGtleTsgICAgICAgICAgICBcbiAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaWYoIWV4aXN0cykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIFwiJHtzdGF0ZS5uYW1lfVwiIGhhcyBubyBkZWZpbmVkIGNvbXBvbmVudGApXG4gICAgICAgIH0gXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gYDwkeyBuYW1lIH0+JHsgaHRtbCB9PC8keyBuYW1lIH0+YDtcbiAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX19zY29wZS5fX3RyYW5zaXRpb24gPSB7ICBcbiAgICAgIHBhcmVudDogZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uKHRyYW5zaXRpb24ucGF0aCksICAgXG4gICAgICBzdGF0ZTogdHJhbnNpdGlvbi5wYXRoLnN0YXRlLFxuICAgICAgZGF0YTogdHJhbnNpdGlvbi5wYXRoLmRhdGEsXG4gICAgICB1cmw6IHRyYW5zaXRpb24ucGF0aC51cmwsXG4gICAgICBwYXJhbXM6IHRyYW5zaXRpb24ucGF0aC5wYXJhbXMsXG4gICAgICBxdWVyeTogdHJhbnNpdGlvbi5wYXRoLnF1ZXJ5LFxuICAgICAgaGFzaDogdHJhbnNpdGlvbi5wYXRoLmhhc2hcbiAgICB9O1xuXG4gICAgaWYgKCFsb2FkKSB7XG4gICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogeyBjaGVja0NoYW5nZXM6IHRydWUgfSB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICBpZiAoc3RhdGUudGVtcGxhdGUpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnRlbXBsYXRlO1xuICAgICAgfVxuICBcbiAgICAgIGlmIChzdGF0ZS50ZW1wbGF0ZVVybCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdC5nZXQoc3RhdGUudGVtcGxhdGVVcmwpLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcbiAgICAgIH1cbiAgICB9KS50aGVuKGh0bWwgPT4gY29tcGlsZShodG1sKSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9yb3V0ZS5qcyIsImltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9yZXF1ZXN0LmpzJztcbmltcG9ydCBSb3V0ZSBmcm9tICcuLi9jb21wb25lbnRzL3JvdXRlLmpzJztcblxuLyoqXG4gKiBUcmFuc2l0aW9uIGNsYXNzLlxuICogQW4gaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBjb25zaXN0cyB0aGUgbGFzdCBhY3R1YWwgcm91dGVyIHRyYW5zaXRpb24gaW5mb3JtYXRpb24uXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3RyYW5zaXRpb259XG4gKi9cbmV4cG9ydCBjbGFzcyBUcmFuc2l0aW9uIHtcbiAgY29uc3RydWN0b3IodXJsLCBwcmV2aW91cyA9IG51bGwpIHsgIFxuICAgIHRoaXMudXJsID0gdXJsOyAgXG4gICAgdGhpcy5wcmV2aW91cyA9IHByZXZpb3VzO1xuICAgIHRoaXMucGF0aCA9IG51bGw7XG4gICAgdGhpcy5yb3V0ZXMgPSBbXTtcbiAgICB0aGlzLnN0YXRlcyA9IHt9O1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fZmluaXNlZCA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZGlyZWN0IHRvIGFub3RoZXIgc3RhdGVcbiAgICogXG4gICAqIEBzZWUgcm91dGVyLnN0YXRlXG4gICAqL1xuICByZWRpcmVjdChzdGF0ZSwgcGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSB1bmRlZmluZWQsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSB7IC4uLnJvdXRlci50cmFuc2l0aW9uLnBhdGgub3B0aW9ucywgLi4ub3B0aW9ucyB9O1xuICAgIHRoaXMuY2FuY2VsKCk7ICAgXG4gICAgcmV0dXJuIHJvdXRlci5zdGF0ZS5jYWxsKHJvdXRlciwgc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbG9hZCB0aGUgY3VycmVudCBzdGF0ZVxuICAgKiBcbiAgICogQHNlZSBUcmFuc2l0aW9uLnByb3RvdHlwZS5yZWRpcmVjdFxuICAgKi9cbiAgcmVsb2FkKHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gdW5kZWZpbmVkLCBvcHRpb25zID0ge30pIHtcbiAgICBwYXJhbXMgPSB7IC4uLnRoaXMucGF0aC5wYXJhbXMsIC4uLnBhcmFtcyB9O1xuICAgIHF1ZXJ5ID0geyAuLi50aGlzLnBhdGgucXVlcnksIC4uLnF1ZXJ5IH07XG4gICAgaGFzaCA9IGhhc2ggPT09IHVuZGVmaW5lZD8gdGhpcy5wYXRoLmhhc2g6IGhhc2g7XG4gICAgcmV0dXJuIHRoaXMucmVkaXJlY3QodGhpcy5wYXRoLnN0YXRlLm5hbWUsIHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgY3VycmVudCBwYXRoXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gcGF0aCBcbiAgICovXG4gIHNldFBhdGgocGF0aCkge1xuICAgIHBhdGgucGFyZW50ID0gdGhpcy5wYXRoIHx8IG51bGw7XG4gICAgdGhpcy5wYXRoID0geyBwYXJhbXM6IHt9LCBxdWVyeToge30sIC4uLnBhdGggfTtcbiAgICB0aGlzLnJvdXRlcy5wdXNoKHRoaXMucGF0aCk7XG4gICAgdGhpcy5zdGF0ZXNbdGhpcy5wYXRoLnN0YXRlLm5hbWVdID0gdGhpcy5wYXRoO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIHJvdXRlIGJ5IHRoZSBzdGF0ZVxuICAgKiAgXG4gICAqIEBwYXJhbSB7Kn0gc3RhdGUgXG4gICAqL1xuICBnZXRSb3V0ZShzdGF0ZSkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5yb3V0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcm91dGUgPSB0aGlzLnJvdXRlc1tpXTtcblxuICAgICAgaWYgKHJvdXRlLnN0YXRlID09PSBzdGF0ZSkge1xuICAgICAgICByZXR1cm4gcm91dGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgaXQgaGFzIHRoZSBzdGF0ZVxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIFxuICAgKi9cbiAgaGFzU3RhdGUoc3RhdGUpIHtcbiAgICByZXR1cm4gISF0aGlzLnN0YXRlc1tzdGF0ZS5uYW1lXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgcm91dGUgaXMgY2hhbmdlZFxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IHJvdXRlXG4gICAqL1xuICBpc1JvdXRlQ2hhbmdlZChyb3V0ZSkge1xuICAgIGlmKCF0aGlzLnByZXZpb3VzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBzdGF0ZSA9IHJvdXRlLnN0YXRlO1xuXG4gICAgaWYoIXRoaXMucHJldmlvdXMuaGFzU3RhdGUoc3RhdGUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJhbUtleXMgPSBbXTtcbiAgICBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHJvdXRlci5fX3BhcmFtUmVnZXgsIChtLCBmLCB2KSA9PiBwYXJhbUtleXMucHVzaCh2KSk7XG4gICAgXG4gICAgZm9yKGxldCBrZXkgaW4gc3RhdGUucGFyYW1zKSB7XG4gICAgICBpZihwYXJhbUtleXMuaW5kZXhPZihrZXkpID09IC0xKSB7XG4gICAgICAgIHBhcmFtS2V5cy5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcXVlcnlLZXlzID0gT2JqZWN0LmtleXMoc3RhdGUucXVlcnkpO1xuICAgIGNvbnN0IHdhdGNoSGFzaCA9IHN0YXRlLmhhc2ggIT09IHVuZGVmaW5lZDsgICAgXG4gICAgY29uc3QgcHJldlJvdXRlID0gdGhpcy5wcmV2aW91cy5nZXRSb3V0ZShzdGF0ZSk7IFxuXG4gICAgY29uc3QgcHJldiA9IHsgXG4gICAgICBwYXJhbXM6IHV0aWxzLmluY2x1ZGVLZXlzKHByZXZSb3V0ZS5wYXJhbXMsIHBhcmFtS2V5cyksIFxuICAgICAgcXVlcnk6IHV0aWxzLmluY2x1ZGVLZXlzKHByZXZSb3V0ZS5xdWVyeSwgcXVlcnlLZXlzKVxuICAgIH07XG5cbiAgICBjb25zdCBjdXJyZW50ID0ge1xuICAgICAgcGFyYW1zOiB1dGlscy5pbmNsdWRlS2V5cyhyb3V0ZS5wYXJhbXMsIHBhcmFtS2V5cyksXG4gICAgICBxdWVyeTogdXRpbHMuaW5jbHVkZUtleXMocm91dGUucXVlcnksIHF1ZXJ5S2V5cylcbiAgICB9XG5cbiAgICBpZih3YXRjaEhhc2gpIHtcbiAgICAgIHByZXYuaGFzaCA9IHByZXZSb3V0ZS5oYXNoO1xuICAgICAgY3VycmVudC5oYXNoID0gcm91dGUuaGFzaDtcbiAgICB9XG5cbiAgICByZXR1cm4gIXV0aWxzLmNvbXBhcmUocHJldiwgY3VycmVudCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FuY2VsIHRoZSBjdXJyZW50IHRyYW5zaXRpb25cbiAgICovXG4gIGNhbmNlbCgpIHsgICBcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICB0aGlzLmZpbmlzaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmlzaCB0aGUgdHJhbnNpdGlvblxuICAgKi9cbiAgZmluaXNoKCkge1xuICAgIHRoaXMuX19maW5pc2VkID0gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIEFraWxpIHJvdXRlclxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmd9XG4gKi9cbmNvbnN0IHJvdXRlciA9IHt9O1xuXG4vKipcbiAqIFNldCByb3V0ZXIncyBkZWZhdWx0IHZhcmlhYmxlc1xuICovXG5yb3V0ZXIuc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuYmFzZVVybCA9IFwiL1wiO1xuICB0aGlzLnN0YXRlcyA9IFtdO1xuICB0aGlzLmhhc2hNb2RlID0gdHJ1ZTtcbiAgdGhpcy5fX3JlZGlyZWN0cyA9IDA7XG4gIHRoaXMuX19pbml0ID0gZmFsc2U7XG4gIHRoaXMuX19wYXJhbVJlZ2V4ID0gLyhcXC8/OihbXFx3XFxkLV0rKSkvZztcbiAgdGhpcy5fX3JvdXRlU2VsZWN0b3IgPSBjID0+IGMgaW5zdGFuY2VvZiBSb3V0ZTtcbn1cblxuLyoqXG4gKiBBZGQgbmV3IHN0YXRlIHRvIHRoZSByb3V0ZXJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHN0YXRlIG5hbWUuIFRvIHNldCBwYXJlbnRzIHlvdSBjYW4gdXNlIGRvdCwgZS5nLiAnYXBwLmFydGljbGUuZWRpdCdcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXR0ZXJuIC0gdXJsIHBhdHRlcm4gbGlrZSAnYXBwL2FydGljbGUvOmlkJ1xuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge3JvdXRlcn1cbiAqL1xucm91dGVyLmFkZCA9IGZ1bmN0aW9uIChuYW1lLCBwYXR0ZXJuLCBvcHRpb25zID0ge30pIHtcbiAgaWYodHlwZW9mIG5hbWUgPT0gJ29iamVjdCcpIHtcbiAgICBvcHRpb25zID0gbmFtZTtcbiAgICBwYXR0ZXJuID0gb3B0aW9ucy5wYXR0ZXJuO1xuICAgIG5hbWUgPSBvcHRpb25zLnN0YXRlO1xuICAgIGRlbGV0ZSBvcHRpb25zLnBhdHRlcm47XG4gICAgZGVsZXRlIG9wdGlvbnMuc3RhdGU7XG4gIH1cblxuICBpZighbmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIG11c3QgaGF2ZSBhIG5hbWVgKTtcbiAgfVxuXG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIHRlbXBsYXRlOiAnJyxcbiAgICB0ZW1wbGF0ZVVybDogJycsXG4gICAgYWJzdHJhY3Q6IGZhbHNlLFxuICAgIGNvbXBvbmVudDogbnVsbCxcbiAgICBwYXJhbXM6IHt9LFxuICAgIHF1ZXJ5OiB7fSxcbiAgICBoYW5kbGVyOiAoKSA9PiB7fSxcbiAgfTtcblxuICBpZihBa2lsaS5vcHRpb25zLmRlYnVnICYmIG9wdGlvbnMuY29tcG9uZW50ICYmIChvcHRpb25zLnRlbXBsYXRlIHx8IG9wdGlvbnMudGVtcGxhdGVVcmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oYFJvdXRlciBzdGF0ZSBcIiR7bmFtZX1cIiBtdXN0IG9ubHkgaGF2ZSBhIGNvbXBvbmVudCBvciB0ZW1wbGF0ZSBvcHRpb25gKTtcbiAgfSBcblxuICBpZiAoIW9wdGlvbnMudGVtcGxhdGUgJiYgIW9wdGlvbnMudGVtcGxhdGVVcmwgJiYgIW9wdGlvbnMuY29tcG9uZW50KSB7XG4gICAgb3B0aW9ucy5hYnN0cmFjdCA9IHRydWU7XG4gIH1cblxuICBpZiAodGhpcy5oYXMobmFtZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBcIiR7bmFtZX1cIiBpcyBhbHJlYWR5IGV4aXN0c2ApXG4gIH1cblxuICB0aGlzLnNldFN0YXRlKG5hbWUsIHBhdHRlcm4sIHsuLi5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9uc30pO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIHN0YXRlIGZyb20gdGhlIGxpc3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5yb3V0ZXIucmVtb3ZlID0gZnVuY3Rpb24obmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmICh0aGlzLnN0YXRlc1tpXS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHRoaXMuc3RhdGVzLnNwbGljZShpLCAxKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBDaGVjayBzdGF0ZSBleGlzdHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnJvdXRlci5oYXMgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKHRoaXMuc3RhdGVzW2ldLm5hbWUgPT0gbmFtZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBDaGFuZ2UgdGhlIHN0YXRlIHRvIHRoZSBwYXNzZWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSAtIHBhcmFtcyBmb3Igc3RhdGUge2lkOiAxfSA9PiAnL2FwcC86aWQnID0+ICcvYXBwLzEnXG4gKiBAcGFyYW0ge29iamVjdH0gW3F1ZXJ5XSAtIHF1ZXJ5IHt4OiAxfSA9PiAnL2FwcC8/eD0xJ1xuICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoXVxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICovXG5yb3V0ZXIuc3RhdGUgPSBmdW5jdGlvbiAoc3RhdGUsIHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gdW5kZWZpbmVkLCBvcHRpb25zID0ge30pIHsgIFxuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgXG4gIGlmICghc3RhdGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCByb3V0ZSBzdGF0ZSB3aXRoIG5hbWUgJHtzdGF0ZX1gKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSB7IC4uLm9wdGlvbnMgfTtcbiAgb3B0aW9ucy5tYW51YWwgPSB0cnVlO1xuICAoeyBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zIH0gPSB0aGlzLnByZXBhcmVTdGF0ZUFyZ3Moc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMsIGZhbHNlKSk7ICBcbiAgbGV0IHVybCA9IHRoaXMuY3JlYXRlU3RhdGVVcmwoc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMpOyAgICBcbiAgdGhpcy5pc29sYXRlKCgpID0+IHRoaXMuc2V0VXJsKHVybCkpO1xuICByZXR1cm4gdGhpcy5jaGFuZ2VTdGF0ZShvcHRpb25zKTtcbn07XG5cbi8qKlxuICogR28gYmFja1xuICovXG5yb3V0ZXIuYmFjayA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkuYmFjay5hcHBseSh3aW5kb3cuaGlzdG9yeSwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogR28gdG8gYW55IHdheVxuICovXG5yb3V0ZXIuZ28gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LmdvLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBHbyBmb3J3YXJkXG4gKi9cbnJvdXRlci5mb3J3YXJkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeS5mb3J3YXJkLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RhdGUgYnkgdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICovXG5yb3V0ZXIubG9jYXRpb24gPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zID0ge30pIHtcbiAgb3B0aW9ucyA9IHsgLi4ub3B0aW9ucyB9O1xuICBvcHRpb25zLm1hbnVhbCA9IHRydWU7XG4gIHRoaXMuaXNvbGF0ZSgoKSA9PiB0aGlzLnNldFVybCh1cmwpKTsgIFxuICByZXR1cm4gdGhpcy5jaGFuZ2VTdGF0ZShvcHRpb25zKTtcbn07XG5cbi8qKlxuICogUm91dGVyIGluaXRpYWxpemF0aW9uLiBTaG91bGQgYmUgY2FsbGVkIGJlZm9yZSBBa2lsaS5pbml0KClcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW2RlZmF1bHRVcmxdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtoYXNoTW9kZT10cnVlXVxuICovXG5yb3V0ZXIuaW5pdCA9IGZ1bmN0aW9uIChkZWZhdWx0VXJsID0gJycsIGhhc2hNb2RlID0gdHJ1ZSkge1xuICBsZXQgb2xkUHVzaFN0YXRlID0gd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlO1xuXG4gIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCByZXMgPSBvbGRQdXNoU3RhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIHJvdXRlci5jaGFuZ2VTdGF0ZSgpLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICB0aGlzLl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICB0aGlzLmNoYW5nZVN0YXRlKCkuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgfTtcblxuICB0aGlzLmRlZmF1bHRVcmwgPSBkZWZhdWx0VXJsO1xuICB0aGlzLmhhc2hNb2RlID0gaGFzaE1vZGU7ICAgIFxuXG4gIHRoaXMuc3RhdGVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICBhID0gYS5uYW1lLnNwbGl0KCcuJykubGVuZ3RoO1xuICAgIGIgPSBiLm5hbWUuc3BsaXQoJy4nKS5sZW5ndGg7XG4gICAgcmV0dXJuIGEgLSBiO1xuICB9KTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHRoaXMuaW5pdFN0YXRlKHRoaXMuc3RhdGVzW2ldKTtcbiAgfVxuXG4gIGlmICghdGhpcy5zdGF0ZXMubGVuZ3RoICYmIEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihgWW91IGRpZG4ndCBhZGQgYW55IHJvdXRlcyB0byB0aGUgcm91dGVyYCk7XG4gIH1cblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIpO1xuICB0aGlzLl9faW5pdCA9IHRydWU7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIHN0YXRlIFxuICogXG4gKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgXG4gKi9cbnJvdXRlci5pbml0U3RhdGUgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgbGV0IHBhcmVudHMgPSBbXTtcbiAgc3RhdGUuY2hpbGRyZW4gPSBbXTtcbiAgcGFyZW50cyA9IHN0YXRlLm5hbWUuc3BsaXQoJy4nKTtcbiAgcGFyZW50cy5wb3AoKTtcbiAgc3RhdGUubGV2ZWwgPSBzdGF0ZS5hYnN0cmFjdD8gbnVsbDogcGFyZW50cy5sZW5ndGg7XG5cbiAgaWYgKHBhcmVudHMubGVuZ3RoKSB7XG4gICAgbGV0IHBhcmVudE5hbWUgPSBwYXJlbnRzLmpvaW4oJy4nKTtcbiAgICBsZXQgcGFyZW50ID0gdGhpcy5nZXRTdGF0ZShwYXJlbnROYW1lKTtcblxuICAgIGlmICghcGFyZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCBwYXJlbnQgcm91dGUgc3RhdGUgXCIke3BhcmVudE5hbWV9XCIgZm9yIFwiJHtzdGF0ZS5uYW1lfVwiYClcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUubGV2ZWwgIT09IG51bGwgJiYgcGFyZW50LmFic3RyYWN0KSB7XG4gICAgICBzdGF0ZS5sZXZlbC0tO1xuICAgIH1cblxuICAgIHN0YXRlLmZ1bGxQYXR0ZXJuID0gdGhpcy5zcGxpdFNsYXNoZXMocGFyZW50LmZ1bGxQYXR0ZXJuICsgJy8nICsgc3RhdGUucGF0dGVybik7XG4gICAgcGFyZW50LmNoaWxkcmVuLnB1c2goc3RhdGUpO1xuICB9XG4gIGVsc2Uge1xuICAgIHN0YXRlLmZ1bGxQYXR0ZXJuID0gc3RhdGUucGF0dGVybjtcbiAgfVxufVxuXG4vKipcbiAqIEdldCBzdGF0ZSBieSBuYW1lXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAqL1xucm91dGVyLmdldFN0YXRlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogU2V0IHN0YXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXR0ZXJuXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICovXG5yb3V0ZXIuc2V0U3RhdGUgPSBmdW5jdGlvbiAobmFtZSwgcGF0dGVybiwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBzdGF0ZSA9IHsuLi5vcHRpb25zLCBuYW1lLCBwYXR0ZXJufTtcbiAgdGhpcy5zdGF0ZXMucHVzaChzdGF0ZSk7XG4gIHRoaXMuX19pbml0ICYmIHRoaXMuaW5pdFN0YXRlKHN0YXRlKTtcbiAgcmV0dXJuIHN0YXRlO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgc3RhdGUgYnkgbmFtZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnJvdXRlci5yZW1vdmVTdGF0ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZXNbaV07XG5cbiAgICBpZiAoc3RhdGUubmFtZSA9PSBuYW1lKSB7XG4gICAgICB0aGlzLnN0YXRlcy5zcGxpY2UoaSwgMSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogU2V0IHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqL1xucm91dGVyLnNldFVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgdGhpcy5oYXNoTW9kZT8gdGhpcy5zZXRIYXNoVXJsKHVybCk6IHRoaXMuc2V0SGlzdG9yeVVybCh1cmwpO1xufTtcblxuLyoqXG4gKiBTZXQgdXJsIHVzaW5nIGhpc3RvcnlcbiAqXG4gKiBAcGFyYW0gdXJsXG4gKi9cbnJvdXRlci5zZXRIaXN0b3J5VXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUodW5kZWZpbmVkLCB1bmRlZmluZWQsIHVybCk7XG59O1xuXG4vKipcbiAqIFNldCB1cmwgdXNpbmcgaGFzaFxuICpcbiAqIEBwYXJhbSB1cmxcbiAqL1xucm91dGVyLnNldEhhc2hVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyMnICsgKHVybCB8fCAnLycpO1xufTtcblxuLyoqXG4gKiBSZXBsYWNlIHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqL1xucm91dGVyLnJlcGxhY2VVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHRoaXMuaGFzaE1vZGU/IHRoaXMucmVwbGFjZUhhc2hVcmwodXJsKTogdGhpcy5yZXBsYWNlSGlzdG9yeVVybCh1cmwpO1xufTtcblxuLyoqXG4gKiBTZXQgdXJsIHVzaW5nIGhpc3RvcnlcbiAqXG4gKiBAcGFyYW0gdXJsXG4gKi9cbnJvdXRlci5yZXBsYWNlSGlzdG9yeVVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1cmwpO1xufTtcblxuLyoqXG4gKiBTZXQgdXJsIHVzaW5nIGhhc2hcbiAqXG4gKiBAcGFyYW0gdXJsXG4gKi9cbnJvdXRlci5yZXBsYWNlSGFzaFVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAnIycgKyAodXJsIHx8ICcvJykpO1xufTtcblxuLyoqXG4gKiBHZXQgdXJsXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLmdldFVybCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuaGFzaE1vZGUgPyB0aGlzLmdldEhhc2hVcmwoKSA6IHRoaXMuZ2V0SGlzdG9yeVVybCgpO1xufTtcblxuLyoqXG4gKiBHZXQgdXJsIHVzaW5nIGhpc3RvcnlcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuZ2V0SGlzdG9yeVVybCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyB3aW5kb3cubG9jYXRpb24uaGFzaDtcbn07XG5cbi8qKlxuICogR2V0IHVybCB1c2luZyBoYXNoXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLmdldEhhc2hVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKC9eIy8sICcnKTtcbn07XG5cbi8qKlxuICogR2V0IHF1ZXJ5IHBhcmFtc1xuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5oYXNoTW9kZSA/IHRoaXMuZ2V0SGFzaFVybFF1ZXJ5KCkgOiB0aGlzLmdldEhpc3RvcnlVcmxRdWVyeSgpO1xufTtcblxuLyoqXG4gKiBHZXQgcXVlcnkgcGFyYW1zIHVzaW5nIGhpc3RvcnlcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0SGlzdG9yeVVybFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByZXF1ZXN0LnBhcmFtc0Zyb21RdWVyeSh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykpO1xufTtcblxuLyoqXG4gKiBHZXQgcXVlcnkgcGFyYW1zIHVzaW5nIGhhc2hcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0SGFzaFVybFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByZXF1ZXN0LnBhcmFtc0Zyb21RdWVyeSgod2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJz8nKVsxXSB8fCAnJykpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgdXJsIGJ5IGRhdGFcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc11cbiAqIEBwYXJhbSB7b2JqZWN0fSBbcXVlcnldXG4gKiBAcGFyYW0ge3N0cmluZ30gW2hhc2hdXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtwcmVwYXJlXVxuICovXG5yb3V0ZXIuY3JlYXRlU3RhdGVVcmwgPSBmdW5jdGlvbiAoc3RhdGUsIHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gdW5kZWZpbmVkLCBvcHRpb25zID0ge30sIHByZXBhcmUgPSB0cnVlKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBvcHRpb25zID0geyAuLi5vcHRpb25zIH07XG4gIFxuICBpZihwcmVwYXJlKSB7XG4gICAgKHsgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucyB9ID0gdGhpcy5wcmVwYXJlU3RhdGVBcmdzKHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zKSk7XG4gIH1cblxuICBsZXQgdXJsID0gc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZSh0aGlzLl9fcGFyYW1SZWdleCwgKG0sIGYsIHYpID0+ICcvJyArIChwYXJhbXNbdl0gfHwgJycpKTtcbiAgdXJsID0gdXJsLnJlcGxhY2UoL15cXF4vLCAnJyk7XG4gIHVybCA9IHRoaXMuc3BsaXRTbGFzaGVzKHVybCk7XG5cbiAgaWYgKE9iamVjdC5rZXlzKHF1ZXJ5KS5sZW5ndGgpIHtcbiAgICB1cmwgKz0gJz8nICsgcmVxdWVzdC5wYXJhbXNUb1F1ZXJ5KHF1ZXJ5KTtcbiAgfVxuXG4gIGlmICghdGhpcy5oYXNoTW9kZSAmJiBoYXNoKSB7XG4gICAgdXJsICs9ICcjJyArIGhhc2gucmVwbGFjZSgnIycsICcnKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuXG4vKipcbiAqIFByZXBhcmUgdGhlIHN0YXRlIGFyZ3VtZW50c1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc11cbiAqIEBwYXJhbSB7b2JqZWN0fSBbcXVlcnldXG4gKiBAcGFyYW0ge3N0cmluZ30gW2hhc2hdXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKi9cbnJvdXRlci5wcmVwYXJlU3RhdGVBcmdzID0gZnVuY3Rpb24gKHN0YXRlLCBwYXJhbXMgPSB7fSwgcXVlcnkgPSB7fSwgaGFzaCA9IHVuZGVmaW5lZCwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBhcmdzID0geyBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zIH07XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IDk7IGkrKykge1xuICAgIGNvbnN0IHBhcmFtc1RlbXAgPSB0aGlzLnByZXBhcmVTdGF0ZVBhcmFtcyhzdGF0ZSwgcGFyYW1zLCBhcmdzKTtcbiAgICBjb25zdCBxdWVyeVRlbXAgPSB0aGlzLnByZXBhcmVTdGF0ZVF1ZXJ5KHN0YXRlLCBxdWVyeSwgYXJncyk7XG4gICAgY29uc3QgaGFzaFRlbXAgPSB0aGlzLnByZXBhcmVTdGF0ZUhhc2goc3RhdGUsIGhhc2gsIGFyZ3MpO1xuICAgIFxuICAgIGlmKGhhc2hUZW1wID09PSBudWxsKSB7XG4gICAgICBvcHRpb25zLmVtcHR5SGFzaCA9IG51bGw7XG4gICAgfVxuICAgIGVsc2UgaWYoaGFzaFRlbXAgPT09ICcnKSB7XG4gICAgICBvcHRpb25zLmVtcHR5SGFzaCA9ICcnO1xuICAgIH1cblxuICAgIGFyZ3MgPSB7IHBhcmFtczogcGFyYW1zVGVtcCwgcXVlcnk6IHF1ZXJ5VGVtcCwgaGFzaDogaGFzaFRlbXAsIG9wdGlvbnMgfTtcbiAgfVxuICAgIFxuICByZXR1cm4gYXJncztcbn1cblxuLyoqXG4gKiBQcmVwYXJlIHRoZSBzdGF0ZSBwYXJhbXNcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IHBhcmFtc1xuICogQHBhcmFtIHtvYmplY3R9IFthcmdzXVxuICovXG5yb3V0ZXIucHJlcGFyZVN0YXRlUGFyYW1zID0gZnVuY3Rpb24oc3RhdGUsIHBhcmFtcywgYXJncykge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgY29uc3QgbGlzdCA9IFtwYXJhbXNdO1xuICBjb25zdCBzdGF0ZXMgPSBzdGF0ZS5uYW1lLnNwbGl0KCcuJyk7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IHN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgY3VycmVudCA9IHN0YXRlcy5zbGljZSgwLCBzdGF0ZXMubGVuZ3RoIC0gaSkuam9pbignLicpO1xuICAgIGxpc3QucHVzaCh0aGlzLmdldFN0YXRlKGN1cnJlbnQpLnBhcmFtcyk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5jcmVhdGVTdGF0ZUFyZ3MobGlzdCwgYXJncyk7XG59XG5cbi8qKlxuICogUHJlcGFyZSB0aGUgc3RhdGUgcXVlcnlcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IHF1ZXJ5XG4gKiBAcGFyYW0ge29iamVjdH0gW2FyZ3NdXG4gKi9cbnJvdXRlci5wcmVwYXJlU3RhdGVRdWVyeSA9IGZ1bmN0aW9uKHN0YXRlLCBxdWVyeSwgYXJncykgeyAgXG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBjb25zdCBsaXN0ID0gW3F1ZXJ5XTtcbiAgY29uc3Qgc3RhdGVzID0gc3RhdGUubmFtZS5zcGxpdCgnLicpOyAgXG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IHN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjb25zdCBjdXJyZW50ID0gc3RhdGVzLnNsaWNlKDAsIHN0YXRlcy5sZW5ndGggLSBpKS5qb2luKCcuJyk7XG4gICAgbGlzdC5wdXNoKHRoaXMuZ2V0U3RhdGUoY3VycmVudCkucXVlcnkpO1xuICB9XG4gXG4gIHJldHVybiB0aGlzLmNyZWF0ZVN0YXRlQXJncyhsaXN0LCBhcmdzKTtcbn1cblxuLyoqXG4gKiBNZXJnZSBsaXN0IGl0ZW1zIGFzIHRyYW5zaXRpb24gb2JqZWN0c1xuICogXG4gKiBAcGFyYW0ge29iamVjdFtdfSBsaXN0XG4gKiBAcGFyYW0ge29iamVjdH0gW2FyZ3NdXG4gKi9cbnJvdXRlci5jcmVhdGVTdGF0ZUFyZ3MgPSBmdW5jdGlvbiAobGlzdCwgYXJncyA9IHsgcGFyYW1zOiB7fSwgcXVlcnk6IHt9IH0pIHtcbiAgY29uc3QgYWxsID0ge307XG4gIGNvbnN0IGV4Y2x1ZGVkID0ge307XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IGxpc3QubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgY29uc3Qgb2JqID0gbGlzdFtpXTtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiBcbiAgICBmb3IobGV0IGsgPSAwLCBjID0ga2V5cy5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgIGxldCBrZXkgPSBrZXlzW2tdO1xuICAgICAgbGV0IHZhbCA9IG9ialtrZXldO1xuXG4gICAgICBpZihleGNsdWRlZFtrZXldKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB2YWwgPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic/IHZhbChhcmdzKTogdmFsO1xuXG4gICAgICBpZih2YWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYodmFsID09PSBudWxsKSB7XG4gICAgICAgIGRlbGV0ZSBhbGxba2V5XTtcbiAgICAgICAgZXhjbHVkZWRba2V5XSA9IHRydWU7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBhbGxba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYWxsOyBcbn1cblxuLyoqXG4gKiBQcmVwYXJlIHRoZSBzdGF0ZSBoYXNoXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXG4gKiBAcGFyYW0ge29iamVjdH0gW2FyZ3NdXG4gKi9cbnJvdXRlci5wcmVwYXJlU3RhdGVIYXNoID0gZnVuY3Rpb24oc3RhdGUsIGhhc2gsIGFyZ3MpIHtcbiAgaWYoaGFzaCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBoYXNoO1xuICB9XG5cbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG4gIGNvbnN0IHN0YXRlcyA9IHN0YXRlLm5hbWUuc3BsaXQoJy4nKTtcblxuICBmb3IobGV0IGkgPSAwLCBsID0gc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBzdGF0ZXMuc2xpY2UoMCwgc3RhdGVzLmxlbmd0aCAtIGkpLmpvaW4oJy4nKTtcbiAgICBsZXQgdmFsID0gdGhpcy5nZXRTdGF0ZShjdXJyZW50KS5oYXNoO1xuICAgIHZhbCA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJz8gdmFsKGFyZ3MpOiB2YWw7XG5cbiAgICBpZih2YWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYodmFsID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBoYXNoID0gdmFsO1xuICB9XG5cbiAgcmV0dXJuIGhhc2g7XG59XG5cbi8qKlxuICogUmVtb3ZlIGFsbCB1bm5lY2Vzc2FyeSBzbGFzaGVzIGZyb20gYW4gdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLnNwbGl0U2xhc2hlcyA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgcmV0dXJuIHVybC5yZXBsYWNlKC9bL10rL2csICcvJyk7XG59O1xuXG4vKipcbiAqIEdldCBzdGF0ZSB1cmwgY29udGVudFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRQYXR0ZXJuQ29udGVudCA9IGZ1bmN0aW9uIChzdGF0ZSwgdXJsKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBsZXQga2V5cyA9IFtdO1xuICBsZXQgcGFyYW1zID0ge307XG5cbiAgdXJsID0gdXJsLnNwbGl0KCc/JylbMF07XG4gIHVybCA9IHVybC5zcGxpdCgnIycpWzBdO1xuXG4gIGxldCB1cmxQYXR0ZXJuID0gc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZSh0aGlzLl9fcGFyYW1SZWdleCwgKG0sIGYsIHYpID0+IHtcbiAgICBrZXlzLnB1c2godik7XG4gICAgcmV0dXJuICcvPyhbXi9dKiknO1xuICB9KTtcblxuICB1cmxQYXR0ZXJuID0gdXJsUGF0dGVybi5yZXBsYWNlKC8oW15eL10rKVsvXSskLywgJyQxJyk7XG4gIGxldCByZWdleCA9IG5ldyBSZWdFeHAodXJsUGF0dGVybiwgJ2cnKTtcbiAgbGV0IGlzSW5jbHVkZWQgPSB1cmwubWF0Y2gocmVnZXgpO1xuICBcbiAgaWYgKCFpc0luY2x1ZGVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB1cmwucmVwbGFjZShyZWdleCwgKG0sIC4uLmFyZ3MpID0+IHsgXG4gICAgYXJncyA9IGFyZ3Muc2xpY2UoMCwgYXJncy5sZW5ndGggLSAyKTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBhcmdzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHYgPSBhcmdzW2ldO1xuICAgICAgdiAmJiAocGFyYW1zW2tleXNbaV1dID0gdik7XG4gICAgfSAgXG4gIH0pO1xuXG4gIHJldHVybiB7IHBhcmFtcyB9O1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgc3RhdGUgaXMgYWN0aXZlIG5vd1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5jbHVkZXNcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaXNBY3RpdmVTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlLCBpbmNsdWRlcyA9IGZhbHNlKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBsZXQgdXJsID0gcm91dGVyLnRyYW5zaXRpb24gJiYgIXJvdXRlci50cmFuc2l0aW9uLl9fZmluaXNoZWQ/IHJvdXRlci50cmFuc2l0aW9uLnVybDogdGhpcy5nZXRVcmwoKTtcbiAgdXJsID0gdGhpcy5zcGxpdFNsYXNoZXMoJy8nICsgdXJsLnNwbGl0KCc/JylbMF0gKyAnLycpO1xuICBsZXQgdXJsUGF0dGVybiA9IHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2UodGhpcy5fX3BhcmFtUmVnZXgsICcvPyhbXi9dKiknKTtcbiAgdXJsUGF0dGVybiA9IHVybFBhdHRlcm4ucmVwbGFjZSgvXlxcXi8sICcnKS5yZXBsYWNlKC9cXCQkLywgJycpO1xuICBsZXQgc3RyID0gaW5jbHVkZXM/IHVybFBhdHRlcm46IHRoaXMuc3BsaXRTbGFzaGVzKCdeLycgKyB1cmxQYXR0ZXJuICsgJy8kJyk7XG4gIGxldCByZWdleCA9IG5ldyBSZWdFeHAoc3RyKTsgIFxuICByZXR1cm4gcmVnZXgudGVzdCh1cmwpO1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgY3VycmVudCB1cmwgaW5jbHVkZXMgYSBzdGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaW5BY3RpdmVTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gIHJldHVybiByb3V0ZXIuaXNBY3RpdmVTdGF0ZShzdGF0ZSwgdHJ1ZSk7XG59O1xuXG4vKipcbiAqIEdldCByb3V0ZSBjb21wb25lbnQgYnkgbGV2ZWxcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbGV2ZWxcbiAqL1xucm91dGVyLmdldFJvdXRlID0gZnVuY3Rpb24gKGxldmVsKSB7XG4gIGxldCBpID0gMDtcblxuICBjb25zdCBmaW5kID0gKGVsKSA9PiB7XG4gICAgbGV0IHJvdXRlID0gZWwuY2hpbGQodGhpcy5fX3JvdXRlU2VsZWN0b3IpO1xuXG4gICAgaWYgKCFyb3V0ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGkgPT0gbGV2ZWwpIHtcbiAgICAgIHJldHVybiByb3V0ZTtcbiAgICB9XG5cbiAgICBpKys7XG4gICAgcmV0dXJuIGZpbmQocm91dGUpO1xuICB9O1xuXG4gIHJldHVybiBmaW5kKEFraWxpLnJvb3QpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGZpcnN0IG1hdGNoXG4gKlxuICogQHBhcmFtIHthcnJheX0gYXJyXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gKi9cbnJvdXRlci5nZXRBcnJheVBhdHRlcm5Db250ZW50ID0gZnVuY3Rpb24gKGFyciwgdXJsKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IGFycltpXTtcbiAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0UGF0dGVybkNvbnRlbnQoc3RhdGUsIHVybCk7XG5cbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJldHVybiB7IHN0YXRlOiBzdGF0ZSwgLi4uY29udGVudCB9O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIEdldCBzdGF0ZXMgYnkgbGV2ZWxcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbGV2ZWxcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xucm91dGVyLmdldFN0YXRlc0J5TGV2ZWwgPSBmdW5jdGlvbiAobGV2ZWwpIHtcbiAgbGV0IHN0YXRlcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZXNbaV07XG5cbiAgICBpZiAoc3RhdGUubGV2ZWwgPCBsZXZlbCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHN0YXRlLmxldmVsID4gbGV2ZWwpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHN0YXRlcy5wdXNoKHN0YXRlKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZXM7XG59O1xuXG4vKipcbiAqIFJlbG9hZCB0aGUgc3RhdGVcbiAqIFxuICogQHNlZSBUcmFuc2l0aW9uLnJlbG9hZFxuICovXG5yb3V0ZXIucmVsb2FkID0gZnVuY3Rpb24oLi4uYXJncykge1xuICBpZighdGhpcy50cmFuc2l0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgZm91bmQgYW4gYWN0aXZlIHRyYW5zaXRpb24gdG8gcmVsb2FkIHRoZSBzdGF0ZScpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMudHJhbnNpdGlvbi5yZWxvYWQoLi4uYXJncyk7XG59XG5cbi8qKlxuICogSXNvbGF0ZSB0aGUgZnVuY3Rpb24gdG8gbm90IHRyaWdnZXIgcm91dGVyIGhhbmRsZXJzIGluc2lkZVxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xucm91dGVyLmlzb2xhdGUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgdGhpcy5fX2lzb2xhdGVkID0gdHJ1ZTtcbiAgbGV0IHJlcyA9IGZuKCk7XG4gIHRoaXMuX19pc29sYXRlZCA9IGZhbHNlO1xuICByZXR1cm4gcmVzO1xufVxuXG4vKipcbiAqIENoYW5nZSBzdGF0ZVxuICogXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKi9cbnJvdXRlci5jaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uIChvcHRpb25zID0ge30pIHsgICAgXG4gIGlmKHRoaXMuX19pc29sYXRlZCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuICBcbiAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKCk7XG4gIGxldCBwYXJhbXMgPSB7fTtcbiAgbGV0IHF1ZXJ5ID0gdGhpcy5nZXRVcmxRdWVyeSgpOyAgXG4gIGxldCBoYXNoID0gdGhpcy5oYXNoTW9kZT8gJyc6IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7IFxuICBsZXQgcHJldlRyYW5zaXRpb24gPSByb3V0ZXIudHJhbnNpdGlvbiB8fCBudWxsO1xuICBsZXQgdHJhbnNpdGlvbiA9IHJvdXRlci50cmFuc2l0aW9uID0gbmV3IFRyYW5zaXRpb24odXJsLCBwcmV2VHJhbnNpdGlvbik7XG4gIGxldCBsZXZlbCA9IDA7XG4gIFxuICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3N0YXRlLWNoYW5nZScsIHsgZGV0YWlsOiB0cmFuc2l0aW9uIH0pKTtcblxuICBjb25zdCBuZXh0ID0gKHN0YXRlcykgPT4geyAgICBcbiAgICBpZiAoIXN0YXRlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0QXJyYXlQYXR0ZXJuQ29udGVudChzdGF0ZXMsIHVybCk7XG5cbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICBsZXQgc3RhdGUgPSBjb250ZW50LnN0YXRlOyBcbiAgICB0cmFuc2l0aW9uLnNldFBhdGgoeyBzdGF0ZSwgY29tcG9uZW50OiByb3V0ZSB9KTsgICAgXG4gICAgcGFyYW1zID0geyAuLi5wYXJhbXMsIC4uLmNvbnRlbnQucGFyYW1zIH07XG4gICAgaGFzaCA9IGhhc2ggfHwgb3B0aW9ucy5lbXB0eUhhc2g7XG4gICAgKHsgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucyB9ID0gdGhpcy5wcmVwYXJlU3RhdGVBcmdzKHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zKSk7ICAgICBcbiAgICBoYXNoID0gaGFzaCB8fCAnJztcbiAgICBsZXQgcmVhbFVybCA9IHRoaXMuY3JlYXRlU3RhdGVVcmwoc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMsIGZhbHNlKTsgXG4gICAgdGhpcy5pc29sYXRlKCgpID0+IHRoaXMucmVwbGFjZVVybChyZWFsVXJsKSk7IFxuICAgIGxldCByb3V0ZSA9IHN0YXRlLmFic3RyYWN0PyBudWxsOiB0aGlzLmdldFJvdXRlKGxldmVsKTtcbiAgICBcbiAgICBpZiAoIXJvdXRlICYmICFzdGF0ZS5hYnN0cmFjdCkgeyAgICAgIFxuICAgICAgdGhyb3cgbmV3IEVycm9yIChgTm90IGZvdW5kIHJvdXRlIGNvbXBvbmVudCBmb3Igc3RhdGUgXCIke3N0YXRlLm5hbWV9XCJgKTtcbiAgICB9ICAgIFxuXG4gICAgdHJhbnNpdGlvbi5wYXRoLnBhcmFtcyA9IHBhcmFtcztcbiAgICB0cmFuc2l0aW9uLnBhdGgucXVlcnkgPSBxdWVyeTtcbiAgICB0cmFuc2l0aW9uLnBhdGguaGFzaCA9IGhhc2g7XG4gICAgdHJhbnNpdGlvbi5wYXRoLnVybCA9IHJlYWxVcmw7XG4gICAgdHJhbnNpdGlvbi5wYXRoLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICFzdGF0ZS5hYnN0cmFjdCAmJiBsZXZlbCsrO1xuICAgIGxldCBpc0RpZmZlcmVudCA9IHRydWU7XG5cbiAgICBpZihyZWFsVXJsICE9IHVybCkge1xuICAgICAgaXNEaWZmZXJlbnQgPSB0cmFuc2l0aW9uLmlzUm91dGVDaGFuZ2VkKHRyYW5zaXRpb24ucGF0aCk7XG4gICAgfVxuICAgICAgIFxuICAgIGxldCBsb2FkID0gaXNEaWZmZXJlbnQgJiYgb3B0aW9ucy5yZWxvYWQgIT09IGZhbHNlO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShsb2FkPyBzdGF0ZS5oYW5kbGVyKHRyYW5zaXRpb24pOiB0cmFuc2l0aW9uLnBhdGguZGF0YSkudGhlbigoZGF0YSkgPT4geyAgICAgICBcbiAgICAgIHRyYW5zaXRpb24ucGF0aC5kYXRhID0gZGF0YTtcbiAgICAgIHN0YXRlLnRpdGxlICYmIChkb2N1bWVudC50aXRsZSA9IHR5cGVvZiBzdGF0ZS50aXRsZSA9PSAnZnVuY3Rpb24nPyBzdGF0ZS50aXRsZSh0cmFuc2l0aW9uKTogc3RhdGUudGl0bGUpO1xuXG4gICAgICBpZiAodHJhbnNpdGlvbi5fX2NhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZS5hYnN0cmFjdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByZXZSb3V0ZSA9IHRyYW5zaXRpb24ucHJldmlvdXMgJiYgdHJhbnNpdGlvbi5wcmV2aW91cy5nZXRSb3V0ZShzdGF0ZSk7XG4gICAgICAocHJldlJvdXRlICYmICFwcmV2Um91dGUubG9hZGVkKSAmJiAobG9hZCA9IHRydWUpO1xuICAgICAgcmV0dXJuIHJvdXRlLnNldFRyYW5zaXRpb24odHJhbnNpdGlvbiwgbG9hZCkudGhlbigoKSA9PiB0cmFuc2l0aW9uLnBhdGgubG9hZGVkID0gdHJ1ZSk7XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICByZXR1cm4gbmV4dChzdGF0ZS5jaGlsZHJlbik7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIG5leHQodGhpcy5nZXRTdGF0ZXNCeUxldmVsKDApKS50aGVuKCgpID0+IHtcbiAgICBpZiAoIXRyYW5zaXRpb24ucm91dGVzLmxlbmd0aCkge1xuICAgICAgaWYgKHRoaXMuX19yZWRpcmVjdHMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBXcm9uZyByb3V0ZXIgZGVmYXVsdCB1cmwgXCIke3RoaXMuZGVmYXVsdFVybH1cImApO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5kZWZhdWx0VXJsKSB7XG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRVcmwgPT0gdGhpcy5nZXRVcmwoKSkge1xuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgYW55IHJvdXRlc2ApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc29sYXRlKCgpID0+IHRoaXMucmVwbGFjZVVybCh0aGlzLmRlZmF1bHRVcmwpKTsgICAgICAgICAgXG4gICAgICAgIHRoaXMuX19yZWRpcmVjdHMrKztcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlU3RhdGUoKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS53YXJuKGBOb3QgZm91bmQgYSBkZWZhdWx0IHJvdXRlLiBZb3UgY2FuIHBhc3MgaXQgaW4gXCJyb3V0ZXIuaW5pdChkZWZhdWx0VXJsKVwiIGZ1bmN0aW9uYCk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmICghb3B0aW9ucy5zYXZlU2Nyb2xsUG9zaXRpb24gJiYgKCF0cmFuc2l0aW9uLnBhdGggfHwgIXRyYW5zaXRpb24ucGF0aC5oYXNoKSkge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIH1cblxuICAgIHRoaXMuX19yZWRpcmVjdHMgPSAwO1xuICAgIHRyYW5zaXRpb24uZmluaXNoKCk7XG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzdGF0ZS1jaGFuZ2VkJywgeyBkZXRhaWw6IHRyYW5zaXRpb24gfSkpO1xuICAgIHJldHVybiB0cmFuc2l0aW9uO1xuICB9KTtcbn07XG5cbi8qKlxuICogRGVpbml0IHJvdXRlclxuICovXG5yb3V0ZXIuZGVpbml0ID0gZnVuY3Rpb24gKCkge1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIpO1xuICByb3V0ZXIuc2V0RGVmYXVsdHMoKTtcbn07XG5cbnJvdXRlci5UcmFuc2l0aW9uID0gVHJhbnNpdGlvbjtcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbnJvdXRlci5zZXREZWZhdWx0cygpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2aWNlcy9yb3V0ZXIuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgY29uZGl0aW9uYWwgc3RhdGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfY29uZGl0aW9uYWxfc3RhdGVtZW50c31cbiAqIFxuICogQHRhZyBpZlxuICogQHNlbGVjdG9yIGlmW2lzXVxuICogQGF0dHIge2Jvb2xlYW59IGlzIC0gc2hvdyB0aGUgZWxlbWVudCBjb250ZW50IG9yIG5vdFxuICogQGF0dHIge2Jvb2xlYW59IHJlY3JlYXRlIC0gZGVsZXRlIHRoZSBjb250ZW50IGFuZCByZWNyZWF0ZSBvciBqdXN0IHNob3cvaGlkZSBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWYgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgdHJhbnNwYXJlbnQgPSB0cnVlOyBcbiAgc3RhdGljIG1hdGNoZXMgPSAnW2lzXSc7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsncmVjcmVhdGUnXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaWYnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2Vsc2UtaWYnLCB0aGlzLkVsc2VJZik7XG4gICAgQWtpbGkuY29tcG9uZW50KCdlbHNlJywgdGhpcy5FbHNlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5zdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5yZWNyZWF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuaXNDb21waWxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGlzcGxheSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5lbCkuZGlzcGxheTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cigncmVjcmVhdGUnLCB0aGlzLnNldFJlY3JlYXRpb24pO1xuICAgIHJldHVybiB0aGlzLmF0dHIoJ2lzJywgdmFsID0+ICh0aGlzLnN0YXRlID0gISF2YWwsIHRoaXMuc2V0U3RhdGUoKSkpO1xuICB9XG5cbiAgc2V0QWN0aXZpdHkoYWN0aXZlKSB7XG4gICAgdGhpcy5hY3RpdmUgPSBhY3RpdmU7XG4gIH1cblxuICBzZXRSZWNyZWF0aW9uKHJlY3JlYXRlKSB7XG4gICAgdGhpcy5yZWNyZWF0ZSA9IHJlY3JlYXRlO1xuICB9XG5cbiAgc2V0U3RhdGUoKSB7XG4gICAgbGV0IHJlcyA9IHRoaXMuY29tcGlsYXRpb24oKTtcbiAgICBsZXQgbmV4dCA9IHRoaXMuZWwubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGxldCByZXN1bHQ7XG5cbiAgICBpZiAoIW5leHQgfHwgIW5leHQubWF0Y2hlcygnZWxzZS1pZixlbHNlJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXh0Ll9fYWtpbGkuc2V0QWN0aXZpdHkodGhpcy5hY3RpdmUgfHwgdGhpcy5zdGF0ZSk7XG4gICAgbmV4dC5fX2FraWxpLnNldFJlY3JlYXRpb24odGhpcy5yZWNyZWF0ZSk7XG4gICAgcmVzdWx0ID0gbmV4dC5fX2FraWxpLnNldFN0YXRlKCk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMpLnRoZW4oKCkgPT4gIHJlc3VsdCk7XG4gIH1cblxuICBjb21waWxhdGlvbigpIHtcbiAgICBsZXQgcmVzO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUgJiYgIXRoaXMuYWN0aXZlKSB7XG4gICAgICBpZiAodGhpcy5yZWNyZWF0ZSB8fCAhdGhpcy5pc0NvbXBpbGVkKSB7XG4gICAgICAgIHJlcyA9IHRoaXMuY29tcGlsZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgdGhpcy5kaXNwbGF5LCAnaW1wb3J0YW50Jyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHRoaXMucmVjcmVhdGUpIHtcbiAgICAgICAgdGhpcy5lbXB0eSgpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIXRoaXMuaXNDb21waWxlZCkge1xuICAgICAgICByZXMgPSB0aGlzLmNvbXBpbGUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbC5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJywgJ2ltcG9ydGFudCcpO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBjb21waWxlKCkge1xuICAgIGxldCByZXM7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7ICAgIFxuICAgIHJlcyA9IEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgdGhpcy5pc0NvbXBpbGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG59XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBjb25kaXRpb25hbCBzdGF0ZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jb25kaXRpb25hbF9zdGF0ZW1lbnRzfVxuICogXG4gKiBAdGFnIGVsc2UtaWZcbiAqIEBzZWxlY3RvciBlbHNlLWlmW2lzXVxuICogQGF0dHIge2Jvb2xlYW59IGlzIEBzZWUgSWZcbiAqL1xuZXhwb3J0IGNsYXNzIEVsc2VJZiBleHRlbmRzIElmIHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBjb25kaXRpb25hbCBzdGF0ZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jb25kaXRpb25hbF9zdGF0ZW1lbnRzfVxuICogXG4gKiBAdGFnIGVsc2VcbiAqL1xuZXhwb3J0IGNsYXNzIEVsc2UgZXh0ZW5kcyBFbHNlSWYge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdpcycsICd0cnVlJyk7XG4gIH1cbn1cblxuSWYuRWxzZUlmID0gRWxzZUlmO1xuSWYuRWxzZSA9IEVsc2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaWYuanMiLCJpbXBvcnQgRm9yLCB7IExvb3AgfSBmcm9tICcuL2Zvci5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIHNlbGVjdC5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3Nfc2VsZWN0fVxuICogXG4gKiBAdGFnIHNlbGVjdCAgXG4gKiBAYXR0ciB7c3RyaW5nfSB2YWx1ZSAtIGFjdHVhbCB2YWx1ZVxuICogQGF0dHIgW2luXSBAc2VlIEZvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyBGb3Ige1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ211bHRpcGxlJ10uY29uY2F0KEZvci5ib29sZWFuQXR0cmlidXRlcyk7XG4gIHN0YXRpYyBldmVudHMgPSBbJ2NoYW5nZSddLmNvbmNhdChGb3IuZXZlbnRzKTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnc2VsZWN0JywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdvcHRpb24nLCB0aGlzLk9wdGlvbik7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLml0ZXJhdG9yVGFnTmFtZSA9ICdvcHRpb24nO1xuICAgIHRoaXMuaXNNdWx0aXBsZSA9IGZhbHNlO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7IFxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gdGhpcy5lbC5jb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCkpO1xuICAgIGxldCByZXMgPSBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAgIFxuICAgIHRoaXMuYXR0cignbXVsdGlwbGUnLCB0aGlzLnNldE11bHRpcGxlKTtcbiAgICB0aGlzLmF0dHIoJ2NvbnRlbnQnLCB0aGlzLnNldENvbnRlbnQpO1xuICAgIHRoaXMuYXR0cignaW4nLCB0aGlzLmRyYXdTZWxlY3QpO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBzZXRNdWx0aXBsZSh2YWx1ZSkge1xuICAgIHRoaXMuaXNNdWx0aXBsZSA9IHZhbHVlO1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5mb3JtYXRWYWx1ZSh1dGlscy5jb3B5KHRoaXMuZWwuY29udGVudCkpKTtcbiAgfVxuXG4gIHNldENvbnRlbnQodmFsdWUpIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUodmFsdWUpKTtcbiAgfVxuXG4gIGRyYXdTZWxlY3QoKSB7XG4gICAgbGV0IHNlbGVjdGVkID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV0uX19ha2lsaTtcbiAgICAgIGxldCBzZWxlY3Rpb24gPSBvcHRpb24uYXR0cnMuc2VsZWN0ZWQ7XG5cbiAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgc2VsZWN0ZWQucHVzaChvcHRpb24uZWwudmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBvcHRpb24uZWwuc2VsZWN0ZWQgPSBzZWxlY3Rpb247XG4gICAgfVxuXG4gICAgaWYgKCFzZWxlY3RlZC5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVkZWZpbmUoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUoc2VsZWN0ZWQpKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVJdGVyYXRvckVsZW1lbnQoKSB7XG4gICAgbGV0IGVsID0gc3VwZXIuY3JlYXRlSXRlcmF0b3JFbGVtZW50KCk7XG5cbiAgICBpZiAoIWVsLmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRoaXMuaHRtbC50cmltKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgaWYgKCF0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsLnZhbHVlO1xuICAgIH1cblxuICAgIGxldCBjb250ZW50ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgIGlmIChvcHRpb24uc2VsZWN0ZWQpIHtcbiAgICAgICAgY29udGVudC5wdXNoKG9wdGlvbi52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBmb3JtYXRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCk/IFt2YWx1ZV06IFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLmxlbmd0aD8gdmFsdWVbMF06ICcnO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmVkZWZpbmUoKSB7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmdldENvbnRlbnQoKSk7XG4gIH1cblxuICBjaGFuZ2VWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh1dGlscy5jb21wYXJlKHRoaXMuZWwuY29udGVudCwgdmFsdWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB0aGlzLmVsLnZhbHVlID0gdmFsdWVbdmFsdWUubGVuZ3RoIC0gMV07XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldO1xuXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHZhbHVlLmluZGV4T2Yob3B0aW9uLnZhbHVlKSAhPSAtMTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmVsLnZhbHVlID0gdmFsdWU7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldO1xuXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IG9wdGlvbi52YWx1ZSA9PSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmVsLmNvbnRlbnQgPSB2YWx1ZTtcbiAgICB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9wdGlvbiBleHRlbmRzIExvb3Age1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ3NlbGVjdGVkJ107XG5cbiAgX19nZXRQYXJzZWRFeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgICByZXR1cm4gdXRpbHMuZGVjb2RlSHRtbEVudGl0aWVzKGV4cHJlc3Npb24pO1xuICB9XG5cbiAgY2hhbmdlZFNlbGVjdGVkKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTZWxlY3RlZCh2YWx1ZSk7XG4gIH1cblxuICBzZXRTZWxlY3RlZCh2YWx1ZSkge1xuICAgIHRoaXMuZWwuc2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICB0aGlzLmZvci5yZWRlZmluZSgpO1xuICB9XG59XG5cblNlbGVjdC5PcHRpb24gPSBPcHRpb247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvc2VsZWN0LmpzIiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCBpbnB1dCBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW5wdXR9XG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jaGVja2JveF9hbmRfcmFkaW99XG4gKiBcbiAqIEB0YWcgaW5wdXRcbiAqIEBhdHRyIEBzZWUgVGV4dFxuICogQG1lc3NhZ2UgQHNlZSBUZXh0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnY2hlY2tlZCcsICdtdWx0aXBsZSddLmNvbmNhdChUZXh0LmJvb2xlYW5BdHRyaWJ1dGVzKTtcbiAgc3RhdGljIGV2ZW50cyA9IFsnY2hhbmdlJ10uY29uY2F0KFRleHQuZXZlbnRzKTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaW5wdXQnLCB0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXNDaGVja2JveCA9IHRoaXMuZWwudHlwZSA9PSAnY2hlY2tib3gnO1xuICAgIHRoaXMuaXNSYWRpbyA9IHRoaXMuZWwudHlwZSA9PSAncmFkaW8nOyAgICBcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgICh0aGlzLmlzQ2hlY2tib3ggfHwgdGhpcy5pc1JhZGlvKSAmJiB0aGlzLmF0dHIoJ2NoZWNrZWQnLCB0aGlzLnNldENoZWNrZWQpO1xuICAgIHJldHVybiBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9ICBcblxuICBzZXRDaGVja2VkKHZhbHVlKSB7XG4gICAgdmFsdWUgPSAhIXZhbHVlO1xuICAgIFxuICAgIGlmICh0aGlzLmVsLmNoZWNrZWQgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5lbC5jaGVja2VkID0gdmFsdWU7XG4gICAgdGhpcy5fX2lzQ29tcGlsZWQgJiYgdGhpcy5hdHRycy5vbkNoYW5nZS5kaXNwYXRjaChFdmVudCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgIHRoaXMuaXNSYWRpbyAmJiB0aGlzLmNoYW5nZVJhZGlvKCk7XG4gIH1cblxuICBzZXRWYWx1ZSgpIHtcbiAgICBzdXBlci5zZXRWYWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuaXNSYWRpbyAmJiB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cblxuICBjaGFuZ2VSYWRpbygpIHtcbiAgICBsZXQgbmFtZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgbGV0IHNlbGVjdG9yID0gYGlucHV0W3R5cGU9cmFkaW9dW25hbWU9JyR7bmFtZX0nXTpub3QoW3Njb3BlPScke3RoaXMuc2NvcGUuX19uYW1lfSddKWA7XG4gICAgbGV0IGNoaWxkcmVuID0gQWtpbGkucm9vdC5jaGlsZHJlbihzZWxlY3Rvcik7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJhZGlvID0gY2hpbGRyZW5baV07XG4gICAgICByYWRpby5zZXRDaGVja2VkKHJhZGlvLmVsLmNoZWNrZWQpO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2lucHV0LmpzIiwiaW1wb3J0IEZvciwgeyBMb29wIH0gZnJvbSAnLi9mb3IuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIHJhZGlvIGdyb3VwLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19yYWRpb19ncm91cH1cbiAqIFxuICogQHRhZyByYWRpb1xuICogQHNlbGVjdG9yIHJhZGlvW25hbWVdXG4gKiBAYXR0ciB7c3RyaW5nfSBuYW1lIC0gbmFtZSBvZiB0aGUgZ3JvdXBcbiAqIEBhdHRyIHtzdHJpbmd8bnVsbH0gdmFsdWUgLSBzZWxlY3RlZCB2YWx1ZVxuICogQGF0dHIgW2luXSBAc2VlIEZvclxuICogQG1lc3NhZ2Uge3N0cmluZ30gcmFkaW8gLSBzZW50IG9uIHZhbHVlIGNoYW5nZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWRpbyBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tuYW1lXSc7XG4gIHN0YXRpYyBldmVudHMgPSBbJ3JhZGlvJ10uY29uY2F0KEZvci5ldmVudHMpO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdyYWRpbycsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgncmFkaW8tYnV0dG9uJywgdGhpcy5SYWRpb0J1dHRvbik7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLml0ZXJhYmxlID0gdGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ2luJyk7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIGlmKHRoaXMuaXRlcmFibGUpIHtcbiAgICAgIHJldHVybiBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBBa2lsaS5uZXh0VGljaygoKSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuZ2V0UmFkaW9WYWx1ZSgpO1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5wcmV2VmFsdWUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByZXZWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmF0dHJzLm9uUmFkaW8udHJpZ2dlcih2YWx1ZSwgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpZih0aGlzLml0ZXJhYmxlKSB7XG4gICAgICByZXR1cm4gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICByZXNvbHZlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ2luJywgdGhpcy5zZXROYW1lcywgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7ICAgXG4gICAgdGhpcy5hdHRyKCd2YWx1ZScsIHRoaXMuc2V0VmFsdWUpOyBcbiAgICB0aGlzLmF0dHIoJ25hbWUnLCB0aGlzLnNldE5hbWVzKTtcblxuICAgIGlmKHRoaXMuaXRlcmFibGUpIHtcbiAgICAgIHJldHVybiBzdXBlci5yZXNvbHZlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIHNldE5hbWVzKG5hbWUpIHtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNoaWxkcmVuW2ldLmVsLnNldEF0dHJpYnV0ZSgnbmFtZScsIG5hbWUgfHwgdGhpcy5hdHRycy5uYW1lKTtcbiAgICB9XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5wcmV2VmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcHJldiA9IHRoaXMucHJldlZhbHVlO1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oJ2lucHV0W3R5cGU9cmFkaW9dJyk7XG4gICAgbGV0IGlzVHJ1ZSA9IGZhbHNlO1xuICAgIHRoaXMucHJldlZhbHVlID0gdmFsdWU7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJhZGlvID0gY2hpbGRyZW5baV07XG4gICAgICBsZXQgaXNTZWxlY3RlZCA9IHJhZGlvLmVsLnZhbHVlID09PSB2YWx1ZTtcblxuICAgICAgaXNTZWxlY3RlZCAmJiAoaXNUcnVlID0gdHJ1ZSk7XG4gICAgICByYWRpby5zZXRDaGVja2VkKGlzU2VsZWN0ZWQpO1xuICAgIH1cblxuICAgIGlmICghaXNUcnVlKSB7XG4gICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgaWYgKHByZXYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMucHJldlZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hdHRycy5vblJhZGlvLnRyaWdnZXIodmFsdWUsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgfVxuXG4gIGdldFJhZGlvVmFsdWUoKSB7XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbignaW5wdXRbdHlwZT1yYWRpb10nKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcmFkaW8gPSBjaGlsZHJlbltpXTtcblxuICAgICAgaWYgKHJhZGlvLmVsLmNoZWNrZWQpIHtcbiAgICAgICAgcmV0dXJuIHJhZGlvLmVsLnZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCByYWRpbyBncm91cCBpdGVtLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19yYWRpb19ncm91cH1cbiAqIFxuICogQHRhZyByYWRpby1idXR0b25cbiAqIEBhdHRyIHtzdHJpbmd9IHZhbHVlIC0gdmFsdWVcbiAqL1xuZXhwb3J0IGNsYXNzIFJhZGlvQnV0dG9uIGV4dGVuZHMgTG9vcCB7XG4gIHN0YXRpYyB0ZW1wbGF0ZSA9ICc8bGFiZWw+PGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiJHt0aGlzLnZhbHVlfVwiLz4ke3RoaXMuX19jb250ZW50fTwvbGFiZWw+JztcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ3ZhbHVlJywgJ3ZhbHVlJyk7XG4gICAgcmV0dXJuIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cbn1cblxuUmFkaW8uUmFkaW9CdXR0b24gPSBSYWRpb0J1dHRvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9yYWRpby5qcyIsImltcG9ydCBUZXh0IGZyb20gJy4vdGV4dC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggdGV4dGFyZWEuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX3RleHRhcmVhfVxuICogXG4gKiBAdGFnIHRleHRhcmVhXG4gKiBAYXR0ciBAc2VlIFRleHRcbiAqIEBtZXNzYWdlIEBzZWUgVGV4dFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0YXJlYSBleHRlbmRzIFRleHQge1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgndGV4dGFyZWEnLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RleHRhcmVhLmpzIiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBlbGVtZW50cyB3aXRoIGNvbnRlbnRlZGl0YWJsZSBhdHRyaWJ1dGUuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NvbnRlbnRlZGl0YWJsZX1cbiAqIFxuICogQHRhZyBjb250ZW50XG4gKiBAc2VsZWN0b3IgY29udGVudCxbY29udGVudGVkaXRhYmxlXVxuICogQGF0dHIgQHNlZSBUZXh0XG4gKiBAYXR0ciB7Ym9vbGVhbn0gW2VkaXRhYmxlXSAtIGVkaXRhYmxlIG9yIG5vdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50IGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdjb250ZW50JywgdGhpcyk7XG4gICAgQWtpbGkuYWxpYXMoJ1tjb250ZW50ZWRpdGFibGVdJywgJ2NvbnRlbnQnKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIGlmICh0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnZWRpdGFibGUnKSkge1xuICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdlZGl0YWJsZScpKTtcbiAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKCdlZGl0YWJsZScpO1xuICAgIH1cblxuICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpLmRpc3BsYXkgPT0gJ2lubGluZScpIHtcbiAgICAgIHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuXG4gICAgdGhpcy52YWx1ZUtleSA9ICdpbm5lckhUTUwnO1xuICB9XG5cbiAgc2V0RWxlbWVudEZvY3VzKCkge1xuICAgIGxldCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgbGV0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcblxuICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyh0aGlzLmVsKTtcbiAgICByYW5nZS5jb2xsYXBzZShmYWxzZSk7XG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gICAgdGhpcy5lbC5mb2N1cygpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvY29udGVudC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi9zZXJ2aWNlcy9yZXF1ZXN0LmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gaW5jbHVkZSB0ZW1wbGF0ZXMgYnkgdXJsLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19odG1sX3RlbXBsYXRlc31cbiAqIFxuICogQHRhZyBpbmNsdWRlXG4gKiBAc2VsZWN0b3IgaW5jbHVkZVt1cmxdXG4gKiBAYXR0ciB7c3RyaW5nfSB1cmwgLSB0ZW1wbGF0ZSBwYXRoXG4gKiBAYXR0ciB7bnVtYmVyfGZ1bmN0aW9ufGJvb2xlYW59IFtjYWNoZV0gLSByZXF1ZXN0IGNhY2hlIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvcmVxdWVzdHMjZG9jc19jYWNoZX1cbiAqIEBtZXNzYWdlIHt2b2lkfSBsb2FkIC0gc2VudCBvbiB0aGUgdGVtcGxhdGUgbG9hZFxuICogQG1lc3NhZ2Uge0Vycm9yfSBlcnJvciAtIHNlbnQgb24gZXJyb3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5jbHVkZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyB0cmFuc3BhcmVudCA9IHRydWU7IFxuICBzdGF0aWMgbWF0Y2hlcyA9ICdbdXJsXSc7XG4gIHN0YXRpYyBldmVudHMgPSBbJ2xvYWQnLCAnZXJyb3InXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaW5jbHVkZScsIHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5odG1sID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRyKCdjYWNoZScsIHRoaXMuc2V0Q2FjaGUpO1xuICAgIHJldHVybiB0aGlzLmF0dHIoJ3VybCcsIHRoaXMuc2V0VGVtcGxhdGUpO1xuICB9XG5cbiAgc2V0Q2FjaGUoY2FjaGUpIHtcbiAgICB0aGlzLmNhY2hlID0gY2FjaGU7XG4gIH1cblxuICBzZXRUZW1wbGF0ZSh1cmwpIHtcbiAgICB0aGlzLmNvbm5lY3Rpb24gJiYgdGhpcy5jb25uZWN0aW9uLmFib3J0KCk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQodXJsLCB7XG4gICAgICBjYWNoZTogdGhpcy5jYWNoZSxcbiAgICAgIG9uU3RhcnQ6ICh4aHIpID0+IHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0geGhyO1xuICAgICAgfVxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgICAgIHRoaXMuZW1wdHkoKTtcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5odG1sO1xuICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgcmVzLmRhdGEpO1xuXG4gICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5hdHRycy5vbkxvYWQudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICB9KTtcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICB0aGlzLmF0dHJzLm9uRXJyb3IudHJpZ2dlcihlcnIsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pbmNsdWRlLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgaWZyYW1lcy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIGlmcmFtZVxuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWZyYW1lIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaWZyYW1lJywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pZnJhbWUuanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBpbWFnZXMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBpbWdcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaW1nJywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pbWFnZS5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGVtYmVkIGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgZW1iZWRcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtYmVkIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnZW1iZWQnLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2VtYmVkLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgYXVkaW8gZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBhdWRpb1xuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW8gZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdhdWRpbycsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYXVkaW8uanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciB2aWRlbyBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIHZpZGVvXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlbyBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3ZpZGVvJywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy92aWRlby5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIHRyYWNrIGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgdHJhY2tcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYWNrIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgndHJhY2snLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RyYWNrLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3Igc291cmNlIGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgc291cmNlXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VyY2UgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdzb3VyY2UnLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3NvdXJjZS5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIG9iamVjdCBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIG9iamVjdFxuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0cyBleHRlbmRzIFVybCB7ICBcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy51cmxBdHRyaWJ1dGUgPSAnZGF0YSc7XG4gIH1cblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnb2JqZWN0JywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9vYmplY3QuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4uL3NlcnZpY2VzL3JvdXRlci5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgbGlua3MuXG4gKiBJdCB3b3JrcyB3aXRoIHJvdXRlciB0b28uIFxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19saW5rc31cbiAqIFxuICogQHRhZyBhXG4gKiBAc2VsZWN0b3IgYVtzdGF0ZV06bm90KFt1cmxdKSxhW3VybF06bm90KFtzdGF0ZV0pXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXSAtIHVybCB0byBnbyBvbiBjbGlja1xuICogQGF0dHIge3N0cmluZ30gW3N0YXRlXSAtIHN0YXRlIG9mIHJvdXRlciB0byBnbyBvbiBjbGljayB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmd9XG4gKiBAYXR0ciB7b2JqZWN0fSBbcGFyYW1zXSAtIHBhcmFtcyBmb3IgdGhlIHN0YXRlIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3N0YXRlX3BhcmFtc31cbiAqIEBhdHRyIHtvYmplY3R9IFtxdWVyeV0gLSBxdWVyeSBmb3IgdGhlIHN0YXRlIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3N0YXRlX3F1ZXJ5fVxuICogQGF0dHIge3N0cmluZ30gW2hhc2hdIC0gaGFzaCBmb3IgdGhlIHN0YXRlIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3N0YXRlX2hhc2h9XG4gKiBAYXR0ciB7b2JqZWN0fSBbb3B0aW9uc10gLSBvcHRpb25zIGZvciB0aGUgc3RhdGUge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nI2RvY3Nfcm91dGVyLmxvY2F0aW9ufVxuICogQHNjb3BlIHtib29sZWFufSBpc0FjdGl2ZVN0YXRlIC0gdGhlIHN0YXRlIGlzIGFjdGl2ZSBvciBub3QgXG4gKiBAc2NvcGUge2Jvb2xlYW59IGluQWN0aXZlU3RhdGUgLSB0aGUgc3RhdGUgaXMgcGFydCBvZiB0aGUgYWN0aXZlIHN0YXRlIG9yIG5vdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW3N0YXRlXTpub3QoW3VybF0pLFt1cmxdOm5vdChbc3RhdGVdKSc7XG4gIHN0YXRpYyBjb250cm9sQXR0cmlidXRlcyA9IHRydWU7XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2EnLCB0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuc3RhdGUgPSBudWxsO1xuICAgIHRoaXMucGFyYW1zID0ge307XG4gICAgdGhpcy5xdWVyeSA9IHt9O1xuICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuICAgIHRoaXMuaXNVcmwgPSB0aGlzLmVsLmhhc0F0dHJpYnV0ZSgndXJsJyk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKHRoaXMuaXNVcmwpIHtcbiAgICAgICAgcm91dGVyLmxvY2F0aW9uKHRoaXMuYXR0cnMudXJsLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJvdXRlci5zdGF0ZSh0aGlzLnN0YXRlLm5hbWUsIHRoaXMucGFyYW1zLCB0aGlzLnF1ZXJ5LCB0aGlzLmhhc2gsICB0aGlzLm9wdGlvbnMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZCA9ICgpID0+IHRoaXMuc3RhdGUgJiYgdGhpcy5zZXRBY3Rpdml0eSgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzdGF0ZS1jaGFuZ2VkJywgdGhpcy5vblN0YXRlQ2hhbmdlZCk7XG5cbiAgICB0aGlzLmF0dHIoJ3N0YXRlJywgdGhpcy5zZXRTdGF0ZSk7XG4gICAgdGhpcy5hdHRyKCdwYXJhbXMnLCB0aGlzLnNldFBhcmFtcyk7XG4gICAgdGhpcy5hdHRyKCdxdWVyeScsIHRoaXMuc2V0UXVlcnkpO1xuICAgIHRoaXMuYXR0cignaGFzaCcsIHRoaXMuc2V0SGFzaCk7XG4gICAgdGhpcy5hdHRyKCdvcHRpb25zJywgdGhpcy5zZXRPcHRpb25zKTtcbiAgICB0aGlzLmF0dHIoJ3VybCcsIHRoaXMuc2V0VXJsKTtcbiAgICB0aGlzLmF0dHIoJ3N0YXRlJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cigncGFyYW1zJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cigncXVlcnknLCB0aGlzLnJlc2V0SHJlZiwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5hdHRyKCdoYXNoJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cigndXJsJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMucmVzZXRIcmVmKCk7XG4gIH1cblxuICByZW1vdmVkKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzdGF0ZS1jaGFuZ2VkJywgdGhpcy5vblN0YXRlQ2hhbmdlZCk7XG4gIH1cblxuICBzZXRVcmwodXJsKSB7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gIH1cblxuICBzZXRTdGF0ZShuYW1lKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0U3RhdGUobmFtZSk7XG4gICAgdGhpcy5zZXRBY3Rpdml0eSgpO1xuICB9XG5cbiAgc2V0QWN0aXZpdHkoKSB7XG4gICAgdGhpcy5zY29wZS5pc0FjdGl2ZVN0YXRlID0gcm91dGVyLmlzQWN0aXZlU3RhdGUodGhpcy5zdGF0ZSk7XG4gICAgdGhpcy5zY29wZS5pbkFjdGl2ZVN0YXRlID0gcm91dGVyLmluQWN0aXZlU3RhdGUodGhpcy5zdGF0ZSk7XG4gIH1cblxuICBzZXRQYXJhbXMocGFyYW1zKSB7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMgIT0gJ29iamVjdCcgfHwgIXBhcmFtcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgcGFyYW1zIG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gIH1cblxuICBzZXRRdWVyeShxdWVyeSkge1xuICAgIGlmICh0eXBlb2YgcXVlcnkgIT0gJ29iamVjdCcgfHwgIXF1ZXJ5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBxdWVyeSBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgfVxuXG4gIHNldEhhc2goaGFzaCkge1xuICAgIGlmICh0eXBlb2YgaGFzaCAhPSAnc3RyaW5nJyAmJiBoYXNoICE9PSB1bmRlZmluZWQgJiYgaGFzaCAhPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgaGFzaCBtdXN0IGJlIGEgc3RyaW5nfG51bGxgKTtcbiAgICB9XG5cbiAgICB0aGlzLmhhc2ggPSBoYXNoO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zICE9ICdvYmplY3QnIHx8ICFvcHRpb25zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBvcHRpb25zIG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIGdldFN0YXRlKG5hbWUpIHtcbiAgICBsZXQgc3RhdGUgPSByb3V0ZXIuZ2V0U3RhdGUobmFtZSk7XG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCByb3V0ZXIgc3RhdGUgd2l0aCBuYW1lIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgcmVzZXRIcmVmKCkge1xuICAgIGlmICh0aGlzLnVybCkge1xuICAgICAgdGhpcy5hdHRycy5ocmVmID0gdGhpcy51cmw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5hdHRycy5ocmVmID0gcm91dGVyLmNyZWF0ZVN0YXRlVXJsKHRoaXMuc3RhdGUsIHRoaXMucGFyYW1zLCB0aGlzLnF1ZXJ5LCB0aGlzLmhhc2gsIHRoaXMub3B0aW9ucyk7XG4gICAgfVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYS5qcyJdLCJzb3VyY2VSb290IjoiIn0=