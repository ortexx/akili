/*!
 * Akili is a javascript framework
 * 
 * const Akili = makeItEasy(js + html);
 * 
 * @version 0.5.3
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
      this.setIndex(true);
      this.setKey(true);
      this.setValue(true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWI3N2Y3ZGE3Nzg5YjRlZTdkNjQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FraWxpLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91cmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JvdXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaWYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JhZGlvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHRhcmVhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5jbHVkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZW1iZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdHJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc291cmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hLmpzIl0sIm5hbWVzIjpbIkFraWxpIiwib3B0aW9ucyIsImRlYnVnIiwiZ2xvYmFscyIsIl9faW5pdCIsIl9fY29tcG9uZW50cyIsIl9fYWxpYXNlcyIsIl9fc2NvcGVzIiwiX19zdG9yZUxpbmtzIiwiX193aW5kb3ciLCJfX2lzb2xhdGlvbiIsIl9fZXZhbHVhdGlvbiIsImh0bWxCb29sZWFuQXR0cmlidXRlcyIsImNvbXBvbmVudHMiLCJkZWNvcmF0b3JzIiwic2VydmljZXMiLCJqb2luQmluZGluZ0tleXMiLCJrZXlzIiwibWFwIiwiZWwiLCJ0b1N0cmluZyIsImpvaW4iLCJhZGRTY29wZSIsInNjb3BlIiwiX19uYW1lIiwiRXJyb3IiLCJnZXRTY29wZSIsIm5hbWUiLCJyZW1vdmVTY29wZSIsImdldEFraWxpUGFyZW50cyIsInRyZWUiLCJhcnIiLCJjaGVjayIsIm5vZGUiLCJwYXJlbnROb2RlIiwiX19ha2lsaSIsInB1c2giLCJzZXRUZW1wbGF0ZSIsInRlbXBsYXRlIiwicmVwbGFjZSIsImlubmVySFRNTCIsImNyZWF0ZVNjb3BlTmFtZSIsImNyZWF0ZVJhbmRvbVN0cmluZyIsInN0ciIsImlzb2xhdGUiLCJmbiIsImNvbXBvbmVudCIsInJlcyIsInByb3BzIiwiayIsImhhc093blByb3BlcnR5IiwiaSIsImwiLCJsZW5ndGgiLCJwcm9wIiwiZGF0YSIsIl9fZ2V0QmluZCIsImlzRGVsZXRlZCIsIl9fZXZhbHVhdGVCeUtleXMiLCJ1bmRlZmluZWQiLCJfX3NldCIsImdldFByb3BlcnR5QnlLZXlzIiwiX19zY29wZSIsInVuZXZhbHVhdGVkIiwiZXZhbHVhdGlvbiIsInVuaXNvbGF0ZWQiLCJpc29sYXRpb24iLCJuZXh0VGljayIsIlByb21pc2UiLCJzZXRUaW1lb3V0IiwicmVzb2x2ZSIsInRoZW4iLCJpbml0aWFsaXplIiwicmVjb21waWxlIiwiX19yZWNvbXBpbGUiLCJpc1Jvb3QiLCJfX3Jvb3QiLCJjb21wb25lbnROYW1lIiwidG9EYXNoQ2FzZSIsImdldEF0dHJpYnV0ZSIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsIl9Db21wb25lbnQiLCJDSEVDS19BTElBU0VTIiwic2VsZWN0b3JzIiwiT2JqZWN0Iiwic2VsZWN0b3JBbGwiLCJtYXRjaGVzIiwic2VsZWN0b3IiLCJDb21wb25lbnQiLCJfX2NhbmNlbGxlZCIsIl9fY3JlYXRlIiwiY29tcGlsZSIsInJvb3QiLCJlbGVtZW50cyIsIm5lc3RlZEluaXRpYWxpemluZyIsImNoaWxkcmVuIiwiY2hpbGQiLCJwIiwiX19jb21waWxlIiwiYWxsIiwiciIsIl9fcmVzb2x2ZSIsImNvbnNvbGUiLCJ3YXJuIiwidW5yZWdpc3RlckNvbXBvbmVudCIsImFsaWFzIiwidW5yZWdpc3RlckFsaWFzIiwiaXNvbGF0ZUFycmF5UHJvdG90eXBlIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwia2V5Iiwib2xkIiwiX19pc1Byb3h5IiwiYXBwbHkiLCJpc29sYXRlV2luZG93RnVuY3Rpb25zIiwic2V0SW50ZXJ2YWwiLCJ3aW5kb3ciLCJjcmVhdGVDYWxsYmFja0lzb2xhdGlvbiIsImNvbnN0cnVjdG9yIiwiY2F0Y2giLCJpc29sYXRlRXZlbnRzIiwiRWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwiX19ha2lsaUxpc3RlbmVycyIsImFyZ3VtZW50cyIsImFyZ3MiLCJzbGljZSIsImNhbGwiLCJsaW5rIiwibGlzdGVuZXIiLCJzcGxpY2UiLCJwb3MiLCJpc0FycmF5IiwibnVtIiwiaW5kZXgiLCJjYWxsYmFjayIsImlzb2xhdGVGdW5jdGlvbiIsImNvbnRleHQiLCJvRm4iLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJ2YWx1ZSIsImVycm9ySGFuZGxpbmciLCJ0cmlnZ2VySW5pdCIsInN0YXR1cyIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImluaXQiLCJkb2N1bWVudCIsImJvZHkiLCJkb2N1bWVudEVsZW1lbnQiLCJBS0lMSV9TRVJWRVIiLCJyZW1vdmVBdHRyaWJ1dGUiLCJodG1sIiwiQUtJTElfQ0xJRU5UIiwiY2hhbmdlU3RhdGUiLCJlcnIiLCJkZWluaXQiLCJkZWZpbmUiLCJFdmVudEVtaXR0ZXIiLCJTY29wZSIsInV0aWxzIiwiQSIsIkF1ZGlvIiwiQ29udGVudCIsIkZvciIsIkVtYmVkIiwiSWYiLCJJbmNsdWRlIiwiSW5wdXQiLCJJZnJhbWUiLCJJbWFnZSIsIlJhZGlvIiwiUm91dGUiLCJTZWxlY3QiLCJTb3VyY2UiLCJUZXh0IiwiVGV4dGFyZWEiLCJUcmFjayIsIlVybCIsIlZpZGVvIiwicmVxdWVzdCIsInJvdXRlciIsInN0b3JlIiwiY2xhc3MiLCJvYmoiLCJjbGFzc2VzIiwidmFsIiwic3R5bGUiLCJzdHlsZXMiLCJmaWx0ZXIiLCJoYW5kbGVyIiwibWF0Y2giLCJpdGVtIiwiZmlsdGVyZWQiLCJjIiwic29ydCIsIm9yZGVyIiwiYSIsImIiLCJyZXZlcnNlIiwiRGF0ZSIsImdldFRpbWUiLCJuZXh0IiwiYVYiLCJiViIsImlzU2NvcGVQcm94eSIsImlzUGxhaW5PYmplY3QiLCJjb3B5IiwibmVzdGVkIiwidW5lbnVtZXJhYmxlIiwiX190YXJnZXQiLCJuZXdPYmoiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIm1ha2VBdHRyaWJ1dGVWYWx1ZSIsImNvbXBhcmUiLCJjbGVhclVuZGVmaW5lZCIsImZvckVhY2giLCJpZ25vcmVVbmRlZmluZWQiLCJjb21wYXJlUHJldmlvdXNWYWx1ZSIsImN1cnJlbnQiLCJwcmV2aW91cyIsInByZXZpb3VzQ29weSIsImVuY29kZUh0bWxFbnRpdGllcyIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlY29kZUh0bWxFbnRpdGllcyIsInRvQ2FtZWxDYXNlIiwibSIsInRvVXBwZXJDYXNlIiwiY2FwaXRhbGl6ZSIsIm9iamVjdCIsInJlZHVjZSIsIm8iLCJoYXNQcm9wZXJ0eUJ5S2V5cyIsImhhcyIsInNldFByb3BlcnR5QnlLZXlzIiwiZGVsZXRlUHJvcGVydHlCeUtleXMiLCJnZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQiLCJ0YXJnZXQiLCJwcm90byIsImdldFByb3RvdHlwZU9mIiwiZ2V0T3duUHJvcGVydHlUYXJnZXQiLCJNYXRoIiwicmFuZG9tIiwic3Vic3RyaW5nIiwidXJsQXR0cmlidXRlIiwiYXR0ciIsInNldFVybCIsInVybCIsImF0dHJzIiwiZXZhbHVhdGlvblJlZ2V4IiwiZXZhbHVhdGlvblJlZ2V4R2xvYmFsIiwiUmVnRXhwIiwic291cmNlIiwic3lzdGVtQXR0cmlidXRlcyIsImV4cHJlc3Npb24iLCJ2YXJzIiwiZXhwcyIsInN5bWJvbHMiLCJzcGxpdCIsIm9wZW4iLCJsYXN0IiwiaW5kZXhPZiIsInRyaW0iLCJGdW5jdGlvbiIsIl9faXNNb3VudGVkIiwiX19pc0NvbXBpbGVkIiwiX19wcmV2ZW50IiwiX19iaW5kaW5ncyIsIl9fZXZhbHVhdGluZ0V2ZW50IiwiX19yZWNvbXBpbGluZyIsIl9fY29tcGlsaW5nIiwiX19kaXNhYmxlUHJveHkiLCJfX2Rpc2FibGVBdHRyVHJpZ2dlcmluZyIsIl9fY2hpbGRyZW4iLCJfX3BhcmVudCIsIl9fcGFyZW50cyIsIl9fYXR0cnMiLCJfX2F0dHJMaW5rcyIsIl9fYXR0cmlidXRlT2YiLCJfX2V2YWx1YXRpb25Db21wb25lbnQiLCJfX3NldEV2ZW50cyIsIl9fc2V0UGFyZW50cyIsIl9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMiLCJfX2RlZmluZUF0dHJpYnV0ZXMiLCJfX2luaXRpYWxpemUiLCJjcmVhdGVkIiwiY29udHJvbCIsIl9fY29udHJvbEF0dHJpYnV0ZXMiLCJfX2V2YWx1YXRlUGFyZW50IiwibmV3UGFyZW50IiwiX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXMiLCJpbnRlcnBvbGF0ZSIsInBhcmVudCIsIm5vZGVUeXBlIiwiX19pbml0aWFsaXplTm9kZSIsIm5vZGVWYWx1ZSIsIl9fZXZhbHVhdGUiLCJjaGlsZE5vZGVzIiwib25Db21waWxlZCIsInRyaWdnZXIiLCJidWJibGVzIiwiY29tcGlsZWQiLCJ0ZW1wbGF0ZVVybCIsImdldCIsIl9fY29udGVudCIsIm9uUmVjb21waWxlZCIsInJlY29tcGlsZWQiLCJvblJlc29sdmVkIiwicmVzb2x2ZWQiLCJfc2NvcGUiLCJhc3NpZ24iLCJjb250cm9sQXR0cmlidXRlcyIsImV2ZW50cyIsIl9fZXZlbnRzIiwiX19zYXZlQXR0cmlidXRlUHJveHlJbiIsInNhdmVBdHRyaWJ1dGVQcm94eUluIiwiX19zYXZlQXR0cmlidXRlUHJveHlPdXQiLCJzYXZlQXR0cmlidXRlUHJveHlPdXQiLCJfX25lc3RlZE9ic2VydmUiLCJib29sZWFuQXR0cmlidXRlcyIsImNvbmNhdCIsInNldEF0dHIiLCJhdHRyaWJ1dGVzIiwibm9kZU5hbWUiLCJoYXNBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJldiIsInRlc3QiLCJwYXJlbnRzIiwiZXZhbHVhdGVQYXJlbnQiLCJ0cmFuc3BhcmVudCIsIl9fZGV0YWNoIiwiX19hZGRDaGlsZCIsInNldFByb3RvdHlwZU9mIiwiX19wcm9wZXJ0aWVzIiwiX19nZXROb2RlUHJvcGVydHkiLCJjb3VudGVyIiwiYXR0cmlidXRlVmFsdWUiLCJfX2NvbXBvbmVudCIsImNvbSIsIl9fZXhwcmVzc2lvbiIsIkF0dHIiLCJkIiwiZXZhbHVhdGUiLCJleGlzdGluZ0JpbmRpbmdzIiwicGFyc2VWYWx1ZSIsIl9fZ2V0UGFyc2VkRXhwcmVzc2lvbiIsImxpc3QiLCJwYXJzZSIsImhhc2giLCJfX2NyZWF0ZUtleXNIYXNoIiwibm90QmluZGluZyIsInBhcmVudFZhbHVlIiwiZXZhbENvbXBvbmVudCIsInJlYWxDb21wb25lbnQiLCJiaW5kIiwiX19nZXRCb3VuZE5vZGUiLCJfX2JpbmQiLCJfX3NldE5vZGVQcm9wZXJ0eSIsImV2YWx1YXRlZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJlIiwiaXNCb29sZWFuQXR0cmlidXRlIiwiX19oYXNCaW5kaW5ncyIsImNsZWFyQXR0cmlidXRlIiwiY2FtZWxBdHRyaWJ1dGUiLCJfX2F0dHJpYnV0ZU9uIiwiX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyIiwiX19hdHRyVHJpZ2dlckJ5TmFtZSIsImVsZW1lbnQiLCJfX2VsZW1lbnQiLCJ3aXRob3V0UGFyZW50cyIsImxhc3RQcm9wcyIsInByb3BzTGVuZ3RoIiwiZWxFdmFsdWF0ZSIsIl9fZGF0YSIsIl9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2luZyIsIl9fZGlzYWJsZUtleXMiLCJjaGVja1Byb3AiLCJfX2V2YWx1YXRlTm9kZSIsIl9rIiwiX3Byb3AiLCJfX2VuYWJsZUtleXMiLCJ1bmJpbmQiLCJfX2lzU3lzdGVtQmluZGluZ0tleSIsIl9rZXlzIiwiX19rZXlzIiwiX2lzRGVsZXRlZCIsImhhc0tleSIsInNoaWZ0IiwiX19ldmFsdWF0ZU5lc3RlZCIsIl9fdW5iaW5kIiwiZXhlYyIsImV2ZW50IiwiX19jaGVja0V2YWx1YXRpb24iLCJhdHRyaWJ1dGVPZiIsImV2ZW50TmFtZSIsIl9fZXZlbnQiLCJlbWl0dGVyIiwiX19ldmFsdWF0ZUV2ZW50IiwiX19pbml0aWFsaXplZCIsIl9faW5pdGlhbGl6ZUF0dHJpYnV0ZSIsImNoYW5nZUF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZU5vZGUiLCJfX3VuYmluZEJ5Tm9kZXMiLCJQcm94eSIsInNldCIsImF0dHJLZXkiLCJkZWxldGVQcm9wZXJ0eSIsIl9faXNTeXN0ZW1LZXkiLCJyZWFsVGFyZ2V0IiwiZXhjbHVkZWQiLCJleGNBcnIiLCJmb3JQYXJlbnRzIiwiZm9yRGF0YSIsInBvcCIsIl9fYmluZE5vZGUiLCJfX2NoZWNrRGlzYWJsZW1lbnQiLCJrZXlTdHJpbmciLCJDSEVDS19FWElTVEVOQ0UiLCJ0YXJnZXRQYXJlbnRWYWx1ZSIsIl9fc3RvcmVUcmlnZ2VyQnlLZXlzIiwiX19hdHRyVHJpZ2dlckJ5S2V5cyIsIl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0IiwiX19hbGwiLCJsaW5rcyIsIl9fc3RvcmVUcmlnZ2VyQnlOYW1lIiwiaW5mbyIsImNhbGxPblN0YXJ0Iiwic3RhcnRLZXlzIiwib2JzZXJ2ZSIsIkNIRUNLX1BST1hZIiwiX19kaXNhYmxlUHJveHlSZWRlZmluaW5nIiwiX19vYnNlcnZlIiwiaXNvbGF0aW9uS2V5IiwidXBkYXRlZEF0IiwicGFyZW50S2V5c1N0cmluZyIsImtleXNTdHJpbmciLCJfX2RlbGV0ZU5vZGVQcm9wZXJ0eSIsIm5vZGVzIiwiX19jbGVhckVtcHR5QmluZGluZ3MiLCJjbGVhciIsIl9fcmVtb3ZlIiwiX19jbGVhclN0b3JlTGlua3MiLCJvblJlbW92ZWQiLCJyZW1vdmVkIiwiX19zcGxpY2VDaGlsZCIsIl9fcmVtb3ZlQ2hpbGRyZW4iLCJmaW5kIiwiZmluZEFsbCIsImxldmVscyIsImxldmVsIiwicmlnaHQiLCJsZXZlbEVsZW1lbnRzIiwiX19zdG9yZUJ5RnVuY3Rpb24iLCJfX3N0b3JlQnlLZXlzIiwiX19hdHRyQnlGdW5jdGlvbiIsIl9fYXR0ckJ5S2V5cyIsIl9fdW5zdG9yZUJ5RnVuY3Rpb24iLCJfX3Vuc3RvcmVCeUtleXMiLCJfX3VuYXR0ckJ5RnVuY3Rpb24iLCJfX3VuYXR0ckJ5S2V5cyIsIl9fZ2V0UGFyZW50IiwiX19nZXRDaGlsZHJlbiIsIl9fZ2V0TmVhciIsImFwcGVuZENoaWxkIiwiX19lbXB0eSIsIl9fZGVzdHJveSIsIlJlcXVlc3QiLCJiYXNlVXJsIiwiZGVmYXVsdHMiLCJzdGF0dXNFcnJvcnNQYXR0ZXJuIiwicmVqZWN0IiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvblN0YXJ0IiwidHJhbnNmb3JtQmVmb3JlIiwibWV0aG9kIiwidXNlciIsInBhc3N3b3JkIiwiaGVhZGVycyIsImpzb24iLCJyZXNwb25zZVR5cGUiLCJmb3JtIiwiY3JlYXRlRm9ybURhdGEiLCJ0aW1lb3V0Iiwid2l0aENyZWRlbnRpYWxzIiwic2V0UmVxdWVzdEhlYWRlciIsInBhcmFtcyIsInBhcmFtc1RvUXVlcnkiLCJvblByb2dyZXNzIiwib25wcm9ncmVzcyIsIm9ubG9hZCIsInJlc3BvbnNlIiwidHJhbnNmb3JtQWZ0ZXIiLCJvbnRpbWVvdXQiLCJvbmVycm9yIiwic2VuZCIsInNlcCIsImVxIiwia3MiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ2Iiwib3B0IiwicXVlcnkiLCJhbXBzIiwiZXFzIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwibmFtZXNwYWNlIiwiZmQiLCJGb3JtRGF0YSIsImFwcGVuZCIsInRvSVNPU3RyaW5nIiwiX19pbnN0YW5jZXMiLCJhZGRJbnN0YW5jZSIsImluc3RhbmNlIiwicmVtb3ZlSW5zdGFuY2UiLCJ2YWx1ZUtleSIsInNldEZvY3VzIiwic2V0VmFsdWUiLCJzZXRFbGVtZW50Rm9jdXMiLCJzZXRFbGVtZW50Qmx1ciIsImZvY3VzIiwiYmx1ciIsIkxvb3AiLCJfX2l0ZXJhdG9yIiwiX19rZXkiLCJfX3ZhbHVlIiwiX19pbmRleCIsIl9fY29tcGFyaXNvblZhbHVlIiwiaXRlcmF0b3JzIiwiaXRlcmF0b3JSZWYiLCJpdGVyYXRvck91dGVySFRNTCIsImNyZWF0ZUl0ZXJhdG9yIiwiZHJhdyIsIm1hc2siLCJuZXh0U2libGluZyIsIm91dGVySFRNTCIsImNvbnRlbnQiLCJmaXJzdENoaWxkIiwiZGF0YUNoYW5nZWQiLCJpdGVyYXRvciIsImNDb3B5IiwiY29tcGFyc2lvbiIsImNoYW5nZWQiLCJzZXRJbmRleCIsInNldEtleSIsImNyZWF0ZUl0ZXJhdG9yRWxlbWVudCIsImluc2VydEJlZm9yZSIsImxvb3AiLCJpdGVyYXRlIiwiZm9yIiwiaXNGb3IiLCJjYW5jZWwiLCJfX2VsIiwic3RyaWN0IiwiZWxDb21wb25lbnQiLCJmb3JjZSIsImluRXZhbHVhdGluZyIsInByZXBhcmVPcHRpb25zIiwiX0V2ZW50IiwidHlwZSIsInRyYW5zaXRpb24iLCJzdGF0ZSIsInBhdGgiLCJnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24iLCJfX3RyYW5zaXRpb24iLCJlbXB0eSIsImV4aXN0cyIsImxvYWRlZCIsIlRyYW5zaXRpb24iLCJyb3V0ZXMiLCJzdGF0ZXMiLCJyb3V0ZSIsImhhc2hNb2RlIiwiX19yZWRpcmVjdHMiLCJfX29wdGlvbnMiLCJfX3BhcmFtUmVnZXgiLCJfX3JvdXRlU2VsZWN0b3IiLCJhZGQiLCJwYXR0ZXJuIiwiZGVmYXVsdE9wdGlvbnMiLCJhYnN0cmFjdCIsInNldFN0YXRlIiwiZ2V0U3RhdGUiLCJjcmVhdGVTdGF0ZVVybCIsInJlbG9hZCIsImdldFVybCIsImJhY2siLCJoaXN0b3J5IiwiZ28iLCJmb3J3YXJkIiwibG9jYXRpb24iLCJlcnJvciIsInB1c2hTdGF0ZSIsImRlZmF1bHRVcmwiLCJvbGRQdXNoU3RhdGUiLCJfX29uU3RhdGVDaGFuZ2VIYW5kbGVyIiwicGFyZW50TmFtZSIsImZ1bGxQYXR0ZXJuIiwic3BsaXRTbGFzaGVzIiwicmVtb3ZlU3RhdGUiLCJzZXRIYXNoVXJsIiwic2V0SGlzdG9yeVVybCIsImdldEhhc2hVcmwiLCJnZXRIaXN0b3J5VXJsIiwicGF0aG5hbWUiLCJzZWFyY2giLCJnZXRVcmxRdWVyeSIsImdldEhhc2hVcmxRdWVyeSIsImdldEhpc3RvcnlVcmxRdWVyeSIsInBhcmFtc0Zyb21RdWVyeSIsImYiLCJnZXRQYXR0ZXJuQ29udGVudCIsInVybFBhdHRlcm4iLCJyZWdleCIsImlzSW5jbHVkZWQiLCJpc0FjdGl2ZVN0YXRlIiwiaW5jbHVkZXMiLCJpbkFjdGl2ZVN0YXRlIiwiZ2V0Um91dGUiLCJnZXRBcnJheVBhdHRlcm5Db250ZW50IiwiZ2V0U3RhdGVzQnlMZXZlbCIsIl9fZGlzYWJsZUNoYW5nZSIsInByZXZUcmFuc2l0aW9uIiwib25FbmQiLCJzZXRQYXRoIiwiaGFzU3RhdGUiLCJpc0RpZmZlcmVudCIsInByZXYiLCJ0aXRsZSIsInNldFRyYW5zaXRpb24iLCJzYXZlU2Nyb2xsUG9zaXRpb24iLCJzY3JvbGxUbyIsIkVsc2VJZiIsIkVsc2UiLCJhY3RpdmUiLCJyZWNyZWF0ZSIsImlzQ29tcGlsZWQiLCJkaXNwbGF5IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInNldFJlY3JlYXRpb24iLCJjb21waWxhdGlvbiIsIm5leHRFbGVtZW50U2libGluZyIsInJlc3VsdCIsInNldEFjdGl2aXR5IiwiT3B0aW9uIiwiaXRlcmF0b3JUYWdOYW1lIiwiaXNNdWx0aXBsZSIsImdldENvbnRlbnQiLCJzZXRNdWx0aXBsZSIsInNldENvbnRlbnQiLCJkcmF3U2VsZWN0IiwiY2hhbmdlVmFsdWUiLCJmb3JtYXRWYWx1ZSIsInNlbGVjdGVkIiwib3B0aW9uIiwic2VsZWN0aW9uIiwicmVkZWZpbmUiLCJvbkNoYW5nZSIsImRpc3BhdGNoIiwiRXZlbnQiLCJzZXRTZWxlY3RlZCIsImlzQ2hlY2tib3giLCJpc1JhZGlvIiwiZGVib3VuY2VJbnRlcnZhbCIsImRlYm91bmNlVGltZW91dCIsInNldENoZWNrZWQiLCJjaGVja2VkIiwiY2xlYXJUaW1lb3V0Iiwib25EZWJvdW5jZSIsImludGVydmFsIiwicHJldkNoZWNrZWQiLCJjaGFuZ2VSYWRpbyIsInJhZGlvIiwiUmFkaW9CdXR0b24iLCJpdGVyYWJsZSIsImdldFJhZGlvVmFsdWUiLCJwcmV2VmFsdWUiLCJvblJhZGlvIiwic2V0TmFtZXMiLCJpc1RydWUiLCJpc1NlbGVjdGVkIiwicmFuZ2UiLCJjcmVhdGVSYW5nZSIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJjb25uZWN0aW9uIiwiZ2V0VGVtcGxhdGUiLCJhYm9ydCIsIm9uTG9hZCIsIm9uRXJyb3IiLCJPYmplY3RzIiwiaXNVcmwiLCJwcmV2ZW50RGVmYXVsdCIsIm9uU3RhdGVDaGFuZ2VkIiwic2V0UGFyYW1zIiwic2V0UXVlcnkiLCJzZXRIYXNoIiwic2V0T3B0aW9ucyIsInNldFJlbG9hZCIsInJlc2V0SHJlZiIsImhyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFFBQVEsRUFBZCxDLENBckNBOzs7Ozs7Ozs7QUF1Q0FBLE1BQU1DLE9BQU4sR0FBZ0I7QUFDZEMsU0FBTyxJQURPO0FBRWRDLFdBQVM7QUFGSyxDQUFoQjs7QUFLQUgsTUFBTUksTUFBTixHQUFlLElBQWY7QUFDQUosTUFBTUssWUFBTixHQUFxQixFQUFyQjtBQUNBTCxNQUFNTSxTQUFOLEdBQWtCLEVBQWxCO0FBQ0FOLE1BQU1PLFFBQU4sR0FBaUIsRUFBakI7QUFDQVAsTUFBTVEsWUFBTixHQUFxQixF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Q0FBTjtBQUNEOztBQUVELFdBQUs2VSxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OytCQUVVclcsTyxFQUFTO0FBQ2xCLFVBQUksUUFBT0EsT0FBUCx5Q0FBT0EsT0FBUCxNQUFrQixRQUFsQixJQUE4QixDQUFDQSxPQUFuQyxFQUE0QztBQUMxQyxjQUFNLElBQUl3QixLQUFKLDBDQUFOO0FBQ0Q7O0FBRUQsV0FBS3hCLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7OEJBRVNnTSxHLEVBQUs7QUFDYixXQUFLaE0sT0FBTCxDQUFhbWxCLE1BQWIsR0FBc0JuWixHQUF0QjtBQUNEOzs7NkJBRVF0SyxJLEVBQU07QUFDYixVQUFJa2lCLFFBQVEsaUJBQU9xQixRQUFQLENBQWdCdmpCLElBQWhCLENBQVo7O0FBRUEsVUFBSSxDQUFDa2lCLEtBQUwsRUFBWTtBQUNWLGNBQU0sSUFBSXBpQixLQUFKLHdDQUErQ0UsSUFBL0MsT0FBTjtBQUNEOztBQUVELGFBQU9raUIsS0FBUDtBQUNEOzs7Z0NBRVc7QUFDVixVQUFJLEtBQUs3VCxHQUFULEVBQWM7QUFDWixhQUFLQyxLQUFMLENBQVcwYyxJQUFYLEdBQWtCLEtBQUszYyxHQUF2QjtBQUNELE9BRkQsTUFHSztBQUNILGFBQUtDLEtBQUwsQ0FBVzBjLElBQVgsR0FBa0IsaUJBQU94SCxjQUFQLENBQXNCLEtBQUt0QixLQUEzQixFQUFrQyxLQUFLM0UsTUFBdkMsRUFBK0MsS0FBS2dCLEtBQXBELEVBQTJELEtBQUs1SixJQUFoRSxDQUFsQjtBQUNEO0FBQ0Y7Ozs7OztBQTNIa0I5TCxDLENBQ1pqRixPLEdBQVUsdUM7QUFERWlGLEMsQ0FFWndKLGlCLEdBQW9CLEk7QUFGUnhKLEMsQ0FHWmdLLGlCLEdBQW9CLENBQUMsUUFBRCxDO2tCQUhSaEssQyIsImZpbGUiOiJha2lsaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDFiNzdmN2RhNzc4OWI0ZWU3ZDY0IiwiLyoqXG4gKiBKYXZhc2NyaXB0IGZyYW1ld29ya1xuICpcbiAqIGNvbnN0IEFraWxpID0gbWFrZUl0RWFzeShqcyArIGh0bWwpO1xuICpcbiAqIEBhdXRob3IgQWxleGFuZHIgQmFsYXN5YW4gPG15d2Vic3RyZWV0QGdtYWlsLmNvbT5cbiAqIEBsaW5rIGh0dHA6Ly9ha2lsaWpzLmNvbVxuICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IElmIGZyb20gJy4vY29tcG9uZW50cy9pZi5qcyc7XG5pbXBvcnQgRm9yIGZyb20gJy4vY29tcG9uZW50cy9mb3IuanMnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL2NvbXBvbmVudHMvc2VsZWN0LmpzJztcbmltcG9ydCBJbnB1dCBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQuanMnO1xuaW1wb3J0IFJhZGlvIGZyb20gJy4vY29tcG9uZW50cy9yYWRpby5qcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL2NvbXBvbmVudHMvdGV4dC5qcyc7XG5pbXBvcnQgVGV4dGFyZWEgZnJvbSAnLi9jb21wb25lbnRzL3RleHRhcmVhLmpzJztcbmltcG9ydCBDb250ZW50IGZyb20gJy4vY29tcG9uZW50cy9jb250ZW50LmpzJztcbmltcG9ydCBJbmNsdWRlIGZyb20gJy4vY29tcG9uZW50cy9pbmNsdWRlLmpzJztcbmltcG9ydCBJZnJhbWUgZnJvbSAnLi9jb21wb25lbnRzL2lmcmFtZS5qcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9jb21wb25lbnRzL2ltYWdlLmpzJztcbmltcG9ydCBFbWJlZCBmcm9tICcuL2NvbXBvbmVudHMvZW1iZWQuanMnO1xuaW1wb3J0IEF1ZGlvIGZyb20gJy4vY29tcG9uZW50cy9hdWRpby5qcyc7XG5pbXBvcnQgVmlkZW8gZnJvbSAnLi9jb21wb25lbnRzL3ZpZGVvLmpzJztcbmltcG9ydCBUcmFjayBmcm9tICcuL2NvbXBvbmVudHMvdHJhY2suanMnO1xuaW1wb3J0IFNvdXJjZSBmcm9tICcuL2NvbXBvbmVudHMvc291cmNlLmpzJztcbmltcG9ydCBPYmplY3RzIGZyb20gJy4vY29tcG9uZW50cy9vYmplY3QuanMnO1xuaW1wb3J0IFJvdXRlIGZyb20gJy4vY29tcG9uZW50cy9yb3V0ZS5qcyc7XG5pbXBvcnQgVXJsIGZyb20gJy4vY29tcG9uZW50cy91cmwuanMnO1xuaW1wb3J0IEEgZnJvbSAnLi9jb21wb25lbnRzL2EuanMnO1xuaW1wb3J0IFNjb3BlIGZyb20gJy4vc2NvcGUuanMnO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXIuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9zZXJ2aWNlcy9yZXF1ZXN0LmpzJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9zZXJ2aWNlcy9yb3V0ZXIuanMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc2VydmljZXMvc3RvcmUuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuXG5jb25zdCBBa2lsaSA9IHt9O1xuXG5Ba2lsaS5vcHRpb25zID0ge1xuICBkZWJ1ZzogdHJ1ZSxcbiAgZ2xvYmFsczoge31cbn07XG5cbkFraWxpLl9faW5pdCA9IG51bGw7XG5Ba2lsaS5fX2NvbXBvbmVudHMgPSB7fTtcbkFraWxpLl9fYWxpYXNlcyA9IHt9O1xuQWtpbGkuX19zY29wZXMgPSB7fTtcbkFraWxpLl9fc3RvcmVMaW5rcyA9IHt9O1xuQWtpbGkuX193aW5kb3cgPSB7fTtcbkFraWxpLl9faXNvbGF0aW9uID0gbnVsbDtcbkFraWxpLl9fZXZhbHVhdGlvbiA9IG51bGw7XG5cbkFraWxpLmh0bWxCb29sZWFuQXR0cmlidXRlcyA9IFtcbiAgJ2Rpc2FibGVkJywgJ2NvbnRlbnRlZGl0YWJsZScsICdoaWRkZW4nXG5dO1xuXG5Ba2lsaS5jb21wb25lbnRzID0ge307XG5Ba2lsaS5kZWNvcmF0b3JzID0ge307XG5Ba2lsaS5zZXJ2aWNlcyA9IHt9O1xuXG4vKipcbiAqIEpvaW4gYmluZGluZyBrZXlzXG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBiaW5kaW5nIGtleXNcbiAqL1xuQWtpbGkuam9pbkJpbmRpbmdLZXlzID0gZnVuY3Rpb24oa2V5cykge1xuICByZXR1cm4ga2V5cy5tYXAoZWwgPT4gZWwudG9TdHJpbmcoKSkuam9pbignLicpO1xufTtcblxuLyoqXG4gKiBBZGQgc2NvcGUgdG8gdGhlIHNjb3BlcyBsaXN0XG4gKlxuICogQHBhcmFtIHNjb3BlXG4gKi9cbkFraWxpLmFkZFNjb3BlID0gZnVuY3Rpb24oc2NvcGUpIHtcbiAgaWYgKHRoaXMuX19zY29wZXNbc2NvcGUuX19uYW1lXSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgU2NvcGUgbmFtZSAke3Njb3BlLl9fbmFtZX0gYWxyZWFkeSBleGlzdHNgKTtcbiAgfVxuXG4gIHRoaXMuX19zY29wZXNbc2NvcGUuX19uYW1lXSA9IHNjb3BlO1xufTtcblxuLyoqXG4gKiBHZXQgc2NvcGUgZnJvbSB0aGUgc2NvcGVzIGxpc3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHNjb3BlIG5hbWVcbiAqIEByZXR1cm5zIHtTY29wZX1cbiAqL1xuQWtpbGkuZ2V0U2NvcGUgPSBmdW5jdGlvbihuYW1lKSB7XG4gIHJldHVybiB0aGlzLl9fc2NvcGVzW25hbWVdO1xufTtcblxuLyoqXG4gKiBEZWxldGUgc2NvcGUgZnJvbSB0aGUgc2NvcGVzIGxpc3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHNjb3BlIG5hbWVcbiAqL1xuQWtpbGkucmVtb3ZlU2NvcGUgPSBmdW5jdGlvbihuYW1lKSB7XG4gIHRoaXMuX19zY29wZXNbbmFtZV0gPSBudWxsO1xuICBkZWxldGUgdGhpcy5fX3Njb3Blc1tuYW1lXTtcbn07XG5cbi8qKlxuICogR2V0IGFsbCBlbGVtZW50cyB3aXRoIGF0dGFjaGVkIEFraWxpIGNvbXBvbmVudHNcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICogQHBhcmFtIHtib29sZWFufSBbdHJlZT10cnVlXSAtIHJldHVybiBhcnJheSBvZiB0aGUgcGFyZW50cyBpZiB0cnVlLCBjbG9zZXN0IHBhcmVudCBpZiBmYWxzZVxuICogQHJldHVybnMge0FycmF5fEhUTUxFbGVtZW50fG51bGx9XG4gKi9cbkFraWxpLmdldEFraWxpUGFyZW50cyA9IGZ1bmN0aW9uIChlbCwgdHJlZSA9IHRydWUpIHtcbiAgbGV0IGFyciA9IFtdO1xuXG4gIGZ1bmN0aW9uIGNoZWNrKG5vZGUpIHtcbiAgICBpZiAoIW5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChub2RlLnBhcmVudE5vZGUuX19ha2lsaSkge1xuICAgICAgYXJyLnB1c2gobm9kZS5wYXJlbnROb2RlKTtcblxuICAgICAgaWYgKCF0cmVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVjayhub2RlLnBhcmVudE5vZGUpO1xuICB9XG5cbiAgY2hlY2soZWwpO1xuXG4gIHJldHVybiB0cmVlPyBhcnI6IGFyclswXTtcbn07XG5cbi8qKlxuICogU2V0IGVsZW1lbnQgaW5uZXIgaHRtbCB3aXRoIGNvbnRlbnQgcmVwbGFjaW5nXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCI8aT5IZWxsbzwvaT48Yj5Xb3JsZDwvYj5cIlxuICogZWwuaW5uZXJIVE1MID0gXCI8Yj5Xb3JsZDwvYj5cIjtcbiAqIEFraWxpLnNldFRlbXBsYXRlKGVsLCBcIjxpPkhlbGxvPC9pPiR7dGhpcy5fX2NoaWxkcmVufVwiKTtcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5Ba2lsaS5zZXRUZW1wbGF0ZSA9IGZ1bmN0aW9uKGVsLCB0ZW1wbGF0ZSkge1xuICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoL1xcJHsoKCg/IVxcJHspXFxzKnRoaXNcXC5fX2NvbnRlbnRcXHMqKSopfS8sIGVsLmlubmVySFRNTCk7XG4gIGVsLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuXG4gIHJldHVybiBlbC5pbm5lckhUTUw7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIHVuaXF1ZSBzY29wZSBuYW1lXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuQWtpbGkuY3JlYXRlU2NvcGVOYW1lID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB1dGlscy5jcmVhdGVSYW5kb21TdHJpbmcoMTYsIChzdHIpID0+IHtcbiAgICByZXR1cm4gISF0aGlzLl9fc2NvcGVzW3N0cl07XG4gIH0pO1xufTtcblxuLyoqXG4gKiBJc29sYXRlIGZ1bmN0aW9uLlxuICogRXZlcnkgc2NvcGUgdmFyaWFibGUgY2hhbmdlIGNhbGxzIGFjY29yZGluZyBub2RlIGV2YWx1YXRpb24uXG4gKiBGb3IgZXhhbXBsZSwgaWYgeW91IGNoYW5nZSBzb21lIHNjb3BlIHZhcmlhYmxlIGluIHRoZSBsb29wIC0gZXZhbHVhdGlvbiB3aWxsIGJlIGNhbGxlZCBvbiB0aGUgZWFjaCBjaGFuZ2UuXG4gKiBJdCBtYXkgYmUgc2xvdyBmb3IgdGhlIGFwcGxpY2F0aW9uLlxuICogWW91IGNhbiBpc29sYXRlIHRoaXMgYWN0aW9uIGFuZCBydW4gYWxsIGV2YWx1YXRpb24gcHJvY2VzcyBhZnRlciBwYXNzZWQgZnVuY3Rpb24gYXQgb25jZS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLmlzb2xhdGUgPSBmdW5jdGlvbihmbiwgY29tcG9uZW50KSB7IFxuICBpZiAodGhpcy5fX2lzb2xhdGlvbikge1xuICAgIHJldHVybiBmbigpO1xuICB9XG5cbiAgdGhpcy5fX2lzb2xhdGlvbiA9IHt9O1xuICBsZXQgcmVzID0gZm4oKTtcbiAgbGV0IHByb3BzID0gW107XG5cbiAgZm9yIChsZXQgayBpbiB0aGlzLl9faXNvbGF0aW9uKSB7XG4gICAgaWYgKCF0aGlzLl9faXNvbGF0aW9uLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBwcm9wcy5wdXNoKHRoaXMuX19pc29sYXRpb25ba10pO1xuICB9XG4gIFxuICB0aGlzLl9faXNvbGF0aW9uID0gbnVsbDtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHByb3BzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBwcm9wID0gcHJvcHNbaV07XG4gICAgbGV0IGRhdGEgPSBwcm9wLmNvbXBvbmVudC5fX2dldEJpbmQocHJvcC5rZXlzKTtcblxuICAgIGlmIChwcm9wLmlzRGVsZXRlZCkge1xuICAgICAgcHJvcC5jb21wb25lbnQuX19ldmFsdWF0ZUJ5S2V5cyhwcm9wLmtleXMsIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgXG4gICAgcHJvcC5jb21wb25lbnQuc2NvcGUuX19zZXQocHJvcC5rZXlzLCB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhwcm9wLmtleXMsIHByb3AuY29tcG9uZW50Ll9fc2NvcGUpKTtcbiAgfVxuXG4gIHByb3BzID0gbnVsbDtcbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogU3RvcCBldmFsdWF0aW9uIGJlZm9yZSB0aGUgZnVuY3Rpb24gYW5kIGNvbnRpbnVlIGFmdGVyXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS51bmV2YWx1YXRlZCA9IGZ1bmN0aW9uKGZuKSB7XG4gIGxldCBldmFsdWF0aW9uID0gdGhpcy5fX2V2YWx1YXRpb247XG4gIGxldCByZXM7XG4gIHRoaXMuX19ldmFsdWF0aW9uID0gbnVsbDtcbiAgcmVzID0gZm4oKTtcbiAgdGhpcy5fX2V2YWx1YXRpb24gPSBldmFsdWF0aW9uO1xuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBTdG9wIGlzb2xhdGlvbiBiZWZvcmUgdGhlIGZ1bmN0aW9uIGFuZCBjb250aW51ZSBhZnRlclxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkudW5pc29sYXRlZCA9IGZ1bmN0aW9uKGZuKSB7XG4gIGxldCBpc29sYXRpb24gPSB0aGlzLl9faXNvbGF0aW9uO1xuICBsZXQgcmVzO1xuICB0aGlzLl9faXNvbGF0aW9uID0gbnVsbDtcbiAgcmVzID0gZm4oKTtcbiAgdGhpcy5fX2lzb2xhdGlvbiA9IGlzb2xhdGlvbjtcbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogUnVuIHRoZSBmdW5jdGlvbiBvbiB0aGUgbmV4dCB0aWNrXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5Ba2lsaS5uZXh0VGljayA9IGZ1bmN0aW9uKGZuKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzKSA9PiBzZXRUaW1lb3V0KCgpID0+IFByb21pc2UucmVzb2x2ZShmbigpKS50aGVuKHJlcykpKTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucz17fV1cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS5pbml0aWFsaXplID0gZnVuY3Rpb24oZWwsIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgcmVjb21waWxlID0gb3B0aW9ucy5yZWNvbXBpbGU7XG4gIGxldCBjb21wb25lbnQgPSBlbC5fX2FraWxpO1xuXG4gIGlmIChjb21wb25lbnQpIHtcbiAgICBpZiAocmVjb21waWxlKSB7XG4gICAgICBjb21wb25lbnQuX19yZWNvbXBpbGUoKTtcbiAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGlzUm9vdCA9IGVsID09PSB0aGlzLl9fcm9vdDtcbiAgbGV0IGNvbXBvbmVudE5hbWUgPSB1dGlscy50b0Rhc2hDYXNlKGVsLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50JykgfHwgZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgbGV0IF9Db21wb25lbnQgPSB0aGlzLl9fY29tcG9uZW50c1tjb21wb25lbnROYW1lXTtcblxuICBDSEVDS19BTElBU0VTOiBpZiAoIV9Db21wb25lbnQpIHtcbiAgICBsZXQgc2VsZWN0b3JzID0gT2JqZWN0LmtleXModGhpcy5fX2FsaWFzZXMpO1xuXG4gICAgaWYgKCFzZWxlY3RvcnMubGVuZ3RoKSB7XG4gICAgICBicmVhayBDSEVDS19BTElBU0VTO1xuICAgIH1cblxuICAgIGxldCBzZWxlY3RvckFsbCA9IHNlbGVjdG9ycy5qb2luKCcsJyk7XG5cbiAgICBpZiAoIWVsLm1hdGNoZXMoc2VsZWN0b3JBbGwpKSB7XG4gICAgICBicmVhayBDSEVDS19BTElBU0VTO1xuICAgIH1cblxuICAgIGZvciAobGV0IHNlbGVjdG9yIGluIHRoaXMuX19hbGlhc2VzKSB7XG4gICAgICBpZiAoIXRoaXMuX19hbGlhc2VzLmhhc093blByb3BlcnR5KHNlbGVjdG9yKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVsLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIF9Db21wb25lbnQgPSB0aGlzLl9fY29tcG9uZW50c1t0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl1dO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoIV9Db21wb25lbnQgJiYgIWlzUm9vdCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghX0NvbXBvbmVudCkge1xuICAgIF9Db21wb25lbnQgPSB0aGlzLkNvbXBvbmVudDtcbiAgfVxuXG4gIGlmIChfQ29tcG9uZW50Lm1hdGNoZXMgJiYgIWVsLm1hdGNoZXMoX0NvbXBvbmVudC5tYXRjaGVzKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbXBvbmVudCA9IG5ldyBfQ29tcG9uZW50KGVsLCB7fSk7XG5cbiAgaWYgKGNvbXBvbmVudC5fX2NhbmNlbGxlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbXBvbmVudC5fX2NyZWF0ZSgpO1xuICByZXR1cm4gY29tcG9uZW50O1xufTtcblxuLyoqXG4gKiBDb21waWxlIHRoZSBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbkFraWxpLmNvbXBpbGUgPSBmdW5jdGlvbihyb290LCBvcHRpb25zID0geyByZWNvbXBpbGU6IGZhbHNlIH0pIHsgIFxuICBsZXQgZWxlbWVudHMgPSBbXTtcblxuICBjb25zdCBuZXN0ZWRJbml0aWFsaXppbmcgPSAoZWwpID0+IHtcbiAgICBsZXQgY29tcG9uZW50ID0gdGhpcy5pbml0aWFsaXplKGVsLCBvcHRpb25zKTtcbiAgICBsZXQgY2hpbGRyZW4gPSBlbC5jaGlsZHJlbjtcbiAgICBjb21wb25lbnQgJiYgZWxlbWVudHMucHVzaChjb21wb25lbnQpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmVzdGVkSW5pdGlhbGl6aW5nKGNoaWxkKTtcbiAgICB9XG4gIH07XG5cbiAgbmVzdGVkSW5pdGlhbGl6aW5nKHJvb3QpO1xuXG4gIGxldCBwID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgY29tcG9uZW50ID0gZWxlbWVudHNbaV07XG4gICAgcC5wdXNoKGNvbXBvbmVudC5fX2NvbXBpbGUoKSk7XG4gIH1cblxuICByZXR1cm4gUHJvbWlzZS5hbGwocCkudGhlbigoKSA9PiB7XG4gICAgbGV0IHIgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSBlbGVtZW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IGNvbXBvbmVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgci5wdXNoKGNvbXBvbmVudC5fX3Jlc29sdmUoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHIpO1xuICB9KTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIGNvbXBvbmVudCBvciBnZXQgaXQgaWYgZm4gaXMgbm90IHBhc3NlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gW2ZuXVxuICovXG5Ba2lsaS5jb21wb25lbnQgPSBmdW5jdGlvbihuYW1lLCBmbikge1xuICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmICghZm4pIHtcbiAgICByZXR1cm4gdGhpcy5fX2NvbXBvbmVudHNbbmFtZV0gfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0aGlzLl9fY29tcG9uZW50c1tuYW1lXSAmJiBBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgY29uc29sZS53YXJuKGBDb21wb25lbnQgJHtuYW1lfSBhbHJlYWR5IHdhcyBhZGRlZGApO1xuICB9XG5cbiAgdGhpcy5fX2NvbXBvbmVudHNbbmFtZV0gPSBmbjtcbn07XG5cbi8qKlxuICogVW5yZWdpc3RlciB0aGUgY29tcG9uZW50XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xuQWtpbGkudW5yZWdpc3RlckNvbXBvbmVudCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZGVsZXRlIHRoaXMuX19jb21wb25lbnRzW25hbWVdO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciB0aGUgc2VsZWN0b3IgYWxpYXMgb3IgZ2V0IGl0IGlmIGNvbXBvbmVudCBuYW1lIGlzIG5vdCBwYXNzZWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgLSBET00gc2VsZWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29tcG9uZW50TmFtZV1cbiAqL1xuQWtpbGkuYWxpYXMgPSBmdW5jdGlvbihzZWxlY3RvciwgY29tcG9uZW50TmFtZSA9ICcnKSB7XG4gIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYgKCFjb21wb25lbnROYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXSAmJiBBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgY29uc29sZS53YXJuKGBBbGlhcyB3aXRoIHNlbGVjdG9yICR7c2VsZWN0b3J9IGFscmVhZHkgd2FzIGFkZGVkYCk7XG4gIH1cblxuICB0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gPSBjb21wb25lbnROYW1lO1xufTtcblxuLyoqXG4gKiBVbnJlZ2lzdGVyIHRoZSBzZWxlY3RvciBhbGlhc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICovXG5Ba2lsaS51bnJlZ2lzdGVyQWxpYXMgPSBmdW5jdGlvbihzZWxlY3Rvcikge1xuICBkZWxldGUgdGhpcy5fX2NvbXBvbmVudHNbc2VsZWN0b3JdO1xufTtcblxuLyoqXG4gKiBJc29sYXRlIGFycmF5IHByb3RvdHlwZSBmdW5jdGlvbnNcbiAqL1xuQWtpbGkuaXNvbGF0ZUFycmF5UHJvdG90eXBlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX193aW5kb3cuQXJyYXkgPSB7IHByb3RvdHlwZToge30gfTtcblxuICBsZXQga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKEFycmF5LnByb3RvdHlwZSk7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgIGxldCBvbGQgPSBBcnJheS5wcm90b3R5cGVba2V5XTtcblxuICAgIGlmICh0eXBlb2Ygb2xkICE9ICdmdW5jdGlvbicgfHwga2V5ID09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHRoaXMuX193aW5kb3cuQXJyYXkucHJvdG90eXBlW2tleV0gPSBvbGQ7XG5cbiAgICBBcnJheS5wcm90b3R5cGVba2V5XSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIEFraWxpLnVuZXZhbHVhdGVkKCgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLl9faXNQcm94eSkge1xuICAgICAgICAgIHJldHVybiBBa2lsaS51bmV2YWx1YXRlZCgoKSA9PiB7XG4gICAgICAgICAgICAgcmV0dXJuIG9sZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gb2xkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxufTtcblxuLyoqXG4gKiBJc29sYXRlIHNvbWUgd2luZG93IGZ1bmN0aW9uc1xuICovXG5Ba2lsaS5pc29sYXRlV2luZG93RnVuY3Rpb25zID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX193aW5kb3cuc2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gIHRoaXMuX193aW5kb3cuc2V0SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbDtcbiAgdGhpcy5fX3dpbmRvdy5Qcm9taXNlID0gUHJvbWlzZTtcbiAgd2luZG93LnNldFRpbWVvdXQgPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5zZXRUaW1lb3V0LCAwKTtcbiAgd2luZG93LnNldEludGVydmFsID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuc2V0SW50ZXJ2YWwsIDApO1xuICB3aW5kb3cuUHJvbWlzZS5jb25zdHJ1Y3RvciA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LlByb21pc2UuY29uc3RydWN0b3IpO1xuICB3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LlByb21pc2UucHJvdG90eXBlLnRoZW4sIFswLCAnbGFzdCddKTtcbiAgd2luZG93LlByb21pc2UucHJvdG90eXBlLmNhdGNoID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gpO1xufTtcblxuLyoqXG4gKiBJc29sYXRlIGV2ZW50IGxpc3RlbmVyc1xuICovXG5Ba2lsaS5pc29sYXRlRXZlbnRzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX193aW5kb3cuRWxlbWVudCA9IHsgcHJvdG90eXBlOiB7fSB9O1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBFbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyO1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyO1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZTtcblxuICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICBkZWxldGUgdGhpcy5fX2FraWxpTGlzdGVuZXJzO1xuICAgIHJldHVybiBBa2lsaS5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICBFbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBsZXQgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgYXJnc1sxXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLnB1c2goe1xuICAgICAgbGluazogZm4sXG4gICAgICBmbjogYXJnc1sxXVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIEFraWxpLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG5cbiAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYgKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVycyA9IHt9O1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBsaXN0ZW5lciA9IHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXVtpXTtcblxuICAgICAgaWYgKGxpc3RlbmVyLmxpbmsgPT09IGZuKSB7XG4gICAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGktLTtcbiAgICAgICAgbC0tO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIEFraWxpLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cbi8qKlxuICogV3JhcCB0aGUgZnVuY3Rpb24gY2FsbGJhY2sgdG8gYW4gaXNvbGF0ZSBjb250ZXh0XG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ3xudW1iZXJbXXxzdHJpbmdbXX0gW3Bvcz1cImxhc3RcIl1cbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqL1xuQWtpbGkuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24gPSBmdW5jdGlvbihmbiwgcG9zID0gJ2xhc3QnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgIUFycmF5LmlzQXJyYXkocG9zKSAmJiAocG9zID0gW3Bvc10pO1xuICAgIFxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBwb3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbnVtID0gcG9zW2ldO1xuICAgICAgbGV0IGluZGV4ID0gbnVtO1xuICAgICAgbGV0IGNhbGxiYWNrID0gYXJnc1tudW1dO1xuXG4gICAgICBpZihudW0gPT0gJ2xhc3QnKSB7XG4gICAgICAgIGluZGV4ID0gYXJncy5sZW5ndGggLSAxO1xuICAgICAgICBjYWxsYmFjayA9IGFyZ3NbaW5kZXhdO1xuICAgICAgfVxuXG4gICAgICBpZih0eXBlb2YgY2FsbGJhY2sgIT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgYXJnc1tpbmRleF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjay5hcHBseShjYWxsYmFjaywgYXJndW1lbnRzKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSB0aGUgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtvYmplY3R9IFtjb250ZXh0XVxuICogQHJldHVybnMge2Z1bmN0aW9ufVxuICovXG5Ba2lsaS5pc29sYXRlRnVuY3Rpb24gPSBmdW5jdGlvbihmbiwgY29udGV4dCA9IG51bGwpIHtcbiAgaWYgKGZuLl9fYWtpbGkpIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICBsZXQgb0ZuID0gZnVuY3Rpb24oKSB7XG4gICAgY29udGV4dCA9IGNvbnRleHQgfHwgdGhpcztcblxuICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgIHJldHVybiBmbi5hcHBseShjb250ZXh0LCBhcmd1bWVudHMpO1xuICAgIH0pO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvRm4sICdfX2FraWxpJywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcblxuICByZXR1cm4gb0ZuO1xufTtcblxuLyoqXG4gKiBFcnJvciBoYW5kbGluZ1xuICovXG5Ba2lsaS5lcnJvckhhbmRsaW5nID0gZnVuY3Rpb24oKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICB0aGlzLnRyaWdnZXJJbml0KGZhbHNlKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFRyaWdnZXIgYW4gaW5pdGlhbGl6YXRpb24gc3RhdHVzXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBzdGF0dXNcbiAqL1xuQWtpbGkudHJpZ2dlckluaXQgPSBmdW5jdGlvbihzdGF0dXMpIHtcbiAgQWtpbGkuX19pbml0ID0gc3RhdHVzO1xuICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2FraWxpLWluaXQnLCB7IGRldGFpbDogc3RhdHVzIH0pKTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgYXBwbGljYXRpb25cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbcm9vdF1cbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5Ba2lsaS5pbml0ID0gZnVuY3Rpb24ocm9vdCkge1xuICB0aGlzLl9fcm9vdCA9IHJvb3QgfHwgZG9jdW1lbnQuYm9keTtcblxuICBpZihyb290ID09PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFwiaHRtbFwiIGNhbid0IGJlIHRoZSByb290IGVsZW1lbnRgKTtcbiAgfVxuICBcbiAgaWYod2luZG93LkFLSUxJX1NFUlZFUikge1xuICAgIHRoaXMuX19yb290LnJlbW92ZUF0dHJpYnV0ZSgnc2NvcGUnKTtcbiAgICB0aGlzLl9fcm9vdC5pbm5lckhUTUwgPSB3aW5kb3cuQUtJTElfU0VSVkVSLmh0bWw7XG4gIH1cbiAgZWxzZSB7XG4gICAgd2luZG93LkFLSUxJX0NMSUVOVCA9IHtcbiAgICAgIGh0bWw6IHRoaXMuX19yb290LmlubmVySFRNTFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzLmNvbXBpbGUodGhpcy5fX3Jvb3QpLnRoZW4oKCkgPT4ge1xuICAgIGlmIChyb3V0ZXIuX19pbml0KSB7XG4gICAgICByZXR1cm4gcm91dGVyLmNoYW5nZVN0YXRlKCk7XG4gICAgfVxuICB9KS50aGVuKCgpID0+IHtcbiAgICB0aGlzLnRyaWdnZXJJbml0KHRydWUpO1xuICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgdGhpcy50cmlnZ2VySW5pdChmYWxzZSk7XG4gICAgdGhyb3cgZXJyO1xuICB9KTtcbn07XG5cbi8qKlxuICogRGVpbml0aWFsaXplIHRoZSBhcHBsaWNhdGlvblxuICovXG5Ba2lsaS5kZWluaXQgPSBmdW5jdGlvbigpIHtcbiAgZm9yIChsZXQga2V5IGluIHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUpIHtcbiAgICBFbGVtZW50LnByb3RvdHlwZVtrZXldID0gdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZVtrZXldO1xuICB9XG5cbiAgZm9yIChsZXQga2V5IGluIHRoaXMuX193aW5kb3cuQXJyYXkucHJvdG90eXBlKSB7XG4gICAgQXJyYXkucHJvdG90eXBlW2tleV0gPSB0aGlzLl9fd2luZG93LkFycmF5LnByb3RvdHlwZVtrZXldO1xuICB9XG5cbiAgd2luZG93LnNldFRpbWVvdXQgPSB0aGlzLl9fd2luZG93LnNldFRpbWVvdXQ7XG4gIHdpbmRvdy5zZXRJbnRlcnZhbCA9IHRoaXMuX193aW5kb3cuc2V0SW50ZXJ2YWw7XG4gIHdpbmRvdy5Qcm9taXNlID0gdGhpcy5fX3dpbmRvdy5Qcm9taXNlO1xufTtcblxuLyoqXG4gKiBEZWZpbmUgYWxsIGRlZmF1bHQgY29tcG9uZW50c1xuICovXG5Ba2lsaS5kZWZpbmUgPSBmdW5jdGlvbigpIHtcbiAgQS5kZWZpbmUoKTtcbiAgQXVkaW8uZGVmaW5lKCk7XG4gIENvbnRlbnQuZGVmaW5lKCk7XG4gIENvbXBvbmVudC5kZWZpbmUoKTtcbiAgRW1iZWQuZGVmaW5lKCk7XG4gIEZvci5kZWZpbmUoKTtcbiAgSW5jbHVkZS5kZWZpbmUoKTtcbiAgSWZyYW1lLmRlZmluZSgpO1xuICBJbWFnZS5kZWZpbmUoKTtcbiAgSW5wdXQuZGVmaW5lKCk7XG4gIElmLmRlZmluZSgpO1xuICBPYmplY3RzLmRlZmluZSgpO1xuICBSYWRpby5kZWZpbmUoKTtcbiAgUm91dGUuZGVmaW5lKCk7XG4gIFNlbGVjdC5kZWZpbmUoKTtcbiAgU291cmNlLmRlZmluZSgpO1xuICBUZXh0YXJlYS5kZWZpbmUoKTtcbiAgVHJhY2suZGVmaW5lKCk7XG4gIFZpZGVvLmRlZmluZSgpO1xufTtcblxuQWtpbGkuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuQWtpbGkuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuQWtpbGkuU2NvcGUgPSBTY29wZTtcbkFraWxpLnV0aWxzID0gdXRpbHM7XG5Ba2lsaS5jb21wb25lbnRzLkEgPSBBO1xuQWtpbGkuY29tcG9uZW50cy5BdWRpbyA9IEF1ZGlvO1xuQWtpbGkuY29tcG9uZW50cy5Db250ZW50ID0gQ29udGVudDtcbkFraWxpLmNvbXBvbmVudHMuRm9yID0gRm9yO1xuQWtpbGkuY29tcG9uZW50cy5FbWJlZCA9IEVtYmVkO1xuQWtpbGkuY29tcG9uZW50cy5JZiA9IElmO1xuQWtpbGkuY29tcG9uZW50cy5JbmNsdWRlID0gSW5jbHVkZTtcbkFraWxpLmNvbXBvbmVudHMuSW5wdXQgPSBJbnB1dDtcbkFraWxpLmNvbXBvbmVudHMuSWZyYW1lID0gSWZyYW1lO1xuQWtpbGkuY29tcG9uZW50cy5JbWFnZSA9IEltYWdlO1xuQWtpbGkuY29tcG9uZW50cy5PYmplY3QgPSBPYmplY3RzO1xuQWtpbGkuY29tcG9uZW50cy5SYWRpbyA9IFJhZGlvO1xuQWtpbGkuY29tcG9uZW50cy5Sb3V0ZSA9IFJvdXRlO1xuQWtpbGkuY29tcG9uZW50cy5TZWxlY3QgPSBTZWxlY3Q7XG5Ba2lsaS5jb21wb25lbnRzLlNvdXJjZSA9IFNvdXJjZTtcbkFraWxpLmNvbXBvbmVudHMuVGV4dCA9IFRleHQ7XG5Ba2lsaS5jb21wb25lbnRzLlRleHRhcmVhID0gVGV4dGFyZWE7XG5Ba2lsaS5jb21wb25lbnRzLlRyYWNrID0gVHJhY2s7XG5Ba2lsaS5jb21wb25lbnRzLlVybCA9IFVybDtcbkFraWxpLmNvbXBvbmVudHMuVmlkZW8gPSBWaWRlbztcbkFraWxpLnNlcnZpY2VzLnJlcXVlc3QgPSByZXF1ZXN0O1xuQWtpbGkuc2VydmljZXMucm91dGVyID0gcm91dGVyO1xuQWtpbGkuc2VydmljZXMuc3RvcmUgPSBzdG9yZTtcblxud2luZG93LkFraWxpID0gQWtpbGk7XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnRzID0gQWtpbGkuY29tcG9uZW50cztcbmV4cG9ydCBjb25zdCBzZXJ2aWNlcyA9IEFraWxpLnNlcnZpY2VzO1xuZXhwb3J0IGRlZmF1bHQgQWtpbGk7XG5cbkFraWxpLmRlZmluZSgpO1xuQWtpbGkuZXJyb3JIYW5kbGluZygpO1xuQWtpbGkuaXNvbGF0ZUV2ZW50cygpO1xuQWtpbGkuaXNvbGF0ZUFycmF5UHJvdG90eXBlKCk7XG5Ba2lsaS5pc29sYXRlV2luZG93RnVuY3Rpb25zKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FraWxpLmpzIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXIuanMnXG5cbmNvbnN0IHV0aWxzID0ge307XG5cbi8qKlxuICogQ3JlYXRlIGNsYXNzIGF0dHJpYnV0ZSBmcm9tIGFuIG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwicmVkIGFjdGl2ZVwiXG4gKiB1dGlscy5jbGFzcyh7cmVkOiB0cnVlLCBhY3RpdmU6IHRydWUsIGdyZWVuOiBmYWxzZX0pO1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmNsYXNzID0gZnVuY3Rpb24gKG9iaikge1xuICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGxldCBjbGFzc2VzID0gW107XG5cbiAgZm9yIChsZXQgayBpbiBvYmopIHtcbiAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgbGV0IHZhbCA9IG9ialtrXTtcbiAgICB2YWwgJiYgY2xhc3Nlcy5wdXNoKGspO1xuICB9XG5cbiAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgc3R5bGUgYXR0cmlidXRlIGZyb20gYW4gb2JqZWN0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJjb2xvcjpyZWQ7d2lkdGg6MTBweFwiXG4gKiB1dGlscy5zdHlsZSh7Y29sb3I6IFwicmVkXCIsIGJhY2tncm91bmQ6IGZhbHNlLCB3aWR0aDogXCIxMHB4XCJ9KTtcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5zdHlsZSA9IGZ1bmN0aW9uKG9iaikge1xuICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGxldCBzdHlsZXMgPSBbXTtcblxuICBmb3IgKGxldCBrIGluIG9iaikge1xuICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBsZXQgdmFsID0gb2JqW2tdO1xuICAgIHZhbCAmJiBzdHlsZXMucHVzaChgJHt0aGlzLnRvRGFzaENhc2Uoayl9OiR7dmFsfWApO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlcy5qb2luKCc7Jyk7XG59O1xuXG4vKipcbiAqIEZpbHRlciBhbiBhcnJheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsxLCAxMV1cbiAqIHV0aWxzLmZpbHRlcihbMSwgMiwgMywgMTFdLCAnMScpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMX0sIHt4OiAxMX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxfSwge3g6IDJ9LCB7eDogM30sIHt4OiAxMX1dLCAnMScsICd4Jyk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMX0sIHt4OiAxMX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxfSwge3g6IDJ9LCB7eDogM30sIHt4OiAxMX1dLCAnMScsIFsneCddKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxfSwge3g6IDExfV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IDF9LCB7eDogMn0sIHt4OiAzfSwge3g6IDExfV0sICcxJywgW1sneCddXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoge3k6IDF9fV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IHt5OiAxfX0sIHt4OiB7eTogMn19XSwgJzEnLCBbWyd4JywgJ3knXV0pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6MSwgeTogMn0sIHt4OiAyLCB5OjF9XSBcbiAqIHV0aWxzLmZpbHRlcihbe3g6IDEsIHk6IDJ9LCB7eDogMywgeTogM30sIHt4OiAyLCB5OiAxfV0sICcxJywgWyd4JywgJ3knXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoxLCB5OiAyfSwge3g6IDIsIHk6MX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OiAxLCB5OiAyfSwge3g6IDMsIHk6IDN9LCB7eDogMiwgeTogMX1dLCAnMScsIFtbJ3gnXSwgWyd5J11dKTtcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cHxmdW5jdGlvbn0gaGFuZGxlciAtIHR5cGUgb2YgZmlsdGVyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ1tdfHN0cmluZ30gW2tleXNdIC0gZmlsdGVyIGluIHRoZSBrZXlzIGlmIGFycmF5IGVsZW1lbnRzIGFyZSBvYmplY3RcbiAqIEByZXR1cm5zIHtBcnJheX0gLSByZXR1cm5zIG90aGVyIGFycmF5XG4gKi9cbnV0aWxzLmZpbHRlciA9IGZ1bmN0aW9uIChhcnIsIGhhbmRsZXIsIGtleXMgPSBudWxsKSB7XG4gIGxldCByZXMgPSBbXTtcblxuICBpZiAoa2V5cyAmJiAhQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgIGtleXMgPSBba2V5c107XG4gIH1cblxuICBpZih0eXBlb2YgaGFuZGxlciAhPSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3Qgc3RyID0gaGFuZGxlcj8gKGhhbmRsZXIgKyAnJykudG9Mb3dlckNhc2UoKTogJyc7XG4gICAgaGFuZGxlciA9IHZhbCA9PiAodmFsPyAodmFsICsgJycpLnRvTG93ZXJDYXNlKCk6ICcnKS5tYXRjaChzdHIpO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGl0ZW0gPSBhcnJbaV07XG4gICAgbGV0IGZpbHRlcmVkID0gZmFsc2U7XG5cbiAgICBpZigha2V5cyAmJiBoYW5kbGVyKGl0ZW0pKSB7XG4gICAgICBmaWx0ZXJlZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYoa2V5cykge1xuICAgICAgZm9yKGxldCBrID0gMCwgYyA9IGtleXMubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2tdO1xuICAgICAgICBrZXkgPSBBcnJheS5pc0FycmF5KGtleSk/IGtleTogW2tleV07XG4gICAgICAgIGxldCB2YWwgPSBrZXk/IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5LCBpdGVtKTogaXRlbTtcbiAgICBcbiAgICAgICAgaWYgKGhhbmRsZXIodmFsKSkge1xuICAgICAgICAgIGZpbHRlcmVkID0gdHJ1ZTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZpbHRlcmVkICYmIHJlcy5wdXNoKGl0ZW0pOyAgIFxuICB9XG5cbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogT3JkZXIgYW4gYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMSwgMiwgM11cbiAqIHV0aWxzLnNvcnQoWzMsIDIsIDFdLCB0cnVlKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMywgMiwgMV1cbiAqIHV0aWxzLnNvcnQoWzEsIDIsIDNdLCBmYWxzZSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dXG4gKiB1dGlscy5zb3J0KFt7eDogM30sIHt4OiAyfSwge3g6IDF9XSwgW1sneCddXSwgW3RydWVdKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCBbJ3gnXSwgdHJ1ZSk7XG4gKiB1dGlscy5zb3J0KFt7eDogM30sIHt4OiAyfSwge3g6IDF9XSwgJ3gnKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dLCBbWyd4J11dLCBbZmFsc2VdKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dLCBbJ3gnXSwgZmFsc2UpO1xuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sICd4JywgZmFsc2UpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMSwgeTogM30sIHt4OiAyLCB5OiAxfSwge3g6MiwgeTogMn1dXG4gKiB1dGlscy5zb3J0KFt7eDogMiwgeTogMn0sIHt4OiAyLCB5OiAxfSwge3g6IDIsIHk6IDN9XSwgW1sneCddLCBbJ3knXV0sIFt0cnVlLCB0cnVlXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoge3k6IDF9fSwge3g6IHt5OiAyfX1dXG4gKiB1dGlscy5zb3J0KFt7eDoge3k6IDJ9fSwge3g6IHt5OiAxfX1dLCBbWyd4JywgJ3knXV0sIFt0cnVlXSk7XG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0ge2Jvb2xlYW58QXJyYXlbXXxzdHJpbmdbXXxzdHJpbmd9IFtrZXlzXVxuICogQHBhcmFtIHtib29sZWFufGJvb2xlYW5bXX0gW29yZGVyXSAtIHJldmVyc2Ugb3Igbm90XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbnV0aWxzLnNvcnQgPSBmdW5jdGlvbihhcnIsIGtleXMgPSB0cnVlLCBvcmRlciA9IFtdKSB7XG4gIGFyciA9IFsuLi5hcnJdO1xuXG4gIGlmIChrZXlzID09PSB0cnVlKSB7XG4gICAga2V5cyA9IFtdO1xuICAgIG9yZGVyID0gW3RydWVdO1xuICB9XG4gIGVsc2UgaWYgKGtleXMgPT09IGZhbHNlKSB7XG4gICAga2V5cyA9IFtdO1xuICAgIG9yZGVyID0gW2ZhbHNlXTtcbiAgfVxuXG4gIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgIGtleXMgPSBba2V5c107XG4gIH1cblxuICBpZiAoIUFycmF5LmlzQXJyYXkob3JkZXIpKSB7XG4gICAgb3JkZXIgPSBbb3JkZXJdO1xuICB9XG5cbiAgbGV0IGwgPSBrZXlzLmxlbmd0aDtcblxuICBhcnIuc29ydCgoYSwgYikgPT4ge1xuICAgIGxldCBpID0gMDtcblxuICAgIGNvbnN0IGNoZWNrID0gKGEsIGIsIHJldmVyc2UgPSBmYWxzZSkgPT4ge1xuICAgICAgaWYgKGEgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIGEgPSBhLmdldFRpbWUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGIgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIGIgPSBiLmdldFRpbWUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGEgPiBiKSB7XG4gICAgICAgIHJldHVybiByZXZlcnNlPyAtMTogMTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGEgPCBiKSB7XG4gICAgICAgIHJldHVybiByZXZlcnNlPyAxOiAtMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDA7XG4gICAgfTtcblxuICAgIGNvbnN0IG5leHQgPSAoKSA9PiB7XG4gICAgICBpZiAoaSA+PSBsKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuXG4gICAgICBsZXQga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGtleSkpIHtcbiAgICAgICAga2V5ID0gW2tleV07XG4gICAgICB9XG5cbiAgICAgIGxldCBhViA9IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5LCBhKTtcbiAgICAgIGxldCBiViA9IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5LCBiKTtcbiAgICAgIGxldCByZXMgPSBjaGVjayhhViwgYlYsIG9yZGVyW2ldID09PSBmYWxzZSk7XG5cbiAgICAgIGlmIChyZXMgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1cblxuICAgICAgaSsrO1xuICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICB9O1xuXG4gICAgaWYgKCFsKSB7XG4gICAgICByZXR1cm4gY2hlY2soYSwgYiwgb3JkZXJbaV0gPT09IGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dCgpO1xuICB9KTtcblxuICByZXR1cm4gYXJyO1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgdmFsdWUgaXMgY29tcG9uZW50IHNjb3BlIHByb3h5IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaXNTY29wZVByb3h5ID0gZnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiAhISh2YWwgJiYgdHlwZW9mIHZhbCA9PSAnb2JqZWN0JyAmJiB2YWwuX19pc1Byb3h5KTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIHZhbHVlIGlzIHBsYWluIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaXNQbGFpbk9iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuICByZXR1cm4gISEob2JqICYmIHR5cGVvZiBvYmogPT0gJ29iamVjdCcgJiYgKG9iai5jb25zdHJ1Y3RvciA9PSBPYmplY3QgfHwgb2JqLmNvbnN0cnVjdG9yID09IEFycmF5KSk7XG59O1xuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHBhcmFtIHtib29sZWFufSBbbmVzdGVkPXRydWVdIC0gZGVlcCBjb3B5IGlmIGlzIHRydWVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3VuZW51bWVyYWJsZT1mYWxzZV0gLSBpbmNsdWRpbmcgbm9uLWVudW1lcmFibGUgcHJvcGVydGllc1xuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmNvcHkgPSBmdW5jdGlvbih2YWx1ZSwgbmVzdGVkID0gdHJ1ZSwgdW5lbnVtZXJhYmxlID0gZmFsc2UpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCAhdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBjb25zdCBuZXh0ID0gKG9iaikgPT4ge1xuICAgIG9iaiA9IHRoaXMuaXNTY29wZVByb3h5KG9iaik/IG9iai5fX3RhcmdldDogb2JqO1xuICAgIGxldCBrZXlzID0gdW5lbnVtZXJhYmxlPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopOiBPYmplY3Qua2V5cyhvYmopO1xuICAgIGxldCBuZXdPYmogPSBBcnJheS5pc0FycmF5KG9iaik/IFtdOiB7fTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgIGxldCB2YWwgPSBvYmpba2V5XTtcbiAgICAgIHZhbCA9IHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnICYmIG5lc3RlZD8gbmV4dCh2YWwpOiB2YWw7ICAgICAgXG4gICAgICBcbiAgICAgIGlmKCFvYmoucHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIHtcbiAgICAgICAgICAuLi5PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSxcbiAgICAgICAgICB2YWx1ZTogdmFsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBuZXdPYmpba2V5XSA9IHZhbDsgIFxuICAgIH1cblxuICAgIHJldHVybiBuZXdPYmo7XG4gIH1cblxuICByZXR1cm4gbmV4dCh2YWx1ZSk7XG59O1xuXG4vKipcbiAqIENoYW5nZSB0aGUgdmFsdWUgdG8gYXR0cmlidXRlIGFwcHJvcHJpYXRlIGZvcm1hdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5tYWtlQXR0cmlidXRlVmFsdWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IGZhbHNlIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBFdmVudEVtaXR0ZXIpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgRXZlbnRdJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiAnW29iamVjdCBGdW5jdGlvbl0nO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlICsgJyc7XG59O1xuXG4vKipcbiAqIENvbXBhcmUgdHdvIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7Kn0gYVxuICogQHBhcmFtIHsqfSBiXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuY29tcGFyZSA9IGZ1bmN0aW9uIChhLCBiLCBvcHRpb25zID0ge30pIHtcbiAgaWYgKChhIGluc3RhbmNlb2YgRGF0ZSkgJiYgKGIgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgIHJldHVybiBhLmdldFRpbWUoKSA9PT0gYi5nZXRUaW1lKCk7XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIGEgPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgYiA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGEudG9TdHJpbmcoKSA9PT0gYi50b1N0cmluZygpO1xuICB9XG4gIGVsc2UgaWYgKHR5cGVvZiBhID09ICdvYmplY3QnICYmIHR5cGVvZiBiID09ICdvYmplY3QnKSB7XG4gICAgaWYgKGEgPT09IG51bGwgfHwgYiA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGEgPT09IGI7XG4gICAgfVxuXG4gICAgYSA9IHRoaXMuaXNTY29wZVByb3h5KGEpPyBhLl9fdGFyZ2V0OiBhO1xuICAgIGIgPSB0aGlzLmlzU2NvcGVQcm94eShiKT8gYi5fX3RhcmdldDogYjtcblxuICAgIGNvbnN0IGNsZWFyVW5kZWZpbmVkID0gKHZhbCkgPT4ge1xuICAgICAgbGV0IG9iaiA9IEFycmF5LmlzQXJyYXkodmFsKT8gW106IHt9O1xuICAgICAgT2JqZWN0LmtleXModmFsKS5mb3JFYWNoKGtleSA9PiB2YWxba2V5XSAhPT0gdW5kZWZpbmVkICYmIChvYmpba2V5XSA9IHZhbFtrZXldKSk7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGlmKG9wdGlvbnMuaWdub3JlVW5kZWZpbmVkKSB7XG4gICAgICBhID0gY2xlYXJVbmRlZmluZWQoYSk7XG4gICAgICBiID0gY2xlYXJVbmRlZmluZWQoYik7XG4gICAgfVxuICAgIFxuICAgIGlmIChPYmplY3Qua2V5cyhhKS5sZW5ndGggIT0gT2JqZWN0LmtleXMoYikubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgYSA9IHRoaXMuaXNTY29wZVByb3h5KGEpPyBhLl9fdGFyZ2V0OiBhO1xuICAgIGIgPSB0aGlzLmlzU2NvcGVQcm94eShiKT8gYi5fX3RhcmdldDogYjtcblxuICAgIGZvciAobGV0IGsgaW4gYSkge1xuICAgICAgaWYgKCFhLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuY29tcGFyZShhW2tdLCBiW2tdKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gYSA9PT0gYjtcbn07XG5cbi8qKlxuICogQ29tcGFyZSB0aGUgY3VycmVudCB2YWx1ZSB3aXRoIHRoZSBwcmV2aW91c1xuICpcbiAqIEBwYXJhbSB7Kn0gY3VycmVudCAtIHRoZSBjdXJyZW50IHZhbHVlXG4gKiBAcGFyYW0geyp9IHByZXZpb3VzIC0gdGhlIHByZXZpb3VzIHZhbHVlXG4gKiBAcGFyYW0geyp9IHByZXZpb3VzQ29weSAtIHRoZSBwcmV2aW91cyB2YWx1ZSBjb3B5XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuY29tcGFyZVByZXZpb3VzVmFsdWUgPSBmdW5jdGlvbihjdXJyZW50LCBwcmV2aW91cywgcHJldmlvdXNDb3B5KSB7XG4gIGlmIChjdXJyZW50ICE9PSBwcmV2aW91cykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmNvbXBhcmUoY3VycmVudCwgcHJldmlvdXNDb3B5KTtcbn07XG5cbi8qKlxuICogRW5jb2RlIGh0bWwgZW50aXRpZXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcInlvdSAmYW1wIG1lXCJcbiAqIHV0aWxzLmVuY29kZUh0bWxFbnRpdGllcygneW91ICYgbWUnKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuZW5jb2RlSHRtbEVudGl0aWVzID0gZnVuY3Rpb24oaHRtbCkge1xuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgdmFsdWU7XG4gIGVsLnRleHRDb250ZW50ID0gaHRtbDtcbiAgdmFsdWUgPSBlbC5pbm5lckhUTUw7XG4gIGVsLnJlbW92ZSgpO1xuICBlbCA9IG51bGw7XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbi8qKlxuICogRGVjb2RlIGh0bWwgZW50aXRpZXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcInlvdSAmIG1lXCJcbiAqIHV0aWxzLmRlY29kZUh0bWxFbnRpdGllcygneW91ICZhbXAgbWUnKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuZGVjb2RlSHRtbEVudGl0aWVzID0gZnVuY3Rpb24oaHRtbCkge1xuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGxldCB2YWx1ZTtcbiAgZWwuaW5uZXJIVE1MID0gaHRtbDtcbiAgdmFsdWUgPSBlbC52YWx1ZTtcbiAgZWwucmVtb3ZlKCk7XG4gIGVsID0gbnVsbDtcbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RyaW5nIGZyb20gZGFzaCB0byBjYW1lbCBjYXNlIGZvcm1hdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnRvQ2FtZWxDYXNlID0gZnVuY3Rpb24oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXFxXKyguKS9nLCAobSwgYykgPT4gYy50b1VwcGVyQ2FzZSgpKTtcbn07XG5cbi8qKlxuICogQ2FwaXRhbGl6ZSB0aGUgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuY2FwaXRhbGl6ZSA9IGZ1bmN0aW9uKHN0cikge1xuICByZXR1cm4gc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59O1xuXG4vKipcbiAqIENoYW5nZSBzdHJpbmcgZnJvbSBjYW1lbCB0byBkYXNoIGNhc2UgZm9ybWF0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMudG9EYXNoQ2FzZSA9IGZ1bmN0aW9uKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgKG0sIGMpID0+IGAtJHtjLnRvTG93ZXJDYXNlKCl9YCk7XG59O1xuXG4vKipcbiAqIEdldCBuZXN0ZWQgb2JqZWN0IHByb3BlcnR5IGJ5IGFycmF5IGtleXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyA1XG4gKiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmdldFByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0KSB7XG4gIGxldCBjdXJyZW50O1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZShmdW5jdGlvbihvLCBrKSB7XG4gICAgaSsrO1xuXG4gICAgaWYgKHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gbztcbiAgICB9XG5cbiAgICBpZiAob1trXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgKGkgPT0gbGVuZ3RoKSAmJiAoY3VycmVudCA9IG9ba10pO1xuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiBjdXJyZW50O1xufTtcblxuLyoqXG4gKiBDaGVjayBuZXN0ZWQgb2JqZWN0cyB0cmVlIGhhcyBwcm9wZXJ0eSBvciBub3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB0cnVlXG4gKiB1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0KSB7XG4gIGxldCBoYXMgPSBmYWxzZTtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoZnVuY3Rpb24obywgaykge1xuICAgIGkrKztcblxuICAgIGlmICh0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuICEhbztcbiAgICB9XG5cbiAgICBpZiAoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAoaSA9PSBsZW5ndGgpICYmIChoYXMgPSBvLmhhc093blByb3BlcnR5KGspKTtcbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gaGFzO1xufTtcblxuLyoqXG4gKiBTZXQgbmVzdGVkIG9iamVjdHMgdHJlZSBwcm9wZXJ0eVxuICogUmV0dXJucyBjaGFuZ2VkIHByb3BlcnR5IG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHt5OiA2fVxuICogdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0sIChsYXN0LCB2YWwpID0+IGxhc3Q/IDY6ICh2YWwgfHwge30pKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLnNldFByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0LCBmbikge1xuICBsZXQgY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoZnVuY3Rpb24obywgaykge1xuICAgIGkrKztcblxuICAgIGlmICh0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghby5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgcmV0dXJuIGN1cnJlbnQgPSBvW2tdID0gZm4oaSA9PSBsZW5ndGgpO1xuICAgIH1cblxuICAgIG9ba10gPSBmbihpID09IGxlbmd0aCwgb1trXSk7XG4gICAgY3VycmVudCA9IG87XG5cbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gY3VycmVudDtcbn07XG5cbi8qKlxuICpcbiAqIERlbGV0ZSBwcm9wZXJ0eSBmcm9tIG5lc3RlZCBvYmplY3RzIHRyZWVcbiAqIFJldHVybnMgZGVsZXRlZCBwcm9wZXJ0eSB2YWx1ZVxuICogWW91IGNhbiBjYW5jZWwgZGVsZXRpbmcgaWYgd2lsbCByZXR1cm4gZmFsc2UgaW4gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIDVcbiAqIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19LCB2YWwgPT4gdmFsICE9IDUpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtmbl1cbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCwgZm4pIHtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgdmFsdWU7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZShmdW5jdGlvbihvLCBrKSB7XG4gICAgaSsrO1xuXG4gICAgaWYgKHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFvLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgaWYgKGkgPT0gbGVuZ3RoKSB7XG4gICAgICB2YWx1ZSA9IG9ba107XG5cbiAgICAgIGlmICghZm4gfHwgZm4odmFsdWUpKSB7XG4gICAgICAgIGRlbGV0ZSBvW2tdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuXG4vKipcbiAqIEdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSB0YXJnZXQgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xuXG51dGlscy5nZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQgPSBmdW5jdGlvbih0YXJnZXQsIGtleSkge1xuICBjb25zdCBjaGVjayA9IChvYmopID0+IHtcbiAgICBpZiAob2JqLnByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgbGV0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG5cbiAgICBpZiAoIXByb3RvKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hlY2socHJvdG8pO1xuICB9O1xuXG4gIHJldHVybiBjaGVjayh0YXJnZXQpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIG93biBwcm9wZXJ0eSB0YXJnZXQgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xudXRpbHMuZ2V0T3duUHJvcGVydHlUYXJnZXQgPSBmdW5jdGlvbih0YXJnZXQsIGtleSkge1xuICBjb25zdCBjaGVjayA9IChvYmopID0+IHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgbGV0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG5cbiAgICBpZiAoIXByb3RvKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hlY2socHJvdG8pO1xuICB9O1xuXG4gIHJldHVybiBjaGVjayh0YXJnZXQpO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSByYW5kb20gc3RyaW5nXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5jcmVhdGVSYW5kb21TdHJpbmcgPSBmdW5jdGlvbihsZW5ndGggPSAxNiwgZm4gPSBudWxsKSB7XG4gIGxldCBzdHIgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgbGVuZ3RoICsgMik7XG4gIGxldCB2YWwgPSAnJztcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHN0ci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNjYpIHtcbiAgICAgIHZhbCArPSBzdHJbaV0udG9VcHBlckNhc2UoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YWwgKz0gc3RyW2ldO1xuICAgIH1cbiAgfVxuXG4gIGlmIChmbiAmJiBmbih2YWwpKSB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlUmFuZG9tU3RyaW5nKGxlbmd0aCwgZm4pO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHV0aWxzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcclxuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVybCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIG1hdGNoZXMgPSAnW3VybF0nO1xyXG5cclxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XHJcbiAgICBzdXBlciguLi5hcmdzKTtcclxuICAgIHRoaXMudXJsQXR0cmlidXRlID0gJ3NyYyc7XHJcbiAgfVxyXG5cclxuICBjb21waWxlZCgpIHtcclxuICAgIHRoaXMuYXR0cigndXJsJywgdGhpcy5zZXRVcmwpO1xyXG4gIH1cclxuXHJcbiAgc2V0VXJsKHVybCkge1xyXG4gICAgdGhpcy5hdHRyc1t0aGlzLnVybEF0dHJpYnV0ZV0gPSB1cmw7XHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdXJsLmpzIiwiaW1wb3J0IEFraWxpIGZyb20gJy4vYWtpbGkuanMnO1xuaW1wb3J0IFNjb3BlIGZyb20gJy4vc2NvcGUuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9zZXJ2aWNlcy9yZXF1ZXN0LmpzJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3NlcnZpY2VzL3N0b3JlLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcblxuZXhwb3J0IGNvbnN0IGV2YWx1YXRpb25SZWdleCA9IC9cXCR7KCgoPyFcXCR7KS4pKil9LztcbmV4cG9ydCBjb25zdCBldmFsdWF0aW9uUmVnZXhHbG9iYWwgPSBuZXcgUmVnRXhwKGV2YWx1YXRpb25SZWdleC5zb3VyY2UsIFwiZ1wiKTtcbmV4cG9ydCBjb25zdCBzeXN0ZW1BdHRyaWJ1dGVzID0gWydjb21wb25lbnQnLCAnc2NvcGUnXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gW107XG4gIHN0YXRpYyBldmVudHMgPSBbXTtcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gZmFsc2U7XG4gIHN0YXRpYyBzYXZlQXR0cmlidXRlUHJveHlJbiA9IGZhbHNlO1xuICBzdGF0aWMgc2F2ZUF0dHJpYnV0ZVByb3h5T3V0ID0gZmFsc2U7XG4gIHN0YXRpYyB0cmFuc3BhcmVudCA9IGZhbHNlO1xuICBzdGF0aWMgdGVtcGxhdGUgPSAnJztcbiAgc3RhdGljIHRlbXBsYXRlVXJsID0gJyc7XG4gIHN0YXRpYyBzY29wZSA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRvIGRlZmluZSB0aGUgY29tcG9uZW50XG4gICAqL1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnY29tcG9uZW50JywgQ29tcG9uZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSB0aGUgZXhwcmVzc2lvblxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwcmVzc2lvblxuICAgKiBAcGFyYW0ge29iamVjdH0gW2dsb2JhbHNdXG4gICAqL1xuICBzdGF0aWMgcGFyc2UoY29udGV4dCwgZXhwcmVzc2lvbiwgZ2xvYmFscyA9IHt9KSB7XG4gICAgZ2xvYmFscyA9IHsgdXRpbHMsIC4uLkFraWxpLm9wdGlvbnMuZ2xvYmFscywgLi4uZ2xvYmFsc307XG4gICAgY29uc3Qga2V5cyA9IFtdO1xuICAgIGNvbnN0IHZhcnMgPSBbXTtcbiAgICBjb25zdCBleHBzID0gW107XG4gICAgY29uc3Qgc3ltYm9scyA9IFsnXCInLCBcIidcIiwgJ2AnXTsgIFxuICAgIGNvbnN0IGFyciA9IGV4cHJlc3Npb24uc3BsaXQoJycpO1xuICAgIGxldCBvcGVuID0gJyc7ICBcbiAgICBsZXQgbGFzdCA9ICcnO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCB2YWwgPSBhcnJbaV07XG4gICAgICBsZXQgaW5kZXggPSBzeW1ib2xzLmluZGV4T2YodmFsKTsgICAgICBcblxuICAgICAgaWYoaW5kZXggPiAtMSAmJiAoIW9wZW4gfHwgb3BlbiA9PSB2YWwpKSB7XG4gICAgICAgICFvcGVuPyBvcGVuID0gc3ltYm9sc1tpbmRleF06IG9wZW4gPSAnJztcbiAgICAgIH1cblxuICAgICAgaWYodmFsID09ICc7JyAmJiAhb3Blbikge1xuICAgICAgICBsYXN0LnRyaW0oKSAmJiBleHBzLnB1c2gobGFzdCk7XG4gICAgICAgIGxhc3QgPSAnJztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGxhc3QgKz0gdmFsO1xuICAgIH1cblxuICAgIGxhc3QudHJpbSgpICYmIGV4cHMucHVzaChsYXN0KTtcbiAgICBleHBzW2V4cHMubGVuZ3RoIC0gMV0gPSBgcmV0dXJuICR7ZXhwc1tleHBzLmxlbmd0aCAtIDFdfWA7XG5cbiAgICBmb3IobGV0IGtleSBpbiBnbG9iYWxzKSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgIHZhcnMucHVzaChnbG9iYWxzW2tleV0pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRnVuY3Rpb24oLi4ua2V5cywgYCR7ZXhwcy5qb2luKCc7ICcpfWApLmFwcGx5KGNvbnRleHQsIHZhcnMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoZWwsIHNjb3BlID0ge30pIHtcbiAgICB0aGlzLl9faXNNb3VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2lzQ29tcGlsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX3ByZXZlbnQgPSBmYWxzZTtcbiAgICB0aGlzLl9fYmluZGluZ3MgPSB7fTtcbiAgICB0aGlzLl9fZXZhbHVhdGluZ0V2ZW50ID0gbnVsbDtcbiAgICB0aGlzLl9fcmVjb21waWxpbmcgPSBudWxsO1xuICAgIHRoaXMuX19jb21waWxpbmcgPSB7fTtcbiAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0ge307XG4gICAgdGhpcy5fX2Rpc2FibGVBdHRyVHJpZ2dlcmluZyA9IGZhbHNlO1xuICAgIHRoaXMuX19jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuX19wYXJlbnQgPSBudWxsO1xuICAgIHRoaXMuX19wYXJlbnRzID0gW107XG4gICAgdGhpcy5fX2F0dHJzID0ge307XG4gICAgdGhpcy5fX2F0dHJMaW5rcyA9IHt9O1xuICAgIHRoaXMuX19zdG9yZUxpbmtzID0ge307XG4gICAgdGhpcy5fX2F0dHJpYnV0ZU9mID0gbnVsbDtcbiAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudCA9IHRoaXM7XG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gdGhlIHJlY29tcGlsYXRpb25cbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZWNvbXBpbGUoKSB7XG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19pc0NvbXBpbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQuX19kaXNhYmxlUHJveHkgPSB7fTtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0ge307XG4gICAgdGhpcy5fX3JlY29tcGlsaW5nID0ge307XG4gICAgdGhpcy5fX3NldEV2ZW50cygpO1xuICAgIHRoaXMuX19zZXRQYXJlbnRzKCk7XG4gICAgdGhpcy5fX3NldEJvb2xlYW5BdHRyaWJ1dGVzKCk7XG4gICAgdGhpcy5fX2RlZmluZUF0dHJpYnV0ZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gdGhlIGNyZWF0aW9uXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlKCkge1xuICAgIHRoaXMuZWwuX19ha2lsaSA9IHRoaXM7XG4gICAgdGhpcy5fX2luaXRpYWxpemUoKTtcbiAgICB0aGlzLl9fc2V0RXZlbnRzKCk7XG4gICAgdGhpcy5fX3NldFBhcmVudHMoKTtcbiAgICB0aGlzLl9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKTtcbiAgICB0aGlzLl9fZGVmaW5lQXR0cmlidXRlcygpO1xuICAgIEFraWxpLmlzb2xhdGUoKCkgPT4gdGhpcy5jcmVhdGVkKHRoaXMuYXR0cnMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gdGhlIGNvbXBpbGF0aW9uXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBfX2NvbXBpbGUoKSB7XG4gICAgbGV0IGNvbnRyb2wgPSB0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMgfHwgIXRoaXMuX19ldmFsdWF0ZVBhcmVudDtcbiAgICBsZXQgcCA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIHRoaXMuX19hdHRyaWJ1dGVPZiA9IGNvbnRyb2w/IHRoaXM6IHRoaXMuX19ldmFsdWF0ZVBhcmVudC5fX2FraWxpO1xuXG4gICAgaWYgKCF0aGlzLl9fcmVjb21waWxpbmcgfHwgdGhpcy5fX2NvbXBpbGluZy5uZXdQYXJlbnQgfHwgdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzKSB7XG4gICAgICB0aGlzLl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKHRoaXMuZWwsIHRoaXMuX19hdHRyaWJ1dGVPZik7XG4gICAgfVxuXG4gICAgY29uc3QgaW50ZXJwb2xhdGUgPSAoY2hpbGRyZW4sIHBhcmVudCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlID09IDMpIHtcbiAgICAgICAgICB0aGlzLl9faW5pdGlhbGl6ZU5vZGUoY2hpbGQsIHBhcmVudCk7XG5cbiAgICAgICAgICBjaGlsZC5ub2RlVmFsdWUgPSB0aGlzLl9fZXZhbHVhdGUoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoaWxkLm5vZGVUeXBlID09IDEgJiYgIWNoaWxkLl9fYWtpbGkpIHtcbiAgICAgICAgICB0aGlzLl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKGNoaWxkKTtcbiAgICAgICAgICBpbnRlcnBvbGF0ZShjaGlsZC5jaGlsZE5vZGVzLCBjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaW50ZXJwb2xhdGUodGhpcy5lbC5jaGlsZE5vZGVzLCB0aGlzLmVsKTtcbiAgICB0aGlzLl9faXNNb3VudGVkID0gdHJ1ZTtcbiAgICBsZXQgcmVzO1xuXG4gICAgaWYgKCF0aGlzLl9fcmVjb21waWxpbmcpIHtcbiAgICAgIHJlcyA9IEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uQ29tcGlsZWQgJiYgdGhpcy5hdHRycy5vbkNvbXBpbGVkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5jb21waWxlZCgpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlVXJsKSB7XG4gICAgICAgIHAgPSByZXF1ZXN0LmdldCh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlVXJsKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMuX19jb250ZW50O1xuICAgICAgICAgIEFraWxpLnNldFRlbXBsYXRlKHRoaXMuZWwsIHJlcy5kYXRhKTtcbiAgICAgICAgICBkZWxldGUgdGhpcy5fX2NvbnRlbnQ7XG4gICAgICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uUmVjb21waWxlZCAmJiB0aGlzLmF0dHJzLm9uUmVjb21waWxlZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgICAgdGhpcy5yZWNvbXBpbGVkKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl9faXNDb21waWxlZCA9IHRydWU7XG4gICAgdGhpcy5fX3JlY29tcGlsaW5nID0gbnVsbDtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0gbnVsbDtcblxuICAgIHJldHVybiBwLnRoZW4oKCkgPT4gcmVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlIHRoZSBjb21wb25lbnRcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIF9fcmVzb2x2ZSgpIHtcbiAgICBpZiAodGhpcy5fX3JlY29tcGlsaW5nKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5hdHRycy5vblJlc29sdmVkICYmIHRoaXMuYXR0cnMub25SZXNvbHZlZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMucmVzb2x2ZWQoKSk7XG4gIH1cblxuICAvKipcbiAgICogUGFydCBvZiB0aGUge0BzZWUgQ29tcG9uZW50I19fY29tcGlsZX0gbWV0aG9kXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZSgpIHtcbiAgICBsZXQgcGFyZW50ID0gQWtpbGkuZ2V0QWtpbGlQYXJlbnRzKHRoaXMuZWwsIGZhbHNlKTtcbiAgICBsZXQgU2NvcGUgPSB0aGlzLmNvbnN0cnVjdG9yLnNjb3BlIHx8IEFraWxpLlNjb3BlO1xuICAgIGxldCBzY29wZTtcbiAgICBsZXQgaXNSb290ID0gQWtpbGkuX19yb290ID09PSB0aGlzLmVsO1xuXG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgc2NvcGUgPSBuZXcgU2NvcGUodGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3Njb3BlJykgfHwgQWtpbGkuY3JlYXRlU2NvcGVOYW1lKCksIHRoaXMuZWwsIHRoaXMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNjb3BlID0gbmV3IFNjb3BlKGlzUm9vdD8gJ3Jvb3QnOiBBa2lsaS5jcmVhdGVTY29wZU5hbWUoKSwgdGhpcy5lbCwgdGhpcyk7XG4gICAgICBpc1Jvb3QgJiYgKEFraWxpLnJvb3QgPSB0aGlzKTtcbiAgICB9XG5cbiAgICBsZXQgX19zY29wZSA9IHNjb3BlO1xuICAgIGxldCBfc2NvcGUgPSBPYmplY3QuYXNzaWduKHNjb3BlLCB0aGlzLnNjb3BlKTtcbiAgICBsZXQgY29udHJvbEF0dHJpYnV0ZXMgPSB0aGlzLmNvbnN0cnVjdG9yLmNvbnRyb2xBdHRyaWJ1dGVzO1xuICAgIGxldCBldmVudHMgPSB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50cztcblxuICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlKSB7XG4gICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCB0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkge1xuICAgICAgdGhpcy5fX2NvbnRlbnQgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gICAgdGhpcy5fX3Njb3BlID0gX19zY29wZTtcbiAgICB0aGlzLl9fZXZlbnRzID0gZXZlbnRzO1xuICAgIHRoaXMuX19jb250cm9sQXR0cmlidXRlcyA9IGNvbnRyb2xBdHRyaWJ1dGVzO1xuICAgIHRoaXMuX19zYXZlQXR0cmlidXRlUHJveHlJbiA9IHRoaXMuY29uc3RydWN0b3Iuc2F2ZUF0dHJpYnV0ZVByb3h5SW47XG4gICAgdGhpcy5fX3NhdmVBdHRyaWJ1dGVQcm94eU91dCA9IHRoaXMuY29uc3RydWN0b3Iuc2F2ZUF0dHJpYnV0ZVByb3h5T3V0O1xuXG4gICAgQWtpbGkuYWRkU2NvcGUoc2NvcGUpO1xuICAgIHRoaXMuc2NvcGUgPSB0aGlzLl9fbmVzdGVkT2JzZXJ2ZShfc2NvcGUsIFtdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYm9vbGVhbiBhdHRyaWJ1dGVzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKSB7XG4gICAgdGhpcy5ib29sZWFuQXR0cmlidXRlcyA9IFtdLmNvbmNhdChBa2lsaS5odG1sQm9vbGVhbkF0dHJpYnV0ZXMsIHRoaXMuY29uc3RydWN0b3IuYm9vbGVhbkF0dHJpYnV0ZXMpO1xuXG4gICAgY29uc3Qgc2V0QXR0ciA9IChlbCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGF0dHJzID0gZWwuYXR0cmlidXRlcywgbCA9IGF0dHJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgbm9kZSA9IGF0dHJzW2ldO1xuXG4gICAgICAgIGlmICh0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzLmluZGV4T2Yobm9kZS5ub2RlTmFtZSkgIT0gLTEpIHtcbiAgICAgICAgICBpZiAoZWwuaGFzQXR0cmlidXRlKGBib29sZWFuLSR7bm9kZS5ub2RlTmFtZX1gKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGBib29sZWFuLSR7bm9kZS5ub2RlTmFtZX1gLCBlbC5nZXRBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSkgfHwgbm9kZS5ub2RlTmFtZSk7XG4gICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKG5vZGUubm9kZU5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZWwuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGVsLmNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmICghY2hpbGQuX19ha2lsaSkge1xuICAgICAgICAgIHNldEF0dHIoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNldEF0dHIodGhpcy5lbCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGV2ZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldEV2ZW50cygpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuX19ldmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgZXYgPSB0aGlzLl9fZXZlbnRzW2ldO1xuICAgICAgIS9eb24tL2kudGVzdChldikgJiYgKGV2ID0gJ29uLScgKyBldik7XG5cbiAgICAgIGlmICghdGhpcy5lbC5oYXNBdHRyaWJ1dGUoZXYpKSB7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGV2LCAnJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjb21wb25lbnQgcGFyZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldFBhcmVudHMoKSB7XG4gICAgbGV0IHBhcmVudHMgPSBBa2lsaS5nZXRBa2lsaVBhcmVudHModGhpcy5lbCk7XG5cbiAgICBpZiAoIXBhcmVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IG5ld1BhcmVudCA9IHRoaXMuX19wYXJlbnQgIT09IHBhcmVudHNbMF07XG4gICAgbGV0IGV2YWx1YXRlUGFyZW50ID0gbnVsbDtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gcGFyZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBwYXJlbnQgPSBwYXJlbnRzW2ldO1xuXG4gICAgICBpZiAoIXBhcmVudC5fX2FraWxpLmNvbnN0cnVjdG9yLnRyYW5zcGFyZW50KSB7XG4gICAgICAgIGV2YWx1YXRlUGFyZW50ID0gcGFyZW50O1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX19jb21waWxpbmcubmV3UGFyZW50ID0gbmV3UGFyZW50O1xuICAgIG5ld1BhcmVudCAmJiB0aGlzLl9fZGV0YWNoKCk7XG5cbiAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50cmFuc3BhcmVudCkge1xuICAgICAgdGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQgPSBldmFsdWF0ZVBhcmVudC5fX2FraWxpO1xuICAgIH1cblxuICAgIHRoaXMuX19ldmFsdWF0ZVBhcmVudCA9IGV2YWx1YXRlUGFyZW50O1xuICAgIHRoaXMuX19wYXJlbnQgPSBwYXJlbnRzWzBdO1xuICAgIHRoaXMuX19wYXJlbnRzID0gcGFyZW50cztcbiAgICB0aGlzLnNjb3BlLl9fcGFyZW50ID0gdGhpcy5fX2V2YWx1YXRlUGFyZW50Ll9fYWtpbGkuc2NvcGU7XG4gICAgIXRoaXMuX19yZWNvbXBpbGluZyAmJiB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19hZGRDaGlsZCh0aGlzLmVsKTtcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcy5zY29wZSwgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fc2NvcGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBjaGlsZCBlbGVtZW50IHRvIHRoZSBsaXN0XG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYWRkQ2hpbGQoZWwpIHtcbiAgICB0aGlzLl9fY2hpbGRyZW4ucHVzaChlbCk7XG4gIH1cblxuICAvKipcbiAgICogU3BsaWNlIGNoaWxkIGZyb20gdGhlIGxpc3RcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zcGxpY2VDaGlsZChlbCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5fX2NoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5fX2NoaWxkcmVuW2ldO1xuXG4gICAgICBpZiAoY2hpbGQgPT09IGVsKSB7XG4gICAgICAgIHRoaXMuX19jaGlsZHJlbi5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGktLTtcbiAgICAgICAgbC0tO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBZb3UgY2FuIGNoYW5nZSBleHByZXNzaW9uIGJlZm9yZSBwYXJzaW5nIGhlcmVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4cHJlc3Npb25cbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0UGFyc2VkRXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgbm9kZSBoYXMgYW55IHByb3BlcnR5IGNoYW5nZXMgb3Igbm90XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jaGVja0V2YWx1YXRpb24obm9kZSkge1xuICAgIGlmICghT2JqZWN0LmtleXMobm9kZS5fX3Byb3BlcnRpZXMpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgayBpbiBub2RlLl9fcHJvcGVydGllcykge1xuICAgICAgaWYgKCFub2RlLl9fcHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IHByb3AgPSBub2RlLl9fcHJvcGVydGllc1trXTtcbiAgICAgIGxldCB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKHByb3Aua2V5cywgcHJvcC5jb21wb25lbnQuX19zY29wZSk7XG5cbiAgICAgIGlmICghdXRpbHMuY29tcGFyZVByZXZpb3VzVmFsdWUodmFsdWUsIHByb3AudmFsdWUsIHByb3AuY29weSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqICBDaGVjayBub2RlIGhhcyBjaGFuZ2VkIG9uIHRoZSBjZXJ0YWluIGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jaGVja05vZGVQcm9wZXJ0eUNoYW5naW5nKG5vZGUsIGtleXMsIHZhbHVlKSB7XG4gICAgbGV0IHByb3AgPSB0aGlzLl9fZ2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMpO1xuICAgIFxuICAgIGlmICghcHJvcCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuICF1dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSh2YWx1ZSwgcHJvcC52YWx1ZSwgcHJvcC5jb3B5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSBub2RlIGV4cHJlc3Npb25cbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlKG5vZGUpIHtcbiAgICBsZXQgY291bnRlciA9IDA7XG4gICAgbGV0IGF0dHJpYnV0ZVZhbHVlO1xuICAgIGxldCBleHByZXNzaW9uO1xuXG4gICAgaWYgKG5vZGUuX19jb21wb25lbnQucGFyZW50cygoY29tKSA9PiBjb20uX19wcmV2ZW50KS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBub2RlLl9fZXhwcmVzc2lvbjtcbiAgICB9XG5cbiAgICBpZiAoIShub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpICYmIG5vZGUuX19jb21wb25lbnQuX19wcmV2ZW50KSB7XG4gICAgICByZXR1cm4gbm9kZS5fX2V4cHJlc3Npb247XG4gICAgfVxuICAgIFxuICAgIGxldCByZXMgPSBub2RlLl9fZXhwcmVzc2lvbi5yZXBsYWNlKGV2YWx1YXRpb25SZWdleEdsb2JhbCwgKG0sIGQpID0+IHtcbiAgICAgIGNvdW50ZXIrKztcbiAgICAgIGxldCBldmFsdWF0ZTtcbiAgICAgIGxldCBldmFsdWF0aW9uID0gW107XG4gICAgICBsZXQgZXhpc3RpbmdCaW5kaW5ncyA9IHt9O1xuICAgICAgbGV0IHBhcnNlVmFsdWUgPSBub2RlLl9fY29tcG9uZW50Ll9fZ2V0UGFyc2VkRXhwcmVzc2lvbihkKTtcbiAgICAgIEFraWxpLl9fZXZhbHVhdGlvbiA9IHsgbm9kZTogbm9kZSwgbGlzdDogW10sIGNvbXBvbmVudDogbm9kZS5fX2NvbXBvbmVudCB9O1xuICAgICAgXG4gICAgICB0cnkge1xuICAgICAgICBldmFsdWF0ZSA9IHRoaXMuY29uc3RydWN0b3IucGFyc2UodGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQuc2NvcGUsIHBhcnNlVmFsdWUpO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG5cbiAgICAgIGlmKEFraWxpLl9fZXZhbHVhdGlvbikge1xuICAgICAgICBldmFsdWF0aW9uID0gQWtpbGkuX19ldmFsdWF0aW9uLmxpc3Q7XG4gICAgICAgIEFraWxpLl9fZXZhbHVhdGlvbi5saXN0ID0gbnVsbDtcbiAgICAgICAgQWtpbGkuX19ldmFsdWF0aW9uID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgZm9yIChsZXQgaSA9IGV2YWx1YXRpb24ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgbGV0IGRhdGEgPSBldmFsdWF0aW9uW2ldO1xuICAgICAgICBsZXQgaGFzaCA9IHRoaXMuX19jcmVhdGVLZXlzSGFzaChkYXRhLmtleXMpO1xuICAgICAgIFxuICAgICAgICBpZiAoZGF0YS5ub3RCaW5kaW5nKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXhpc3RpbmdCaW5kaW5nc1toYXNoXSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBhcmVudFZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoZGF0YS5wYXJlbnRzLCBkYXRhLmNvbXBvbmVudC5fX3Njb3BlKTtcbiAgICAgICAgbGV0IGV2YWxDb21wb25lbnQgPSBub2RlLl9fYXR0cmlidXRlT2YgfHwgbm9kZS5fX2NvbXBvbmVudDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHV0aWxzLmlzU2NvcGVQcm94eShwYXJlbnRWYWx1ZSkgJiYgXG4gICAgICAgICAgZGF0YS5jb21wb25lbnQgIT09IGV2YWxDb21wb25lbnQuX19ldmFsdWF0aW9uQ29tcG9uZW50ICYmIFxuICAgICAgICAgIGRhdGEuY29tcG9uZW50ID09PSBkYXRhLnJlYWxDb21wb25lbnRcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gICBcblxuICAgICAgICBsZXQgYmluZCA9IGRhdGEuY29tcG9uZW50Ll9fZ2V0Qm91bmROb2RlKGRhdGEua2V5cywgbm9kZSk7XG4gICAgICAgIGxldCB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGRhdGEua2V5cywgZGF0YS5jb21wb25lbnQuX19zY29wZSk7XG5cbiAgICAgICAgaWYgKCFiaW5kKSB7XG4gICAgICAgICAgZGF0YS5jb21wb25lbnQuX19iaW5kKGRhdGEua2V5cywgeyBub2RlOiBub2RlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YS5jb21wb25lbnQuX19zZXROb2RlUHJvcGVydHkobm9kZSwgZGF0YS5rZXlzLCB2YWx1ZSwgZGF0YS5ldmFsdWF0ZWQpO1xuICAgICAgICBleGlzdGluZ0JpbmRpbmdzW2hhc2hdID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgZXhpc3RpbmdCaW5kaW5ncyA9IG51bGw7XG4gICAgICBldmFsdWF0aW9uID0gbnVsbDtcblxuICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cikge1xuICAgICAgICBleHByZXNzaW9uID0gbTtcbiAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBldmFsdWF0ZTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZShldmFsdWF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZXZhbHVhdGUgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZXZhbHVhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGUpIHtcbiAgICAgICAgICByZXR1cm4gZXZhbHVhdGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGV2YWx1YXRlO1xuICAgIH0pO1xuXG4gICAgaWYgKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cikge1xuICAgICAgbGV0IHZhbHVlID0gcmVzO1xuICAgICAgbGV0IGlzQm9vbGVhbkF0dHJpYnV0ZSA9IGZhbHNlO1xuXG4gICAgICBpZiAoY291bnRlcikge1xuICAgICAgICBub2RlLl9faGFzQmluZGluZ3MgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoY291bnRlciA9PSAxICYmIGV4cHJlc3Npb24gJiYgbm9kZS5fX2V4cHJlc3Npb24gPT0gZXhwcmVzc2lvbikge1xuICAgICAgICB2YWx1ZSA9IGF0dHJpYnV0ZVZhbHVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgY2xlYXJBdHRyaWJ1dGUgPSBub2RlLm5vZGVOYW1lLnJlcGxhY2UoL15ib29sZWFuLSguKykvaSwgJyQxJyk7XG4gICAgICBsZXQgY2FtZWxBdHRyaWJ1dGUgPSB1dGlscy50b0NhbWVsQ2FzZShjbGVhckF0dHJpYnV0ZSk7XG5cbiAgICAgIGlmIChjbGVhckF0dHJpYnV0ZSAhPSBub2RlLm5vZGVOYW1lKSB7XG4gICAgICAgIGlzQm9vbGVhbkF0dHJpYnV0ZSA9IHRydWU7XG4gICAgICAgIHZhbHVlID0gISF2YWx1ZTtcbiAgICAgIH0gICAgICAgICAgXG5cbiAgICAgIGlmIChub2RlLl9fYXR0cmlidXRlT24pIHsgICAgICAgIFxuICAgICAgICBsZXQgY29tcG9uZW50ID0gbm9kZS5fX2F0dHJpYnV0ZU9uO1xuICAgICAgICAhY29tcG9uZW50Ll9fc2F2ZUF0dHJpYnV0ZVByb3h5SW4gJiYgKHZhbHVlID0gdXRpbHMuY29weSh2YWx1ZSkpO1xuICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gdHJ1ZTtcbiAgICAgICAgY29tcG9uZW50LmF0dHJzW2NhbWVsQXR0cmlidXRlXSA9IHZhbHVlO1xuICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudC5fX2lzQ29tcGlsZWQpIHtcbiAgICAgICAgICBjb21wb25lbnQuX19hdHRyVHJpZ2dlckJ5TmFtZShjYW1lbEF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpc0Jvb2xlYW5BdHRyaWJ1dGUpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBub2RlLl9fZWxlbWVudDtcbiAgICAgICAgdmFsdWU/IGVsZW1lbnQuc2V0QXR0cmlidXRlKGNhbWVsQXR0cmlidXRlLCAndHJ1ZScpOiBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShjYW1lbEF0dHJpYnV0ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBOZXN0ZWQgZXZhbHVhdGlvbiBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtib29sZWFufSBbd2l0aG91dFBhcmVudHM9ZmFsc2VdIC0gaWYgdHJ1ZSBldmFsdWF0aW9uIHdpbGwgYmUgb25seSBmb3IgdGhlIGN1cnJlbnQga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlTmVzdGVkKGtleXMsIHdpdGhvdXRQYXJlbnRzID0gZmFsc2UpIHtcbiAgICBsZXQgc2NvcGUgPSB0aGlzLl9fc2NvcGU7XG4gICAgbGV0IHByb3BzID0gW107ICAgIFxuICAgIFxuICAgIGlmICghd2l0aG91dFBhcmVudHMpIHtcbiAgICAgIGxldCBsYXN0UHJvcHMgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgbGV0IHZhbHVlO1xuXG4gICAgICAgIGxhc3RQcm9wcyA9IFsuLi5sYXN0UHJvcHMsIGtleV07XG4gICAgICAgIHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMobGFzdFByb3BzLCBzY29wZSk7XG4gICAgICAgIHByb3BzLnB1c2goeyBrZXlzOiBsYXN0UHJvcHMsIHZhbHVlOiB2YWx1ZX0pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHByb3BzLnB1c2goeyBrZXlzOiBrZXlzLCB2YWx1ZTogdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgc2NvcGUpfSk7XG4gICAgfVxuXG4gICAgbGV0IHByb3BzTGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gICAgY29uc3QgZWxFdmFsdWF0ZSA9IChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBjb21wb25lbnQgPSBlbGVtZW50Ll9fYWtpbGk7ICAgICBcblxuICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCBwcm9wc0xlbmd0aDsgbSsrKSB7XG4gICAgICAgIGxldCBwcm9wID0gcHJvcHNbbV07XG4gICAgICAgIGxldCBkYXRhID0gY29tcG9uZW50Ll9fZ2V0QmluZChwcm9wLmtleXMpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhLl9fZGF0YSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgayA9IDAsIGMgPSBkYXRhLl9fZGF0YS5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgICAgICBsZXQgYmluZCA9IGRhdGEuX19kYXRhW2tdOyBcbiBcbiAgICAgICAgICBpZiAoY29tcG9uZW50Ll9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2luZyhiaW5kLm5vZGUsIHByb3Aua2V5cywgcHJvcC52YWx1ZSkpIHsgICAgIFxuICAgICAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZUtleXMocHJvcC5rZXlzKTtcbiAgICAgICAgICAgIGxldCBjaGVja1Byb3AgPSBjb21wb25lbnQuX19nZXROb2RlUHJvcGVydHkoYmluZC5ub2RlLCBwcm9wLmtleXMpOyAgICAgICAgICAgIFxuICAgICAgICAgICAgY2hlY2tQcm9wICYmIGNoZWNrUHJvcC5ldmFsdWF0ZWQgJiYgY29tcG9uZW50LnNjb3BlLl9fc2V0KHByb3Aua2V5cywgcHJvcC52YWx1ZSwgZmFsc2UsIHRydWUpOyAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBjb21wb25lbnQuX19ldmFsdWF0ZU5vZGUoYmluZC5ub2RlLCBmYWxzZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IF9rIGluIGJpbmQubm9kZS5fX3Byb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgaWYgKCFiaW5kLm5vZGUuX19wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KF9rKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBsZXQgX3Byb3AgPSBiaW5kLm5vZGUuX19wcm9wZXJ0aWVzW19rXTtcbiAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoX3Byb3Aua2V5cywgX3Byb3AuY29tcG9uZW50Ll9fc2NvcGUpO1xuICAgICAgICAgICAgICBfcHJvcC5jb21wb25lbnQuX19zZXROb2RlUHJvcGVydHkoYmluZC5ub2RlLCBfcHJvcC5rZXlzLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2VuYWJsZUtleXMocHJvcC5rZXlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9O1xuXG4gICAgY29uc3QgZXZhbHVhdGUgPSAoZWxlbWVudHMpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBlbEV2YWx1YXRlKGVsZW1lbnRzW2ldKTtcbiAgICAgICAgZXZhbHVhdGUoY29tcG9uZW50Ll9fY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBlbEV2YWx1YXRlKHRoaXMuZWwpO1xuICAgIGV2YWx1YXRlKHRoaXMuX19jaGlsZHJlbik7XG4gIH0gIFxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSB2YWx1ZSBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlbGV0ZWQ9ZmFsc2VdIC0gdHJ1ZSBpZiB2YWx1ZSBpcyBkZWxldGluZ1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlQnlLZXlzKGtleXMsIHZhbHVlLCBpc0RlbGV0ZWQgPSBmYWxzZSkgeyAgICAgXG4gICAgbGV0IGRhdGEgPSB0aGlzLl9fZ2V0QmluZChrZXlzKTtcblxuICAgIGNvbnN0IHVuYmluZCA9IChvYmosIHBhcmVudHMpID0+IHtcbiAgICAgIGZvciAobGV0IGsgaW4gb2JqKSB7XG4gICAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGspIHx8IHRoaXMuX19pc1N5c3RlbUJpbmRpbmdLZXkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBfa2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba10pO1xuICAgICAgICBsZXQgX19rZXlzID0gX2tleXMuc2xpY2UoKTtcbiAgICAgICAgbGV0IF9pc0RlbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IHZhbCA9IG9ialtrXTtcbiAgICAgICAgbGV0IGhhc0tleTtcbiAgICAgICAgXG4gICAgICAgIF9fa2V5cy5zaGlmdCgpO1xuICAgICAgICBoYXNLZXkgPSB1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhfX2tleXMsIHZhbHVlKTtcblxuICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnICYmICFoYXNLZXkpIHtcbiAgICAgICAgICBfaXNEZWxldGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWwgJiYgdHlwZW9mIHZhbCA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHVuYmluZCh2YWwsIF9rZXlzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5fX2V2YWx1YXRlTmVzdGVkKF9rZXlzLCB0cnVlKTtcblxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8ICFoYXNLZXkpIHtcbiAgICAgICAgICB0aGlzLl9fdW5iaW5kKF9rZXlzKTtcbiAgICAgICAgICBfaXNEZWxldGVkICYmIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKF9fa2V5cywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICBkYXRhICYmIHVuYmluZChkYXRhLCBbXS5jb25jYXQoa2V5cykpO1xuICAgIHRoaXMuX19ldmFsdWF0ZU5lc3RlZChrZXlzKTtcblxuICAgIGlmIChpc0RlbGV0ZWQpIHtcbiAgICAgIHRoaXMuX191bmJpbmQoa2V5cyk7XG4gICAgICBpc0RlbGV0ZWQgJiYgdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgZXZlbnQgZXhwcmVzc2lvblxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlRXZlbnQobm9kZSwgZWwsIGUpIHtcbiAgICBsZXQgZXhwcmVzc2lvbiA9IGV2YWx1YXRpb25SZWdleC5leGVjKG5vZGUuX19leHByZXNzaW9uKTtcbiAgICBsZXQgZXZhbHVhdGU7XG5cbiAgICBpZiAoIWV4cHJlc3Npb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9fZXZhbHVhdGluZ0V2ZW50ID0ge1xuICAgICAgZWw6IGVsLFxuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgZXZlbnQ6IGUsXG4gICAgICBub2RlOiBub2RlXG4gICAgfTtcblxuICAgIHRoaXMuX19kaXNhYmxlUHJveHkgPSB7fTtcbiAgICBldmFsdWF0ZSA9IHRoaXMuY29uc3RydWN0b3IucGFyc2UodGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQuc2NvcGUsIGV4cHJlc3Npb25bMV0sIHsgZXZlbnQ6IGUgfSk7XG4gICAgdGhpcy5fX2V2YWx1YXRpbmdFdmVudCA9IG51bGw7XG5cbiAgICByZXR1cm4gZXZhbHVhdGU7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgY2hhbmdlcyBhbmQgZXZhbHVhdGUgdGhlIHBhc3NlZCBub2RlXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtjaGVja11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZU5vZGUobm9kZSwgY2hlY2sgPSB0cnVlKSB7XG4gICAgaWYgKGNoZWNrPyB0aGlzLl9fY2hlY2tFdmFsdWF0aW9uKG5vZGUpOiB0cnVlKSB7ICAgICAgXG4gICAgICBsZXQga2V5ID0gbm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyPyAndmFsdWUnOiAnbm9kZVZhbHVlJztcbiAgICAgIGxldCByZXMgPSB0aGlzLl9fZXZhbHVhdGUobm9kZSk7ICAgICBcbiAgICAgIG5vZGVba2V5XSAhPSByZXMgJiYgKG5vZGVba2V5XSA9IHJlcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEF0dHJpYnV0ZSBub2RlIGluaXRpYWxpemluZ1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtDb21wb25lbnR9IGF0dHJpYnV0ZU9mIC0gaWYgbm9kZSBpcyBsaW5rZWQgd2l0aCBwYXJlbnQgc2NvcGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbml0aWFsaXplQXR0cmlidXRlKG5vZGUsIGVsLCBhdHRyaWJ1dGVPZikge1xuICAgIGlmIChzeXN0ZW1BdHRyaWJ1dGVzLmluZGV4T2Yobm9kZS5ub2RlTmFtZSkgIT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9faW5pdGlhbGl6ZU5vZGUobm9kZSwgZWwpO1xuICAgIGxldCBldmVudE5hbWUgPSBub2RlLm5vZGVOYW1lLnJlcGxhY2UoL15vbi0oLispL2ksICckMScpO1xuICAgIGxldCBub2RlTmFtZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKG5vZGUubm9kZU5hbWUpO1xuICAgIGxldCBjb21wb25lbnQgPSBhdHRyaWJ1dGVPZj8gYXR0cmlidXRlT2Y6IHRoaXM7XG5cbiAgICBpZiAoZXZlbnROYW1lICE9IG5vZGUubm9kZU5hbWUpIHtcbiAgICAgIGlmIChub2RlLl9fZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgZW1pdHRlciA9IG5ldyBBa2lsaS5FdmVudEVtaXR0ZXIoZXZlbnROYW1lLCBlbCwgY29tcG9uZW50KTtcblxuICAgICAgaWYgKG5vZGUuX19leHByZXNzaW9uKSB7XG4gICAgICAgIGVtaXR0ZXIuYmluZCgoZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBjb21wb25lbnQuX19ldmFsdWF0ZUV2ZW50KG5vZGUsIGVsLCBlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIG5vZGUuX19ldmVudCA9IGVtaXR0ZXI7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKGVtaXR0ZXIpKTtcblxuICAgICAgaWYgKGF0dHJpYnV0ZU9mKSB7XG4gICAgICAgIHRoaXMuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hdHRyc1tub2RlTmFtZV0gPSBlbWl0dGVyO1xuICAgICAgICB0aGlzLl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGF0dHJpYnV0ZU9mKSB7XG4gICAgICBub2RlLl9fYXR0cmlidXRlT24gPSB0aGlzO1xuICAgICAgbm9kZS5fX2F0dHJpYnV0ZU9mID0gY29tcG9uZW50O1xuICAgIH1cblxuICAgIGVsLnNldEF0dHJpYnV0ZShub2RlLm5vZGVOYW1lLCBjb21wb25lbnQuX19ldmFsdWF0ZShub2RlKSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgbm9kZVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZU5vZGUobm9kZSwgZWwpIHtcbiAgICBpZiAobm9kZS5fX2luaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbm9kZS5fX2V4cHJlc3Npb24gPSBub2RlWyhub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpPyAndmFsdWUnOiAnbm9kZVZhbHVlJ107XG4gICAgbm9kZS5fX3Byb3BlcnRpZXMgPSB7fTtcbiAgICBub2RlLl9fYXR0cmlidXRlT2YgPSBudWxsO1xuICAgIG5vZGUuX19hdHRyaWJ1dGVPbiA9IG51bGw7XG4gICAgbm9kZS5fX2V2ZW50ID0gbnVsbDtcbiAgICBub2RlLl9faGFzQmluZGluZ3MgPSBmYWxzZTtcbiAgICBub2RlLl9faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIG5vZGUuX19jb21wb25lbnQgPSB0aGlzO1xuICAgIG5vZGUuX19lbGVtZW50ID0gZWw7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcnBvbGF0ZSBhdHRyaWJ1dGVzIG9mIHRoZSBlbGVtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBbYXR0cmlidXRlT2Y9bnVsbF0gLSBpZiBub2RlIGlzIGxpbmtlZCB3aXRoIHBhcmVudCBzY29wZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2ludGVycG9sYXRlQXR0cmlidXRlcyhlbCwgYXR0cmlidXRlT2YgPSBudWxsKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGF0dHJzID0gZWwuYXR0cmlidXRlcywgbCA9IGF0dHJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdGhpcy5fX2luaXRpYWxpemVBdHRyaWJ1dGUoYXR0cnNbaV0sIGVsLCBhdHRyaWJ1dGVPZik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZSBhdHRyaWJ1dGVzIGFzIHByb3h5XG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVmaW5lQXR0cmlidXRlcygpIHtcbiAgICBjb25zdCBjaGFuZ2VBdHRyaWJ1dGUgPSAoa2V5LCB2YWx1ZSwgaXNEZWxldGVkID0gZmFsc2UpID0+IHtcbiAgICAgIGlmICh0aGlzLl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBub2RlID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGVOb2RlKGtleSk7XG5cbiAgICAgIGlmIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLl9fZXZlbnQpIHtcbiAgICAgICAgICBub2RlLl9fZXZlbnQudW5iaW5kKCk7XG4gICAgICAgICAgbm9kZS5fX2V2ZW50ID0gbnVsbDtcbiAgICAgICAgICBub2RlLl9fZXhwcmVzc2lvbiA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUuX19oYXNCaW5kaW5ncykge1xuICAgICAgICAgIHRoaXMuX19wYXJlbnQgJiYgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5fX3VuYmluZEJ5Tm9kZXMoW25vZGVdKTtcbiAgICAgICAgICBub2RlLl9faGFzQmluZGluZ3MgPSBmYWxzZTtcbiAgICAgICAgICBub2RlLl9fZXhwcmVzc2lvbiA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0RlbGV0ZWQpIHtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG5vZGUpIHtcbiAgICAgICAgbm9kZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmF0dHJzID0gbmV3IFByb3h5KHRoaXMuX19hdHRycywge1xuICAgICAgZ2V0OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgaWYgKGtleSA9PSAnX19pc1Byb3h5Jykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgfSxcbiAgICAgIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgYXR0cktleSA9IHV0aWxzLnRvRGFzaENhc2Uoa2V5KTtcblxuICAgICAgICBpZiAodGhpcy5ib29sZWFuQXR0cmlidXRlcy5pbmRleE9mKGF0dHJLZXkpICE9IC0xKSB7XG4gICAgICAgICAgYXR0cktleSA9IGBib29sZWFuLSR7YXR0cktleX1gO1xuXG4gICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgIGNoYW5nZUF0dHJpYnV0ZShhdHRyS2V5LCB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUodmFsdWUpKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgICAgZGVsZXRlUHJvcGVydHk6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IGF0dHJLZXkgPSB1dGlscy50b0Rhc2hDYXNlKGtleSk7XG4gICAgICAgIGNoYW5nZUF0dHJpYnV0ZShhdHRyS2V5LCB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUodmFsdWUpLCB0cnVlKTtcbiAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgcHJveHkgdG8gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcmV0dXJucyB7UHJveHl9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fb2JzZXJ2ZShvYmosIHBhcmVudHMpIHtcbiAgICByZXR1cm4gbmV3IFByb3h5KG9iaiwge1xuICAgICAgZ2V0OiAodGFyZ2V0LCBrZXkpID0+IHsgXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX2lzUHJveHlcIikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PSBcIl9fdGFyZ2V0XCIpIHtcbiAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PSBcIl9fY29tcG9uZW50XCIpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX2tleXNcIikge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5fX2lzU3lzdGVtS2V5KGtleSkpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRhcmdldFtrZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgbGV0IHJlYWxUYXJnZXQgID0gdXRpbHMuZ2V0T3duUHJvcGVydHlUYXJnZXQodGFyZ2V0LCBrZXkpO1xuXG4gICAgICAgICAgaWYgKCF1dGlscy5pc1BsYWluT2JqZWN0KHJlYWxUYXJnZXQpKSB7XG4gICAgICAgICAgICByZWFsVGFyZ2V0W2tleV0gPSBBa2lsaS5pc29sYXRlRnVuY3Rpb24ocmVhbFRhcmdldFtrZXldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQWtpbGkuX19ldmFsdWF0aW9uKSB7ICBcbiAgICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG4gICAgICAgICAgbGV0IG5vdEJpbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBsZXQgZXZhbHVhdGVkID0gIXV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19zY29wZSk7IFxuICAgICAgICAgIGxldCBjb21wb25lbnQgPSB0aGlzO1xuICAgICAgICAgIGxldCBleGNsdWRlZCA9IGZhbHNlO1xuICAgICAgICAgIGxldCBleGNBcnIgPSBrZXlzLnNsaWNlKCk7XG5cbiAgICAgICAgICBpZih0YXJnZXQgaW5zdGFuY2VvZiBTY29wZSkge1xuICAgICAgICAgICAgbGV0IHJlYWxUYXJnZXQgPSB1dGlscy5nZXRPd25Qcm9wZXJ0eVRhcmdldCh0YXJnZXQsIGtleSk7XG4gICAgICAgICAgICByZWFsVGFyZ2V0ICYmIChyZWFsVGFyZ2V0IGluc3RhbmNlb2YgU2NvcGUpICYmIChjb21wb25lbnQgPSAgcmVhbFRhcmdldC5fX2NvbXBvbmVudCk7XG4gICAgICAgICAgfSBcblxuICAgICAgICAgIGNvbnN0IGZvclBhcmVudHMgPSBBa2lsaS5fX2V2YWx1YXRpb24uY29tcG9uZW50LnBhcmVudHMoYyA9PiBjIGluc3RhbmNlb2YgQWtpbGkuY29tcG9uZW50cy5Gb3IpO1xuXG4gICAgICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGZvclBhcmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IobGV0IGsgPSAwLCBjID0ga2V5cy5sZW5ndGg7IGsgPCBjOyBrKyspIHsgXG4gICAgICAgICAgICAgIGNvbnN0IGZvckRhdGEgPSBmb3JQYXJlbnRzW2ldLmRhdGE7XG4gICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhleGNBcnIsIGNvbXBvbmVudC5fX3Njb3BlKTtcblxuICAgICAgICAgICAgICBpZihkYXRhICYmIHR5cGVvZiBkYXRhID09ICdvYmplY3QnICYmIGZvckRhdGEgPT09IGRhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICAgIGV4Y0Fyci5wb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9ICBcblxuICAgICAgICAgIGlmICghKGtleSBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9ICAgICAgICAgIFxuICAgICAgICAgIGVsc2UgaWYgKCF1dGlscy5nZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQodGFyZ2V0LCBrZXkpKSB7XG4gICAgICAgICAgICBub3RCaW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9fYmluZE5vZGUoQWtpbGkuX19ldmFsdWF0aW9uLmxpc3QsIGNvbXBvbmVudCwga2V5cywgcGFyZW50cywgdGFyZ2V0W2tleV0sIG5vdEJpbmRpbmcsIGV2YWx1YXRlZCk7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgfSxcbiAgICAgIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4geyBcbiAgICAgICAgaWYgKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrZXldKTtcblxuICAgICAgICBpZiAodGhpcy5fX2NoZWNrRGlzYWJsZW1lbnQoa2V5cykpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcblxuICAgICAgICBDSEVDS19FWElTVEVOQ0U6IGlmKHBhcmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxldCB0YXJnZXRQYXJlbnRWYWx1ZSA9IHBhcmVudHMubGVuZ3RoID4gMT8gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMocGFyZW50cy5zbGljZSgwLCAtMSksIHRoaXMuX19zY29wZSk6IHRoaXMuX19zY29wZTtcbiAgICAgICAgICBcbiAgICAgICAgICBmb3IobGV0IGsgaW4gdGFyZ2V0UGFyZW50VmFsdWUpIHtcbiAgICAgICAgICAgIGlmKCF0YXJnZXRQYXJlbnRWYWx1ZS5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodGFyZ2V0UGFyZW50VmFsdWVba10gJiYgdGFyZ2V0UGFyZW50VmFsdWVba10uX190YXJnZXQgPT09IHRhcmdldCkge1xuICAgICAgICAgICAgICBicmVhayBDSEVDS19FWElTVEVOQ0U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXSkge1xuICAgICAgICAgIHRoaXMuX19zdG9yZVRyaWdnZXJCeUtleXMoa2V5cywgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddKSB7XG4gICAgICAgICAgdGhpcy5fX2F0dHJUcmlnZ2VyQnlLZXlzKGtleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldFtrZXldID0gdGhpcy5fX25lc3RlZE9ic2VydmUodmFsdWUsIGtleXMpO1xuICAgICAgICBcbiAgICAgICAgaWYgKEFraWxpLl9faXNvbGF0aW9uKSB7IFxuICAgICAgICAgIHRoaXMuX19jcmVhdGVJc29sYXRpb25PYmplY3QocGFyZW50cywga2V5LCBmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLl9faXNNb3VudGVkKSB7ICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgIHRoaXMuX19ldmFsdWF0ZUJ5S2V5cyhrZXlzLCB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBkZWxldGVQcm9wZXJ0eTogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrZXldKTtcblxuICAgICAgICBpZiAodGhpcy5fX2NoZWNrRGlzYWJsZW1lbnQoa2V5cykpIHtcbiAgICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fX2lzU3lzdGVtS2V5KGtleSkpIHtcbiAgICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChBa2lsaS5fX2lzb2xhdGlvbikge1xuICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgICB0aGlzLl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0KHBhcmVudHMsIGtleSwgdHJ1ZSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgdGhpcy5fX2V2YWx1YXRlQnlLZXlzKGtleXMsIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBoYXNoIGZvciB0aGUga2V5c1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHJldHVybnMge3N0cmluZ30gICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlS2V5c0hhc2goa2V5cykge1xuICAgIHJldHVybiBgJHt0aGlzLl9fc2NvcGUuX19uYW1lfS4ke0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGUgdGhlIGtleXMgc2V0dGVyXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzICAgIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2Rpc2FibGVLZXlzKGtleXMpIHtcbiAgICB0aGlzLl9fZGlzYWJsZVByb3h5W2tleXM/IHRoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKTogJ19fYWxsJ10gPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSB0aGUga2V5cyBzZXR0ZXJcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZW5hYmxlS2V5cyhrZXlzKSB7XG4gICAgZGVsZXRlIHRoaXMuX19kaXNhYmxlUHJveHlba2V5cz8gdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpOiAnX19hbGwnXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUga2V5cyBzZXR0ZXIgZGlzYWJsZW1hbnRcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2hlY2tEaXNhYmxlbWVudChrZXlzKSB7XG4gICAgcmV0dXJuIHRoaXMuX19kaXNhYmxlUHJveHkuX19hbGw/IHRydWU6IHRoaXMuX19kaXNhYmxlUHJveHlbdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlIHRoZSB2YWx1ZSB0byB0aGUgc3RvcmUgYnkgdGhlIGtleXNcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc3RvcmVUcmlnZ2VyQnlLZXlzKGtleXMsIHZhbHVlKSB7XG4gICAgY29uc3QgbGlua3MgPSB0aGlzLl9fc3RvcmVMaW5rc1tBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyldO1xuICAgIFxuICAgIGlmKCFsaW5rcyB8fCAhbGlua3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFsdWUgPSB1dGlscy5jb3B5KHZhbHVlKTtcbiAgICB0aGlzLl9fZGlzYWJsZUtleXMoa2V5cyk7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gbGlua3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBsaW5rID0gbGlua3NbaV07XG4gICAgICBcbiAgICAgIHRoaXMuX19zdG9yZVRyaWdnZXJCeU5hbWUobGluay5uYW1lLCB2YWx1ZSk7XG4gICAgICBcbiAgICB9XG4gICAgXG4gICAgdGhpcy5fX2VuYWJsZUtleXMoa2V5cyk7XG4gIH1cblxuICAvKipcbiAgICogU2F2ZSB0aGUgdmFsdWUgdG8gdGhlIHN0b3JlIGJ5IHRoZSBuYW1lXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zdG9yZVRyaWdnZXJCeU5hbWUobmFtZSwgdmFsdWUpIHsgIFxuICAgIHN0b3JlLl9fdGFyZ2V0W25hbWVdID0gdmFsdWU7XG4gICAgY29uc3QgbGlua3MgPSBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV07XG5cbiAgICBpZighbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBmb3IobGV0IGkgPSAwLCBsID0gbGlua3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBsaW5rID0gbGlua3NbaV07XG4gICAgICBjb25zdCBjb21wb25lbnQgPSBsaW5rLmNvbXBvbmVudDtcblxuICAgICAgaWYoY29tcG9uZW50ID09PSB0aGlzKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZihsaW5rLmZuKSB7XG4gICAgICAgIEFraWxpLnVuaXNvbGF0ZWQoKCkgPT4gbGluay5mbi5jYWxsKGNvbXBvbmVudCwgdmFsdWUpKVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgY29tcG9uZW50LnNjb3BlLl9fc2V0KGxpbmsua2V5cywgdmFsdWUpOyAgICAgIFxuICAgIH0gICAgIFxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHN0b3JlIGxpbmsgd2l0aCB0aGUgc2NvcGUgcHJvcGVydHlcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3N0b3JlQnlLZXlzKG5hbWUsIGtleXMpIHtcbiAgICBpZigha2V5cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBTdG9yZSBsaW5rIFwiJHtuYW1lfVwiIG11c3QgaGF2ZSB0aGUgc2NvcGUgcHJvcGVydHkgbmFtZWApO1xuICAgIH1cblxuICAgIGlmKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cblxuICAgIHRoaXMuc2NvcGUuX19zZXQoa2V5cywgc3RvcmVbbmFtZV0pO1xuICAgIGxldCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG4gICAgbGV0IGluZm87XG5cbiAgICBpZighdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXSkge1xuICAgICAgdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXSA9IFtdO1xuICAgIH1cblxuICAgIGxldCBhcnIgPSB0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddO1xuICAgIFxuICAgIGZvcihsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGFycltpXTtcblxuICAgICAgaWYocmVzLmNvbXBvbmVudCA9PT0gdGhpcyAmJiByZXMubmFtZSA9PSBuYW1lICYmIHJlcy5rZXlTdHJpbmcgPT0ga2V5U3RyaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZighQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdKSB7XG4gICAgICBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBpbmZvID0geyBjb21wb25lbnQ6IHRoaXMsIG5hbWUsIGtleXMsIGtleVN0cmluZyB9O1xuICAgIHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ10ucHVzaChpbmZvKTtcbiAgICBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0ucHVzaChpbmZvKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBzdG9yZSBsaW5rIHdpdGggdGhlIGZ1bmN0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gICBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgX19zdG9yZUJ5RnVuY3Rpb24obmFtZSwgZm4sIG9wdGlvbnMgPSB7fSkgeyBcbiAgICBsZXQgY2FsbCA9IG9wdGlvbnMuY2FsbE9uU3RhcnQgPT09IHVuZGVmaW5lZD8gc3RvcmUuX190YXJnZXQuaGFzT3duUHJvcGVydHkobmFtZSk6IG9wdGlvbnMuY2FsbE9uU3RhcnQ7XG5cbiAgICBpZighQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdKSB7XG4gICAgICBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV07XG4gICAgXG4gICAgZm9yKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYocmVzLmNvbXBvbmVudCA9PT0gdGhpcyAmJiByZXMubmFtZSA9PSBuYW1lICYmIHJlcy5mbiA9PT0gZm4pIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdLnB1c2goeyBjb21wb25lbnQ6IHRoaXMsIG5hbWUsIGZuIH0pO1xuXG4gICAgaWYoY2FsbCkge1xuICAgICAgcmV0dXJuIEFraWxpLnVuaXNvbGF0ZWQoKCkgPT4gZm4uY2FsbCh0aGlzLCBzdG9yZVtuYW1lXSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHN0b3JlIGxpbmsgd2l0aCB0aGUgc2NvcGUgcHJvcGVydHlcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5zdG9yZUJ5S2V5cyhuYW1lLCBrZXlzKSB7XG4gICAgaWYoIWtleXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IGhhdmUgdG8gcGFzcyB0aGUgc2NvcGUgcHJvcGVydHkgbmFtZSBmb3Igc3RvcmUgbGluayBcIiR7bmFtZX1cImApO1xuICAgIH1cblxuICAgIGlmKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cblxuICAgIGxldCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG4gICAgbGV0IGFyciA9IHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ107XG5cbiAgICBpZighYXJyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBmb3IobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBhcnJbaV07XG4gICAgICBsZXQgbGlua3MgPSBBa2lsaS5fX3N0b3JlTGlua3NbcmVzLm5hbWVdO1xuXG4gICAgICBpZihyZXMuY29tcG9uZW50ICE9PSB0aGlzIHx8IHJlcy5uYW1lICE9IG5hbWUgfHwgcmVzLmtleVN0cmluZyAhPSBrZXlTdHJpbmcpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGFyci5zcGxpY2UoaSwgMSk7XG5cbiAgICAgIGlmKCFsaW5rcyB8fCAhbGlua3MubGVuZ3RoKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBmb3IobGV0IGsgPSBsaW5rcy5sZW5ndGggLSAxOyBrID49IDA7IGstLSkge1xuICAgICAgICBsZXQgbGluayA9IGxpbmtzW2tdO1xuXG4gICAgICAgIGlmKGxpbmsuY29tcG9uZW50ID09PSB0aGlzICYmIGxpbmsua2V5U3RyaW5nID09IGtleVN0cmluZykge1xuICAgICAgICAgIGxpbmtzLnNwbGljZShrLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZighbGlua3MubGVuZ3RoKSB7XG4gICAgICAgIGRlbGV0ZSBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoIWFyci5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHN0b3JlIGxpbmsgd2l0aCB0aGUgZnVuY3Rpb25cbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bnN0b3JlQnlGdW5jdGlvbihuYW1lLCBmbikge1xuICAgIGlmKCFBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV07XG4gICAgXG4gICAgZm9yKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYocmVzLmNvbXBvbmVudCA9PT0gdGhpcyAmJiByZXMubmFtZSA9PSBuYW1lICYmIHJlcy5mbiA9PT0gZm4pIHtcbiAgICAgICAgbGlua3Muc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZighbGlua3MubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIGFuIGF0dHJpYnV0ZSBldmVudCBieSB0aGUga2V5c1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hdHRyVHJpZ2dlckJ5S2V5cyhrZXlzLCB2YWx1ZSkge1xuICAgIGlmKHRoaXMuX19kaXNhYmxlQXR0clRyaWdnZXJpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbGlua3MgPSB0aGlzLl9fYXR0ckxpbmtzW0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKV07XG4gICBcbiAgICBpZighbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gQWtpbGkubmV4dFRpY2soKCkgPT4ge1xuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGxpbmtzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5rID0gbGlua3NbaV07XG5cbiAgICAgICAgaWYobGluay5mbikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBldiA9ICdvbicgKyB1dGlscy5jYXBpdGFsaXplKGxpbmsubmFtZSk7XG4gICAgICAgIHRoaXMuYXR0cnNbZXZdICYmIHRoaXMuYXR0cnNbZXZdLnRyaWdnZXIodmFsdWUsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9KTsgIFxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgYW4gYXR0cmlidXRlIGV2ZW50IGJ5IHRoZSBuYW1lXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hdHRyVHJpZ2dlckJ5TmFtZShuYW1lLCB2YWx1ZSkge1xuICAgIGNvbnN0IGxpbmtzID0gdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcblxuICAgIGlmKCFsaW5rcyB8fCAhbGlua3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAgICBcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTsgICAgXG4gICAgICB0aGlzLl9fZGlzYWJsZUF0dHJUcmlnZ2VyaW5nID0gdHJ1ZTtcbiAgICAgIGxpbmsuZm4/IEFraWxpLnVuaXNvbGF0ZWQoKCkgPT4gbGluay5mbi5jYWxsKHRoaXMsIHZhbHVlKSk6IHRoaXMuc2NvcGUuX19zZXQobGluay5rZXlzLCB2YWx1ZSk7IFxuICAgICAgdGhpcy5fX2Rpc2FibGVBdHRyVHJpZ2dlcmluZyA9IGZhbHNlOyBcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGF0dHJpYnV0ZSBsaW5rIHdpdGggdGhlIHNjb3BlIHByb3BlcnR5XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hdHRyQnlLZXlzKG5hbWUsIGtleXMpIHtcbiAgICBpZigha2V5cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBBdHRyaWJ1dGUgbGluayBcIiR7bmFtZX1cIiBtdXN0IGhhdmUgdGhlIHNjb3BlIHByb3BlcnR5IG5hbWVgKTtcbiAgICB9XG5cbiAgICBpZighQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG5cbiAgICBuYW1lID0gdXRpbHMudG9DYW1lbENhc2UobmFtZSk7XG4gICAgdGhpcy5fX2Rpc2FibGVBdHRyVHJpZ2dlcmluZyA9IHRydWU7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eShuYW1lKSAmJiB0aGlzLnNjb3BlLl9fc2V0KGtleXMsIHRoaXMuYXR0cnNbbmFtZV0pOyAgXG4gICAgdGhpcy5fX2Rpc2FibGVBdHRyVHJpZ2dlcmluZyA9IGZhbHNlOyAgXG4gICAgbGV0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcblxuICAgIGlmKCF0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ10pIHtcbiAgICAgIHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXSA9IFtdO1xuICAgIH1cblxuICAgIGxldCBhcnIgPSB0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ107XG4gICAgXG4gICAgZm9yKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuXG4gICAgICBpZihyZXMubmFtZSA9PSBuYW1lICYmIHJlcy5rZXlTdHJpbmcgPT0ga2V5U3RyaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ10ucHVzaCh7IG5hbWUsIGtleXMsIGtleVN0cmluZyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gYXR0cmlidXRlIGxpbmsgd2l0aCB0aGUgZnVuY3Rpb25cbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWQgXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgX19hdHRyQnlGdW5jdGlvbihuYW1lLCBmbiwgb3B0aW9ucyA9IHt9KSB7ICAgIFxuICAgIGxldCBjYWxsID0gb3B0aW9ucy5jYWxsT25TdGFydCA9PT0gdW5kZWZpbmVkPyB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KG5hbWUpOiBvcHRpb25zLmNhbGxPblN0YXJ0O1xuICAgIG5hbWUgPSB1dGlscy50b0NhbWVsQ2FzZShuYW1lKTtcblxuICAgIGlmKCF0aGlzLl9fYXR0ckxpbmtzW25hbWVdKSB7XG4gICAgICB0aGlzLl9fYXR0ckxpbmtzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IobGV0IGkgPSBsaW5rcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGxpbmtzW2ldO1xuXG4gICAgICBpZihyZXMubmFtZSA9PSBuYW1lICYmIHJlcy5mbiA9PT0gZm4pIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHRoaXMuX19hdHRyTGlua3NbbmFtZV0ucHVzaCh7IG5hbWUsIGZuIH0pO1xuICAgIFxuICAgIGlmKGNhbGwpIHtcbiAgICAgIHJldHVybiBBa2lsaS51bmlzb2xhdGVkKCgpID0+IGZuLmNhbGwodGhpcywgdGhpcy5hdHRyc1tuYW1lXSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGF0dHJpYnV0ZSBsaW5rIHdpdGggdGhlIHNjb3BlIHByb3BlcnR5XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYXR0ckJ5S2V5cyhuYW1lLCBrZXlzKSB7XG4gICAgaWYoIWtleXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IGhhdmUgdG8gcGFzcyB0aGUgc2NvcGUgcHJvcGVydHkgbmFtZSBmb3IgYXR0cmlidXRlIGxpbmsgXCIke25hbWV9XCJgKTtcbiAgICB9XG5cbiAgICBpZighQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG5cbiAgICBsZXQga2V5U3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpO1xuICAgIGxldCBhcnIgPSB0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ107XG5cbiAgICBpZighYXJyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBmb3IobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBhcnJbaV07XG5cbiAgICAgIGlmKHJlcy5uYW1lICE9IG5hbWUgfHwgcmVzLmtleVN0cmluZyAhPSBrZXlTdHJpbmcpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGFyci5zcGxpY2UoaSwgMSk7XG4gICAgfVxuXG4gICAgaWYoIWFyci5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ107XG4gICAgfVxuICB9XG5cbiAgIC8qKlxuICAgKiBSZW1vdmUgdGhlIGF0dHJpYnV0ZSBsaW5rIHdpdGggdGhlIGZ1bmN0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmF0dHJCeUZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYoIXRoaXMuX19hdHRyTGlua3NbbmFtZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSB0aGlzLl9fYXR0ckxpbmtzW25hbWVdO1xuICAgIFxuICAgIGZvcihsZXQgaSA9IGxpbmtzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gbGlua3NbaV07XG5cbiAgICAgIGlmKHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmZuID09PSBmbikge1xuICAgICAgICBsaW5rcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKCFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fYXR0ckxpbmtzW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUga2V5IGlzIHN5c3RlbVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2lzU3lzdGVtS2V5IChrZXkpIHtcbiAgICBpZiAoa2V5ID09ICdfXycgfHwgKGtleVswXSA9PSAnXycgJiYga2V5WzFdID09ICdfJykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChbJ2NvbnN0cnVjdG9yJ10uaW5kZXhPZihrZXkpICE9IC0xKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogTmVzdGVkIG9ic2VydmluZyB0aGUgdmFsdWVcbiAgICpcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBbc3RhcnRLZXlzXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX25lc3RlZE9ic2VydmUgKHZhbHVlLCBzdGFydEtleXMpIHtcbiAgICBjb25zdCBvYnNlcnZlID0gKHZhbHVlLCBwYXJlbnRzKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF1dGlscy5pc1BsYWluT2JqZWN0KHZhbHVlKSAmJiAhdXRpbHMuaXNTY29wZVByb3h5KHZhbHVlKSAmJiAhKHZhbHVlIGluc3RhbmNlb2YgU2NvcGUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IHRhcmdldCA9IHZhbHVlO1xuXG4gICAgICBDSEVDS19QUk9YWTogaWYgKHZhbHVlLl9faXNQcm94eSkge1xuICAgICAgICB0YXJnZXQgPSB2YWx1ZS5fX3RhcmdldDtcblxuICAgICAgICBpZiAodGhpcy5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcpIHtcbiAgICAgICAgICBicmVhayBDSEVDS19QUk9YWTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHZhbHVlLl9fY29tcG9uZW50ICE9PSB0aGlzIHx8XG4gICAgICAgICAgQWtpbGkuam9pbkJpbmRpbmdLZXlzKHBhcmVudHMpICE9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyh2YWx1ZS5fX2tleXMpXG4gICAgICAgICkge1xuICAgICAgICAgIHRhcmdldCA9IHV0aWxzLmNvcHkodGFyZ2V0LCBmYWxzZSk7XG4gICAgICAgICAgdmFsdWUgPSB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCF0aGlzLl9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyAmJiAhKHZhbHVlIGluc3RhbmNlb2YgU2NvcGUpKSB7XG4gICAgICAgIHRhcmdldCA9IHV0aWxzLmNvcHkodGFyZ2V0LCBmYWxzZSk7ICAgICAgICAgIFxuICAgICAgICB2YWx1ZSA9IHRhcmdldDtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgayBpbiB0YXJnZXQpIHsgICAgICAgIFxuICAgICAgICBpZiAoIXRhcmdldC5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHZhbCA9IHRhcmdldFtrXTsgICAgICAgIFxuICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba10pOyAgIFxuICAgICAgICB0YXJnZXRba10gPSBvYnNlcnZlKHZhbCwga2V5cyk7ICBcbiAgICAgIH1cblxuICAgICAgaWYgKCF2YWx1ZS5fX2lzUHJveHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19vYnNlcnZlKHZhbHVlLCBwYXJlbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG5cbiAgICBsZXQgcmVzID0gb2JzZXJ2ZSh2YWx1ZSwgc3RhcnRLZXlzIHx8IFtdKTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBpc29sYXRpb24gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHBhcmVudHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlbGV0ZWQ9ZmFsc2VdXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZUlzb2xhdGlvbk9iamVjdCAocGFyZW50cywga2V5LCBpc0RlbGV0ZWQgPSBmYWxzZSkge1xuICAgIGxldCBrZXlzID0gcGFyZW50cy5sZW5ndGg/IFtwYXJlbnRzWzBdXTogW2tleV07XG4gICAgbGV0IGlzb2xhdGlvbktleSA9IHRoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKTtcblxuICAgIGlmIChwYXJlbnRzLmxlbmd0aCkge1xuICAgICAgaXNEZWxldGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25LZXldKSB7XG4gICAgICBBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25LZXldID0ge1xuICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICAgIGtleXM6IGtleXNcbiAgICAgIH07XG4gICAgfVxuXG4gICAgKGlzRGVsZXRlZCAhPT0gdW5kZWZpbmVkKSAmJiAoQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uS2V5XS5pc0RlbGV0ZWQgPSBpc0RlbGV0ZWQpO1xuICAgIHJldHVybiBBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25LZXldO1xuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgdGhlIG5vZGUgdG8gYmluZGluZ1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gYmluZCAtIGJ5IGRlZmF1bHQgaXMgY29tcG9uZW50Ll9fZXZhbHVhdGlvbi5saXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW25vdEJpbmRpbmc9ZmFsc2VdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2V2YWx1YXRlZD1mYWxzZV1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19iaW5kTm9kZShiaW5kLCByZWFsQ29tcG9uZW50LCBrZXlzLCBwYXJlbnRzLCB2YWx1ZSwgbm90QmluZGluZyA9IGZhbHNlLCBldmFsdWF0ZWQgPSBmYWxzZSkge1xuICAgIGxldCBwYXJlbnRLZXlzU3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKHBhcmVudHMpO1xuICAgIGxldCBjb21wb25lbnQgPSB0aGlzO1xuXG4gICAgaWYgKGJpbmQubGVuZ3RoICYmICFub3RCaW5kaW5nKSB7XG4gICAgICBsZXQgbCA9IGJpbmQubGVuZ3RoIC0gMTtcbiAgICAgIGxldCBkYXRhID0gYmluZFtsXTtcblxuICAgICAgaWYoZGF0YS5yZWFsQ29tcG9uZW50ID09PSB0aGlzICYmIGRhdGEua2V5c1N0cmluZyA9PSBwYXJlbnRLZXlzU3RyaW5nKSB7XG4gICAgICAgIGNvbXBvbmVudCA9IGRhdGEuY29tcG9uZW50O1xuICAgICAgfSAgICAgIFxuICAgICAgXG4gICAgICBpZiAoZGF0YS5rZXlzU3RyaW5nID09IHBhcmVudEtleXNTdHJpbmcgJiYgZGF0YS5jb21wb25lbnQgPT09IGNvbXBvbmVudCkge1xuICAgICAgICBiaW5kLnNwbGljZShsLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgYmluZC5wdXNoKHtcbiAgICAgIGNvbXBvbmVudCxcbiAgICAgIHJlYWxDb21wb25lbnQ6IHJlYWxDb21wb25lbnQsXG4gICAgICBrZXlzU3RyaW5nOiBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyksXG4gICAgICBwYXJlbnRzLFxuICAgICAga2V5cyxcbiAgICAgIHZhbHVlLFxuICAgICAgZXZhbHVhdGVkLFxuICAgICAgbm90QmluZGluZ1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBrZXkgaXMgc3lzdGVtIGJpbmRpbmcgdGhpbmdcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi8gXG4gIF9faXNTeXN0ZW1CaW5kaW5nS2V5KGtleSkge1xuICAgIHJldHVybiBrZXkgPT0gJ19fZGF0YSc7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGJpbmRpbmcgYnkga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRCaW5kKGtleXMpIHtcbiAgICByZXR1cm4gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzKSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBiaW5kaW5nIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldEJvdW5kTm9kZShrZXlzLCBub2RlKSB7XG4gICAgbGV0IGJpbmQgPSAgdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzKTtcblxuICAgIGlmICghYmluZCB8fCAhYmluZC5fX2RhdGEgfHwgIWJpbmQuX19kYXRhLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBiaW5kLl9fZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBkYXRhID0gYmluZC5fX2RhdGFbaV07XG5cbiAgICAgIGlmIChkYXRhLm5vZGUgPT09IG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBub2RlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbZXZhbHVhdGVkXVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXROb2RlUHJvcGVydHkobm9kZSwga2V5cywgdmFsdWUsIGV2YWx1YXRlZCA9IGZhbHNlKSB7XG4gICAgbGV0IHByb3AgPSB0aGlzLl9fZ2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMpOyAgICBcbiAgICBsZXQgY29weSA9IHV0aWxzLmNvcHkodmFsdWUpO1xuXG4gICAgaWYgKHByb3ApIHtcbiAgICAgIGxldCByZXMgPSB1dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSh2YWx1ZSwgcHJvcC52YWx1ZSwgcHJvcC5jb3B5KTtcbiAgICAgIHByb3AudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHByb3AuY29weSA9IGNvcHk7XG4gICAgICByZXR1cm4gIXJlcztcbiAgICB9XG4gICAgXG4gICAgbm9kZS5fX3Byb3BlcnRpZXNbdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpXSA9IHtcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIHZhbHVlLFxuICAgICAgY29weSwgICAgICBcbiAgICAgIGtleXMsXG4gICAgICBldmFsdWF0ZWQgICAgICBcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBub2RlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cykge1xuICAgIGxldCBoYXNoID0gYCR7dGhpcy5fX3Njb3BlLl9fbmFtZX0uJHtBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyl9YDtcbiAgICByZXR1cm4gbm9kZS5fX3Byb3BlcnRpZXNbaGFzaF0gfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgdGhlIG5vZGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZWxldGVOb2RlUHJvcGVydHkobm9kZSwga2V5cykge1xuICAgIGxldCBoYXNoID0gYCR7dGhpcy5fX3Njb3BlLl9fbmFtZX0uJHtBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyl9YDtcbiAgICBkZWxldGUgbm9kZS5fX3Byb3BlcnRpZXNbaGFzaF07XG4gIH1cblxuICAvKipcbiAgICogQmluZCBkYXRhIHdpdGggdGhlIGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2JpbmQoa2V5cywgZGF0YSkge1xuICAgIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncywgKGxhc3QsIHZhbHVlKSA9PiB7XG4gICAgICBsZXQgb2JqID0geyBfX2RhdGE6IFtdIH07XG5cbiAgICAgIGlmICghbGFzdCkge1xuICAgICAgICByZXR1cm4gdmFsdWU/IHZhbHVlOiBvYmo7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgb2JqID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghb2JqLl9fZGF0YSkge1xuICAgICAgICBvYmouX19kYXRhID0gW107XG4gICAgICB9XG5cbiAgICAgIG9iai5fX2RhdGEucHVzaChkYXRhKTtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIHRoZSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmJpbmQoa2V5cykge1xuICAgIGxldCBiaW5kID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzKTtcblxuICAgIGlmICghYmluZCB8fCAhYmluZC5fX2RhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGJpbmQuX19kYXRhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG5vZGUgPSBiaW5kLl9fZGF0YVtpXS5ub2RlO1xuICAgICAgdGhpcy5fX2RlbGV0ZU5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKTtcbiAgICB9XG5cbiAgICB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MsICh2YWx1ZSkgPT4ge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPiAxKSB7XG4gICAgICAgIHZhbHVlLl9fZGF0YSA9IFtdO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCBkYXRhIGJ5IG5vZGVzXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZVtdfSBub2Rlc1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYmluZEJ5Tm9kZXMobm9kZXMpIHtcbiAgICBjb25zdCB1bmJpbmQgPSAob2JqKSA9PiB7XG4gICAgICBmb3IgKGxldCBrIGluIG9iaikge1xuICAgICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGsgPT0gJ19fZGF0YScpIHtcbiAgICAgICAgICBsZXQgZGF0YSA9IG9ialtrXSB8fCBbXTtcbiAgICAgICAgICBsZXQgbCA9IGRhdGEubGVuZ3RoO1xuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBiaW5kID0gZGF0YVtpXTtcblxuICAgICAgICAgICAgaWYgKG5vZGVzLmluZGV4T2YoYmluZC5ub2RlKSAhPSAtMSkge1xuICAgICAgICAgICAgICBkYXRhLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICBsLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFsKSB7XG4gICAgICAgICAgICBkZWxldGUgb2JqW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKCF0aGlzLl9faXNTeXN0ZW1CaW5kaW5nS2V5KGspKSB7XG4gICAgICAgICAgdW5iaW5kKG9ialtrXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdW5iaW5kKHRoaXMuX19iaW5kaW5ncyk7XG4gICAgdGhpcy5fX2NsZWFyRW1wdHlCaW5kaW5ncygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCBlbXB0eSBiaW5kaW5nc1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gW29ial1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jbGVhckVtcHR5QmluZGluZ3Mob2JqKSB7XG4gICAgY29uc3QgY2xlYXIgPSAob2JqLCBwYXJlbnQsIGtleSkgPT4ge1xuICAgICAgZm9yIChsZXQgayBpbiBvYmopIHtcbiAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2YWwgPSBvYmpba107XG5cbiAgICAgICAgaWYgKGsgPT0gJ19fZGF0YScgJiYgKCF2YWwgfHwgIXZhbC5sZW5ndGgpKSB7XG4gICAgICAgICAgZGVsZXRlIG9ialtrXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghdGhpcy5fX2lzU3lzdGVtQmluZGluZ0tleShrKSkge1xuICAgICAgICAgIGlmICghT2JqZWN0LmtleXMob2JqW2tdKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmpba107XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xlYXIob2JqW2tdLCBvYmosIGspO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIU9iamVjdC5rZXlzKG9iaikubGVuZ3RoICYmIHBhcmVudCkge1xuICAgICAgICBkZWxldGUgcGFyZW50W2tleV07XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNsZWFyKG9iaiB8fCB0aGlzLl9fYmluZGluZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBsaW5rc1xuICAgKiBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jbGVhclN0b3JlTGlua3MoKSB7XG4gICAgY29uc3QgbGlua3MgPSBBa2lsaS5fX3N0b3JlTGlua3M7XG5cbiAgICBmb3IobGV0IGtleSBpbiBsaW5rcykge1xuICAgICAgY29uc3QgYXJyID0gbGlua3Nba2V5XTtcblxuICAgICAgZm9yKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBhcnJbaV07XG4gIFxuICAgICAgICBpZihsaW5rLmNvbXBvbmVudCA9PT0gdGhpcykge1xuICAgICAgICAgIGFyci5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoIWFyci5sZW5ndGgpIHtcbiAgICAgICAgZGVsZXRlIGxpbmtzW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgY2hpbGQgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlbW92ZUNoaWxkcmVuKCkge1xuICAgIGNvbnN0IHJlbW92ZSA9IChjaGlsZHJlbikgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcblxuICAgICAgICByZW1vdmUoY2hpbGQuX19ha2lsaS5fX2NoaWxkcmVuKTtcbiAgICAgICAgY2hpbGQuX19ha2lsaS5fX3JlbW92ZSgpO1xuICAgICAgICBpLS07XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJlbW92ZSh0aGlzLl9fY2hpbGRyZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgY29tcG9uZW50IHdpdGhvdXQgY2hpbGRyZW4gcmVtb3ZpbmdcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZW1vdmUoKSB7XG4gICAgdGhpcy5fX2RldGFjaCgpO1xuICAgIHRoaXMuX19jbGVhclN0b3JlTGlua3MoKTtcbiAgICB0aGlzLmF0dHJzLm9uUmVtb3ZlZCAmJiB0aGlzLmF0dHJzLm9uUmVtb3ZlZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICB0aGlzLnJlbW92ZWQoKTsgICAgXG4gICAgQWtpbGkucmVtb3ZlU2NvcGUodGhpcy5fX3Njb3BlLl9fbmFtZSk7XG4gICAgdGhpcy5lbC5yZW1vdmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRhY2ggdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RldGFjaCgpIHtcbiAgICBpZiAodGhpcy5fX2V2YWx1YXRlUGFyZW50ICYmICF0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMpIHtcbiAgICAgIHRoaXMuX19ldmFsdWF0ZVBhcmVudC5fX2FraWxpLl9fdW5iaW5kQnlOb2RlcyhbXS5zbGljZS5jYWxsKHRoaXMuZWwuYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9fcGFyZW50KSB7XG4gICAgICB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19zcGxpY2VDaGlsZCh0aGlzLmVsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBjb21wb25lbnQgd2l0aCBjaGlsZHJlblxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2Rlc3Ryb3koKSB7XG4gICAgdGhpcy5fX3JlbW92ZUNoaWxkcmVuKCk7XG4gICAgdGhpcy5fX3JlbW92ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBjb21wb25lbnQgaHRtbFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2VtcHR5KCkge1xuICAgIGxldCBub2RlcyA9IFtdO1xuICAgIHRoaXMuX19yZW1vdmVDaGlsZHJlbigpO1xuXG4gICAgY29uc3QgZmluZCA9IChjaGlsZHJlbikgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlID09IDMpIHtcbiAgICAgICAgICBub2Rlcy5wdXNoKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaGlsZC5ub2RlVHlwZSA9PSAxICYmICFjaGlsZC5fX2FraWxpKSB7XG4gICAgICAgICAgZm9yIChsZXQgayA9IDAsIGF0dHJzID0gY2hpbGQuYXR0cmlidXRlcywgYyA9IGF0dHJzLmxlbmd0aDsgayA8IGM7IGsrKykge1xuICAgICAgICAgICAgbm9kZXMucHVzaChhdHRyc1tpXSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZmluZChjaGlsZC5jaGlsZE5vZGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBmaW5kKHRoaXMuZWwuY2hpbGROb2Rlcyk7XG4gICAgdGhpcy5fX3VuYmluZEJ5Tm9kZXMobm9kZXMpO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHBhcmVudCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZpbmRBbGw9dHJ1ZV0gLSBnZXQgYXJyYXkgaWYgdHJ1ZVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldFBhcmVudChzZWxlY3RvciA9ICcnLCBmaW5kQWxsID0gZmFsc2UsIGxldmVscyA9IG51bGwpIHtcbiAgICBsZXQgYXJyID0gW107XG4gICAgbGV0IGxldmVsID0gMDtcblxuICAgIGlmICh0eXBlb2YgbGV2ZWxzICE9ICdvYmplY3QnKSB7XG4gICAgICBsZXZlbHMgPSBbbGV2ZWxzXTtcbiAgICB9XG5cbiAgICBjb25zdCBmaW5kID0gKHBhcmVudCkgPT4ge1xuICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWxldmVscyB8fCBsZXZlbHMuaW5kZXhPZihsZXZlbCkgIT0gLTEpIHtcbiAgICAgICAgaWYgKCFzZWxlY3RvciB8fCBwYXJlbnQuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIGlmICghZmluZEFsbCkge1xuICAgICAgICAgICAgYXJyLnB1c2gocGFyZW50Ll9fYWtpbGkpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYXJyLnB1c2gocGFyZW50Ll9fYWtpbGkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldmVsKys7XG4gICAgICBmaW5kKHBhcmVudC5fX2FraWxpLl9fcGFyZW50KTtcbiAgICB9O1xuXG4gICAgZmluZCh0aGlzLl9fcGFyZW50KTtcblxuICAgIHJldHVybiBmaW5kQWxsPyBhcnI6IChhcnJbMF0gfHwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNoaWxkIGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0Q2hpbGRyZW4oc2VsZWN0b3IgPSAnJywgZmluZEFsbCA9IHRydWUsIGxldmVscyA9IG51bGwpIHtcbiAgICBsZXQgYXJyID0gW107XG4gICAgbGV0IGxldmVsID0gMDtcblxuICAgIGlmICh0eXBlb2YgbGV2ZWxzICE9ICdvYmplY3QnKSB7XG4gICAgICBsZXZlbHMgPSBbbGV2ZWxzXTtcbiAgICB9XG5cbiAgICBjb25zdCBmaW5kID0gKGNoaWxkcmVuKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcblxuICAgICAgICBpZiAoIWxldmVscyB8fCBsZXZlbHMuaW5kZXhPZihsZXZlbCkgIT0gLTEpIHtcbiAgICAgICAgICBpZiAoIXNlbGVjdG9yIHx8IGNoaWxkLl9fYWtpbGkubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIGlmICghZmluZEFsbCkge1xuICAgICAgICAgICAgICBhcnIucHVzaChjaGlsZC5fX2FraWxpKTtcblxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFyci5wdXNoKGNoaWxkLl9fYWtpbGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXZlbCsrO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBmaW5kKGNoaWxkcmVuW2ldLl9fYWtpbGkuX19jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZpbmQodGhpcy5fX2NoaWxkcmVuKTtcblxuICAgIHJldHVybiBmaW5kQWxsPyBhcnI6IChhcnJbMF0gfHwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG5lYXJlc3QgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kQWxsPXRydWVdIC0gZ2V0IGFycmF5IGlmIHRydWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbcmlnaHQ9ZmFsc2VdIC0gZnJvbSB0aGUgcmlnaHQgc2lkZSBpZiB0cnVlXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0TmVhcihzZWxlY3RvciA9ICcnLCBmaW5kQWxsID0gdHJ1ZSwgcmlnaHQgPSBmYWxzZSkge1xuICAgIGlmICghdGhpcy5fX3BhcmVudCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGxldmVsRWxlbWVudHMgPSB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19jaGlsZHJlbi5zbGljZSgpO1xuICAgIGxldCBhcnIgPSBbXTtcblxuICAgIHJpZ2h0ICYmIGxldmVsRWxlbWVudHMucmV2ZXJzZSgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsZXZlbEVsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGVsID0gbGV2ZWxFbGVtZW50c1tpXTtcblxuICAgICAgaWYgKGVsID09PSB0aGlzLmVsKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXNlbGVjdG9yIHx8IGVsLl9fYWtpbGkubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgYXJyLnB1c2goZWwuX19ha2lsaSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYXJyLnJldmVyc2UoKTtcblxuICAgIGlmICghZmluZEFsbCkge1xuICAgICAgcmV0dXJuIGFyci5sZW5ndGg/IGFyclswXTogbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGxpbmsgdG8gdGhlIHN0b3JlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHN0b3JlKG5hbWUsIGhhbmRsZXIpIHtcbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbic/IHRoaXMuX19zdG9yZUJ5RnVuY3Rpb24oLi4uYXJndW1lbnRzKTogdGhpcy5fX3N0b3JlQnlLZXlzKC4uLmFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbGluayB3aXRoIHRoZSBhdHRyaWJ1dGVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXXxmdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgYXR0cihuYW1lLCBoYW5kbGVyKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nPyB0aGlzLl9fYXR0ckJ5RnVuY3Rpb24oLi4uYXJndW1lbnRzKTogdGhpcy5fX2F0dHJCeUtleXMoLi4uYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHN0b3JlIGxpbmtcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXXxmdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgdW5zdG9yZShuYW1lLCBoYW5kbGVyKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nPyB0aGlzLl9fdW5zdG9yZUJ5RnVuY3Rpb24oLi4uYXJndW1lbnRzKTogdGhpcy5fX3Vuc3RvcmVCeUtleXMoLi4uYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGF0dHJpYnV0ZSBsaW5rXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHVuYXR0cihuYW1lLCBoYW5kbGVyKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nPyB0aGlzLl9fdW5hdHRyQnlGdW5jdGlvbiguLi5hcmd1bWVudHMpOiB0aGlzLl9fdW5hdHRyQnlLZXlzKC4uLmFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGNvbXBvbmVudCBtYXRjaGVzIHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBzZWxlY3RvclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIG1hdGNoZXMoc2VsZWN0b3IpIHtcbiAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBzZWxlY3Rvcih0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5lbC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBwYXJlbnQgY29tcG9uZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR9XG4gICAqL1xuICBwYXJlbnQoc2VsZWN0b3IgPSAnJywgbGV2ZWxzID0gbnVsbCkge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0UGFyZW50KHNlbGVjdG9yLCBmYWxzZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgcGFyZW50IGNvbXBvbmVudHMgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgcGFyZW50cyhzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRQYXJlbnQoc2VsZWN0b3IsIHRydWUsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNsb3Nlc3QgY2hpbGQgY29tcG9uZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR9XG4gICAqL1xuICBjaGlsZChzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRDaGlsZHJlbihzZWxlY3RvciwgZmFsc2UsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFycmF5IG9mIGNoaWxkIGNvbXBvbmVudHMgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgY2hpbGRyZW4oc2VsZWN0b3IgPSAnJywgbGV2ZWxzID0gbnVsbCkge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0Q2hpbGRyZW4oc2VsZWN0b3IsIHRydWUsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFycmF5IG9mIGNvbXBvbmVudHMgbGVmdCBmcm9tIHRoZSBjdXJyZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGJlZm9yZShzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCB0cnVlLCBmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFycmF5IG9mIGNvbXBvbmVudHMgcmlnaHQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBhZnRlcihzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCB0cnVlLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBjb21wb25lbnQgbGVmdCBmcm9tIHRoZSBjdXJyZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR9XG4gICAqL1xuICBwcmV2KHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIGZhbHNlLCBmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNsb3Nlc3QgY29tcG9uZW50IHJpZ2h0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIG5leHQoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgZmFsc2UsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBlbGVtZW50IHBhcmVudFxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRcbiAgICovXG4gIGFwcGVuZFRvKHBhcmVudCkge1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW5jZWwgY29tcG9uZW50IGNvbXBpbGF0aW9uXG4gICAqL1xuICBjYW5jZWwoKSB7XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ29tcGFsZSB0aGUgY29tcG9uZW50LCBidXQgY2FuY2VsIHRoZSBjb21waWxhdGlvbiBpbnNpZGUgb2YgaXRcbiAgICovXG4gIHByZXZlbnQoKSB7XG4gICAgdGhpcy5fX3ByZXZlbnQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGVsZW1lbnQgaHRtbFxuICAgKlxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIGVtcHR5KCkge1xuICAgIHJldHVybiB0aGlzLl9fZW1wdHkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgZWxlbWVudFxuICAgKlxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIHJlbW92ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2Rlc3Ryb3kuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7fVxuICBjb21waWxlZCgpIHt9XG4gIHJlY29tcGlsZWQoKSB7fVxuICByZXNvbHZlZCgpIHt9XG4gIHJlbW92ZWQoKSB7fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnQuanMiLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG5leHBvcnQgY2xhc3MgUmVxdWVzdCB7XG4gIGNvbnN0cnVjdG9yKGJhc2VVcmwsIGRlZmF1bHRzKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gYmFzZVVybD8gKGJhc2VVcmwucmVwbGFjZSgvXFwvJC8sICcnKSArICcvJyk6ICcnO1xuXG4gICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgIHN0YXR1c0Vycm9yc1BhdHRlcm46IC9eKFteMjNdKXw0MDQvLFxuICAgICAgLi4uKGRlZmF1bHRzIHx8IHt9KVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogU2VuZCByZXF1ZXN0IHdpdGggYW55IG1ldGhvZFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHF1ZXJ5KG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IHVybCwgeGhyO1xuICAgICAgXG4gICAgICBvcHRpb25zID0gey4uLnRoaXMuZGVmYXVsdHMsIC4uLihvcHRpb25zIHx8IHt9KX07XG4gICAgICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICh0eXBlb2Ygb3B0aW9ucy5vblN0YXJ0ID09ICdmdW5jdGlvbicpICYmIG9wdGlvbnMub25TdGFydCh4aHIpO1xuICAgICAgb3B0aW9ucyA9IHRoaXMudHJhbnNmb3JtQmVmb3JlKG9wdGlvbnMpO1xuICAgICAgdXJsID0gdGhpcy5iYXNlVXJsPyBgJHt0aGlzLmJhc2VVcmx9JHtvcHRpb25zLnVybC5yZXBsYWNlKC9eXFwvLywgJycpfWA6IG9wdGlvbnMudXJsO1xuICAgICAgeGhyLm9wZW4ob3B0aW9ucy5tZXRob2QsIHVybCwgdHJ1ZSwgb3B0aW9ucy51c2VyLCBvcHRpb25zLnBhc3N3b3JkKTtcbiAgICAgIG9wdGlvbnMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyB8fCB7fTtcblxuICAgICAgaWYgKG9wdGlvbnMuanNvbikge1xuICAgICAgICBvcHRpb25zLmpzb24gIT09IHRydWUgJiYgKG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuanNvbikpO1xuICAgICAgICBvcHRpb25zLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICBvcHRpb25zLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlIHx8ICdqc29uJztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG9wdGlvbnMuZm9ybSkge1xuICAgICAgICBvcHRpb25zLmJvZHkgPSB0aGlzLmNyZWF0ZUZvcm1EYXRhKG9wdGlvbnMuZm9ybSk7XG4gICAgICAgIG9wdGlvbnMuaGVhZGVyc1snY29udGVudC10eXBlJ10gPSAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KCd0aW1lb3V0JykpIHtcbiAgICAgICAgeGhyLnRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnJlc3BvbnNlVHlwZSkge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gb3B0aW9ucy5yZXNwb25zZVR5cGU7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLndpdGhDcmVkZW50aWFscykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gb3B0aW9ucy53aXRoQ3JlZGVudGlhbHM7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgZm9yIChsZXQgayBpbiBvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgICBpZiAoIW9wdGlvbnMuaGVhZGVycy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaywgb3B0aW9ucy5oZWFkZXJzW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5wYXJhbXMpIHtcbiAgICAgICAgbGV0IHN0ciA9IHRoaXMucGFyYW1zVG9RdWVyeShvcHRpb25zLnBhcmFtcyk7XG5cbiAgICAgICAgaWYgKHN0cikge1xuICAgICAgICAgIHVybCArPSBcIj9cIiArIHN0cjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMub25Qcm9ncmVzcyA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHhoci5vbnByb2dyZXNzID0gKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBvcHRpb25zLm9uUHJvZ3Jlc3MoeGhyKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gdGhpcy50cmFuc2Zvcm1BZnRlcih4aHIpO1xuXG4gICAgICAgIGlmICgoeGhyLnN0YXR1cyArICcnKS5tYXRjaChvcHRpb25zLnN0YXR1c0Vycm9yc1BhdHRlcm4pKSB7XG4gICAgICAgICAgbGV0IGVyciA9IG5ldyBFcnJvcihgUmVxdWVzdCB0byBcIiR7dXJsfVwiIHJldHVybnMgZmFpbHVyZSBzdGF0dXMgY29kZSAke3hoci5zdGF0dXN9YCk7XG5cbiAgICAgICAgICBlcnIucmVzcG9uc2UgPSByZXNwb25zZTtcblxuICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgfSBcbiAgICAgICAgXG4gICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9udGltZW91dCA9ICgpID0+IHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgUmVxdWVzdCB0byBcIiR7dXJsfVwiIHRpbWVkIG91dGApKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbmVycm9yID0gKGVycikgPT4ge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5zZW5kKG9wdGlvbnMuYm9keSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBvYmplY3QgdG8gcXVlcnkgc3RyaW5nXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHBhcmFtc1RvUXVlcnkob2JqKSB7XG4gICAgbGV0IHNlcCA9ICcmJztcbiAgICBsZXQgZXEgPSAnPSc7XG5cbiAgICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLm1hcCgoaykgPT4ge1xuICAgICAgbGV0IGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KGspO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmpba10pKSB7XG4gICAgICAgIGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KGspO1xuXG4gICAgICAgIHJldHVybiBvYmpba10ubWFwKCh2LCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGtzICsgYFske2l9XWAgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudCh2KTtcbiAgICAgICAgfSkuam9pbihzZXApO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAob2JqW2tdICYmIHR5cGVvZiBvYmpba10gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGxldCBvcHQgPSBbXTtcblxuICAgICAgICBPYmplY3Qua2V5cyhvYmpba10pLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgb3B0LnB1c2goa3MgKyBgWyR7a2V5fV1gICsgZXEgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tdW2tleV0pKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG9wdC5qb2luKHNlcCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGtzICsgZXEgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tdKTtcbiAgICAgIH1cbiAgICB9KS5qb2luKHNlcCk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBxdWVyeSBzdHJpbmcgdG8gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHBhcmFtc0Zyb21RdWVyeShzdHIpIHtcbiAgICBsZXQgcXVlcnkgPSB7fTtcbiAgICBsZXQgYW1wcyA9IHN0ci5zcGxpdCgnJicpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBhbXBzLmxlbmd0aDsgaSA8bDsgaSsrKSB7XG4gICAgICBsZXQgZXFzID0gIGFtcHNbaV0uc3BsaXQoJz0nKTtcbiAgICAgIGxldCBrZXkgPSBkZWNvZGVVUklDb21wb25lbnQoZXFzWzBdKTtcbiAgICAgIGxldCB2YWwgPSBkZWNvZGVVUklDb21wb25lbnQoZXFzWzFdKTtcblxuICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICAgIHF1ZXJ5W2tleV0ucHVzaCh2YWwpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAocXVlcnlba2V5XSkge1xuICAgICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0sIHZhbF07XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcXVlcnlba2V5XSA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIG11bHRpcGFydCBmb3JtIGRhdGEgZnJvbSBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgKiBAcGFyYW0ge0Zvcm1EYXRhfSBbZGF0YV1cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtuYW1lc3BhY2VdXG4gICAqXG4gICAqIEByZXR1cm5zIHtGb3JtRGF0YX1cbiAgICovXG4gIGNyZWF0ZUZvcm1EYXRhKG9iaiwgZGF0YSA9IG51bGwsIG5hbWVzcGFjZSA9ICcnKSB7XG4gICAgbGV0IGZkID0gZGF0YSB8fCBuZXcgRm9ybURhdGEoKTtcblxuICAgIGZvciAobGV0IGsgaW4gb2JqKSB7XG4gICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGspICYmIG9ialtrXSkge1xuICAgICAgICBsZXQga2V5ID0gbmFtZXNwYWNlPyBuYW1lc3BhY2UgKyAnWycgKyBrICsgJ10nOiBrO1xuXG4gICAgICAgIGlmIChvYmpba10gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgZmQuYXBwZW5kKGtleSwgb2JqW2tdLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3Qob2JqW2tdKSkge1xuICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybURhdGEob2JqW2tdLCBmZCwga2V5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBmZC5hcHBlbmQoa2V5LCBvYmpba10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZkO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBkYXRhIGJlZm9yZSBhIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHRyYW5zZm9ybUJlZm9yZShvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIGRhdGEgYWZ0ZXIgYSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7WE1MSHR0cFJlcXVlc3R9IHhoclxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgdHJhbnNmb3JtQWZ0ZXIoeGhyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHhocjogeGhyLFxuICAgICAgZGF0YTogeGhyLnJlc3BvbnNlLFxuICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBHRVQgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZ2V0KHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnR0VUJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIERFTEVURSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBkZWxldGUodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdERUxFVEUnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgUE9TVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBwb3N0KHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnUE9TVCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBQVVQgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcHV0KHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnUFVUJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIFBBVENIIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHBhdGNoKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnUEFUQ0gnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KCk7XG5cbnJlcXVlc3QuX19pbnN0YW5jZXMgPSB7fTtcblxuLyoqXG4gKiBBZGQgbmV3IHJlcXVlc3QgaW5zdGFuY2UgdG8gdGhlIG1haW4gc2VydmljZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1JlcXVlc3R9IGluc3RhbmNlXG4gKi9cbnJlcXVlc3QuYWRkSW5zdGFuY2UgPSBmdW5jdGlvbihuYW1lLCBpbnN0YW5jZSkge1xuICB0aGlzLl9faW5zdGFuY2VzW25hbWVdID0gaW5zdGFuY2U7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnJlcXVlc3QucmVtb3ZlSW5zdGFuY2UgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLl9faW5zdGFuY2VzW25hbWVdO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVlc3QsICd1c2UnLCB7XG4gIGdldDogKCkgPT4ge1xuICAgIHJldHVybiByZXF1ZXN0Ll9faW5zdGFuY2VzO1xuICB9XG59KTtcblxucmVxdWVzdC5SZXF1ZXN0ID0gUmVxdWVzdDtcbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3Q7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL3JlcXVlc3QuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnZhbHVlS2V5ID0gJ3ZhbHVlJztcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cignZm9jdXMnLCB0aGlzLnNldEZvY3VzKTtcbiAgICB0aGlzLmF0dHIoJ3ZhbHVlJywgdGhpcy5zZXRWYWx1ZSk7XG4gIH1cblxuICBzZXRGb2N1cyh2YWx1ZSkge1xuICAgIHZhbHVlPyB0aGlzLnNldEVsZW1lbnRGb2N1cygpOiB0aGlzLnNldEVsZW1lbnRCbHVyKCk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICh0aGlzLmVsW3RoaXMudmFsdWVLZXldICE9PSB2YWx1ZSkgJiYgKHRoaXMuZWxbdGhpcy52YWx1ZUtleV0gPSB2YWx1ZSA9PT0gMD8gJzAnOiAodmFsdWUgfHwgJycpKTtcbiAgfVxuXG4gIHNldEVsZW1lbnRGb2N1cygpIHtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cblxuICBzZXRFbGVtZW50Qmx1cigpIHtcbiAgICB0aGlzLmVsLmJsdXIoKTtcbiAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tpbl0nO1xuICBzdGF0aWMgc2F2ZUF0dHJpYnV0ZVByb3h5SW4gPSB0cnVlOyAgXG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2ZvcicsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnb2wnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3VsJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0aGVhZCcsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGJvZHknLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3Rmb290JywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0cicsIHRoaXMuTG9vcCk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdsb29wJywgdGhpcy5Mb29wKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuX19pdGVyYXRvciA9IG51bGw7XG4gICAgdGhpcy5fX2tleSA9IG51bGw7XG4gICAgdGhpcy5fX3ZhbHVlID0gbnVsbDtcbiAgICB0aGlzLl9faW5kZXggPSBudWxsO1xuICAgIHRoaXMuX19jb21wYXJpc29uVmFsdWUgPSBudWxsO1xuICAgIHRoaXMuaXRlcmF0b3JzID0gW107XG4gICAgdGhpcy5pdGVyYXRvclJlZiA9IG51bGw7XG4gICAgdGhpcy5pdGVyYXRvck91dGVySFRNTCA9IG51bGw7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuY3JlYXRlSXRlcmF0b3IoKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cignaW4nLCB0aGlzLmRyYXcpO1xuICB9XG5cbiAgY3JlYXRlSXRlcmF0b3IoKSB7XG4gICAgbGV0IGVsO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5lbC5jaGlsZHJlbltpXTtcblxuICAgICAgaWYgKGNoaWxkLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50JykgPT0gJ2xvb3AnKSB7XG4gICAgICAgIGVsID0gY2hpbGQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBlbCA9IGNoaWxkO1xuICAgIH1cblxuICAgIGlmICghZWwpIHtcbiAgICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbG9vcCcpOyAgICAgIFxuICAgICAgZWwuaW5uZXJIVE1MID0gdGhpcy5lbC5pbm5lckhUTUw7IFxuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJzsgICAgIFxuICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChlbCk7XG4gICAgfVxuXG4gICAgbGV0IGNvbXBvbmVudE5hbWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpO1xuXG4gICAgaWYgKGNvbXBvbmVudE5hbWUgIT0gJ2xvb3AnKSB7XG4gICAgICBsZXQgY29tcG9uZW50ID0gQWtpbGkuY29tcG9uZW50KGNvbXBvbmVudE5hbWUgfHwgZWwudGFnTmFtZSk7XG5cbiAgICAgIGlmICghY29tcG9uZW50KSB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY29tcG9uZW50JywgJ2xvb3AnKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCEoY29tcG9uZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIEZvcikpIHtcbiAgICAgICAgbGV0IG1hc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsb29wJyk7XG4gICAgICAgIG1hc2suYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICBlbCA9IG1hc2s7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5odG1sID0gZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuaXRlcmF0b3JSZWYgPSBlbC5uZXh0U2libGluZztcbiAgICB0aGlzLml0ZXJhdG9yT3V0ZXJIVE1MID0gZWwub3V0ZXJIVE1MO1xuICAgIGVsLnJlbW92ZSgpO1xuICB9XG5cbiAgY3JlYXRlSXRlcmF0b3JFbGVtZW50KCkge1xuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgZWwuaW5uZXJIVE1MID0gdGhpcy5pdGVyYXRvck91dGVySFRNTDtcbiAgICBlbCA9IGVsLmNvbnRlbnQuZmlyc3RDaGlsZDtcbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBsb29wKGtleSwgdmFsdWUsIGtleXMsIGluZGV4LCBkYXRhQ2hhbmdlZCkge1xuICAgIHRoaXMuX19pbmRleCA9IGluZGV4O1xuICAgIHRoaXMuX19rZXkgPSBrZXk7XG4gICAgdGhpcy5fX3ZhbHVlID0gdmFsdWU7ICAgIFxuICAgIHRoaXMuX19jb21wYXJpc29uVmFsdWUgPSB1dGlscy5jb3B5KHZhbHVlKTtcblxuICAgIGlmKHRoaXMuaXRlcmF0b3JzLmxlbmd0aCA+IGluZGV4KSB7XG4gICAgICBsZXQgaXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yc1tpbmRleF07XG4gICAgICBsZXQgY0NvcHkgPSBpdGVyYXRvci5jb21wYXJzaW9uLmNvcHk7XG4gICAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgIGlmICh0aGlzLl9faW5kZXggIT09IGl0ZXJhdG9yLmluZGV4KSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldEluZGV4KCk7XG4gICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldEluZGV4KHRydWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fX2tleSAhPT0gaXRlcmF0b3Iua2V5KSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldEtleSgpO1xuICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpdGVyYXRvci5zZXRLZXkodHJ1ZSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmICghdXRpbHMuY29tcGFyZShjQ29weSwgdGhpcy5fX2NvbXBhcmlzb25WYWx1ZSwgeyBpZ25vcmVVbmRlZmluZWQ6IHRydWUgfSkpIHtcbiAgICAgICAgaXRlcmF0b3Iuc2V0VmFsdWUoKTtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaXRlcmF0b3Iuc2V0VmFsdWUodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIChjaGFuZ2VkIHx8IGRhdGFDaGFuZ2VkKSAmJiBBa2lsaS5jb21waWxlKGl0ZXJhdG9yLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICB9XG4gICAgXG4gICAgbGV0IGVsID0gdGhpcy5jcmVhdGVJdGVyYXRvckVsZW1lbnQoKTtcbiAgICBlbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XG4gICAgdGhpcy5lbC5pbnNlcnRCZWZvcmUoZWwsIHRoaXMuaXRlcmF0b3JSZWYpO1xuICAgIEFraWxpLmNvbXBpbGUoZWwpO1xuICAgIHRoaXMuaXRlcmF0b3JzLnB1c2goZWwuX19ha2lsaSk7XG4gICAgcmV0dXJuIGVsLl9fYWtpbGk7XG4gIH1cblxuICBkcmF3KGRhdGEpIHtcbiAgICBpZiAodHlwZW9mIGRhdGEgIT0gJ29iamVjdCcgfHwgZGF0YSA9PT0gbnVsbCkge1xuICAgICAgaWYgKEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBcIkZvclwiIGNvbXBvbmVudCBcImluXCIgYXR0cmlidXRlIHZhbHVlIHR5cGUgbXVzdCBiZSBhbiBvYmplY3QvYXJyYXlgKTtcbiAgICAgICAgZGF0YSA9IFtdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBkYXRhQ2hhbmdlZCA9IHV0aWxzLmNvbXBhcmUodGhpcy5kYXRhLCBkYXRhKTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhOyAgICBcbiAgICBsZXQga2V5cyA9IHt9O1xuICAgIGxldCBpdGVyYXRvcnMgPSBbXTtcbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIGZvciAobGV0IGwgPSBkYXRhLmxlbmd0aDsgaW5kZXggPCBsOyBpbmRleCsrKSB7XG4gICAgICAgIGl0ZXJhdG9ycy5wdXNoKHRoaXMubG9vcChpbmRleCwgZGF0YVtpbmRleF0sIGtleXMsIGluZGV4LCBkYXRhQ2hhbmdlZCkpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGZvciAobGV0IGsgaW4gZGF0YSkge1xuICAgICAgICBpZiAoIWRhdGEuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZXJhdG9ycy5wdXNoKHRoaXMubG9vcChrLCBkYXRhW2tdLCBrZXlzLCBpbmRleCwgZGF0YUNoYW5nZWQpKTtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGl0ZXJhdG9ycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBpdGVyYXRvciA9IGl0ZXJhdG9yc1tpXTtcbiAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoaXRlcmF0b3IuZWwpO1xuICAgICAgaXRlcmF0b3IuaXRlcmF0ZShpKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gaW5kZXgsIGwgPSB0aGlzLml0ZXJhdG9ycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBpdGVyYXRvciA9IHRoaXMuaXRlcmF0b3JzW2ldO1xuICAgICAgaXRlcmF0b3IuX19kZXN0cm95KCk7XG4gICAgICB0aGlzLml0ZXJhdG9ycy5zcGxpY2UoaSwgMSk7XG4gICAgICBsLS07XG4gICAgICBpLS07XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgY2xhc3MgTG9vcCBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG4gIHN0YXRpYyBjb250cm9sQXR0cmlidXRlcyA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5mb3IgPSBudWxsO1xuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuaXNGb3IgPSB0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnaW4nKTtcblxuICAgIGlmICghdGhpcy5pc0ZvciAmJiAhKHRoaXMuZWwucGFyZW50Tm9kZS5fX2FraWxpIGluc3RhbmNlb2YgRm9yKSkge1xuICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2l0ZXJhdG9yID0gdGhpcztcbiAgICB0aGlzLmZvciA9IHRoaXMuX19wYXJlbnQuX19ha2lsaTtcbiAgICB0aGlzLnNldEluZGV4KHRydWUpO1xuICAgIHRoaXMuc2V0S2V5KHRydWUpO1xuICAgIHRoaXMuc2V0VmFsdWUodHJ1ZSk7XG4gICAgdGhpcy5pc0ZvciAmJiBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICBpZih0aGlzLmlzRm9yKSB7XG4gICAgICByZXR1cm4gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBzZXRJbmRleCh0YXJnZXQpIHtcbiAgICB0aGlzLmluZGV4ID0gdGhpcy5mb3IuX19pbmRleDtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wSW5kZXgnLCB0aGlzLmluZGV4LCBmYWxzZSwgdGFyZ2V0KTtcbiAgfVxuXG4gIHNldEtleSh0YXJnZXQpIHtcbiAgICB0aGlzLmtleSA9IHRoaXMuZm9yLl9fa2V5O1xuICAgIHRoaXMuc2NvcGUuX19zZXQoJ2xvb3BLZXknLCB0aGlzLmtleSwgZmFsc2UsIHRhcmdldCk7XG4gIH1cblxuICBzZXRWYWx1ZSh0YXJnZXQpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3IuX192YWx1ZTtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wVmFsdWUnLCB0aGlzLnZhbHVlLCB0cnVlLCB0YXJnZXQpO1xuXG4gICAgdGhpcy5jb21wYXJzaW9uID0ge1xuICAgICAgY29weTogdGhpcy5mb3IuX19jb21wYXJpc29uVmFsdWUsXG4gICAgICB2YWx1ZTogdGhpcy5mb3IuX192YWx1ZVxuICAgIH07XG4gIH1cblxuICBpdGVyYXRlKGluZGV4KSB7fVxufVxuXG5Gb3IuTG9vcCA9IExvb3A7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZm9yLmpzIiwiaW1wb3J0IEFraWxpIGZyb20gJy4vYWtpbGkuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuXG4vKipcbiAqIFNjb3BlIGNsYXNzLlxuICpcbiAqIEFsbCBwcm9wZXJ0aWVzIHN0YXJ0aW5nIHdpdGggX18gd2lsbCBub3QgYmUgd2F0Y2hpbmcuXG4gKiBZb3UgY2FuIHVzZSB0aGVtIGZvciBpbnRlcm5hbCBtYW5pcHVsYXRpb25zLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29wZSB7XG4gIHN0YXRpYyBuZXN0ZWRXYXRjaGluZztcblxuICBjb25zdHJ1Y3RvcihuYW1lLCBlbCwgY29tcG9uZW50KSB7XG4gICAgdGhpcy5fX25hbWUgPSBuYW1lO1xuICAgIHRoaXMuX19lbCA9IGVsO1xuICAgIHRoaXMuX19jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgZWwuc2V0QXR0cmlidXRlKCdzY29wZScsIG5hbWUpO1xuICB9XG5cbiAgZ2V0IF9fdXRpbHMoKSB7XG4gICAgcmV0dXJuIHV0aWxzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBhIHNjb3BlIHZhbHVlXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbc3RyaWN0PWZhbHNlXSAtIHdpdGhvdXQgb2JqZWN0IGNvcHlpbmdcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXQoa2V5cywgdmFsdWUsIHN0cmljdCA9IGZhbHNlLCB0YXJnZXQgPSBmYWxzZSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG4gICAgXG4gICAgQWtpbGkudW5pc29sYXRlZCgoKSA9PiB7XG4gICAgICBzdHJpY3QgJiYgKHRoaXMuX19jb21wb25lbnQuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nID0gdHJ1ZSk7XG4gICAgICB1dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0YXJnZXQ/IHRoaXMuX190YXJnZXQ6IHRoaXMsIChsYXN0LCB2YWwpID0+IHtcbiAgICAgICAgaWYgKCFsYXN0KSB7XG4gICAgICAgICAgcmV0dXJuIHZhbCB8fCB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgc3RyaWN0ICYmICh0aGlzLl9fY29tcG9uZW50Ll9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyA9IGZhbHNlKTtcbiAgICB9KTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY29wZS5qcyIsImltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZWwsIGNvbXBvbmVudCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbCA9IGVsO1xuICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIHRoaXMuZWxDb21wb25lbnQgPSB0aGlzLmVsLl9fYWtpbGkgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIHRoZSBldmVudFxuICAgKlxuICAgKiBAcGFyYW0geyp9IGRhdGEgLSBzZW5kaW5nIGRhdGEuIFdpbGwgYmUgaW4gdGhlIGV2ZW50LmRldGFpbFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlXVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHRyaWdnZXIoZGF0YSwgb3B0aW9ucyA9IHt9LCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgaWYgKGZvcmNlIHx8ICF0aGlzLmluRXZhbHVhdGluZygpKSB7XG4gICAgICB0aGlzLmVsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KHRoaXMubmFtZSwgdGhpcy5wcmVwYXJlT3B0aW9ucyh7IGRldGFpbDogZGF0YSwgIC4uLm9wdGlvbnMgfSkpKTtcbiAgICB9ICAgXG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2ggdGhlIGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IF9FdmVudCAtIGNsYXNzIG9mIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlXVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGRpc3BhdGNoKF9FdmVudCwgb3B0aW9ucyA9IHsgYnViYmxlczogdHJ1ZSB9LCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgaWYgKGZvcmNlIHx8ICF0aGlzLmluRXZhbHVhdGluZygpKSB7XG4gICAgICB0aGlzLmVsLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudCh0aGlzLm5hbWUsIHRoaXMucHJlcGFyZU9wdGlvbnMob3B0aW9ucykpKTtcbiAgICB9XG4gIH1cblxuICBwcmVwYXJlT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHsgYnViYmxlczogdHJ1ZSwgLi4ub3B0aW9ucyB9OyAgXG4gICAgdGhpcy5lbENvbXBvbmVudCAmJiAhdGhpcy5lbENvbXBvbmVudC5fX3NhdmVBdHRyaWJ1dGVQcm94eU91dCAmJiAob3B0aW9ucy5kZXRhaWwgPSB1dGlscy5jb3B5KG9wdGlvbnMuZGV0YWlsKSk7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgZXZlbnQgY2FsbGJhY2sgZG9lc24ndCBydW4gcmVjdXJzaXZlXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaW5FdmFsdWF0aW5nKCkge1xuICAgIGxldCBkYXRhID0gdGhpcy5jb21wb25lbnQuX19ldmFsdWF0aW5nRXZlbnQ7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YS5lbCA9PT0gdGhpcy5lbCAmJiBkYXRhLmV2ZW50LnR5cGUgPT09IHRoaXMubmFtZSAmJiBkYXRhLmNvbXBvbmVudCA9PT0gdGhpcy5jb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogQmluZCB0aGUgZnVuY3Rpb25cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICovXG4gIGJpbmQoZm4pIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5uYW1lLCB0aGlzLmZuID0gZm4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCB0aGUgZnVuY3Rpb25cbiAgICovXG4gIHVuYmluZCgpIHtcbiAgICB0aGlzLmZuICYmIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMuZm4pO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuY29uc3Qgc3RvcmUgPSBuZXcgUHJveHkoe30sIHtcbiAgZ2V0OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICBpZiAoa2V5ID09IFwiX190YXJnZXRcIikge1xuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gIH0sXG4gIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgIGlmKHV0aWxzLmNvbXBhcmUodGFyZ2V0W2tleV0sIHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxuICAgIHZhbHVlID0gdXRpbHMuY29weSh2YWx1ZSk7XG4gICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICBBa2lsaS5yb290ICYmIEFraWxpLnJvb3QuX19zdG9yZVRyaWdnZXJCeU5hbWUoa2V5LCB2YWx1ZSk7ICAgIFxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBkZWxldGVQcm9wZXJ0eTogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgQWtpbGkucm9vdCAmJiBBa2lsaS5yb290Ll9fc3RvcmVUcmlnZ2VyQnlOYW1lKGtleSwgdW5kZWZpbmVkKTtcbiAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvc3RvcmUuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JvdXRlJywgdGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7VHJhbnNpdGlvbn0gdHJhbnNpdGlvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHNldFRyYW5zaXRpb24odHJhbnNpdGlvbikge1xuICAgIGxldCBzdGF0ZSA9IHRyYW5zaXRpb24ucGF0aC5zdGF0ZTtcbiAgICBsZXQgcGFyYW1zID0gdHJhbnNpdGlvbi5wYXRoLnBhcmFtcztcbiAgICBsZXQgdXJsID0gdHJhbnNpdGlvbi51cmw7XG4gICAgbGV0IHF1ZXJ5ID0gdHJhbnNpdGlvbi5xdWVyeTtcblxuICAgIGNvbnN0IGdldFBhcmVudFNjb3BlVHJhbnNpdGlvbiA9IChwYXRoKSA9PiB7XG4gICAgICBpZiAocGF0aC5wYXJlbnQpIHtcbiAgICAgICAgaWYgKHBhdGgucGFyZW50LmNvbXBvbmVudCkge1xuICAgICAgICAgIHJldHVybiBwYXRoLnBhcmVudC5jb21wb25lbnQuX19zY29wZS5fX3RyYW5zaXRpb24ucGF0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24ocGF0aC5wYXJlbnQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBjb21waWxlID0gKGh0bWwpID0+IHsgXG4gICAgICB0aGlzLmVtcHR5KCk7ICBcbiAgICAgIGxldCBuYW1lID0gJ2NvbXBvbmVudCc7XG5cbiAgICAgIGlmKHN0YXRlLmNvbXBvbmVudCkge1xuICAgICAgICBsZXQgZXhpc3RzID0gZmFsc2U7XG4gICAgXG4gICAgICAgIGZvcihsZXQga2V5IGluIEFraWxpLl9fY29tcG9uZW50cykge1xuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IEFraWxpLl9fY29tcG9uZW50c1trZXldO1xuICAgIFxuICAgICAgICAgIGlmKGNvbXBvbmVudCA9PT0gc3RhdGUuY29tcG9uZW50KSB7XG4gICAgICAgICAgICBuYW1lID0ga2V5OyAgICAgICAgICAgIFxuICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICBpZighZXhpc3RzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgXCIke3N0YXRlLm5hbWV9XCIgaGFzIG5vIGRlZmluZWQgY29tcG9uZW50YClcbiAgICAgICAgfSBcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBgPCR7IG5hbWUgfT4keyBodG1sIH08LyR7IG5hbWUgfT5gO1xuICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fX3Njb3BlLl9fdHJhbnNpdGlvbiA9IHtcbiAgICAgIHBhdGg6IHtcbiAgICAgICAgc3RhdGU6IHN0YXRlLm5hbWUsXG4gICAgICAgIGRhdGE6IHRyYW5zaXRpb24ucGF0aC5kYXRhLFxuICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgcGFyZW50OiBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24odHJhbnNpdGlvbi5wYXRoKVxuICAgICAgfSxcbiAgICAgIHBhcmFtczogdHJhbnNpdGlvbi5wYXJhbXMsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIHF1ZXJ5OiBxdWVyeVxuICAgIH07XG5cbiAgICBpZiAoIXRyYW5zaXRpb24ucGF0aC5sb2FkZWQpIHtcbiAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIGlmIChzdGF0ZS50ZW1wbGF0ZSkge1xuICAgICAgICByZXR1cm4gc3RhdGUudGVtcGxhdGU7XG4gICAgICB9XG4gIFxuICAgICAgaWYgKHN0YXRlLnRlbXBsYXRlVXJsKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0LmdldChzdGF0ZS50ZW1wbGF0ZVVybCkudGhlbihyZXMgPT4gcmVzLmRhdGEpO1xuICAgICAgfVxuICAgIH0pLnRoZW4oaHRtbCA9PiBjb21waWxlKGh0bWwpKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3JvdXRlLmpzIiwiaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3JlcXVlc3QuanMnO1xuaW1wb3J0IFJvdXRlIGZyb20gJy4uL2NvbXBvbmVudHMvcm91dGUuanMnO1xuXG5leHBvcnQgY2xhc3MgVHJhbnNpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHVybCwgcXVlcnksIGhhc2ggPSAnJywgcHJldmlvdXMgPSBudWxsKSB7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgIHRoaXMuaGFzaCA9IGhhc2g7XG4gICAgdGhpcy5wcmV2aW91cyA9IHByZXZpb3VzO1xuICAgIHRoaXMucGF0aCA9IG51bGw7XG4gICAgdGhpcy5yb3V0ZXMgPSBbXTtcbiAgICB0aGlzLnN0YXRlcyA9IHt9O1xuICAgIHRoaXMucGFyYW1zID0ge307XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IGZhbHNlO1xuICB9XG5cbiAgcmVkaXJlY3QoKSB7XG4gICAgdGhpcy5jYW5jZWwoKTtcbiAgICByb3V0ZXIuc3RhdGUuYXBwbHkocm91dGVyLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgc2V0UGF0aChwYXRoKSB7XG4gICAgcGF0aC5wYXJlbnQgPSB0aGlzLnBhdGggfHwgbnVsbDtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIHRoaXMucm91dGVzLnB1c2gocGF0aCk7XG4gICAgdGhpcy5zdGF0ZXNbcGF0aC5zdGF0ZS5uYW1lXSA9IHBhdGg7XG4gICAgdGhpcy5wYXJhbXMgPSAhcGF0aC5wYXJlbnQ/IHBhdGgucGFyYW1zOiB7Li4ucGF0aC5wYXJlbnQucGFyYW1zLCAuLi5wYXRoLnBhcmFtc307XG4gIH1cblxuICBnZXRSb3V0ZShzdGF0ZSkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5yb3V0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcm91dGUgPSB0aGlzLnJvdXRlc1tpXTtcblxuICAgICAgaWYgKHJvdXRlLnN0YXRlID09PSBzdGF0ZSkge1xuICAgICAgICByZXR1cm4gcm91dGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBoYXNTdGF0ZShzdGF0ZSkge1xuICAgIHJldHVybiAhIXRoaXMuc3RhdGVzW3N0YXRlLm5hbWVdO1xuICB9XG5cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSB0cnVlO1xuICB9XG59XG5cbmNvbnN0IHJvdXRlciA9IHt9O1xuXG5yb3V0ZXIuYmFzZVVybCA9IFwiL1wiO1xucm91dGVyLnN0YXRlcyA9IFtdO1xucm91dGVyLmhhc2hNb2RlID0gdHJ1ZTtcbnJvdXRlci5fX3JlZGlyZWN0cyA9IDA7XG5yb3V0ZXIuX19pbml0ID0gZmFsc2U7XG5yb3V0ZXIuX19vcHRpb25zID0ge307XG5yb3V0ZXIuX19wYXJhbVJlZ2V4ID0gLyg6KFtcXHdcXGQtXSspKS9nO1xucm91dGVyLl9fcm91dGVTZWxlY3RvciA9IGMgPT4gYyBpbnN0YW5jZW9mIFJvdXRlO1xuXG4vKipcbiAqIEFkZCBuZXcgc3RhdGUgdG8gdGhlIHJvdXRlclxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc3RhdGUgbmFtZS4gVG8gc2V0IHBhcmVudHMgeW91IGNhbiB1c2UgZG90LCBlLmcuICdhcHAuYXJ0aWNsZS5lZGl0J1xuICogQHBhcmFtIHtzdHJpbmd9IHBhdHRlcm4gLSB1cmwgcGF0dGVybiBsaWtlICdhcHAvYXJ0aWNsZS86aWQnXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7cm91dGVyfVxuICovXG5yb3V0ZXIuYWRkID0gZnVuY3Rpb24gKG5hbWUsIHBhdHRlcm4sIG9wdGlvbnMgPSB7fSkge1xuICBpZih0eXBlb2YgbmFtZSA9PSAnb2JqZWN0Jykge1xuICAgIG9wdGlvbnMgPSBuYW1lO1xuICAgIHBhdHRlcm4gPSBvcHRpb25zLnBhdHRlcm47XG4gICAgbmFtZSA9IG9wdGlvbnMuc3RhdGU7XG4gICAgZGVsZXRlIG9wdGlvbnMucGF0dGVybjtcbiAgICBkZWxldGUgb3B0aW9ucy5zdGF0ZTtcbiAgfVxuXG4gIGlmKCFuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgbXVzdCBoYXZlIGEgbmFtZWApO1xuICB9XG5cbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgdGVtcGxhdGU6ICcnLFxuICAgIHRlbXBsYXRlVXJsOiAnJyxcbiAgICBhYnN0cmFjdDogZmFsc2UsXG4gICAgY29tcG9uZW50OiBudWxsLFxuICAgIGhhbmRsZXI6ICh0cmFuc2l0aW9uKSA9PiB7fSxcbiAgfTtcblxuICBpZihBa2lsaS5vcHRpb25zLmRlYnVnICYmIG9wdGlvbnMuY29tcG9uZW50ICYmIChvcHRpb25zLnRlbXBsYXRlIHx8IG9wdGlvbnMudGVtcGxhdGVVcmwpKSB7XG4gICAgY29uc29sZS53YXJuKGBSb3V0ZXIgc3RhdGUgXCIke25hbWV9XCIgbXVzdCBvbmx5IGhhdmUgYSBjb21wb25lbnQgb3IgdGVtcGxhdGUgb3B0aW9uYCk7XG4gIH0gXG5cbiAgaWYgKCFvcHRpb25zLnRlbXBsYXRlICYmICFvcHRpb25zLnRlbXBsYXRlVXJsICYmICFvcHRpb25zLmNvbXBvbmVudCkge1xuICAgIG9wdGlvbnMuYWJzdHJhY3QgPSB0cnVlO1xuICB9XG5cbiAgaWYgKHRoaXMuaGFzKG5hbWUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgXCIke25hbWV9XCIgaXMgYWxyZWFkeSBleGlzdHNgKVxuICB9XG5cbiAgdGhpcy5zZXRTdGF0ZShuYW1lLCBwYXR0ZXJuLCB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnN9KTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIHN0YXRlIGZyb20gdGhlIGxpc3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5yb3V0ZXIucmVtb3ZlID0gZnVuY3Rpb24obmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmICh0aGlzLnN0YXRlc1tpXS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHRoaXMuc3RhdGVzLnNwbGljZShpLCAxKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBDaGVjayBzdGF0ZSBleGlzdHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnJvdXRlci5oYXMgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKHRoaXMuc3RhdGVzW2ldLm5hbWUgPT0gbmFtZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBDaGFuZ2UgdGhlIHN0YXRlIHRvIHRoZSBwYXNzZWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHN0YXRlIG5hbWVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSAtIHBhcmFtcyBmb3Igc3RhdGUge2lkOiAxfSA9PiAnL2FwcC86aWQnID0+ICcvYXBwLzEnXG4gKiBAcGFyYW0ge29iamVjdH0gW3F1ZXJ5XSAtIHF1ZXJ5IHt4OiAxfSA9PiAnL2FwcC8/eD0xJ1xuICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoXVxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICovXG5yb3V0ZXIuc3RhdGUgPSBmdW5jdGlvbiAobmFtZSwgcGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSAnJywgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUobmFtZSk7XG5cbiAgaWYgKCFzdGF0ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIHJvdXRlIHN0YXRlIHdpdGggbmFtZSAke25hbWV9YCk7XG4gIH1cblxuICBsZXQgdXJsID0gdGhpcy5jcmVhdGVTdGF0ZVVybChzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCk7XG5cbiAgaWYgKCFvcHRpb25zLnJlbG9hZCAmJiB1cmwgPT09IHRoaXMuZ2V0VXJsKCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLl9fb3B0aW9ucyA9IG9wdGlvbnM7XG4gIHRoaXMuc2V0VXJsKHVybCk7XG59O1xuXG4vKipcbiAqIEdvIGJhY2tcbiAqL1xucm91dGVyLmJhY2sgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LmJhY2suYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIEdvIHRvIGFueSB3YXlcbiAqL1xucm91dGVyLmdvID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeS5nby5hcHBseSh3aW5kb3cuaGlzdG9yeSwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogR28gZm9yd2FyZFxuICovXG5yb3V0ZXIuZm9yd2FyZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkuZm9yd2FyZC5hcHBseSh3aW5kb3cuaGlzdG9yeSwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHN0YXRlIGJ5IHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqL1xucm91dGVyLmxvY2F0aW9uID0gZnVuY3Rpb24odXJsLCBvcHRpb25zID0geyByZWxvYWQ6IGZhbHNlIH0pIHtcbiAgdGhpcy5fX29wdGlvbnMgPSBvcHRpb25zO1xuXG4gIGlmICh0aGlzLmhhc2hNb2RlKSB7XG4gICAgbGV0IGN1cnJlbnQgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpO1xuXG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB1cmw7XG4gICAgY3VycmVudCA9PT0gdXJsICYmIHRoaXMuY2hhbmdlU3RhdGUoKS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICB9XG4gIGVsc2Uge1xuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCAnJywgdXJsKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSb3V0ZXIgaW5pdGlhbGl6YXRpb24uIFNob3VsZCBiZSBjYWxsZWQgYmVmb3JlIEFraWxpLmluaXQoKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbZGVmYXVsdFVybF1cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2hhc2hNb2RlPXRydWVdXG4gKi9cbnJvdXRlci5pbml0ID0gZnVuY3Rpb24gKGRlZmF1bHRVcmwgPSAnJywgaGFzaE1vZGUgPSB0cnVlKSB7XG4gIGxldCBvbGRQdXNoU3RhdGUgPSB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGU7XG5cbiAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IHJlcyA9IG9sZFB1c2hTdGF0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHJvdXRlci5jaGFuZ2VTdGF0ZSgpLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICB0aGlzLl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5jaGFuZ2VTdGF0ZSgpLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gIH07XG5cbiAgdGhpcy5kZWZhdWx0VXJsID0gZGVmYXVsdFVybDtcbiAgdGhpcy5oYXNoTW9kZSA9IGhhc2hNb2RlO1xuXG4gIHRoaXMuc3RhdGVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICBhID0gYS5uYW1lLnNwbGl0KCcuJykubGVuZ3RoO1xuICAgIGIgPSBiLm5hbWUuc3BsaXQoJy4nKS5sZW5ndGg7XG5cbiAgICByZXR1cm4gYSAtIGI7XG4gIH0pO1xuXG4gIGxldCBzdGF0ZXMgPSB7fTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuICAgIGxldCBwYXJlbnRzID0gW107XG5cbiAgICBzdGF0ZXNbc3RhdGUubmFtZV0gPSBzdGF0ZTtcbiAgICBzdGF0ZS5jaGlsZHJlbiA9IFtdO1xuICAgIHBhcmVudHMgPSBzdGF0ZS5uYW1lLnNwbGl0KCcuJyk7XG4gICAgcGFyZW50cy5wb3AoKTtcbiAgICBzdGF0ZS5sZXZlbCA9IHN0YXRlLmFic3RyYWN0PyBudWxsOiBwYXJlbnRzLmxlbmd0aDtcblxuICAgIGlmIChwYXJlbnRzLmxlbmd0aCkge1xuICAgICAgbGV0IHBhcmVudE5hbWUgPSBwYXJlbnRzLmpvaW4oJy4nKTtcbiAgICAgIGxldCBwYXJlbnQgPSBzdGF0ZXNbcGFyZW50TmFtZV07XG5cbiAgICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIHBhcmVudCByb3V0ZSBzdGF0ZSBcIiR7cGFyZW50TmFtZX1cIiBmb3IgXCIke3N0YXRlLm5hbWV9XCJgKVxuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUubGV2ZWwgIT09IG51bGwgJiYgcGFyZW50LmFic3RyYWN0KSB7XG4gICAgICAgIHN0YXRlLmxldmVsLS07XG4gICAgICB9XG5cbiAgICAgIHN0YXRlLmZ1bGxQYXR0ZXJuID0gdGhpcy5zcGxpdFNsYXNoZXMocGFyZW50LmZ1bGxQYXR0ZXJuICsgJy8nICsgc3RhdGUucGF0dGVybik7XG4gICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaChzdGF0ZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc3RhdGUuZnVsbFBhdHRlcm4gPSBzdGF0ZS5wYXR0ZXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmICghdGhpcy5zdGF0ZXMubGVuZ3RoICYmIEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICBjb25zb2xlLndhcm4oYFlvdSBkaWRuJ3QgYWRkIGFueSByb3V0ZXMgdG8gdGhlIHJvdXRlcmApO1xuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5fX29uU3RhdGVDaGFuZ2VIYW5kbGVyKTtcbiAgdGhpcy5fX2luaXQgPSB0cnVlO1xufTtcblxuLyoqXG4gKiBHZXQgc3RhdGUgYnkgbmFtZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gKi9cbnJvdXRlci5nZXRTdGF0ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZXNbaV07XG5cbiAgICBpZiAoc3RhdGUubmFtZSA9PSBuYW1lKSB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIFNldCBzdGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVyblxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqL1xucm91dGVyLnNldFN0YXRlID0gZnVuY3Rpb24gKG5hbWUsIHBhdHRlcm4sIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgc3RhdGUgPSB7Li4ub3B0aW9ucywgbmFtZSwgcGF0dGVybn07XG5cbiAgcm91dGVyLnN0YXRlcy5wdXNoKHN0YXRlKTtcblxuICByZXR1cm4gc3RhdGU7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBzdGF0ZSBieSBuYW1lXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucm91dGVyLnJlbW92ZVN0YXRlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHRoaXMuc3RhdGVzLnNwbGljZShpLCAxKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBTZXQgdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICovXG5yb3V0ZXIuc2V0VXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB0aGlzLmhhc2hNb2RlPyB0aGlzLnNldEhhc2hVcmwodXJsKTogdGhpcy5zZXRIaXN0b3J5VXJsKHVybCk7XG59O1xuXG4vKipcbiAqIFNldCB1cmwgdXNpbmcgaGlzdG9yeVxuICpcbiAqIEBwYXJhbSB1cmxcbiAqL1xucm91dGVyLnNldEhpc3RvcnlVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCAnJywgdXJsKTtcbn07XG5cbi8qKlxuICogU2V0IHVybCB1c2luZyBoYXNoXG4gKlxuICogQHBhcmFtIHVybFxuICovXG5yb3V0ZXIuc2V0SGFzaFVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIycgKyAodXJsIHx8ICcvJyk7XG59O1xuXG4vKipcbiAqIEdldCB1cmxcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuZ2V0VXJsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5oYXNoTW9kZSA/IHRoaXMuZ2V0SGFzaFVybCgpIDogdGhpcy5nZXRIaXN0b3J5VXJsKCk7XG59O1xuXG4vKipcbiAqIEdldCB1cmwgdXNpbmcgaGlzdG9yeVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRIaXN0b3J5VXJsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArIHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xufTtcblxuLyoqXG4gKiBHZXQgdXJsIHVzaW5nIGhhc2hcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuZ2V0SGFzaFVybCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoL14jLywgJycpO1xufTtcblxuLyoqXG4gKiBHZXQgcXVlcnkgcGFyYW1zXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldFVybFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmhhc2hNb2RlID8gdGhpcy5nZXRIYXNoVXJsUXVlcnkoKSA6IHRoaXMuZ2V0SGlzdG9yeVVybFF1ZXJ5KCk7XG59O1xuXG4vKipcbiAqIEdldCBxdWVyeSBwYXJhbXMgdXNpbmcgaGlzdG9yeVxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRIaXN0b3J5VXJsUXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJlcXVlc3QucGFyYW1zRnJvbVF1ZXJ5KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSk7XG59O1xuXG4vKipcbiAqIEdldCBxdWVyeSBwYXJhbXMgdXNpbmcgaGFzaFxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRIYXNoVXJsUXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJlcXVlc3QucGFyYW1zRnJvbVF1ZXJ5KCh3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnPycpWzFdIHx8ICcnKSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSB1cmwgYnkgZGF0YVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXVxuICogQHBhcmFtIHtvYmplY3R9IFtxdWVyeV1cbiAqIEBwYXJhbSB7c3RyaW5nfSBbaGFzaF1cbiAqL1xucm91dGVyLmNyZWF0ZVN0YXRlVXJsID0gZnVuY3Rpb24gKHN0YXRlLCBwYXJhbXMgPSB7fSwgcXVlcnkgPSB7fSwgaGFzaCA9ICcnKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuXG4gIGxldCB1cmwgPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAobSwgZiwgdikgPT4ge1xuICAgIHJldHVybiBwYXJhbXNbdl0gfHwgJyc7XG4gIH0pO1xuXG4gIHVybCA9IHRoaXMuc3BsaXRTbGFzaGVzKHVybCk7XG5cbiAgaWYgKE9iamVjdC5rZXlzKHF1ZXJ5KS5sZW5ndGgpIHtcbiAgICB1cmwgKz0gJz8nICsgcmVxdWVzdC5wYXJhbXNUb1F1ZXJ5KHF1ZXJ5KTtcbiAgfVxuXG4gIGhhc2ggPSAoaGFzaCB8fCAnJykucmVwbGFjZSgnIycsICcnKTtcblxuICBpZiAoIXRoaXMuaGFzaE1vZGUgJiYgaGFzaCkge1xuICAgIHVybCArPSAnIycgKyBoYXNoO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCB1bm5lY2Vzc2FyeSBzbGFzaGVzIGZyb20gYW4gdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLnNwbGl0U2xhc2hlcyA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgcmV0dXJuIHVybC5yZXBsYWNlKC9bXFwvXSsvZywgJy8nKTtcbn07XG5cbi8qKlxuICogQ2xlYXIgYWxsIHJvdXRlciBkZXBlbmRlbmNpZXNcbiAqL1xucm91dGVyLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIpO1xufTtcblxuLyoqXG4gKiBHZXQgc3RhdGUgdXJsIGNvbnRlbnRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0UGF0dGVybkNvbnRlbnQgPSBmdW5jdGlvbiAoc3RhdGUsIHVybCkge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcblxuICBsZXQga2V5cyA9IFtdO1xuICBsZXQgaSA9IDA7XG4gIGxldCBwYXJhbXMgPSB7fTtcblxuICB1cmwgPSB1cmwuc3BsaXQoJz8nKVswXTtcbiAgdXJsID0gdXJsLnNwbGl0KCcjJylbMF07XG5cbiAgbGV0IHVybFBhdHRlcm4gPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAobSwgZiwgdikgPT4ge1xuICAgIGtleXMucHVzaCh2KTtcblxuICAgIHJldHVybiAnKFteXFxcXC9dKiknO1xuICB9KTtcblxuICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKHVybFBhdHRlcm4pO1xuICBsZXQgaXNJbmNsdWRlZCA9IHVybC5tYXRjaChyZWdleCk7XG5cbiAgaWYgKCFpc0luY2x1ZGVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB1cmwucmVwbGFjZShyZWdleCwgKG0sIHYpID0+IHtcbiAgICB2ICYmIChwYXJhbXNba2V5c1tpXV0gPSB2KTtcbiAgICBpKys7XG4gIH0pO1xuXG4gIHJldHVybiB7IHBhcmFtcyB9O1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgc3RhdGUgaXMgYWN0aXZlIG5vd1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5jbHVkZXNcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaXNBY3RpdmVTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlLCBpbmNsdWRlcyA9IGZhbHNlKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuXG4gIGxldCB1cmwgPSB0aGlzLnNwbGl0U2xhc2hlcyh0aGlzLmdldFVybCgpLnNwbGl0KCc/JylbMF0gKyAnLycpO1xuICBsZXQgdXJsUGF0dGVybiA9IHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2UodGhpcy5fX3BhcmFtUmVnZXgsICcoW15cXFxcL10qKScpO1xuICBsZXQgc3RyID0gaW5jbHVkZXM/IHVybFBhdHRlcm46IHRoaXMuc3BsaXRTbGFzaGVzKCdeJyArIHVybFBhdHRlcm4gKyAnXFwvJCcpO1xuICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKHN0cik7XG5cbiAgcmV0dXJuIHJlZ2V4LnRlc3QodXJsKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIGN1cnJlbnQgdXJsIGluY2x1ZGVzIGEgc3RhdGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmluQWN0aXZlU3RhdGUgPSBmdW5jdGlvbihzdGF0ZSkge1xuICByZXR1cm4gcm91dGVyLmlzQWN0aXZlU3RhdGUoc3RhdGUsIHRydWUpO1xufTtcblxuLyoqXG4gKiBHZXQgcm91dGUgY29tcG9uZW50IGJ5IGxldmVsXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxldmVsXG4gKi9cbnJvdXRlci5nZXRSb3V0ZSA9IGZ1bmN0aW9uIChsZXZlbCkge1xuICBsZXQgaSA9IDA7XG5cbiAgY29uc3QgZmluZCA9IChlbCkgPT4ge1xuICAgIGxldCByb3V0ZSA9IGVsLmNoaWxkKHRoaXMuX19yb3V0ZVNlbGVjdG9yKTtcblxuICAgIGlmICghcm91dGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChpID09IGxldmVsKSB7XG4gICAgICByZXR1cm4gcm91dGU7XG4gICAgfVxuXG4gICAgaSsrO1xuXG4gICAgcmV0dXJuIGZpbmQocm91dGUpO1xuICB9O1xuXG4gIHJldHVybiBmaW5kKEFraWxpLnJvb3QpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGZpcnN0IG1hdGNoXG4gKlxuICogQHBhcmFtIHthcnJheX0gYXJyXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gKi9cbnJvdXRlci5nZXRBcnJheVBhdHRlcm5Db250ZW50ID0gZnVuY3Rpb24gKGFyciwgdXJsKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IGFycltpXTtcbiAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0UGF0dGVybkNvbnRlbnQoc3RhdGUsIHVybCk7XG5cbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJldHVybiB7c3RhdGU6IHN0YXRlLCAuLi5jb250ZW50fTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBHZXQgc3RhdGVzIGJ5IGxldmVsXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxldmVsXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbnJvdXRlci5nZXRTdGF0ZXNCeUxldmVsID0gZnVuY3Rpb24gKGxldmVsKSB7XG4gIGxldCBzdGF0ZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLmxldmVsIDwgbGV2ZWwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChzdGF0ZS5sZXZlbCA+IGxldmVsKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzdGF0ZXMucHVzaChzdGF0ZSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVzO1xufTtcblxuLyoqXG4gKiBJc29sYXRlIHRoZSBmdW5jdGlvbiB0byBub3QgdHJpZ2dlciByb3V0ZXIgaGFuZGxlcnMgaW5zaWRlXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5yb3V0ZXIuaXNvbGF0ZSA9IGZ1bmN0aW9uKGZuKSB7XG4gIHRoaXMuX19kaXNhYmxlQ2hhbmdlID0gdHJ1ZTtcbiAgbGV0IHJlcyA9IGZuKCk7XG4gIHRoaXMuX19kaXNhYmxlQ2hhbmdlID0gZmFsc2U7XG4gIHJldHVybiByZXM7XG59XG5cbi8qKlxuICogQ2hhbmdlIHN0YXRlXG4gKi9cbnJvdXRlci5jaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uICgpIHsgIFxuICBpZiAodGhpcy5fX2Rpc2FibGVDaGFuZ2UpIHtcbiAgICBkZWxldGUgdGhpcy5fX2Rpc2FibGVDaGFuZ2U7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICBsZXQgdXJsID0gdGhpcy5nZXRVcmwoKTtcbiAgbGV0IGhhc2ggPSB0aGlzLmhhc2hNb2RlPyAnJzogd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTtcbiAgbGV0IHF1ZXJ5ID0gdGhpcy5nZXRVcmxRdWVyeSgpO1xuICBsZXQgcHJldlRyYW5zaXRpb24gPSByb3V0ZXIudHJhbnNpdGlvbiB8fCBudWxsO1xuICBsZXQgdHJhbnNpdGlvbiA9IHJvdXRlci50cmFuc2l0aW9uID0gbmV3IFRyYW5zaXRpb24odXJsLCBxdWVyeSwgaGFzaCwgcHJldlRyYW5zaXRpb24pO1xuICBsZXQgbGV2ZWwgPSAwO1xuXG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc3RhdGUtY2hhbmdlJywgeyBkZXRhaWw6IHRyYW5zaXRpb24gfSkpO1xuXG4gIGNvbnN0IG5leHQgPSAoc3RhdGVzLCBvbkVuZCkgPT4ge1xuICAgIGlmICghc3RhdGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG9uRW5kICYmIG9uRW5kKCk7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldEFycmF5UGF0dGVybkNvbnRlbnQoc3RhdGVzLCB1cmwpO1xuXG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICByZXR1cm4gb25FbmQgJiYgb25FbmQoKTtcbiAgICB9XG5cbiAgICBsZXQgc3RhdGUgPSBjb250ZW50LnN0YXRlO1xuICAgIGxldCBwYXJhbXMgPSBjb250ZW50LnBhcmFtcztcbiAgICBsZXQgcm91dGUgPSBzdGF0ZS5hYnN0cmFjdD8gbnVsbDogdGhpcy5nZXRSb3V0ZShzdGF0ZS5sZXZlbCk7XG5cbiAgICBpZiAoIXJvdXRlICYmICFzdGF0ZS5hYnN0cmFjdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yIChgTm90IGZvdW5kIHJvdXRlIGNvbXBvbmVudCBmb3Igc3RhdGUgXCIke3N0YXRlLm5hbWV9XCJgKTtcbiAgICB9XG5cbiAgICB0cmFuc2l0aW9uLnNldFBhdGgoeyBzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgY29tcG9uZW50OiByb3V0ZSwgbG9hZGVkOiB0cnVlIH0pO1xuICAgIGxldmVsKys7XG5cbiAgICBsZXQgaGFzU3RhdGUgPSBwcmV2VHJhbnNpdGlvbiAmJiBwcmV2VHJhbnNpdGlvbi5oYXNTdGF0ZShzdGF0ZSk7XG4gICAgbGV0IGlzRGlmZmVyZW50ID0gdHJ1ZTtcblxuICAgIGlmIChoYXNTdGF0ZSkge1xuICAgICAgbGV0IHJvdXRlID0gcHJldlRyYW5zaXRpb24uZ2V0Um91dGUoc3RhdGUpO1xuICAgICAgbGV0IHByZXYgPSB7IHBhcmFtczogcm91dGUucGFyYW1zLCBxdWVyeTogcm91dGUucXVlcnksIGhhc2g6IHJvdXRlLmhhc2ggfTtcbiAgICAgIGxldCBjdXJyZW50ID0geyBwYXJhbXMsIHF1ZXJ5LCBoYXNoIH07XG4gICAgICBpc0RpZmZlcmVudCA9ICF1dGlscy5jb21wYXJlKHByZXYsIGN1cnJlbnQpO1xuICAgIH1cblxuICAgIHRyYW5zaXRpb24ucGF0aC5sb2FkZWQgPSBpc0RpZmZlcmVudCAmJiB0aGlzLl9fb3B0aW9ucy5yZWxvYWQgIT09IGZhbHNlO1xuICAgIFxuICAgIFByb21pc2UucmVzb2x2ZSh0cmFuc2l0aW9uLnBhdGgubG9hZGVkPyBzdGF0ZS5oYW5kbGVyKHRyYW5zaXRpb24pOiB0cmFuc2l0aW9uLnBhdGguZGF0YSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKHRyYW5zaXRpb24uX19jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIG9uRW5kICYmIG9uRW5kKCk7XG4gICAgICB9XG5cbiAgICAgIHRyYW5zaXRpb24ucGF0aC5kYXRhID0gZGF0YTtcbiAgICAgIHN0YXRlLnRpdGxlICYmIChkb2N1bWVudC50aXRsZSA9IHR5cGVvZiBzdGF0ZS50aXRsZSA9PSAnZnVuY3Rpb24nPyBzdGF0ZS50aXRsZSh0cmFuc2l0aW9uKTogc3RhdGUudGl0bGUpO1xuXG4gICAgICBpZiAoc3RhdGUuYWJzdHJhY3QpIHtcbiAgICAgICAgcmV0dXJuIG5leHQoc3RhdGUuY2hpbGRyZW4sIG9uRW5kKTtcbiAgICAgIH1cbiBcbiAgICAgIHJvdXRlLnNldFRyYW5zaXRpb24odHJhbnNpdGlvbikudGhlbigoKSA9PiB7XG4gICAgICAgIG5leHQoc3RhdGUuY2hpbGRyZW4sIG9uRW5kKTtcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IG9uRW5kICYmIG9uRW5kKGVycikpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbmV4dCh0aGlzLmdldFN0YXRlc0J5TGV2ZWwoMCksIChlcnIpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRyYW5zaXRpb24ucm91dGVzLmxlbmd0aCkge1xuICAgICAgICBpZiAodGhpcy5fX3JlZGlyZWN0cykge1xuICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKGBXcm9uZyByb3V0ZXIgZGVmYXVsdCB1cmwgXCIke3RoaXMuZGVmYXVsdFVybH1cImApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRVcmwpIHtcbiAgICAgICAgICBpZiAodGhpcy5kZWZhdWx0VXJsID09IHRoaXMuZ2V0VXJsKCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKGBOb3QgZm91bmQgYW55IHJvdXRlc2ApKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9fZGlzYWJsZUNoYW5nZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zZXRVcmwodGhpcy5kZWZhdWx0VXJsKTtcbiAgICAgICAgICB0aGlzLl9fcmVkaXJlY3RzKys7XG5cbiAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2VTdGF0ZSgpLnRoZW4ocmVzb2x2ZSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBOb3QgZm91bmQgYSBkZWZhdWx0IHJvdXRlLiBZb3UgY2FuIHBhc3MgaXQgaW4gXCJyb3V0ZXIuaW5pdChkZWZhdWx0VXJsKVwiIGZ1bmN0aW9uYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKCF0aGlzLl9fb3B0aW9ucy5zYXZlU2Nyb2xsUG9zaXRpb24gJiYgIXRyYW5zaXRpb24uaGFzaCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX19vcHRpb25zID0ge307XG4gICAgICB0aGlzLl9fcmVkaXJlY3RzID0gMDtcblxuICAgICAgaWYgKHByZXZUcmFuc2l0aW9uKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBsZXZlbCwgbCA9IHByZXZUcmFuc2l0aW9uLnJvdXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBsZXQgcm91dGUgPSBwcmV2VHJhbnNpdGlvbi5yb3V0ZXNbaV07XG4gICAgICAgICAgXG4gICAgICAgICAgcm91dGUuY29tcG9uZW50ICYmIHJvdXRlLmNvbXBvbmVudC5lbXB0eSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc3RhdGUtY2hhbmdlZCcsIHsgZGV0YWlsOiB0cmFuc2l0aW9uIH0pKTtcbiAgICAgIHJlc29sdmUodHJhbnNpdGlvbik7ICBcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5yb3V0ZXIuVHJhbnNpdGlvbiA9IFRyYW5zaXRpb247XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvcm91dGVyLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBJZiBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWYgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgdHJhbnNwYXJlbnQgPSB0cnVlO1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbaXNdJztcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydyZWNyZWF0ZSddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpZicsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnZWxzZS1pZicsIHRoaXMuRWxzZUlmKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2Vsc2UnLCB0aGlzLkVsc2UpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5odG1sID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLnN0YXRlID0gZmFsc2U7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnJlY3JlYXRlID0gZmFsc2U7XG4gICAgdGhpcy5pc0NvbXBpbGVkID0gZmFsc2U7XG4gICAgdGhpcy5kaXNwbGF5ID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKS5kaXNwbGF5O1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRyKCdyZWNyZWF0ZScsIHRoaXMuc2V0UmVjcmVhdGlvbik7XG4gICAgcmV0dXJuIHRoaXMuYXR0cignaXMnLCB2YWwgPT4gKHRoaXMuc3RhdGUgPSAhIXZhbCwgdGhpcy5zZXRTdGF0ZSgpKSk7XG4gIH1cblxuICBzZXRBY3Rpdml0eShhY3RpdmUpIHtcbiAgICB0aGlzLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgfVxuXG4gIHNldFJlY3JlYXRpb24ocmVjcmVhdGUpIHtcbiAgICB0aGlzLnJlY3JlYXRlID0gcmVjcmVhdGU7XG4gIH1cblxuICBzZXRTdGF0ZSgpIHtcbiAgICBsZXQgcmVzID0gdGhpcy5jb21waWxhdGlvbigpO1xuICAgIGxldCBuZXh0ID0gdGhpcy5lbC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgbGV0IHJlc3VsdDtcblxuICAgIGlmICghbmV4dCB8fCAhbmV4dC5tYXRjaGVzKCdlbHNlLWlmLGVsc2UnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5leHQuX19ha2lsaS5zZXRBY3Rpdml0eSh0aGlzLmFjdGl2ZSB8fCB0aGlzLnN0YXRlKTtcbiAgICBuZXh0Ll9fYWtpbGkuc2V0UmVjcmVhdGlvbih0aGlzLnJlY3JlYXRlKTtcbiAgICByZXN1bHQgPSBuZXh0Ll9fYWtpbGkuc2V0U3RhdGUoKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcykudGhlbigoKSA9PiAgcmVzdWx0KTtcbiAgfVxuXG4gIGNvbXBpbGF0aW9uKCkge1xuICAgIGxldCByZXM7XG5cbiAgICBpZiAodGhpcy5zdGF0ZSAmJiAhdGhpcy5hY3RpdmUpIHtcbiAgICAgIGlmICh0aGlzLnJlY3JlYXRlIHx8ICF0aGlzLmlzQ29tcGlsZWQpIHtcbiAgICAgICAgcmVzID0gdGhpcy5jb21waWxlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9IHRoaXMuZGlzcGxheTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAodGhpcy5yZWNyZWF0ZSkge1xuICAgICAgICB0aGlzLl9fZW1wdHkoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCF0aGlzLmlzQ29tcGlsZWQpIHtcbiAgICAgICAgcmVzID0gdGhpcy5jb21waWxlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBjb21waWxlKCkge1xuICAgIGxldCByZXM7XG5cbiAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcbiAgICByZXMgPSBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgIHRoaXMuaXNDb21waWxlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG59O1xuXG4vKipcbiAqIEVsc2VJZiBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIEVsc2VJZiBleHRlbmRzIElmIHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogRWxzZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIEVsc2UgZXh0ZW5kcyBFbHNlSWYge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdpcycsICd0cnVlJyk7XG4gIH1cbn1cblxuSWYuRWxzZUlmID0gRWxzZUlmO1xuSWYuRWxzZSA9IEVsc2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaWYuanMiLCJpbXBvcnQgRm9yLCB7IExvb3AgfSBmcm9tICcuL2Zvci5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydtdWx0aXBsZSddO1xuICBzdGF0aWMgZXZlbnRzID0gWydjaGFuZ2UnXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnc2VsZWN0JywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdvcHRpb24nLCB0aGlzLk9wdGlvbik7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLml0ZXJhdG9yVGFnTmFtZSA9ICdvcHRpb24nO1xuICAgIHRoaXMuaXNNdWx0aXBsZSA9IGZhbHNlO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuZWwuY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuICBcbiAgY29tcGlsZWQoKSB7IFxuICAgIGxldCByZXMgPSBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAgIFxuICAgIHRoaXMuYXR0cignbXVsdGlwbGUnLCB0aGlzLnNldE11bHRpcGxlKTtcbiAgICB0aGlzLmF0dHIoJ2NvbnRlbnQnLCB0aGlzLnNldENvbnRlbnQpO1xuICAgIHRoaXMuYXR0cignaW4nLCB0aGlzLmRyYXdTZWxlY3QpO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBzZXRNdWx0aXBsZSh2YWx1ZSkge1xuICAgIHRoaXMuaXNNdWx0aXBsZSA9IHZhbHVlO1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5mb3JtYXRWYWx1ZSh1dGlscy5jb3B5KHRoaXMuZWwuY29udGVudCkpKTtcbiAgfVxuXG4gIHNldENvbnRlbnQodmFsdWUpIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUodmFsdWUpKTtcbiAgfVxuXG4gIGRyYXdTZWxlY3QoKSB7XG4gICAgbGV0IHNlbGVjdGVkID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV0uX19ha2lsaTtcbiAgICAgIGxldCBzZWxlY3Rpb24gPSBvcHRpb24uYXR0cnMuc2VsZWN0ZWQ7XG5cbiAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgc2VsZWN0ZWQucHVzaChvcHRpb24uZWwudmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBvcHRpb24uZWwuc2VsZWN0ZWQgPSBzZWxlY3Rpb247XG4gICAgfVxuXG4gICAgaWYgKCFzZWxlY3RlZC5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVkZWZpbmUoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUoc2VsZWN0ZWQpKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVJdGVyYXRvckVsZW1lbnQoKSB7XG4gICAgbGV0IGVsID0gc3VwZXIuY3JlYXRlSXRlcmF0b3JFbGVtZW50KCk7XG5cbiAgICBpZiAoIWVsLmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRoaXMuaHRtbC50cmltKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIGluQ29udGVudCh2YWx1ZSkge1xuICAgIGlmICghdGhpcy5pc011bHRpcGxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbC5jb250ZW50ID09PSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5lbC5jb250ZW50LmluZGV4T2YodmFsdWUpICE9IC0xO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBpZiAoIXRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZWwudmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnQgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXTtcblxuICAgICAgaWYgKG9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICBjb250ZW50LnB1c2gob3B0aW9uLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGZvcm1hdFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9ICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKT8gW3ZhbHVlXTogW107XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUubGVuZ3RoPyB2YWx1ZVswXTogJyc7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZWRlZmluZSgpIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZ2V0Q29udGVudCgpKTtcbiAgfVxuXG4gIGNoYW5nZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHV0aWxzLmNvbXBhcmUodGhpcy5lbC5jb250ZW50LCB2YWx1ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuZWwudmFsdWUgPSB2YWx1ZVt2YWx1ZS5sZW5ndGggLSAxXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdmFsdWUuaW5kZXhPZihvcHRpb24udmFsdWUpICE9IC0xO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZWwudmFsdWUgPSB2YWx1ZTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gb3B0aW9uLnZhbHVlID09IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZWwuY29udGVudCA9IHZhbHVlO1xuICAgIHRoaXMuYXR0cnMub25DaGFuZ2UuZGlzcGF0Y2goRXZlbnQsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGNsYXNzIE9wdGlvbiBleHRlbmRzIExvb3Age1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ3NlbGVjdGVkJ107XG5cbiAgX19nZXRQYXJzZWRFeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgICByZXR1cm4gdXRpbHMuZGVjb2RlSHRtbEVudGl0aWVzKGV4cHJlc3Npb24pO1xuICB9XG5cbiAgY2hhbmdlZFNlbGVjdGVkKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTZWxlY3RlZCh2YWx1ZSk7XG4gIH1cblxuICBzZXRTZWxlY3RlZCh2YWx1ZSkge1xuICAgIHRoaXMuZWwuc2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICB0aGlzLmZvci5yZWRlZmluZSgpO1xuICB9XG59XG5cblNlbGVjdC5PcHRpb24gPSBPcHRpb247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvc2VsZWN0LmpzIiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnY2hlY2tlZCcsICdtdWx0aXBsZSddO1xuICBzdGF0aWMgZXZlbnRzID0gWydjaGFuZ2UnLCAnZGVib3VuY2UnXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaW5wdXQnLCB0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXNDaGVja2JveCA9IHRoaXMuZWwudHlwZSA9PSAnY2hlY2tib3gnO1xuICAgIHRoaXMuaXNSYWRpbyA9IHRoaXMuZWwudHlwZSA9PSAncmFkaW8nO1xuICAgIHRoaXMuZGVib3VuY2VJbnRlcnZhbCA9IDUwMDtcbiAgICB0aGlzLmRlYm91bmNlVGltZW91dCA9IG51bGw7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIGlmKHRoaXMuaXNSYWRpbyB8fCB0aGlzLmlzQ2hlY2tib3gpIHtcbiAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0Q2hlY2tlZCh0aGlzLmVsLmNoZWNrZWQsIGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ICYmIGNsZWFyVGltZW91dCh0aGlzLmRlYm91bmNlVGltZW91dCk7XG4gICAgICAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5hdHRycy5vbkRlYm91bmNlLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IHRydWUgfSlcbiAgICAgICAgfSwgdGhpcy5kZWJvdW5jZUludGVydmFsKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBpbGVkKCkgeyAgICBcbiAgICB0aGlzLmF0dHIoJ2RlYm91bmNlJywgaW50ZXJ2YWwgPT4gdGhpcy5kZWJvdW5jZUludGVydmFsID0gaW50ZXJ2YWwpO1xuICAgIHJldHVybiBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgcmVzb2x2ZWQoKSB7XG4gICAgKHRoaXMuaXNDaGVja2JveCB8fCB0aGlzLmlzUmFkaW8pICYmIHRoaXMuYXR0cignY2hlY2tlZCcsIHRoaXMuc2V0Q2hlY2tlZCk7XG4gICAgcmV0dXJuIHN1cGVyLnJlc29sdmVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICByZW1vdmVkKCkge1xuICAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ICYmIGNsZWFyVGltZW91dCh0aGlzLmRlYm91bmNlVGltZW91dCk7XG4gIH1cblxuICBzZXRDaGVja2VkKHZhbHVlLCB0cmlnZ2VyID0gdHJ1ZSkge1xuICAgIHZhbHVlID0gISF2YWx1ZTtcblxuICAgIGlmICh0aGlzLnByZXZDaGVja2VkID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZWwuY2hlY2tlZCA9IHRoaXMucHJldkNoZWNrZWQgPSB2YWx1ZTtcbiAgICB0cmlnZ2VyICYmIHRoaXMuYXR0cnMub25DaGFuZ2UuZGlzcGF0Y2goRXZlbnQsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICB0aGlzLmlzUmFkaW8gJiYgdGhpcy5jaGFuZ2VSYWRpbygpO1xuICB9XG5cbiAgc2V0VmFsdWUoKSB7XG4gICAgc3VwZXIuc2V0VmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLmlzUmFkaW8gJiYgdGhpcy5hdHRycy5vbkNoYW5nZS5kaXNwYXRjaChFdmVudCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICB9XG5cbiAgY2hhbmdlUmFkaW8oKSB7XG4gICAgbGV0IG5hbWUgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICAgIGxldCBzZWxlY3RvciA9IGBpbnB1dFt0eXBlPXJhZGlvXVtuYW1lPScke25hbWV9J106bm90KFtzY29wZT0nJHt0aGlzLnNjb3BlLl9fbmFtZX0nXSlgO1xuICAgIGxldCBjaGlsZHJlbiA9IEFraWxpLnJvb3QuY2hpbGRyZW4oc2VsZWN0b3IpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICByYWRpby5zZXRDaGVja2VkKHJhZGlvLmVsLmNoZWNrZWQpO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2lucHV0LmpzIiwiaW1wb3J0IEZvciwgeyBMb29wIH0gZnJvbSAnLi9mb3IuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBUaGUgcmFkaW8gZ3JvdXAgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZGlvIGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW25hbWVdJztcbiAgc3RhdGljIGV2ZW50cyA9IFsncmFkaW8nXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgncmFkaW8nLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JhZGlvLWJ1dHRvbicsIHRoaXMuUmFkaW9CdXR0b24pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pdGVyYWJsZSA9IHRoaXMuZWwuaGFzQXR0cmlidXRlKCdpbicpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLmdldFJhZGlvVmFsdWUoKTtcblxuICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMucHJldlZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5hdHRycy5vblJhZGlvLnRyaWdnZXIodmFsdWUsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYodGhpcy5pdGVyYWJsZSkge1xuICAgICAgcmV0dXJuIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICByZXNvbHZlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ2luJywgKCkgPT4gdGhpcy5zZXROYW1lcyh0aGlzLmF0dHJzLm5hbWUpKTsgICBcbiAgICB0aGlzLmF0dHIoJ3ZhbHVlJywgdGhpcy5zZXRWYWx1ZSk7IFxuICAgIHRoaXMuYXR0cignbmFtZScsIHRoaXMuc2V0TmFtZXMsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHJldHVybiBzdXBlci5yZXNvbHZlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgc2V0TmFtZXMobmFtZSkge1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oJ2lucHV0W3R5cGU9cmFkaW9dJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY2hpbGRyZW5baV0uZWwuc2V0QXR0cmlidXRlKCduYW1lJywgbmFtZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IHRoaXMucHJldlZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHByZXYgPSB0aGlzLnByZXZWYWx1ZTtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuICAgIGxldCBpc1RydWUgPSBmYWxzZTtcblxuICAgIHRoaXMucHJldlZhbHVlID0gdmFsdWU7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJhZGlvID0gY2hpbGRyZW5baV07XG4gICAgICBsZXQgaXNTZWxlY3RlZCA9IHJhZGlvLmVsLnZhbHVlID09PSB2YWx1ZTtcblxuICAgICAgaXNTZWxlY3RlZCAmJiAoaXNUcnVlID0gdHJ1ZSk7XG4gICAgICByYWRpby5zZXRDaGVja2VkKGlzU2VsZWN0ZWQpO1xuICAgIH1cblxuICAgIGlmICghaXNUcnVlKSB7XG4gICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgaWYgKHByZXYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMucHJldlZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hdHRycy5vblJhZGlvLnRyaWdnZXIodmFsdWUsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgfVxuXG4gIGdldFJhZGlvVmFsdWUoKSB7XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbignaW5wdXRbdHlwZT1yYWRpb10nKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcmFkaW8gPSBjaGlsZHJlbltpXTtcblxuICAgICAgaWYgKHJhZGlvLmVsLmNoZWNrZWQpIHtcbiAgICAgICAgcmV0dXJuIHJhZGlvLmVsLnZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIFRoZSByYWRpbyBpdGVtIGNvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgUmFkaW9CdXR0b24gZXh0ZW5kcyBMb29wIHtcbiAgc3RhdGljIHRlbXBsYXRlID0gJzxsYWJlbD48aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIke3RoaXMudmFsdWV9XCIvPiR7dGhpcy5fX2NvbnRlbnR9PC9sYWJlbD4nO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cigndmFsdWUnLCAndmFsdWUnKTtcbiAgICByZXR1cm4gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5SYWRpby5SYWRpb0J1dHRvbiA9IFJhZGlvQnV0dG9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3JhZGlvLmpzIiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRhcmVhIGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0ZXh0YXJlYScsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGV4dGFyZWEuanMiLCJpbXBvcnQgVGV4dCBmcm9tICcuL3RleHQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudCBleHRlbmRzIFRleHQge1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnY29udGVudCcsIHRoaXMpO1xuICAgIEFraWxpLmFsaWFzKCdbY29udGVudGVkaXRhYmxlXScsICdjb250ZW50Jyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICBpZiAodGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ2VkaXRhYmxlJykpIHtcbiAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0aGlzLmVsLmdldEF0dHJpYnV0ZSgnZWRpdGFibGUnKSk7XG4gICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZSgnZWRpdGFibGUnKTtcbiAgICB9XG5cbiAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKS5kaXNwbGF5ID09ICdpbmxpbmUnKSB7XG4gICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIHRoaXMudmFsdWVLZXkgPSAnaW5uZXJIVE1MJztcbiAgfVxuXG4gIHNldEVsZW1lbnRGb2N1cygpIHtcbiAgICBsZXQgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIGxldCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG5cbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGhpcy5lbCk7XG4gICAgcmFuZ2UuY29sbGFwc2UoZmFsc2UpO1xuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2NvbnRlbnQuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluY2x1ZGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgdHJhbnNwYXJlbnQgPSB0cnVlO1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbdXJsXSc7XG4gIHN0YXRpYyBldmVudHMgPSBbJ2xvYWQnLCAnZXJyb3InXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaW5jbHVkZScsIHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5odG1sID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cigndXJsJywgdGhpcy5nZXRUZW1wbGF0ZSk7XG4gIH1cblxuICBnZXRUZW1wbGF0ZSh1cmwpIHtcbiAgICB0aGlzLmNvbm5lY3Rpb24gJiYgdGhpcy5jb25uZWN0aW9uLmFib3J0KCk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQodXJsLCB7XG4gICAgICBvblN0YXJ0OiAoeGhyKSA9PiB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IHhocjtcbiAgICAgIH1cbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gICAgICB0aGlzLmVtcHR5KCk7XG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcbiAgICAgIEFraWxpLnNldFRlbXBsYXRlKHRoaXMuZWwsIHJlcy5kYXRhKTtcblxuICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0cnMub25Mb2FkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgfSk7XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgdGhpcy5hdHRycy5vbkVycm9yLnRyaWdnZXIoZXJyLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaW5jbHVkZS5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWZyYW1lIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaWZyYW1lJywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pZnJhbWUuanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaW1nJywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pbWFnZS5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1iZWQgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdlbWJlZCcsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZW1iZWQuanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnYXVkaW8nLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2F1ZGlvLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlbyBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3ZpZGVvJywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy92aWRlby5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhY2sgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0cmFjaycsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdHJhY2suanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdXJjZSBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3NvdXJjZScsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvc291cmNlLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3RzIGV4dGVuZHMgVXJsIHsgIFxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnVybEF0dHJpYnV0ZSA9ICdkYXRhJztcbiAgfVxuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdvYmplY3QnLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL29iamVjdC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi4vc2VydmljZXMvcm91dGVyLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbc3RhdGVdOm5vdChbdXJsXSksW3VybF06bm90KFtzdGF0ZV0pJztcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gdHJ1ZTtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydyZWxvYWQnXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnYScsIHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IG51bGw7XG4gICAgdGhpcy5wYXJhbXMgPSB7fTtcbiAgICB0aGlzLnF1ZXJ5ID0ge307XG4gICAgdGhpcy5oYXNoID0gJyc7XG4gICAgdGhpcy5vcHRpb25zID0ge307XG4gICAgdGhpcy5pc1VybCA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCd1cmwnKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmICh0aGlzLmlzVXJsKSB7XG4gICAgICAgIHJvdXRlci5sb2NhdGlvbih0aGlzLmF0dHJzLnVybCwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByb3V0ZXIuc3RhdGUodGhpcy5zdGF0ZS5uYW1lLCB0aGlzLnBhcmFtcywgdGhpcy5xdWVyeSwgdGhpcy5oYXNoLCAgdGhpcy5vcHRpb25zKTtcbiAgICB9KTtcblxuICAgIHRoaXMub25TdGF0ZUNoYW5nZWQgPSAoKSA9PiB0aGlzLnN0YXRlICYmIHRoaXMuc2V0QWN0aXZpdHkoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3RhdGUtY2hhbmdlZCcsIHRoaXMub25TdGF0ZUNoYW5nZWQpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRyKCdzdGF0ZScsIHRoaXMuc2V0U3RhdGUpO1xuICAgIHRoaXMuYXR0cigncGFyYW1zJywgdGhpcy5zZXRQYXJhbXMpO1xuICAgIHRoaXMuYXR0cigncXVlcnknLCB0aGlzLnNldFF1ZXJ5KTtcbiAgICB0aGlzLmF0dHIoJ2hhc2gnLCB0aGlzLnNldEhhc2gpO1xuICAgIHRoaXMuYXR0cignb3B0aW9ucycsIHRoaXMuc2V0T3B0aW9ucyk7XG4gICAgdGhpcy5hdHRyKCdyZWxvYWQnLCB0aGlzLnNldFJlbG9hZCk7XG4gICAgdGhpcy5hdHRyKCd1cmwnLCB0aGlzLnNldFVybCk7XG4gICAgdGhpcy5hdHRyKCdzdGF0ZScsICgpID0+IHRoaXMucmVzZXRIcmVmKCksIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cigncGFyYW1zJywgKCkgPT4gdGhpcy5yZXNldEhyZWYoKSwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5hdHRyKCdxdWVyeScsICgpID0+IHRoaXMucmVzZXRIcmVmKCksIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cignaGFzaCcsICgpID0+IHRoaXMucmVzZXRIcmVmKCksIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cigndXJsJywgKCkgPT4gdGhpcy5yZXNldEhyZWYoKSwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5yZXNldEhyZWYoKTtcbiAgfVxuXG4gIHJlbW92ZWQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N0YXRlLWNoYW5nZWQnLCB0aGlzLm9uU3RhdGVDaGFuZ2VkKTtcbiAgfVxuXG4gIHNldFVybCh1cmwpIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgfVxuXG4gIHNldFN0YXRlKG5hbWUpIHtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5nZXRTdGF0ZShuYW1lKTtcbiAgICB0aGlzLnNldEFjdGl2aXR5KCk7XG4gIH1cblxuICBzZXRBY3Rpdml0eSgpIHtcbiAgICB0aGlzLnNjb3BlLmlzQWN0aXZlU3RhdGUgPSByb3V0ZXIuaXNBY3RpdmVTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgICB0aGlzLnNjb3BlLmluQWN0aXZlU3RhdGUgPSByb3V0ZXIuaW5BY3RpdmVTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHNldFBhcmFtcyhwYXJhbXMpIHtcbiAgICBpZiAodHlwZW9mIHBhcmFtcyAhPSAnb2JqZWN0JyB8fCAhcGFyYW1zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBwYXJhbXMgbXVzdCBiZSBhbiBvYmplY3RgKTtcbiAgICB9XG5cbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgfVxuXG4gIHNldFF1ZXJ5KHF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeSAhPSAnb2JqZWN0JyB8fCAhcXVlcnkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIHF1ZXJ5IG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICB9XG5cbiAgc2V0SGFzaChoYXNoKSB7XG4gICAgaWYgKHR5cGVvZiBoYXNoICE9ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBoYXNoIG11c3QgYmUgYSBzdHJpbmdgKTtcbiAgICB9XG5cbiAgICB0aGlzLmhhc2ggPSBoYXNoO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zICE9ICdvYmplY3QnIHx8ICFvcHRpb25zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBvcHRpb25zIG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIHNldFJlbG9hZCh2YWwpIHtcbiAgICB0aGlzLm9wdGlvbnMucmVsb2FkID0gdmFsO1xuICB9XG5cbiAgZ2V0U3RhdGUobmFtZSkge1xuICAgIGxldCBzdGF0ZSA9IHJvdXRlci5nZXRTdGF0ZShuYW1lKTtcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIHJvdXRlciBzdGF0ZSB3aXRoIG5hbWUgXCIke25hbWV9XCJgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICByZXNldEhyZWYoKSB7XG4gICAgaWYgKHRoaXMudXJsKSB7XG4gICAgICB0aGlzLmF0dHJzLmhyZWYgPSB0aGlzLnVybDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmF0dHJzLmhyZWYgPSByb3V0ZXIuY3JlYXRlU3RhdGVVcmwodGhpcy5zdGF0ZSwgdGhpcy5wYXJhbXMsIHRoaXMucXVlcnksIHRoaXMuaGFzaCk7XG4gICAgfVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYS5qcyJdLCJzb3VyY2VSb290IjoiIn0=