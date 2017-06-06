/*!
 * Akili is a javascript framework
 * 
 * const Akili = makeItEasy(js + html);
 * 
 * @version 0.2.2
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
  var keys = Object.getOwnPropertyNames(Array.prototype);

  var _loop2 = function _loop2(i, l) {
    var key = keys[i];
    var old = Array.prototype[key];

    if (typeof old != 'function' || key == 'constructor') {
      return 'continue';
    }

    Array.prototype[key] = function () {
      var _this3 = this,
          _arguments = arguments;

      return Akili.unevaluated(function () {
        if (!_this3.__isProxy) {
          return old.apply(_this3, _arguments);
        }

        return Akili.isolate(function () {
          return old.apply(_this3, _arguments);
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
  window.setTimeout = this.createCallbackIsolation(window.setTimeout, 0);
  window.setInterval = this.createCallbackIsolation(window.setInterval, 0);
  window.Promise && (window.Promise.constructor = this.createCallbackIsolation(window.Promise.constructor, 0));
};

/**
 * Isolate event listeners
 */
Akili.isolateEvents = function () {
  var oldAddEventListener = Element.prototype.addEventListener;
  var oldRemoveEventListener = Element.prototype.removeEventListener;
  var oldRemove = Element.prototype.remove;

  Element.prototype.remove = function () {
    delete this.__akiliListeners;

    return oldRemove.apply(this, arguments);
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
      var _this4 = this,
          _arguments2 = arguments;

      return Akili.unevaluated(function () {
        return Akili.isolate(function () {
          return fn.apply(_this4, _arguments2);
        });
      });
    };

    this.__akiliListeners[name].push({
      link: fn,
      fn: args[1]
    });

    return oldAddEventListener.apply(this, args);
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

    return oldRemoveEventListener.apply(this, arguments);
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
  var _this5 = this;

  window.addEventListener('error', function () {
    _this5.triggerInit(false);
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
 * Initialize an application
 *
 * @param {HTMLElement} [root]
 * @returns {Promise}
 */
Akili.init = function (root) {
  var _this6 = this;

  var serverP = Promise.resolve();
  var server = this.__html.getAttribute('akili-server');

  this.__root = root || document.querySelector("html");
  this.__serverRendering = !!server;

  if (server) {
    this.__html.innerHTML = '';
    this.__html.style.visibility = 'hidden';

    serverP = _request2.default.get(server).then(function (res) {
      _this6.__html.innerHTML = res.data;
    });
  }

  return serverP.then(function () {
    return _this6.compile(_this6.__root).then(function () {
      if (_router2.default.__init) {
        return _router2.default.changeState();
      }
    }).then(function () {
      _this6.triggerInit(true);
    }).catch(function (err) {
      _this6.triggerInit(false);
      throw err;
    });
  });
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

        xhr.timeout = function () {
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

    router.changeState();

    return res;
  };

  this.__onStateChangeHandler = function () {
    _this.changeState();
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
      });
    });
  };

  return new Promise(function (resolve, reject) {
    next(_this3.getStatesByLevel(0), function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDcxN2EyMzI3MDdiZWJiODZiZmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FraWxpLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JvdXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudC1lbWl0dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VtYmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lmLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lmcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmNsdWRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JhZGlvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZXh0YXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NvcGUuanMiXSwibmFtZXMiOlsiQWtpbGkiLCJvcHRpb25zIiwibmVzdGVkV2F0Y2hpbmciLCJzaG93RXZhbHVhdGlvbkVycm9ycyIsImRlYnVnIiwiX19pbml0IiwiX19jb21wb25lbnRzIiwiX19hbGlhc2VzIiwiX19zY29wZXMiLCJfX2lzb2xhdGlvbiIsIl9fZXZhbHVhdGlvbiIsIl9faHRtbCIsIndpbmRvdyIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiX19zZXJ2ZXJSZW5kZXJpbmciLCJodG1sQm9vbGVhbkF0dHJpYnV0ZXMiLCJjb21wb25lbnRzIiwiZGVjb3JhdG9ycyIsInNlcnZpY2VzIiwiam9pbkJpbmRpbmdLZXlzIiwia2V5cyIsIm1hcCIsImVsIiwidG9TdHJpbmciLCJqb2luIiwiYWRkU2NvcGUiLCJzY29wZSIsIl9fbmFtZSIsIkVycm9yIiwiZ2V0U2NvcGUiLCJuYW1lIiwicmVtb3ZlU2NvcGUiLCJfX2NvbXBvbmVudCIsIl9fZWwiLCJfX3BhcmVudCIsImdldEFraWxpUGFyZW50cyIsInRyZWUiLCJhcnIiLCJjaGVjayIsIm5vZGUiLCJwYXJlbnROb2RlIiwiX19ha2lsaSIsInB1c2giLCJzZXRUZW1wbGF0ZSIsInRlbXBsYXRlIiwicmVwbGFjZSIsImlubmVySFRNTCIsImNyZWF0ZVNjb3BlTmFtZSIsImNyZWF0ZVJhbmRvbVN0cmluZyIsInN0ciIsImlzb2xhdGUiLCJmbiIsInJlcyIsInByb3BzIiwiayIsImhhc093blByb3BlcnR5IiwiaSIsImwiLCJwcm9wIiwiaXNEZWxldGVkIiwiY29tcG9uZW50IiwiX19ldmFsdWF0ZUJ5S2V5cyIsInVuZGVmaW5lZCIsInNldFByb3BlcnR5QnlLZXlzIiwibGFzdCIsInZhbCIsInZhbHVlIiwibGVuZ3RoIiwidW5ldmFsdWF0ZWQiLCJldmFsdWF0aW9uIiwidW5pc29sYXRlZCIsImluaXRpYWxpemUiLCJyZWNvbXBpbGUiLCJfX3JlY29tcGlsZSIsImlzUm9vdCIsIl9fcm9vdCIsImNvbXBvbmVudE5hbWUiLCJ0b0Rhc2hDYXNlIiwiZ2V0QXR0cmlidXRlIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwiX0NvbXBvbmVudCIsIkNIRUNLX0FMSUFTRVMiLCJzZWxlY3RvcnMiLCJPYmplY3QiLCJzZWxlY3RvckFsbCIsIm1hdGNoZXMiLCJzZWxlY3RvciIsIkNvbXBvbmVudCIsIl9fY2FuY2VsbGVkIiwiX19jcmVhdGUiLCJjb21waWxlIiwicm9vdCIsImVsZW1lbnRzIiwibmVzdGVkSW5pdGlhbGl6aW5nIiwiY2hpbGRyZW4iLCJjaGlsZCIsInAiLCJfX2NvbXBpbGUiLCJQcm9taXNlIiwiYWxsIiwidGhlbiIsInIiLCJfX3Jlc29sdmUiLCJjb25zb2xlIiwid2FybiIsInVucmVnaXN0ZXJDb21wb25lbnQiLCJhbGlhcyIsInVucmVnaXN0ZXJBbGlhcyIsImlzb2xhdGVBcnJheVByb3RvdHlwZSIsImdldE93blByb3BlcnR5TmFtZXMiLCJBcnJheSIsInByb3RvdHlwZSIsImtleSIsIm9sZCIsIl9faXNQcm94eSIsImFwcGx5IiwiaXNvbGF0ZVdpbmRvd0Z1bmN0aW9ucyIsInNldFRpbWVvdXQiLCJjcmVhdGVDYWxsYmFja0lzb2xhdGlvbiIsInNldEludGVydmFsIiwiY29uc3RydWN0b3IiLCJpc29sYXRlRXZlbnRzIiwib2xkQWRkRXZlbnRMaXN0ZW5lciIsIkVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwib2xkUmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvbGRSZW1vdmUiLCJyZW1vdmUiLCJfX2FraWxpTGlzdGVuZXJzIiwiYXJndW1lbnRzIiwiYXJncyIsInNsaWNlIiwiY2FsbCIsImxpbmsiLCJsaXN0ZW5lciIsInNwbGljZSIsInBvcyIsImNhbGxiYWNrIiwiaXNvbGF0ZUZ1bmN0aW9uIiwiY29udGV4dCIsIm9GbiIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImVycm9ySGFuZGxpbmciLCJ0cmlnZ2VySW5pdCIsInN0YXR1cyIsInN0eWxlIiwidmlzaWJpbGl0eSIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImluaXQiLCJzZXJ2ZXJQIiwicmVzb2x2ZSIsInNlcnZlciIsInF1ZXJ5U2VsZWN0b3IiLCJnZXQiLCJkYXRhIiwiY2hhbmdlU3RhdGUiLCJjYXRjaCIsImVyciIsImRlZmluZSIsIkV2ZW50RW1pdHRlciIsIlNjb3BlIiwidXRpbHMiLCJBIiwiQ29udGVudCIsIkZvciIsIkVtYmVkIiwiSWYiLCJJbmNsdWRlIiwiSW5wdXQiLCJJZnJhbWUiLCJJbWFnZSIsIlJhZGlvIiwiUm91dGUiLCJTZWxlY3QiLCJUZXh0IiwiVGV4dGFyZWEiLCJyZXF1ZXN0Iiwicm91dGVyIiwiZXZhbHVhdGlvblJlZ2V4IiwiZXZhbHVhdGlvblJlZ2V4R2xvYmFsIiwiUmVnRXhwIiwic291cmNlIiwic3lzdGVtQXR0cmlidXRlcyIsImV4cHJlc3Npb24iLCJldmVudCIsImV2YWwiLCJfX2lzU3lzdGVtS2V5IiwiaW5kZXhPZiIsIl9faXNNb3VudGVkIiwiX19pc0NvbXBpbGVkIiwiX19iaW5kaW5ncyIsIl9fZXZhbHVhdGluZ0V2ZW50IiwiX19yZWNvbXBpbGluZyIsIl9fY29tcGlsaW5nIiwiX19kaXNhYmxlUHJveHkiLCJfX2NoaWxkcmVuIiwiX19wYXJlbnRzIiwiX19hdHRycyIsIl9fYXR0cmlidXRlT2YiLCJfX2V2YWx1YXRpb25Db21wb25lbnQiLCJfX3NldEV2ZW50cyIsIl9fc2V0UGFyZW50cyIsIl9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMiLCJfX2RlZmluZUF0dHJpYnV0ZXMiLCJfX2luaXRpYWxpemUiLCJjcmVhdGVkIiwiYXR0cnMiLCJjb250cm9sIiwiX19jb250cm9sQXR0cmlidXRlcyIsIl9fZXZhbHVhdGVQYXJlbnQiLCJuZXdQYXJlbnQiLCJfX2ludGVycG9sYXRlQXR0cmlidXRlcyIsImludGVycG9sYXRlIiwicGFyZW50Iiwibm9kZVR5cGUiLCJfX2luaXRpYWxpemVOb2RlIiwibm9kZVZhbHVlIiwiX19ldmFsdWF0ZSIsImNoaWxkTm9kZXMiLCJvbkNvbXBpbGVkIiwidHJpZ2dlciIsImNvbXBpbGVkIiwidGVtcGxhdGVVcmwiLCJfX2NvbnRlbnQiLCJvblJlY29tcGlsZWQiLCJyZWNvbXBpbGVkIiwib25SZXNvbHZlZCIsInJlc29sdmVkIiwiX19zY29wZSIsIl9zY29wZSIsImFzc2lnbiIsImNvbnRyb2xBdHRyaWJ1dGVzIiwiZXZlbnRzIiwiX19ldmVudHMiLCJfX25lc3RlZFdhdGNoaW5nIiwiX19uZXN0ZWRPYnNlcnZlIiwiX19vYnNlcnZlIiwiYm9vbGVhbkF0dHJpYnV0ZXMiLCJjb25jYXQiLCJzZXRBdHRyIiwiYXR0cmlidXRlcyIsIm5vZGVOYW1lIiwiaGFzQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiZXYiLCJ0ZXN0IiwicGFyZW50cyIsImV2YWx1YXRlUGFyZW50IiwidHJhbnNwYXJlbnQiLCJfX2RldGFjaCIsIl9fYWRkQ2hpbGQiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvcGVydGllcyIsImdldFByb3BlcnR5QnlLZXlzIiwiY29tcGFyZVByZXZpb3VzVmFsdWUiLCJjb3B5IiwiX19nZXROb2RlUHJvcGVydHkiLCJjb3VudGVyIiwiYXR0cmlidXRlVmFsdWUiLCJfX2V4cHJlc3Npb24iLCJtIiwiZCIsImV2YWx1YXRlIiwiZXhpc3RpbmdCaW5kaW5ncyIsInBhcnNlVmFsdWUiLCJfX2dldFBhcnNlZEV4cHJlc3Npb24iLCJsaXN0IiwicGFyc2UiLCJtZXNzYWdlIiwic3RhY2siLCJlcnJvciIsImhhc2giLCJrZXlzU3RyaW5nIiwibm90QmluZGluZyIsInBhcmVudFZhbHVlIiwiZXZhbENvbXBvbmVudCIsImlzU2NvcGVQcm94eSIsImJpbmQiLCJfX2dldEJvdW5kTm9kZSIsIl9fYmluZCIsIl9fc2V0Tm9kZVByb3BlcnR5IiwiQXR0ciIsIm1ha2VBdHRyaWJ1dGVWYWx1ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlIiwiaXNCb29sZWFuQXR0cmlidXRlIiwiX19oYXNCaW5kaW5ncyIsImNsZWFyQXR0cmlidXRlIiwiX19hdHRyaWJ1dGVPbiIsIl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciIsInRvQ2FtZWxDYXNlIiwib25DaGFuZ2VkIiwiY2hhbmdlZCIsImNhbWVsS2V5IiwidG9VcHBlckNhc2UiLCJmbk5hbWUiLCJldkZuTmFtZSIsImVsZW1lbnQiLCJfX2VsZW1lbnQiLCJhdHRyIiwid2l0aG91dFBhcmVudHMiLCJsYXN0UHJvcHMiLCJwcm9wc0xlbmd0aCIsImVsRXZhbHVhdGUiLCJfX2dldEJpbmQiLCJfX2RhdGEiLCJjIiwiX19jaGVja05vZGVQcm9wZXJ0eUNoYW5naW5nIiwiX19ldmFsdWF0ZU5vZGUiLCJfayIsIl9wcm9wIiwidW5iaW5kIiwib2JqIiwiX2tleXMiLCJfX2tleXMiLCJfaXNEZWxldGVkIiwiaGFzS2V5Iiwic2hpZnQiLCJoYXNQcm9wZXJ0eUJ5S2V5cyIsIl9fZXZhbHVhdGVOZXN0ZWQiLCJfX3VuYmluZCIsImRlbGV0ZVByb3BlcnR5QnlLZXlzIiwiZXhlYyIsIl9fY2hlY2tFdmFsdWF0aW9uIiwiYXR0cmlidXRlT2YiLCJldmVudE5hbWUiLCJfX2V2ZW50IiwiZW1pdHRlciIsIl9fZXZhbHVhdGVFdmVudCIsIl9faW5pdGlhbGl6ZWQiLCJfX2luaXRpYWxpemVBdHRyaWJ1dGUiLCJjaGFuZ2VBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGVOb2RlIiwiX191bmJpbmRCeU5vZGVzIiwiUHJveHkiLCJ0YXJnZXQiLCJzZXQiLCJhdHRyS2V5IiwiZGVsZXRlUHJvcGVydHkiLCJyZWFsVGFyZ2V0IiwiZ2V0T3duUHJvcGVydHlUYXJnZXQiLCJpc1BsYWluT2JqZWN0IiwiZ2V0RW51bWVyYWJsZVByb3BlcnR5VGFyZ2V0IiwiX19iaW5kTm9kZSIsIl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0Iiwic3RhcnRLZXlzIiwib2JzZXJ2ZSIsIl9fdGFyZ2V0IiwiX19kaXNhYmxlUHJveHlSZWRlZmluaW5nIiwiaXNvbGF0aW9uS2V5IiwicGFyZW50S2V5c1N0cmluZyIsIl9fZGVsZXRlTm9kZVByb3BlcnR5Iiwibm9kZXMiLCJfX2NsZWFyRW1wdHlCaW5kaW5ncyIsImNsZWFyIiwiX19yZW1vdmUiLCJvblJlbW92ZWQiLCJyZW1vdmVkIiwiX19zcGxpY2VDaGlsZCIsIl9fcmVtb3ZlQ2hpbGRyZW4iLCJmaW5kIiwiZmluZEFsbCIsImxldmVscyIsImxldmVsIiwiaXNBcnJheSIsInJpZ2h0IiwibGV2ZWxFbGVtZW50cyIsInJldmVyc2UiLCJfX2dldFBhcmVudCIsIl9fZ2V0Q2hpbGRyZW4iLCJfX2dldE5lYXIiLCJhcHBlbmRDaGlsZCIsIl9fZW1wdHkiLCJfX2Rlc3Ryb3kiLCJjbGFzcyIsImNsYXNzZXMiLCJzdHlsZXMiLCJmaWx0ZXIiLCJoYW5kbGVyIiwiaXRlbSIsIm1hdGNoIiwic29ydCIsIm9yZGVyIiwiYSIsImIiLCJEYXRlIiwiZ2V0VGltZSIsIm5leHQiLCJhViIsImJWIiwibmVzdGVkIiwiY29tcGFyZSIsImN1cnJlbnQiLCJwcmV2aW91cyIsInByZXZpb3VzQ29weSIsImN1cnJlbnRDb3B5IiwiZW5jb2RlSHRtbEVudGl0aWVzIiwiaHRtbCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlY29kZUh0bWxFbnRpdGllcyIsIm9iamVjdCIsInJlZHVjZSIsIm8iLCJoYXMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsInByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJjbGVhclNjb3BlUHJveHkiLCJNYXRoIiwicmFuZG9tIiwic3Vic3RyaW5nIiwiUmVxdWVzdCIsImJhc2VVcmwiLCJkZWZhdWx0cyIsInN0YXR1c0Vycm9yc1BhdHRlcm4iLCJyZWplY3QiLCJ1cmwiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9uU3RhcnQiLCJ0cmFuc2Zvcm1CZWZvcmUiLCJvcGVuIiwibWV0aG9kIiwidXNlciIsInBhc3N3b3JkIiwiaGVhZGVycyIsImpzb24iLCJib2R5IiwicmVzcG9uc2VUeXBlIiwiZm9ybSIsImNyZWF0ZUZvcm1EYXRhIiwidGltZW91dCIsIndpdGhDcmVkZW50aWFscyIsInNldFJlcXVlc3RIZWFkZXIiLCJwYXJhbXMiLCJwYXJhbXNUb1F1ZXJ5Iiwib25Qcm9ncmVzcyIsIm9ucHJvZ3Jlc3MiLCJvbmxvYWQiLCJyZXNwb25zZSIsInRyYW5zZm9ybUFmdGVyIiwib25lcnJvciIsInNlbmQiLCJzZXAiLCJlcSIsImtzIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidiIsIm9wdCIsInF1ZXJ5IiwiYW1wcyIsInNwbGl0IiwiZXFzIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwibmFtZXNwYWNlIiwiZmQiLCJGb3JtRGF0YSIsImFwcGVuZCIsInRvSVNPU3RyaW5nIiwiX19pbnN0YW5jZXMiLCJhZGRJbnN0YW5jZSIsImluc3RhbmNlIiwicmVtb3ZlSW5zdGFuY2UiLCJ2YWx1ZUtleSIsInNldFZhbHVlIiwic2V0Rm9jdXMiLCJmb2N1cyIsInNldEVsZW1lbnRGb2N1cyIsInNldEVsZW1lbnRCbHVyIiwiYmx1ciIsIkxvb3AiLCJfX2l0ZXJhdG9yIiwiX19rZXkiLCJfX3ZhbHVlIiwiX19pbmRleCIsIl9fY29tcGFyaXNvblZhbHVlIiwiaXRlcmF0b3JzIiwiaXRlcmF0b3JSZWYiLCJpdGVyYXRvck91dGVySFRNTCIsImRyYXciLCJjcmVhdGVJdGVyYXRvciIsImluIiwibWFzayIsIm5leHRTaWJsaW5nIiwib3V0ZXJIVE1MIiwiY29udGVudCIsImZpcnN0Q2hpbGQiLCJpbmRleCIsImZvdW5kIiwiX19oYXNoIiwiaXRlcmF0b3IiLCJjVmFsdWUiLCJjb21wYXJzaW9uIiwiY0NvcHkiLCJzZXRJbmRleCIsInNldEtleSIsImNyZWF0ZUl0ZXJhdG9yRWxlbWVudCIsImluc2VydEJlZm9yZSIsIndyaXRhYmxlIiwiZVZhbHVlIiwiaW5kZXhLZXlzIiwibGFzdEVsZW1lbnQiLCJsb29wIiwiaXRlcmF0ZSIsImZvciIsImlzRm9yIiwiY2FuY2VsIiwiX19zZXQiLCJ0cmFuc2l0aW9uIiwic3RhdGUiLCJwYXRoIiwiZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uIiwiX190cmFuc2l0aW9uIiwiZW1wdHkiLCJidWJibGVzIiwiZm9yY2UiLCJpbkV2YWx1YXRpbmciLCJfRXZlbnQiLCJ0eXBlIiwiVHJhbnNpdGlvbiIsInJvdXRlcyIsInN0YXRlcyIsInJvdXRlIiwiaGFzaE1vZGUiLCJfX3JlZGlyZWN0cyIsIl9fb3B0aW9ucyIsIl9fcGFyYW1SZWdleCIsIl9fcm91dGVTZWxlY3RvciIsImFkZCIsInBhdHRlcm4iLCJkZWZhdWx0T3B0aW9ucyIsImFic3RyYWN0Iiwic2V0U3RhdGUiLCJnZXRTdGF0ZSIsImNyZWF0ZVN0YXRlVXJsIiwicmVsb2FkIiwiZ2V0VXJsIiwic2V0VXJsIiwiYmFjayIsImhpc3RvcnkiLCJnbyIsImZvcndhcmQiLCJsb2NhdGlvbiIsInB1c2hTdGF0ZSIsImRlZmF1bHRVcmwiLCJvbGRQdXNoU3RhdGUiLCJfX29uU3RhdGVDaGFuZ2VIYW5kbGVyIiwicG9wIiwicGFyZW50TmFtZSIsImZ1bGxQYXR0ZXJuIiwic3BsaXRTbGFzaGVzIiwicmVtb3ZlU3RhdGUiLCJzZXRIYXNoVXJsIiwic2V0SGlzdG9yeVVybCIsImdldEhhc2hVcmwiLCJnZXRIaXN0b3J5VXJsIiwicGF0aG5hbWUiLCJzZWFyY2giLCJnZXRVcmxRdWVyeSIsImdldEhhc2hVcmxRdWVyeSIsImdldEhpc3RvcnlVcmxRdWVyeSIsInBhcmFtc0Zyb21RdWVyeSIsImYiLCJnZXRQYXR0ZXJuQ29udGVudCIsInVybFBhdHRlcm4iLCJyZWdleCIsImlzSW5jbHVkZWQiLCJpc0FjdGl2ZVN0YXRlIiwiaW5jbHVkZXMiLCJpbkFjdGl2ZVN0YXRlIiwiZ2V0Um91dGUiLCJnZXRBcnJheVBhdHRlcm5Db250ZW50IiwiZ2V0U3RhdGVzQnlMZXZlbCIsIl9fZGlzYWJsZUNoYW5nZSIsInByZXZUcmFuc2l0aW9uIiwib25FbmQiLCJzZXRQYXRoIiwibG9hZGVkIiwiaGFzU3RhdGUiLCJpc0RpZmZlcmVudCIsInByZXYiLCJpc0hpc3RvcnkiLCJpc1JlbG9hZCIsInNldFRyYW5zaXRpb24iLCJpc1VybCIsInJlc2V0SHJlZiIsInNldFBhcmFtcyIsInNldFF1ZXJ5Iiwic2V0SGFzaCIsInNldFJlbG9hZCIsInByZXZlbnREZWZhdWx0Iiwic2V0T3B0aW9ucyIsImhyZWYiLCJnZXRDb21wdXRlZFN0eWxlIiwiZGlzcGxheSIsInJhbmdlIiwiY3JlYXRlUmFuZ2UiLCJzZWxlY3Rpb24iLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwic2V0U3JjIiwic3JjIiwiRWxzZUlmIiwiRWxzZSIsImFjdGl2ZSIsInJlY3JlYXRlIiwiaXNDb21waWxlZCIsInNldFJlY3JlYXRpb24iLCJpcyIsImNvbXBpbGF0aW9uIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwicmVzdWx0Iiwic2V0QWN0aXZpdHkiLCJjb25uZWN0aW9uIiwiZ2V0VGVtcGxhdGUiLCJhYm9ydCIsIm9uTG9hZCIsIm9uRXJyb3IiLCJpc0NoZWNrYm94IiwiaXNSYWRpbyIsInNldENoZWNrZWQiLCJjaGVja2VkIiwicHJldkNoZWNrZWQiLCJvbkNoYW5nZSIsImRpc3BhdGNoIiwiRXZlbnQiLCJjaGFuZ2VSYWRpbyIsInJhZGlvIiwiUmFkaW9CdXR0b24iLCJpdGVyYWJsZSIsInNldE5hbWVzIiwiZ2V0UmFkaW9WYWx1ZSIsInByZXZWYWx1ZSIsIm9uUmFkaW8iLCJpc1RydWUiLCJpc1NlbGVjdGVkIiwic2V0UmFkaW9WYWx1ZSIsIk9wdGlvbiIsIml0ZXJhdG9yVGFnTmFtZSIsImlzTXVsdGlwbGUiLCJzZXRNdWx0aXBsZSIsInNldENvbnRlbnQiLCJkcmF3U2VsZWN0IiwiZ2V0Q29udGVudCIsIm11bHRpcGxlIiwiY2hhbmdlVmFsdWUiLCJmb3JtYXRWYWx1ZSIsInNlbGVjdGVkIiwib3B0aW9uIiwicmVkZWZpbmUiLCJ0cmltIiwic2V0U2VsZWN0ZWQiLCJzdHJpY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ3ZCQSxlQUFPLENBQUNBLElBQUQsQ0FBUDtBQUNEOztBQUVELHNCQUFNa0QsVUFBTixDQUFpQixZQUFNO0FBQ3JCa2xCLG1CQUFXLE1BQUt4bkIsV0FBTCxDQUFpQm9VLHdCQUFqQixHQUE0QyxJQUF2RDtBQUNBLHdCQUFNclMsaUJBQU4sQ0FBd0IzQyxJQUF4QixTQUFvQyxVQUFDNEMsSUFBRCxFQUFPQyxHQUFQLEVBQWU7QUFDakQsY0FBRyxDQUFDRCxJQUFKLEVBQVU7QUFDUixtQkFBT0MsT0FBTyxFQUFkO0FBQ0Q7O0FBRUQsaUJBQU9DLEtBQVA7QUFDRCxTQU5EO0FBT0FzbEIsbUJBQVcsTUFBS3huQixXQUFMLENBQWlCb1Usd0JBQWpCLEdBQTRDLEtBQXZEO0FBQ0QsT0FWRDtBQVdEOzs7d0JBM0JhO0FBQ1o7QUFDRDs7Ozs7O2tCQVprQjlMLEs7QUFzQ3BCLEMiLCJmaWxlIjoiYWtpbGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQ3MTdhMjMyNzA3YmViYjg2YmZiIiwiLyoqXG4gKiBKYXZhc2NyaXB0IGZyYW1ld29ya1xuICpcbiAqIGNvbnN0IEFraWxpID0gbWFrZUl0RWFzeShqcyArIGh0bWwpO1xuICpcbiAqIEBhdXRob3IgQWxleGFuZHIgQmFsYXN5YW4gPG15d2Vic3RyZWV0QGdtYWlsLmNvbT5cbiAqIEBsaW5rIGh0dHA6Ly9ha2lsaWpzLmNvbVxuICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IElmIGZyb20gJy4vY29tcG9uZW50cy9pZi5qcyc7XG5pbXBvcnQgRm9yIGZyb20gJy4vY29tcG9uZW50cy9mb3IuanMnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL2NvbXBvbmVudHMvc2VsZWN0LmpzJztcbmltcG9ydCBJbnB1dCBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQuanMnO1xuaW1wb3J0IFJhZGlvIGZyb20gJy4vY29tcG9uZW50cy9yYWRpby5qcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL2NvbXBvbmVudHMvdGV4dC5qcyc7XG5pbXBvcnQgVGV4dGFyZWEgZnJvbSAnLi9jb21wb25lbnRzL3RleHRhcmVhLmpzJztcbmltcG9ydCBDb250ZW50IGZyb20gJy4vY29tcG9uZW50cy9jb250ZW50LmpzJztcbmltcG9ydCBJbmNsdWRlIGZyb20gJy4vY29tcG9uZW50cy9pbmNsdWRlLmpzJztcbmltcG9ydCBJZnJhbWUgZnJvbSAnLi9jb21wb25lbnRzL2lmcmFtZS5qcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9jb21wb25lbnRzL2ltYWdlLmpzJztcbmltcG9ydCBFbWJlZCBmcm9tICcuL2NvbXBvbmVudHMvZW1iZWQuanMnO1xuaW1wb3J0IFJvdXRlIGZyb20gJy4vY29tcG9uZW50cy9yb3V0ZS5qcyc7XG5pbXBvcnQgQSBmcm9tICcuL2NvbXBvbmVudHMvYS5qcyc7XG5pbXBvcnQgU2NvcGUgZnJvbSAnLi9zY29wZS5qcyc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlci5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuL3NlcnZpY2VzL3JvdXRlci5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5cbmNvbnN0IEFraWxpID0ge307XG5cbkFraWxpLm9wdGlvbnMgPSB7XG4gIG5lc3RlZFdhdGNoaW5nOiB0cnVlLFxuICBzaG93RXZhbHVhdGlvbkVycm9yczogdHJ1ZSxcbiAgZGVidWc6IHRydWVcbn07XG5cbkFraWxpLl9faW5pdCA9IG51bGw7XG5Ba2lsaS5fX2NvbXBvbmVudHMgPSB7fTtcbkFraWxpLl9fYWxpYXNlcyA9IHt9O1xuQWtpbGkuX19zY29wZXMgPSB7fTtcbkFraWxpLl9faXNvbGF0aW9uID0gbnVsbDtcbkFraWxpLl9fZXZhbHVhdGlvbiA9IG51bGw7XG5Ba2lsaS5fX2h0bWwgPSB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuQWtpbGkuX19zZXJ2ZXJSZW5kZXJpbmcgPSBmYWxzZTtcblxuQWtpbGkuaHRtbEJvb2xlYW5BdHRyaWJ1dGVzID0gW1xuICAnZGlzYWJsZWQnLCAnY29udGVudGVkaXRhYmxlJywgJ2hpZGRlbidcbl07XG5cbkFraWxpLmNvbXBvbmVudHMgPSB7fTtcbkFraWxpLmRlY29yYXRvcnMgPSB7fTtcbkFraWxpLnNlcnZpY2VzID0ge307XG5cbi8qKlxuICogSm9pbiBiaW5kaW5nIGtleXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIGJpbmRpbmcga2V5c1xuICovXG5Ba2lsaS5qb2luQmluZGluZ0tleXMgPSBmdW5jdGlvbihrZXlzKSB7XG4gIHJldHVybiBrZXlzLm1hcChlbCA9PiBlbC50b1N0cmluZygpKS5qb2luKCcuJyk7XG59O1xuXG4vKipcbiAqIEFkZCBzY29wZSB0byB0aGUgc2NvcGVzIGxpc3RcbiAqXG4gKiBAcGFyYW0gc2NvcGVcbiAqL1xuQWtpbGkuYWRkU2NvcGUgPSBmdW5jdGlvbihzY29wZSkge1xuICBpZih0aGlzLl9fc2NvcGVzW3Njb3BlLl9fbmFtZV0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFNjb3BlIG5hbWUgJHtzY29wZS5fX25hbWV9IGFscmVhZHkgZXhpc3RzYCk7XG4gIH1cblxuICB0aGlzLl9fc2NvcGVzW3Njb3BlLl9fbmFtZV0gPSBzY29wZTtcbn07XG5cbi8qKlxuICogR2V0IHNjb3BlIGZyb20gdGhlIHNjb3BlcyBsaXN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzY29wZSBuYW1lXG4gKiBAcmV0dXJucyB7U2NvcGV9XG4gKi9cbkFraWxpLmdldFNjb3BlID0gZnVuY3Rpb24obmFtZSkge1xuICByZXR1cm4gdGhpcy5fX3Njb3Blc1tuYW1lXTtcbn07XG5cbi8qKlxuICogRGVsZXRlIHNjb3BlIGZyb20gdGhlIHNjb3BlcyBsaXN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzY29wZSBuYW1lXG4gKi9cbkFraWxpLnJlbW92ZVNjb3BlID0gZnVuY3Rpb24obmFtZSkge1xuICBsZXQgc2NvcGUgPSB0aGlzLl9fc2NvcGVzW25hbWVdO1xuXG4gIHNjb3BlLl9fY29tcG9uZW50ID0gbnVsbDtcbiAgc2NvcGUuX19lbCA9IG51bGw7XG4gIHNjb3BlLl9fcGFyZW50ID0gbnVsbDtcbiAgdGhpcy5fX3Njb3Blc1tuYW1lXSA9IG51bGw7XG4gIGRlbGV0ZSB0aGlzLl9fc2NvcGVzW25hbWVdO1xufTtcblxuLyoqXG4gKiBHZXQgYWxsIGVsZW1lbnRzIHdpdGggYXR0YWNoZWQgQWtpbGkgY29tcG9uZW50c1xuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFt0cmVlPXRydWVdIC0gcmV0dXJuIGFycmF5IG9mIHRoZSBwYXJlbnRzIGlmIHRydWUsIGNsb3Nlc3QgcGFyZW50IGlmIGZhbHNlXG4gKiBAcmV0dXJucyB7QXJyYXl8SFRNTEVsZW1lbnR8bnVsbH1cbiAqL1xuQWtpbGkuZ2V0QWtpbGlQYXJlbnRzID0gZnVuY3Rpb24gKGVsLCB0cmVlID0gdHJ1ZSkge1xuICBsZXQgYXJyID0gW107XG5cbiAgZnVuY3Rpb24gY2hlY2sobm9kZSkge1xuICAgIGlmKCFub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZihub2RlLnBhcmVudE5vZGUuX19ha2lsaSkge1xuICAgICAgYXJyLnB1c2gobm9kZS5wYXJlbnROb2RlKTtcblxuICAgICAgaWYoIXRyZWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrKG5vZGUucGFyZW50Tm9kZSk7XG4gIH1cblxuICBjaGVjayhlbCk7XG5cbiAgcmV0dXJuIHRyZWU/IGFycjogYXJyWzBdO1xufTtcblxuLyoqXG4gKiBTZXQgZWxlbWVudCBpbm5lciBodG1sIHdpdGggY29udGVudCByZXBsYWNpbmdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcIjxpPkhlbGxvPC9pPjxiPldvcmxkPC9iPlwiXG4gKiBlbC5pbm5lckhUTUwgPSBcIjxiPldvcmxkPC9iPlwiO1xuICogQWtpbGkuc2V0VGVtcGxhdGUoZWwsIFwiPGk+SGVsbG88L2k+JHt0aGlzLl9fY2hpbGRyZW59XCIpO1xuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbkFraWxpLnNldFRlbXBsYXRlID0gZnVuY3Rpb24oZWwsIHRlbXBsYXRlKSB7XG4gIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZSgvXFwkeygoKD8hXFwkeylcXHMqdGhpc1xcLl9fY29udGVudFxccyopKil9LywgZWwuaW5uZXJIVE1MKTtcbiAgZWwuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG5cbiAgcmV0dXJuIGVsLmlubmVySFRNTDtcbn07XG5cbi8qKlxuICogR2VuZXJhdGUgdW5pcXVlIHNjb3BlIG5hbWVcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5Ba2lsaS5jcmVhdGVTY29wZU5hbWUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHV0aWxzLmNyZWF0ZVJhbmRvbVN0cmluZygxNiwgKHN0cikgPT4ge1xuICAgIHJldHVybiAhIXRoaXMuX19zY29wZXNbc3RyXTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIElzb2xhdGUgZnVuY3Rpb24uXG4gKiBFdmVyeSBzY29wZSB2YXJpYWJsZSBjaGFuZ2UgY2FsbHMgYWNjb3JkaW5nIG5vZGUgZXZhbHVhdGlvbi5cbiAqIEZvciBleGFtcGxlLCBpZiB5b3UgY2hhbmdlIHNvbWUgc2NvcGUgdmFyaWFibGUgaW4gdGhlIGxvb3AgLSBldmFsdWF0aW9uIHdpbGwgYmUgY2FsbGVkIG9uIHRoZSBlYWNoIGNoYW5nZS5cbiAqIEl0IG1heSBiZSBzbG93IGZvciB0aGUgYXBwbGljYXRpb24uXG4gKiBZb3UgY2FuIGlzb2xhdGUgdGhpcyBhY3Rpb24gYW5kIHJ1biBhbGwgZXZhbHVhdGlvbiBwcm9jZXNzIGFmdGVyIHBhc3NlZCBmdW5jdGlvbiBhdCBvbmNlLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkuaXNvbGF0ZSA9IGZ1bmN0aW9uKGZuKSB7XG4gIGlmKHRoaXMuX19pc29sYXRpb24pIHtcbiAgICByZXR1cm4gZm4oKTtcbiAgfVxuXG4gIHRoaXMuX19pc29sYXRpb24gPSB7fTtcblxuICBsZXQgcmVzID0gZm4oKTtcbiAgbGV0IHByb3BzID0gW107XG5cbiAgZm9yKGxldCBrIGluIHRoaXMuX19pc29sYXRpb24pIHtcbiAgICBpZighdGhpcy5fX2lzb2xhdGlvbi5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcHJvcHMucHVzaCh0aGlzLl9faXNvbGF0aW9uW2tdKTtcbiAgfVxuXG4gIHRoaXMuX19pc29sYXRpb24gPSBudWxsO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBwcm9wcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgcHJvcCA9IHByb3BzW2ldO1xuXG4gICAgaWYocHJvcC5pc0RlbGV0ZWQpIHtcbiAgICAgIHByb3AuY29tcG9uZW50Ll9fZXZhbHVhdGVCeUtleXMocHJvcC5rZXlzLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB1dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyhwcm9wLmtleXMsIHByb3AuY29tcG9uZW50LnNjb3BlLCAobGFzdCwgdmFsKSA9PiB7XG4gICAgICBpZighbGFzdCkge1xuICAgICAgICByZXR1cm4gdmFsIHx8IHt9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvcC52YWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb3BzID0gbnVsbDtcblxuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBTdG9wIGV2YWx1YXRpb24gYmVmb3JlIHRoZSBmdW5jdGlvbiBhbmQgY29udGludWUgYWZ0ZXJcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLnVuZXZhbHVhdGVkID0gZnVuY3Rpb24oZm4pIHtcbiAgbGV0IGV2YWx1YXRpb24gPSB0aGlzLl9fZXZhbHVhdGlvbjtcbiAgbGV0IHJlcztcblxuICB0aGlzLl9fZXZhbHVhdGlvbiA9IG51bGw7XG4gIHJlcyA9IGZuKCk7XG4gIHRoaXMuX19ldmFsdWF0aW9uID0gZXZhbHVhdGlvbjtcblxuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBTdG9wIGlzb2xhdGlvbiBiZWZvcmUgdGhlIGZ1bmN0aW9uIGFuZCBjb250aW51ZSBhZnRlclxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkudW5pc29sYXRlZCA9IGZ1bmN0aW9uKGZuKSB7XG4gIGxldCBldmFsdWF0aW9uID0gdGhpcy5fX2lzb2xhdGlvbjtcbiAgbGV0IHJlcztcblxuICB0aGlzLl9faXNvbGF0aW9uID0gbnVsbDtcbiAgcmVzID0gZm4oKTtcbiAgdGhpcy5fX2lzb2xhdGlvbiA9IGV2YWx1YXRpb247XG5cbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucz17fV1cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS5pbml0aWFsaXplID0gZnVuY3Rpb24oZWwsIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgcmVjb21waWxlID0gb3B0aW9ucy5yZWNvbXBpbGU7XG4gIGxldCBjb21wb25lbnQgPSBlbC5fX2FraWxpO1xuXG4gIGlmKGNvbXBvbmVudCkge1xuICAgIGlmKHJlY29tcGlsZSkge1xuICAgICAgY29tcG9uZW50Ll9fcmVjb21waWxlKCk7XG5cbiAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGlzUm9vdCA9IGVsID09PSB0aGlzLl9fcm9vdDtcbiAgbGV0IGNvbXBvbmVudE5hbWUgPSB1dGlscy50b0Rhc2hDYXNlKGVsLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50JykgfHwgZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgbGV0IF9Db21wb25lbnQgPSB0aGlzLl9fY29tcG9uZW50c1tjb21wb25lbnROYW1lXTtcblxuICBDSEVDS19BTElBU0VTOiBpZighX0NvbXBvbmVudCkge1xuICAgIGxldCBzZWxlY3RvcnMgPSBPYmplY3Qua2V5cyh0aGlzLl9fYWxpYXNlcyk7XG5cbiAgICBpZighc2VsZWN0b3JzLmxlbmd0aCkge1xuICAgICAgYnJlYWsgQ0hFQ0tfQUxJQVNFUztcbiAgICB9XG5cbiAgICBsZXQgc2VsZWN0b3JBbGwgPSBzZWxlY3RvcnMuam9pbignLCcpO1xuXG4gICAgaWYoIWVsLm1hdGNoZXMoc2VsZWN0b3JBbGwpKSB7XG4gICAgICBicmVhayBDSEVDS19BTElBU0VTO1xuICAgIH1cblxuICAgIGZvcihsZXQgc2VsZWN0b3IgaW4gdGhpcy5fX2FsaWFzZXMpIHtcbiAgICAgIGlmKCF0aGlzLl9fYWxpYXNlcy5oYXNPd25Qcm9wZXJ0eShzZWxlY3RvcikpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmKGVsLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIF9Db21wb25lbnQgPSB0aGlzLl9fY29tcG9uZW50c1t0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl1dO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZighX0NvbXBvbmVudCAmJiAhaXNSb290KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYoIV9Db21wb25lbnQpIHtcbiAgICBfQ29tcG9uZW50ID0gdGhpcy5Db21wb25lbnQ7XG4gIH1cblxuICBpZihfQ29tcG9uZW50Lm1hdGNoZXMgJiYgIWVsLm1hdGNoZXMoX0NvbXBvbmVudC5tYXRjaGVzKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbXBvbmVudCA9IG5ldyBfQ29tcG9uZW50KGVsLCB7fSk7XG5cbiAgaWYoY29tcG9uZW50Ll9fY2FuY2VsbGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29tcG9uZW50Ll9fY3JlYXRlKCk7XG5cbiAgcmV0dXJuIGNvbXBvbmVudDtcbn07XG5cbi8qKlxuICogQ29tcGlsZSB0aGUgZWxlbWVudFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5Ba2lsaS5jb21waWxlID0gZnVuY3Rpb24ocm9vdCwgb3B0aW9ucyA9IHsgcmVjb21waWxlOiBmYWxzZSB9KSB7XG4gIGxldCBlbGVtZW50cyA9IFtdO1xuXG4gIGxldCBuZXN0ZWRJbml0aWFsaXppbmcgPSAoZWwpID0+IHtcbiAgICBsZXQgY29tcG9uZW50ID0gdGhpcy5pbml0aWFsaXplKGVsLCBvcHRpb25zKTtcbiAgICBsZXQgY2hpbGRyZW4gPSBlbC5jaGlsZHJlbjtcblxuICAgIGNvbXBvbmVudCAmJiBlbGVtZW50cy5wdXNoKGNvbXBvbmVudCk7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcblxuICAgICAgbmVzdGVkSW5pdGlhbGl6aW5nKGNoaWxkKTtcbiAgICB9XG4gIH07XG5cbiAgbmVzdGVkSW5pdGlhbGl6aW5nKHJvb3QpO1xuXG4gIGxldCBwID0gW107XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBjb21wb25lbnQgPSBlbGVtZW50c1tpXTtcblxuICAgIHAucHVzaChjb21wb25lbnQuX19jb21waWxlKCkpO1xuICB9XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKHApLnRoZW4oKCkgPT4ge1xuICAgIGxldCByID0gW107XG5cbiAgICBmb3IobGV0IGkgPSBlbGVtZW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IGNvbXBvbmVudCA9IGVsZW1lbnRzW2ldO1xuXG4gICAgICByLnB1c2goY29tcG9uZW50Ll9fcmVzb2x2ZSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocik7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciB0aGUgY29tcG9uZW50IG9yIGdldCBpdCBpZiBmbiBpcyBub3QgcGFzc2VkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBbZm5dXG4gKi9cbkFraWxpLmNvbXBvbmVudCA9IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYoIWZuKSB7XG4gICAgcmV0dXJuIHRoaXMuX19jb21wb25lbnRzW25hbWVdIHx8IG51bGw7XG4gIH1cblxuICBpZih0aGlzLl9fY29tcG9uZW50c1tuYW1lXSAmJiBBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgY29uc29sZS53YXJuKGBDb21wb25lbnQgJHtuYW1lfSBhbHJlYWR5IHdhcyBhZGRlZGApO1xuICB9XG5cbiAgdGhpcy5fX2NvbXBvbmVudHNbbmFtZV0gPSBmbjtcbn07XG5cbi8qKlxuICogVW5yZWdpc3RlciB0aGUgY29tcG9uZW50XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xuQWtpbGkudW5yZWdpc3RlckNvbXBvbmVudCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZGVsZXRlIHRoaXMuX19jb21wb25lbnRzW25hbWVdO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciB0aGUgc2VsZWN0b3IgYWxpYXMgb3IgZ2V0IGl0IGlmIGNvbXBvbmVudCBuYW1lIGlzIG5vdCBwYXNzZWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgLSBET00gc2VsZWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29tcG9uZW50TmFtZV1cbiAqL1xuQWtpbGkuYWxpYXMgPSBmdW5jdGlvbihzZWxlY3RvciwgY29tcG9uZW50TmFtZSA9ICcnKSB7XG4gIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYoIWNvbXBvbmVudE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdIHx8IG51bGw7XG4gIH1cblxuICBpZih0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gJiYgQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgIGNvbnNvbGUud2FybihgQWxpYXMgd2l0aCBzZWxlY3RvciAke3NlbGVjdG9yfSBhbHJlYWR5IHdhcyBhZGRlZGApO1xuICB9XG5cbiAgdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdID0gY29tcG9uZW50TmFtZTtcbn07XG5cbi8qKlxuICogVW5yZWdpc3RlciB0aGUgc2VsZWN0b3IgYWxpYXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqL1xuQWtpbGkudW5yZWdpc3RlckFsaWFzID0gZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgZGVsZXRlIHRoaXMuX19jb21wb25lbnRzW3NlbGVjdG9yXTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSBhcnJheSBwcm90b3R5cGUgZnVuY3Rpb25zXG4gKi9cbkFraWxpLmlzb2xhdGVBcnJheVByb3RvdHlwZSA9IGZ1bmN0aW9uKCkge1xuICBsZXQga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKEFycmF5LnByb3RvdHlwZSk7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgbGV0IG9sZCA9IEFycmF5LnByb3RvdHlwZVtrZXldO1xuXG4gICAgaWYodHlwZW9mIG9sZCAhPSAnZnVuY3Rpb24nIHx8IGtleSA9PSAnY29uc3RydWN0b3InKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBBcnJheS5wcm90b3R5cGVba2V5XSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIEFraWxpLnVuZXZhbHVhdGVkKCgpID0+IHtcbiAgICAgICAgaWYoIXRoaXMuX19pc1Byb3h5KSB7XG4gICAgICAgICAgcmV0dXJuIG9sZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBvbGQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG59O1xuXG4vKipcbiAqIElzb2xhdGUgc29tZSB3aW5kb3cgZnVuY3Rpb25zXG4gKi9cbkFraWxpLmlzb2xhdGVXaW5kb3dGdW5jdGlvbnMgPSBmdW5jdGlvbigpIHtcbiAgd2luZG93LnNldFRpbWVvdXQgPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5zZXRUaW1lb3V0LCAwKTtcbiAgd2luZG93LnNldEludGVydmFsID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuc2V0SW50ZXJ2YWwsIDApO1xuICB3aW5kb3cuUHJvbWlzZSAmJiAod2luZG93LlByb21pc2UuY29uc3RydWN0b3IgPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5Qcm9taXNlLmNvbnN0cnVjdG9yICwgMCkpO1xufTtcblxuLyoqXG4gKiBJc29sYXRlIGV2ZW50IGxpc3RlbmVyc1xuICovXG5Ba2lsaS5pc29sYXRlRXZlbnRzID0gZnVuY3Rpb24oKSB7XG4gIGxldCBvbGRBZGRFdmVudExpc3RlbmVyID0gRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcjtcbiAgbGV0IG9sZFJlbW92ZUV2ZW50TGlzdGVuZXIgPSBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyO1xuICBsZXQgb2xkUmVtb3ZlID0gRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlO1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGRlbGV0ZSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnM7XG5cbiAgICByZXR1cm4gb2xkUmVtb3ZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgbGV0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICBpZighdGhpcy5fX2FraWxpTGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZighdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBhcmdzWzFdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIEFraWxpLnVuZXZhbHVhdGVkKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ucHVzaCh7XG4gICAgICBsaW5rOiBmbixcbiAgICAgIGZuOiBhcmdzWzFdXG4gICAgfSk7XG5cbiAgICByZXR1cm4gb2xkQWRkRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfTtcblxuICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZighdGhpcy5fX2FraWxpTGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZighdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGxpc3RlbmVyID0gdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdW2ldO1xuXG4gICAgICBpZihsaXN0ZW5lci5saW5rID09PSBmbikge1xuICAgICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICBpLS07XG4gICAgICAgIGwtLTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZighdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2xkUmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuLyoqXG4gKiBXcmFwIHRoZSBmdW5jdGlvbiBjYWxsYmFjayB0byBhbiBpc29sYXRlIGNvbnRleHRcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBbcG9zPVwibGFzdFwiXVxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5Ba2lsaS5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbiA9IGZ1bmN0aW9uKGZuLCBwb3MgPSAnbGFzdCcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGxldCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgIGxldCBjYWxsYmFjayA9IHBvcyA9PSAnbGFzdCc/IGFyZ3NbYXJncy5sZW5ndGggLSAxXTogYXJnc1twb3NdO1xuXG4gICAgaWYodHlwZW9mIGNhbGxiYWNrICE9ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIGFyZ3NbMF0gPSAoKSA9PiB7XG4gICAgICByZXR1cm4gQWtpbGkudW5ldmFsdWF0ZWQoKCkgPT4ge1xuICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSB0aGUgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtvYmplY3R9IFtjb250ZXh0XVxuICogQHJldHVybnMge2Z1bmN0aW9ufVxuICovXG5Ba2lsaS5pc29sYXRlRnVuY3Rpb24gPSBmdW5jdGlvbihmbiwgY29udGV4dCA9IG51bGwpIHtcbiAgaWYoZm4uX19ha2lsaSkge1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIGxldCBvRm4gPSBmdW5jdGlvbigpIHtcbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCB0aGlzO1xuXG4gICAgcmV0dXJuIEFraWxpLnVuZXZhbHVhdGVkKCgpID0+IHtcbiAgICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3VtZW50cyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob0ZuLCAnX19ha2lsaScsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG5cbiAgcmV0dXJuIG9Gbjtcbn07XG5cbi8qKlxuICogRXJyb3IgaGFuZGxpbmdcbiAqL1xuQWtpbGkuZXJyb3JIYW5kbGluZyA9IGZ1bmN0aW9uKCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgdGhpcy50cmlnZ2VySW5pdChmYWxzZSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBUcmlnZ2VyIGFuIGluaXRpYWxpemF0aW9uIHN0YXR1c1xuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc3RhdHVzXG4gKi9cbkFraWxpLnRyaWdnZXJJbml0ID0gZnVuY3Rpb24oc3RhdHVzKSB7XG4gIEFraWxpLl9faW5pdCA9IHN0YXR1cztcbiAgdGhpcy5fX3NlcnZlclJlbmRlcmluZyAmJiAodGhpcy5fX2h0bWwuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJyk7XG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnYWtpbGktaW5pdCcsIHsgZGV0YWlsOiBzdGF0dXMgfSkpO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGFuIGFwcGxpY2F0aW9uXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW3Jvb3RdXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuQWtpbGkuaW5pdCA9IGZ1bmN0aW9uKHJvb3QpIHtcbiAgbGV0IHNlcnZlclAgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgbGV0IHNlcnZlciA9IHRoaXMuX19odG1sLmdldEF0dHJpYnV0ZSgnYWtpbGktc2VydmVyJyk7XG5cbiAgdGhpcy5fX3Jvb3QgPSByb290IHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpO1xuICB0aGlzLl9fc2VydmVyUmVuZGVyaW5nID0gISFzZXJ2ZXI7XG5cbiAgaWYoc2VydmVyKSB7XG4gICAgdGhpcy5fX2h0bWwuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5fX2h0bWwuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXG4gICAgc2VydmVyUCA9IHJlcXVlc3QuZ2V0KHNlcnZlcikudGhlbigocmVzKSA9PiB7XG4gICAgICB0aGlzLl9faHRtbC5pbm5lckhUTUwgPSByZXMuZGF0YTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBzZXJ2ZXJQLnRoZW4oKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLmNvbXBpbGUodGhpcy5fX3Jvb3QpLnRoZW4oKCkgPT4ge1xuICAgICAgaWYocm91dGVyLl9faW5pdCkge1xuICAgICAgICByZXR1cm4gcm91dGVyLmNoYW5nZVN0YXRlKCk7XG4gICAgICB9XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnRyaWdnZXJJbml0KHRydWUpO1xuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHRoaXMudHJpZ2dlckluaXQoZmFsc2UpO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbi8qKlxuICogRGVmaW5lIGFsbCBkZWZhdWx0IGNvbXBvbmVudHNcbiAqL1xuQWtpbGkuZGVmaW5lID0gZnVuY3Rpb24oKSB7XG4gIEEuZGVmaW5lKCk7XG4gIENvbnRlbnQuZGVmaW5lKCk7XG4gIENvbXBvbmVudC5kZWZpbmUoKTtcbiAgRW1iZWQuZGVmaW5lKCk7XG4gIEZvci5kZWZpbmUoKTtcbiAgSW5jbHVkZS5kZWZpbmUoKTtcbiAgSWZyYW1lLmRlZmluZSgpO1xuICBJbWFnZS5kZWZpbmUoKTtcbiAgSW5wdXQuZGVmaW5lKCk7XG4gIElmLmRlZmluZSgpO1xuICBSYWRpby5kZWZpbmUoKTtcbiAgUm91dGUuZGVmaW5lKCk7XG4gIFNlbGVjdC5kZWZpbmUoKTtcbiAgVGV4dGFyZWEuZGVmaW5lKCk7XG59O1xuXG5Ba2lsaS5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5Ba2lsaS5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5Ba2lsaS5TY29wZSA9IFNjb3BlO1xuQWtpbGkudXRpbHMgPSB1dGlscztcbkFraWxpLmNvbXBvbmVudHMuQSA9IEE7XG5Ba2lsaS5jb21wb25lbnRzLkNvbnRlbnQgPSBDb250ZW50O1xuQWtpbGkuY29tcG9uZW50cy5Gb3IgPSBGb3I7XG5Ba2lsaS5jb21wb25lbnRzLkVtYmVkID0gRW1iZWQ7XG5Ba2lsaS5jb21wb25lbnRzLklmID0gSWY7XG5Ba2lsaS5jb21wb25lbnRzLkluY2x1ZGUgPSBJbmNsdWRlO1xuQWtpbGkuY29tcG9uZW50cy5JbnB1dCA9IElucHV0O1xuQWtpbGkuY29tcG9uZW50cy5JZnJhbWUgPSBJZnJhbWU7XG5Ba2lsaS5jb21wb25lbnRzLkltYWdlID0gSW1hZ2U7XG5Ba2lsaS5jb21wb25lbnRzLlJhZGlvID0gUmFkaW87XG5Ba2lsaS5jb21wb25lbnRzLlJvdXRlID0gUm91dGU7XG5Ba2lsaS5jb21wb25lbnRzLlNlbGVjdCA9IFNlbGVjdDtcbkFraWxpLmNvbXBvbmVudHMuVGV4dCA9IFRleHQ7XG5Ba2lsaS5jb21wb25lbnRzLlRleHRhcmVhID0gVGV4dGFyZWE7XG5Ba2lsaS5zZXJ2aWNlcy5yZXF1ZXN0ID0gcmVxdWVzdDtcbkFraWxpLnNlcnZpY2VzLnJvdXRlciA9IHJvdXRlcjtcblxud2luZG93LkFraWxpID0gQWtpbGk7XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnRzID0gQWtpbGkuY29tcG9uZW50cztcbmV4cG9ydCBjb25zdCBzZXJ2aWNlcyA9IEFraWxpLnNlcnZpY2VzO1xuZXhwb3J0IGRlZmF1bHQgQWtpbGk7XG5cbkFraWxpLmRlZmluZSgpO1xuQWtpbGkuZXJyb3JIYW5kbGluZygpO1xuQWtpbGkuaXNvbGF0ZUV2ZW50cygpO1xuQWtpbGkuaXNvbGF0ZUFycmF5UHJvdG90eXBlKCk7XG5Ba2lsaS5pc29sYXRlV2luZG93RnVuY3Rpb25zKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FraWxpLmpzIiwiaW1wb3J0IEFraWxpIGZyb20gJy4vYWtpbGkuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9zZXJ2aWNlcy9yZXF1ZXN0LmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcblxuY29uc3QgZXZhbHVhdGlvblJlZ2V4ID0gL1xcJHsoKCg/IVxcJHspLikqKX0vO1xuY29uc3QgZXZhbHVhdGlvblJlZ2V4R2xvYmFsID0gbmV3IFJlZ0V4cChldmFsdWF0aW9uUmVnZXguc291cmNlLCBcImdcIik7XG5jb25zdCBzeXN0ZW1BdHRyaWJ1dGVzID0gWydjb21wb25lbnQnLCAnc2NvcGUnXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgc3RhdGljIG5lc3RlZFdhdGNoaW5nO1xuICBzdGF0aWMgbWF0Y2hlcyA9ICcnO1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbXTtcbiAgc3RhdGljIGV2ZW50cyA9IFtdO1xuICBzdGF0aWMgY29udHJvbEF0dHJpYnV0ZXMgPSBmYWxzZTtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gZmFsc2U7XG4gIHN0YXRpYyB0ZW1wbGF0ZSA9ICcnO1xuICBzdGF0aWMgdGVtcGxhdGVVcmwgPSAnJztcbiAgc3RhdGljIHNjb3BlID0gbnVsbDtcblxuICAvKipcbiAgICogRnVuY3Rpb24gdG8gZGVmaW5lIHRoZSBjb21wb25lbnRcbiAgICovXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdjb21wb25lbnQnLCBDb21wb25lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIHRoZSBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBleHByZXNzaW9uXG4gICAqIEBwYXJhbSB7RXZlbnR9IFtldmVudD1udWxsXVxuICAgKi9cbiAgc3RhdGljIHBhcnNlKGNvbnRleHQsIGV4cHJlc3Npb24sIGV2ZW50ID0gbnVsbCkge1xuICAgIHJldHVybiAoZnVuY3Rpb24gKGV4cHJlc3Npb24sIGV2ZW50KSB7XG4gICAgICByZXR1cm4gZXZhbChleHByZXNzaW9uKTtcbiAgICB9KS5jYWxsKGNvbnRleHQsIGV4cHJlc3Npb24sIGV2ZW50KVxuICB9XG5cbiAgY29uc3RydWN0b3IoZWwsIHNjb3BlID0ge30pIHtcbiAgICB0aGlzLl9faXNNb3VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2lzQ29tcGlsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2JpbmRpbmdzID0ge307XG4gICAgdGhpcy5fX2V2YWx1YXRpbmdFdmVudCA9IG51bGw7XG4gICAgdGhpcy5fX3JlY29tcGlsaW5nID0gbnVsbDtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0ge307XG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IG51bGw7XG4gICAgdGhpcy5fX2NoaWxkcmVuID0gW107XG4gICAgdGhpcy5fX3BhcmVudCA9IG51bGw7XG4gICAgdGhpcy5fX3BhcmVudHMgPSBbXTtcbiAgICB0aGlzLl9fYXR0cnMgPSB7fTtcbiAgICB0aGlzLl9fYXR0cmlidXRlT2YgPSBudWxsO1xuICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50ID0gdGhpcztcbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgdGhpcy5lbCA9IGVsO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiB0aGUgcmVjb21waWxhdGlvblxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlY29tcGlsZSgpIHtcbiAgICB0aGlzLl9faXNNb3VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2lzQ29tcGlsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5fX2Rpc2FibGVQcm94eSA9IG51bGw7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IHt9O1xuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IHt9O1xuICAgIHRoaXMuX19zZXRFdmVudHMoKTtcbiAgICB0aGlzLl9fc2V0UGFyZW50cygpO1xuICAgIHRoaXMuX19zZXRCb29sZWFuQXR0cmlidXRlcygpO1xuICAgIHRoaXMuX19kZWZpbmVBdHRyaWJ1dGVzKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIG9uIHRoZSBjcmVhdGlvblxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZSgpIHtcbiAgICB0aGlzLmVsLl9fYWtpbGkgPSB0aGlzO1xuICAgIHRoaXMuX19pbml0aWFsaXplKCk7XG4gICAgdGhpcy5fX3NldEV2ZW50cygpO1xuICAgIHRoaXMuX19zZXRQYXJlbnRzKCk7XG4gICAgdGhpcy5fX3NldEJvb2xlYW5BdHRyaWJ1dGVzKCk7XG4gICAgdGhpcy5fX2RlZmluZUF0dHJpYnV0ZXMoKTtcblxuICAgIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVkKHRoaXMuYXR0cnMpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiB0aGUgY29tcGlsYXRpb25cbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIF9fY29tcGlsZSgpIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuX19jb250cm9sQXR0cmlidXRlcyB8fCAhdGhpcy5fX2V2YWx1YXRlUGFyZW50O1xuICAgIGxldCBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbiAgICB0aGlzLl9fYXR0cmlidXRlT2YgPSBjb250cm9sPyB0aGlzOiB0aGlzLl9fZXZhbHVhdGVQYXJlbnQuX19ha2lsaTtcblxuICAgIGlmKCF0aGlzLl9fcmVjb21waWxpbmcgfHwgdGhpcy5fX2NvbXBpbGluZy5uZXdQYXJlbnQgfHwgdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzKSB7XG4gICAgICB0aGlzLl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKHRoaXMuZWwsIHRoaXMuX19hdHRyaWJ1dGVPZik7XG4gICAgfVxuXG4gICAgbGV0IGludGVycG9sYXRlID0gKGNoaWxkcmVuLCBwYXJlbnQpID0+IHtcbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYoY2hpbGQubm9kZVR5cGUgPT0gMykge1xuICAgICAgICAgIHRoaXMuX19pbml0aWFsaXplTm9kZShjaGlsZCwgcGFyZW50KTtcblxuICAgICAgICAgIGNoaWxkLm5vZGVWYWx1ZSA9IHRoaXMuX19ldmFsdWF0ZShjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihjaGlsZC5ub2RlVHlwZSA9PSAxICYmICFjaGlsZC5fX2FraWxpKSB7XG4gICAgICAgICAgdGhpcy5fX2ludGVycG9sYXRlQXR0cmlidXRlcyhjaGlsZCk7XG4gICAgICAgICAgaW50ZXJwb2xhdGUoY2hpbGQuY2hpbGROb2RlcywgY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGludGVycG9sYXRlKHRoaXMuZWwuY2hpbGROb2RlcywgdGhpcy5lbCk7XG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IHRydWU7XG5cbiAgICBsZXQgcmVzO1xuXG4gICAgaWYoIXRoaXMuX19yZWNvbXBpbGluZykge1xuICAgICAgcmVzID0gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0cnMub25Db21waWxlZCAmJiB0aGlzLmF0dHJzLm9uQ29tcGlsZWQudHJpZ2dlcigpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBpbGVkKCk7XG4gICAgICB9KTtcblxuICAgICAgaWYodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkge1xuICAgICAgICBwID0gcmVxdWVzdC5nZXQodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLl9fY29udGVudDtcbiAgICAgICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCByZXMuZGF0YSk7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX19jb250ZW50O1xuXG4gICAgICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uUmVjb21waWxlZCAmJiB0aGlzLmF0dHJzLm9uUmVjb21waWxlZC50cmlnZ2VyKCk7XG4gICAgICAgIHRoaXMucmVjb21waWxlZCgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fX2lzQ29tcGlsZWQgPSB0cnVlO1xuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IG51bGw7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IG51bGw7XG5cbiAgICByZXR1cm4gcC50aGVuKCgpID0+IHtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZSB0aGUgY29tcG9uZW50XG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBfX3Jlc29sdmUoKSB7XG4gICAgaWYodGhpcy5fX3JlY29tcGlsaW5nKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5hdHRycy5vblJlc29sdmVkICYmIHRoaXMuYXR0cnMub25SZXNvbHZlZC50cmlnZ2VyKCk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnJlc29sdmVkKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnQgb2YgdGhlIHtAc2VlIENvbXBvbmVudCNfX2NvbXBpbGV9IG1ldGhvZFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemUoKSB7XG4gICAgbGV0IHBhcmVudCA9IEFraWxpLmdldEFraWxpUGFyZW50cyh0aGlzLmVsLCBmYWxzZSk7XG4gICAgbGV0IFNjb3BlID0gdGhpcy5jb25zdHJ1Y3Rvci5zY29wZSB8fCBBa2lsaS5TY29wZTtcbiAgICBsZXQgc2NvcGU7XG4gICAgbGV0IGlzUm9vdCA9IEFraWxpLl9fcm9vdCA9PT0gdGhpcy5lbDtcblxuICAgIGlmKHBhcmVudCkge1xuICAgICAgc2NvcGUgPSBuZXcgU2NvcGUodGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3Njb3BlJykgfHwgQWtpbGkuY3JlYXRlU2NvcGVOYW1lKCksIHRoaXMuZWwsIHRoaXMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNjb3BlID0gbmV3IFNjb3BlKGlzUm9vdD8gJ3Jvb3QnOiBBa2lsaS5jcmVhdGVTY29wZU5hbWUoKSwgdGhpcy5lbCwgdGhpcyk7XG4gICAgICBpc1Jvb3QgJiYgKEFraWxpLnJvb3QgPSB0aGlzKTtcbiAgICB9XG5cbiAgICBsZXQgX19zY29wZSA9IHNjb3BlO1xuICAgIGxldCBfc2NvcGUgPSBPYmplY3QuYXNzaWduKHNjb3BlLCB0aGlzLnNjb3BlKTtcbiAgICBsZXQgbmVzdGVkV2F0Y2hpbmcgPSBBa2lsaS5vcHRpb25zLm5lc3RlZFdhdGNoaW5nO1xuICAgIGxldCBjb250cm9sQXR0cmlidXRlcyA9IHRoaXMuY29uc3RydWN0b3IuY29udHJvbEF0dHJpYnV0ZXM7XG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuY29uc3RydWN0b3IuZXZlbnRzO1xuXG4gICAgaWYodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZSkge1xuICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgdGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgaWYodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkge1xuICAgICAgdGhpcy5fX2NvbnRlbnQgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gICAgaWYodGhpcy5jb25zdHJ1Y3Rvci5uZXN0ZWRXYXRjaGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXN0ZWRXYXRjaGluZyA9IHRoaXMuY29uc3RydWN0b3IubmVzdGVkV2F0Y2hpbmc7XG4gICAgfVxuICAgIGVsc2UgaWYoU2NvcGUubmVzdGVkV2F0Y2hpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbmVzdGVkV2F0Y2hpbmcgPSBTY29wZS5uZXN0ZWRXYXRjaGluZztcbiAgICB9XG5cbiAgICB0aGlzLl9fc2NvcGUgPSBfX3Njb3BlO1xuICAgIHRoaXMuX19ldmVudHMgPSBldmVudHM7XG4gICAgdGhpcy5fX25lc3RlZFdhdGNoaW5nID0gbmVzdGVkV2F0Y2hpbmc7XG4gICAgdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzID0gY29udHJvbEF0dHJpYnV0ZXM7XG5cbiAgICBBa2lsaS5hZGRTY29wZShzY29wZSk7XG5cbiAgICBpZihuZXN0ZWRXYXRjaGluZykge1xuICAgICAgc2NvcGUgPSB0aGlzLl9fbmVzdGVkT2JzZXJ2ZShfc2NvcGUsIFtdKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzY29wZSA9IHRoaXMuX19vYnNlcnZlKF9zY29wZSwgW10pO1xuICAgIH1cblxuICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYm9vbGVhbiBhdHRyaWJ1dGVzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKSB7XG4gICAgdGhpcy5ib29sZWFuQXR0cmlidXRlcyA9IFtdLmNvbmNhdChBa2lsaS5odG1sQm9vbGVhbkF0dHJpYnV0ZXMsIHRoaXMuY29uc3RydWN0b3IuYm9vbGVhbkF0dHJpYnV0ZXMpO1xuXG4gICAgbGV0IHNldEF0dHIgPSAoZWwpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBhdHRycyA9IGVsLmF0dHJpYnV0ZXMsIGwgPSBhdHRycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IG5vZGUgPSBhdHRyc1tpXTtcblxuICAgICAgICBpZih0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzLmluZGV4T2Yobm9kZS5ub2RlTmFtZSkgIT0gLTEpIHtcbiAgICAgICAgICBpZihlbC5oYXNBdHRyaWJ1dGUoYGJvb2xlYW4tJHtub2RlLm5vZGVOYW1lfWApKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYGJvb2xlYW4tJHtub2RlLm5vZGVOYW1lfWAsIGVsLmdldEF0dHJpYnV0ZShub2RlLm5vZGVOYW1lKSB8fCBub2RlLm5vZGVOYW1lKTtcbiAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGVsLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBlbC5jaGlsZHJlbltpXTtcblxuICAgICAgICBpZighY2hpbGQuX19ha2lsaSkge1xuICAgICAgICAgIHNldEF0dHIoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNldEF0dHIodGhpcy5lbCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGV2ZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldEV2ZW50cygpIHtcbiAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5fX2V2ZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBldiA9IHRoaXMuX19ldmVudHNbaV07XG5cbiAgICAgICEvXm9uLS9pLnRlc3QoZXYpICYmIChldiA9ICdvbi0nICsgZXYpO1xuXG4gICAgICBpZighdGhpcy5lbC5oYXNBdHRyaWJ1dGUoZXYpKSB7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGV2LCAnJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjb21wb25lbnQgcGFyZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldFBhcmVudHMoKSB7XG4gICAgbGV0IHBhcmVudHMgPSBBa2lsaS5nZXRBa2lsaVBhcmVudHModGhpcy5lbCk7XG5cbiAgICBpZighcGFyZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbmV3UGFyZW50ID0gdGhpcy5fX3BhcmVudCAhPT0gcGFyZW50c1swXTtcbiAgICBsZXQgZXZhbHVhdGVQYXJlbnQgPSBudWxsO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHBhcmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcGFyZW50ID0gcGFyZW50c1tpXTtcblxuICAgICAgaWYoIXBhcmVudC5fX2FraWxpLmNvbnN0cnVjdG9yLnRyYW5zcGFyZW50KSB7XG4gICAgICAgIGV2YWx1YXRlUGFyZW50ID0gcGFyZW50O1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX19jb21waWxpbmcubmV3UGFyZW50ID0gbmV3UGFyZW50O1xuICAgIG5ld1BhcmVudCAmJiB0aGlzLl9fZGV0YWNoKCk7XG5cbiAgICBpZih0aGlzLmNvbnN0cnVjdG9yLnRyYW5zcGFyZW50KSB7XG4gICAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudCA9IGV2YWx1YXRlUGFyZW50Ll9fYWtpbGk7XG4gICAgfVxuXG4gICAgdGhpcy5fX2V2YWx1YXRlUGFyZW50ID0gZXZhbHVhdGVQYXJlbnQ7XG4gICAgdGhpcy5fX3BhcmVudCA9IHBhcmVudHNbMF07XG4gICAgdGhpcy5fX3BhcmVudHMgPSBwYXJlbnRzO1xuICAgIHRoaXMuc2NvcGUuX19wYXJlbnQgPSB0aGlzLl9fZXZhbHVhdGVQYXJlbnQuX19ha2lsaS5zY29wZTtcbiAgICAhdGhpcy5fX3JlY29tcGlsaW5nICYmIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2FkZENoaWxkKHRoaXMuZWwpO1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLnNjb3BlLCB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19zY29wZSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGNoaWxkIGVsZW1lbnQgdG8gdGhlIGxpc3RcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hZGRDaGlsZChlbCkge1xuICAgIHRoaXMuX19jaGlsZHJlbi5wdXNoKGVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGxpY2UgY2hpbGQgZnJvbSB0aGUgbGlzdFxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NwbGljZUNoaWxkKGVsKSB7XG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuX19jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuX19jaGlsZHJlbltpXTtcblxuICAgICAgaWYoY2hpbGQgPT09IGVsKSB7XG4gICAgICAgIHRoaXMuX19jaGlsZHJlbi5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGktLTtcbiAgICAgICAgbC0tO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBZb3UgY2FuIGNoYW5nZSBleHByZXNzaW9uIGJlZm9yZSBwYXJzaW5nIGhlcmVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4cHJlc3Npb25cbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0UGFyc2VkRXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgbm9kZSBoYXMgYW55IHByb3BlcnR5IGNoYW5nZXMgb3Igbm90XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jaGVja0V2YWx1YXRpb24obm9kZSkge1xuICAgIGlmICghT2JqZWN0LmtleXMobm9kZS5fX3Byb3BlcnRpZXMpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgayBpbiBub2RlLl9fcHJvcGVydGllcykge1xuICAgICAgaWYoIW5vZGUuX19wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgcHJvcCA9IG5vZGUuX19wcm9wZXJ0aWVzW2tdO1xuICAgICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMocHJvcC5rZXlzLCBwcm9wLmNvbXBvbmVudC5fX3Njb3BlKTtcblxuICAgICAgaWYoIXV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlKHZhbHVlLCBwcm9wLnZhbHVlLCBwcm9wLmNvcHksIHV0aWxzLmNvcHkodmFsdWUpKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogIENoZWNrIG5vZGUgaGFzIGNoYW5nZWQgb24gdGhlIGNlcnRhaW4ga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NoZWNrTm9kZVByb3BlcnR5Q2hhbmdpbmcobm9kZSwga2V5cywgdmFsdWUpIHtcbiAgICBsZXQgcHJvcCA9IHRoaXMuX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cyk7XG5cbiAgICBpZighcHJvcCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuICF1dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSh2YWx1ZSwgcHJvcC52YWx1ZSwgcHJvcC5jb3B5LCB1dGlscy5jb3B5KHZhbHVlKSk7XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgbm9kZSBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZShub2RlKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGxldCBhdHRyaWJ1dGVWYWx1ZTtcbiAgICBsZXQgZXhwcmVzc2lvbjtcblxuICAgIGxldCByZXMgPSBub2RlLl9fZXhwcmVzc2lvbi5yZXBsYWNlKGV2YWx1YXRpb25SZWdleEdsb2JhbCwgKG0sIGQpID0+IHtcbiAgICAgIGNvdW50ZXIrKztcblxuICAgICAgbGV0IGV2YWx1YXRlO1xuICAgICAgbGV0IGV2YWx1YXRpb247XG4gICAgICBsZXQgZXhpc3RpbmdCaW5kaW5ncyA9IHt9O1xuICAgICAgbGV0IHBhcnNlVmFsdWUgPSBub2RlLl9fY29tcG9uZW50Ll9fZ2V0UGFyc2VkRXhwcmVzc2lvbihkKTtcblxuICAgICAgQWtpbGkuX19ldmFsdWF0aW9uID0geyBub2RlOiBub2RlLCBsaXN0OiBbXX07XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGV2YWx1YXRlID0gdGhpcy5jb25zdHJ1Y3Rvci5wYXJzZSh0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5zY29wZSwgcGFyc2VWYWx1ZSk7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGxldCBtZXNzYWdlID0gYFNjb3BlIHBhcnNpbmcgZXJyb3IgaW4gdGhlIHRlbXBsYXRlIGV4cHJlc3Npb246ICR7bm9kZS5fX2V4cHJlc3Npb259YDtcblxuICAgICAgICBpZighQWtpbGkub3B0aW9ucy5zaG93RXZhbHVhdGlvbkVycm9ycykge1xuICAgICAgICAgIGlmKEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihlcnIuc3RhY2spO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGV2YWx1YXRlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGV2YWx1YXRpb24gPSBBa2lsaS5fX2V2YWx1YXRpb24/IEFraWxpLl9fZXZhbHVhdGlvbi5saXN0OiBbXTtcbiAgICAgIEFraWxpLl9fZXZhbHVhdGlvbi5saXN0ID0gbnVsbDtcbiAgICAgIEFraWxpLl9fZXZhbHVhdGlvbiA9IG51bGw7XG5cbiAgICAgIGZvcihsZXQgaSA9IGV2YWx1YXRpb24ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgbGV0IGRhdGEgPSBldmFsdWF0aW9uW2ldO1xuICAgICAgICBsZXQgaGFzaCA9IGAke2RhdGEuY29tcG9uZW50Ll9fc2NvcGUuX19uYW1lfS4ke2RhdGEua2V5c1N0cmluZ31gO1xuXG4gICAgICAgIGlmKGRhdGEubm90QmluZGluZykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZXhpc3RpbmdCaW5kaW5nc1toYXNoXSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBhcmVudFZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoZGF0YS5wYXJlbnRzLCBkYXRhLmNvbXBvbmVudC5fX3Njb3BlKTtcbiAgICAgICAgbGV0IGV2YWxDb21wb25lbnQgPSBub2RlLl9fYXR0cmlidXRlT2YgfHwgbm9kZS5fX2NvbXBvbmVudDtcblxuICAgICAgICBpZih1dGlscy5pc1Njb3BlUHJveHkocGFyZW50VmFsdWUpICYmIGRhdGEuY29tcG9uZW50ICE9PSBldmFsQ29tcG9uZW50Ll9fZXZhbHVhdGlvbkNvbXBvbmVudCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGJpbmQgPSBkYXRhLmNvbXBvbmVudC5fX2dldEJvdW5kTm9kZShkYXRhLmtleXMsIG5vZGUpO1xuICAgICAgICBsZXQgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhkYXRhLmtleXMsIGRhdGEuY29tcG9uZW50Ll9fc2NvcGUpO1xuXG4gICAgICAgIGlmKCFiaW5kKSB7XG4gICAgICAgICAgZGF0YS5jb21wb25lbnQuX19iaW5kKGRhdGEua2V5cywgeyBub2RlOiBub2RlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YS5jb21wb25lbnQuX19zZXROb2RlUHJvcGVydHkobm9kZSwgZGF0YS5rZXlzLCB2YWx1ZSk7XG4gICAgICAgIGV4aXN0aW5nQmluZGluZ3NbaGFzaF0gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBleGlzdGluZ0JpbmRpbmdzID0gbnVsbDtcbiAgICAgIGV2YWx1YXRpb24gPSBudWxsO1xuXG4gICAgICBpZihub2RlIGluc3RhbmNlb2YgQXR0cikge1xuICAgICAgICBleHByZXNzaW9uID0gbTtcbiAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBldmFsdWF0ZTtcblxuICAgICAgICByZXR1cm4gdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKGV2YWx1YXRlKTtcbiAgICAgIH1cblxuICAgICAgaWYodHlwZW9mIGV2YWx1YXRlID09ICdvYmplY3QnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGV2YWx1YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlKSB7XG4gICAgICAgICAgcmV0dXJuIGV2YWx1YXRlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBldmFsdWF0ZTtcbiAgICB9KTtcblxuICAgIGlmKG5vZGUgaW5zdGFuY2VvZiBBdHRyKSB7XG4gICAgICBsZXQgdmFsdWUgPSByZXM7XG4gICAgICBsZXQgaXNCb29sZWFuQXR0cmlidXRlID0gZmFsc2U7XG5cbiAgICAgIGlmKGNvdW50ZXIpIHtcbiAgICAgICAgbm9kZS5fX2hhc0JpbmRpbmdzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYoY291bnRlciA9PSAxICYmIGV4cHJlc3Npb24gJiYgbm9kZS5fX2V4cHJlc3Npb24gPT0gZXhwcmVzc2lvbikge1xuICAgICAgICB2YWx1ZSA9IGF0dHJpYnV0ZVZhbHVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgY2xlYXJBdHRyaWJ1dGUgPSBub2RlLm5vZGVOYW1lLnJlcGxhY2UoL15ib29sZWFuLSguKykvaSwgJyQxJyk7XG5cbiAgICAgIGlmKGNsZWFyQXR0cmlidXRlICE9IG5vZGUubm9kZU5hbWUpIHtcbiAgICAgICAgaXNCb29sZWFuQXR0cmlidXRlID0gdHJ1ZTtcbiAgICAgICAgdmFsdWUgPSAhIXZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZihub2RlLl9fYXR0cmlidXRlT24pIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IG5vZGUuX19hdHRyaWJ1dGVPbjtcblxuICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gdHJ1ZTtcbiAgICAgICAgY29tcG9uZW50LmF0dHJzW3V0aWxzLnRvQ2FtZWxDYXNlKGNsZWFyQXR0cmlidXRlKV0gPSB2YWx1ZTtcbiAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChjb21wb25lbnQuX19pc0NvbXBpbGVkKSB7XG4gICAgICAgICAgQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgICAgICBjb21wb25lbnQuYXR0cnMub25DaGFuZ2VkICYmIGNvbXBvbmVudC5hdHRycy5vbkNoYW5nZWQudHJpZ2dlcih7IGtleTogY2xlYXJBdHRyaWJ1dGUsIHZhbHVlOiB2YWx1ZX0pO1xuICAgICAgICAgICAgY29tcG9uZW50LmNoYW5nZWQoY2xlYXJBdHRyaWJ1dGUsIHZhbHVlKTtcblxuICAgICAgICAgICAgbGV0IGtleSA9IHV0aWxzLnRvQ2FtZWxDYXNlKGNsZWFyQXR0cmlidXRlKTtcbiAgICAgICAgICAgIGxldCBjYW1lbEtleSA9IGtleVswXS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpO1xuICAgICAgICAgICAgbGV0IGZuTmFtZSA9ICdjaGFuZ2VkJyArIGNhbWVsS2V5O1xuICAgICAgICAgICAgbGV0IGV2Rm5OYW1lID0gJ29uQ2hhbmdlZCcgKyBjYW1lbEtleTtcblxuICAgICAgICAgICAgY29tcG9uZW50LmF0dHJzW2V2Rm5OYW1lXSAmJiBjb21wb25lbnQuYXR0cnNbZXZGbk5hbWVdLnRyaWdnZXIodmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudFtmbk5hbWVdID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgY29tcG9uZW50W2ZuTmFtZV0odmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmKGlzQm9vbGVhbkF0dHJpYnV0ZSkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IG5vZGUuX19lbGVtZW50O1xuICAgICAgICBsZXQgYXR0ciA9IHV0aWxzLnRvQ2FtZWxDYXNlKGNsZWFyQXR0cmlidXRlKTtcblxuICAgICAgICB2YWx1ZT8gZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgJ3RydWUnKTogZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBOZXN0ZWQgZXZhbHVhdGlvbiBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtib29sZWFufSBbd2l0aG91dFBhcmVudHM9ZmFsc2VdIC0gaWYgdHJ1ZSBldmFsdWF0aW9uIHdpbGwgYmUgb25seSBmb3IgdGhlIGN1cnJlbnQga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlTmVzdGVkKGtleXMsIHdpdGhvdXRQYXJlbnRzID0gZmFsc2UpIHtcbiAgICBsZXQgc2NvcGUgPSB0aGlzLl9fc2NvcGU7XG4gICAgbGV0IHByb3BzID0gW107XG5cbiAgICBpZighd2l0aG91dFBhcmVudHMpIHtcbiAgICAgIGxldCBsYXN0UHJvcHMgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgbGV0IHZhbHVlO1xuXG4gICAgICAgIGxhc3RQcm9wcyA9IFsuLi5sYXN0UHJvcHMsIGtleV07XG4gICAgICAgIHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMobGFzdFByb3BzLCBzY29wZSk7XG4gICAgICAgIHByb3BzLnB1c2goeyBrZXlzOiBsYXN0UHJvcHMsIHZhbHVlOiB2YWx1ZX0pXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcHJvcHMucHVzaCh7IGtleXM6IGtleXMsIHZhbHVlOiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCBzY29wZSl9KVxuICAgIH1cblxuICAgIGxldCBwcm9wc0xlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICAgIGxldCBlbEV2YWx1YXRlID0gKGVsZW1lbnQpID0+IHtcbiAgICAgIGxldCBjb21wb25lbnQgPSBlbGVtZW50Ll9fYWtpbGk7XG5cbiAgICAgIGZvciAobGV0IG0gPSAwOyBtIDwgcHJvcHNMZW5ndGg7IG0rKykge1xuICAgICAgICBsZXQgcHJvcCA9IHByb3BzW21dO1xuICAgICAgICBsZXQgZGF0YSA9IGNvbXBvbmVudC5fX2dldEJpbmQocHJvcC5rZXlzKTtcblxuICAgICAgICBpZiAoIWRhdGEgfHwgIWRhdGEuX19kYXRhKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBrID0gMCwgYyA9IGRhdGEuX19kYXRhLmxlbmd0aDsgayA8IGM7IGsrKykge1xuICAgICAgICAgIGxldCBiaW5kID0gZGF0YS5fX2RhdGFba107XG5cbiAgICAgICAgICBpZihjb21wb25lbnQuX19jaGVja05vZGVQcm9wZXJ0eUNoYW5naW5nKGJpbmQubm9kZSwgcHJvcC5rZXlzLCBwcm9wLnZhbHVlKSkge1xuICAgICAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZVByb3h5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2V2YWx1YXRlTm9kZShiaW5kLm5vZGUpO1xuXG4gICAgICAgICAgICBmb3IobGV0IF9rIGluIGJpbmQubm9kZS5fX3Byb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgaWYoIWJpbmQubm9kZS5fX3Byb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoX2spKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBsZXQgX3Byb3AgPSBiaW5kLm5vZGUuX19wcm9wZXJ0aWVzW19rXTtcbiAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoX3Byb3Aua2V5cywgX3Byb3AuY29tcG9uZW50Ll9fc2NvcGUpO1xuXG4gICAgICAgICAgICAgIF9wcm9wLmNvbXBvbmVudC5fX3NldE5vZGVQcm9wZXJ0eShiaW5kLm5vZGUsIF9wcm9wLmtleXMsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZVByb3h5ID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9O1xuXG4gICAgbGV0IGV2YWx1YXRlID0gKGVsZW1lbnRzKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gZWxFdmFsdWF0ZShlbGVtZW50c1tpXSk7XG5cbiAgICAgICAgZXZhbHVhdGUoY29tcG9uZW50Ll9fY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBlbEV2YWx1YXRlKHRoaXMuZWwpO1xuICAgIGV2YWx1YXRlKHRoaXMuX19jaGlsZHJlbik7XG4gIH07XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIHZhbHVlIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVsZXRlZD1mYWxzZV0gLSB0cnVlIGlmIHZhbHVlIGlzIGRlbGV0aW5nXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVCeUtleXMoa2V5cywgdmFsdWUsIGlzRGVsZXRlZCA9IGZhbHNlKSB7XG4gICAgbGV0IGRhdGEgPSB0aGlzLl9fZ2V0QmluZChrZXlzKTtcblxuICAgIGxldCB1bmJpbmQgPSAob2JqLCBwYXJlbnRzKSA9PiB7XG4gICAgICBmb3IobGV0IGsgaW4gb2JqKSB7XG4gICAgICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkoaykgfHwgayA9PSAnX19kYXRhJykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IF9rZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrXSk7XG4gICAgICAgIGxldCBfX2tleXMgPSBfa2V5cy5zbGljZSgpO1xuICAgICAgICBsZXQgX2lzRGVsZXRlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgdmFsID0gb2JqW2tdO1xuICAgICAgICBsZXQgaGFzS2V5O1xuXG4gICAgICAgIF9fa2V5cy5zaGlmdCgpO1xuICAgICAgICBoYXNLZXkgPSB1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhfX2tleXMsIHZhbHVlKTtcblxuICAgICAgICBpZih2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgJiYgIWhhc0tleSkge1xuICAgICAgICAgIF9pc0RlbGV0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodmFsICYmIHR5cGVvZiB2YWwgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB1bmJpbmQodmFsLCBfa2V5cyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9fZXZhbHVhdGVOZXN0ZWQoX2tleXMsIHRydWUpO1xuXG4gICAgICAgIGlmKHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCAhaGFzS2V5KSB7XG4gICAgICAgICAgdGhpcy5fX3VuYmluZChfa2V5cyk7XG4gICAgICAgICAgX2lzRGVsZXRlZCAmJiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhfX2tleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBkYXRhICYmIHVuYmluZChkYXRhLCBbXS5jb25jYXQoa2V5cykpO1xuICAgIHRoaXMuX19ldmFsdWF0ZU5lc3RlZChrZXlzKTtcblxuICAgIGlmKGlzRGVsZXRlZCkge1xuICAgICAgdGhpcy5fX3VuYmluZChrZXlzKTtcbiAgICAgIGlzRGVsZXRlZCAmJiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSBldmVudCBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVFdmVudChub2RlLCBlbCwgZSkge1xuICAgIGxldCBleHByZXNzaW9uID0gZXZhbHVhdGlvblJlZ2V4LmV4ZWMobm9kZS5fX2V4cHJlc3Npb24pO1xuICAgIGxldCBldmFsdWF0ZTtcblxuICAgIGlmKCFleHByZXNzaW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fX2V2YWx1YXRpbmdFdmVudCA9IHtcbiAgICAgIGVsOiBlbCxcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIGV2ZW50OiBlLFxuICAgICAgbm9kZTogbm9kZVxuICAgIH07XG5cbiAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0gbnVsbDtcbiAgICBldmFsdWF0ZSA9IHRoaXMuY29uc3RydWN0b3IucGFyc2UodGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQuc2NvcGUsIGV4cHJlc3Npb25bMV0sIGUpO1xuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSBudWxsO1xuXG4gICAgcmV0dXJuIGV2YWx1YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGNoYW5nZXMgYW5kIGV2YWx1YXRlIHRoZSBwYXNzZWQgbm9kZVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZU5vZGUobm9kZSkge1xuICAgIGlmKHRoaXMuX19jaGVja0V2YWx1YXRpb24obm9kZSkpIHtcbiAgICAgIG5vZGVbKG5vZGUgaW5zdGFuY2VvZiBBdHRyKT8gJ3ZhbHVlJzogJ25vZGVWYWx1ZSddID0gdGhpcy5fX2V2YWx1YXRlKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRyaWJ1dGUgbm9kZSBpbml0aWFsaXppbmdcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBhdHRyaWJ1dGVPZiAtIGlmIG5vZGUgaXMgbGlua2VkIHdpdGggcGFyZW50IHNjb3BlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZUF0dHJpYnV0ZShub2RlLCBlbCwgYXR0cmlidXRlT2YpIHtcbiAgICBpZihzeXN0ZW1BdHRyaWJ1dGVzLmluZGV4T2Yobm9kZS5ub2RlTmFtZSkgIT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9faW5pdGlhbGl6ZU5vZGUobm9kZSwgZWwpO1xuXG4gICAgbGV0IGV2ZW50TmFtZSA9IG5vZGUubm9kZU5hbWUucmVwbGFjZSgvXm9uLSguKykvaSwgJyQxJyk7XG4gICAgbGV0IG5vZGVOYW1lID0gdXRpbHMudG9DYW1lbENhc2Uobm9kZS5ub2RlTmFtZSk7XG4gICAgbGV0IGNvbXBvbmVudCA9IGF0dHJpYnV0ZU9mPyBhdHRyaWJ1dGVPZjogdGhpcztcblxuICAgIGlmKGV2ZW50TmFtZSAhPSBub2RlLm5vZGVOYW1lKSB7XG4gICAgICBpZihub2RlLl9fZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgZW1pdHRlciA9IG5ldyBBa2lsaS5FdmVudEVtaXR0ZXIoZXZlbnROYW1lLCBlbCwgY29tcG9uZW50KTtcblxuICAgICAgaWYobm9kZS5fX2V4cHJlc3Npb24pIHtcbiAgICAgICAgZW1pdHRlci5iaW5kKChlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5fX2V2YWx1YXRlRXZlbnQobm9kZSwgZWwsIGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgbm9kZS5fX2V2ZW50ID0gZW1pdHRlcjtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShub2RlLm5vZGVOYW1lLCB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUoZW1pdHRlcikpO1xuXG4gICAgICBpZihhdHRyaWJ1dGVPZikge1xuICAgICAgICB0aGlzLl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IHRydWU7XG4gICAgICAgIHRoaXMuYXR0cnNbbm9kZU5hbWVdID0gZW1pdHRlcjtcbiAgICAgICAgdGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKGF0dHJpYnV0ZU9mKSB7XG4gICAgICBub2RlLl9fYXR0cmlidXRlT24gPSB0aGlzO1xuICAgICAgbm9kZS5fX2F0dHJpYnV0ZU9mID0gY29tcG9uZW50O1xuICAgIH1cblxuICAgIGVsLnNldEF0dHJpYnV0ZShub2RlLm5vZGVOYW1lLCBjb21wb25lbnQuX19ldmFsdWF0ZShub2RlKSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgbm9kZVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZU5vZGUobm9kZSwgZWwpIHtcbiAgICBpZihub2RlLl9faW5pdGlhbGl6ZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBub2RlLl9fZXhwcmVzc2lvbiA9IG5vZGVbKG5vZGUgaW5zdGFuY2VvZiBBdHRyKT8gJ3ZhbHVlJzogJ25vZGVWYWx1ZSddO1xuICAgIG5vZGUuX19wcm9wZXJ0aWVzID0ge307XG4gICAgbm9kZS5fX2F0dHJpYnV0ZU9mID0gbnVsbDtcbiAgICBub2RlLl9fYXR0cmlidXRlT24gPSBudWxsO1xuICAgIG5vZGUuX19ldmVudCA9IG51bGw7XG4gICAgbm9kZS5fX2hhc0JpbmRpbmdzID0gZmFsc2U7XG4gICAgbm9kZS5fX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICBub2RlLl9fY29tcG9uZW50ID0gdGhpcztcbiAgICBub2RlLl9fZWxlbWVudCA9IGVsO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJwb2xhdGUgYXR0cmlidXRlcyBvZiB0aGUgZWxlbWVudFxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gW2F0dHJpYnV0ZU9mPW51bGxdIC0gaWYgbm9kZSBpcyBsaW5rZWQgd2l0aCBwYXJlbnQgc2NvcGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXMoZWwsIGF0dHJpYnV0ZU9mID0gbnVsbCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBhdHRycyA9IGVsLmF0dHJpYnV0ZXMsIGwgPSBhdHRycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHRoaXMuX19pbml0aWFsaXplQXR0cmlidXRlKGF0dHJzW2ldLCBlbCwgYXR0cmlidXRlT2YpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmUgYXR0cmlidXRlcyBhcyBwcm94eVxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RlZmluZUF0dHJpYnV0ZXMoKSB7XG4gICAgbGV0IGNoYW5nZUF0dHJpYnV0ZSA9IChrZXksIHZhbHVlLCBpc0RlbGV0ZWQgPSBmYWxzZSkgPT4ge1xuICAgICAgaWYodGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgbm9kZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlTm9kZShrZXkpO1xuXG4gICAgICBpZihub2RlKSB7XG4gICAgICAgIGlmKG5vZGUuX19ldmVudCkge1xuICAgICAgICAgIG5vZGUuX19ldmVudC51bmJpbmQoKTtcbiAgICAgICAgICBub2RlLl9fZXZlbnQgPSBudWxsO1xuICAgICAgICAgIG5vZGUuX19leHByZXNzaW9uID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZihub2RlLl9faGFzQmluZGluZ3MpIHtcbiAgICAgICAgICB0aGlzLl9fcGFyZW50ICYmIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2V2YWx1YXRpb25Db21wb25lbnQuX191bmJpbmRCeU5vZGVzKFtub2RlXSk7XG4gICAgICAgICAgbm9kZS5fX2hhc0JpbmRpbmdzID0gZmFsc2U7XG4gICAgICAgICAgbm9kZS5fX2V4cHJlc3Npb24gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZihpc0RlbGV0ZWQpIHtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYobm9kZSkge1xuICAgICAgICBub2RlLnZhbHVlID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuYXR0cnMgPSBuZXcgUHJveHkodGhpcy5fX2F0dHJzLCB7XG4gICAgICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBpZihrZXkgPT0gJ19faXNQcm94eScpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgIH0sXG4gICAgICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IGF0dHJLZXkgPSB1dGlscy50b0Rhc2hDYXNlKGtleSk7XG5cbiAgICAgICAgaWYodGhpcy5ib29sZWFuQXR0cmlidXRlcy5pbmRleE9mKGF0dHJLZXkpICE9IC0xKSB7XG4gICAgICAgICAgYXR0cktleSA9IGBib29sZWFuLSR7YXR0cktleX1gO1xuXG4gICAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgY2hhbmdlQXR0cmlidXRlKGF0dHJLZXksIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZSh2YWx1ZSkpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBhdHRyS2V5ID0gdXRpbHMudG9EYXNoQ2FzZShrZXkpO1xuXG4gICAgICAgIGNoYW5nZUF0dHJpYnV0ZShhdHRyS2V5LCB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUodmFsdWUpLCB0cnVlKTtcbiAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBwcm94eSB0byBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEByZXR1cm5zIHtQcm94eX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19vYnNlcnZlKG9iaiwgcGFyZW50cykge1xuICAgIHJldHVybiBuZXcgUHJveHkob2JqLCB7XG4gICAgICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBpZiAoa2V5ID09IFwiX19pc1Byb3h5XCIpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX3RhcmdldFwiKSB7XG4gICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX2NvbXBvbmVudFwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IFwiX19rZXlzXCIpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50cztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuX19kaXNhYmxlUHJveHkpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLl9faXNTeXN0ZW1LZXkoa2V5KSkge1xuICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHR5cGVvZiB0YXJnZXRba2V5XSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgbGV0IHJlYWxUYXJnZXQgID0gdXRpbHMuZ2V0T3duUHJvcGVydHlUYXJnZXQodGFyZ2V0LCBrZXkpO1xuXG4gICAgICAgICAgaWYoIXV0aWxzLmlzUGxhaW5PYmplY3QocmVhbFRhcmdldCkpIHtcbiAgICAgICAgICAgIHJlYWxUYXJnZXRba2V5XSA9IEFraWxpLmlzb2xhdGVGdW5jdGlvbihyZWFsVGFyZ2V0W2tleV0sIHJlYWxUYXJnZXQuX19jb21wb25lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBa2lsaS5fX2V2YWx1YXRpb24pIHtcbiAgICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG4gICAgICAgICAgbGV0IG5vdEJpbmRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgIGlmKCEoa2V5IGluIHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKCF1dGlscy5nZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQodGFyZ2V0LCBrZXkpKSB7XG4gICAgICAgICAgICBub3RCaW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9fYmluZE5vZGUoQWtpbGkuX19ldmFsdWF0aW9uLmxpc3QsIGtleXMsIHBhcmVudHMsIHRhcmdldFtrZXldLCBub3RCaW5kaW5nKTtcblxuICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgIH0sXG4gICAgICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgaWYodGhpcy5fX2Rpc2FibGVQcm94eSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tleV0pO1xuXG4gICAgICAgIGlmKHRoaXMuX19uZXN0ZWRXYXRjaGluZykge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdGhpcy5fX25lc3RlZE9ic2VydmUodmFsdWUsIGtleXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZihBa2lsaS5fX2lzb2xhdGlvbikge1xuICAgICAgICAgIHRoaXMuX19jcmVhdGVJc29sYXRpb25PYmplY3QocGFyZW50cywga2V5LCBmYWxzZSk7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuX19pc01vdW50ZWQpIHtcbiAgICAgICAgICB0aGlzLl9fZXZhbHVhdGVCeUtleXMoa2V5cywgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgICAgZGVsZXRlUHJvcGVydHk6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG5cbiAgICAgICAgaWYodGhpcy5fX2Rpc2FibGVQcm94eSkge1xuICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5fX2lzU3lzdGVtS2V5KGtleSkpIHtcbiAgICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKEFraWxpLl9faXNvbGF0aW9uKSB7XG4gICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICAgIHRoaXMuX19jcmVhdGVJc29sYXRpb25PYmplY3QocGFyZW50cywga2V5LCB0cnVlKTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICB0aGlzLl9fZXZhbHVhdGVCeUtleXMoa2V5cywgdW5kZWZpbmVkLCB0cnVlKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2sga2V5IGlzIHN5c3RlbVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgX19pc1N5c3RlbUtleSA9IGZ1bmN0aW9uKGtleSkge1xuICAgIGlmKGtleSA9PSAnX18nIHx8IChrZXlbMF0gPT0gJ18nICYmIGtleVsxXSA9PSAnXycpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZihbJ2NvbnN0cnVjdG9yJ10uaW5kZXhPZihrZXkpICE9IC0xKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIE5lc3RlZCBvYnNlcnZpbmcgdGhlIHZhbHVlXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gW3N0YXJ0S2V5c11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19uZXN0ZWRPYnNlcnZlICh2YWx1ZSwgc3RhcnRLZXlzKSB7XG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IHRydWU7XG5cbiAgICBsZXQgb2JzZXJ2ZSA9ICh2YWx1ZSwgcGFyZW50cykgPT4ge1xuICAgICAgaWYodHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYoIXV0aWxzLmlzUGxhaW5PYmplY3QodmFsdWUpICYmICF1dGlscy5pc1Njb3BlUHJveHkodmFsdWUpICYmICEodmFsdWUgaW5zdGFuY2VvZiBBa2lsaS5TY29wZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgdGFyZ2V0ID0gdmFsdWU7XG5cbiAgICAgIGlmKHZhbHVlLl9faXNQcm94eSkge1xuICAgICAgICB0YXJnZXQgPSB2YWx1ZS5fX3RhcmdldDtcblxuICAgICAgICBpZighdGhpcy5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcpIHtcbiAgICAgICAgICBpZih2YWx1ZS5fX2NvbXBvbmVudCAhPT0gdGhpcykge1xuICAgICAgICAgICAgdGFyZ2V0ID0gdXRpbHMuY29weSh0YXJnZXQsIGZhbHNlKTtcbiAgICAgICAgICAgIHZhbHVlID0gdGFyZ2V0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKEFraWxpLmpvaW5CaW5kaW5nS2V5cyhwYXJlbnRzKSAhPSBBa2lsaS5qb2luQmluZGluZ0tleXModmFsdWUuX19rZXlzKSkge1xuICAgICAgICAgICAgdmFsdWUgPSB0YXJnZXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvcihsZXQgayBpbiB0YXJnZXQpIHtcbiAgICAgICAgaWYgKCF0YXJnZXQuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2YWwgPSB0YXJnZXRba107XG4gICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrXSk7XG5cbiAgICAgICAgdGFyZ2V0W2tdID0gb2JzZXJ2ZSh2YWwsIGtleXMpO1xuICAgICAgfVxuXG4gICAgICBpZighdmFsdWUuX19pc1Byb3h5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fb2JzZXJ2ZSh0YXJnZXQsIHBhcmVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcblxuICAgIGxldCByZXMgPSBvYnNlcnZlKHZhbHVlLCBzdGFydEtleXMgfHwgW10pO1xuXG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IG51bGw7XG5cbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgaXNvbGF0aW9uIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHBhcmFtIHtib29sZWFufSBbaXNEZWxldGVkPWZhbHNlXVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGVJc29sYXRpb25PYmplY3QgKHBhcmVudHMsIGtleSwgaXNEZWxldGVkID0gZmFsc2UpIHtcbiAgICBsZXQga2V5cyA9IHBhcmVudHMubGVuZ3RoPyBbcGFyZW50c1swXV06IFtrZXldO1xuICAgIGxldCBpc29sYXRpb25LZXkgPSBgJHt0aGlzLl9fc2NvcGUuX19uYW1lfS4ke0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKX1gO1xuXG4gICAgaWYocGFyZW50cy5sZW5ndGgpIHtcbiAgICAgIGlzRGVsZXRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmKCFBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25LZXldKSB7XG4gICAgICBBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25LZXldID0ge1xuICAgICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICAgIGtleXM6IGtleXNcbiAgICAgIH07XG4gICAgfVxuXG4gICAgKGlzRGVsZXRlZCAhPT0gdW5kZWZpbmVkKSAmJiAoQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uS2V5XS5pc0RlbGV0ZWQgPSBpc0RlbGV0ZWQpO1xuICAgIEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV0udmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpO1xuXG4gICAgcmV0dXJuIEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV07XG4gIH07XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgdGhlIG5vZGUgdG8gYmluZGluZ1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gYmluZCAtIGJ5IGRlZmF1bHQgaXMgY29tcG9uZW50Ll9fZXZhbHVhdGlvbi5saXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW25vdEJpbmRpbmc9ZmFsc2VdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYmluZE5vZGUoYmluZCwga2V5cywgcGFyZW50cywgdmFsdWUsIG5vdEJpbmRpbmcgPSBmYWxzZSkge1xuICAgIGxldCBwYXJlbnRLZXlzU3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKHBhcmVudHMpO1xuXG4gICAgaWYoYmluZC5sZW5ndGggJiYgIW5vdEJpbmRpbmcpIHtcbiAgICAgIGxldCBsID0gYmluZC5sZW5ndGggLSAxO1xuICAgICAgbGV0IGRhdGEgPSBiaW5kW2xdO1xuXG4gICAgICBpZihkYXRhLmtleXNTdHJpbmcgPT0gcGFyZW50S2V5c1N0cmluZyAmJiBkYXRhLmNvbXBvbmVudCA9PT0gdGhpcykge1xuICAgICAgICBiaW5kLnNwbGljZShsLCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBiaW5kLnB1c2goe1xuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAga2V5c1N0cmluZzogQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpLFxuICAgICAgcGFyZW50czogcGFyZW50cyxcbiAgICAgIGtleXM6IGtleXMsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBub3RCaW5kaW5nOiBub3RCaW5kaW5nXG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBiaW5kaW5nIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0QmluZChrZXlzKSB7XG4gICAgcmV0dXJuIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncykgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYmluZGluZyBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRCb3VuZE5vZGUoa2V5cywgbm9kZSkge1xuICAgIGxldCBiaW5kID0gIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncyk7XG5cbiAgICBpZighYmluZCB8fCAhYmluZC5fX2RhdGEgfHwgIWJpbmQuX19kYXRhLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGJpbmQuX19kYXRhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGRhdGEgPSBiaW5kLl9fZGF0YVtpXTtcblxuICAgICAgaWYoZGF0YS5ub2RlID09PSBub2RlKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBub2RlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMsIHZhbHVlKSB7XG4gICAgbGV0IHByb3AgPSB0aGlzLl9fZ2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMpO1xuICAgIGxldCBjb3B5ID0gdXRpbHMuY29weSh2YWx1ZSk7XG5cbiAgICBpZihwcm9wKSB7XG4gICAgICBsZXQgcmVzID0gdXRpbHMuY29tcGFyZVByZXZpb3VzVmFsdWUodmFsdWUsIHByb3AudmFsdWUsIHByb3AuY29weSwgY29weSk7XG5cbiAgICAgIHByb3AudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHByb3AuY29weSA9IGNvcHk7XG5cbiAgICAgIHJldHVybiAhcmVzO1xuICAgIH1cblxuICAgIGxldCBoYXNoID0gYCR7dGhpcy5fX3Njb3BlLl9fbmFtZX0uJHtBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyl9YDtcblxuICAgIG5vZGUuX19wcm9wZXJ0aWVzW2hhc2hdID0ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgY29weTogY29weSxcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIGtleXM6IGtleXNcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG5vZGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKSB7XG4gICAgbGV0IGhhc2ggPSBgJHt0aGlzLl9fc2NvcGUuX19uYW1lfS4ke0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKX1gO1xuXG4gICAgcmV0dXJuIG5vZGUuX19wcm9wZXJ0aWVzW2hhc2hdIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIG5vZGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZWxldGVOb2RlUHJvcGVydHkobm9kZSwga2V5cykge1xuICAgIGxldCBoYXNoID0gYCR7dGhpcy5fX3Njb3BlLl9fbmFtZX0uJHtBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyl9YDtcblxuICAgIGRlbGV0ZSBub2RlLl9fcHJvcGVydGllc1toYXNoXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIGRhdGEgd2l0aCB0aGUga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYmluZChrZXlzLCBkYXRhKSB7XG4gICAgdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzLCAobGFzdCwgdmFsdWUpID0+IHtcbiAgICAgIGxldCBvYmogPSB7X19kYXRhOiBbXX07XG5cbiAgICAgIGlmKCFsYXN0KSB7XG4gICAgICAgIHJldHVybiB2YWx1ZT8gdmFsdWU6IG9iajtcbiAgICAgIH1cblxuICAgICAgaWYodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgICAgIG9iaiA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZighb2JqLl9fZGF0YSkge1xuICAgICAgICBvYmouX19kYXRhID0gW107XG4gICAgICB9XG5cbiAgICAgIG9iai5fX2RhdGEucHVzaChkYXRhKTtcblxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5iaW5kKGtleXMpIHtcbiAgICBsZXQgYmluZCA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncyk7XG5cbiAgICBpZighYmluZCB8fCAhYmluZC5fX2RhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gYmluZC5fX2RhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IGJpbmQuX19kYXRhW2ldLm5vZGU7XG5cbiAgICAgIHRoaXMuX19kZWxldGVOb2RlUHJvcGVydHkobm9kZSwga2V5cyk7XG4gICAgfVxuXG4gICAgdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzLCAodmFsdWUpID0+IHtcbiAgICAgIGlmKE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPiAxKSB7XG4gICAgICAgIHZhbHVlLl9fZGF0YSA9IFtdO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIGJ5IG5vZGVzXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZVtdfSBub2Rlc1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYmluZEJ5Tm9kZXMobm9kZXMpIHtcbiAgICBsZXQgdW5iaW5kID0gKG9iaikgPT4ge1xuICAgICAgZm9yKGxldCBrIGluIG9iaikge1xuICAgICAgICBpZighb2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZihrID09ICdfX2RhdGEnKSB7XG4gICAgICAgICAgbGV0IGRhdGEgPSBvYmpba10gfHwgW107XG4gICAgICAgICAgbGV0IGwgPSBkYXRhLmxlbmd0aDtcblxuICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBiaW5kID0gZGF0YVtpXTtcblxuICAgICAgICAgICAgaWYobm9kZXMuaW5kZXhPZihiaW5kLm5vZGUpICE9IC0xKSB7XG4gICAgICAgICAgICAgIGRhdGEuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgIGwtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZighbCkge1xuICAgICAgICAgICAgZGVsZXRlIG9ialtrXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdW5iaW5kKG9ialtrXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdW5iaW5kKHRoaXMuX19iaW5kaW5ncyk7XG4gICAgdGhpcy5fX2NsZWFyRW1wdHlCaW5kaW5ncygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCBlbXB0eSBiaW5kaW5nc1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gW29ial1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jbGVhckVtcHR5QmluZGluZ3Mob2JqKSB7XG4gICAgbGV0IGNsZWFyID0gKG9iaiwgcGFyZW50LCBrZXkpID0+IHtcbiAgICAgIGZvcihsZXQgayBpbiBvYmopIHtcbiAgICAgICAgaWYoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHZhbCA9IG9ialtrXTtcblxuICAgICAgICBpZihrID09ICdfX2RhdGEnICYmICghdmFsIHx8ICF2YWwubGVuZ3RoKSkge1xuICAgICAgICAgIGRlbGV0ZSBvYmpba107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihrICE9ICdfX2RhdGEnKSB7XG4gICAgICAgICAgaWYoIU9iamVjdC5rZXlzKG9ialtrXSkubGVuZ3RoKSB7XG4gICAgICAgICAgICBkZWxldGUgb2JqW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsZWFyKG9ialtrXSwgb2JqLCBrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoIU9iamVjdC5rZXlzKG9iaikubGVuZ3RoICYmIHBhcmVudCkge1xuICAgICAgICBkZWxldGUgcGFyZW50W2tleV07XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNsZWFyKG9iaiB8fCB0aGlzLl9fYmluZGluZ3MpXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBjaGlsZCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcmVtb3ZlQ2hpbGRyZW4oKSB7XG4gICAgbGV0IHJlbW92ZSA9IChjaGlsZHJlbikgPT4ge1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIHJlbW92ZShjaGlsZC5fX2FraWxpLl9fY2hpbGRyZW4pO1xuICAgICAgICBjaGlsZC5fX2FraWxpLl9fcmVtb3ZlKCk7XG4gICAgICAgIGktLTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVtb3ZlKHRoaXMuX19jaGlsZHJlbik7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBjb21wb25lbnQgd2l0aG91dCBjaGlsZHJlbiByZW1vdmluZ1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlbW92ZSgpIHtcbiAgICB0aGlzLl9fZGV0YWNoKCk7XG4gICAgdGhpcy5hdHRycy5vblJlbW92ZWQgJiYgdGhpcy5hdHRycy5vblJlbW92ZWQudHJpZ2dlcigpO1xuICAgIHRoaXMucmVtb3ZlZCgpO1xuICAgIEFraWxpLnJlbW92ZVNjb3BlKHRoaXMuX19zY29wZS5fX25hbWUpO1xuICAgIHRoaXMuZWwucmVtb3ZlKCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0YWNoIHRoZSBjb21wb25lbnRcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZXRhY2goKSB7XG4gICAgaWYodGhpcy5fX2V2YWx1YXRlUGFyZW50ICYmICF0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMpIHtcbiAgICAgIHRoaXMuX19ldmFsdWF0ZVBhcmVudC5fX2FraWxpLl9fdW5iaW5kQnlOb2RlcyhbXS5zbGljZS5jYWxsKHRoaXMuZWwuYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIGlmKHRoaXMuX19wYXJlbnQpIHtcbiAgICAgIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX3NwbGljZUNoaWxkKHRoaXMuZWwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGNvbXBvbmVudCB3aXRoIGNoaWxkcmVuXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVzdHJveSgpIHtcbiAgICB0aGlzLl9fcmVtb3ZlQ2hpbGRyZW4oKTtcbiAgICB0aGlzLl9fcmVtb3ZlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIGNvbXBvbmVudCBodG1sXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZW1wdHkoKSB7XG4gICAgbGV0IG5vZGVzID0gW107XG5cbiAgICB0aGlzLl9fcmVtb3ZlQ2hpbGRyZW4oKTtcblxuICAgIGxldCBmaW5kID0gKGNoaWxkcmVuKSA9PiB7XG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmKGNoaWxkLm5vZGVUeXBlID09IDMpIHtcbiAgICAgICAgICBub2Rlcy5wdXNoKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGNoaWxkLm5vZGVUeXBlID09IDEgJiYgIWNoaWxkLl9fYWtpbGkpIHtcbiAgICAgICAgICBmb3IgKGxldCBrID0gMCwgYXR0cnMgPSBjaGlsZC5hdHRyaWJ1dGVzLCBjID0gYXR0cnMubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICAgICAgICBub2Rlcy5wdXNoKGF0dHJzW2ldKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmaW5kKGNoaWxkLmNoaWxkTm9kZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZpbmQodGhpcy5lbC5jaGlsZE5vZGVzKTtcbiAgICB0aGlzLl9fdW5iaW5kQnlOb2Rlcyhub2Rlcyk7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcGFyZW50IGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldFBhcmVudChzZWxlY3RvciA9ICcnLCBmaW5kQWxsID0gZmFsc2UsIGxldmVscykge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBsZXQgbGV2ZWwgPSAwO1xuXG4gICAgaWYobGV2ZWxzICE9PSB1bmRlZmluZWQgJiYgIUFycmF5LmlzQXJyYXkobGV2ZWxzKSkge1xuICAgICAgbGV2ZWxzID0gW2xldmVsc107XG4gICAgfVxuXG4gICAgbGV0IGZpbmQgPSAocGFyZW50KSA9PiB7XG4gICAgICBpZighcGFyZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYoIWxldmVscyB8fCBsZXZlbHMuaW5kZXhPZihsZXZlbCkgIT0gLTEpIHtcbiAgICAgICAgaWYgKCFzZWxlY3RvciB8fCBwYXJlbnQuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIGlmICghZmluZEFsbCkge1xuICAgICAgICAgICAgYXJyLnB1c2gocGFyZW50Ll9fYWtpbGkpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYXJyLnB1c2gocGFyZW50Ll9fYWtpbGkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldmVsKys7XG4gICAgICBmaW5kKHBhcmVudC5fX2FraWxpLl9fcGFyZW50KTtcbiAgICB9O1xuXG4gICAgZmluZCh0aGlzLl9fcGFyZW50KTtcblxuICAgIHJldHVybiBmaW5kQWxsPyBhcnI6IChhcnJbMF0gfHwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNoaWxkIGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldENoaWxkcmVuKHNlbGVjdG9yID0gJycsIGZpbmRBbGwgPSB0cnVlLCBsZXZlbHMpIHtcbiAgICBsZXQgYXJyID0gW107XG4gICAgbGV0IGxldmVsID0gMDtcblxuICAgIGlmKGxldmVscyAhPT0gdW5kZWZpbmVkICYmICFBcnJheS5pc0FycmF5KGxldmVscykpIHtcbiAgICAgIGxldmVscyA9IFtsZXZlbHNdO1xuICAgIH1cblxuICAgIGxldCBmaW5kID0gKGNoaWxkcmVuKSA9PiB7XG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmKCFsZXZlbHMgfHwgbGV2ZWxzLmluZGV4T2YobGV2ZWwpICE9IC0xKSB7XG4gICAgICAgICAgaWYoIXNlbGVjdG9yIHx8IGNoaWxkLl9fYWtpbGkubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIGlmKCFmaW5kQWxsKSB7XG4gICAgICAgICAgICAgIGFyci5wdXNoKGNoaWxkLl9fYWtpbGkpO1xuXG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXJyLnB1c2goY2hpbGQuX19ha2lsaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldmVsKys7XG5cbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgZmluZChjaGlsZHJlbltpXS5fX2FraWxpLl9fY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmaW5kKHRoaXMuX19jaGlsZHJlbik7XG5cbiAgICByZXR1cm4gZmluZEFsbD8gYXJyOiAoYXJyWzBdIHx8IG51bGwpXG4gIH1cblxuICAvKipcbiAgICogR2V0IG5lYXJlc3QgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kQWxsPXRydWVdIC0gZ2V0IGFycmF5IGlmIHRydWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbcmlnaHQ9ZmFsc2VdIC0gZnJvbSB0aGUgcmlnaHQgc2lkZSBpZiB0cnVlXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0TmVhcihzZWxlY3RvciA9ICcnLCBmaW5kQWxsID0gdHJ1ZSwgcmlnaHQgPSBmYWxzZSkge1xuICAgIGlmKCF0aGlzLl9fcGFyZW50KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgbGV2ZWxFbGVtZW50cyA9IHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2NoaWxkcmVuLnNsaWNlKCk7XG4gICAgbGV0IGFyciA9IFtdO1xuXG4gICAgcmlnaHQgJiYgbGV2ZWxFbGVtZW50cy5yZXZlcnNlKCk7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gbGV2ZWxFbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBlbCA9IGxldmVsRWxlbWVudHNbaV07XG5cbiAgICAgIGlmKGVsID09PSB0aGlzLmVsKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZighc2VsZWN0b3IgfHwgZWwuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBhcnIucHVzaChlbC5fX2FraWxpKVxuICAgICAgfVxuICAgIH1cblxuICAgIGFyci5yZXZlcnNlKCk7XG5cbiAgICBpZighZmluZEFsbCkge1xuICAgICAgcmV0dXJuIGFyci5sZW5ndGg/IGFyclswXTogbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBjb21wb25lbnQgbWF0Y2hlcyBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gc2VsZWN0b3JcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBtYXRjaGVzKHNlbGVjdG9yKSB7XG4gICAgaWYodHlwZW9mIHNlbGVjdG9yID09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBzZWxlY3Rvcih0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5lbC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBwYXJlbnQgY29tcG9uZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgcGFyZW50KHNlbGVjdG9yID0gJycsIGxldmVscykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0UGFyZW50KHNlbGVjdG9yLCBmYWxzZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgcGFyZW50IGNvbXBvbmVudHMgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHNdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIHBhcmVudHMoc2VsZWN0b3IgPSAnJywgbGV2ZWxzKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRQYXJlbnQoc2VsZWN0b3IsIHRydWUsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNsb3Nlc3QgY2hpbGQgY29tcG9uZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgY2hpbGQoc2VsZWN0b3IgPSAnJywgbGV2ZWxzKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRDaGlsZHJlbihzZWxlY3RvciwgZmFsc2UsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFycmF5IG9mIGNoaWxkIGNvbXBvbmVudHMgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHNdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGNoaWxkcmVuKHNlbGVjdG9yID0gJycsIGxldmVscykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0Q2hpbGRyZW4oc2VsZWN0b3IsIHRydWUsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFycmF5IG9mIGNvbXBvbmVudHMgbGVmdCBmcm9tIHRoZSBjdXJyZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGJlZm9yZShzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCB0cnVlLCBmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFycmF5IG9mIGNvbXBvbmVudHMgcmlnaHQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBhZnRlcihzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCB0cnVlLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBjb21wb25lbnQgbGVmdCBmcm9tIHRoZSBjdXJyZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR9XG4gICAqL1xuICBwcmV2KHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIGZhbHNlLCBmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNsb3Nlc3QgY29tcG9uZW50IHJpZ2h0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIG5leHQoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgZmFsc2UsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBlbGVtZW50IHBhcmVudFxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRcbiAgICovXG4gIGFwcGVuZFRvKHBhcmVudCkge1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcblxuICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbmNlbCBjb21wb25lbnQgY29tcGlsYXRpb25cbiAgICovXG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBlbGVtZW50IGh0bWxcbiAgICpcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBlbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2VtcHR5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGVsZW1lbnRcbiAgICpcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICByZW1vdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19kZXN0cm95LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjcmVhdGVkKCkge31cbiAgY29tcGlsZWQoKSB7fVxuICByZWNvbXBpbGVkKCkge31cbiAgY2hhbmdlZChrZXksIHZhbHVlKSB7fVxuICByZXNvbHZlZCgpIHt9XG4gIHJlbW92ZWQoKSB7fVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50LmpzIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXIuanMnXG5cbmNvbnN0IHV0aWxzID0ge307XG5cbi8qKlxuICogQ3JlYXRlIGNsYXNzIGF0dHJpYnV0ZSBmcm9tIGFuIG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwicmVkIGFjdGl2ZVwiXG4gKiB1dGlscy5jbGFzcyh7cmVkOiB0cnVlLCBhY3RpdmU6IHRydWUsIGdyZWVuOiBmYWxzZX0pO1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmNsYXNzID0gZnVuY3Rpb24gKG9iaikge1xuICBpZighb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgbGV0IGNsYXNzZXMgPSBbXTtcblxuICBmb3IobGV0IGsgaW4gb2JqKSB7XG4gICAgaWYoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgbGV0IHZhbCA9IG9ialtrXTtcblxuICAgIHZhbCAmJiBjbGFzc2VzLnB1c2goayk7XG4gIH1cblxuICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBzdHlsZSBhdHRyaWJ1dGUgZnJvbSBhbiBvYmplY3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcImNvbG9yOnJlZDt3aWR0aDoxMHB4XCJcbiAqIHV0aWxzLnN0eWxlKHtjb2xvcjogXCJyZWRcIiwgYmFja2dyb3VuZDogZmFsc2UsIHdpZHRoOiBcIjEwcHhcIn0pO1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnN0eWxlID0gZnVuY3Rpb24ob2JqKSB7XG4gIGlmKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBsZXQgc3R5bGVzID0gW107XG5cbiAgZm9yKGxldCBrIGluIG9iaikge1xuICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGxldCB2YWwgPSBvYmpba107XG5cbiAgICB2YWwgJiYgc3R5bGVzLnB1c2goYCR7dGhpcy50b0Rhc2hDYXNlKGspfToke3ZhbH1gKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZXMuam9pbignOycpO1xufTtcblxuLyoqXG4gKiBGaWx0ZXIgYW4gYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMSwgMTFdXG4gKiB1dGlscy5maWx0ZXIoWzEsIDIsIDMsIDExXSwgJzEnKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6MX0sIHt4OjExfV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6MX0sIHt4OjJ9LCB7eDozfSwge3g6MTF9XSwgJzEnLCBbJ3gnXSk7XG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0ge3N0cmluZ3xSZWdFeHB8ZnVuY3Rpb259IGhhbmRsZXIgLSB0eXBlIG9mIGZpbHRlcmluZ1xuICogQHBhcmFtIHtzdHJpbmdbXXxzdHJpbmd9IFtrZXlzXSAtIGZpbHRlciBpbiB0aGUga2V5cyBpZiBhcnJheSBlbGVtZW50cyBhcmUgb2JqZWN0XG4gKiBAcmV0dXJucyB7QXJyYXl9IC0gcmV0dXJucyBvdGhlciBhcnJheVxuICovXG51dGlscy5maWx0ZXIgPSBmdW5jdGlvbiAoYXJyLCBoYW5kbGVyLCBrZXlzID0gW10pIHtcbiAgbGV0IHJlcyA9IFtdO1xuXG4gIGlmKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAga2V5cyA9IFtrZXlzXTtcbiAgfVxuXG4gIGlmKCFoYW5kbGVyKSB7XG4gICAgcmV0dXJuIFsuLi5hcnJdO1xuICB9XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgaXRlbSA9IGFycltpXTtcbiAgICBsZXQgdmFsID0ga2V5cy5sZW5ndGg/IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgaXRlbSk6IGl0ZW07XG5cbiAgICBpZighdmFsKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YWwgKz0gJyc7XG5cbiAgICBpZigodHlwZW9mIGhhbmRsZXIgPT0gJ2Z1bmN0aW9uJykgJiYgaGFuZGxlcihpdGVtKSkge1xuICAgICAgcmVzLnB1c2goaXRlbSk7XG4gICAgfVxuICAgIGVsc2UgaWYodmFsLm1hdGNoKGhhbmRsZXIgfHwgJycpKSB7XG4gICAgICByZXMucHVzaChpdGVtKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBPcmRlciBhbiBhcnJheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsxLCAyLCAzXVxuICogdXRpbHMuc29ydChbMywgMiwgMV0sIHRydWUpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFszLCAyLCAxXVxuICogdXRpbHMuc29ydChbMSwgMiwgM10sIGZhbHNlKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCBbWyd4J11dLCBbdHJ1ZV0pO1xuICogdXRpbHMuc29ydChbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV0sIFsneCddLCB0cnVlKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCAneCcpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogM30sIHt4OiAyfSwge3g6IDF9XVxuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sIFtbJ3gnXV0sIFtmYWxzZV0pO1xuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sIFsneCddLCBmYWxzZSk7XG4gKiB1dGlscy5zb3J0KFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XSwgJ3gnLCBmYWxzZSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxLCB5OiAzfSwge3g6IDIsIHk6IDF9LCB7eDoyLCB5OiAyfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAyLCB5OiAyfSwge3g6IDIsIHk6IDF9LCB7eDogMiwgeTogM31dLCBbWyd4J10sIFsneSddXSwgW3RydWUsIHRydWVdKTtcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7Ym9vbGVhbnxBcnJheVtdfHN0cmluZ1tdfHN0cmluZ30gW2tleXNdXG4gKiBAcGFyYW0ge2Jvb2xlYW58Ym9vbGVhbltdfSBbb3JkZXJdIC0gcmV2ZXJzZSBvciBub3RcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xudXRpbHMuc29ydCA9IGZ1bmN0aW9uKGFyciwga2V5cyA9IHRydWUsIG9yZGVyID0gW10pIHtcbiAgYXJyID0gWy4uLmFycl07XG5cbiAgaWYoa2V5cyA9PT0gdHJ1ZSkge1xuICAgIGtleXMgPSBbXTtcbiAgICBvcmRlciA9IFt0cnVlXTtcbiAgfVxuICBlbHNlIGlmKGtleXMgPT09IGZhbHNlKSB7XG4gICAga2V5cyA9IFtdO1xuICAgIG9yZGVyID0gW2ZhbHNlXTtcbiAgfVxuXG4gIGlmKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAga2V5cyA9IFtrZXlzXTtcbiAgfVxuXG4gIGlmKCFBcnJheS5pc0FycmF5KG9yZGVyKSkge1xuICAgIG9yZGVyID0gW29yZGVyXTtcbiAgfVxuXG4gIGxldCBsID0ga2V5cy5sZW5ndGg7XG5cbiAgYXJyLnNvcnQoKGEsIGIpID0+IHtcbiAgICBsZXQgaSA9IDA7XG5cbiAgICBsZXQgY2hlY2sgPSAoYSwgYiwgcmV2ZXJzZSA9IGZhbHNlKSA9PiB7XG4gICAgICBpZihhIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBhID0gYS5nZXRUaW1lKCk7XG4gICAgICB9XG5cbiAgICAgIGlmKGIgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIGIgPSBiLmdldFRpbWUoKTtcbiAgICAgIH1cblxuICAgICAgaWYoYSA+IGIpIHtcbiAgICAgICAgcmV0dXJuIHJldmVyc2U/IC0xOiAxO1xuICAgICAgfVxuICAgICAgZWxzZSBpZihhIDwgYikge1xuICAgICAgICByZXR1cm4gcmV2ZXJzZT8gMTogLTE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAwO1xuICAgIH07XG5cbiAgICBsZXQgbmV4dCA9ICgpID0+IHtcbiAgICAgIGlmKGkgPj0gbCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cblxuICAgICAgbGV0IGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmKCFBcnJheS5pc0FycmF5KGtleSkpIHtcbiAgICAgICAga2V5ID0gW2tleV07XG4gICAgICB9XG5cbiAgICAgIGxldCBhViA9IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5LCBhKTtcbiAgICAgIGxldCBiViA9IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5LCBiKTtcbiAgICAgIGxldCByZXMgPSBjaGVjayhhViwgYlYsIG9yZGVyW2ldID09PSBmYWxzZSk7XG5cbiAgICAgIGlmKHJlcyAhPT0gMCkge1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfVxuXG4gICAgICBpKys7XG5cbiAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgfTtcblxuICAgIGlmKCFsKSB7XG4gICAgICByZXR1cm4gY2hlY2soYSwgYiwgb3JkZXJbaV0gPT09IGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dCgpO1xuICB9KTtcblxuICByZXR1cm4gYXJyO1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgdmFsdWUgaXMgY29tcG9uZW50IHNjb3BlIHByb3h5IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaXNTY29wZVByb3h5ID0gZnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiAhISh2YWwgJiYgdHlwZW9mIHZhbCA9PSAnb2JqZWN0JyAmJiB2YWwuX19pc1Byb3h5KTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIHZhbHVlIGlzIHBsYWluIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaXNQbGFpbk9iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuICByZXR1cm4gISEob2JqICYmIHR5cGVvZiBvYmogPT0gJ29iamVjdCcgJiYgKG9iai5jb25zdHJ1Y3RvciA9PSBPYmplY3QgfHwgb2JqLmNvbnN0cnVjdG9yID09IEFycmF5KSk7XG59O1xuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHBhcmFtIHtib29sZWFufSBbbmVzdGVkPXRydWVdIC0gZGVlcCBjb3B5IGlmIGlzIHRydWVcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5jb3B5ID0gZnVuY3Rpb24odmFsdWUsIG5lc3RlZCA9IHRydWUpIHtcbiAgaWYodHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8ICF2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5leHQob2JqKSB7XG4gICAgb2JqID0gQXJyYXkuaXNBcnJheShvYmopPyBbLi4ub2JqXTogey4uLm9ian07XG5cbiAgICBpZighbmVzdGVkKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGZvcihsZXQgayBpbiBvYmopIHtcbiAgICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmKG9ialtrXSAmJiB0eXBlb2Ygb2JqW2tdID09ICdvYmplY3QnKSB7XG4gICAgICAgIG9ialtrXSA9IG5leHQob2JqW2tdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgcmV0dXJuIG5leHQodmFsdWUpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2UgdGhlIHZhbHVlIHRvIGF0dHJpYnV0ZSBhcHByb3ByaWF0ZSBmb3JtYXRcbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgaWYodmFsdWUgPT09IGZhbHNlIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZih2YWx1ZSBpbnN0YW5jZW9mIEV2ZW50RW1pdHRlcikge1xuICAgIHJldHVybiAnW29iamVjdCBFdmVudF0nO1xuICB9XG5cbiAgaWYodHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgfVxuXG4gIGlmKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlICsgJyc7XG59O1xuXG4vKipcbiAqIENvbXBhcmUgdHdvIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7Kn0gYVxuICogQHBhcmFtIHsqfSBiXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuY29tcGFyZSA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gIGlmKChhIGluc3RhbmNlb2YgRGF0ZSkgJiYgKGIgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgIHJldHVybiBhLmdldFRpbWUoKSA9PT0gYi5nZXRUaW1lKCk7XG4gIH1cbiAgaWYodHlwZW9mIGEgPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgYiA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGEudG9TdHJpbmcoKSA9PT0gYi50b1N0cmluZygpO1xuICB9XG4gIGVsc2UgaWYodHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT0gJ29iamVjdCcpIHtcbiAgICBpZihhID09PSBudWxsIHx8IGIgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBhID09PSBiO1xuICAgIH1cblxuICAgIGlmKE9iamVjdC5rZXlzKGEpLmxlbmd0aCAhPSBPYmplY3Qua2V5cyhiKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IobGV0IGsgaW4gYSkge1xuICAgICAgaWYoIWEuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmKCF0aGlzLmNvbXBhcmUoYVtrXSwgYltrXSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGEgPT09IGI7XG59O1xuXG4vKipcbiAqIENvbXBhcmUgY3VycmVudCB2YWx1ZSB3aXRoIHByZXZpb3VzXG4gKlxuICogQHBhcmFtIHsqfSBjdXJyZW50IC0gdGhlIGN1cnJlbnQgdmFsdWVcbiAqIEBwYXJhbSB7Kn0gcHJldmlvdXMgLSB0aGUgY3VycmVudCB2YWx1ZSBjb3B5XG4gKiBAcGFyYW0geyp9IHByZXZpb3VzQ29weSAtIHRoZSBwcmV2aW91cyB2YWx1ZSBjb3B5XG4gKiBAcGFyYW0geyp9IFtjdXJyZW50Q29weV0gLSB0aGUgY3VycmVudCB2YWx1ZSBjb3B5XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuY29tcGFyZVByZXZpb3VzVmFsdWUgPSBmdW5jdGlvbihjdXJyZW50LCBwcmV2aW91cywgcHJldmlvdXNDb3B5LCBjdXJyZW50Q29weSkge1xuICBpZihjdXJyZW50ICE9PSBwcmV2aW91cykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmNvbXBhcmUoYXJndW1lbnRzLmxlbmd0aCA9PSAzPyBjdXJyZW50Q29weTogdGhpcy5jb3B5KGN1cnJlbnQpLCBwcmV2aW91c0NvcHkpO1xufTtcblxuLyoqXG4gKiBFbmNvZGUgaHRtbCBlbnRpdGllc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwieW91ICZhbXAgbWVcIlxuICogdXRpbHMuZW5jb2RlSHRtbEVudGl0aWVzKCd5b3UgJiBtZScpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBodG1sXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5lbmNvZGVIdG1sRW50aXRpZXMgPSBmdW5jdGlvbihodG1sKSB7XG4gIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB2YWx1ZTtcblxuICBlbC50ZXh0Q29udGVudCA9IGh0bWw7XG4gIHZhbHVlID0gZWwuaW5uZXJIVE1MO1xuICBlbC5yZW1vdmUoKTtcbiAgZWwgPSBudWxsO1xuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbi8qKlxuICogRGVjb2RlIGh0bWwgZW50aXRpZXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcInlvdSAmIG1lXCJcbiAqIHV0aWxzLmRlY29kZUh0bWxFbnRpdGllcygneW91ICZhbXAgbWUnKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuZGVjb2RlSHRtbEVudGl0aWVzID0gZnVuY3Rpb24oaHRtbCkge1xuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGxldCB2YWx1ZTtcblxuICBlbC5pbm5lckhUTUwgPSBodG1sO1xuICB2YWx1ZSA9IGVsLnZhbHVlO1xuICBlbC5yZW1vdmUoKTtcbiAgZWwgPSBudWxsO1xuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHN0cmluZyBmcm9tIGRhc2ggdG8gY2FtZWwgY2FzZSBmb3JtYXRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy50b0NhbWVsQ2FzZSA9IGZ1bmN0aW9uKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcVysoLikvZywgKG0sIGMpID0+IGMudG9VcHBlckNhc2UoKSk7XG59O1xuXG4vKipcbiAqIENoYW5nZSBzdHJpbmcgZnJvbSBjYW1lbCB0byBkYXNoIGNhc2UgZm9ybWF0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMudG9EYXNoQ2FzZSA9IGZ1bmN0aW9uKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgKG0sIGMpID0+IGAtJHtjLnRvTG93ZXJDYXNlKCl9YCk7XG59O1xuXG4vKipcbiAqIEdldCBuZXN0ZWQgb2JqZWN0IHByb3BlcnR5IGJ5IGFycmF5IGtleXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyA1XG4gKiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmdldFByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0KSB7XG4gIGxldCBjdXJyZW50O1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZShmdW5jdGlvbihvLCBrKSB7XG4gICAgaSsrO1xuXG4gICAgaWYodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBvO1xuICAgIH1cblxuICAgIGlmKG9ba10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIChpID09IGxlbmd0aCkgJiYgKGN1cnJlbnQgPSBvW2tdKTtcbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gY3VycmVudDtcbn07XG5cbi8qKlxuICogQ2hlY2sgbmVzdGVkIG9iamVjdHMgdHJlZSBoYXMgcHJvcGVydHkgb3Igbm90XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgdHJ1ZVxuICogdXRpbHMuaGFzUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCkge1xuICBsZXQgaGFzID0gZmFsc2U7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKGZ1bmN0aW9uKG8sIGspIHtcbiAgICBpKys7XG5cbiAgICBpZih0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuICEhbztcbiAgICB9XG5cbiAgICBpZighby5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIChpID09IGxlbmd0aCkgJiYgKGhhcyA9IG8uaGFzT3duUHJvcGVydHkoaykpO1xuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiBoYXM7XG59O1xuXG4vKipcbiAqIFNldCBuZXN0ZWQgb2JqZWN0cyB0cmVlIHByb3BlcnR5XG4gKiBSZXR1cm5zIGNoYW5nZWQgcHJvcGVydHkgb2JqZWN0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMge3k6IDZ9XG4gKiB1dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSwgKGxhc3QsIHZhbCkgPT4gbGFzdD8gNjogKHZhbCB8fCB7fSkpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuc2V0UHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QsIGZuKSB7XG4gIGxldCBjdXJyZW50ID0gdW5kZWZpbmVkO1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZShmdW5jdGlvbihvLCBrKSB7XG4gICAgaSsrO1xuXG4gICAgaWYodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZighby5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgcmV0dXJuIGN1cnJlbnQgPSBvW2tdID0gZm4oaSA9PSBsZW5ndGgpO1xuICAgIH1cblxuICAgIG9ba10gPSBmbihpID09IGxlbmd0aCwgb1trXSk7XG4gICAgY3VycmVudCA9IG87XG5cbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gY3VycmVudDtcbn07XG5cbi8qKlxuICpcbiAqIERlbGV0ZSBwcm9wZXJ0eSBmcm9tIG5lc3RlZCBvYmplY3RzIHRyZWVcbiAqIFJldHVybnMgZGVsZXRlZCBwcm9wZXJ0eSB2YWx1ZVxuICogWW91IGNhbiBjYW5jZWwgZGVsZXRpbmcgaWYgd2lsbCByZXR1cm4gZmFsc2UgaW4gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIDVcbiAqIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19LCB2YWwgPT4gdmFsICE9IDUpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtmbl1cbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCwgZm4pIHtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgdmFsdWU7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZShmdW5jdGlvbihvLCBrKSB7XG4gICAgaSsrO1xuXG4gICAgaWYodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZighby5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGlmKGkgPT0gbGVuZ3RoKSB7XG4gICAgICB2YWx1ZSA9IG9ba107XG5cbiAgICAgIGlmKCFmbiB8fCBmbih2YWx1ZSkpIHtcbiAgICAgICAgZGVsZXRlIG9ba107XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IHRhcmdldCBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5cbnV0aWxzLmdldEVudW1lcmFibGVQcm9wZXJ0eVRhcmdldCA9IGZ1bmN0aW9uKHRhcmdldCwga2V5KSB7XG4gIGxldCBjaGVjayA9IChvYmopID0+IHtcbiAgICBpZihvYmoucHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBsZXQgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcblxuICAgIGlmKCFwcm90bykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoZWNrKHByb3RvKTtcbiAgfTtcblxuICByZXR1cm4gY2hlY2sodGFyZ2V0KTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBvd24gcHJvcGVydHkgdGFyZ2V0IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnV0aWxzLmdldE93blByb3BlcnR5VGFyZ2V0ID0gZnVuY3Rpb24odGFyZ2V0LCBrZXkpIHtcbiAgbGV0IGNoZWNrID0gKG9iaikgPT4ge1xuICAgIGlmKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGxldCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuXG4gICAgaWYoIXByb3RvKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hlY2socHJvdG8pO1xuICB9O1xuXG4gIHJldHVybiBjaGVjayh0YXJnZXQpO1xufTtcblxuLyoqXG4gKiBDbGVhciB2YWx1ZSBwcm94eSBpZiBpdCBleGlzdGVudFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5jbGVhclNjb3BlUHJveHkgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYodHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8ICF2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGxldCBjbGVhciA9IChvYmopID0+IHtcbiAgICBmb3IobGV0IGsgaW4gb2JqKSB7XG4gICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYob2JqW2tdICYmIHR5cGVvZiBvYmpba10gPT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYob2JqW2tdLl9faXNQcm94eSkge1xuICAgICAgICAgIG9ialtrXSA9IG9ialtrXS5fX3RhcmdldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsZWFyKG9ialtrXSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGlmKHZhbHVlLl9faXNQcm94eSkge1xuICAgIHZhbHVlID0gdmFsdWUuX190YXJnZXQ7XG4gIH1cblxuICBjbGVhcih2YWx1ZSk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuXG4vKipcbiAqIEdlbmVyYXRlIHJhbmRvbSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmNyZWF0ZVJhbmRvbVN0cmluZyA9IGZ1bmN0aW9uKGxlbmd0aCA9IDE2LCBmbiA9IG51bGwpIHtcbiAgbGV0IHN0ciA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCBsZW5ndGggKyAyKTtcbiAgbGV0IHZhbCA9ICcnO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBzdHIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYoTWF0aC5yYW5kb20oKSA+IDAuNjYpIHtcbiAgICAgIHZhbCArPSBzdHJbaV0udG9VcHBlckNhc2UoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YWwgKz0gc3RyW2ldO1xuICAgIH1cbiAgfVxuXG4gIGlmKGZuICYmIGZuKHZhbCkpIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVSYW5kb21TdHJpbmcobGVuZ3RoLCBmbik7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXRpbHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzLmpzIiwiaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xuICBjb25zdHJ1Y3RvcihiYXNlVXJsLCBkZWZhdWx0cykge1xuICAgIHRoaXMuYmFzZVVybCA9IGJhc2VVcmw/IChiYXNlVXJsLnJlcGxhY2UoL1xcLyQvLCAnJykgKyAnLycpOiAnJztcblxuICAgIHRoaXMuZGVmYXVsdHMgPSB7XG4gICAgICBzdGF0dXNFcnJvcnNQYXR0ZXJuOiAvXihbXjIzXSl8NDA0LyxcbiAgICAgIC4uLihkZWZhdWx0cyB8fCB7fSlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgcmVxdWVzdCB3aXRoIGFueSBtZXRob2RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBxdWVyeShvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCB1cmw7XG4gICAgICBsZXQgeGhyO1xuXG4gICAgICBvcHRpb25zID0gey4uLnRoaXMuZGVmYXVsdHMsIC4uLihvcHRpb25zIHx8IHt9KX07XG5cbiAgICAgIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgKHR5cGVvZiBvcHRpb25zLm9uU3RhcnQgPT0gJ2Z1bmN0aW9uJykgJiYgb3B0aW9ucy5vblN0YXJ0KHhocik7XG4gICAgICBvcHRpb25zID0gdGhpcy50cmFuc2Zvcm1CZWZvcmUob3B0aW9ucyk7XG4gICAgICB1cmwgPSB0aGlzLmJhc2VVcmw/IGAke3RoaXMuYmFzZVVybH0ke29wdGlvbnMudXJsLnJlcGxhY2UoL15cXC8vLCAnJyl9YDogb3B0aW9ucy51cmw7XG4gICAgICB4aHIub3BlbihvcHRpb25zLm1ldGhvZCwgdXJsLCB0cnVlLCBvcHRpb25zLnVzZXIsIG9wdGlvbnMucGFzc3dvcmQpO1xuICAgICAgb3B0aW9ucy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzIHx8IHt9O1xuXG4gICAgICBpZihvcHRpb25zLmpzb24pIHtcbiAgICAgICAgb3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5qc29uKTtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzWydjb250ZW50LXR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgb3B0aW9ucy5yZXNwb25zZVR5cGUgPSBvcHRpb25zLnJlc3BvbnNlVHlwZSB8fCAnanNvbic7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKG9wdGlvbnMuZm9ybSkge1xuICAgICAgICBvcHRpb25zLmJvZHkgPSB0aGlzLmNyZWF0ZUZvcm1EYXRhKG9wdGlvbnMuZm9ybSk7XG4gICAgICAgIG9wdGlvbnMuaGVhZGVyc1snY29udGVudC10eXBlJ10gPSAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc7XG4gICAgICB9XG5cbiAgICAgIGlmKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ3RpbWVvdXQnKSkge1xuICAgICAgICB4aHIudGltZW91dCA9IG9wdGlvbnMudGltZW91dDtcbiAgICAgIH1cblxuICAgICAgaWYob3B0aW9ucy5yZXNwb25zZVR5cGUpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlO1xuICAgICAgfVxuXG4gICAgICBpZihvcHRpb25zLndpdGhDcmVkZW50aWFscykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gb3B0aW9ucy53aXRoQ3JlZGVudGlhbHM7XG4gICAgICB9XG5cbiAgICAgIGlmKG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICBmb3IobGV0IGsgaW4gb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgICAgaWYoIW9wdGlvbnMuaGVhZGVycy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaywgb3B0aW9ucy5oZWFkZXJzW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZihvcHRpb25zLnBhcmFtcykge1xuICAgICAgICBsZXQgc3RyID0gdGhpcy5wYXJhbXNUb1F1ZXJ5KG9wdGlvbnMucGFyYW1zKTtcblxuICAgICAgICBpZihzdHIpIHtcbiAgICAgICAgICB1cmwgKz0gXCI/XCIgKyBzdHI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYodHlwZW9mIG9wdGlvbnMub25Qcm9ncmVzcyA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHhoci5vbnByb2dyZXNzID0gKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBvcHRpb25zLm9uUHJvZ3Jlc3MoeGhyKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gdGhpcy50cmFuc2Zvcm1BZnRlcih4aHIpO1xuXG4gICAgICAgIGlmKCh4aHIuc3RhdHVzICsgJycpLm1hdGNoKG9wdGlvbnMuc3RhdHVzRXJyb3JzUGF0dGVybikpIHtcbiAgICAgICAgICBsZXQgZXJyID0gbmV3IEVycm9yKGBSZXF1ZXN0IHRvIFwiJHt1cmx9XCIgcmV0dXJucyBmYWlsdXJlIHN0YXR1cyBjb2RlICR7eGhyLnN0YXR1c31gKTtcblxuICAgICAgICAgIGVyci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuXG4gICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9O1xuXG4gICAgICB4aHIudGltZW91dCA9ICgpID0+IHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgUmVxdWVzdCB0byBcIiR7dXJsfVwiIHRpbWVkIG91dGApKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbmVycm9yID0gKGVycikgPT4ge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5zZW5kKG9wdGlvbnMuYm9keSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBvYmplY3QgdG8gcXVlcnkgc3RyaW5nXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHBhcmFtc1RvUXVlcnkob2JqKSB7XG4gICAgbGV0IHNlcCA9ICcmJztcbiAgICBsZXQgZXEgPSAnPSc7XG5cbiAgICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLm1hcCgoaykgPT4ge1xuICAgICAgbGV0IGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KGspO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmpba10pKSB7XG4gICAgICAgIGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KGspO1xuXG4gICAgICAgIHJldHVybiBvYmpba10ubWFwKCh2LCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGtzICsgYFske2l9XWAgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudCh2KTtcbiAgICAgICAgfSkuam9pbihzZXApO1xuICAgICAgfVxuICAgICAgZWxzZSBpZihvYmpba10gJiYgdHlwZW9mIG9ialtrXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbGV0IG9wdCA9IFtdO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKG9ialtrXSkubWFwKChrZXkpID0+IHtcbiAgICAgICAgICBvcHQucHVzaChrcyArIGBbJHtrZXl9XWAgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba11ba2V5XSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gb3B0LmpvaW4oc2VwKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4ga3MgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba10pO1xuICAgICAgfVxuICAgIH0pLmpvaW4oc2VwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHF1ZXJ5IHN0cmluZyB0byBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgcGFyYW1zRnJvbVF1ZXJ5KHN0cikge1xuICAgIGxldCBxdWVyeSA9IHt9O1xuICAgIGxldCBhbXBzID0gc3RyLnNwbGl0KCcmJyk7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gYW1wcy5sZW5ndGg7IGkgPGw7IGkrKykge1xuICAgICAgbGV0IGVxcyA9ICBhbXBzW2ldLnNwbGl0KCc9Jyk7XG4gICAgICBsZXQga2V5ID0gZGVjb2RlVVJJQ29tcG9uZW50KGVxc1swXSk7XG4gICAgICBsZXQgdmFsID0gZGVjb2RlVVJJQ29tcG9uZW50KGVxc1sxXSk7XG5cbiAgICAgIGlmKCFrZXkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgICAgcXVlcnlba2V5XS5wdXNoKHZhbCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKHF1ZXJ5W2tleV0pIHtcbiAgICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldLCB2YWxdO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHF1ZXJ5W2tleV0gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBtdWx0aXBhcnQgZm9ybSBkYXRhIGZyb20gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICogQHBhcmFtIHtGb3JtRGF0YX0gW2RhdGFdXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbmFtZXNwYWNlXVxuICAgKlxuICAgKiBAcmV0dXJucyB7Rm9ybURhdGF9XG4gICAqL1xuICBjcmVhdGVGb3JtRGF0YShvYmosIGRhdGEgPSBudWxsLCBuYW1lc3BhY2UgPSAnJykge1xuICAgIGxldCBmZCA9IGRhdGEgfHwgbmV3IEZvcm1EYXRhKCk7XG5cbiAgICBmb3IobGV0IGsgaW4gb2JqKSB7XG4gICAgICBpZihvYmouaGFzT3duUHJvcGVydHkoaykgJiYgb2JqW2tdKSB7XG4gICAgICAgIGxldCBrZXkgPSBuYW1lc3BhY2U/IG5hbWVzcGFjZSArICdbJyArIGsgKyAnXSc6IGs7XG5cbiAgICAgICAgaWYgKG9ialtrXSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICBmZC5hcHBlbmQoa2V5LCBvYmpba10udG9JU09TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodXRpbHMuaXNQbGFpbk9iamVjdChvYmpba10pKSB7XG4gICAgICAgICAgdGhpcy5jcmVhdGVGb3JtRGF0YShvYmpba10sIGZkLCBrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGZkLmFwcGVuZChrZXksIG9ialtrXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmQ7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIGRhdGEgYmVmb3JlIGEgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgdHJhbnNmb3JtQmVmb3JlKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gZGF0YSBhZnRlciBhIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtYTUxIdHRwUmVxdWVzdH0geGhyXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICB0cmFuc2Zvcm1BZnRlcih4aHIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeGhyOiB4aHIsXG4gICAgICBkYXRhOiB4aHIucmVzcG9uc2UsXG4gICAgICBzdGF0dXM6IHhoci5zdGF0dXNcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIEdFVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBnZXQodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdHRVQnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgREVMRVRFIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGRlbGV0ZSh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ0RFTEVURSc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBQT1NUIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHBvc3QodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQT1NUJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIFBVVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBwdXQodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQVVQnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgUEFUQ0ggcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcGF0Y2godXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQQVRDSCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoKTtcblxucmVxdWVzdC5fX2luc3RhbmNlcyA9IHt9O1xuXG4vKipcbiAqIEFkZCBuZXcgcmVxdWVzdCBpbnN0YW5jZSB0byB0aGUgbWFpbiBzZXJ2aWNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7UmVxdWVzdH0gaW5zdGFuY2VcbiAqL1xucmVxdWVzdC5hZGRJbnN0YW5jZSA9IGZ1bmN0aW9uKG5hbWUsIGluc3RhbmNlKSB7XG4gIHRoaXMuX19pbnN0YW5jZXNbbmFtZV0gPSBpbnN0YW5jZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGluc3RhbmNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucmVxdWVzdC5yZW1vdmVJbnN0YW5jZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZGVsZXRlIHRoaXMuX19pbnN0YW5jZXNbbmFtZV07XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWVzdCwgJ3VzZScsIHtcbiAgZ2V0OiAoKSA9PiB7XG4gICAgcmV0dXJuIHJlcXVlc3QuX19pbnN0YW5jZXM7XG4gIH1cbn0pO1xuXG5yZXF1ZXN0LlJlcXVlc3QgPSBSZXF1ZXN0O1xuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvcmVxdWVzdC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMudmFsdWVLZXkgPSAndmFsdWUnO1xuICB9XG5cbiAgY2hhbmdlZFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBjaGFuZ2VkRm9jdXModmFsdWUpIHtcbiAgICB0aGlzLnNldEZvY3VzKHZhbHVlKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ2ZvY3VzJykgJiYgdGhpcy5zZXRGb2N1cyh0aGlzLmF0dHJzLmZvY3VzKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCd2YWx1ZScpICYmIHRoaXMuc2V0VmFsdWUodGhpcy5hdHRycy52YWx1ZSk7XG4gIH1cblxuICBzZXRGb2N1cyh2YWx1ZSkge1xuICAgIHZhbHVlPyB0aGlzLnNldEVsZW1lbnRGb2N1cygpOiB0aGlzLnNldEVsZW1lbnRCbHVyKCk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICh0aGlzLmVsW3RoaXMudmFsdWVLZXldICE9PSB2YWx1ZSkgJiYgKHRoaXMuZWxbdGhpcy52YWx1ZUtleV0gPSB2YWx1ZSA9PT0gMD8gJzAnOiAodmFsdWUgfHwgJycpKTtcbiAgfVxuXG4gIHNldEVsZW1lbnRGb2N1cygpIHtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cblxuICBzZXRFbGVtZW50Qmx1cigpIHtcbiAgICB0aGlzLmVsLmJsdXIoKTtcbiAgfVxufTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGV4dC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbaW5dJztcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnZm9yJywgRm9yKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ29sJywgRm9yKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3VsJywgRm9yKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RoZWFkJywgRm9yKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3Rib2R5JywgRm9yKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3Rmb290JywgRm9yKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RyJywgTG9vcCk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdsb29wJywgTG9vcCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLl9faXRlcmF0b3IgPSBudWxsO1xuICAgIHRoaXMuX19rZXkgPSBudWxsO1xuICAgIHRoaXMuX192YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5fX2luZGV4ID0gbnVsbDtcbiAgICB0aGlzLl9fY29tcGFyaXNvblZhbHVlID0gbnVsbDtcbiAgICB0aGlzLml0ZXJhdG9ycyA9IHt9O1xuICAgIHRoaXMuaXRlcmF0b3JSZWYgPSBudWxsO1xuICAgIHRoaXMuaXRlcmF0b3JPdXRlckhUTUwgPSBudWxsO1xuICB9XG5cbiAgY2hhbmdlZEluKGRhdGEpIHtcbiAgICB0aGlzLmRyYXcoZGF0YSk7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuY3JlYXRlSXRlcmF0b3IoKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuZHJhdyh0aGlzLmF0dHJzLmluKTtcbiAgfVxuXG4gIGNyZWF0ZUl0ZXJhdG9yKCkge1xuICAgIGxldCBlbDtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5lbC5jaGlsZHJlbltpXTtcblxuICAgICAgaWYoY2hpbGQuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKSA9PSAnbG9vcCcpIHtcbiAgICAgICAgZWwgPSBjaGlsZDtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZWwgPSBjaGlsZDtcbiAgICB9XG5cbiAgICBpZighZWwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignXCJGb3JcIiBjb21wb25lbnQgbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBjaGlsZCcpXG4gICAgfVxuXG4gICAgbGV0IGNvbXBvbmVudE5hbWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpO1xuXG4gICAgaWYoY29tcG9uZW50TmFtZSAhPSAnbG9vcCcpIHtcbiAgICAgIGxldCBjb21wb25lbnQgPSBBa2lsaS5jb21wb25lbnQoY29tcG9uZW50TmFtZSB8fCBlbC50YWdOYW1lKTtcblxuICAgICAgaWYoIWNvbXBvbmVudCkge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcsICdsb29wJyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKCEoY29tcG9uZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIEZvcikpIHtcbiAgICAgICAgbGV0IG1hc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsb29wJyk7XG5cbiAgICAgICAgbWFzay5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIGVsID0gbWFzaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmh0bWwgPSBlbC5pbm5lckhUTUw7XG4gICAgdGhpcy5pdGVyYXRvclJlZiA9IGVsLm5leHRTaWJsaW5nO1xuICAgIHRoaXMuaXRlcmF0b3JPdXRlckhUTUwgPSBlbC5vdXRlckhUTUw7XG4gICAgZWwucmVtb3ZlKCk7XG4gIH1cblxuICBjcmVhdGVJdGVyYXRvckVsZW1lbnQoKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcblxuICAgIGVsLmlubmVySFRNTCA9IHRoaXMuaXRlcmF0b3JPdXRlckhUTUw7XG4gICAgZWwgPSBlbC5jb250ZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBsb29wKGtleSwgdmFsdWUsIGtleXMsIGluZGV4KSB7XG4gICAgdGhpcy5fX2luZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5fX2tleSA9IGtleTtcbiAgICB0aGlzLl9fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLl9fY29tcGFyaXNvblZhbHVlID0gdXRpbHMuY29weSh2YWx1ZSk7XG5cbiAgICBsZXQgaGFzaCA9ICcnO1xuICAgIGxldCBmb3VuZCA9IDA7XG5cbiAgICBpZih2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgJiYgdmFsdWUuX19oYXNoKSB7XG4gICAgICBoYXNoID0gdmFsdWUuX19oYXNoO1xuICAgIH1cblxuICAgIGlmKHRoaXMuaXRlcmF0b3JzW2hhc2hdKSB7XG4gICAgICBrZXkgPSBoYXNoO1xuICAgICAgZm91bmQgPSAyO1xuICAgIH1cbiAgICBlbHNlIGlmKHRoaXMuaXRlcmF0b3JzW2tleV0pIHtcbiAgICAgIGZvdW5kID0gMTtcbiAgICB9XG5cbiAgICBpZihmb3VuZCkge1xuICAgICAgbGV0IGl0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcnNba2V5XTtcblxuICAgICAgaWYoZm91bmQgPT0gMikge1xuICAgICAgICBsZXQgY1ZhbHVlID0gaXRlcmF0b3IuY29tcGFyc2lvbi52YWx1ZTtcbiAgICAgICAgbGV0IGNDb3B5ID0gaXRlcmF0b3IuY29tcGFyc2lvbi5jb3B5O1xuXG4gICAgICAgIGlmICh0aGlzLl9faW5kZXggIT09IGl0ZXJhdG9yLmluZGV4KSB7XG4gICAgICAgICAgaXRlcmF0b3Iuc2V0SW5kZXgoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9fa2V5ICE9PSBpdGVyYXRvci5rZXkpIHtcbiAgICAgICAgICBpdGVyYXRvci5zZXRLZXkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdXRpbHMuY29tcGFyZVByZXZpb3VzVmFsdWUodmFsdWUsIGNWYWx1ZSwgY0NvcHksIHRoaXMuX19jb21wYXJpc29uVmFsdWUpKSB7XG4gICAgICAgICAgaXRlcmF0b3Iuc2V0VmFsdWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGtleXNba2V5XSA9IGl0ZXJhdG9yO1xuICAgICAgICBkZWxldGUgdGhpcy5pdGVyYXRvcnNba2V5XTtcblxuICAgICAgICByZXR1cm4gaXRlcmF0b3I7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaXRlcmF0b3JSZWYgPSBpdGVyYXRvci5lbC5uZXh0U2libGluZztcbiAgICAgIGl0ZXJhdG9yLl9fZGVzdHJveSgpO1xuICAgIH1cblxuICAgIGxldCBlbCA9IHRoaXMuY3JlYXRlSXRlcmF0b3JFbGVtZW50KCk7XG5cbiAgICBlbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XG4gICAgdGhpcy5lbC5pbnNlcnRCZWZvcmUoZWwsIHRoaXMuaXRlcmF0b3JSZWYpO1xuICAgIEFraWxpLmNvbXBpbGUoZWwpO1xuXG4gICAgaWYodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgICBpZighdmFsdWUuX19oYXNoKSB7XG4gICAgICAgIGhhc2ggPSB1dGlscy5jcmVhdGVSYW5kb21TdHJpbmcoMzIsIChzdHIpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5pdGVyYXRvcnNbc3RyXTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbHVlLCAnX19oYXNoJywge1xuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIHZhbHVlOiBoYXNoXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBrZXlzW2hhc2hdID0gdGhpcy5fX2l0ZXJhdG9yO1xuICAgICAgZGVsZXRlIHRoaXMuaXRlcmF0b3JzW2hhc2hdO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmKEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgbGV0IGVWYWx1ZSA9IHR5cGVvZiB0aGlzLl9fdmFsdWUgPT0gJ3N0cmluZyc/IGBcIiR7dGhpcy5fX3ZhbHVlfVwiYDogdGhpcy5fX3ZhbHVlO1xuXG4gICAgICAgIGxldCBhcmdzID0gW1xuICAgICAgICAgIGBcIkZvclwiIGNvbXBvbmVudCBsb29wIGl0ZW1zIHNob3VsZCBoYXZlIFwib2JqZWN0XCIgdHlwZSBmb3IgaGlnaGVyIHBlcmZvcm1hbmNlLmAsXG4gICAgICAgICAgYFlvdSBjYW4gY2hhbmdlICR7ZVZhbHVlfSB0byB7dmFsdWU6ICR7ZVZhbHVlfX0sIGZvciBleGFtcGxlLmBcbiAgICAgICAgXTtcblxuICAgICAgICBjb25zb2xlLndhcm4uYXBwbHkoY29uc29sZS53YXJuLCBhcmdzKTtcbiAgICAgIH1cblxuICAgICAga2V5c1trZXldID0gdGhpcy5fX2l0ZXJhdG9yO1xuICAgICAgZGVsZXRlIHRoaXMuaXRlcmF0b3JzW2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsLl9fYWtpbGk7XG4gIH1cblxuICBkcmF3KGRhdGEpIHtcbiAgICBpZiAodHlwZW9mIGRhdGEgIT0gJ29iamVjdCcgfHwgZGF0YSA9PT0gbnVsbCkge1xuICAgICAgaWYoQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICBjb25zb2xlLndhcm4oYFwiRm9yXCIgY29tcG9uZW50IFwiaW5cIiBhdHRyaWJ1dGUgdmFsdWUgdHlwZSBtdXN0IGJlIGFuIG9iamVjdC9hcnJheWApO1xuICAgICAgICBkYXRhID0gW107XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGtleXMgPSB7fTtcbiAgICBsZXQgaW5kZXhLZXlzID0gW107XG4gICAgbGV0IGxhc3RFbGVtZW50ID0gbnVsbDtcbiAgICBsZXQgbGFzdCA9IHRoaXMuZWwuY2hpbGRyZW5bdGhpcy5lbC5jaGlsZHJlbi5sZW5ndGggLSAxXTtcblxuICAgIGlmKGxhc3QgJiYgIShsYXN0Ll9fYWtpbGkgaW5zdGFuY2VvZiBMb29wKSkge1xuICAgICAgbGFzdEVsZW1lbnQgPSBsYXN0O1xuICAgIH1cblxuICAgIGlmKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBkYXRhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpbmRleEtleXMucHVzaCh0aGlzLmxvb3AoaSwgZGF0YVtpXSwga2V5cywgaSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBpID0gMDtcblxuICAgICAgZm9yKGxldCBrIGluIGRhdGEpIHtcbiAgICAgICAgaWYoIWRhdGEuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4S2V5cy5wdXNoKHRoaXMubG9vcChrLCBkYXRhW2tdLCBrZXlzLCBpKSk7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gaW5kZXhLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGl0ZXJhdG9yID0gaW5kZXhLZXlzW2ldO1xuXG4gICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGl0ZXJhdG9yLmVsKTtcbiAgICAgIGl0ZXJhdG9yLml0ZXJhdGUoaSk7XG4gICAgfVxuXG4gICAgbGFzdEVsZW1lbnQgJiYgdGhpcy5lbC5hcHBlbmRDaGlsZChsYXN0RWxlbWVudCk7XG5cbiAgICBmb3IobGV0IGsgaW4gdGhpcy5pdGVyYXRvcnMpIHtcbiAgICAgIGlmKCF0aGlzLml0ZXJhdG9ycy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pdGVyYXRvcnNba10uX19kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdGhpcy5pdGVyYXRvcnMgPSBrZXlzO1xuICB9XG59O1xuXG5leHBvcnQgY2xhc3MgTG9vcCBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG4gIHN0YXRpYyBjb250cm9sQXR0cmlidXRlcyA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5mb3IgPSBudWxsO1xuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuaXNGb3IgPSB0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnaW4nKTtcblxuICAgIGlmKCF0aGlzLmlzRm9yICYmICEodGhpcy5lbC5wYXJlbnROb2RlLl9fYWtpbGkgaW5zdGFuY2VvZiBGb3IpKSB7XG4gICAgICB0aGlzLmNhbmNlbCgpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9faXRlcmF0b3IgPSB0aGlzO1xuICAgIHRoaXMuZm9yID0gdGhpcy5fX3BhcmVudC5fX2FraWxpO1xuICAgIHRoaXMuc2V0SW5kZXgoKTtcbiAgICB0aGlzLnNldEtleSgpO1xuICAgIHRoaXMuc2V0VmFsdWUoKTtcblxuICAgIHRoaXMuaXNGb3IgJiYgc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5pc0ZvciAmJiBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgc2V0SW5kZXgoKSB7XG4gICAgdGhpcy5pbmRleCA9IHRoaXMuZm9yLl9faW5kZXg7XG4gICAgdGhpcy5zY29wZS5fX3NldCgnbG9vcEluZGV4JywgdGhpcy5pbmRleCk7XG4gIH1cblxuICBzZXRLZXkoKSB7XG4gICAgdGhpcy5rZXkgPSB0aGlzLmZvci5fX2tleTtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wS2V5JywgdGhpcy5rZXkpO1xuICB9XG5cbiAgc2V0VmFsdWUoKSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuZm9yLl9fdmFsdWU7XG4gICAgdGhpcy5zY29wZS5fX3NldCgnbG9vcFZhbHVlJywgdGhpcy52YWx1ZSwgdHJ1ZSk7XG5cbiAgICB0aGlzLmNvbXBhcnNpb24gPSB7XG4gICAgICBjb3B5OiB0aGlzLmZvci5fX2NvbXBhcmlzb25WYWx1ZSxcbiAgICAgIHZhbHVlOiB0aGlzLmZvci5fX3ZhbHVlXG4gICAgfVxuICB9XG5cbiAgaXRlcmF0ZShpbmRleCkge31cbn1cblxuRm9yLkxvb3AgPSBMb29wO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZm9yLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdyb3V0ZScsIFJvdXRlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtUcmFuc2l0aW9ufSB0cmFuc2l0aW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgc2V0VHJhbnNpdGlvbih0cmFuc2l0aW9uKSB7XG4gICAgbGV0IHN0YXRlID0gdHJhbnNpdGlvbi5wYXRoLnN0YXRlO1xuICAgIGxldCBwYXJhbXMgPSB0cmFuc2l0aW9uLnBhdGgucGFyYW1zO1xuICAgIGxldCB1cmwgPSB0cmFuc2l0aW9uLnVybDtcbiAgICBsZXQgcXVlcnkgPSB0cmFuc2l0aW9uLnF1ZXJ5O1xuICAgIGxldCBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbiAgICBmdW5jdGlvbiBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24ocGF0aCkge1xuICAgICAgaWYocGF0aC5wYXJlbnQpIHtcbiAgICAgICAgaWYgKHBhdGgucGFyZW50LmNvbXBvbmVudCkge1xuICAgICAgICAgIHJldHVybiBwYXRoLnBhcmVudC5jb21wb25lbnQuX19zY29wZS5fX3RyYW5zaXRpb24ucGF0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24ocGF0aC5wYXJlbnQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLl9fc2NvcGUuX190cmFuc2l0aW9uID0ge1xuICAgICAgcGF0aDoge1xuICAgICAgICBzdGF0ZTogc3RhdGUubmFtZSxcbiAgICAgICAgZGF0YTogdHJhbnNpdGlvbi5wYXRoLmRhdGEsXG4gICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICBwYXJlbnQ6IGdldFBhcmVudFNjb3BlVHJhbnNpdGlvbih0cmFuc2l0aW9uLnBhdGgpXG4gICAgICB9LFxuICAgICAgcGFyYW1zOiB0cmFuc2l0aW9uLnBhcmFtcyxcbiAgICAgIHVybDogdXJsLFxuICAgICAgcXVlcnk6IHF1ZXJ5XG4gICAgfTtcblxuICAgIGlmIChzdGF0ZS50ZW1wbGF0ZSkge1xuICAgICAgdGhpcy5lbXB0eSgpO1xuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBgPGNvbXBvbmVudD4ke3N0YXRlLnRlbXBsYXRlfTwvY29tcG9uZW50PmA7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLnRlbXBsYXRlVXJsKSB7XG4gICAgICBwID0gcmVxdWVzdC5nZXQoc3RhdGUudGVtcGxhdGVVcmwpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICB0aGlzLmVtcHR5KCk7XG4gICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gYDxjb21wb25lbnQ+JHtyZXMuZGF0YX08L2NvbXBvbmVudD5gO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHAudGhlbigoKSA9PiB7XG4gICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICB9KTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9yb3V0ZS5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVsLCBjb21wb25lbnQpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIHRoZSBldmVudFxuICAgKlxuICAgKiBAcGFyYW0geyp9IGRhdGEgLSBzZW5kaW5nIGRhdGEuIFdpbGwgYmUgaW4gdGhlIGV2ZW50LmRldGFpbFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlXVxuICAgKi9cbiAgdHJpZ2dlcihkYXRhLCBvcHRpb25zID0geyBidWJibGVzOiBmYWxzZSB9LCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgaWYoZm9yY2UgfHwgIXRoaXMuaW5FdmFsdWF0aW5nKCkpIHtcbiAgICAgIHRoaXMuZWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQodGhpcy5uYW1lLCB7ZGV0YWlsOiBkYXRhLCAuLi5vcHRpb25zfSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaCB0aGUgZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gX0V2ZW50IC0gY2xhc3Mgb2YgdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdXG4gICAqL1xuICBkaXNwYXRjaChfRXZlbnQsIG9wdGlvbnMgPSB7IGJ1YmJsZXM6IGZhbHNlIH0sIGZvcmNlID0gZmFsc2UpIHtcbiAgICBpZihmb3JjZSB8fCAhdGhpcy5pbkV2YWx1YXRpbmcoKSkge1xuICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnQodGhpcy5uYW1lLCBvcHRpb25zKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGV2ZW50IGNhbGxiYWNrIGRvZXNuJ3QgcnVuIHJlY3Vyc2l2ZVxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGluRXZhbHVhdGluZygpIHtcbiAgICBsZXQgZGF0YSA9IHRoaXMuY29tcG9uZW50Ll9fZXZhbHVhdGluZ0V2ZW50O1xuXG4gICAgaWYoIWRhdGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YS5lbCA9PT0gdGhpcy5lbCAmJiBkYXRhLmV2ZW50LnR5cGUgPT09IHRoaXMubmFtZSAmJiBkYXRhLmNvbXBvbmVudCA9PT0gdGhpcy5jb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogQmluZCB0aGUgZnVuY3Rpb25cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICovXG4gIGJpbmQoZm4pIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5uYW1lLCB0aGlzLmZuID0gZm4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCB0aGUgZnVuY3Rpb25cbiAgICovXG4gIHVuYmluZCgpIHtcbiAgICB0aGlzLmZuICYmIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMuZm4pO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ldmVudC1lbWl0dGVyLmpzIiwiaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3JlcXVlc3QuanMnO1xuaW1wb3J0IFJvdXRlIGZyb20gJy4uL2NvbXBvbmVudHMvcm91dGUuanMnO1xuXG5leHBvcnQgY2xhc3MgVHJhbnNpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHVybCwgcXVlcnksIGhhc2ggPSAnJywgcHJldmlvdXMgPSBudWxsKSB7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgIHRoaXMuaGFzaCA9IGhhc2g7XG4gICAgdGhpcy5wcmV2aW91cyA9IHByZXZpb3VzO1xuICAgIHRoaXMucGF0aCA9IG51bGw7XG4gICAgdGhpcy5yb3V0ZXMgPSBbXTtcbiAgICB0aGlzLnN0YXRlcyA9IFtdO1xuICAgIHRoaXMucGFyYW1zID0ge307XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IGZhbHNlO1xuICB9XG5cbiAgcmVkaXJlY3QoKSB7XG4gICAgdGhpcy5jYW5jZWwoKTtcbiAgICByb3V0ZXIuc3RhdGUuYXBwbHkocm91dGVyLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgc2V0UGF0aChwYXRoKSB7XG4gICAgcGF0aC5wYXJlbnQgPSB0aGlzLnBhdGggfHwgbnVsbDtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIHRoaXMucm91dGVzLnB1c2gocGF0aCk7XG4gICAgdGhpcy5zdGF0ZXMucHVzaChwYXRoLnN0YXRlKTtcbiAgICB0aGlzLnBhcmFtcyA9ICFwYXRoLnBhcmVudD8gcGF0aC5wYXJhbXM6IHsuLi5wYXRoLnBhcmVudC5wYXJhbXMsIC4uLnBhdGgucGFyYW1zfTtcbiAgfVxuXG4gIGdldFJvdXRlKHN0YXRlKSB7XG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMucm91dGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJvdXRlID0gdGhpcy5yb3V0ZXNbaV07XG5cbiAgICAgIGlmKHJvdXRlLnN0YXRlID09PSBzdGF0ZSkge1xuICAgICAgICByZXR1cm4gcm91dGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBoYXNTdGF0ZShzdGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlcy5pbmRleE9mKHN0YXRlKSAhPSAtMTtcbiAgfVxuXG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gdHJ1ZTtcbiAgfVxufVxuXG5jb25zdCByb3V0ZXIgPSB7fTtcblxucm91dGVyLmJhc2VVcmwgPSBcIi9cIjtcbnJvdXRlci5zdGF0ZXMgPSBbXTtcbnJvdXRlci5oYXNoTW9kZSA9IHRydWU7XG5yb3V0ZXIuX19yZWRpcmVjdHMgPSAwO1xucm91dGVyLl9faW5pdCA9IGZhbHNlO1xucm91dGVyLl9fb3B0aW9ucyA9IHt9O1xucm91dGVyLl9fcGFyYW1SZWdleCA9IC8oOihbXFx3XFxkLV0rKSkvZztcbnJvdXRlci5fX3JvdXRlU2VsZWN0b3IgPSBjID0+IGMgaW5zdGFuY2VvZiBSb3V0ZTtcblxuLyoqXG4gKiBBZGQgbmV3IHN0YXRlIHRvIHRoZSByb3V0ZXJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHN0YXRlIG5hbWUuIFRvIHNldCBwYXJlbnRzIHlvdSBjYW4gdXNlIGRvdCwgZS5nLiAnYXBwLmFydGljbGUuZWRpdCdcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXR0ZXJuIC0gdXJsIHBhdHRlcm4gbGlrZSAnYXBwL2FydGljbGUvOmlkJ1xuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge3JvdXRlcn1cbiAqL1xucm91dGVyLmFkZCA9IGZ1bmN0aW9uIChuYW1lLCBwYXR0ZXJuLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIHRlbXBsYXRlOiAnJyxcbiAgICB0ZW1wbGF0ZVVybDogJycsXG4gICAgYWJzdHJhY3Q6IGZhbHNlLFxuICAgIGhhbmRsZXI6ICh0cmFuc2l0aW9uKSA9PiB7fVxuICB9O1xuXG4gIGlmKCFvcHRpb25zLnRlbXBsYXRlICYmICFvcHRpb25zLnRlbXBsYXRlVXJsKSB7XG4gICAgb3B0aW9ucy5hYnN0cmFjdCA9IHRydWU7XG4gIH1cblxuICBpZih0aGlzLmhhcyhuYW1lKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIFwiJHtuYW1lfVwiIGlzIGFscmVhZHkgZXhpc3RzYClcbiAgfVxuXG4gIHRoaXMuc2V0U3RhdGUobmFtZSwgcGF0dGVybiwgey4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zfSk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBzdGF0ZSBmcm9tIHRoZSBsaXN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucm91dGVyLnJlbW92ZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmKHRoaXMuc3RhdGVzW2ldLm5hbWUgPT0gbmFtZSkge1xuICAgICAgdGhpcy5zdGF0ZXMuc3BsaWNlKGksIDEpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIENoZWNrIHN0YXRlIGV4aXN0c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmKHRoaXMuc3RhdGVzW2ldLm5hbWUgPT0gbmFtZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBDaGFuZ2UgdGhlIHN0YXRlIHRvIHRoZSBwYXNzZWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHN0YXRlIG5hbWVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSAtIHBhcmFtcyBmb3Igc3RhdGUge2lkOiAxfSA9PiAnL2FwcC86aWQnID0+ICcvYXBwLzEnXG4gKiBAcGFyYW0ge29iamVjdH0gW3F1ZXJ5XSAtIHF1ZXJ5IHt4OiAxfSA9PiAnL2FwcC8/eD0xJ1xuICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoXVxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICovXG5yb3V0ZXIuc3RhdGUgPSBmdW5jdGlvbiAobmFtZSwgcGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSAnJywgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUobmFtZSk7XG5cbiAgaWYgKCFzdGF0ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIHJvdXRlIHN0YXRlIHdpdGggbmFtZSAke25hbWV9YCk7XG4gIH1cblxuICBsZXQgdXJsID0gdGhpcy5jcmVhdGVTdGF0ZVVybChzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCk7XG5cbiAgaWYoIW9wdGlvbnMucmVsb2FkICYmIHVybCA9PT0gdGhpcy5nZXRVcmwoKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuX19vcHRpb25zID0gb3B0aW9ucztcbiAgdGhpcy5zZXRVcmwodXJsKTtcbn07XG5cbi8qKlxuICogR28gYmFja1xuICovXG5yb3V0ZXIuYmFjayA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkuYmFjay5hcHBseSh3aW5kb3cuaGlzdG9yeSwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogR28gdG8gYW55IHdheVxuICovXG5yb3V0ZXIuZ28gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LmdvLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBHbyBmb3J3YXJkXG4gKi9cbnJvdXRlci5mb3J3YXJkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeS5mb3J3YXJkLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RhdGUgYnkgdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICovXG5yb3V0ZXIubG9jYXRpb24gPSBmdW5jdGlvbih1cmwsIG9wdGlvbnMgPSB7IHJlbG9hZDogZmFsc2UgfSkge1xuICB0aGlzLl9fb3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgaWYodGhpcy5oYXNoTW9kZSkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gdXJsO1xuICB9XG4gIGVsc2Uge1xuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCAnJywgdXJsKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSb3V0ZXIgaW5pdGlhbGl6YXRpb24uIFNob3VsZCBiZSBjYWxsZWQgYmVmb3JlIEFraWxpLmluaXQoKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbZGVmYXVsdFVybF1cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2hhc2hNb2RlPXRydWVdXG4gKi9cbnJvdXRlci5pbml0ID0gZnVuY3Rpb24gKGRlZmF1bHRVcmwgPSAnJywgaGFzaE1vZGUgPSB0cnVlKSB7XG4gIGxldCBvbGRQdXNoU3RhdGUgPSB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGU7XG5cbiAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IHJlcyA9IG9sZFB1c2hTdGF0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgcm91dGVyLmNoYW5nZVN0YXRlKCk7XG5cbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIHRoaXMuX19vblN0YXRlQ2hhbmdlSGFuZGxlciA9ICgpID0+IHtcbiAgICB0aGlzLmNoYW5nZVN0YXRlKCk7XG4gIH07XG5cbiAgdGhpcy5kZWZhdWx0VXJsID0gZGVmYXVsdFVybDtcbiAgdGhpcy5oYXNoTW9kZSA9IGhhc2hNb2RlO1xuXG4gIHRoaXMuc3RhdGVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICBhID0gYS5uYW1lLnNwbGl0KCcuJykubGVuZ3RoO1xuICAgIGIgPSBiLm5hbWUuc3BsaXQoJy4nKS5sZW5ndGg7XG5cbiAgICByZXR1cm4gYSAtIGI7XG4gIH0pO1xuXG4gIGxldCBzdGF0ZXMgPSB7fTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuICAgIGxldCBwYXJlbnRzID0gW107XG5cbiAgICBzdGF0ZXNbc3RhdGUubmFtZV0gPSBzdGF0ZTtcbiAgICBzdGF0ZS5jaGlsZHJlbiA9IFtdO1xuICAgIHBhcmVudHMgPSBzdGF0ZS5uYW1lLnNwbGl0KCcuJyk7XG4gICAgcGFyZW50cy5wb3AoKTtcbiAgICBzdGF0ZS5sZXZlbCA9IHN0YXRlLmFic3RyYWN0PyBudWxsOiBwYXJlbnRzLmxlbmd0aDtcblxuICAgIGlmIChwYXJlbnRzLmxlbmd0aCkge1xuICAgICAgbGV0IHBhcmVudE5hbWUgPSBwYXJlbnRzLmpvaW4oJy4nKTtcbiAgICAgIGxldCBwYXJlbnQgPSBzdGF0ZXNbcGFyZW50TmFtZV07XG5cbiAgICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIHBhcmVudCByb3V0ZSBzdGF0ZSBcIiR7cGFyZW50TmFtZX1cIiBmb3IgXCIke3N0YXRlLm5hbWV9XCJgKVxuICAgICAgfVxuXG4gICAgICBpZihzdGF0ZS5sZXZlbCAhPT0gbnVsbCAmJiBwYXJlbnQuYWJzdHJhY3QpIHtcbiAgICAgICAgc3RhdGUubGV2ZWwtLTtcbiAgICAgIH1cblxuICAgICAgc3RhdGUuZnVsbFBhdHRlcm4gPSB0aGlzLnNwbGl0U2xhc2hlcyhwYXJlbnQuZnVsbFBhdHRlcm4gKyAnLycgKyBzdGF0ZS5wYXR0ZXJuKTtcbiAgICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKHN0YXRlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzdGF0ZS5mdWxsUGF0dGVybiA9IHN0YXRlLnBhdHRlcm47XG4gICAgfVxuICB9XG5cbiAgaWYoIXRoaXMuc3RhdGVzLmxlbmd0aCAmJiBBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgY29uc29sZS53YXJuKGBZb3UgZGlkbid0IGFkZCBhbnkgcm91dGVzIHRvIHRoZSByb3V0ZXJgKTtcbiAgfVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMuX19vblN0YXRlQ2hhbmdlSGFuZGxlcik7XG4gIHRoaXMuX19pbml0ID0gdHJ1ZTtcbn07XG5cbi8qKlxuICogR2V0IHN0YXRlIGJ5IG5hbWVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHJldHVybnMge29iamVjdHxudWxsfVxuICovXG5yb3V0ZXIuZ2V0U3RhdGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLm5hbWUgPT0gbmFtZSkge1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBTZXQgc3RhdGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IHBhdHRlcm5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKi9cbnJvdXRlci5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChuYW1lLCBwYXR0ZXJuLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IHN0YXRlID0gey4uLm9wdGlvbnMsIG5hbWUsIHBhdHRlcm59O1xuXG4gIHJvdXRlci5zdGF0ZXMucHVzaChzdGF0ZSk7XG5cbiAgcmV0dXJuIHN0YXRlO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgc3RhdGUgYnkgbmFtZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnJvdXRlci5yZW1vdmVTdGF0ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZXNbaV07XG5cbiAgICBpZiAoc3RhdGUubmFtZSA9PSBuYW1lKSB7XG4gICAgICB0aGlzLnN0YXRlcy5zcGxpY2UoaSwgMSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogU2V0IHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqL1xucm91dGVyLnNldFVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgdGhpcy5oYXNoTW9kZT8gdGhpcy5zZXRIYXNoVXJsKHVybCk6IHRoaXMuc2V0SGlzdG9yeVVybCh1cmwpO1xufTtcblxuLyoqXG4gKiBTZXQgdXJsIHVzaW5nIGhpc3RvcnlcbiAqXG4gKiBAcGFyYW0gdXJsXG4gKi9cbnJvdXRlci5zZXRIaXN0b3J5VXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgJycsIHVybCk7XG59O1xuXG4vKipcbiAqIFNldCB1cmwgdXNpbmcgaGFzaFxuICpcbiAqIEBwYXJhbSB1cmxcbiAqL1xucm91dGVyLnNldEhhc2hVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyMnICsgKHVybCB8fCAnLycpO1xufTtcblxuLyoqXG4gKiBHZXQgdXJsXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLmdldFVybCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuaGFzaE1vZGUgPyB0aGlzLmdldEhhc2hVcmwoKSA6IHRoaXMuZ2V0SGlzdG9yeVVybCgpO1xufTtcblxuLyoqXG4gKiBHZXQgdXJsIHVzaW5nIGhpc3RvcnlcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuZ2V0SGlzdG9yeVVybCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyB3aW5kb3cubG9jYXRpb24uaGFzaDtcbn07XG5cbi8qKlxuICogR2V0IHVybCB1c2luZyBoYXNoXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLmdldEhhc2hVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKC9eIy8sICcnKTtcbn07XG5cbi8qKlxuICogR2V0IHF1ZXJ5IHBhcmFtc1xuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5oYXNoTW9kZSA/IHRoaXMuZ2V0SGFzaFVybFF1ZXJ5KCkgOiB0aGlzLmdldEhpc3RvcnlVcmxRdWVyeSgpO1xufTtcblxuLyoqXG4gKiBHZXQgcXVlcnkgcGFyYW1zIHVzaW5nIGhpc3RvcnlcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0SGlzdG9yeVVybFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByZXF1ZXN0LnBhcmFtc0Zyb21RdWVyeSh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykpO1xufTtcblxuLyoqXG4gKiBHZXQgcXVlcnkgcGFyYW1zIHVzaW5nIGhhc2hcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0SGFzaFVybFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByZXF1ZXN0LnBhcmFtc0Zyb21RdWVyeSgod2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJz8nKVsxXSB8fCAnJykpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgdXJsIGJ5IGRhdGFcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc11cbiAqIEBwYXJhbSB7b2JqZWN0fSBbcXVlcnldXG4gKiBAcGFyYW0ge3N0cmluZ30gW2hhc2hdXG4gKi9cbnJvdXRlci5jcmVhdGVTdGF0ZVVybCA9IGZ1bmN0aW9uIChzdGF0ZSwgcGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSAnJykge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcblxuICBsZXQgdXJsID0gc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZSh0aGlzLl9fcGFyYW1SZWdleCwgKG0sIGYsIHYpID0+IHtcbiAgICByZXR1cm4gcGFyYW1zW3ZdIHx8ICcnO1xuICB9KTtcblxuICB1cmwgPSB0aGlzLnNwbGl0U2xhc2hlcyh1cmwpO1xuXG4gIGlmKE9iamVjdC5rZXlzKHF1ZXJ5KS5sZW5ndGgpIHtcbiAgICB1cmwgKz0gJz8nICsgcmVxdWVzdC5wYXJhbXNUb1F1ZXJ5KHF1ZXJ5KTtcbiAgfVxuXG4gIGhhc2ggPSAoaGFzaCB8fCAnJykucmVwbGFjZSgnIycsICcnKTtcblxuICBpZighdGhpcy5oYXNoTW9kZSAmJiBoYXNoKSB7XG4gICAgdXJsICs9ICcjJyArIGhhc2g7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYWxsIHVubmVjZXNzYXJ5IHNsYXNoZXMgZnJvbSBhbiB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuc3BsaXRTbGFzaGVzID0gZnVuY3Rpb24gKHVybCkge1xuICByZXR1cm4gdXJsLnJlcGxhY2UoL1tcXC9dKy9nLCAnLycpO1xufTtcblxuLyoqXG4gKiBDbGVhciBhbGwgcm91dGVyIGRlcGVuZGVuY2llc1xuICovXG5yb3V0ZXIuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMuX19vblN0YXRlQ2hhbmdlSGFuZGxlcik7XG59O1xuXG4vKipcbiAqIEdldCBzdGF0ZSB1cmwgY29udGVudFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRQYXR0ZXJuQ29udGVudCA9IGZ1bmN0aW9uIChzdGF0ZSwgdXJsKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuXG4gIGxldCBrZXlzID0gW107XG4gIGxldCBpID0gMDtcbiAgbGV0IHBhcmFtcyA9IHt9O1xuXG4gIHVybCA9IHVybC5zcGxpdCgnPycpWzBdO1xuICB1cmwgPSB1cmwuc3BsaXQoJyMnKVswXTtcblxuICBsZXQgdXJsUGF0dGVybiA9IHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2UodGhpcy5fX3BhcmFtUmVnZXgsIChtLCBmLCB2KSA9PiB7XG4gICAga2V5cy5wdXNoKHYpO1xuXG4gICAgcmV0dXJuICcoW15cXFxcL10qKSc7XG4gIH0pO1xuXG4gIGxldCByZWdleCA9IG5ldyBSZWdFeHAodXJsUGF0dGVybik7XG4gIGxldCBpc0luY2x1ZGVkID0gdXJsLm1hdGNoKHJlZ2V4KTtcblxuICBpZiAoIWlzSW5jbHVkZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHVybC5yZXBsYWNlKHJlZ2V4LCAobSwgdikgPT4ge1xuICAgIHYgJiYgKHBhcmFtc1trZXlzW2ldXSA9IHYpO1xuICAgIGkrKztcbiAgfSk7XG5cbiAgcmV0dXJuIHsgcGFyYW1zIH07XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSBzdGF0ZSBpcyBhY3RpdmUgbm93XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtib29sZWFufSBpbmNsdWRlc1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnJvdXRlci5pc0FjdGl2ZVN0YXRlID0gZnVuY3Rpb24oc3RhdGUsIGluY2x1ZGVzID0gZmFsc2UpIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG5cbiAgbGV0IHVybCA9IHRoaXMuc3BsaXRTbGFzaGVzKHRoaXMuZ2V0VXJsKCkuc3BsaXQoJz8nKVswXSArICcvJyk7XG4gIGxldCB1cmxQYXR0ZXJuID0gc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZSh0aGlzLl9fcGFyYW1SZWdleCwgJyhbXlxcXFwvXSopJyk7XG4gIGxldCBzdHIgPSBpbmNsdWRlcz8gdXJsUGF0dGVybjogdGhpcy5zcGxpdFNsYXNoZXMoJ14nICsgdXJsUGF0dGVybiArICdcXC8kJyk7XG4gIGxldCByZWdleCA9IG5ldyBSZWdFeHAoc3RyKTtcblxuICByZXR1cm4gcmVnZXgudGVzdCh1cmwpO1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgY3VycmVudCB1cmwgaW5jbHVkZXMgYSBzdGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaW5BY3RpdmVTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gIHJldHVybiByb3V0ZXIuaXNBY3RpdmVTdGF0ZShzdGF0ZSwgdHJ1ZSk7XG59O1xuXG4vKipcbiAqIEdldCByb3V0ZSBjb21wb25lbnQgYnkgbGV2ZWxcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbGV2ZWxcbiAqL1xucm91dGVyLmdldFJvdXRlID0gZnVuY3Rpb24gKGxldmVsKSB7XG4gIGxldCBpID0gMDtcblxuICBsZXQgZmluZCA9IChlbCkgPT4ge1xuICAgIGxldCByb3V0ZSA9IGVsLmNoaWxkKHRoaXMuX19yb3V0ZVNlbGVjdG9yKTtcblxuICAgIGlmICghcm91dGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChpID09IGxldmVsKSB7XG4gICAgICByZXR1cm4gcm91dGU7XG4gICAgfVxuXG4gICAgaSsrO1xuXG4gICAgcmV0dXJuIGZpbmQocm91dGUpO1xuICB9O1xuXG4gIHJldHVybiBmaW5kKEFraWxpLnJvb3QpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGZpcnN0IG1hdGNoXG4gKlxuICogQHBhcmFtIHthcnJheX0gYXJyXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gKi9cbnJvdXRlci5nZXRBcnJheVBhdHRlcm5Db250ZW50ID0gZnVuY3Rpb24gKGFyciwgdXJsKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IGFycltpXTtcbiAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0UGF0dGVybkNvbnRlbnQoc3RhdGUsIHVybCk7XG5cbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJldHVybiB7c3RhdGU6IHN0YXRlLCAuLi5jb250ZW50fTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBHZXQgc3RhdGVzIGJ5IGxldmVsXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxldmVsXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbnJvdXRlci5nZXRTdGF0ZXNCeUxldmVsID0gZnVuY3Rpb24gKGxldmVsKSB7XG4gIGxldCBzdGF0ZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLmxldmVsIDwgbGV2ZWwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChzdGF0ZS5sZXZlbCA+IGxldmVsKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzdGF0ZXMucHVzaChzdGF0ZSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVzO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RhdGVcbiAqL1xucm91dGVyLmNoYW5nZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuICBpZih0aGlzLl9fZGlzYWJsZUNoYW5nZSkge1xuICAgIGRlbGV0ZSB0aGlzLl9fZGlzYWJsZUNoYW5nZTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCB1cmwgPSB0aGlzLmdldFVybCgpO1xuICBsZXQgaGFzaCA9IHRoaXMuaGFzaE1vZGU/ICcnOiB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpO1xuICBsZXQgcXVlcnkgPSB0aGlzLmdldFVybFF1ZXJ5KCk7XG4gIGxldCBwcmV2VHJhbnNpdGlvbiA9IHJvdXRlci50cmFuc2l0aW9uIHx8IG51bGw7XG4gIGxldCB0cmFuc2l0aW9uID0gcm91dGVyLnRyYW5zaXRpb24gPSBuZXcgVHJhbnNpdGlvbih1cmwsIHF1ZXJ5LCBoYXNoLCBwcmV2VHJhbnNpdGlvbik7XG4gIGxldCBsZXZlbCA9IDA7XG5cbiAgbGV0IG5leHQgPSAoc3RhdGVzLCBvbkVuZCkgPT4ge1xuICAgIGlmICghc3RhdGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG9uRW5kICYmIG9uRW5kKCk7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldEFycmF5UGF0dGVybkNvbnRlbnQoc3RhdGVzLCB1cmwpO1xuXG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICByZXR1cm4gb25FbmQgJiYgb25FbmQoKTtcbiAgICB9XG5cbiAgICBsZXQgc3RhdGUgPSBjb250ZW50LnN0YXRlO1xuICAgIGxldCBwYXJhbXMgPSBjb250ZW50LnBhcmFtcztcbiAgICBsZXQgcm91dGUgPSBzdGF0ZS5hYnN0cmFjdD8gbnVsbDogdGhpcy5nZXRSb3V0ZShzdGF0ZS5sZXZlbCk7XG5cbiAgICBpZiAoIXJvdXRlICYmICFzdGF0ZS5hYnN0cmFjdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yIChgTm90IGZvdW5kIHJvdXRlIGNvbXBvbmVudCBmb3Igc3RhdGUgXCIke3N0YXRlLm5hbWV9XCJgKTtcbiAgICB9XG5cbiAgICB0cmFuc2l0aW9uLnNldFBhdGgoeyBzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgY29tcG9uZW50OiByb3V0ZSwgbG9hZGVkOiB0cnVlIH0pO1xuICAgIGxldmVsKys7XG5cbiAgICBsZXQgaGFzU3RhdGUgPSBwcmV2VHJhbnNpdGlvbiAmJiBwcmV2VHJhbnNpdGlvbi5oYXNTdGF0ZShzdGF0ZSk7XG4gICAgbGV0IGlzRGlmZmVyZW50ID0gdHJ1ZTtcblxuICAgIGlmKGhhc1N0YXRlKSB7XG4gICAgICBsZXQgcm91dGUgPSBwcmV2VHJhbnNpdGlvbi5nZXRSb3V0ZShzdGF0ZSk7XG4gICAgICBsZXQgcHJldiA9IHsgcGFyYW1zOiByb3V0ZS5wYXJhbXMsIHF1ZXJ5OiByb3V0ZS5xdWVyeSwgaGFzaDogcm91dGUuaGFzaCB9O1xuICAgICAgbGV0IGN1cnJlbnQgPSB7IHBhcmFtcywgcXVlcnksIGhhc2ggfTtcblxuICAgICAgaXNEaWZmZXJlbnQgPSAhdXRpbHMuY29tcGFyZShwcmV2LCBjdXJyZW50KTtcbiAgICB9XG5cbiAgICBsZXQgaXNIaXN0b3J5ID0gdGhpcy5fX29wdGlvbnMucmVsb2FkID09PSB1bmRlZmluZWQgJiYgIWlzRGlmZmVyZW50O1xuICAgIGxldCBpc1JlbG9hZCA9IHRoaXMuX19vcHRpb25zLnJlbG9hZCA9PT0gZmFsc2U7XG5cbiAgICBpZiAoaGFzU3RhdGUgJiYgKGlzSGlzdG9yeSB8fCBpc1JlbG9hZCkpIHtcbiAgICAgIHRyYW5zaXRpb24ucGF0aC5sb2FkZWQgPSBmYWxzZTtcblxuICAgICAgcmV0dXJuIG5leHQoc3RhdGUuY2hpbGRyZW4sIG9uRW5kKTtcbiAgICB9XG5cbiAgICBQcm9taXNlLnJlc29sdmUoc3RhdGUuaGFuZGxlcih0cmFuc2l0aW9uKSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKHRyYW5zaXRpb24uX19jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIG9uRW5kICYmIG9uRW5kKCk7XG4gICAgICB9XG5cbiAgICAgIHRyYW5zaXRpb24ucGF0aC5kYXRhID0gZGF0YTtcblxuICAgICAgaWYoc3RhdGUuYWJzdHJhY3QpIHtcbiAgICAgICAgcmV0dXJuIG5leHQoc3RhdGUuY2hpbGRyZW4sIG9uRW5kKTtcbiAgICAgIH1cblxuICAgICAgcm91dGUuc2V0VHJhbnNpdGlvbih0cmFuc2l0aW9uKS50aGVuKCgpID0+IHtcbiAgICAgICAgdHJhbnNpdGlvbi5wYXRoLmxvYWRlZCA9IHRydWU7XG5cbiAgICAgICAgbmV4dChzdGF0ZS5jaGlsZHJlbiwgb25FbmQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBuZXh0KHRoaXMuZ2V0U3RhdGVzQnlMZXZlbCgwKSwgKCkgPT4ge1xuICAgICAgaWYoIXRyYW5zaXRpb24ucm91dGVzLmxlbmd0aCkge1xuICAgICAgICBpZih0aGlzLl9fcmVkaXJlY3RzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYFdyb25nIHJvdXRlciBkZWZhdWx0IHVybCBcIiR7dGhpcy5kZWZhdWx0VXJsfVwiYCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5kZWZhdWx0VXJsKSB7XG4gICAgICAgICAgaWYodGhpcy5kZWZhdWx0VXJsID09IHRoaXMuZ2V0VXJsKCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKGBOb3QgZm91bmQgYW55IHJvdXRlc2ApKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmhhc2hNb2RlICYmICh0aGlzLl9fZGlzYWJsZUNoYW5nZSA9IHRydWUpO1xuICAgICAgICAgIHRoaXMuc2V0VXJsKHRoaXMuZGVmYXVsdFVybCk7XG4gICAgICAgICAgdGhpcy5fX3JlZGlyZWN0cysrO1xuXG4gICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlU3RhdGUoKS50aGVuKHJlc29sdmUpLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBOb3QgZm91bmQgYSBkZWZhdWx0IHJvdXRlLiBZb3UgY2FuIHBhc3MgaXQgaW4gXCJyb3V0ZXIuaW5pdChkZWZhdWx0VXJsKVwiIGZ1bmN0aW9uYCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fX29wdGlvbnMgPSB7fTtcbiAgICAgIHRoaXMuX19yZWRpcmVjdHMgPSAwO1xuXG4gICAgICBpZihwcmV2VHJhbnNpdGlvbikge1xuICAgICAgICBmb3IobGV0IGkgPSBsZXZlbCwgbCA9IHByZXZUcmFuc2l0aW9uLnJvdXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBsZXQgcm91dGUgPSBwcmV2VHJhbnNpdGlvbi5yb3V0ZXNbaV07XG4gICAgICAgICAgcm91dGUuY29tcG9uZW50ICYmIHJvdXRlLmNvbXBvbmVudC5lbXB0eSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc3RhdGUtY2hhbmdlJywge1xuICAgICAgICBkZXRhaWw6IHRyYW5zaXRpb25cbiAgICAgIH0pKTtcblxuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbnJvdXRlci5UcmFuc2l0aW9uID0gVHJhbnNpdGlvbjtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL3JvdXRlci5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi4vc2VydmljZXMvcm91dGVyLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbc3RhdGVdOm5vdChbdXJsXSksW3VybF06bm90KFtzdGF0ZV0pJztcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gdHJ1ZTtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydyZWxvYWQnXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnYScsIEEpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IG51bGw7XG4gICAgdGhpcy5wYXJhbXMgPSB7fTtcbiAgICB0aGlzLnF1ZXJ5ID0ge307XG4gICAgdGhpcy5oYXNoID0gJyc7XG4gICAgdGhpcy5vcHRpb25zID0ge307XG4gICAgdGhpcy5pc1VybCA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCd1cmwnKTtcbiAgfVxuXG4gIGNoYW5nZWRVcmwodXJsKSB7XG4gICAgdGhpcy5zZXRVcmwodXJsKTtcbiAgICB0aGlzLnJlc2V0SHJlZih1cmwpO1xuICB9XG5cbiAgY2hhbmdlZFN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgdGhpcy5yZXNldEhyZWYoKTtcbiAgfVxuXG4gIGNoYW5nZWRQYXJhbXMocGFyYW1zKSB7XG4gICAgdGhpcy5zZXRQYXJhbXMocGFyYW1zKTtcbiAgICB0aGlzLnJlc2V0SHJlZigpO1xuICB9XG5cbiAgY2hhbmdlZFF1ZXJ5KHF1ZXJ5KSB7XG4gICAgdGhpcy5zZXRRdWVyeShxdWVyeSk7XG4gICAgdGhpcy5yZXNldEhyZWYoKTtcbiAgfVxuXG4gIGNoYW5nZWRIYXNoKHF1ZXJ5KSB7XG4gICAgdGhpcy5zZXRIYXNoKHF1ZXJ5KTtcbiAgICB0aGlzLnJlc2V0SHJlZigpO1xuICB9XG5cbiAgY2hhbmdlZE9wdGlvbnMob3B0aW9ucykge1xuICAgIHRoaXMuc2V0UXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICBjaGFuZ2VkUmVsb2FkKHZhbCkge1xuICAgIHRoaXMuc2V0UmVsb2FkKHZhbCk7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZih0aGlzLmlzVXJsKSB7XG4gICAgICAgIHJvdXRlci5sb2NhdGlvbih0aGlzLmF0dHJzLnVybCwgdGhpcy5vcHRpb25zKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJvdXRlci5zdGF0ZSh0aGlzLnN0YXRlLm5hbWUsIHRoaXMucGFyYW1zLCB0aGlzLnF1ZXJ5LCB0aGlzLmhhc2gsICB0aGlzLm9wdGlvbnMpO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgnc3RhdGUnKSAmJiB0aGlzLnNldFN0YXRlKHRoaXMuYXR0cnMuc3RhdGUpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ3BhcmFtcycpICYmIHRoaXMuc2V0UGFyYW1zKHRoaXMuYXR0cnMucGFyYW1zKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdxdWVyeScpICYmIHRoaXMuc2V0UXVlcnkodGhpcy5hdHRycy5xdWVyeSk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgnaGFzaCcpICYmIHRoaXMuc2V0SGFzaCh0aGlzLmF0dHJzLmhhc2gpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ29wdGlvbnMnKSAmJiB0aGlzLnNldE9wdGlvbnModGhpcy5hdHRycy5vcHRpb25zKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdyZWxvYWQnKSAmJiB0aGlzLnNldFJlbG9hZCh0aGlzLmF0dHJzLnJlbG9hZCk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgndXJsJykgJiYgdGhpcy5zZXRVcmwodGhpcy5hdHRycy51cmwpO1xuICAgIHRoaXMucmVzZXRIcmVmKHRoaXMudXJsKTtcbiAgfVxuXG4gIHNldFVybCh1cmwpIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgfVxuXG4gIHNldFN0YXRlKG5hbWUpIHtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5nZXRTdGF0ZShuYW1lKTtcbiAgICB0aGlzLnNjb3BlLmlzQWN0aXZlU3RhdGUgPSByb3V0ZXIuaXNBY3RpdmVTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgICB0aGlzLnNjb3BlLmluQWN0aXZlU3RhdGUgPSByb3V0ZXIuaW5BY3RpdmVTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHNldFBhcmFtcyhwYXJhbXMpIHtcbiAgICBpZih0eXBlb2YgcGFyYW1zICE9ICdvYmplY3QnIHx8ICFwYXJhbXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIHBhcmFtcyBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICB9XG5cbiAgc2V0UXVlcnkocXVlcnkpIHtcbiAgICBpZih0eXBlb2YgcXVlcnkgIT0gJ29iamVjdCcgfHwgIXF1ZXJ5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBxdWVyeSBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgfVxuXG4gIHNldEhhc2goaGFzaCkge1xuICAgIGlmKHR5cGVvZiBoYXNoICE9ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBoYXNoIG11c3QgYmUgYSBzdHJpbmdgKTtcbiAgICB9XG5cbiAgICB0aGlzLmhhc2ggPSBoYXNoO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYodHlwZW9mIG9wdGlvbnMgIT0gJ29iamVjdCcgfHwgIW9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIG9wdGlvbnMgbXVzdCBiZSBhbiBvYmplY3RgKTtcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgc2V0UmVsb2FkKHZhbCkge1xuICAgIHRoaXMub3B0aW9ucy5yZWxvYWQgPSB2YWw7XG4gIH1cblxuICBnZXRTdGF0ZShuYW1lKSB7XG4gICAgbGV0IHN0YXRlID0gcm91dGVyLmdldFN0YXRlKG5hbWUpO1xuXG4gICAgaWYoIXN0YXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCByb3V0ZXIgc3RhdGUgd2l0aCBuYW1lIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgcmVzZXRIcmVmKHVybCkge1xuICAgIGlmKHVybCkge1xuICAgICAgdGhpcy5hdHRycy5ocmVmID0gdXJsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuYXR0cnMuaHJlZiA9IHJvdXRlci5jcmVhdGVTdGF0ZVVybCh0aGlzLnN0YXRlLCB0aGlzLnBhcmFtcywgdGhpcy5xdWVyeSwgdGhpcy5oYXNoKTtcbiAgICB9XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYS5qcyIsImltcG9ydCBUZXh0IGZyb20gJy4vdGV4dC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50IGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdjb250ZW50JywgQ29udGVudCk7XG4gICAgQWtpbGkuYWxpYXMoJ1tjb250ZW50ZWRpdGFibGVdJywgJ2NvbnRlbnQnKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIGlmKHRoaXMuZWwuaGFzQXR0cmlidXRlKCdlZGl0YWJsZScpKSB7XG4gICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ2VkaXRhYmxlJykpO1xuICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoJ2VkaXRhYmxlJyk7XG4gICAgfVxuXG4gICAgaWYoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKS5kaXNwbGF5ID09ICdpbmxpbmUnKSB7XG4gICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIHRoaXMudmFsdWVLZXkgPSAnaW5uZXJIVE1MJztcbiAgfVxuXG4gIHNldEVsZW1lbnRGb2N1cygpIHtcbiAgICBsZXQgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIGxldCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG5cbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGhpcy5lbCk7XG4gICAgcmFuZ2UuY29sbGFwc2UoZmFsc2UpO1xuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9jb250ZW50LmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1iZWQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbdXJsXSc7XG4gIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnZW1iZWQnLCBFbWJlZCk7XG4gIH1cblxuICBjaGFuZ2VkVXJsKHVybCkge1xuICAgIHRoaXMuc2V0U3JjKHVybCk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCd1cmwnKSAmJiB0aGlzLnNldFNyYyh0aGlzLmF0dHJzLnVybCk7XG4gIH1cblxuICBzZXRTcmModXJsKSB7XG4gICAgdGhpcy5hdHRycy5zcmMgPSB1cmw7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZW1iZWQuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIElmIGNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyB0cmFuc3BhcmVudCA9IHRydWU7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tpc10nO1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ3JlY3JlYXRlJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2lmJywgSWYpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnZWxzZS1pZicsIEVsc2VJZik7XG4gICAgQWtpbGkuY29tcG9uZW50KCdlbHNlJywgRWxzZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuc3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMucmVjcmVhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ29tcGlsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRpc3BsYXkgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpLmRpc3BsYXk7XG4gIH1cblxuICBjaGFuZ2VkSXModmFsdWUpIHtcbiAgICB0aGlzLnN0YXRlID0gISF2YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKCk7XG4gIH1cblxuICBjaGFuZ2VkUmVjcmVhdGUodmFsdWUpIHtcbiAgICB0aGlzLnNldFJlY3JlYXRpb24odmFsdWUpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgncmVjcmVhdGUnKSAmJiB0aGlzLnNldFJlY3JlYXRpb24odGhpcy5hdHRycy5yZWNyZWF0ZSk7XG4gICAgdGhpcy5zdGF0ZSA9ICEhdGhpcy5hdHRycy5pcztcbiAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSgpXG4gIH1cblxuICBzZXRBY3Rpdml0eShhY3RpdmUpIHtcbiAgICB0aGlzLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgfVxuXG4gIHNldFJlY3JlYXRpb24ocmVjcmVhdGUpIHtcbiAgICB0aGlzLnJlY3JlYXRlID0gcmVjcmVhdGU7XG4gIH1cblxuICBzZXRTdGF0ZSgpIHtcbiAgICBsZXQgcmVzID0gdGhpcy5jb21waWxhdGlvbigpO1xuICAgIGxldCBuZXh0ID0gdGhpcy5lbC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgbGV0IHJlc3VsdDtcblxuICAgIGlmKCFuZXh0IHx8ICFuZXh0Lm1hdGNoZXMoJ2Vsc2UtaWYsZWxzZScpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmV4dC5fX2FraWxpLnNldEFjdGl2aXR5KHRoaXMuYWN0aXZlIHx8IHRoaXMuc3RhdGUpO1xuICAgIG5leHQuX19ha2lsaS5zZXRSZWNyZWF0aW9uKHRoaXMucmVjcmVhdGUpO1xuICAgIHJlc3VsdCA9IG5leHQuX19ha2lsaS5zZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMpLnRoZW4oKCkgPT4ge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBpbGF0aW9uKCkge1xuICAgIGxldCByZXM7XG5cbiAgICBpZih0aGlzLnN0YXRlICYmICF0aGlzLmFjdGl2ZSkge1xuICAgICAgaWYodGhpcy5yZWNyZWF0ZSB8fCAhdGhpcy5pc0NvbXBpbGVkKSB7XG4gICAgICAgIHJlcyA9IHRoaXMuY29tcGlsZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmRpc3BsYXk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYodGhpcy5yZWNyZWF0ZSkge1xuICAgICAgICB0aGlzLl9fZW1wdHkoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoIXRoaXMuaXNDb21waWxlZCkge1xuICAgICAgICByZXMgPSB0aGlzLmNvbXBpbGUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGNvbXBpbGUoKSB7XG4gICAgbGV0IHJlcztcblxuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5odG1sO1xuICAgIHJlcyA9IEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgdGhpcy5pc0NvbXBpbGVkID0gdHJ1ZTtcblxuICAgIHJldHVybiByZXM7XG4gIH1cbn07XG5cbi8qKlxuICogRWxzZUlmIGNvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgRWxzZUlmIGV4dGVuZHMgSWYge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBFbHNlIGNvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgRWxzZSBleHRlbmRzIEVsc2VJZiB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2lzJywgJ3RydWUnKTtcbiAgfVxufVxuXG5JZi5FbHNlSWYgPSBFbHNlSWY7XG5JZi5FbHNlID0gRWxzZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pZi5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElmcmFtZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1t1cmxdJztcbiAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpZnJhbWUnLCBJZnJhbWUpO1xuICB9XG5cbiAgY2hhbmdlZFVybCh1cmwpIHtcbiAgICB0aGlzLnNldFNyYyh1cmwpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgndXJsJykgJiYgdGhpcy5zZXRTcmModGhpcy5hdHRycy51cmwpO1xuICB9XG5cbiAgc2V0U3JjKHVybCkge1xuICAgIHRoaXMuYXR0cnMuc3JjID0gdXJsO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2lmcmFtZS5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW3VybF0nO1xuICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2ltZycsIEltYWdlKTtcbiAgfVxuXG4gIGNoYW5nZWRVcmwodXJsKSB7XG4gICAgdGhpcy5zZXRTcmModXJsKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ3VybCcpICYmIHRoaXMuc2V0U3JjKHRoaXMuYXR0cnMudXJsKTtcbiAgfVxuXG4gIHNldFNyYyh1cmwpIHtcbiAgICB0aGlzLmF0dHJzLnNyYyA9IHVybDtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pbWFnZS5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi9zZXJ2aWNlcy9yZXF1ZXN0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5jbHVkZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyB0cmFuc3BhcmVudCA9IHRydWU7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1t1cmxdJztcbiAgc3RhdGljIGV2ZW50cyA9IFsnbG9hZCcsICdlcnJvciddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpbmNsdWRlJywgSW5jbHVkZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gIH1cblxuICBjaGFuZ2VkVXJsKHVybCkge1xuICAgIHRoaXMuZ2V0VGVtcGxhdGUodXJsKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFRlbXBsYXRlKHRoaXMuYXR0cnMudXJsKTtcbiAgfVxuXG4gIGdldFRlbXBsYXRlKHVybCkge1xuICAgIHRoaXMuY29ubmVjdGlvbiAmJiB0aGlzLmNvbm5lY3Rpb24uYWJvcnQoKTtcblxuICAgIHJldHVybiByZXF1ZXN0LmdldCh1cmwsIHtcbiAgICAgIG9uU3RhcnQ6ICh4aHIpID0+IHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0geGhyO1xuICAgICAgfVxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgICAgIHRoaXMuZW1wdHkoKTtcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5odG1sO1xuICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgcmVzLmRhdGEpO1xuXG4gICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5hdHRycy5vbkxvYWQudHJpZ2dlcigpO1xuICAgICAgfSk7XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgdGhpcy5hdHRycy5vbkVycm9yLnRyaWdnZXIoZXJyKTtcbiAgICB9KTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pbmNsdWRlLmpzIiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnY2hlY2tlZCddO1xuICBzdGF0aWMgZXZlbnRzID0gWydjaGFuZ2UnXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaW5wdXQnLCBJbnB1dCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmlzQ2hlY2tib3ggPSB0aGlzLmVsLnR5cGUgPT0gJ2NoZWNrYm94JztcbiAgICB0aGlzLmlzUmFkaW8gPSB0aGlzLmVsLnR5cGUgPT0gJ3JhZGlvJztcbiAgfVxuXG4gIGNoYW5nZWRDaGVja2VkKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRDaGVja2VkKHZhbHVlKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgKHRoaXMuaXNSYWRpbyB8fCB0aGlzLmlzQ2hlY2tib3gpICYmIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldENoZWNrZWQodGhpcy5lbC5jaGVja2VkLCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICByZXNvbHZlZCgpIHtcbiAgICAodGhpcy5pc0NoZWNrYm94IHx8IHRoaXMuaXNSYWRpbykgJiYgdGhpcy5zZXRDaGVja2VkKHRoaXMuYXR0cnMuY2hlY2tlZCk7XG4gIH1cblxuICBzZXRDaGVja2VkKHZhbHVlLCB0cmlnZ2VyID0gdHJ1ZSkge1xuICAgIHZhbHVlID0gISF2YWx1ZTtcblxuICAgIGlmKHRoaXMucHJldkNoZWNrZWQgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5lbC5jaGVja2VkID0gdGhpcy5wcmV2Q2hlY2tlZCA9IHZhbHVlO1xuICAgIHRyaWdnZXIgJiYgdGhpcy5hdHRycy5vbkNoYW5nZS5kaXNwYXRjaChFdmVudCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgIHRoaXMuaXNSYWRpbyAmJiB0aGlzLmNoYW5nZVJhZGlvKCk7XG4gIH1cblxuICBzZXRWYWx1ZSgpIHtcbiAgICBzdXBlci5zZXRWYWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuaXNSYWRpbyAmJiB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cblxuICBjaGFuZ2VSYWRpbygpIHtcbiAgICBsZXQgbmFtZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgbGV0IHNlbGVjdG9yID0gYGlucHV0W3R5cGU9cmFkaW9dW25hbWU9JyR7bmFtZX0nXTpub3QoW3Njb3BlPScke3RoaXMuc2NvcGUuX19uYW1lfSddKWA7XG4gICAgbGV0IGNoaWxkcmVuID0gQWtpbGkucm9vdC5jaGlsZHJlbihzZWxlY3Rvcik7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcmFkaW8gPSBjaGlsZHJlbltpXTtcblxuICAgICAgcmFkaW8uc2V0Q2hlY2tlZChyYWRpby5lbC5jaGVja2VkKTtcbiAgICB9XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaW5wdXQuanMiLCJpbXBvcnQgRm9yLCB7IExvb3AgfSBmcm9tICcuL2Zvci5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIFRoZSByYWRpbyBncm91cCBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaW8gZXh0ZW5kcyBGb3Ige1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbbmFtZV0nO1xuICBzdGF0aWMgZXZlbnRzID0gWydyYWRpbyddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdyYWRpbycsIFJhZGlvKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JhZGlvLWJ1dHRvbicsIFJhZGlvQnV0dG9uKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXRlcmFibGUgPSB0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnaW4nKTtcbiAgfVxuXG4gIGNoYW5nZWRJbih2YWx1ZSkge1xuICAgIHN1cGVyLmNoYW5nZWRJbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuc2V0TmFtZXModGhpcy5hdHRycy5uYW1lKTtcbiAgfVxuXG4gIGNoYW5nZWROYW1lKG5hbWUpIHtcbiAgICB0aGlzLnNldE5hbWVzKG5hbWUpO1xuICB9XG5cbiAgY2hhbmdlZFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuaXRlcmFibGUgJiYgc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5nZXRSYWRpb1ZhbHVlKCk7XG5cbiAgICAgICAgaWYodmFsdWUgPT09IHRoaXMucHJldlZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5hdHRycy5vblJhZGlvLnRyaWdnZXIodmFsdWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXNvbHZlZCgpIHtcbiAgICB0aGlzLnNldE5hbWVzKHRoaXMuYXR0cnMubmFtZSk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSAmJiB0aGlzLnNldFZhbHVlKHRoaXMuYXR0cnMudmFsdWUpO1xuICB9XG5cbiAgc2V0TmFtZXMobmFtZSkge1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oJ2lucHV0W3R5cGU9cmFkaW9dJyk7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjaGlsZHJlbltpXS5lbC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBuYW1lKTtcbiAgICB9XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmKHZhbHVlID09PSB0aGlzLnByZXZWYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBwcmV2ID0gdGhpcy5wcmV2VmFsdWU7XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbignaW5wdXRbdHlwZT1yYWRpb10nKTtcbiAgICBsZXQgaXNUcnVlID0gZmFsc2U7XG5cbiAgICB0aGlzLnByZXZWYWx1ZSA9IHZhbHVlO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJhZGlvID0gY2hpbGRyZW5baV07XG4gICAgICBsZXQgaXNTZWxlY3RlZCA9IHJhZGlvLmVsLnZhbHVlID09PSB2YWx1ZTtcblxuICAgICAgaXNTZWxlY3RlZCAmJiAoaXNUcnVlID0gdHJ1ZSk7XG4gICAgICByYWRpby5zZXRDaGVja2VkKGlzU2VsZWN0ZWQpO1xuICAgIH1cblxuICAgIGlmKCFpc1RydWUpIHtcbiAgICAgIGlmKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIGlmKHByZXYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMucHJldlZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hdHRycy5vblJhZGlvLnRyaWdnZXIodmFsdWUsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgfVxuXG4gIGdldFJhZGlvVmFsdWUoKSB7XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbignaW5wdXRbdHlwZT1yYWRpb10nKTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICBpZihyYWRpby5lbC5jaGVja2VkKSB7XG4gICAgICAgIHJldHVybiByYWRpby5lbC52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBUaGUgcmFkaW8gaXRlbSBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIFJhZGlvQnV0dG9uIGV4dGVuZHMgTG9vcCB7XG4gIHN0YXRpYyB0ZW1wbGF0ZSA9IGA8bGFiZWw+PGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiXFwke3RoaXMudmFsdWV9XCIvPlxcJHt0aGlzLl9fY29udGVudH08L2xhYmVsPmA7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICB9XG5cbiAgY2hhbmdlZFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRSYWRpb1ZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuc2V0UmFkaW9WYWx1ZSh0aGlzLmF0dHJzLnZhbHVlKTtcbiAgfVxuXG4gIHNldFJhZGlvVmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnNjb3BlLnZhbHVlID0gdmFsdWU7XG4gIH1cbn1cblxuUmFkaW8uUmFkaW9CdXR0b24gPSBSYWRpb0J1dHRvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9yYWRpby5qcyIsImltcG9ydCBGb3IsIHsgTG9vcCB9IGZyb20gJy4vZm9yLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyBGb3Ige1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ211bHRpcGxlJ107XG4gIHN0YXRpYyBldmVudHMgPSBbJ2NoYW5nZSddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdzZWxlY3QnLCBTZWxlY3QpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnb3B0aW9uJywgT3B0aW9uKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXRlcmF0b3JUYWdOYW1lID0gJ29wdGlvbic7XG4gICAgdGhpcy5pc011bHRpcGxlID0gZmFsc2U7XG4gIH1cblxuICBjaGFuZ2VkTXVsdGlwbGUodmFsdWUpIHtcbiAgICB0aGlzLnNldE11bHRpcGxlKHZhbHVlKTtcbiAgfVxuXG4gIGNoYW5nZWRDb250ZW50KHZhbHVlKSB7XG4gICAgdGhpcy5zZXRDb250ZW50KHZhbHVlKTtcbiAgfVxuXG4gIGNoYW5nZWRJbih2YWx1ZSkge1xuICAgIHN1cGVyLmNoYW5nZWRJbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuZHJhd1NlbGVjdCgpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuZWwuY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuICAgIH0pO1xuICB9XG4gIFxuICBjb21waWxlZCgpIHtcbiAgICBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ211bHRpcGxlJykgJiYgdGhpcy5zZXRNdWx0aXBsZSh0aGlzLmF0dHJzLm11bHRpcGxlKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdjb250ZW50JykgJiYgdGhpcy5zZXRDb250ZW50KHRoaXMuYXR0cnMuY29udGVudCk7XG4gICAgdGhpcy5kcmF3U2VsZWN0KCk7XG4gIH1cblxuICBzZXRNdWx0aXBsZSh2YWx1ZSkge1xuICAgIHRoaXMuaXNNdWx0aXBsZSA9IHZhbHVlO1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5mb3JtYXRWYWx1ZSh1dGlscy5jb3B5KHRoaXMuZWwuY29udGVudCkpKTtcbiAgfVxuXG4gIHNldENvbnRlbnQodmFsdWUpIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUodmFsdWUpKTtcbiAgfVxuXG4gIGRyYXdTZWxlY3QoKSB7XG4gICAgbGV0IHNlbGVjdGVkID0gW107XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXS5fX2FraWxpO1xuICAgICAgbGV0IHNlbGVjdGlvbiA9IG9wdGlvbi5hdHRycy5zZWxlY3RlZDtcblxuICAgICAgaWYoc2VsZWN0aW9uKSB7XG4gICAgICAgIHNlbGVjdGVkLnB1c2gob3B0aW9uLmVsLnZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgb3B0aW9uLmVsLnNlbGVjdGVkID0gc2VsZWN0aW9uO1xuICAgIH1cblxuICAgIGlmKCFzZWxlY3RlZC5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVkZWZpbmUoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUoc2VsZWN0ZWQpKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVJdGVyYXRvckVsZW1lbnQoKSB7XG4gICAgbGV0IGVsID0gc3VwZXIuY3JlYXRlSXRlcmF0b3JFbGVtZW50KCk7XG5cbiAgICBpZighZWwuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGhpcy5odG1sLnRyaW0oKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsO1xuICB9XG5cbiAgaW5Db250ZW50KHZhbHVlKSB7XG4gICAgaWYoIXRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZWwuY29udGVudCA9PT0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZWwuY29udGVudC5pbmRleE9mKHZhbHVlKSAhPSAtMTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgaWYoIXRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZWwudmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnQgPSBbXTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldO1xuXG4gICAgICBpZihvcHRpb24uc2VsZWN0ZWQpIHtcbiAgICAgICAgY29udGVudC5wdXNoKG9wdGlvbi52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBmb3JtYXRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmKHRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgaWYoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpPyBbdmFsdWVdOiBbXTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZihBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLmxlbmd0aD8gdmFsdWVbMF06ICcnO1xuICAgICAgfVxuICAgICAgZWxzZSBpZih0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZWRlZmluZSgpIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZ2V0Q29udGVudCgpKTtcbiAgfVxuXG4gIGNoYW5nZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYodXRpbHMuY29tcGFyZSh0aGlzLmVsLmNvbnRlbnQsIHZhbHVlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB0aGlzLmVsLnZhbHVlID0gdmFsdWVbdmFsdWUubGVuZ3RoIC0gMV07XG5cbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdmFsdWUuaW5kZXhPZihvcHRpb24udmFsdWUpICE9IC0xO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZWwudmFsdWUgPSB2YWx1ZTtcblxuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXTtcblxuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBvcHRpb24udmFsdWUgPT0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5lbC5jb250ZW50ID0gdmFsdWU7XG4gICAgdGhpcy5hdHRycy5vbkNoYW5nZS5kaXNwYXRjaChFdmVudCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICB9XG59O1xuXG5leHBvcnQgY2xhc3MgT3B0aW9uIGV4dGVuZHMgTG9vcCB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnc2VsZWN0ZWQnXTtcblxuICBfX2dldFBhcnNlZEV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIHJldHVybiB1dGlscy5kZWNvZGVIdG1sRW50aXRpZXMoZXhwcmVzc2lvbik7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGNoYW5nZWRTZWxlY3RlZCh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U2VsZWN0ZWQodmFsdWUpO1xuICB9XG5cbiAgc2V0U2VsZWN0ZWQodmFsdWUpIHtcbiAgICB0aGlzLmVsLnNlbGVjdGVkID0gdmFsdWU7XG4gICAgdGhpcy5mb3IucmVkZWZpbmUoKTtcbiAgfVxufVxuXG5TZWxlY3QuT3B0aW9uID0gT3B0aW9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3NlbGVjdC5qcyIsImltcG9ydCBUZXh0IGZyb20gJy4vdGV4dC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0YXJlYSBleHRlbmRzIFRleHQge1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgndGV4dGFyZWEnLCBUZXh0YXJlYSk7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGV4dGFyZWEuanMiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5cbi8qKlxuICogU2NvcGUgY2xhc3MuXG4gKlxuICogQWxsIHByb3BlcnRpZXMgc3RhcnRpbmcgd2l0aCBfXyB3aWxsIG5vdCBiZSB3YXRjaGluZy5cbiAqIFlvdSBjYW4gdXNlIHRoZW0gZm9yIGludGVybmFsIG1hbmlwdWxhdGlvbnMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3BlIHtcbiAgc3RhdGljIG5lc3RlZFdhdGNoaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVsLCBjb21wb25lbnQpIHtcbiAgICB0aGlzLl9fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fX2VsID0gZWw7XG4gICAgdGhpcy5fX2NvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ3Njb3BlJywgbmFtZSk7XG4gIH1cblxuICBnZXQgX191dGlscygpIHtcbiAgICByZXR1cm4gdXRpbHM7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGEgc2NvcGUgdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzdHJpY3Q9ZmFsc2VdIC0gd2l0aG91dCBvYmplY3QgY29weWluZ1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldChrZXlzLCB2YWx1ZSwgc3RyaWN0ID0gZmFsc2UpIHtcbiAgICBpZighQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG5cbiAgICBBa2lsaS51bmlzb2xhdGVkKCgpID0+IHtcbiAgICAgIHN0cmljdCAmJiAodGhpcy5fX2NvbXBvbmVudC5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgPSB0cnVlKTtcbiAgICAgIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMsIChsYXN0LCB2YWwpID0+IHtcbiAgICAgICAgaWYoIWxhc3QpIHtcbiAgICAgICAgICByZXR1cm4gdmFsIHx8IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICBzdHJpY3QgJiYgKHRoaXMuX19jb21wb25lbnQuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nID0gZmFsc2UpO1xuICAgIH0pO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY29wZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=