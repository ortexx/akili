/*!
 * Akili is a javascript framework
 * 
 * const Akili = makeItEasy(js + html);
 * 
 * @version 0.2.0
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

  this.__root = root || document.querySelector("html");

  var serverP = Promise.resolve();
  var html = window.document.documentElement;
  var server = html.getAttribute('akili-server');

  if (server) {
    html.innerHTML = '';
    html.style.visibility = 'hidden';

    serverP = _request2.default.get(server).then(function (res) {
      html.innerHTML = res.data;
    });
  }

  return serverP.then(function () {
    return _this6.compile(_this6.__root).then(function () {
      if (_router2.default.__init) {
        return _router2.default.changeState();
      }
    }).then(function () {
      server && (html.style.visibility = 'visible');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTZjM2EwNTQzNzhkYjhiNzUwNWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FraWxpLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JvdXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudC1lbWl0dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VtYmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lmLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lmcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmNsdWRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JhZGlvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZXh0YXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NvcGUuanMiXSwibmFtZXMiOlsiQWtpbGkiLCJvcHRpb25zIiwibmVzdGVkV2F0Y2hpbmciLCJzaG93RXZhbHVhdGlvbkVycm9ycyIsImRlYnVnIiwiX19pbml0IiwiX19jb21wb25lbnRzIiwiX19hbGlhc2VzIiwiX19zY29wZXMiLCJfX2lzb2xhdGlvbiIsIl9fZXZhbHVhdGlvbiIsImh0bWxCb29sZWFuQXR0cmlidXRlcyIsImNvbXBvbmVudHMiLCJkZWNvcmF0b3JzIiwic2VydmljZXMiLCJqb2luQmluZGluZ0tleXMiLCJrZXlzIiwibWFwIiwiZWwiLCJ0b1N0cmluZyIsImpvaW4iLCJhZGRTY29wZSIsInNjb3BlIiwiX19uYW1lIiwiRXJyb3IiLCJnZXRTY29wZSIsIm5hbWUiLCJyZW1vdmVTY29wZSIsIl9fY29tcG9uZW50IiwiX19lbCIsIl9fcGFyZW50IiwiZ2V0QWtpbGlQYXJlbnRzIiwidHJlZSIsImFyciIsImNoZWNrIiwibm9kZSIsInBhcmVudE5vZGUiLCJfX2FraWxpIiwicHVzaCIsInNldFRlbXBsYXRlIiwidGVtcGxhdGUiLCJyZXBsYWNlIiwiaW5uZXJIVE1MIiwiY3JlYXRlU2NvcGVOYW1lIiwiY3JlYXRlUmFuZG9tU3RyaW5nIiwic3RyIiwiaXNvbGF0ZSIsImZuIiwicmVzIiwicHJvcHMiLCJrIiwiaGFzT3duUHJvcGVydHkiLCJpIiwibCIsInByb3AiLCJpc0RlbGV0ZWQiLCJjb21wb25lbnQiLCJfX2V2YWx1YXRlQnlLZXlzIiwidW5kZWZpbmVkIiwic2V0UHJvcGVydHlCeUtleXMiLCJsYXN0IiwidmFsIiwidmFsdWUiLCJsZW5ndGgiLCJ1bmV2YWx1YXRlZCIsImV2YWx1YXRpb24iLCJ1bmlzb2xhdGVkIiwiaW5pdGlhbGl6ZSIsInJlY29tcGlsZSIsIl9fcmVjb21waWxlIiwiaXNSb290IiwiX19yb290IiwiY29tcG9uZW50TmFtZSIsInRvRGFzaENhc2UiLCJnZXRBdHRyaWJ1dGUiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJfQ29tcG9uZW50IiwiQ0hFQ0tfQUxJQVNFUyIsInNlbGVjdG9ycyIsIk9iamVjdCIsInNlbGVjdG9yQWxsIiwibWF0Y2hlcyIsInNlbGVjdG9yIiwiQ29tcG9uZW50IiwiX19jYW5jZWxsZWQiLCJfX2NyZWF0ZSIsImNvbXBpbGUiLCJyb290IiwiZWxlbWVudHMiLCJuZXN0ZWRJbml0aWFsaXppbmciLCJjaGlsZHJlbiIsImNoaWxkIiwicCIsIl9fY29tcGlsZSIsIlByb21pc2UiLCJhbGwiLCJ0aGVuIiwiciIsIl9fcmVzb2x2ZSIsImNvbnNvbGUiLCJ3YXJuIiwidW5yZWdpc3RlckNvbXBvbmVudCIsImFsaWFzIiwidW5yZWdpc3RlckFsaWFzIiwiaXNvbGF0ZUFycmF5UHJvdG90eXBlIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsIkFycmF5IiwicHJvdG90eXBlIiwia2V5Iiwib2xkIiwiX19pc1Byb3h5IiwiYXBwbHkiLCJpc29sYXRlV2luZG93RnVuY3Rpb25zIiwid2luZG93Iiwic2V0VGltZW91dCIsImNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uIiwic2V0SW50ZXJ2YWwiLCJjb25zdHJ1Y3RvciIsImlzb2xhdGVFdmVudHMiLCJvbGRBZGRFdmVudExpc3RlbmVyIiwiRWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbGRSZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9sZFJlbW92ZSIsInJlbW92ZSIsIl9fYWtpbGlMaXN0ZW5lcnMiLCJhcmd1bWVudHMiLCJhcmdzIiwic2xpY2UiLCJjYWxsIiwibGluayIsImxpc3RlbmVyIiwic3BsaWNlIiwicG9zIiwiY2FsbGJhY2siLCJpc29sYXRlRnVuY3Rpb24iLCJjb250ZXh0Iiwib0ZuIiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwiZXJyb3JIYW5kbGluZyIsInRyaWdnZXJJbml0Iiwic3RhdHVzIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiaW5pdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNlcnZlclAiLCJyZXNvbHZlIiwiaHRtbCIsImRvY3VtZW50RWxlbWVudCIsInNlcnZlciIsInN0eWxlIiwidmlzaWJpbGl0eSIsImdldCIsImRhdGEiLCJjaGFuZ2VTdGF0ZSIsImNhdGNoIiwiZXJyIiwiZGVmaW5lIiwiRXZlbnRFbWl0dGVyIiwiU2NvcGUiLCJ1dGlscyIsIkEiLCJDb250ZW50IiwiRm9yIiwiRW1iZWQiLCJJZiIsIkluY2x1ZGUiLCJJbnB1dCIsIklmcmFtZSIsIkltYWdlIiwiUmFkaW8iLCJSb3V0ZSIsIlNlbGVjdCIsIlRleHQiLCJUZXh0YXJlYSIsInJlcXVlc3QiLCJyb3V0ZXIiLCJldmFsdWF0aW9uUmVnZXgiLCJldmFsdWF0aW9uUmVnZXhHbG9iYWwiLCJSZWdFeHAiLCJzb3VyY2UiLCJzeXN0ZW1BdHRyaWJ1dGVzIiwiZXhwcmVzc2lvbiIsImV2ZW50IiwiZXZhbCIsIl9faXNTeXN0ZW1LZXkiLCJpbmRleE9mIiwiX19pc01vdW50ZWQiLCJfX2lzQ29tcGlsZWQiLCJfX2JpbmRpbmdzIiwiX19ldmFsdWF0aW5nRXZlbnQiLCJfX3JlY29tcGlsaW5nIiwiX19jb21waWxpbmciLCJfX2Rpc2FibGVQcm94eSIsIl9fY2hpbGRyZW4iLCJfX3BhcmVudHMiLCJfX2F0dHJzIiwiX19hdHRyaWJ1dGVPZiIsIl9fZXZhbHVhdGlvbkNvbXBvbmVudCIsIl9fc2V0RXZlbnRzIiwiX19zZXRQYXJlbnRzIiwiX19zZXRCb29sZWFuQXR0cmlidXRlcyIsIl9fZGVmaW5lQXR0cmlidXRlcyIsIl9faW5pdGlhbGl6ZSIsImNyZWF0ZWQiLCJhdHRycyIsImNvbnRyb2wiLCJfX2NvbnRyb2xBdHRyaWJ1dGVzIiwiX19ldmFsdWF0ZVBhcmVudCIsIm5ld1BhcmVudCIsIl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzIiwiaW50ZXJwb2xhdGUiLCJwYXJlbnQiLCJub2RlVHlwZSIsIl9faW5pdGlhbGl6ZU5vZGUiLCJub2RlVmFsdWUiLCJfX2V2YWx1YXRlIiwiY2hpbGROb2RlcyIsIm9uQ29tcGlsZWQiLCJ0cmlnZ2VyIiwiY29tcGlsZWQiLCJ0ZW1wbGF0ZVVybCIsIl9fY29udGVudCIsIm9uUmVjb21waWxlZCIsInJlY29tcGlsZWQiLCJvblJlc29sdmVkIiwicmVzb2x2ZWQiLCJfX3Njb3BlIiwiX3Njb3BlIiwiYXNzaWduIiwiY29udHJvbEF0dHJpYnV0ZXMiLCJldmVudHMiLCJfX2V2ZW50cyIsIl9fbmVzdGVkV2F0Y2hpbmciLCJfX25lc3RlZE9ic2VydmUiLCJfX29ic2VydmUiLCJib29sZWFuQXR0cmlidXRlcyIsImNvbmNhdCIsInNldEF0dHIiLCJhdHRyaWJ1dGVzIiwibm9kZU5hbWUiLCJoYXNBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJldiIsInRlc3QiLCJwYXJlbnRzIiwiZXZhbHVhdGVQYXJlbnQiLCJ0cmFuc3BhcmVudCIsIl9fZGV0YWNoIiwiX19hZGRDaGlsZCIsInNldFByb3RvdHlwZU9mIiwiX19wcm9wZXJ0aWVzIiwiZ2V0UHJvcGVydHlCeUtleXMiLCJjb21wYXJlUHJldmlvdXNWYWx1ZSIsImNvcHkiLCJfX2dldE5vZGVQcm9wZXJ0eSIsImNvdW50ZXIiLCJhdHRyaWJ1dGVWYWx1ZSIsIl9fZXhwcmVzc2lvbiIsIm0iLCJkIiwiZXZhbHVhdGUiLCJleGlzdGluZ0JpbmRpbmdzIiwicGFyc2VWYWx1ZSIsIl9fZ2V0UGFyc2VkRXhwcmVzc2lvbiIsImxpc3QiLCJwYXJzZSIsIm1lc3NhZ2UiLCJzdGFjayIsImVycm9yIiwiaGFzaCIsImtleXNTdHJpbmciLCJub3RCaW5kaW5nIiwicGFyZW50VmFsdWUiLCJldmFsQ29tcG9uZW50IiwiaXNTY29wZVByb3h5IiwiYmluZCIsIl9fZ2V0Qm91bmROb2RlIiwiX19iaW5kIiwiX19zZXROb2RlUHJvcGVydHkiLCJBdHRyIiwibWFrZUF0dHJpYnV0ZVZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsImUiLCJpc0Jvb2xlYW5BdHRyaWJ1dGUiLCJfX2hhc0JpbmRpbmdzIiwiY2xlYXJBdHRyaWJ1dGUiLCJfX2F0dHJpYnV0ZU9uIiwiX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyIiwidG9DYW1lbENhc2UiLCJvbkNoYW5nZWQiLCJjaGFuZ2VkIiwiY2FtZWxLZXkiLCJ0b1VwcGVyQ2FzZSIsImZuTmFtZSIsImV2Rm5OYW1lIiwiZWxlbWVudCIsIl9fZWxlbWVudCIsImF0dHIiLCJ3aXRob3V0UGFyZW50cyIsImxhc3RQcm9wcyIsInByb3BzTGVuZ3RoIiwiZWxFdmFsdWF0ZSIsIl9fZ2V0QmluZCIsIl9fZGF0YSIsImMiLCJfX2NoZWNrTm9kZVByb3BlcnR5Q2hhbmdpbmciLCJfX2V2YWx1YXRlTm9kZSIsIl9rIiwiX3Byb3AiLCJ1bmJpbmQiLCJvYmoiLCJfa2V5cyIsIl9fa2V5cyIsIl9pc0RlbGV0ZWQiLCJoYXNLZXkiLCJzaGlmdCIsImhhc1Byb3BlcnR5QnlLZXlzIiwiX19ldmFsdWF0ZU5lc3RlZCIsIl9fdW5iaW5kIiwiZGVsZXRlUHJvcGVydHlCeUtleXMiLCJleGVjIiwiX19jaGVja0V2YWx1YXRpb24iLCJhdHRyaWJ1dGVPZiIsImV2ZW50TmFtZSIsIl9fZXZlbnQiLCJlbWl0dGVyIiwiX19ldmFsdWF0ZUV2ZW50IiwiX19pbml0aWFsaXplZCIsIl9faW5pdGlhbGl6ZUF0dHJpYnV0ZSIsImNoYW5nZUF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZU5vZGUiLCJfX3VuYmluZEJ5Tm9kZXMiLCJQcm94eSIsInRhcmdldCIsInNldCIsImF0dHJLZXkiLCJkZWxldGVQcm9wZXJ0eSIsInJlYWxUYXJnZXQiLCJnZXRPd25Qcm9wZXJ0eVRhcmdldCIsImlzUGxhaW5PYmplY3QiLCJnZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQiLCJfX2JpbmROb2RlIiwiX19jcmVhdGVJc29sYXRpb25PYmplY3QiLCJzdGFydEtleXMiLCJvYnNlcnZlIiwiX190YXJnZXQiLCJfX2Rpc2FibGVQcm94eVJlZGVmaW5pbmciLCJpc29sYXRpb25LZXkiLCJwYXJlbnRLZXlzU3RyaW5nIiwiX19kZWxldGVOb2RlUHJvcGVydHkiLCJub2RlcyIsIl9fY2xlYXJFbXB0eUJpbmRpbmdzIiwiY2xlYXIiLCJfX3JlbW92ZSIsIm9uUmVtb3ZlZCIsInJlbW92ZWQiLCJfX3NwbGljZUNoaWxkIiwiX19yZW1vdmVDaGlsZHJlbiIsImZpbmQiLCJmaW5kQWxsIiwibGV2ZWxzIiwibGV2ZWwiLCJpc0FycmF5IiwicmlnaHQiLCJsZXZlbEVsZW1lbnRzIiwicmV2ZXJzZSIsIl9fZ2V0UGFyZW50IiwiX19nZXRDaGlsZHJlbiIsIl9fZ2V0TmVhciIsImFwcGVuZENoaWxkIiwiX19lbXB0eSIsIl9fZGVzdHJveSIsImNsYXNzIiwiY2xhc3NlcyIsInN0eWxlcyIsImZpbHRlciIsImhhbmRsZXIiLCJpdGVtIiwibWF0Y2giLCJzb3J0Iiwib3JkZXIiLCJhIiwiYiIsIkRhdGUiLCJnZXRUaW1lIiwibmV4dCIsImFWIiwiYlYiLCJuZXN0ZWQiLCJjb21wYXJlIiwiY3VycmVudCIsInByZXZpb3VzIiwicHJldmlvdXNDb3B5IiwiY3VycmVudENvcHkiLCJlbmNvZGVIdG1sRW50aXRpZXMiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJkZWNvZGVIdG1sRW50aXRpZXMiLCJvYmplY3QiLCJyZWR1Y2UiLCJvIiwiaGFzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJwcm90byIsImdldFByb3RvdHlwZU9mIiwiY2xlYXJTY29wZVByb3h5IiwiTWF0aCIsInJhbmRvbSIsInN1YnN0cmluZyIsIlJlcXVlc3QiLCJiYXNlVXJsIiwiZGVmYXVsdHMiLCJzdGF0dXNFcnJvcnNQYXR0ZXJuIiwicmVqZWN0IiwidXJsIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvblN0YXJ0IiwidHJhbnNmb3JtQmVmb3JlIiwib3BlbiIsIm1ldGhvZCIsInVzZXIiLCJwYXNzd29yZCIsImhlYWRlcnMiLCJqc29uIiwiYm9keSIsInJlc3BvbnNlVHlwZSIsImZvcm0iLCJjcmVhdGVGb3JtRGF0YSIsInRpbWVvdXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJzZXRSZXF1ZXN0SGVhZGVyIiwicGFyYW1zIiwicGFyYW1zVG9RdWVyeSIsIm9uUHJvZ3Jlc3MiLCJvbnByb2dyZXNzIiwib25sb2FkIiwicmVzcG9uc2UiLCJ0cmFuc2Zvcm1BZnRlciIsIm9uZXJyb3IiLCJzZW5kIiwic2VwIiwiZXEiLCJrcyIsImVuY29kZVVSSUNvbXBvbmVudCIsInYiLCJvcHQiLCJxdWVyeSIsImFtcHMiLCJzcGxpdCIsImVxcyIsImRlY29kZVVSSUNvbXBvbmVudCIsIm5hbWVzcGFjZSIsImZkIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ0b0lTT1N0cmluZyIsIl9faW5zdGFuY2VzIiwiYWRkSW5zdGFuY2UiLCJpbnN0YW5jZSIsInJlbW92ZUluc3RhbmNlIiwidmFsdWVLZXkiLCJzZXRWYWx1ZSIsInNldEZvY3VzIiwiZm9jdXMiLCJzZXRFbGVtZW50Rm9jdXMiLCJzZXRFbGVtZW50Qmx1ciIsImJsdXIiLCJMb29wIiwiX19pdGVyYXRvciIsIl9fa2V5IiwiX192YWx1ZSIsIl9faW5kZXgiLCJfX2NvbXBhcmlzb25WYWx1ZSIsIml0ZXJhdG9ycyIsIml0ZXJhdG9yUmVmIiwiaXRlcmF0b3JPdXRlckhUTUwiLCJkcmF3IiwiY3JlYXRlSXRlcmF0b3IiLCJpbiIsIm1hc2siLCJuZXh0U2libGluZyIsIm91dGVySFRNTCIsImNvbnRlbnQiLCJmaXJzdENoaWxkIiwiaW5kZXgiLCJmb3VuZCIsIl9faGFzaCIsIml0ZXJhdG9yIiwiY1ZhbHVlIiwiY29tcGFyc2lvbiIsImNDb3B5Iiwic2V0SW5kZXgiLCJzZXRLZXkiLCJjcmVhdGVJdGVyYXRvckVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJ3cml0YWJsZSIsImVWYWx1ZSIsImluZGV4S2V5cyIsImxhc3RFbGVtZW50IiwibG9vcCIsIml0ZXJhdGUiLCJmb3IiLCJpc0ZvciIsImNhbmNlbCIsIl9fc2V0IiwidHJhbnNpdGlvbiIsInN0YXRlIiwicGF0aCIsImdldFBhcmVudFNjb3BlVHJhbnNpdGlvbiIsIl9fdHJhbnNpdGlvbiIsImVtcHR5IiwiYnViYmxlcyIsImZvcmNlIiwiaW5FdmFsdWF0aW5nIiwiX0V2ZW50IiwidHlwZSIsIlRyYW5zaXRpb24iLCJyb3V0ZXMiLCJzdGF0ZXMiLCJyb3V0ZSIsImhhc2hNb2RlIiwiX19yZWRpcmVjdHMiLCJfX29wdGlvbnMiLCJfX3BhcmFtUmVnZXgiLCJfX3JvdXRlU2VsZWN0b3IiLCJhZGQiLCJwYXR0ZXJuIiwiZGVmYXVsdE9wdGlvbnMiLCJhYnN0cmFjdCIsInNldFN0YXRlIiwiZ2V0U3RhdGUiLCJjcmVhdGVTdGF0ZVVybCIsInJlbG9hZCIsImdldFVybCIsInNldFVybCIsImJhY2siLCJoaXN0b3J5IiwiZ28iLCJmb3J3YXJkIiwibG9jYXRpb24iLCJwdXNoU3RhdGUiLCJkZWZhdWx0VXJsIiwib2xkUHVzaFN0YXRlIiwiX19vblN0YXRlQ2hhbmdlSGFuZGxlciIsInBvcCIsInBhcmVudE5hbWUiLCJmdWxsUGF0dGVybiIsInNwbGl0U2xhc2hlcyIsInJlbW92ZVN0YXRlIiwic2V0SGFzaFVybCIsInNldEhpc3RvcnlVcmwiLCJnZXRIYXNoVXJsIiwiZ2V0SGlzdG9yeVVybCIsInBhdGhuYW1lIiwic2VhcmNoIiwiZ2V0VXJsUXVlcnkiLCJnZXRIYXNoVXJsUXVlcnkiLCJnZXRIaXN0b3J5VXJsUXVlcnkiLCJwYXJhbXNGcm9tUXVlcnkiLCJmIiwiZ2V0UGF0dGVybkNvbnRlbnQiLCJ1cmxQYXR0ZXJuIiwicmVnZXgiLCJpc0luY2x1ZGVkIiwiaXNBY3RpdmVTdGF0ZSIsImluY2x1ZGVzIiwiaW5BY3RpdmVTdGF0ZSIsImdldFJvdXRlIiwiZ2V0QXJyYXlQYXR0ZXJuQ29udGVudCIsImdldFN0YXRlc0J5TGV2ZWwiLCJfX2Rpc2FibGVDaGFuZ2UiLCJwcmV2VHJhbnNpdGlvbiIsIm9uRW5kIiwic2V0UGF0aCIsImxvYWRlZCIsImhhc1N0YXRlIiwiaXNEaWZmZXJlbnQiLCJwcmV2IiwiaXNIaXN0b3J5IiwiaXNSZWxvYWQiLCJzZXRUcmFuc2l0aW9uIiwiaXNVcmwiLCJyZXNldEhyZWYiLCJzZXRQYXJhbXMiLCJzZXRRdWVyeSIsInNldEhhc2giLCJzZXRSZWxvYWQiLCJwcmV2ZW50RGVmYXVsdCIsInNldE9wdGlvbnMiLCJocmVmIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImRpc3BsYXkiLCJyYW5nZSIsImNyZWF0ZVJhbmdlIiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwiY29sbGFwc2UiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsInNldFNyYyIsInNyYyIsIkVsc2VJZiIsIkVsc2UiLCJhY3RpdmUiLCJyZWNyZWF0ZSIsImlzQ29tcGlsZWQiLCJzZXRSZWNyZWF0aW9uIiwiaXMiLCJjb21waWxhdGlvbiIsIm5leHRFbGVtZW50U2libGluZyIsInJlc3VsdCIsInNldEFjdGl2aXR5IiwiY29ubmVjdGlvbiIsImdldFRlbXBsYXRlIiwiYWJvcnQiLCJvbkxvYWQiLCJvbkVycm9yIiwiaXNDaGVja2JveCIsImlzUmFkaW8iLCJzZXRDaGVja2VkIiwiY2hlY2tlZCIsInByZXZDaGVja2VkIiwib25DaGFuZ2UiLCJkaXNwYXRjaCIsIkV2ZW50IiwiY2hhbmdlUmFkaW8iLCJyYWRpbyIsIlJhZGlvQnV0dG9uIiwiaXRlcmFibGUiLCJzZXROYW1lcyIsImdldFJhZGlvVmFsdWUiLCJwcmV2VmFsdWUiLCJvblJhZGlvIiwiaXNUcnVlIiwiaXNTZWxlY3RlZCIsInNldFJhZGlvVmFsdWUiLCJPcHRpb24iLCJpdGVyYXRvclRhZ05hbWUiLCJpc011bHRpcGxlIiwic2V0TXVsdGlwbGUiLCJzZXRDb250ZW50IiwiZHJhd1NlbGVjdCIsImdldENvbnRlbnQiLCJtdWx0aXBsZSIsImNoYW5nZVZhbHVlIiwiZm9ybWF0VmFsdWUiLCJzZWxlY3RlZCIsIm9wdGlvbiIsInJlZGVmaW5lIiwidHJpbSIsInNldFNlbGVjdGVkIiwic3RyaWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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ZDtBQUNEOztBQUVELGlCQUFPQyxLQUFQO0FBQ0QsU0FORDtBQU9BeWxCLG1CQUFXLE1BQUszbkIsV0FBTCxDQUFpQndVLHdCQUFqQixHQUE0QyxLQUF2RDtBQUNELE9BVkQ7QUFXRDs7O3dCQTNCYTtBQUNaO0FBQ0Q7Ozs7OztrQkFaa0I5TCxLO0FBc0NwQixDIiwiZmlsZSI6ImFraWxpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1NmMzYTA1NDM3OGRiOGI3NTA1ZCIsIi8qKlxuICogSmF2YXNjcmlwdCBmcmFtZXdvcmtcbiAqXG4gKiBjb25zdCBBa2lsaSA9IG1ha2VJdEVhc3koanMgKyBodG1sKTtcbiAqXG4gKiBAYXV0aG9yIEFsZXhhbmRyIEJhbGFzeWFuIDxteXdlYnN0cmVldEBnbWFpbC5jb20+XG4gKiBAbGluayBodHRwOi8vYWtpbGlqcy5jb21cbiAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50LmpzJztcbmltcG9ydCBJZiBmcm9tICcuL2NvbXBvbmVudHMvaWYuanMnO1xuaW1wb3J0IEZvciBmcm9tICcuL2NvbXBvbmVudHMvZm9yLmpzJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdC5qcyc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9jb21wb25lbnRzL2lucHV0LmpzJztcbmltcG9ydCBSYWRpbyBmcm9tICcuL2NvbXBvbmVudHMvcmFkaW8uanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9jb21wb25lbnRzL3RleHQuanMnO1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJy4vY29tcG9uZW50cy90ZXh0YXJlYS5qcyc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuL2NvbXBvbmVudHMvY29udGVudC5qcyc7XG5pbXBvcnQgSW5jbHVkZSBmcm9tICcuL2NvbXBvbmVudHMvaW5jbHVkZS5qcyc7XG5pbXBvcnQgSWZyYW1lIGZyb20gJy4vY29tcG9uZW50cy9pZnJhbWUuanMnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vY29tcG9uZW50cy9pbWFnZS5qcyc7XG5pbXBvcnQgRW1iZWQgZnJvbSAnLi9jb21wb25lbnRzL2VtYmVkLmpzJztcbmltcG9ydCBSb3V0ZSBmcm9tICcuL2NvbXBvbmVudHMvcm91dGUuanMnO1xuaW1wb3J0IEEgZnJvbSAnLi9jb21wb25lbnRzL2EuanMnO1xuaW1wb3J0IFNjb3BlIGZyb20gJy4vc2NvcGUuanMnO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXIuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9zZXJ2aWNlcy9yZXF1ZXN0LmpzJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9zZXJ2aWNlcy9yb3V0ZXIuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuXG5jb25zdCBBa2lsaSA9IHt9O1xuXG5Ba2lsaS5vcHRpb25zID0ge1xuICBuZXN0ZWRXYXRjaGluZzogdHJ1ZSxcbiAgc2hvd0V2YWx1YXRpb25FcnJvcnM6IHRydWUsXG4gIGRlYnVnOiB0cnVlXG59O1xuXG5Ba2lsaS5fX2luaXQgPSBudWxsO1xuQWtpbGkuX19jb21wb25lbnRzID0ge307XG5Ba2lsaS5fX2FsaWFzZXMgPSB7fTtcbkFraWxpLl9fc2NvcGVzID0ge307XG5Ba2lsaS5fX2lzb2xhdGlvbiA9IG51bGw7XG5Ba2lsaS5fX2V2YWx1YXRpb24gPSBudWxsO1xuXG5Ba2lsaS5odG1sQm9vbGVhbkF0dHJpYnV0ZXMgPSBbXG4gICdkaXNhYmxlZCcsICdjb250ZW50ZWRpdGFibGUnLCAnaGlkZGVuJ1xuXTtcblxuQWtpbGkuY29tcG9uZW50cyA9IHt9O1xuQWtpbGkuZGVjb3JhdG9ycyA9IHt9O1xuQWtpbGkuc2VydmljZXMgPSB7fTtcblxuLyoqXG4gKiBKb2luIGJpbmRpbmcga2V5c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgYmluZGluZyBrZXlzXG4gKi9cbkFraWxpLmpvaW5CaW5kaW5nS2V5cyA9IGZ1bmN0aW9uKGtleXMpIHtcbiAgcmV0dXJuIGtleXMubWFwKGVsID0+IGVsLnRvU3RyaW5nKCkpLmpvaW4oJy4nKTtcbn07XG5cbi8qKlxuICogQWRkIHNjb3BlIHRvIHRoZSBzY29wZXMgbGlzdFxuICpcbiAqIEBwYXJhbSBzY29wZVxuICovXG5Ba2lsaS5hZGRTY29wZSA9IGZ1bmN0aW9uKHNjb3BlKSB7XG4gIGlmKHRoaXMuX19zY29wZXNbc2NvcGUuX19uYW1lXSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgU2NvcGUgbmFtZSAke3Njb3BlLl9fbmFtZX0gYWxyZWFkeSBleGlzdHNgKTtcbiAgfVxuXG4gIHRoaXMuX19zY29wZXNbc2NvcGUuX19uYW1lXSA9IHNjb3BlO1xufTtcblxuLyoqXG4gKiBHZXQgc2NvcGUgZnJvbSB0aGUgc2NvcGVzIGxpc3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHNjb3BlIG5hbWVcbiAqIEByZXR1cm5zIHtTY29wZX1cbiAqL1xuQWtpbGkuZ2V0U2NvcGUgPSBmdW5jdGlvbihuYW1lKSB7XG4gIHJldHVybiB0aGlzLl9fc2NvcGVzW25hbWVdO1xufTtcblxuLyoqXG4gKiBEZWxldGUgc2NvcGUgZnJvbSB0aGUgc2NvcGVzIGxpc3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHNjb3BlIG5hbWVcbiAqL1xuQWtpbGkucmVtb3ZlU2NvcGUgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGxldCBzY29wZSA9IHRoaXMuX19zY29wZXNbbmFtZV07XG5cbiAgc2NvcGUuX19jb21wb25lbnQgPSBudWxsO1xuICBzY29wZS5fX2VsID0gbnVsbDtcbiAgc2NvcGUuX19wYXJlbnQgPSBudWxsO1xuICB0aGlzLl9fc2NvcGVzW25hbWVdID0gbnVsbDtcbiAgZGVsZXRlIHRoaXMuX19zY29wZXNbbmFtZV07XG59O1xuXG4vKipcbiAqIEdldCBhbGwgZWxlbWVudHMgd2l0aCBhdHRhY2hlZCBBa2lsaSBjb21wb25lbnRzXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3RyZWU9dHJ1ZV0gLSByZXR1cm4gYXJyYXkgb2YgdGhlIHBhcmVudHMgaWYgdHJ1ZSwgY2xvc2VzdCBwYXJlbnQgaWYgZmFsc2VcbiAqIEByZXR1cm5zIHtBcnJheXxIVE1MRWxlbWVudHxudWxsfVxuICovXG5Ba2lsaS5nZXRBa2lsaVBhcmVudHMgPSBmdW5jdGlvbiAoZWwsIHRyZWUgPSB0cnVlKSB7XG4gIGxldCBhcnIgPSBbXTtcblxuICBmdW5jdGlvbiBjaGVjayhub2RlKSB7XG4gICAgaWYoIW5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKG5vZGUucGFyZW50Tm9kZS5fX2FraWxpKSB7XG4gICAgICBhcnIucHVzaChub2RlLnBhcmVudE5vZGUpO1xuXG4gICAgICBpZighdHJlZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2sobm9kZS5wYXJlbnROb2RlKTtcbiAgfVxuXG4gIGNoZWNrKGVsKTtcblxuICByZXR1cm4gdHJlZT8gYXJyOiBhcnJbMF07XG59O1xuXG4vKipcbiAqIFNldCBlbGVtZW50IGlubmVyIGh0bWwgd2l0aCBjb250ZW50IHJlcGxhY2luZ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwiPGk+SGVsbG88L2k+PGI+V29ybGQ8L2I+XCJcbiAqIGVsLmlubmVySFRNTCA9IFwiPGI+V29ybGQ8L2I+XCI7XG4gKiBBa2lsaS5zZXRUZW1wbGF0ZShlbCwgXCI8aT5IZWxsbzwvaT4ke3RoaXMuX19jaGlsZHJlbn1cIik7XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuQWtpbGkuc2V0VGVtcGxhdGUgPSBmdW5jdGlvbihlbCwgdGVtcGxhdGUpIHtcbiAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKC9cXCR7KCgoPyFcXCR7KVxccyp0aGlzXFwuX19jb250ZW50XFxzKikqKX0vLCBlbC5pbm5lckhUTUwpO1xuICBlbC5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcblxuICByZXR1cm4gZWwuaW5uZXJIVE1MO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSB1bmlxdWUgc2NvcGUgbmFtZVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbkFraWxpLmNyZWF0ZVNjb3BlTmFtZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdXRpbHMuY3JlYXRlUmFuZG9tU3RyaW5nKDE2LCAoc3RyKSA9PiB7XG4gICAgcmV0dXJuICEhdGhpcy5fX3Njb3Blc1tzdHJdO1xuICB9KTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSBmdW5jdGlvbi5cbiAqIEV2ZXJ5IHNjb3BlIHZhcmlhYmxlIGNoYW5nZSBjYWxscyBhY2NvcmRpbmcgbm9kZSBldmFsdWF0aW9uLlxuICogRm9yIGV4YW1wbGUsIGlmIHlvdSBjaGFuZ2Ugc29tZSBzY29wZSB2YXJpYWJsZSBpbiB0aGUgbG9vcCAtIGV2YWx1YXRpb24gd2lsbCBiZSBjYWxsZWQgb24gdGhlIGVhY2ggY2hhbmdlLlxuICogSXQgbWF5IGJlIHNsb3cgZm9yIHRoZSBhcHBsaWNhdGlvbi5cbiAqIFlvdSBjYW4gaXNvbGF0ZSB0aGlzIGFjdGlvbiBhbmQgcnVuIGFsbCBldmFsdWF0aW9uIHByb2Nlc3MgYWZ0ZXIgcGFzc2VkIGZ1bmN0aW9uIGF0IG9uY2UuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS5pc29sYXRlID0gZnVuY3Rpb24oZm4pIHtcbiAgaWYodGhpcy5fX2lzb2xhdGlvbikge1xuICAgIHJldHVybiBmbigpO1xuICB9XG5cbiAgdGhpcy5fX2lzb2xhdGlvbiA9IHt9O1xuXG4gIGxldCByZXMgPSBmbigpO1xuICBsZXQgcHJvcHMgPSBbXTtcblxuICBmb3IobGV0IGsgaW4gdGhpcy5fX2lzb2xhdGlvbikge1xuICAgIGlmKCF0aGlzLl9faXNvbGF0aW9uLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBwcm9wcy5wdXNoKHRoaXMuX19pc29sYXRpb25ba10pO1xuICB9XG5cbiAgdGhpcy5fX2lzb2xhdGlvbiA9IG51bGw7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IHByb3BzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBwcm9wID0gcHJvcHNbaV07XG5cbiAgICBpZihwcm9wLmlzRGVsZXRlZCkge1xuICAgICAgcHJvcC5jb21wb25lbnQuX19ldmFsdWF0ZUJ5S2V5cyhwcm9wLmtleXMsIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKHByb3Aua2V5cywgcHJvcC5jb21wb25lbnQuc2NvcGUsIChsYXN0LCB2YWwpID0+IHtcbiAgICAgIGlmKCFsYXN0KSB7XG4gICAgICAgIHJldHVybiB2YWwgfHwge307XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcm9wLnZhbHVlO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvcHMgPSBudWxsO1xuXG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIFN0b3AgZXZhbHVhdGlvbiBiZWZvcmUgdGhlIGZ1bmN0aW9uIGFuZCBjb250aW51ZSBhZnRlclxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkudW5ldmFsdWF0ZWQgPSBmdW5jdGlvbihmbikge1xuICBsZXQgZXZhbHVhdGlvbiA9IHRoaXMuX19ldmFsdWF0aW9uO1xuICBsZXQgcmVzO1xuXG4gIHRoaXMuX19ldmFsdWF0aW9uID0gbnVsbDtcbiAgcmVzID0gZm4oKTtcbiAgdGhpcy5fX2V2YWx1YXRpb24gPSBldmFsdWF0aW9uO1xuXG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIFN0b3AgaXNvbGF0aW9uIGJlZm9yZSB0aGUgZnVuY3Rpb24gYW5kIGNvbnRpbnVlIGFmdGVyXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS51bmlzb2xhdGVkID0gZnVuY3Rpb24oZm4pIHtcbiAgbGV0IGV2YWx1YXRpb24gPSB0aGlzLl9faXNvbGF0aW9uO1xuICBsZXQgcmVzO1xuXG4gIHRoaXMuX19pc29sYXRpb24gPSBudWxsO1xuICByZXMgPSBmbigpO1xuICB0aGlzLl9faXNvbGF0aW9uID0gZXZhbHVhdGlvbjtcblxuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zPXt9XVxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLmluaXRpYWxpemUgPSBmdW5jdGlvbihlbCwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCByZWNvbXBpbGUgPSBvcHRpb25zLnJlY29tcGlsZTtcbiAgbGV0IGNvbXBvbmVudCA9IGVsLl9fYWtpbGk7XG5cbiAgaWYoY29tcG9uZW50KSB7XG4gICAgaWYocmVjb21waWxlKSB7XG4gICAgICBjb21wb25lbnQuX19yZWNvbXBpbGUoKTtcblxuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgaXNSb290ID0gZWwgPT09IHRoaXMuX19yb290O1xuICBsZXQgY29tcG9uZW50TmFtZSA9IHV0aWxzLnRvRGFzaENhc2UoZWwuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKSB8fCBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpO1xuICBsZXQgX0NvbXBvbmVudCA9IHRoaXMuX19jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdO1xuXG4gIENIRUNLX0FMSUFTRVM6IGlmKCFfQ29tcG9uZW50KSB7XG4gICAgbGV0IHNlbGVjdG9ycyA9IE9iamVjdC5rZXlzKHRoaXMuX19hbGlhc2VzKTtcblxuICAgIGlmKCFzZWxlY3RvcnMubGVuZ3RoKSB7XG4gICAgICBicmVhayBDSEVDS19BTElBU0VTO1xuICAgIH1cblxuICAgIGxldCBzZWxlY3RvckFsbCA9IHNlbGVjdG9ycy5qb2luKCcsJyk7XG5cbiAgICBpZighZWwubWF0Y2hlcyhzZWxlY3RvckFsbCkpIHtcbiAgICAgIGJyZWFrIENIRUNLX0FMSUFTRVM7XG4gICAgfVxuXG4gICAgZm9yKGxldCBzZWxlY3RvciBpbiB0aGlzLl9fYWxpYXNlcykge1xuICAgICAgaWYoIXRoaXMuX19hbGlhc2VzLmhhc093blByb3BlcnR5KHNlbGVjdG9yKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYoZWwubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgX0NvbXBvbmVudCA9IHRoaXMuX19jb21wb25lbnRzW3RoaXMuX19hbGlhc2VzW3NlbGVjdG9yXV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmKCFfQ29tcG9uZW50ICYmICFpc1Jvb3QpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZighX0NvbXBvbmVudCkge1xuICAgIF9Db21wb25lbnQgPSB0aGlzLkNvbXBvbmVudDtcbiAgfVxuXG4gIGlmKF9Db21wb25lbnQubWF0Y2hlcyAmJiAhZWwubWF0Y2hlcyhfQ29tcG9uZW50Lm1hdGNoZXMpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29tcG9uZW50ID0gbmV3IF9Db21wb25lbnQoZWwsIHt9KTtcblxuICBpZihjb21wb25lbnQuX19jYW5jZWxsZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb21wb25lbnQuX19jcmVhdGUoKTtcblxuICByZXR1cm4gY29tcG9uZW50O1xufTtcblxuLyoqXG4gKiBDb21waWxlIHRoZSBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbkFraWxpLmNvbXBpbGUgPSBmdW5jdGlvbihyb290LCBvcHRpb25zID0geyByZWNvbXBpbGU6IGZhbHNlIH0pIHtcbiAgbGV0IGVsZW1lbnRzID0gW107XG5cbiAgbGV0IG5lc3RlZEluaXRpYWxpemluZyA9IChlbCkgPT4ge1xuICAgIGxldCBjb21wb25lbnQgPSB0aGlzLmluaXRpYWxpemUoZWwsIG9wdGlvbnMpO1xuICAgIGxldCBjaGlsZHJlbiA9IGVsLmNoaWxkcmVuO1xuXG4gICAgY29tcG9uZW50ICYmIGVsZW1lbnRzLnB1c2goY29tcG9uZW50KTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICBuZXN0ZWRJbml0aWFsaXppbmcoY2hpbGQpO1xuICAgIH1cbiAgfTtcblxuICBuZXN0ZWRJbml0aWFsaXppbmcocm9vdCk7XG5cbiAgbGV0IHAgPSBbXTtcblxuICBmb3IobGV0IGkgPSAwLCBsID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGNvbXBvbmVudCA9IGVsZW1lbnRzW2ldO1xuXG4gICAgcC5wdXNoKGNvbXBvbmVudC5fX2NvbXBpbGUoKSk7XG4gIH1cblxuICByZXR1cm4gUHJvbWlzZS5hbGwocCkudGhlbigoKSA9PiB7XG4gICAgbGV0IHIgPSBbXTtcblxuICAgIGZvcihsZXQgaSA9IGVsZW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgY29tcG9uZW50ID0gZWxlbWVudHNbaV07XG5cbiAgICAgIHIucHVzaChjb21wb25lbnQuX19yZXNvbHZlKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLmFsbChyKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIHRoZSBjb21wb25lbnQgb3IgZ2V0IGl0IGlmIGZuIGlzIG5vdCBwYXNzZWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtDb21wb25lbnR9IFtmbl1cbiAqL1xuQWtpbGkuY29tcG9uZW50ID0gZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuICBpZighZm4pIHtcbiAgICByZXR1cm4gdGhpcy5fX2NvbXBvbmVudHNbbmFtZV0gfHwgbnVsbDtcbiAgfVxuXG4gIGlmKHRoaXMuX19jb21wb25lbnRzW25hbWVdICYmIEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICBjb25zb2xlLndhcm4oYENvbXBvbmVudCAke25hbWV9IGFscmVhZHkgd2FzIGFkZGVkYCk7XG4gIH1cblxuICB0aGlzLl9fY29tcG9uZW50c1tuYW1lXSA9IGZuO1xufTtcblxuLyoqXG4gKiBVbnJlZ2lzdGVyIHRoZSBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5Ba2lsaS51bnJlZ2lzdGVyQ29tcG9uZW50ID0gZnVuY3Rpb24obmFtZSkge1xuICBkZWxldGUgdGhpcy5fX2NvbXBvbmVudHNbbmFtZV07XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIHRoZSBzZWxlY3RvciBhbGlhcyBvciBnZXQgaXQgaWYgY29tcG9uZW50IG5hbWUgaXMgbm90IHBhc3NlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciAtIERPTSBzZWxlY3RvclxuICogQHBhcmFtIHtzdHJpbmd9IFtjb21wb25lbnROYW1lXVxuICovXG5Ba2lsaS5hbGlhcyA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBjb21wb25lbnROYW1lID0gJycpIHtcbiAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUudG9Mb3dlckNhc2UoKTtcblxuICBpZighY29tcG9uZW50TmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gfHwgbnVsbDtcbiAgfVxuXG4gIGlmKHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXSAmJiBBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgY29uc29sZS53YXJuKGBBbGlhcyB3aXRoIHNlbGVjdG9yICR7c2VsZWN0b3J9IGFscmVhZHkgd2FzIGFkZGVkYCk7XG4gIH1cblxuICB0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gPSBjb21wb25lbnROYW1lO1xufTtcblxuLyoqXG4gKiBVbnJlZ2lzdGVyIHRoZSBzZWxlY3RvciBhbGlhc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICovXG5Ba2lsaS51bnJlZ2lzdGVyQWxpYXMgPSBmdW5jdGlvbihzZWxlY3Rvcikge1xuICBkZWxldGUgdGhpcy5fX2NvbXBvbmVudHNbc2VsZWN0b3JdO1xufTtcblxuLyoqXG4gKiBJc29sYXRlIGFycmF5IHByb3RvdHlwZSBmdW5jdGlvbnNcbiAqL1xuQWtpbGkuaXNvbGF0ZUFycmF5UHJvdG90eXBlID0gZnVuY3Rpb24oKSB7XG4gIGxldCBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoQXJyYXkucHJvdG90eXBlKTtcblxuICBmb3IobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICBsZXQgb2xkID0gQXJyYXkucHJvdG90eXBlW2tleV07XG5cbiAgICBpZih0eXBlb2Ygb2xkICE9ICdmdW5jdGlvbicgfHwga2V5ID09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIEFycmF5LnByb3RvdHlwZVtrZXldID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gQWtpbGkudW5ldmFsdWF0ZWQoKCkgPT4ge1xuICAgICAgICBpZighdGhpcy5fX2lzUHJveHkpIHtcbiAgICAgICAgICByZXR1cm4gb2xkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9sZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbn07XG5cbi8qKlxuICogSXNvbGF0ZSBzb21lIHdpbmRvdyBmdW5jdGlvbnNcbiAqL1xuQWtpbGkuaXNvbGF0ZVdpbmRvd0Z1bmN0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICB3aW5kb3cuc2V0VGltZW91dCA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LnNldFRpbWVvdXQsIDApO1xuICB3aW5kb3cuc2V0SW50ZXJ2YWwgPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5zZXRJbnRlcnZhbCwgMCk7XG4gIHdpbmRvdy5Qcm9taXNlICYmICh3aW5kb3cuUHJvbWlzZS5jb25zdHJ1Y3RvciA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LlByb21pc2UuY29uc3RydWN0b3IgLCAwKSk7XG59O1xuXG4vKipcbiAqIElzb2xhdGUgZXZlbnQgbGlzdGVuZXJzXG4gKi9cbkFraWxpLmlzb2xhdGVFdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgbGV0IG9sZEFkZEV2ZW50TGlzdGVuZXIgPSBFbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyO1xuICBsZXQgb2xkUmVtb3ZlRXZlbnRMaXN0ZW5lciA9IEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXI7XG4gIGxldCBvbGRSZW1vdmUgPSBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmU7XG5cbiAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgZGVsZXRlIHRoaXMuX19ha2lsaUxpc3RlbmVycztcblxuICAgIHJldHVybiBvbGRSZW1vdmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICBFbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBsZXQgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVycyA9IHt9O1xuICAgIH1cblxuICAgIGlmKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGFyZ3NbMV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gQWtpbGkudW5ldmFsdWF0ZWQoKCkgPT4ge1xuICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5wdXNoKHtcbiAgICAgIGxpbms6IGZuLFxuICAgICAgZm46IGFyZ3NbMV1cbiAgICB9KTtcblxuICAgIHJldHVybiBvbGRBZGRFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihuYW1lLCBmbikge1xuICAgIGlmKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVycyA9IHt9O1xuICAgIH1cblxuICAgIGlmKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV1baV07XG5cbiAgICAgIGlmKGxpc3RlbmVyLmxpbmsgPT09IGZuKSB7XG4gICAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGktLTtcbiAgICAgICAgbC0tO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdO1xuICAgIH1cblxuICAgIHJldHVybiBvbGRSZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG4vKipcbiAqIFdyYXAgdGhlIGZ1bmN0aW9uIGNhbGxiYWNrIHRvIGFuIGlzb2xhdGUgY29udGV4dFxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IFtwb3M9XCJsYXN0XCJdXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbkFraWxpLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uID0gZnVuY3Rpb24oZm4sIHBvcyA9ICdsYXN0Jykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgbGV0IGNhbGxiYWNrID0gcG9zID09ICdsYXN0Jz8gYXJnc1thcmdzLmxlbmd0aCAtIDFdOiBhcmdzW3Bvc107XG5cbiAgICBpZih0eXBlb2YgY2FsbGJhY2sgIT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgYXJnc1swXSA9ICgpID0+IHtcbiAgICAgIHJldHVybiBBa2lsaS51bmV2YWx1YXRlZCgoKSA9PiB7XG4gICAgICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xufTtcblxuLyoqXG4gKiBJc29sYXRlIHRoZSBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge29iamVjdH0gW2NvbnRleHRdXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbkFraWxpLmlzb2xhdGVGdW5jdGlvbiA9IGZ1bmN0aW9uKGZuLCBjb250ZXh0ID0gbnVsbCkge1xuICBpZihmbi5fX2FraWxpKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgbGV0IG9GbiA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IHRoaXM7XG5cbiAgICByZXR1cm4gQWtpbGkudW5ldmFsdWF0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICByZXR1cm4gZm4uYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvRm4sICdfX2FraWxpJywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcblxuICByZXR1cm4gb0ZuO1xufTtcblxuLyoqXG4gKiBFcnJvciBoYW5kbGluZ1xuICovXG5Ba2lsaS5lcnJvckhhbmRsaW5nID0gZnVuY3Rpb24oKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICB0aGlzLnRyaWdnZXJJbml0KGZhbHNlKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFRyaWdnZXIgYW4gaW5pdGlhbGl6YXRpb24gc3RhdHVzXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBzdGF0dXNcbiAqL1xuQWtpbGkudHJpZ2dlckluaXQgPSBmdW5jdGlvbihzdGF0dXMpIHtcbiAgQWtpbGkuX19pbml0ID0gc3RhdHVzO1xuICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2FraWxpLWluaXQnLCB7IGRldGFpbDogc3RhdHVzIH0pKTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhbiBhcHBsaWNhdGlvblxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFtyb290XVxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbkFraWxpLmluaXQgPSBmdW5jdGlvbihyb290KSB7XG4gIHRoaXMuX19yb290ID0gcm9vdCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKTtcblxuICBsZXQgc2VydmVyUCA9IFByb21pc2UucmVzb2x2ZSgpO1xuICBsZXQgaHRtbCA9IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIGxldCBzZXJ2ZXIgPSBodG1sLmdldEF0dHJpYnV0ZSgnYWtpbGktc2VydmVyJyk7XG5cbiAgaWYoc2VydmVyKSB7XG4gICAgaHRtbC5pbm5lckhUTUwgPSAnJztcbiAgICBodG1sLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblxuICAgIHNlcnZlclAgPSByZXF1ZXN0LmdldChzZXJ2ZXIpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaHRtbC5pbm5lckhUTUwgPSByZXMuZGF0YTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBzZXJ2ZXJQLnRoZW4oKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLmNvbXBpbGUodGhpcy5fX3Jvb3QpLnRoZW4oKCkgPT4ge1xuICAgICAgaWYocm91dGVyLl9faW5pdCkge1xuICAgICAgICByZXR1cm4gcm91dGVyLmNoYW5nZVN0YXRlKCk7XG4gICAgICB9XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICBzZXJ2ZXIgJiYgKGh0bWwuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJyk7XG4gICAgICB0aGlzLnRyaWdnZXJJbml0KHRydWUpO1xuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHRoaXMudHJpZ2dlckluaXQoZmFsc2UpO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbi8qKlxuICogRGVmaW5lIGFsbCBkZWZhdWx0IGNvbXBvbmVudHNcbiAqL1xuQWtpbGkuZGVmaW5lID0gZnVuY3Rpb24oKSB7XG4gIEEuZGVmaW5lKCk7XG4gIENvbnRlbnQuZGVmaW5lKCk7XG4gIENvbXBvbmVudC5kZWZpbmUoKTtcbiAgRW1iZWQuZGVmaW5lKCk7XG4gIEZvci5kZWZpbmUoKTtcbiAgSW5jbHVkZS5kZWZpbmUoKTtcbiAgSWZyYW1lLmRlZmluZSgpO1xuICBJbWFnZS5kZWZpbmUoKTtcbiAgSW5wdXQuZGVmaW5lKCk7XG4gIElmLmRlZmluZSgpO1xuICBSYWRpby5kZWZpbmUoKTtcbiAgUm91dGUuZGVmaW5lKCk7XG4gIFNlbGVjdC5kZWZpbmUoKTtcbiAgVGV4dGFyZWEuZGVmaW5lKCk7XG59O1xuXG5Ba2lsaS5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5Ba2lsaS5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5Ba2lsaS5TY29wZSA9IFNjb3BlO1xuQWtpbGkudXRpbHMgPSB1dGlscztcbkFraWxpLmNvbXBvbmVudHMuQSA9IEE7XG5Ba2lsaS5jb21wb25lbnRzLkNvbnRlbnQgPSBDb250ZW50O1xuQWtpbGkuY29tcG9uZW50cy5Gb3IgPSBGb3I7XG5Ba2lsaS5jb21wb25lbnRzLkVtYmVkID0gRW1iZWQ7XG5Ba2lsaS5jb21wb25lbnRzLklmID0gSWY7XG5Ba2lsaS5jb21wb25lbnRzLkluY2x1ZGUgPSBJbmNsdWRlO1xuQWtpbGkuY29tcG9uZW50cy5JbnB1dCA9IElucHV0O1xuQWtpbGkuY29tcG9uZW50cy5JZnJhbWUgPSBJZnJhbWU7XG5Ba2lsaS5jb21wb25lbnRzLkltYWdlID0gSW1hZ2U7XG5Ba2lsaS5jb21wb25lbnRzLlJhZGlvID0gUmFkaW87XG5Ba2lsaS5jb21wb25lbnRzLlJvdXRlID0gUm91dGU7XG5Ba2lsaS5jb21wb25lbnRzLlNlbGVjdCA9IFNlbGVjdDtcbkFraWxpLmNvbXBvbmVudHMuVGV4dCA9IFRleHQ7XG5Ba2lsaS5jb21wb25lbnRzLlRleHRhcmVhID0gVGV4dGFyZWE7XG5Ba2lsaS5zZXJ2aWNlcy5yZXF1ZXN0ID0gcmVxdWVzdDtcbkFraWxpLnNlcnZpY2VzLnJvdXRlciA9IHJvdXRlcjtcblxud2luZG93LkFraWxpID0gQWtpbGk7XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnRzID0gQWtpbGkuY29tcG9uZW50cztcbmV4cG9ydCBjb25zdCBzZXJ2aWNlcyA9IEFraWxpLnNlcnZpY2VzO1xuZXhwb3J0IGRlZmF1bHQgQWtpbGk7XG5cbkFraWxpLmRlZmluZSgpO1xuQWtpbGkuZXJyb3JIYW5kbGluZygpO1xuQWtpbGkuaXNvbGF0ZUV2ZW50cygpO1xuQWtpbGkuaXNvbGF0ZUFycmF5UHJvdG90eXBlKCk7XG5Ba2lsaS5pc29sYXRlV2luZG93RnVuY3Rpb25zKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FraWxpLmpzIiwiaW1wb3J0IEFraWxpIGZyb20gJy4vYWtpbGkuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9zZXJ2aWNlcy9yZXF1ZXN0LmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcblxuY29uc3QgZXZhbHVhdGlvblJlZ2V4ID0gL1xcJHsoKCg/IVxcJHspLikqKX0vO1xuY29uc3QgZXZhbHVhdGlvblJlZ2V4R2xvYmFsID0gbmV3IFJlZ0V4cChldmFsdWF0aW9uUmVnZXguc291cmNlLCBcImdcIik7XG5jb25zdCBzeXN0ZW1BdHRyaWJ1dGVzID0gWydjb21wb25lbnQnLCAnc2NvcGUnXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgc3RhdGljIG5lc3RlZFdhdGNoaW5nO1xuICBzdGF0aWMgbWF0Y2hlcyA9ICcnO1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbXTtcbiAgc3RhdGljIGV2ZW50cyA9IFtdO1xuICBzdGF0aWMgY29udHJvbEF0dHJpYnV0ZXMgPSBmYWxzZTtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gZmFsc2U7XG4gIHN0YXRpYyB0ZW1wbGF0ZSA9ICcnO1xuICBzdGF0aWMgdGVtcGxhdGVVcmwgPSAnJztcbiAgc3RhdGljIHNjb3BlID0gbnVsbDtcblxuICAvKipcbiAgICogRnVuY3Rpb24gdG8gZGVmaW5lIHRoZSBjb21wb25lbnRcbiAgICovXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdjb21wb25lbnQnLCBDb21wb25lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIHRoZSBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBleHByZXNzaW9uXG4gICAqIEBwYXJhbSB7RXZlbnR9IFtldmVudD1udWxsXVxuICAgKi9cbiAgc3RhdGljIHBhcnNlKGNvbnRleHQsIGV4cHJlc3Npb24sIGV2ZW50ID0gbnVsbCkge1xuICAgIHJldHVybiAoZnVuY3Rpb24gKGV4cHJlc3Npb24sIGV2ZW50KSB7XG4gICAgICByZXR1cm4gZXZhbChleHByZXNzaW9uKTtcbiAgICB9KS5jYWxsKGNvbnRleHQsIGV4cHJlc3Npb24sIGV2ZW50KVxuICB9XG5cbiAgY29uc3RydWN0b3IoZWwsIHNjb3BlID0ge30pIHtcbiAgICB0aGlzLl9faXNNb3VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2lzQ29tcGlsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2JpbmRpbmdzID0ge307XG4gICAgdGhpcy5fX2V2YWx1YXRpbmdFdmVudCA9IG51bGw7XG4gICAgdGhpcy5fX3JlY29tcGlsaW5nID0gbnVsbDtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0ge307XG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IG51bGw7XG4gICAgdGhpcy5fX2NoaWxkcmVuID0gW107XG4gICAgdGhpcy5fX3BhcmVudCA9IG51bGw7XG4gICAgdGhpcy5fX3BhcmVudHMgPSBbXTtcbiAgICB0aGlzLl9fYXR0cnMgPSB7fTtcbiAgICB0aGlzLl9fYXR0cmlidXRlT2YgPSBudWxsO1xuICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50ID0gdGhpcztcbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgdGhpcy5lbCA9IGVsO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiB0aGUgcmVjb21waWxhdGlvblxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlY29tcGlsZSgpIHtcbiAgICB0aGlzLl9faXNNb3VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2lzQ29tcGlsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5fX2Rpc2FibGVQcm94eSA9IG51bGw7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IHt9O1xuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IHt9O1xuICAgIHRoaXMuX19zZXRFdmVudHMoKTtcbiAgICB0aGlzLl9fc2V0UGFyZW50cygpO1xuICAgIHRoaXMuX19zZXRCb29sZWFuQXR0cmlidXRlcygpO1xuICAgIHRoaXMuX19kZWZpbmVBdHRyaWJ1dGVzKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIG9uIHRoZSBjcmVhdGlvblxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZSgpIHtcbiAgICB0aGlzLmVsLl9fYWtpbGkgPSB0aGlzO1xuICAgIHRoaXMuX19pbml0aWFsaXplKCk7XG4gICAgdGhpcy5fX3NldEV2ZW50cygpO1xuICAgIHRoaXMuX19zZXRQYXJlbnRzKCk7XG4gICAgdGhpcy5fX3NldEJvb2xlYW5BdHRyaWJ1dGVzKCk7XG4gICAgdGhpcy5fX2RlZmluZUF0dHJpYnV0ZXMoKTtcblxuICAgIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVkKHRoaXMuYXR0cnMpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiB0aGUgY29tcGlsYXRpb25cbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIF9fY29tcGlsZSgpIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuX19jb250cm9sQXR0cmlidXRlcyB8fCAhdGhpcy5fX2V2YWx1YXRlUGFyZW50O1xuICAgIGxldCBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbiAgICB0aGlzLl9fYXR0cmlidXRlT2YgPSBjb250cm9sPyB0aGlzOiB0aGlzLl9fZXZhbHVhdGVQYXJlbnQuX19ha2lsaTtcblxuICAgIGlmKCF0aGlzLl9fcmVjb21waWxpbmcgfHwgdGhpcy5fX2NvbXBpbGluZy5uZXdQYXJlbnQgfHwgdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzKSB7XG4gICAgICB0aGlzLl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKHRoaXMuZWwsIHRoaXMuX19hdHRyaWJ1dGVPZik7XG4gICAgfVxuXG4gICAgbGV0IGludGVycG9sYXRlID0gKGNoaWxkcmVuLCBwYXJlbnQpID0+IHtcbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYoY2hpbGQubm9kZVR5cGUgPT0gMykge1xuICAgICAgICAgIHRoaXMuX19pbml0aWFsaXplTm9kZShjaGlsZCwgcGFyZW50KTtcblxuICAgICAgICAgIGNoaWxkLm5vZGVWYWx1ZSA9IHRoaXMuX19ldmFsdWF0ZShjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihjaGlsZC5ub2RlVHlwZSA9PSAxICYmICFjaGlsZC5fX2FraWxpKSB7XG4gICAgICAgICAgdGhpcy5fX2ludGVycG9sYXRlQXR0cmlidXRlcyhjaGlsZCk7XG4gICAgICAgICAgaW50ZXJwb2xhdGUoY2hpbGQuY2hpbGROb2RlcywgY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGludGVycG9sYXRlKHRoaXMuZWwuY2hpbGROb2RlcywgdGhpcy5lbCk7XG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IHRydWU7XG5cbiAgICBsZXQgcmVzO1xuXG4gICAgaWYoIXRoaXMuX19yZWNvbXBpbGluZykge1xuICAgICAgcmVzID0gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0cnMub25Db21waWxlZCAmJiB0aGlzLmF0dHJzLm9uQ29tcGlsZWQudHJpZ2dlcigpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBpbGVkKCk7XG4gICAgICB9KTtcblxuICAgICAgaWYodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkge1xuICAgICAgICBwID0gcmVxdWVzdC5nZXQodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLl9fY29udGVudDtcbiAgICAgICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCByZXMuZGF0YSk7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX19jb250ZW50O1xuXG4gICAgICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uUmVjb21waWxlZCAmJiB0aGlzLmF0dHJzLm9uUmVjb21waWxlZC50cmlnZ2VyKCk7XG4gICAgICAgIHRoaXMucmVjb21waWxlZCgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fX2lzQ29tcGlsZWQgPSB0cnVlO1xuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IG51bGw7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IG51bGw7XG5cbiAgICByZXR1cm4gcC50aGVuKCgpID0+IHtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZSB0aGUgY29tcG9uZW50XG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBfX3Jlc29sdmUoKSB7XG4gICAgaWYodGhpcy5fX3JlY29tcGlsaW5nKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5hdHRycy5vblJlc29sdmVkICYmIHRoaXMuYXR0cnMub25SZXNvbHZlZC50cmlnZ2VyKCk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnJlc29sdmVkKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnQgb2YgdGhlIHtAc2VlIENvbXBvbmVudCNfX2NvbXBpbGV9IG1ldGhvZFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemUoKSB7XG4gICAgbGV0IHBhcmVudCA9IEFraWxpLmdldEFraWxpUGFyZW50cyh0aGlzLmVsLCBmYWxzZSk7XG4gICAgbGV0IFNjb3BlID0gdGhpcy5jb25zdHJ1Y3Rvci5zY29wZSB8fCBBa2lsaS5TY29wZTtcbiAgICBsZXQgc2NvcGU7XG4gICAgbGV0IGlzUm9vdCA9IEFraWxpLl9fcm9vdCA9PT0gdGhpcy5lbDtcblxuICAgIGlmKHBhcmVudCkge1xuICAgICAgc2NvcGUgPSBuZXcgU2NvcGUodGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3Njb3BlJykgfHwgQWtpbGkuY3JlYXRlU2NvcGVOYW1lKCksIHRoaXMuZWwsIHRoaXMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNjb3BlID0gbmV3IFNjb3BlKGlzUm9vdD8gJ3Jvb3QnOiBBa2lsaS5jcmVhdGVTY29wZU5hbWUoKSwgdGhpcy5lbCwgdGhpcyk7XG4gICAgICBpc1Jvb3QgJiYgKEFraWxpLnJvb3QgPSB0aGlzKTtcbiAgICB9XG5cbiAgICBsZXQgX19zY29wZSA9IHNjb3BlO1xuICAgIGxldCBfc2NvcGUgPSBPYmplY3QuYXNzaWduKHNjb3BlLCB0aGlzLnNjb3BlKTtcbiAgICBsZXQgbmVzdGVkV2F0Y2hpbmcgPSBBa2lsaS5vcHRpb25zLm5lc3RlZFdhdGNoaW5nO1xuICAgIGxldCBjb250cm9sQXR0cmlidXRlcyA9IHRoaXMuY29uc3RydWN0b3IuY29udHJvbEF0dHJpYnV0ZXM7XG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuY29uc3RydWN0b3IuZXZlbnRzO1xuXG4gICAgaWYodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZSkge1xuICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgdGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgaWYodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkge1xuICAgICAgdGhpcy5fX2NvbnRlbnQgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gICAgaWYodGhpcy5jb25zdHJ1Y3Rvci5uZXN0ZWRXYXRjaGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXN0ZWRXYXRjaGluZyA9IHRoaXMuY29uc3RydWN0b3IubmVzdGVkV2F0Y2hpbmc7XG4gICAgfVxuICAgIGVsc2UgaWYoU2NvcGUubmVzdGVkV2F0Y2hpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbmVzdGVkV2F0Y2hpbmcgPSBTY29wZS5uZXN0ZWRXYXRjaGluZztcbiAgICB9XG5cbiAgICB0aGlzLl9fc2NvcGUgPSBfX3Njb3BlO1xuICAgIHRoaXMuX19ldmVudHMgPSBldmVudHM7XG4gICAgdGhpcy5fX25lc3RlZFdhdGNoaW5nID0gbmVzdGVkV2F0Y2hpbmc7XG4gICAgdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzID0gY29udHJvbEF0dHJpYnV0ZXM7XG5cbiAgICBBa2lsaS5hZGRTY29wZShzY29wZSk7XG5cbiAgICBpZihuZXN0ZWRXYXRjaGluZykge1xuICAgICAgc2NvcGUgPSB0aGlzLl9fbmVzdGVkT2JzZXJ2ZShfc2NvcGUsIFtdKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzY29wZSA9IHRoaXMuX19vYnNlcnZlKF9zY29wZSwgW10pO1xuICAgIH1cblxuICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYm9vbGVhbiBhdHRyaWJ1dGVzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKSB7XG4gICAgdGhpcy5ib29sZWFuQXR0cmlidXRlcyA9IFtdLmNvbmNhdChBa2lsaS5odG1sQm9vbGVhbkF0dHJpYnV0ZXMsIHRoaXMuY29uc3RydWN0b3IuYm9vbGVhbkF0dHJpYnV0ZXMpO1xuXG4gICAgbGV0IHNldEF0dHIgPSAoZWwpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBhdHRycyA9IGVsLmF0dHJpYnV0ZXMsIGwgPSBhdHRycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IG5vZGUgPSBhdHRyc1tpXTtcblxuICAgICAgICBpZih0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzLmluZGV4T2Yobm9kZS5ub2RlTmFtZSkgIT0gLTEpIHtcbiAgICAgICAgICBpZihlbC5oYXNBdHRyaWJ1dGUoYGJvb2xlYW4tJHtub2RlLm5vZGVOYW1lfWApKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYGJvb2xlYW4tJHtub2RlLm5vZGVOYW1lfWAsIGVsLmdldEF0dHJpYnV0ZShub2RlLm5vZGVOYW1lKSB8fCBub2RlLm5vZGVOYW1lKTtcbiAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGVsLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBlbC5jaGlsZHJlbltpXTtcblxuICAgICAgICBpZighY2hpbGQuX19ha2lsaSkge1xuICAgICAgICAgIHNldEF0dHIoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNldEF0dHIodGhpcy5lbCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGV2ZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldEV2ZW50cygpIHtcbiAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5fX2V2ZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBldiA9IHRoaXMuX19ldmVudHNbaV07XG5cbiAgICAgICEvXm9uLS9pLnRlc3QoZXYpICYmIChldiA9ICdvbi0nICsgZXYpO1xuXG4gICAgICBpZighdGhpcy5lbC5oYXNBdHRyaWJ1dGUoZXYpKSB7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGV2LCAnJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjb21wb25lbnQgcGFyZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldFBhcmVudHMoKSB7XG4gICAgbGV0IHBhcmVudHMgPSBBa2lsaS5nZXRBa2lsaVBhcmVudHModGhpcy5lbCk7XG5cbiAgICBpZighcGFyZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbmV3UGFyZW50ID0gdGhpcy5fX3BhcmVudCAhPT0gcGFyZW50c1swXTtcbiAgICBsZXQgZXZhbHVhdGVQYXJlbnQgPSBudWxsO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHBhcmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcGFyZW50ID0gcGFyZW50c1tpXTtcblxuICAgICAgaWYoIXBhcmVudC5fX2FraWxpLmNvbnN0cnVjdG9yLnRyYW5zcGFyZW50KSB7XG4gICAgICAgIGV2YWx1YXRlUGFyZW50ID0gcGFyZW50O1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX19jb21waWxpbmcubmV3UGFyZW50ID0gbmV3UGFyZW50O1xuICAgIG5ld1BhcmVudCAmJiB0aGlzLl9fZGV0YWNoKCk7XG5cbiAgICBpZih0aGlzLmNvbnN0cnVjdG9yLnRyYW5zcGFyZW50KSB7XG4gICAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudCA9IGV2YWx1YXRlUGFyZW50Ll9fYWtpbGk7XG4gICAgfVxuXG4gICAgdGhpcy5fX2V2YWx1YXRlUGFyZW50ID0gZXZhbHVhdGVQYXJlbnQ7XG4gICAgdGhpcy5fX3BhcmVudCA9IHBhcmVudHNbMF07XG4gICAgdGhpcy5fX3BhcmVudHMgPSBwYXJlbnRzO1xuICAgIHRoaXMuc2NvcGUuX19wYXJlbnQgPSB0aGlzLl9fZXZhbHVhdGVQYXJlbnQuX19ha2lsaS5zY29wZTtcbiAgICAhdGhpcy5fX3JlY29tcGlsaW5nICYmIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2FkZENoaWxkKHRoaXMuZWwpO1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLnNjb3BlLCB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19zY29wZSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGNoaWxkIGVsZW1lbnQgdG8gdGhlIGxpc3RcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hZGRDaGlsZChlbCkge1xuICAgIHRoaXMuX19jaGlsZHJlbi5wdXNoKGVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGxpY2UgY2hpbGQgZnJvbSB0aGUgbGlzdFxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NwbGljZUNoaWxkKGVsKSB7XG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuX19jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuX19jaGlsZHJlbltpXTtcblxuICAgICAgaWYoY2hpbGQgPT09IGVsKSB7XG4gICAgICAgIHRoaXMuX19jaGlsZHJlbi5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGktLTtcbiAgICAgICAgbC0tO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBZb3UgY2FuIGNoYW5nZSBleHByZXNzaW9uIGJlZm9yZSBwYXJzaW5nIGhlcmVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4cHJlc3Npb25cbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0UGFyc2VkRXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgbm9kZSBoYXMgYW55IHByb3BlcnR5IGNoYW5nZXMgb3Igbm90XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jaGVja0V2YWx1YXRpb24obm9kZSkge1xuICAgIGlmICghT2JqZWN0LmtleXMobm9kZS5fX3Byb3BlcnRpZXMpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgayBpbiBub2RlLl9fcHJvcGVydGllcykge1xuICAgICAgaWYoIW5vZGUuX19wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgcHJvcCA9IG5vZGUuX19wcm9wZXJ0aWVzW2tdO1xuICAgICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMocHJvcC5rZXlzLCBwcm9wLmNvbXBvbmVudC5fX3Njb3BlKTtcblxuICAgICAgaWYoIXV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlKHZhbHVlLCBwcm9wLnZhbHVlLCBwcm9wLmNvcHksIHV0aWxzLmNvcHkodmFsdWUpKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogIENoZWNrIG5vZGUgaGFzIGNoYW5nZWQgb24gdGhlIGNlcnRhaW4ga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NoZWNrTm9kZVByb3BlcnR5Q2hhbmdpbmcobm9kZSwga2V5cywgdmFsdWUpIHtcbiAgICBsZXQgcHJvcCA9IHRoaXMuX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cyk7XG5cbiAgICBpZighcHJvcCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuICF1dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSh2YWx1ZSwgcHJvcC52YWx1ZSwgcHJvcC5jb3B5LCB1dGlscy5jb3B5KHZhbHVlKSk7XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgbm9kZSBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZShub2RlKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGxldCBhdHRyaWJ1dGVWYWx1ZTtcbiAgICBsZXQgZXhwcmVzc2lvbjtcblxuICAgIGxldCByZXMgPSBub2RlLl9fZXhwcmVzc2lvbi5yZXBsYWNlKGV2YWx1YXRpb25SZWdleEdsb2JhbCwgKG0sIGQpID0+IHtcbiAgICAgIGNvdW50ZXIrKztcblxuICAgICAgbGV0IGV2YWx1YXRlO1xuICAgICAgbGV0IGV2YWx1YXRpb247XG4gICAgICBsZXQgZXhpc3RpbmdCaW5kaW5ncyA9IHt9O1xuICAgICAgbGV0IHBhcnNlVmFsdWUgPSBub2RlLl9fY29tcG9uZW50Ll9fZ2V0UGFyc2VkRXhwcmVzc2lvbihkKTtcblxuICAgICAgQWtpbGkuX19ldmFsdWF0aW9uID0geyBub2RlOiBub2RlLCBsaXN0OiBbXX07XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGV2YWx1YXRlID0gdGhpcy5jb25zdHJ1Y3Rvci5wYXJzZSh0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5zY29wZSwgcGFyc2VWYWx1ZSk7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGxldCBtZXNzYWdlID0gYFNjb3BlIHBhcnNpbmcgZXJyb3IgaW4gdGhlIHRlbXBsYXRlIGV4cHJlc3Npb246ICR7bm9kZS5fX2V4cHJlc3Npb259YDtcblxuICAgICAgICBpZighQWtpbGkub3B0aW9ucy5zaG93RXZhbHVhdGlvbkVycm9ycykge1xuICAgICAgICAgIGlmKEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihlcnIuc3RhY2spO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGV2YWx1YXRlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGV2YWx1YXRpb24gPSBBa2lsaS5fX2V2YWx1YXRpb24/IEFraWxpLl9fZXZhbHVhdGlvbi5saXN0OiBbXTtcbiAgICAgIEFraWxpLl9fZXZhbHVhdGlvbi5saXN0ID0gbnVsbDtcbiAgICAgIEFraWxpLl9fZXZhbHVhdGlvbiA9IG51bGw7XG5cbiAgICAgIGZvcihsZXQgaSA9IGV2YWx1YXRpb24ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgbGV0IGRhdGEgPSBldmFsdWF0aW9uW2ldO1xuICAgICAgICBsZXQgaGFzaCA9IGAke2RhdGEuY29tcG9uZW50Ll9fc2NvcGUuX19uYW1lfS4ke2RhdGEua2V5c1N0cmluZ31gO1xuXG4gICAgICAgIGlmKGRhdGEubm90QmluZGluZykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZXhpc3RpbmdCaW5kaW5nc1toYXNoXSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBhcmVudFZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoZGF0YS5wYXJlbnRzLCBkYXRhLmNvbXBvbmVudC5fX3Njb3BlKTtcbiAgICAgICAgbGV0IGV2YWxDb21wb25lbnQgPSBub2RlLl9fYXR0cmlidXRlT2YgfHwgbm9kZS5fX2NvbXBvbmVudDtcblxuICAgICAgICBpZih1dGlscy5pc1Njb3BlUHJveHkocGFyZW50VmFsdWUpICYmIGRhdGEuY29tcG9uZW50ICE9PSBldmFsQ29tcG9uZW50Ll9fZXZhbHVhdGlvbkNvbXBvbmVudCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGJpbmQgPSBkYXRhLmNvbXBvbmVudC5fX2dldEJvdW5kTm9kZShkYXRhLmtleXMsIG5vZGUpO1xuICAgICAgICBsZXQgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhkYXRhLmtleXMsIGRhdGEuY29tcG9uZW50Ll9fc2NvcGUpO1xuXG4gICAgICAgIGlmKCFiaW5kKSB7XG4gICAgICAgICAgZGF0YS5jb21wb25lbnQuX19iaW5kKGRhdGEua2V5cywgeyBub2RlOiBub2RlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YS5jb21wb25lbnQuX19zZXROb2RlUHJvcGVydHkobm9kZSwgZGF0YS5rZXlzLCB2YWx1ZSk7XG4gICAgICAgIGV4aXN0aW5nQmluZGluZ3NbaGFzaF0gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBleGlzdGluZ0JpbmRpbmdzID0gbnVsbDtcbiAgICAgIGV2YWx1YXRpb24gPSBudWxsO1xuXG4gICAgICBpZihub2RlIGluc3RhbmNlb2YgQXR0cikge1xuICAgICAgICBleHByZXNzaW9uID0gbTtcbiAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBldmFsdWF0ZTtcblxuICAgICAgICByZXR1cm4gdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKGV2YWx1YXRlKTtcbiAgICAgIH1cblxuICAgICAgaWYodHlwZW9mIGV2YWx1YXRlID09ICdvYmplY3QnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGV2YWx1YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlKSB7XG4gICAgICAgICAgcmV0dXJuIGV2YWx1YXRlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBldmFsdWF0ZTtcbiAgICB9KTtcblxuICAgIGlmKG5vZGUgaW5zdGFuY2VvZiBBdHRyKSB7XG4gICAgICBsZXQgdmFsdWUgPSByZXM7XG4gICAgICBsZXQgaXNCb29sZWFuQXR0cmlidXRlID0gZmFsc2U7XG5cbiAgICAgIGlmKGNvdW50ZXIpIHtcbiAgICAgICAgbm9kZS5fX2hhc0JpbmRpbmdzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYoY291bnRlciA9PSAxICYmIGV4cHJlc3Npb24gJiYgbm9kZS5fX2V4cHJlc3Npb24gPT0gZXhwcmVzc2lvbikge1xuICAgICAgICB2YWx1ZSA9IGF0dHJpYnV0ZVZhbHVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgY2xlYXJBdHRyaWJ1dGUgPSBub2RlLm5vZGVOYW1lLnJlcGxhY2UoL15ib29sZWFuLSguKykvaSwgJyQxJyk7XG5cbiAgICAgIGlmKGNsZWFyQXR0cmlidXRlICE9IG5vZGUubm9kZU5hbWUpIHtcbiAgICAgICAgaXNCb29sZWFuQXR0cmlidXRlID0gdHJ1ZTtcbiAgICAgICAgdmFsdWUgPSAhIXZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZihub2RlLl9fYXR0cmlidXRlT24pIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IG5vZGUuX19hdHRyaWJ1dGVPbjtcblxuICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gdHJ1ZTtcbiAgICAgICAgY29tcG9uZW50LmF0dHJzW3V0aWxzLnRvQ2FtZWxDYXNlKGNsZWFyQXR0cmlidXRlKV0gPSB2YWx1ZTtcbiAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChjb21wb25lbnQuX19pc0NvbXBpbGVkKSB7XG4gICAgICAgICAgQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgICAgICBjb21wb25lbnQuYXR0cnMub25DaGFuZ2VkICYmIGNvbXBvbmVudC5hdHRycy5vbkNoYW5nZWQudHJpZ2dlcih7IGtleTogY2xlYXJBdHRyaWJ1dGUsIHZhbHVlOiB2YWx1ZX0pO1xuICAgICAgICAgICAgY29tcG9uZW50LmNoYW5nZWQoY2xlYXJBdHRyaWJ1dGUsIHZhbHVlKTtcblxuICAgICAgICAgICAgbGV0IGtleSA9IHV0aWxzLnRvQ2FtZWxDYXNlKGNsZWFyQXR0cmlidXRlKTtcbiAgICAgICAgICAgIGxldCBjYW1lbEtleSA9IGtleVswXS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpO1xuICAgICAgICAgICAgbGV0IGZuTmFtZSA9ICdjaGFuZ2VkJyArIGNhbWVsS2V5O1xuICAgICAgICAgICAgbGV0IGV2Rm5OYW1lID0gJ29uQ2hhbmdlZCcgKyBjYW1lbEtleTtcblxuICAgICAgICAgICAgY29tcG9uZW50LmF0dHJzW2V2Rm5OYW1lXSAmJiBjb21wb25lbnQuYXR0cnNbZXZGbk5hbWVdLnRyaWdnZXIodmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudFtmbk5hbWVdID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgY29tcG9uZW50W2ZuTmFtZV0odmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmKGlzQm9vbGVhbkF0dHJpYnV0ZSkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IG5vZGUuX19lbGVtZW50O1xuICAgICAgICBsZXQgYXR0ciA9IHV0aWxzLnRvQ2FtZWxDYXNlKGNsZWFyQXR0cmlidXRlKTtcblxuICAgICAgICB2YWx1ZT8gZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgJ3RydWUnKTogZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBOZXN0ZWQgZXZhbHVhdGlvbiBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtib29sZWFufSBbd2l0aG91dFBhcmVudHM9ZmFsc2VdIC0gaWYgdHJ1ZSBldmFsdWF0aW9uIHdpbGwgYmUgb25seSBmb3IgdGhlIGN1cnJlbnQga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlTmVzdGVkKGtleXMsIHdpdGhvdXRQYXJlbnRzID0gZmFsc2UpIHtcbiAgICBsZXQgc2NvcGUgPSB0aGlzLl9fc2NvcGU7XG4gICAgbGV0IHByb3BzID0gW107XG5cbiAgICBpZighd2l0aG91dFBhcmVudHMpIHtcbiAgICAgIGxldCBsYXN0UHJvcHMgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgbGV0IHZhbHVlO1xuXG4gICAgICAgIGxhc3RQcm9wcyA9IFsuLi5sYXN0UHJvcHMsIGtleV07XG4gICAgICAgIHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMobGFzdFByb3BzLCBzY29wZSk7XG4gICAgICAgIHByb3BzLnB1c2goeyBrZXlzOiBsYXN0UHJvcHMsIHZhbHVlOiB2YWx1ZX0pXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcHJvcHMucHVzaCh7IGtleXM6IGtleXMsIHZhbHVlOiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCBzY29wZSl9KVxuICAgIH1cblxuICAgIGxldCBwcm9wc0xlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICAgIGxldCBlbEV2YWx1YXRlID0gKGVsZW1lbnQpID0+IHtcbiAgICAgIGxldCBjb21wb25lbnQgPSBlbGVtZW50Ll9fYWtpbGk7XG5cbiAgICAgIGZvciAobGV0IG0gPSAwOyBtIDwgcHJvcHNMZW5ndGg7IG0rKykge1xuICAgICAgICBsZXQgcHJvcCA9IHByb3BzW21dO1xuICAgICAgICBsZXQgZGF0YSA9IGNvbXBvbmVudC5fX2dldEJpbmQocHJvcC5rZXlzKTtcblxuICAgICAgICBpZiAoIWRhdGEgfHwgIWRhdGEuX19kYXRhKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBrID0gMCwgYyA9IGRhdGEuX19kYXRhLmxlbmd0aDsgayA8IGM7IGsrKykge1xuICAgICAgICAgIGxldCBiaW5kID0gZGF0YS5fX2RhdGFba107XG5cbiAgICAgICAgICBpZihjb21wb25lbnQuX19jaGVja05vZGVQcm9wZXJ0eUNoYW5naW5nKGJpbmQubm9kZSwgcHJvcC5rZXlzLCBwcm9wLnZhbHVlKSkge1xuICAgICAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZVByb3h5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2V2YWx1YXRlTm9kZShiaW5kLm5vZGUpO1xuXG4gICAgICAgICAgICBmb3IobGV0IF9rIGluIGJpbmQubm9kZS5fX3Byb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgaWYoIWJpbmQubm9kZS5fX3Byb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoX2spKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBsZXQgX3Byb3AgPSBiaW5kLm5vZGUuX19wcm9wZXJ0aWVzW19rXTtcbiAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoX3Byb3Aua2V5cywgX3Byb3AuY29tcG9uZW50Ll9fc2NvcGUpO1xuXG4gICAgICAgICAgICAgIF9wcm9wLmNvbXBvbmVudC5fX3NldE5vZGVQcm9wZXJ0eShiaW5kLm5vZGUsIF9wcm9wLmtleXMsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZVByb3h5ID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9O1xuXG4gICAgbGV0IGV2YWx1YXRlID0gKGVsZW1lbnRzKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gZWxFdmFsdWF0ZShlbGVtZW50c1tpXSk7XG5cbiAgICAgICAgZXZhbHVhdGUoY29tcG9uZW50Ll9fY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBlbEV2YWx1YXRlKHRoaXMuZWwpO1xuICAgIGV2YWx1YXRlKHRoaXMuX19jaGlsZHJlbik7XG4gIH07XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIHZhbHVlIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVsZXRlZD1mYWxzZV0gLSB0cnVlIGlmIHZhbHVlIGlzIGRlbGV0aW5nXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVCeUtleXMoa2V5cywgdmFsdWUsIGlzRGVsZXRlZCA9IGZhbHNlKSB7XG4gICAgbGV0IGRhdGEgPSB0aGlzLl9fZ2V0QmluZChrZXlzKTtcblxuICAgIGxldCB1bmJpbmQgPSAob2JqLCBwYXJlbnRzKSA9PiB7XG4gICAgICBmb3IobGV0IGsgaW4gb2JqKSB7XG4gICAgICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkoaykgfHwgayA9PSAnX19kYXRhJykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IF9rZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrXSk7XG4gICAgICAgIGxldCBfX2tleXMgPSBfa2V5cy5zbGljZSgpO1xuICAgICAgICBsZXQgX2lzRGVsZXRlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgdmFsID0gb2JqW2tdO1xuICAgICAgICBsZXQgaGFzS2V5O1xuXG4gICAgICAgIF9fa2V5cy5zaGlmdCgpO1xuICAgICAgICBoYXNLZXkgPSB1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhfX2tleXMsIHZhbHVlKTtcblxuICAgICAgICBpZih2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgJiYgIWhhc0tleSkge1xuICAgICAgICAgIF9pc0RlbGV0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodmFsICYmIHR5cGVvZiB2YWwgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB1bmJpbmQodmFsLCBfa2V5cyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9fZXZhbHVhdGVOZXN0ZWQoX2tleXMsIHRydWUpO1xuXG4gICAgICAgIGlmKHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCAhaGFzS2V5KSB7XG4gICAgICAgICAgdGhpcy5fX3VuYmluZChfa2V5cyk7XG4gICAgICAgICAgX2lzRGVsZXRlZCAmJiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhfX2tleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBkYXRhICYmIHVuYmluZChkYXRhLCBbXS5jb25jYXQoa2V5cykpO1xuICAgIHRoaXMuX19ldmFsdWF0ZU5lc3RlZChrZXlzKTtcblxuICAgIGlmKGlzRGVsZXRlZCkge1xuICAgICAgdGhpcy5fX3VuYmluZChrZXlzKTtcbiAgICAgIGlzRGVsZXRlZCAmJiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSBldmVudCBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVFdmVudChub2RlLCBlbCwgZSkge1xuICAgIGxldCBleHByZXNzaW9uID0gZXZhbHVhdGlvblJlZ2V4LmV4ZWMobm9kZS5fX2V4cHJlc3Npb24pO1xuICAgIGxldCBldmFsdWF0ZTtcblxuICAgIGlmKCFleHByZXNzaW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fX2V2YWx1YXRpbmdFdmVudCA9IHtcbiAgICAgIGVsOiBlbCxcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIGV2ZW50OiBlLFxuICAgICAgbm9kZTogbm9kZVxuICAgIH07XG5cbiAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0gbnVsbDtcbiAgICBldmFsdWF0ZSA9IHRoaXMuY29uc3RydWN0b3IucGFyc2UodGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQuc2NvcGUsIGV4cHJlc3Npb25bMV0sIGUpO1xuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSBudWxsO1xuXG4gICAgcmV0dXJuIGV2YWx1YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGNoYW5nZXMgYW5kIGV2YWx1YXRlIHRoZSBwYXNzZWQgbm9kZVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZU5vZGUobm9kZSkge1xuICAgIGlmKHRoaXMuX19jaGVja0V2YWx1YXRpb24obm9kZSkpIHtcbiAgICAgIG5vZGVbKG5vZGUgaW5zdGFuY2VvZiBBdHRyKT8gJ3ZhbHVlJzogJ25vZGVWYWx1ZSddID0gdGhpcy5fX2V2YWx1YXRlKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRyaWJ1dGUgbm9kZSBpbml0aWFsaXppbmdcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBhdHRyaWJ1dGVPZiAtIGlmIG5vZGUgaXMgbGlua2VkIHdpdGggcGFyZW50IHNjb3BlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZUF0dHJpYnV0ZShub2RlLCBlbCwgYXR0cmlidXRlT2YpIHtcbiAgICBpZihzeXN0ZW1BdHRyaWJ1dGVzLmluZGV4T2Yobm9kZS5ub2RlTmFtZSkgIT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9faW5pdGlhbGl6ZU5vZGUobm9kZSwgZWwpO1xuXG4gICAgbGV0IGV2ZW50TmFtZSA9IG5vZGUubm9kZU5hbWUucmVwbGFjZSgvXm9uLSguKykvaSwgJyQxJyk7XG4gICAgbGV0IG5vZGVOYW1lID0gdXRpbHMudG9DYW1lbENhc2Uobm9kZS5ub2RlTmFtZSk7XG4gICAgbGV0IGNvbXBvbmVudCA9IGF0dHJpYnV0ZU9mPyBhdHRyaWJ1dGVPZjogdGhpcztcblxuICAgIGlmKGV2ZW50TmFtZSAhPSBub2RlLm5vZGVOYW1lKSB7XG4gICAgICBpZihub2RlLl9fZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgZW1pdHRlciA9IG5ldyBBa2lsaS5FdmVudEVtaXR0ZXIoZXZlbnROYW1lLCBlbCwgY29tcG9uZW50KTtcblxuICAgICAgaWYobm9kZS5fX2V4cHJlc3Npb24pIHtcbiAgICAgICAgZW1pdHRlci5iaW5kKChlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5fX2V2YWx1YXRlRXZlbnQobm9kZSwgZWwsIGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgbm9kZS5fX2V2ZW50ID0gZW1pdHRlcjtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShub2RlLm5vZGVOYW1lLCB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUoZW1pdHRlcikpO1xuXG4gICAgICBpZihhdHRyaWJ1dGVPZikge1xuICAgICAgICB0aGlzLl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IHRydWU7XG4gICAgICAgIHRoaXMuYXR0cnNbbm9kZU5hbWVdID0gZW1pdHRlcjtcbiAgICAgICAgdGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKGF0dHJpYnV0ZU9mKSB7XG4gICAgICBub2RlLl9fYXR0cmlidXRlT24gPSB0aGlzO1xuICAgICAgbm9kZS5fX2F0dHJpYnV0ZU9mID0gY29tcG9uZW50O1xuICAgIH1cblxuICAgIGVsLnNldEF0dHJpYnV0ZShub2RlLm5vZGVOYW1lLCBjb21wb25lbnQuX19ldmFsdWF0ZShub2RlKSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgbm9kZVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZU5vZGUobm9kZSwgZWwpIHtcbiAgICBpZihub2RlLl9faW5pdGlhbGl6ZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBub2RlLl9fZXhwcmVzc2lvbiA9IG5vZGVbKG5vZGUgaW5zdGFuY2VvZiBBdHRyKT8gJ3ZhbHVlJzogJ25vZGVWYWx1ZSddO1xuICAgIG5vZGUuX19wcm9wZXJ0aWVzID0ge307XG4gICAgbm9kZS5fX2F0dHJpYnV0ZU9mID0gbnVsbDtcbiAgICBub2RlLl9fYXR0cmlidXRlT24gPSBudWxsO1xuICAgIG5vZGUuX19ldmVudCA9IG51bGw7XG4gICAgbm9kZS5fX2hhc0JpbmRpbmdzID0gZmFsc2U7XG4gICAgbm9kZS5fX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICBub2RlLl9fY29tcG9uZW50ID0gdGhpcztcbiAgICBub2RlLl9fZWxlbWVudCA9IGVsO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJwb2xhdGUgYXR0cmlidXRlcyBvZiB0aGUgZWxlbWVudFxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gW2F0dHJpYnV0ZU9mPW51bGxdIC0gaWYgbm9kZSBpcyBsaW5rZWQgd2l0aCBwYXJlbnQgc2NvcGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXMoZWwsIGF0dHJpYnV0ZU9mID0gbnVsbCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBhdHRycyA9IGVsLmF0dHJpYnV0ZXMsIGwgPSBhdHRycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHRoaXMuX19pbml0aWFsaXplQXR0cmlidXRlKGF0dHJzW2ldLCBlbCwgYXR0cmlidXRlT2YpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmUgYXR0cmlidXRlcyBhcyBwcm94eVxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RlZmluZUF0dHJpYnV0ZXMoKSB7XG4gICAgbGV0IGNoYW5nZUF0dHJpYnV0ZSA9IChrZXksIHZhbHVlLCBpc0RlbGV0ZWQgPSBmYWxzZSkgPT4ge1xuICAgICAgaWYodGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgbm9kZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlTm9kZShrZXkpO1xuXG4gICAgICBpZihub2RlKSB7XG4gICAgICAgIGlmKG5vZGUuX19ldmVudCkge1xuICAgICAgICAgIG5vZGUuX19ldmVudC51bmJpbmQoKTtcbiAgICAgICAgICBub2RlLl9fZXZlbnQgPSBudWxsO1xuICAgICAgICAgIG5vZGUuX19leHByZXNzaW9uID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZihub2RlLl9faGFzQmluZGluZ3MpIHtcbiAgICAgICAgICB0aGlzLl9fcGFyZW50ICYmIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2V2YWx1YXRpb25Db21wb25lbnQuX191bmJpbmRCeU5vZGVzKFtub2RlXSk7XG4gICAgICAgICAgbm9kZS5fX2hhc0JpbmRpbmdzID0gZmFsc2U7XG4gICAgICAgICAgbm9kZS5fX2V4cHJlc3Npb24gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZihpc0RlbGV0ZWQpIHtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYobm9kZSkge1xuICAgICAgICBub2RlLnZhbHVlID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuYXR0cnMgPSBuZXcgUHJveHkodGhpcy5fX2F0dHJzLCB7XG4gICAgICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBpZihrZXkgPT0gJ19faXNQcm94eScpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgIH0sXG4gICAgICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IGF0dHJLZXkgPSB1dGlscy50b0Rhc2hDYXNlKGtleSk7XG5cbiAgICAgICAgaWYodGhpcy5ib29sZWFuQXR0cmlidXRlcy5pbmRleE9mKGF0dHJLZXkpICE9IC0xKSB7XG4gICAgICAgICAgYXR0cktleSA9IGBib29sZWFuLSR7YXR0cktleX1gO1xuXG4gICAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgY2hhbmdlQXR0cmlidXRlKGF0dHJLZXksIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZSh2YWx1ZSkpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBhdHRyS2V5ID0gdXRpbHMudG9EYXNoQ2FzZShrZXkpO1xuXG4gICAgICAgIGNoYW5nZUF0dHJpYnV0ZShhdHRyS2V5LCB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUodmFsdWUpLCB0cnVlKTtcbiAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBwcm94eSB0byBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEByZXR1cm5zIHtQcm94eX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19vYnNlcnZlKG9iaiwgcGFyZW50cykge1xuICAgIHJldHVybiBuZXcgUHJveHkob2JqLCB7XG4gICAgICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBpZiAoa2V5ID09IFwiX19pc1Byb3h5XCIpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX3RhcmdldFwiKSB7XG4gICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX2NvbXBvbmVudFwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IFwiX19rZXlzXCIpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50cztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuX19kaXNhYmxlUHJveHkpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLl9faXNTeXN0ZW1LZXkoa2V5KSkge1xuICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHR5cGVvZiB0YXJnZXRba2V5XSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgbGV0IHJlYWxUYXJnZXQgID0gdXRpbHMuZ2V0T3duUHJvcGVydHlUYXJnZXQodGFyZ2V0LCBrZXkpO1xuXG4gICAgICAgICAgaWYoIXV0aWxzLmlzUGxhaW5PYmplY3QocmVhbFRhcmdldCkpIHtcbiAgICAgICAgICAgIHJlYWxUYXJnZXRba2V5XSA9IEFraWxpLmlzb2xhdGVGdW5jdGlvbihyZWFsVGFyZ2V0W2tleV0sIHJlYWxUYXJnZXQuX19jb21wb25lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBa2lsaS5fX2V2YWx1YXRpb24pIHtcbiAgICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG4gICAgICAgICAgbGV0IG5vdEJpbmRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgIGlmKCEoa2V5IGluIHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKCF1dGlscy5nZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQodGFyZ2V0LCBrZXkpKSB7XG4gICAgICAgICAgICBub3RCaW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9fYmluZE5vZGUoQWtpbGkuX19ldmFsdWF0aW9uLmxpc3QsIGtleXMsIHBhcmVudHMsIHRhcmdldFtrZXldLCBub3RCaW5kaW5nKTtcblxuICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgIH0sXG4gICAgICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgaWYodGhpcy5fX2Rpc2FibGVQcm94eSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tleV0pO1xuXG4gICAgICAgIGlmKHRoaXMuX19uZXN0ZWRXYXRjaGluZykge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdGhpcy5fX25lc3RlZE9ic2VydmUodmFsdWUsIGtleXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZihBa2lsaS5fX2lzb2xhdGlvbikge1xuICAgICAgICAgIHRoaXMuX19jcmVhdGVJc29sYXRpb25PYmplY3QocGFyZW50cywga2V5LCBmYWxzZSk7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuX19pc01vdW50ZWQpIHtcbiAgICAgICAgICB0aGlzLl9fZXZhbHVhdGVCeUtleXMoa2V5cywgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgICAgZGVsZXRlUHJvcGVydHk6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG5cbiAgICAgICAgaWYodGhpcy5fX2Rpc2FibGVQcm94eSkge1xuICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5fX2lzU3lzdGVtS2V5KGtleSkpIHtcbiAgICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKEFraWxpLl9faXNvbGF0aW9uKSB7XG4gICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICAgIHRoaXMuX19jcmVhdGVJc29sYXRpb25PYmplY3QocGFyZW50cywga2V5LCB0cnVlKTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICB0aGlzLl9fZXZhbHVhdGVCeUtleXMoa2V5cywgdW5kZWZpbmVkLCB0cnVlKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2sga2V5IGlzIHN5c3RlbVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgX19pc1N5c3RlbUtleSA9IGZ1bmN0aW9uKGtleSkge1xuICAgIGlmKGtleSA9PSAnX18nIHx8IChrZXlbMF0gPT0gJ18nICYmIGtleVsxXSA9PSAnXycpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZihbJ2NvbnN0cnVjdG9yJ10uaW5kZXhPZihrZXkpICE9IC0xKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIE5lc3RlZCBvYnNlcnZpbmcgdGhlIHZhbHVlXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gW3N0YXJ0S2V5c11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19uZXN0ZWRPYnNlcnZlICh2YWx1ZSwgc3RhcnRLZXlzKSB7XG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IHRydWU7XG5cbiAgICBsZXQgb2JzZXJ2ZSA9ICh2YWx1ZSwgcGFyZW50cykgPT4ge1xuICAgICAgaWYodHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYoIXV0aWxzLmlzUGxhaW5PYmplY3QodmFsdWUpICYmICF1dGlscy5pc1Njb3BlUHJveHkodmFsdWUpICYmICEodmFsdWUgaW5zdGFuY2VvZiBBa2lsaS5TY29wZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgdGFyZ2V0ID0gdmFsdWU7XG5cbiAgICAgIGlmKHZhbHVlLl9faXNQcm94eSkge1xuICAgICAgICB0YXJnZXQgPSB2YWx1ZS5fX3RhcmdldDtcblxuICAgICAgICBpZighdGhpcy5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcpIHtcbiAgICAgICAgICBpZih2YWx1ZS5fX2NvbXBvbmVudCAhPT0gdGhpcykge1xuICAgICAgICAgICAgdGFyZ2V0ID0gdXRpbHMuY29weSh0YXJnZXQsIGZhbHNlKTtcbiAgICAgICAgICAgIHZhbHVlID0gdGFyZ2V0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKEFraWxpLmpvaW5CaW5kaW5nS2V5cyhwYXJlbnRzKSAhPSBBa2lsaS5qb2luQmluZGluZ0tleXModmFsdWUuX19rZXlzKSkge1xuICAgICAgICAgICAgdmFsdWUgPSB0YXJnZXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvcihsZXQgayBpbiB0YXJnZXQpIHtcbiAgICAgICAgaWYgKCF0YXJnZXQuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2YWwgPSB0YXJnZXRba107XG4gICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrXSk7XG5cbiAgICAgICAgdGFyZ2V0W2tdID0gb2JzZXJ2ZSh2YWwsIGtleXMpO1xuICAgICAgfVxuXG4gICAgICBpZighdmFsdWUuX19pc1Byb3h5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fb2JzZXJ2ZSh0YXJnZXQsIHBhcmVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcblxuICAgIGxldCByZXMgPSBvYnNlcnZlKHZhbHVlLCBzdGFydEtleXMgfHwgW10pO1xuXG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IG51bGw7XG5cbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgaXNvbGF0aW9uIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHBhcmFtIHtib29sZWFufSBbaXNEZWxldGVkPWZhbHNlXVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGVJc29sYXRpb25PYmplY3QgKHBhcmVudHMsIGtleSwgaXNEZWxldGVkID0gZmFsc2UpIHtcbiAgICBsZXQga2V5cyA9IHBhcmVudHMubGVuZ3RoPyBbcGFyZW50c1swXV06IFtrZXldO1xuICAgIGxldCBpc29sYXRpb25LZXkgPSBgJHt0aGlzLl9fc2NvcGUuX19uYW1lfS4ke0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKX1gO1xuXG4gICAgaWYocGFyZW50cy5sZW5ndGgpIHtcbiAgICAgIGlzRGVsZXRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmKCFBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25LZXldKSB7XG4gICAgICBBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25LZXldID0ge1xuICAgICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICAgIGtleXM6IGtleXNcbiAgICAgIH07XG4gICAgfVxuXG4gICAgKGlzRGVsZXRlZCAhPT0gdW5kZWZpbmVkKSAmJiAoQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uS2V5XS5pc0RlbGV0ZWQgPSBpc0RlbGV0ZWQpO1xuICAgIEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV0udmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpO1xuXG4gICAgcmV0dXJuIEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV07XG4gIH07XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgdGhlIG5vZGUgdG8gYmluZGluZ1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gYmluZCAtIGJ5IGRlZmF1bHQgaXMgY29tcG9uZW50Ll9fZXZhbHVhdGlvbi5saXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW25vdEJpbmRpbmc9ZmFsc2VdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYmluZE5vZGUoYmluZCwga2V5cywgcGFyZW50cywgdmFsdWUsIG5vdEJpbmRpbmcgPSBmYWxzZSkge1xuICAgIGxldCBwYXJlbnRLZXlzU3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKHBhcmVudHMpO1xuXG4gICAgaWYoYmluZC5sZW5ndGggJiYgIW5vdEJpbmRpbmcpIHtcbiAgICAgIGxldCBsID0gYmluZC5sZW5ndGggLSAxO1xuICAgICAgbGV0IGRhdGEgPSBiaW5kW2xdO1xuXG4gICAgICBpZihkYXRhLmtleXNTdHJpbmcgPT0gcGFyZW50S2V5c1N0cmluZyAmJiBkYXRhLmNvbXBvbmVudCA9PT0gdGhpcykge1xuICAgICAgICBiaW5kLnNwbGljZShsLCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBiaW5kLnB1c2goe1xuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAga2V5c1N0cmluZzogQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpLFxuICAgICAgcGFyZW50czogcGFyZW50cyxcbiAgICAgIGtleXM6IGtleXMsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBub3RCaW5kaW5nOiBub3RCaW5kaW5nXG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBiaW5kaW5nIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0QmluZChrZXlzKSB7XG4gICAgcmV0dXJuIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncykgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYmluZGluZyBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRCb3VuZE5vZGUoa2V5cywgbm9kZSkge1xuICAgIGxldCBiaW5kID0gIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncyk7XG5cbiAgICBpZighYmluZCB8fCAhYmluZC5fX2RhdGEgfHwgIWJpbmQuX19kYXRhLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGJpbmQuX19kYXRhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGRhdGEgPSBiaW5kLl9fZGF0YVtpXTtcblxuICAgICAgaWYoZGF0YS5ub2RlID09PSBub2RlKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBub2RlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMsIHZhbHVlKSB7XG4gICAgbGV0IHByb3AgPSB0aGlzLl9fZ2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMpO1xuICAgIGxldCBjb3B5ID0gdXRpbHMuY29weSh2YWx1ZSk7XG5cbiAgICBpZihwcm9wKSB7XG4gICAgICBsZXQgcmVzID0gdXRpbHMuY29tcGFyZVByZXZpb3VzVmFsdWUodmFsdWUsIHByb3AudmFsdWUsIHByb3AuY29weSwgY29weSk7XG5cbiAgICAgIHByb3AudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHByb3AuY29weSA9IGNvcHk7XG5cbiAgICAgIHJldHVybiAhcmVzO1xuICAgIH1cblxuICAgIGxldCBoYXNoID0gYCR7dGhpcy5fX3Njb3BlLl9fbmFtZX0uJHtBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyl9YDtcblxuICAgIG5vZGUuX19wcm9wZXJ0aWVzW2hhc2hdID0ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgY29weTogY29weSxcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIGtleXM6IGtleXNcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG5vZGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKSB7XG4gICAgbGV0IGhhc2ggPSBgJHt0aGlzLl9fc2NvcGUuX19uYW1lfS4ke0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKX1gO1xuXG4gICAgcmV0dXJuIG5vZGUuX19wcm9wZXJ0aWVzW2hhc2hdIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIG5vZGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZWxldGVOb2RlUHJvcGVydHkobm9kZSwga2V5cykge1xuICAgIGxldCBoYXNoID0gYCR7dGhpcy5fX3Njb3BlLl9fbmFtZX0uJHtBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyl9YDtcblxuICAgIGRlbGV0ZSBub2RlLl9fcHJvcGVydGllc1toYXNoXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIGRhdGEgd2l0aCB0aGUga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYmluZChrZXlzLCBkYXRhKSB7XG4gICAgdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzLCAobGFzdCwgdmFsdWUpID0+IHtcbiAgICAgIGxldCBvYmogPSB7X19kYXRhOiBbXX07XG5cbiAgICAgIGlmKCFsYXN0KSB7XG4gICAgICAgIHJldHVybiB2YWx1ZT8gdmFsdWU6IG9iajtcbiAgICAgIH1cblxuICAgICAgaWYodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgICAgIG9iaiA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZighb2JqLl9fZGF0YSkge1xuICAgICAgICBvYmouX19kYXRhID0gW107XG4gICAgICB9XG5cbiAgICAgIG9iai5fX2RhdGEucHVzaChkYXRhKTtcblxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5iaW5kKGtleXMpIHtcbiAgICBsZXQgYmluZCA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncyk7XG5cbiAgICBpZighYmluZCB8fCAhYmluZC5fX2RhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gYmluZC5fX2RhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IGJpbmQuX19kYXRhW2ldLm5vZGU7XG5cbiAgICAgIHRoaXMuX19kZWxldGVOb2RlUHJvcGVydHkobm9kZSwga2V5cyk7XG4gICAgfVxuXG4gICAgdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzLCAodmFsdWUpID0+IHtcbiAgICAgIGlmKE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPiAxKSB7XG4gICAgICAgIHZhbHVlLl9fZGF0YSA9IFtdO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIGJ5IG5vZGVzXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZVtdfSBub2Rlc1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYmluZEJ5Tm9kZXMobm9kZXMpIHtcbiAgICBsZXQgdW5iaW5kID0gKG9iaikgPT4ge1xuICAgICAgZm9yKGxldCBrIGluIG9iaikge1xuICAgICAgICBpZighb2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZihrID09ICdfX2RhdGEnKSB7XG4gICAgICAgICAgbGV0IGRhdGEgPSBvYmpba10gfHwgW107XG4gICAgICAgICAgbGV0IGwgPSBkYXRhLmxlbmd0aDtcblxuICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBiaW5kID0gZGF0YVtpXTtcblxuICAgICAgICAgICAgaWYobm9kZXMuaW5kZXhPZihiaW5kLm5vZGUpICE9IC0xKSB7XG4gICAgICAgICAgICAgIGRhdGEuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgIGwtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZighbCkge1xuICAgICAgICAgICAgZGVsZXRlIG9ialtrXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdW5iaW5kKG9ialtrXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdW5iaW5kKHRoaXMuX19iaW5kaW5ncyk7XG4gICAgdGhpcy5fX2NsZWFyRW1wdHlCaW5kaW5ncygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCBlbXB0eSBiaW5kaW5nc1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gW29ial1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jbGVhckVtcHR5QmluZGluZ3Mob2JqKSB7XG4gICAgbGV0IGNsZWFyID0gKG9iaiwgcGFyZW50LCBrZXkpID0+IHtcbiAgICAgIGZvcihsZXQgayBpbiBvYmopIHtcbiAgICAgICAgaWYoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHZhbCA9IG9ialtrXTtcblxuICAgICAgICBpZihrID09ICdfX2RhdGEnICYmICghdmFsIHx8ICF2YWwubGVuZ3RoKSkge1xuICAgICAgICAgIGRlbGV0ZSBvYmpba107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihrICE9ICdfX2RhdGEnKSB7XG4gICAgICAgICAgaWYoIU9iamVjdC5rZXlzKG9ialtrXSkubGVuZ3RoKSB7XG4gICAgICAgICAgICBkZWxldGUgb2JqW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsZWFyKG9ialtrXSwgb2JqLCBrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoIU9iamVjdC5rZXlzKG9iaikubGVuZ3RoICYmIHBhcmVudCkge1xuICAgICAgICBkZWxldGUgcGFyZW50W2tleV07XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNsZWFyKG9iaiB8fCB0aGlzLl9fYmluZGluZ3MpXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBjaGlsZCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcmVtb3ZlQ2hpbGRyZW4oKSB7XG4gICAgbGV0IHJlbW92ZSA9IChjaGlsZHJlbikgPT4ge1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIHJlbW92ZShjaGlsZC5fX2FraWxpLl9fY2hpbGRyZW4pO1xuICAgICAgICBjaGlsZC5fX2FraWxpLl9fcmVtb3ZlKCk7XG4gICAgICAgIGktLTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVtb3ZlKHRoaXMuX19jaGlsZHJlbik7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBjb21wb25lbnQgd2l0aG91dCBjaGlsZHJlbiByZW1vdmluZ1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlbW92ZSgpIHtcbiAgICB0aGlzLl9fZGV0YWNoKCk7XG4gICAgdGhpcy5hdHRycy5vblJlbW92ZWQgJiYgdGhpcy5hdHRycy5vblJlbW92ZWQudHJpZ2dlcigpO1xuICAgIHRoaXMucmVtb3ZlZCgpO1xuICAgIEFraWxpLnJlbW92ZVNjb3BlKHRoaXMuX19zY29wZS5fX25hbWUpO1xuICAgIHRoaXMuZWwucmVtb3ZlKCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0YWNoIHRoZSBjb21wb25lbnRcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZXRhY2goKSB7XG4gICAgaWYodGhpcy5fX2V2YWx1YXRlUGFyZW50ICYmICF0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMpIHtcbiAgICAgIHRoaXMuX19ldmFsdWF0ZVBhcmVudC5fX2FraWxpLl9fdW5iaW5kQnlOb2RlcyhbXS5zbGljZS5jYWxsKHRoaXMuZWwuYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIGlmKHRoaXMuX19wYXJlbnQpIHtcbiAgICAgIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX3NwbGljZUNoaWxkKHRoaXMuZWwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGNvbXBvbmVudCB3aXRoIGNoaWxkcmVuXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVzdHJveSgpIHtcbiAgICB0aGlzLl9fcmVtb3ZlQ2hpbGRyZW4oKTtcbiAgICB0aGlzLl9fcmVtb3ZlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIGNvbXBvbmVudCBodG1sXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZW1wdHkoKSB7XG4gICAgbGV0IG5vZGVzID0gW107XG5cbiAgICB0aGlzLl9fcmVtb3ZlQ2hpbGRyZW4oKTtcblxuICAgIGxldCBmaW5kID0gKGNoaWxkcmVuKSA9PiB7XG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmKGNoaWxkLm5vZGVUeXBlID09IDMpIHtcbiAgICAgICAgICBub2Rlcy5wdXNoKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGNoaWxkLm5vZGVUeXBlID09IDEgJiYgIWNoaWxkLl9fYWtpbGkpIHtcbiAgICAgICAgICBmb3IgKGxldCBrID0gMCwgYXR0cnMgPSBjaGlsZC5hdHRyaWJ1dGVzLCBjID0gYXR0cnMubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICAgICAgICBub2Rlcy5wdXNoKGF0dHJzW2ldKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmaW5kKGNoaWxkLmNoaWxkTm9kZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZpbmQodGhpcy5lbC5jaGlsZE5vZGVzKTtcbiAgICB0aGlzLl9fdW5iaW5kQnlOb2Rlcyhub2Rlcyk7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcGFyZW50IGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldFBhcmVudChzZWxlY3RvciA9ICcnLCBmaW5kQWxsID0gZmFsc2UsIGxldmVscykge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBsZXQgbGV2ZWwgPSAwO1xuXG4gICAgaWYobGV2ZWxzICE9PSB1bmRlZmluZWQgJiYgIUFycmF5LmlzQXJyYXkobGV2ZWxzKSkge1xuICAgICAgbGV2ZWxzID0gW2xldmVsc107XG4gICAgfVxuXG4gICAgbGV0IGZpbmQgPSAocGFyZW50KSA9PiB7XG4gICAgICBpZighcGFyZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYoIWxldmVscyB8fCBsZXZlbHMuaW5kZXhPZihsZXZlbCkgIT0gLTEpIHtcbiAgICAgICAgaWYgKCFzZWxlY3RvciB8fCBwYXJlbnQuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIGlmICghZmluZEFsbCkge1xuICAgICAgICAgICAgYXJyLnB1c2gocGFyZW50Ll9fYWtpbGkpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYXJyLnB1c2gocGFyZW50Ll9fYWtpbGkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldmVsKys7XG4gICAgICBmaW5kKHBhcmVudC5fX2FraWxpLl9fcGFyZW50KTtcbiAgICB9O1xuXG4gICAgZmluZCh0aGlzLl9fcGFyZW50KTtcblxuICAgIHJldHVybiBmaW5kQWxsPyBhcnI6IChhcnJbMF0gfHwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNoaWxkIGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldENoaWxkcmVuKHNlbGVjdG9yID0gJycsIGZpbmRBbGwgPSB0cnVlLCBsZXZlbHMpIHtcbiAgICBsZXQgYXJyID0gW107XG4gICAgbGV0IGxldmVsID0gMDtcblxuICAgIGlmKGxldmVscyAhPT0gdW5kZWZpbmVkICYmICFBcnJheS5pc0FycmF5KGxldmVscykpIHtcbiAgICAgIGxldmVscyA9IFtsZXZlbHNdO1xuICAgIH1cblxuICAgIGxldCBmaW5kID0gKGNoaWxkcmVuKSA9PiB7XG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmKCFsZXZlbHMgfHwgbGV2ZWxzLmluZGV4T2YobGV2ZWwpICE9IC0xKSB7XG4gICAgICAgICAgaWYoIXNlbGVjdG9yIHx8IGNoaWxkLl9fYWtpbGkubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIGlmKCFmaW5kQWxsKSB7XG4gICAgICAgICAgICAgIGFyci5wdXNoKGNoaWxkLl9fYWtpbGkpO1xuXG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXJyLnB1c2goY2hpbGQuX19ha2lsaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldmVsKys7XG5cbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgZmluZChjaGlsZHJlbltpXS5fX2FraWxpLl9fY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmaW5kKHRoaXMuX19jaGlsZHJlbik7XG5cbiAgICByZXR1cm4gZmluZEFsbD8gYXJyOiAoYXJyWzBdIHx8IG51bGwpXG4gIH1cblxuICAvKipcbiAgICogR2V0IG5lYXJlc3QgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kQWxsPXRydWVdIC0gZ2V0IGFycmF5IGlmIHRydWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbcmlnaHQ9ZmFsc2VdIC0gZnJvbSB0aGUgcmlnaHQgc2lkZSBpZiB0cnVlXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0TmVhcihzZWxlY3RvciA9ICcnLCBmaW5kQWxsID0gdHJ1ZSwgcmlnaHQgPSBmYWxzZSkge1xuICAgIGlmKCF0aGlzLl9fcGFyZW50KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgbGV2ZWxFbGVtZW50cyA9IHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2NoaWxkcmVuLnNsaWNlKCk7XG4gICAgbGV0IGFyciA9IFtdO1xuXG4gICAgcmlnaHQgJiYgbGV2ZWxFbGVtZW50cy5yZXZlcnNlKCk7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gbGV2ZWxFbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBlbCA9IGxldmVsRWxlbWVudHNbaV07XG5cbiAgICAgIGlmKGVsID09PSB0aGlzLmVsKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZighc2VsZWN0b3IgfHwgZWwuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBhcnIucHVzaChlbC5fX2FraWxpKVxuICAgICAgfVxuICAgIH1cblxuICAgIGFyci5yZXZlcnNlKCk7XG5cbiAgICBpZighZmluZEFsbCkge1xuICAgICAgcmV0dXJuIGFyci5sZW5ndGg/IGFyclswXTogbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBjb21wb25lbnQgbWF0Y2hlcyBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gc2VsZWN0b3JcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBtYXRjaGVzKHNlbGVjdG9yKSB7XG4gICAgaWYodHlwZW9mIHNlbGVjdG9yID09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBzZWxlY3Rvcih0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5lbC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBwYXJlbnQgY29tcG9uZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgcGFyZW50KHNlbGVjdG9yID0gJycsIGxldmVscykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0UGFyZW50KHNlbGVjdG9yLCBmYWxzZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgcGFyZW50IGNvbXBvbmVudHMgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHNdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIHBhcmVudHMoc2VsZWN0b3IgPSAnJywgbGV2ZWxzKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRQYXJlbnQoc2VsZWN0b3IsIHRydWUsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNsb3Nlc3QgY2hpbGQgY29tcG9uZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgY2hpbGQoc2VsZWN0b3IgPSAnJywgbGV2ZWxzKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRDaGlsZHJlbihzZWxlY3RvciwgZmFsc2UsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFycmF5IG9mIGNoaWxkIGNvbXBvbmVudHMgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHNdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGNoaWxkcmVuKHNlbGVjdG9yID0gJycsIGxldmVscykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0Q2hpbGRyZW4oc2VsZWN0b3IsIHRydWUsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFycmF5IG9mIGNvbXBvbmVudHMgbGVmdCBmcm9tIHRoZSBjdXJyZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGJlZm9yZShzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCB0cnVlLCBmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFycmF5IG9mIGNvbXBvbmVudHMgcmlnaHQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBhZnRlcihzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCB0cnVlLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBjb21wb25lbnQgbGVmdCBmcm9tIHRoZSBjdXJyZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR9XG4gICAqL1xuICBwcmV2KHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIGZhbHNlLCBmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNsb3Nlc3QgY29tcG9uZW50IHJpZ2h0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIG5leHQoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgZmFsc2UsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBlbGVtZW50IHBhcmVudFxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRcbiAgICovXG4gIGFwcGVuZFRvKHBhcmVudCkge1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcblxuICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbmNlbCBjb21wb25lbnQgY29tcGlsYXRpb25cbiAgICovXG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBlbGVtZW50IGh0bWxcbiAgICpcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBlbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2VtcHR5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGVsZW1lbnRcbiAgICpcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICByZW1vdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19kZXN0cm95LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjcmVhdGVkKCkge31cbiAgY29tcGlsZWQoKSB7fVxuICByZWNvbXBpbGVkKCkge31cbiAgY2hhbmdlZChrZXksIHZhbHVlKSB7fVxuICByZXNvbHZlZCgpIHt9XG4gIHJlbW92ZWQoKSB7fVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50LmpzIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXIuanMnXG5cbmNvbnN0IHV0aWxzID0ge307XG5cbi8qKlxuICogQ3JlYXRlIGNsYXNzIGF0dHJpYnV0ZSBmcm9tIGFuIG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwicmVkIGFjdGl2ZVwiXG4gKiB1dGlscy5jbGFzcyh7cmVkOiB0cnVlLCBhY3RpdmU6IHRydWUsIGdyZWVuOiBmYWxzZX0pO1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmNsYXNzID0gZnVuY3Rpb24gKG9iaikge1xuICBpZighb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgbGV0IGNsYXNzZXMgPSBbXTtcblxuICBmb3IobGV0IGsgaW4gb2JqKSB7XG4gICAgaWYoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgbGV0IHZhbCA9IG9ialtrXTtcblxuICAgIHZhbCAmJiBjbGFzc2VzLnB1c2goayk7XG4gIH1cblxuICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBzdHlsZSBhdHRyaWJ1dGUgZnJvbSBhbiBvYmplY3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcImNvbG9yOnJlZDt3aWR0aDoxMHB4XCJcbiAqIHV0aWxzLnN0eWxlKHtjb2xvcjogXCJyZWRcIiwgYmFja2dyb3VuZDogZmFsc2UsIHdpZHRoOiBcIjEwcHhcIn0pO1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnN0eWxlID0gZnVuY3Rpb24ob2JqKSB7XG4gIGlmKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBsZXQgc3R5bGVzID0gW107XG5cbiAgZm9yKGxldCBrIGluIG9iaikge1xuICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGxldCB2YWwgPSBvYmpba107XG5cbiAgICB2YWwgJiYgc3R5bGVzLnB1c2goYCR7dGhpcy50b0Rhc2hDYXNlKGspfToke3ZhbH1gKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZXMuam9pbignOycpO1xufTtcblxuLyoqXG4gKiBGaWx0ZXIgYW4gYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMSwgMTFdXG4gKiB1dGlscy5maWx0ZXIoWzEsIDIsIDMsIDExXSwgJzEnKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6MX0sIHt4OjExfV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6MX0sIHt4OjJ9LCB7eDozfSwge3g6MTF9XSwgJzEnLCBbJ3gnXSk7XG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0ge3N0cmluZ3xSZWdFeHB8ZnVuY3Rpb259IGhhbmRsZXIgLSB0eXBlIG9mIGZpbHRlcmluZ1xuICogQHBhcmFtIHtzdHJpbmdbXXxzdHJpbmd9IFtrZXlzXSAtIGZpbHRlciBpbiB0aGUga2V5cyBpZiBhcnJheSBlbGVtZW50cyBhcmUgb2JqZWN0XG4gKiBAcmV0dXJucyB7QXJyYXl9IC0gcmV0dXJucyBvdGhlciBhcnJheVxuICovXG51dGlscy5maWx0ZXIgPSBmdW5jdGlvbiAoYXJyLCBoYW5kbGVyLCBrZXlzID0gW10pIHtcbiAgbGV0IHJlcyA9IFtdO1xuXG4gIGlmKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAga2V5cyA9IFtrZXlzXTtcbiAgfVxuXG4gIGlmKCFoYW5kbGVyKSB7XG4gICAgcmV0dXJuIFsuLi5hcnJdO1xuICB9XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgaXRlbSA9IGFycltpXTtcbiAgICBsZXQgdmFsID0ga2V5cy5sZW5ndGg/IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgaXRlbSk6IGl0ZW07XG5cbiAgICBpZighdmFsKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YWwgKz0gJyc7XG5cbiAgICBpZigodHlwZW9mIGhhbmRsZXIgPT0gJ2Z1bmN0aW9uJykgJiYgaGFuZGxlcihpdGVtKSkge1xuICAgICAgcmVzLnB1c2goaXRlbSk7XG4gICAgfVxuICAgIGVsc2UgaWYodmFsLm1hdGNoKGhhbmRsZXIgfHwgJycpKSB7XG4gICAgICByZXMucHVzaChpdGVtKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBPcmRlciBhbiBhcnJheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsxLCAyLCAzXVxuICogdXRpbHMuc29ydChbMywgMiwgMV0sIHRydWUpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFszLCAyLCAxXVxuICogdXRpbHMuc29ydChbMSwgMiwgM10sIGZhbHNlKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCBbWyd4J11dLCBbdHJ1ZV0pO1xuICogdXRpbHMuc29ydChbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV0sIFsneCddLCB0cnVlKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCAneCcpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogM30sIHt4OiAyfSwge3g6IDF9XVxuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sIFtbJ3gnXV0sIFtmYWxzZV0pO1xuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sIFsneCddLCBmYWxzZSk7XG4gKiB1dGlscy5zb3J0KFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XSwgJ3gnLCBmYWxzZSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxLCB5OiAzfSwge3g6IDIsIHk6IDF9LCB7eDoyLCB5OiAyfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAyLCB5OiAyfSwge3g6IDIsIHk6IDF9LCB7eDogMiwgeTogM31dLCBbWyd4J10sIFsneSddXSwgW3RydWUsIHRydWVdKTtcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7Ym9vbGVhbnxBcnJheVtdfHN0cmluZ1tdfHN0cmluZ30gW2tleXNdXG4gKiBAcGFyYW0ge2Jvb2xlYW58Ym9vbGVhbltdfSBbb3JkZXJdIC0gcmV2ZXJzZSBvciBub3RcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xudXRpbHMuc29ydCA9IGZ1bmN0aW9uKGFyciwga2V5cyA9IHRydWUsIG9yZGVyID0gW10pIHtcbiAgYXJyID0gWy4uLmFycl07XG5cbiAgaWYoa2V5cyA9PT0gdHJ1ZSkge1xuICAgIGtleXMgPSBbXTtcbiAgICBvcmRlciA9IFt0cnVlXTtcbiAgfVxuICBlbHNlIGlmKGtleXMgPT09IGZhbHNlKSB7XG4gICAga2V5cyA9IFtdO1xuICAgIG9yZGVyID0gW2ZhbHNlXTtcbiAgfVxuXG4gIGlmKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAga2V5cyA9IFtrZXlzXTtcbiAgfVxuXG4gIGlmKCFBcnJheS5pc0FycmF5KG9yZGVyKSkge1xuICAgIG9yZGVyID0gW29yZGVyXTtcbiAgfVxuXG4gIGxldCBsID0ga2V5cy5sZW5ndGg7XG5cbiAgYXJyLnNvcnQoKGEsIGIpID0+IHtcbiAgICBsZXQgaSA9IDA7XG5cbiAgICBsZXQgY2hlY2sgPSAoYSwgYiwgcmV2ZXJzZSA9IGZhbHNlKSA9PiB7XG4gICAgICBpZihhIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBhID0gYS5nZXRUaW1lKCk7XG4gICAgICB9XG5cbiAgICAgIGlmKGIgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIGIgPSBiLmdldFRpbWUoKTtcbiAgICAgIH1cblxuICAgICAgaWYoYSA+IGIpIHtcbiAgICAgICAgcmV0dXJuIHJldmVyc2U/IC0xOiAxO1xuICAgICAgfVxuICAgICAgZWxzZSBpZihhIDwgYikge1xuICAgICAgICByZXR1cm4gcmV2ZXJzZT8gMTogLTE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAwO1xuICAgIH07XG5cbiAgICBsZXQgbmV4dCA9ICgpID0+IHtcbiAgICAgIGlmKGkgPj0gbCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cblxuICAgICAgbGV0IGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmKCFBcnJheS5pc0FycmF5KGtleSkpIHtcbiAgICAgICAga2V5ID0gW2tleV07XG4gICAgICB9XG5cbiAgICAgIGxldCBhViA9IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5LCBhKTtcbiAgICAgIGxldCBiViA9IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5LCBiKTtcbiAgICAgIGxldCByZXMgPSBjaGVjayhhViwgYlYsIG9yZGVyW2ldID09PSBmYWxzZSk7XG5cbiAgICAgIGlmKHJlcyAhPT0gMCkge1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfVxuXG4gICAgICBpKys7XG5cbiAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgfTtcblxuICAgIGlmKCFsKSB7XG4gICAgICByZXR1cm4gY2hlY2soYSwgYiwgb3JkZXJbaV0gPT09IGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dCgpO1xuICB9KTtcblxuICByZXR1cm4gYXJyO1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgdmFsdWUgaXMgY29tcG9uZW50IHNjb3BlIHByb3h5IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaXNTY29wZVByb3h5ID0gZnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiAhISh2YWwgJiYgdHlwZW9mIHZhbCA9PSAnb2JqZWN0JyAmJiB2YWwuX19pc1Byb3h5KTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIHZhbHVlIGlzIHBsYWluIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaXNQbGFpbk9iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuICByZXR1cm4gISEob2JqICYmIHR5cGVvZiBvYmogPT0gJ29iamVjdCcgJiYgKG9iai5jb25zdHJ1Y3RvciA9PSBPYmplY3QgfHwgb2JqLmNvbnN0cnVjdG9yID09IEFycmF5KSk7XG59O1xuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHBhcmFtIHtib29sZWFufSBbbmVzdGVkPXRydWVdIC0gZGVlcCBjb3B5IGlmIGlzIHRydWVcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5jb3B5ID0gZnVuY3Rpb24odmFsdWUsIG5lc3RlZCA9IHRydWUpIHtcbiAgaWYodHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8ICF2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5leHQob2JqKSB7XG4gICAgb2JqID0gQXJyYXkuaXNBcnJheShvYmopPyBbLi4ub2JqXTogey4uLm9ian07XG5cbiAgICBpZighbmVzdGVkKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGZvcihsZXQgayBpbiBvYmopIHtcbiAgICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmKG9ialtrXSAmJiB0eXBlb2Ygb2JqW2tdID09ICdvYmplY3QnKSB7XG4gICAgICAgIG9ialtrXSA9IG5leHQob2JqW2tdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgcmV0dXJuIG5leHQodmFsdWUpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2UgdGhlIHZhbHVlIHRvIGF0dHJpYnV0ZSBhcHByb3ByaWF0ZSBmb3JtYXRcbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgaWYodmFsdWUgPT09IGZhbHNlIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZih2YWx1ZSBpbnN0YW5jZW9mIEV2ZW50RW1pdHRlcikge1xuICAgIHJldHVybiAnW29iamVjdCBFdmVudF0nO1xuICB9XG5cbiAgaWYodHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgfVxuXG4gIGlmKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlICsgJyc7XG59O1xuXG4vKipcbiAqIENvbXBhcmUgdHdvIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7Kn0gYVxuICogQHBhcmFtIHsqfSBiXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuY29tcGFyZSA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gIGlmKChhIGluc3RhbmNlb2YgRGF0ZSkgJiYgKGIgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgIHJldHVybiBhLmdldFRpbWUoKSA9PT0gYi5nZXRUaW1lKCk7XG4gIH1cbiAgaWYodHlwZW9mIGEgPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgYiA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGEudG9TdHJpbmcoKSA9PT0gYi50b1N0cmluZygpO1xuICB9XG4gIGVsc2UgaWYodHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT0gJ29iamVjdCcpIHtcbiAgICBpZihhID09PSBudWxsIHx8IGIgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBhID09PSBiO1xuICAgIH1cblxuICAgIGlmKE9iamVjdC5rZXlzKGEpLmxlbmd0aCAhPSBPYmplY3Qua2V5cyhiKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IobGV0IGsgaW4gYSkge1xuICAgICAgaWYoIWEuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmKCF0aGlzLmNvbXBhcmUoYVtrXSwgYltrXSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGEgPT09IGI7XG59O1xuXG4vKipcbiAqIENvbXBhcmUgY3VycmVudCB2YWx1ZSB3aXRoIHByZXZpb3VzXG4gKlxuICogQHBhcmFtIHsqfSBjdXJyZW50IC0gdGhlIGN1cnJlbnQgdmFsdWVcbiAqIEBwYXJhbSB7Kn0gcHJldmlvdXMgLSB0aGUgY3VycmVudCB2YWx1ZSBjb3B5XG4gKiBAcGFyYW0geyp9IHByZXZpb3VzQ29weSAtIHRoZSBwcmV2aW91cyB2YWx1ZSBjb3B5XG4gKiBAcGFyYW0geyp9IFtjdXJyZW50Q29weV0gLSB0aGUgY3VycmVudCB2YWx1ZSBjb3B5XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuY29tcGFyZVByZXZpb3VzVmFsdWUgPSBmdW5jdGlvbihjdXJyZW50LCBwcmV2aW91cywgcHJldmlvdXNDb3B5LCBjdXJyZW50Q29weSkge1xuICBpZihjdXJyZW50ICE9PSBwcmV2aW91cykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmNvbXBhcmUoYXJndW1lbnRzLmxlbmd0aCA9PSAzPyBjdXJyZW50Q29weTogdGhpcy5jb3B5KGN1cnJlbnQpLCBwcmV2aW91c0NvcHkpO1xufTtcblxuLyoqXG4gKiBFbmNvZGUgaHRtbCBlbnRpdGllc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwieW91ICZhbXAgbWVcIlxuICogdXRpbHMuZW5jb2RlSHRtbEVudGl0aWVzKCd5b3UgJiBtZScpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBodG1sXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5lbmNvZGVIdG1sRW50aXRpZXMgPSBmdW5jdGlvbihodG1sKSB7XG4gIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB2YWx1ZTtcblxuICBlbC50ZXh0Q29udGVudCA9IGh0bWw7XG4gIHZhbHVlID0gZWwuaW5uZXJIVE1MO1xuICBlbC5yZW1vdmUoKTtcbiAgZWwgPSBudWxsO1xuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbi8qKlxuICogRGVjb2RlIGh0bWwgZW50aXRpZXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcInlvdSAmIG1lXCJcbiAqIHV0aWxzLmRlY29kZUh0bWxFbnRpdGllcygneW91ICZhbXAgbWUnKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuZGVjb2RlSHRtbEVudGl0aWVzID0gZnVuY3Rpb24oaHRtbCkge1xuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGxldCB2YWx1ZTtcblxuICBlbC5pbm5lckhUTUwgPSBodG1sO1xuICB2YWx1ZSA9IGVsLnZhbHVlO1xuICBlbC5yZW1vdmUoKTtcbiAgZWwgPSBudWxsO1xuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHN0cmluZyBmcm9tIGRhc2ggdG8gY2FtZWwgY2FzZSBmb3JtYXRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy50b0NhbWVsQ2FzZSA9IGZ1bmN0aW9uKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcVysoLikvZywgKG0sIGMpID0+IGMudG9VcHBlckNhc2UoKSk7XG59O1xuXG4vKipcbiAqIENoYW5nZSBzdHJpbmcgZnJvbSBjYW1lbCB0byBkYXNoIGNhc2UgZm9ybWF0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMudG9EYXNoQ2FzZSA9IGZ1bmN0aW9uKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgKG0sIGMpID0+IGAtJHtjLnRvTG93ZXJDYXNlKCl9YCk7XG59O1xuXG4vKipcbiAqIEdldCBuZXN0ZWQgb2JqZWN0IHByb3BlcnR5IGJ5IGFycmF5IGtleXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyA1XG4gKiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmdldFByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0KSB7XG4gIGxldCBjdXJyZW50O1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZShmdW5jdGlvbihvLCBrKSB7XG4gICAgaSsrO1xuXG4gICAgaWYodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBvO1xuICAgIH1cblxuICAgIGlmKG9ba10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIChpID09IGxlbmd0aCkgJiYgKGN1cnJlbnQgPSBvW2tdKTtcbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gY3VycmVudDtcbn07XG5cbi8qKlxuICogQ2hlY2sgbmVzdGVkIG9iamVjdHMgdHJlZSBoYXMgcHJvcGVydHkgb3Igbm90XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgdHJ1ZVxuICogdXRpbHMuaGFzUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCkge1xuICBsZXQgaGFzID0gZmFsc2U7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKGZ1bmN0aW9uKG8sIGspIHtcbiAgICBpKys7XG5cbiAgICBpZih0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuICEhbztcbiAgICB9XG5cbiAgICBpZighby5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIChpID09IGxlbmd0aCkgJiYgKGhhcyA9IG8uaGFzT3duUHJvcGVydHkoaykpO1xuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiBoYXM7XG59O1xuXG4vKipcbiAqIFNldCBuZXN0ZWQgb2JqZWN0cyB0cmVlIHByb3BlcnR5XG4gKiBSZXR1cm5zIGNoYW5nZWQgcHJvcGVydHkgb2JqZWN0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMge3k6IDZ9XG4gKiB1dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSwgKGxhc3QsIHZhbCkgPT4gbGFzdD8gNjogKHZhbCB8fCB7fSkpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuc2V0UHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QsIGZuKSB7XG4gIGxldCBjdXJyZW50ID0gdW5kZWZpbmVkO1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZShmdW5jdGlvbihvLCBrKSB7XG4gICAgaSsrO1xuXG4gICAgaWYodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZighby5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgcmV0dXJuIGN1cnJlbnQgPSBvW2tdID0gZm4oaSA9PSBsZW5ndGgpO1xuICAgIH1cblxuICAgIG9ba10gPSBmbihpID09IGxlbmd0aCwgb1trXSk7XG4gICAgY3VycmVudCA9IG87XG5cbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gY3VycmVudDtcbn07XG5cbi8qKlxuICpcbiAqIERlbGV0ZSBwcm9wZXJ0eSBmcm9tIG5lc3RlZCBvYmplY3RzIHRyZWVcbiAqIFJldHVybnMgZGVsZXRlZCBwcm9wZXJ0eSB2YWx1ZVxuICogWW91IGNhbiBjYW5jZWwgZGVsZXRpbmcgaWYgd2lsbCByZXR1cm4gZmFsc2UgaW4gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIDVcbiAqIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19LCB2YWwgPT4gdmFsICE9IDUpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtmbl1cbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCwgZm4pIHtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgdmFsdWU7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZShmdW5jdGlvbihvLCBrKSB7XG4gICAgaSsrO1xuXG4gICAgaWYodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZighby5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGlmKGkgPT0gbGVuZ3RoKSB7XG4gICAgICB2YWx1ZSA9IG9ba107XG5cbiAgICAgIGlmKCFmbiB8fCBmbih2YWx1ZSkpIHtcbiAgICAgICAgZGVsZXRlIG9ba107XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IHRhcmdldCBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5cbnV0aWxzLmdldEVudW1lcmFibGVQcm9wZXJ0eVRhcmdldCA9IGZ1bmN0aW9uKHRhcmdldCwga2V5KSB7XG4gIGxldCBjaGVjayA9IChvYmopID0+IHtcbiAgICBpZihvYmoucHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBsZXQgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcblxuICAgIGlmKCFwcm90bykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoZWNrKHByb3RvKTtcbiAgfTtcblxuICByZXR1cm4gY2hlY2sodGFyZ2V0KTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBvd24gcHJvcGVydHkgdGFyZ2V0IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnV0aWxzLmdldE93blByb3BlcnR5VGFyZ2V0ID0gZnVuY3Rpb24odGFyZ2V0LCBrZXkpIHtcbiAgbGV0IGNoZWNrID0gKG9iaikgPT4ge1xuICAgIGlmKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGxldCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuXG4gICAgaWYoIXByb3RvKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hlY2socHJvdG8pO1xuICB9O1xuXG4gIHJldHVybiBjaGVjayh0YXJnZXQpO1xufTtcblxuLyoqXG4gKiBDbGVhciB2YWx1ZSBwcm94eSBpZiBpdCBleGlzdGVudFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5jbGVhclNjb3BlUHJveHkgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYodHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8ICF2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGxldCBjbGVhciA9IChvYmopID0+IHtcbiAgICBmb3IobGV0IGsgaW4gb2JqKSB7XG4gICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYob2JqW2tdICYmIHR5cGVvZiBvYmpba10gPT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYob2JqW2tdLl9faXNQcm94eSkge1xuICAgICAgICAgIG9ialtrXSA9IG9ialtrXS5fX3RhcmdldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsZWFyKG9ialtrXSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGlmKHZhbHVlLl9faXNQcm94eSkge1xuICAgIHZhbHVlID0gdmFsdWUuX190YXJnZXQ7XG4gIH1cblxuICBjbGVhcih2YWx1ZSk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuXG4vKipcbiAqIEdlbmVyYXRlIHJhbmRvbSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmNyZWF0ZVJhbmRvbVN0cmluZyA9IGZ1bmN0aW9uKGxlbmd0aCA9IDE2LCBmbiA9IG51bGwpIHtcbiAgbGV0IHN0ciA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCBsZW5ndGggKyAyKTtcbiAgbGV0IHZhbCA9ICcnO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBzdHIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYoTWF0aC5yYW5kb20oKSA+IDAuNjYpIHtcbiAgICAgIHZhbCArPSBzdHJbaV0udG9VcHBlckNhc2UoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YWwgKz0gc3RyW2ldO1xuICAgIH1cbiAgfVxuXG4gIGlmKGZuICYmIGZuKHZhbCkpIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVSYW5kb21TdHJpbmcobGVuZ3RoLCBmbik7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXRpbHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzLmpzIiwiaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xuICBjb25zdHJ1Y3RvcihiYXNlVXJsLCBkZWZhdWx0cykge1xuICAgIHRoaXMuYmFzZVVybCA9IGJhc2VVcmw/IChiYXNlVXJsLnJlcGxhY2UoL1xcLyQvLCAnJykgKyAnLycpOiAnJztcblxuICAgIHRoaXMuZGVmYXVsdHMgPSB7XG4gICAgICBzdGF0dXNFcnJvcnNQYXR0ZXJuOiAvXihbXjIzXSl8NDA0LyxcbiAgICAgIC4uLihkZWZhdWx0cyB8fCB7fSlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgcmVxdWVzdCB3aXRoIGFueSBtZXRob2RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBxdWVyeShvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCB1cmw7XG4gICAgICBsZXQgeGhyO1xuXG4gICAgICBvcHRpb25zID0gey4uLnRoaXMuZGVmYXVsdHMsIC4uLihvcHRpb25zIHx8IHt9KX07XG5cbiAgICAgIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgKHR5cGVvZiBvcHRpb25zLm9uU3RhcnQgPT0gJ2Z1bmN0aW9uJykgJiYgb3B0aW9ucy5vblN0YXJ0KHhocik7XG4gICAgICBvcHRpb25zID0gdGhpcy50cmFuc2Zvcm1CZWZvcmUob3B0aW9ucyk7XG4gICAgICB1cmwgPSB0aGlzLmJhc2VVcmw/IGAke3RoaXMuYmFzZVVybH0ke29wdGlvbnMudXJsLnJlcGxhY2UoL15cXC8vLCAnJyl9YDogb3B0aW9ucy51cmw7XG4gICAgICB4aHIub3BlbihvcHRpb25zLm1ldGhvZCwgdXJsLCB0cnVlLCBvcHRpb25zLnVzZXIsIG9wdGlvbnMucGFzc3dvcmQpO1xuICAgICAgb3B0aW9ucy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzIHx8IHt9O1xuXG4gICAgICBpZihvcHRpb25zLmpzb24pIHtcbiAgICAgICAgb3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5qc29uKTtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzWydjb250ZW50LXR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgb3B0aW9ucy5yZXNwb25zZVR5cGUgPSBvcHRpb25zLnJlc3BvbnNlVHlwZSB8fCAnanNvbic7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKG9wdGlvbnMuZm9ybSkge1xuICAgICAgICBvcHRpb25zLmJvZHkgPSB0aGlzLmNyZWF0ZUZvcm1EYXRhKG9wdGlvbnMuZm9ybSk7XG4gICAgICAgIG9wdGlvbnMuaGVhZGVyc1snY29udGVudC10eXBlJ10gPSAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc7XG4gICAgICB9XG5cbiAgICAgIGlmKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ3RpbWVvdXQnKSkge1xuICAgICAgICB4aHIudGltZW91dCA9IG9wdGlvbnMudGltZW91dDtcbiAgICAgIH1cblxuICAgICAgaWYob3B0aW9ucy5yZXNwb25zZVR5cGUpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlO1xuICAgICAgfVxuXG4gICAgICBpZihvcHRpb25zLndpdGhDcmVkZW50aWFscykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gb3B0aW9ucy53aXRoQ3JlZGVudGlhbHM7XG4gICAgICB9XG5cbiAgICAgIGlmKG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICBmb3IobGV0IGsgaW4gb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgICAgaWYoIW9wdGlvbnMuaGVhZGVycy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaywgb3B0aW9ucy5oZWFkZXJzW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZihvcHRpb25zLnBhcmFtcykge1xuICAgICAgICBsZXQgc3RyID0gdGhpcy5wYXJhbXNUb1F1ZXJ5KG9wdGlvbnMucGFyYW1zKTtcblxuICAgICAgICBpZihzdHIpIHtcbiAgICAgICAgICB1cmwgKz0gXCI/XCIgKyBzdHI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYodHlwZW9mIG9wdGlvbnMub25Qcm9ncmVzcyA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHhoci5vbnByb2dyZXNzID0gKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBvcHRpb25zLm9uUHJvZ3Jlc3MoeGhyKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gdGhpcy50cmFuc2Zvcm1BZnRlcih4aHIpO1xuXG4gICAgICAgIGlmKCh4aHIuc3RhdHVzICsgJycpLm1hdGNoKG9wdGlvbnMuc3RhdHVzRXJyb3JzUGF0dGVybikpIHtcbiAgICAgICAgICBsZXQgZXJyID0gbmV3IEVycm9yKGBSZXF1ZXN0IHRvIFwiJHt1cmx9XCIgcmV0dXJucyBmYWlsdXJlIHN0YXR1cyBjb2RlICR7eGhyLnN0YXR1c31gKTtcblxuICAgICAgICAgIGVyci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuXG4gICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9O1xuXG4gICAgICB4aHIudGltZW91dCA9ICgpID0+IHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgUmVxdWVzdCB0byBcIiR7dXJsfVwiIHRpbWVkIG91dGApKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbmVycm9yID0gKGVycikgPT4ge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5zZW5kKG9wdGlvbnMuYm9keSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBvYmplY3QgdG8gcXVlcnkgc3RyaW5nXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHBhcmFtc1RvUXVlcnkob2JqKSB7XG4gICAgbGV0IHNlcCA9ICcmJztcbiAgICBsZXQgZXEgPSAnPSc7XG5cbiAgICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLm1hcCgoaykgPT4ge1xuICAgICAgbGV0IGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KGspO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmpba10pKSB7XG4gICAgICAgIGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KGspO1xuXG4gICAgICAgIHJldHVybiBvYmpba10ubWFwKCh2LCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGtzICsgYFske2l9XWAgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudCh2KTtcbiAgICAgICAgfSkuam9pbihzZXApO1xuICAgICAgfVxuICAgICAgZWxzZSBpZihvYmpba10gJiYgdHlwZW9mIG9ialtrXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbGV0IG9wdCA9IFtdO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKG9ialtrXSkubWFwKChrZXkpID0+IHtcbiAgICAgICAgICBvcHQucHVzaChrcyArIGBbJHtrZXl9XWAgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba11ba2V5XSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gb3B0LmpvaW4oc2VwKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4ga3MgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba10pO1xuICAgICAgfVxuICAgIH0pLmpvaW4oc2VwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHF1ZXJ5IHN0cmluZyB0byBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgcGFyYW1zRnJvbVF1ZXJ5KHN0cikge1xuICAgIGxldCBxdWVyeSA9IHt9O1xuICAgIGxldCBhbXBzID0gc3RyLnNwbGl0KCcmJyk7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gYW1wcy5sZW5ndGg7IGkgPGw7IGkrKykge1xuICAgICAgbGV0IGVxcyA9ICBhbXBzW2ldLnNwbGl0KCc9Jyk7XG4gICAgICBsZXQga2V5ID0gZGVjb2RlVVJJQ29tcG9uZW50KGVxc1swXSk7XG4gICAgICBsZXQgdmFsID0gZGVjb2RlVVJJQ29tcG9uZW50KGVxc1sxXSk7XG5cbiAgICAgIGlmKCFrZXkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgICAgcXVlcnlba2V5XS5wdXNoKHZhbCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKHF1ZXJ5W2tleV0pIHtcbiAgICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldLCB2YWxdO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHF1ZXJ5W2tleV0gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBtdWx0aXBhcnQgZm9ybSBkYXRhIGZyb20gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICogQHBhcmFtIHtGb3JtRGF0YX0gW2RhdGFdXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbmFtZXNwYWNlXVxuICAgKlxuICAgKiBAcmV0dXJucyB7Rm9ybURhdGF9XG4gICAqL1xuICBjcmVhdGVGb3JtRGF0YShvYmosIGRhdGEgPSBudWxsLCBuYW1lc3BhY2UgPSAnJykge1xuICAgIGxldCBmZCA9IGRhdGEgfHwgbmV3IEZvcm1EYXRhKCk7XG5cbiAgICBmb3IobGV0IGsgaW4gb2JqKSB7XG4gICAgICBpZihvYmouaGFzT3duUHJvcGVydHkoaykgJiYgb2JqW2tdKSB7XG4gICAgICAgIGxldCBrZXkgPSBuYW1lc3BhY2U/IG5hbWVzcGFjZSArICdbJyArIGsgKyAnXSc6IGs7XG5cbiAgICAgICAgaWYgKG9ialtrXSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICBmZC5hcHBlbmQoa2V5LCBvYmpba10udG9JU09TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodXRpbHMuaXNQbGFpbk9iamVjdChvYmpba10pKSB7XG4gICAgICAgICAgdGhpcy5jcmVhdGVGb3JtRGF0YShvYmpba10sIGZkLCBrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGZkLmFwcGVuZChrZXksIG9ialtrXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmQ7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIGRhdGEgYmVmb3JlIGEgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgdHJhbnNmb3JtQmVmb3JlKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gZGF0YSBhZnRlciBhIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtYTUxIdHRwUmVxdWVzdH0geGhyXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICB0cmFuc2Zvcm1BZnRlcih4aHIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeGhyOiB4aHIsXG4gICAgICBkYXRhOiB4aHIucmVzcG9uc2UsXG4gICAgICBzdGF0dXM6IHhoci5zdGF0dXNcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIEdFVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBnZXQodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdHRVQnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgREVMRVRFIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGRlbGV0ZSh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ0RFTEVURSc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBQT1NUIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHBvc3QodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQT1NUJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIFBVVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBwdXQodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQVVQnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgUEFUQ0ggcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcGF0Y2godXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQQVRDSCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoKTtcblxucmVxdWVzdC5fX2luc3RhbmNlcyA9IHt9O1xuXG4vKipcbiAqIEFkZCBuZXcgcmVxdWVzdCBpbnN0YW5jZSB0byB0aGUgbWFpbiBzZXJ2aWNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7UmVxdWVzdH0gaW5zdGFuY2VcbiAqL1xucmVxdWVzdC5hZGRJbnN0YW5jZSA9IGZ1bmN0aW9uKG5hbWUsIGluc3RhbmNlKSB7XG4gIHRoaXMuX19pbnN0YW5jZXNbbmFtZV0gPSBpbnN0YW5jZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGluc3RhbmNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucmVxdWVzdC5yZW1vdmVJbnN0YW5jZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZGVsZXRlIHRoaXMuX19pbnN0YW5jZXNbbmFtZV07XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWVzdCwgJ3VzZScsIHtcbiAgZ2V0OiAoKSA9PiB7XG4gICAgcmV0dXJuIHJlcXVlc3QuX19pbnN0YW5jZXM7XG4gIH1cbn0pO1xuXG5yZXF1ZXN0LlJlcXVlc3QgPSBSZXF1ZXN0O1xuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvcmVxdWVzdC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMudmFsdWVLZXkgPSAndmFsdWUnO1xuICB9XG5cbiAgY2hhbmdlZFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBjaGFuZ2VkRm9jdXModmFsdWUpIHtcbiAgICB0aGlzLnNldEZvY3VzKHZhbHVlKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ2ZvY3VzJykgJiYgdGhpcy5zZXRGb2N1cyh0aGlzLmF0dHJzLmZvY3VzKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCd2YWx1ZScpICYmIHRoaXMuc2V0VmFsdWUodGhpcy5hdHRycy52YWx1ZSk7XG4gIH1cblxuICBzZXRGb2N1cyh2YWx1ZSkge1xuICAgIHZhbHVlPyB0aGlzLnNldEVsZW1lbnRGb2N1cygpOiB0aGlzLnNldEVsZW1lbnRCbHVyKCk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICh0aGlzLmVsW3RoaXMudmFsdWVLZXldICE9PSB2YWx1ZSkgJiYgKHRoaXMuZWxbdGhpcy52YWx1ZUtleV0gPSB2YWx1ZSA9PT0gMD8gJzAnOiAodmFsdWUgfHwgJycpKTtcbiAgfVxuXG4gIHNldEVsZW1lbnRGb2N1cygpIHtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cblxuICBzZXRFbGVtZW50Qmx1cigpIHtcbiAgICB0aGlzLmVsLmJsdXIoKTtcbiAgfVxufTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGV4dC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbaW5dJztcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnZm9yJywgRm9yKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ29sJywgRm9yKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3VsJywgRm9yKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RoZWFkJywgRm9yKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3Rib2R5JywgRm9yKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3Rmb290JywgRm9yKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RyJywgTG9vcCk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdsb29wJywgTG9vcCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLl9faXRlcmF0b3IgPSBudWxsO1xuICAgIHRoaXMuX19rZXkgPSBudWxsO1xuICAgIHRoaXMuX192YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5fX2luZGV4ID0gbnVsbDtcbiAgICB0aGlzLl9fY29tcGFyaXNvblZhbHVlID0gbnVsbDtcbiAgICB0aGlzLml0ZXJhdG9ycyA9IHt9O1xuICAgIHRoaXMuaXRlcmF0b3JSZWYgPSBudWxsO1xuICAgIHRoaXMuaXRlcmF0b3JPdXRlckhUTUwgPSBudWxsO1xuICB9XG5cbiAgY2hhbmdlZEluKGRhdGEpIHtcbiAgICB0aGlzLmRyYXcoZGF0YSk7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuY3JlYXRlSXRlcmF0b3IoKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuZHJhdyh0aGlzLmF0dHJzLmluKTtcbiAgfVxuXG4gIGNyZWF0ZUl0ZXJhdG9yKCkge1xuICAgIGxldCBlbDtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5lbC5jaGlsZHJlbltpXTtcblxuICAgICAgaWYoY2hpbGQuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKSA9PSAnbG9vcCcpIHtcbiAgICAgICAgZWwgPSBjaGlsZDtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZWwgPSBjaGlsZDtcbiAgICB9XG5cbiAgICBpZighZWwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignXCJGb3JcIiBjb21wb25lbnQgbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBjaGlsZCcpXG4gICAgfVxuXG4gICAgbGV0IGNvbXBvbmVudE5hbWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpO1xuXG4gICAgaWYoY29tcG9uZW50TmFtZSAhPSAnbG9vcCcpIHtcbiAgICAgIGxldCBjb21wb25lbnQgPSBBa2lsaS5jb21wb25lbnQoY29tcG9uZW50TmFtZSB8fCBlbC50YWdOYW1lKTtcblxuICAgICAgaWYoIWNvbXBvbmVudCkge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcsICdsb29wJyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKCEoY29tcG9uZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIEZvcikpIHtcbiAgICAgICAgbGV0IG1hc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsb29wJyk7XG5cbiAgICAgICAgbWFzay5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIGVsID0gbWFzaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmh0bWwgPSBlbC5pbm5lckhUTUw7XG4gICAgdGhpcy5pdGVyYXRvclJlZiA9IGVsLm5leHRTaWJsaW5nO1xuICAgIHRoaXMuaXRlcmF0b3JPdXRlckhUTUwgPSBlbC5vdXRlckhUTUw7XG4gICAgZWwucmVtb3ZlKCk7XG4gIH1cblxuICBjcmVhdGVJdGVyYXRvckVsZW1lbnQoKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcblxuICAgIGVsLmlubmVySFRNTCA9IHRoaXMuaXRlcmF0b3JPdXRlckhUTUw7XG4gICAgZWwgPSBlbC5jb250ZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBsb29wKGtleSwgdmFsdWUsIGtleXMsIGluZGV4KSB7XG4gICAgdGhpcy5fX2luZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5fX2tleSA9IGtleTtcbiAgICB0aGlzLl9fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLl9fY29tcGFyaXNvblZhbHVlID0gdXRpbHMuY29weSh2YWx1ZSk7XG5cbiAgICBsZXQgaGFzaCA9ICcnO1xuICAgIGxldCBmb3VuZCA9IDA7XG5cbiAgICBpZih2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgJiYgdmFsdWUuX19oYXNoKSB7XG4gICAgICBoYXNoID0gdmFsdWUuX19oYXNoO1xuICAgIH1cblxuICAgIGlmKHRoaXMuaXRlcmF0b3JzW2hhc2hdKSB7XG4gICAgICBrZXkgPSBoYXNoO1xuICAgICAgZm91bmQgPSAyO1xuICAgIH1cbiAgICBlbHNlIGlmKHRoaXMuaXRlcmF0b3JzW2tleV0pIHtcbiAgICAgIGZvdW5kID0gMTtcbiAgICB9XG5cbiAgICBpZihmb3VuZCkge1xuICAgICAgbGV0IGl0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcnNba2V5XTtcblxuICAgICAgaWYoZm91bmQgPT0gMikge1xuICAgICAgICBsZXQgY1ZhbHVlID0gaXRlcmF0b3IuY29tcGFyc2lvbi52YWx1ZTtcbiAgICAgICAgbGV0IGNDb3B5ID0gaXRlcmF0b3IuY29tcGFyc2lvbi5jb3B5O1xuXG4gICAgICAgIGlmICh0aGlzLl9faW5kZXggIT09IGl0ZXJhdG9yLmluZGV4KSB7XG4gICAgICAgICAgaXRlcmF0b3Iuc2V0SW5kZXgoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9fa2V5ICE9PSBpdGVyYXRvci5rZXkpIHtcbiAgICAgICAgICBpdGVyYXRvci5zZXRLZXkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdXRpbHMuY29tcGFyZVByZXZpb3VzVmFsdWUodmFsdWUsIGNWYWx1ZSwgY0NvcHksIHRoaXMuX19jb21wYXJpc29uVmFsdWUpKSB7XG4gICAgICAgICAgaXRlcmF0b3Iuc2V0VmFsdWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGtleXNba2V5XSA9IGl0ZXJhdG9yO1xuICAgICAgICBkZWxldGUgdGhpcy5pdGVyYXRvcnNba2V5XTtcblxuICAgICAgICByZXR1cm4gaXRlcmF0b3I7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaXRlcmF0b3JSZWYgPSBpdGVyYXRvci5lbC5uZXh0U2libGluZztcbiAgICAgIGl0ZXJhdG9yLl9fZGVzdHJveSgpO1xuICAgIH1cblxuICAgIGxldCBlbCA9IHRoaXMuY3JlYXRlSXRlcmF0b3JFbGVtZW50KCk7XG5cbiAgICBlbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XG4gICAgdGhpcy5lbC5pbnNlcnRCZWZvcmUoZWwsIHRoaXMuaXRlcmF0b3JSZWYpO1xuICAgIEFraWxpLmNvbXBpbGUoZWwpO1xuXG4gICAgaWYodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgICBpZighdmFsdWUuX19oYXNoKSB7XG4gICAgICAgIGhhc2ggPSB1dGlscy5jcmVhdGVSYW5kb21TdHJpbmcoMzIsIChzdHIpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5pdGVyYXRvcnNbc3RyXTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbHVlLCAnX19oYXNoJywge1xuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIHZhbHVlOiBoYXNoXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBrZXlzW2hhc2hdID0gdGhpcy5fX2l0ZXJhdG9yO1xuICAgICAgZGVsZXRlIHRoaXMuaXRlcmF0b3JzW2hhc2hdO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmKEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgbGV0IGVWYWx1ZSA9IHR5cGVvZiB0aGlzLl9fdmFsdWUgPT0gJ3N0cmluZyc/IGBcIiR7dGhpcy5fX3ZhbHVlfVwiYDogdGhpcy5fX3ZhbHVlO1xuXG4gICAgICAgIGxldCBhcmdzID0gW1xuICAgICAgICAgIGBcIkZvclwiIGNvbXBvbmVudCBsb29wIGl0ZW1zIHNob3VsZCBoYXZlIFwib2JqZWN0XCIgdHlwZSBmb3IgaGlnaGVyIHBlcmZvcm1hbmNlLmAsXG4gICAgICAgICAgYFlvdSBjYW4gY2hhbmdlICR7ZVZhbHVlfSB0byB7dmFsdWU6ICR7ZVZhbHVlfX0sIGZvciBleGFtcGxlLmBcbiAgICAgICAgXTtcblxuICAgICAgICBjb25zb2xlLndhcm4uYXBwbHkoY29uc29sZS53YXJuLCBhcmdzKTtcbiAgICAgIH1cblxuICAgICAga2V5c1trZXldID0gdGhpcy5fX2l0ZXJhdG9yO1xuICAgICAgZGVsZXRlIHRoaXMuaXRlcmF0b3JzW2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsLl9fYWtpbGk7XG4gIH1cblxuICBkcmF3KGRhdGEpIHtcbiAgICBpZiAodHlwZW9mIGRhdGEgIT0gJ29iamVjdCcgfHwgZGF0YSA9PT0gbnVsbCkge1xuICAgICAgaWYoQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICBjb25zb2xlLndhcm4oYFwiRm9yXCIgY29tcG9uZW50IFwiaW5cIiBhdHRyaWJ1dGUgdmFsdWUgdHlwZSBtdXN0IGJlIGFuIG9iamVjdC9hcnJheWApO1xuICAgICAgICBkYXRhID0gW107XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGtleXMgPSB7fTtcbiAgICBsZXQgaW5kZXhLZXlzID0gW107XG4gICAgbGV0IGxhc3RFbGVtZW50ID0gbnVsbDtcbiAgICBsZXQgbGFzdCA9IHRoaXMuZWwuY2hpbGRyZW5bdGhpcy5lbC5jaGlsZHJlbi5sZW5ndGggLSAxXTtcblxuICAgIGlmKGxhc3QgJiYgIShsYXN0Ll9fYWtpbGkgaW5zdGFuY2VvZiBMb29wKSkge1xuICAgICAgbGFzdEVsZW1lbnQgPSBsYXN0O1xuICAgIH1cblxuICAgIGlmKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBkYXRhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpbmRleEtleXMucHVzaCh0aGlzLmxvb3AoaSwgZGF0YVtpXSwga2V5cywgaSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBpID0gMDtcblxuICAgICAgZm9yKGxldCBrIGluIGRhdGEpIHtcbiAgICAgICAgaWYoIWRhdGEuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4S2V5cy5wdXNoKHRoaXMubG9vcChrLCBkYXRhW2tdLCBrZXlzLCBpKSk7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gaW5kZXhLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGl0ZXJhdG9yID0gaW5kZXhLZXlzW2ldO1xuXG4gICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGl0ZXJhdG9yLmVsKTtcbiAgICAgIGl0ZXJhdG9yLml0ZXJhdGUoaSk7XG4gICAgfVxuXG4gICAgbGFzdEVsZW1lbnQgJiYgdGhpcy5lbC5hcHBlbmRDaGlsZChsYXN0RWxlbWVudCk7XG5cbiAgICBmb3IobGV0IGsgaW4gdGhpcy5pdGVyYXRvcnMpIHtcbiAgICAgIGlmKCF0aGlzLml0ZXJhdG9ycy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pdGVyYXRvcnNba10uX19kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdGhpcy5pdGVyYXRvcnMgPSBrZXlzO1xuICB9XG59O1xuXG5leHBvcnQgY2xhc3MgTG9vcCBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG4gIHN0YXRpYyBjb250cm9sQXR0cmlidXRlcyA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5mb3IgPSBudWxsO1xuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuaXNGb3IgPSB0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnaW4nKTtcblxuICAgIGlmKCF0aGlzLmlzRm9yICYmICEodGhpcy5lbC5wYXJlbnROb2RlLl9fYWtpbGkgaW5zdGFuY2VvZiBGb3IpKSB7XG4gICAgICB0aGlzLmNhbmNlbCgpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9faXRlcmF0b3IgPSB0aGlzO1xuICAgIHRoaXMuZm9yID0gdGhpcy5fX3BhcmVudC5fX2FraWxpO1xuICAgIHRoaXMuc2V0SW5kZXgoKTtcbiAgICB0aGlzLnNldEtleSgpO1xuICAgIHRoaXMuc2V0VmFsdWUoKTtcblxuICAgIHRoaXMuaXNGb3IgJiYgc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5pc0ZvciAmJiBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgc2V0SW5kZXgoKSB7XG4gICAgdGhpcy5pbmRleCA9IHRoaXMuZm9yLl9faW5kZXg7XG4gICAgdGhpcy5zY29wZS5fX3NldCgnbG9vcEluZGV4JywgdGhpcy5pbmRleCk7XG4gIH1cblxuICBzZXRLZXkoKSB7XG4gICAgdGhpcy5rZXkgPSB0aGlzLmZvci5fX2tleTtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wS2V5JywgdGhpcy5rZXkpO1xuICB9XG5cbiAgc2V0VmFsdWUoKSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuZm9yLl9fdmFsdWU7XG4gICAgdGhpcy5zY29wZS5fX3NldCgnbG9vcFZhbHVlJywgdGhpcy52YWx1ZSwgdHJ1ZSk7XG5cbiAgICB0aGlzLmNvbXBhcnNpb24gPSB7XG4gICAgICBjb3B5OiB0aGlzLmZvci5fX2NvbXBhcmlzb25WYWx1ZSxcbiAgICAgIHZhbHVlOiB0aGlzLmZvci5fX3ZhbHVlXG4gICAgfVxuICB9XG5cbiAgaXRlcmF0ZShpbmRleCkge31cbn1cblxuRm9yLkxvb3AgPSBMb29wO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZm9yLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdyb3V0ZScsIFJvdXRlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtUcmFuc2l0aW9ufSB0cmFuc2l0aW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgc2V0VHJhbnNpdGlvbih0cmFuc2l0aW9uKSB7XG4gICAgbGV0IHN0YXRlID0gdHJhbnNpdGlvbi5wYXRoLnN0YXRlO1xuICAgIGxldCBwYXJhbXMgPSB0cmFuc2l0aW9uLnBhdGgucGFyYW1zO1xuICAgIGxldCB1cmwgPSB0cmFuc2l0aW9uLnVybDtcbiAgICBsZXQgcXVlcnkgPSB0cmFuc2l0aW9uLnF1ZXJ5O1xuICAgIGxldCBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbiAgICBmdW5jdGlvbiBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24ocGF0aCkge1xuICAgICAgaWYocGF0aC5wYXJlbnQpIHtcbiAgICAgICAgaWYgKHBhdGgucGFyZW50LmNvbXBvbmVudCkge1xuICAgICAgICAgIHJldHVybiBwYXRoLnBhcmVudC5jb21wb25lbnQuX19zY29wZS5fX3RyYW5zaXRpb24ucGF0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24ocGF0aC5wYXJlbnQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLl9fc2NvcGUuX190cmFuc2l0aW9uID0ge1xuICAgICAgcGF0aDoge1xuICAgICAgICBzdGF0ZTogc3RhdGUubmFtZSxcbiAgICAgICAgZGF0YTogdHJhbnNpdGlvbi5wYXRoLmRhdGEsXG4gICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICBwYXJlbnQ6IGdldFBhcmVudFNjb3BlVHJhbnNpdGlvbih0cmFuc2l0aW9uLnBhdGgpXG4gICAgICB9LFxuICAgICAgcGFyYW1zOiB0cmFuc2l0aW9uLnBhcmFtcyxcbiAgICAgIHVybDogdXJsLFxuICAgICAgcXVlcnk6IHF1ZXJ5XG4gICAgfTtcblxuICAgIGlmIChzdGF0ZS50ZW1wbGF0ZSkge1xuICAgICAgdGhpcy5lbXB0eSgpO1xuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBgPGNvbXBvbmVudD4ke3N0YXRlLnRlbXBsYXRlfTwvY29tcG9uZW50PmA7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLnRlbXBsYXRlVXJsKSB7XG4gICAgICBwID0gcmVxdWVzdC5nZXQoc3RhdGUudGVtcGxhdGVVcmwpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICB0aGlzLmVtcHR5KCk7XG4gICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gYDxjb21wb25lbnQ+JHtyZXMuZGF0YX08L2NvbXBvbmVudD5gO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHAudGhlbigoKSA9PiB7XG4gICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICB9KTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9yb3V0ZS5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVsLCBjb21wb25lbnQpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIHRoZSBldmVudFxuICAgKlxuICAgKiBAcGFyYW0geyp9IGRhdGEgLSBzZW5kaW5nIGRhdGEuIFdpbGwgYmUgaW4gdGhlIGV2ZW50LmRldGFpbFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlXVxuICAgKi9cbiAgdHJpZ2dlcihkYXRhLCBvcHRpb25zID0geyBidWJibGVzOiBmYWxzZSB9LCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgaWYoZm9yY2UgfHwgIXRoaXMuaW5FdmFsdWF0aW5nKCkpIHtcbiAgICAgIHRoaXMuZWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQodGhpcy5uYW1lLCB7ZGV0YWlsOiBkYXRhLCAuLi5vcHRpb25zfSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaCB0aGUgZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gX0V2ZW50IC0gY2xhc3Mgb2YgdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdXG4gICAqL1xuICBkaXNwYXRjaChfRXZlbnQsIG9wdGlvbnMgPSB7IGJ1YmJsZXM6IGZhbHNlIH0sIGZvcmNlID0gZmFsc2UpIHtcbiAgICBpZihmb3JjZSB8fCAhdGhpcy5pbkV2YWx1YXRpbmcoKSkge1xuICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnQodGhpcy5uYW1lLCBvcHRpb25zKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGV2ZW50IGNhbGxiYWNrIGRvZXNuJ3QgcnVuIHJlY3Vyc2l2ZVxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGluRXZhbHVhdGluZygpIHtcbiAgICBsZXQgZGF0YSA9IHRoaXMuY29tcG9uZW50Ll9fZXZhbHVhdGluZ0V2ZW50O1xuXG4gICAgaWYoIWRhdGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YS5lbCA9PT0gdGhpcy5lbCAmJiBkYXRhLmV2ZW50LnR5cGUgPT09IHRoaXMubmFtZSAmJiBkYXRhLmNvbXBvbmVudCA9PT0gdGhpcy5jb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogQmluZCB0aGUgZnVuY3Rpb25cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICovXG4gIGJpbmQoZm4pIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5uYW1lLCB0aGlzLmZuID0gZm4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCB0aGUgZnVuY3Rpb25cbiAgICovXG4gIHVuYmluZCgpIHtcbiAgICB0aGlzLmZuICYmIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMuZm4pO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ldmVudC1lbWl0dGVyLmpzIiwiaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3JlcXVlc3QuanMnO1xuaW1wb3J0IFJvdXRlIGZyb20gJy4uL2NvbXBvbmVudHMvcm91dGUuanMnO1xuXG5leHBvcnQgY2xhc3MgVHJhbnNpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHVybCwgcXVlcnksIGhhc2ggPSAnJywgcHJldmlvdXMgPSBudWxsKSB7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgIHRoaXMuaGFzaCA9IGhhc2g7XG4gICAgdGhpcy5wcmV2aW91cyA9IHByZXZpb3VzO1xuICAgIHRoaXMucGF0aCA9IG51bGw7XG4gICAgdGhpcy5yb3V0ZXMgPSBbXTtcbiAgICB0aGlzLnN0YXRlcyA9IFtdO1xuICAgIHRoaXMucGFyYW1zID0ge307XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IGZhbHNlO1xuICB9XG5cbiAgcmVkaXJlY3QoKSB7XG4gICAgdGhpcy5jYW5jZWwoKTtcbiAgICByb3V0ZXIuc3RhdGUuYXBwbHkocm91dGVyLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgc2V0UGF0aChwYXRoKSB7XG4gICAgcGF0aC5wYXJlbnQgPSB0aGlzLnBhdGggfHwgbnVsbDtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIHRoaXMucm91dGVzLnB1c2gocGF0aCk7XG4gICAgdGhpcy5zdGF0ZXMucHVzaChwYXRoLnN0YXRlKTtcbiAgICB0aGlzLnBhcmFtcyA9ICFwYXRoLnBhcmVudD8gcGF0aC5wYXJhbXM6IHsuLi5wYXRoLnBhcmVudC5wYXJhbXMsIC4uLnBhdGgucGFyYW1zfTtcbiAgfVxuXG4gIGdldFJvdXRlKHN0YXRlKSB7XG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMucm91dGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJvdXRlID0gdGhpcy5yb3V0ZXNbaV07XG5cbiAgICAgIGlmKHJvdXRlLnN0YXRlID09PSBzdGF0ZSkge1xuICAgICAgICByZXR1cm4gcm91dGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBoYXNTdGF0ZShzdGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlcy5pbmRleE9mKHN0YXRlKSAhPSAtMTtcbiAgfVxuXG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gdHJ1ZTtcbiAgfVxufVxuXG5jb25zdCByb3V0ZXIgPSB7fTtcblxucm91dGVyLmJhc2VVcmwgPSBcIi9cIjtcbnJvdXRlci5zdGF0ZXMgPSBbXTtcbnJvdXRlci5oYXNoTW9kZSA9IHRydWU7XG5yb3V0ZXIuX19yZWRpcmVjdHMgPSAwO1xucm91dGVyLl9faW5pdCA9IGZhbHNlO1xucm91dGVyLl9fb3B0aW9ucyA9IHt9O1xucm91dGVyLl9fcGFyYW1SZWdleCA9IC8oOihbXFx3XFxkLV0rKSkvZztcbnJvdXRlci5fX3JvdXRlU2VsZWN0b3IgPSBjID0+IGMgaW5zdGFuY2VvZiBSb3V0ZTtcblxuLyoqXG4gKiBBZGQgbmV3IHN0YXRlIHRvIHRoZSByb3V0ZXJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHN0YXRlIG5hbWUuIFRvIHNldCBwYXJlbnRzIHlvdSBjYW4gdXNlIGRvdCwgZS5nLiAnYXBwLmFydGljbGUuZWRpdCdcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXR0ZXJuIC0gdXJsIHBhdHRlcm4gbGlrZSAnYXBwL2FydGljbGUvOmlkJ1xuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge3JvdXRlcn1cbiAqL1xucm91dGVyLmFkZCA9IGZ1bmN0aW9uIChuYW1lLCBwYXR0ZXJuLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIHRlbXBsYXRlOiAnJyxcbiAgICB0ZW1wbGF0ZVVybDogJycsXG4gICAgYWJzdHJhY3Q6IGZhbHNlLFxuICAgIGhhbmRsZXI6ICh0cmFuc2l0aW9uKSA9PiB7fVxuICB9O1xuXG4gIGlmKCFvcHRpb25zLnRlbXBsYXRlICYmICFvcHRpb25zLnRlbXBsYXRlVXJsKSB7XG4gICAgb3B0aW9ucy5hYnN0cmFjdCA9IHRydWU7XG4gIH1cblxuICBpZih0aGlzLmhhcyhuYW1lKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIFwiJHtuYW1lfVwiIGlzIGFscmVhZHkgZXhpc3RzYClcbiAgfVxuXG4gIHRoaXMuc2V0U3RhdGUobmFtZSwgcGF0dGVybiwgey4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zfSk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBzdGF0ZSBmcm9tIHRoZSBsaXN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucm91dGVyLnJlbW92ZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmKHRoaXMuc3RhdGVzW2ldLm5hbWUgPT0gbmFtZSkge1xuICAgICAgdGhpcy5zdGF0ZXMuc3BsaWNlKGksIDEpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIENoZWNrIHN0YXRlIGV4aXN0c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmKHRoaXMuc3RhdGVzW2ldLm5hbWUgPT0gbmFtZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBDaGFuZ2UgdGhlIHN0YXRlIHRvIHRoZSBwYXNzZWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHN0YXRlIG5hbWVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSAtIHBhcmFtcyBmb3Igc3RhdGUge2lkOiAxfSA9PiAnL2FwcC86aWQnID0+ICcvYXBwLzEnXG4gKiBAcGFyYW0ge29iamVjdH0gW3F1ZXJ5XSAtIHF1ZXJ5IHt4OiAxfSA9PiAnL2FwcC8/eD0xJ1xuICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoXVxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICovXG5yb3V0ZXIuc3RhdGUgPSBmdW5jdGlvbiAobmFtZSwgcGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSAnJywgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUobmFtZSk7XG5cbiAgaWYgKCFzdGF0ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIHJvdXRlIHN0YXRlIHdpdGggbmFtZSAke25hbWV9YCk7XG4gIH1cblxuICBsZXQgdXJsID0gdGhpcy5jcmVhdGVTdGF0ZVVybChzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCk7XG5cbiAgaWYoIW9wdGlvbnMucmVsb2FkICYmIHVybCA9PT0gdGhpcy5nZXRVcmwoKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuX19vcHRpb25zID0gb3B0aW9ucztcbiAgdGhpcy5zZXRVcmwodXJsKTtcbn07XG5cbi8qKlxuICogR28gYmFja1xuICovXG5yb3V0ZXIuYmFjayA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkuYmFjay5hcHBseSh3aW5kb3cuaGlzdG9yeSwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogR28gdG8gYW55IHdheVxuICovXG5yb3V0ZXIuZ28gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LmdvLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBHbyBmb3J3YXJkXG4gKi9cbnJvdXRlci5mb3J3YXJkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeS5mb3J3YXJkLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RhdGUgYnkgdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICovXG5yb3V0ZXIubG9jYXRpb24gPSBmdW5jdGlvbih1cmwsIG9wdGlvbnMgPSB7IHJlbG9hZDogZmFsc2UgfSkge1xuICB0aGlzLl9fb3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgaWYodGhpcy5oYXNoTW9kZSkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gdXJsO1xuICB9XG4gIGVsc2Uge1xuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCAnJywgdXJsKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSb3V0ZXIgaW5pdGlhbGl6YXRpb24uIFNob3VsZCBiZSBjYWxsZWQgYmVmb3JlIEFraWxpLmluaXQoKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbZGVmYXVsdFVybF1cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2hhc2hNb2RlPXRydWVdXG4gKi9cbnJvdXRlci5pbml0ID0gZnVuY3Rpb24gKGRlZmF1bHRVcmwgPSAnJywgaGFzaE1vZGUgPSB0cnVlKSB7XG4gIGxldCBvbGRQdXNoU3RhdGUgPSB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGU7XG5cbiAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IHJlcyA9IG9sZFB1c2hTdGF0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgcm91dGVyLmNoYW5nZVN0YXRlKCk7XG5cbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIHRoaXMuX19vblN0YXRlQ2hhbmdlSGFuZGxlciA9ICgpID0+IHtcbiAgICB0aGlzLmNoYW5nZVN0YXRlKCk7XG4gIH07XG5cbiAgdGhpcy5kZWZhdWx0VXJsID0gZGVmYXVsdFVybDtcbiAgdGhpcy5oYXNoTW9kZSA9IGhhc2hNb2RlO1xuXG4gIHRoaXMuc3RhdGVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICBhID0gYS5uYW1lLnNwbGl0KCcuJykubGVuZ3RoO1xuICAgIGIgPSBiLm5hbWUuc3BsaXQoJy4nKS5sZW5ndGg7XG5cbiAgICByZXR1cm4gYSAtIGI7XG4gIH0pO1xuXG4gIGxldCBzdGF0ZXMgPSB7fTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuICAgIGxldCBwYXJlbnRzID0gW107XG5cbiAgICBzdGF0ZXNbc3RhdGUubmFtZV0gPSBzdGF0ZTtcbiAgICBzdGF0ZS5jaGlsZHJlbiA9IFtdO1xuICAgIHBhcmVudHMgPSBzdGF0ZS5uYW1lLnNwbGl0KCcuJyk7XG4gICAgcGFyZW50cy5wb3AoKTtcbiAgICBzdGF0ZS5sZXZlbCA9IHN0YXRlLmFic3RyYWN0PyBudWxsOiBwYXJlbnRzLmxlbmd0aDtcblxuICAgIGlmIChwYXJlbnRzLmxlbmd0aCkge1xuICAgICAgbGV0IHBhcmVudE5hbWUgPSBwYXJlbnRzLmpvaW4oJy4nKTtcbiAgICAgIGxldCBwYXJlbnQgPSBzdGF0ZXNbcGFyZW50TmFtZV07XG5cbiAgICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIHBhcmVudCByb3V0ZSBzdGF0ZSBcIiR7cGFyZW50TmFtZX1cIiBmb3IgXCIke3N0YXRlLm5hbWV9XCJgKVxuICAgICAgfVxuXG4gICAgICBpZihzdGF0ZS5sZXZlbCAhPT0gbnVsbCAmJiBwYXJlbnQuYWJzdHJhY3QpIHtcbiAgICAgICAgc3RhdGUubGV2ZWwtLTtcbiAgICAgIH1cblxuICAgICAgc3RhdGUuZnVsbFBhdHRlcm4gPSB0aGlzLnNwbGl0U2xhc2hlcyhwYXJlbnQuZnVsbFBhdHRlcm4gKyAnLycgKyBzdGF0ZS5wYXR0ZXJuKTtcbiAgICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKHN0YXRlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzdGF0ZS5mdWxsUGF0dGVybiA9IHN0YXRlLnBhdHRlcm47XG4gICAgfVxuICB9XG5cbiAgaWYoIXRoaXMuc3RhdGVzLmxlbmd0aCAmJiBBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgY29uc29sZS53YXJuKGBZb3UgZGlkbid0IGFkZCBhbnkgcm91dGVzIHRvIHRoZSByb3V0ZXJgKTtcbiAgfVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMuX19vblN0YXRlQ2hhbmdlSGFuZGxlcik7XG4gIHRoaXMuX19pbml0ID0gdHJ1ZTtcbn07XG5cbi8qKlxuICogR2V0IHN0YXRlIGJ5IG5hbWVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHJldHVybnMge29iamVjdHxudWxsfVxuICovXG5yb3V0ZXIuZ2V0U3RhdGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLm5hbWUgPT0gbmFtZSkge1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBTZXQgc3RhdGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IHBhdHRlcm5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKi9cbnJvdXRlci5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChuYW1lLCBwYXR0ZXJuLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IHN0YXRlID0gey4uLm9wdGlvbnMsIG5hbWUsIHBhdHRlcm59O1xuXG4gIHJvdXRlci5zdGF0ZXMucHVzaChzdGF0ZSk7XG5cbiAgcmV0dXJuIHN0YXRlO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgc3RhdGUgYnkgbmFtZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnJvdXRlci5yZW1vdmVTdGF0ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZXNbaV07XG5cbiAgICBpZiAoc3RhdGUubmFtZSA9PSBuYW1lKSB7XG4gICAgICB0aGlzLnN0YXRlcy5zcGxpY2UoaSwgMSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogU2V0IHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqL1xucm91dGVyLnNldFVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgdGhpcy5oYXNoTW9kZT8gdGhpcy5zZXRIYXNoVXJsKHVybCk6IHRoaXMuc2V0SGlzdG9yeVVybCh1cmwpO1xufTtcblxuLyoqXG4gKiBTZXQgdXJsIHVzaW5nIGhpc3RvcnlcbiAqXG4gKiBAcGFyYW0gdXJsXG4gKi9cbnJvdXRlci5zZXRIaXN0b3J5VXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgJycsIHVybCk7XG59O1xuXG4vKipcbiAqIFNldCB1cmwgdXNpbmcgaGFzaFxuICpcbiAqIEBwYXJhbSB1cmxcbiAqL1xucm91dGVyLnNldEhhc2hVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyMnICsgKHVybCB8fCAnLycpO1xufTtcblxuLyoqXG4gKiBHZXQgdXJsXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLmdldFVybCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuaGFzaE1vZGUgPyB0aGlzLmdldEhhc2hVcmwoKSA6IHRoaXMuZ2V0SGlzdG9yeVVybCgpO1xufTtcblxuLyoqXG4gKiBHZXQgdXJsIHVzaW5nIGhpc3RvcnlcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuZ2V0SGlzdG9yeVVybCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyB3aW5kb3cubG9jYXRpb24uaGFzaDtcbn07XG5cbi8qKlxuICogR2V0IHVybCB1c2luZyBoYXNoXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLmdldEhhc2hVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKC9eIy8sICcnKTtcbn07XG5cbi8qKlxuICogR2V0IHF1ZXJ5IHBhcmFtc1xuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5oYXNoTW9kZSA/IHRoaXMuZ2V0SGFzaFVybFF1ZXJ5KCkgOiB0aGlzLmdldEhpc3RvcnlVcmxRdWVyeSgpO1xufTtcblxuLyoqXG4gKiBHZXQgcXVlcnkgcGFyYW1zIHVzaW5nIGhpc3RvcnlcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0SGlzdG9yeVVybFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByZXF1ZXN0LnBhcmFtc0Zyb21RdWVyeSh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykpO1xufTtcblxuLyoqXG4gKiBHZXQgcXVlcnkgcGFyYW1zIHVzaW5nIGhhc2hcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0SGFzaFVybFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByZXF1ZXN0LnBhcmFtc0Zyb21RdWVyeSgod2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJz8nKVsxXSB8fCAnJykpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgdXJsIGJ5IGRhdGFcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc11cbiAqIEBwYXJhbSB7b2JqZWN0fSBbcXVlcnldXG4gKiBAcGFyYW0ge3N0cmluZ30gW2hhc2hdXG4gKi9cbnJvdXRlci5jcmVhdGVTdGF0ZVVybCA9IGZ1bmN0aW9uIChzdGF0ZSwgcGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSAnJykge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcblxuICBsZXQgdXJsID0gc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZSh0aGlzLl9fcGFyYW1SZWdleCwgKG0sIGYsIHYpID0+IHtcbiAgICByZXR1cm4gcGFyYW1zW3ZdIHx8ICcnO1xuICB9KTtcblxuICB1cmwgPSB0aGlzLnNwbGl0U2xhc2hlcyh1cmwpO1xuXG4gIGlmKE9iamVjdC5rZXlzKHF1ZXJ5KS5sZW5ndGgpIHtcbiAgICB1cmwgKz0gJz8nICsgcmVxdWVzdC5wYXJhbXNUb1F1ZXJ5KHF1ZXJ5KTtcbiAgfVxuXG4gIGhhc2ggPSAoaGFzaCB8fCAnJykucmVwbGFjZSgnIycsICcnKTtcblxuICBpZighdGhpcy5oYXNoTW9kZSAmJiBoYXNoKSB7XG4gICAgdXJsICs9ICcjJyArIGhhc2g7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYWxsIHVubmVjZXNzYXJ5IHNsYXNoZXMgZnJvbSBhbiB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuc3BsaXRTbGFzaGVzID0gZnVuY3Rpb24gKHVybCkge1xuICByZXR1cm4gdXJsLnJlcGxhY2UoL1tcXC9dKy9nLCAnLycpO1xufTtcblxuLyoqXG4gKiBDbGVhciBhbGwgcm91dGVyIGRlcGVuZGVuY2llc1xuICovXG5yb3V0ZXIuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMuX19vblN0YXRlQ2hhbmdlSGFuZGxlcik7XG59O1xuXG4vKipcbiAqIEdldCBzdGF0ZSB1cmwgY29udGVudFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRQYXR0ZXJuQ29udGVudCA9IGZ1bmN0aW9uIChzdGF0ZSwgdXJsKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuXG4gIGxldCBrZXlzID0gW107XG4gIGxldCBpID0gMDtcbiAgbGV0IHBhcmFtcyA9IHt9O1xuXG4gIHVybCA9IHVybC5zcGxpdCgnPycpWzBdO1xuICB1cmwgPSB1cmwuc3BsaXQoJyMnKVswXTtcblxuICBsZXQgdXJsUGF0dGVybiA9IHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2UodGhpcy5fX3BhcmFtUmVnZXgsIChtLCBmLCB2KSA9PiB7XG4gICAga2V5cy5wdXNoKHYpO1xuXG4gICAgcmV0dXJuICcoW15cXFxcL10qKSc7XG4gIH0pO1xuXG4gIGxldCByZWdleCA9IG5ldyBSZWdFeHAodXJsUGF0dGVybik7XG4gIGxldCBpc0luY2x1ZGVkID0gdXJsLm1hdGNoKHJlZ2V4KTtcblxuICBpZiAoIWlzSW5jbHVkZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHVybC5yZXBsYWNlKHJlZ2V4LCAobSwgdikgPT4ge1xuICAgIHYgJiYgKHBhcmFtc1trZXlzW2ldXSA9IHYpO1xuICAgIGkrKztcbiAgfSk7XG5cbiAgcmV0dXJuIHsgcGFyYW1zIH07XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSBzdGF0ZSBpcyBhY3RpdmUgbm93XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtib29sZWFufSBpbmNsdWRlc1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnJvdXRlci5pc0FjdGl2ZVN0YXRlID0gZnVuY3Rpb24oc3RhdGUsIGluY2x1ZGVzID0gZmFsc2UpIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG5cbiAgbGV0IHVybCA9IHRoaXMuc3BsaXRTbGFzaGVzKHRoaXMuZ2V0VXJsKCkuc3BsaXQoJz8nKVswXSArICcvJyk7XG4gIGxldCB1cmxQYXR0ZXJuID0gc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZSh0aGlzLl9fcGFyYW1SZWdleCwgJyhbXlxcXFwvXSopJyk7XG4gIGxldCBzdHIgPSBpbmNsdWRlcz8gdXJsUGF0dGVybjogdGhpcy5zcGxpdFNsYXNoZXMoJ14nICsgdXJsUGF0dGVybiArICdcXC8kJyk7XG4gIGxldCByZWdleCA9IG5ldyBSZWdFeHAoc3RyKTtcblxuICByZXR1cm4gcmVnZXgudGVzdCh1cmwpO1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgY3VycmVudCB1cmwgaW5jbHVkZXMgYSBzdGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaW5BY3RpdmVTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gIHJldHVybiByb3V0ZXIuaXNBY3RpdmVTdGF0ZShzdGF0ZSwgdHJ1ZSk7XG59O1xuXG4vKipcbiAqIEdldCByb3V0ZSBjb21wb25lbnQgYnkgbGV2ZWxcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbGV2ZWxcbiAqL1xucm91dGVyLmdldFJvdXRlID0gZnVuY3Rpb24gKGxldmVsKSB7XG4gIGxldCBpID0gMDtcblxuICBsZXQgZmluZCA9IChlbCkgPT4ge1xuICAgIGxldCByb3V0ZSA9IGVsLmNoaWxkKHRoaXMuX19yb3V0ZVNlbGVjdG9yKTtcblxuICAgIGlmICghcm91dGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChpID09IGxldmVsKSB7XG4gICAgICByZXR1cm4gcm91dGU7XG4gICAgfVxuXG4gICAgaSsrO1xuXG4gICAgcmV0dXJuIGZpbmQocm91dGUpO1xuICB9O1xuXG4gIHJldHVybiBmaW5kKEFraWxpLnJvb3QpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGZpcnN0IG1hdGNoXG4gKlxuICogQHBhcmFtIHthcnJheX0gYXJyXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gKi9cbnJvdXRlci5nZXRBcnJheVBhdHRlcm5Db250ZW50ID0gZnVuY3Rpb24gKGFyciwgdXJsKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IGFycltpXTtcbiAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0UGF0dGVybkNvbnRlbnQoc3RhdGUsIHVybCk7XG5cbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJldHVybiB7c3RhdGU6IHN0YXRlLCAuLi5jb250ZW50fTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBHZXQgc3RhdGVzIGJ5IGxldmVsXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxldmVsXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbnJvdXRlci5nZXRTdGF0ZXNCeUxldmVsID0gZnVuY3Rpb24gKGxldmVsKSB7XG4gIGxldCBzdGF0ZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLmxldmVsIDwgbGV2ZWwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChzdGF0ZS5sZXZlbCA+IGxldmVsKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzdGF0ZXMucHVzaChzdGF0ZSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVzO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RhdGVcbiAqL1xucm91dGVyLmNoYW5nZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuICBpZih0aGlzLl9fZGlzYWJsZUNoYW5nZSkge1xuICAgIGRlbGV0ZSB0aGlzLl9fZGlzYWJsZUNoYW5nZTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCB1cmwgPSB0aGlzLmdldFVybCgpO1xuICBsZXQgaGFzaCA9IHRoaXMuaGFzaE1vZGU/ICcnOiB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpO1xuICBsZXQgcXVlcnkgPSB0aGlzLmdldFVybFF1ZXJ5KCk7XG4gIGxldCBwcmV2VHJhbnNpdGlvbiA9IHJvdXRlci50cmFuc2l0aW9uIHx8IG51bGw7XG4gIGxldCB0cmFuc2l0aW9uID0gcm91dGVyLnRyYW5zaXRpb24gPSBuZXcgVHJhbnNpdGlvbih1cmwsIHF1ZXJ5LCBoYXNoLCBwcmV2VHJhbnNpdGlvbik7XG4gIGxldCBsZXZlbCA9IDA7XG5cbiAgbGV0IG5leHQgPSAoc3RhdGVzLCBvbkVuZCkgPT4ge1xuICAgIGlmICghc3RhdGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG9uRW5kICYmIG9uRW5kKCk7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldEFycmF5UGF0dGVybkNvbnRlbnQoc3RhdGVzLCB1cmwpO1xuXG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICByZXR1cm4gb25FbmQgJiYgb25FbmQoKTtcbiAgICB9XG5cbiAgICBsZXQgc3RhdGUgPSBjb250ZW50LnN0YXRlO1xuICAgIGxldCBwYXJhbXMgPSBjb250ZW50LnBhcmFtcztcbiAgICBsZXQgcm91dGUgPSBzdGF0ZS5hYnN0cmFjdD8gbnVsbDogdGhpcy5nZXRSb3V0ZShzdGF0ZS5sZXZlbCk7XG5cbiAgICBpZiAoIXJvdXRlICYmICFzdGF0ZS5hYnN0cmFjdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yIChgTm90IGZvdW5kIHJvdXRlIGNvbXBvbmVudCBmb3Igc3RhdGUgXCIke3N0YXRlLm5hbWV9XCJgKTtcbiAgICB9XG5cbiAgICB0cmFuc2l0aW9uLnNldFBhdGgoeyBzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgY29tcG9uZW50OiByb3V0ZSwgbG9hZGVkOiB0cnVlIH0pO1xuICAgIGxldmVsKys7XG5cbiAgICBsZXQgaGFzU3RhdGUgPSBwcmV2VHJhbnNpdGlvbiAmJiBwcmV2VHJhbnNpdGlvbi5oYXNTdGF0ZShzdGF0ZSk7XG4gICAgbGV0IGlzRGlmZmVyZW50ID0gdHJ1ZTtcblxuICAgIGlmKGhhc1N0YXRlKSB7XG4gICAgICBsZXQgcm91dGUgPSBwcmV2VHJhbnNpdGlvbi5nZXRSb3V0ZShzdGF0ZSk7XG4gICAgICBsZXQgcHJldiA9IHsgcGFyYW1zOiByb3V0ZS5wYXJhbXMsIHF1ZXJ5OiByb3V0ZS5xdWVyeSwgaGFzaDogcm91dGUuaGFzaCB9O1xuICAgICAgbGV0IGN1cnJlbnQgPSB7IHBhcmFtcywgcXVlcnksIGhhc2ggfTtcblxuICAgICAgaXNEaWZmZXJlbnQgPSAhdXRpbHMuY29tcGFyZShwcmV2LCBjdXJyZW50KTtcbiAgICB9XG5cbiAgICBsZXQgaXNIaXN0b3J5ID0gdGhpcy5fX29wdGlvbnMucmVsb2FkID09PSB1bmRlZmluZWQgJiYgIWlzRGlmZmVyZW50O1xuICAgIGxldCBpc1JlbG9hZCA9IHRoaXMuX19vcHRpb25zLnJlbG9hZCA9PT0gZmFsc2U7XG5cbiAgICBpZiAoaGFzU3RhdGUgJiYgKGlzSGlzdG9yeSB8fCBpc1JlbG9hZCkpIHtcbiAgICAgIHRyYW5zaXRpb24ucGF0aC5sb2FkZWQgPSBmYWxzZTtcblxuICAgICAgcmV0dXJuIG5leHQoc3RhdGUuY2hpbGRyZW4sIG9uRW5kKTtcbiAgICB9XG5cbiAgICBQcm9taXNlLnJlc29sdmUoc3RhdGUuaGFuZGxlcih0cmFuc2l0aW9uKSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKHRyYW5zaXRpb24uX19jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIG9uRW5kICYmIG9uRW5kKCk7XG4gICAgICB9XG5cbiAgICAgIHRyYW5zaXRpb24ucGF0aC5kYXRhID0gZGF0YTtcblxuICAgICAgaWYoc3RhdGUuYWJzdHJhY3QpIHtcbiAgICAgICAgcmV0dXJuIG5leHQoc3RhdGUuY2hpbGRyZW4sIG9uRW5kKTtcbiAgICAgIH1cblxuICAgICAgcm91dGUuc2V0VHJhbnNpdGlvbih0cmFuc2l0aW9uKS50aGVuKCgpID0+IHtcbiAgICAgICAgdHJhbnNpdGlvbi5wYXRoLmxvYWRlZCA9IHRydWU7XG5cbiAgICAgICAgbmV4dChzdGF0ZS5jaGlsZHJlbiwgb25FbmQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBuZXh0KHRoaXMuZ2V0U3RhdGVzQnlMZXZlbCgwKSwgKCkgPT4ge1xuICAgICAgaWYoIXRyYW5zaXRpb24ucm91dGVzLmxlbmd0aCkge1xuICAgICAgICBpZih0aGlzLl9fcmVkaXJlY3RzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYFdyb25nIHJvdXRlciBkZWZhdWx0IHVybCBcIiR7dGhpcy5kZWZhdWx0VXJsfVwiYCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5kZWZhdWx0VXJsKSB7XG4gICAgICAgICAgaWYodGhpcy5kZWZhdWx0VXJsID09IHRoaXMuZ2V0VXJsKCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKGBOb3QgZm91bmQgYW55IHJvdXRlc2ApKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmhhc2hNb2RlICYmICh0aGlzLl9fZGlzYWJsZUNoYW5nZSA9IHRydWUpO1xuICAgICAgICAgIHRoaXMuc2V0VXJsKHRoaXMuZGVmYXVsdFVybCk7XG4gICAgICAgICAgdGhpcy5fX3JlZGlyZWN0cysrO1xuXG4gICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlU3RhdGUoKS50aGVuKHJlc29sdmUpLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBOb3QgZm91bmQgYSBkZWZhdWx0IHJvdXRlLiBZb3UgY2FuIHBhc3MgaXQgaW4gXCJyb3V0ZXIuaW5pdChkZWZhdWx0VXJsKVwiIGZ1bmN0aW9uYCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fX29wdGlvbnMgPSB7fTtcbiAgICAgIHRoaXMuX19yZWRpcmVjdHMgPSAwO1xuXG4gICAgICBpZihwcmV2VHJhbnNpdGlvbikge1xuICAgICAgICBmb3IobGV0IGkgPSBsZXZlbCwgbCA9IHByZXZUcmFuc2l0aW9uLnJvdXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBsZXQgcm91dGUgPSBwcmV2VHJhbnNpdGlvbi5yb3V0ZXNbaV07XG4gICAgICAgICAgcm91dGUuY29tcG9uZW50ICYmIHJvdXRlLmNvbXBvbmVudC5lbXB0eSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc3RhdGUtY2hhbmdlJywge1xuICAgICAgICBkZXRhaWw6IHRyYW5zaXRpb25cbiAgICAgIH0pKTtcblxuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbnJvdXRlci5UcmFuc2l0aW9uID0gVHJhbnNpdGlvbjtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL3JvdXRlci5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi4vc2VydmljZXMvcm91dGVyLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbc3RhdGVdOm5vdChbdXJsXSksW3VybF06bm90KFtzdGF0ZV0pJztcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gdHJ1ZTtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydyZWxvYWQnXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnYScsIEEpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IG51bGw7XG4gICAgdGhpcy5wYXJhbXMgPSB7fTtcbiAgICB0aGlzLnF1ZXJ5ID0ge307XG4gICAgdGhpcy5oYXNoID0gJyc7XG4gICAgdGhpcy5vcHRpb25zID0ge307XG4gICAgdGhpcy5pc1VybCA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCd1cmwnKTtcbiAgfVxuXG4gIGNoYW5nZWRVcmwodXJsKSB7XG4gICAgdGhpcy5zZXRVcmwodXJsKTtcbiAgICB0aGlzLnJlc2V0SHJlZih1cmwpO1xuICB9XG5cbiAgY2hhbmdlZFN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgdGhpcy5yZXNldEhyZWYoKTtcbiAgfVxuXG4gIGNoYW5nZWRQYXJhbXMocGFyYW1zKSB7XG4gICAgdGhpcy5zZXRQYXJhbXMocGFyYW1zKTtcbiAgICB0aGlzLnJlc2V0SHJlZigpO1xuICB9XG5cbiAgY2hhbmdlZFF1ZXJ5KHF1ZXJ5KSB7XG4gICAgdGhpcy5zZXRRdWVyeShxdWVyeSk7XG4gICAgdGhpcy5yZXNldEhyZWYoKTtcbiAgfVxuXG4gIGNoYW5nZWRIYXNoKHF1ZXJ5KSB7XG4gICAgdGhpcy5zZXRIYXNoKHF1ZXJ5KTtcbiAgICB0aGlzLnJlc2V0SHJlZigpO1xuICB9XG5cbiAgY2hhbmdlZE9wdGlvbnMob3B0aW9ucykge1xuICAgIHRoaXMuc2V0UXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICBjaGFuZ2VkUmVsb2FkKHZhbCkge1xuICAgIHRoaXMuc2V0UmVsb2FkKHZhbCk7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZih0aGlzLmlzVXJsKSB7XG4gICAgICAgIHJvdXRlci5sb2NhdGlvbih0aGlzLmF0dHJzLnVybCwgdGhpcy5vcHRpb25zKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJvdXRlci5zdGF0ZSh0aGlzLnN0YXRlLm5hbWUsIHRoaXMucGFyYW1zLCB0aGlzLnF1ZXJ5LCB0aGlzLmhhc2gsICB0aGlzLm9wdGlvbnMpO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgnc3RhdGUnKSAmJiB0aGlzLnNldFN0YXRlKHRoaXMuYXR0cnMuc3RhdGUpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ3BhcmFtcycpICYmIHRoaXMuc2V0UGFyYW1zKHRoaXMuYXR0cnMucGFyYW1zKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdxdWVyeScpICYmIHRoaXMuc2V0UXVlcnkodGhpcy5hdHRycy5xdWVyeSk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgnaGFzaCcpICYmIHRoaXMuc2V0SGFzaCh0aGlzLmF0dHJzLmhhc2gpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ29wdGlvbnMnKSAmJiB0aGlzLnNldE9wdGlvbnModGhpcy5hdHRycy5vcHRpb25zKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdyZWxvYWQnKSAmJiB0aGlzLnNldFJlbG9hZCh0aGlzLmF0dHJzLnJlbG9hZCk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgndXJsJykgJiYgdGhpcy5zZXRVcmwodGhpcy5hdHRycy51cmwpO1xuICAgIHRoaXMucmVzZXRIcmVmKHRoaXMudXJsKTtcbiAgfVxuXG4gIHNldFVybCh1cmwpIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgfVxuXG4gIHNldFN0YXRlKG5hbWUpIHtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5nZXRTdGF0ZShuYW1lKTtcbiAgICB0aGlzLnNjb3BlLmlzQWN0aXZlU3RhdGUgPSByb3V0ZXIuaXNBY3RpdmVTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgICB0aGlzLnNjb3BlLmluQWN0aXZlU3RhdGUgPSByb3V0ZXIuaW5BY3RpdmVTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHNldFBhcmFtcyhwYXJhbXMpIHtcbiAgICBpZih0eXBlb2YgcGFyYW1zICE9ICdvYmplY3QnIHx8ICFwYXJhbXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIHBhcmFtcyBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICB9XG5cbiAgc2V0UXVlcnkocXVlcnkpIHtcbiAgICBpZih0eXBlb2YgcXVlcnkgIT0gJ29iamVjdCcgfHwgIXF1ZXJ5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBxdWVyeSBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgfVxuXG4gIHNldEhhc2goaGFzaCkge1xuICAgIGlmKHR5cGVvZiBoYXNoICE9ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBoYXNoIG11c3QgYmUgYSBzdHJpbmdgKTtcbiAgICB9XG5cbiAgICB0aGlzLmhhc2ggPSBoYXNoO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYodHlwZW9mIG9wdGlvbnMgIT0gJ29iamVjdCcgfHwgIW9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIG9wdGlvbnMgbXVzdCBiZSBhbiBvYmplY3RgKTtcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgc2V0UmVsb2FkKHZhbCkge1xuICAgIHRoaXMub3B0aW9ucy5yZWxvYWQgPSB2YWw7XG4gIH1cblxuICBnZXRTdGF0ZShuYW1lKSB7XG4gICAgbGV0IHN0YXRlID0gcm91dGVyLmdldFN0YXRlKG5hbWUpO1xuXG4gICAgaWYoIXN0YXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCByb3V0ZXIgc3RhdGUgd2l0aCBuYW1lIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgcmVzZXRIcmVmKHVybCkge1xuICAgIGlmKHVybCkge1xuICAgICAgdGhpcy5hdHRycy5ocmVmID0gdXJsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuYXR0cnMuaHJlZiA9IHJvdXRlci5jcmVhdGVTdGF0ZVVybCh0aGlzLnN0YXRlLCB0aGlzLnBhcmFtcywgdGhpcy5xdWVyeSwgdGhpcy5oYXNoKTtcbiAgICB9XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYS5qcyIsImltcG9ydCBUZXh0IGZyb20gJy4vdGV4dC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50IGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdjb250ZW50JywgQ29udGVudCk7XG4gICAgQWtpbGkuYWxpYXMoJ1tjb250ZW50ZWRpdGFibGVdJywgJ2NvbnRlbnQnKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIGlmKHRoaXMuZWwuaGFzQXR0cmlidXRlKCdlZGl0YWJsZScpKSB7XG4gICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ2VkaXRhYmxlJykpO1xuICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoJ2VkaXRhYmxlJyk7XG4gICAgfVxuXG4gICAgaWYoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKS5kaXNwbGF5ID09ICdpbmxpbmUnKSB7XG4gICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIHRoaXMudmFsdWVLZXkgPSAnaW5uZXJIVE1MJztcbiAgfVxuXG4gIHNldEVsZW1lbnRGb2N1cygpIHtcbiAgICBsZXQgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIGxldCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG5cbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGhpcy5lbCk7XG4gICAgcmFuZ2UuY29sbGFwc2UoZmFsc2UpO1xuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9jb250ZW50LmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1iZWQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbdXJsXSc7XG4gIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnZW1iZWQnLCBFbWJlZCk7XG4gIH1cblxuICBjaGFuZ2VkVXJsKHVybCkge1xuICAgIHRoaXMuc2V0U3JjKHVybCk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCd1cmwnKSAmJiB0aGlzLnNldFNyYyh0aGlzLmF0dHJzLnVybCk7XG4gIH1cblxuICBzZXRTcmModXJsKSB7XG4gICAgdGhpcy5hdHRycy5zcmMgPSB1cmw7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZW1iZWQuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIElmIGNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyB0cmFuc3BhcmVudCA9IHRydWU7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tpc10nO1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ3JlY3JlYXRlJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2lmJywgSWYpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnZWxzZS1pZicsIEVsc2VJZik7XG4gICAgQWtpbGkuY29tcG9uZW50KCdlbHNlJywgRWxzZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuc3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMucmVjcmVhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ29tcGlsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRpc3BsYXkgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpLmRpc3BsYXk7XG4gIH1cblxuICBjaGFuZ2VkSXModmFsdWUpIHtcbiAgICB0aGlzLnN0YXRlID0gISF2YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKCk7XG4gIH1cblxuICBjaGFuZ2VkUmVjcmVhdGUodmFsdWUpIHtcbiAgICB0aGlzLnNldFJlY3JlYXRpb24odmFsdWUpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgncmVjcmVhdGUnKSAmJiB0aGlzLnNldFJlY3JlYXRpb24odGhpcy5hdHRycy5yZWNyZWF0ZSk7XG4gICAgdGhpcy5zdGF0ZSA9ICEhdGhpcy5hdHRycy5pcztcbiAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSgpXG4gIH1cblxuICBzZXRBY3Rpdml0eShhY3RpdmUpIHtcbiAgICB0aGlzLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgfVxuXG4gIHNldFJlY3JlYXRpb24ocmVjcmVhdGUpIHtcbiAgICB0aGlzLnJlY3JlYXRlID0gcmVjcmVhdGU7XG4gIH1cblxuICBzZXRTdGF0ZSgpIHtcbiAgICBsZXQgcmVzID0gdGhpcy5jb21waWxhdGlvbigpO1xuICAgIGxldCBuZXh0ID0gdGhpcy5lbC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgbGV0IHJlc3VsdDtcblxuICAgIGlmKCFuZXh0IHx8ICFuZXh0Lm1hdGNoZXMoJ2Vsc2UtaWYsZWxzZScpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmV4dC5fX2FraWxpLnNldEFjdGl2aXR5KHRoaXMuYWN0aXZlIHx8IHRoaXMuc3RhdGUpO1xuICAgIG5leHQuX19ha2lsaS5zZXRSZWNyZWF0aW9uKHRoaXMucmVjcmVhdGUpO1xuICAgIHJlc3VsdCA9IG5leHQuX19ha2lsaS5zZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMpLnRoZW4oKCkgPT4ge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBpbGF0aW9uKCkge1xuICAgIGxldCByZXM7XG5cbiAgICBpZih0aGlzLnN0YXRlICYmICF0aGlzLmFjdGl2ZSkge1xuICAgICAgaWYodGhpcy5yZWNyZWF0ZSB8fCAhdGhpcy5pc0NvbXBpbGVkKSB7XG4gICAgICAgIHJlcyA9IHRoaXMuY29tcGlsZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmRpc3BsYXk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYodGhpcy5yZWNyZWF0ZSkge1xuICAgICAgICB0aGlzLl9fZW1wdHkoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoIXRoaXMuaXNDb21waWxlZCkge1xuICAgICAgICByZXMgPSB0aGlzLmNvbXBpbGUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGNvbXBpbGUoKSB7XG4gICAgbGV0IHJlcztcblxuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5odG1sO1xuICAgIHJlcyA9IEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgdGhpcy5pc0NvbXBpbGVkID0gdHJ1ZTtcblxuICAgIHJldHVybiByZXM7XG4gIH1cbn07XG5cbi8qKlxuICogRWxzZUlmIGNvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgRWxzZUlmIGV4dGVuZHMgSWYge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBFbHNlIGNvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgRWxzZSBleHRlbmRzIEVsc2VJZiB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2lzJywgJ3RydWUnKTtcbiAgfVxufVxuXG5JZi5FbHNlSWYgPSBFbHNlSWY7XG5JZi5FbHNlID0gRWxzZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pZi5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElmcmFtZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1t1cmxdJztcbiAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpZnJhbWUnLCBJZnJhbWUpO1xuICB9XG5cbiAgY2hhbmdlZFVybCh1cmwpIHtcbiAgICB0aGlzLnNldFNyYyh1cmwpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgndXJsJykgJiYgdGhpcy5zZXRTcmModGhpcy5hdHRycy51cmwpO1xuICB9XG5cbiAgc2V0U3JjKHVybCkge1xuICAgIHRoaXMuYXR0cnMuc3JjID0gdXJsO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2lmcmFtZS5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW3VybF0nO1xuICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2ltZycsIEltYWdlKTtcbiAgfVxuXG4gIGNoYW5nZWRVcmwodXJsKSB7XG4gICAgdGhpcy5zZXRTcmModXJsKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ3VybCcpICYmIHRoaXMuc2V0U3JjKHRoaXMuYXR0cnMudXJsKTtcbiAgfVxuXG4gIHNldFNyYyh1cmwpIHtcbiAgICB0aGlzLmF0dHJzLnNyYyA9IHVybDtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pbWFnZS5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi9zZXJ2aWNlcy9yZXF1ZXN0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5jbHVkZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyB0cmFuc3BhcmVudCA9IHRydWU7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1t1cmxdJztcbiAgc3RhdGljIGV2ZW50cyA9IFsnbG9hZCcsICdlcnJvciddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpbmNsdWRlJywgSW5jbHVkZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gIH1cblxuICBjaGFuZ2VkVXJsKHVybCkge1xuICAgIHRoaXMuZ2V0VGVtcGxhdGUodXJsKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFRlbXBsYXRlKHRoaXMuYXR0cnMudXJsKTtcbiAgfVxuXG4gIGdldFRlbXBsYXRlKHVybCkge1xuICAgIHRoaXMuY29ubmVjdGlvbiAmJiB0aGlzLmNvbm5lY3Rpb24uYWJvcnQoKTtcblxuICAgIHJldHVybiByZXF1ZXN0LmdldCh1cmwsIHtcbiAgICAgIG9uU3RhcnQ6ICh4aHIpID0+IHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0geGhyO1xuICAgICAgfVxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgICAgIHRoaXMuZW1wdHkoKTtcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5odG1sO1xuICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgcmVzLmRhdGEpO1xuXG4gICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5hdHRycy5vbkxvYWQudHJpZ2dlcigpO1xuICAgICAgfSk7XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgdGhpcy5hdHRycy5vbkVycm9yLnRyaWdnZXIoZXJyKTtcbiAgICB9KTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pbmNsdWRlLmpzIiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnY2hlY2tlZCddO1xuICBzdGF0aWMgZXZlbnRzID0gWydjaGFuZ2UnXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaW5wdXQnLCBJbnB1dCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmlzQ2hlY2tib3ggPSB0aGlzLmVsLnR5cGUgPT0gJ2NoZWNrYm94JztcbiAgICB0aGlzLmlzUmFkaW8gPSB0aGlzLmVsLnR5cGUgPT0gJ3JhZGlvJztcbiAgfVxuXG4gIGNoYW5nZWRDaGVja2VkKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRDaGVja2VkKHZhbHVlKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgKHRoaXMuaXNSYWRpbyB8fCB0aGlzLmlzQ2hlY2tib3gpICYmIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldENoZWNrZWQodGhpcy5lbC5jaGVja2VkLCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICByZXNvbHZlZCgpIHtcbiAgICAodGhpcy5pc0NoZWNrYm94IHx8IHRoaXMuaXNSYWRpbykgJiYgdGhpcy5zZXRDaGVja2VkKHRoaXMuYXR0cnMuY2hlY2tlZCk7XG4gIH1cblxuICBzZXRDaGVja2VkKHZhbHVlLCB0cmlnZ2VyID0gdHJ1ZSkge1xuICAgIHZhbHVlID0gISF2YWx1ZTtcblxuICAgIGlmKHRoaXMucHJldkNoZWNrZWQgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5lbC5jaGVja2VkID0gdGhpcy5wcmV2Q2hlY2tlZCA9IHZhbHVlO1xuICAgIHRyaWdnZXIgJiYgdGhpcy5hdHRycy5vbkNoYW5nZS5kaXNwYXRjaChFdmVudCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgIHRoaXMuaXNSYWRpbyAmJiB0aGlzLmNoYW5nZVJhZGlvKCk7XG4gIH1cblxuICBzZXRWYWx1ZSgpIHtcbiAgICBzdXBlci5zZXRWYWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuaXNSYWRpbyAmJiB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cblxuICBjaGFuZ2VSYWRpbygpIHtcbiAgICBsZXQgbmFtZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgbGV0IHNlbGVjdG9yID0gYGlucHV0W3R5cGU9cmFkaW9dW25hbWU9JyR7bmFtZX0nXTpub3QoW3Njb3BlPScke3RoaXMuc2NvcGUuX19uYW1lfSddKWA7XG4gICAgbGV0IGNoaWxkcmVuID0gQWtpbGkucm9vdC5jaGlsZHJlbihzZWxlY3Rvcik7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcmFkaW8gPSBjaGlsZHJlbltpXTtcblxuICAgICAgcmFkaW8uc2V0Q2hlY2tlZChyYWRpby5lbC5jaGVja2VkKTtcbiAgICB9XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaW5wdXQuanMiLCJpbXBvcnQgRm9yLCB7IExvb3AgfSBmcm9tICcuL2Zvci5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIFRoZSByYWRpbyBncm91cCBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaW8gZXh0ZW5kcyBGb3Ige1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbbmFtZV0nO1xuICBzdGF0aWMgZXZlbnRzID0gWydyYWRpbyddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdyYWRpbycsIFJhZGlvKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JhZGlvLWJ1dHRvbicsIFJhZGlvQnV0dG9uKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXRlcmFibGUgPSB0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnaW4nKTtcbiAgfVxuXG4gIGNoYW5nZWRJbih2YWx1ZSkge1xuICAgIHN1cGVyLmNoYW5nZWRJbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuc2V0TmFtZXModGhpcy5hdHRycy5uYW1lKTtcbiAgfVxuXG4gIGNoYW5nZWROYW1lKG5hbWUpIHtcbiAgICB0aGlzLnNldE5hbWVzKG5hbWUpO1xuICB9XG5cbiAgY2hhbmdlZFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuaXRlcmFibGUgJiYgc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5nZXRSYWRpb1ZhbHVlKCk7XG5cbiAgICAgICAgaWYodmFsdWUgPT09IHRoaXMucHJldlZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5hdHRycy5vblJhZGlvLnRyaWdnZXIodmFsdWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXNvbHZlZCgpIHtcbiAgICB0aGlzLnNldE5hbWVzKHRoaXMuYXR0cnMubmFtZSk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSAmJiB0aGlzLnNldFZhbHVlKHRoaXMuYXR0cnMudmFsdWUpO1xuICB9XG5cbiAgc2V0TmFtZXMobmFtZSkge1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oJ2lucHV0W3R5cGU9cmFkaW9dJyk7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjaGlsZHJlbltpXS5lbC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBuYW1lKTtcbiAgICB9XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmKHZhbHVlID09PSB0aGlzLnByZXZWYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBwcmV2ID0gdGhpcy5wcmV2VmFsdWU7XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbignaW5wdXRbdHlwZT1yYWRpb10nKTtcbiAgICBsZXQgaXNUcnVlID0gZmFsc2U7XG5cbiAgICB0aGlzLnByZXZWYWx1ZSA9IHZhbHVlO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJhZGlvID0gY2hpbGRyZW5baV07XG4gICAgICBsZXQgaXNTZWxlY3RlZCA9IHJhZGlvLmVsLnZhbHVlID09PSB2YWx1ZTtcblxuICAgICAgaXNTZWxlY3RlZCAmJiAoaXNUcnVlID0gdHJ1ZSk7XG4gICAgICByYWRpby5zZXRDaGVja2VkKGlzU2VsZWN0ZWQpO1xuICAgIH1cblxuICAgIGlmKCFpc1RydWUpIHtcbiAgICAgIGlmKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIGlmKHByZXYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMucHJldlZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hdHRycy5vblJhZGlvLnRyaWdnZXIodmFsdWUsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgfVxuXG4gIGdldFJhZGlvVmFsdWUoKSB7XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbignaW5wdXRbdHlwZT1yYWRpb10nKTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICBpZihyYWRpby5lbC5jaGVja2VkKSB7XG4gICAgICAgIHJldHVybiByYWRpby5lbC52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBUaGUgcmFkaW8gaXRlbSBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIFJhZGlvQnV0dG9uIGV4dGVuZHMgTG9vcCB7XG4gIHN0YXRpYyB0ZW1wbGF0ZSA9IGA8bGFiZWw+PGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiXFwke3RoaXMudmFsdWV9XCIvPlxcJHt0aGlzLl9fY29udGVudH08L2xhYmVsPmA7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICB9XG5cbiAgY2hhbmdlZFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRSYWRpb1ZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuc2V0UmFkaW9WYWx1ZSh0aGlzLmF0dHJzLnZhbHVlKTtcbiAgfVxuXG4gIHNldFJhZGlvVmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnNjb3BlLnZhbHVlID0gdmFsdWU7XG4gIH1cbn1cblxuUmFkaW8uUmFkaW9CdXR0b24gPSBSYWRpb0J1dHRvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9yYWRpby5qcyIsImltcG9ydCBGb3IsIHsgTG9vcCB9IGZyb20gJy4vZm9yLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyBGb3Ige1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ211bHRpcGxlJ107XG4gIHN0YXRpYyBldmVudHMgPSBbJ2NoYW5nZSddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdzZWxlY3QnLCBTZWxlY3QpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnb3B0aW9uJywgT3B0aW9uKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXRlcmF0b3JUYWdOYW1lID0gJ29wdGlvbic7XG4gICAgdGhpcy5pc011bHRpcGxlID0gZmFsc2U7XG4gIH1cblxuICBjaGFuZ2VkTXVsdGlwbGUodmFsdWUpIHtcbiAgICB0aGlzLnNldE11bHRpcGxlKHZhbHVlKTtcbiAgfVxuXG4gIGNoYW5nZWRDb250ZW50KHZhbHVlKSB7XG4gICAgdGhpcy5zZXRDb250ZW50KHZhbHVlKTtcbiAgfVxuXG4gIGNoYW5nZWRJbih2YWx1ZSkge1xuICAgIHN1cGVyLmNoYW5nZWRJbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuZHJhd1NlbGVjdCgpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuZWwuY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuICAgIH0pO1xuICB9XG4gIFxuICBjb21waWxlZCgpIHtcbiAgICBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ211bHRpcGxlJykgJiYgdGhpcy5zZXRNdWx0aXBsZSh0aGlzLmF0dHJzLm11bHRpcGxlKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdjb250ZW50JykgJiYgdGhpcy5zZXRDb250ZW50KHRoaXMuYXR0cnMuY29udGVudCk7XG4gICAgdGhpcy5kcmF3U2VsZWN0KCk7XG4gIH1cblxuICBzZXRNdWx0aXBsZSh2YWx1ZSkge1xuICAgIHRoaXMuaXNNdWx0aXBsZSA9IHZhbHVlO1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5mb3JtYXRWYWx1ZSh1dGlscy5jb3B5KHRoaXMuZWwuY29udGVudCkpKTtcbiAgfVxuXG4gIHNldENvbnRlbnQodmFsdWUpIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUodmFsdWUpKTtcbiAgfVxuXG4gIGRyYXdTZWxlY3QoKSB7XG4gICAgbGV0IHNlbGVjdGVkID0gW107XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXS5fX2FraWxpO1xuICAgICAgbGV0IHNlbGVjdGlvbiA9IG9wdGlvbi5hdHRycy5zZWxlY3RlZDtcblxuICAgICAgaWYoc2VsZWN0aW9uKSB7XG4gICAgICAgIHNlbGVjdGVkLnB1c2gob3B0aW9uLmVsLnZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgb3B0aW9uLmVsLnNlbGVjdGVkID0gc2VsZWN0aW9uO1xuICAgIH1cblxuICAgIGlmKCFzZWxlY3RlZC5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVkZWZpbmUoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUoc2VsZWN0ZWQpKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVJdGVyYXRvckVsZW1lbnQoKSB7XG4gICAgbGV0IGVsID0gc3VwZXIuY3JlYXRlSXRlcmF0b3JFbGVtZW50KCk7XG5cbiAgICBpZighZWwuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGhpcy5odG1sLnRyaW0oKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsO1xuICB9XG5cbiAgaW5Db250ZW50KHZhbHVlKSB7XG4gICAgaWYoIXRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZWwuY29udGVudCA9PT0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZWwuY29udGVudC5pbmRleE9mKHZhbHVlKSAhPSAtMTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgaWYoIXRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZWwudmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnQgPSBbXTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldO1xuXG4gICAgICBpZihvcHRpb24uc2VsZWN0ZWQpIHtcbiAgICAgICAgY29udGVudC5wdXNoKG9wdGlvbi52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBmb3JtYXRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmKHRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgaWYoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpPyBbdmFsdWVdOiBbXTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZihBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLmxlbmd0aD8gdmFsdWVbMF06ICcnO1xuICAgICAgfVxuICAgICAgZWxzZSBpZih0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZWRlZmluZSgpIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZ2V0Q29udGVudCgpKTtcbiAgfVxuXG4gIGNoYW5nZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYodXRpbHMuY29tcGFyZSh0aGlzLmVsLmNvbnRlbnQsIHZhbHVlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB0aGlzLmVsLnZhbHVlID0gdmFsdWVbdmFsdWUubGVuZ3RoIC0gMV07XG5cbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdmFsdWUuaW5kZXhPZihvcHRpb24udmFsdWUpICE9IC0xO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZWwudmFsdWUgPSB2YWx1ZTtcblxuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXTtcblxuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBvcHRpb24udmFsdWUgPT0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5lbC5jb250ZW50ID0gdmFsdWU7XG4gICAgdGhpcy5hdHRycy5vbkNoYW5nZS5kaXNwYXRjaChFdmVudCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICB9XG59O1xuXG5leHBvcnQgY2xhc3MgT3B0aW9uIGV4dGVuZHMgTG9vcCB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnc2VsZWN0ZWQnXTtcblxuICBfX2dldFBhcnNlZEV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIHJldHVybiB1dGlscy5kZWNvZGVIdG1sRW50aXRpZXMoZXhwcmVzc2lvbik7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGNoYW5nZWRTZWxlY3RlZCh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U2VsZWN0ZWQodmFsdWUpO1xuICB9XG5cbiAgc2V0U2VsZWN0ZWQodmFsdWUpIHtcbiAgICB0aGlzLmVsLnNlbGVjdGVkID0gdmFsdWU7XG4gICAgdGhpcy5mb3IucmVkZWZpbmUoKTtcbiAgfVxufVxuXG5TZWxlY3QuT3B0aW9uID0gT3B0aW9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3NlbGVjdC5qcyIsImltcG9ydCBUZXh0IGZyb20gJy4vdGV4dC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0YXJlYSBleHRlbmRzIFRleHQge1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgndGV4dGFyZWEnLCBUZXh0YXJlYSk7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGV4dGFyZWEuanMiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5cbi8qKlxuICogU2NvcGUgY2xhc3MuXG4gKlxuICogQWxsIHByb3BlcnRpZXMgc3RhcnRpbmcgd2l0aCBfXyB3aWxsIG5vdCBiZSB3YXRjaGluZy5cbiAqIFlvdSBjYW4gdXNlIHRoZW0gZm9yIGludGVybmFsIG1hbmlwdWxhdGlvbnMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3BlIHtcbiAgc3RhdGljIG5lc3RlZFdhdGNoaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVsLCBjb21wb25lbnQpIHtcbiAgICB0aGlzLl9fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fX2VsID0gZWw7XG4gICAgdGhpcy5fX2NvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ3Njb3BlJywgbmFtZSk7XG4gIH1cblxuICBnZXQgX191dGlscygpIHtcbiAgICByZXR1cm4gdXRpbHM7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGEgc2NvcGUgdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzdHJpY3Q9ZmFsc2VdIC0gd2l0aG91dCBvYmplY3QgY29weWluZ1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldChrZXlzLCB2YWx1ZSwgc3RyaWN0ID0gZmFsc2UpIHtcbiAgICBpZighQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG5cbiAgICBBa2lsaS51bmlzb2xhdGVkKCgpID0+IHtcbiAgICAgIHN0cmljdCAmJiAodGhpcy5fX2NvbXBvbmVudC5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgPSB0cnVlKTtcbiAgICAgIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMsIChsYXN0LCB2YWwpID0+IHtcbiAgICAgICAgaWYoIWxhc3QpIHtcbiAgICAgICAgICByZXR1cm4gdmFsIHx8IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICBzdHJpY3QgJiYgKHRoaXMuX19jb21wb25lbnQuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nID0gZmFsc2UpO1xuICAgIH0pO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY29wZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=