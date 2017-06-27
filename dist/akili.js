/*!
 * Akili is a javascript framework
 * 
 * const Akili = makeItEasy(js + html);
 * 
 * @version 0.2.3
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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

var _component2 = __webpack_require__(1);

var _component3 = _interopRequireDefault(_component2);

var _if = __webpack_require__(12);

var _if2 = _interopRequireDefault(_if);

var _for = __webpack_require__(5);

var _for2 = _interopRequireDefault(_for);

var _select = __webpack_require__(18);

var _select2 = _interopRequireDefault(_select);

var _input = __webpack_require__(16);

var _input2 = _interopRequireDefault(_input);

var _radio = __webpack_require__(17);

var _radio2 = _interopRequireDefault(_radio);

var _text = __webpack_require__(4);

var _text2 = _interopRequireDefault(_text);

var _textarea = __webpack_require__(19);

var _textarea2 = _interopRequireDefault(_textarea);

var _content = __webpack_require__(10);

var _content2 = _interopRequireDefault(_content);

var _include = __webpack_require__(15);

var _include2 = _interopRequireDefault(_include);

var _iframe = __webpack_require__(13);

var _iframe2 = _interopRequireDefault(_iframe);

var _image = __webpack_require__(14);

var _image2 = _interopRequireDefault(_image);

var _embed = __webpack_require__(11);

var _embed2 = _interopRequireDefault(_embed);

var _route = __webpack_require__(6);

var _route2 = _interopRequireDefault(_route);

var _a = __webpack_require__(9);

var _a2 = _interopRequireDefault(_a);

var _scope = __webpack_require__(20);

var _scope2 = _interopRequireDefault(_scope);

var _eventEmitter = __webpack_require__(7);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

var _request = __webpack_require__(3);

var _request2 = _interopRequireDefault(_request);

var _router = __webpack_require__(8);

var _router2 = _interopRequireDefault(_router);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Javascript framework
 *
 * const Akili = makeItEasy(js + html);
 *
 * @author Alexandr Balasyan <mywebstreet@gmail.com>
 * @link http://akilijs.com
 */

var Akili = {};

Akili.options = {
  nestedWatching: true,
  showEvaluationErrors: true,
  debug: true
};

Akili.__init = null;
Akili.__components = {};
Akili.__aliases = {};
Akili.__scopes = {};
Akili.__window = {};
Akili.__isolation = null;
Akili.__evaluation = null;
Akili.__html = window.document.documentElement;
Akili.__serverRendering = false;

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
  var scope = this.__scopes[name];

  scope.__component = null;
  scope.__el = null;
  scope.__parent = null;
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

  var _loop = function _loop(i, l) {
    var prop = props[i];

    if (prop.isDeleted) {
      prop.component.__evaluateByKeys(prop.keys, undefined, true);

      return 'continue';
    }

    _utils2.default.setPropertyByKeys(prop.keys, prop.component.scope, function (last, val) {
      if (!last) {
        return val || {};
      }

      return prop.value;
    });
  };

  for (var i = 0, l = props.length; i < l; i++) {
    var _ret = _loop(i, l);

    if (_ret === 'continue') continue;
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
  var evaluation = this.__isolation;
  var res = void 0;

  this.__isolation = null;
  res = fn();
  this.__isolation = evaluation;

  return res;
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

  var _loop2 = function _loop2(i, l) {
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
          return old.apply(_this4, _arguments);
        }

        return Akili.isolate(function () {
          return old.apply(_this4, _arguments);
        });
      });
    };
  };

  for (var i = 0, l = keys.length; i < l; i++) {
    var _ret2 = _loop2(i, l);

    if (_ret2 === 'continue') continue;
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
  window.Promise && (window.Promise.constructor = this.createCallbackIsolation(window.Promise.constructor, 0));
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

      return Akili.unevaluated(function () {
        return Akili.isolate(function () {
          return fn.apply(_this5, _arguments2);
        });
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
 * @param {number|string} [pos="last"]
 * @returns {Function}
 */
Akili.createCallbackIsolation = function (fn) {
  var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'last';

  return function () {
    var args = [].slice.call(arguments);
    var callback = pos == 'last' ? args[args.length - 1] : args[pos];

    if (typeof callback != 'function') {
      return fn.apply(this, arguments);
    }

    args[0] = function () {
      return Akili.unevaluated(function () {
        return Akili.isolate(function () {
          return callback();
        });
      });
    };

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
    var _arguments3 = arguments;

    context = context || this;

    return Akili.unevaluated(function () {
      return Akili.isolate(function () {
        return fn.apply(context, _arguments3);
      });
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
  this.__serverRendering && (this.__html.style.visibility = 'visible');
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

  var serverP = Promise.resolve();
  var server = this.__html.getAttribute('akili-server');

  this.__root = root || document.querySelector("html");
  this.__serverRendering = !!server;

  if (server) {
    this.__html.innerHTML = '';
    this.__html.style.visibility = 'hidden';

    serverP = _request2.default.get(server).then(function (res) {
      _this7.__html.innerHTML = res.data;
    });
  }

  return serverP.then(function () {
    return _this7.compile(_this7.__root).then(function () {
      if (_router2.default.__init) {
        return _router2.default.changeState();
      }
    }).then(function () {
      _this7.triggerInit(true);
    }).catch(function (err) {
      _this7.triggerInit(false);
      throw err;
    });
  });
};

/**
 * Denitialize the application
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
  _content2.default.define();
  _component3.default.define();
  _embed2.default.define();
  _for2.default.define();
  _include2.default.define();
  _iframe2.default.define();
  _image2.default.define();
  _input2.default.define();
  _if2.default.define();
  _radio2.default.define();
  _route2.default.define();
  _select2.default.define();
  _textarea2.default.define();
};

Akili.Component = _component3.default;
Akili.EventEmitter = _eventEmitter2.default;
Akili.Scope = _scope2.default;
Akili.utils = _utils2.default;
Akili.components.A = _a2.default;
Akili.components.Content = _content2.default;
Akili.components.For = _for2.default;
Akili.components.Embed = _embed2.default;
Akili.components.If = _if2.default;
Akili.components.Include = _include2.default;
Akili.components.Input = _input2.default;
Akili.components.Iframe = _iframe2.default;
Akili.components.Image = _image2.default;
Akili.components.Radio = _radio2.default;
Akili.components.Route = _route2.default;
Akili.components.Select = _select2.default;
Akili.components.Text = _text2.default;
Akili.components.Textarea = _textarea2.default;
Akili.services.request = _request2.default;
Akili.services.router = _router2.default;

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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

var _request = __webpack_require__(3);

var _request2 = _interopRequireDefault(_request);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var evaluationRegex = /\${(((?!\${).)*)}/;
var evaluationRegexGlobal = new RegExp(evaluationRegex.source, "g");
var systemAttributes = ['component', 'scope'];

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
     * @param {Event} [event=null]
     */

  }, {
    key: 'parse',
    value: function parse(context, expression) {
      var event = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      return function (expression, event) {
        return eval(expression);
      }.call(context, expression, event);
    }
  }]);

  function Component(el) {
    var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Component);

    this.__isSystemKey = function (key) {
      if (key == '__' || key[0] == '_' && key[1] == '_') {
        return true;
      } else if (['constructor'].indexOf(key) != -1) {
        return true;
      }

      return false;
    };

    this.__isMounted = false;
    this.__isCompiled = false;
    this.__cancelled = false;
    this.__bindings = {};
    this.__evaluatingEvent = null;
    this.__recompiling = null;
    this.__compiling = {};
    this.__disableProxy = null;
    this.__children = [];
    this.__parent = null;
    this.__parents = [];
    this.__attrs = {};
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
      this.__evaluationComponent.__disableProxy = null;
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
        _this.created(_this.attrs);
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
          _this2.attrs.onCompiled && _this2.attrs.onCompiled.trigger();

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
          _this2.attrs.onRecompiled && _this2.attrs.onRecompiled.trigger();
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

      this.attrs.onResolved && this.attrs.onResolved.trigger();
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
      var nestedWatching = _akili2.default.options.nestedWatching;
      var controlAttributes = this.constructor.controlAttributes;
      var events = this.constructor.events;

      if (this.constructor.template) {
        _akili2.default.setTemplate(this.el, this.constructor.template);
      }

      if (this.constructor.templateUrl) {
        this.__content = this.el.innerHTML;
        this.el.innerHTML = '';
      }

      if (this.constructor.nestedWatching !== undefined) {
        nestedWatching = this.constructor.nestedWatching;
      } else if (Scope.nestedWatching !== undefined) {
        nestedWatching = Scope.nestedWatching;
      }

      this.__scope = __scope;
      this.__events = events;
      this.__nestedWatching = nestedWatching;
      this.__controlAttributes = controlAttributes;

      _akili2.default.addScope(scope);

      if (nestedWatching) {
        scope = this.__nestedObserve(_scope, []);
      } else {
        scope = this.__observe(_scope, []);
      }

      this.scope = scope;
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

        if (!_utils2.default.comparePreviousValue(value, prop.value, prop.copy, _utils2.default.copy(value))) {
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

      return !_utils2.default.comparePreviousValue(value, prop.value, prop.copy, _utils2.default.copy(value));
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

      var res = node.__expression.replace(evaluationRegexGlobal, function (m, d) {
        counter++;

        var evaluate = void 0;
        var evaluation = void 0;
        var existingBindings = {};
        var parseValue = node.__component.__getParsedExpression(d);

        _akili2.default.__evaluation = { node: node, list: [] };

        try {
          evaluate = _this4.constructor.parse(_this4.__evaluationComponent.scope, parseValue);
        } catch (err) {
          var message = 'Scope parsing error in the template expression: ' + node.__expression;

          if (!_akili2.default.options.showEvaluationErrors) {
            if (_akili2.default.options.debug) {
              console.warn(message);
              console.warn(err.stack);
            }

            evaluate = undefined;
          } else {
            console.error(message);
            throw err;
          }
        }

        evaluation = _akili2.default.__evaluation ? _akili2.default.__evaluation.list : [];
        _akili2.default.__evaluation.list = null;
        _akili2.default.__evaluation = null;

        for (var i = evaluation.length - 1; i >= 0; i--) {
          var data = evaluation[i];
          var hash = data.component.__scope.__name + '.' + data.keysString;

          if (data.notBinding) {
            continue;
          }

          if (existingBindings[hash]) {
            continue;
          }

          var parentValue = _utils2.default.getPropertyByKeys(data.parents, data.component.__scope);
          var evalComponent = node.__attributeOf || node.__component;

          if (_utils2.default.isScopeProxy(parentValue) && data.component !== evalComponent.__evaluationComponent) {
            continue;
          }

          var bind = data.component.__getBoundNode(data.keys, node);
          var value = _utils2.default.getPropertyByKeys(data.keys, data.component.__scope);

          if (!bind) {
            data.component.__bind(data.keys, { node: node });
          }

          data.component.__setNodeProperty(node, data.keys, value);
          existingBindings[hash] = true;
        }

        existingBindings = null;
        evaluation = null;

        if (node instanceof Attr) {
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

      if (node instanceof Attr) {
        var value = res;
        var isBooleanAttribute = false;

        if (counter) {
          node.__hasBindings = true;
        }

        if (counter == 1 && expression && node.__expression == expression) {
          value = attributeValue;
        }

        var clearAttribute = node.nodeName.replace(/^boolean-(.+)/i, '$1');

        if (clearAttribute != node.nodeName) {
          isBooleanAttribute = true;
          value = !!value;
        }

        if (node.__attributeOn) {
          var component = node.__attributeOn;

          component.__disableAttributeSetter = true;
          component.attrs[_utils2.default.toCamelCase(clearAttribute)] = value;
          component.__disableAttributeSetter = false;

          if (component.__isCompiled) {
            _akili2.default.isolate(function () {
              component.attrs.onChanged && component.attrs.onChanged.trigger({ key: clearAttribute, value: value });
              component.changed(clearAttribute, value);

              var key = _utils2.default.toCamelCase(clearAttribute);
              var camelKey = key[0].toUpperCase() + key.slice(1);
              var fnName = 'changed' + camelKey;
              var evFnName = 'onChanged' + camelKey;

              component.attrs[evFnName] && component.attrs[evFnName].trigger(value);

              if (typeof component[fnName] == 'function') {
                component[fnName](value);
              }
            });
          }
        } else if (isBooleanAttribute) {
          var element = node.__element;
          var attr = _utils2.default.toCamelCase(clearAttribute);

          value ? element.setAttribute(attr, 'true') : element.removeAttribute(attr);
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
              component.__disableProxy = true;
              component.__evaluateNode(bind.node);

              for (var _k in bind.node.__properties) {
                if (!bind.node.__properties.hasOwnProperty(_k)) {
                  continue;
                }

                var _prop = bind.node.__properties[_k];
                var _value = _utils2.default.getPropertyByKeys(_prop.keys, _prop.component.__scope);

                _prop.component.__setNodeProperty(bind.node, _prop.keys, _value);
              }

              component.__disableProxy = null;
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
  }, {
    key: '__evaluateByKeys',


    /**
     * Evaluate value by keys
     *
     * @param {string[]} keys
     * @param {*} value
     * @param {boolean} [isDeleted=false] - true if value is deleting
     * @protected
     */
    value: function __evaluateByKeys(keys, value) {
      var _this5 = this;

      var isDeleted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var data = this.__getBind(keys);

      var unbind = function unbind(obj, parents) {
        for (var k in obj) {
          if (!obj.hasOwnProperty(k) || k == '__data') {
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

      this.__disableProxy = null;
      evaluate = this.constructor.parse(this.__evaluationComponent.scope, expression[1], e);
      this.__evaluatingEvent = null;

      return evaluate;
    }

    /**
     * Check changes and evaluate the passed node
     *
     * @param {Node} node
     * @protected
     */

  }, {
    key: '__evaluateNode',
    value: function __evaluateNode(node) {
      if (this.__checkEvaluation(node)) {
        node[node instanceof Attr ? 'value' : 'nodeValue'] = this.__evaluate(node);
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

      node.__expression = node[node instanceof Attr ? 'value' : 'nodeValue'];
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

          if (_this7.__disableProxy) {
            return target[key];
          }

          if (_this7.__isSystemKey(key)) {
            return target[key];
          }

          if (typeof target[key] == 'function') {
            var realTarget = _utils2.default.getOwnPropertyTarget(target, key);

            if (!_utils2.default.isPlainObject(realTarget)) {
              realTarget[key] = _akili2.default.isolateFunction(realTarget[key], realTarget.__component);
            }
          }

          if (_akili2.default.__evaluation) {
            var keys = [].concat(parents, [key]);
            var notBinding = false;

            if (!(key in target)) {
              target[key] = undefined;
            } else if (!_utils2.default.getEnumerablePropertyTarget(target, key)) {
              notBinding = true;
            }

            _this7.__bindNode(_akili2.default.__evaluation.list, keys, parents, target[key], notBinding);

            return target[key];
          }

          return target[key];
        },
        set: function set(target, key, value) {
          if (_this7.__disableProxy) {
            target[key] = value;

            return true;
          }

          if (_this7.__isSystemKey(key)) {
            target[key] = value;

            return true;
          }

          var keys = [].concat(parents, [key]);

          if (_this7.__nestedWatching) {
            target[key] = _this7.__nestedObserve(value, keys);
          } else {
            target[key] = value;
          }

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

          if (_this7.__disableProxy) {
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
     * Check key is system
     *
     * @param {string} key
     * @returns {boolean}
     */

  }, {
    key: '__nestedObserve',


    /**
     * Nested observing the value
     *
     * @param {*} value
     * @param {string[]} [startKeys]
     * @protected
     */
    value: function __nestedObserve(value, startKeys) {
      var _this8 = this;

      this.__disableProxy = true;

      var observe = function observe(value, parents) {
        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) != 'object' || value === null) {
          return value;
        }

        if (!_utils2.default.isPlainObject(value) && !_utils2.default.isScopeProxy(value) && !(value instanceof _akili2.default.Scope)) {
          return value;
        }

        var target = value;

        if (value.__isProxy) {
          target = value.__target;

          if (!_this8.__disableProxyRedefining) {
            if (value.__component !== _this8) {
              target = _utils2.default.copy(target, false);
              value = target;
            } else if (_akili2.default.joinBindingKeys(parents) != _akili2.default.joinBindingKeys(value.__keys)) {
              value = target;
            }
          }
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
          return _this8.__observe(target, parents);
        }

        return value;
      };

      var res = observe(value, startKeys || []);

      this.__disableProxy = null;

      return res;
    }
  }, {
    key: '__createIsolationObject',


    /**
     * Create isolation object
     *
     * @param {string[]} parents
     * @param {string} key
     * @param {boolean} [isDeleted=false]
     * @returns {*}
     * @protected
     */
    value: function __createIsolationObject(parents, key) {
      var isDeleted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var keys = parents.length ? [parents[0]] : [key];
      var isolationKey = this.__scope.__name + '.' + _akili2.default.joinBindingKeys(keys);

      if (parents.length) {
        isDeleted = false;
      }

      if (!_akili2.default.__isolation[isolationKey]) {
        _akili2.default.__isolation[isolationKey] = {
          component: this,
          keys: keys
        };
      }

      isDeleted !== undefined && (_akili2.default.__isolation[isolationKey].isDeleted = isDeleted);
      _akili2.default.__isolation[isolationKey].value = _utils2.default.getPropertyByKeys(keys, this.__scope);

      return _akili2.default.__isolation[isolationKey];
    }
  }, {
    key: '__bindNode',


    /**
     * Prepare the node to binding
     *
     * @param {object} bind - by default is component.__evaluation.list
     * @param {string[]} keys
     * @param {string[]} parents
     * @param {*} value
     * @param {boolean} [notBinding=false]
     * @protected
     */
    value: function __bindNode(bind, keys, parents, value) {
      var notBinding = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      var parentKeysString = _akili2.default.joinBindingKeys(parents);

      if (bind.length && !notBinding) {
        var l = bind.length - 1;
        var data = bind[l];

        if (data.keysString == parentKeysString && data.component === this) {
          bind.splice(l, 1);
        }
      }

      bind.push({
        component: this,
        keysString: _akili2.default.joinBindingKeys(keys),
        parents: parents,
        keys: keys,
        value: value,
        notBinding: notBinding
      });
    }
  }, {
    key: '__getBind',


    /**
     * Get binding by keys
     *
     * @param {string[]} keys
     * @returns {object|null}
     * @protected
     */
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
     * Set node property
     *
     * @param {Node} node
     * @param {string[]} keys
     * @param {*} value
     * @returns {boolean}
     * @protected
     */

  }, {
    key: '__setNodeProperty',
    value: function __setNodeProperty(node, keys, value) {
      var prop = this.__getNodeProperty(node, keys);
      var copy = _utils2.default.copy(value);

      if (prop) {
        var res = _utils2.default.comparePreviousValue(value, prop.value, prop.copy, copy);

        prop.value = value;
        prop.copy = copy;

        return !res;
      }

      var hash = this.__scope.__name + '.' + _akili2.default.joinBindingKeys(keys);

      node.__properties[hash] = {
        value: value,
        copy: copy,
        component: this,
        keys: keys
      };

      return true;
    }

    /**
     * Get node property
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
     * Delete node property
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
     * Unbind keys
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
     * Unbind by nodes
     *
     * @param {Node[]} nodes
     * @protected
     */

  }, {
    key: '__unbindByNodes',
    value: function __unbindByNodes(nodes) {
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
          } else {
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
      var clear = function clear(obj, parent, key) {
        for (var k in obj) {
          if (!obj.hasOwnProperty(k)) {
            continue;
          }

          var val = obj[k];

          if (k == '__data' && (!val || !val.length)) {
            delete obj[k];
          } else if (k != '__data') {
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
      this.attrs.onRemoved && this.attrs.onRemoved.trigger();
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
     * @param {number|number[]} [levels]
     * @returns {Component|Component[]}
     * @protected
     */

  }, {
    key: '__getParent',
    value: function __getParent() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var findAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var levels = arguments[2];

      var arr = [];
      var level = 0;

      if (levels !== undefined && !Array.isArray(levels)) {
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
     * @param {number|number[]} [levels]
     * @returns {Component|Component[]}
     * @protected
     */

  }, {
    key: '__getChildren',
    value: function __getChildren() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var findAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var levels = arguments[2];

      var arr = [];
      var level = 0;

      if (levels !== undefined && !Array.isArray(levels)) {
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
     * @param {number|number[]} [levels]
     * @returns {Component}
     */

  }, {
    key: 'parent',
    value: function parent() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var levels = arguments[1];

      return this.__getParent(selector, false, levels);
    }

    /**
     * Get array of parent components by selector
     *
     * @param {string|function} [selector='']
     * @param {number|number[]} [levels]
     * @returns {Component[]}
     */

  }, {
    key: 'parents',
    value: function parents() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var levels = arguments[1];

      return this.__getParent(selector, true, levels);
    }

    /**
     * Get closest child component by selector
     *
     * @param {string|function} [selector='']
     * @param {number|number[]} [levels]
     * @returns {Component}
     */

  }, {
    key: 'child',
    value: function child() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var levels = arguments[1];

      return this.__getChildren(selector, false, levels);
    }

    /**
     * Get array of child components by selector
     *
     * @param {string|function} [selector='']
     * @param {number|number[]} [levels]
     * @returns {Component[]}
     */

  }, {
    key: 'children',
    value: function children() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var levels = arguments[1];

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
    key: 'changed',
    value: function changed(key, value) {}
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
;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _eventEmitter = __webpack_require__(7);

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
 * // returns [{x:1}, {x:11}]
 * utils.filter([{x:1}, {x:2}, {x:3}, {x:11}], '1', ['x']);
 *
 * @param {Array} arr
 * @param {string|RegExp|function} handler - type of filtering
 * @param {string[]|string} [keys] - filter in the keys if array elements are object
 * @returns {Array} - returns other array
 */
utils.filter = function (arr, handler) {
  var keys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var res = [];

  if (!Array.isArray(keys)) {
    keys = [keys];
  }

  if (!handler) {
    return [].concat(_toConsumableArray(arr));
  }

  for (var i = 0, l = arr.length; i < l; i++) {
    var item = arr[i];
    var val = keys.length ? this.getPropertyByKeys(keys, item) : item;

    if (!val) {
      continue;
    }

    val += '';

    if (typeof handler == 'function' && handler(item)) {
      res.push(item);
    } else if (val.match(handler || '')) {
      res.push(item);
    }
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
 * @returns {*}
 */
utils.copy = function (value) {
  var nested = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) != 'object' || !value) {
    return value;
  }

  function next(obj) {
    obj = Array.isArray(obj) ? [].concat(_toConsumableArray(obj)) : _extends({}, obj);

    if (!nested) {
      return obj;
    }

    for (var k in obj) {
      if (!obj.hasOwnProperty(k)) {
        continue;
      }

      if (obj[k] && _typeof(obj[k]) == 'object') {
        obj[k] = next(obj[k]);
      }
    }

    return obj;
  }

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
 * @returns {boolean}
 */
utils.compare = function (a, b) {
  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }
  if (typeof a == 'function' && typeof b == 'function') {
    return a.toString() === b.toString();
  } else if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) == 'object' && (typeof b === 'undefined' ? 'undefined' : _typeof(b)) == 'object') {
    if (a === null || b === null) {
      return a === b;
    }

    if (Object.keys(a).length != Object.keys(b).length) {
      return false;
    }

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
 * Compare current value with previous
 *
 * @param {*} current - the current value
 * @param {*} previous - the current value copy
 * @param {*} previousCopy - the previous value copy
 * @param {*} [currentCopy] - the current value copy
 * @returns {boolean}
 */
utils.comparePreviousValue = function (current, previous, previousCopy, currentCopy) {
  if (current !== previous) {
    return false;
  }

  return this.compare(arguments.length == 3 ? currentCopy : this.copy(current), previousCopy);
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
 * Clear value proxy if it existent
 *
 * @param {*} value
 * @returns {*}
 */
utils.clearScopeProxy = function (value) {
  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) != 'object' || !value) {
    return value;
  }

  var clear = function clear(obj) {
    for (var k in obj) {
      if (!obj.hasOwnProperty(k)) {
        continue;
      }

      if (obj[k] && _typeof(obj[k]) == 'object') {
        if (obj[k].__isProxy) {
          obj[k] = obj[k].__target;
        }

        clear(obj[k]);
      }
    }
  };

  if (value.__isProxy) {
    value = value.__target;
  }

  clear(value);

  return value;
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Request = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(2);

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
        var url = void 0;
        var xhr = void 0;

        options = _extends({}, _this.defaults, options || {});

        xhr = new XMLHttpRequest();
        typeof options.onStart == 'function' && options.onStart(xhr);
        options = _this.transformBefore(options);
        url = _this.baseUrl ? '' + _this.baseUrl + options.url.replace(/^\//, '') : options.url;
        xhr.open(options.method, url, true, options.user, options.password);
        options.headers = options.headers || {};

        if (options.json) {
          options.body = JSON.stringify(options.json);
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

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
    key: 'changedValue',
    value: function changedValue(value) {
      this.setValue(value);
    }
  }, {
    key: 'changedFocus',
    value: function changedFocus(value) {
      this.setFocus(value);
    }
  }, {
    key: 'compiled',
    value: function compiled() {
      this.attrs.hasOwnProperty('focus') && this.setFocus(this.attrs.focus);
      this.attrs.hasOwnProperty('value') && this.setValue(this.attrs.value);
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
;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loop = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

var _utils = __webpack_require__(2);

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
      _akili2.default.component('for', For);
      _akili2.default.component('ol', For);
      _akili2.default.component('ul', For);
      _akili2.default.component('thead', For);
      _akili2.default.component('tbody', For);
      _akili2.default.component('tfoot', For);
      _akili2.default.component('tr', Loop);
      _akili2.default.component('loop', Loop);
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
    _this.iterators = {};
    _this.iteratorRef = null;
    _this.iteratorOuterHTML = null;
    return _this;
  }

  _createClass(For, [{
    key: 'changedIn',
    value: function changedIn(data) {
      this.draw(data);
    }
  }, {
    key: 'created',
    value: function created() {
      this.createIterator();
    }
  }, {
    key: 'compiled',
    value: function compiled() {
      this.draw(this.attrs.in);
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
        throw new Error('"For" component must have at least one child');
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
    value: function loop(key, value, keys, index) {
      var _this2 = this;

      this.__index = index;
      this.__key = key;
      this.__value = value;
      this.__comparisonValue = _utils2.default.copy(value);

      var hash = '';
      var found = 0;

      if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object' && value.__hash) {
        hash = value.__hash;
      }

      if (this.iterators[hash]) {
        key = hash;
        found = 2;
      } else if (this.iterators[key]) {
        found = 1;
      }

      if (found) {
        var iterator = this.iterators[key];

        if (found == 2) {
          var cValue = iterator.comparsion.value;
          var cCopy = iterator.comparsion.copy;

          if (this.__index !== iterator.index) {
            iterator.setIndex();
          }

          if (this.__key !== iterator.key) {
            iterator.setKey();
          }

          if (!_utils2.default.comparePreviousValue(value, cValue, cCopy, this.__comparisonValue)) {
            iterator.setValue();
          }

          keys[key] = iterator;
          delete this.iterators[key];

          return iterator;
        }

        this.iteratorRef = iterator.el.nextSibling;
        iterator.__destroy();
      }

      var el = this.createIteratorElement();

      el.innerHTML = this.html;
      this.el.insertBefore(el, this.iteratorRef);
      _akili2.default.compile(el);

      if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
        if (!value.__hash) {
          hash = _utils2.default.createRandomString(32, function (str) {
            return _this2.iterators[str];
          });

          Object.defineProperty(value, '__hash', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: hash
          });
        }

        keys[hash] = this.__iterator;
        delete this.iterators[hash];
      } else {
        if (_akili2.default.options.debug) {
          var eValue = typeof this.__value == 'string' ? '"' + this.__value + '"' : this.__value;

          var args = ['"For" component loop items should have "object" type for higher performance.', 'You can change ' + eValue + ' to {value: ' + eValue + '}, for example.'];

          console.warn.apply(console.warn, args);
        }

        keys[key] = this.__iterator;
        delete this.iterators[key];
      }

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

      var keys = {};
      var indexKeys = [];
      var lastElement = null;
      var last = this.el.children[this.el.children.length - 1];

      if (last && !(last.__akili instanceof Loop)) {
        lastElement = last;
      }

      if (Array.isArray(data)) {
        for (var i = 0, l = data.length; i < l; i++) {
          indexKeys.push(this.loop(i, data[i], keys, i));
        }
      } else {
        var _i = 0;

        for (var k in data) {
          if (!data.hasOwnProperty(k)) {
            continue;
          }

          indexKeys.push(this.loop(k, data[k], keys, _i));
          _i++;
        }
      }

      for (var _i2 = 0, _l = indexKeys.length; _i2 < _l; _i2++) {
        var iterator = indexKeys[_i2];

        this.el.appendChild(iterator.el);
        iterator.iterate(_i2);
      }

      lastElement && this.el.appendChild(lastElement);

      for (var _k in this.iterators) {
        if (!this.iterators.hasOwnProperty(_k)) {
          continue;
        }

        this.iterators[_k].__destroy();
      }

      this.iterators = keys;
    }
  }]);

  return For;
}(_component2.default);

For.matches = '[in]';
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
      this.setIndex();
      this.setKey();
      this.setValue();

      this.isFor && _get(Loop.prototype.__proto__ || Object.getPrototypeOf(Loop.prototype), 'created', this).apply(this, arguments);
    }
  }, {
    key: 'compiled',
    value: function compiled() {
      this.isFor && _get(Loop.prototype.__proto__ || Object.getPrototypeOf(Loop.prototype), 'compiled', this).apply(this, arguments);
    }
  }, {
    key: 'setIndex',
    value: function setIndex() {
      this.index = this.for.__index;
      this.scope.__set('loopIndex', this.index);
    }
  }, {
    key: 'setKey',
    value: function setKey() {
      this.key = this.for.__key;
      this.scope.__set('loopKey', this.key);
    }
  }, {
    key: 'setValue',
    value: function setValue() {
      this.value = this.for.__value;
      this.scope.__set('loopValue', this.value, true);

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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

var _request = __webpack_require__(3);

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
      _akili2.default.component('route', Route);
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
      var p = Promise.resolve();

      function getParentScopeTransition(path) {
        if (path.parent) {
          if (path.parent.component) {
            return path.parent.component.__scope.__transition.path;
          }

          return getParentScopeTransition(path.parent);
        }

        return null;
      }

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

      if (state.template) {
        this.empty();
        this.el.innerHTML = '<component>' + state.template + '</component>';
      }

      if (state.templateUrl) {
        p = _request2.default.get(state.templateUrl).then(function (res) {
          _this2.empty();
          _this2.el.innerHTML = '<component>' + res.data + '</component>';
        });
      }

      return p.then(function () {
        return _akili2.default.compile(_this2.el, { recompile: true });
      });
    }
  }]);

  return Route;
}(_component2.default);

exports.default = Route;
;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
  function EventEmitter(name, el, component) {
    _classCallCheck(this, EventEmitter);

    this.name = name;
    this.el = el;
    this.component = component;
  }

  /**
   * Trigger the event
   *
   * @param {*} data - sending data. Will be in the event.detail
   * @param {object} [options]
   * @param {boolean} [force]
   */


  _createClass(EventEmitter, [{
    key: "trigger",
    value: function trigger(data) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { bubbles: false };
      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (force || !this.inEvaluating()) {
        this.el.dispatchEvent(new CustomEvent(this.name, _extends({ detail: data }, options)));
      }
    }

    /**
     * Dispatch the event
     *
     * @param {Event} _Event - class of the event
     * @param {object} [options]
     * @param {boolean} [force]
     */

  }, {
    key: "dispatch",
    value: function dispatch(_Event) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { bubbles: false };
      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (force || !this.inEvaluating()) {
        this.el.dispatchEvent(new _Event(this.name, options));
      }
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
;

/***/ }),
/* 8 */
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

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _request = __webpack_require__(3);

var _request2 = _interopRequireDefault(_request);

var _route2 = __webpack_require__(6);

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
    this.states = [];
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
      this.states.push(path.state);
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
      return this.states.indexOf(state) != -1;
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

  var defaultOptions = {
    template: '',
    templateUrl: '',
    abstract: false,
    handler: function handler(transition) {}
  };

  if (!options.template && !options.templateUrl) {
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
    window.location.hash = url;
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
    });;

    return res;
  };

  this.__onStateChangeHandler = function () {
    _this.changeState().catch(function (err) {
      return console.error(err);
    });;
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
 * Change state
 */
router.changeState = function () {
  var _this3 = this;

  if (this.__disableChange) {
    delete this.__disableChange;

    return;
  }

  var url = this.getUrl();
  var hash = this.hashMode ? '' : window.location.hash.replace('#', '');
  var query = this.getUrlQuery();
  var prevTransition = router.transition || null;
  var transition = router.transition = new Transition(url, query, hash, prevTransition);
  var level = 0;

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

    var isHistory = _this3.__options.reload === undefined && !isDifferent;
    var isReload = _this3.__options.reload === false;

    if (hasState && (isHistory || isReload)) {
      transition.path.loaded = false;

      return next(state.children, onEnd);
    }

    Promise.resolve(state.handler(transition)).then(function (data) {
      if (transition.__cancelled) {
        return onEnd && onEnd();
      }

      transition.path.data = data;

      if (state.abstract) {
        return next(state.children, onEnd);
      }

      route.setTransition(transition).then(function () {
        transition.path.loaded = true;

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

          _this3.hashMode && (_this3.__disableChange = true);
          _this3.setUrl(_this3.defaultUrl);
          _this3.__redirects++;

          return _this3.changeState().then(resolve).catch(reject);
        }

        if (_akili2.default.options.debug) {
          console.warn('Not found a default route. You can pass it in "router.init(defaultUrl)" function');
        }
      }

      _this3.__options = {};
      _this3.__redirects = 0;

      if (prevTransition) {
        for (var i = level, l = prevTransition.routes.length; i < l; i++) {
          var route = prevTransition.routes[i];
          route.component && route.component.empty();
        }
      }

      window.dispatchEvent(new CustomEvent('state-change', {
        detail: transition
      }));

      resolve();
    });
  });
};

router.Transition = Transition;

exports.default = router;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _router = __webpack_require__(8);

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
      _akili2.default.component('a', A);
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
    key: 'changedUrl',
    value: function changedUrl(url) {
      this.setUrl(url);
      this.resetHref(url);
    }
  }, {
    key: 'changedState',
    value: function changedState(state) {
      this.setState(state);
      this.resetHref();
    }
  }, {
    key: 'changedParams',
    value: function changedParams(params) {
      this.setParams(params);
      this.resetHref();
    }
  }, {
    key: 'changedQuery',
    value: function changedQuery(query) {
      this.setQuery(query);
      this.resetHref();
    }
  }, {
    key: 'changedHash',
    value: function changedHash(query) {
      this.setHash(query);
      this.resetHref();
    }
  }, {
    key: 'changedOptions',
    value: function changedOptions(options) {
      this.setQuery(options);
    }
  }, {
    key: 'changedReload',
    value: function changedReload(val) {
      this.setReload(val);
    }
  }, {
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
    }
  }, {
    key: 'compiled',
    value: function compiled() {
      this.attrs.hasOwnProperty('state') && this.setState(this.attrs.state);
      this.attrs.hasOwnProperty('params') && this.setParams(this.attrs.params);
      this.attrs.hasOwnProperty('query') && this.setQuery(this.attrs.query);
      this.attrs.hasOwnProperty('hash') && this.setHash(this.attrs.hash);
      this.attrs.hasOwnProperty('options') && this.setOptions(this.attrs.options);
      this.attrs.hasOwnProperty('reload') && this.setReload(this.attrs.reload);
      this.attrs.hasOwnProperty('url') && this.setUrl(this.attrs.url);
      this.resetHref(this.url);
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
    value: function resetHref(url) {
      if (url) {
        this.attrs.href = url;
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
;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _text = __webpack_require__(4);

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
      _akili2.default.component('content', Content);
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
;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Embed = function (_Component) {
  _inherits(Embed, _Component);

  function Embed() {
    _classCallCheck(this, Embed);

    return _possibleConstructorReturn(this, (Embed.__proto__ || Object.getPrototypeOf(Embed)).apply(this, arguments));
  }

  _createClass(Embed, [{
    key: 'changedUrl',
    value: function changedUrl(url) {
      this.setSrc(url);
    }
  }, {
    key: 'compiled',
    value: function compiled() {
      this.attrs.hasOwnProperty('url') && this.setSrc(this.attrs.url);
    }
  }, {
    key: 'setSrc',
    value: function setSrc(url) {
      this.attrs.src = url;
    }
  }], [{
    key: 'define',
    value: function define() {
      _akili2.default.component('embed', Embed);
    }
  }]);

  return Embed;
}(_component2.default);

Embed.matches = '[url]';
exports.default = Embed;
;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Else = exports.ElseIf = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

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
      _akili2.default.component('if', If);
      _akili2.default.component('else-if', ElseIf);
      _akili2.default.component('else', Else);
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
    key: 'changedIs',
    value: function changedIs(value) {
      this.state = !!value;
      this.setState();
    }
  }, {
    key: 'changedRecreate',
    value: function changedRecreate(value) {
      this.setRecreation(value);
    }
  }, {
    key: 'compiled',
    value: function compiled() {
      this.attrs.hasOwnProperty('recreate') && this.setRecreation(this.attrs.recreate);
      this.state = !!this.attrs.is;
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

    var _this2 = _possibleConstructorReturn(this, (_ref2 = ElseIf.__proto__ || Object.getPrototypeOf(ElseIf)).call.apply(_ref2, [this].concat(args)));

    _this2.active = true;
    return _this2;
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Iframe = function (_Component) {
  _inherits(Iframe, _Component);

  function Iframe() {
    _classCallCheck(this, Iframe);

    return _possibleConstructorReturn(this, (Iframe.__proto__ || Object.getPrototypeOf(Iframe)).apply(this, arguments));
  }

  _createClass(Iframe, [{
    key: 'changedUrl',
    value: function changedUrl(url) {
      this.setSrc(url);
    }
  }, {
    key: 'compiled',
    value: function compiled() {
      this.attrs.hasOwnProperty('url') && this.setSrc(this.attrs.url);
    }
  }, {
    key: 'setSrc',
    value: function setSrc(url) {
      this.attrs.src = url;
    }
  }], [{
    key: 'define',
    value: function define() {
      _akili2.default.component('iframe', Iframe);
    }
  }]);

  return Iframe;
}(_component2.default);

Iframe.matches = '[url]';
exports.default = Iframe;
;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Image = function (_Component) {
  _inherits(Image, _Component);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
  }

  _createClass(Image, [{
    key: 'changedUrl',
    value: function changedUrl(url) {
      this.setSrc(url);
    }
  }, {
    key: 'compiled',
    value: function compiled() {
      this.attrs.hasOwnProperty('url') && this.setSrc(this.attrs.url);
    }
  }, {
    key: 'setSrc',
    value: function setSrc(url) {
      this.attrs.src = url;
    }
  }], [{
    key: 'define',
    value: function define() {
      _akili2.default.component('img', Image);
    }
  }]);

  return Image;
}(_component2.default);

Image.matches = '[url]';
exports.default = Image;
;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

var _request = __webpack_require__(3);

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
      _akili2.default.component('include', Include);
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
    key: 'changedUrl',
    value: function changedUrl(url) {
      this.getTemplate(url);
    }
  }, {
    key: 'compiled',
    value: function compiled() {
      return this.getTemplate(this.attrs.url);
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
          _this2.attrs.onLoad.trigger();
        });
      }).catch(function (err) {
        _this2.attrs.onError.trigger(err);
      });
    }
  }]);

  return Include;
}(_component2.default);

Include.transparent = true;
Include.matches = '[url]';
Include.events = ['load', 'error'];
exports.default = Include;
;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _text = __webpack_require__(4);

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
      _akili2.default.component('input', Input);
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
    key: 'changedChecked',
    value: function changedChecked(value) {
      this.setChecked(value);
    }
  }, {
    key: 'created',
    value: function created() {
      var _this2 = this;

      (this.isRadio || this.isCheckbox) && this.el.addEventListener('click', function () {
        _this2.setChecked(_this2.el.checked, false);
      });
    }
  }, {
    key: 'resolved',
    value: function resolved() {
      (this.isCheckbox || this.isRadio) && this.setChecked(this.attrs.checked);
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

Input.booleanAttributes = ['checked'];
Input.events = ['change'];
exports.default = Input;
;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioButton = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _for = __webpack_require__(5);

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
      _akili2.default.component('radio', Radio);
      _akili2.default.component('radio-button', RadioButton);
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
    key: 'changedIn',
    value: function changedIn(value) {
      _get(Radio.prototype.__proto__ || Object.getPrototypeOf(Radio.prototype), 'changedIn', this).apply(this, arguments);
      this.setNames(this.attrs.name);
    }
  }, {
    key: 'changedName',
    value: function changedName(name) {
      this.setNames(name);
    }
  }, {
    key: 'changedValue',
    value: function changedValue(value) {
      this.setValue(value);
    }
  }, {
    key: 'created',
    value: function created() {
      var _this2 = this;

      this.iterable && _get(Radio.prototype.__proto__ || Object.getPrototypeOf(Radio.prototype), 'created', this).apply(this, arguments);

      this.el.addEventListener('change', function () {
        setTimeout(function () {
          var value = _this2.getRadioValue();

          if (value === _this2.prevValue) {
            return;
          }

          _this2.prevValue = value;
          _this2.attrs.onRadio.trigger(value);
        });
      });
    }
  }, {
    key: 'resolved',
    value: function resolved() {
      this.setNames(this.attrs.name);
      this.attrs.hasOwnProperty('value') && this.setValue(this.attrs.value);
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
    key: 'changedValue',
    value: function changedValue(value) {
      this.setRadioValue(value);
    }
  }, {
    key: 'compiled',
    value: function compiled() {
      this.setRadioValue(this.attrs.value);
    }
  }, {
    key: 'setRadioValue',
    value: function setRadioValue(value) {
      this.scope.value = value;
    }
  }]);

  return RadioButton;
}(_for.Loop);

