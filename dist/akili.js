/*!
 * Akili is a javascript framework
 * 
 * const Akili = makeItEasy(js + html);
 * 
 * @version 0.5.1
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
exports.services = exports.components = undefined;

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

var Akili = {}; /**
                 * Javascript framework
                 *
                 * const Akili = makeItEasy(js + html);
                 *
                 * @author Alexandr Balasyan <mywebstreet@gmail.com>
                 * @link http://akilijs.com
                 */

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

Akili.htmlBooleanAttributes = ['disabled', 'contenteditable', 'hidden'];

Akili.components = {};
Akili.decorators = {};
Akili.services = {};

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
 * @param {HTMLElement} el
 * @param {boolean} [tree=true] - return array of the parents if true, closest parent if false
 * @returns {Array|HTMLElement|null}
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
 * @param {HTMLElement} el
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
  var _this = this;

  return _utils2.default.createRandomString(16, function (str) {
    return !!_this.__scopes[str];
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
Akili.isolate = function (fn, component) {
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
    var data = prop.component.__getBind(prop.keys);

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
Akili.unevaluated = function (fn) {
  var evaluation = this.__evaluation;
  var res = void 0;
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
Akili.unisolated = function (fn) {
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
 * @param {HTMLElement} el
 * @param {object} [options={}]
 * @returns {*}
 */
Akili.initialize = function (el) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var recompile = options.recompile;
  var component = el.__akili;

  if (component) {
    if (recompile) {
      component.__recompile();
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

    for (var selector in this.__aliases) {
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
Akili.compile = function (root) {
  var _this2 = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { recompile: false };

  var elements = [];

  var nestedInitializing = function nestedInitializing(el) {
    var component = _this2.initialize(el, options);
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
  delete this.__components[selector];
};

/**
 * Isolate array prototype functions
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

      return Akili.unevaluated(function () {
        if (!_this4.__isProxy) {
          return Akili.unevaluated(function () {
            return old.apply(_this4, _arguments);
          });
        }

        return Akili.isolate(function () {
          return old.apply(_this4, _arguments);
        }, _this4);
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
      var _this5 = this,
          _arguments2 = arguments;

      return Akili.isolate(function () {
        return fn.apply(_this5, _arguments2);
      });
    };

    this.__akiliListeners[name].push({
      link: fn,
      fn: args[1]
    });

    return Akili.__window.Element.prototype.addEventListener.apply(this, args);
  };

  Element.prototype.removeEventListener = function (name, fn) {
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
 * Isolate the function
 *
 * @param {function} fn
 * @param {object} [context]
 * @returns {function}
 */
Akili.isolateFunction = function (fn) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (fn.__akili) {
    return fn;
  }

  var oFn = function oFn() {
    var _arguments4 = arguments;

    context = context || this;

    return Akili.isolate(function () {
      return fn.apply(context, _arguments4);
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
Akili.errorHandling = function () {
  var _this6 = this;

  window.addEventListener('error', function () {
    _this6.triggerInit(false);
  });
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
 * @param {HTMLElement} [root]
 * @returns {Promise}
 */
Akili.init = function (root) {
  var _this7 = this;

  this.__root = root || document.body;

  if (root === document.documentElement) {
    throw new Error('"html" can\'t be the root element');
  }

  if (window.AKILI_SERVER) {
    this.__root.removeAttribute('scope');
    this.__root.innerHTML = window.AKILI_SERVER.html;
  } else {
    window.AKILI_CLIENT = {
      html: this.__root.innerHTML
    };
  }

  return this.compile(this.__root).then(function () {
    if (_router2.default.__init) {
      return _router2.default.changeState();
    }
  }).then(function () {
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
  for (var key in this.__window.Element.prototype) {
    Element.prototype[key] = this.__window.Element.prototype[key];
  }

  for (var _key in this.__window.Array.prototype) {
    Array.prototype[_key] = this.__window.Array.prototype[_key];
  }

  window.setTimeout = this.__window.setTimeout;
  window.setInterval = this.__window.setInterval;
  window.Promise = this.__window.Promise;
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

Akili.Component = _component3.default;
Akili.EventEmitter = _eventEmitter2.default;
Akili.Scope = _scope2.default;
Akili.utils = _utils2.default;
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

window.Akili = Akili;

var components = exports.components = Akili.components;
var services = exports.services = Akili.services;
exports.default = Akili;


Akili.define();
Akili.errorHandling();
Akili.isolateEvents();
Akili.isolateArrayPrototype();
Akili.isolateWindowFunctions();

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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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

  for (var k in obj) {
    if (!obj.hasOwnProperty(k)) {
      continue;
    }

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

  for (var k in obj) {
    if (!obj.hasOwnProperty(k)) {
      continue;
    }

    var val = obj[k];
    val && styles.push(this.toDashCase(k) + ':' + val);
  }

  return styles.join(';');
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
 * // returns [{x:1, y: 2}, {x: 2, y:1}] * 
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

  if (!keys) {
    keys = [null];
  }

  if (!handler) {
    return [].concat(_toConsumableArray(arr));
  }

  for (var i = 0, l = arr.length; i < l; i++) {
    var item = arr[i];
    var filtered = false;

    for (var k = 0, c = keys.length; k < c; k++) {
      var key = keys[k];
      key = !key || Array.isArray(key) ? key : [key];
      var val = key ? this.getPropertyByKeys(key, item) : item;

      if (!val) {
        continue;
      }

      val += '';

      if (typeof handler == 'function' && handler(item)) {
        filtered = true;
        continue;
      } else if (val.match(handler || '')) {
        filtered = true;
        continue;
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

  arr = [].concat(_toConsumableArray(arr));

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
 * @param {boolean} [nested=true] - deep copy if is true
 * @param {boolean} [unenumerable=false] - including non-enumerable properties
 * @returns {*}
 */
utils.copy = function (value) {
  var _this2 = this;

  var nested = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var unenumerable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) != 'object' || !value) {
    return value;
  }

  var next = function next(obj) {
    obj = _this2.isScopeProxy(obj) ? obj.__target : obj;
    var keys = unenumerable ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    var newObj = Array.isArray(obj) ? [] : {};

    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      var val = obj[key];
      val = val && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) == 'object' && nested ? next(val) : val;

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

    a = this.isScopeProxy(a) ? a.__target : a;
    b = this.isScopeProxy(b) ? b.__target : b;

    var clearUndefined = function clearUndefined(val) {
      var obj = Array.isArray(val) ? [] : {};
      Object.keys(val).forEach(function (key) {
        return val[key] !== undefined && (obj[key] = val[key]);
      });
      return obj;
    };

    if (options.ignoreUndefined) {
      a = clearUndefined(a);
      b = clearUndefined(b);
    }

    if (Object.keys(a).length != Object.keys(b).length) {
      return false;
    }

    a = this.isScopeProxy(a) ? a.__target : a;
    b = this.isScopeProxy(b) ? b.__target : b;

    for (var k in a) {
      if (!a.hasOwnProperty(k)) {
        continue;
      }

      if (!this.compare(a[k], b[k])) {
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
 * @returns {boolean}
 */
utils.comparePreviousValue = function (current, previous, previousCopy) {
  if (current !== previous) {
    return false;
  }

  return this.compare(current, previousCopy);
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
      return current = o[k] = fn(i == length);
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

      if (!fn || fn(value)) {
        delete o[k];
      }

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

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

      globals = _extends({ utils: _utils2.default }, _akili2.default.options.globals, globals);
      var keys = [];
      var vars = [];
      var exps = [];
      var symbols = ['"', "'", '`'];
      var arr = expression.split('');
      var open = '';
      var last = '';

      for (var i = 0, l = arr.length; i < l; i++) {
        var val = arr[i];
        var index = symbols.indexOf(val);

        if (index > -1 && (!open || open == val)) {
          !open ? open = symbols[index] : open = '';
        }

        if (val == ';' && !open) {
          last.trim() && exps.push(last);
          last = '';
          continue;
        }

        last += val;
      }

      last.trim() && exps.push(last);
      exps[exps.length - 1] = 'return ' + exps[exps.length - 1];

      for (var key in globals) {
        keys.push(key);
        vars.push(globals[key]);
      }

      return new (Function.prototype.bind.apply(Function, [null].concat(keys, ['' + exps.join('; ')])))().apply(context, vars);
    }
  }]);

  function Component(el) {
    var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Component);

    this.__isMounted = false;
    this.__isCompiled = false;
    this.__cancelled = false;
    this.__prevent = false;
    this.__bindings = {};
    this.__evaluatingEvent = null;
    this.__recompiling = null;
    this.__compiling = {};
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
   * Called on the recompilation
   *
   * @protected
   */


  _createClass(Component, [{
    key: '__recompile',
    value: function __recompile() {
      this.__isMounted = false;
      this.__isCompiled = false;
      this.__evaluationComponent.__disableProxy = {};
      this.__compiling = {};
      this.__recompiling = {};
      this.__setEvents();
      this.__setParents();
      this.__setBooleanAttributes();
      this.__defineAttributes();
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

      this.el.__akili = this;
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

          if (child.nodeType == 3) {
            _this2.__initializeNode(child, parent);

            child.nodeValue = _this2.__evaluate(child);
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
          p = _request2.default.get(this.constructor.templateUrl).then(function (res) {
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

      this.__isCompiled = true;
      this.__recompiling = null;
      this.__compiling = null;

      return p.then(function () {
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
      if (this.__recompiling) {
        return Promise.resolve();
      }

      this.attrs.onResolved && this.attrs.onResolved.trigger(undefined, { bubbles: false });
      return Promise.resolve(this.resolved());
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
    }

    /**
     * Set boolean attributes
     *
     * @protected
     */

  }, {
    key: '__setBooleanAttributes',
    value: function __setBooleanAttributes() {
      var _this3 = this;

      this.booleanAttributes = [].concat(_akili2.default.htmlBooleanAttributes, this.constructor.booleanAttributes);

      var setAttr = function setAttr(el) {
        for (var i = 0, attrs = el.attributes, l = attrs.length; i < l; i++) {
          var node = attrs[i];

          if (_this3.booleanAttributes.indexOf(node.nodeName) != -1) {
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
     * @param {HTMLElement} el
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
     * @param {HTMLElement} el
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
    key: '__checkNodePropertyChanging',
    value: function __checkNodePropertyChanging(node, keys, value) {
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
      var _this4 = this;

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
        var parseValue = node.__component.__getParsedExpression(d);
        _akili2.default.__evaluation = { node: node, list: [], component: node.__component };

        try {
          evaluate = _this4.constructor.parse(_this4.__evaluationComponent.scope, parseValue);
        } catch (err) {
          throw err;
        }

        if (_akili2.default.__evaluation) {
          evaluation = _akili2.default.__evaluation.list;
          _akili2.default.__evaluation.list = null;
          _akili2.default.__evaluation = null;
        }

        for (var i = evaluation.length - 1; i >= 0; i--) {
          var data = evaluation[i];
          var hash = _this4.__createKeysHash(data.keys);

          if (data.notBinding) {
            continue;
          }

          if (existingBindings[hash]) {
            continue;
          }

          var parentValue = _utils2.default.getPropertyByKeys(data.parents, data.component.__scope);
          var evalComponent = node.__attributeOf || node.__component;

          if (_utils2.default.isScopeProxy(parentValue) && data.component !== evalComponent.__evaluationComponent && data.component === data.realComponent) {
            continue;
          }

          var bind = data.component.__getBoundNode(data.keys, node);
          var value = _utils2.default.getPropertyByKeys(data.keys, data.component.__scope);

          if (!bind) {
            data.component.__bind(data.keys, { node: node });
          }

          data.component.__setNodeProperty(node, data.keys, value, data.evaluated);
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

        if (counter) {
          node.__hasBindings = true;
        }

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

          if (component.__isCompiled) {
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

            if (component.__checkNodePropertyChanging(bind.node, prop.keys, prop.value)) {
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
      var _this5 = this;

      var isDeleted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var data = this.__getBind(keys);

      var unbind = function unbind(obj, parents) {
        for (var k in obj) {
          if (!obj.hasOwnProperty(k) || _this5.__isSystemBindingKey(k)) {
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

          _this5.__evaluateNested(_keys, true);

          if (value === null || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) != 'object' || !hasKey) {
            _this5.__unbind(_keys);
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
     * @param {HTMLElement} el
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

      if (check ? this.__checkEvaluation(node) : true) {
        var key = node instanceof window.Attr ? 'value' : 'nodeValue';
        var res = this.__evaluate(node);
        node[key] != res && (node[key] = res);
      }
    }

    /**
     * Attribute node initializing
     *
     * @param {Node} node
     * @param {HTMLElement} el
     * @param {Component} attributeOf - if node is linked with parent scope
     * @protected
     */

  }, {
    key: '__initializeAttribute',
    value: function __initializeAttribute(node, el, attributeOf) {
      if (systemAttributes.indexOf(node.nodeName) != -1) {
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

      el.setAttribute(node.nodeName, component.__evaluate(node));
    }

    /**
     * Initialize the node
     *
     * @param {Node} node
     * @param {HTMLElement} el
     * @returns {boolean}
     * @protected
     */

  }, {
    key: '__initializeNode',
    value: function __initializeNode(node, el) {
      if (node.__initialized) {
        return false;
      }

      node.__expression = node[node instanceof window.Attr ? 'value' : 'nodeValue'];
      node.__properties = {};
      node.__attributeOf = null;
      node.__attributeOn = null;
      node.__event = null;
      node.__hasBindings = false;
      node.__initialized = true;
      node.__component = this;
      node.__element = el;

      return true;
    }

    /**
     * Interpolate attributes of the element
     *
     * @param {HTMLElement} el
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
      var _this6 = this;

      var changeAttribute = function changeAttribute(key, value) {
        var isDeleted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (_this6.__disableAttributeSetter) {
          return;
        }

        var node = _this6.el.getAttributeNode(key);

        if (node) {
          if (node.__event) {
            node.__event.unbind();
            node.__event = null;
            node.__expression = value;
          }

          if (node.__hasBindings) {
            _this6.__parent && _this6.__parent.__akili.__evaluationComponent.__unbindByNodes([node]);
            node.__hasBindings = false;
            node.__expression = value;
          }
        }

        if (isDeleted) {
          _this6.el.removeAttribute(key);
        } else if (node) {
          node.value = value;
        } else {
          _this6.el.setAttribute(key, value);
        }
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

          if (_this6.booleanAttributes.indexOf(attrKey) != -1) {
            attrKey = 'boolean-' + attrKey;

            if (value) {
              _this6.el.setAttribute(key, value);
            } else {
              _this6.el.removeAttribute(key);
            }
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
      var _this7 = this;

      return new Proxy(obj, {
        get: function get(target, key) {
          if (key == "__isProxy") {
            return true;
          }

          if (key == "__target") {
            return obj;
          }

          if (key == "__component") {
            return _this7;
          }

          if (key == "__keys") {
            return parents;
          }

          if (_this7.__isSystemKey(key)) {
            return target[key];
          }

          if (typeof target[key] === 'function') {
            var realTarget = _utils2.default.getOwnPropertyTarget(target, key);

            if (!_utils2.default.isPlainObject(realTarget)) {
              realTarget[key] = _akili2.default.isolateFunction(realTarget[key]);
            }
          }

          if (_akili2.default.__evaluation) {
            var keys = [].concat(parents, [key]);
            var notBinding = false;
            var evaluated = !_utils2.default.hasPropertyByKeys(keys, _this7.__scope);
            var component = _this7;
            var excluded = false;
            var excArr = keys.slice();

            if (target instanceof _scope3.default) {
              var _realTarget = _utils2.default.getOwnPropertyTarget(target, key);
              _realTarget && _realTarget instanceof _scope3.default && (component = _realTarget.__component);
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

            _this7.__bindNode(_akili2.default.__evaluation.list, component, keys, parents, target[key], notBinding, evaluated);
            return target[key];
          }

          return target[key];
        },
        set: function set(target, key, value) {
          if (_this7.__isSystemKey(key)) {
            target[key] = value;
            return true;
          }

          var keys = [].concat(parents, [key]);

          if (_this7.__checkDisablement(keys)) {
            target[key] = value;
            return true;
          }

          var keyString = _akili2.default.joinBindingKeys(keys);

          CHECK_EXISTENCE: if (parents.length > 0) {
            var targetParentValue = parents.length > 1 ? _utils2.default.getPropertyByKeys(parents.slice(0, -1), _this7.__scope) : _this7.__scope;

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

          if (_this7.__storeLinks[keyString]) {
            _this7.__storeTriggerByKeys(keys, value);
          }

          if (_this7.__attrLinks[keyString]) {
            _this7.__attrTriggerByKeys(keys, value);
          }

          target[key] = _this7.__nestedObserve(value, keys);

          if (_akili2.default.__isolation) {
            _this7.__createIsolationObject(parents, key, false);
            return true;
          }

          if (_this7.__isMounted) {
            _this7.__evaluateByKeys(keys, value);
          }

          return true;
        },
        deleteProperty: function deleteProperty(target, key) {
          var keys = [].concat(parents, [key]);

          if (_this7.__checkDisablement(keys)) {
            delete target[key];
            return true;
          }

          if (_this7.__isSystemKey(key)) {
            delete target[key];
            return true;
          }

          if (_akili2.default.__isolation) {
            delete target[key];
            _this7.__createIsolationObject(parents, key, true);
            return true;
          }

          delete target[key];
          _this7.__evaluateByKeys(keys, undefined, true);
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
      var _this8 = this;

      _store2.default.__target[name] = value;
      var links = _akili2.default.__storeLinks[name];

      if (!links || !links.length) {
        return;
      }

      var _loop = function _loop(i, l) {
        var link = links[i];
        var component = link.component;

        if (component === _this8) {
          return 'continue';
        }

        if (link.fn) {
          _akili2.default.unisolated(function () {
            return link.fn.call(component, value);
          });
          return 'continue';
        }

        component.scope.__set(link.keys, value);
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
      var _this9 = this;

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
        return _akili2.default.unisolated(function () {
          return fn.call(_this9, _store2.default[name]);
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
      var _this10 = this;

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
          _this10.attrs[ev] && _this10.attrs[ev].trigger(value, { bubbles: true });
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
      var _this11 = this;

      var links = this.__attrLinks[name];

      if (!links || !links.length) {
        return;
      }

      var _loop2 = function _loop2(i, l) {
        var link = links[i];
        _this11.__disableAttrTriggering = true;
        link.fn ? _akili2.default.unisolated(function () {
          return link.fn.call(_this11, value);
        }) : _this11.scope.__set(link.keys, value);
        _this11.__disableAttrTriggering = false;
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
      var _this12 = this;

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
        return _akili2.default.unisolated(function () {
          return fn.call(_this12, _this12.attrs[name]);
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
      var _this13 = this;

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

          if (_this13.__disableProxyRedefining) {
            break CHECK_PROXY;
          }

          if (value.__component !== _this13 || _akili2.default.joinBindingKeys(parents) != _akili2.default.joinBindingKeys(value.__keys)) {
            target = _utils2.default.copy(target, false);
            value = target;
          }
        } else if (!_this13.__disableProxyRedefining && !(value instanceof _scope3.default)) {
          target = _utils2.default.copy(target, false);
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
          return _this13.__observe(value, parents);
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
      var hash = this.__scope.__name + '.' + _akili2.default.joinBindingKeys(keys);
      return node.__properties[hash] || null;
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
      var _this14 = this;

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
          } else if (!_this14.__isSystemBindingKey(k)) {
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
      var _this15 = this;

      var clear = function clear(obj, parent, key) {
        for (var k in obj) {
          if (!obj.hasOwnProperty(k)) {
            continue;
          }

          var val = obj[k];

          if (k == '__data' && (!val || !val.length)) {
            delete obj[k];
          } else if (!_this15.__isSystemBindingKey(k)) {
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
     * @param {HTMLElement} parent
     */

  }, {
    key: 'appendTo',
    value: function appendTo(parent) {
      parent.appendChild(this.el);
      return _akili2.default.compile(this.el, { recompile: true });
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Request = exports.Request = function () {
  function Request(baseUrl, defaults) {
    _classCallCheck(this, Request);

    this.baseUrl = baseUrl ? baseUrl.replace(/\/$/, '') + '/' : '';

    this.defaults = _extends({
      statusErrorsPattern: /^([^23])|404/
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
        var url = void 0,
            xhr = void 0;

        options = _extends({}, _this.defaults, options || {});
        xhr = new XMLHttpRequest();
        typeof options.onStart == 'function' && options.onStart(xhr);
        options = _this.transformBefore(options);
        url = _this.baseUrl ? '' + _this.baseUrl + options.url.replace(/^\//, '') : options.url;
        xhr.open(options.method, url, true, options.user, options.password);
        options.headers = options.headers || {};

        if (options.json) {
          options.json !== true && (options.body = JSON.stringify(options.json));
          options.headers['content-type'] = 'application/json';
          options.responseType = options.responseType || 'json';
        } else if (options.form) {
          options.body = _this.createFormData(options.form);
          options.headers['content-type'] = 'multipart/form-data';
        }

        if (options.hasOwnProperty('timeout')) {
          xhr.timeout = options.timeout;
        }

        if (options.responseType) {
          xhr.responseType = options.responseType;
        }

        if (options.withCredentials) {
          xhr.withCredentials = options.withCredentials;
        }

        if (options.headers) {
          for (var k in options.headers) {
            if (!options.headers.hasOwnProperty(k)) {
              continue;
            }

            xhr.setRequestHeader(k, options.headers[k]);
          }
        }

        if (options.params) {
          var str = _this.paramsToQuery(options.params);

          if (str) {
            url += "?" + str;
          }
        }

        if (typeof options.onProgress == 'function') {
          xhr.onprogress = function () {
            return options.onProgress(xhr);
          };
        }

        xhr.onload = function () {
          var response = _this.transformAfter(xhr);

          if ((xhr.status + '').match(options.statusErrorsPattern)) {
            var err = new Error('Request to "' + url + '" returns failure status code ' + xhr.status);

            err.response = response;

            return reject(err);
          }

          resolve(response);
        };

        xhr.ontimeout = function () {
          reject(new Error('Request to "' + url + '" timed out'));
        };

        xhr.onerror = function (err) {
          reject(err);
        };

        xhr.send(options.body);
      });
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
     * @param {string} [namespace]
     *
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
     * @param {object} options
     * @returns {object}
     */

  }, {
    key: 'transformBefore',
    value: function transformBefore(options) {
      return options;
    }

    /**
     * Transform data after a request
     *
     * @param {XMLHttpRequest} xhr
     * @returns {object}
     */

  }, {
    key: 'transformAfter',
    value: function transformAfter(xhr) {
      return {
        xhr: xhr,
        data: xhr.response,
        status: xhr.status
      };
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

request.__instances = {};

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
    return _this;
  }

  _createClass(Text, [{
    key: 'compiled',
    value: function compiled() {
      this.attr('focus', this.setFocus);
      this.attr('value', this.setValue);
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

    _this.__iterator = null;
    _this.__key = null;
    _this.__value = null;
    _this.__index = null;
    _this.__comparisonValue = null;
    _this.iterators = [];
    _this.iteratorRef = null;
    _this.iteratorOuterHTML = null;
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
    value: function loop(key, value, keys, index, dataChanged) {
      this.__index = index;
      this.__key = key;
      this.__value = value;
      this.__comparisonValue = _utils2.default.copy(value);

      if (this.iterators.length > index) {
        var iterator = this.iterators[index];
        var cCopy = iterator.comparsion.copy;
        var changed = false;

        if (this.__index !== iterator.index) {
          iterator.setIndex();
          changed = true;
        } else {
          iterator.setIndex(true);
        }

        if (this.__key !== iterator.key) {
          iterator.setKey();
          changed = true;
        } else {
          iterator.setKey(true);
        }

        if (!_utils2.default.compare(cCopy, this.__comparisonValue, { ignoreUndefined: true })) {
          iterator.setValue();
          changed = true;
        } else {
          iterator.setValue(true);
        }

        (changed || dataChanged) && _akili2.default.compile(iterator.el, { recompile: true });
        return iterator;
      }

      var el = this.createIteratorElement();
      el.innerHTML = this.html;
      this.el.insertBefore(el, this.iteratorRef);
      _akili2.default.compile(el);
      this.iterators.push(el.__akili);
      return el.__akili;
    }
  }, {
    key: 'draw',
    value: function draw(data) {
      if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) != 'object' || data === null) {
        if (_akili2.default.options.debug) {
          console.warn('"For" component "in" attribute value type must be an object/array');
          data = [];
        }
      }

      var dataChanged = _utils2.default.compare(this.data, data);
      this.data = data;
      var keys = {};
      var iterators = [];
      var index = 0;

      if (Array.isArray(data)) {
        for (var l = data.length; index < l; index++) {
          iterators.push(this.loop(index, data[index], keys, index, dataChanged));
        }
      } else {
        for (var k in data) {
          if (!data.hasOwnProperty(k)) {
            continue;
          }

          iterators.push(this.loop(k, data[k], keys, index, dataChanged));
          index++;
        }
      }

      for (var i = 0, _l = iterators.length; i < _l; i++) {
        var iterator = iterators[i];
        this.el.appendChild(iterator.el);
        iterator.iterate(i);
      }

      for (var _i = index, _l2 = this.iterators.length; _i < _l2; _i++) {
        var _iterator = this.iterators[_i];
        _iterator.__destroy();
        this.iterators.splice(_i, 1);
        _l2--;
        _i--;
      }
    }
  }]);

  return For;
}(_component2.default);

For.matches = '[in]';
For.saveAttributeProxyIn = true;
exports.default = For;
;

var Loop = exports.Loop = function (_For) {
  _inherits(Loop, _For);

  function Loop() {
    var _ref2;

    _classCallCheck(this, Loop);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var _this2 = _possibleConstructorReturn(this, (_ref2 = Loop.__proto__ || Object.getPrototypeOf(Loop)).call.apply(_ref2, [this].concat(args)));

    _this2.for = null;
    _this2.html = _this2.el.innerHTML;
    _this2.isFor = _this2.el.hasAttribute('in');

    if (!_this2.isFor && !(_this2.el.parentNode.__akili instanceof For)) {
      _this2.cancel();
    }
    return _this2;
  }

  _createClass(Loop, [{
    key: 'created',
    value: function created() {
      this.__parent.__akili.__iterator = this;
      this.for = this.__parent.__akili;
      this.setIndex();
      this.setKey();
      this.setValue();
      this.isFor && _get(Loop.prototype.__proto__ || Object.getPrototypeOf(Loop.prototype), 'created', this).apply(this, arguments);
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
    value: function iterate(index) {}
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
 * All properties starting with __ will not be watching.
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

  _createClass(Scope, [{
    key: '__set',


    /**
     * Set a scope value
     * @param {string|string[]} keys
     * @param {*} value
     * @param {boolean} [strict=false] - without object copying
     * @protected
     */
    value: function __set(keys, value) {
      var _this = this;

      var strict = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var target = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (!Array.isArray(keys)) {
        keys = [keys];
      }

      _akili2.default.unisolated(function () {
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
  }, {
    key: '__utils',
    get: function get() {
      return _utils2.default;
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
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { bubbles: true };
      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (force || !this.inEvaluating()) {
        this.el.dispatchEvent(new _Event(this.name, this.prepareOptions(options)));
      }
    }
  }, {
    key: 'prepareOptions',
    value: function prepareOptions(options) {
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

  _createClass(Transition, [{
    key: 'redirect',
    value: function redirect() {
      this.cancel();
      router.state.apply(router, arguments);
    }
  }, {
    key: 'setPath',
    value: function setPath(path) {
      path.parent = this.path || null;
      this.path = path;
      this.routes.push(path);
      this.states[path.state.name] = path;
      this.params = !path.parent ? path.params : _extends({}, path.parent.params, path.params);
    }
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
  }, {
    key: 'hasState',
    value: function hasState(state) {
      return !!this.states[state.name];
    }
  }, {
    key: 'cancel',
    value: function cancel() {
      this.__cancelled = true;
    }
  }]);

  return Transition;
}();

var router = {};

router.baseUrl = "/";
router.states = [];
router.hashMode = true;
router.__redirects = 0;
router.__init = false;
router.__options = {};
router.__paramRegex = /(:([\w\d-]+))/g;
router.__routeSelector = function (c) {
  return c instanceof _route3.default;
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
    handler: function handler(transition) {}
  };

  if (_akili2.default.options.debug && options.component && (options.template || options.templateUrl)) {
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
    router.changeState().catch(function (err) {
      return console.error(err);
    });
    return res;
  };

  this.__onStateChangeHandler = function () {
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

  var states = {};

  for (var i = 0, l = this.states.length; i < l; i++) {
    var state = this.states[i];
    var parents = [];

    states[state.name] = state;
    state.children = [];
    parents = state.name.split('.');
    parents.pop();
    state.level = state.abstract ? null : parents.length;

    if (parents.length) {
      var parentName = parents.join('.');
      var parent = states[parentName];

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
  }

  if (!this.states.length && _akili2.default.options.debug) {
    console.warn('You didn\'t add any routes to the router');
  }

  window.addEventListener('popstate', this.__onStateChangeHandler);
  this.__init = true;
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

  router.states.push(state);

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
  return url.replace(/[\/]+/g, '/');
};

/**
 * Clear all router dependencies
 */
router.clear = function () {
  window.removeEventListener('popstate', this.__onStateChangeHandler);
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
  var str = includes ? urlPattern : this.splitSlashes('^' + urlPattern + '\/$');
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
  this.__disableChange = true;
  var res = fn();
  this.__disableChange = false;
  return res;
};

/**
 * Change state
 */
router.changeState = function () {
  var _this3 = this;

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

router.Transition = Transition;

exports.default = router;

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
 * If component
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
          this.__empty();
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

If.transparent = true;
If.matches = '[is]';
If.booleanAttributes = ['recreate'];
exports.default = If;
;

/**
 * ElseIf component
 */

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
 * Else component
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
    key: 'inContent',
    value: function inContent(value) {
      if (!this.isMultiple) {
        return this.el.content === value;
      }

      return this.el.content.indexOf(value) != -1;
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

Select.booleanAttributes = ['multiple'];
Select.events = ['change'];
exports.default = Select;
;

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
    _this.debounceInterval = 500;
    _this.debounceTimeout = null;
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
      } else {
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
      var _this3 = this;

      this.attr('debounce', function (interval) {
        return _this3.debounceInterval = interval;
      });
      return _get(Input.prototype.__proto__ || Object.getPrototypeOf(Input.prototype), 'compiled', this).apply(this, arguments);
    }
  }, {
    key: 'resolved',
    value: function resolved() {
      (this.isCheckbox || this.isRadio) && this.attr('checked', this.setChecked);
      return _get(Input.prototype.__proto__ || Object.getPrototypeOf(Input.prototype), 'resolved', this).apply(this, arguments);
    }
  }, {
    key: 'removed',
    value: function removed() {
      this.debounceTimeout && clearTimeout(this.debounceTimeout);
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

Input.booleanAttributes = ['checked', 'multiple'];
Input.events = ['change', 'debounce'];
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
 * The radio group component
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
      var _this3 = this;

      this.attr('in', function () {
        return _this3.setNames(_this3.attrs.name);
      });
      this.attr('value', this.setValue);
      this.attr('name', this.setNames, { callOnStart: false });
      return _get(Radio.prototype.__proto__ || Object.getPrototypeOf(Radio.prototype), 'resolved', this).apply(this, arguments);
    }
  }, {
    key: 'setNames',
    value: function setNames(name) {
      var children = this.children('input[type=radio]');

      for (var i = 0, l = children.length; i < l; i++) {
        children[i].el.setAttribute('name', name);
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

Radio.matches = '[name]';
Radio.events = ['radio'];
exports.default = Radio;
;

/**
 * The radio item component
 */

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
      return this.attr('url', this.getTemplate);
    }
  }, {
    key: 'getTemplate',
    value: function getTemplate(url) {
      var _this2 = this;

      this.connection && this.connection.abort();

      return _request2.default.get(url, {
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
      var _this3 = this;

      this.attr('state', this.setState);
      this.attr('params', this.setParams);
      this.attr('query', this.setQuery);
      this.attr('hash', this.setHash);
      this.attr('options', this.setOptions);
      this.attr('reload', this.setReload);
      this.attr('url', this.setUrl);
      this.attr('state', function () {
        return _this3.resetHref();
      }, { callOnStart: false });
      this.attr('params', function () {
        return _this3.resetHref();
      }, { callOnStart: false });
      this.attr('query', function () {
        return _this3.resetHref();
      }, { callOnStart: false });
      this.attr('hash', function () {
        return _this3.resetHref();
      }, { callOnStart: false });
      this.attr('url', function () {
        return _this3.resetHref();
      }, { callOnStart: false });
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
    key: 'setReload',
    value: function setReload(val) {
      this.options.reload = val;
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
A.booleanAttributes = ['reload'];
exports.default = A;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTVkNzMwZWUzY2RlNGQyNDYyYTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FraWxpLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91cmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JvdXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaWYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JhZGlvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHRhcmVhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5jbHVkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZW1iZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdHJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc291cmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hLmpzIl0sIm5hbWVzIjpbIkFraWxpIiwib3B0aW9ucyIsImRlYnVnIiwiZ2xvYmFscyIsIl9faW5pdCIsIl9fY29tcG9uZW50cyIsIl9fYWxpYXNlcyIsIl9fc2NvcGVzIiwiX19zdG9yZUxpbmtzIiwiX193aW5kb3ciLCJfX2lzb2xhdGlvbiIsIl9fZXZhbHVhdGlvbiIsImh0bWxCb29sZWFuQXR0cmlidXRlcyIsImNvbXBvbmVudHMiLCJkZWNvcmF0b3JzIiwic2VydmljZXMiLCJqb2luQmluZGluZ0tleXMiLCJrZXlzIiwibWFwIiwiZWwiLCJ0b1N0cmluZyIsImpvaW4iLCJhZGRTY29wZSIsInNjb3BlIiwiX19uYW1lIiwiRXJyb3IiLCJnZXRTY29wZSIsIm5hbWUiLCJyZW1vdmVTY29wZSIsImdldEFraWxpUGFyZW50cyIsInRyZWUiLCJhcnIiLCJjaGVjayIsIm5vZGUiLCJwYXJlbnROb2RlIiwiX19ha2lsaSIsInB1c2giLCJzZXRUZW1wbGF0ZSIsInRlbXBsYXRlIiwicmVwbGFjZSIsImlubmVySFRNTCIsImNyZWF0ZVNjb3BlTmFtZSIsImNyZWF0ZVJhbmRvbVN0cmluZyIsInN0ciIsImlzb2xhdGUiLCJmbiIsImNvbXBvbmVudCIsInJlcyIsInByb3BzIiwiayIsImhhc093blByb3BlcnR5IiwiaSIsImwiLCJsZW5ndGgiLCJwcm9wIiwiZGF0YSIsIl9fZ2V0QmluZCIsImlzRGVsZXRlZCIsIl9fZXZhbHVhdGVCeUtleXMiLCJ1bmRlZmluZWQiLCJfX3NldCIsImdldFByb3BlcnR5QnlLZXlzIiwiX19zY29wZSIsInVuZXZhbHVhdGVkIiwiZXZhbHVhdGlvbiIsInVuaXNvbGF0ZWQiLCJpc29sYXRpb24iLCJuZXh0VGljayIsIlByb21pc2UiLCJzZXRUaW1lb3V0IiwicmVzb2x2ZSIsInRoZW4iLCJpbml0aWFsaXplIiwicmVjb21waWxlIiwiX19yZWNvbXBpbGUiLCJpc1Jvb3QiLCJfX3Jvb3QiLCJjb21wb25lbnROYW1lIiwidG9EYXNoQ2FzZSIsImdldEF0dHJpYnV0ZSIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsIl9Db21wb25lbnQiLCJDSEVDS19BTElBU0VTIiwic2VsZWN0b3JzIiwiT2JqZWN0Iiwic2VsZWN0b3JBbGwiLCJtYXRjaGVzIiwic2VsZWN0b3IiLCJDb21wb25lbnQiLCJfX2NhbmNlbGxlZCIsIl9fY3JlYXRlIiwiY29tcGlsZSIsInJvb3QiLCJlbGVtZW50cyIsIm5lc3RlZEluaXRpYWxpemluZyIsImNoaWxkcmVuIiwiY2hpbGQiLCJwIiwiX19jb21waWxlIiwiYWxsIiwiciIsIl9fcmVzb2x2ZSIsImNvbnNvbGUiLCJ3YXJuIiwidW5yZWdpc3RlckNvbXBvbmVudCIsImFsaWFzIiwidW5yZWdpc3RlckFsaWFzIiwiaXNvbGF0ZUFycmF5UHJvdG90eXBlIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwia2V5Iiwib2xkIiwiX19pc1Byb3h5IiwiYXBwbHkiLCJpc29sYXRlV2luZG93RnVuY3Rpb25zIiwic2V0SW50ZXJ2YWwiLCJ3aW5kb3ciLCJjcmVhdGVDYWxsYmFja0lzb2xhdGlvbiIsImNvbnN0cnVjdG9yIiwiY2F0Y2giLCJpc29sYXRlRXZlbnRzIiwiRWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwiX19ha2lsaUxpc3RlbmVycyIsImFyZ3VtZW50cyIsImFyZ3MiLCJzbGljZSIsImNhbGwiLCJsaW5rIiwibGlzdGVuZXIiLCJzcGxpY2UiLCJwb3MiLCJpc0FycmF5IiwibnVtIiwiaW5kZXgiLCJjYWxsYmFjayIsImlzb2xhdGVGdW5jdGlvbiIsImNvbnRleHQiLCJvRm4iLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJ2YWx1ZSIsImVycm9ySGFuZGxpbmciLCJ0cmlnZ2VySW5pdCIsInN0YXR1cyIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImluaXQiLCJkb2N1bWVudCIsImJvZHkiLCJkb2N1bWVudEVsZW1lbnQiLCJBS0lMSV9TRVJWRVIiLCJyZW1vdmVBdHRyaWJ1dGUiLCJodG1sIiwiQUtJTElfQ0xJRU5UIiwiY2hhbmdlU3RhdGUiLCJlcnIiLCJkZWluaXQiLCJkZWZpbmUiLCJFdmVudEVtaXR0ZXIiLCJTY29wZSIsInV0aWxzIiwiQSIsIkF1ZGlvIiwiQ29udGVudCIsIkZvciIsIkVtYmVkIiwiSWYiLCJJbmNsdWRlIiwiSW5wdXQiLCJJZnJhbWUiLCJJbWFnZSIsIlJhZGlvIiwiUm91dGUiLCJTZWxlY3QiLCJTb3VyY2UiLCJUZXh0IiwiVGV4dGFyZWEiLCJUcmFjayIsIlVybCIsIlZpZGVvIiwicmVxdWVzdCIsInJvdXRlciIsInN0b3JlIiwiY2xhc3MiLCJvYmoiLCJjbGFzc2VzIiwidmFsIiwic3R5bGUiLCJzdHlsZXMiLCJmaWx0ZXIiLCJoYW5kbGVyIiwiaXRlbSIsImZpbHRlcmVkIiwiYyIsIm1hdGNoIiwic29ydCIsIm9yZGVyIiwiYSIsImIiLCJyZXZlcnNlIiwiRGF0ZSIsImdldFRpbWUiLCJuZXh0IiwiYVYiLCJiViIsImlzU2NvcGVQcm94eSIsImlzUGxhaW5PYmplY3QiLCJjb3B5IiwibmVzdGVkIiwidW5lbnVtZXJhYmxlIiwiX190YXJnZXQiLCJuZXdPYmoiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIm1ha2VBdHRyaWJ1dGVWYWx1ZSIsImNvbXBhcmUiLCJjbGVhclVuZGVmaW5lZCIsImZvckVhY2giLCJpZ25vcmVVbmRlZmluZWQiLCJjb21wYXJlUHJldmlvdXNWYWx1ZSIsImN1cnJlbnQiLCJwcmV2aW91cyIsInByZXZpb3VzQ29weSIsImVuY29kZUh0bWxFbnRpdGllcyIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlY29kZUh0bWxFbnRpdGllcyIsInRvQ2FtZWxDYXNlIiwibSIsInRvVXBwZXJDYXNlIiwiY2FwaXRhbGl6ZSIsIm9iamVjdCIsInJlZHVjZSIsIm8iLCJoYXNQcm9wZXJ0eUJ5S2V5cyIsImhhcyIsInNldFByb3BlcnR5QnlLZXlzIiwiZGVsZXRlUHJvcGVydHlCeUtleXMiLCJnZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQiLCJ0YXJnZXQiLCJwcm90byIsImdldFByb3RvdHlwZU9mIiwiZ2V0T3duUHJvcGVydHlUYXJnZXQiLCJNYXRoIiwicmFuZG9tIiwic3Vic3RyaW5nIiwidXJsQXR0cmlidXRlIiwiYXR0ciIsInNldFVybCIsInVybCIsImF0dHJzIiwiZXZhbHVhdGlvblJlZ2V4IiwiZXZhbHVhdGlvblJlZ2V4R2xvYmFsIiwiUmVnRXhwIiwic291cmNlIiwic3lzdGVtQXR0cmlidXRlcyIsImV4cHJlc3Npb24iLCJ2YXJzIiwiZXhwcyIsInN5bWJvbHMiLCJzcGxpdCIsIm9wZW4iLCJsYXN0IiwiaW5kZXhPZiIsInRyaW0iLCJGdW5jdGlvbiIsIl9faXNNb3VudGVkIiwiX19pc0NvbXBpbGVkIiwiX19wcmV2ZW50IiwiX19iaW5kaW5ncyIsIl9fZXZhbHVhdGluZ0V2ZW50IiwiX19yZWNvbXBpbGluZyIsIl9fY29tcGlsaW5nIiwiX19kaXNhYmxlUHJveHkiLCJfX2Rpc2FibGVBdHRyVHJpZ2dlcmluZyIsIl9fY2hpbGRyZW4iLCJfX3BhcmVudCIsIl9fcGFyZW50cyIsIl9fYXR0cnMiLCJfX2F0dHJMaW5rcyIsIl9fYXR0cmlidXRlT2YiLCJfX2V2YWx1YXRpb25Db21wb25lbnQiLCJfX3NldEV2ZW50cyIsIl9fc2V0UGFyZW50cyIsIl9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMiLCJfX2RlZmluZUF0dHJpYnV0ZXMiLCJfX2luaXRpYWxpemUiLCJjcmVhdGVkIiwiY29udHJvbCIsIl9fY29udHJvbEF0dHJpYnV0ZXMiLCJfX2V2YWx1YXRlUGFyZW50IiwibmV3UGFyZW50IiwiX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXMiLCJpbnRlcnBvbGF0ZSIsInBhcmVudCIsIm5vZGVUeXBlIiwiX19pbml0aWFsaXplTm9kZSIsIm5vZGVWYWx1ZSIsIl9fZXZhbHVhdGUiLCJjaGlsZE5vZGVzIiwib25Db21waWxlZCIsInRyaWdnZXIiLCJidWJibGVzIiwiY29tcGlsZWQiLCJ0ZW1wbGF0ZVVybCIsImdldCIsIl9fY29udGVudCIsIm9uUmVjb21waWxlZCIsInJlY29tcGlsZWQiLCJvblJlc29sdmVkIiwicmVzb2x2ZWQiLCJfc2NvcGUiLCJhc3NpZ24iLCJjb250cm9sQXR0cmlidXRlcyIsImV2ZW50cyIsIl9fZXZlbnRzIiwiX19zYXZlQXR0cmlidXRlUHJveHlJbiIsInNhdmVBdHRyaWJ1dGVQcm94eUluIiwiX19zYXZlQXR0cmlidXRlUHJveHlPdXQiLCJzYXZlQXR0cmlidXRlUHJveHlPdXQiLCJfX25lc3RlZE9ic2VydmUiLCJib29sZWFuQXR0cmlidXRlcyIsImNvbmNhdCIsInNldEF0dHIiLCJhdHRyaWJ1dGVzIiwibm9kZU5hbWUiLCJoYXNBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJldiIsInRlc3QiLCJwYXJlbnRzIiwiZXZhbHVhdGVQYXJlbnQiLCJ0cmFuc3BhcmVudCIsIl9fZGV0YWNoIiwiX19hZGRDaGlsZCIsInNldFByb3RvdHlwZU9mIiwiX19wcm9wZXJ0aWVzIiwiX19nZXROb2RlUHJvcGVydHkiLCJjb3VudGVyIiwiYXR0cmlidXRlVmFsdWUiLCJfX2NvbXBvbmVudCIsImNvbSIsIl9fZXhwcmVzc2lvbiIsIkF0dHIiLCJkIiwiZXZhbHVhdGUiLCJleGlzdGluZ0JpbmRpbmdzIiwicGFyc2VWYWx1ZSIsIl9fZ2V0UGFyc2VkRXhwcmVzc2lvbiIsImxpc3QiLCJwYXJzZSIsImhhc2giLCJfX2NyZWF0ZUtleXNIYXNoIiwibm90QmluZGluZyIsInBhcmVudFZhbHVlIiwiZXZhbENvbXBvbmVudCIsInJlYWxDb21wb25lbnQiLCJiaW5kIiwiX19nZXRCb3VuZE5vZGUiLCJfX2JpbmQiLCJfX3NldE5vZGVQcm9wZXJ0eSIsImV2YWx1YXRlZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJlIiwiaXNCb29sZWFuQXR0cmlidXRlIiwiX19oYXNCaW5kaW5ncyIsImNsZWFyQXR0cmlidXRlIiwiY2FtZWxBdHRyaWJ1dGUiLCJfX2F0dHJpYnV0ZU9uIiwiX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyIiwiX19hdHRyVHJpZ2dlckJ5TmFtZSIsImVsZW1lbnQiLCJfX2VsZW1lbnQiLCJ3aXRob3V0UGFyZW50cyIsImxhc3RQcm9wcyIsInByb3BzTGVuZ3RoIiwiZWxFdmFsdWF0ZSIsIl9fZGF0YSIsIl9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2luZyIsIl9fZGlzYWJsZUtleXMiLCJjaGVja1Byb3AiLCJfX2V2YWx1YXRlTm9kZSIsIl9rIiwiX3Byb3AiLCJfX2VuYWJsZUtleXMiLCJ1bmJpbmQiLCJfX2lzU3lzdGVtQmluZGluZ0tleSIsIl9rZXlzIiwiX19rZXlzIiwiX2lzRGVsZXRlZCIsImhhc0tleSIsInNoaWZ0IiwiX19ldmFsdWF0ZU5lc3RlZCIsIl9fdW5iaW5kIiwiZXhlYyIsImV2ZW50IiwiX19jaGVja0V2YWx1YXRpb24iLCJhdHRyaWJ1dGVPZiIsImV2ZW50TmFtZSIsIl9fZXZlbnQiLCJlbWl0dGVyIiwiX19ldmFsdWF0ZUV2ZW50IiwiX19pbml0aWFsaXplZCIsIl9faW5pdGlhbGl6ZUF0dHJpYnV0ZSIsImNoYW5nZUF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZU5vZGUiLCJfX3VuYmluZEJ5Tm9kZXMiLCJQcm94eSIsInNldCIsImF0dHJLZXkiLCJkZWxldGVQcm9wZXJ0eSIsIl9faXNTeXN0ZW1LZXkiLCJyZWFsVGFyZ2V0IiwiZXhjbHVkZWQiLCJleGNBcnIiLCJmb3JQYXJlbnRzIiwiZm9yRGF0YSIsInBvcCIsIl9fYmluZE5vZGUiLCJfX2NoZWNrRGlzYWJsZW1lbnQiLCJrZXlTdHJpbmciLCJDSEVDS19FWElTVEVOQ0UiLCJ0YXJnZXRQYXJlbnRWYWx1ZSIsIl9fc3RvcmVUcmlnZ2VyQnlLZXlzIiwiX19hdHRyVHJpZ2dlckJ5S2V5cyIsIl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0IiwiX19hbGwiLCJsaW5rcyIsIl9fc3RvcmVUcmlnZ2VyQnlOYW1lIiwiaW5mbyIsImNhbGxPblN0YXJ0Iiwic3RhcnRLZXlzIiwib2JzZXJ2ZSIsIkNIRUNLX1BST1hZIiwiX19kaXNhYmxlUHJveHlSZWRlZmluaW5nIiwiX19vYnNlcnZlIiwiaXNvbGF0aW9uS2V5IiwidXBkYXRlZEF0IiwicGFyZW50S2V5c1N0cmluZyIsImtleXNTdHJpbmciLCJfX2RlbGV0ZU5vZGVQcm9wZXJ0eSIsIm5vZGVzIiwiX19jbGVhckVtcHR5QmluZGluZ3MiLCJjbGVhciIsIl9fcmVtb3ZlIiwiX19jbGVhclN0b3JlTGlua3MiLCJvblJlbW92ZWQiLCJyZW1vdmVkIiwiX19zcGxpY2VDaGlsZCIsIl9fcmVtb3ZlQ2hpbGRyZW4iLCJmaW5kIiwiZmluZEFsbCIsImxldmVscyIsImxldmVsIiwicmlnaHQiLCJsZXZlbEVsZW1lbnRzIiwiX19zdG9yZUJ5RnVuY3Rpb24iLCJfX3N0b3JlQnlLZXlzIiwiX19hdHRyQnlGdW5jdGlvbiIsIl9fYXR0ckJ5S2V5cyIsIl9fdW5zdG9yZUJ5RnVuY3Rpb24iLCJfX3Vuc3RvcmVCeUtleXMiLCJfX3VuYXR0ckJ5RnVuY3Rpb24iLCJfX3VuYXR0ckJ5S2V5cyIsIl9fZ2V0UGFyZW50IiwiX19nZXRDaGlsZHJlbiIsIl9fZ2V0TmVhciIsImFwcGVuZENoaWxkIiwiX19lbXB0eSIsIl9fZGVzdHJveSIsIlJlcXVlc3QiLCJiYXNlVXJsIiwiZGVmYXVsdHMiLCJzdGF0dXNFcnJvcnNQYXR0ZXJuIiwicmVqZWN0IiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvblN0YXJ0IiwidHJhbnNmb3JtQmVmb3JlIiwibWV0aG9kIiwidXNlciIsInBhc3N3b3JkIiwiaGVhZGVycyIsImpzb24iLCJyZXNwb25zZVR5cGUiLCJmb3JtIiwiY3JlYXRlRm9ybURhdGEiLCJ0aW1lb3V0Iiwid2l0aENyZWRlbnRpYWxzIiwic2V0UmVxdWVzdEhlYWRlciIsInBhcmFtcyIsInBhcmFtc1RvUXVlcnkiLCJvblByb2dyZXNzIiwib25wcm9ncmVzcyIsIm9ubG9hZCIsInJlc3BvbnNlIiwidHJhbnNmb3JtQWZ0ZXIiLCJvbnRpbWVvdXQiLCJvbmVycm9yIiwic2VuZCIsInNlcCIsImVxIiwia3MiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ2Iiwib3B0IiwicXVlcnkiLCJhbXBzIiwiZXFzIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwibmFtZXNwYWNlIiwiZmQiLCJGb3JtRGF0YSIsImFwcGVuZCIsInRvSVNPU3RyaW5nIiwiX19pbnN0YW5jZXMiLCJhZGRJbnN0YW5jZSIsImluc3RhbmNlIiwicmVtb3ZlSW5zdGFuY2UiLCJ2YWx1ZUtleSIsInNldEZvY3VzIiwic2V0VmFsdWUiLCJzZXRFbGVtZW50Rm9jdXMiLCJzZXRFbGVtZW50Qmx1ciIsImZvY3VzIiwiYmx1ciIsIkxvb3AiLCJfX2l0ZXJhdG9yIiwiX19rZXkiLCJfX3ZhbHVlIiwiX19pbmRleCIsIl9fY29tcGFyaXNvblZhbHVlIiwiaXRlcmF0b3JzIiwiaXRlcmF0b3JSZWYiLCJpdGVyYXRvck91dGVySFRNTCIsImNyZWF0ZUl0ZXJhdG9yIiwiZHJhdyIsIm1hc2siLCJuZXh0U2libGluZyIsIm91dGVySFRNTCIsImNvbnRlbnQiLCJmaXJzdENoaWxkIiwiZGF0YUNoYW5nZWQiLCJpdGVyYXRvciIsImNDb3B5IiwiY29tcGFyc2lvbiIsImNoYW5nZWQiLCJzZXRJbmRleCIsInNldEtleSIsImNyZWF0ZUl0ZXJhdG9yRWxlbWVudCIsImluc2VydEJlZm9yZSIsImxvb3AiLCJpdGVyYXRlIiwiZm9yIiwiaXNGb3IiLCJjYW5jZWwiLCJfX2VsIiwic3RyaWN0IiwiZWxDb21wb25lbnQiLCJmb3JjZSIsImluRXZhbHVhdGluZyIsInByZXBhcmVPcHRpb25zIiwiX0V2ZW50IiwidHlwZSIsInRyYW5zaXRpb24iLCJzdGF0ZSIsInBhdGgiLCJnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24iLCJfX3RyYW5zaXRpb24iLCJlbXB0eSIsImV4aXN0cyIsImxvYWRlZCIsIlRyYW5zaXRpb24iLCJyb3V0ZXMiLCJzdGF0ZXMiLCJyb3V0ZSIsImhhc2hNb2RlIiwiX19yZWRpcmVjdHMiLCJfX29wdGlvbnMiLCJfX3BhcmFtUmVnZXgiLCJfX3JvdXRlU2VsZWN0b3IiLCJhZGQiLCJwYXR0ZXJuIiwiZGVmYXVsdE9wdGlvbnMiLCJhYnN0cmFjdCIsInNldFN0YXRlIiwiZ2V0U3RhdGUiLCJjcmVhdGVTdGF0ZVVybCIsInJlbG9hZCIsImdldFVybCIsImJhY2siLCJoaXN0b3J5IiwiZ28iLCJmb3J3YXJkIiwibG9jYXRpb24iLCJlcnJvciIsInB1c2hTdGF0ZSIsImRlZmF1bHRVcmwiLCJvbGRQdXNoU3RhdGUiLCJfX29uU3RhdGVDaGFuZ2VIYW5kbGVyIiwicGFyZW50TmFtZSIsImZ1bGxQYXR0ZXJuIiwic3BsaXRTbGFzaGVzIiwicmVtb3ZlU3RhdGUiLCJzZXRIYXNoVXJsIiwic2V0SGlzdG9yeVVybCIsImdldEhhc2hVcmwiLCJnZXRIaXN0b3J5VXJsIiwicGF0aG5hbWUiLCJzZWFyY2giLCJnZXRVcmxRdWVyeSIsImdldEhhc2hVcmxRdWVyeSIsImdldEhpc3RvcnlVcmxRdWVyeSIsInBhcmFtc0Zyb21RdWVyeSIsImYiLCJnZXRQYXR0ZXJuQ29udGVudCIsInVybFBhdHRlcm4iLCJyZWdleCIsImlzSW5jbHVkZWQiLCJpc0FjdGl2ZVN0YXRlIiwiaW5jbHVkZXMiLCJpbkFjdGl2ZVN0YXRlIiwiZ2V0Um91dGUiLCJnZXRBcnJheVBhdHRlcm5Db250ZW50IiwiZ2V0U3RhdGVzQnlMZXZlbCIsIl9fZGlzYWJsZUNoYW5nZSIsInByZXZUcmFuc2l0aW9uIiwib25FbmQiLCJzZXRQYXRoIiwiaGFzU3RhdGUiLCJpc0RpZmZlcmVudCIsInByZXYiLCJ0aXRsZSIsInNldFRyYW5zaXRpb24iLCJzYXZlU2Nyb2xsUG9zaXRpb24iLCJzY3JvbGxUbyIsIkVsc2VJZiIsIkVsc2UiLCJhY3RpdmUiLCJyZWNyZWF0ZSIsImlzQ29tcGlsZWQiLCJkaXNwbGF5IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInNldFJlY3JlYXRpb24iLCJjb21waWxhdGlvbiIsIm5leHRFbGVtZW50U2libGluZyIsInJlc3VsdCIsInNldEFjdGl2aXR5IiwiT3B0aW9uIiwiaXRlcmF0b3JUYWdOYW1lIiwiaXNNdWx0aXBsZSIsImdldENvbnRlbnQiLCJzZXRNdWx0aXBsZSIsInNldENvbnRlbnQiLCJkcmF3U2VsZWN0IiwiY2hhbmdlVmFsdWUiLCJmb3JtYXRWYWx1ZSIsInNlbGVjdGVkIiwib3B0aW9uIiwic2VsZWN0aW9uIiwicmVkZWZpbmUiLCJvbkNoYW5nZSIsImRpc3BhdGNoIiwiRXZlbnQiLCJzZXRTZWxlY3RlZCIsImlzQ2hlY2tib3giLCJpc1JhZGlvIiwiZGVib3VuY2VJbnRlcnZhbCIsImRlYm91bmNlVGltZW91dCIsInNldENoZWNrZWQiLCJjaGVja2VkIiwiY2xlYXJUaW1lb3V0Iiwib25EZWJvdW5jZSIsImludGVydmFsIiwicHJldkNoZWNrZWQiLCJjaGFuZ2VSYWRpbyIsInJhZGlvIiwiUmFkaW9CdXR0b24iLCJpdGVyYWJsZSIsImdldFJhZGlvVmFsdWUiLCJwcmV2VmFsdWUiLCJvblJhZGlvIiwic2V0TmFtZXMiLCJpc1RydWUiLCJpc1NlbGVjdGVkIiwicmFuZ2UiLCJjcmVhdGVSYW5nZSIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJjb25uZWN0aW9uIiwiZ2V0VGVtcGxhdGUiLCJhYm9ydCIsIm9uTG9hZCIsIm9uRXJyb3IiLCJPYmplY3RzIiwiaXNVcmwiLCJwcmV2ZW50RGVmYXVsdCIsIm9uU3RhdGVDaGFuZ2VkIiwic2V0UGFyYW1zIiwic2V0UXVlcnkiLCJzZXRIYXNoIiwic2V0T3B0aW9ucyIsInNldFJlbG9hZCIsInJlc2V0SHJlZiIsImhyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFFBQVEsRUFBZCxDLENBckNBOzs7Ozs7Ozs7QUF1Q0FBLE1BQU1DLE9BQU4sR0FBZ0I7QUFDZEMsU0FBTyxJQURPO0FBRWRDLFdBQVM7QUFGSyxDQUFoQjs7QUFLQUgsTUFBTUksTUFBTixHQUFlLElBQWY7QUFDQUosTUFBTUssWUFBTixHQUFxQixFQUFyQjtBQUNBTCxNQUFNTSxTQUFOLEdBQWtCLEVBQWxCO0FBQ0FOLE1BQU1PLFFBQU4sR0FBaUIsRUFBakI7QUFDQVAsTUFBTVEsWUFBTixHQUFxQixF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QU9BLE9BQVAseUNBQU9BLE9BQVAsTUFBa0IsUUFBbEIsSUFBOEIsQ0FBQ0EsT0FBbkMsRUFBNEM7QUFDMUMsY0FBTSxJQUFJd0IsS0FBSiwwQ0FBTjtBQUNEOztBQUVELFdBQUt4QixPQUFMLEdBQWVBLE9BQWY7QUFDRDs7OzhCQUVTZ00sRyxFQUFLO0FBQ2IsV0FBS2hNLE9BQUwsQ0FBYW1sQixNQUFiLEdBQXNCblosR0FBdEI7QUFDRDs7OzZCQUVRdEssSSxFQUFNO0FBQ2IsVUFBSWtpQixRQUFRLGlCQUFPcUIsUUFBUCxDQUFnQnZqQixJQUFoQixDQUFaOztBQUVBLFVBQUksQ0FBQ2tpQixLQUFMLEVBQVk7QUFDVixjQUFNLElBQUlwaUIsS0FBSix3Q0FBK0NFLElBQS9DLE9BQU47QUFDRDs7QUFFRCxhQUFPa2lCLEtBQVA7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBSSxLQUFLN1QsR0FBVCxFQUFjO0FBQ1osYUFBS0MsS0FBTCxDQUFXMGMsSUFBWCxHQUFrQixLQUFLM2MsR0FBdkI7QUFDRCxPQUZELE1BR0s7QUFDSCxhQUFLQyxLQUFMLENBQVcwYyxJQUFYLEdBQWtCLGlCQUFPeEgsY0FBUCxDQUFzQixLQUFLdEIsS0FBM0IsRUFBa0MsS0FBSzNFLE1BQXZDLEVBQStDLEtBQUtnQixLQUFwRCxFQUEyRCxLQUFLNUosSUFBaEUsQ0FBbEI7QUFDRDtBQUNGOzs7Ozs7QUEzSGtCOUwsQyxDQUNaakYsTyxHQUFVLHVDO0FBREVpRixDLENBRVp3SixpQixHQUFvQixJO0FBRlJ4SixDLENBR1pnSyxpQixHQUFvQixDQUFDLFFBQUQsQztrQkFIUmhLLEMiLCJmaWxlIjoiYWtpbGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1NWQ3MzBlZTNjZGU0ZDI0NjJhMSIsIi8qKlxuICogSmF2YXNjcmlwdCBmcmFtZXdvcmtcbiAqXG4gKiBjb25zdCBBa2lsaSA9IG1ha2VJdEVhc3koanMgKyBodG1sKTtcbiAqXG4gKiBAYXV0aG9yIEFsZXhhbmRyIEJhbGFzeWFuIDxteXdlYnN0cmVldEBnbWFpbC5jb20+XG4gKiBAbGluayBodHRwOi8vYWtpbGlqcy5jb21cbiAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50LmpzJztcbmltcG9ydCBJZiBmcm9tICcuL2NvbXBvbmVudHMvaWYuanMnO1xuaW1wb3J0IEZvciBmcm9tICcuL2NvbXBvbmVudHMvZm9yLmpzJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdC5qcyc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9jb21wb25lbnRzL2lucHV0LmpzJztcbmltcG9ydCBSYWRpbyBmcm9tICcuL2NvbXBvbmVudHMvcmFkaW8uanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9jb21wb25lbnRzL3RleHQuanMnO1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJy4vY29tcG9uZW50cy90ZXh0YXJlYS5qcyc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuL2NvbXBvbmVudHMvY29udGVudC5qcyc7XG5pbXBvcnQgSW5jbHVkZSBmcm9tICcuL2NvbXBvbmVudHMvaW5jbHVkZS5qcyc7XG5pbXBvcnQgSWZyYW1lIGZyb20gJy4vY29tcG9uZW50cy9pZnJhbWUuanMnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vY29tcG9uZW50cy9pbWFnZS5qcyc7XG5pbXBvcnQgRW1iZWQgZnJvbSAnLi9jb21wb25lbnRzL2VtYmVkLmpzJztcbmltcG9ydCBBdWRpbyBmcm9tICcuL2NvbXBvbmVudHMvYXVkaW8uanMnO1xuaW1wb3J0IFZpZGVvIGZyb20gJy4vY29tcG9uZW50cy92aWRlby5qcyc7XG5pbXBvcnQgVHJhY2sgZnJvbSAnLi9jb21wb25lbnRzL3RyYWNrLmpzJztcbmltcG9ydCBTb3VyY2UgZnJvbSAnLi9jb21wb25lbnRzL3NvdXJjZS5qcyc7XG5pbXBvcnQgT2JqZWN0cyBmcm9tICcuL2NvbXBvbmVudHMvb2JqZWN0LmpzJztcbmltcG9ydCBSb3V0ZSBmcm9tICcuL2NvbXBvbmVudHMvcm91dGUuanMnO1xuaW1wb3J0IFVybCBmcm9tICcuL2NvbXBvbmVudHMvdXJsLmpzJztcbmltcG9ydCBBIGZyb20gJy4vY29tcG9uZW50cy9hLmpzJztcbmltcG9ydCBTY29wZSBmcm9tICcuL3Njb3BlLmpzJztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4vc2VydmljZXMvcm91dGVyLmpzJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3NlcnZpY2VzL3N0b3JlLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcblxuY29uc3QgQWtpbGkgPSB7fTtcblxuQWtpbGkub3B0aW9ucyA9IHtcbiAgZGVidWc6IHRydWUsXG4gIGdsb2JhbHM6IHt9XG59O1xuXG5Ba2lsaS5fX2luaXQgPSBudWxsO1xuQWtpbGkuX19jb21wb25lbnRzID0ge307XG5Ba2lsaS5fX2FsaWFzZXMgPSB7fTtcbkFraWxpLl9fc2NvcGVzID0ge307XG5Ba2lsaS5fX3N0b3JlTGlua3MgPSB7fTtcbkFraWxpLl9fd2luZG93ID0ge307XG5Ba2lsaS5fX2lzb2xhdGlvbiA9IG51bGw7XG5Ba2lsaS5fX2V2YWx1YXRpb24gPSBudWxsO1xuXG5Ba2lsaS5odG1sQm9vbGVhbkF0dHJpYnV0ZXMgPSBbXG4gICdkaXNhYmxlZCcsICdjb250ZW50ZWRpdGFibGUnLCAnaGlkZGVuJ1xuXTtcblxuQWtpbGkuY29tcG9uZW50cyA9IHt9O1xuQWtpbGkuZGVjb3JhdG9ycyA9IHt9O1xuQWtpbGkuc2VydmljZXMgPSB7fTtcblxuLyoqXG4gKiBKb2luIGJpbmRpbmcga2V5c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgYmluZGluZyBrZXlzXG4gKi9cbkFraWxpLmpvaW5CaW5kaW5nS2V5cyA9IGZ1bmN0aW9uKGtleXMpIHtcbiAgcmV0dXJuIGtleXMubWFwKGVsID0+IGVsLnRvU3RyaW5nKCkpLmpvaW4oJy4nKTtcbn07XG5cbi8qKlxuICogQWRkIHNjb3BlIHRvIHRoZSBzY29wZXMgbGlzdFxuICpcbiAqIEBwYXJhbSBzY29wZVxuICovXG5Ba2lsaS5hZGRTY29wZSA9IGZ1bmN0aW9uKHNjb3BlKSB7XG4gIGlmICh0aGlzLl9fc2NvcGVzW3Njb3BlLl9fbmFtZV0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFNjb3BlIG5hbWUgJHtzY29wZS5fX25hbWV9IGFscmVhZHkgZXhpc3RzYCk7XG4gIH1cblxuICB0aGlzLl9fc2NvcGVzW3Njb3BlLl9fbmFtZV0gPSBzY29wZTtcbn07XG5cbi8qKlxuICogR2V0IHNjb3BlIGZyb20gdGhlIHNjb3BlcyBsaXN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzY29wZSBuYW1lXG4gKiBAcmV0dXJucyB7U2NvcGV9XG4gKi9cbkFraWxpLmdldFNjb3BlID0gZnVuY3Rpb24obmFtZSkge1xuICByZXR1cm4gdGhpcy5fX3Njb3Blc1tuYW1lXTtcbn07XG5cbi8qKlxuICogRGVsZXRlIHNjb3BlIGZyb20gdGhlIHNjb3BlcyBsaXN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzY29wZSBuYW1lXG4gKi9cbkFraWxpLnJlbW92ZVNjb3BlID0gZnVuY3Rpb24obmFtZSkge1xuICB0aGlzLl9fc2NvcGVzW25hbWVdID0gbnVsbDtcbiAgZGVsZXRlIHRoaXMuX19zY29wZXNbbmFtZV07XG59O1xuXG4vKipcbiAqIEdldCBhbGwgZWxlbWVudHMgd2l0aCBhdHRhY2hlZCBBa2lsaSBjb21wb25lbnRzXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3RyZWU9dHJ1ZV0gLSByZXR1cm4gYXJyYXkgb2YgdGhlIHBhcmVudHMgaWYgdHJ1ZSwgY2xvc2VzdCBwYXJlbnQgaWYgZmFsc2VcbiAqIEByZXR1cm5zIHtBcnJheXxIVE1MRWxlbWVudHxudWxsfVxuICovXG5Ba2lsaS5nZXRBa2lsaVBhcmVudHMgPSBmdW5jdGlvbiAoZWwsIHRyZWUgPSB0cnVlKSB7XG4gIGxldCBhcnIgPSBbXTtcblxuICBmdW5jdGlvbiBjaGVjayhub2RlKSB7XG4gICAgaWYgKCFub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5wYXJlbnROb2RlLl9fYWtpbGkpIHtcbiAgICAgIGFyci5wdXNoKG5vZGUucGFyZW50Tm9kZSk7XG5cbiAgICAgIGlmICghdHJlZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2sobm9kZS5wYXJlbnROb2RlKTtcbiAgfVxuXG4gIGNoZWNrKGVsKTtcblxuICByZXR1cm4gdHJlZT8gYXJyOiBhcnJbMF07XG59O1xuXG4vKipcbiAqIFNldCBlbGVtZW50IGlubmVyIGh0bWwgd2l0aCBjb250ZW50IHJlcGxhY2luZ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwiPGk+SGVsbG88L2k+PGI+V29ybGQ8L2I+XCJcbiAqIGVsLmlubmVySFRNTCA9IFwiPGI+V29ybGQ8L2I+XCI7XG4gKiBBa2lsaS5zZXRUZW1wbGF0ZShlbCwgXCI8aT5IZWxsbzwvaT4ke3RoaXMuX19jaGlsZHJlbn1cIik7XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuQWtpbGkuc2V0VGVtcGxhdGUgPSBmdW5jdGlvbihlbCwgdGVtcGxhdGUpIHtcbiAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKC9cXCR7KCgoPyFcXCR7KVxccyp0aGlzXFwuX19jb250ZW50XFxzKikqKX0vLCBlbC5pbm5lckhUTUwpO1xuICBlbC5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcblxuICByZXR1cm4gZWwuaW5uZXJIVE1MO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSB1bmlxdWUgc2NvcGUgbmFtZVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbkFraWxpLmNyZWF0ZVNjb3BlTmFtZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdXRpbHMuY3JlYXRlUmFuZG9tU3RyaW5nKDE2LCAoc3RyKSA9PiB7XG4gICAgcmV0dXJuICEhdGhpcy5fX3Njb3Blc1tzdHJdO1xuICB9KTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSBmdW5jdGlvbi5cbiAqIEV2ZXJ5IHNjb3BlIHZhcmlhYmxlIGNoYW5nZSBjYWxscyBhY2NvcmRpbmcgbm9kZSBldmFsdWF0aW9uLlxuICogRm9yIGV4YW1wbGUsIGlmIHlvdSBjaGFuZ2Ugc29tZSBzY29wZSB2YXJpYWJsZSBpbiB0aGUgbG9vcCAtIGV2YWx1YXRpb24gd2lsbCBiZSBjYWxsZWQgb24gdGhlIGVhY2ggY2hhbmdlLlxuICogSXQgbWF5IGJlIHNsb3cgZm9yIHRoZSBhcHBsaWNhdGlvbi5cbiAqIFlvdSBjYW4gaXNvbGF0ZSB0aGlzIGFjdGlvbiBhbmQgcnVuIGFsbCBldmFsdWF0aW9uIHByb2Nlc3MgYWZ0ZXIgcGFzc2VkIGZ1bmN0aW9uIGF0IG9uY2UuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS5pc29sYXRlID0gZnVuY3Rpb24oZm4sIGNvbXBvbmVudCkgeyBcbiAgaWYgKHRoaXMuX19pc29sYXRpb24pIHtcbiAgICByZXR1cm4gZm4oKTtcbiAgfVxuXG4gIHRoaXMuX19pc29sYXRpb24gPSB7fTtcbiAgbGV0IHJlcyA9IGZuKCk7XG4gIGxldCBwcm9wcyA9IFtdO1xuXG4gIGZvciAobGV0IGsgaW4gdGhpcy5fX2lzb2xhdGlvbikge1xuICAgIGlmICghdGhpcy5fX2lzb2xhdGlvbi5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcHJvcHMucHVzaCh0aGlzLl9faXNvbGF0aW9uW2tdKTtcbiAgfVxuICBcbiAgdGhpcy5fX2lzb2xhdGlvbiA9IG51bGw7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBwcm9wcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgcHJvcCA9IHByb3BzW2ldO1xuICAgIGxldCBkYXRhID0gcHJvcC5jb21wb25lbnQuX19nZXRCaW5kKHByb3Aua2V5cyk7XG5cbiAgICBpZiAocHJvcC5pc0RlbGV0ZWQpIHtcbiAgICAgIHByb3AuY29tcG9uZW50Ll9fZXZhbHVhdGVCeUtleXMocHJvcC5rZXlzLCB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIFxuICAgIHByb3AuY29tcG9uZW50LnNjb3BlLl9fc2V0KHByb3Aua2V5cywgdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMocHJvcC5rZXlzLCBwcm9wLmNvbXBvbmVudC5fX3Njb3BlKSk7XG4gIH1cblxuICBwcm9wcyA9IG51bGw7XG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIFN0b3AgZXZhbHVhdGlvbiBiZWZvcmUgdGhlIGZ1bmN0aW9uIGFuZCBjb250aW51ZSBhZnRlclxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkudW5ldmFsdWF0ZWQgPSBmdW5jdGlvbihmbikge1xuICBsZXQgZXZhbHVhdGlvbiA9IHRoaXMuX19ldmFsdWF0aW9uO1xuICBsZXQgcmVzO1xuICB0aGlzLl9fZXZhbHVhdGlvbiA9IG51bGw7XG4gIHJlcyA9IGZuKCk7XG4gIHRoaXMuX19ldmFsdWF0aW9uID0gZXZhbHVhdGlvbjtcbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogU3RvcCBpc29sYXRpb24gYmVmb3JlIHRoZSBmdW5jdGlvbiBhbmQgY29udGludWUgYWZ0ZXJcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLnVuaXNvbGF0ZWQgPSBmdW5jdGlvbihmbikge1xuICBsZXQgaXNvbGF0aW9uID0gdGhpcy5fX2lzb2xhdGlvbjtcbiAgbGV0IHJlcztcbiAgdGhpcy5fX2lzb2xhdGlvbiA9IG51bGw7XG4gIHJlcyA9IGZuKCk7XG4gIHRoaXMuX19pc29sYXRpb24gPSBpc29sYXRpb247XG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIFJ1biB0aGUgZnVuY3Rpb24gb24gdGhlIG5leHQgdGlja1xuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuQWtpbGkubmV4dFRpY2sgPSBmdW5jdGlvbihmbikge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcykgPT4gc2V0VGltZW91dCgoKSA9PiBQcm9taXNlLnJlc29sdmUoZm4oKSkudGhlbihyZXMpKSk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgZWxlbWVudFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnM9e31dXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKGVsLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IHJlY29tcGlsZSA9IG9wdGlvbnMucmVjb21waWxlO1xuICBsZXQgY29tcG9uZW50ID0gZWwuX19ha2lsaTtcblxuICBpZiAoY29tcG9uZW50KSB7XG4gICAgaWYgKHJlY29tcGlsZSkge1xuICAgICAgY29tcG9uZW50Ll9fcmVjb21waWxlKCk7XG4gICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBpc1Jvb3QgPSBlbCA9PT0gdGhpcy5fX3Jvb3Q7XG4gIGxldCBjb21wb25lbnROYW1lID0gdXRpbHMudG9EYXNoQ2FzZShlbC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpIHx8IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSk7XG4gIGxldCBfQ29tcG9uZW50ID0gdGhpcy5fX2NvbXBvbmVudHNbY29tcG9uZW50TmFtZV07XG5cbiAgQ0hFQ0tfQUxJQVNFUzogaWYgKCFfQ29tcG9uZW50KSB7XG4gICAgbGV0IHNlbGVjdG9ycyA9IE9iamVjdC5rZXlzKHRoaXMuX19hbGlhc2VzKTtcblxuICAgIGlmICghc2VsZWN0b3JzLmxlbmd0aCkge1xuICAgICAgYnJlYWsgQ0hFQ0tfQUxJQVNFUztcbiAgICB9XG5cbiAgICBsZXQgc2VsZWN0b3JBbGwgPSBzZWxlY3RvcnMuam9pbignLCcpO1xuXG4gICAgaWYgKCFlbC5tYXRjaGVzKHNlbGVjdG9yQWxsKSkge1xuICAgICAgYnJlYWsgQ0hFQ0tfQUxJQVNFUztcbiAgICB9XG5cbiAgICBmb3IgKGxldCBzZWxlY3RvciBpbiB0aGlzLl9fYWxpYXNlcykge1xuICAgICAgaWYgKCF0aGlzLl9fYWxpYXNlcy5oYXNPd25Qcm9wZXJ0eShzZWxlY3RvcikpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBfQ29tcG9uZW50ID0gdGhpcy5fX2NvbXBvbmVudHNbdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKCFfQ29tcG9uZW50ICYmICFpc1Jvb3QpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIV9Db21wb25lbnQpIHtcbiAgICBfQ29tcG9uZW50ID0gdGhpcy5Db21wb25lbnQ7XG4gIH1cblxuICBpZiAoX0NvbXBvbmVudC5tYXRjaGVzICYmICFlbC5tYXRjaGVzKF9Db21wb25lbnQubWF0Y2hlcykpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb21wb25lbnQgPSBuZXcgX0NvbXBvbmVudChlbCwge30pO1xuXG4gIGlmIChjb21wb25lbnQuX19jYW5jZWxsZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb21wb25lbnQuX19jcmVhdGUoKTtcbiAgcmV0dXJuIGNvbXBvbmVudDtcbn07XG5cbi8qKlxuICogQ29tcGlsZSB0aGUgZWxlbWVudFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5Ba2lsaS5jb21waWxlID0gZnVuY3Rpb24ocm9vdCwgb3B0aW9ucyA9IHsgcmVjb21waWxlOiBmYWxzZSB9KSB7ICBcbiAgbGV0IGVsZW1lbnRzID0gW107XG5cbiAgY29uc3QgbmVzdGVkSW5pdGlhbGl6aW5nID0gKGVsKSA9PiB7XG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXMuaW5pdGlhbGl6ZShlbCwgb3B0aW9ucyk7XG4gICAgbGV0IGNoaWxkcmVuID0gZWwuY2hpbGRyZW47XG4gICAgY29tcG9uZW50ICYmIGVsZW1lbnRzLnB1c2goY29tcG9uZW50KTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5lc3RlZEluaXRpYWxpemluZyhjaGlsZCk7XG4gICAgfVxuICB9O1xuXG4gIG5lc3RlZEluaXRpYWxpemluZyhyb290KTtcblxuICBsZXQgcCA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGNvbXBvbmVudCA9IGVsZW1lbnRzW2ldO1xuICAgIHAucHVzaChjb21wb25lbnQuX19jb21waWxlKCkpO1xuICB9XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKHApLnRoZW4oKCkgPT4ge1xuICAgIGxldCByID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gZWxlbWVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBjb21wb25lbnQgPSBlbGVtZW50c1tpXTtcbiAgICAgIHIucHVzaChjb21wb25lbnQuX19yZXNvbHZlKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLmFsbChyKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIHRoZSBjb21wb25lbnQgb3IgZ2V0IGl0IGlmIGZuIGlzIG5vdCBwYXNzZWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtDb21wb25lbnR9IFtmbl1cbiAqL1xuQWtpbGkuY29tcG9uZW50ID0gZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuICBpZiAoIWZuKSB7XG4gICAgcmV0dXJuIHRoaXMuX19jb21wb25lbnRzW25hbWVdIHx8IG51bGw7XG4gIH1cblxuICBpZiAodGhpcy5fX2NvbXBvbmVudHNbbmFtZV0gJiYgQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgIGNvbnNvbGUud2FybihgQ29tcG9uZW50ICR7bmFtZX0gYWxyZWFkeSB3YXMgYWRkZWRgKTtcbiAgfVxuXG4gIHRoaXMuX19jb21wb25lbnRzW25hbWVdID0gZm47XG59O1xuXG4vKipcbiAqIFVucmVnaXN0ZXIgdGhlIGNvbXBvbmVudFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbkFraWxpLnVucmVnaXN0ZXJDb21wb25lbnQgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLl9fY29tcG9uZW50c1tuYW1lXTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIHNlbGVjdG9yIGFsaWFzIG9yIGdldCBpdCBpZiBjb21wb25lbnQgbmFtZSBpcyBub3QgcGFzc2VkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIC0gRE9NIHNlbGVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvbXBvbmVudE5hbWVdXG4gKi9cbkFraWxpLmFsaWFzID0gZnVuY3Rpb24oc2VsZWN0b3IsIGNvbXBvbmVudE5hbWUgPSAnJykge1xuICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmICghY29tcG9uZW50TmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gJiYgQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgIGNvbnNvbGUud2FybihgQWxpYXMgd2l0aCBzZWxlY3RvciAke3NlbGVjdG9yfSBhbHJlYWR5IHdhcyBhZGRlZGApO1xuICB9XG5cbiAgdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdID0gY29tcG9uZW50TmFtZTtcbn07XG5cbi8qKlxuICogVW5yZWdpc3RlciB0aGUgc2VsZWN0b3IgYWxpYXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqL1xuQWtpbGkudW5yZWdpc3RlckFsaWFzID0gZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgZGVsZXRlIHRoaXMuX19jb21wb25lbnRzW3NlbGVjdG9yXTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSBhcnJheSBwcm90b3R5cGUgZnVuY3Rpb25zXG4gKi9cbkFraWxpLmlzb2xhdGVBcnJheVByb3RvdHlwZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9fd2luZG93LkFycmF5ID0geyBwcm90b3R5cGU6IHt9IH07XG5cbiAgbGV0IGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhBcnJheS5wcm90b3R5cGUpO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICBsZXQgb2xkID0gQXJyYXkucHJvdG90eXBlW2tleV07XG5cbiAgICBpZiAodHlwZW9mIG9sZCAhPSAnZnVuY3Rpb24nIHx8IGtleSA9PSAnY29uc3RydWN0b3InKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB0aGlzLl9fd2luZG93LkFycmF5LnByb3RvdHlwZVtrZXldID0gb2xkO1xuXG4gICAgQXJyYXkucHJvdG90eXBlW2tleV0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBBa2lsaS51bmV2YWx1YXRlZCgoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5fX2lzUHJveHkpIHtcbiAgICAgICAgICByZXR1cm4gQWtpbGkudW5ldmFsdWF0ZWQoKCkgPT4ge1xuICAgICAgICAgICAgIHJldHVybiBvbGQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9sZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbn07XG5cbi8qKlxuICogSXNvbGF0ZSBzb21lIHdpbmRvdyBmdW5jdGlvbnNcbiAqL1xuQWtpbGkuaXNvbGF0ZVdpbmRvd0Z1bmN0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9fd2luZG93LnNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICB0aGlzLl9fd2luZG93LnNldEludGVydmFsID0gc2V0SW50ZXJ2YWw7XG4gIHRoaXMuX193aW5kb3cuUHJvbWlzZSA9IFByb21pc2U7XG4gIHdpbmRvdy5zZXRUaW1lb3V0ID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuc2V0VGltZW91dCwgMCk7XG4gIHdpbmRvdy5zZXRJbnRlcnZhbCA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LnNldEludGVydmFsLCAwKTtcbiAgd2luZG93LlByb21pc2UuY29uc3RydWN0b3IgPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5Qcm9taXNlLmNvbnN0cnVjdG9yKTtcbiAgd2luZG93LlByb21pc2UucHJvdG90eXBlLnRoZW4gPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS50aGVuLCBbMCwgJ2xhc3QnXSk7XG4gIHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS5jYXRjaCA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LlByb21pc2UucHJvdG90eXBlLmNhdGNoKTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSBldmVudCBsaXN0ZW5lcnNcbiAqL1xuQWtpbGkuaXNvbGF0ZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQgPSB7IHByb3RvdHlwZToge30gfTtcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcjtcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcjtcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmU7XG5cbiAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgZGVsZXRlIHRoaXMuX19ha2lsaUxpc3RlbmVycztcbiAgICByZXR1cm4gQWtpbGkuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgbGV0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVycykge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzID0ge307XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGFyZ3NbMV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5wdXNoKHtcbiAgICAgIGxpbms6IGZuLFxuICAgICAgZm46IGFyZ3NbMV1cbiAgICB9KTtcblxuICAgIHJldHVybiBBa2lsaS5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihuYW1lLCBmbikge1xuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV1baV07XG5cbiAgICAgIGlmIChsaXN0ZW5lci5saW5rID09PSBmbikge1xuICAgICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICBpLS07XG4gICAgICAgIGwtLTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdO1xuICAgIH1cblxuICAgIHJldHVybiBBa2lsaS5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG4vKipcbiAqIFdyYXAgdGhlIGZ1bmN0aW9uIGNhbGxiYWNrIHRvIGFuIGlzb2xhdGUgY29udGV4dFxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd8bnVtYmVyW118c3RyaW5nW119IFtwb3M9XCJsYXN0XCJdXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbkFraWxpLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uID0gZnVuY3Rpb24oZm4sIHBvcyA9ICdsYXN0Jykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGxldCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICFBcnJheS5pc0FycmF5KHBvcykgJiYgKHBvcyA9IFtwb3NdKTtcbiAgICBcbiAgICBmb3IobGV0IGkgPSAwLCBsID0gcG9zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG51bSA9IHBvc1tpXTtcbiAgICAgIGxldCBpbmRleCA9IG51bTtcbiAgICAgIGxldCBjYWxsYmFjayA9IGFyZ3NbbnVtXTtcblxuICAgICAgaWYobnVtID09ICdsYXN0Jykge1xuICAgICAgICBpbmRleCA9IGFyZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgY2FsbGJhY2sgPSBhcmdzW2luZGV4XTtcbiAgICAgIH1cblxuICAgICAgaWYodHlwZW9mIGNhbGxiYWNrICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGFyZ3NbaW5kZXhdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkoY2FsbGJhY2ssIGFyZ3VtZW50cyk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG59O1xuXG4vKipcbiAqIElzb2xhdGUgdGhlIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7b2JqZWN0fSBbY29udGV4dF1cbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqL1xuQWtpbGkuaXNvbGF0ZUZ1bmN0aW9uID0gZnVuY3Rpb24oZm4sIGNvbnRleHQgPSBudWxsKSB7XG4gIGlmIChmbi5fX2FraWxpKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgbGV0IG9GbiA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IHRoaXM7XG5cbiAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICByZXR1cm4gZm4uYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcbiAgICB9KTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob0ZuLCAnX19ha2lsaScsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG5cbiAgcmV0dXJuIG9Gbjtcbn07XG5cbi8qKlxuICogRXJyb3IgaGFuZGxpbmdcbiAqL1xuQWtpbGkuZXJyb3JIYW5kbGluZyA9IGZ1bmN0aW9uKCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgdGhpcy50cmlnZ2VySW5pdChmYWxzZSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBUcmlnZ2VyIGFuIGluaXRpYWxpemF0aW9uIHN0YXR1c1xuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc3RhdHVzXG4gKi9cbkFraWxpLnRyaWdnZXJJbml0ID0gZnVuY3Rpb24oc3RhdHVzKSB7XG4gIEFraWxpLl9faW5pdCA9IHN0YXR1cztcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdha2lsaS1pbml0JywgeyBkZXRhaWw6IHN0YXR1cyB9KSk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIGFwcGxpY2F0aW9uXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW3Jvb3RdXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuQWtpbGkuaW5pdCA9IGZ1bmN0aW9uKHJvb3QpIHtcbiAgdGhpcy5fX3Jvb3QgPSByb290IHx8IGRvY3VtZW50LmJvZHk7XG5cbiAgaWYocm9vdCA9PT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBcImh0bWxcIiBjYW4ndCBiZSB0aGUgcm9vdCBlbGVtZW50YCk7XG4gIH1cbiAgXG4gIGlmKHdpbmRvdy5BS0lMSV9TRVJWRVIpIHtcbiAgICB0aGlzLl9fcm9vdC5yZW1vdmVBdHRyaWJ1dGUoJ3Njb3BlJyk7XG4gICAgdGhpcy5fX3Jvb3QuaW5uZXJIVE1MID0gd2luZG93LkFLSUxJX1NFUlZFUi5odG1sO1xuICB9XG4gIGVsc2Uge1xuICAgIHdpbmRvdy5BS0lMSV9DTElFTlQgPSB7XG4gICAgICBodG1sOiB0aGlzLl9fcm9vdC5pbm5lckhUTUxcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcy5jb21waWxlKHRoaXMuX19yb290KS50aGVuKCgpID0+IHtcbiAgICBpZiAocm91dGVyLl9faW5pdCkge1xuICAgICAgcmV0dXJuIHJvdXRlci5jaGFuZ2VTdGF0ZSgpO1xuICAgIH1cbiAgfSkudGhlbigoKSA9PiB7XG4gICAgdGhpcy50cmlnZ2VySW5pdCh0cnVlKTtcbiAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgIHRoaXMudHJpZ2dlckluaXQoZmFsc2UpO1xuICAgIHRocm93IGVycjtcbiAgfSk7XG59O1xuXG4vKipcbiAqIERlaW5pdGlhbGl6ZSB0aGUgYXBwbGljYXRpb25cbiAqL1xuQWtpbGkuZGVpbml0ID0gZnVuY3Rpb24oKSB7XG4gIGZvciAobGV0IGtleSBpbiB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlKSB7XG4gICAgRWxlbWVudC5wcm90b3R5cGVba2V5XSA9IHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGVba2V5XTtcbiAgfVxuXG4gIGZvciAobGV0IGtleSBpbiB0aGlzLl9fd2luZG93LkFycmF5LnByb3RvdHlwZSkge1xuICAgIEFycmF5LnByb3RvdHlwZVtrZXldID0gdGhpcy5fX3dpbmRvdy5BcnJheS5wcm90b3R5cGVba2V5XTtcbiAgfVxuXG4gIHdpbmRvdy5zZXRUaW1lb3V0ID0gdGhpcy5fX3dpbmRvdy5zZXRUaW1lb3V0O1xuICB3aW5kb3cuc2V0SW50ZXJ2YWwgPSB0aGlzLl9fd2luZG93LnNldEludGVydmFsO1xuICB3aW5kb3cuUHJvbWlzZSA9IHRoaXMuX193aW5kb3cuUHJvbWlzZTtcbn07XG5cbi8qKlxuICogRGVmaW5lIGFsbCBkZWZhdWx0IGNvbXBvbmVudHNcbiAqL1xuQWtpbGkuZGVmaW5lID0gZnVuY3Rpb24oKSB7XG4gIEEuZGVmaW5lKCk7XG4gIEF1ZGlvLmRlZmluZSgpO1xuICBDb250ZW50LmRlZmluZSgpO1xuICBDb21wb25lbnQuZGVmaW5lKCk7XG4gIEVtYmVkLmRlZmluZSgpO1xuICBGb3IuZGVmaW5lKCk7XG4gIEluY2x1ZGUuZGVmaW5lKCk7XG4gIElmcmFtZS5kZWZpbmUoKTtcbiAgSW1hZ2UuZGVmaW5lKCk7XG4gIElucHV0LmRlZmluZSgpO1xuICBJZi5kZWZpbmUoKTtcbiAgT2JqZWN0cy5kZWZpbmUoKTtcbiAgUmFkaW8uZGVmaW5lKCk7XG4gIFJvdXRlLmRlZmluZSgpO1xuICBTZWxlY3QuZGVmaW5lKCk7XG4gIFNvdXJjZS5kZWZpbmUoKTtcbiAgVGV4dGFyZWEuZGVmaW5lKCk7XG4gIFRyYWNrLmRlZmluZSgpO1xuICBWaWRlby5kZWZpbmUoKTtcbn07XG5cbkFraWxpLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbkFraWxpLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcbkFraWxpLlNjb3BlID0gU2NvcGU7XG5Ba2lsaS51dGlscyA9IHV0aWxzO1xuQWtpbGkuY29tcG9uZW50cy5BID0gQTtcbkFraWxpLmNvbXBvbmVudHMuQXVkaW8gPSBBdWRpbztcbkFraWxpLmNvbXBvbmVudHMuQ29udGVudCA9IENvbnRlbnQ7XG5Ba2lsaS5jb21wb25lbnRzLkZvciA9IEZvcjtcbkFraWxpLmNvbXBvbmVudHMuRW1iZWQgPSBFbWJlZDtcbkFraWxpLmNvbXBvbmVudHMuSWYgPSBJZjtcbkFraWxpLmNvbXBvbmVudHMuSW5jbHVkZSA9IEluY2x1ZGU7XG5Ba2lsaS5jb21wb25lbnRzLklucHV0ID0gSW5wdXQ7XG5Ba2lsaS5jb21wb25lbnRzLklmcmFtZSA9IElmcmFtZTtcbkFraWxpLmNvbXBvbmVudHMuSW1hZ2UgPSBJbWFnZTtcbkFraWxpLmNvbXBvbmVudHMuT2JqZWN0ID0gT2JqZWN0cztcbkFraWxpLmNvbXBvbmVudHMuUmFkaW8gPSBSYWRpbztcbkFraWxpLmNvbXBvbmVudHMuUm91dGUgPSBSb3V0ZTtcbkFraWxpLmNvbXBvbmVudHMuU2VsZWN0ID0gU2VsZWN0O1xuQWtpbGkuY29tcG9uZW50cy5Tb3VyY2UgPSBTb3VyY2U7XG5Ba2lsaS5jb21wb25lbnRzLlRleHQgPSBUZXh0O1xuQWtpbGkuY29tcG9uZW50cy5UZXh0YXJlYSA9IFRleHRhcmVhO1xuQWtpbGkuY29tcG9uZW50cy5UcmFjayA9IFRyYWNrO1xuQWtpbGkuY29tcG9uZW50cy5VcmwgPSBVcmw7XG5Ba2lsaS5jb21wb25lbnRzLlZpZGVvID0gVmlkZW87XG5Ba2lsaS5zZXJ2aWNlcy5yZXF1ZXN0ID0gcmVxdWVzdDtcbkFraWxpLnNlcnZpY2VzLnJvdXRlciA9IHJvdXRlcjtcbkFraWxpLnNlcnZpY2VzLnN0b3JlID0gc3RvcmU7XG5cbndpbmRvdy5Ba2lsaSA9IEFraWxpO1xuXG5leHBvcnQgY29uc3QgY29tcG9uZW50cyA9IEFraWxpLmNvbXBvbmVudHM7XG5leHBvcnQgY29uc3Qgc2VydmljZXMgPSBBa2lsaS5zZXJ2aWNlcztcbmV4cG9ydCBkZWZhdWx0IEFraWxpO1xuXG5Ba2lsaS5kZWZpbmUoKTtcbkFraWxpLmVycm9ySGFuZGxpbmcoKTtcbkFraWxpLmlzb2xhdGVFdmVudHMoKTtcbkFraWxpLmlzb2xhdGVBcnJheVByb3RvdHlwZSgpO1xuQWtpbGkuaXNvbGF0ZVdpbmRvd0Z1bmN0aW9ucygpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ha2lsaS5qcyIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyLmpzJ1xuXG5jb25zdCB1dGlscyA9IHt9O1xuXG4vKipcbiAqIENyZWF0ZSBjbGFzcyBhdHRyaWJ1dGUgZnJvbSBhbiBvYmplY3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcInJlZCBhY3RpdmVcIlxuICogdXRpbHMuY2xhc3Moe3JlZDogdHJ1ZSwgYWN0aXZlOiB0cnVlLCBncmVlbjogZmFsc2V9KTtcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5jbGFzcyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBsZXQgY2xhc3NlcyA9IFtdO1xuXG4gIGZvciAobGV0IGsgaW4gb2JqKSB7XG4gICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGxldCB2YWwgPSBvYmpba107XG4gICAgdmFsICYmIGNsYXNzZXMucHVzaChrKTtcbiAgfVxuXG4gIHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIHN0eWxlIGF0dHJpYnV0ZSBmcm9tIGFuIG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwiY29sb3I6cmVkO3dpZHRoOjEwcHhcIlxuICogdXRpbHMuc3R5bGUoe2NvbG9yOiBcInJlZFwiLCBiYWNrZ3JvdW5kOiBmYWxzZSwgd2lkdGg6IFwiMTBweFwifSk7XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuc3R5bGUgPSBmdW5jdGlvbihvYmopIHtcbiAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBsZXQgc3R5bGVzID0gW107XG5cbiAgZm9yIChsZXQgayBpbiBvYmopIHtcbiAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgbGV0IHZhbCA9IG9ialtrXTtcbiAgICB2YWwgJiYgc3R5bGVzLnB1c2goYCR7dGhpcy50b0Rhc2hDYXNlKGspfToke3ZhbH1gKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZXMuam9pbignOycpO1xufTtcblxuLyoqXG4gKiBGaWx0ZXIgYW4gYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMSwgMTFdXG4gKiB1dGlscy5maWx0ZXIoWzEsIDIsIDMsIDExXSwgJzEnKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDF9LCB7eDogMTF9XVxuICogdXRpbHMuZmlsdGVyKFt7eDogMX0sIHt4OiAyfSwge3g6IDN9LCB7eDogMTF9XSwgJzEnLCAneCcpO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDF9LCB7eDogMTF9XVxuICogdXRpbHMuZmlsdGVyKFt7eDogMX0sIHt4OiAyfSwge3g6IDN9LCB7eDogMTF9XSwgJzEnLCBbJ3gnXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMX0sIHt4OiAxMX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxfSwge3g6IDJ9LCB7eDogM30sIHt4OiAxMX1dLCAnMScsIFtbJ3gnXV0pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IHt5OiAxfX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiB7eTogMX19LCB7eDoge3k6IDJ9fV0sICcxJywgW1sneCcsICd5J11dKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OjEsIHk6IDJ9LCB7eDogMiwgeToxfV0gKiBcbiAqIHV0aWxzLmZpbHRlcihbe3g6IDEsIHk6IDJ9LCB7eDogMywgeTogM30sIHt4OiAyLCB5OiAxfV0sICcxJywgWyd4JywgJ3knXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoxLCB5OiAyfSwge3g6IDIsIHk6MX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxLCB5OiAyfSwge3g6IDMsIHk6IDN9LCB7eDogMiwgeTogMX1dLCAnMScsIFtbJ3gnXSwgWyd5J11dKTtcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cHxmdW5jdGlvbn0gaGFuZGxlciAtIHR5cGUgb2YgZmlsdGVyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ1tdfHN0cmluZ30gW2tleXNdIC0gZmlsdGVyIGluIHRoZSBrZXlzIGlmIGFycmF5IGVsZW1lbnRzIGFyZSBvYmplY3RcbiAqIEByZXR1cm5zIHtBcnJheX0gLSByZXR1cm5zIG90aGVyIGFycmF5XG4gKi9cbnV0aWxzLmZpbHRlciA9IGZ1bmN0aW9uIChhcnIsIGhhbmRsZXIsIGtleXMgPSBudWxsKSB7XG4gIGxldCByZXMgPSBbXTtcblxuICBpZiAoa2V5cyAmJiAhQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgIGtleXMgPSBba2V5c107XG4gIH1cblxuICBpZigha2V5cykge1xuICAgIGtleXMgPSBbbnVsbF07XG4gIH1cblxuICBpZiAoIWhhbmRsZXIpIHtcbiAgICByZXR1cm4gWy4uLmFycl07XG4gIH1cblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgaXRlbSA9IGFycltpXTtcbiAgICBsZXQgZmlsdGVyZWQgPSBmYWxzZTtcblxuICAgIGZvcihsZXQgayA9IDAsIGMgPSBrZXlzLmxlbmd0aDsgayA8IGM7IGsrKykge1xuICAgICAgbGV0IGtleSA9IGtleXNba107XG4gICAgICBrZXkgPSAha2V5IHx8IEFycmF5LmlzQXJyYXkoa2V5KT8ga2V5OiBba2V5XTtcbiAgICAgIGxldCB2YWwgPSBrZXk/IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5LCBpdGVtKTogaXRlbTtcblxuICAgICAgaWYgKCF2YWwpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gIFxuICAgICAgdmFsICs9ICcnO1xuICBcbiAgICAgIGlmICgodHlwZW9mIGhhbmRsZXIgPT0gJ2Z1bmN0aW9uJykgJiYgaGFuZGxlcihpdGVtKSkge1xuICAgICAgICBmaWx0ZXJlZCA9IHRydWU7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodmFsLm1hdGNoKGhhbmRsZXIgfHwgJycpKSB7XG4gICAgICAgIGZpbHRlcmVkID0gdHJ1ZTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZmlsdGVyZWQgJiYgcmVzLnB1c2goaXRlbSk7ICAgXG4gIH1cblxuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBPcmRlciBhbiBhcnJheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsxLCAyLCAzXVxuICogdXRpbHMuc29ydChbMywgMiwgMV0sIHRydWUpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFszLCAyLCAxXVxuICogdXRpbHMuc29ydChbMSwgMiwgM10sIGZhbHNlKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCBbWyd4J11dLCBbdHJ1ZV0pO1xuICogdXRpbHMuc29ydChbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV0sIFsneCddLCB0cnVlKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCAneCcpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogM30sIHt4OiAyfSwge3g6IDF9XVxuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sIFtbJ3gnXV0sIFtmYWxzZV0pO1xuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sIFsneCddLCBmYWxzZSk7XG4gKiB1dGlscy5zb3J0KFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XSwgJ3gnLCBmYWxzZSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxLCB5OiAzfSwge3g6IDIsIHk6IDF9LCB7eDoyLCB5OiAyfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAyLCB5OiAyfSwge3g6IDIsIHk6IDF9LCB7eDogMiwgeTogM31dLCBbWyd4J10sIFsneSddXSwgW3RydWUsIHRydWVdKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiB7eTogMX19LCB7eDoge3k6IDJ9fV1cbiAqIHV0aWxzLnNvcnQoW3t4OiB7eTogMn19LCB7eDoge3k6IDF9fV0sIFtbJ3gnLCAneSddXSwgW3RydWVdKTtcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7Ym9vbGVhbnxBcnJheVtdfHN0cmluZ1tdfHN0cmluZ30gW2tleXNdXG4gKiBAcGFyYW0ge2Jvb2xlYW58Ym9vbGVhbltdfSBbb3JkZXJdIC0gcmV2ZXJzZSBvciBub3RcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xudXRpbHMuc29ydCA9IGZ1bmN0aW9uKGFyciwga2V5cyA9IHRydWUsIG9yZGVyID0gW10pIHtcbiAgYXJyID0gWy4uLmFycl07XG5cbiAgaWYgKGtleXMgPT09IHRydWUpIHtcbiAgICBrZXlzID0gW107XG4gICAgb3JkZXIgPSBbdHJ1ZV07XG4gIH1cbiAgZWxzZSBpZiAoa2V5cyA9PT0gZmFsc2UpIHtcbiAgICBrZXlzID0gW107XG4gICAgb3JkZXIgPSBbZmFsc2VdO1xuICB9XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAga2V5cyA9IFtrZXlzXTtcbiAgfVxuXG4gIGlmICghQXJyYXkuaXNBcnJheShvcmRlcikpIHtcbiAgICBvcmRlciA9IFtvcmRlcl07XG4gIH1cblxuICBsZXQgbCA9IGtleXMubGVuZ3RoO1xuXG4gIGFyci5zb3J0KChhLCBiKSA9PiB7XG4gICAgbGV0IGkgPSAwO1xuXG4gICAgY29uc3QgY2hlY2sgPSAoYSwgYiwgcmV2ZXJzZSA9IGZhbHNlKSA9PiB7XG4gICAgICBpZiAoYSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgYSA9IGEuZ2V0VGltZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgYiA9IGIuZ2V0VGltZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYSA+IGIpIHtcbiAgICAgICAgcmV0dXJuIHJldmVyc2U/IC0xOiAxO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoYSA8IGIpIHtcbiAgICAgICAgcmV0dXJuIHJldmVyc2U/IDE6IC0xO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgICB9O1xuXG4gICAgY29uc3QgbmV4dCA9ICgpID0+IHtcbiAgICAgIGlmIChpID49IGwpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG5cbiAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5KSkge1xuICAgICAgICBrZXkgPSBba2V5XTtcbiAgICAgIH1cblxuICAgICAgbGV0IGFWID0gdGhpcy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXksIGEpO1xuICAgICAgbGV0IGJWID0gdGhpcy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXksIGIpO1xuICAgICAgbGV0IHJlcyA9IGNoZWNrKGFWLCBiViwgb3JkZXJbaV0gPT09IGZhbHNlKTtcblxuICAgICAgaWYgKHJlcyAhPT0gMCkge1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfVxuXG4gICAgICBpKys7XG5cbiAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgfTtcblxuICAgIGlmICghbCkge1xuICAgICAgcmV0dXJuIGNoZWNrKGEsIGIsIG9yZGVyW2ldID09PSBmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIHZhbHVlIGlzIGNvbXBvbmVudCBzY29wZSBwcm94eSBvYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmlzU2NvcGVQcm94eSA9IGZ1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gISEodmFsICYmIHR5cGVvZiB2YWwgPT0gJ29iamVjdCcgJiYgdmFsLl9faXNQcm94eSk7XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSB2YWx1ZSBpcyBwbGFpbiBvYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmlzUGxhaW5PYmplY3QgPSBmdW5jdGlvbihvYmopIHtcbiAgcmV0dXJuICEhKG9iaiAmJiB0eXBlb2Ygb2JqID09ICdvYmplY3QnICYmIChvYmouY29uc3RydWN0b3IgPT0gT2JqZWN0IHx8IG9iai5jb25zdHJ1Y3RvciA9PSBBcnJheSkpO1xufTtcblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZVxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW25lc3RlZD10cnVlXSAtIGRlZXAgY29weSBpZiBpcyB0cnVlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFt1bmVudW1lcmFibGU9ZmFsc2VdIC0gaW5jbHVkaW5nIG5vbi1lbnVtZXJhYmxlIHByb3BlcnRpZXNcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5jb3B5ID0gZnVuY3Rpb24odmFsdWUsIG5lc3RlZCA9IHRydWUsIHVuZW51bWVyYWJsZSA9IGZhbHNlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ29iamVjdCcgfHwgIXZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgY29uc3QgbmV4dCA9IChvYmopID0+IHtcbiAgICBvYmogPSB0aGlzLmlzU2NvcGVQcm94eShvYmopPyBvYmouX190YXJnZXQ6IG9iajtcbiAgICBsZXQga2V5cyA9IHVuZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKTogT2JqZWN0LmtleXMob2JqKTtcbiAgICBsZXQgbmV3T2JqID0gQXJyYXkuaXNBcnJheShvYmopPyBbXToge307XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgICBsZXQgdmFsID0gb2JqW2tleV07XG4gICAgICB2YWwgPSB2YWwgJiYgdHlwZW9mIHZhbCA9PSAnb2JqZWN0JyAmJiBuZXN0ZWQ/IG5leHQodmFsKTogdmFsOyAgICAgIFxuICAgICAgXG4gICAgICBpZighb2JqLnByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCB7XG4gICAgICAgICAgLi4uT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSksXG4gICAgICAgICAgdmFsdWU6IHZhbFxuICAgICAgICB9KTtcblxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbmV3T2JqW2tleV0gPSB2YWw7ICBcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3T2JqO1xuICB9XG5cbiAgcmV0dXJuIG5leHQodmFsdWUpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2UgdGhlIHZhbHVlIHRvIGF0dHJpYnV0ZSBhcHByb3ByaWF0ZSBmb3JtYXRcbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBmYWxzZSB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRXZlbnRFbWl0dGVyKSB7XG4gICAgcmV0dXJuICdbb2JqZWN0IEV2ZW50XSc7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZSArICcnO1xufTtcblxuLyoqXG4gKiBDb21wYXJlIHR3byB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0geyp9IGFcbiAqIEBwYXJhbSB7Kn0gYlxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmNvbXBhcmUgPSBmdW5jdGlvbiAoYSwgYiwgb3B0aW9ucyA9IHt9KSB7XG4gIGlmICgoYSBpbnN0YW5jZW9mIERhdGUpICYmIChiIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICByZXR1cm4gYS5nZXRUaW1lKCkgPT09IGIuZ2V0VGltZSgpO1xuICB9XG4gIGVsc2UgaWYgKHR5cGVvZiBhID09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGIgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBhLnRvU3RyaW5nKCkgPT09IGIudG9TdHJpbmcoKTtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiA9PSAnb2JqZWN0Jykge1xuICAgIGlmIChhID09PSBudWxsIHx8IGIgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBhID09PSBiO1xuICAgIH1cblxuICAgIGEgPSB0aGlzLmlzU2NvcGVQcm94eShhKT8gYS5fX3RhcmdldDogYTtcbiAgICBiID0gdGhpcy5pc1Njb3BlUHJveHkoYik/IGIuX190YXJnZXQ6IGI7XG5cbiAgICBjb25zdCBjbGVhclVuZGVmaW5lZCA9ICh2YWwpID0+IHtcbiAgICAgIGxldCBvYmogPSBBcnJheS5pc0FycmF5KHZhbCk/IFtdOiB7fTtcbiAgICAgIE9iamVjdC5rZXlzKHZhbCkuZm9yRWFjaChrZXkgPT4gdmFsW2tleV0gIT09IHVuZGVmaW5lZCAmJiAob2JqW2tleV0gPSB2YWxba2V5XSkpO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBpZihvcHRpb25zLmlnbm9yZVVuZGVmaW5lZCkge1xuICAgICAgYSA9IGNsZWFyVW5kZWZpbmVkKGEpO1xuICAgICAgYiA9IGNsZWFyVW5kZWZpbmVkKGIpO1xuICAgIH1cbiAgICBcbiAgICBpZiAoT2JqZWN0LmtleXMoYSkubGVuZ3RoICE9IE9iamVjdC5rZXlzKGIpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGEgPSB0aGlzLmlzU2NvcGVQcm94eShhKT8gYS5fX3RhcmdldDogYTtcbiAgICBiID0gdGhpcy5pc1Njb3BlUHJveHkoYik/IGIuX190YXJnZXQ6IGI7XG5cbiAgICBmb3IgKGxldCBrIGluIGEpIHtcbiAgICAgIGlmICghYS5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmNvbXBhcmUoYVtrXSwgYltrXSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGEgPT09IGI7XG59O1xuXG4vKipcbiAqIENvbXBhcmUgdGhlIGN1cnJlbnQgdmFsdWUgd2l0aCB0aGUgcHJldmlvdXNcbiAqXG4gKiBAcGFyYW0geyp9IGN1cnJlbnQgLSB0aGUgY3VycmVudCB2YWx1ZVxuICogQHBhcmFtIHsqfSBwcmV2aW91cyAtIHRoZSBwcmV2aW91cyB2YWx1ZVxuICogQHBhcmFtIHsqfSBwcmV2aW91c0NvcHkgLSB0aGUgcHJldmlvdXMgdmFsdWUgY29weVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlID0gZnVuY3Rpb24oY3VycmVudCwgcHJldmlvdXMsIHByZXZpb3VzQ29weSkge1xuICBpZiAoY3VycmVudCAhPT0gcHJldmlvdXMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdGhpcy5jb21wYXJlKGN1cnJlbnQsIHByZXZpb3VzQ29weSk7XG59O1xuXG4vKipcbiAqIEVuY29kZSBodG1sIGVudGl0aWVzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJ5b3UgJmFtcCBtZVwiXG4gKiB1dGlscy5lbmNvZGVIdG1sRW50aXRpZXMoJ3lvdSAmIG1lJyk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmVuY29kZUh0bWxFbnRpdGllcyA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHZhbHVlO1xuICBlbC50ZXh0Q29udGVudCA9IGh0bWw7XG4gIHZhbHVlID0gZWwuaW5uZXJIVE1MO1xuICBlbC5yZW1vdmUoKTtcbiAgZWwgPSBudWxsO1xuICByZXR1cm4gdmFsdWU7XG59O1xuXG4vKipcbiAqIERlY29kZSBodG1sIGVudGl0aWVzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJ5b3UgJiBtZVwiXG4gKiB1dGlscy5kZWNvZGVIdG1sRW50aXRpZXMoJ3lvdSAmYW1wIG1lJyk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmRlY29kZUh0bWxFbnRpdGllcyA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBsZXQgdmFsdWU7XG4gIGVsLmlubmVySFRNTCA9IGh0bWw7XG4gIHZhbHVlID0gZWwudmFsdWU7XG4gIGVsLnJlbW92ZSgpO1xuICBlbCA9IG51bGw7XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHN0cmluZyBmcm9tIGRhc2ggdG8gY2FtZWwgY2FzZSBmb3JtYXRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy50b0NhbWVsQ2FzZSA9IGZ1bmN0aW9uKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcVysoLikvZywgKG0sIGMpID0+IGMudG9VcHBlckNhc2UoKSk7XG59O1xuXG4vKipcbiAqIENhcGl0YWxpemUgdGhlIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmNhcGl0YWxpemUgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RyaW5nIGZyb20gY2FtZWwgdG8gZGFzaCBjYXNlIGZvcm1hdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnRvRGFzaENhc2UgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIChtLCBjKSA9PiBgLSR7Yy50b0xvd2VyQ2FzZSgpfWApO1xufTtcblxuLyoqXG4gKiBHZXQgbmVzdGVkIG9iamVjdCBwcm9wZXJ0eSBieSBhcnJheSBrZXlzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCkge1xuICBsZXQgY3VycmVudDtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoZnVuY3Rpb24obywgaykge1xuICAgIGkrKztcblxuICAgIGlmICh0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIG87XG4gICAgfVxuXG4gICAgaWYgKG9ba10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIChpID09IGxlbmd0aCkgJiYgKGN1cnJlbnQgPSBvW2tdKTtcbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gY3VycmVudDtcbn07XG5cbi8qKlxuICogQ2hlY2sgbmVzdGVkIG9iamVjdHMgdHJlZSBoYXMgcHJvcGVydHkgb3Igbm90XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgdHJ1ZVxuICogdXRpbHMuaGFzUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCkge1xuICBsZXQgaGFzID0gZmFsc2U7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKGZ1bmN0aW9uKG8sIGspIHtcbiAgICBpKys7XG5cbiAgICBpZiAodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiAhIW87XG4gICAgfVxuXG4gICAgaWYgKCFvLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgKGkgPT0gbGVuZ3RoKSAmJiAoaGFzID0gby5oYXNPd25Qcm9wZXJ0eShrKSk7XG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIGhhcztcbn07XG5cbi8qKlxuICogU2V0IG5lc3RlZCBvYmplY3RzIHRyZWUgcHJvcGVydHlcbiAqIFJldHVybnMgY2hhbmdlZCBwcm9wZXJ0eSBvYmplY3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB7eTogNn1cbiAqIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19LCAobGFzdCwgdmFsKSA9PiBsYXN0PyA2OiAodmFsIHx8IHt9KSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCwgZm4pIHtcbiAgbGV0IGN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKGZ1bmN0aW9uKG8sIGspIHtcbiAgICBpKys7XG5cbiAgICBpZiAodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIHJldHVybiBjdXJyZW50ID0gb1trXSA9IGZuKGkgPT0gbGVuZ3RoKTtcbiAgICB9XG5cbiAgICBvW2tdID0gZm4oaSA9PSBsZW5ndGgsIG9ba10pO1xuICAgIGN1cnJlbnQgPSBvO1xuXG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIGN1cnJlbnQ7XG59O1xuXG4vKipcbiAqXG4gKiBEZWxldGUgcHJvcGVydHkgZnJvbSBuZXN0ZWQgb2JqZWN0cyB0cmVlXG4gKiBSZXR1cm5zIGRlbGV0ZWQgcHJvcGVydHkgdmFsdWVcbiAqIFlvdSBjYW4gY2FuY2VsIGRlbGV0aW5nIGlmIHdpbGwgcmV0dXJuIGZhbHNlIGluIHRoZSBjYWxsYmFjayBmdW5jdGlvblxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIDVcbiAqIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19KTtcbiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyA1XG4gKiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSwgdmFsID0+IHZhbCAhPSA1KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbZm5dXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QsIGZuKSB7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IHZhbHVlO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoZnVuY3Rpb24obywgaykge1xuICAgIGkrKztcblxuICAgIGlmICh0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghby5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGlmIChpID09IGxlbmd0aCkge1xuICAgICAgdmFsdWUgPSBvW2tdO1xuXG4gICAgICBpZiAoIWZuIHx8IGZuKHZhbHVlKSkge1xuICAgICAgICBkZWxldGUgb1trXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgdGFyZ2V0IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cblxudXRpbHMuZ2V0RW51bWVyYWJsZVByb3BlcnR5VGFyZ2V0ID0gZnVuY3Rpb24odGFyZ2V0LCBrZXkpIHtcbiAgY29uc3QgY2hlY2sgPSAob2JqKSA9PiB7XG4gICAgaWYgKG9iai5wcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGxldCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuXG4gICAgaWYgKCFwcm90bykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoZWNrKHByb3RvKTtcbiAgfTtcblxuICByZXR1cm4gY2hlY2sodGFyZ2V0KTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBvd24gcHJvcGVydHkgdGFyZ2V0IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnV0aWxzLmdldE93blByb3BlcnR5VGFyZ2V0ID0gZnVuY3Rpb24odGFyZ2V0LCBrZXkpIHtcbiAgY29uc3QgY2hlY2sgPSAob2JqKSA9PiB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGxldCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuXG4gICAgaWYgKCFwcm90bykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoZWNrKHByb3RvKTtcbiAgfTtcblxuICByZXR1cm4gY2hlY2sodGFyZ2V0KTtcbn07XG5cbi8qKlxuICogR2VuZXJhdGUgcmFuZG9tIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuY3JlYXRlUmFuZG9tU3RyaW5nID0gZnVuY3Rpb24obGVuZ3RoID0gMTYsIGZuID0gbnVsbCkge1xuICBsZXQgc3RyID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIGxlbmd0aCArIDIpO1xuICBsZXQgdmFsID0gJyc7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBzdHIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjY2KSB7XG4gICAgICB2YWwgKz0gc3RyW2ldLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFsICs9IHN0cltpXTtcbiAgICB9XG4gIH1cblxuICBpZiAoZm4gJiYgZm4odmFsKSkge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZVJhbmRvbVN0cmluZyhsZW5ndGgsIGZuKTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1dGlscztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XHJcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcmwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBtYXRjaGVzID0gJ1t1cmxdJztcclxuXHJcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xyXG4gICAgc3VwZXIoLi4uYXJncyk7XHJcbiAgICB0aGlzLnVybEF0dHJpYnV0ZSA9ICdzcmMnO1xyXG4gIH1cclxuXHJcbiAgY29tcGlsZWQoKSB7XHJcbiAgICB0aGlzLmF0dHIoJ3VybCcsIHRoaXMuc2V0VXJsKTtcclxuICB9XHJcblxyXG4gIHNldFVybCh1cmwpIHtcclxuICAgIHRoaXMuYXR0cnNbdGhpcy51cmxBdHRyaWJ1dGVdID0gdXJsO1xyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3VybC5qcyIsImltcG9ydCBBa2lsaSBmcm9tICcuL2FraWxpLmpzJztcbmltcG9ydCBTY29wZSBmcm9tICcuL3Njb3BlLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zZXJ2aWNlcy9zdG9yZS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5cbmV4cG9ydCBjb25zdCBldmFsdWF0aW9uUmVnZXggPSAvXFwkeygoKD8hXFwkeykuKSopfS87XG5leHBvcnQgY29uc3QgZXZhbHVhdGlvblJlZ2V4R2xvYmFsID0gbmV3IFJlZ0V4cChldmFsdWF0aW9uUmVnZXguc291cmNlLCBcImdcIik7XG5leHBvcnQgY29uc3Qgc3lzdGVtQXR0cmlidXRlcyA9IFsnY29tcG9uZW50JywgJ3Njb3BlJ107XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFtdO1xuICBzdGF0aWMgZXZlbnRzID0gW107XG4gIHN0YXRpYyBjb250cm9sQXR0cmlidXRlcyA9IGZhbHNlO1xuICBzdGF0aWMgc2F2ZUF0dHJpYnV0ZVByb3h5SW4gPSBmYWxzZTtcbiAgc3RhdGljIHNhdmVBdHRyaWJ1dGVQcm94eU91dCA9IGZhbHNlO1xuICBzdGF0aWMgdHJhbnNwYXJlbnQgPSBmYWxzZTtcbiAgc3RhdGljIHRlbXBsYXRlID0gJyc7XG4gIHN0YXRpYyB0ZW1wbGF0ZVVybCA9ICcnO1xuICBzdGF0aWMgc2NvcGUgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0byBkZWZpbmUgdGhlIGNvbXBvbmVudFxuICAgKi9cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2NvbXBvbmVudCcsIENvbXBvbmVudCk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgdGhlIGV4cHJlc3Npb25cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4cHJlc3Npb25cbiAgICogQHBhcmFtIHtvYmplY3R9IFtnbG9iYWxzXVxuICAgKi9cbiAgc3RhdGljIHBhcnNlKGNvbnRleHQsIGV4cHJlc3Npb24sIGdsb2JhbHMgPSB7fSkge1xuICAgIGdsb2JhbHMgPSB7IHV0aWxzLCAuLi5Ba2lsaS5vcHRpb25zLmdsb2JhbHMsIC4uLmdsb2JhbHN9O1xuICAgIGNvbnN0IGtleXMgPSBbXTtcbiAgICBjb25zdCB2YXJzID0gW107XG4gICAgY29uc3QgZXhwcyA9IFtdO1xuICAgIGNvbnN0IHN5bWJvbHMgPSBbJ1wiJywgXCInXCIsICdgJ107ICBcbiAgICBjb25zdCBhcnIgPSBleHByZXNzaW9uLnNwbGl0KCcnKTtcbiAgICBsZXQgb3BlbiA9ICcnOyAgXG4gICAgbGV0IGxhc3QgPSAnJztcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgdmFsID0gYXJyW2ldO1xuICAgICAgbGV0IGluZGV4ID0gc3ltYm9scy5pbmRleE9mKHZhbCk7ICAgICAgXG5cbiAgICAgIGlmKGluZGV4ID4gLTEgJiYgKCFvcGVuIHx8IG9wZW4gPT0gdmFsKSkge1xuICAgICAgICAhb3Blbj8gb3BlbiA9IHN5bWJvbHNbaW5kZXhdOiBvcGVuID0gJyc7XG4gICAgICB9XG5cbiAgICAgIGlmKHZhbCA9PSAnOycgJiYgIW9wZW4pIHtcbiAgICAgICAgbGFzdC50cmltKCkgJiYgZXhwcy5wdXNoKGxhc3QpO1xuICAgICAgICBsYXN0ID0gJyc7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsYXN0ICs9IHZhbDtcbiAgICB9XG5cbiAgICBsYXN0LnRyaW0oKSAmJiBleHBzLnB1c2gobGFzdCk7XG4gICAgZXhwc1tleHBzLmxlbmd0aCAtIDFdID0gYHJldHVybiAke2V4cHNbZXhwcy5sZW5ndGggLSAxXX1gO1xuXG4gICAgZm9yKGxldCBrZXkgaW4gZ2xvYmFscykge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICB2YXJzLnB1c2goZ2xvYmFsc1trZXldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKC4uLmtleXMsIGAke2V4cHMuam9pbignOyAnKX1gKS5hcHBseShjb250ZXh0LCB2YXJzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVsLCBzY29wZSA9IHt9KSB7XG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19pc0NvbXBpbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19wcmV2ZW50ID0gZmFsc2U7XG4gICAgdGhpcy5fX2JpbmRpbmdzID0ge307XG4gICAgdGhpcy5fX2V2YWx1YXRpbmdFdmVudCA9IG51bGw7XG4gICAgdGhpcy5fX3JlY29tcGlsaW5nID0gbnVsbDtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0ge307XG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IHt9O1xuICAgIHRoaXMuX19kaXNhYmxlQXR0clRyaWdnZXJpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9fY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLl9fcGFyZW50ID0gbnVsbDtcbiAgICB0aGlzLl9fcGFyZW50cyA9IFtdO1xuICAgIHRoaXMuX19hdHRycyA9IHt9O1xuICAgIHRoaXMuX19hdHRyTGlua3MgPSB7fTtcbiAgICB0aGlzLl9fc3RvcmVMaW5rcyA9IHt9O1xuICAgIHRoaXMuX19hdHRyaWJ1dGVPZiA9IG51bGw7XG4gICAgdGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQgPSB0aGlzO1xuICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICB0aGlzLmVsID0gZWw7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIG9uIHRoZSByZWNvbXBpbGF0aW9uXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcmVjb21waWxlKCkge1xuICAgIHRoaXMuX19pc01vdW50ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9faXNDb21waWxlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50Ll9fZGlzYWJsZVByb3h5ID0ge307XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IHt9O1xuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IHt9O1xuICAgIHRoaXMuX19zZXRFdmVudHMoKTtcbiAgICB0aGlzLl9fc2V0UGFyZW50cygpO1xuICAgIHRoaXMuX19zZXRCb29sZWFuQXR0cmlidXRlcygpO1xuICAgIHRoaXMuX19kZWZpbmVBdHRyaWJ1dGVzKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIG9uIHRoZSBjcmVhdGlvblxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZSgpIHtcbiAgICB0aGlzLmVsLl9fYWtpbGkgPSB0aGlzO1xuICAgIHRoaXMuX19pbml0aWFsaXplKCk7XG4gICAgdGhpcy5fX3NldEV2ZW50cygpO1xuICAgIHRoaXMuX19zZXRQYXJlbnRzKCk7XG4gICAgdGhpcy5fX3NldEJvb2xlYW5BdHRyaWJ1dGVzKCk7XG4gICAgdGhpcy5fX2RlZmluZUF0dHJpYnV0ZXMoKTtcbiAgICBBa2lsaS5pc29sYXRlKCgpID0+IHRoaXMuY3JlYXRlZCh0aGlzLmF0dHJzKSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIG9uIHRoZSBjb21waWxhdGlvblxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgX19jb21waWxlKCkge1xuICAgIGxldCBjb250cm9sID0gdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzIHx8ICF0aGlzLl9fZXZhbHVhdGVQYXJlbnQ7XG4gICAgbGV0IHAgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB0aGlzLl9fYXR0cmlidXRlT2YgPSBjb250cm9sPyB0aGlzOiB0aGlzLl9fZXZhbHVhdGVQYXJlbnQuX19ha2lsaTtcblxuICAgIGlmICghdGhpcy5fX3JlY29tcGlsaW5nIHx8IHRoaXMuX19jb21waWxpbmcubmV3UGFyZW50IHx8IHRoaXMuX19jb250cm9sQXR0cmlidXRlcykge1xuICAgICAgdGhpcy5fX2ludGVycG9sYXRlQXR0cmlidXRlcyh0aGlzLmVsLCB0aGlzLl9fYXR0cmlidXRlT2YpO1xuICAgIH1cblxuICAgIGNvbnN0IGludGVycG9sYXRlID0gKGNoaWxkcmVuLCBwYXJlbnQpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PSAzKSB7XG4gICAgICAgICAgdGhpcy5fX2luaXRpYWxpemVOb2RlKGNoaWxkLCBwYXJlbnQpO1xuXG4gICAgICAgICAgY2hpbGQubm9kZVZhbHVlID0gdGhpcy5fX2V2YWx1YXRlKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaGlsZC5ub2RlVHlwZSA9PSAxICYmICFjaGlsZC5fX2FraWxpKSB7XG4gICAgICAgICAgdGhpcy5fX2ludGVycG9sYXRlQXR0cmlidXRlcyhjaGlsZCk7XG4gICAgICAgICAgaW50ZXJwb2xhdGUoY2hpbGQuY2hpbGROb2RlcywgY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGludGVycG9sYXRlKHRoaXMuZWwuY2hpbGROb2RlcywgdGhpcy5lbCk7XG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IHRydWU7XG4gICAgbGV0IHJlcztcblxuICAgIGlmICghdGhpcy5fX3JlY29tcGlsaW5nKSB7XG4gICAgICByZXMgPSBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgdGhpcy5hdHRycy5vbkNvbXBpbGVkICYmIHRoaXMuYXR0cnMub25Db21waWxlZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGlsZWQoKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkge1xuICAgICAgICBwID0gcmVxdWVzdC5nZXQodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLl9fY29udGVudDtcbiAgICAgICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCByZXMuZGF0YSk7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX19jb250ZW50O1xuICAgICAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgdGhpcy5hdHRycy5vblJlY29tcGlsZWQgJiYgdGhpcy5hdHRycy5vblJlY29tcGlsZWQudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICAgIHRoaXMucmVjb21waWxlZCgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fX2lzQ29tcGlsZWQgPSB0cnVlO1xuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IG51bGw7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IG51bGw7XG5cbiAgICByZXR1cm4gcC50aGVuKCgpID0+IHJlcyk7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZSB0aGUgY29tcG9uZW50XG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBfX3Jlc29sdmUoKSB7XG4gICAgaWYgKHRoaXMuX19yZWNvbXBpbGluZykge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuYXR0cnMub25SZXNvbHZlZCAmJiB0aGlzLmF0dHJzLm9uUmVzb2x2ZWQudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnJlc29sdmVkKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnQgb2YgdGhlIHtAc2VlIENvbXBvbmVudCNfX2NvbXBpbGV9IG1ldGhvZFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemUoKSB7XG4gICAgbGV0IHBhcmVudCA9IEFraWxpLmdldEFraWxpUGFyZW50cyh0aGlzLmVsLCBmYWxzZSk7XG4gICAgbGV0IFNjb3BlID0gdGhpcy5jb25zdHJ1Y3Rvci5zY29wZSB8fCBBa2lsaS5TY29wZTtcbiAgICBsZXQgc2NvcGU7XG4gICAgbGV0IGlzUm9vdCA9IEFraWxpLl9fcm9vdCA9PT0gdGhpcy5lbDtcblxuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIHNjb3BlID0gbmV3IFNjb3BlKHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdzY29wZScpIHx8IEFraWxpLmNyZWF0ZVNjb3BlTmFtZSgpLCB0aGlzLmVsLCB0aGlzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzY29wZSA9IG5ldyBTY29wZShpc1Jvb3Q/ICdyb290JzogQWtpbGkuY3JlYXRlU2NvcGVOYW1lKCksIHRoaXMuZWwsIHRoaXMpO1xuICAgICAgaXNSb290ICYmIChBa2lsaS5yb290ID0gdGhpcyk7XG4gICAgfVxuXG4gICAgbGV0IF9fc2NvcGUgPSBzY29wZTtcbiAgICBsZXQgX3Njb3BlID0gT2JqZWN0LmFzc2lnbihzY29wZSwgdGhpcy5zY29wZSk7XG4gICAgbGV0IGNvbnRyb2xBdHRyaWJ1dGVzID0gdGhpcy5jb25zdHJ1Y3Rvci5jb250cm9sQXR0cmlidXRlcztcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5jb25zdHJ1Y3Rvci5ldmVudHM7XG5cbiAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZSkge1xuICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgdGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGVVcmwpIHtcbiAgICAgIHRoaXMuX19jb250ZW50ID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIH1cblxuICAgIHRoaXMuX19zY29wZSA9IF9fc2NvcGU7XG4gICAgdGhpcy5fX2V2ZW50cyA9IGV2ZW50cztcbiAgICB0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMgPSBjb250cm9sQXR0cmlidXRlcztcbiAgICB0aGlzLl9fc2F2ZUF0dHJpYnV0ZVByb3h5SW4gPSB0aGlzLmNvbnN0cnVjdG9yLnNhdmVBdHRyaWJ1dGVQcm94eUluO1xuICAgIHRoaXMuX19zYXZlQXR0cmlidXRlUHJveHlPdXQgPSB0aGlzLmNvbnN0cnVjdG9yLnNhdmVBdHRyaWJ1dGVQcm94eU91dDtcblxuICAgIEFraWxpLmFkZFNjb3BlKHNjb3BlKTtcbiAgICB0aGlzLnNjb3BlID0gdGhpcy5fX25lc3RlZE9ic2VydmUoX3Njb3BlLCBbXSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGJvb2xlYW4gYXR0cmlidXRlc1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldEJvb2xlYW5BdHRyaWJ1dGVzKCkge1xuICAgIHRoaXMuYm9vbGVhbkF0dHJpYnV0ZXMgPSBbXS5jb25jYXQoQWtpbGkuaHRtbEJvb2xlYW5BdHRyaWJ1dGVzLCB0aGlzLmNvbnN0cnVjdG9yLmJvb2xlYW5BdHRyaWJ1dGVzKTtcblxuICAgIGNvbnN0IHNldEF0dHIgPSAoZWwpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBhdHRycyA9IGVsLmF0dHJpYnV0ZXMsIGwgPSBhdHRycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IG5vZGUgPSBhdHRyc1tpXTtcblxuICAgICAgICBpZiAodGhpcy5ib29sZWFuQXR0cmlidXRlcy5pbmRleE9mKG5vZGUubm9kZU5hbWUpICE9IC0xKSB7XG4gICAgICAgICAgaWYgKGVsLmhhc0F0dHJpYnV0ZShgYm9vbGVhbi0ke25vZGUubm9kZU5hbWV9YCkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShgYm9vbGVhbi0ke25vZGUubm9kZU5hbWV9YCwgZWwuZ2V0QXR0cmlidXRlKG5vZGUubm9kZU5hbWUpIHx8IG5vZGUubm9kZU5hbWUpO1xuICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShub2RlLm5vZGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGVsLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBlbC5jaGlsZHJlbltpXTtcblxuICAgICAgICBpZiAoIWNoaWxkLl9fYWtpbGkpIHtcbiAgICAgICAgICBzZXRBdHRyKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBzZXRBdHRyKHRoaXMuZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBldmVudHNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXRFdmVudHMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLl9fZXZlbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGV2ID0gdGhpcy5fX2V2ZW50c1tpXTtcbiAgICAgICEvXm9uLS9pLnRlc3QoZXYpICYmIChldiA9ICdvbi0nICsgZXYpO1xuXG4gICAgICBpZiAoIXRoaXMuZWwuaGFzQXR0cmlidXRlKGV2KSkge1xuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZShldiwgJycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgY29tcG9uZW50IHBhcmVudHNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXRQYXJlbnRzKCkge1xuICAgIGxldCBwYXJlbnRzID0gQWtpbGkuZ2V0QWtpbGlQYXJlbnRzKHRoaXMuZWwpO1xuXG4gICAgaWYgKCFwYXJlbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBuZXdQYXJlbnQgPSB0aGlzLl9fcGFyZW50ICE9PSBwYXJlbnRzWzBdO1xuICAgIGxldCBldmFsdWF0ZVBhcmVudCA9IG51bGw7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHBhcmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcGFyZW50ID0gcGFyZW50c1tpXTtcblxuICAgICAgaWYgKCFwYXJlbnQuX19ha2lsaS5jb25zdHJ1Y3Rvci50cmFuc3BhcmVudCkge1xuICAgICAgICBldmFsdWF0ZVBhcmVudCA9IHBhcmVudDtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9fY29tcGlsaW5nLm5ld1BhcmVudCA9IG5ld1BhcmVudDtcbiAgICBuZXdQYXJlbnQgJiYgdGhpcy5fX2RldGFjaCgpO1xuXG4gICAgaWYgKHRoaXMuY29uc3RydWN0b3IudHJhbnNwYXJlbnQpIHtcbiAgICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50ID0gZXZhbHVhdGVQYXJlbnQuX19ha2lsaTtcbiAgICB9XG5cbiAgICB0aGlzLl9fZXZhbHVhdGVQYXJlbnQgPSBldmFsdWF0ZVBhcmVudDtcbiAgICB0aGlzLl9fcGFyZW50ID0gcGFyZW50c1swXTtcbiAgICB0aGlzLl9fcGFyZW50cyA9IHBhcmVudHM7XG4gICAgdGhpcy5zY29wZS5fX3BhcmVudCA9IHRoaXMuX19ldmFsdWF0ZVBhcmVudC5fX2FraWxpLnNjb3BlO1xuICAgICF0aGlzLl9fcmVjb21waWxpbmcgJiYgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fYWRkQ2hpbGQodGhpcy5lbCk7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMuc2NvcGUsIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX3Njb3BlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgY2hpbGQgZWxlbWVudCB0byB0aGUgbGlzdFxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2FkZENoaWxkKGVsKSB7XG4gICAgdGhpcy5fX2NoaWxkcmVuLnB1c2goZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwbGljZSBjaGlsZCBmcm9tIHRoZSBsaXN0XG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc3BsaWNlQ2hpbGQoZWwpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuX19jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuX19jaGlsZHJlbltpXTtcblxuICAgICAgaWYgKGNoaWxkID09PSBlbCkge1xuICAgICAgICB0aGlzLl9fY2hpbGRyZW4uc3BsaWNlKGksIDEpO1xuICAgICAgICBpLS07XG4gICAgICAgIGwtLTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogWW91IGNhbiBjaGFuZ2UgZXhwcmVzc2lvbiBiZWZvcmUgcGFyc2luZyBoZXJlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBleHByZXNzaW9uXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldFBhcnNlZEV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIG5vZGUgaGFzIGFueSBwcm9wZXJ0eSBjaGFuZ2VzIG9yIG5vdFxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2hlY2tFdmFsdWF0aW9uKG5vZGUpIHtcbiAgICBpZiAoIU9iamVjdC5rZXlzKG5vZGUuX19wcm9wZXJ0aWVzKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGsgaW4gbm9kZS5fX3Byb3BlcnRpZXMpIHtcbiAgICAgIGlmICghbm9kZS5fX3Byb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGxldCBwcm9wID0gbm9kZS5fX3Byb3BlcnRpZXNba107XG4gICAgICBsZXQgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhwcm9wLmtleXMsIHByb3AuY29tcG9uZW50Ll9fc2NvcGUpO1xuXG4gICAgICBpZiAoIXV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlKHZhbHVlLCBwcm9wLnZhbHVlLCBwcm9wLmNvcHkpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgQ2hlY2sgbm9kZSBoYXMgY2hhbmdlZCBvbiB0aGUgY2VydGFpbiBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2luZyhub2RlLCBrZXlzLCB2YWx1ZSkge1xuICAgIGxldCBwcm9wID0gdGhpcy5fX2dldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKTtcbiAgICBcbiAgICBpZiAoIXByb3ApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiAhdXRpbHMuY29tcGFyZVByZXZpb3VzVmFsdWUodmFsdWUsIHByb3AudmFsdWUsIHByb3AuY29weSk7XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgbm9kZSBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZShub2RlKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGxldCBhdHRyaWJ1dGVWYWx1ZTtcbiAgICBsZXQgZXhwcmVzc2lvbjtcblxuICAgIGlmIChub2RlLl9fY29tcG9uZW50LnBhcmVudHMoKGNvbSkgPT4gY29tLl9fcHJldmVudCkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbm9kZS5fX2V4cHJlc3Npb247XG4gICAgfVxuXG4gICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKSAmJiBub2RlLl9fY29tcG9uZW50Ll9fcHJldmVudCkge1xuICAgICAgcmV0dXJuIG5vZGUuX19leHByZXNzaW9uO1xuICAgIH1cbiAgICBcbiAgICBsZXQgcmVzID0gbm9kZS5fX2V4cHJlc3Npb24ucmVwbGFjZShldmFsdWF0aW9uUmVnZXhHbG9iYWwsIChtLCBkKSA9PiB7XG4gICAgICBjb3VudGVyKys7XG4gICAgICBsZXQgZXZhbHVhdGU7XG4gICAgICBsZXQgZXZhbHVhdGlvbiA9IFtdO1xuICAgICAgbGV0IGV4aXN0aW5nQmluZGluZ3MgPSB7fTtcbiAgICAgIGxldCBwYXJzZVZhbHVlID0gbm9kZS5fX2NvbXBvbmVudC5fX2dldFBhcnNlZEV4cHJlc3Npb24oZCk7XG4gICAgICBBa2lsaS5fX2V2YWx1YXRpb24gPSB7IG5vZGU6IG5vZGUsIGxpc3Q6IFtdLCBjb21wb25lbnQ6IG5vZGUuX19jb21wb25lbnQgfTtcbiAgICAgIFxuICAgICAgdHJ5IHtcbiAgICAgICAgZXZhbHVhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLnBhcnNlKHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50LnNjb3BlLCBwYXJzZVZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuXG4gICAgICBpZihBa2lsaS5fX2V2YWx1YXRpb24pIHtcbiAgICAgICAgZXZhbHVhdGlvbiA9IEFraWxpLl9fZXZhbHVhdGlvbi5saXN0O1xuICAgICAgICBBa2lsaS5fX2V2YWx1YXRpb24ubGlzdCA9IG51bGw7XG4gICAgICAgIEFraWxpLl9fZXZhbHVhdGlvbiA9IG51bGw7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGZvciAobGV0IGkgPSBldmFsdWF0aW9uLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGxldCBkYXRhID0gZXZhbHVhdGlvbltpXTtcbiAgICAgICAgbGV0IGhhc2ggPSB0aGlzLl9fY3JlYXRlS2V5c0hhc2goZGF0YS5rZXlzKTtcbiAgICAgICBcbiAgICAgICAgaWYgKGRhdGEubm90QmluZGluZykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nQmluZGluZ3NbaGFzaF0pIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwYXJlbnRWYWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGRhdGEucGFyZW50cywgZGF0YS5jb21wb25lbnQuX19zY29wZSk7XG4gICAgICAgIGxldCBldmFsQ29tcG9uZW50ID0gbm9kZS5fX2F0dHJpYnV0ZU9mIHx8IG5vZGUuX19jb21wb25lbnQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIGlmIChcbiAgICAgICAgICB1dGlscy5pc1Njb3BlUHJveHkocGFyZW50VmFsdWUpICYmIFxuICAgICAgICAgIGRhdGEuY29tcG9uZW50ICE9PSBldmFsQ29tcG9uZW50Ll9fZXZhbHVhdGlvbkNvbXBvbmVudCAmJiBcbiAgICAgICAgICBkYXRhLmNvbXBvbmVudCA9PT0gZGF0YS5yZWFsQ29tcG9uZW50XG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9ICAgXG5cbiAgICAgICAgbGV0IGJpbmQgPSBkYXRhLmNvbXBvbmVudC5fX2dldEJvdW5kTm9kZShkYXRhLmtleXMsIG5vZGUpO1xuICAgICAgICBsZXQgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhkYXRhLmtleXMsIGRhdGEuY29tcG9uZW50Ll9fc2NvcGUpO1xuXG4gICAgICAgIGlmICghYmluZCkge1xuICAgICAgICAgIGRhdGEuY29tcG9uZW50Ll9fYmluZChkYXRhLmtleXMsIHsgbm9kZTogbm9kZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEuY29tcG9uZW50Ll9fc2V0Tm9kZVByb3BlcnR5KG5vZGUsIGRhdGEua2V5cywgdmFsdWUsIGRhdGEuZXZhbHVhdGVkKTtcbiAgICAgICAgZXhpc3RpbmdCaW5kaW5nc1toYXNoXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGV4aXN0aW5nQmluZGluZ3MgPSBudWxsO1xuICAgICAgZXZhbHVhdGlvbiA9IG51bGw7XG5cbiAgICAgIGlmIChub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpIHtcbiAgICAgICAgZXhwcmVzc2lvbiA9IG07XG4gICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gZXZhbHVhdGU7XG4gICAgICAgIHJldHVybiB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUoZXZhbHVhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGV2YWx1YXRlID09ICdvYmplY3QnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGV2YWx1YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlKSB7XG4gICAgICAgICAgcmV0dXJuIGV2YWx1YXRlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBldmFsdWF0ZTtcbiAgICB9KTtcblxuICAgIGlmIChub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpIHtcbiAgICAgIGxldCB2YWx1ZSA9IHJlcztcbiAgICAgIGxldCBpc0Jvb2xlYW5BdHRyaWJ1dGUgPSBmYWxzZTtcblxuICAgICAgaWYgKGNvdW50ZXIpIHtcbiAgICAgICAgbm9kZS5fX2hhc0JpbmRpbmdzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvdW50ZXIgPT0gMSAmJiBleHByZXNzaW9uICYmIG5vZGUuX19leHByZXNzaW9uID09IGV4cHJlc3Npb24pIHtcbiAgICAgICAgdmFsdWUgPSBhdHRyaWJ1dGVWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IGNsZWFyQXR0cmlidXRlID0gbm9kZS5ub2RlTmFtZS5yZXBsYWNlKC9eYm9vbGVhbi0oLispL2ksICckMScpO1xuICAgICAgbGV0IGNhbWVsQXR0cmlidXRlID0gdXRpbHMudG9DYW1lbENhc2UoY2xlYXJBdHRyaWJ1dGUpO1xuXG4gICAgICBpZiAoY2xlYXJBdHRyaWJ1dGUgIT0gbm9kZS5ub2RlTmFtZSkge1xuICAgICAgICBpc0Jvb2xlYW5BdHRyaWJ1dGUgPSB0cnVlO1xuICAgICAgICB2YWx1ZSA9ICEhdmFsdWU7XG4gICAgICB9ICAgICAgICAgIFxuXG4gICAgICBpZiAobm9kZS5fX2F0dHJpYnV0ZU9uKSB7ICAgICAgICBcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IG5vZGUuX19hdHRyaWJ1dGVPbjtcbiAgICAgICAgIWNvbXBvbmVudC5fX3NhdmVBdHRyaWJ1dGVQcm94eUluICYmICh2YWx1ZSA9IHV0aWxzLmNvcHkodmFsdWUpKTtcbiAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IHRydWU7XG4gICAgICAgIGNvbXBvbmVudC5hdHRyc1tjYW1lbEF0dHJpYnV0ZV0gPSB2YWx1ZTtcbiAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChjb21wb25lbnQuX19pc0NvbXBpbGVkKSB7XG4gICAgICAgICAgY29tcG9uZW50Ll9fYXR0clRyaWdnZXJCeU5hbWUoY2FtZWxBdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaXNCb29sZWFuQXR0cmlidXRlKSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gbm9kZS5fX2VsZW1lbnQ7XG4gICAgICAgIHZhbHVlPyBlbGVtZW50LnNldEF0dHJpYnV0ZShjYW1lbEF0dHJpYnV0ZSwgJ3RydWUnKTogZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoY2FtZWxBdHRyaWJ1dGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvKipcbiAgICogTmVzdGVkIGV2YWx1YXRpb24gYnkga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3dpdGhvdXRQYXJlbnRzPWZhbHNlXSAtIGlmIHRydWUgZXZhbHVhdGlvbiB3aWxsIGJlIG9ubHkgZm9yIHRoZSBjdXJyZW50IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZU5lc3RlZChrZXlzLCB3aXRob3V0UGFyZW50cyA9IGZhbHNlKSB7XG4gICAgbGV0IHNjb3BlID0gdGhpcy5fX3Njb3BlO1xuICAgIGxldCBwcm9wcyA9IFtdOyAgICBcbiAgICBcbiAgICBpZiAoIXdpdGhvdXRQYXJlbnRzKSB7XG4gICAgICBsZXQgbGFzdFByb3BzID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgICAgIGxldCB2YWx1ZTtcblxuICAgICAgICBsYXN0UHJvcHMgPSBbLi4ubGFzdFByb3BzLCBrZXldO1xuICAgICAgICB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGxhc3RQcm9wcywgc2NvcGUpO1xuICAgICAgICBwcm9wcy5wdXNoKHsga2V5czogbGFzdFByb3BzLCB2YWx1ZTogdmFsdWV9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBwcm9wcy5wdXNoKHsga2V5czoga2V5cywgdmFsdWU6IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHNjb3BlKX0pO1xuICAgIH1cblxuICAgIGxldCBwcm9wc0xlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICAgIGNvbnN0IGVsRXZhbHVhdGUgPSAoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgY29tcG9uZW50ID0gZWxlbWVudC5fX2FraWxpOyAgICAgXG5cbiAgICAgIGZvciAobGV0IG0gPSAwOyBtIDwgcHJvcHNMZW5ndGg7IG0rKykge1xuICAgICAgICBsZXQgcHJvcCA9IHByb3BzW21dO1xuICAgICAgICBsZXQgZGF0YSA9IGNvbXBvbmVudC5fX2dldEJpbmQocHJvcC5rZXlzKTtcbiAgICAgICAgXG4gICAgICAgIGlmICghZGF0YSB8fCAhZGF0YS5fX2RhdGEpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGsgPSAwLCBjID0gZGF0YS5fX2RhdGEubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICAgICAgbGV0IGJpbmQgPSBkYXRhLl9fZGF0YVtrXTsgXG4gXG4gICAgICAgICAgaWYgKGNvbXBvbmVudC5fX2NoZWNrTm9kZVByb3BlcnR5Q2hhbmdpbmcoYmluZC5ub2RlLCBwcm9wLmtleXMsIHByb3AudmFsdWUpKSB7ICAgICBcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVLZXlzKHByb3Aua2V5cyk7XG4gICAgICAgICAgICBsZXQgY2hlY2tQcm9wID0gY29tcG9uZW50Ll9fZ2V0Tm9kZVByb3BlcnR5KGJpbmQubm9kZSwgcHJvcC5rZXlzKTsgICAgICAgICAgICBcbiAgICAgICAgICAgIGNoZWNrUHJvcCAmJiBjaGVja1Byb3AuZXZhbHVhdGVkICYmIGNvbXBvbmVudC5zY29wZS5fX3NldChwcm9wLmtleXMsIHByb3AudmFsdWUsIGZhbHNlLCB0cnVlKTsgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgY29tcG9uZW50Ll9fZXZhbHVhdGVOb2RlKGJpbmQubm9kZSwgZmFsc2UpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBfayBpbiBiaW5kLm5vZGUuX19wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgIGlmICghYmluZC5ub2RlLl9fcHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShfaykpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgbGV0IF9wcm9wID0gYmluZC5ub2RlLl9fcHJvcGVydGllc1tfa107XG4gICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKF9wcm9wLmtleXMsIF9wcm9wLmNvbXBvbmVudC5fX3Njb3BlKTtcbiAgICAgICAgICAgICAgX3Byb3AuY29tcG9uZW50Ll9fc2V0Tm9kZVByb3BlcnR5KGJpbmQubm9kZSwgX3Byb3Aua2V5cywgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb21wb25lbnQuX19lbmFibGVLZXlzKHByb3Aua2V5cyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGV2YWx1YXRlID0gKGVsZW1lbnRzKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gZWxFdmFsdWF0ZShlbGVtZW50c1tpXSk7XG4gICAgICAgIGV2YWx1YXRlKGNvbXBvbmVudC5fX2NoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZWxFdmFsdWF0ZSh0aGlzLmVsKTtcbiAgICBldmFsdWF0ZSh0aGlzLl9fY2hpbGRyZW4pO1xuICB9ICBcblxuICAvKipcbiAgICogRXZhbHVhdGUgdmFsdWUgYnkga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbaXNEZWxldGVkPWZhbHNlXSAtIHRydWUgaWYgdmFsdWUgaXMgZGVsZXRpbmdcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZUJ5S2V5cyhrZXlzLCB2YWx1ZSwgaXNEZWxldGVkID0gZmFsc2UpIHsgICAgIFxuICAgIGxldCBkYXRhID0gdGhpcy5fX2dldEJpbmQoa2V5cyk7XG5cbiAgICBjb25zdCB1bmJpbmQgPSAob2JqLCBwYXJlbnRzKSA9PiB7XG4gICAgICBmb3IgKGxldCBrIGluIG9iaikge1xuICAgICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSB8fCB0aGlzLl9faXNTeXN0ZW1CaW5kaW5nS2V5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgX2tleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tdKTtcbiAgICAgICAgbGV0IF9fa2V5cyA9IF9rZXlzLnNsaWNlKCk7XG4gICAgICAgIGxldCBfaXNEZWxldGVkID0gZmFsc2U7XG4gICAgICAgIGxldCB2YWwgPSBvYmpba107XG4gICAgICAgIGxldCBoYXNLZXk7XG4gICAgICAgIFxuICAgICAgICBfX2tleXMuc2hpZnQoKTtcbiAgICAgICAgaGFzS2V5ID0gdXRpbHMuaGFzUHJvcGVydHlCeUtleXMoX19rZXlzLCB2YWx1ZSk7XG5cbiAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JyAmJiAhaGFzS2V5KSB7XG4gICAgICAgICAgX2lzRGVsZXRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsICYmIHR5cGVvZiB2YWwgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB1bmJpbmQodmFsLCBfa2V5cyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuX19ldmFsdWF0ZU5lc3RlZChfa2V5cywgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCAhaGFzS2V5KSB7XG4gICAgICAgICAgdGhpcy5fX3VuYmluZChfa2V5cyk7XG4gICAgICAgICAgX2lzRGVsZXRlZCAmJiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhfX2tleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgZGF0YSAmJiB1bmJpbmQoZGF0YSwgW10uY29uY2F0KGtleXMpKTtcbiAgICB0aGlzLl9fZXZhbHVhdGVOZXN0ZWQoa2V5cyk7XG5cbiAgICBpZiAoaXNEZWxldGVkKSB7XG4gICAgICB0aGlzLl9fdW5iaW5kKGtleXMpO1xuICAgICAgaXNEZWxldGVkICYmIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19zY29wZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIGV2ZW50IGV4cHJlc3Npb25cbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZUV2ZW50KG5vZGUsIGVsLCBlKSB7XG4gICAgbGV0IGV4cHJlc3Npb24gPSBldmFsdWF0aW9uUmVnZXguZXhlYyhub2RlLl9fZXhwcmVzc2lvbik7XG4gICAgbGV0IGV2YWx1YXRlO1xuXG4gICAgaWYgKCFleHByZXNzaW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fX2V2YWx1YXRpbmdFdmVudCA9IHtcbiAgICAgIGVsOiBlbCxcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIGV2ZW50OiBlLFxuICAgICAgbm9kZTogbm9kZVxuICAgIH07XG5cbiAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0ge307XG4gICAgZXZhbHVhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLnBhcnNlKHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50LnNjb3BlLCBleHByZXNzaW9uWzFdLCB7IGV2ZW50OiBlIH0pO1xuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSBudWxsO1xuXG4gICAgcmV0dXJuIGV2YWx1YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGNoYW5nZXMgYW5kIGV2YWx1YXRlIHRoZSBwYXNzZWQgbm9kZVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtib29sZWFufSBbY2hlY2tdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVOb2RlKG5vZGUsIGNoZWNrID0gdHJ1ZSkge1xuICAgIGlmIChjaGVjaz8gdGhpcy5fX2NoZWNrRXZhbHVhdGlvbihub2RlKTogdHJ1ZSkgeyAgICAgIFxuICAgICAgbGV0IGtleSA9IG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cj8gJ3ZhbHVlJzogJ25vZGVWYWx1ZSc7XG4gICAgICBsZXQgcmVzID0gdGhpcy5fX2V2YWx1YXRlKG5vZGUpOyAgICAgXG4gICAgICBub2RlW2tleV0gIT0gcmVzICYmIChub2RlW2tleV0gPSByZXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRyaWJ1dGUgbm9kZSBpbml0aWFsaXppbmdcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBhdHRyaWJ1dGVPZiAtIGlmIG5vZGUgaXMgbGlua2VkIHdpdGggcGFyZW50IHNjb3BlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZUF0dHJpYnV0ZShub2RlLCBlbCwgYXR0cmlidXRlT2YpIHtcbiAgICBpZiAoc3lzdGVtQXR0cmlidXRlcy5pbmRleE9mKG5vZGUubm9kZU5hbWUpICE9IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fX2luaXRpYWxpemVOb2RlKG5vZGUsIGVsKTtcbiAgICBsZXQgZXZlbnROYW1lID0gbm9kZS5ub2RlTmFtZS5yZXBsYWNlKC9eb24tKC4rKS9pLCAnJDEnKTtcbiAgICBsZXQgbm9kZU5hbWUgPSB1dGlscy50b0NhbWVsQ2FzZShub2RlLm5vZGVOYW1lKTtcbiAgICBsZXQgY29tcG9uZW50ID0gYXR0cmlidXRlT2Y/IGF0dHJpYnV0ZU9mOiB0aGlzO1xuXG4gICAgaWYgKGV2ZW50TmFtZSAhPSBub2RlLm5vZGVOYW1lKSB7XG4gICAgICBpZiAobm9kZS5fX2V2ZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGVtaXR0ZXIgPSBuZXcgQWtpbGkuRXZlbnRFbWl0dGVyKGV2ZW50TmFtZSwgZWwsIGNvbXBvbmVudCk7XG5cbiAgICAgIGlmIChub2RlLl9fZXhwcmVzc2lvbikge1xuICAgICAgICBlbWl0dGVyLmJpbmQoKGUpID0+IHtcbiAgICAgICAgICByZXR1cm4gY29tcG9uZW50Ll9fZXZhbHVhdGVFdmVudChub2RlLCBlbCwgZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBub2RlLl9fZXZlbnQgPSBlbWl0dGVyO1xuICAgICAgZWwuc2V0QXR0cmlidXRlKG5vZGUubm9kZU5hbWUsIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZShlbWl0dGVyKSk7XG5cbiAgICAgIGlmIChhdHRyaWJ1dGVPZikge1xuICAgICAgICB0aGlzLl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IHRydWU7XG4gICAgICAgIHRoaXMuYXR0cnNbbm9kZU5hbWVdID0gZW1pdHRlcjtcbiAgICAgICAgdGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChhdHRyaWJ1dGVPZikge1xuICAgICAgbm9kZS5fX2F0dHJpYnV0ZU9uID0gdGhpcztcbiAgICAgIG5vZGUuX19hdHRyaWJ1dGVPZiA9IGNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBlbC5zZXRBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSwgY29tcG9uZW50Ll9fZXZhbHVhdGUobm9kZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIG5vZGVcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemVOb2RlKG5vZGUsIGVsKSB7XG4gICAgaWYgKG5vZGUuX19pbml0aWFsaXplZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5vZGUuX19leHByZXNzaW9uID0gbm9kZVsobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKT8gJ3ZhbHVlJzogJ25vZGVWYWx1ZSddO1xuICAgIG5vZGUuX19wcm9wZXJ0aWVzID0ge307XG4gICAgbm9kZS5fX2F0dHJpYnV0ZU9mID0gbnVsbDtcbiAgICBub2RlLl9fYXR0cmlidXRlT24gPSBudWxsO1xuICAgIG5vZGUuX19ldmVudCA9IG51bGw7XG4gICAgbm9kZS5fX2hhc0JpbmRpbmdzID0gZmFsc2U7XG4gICAgbm9kZS5fX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICBub2RlLl9fY29tcG9uZW50ID0gdGhpcztcbiAgICBub2RlLl9fZWxlbWVudCA9IGVsO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJwb2xhdGUgYXR0cmlidXRlcyBvZiB0aGUgZWxlbWVudFxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gW2F0dHJpYnV0ZU9mPW51bGxdIC0gaWYgbm9kZSBpcyBsaW5rZWQgd2l0aCBwYXJlbnQgc2NvcGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXMoZWwsIGF0dHJpYnV0ZU9mID0gbnVsbCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBhdHRycyA9IGVsLmF0dHJpYnV0ZXMsIGwgPSBhdHRycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHRoaXMuX19pbml0aWFsaXplQXR0cmlidXRlKGF0dHJzW2ldLCBlbCwgYXR0cmlidXRlT2YpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmUgYXR0cmlidXRlcyBhcyBwcm94eVxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RlZmluZUF0dHJpYnV0ZXMoKSB7XG4gICAgY29uc3QgY2hhbmdlQXR0cmlidXRlID0gKGtleSwgdmFsdWUsIGlzRGVsZXRlZCA9IGZhbHNlKSA9PiB7XG4gICAgICBpZiAodGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgbm9kZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlTm9kZShrZXkpO1xuXG4gICAgICBpZiAobm9kZSkge1xuICAgICAgICBpZiAobm9kZS5fX2V2ZW50KSB7XG4gICAgICAgICAgbm9kZS5fX2V2ZW50LnVuYmluZCgpO1xuICAgICAgICAgIG5vZGUuX19ldmVudCA9IG51bGw7XG4gICAgICAgICAgbm9kZS5fX2V4cHJlc3Npb24gPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlLl9faGFzQmluZGluZ3MpIHtcbiAgICAgICAgICB0aGlzLl9fcGFyZW50ICYmIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2V2YWx1YXRpb25Db21wb25lbnQuX191bmJpbmRCeU5vZGVzKFtub2RlXSk7XG4gICAgICAgICAgbm9kZS5fX2hhc0JpbmRpbmdzID0gZmFsc2U7XG4gICAgICAgICAgbm9kZS5fX2V4cHJlc3Npb24gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEZWxldGVkKSB7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChub2RlKSB7XG4gICAgICAgIG5vZGUudmFsdWUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5hdHRycyA9IG5ldyBQcm94eSh0aGlzLl9fYXR0cnMsIHtcbiAgICAgIGdldDogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGlmIChrZXkgPT0gJ19faXNQcm94eScpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgIH0sXG4gICAgICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IGF0dHJLZXkgPSB1dGlscy50b0Rhc2hDYXNlKGtleSk7XG5cbiAgICAgICAgaWYgKHRoaXMuYm9vbGVhbkF0dHJpYnV0ZXMuaW5kZXhPZihhdHRyS2V5KSAhPSAtMSkge1xuICAgICAgICAgIGF0dHJLZXkgPSBgYm9vbGVhbi0ke2F0dHJLZXl9YDtcblxuICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICBjaGFuZ2VBdHRyaWJ1dGUoYXR0cktleSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKHZhbHVlKSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBhdHRyS2V5ID0gdXRpbHMudG9EYXNoQ2FzZShrZXkpO1xuICAgICAgICBjaGFuZ2VBdHRyaWJ1dGUoYXR0cktleSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKHZhbHVlKSwgdHJ1ZSk7XG4gICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHByb3h5IHRvIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHBhcmVudHNcbiAgICogQHJldHVybnMge1Byb3h5fVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX29ic2VydmUob2JqLCBwYXJlbnRzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm94eShvYmosIHtcbiAgICAgIGdldDogKHRhcmdldCwga2V5KSA9PiB7IFxuICAgICAgICBpZiAoa2V5ID09IFwiX19pc1Byb3h5XCIpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX3RhcmdldFwiKSB7XG4gICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX2NvbXBvbmVudFwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IFwiX19rZXlzXCIpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50cztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGxldCByZWFsVGFyZ2V0ICA9IHV0aWxzLmdldE93blByb3BlcnR5VGFyZ2V0KHRhcmdldCwga2V5KTtcblxuICAgICAgICAgIGlmICghdXRpbHMuaXNQbGFpbk9iamVjdChyZWFsVGFyZ2V0KSkge1xuICAgICAgICAgICAgcmVhbFRhcmdldFtrZXldID0gQWtpbGkuaXNvbGF0ZUZ1bmN0aW9uKHJlYWxUYXJnZXRba2V5XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFraWxpLl9fZXZhbHVhdGlvbikgeyAgXG4gICAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tleV0pO1xuICAgICAgICAgIGxldCBub3RCaW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgbGV0IGV2YWx1YXRlZCA9ICF1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpOyBcbiAgICAgICAgICBsZXQgY29tcG9uZW50ID0gdGhpcztcbiAgICAgICAgICBsZXQgZXhjbHVkZWQgPSBmYWxzZTtcbiAgICAgICAgICBsZXQgZXhjQXJyID0ga2V5cy5zbGljZSgpO1xuXG4gICAgICAgICAgaWYodGFyZ2V0IGluc3RhbmNlb2YgU2NvcGUpIHtcbiAgICAgICAgICAgIGxldCByZWFsVGFyZ2V0ID0gdXRpbHMuZ2V0T3duUHJvcGVydHlUYXJnZXQodGFyZ2V0LCBrZXkpO1xuICAgICAgICAgICAgcmVhbFRhcmdldCAmJiAocmVhbFRhcmdldCBpbnN0YW5jZW9mIFNjb3BlKSAmJiAoY29tcG9uZW50ID0gIHJlYWxUYXJnZXQuX19jb21wb25lbnQpO1xuICAgICAgICAgIH0gXG5cbiAgICAgICAgICBjb25zdCBmb3JQYXJlbnRzID0gQWtpbGkuX19ldmFsdWF0aW9uLmNvbXBvbmVudC5wYXJlbnRzKGMgPT4gYyBpbnN0YW5jZW9mIEFraWxpLmNvbXBvbmVudHMuRm9yKTtcblxuICAgICAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBmb3JQYXJlbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgZm9yKGxldCBrID0gMCwgYyA9IGtleXMubGVuZ3RoOyBrIDwgYzsgaysrKSB7IFxuICAgICAgICAgICAgICBjb25zdCBmb3JEYXRhID0gZm9yUGFyZW50c1tpXS5kYXRhO1xuICAgICAgICAgICAgICBjb25zdCBkYXRhID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoZXhjQXJyLCBjb21wb25lbnQuX19zY29wZSk7XG5cbiAgICAgICAgICAgICAgaWYoZGF0YSAmJiB0eXBlb2YgZGF0YSA9PSAnb2JqZWN0JyAmJiBmb3JEYXRhID09PSBkYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgICBleGNBcnIucG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAgXG5cbiAgICAgICAgICBpZiAoIShrZXkgaW4gdGFyZ2V0KSkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfSAgICAgICAgICBcbiAgICAgICAgICBlbHNlIGlmICghdXRpbHMuZ2V0RW51bWVyYWJsZVByb3BlcnR5VGFyZ2V0KHRhcmdldCwga2V5KSkge1xuICAgICAgICAgICAgbm90QmluZGluZyA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fX2JpbmROb2RlKEFraWxpLl9fZXZhbHVhdGlvbi5saXN0LCBjb21wb25lbnQsIGtleXMsIHBhcmVudHMsIHRhcmdldFtrZXldLCBub3RCaW5kaW5nLCBldmFsdWF0ZWQpO1xuICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgIH0sXG4gICAgICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHsgXG4gICAgICAgIGlmICh0aGlzLl9faXNTeXN0ZW1LZXkoa2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG5cbiAgICAgICAgaWYgKHRoaXMuX19jaGVja0Rpc2FibGVtZW50KGtleXMpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG5cbiAgICAgICAgQ0hFQ0tfRVhJU1RFTkNFOiBpZihwYXJlbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsZXQgdGFyZ2V0UGFyZW50VmFsdWUgPSBwYXJlbnRzLmxlbmd0aCA+IDE/IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKHBhcmVudHMuc2xpY2UoMCwgLTEpLCB0aGlzLl9fc2NvcGUpOiB0aGlzLl9fc2NvcGU7XG4gICAgICAgICAgXG4gICAgICAgICAgZm9yKGxldCBrIGluIHRhcmdldFBhcmVudFZhbHVlKSB7XG4gICAgICAgICAgICBpZighdGFyZ2V0UGFyZW50VmFsdWUuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRhcmdldFBhcmVudFZhbHVlW2tdICYmIHRhcmdldFBhcmVudFZhbHVlW2tdLl9fdGFyZ2V0ID09PSB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgYnJlYWsgQ0hFQ0tfRVhJU1RFTkNFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ10pIHtcbiAgICAgICAgICB0aGlzLl9fc3RvcmVUcmlnZ2VyQnlLZXlzKGtleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXSkge1xuICAgICAgICAgIHRoaXMuX19hdHRyVHJpZ2dlckJ5S2V5cyhrZXlzLCB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXRba2V5XSA9IHRoaXMuX19uZXN0ZWRPYnNlcnZlKHZhbHVlLCBrZXlzKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChBa2lsaS5fX2lzb2xhdGlvbikgeyBcbiAgICAgICAgICB0aGlzLl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0KHBhcmVudHMsIGtleSwgZmFsc2UpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5fX2lzTW91bnRlZCkgeyAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICB0aGlzLl9fZXZhbHVhdGVCeUtleXMoa2V5cywgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgICAgZGVsZXRlUHJvcGVydHk6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG5cbiAgICAgICAgaWYgKHRoaXMuX19jaGVja0Rpc2FibGVtZW50KGtleXMpKSB7XG4gICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoQWtpbGkuX19pc29sYXRpb24pIHtcbiAgICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgICAgICAgdGhpcy5fX2NyZWF0ZUlzb2xhdGlvbk9iamVjdChwYXJlbnRzLCBrZXksIHRydWUpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgICAgIHRoaXMuX19ldmFsdWF0ZUJ5S2V5cyhrZXlzLCB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgaGFzaCBmb3IgdGhlIGtleXNcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9ICAgIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZUtleXNIYXNoKGtleXMpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5fX3Njb3BlLl9fbmFtZX0uJHtBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyl9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIHRoZSBrZXlzIHNldHRlclxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kaXNhYmxlS2V5cyhrZXlzKSB7XG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eVtrZXlzPyB0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyk6ICdfX2FsbCddID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgdGhlIGtleXMgc2V0dGVyXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzICAgIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2VuYWJsZUtleXMoa2V5cykge1xuICAgIGRlbGV0ZSB0aGlzLl9fZGlzYWJsZVByb3h5W2tleXM/IHRoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKTogJ19fYWxsJ107XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGtleXMgc2V0dGVyIGRpc2FibGVtYW50XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzICAgIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NoZWNrRGlzYWJsZW1lbnQoa2V5cykge1xuICAgIHJldHVybiB0aGlzLl9fZGlzYWJsZVByb3h5Ll9fYWxsPyB0cnVlOiB0aGlzLl9fZGlzYWJsZVByb3h5W3RoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKV07XG4gIH1cblxuICAvKipcbiAgICogU2F2ZSB0aGUgdmFsdWUgdG8gdGhlIHN0b3JlIGJ5IHRoZSBrZXlzXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKiBAcGFyYW0geyp9IHZhbHVlICAgIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3N0b3JlVHJpZ2dlckJ5S2V5cyhrZXlzLCB2YWx1ZSkge1xuICAgIGNvbnN0IGxpbmtzID0gdGhpcy5fX3N0b3JlTGlua3NbQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpXTtcbiAgICBcbiAgICBpZighbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhbHVlID0gdXRpbHMuY29weSh2YWx1ZSk7XG4gICAgdGhpcy5fX2Rpc2FibGVLZXlzKGtleXMpO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGxpbmtzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY29uc3QgbGluayA9IGxpbmtzW2ldO1xuICAgICAgXG4gICAgICB0aGlzLl9fc3RvcmVUcmlnZ2VyQnlOYW1lKGxpbmsubmFtZSwgdmFsdWUpO1xuICAgICAgXG4gICAgfVxuICAgIFxuICAgIHRoaXMuX19lbmFibGVLZXlzKGtleXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmUgdGhlIHZhbHVlIHRvIHRoZSBzdG9yZSBieSB0aGUgbmFtZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc3RvcmVUcmlnZ2VyQnlOYW1lKG5hbWUsIHZhbHVlKSB7ICBcbiAgICBzdG9yZS5fX3RhcmdldFtuYW1lXSA9IHZhbHVlO1xuICAgIGNvbnN0IGxpbmtzID0gQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuXG4gICAgaWYoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGxpbmtzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY29uc3QgbGluayA9IGxpbmtzW2ldO1xuICAgICAgY29uc3QgY29tcG9uZW50ID0gbGluay5jb21wb25lbnQ7XG5cbiAgICAgIGlmKGNvbXBvbmVudCA9PT0gdGhpcykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYobGluay5mbikge1xuICAgICAgICBBa2lsaS51bmlzb2xhdGVkKCgpID0+IGxpbmsuZm4uY2FsbChjb21wb25lbnQsIHZhbHVlKSlcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGNvbXBvbmVudC5zY29wZS5fX3NldChsaW5rLmtleXMsIHZhbHVlKTsgICAgICBcbiAgICB9ICAgICBcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBzdG9yZSBsaW5rIHdpdGggdGhlIHNjb3BlIHByb3BlcnR5XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zdG9yZUJ5S2V5cyhuYW1lLCBrZXlzKSB7XG4gICAgaWYoIWtleXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgU3RvcmUgbGluayBcIiR7bmFtZX1cIiBtdXN0IGhhdmUgdGhlIHNjb3BlIHByb3BlcnR5IG5hbWVgKTtcbiAgICB9XG5cbiAgICBpZighQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG5cbiAgICB0aGlzLnNjb3BlLl9fc2V0KGtleXMsIHN0b3JlW25hbWVdKTtcbiAgICBsZXQga2V5U3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpO1xuICAgIGxldCBpbmZvO1xuXG4gICAgaWYoIXRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ10pIHtcbiAgICAgIHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ10gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgYXJyID0gdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXTtcbiAgICBcbiAgICBmb3IobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBhcnJbaV07XG5cbiAgICAgIGlmKHJlcy5jb21wb25lbnQgPT09IHRoaXMgJiYgcmVzLm5hbWUgPT0gbmFtZSAmJiByZXMua2V5U3RyaW5nID09IGtleVN0cmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoIUFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSkge1xuICAgICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgaW5mbyA9IHsgY29tcG9uZW50OiB0aGlzLCBuYW1lLCBrZXlzLCBrZXlTdHJpbmcgfTtcbiAgICB0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddLnB1c2goaW5mbyk7XG4gICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdLnB1c2goaW5mbyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgc3RvcmUgbGluayB3aXRoIHRoZSBmdW5jdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuICAgXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIF9fc3RvcmVCeUZ1bmN0aW9uKG5hbWUsIGZuLCBvcHRpb25zID0ge30pIHsgXG4gICAgbGV0IGNhbGwgPSBvcHRpb25zLmNhbGxPblN0YXJ0ID09PSB1bmRlZmluZWQ/IHN0b3JlLl9fdGFyZ2V0Lmhhc093blByb3BlcnR5KG5hbWUpOiBvcHRpb25zLmNhbGxPblN0YXJ0O1xuXG4gICAgaWYoIUFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSkge1xuICAgICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuICAgIFxuICAgIGZvcihsZXQgaSA9IGxpbmtzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gbGlua3NbaV07XG5cbiAgICAgIGlmKHJlcy5jb21wb25lbnQgPT09IHRoaXMgJiYgcmVzLm5hbWUgPT0gbmFtZSAmJiByZXMuZm4gPT09IGZuKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXS5wdXNoKHsgY29tcG9uZW50OiB0aGlzLCBuYW1lLCBmbiB9KTtcblxuICAgIGlmKGNhbGwpIHtcbiAgICAgIHJldHVybiBBa2lsaS51bmlzb2xhdGVkKCgpID0+IGZuLmNhbGwodGhpcywgc3RvcmVbbmFtZV0pKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBzdG9yZSBsaW5rIHdpdGggdGhlIHNjb3BlIHByb3BlcnR5XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3Vuc3RvcmVCeUtleXMobmFtZSwga2V5cykge1xuICAgIGlmKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBoYXZlIHRvIHBhc3MgdGhlIHNjb3BlIHByb3BlcnR5IG5hbWUgZm9yIHN0b3JlIGxpbmsgXCIke25hbWV9XCJgKTtcbiAgICB9XG5cbiAgICBpZighQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG5cbiAgICBsZXQga2V5U3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpO1xuICAgIGxldCBhcnIgPSB0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddO1xuXG4gICAgaWYoIWFyci5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgZm9yKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuICAgICAgbGV0IGxpbmtzID0gQWtpbGkuX19zdG9yZUxpbmtzW3Jlcy5uYW1lXTtcblxuICAgICAgaWYocmVzLmNvbXBvbmVudCAhPT0gdGhpcyB8fCByZXMubmFtZSAhPSBuYW1lIHx8IHJlcy5rZXlTdHJpbmcgIT0ga2V5U3RyaW5nKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBhcnIuc3BsaWNlKGksIDEpO1xuXG4gICAgICBpZighbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgZm9yKGxldCBrID0gbGlua3MubGVuZ3RoIC0gMTsgayA+PSAwOyBrLS0pIHtcbiAgICAgICAgbGV0IGxpbmsgPSBsaW5rc1trXTtcblxuICAgICAgICBpZihsaW5rLmNvbXBvbmVudCA9PT0gdGhpcyAmJiBsaW5rLmtleVN0cmluZyA9PSBrZXlTdHJpbmcpIHtcbiAgICAgICAgICBsaW5rcy5zcGxpY2UoaywgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoIWxpbmtzLmxlbmd0aCkge1xuICAgICAgICBkZWxldGUgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKCFhcnIubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBzdG9yZSBsaW5rIHdpdGggdGhlIGZ1bmN0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5zdG9yZUJ5RnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZighQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuICAgIFxuICAgIGZvcihsZXQgaSA9IGxpbmtzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gbGlua3NbaV07XG5cbiAgICAgIGlmKHJlcy5jb21wb25lbnQgPT09IHRoaXMgJiYgcmVzLm5hbWUgPT0gbmFtZSAmJiByZXMuZm4gPT09IGZuKSB7XG4gICAgICAgIGxpbmtzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoIWxpbmtzLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciBhbiBhdHRyaWJ1dGUgZXZlbnQgYnkgdGhlIGtleXNcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYXR0clRyaWdnZXJCeUtleXMoa2V5cywgdmFsdWUpIHtcbiAgICBpZih0aGlzLl9fZGlzYWJsZUF0dHJUcmlnZ2VyaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGxpbmtzID0gdGhpcy5fX2F0dHJMaW5rc1tBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyldO1xuICAgXG4gICAgaWYoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIEFraWxpLm5leHRUaWNrKCgpID0+IHtcbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGluayA9IGxpbmtzW2ldO1xuXG4gICAgICAgIGlmKGxpbmsuZm4pIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgZXYgPSAnb24nICsgdXRpbHMuY2FwaXRhbGl6ZShsaW5rLm5hbWUpO1xuICAgICAgICB0aGlzLmF0dHJzW2V2XSAmJiB0aGlzLmF0dHJzW2V2XS50cmlnZ2VyKHZhbHVlLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgICB9XG4gICAgfSk7ICBcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIGFuIGF0dHJpYnV0ZSBldmVudCBieSB0aGUgbmFtZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYXR0clRyaWdnZXJCeU5hbWUobmFtZSwgdmFsdWUpIHtcbiAgICBjb25zdCBsaW5rcyA9IHRoaXMuX19hdHRyTGlua3NbbmFtZV07XG5cbiAgICBpZighbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gICAgXG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gbGlua3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBsaW5rID0gbGlua3NbaV07ICAgIFxuICAgICAgdGhpcy5fX2Rpc2FibGVBdHRyVHJpZ2dlcmluZyA9IHRydWU7XG4gICAgICBsaW5rLmZuPyBBa2lsaS51bmlzb2xhdGVkKCgpID0+IGxpbmsuZm4uY2FsbCh0aGlzLCB2YWx1ZSkpOiB0aGlzLnNjb3BlLl9fc2V0KGxpbmsua2V5cywgdmFsdWUpOyBcbiAgICAgIHRoaXMuX19kaXNhYmxlQXR0clRyaWdnZXJpbmcgPSBmYWxzZTsgXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBhdHRyaWJ1dGUgbGluayB3aXRoIHRoZSBzY29wZSBwcm9wZXJ0eVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYXR0ckJ5S2V5cyhuYW1lLCBrZXlzKSB7XG4gICAgaWYoIWtleXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQXR0cmlidXRlIGxpbmsgXCIke25hbWV9XCIgbXVzdCBoYXZlIHRoZSBzY29wZSBwcm9wZXJ0eSBuYW1lYCk7XG4gICAgfVxuXG4gICAgaWYoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuXG4gICAgbmFtZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKG5hbWUpO1xuICAgIHRoaXMuX19kaXNhYmxlQXR0clRyaWdnZXJpbmcgPSB0cnVlO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkobmFtZSkgJiYgdGhpcy5zY29wZS5fX3NldChrZXlzLCB0aGlzLmF0dHJzW25hbWVdKTsgIFxuICAgIHRoaXMuX19kaXNhYmxlQXR0clRyaWdnZXJpbmcgPSBmYWxzZTsgIFxuICAgIGxldCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG5cbiAgICBpZighdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddKSB7XG4gICAgICB0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ10gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgYXJyID0gdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddO1xuICAgIFxuICAgIGZvcihsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGFycltpXTtcblxuICAgICAgaWYocmVzLm5hbWUgPT0gbmFtZSAmJiByZXMua2V5U3RyaW5nID09IGtleVN0cmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddLnB1c2goeyBuYW1lLCBrZXlzLCBrZXlTdHJpbmcgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGF0dHJpYnV0ZSBsaW5rIHdpdGggdGhlIGZ1bmN0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkIFxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIF9fYXR0ckJ5RnVuY3Rpb24obmFtZSwgZm4sIG9wdGlvbnMgPSB7fSkgeyAgICBcbiAgICBsZXQgY2FsbCA9IG9wdGlvbnMuY2FsbE9uU3RhcnQgPT09IHVuZGVmaW5lZD8gdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eShuYW1lKTogb3B0aW9ucy5jYWxsT25TdGFydDtcbiAgICBuYW1lID0gdXRpbHMudG9DYW1lbENhc2UobmFtZSk7XG5cbiAgICBpZighdGhpcy5fX2F0dHJMaW5rc1tuYW1lXSkge1xuICAgICAgdGhpcy5fX2F0dHJMaW5rc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGxldCBsaW5rcyA9IHRoaXMuX19hdHRyTGlua3NbbmFtZV07XG4gICAgXG4gICAgZm9yKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYocmVzLm5hbWUgPT0gbmFtZSAmJiByZXMuZm4gPT09IGZuKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB0aGlzLl9fYXR0ckxpbmtzW25hbWVdLnB1c2goeyBuYW1lLCBmbiB9KTtcbiAgICBcbiAgICBpZihjYWxsKSB7XG4gICAgICByZXR1cm4gQWtpbGkudW5pc29sYXRlZCgoKSA9PiBmbi5jYWxsKHRoaXMsIHRoaXMuYXR0cnNbbmFtZV0pKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBhdHRyaWJ1dGUgbGluayB3aXRoIHRoZSBzY29wZSBwcm9wZXJ0eVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmF0dHJCeUtleXMobmFtZSwga2V5cykge1xuICAgIGlmKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBoYXZlIHRvIHBhc3MgdGhlIHNjb3BlIHByb3BlcnR5IG5hbWUgZm9yIGF0dHJpYnV0ZSBsaW5rIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgaWYoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuXG4gICAgbGV0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcbiAgICBsZXQgYXJyID0gdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddO1xuXG4gICAgaWYoIWFyci5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgZm9yKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuXG4gICAgICBpZihyZXMubmFtZSAhPSBuYW1lIHx8IHJlcy5rZXlTdHJpbmcgIT0ga2V5U3RyaW5nKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBhcnIuc3BsaWNlKGksIDEpO1xuICAgIH1cblxuICAgIGlmKCFhcnIubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddO1xuICAgIH1cbiAgfVxuXG4gICAvKipcbiAgICogUmVtb3ZlIHRoZSBhdHRyaWJ1dGUgbGluayB3aXRoIHRoZSBmdW5jdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5hdHRyQnlGdW5jdGlvbihuYW1lLCBmbikge1xuICAgIGlmKCF0aGlzLl9fYXR0ckxpbmtzW25hbWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IobGV0IGkgPSBsaW5rcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGxpbmtzW2ldO1xuXG4gICAgICBpZihyZXMubmFtZSA9PSBuYW1lICYmIHJlcy5mbiA9PT0gZm4pIHtcbiAgICAgICAgbGlua3Muc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZighbGlua3MubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGtleSBpcyBzeXN0ZW1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pc1N5c3RlbUtleSAoa2V5KSB7XG4gICAgaWYgKGtleSA9PSAnX18nIHx8IChrZXlbMF0gPT0gJ18nICYmIGtleVsxXSA9PSAnXycpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoWydjb25zdHJ1Y3RvciddLmluZGV4T2Yoa2V5KSAhPSAtMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIE5lc3RlZCBvYnNlcnZpbmcgdGhlIHZhbHVlXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gW3N0YXJ0S2V5c11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19uZXN0ZWRPYnNlcnZlICh2YWx1ZSwgc3RhcnRLZXlzKSB7XG4gICAgY29uc3Qgb2JzZXJ2ZSA9ICh2YWx1ZSwgcGFyZW50cykgPT4ge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghdXRpbHMuaXNQbGFpbk9iamVjdCh2YWx1ZSkgJiYgIXV0aWxzLmlzU2NvcGVQcm94eSh2YWx1ZSkgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIFNjb3BlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGxldCB0YXJnZXQgPSB2YWx1ZTtcblxuICAgICAgQ0hFQ0tfUFJPWFk6IGlmICh2YWx1ZS5fX2lzUHJveHkpIHtcbiAgICAgICAgdGFyZ2V0ID0gdmFsdWUuX190YXJnZXQ7XG5cbiAgICAgICAgaWYgKHRoaXMuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nKSB7XG4gICAgICAgICAgYnJlYWsgQ0hFQ0tfUFJPWFk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChcbiAgICAgICAgICB2YWx1ZS5fX2NvbXBvbmVudCAhPT0gdGhpcyB8fFxuICAgICAgICAgIEFraWxpLmpvaW5CaW5kaW5nS2V5cyhwYXJlbnRzKSAhPSBBa2lsaS5qb2luQmluZGluZ0tleXModmFsdWUuX19rZXlzKVxuICAgICAgICApIHtcbiAgICAgICAgICB0YXJnZXQgPSB1dGlscy5jb3B5KHRhcmdldCwgZmFsc2UpO1xuICAgICAgICAgIHZhbHVlID0gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghdGhpcy5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIFNjb3BlKSkge1xuICAgICAgICB0YXJnZXQgPSB1dGlscy5jb3B5KHRhcmdldCwgZmFsc2UpOyAgICAgICAgICBcbiAgICAgICAgdmFsdWUgPSB0YXJnZXQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGsgaW4gdGFyZ2V0KSB7ICAgICAgICBcbiAgICAgICAgaWYgKCF0YXJnZXQuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2YWwgPSB0YXJnZXRba107ICAgICAgICBcbiAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tdKTsgICBcbiAgICAgICAgdGFyZ2V0W2tdID0gb2JzZXJ2ZSh2YWwsIGtleXMpOyAgXG4gICAgICB9XG5cbiAgICAgIGlmICghdmFsdWUuX19pc1Byb3h5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fb2JzZXJ2ZSh2YWx1ZSwgcGFyZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuXG4gICAgbGV0IHJlcyA9IG9ic2VydmUodmFsdWUsIHN0YXJ0S2V5cyB8fCBbXSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gaXNvbGF0aW9uIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHBhcmFtIHtib29sZWFufSBbaXNEZWxldGVkPWZhbHNlXVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGVJc29sYXRpb25PYmplY3QgKHBhcmVudHMsIGtleSwgaXNEZWxldGVkID0gZmFsc2UpIHtcbiAgICBsZXQga2V5cyA9IHBhcmVudHMubGVuZ3RoPyBbcGFyZW50c1swXV06IFtrZXldO1xuICAgIGxldCBpc29sYXRpb25LZXkgPSB0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyk7XG5cbiAgICBpZiAocGFyZW50cy5sZW5ndGgpIHtcbiAgICAgIGlzRGVsZXRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uS2V5XSkge1xuICAgICAgQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uS2V5XSA9IHtcbiAgICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgICBrZXlzOiBrZXlzXG4gICAgICB9O1xuICAgIH1cblxuICAgIChpc0RlbGV0ZWQgIT09IHVuZGVmaW5lZCkgJiYgKEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV0uaXNEZWxldGVkID0gaXNEZWxldGVkKTtcbiAgICByZXR1cm4gQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uS2V5XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlIHRoZSBub2RlIHRvIGJpbmRpbmdcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGJpbmQgLSBieSBkZWZhdWx0IGlzIGNvbXBvbmVudC5fX2V2YWx1YXRpb24ubGlzdFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHBhcmVudHNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtub3RCaW5kaW5nPWZhbHNlXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtldmFsdWF0ZWQ9ZmFsc2VdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYmluZE5vZGUoYmluZCwgcmVhbENvbXBvbmVudCwga2V5cywgcGFyZW50cywgdmFsdWUsIG5vdEJpbmRpbmcgPSBmYWxzZSwgZXZhbHVhdGVkID0gZmFsc2UpIHtcbiAgICBsZXQgcGFyZW50S2V5c1N0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhwYXJlbnRzKTtcbiAgICBsZXQgY29tcG9uZW50ID0gdGhpcztcblxuICAgIGlmIChiaW5kLmxlbmd0aCAmJiAhbm90QmluZGluZykge1xuICAgICAgbGV0IGwgPSBiaW5kLmxlbmd0aCAtIDE7XG4gICAgICBsZXQgZGF0YSA9IGJpbmRbbF07XG5cbiAgICAgIGlmKGRhdGEucmVhbENvbXBvbmVudCA9PT0gdGhpcyAmJiBkYXRhLmtleXNTdHJpbmcgPT0gcGFyZW50S2V5c1N0cmluZykge1xuICAgICAgICBjb21wb25lbnQgPSBkYXRhLmNvbXBvbmVudDtcbiAgICAgIH0gICAgICBcbiAgICAgIFxuICAgICAgaWYgKGRhdGEua2V5c1N0cmluZyA9PSBwYXJlbnRLZXlzU3RyaW5nICYmIGRhdGEuY29tcG9uZW50ID09PSBjb21wb25lbnQpIHtcbiAgICAgICAgYmluZC5zcGxpY2UobCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGJpbmQucHVzaCh7XG4gICAgICBjb21wb25lbnQsXG4gICAgICByZWFsQ29tcG9uZW50OiByZWFsQ29tcG9uZW50LFxuICAgICAga2V5c1N0cmluZzogQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpLFxuICAgICAgcGFyZW50cyxcbiAgICAgIGtleXMsXG4gICAgICB2YWx1ZSxcbiAgICAgIGV2YWx1YXRlZCxcbiAgICAgIG5vdEJpbmRpbmdcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUga2V5IGlzIHN5c3RlbSBiaW5kaW5nIHRoaW5nXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovIFxuICBfX2lzU3lzdGVtQmluZGluZ0tleShrZXkpIHtcbiAgICByZXR1cm4ga2V5ID09ICdfX2RhdGEnO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBiaW5kaW5nIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0QmluZChrZXlzKSB7XG4gICAgcmV0dXJuIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncykgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYmluZGluZyBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRCb3VuZE5vZGUoa2V5cywgbm9kZSkge1xuICAgIGxldCBiaW5kID0gIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncyk7XG5cbiAgICBpZiAoIWJpbmQgfHwgIWJpbmQuX19kYXRhIHx8ICFiaW5kLl9fZGF0YS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYmluZC5fX2RhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgZGF0YSA9IGJpbmQuX19kYXRhW2ldO1xuXG4gICAgICBpZiAoZGF0YS5ub2RlID09PSBub2RlKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgbm9kZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2V2YWx1YXRlZF1cbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMsIHZhbHVlLCBldmFsdWF0ZWQgPSBmYWxzZSkge1xuICAgIGxldCBwcm9wID0gdGhpcy5fX2dldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKTsgICAgXG4gICAgbGV0IGNvcHkgPSB1dGlscy5jb3B5KHZhbHVlKTtcblxuICAgIGlmIChwcm9wKSB7XG4gICAgICBsZXQgcmVzID0gdXRpbHMuY29tcGFyZVByZXZpb3VzVmFsdWUodmFsdWUsIHByb3AudmFsdWUsIHByb3AuY29weSk7XG4gICAgICBwcm9wLnZhbHVlID0gdmFsdWU7XG4gICAgICBwcm9wLmNvcHkgPSBjb3B5O1xuICAgICAgcmV0dXJuICFyZXM7XG4gICAgfVxuICAgIFxuICAgIG5vZGUuX19wcm9wZXJ0aWVzW3RoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKV0gPSB7XG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICB2YWx1ZSxcbiAgICAgIGNvcHksICAgICAgXG4gICAgICBrZXlzLFxuICAgICAgZXZhbHVhdGVkICAgICAgXG4gICAgfTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbm9kZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMpIHtcbiAgICBsZXQgaGFzaCA9IGAke3RoaXMuX19zY29wZS5fX25hbWV9LiR7QWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpfWA7XG4gICAgcmV0dXJuIG5vZGUuX19wcm9wZXJ0aWVzW2hhc2hdIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIHRoZSBub2RlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVsZXRlTm9kZVByb3BlcnR5KG5vZGUsIGtleXMpIHtcbiAgICBsZXQgaGFzaCA9IGAke3RoaXMuX19zY29wZS5fX25hbWV9LiR7QWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpfWA7XG4gICAgZGVsZXRlIG5vZGUuX19wcm9wZXJ0aWVzW2hhc2hdO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgZGF0YSB3aXRoIHRoZSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19iaW5kKGtleXMsIGRhdGEpIHtcbiAgICB1dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MsIChsYXN0LCB2YWx1ZSkgPT4ge1xuICAgICAgbGV0IG9iaiA9IHsgX19kYXRhOiBbXSB9O1xuXG4gICAgICBpZiAoIWxhc3QpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlPyB2YWx1ZTogb2JqO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgICAgIG9iaiA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9iai5fX2RhdGEpIHtcbiAgICAgICAgb2JqLl9fZGF0YSA9IFtdO1xuICAgICAgfVxuXG4gICAgICBvYmouX19kYXRhLnB1c2goZGF0YSk7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCB0aGUga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5iaW5kKGtleXMpIHtcbiAgICBsZXQgYmluZCA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncyk7XG5cbiAgICBpZiAoIWJpbmQgfHwgIWJpbmQuX19kYXRhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBiaW5kLl9fZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBub2RlID0gYmluZC5fX2RhdGFbaV0ubm9kZTtcbiAgICAgIHRoaXMuX19kZWxldGVOb2RlUHJvcGVydHkobm9kZSwga2V5cyk7XG4gICAgfVxuXG4gICAgdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzLCAodmFsdWUpID0+IHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID4gMSkge1xuICAgICAgICB2YWx1ZS5fX2RhdGEgPSBbXTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgZGF0YSBieSBub2Rlc1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGVbXX0gbm9kZXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmJpbmRCeU5vZGVzKG5vZGVzKSB7XG4gICAgY29uc3QgdW5iaW5kID0gKG9iaikgPT4ge1xuICAgICAgZm9yIChsZXQgayBpbiBvYmopIHtcbiAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrID09ICdfX2RhdGEnKSB7XG4gICAgICAgICAgbGV0IGRhdGEgPSBvYmpba10gfHwgW107XG4gICAgICAgICAgbGV0IGwgPSBkYXRhLmxlbmd0aDtcblxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYmluZCA9IGRhdGFbaV07XG5cbiAgICAgICAgICAgIGlmIChub2Rlcy5pbmRleE9mKGJpbmQubm9kZSkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgZGF0YS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgbC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghbCkge1xuICAgICAgICAgICAgZGVsZXRlIG9ialtrXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZighdGhpcy5fX2lzU3lzdGVtQmluZGluZ0tleShrKSkge1xuICAgICAgICAgIHVuYmluZChvYmpba10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHVuYmluZCh0aGlzLl9fYmluZGluZ3MpO1xuICAgIHRoaXMuX19jbGVhckVtcHR5QmluZGluZ3MoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbGwgZW1wdHkgYmluZGluZ3NcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvYmpdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2xlYXJFbXB0eUJpbmRpbmdzKG9iaikge1xuICAgIGNvbnN0IGNsZWFyID0gKG9iaiwgcGFyZW50LCBrZXkpID0+IHtcbiAgICAgIGZvciAobGV0IGsgaW4gb2JqKSB7XG4gICAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmFsID0gb2JqW2tdO1xuXG4gICAgICAgIGlmIChrID09ICdfX2RhdGEnICYmICghdmFsIHx8ICF2YWwubGVuZ3RoKSkge1xuICAgICAgICAgIGRlbGV0ZSBvYmpba107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXRoaXMuX19pc1N5c3RlbUJpbmRpbmdLZXkoaykpIHtcbiAgICAgICAgICBpZiAoIU9iamVjdC5rZXlzKG9ialtrXSkubGVuZ3RoKSB7XG4gICAgICAgICAgICBkZWxldGUgb2JqW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsZWFyKG9ialtrXSwgb2JqLCBrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFPYmplY3Qua2V5cyhvYmopLmxlbmd0aCAmJiBwYXJlbnQpIHtcbiAgICAgICAgZGVsZXRlIHBhcmVudFtrZXldO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjbGVhcihvYmogfHwgdGhpcy5fX2JpbmRpbmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciB0aGUgbGlua3NcbiAgICogXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2xlYXJTdG9yZUxpbmtzKCkge1xuICAgIGNvbnN0IGxpbmtzID0gQWtpbGkuX19zdG9yZUxpbmtzO1xuXG4gICAgZm9yKGxldCBrZXkgaW4gbGlua3MpIHtcbiAgICAgIGNvbnN0IGFyciA9IGxpbmtzW2tleV07XG5cbiAgICAgIGZvcihsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjb25zdCBsaW5rID0gYXJyW2ldO1xuICBcbiAgICAgICAgaWYobGluay5jb21wb25lbnQgPT09IHRoaXMpIHtcbiAgICAgICAgICBhcnIuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKCFhcnIubGVuZ3RoKSB7XG4gICAgICAgIGRlbGV0ZSBsaW5rc1trZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIGNoaWxkIGNvbXBvbmVudHNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZW1vdmVDaGlsZHJlbigpIHtcbiAgICBjb25zdCByZW1vdmUgPSAoY2hpbGRyZW4pID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgcmVtb3ZlKGNoaWxkLl9fYWtpbGkuX19jaGlsZHJlbik7XG4gICAgICAgIGNoaWxkLl9fYWtpbGkuX19yZW1vdmUoKTtcbiAgICAgICAgaS0tO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZW1vdmUodGhpcy5fX2NoaWxkcmVuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGNvbXBvbmVudCB3aXRob3V0IGNoaWxkcmVuIHJlbW92aW5nXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcmVtb3ZlKCkge1xuICAgIHRoaXMuX19kZXRhY2goKTtcbiAgICB0aGlzLl9fY2xlYXJTdG9yZUxpbmtzKCk7XG4gICAgdGhpcy5hdHRycy5vblJlbW92ZWQgJiYgdGhpcy5hdHRycy5vblJlbW92ZWQudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgdGhpcy5yZW1vdmVkKCk7ICAgIFxuICAgIEFraWxpLnJlbW92ZVNjb3BlKHRoaXMuX19zY29wZS5fX25hbWUpO1xuICAgIHRoaXMuZWwucmVtb3ZlKCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0YWNoIHRoZSBjb21wb25lbnRcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZXRhY2goKSB7XG4gICAgaWYgKHRoaXMuX19ldmFsdWF0ZVBhcmVudCAmJiAhdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzKSB7XG4gICAgICB0aGlzLl9fZXZhbHVhdGVQYXJlbnQuX19ha2lsaS5fX3VuYmluZEJ5Tm9kZXMoW10uc2xpY2UuY2FsbCh0aGlzLmVsLmF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fX3BhcmVudCkge1xuICAgICAgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fc3BsaWNlQ2hpbGQodGhpcy5lbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgY29tcG9uZW50IHdpdGggY2hpbGRyZW5cbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZXN0cm95KCkge1xuICAgIHRoaXMuX19yZW1vdmVDaGlsZHJlbigpO1xuICAgIHRoaXMuX19yZW1vdmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciB0aGUgY29tcG9uZW50IGh0bWxcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19lbXB0eSgpIHtcbiAgICBsZXQgbm9kZXMgPSBbXTtcbiAgICB0aGlzLl9fcmVtb3ZlQ2hpbGRyZW4oKTtcblxuICAgIGNvbnN0IGZpbmQgPSAoY2hpbGRyZW4pID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PSAzKSB7XG4gICAgICAgICAgbm9kZXMucHVzaChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hpbGQubm9kZVR5cGUgPT0gMSAmJiAhY2hpbGQuX19ha2lsaSkge1xuICAgICAgICAgIGZvciAobGV0IGsgPSAwLCBhdHRycyA9IGNoaWxkLmF0dHJpYnV0ZXMsIGMgPSBhdHRycy5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgICAgICAgIG5vZGVzLnB1c2goYXR0cnNbaV0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZpbmQoY2hpbGQuY2hpbGROb2Rlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmluZCh0aGlzLmVsLmNoaWxkTm9kZXMpO1xuICAgIHRoaXMuX191bmJpbmRCeU5vZGVzKG5vZGVzKTtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBwYXJlbnQgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kQWxsPXRydWVdIC0gZ2V0IGFycmF5IGlmIHRydWVcbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudHxDb21wb25lbnRbXX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRQYXJlbnQoc2VsZWN0b3IgPSAnJywgZmluZEFsbCA9IGZhbHNlLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGxldCBsZXZlbCA9IDA7XG5cbiAgICBpZiAodHlwZW9mIGxldmVscyAhPSAnb2JqZWN0Jykge1xuICAgICAgbGV2ZWxzID0gW2xldmVsc107XG4gICAgfVxuXG4gICAgY29uc3QgZmluZCA9IChwYXJlbnQpID0+IHtcbiAgICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFsZXZlbHMgfHwgbGV2ZWxzLmluZGV4T2YobGV2ZWwpICE9IC0xKSB7XG4gICAgICAgIGlmICghc2VsZWN0b3IgfHwgcGFyZW50Ll9fYWtpbGkubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICBpZiAoIWZpbmRBbGwpIHtcbiAgICAgICAgICAgIGFyci5wdXNoKHBhcmVudC5fX2FraWxpKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFyci5wdXNoKHBhcmVudC5fX2FraWxpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXZlbCsrO1xuICAgICAgZmluZChwYXJlbnQuX19ha2lsaS5fX3BhcmVudCk7XG4gICAgfTtcblxuICAgIGZpbmQodGhpcy5fX3BhcmVudCk7XG5cbiAgICByZXR1cm4gZmluZEFsbD8gYXJyOiAoYXJyWzBdIHx8IG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjaGlsZCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZpbmRBbGw9dHJ1ZV0gLSBnZXQgYXJyYXkgaWYgdHJ1ZVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldENoaWxkcmVuKHNlbGVjdG9yID0gJycsIGZpbmRBbGwgPSB0cnVlLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGxldCBsZXZlbCA9IDA7XG5cbiAgICBpZiAodHlwZW9mIGxldmVscyAhPSAnb2JqZWN0Jykge1xuICAgICAgbGV2ZWxzID0gW2xldmVsc107XG4gICAgfVxuXG4gICAgY29uc3QgZmluZCA9IChjaGlsZHJlbikgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYgKCFsZXZlbHMgfHwgbGV2ZWxzLmluZGV4T2YobGV2ZWwpICE9IC0xKSB7XG4gICAgICAgICAgaWYgKCFzZWxlY3RvciB8fCBjaGlsZC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICBpZiAoIWZpbmRBbGwpIHtcbiAgICAgICAgICAgICAgYXJyLnB1c2goY2hpbGQuX19ha2lsaSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhcnIucHVzaChjaGlsZC5fX2FraWxpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV2ZWwrKztcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgZmluZChjaGlsZHJlbltpXS5fX2FraWxpLl9fY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmaW5kKHRoaXMuX19jaGlsZHJlbik7XG5cbiAgICByZXR1cm4gZmluZEFsbD8gYXJyOiAoYXJyWzBdIHx8IG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBuZWFyZXN0IGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JpZ2h0PWZhbHNlXSAtIGZyb20gdGhlIHJpZ2h0IHNpZGUgaWYgdHJ1ZVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldE5lYXIoc2VsZWN0b3IgPSAnJywgZmluZEFsbCA9IHRydWUsIHJpZ2h0ID0gZmFsc2UpIHtcbiAgICBpZiAoIXRoaXMuX19wYXJlbnQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCBsZXZlbEVsZW1lbnRzID0gdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fY2hpbGRyZW4uc2xpY2UoKTtcbiAgICBsZXQgYXJyID0gW107XG5cbiAgICByaWdodCAmJiBsZXZlbEVsZW1lbnRzLnJldmVyc2UoKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGV2ZWxFbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBlbCA9IGxldmVsRWxlbWVudHNbaV07XG5cbiAgICAgIGlmIChlbCA9PT0gdGhpcy5lbCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKCFzZWxlY3RvciB8fCBlbC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGFyci5wdXNoKGVsLl9fYWtpbGkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFyci5yZXZlcnNlKCk7XG5cbiAgICBpZiAoIWZpbmRBbGwpIHtcbiAgICAgIHJldHVybiBhcnIubGVuZ3RoPyBhcnJbMF06IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBsaW5rIHRvIHRoZSBzdG9yZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfGZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBzdG9yZShuYW1lLCBoYW5kbGVyKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nPyB0aGlzLl9fc3RvcmVCeUZ1bmN0aW9uKC4uLmFyZ3VtZW50cyk6IHRoaXMuX19zdG9yZUJ5S2V5cyguLi5hcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGxpbmsgd2l0aCB0aGUgYXR0cmlidXRlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGF0dHIobmFtZSwgaGFuZGxlcikge1xuICAgIHJldHVybiB0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJz8gdGhpcy5fX2F0dHJCeUZ1bmN0aW9uKC4uLmFyZ3VtZW50cyk6IHRoaXMuX19hdHRyQnlLZXlzKC4uLmFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBzdG9yZSBsaW5rXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHVuc3RvcmUobmFtZSwgaGFuZGxlcikge1xuICAgIHJldHVybiB0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJz8gdGhpcy5fX3Vuc3RvcmVCeUZ1bmN0aW9uKC4uLmFyZ3VtZW50cyk6IHRoaXMuX191bnN0b3JlQnlLZXlzKC4uLmFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBhdHRyaWJ1dGUgbGlua1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfGZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICB1bmF0dHIobmFtZSwgaGFuZGxlcikge1xuICAgIHJldHVybiB0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJz8gdGhpcy5fX3VuYXR0ckJ5RnVuY3Rpb24oLi4uYXJndW1lbnRzKTogdGhpcy5fX3VuYXR0ckJ5S2V5cyguLi5hcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBjb21wb25lbnQgbWF0Y2hlcyBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gc2VsZWN0b3JcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBtYXRjaGVzKHNlbGVjdG9yKSB7XG4gICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3IodGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZWwubWF0Y2hlcyhzZWxlY3Rvcik7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNsb3Nlc3QgcGFyZW50IGNvbXBvbmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgcGFyZW50KHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldFBhcmVudChzZWxlY3RvciwgZmFsc2UsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFycmF5IG9mIHBhcmVudCBjb21wb25lbnRzIGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIHBhcmVudHMoc2VsZWN0b3IgPSAnJywgbGV2ZWxzID0gbnVsbCkge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0UGFyZW50KHNlbGVjdG9yLCB0cnVlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IGNoaWxkIGNvbXBvbmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgY2hpbGQoc2VsZWN0b3IgPSAnJywgbGV2ZWxzID0gbnVsbCkge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0Q2hpbGRyZW4oc2VsZWN0b3IsIGZhbHNlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBjaGlsZCBjb21wb25lbnRzIGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGNoaWxkcmVuKHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldENoaWxkcmVuKHNlbGVjdG9yLCB0cnVlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBjb21wb25lbnRzIGxlZnQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBiZWZvcmUoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgdHJ1ZSwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBjb21wb25lbnRzIHJpZ2h0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgYWZ0ZXIoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgdHJ1ZSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNsb3Nlc3QgY29tcG9uZW50IGxlZnQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgcHJldihzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCBmYWxzZSwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IGNvbXBvbmVudCByaWdodCBmcm9tIHRoZSBjdXJyZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR9XG4gICAqL1xuICBuZXh0KHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIGZhbHNlLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgZWxlbWVudCBwYXJlbnRcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50XG4gICAqL1xuICBhcHBlbmRUbyhwYXJlbnQpIHtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FuY2VsIGNvbXBvbmVudCBjb21waWxhdGlvblxuICAgKi9cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXBhbGUgdGhlIGNvbXBvbmVudCwgYnV0IGNhbmNlbCB0aGUgY29tcGlsYXRpb24gaW5zaWRlIG9mIGl0XG4gICAqL1xuICBwcmV2ZW50KCkge1xuICAgIHRoaXMuX19wcmV2ZW50ID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBlbGVtZW50IGh0bWxcbiAgICpcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBlbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2VtcHR5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGVsZW1lbnRcbiAgICpcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICByZW1vdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19kZXN0cm95LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjcmVhdGVkKCkge31cbiAgY29tcGlsZWQoKSB7fVxuICByZWNvbXBpbGVkKCkge31cbiAgcmVzb2x2ZWQoKSB7fVxuICByZW1vdmVkKCkge31cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50LmpzIiwiaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xuICBjb25zdHJ1Y3RvcihiYXNlVXJsLCBkZWZhdWx0cykge1xuICAgIHRoaXMuYmFzZVVybCA9IGJhc2VVcmw/IChiYXNlVXJsLnJlcGxhY2UoL1xcLyQvLCAnJykgKyAnLycpOiAnJztcblxuICAgIHRoaXMuZGVmYXVsdHMgPSB7XG4gICAgICBzdGF0dXNFcnJvcnNQYXR0ZXJuOiAvXihbXjIzXSl8NDA0LyxcbiAgICAgIC4uLihkZWZhdWx0cyB8fCB7fSlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgcmVxdWVzdCB3aXRoIGFueSBtZXRob2RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBxdWVyeShvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCB1cmwsIHhocjtcbiAgICAgIFxuICAgICAgb3B0aW9ucyA9IHsuLi50aGlzLmRlZmF1bHRzLCAuLi4ob3B0aW9ucyB8fCB7fSl9O1xuICAgICAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAodHlwZW9mIG9wdGlvbnMub25TdGFydCA9PSAnZnVuY3Rpb24nKSAmJiBvcHRpb25zLm9uU3RhcnQoeGhyKTtcbiAgICAgIG9wdGlvbnMgPSB0aGlzLnRyYW5zZm9ybUJlZm9yZShvcHRpb25zKTtcbiAgICAgIHVybCA9IHRoaXMuYmFzZVVybD8gYCR7dGhpcy5iYXNlVXJsfSR7b3B0aW9ucy51cmwucmVwbGFjZSgvXlxcLy8sICcnKX1gOiBvcHRpb25zLnVybDtcbiAgICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCB1cmwsIHRydWUsIG9wdGlvbnMudXNlciwgb3B0aW9ucy5wYXNzd29yZCk7XG4gICAgICBvcHRpb25zLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwge307XG5cbiAgICAgIGlmIChvcHRpb25zLmpzb24pIHtcbiAgICAgICAgb3B0aW9ucy5qc29uICE9PSB0cnVlICYmIChvcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShvcHRpb25zLmpzb24pKTtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzWydjb250ZW50LXR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgb3B0aW9ucy5yZXNwb25zZVR5cGUgPSBvcHRpb25zLnJlc3BvbnNlVHlwZSB8fCAnanNvbic7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChvcHRpb25zLmZvcm0pIHtcbiAgICAgICAgb3B0aW9ucy5ib2R5ID0gdGhpcy5jcmVhdGVGb3JtRGF0YShvcHRpb25zLmZvcm0pO1xuICAgICAgICBvcHRpb25zLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddID0gJ211bHRpcGFydC9mb3JtLWRhdGEnO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgndGltZW91dCcpKSB7XG4gICAgICAgIHhoci50aW1lb3V0ID0gb3B0aW9ucy50aW1lb3V0O1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5yZXNwb25zZVR5cGUpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IG9wdGlvbnMud2l0aENyZWRlbnRpYWxzO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIGZvciAobGV0IGsgaW4gb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgICAgaWYgKCFvcHRpb25zLmhlYWRlcnMuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGssIG9wdGlvbnMuaGVhZGVyc1trXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMucGFyYW1zKSB7XG4gICAgICAgIGxldCBzdHIgPSB0aGlzLnBhcmFtc1RvUXVlcnkob3B0aW9ucy5wYXJhbXMpO1xuXG4gICAgICAgIGlmIChzdHIpIHtcbiAgICAgICAgICB1cmwgKz0gXCI/XCIgKyBzdHI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm9uUHJvZ3Jlc3MgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB4aHIub25wcm9ncmVzcyA9ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gb3B0aW9ucy5vblByb2dyZXNzKHhocik7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IHRoaXMudHJhbnNmb3JtQWZ0ZXIoeGhyKTtcblxuICAgICAgICBpZiAoKHhoci5zdGF0dXMgKyAnJykubWF0Y2gob3B0aW9ucy5zdGF0dXNFcnJvcnNQYXR0ZXJuKSkge1xuICAgICAgICAgIGxldCBlcnIgPSBuZXcgRXJyb3IoYFJlcXVlc3QgdG8gXCIke3VybH1cIiByZXR1cm5zIGZhaWx1cmUgc3RhdHVzIGNvZGUgJHt4aHIuc3RhdHVzfWApO1xuXG4gICAgICAgICAgZXJyLnJlc3BvbnNlID0gcmVzcG9uc2U7XG5cbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgIH0gXG4gICAgICAgIFxuICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbnRpbWVvdXQgPSAoKSA9PiB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFJlcXVlc3QgdG8gXCIke3VybH1cIiB0aW1lZCBvdXRgKSk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub25lcnJvciA9IChlcnIpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9O1xuXG4gICAgICB4aHIuc2VuZChvcHRpb25zLmJvZHkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgb2JqZWN0IHRvIHF1ZXJ5IHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBwYXJhbXNUb1F1ZXJ5KG9iaikge1xuICAgIGxldCBzZXAgPSAnJic7XG4gICAgbGV0IGVxID0gJz0nO1xuXG4gICAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5tYXAoKGspID0+IHtcbiAgICAgIGxldCBrcyA9IGVuY29kZVVSSUNvbXBvbmVudChrKTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgICBrcyA9IGVuY29kZVVSSUNvbXBvbmVudChrKTtcblxuICAgICAgICByZXR1cm4gb2JqW2tdLm1hcCgodiwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiBrcyArIGBbJHtpfV1gICsgZXEgKyBlbmNvZGVVUklDb21wb25lbnQodik7XG4gICAgICAgIH0pLmpvaW4oc2VwKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG9ialtrXSAmJiB0eXBlb2Ygb2JqW2tdID09PSAnb2JqZWN0Jykge1xuICAgICAgICBsZXQgb3B0ID0gW107XG5cbiAgICAgICAgT2JqZWN0LmtleXMob2JqW2tdKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgIG9wdC5wdXNoKGtzICsgYFske2tleX1dYCArIGVxICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrXVtrZXldKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBvcHQuam9pbihzZXApO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBrcyArIGVxICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrXSk7XG4gICAgICB9XG4gICAgfSkuam9pbihzZXApO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgcXVlcnkgc3RyaW5nIHRvIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICBwYXJhbXNGcm9tUXVlcnkoc3RyKSB7XG4gICAgbGV0IHF1ZXJ5ID0ge307XG4gICAgbGV0IGFtcHMgPSBzdHIuc3BsaXQoJyYnKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYW1wcy5sZW5ndGg7IGkgPGw7IGkrKykge1xuICAgICAgbGV0IGVxcyA9ICBhbXBzW2ldLnNwbGl0KCc9Jyk7XG4gICAgICBsZXQga2V5ID0gZGVjb2RlVVJJQ29tcG9uZW50KGVxc1swXSk7XG4gICAgICBsZXQgdmFsID0gZGVjb2RlVVJJQ29tcG9uZW50KGVxc1sxXSk7XG5cbiAgICAgIGlmICgha2V5KSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgICBxdWVyeVtrZXldLnB1c2godmFsKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHF1ZXJ5W2tleV0pIHtcbiAgICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldLCB2YWxdO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHF1ZXJ5W2tleV0gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBtdWx0aXBhcnQgZm9ybSBkYXRhIGZyb20gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICogQHBhcmFtIHtGb3JtRGF0YX0gW2RhdGFdXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbmFtZXNwYWNlXVxuICAgKlxuICAgKiBAcmV0dXJucyB7Rm9ybURhdGF9XG4gICAqL1xuICBjcmVhdGVGb3JtRGF0YShvYmosIGRhdGEgPSBudWxsLCBuYW1lc3BhY2UgPSAnJykge1xuICAgIGxldCBmZCA9IGRhdGEgfHwgbmV3IEZvcm1EYXRhKCk7XG5cbiAgICBmb3IgKGxldCBrIGluIG9iaikge1xuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrKSAmJiBvYmpba10pIHtcbiAgICAgICAgbGV0IGtleSA9IG5hbWVzcGFjZT8gbmFtZXNwYWNlICsgJ1snICsgayArICddJzogaztcblxuICAgICAgICBpZiAob2JqW2tdIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgIGZkLmFwcGVuZChrZXksIG9ialtrXS50b0lTT1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KG9ialtrXSkpIHtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm1EYXRhKG9ialtrXSwgZmQsIGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZmQuYXBwZW5kKGtleSwgb2JqW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gZGF0YSBiZWZvcmUgYSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICB0cmFuc2Zvcm1CZWZvcmUob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBkYXRhIGFmdGVyIGEgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge1hNTEh0dHBSZXF1ZXN0fSB4aHJcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHRyYW5zZm9ybUFmdGVyKHhocikge1xuICAgIHJldHVybiB7XG4gICAgICB4aHI6IHhocixcbiAgICAgIGRhdGE6IHhoci5yZXNwb25zZSxcbiAgICAgIHN0YXR1czogeGhyLnN0YXR1c1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgR0VUIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGdldCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ0dFVCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBERUxFVEUgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZGVsZXRlKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnREVMRVRFJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIFBPU1QgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcG9zdCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ1BPU1QnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgUFVUIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHB1dCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ1BVVCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBQQVRDSCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBwYXRjaCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ1BBVENIJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG59XG5cbmNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCgpO1xuXG5yZXF1ZXN0Ll9faW5zdGFuY2VzID0ge307XG5cbi8qKlxuICogQWRkIG5ldyByZXF1ZXN0IGluc3RhbmNlIHRvIHRoZSBtYWluIHNlcnZpY2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtSZXF1ZXN0fSBpbnN0YW5jZVxuICovXG5yZXF1ZXN0LmFkZEluc3RhbmNlID0gZnVuY3Rpb24obmFtZSwgaW5zdGFuY2UpIHtcbiAgdGhpcy5fX2luc3RhbmNlc1tuYW1lXSA9IGluc3RhbmNlO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgaW5zdGFuY2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5yZXF1ZXN0LnJlbW92ZUluc3RhbmNlID0gZnVuY3Rpb24obmFtZSkge1xuICBkZWxldGUgdGhpcy5fX2luc3RhbmNlc1tuYW1lXTtcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1ZXN0LCAndXNlJywge1xuICBnZXQ6ICgpID0+IHtcbiAgICByZXR1cm4gcmVxdWVzdC5fX2luc3RhbmNlcztcbiAgfVxufSk7XG5cbnJlcXVlc3QuUmVxdWVzdCA9IFJlcXVlc3Q7XG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2aWNlcy9yZXF1ZXN0LmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy52YWx1ZUtleSA9ICd2YWx1ZSc7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ2ZvY3VzJywgdGhpcy5zZXRGb2N1cyk7XG4gICAgdGhpcy5hdHRyKCd2YWx1ZScsIHRoaXMuc2V0VmFsdWUpO1xuICB9XG5cbiAgc2V0Rm9jdXModmFsdWUpIHtcbiAgICB2YWx1ZT8gdGhpcy5zZXRFbGVtZW50Rm9jdXMoKTogdGhpcy5zZXRFbGVtZW50Qmx1cigpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAodGhpcy5lbFt0aGlzLnZhbHVlS2V5XSAhPT0gdmFsdWUpICYmICh0aGlzLmVsW3RoaXMudmFsdWVLZXldID0gdmFsdWUgPT09IDA/ICcwJzogKHZhbHVlIHx8ICcnKSk7XG4gIH1cblxuICBzZXRFbGVtZW50Rm9jdXMoKSB7XG4gICAgdGhpcy5lbC5mb2N1cygpO1xuICB9XG5cbiAgc2V0RWxlbWVudEJsdXIoKSB7XG4gICAgdGhpcy5lbC5ibHVyKCk7XG4gIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGV4dC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbaW5dJztcbiAgc3RhdGljIHNhdmVBdHRyaWJ1dGVQcm94eUluID0gdHJ1ZTsgIFxuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdmb3InLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ29sJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd1bCcsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGhlYWQnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3Rib2R5JywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0Zm9vdCcsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndHInLCB0aGlzLkxvb3ApO1xuICAgIEFraWxpLmNvbXBvbmVudCgnbG9vcCcsIHRoaXMuTG9vcCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLl9faXRlcmF0b3IgPSBudWxsO1xuICAgIHRoaXMuX19rZXkgPSBudWxsO1xuICAgIHRoaXMuX192YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5fX2luZGV4ID0gbnVsbDtcbiAgICB0aGlzLl9fY29tcGFyaXNvblZhbHVlID0gbnVsbDtcbiAgICB0aGlzLml0ZXJhdG9ycyA9IFtdO1xuICAgIHRoaXMuaXRlcmF0b3JSZWYgPSBudWxsO1xuICAgIHRoaXMuaXRlcmF0b3JPdXRlckhUTUwgPSBudWxsO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmNyZWF0ZUl0ZXJhdG9yKCk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ2luJywgdGhpcy5kcmF3KTtcbiAgfVxuXG4gIGNyZWF0ZUl0ZXJhdG9yKCkge1xuICAgIGxldCBlbDtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuZWwuY2hpbGRyZW5baV07XG5cbiAgICAgIGlmIChjaGlsZC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpID09ICdsb29wJykge1xuICAgICAgICBlbCA9IGNoaWxkO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZWwgPSBjaGlsZDtcbiAgICB9XG5cbiAgICBpZiAoIWVsKSB7XG4gICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xvb3AnKTsgICAgICBcbiAgICAgIGVsLmlubmVySFRNTCA9IHRoaXMuZWwuaW5uZXJIVE1MOyBcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7ICAgICBcbiAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoZWwpO1xuICAgIH1cblxuICAgIGxldCBjb21wb25lbnROYW1lID0gZWwuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKTtcblxuICAgIGlmIChjb21wb25lbnROYW1lICE9ICdsb29wJykge1xuICAgICAgbGV0IGNvbXBvbmVudCA9IEFraWxpLmNvbXBvbmVudChjb21wb25lbnROYW1lIHx8IGVsLnRhZ05hbWUpO1xuXG4gICAgICBpZiAoIWNvbXBvbmVudCkge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcsICdsb29wJyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghKGNvbXBvbmVudC5wcm90b3R5cGUgaW5zdGFuY2VvZiBGb3IpKSB7XG4gICAgICAgIGxldCBtYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbG9vcCcpO1xuICAgICAgICBtYXNrLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgZWwgPSBtYXNrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaHRtbCA9IGVsLmlubmVySFRNTDtcbiAgICB0aGlzLml0ZXJhdG9yUmVmID0gZWwubmV4dFNpYmxpbmc7XG4gICAgdGhpcy5pdGVyYXRvck91dGVySFRNTCA9IGVsLm91dGVySFRNTDtcbiAgICBlbC5yZW1vdmUoKTtcbiAgfVxuXG4gIGNyZWF0ZUl0ZXJhdG9yRWxlbWVudCgpIHtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIGVsLmlubmVySFRNTCA9IHRoaXMuaXRlcmF0b3JPdXRlckhUTUw7XG4gICAgZWwgPSBlbC5jb250ZW50LmZpcnN0Q2hpbGQ7XG4gICAgcmV0dXJuIGVsO1xuICB9XG5cbiAgbG9vcChrZXksIHZhbHVlLCBrZXlzLCBpbmRleCwgZGF0YUNoYW5nZWQpIHtcbiAgICB0aGlzLl9faW5kZXggPSBpbmRleDtcbiAgICB0aGlzLl9fa2V5ID0ga2V5O1xuICAgIHRoaXMuX192YWx1ZSA9IHZhbHVlOyAgICBcbiAgICB0aGlzLl9fY29tcGFyaXNvblZhbHVlID0gdXRpbHMuY29weSh2YWx1ZSk7XG5cbiAgICBpZih0aGlzLml0ZXJhdG9ycy5sZW5ndGggPiBpbmRleCkge1xuICAgICAgbGV0IGl0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcnNbaW5kZXhdO1xuICAgICAgbGV0IGNDb3B5ID0gaXRlcmF0b3IuY29tcGFyc2lvbi5jb3B5O1xuICAgICAgbGV0IGNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgXG4gICAgICBpZiAodGhpcy5fX2luZGV4ICE9PSBpdGVyYXRvci5pbmRleCkge1xuICAgICAgICBpdGVyYXRvci5zZXRJbmRleCgpO1xuICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpdGVyYXRvci5zZXRJbmRleCh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX19rZXkgIT09IGl0ZXJhdG9yLmtleSkge1xuICAgICAgICBpdGVyYXRvci5zZXRLZXkoKTtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaXRlcmF0b3Iuc2V0S2V5KHRydWUpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoIXV0aWxzLmNvbXBhcmUoY0NvcHksIHRoaXMuX19jb21wYXJpc29uVmFsdWUsIHsgaWdub3JlVW5kZWZpbmVkOiB0cnVlIH0pKSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldFZhbHVlKCk7XG4gICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldFZhbHVlKHRydWUpO1xuICAgICAgfVxuXG4gICAgICAoY2hhbmdlZCB8fCBkYXRhQ2hhbmdlZCkgJiYgQWtpbGkuY29tcGlsZShpdGVyYXRvci5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgICByZXR1cm4gaXRlcmF0b3I7XG4gICAgfVxuICAgIFxuICAgIGxldCBlbCA9IHRoaXMuY3JlYXRlSXRlcmF0b3JFbGVtZW50KCk7XG4gICAgZWwuaW5uZXJIVE1MID0gdGhpcy5odG1sO1xuICAgIHRoaXMuZWwuaW5zZXJ0QmVmb3JlKGVsLCB0aGlzLml0ZXJhdG9yUmVmKTtcbiAgICBBa2lsaS5jb21waWxlKGVsKTtcbiAgICB0aGlzLml0ZXJhdG9ycy5wdXNoKGVsLl9fYWtpbGkpO1xuICAgIHJldHVybiBlbC5fX2FraWxpO1xuICB9XG5cbiAgZHJhdyhkYXRhKSB7XG4gICAgaWYgKHR5cGVvZiBkYXRhICE9ICdvYmplY3QnIHx8IGRhdGEgPT09IG51bGwpIHtcbiAgICAgIGlmIChBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgXCJGb3JcIiBjb21wb25lbnQgXCJpblwiIGF0dHJpYnV0ZSB2YWx1ZSB0eXBlIG11c3QgYmUgYW4gb2JqZWN0L2FycmF5YCk7XG4gICAgICAgIGRhdGEgPSBbXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgZGF0YUNoYW5nZWQgPSB1dGlscy5jb21wYXJlKHRoaXMuZGF0YSwgZGF0YSk7XG4gICAgdGhpcy5kYXRhID0gZGF0YTsgICAgXG4gICAgbGV0IGtleXMgPSB7fTtcbiAgICBsZXQgaXRlcmF0b3JzID0gW107XG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICBmb3IgKGxldCBsID0gZGF0YS5sZW5ndGg7IGluZGV4IDwgbDsgaW5kZXgrKykge1xuICAgICAgICBpdGVyYXRvcnMucHVzaCh0aGlzLmxvb3AoaW5kZXgsIGRhdGFbaW5kZXhdLCBrZXlzLCBpbmRleCwgZGF0YUNoYW5nZWQpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBmb3IgKGxldCBrIGluIGRhdGEpIHtcbiAgICAgICAgaWYgKCFkYXRhLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpdGVyYXRvcnMucHVzaCh0aGlzLmxvb3AoaywgZGF0YVtrXSwga2V5cywgaW5kZXgsIGRhdGFDaGFuZ2VkKSk7XG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBpdGVyYXRvcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgaXRlcmF0b3IgPSBpdGVyYXRvcnNbaV07XG4gICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGl0ZXJhdG9yLmVsKTtcbiAgICAgIGl0ZXJhdG9yLml0ZXJhdGUoaSk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IGluZGV4LCBsID0gdGhpcy5pdGVyYXRvcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgaXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yc1tpXTtcbiAgICAgIGl0ZXJhdG9yLl9fZGVzdHJveSgpO1xuICAgICAgdGhpcy5pdGVyYXRvcnMuc3BsaWNlKGksIDEpO1xuICAgICAgbC0tO1xuICAgICAgaS0tO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNsYXNzIExvb3AgZXh0ZW5kcyBGb3Ige1xuICBzdGF0aWMgbWF0Y2hlcyA9ICcnO1xuICBzdGF0aWMgY29udHJvbEF0dHJpYnV0ZXMgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuZm9yID0gbnVsbDtcbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmlzRm9yID0gdGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ2luJyk7XG5cbiAgICBpZiAoIXRoaXMuaXNGb3IgJiYgISh0aGlzLmVsLnBhcmVudE5vZGUuX19ha2lsaSBpbnN0YW5jZW9mIEZvcikpIHtcbiAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19pdGVyYXRvciA9IHRoaXM7XG4gICAgdGhpcy5mb3IgPSB0aGlzLl9fcGFyZW50Ll9fYWtpbGk7XG4gICAgdGhpcy5zZXRJbmRleCgpO1xuICAgIHRoaXMuc2V0S2V5KCk7XG4gICAgdGhpcy5zZXRWYWx1ZSgpO1xuICAgIHRoaXMuaXNGb3IgJiYgc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgaWYodGhpcy5pc0Zvcikge1xuICAgICAgcmV0dXJuIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgc2V0SW5kZXgodGFyZ2V0KSB7XG4gICAgdGhpcy5pbmRleCA9IHRoaXMuZm9yLl9faW5kZXg7XG4gICAgdGhpcy5zY29wZS5fX3NldCgnbG9vcEluZGV4JywgdGhpcy5pbmRleCwgZmFsc2UsIHRhcmdldCk7XG4gIH1cblxuICBzZXRLZXkodGFyZ2V0KSB7XG4gICAgdGhpcy5rZXkgPSB0aGlzLmZvci5fX2tleTtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wS2V5JywgdGhpcy5rZXksIGZhbHNlLCB0YXJnZXQpO1xuICB9XG5cbiAgc2V0VmFsdWUodGFyZ2V0KSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuZm9yLl9fdmFsdWU7XG4gICAgdGhpcy5zY29wZS5fX3NldCgnbG9vcFZhbHVlJywgdGhpcy52YWx1ZSwgdHJ1ZSwgdGFyZ2V0KTtcblxuICAgIHRoaXMuY29tcGFyc2lvbiA9IHtcbiAgICAgIGNvcHk6IHRoaXMuZm9yLl9fY29tcGFyaXNvblZhbHVlLFxuICAgICAgdmFsdWU6IHRoaXMuZm9yLl9fdmFsdWVcbiAgICB9O1xuICB9XG5cbiAgaXRlcmF0ZShpbmRleCkge31cbn1cblxuRm9yLkxvb3AgPSBMb29wO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Zvci5qcyIsImltcG9ydCBBa2lsaSBmcm9tICcuL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcblxuLyoqXG4gKiBTY29wZSBjbGFzcy5cbiAqXG4gKiBBbGwgcHJvcGVydGllcyBzdGFydGluZyB3aXRoIF9fIHdpbGwgbm90IGJlIHdhdGNoaW5nLlxuICogWW91IGNhbiB1c2UgdGhlbSBmb3IgaW50ZXJuYWwgbWFuaXB1bGF0aW9ucy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcGUge1xuICBzdGF0aWMgbmVzdGVkV2F0Y2hpbmc7XG5cbiAgY29uc3RydWN0b3IobmFtZSwgZWwsIGNvbXBvbmVudCkge1xuICAgIHRoaXMuX19uYW1lID0gbmFtZTtcbiAgICB0aGlzLl9fZWwgPSBlbDtcbiAgICB0aGlzLl9fY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIGVsLnNldEF0dHJpYnV0ZSgnc2NvcGUnLCBuYW1lKTtcbiAgfVxuXG4gIGdldCBfX3V0aWxzKCkge1xuICAgIHJldHVybiB1dGlscztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYSBzY29wZSB2YWx1ZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3N0cmljdD1mYWxzZV0gLSB3aXRob3V0IG9iamVjdCBjb3B5aW5nXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0KGtleXMsIHZhbHVlLCBzdHJpY3QgPSBmYWxzZSwgdGFyZ2V0ID0gZmFsc2UpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuICAgIFxuICAgIEFraWxpLnVuaXNvbGF0ZWQoKCkgPT4ge1xuICAgICAgc3RyaWN0ICYmICh0aGlzLl9fY29tcG9uZW50Ll9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyA9IHRydWUpO1xuICAgICAgdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGFyZ2V0PyB0aGlzLl9fdGFyZ2V0OiB0aGlzLCAobGFzdCwgdmFsKSA9PiB7XG4gICAgICAgIGlmICghbGFzdCkge1xuICAgICAgICAgIHJldHVybiB2YWwgfHwge307XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHN0cmljdCAmJiAodGhpcy5fX2NvbXBvbmVudC5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgPSBmYWxzZSk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NvcGUuanMiLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVsLCBjb21wb25lbnQpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICB0aGlzLmVsQ29tcG9uZW50ID0gdGhpcy5lbC5fX2FraWxpIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciB0aGUgZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIHsqfSBkYXRhIC0gc2VuZGluZyBkYXRhLiBXaWxsIGJlIGluIHRoZSBldmVudC5kZXRhaWxcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZV1cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICB0cmlnZ2VyKGRhdGEsIG9wdGlvbnMgPSB7fSwgZm9yY2UgPSBmYWxzZSkge1xuICAgIGlmIChmb3JjZSB8fCAhdGhpcy5pbkV2YWx1YXRpbmcoKSkge1xuICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCh0aGlzLm5hbWUsIHRoaXMucHJlcGFyZU9wdGlvbnMoeyBkZXRhaWw6IGRhdGEsICAuLi5vcHRpb25zIH0pKSk7XG4gICAgfSAgIFxuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoIHRoZSBldmVudFxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBfRXZlbnQgLSBjbGFzcyBvZiB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZV1cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBkaXNwYXRjaChfRXZlbnQsIG9wdGlvbnMgPSB7IGJ1YmJsZXM6IHRydWUgfSwgZm9yY2UgPSBmYWxzZSkge1xuICAgIGlmIChmb3JjZSB8fCAhdGhpcy5pbkV2YWx1YXRpbmcoKSkge1xuICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnQodGhpcy5uYW1lLCB0aGlzLnByZXBhcmVPcHRpb25zKG9wdGlvbnMpKSk7XG4gICAgfVxuICB9XG5cbiAgcHJlcGFyZU9wdGlvbnMob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7IGJ1YmJsZXM6IHRydWUsIC4uLm9wdGlvbnMgfTsgIFxuICAgIHRoaXMuZWxDb21wb25lbnQgJiYgIXRoaXMuZWxDb21wb25lbnQuX19zYXZlQXR0cmlidXRlUHJveHlPdXQgJiYgKG9wdGlvbnMuZGV0YWlsID0gdXRpbHMuY29weShvcHRpb25zLmRldGFpbCkpO1xuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGV2ZW50IGNhbGxiYWNrIGRvZXNuJ3QgcnVuIHJlY3Vyc2l2ZVxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGluRXZhbHVhdGluZygpIHtcbiAgICBsZXQgZGF0YSA9IHRoaXMuY29tcG9uZW50Ll9fZXZhbHVhdGluZ0V2ZW50O1xuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGEuZWwgPT09IHRoaXMuZWwgJiYgZGF0YS5ldmVudC50eXBlID09PSB0aGlzLm5hbWUgJiYgZGF0YS5jb21wb25lbnQgPT09IHRoaXMuY29tcG9uZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgdGhlIGZ1bmN0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gICAqL1xuICBiaW5kKGZuKSB7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKHRoaXMubmFtZSwgdGhpcy5mbiA9IGZuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgdGhlIGZ1bmN0aW9uXG4gICAqL1xuICB1bmJpbmQoKSB7XG4gICAgdGhpcy5mbiAmJiB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5uYW1lLCB0aGlzLmZuKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ldmVudC1lbWl0dGVyLmpzIiwiaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbmNvbnN0IHN0b3JlID0gbmV3IFByb3h5KHt9LCB7XG4gIGdldDogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgaWYgKGtleSA9PSBcIl9fdGFyZ2V0XCIpIHtcbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICB9LFxuICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICBpZih1dGlscy5jb21wYXJlKHRhcmdldFtrZXldLCB2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBcbiAgICB2YWx1ZSA9IHV0aWxzLmNvcHkodmFsdWUpO1xuICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgQWtpbGkucm9vdCAmJiBBa2lsaS5yb290Ll9fc3RvcmVUcmlnZ2VyQnlOYW1lKGtleSwgdmFsdWUpOyAgICBcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgZGVsZXRlUHJvcGVydHk6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgIEFraWxpLnJvb3QgJiYgQWtpbGkucm9vdC5fX3N0b3JlVHJpZ2dlckJ5TmFtZShrZXksIHVuZGVmaW5lZCk7XG4gICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL3N0b3JlLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdyb3V0ZScsIHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1RyYW5zaXRpb259IHRyYW5zaXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBzZXRUcmFuc2l0aW9uKHRyYW5zaXRpb24pIHtcbiAgICBsZXQgc3RhdGUgPSB0cmFuc2l0aW9uLnBhdGguc3RhdGU7XG4gICAgbGV0IHBhcmFtcyA9IHRyYW5zaXRpb24ucGF0aC5wYXJhbXM7XG4gICAgbGV0IHVybCA9IHRyYW5zaXRpb24udXJsO1xuICAgIGxldCBxdWVyeSA9IHRyYW5zaXRpb24ucXVlcnk7XG5cbiAgICBjb25zdCBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24gPSAocGF0aCkgPT4ge1xuICAgICAgaWYgKHBhdGgucGFyZW50KSB7XG4gICAgICAgIGlmIChwYXRoLnBhcmVudC5jb21wb25lbnQpIHtcbiAgICAgICAgICByZXR1cm4gcGF0aC5wYXJlbnQuY29tcG9uZW50Ll9fc2NvcGUuX190cmFuc2l0aW9uLnBhdGg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uKHBhdGgucGFyZW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcGlsZSA9IChodG1sKSA9PiB7IFxuICAgICAgdGhpcy5lbXB0eSgpOyAgXG4gICAgICBsZXQgbmFtZSA9ICdjb21wb25lbnQnO1xuXG4gICAgICBpZihzdGF0ZS5jb21wb25lbnQpIHtcbiAgICAgICAgbGV0IGV4aXN0cyA9IGZhbHNlO1xuICAgIFxuICAgICAgICBmb3IobGV0IGtleSBpbiBBa2lsaS5fX2NvbXBvbmVudHMpIHtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBBa2lsaS5fX2NvbXBvbmVudHNba2V5XTtcbiAgICBcbiAgICAgICAgICBpZihjb21wb25lbnQgPT09IHN0YXRlLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgbmFtZSA9IGtleTsgICAgICAgICAgICBcbiAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaWYoIWV4aXN0cykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIFwiJHtzdGF0ZS5uYW1lfVwiIGhhcyBubyBkZWZpbmVkIGNvbXBvbmVudGApXG4gICAgICAgIH0gXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gYDwkeyBuYW1lIH0+JHsgaHRtbCB9PC8keyBuYW1lIH0+YDtcbiAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX19zY29wZS5fX3RyYW5zaXRpb24gPSB7XG4gICAgICBwYXRoOiB7XG4gICAgICAgIHN0YXRlOiBzdGF0ZS5uYW1lLFxuICAgICAgICBkYXRhOiB0cmFuc2l0aW9uLnBhdGguZGF0YSxcbiAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgIHBhcmVudDogZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uKHRyYW5zaXRpb24ucGF0aClcbiAgICAgIH0sXG4gICAgICBwYXJhbXM6IHRyYW5zaXRpb24ucGFyYW1zLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBxdWVyeTogcXVlcnlcbiAgICB9O1xuXG4gICAgaWYgKCF0cmFuc2l0aW9uLnBhdGgubG9hZGVkKSB7XG4gICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICBpZiAoc3RhdGUudGVtcGxhdGUpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnRlbXBsYXRlO1xuICAgICAgfVxuICBcbiAgICAgIGlmIChzdGF0ZS50ZW1wbGF0ZVVybCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdC5nZXQoc3RhdGUudGVtcGxhdGVVcmwpLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcbiAgICAgIH1cbiAgICB9KS50aGVuKGh0bWwgPT4gY29tcGlsZShodG1sKSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9yb3V0ZS5qcyIsImltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9yZXF1ZXN0LmpzJztcbmltcG9ydCBSb3V0ZSBmcm9tICcuLi9jb21wb25lbnRzL3JvdXRlLmpzJztcblxuZXhwb3J0IGNsYXNzIFRyYW5zaXRpb24ge1xuICBjb25zdHJ1Y3Rvcih1cmwsIHF1ZXJ5LCBoYXNoID0gJycsIHByZXZpb3VzID0gbnVsbCkge1xuICAgIHRoaXMudXJsID0gdXJsO1xuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICB0aGlzLmhhc2ggPSBoYXNoO1xuICAgIHRoaXMucHJldmlvdXMgPSBwcmV2aW91cztcbiAgICB0aGlzLnBhdGggPSBudWxsO1xuICAgIHRoaXMucm91dGVzID0gW107XG4gICAgdGhpcy5zdGF0ZXMgPSB7fTtcbiAgICB0aGlzLnBhcmFtcyA9IHt9O1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHJlZGlyZWN0KCkge1xuICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgcm91dGVyLnN0YXRlLmFwcGx5KHJvdXRlciwgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHNldFBhdGgocGF0aCkge1xuICAgIHBhdGgucGFyZW50ID0gdGhpcy5wYXRoIHx8IG51bGw7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB0aGlzLnJvdXRlcy5wdXNoKHBhdGgpO1xuICAgIHRoaXMuc3RhdGVzW3BhdGguc3RhdGUubmFtZV0gPSBwYXRoO1xuICAgIHRoaXMucGFyYW1zID0gIXBhdGgucGFyZW50PyBwYXRoLnBhcmFtczogey4uLnBhdGgucGFyZW50LnBhcmFtcywgLi4ucGF0aC5wYXJhbXN9O1xuICB9XG5cbiAgZ2V0Um91dGUoc3RhdGUpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMucm91dGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJvdXRlID0gdGhpcy5yb3V0ZXNbaV07XG5cbiAgICAgIGlmIChyb3V0ZS5zdGF0ZSA9PT0gc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHJvdXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaGFzU3RhdGUoc3RhdGUpIHtcbiAgICByZXR1cm4gISF0aGlzLnN0YXRlc1tzdGF0ZS5uYW1lXTtcbiAgfVxuXG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gdHJ1ZTtcbiAgfVxufVxuXG5jb25zdCByb3V0ZXIgPSB7fTtcblxucm91dGVyLmJhc2VVcmwgPSBcIi9cIjtcbnJvdXRlci5zdGF0ZXMgPSBbXTtcbnJvdXRlci5oYXNoTW9kZSA9IHRydWU7XG5yb3V0ZXIuX19yZWRpcmVjdHMgPSAwO1xucm91dGVyLl9faW5pdCA9IGZhbHNlO1xucm91dGVyLl9fb3B0aW9ucyA9IHt9O1xucm91dGVyLl9fcGFyYW1SZWdleCA9IC8oOihbXFx3XFxkLV0rKSkvZztcbnJvdXRlci5fX3JvdXRlU2VsZWN0b3IgPSBjID0+IGMgaW5zdGFuY2VvZiBSb3V0ZTtcblxuLyoqXG4gKiBBZGQgbmV3IHN0YXRlIHRvIHRoZSByb3V0ZXJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHN0YXRlIG5hbWUuIFRvIHNldCBwYXJlbnRzIHlvdSBjYW4gdXNlIGRvdCwgZS5nLiAnYXBwLmFydGljbGUuZWRpdCdcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXR0ZXJuIC0gdXJsIHBhdHRlcm4gbGlrZSAnYXBwL2FydGljbGUvOmlkJ1xuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge3JvdXRlcn1cbiAqL1xucm91dGVyLmFkZCA9IGZ1bmN0aW9uIChuYW1lLCBwYXR0ZXJuLCBvcHRpb25zID0ge30pIHtcbiAgaWYodHlwZW9mIG5hbWUgPT0gJ29iamVjdCcpIHtcbiAgICBvcHRpb25zID0gbmFtZTtcbiAgICBwYXR0ZXJuID0gb3B0aW9ucy5wYXR0ZXJuO1xuICAgIG5hbWUgPSBvcHRpb25zLnN0YXRlO1xuICAgIGRlbGV0ZSBvcHRpb25zLnBhdHRlcm47XG4gICAgZGVsZXRlIG9wdGlvbnMuc3RhdGU7XG4gIH1cblxuICBpZighbmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIG11c3QgaGF2ZSBhIG5hbWVgKTtcbiAgfVxuXG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIHRlbXBsYXRlOiAnJyxcbiAgICB0ZW1wbGF0ZVVybDogJycsXG4gICAgYWJzdHJhY3Q6IGZhbHNlLFxuICAgIGNvbXBvbmVudDogbnVsbCxcbiAgICBoYW5kbGVyOiAodHJhbnNpdGlvbikgPT4ge30sXG4gIH07XG5cbiAgaWYoQWtpbGkub3B0aW9ucy5kZWJ1ZyAmJiBvcHRpb25zLmNvbXBvbmVudCAmJiAob3B0aW9ucy50ZW1wbGF0ZSB8fCBvcHRpb25zLnRlbXBsYXRlVXJsKSkge1xuICAgIGNvbnNvbGUud2FybihgUm91dGVyIHN0YXRlIFwiJHtuYW1lfVwiIG11c3Qgb25seSBoYXZlIGEgY29tcG9uZW50IG9yIHRlbXBsYXRlIG9wdGlvbmApO1xuICB9IFxuXG4gIGlmICghb3B0aW9ucy50ZW1wbGF0ZSAmJiAhb3B0aW9ucy50ZW1wbGF0ZVVybCAmJiAhb3B0aW9ucy5jb21wb25lbnQpIHtcbiAgICBvcHRpb25zLmFic3RyYWN0ID0gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0aGlzLmhhcyhuYW1lKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIFwiJHtuYW1lfVwiIGlzIGFscmVhZHkgZXhpc3RzYClcbiAgfVxuXG4gIHRoaXMuc2V0U3RhdGUobmFtZSwgcGF0dGVybiwgey4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zfSk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBzdGF0ZSBmcm9tIHRoZSBsaXN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucm91dGVyLnJlbW92ZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAodGhpcy5zdGF0ZXNbaV0ubmFtZSA9PSBuYW1lKSB7XG4gICAgICB0aGlzLnN0YXRlcy5zcGxpY2UoaSwgMSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQ2hlY2sgc3RhdGUgZXhpc3RzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmICh0aGlzLnN0YXRlc1tpXS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHRoZSBzdGF0ZSB0byB0aGUgcGFzc2VkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzdGF0ZSBuYW1lXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gLSBwYXJhbXMgZm9yIHN0YXRlIHtpZDogMX0gPT4gJy9hcHAvOmlkJyA9PiAnL2FwcC8xJ1xuICogQHBhcmFtIHtvYmplY3R9IFtxdWVyeV0gLSBxdWVyeSB7eDogMX0gPT4gJy9hcHAvP3g9MSdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbaGFzaF1cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqL1xucm91dGVyLnN0YXRlID0gZnVuY3Rpb24gKG5hbWUsIHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gJycsIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgc3RhdGUgPSB0aGlzLmdldFN0YXRlKG5hbWUpO1xuXG4gIGlmICghc3RhdGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCByb3V0ZSBzdGF0ZSB3aXRoIG5hbWUgJHtuYW1lfWApO1xuICB9XG5cbiAgbGV0IHVybCA9IHRoaXMuY3JlYXRlU3RhdGVVcmwoc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gpO1xuXG4gIGlmICghb3B0aW9ucy5yZWxvYWQgJiYgdXJsID09PSB0aGlzLmdldFVybCgpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5fX29wdGlvbnMgPSBvcHRpb25zO1xuICB0aGlzLnNldFVybCh1cmwpO1xufTtcblxuLyoqXG4gKiBHbyBiYWNrXG4gKi9cbnJvdXRlci5iYWNrID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeS5iYWNrLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBHbyB0byBhbnkgd2F5XG4gKi9cbnJvdXRlci5nbyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkuZ28uYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIEdvIGZvcndhcmRcbiAqL1xucm91dGVyLmZvcndhcmQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LmZvcndhcmQuYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIENoYW5nZSBzdGF0ZSBieSB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKi9cbnJvdXRlci5sb2NhdGlvbiA9IGZ1bmN0aW9uKHVybCwgb3B0aW9ucyA9IHsgcmVsb2FkOiBmYWxzZSB9KSB7XG4gIHRoaXMuX19vcHRpb25zID0gb3B0aW9ucztcblxuICBpZiAodGhpcy5oYXNoTW9kZSkge1xuICAgIGxldCBjdXJyZW50ID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTtcblxuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gdXJsO1xuICAgIGN1cnJlbnQgPT09IHVybCAmJiB0aGlzLmNoYW5nZVN0YXRlKCkuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgfVxuICBlbHNlIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgJycsIHVybCk7XG4gIH1cbn07XG5cbi8qKlxuICogUm91dGVyIGluaXRpYWxpemF0aW9uLiBTaG91bGQgYmUgY2FsbGVkIGJlZm9yZSBBa2lsaS5pbml0KClcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW2RlZmF1bHRVcmxdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtoYXNoTW9kZT10cnVlXVxuICovXG5yb3V0ZXIuaW5pdCA9IGZ1bmN0aW9uIChkZWZhdWx0VXJsID0gJycsIGhhc2hNb2RlID0gdHJ1ZSkge1xuICBsZXQgb2xkUHVzaFN0YXRlID0gd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlO1xuXG4gIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCByZXMgPSBvbGRQdXNoU3RhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICByb3V0ZXIuY2hhbmdlU3RhdGUoKS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgdGhpcy5fX29uU3RhdGVDaGFuZ2VIYW5kbGVyID0gKCkgPT4ge1xuICAgIHRoaXMuY2hhbmdlU3RhdGUoKS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICB9O1xuXG4gIHRoaXMuZGVmYXVsdFVybCA9IGRlZmF1bHRVcmw7XG4gIHRoaXMuaGFzaE1vZGUgPSBoYXNoTW9kZTtcblxuICB0aGlzLnN0YXRlcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgYSA9IGEubmFtZS5zcGxpdCgnLicpLmxlbmd0aDtcbiAgICBiID0gYi5uYW1lLnNwbGl0KCcuJykubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGEgLSBiO1xuICB9KTtcblxuICBsZXQgc3RhdGVzID0ge307XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcbiAgICBsZXQgcGFyZW50cyA9IFtdO1xuXG4gICAgc3RhdGVzW3N0YXRlLm5hbWVdID0gc3RhdGU7XG4gICAgc3RhdGUuY2hpbGRyZW4gPSBbXTtcbiAgICBwYXJlbnRzID0gc3RhdGUubmFtZS5zcGxpdCgnLicpO1xuICAgIHBhcmVudHMucG9wKCk7XG4gICAgc3RhdGUubGV2ZWwgPSBzdGF0ZS5hYnN0cmFjdD8gbnVsbDogcGFyZW50cy5sZW5ndGg7XG5cbiAgICBpZiAocGFyZW50cy5sZW5ndGgpIHtcbiAgICAgIGxldCBwYXJlbnROYW1lID0gcGFyZW50cy5qb2luKCcuJyk7XG4gICAgICBsZXQgcGFyZW50ID0gc3RhdGVzW3BhcmVudE5hbWVdO1xuXG4gICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCBwYXJlbnQgcm91dGUgc3RhdGUgXCIke3BhcmVudE5hbWV9XCIgZm9yIFwiJHtzdGF0ZS5uYW1lfVwiYClcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlLmxldmVsICE9PSBudWxsICYmIHBhcmVudC5hYnN0cmFjdCkge1xuICAgICAgICBzdGF0ZS5sZXZlbC0tO1xuICAgICAgfVxuXG4gICAgICBzdGF0ZS5mdWxsUGF0dGVybiA9IHRoaXMuc3BsaXRTbGFzaGVzKHBhcmVudC5mdWxsUGF0dGVybiArICcvJyArIHN0YXRlLnBhdHRlcm4pO1xuICAgICAgcGFyZW50LmNoaWxkcmVuLnB1c2goc3RhdGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHN0YXRlLmZ1bGxQYXR0ZXJuID0gc3RhdGUucGF0dGVybjtcbiAgICB9XG4gIH1cblxuICBpZiAoIXRoaXMuc3RhdGVzLmxlbmd0aCAmJiBBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgY29uc29sZS53YXJuKGBZb3UgZGlkbid0IGFkZCBhbnkgcm91dGVzIHRvIHRoZSByb3V0ZXJgKTtcbiAgfVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMuX19vblN0YXRlQ2hhbmdlSGFuZGxlcik7XG4gIHRoaXMuX19pbml0ID0gdHJ1ZTtcbn07XG5cbi8qKlxuICogR2V0IHN0YXRlIGJ5IG5hbWVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHJldHVybnMge29iamVjdHxudWxsfVxuICovXG5yb3V0ZXIuZ2V0U3RhdGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLm5hbWUgPT0gbmFtZSkge1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBTZXQgc3RhdGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IHBhdHRlcm5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKi9cbnJvdXRlci5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChuYW1lLCBwYXR0ZXJuLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IHN0YXRlID0gey4uLm9wdGlvbnMsIG5hbWUsIHBhdHRlcm59O1xuXG4gIHJvdXRlci5zdGF0ZXMucHVzaChzdGF0ZSk7XG5cbiAgcmV0dXJuIHN0YXRlO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgc3RhdGUgYnkgbmFtZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnJvdXRlci5yZW1vdmVTdGF0ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZXNbaV07XG5cbiAgICBpZiAoc3RhdGUubmFtZSA9PSBuYW1lKSB7XG4gICAgICB0aGlzLnN0YXRlcy5zcGxpY2UoaSwgMSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogU2V0IHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqL1xucm91dGVyLnNldFVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgdGhpcy5oYXNoTW9kZT8gdGhpcy5zZXRIYXNoVXJsKHVybCk6IHRoaXMuc2V0SGlzdG9yeVVybCh1cmwpO1xufTtcblxuLyoqXG4gKiBTZXQgdXJsIHVzaW5nIGhpc3RvcnlcbiAqXG4gKiBAcGFyYW0gdXJsXG4gKi9cbnJvdXRlci5zZXRIaXN0b3J5VXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgJycsIHVybCk7XG59O1xuXG4vKipcbiAqIFNldCB1cmwgdXNpbmcgaGFzaFxuICpcbiAqIEBwYXJhbSB1cmxcbiAqL1xucm91dGVyLnNldEhhc2hVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyMnICsgKHVybCB8fCAnLycpO1xufTtcblxuLyoqXG4gKiBHZXQgdXJsXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLmdldFVybCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuaGFzaE1vZGUgPyB0aGlzLmdldEhhc2hVcmwoKSA6IHRoaXMuZ2V0SGlzdG9yeVVybCgpO1xufTtcblxuLyoqXG4gKiBHZXQgdXJsIHVzaW5nIGhpc3RvcnlcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuZ2V0SGlzdG9yeVVybCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyB3aW5kb3cubG9jYXRpb24uaGFzaDtcbn07XG5cbi8qKlxuICogR2V0IHVybCB1c2luZyBoYXNoXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLmdldEhhc2hVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKC9eIy8sICcnKTtcbn07XG5cbi8qKlxuICogR2V0IHF1ZXJ5IHBhcmFtc1xuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5oYXNoTW9kZSA/IHRoaXMuZ2V0SGFzaFVybFF1ZXJ5KCkgOiB0aGlzLmdldEhpc3RvcnlVcmxRdWVyeSgpO1xufTtcblxuLyoqXG4gKiBHZXQgcXVlcnkgcGFyYW1zIHVzaW5nIGhpc3RvcnlcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0SGlzdG9yeVVybFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByZXF1ZXN0LnBhcmFtc0Zyb21RdWVyeSh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykpO1xufTtcblxuLyoqXG4gKiBHZXQgcXVlcnkgcGFyYW1zIHVzaW5nIGhhc2hcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0SGFzaFVybFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByZXF1ZXN0LnBhcmFtc0Zyb21RdWVyeSgod2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJz8nKVsxXSB8fCAnJykpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgdXJsIGJ5IGRhdGFcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc11cbiAqIEBwYXJhbSB7b2JqZWN0fSBbcXVlcnldXG4gKiBAcGFyYW0ge3N0cmluZ30gW2hhc2hdXG4gKi9cbnJvdXRlci5jcmVhdGVTdGF0ZVVybCA9IGZ1bmN0aW9uIChzdGF0ZSwgcGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSAnJykge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcblxuICBsZXQgdXJsID0gc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZSh0aGlzLl9fcGFyYW1SZWdleCwgKG0sIGYsIHYpID0+IHtcbiAgICByZXR1cm4gcGFyYW1zW3ZdIHx8ICcnO1xuICB9KTtcblxuICB1cmwgPSB0aGlzLnNwbGl0U2xhc2hlcyh1cmwpO1xuXG4gIGlmIChPYmplY3Qua2V5cyhxdWVyeSkubGVuZ3RoKSB7XG4gICAgdXJsICs9ICc/JyArIHJlcXVlc3QucGFyYW1zVG9RdWVyeShxdWVyeSk7XG4gIH1cblxuICBoYXNoID0gKGhhc2ggfHwgJycpLnJlcGxhY2UoJyMnLCAnJyk7XG5cbiAgaWYgKCF0aGlzLmhhc2hNb2RlICYmIGhhc2gpIHtcbiAgICB1cmwgKz0gJyMnICsgaGFzaDtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbGwgdW5uZWNlc3Nhcnkgc2xhc2hlcyBmcm9tIGFuIHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5zcGxpdFNsYXNoZXMgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHJldHVybiB1cmwucmVwbGFjZSgvW1xcL10rL2csICcvJyk7XG59O1xuXG4vKipcbiAqIENsZWFyIGFsbCByb3V0ZXIgZGVwZW5kZW5jaWVzXG4gKi9cbnJvdXRlci5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5fX29uU3RhdGVDaGFuZ2VIYW5kbGVyKTtcbn07XG5cbi8qKlxuICogR2V0IHN0YXRlIHVybCBjb250ZW50XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldFBhdHRlcm5Db250ZW50ID0gZnVuY3Rpb24gKHN0YXRlLCB1cmwpIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG5cbiAgbGV0IGtleXMgPSBbXTtcbiAgbGV0IGkgPSAwO1xuICBsZXQgcGFyYW1zID0ge307XG5cbiAgdXJsID0gdXJsLnNwbGl0KCc/JylbMF07XG4gIHVybCA9IHVybC5zcGxpdCgnIycpWzBdO1xuXG4gIGxldCB1cmxQYXR0ZXJuID0gc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZSh0aGlzLl9fcGFyYW1SZWdleCwgKG0sIGYsIHYpID0+IHtcbiAgICBrZXlzLnB1c2godik7XG5cbiAgICByZXR1cm4gJyhbXlxcXFwvXSopJztcbiAgfSk7XG5cbiAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cCh1cmxQYXR0ZXJuKTtcbiAgbGV0IGlzSW5jbHVkZWQgPSB1cmwubWF0Y2gocmVnZXgpO1xuXG4gIGlmICghaXNJbmNsdWRlZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdXJsLnJlcGxhY2UocmVnZXgsIChtLCB2KSA9PiB7XG4gICAgdiAmJiAocGFyYW1zW2tleXNbaV1dID0gdik7XG4gICAgaSsrO1xuICB9KTtcblxuICByZXR1cm4geyBwYXJhbXMgfTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIHN0YXRlIGlzIGFjdGl2ZSBub3dcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVzXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmlzQWN0aXZlU3RhdGUgPSBmdW5jdGlvbihzdGF0ZSwgaW5jbHVkZXMgPSBmYWxzZSkge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcblxuICBsZXQgdXJsID0gdGhpcy5zcGxpdFNsYXNoZXModGhpcy5nZXRVcmwoKS5zcGxpdCgnPycpWzBdICsgJy8nKTtcbiAgbGV0IHVybFBhdHRlcm4gPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAnKFteXFxcXC9dKiknKTtcbiAgbGV0IHN0ciA9IGluY2x1ZGVzPyB1cmxQYXR0ZXJuOiB0aGlzLnNwbGl0U2xhc2hlcygnXicgKyB1cmxQYXR0ZXJuICsgJ1xcLyQnKTtcbiAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChzdHIpO1xuXG4gIHJldHVybiByZWdleC50ZXN0KHVybCk7XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSBjdXJyZW50IHVybCBpbmNsdWRlcyBhIHN0YXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnJvdXRlci5pbkFjdGl2ZVN0YXRlID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgcmV0dXJuIHJvdXRlci5pc0FjdGl2ZVN0YXRlKHN0YXRlLCB0cnVlKTtcbn07XG5cbi8qKlxuICogR2V0IHJvdXRlIGNvbXBvbmVudCBieSBsZXZlbFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZXZlbFxuICovXG5yb3V0ZXIuZ2V0Um91dGUgPSBmdW5jdGlvbiAobGV2ZWwpIHtcbiAgbGV0IGkgPSAwO1xuXG4gIGNvbnN0IGZpbmQgPSAoZWwpID0+IHtcbiAgICBsZXQgcm91dGUgPSBlbC5jaGlsZCh0aGlzLl9fcm91dGVTZWxlY3Rvcik7XG5cbiAgICBpZiAoIXJvdXRlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoaSA9PSBsZXZlbCkge1xuICAgICAgcmV0dXJuIHJvdXRlO1xuICAgIH1cblxuICAgIGkrKztcblxuICAgIHJldHVybiBmaW5kKHJvdXRlKTtcbiAgfTtcblxuICByZXR1cm4gZmluZChBa2lsaS5yb290KTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBmaXJzdCBtYXRjaFxuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGFyclxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge29iamVjdHxudWxsfVxuICovXG5yb3V0ZXIuZ2V0QXJyYXlQYXR0ZXJuQ29udGVudCA9IGZ1bmN0aW9uIChhcnIsIHVybCkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSBhcnJbaV07XG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldFBhdHRlcm5Db250ZW50KHN0YXRlLCB1cmwpO1xuXG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge3N0YXRlOiBzdGF0ZSwgLi4uY29udGVudH07XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogR2V0IHN0YXRlcyBieSBsZXZlbFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZXZlbFxuICogQHJldHVybnMge0FycmF5fVxuICovXG5yb3V0ZXIuZ2V0U3RhdGVzQnlMZXZlbCA9IGZ1bmN0aW9uIChsZXZlbCkge1xuICBsZXQgc3RhdGVzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZS5sZXZlbCA8IGxldmVsKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc3RhdGUubGV2ZWwgPiBsZXZlbCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgc3RhdGVzLnB1c2goc3RhdGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlcztcbn07XG5cbi8qKlxuICogSXNvbGF0ZSB0aGUgZnVuY3Rpb24gdG8gbm90IHRyaWdnZXIgcm91dGVyIGhhbmRsZXJzIGluc2lkZVxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xucm91dGVyLmlzb2xhdGUgPSBmdW5jdGlvbihmbikge1xuICB0aGlzLl9fZGlzYWJsZUNoYW5nZSA9IHRydWU7XG4gIGxldCByZXMgPSBmbigpO1xuICB0aGlzLl9fZGlzYWJsZUNoYW5nZSA9IGZhbHNlO1xuICByZXR1cm4gcmVzO1xufVxuXG4vKipcbiAqIENoYW5nZSBzdGF0ZVxuICovXG5yb3V0ZXIuY2hhbmdlU3RhdGUgPSBmdW5jdGlvbiAoKSB7ICBcbiAgaWYgKHRoaXMuX19kaXNhYmxlQ2hhbmdlKSB7XG4gICAgZGVsZXRlIHRoaXMuX19kaXNhYmxlQ2hhbmdlO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKCk7XG4gIGxldCBoYXNoID0gdGhpcy5oYXNoTW9kZT8gJyc6IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7XG4gIGxldCBxdWVyeSA9IHRoaXMuZ2V0VXJsUXVlcnkoKTtcbiAgbGV0IHByZXZUcmFuc2l0aW9uID0gcm91dGVyLnRyYW5zaXRpb24gfHwgbnVsbDtcbiAgbGV0IHRyYW5zaXRpb24gPSByb3V0ZXIudHJhbnNpdGlvbiA9IG5ldyBUcmFuc2l0aW9uKHVybCwgcXVlcnksIGhhc2gsIHByZXZUcmFuc2l0aW9uKTtcbiAgbGV0IGxldmVsID0gMDtcblxuICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3N0YXRlLWNoYW5nZScsIHsgZGV0YWlsOiB0cmFuc2l0aW9uIH0pKTtcblxuICBjb25zdCBuZXh0ID0gKHN0YXRlcywgb25FbmQpID0+IHtcbiAgICBpZiAoIXN0YXRlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBvbkVuZCAmJiBvbkVuZCgpO1xuICAgIH1cblxuICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRBcnJheVBhdHRlcm5Db250ZW50KHN0YXRlcywgdXJsKTtcblxuICAgIGlmICghY29udGVudCkge1xuICAgICAgcmV0dXJuIG9uRW5kICYmIG9uRW5kKCk7XG4gICAgfVxuXG4gICAgbGV0IHN0YXRlID0gY29udGVudC5zdGF0ZTtcbiAgICBsZXQgcGFyYW1zID0gY29udGVudC5wYXJhbXM7XG4gICAgbGV0IHJvdXRlID0gc3RhdGUuYWJzdHJhY3Q/IG51bGw6IHRoaXMuZ2V0Um91dGUoc3RhdGUubGV2ZWwpO1xuXG4gICAgaWYgKCFyb3V0ZSAmJiAhc3RhdGUuYWJzdHJhY3QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvciAoYE5vdCBmb3VuZCByb3V0ZSBjb21wb25lbnQgZm9yIHN0YXRlIFwiJHtzdGF0ZS5uYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgdHJhbnNpdGlvbi5zZXRQYXRoKHsgc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gsIGNvbXBvbmVudDogcm91dGUsIGxvYWRlZDogdHJ1ZSB9KTtcbiAgICBsZXZlbCsrO1xuXG4gICAgbGV0IGhhc1N0YXRlID0gcHJldlRyYW5zaXRpb24gJiYgcHJldlRyYW5zaXRpb24uaGFzU3RhdGUoc3RhdGUpO1xuICAgIGxldCBpc0RpZmZlcmVudCA9IHRydWU7XG5cbiAgICBpZiAoaGFzU3RhdGUpIHtcbiAgICAgIGxldCByb3V0ZSA9IHByZXZUcmFuc2l0aW9uLmdldFJvdXRlKHN0YXRlKTtcbiAgICAgIGxldCBwcmV2ID0geyBwYXJhbXM6IHJvdXRlLnBhcmFtcywgcXVlcnk6IHJvdXRlLnF1ZXJ5LCBoYXNoOiByb3V0ZS5oYXNoIH07XG4gICAgICBsZXQgY3VycmVudCA9IHsgcGFyYW1zLCBxdWVyeSwgaGFzaCB9O1xuICAgICAgaXNEaWZmZXJlbnQgPSAhdXRpbHMuY29tcGFyZShwcmV2LCBjdXJyZW50KTtcbiAgICB9XG5cbiAgICB0cmFuc2l0aW9uLnBhdGgubG9hZGVkID0gaXNEaWZmZXJlbnQgJiYgdGhpcy5fX29wdGlvbnMucmVsb2FkICE9PSBmYWxzZTtcbiAgICBcbiAgICBQcm9taXNlLnJlc29sdmUodHJhbnNpdGlvbi5wYXRoLmxvYWRlZD8gc3RhdGUuaGFuZGxlcih0cmFuc2l0aW9uKTogdHJhbnNpdGlvbi5wYXRoLmRhdGEpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmICh0cmFuc2l0aW9uLl9fY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBvbkVuZCAmJiBvbkVuZCgpO1xuICAgICAgfVxuXG4gICAgICB0cmFuc2l0aW9uLnBhdGguZGF0YSA9IGRhdGE7XG4gICAgICBzdGF0ZS50aXRsZSAmJiAoZG9jdW1lbnQudGl0bGUgPSB0eXBlb2Ygc3RhdGUudGl0bGUgPT0gJ2Z1bmN0aW9uJz8gc3RhdGUudGl0bGUodHJhbnNpdGlvbik6IHN0YXRlLnRpdGxlKTtcblxuICAgICAgaWYgKHN0YXRlLmFic3RyYWN0KSB7XG4gICAgICAgIHJldHVybiBuZXh0KHN0YXRlLmNoaWxkcmVuLCBvbkVuZCk7XG4gICAgICB9XG4gXG4gICAgICByb3V0ZS5zZXRUcmFuc2l0aW9uKHRyYW5zaXRpb24pLnRoZW4oKCkgPT4ge1xuICAgICAgICBuZXh0KHN0YXRlLmNoaWxkcmVuLCBvbkVuZCk7XG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiBvbkVuZCAmJiBvbkVuZChlcnIpKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIG5leHQodGhpcy5nZXRTdGF0ZXNCeUxldmVsKDApLCAoZXJyKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0cmFuc2l0aW9uLnJvdXRlcy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKHRoaXMuX19yZWRpcmVjdHMpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihgV3Jvbmcgcm91dGVyIGRlZmF1bHQgdXJsIFwiJHt0aGlzLmRlZmF1bHRVcmx9XCJgKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0VXJsKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFVybCA9PSB0aGlzLmdldFVybCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihgTm90IGZvdW5kIGFueSByb3V0ZXNgKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fX2Rpc2FibGVDaGFuZ2UgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuc2V0VXJsKHRoaXMuZGVmYXVsdFVybCk7XG4gICAgICAgICAgdGhpcy5fX3JlZGlyZWN0cysrO1xuXG4gICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlU3RhdGUoKS50aGVuKHJlc29sdmUpLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgTm90IGZvdW5kIGEgZGVmYXVsdCByb3V0ZS4gWW91IGNhbiBwYXNzIGl0IGluIFwicm91dGVyLmluaXQoZGVmYXVsdFVybClcIiBmdW5jdGlvbmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmICghdGhpcy5fX29wdGlvbnMuc2F2ZVNjcm9sbFBvc2l0aW9uICYmICF0cmFuc2l0aW9uLmhhc2gpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9fb3B0aW9ucyA9IHt9O1xuICAgICAgdGhpcy5fX3JlZGlyZWN0cyA9IDA7XG5cbiAgICAgIGlmIChwcmV2VHJhbnNpdGlvbikge1xuICAgICAgICBmb3IgKGxldCBpID0gbGV2ZWwsIGwgPSBwcmV2VHJhbnNpdGlvbi5yb3V0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgbGV0IHJvdXRlID0gcHJldlRyYW5zaXRpb24ucm91dGVzW2ldO1xuICAgICAgICAgIFxuICAgICAgICAgIHJvdXRlLmNvbXBvbmVudCAmJiByb3V0ZS5jb21wb25lbnQuZW1wdHkoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3N0YXRlLWNoYW5nZWQnLCB7IGRldGFpbDogdHJhbnNpdGlvbiB9KSk7XG4gICAgICByZXNvbHZlKHRyYW5zaXRpb24pOyAgXG4gICAgfSk7XG4gIH0pO1xufTtcblxucm91dGVyLlRyYW5zaXRpb24gPSBUcmFuc2l0aW9uO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL3JvdXRlci5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogSWYgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElmIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gdHJ1ZTtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW2lzXSc7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsncmVjcmVhdGUnXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaWYnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2Vsc2UtaWYnLCB0aGlzLkVsc2VJZik7XG4gICAgQWtpbGkuY29tcG9uZW50KCdlbHNlJywgdGhpcy5FbHNlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5zdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5yZWNyZWF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuaXNDb21waWxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGlzcGxheSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5lbCkuZGlzcGxheTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cigncmVjcmVhdGUnLCB0aGlzLnNldFJlY3JlYXRpb24pO1xuICAgIHJldHVybiB0aGlzLmF0dHIoJ2lzJywgdmFsID0+ICh0aGlzLnN0YXRlID0gISF2YWwsIHRoaXMuc2V0U3RhdGUoKSkpO1xuICB9XG5cbiAgc2V0QWN0aXZpdHkoYWN0aXZlKSB7XG4gICAgdGhpcy5hY3RpdmUgPSBhY3RpdmU7XG4gIH1cblxuICBzZXRSZWNyZWF0aW9uKHJlY3JlYXRlKSB7XG4gICAgdGhpcy5yZWNyZWF0ZSA9IHJlY3JlYXRlO1xuICB9XG5cbiAgc2V0U3RhdGUoKSB7XG4gICAgbGV0IHJlcyA9IHRoaXMuY29tcGlsYXRpb24oKTtcbiAgICBsZXQgbmV4dCA9IHRoaXMuZWwubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGxldCByZXN1bHQ7XG5cbiAgICBpZiAoIW5leHQgfHwgIW5leHQubWF0Y2hlcygnZWxzZS1pZixlbHNlJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXh0Ll9fYWtpbGkuc2V0QWN0aXZpdHkodGhpcy5hY3RpdmUgfHwgdGhpcy5zdGF0ZSk7XG4gICAgbmV4dC5fX2FraWxpLnNldFJlY3JlYXRpb24odGhpcy5yZWNyZWF0ZSk7XG4gICAgcmVzdWx0ID0gbmV4dC5fX2FraWxpLnNldFN0YXRlKCk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMpLnRoZW4oKCkgPT4gIHJlc3VsdCk7XG4gIH1cblxuICBjb21waWxhdGlvbigpIHtcbiAgICBsZXQgcmVzO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUgJiYgIXRoaXMuYWN0aXZlKSB7XG4gICAgICBpZiAodGhpcy5yZWNyZWF0ZSB8fCAhdGhpcy5pc0NvbXBpbGVkKSB7XG4gICAgICAgIHJlcyA9IHRoaXMuY29tcGlsZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmRpc3BsYXk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHRoaXMucmVjcmVhdGUpIHtcbiAgICAgICAgdGhpcy5fX2VtcHR5KCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghdGhpcy5pc0NvbXBpbGVkKSB7XG4gICAgICAgIHJlcyA9IHRoaXMuY29tcGlsZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgY29tcGlsZSgpIHtcbiAgICBsZXQgcmVzO1xuXG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XG4gICAgcmVzID0gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICB0aGlzLmlzQ29tcGlsZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxufTtcblxuLyoqXG4gKiBFbHNlSWYgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBFbHNlSWYgZXh0ZW5kcyBJZiB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIEVsc2UgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBFbHNlIGV4dGVuZHMgRWxzZUlmIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnaXMnLCAndHJ1ZScpO1xuICB9XG59XG5cbklmLkVsc2VJZiA9IEVsc2VJZjtcbklmLkVsc2UgPSBFbHNlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2lmLmpzIiwiaW1wb3J0IEZvciwgeyBMb29wIH0gZnJvbSAnLi9mb3IuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnbXVsdGlwbGUnXTtcbiAgc3RhdGljIGV2ZW50cyA9IFsnY2hhbmdlJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3NlbGVjdCcsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnb3B0aW9uJywgdGhpcy5PcHRpb24pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pdGVyYXRvclRhZ05hbWUgPSAnb3B0aW9uJztcbiAgICB0aGlzLmlzTXVsdGlwbGUgPSBmYWxzZTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmVsLmNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cbiAgXG4gIGNvbXBpbGVkKCkgeyBcbiAgICBsZXQgcmVzID0gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgICBcbiAgICB0aGlzLmF0dHIoJ211bHRpcGxlJywgdGhpcy5zZXRNdWx0aXBsZSk7XG4gICAgdGhpcy5hdHRyKCdjb250ZW50JywgdGhpcy5zZXRDb250ZW50KTtcbiAgICB0aGlzLmF0dHIoJ2luJywgdGhpcy5kcmF3U2VsZWN0KTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgc2V0TXVsdGlwbGUodmFsdWUpIHtcbiAgICB0aGlzLmlzTXVsdGlwbGUgPSB2YWx1ZTtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUodXRpbHMuY29weSh0aGlzLmVsLmNvbnRlbnQpKSk7XG4gIH1cblxuICBzZXRDb250ZW50KHZhbHVlKSB7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKHZhbHVlKSk7XG4gIH1cblxuICBkcmF3U2VsZWN0KCkge1xuICAgIGxldCBzZWxlY3RlZCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldLl9fYWtpbGk7XG4gICAgICBsZXQgc2VsZWN0aW9uID0gb3B0aW9uLmF0dHJzLnNlbGVjdGVkO1xuXG4gICAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICAgIHNlbGVjdGVkLnB1c2gob3B0aW9uLmVsLnZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgb3B0aW9uLmVsLnNlbGVjdGVkID0gc2VsZWN0aW9uO1xuICAgIH1cblxuICAgIGlmICghc2VsZWN0ZWQubGVuZ3RoKSB7XG4gICAgICB0aGlzLnJlZGVmaW5lKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKHNlbGVjdGVkKSk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlSXRlcmF0b3JFbGVtZW50KCkge1xuICAgIGxldCBlbCA9IHN1cGVyLmNyZWF0ZUl0ZXJhdG9yRWxlbWVudCgpO1xuXG4gICAgaWYgKCFlbC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0aGlzLmh0bWwudHJpbSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBpbkNvbnRlbnQodmFsdWUpIHtcbiAgICBpZiAoIXRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZWwuY29udGVudCA9PT0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZWwuY29udGVudC5pbmRleE9mKHZhbHVlKSAhPSAtMTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgaWYgKCF0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsLnZhbHVlO1xuICAgIH1cblxuICAgIGxldCBjb250ZW50ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgIGlmIChvcHRpb24uc2VsZWN0ZWQpIHtcbiAgICAgICAgY29udGVudC5wdXNoKG9wdGlvbi52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBmb3JtYXRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCk/IFt2YWx1ZV06IFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLmxlbmd0aD8gdmFsdWVbMF06ICcnO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmVkZWZpbmUoKSB7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmdldENvbnRlbnQoKSk7XG4gIH1cblxuICBjaGFuZ2VWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh1dGlscy5jb21wYXJlKHRoaXMuZWwuY29udGVudCwgdmFsdWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB0aGlzLmVsLnZhbHVlID0gdmFsdWVbdmFsdWUubGVuZ3RoIC0gMV07XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldO1xuXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHZhbHVlLmluZGV4T2Yob3B0aW9uLnZhbHVlKSAhPSAtMTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmVsLnZhbHVlID0gdmFsdWU7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldO1xuXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IG9wdGlvbi52YWx1ZSA9PSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmVsLmNvbnRlbnQgPSB2YWx1ZTtcbiAgICB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjbGFzcyBPcHRpb24gZXh0ZW5kcyBMb29wIHtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydzZWxlY3RlZCddO1xuXG4gIF9fZ2V0UGFyc2VkRXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG4gICAgcmV0dXJuIHV0aWxzLmRlY29kZUh0bWxFbnRpdGllcyhleHByZXNzaW9uKTtcbiAgfVxuXG4gIGNoYW5nZWRTZWxlY3RlZCh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U2VsZWN0ZWQodmFsdWUpO1xuICB9XG5cbiAgc2V0U2VsZWN0ZWQodmFsdWUpIHtcbiAgICB0aGlzLmVsLnNlbGVjdGVkID0gdmFsdWU7XG4gICAgdGhpcy5mb3IucmVkZWZpbmUoKTtcbiAgfVxufVxuXG5TZWxlY3QuT3B0aW9uID0gT3B0aW9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3NlbGVjdC5qcyIsImltcG9ydCBUZXh0IGZyb20gJy4vdGV4dC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCBleHRlbmRzIFRleHQge1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ2NoZWNrZWQnLCAnbXVsdGlwbGUnXTtcbiAgc3RhdGljIGV2ZW50cyA9IFsnY2hhbmdlJywgJ2RlYm91bmNlJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2lucHV0JywgdGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmlzQ2hlY2tib3ggPSB0aGlzLmVsLnR5cGUgPT0gJ2NoZWNrYm94JztcbiAgICB0aGlzLmlzUmFkaW8gPSB0aGlzLmVsLnR5cGUgPT0gJ3JhZGlvJztcbiAgICB0aGlzLmRlYm91bmNlSW50ZXJ2YWwgPSA1MDA7XG4gICAgdGhpcy5kZWJvdW5jZVRpbWVvdXQgPSBudWxsO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICBpZih0aGlzLmlzUmFkaW8gfHwgdGhpcy5pc0NoZWNrYm94KSB7XG4gICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnNldENoZWNrZWQodGhpcy5lbC5jaGVja2VkLCBmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICB0aGlzLmRlYm91bmNlVGltZW91dCAmJiBjbGVhclRpbWVvdXQodGhpcy5kZWJvdW5jZVRpbWVvdXQpO1xuICAgICAgICB0aGlzLmRlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuYXR0cnMub25EZWJvdW5jZS50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiB0cnVlIH0pXG4gICAgICAgIH0sIHRoaXMuZGVib3VuY2VJbnRlcnZhbCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjb21waWxlZCgpIHsgICAgXG4gICAgdGhpcy5hdHRyKCdkZWJvdW5jZScsIGludGVydmFsID0+IHRoaXMuZGVib3VuY2VJbnRlcnZhbCA9IGludGVydmFsKTtcbiAgICByZXR1cm4gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJlc29sdmVkKCkge1xuICAgICh0aGlzLmlzQ2hlY2tib3ggfHwgdGhpcy5pc1JhZGlvKSAmJiB0aGlzLmF0dHIoJ2NoZWNrZWQnLCB0aGlzLnNldENoZWNrZWQpO1xuICAgIHJldHVybiBzdXBlci5yZXNvbHZlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgcmVtb3ZlZCgpIHtcbiAgICB0aGlzLmRlYm91bmNlVGltZW91dCAmJiBjbGVhclRpbWVvdXQodGhpcy5kZWJvdW5jZVRpbWVvdXQpO1xuICB9XG5cbiAgc2V0Q2hlY2tlZCh2YWx1ZSwgdHJpZ2dlciA9IHRydWUpIHtcbiAgICB2YWx1ZSA9ICEhdmFsdWU7XG5cbiAgICBpZiAodGhpcy5wcmV2Q2hlY2tlZCA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmVsLmNoZWNrZWQgPSB0aGlzLnByZXZDaGVja2VkID0gdmFsdWU7XG4gICAgdHJpZ2dlciAmJiB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgdGhpcy5pc1JhZGlvICYmIHRoaXMuY2hhbmdlUmFkaW8oKTtcbiAgfVxuXG4gIHNldFZhbHVlKCkge1xuICAgIHN1cGVyLnNldFZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5pc1JhZGlvICYmIHRoaXMuYXR0cnMub25DaGFuZ2UuZGlzcGF0Y2goRXZlbnQsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgfVxuXG4gIGNoYW5nZVJhZGlvKCkge1xuICAgIGxldCBuYW1lID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICBsZXQgc2VsZWN0b3IgPSBgaW5wdXRbdHlwZT1yYWRpb11bbmFtZT0nJHtuYW1lfSddOm5vdChbc2NvcGU9JyR7dGhpcy5zY29wZS5fX25hbWV9J10pYDtcbiAgICBsZXQgY2hpbGRyZW4gPSBBa2lsaS5yb290LmNoaWxkcmVuKHNlbGVjdG9yKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcmFkaW8gPSBjaGlsZHJlbltpXTtcblxuICAgICAgcmFkaW8uc2V0Q2hlY2tlZChyYWRpby5lbC5jaGVja2VkKTtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pbnB1dC5qcyIsImltcG9ydCBGb3IsIHsgTG9vcCB9IGZyb20gJy4vZm9yLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogVGhlIHJhZGlvIGdyb3VwIGNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWRpbyBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tuYW1lXSc7XG4gIHN0YXRpYyBldmVudHMgPSBbJ3JhZGlvJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JhZGlvJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdyYWRpby1idXR0b24nLCB0aGlzLlJhZGlvQnV0dG9uKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXRlcmFibGUgPSB0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnaW4nKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5nZXRSYWRpb1ZhbHVlKCk7XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSB0aGlzLnByZXZWYWx1ZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJldlZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuYXR0cnMub25SYWRpby50cmlnZ2VyKHZhbHVlLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmKHRoaXMuaXRlcmFibGUpIHtcbiAgICAgIHJldHVybiBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgcmVzb2x2ZWQoKSB7XG4gICAgdGhpcy5hdHRyKCdpbicsICgpID0+IHRoaXMuc2V0TmFtZXModGhpcy5hdHRycy5uYW1lKSk7ICAgXG4gICAgdGhpcy5hdHRyKCd2YWx1ZScsIHRoaXMuc2V0VmFsdWUpOyBcbiAgICB0aGlzLmF0dHIoJ25hbWUnLCB0aGlzLnNldE5hbWVzLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTtcbiAgICByZXR1cm4gc3VwZXIucmVzb2x2ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHNldE5hbWVzKG5hbWUpIHtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNoaWxkcmVuW2ldLmVsLnNldEF0dHJpYnV0ZSgnbmFtZScsIG5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSB0aGlzLnByZXZWYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBwcmV2ID0gdGhpcy5wcmV2VmFsdWU7XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbignaW5wdXRbdHlwZT1yYWRpb10nKTtcbiAgICBsZXQgaXNUcnVlID0gZmFsc2U7XG5cbiAgICB0aGlzLnByZXZWYWx1ZSA9IHZhbHVlO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuICAgICAgbGV0IGlzU2VsZWN0ZWQgPSByYWRpby5lbC52YWx1ZSA9PT0gdmFsdWU7XG5cbiAgICAgIGlzU2VsZWN0ZWQgJiYgKGlzVHJ1ZSA9IHRydWUpO1xuICAgICAgcmFkaW8uc2V0Q2hlY2tlZChpc1NlbGVjdGVkKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzVHJ1ZSkge1xuICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIGlmIChwcmV2ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnByZXZWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYXR0cnMub25SYWRpby50cmlnZ2VyKHZhbHVlLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cblxuICBnZXRSYWRpb1ZhbHVlKCkge1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oJ2lucHV0W3R5cGU9cmFkaW9dJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJhZGlvID0gY2hpbGRyZW5baV07XG5cbiAgICAgIGlmIChyYWRpby5lbC5jaGVja2VkKSB7XG4gICAgICAgIHJldHVybiByYWRpby5lbC52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBUaGUgcmFkaW8gaXRlbSBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIFJhZGlvQnV0dG9uIGV4dGVuZHMgTG9vcCB7XG4gIHN0YXRpYyB0ZW1wbGF0ZSA9ICc8bGFiZWw+PGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiJHt0aGlzLnZhbHVlfVwiLz4ke3RoaXMuX19jb250ZW50fTwvbGFiZWw+JztcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ3ZhbHVlJywgJ3ZhbHVlJyk7XG4gICAgcmV0dXJuIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cbn1cblxuUmFkaW8uUmFkaW9CdXR0b24gPSBSYWRpb0J1dHRvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9yYWRpby5qcyIsImltcG9ydCBUZXh0IGZyb20gJy4vdGV4dC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0YXJlYSBleHRlbmRzIFRleHQge1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgndGV4dGFyZWEnLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RleHRhcmVhLmpzIiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnQgZXh0ZW5kcyBUZXh0IHtcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2NvbnRlbnQnLCB0aGlzKTtcbiAgICBBa2lsaS5hbGlhcygnW2NvbnRlbnRlZGl0YWJsZV0nLCAnY29udGVudCcpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgaWYgKHRoaXMuZWwuaGFzQXR0cmlidXRlKCdlZGl0YWJsZScpKSB7XG4gICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ2VkaXRhYmxlJykpO1xuICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoJ2VkaXRhYmxlJyk7XG4gICAgfVxuXG4gICAgaWYgKGdldENvbXB1dGVkU3R5bGUodGhpcy5lbCkuZGlzcGxheSA9PSAnaW5saW5lJykge1xuICAgICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlS2V5ID0gJ2lubmVySFRNTCc7XG4gIH1cblxuICBzZXRFbGVtZW50Rm9jdXMoKSB7XG4gICAgbGV0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICBsZXQgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuXG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKHRoaXMuZWwpO1xuICAgIHJhbmdlLmNvbGxhcHNlKGZhbHNlKTtcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9jb250ZW50LmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmNsdWRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gdHJ1ZTtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW3VybF0nO1xuICBzdGF0aWMgZXZlbnRzID0gWydsb2FkJywgJ2Vycm9yJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2luY2x1ZGUnLCB0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHJldHVybiB0aGlzLmF0dHIoJ3VybCcsIHRoaXMuZ2V0VGVtcGxhdGUpO1xuICB9XG5cbiAgZ2V0VGVtcGxhdGUodXJsKSB7XG4gICAgdGhpcy5jb25uZWN0aW9uICYmIHRoaXMuY29ubmVjdGlvbi5hYm9ydCgpO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KHVybCwge1xuICAgICAgb25TdGFydDogKHhocikgPT4ge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSB4aHI7XG4gICAgICB9XG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgdGhpcy5lbXB0eSgpO1xuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XG4gICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCByZXMuZGF0YSk7XG5cbiAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uTG9hZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgIH0pO1xuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHRoaXMuYXR0cnMub25FcnJvci50cmlnZ2VyKGVyciwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2luY2x1ZGUuanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElmcmFtZSBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2lmcmFtZScsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaWZyYW1lLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZSBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2ltZycsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtYmVkIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnZW1iZWQnLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2VtYmVkLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpbyBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2F1ZGlvJywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9hdWRpby5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlkZW8gZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd2aWRlbycsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdmlkZW8uanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYWNrIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgndHJhY2snLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RyYWNrLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VyY2UgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdzb3VyY2UnLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3NvdXJjZS5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0cyBleHRlbmRzIFVybCB7ICBcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy51cmxBdHRyaWJ1dGUgPSAnZGF0YSc7XG4gIH1cblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnb2JqZWN0JywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9vYmplY3QuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4uL3NlcnZpY2VzL3JvdXRlci5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW3N0YXRlXTpub3QoW3VybF0pLFt1cmxdOm5vdChbc3RhdGVdKSc7XG4gIHN0YXRpYyBjb250cm9sQXR0cmlidXRlcyA9IHRydWU7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsncmVsb2FkJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2EnLCB0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuc3RhdGUgPSBudWxsO1xuICAgIHRoaXMucGFyYW1zID0ge307XG4gICAgdGhpcy5xdWVyeSA9IHt9O1xuICAgIHRoaXMuaGFzaCA9ICcnO1xuICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuICAgIHRoaXMuaXNVcmwgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZSgndXJsJyk7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAodGhpcy5pc1VybCkge1xuICAgICAgICByb3V0ZXIubG9jYXRpb24odGhpcy5hdHRycy51cmwsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcm91dGVyLnN0YXRlKHRoaXMuc3RhdGUubmFtZSwgdGhpcy5wYXJhbXMsIHRoaXMucXVlcnksIHRoaXMuaGFzaCwgIHRoaXMub3B0aW9ucyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2VkID0gKCkgPT4gdGhpcy5zdGF0ZSAmJiB0aGlzLnNldEFjdGl2aXR5KCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3N0YXRlLWNoYW5nZWQnLCB0aGlzLm9uU3RhdGVDaGFuZ2VkKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cignc3RhdGUnLCB0aGlzLnNldFN0YXRlKTtcbiAgICB0aGlzLmF0dHIoJ3BhcmFtcycsIHRoaXMuc2V0UGFyYW1zKTtcbiAgICB0aGlzLmF0dHIoJ3F1ZXJ5JywgdGhpcy5zZXRRdWVyeSk7XG4gICAgdGhpcy5hdHRyKCdoYXNoJywgdGhpcy5zZXRIYXNoKTtcbiAgICB0aGlzLmF0dHIoJ29wdGlvbnMnLCB0aGlzLnNldE9wdGlvbnMpO1xuICAgIHRoaXMuYXR0cigncmVsb2FkJywgdGhpcy5zZXRSZWxvYWQpO1xuICAgIHRoaXMuYXR0cigndXJsJywgdGhpcy5zZXRVcmwpO1xuICAgIHRoaXMuYXR0cignc3RhdGUnLCAoKSA9PiB0aGlzLnJlc2V0SHJlZigpLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTtcbiAgICB0aGlzLmF0dHIoJ3BhcmFtcycsICgpID0+IHRoaXMucmVzZXRIcmVmKCksIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cigncXVlcnknLCAoKSA9PiB0aGlzLnJlc2V0SHJlZigpLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTtcbiAgICB0aGlzLmF0dHIoJ2hhc2gnLCAoKSA9PiB0aGlzLnJlc2V0SHJlZigpLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTtcbiAgICB0aGlzLmF0dHIoJ3VybCcsICgpID0+IHRoaXMucmVzZXRIcmVmKCksIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMucmVzZXRIcmVmKCk7XG4gIH1cblxuICByZW1vdmVkKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzdGF0ZS1jaGFuZ2VkJywgdGhpcy5vblN0YXRlQ2hhbmdlZCk7XG4gIH1cblxuICBzZXRVcmwodXJsKSB7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gIH1cblxuICBzZXRTdGF0ZShuYW1lKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0U3RhdGUobmFtZSk7XG4gICAgdGhpcy5zZXRBY3Rpdml0eSgpO1xuICB9XG5cbiAgc2V0QWN0aXZpdHkoKSB7XG4gICAgdGhpcy5zY29wZS5pc0FjdGl2ZVN0YXRlID0gcm91dGVyLmlzQWN0aXZlU3RhdGUodGhpcy5zdGF0ZSk7XG4gICAgdGhpcy5zY29wZS5pbkFjdGl2ZVN0YXRlID0gcm91dGVyLmluQWN0aXZlU3RhdGUodGhpcy5zdGF0ZSk7XG4gIH1cblxuICBzZXRQYXJhbXMocGFyYW1zKSB7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMgIT0gJ29iamVjdCcgfHwgIXBhcmFtcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgcGFyYW1zIG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gIH1cblxuICBzZXRRdWVyeShxdWVyeSkge1xuICAgIGlmICh0eXBlb2YgcXVlcnkgIT0gJ29iamVjdCcgfHwgIXF1ZXJ5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBxdWVyeSBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgfVxuXG4gIHNldEhhc2goaGFzaCkge1xuICAgIGlmICh0eXBlb2YgaGFzaCAhPSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgaGFzaCBtdXN0IGJlIGEgc3RyaW5nYCk7XG4gICAgfVxuXG4gICAgdGhpcy5oYXNoID0gaGFzaDtcbiAgfVxuXG4gIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPSAnb2JqZWN0JyB8fCAhb3B0aW9ucykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgb3B0aW9ucyBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBzZXRSZWxvYWQodmFsKSB7XG4gICAgdGhpcy5vcHRpb25zLnJlbG9hZCA9IHZhbDtcbiAgfVxuXG4gIGdldFN0YXRlKG5hbWUpIHtcbiAgICBsZXQgc3RhdGUgPSByb3V0ZXIuZ2V0U3RhdGUobmFtZSk7XG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCByb3V0ZXIgc3RhdGUgd2l0aCBuYW1lIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgcmVzZXRIcmVmKCkge1xuICAgIGlmICh0aGlzLnVybCkge1xuICAgICAgdGhpcy5hdHRycy5ocmVmID0gdGhpcy51cmw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5hdHRycy5ocmVmID0gcm91dGVyLmNyZWF0ZVN0YXRlVXJsKHRoaXMuc3RhdGUsIHRoaXMucGFyYW1zLCB0aGlzLnF1ZXJ5LCB0aGlzLmhhc2gpO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2EuanMiXSwic291cmNlUm9vdCI6IiJ9