RadioButton.template = '<label><input type="radio" value="${this.value}"/>${this.__content}</label>';


Radio.RadioButton = RadioButton;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Option = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _for = __webpack_require__(5);

var _for2 = _interopRequireDefault(_for);

var _utils = __webpack_require__(2);

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
      _akili2.default.component('select', Select);
      _akili2.default.component('option', Option);
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
    key: 'changedMultiple',
    value: function changedMultiple(value) {
      this.setMultiple(value);
    }
  }, {
    key: 'changedContent',
    value: function changedContent(value) {
      this.setContent(value);
    }
  }, {
    key: 'changedIn',
    value: function changedIn(value) {
      _get(Select.prototype.__proto__ || Object.getPrototypeOf(Select.prototype), 'changedIn', this).apply(this, arguments);
      this.drawSelect();
    }
  }, {
    key: 'created',
    value: function created() {
      var _this2 = this;

      _get(Select.prototype.__proto__ || Object.getPrototypeOf(Select.prototype), 'created', this).apply(this, arguments);

      this.el.addEventListener('change', function () {
        _this2.el.content = _this2.getContent();
      });
    }
  }, {
    key: 'compiled',
    value: function compiled() {
      _get(Select.prototype.__proto__ || Object.getPrototypeOf(Select.prototype), 'compiled', this).apply(this, arguments);
      this.attrs.hasOwnProperty('multiple') && this.setMultiple(this.attrs.multiple);
      this.attrs.hasOwnProperty('content') && this.setContent(this.attrs.content);
      this.drawSelect();
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
    key: 'created',
    value: function created() {
      _get(Option.prototype.__proto__ || Object.getPrototypeOf(Option.prototype), 'created', this).apply(this, arguments);
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _text = __webpack_require__(4);

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
      _akili2.default.component('textarea', Textarea);
    }
  }]);

  return Textarea;
}(_text2.default);

exports.default = Textarea;
;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

var _utils = __webpack_require__(2);

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

      if (!Array.isArray(keys)) {
        keys = [keys];
      }

      _akili2.default.unisolated(function () {
        strict && (_this.__component.__disableProxyRedefining = true);
        _utils2.default.setPropertyByKeys(keys, _this, function (last, val) {
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
;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODY0YTYzN2FmM2Y1ZWNlZjAwZWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FraWxpLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JvdXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudC1lbWl0dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VtYmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lmLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lmcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmNsdWRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JhZGlvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZXh0YXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NvcGUuanMiXSwibmFtZXMiOlsiQWtpbGkiLCJvcHRpb25zIiwibmVzdGVkV2F0Y2hpbmciLCJzaG93RXZhbHVhdGlvbkVycm9ycyIsImRlYnVnIiwiX19pbml0IiwiX19jb21wb25lbnRzIiwiX19hbGlhc2VzIiwiX19zY29wZXMiLCJfX3dpbmRvdyIsIl9faXNvbGF0aW9uIiwiX19ldmFsdWF0aW9uIiwiX19odG1sIiwid2luZG93IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJfX3NlcnZlclJlbmRlcmluZyIsImh0bWxCb29sZWFuQXR0cmlidXRlcyIsImNvbXBvbmVudHMiLCJkZWNvcmF0b3JzIiwic2VydmljZXMiLCJqb2luQmluZGluZ0tleXMiLCJrZXlzIiwibWFwIiwiZWwiLCJ0b1N0cmluZyIsImpvaW4iLCJhZGRTY29wZSIsInNjb3BlIiwiX19uYW1lIiwiRXJyb3IiLCJnZXRTY29wZSIsIm5hbWUiLCJyZW1vdmVTY29wZSIsIl9fY29tcG9uZW50IiwiX19lbCIsIl9fcGFyZW50IiwiZ2V0QWtpbGlQYXJlbnRzIiwidHJlZSIsImFyciIsImNoZWNrIiwibm9kZSIsInBhcmVudE5vZGUiLCJfX2FraWxpIiwicHVzaCIsInNldFRlbXBsYXRlIiwidGVtcGxhdGUiLCJyZXBsYWNlIiwiaW5uZXJIVE1MIiwiY3JlYXRlU2NvcGVOYW1lIiwiY3JlYXRlUmFuZG9tU3RyaW5nIiwic3RyIiwiaXNvbGF0ZSIsImZuIiwicmVzIiwicHJvcHMiLCJrIiwiaGFzT3duUHJvcGVydHkiLCJpIiwibCIsInByb3AiLCJpc0RlbGV0ZWQiLCJjb21wb25lbnQiLCJfX2V2YWx1YXRlQnlLZXlzIiwidW5kZWZpbmVkIiwic2V0UHJvcGVydHlCeUtleXMiLCJsYXN0IiwidmFsIiwidmFsdWUiLCJsZW5ndGgiLCJ1bmV2YWx1YXRlZCIsImV2YWx1YXRpb24iLCJ1bmlzb2xhdGVkIiwiaW5pdGlhbGl6ZSIsInJlY29tcGlsZSIsIl9fcmVjb21waWxlIiwiaXNSb290IiwiX19yb290IiwiY29tcG9uZW50TmFtZSIsInRvRGFzaENhc2UiLCJnZXRBdHRyaWJ1dGUiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJfQ29tcG9uZW50IiwiQ0hFQ0tfQUxJQVNFUyIsInNlbGVjdG9ycyIsIk9iamVjdCIsInNlbGVjdG9yQWxsIiwibWF0Y2hlcyIsInNlbGVjdG9yIiwiQ29tcG9uZW50IiwiX19jYW5jZWxsZWQiLCJfX2NyZWF0ZSIsImNvbXBpbGUiLCJyb290IiwiZWxlbWVudHMiLCJuZXN0ZWRJbml0aWFsaXppbmciLCJjaGlsZHJlbiIsImNoaWxkIiwicCIsIl9fY29tcGlsZSIsIlByb21pc2UiLCJhbGwiLCJ0aGVuIiwiciIsIl9fcmVzb2x2ZSIsImNvbnNvbGUiLCJ3YXJuIiwidW5yZWdpc3RlckNvbXBvbmVudCIsImFsaWFzIiwidW5yZWdpc3RlckFsaWFzIiwiaXNvbGF0ZUFycmF5UHJvdG90eXBlIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwia2V5Iiwib2xkIiwiX19pc1Byb3h5IiwiYXBwbHkiLCJpc29sYXRlV2luZG93RnVuY3Rpb25zIiwic2V0VGltZW91dCIsInNldEludGVydmFsIiwiY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24iLCJjb25zdHJ1Y3RvciIsImlzb2xhdGVFdmVudHMiLCJFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmUiLCJfX2FraWxpTGlzdGVuZXJzIiwiYXJndW1lbnRzIiwiYXJncyIsInNsaWNlIiwiY2FsbCIsImxpbmsiLCJsaXN0ZW5lciIsInNwbGljZSIsInBvcyIsImNhbGxiYWNrIiwiaXNvbGF0ZUZ1bmN0aW9uIiwiY29udGV4dCIsIm9GbiIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImVycm9ySGFuZGxpbmciLCJ0cmlnZ2VySW5pdCIsInN0YXR1cyIsInN0eWxlIiwidmlzaWJpbGl0eSIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImluaXQiLCJzZXJ2ZXJQIiwicmVzb2x2ZSIsInNlcnZlciIsInF1ZXJ5U2VsZWN0b3IiLCJnZXQiLCJkYXRhIiwiY2hhbmdlU3RhdGUiLCJjYXRjaCIsImVyciIsImRlaW5pdCIsImRlZmluZSIsIkV2ZW50RW1pdHRlciIsIlNjb3BlIiwidXRpbHMiLCJBIiwiQ29udGVudCIsIkZvciIsIkVtYmVkIiwiSWYiLCJJbmNsdWRlIiwiSW5wdXQiLCJJZnJhbWUiLCJJbWFnZSIsIlJhZGlvIiwiUm91dGUiLCJTZWxlY3QiLCJUZXh0IiwiVGV4dGFyZWEiLCJyZXF1ZXN0Iiwicm91dGVyIiwiZXZhbHVhdGlvblJlZ2V4IiwiZXZhbHVhdGlvblJlZ2V4R2xvYmFsIiwiUmVnRXhwIiwic291cmNlIiwic3lzdGVtQXR0cmlidXRlcyIsImV4cHJlc3Npb24iLCJldmVudCIsImV2YWwiLCJfX2lzU3lzdGVtS2V5IiwiaW5kZXhPZiIsIl9faXNNb3VudGVkIiwiX19pc0NvbXBpbGVkIiwiX19iaW5kaW5ncyIsIl9fZXZhbHVhdGluZ0V2ZW50IiwiX19yZWNvbXBpbGluZyIsIl9fY29tcGlsaW5nIiwiX19kaXNhYmxlUHJveHkiLCJfX2NoaWxkcmVuIiwiX19wYXJlbnRzIiwiX19hdHRycyIsIl9fYXR0cmlidXRlT2YiLCJfX2V2YWx1YXRpb25Db21wb25lbnQiLCJfX3NldEV2ZW50cyIsIl9fc2V0UGFyZW50cyIsIl9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMiLCJfX2RlZmluZUF0dHJpYnV0ZXMiLCJfX2luaXRpYWxpemUiLCJjcmVhdGVkIiwiYXR0cnMiLCJjb250cm9sIiwiX19jb250cm9sQXR0cmlidXRlcyIsIl9fZXZhbHVhdGVQYXJlbnQiLCJuZXdQYXJlbnQiLCJfX2ludGVycG9sYXRlQXR0cmlidXRlcyIsImludGVycG9sYXRlIiwicGFyZW50Iiwibm9kZVR5cGUiLCJfX2luaXRpYWxpemVOb2RlIiwibm9kZVZhbHVlIiwiX19ldmFsdWF0ZSIsImNoaWxkTm9kZXMiLCJvbkNvbXBpbGVkIiwidHJpZ2dlciIsImNvbXBpbGVkIiwidGVtcGxhdGVVcmwiLCJfX2NvbnRlbnQiLCJvblJlY29tcGlsZWQiLCJyZWNvbXBpbGVkIiwib25SZXNvbHZlZCIsInJlc29sdmVkIiwiX19zY29wZSIsIl9zY29wZSIsImFzc2lnbiIsImNvbnRyb2xBdHRyaWJ1dGVzIiwiZXZlbnRzIiwiX19ldmVudHMiLCJfX25lc3RlZFdhdGNoaW5nIiwiX19uZXN0ZWRPYnNlcnZlIiwiX19vYnNlcnZlIiwiYm9vbGVhbkF0dHJpYnV0ZXMiLCJjb25jYXQiLCJzZXRBdHRyIiwiYXR0cmlidXRlcyIsIm5vZGVOYW1lIiwiaGFzQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiZXYiLCJ0ZXN0IiwicGFyZW50cyIsImV2YWx1YXRlUGFyZW50IiwidHJhbnNwYXJlbnQiLCJfX2RldGFjaCIsIl9fYWRkQ2hpbGQiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvcGVydGllcyIsImdldFByb3BlcnR5QnlLZXlzIiwiY29tcGFyZVByZXZpb3VzVmFsdWUiLCJjb3B5IiwiX19nZXROb2RlUHJvcGVydHkiLCJjb3VudGVyIiwiYXR0cmlidXRlVmFsdWUiLCJfX2V4cHJlc3Npb24iLCJtIiwiZCIsImV2YWx1YXRlIiwiZXhpc3RpbmdCaW5kaW5ncyIsInBhcnNlVmFsdWUiLCJfX2dldFBhcnNlZEV4cHJlc3Npb24iLCJsaXN0IiwicGFyc2UiLCJtZXNzYWdlIiwic3RhY2siLCJlcnJvciIsImhhc2giLCJrZXlzU3RyaW5nIiwibm90QmluZGluZyIsInBhcmVudFZhbHVlIiwiZXZhbENvbXBvbmVudCIsImlzU2NvcGVQcm94eSIsImJpbmQiLCJfX2dldEJvdW5kTm9kZSIsIl9fYmluZCIsIl9fc2V0Tm9kZVByb3BlcnR5IiwiQXR0ciIsIm1ha2VBdHRyaWJ1dGVWYWx1ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlIiwiaXNCb29sZWFuQXR0cmlidXRlIiwiX19oYXNCaW5kaW5ncyIsImNsZWFyQXR0cmlidXRlIiwiX19hdHRyaWJ1dGVPbiIsIl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciIsInRvQ2FtZWxDYXNlIiwib25DaGFuZ2VkIiwiY2hhbmdlZCIsImNhbWVsS2V5IiwidG9VcHBlckNhc2UiLCJmbk5hbWUiLCJldkZuTmFtZSIsImVsZW1lbnQiLCJfX2VsZW1lbnQiLCJhdHRyIiwid2l0aG91dFBhcmVudHMiLCJsYXN0UHJvcHMiLCJwcm9wc0xlbmd0aCIsImVsRXZhbHVhdGUiLCJfX2dldEJpbmQiLCJfX2RhdGEiLCJjIiwiX19jaGVja05vZGVQcm9wZXJ0eUNoYW5naW5nIiwiX19ldmFsdWF0ZU5vZGUiLCJfayIsIl9wcm9wIiwidW5iaW5kIiwib2JqIiwiX2tleXMiLCJfX2tleXMiLCJfaXNEZWxldGVkIiwiaGFzS2V5Iiwic2hpZnQiLCJoYXNQcm9wZXJ0eUJ5S2V5cyIsIl9fZXZhbHVhdGVOZXN0ZWQiLCJfX3VuYmluZCIsImRlbGV0ZVByb3BlcnR5QnlLZXlzIiwiZXhlYyIsIl9fY2hlY2tFdmFsdWF0aW9uIiwiYXR0cmlidXRlT2YiLCJldmVudE5hbWUiLCJfX2V2ZW50IiwiZW1pdHRlciIsIl9fZXZhbHVhdGVFdmVudCIsIl9faW5pdGlhbGl6ZWQiLCJfX2luaXRpYWxpemVBdHRyaWJ1dGUiLCJjaGFuZ2VBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGVOb2RlIiwiX191bmJpbmRCeU5vZGVzIiwiUHJveHkiLCJ0YXJnZXQiLCJzZXQiLCJhdHRyS2V5IiwiZGVsZXRlUHJvcGVydHkiLCJyZWFsVGFyZ2V0IiwiZ2V0T3duUHJvcGVydHlUYXJnZXQiLCJpc1BsYWluT2JqZWN0IiwiZ2V0RW51bWVyYWJsZVByb3BlcnR5VGFyZ2V0IiwiX19iaW5kTm9kZSIsIl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0Iiwic3RhcnRLZXlzIiwib2JzZXJ2ZSIsIl9fdGFyZ2V0IiwiX19kaXNhYmxlUHJveHlSZWRlZmluaW5nIiwiaXNvbGF0aW9uS2V5IiwicGFyZW50S2V5c1N0cmluZyIsIl9fZGVsZXRlTm9kZVByb3BlcnR5Iiwibm9kZXMiLCJfX2NsZWFyRW1wdHlCaW5kaW5ncyIsImNsZWFyIiwiX19yZW1vdmUiLCJvblJlbW92ZWQiLCJyZW1vdmVkIiwiX19zcGxpY2VDaGlsZCIsIl9fcmVtb3ZlQ2hpbGRyZW4iLCJmaW5kIiwiZmluZEFsbCIsImxldmVscyIsImxldmVsIiwiaXNBcnJheSIsInJpZ2h0IiwibGV2ZWxFbGVtZW50cyIsInJldmVyc2UiLCJfX2dldFBhcmVudCIsIl9fZ2V0Q2hpbGRyZW4iLCJfX2dldE5lYXIiLCJhcHBlbmRDaGlsZCIsIl9fZW1wdHkiLCJfX2Rlc3Ryb3kiLCJjbGFzcyIsImNsYXNzZXMiLCJzdHlsZXMiLCJmaWx0ZXIiLCJoYW5kbGVyIiwiaXRlbSIsIm1hdGNoIiwic29ydCIsIm9yZGVyIiwiYSIsImIiLCJEYXRlIiwiZ2V0VGltZSIsIm5leHQiLCJhViIsImJWIiwibmVzdGVkIiwiY29tcGFyZSIsImN1cnJlbnQiLCJwcmV2aW91cyIsInByZXZpb3VzQ29weSIsImN1cnJlbnRDb3B5IiwiZW5jb2RlSHRtbEVudGl0aWVzIiwiaHRtbCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlY29kZUh0bWxFbnRpdGllcyIsIm9iamVjdCIsInJlZHVjZSIsIm8iLCJoYXMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsInByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJjbGVhclNjb3BlUHJveHkiLCJNYXRoIiwicmFuZG9tIiwic3Vic3RyaW5nIiwiUmVxdWVzdCIsImJhc2VVcmwiLCJkZWZhdWx0cyIsInN0YXR1c0Vycm9yc1BhdHRlcm4iLCJyZWplY3QiLCJ1cmwiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9uU3RhcnQiLCJ0cmFuc2Zvcm1CZWZvcmUiLCJvcGVuIiwibWV0aG9kIiwidXNlciIsInBhc3N3b3JkIiwiaGVhZGVycyIsImpzb24iLCJib2R5IiwicmVzcG9uc2VUeXBlIiwiZm9ybSIsImNyZWF0ZUZvcm1EYXRhIiwidGltZW91dCIsIndpdGhDcmVkZW50aWFscyIsInNldFJlcXVlc3RIZWFkZXIiLCJwYXJhbXMiLCJwYXJhbXNUb1F1ZXJ5Iiwib25Qcm9ncmVzcyIsIm9ucHJvZ3Jlc3MiLCJvbmxvYWQiLCJyZXNwb25zZSIsInRyYW5zZm9ybUFmdGVyIiwib250aW1lb3V0Iiwib25lcnJvciIsInNlbmQiLCJzZXAiLCJlcSIsImtzIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidiIsIm9wdCIsInF1ZXJ5IiwiYW1wcyIsInNwbGl0IiwiZXFzIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwibmFtZXNwYWNlIiwiZmQiLCJGb3JtRGF0YSIsImFwcGVuZCIsInRvSVNPU3RyaW5nIiwiX19pbnN0YW5jZXMiLCJhZGRJbnN0YW5jZSIsImluc3RhbmNlIiwicmVtb3ZlSW5zdGFuY2UiLCJ2YWx1ZUtleSIsInNldFZhbHVlIiwic2V0Rm9jdXMiLCJmb2N1cyIsInNldEVsZW1lbnRGb2N1cyIsInNldEVsZW1lbnRCbHVyIiwiYmx1ciIsIkxvb3AiLCJfX2l0ZXJhdG9yIiwiX19rZXkiLCJfX3ZhbHVlIiwiX19pbmRleCIsIl9fY29tcGFyaXNvblZhbHVlIiwiaXRlcmF0b3JzIiwiaXRlcmF0b3JSZWYiLCJpdGVyYXRvck91dGVySFRNTCIsImRyYXciLCJjcmVhdGVJdGVyYXRvciIsImluIiwibWFzayIsIm5leHRTaWJsaW5nIiwib3V0ZXJIVE1MIiwiY29udGVudCIsImZpcnN0Q2hpbGQiLCJpbmRleCIsImZvdW5kIiwiX19oYXNoIiwiaXRlcmF0b3IiLCJjVmFsdWUiLCJjb21wYXJzaW9uIiwiY0NvcHkiLCJzZXRJbmRleCIsInNldEtleSIsImNyZWF0ZUl0ZXJhdG9yRWxlbWVudCIsImluc2VydEJlZm9yZSIsIndyaXRhYmxlIiwiZVZhbHVlIiwiaW5kZXhLZXlzIiwibGFzdEVsZW1lbnQiLCJsb29wIiwiaXRlcmF0ZSIsImZvciIsImlzRm9yIiwiY2FuY2VsIiwiX19zZXQiLCJ0cmFuc2l0aW9uIiwic3RhdGUiLCJwYXRoIiwiZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uIiwiX190cmFuc2l0aW9uIiwiZW1wdHkiLCJidWJibGVzIiwiZm9yY2UiLCJpbkV2YWx1YXRpbmciLCJfRXZlbnQiLCJ0eXBlIiwiVHJhbnNpdGlvbiIsInJvdXRlcyIsInN0YXRlcyIsInJvdXRlIiwiaGFzaE1vZGUiLCJfX3JlZGlyZWN0cyIsIl9fb3B0aW9ucyIsIl9fcGFyYW1SZWdleCIsIl9fcm91dGVTZWxlY3RvciIsImFkZCIsInBhdHRlcm4iLCJkZWZhdWx0T3B0aW9ucyIsImFic3RyYWN0Iiwic2V0U3RhdGUiLCJnZXRTdGF0ZSIsImNyZWF0ZVN0YXRlVXJsIiwicmVsb2FkIiwiZ2V0VXJsIiwic2V0VXJsIiwiYmFjayIsImhpc3RvcnkiLCJnbyIsImZvcndhcmQiLCJsb2NhdGlvbiIsInB1c2hTdGF0ZSIsImRlZmF1bHRVcmwiLCJvbGRQdXNoU3RhdGUiLCJfX29uU3RhdGVDaGFuZ2VIYW5kbGVyIiwicG9wIiwicGFyZW50TmFtZSIsImZ1bGxQYXR0ZXJuIiwic3BsaXRTbGFzaGVzIiwicmVtb3ZlU3RhdGUiLCJzZXRIYXNoVXJsIiwic2V0SGlzdG9yeVVybCIsImdldEhhc2hVcmwiLCJnZXRIaXN0b3J5VXJsIiwicGF0aG5hbWUiLCJzZWFyY2giLCJnZXRVcmxRdWVyeSIsImdldEhhc2hVcmxRdWVyeSIsImdldEhpc3RvcnlVcmxRdWVyeSIsInBhcmFtc0Zyb21RdWVyeSIsImYiLCJnZXRQYXR0ZXJuQ29udGVudCIsInVybFBhdHRlcm4iLCJyZWdleCIsImlzSW5jbHVkZWQiLCJpc0FjdGl2ZVN0YXRlIiwiaW5jbHVkZXMiLCJpbkFjdGl2ZVN0YXRlIiwiZ2V0Um91dGUiLCJnZXRBcnJheVBhdHRlcm5Db250ZW50IiwiZ2V0U3RhdGVzQnlMZXZlbCIsIl9fZGlzYWJsZUNoYW5nZSIsInByZXZUcmFuc2l0aW9uIiwib25FbmQiLCJzZXRQYXRoIiwibG9hZGVkIiwiaGFzU3RhdGUiLCJpc0RpZmZlcmVudCIsInByZXYiLCJpc0hpc3RvcnkiLCJpc1JlbG9hZCIsInNldFRyYW5zaXRpb24iLCJpc1VybCIsInJlc2V0SHJlZiIsInNldFBhcmFtcyIsInNldFF1ZXJ5Iiwic2V0SGFzaCIsInNldFJlbG9hZCIsInByZXZlbnREZWZhdWx0Iiwic2V0T3B0aW9ucyIsImhyZWYiLCJnZXRDb21wdXRlZFN0eWxlIiwiZGlzcGxheSIsInJhbmdlIiwiY3JlYXRlUmFuZ2UiLCJzZWxlY3Rpb24iLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwic2V0U3JjIiwic3JjIiwiRWxzZUlmIiwiRWxzZSIsImFjdGl2ZSIsInJlY3JlYXRlIiwiaXNDb21waWxlZCIsInNldFJlY3JlYXRpb24iLCJpcyIsImNvbXBpbGF0aW9uIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwicmVzdWx0Iiwic2V0QWN0aXZpdHkiLCJjb25uZWN0aW9uIiwiZ2V0VGVtcGxhdGUiLCJhYm9ydCIsIm9uTG9hZCIsIm9uRXJyb3IiLCJpc0NoZWNrYm94IiwiaXNSYWRpbyIsInNldENoZWNrZWQiLCJjaGVja2VkIiwicHJldkNoZWNrZWQiLCJvbkNoYW5nZSIsImRpc3BhdGNoIiwiRXZlbnQiLCJjaGFuZ2VSYWRpbyIsInJhZGlvIiwiUmFkaW9CdXR0b24iLCJpdGVyYWJsZSIsInNldE5hbWVzIiwiZ2V0UmFkaW9WYWx1ZSIsInByZXZWYWx1ZSIsIm9uUmFkaW8iLCJpc1RydWUiLCJpc1NlbGVjdGVkIiwic2V0UmFkaW9WYWx1ZSIsIk9wdGlvbiIsIml0ZXJhdG9yVGFnTmFtZSIsImlzTXVsdGlwbGUiLCJzZXRNdWx0aXBsZSIsInNldENvbnRlbnQiLCJkcmF3U2VsZWN0IiwiZ2V0Q29udGVudCIsIm11bHRpcGxlIiwiY2hhbmdlVmFsdWUiLCJmb3JtYXRWYWx1ZSIsInNlbGVjdGVkIiwib3B0aW9uIiwicmVkZWZpbmUiLCJ0cmltIiwic2V0U2VsZWN0ZWQiLCJzdHJpY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7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RDs7O3dCQTNCYTtBQUNaO0FBQ0Q7Ozs7OztrQkFaa0I5TCxLO0FBc0NwQixDIiwiZmlsZSI6ImFraWxpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4NjRhNjM3YWYzZjVlY2VmMDBlYiIsIi8qKlxuICogSmF2YXNjcmlwdCBmcmFtZXdvcmtcbiAqXG4gKiBjb25zdCBBa2lsaSA9IG1ha2VJdEVhc3koanMgKyBodG1sKTtcbiAqXG4gKiBAYXV0aG9yIEFsZXhhbmRyIEJhbGFzeWFuIDxteXdlYnN0cmVldEBnbWFpbC5jb20+XG4gKiBAbGluayBodHRwOi8vYWtpbGlqcy5jb21cbiAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50LmpzJztcbmltcG9ydCBJZiBmcm9tICcuL2NvbXBvbmVudHMvaWYuanMnO1xuaW1wb3J0IEZvciBmcm9tICcuL2NvbXBvbmVudHMvZm9yLmpzJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdC5qcyc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9jb21wb25lbnRzL2lucHV0LmpzJztcbmltcG9ydCBSYWRpbyBmcm9tICcuL2NvbXBvbmVudHMvcmFkaW8uanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9jb21wb25lbnRzL3RleHQuanMnO1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJy4vY29tcG9uZW50cy90ZXh0YXJlYS5qcyc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuL2NvbXBvbmVudHMvY29udGVudC5qcyc7XG5pbXBvcnQgSW5jbHVkZSBmcm9tICcuL2NvbXBvbmVudHMvaW5jbHVkZS5qcyc7XG5pbXBvcnQgSWZyYW1lIGZyb20gJy4vY29tcG9uZW50cy9pZnJhbWUuanMnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vY29tcG9uZW50cy9pbWFnZS5qcyc7XG5pbXBvcnQgRW1iZWQgZnJvbSAnLi9jb21wb25lbnRzL2VtYmVkLmpzJztcbmltcG9ydCBSb3V0ZSBmcm9tICcuL2NvbXBvbmVudHMvcm91dGUuanMnO1xuaW1wb3J0IEEgZnJvbSAnLi9jb21wb25lbnRzL2EuanMnO1xuaW1wb3J0IFNjb3BlIGZyb20gJy4vc2NvcGUuanMnO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXIuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9zZXJ2aWNlcy9yZXF1ZXN0LmpzJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9zZXJ2aWNlcy9yb3V0ZXIuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuXG5jb25zdCBBa2lsaSA9IHt9O1xuXG5Ba2lsaS5vcHRpb25zID0ge1xuICBuZXN0ZWRXYXRjaGluZzogdHJ1ZSxcbiAgc2hvd0V2YWx1YXRpb25FcnJvcnM6IHRydWUsXG4gIGRlYnVnOiB0cnVlXG59O1xuXG5Ba2lsaS5fX2luaXQgPSBudWxsO1xuQWtpbGkuX19jb21wb25lbnRzID0ge307XG5Ba2lsaS5fX2FsaWFzZXMgPSB7fTtcbkFraWxpLl9fc2NvcGVzID0ge307XG5Ba2lsaS5fX3dpbmRvdyA9IHt9O1xuQWtpbGkuX19pc29sYXRpb24gPSBudWxsO1xuQWtpbGkuX19ldmFsdWF0aW9uID0gbnVsbDtcbkFraWxpLl9faHRtbCA9IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5Ba2lsaS5fX3NlcnZlclJlbmRlcmluZyA9IGZhbHNlO1xuXG5Ba2lsaS5odG1sQm9vbGVhbkF0dHJpYnV0ZXMgPSBbXG4gICdkaXNhYmxlZCcsICdjb250ZW50ZWRpdGFibGUnLCAnaGlkZGVuJ1xuXTtcblxuQWtpbGkuY29tcG9uZW50cyA9IHt9O1xuQWtpbGkuZGVjb3JhdG9ycyA9IHt9O1xuQWtpbGkuc2VydmljZXMgPSB7fTtcblxuLyoqXG4gKiBKb2luIGJpbmRpbmcga2V5c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgYmluZGluZyBrZXlzXG4gKi9cbkFraWxpLmpvaW5CaW5kaW5nS2V5cyA9IGZ1bmN0aW9uKGtleXMpIHtcbiAgcmV0dXJuIGtleXMubWFwKGVsID0+IGVsLnRvU3RyaW5nKCkpLmpvaW4oJy4nKTtcbn07XG5cbi8qKlxuICogQWRkIHNjb3BlIHRvIHRoZSBzY29wZXMgbGlzdFxuICpcbiAqIEBwYXJhbSBzY29wZVxuICovXG5Ba2lsaS5hZGRTY29wZSA9IGZ1bmN0aW9uKHNjb3BlKSB7XG4gIGlmKHRoaXMuX19zY29wZXNbc2NvcGUuX19uYW1lXSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgU2NvcGUgbmFtZSAke3Njb3BlLl9fbmFtZX0gYWxyZWFkeSBleGlzdHNgKTtcbiAgfVxuXG4gIHRoaXMuX19zY29wZXNbc2NvcGUuX19uYW1lXSA9IHNjb3BlO1xufTtcblxuLyoqXG4gKiBHZXQgc2NvcGUgZnJvbSB0aGUgc2NvcGVzIGxpc3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHNjb3BlIG5hbWVcbiAqIEByZXR1cm5zIHtTY29wZX1cbiAqL1xuQWtpbGkuZ2V0U2NvcGUgPSBmdW5jdGlvbihuYW1lKSB7XG4gIHJldHVybiB0aGlzLl9fc2NvcGVzW25hbWVdO1xufTtcblxuLyoqXG4gKiBEZWxldGUgc2NvcGUgZnJvbSB0aGUgc2NvcGVzIGxpc3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHNjb3BlIG5hbWVcbiAqL1xuQWtpbGkucmVtb3ZlU2NvcGUgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGxldCBzY29wZSA9IHRoaXMuX19zY29wZXNbbmFtZV07XG5cbiAgc2NvcGUuX19jb21wb25lbnQgPSBudWxsO1xuICBzY29wZS5fX2VsID0gbnVsbDtcbiAgc2NvcGUuX19wYXJlbnQgPSBudWxsO1xuICB0aGlzLl9fc2NvcGVzW25hbWVdID0gbnVsbDtcbiAgZGVsZXRlIHRoaXMuX19zY29wZXNbbmFtZV07XG59O1xuXG4vKipcbiAqIEdldCBhbGwgZWxlbWVudHMgd2l0aCBhdHRhY2hlZCBBa2lsaSBjb21wb25lbnRzXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3RyZWU9dHJ1ZV0gLSByZXR1cm4gYXJyYXkgb2YgdGhlIHBhcmVudHMgaWYgdHJ1ZSwgY2xvc2VzdCBwYXJlbnQgaWYgZmFsc2VcbiAqIEByZXR1cm5zIHtBcnJheXxIVE1MRWxlbWVudHxudWxsfVxuICovXG5Ba2lsaS5nZXRBa2lsaVBhcmVudHMgPSBmdW5jdGlvbiAoZWwsIHRyZWUgPSB0cnVlKSB7XG4gIGxldCBhcnIgPSBbXTtcblxuICBmdW5jdGlvbiBjaGVjayhub2RlKSB7XG4gICAgaWYoIW5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKG5vZGUucGFyZW50Tm9kZS5fX2FraWxpKSB7XG4gICAgICBhcnIucHVzaChub2RlLnBhcmVudE5vZGUpO1xuXG4gICAgICBpZighdHJlZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2sobm9kZS5wYXJlbnROb2RlKTtcbiAgfVxuXG4gIGNoZWNrKGVsKTtcblxuICByZXR1cm4gdHJlZT8gYXJyOiBhcnJbMF07XG59O1xuXG4vKipcbiAqIFNldCBlbGVtZW50IGlubmVyIGh0bWwgd2l0aCBjb250ZW50IHJlcGxhY2luZ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwiPGk+SGVsbG88L2k+PGI+V29ybGQ8L2I+XCJcbiAqIGVsLmlubmVySFRNTCA9IFwiPGI+V29ybGQ8L2I+XCI7XG4gKiBBa2lsaS5zZXRUZW1wbGF0ZShlbCwgXCI8aT5IZWxsbzwvaT4ke3RoaXMuX19jaGlsZHJlbn1cIik7XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuQWtpbGkuc2V0VGVtcGxhdGUgPSBmdW5jdGlvbihlbCwgdGVtcGxhdGUpIHtcbiAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKC9cXCR7KCgoPyFcXCR7KVxccyp0aGlzXFwuX19jb250ZW50XFxzKikqKX0vLCBlbC5pbm5lckhUTUwpO1xuICBlbC5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcblxuICByZXR1cm4gZWwuaW5uZXJIVE1MO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSB1bmlxdWUgc2NvcGUgbmFtZVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbkFraWxpLmNyZWF0ZVNjb3BlTmFtZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdXRpbHMuY3JlYXRlUmFuZG9tU3RyaW5nKDE2LCAoc3RyKSA9PiB7XG4gICAgcmV0dXJuICEhdGhpcy5fX3Njb3Blc1tzdHJdO1xuICB9KTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSBmdW5jdGlvbi5cbiAqIEV2ZXJ5IHNjb3BlIHZhcmlhYmxlIGNoYW5nZSBjYWxscyBhY2NvcmRpbmcgbm9kZSBldmFsdWF0aW9uLlxuICogRm9yIGV4YW1wbGUsIGlmIHlvdSBjaGFuZ2Ugc29tZSBzY29wZSB2YXJpYWJsZSBpbiB0aGUgbG9vcCAtIGV2YWx1YXRpb24gd2lsbCBiZSBjYWxsZWQgb24gdGhlIGVhY2ggY2hhbmdlLlxuICogSXQgbWF5IGJlIHNsb3cgZm9yIHRoZSBhcHBsaWNhdGlvbi5cbiAqIFlvdSBjYW4gaXNvbGF0ZSB0aGlzIGFjdGlvbiBhbmQgcnVuIGFsbCBldmFsdWF0aW9uIHByb2Nlc3MgYWZ0ZXIgcGFzc2VkIGZ1bmN0aW9uIGF0IG9uY2UuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS5pc29sYXRlID0gZnVuY3Rpb24oZm4pIHtcbiAgaWYodGhpcy5fX2lzb2xhdGlvbikge1xuICAgIHJldHVybiBmbigpO1xuICB9XG5cbiAgdGhpcy5fX2lzb2xhdGlvbiA9IHt9O1xuXG4gIGxldCByZXMgPSBmbigpO1xuICBsZXQgcHJvcHMgPSBbXTtcblxuICBmb3IobGV0IGsgaW4gdGhpcy5fX2lzb2xhdGlvbikge1xuICAgIGlmKCF0aGlzLl9faXNvbGF0aW9uLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBwcm9wcy5wdXNoKHRoaXMuX19pc29sYXRpb25ba10pO1xuICB9XG5cbiAgdGhpcy5fX2lzb2xhdGlvbiA9IG51bGw7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IHByb3BzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBwcm9wID0gcHJvcHNbaV07XG5cbiAgICBpZihwcm9wLmlzRGVsZXRlZCkge1xuICAgICAgcHJvcC5jb21wb25lbnQuX19ldmFsdWF0ZUJ5S2V5cyhwcm9wLmtleXMsIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKHByb3Aua2V5cywgcHJvcC5jb21wb25lbnQuc2NvcGUsIChsYXN0LCB2YWwpID0+IHtcbiAgICAgIGlmKCFsYXN0KSB7XG4gICAgICAgIHJldHVybiB2YWwgfHwge307XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcm9wLnZhbHVlO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvcHMgPSBudWxsO1xuXG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIFN0b3AgZXZhbHVhdGlvbiBiZWZvcmUgdGhlIGZ1bmN0aW9uIGFuZCBjb250aW51ZSBhZnRlclxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkudW5ldmFsdWF0ZWQgPSBmdW5jdGlvbihmbikge1xuICBsZXQgZXZhbHVhdGlvbiA9IHRoaXMuX19ldmFsdWF0aW9uO1xuICBsZXQgcmVzO1xuXG4gIHRoaXMuX19ldmFsdWF0aW9uID0gbnVsbDtcbiAgcmVzID0gZm4oKTtcbiAgdGhpcy5fX2V2YWx1YXRpb24gPSBldmFsdWF0aW9uO1xuXG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIFN0b3AgaXNvbGF0aW9uIGJlZm9yZSB0aGUgZnVuY3Rpb24gYW5kIGNvbnRpbnVlIGFmdGVyXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS51bmlzb2xhdGVkID0gZnVuY3Rpb24oZm4pIHtcbiAgbGV0IGV2YWx1YXRpb24gPSB0aGlzLl9faXNvbGF0aW9uO1xuICBsZXQgcmVzO1xuXG4gIHRoaXMuX19pc29sYXRpb24gPSBudWxsO1xuICByZXMgPSBmbigpO1xuICB0aGlzLl9faXNvbGF0aW9uID0gZXZhbHVhdGlvbjtcblxuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zPXt9XVxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLmluaXRpYWxpemUgPSBmdW5jdGlvbihlbCwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCByZWNvbXBpbGUgPSBvcHRpb25zLnJlY29tcGlsZTtcbiAgbGV0IGNvbXBvbmVudCA9IGVsLl9fYWtpbGk7XG5cbiAgaWYoY29tcG9uZW50KSB7XG4gICAgaWYocmVjb21waWxlKSB7XG4gICAgICBjb21wb25lbnQuX19yZWNvbXBpbGUoKTtcblxuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgaXNSb290ID0gZWwgPT09IHRoaXMuX19yb290O1xuICBsZXQgY29tcG9uZW50TmFtZSA9IHV0aWxzLnRvRGFzaENhc2UoZWwuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKSB8fCBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpO1xuICBsZXQgX0NvbXBvbmVudCA9IHRoaXMuX19jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdO1xuXG4gIENIRUNLX0FMSUFTRVM6IGlmKCFfQ29tcG9uZW50KSB7XG4gICAgbGV0IHNlbGVjdG9ycyA9IE9iamVjdC5rZXlzKHRoaXMuX19hbGlhc2VzKTtcblxuICAgIGlmKCFzZWxlY3RvcnMubGVuZ3RoKSB7XG4gICAgICBicmVhayBDSEVDS19BTElBU0VTO1xuICAgIH1cblxuICAgIGxldCBzZWxlY3RvckFsbCA9IHNlbGVjdG9ycy5qb2luKCcsJyk7XG5cbiAgICBpZighZWwubWF0Y2hlcyhzZWxlY3RvckFsbCkpIHtcbiAgICAgIGJyZWFrIENIRUNLX0FMSUFTRVM7XG4gICAgfVxuXG4gICAgZm9yKGxldCBzZWxlY3RvciBpbiB0aGlzLl9fYWxpYXNlcykge1xuICAgICAgaWYoIXRoaXMuX19hbGlhc2VzLmhhc093blByb3BlcnR5KHNlbGVjdG9yKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYoZWwubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgX0NvbXBvbmVudCA9IHRoaXMuX19jb21wb25lbnRzW3RoaXMuX19hbGlhc2VzW3NlbGVjdG9yXV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmKCFfQ29tcG9uZW50ICYmICFpc1Jvb3QpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZighX0NvbXBvbmVudCkge1xuICAgIF9Db21wb25lbnQgPSB0aGlzLkNvbXBvbmVudDtcbiAgfVxuXG4gIGlmKF9Db21wb25lbnQubWF0Y2hlcyAmJiAhZWwubWF0Y2hlcyhfQ29tcG9uZW50Lm1hdGNoZXMpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29tcG9uZW50ID0gbmV3IF9Db21wb25lbnQoZWwsIHt9KTtcblxuICBpZihjb21wb25lbnQuX19jYW5jZWxsZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb21wb25lbnQuX19jcmVhdGUoKTtcblxuICByZXR1cm4gY29tcG9uZW50O1xufTtcblxuLyoqXG4gKiBDb21waWxlIHRoZSBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbkFraWxpLmNvbXBpbGUgPSBmdW5jdGlvbihyb290LCBvcHRpb25zID0geyByZWNvbXBpbGU6IGZhbHNlIH0pIHsgIFxuICBsZXQgZWxlbWVudHMgPSBbXTtcblxuICBsZXQgbmVzdGVkSW5pdGlhbGl6aW5nID0gKGVsKSA9PiB7XG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXMuaW5pdGlhbGl6ZShlbCwgb3B0aW9ucyk7XG4gICAgbGV0IGNoaWxkcmVuID0gZWwuY2hpbGRyZW47XG5cbiAgICBjb21wb25lbnQgJiYgZWxlbWVudHMucHVzaChjb21wb25lbnQpO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgIG5lc3RlZEluaXRpYWxpemluZyhjaGlsZCk7XG4gICAgfVxuICB9O1xuXG4gIG5lc3RlZEluaXRpYWxpemluZyhyb290KTtcblxuICBsZXQgcCA9IFtdO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgY29tcG9uZW50ID0gZWxlbWVudHNbaV07XG5cbiAgICBwLnB1c2goY29tcG9uZW50Ll9fY29tcGlsZSgpKTtcbiAgfVxuXG4gIHJldHVybiBQcm9taXNlLmFsbChwKS50aGVuKCgpID0+IHtcbiAgICBsZXQgciA9IFtdO1xuXG4gICAgZm9yKGxldCBpID0gZWxlbWVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBjb21wb25lbnQgPSBlbGVtZW50c1tpXTtcblxuICAgICAgci5wdXNoKGNvbXBvbmVudC5fX3Jlc29sdmUoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHIpO1xuICB9KTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIGNvbXBvbmVudCBvciBnZXQgaXQgaWYgZm4gaXMgbm90IHBhc3NlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gW2ZuXVxuICovXG5Ba2lsaS5jb21wb25lbnQgPSBmdW5jdGlvbihuYW1lLCBmbikge1xuICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmKCFmbikge1xuICAgIHJldHVybiB0aGlzLl9fY29tcG9uZW50c1tuYW1lXSB8fCBudWxsO1xuICB9XG5cbiAgaWYodGhpcy5fX2NvbXBvbmVudHNbbmFtZV0gJiYgQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgIGNvbnNvbGUud2FybihgQ29tcG9uZW50ICR7bmFtZX0gYWxyZWFkeSB3YXMgYWRkZWRgKTtcbiAgfVxuXG4gIHRoaXMuX19jb21wb25lbnRzW25hbWVdID0gZm47XG59O1xuXG4vKipcbiAqIFVucmVnaXN0ZXIgdGhlIGNvbXBvbmVudFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbkFraWxpLnVucmVnaXN0ZXJDb21wb25lbnQgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLl9fY29tcG9uZW50c1tuYW1lXTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIHNlbGVjdG9yIGFsaWFzIG9yIGdldCBpdCBpZiBjb21wb25lbnQgbmFtZSBpcyBub3QgcGFzc2VkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIC0gRE9NIHNlbGVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvbXBvbmVudE5hbWVdXG4gKi9cbkFraWxpLmFsaWFzID0gZnVuY3Rpb24oc2VsZWN0b3IsIGNvbXBvbmVudE5hbWUgPSAnJykge1xuICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmKCFjb21wb25lbnROYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXSB8fCBudWxsO1xuICB9XG5cbiAgaWYodGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdICYmIEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICBjb25zb2xlLndhcm4oYEFsaWFzIHdpdGggc2VsZWN0b3IgJHtzZWxlY3Rvcn0gYWxyZWFkeSB3YXMgYWRkZWRgKTtcbiAgfVxuXG4gIHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXSA9IGNvbXBvbmVudE5hbWU7XG59O1xuXG4vKipcbiAqIFVucmVnaXN0ZXIgdGhlIHNlbGVjdG9yIGFsaWFzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gKi9cbkFraWxpLnVucmVnaXN0ZXJBbGlhcyA9IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gIGRlbGV0ZSB0aGlzLl9fY29tcG9uZW50c1tzZWxlY3Rvcl07XG59O1xuXG4vKipcbiAqIElzb2xhdGUgYXJyYXkgcHJvdG90eXBlIGZ1bmN0aW9uc1xuICovXG5Ba2lsaS5pc29sYXRlQXJyYXlQcm90b3R5cGUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fX3dpbmRvdy5BcnJheSA9IHsgcHJvdG90eXBlOiB7fSB9O1xuXG4gIGxldCBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoQXJyYXkucHJvdG90eXBlKTtcblxuICBmb3IobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICBsZXQgb2xkID0gQXJyYXkucHJvdG90eXBlW2tleV07XG5cbiAgICBpZih0eXBlb2Ygb2xkICE9ICdmdW5jdGlvbicgfHwga2V5ID09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHRoaXMuX193aW5kb3cuQXJyYXkucHJvdG90eXBlW2tleV0gPSBvbGQ7XG5cbiAgICBBcnJheS5wcm90b3R5cGVba2V5XSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIEFraWxpLnVuZXZhbHVhdGVkKCgpID0+IHtcbiAgICAgICAgaWYoIXRoaXMuX19pc1Byb3h5KSB7XG4gICAgICAgICAgcmV0dXJuIG9sZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBvbGQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG59O1xuXG4vKipcbiAqIElzb2xhdGUgc29tZSB3aW5kb3cgZnVuY3Rpb25zXG4gKi9cbkFraWxpLmlzb2xhdGVXaW5kb3dGdW5jdGlvbnMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fX3dpbmRvdy5zZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgdGhpcy5fX3dpbmRvdy5zZXRJbnRlcnZhbCA9IHNldEludGVydmFsO1xuICB0aGlzLl9fd2luZG93LlByb21pc2UgPSBQcm9taXNlO1xuXG4gIHdpbmRvdy5zZXRUaW1lb3V0ID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuc2V0VGltZW91dCwgMCk7XG4gIHdpbmRvdy5zZXRJbnRlcnZhbCA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LnNldEludGVydmFsLCAwKTtcbiAgd2luZG93LlByb21pc2UgJiYgKHdpbmRvdy5Qcm9taXNlLmNvbnN0cnVjdG9yID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuUHJvbWlzZS5jb25zdHJ1Y3RvciAsIDApKTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSBldmVudCBsaXN0ZW5lcnNcbiAqL1xuQWtpbGkuaXNvbGF0ZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQgPSB7IHByb3RvdHlwZToge30gfTtcblxuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBFbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyO1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyO1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZTtcblxuICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICBkZWxldGUgdGhpcy5fX2FraWxpTGlzdGVuZXJzO1xuXG4gICAgcmV0dXJuIEFraWxpLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihuYW1lLCBmbikge1xuICAgIGxldCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYoIXRoaXMuX19ha2lsaUxpc3RlbmVycykge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzID0ge307XG4gICAgfVxuXG4gICAgaWYoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgYXJnc1sxXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBBa2lsaS51bmV2YWx1YXRlZCgoKSA9PiB7XG4gICAgICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLnB1c2goe1xuICAgICAgbGluazogZm4sXG4gICAgICBmbjogYXJnc1sxXVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIEFraWxpLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG5cbiAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYoIXRoaXMuX19ha2lsaUxpc3RlbmVycykge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzID0ge307XG4gICAgfVxuXG4gICAgaWYoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBsaXN0ZW5lciA9IHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXVtpXTtcblxuICAgICAgaWYobGlzdGVuZXIubGluayA9PT0gZm4pIHtcbiAgICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLnNwbGljZShpLCAxKTtcbiAgICAgICAgaS0tO1xuICAgICAgICBsLS07XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV07XG4gICAgfVxuXG4gICAgcmV0dXJuICBBa2lsaS5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG4vKipcbiAqIFdyYXAgdGhlIGZ1bmN0aW9uIGNhbGxiYWNrIHRvIGFuIGlzb2xhdGUgY29udGV4dFxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IFtwb3M9XCJsYXN0XCJdXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbkFraWxpLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uID0gZnVuY3Rpb24oZm4sIHBvcyA9ICdsYXN0Jykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgbGV0IGNhbGxiYWNrID0gcG9zID09ICdsYXN0Jz8gYXJnc1thcmdzLmxlbmd0aCAtIDFdOiBhcmdzW3Bvc107XG5cbiAgICBpZih0eXBlb2YgY2FsbGJhY2sgIT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgYXJnc1swXSA9ICgpID0+IHtcbiAgICAgIHJldHVybiBBa2lsaS51bmV2YWx1YXRlZCgoKSA9PiB7XG4gICAgICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xufTtcblxuLyoqXG4gKiBJc29sYXRlIHRoZSBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge29iamVjdH0gW2NvbnRleHRdXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbkFraWxpLmlzb2xhdGVGdW5jdGlvbiA9IGZ1bmN0aW9uKGZuLCBjb250ZXh0ID0gbnVsbCkge1xuICBpZihmbi5fX2FraWxpKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgbGV0IG9GbiA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IHRoaXM7XG5cbiAgICByZXR1cm4gQWtpbGkudW5ldmFsdWF0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICByZXR1cm4gZm4uYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvRm4sICdfX2FraWxpJywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcblxuICByZXR1cm4gb0ZuO1xufTtcblxuLyoqXG4gKiBFcnJvciBoYW5kbGluZ1xuICovXG5Ba2lsaS5lcnJvckhhbmRsaW5nID0gZnVuY3Rpb24oKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICB0aGlzLnRyaWdnZXJJbml0KGZhbHNlKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFRyaWdnZXIgYW4gaW5pdGlhbGl6YXRpb24gc3RhdHVzXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBzdGF0dXNcbiAqL1xuQWtpbGkudHJpZ2dlckluaXQgPSBmdW5jdGlvbihzdGF0dXMpIHtcbiAgQWtpbGkuX19pbml0ID0gc3RhdHVzO1xuICB0aGlzLl9fc2VydmVyUmVuZGVyaW5nICYmICh0aGlzLl9faHRtbC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnKTtcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdha2lsaS1pbml0JywgeyBkZXRhaWw6IHN0YXR1cyB9KSk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIGFwcGxpY2F0aW9uXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW3Jvb3RdXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuQWtpbGkuaW5pdCA9IGZ1bmN0aW9uKHJvb3QpIHtcbiAgbGV0IHNlcnZlclAgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgbGV0IHNlcnZlciA9IHRoaXMuX19odG1sLmdldEF0dHJpYnV0ZSgnYWtpbGktc2VydmVyJyk7XG5cbiAgdGhpcy5fX3Jvb3QgPSByb290IHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpO1xuICB0aGlzLl9fc2VydmVyUmVuZGVyaW5nID0gISFzZXJ2ZXI7XG5cbiAgaWYoc2VydmVyKSB7XG4gICAgdGhpcy5fX2h0bWwuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5fX2h0bWwuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXG4gICAgc2VydmVyUCA9IHJlcXVlc3QuZ2V0KHNlcnZlcikudGhlbigocmVzKSA9PiB7XG4gICAgICB0aGlzLl9faHRtbC5pbm5lckhUTUwgPSByZXMuZGF0YTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBzZXJ2ZXJQLnRoZW4oKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLmNvbXBpbGUodGhpcy5fX3Jvb3QpLnRoZW4oKCkgPT4ge1xuICAgICAgaWYocm91dGVyLl9faW5pdCkge1xuICAgICAgICByZXR1cm4gcm91dGVyLmNoYW5nZVN0YXRlKCk7XG4gICAgICB9XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnRyaWdnZXJJbml0KHRydWUpO1xuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHRoaXMudHJpZ2dlckluaXQoZmFsc2UpO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbi8qKlxuICogRGVuaXRpYWxpemUgdGhlIGFwcGxpY2F0aW9uXG4gKi9cbkFraWxpLmRlaW5pdCA9IGZ1bmN0aW9uKCkge1xuICBmb3IobGV0IGtleSBpbiB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlKSB7XG4gICAgRWxlbWVudC5wcm90b3R5cGVba2V5XSA9IHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGVba2V5XTtcbiAgfVxuXG4gIGZvcihsZXQga2V5IGluIHRoaXMuX193aW5kb3cuQXJyYXkucHJvdG90eXBlKSB7XG4gICAgQXJyYXkucHJvdG90eXBlW2tleV0gPSB0aGlzLl9fd2luZG93LkFycmF5LnByb3RvdHlwZVtrZXldO1xuICB9XG5cbiAgd2luZG93LnNldFRpbWVvdXQgPSB0aGlzLl9fd2luZG93LnNldFRpbWVvdXQ7XG4gIHdpbmRvdy5zZXRJbnRlcnZhbCA9IHRoaXMuX193aW5kb3cuc2V0SW50ZXJ2YWw7XG4gIHdpbmRvdy5Qcm9taXNlID0gdGhpcy5fX3dpbmRvdy5Qcm9taXNlO1xufVxuXG4vKipcbiAqIERlZmluZSBhbGwgZGVmYXVsdCBjb21wb25lbnRzXG4gKi9cbkFraWxpLmRlZmluZSA9IGZ1bmN0aW9uKCkge1xuICBBLmRlZmluZSgpO1xuICBDb250ZW50LmRlZmluZSgpO1xuICBDb21wb25lbnQuZGVmaW5lKCk7XG4gIEVtYmVkLmRlZmluZSgpO1xuICBGb3IuZGVmaW5lKCk7XG4gIEluY2x1ZGUuZGVmaW5lKCk7XG4gIElmcmFtZS5kZWZpbmUoKTtcbiAgSW1hZ2UuZGVmaW5lKCk7XG4gIElucHV0LmRlZmluZSgpO1xuICBJZi5kZWZpbmUoKTtcbiAgUmFkaW8uZGVmaW5lKCk7XG4gIFJvdXRlLmRlZmluZSgpO1xuICBTZWxlY3QuZGVmaW5lKCk7XG4gIFRleHRhcmVhLmRlZmluZSgpO1xufTtcblxuQWtpbGkuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuQWtpbGkuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuQWtpbGkuU2NvcGUgPSBTY29wZTtcbkFraWxpLnV0aWxzID0gdXRpbHM7XG5Ba2lsaS5jb21wb25lbnRzLkEgPSBBO1xuQWtpbGkuY29tcG9uZW50cy5Db250ZW50ID0gQ29udGVudDtcbkFraWxpLmNvbXBvbmVudHMuRm9yID0gRm9yO1xuQWtpbGkuY29tcG9uZW50cy5FbWJlZCA9IEVtYmVkO1xuQWtpbGkuY29tcG9uZW50cy5JZiA9IElmO1xuQWtpbGkuY29tcG9uZW50cy5JbmNsdWRlID0gSW5jbHVkZTtcbkFraWxpLmNvbXBvbmVudHMuSW5wdXQgPSBJbnB1dDtcbkFraWxpLmNvbXBvbmVudHMuSWZyYW1lID0gSWZyYW1lO1xuQWtpbGkuY29tcG9uZW50cy5JbWFnZSA9IEltYWdlO1xuQWtpbGkuY29tcG9uZW50cy5SYWRpbyA9IFJhZGlvO1xuQWtpbGkuY29tcG9uZW50cy5Sb3V0ZSA9IFJvdXRlO1xuQWtpbGkuY29tcG9uZW50cy5TZWxlY3QgPSBTZWxlY3Q7XG5Ba2lsaS5jb21wb25lbnRzLlRleHQgPSBUZXh0O1xuQWtpbGkuY29tcG9uZW50cy5UZXh0YXJlYSA9IFRleHRhcmVhO1xuQWtpbGkuc2VydmljZXMucmVxdWVzdCA9IHJlcXVlc3Q7XG5Ba2lsaS5zZXJ2aWNlcy5yb3V0ZXIgPSByb3V0ZXI7XG5cbndpbmRvdy5Ba2lsaSA9IEFraWxpO1xuXG5leHBvcnQgY29uc3QgY29tcG9uZW50cyA9IEFraWxpLmNvbXBvbmVudHM7XG5leHBvcnQgY29uc3Qgc2VydmljZXMgPSBBa2lsaS5zZXJ2aWNlcztcbmV4cG9ydCBkZWZhdWx0IEFraWxpO1xuXG5Ba2lsaS5kZWZpbmUoKTtcbkFraWxpLmVycm9ySGFuZGxpbmcoKTtcbkFraWxpLmlzb2xhdGVFdmVudHMoKTtcbkFraWxpLmlzb2xhdGVBcnJheVByb3RvdHlwZSgpO1xuQWtpbGkuaXNvbGF0ZVdpbmRvd0Z1bmN0aW9ucygpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ha2lsaS5qcyIsImltcG9ydCBBa2lsaSBmcm9tICcuL2FraWxpLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5cbmNvbnN0IGV2YWx1YXRpb25SZWdleCA9IC9cXCR7KCgoPyFcXCR7KS4pKil9LztcbmNvbnN0IGV2YWx1YXRpb25SZWdleEdsb2JhbCA9IG5ldyBSZWdFeHAoZXZhbHVhdGlvblJlZ2V4LnNvdXJjZSwgXCJnXCIpO1xuY29uc3Qgc3lzdGVtQXR0cmlidXRlcyA9IFsnY29tcG9uZW50JywgJ3Njb3BlJ107XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBuZXN0ZWRXYXRjaGluZztcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gW107XG4gIHN0YXRpYyBldmVudHMgPSBbXTtcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gZmFsc2U7XG4gIHN0YXRpYyB0cmFuc3BhcmVudCA9IGZhbHNlO1xuICBzdGF0aWMgdGVtcGxhdGUgPSAnJztcbiAgc3RhdGljIHRlbXBsYXRlVXJsID0gJyc7XG4gIHN0YXRpYyBzY29wZSA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRvIGRlZmluZSB0aGUgY29tcG9uZW50XG4gICAqL1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnY29tcG9uZW50JywgQ29tcG9uZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSB0aGUgZXhwcmVzc2lvblxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwcmVzc2lvblxuICAgKiBAcGFyYW0ge0V2ZW50fSBbZXZlbnQ9bnVsbF1cbiAgICovXG4gIHN0YXRpYyBwYXJzZShjb250ZXh0LCBleHByZXNzaW9uLCBldmVudCA9IG51bGwpIHtcbiAgICByZXR1cm4gKGZ1bmN0aW9uIChleHByZXNzaW9uLCBldmVudCkge1xuICAgICAgcmV0dXJuIGV2YWwoZXhwcmVzc2lvbik7XG4gICAgfSkuY2FsbChjb250ZXh0LCBleHByZXNzaW9uLCBldmVudClcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVsLCBzY29wZSA9IHt9KSB7XG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19pc0NvbXBpbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19iaW5kaW5ncyA9IHt9O1xuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSBudWxsO1xuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IG51bGw7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IHt9O1xuICAgIHRoaXMuX19kaXNhYmxlUHJveHkgPSBudWxsO1xuICAgIHRoaXMuX19jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuX19wYXJlbnQgPSBudWxsO1xuICAgIHRoaXMuX19wYXJlbnRzID0gW107XG4gICAgdGhpcy5fX2F0dHJzID0ge307XG4gICAgdGhpcy5fX2F0dHJpYnV0ZU9mID0gbnVsbDtcbiAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudCA9IHRoaXM7XG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gdGhlIHJlY29tcGlsYXRpb25cbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZWNvbXBpbGUoKSB7XG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19pc0NvbXBpbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQuX19kaXNhYmxlUHJveHkgPSBudWxsO1xuICAgIHRoaXMuX19jb21waWxpbmcgPSB7fTtcbiAgICB0aGlzLl9fcmVjb21waWxpbmcgPSB7fTtcbiAgICB0aGlzLl9fc2V0RXZlbnRzKCk7XG4gICAgdGhpcy5fX3NldFBhcmVudHMoKTtcbiAgICB0aGlzLl9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKTtcbiAgICB0aGlzLl9fZGVmaW5lQXR0cmlidXRlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiB0aGUgY3JlYXRpb25cbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGUoKSB7XG4gICAgdGhpcy5lbC5fX2FraWxpID0gdGhpcztcbiAgICB0aGlzLl9faW5pdGlhbGl6ZSgpO1xuICAgIHRoaXMuX19zZXRFdmVudHMoKTtcbiAgICB0aGlzLl9fc2V0UGFyZW50cygpO1xuICAgIHRoaXMuX19zZXRCb29sZWFuQXR0cmlidXRlcygpO1xuICAgIHRoaXMuX19kZWZpbmVBdHRyaWJ1dGVzKCk7XG5cbiAgICBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgIHRoaXMuY3JlYXRlZCh0aGlzLmF0dHJzKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gdGhlIGNvbXBpbGF0aW9uXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBfX2NvbXBpbGUoKSB7XG4gICAgbGV0IGNvbnRyb2wgPSB0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMgfHwgIXRoaXMuX19ldmFsdWF0ZVBhcmVudDtcbiAgICBsZXQgcCA9IFByb21pc2UucmVzb2x2ZSgpO1xuXG4gICAgdGhpcy5fX2F0dHJpYnV0ZU9mID0gY29udHJvbD8gdGhpczogdGhpcy5fX2V2YWx1YXRlUGFyZW50Ll9fYWtpbGk7XG5cbiAgICBpZighdGhpcy5fX3JlY29tcGlsaW5nIHx8IHRoaXMuX19jb21waWxpbmcubmV3UGFyZW50IHx8IHRoaXMuX19jb250cm9sQXR0cmlidXRlcykge1xuICAgICAgdGhpcy5fX2ludGVycG9sYXRlQXR0cmlidXRlcyh0aGlzLmVsLCB0aGlzLl9fYXR0cmlidXRlT2YpO1xuICAgIH1cblxuICAgIGxldCBpbnRlcnBvbGF0ZSA9IChjaGlsZHJlbiwgcGFyZW50KSA9PiB7XG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmKGNoaWxkLm5vZGVUeXBlID09IDMpIHtcbiAgICAgICAgICB0aGlzLl9faW5pdGlhbGl6ZU5vZGUoY2hpbGQsIHBhcmVudCk7XG5cbiAgICAgICAgICBjaGlsZC5ub2RlVmFsdWUgPSB0aGlzLl9fZXZhbHVhdGUoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoY2hpbGQubm9kZVR5cGUgPT0gMSAmJiAhY2hpbGQuX19ha2lsaSkge1xuICAgICAgICAgIHRoaXMuX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXMoY2hpbGQpO1xuICAgICAgICAgIGludGVycG9sYXRlKGNoaWxkLmNoaWxkTm9kZXMsIGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpbnRlcnBvbGF0ZSh0aGlzLmVsLmNoaWxkTm9kZXMsIHRoaXMuZWwpO1xuICAgIHRoaXMuX19pc01vdW50ZWQgPSB0cnVlO1xuXG4gICAgbGV0IHJlcztcblxuICAgIGlmKCF0aGlzLl9fcmVjb21waWxpbmcpIHtcbiAgICAgIHJlcyA9IEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uQ29tcGlsZWQgJiYgdGhpcy5hdHRycy5vbkNvbXBpbGVkLnRyaWdnZXIoKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5jb21waWxlZCgpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmKHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGVVcmwpIHtcbiAgICAgICAgcCA9IHJlcXVlc3QuZ2V0KHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGVVcmwpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5fX2NvbnRlbnQ7XG4gICAgICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgcmVzLmRhdGEpO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9fY29udGVudDtcblxuICAgICAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgdGhpcy5hdHRycy5vblJlY29tcGlsZWQgJiYgdGhpcy5hdHRycy5vblJlY29tcGlsZWQudHJpZ2dlcigpO1xuICAgICAgICB0aGlzLnJlY29tcGlsZWQoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX19pc0NvbXBpbGVkID0gdHJ1ZTtcbiAgICB0aGlzLl9fcmVjb21waWxpbmcgPSBudWxsO1xuICAgIHRoaXMuX19jb21waWxpbmcgPSBudWxsO1xuXG4gICAgcmV0dXJuIHAudGhlbigoKSA9PiB7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmUgdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgX19yZXNvbHZlKCkge1xuICAgIGlmKHRoaXMuX19yZWNvbXBpbGluZykge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuYXR0cnMub25SZXNvbHZlZCAmJiB0aGlzLmF0dHJzLm9uUmVzb2x2ZWQudHJpZ2dlcigpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5yZXNvbHZlZCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJ0IG9mIHRoZSB7QHNlZSBDb21wb25lbnQjX19jb21waWxlfSBtZXRob2RcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbml0aWFsaXplKCkge1xuICAgIGxldCBwYXJlbnQgPSBBa2lsaS5nZXRBa2lsaVBhcmVudHModGhpcy5lbCwgZmFsc2UpO1xuICAgIGxldCBTY29wZSA9IHRoaXMuY29uc3RydWN0b3Iuc2NvcGUgfHwgQWtpbGkuU2NvcGU7XG4gICAgbGV0IHNjb3BlO1xuICAgIGxldCBpc1Jvb3QgPSBBa2lsaS5fX3Jvb3QgPT09IHRoaXMuZWw7XG5cbiAgICBpZihwYXJlbnQpIHtcbiAgICAgIHNjb3BlID0gbmV3IFNjb3BlKHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdzY29wZScpIHx8IEFraWxpLmNyZWF0ZVNjb3BlTmFtZSgpLCB0aGlzLmVsLCB0aGlzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzY29wZSA9IG5ldyBTY29wZShpc1Jvb3Q/ICdyb290JzogQWtpbGkuY3JlYXRlU2NvcGVOYW1lKCksIHRoaXMuZWwsIHRoaXMpO1xuICAgICAgaXNSb290ICYmIChBa2lsaS5yb290ID0gdGhpcyk7XG4gICAgfVxuXG4gICAgbGV0IF9fc2NvcGUgPSBzY29wZTtcbiAgICBsZXQgX3Njb3BlID0gT2JqZWN0LmFzc2lnbihzY29wZSwgdGhpcy5zY29wZSk7XG4gICAgbGV0IG5lc3RlZFdhdGNoaW5nID0gQWtpbGkub3B0aW9ucy5uZXN0ZWRXYXRjaGluZztcbiAgICBsZXQgY29udHJvbEF0dHJpYnV0ZXMgPSB0aGlzLmNvbnN0cnVjdG9yLmNvbnRyb2xBdHRyaWJ1dGVzO1xuICAgIGxldCBldmVudHMgPSB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50cztcblxuICAgIGlmKHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGUpIHtcbiAgICAgIEFraWxpLnNldFRlbXBsYXRlKHRoaXMuZWwsIHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGUpO1xuICAgIH1cblxuICAgIGlmKHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGVVcmwpIHtcbiAgICAgIHRoaXMuX19jb250ZW50ID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIH1cblxuICAgIGlmKHRoaXMuY29uc3RydWN0b3IubmVzdGVkV2F0Y2hpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbmVzdGVkV2F0Y2hpbmcgPSB0aGlzLmNvbnN0cnVjdG9yLm5lc3RlZFdhdGNoaW5nO1xuICAgIH1cbiAgICBlbHNlIGlmKFNjb3BlLm5lc3RlZFdhdGNoaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG5lc3RlZFdhdGNoaW5nID0gU2NvcGUubmVzdGVkV2F0Y2hpbmc7XG4gICAgfVxuXG4gICAgdGhpcy5fX3Njb3BlID0gX19zY29wZTtcbiAgICB0aGlzLl9fZXZlbnRzID0gZXZlbnRzO1xuICAgIHRoaXMuX19uZXN0ZWRXYXRjaGluZyA9IG5lc3RlZFdhdGNoaW5nO1xuICAgIHRoaXMuX19jb250cm9sQXR0cmlidXRlcyA9IGNvbnRyb2xBdHRyaWJ1dGVzO1xuXG4gICAgQWtpbGkuYWRkU2NvcGUoc2NvcGUpO1xuXG4gICAgaWYobmVzdGVkV2F0Y2hpbmcpIHtcbiAgICAgIHNjb3BlID0gdGhpcy5fX25lc3RlZE9ic2VydmUoX3Njb3BlLCBbXSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2NvcGUgPSB0aGlzLl9fb2JzZXJ2ZShfc2NvcGUsIFtdKTtcbiAgICB9XG5cbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGJvb2xlYW4gYXR0cmlidXRlc1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldEJvb2xlYW5BdHRyaWJ1dGVzKCkge1xuICAgIHRoaXMuYm9vbGVhbkF0dHJpYnV0ZXMgPSBbXS5jb25jYXQoQWtpbGkuaHRtbEJvb2xlYW5BdHRyaWJ1dGVzLCB0aGlzLmNvbnN0cnVjdG9yLmJvb2xlYW5BdHRyaWJ1dGVzKTtcblxuICAgIGxldCBzZXRBdHRyID0gKGVsKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgYXR0cnMgPSBlbC5hdHRyaWJ1dGVzLCBsID0gYXR0cnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBub2RlID0gYXR0cnNbaV07XG5cbiAgICAgICAgaWYodGhpcy5ib29sZWFuQXR0cmlidXRlcy5pbmRleE9mKG5vZGUubm9kZU5hbWUpICE9IC0xKSB7XG4gICAgICAgICAgaWYoZWwuaGFzQXR0cmlidXRlKGBib29sZWFuLSR7bm9kZS5ub2RlTmFtZX1gKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGBib29sZWFuLSR7bm9kZS5ub2RlTmFtZX1gLCBlbC5nZXRBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSkgfHwgbm9kZS5ub2RlTmFtZSk7XG4gICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKG5vZGUubm9kZU5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBlbC5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gZWwuY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYoIWNoaWxkLl9fYWtpbGkpIHtcbiAgICAgICAgICBzZXRBdHRyKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBzZXRBdHRyKHRoaXMuZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBldmVudHNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXRFdmVudHMoKSB7XG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuX19ldmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgZXYgPSB0aGlzLl9fZXZlbnRzW2ldO1xuXG4gICAgICAhL15vbi0vaS50ZXN0KGV2KSAmJiAoZXYgPSAnb24tJyArIGV2KTtcblxuICAgICAgaWYoIXRoaXMuZWwuaGFzQXR0cmlidXRlKGV2KSkge1xuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZShldiwgJycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgY29tcG9uZW50IHBhcmVudHNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXRQYXJlbnRzKCkge1xuICAgIGxldCBwYXJlbnRzID0gQWtpbGkuZ2V0QWtpbGlQYXJlbnRzKHRoaXMuZWwpO1xuXG4gICAgaWYoIXBhcmVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IG5ld1BhcmVudCA9IHRoaXMuX19wYXJlbnQgIT09IHBhcmVudHNbMF07XG4gICAgbGV0IGV2YWx1YXRlUGFyZW50ID0gbnVsbDtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBwYXJlbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHBhcmVudCA9IHBhcmVudHNbaV07XG5cbiAgICAgIGlmKCFwYXJlbnQuX19ha2lsaS5jb25zdHJ1Y3Rvci50cmFuc3BhcmVudCkge1xuICAgICAgICBldmFsdWF0ZVBhcmVudCA9IHBhcmVudDtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9fY29tcGlsaW5nLm5ld1BhcmVudCA9IG5ld1BhcmVudDtcbiAgICBuZXdQYXJlbnQgJiYgdGhpcy5fX2RldGFjaCgpO1xuXG4gICAgaWYodGhpcy5jb25zdHJ1Y3Rvci50cmFuc3BhcmVudCkge1xuICAgICAgdGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQgPSBldmFsdWF0ZVBhcmVudC5fX2FraWxpO1xuICAgIH1cblxuICAgIHRoaXMuX19ldmFsdWF0ZVBhcmVudCA9IGV2YWx1YXRlUGFyZW50O1xuICAgIHRoaXMuX19wYXJlbnQgPSBwYXJlbnRzWzBdO1xuICAgIHRoaXMuX19wYXJlbnRzID0gcGFyZW50cztcbiAgICB0aGlzLnNjb3BlLl9fcGFyZW50ID0gdGhpcy5fX2V2YWx1YXRlUGFyZW50Ll9fYWtpbGkuc2NvcGU7XG4gICAgIXRoaXMuX19yZWNvbXBpbGluZyAmJiB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19hZGRDaGlsZCh0aGlzLmVsKTtcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcy5zY29wZSwgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fc2NvcGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBjaGlsZCBlbGVtZW50IHRvIHRoZSBsaXN0XG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYWRkQ2hpbGQoZWwpIHtcbiAgICB0aGlzLl9fY2hpbGRyZW4ucHVzaChlbCk7XG4gIH1cblxuICAvKipcbiAgICogU3BsaWNlIGNoaWxkIGZyb20gdGhlIGxpc3RcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zcGxpY2VDaGlsZChlbCkge1xuICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLl9fY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLl9fY2hpbGRyZW5baV07XG5cbiAgICAgIGlmKGNoaWxkID09PSBlbCkge1xuICAgICAgICB0aGlzLl9fY2hpbGRyZW4uc3BsaWNlKGksIDEpO1xuICAgICAgICBpLS07XG4gICAgICAgIGwtLTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogWW91IGNhbiBjaGFuZ2UgZXhwcmVzc2lvbiBiZWZvcmUgcGFyc2luZyBoZXJlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBleHByZXNzaW9uXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldFBhcnNlZEV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIG5vZGUgaGFzIGFueSBwcm9wZXJ0eSBjaGFuZ2VzIG9yIG5vdFxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2hlY2tFdmFsdWF0aW9uKG5vZGUpIHtcbiAgICBpZiAoIU9iamVjdC5rZXlzKG5vZGUuX19wcm9wZXJ0aWVzKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGsgaW4gbm9kZS5fX3Byb3BlcnRpZXMpIHtcbiAgICAgIGlmKCFub2RlLl9fcHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IHByb3AgPSBub2RlLl9fcHJvcGVydGllc1trXTtcbiAgICAgIGxldCB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKHByb3Aua2V5cywgcHJvcC5jb21wb25lbnQuX19zY29wZSk7XG5cbiAgICAgIGlmKCF1dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSh2YWx1ZSwgcHJvcC52YWx1ZSwgcHJvcC5jb3B5LCB1dGlscy5jb3B5KHZhbHVlKSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqICBDaGVjayBub2RlIGhhcyBjaGFuZ2VkIG9uIHRoZSBjZXJ0YWluIGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jaGVja05vZGVQcm9wZXJ0eUNoYW5naW5nKG5vZGUsIGtleXMsIHZhbHVlKSB7XG4gICAgbGV0IHByb3AgPSB0aGlzLl9fZ2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMpO1xuXG4gICAgaWYoIXByb3ApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiAhdXRpbHMuY29tcGFyZVByZXZpb3VzVmFsdWUodmFsdWUsIHByb3AudmFsdWUsIHByb3AuY29weSwgdXRpbHMuY29weSh2YWx1ZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIG5vZGUgZXhwcmVzc2lvblxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGUobm9kZSkge1xuICAgIGxldCBjb3VudGVyID0gMDtcbiAgICBsZXQgYXR0cmlidXRlVmFsdWU7XG4gICAgbGV0IGV4cHJlc3Npb247XG5cbiAgICBsZXQgcmVzID0gbm9kZS5fX2V4cHJlc3Npb24ucmVwbGFjZShldmFsdWF0aW9uUmVnZXhHbG9iYWwsIChtLCBkKSA9PiB7XG4gICAgICBjb3VudGVyKys7XG5cbiAgICAgIGxldCBldmFsdWF0ZTtcbiAgICAgIGxldCBldmFsdWF0aW9uO1xuICAgICAgbGV0IGV4aXN0aW5nQmluZGluZ3MgPSB7fTtcbiAgICAgIGxldCBwYXJzZVZhbHVlID0gbm9kZS5fX2NvbXBvbmVudC5fX2dldFBhcnNlZEV4cHJlc3Npb24oZCk7XG5cbiAgICAgIEFraWxpLl9fZXZhbHVhdGlvbiA9IHsgbm9kZTogbm9kZSwgbGlzdDogW119O1xuXG4gICAgICB0cnkge1xuICAgICAgICBldmFsdWF0ZSA9IHRoaXMuY29uc3RydWN0b3IucGFyc2UodGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQuc2NvcGUsIHBhcnNlVmFsdWUpO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICBsZXQgbWVzc2FnZSA9IGBTY29wZSBwYXJzaW5nIGVycm9yIGluIHRoZSB0ZW1wbGF0ZSBleHByZXNzaW9uOiAke25vZGUuX19leHByZXNzaW9ufWA7XG5cbiAgICAgICAgaWYoIUFraWxpLm9wdGlvbnMuc2hvd0V2YWx1YXRpb25FcnJvcnMpIHtcbiAgICAgICAgICBpZihBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZXJyLnN0YWNrKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBldmFsdWF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBldmFsdWF0aW9uID0gQWtpbGkuX19ldmFsdWF0aW9uPyBBa2lsaS5fX2V2YWx1YXRpb24ubGlzdDogW107XG4gICAgICBBa2lsaS5fX2V2YWx1YXRpb24ubGlzdCA9IG51bGw7XG4gICAgICBBa2lsaS5fX2V2YWx1YXRpb24gPSBudWxsO1xuXG4gICAgICBmb3IobGV0IGkgPSBldmFsdWF0aW9uLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGxldCBkYXRhID0gZXZhbHVhdGlvbltpXTtcbiAgICAgICAgbGV0IGhhc2ggPSBgJHtkYXRhLmNvbXBvbmVudC5fX3Njb3BlLl9fbmFtZX0uJHtkYXRhLmtleXNTdHJpbmd9YDtcblxuICAgICAgICBpZihkYXRhLm5vdEJpbmRpbmcpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGV4aXN0aW5nQmluZGluZ3NbaGFzaF0pIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwYXJlbnRWYWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGRhdGEucGFyZW50cywgZGF0YS5jb21wb25lbnQuX19zY29wZSk7XG4gICAgICAgIGxldCBldmFsQ29tcG9uZW50ID0gbm9kZS5fX2F0dHJpYnV0ZU9mIHx8IG5vZGUuX19jb21wb25lbnQ7XG5cbiAgICAgICAgaWYodXRpbHMuaXNTY29wZVByb3h5KHBhcmVudFZhbHVlKSAmJiBkYXRhLmNvbXBvbmVudCAhPT0gZXZhbENvbXBvbmVudC5fX2V2YWx1YXRpb25Db21wb25lbnQpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBiaW5kID0gZGF0YS5jb21wb25lbnQuX19nZXRCb3VuZE5vZGUoZGF0YS5rZXlzLCBub2RlKTtcbiAgICAgICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoZGF0YS5rZXlzLCBkYXRhLmNvbXBvbmVudC5fX3Njb3BlKTtcblxuICAgICAgICBpZighYmluZCkge1xuICAgICAgICAgIGRhdGEuY29tcG9uZW50Ll9fYmluZChkYXRhLmtleXMsIHsgbm9kZTogbm9kZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEuY29tcG9uZW50Ll9fc2V0Tm9kZVByb3BlcnR5KG5vZGUsIGRhdGEua2V5cywgdmFsdWUpO1xuICAgICAgICBleGlzdGluZ0JpbmRpbmdzW2hhc2hdID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgZXhpc3RpbmdCaW5kaW5ncyA9IG51bGw7XG4gICAgICBldmFsdWF0aW9uID0gbnVsbDtcblxuICAgICAgaWYobm9kZSBpbnN0YW5jZW9mIEF0dHIpIHtcbiAgICAgICAgZXhwcmVzc2lvbiA9IG07XG4gICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gZXZhbHVhdGU7XG5cbiAgICAgICAgcmV0dXJuIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZShldmFsdWF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmKHR5cGVvZiBldmFsdWF0ZSA9PSAnb2JqZWN0Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShldmFsdWF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZSkge1xuICAgICAgICAgIHJldHVybiBldmFsdWF0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZXZhbHVhdGU7XG4gICAgfSk7XG5cbiAgICBpZihub2RlIGluc3RhbmNlb2YgQXR0cikge1xuICAgICAgbGV0IHZhbHVlID0gcmVzO1xuICAgICAgbGV0IGlzQm9vbGVhbkF0dHJpYnV0ZSA9IGZhbHNlO1xuXG4gICAgICBpZihjb3VudGVyKSB7XG4gICAgICAgIG5vZGUuX19oYXNCaW5kaW5ncyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmKGNvdW50ZXIgPT0gMSAmJiBleHByZXNzaW9uICYmIG5vZGUuX19leHByZXNzaW9uID09IGV4cHJlc3Npb24pIHtcbiAgICAgICAgdmFsdWUgPSBhdHRyaWJ1dGVWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IGNsZWFyQXR0cmlidXRlID0gbm9kZS5ub2RlTmFtZS5yZXBsYWNlKC9eYm9vbGVhbi0oLispL2ksICckMScpO1xuXG4gICAgICBpZihjbGVhckF0dHJpYnV0ZSAhPSBub2RlLm5vZGVOYW1lKSB7XG4gICAgICAgIGlzQm9vbGVhbkF0dHJpYnV0ZSA9IHRydWU7XG4gICAgICAgIHZhbHVlID0gISF2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYobm9kZS5fX2F0dHJpYnV0ZU9uKSB7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBub2RlLl9fYXR0cmlidXRlT247XG5cbiAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IHRydWU7XG4gICAgICAgIGNvbXBvbmVudC5hdHRyc1t1dGlscy50b0NhbWVsQ2FzZShjbGVhckF0dHJpYnV0ZSldID0gdmFsdWU7XG4gICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSBmYWxzZTtcblxuICAgICAgICBpZiAoY29tcG9uZW50Ll9faXNDb21waWxlZCkge1xuICAgICAgICAgIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICAgICAgY29tcG9uZW50LmF0dHJzLm9uQ2hhbmdlZCAmJiBjb21wb25lbnQuYXR0cnMub25DaGFuZ2VkLnRyaWdnZXIoeyBrZXk6IGNsZWFyQXR0cmlidXRlLCB2YWx1ZTogdmFsdWV9KTtcbiAgICAgICAgICAgIGNvbXBvbmVudC5jaGFuZ2VkKGNsZWFyQXR0cmlidXRlLCB2YWx1ZSk7XG5cbiAgICAgICAgICAgIGxldCBrZXkgPSB1dGlscy50b0NhbWVsQ2FzZShjbGVhckF0dHJpYnV0ZSk7XG4gICAgICAgICAgICBsZXQgY2FtZWxLZXkgPSBrZXlbMF0udG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKTtcbiAgICAgICAgICAgIGxldCBmbk5hbWUgPSAnY2hhbmdlZCcgKyBjYW1lbEtleTtcbiAgICAgICAgICAgIGxldCBldkZuTmFtZSA9ICdvbkNoYW5nZWQnICsgY2FtZWxLZXk7XG5cbiAgICAgICAgICAgIGNvbXBvbmVudC5hdHRyc1tldkZuTmFtZV0gJiYgY29tcG9uZW50LmF0dHJzW2V2Rm5OYW1lXS50cmlnZ2VyKHZhbHVlKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRbZm5OYW1lXSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIGNvbXBvbmVudFtmbk5hbWVdKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZihpc0Jvb2xlYW5BdHRyaWJ1dGUpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBub2RlLl9fZWxlbWVudDtcbiAgICAgICAgbGV0IGF0dHIgPSB1dGlscy50b0NhbWVsQ2FzZShjbGVhckF0dHJpYnV0ZSk7XG5cbiAgICAgICAgdmFsdWU/IGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsICd0cnVlJyk6IGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvKipcbiAgICogTmVzdGVkIGV2YWx1YXRpb24gYnkga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3dpdGhvdXRQYXJlbnRzPWZhbHNlXSAtIGlmIHRydWUgZXZhbHVhdGlvbiB3aWxsIGJlIG9ubHkgZm9yIHRoZSBjdXJyZW50IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZU5lc3RlZChrZXlzLCB3aXRob3V0UGFyZW50cyA9IGZhbHNlKSB7XG4gICAgbGV0IHNjb3BlID0gdGhpcy5fX3Njb3BlO1xuICAgIGxldCBwcm9wcyA9IFtdO1xuXG4gICAgaWYoIXdpdGhvdXRQYXJlbnRzKSB7XG4gICAgICBsZXQgbGFzdFByb3BzID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgICAgIGxldCB2YWx1ZTtcblxuICAgICAgICBsYXN0UHJvcHMgPSBbLi4ubGFzdFByb3BzLCBrZXldO1xuICAgICAgICB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGxhc3RQcm9wcywgc2NvcGUpO1xuICAgICAgICBwcm9wcy5wdXNoKHsga2V5czogbGFzdFByb3BzLCB2YWx1ZTogdmFsdWV9KVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHByb3BzLnB1c2goeyBrZXlzOiBrZXlzLCB2YWx1ZTogdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgc2NvcGUpfSlcbiAgICB9XG5cbiAgICBsZXQgcHJvcHNMZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgICBsZXQgZWxFdmFsdWF0ZSA9IChlbGVtZW50KSA9PiB7XG4gICAgICBsZXQgY29tcG9uZW50ID0gZWxlbWVudC5fX2FraWxpO1xuXG4gICAgICBmb3IgKGxldCBtID0gMDsgbSA8IHByb3BzTGVuZ3RoOyBtKyspIHtcbiAgICAgICAgbGV0IHByb3AgPSBwcm9wc1ttXTtcbiAgICAgICAgbGV0IGRhdGEgPSBjb21wb25lbnQuX19nZXRCaW5kKHByb3Aua2V5cyk7XG5cbiAgICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhLl9fZGF0YSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgayA9IDAsIGMgPSBkYXRhLl9fZGF0YS5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgICAgICBsZXQgYmluZCA9IGRhdGEuX19kYXRhW2tdO1xuXG4gICAgICAgICAgaWYoY29tcG9uZW50Ll9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2luZyhiaW5kLm5vZGUsIHByb3Aua2V5cywgcHJvcC52YWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVQcm94eSA9IHRydWU7XG4gICAgICAgICAgICBjb21wb25lbnQuX19ldmFsdWF0ZU5vZGUoYmluZC5ub2RlKTtcblxuICAgICAgICAgICAgZm9yKGxldCBfayBpbiBiaW5kLm5vZGUuX19wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgIGlmKCFiaW5kLm5vZGUuX19wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KF9rKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbGV0IF9wcm9wID0gYmluZC5ub2RlLl9fcHJvcGVydGllc1tfa107XG4gICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKF9wcm9wLmtleXMsIF9wcm9wLmNvbXBvbmVudC5fX3Njb3BlKTtcblxuICAgICAgICAgICAgICBfcHJvcC5jb21wb25lbnQuX19zZXROb2RlUHJvcGVydHkoYmluZC5ub2RlLCBfcHJvcC5rZXlzLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVQcm94eSA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfTtcblxuICAgIGxldCBldmFsdWF0ZSA9IChlbGVtZW50cykgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IGVsRXZhbHVhdGUoZWxlbWVudHNbaV0pO1xuXG4gICAgICAgIGV2YWx1YXRlKGNvbXBvbmVudC5fX2NoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZWxFdmFsdWF0ZSh0aGlzLmVsKTtcbiAgICBldmFsdWF0ZSh0aGlzLl9fY2hpbGRyZW4pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSB2YWx1ZSBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlbGV0ZWQ9ZmFsc2VdIC0gdHJ1ZSBpZiB2YWx1ZSBpcyBkZWxldGluZ1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlQnlLZXlzKGtleXMsIHZhbHVlLCBpc0RlbGV0ZWQgPSBmYWxzZSkge1xuICAgIGxldCBkYXRhID0gdGhpcy5fX2dldEJpbmQoa2V5cyk7XG5cbiAgICBsZXQgdW5iaW5kID0gKG9iaiwgcGFyZW50cykgPT4ge1xuICAgICAgZm9yKGxldCBrIGluIG9iaikge1xuICAgICAgICBpZighb2JqLmhhc093blByb3BlcnR5KGspIHx8IGsgPT0gJ19fZGF0YScpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBfa2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba10pO1xuICAgICAgICBsZXQgX19rZXlzID0gX2tleXMuc2xpY2UoKTtcbiAgICAgICAgbGV0IF9pc0RlbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IHZhbCA9IG9ialtrXTtcbiAgICAgICAgbGV0IGhhc0tleTtcblxuICAgICAgICBfX2tleXMuc2hpZnQoKTtcbiAgICAgICAgaGFzS2V5ID0gdXRpbHMuaGFzUHJvcGVydHlCeUtleXMoX19rZXlzLCB2YWx1ZSk7XG5cbiAgICAgICAgaWYodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnICYmICFoYXNLZXkpIHtcbiAgICAgICAgICBfaXNEZWxldGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdW5iaW5kKHZhbCwgX2tleXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fX2V2YWx1YXRlTmVzdGVkKF9rZXlzLCB0cnVlKTtcblxuICAgICAgICBpZih2YWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgIT0gJ29iamVjdCcgfHwgIWhhc0tleSkge1xuICAgICAgICAgIHRoaXMuX191bmJpbmQoX2tleXMpO1xuICAgICAgICAgIF9pc0RlbGV0ZWQgJiYgdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoX19rZXlzLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZGF0YSAmJiB1bmJpbmQoZGF0YSwgW10uY29uY2F0KGtleXMpKTtcbiAgICB0aGlzLl9fZXZhbHVhdGVOZXN0ZWQoa2V5cyk7XG5cbiAgICBpZihpc0RlbGV0ZWQpIHtcbiAgICAgIHRoaXMuX191bmJpbmQoa2V5cyk7XG4gICAgICBpc0RlbGV0ZWQgJiYgdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgZXZlbnQgZXhwcmVzc2lvblxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlRXZlbnQobm9kZSwgZWwsIGUpIHtcbiAgICBsZXQgZXhwcmVzc2lvbiA9IGV2YWx1YXRpb25SZWdleC5leGVjKG5vZGUuX19leHByZXNzaW9uKTtcbiAgICBsZXQgZXZhbHVhdGU7XG5cbiAgICBpZighZXhwcmVzc2lvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSB7XG4gICAgICBlbDogZWwsXG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICBldmVudDogZSxcbiAgICAgIG5vZGU6IG5vZGVcbiAgICB9O1xuXG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IG51bGw7XG4gICAgZXZhbHVhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLnBhcnNlKHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50LnNjb3BlLCBleHByZXNzaW9uWzFdLCBlKTtcbiAgICB0aGlzLl9fZXZhbHVhdGluZ0V2ZW50ID0gbnVsbDtcblxuICAgIHJldHVybiBldmFsdWF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBjaGFuZ2VzIGFuZCBldmFsdWF0ZSB0aGUgcGFzc2VkIG5vZGVcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVOb2RlKG5vZGUpIHtcbiAgICBpZih0aGlzLl9fY2hlY2tFdmFsdWF0aW9uKG5vZGUpKSB7XG4gICAgICBub2RlWyhub2RlIGluc3RhbmNlb2YgQXR0cik/ICd2YWx1ZSc6ICdub2RlVmFsdWUnXSA9IHRoaXMuX19ldmFsdWF0ZShub2RlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXR0cmlidXRlIG5vZGUgaW5pdGlhbGl6aW5nXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gYXR0cmlidXRlT2YgLSBpZiBub2RlIGlzIGxpbmtlZCB3aXRoIHBhcmVudCBzY29wZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemVBdHRyaWJ1dGUobm9kZSwgZWwsIGF0dHJpYnV0ZU9mKSB7XG4gICAgaWYoc3lzdGVtQXR0cmlidXRlcy5pbmRleE9mKG5vZGUubm9kZU5hbWUpICE9IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fX2luaXRpYWxpemVOb2RlKG5vZGUsIGVsKTtcblxuICAgIGxldCBldmVudE5hbWUgPSBub2RlLm5vZGVOYW1lLnJlcGxhY2UoL15vbi0oLispL2ksICckMScpO1xuICAgIGxldCBub2RlTmFtZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKG5vZGUubm9kZU5hbWUpO1xuICAgIGxldCBjb21wb25lbnQgPSBhdHRyaWJ1dGVPZj8gYXR0cmlidXRlT2Y6IHRoaXM7XG5cbiAgICBpZihldmVudE5hbWUgIT0gbm9kZS5ub2RlTmFtZSkge1xuICAgICAgaWYobm9kZS5fX2V2ZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGVtaXR0ZXIgPSBuZXcgQWtpbGkuRXZlbnRFbWl0dGVyKGV2ZW50TmFtZSwgZWwsIGNvbXBvbmVudCk7XG5cbiAgICAgIGlmKG5vZGUuX19leHByZXNzaW9uKSB7XG4gICAgICAgIGVtaXR0ZXIuYmluZCgoZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBjb21wb25lbnQuX19ldmFsdWF0ZUV2ZW50KG5vZGUsIGVsLCBlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIG5vZGUuX19ldmVudCA9IGVtaXR0ZXI7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKGVtaXR0ZXIpKTtcblxuICAgICAgaWYoYXR0cmlidXRlT2YpIHtcbiAgICAgICAgdGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLmF0dHJzW25vZGVOYW1lXSA9IGVtaXR0ZXI7XG4gICAgICAgIHRoaXMuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZihhdHRyaWJ1dGVPZikge1xuICAgICAgbm9kZS5fX2F0dHJpYnV0ZU9uID0gdGhpcztcbiAgICAgIG5vZGUuX19hdHRyaWJ1dGVPZiA9IGNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBlbC5zZXRBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSwgY29tcG9uZW50Ll9fZXZhbHVhdGUobm9kZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIG5vZGVcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemVOb2RlKG5vZGUsIGVsKSB7XG4gICAgaWYobm9kZS5fX2luaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbm9kZS5fX2V4cHJlc3Npb24gPSBub2RlWyhub2RlIGluc3RhbmNlb2YgQXR0cik/ICd2YWx1ZSc6ICdub2RlVmFsdWUnXTtcbiAgICBub2RlLl9fcHJvcGVydGllcyA9IHt9O1xuICAgIG5vZGUuX19hdHRyaWJ1dGVPZiA9IG51bGw7XG4gICAgbm9kZS5fX2F0dHJpYnV0ZU9uID0gbnVsbDtcbiAgICBub2RlLl9fZXZlbnQgPSBudWxsO1xuICAgIG5vZGUuX19oYXNCaW5kaW5ncyA9IGZhbHNlO1xuICAgIG5vZGUuX19pbml0aWFsaXplZCA9IHRydWU7XG4gICAgbm9kZS5fX2NvbXBvbmVudCA9IHRoaXM7XG4gICAgbm9kZS5fX2VsZW1lbnQgPSBlbDtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEludGVycG9sYXRlIGF0dHJpYnV0ZXMgb2YgdGhlIGVsZW1lbnRcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtDb21wb25lbnR9IFthdHRyaWJ1dGVPZj1udWxsXSAtIGlmIG5vZGUgaXMgbGlua2VkIHdpdGggcGFyZW50IHNjb3BlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKGVsLCBhdHRyaWJ1dGVPZiA9IG51bGwpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgYXR0cnMgPSBlbC5hdHRyaWJ1dGVzLCBsID0gYXR0cnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB0aGlzLl9faW5pdGlhbGl6ZUF0dHJpYnV0ZShhdHRyc1tpXSwgZWwsIGF0dHJpYnV0ZU9mKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lIGF0dHJpYnV0ZXMgYXMgcHJveHlcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZWZpbmVBdHRyaWJ1dGVzKCkge1xuICAgIGxldCBjaGFuZ2VBdHRyaWJ1dGUgPSAoa2V5LCB2YWx1ZSwgaXNEZWxldGVkID0gZmFsc2UpID0+IHtcbiAgICAgIGlmKHRoaXMuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IG5vZGUgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZU5vZGUoa2V5KTtcblxuICAgICAgaWYobm9kZSkge1xuICAgICAgICBpZihub2RlLl9fZXZlbnQpIHtcbiAgICAgICAgICBub2RlLl9fZXZlbnQudW5iaW5kKCk7XG4gICAgICAgICAgbm9kZS5fX2V2ZW50ID0gbnVsbDtcbiAgICAgICAgICBub2RlLl9fZXhwcmVzc2lvbiA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYobm9kZS5fX2hhc0JpbmRpbmdzKSB7XG4gICAgICAgICAgdGhpcy5fX3BhcmVudCAmJiB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19ldmFsdWF0aW9uQ29tcG9uZW50Ll9fdW5iaW5kQnlOb2Rlcyhbbm9kZV0pO1xuICAgICAgICAgIG5vZGUuX19oYXNCaW5kaW5ncyA9IGZhbHNlO1xuICAgICAgICAgIG5vZGUuX19leHByZXNzaW9uID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoaXNEZWxldGVkKSB7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKG5vZGUpIHtcbiAgICAgICAgbm9kZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmF0dHJzID0gbmV3IFByb3h5KHRoaXMuX19hdHRycywge1xuICAgICAgZ2V0OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgaWYoa2V5ID09ICdfX2lzUHJveHknKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICB9LFxuICAgICAgc2V0OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBhdHRyS2V5ID0gdXRpbHMudG9EYXNoQ2FzZShrZXkpO1xuXG4gICAgICAgIGlmKHRoaXMuYm9vbGVhbkF0dHJpYnV0ZXMuaW5kZXhPZihhdHRyS2V5KSAhPSAtMSkge1xuICAgICAgICAgIGF0dHJLZXkgPSBgYm9vbGVhbi0ke2F0dHJLZXl9YDtcblxuICAgICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgIGNoYW5nZUF0dHJpYnV0ZShhdHRyS2V5LCB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUodmFsdWUpKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBkZWxldGVQcm9wZXJ0eTogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgYXR0cktleSA9IHV0aWxzLnRvRGFzaENhc2Uoa2V5KTtcblxuICAgICAgICBjaGFuZ2VBdHRyaWJ1dGUoYXR0cktleSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKHZhbHVlKSwgdHJ1ZSk7XG4gICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgcHJveHkgdG8gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcmV0dXJucyB7UHJveHl9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fb2JzZXJ2ZShvYmosIHBhcmVudHMpIHtcbiAgICByZXR1cm4gbmV3IFByb3h5KG9iaiwge1xuICAgICAgZ2V0OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgaWYgKGtleSA9PSBcIl9faXNQcm94eVwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IFwiX190YXJnZXRcIikge1xuICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IFwiX19jb21wb25lbnRcIikge1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PSBcIl9fa2V5c1wiKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudHM7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLl9fZGlzYWJsZVByb3h5KSB7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5fX2lzU3lzdGVtS2V5KGtleSkpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBpZih0eXBlb2YgdGFyZ2V0W2tleV0gPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGxldCByZWFsVGFyZ2V0ICA9IHV0aWxzLmdldE93blByb3BlcnR5VGFyZ2V0KHRhcmdldCwga2V5KTtcblxuICAgICAgICAgIGlmKCF1dGlscy5pc1BsYWluT2JqZWN0KHJlYWxUYXJnZXQpKSB7XG4gICAgICAgICAgICByZWFsVGFyZ2V0W2tleV0gPSBBa2lsaS5pc29sYXRlRnVuY3Rpb24ocmVhbFRhcmdldFtrZXldLCByZWFsVGFyZ2V0Ll9fY29tcG9uZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQWtpbGkuX19ldmFsdWF0aW9uKSB7XG4gICAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tleV0pO1xuICAgICAgICAgIGxldCBub3RCaW5kaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICBpZighKGtleSBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZighdXRpbHMuZ2V0RW51bWVyYWJsZVByb3BlcnR5VGFyZ2V0KHRhcmdldCwga2V5KSkge1xuICAgICAgICAgICAgbm90QmluZGluZyA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fX2JpbmROb2RlKEFraWxpLl9fZXZhbHVhdGlvbi5saXN0LCBrZXlzLCBwYXJlbnRzLCB0YXJnZXRba2V5XSwgbm90QmluZGluZyk7XG5cbiAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICB9LFxuICAgICAgc2V0OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGlmKHRoaXMuX19kaXNhYmxlUHJveHkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLl9faXNTeXN0ZW1LZXkoa2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrZXldKTtcblxuICAgICAgICBpZih0aGlzLl9fbmVzdGVkV2F0Y2hpbmcpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHRoaXMuX19uZXN0ZWRPYnNlcnZlKHZhbHVlLCBrZXlzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoQWtpbGkuX19pc29sYXRpb24pIHtcbiAgICAgICAgICB0aGlzLl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0KHBhcmVudHMsIGtleSwgZmFsc2UpO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLl9faXNNb3VudGVkKSB7XG4gICAgICAgICAgdGhpcy5fX2V2YWx1YXRlQnlLZXlzKGtleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tleV0pO1xuXG4gICAgICAgIGlmKHRoaXMuX19kaXNhYmxlUHJveHkpIHtcbiAgICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZihBa2lsaS5fX2lzb2xhdGlvbikge1xuICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgICB0aGlzLl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0KHBhcmVudHMsIGtleSwgdHJ1ZSk7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgdGhpcy5fX2V2YWx1YXRlQnlLZXlzKGtleXMsIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIGtleSBpcyBzeXN0ZW1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIF9faXNTeXN0ZW1LZXkgPSBmdW5jdGlvbihrZXkpIHtcbiAgICBpZihrZXkgPT0gJ19fJyB8fCAoa2V5WzBdID09ICdfJyAmJiBrZXlbMV0gPT0gJ18nKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYoWydjb25zdHJ1Y3RvciddLmluZGV4T2Yoa2V5KSAhPSAtMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBOZXN0ZWQgb2JzZXJ2aW5nIHRoZSB2YWx1ZVxuICAgKlxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IFtzdGFydEtleXNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fbmVzdGVkT2JzZXJ2ZSAodmFsdWUsIHN0YXJ0S2V5cykge1xuICAgIHRoaXMuX19kaXNhYmxlUHJveHkgPSB0cnVlO1xuXG4gICAgbGV0IG9ic2VydmUgPSAodmFsdWUsIHBhcmVudHMpID0+IHtcbiAgICAgIGlmKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmKCF1dGlscy5pc1BsYWluT2JqZWN0KHZhbHVlKSAmJiAhdXRpbHMuaXNTY29wZVByb3h5KHZhbHVlKSAmJiAhKHZhbHVlIGluc3RhbmNlb2YgQWtpbGkuU2NvcGUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IHRhcmdldCA9IHZhbHVlO1xuXG4gICAgICBpZih2YWx1ZS5fX2lzUHJveHkpIHtcbiAgICAgICAgdGFyZ2V0ID0gdmFsdWUuX190YXJnZXQ7XG5cbiAgICAgICAgaWYoIXRoaXMuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nKSB7XG4gICAgICAgICAgaWYodmFsdWUuX19jb21wb25lbnQgIT09IHRoaXMpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IHV0aWxzLmNvcHkodGFyZ2V0LCBmYWxzZSk7XG4gICAgICAgICAgICB2YWx1ZSA9IHRhcmdldDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZihBa2lsaS5qb2luQmluZGluZ0tleXMocGFyZW50cykgIT0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKHZhbHVlLl9fa2V5cykpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGFyZ2V0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IobGV0IGsgaW4gdGFyZ2V0KSB7XG4gICAgICAgIGlmICghdGFyZ2V0Lmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmFsID0gdGFyZ2V0W2tdO1xuICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba10pO1xuXG4gICAgICAgIHRhcmdldFtrXSA9IG9ic2VydmUodmFsLCBrZXlzKTtcbiAgICAgIH1cblxuICAgICAgaWYoIXZhbHVlLl9faXNQcm94eSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX29ic2VydmUodGFyZ2V0LCBwYXJlbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG5cbiAgICBsZXQgcmVzID0gb2JzZXJ2ZSh2YWx1ZSwgc3RhcnRLZXlzIHx8IFtdKTtcblxuICAgIHRoaXMuX19kaXNhYmxlUHJveHkgPSBudWxsO1xuXG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlIGlzb2xhdGlvbiBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVsZXRlZD1mYWxzZV1cbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0IChwYXJlbnRzLCBrZXksIGlzRGVsZXRlZCA9IGZhbHNlKSB7XG4gICAgbGV0IGtleXMgPSBwYXJlbnRzLmxlbmd0aD8gW3BhcmVudHNbMF1dOiBba2V5XTtcbiAgICBsZXQgaXNvbGF0aW9uS2V5ID0gYCR7dGhpcy5fX3Njb3BlLl9fbmFtZX0uJHtBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyl9YDtcblxuICAgIGlmKHBhcmVudHMubGVuZ3RoKSB7XG4gICAgICBpc0RlbGV0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZighQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uS2V5XSkge1xuICAgICAgQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uS2V5XSA9IHtcbiAgICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgICBrZXlzOiBrZXlzXG4gICAgICB9O1xuICAgIH1cblxuICAgIChpc0RlbGV0ZWQgIT09IHVuZGVmaW5lZCkgJiYgKEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV0uaXNEZWxldGVkID0gaXNEZWxldGVkKTtcbiAgICBBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25LZXldLnZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKTtcblxuICAgIHJldHVybiBBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25LZXldO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcmVwYXJlIHRoZSBub2RlIHRvIGJpbmRpbmdcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGJpbmQgLSBieSBkZWZhdWx0IGlzIGNvbXBvbmVudC5fX2V2YWx1YXRpb24ubGlzdFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHBhcmVudHNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtub3RCaW5kaW5nPWZhbHNlXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2JpbmROb2RlKGJpbmQsIGtleXMsIHBhcmVudHMsIHZhbHVlLCBub3RCaW5kaW5nID0gZmFsc2UpIHtcbiAgICBsZXQgcGFyZW50S2V5c1N0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhwYXJlbnRzKTtcblxuICAgIGlmKGJpbmQubGVuZ3RoICYmICFub3RCaW5kaW5nKSB7XG4gICAgICBsZXQgbCA9IGJpbmQubGVuZ3RoIC0gMTtcbiAgICAgIGxldCBkYXRhID0gYmluZFtsXTtcblxuICAgICAgaWYoZGF0YS5rZXlzU3RyaW5nID09IHBhcmVudEtleXNTdHJpbmcgJiYgZGF0YS5jb21wb25lbnQgPT09IHRoaXMpIHtcbiAgICAgICAgYmluZC5zcGxpY2UobCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYmluZC5wdXNoKHtcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIGtleXNTdHJpbmc6IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKSxcbiAgICAgIHBhcmVudHM6IHBhcmVudHMsXG4gICAgICBrZXlzOiBrZXlzLFxuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgbm90QmluZGluZzogbm90QmluZGluZ1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgYmluZGluZyBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldEJpbmQoa2V5cykge1xuICAgIHJldHVybiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MpIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGJpbmRpbmcgYnkga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0Qm91bmROb2RlKGtleXMsIG5vZGUpIHtcbiAgICBsZXQgYmluZCA9ICB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MpO1xuXG4gICAgaWYoIWJpbmQgfHwgIWJpbmQuX19kYXRhIHx8ICFiaW5kLl9fZGF0YS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBiaW5kLl9fZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBkYXRhID0gYmluZC5fX2RhdGFbaV07XG5cbiAgICAgIGlmKGRhdGEubm9kZSA9PT0gbm9kZSkge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgbm9kZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzLCB2YWx1ZSkge1xuICAgIGxldCBwcm9wID0gdGhpcy5fX2dldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKTtcbiAgICBsZXQgY29weSA9IHV0aWxzLmNvcHkodmFsdWUpO1xuXG4gICAgaWYocHJvcCkge1xuICAgICAgbGV0IHJlcyA9IHV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlKHZhbHVlLCBwcm9wLnZhbHVlLCBwcm9wLmNvcHksIGNvcHkpO1xuXG4gICAgICBwcm9wLnZhbHVlID0gdmFsdWU7XG4gICAgICBwcm9wLmNvcHkgPSBjb3B5O1xuXG4gICAgICByZXR1cm4gIXJlcztcbiAgICB9XG5cbiAgICBsZXQgaGFzaCA9IGAke3RoaXMuX19zY29wZS5fX25hbWV9LiR7QWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpfWA7XG5cbiAgICBub2RlLl9fcHJvcGVydGllc1toYXNoXSA9IHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGNvcHk6IGNvcHksXG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICBrZXlzOiBrZXlzXG4gICAgfTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBub2RlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cykge1xuICAgIGxldCBoYXNoID0gYCR7dGhpcy5fX3Njb3BlLl9fbmFtZX0uJHtBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyl9YDtcblxuICAgIHJldHVybiBub2RlLl9fcHJvcGVydGllc1toYXNoXSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBub2RlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVsZXRlTm9kZVByb3BlcnR5KG5vZGUsIGtleXMpIHtcbiAgICBsZXQgaGFzaCA9IGAke3RoaXMuX19zY29wZS5fX25hbWV9LiR7QWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpfWA7XG5cbiAgICBkZWxldGUgbm9kZS5fX3Byb3BlcnRpZXNbaGFzaF07XG4gIH1cblxuICAvKipcbiAgICogQmluZCBkYXRhIHdpdGggdGhlIGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2JpbmQoa2V5cywgZGF0YSkge1xuICAgIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncywgKGxhc3QsIHZhbHVlKSA9PiB7XG4gICAgICBsZXQgb2JqID0ge19fZGF0YTogW119O1xuXG4gICAgICBpZighbGFzdCkge1xuICAgICAgICByZXR1cm4gdmFsdWU/IHZhbHVlOiBvYmo7XG4gICAgICB9XG5cbiAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgICAgICBvYmogPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYoIW9iai5fX2RhdGEpIHtcbiAgICAgICAgb2JqLl9fZGF0YSA9IFtdO1xuICAgICAgfVxuXG4gICAgICBvYmouX19kYXRhLnB1c2goZGF0YSk7XG5cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYmluZChrZXlzKSB7XG4gICAgbGV0IGJpbmQgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MpO1xuXG4gICAgaWYoIWJpbmQgfHwgIWJpbmQuX19kYXRhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGJpbmQuX19kYXRhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG5vZGUgPSBiaW5kLl9fZGF0YVtpXS5ub2RlO1xuXG4gICAgICB0aGlzLl9fZGVsZXRlTm9kZVByb3BlcnR5KG5vZGUsIGtleXMpO1xuICAgIH1cblxuICAgIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncywgKHZhbHVlKSA9PiB7XG4gICAgICBpZihPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID4gMSkge1xuICAgICAgICB2YWx1ZS5fX2RhdGEgPSBbXTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCBieSBub2Rlc1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGVbXX0gbm9kZXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmJpbmRCeU5vZGVzKG5vZGVzKSB7XG4gICAgbGV0IHVuYmluZCA9IChvYmopID0+IHtcbiAgICAgIGZvcihsZXQgayBpbiBvYmopIHtcbiAgICAgICAgaWYoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoayA9PSAnX19kYXRhJykge1xuICAgICAgICAgIGxldCBkYXRhID0gb2JqW2tdIHx8IFtdO1xuICAgICAgICAgIGxldCBsID0gZGF0YS5sZW5ndGg7XG5cbiAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYmluZCA9IGRhdGFbaV07XG5cbiAgICAgICAgICAgIGlmKG5vZGVzLmluZGV4T2YoYmluZC5ub2RlKSAhPSAtMSkge1xuICAgICAgICAgICAgICBkYXRhLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICBsLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYoIWwpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmpba107XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHVuYmluZChvYmpba10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHVuYmluZCh0aGlzLl9fYmluZGluZ3MpO1xuICAgIHRoaXMuX19jbGVhckVtcHR5QmluZGluZ3MoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbGwgZW1wdHkgYmluZGluZ3NcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvYmpdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2xlYXJFbXB0eUJpbmRpbmdzKG9iaikge1xuICAgIGxldCBjbGVhciA9IChvYmosIHBhcmVudCwga2V5KSA9PiB7XG4gICAgICBmb3IobGV0IGsgaW4gb2JqKSB7XG4gICAgICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2YWwgPSBvYmpba107XG5cbiAgICAgICAgaWYoayA9PSAnX19kYXRhJyAmJiAoIXZhbCB8fCAhdmFsLmxlbmd0aCkpIHtcbiAgICAgICAgICBkZWxldGUgb2JqW2tdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoayAhPSAnX19kYXRhJykge1xuICAgICAgICAgIGlmKCFPYmplY3Qua2V5cyhvYmpba10pLmxlbmd0aCkge1xuICAgICAgICAgICAgZGVsZXRlIG9ialtrXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjbGVhcihvYmpba10sIG9iaiwgayk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKCFPYmplY3Qua2V5cyhvYmopLmxlbmd0aCAmJiBwYXJlbnQpIHtcbiAgICAgICAgZGVsZXRlIHBhcmVudFtrZXldO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjbGVhcihvYmogfHwgdGhpcy5fX2JpbmRpbmdzKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgY2hpbGQgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlbW92ZUNoaWxkcmVuKCkge1xuICAgIGxldCByZW1vdmUgPSAoY2hpbGRyZW4pID0+IHtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcblxuICAgICAgICByZW1vdmUoY2hpbGQuX19ha2lsaS5fX2NoaWxkcmVuKTtcbiAgICAgICAgY2hpbGQuX19ha2lsaS5fX3JlbW92ZSgpO1xuICAgICAgICBpLS07XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJlbW92ZSh0aGlzLl9fY2hpbGRyZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgY29tcG9uZW50IHdpdGhvdXQgY2hpbGRyZW4gcmVtb3ZpbmdcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZW1vdmUoKSB7XG4gICAgdGhpcy5fX2RldGFjaCgpO1xuICAgIHRoaXMuYXR0cnMub25SZW1vdmVkICYmIHRoaXMuYXR0cnMub25SZW1vdmVkLnRyaWdnZXIoKTtcbiAgICB0aGlzLnJlbW92ZWQoKTtcbiAgICBBa2lsaS5yZW1vdmVTY29wZSh0aGlzLl9fc2NvcGUuX19uYW1lKTtcbiAgICB0aGlzLmVsLnJlbW92ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGFjaCB0aGUgY29tcG9uZW50XG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGV0YWNoKCkge1xuICAgIGlmKHRoaXMuX19ldmFsdWF0ZVBhcmVudCAmJiAhdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzKSB7XG4gICAgICB0aGlzLl9fZXZhbHVhdGVQYXJlbnQuX19ha2lsaS5fX3VuYmluZEJ5Tm9kZXMoW10uc2xpY2UuY2FsbCh0aGlzLmVsLmF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbiAgICBpZih0aGlzLl9fcGFyZW50KSB7XG4gICAgICB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19zcGxpY2VDaGlsZCh0aGlzLmVsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBjb21wb25lbnQgd2l0aCBjaGlsZHJlblxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2Rlc3Ryb3koKSB7XG4gICAgdGhpcy5fX3JlbW92ZUNoaWxkcmVuKCk7XG4gICAgdGhpcy5fX3JlbW92ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBjb21wb25lbnQgaHRtbFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2VtcHR5KCkge1xuICAgIGxldCBub2RlcyA9IFtdO1xuXG4gICAgdGhpcy5fX3JlbW92ZUNoaWxkcmVuKCk7XG5cbiAgICBsZXQgZmluZCA9IChjaGlsZHJlbikgPT4ge1xuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcblxuICAgICAgICBpZihjaGlsZC5ub2RlVHlwZSA9PSAzKSB7XG4gICAgICAgICAgbm9kZXMucHVzaChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihjaGlsZC5ub2RlVHlwZSA9PSAxICYmICFjaGlsZC5fX2FraWxpKSB7XG4gICAgICAgICAgZm9yIChsZXQgayA9IDAsIGF0dHJzID0gY2hpbGQuYXR0cmlidXRlcywgYyA9IGF0dHJzLmxlbmd0aDsgayA8IGM7IGsrKykge1xuICAgICAgICAgICAgbm9kZXMucHVzaChhdHRyc1tpXSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZmluZChjaGlsZC5jaGlsZE5vZGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBmaW5kKHRoaXMuZWwuY2hpbGROb2Rlcyk7XG4gICAgdGhpcy5fX3VuYmluZEJ5Tm9kZXMobm9kZXMpO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHBhcmVudCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZpbmRBbGw9dHJ1ZV0gLSBnZXQgYXJyYXkgaWYgdHJ1ZVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVsc11cbiAgICogQHJldHVybnMge0NvbXBvbmVudHxDb21wb25lbnRbXX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRQYXJlbnQoc2VsZWN0b3IgPSAnJywgZmluZEFsbCA9IGZhbHNlLCBsZXZlbHMpIHtcbiAgICBsZXQgYXJyID0gW107XG4gICAgbGV0IGxldmVsID0gMDtcblxuICAgIGlmKGxldmVscyAhPT0gdW5kZWZpbmVkICYmICFBcnJheS5pc0FycmF5KGxldmVscykpIHtcbiAgICAgIGxldmVscyA9IFtsZXZlbHNdO1xuICAgIH1cblxuICAgIGxldCBmaW5kID0gKHBhcmVudCkgPT4ge1xuICAgICAgaWYoIXBhcmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmKCFsZXZlbHMgfHwgbGV2ZWxzLmluZGV4T2YobGV2ZWwpICE9IC0xKSB7XG4gICAgICAgIGlmICghc2VsZWN0b3IgfHwgcGFyZW50Ll9fYWtpbGkubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICBpZiAoIWZpbmRBbGwpIHtcbiAgICAgICAgICAgIGFyci5wdXNoKHBhcmVudC5fX2FraWxpKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFyci5wdXNoKHBhcmVudC5fX2FraWxpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXZlbCsrO1xuICAgICAgZmluZChwYXJlbnQuX19ha2lsaS5fX3BhcmVudCk7XG4gICAgfTtcblxuICAgIGZpbmQodGhpcy5fX3BhcmVudCk7XG5cbiAgICByZXR1cm4gZmluZEFsbD8gYXJyOiAoYXJyWzBdIHx8IG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjaGlsZCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZpbmRBbGw9dHJ1ZV0gLSBnZXQgYXJyYXkgaWYgdHJ1ZVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVsc11cbiAgICogQHJldHVybnMge0NvbXBvbmVudHxDb21wb25lbnRbXX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRDaGlsZHJlbihzZWxlY3RvciA9ICcnLCBmaW5kQWxsID0gdHJ1ZSwgbGV2ZWxzKSB7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGxldCBsZXZlbCA9IDA7XG5cbiAgICBpZihsZXZlbHMgIT09IHVuZGVmaW5lZCAmJiAhQXJyYXkuaXNBcnJheShsZXZlbHMpKSB7XG4gICAgICBsZXZlbHMgPSBbbGV2ZWxzXTtcbiAgICB9XG5cbiAgICBsZXQgZmluZCA9IChjaGlsZHJlbikgPT4ge1xuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcblxuICAgICAgICBpZighbGV2ZWxzIHx8IGxldmVscy5pbmRleE9mKGxldmVsKSAhPSAtMSkge1xuICAgICAgICAgIGlmKCFzZWxlY3RvciB8fCBjaGlsZC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICBpZighZmluZEFsbCkge1xuICAgICAgICAgICAgICBhcnIucHVzaChjaGlsZC5fX2FraWxpKTtcblxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFyci5wdXNoKGNoaWxkLl9fYWtpbGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXZlbCsrO1xuXG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGZpbmQoY2hpbGRyZW5baV0uX19ha2lsaS5fX2NoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmluZCh0aGlzLl9fY2hpbGRyZW4pO1xuXG4gICAgcmV0dXJuIGZpbmRBbGw/IGFycjogKGFyclswXSB8fCBudWxsKVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBuZWFyZXN0IGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JpZ2h0PWZhbHNlXSAtIGZyb20gdGhlIHJpZ2h0IHNpZGUgaWYgdHJ1ZVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldE5lYXIoc2VsZWN0b3IgPSAnJywgZmluZEFsbCA9IHRydWUsIHJpZ2h0ID0gZmFsc2UpIHtcbiAgICBpZighdGhpcy5fX3BhcmVudCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGxldmVsRWxlbWVudHMgPSB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19jaGlsZHJlbi5zbGljZSgpO1xuICAgIGxldCBhcnIgPSBbXTtcblxuICAgIHJpZ2h0ICYmIGxldmVsRWxlbWVudHMucmV2ZXJzZSgpO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGxldmVsRWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgZWwgPSBsZXZlbEVsZW1lbnRzW2ldO1xuXG4gICAgICBpZihlbCA9PT0gdGhpcy5lbCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYoIXNlbGVjdG9yIHx8IGVsLl9fYWtpbGkubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgYXJyLnB1c2goZWwuX19ha2lsaSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhcnIucmV2ZXJzZSgpO1xuXG4gICAgaWYoIWZpbmRBbGwpIHtcbiAgICAgIHJldHVybiBhcnIubGVuZ3RoPyBhcnJbMF06IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgY29tcG9uZW50IG1hdGNoZXMgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IHNlbGVjdG9yXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgbWF0Y2hlcyhzZWxlY3Rvcikge1xuICAgIGlmKHR5cGVvZiBzZWxlY3RvciA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3IodGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZWwubWF0Y2hlcyhzZWxlY3Rvcik7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNsb3Nlc3QgcGFyZW50IGNvbXBvbmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVsc11cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIHBhcmVudChzZWxlY3RvciA9ICcnLCBsZXZlbHMpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldFBhcmVudChzZWxlY3RvciwgZmFsc2UsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFycmF5IG9mIHBhcmVudCBjb21wb25lbnRzIGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBwYXJlbnRzKHNlbGVjdG9yID0gJycsIGxldmVscykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0UGFyZW50KHNlbGVjdG9yLCB0cnVlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IGNoaWxkIGNvbXBvbmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVsc11cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIGNoaWxkKHNlbGVjdG9yID0gJycsIGxldmVscykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0Q2hpbGRyZW4oc2VsZWN0b3IsIGZhbHNlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBjaGlsZCBjb21wb25lbnRzIGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBjaGlsZHJlbihzZWxlY3RvciA9ICcnLCBsZXZlbHMpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldENoaWxkcmVuKHNlbGVjdG9yLCB0cnVlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBjb21wb25lbnRzIGxlZnQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBiZWZvcmUoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgdHJ1ZSwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBjb21wb25lbnRzIHJpZ2h0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgYWZ0ZXIoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgdHJ1ZSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNsb3Nlc3QgY29tcG9uZW50IGxlZnQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgcHJldihzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCBmYWxzZSwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IGNvbXBvbmVudCByaWdodCBmcm9tIHRoZSBjdXJyZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR9XG4gICAqL1xuICBuZXh0KHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIGZhbHNlLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgZWxlbWVudCBwYXJlbnRcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50XG4gICAqL1xuICBhcHBlbmRUbyhwYXJlbnQpIHtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG5cbiAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW5jZWwgY29tcG9uZW50IGNvbXBpbGF0aW9uXG4gICAqL1xuICBjYW5jZWwoKSB7XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgZWxlbWVudCBodG1sXG4gICAqXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgZW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19lbXB0eS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBlbGVtZW50XG4gICAqXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgcmVtb3ZlKCkge1xuICAgIHJldHVybiB0aGlzLl9fZGVzdHJveS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHt9XG4gIGNvbXBpbGVkKCkge31cbiAgcmVjb21waWxlZCgpIHt9XG4gIGNoYW5nZWQoa2V5LCB2YWx1ZSkge31cbiAgcmVzb2x2ZWQoKSB7fVxuICByZW1vdmVkKCkge31cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudC5qcyIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyLmpzJ1xuXG5jb25zdCB1dGlscyA9IHt9O1xuXG4vKipcbiAqIENyZWF0ZSBjbGFzcyBhdHRyaWJ1dGUgZnJvbSBhbiBvYmplY3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcInJlZCBhY3RpdmVcIlxuICogdXRpbHMuY2xhc3Moe3JlZDogdHJ1ZSwgYWN0aXZlOiB0cnVlLCBncmVlbjogZmFsc2V9KTtcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5jbGFzcyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGxldCBjbGFzc2VzID0gW107XG5cbiAgZm9yKGxldCBrIGluIG9iaikge1xuICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGxldCB2YWwgPSBvYmpba107XG5cbiAgICB2YWwgJiYgY2xhc3Nlcy5wdXNoKGspO1xuICB9XG5cbiAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgc3R5bGUgYXR0cmlidXRlIGZyb20gYW4gb2JqZWN0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJjb2xvcjpyZWQ7d2lkdGg6MTBweFwiXG4gKiB1dGlscy5zdHlsZSh7Y29sb3I6IFwicmVkXCIsIGJhY2tncm91bmQ6IGZhbHNlLCB3aWR0aDogXCIxMHB4XCJ9KTtcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5zdHlsZSA9IGZ1bmN0aW9uKG9iaikge1xuICBpZighb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgbGV0IHN0eWxlcyA9IFtdO1xuXG4gIGZvcihsZXQgayBpbiBvYmopIHtcbiAgICBpZighb2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBsZXQgdmFsID0gb2JqW2tdO1xuXG4gICAgdmFsICYmIHN0eWxlcy5wdXNoKGAke3RoaXMudG9EYXNoQ2FzZShrKX06JHt2YWx9YCk7XG4gIH1cblxuICByZXR1cm4gc3R5bGVzLmpvaW4oJzsnKTtcbn07XG5cbi8qKlxuICogRmlsdGVyIGFuIGFycmF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWzEsIDExXVxuICogdXRpbHMuZmlsdGVyKFsxLCAyLCAzLCAxMV0sICcxJyk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OjF9LCB7eDoxMX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OjF9LCB7eDoyfSwge3g6M30sIHt4OjExfV0sICcxJywgWyd4J10pO1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfGZ1bmN0aW9ufSBoYW5kbGVyIC0gdHlwZSBvZiBmaWx0ZXJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nW118c3RyaW5nfSBba2V5c10gLSBmaWx0ZXIgaW4gdGhlIGtleXMgaWYgYXJyYXkgZWxlbWVudHMgYXJlIG9iamVjdFxuICogQHJldHVybnMge0FycmF5fSAtIHJldHVybnMgb3RoZXIgYXJyYXlcbiAqL1xudXRpbHMuZmlsdGVyID0gZnVuY3Rpb24gKGFyciwgaGFuZGxlciwga2V5cyA9IFtdKSB7XG4gIGxldCByZXMgPSBbXTtcblxuICBpZighQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgIGtleXMgPSBba2V5c107XG4gIH1cblxuICBpZighaGFuZGxlcikge1xuICAgIHJldHVybiBbLi4uYXJyXTtcbiAgfVxuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGl0ZW0gPSBhcnJbaV07XG4gICAgbGV0IHZhbCA9IGtleXMubGVuZ3RoPyB0aGlzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIGl0ZW0pOiBpdGVtO1xuXG4gICAgaWYoIXZhbCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFsICs9ICcnO1xuXG4gICAgaWYoKHR5cGVvZiBoYW5kbGVyID09ICdmdW5jdGlvbicpICYmIGhhbmRsZXIoaXRlbSkpIHtcbiAgICAgIHJlcy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICBlbHNlIGlmKHZhbC5tYXRjaChoYW5kbGVyIHx8ICcnKSkge1xuICAgICAgcmVzLnB1c2goaXRlbSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogT3JkZXIgYW4gYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMSwgMiwgM11cbiAqIHV0aWxzLnNvcnQoWzMsIDIsIDFdLCB0cnVlKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMywgMiwgMV1cbiAqIHV0aWxzLnNvcnQoWzEsIDIsIDNdLCBmYWxzZSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dXG4gKiB1dGlscy5zb3J0KFt7eDogM30sIHt4OiAyfSwge3g6IDF9XSwgW1sneCddXSwgW3RydWVdKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCBbJ3gnXSwgdHJ1ZSk7XG4gKiB1dGlscy5zb3J0KFt7eDogM30sIHt4OiAyfSwge3g6IDF9XSwgJ3gnKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dLCBbWyd4J11dLCBbZmFsc2VdKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dLCBbJ3gnXSwgZmFsc2UpO1xuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sICd4JywgZmFsc2UpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMSwgeTogM30sIHt4OiAyLCB5OiAxfSwge3g6MiwgeTogMn1dXG4gKiB1dGlscy5zb3J0KFt7eDogMiwgeTogMn0sIHt4OiAyLCB5OiAxfSwge3g6IDIsIHk6IDN9XSwgW1sneCddLCBbJ3knXV0sIFt0cnVlLCB0cnVlXSk7XG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0ge2Jvb2xlYW58QXJyYXlbXXxzdHJpbmdbXXxzdHJpbmd9IFtrZXlzXVxuICogQHBhcmFtIHtib29sZWFufGJvb2xlYW5bXX0gW29yZGVyXSAtIHJldmVyc2Ugb3Igbm90XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbnV0aWxzLnNvcnQgPSBmdW5jdGlvbihhcnIsIGtleXMgPSB0cnVlLCBvcmRlciA9IFtdKSB7XG4gIGFyciA9IFsuLi5hcnJdO1xuXG4gIGlmKGtleXMgPT09IHRydWUpIHtcbiAgICBrZXlzID0gW107XG4gICAgb3JkZXIgPSBbdHJ1ZV07XG4gIH1cbiAgZWxzZSBpZihrZXlzID09PSBmYWxzZSkge1xuICAgIGtleXMgPSBbXTtcbiAgICBvcmRlciA9IFtmYWxzZV07XG4gIH1cblxuICBpZighQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgIGtleXMgPSBba2V5c107XG4gIH1cblxuICBpZighQXJyYXkuaXNBcnJheShvcmRlcikpIHtcbiAgICBvcmRlciA9IFtvcmRlcl07XG4gIH1cblxuICBsZXQgbCA9IGtleXMubGVuZ3RoO1xuXG4gIGFyci5zb3J0KChhLCBiKSA9PiB7XG4gICAgbGV0IGkgPSAwO1xuXG4gICAgbGV0IGNoZWNrID0gKGEsIGIsIHJldmVyc2UgPSBmYWxzZSkgPT4ge1xuICAgICAgaWYoYSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgYSA9IGEuZ2V0VGltZSgpO1xuICAgICAgfVxuXG4gICAgICBpZihiIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBiID0gYi5nZXRUaW1lKCk7XG4gICAgICB9XG5cbiAgICAgIGlmKGEgPiBiKSB7XG4gICAgICAgIHJldHVybiByZXZlcnNlPyAtMTogMTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoYSA8IGIpIHtcbiAgICAgICAgcmV0dXJuIHJldmVyc2U/IDE6IC0xO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgICB9O1xuXG4gICAgbGV0IG5leHQgPSAoKSA9PiB7XG4gICAgICBpZihpID49IGwpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG5cbiAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZighQXJyYXkuaXNBcnJheShrZXkpKSB7XG4gICAgICAgIGtleSA9IFtrZXldO1xuICAgICAgfVxuXG4gICAgICBsZXQgYVYgPSB0aGlzLmdldFByb3BlcnR5QnlLZXlzKGtleSwgYSk7XG4gICAgICBsZXQgYlYgPSB0aGlzLmdldFByb3BlcnR5QnlLZXlzKGtleSwgYik7XG4gICAgICBsZXQgcmVzID0gY2hlY2soYVYsIGJWLCBvcmRlcltpXSA9PT0gZmFsc2UpO1xuXG4gICAgICBpZihyZXMgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1cblxuICAgICAgaSsrO1xuXG4gICAgICByZXR1cm4gbmV4dCgpO1xuICAgIH07XG5cbiAgICBpZighbCkge1xuICAgICAgcmV0dXJuIGNoZWNrKGEsIGIsIG9yZGVyW2ldID09PSBmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIHZhbHVlIGlzIGNvbXBvbmVudCBzY29wZSBwcm94eSBvYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmlzU2NvcGVQcm94eSA9IGZ1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gISEodmFsICYmIHR5cGVvZiB2YWwgPT0gJ29iamVjdCcgJiYgdmFsLl9faXNQcm94eSk7XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSB2YWx1ZSBpcyBwbGFpbiBvYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmlzUGxhaW5PYmplY3QgPSBmdW5jdGlvbihvYmopIHtcbiAgcmV0dXJuICEhKG9iaiAmJiB0eXBlb2Ygb2JqID09ICdvYmplY3QnICYmIChvYmouY29uc3RydWN0b3IgPT0gT2JqZWN0IHx8IG9iai5jb25zdHJ1Y3RvciA9PSBBcnJheSkpO1xufTtcblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZVxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW25lc3RlZD10cnVlXSAtIGRlZXAgY29weSBpZiBpcyB0cnVlXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuY29weSA9IGZ1bmN0aW9uKHZhbHVlLCBuZXN0ZWQgPSB0cnVlKSB7XG4gIGlmKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCAhdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBmdW5jdGlvbiBuZXh0KG9iaikge1xuICAgIG9iaiA9IEFycmF5LmlzQXJyYXkob2JqKT8gWy4uLm9ial06IHsuLi5vYmp9O1xuXG4gICAgaWYoIW5lc3RlZCkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBmb3IobGV0IGsgaW4gb2JqKSB7XG4gICAgICBpZighb2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZihvYmpba10gJiYgdHlwZW9mIG9ialtrXSA9PSAnb2JqZWN0Jykge1xuICAgICAgICBvYmpba10gPSBuZXh0KG9ialtrXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHJldHVybiBuZXh0KHZhbHVlKTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHRoZSB2YWx1ZSB0byBhdHRyaWJ1dGUgYXBwcm9wcmlhdGUgZm9ybWF0XG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGlmKHZhbHVlID09PSBmYWxzZSB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYodmFsdWUgaW5zdGFuY2VvZiBFdmVudEVtaXR0ZXIpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgRXZlbnRdJztcbiAgfVxuXG4gIGlmKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG4gIH1cblxuICBpZih0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZSArICcnO1xufTtcblxuLyoqXG4gKiBDb21wYXJlIHR3byB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0geyp9IGFcbiAqIEBwYXJhbSB7Kn0gYlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmNvbXBhcmUgPSBmdW5jdGlvbiAoYSwgYikge1xuICBpZigoYSBpbnN0YW5jZW9mIERhdGUpICYmIChiIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICByZXR1cm4gYS5nZXRUaW1lKCkgPT09IGIuZ2V0VGltZSgpO1xuICB9XG4gIGlmKHR5cGVvZiBhID09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGIgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBhLnRvU3RyaW5nKCkgPT09IGIudG9TdHJpbmcoKTtcbiAgfVxuICBlbHNlIGlmKHR5cGVvZiBhID09ICdvYmplY3QnICYmIHR5cGVvZiBiID09ICdvYmplY3QnKSB7XG4gICAgaWYoYSA9PT0gbnVsbCB8fCBiID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gYSA9PT0gYjtcbiAgICB9XG5cbiAgICBpZihPYmplY3Qua2V5cyhhKS5sZW5ndGggIT0gT2JqZWN0LmtleXMoYikubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yKGxldCBrIGluIGEpIHtcbiAgICAgIGlmKCFhLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZighdGhpcy5jb21wYXJlKGFba10sIGJba10pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBhID09PSBiO1xufTtcblxuLyoqXG4gKiBDb21wYXJlIGN1cnJlbnQgdmFsdWUgd2l0aCBwcmV2aW91c1xuICpcbiAqIEBwYXJhbSB7Kn0gY3VycmVudCAtIHRoZSBjdXJyZW50IHZhbHVlXG4gKiBAcGFyYW0geyp9IHByZXZpb3VzIC0gdGhlIGN1cnJlbnQgdmFsdWUgY29weVxuICogQHBhcmFtIHsqfSBwcmV2aW91c0NvcHkgLSB0aGUgcHJldmlvdXMgdmFsdWUgY29weVxuICogQHBhcmFtIHsqfSBbY3VycmVudENvcHldIC0gdGhlIGN1cnJlbnQgdmFsdWUgY29weVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlID0gZnVuY3Rpb24oY3VycmVudCwgcHJldmlvdXMsIHByZXZpb3VzQ29weSwgY3VycmVudENvcHkpIHtcbiAgaWYoY3VycmVudCAhPT0gcHJldmlvdXMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdGhpcy5jb21wYXJlKGFyZ3VtZW50cy5sZW5ndGggPT0gMz8gY3VycmVudENvcHk6IHRoaXMuY29weShjdXJyZW50KSwgcHJldmlvdXNDb3B5KTtcbn07XG5cbi8qKlxuICogRW5jb2RlIGh0bWwgZW50aXRpZXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcInlvdSAmYW1wIG1lXCJcbiAqIHV0aWxzLmVuY29kZUh0bWxFbnRpdGllcygneW91ICYgbWUnKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuZW5jb2RlSHRtbEVudGl0aWVzID0gZnVuY3Rpb24oaHRtbCkge1xuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgdmFsdWU7XG5cbiAgZWwudGV4dENvbnRlbnQgPSBodG1sO1xuICB2YWx1ZSA9IGVsLmlubmVySFRNTDtcbiAgZWwucmVtb3ZlKCk7XG4gIGVsID0gbnVsbDtcblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG4vKipcbiAqIERlY29kZSBodG1sIGVudGl0aWVzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJ5b3UgJiBtZVwiXG4gKiB1dGlscy5kZWNvZGVIdG1sRW50aXRpZXMoJ3lvdSAmYW1wIG1lJyk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmRlY29kZUh0bWxFbnRpdGllcyA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBsZXQgdmFsdWU7XG5cbiAgZWwuaW5uZXJIVE1MID0gaHRtbDtcbiAgdmFsdWUgPSBlbC52YWx1ZTtcbiAgZWwucmVtb3ZlKCk7XG4gIGVsID0gbnVsbDtcblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG4vKipcbiAqIENoYW5nZSBzdHJpbmcgZnJvbSBkYXNoIHRvIGNhbWVsIGNhc2UgZm9ybWF0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMudG9DYW1lbENhc2UgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXFcrKC4pL2csIChtLCBjKSA9PiBjLnRvVXBwZXJDYXNlKCkpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RyaW5nIGZyb20gY2FtZWwgdG8gZGFzaCBjYXNlIGZvcm1hdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnRvRGFzaENhc2UgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIChtLCBjKSA9PiBgLSR7Yy50b0xvd2VyQ2FzZSgpfWApO1xufTtcblxuLyoqXG4gKiBHZXQgbmVzdGVkIG9iamVjdCBwcm9wZXJ0eSBieSBhcnJheSBrZXlzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCkge1xuICBsZXQgY3VycmVudDtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoZnVuY3Rpb24obywgaykge1xuICAgIGkrKztcblxuICAgIGlmKHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gbztcbiAgICB9XG5cbiAgICBpZihvW2tdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAoaSA9PSBsZW5ndGgpICYmIChjdXJyZW50ID0gb1trXSk7XG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIGN1cnJlbnQ7XG59O1xuXG4vKipcbiAqIENoZWNrIG5lc3RlZCBvYmplY3RzIHRyZWUgaGFzIHByb3BlcnR5IG9yIG5vdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHRydWVcbiAqIHV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaGFzUHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QpIHtcbiAgbGV0IGhhcyA9IGZhbHNlO1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZShmdW5jdGlvbihvLCBrKSB7XG4gICAgaSsrO1xuXG4gICAgaWYodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiAhIW87XG4gICAgfVxuXG4gICAgaWYoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAoaSA9PSBsZW5ndGgpICYmIChoYXMgPSBvLmhhc093blByb3BlcnR5KGspKTtcbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gaGFzO1xufTtcblxuLyoqXG4gKiBTZXQgbmVzdGVkIG9iamVjdHMgdHJlZSBwcm9wZXJ0eVxuICogUmV0dXJucyBjaGFuZ2VkIHByb3BlcnR5IG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHt5OiA2fVxuICogdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0sIChsYXN0LCB2YWwpID0+IGxhc3Q/IDY6ICh2YWwgfHwge30pKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLnNldFByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0LCBmbikge1xuICBsZXQgY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoZnVuY3Rpb24obywgaykge1xuICAgIGkrKztcblxuICAgIGlmKHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIHJldHVybiBjdXJyZW50ID0gb1trXSA9IGZuKGkgPT0gbGVuZ3RoKTtcbiAgICB9XG5cbiAgICBvW2tdID0gZm4oaSA9PSBsZW5ndGgsIG9ba10pO1xuICAgIGN1cnJlbnQgPSBvO1xuXG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIGN1cnJlbnQ7XG59O1xuXG4vKipcbiAqXG4gKiBEZWxldGUgcHJvcGVydHkgZnJvbSBuZXN0ZWQgb2JqZWN0cyB0cmVlXG4gKiBSZXR1cm5zIGRlbGV0ZWQgcHJvcGVydHkgdmFsdWVcbiAqIFlvdSBjYW4gY2FuY2VsIGRlbGV0aW5nIGlmIHdpbGwgcmV0dXJuIGZhbHNlIGluIHRoZSBjYWxsYmFjayBmdW5jdGlvblxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIDVcbiAqIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19KTtcbiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyA1XG4gKiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSwgdmFsID0+IHZhbCAhPSA1KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbZm5dXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QsIGZuKSB7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IHZhbHVlO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoZnVuY3Rpb24obywgaykge1xuICAgIGkrKztcblxuICAgIGlmKHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBpZihpID09IGxlbmd0aCkge1xuICAgICAgdmFsdWUgPSBvW2tdO1xuXG4gICAgICBpZighZm4gfHwgZm4odmFsdWUpKSB7XG4gICAgICAgIGRlbGV0ZSBvW2tdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuXG4vKipcbiAqIEdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSB0YXJnZXQgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xuXG51dGlscy5nZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQgPSBmdW5jdGlvbih0YXJnZXQsIGtleSkge1xuICBsZXQgY2hlY2sgPSAob2JqKSA9PiB7XG4gICAgaWYob2JqLnByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgbGV0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG5cbiAgICBpZighcHJvdG8pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjaGVjayhwcm90byk7XG4gIH07XG5cbiAgcmV0dXJuIGNoZWNrKHRhcmdldCk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgb3duIHByb3BlcnR5IHRhcmdldCBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG51dGlscy5nZXRPd25Qcm9wZXJ0eVRhcmdldCA9IGZ1bmN0aW9uKHRhcmdldCwga2V5KSB7XG4gIGxldCBjaGVjayA9IChvYmopID0+IHtcbiAgICBpZihvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBsZXQgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcblxuICAgIGlmKCFwcm90bykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoZWNrKHByb3RvKTtcbiAgfTtcblxuICByZXR1cm4gY2hlY2sodGFyZ2V0KTtcbn07XG5cbi8qKlxuICogQ2xlYXIgdmFsdWUgcHJveHkgaWYgaXQgZXhpc3RlbnRcbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuY2xlYXJTY29wZVByb3h5ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCAhdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBsZXQgY2xlYXIgPSAob2JqKSA9PiB7XG4gICAgZm9yKGxldCBrIGluIG9iaikge1xuICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmKG9ialtrXSAmJiB0eXBlb2Ygb2JqW2tdID09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmKG9ialtrXS5fX2lzUHJveHkpIHtcbiAgICAgICAgICBvYmpba10gPSBvYmpba10uX190YXJnZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBjbGVhcihvYmpba10pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBpZih2YWx1ZS5fX2lzUHJveHkpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLl9fdGFyZ2V0O1xuICB9XG5cbiAgY2xlYXIodmFsdWUpO1xuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cblxuLyoqXG4gKiBHZW5lcmF0ZSByYW5kb20gc3RyaW5nXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5jcmVhdGVSYW5kb21TdHJpbmcgPSBmdW5jdGlvbihsZW5ndGggPSAxNiwgZm4gPSBudWxsKSB7XG4gIGxldCBzdHIgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgbGVuZ3RoICsgMik7XG4gIGxldCB2YWwgPSAnJztcblxuICBmb3IobGV0IGkgPSAwLCBsID0gc3RyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmKE1hdGgucmFuZG9tKCkgPiAwLjY2KSB7XG4gICAgICB2YWwgKz0gc3RyW2ldLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFsICs9IHN0cltpXTtcbiAgICB9XG4gIH1cblxuICBpZihmbiAmJiBmbih2YWwpKSB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlUmFuZG9tU3RyaW5nKGxlbmd0aCwgZm4pO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHV0aWxzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy5qcyIsImltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcbiAgY29uc3RydWN0b3IoYmFzZVVybCwgZGVmYXVsdHMpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSBiYXNlVXJsPyAoYmFzZVVybC5yZXBsYWNlKC9cXC8kLywgJycpICsgJy8nKTogJyc7XG5cbiAgICB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgc3RhdHVzRXJyb3JzUGF0dGVybjogL14oW14yM10pfDQwNC8sXG4gICAgICAuLi4oZGVmYXVsdHMgfHwge30pXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIHJlcXVlc3Qgd2l0aCBhbnkgbWV0aG9kXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcXVlcnkob3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgdXJsO1xuICAgICAgbGV0IHhocjtcblxuICAgICAgb3B0aW9ucyA9IHsuLi50aGlzLmRlZmF1bHRzLCAuLi4ob3B0aW9ucyB8fCB7fSl9O1xuXG4gICAgICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICh0eXBlb2Ygb3B0aW9ucy5vblN0YXJ0ID09ICdmdW5jdGlvbicpICYmIG9wdGlvbnMub25TdGFydCh4aHIpO1xuICAgICAgb3B0aW9ucyA9IHRoaXMudHJhbnNmb3JtQmVmb3JlKG9wdGlvbnMpO1xuICAgICAgdXJsID0gdGhpcy5iYXNlVXJsPyBgJHt0aGlzLmJhc2VVcmx9JHtvcHRpb25zLnVybC5yZXBsYWNlKC9eXFwvLywgJycpfWA6IG9wdGlvbnMudXJsO1xuICAgICAgeGhyLm9wZW4ob3B0aW9ucy5tZXRob2QsIHVybCwgdHJ1ZSwgb3B0aW9ucy51c2VyLCBvcHRpb25zLnBhc3N3b3JkKTtcbiAgICAgIG9wdGlvbnMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyB8fCB7fTtcblxuICAgICAgaWYob3B0aW9ucy5qc29uKSB7XG4gICAgICAgIG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuanNvbik7XG4gICAgICAgIG9wdGlvbnMuaGVhZGVyc1snY29udGVudC10eXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgIG9wdGlvbnMucmVzcG9uc2VUeXBlID0gb3B0aW9ucy5yZXNwb25zZVR5cGUgfHwgJ2pzb24nO1xuICAgICAgfVxuICAgICAgZWxzZSBpZihvcHRpb25zLmZvcm0pIHtcbiAgICAgICAgb3B0aW9ucy5ib2R5ID0gdGhpcy5jcmVhdGVGb3JtRGF0YShvcHRpb25zLmZvcm0pO1xuICAgICAgICBvcHRpb25zLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddID0gJ211bHRpcGFydC9mb3JtLWRhdGEnO1xuICAgICAgfVxuXG4gICAgICBpZihvcHRpb25zLmhhc093blByb3BlcnR5KCd0aW1lb3V0JykpIHtcbiAgICAgICAgeGhyLnRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQ7XG4gICAgICB9XG5cbiAgICAgIGlmKG9wdGlvbnMucmVzcG9uc2VUeXBlKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSBvcHRpb25zLnJlc3BvbnNlVHlwZTtcbiAgICAgIH1cblxuICAgICAgaWYob3B0aW9ucy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IG9wdGlvbnMud2l0aENyZWRlbnRpYWxzO1xuICAgICAgfVxuXG4gICAgICBpZihvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgZm9yKGxldCBrIGluIG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICAgIGlmKCFvcHRpb25zLmhlYWRlcnMuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGssIG9wdGlvbnMuaGVhZGVyc1trXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYob3B0aW9ucy5wYXJhbXMpIHtcbiAgICAgICAgbGV0IHN0ciA9IHRoaXMucGFyYW1zVG9RdWVyeShvcHRpb25zLnBhcmFtcyk7XG5cbiAgICAgICAgaWYoc3RyKSB7XG4gICAgICAgICAgdXJsICs9IFwiP1wiICsgc3RyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKHR5cGVvZiBvcHRpb25zLm9uUHJvZ3Jlc3MgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB4aHIub25wcm9ncmVzcyA9ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gb3B0aW9ucy5vblByb2dyZXNzKHhocik7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IHRoaXMudHJhbnNmb3JtQWZ0ZXIoeGhyKTtcblxuICAgICAgICBpZigoeGhyLnN0YXR1cyArICcnKS5tYXRjaChvcHRpb25zLnN0YXR1c0Vycm9yc1BhdHRlcm4pKSB7XG4gICAgICAgICAgbGV0IGVyciA9IG5ldyBFcnJvcihgUmVxdWVzdCB0byBcIiR7dXJsfVwiIHJldHVybnMgZmFpbHVyZSBzdGF0dXMgY29kZSAke3hoci5zdGF0dXN9YCk7XG5cbiAgICAgICAgICBlcnIucmVzcG9uc2UgPSByZXNwb25zZTtcblxuICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgfSBcbiAgICAgICAgXG4gICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9udGltZW91dCA9ICgpID0+IHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgUmVxdWVzdCB0byBcIiR7dXJsfVwiIHRpbWVkIG91dGApKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbmVycm9yID0gKGVycikgPT4ge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5zZW5kKG9wdGlvbnMuYm9keSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBvYmplY3QgdG8gcXVlcnkgc3RyaW5nXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHBhcmFtc1RvUXVlcnkob2JqKSB7XG4gICAgbGV0IHNlcCA9ICcmJztcbiAgICBsZXQgZXEgPSAnPSc7XG5cbiAgICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLm1hcCgoaykgPT4ge1xuICAgICAgbGV0IGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KGspO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmpba10pKSB7XG4gICAgICAgIGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KGspO1xuXG4gICAgICAgIHJldHVybiBvYmpba10ubWFwKCh2LCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGtzICsgYFske2l9XWAgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudCh2KTtcbiAgICAgICAgfSkuam9pbihzZXApO1xuICAgICAgfVxuICAgICAgZWxzZSBpZihvYmpba10gJiYgdHlwZW9mIG9ialtrXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbGV0IG9wdCA9IFtdO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKG9ialtrXSkubWFwKChrZXkpID0+IHtcbiAgICAgICAgICBvcHQucHVzaChrcyArIGBbJHtrZXl9XWAgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba11ba2V5XSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gb3B0LmpvaW4oc2VwKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4ga3MgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba10pO1xuICAgICAgfVxuICAgIH0pLmpvaW4oc2VwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHF1ZXJ5IHN0cmluZyB0byBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgcGFyYW1zRnJvbVF1ZXJ5KHN0cikge1xuICAgIGxldCBxdWVyeSA9IHt9O1xuICAgIGxldCBhbXBzID0gc3RyLnNwbGl0KCcmJyk7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gYW1wcy5sZW5ndGg7IGkgPGw7IGkrKykge1xuICAgICAgbGV0IGVxcyA9ICBhbXBzW2ldLnNwbGl0KCc9Jyk7XG4gICAgICBsZXQga2V5ID0gZGVjb2RlVVJJQ29tcG9uZW50KGVxc1swXSk7XG4gICAgICBsZXQgdmFsID0gZGVjb2RlVVJJQ29tcG9uZW50KGVxc1sxXSk7XG5cbiAgICAgIGlmKCFrZXkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgICAgcXVlcnlba2V5XS5wdXNoKHZhbCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKHF1ZXJ5W2tleV0pIHtcbiAgICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldLCB2YWxdO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHF1ZXJ5W2tleV0gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBtdWx0aXBhcnQgZm9ybSBkYXRhIGZyb20gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICogQHBhcmFtIHtGb3JtRGF0YX0gW2RhdGFdXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbmFtZXNwYWNlXVxuICAgKlxuICAgKiBAcmV0dXJucyB7Rm9ybURhdGF9XG4gICAqL1xuICBjcmVhdGVGb3JtRGF0YShvYmosIGRhdGEgPSBudWxsLCBuYW1lc3BhY2UgPSAnJykge1xuICAgIGxldCBmZCA9IGRhdGEgfHwgbmV3IEZvcm1EYXRhKCk7XG5cbiAgICBmb3IobGV0IGsgaW4gb2JqKSB7XG4gICAgICBpZihvYmouaGFzT3duUHJvcGVydHkoaykgJiYgb2JqW2tdKSB7XG4gICAgICAgIGxldCBrZXkgPSBuYW1lc3BhY2U/IG5hbWVzcGFjZSArICdbJyArIGsgKyAnXSc6IGs7XG5cbiAgICAgICAgaWYgKG9ialtrXSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICBmZC5hcHBlbmQoa2V5LCBvYmpba10udG9JU09TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodXRpbHMuaXNQbGFpbk9iamVjdChvYmpba10pKSB7XG4gICAgICAgICAgdGhpcy5jcmVhdGVGb3JtRGF0YShvYmpba10sIGZkLCBrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGZkLmFwcGVuZChrZXksIG9ialtrXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmQ7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIGRhdGEgYmVmb3JlIGEgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgdHJhbnNmb3JtQmVmb3JlKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gZGF0YSBhZnRlciBhIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtYTUxIdHRwUmVxdWVzdH0geGhyXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICB0cmFuc2Zvcm1BZnRlcih4aHIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeGhyOiB4aHIsXG4gICAgICBkYXRhOiB4aHIucmVzcG9uc2UsXG4gICAgICBzdGF0dXM6IHhoci5zdGF0dXNcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIEdFVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBnZXQodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdHRVQnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgREVMRVRFIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGRlbGV0ZSh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ0RFTEVURSc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBQT1NUIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHBvc3QodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQT1NUJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIFBVVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBwdXQodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQVVQnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgUEFUQ0ggcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcGF0Y2godXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQQVRDSCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoKTtcblxucmVxdWVzdC5fX2luc3RhbmNlcyA9IHt9O1xuXG4vKipcbiAqIEFkZCBuZXcgcmVxdWVzdCBpbnN0YW5jZSB0byB0aGUgbWFpbiBzZXJ2aWNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7UmVxdWVzdH0gaW5zdGFuY2VcbiAqL1xucmVxdWVzdC5hZGRJbnN0YW5jZSA9IGZ1bmN0aW9uKG5hbWUsIGluc3RhbmNlKSB7XG4gIHRoaXMuX19pbnN0YW5jZXNbbmFtZV0gPSBpbnN0YW5jZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGluc3RhbmNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucmVxdWVzdC5yZW1vdmVJbnN0YW5jZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZGVsZXRlIHRoaXMuX19pbnN0YW5jZXNbbmFtZV07XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWVzdCwgJ3VzZScsIHtcbiAgZ2V0OiAoKSA9PiB7XG4gICAgcmV0dXJuIHJlcXVlc3QuX19pbnN0YW5jZXM7XG4gIH1cbn0pO1xuXG5yZXF1ZXN0LlJlcXVlc3QgPSBSZXF1ZXN0O1xuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvcmVxdWVzdC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMudmFsdWVLZXkgPSAndmFsdWUnO1xuICB9XG5cbiAgY2hhbmdlZFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBjaGFuZ2VkRm9jdXModmFsdWUpIHtcbiAgICB0aGlzLnNldEZvY3VzKHZhbHVlKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ2ZvY3VzJykgJiYgdGhpcy5zZXRGb2N1cyh0aGlzLmF0dHJzLmZvY3VzKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCd2YWx1ZScpICYmIHRoaXMuc2V0VmFsdWUodGhpcy5hdHRycy52YWx1ZSk7XG4gIH1cblxuICBzZXRGb2N1cyh2YWx1ZSkge1xuICAgIHZhbHVlPyB0aGlzLnNldEVsZW1lbnRGb2N1cygpOiB0aGlzLnNldEVsZW1lbnRCbHVyKCk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICh0aGlzLmVsW3RoaXMudmFsdWVLZXldICE9PSB2YWx1ZSkgJiYgKHRoaXMuZWxbdGhpcy52YWx1ZUtleV0gPSB2YWx1ZSA9PT0gMD8gJzAnOiAodmFsdWUgfHwgJycpKTtcbiAgfVxuXG4gIHNldEVsZW1lbnRGb2N1cygpIHtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cblxuICBzZXRFbGVtZW50Qmx1cigpIHtcbiAgICB0aGlzLmVsLmJsdXIoKTtcbiAgfVxufTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGV4dC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbaW5dJztcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnZm9yJywgRm9yKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ29sJywgRm9yKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3VsJywgRm9yKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RoZWFkJywgRm9yKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3Rib2R5JywgRm9yKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3Rmb290JywgRm9yKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RyJywgTG9vcCk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdsb29wJywgTG9vcCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLl9faXRlcmF0b3IgPSBudWxsO1xuICAgIHRoaXMuX19rZXkgPSBudWxsO1xuICAgIHRoaXMuX192YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5fX2luZGV4ID0gbnVsbDtcbiAgICB0aGlzLl9fY29tcGFyaXNvblZhbHVlID0gbnVsbDtcbiAgICB0aGlzLml0ZXJhdG9ycyA9IHt9O1xuICAgIHRoaXMuaXRlcmF0b3JSZWYgPSBudWxsO1xuICAgIHRoaXMuaXRlcmF0b3JPdXRlckhUTUwgPSBudWxsO1xuICB9XG5cbiAgY2hhbmdlZEluKGRhdGEpIHtcbiAgICB0aGlzLmRyYXcoZGF0YSk7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuY3JlYXRlSXRlcmF0b3IoKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuZHJhdyh0aGlzLmF0dHJzLmluKTtcbiAgfVxuXG4gIGNyZWF0ZUl0ZXJhdG9yKCkge1xuICAgIGxldCBlbDtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5lbC5jaGlsZHJlbltpXTtcblxuICAgICAgaWYoY2hpbGQuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKSA9PSAnbG9vcCcpIHtcbiAgICAgICAgZWwgPSBjaGlsZDtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZWwgPSBjaGlsZDtcbiAgICB9XG5cbiAgICBpZighZWwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignXCJGb3JcIiBjb21wb25lbnQgbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBjaGlsZCcpXG4gICAgfVxuXG4gICAgbGV0IGNvbXBvbmVudE5hbWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpO1xuXG4gICAgaWYoY29tcG9uZW50TmFtZSAhPSAnbG9vcCcpIHtcbiAgICAgIGxldCBjb21wb25lbnQgPSBBa2lsaS5jb21wb25lbnQoY29tcG9uZW50TmFtZSB8fCBlbC50YWdOYW1lKTtcblxuICAgICAgaWYoIWNvbXBvbmVudCkge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcsICdsb29wJyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKCEoY29tcG9uZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIEZvcikpIHtcbiAgICAgICAgbGV0IG1hc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsb29wJyk7XG5cbiAgICAgICAgbWFzay5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIGVsID0gbWFzaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmh0bWwgPSBlbC5pbm5lckhUTUw7XG4gICAgdGhpcy5pdGVyYXRvclJlZiA9IGVsLm5leHRTaWJsaW5nO1xuICAgIHRoaXMuaXRlcmF0b3JPdXRlckhUTUwgPSBlbC5vdXRlckhUTUw7XG4gICAgZWwucmVtb3ZlKCk7XG4gIH1cblxuICBjcmVhdGVJdGVyYXRvckVsZW1lbnQoKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcblxuICAgIGVsLmlubmVySFRNTCA9IHRoaXMuaXRlcmF0b3JPdXRlckhUTUw7XG4gICAgZWwgPSBlbC5jb250ZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBsb29wKGtleSwgdmFsdWUsIGtleXMsIGluZGV4KSB7XG4gICAgdGhpcy5fX2luZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5fX2tleSA9IGtleTtcbiAgICB0aGlzLl9fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLl9fY29tcGFyaXNvblZhbHVlID0gdXRpbHMuY29weSh2YWx1ZSk7XG5cbiAgICBsZXQgaGFzaCA9ICcnO1xuICAgIGxldCBmb3VuZCA9IDA7XG5cbiAgICBpZih2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgJiYgdmFsdWUuX19oYXNoKSB7XG4gICAgICBoYXNoID0gdmFsdWUuX19oYXNoO1xuICAgIH1cblxuICAgIGlmKHRoaXMuaXRlcmF0b3JzW2hhc2hdKSB7XG4gICAgICBrZXkgPSBoYXNoO1xuICAgICAgZm91bmQgPSAyO1xuICAgIH1cbiAgICBlbHNlIGlmKHRoaXMuaXRlcmF0b3JzW2tleV0pIHtcbiAgICAgIGZvdW5kID0gMTtcbiAgICB9XG5cbiAgICBpZihmb3VuZCkge1xuICAgICAgbGV0IGl0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcnNba2V5XTtcblxuICAgICAgaWYoZm91bmQgPT0gMikge1xuICAgICAgICBsZXQgY1ZhbHVlID0gaXRlcmF0b3IuY29tcGFyc2lvbi52YWx1ZTtcbiAgICAgICAgbGV0IGNDb3B5ID0gaXRlcmF0b3IuY29tcGFyc2lvbi5jb3B5O1xuXG4gICAgICAgIGlmICh0aGlzLl9faW5kZXggIT09IGl0ZXJhdG9yLmluZGV4KSB7XG4gICAgICAgICAgaXRlcmF0b3Iuc2V0SW5kZXgoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9fa2V5ICE9PSBpdGVyYXRvci5rZXkpIHtcbiAgICAgICAgICBpdGVyYXRvci5zZXRLZXkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdXRpbHMuY29tcGFyZVByZXZpb3VzVmFsdWUodmFsdWUsIGNWYWx1ZSwgY0NvcHksIHRoaXMuX19jb21wYXJpc29uVmFsdWUpKSB7XG4gICAgICAgICAgaXRlcmF0b3Iuc2V0VmFsdWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGtleXNba2V5XSA9IGl0ZXJhdG9yO1xuICAgICAgICBkZWxldGUgdGhpcy5pdGVyYXRvcnNba2V5XTtcblxuICAgICAgICByZXR1cm4gaXRlcmF0b3I7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaXRlcmF0b3JSZWYgPSBpdGVyYXRvci5lbC5uZXh0U2libGluZztcbiAgICAgIGl0ZXJhdG9yLl9fZGVzdHJveSgpO1xuICAgIH1cblxuICAgIGxldCBlbCA9IHRoaXMuY3JlYXRlSXRlcmF0b3JFbGVtZW50KCk7XG5cbiAgICBlbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XG4gICAgdGhpcy5lbC5pbnNlcnRCZWZvcmUoZWwsIHRoaXMuaXRlcmF0b3JSZWYpO1xuICAgIEFraWxpLmNvbXBpbGUoZWwpO1xuXG4gICAgaWYodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgICBpZighdmFsdWUuX19oYXNoKSB7XG4gICAgICAgIGhhc2ggPSB1dGlscy5jcmVhdGVSYW5kb21TdHJpbmcoMzIsIChzdHIpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5pdGVyYXRvcnNbc3RyXTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbHVlLCAnX19oYXNoJywge1xuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIHZhbHVlOiBoYXNoXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBrZXlzW2hhc2hdID0gdGhpcy5fX2l0ZXJhdG9yO1xuICAgICAgZGVsZXRlIHRoaXMuaXRlcmF0b3JzW2hhc2hdO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmKEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgbGV0IGVWYWx1ZSA9IHR5cGVvZiB0aGlzLl9fdmFsdWUgPT0gJ3N0cmluZyc/IGBcIiR7dGhpcy5fX3ZhbHVlfVwiYDogdGhpcy5fX3ZhbHVlO1xuXG4gICAgICAgIGxldCBhcmdzID0gW1xuICAgICAgICAgIGBcIkZvclwiIGNvbXBvbmVudCBsb29wIGl0ZW1zIHNob3VsZCBoYXZlIFwib2JqZWN0XCIgdHlwZSBmb3IgaGlnaGVyIHBlcmZvcm1hbmNlLmAsXG4gICAgICAgICAgYFlvdSBjYW4gY2hhbmdlICR7ZVZhbHVlfSB0byB7dmFsdWU6ICR7ZVZhbHVlfX0sIGZvciBleGFtcGxlLmBcbiAgICAgICAgXTtcblxuICAgICAgICBjb25zb2xlLndhcm4uYXBwbHkoY29uc29sZS53YXJuLCBhcmdzKTtcbiAgICAgIH1cblxuICAgICAga2V5c1trZXldID0gdGhpcy5fX2l0ZXJhdG9yO1xuICAgICAgZGVsZXRlIHRoaXMuaXRlcmF0b3JzW2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsLl9fYWtpbGk7XG4gIH1cblxuICBkcmF3KGRhdGEpIHtcbiAgICBpZiAodHlwZW9mIGRhdGEgIT0gJ29iamVjdCcgfHwgZGF0YSA9PT0gbnVsbCkge1xuICAgICAgaWYoQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICBjb25zb2xlLndhcm4oYFwiRm9yXCIgY29tcG9uZW50IFwiaW5cIiBhdHRyaWJ1dGUgdmFsdWUgdHlwZSBtdXN0IGJlIGFuIG9iamVjdC9hcnJheWApO1xuICAgICAgICBkYXRhID0gW107XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGtleXMgPSB7fTtcbiAgICBsZXQgaW5kZXhLZXlzID0gW107XG4gICAgbGV0IGxhc3RFbGVtZW50ID0gbnVsbDtcbiAgICBsZXQgbGFzdCA9IHRoaXMuZWwuY2hpbGRyZW5bdGhpcy5lbC5jaGlsZHJlbi5sZW5ndGggLSAxXTtcblxuICAgIGlmKGxhc3QgJiYgIShsYXN0Ll9fYWtpbGkgaW5zdGFuY2VvZiBMb29wKSkge1xuICAgICAgbGFzdEVsZW1lbnQgPSBsYXN0O1xuICAgIH1cblxuICAgIGlmKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBkYXRhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpbmRleEtleXMucHVzaCh0aGlzLmxvb3AoaSwgZGF0YVtpXSwga2V5cywgaSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBpID0gMDtcblxuICAgICAgZm9yKGxldCBrIGluIGRhdGEpIHtcbiAgICAgICAgaWYoIWRhdGEuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4S2V5cy5wdXNoKHRoaXMubG9vcChrLCBkYXRhW2tdLCBrZXlzLCBpKSk7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gaW5kZXhLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGl0ZXJhdG9yID0gaW5kZXhLZXlzW2ldO1xuXG4gICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGl0ZXJhdG9yLmVsKTtcbiAgICAgIGl0ZXJhdG9yLml0ZXJhdGUoaSk7XG4gICAgfVxuXG4gICAgbGFzdEVsZW1lbnQgJiYgdGhpcy5lbC5hcHBlbmRDaGlsZChsYXN0RWxlbWVudCk7XG5cbiAgICBmb3IobGV0IGsgaW4gdGhpcy5pdGVyYXRvcnMpIHtcbiAgICAgIGlmKCF0aGlzLml0ZXJhdG9ycy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pdGVyYXRvcnNba10uX19kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdGhpcy5pdGVyYXRvcnMgPSBrZXlzO1xuICB9XG59O1xuXG5leHBvcnQgY2xhc3MgTG9vcCBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG4gIHN0YXRpYyBjb250cm9sQXR0cmlidXRlcyA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5mb3IgPSBudWxsO1xuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuaXNGb3IgPSB0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnaW4nKTtcblxuICAgIGlmKCF0aGlzLmlzRm9yICYmICEodGhpcy5lbC5wYXJlbnROb2RlLl9fYWtpbGkgaW5zdGFuY2VvZiBGb3IpKSB7XG4gICAgICB0aGlzLmNhbmNlbCgpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9faXRlcmF0b3IgPSB0aGlzO1xuICAgIHRoaXMuZm9yID0gdGhpcy5fX3BhcmVudC5fX2FraWxpO1xuICAgIHRoaXMuc2V0SW5kZXgoKTtcbiAgICB0aGlzLnNldEtleSgpO1xuICAgIHRoaXMuc2V0VmFsdWUoKTtcblxuICAgIHRoaXMuaXNGb3IgJiYgc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5pc0ZvciAmJiBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgc2V0SW5kZXgoKSB7XG4gICAgdGhpcy5pbmRleCA9IHRoaXMuZm9yLl9faW5kZXg7XG4gICAgdGhpcy5zY29wZS5fX3NldCgnbG9vcEluZGV4JywgdGhpcy5pbmRleCk7XG4gIH1cblxuICBzZXRLZXkoKSB7XG4gICAgdGhpcy5rZXkgPSB0aGlzLmZvci5fX2tleTtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wS2V5JywgdGhpcy5rZXkpO1xuICB9XG5cbiAgc2V0VmFsdWUoKSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuZm9yLl9fdmFsdWU7XG4gICAgdGhpcy5zY29wZS5fX3NldCgnbG9vcFZhbHVlJywgdGhpcy52YWx1ZSwgdHJ1ZSk7XG5cbiAgICB0aGlzLmNvbXBhcnNpb24gPSB7XG4gICAgICBjb3B5OiB0aGlzLmZvci5fX2NvbXBhcmlzb25WYWx1ZSxcbiAgICAgIHZhbHVlOiB0aGlzLmZvci5fX3ZhbHVlXG4gICAgfVxuICB9XG5cbiAgaXRlcmF0ZShpbmRleCkge31cbn1cblxuRm9yLkxvb3AgPSBMb29wO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZm9yLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdyb3V0ZScsIFJvdXRlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtUcmFuc2l0aW9ufSB0cmFuc2l0aW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgc2V0VHJhbnNpdGlvbih0cmFuc2l0aW9uKSB7XG4gICAgbGV0IHN0YXRlID0gdHJhbnNpdGlvbi5wYXRoLnN0YXRlO1xuICAgIGxldCBwYXJhbXMgPSB0cmFuc2l0aW9uLnBhdGgucGFyYW1zO1xuICAgIGxldCB1cmwgPSB0cmFuc2l0aW9uLnVybDtcbiAgICBsZXQgcXVlcnkgPSB0cmFuc2l0aW9uLnF1ZXJ5O1xuICAgIGxldCBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbiAgICBmdW5jdGlvbiBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24ocGF0aCkge1xuICAgICAgaWYocGF0aC5wYXJlbnQpIHtcbiAgICAgICAgaWYgKHBhdGgucGFyZW50LmNvbXBvbmVudCkge1xuICAgICAgICAgIHJldHVybiBwYXRoLnBhcmVudC5jb21wb25lbnQuX19zY29wZS5fX3RyYW5zaXRpb24ucGF0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24ocGF0aC5wYXJlbnQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLl9fc2NvcGUuX190cmFuc2l0aW9uID0ge1xuICAgICAgcGF0aDoge1xuICAgICAgICBzdGF0ZTogc3RhdGUubmFtZSxcbiAgICAgICAgZGF0YTogdHJhbnNpdGlvbi5wYXRoLmRhdGEsXG4gICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICBwYXJlbnQ6IGdldFBhcmVudFNjb3BlVHJhbnNpdGlvbih0cmFuc2l0aW9uLnBhdGgpXG4gICAgICB9LFxuICAgICAgcGFyYW1zOiB0cmFuc2l0aW9uLnBhcmFtcyxcbiAgICAgIHVybDogdXJsLFxuICAgICAgcXVlcnk6IHF1ZXJ5XG4gICAgfTtcblxuICAgIGlmIChzdGF0ZS50ZW1wbGF0ZSkge1xuICAgICAgdGhpcy5lbXB0eSgpO1xuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBgPGNvbXBvbmVudD4ke3N0YXRlLnRlbXBsYXRlfTwvY29tcG9uZW50PmA7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLnRlbXBsYXRlVXJsKSB7XG4gICAgICBwID0gcmVxdWVzdC5nZXQoc3RhdGUudGVtcGxhdGVVcmwpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICB0aGlzLmVtcHR5KCk7XG4gICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gYDxjb21wb25lbnQ+JHtyZXMuZGF0YX08L2NvbXBvbmVudD5gO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHAudGhlbigoKSA9PiB7XG4gICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICB9KTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9yb3V0ZS5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVsLCBjb21wb25lbnQpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIHRoZSBldmVudFxuICAgKlxuICAgKiBAcGFyYW0geyp9IGRhdGEgLSBzZW5kaW5nIGRhdGEuIFdpbGwgYmUgaW4gdGhlIGV2ZW50LmRldGFpbFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlXVxuICAgKi9cbiAgdHJpZ2dlcihkYXRhLCBvcHRpb25zID0geyBidWJibGVzOiBmYWxzZSB9LCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgaWYoZm9yY2UgfHwgIXRoaXMuaW5FdmFsdWF0aW5nKCkpIHtcbiAgICAgIHRoaXMuZWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQodGhpcy5uYW1lLCB7ZGV0YWlsOiBkYXRhLCAuLi5vcHRpb25zfSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaCB0aGUgZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gX0V2ZW50IC0gY2xhc3Mgb2YgdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdXG4gICAqL1xuICBkaXNwYXRjaChfRXZlbnQsIG9wdGlvbnMgPSB7IGJ1YmJsZXM6IGZhbHNlIH0sIGZvcmNlID0gZmFsc2UpIHtcbiAgICBpZihmb3JjZSB8fCAhdGhpcy5pbkV2YWx1YXRpbmcoKSkge1xuICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnQodGhpcy5uYW1lLCBvcHRpb25zKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGV2ZW50IGNhbGxiYWNrIGRvZXNuJ3QgcnVuIHJlY3Vyc2l2ZVxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGluRXZhbHVhdGluZygpIHtcbiAgICBsZXQgZGF0YSA9IHRoaXMuY29tcG9uZW50Ll9fZXZhbHVhdGluZ0V2ZW50O1xuXG4gICAgaWYoIWRhdGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YS5lbCA9PT0gdGhpcy5lbCAmJiBkYXRhLmV2ZW50LnR5cGUgPT09IHRoaXMubmFtZSAmJiBkYXRhLmNvbXBvbmVudCA9PT0gdGhpcy5jb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogQmluZCB0aGUgZnVuY3Rpb25cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICovXG4gIGJpbmQoZm4pIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5uYW1lLCB0aGlzLmZuID0gZm4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCB0aGUgZnVuY3Rpb25cbiAgICovXG4gIHVuYmluZCgpIHtcbiAgICB0aGlzLmZuICYmIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMuZm4pO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ldmVudC1lbWl0dGVyLmpzIiwiaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3JlcXVlc3QuanMnO1xuaW1wb3J0IFJvdXRlIGZyb20gJy4uL2NvbXBvbmVudHMvcm91dGUuanMnO1xuXG5leHBvcnQgY2xhc3MgVHJhbnNpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHVybCwgcXVlcnksIGhhc2ggPSAnJywgcHJldmlvdXMgPSBudWxsKSB7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgIHRoaXMuaGFzaCA9IGhhc2g7XG4gICAgdGhpcy5wcmV2aW91cyA9IHByZXZpb3VzO1xuICAgIHRoaXMucGF0aCA9IG51bGw7XG4gICAgdGhpcy5yb3V0ZXMgPSBbXTtcbiAgICB0aGlzLnN0YXRlcyA9IFtdO1xuICAgIHRoaXMucGFyYW1zID0ge307XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IGZhbHNlO1xuICB9XG5cbiAgcmVkaXJlY3QoKSB7XG4gICAgdGhpcy5jYW5jZWwoKTtcbiAgICByb3V0ZXIuc3RhdGUuYXBwbHkocm91dGVyLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgc2V0UGF0aChwYXRoKSB7XG4gICAgcGF0aC5wYXJlbnQgPSB0aGlzLnBhdGggfHwgbnVsbDtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIHRoaXMucm91dGVzLnB1c2gocGF0aCk7XG4gICAgdGhpcy5zdGF0ZXMucHVzaChwYXRoLnN0YXRlKTtcbiAgICB0aGlzLnBhcmFtcyA9ICFwYXRoLnBhcmVudD8gcGF0aC5wYXJhbXM6IHsuLi5wYXRoLnBhcmVudC5wYXJhbXMsIC4uLnBhdGgucGFyYW1zfTtcbiAgfVxuXG4gIGdldFJvdXRlKHN0YXRlKSB7XG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMucm91dGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJvdXRlID0gdGhpcy5yb3V0ZXNbaV07XG5cbiAgICAgIGlmKHJvdXRlLnN0YXRlID09PSBzdGF0ZSkge1xuICAgICAgICByZXR1cm4gcm91dGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBoYXNTdGF0ZShzdGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlcy5pbmRleE9mKHN0YXRlKSAhPSAtMTtcbiAgfVxuXG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gdHJ1ZTtcbiAgfVxufVxuXG5jb25zdCByb3V0ZXIgPSB7fTtcblxucm91dGVyLmJhc2VVcmwgPSBcIi9cIjtcbnJvdXRlci5zdGF0ZXMgPSBbXTtcbnJvdXRlci5oYXNoTW9kZSA9IHRydWU7XG5yb3V0ZXIuX19yZWRpcmVjdHMgPSAwO1xucm91dGVyLl9faW5pdCA9IGZhbHNlO1xucm91dGVyLl9fb3B0aW9ucyA9IHt9O1xucm91dGVyLl9fcGFyYW1SZWdleCA9IC8oOihbXFx3XFxkLV0rKSkvZztcbnJvdXRlci5fX3JvdXRlU2VsZWN0b3IgPSBjID0+IGMgaW5zdGFuY2VvZiBSb3V0ZTtcblxuLyoqXG4gKiBBZGQgbmV3IHN0YXRlIHRvIHRoZSByb3V0ZXJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHN0YXRlIG5hbWUuIFRvIHNldCBwYXJlbnRzIHlvdSBjYW4gdXNlIGRvdCwgZS5nLiAnYXBwLmFydGljbGUuZWRpdCdcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXR0ZXJuIC0gdXJsIHBhdHRlcm4gbGlrZSAnYXBwL2FydGljbGUvOmlkJ1xuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge3JvdXRlcn1cbiAqL1xucm91dGVyLmFkZCA9IGZ1bmN0aW9uIChuYW1lLCBwYXR0ZXJuLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIHRlbXBsYXRlOiAnJyxcbiAgICB0ZW1wbGF0ZVVybDogJycsXG4gICAgYWJzdHJhY3Q6IGZhbHNlLFxuICAgIGhhbmRsZXI6ICh0cmFuc2l0aW9uKSA9PiB7fVxuICB9O1xuXG4gIGlmKCFvcHRpb25zLnRlbXBsYXRlICYmICFvcHRpb25zLnRlbXBsYXRlVXJsKSB7XG4gICAgb3B0aW9ucy5hYnN0cmFjdCA9IHRydWU7XG4gIH1cblxuICBpZih0aGlzLmhhcyhuYW1lKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIFwiJHtuYW1lfVwiIGlzIGFscmVhZHkgZXhpc3RzYClcbiAgfVxuXG4gIHRoaXMuc2V0U3RhdGUobmFtZSwgcGF0dGVybiwgey4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zfSk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBzdGF0ZSBmcm9tIHRoZSBsaXN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucm91dGVyLnJlbW92ZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmKHRoaXMuc3RhdGVzW2ldLm5hbWUgPT0gbmFtZSkge1xuICAgICAgdGhpcy5zdGF0ZXMuc3BsaWNlKGksIDEpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIENoZWNrIHN0YXRlIGV4aXN0c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmKHRoaXMuc3RhdGVzW2ldLm5hbWUgPT0gbmFtZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBDaGFuZ2UgdGhlIHN0YXRlIHRvIHRoZSBwYXNzZWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHN0YXRlIG5hbWVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSAtIHBhcmFtcyBmb3Igc3RhdGUge2lkOiAxfSA9PiAnL2FwcC86aWQnID0+ICcvYXBwLzEnXG4gKiBAcGFyYW0ge29iamVjdH0gW3F1ZXJ5XSAtIHF1ZXJ5IHt4OiAxfSA9PiAnL2FwcC8/eD0xJ1xuICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoXVxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICovXG5yb3V0ZXIuc3RhdGUgPSBmdW5jdGlvbiAobmFtZSwgcGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSAnJywgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUobmFtZSk7XG5cbiAgaWYgKCFzdGF0ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIHJvdXRlIHN0YXRlIHdpdGggbmFtZSAke25hbWV9YCk7XG4gIH1cblxuICBsZXQgdXJsID0gdGhpcy5jcmVhdGVTdGF0ZVVybChzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCk7XG5cbiAgaWYoIW9wdGlvbnMucmVsb2FkICYmIHVybCA9PT0gdGhpcy5nZXRVcmwoKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuX19vcHRpb25zID0gb3B0aW9ucztcbiAgdGhpcy5zZXRVcmwodXJsKTtcbn07XG5cbi8qKlxuICogR28gYmFja1xuICovXG5yb3V0ZXIuYmFjayA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkuYmFjay5hcHBseSh3aW5kb3cuaGlzdG9yeSwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogR28gdG8gYW55IHdheVxuICovXG5yb3V0ZXIuZ28gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LmdvLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBHbyBmb3J3YXJkXG4gKi9cbnJvdXRlci5mb3J3YXJkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeS5mb3J3YXJkLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RhdGUgYnkgdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICovXG5yb3V0ZXIubG9jYXRpb24gPSBmdW5jdGlvbih1cmwsIG9wdGlvbnMgPSB7IHJlbG9hZDogZmFsc2UgfSkge1xuICB0aGlzLl9fb3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgaWYodGhpcy5oYXNoTW9kZSkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gdXJsO1xuICB9XG4gIGVsc2Uge1xuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCAnJywgdXJsKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSb3V0ZXIgaW5pdGlhbGl6YXRpb24uIFNob3VsZCBiZSBjYWxsZWQgYmVmb3JlIEFraWxpLmluaXQoKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbZGVmYXVsdFVybF1cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2hhc2hNb2RlPXRydWVdXG4gKi9cbnJvdXRlci5pbml0ID0gZnVuY3Rpb24gKGRlZmF1bHRVcmwgPSAnJywgaGFzaE1vZGUgPSB0cnVlKSB7XG4gIGxldCBvbGRQdXNoU3RhdGUgPSB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGU7XG5cbiAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IHJlcyA9IG9sZFB1c2hTdGF0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgcm91dGVyLmNoYW5nZVN0YXRlKCkuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTs7XG5cbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIHRoaXMuX19vblN0YXRlQ2hhbmdlSGFuZGxlciA9ICgpID0+IHtcbiAgICB0aGlzLmNoYW5nZVN0YXRlKCkuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTs7XG4gIH07XG5cbiAgdGhpcy5kZWZhdWx0VXJsID0gZGVmYXVsdFVybDtcbiAgdGhpcy5oYXNoTW9kZSA9IGhhc2hNb2RlO1xuXG4gIHRoaXMuc3RhdGVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICBhID0gYS5uYW1lLnNwbGl0KCcuJykubGVuZ3RoO1xuICAgIGIgPSBiLm5hbWUuc3BsaXQoJy4nKS5sZW5ndGg7XG5cbiAgICByZXR1cm4gYSAtIGI7XG4gIH0pO1xuXG4gIGxldCBzdGF0ZXMgPSB7fTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuICAgIGxldCBwYXJlbnRzID0gW107XG5cbiAgICBzdGF0ZXNbc3RhdGUubmFtZV0gPSBzdGF0ZTtcbiAgICBzdGF0ZS5jaGlsZHJlbiA9IFtdO1xuICAgIHBhcmVudHMgPSBzdGF0ZS5uYW1lLnNwbGl0KCcuJyk7XG4gICAgcGFyZW50cy5wb3AoKTtcbiAgICBzdGF0ZS5sZXZlbCA9IHN0YXRlLmFic3RyYWN0PyBudWxsOiBwYXJlbnRzLmxlbmd0aDtcblxuICAgIGlmIChwYXJlbnRzLmxlbmd0aCkge1xuICAgICAgbGV0IHBhcmVudE5hbWUgPSBwYXJlbnRzLmpvaW4oJy4nKTtcbiAgICAgIGxldCBwYXJlbnQgPSBzdGF0ZXNbcGFyZW50TmFtZV07XG5cbiAgICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIHBhcmVudCByb3V0ZSBzdGF0ZSBcIiR7cGFyZW50TmFtZX1cIiBmb3IgXCIke3N0YXRlLm5hbWV9XCJgKVxuICAgICAgfVxuXG4gICAgICBpZihzdGF0ZS5sZXZlbCAhPT0gbnVsbCAmJiBwYXJlbnQuYWJzdHJhY3QpIHtcbiAgICAgICAgc3RhdGUubGV2ZWwtLTtcbiAgICAgIH1cblxuICAgICAgc3RhdGUuZnVsbFBhdHRlcm4gPSB0aGlzLnNwbGl0U2xhc2hlcyhwYXJlbnQuZnVsbFBhdHRlcm4gKyAnLycgKyBzdGF0ZS5wYXR0ZXJuKTtcbiAgICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKHN0YXRlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzdGF0ZS5mdWxsUGF0dGVybiA9IHN0YXRlLnBhdHRlcm47XG4gICAgfVxuICB9XG5cbiAgaWYoIXRoaXMuc3RhdGVzLmxlbmd0aCAmJiBBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgY29uc29sZS53YXJuKGBZb3UgZGlkbid0IGFkZCBhbnkgcm91dGVzIHRvIHRoZSByb3V0ZXJgKTtcbiAgfVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMuX19vblN0YXRlQ2hhbmdlSGFuZGxlcik7XG4gIHRoaXMuX19pbml0ID0gdHJ1ZTtcbn07XG5cbi8qKlxuICogR2V0IHN0YXRlIGJ5IG5hbWVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHJldHVybnMge29iamVjdHxudWxsfVxuICovXG5yb3V0ZXIuZ2V0U3RhdGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLm5hbWUgPT0gbmFtZSkge1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBTZXQgc3RhdGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IHBhdHRlcm5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKi9cbnJvdXRlci5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChuYW1lLCBwYXR0ZXJuLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IHN0YXRlID0gey4uLm9wdGlvbnMsIG5hbWUsIHBhdHRlcm59O1xuXG4gIHJvdXRlci5zdGF0ZXMucHVzaChzdGF0ZSk7XG5cbiAgcmV0dXJuIHN0YXRlO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgc3RhdGUgYnkgbmFtZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnJvdXRlci5yZW1vdmVTdGF0ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZXNbaV07XG5cbiAgICBpZiAoc3RhdGUubmFtZSA9PSBuYW1lKSB7XG4gICAgICB0aGlzLnN0YXRlcy5zcGxpY2UoaSwgMSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogU2V0IHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqL1xucm91dGVyLnNldFVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgdGhpcy5oYXNoTW9kZT8gdGhpcy5zZXRIYXNoVXJsKHVybCk6IHRoaXMuc2V0SGlzdG9yeVVybCh1cmwpO1xufTtcblxuLyoqXG4gKiBTZXQgdXJsIHVzaW5nIGhpc3RvcnlcbiAqXG4gKiBAcGFyYW0gdXJsXG4gKi9cbnJvdXRlci5zZXRIaXN0b3J5VXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgJycsIHVybCk7XG59O1xuXG4vKipcbiAqIFNldCB1cmwgdXNpbmcgaGFzaFxuICpcbiAqIEBwYXJhbSB1cmxcbiAqL1xucm91dGVyLnNldEhhc2hVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyMnICsgKHVybCB8fCAnLycpO1xufTtcblxuLyoqXG4gKiBHZXQgdXJsXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLmdldFVybCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuaGFzaE1vZGUgPyB0aGlzLmdldEhhc2hVcmwoKSA6IHRoaXMuZ2V0SGlzdG9yeVVybCgpO1xufTtcblxuLyoqXG4gKiBHZXQgdXJsIHVzaW5nIGhpc3RvcnlcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuZ2V0SGlzdG9yeVVybCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyB3aW5kb3cubG9jYXRpb24uaGFzaDtcbn07XG5cbi8qKlxuICogR2V0IHVybCB1c2luZyBoYXNoXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLmdldEhhc2hVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKC9eIy8sICcnKTtcbn07XG5cbi8qKlxuICogR2V0IHF1ZXJ5IHBhcmFtc1xuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5oYXNoTW9kZSA/IHRoaXMuZ2V0SGFzaFVybFF1ZXJ5KCkgOiB0aGlzLmdldEhpc3RvcnlVcmxRdWVyeSgpO1xufTtcblxuLyoqXG4gKiBHZXQgcXVlcnkgcGFyYW1zIHVzaW5nIGhpc3RvcnlcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0SGlzdG9yeVVybFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByZXF1ZXN0LnBhcmFtc0Zyb21RdWVyeSh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykpO1xufTtcblxuLyoqXG4gKiBHZXQgcXVlcnkgcGFyYW1zIHVzaW5nIGhhc2hcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0SGFzaFVybFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByZXF1ZXN0LnBhcmFtc0Zyb21RdWVyeSgod2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJz8nKVsxXSB8fCAnJykpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgdXJsIGJ5IGRhdGFcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc11cbiAqIEBwYXJhbSB7b2JqZWN0fSBbcXVlcnldXG4gKiBAcGFyYW0ge3N0cmluZ30gW2hhc2hdXG4gKi9cbnJvdXRlci5jcmVhdGVTdGF0ZVVybCA9IGZ1bmN0aW9uIChzdGF0ZSwgcGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSAnJykge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcblxuICBsZXQgdXJsID0gc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZSh0aGlzLl9fcGFyYW1SZWdleCwgKG0sIGYsIHYpID0+IHtcbiAgICByZXR1cm4gcGFyYW1zW3ZdIHx8ICcnO1xuICB9KTtcblxuICB1cmwgPSB0aGlzLnNwbGl0U2xhc2hlcyh1cmwpO1xuXG4gIGlmKE9iamVjdC5rZXlzKHF1ZXJ5KS5sZW5ndGgpIHtcbiAgICB1cmwgKz0gJz8nICsgcmVxdWVzdC5wYXJhbXNUb1F1ZXJ5KHF1ZXJ5KTtcbiAgfVxuXG4gIGhhc2ggPSAoaGFzaCB8fCAnJykucmVwbGFjZSgnIycsICcnKTtcblxuICBpZighdGhpcy5oYXNoTW9kZSAmJiBoYXNoKSB7XG4gICAgdXJsICs9ICcjJyArIGhhc2g7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYWxsIHVubmVjZXNzYXJ5IHNsYXNoZXMgZnJvbSBhbiB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuc3BsaXRTbGFzaGVzID0gZnVuY3Rpb24gKHVybCkge1xuICByZXR1cm4gdXJsLnJlcGxhY2UoL1tcXC9dKy9nLCAnLycpO1xufTtcblxuLyoqXG4gKiBDbGVhciBhbGwgcm91dGVyIGRlcGVuZGVuY2llc1xuICovXG5yb3V0ZXIuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMuX19vblN0YXRlQ2hhbmdlSGFuZGxlcik7XG59O1xuXG4vKipcbiAqIEdldCBzdGF0ZSB1cmwgY29udGVudFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRQYXR0ZXJuQ29udGVudCA9IGZ1bmN0aW9uIChzdGF0ZSwgdXJsKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuXG4gIGxldCBrZXlzID0gW107XG4gIGxldCBpID0gMDtcbiAgbGV0IHBhcmFtcyA9IHt9O1xuXG4gIHVybCA9IHVybC5zcGxpdCgnPycpWzBdO1xuICB1cmwgPSB1cmwuc3BsaXQoJyMnKVswXTtcblxuICBsZXQgdXJsUGF0dGVybiA9IHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2UodGhpcy5fX3BhcmFtUmVnZXgsIChtLCBmLCB2KSA9PiB7XG4gICAga2V5cy5wdXNoKHYpO1xuXG4gICAgcmV0dXJuICcoW15cXFxcL10qKSc7XG4gIH0pO1xuXG4gIGxldCByZWdleCA9IG5ldyBSZWdFeHAodXJsUGF0dGVybik7XG4gIGxldCBpc0luY2x1ZGVkID0gdXJsLm1hdGNoKHJlZ2V4KTtcblxuICBpZiAoIWlzSW5jbHVkZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHVybC5yZXBsYWNlKHJlZ2V4LCAobSwgdikgPT4ge1xuICAgIHYgJiYgKHBhcmFtc1trZXlzW2ldXSA9IHYpO1xuICAgIGkrKztcbiAgfSk7XG5cbiAgcmV0dXJuIHsgcGFyYW1zIH07XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSBzdGF0ZSBpcyBhY3RpdmUgbm93XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtib29sZWFufSBpbmNsdWRlc1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnJvdXRlci5pc0FjdGl2ZVN0YXRlID0gZnVuY3Rpb24oc3RhdGUsIGluY2x1ZGVzID0gZmFsc2UpIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG5cbiAgbGV0IHVybCA9IHRoaXMuc3BsaXRTbGFzaGVzKHRoaXMuZ2V0VXJsKCkuc3BsaXQoJz8nKVswXSArICcvJyk7XG4gIGxldCB1cmxQYXR0ZXJuID0gc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZSh0aGlzLl9fcGFyYW1SZWdleCwgJyhbXlxcXFwvXSopJyk7XG4gIGxldCBzdHIgPSBpbmNsdWRlcz8gdXJsUGF0dGVybjogdGhpcy5zcGxpdFNsYXNoZXMoJ14nICsgdXJsUGF0dGVybiArICdcXC8kJyk7XG4gIGxldCByZWdleCA9IG5ldyBSZWdFeHAoc3RyKTtcblxuICByZXR1cm4gcmVnZXgudGVzdCh1cmwpO1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgY3VycmVudCB1cmwgaW5jbHVkZXMgYSBzdGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaW5BY3RpdmVTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gIHJldHVybiByb3V0ZXIuaXNBY3RpdmVTdGF0ZShzdGF0ZSwgdHJ1ZSk7XG59O1xuXG4vKipcbiAqIEdldCByb3V0ZSBjb21wb25lbnQgYnkgbGV2ZWxcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbGV2ZWxcbiAqL1xucm91dGVyLmdldFJvdXRlID0gZnVuY3Rpb24gKGxldmVsKSB7XG4gIGxldCBpID0gMDtcblxuICBsZXQgZmluZCA9IChlbCkgPT4ge1xuICAgIGxldCByb3V0ZSA9IGVsLmNoaWxkKHRoaXMuX19yb3V0ZVNlbGVjdG9yKTtcblxuICAgIGlmICghcm91dGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChpID09IGxldmVsKSB7XG4gICAgICByZXR1cm4gcm91dGU7XG4gICAgfVxuXG4gICAgaSsrO1xuXG4gICAgcmV0dXJuIGZpbmQocm91dGUpO1xuICB9O1xuXG4gIHJldHVybiBmaW5kKEFraWxpLnJvb3QpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGZpcnN0IG1hdGNoXG4gKlxuICogQHBhcmFtIHthcnJheX0gYXJyXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gKi9cbnJvdXRlci5nZXRBcnJheVBhdHRlcm5Db250ZW50ID0gZnVuY3Rpb24gKGFyciwgdXJsKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IGFycltpXTtcbiAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0UGF0dGVybkNvbnRlbnQoc3RhdGUsIHVybCk7XG5cbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJldHVybiB7c3RhdGU6IHN0YXRlLCAuLi5jb250ZW50fTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBHZXQgc3RhdGVzIGJ5IGxldmVsXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxldmVsXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbnJvdXRlci5nZXRTdGF0ZXNCeUxldmVsID0gZnVuY3Rpb24gKGxldmVsKSB7XG4gIGxldCBzdGF0ZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLmxldmVsIDwgbGV2ZWwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChzdGF0ZS5sZXZlbCA+IGxldmVsKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzdGF0ZXMucHVzaChzdGF0ZSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVzO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RhdGVcbiAqL1xucm91dGVyLmNoYW5nZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuICBpZih0aGlzLl9fZGlzYWJsZUNoYW5nZSkge1xuICAgIGRlbGV0ZSB0aGlzLl9fZGlzYWJsZUNoYW5nZTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCB1cmwgPSB0aGlzLmdldFVybCgpO1xuICBsZXQgaGFzaCA9IHRoaXMuaGFzaE1vZGU/ICcnOiB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpO1xuICBsZXQgcXVlcnkgPSB0aGlzLmdldFVybFF1ZXJ5KCk7XG4gIGxldCBwcmV2VHJhbnNpdGlvbiA9IHJvdXRlci50cmFuc2l0aW9uIHx8IG51bGw7XG4gIGxldCB0cmFuc2l0aW9uID0gcm91dGVyLnRyYW5zaXRpb24gPSBuZXcgVHJhbnNpdGlvbih1cmwsIHF1ZXJ5LCBoYXNoLCBwcmV2VHJhbnNpdGlvbik7XG4gIGxldCBsZXZlbCA9IDA7XG5cbiAgbGV0IG5leHQgPSAoc3RhdGVzLCBvbkVuZCkgPT4ge1xuICAgIGlmICghc3RhdGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG9uRW5kICYmIG9uRW5kKCk7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldEFycmF5UGF0dGVybkNvbnRlbnQoc3RhdGVzLCB1cmwpO1xuXG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICByZXR1cm4gb25FbmQgJiYgb25FbmQoKTtcbiAgICB9XG5cbiAgICBsZXQgc3RhdGUgPSBjb250ZW50LnN0YXRlO1xuICAgIGxldCBwYXJhbXMgPSBjb250ZW50LnBhcmFtcztcbiAgICBsZXQgcm91dGUgPSBzdGF0ZS5hYnN0cmFjdD8gbnVsbDogdGhpcy5nZXRSb3V0ZShzdGF0ZS5sZXZlbCk7XG5cbiAgICBpZiAoIXJvdXRlICYmICFzdGF0ZS5hYnN0cmFjdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yIChgTm90IGZvdW5kIHJvdXRlIGNvbXBvbmVudCBmb3Igc3RhdGUgXCIke3N0YXRlLm5hbWV9XCJgKTtcbiAgICB9XG5cbiAgICB0cmFuc2l0aW9uLnNldFBhdGgoeyBzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgY29tcG9uZW50OiByb3V0ZSwgbG9hZGVkOiB0cnVlIH0pO1xuICAgIGxldmVsKys7XG5cbiAgICBsZXQgaGFzU3RhdGUgPSBwcmV2VHJhbnNpdGlvbiAmJiBwcmV2VHJhbnNpdGlvbi5oYXNTdGF0ZShzdGF0ZSk7XG4gICAgbGV0IGlzRGlmZmVyZW50ID0gdHJ1ZTtcblxuICAgIGlmKGhhc1N0YXRlKSB7XG4gICAgICBsZXQgcm91dGUgPSBwcmV2VHJhbnNpdGlvbi5nZXRSb3V0ZShzdGF0ZSk7XG4gICAgICBsZXQgcHJldiA9IHsgcGFyYW1zOiByb3V0ZS5wYXJhbXMsIHF1ZXJ5OiByb3V0ZS5xdWVyeSwgaGFzaDogcm91dGUuaGFzaCB9O1xuICAgICAgbGV0IGN1cnJlbnQgPSB7IHBhcmFtcywgcXVlcnksIGhhc2ggfTtcblxuICAgICAgaXNEaWZmZXJlbnQgPSAhdXRpbHMuY29tcGFyZShwcmV2LCBjdXJyZW50KTtcbiAgICB9XG5cbiAgICBsZXQgaXNIaXN0b3J5ID0gdGhpcy5fX29wdGlvbnMucmVsb2FkID09PSB1bmRlZmluZWQgJiYgIWlzRGlmZmVyZW50O1xuICAgIGxldCBpc1JlbG9hZCA9IHRoaXMuX19vcHRpb25zLnJlbG9hZCA9PT0gZmFsc2U7XG5cbiAgICBpZiAoaGFzU3RhdGUgJiYgKGlzSGlzdG9yeSB8fCBpc1JlbG9hZCkpIHtcbiAgICAgIHRyYW5zaXRpb24ucGF0aC5sb2FkZWQgPSBmYWxzZTtcblxuICAgICAgcmV0dXJuIG5leHQoc3RhdGUuY2hpbGRyZW4sIG9uRW5kKTtcbiAgICB9XG5cbiAgICBQcm9taXNlLnJlc29sdmUoc3RhdGUuaGFuZGxlcih0cmFuc2l0aW9uKSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKHRyYW5zaXRpb24uX19jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIG9uRW5kICYmIG9uRW5kKCk7XG4gICAgICB9XG5cbiAgICAgIHRyYW5zaXRpb24ucGF0aC5kYXRhID0gZGF0YTtcblxuICAgICAgaWYoc3RhdGUuYWJzdHJhY3QpIHtcbiAgICAgICAgcmV0dXJuIG5leHQoc3RhdGUuY2hpbGRyZW4sIG9uRW5kKTtcbiAgICAgIH1cblxuICAgICAgcm91dGUuc2V0VHJhbnNpdGlvbih0cmFuc2l0aW9uKS50aGVuKCgpID0+IHtcbiAgICAgICAgdHJhbnNpdGlvbi5wYXRoLmxvYWRlZCA9IHRydWU7XG5cbiAgICAgICAgbmV4dChzdGF0ZS5jaGlsZHJlbiwgb25FbmQpO1xuICAgICAgfSkuY2F0Y2goKGVycikgPT4gb25FbmQgJiYgb25FbmQoZXJyKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBuZXh0KHRoaXMuZ2V0U3RhdGVzQnlMZXZlbCgwKSwgKGVycikgPT4ge1xuICAgICAgaWYoZXJyKSB7XG4gICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgIH1cblxuICAgICAgaWYoIXRyYW5zaXRpb24ucm91dGVzLmxlbmd0aCkge1xuICAgICAgICBpZih0aGlzLl9fcmVkaXJlY3RzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYFdyb25nIHJvdXRlciBkZWZhdWx0IHVybCBcIiR7dGhpcy5kZWZhdWx0VXJsfVwiYCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5kZWZhdWx0VXJsKSB7XG4gICAgICAgICAgaWYodGhpcy5kZWZhdWx0VXJsID09IHRoaXMuZ2V0VXJsKCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKGBOb3QgZm91bmQgYW55IHJvdXRlc2ApKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmhhc2hNb2RlICYmICh0aGlzLl9fZGlzYWJsZUNoYW5nZSA9IHRydWUpO1xuICAgICAgICAgIHRoaXMuc2V0VXJsKHRoaXMuZGVmYXVsdFVybCk7XG4gICAgICAgICAgdGhpcy5fX3JlZGlyZWN0cysrO1xuXG4gICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlU3RhdGUoKS50aGVuKHJlc29sdmUpLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBOb3QgZm91bmQgYSBkZWZhdWx0IHJvdXRlLiBZb3UgY2FuIHBhc3MgaXQgaW4gXCJyb3V0ZXIuaW5pdChkZWZhdWx0VXJsKVwiIGZ1bmN0aW9uYCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fX29wdGlvbnMgPSB7fTtcbiAgICAgIHRoaXMuX19yZWRpcmVjdHMgPSAwO1xuXG4gICAgICBpZihwcmV2VHJhbnNpdGlvbikge1xuICAgICAgICBmb3IobGV0IGkgPSBsZXZlbCwgbCA9IHByZXZUcmFuc2l0aW9uLnJvdXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBsZXQgcm91dGUgPSBwcmV2VHJhbnNpdGlvbi5yb3V0ZXNbaV07XG4gICAgICAgICAgcm91dGUuY29tcG9uZW50ICYmIHJvdXRlLmNvbXBvbmVudC5lbXB0eSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc3RhdGUtY2hhbmdlJywge1xuICAgICAgICBkZXRhaWw6IHRyYW5zaXRpb25cbiAgICAgIH0pKTtcblxuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbnJvdXRlci5UcmFuc2l0aW9uID0gVHJhbnNpdGlvbjtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL3JvdXRlci5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi4vc2VydmljZXMvcm91dGVyLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbc3RhdGVdOm5vdChbdXJsXSksW3VybF06bm90KFtzdGF0ZV0pJztcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gdHJ1ZTtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydyZWxvYWQnXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnYScsIEEpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IG51bGw7XG4gICAgdGhpcy5wYXJhbXMgPSB7fTtcbiAgICB0aGlzLnF1ZXJ5ID0ge307XG4gICAgdGhpcy5oYXNoID0gJyc7XG4gICAgdGhpcy5vcHRpb25zID0ge307XG4gICAgdGhpcy5pc1VybCA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCd1cmwnKTtcbiAgfVxuXG4gIGNoYW5nZWRVcmwodXJsKSB7XG4gICAgdGhpcy5zZXRVcmwodXJsKTtcbiAgICB0aGlzLnJlc2V0SHJlZih1cmwpO1xuICB9XG5cbiAgY2hhbmdlZFN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgdGhpcy5yZXNldEhyZWYoKTtcbiAgfVxuXG4gIGNoYW5nZWRQYXJhbXMocGFyYW1zKSB7XG4gICAgdGhpcy5zZXRQYXJhbXMocGFyYW1zKTtcbiAgICB0aGlzLnJlc2V0SHJlZigpO1xuICB9XG5cbiAgY2hhbmdlZFF1ZXJ5KHF1ZXJ5KSB7XG4gICAgdGhpcy5zZXRRdWVyeShxdWVyeSk7XG4gICAgdGhpcy5yZXNldEhyZWYoKTtcbiAgfVxuXG4gIGNoYW5nZWRIYXNoKHF1ZXJ5KSB7XG4gICAgdGhpcy5zZXRIYXNoKHF1ZXJ5KTtcbiAgICB0aGlzLnJlc2V0SHJlZigpO1xuICB9XG5cbiAgY2hhbmdlZE9wdGlvbnMob3B0aW9ucykge1xuICAgIHRoaXMuc2V0UXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICBjaGFuZ2VkUmVsb2FkKHZhbCkge1xuICAgIHRoaXMuc2V0UmVsb2FkKHZhbCk7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZih0aGlzLmlzVXJsKSB7XG4gICAgICAgIHJvdXRlci5sb2NhdGlvbih0aGlzLmF0dHJzLnVybCwgdGhpcy5vcHRpb25zKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJvdXRlci5zdGF0ZSh0aGlzLnN0YXRlLm5hbWUsIHRoaXMucGFyYW1zLCB0aGlzLnF1ZXJ5LCB0aGlzLmhhc2gsICB0aGlzLm9wdGlvbnMpO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgnc3RhdGUnKSAmJiB0aGlzLnNldFN0YXRlKHRoaXMuYXR0cnMuc3RhdGUpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ3BhcmFtcycpICYmIHRoaXMuc2V0UGFyYW1zKHRoaXMuYXR0cnMucGFyYW1zKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdxdWVyeScpICYmIHRoaXMuc2V0UXVlcnkodGhpcy5hdHRycy5xdWVyeSk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgnaGFzaCcpICYmIHRoaXMuc2V0SGFzaCh0aGlzLmF0dHJzLmhhc2gpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ29wdGlvbnMnKSAmJiB0aGlzLnNldE9wdGlvbnModGhpcy5hdHRycy5vcHRpb25zKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdyZWxvYWQnKSAmJiB0aGlzLnNldFJlbG9hZCh0aGlzLmF0dHJzLnJlbG9hZCk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgndXJsJykgJiYgdGhpcy5zZXRVcmwodGhpcy5hdHRycy51cmwpO1xuICAgIHRoaXMucmVzZXRIcmVmKHRoaXMudXJsKTtcbiAgfVxuXG4gIHNldFVybCh1cmwpIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgfVxuXG4gIHNldFN0YXRlKG5hbWUpIHtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5nZXRTdGF0ZShuYW1lKTtcbiAgICB0aGlzLnNjb3BlLmlzQWN0aXZlU3RhdGUgPSByb3V0ZXIuaXNBY3RpdmVTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgICB0aGlzLnNjb3BlLmluQWN0aXZlU3RhdGUgPSByb3V0ZXIuaW5BY3RpdmVTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHNldFBhcmFtcyhwYXJhbXMpIHtcbiAgICBpZih0eXBlb2YgcGFyYW1zICE9ICdvYmplY3QnIHx8ICFwYXJhbXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIHBhcmFtcyBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICB9XG5cbiAgc2V0UXVlcnkocXVlcnkpIHtcbiAgICBpZih0eXBlb2YgcXVlcnkgIT0gJ29iamVjdCcgfHwgIXF1ZXJ5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBxdWVyeSBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgfVxuXG4gIHNldEhhc2goaGFzaCkge1xuICAgIGlmKHR5cGVvZiBoYXNoICE9ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBoYXNoIG11c3QgYmUgYSBzdHJpbmdgKTtcbiAgICB9XG5cbiAgICB0aGlzLmhhc2ggPSBoYXNoO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYodHlwZW9mIG9wdGlvbnMgIT0gJ29iamVjdCcgfHwgIW9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIG9wdGlvbnMgbXVzdCBiZSBhbiBvYmplY3RgKTtcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgc2V0UmVsb2FkKHZhbCkge1xuICAgIHRoaXMub3B0aW9ucy5yZWxvYWQgPSB2YWw7XG4gIH1cblxuICBnZXRTdGF0ZShuYW1lKSB7XG4gICAgbGV0IHN0YXRlID0gcm91dGVyLmdldFN0YXRlKG5hbWUpO1xuXG4gICAgaWYoIXN0YXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCByb3V0ZXIgc3RhdGUgd2l0aCBuYW1lIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgcmVzZXRIcmVmKHVybCkge1xuICAgIGlmKHVybCkge1xuICAgICAgdGhpcy5hdHRycy5ocmVmID0gdXJsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuYXR0cnMuaHJlZiA9IHJvdXRlci5jcmVhdGVTdGF0ZVVybCh0aGlzLnN0YXRlLCB0aGlzLnBhcmFtcywgdGhpcy5xdWVyeSwgdGhpcy5oYXNoKTtcbiAgICB9XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYS5qcyIsImltcG9ydCBUZXh0IGZyb20gJy4vdGV4dC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50IGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdjb250ZW50JywgQ29udGVudCk7XG4gICAgQWtpbGkuYWxpYXMoJ1tjb250ZW50ZWRpdGFibGVdJywgJ2NvbnRlbnQnKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIGlmKHRoaXMuZWwuaGFzQXR0cmlidXRlKCdlZGl0YWJsZScpKSB7XG4gICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ2VkaXRhYmxlJykpO1xuICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoJ2VkaXRhYmxlJyk7XG4gICAgfVxuXG4gICAgaWYoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKS5kaXNwbGF5ID09ICdpbmxpbmUnKSB7XG4gICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIHRoaXMudmFsdWVLZXkgPSAnaW5uZXJIVE1MJztcbiAgfVxuXG4gIHNldEVsZW1lbnRGb2N1cygpIHtcbiAgICBsZXQgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIGxldCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG5cbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGhpcy5lbCk7XG4gICAgcmFuZ2UuY29sbGFwc2UoZmFsc2UpO1xuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9jb250ZW50LmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1iZWQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbdXJsXSc7XG4gIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnZW1iZWQnLCBFbWJlZCk7XG4gIH1cblxuICBjaGFuZ2VkVXJsKHVybCkge1xuICAgIHRoaXMuc2V0U3JjKHVybCk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCd1cmwnKSAmJiB0aGlzLnNldFNyYyh0aGlzLmF0dHJzLnVybCk7XG4gIH1cblxuICBzZXRTcmModXJsKSB7XG4gICAgdGhpcy5hdHRycy5zcmMgPSB1cmw7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZW1iZWQuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIElmIGNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyB0cmFuc3BhcmVudCA9IHRydWU7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tpc10nO1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ3JlY3JlYXRlJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2lmJywgSWYpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnZWxzZS1pZicsIEVsc2VJZik7XG4gICAgQWtpbGkuY29tcG9uZW50KCdlbHNlJywgRWxzZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuc3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMucmVjcmVhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ29tcGlsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRpc3BsYXkgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpLmRpc3BsYXk7XG4gIH1cblxuICBjaGFuZ2VkSXModmFsdWUpIHtcbiAgICB0aGlzLnN0YXRlID0gISF2YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKCk7XG4gIH1cblxuICBjaGFuZ2VkUmVjcmVhdGUodmFsdWUpIHtcbiAgICB0aGlzLnNldFJlY3JlYXRpb24odmFsdWUpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgncmVjcmVhdGUnKSAmJiB0aGlzLnNldFJlY3JlYXRpb24odGhpcy5hdHRycy5yZWNyZWF0ZSk7XG4gICAgdGhpcy5zdGF0ZSA9ICEhdGhpcy5hdHRycy5pcztcbiAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSgpXG4gIH1cblxuICBzZXRBY3Rpdml0eShhY3RpdmUpIHtcbiAgICB0aGlzLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgfVxuXG4gIHNldFJlY3JlYXRpb24ocmVjcmVhdGUpIHtcbiAgICB0aGlzLnJlY3JlYXRlID0gcmVjcmVhdGU7XG4gIH1cblxuICBzZXRTdGF0ZSgpIHtcbiAgICBsZXQgcmVzID0gdGhpcy5jb21waWxhdGlvbigpO1xuICAgIGxldCBuZXh0ID0gdGhpcy5lbC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgbGV0IHJlc3VsdDtcblxuICAgIGlmKCFuZXh0IHx8ICFuZXh0Lm1hdGNoZXMoJ2Vsc2UtaWYsZWxzZScpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmV4dC5fX2FraWxpLnNldEFjdGl2aXR5KHRoaXMuYWN0aXZlIHx8IHRoaXMuc3RhdGUpO1xuICAgIG5leHQuX19ha2lsaS5zZXRSZWNyZWF0aW9uKHRoaXMucmVjcmVhdGUpO1xuICAgIHJlc3VsdCA9IG5leHQuX19ha2lsaS5zZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMpLnRoZW4oKCkgPT4ge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBpbGF0aW9uKCkge1xuICAgIGxldCByZXM7XG5cbiAgICBpZih0aGlzLnN0YXRlICYmICF0aGlzLmFjdGl2ZSkge1xuICAgICAgaWYodGhpcy5yZWNyZWF0ZSB8fCAhdGhpcy5pc0NvbXBpbGVkKSB7XG4gICAgICAgIHJlcyA9IHRoaXMuY29tcGlsZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmRpc3BsYXk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYodGhpcy5yZWNyZWF0ZSkge1xuICAgICAgICB0aGlzLl9fZW1wdHkoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoIXRoaXMuaXNDb21waWxlZCkge1xuICAgICAgICByZXMgPSB0aGlzLmNvbXBpbGUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGNvbXBpbGUoKSB7XG4gICAgbGV0IHJlcztcblxuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5odG1sO1xuICAgIHJlcyA9IEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgdGhpcy5pc0NvbXBpbGVkID0gdHJ1ZTtcblxuICAgIHJldHVybiByZXM7XG4gIH1cbn07XG5cbi8qKlxuICogRWxzZUlmIGNvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgRWxzZUlmIGV4dGVuZHMgSWYge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBFbHNlIGNvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgRWxzZSBleHRlbmRzIEVsc2VJZiB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2lzJywgJ3RydWUnKTtcbiAgfVxufVxuXG5JZi5FbHNlSWYgPSBFbHNlSWY7XG5JZi5FbHNlID0gRWxzZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pZi5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElmcmFtZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1t1cmxdJztcbiAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpZnJhbWUnLCBJZnJhbWUpO1xuICB9XG5cbiAgY2hhbmdlZFVybCh1cmwpIHtcbiAgICB0aGlzLnNldFNyYyh1cmwpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgndXJsJykgJiYgdGhpcy5zZXRTcmModGhpcy5hdHRycy51cmwpO1xuICB9XG5cbiAgc2V0U3JjKHVybCkge1xuICAgIHRoaXMuYXR0cnMuc3JjID0gdXJsO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2lmcmFtZS5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW3VybF0nO1xuICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2ltZycsIEltYWdlKTtcbiAgfVxuXG4gIGNoYW5nZWRVcmwodXJsKSB7XG4gICAgdGhpcy5zZXRTcmModXJsKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ3VybCcpICYmIHRoaXMuc2V0U3JjKHRoaXMuYXR0cnMudXJsKTtcbiAgfVxuXG4gIHNldFNyYyh1cmwpIHtcbiAgICB0aGlzLmF0dHJzLnNyYyA9IHVybDtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pbWFnZS5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi9zZXJ2aWNlcy9yZXF1ZXN0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5jbHVkZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyB0cmFuc3BhcmVudCA9IHRydWU7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1t1cmxdJztcbiAgc3RhdGljIGV2ZW50cyA9IFsnbG9hZCcsICdlcnJvciddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpbmNsdWRlJywgSW5jbHVkZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gIH1cblxuICBjaGFuZ2VkVXJsKHVybCkge1xuICAgIHRoaXMuZ2V0VGVtcGxhdGUodXJsKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFRlbXBsYXRlKHRoaXMuYXR0cnMudXJsKTtcbiAgfVxuXG4gIGdldFRlbXBsYXRlKHVybCkge1xuICAgIHRoaXMuY29ubmVjdGlvbiAmJiB0aGlzLmNvbm5lY3Rpb24uYWJvcnQoKTtcblxuICAgIHJldHVybiByZXF1ZXN0LmdldCh1cmwsIHtcbiAgICAgIG9uU3RhcnQ6ICh4aHIpID0+IHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0geGhyO1xuICAgICAgfVxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgICAgIHRoaXMuZW1wdHkoKTtcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5odG1sO1xuICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgcmVzLmRhdGEpO1xuXG4gICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5hdHRycy5vbkxvYWQudHJpZ2dlcigpO1xuICAgICAgfSk7XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgdGhpcy5hdHRycy5vbkVycm9yLnRyaWdnZXIoZXJyKTtcbiAgICB9KTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pbmNsdWRlLmpzIiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnY2hlY2tlZCddO1xuICBzdGF0aWMgZXZlbnRzID0gWydjaGFuZ2UnXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaW5wdXQnLCBJbnB1dCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmlzQ2hlY2tib3ggPSB0aGlzLmVsLnR5cGUgPT0gJ2NoZWNrYm94JztcbiAgICB0aGlzLmlzUmFkaW8gPSB0aGlzLmVsLnR5cGUgPT0gJ3JhZGlvJztcbiAgfVxuXG4gIGNoYW5nZWRDaGVja2VkKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRDaGVja2VkKHZhbHVlKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgKHRoaXMuaXNSYWRpbyB8fCB0aGlzLmlzQ2hlY2tib3gpICYmIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldENoZWNrZWQodGhpcy5lbC5jaGVja2VkLCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICByZXNvbHZlZCgpIHtcbiAgICAodGhpcy5pc0NoZWNrYm94IHx8IHRoaXMuaXNSYWRpbykgJiYgdGhpcy5zZXRDaGVja2VkKHRoaXMuYXR0cnMuY2hlY2tlZCk7XG4gIH1cblxuICBzZXRDaGVja2VkKHZhbHVlLCB0cmlnZ2VyID0gdHJ1ZSkge1xuICAgIHZhbHVlID0gISF2YWx1ZTtcblxuICAgIGlmKHRoaXMucHJldkNoZWNrZWQgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5lbC5jaGVja2VkID0gdGhpcy5wcmV2Q2hlY2tlZCA9IHZhbHVlO1xuICAgIHRyaWdnZXIgJiYgdGhpcy5hdHRycy5vbkNoYW5nZS5kaXNwYXRjaChFdmVudCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgIHRoaXMuaXNSYWRpbyAmJiB0aGlzLmNoYW5nZVJhZGlvKCk7XG4gIH1cblxuICBzZXRWYWx1ZSgpIHtcbiAgICBzdXBlci5zZXRWYWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuaXNSYWRpbyAmJiB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cblxuICBjaGFuZ2VSYWRpbygpIHtcbiAgICBsZXQgbmFtZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgbGV0IHNlbGVjdG9yID0gYGlucHV0W3R5cGU9cmFkaW9dW25hbWU9JyR7bmFtZX0nXTpub3QoW3Njb3BlPScke3RoaXMuc2NvcGUuX19uYW1lfSddKWA7XG4gICAgbGV0IGNoaWxkcmVuID0gQWtpbGkucm9vdC5jaGlsZHJlbihzZWxlY3Rvcik7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcmFkaW8gPSBjaGlsZHJlbltpXTtcblxuICAgICAgcmFkaW8uc2V0Q2hlY2tlZChyYWRpby5lbC5jaGVja2VkKTtcbiAgICB9XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaW5wdXQuanMiLCJpbXBvcnQgRm9yLCB7IExvb3AgfSBmcm9tICcuL2Zvci5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIFRoZSByYWRpbyBncm91cCBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaW8gZXh0ZW5kcyBGb3Ige1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbbmFtZV0nO1xuICBzdGF0aWMgZXZlbnRzID0gWydyYWRpbyddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdyYWRpbycsIFJhZGlvKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JhZGlvLWJ1dHRvbicsIFJhZGlvQnV0dG9uKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXRlcmFibGUgPSB0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnaW4nKTtcbiAgfVxuXG4gIGNoYW5nZWRJbih2YWx1ZSkge1xuICAgIHN1cGVyLmNoYW5nZWRJbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuc2V0TmFtZXModGhpcy5hdHRycy5uYW1lKTtcbiAgfVxuXG4gIGNoYW5nZWROYW1lKG5hbWUpIHtcbiAgICB0aGlzLnNldE5hbWVzKG5hbWUpO1xuICB9XG5cbiAgY2hhbmdlZFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuaXRlcmFibGUgJiYgc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5nZXRSYWRpb1ZhbHVlKCk7XG5cbiAgICAgICAgaWYodmFsdWUgPT09IHRoaXMucHJldlZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5hdHRycy5vblJhZGlvLnRyaWdnZXIodmFsdWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXNvbHZlZCgpIHtcbiAgICB0aGlzLnNldE5hbWVzKHRoaXMuYXR0cnMubmFtZSk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSAmJiB0aGlzLnNldFZhbHVlKHRoaXMuYXR0cnMudmFsdWUpO1xuICB9XG5cbiAgc2V0TmFtZXMobmFtZSkge1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oJ2lucHV0W3R5cGU9cmFkaW9dJyk7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjaGlsZHJlbltpXS5lbC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBuYW1lKTtcbiAgICB9XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmKHZhbHVlID09PSB0aGlzLnByZXZWYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBwcmV2ID0gdGhpcy5wcmV2VmFsdWU7XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbignaW5wdXRbdHlwZT1yYWRpb10nKTtcbiAgICBsZXQgaXNUcnVlID0gZmFsc2U7XG5cbiAgICB0aGlzLnByZXZWYWx1ZSA9IHZhbHVlO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJhZGlvID0gY2hpbGRyZW5baV07XG4gICAgICBsZXQgaXNTZWxlY3RlZCA9IHJhZGlvLmVsLnZhbHVlID09PSB2YWx1ZTtcblxuICAgICAgaXNTZWxlY3RlZCAmJiAoaXNUcnVlID0gdHJ1ZSk7XG4gICAgICByYWRpby5zZXRDaGVja2VkKGlzU2VsZWN0ZWQpO1xuICAgIH1cblxuICAgIGlmKCFpc1RydWUpIHtcbiAgICAgIGlmKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIGlmKHByZXYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMucHJldlZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hdHRycy5vblJhZGlvLnRyaWdnZXIodmFsdWUsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgfVxuXG4gIGdldFJhZGlvVmFsdWUoKSB7XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbignaW5wdXRbdHlwZT1yYWRpb10nKTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICBpZihyYWRpby5lbC5jaGVja2VkKSB7XG4gICAgICAgIHJldHVybiByYWRpby5lbC52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBUaGUgcmFkaW8gaXRlbSBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIFJhZGlvQnV0dG9uIGV4dGVuZHMgTG9vcCB7XG4gIHN0YXRpYyB0ZW1wbGF0ZSA9IGA8bGFiZWw+PGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiXFwke3RoaXMudmFsdWV9XCIvPlxcJHt0aGlzLl9fY29udGVudH08L2xhYmVsPmA7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICB9XG5cbiAgY2hhbmdlZFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRSYWRpb1ZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuc2V0UmFkaW9WYWx1ZSh0aGlzLmF0dHJzLnZhbHVlKTtcbiAgfVxuXG4gIHNldFJhZGlvVmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnNjb3BlLnZhbHVlID0gdmFsdWU7XG4gIH1cbn1cblxuUmFkaW8uUmFkaW9CdXR0b24gPSBSYWRpb0J1dHRvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9yYWRpby5qcyIsImltcG9ydCBGb3IsIHsgTG9vcCB9IGZyb20gJy4vZm9yLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyBGb3Ige1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ211bHRpcGxlJ107XG4gIHN0YXRpYyBldmVudHMgPSBbJ2NoYW5nZSddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdzZWxlY3QnLCBTZWxlY3QpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnb3B0aW9uJywgT3B0aW9uKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXRlcmF0b3JUYWdOYW1lID0gJ29wdGlvbic7XG4gICAgdGhpcy5pc011bHRpcGxlID0gZmFsc2U7XG4gIH1cblxuICBjaGFuZ2VkTXVsdGlwbGUodmFsdWUpIHtcbiAgICB0aGlzLnNldE11bHRpcGxlKHZhbHVlKTtcbiAgfVxuXG4gIGNoYW5nZWRDb250ZW50KHZhbHVlKSB7XG4gICAgdGhpcy5zZXRDb250ZW50KHZhbHVlKTtcbiAgfVxuXG4gIGNoYW5nZWRJbih2YWx1ZSkge1xuICAgIHN1cGVyLmNoYW5nZWRJbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuZHJhd1NlbGVjdCgpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuZWwuY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuICAgIH0pO1xuICB9XG4gIFxuICBjb21waWxlZCgpIHtcbiAgICBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ211bHRpcGxlJykgJiYgdGhpcy5zZXRNdWx0aXBsZSh0aGlzLmF0dHJzLm11bHRpcGxlKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdjb250ZW50JykgJiYgdGhpcy5zZXRDb250ZW50KHRoaXMuYXR0cnMuY29udGVudCk7XG4gICAgdGhpcy5kcmF3U2VsZWN0KCk7XG4gIH1cblxuICBzZXRNdWx0aXBsZSh2YWx1ZSkge1xuICAgIHRoaXMuaXNNdWx0aXBsZSA9IHZhbHVlO1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5mb3JtYXRWYWx1ZSh1dGlscy5jb3B5KHRoaXMuZWwuY29udGVudCkpKTtcbiAgfVxuXG4gIHNldENvbnRlbnQodmFsdWUpIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUodmFsdWUpKTtcbiAgfVxuXG4gIGRyYXdTZWxlY3QoKSB7XG4gICAgbGV0IHNlbGVjdGVkID0gW107XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXS5fX2FraWxpO1xuICAgICAgbGV0IHNlbGVjdGlvbiA9IG9wdGlvbi5hdHRycy5zZWxlY3RlZDtcblxuICAgICAgaWYoc2VsZWN0aW9uKSB7XG4gICAgICAgIHNlbGVjdGVkLnB1c2gob3B0aW9uLmVsLnZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgb3B0aW9uLmVsLnNlbGVjdGVkID0gc2VsZWN0aW9uO1xuICAgIH1cblxuICAgIGlmKCFzZWxlY3RlZC5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVkZWZpbmUoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUoc2VsZWN0ZWQpKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVJdGVyYXRvckVsZW1lbnQoKSB7XG4gICAgbGV0IGVsID0gc3VwZXIuY3JlYXRlSXRlcmF0b3JFbGVtZW50KCk7XG5cbiAgICBpZighZWwuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGhpcy5odG1sLnRyaW0oKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsO1xuICB9XG5cbiAgaW5Db250ZW50KHZhbHVlKSB7XG4gICAgaWYoIXRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZWwuY29udGVudCA9PT0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZWwuY29udGVudC5pbmRleE9mKHZhbHVlKSAhPSAtMTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgaWYoIXRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZWwudmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnQgPSBbXTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldO1xuXG4gICAgICBpZihvcHRpb24uc2VsZWN0ZWQpIHtcbiAgICAgICAgY29udGVudC5wdXNoKG9wdGlvbi52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBmb3JtYXRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmKHRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgaWYoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpPyBbdmFsdWVdOiBbXTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZihBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLmxlbmd0aD8gdmFsdWVbMF06ICcnO1xuICAgICAgfVxuICAgICAgZWxzZSBpZih0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZWRlZmluZSgpIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZ2V0Q29udGVudCgpKTtcbiAgfVxuXG4gIGNoYW5nZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYodXRpbHMuY29tcGFyZSh0aGlzLmVsLmNvbnRlbnQsIHZhbHVlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB0aGlzLmVsLnZhbHVlID0gdmFsdWVbdmFsdWUubGVuZ3RoIC0gMV07XG5cbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdmFsdWUuaW5kZXhPZihvcHRpb24udmFsdWUpICE9IC0xO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZWwudmFsdWUgPSB2YWx1ZTtcblxuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXTtcblxuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBvcHRpb24udmFsdWUgPT0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5lbC5jb250ZW50ID0gdmFsdWU7XG4gICAgdGhpcy5hdHRycy5vbkNoYW5nZS5kaXNwYXRjaChFdmVudCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICB9XG59O1xuXG5leHBvcnQgY2xhc3MgT3B0aW9uIGV4dGVuZHMgTG9vcCB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnc2VsZWN0ZWQnXTtcblxuICBfX2dldFBhcnNlZEV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIHJldHVybiB1dGlscy5kZWNvZGVIdG1sRW50aXRpZXMoZXhwcmVzc2lvbik7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGNoYW5nZWRTZWxlY3RlZCh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U2VsZWN0ZWQodmFsdWUpO1xuICB9XG5cbiAgc2V0U2VsZWN0ZWQodmFsdWUpIHtcbiAgICB0aGlzLmVsLnNlbGVjdGVkID0gdmFsdWU7XG4gICAgdGhpcy5mb3IucmVkZWZpbmUoKTtcbiAgfVxufVxuXG5TZWxlY3QuT3B0aW9uID0gT3B0aW9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3NlbGVjdC5qcyIsImltcG9ydCBUZXh0IGZyb20gJy4vdGV4dC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0YXJlYSBleHRlbmRzIFRleHQge1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgndGV4dGFyZWEnLCBUZXh0YXJlYSk7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGV4dGFyZWEuanMiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5cbi8qKlxuICogU2NvcGUgY2xhc3MuXG4gKlxuICogQWxsIHByb3BlcnRpZXMgc3RhcnRpbmcgd2l0aCBfXyB3aWxsIG5vdCBiZSB3YXRjaGluZy5cbiAqIFlvdSBjYW4gdXNlIHRoZW0gZm9yIGludGVybmFsIG1hbmlwdWxhdGlvbnMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3BlIHtcbiAgc3RhdGljIG5lc3RlZFdhdGNoaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVsLCBjb21wb25lbnQpIHtcbiAgICB0aGlzLl9fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fX2VsID0gZWw7XG4gICAgdGhpcy5fX2NvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ3Njb3BlJywgbmFtZSk7XG4gIH1cblxuICBnZXQgX191dGlscygpIHtcbiAgICByZXR1cm4gdXRpbHM7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGEgc2NvcGUgdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzdHJpY3Q9ZmFsc2VdIC0gd2l0aG91dCBvYmplY3QgY29weWluZ1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldChrZXlzLCB2YWx1ZSwgc3RyaWN0ID0gZmFsc2UpIHtcbiAgICBpZighQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG5cbiAgICBBa2lsaS51bmlzb2xhdGVkKCgpID0+IHtcbiAgICAgIHN0cmljdCAmJiAodGhpcy5fX2NvbXBvbmVudC5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgPSB0cnVlKTtcbiAgICAgIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMsIChsYXN0LCB2YWwpID0+IHtcbiAgICAgICAgaWYoIWxhc3QpIHtcbiAgICAgICAgICByZXR1cm4gdmFsIHx8IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICBzdHJpY3QgJiYgKHRoaXMuX19jb21wb25lbnQuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nID0gZmFsc2UpO1xuICAgIH0pO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY29wZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=