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

var _if = __webpack_require__(11);

var _if2 = _interopRequireDefault(_if);

var _for = __webpack_require__(5);

var _for2 = _interopRequireDefault(_for);

var _select = __webpack_require__(15);

var _select2 = _interopRequireDefault(_select);

var _input = __webpack_require__(13);

var _input2 = _interopRequireDefault(_input);

var _radio = __webpack_require__(14);

var _radio2 = _interopRequireDefault(_radio);

var _text = __webpack_require__(4);

var _text2 = _interopRequireDefault(_text);

var _textarea = __webpack_require__(16);

var _textarea2 = _interopRequireDefault(_textarea);

var _content = __webpack_require__(10);

var _content2 = _interopRequireDefault(_content);

var _include = __webpack_require__(12);

var _include2 = _interopRequireDefault(_include);

var _route = __webpack_require__(6);

var _route2 = _interopRequireDefault(_route);

var _a = __webpack_require__(9);

var _a2 = _interopRequireDefault(_a);

var _scope = __webpack_require__(17);

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

var Akili = {}; /**
                 * const Akili = makeItEasy(js + html);
                 *
                 * @author Alexandr Balasyan <mywebstreet@gmail.com>
                 */

Akili.options = {
  nestedWatching: true,
  showEvaluationErrors: true,
  debug: true
};

Akili.__init = false;
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
 * Initialize an application
 *
 * @param {HTMLElement} [root]
 * @returns {Promise}
 */
Akili.init = function (root) {
  this.__root = root || document.querySelector("html");

  return this.compile(this.__root).then(function () {
    if (_router2.default.__init) {
      return new Promise(function (res) {
        var onState = function onState() {
          res();
          window.removeEventListener('state-change', onState);
        };

        window.addEventListener('state-change', onState);
        _router2.default.changeState();
      });
    }
  }).then(function () {
    Akili.__init = true;
  });
};

/**
 * Define all default components
 */
Akili.define = function () {
  _a2.default.define();
  _content2.default.define();
  _component3.default.define();
  _for2.default.define();
  _include2.default.define();
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
Akili.components.If = _if2.default;
Akili.components.Include = _include2.default;
Akili.components.Input = _input2.default;
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
     * Required context variables:
     *  this - scope object
     *  event - window.event
     *
     * @param {object} context
     * @param {string} expression
     */

  }, {
    key: 'parse',
    value: function parse(context, expression) {
      return function (expression) {
        return eval(expression);
      }.call(context, expression);
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

      if (!expression) {
        return;
      }

      !window.event && (window.event = e);

      this.__evaluatingEvent = {
        el: el,
        component: this,
        event: e,
        node: node
      };

      this.__disableProxy = null;
      this.constructor.parse(this.__evaluationComponent.scope, expression[1]);
      this.__evaluatingEvent = null;
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
            component.__evaluateEvent(node, el, e);
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
          node.nodeValue = value;
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
  if (window.location.pathname === '/') {
    return '';
  }

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

  next(this.getStatesByLevel(0), function () {
    if (!transition.routes.length) {
      if (_this3.__redirects) {
        throw new Error('Wrong router default url "' + _this3.defaultUrl + '"');
      }

      if (_this3.defaultUrl) {
        _this3.hashMode && _this3.defaultUrl != _this3.getUrl() && (_this3.__disableChange = true);
        _this3.setUrl(_this3.defaultUrl);
        _this3.__redirects++;

        return _this3.changeState();
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
/* 12 */
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
/* 13 */
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
/* 14 */
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
/* 15 */
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
/* 16 */
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
/* 17 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTQ4MmExNjQzZGQzNzhjYjRkYjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FraWxpLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JvdXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudC1lbWl0dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lmLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luY2x1ZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcmFkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHRhcmVhLmpzIiwid2VicGFjazovLy8uL3NyYy9zY29wZS5qcyJdLCJuYW1lcyI6WyJBa2lsaSIsIm9wdGlvbnMiLCJuZXN0ZWRXYXRjaGluZyIsInNob3dFdmFsdWF0aW9uRXJyb3JzIiwiZGVidWciLCJfX2luaXQiLCJfX2NvbXBvbmVudHMiLCJfX2FsaWFzZXMiLCJfX3Njb3BlcyIsIl9faXNvbGF0aW9uIiwiX19ldmFsdWF0aW9uIiwiaHRtbEJvb2xlYW5BdHRyaWJ1dGVzIiwiY29tcG9uZW50cyIsImRlY29yYXRvcnMiLCJzZXJ2aWNlcyIsImpvaW5CaW5kaW5nS2V5cyIsImtleXMiLCJtYXAiLCJlbCIsInRvU3RyaW5nIiwiam9pbiIsImFkZFNjb3BlIiwic2NvcGUiLCJfX25hbWUiLCJFcnJvciIsImdldFNjb3BlIiwibmFtZSIsInJlbW92ZVNjb3BlIiwiX19jb21wb25lbnQiLCJfX2VsIiwiX19wYXJlbnQiLCJnZXRBa2lsaVBhcmVudHMiLCJ0cmVlIiwiYXJyIiwiY2hlY2siLCJub2RlIiwicGFyZW50Tm9kZSIsIl9fYWtpbGkiLCJwdXNoIiwic2V0VGVtcGxhdGUiLCJ0ZW1wbGF0ZSIsInJlcGxhY2UiLCJpbm5lckhUTUwiLCJjcmVhdGVTY29wZU5hbWUiLCJjcmVhdGVSYW5kb21TdHJpbmciLCJzdHIiLCJpc29sYXRlIiwiZm4iLCJyZXMiLCJwcm9wcyIsImsiLCJoYXNPd25Qcm9wZXJ0eSIsImkiLCJsIiwicHJvcCIsImlzRGVsZXRlZCIsImNvbXBvbmVudCIsIl9fZXZhbHVhdGVCeUtleXMiLCJ1bmRlZmluZWQiLCJzZXRQcm9wZXJ0eUJ5S2V5cyIsImxhc3QiLCJ2YWwiLCJ2YWx1ZSIsImxlbmd0aCIsInVuZXZhbHVhdGVkIiwiZXZhbHVhdGlvbiIsInVuaXNvbGF0ZWQiLCJpbml0aWFsaXplIiwicmVjb21waWxlIiwiX19yZWNvbXBpbGUiLCJpc1Jvb3QiLCJfX3Jvb3QiLCJjb21wb25lbnROYW1lIiwidG9EYXNoQ2FzZSIsImdldEF0dHJpYnV0ZSIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsIl9Db21wb25lbnQiLCJDSEVDS19BTElBU0VTIiwic2VsZWN0b3JzIiwiT2JqZWN0Iiwic2VsZWN0b3JBbGwiLCJtYXRjaGVzIiwic2VsZWN0b3IiLCJDb21wb25lbnQiLCJfX2NhbmNlbGxlZCIsIl9fY3JlYXRlIiwiY29tcGlsZSIsInJvb3QiLCJlbGVtZW50cyIsIm5lc3RlZEluaXRpYWxpemluZyIsImNoaWxkcmVuIiwiY2hpbGQiLCJwIiwiX19jb21waWxlIiwiUHJvbWlzZSIsImFsbCIsInRoZW4iLCJyIiwiX19yZXNvbHZlIiwiY29uc29sZSIsIndhcm4iLCJ1bnJlZ2lzdGVyQ29tcG9uZW50IiwiYWxpYXMiLCJ1bnJlZ2lzdGVyQWxpYXMiLCJpc29sYXRlQXJyYXlQcm90b3R5cGUiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJrZXkiLCJvbGQiLCJfX2lzUHJveHkiLCJhcHBseSIsImlzb2xhdGVXaW5kb3dGdW5jdGlvbnMiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24iLCJzZXRJbnRlcnZhbCIsImNvbnN0cnVjdG9yIiwiaXNvbGF0ZUV2ZW50cyIsIm9sZEFkZEV2ZW50TGlzdGVuZXIiLCJFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9sZFJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib2xkUmVtb3ZlIiwicmVtb3ZlIiwiX19ha2lsaUxpc3RlbmVycyIsImFyZ3VtZW50cyIsImFyZ3MiLCJzbGljZSIsImNhbGwiLCJsaW5rIiwibGlzdGVuZXIiLCJzcGxpY2UiLCJwb3MiLCJjYWxsYmFjayIsImlzb2xhdGVGdW5jdGlvbiIsImNvbnRleHQiLCJvRm4iLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJpbml0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib25TdGF0ZSIsImNoYW5nZVN0YXRlIiwiZGVmaW5lIiwiRXZlbnRFbWl0dGVyIiwiU2NvcGUiLCJ1dGlscyIsIkEiLCJDb250ZW50IiwiRm9yIiwiSWYiLCJJbmNsdWRlIiwiSW5wdXQiLCJSYWRpbyIsIlJvdXRlIiwiU2VsZWN0IiwiVGV4dCIsIlRleHRhcmVhIiwicmVxdWVzdCIsInJvdXRlciIsImV2YWx1YXRpb25SZWdleCIsImV2YWx1YXRpb25SZWdleEdsb2JhbCIsIlJlZ0V4cCIsInNvdXJjZSIsInN5c3RlbUF0dHJpYnV0ZXMiLCJleHByZXNzaW9uIiwiZXZhbCIsIl9faXNTeXN0ZW1LZXkiLCJpbmRleE9mIiwiX19pc01vdW50ZWQiLCJfX2lzQ29tcGlsZWQiLCJfX2JpbmRpbmdzIiwiX19ldmFsdWF0aW5nRXZlbnQiLCJfX3JlY29tcGlsaW5nIiwiX19jb21waWxpbmciLCJfX2Rpc2FibGVQcm94eSIsIl9fY2hpbGRyZW4iLCJfX3BhcmVudHMiLCJfX2F0dHJzIiwiX19hdHRyaWJ1dGVPZiIsIl9fZXZhbHVhdGlvbkNvbXBvbmVudCIsIl9fc2V0RXZlbnRzIiwiX19zZXRQYXJlbnRzIiwiX19zZXRCb29sZWFuQXR0cmlidXRlcyIsIl9fZGVmaW5lQXR0cmlidXRlcyIsIl9faW5pdGlhbGl6ZSIsImNyZWF0ZWQiLCJhdHRycyIsImNvbnRyb2wiLCJfX2NvbnRyb2xBdHRyaWJ1dGVzIiwiX19ldmFsdWF0ZVBhcmVudCIsInJlc29sdmUiLCJuZXdQYXJlbnQiLCJfX2ludGVycG9sYXRlQXR0cmlidXRlcyIsImludGVycG9sYXRlIiwicGFyZW50Iiwibm9kZVR5cGUiLCJfX2luaXRpYWxpemVOb2RlIiwibm9kZVZhbHVlIiwiX19ldmFsdWF0ZSIsImNoaWxkTm9kZXMiLCJvbkNvbXBpbGVkIiwidHJpZ2dlciIsImNvbXBpbGVkIiwidGVtcGxhdGVVcmwiLCJnZXQiLCJfX2NvbnRlbnQiLCJkYXRhIiwib25SZWNvbXBpbGVkIiwicmVjb21waWxlZCIsIm9uUmVzb2x2ZWQiLCJyZXNvbHZlZCIsIl9fc2NvcGUiLCJfc2NvcGUiLCJhc3NpZ24iLCJjb250cm9sQXR0cmlidXRlcyIsImV2ZW50cyIsIl9fZXZlbnRzIiwiX19uZXN0ZWRXYXRjaGluZyIsIl9fbmVzdGVkT2JzZXJ2ZSIsIl9fb2JzZXJ2ZSIsImJvb2xlYW5BdHRyaWJ1dGVzIiwiY29uY2F0Iiwic2V0QXR0ciIsImF0dHJpYnV0ZXMiLCJub2RlTmFtZSIsImhhc0F0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImV2IiwidGVzdCIsInBhcmVudHMiLCJldmFsdWF0ZVBhcmVudCIsInRyYW5zcGFyZW50IiwiX19kZXRhY2giLCJfX2FkZENoaWxkIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3BlcnRpZXMiLCJnZXRQcm9wZXJ0eUJ5S2V5cyIsImNvbXBhcmVQcmV2aW91c1ZhbHVlIiwiY29weSIsIl9fZ2V0Tm9kZVByb3BlcnR5IiwiY291bnRlciIsImF0dHJpYnV0ZVZhbHVlIiwiX19leHByZXNzaW9uIiwibSIsImQiLCJldmFsdWF0ZSIsImV4aXN0aW5nQmluZGluZ3MiLCJwYXJzZVZhbHVlIiwiX19nZXRQYXJzZWRFeHByZXNzaW9uIiwibGlzdCIsInBhcnNlIiwiZXJyIiwibWVzc2FnZSIsInN0YWNrIiwiZXJyb3IiLCJoYXNoIiwia2V5c1N0cmluZyIsIm5vdEJpbmRpbmciLCJwYXJlbnRWYWx1ZSIsImV2YWxDb21wb25lbnQiLCJpc1Njb3BlUHJveHkiLCJiaW5kIiwiX19nZXRCb3VuZE5vZGUiLCJfX2JpbmQiLCJfX3NldE5vZGVQcm9wZXJ0eSIsIkF0dHIiLCJtYWtlQXR0cmlidXRlVmFsdWUiLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsImlzQm9vbGVhbkF0dHJpYnV0ZSIsIl9faGFzQmluZGluZ3MiLCJjbGVhckF0dHJpYnV0ZSIsIl9fYXR0cmlidXRlT24iLCJfX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIiLCJ0b0NhbWVsQ2FzZSIsIm9uQ2hhbmdlZCIsImNoYW5nZWQiLCJjYW1lbEtleSIsInRvVXBwZXJDYXNlIiwiZm5OYW1lIiwiZXZGbk5hbWUiLCJlbGVtZW50IiwiX19lbGVtZW50IiwiYXR0ciIsIndpdGhvdXRQYXJlbnRzIiwibGFzdFByb3BzIiwicHJvcHNMZW5ndGgiLCJlbEV2YWx1YXRlIiwiX19nZXRCaW5kIiwiX19kYXRhIiwiYyIsIl9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2luZyIsIl9fZXZhbHVhdGVOb2RlIiwiX2siLCJfcHJvcCIsInVuYmluZCIsIm9iaiIsIl9rZXlzIiwiX19rZXlzIiwiX2lzRGVsZXRlZCIsImhhc0tleSIsInNoaWZ0IiwiaGFzUHJvcGVydHlCeUtleXMiLCJfX2V2YWx1YXRlTmVzdGVkIiwiX191bmJpbmQiLCJkZWxldGVQcm9wZXJ0eUJ5S2V5cyIsImV4ZWMiLCJldmVudCIsIl9fY2hlY2tFdmFsdWF0aW9uIiwiYXR0cmlidXRlT2YiLCJldmVudE5hbWUiLCJfX2V2ZW50IiwiZW1pdHRlciIsIl9fZXZhbHVhdGVFdmVudCIsIl9faW5pdGlhbGl6ZWQiLCJfX2luaXRpYWxpemVBdHRyaWJ1dGUiLCJjaGFuZ2VBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGVOb2RlIiwiX191bmJpbmRCeU5vZGVzIiwiUHJveHkiLCJ0YXJnZXQiLCJzZXQiLCJhdHRyS2V5IiwiZGVsZXRlUHJvcGVydHkiLCJyZWFsVGFyZ2V0IiwiZ2V0T3duUHJvcGVydHlUYXJnZXQiLCJpc1BsYWluT2JqZWN0IiwiZ2V0RW51bWVyYWJsZVByb3BlcnR5VGFyZ2V0IiwiX19iaW5kTm9kZSIsIl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0Iiwic3RhcnRLZXlzIiwib2JzZXJ2ZSIsIl9fdGFyZ2V0IiwiX19kaXNhYmxlUHJveHlSZWRlZmluaW5nIiwiaXNvbGF0aW9uS2V5IiwicGFyZW50S2V5c1N0cmluZyIsIl9fZGVsZXRlTm9kZVByb3BlcnR5Iiwibm9kZXMiLCJfX2NsZWFyRW1wdHlCaW5kaW5ncyIsImNsZWFyIiwiX19yZW1vdmUiLCJvblJlbW92ZWQiLCJyZW1vdmVkIiwiX19zcGxpY2VDaGlsZCIsIl9fcmVtb3ZlQ2hpbGRyZW4iLCJmaW5kIiwiZmluZEFsbCIsImxldmVscyIsImxldmVsIiwiaXNBcnJheSIsInJpZ2h0IiwibGV2ZWxFbGVtZW50cyIsInJldmVyc2UiLCJfX2dldFBhcmVudCIsIl9fZ2V0Q2hpbGRyZW4iLCJfX2dldE5lYXIiLCJhcHBlbmRDaGlsZCIsIl9fZW1wdHkiLCJfX2Rlc3Ryb3kiLCJjbGFzcyIsImNsYXNzZXMiLCJzdHlsZSIsInN0eWxlcyIsImZpbHRlciIsImhhbmRsZXIiLCJpdGVtIiwibWF0Y2giLCJzb3J0Iiwib3JkZXIiLCJhIiwiYiIsIkRhdGUiLCJnZXRUaW1lIiwibmV4dCIsImFWIiwiYlYiLCJuZXN0ZWQiLCJjb21wYXJlIiwiY3VycmVudCIsInByZXZpb3VzIiwicHJldmlvdXNDb3B5IiwiY3VycmVudENvcHkiLCJlbmNvZGVIdG1sRW50aXRpZXMiLCJodG1sIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiZGVjb2RlSHRtbEVudGl0aWVzIiwib2JqZWN0IiwicmVkdWNlIiwibyIsImhhcyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwicHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsImNsZWFyU2NvcGVQcm94eSIsIk1hdGgiLCJyYW5kb20iLCJzdWJzdHJpbmciLCJSZXF1ZXN0IiwiYmFzZVVybCIsImRlZmF1bHRzIiwic3RhdHVzRXJyb3JzUGF0dGVybiIsInJlamVjdCIsInVybCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib25TdGFydCIsInRyYW5zZm9ybUJlZm9yZSIsIm9wZW4iLCJtZXRob2QiLCJ1c2VyIiwicGFzc3dvcmQiLCJoZWFkZXJzIiwianNvbiIsImJvZHkiLCJyZXNwb25zZVR5cGUiLCJmb3JtIiwiY3JlYXRlRm9ybURhdGEiLCJ0aW1lb3V0Iiwid2l0aENyZWRlbnRpYWxzIiwic2V0UmVxdWVzdEhlYWRlciIsInBhcmFtcyIsInBhcmFtc1RvUXVlcnkiLCJvblByb2dyZXNzIiwib25wcm9ncmVzcyIsIm9ubG9hZCIsInJlc3BvbnNlIiwidHJhbnNmb3JtQWZ0ZXIiLCJzdGF0dXMiLCJvbmVycm9yIiwic2VuZCIsInNlcCIsImVxIiwia3MiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ2Iiwib3B0IiwicXVlcnkiLCJhbXBzIiwic3BsaXQiLCJlcXMiLCJkZWNvZGVVUklDb21wb25lbnQiLCJuYW1lc3BhY2UiLCJmZCIsIkZvcm1EYXRhIiwiYXBwZW5kIiwidG9JU09TdHJpbmciLCJfX2luc3RhbmNlcyIsImFkZEluc3RhbmNlIiwiaW5zdGFuY2UiLCJyZW1vdmVJbnN0YW5jZSIsInZhbHVlS2V5Iiwic2V0VmFsdWUiLCJzZXRGb2N1cyIsImZvY3VzIiwic2V0RWxlbWVudEZvY3VzIiwic2V0RWxlbWVudEJsdXIiLCJibHVyIiwiTG9vcCIsIl9faXRlcmF0b3IiLCJfX2tleSIsIl9fdmFsdWUiLCJfX2luZGV4IiwiX19jb21wYXJpc29uVmFsdWUiLCJpdGVyYXRvcnMiLCJpdGVyYXRvclJlZiIsIml0ZXJhdG9yT3V0ZXJIVE1MIiwiZHJhdyIsImNyZWF0ZUl0ZXJhdG9yIiwiaW4iLCJtYXNrIiwibmV4dFNpYmxpbmciLCJvdXRlckhUTUwiLCJjb250ZW50IiwiZmlyc3RDaGlsZCIsImluZGV4IiwiZm91bmQiLCJfX2hhc2giLCJpdGVyYXRvciIsImNWYWx1ZSIsImNvbXBhcnNpb24iLCJjQ29weSIsInNldEluZGV4Iiwic2V0S2V5IiwiY3JlYXRlSXRlcmF0b3JFbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwid3JpdGFibGUiLCJlVmFsdWUiLCJpbmRleEtleXMiLCJsYXN0RWxlbWVudCIsImxvb3AiLCJpdGVyYXRlIiwiZm9yIiwiaXNGb3IiLCJjYW5jZWwiLCJfX3NldCIsInRyYW5zaXRpb24iLCJzdGF0ZSIsInBhdGgiLCJnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24iLCJfX3RyYW5zaXRpb24iLCJlbXB0eSIsImJ1YmJsZXMiLCJmb3JjZSIsImluRXZhbHVhdGluZyIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsIl9FdmVudCIsInR5cGUiLCJUcmFuc2l0aW9uIiwicm91dGVzIiwic3RhdGVzIiwicm91dGUiLCJoYXNoTW9kZSIsIl9fcmVkaXJlY3RzIiwiX19vcHRpb25zIiwiX19wYXJhbVJlZ2V4IiwiX19yb3V0ZVNlbGVjdG9yIiwiYWRkIiwicGF0dGVybiIsImRlZmF1bHRPcHRpb25zIiwiYWJzdHJhY3QiLCJzZXRTdGF0ZSIsImdldFN0YXRlIiwiY3JlYXRlU3RhdGVVcmwiLCJyZWxvYWQiLCJnZXRVcmwiLCJzZXRVcmwiLCJiYWNrIiwiaGlzdG9yeSIsImdvIiwiZm9yd2FyZCIsImxvY2F0aW9uIiwicHVzaFN0YXRlIiwiZGVmYXVsdFVybCIsIm9sZFB1c2hTdGF0ZSIsIl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIiLCJwb3AiLCJwYXJlbnROYW1lIiwiZnVsbFBhdHRlcm4iLCJzcGxpdFNsYXNoZXMiLCJyZW1vdmVTdGF0ZSIsInNldEhhc2hVcmwiLCJzZXRIaXN0b3J5VXJsIiwiZ2V0SGFzaFVybCIsImdldEhpc3RvcnlVcmwiLCJwYXRobmFtZSIsInNlYXJjaCIsImdldFVybFF1ZXJ5IiwiZ2V0SGFzaFVybFF1ZXJ5IiwiZ2V0SGlzdG9yeVVybFF1ZXJ5IiwicGFyYW1zRnJvbVF1ZXJ5IiwiZiIsImdldFBhdHRlcm5Db250ZW50IiwidXJsUGF0dGVybiIsInJlZ2V4IiwiaXNJbmNsdWRlZCIsImlzQWN0aXZlU3RhdGUiLCJpbmNsdWRlcyIsImluQWN0aXZlU3RhdGUiLCJnZXRSb3V0ZSIsImdldEFycmF5UGF0dGVybkNvbnRlbnQiLCJnZXRTdGF0ZXNCeUxldmVsIiwiX19kaXNhYmxlQ2hhbmdlIiwicHJldlRyYW5zaXRpb24iLCJvbkVuZCIsInNldFBhdGgiLCJsb2FkZWQiLCJoYXNTdGF0ZSIsImlzRGlmZmVyZW50IiwicHJldiIsImlzSGlzdG9yeSIsImlzUmVsb2FkIiwic2V0VHJhbnNpdGlvbiIsImlzVXJsIiwicmVzZXRIcmVmIiwic2V0UGFyYW1zIiwic2V0UXVlcnkiLCJzZXRIYXNoIiwic2V0UmVsb2FkIiwicHJldmVudERlZmF1bHQiLCJzZXRPcHRpb25zIiwiaHJlZiIsImdldENvbXB1dGVkU3R5bGUiLCJkaXNwbGF5IiwicmFuZ2UiLCJjcmVhdGVSYW5nZSIsInNlbGVjdGlvbiIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJFbHNlSWYiLCJFbHNlIiwiYWN0aXZlIiwicmVjcmVhdGUiLCJpc0NvbXBpbGVkIiwic2V0UmVjcmVhdGlvbiIsImlzIiwiY29tcGlsYXRpb24iLCJuZXh0RWxlbWVudFNpYmxpbmciLCJyZXN1bHQiLCJzZXRBY3Rpdml0eSIsImNvbm5lY3Rpb24iLCJnZXRUZW1wbGF0ZSIsImFib3J0Iiwib25Mb2FkIiwiY2F0Y2giLCJvbkVycm9yIiwiaXNDaGVja2JveCIsImlzUmFkaW8iLCJzZXRDaGVja2VkIiwiY2hlY2tlZCIsInByZXZDaGVja2VkIiwib25DaGFuZ2UiLCJkaXNwYXRjaCIsIkV2ZW50IiwiY2hhbmdlUmFkaW8iLCJyYWRpbyIsIlJhZGlvQnV0dG9uIiwiaXRlcmFibGUiLCJzZXROYW1lcyIsImdldFJhZGlvVmFsdWUiLCJwcmV2VmFsdWUiLCJvblJhZGlvIiwiaXNUcnVlIiwiaXNTZWxlY3RlZCIsInNldFJhZGlvVmFsdWUiLCJPcHRpb24iLCJpdGVyYXRvclRhZ05hbWUiLCJpc011bHRpcGxlIiwic2V0TXVsdGlwbGUiLCJzZXRDb250ZW50IiwiZHJhd1NlbGVjdCIsImdldENvbnRlbnQiLCJtdWx0aXBsZSIsImNoYW5nZVZhbHVlIiwiZm9ybWF0VmFsdWUiLCJzZWxlY3RlZCIsIm9wdGlvbiIsInJlZGVmaW5lIiwidHJpbSIsInNldFNlbGVjdGVkIiwic3RyaWN0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxRQUFRLEVBQWQsQyxDQXhCQTs7Ozs7O0FBMEJBQSxNQUFNQyxPQUFOLEdBQWdCO0FBQ2RDLGtCQUFnQixJQURGO0FBRWRDLHdCQUFzQixJQUZSO0FBR2RDLFNBQU87QUFITyxDQUFoQjs7QUFNQUosTUFBTUssTUFBTixHQUFlLEtBQWY7QUFDQUwsTUFBTU0sWUFBTixHQUFxQixFQUFyQjtBQUNBTixNQUFNTyxTQUFOLEdBQWtCLEVBQWxCO0FBQ0FQLE1BQU1RLFFBQU4sR0FBaUIsRUFBakI7QUFDQVIsTUFBTVMsV0FBTixHQUFvQixJQUFwQjtBQUNBVCxNQUFNVSxZQUFOLEdBQXFCLElBQXJCOztBQUVBVixNQUFNVyxxQkFBTixHQUE4QixDQUM1QixVQUQ0QixFQUNoQixpQkFEZ0IsRUFDRyxRQURILENBQTlCOztBQUlBWCxNQUFNWSxVQUFOLEdBQW1CLEVBQW5CO0FBQ0FaLE1BQU1hLFVBQU4sR0FBbUIsRUFBbkI7QUFDQWIsTUFBTWMsUUFBTixHQUFpQixFQUFqQjs7QUFFQTs7Ozs7QUFLQWQsTUFBTWUsZUFBTixHQUF3QixVQUFTQyxJQUFULEVBQWU7QUFDckMsU0FBT0EsS0FBS0MsR0FBTCxDQUFTO0FBQUEsV0FBTUMsR0FBR0MsUUFBSCxFQUFOO0FBQUEsR0FBVCxFQUE4QkMsSUFBOUIsQ0FBbUMsR0FBbkMsQ0FBUDtBQUNELENBRkQ7O0FBSUE7Ozs7O0FBS0FwQixNQUFNcUIsUUFBTixHQUFpQixVQUFTQyxLQUFULEVBQWdCO0FBQy9CLE1BQUcsS0FBS2QsUUFBTCxDQUFjYyxNQUFNQyxNQUFwQixDQUFILEVBQWdDO0FBQzlCLFVBQU0sSUFBSUMsS0FBSixpQkFBd0JGLE1BQU1DLE1BQTlCLHFCQUFOO0FBQ0Q7O0FBRUQsT0FBS2YsUUFBTCxDQUFjYyxNQUFNQyxNQUFwQixJQUE4QkQsS0FBOUI7QUFDRCxDQU5EOztBQVFBOzs7Ozs7QUFNQXRCLE1BQU15QixRQUFOLEdBQWlCLFVBQVNDLElBQVQsRUFBZTtBQUM5QixTQUFPLEtBQUtsQixRQUFMLENBQWNrQixJQUFkLENBQVA7QUFDRCxDQUZEOztBQUlBOzs7OztBQUtBMUIsTUFBTTJCLFdBQU4sR0FBb0IsVUFBU0QsSUFBVCxFQUFlO0FBQ2pDLE1BQUlKLFFBQVEsS0FBS2QsUUFBTCxDQUFja0IsSUFBZCxDQUFaOztBQUVBSixRQUFNTSxXQUFOLEdBQW9CLElBQXBCO0FBQ0FOLFFBQU1PLElBQU4sR0FBYSxJQUFiO0FBQ0FQLFFBQU1RLFFBQU4sR0FBaUIsSUFBakI7QUFDQSxPQUFLdEIsUUFBTCxDQUFja0IsSUFBZCxJQUFzQixJQUF0QjtBQUNBLFNBQU8sS0FBS2xCLFFBQUwsQ0FBY2tCLElBQWQsQ0FBUDtBQUNELENBUkQ7O0FBVUE7Ozs7Ozs7QUFPQTFCLE1BQU0rQixlQUFOLEdBQXdCLFVBQVViLEVBQVYsRUFBMkI7QUFBQSxNQUFiYyxJQUFhLHVFQUFOLElBQU07O0FBQ2pELE1BQUlDLE1BQU0sRUFBVjs7QUFFQSxXQUFTQyxLQUFULENBQWVDLElBQWYsRUFBcUI7QUFDbkIsUUFBRyxDQUFDQSxLQUFLQyxVQUFULEVBQXFCO0FBQ25CO0FBQ0Q7O0FBRUQsUUFBR0QsS0FBS0MsVUFBTCxDQUFnQkMsT0FBbkIsRUFBNEI7QUFDMUJKLFVBQUlLLElBQUosQ0FBU0gsS0FBS0MsVUFBZDs7QUFFQSxVQUFHLENBQUNKLElBQUosRUFBVTtBQUNSO0FBQ0Q7QUFDRjs7QUFFREUsVUFBTUMsS0FBS0MsVUFBWDtBQUNEOztBQUVERixRQUFNaEIsRUFBTjs7QUFFQSxTQUFPYyxPQUFNQyxHQUFOLEdBQVdBLElBQUksQ0FBSixDQUFsQjtBQUNELENBdEJEOztBQXdCQTs7Ozs7Ozs7Ozs7O0FBWUFqQyxNQUFNdUMsV0FBTixHQUFvQixVQUFTckIsRUFBVCxFQUFhc0IsUUFBYixFQUF1QjtBQUN6Q0EsYUFBV0EsU0FBU0MsT0FBVCxDQUFpQix1Q0FBakIsRUFBMER2QixHQUFHd0IsU0FBN0QsQ0FBWDtBQUNBeEIsS0FBR3dCLFNBQUgsR0FBZUYsUUFBZjs7QUFFQSxTQUFPdEIsR0FBR3dCLFNBQVY7QUFDRCxDQUxEOztBQU9BOzs7OztBQUtBMUMsTUFBTTJDLGVBQU4sR0FBd0IsWUFBVztBQUFBOztBQUNqQyxTQUFPLGdCQUFNQyxrQkFBTixDQUF5QixFQUF6QixFQUE2QixVQUFDQyxHQUFELEVBQVM7QUFDM0MsV0FBTyxDQUFDLENBQUMsTUFBS3JDLFFBQUwsQ0FBY3FDLEdBQWQsQ0FBVDtBQUNELEdBRk0sQ0FBUDtBQUdELENBSkQ7O0FBTUE7Ozs7Ozs7Ozs7QUFVQTdDLE1BQU04QyxPQUFOLEdBQWdCLFVBQVNDLEVBQVQsRUFBYTtBQUMzQixNQUFHLEtBQUt0QyxXQUFSLEVBQXFCO0FBQ25CLFdBQU9zQyxJQUFQO0FBQ0Q7O0FBRUQsT0FBS3RDLFdBQUwsR0FBbUIsRUFBbkI7O0FBRUEsTUFBSXVDLE1BQU1ELElBQVY7QUFDQSxNQUFJRSxRQUFRLEVBQVo7O0FBRUEsT0FBSSxJQUFJQyxDQUFSLElBQWEsS0FBS3pDLFdBQWxCLEVBQStCO0FBQzdCLFFBQUcsQ0FBQyxLQUFLQSxXQUFMLENBQWlCMEMsY0FBakIsQ0FBZ0NELENBQWhDLENBQUosRUFBd0M7QUFDdEM7QUFDRDs7QUFFREQsVUFBTVgsSUFBTixDQUFXLEtBQUs3QixXQUFMLENBQWlCeUMsQ0FBakIsQ0FBWDtBQUNEOztBQUVELE9BQUt6QyxXQUFMLEdBQW1CLElBQW5COztBQWxCMkIsNkJBb0JuQjJDLENBcEJtQixFQW9CWkMsQ0FwQlk7QUFxQnpCLFFBQUlDLE9BQU9MLE1BQU1HLENBQU4sQ0FBWDs7QUFFQSxRQUFHRSxLQUFLQyxTQUFSLEVBQW1CO0FBQ2pCRCxXQUFLRSxTQUFMLENBQWVDLGdCQUFmLENBQWdDSCxLQUFLdEMsSUFBckMsRUFBMkMwQyxTQUEzQyxFQUFzRCxJQUF0RDs7QUFFQTtBQUNEOztBQUVELG9CQUFNQyxpQkFBTixDQUF3QkwsS0FBS3RDLElBQTdCLEVBQW1Dc0MsS0FBS0UsU0FBTCxDQUFlbEMsS0FBbEQsRUFBeUQsVUFBQ3NDLElBQUQsRUFBT0MsR0FBUCxFQUFlO0FBQ3RFLFVBQUcsQ0FBQ0QsSUFBSixFQUFVO0FBQ1IsZUFBT0MsT0FBTyxFQUFkO0FBQ0Q7O0FBRUQsYUFBT1AsS0FBS1EsS0FBWjtBQUNELEtBTkQ7QUE3QnlCOztBQW9CM0IsT0FBSSxJQUFJVixJQUFJLENBQVIsRUFBV0MsSUFBSUosTUFBTWMsTUFBekIsRUFBaUNYLElBQUlDLENBQXJDLEVBQXdDRCxHQUF4QyxFQUE2QztBQUFBLHFCQUFyQ0EsQ0FBcUMsRUFBOUJDLENBQThCOztBQUFBLDZCQU16QztBQVVIOztBQUVESixVQUFRLElBQVI7O0FBRUEsU0FBT0QsR0FBUDtBQUNELENBekNEOztBQTJDQTs7Ozs7O0FBTUFoRCxNQUFNZ0UsV0FBTixHQUFvQixVQUFTakIsRUFBVCxFQUFhO0FBQy9CLE1BQUlrQixhQUFhLEtBQUt2RCxZQUF0QjtBQUNBLE1BQUlzQyxZQUFKOztBQUVBLE9BQUt0QyxZQUFMLEdBQW9CLElBQXBCO0FBQ0FzQyxRQUFNRCxJQUFOO0FBQ0EsT0FBS3JDLFlBQUwsR0FBb0J1RCxVQUFwQjs7QUFFQSxTQUFPakIsR0FBUDtBQUNELENBVEQ7O0FBV0E7Ozs7OztBQU1BaEQsTUFBTWtFLFVBQU4sR0FBbUIsVUFBU25CLEVBQVQsRUFBYTtBQUM5QixNQUFJa0IsYUFBYSxLQUFLeEQsV0FBdEI7QUFDQSxNQUFJdUMsWUFBSjs7QUFFQSxPQUFLdkMsV0FBTCxHQUFtQixJQUFuQjtBQUNBdUMsUUFBTUQsSUFBTjtBQUNBLE9BQUt0QyxXQUFMLEdBQW1Cd0QsVUFBbkI7O0FBRUEsU0FBT2pCLEdBQVA7QUFDRCxDQVREOztBQVdBOzs7Ozs7O0FBT0FoRCxNQUFNbUUsVUFBTixHQUFtQixVQUFTakQsRUFBVCxFQUEyQjtBQUFBLE1BQWRqQixPQUFjLHVFQUFKLEVBQUk7O0FBQzVDLE1BQUltRSxZQUFZbkUsUUFBUW1FLFNBQXhCO0FBQ0EsTUFBSVosWUFBWXRDLEdBQUdtQixPQUFuQjs7QUFFQSxNQUFHbUIsU0FBSCxFQUFjO0FBQ1osUUFBR1ksU0FBSCxFQUFjO0FBQ1paLGdCQUFVYSxXQUFWOztBQUVBLGFBQU9iLFNBQVA7QUFDRDs7QUFFRDtBQUNEOztBQUVELE1BQUljLFNBQVNwRCxPQUFPLEtBQUtxRCxNQUF6QjtBQUNBLE1BQUlDLGdCQUFnQixnQkFBTUMsVUFBTixDQUFpQnZELEdBQUd3RCxZQUFILENBQWdCLFdBQWhCLEtBQWdDeEQsR0FBR3lELE9BQUgsQ0FBV0MsV0FBWCxFQUFqRCxDQUFwQjtBQUNBLE1BQUlDLGFBQWEsS0FBS3ZFLFlBQUwsQ0FBa0JrRSxhQUFsQixDQUFqQjs7QUFFQU0saUJBQWUsSUFBRyxDQUFDRCxVQUFKLEVBQWdCO0FBQzdCLFFBQUlFLFlBQVlDLE9BQU9oRSxJQUFQLENBQVksS0FBS1QsU0FBakIsQ0FBaEI7O0FBRUEsUUFBRyxDQUFDd0UsVUFBVWhCLE1BQWQsRUFBc0I7QUFDcEIsWUFBTWUsYUFBTjtBQUNEOztBQUVELFFBQUlHLGNBQWNGLFVBQVUzRCxJQUFWLENBQWUsR0FBZixDQUFsQjs7QUFFQSxRQUFHLENBQUNGLEdBQUdnRSxPQUFILENBQVdELFdBQVgsQ0FBSixFQUE2QjtBQUMzQixZQUFNSCxhQUFOO0FBQ0Q7O0FBRUQsU0FBSSxJQUFJSyxRQUFSLElBQW9CLEtBQUs1RSxTQUF6QixFQUFvQztBQUNsQyxVQUFHLENBQUMsS0FBS0EsU0FBTCxDQUFlNEMsY0FBZixDQUE4QmdDLFFBQTlCLENBQUosRUFBNkM7QUFDM0M7QUFDRDs7QUFFRCxVQUFHakUsR0FBR2dFLE9BQUgsQ0FBV0MsUUFBWCxDQUFILEVBQXlCO0FBQ3ZCTixxQkFBYSxLQUFLdkUsWUFBTCxDQUFrQixLQUFLQyxTQUFMLENBQWU0RSxRQUFmLENBQWxCLENBQWI7QUFDQTtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxNQUFHLENBQUNOLFVBQUQsSUFBZSxDQUFDUCxNQUFuQixFQUEyQjtBQUN6QjtBQUNEOztBQUVELE1BQUcsQ0FBQ08sVUFBSixFQUFnQjtBQUNkQSxpQkFBYSxLQUFLTyxTQUFsQjtBQUNEOztBQUVELE1BQUdQLFdBQVdLLE9BQVgsSUFBc0IsQ0FBQ2hFLEdBQUdnRSxPQUFILENBQVdMLFdBQVdLLE9BQXRCLENBQTFCLEVBQTBEO0FBQ3hEO0FBQ0Q7O0FBRUQxQixjQUFZLElBQUlxQixVQUFKLENBQWUzRCxFQUFmLEVBQW1CLEVBQW5CLENBQVo7O0FBRUEsTUFBR3NDLFVBQVU2QixXQUFiLEVBQTBCO0FBQ3hCO0FBQ0Q7O0FBRUQ3QixZQUFVOEIsUUFBVjs7QUFFQSxTQUFPOUIsU0FBUDtBQUNELENBaEVEOztBQWtFQTs7Ozs7OztBQU9BeEQsTUFBTXVGLE9BQU4sR0FBZ0IsVUFBU0MsSUFBVCxFQUErQztBQUFBOztBQUFBLE1BQWhDdkYsT0FBZ0MsdUVBQXRCLEVBQUVtRSxXQUFXLEtBQWIsRUFBc0I7O0FBQzdELE1BQUlxQixXQUFXLEVBQWY7O0FBRUEsTUFBSUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ3hFLEVBQUQsRUFBUTtBQUMvQixRQUFJc0MsWUFBWSxPQUFLVyxVQUFMLENBQWdCakQsRUFBaEIsRUFBb0JqQixPQUFwQixDQUFoQjtBQUNBLFFBQUkwRixXQUFXekUsR0FBR3lFLFFBQWxCOztBQUVBbkMsaUJBQWFpQyxTQUFTbkQsSUFBVCxDQUFja0IsU0FBZCxDQUFiOztBQUVBLFNBQUksSUFBSUosSUFBSSxDQUFSLEVBQVdDLElBQUlzQyxTQUFTNUIsTUFBNUIsRUFBb0NYLElBQUlDLENBQXhDLEVBQTJDRCxHQUEzQyxFQUFnRDtBQUM5QyxVQUFJd0MsUUFBUUQsU0FBU3ZDLENBQVQsQ0FBWjs7QUFFQXNDLHlCQUFtQkUsS0FBbkI7QUFDRDtBQUNGLEdBWEQ7O0FBYUFGLHFCQUFtQkYsSUFBbkI7O0FBRUEsTUFBSUssSUFBSSxFQUFSOztBQUVBLE9BQUksSUFBSXpDLElBQUksQ0FBUixFQUFXQyxJQUFJb0MsU0FBUzFCLE1BQTVCLEVBQW9DWCxJQUFJQyxDQUF4QyxFQUEyQ0QsR0FBM0MsRUFBZ0Q7QUFDOUMsUUFBSUksWUFBWWlDLFNBQVNyQyxDQUFULENBQWhCOztBQUVBeUMsTUFBRXZELElBQUYsQ0FBT2tCLFVBQVVzQyxTQUFWLEVBQVA7QUFDRDs7QUFFRCxTQUFPQyxRQUFRQyxHQUFSLENBQVlILENBQVosRUFBZUksSUFBZixDQUFvQixZQUFNO0FBQy9CLFFBQUlDLElBQUksRUFBUjs7QUFFQSxTQUFJLElBQUk5QyxLQUFJcUMsU0FBUzFCLE1BQVQsR0FBa0IsQ0FBOUIsRUFBaUNYLE1BQUssQ0FBdEMsRUFBeUNBLElBQXpDLEVBQThDO0FBQzVDLFVBQUlJLGFBQVlpQyxTQUFTckMsRUFBVCxDQUFoQjs7QUFFQThDLFFBQUU1RCxJQUFGLENBQU9rQixXQUFVMkMsU0FBVixFQUFQO0FBQ0Q7O0FBRUQsV0FBT0osUUFBUUMsR0FBUixDQUFZRSxDQUFaLENBQVA7QUFDRCxHQVZNLENBQVA7QUFXRCxDQXJDRDs7QUF1Q0E7Ozs7OztBQU1BbEcsTUFBTXdELFNBQU4sR0FBa0IsVUFBUzlCLElBQVQsRUFBZXFCLEVBQWYsRUFBbUI7QUFDbkNyQixTQUFPQSxLQUFLa0QsV0FBTCxFQUFQOztBQUVBLE1BQUcsQ0FBQzdCLEVBQUosRUFBUTtBQUNOLFdBQU8sS0FBS3pDLFlBQUwsQ0FBa0JvQixJQUFsQixLQUEyQixJQUFsQztBQUNEOztBQUVELE1BQUcsS0FBS3BCLFlBQUwsQ0FBa0JvQixJQUFsQixLQUEyQjFCLE1BQU1DLE9BQU4sQ0FBY0csS0FBNUMsRUFBbUQ7QUFDakRnRyxZQUFRQyxJQUFSLGdCQUEwQjNFLElBQTFCO0FBQ0Q7O0FBRUQsT0FBS3BCLFlBQUwsQ0FBa0JvQixJQUFsQixJQUEwQnFCLEVBQTFCO0FBQ0QsQ0FaRDs7QUFjQTs7Ozs7QUFLQS9DLE1BQU1zRyxtQkFBTixHQUE0QixVQUFTNUUsSUFBVCxFQUFlO0FBQ3pDLFNBQU8sS0FBS3BCLFlBQUwsQ0FBa0JvQixJQUFsQixDQUFQO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7O0FBTUExQixNQUFNdUcsS0FBTixHQUFjLFVBQVNwQixRQUFULEVBQXVDO0FBQUEsTUFBcEJYLGFBQW9CLHVFQUFKLEVBQUk7O0FBQ25EQSxrQkFBZ0JBLGNBQWNJLFdBQWQsRUFBaEI7O0FBRUEsTUFBRyxDQUFDSixhQUFKLEVBQW1CO0FBQ2pCLFdBQU8sS0FBS2pFLFNBQUwsQ0FBZTRFLFFBQWYsS0FBNEIsSUFBbkM7QUFDRDs7QUFFRCxNQUFHLEtBQUs1RSxTQUFMLENBQWU0RSxRQUFmLEtBQTRCbkYsTUFBTUMsT0FBTixDQUFjRyxLQUE3QyxFQUFvRDtBQUNsRGdHLFlBQVFDLElBQVIsMEJBQW9DbEIsUUFBcEM7QUFDRDs7QUFFRCxPQUFLNUUsU0FBTCxDQUFlNEUsUUFBZixJQUEyQlgsYUFBM0I7QUFDRCxDQVpEOztBQWNBOzs7OztBQUtBeEUsTUFBTXdHLGVBQU4sR0FBd0IsVUFBU3JCLFFBQVQsRUFBbUI7QUFDekMsU0FBTyxLQUFLN0UsWUFBTCxDQUFrQjZFLFFBQWxCLENBQVA7QUFDRCxDQUZEOztBQUlBOzs7QUFHQW5GLE1BQU15RyxxQkFBTixHQUE4QixZQUFXO0FBQ3ZDLE1BQUl6RixPQUFPZ0UsT0FBTzBCLG1CQUFQLENBQTJCQyxNQUFNQyxTQUFqQyxDQUFYOztBQUR1QywrQkFHL0J4RCxDQUgrQixFQUd4QkMsQ0FId0I7QUFJckMsUUFBSXdELE1BQU03RixLQUFLb0MsQ0FBTCxDQUFWO0FBQ0EsUUFBSTBELE1BQU1ILE1BQU1DLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQVY7O0FBRUEsUUFBRyxPQUFPQyxHQUFQLElBQWMsVUFBZCxJQUE0QkQsT0FBTyxhQUF0QyxFQUFxRDtBQUNuRDtBQUNEOztBQUVERixVQUFNQyxTQUFOLENBQWdCQyxHQUFoQixJQUF1QixZQUFXO0FBQUE7QUFBQTs7QUFDaEMsYUFBTzdHLE1BQU1nRSxXQUFOLENBQWtCLFlBQU07QUFDN0IsWUFBRyxDQUFDLE9BQUsrQyxTQUFULEVBQW9CO0FBQ2xCLGlCQUFPRCxJQUFJRSxLQUFKLG9CQUFQO0FBQ0Q7O0FBRUQsZUFBT2hILE1BQU04QyxPQUFOLENBQWMsWUFBTTtBQUN6QixpQkFBT2dFLElBQUlFLEtBQUosb0JBQVA7QUFDRCxTQUZNLENBQVA7QUFHRCxPQVJNLENBQVA7QUFTRCxLQVZEO0FBWHFDOztBQUd2QyxPQUFJLElBQUk1RCxJQUFJLENBQVIsRUFBV0MsSUFBSXJDLEtBQUsrQyxNQUF4QixFQUFnQ1gsSUFBSUMsQ0FBcEMsRUFBdUNELEdBQXZDLEVBQTRDO0FBQUEsdUJBQXBDQSxDQUFvQyxFQUE3QkMsQ0FBNkI7O0FBQUEsOEJBS3hDO0FBY0g7QUFDRixDQXZCRDs7QUF5QkE7OztBQUdBckQsTUFBTWlILHNCQUFOLEdBQStCLFlBQVc7QUFDeENDLFNBQU9DLFVBQVAsR0FBb0IsS0FBS0MsdUJBQUwsQ0FBNkJGLE9BQU9DLFVBQXBDLEVBQWdELENBQWhELENBQXBCO0FBQ0FELFNBQU9HLFdBQVAsR0FBcUIsS0FBS0QsdUJBQUwsQ0FBNkJGLE9BQU9HLFdBQXBDLEVBQWlELENBQWpELENBQXJCO0FBQ0FILFNBQU9uQixPQUFQLEtBQW1CbUIsT0FBT25CLE9BQVAsQ0FBZXVCLFdBQWYsR0FBNkIsS0FBS0YsdUJBQUwsQ0FBNkJGLE9BQU9uQixPQUFQLENBQWV1QixXQUE1QyxFQUEwRCxDQUExRCxDQUFoRDtBQUNELENBSkQ7O0FBTUE7OztBQUdBdEgsTUFBTXVILGFBQU4sR0FBc0IsWUFBVztBQUMvQixNQUFJQyxzQkFBc0JDLFFBQVFiLFNBQVIsQ0FBa0JjLGdCQUE1QztBQUNBLE1BQUlDLHlCQUF5QkYsUUFBUWIsU0FBUixDQUFrQmdCLG1CQUEvQztBQUNBLE1BQUlDLFlBQVlKLFFBQVFiLFNBQVIsQ0FBa0JrQixNQUFsQzs7QUFFQUwsVUFBUWIsU0FBUixDQUFrQmtCLE1BQWxCLEdBQTJCLFlBQVc7QUFDcEMsV0FBTyxLQUFLQyxnQkFBWjs7QUFFQSxXQUFPRixVQUFVYixLQUFWLENBQWdCLElBQWhCLEVBQXNCZ0IsU0FBdEIsQ0FBUDtBQUNELEdBSkQ7O0FBTUFQLFVBQVFiLFNBQVIsQ0FBa0JjLGdCQUFsQixHQUFxQyxVQUFTaEcsSUFBVCxFQUFlcUIsRUFBZixFQUFtQjtBQUN0RCxRQUFJa0YsT0FBTyxHQUFHQyxLQUFILENBQVNDLElBQVQsQ0FBY0gsU0FBZCxDQUFYOztBQUVBLFFBQUcsQ0FBQyxLQUFLRCxnQkFBVCxFQUEyQjtBQUN6QixXQUFLQSxnQkFBTCxHQUF3QixFQUF4QjtBQUNEOztBQUVELFFBQUcsQ0FBQyxLQUFLQSxnQkFBTCxDQUFzQnJHLElBQXRCLENBQUosRUFBaUM7QUFDL0IsV0FBS3FHLGdCQUFMLENBQXNCckcsSUFBdEIsSUFBOEIsRUFBOUI7QUFDRDs7QUFFRHVHLFNBQUssQ0FBTCxJQUFVLFlBQVk7QUFBQTtBQUFBOztBQUNwQixhQUFPakksTUFBTWdFLFdBQU4sQ0FBa0IsWUFBTTtBQUM3QixlQUFPaEUsTUFBTThDLE9BQU4sQ0FBYyxZQUFNO0FBQ3pCLGlCQUFPQyxHQUFHaUUsS0FBSCxxQkFBUDtBQUNELFNBRk0sQ0FBUDtBQUdELE9BSk0sQ0FBUDtBQUtELEtBTkQ7O0FBUUEsU0FBS2UsZ0JBQUwsQ0FBc0JyRyxJQUF0QixFQUE0QlksSUFBNUIsQ0FBaUM7QUFDL0I4RixZQUFNckYsRUFEeUI7QUFFL0JBLFVBQUlrRixLQUFLLENBQUw7QUFGMkIsS0FBakM7O0FBS0EsV0FBT1Qsb0JBQW9CUixLQUFwQixDQUEwQixJQUExQixFQUFnQ2lCLElBQWhDLENBQVA7QUFDRCxHQXpCRDs7QUEyQkFSLFVBQVFiLFNBQVIsQ0FBa0JnQixtQkFBbEIsR0FBd0MsVUFBU2xHLElBQVQsRUFBZXFCLEVBQWYsRUFBbUI7QUFDekQsUUFBRyxDQUFDLEtBQUtnRixnQkFBVCxFQUEyQjtBQUN6QixXQUFLQSxnQkFBTCxHQUF3QixFQUF4QjtBQUNEOztBQUVELFFBQUcsQ0FBQyxLQUFLQSxnQkFBTCxDQUFzQnJHLElBQXRCLENBQUosRUFBaUM7QUFDL0IsV0FBS3FHLGdCQUFMLENBQXNCckcsSUFBdEIsSUFBOEIsRUFBOUI7QUFDRDs7QUFFRCxTQUFJLElBQUkwQixJQUFJLENBQVIsRUFBV0MsSUFBSSxLQUFLMEUsZ0JBQUwsQ0FBc0JyRyxJQUF0QixFQUE0QnFDLE1BQS9DLEVBQXVEWCxJQUFJQyxDQUEzRCxFQUE4REQsR0FBOUQsRUFBbUU7QUFDakUsVUFBSWlGLFdBQVcsS0FBS04sZ0JBQUwsQ0FBc0JyRyxJQUF0QixFQUE0QjBCLENBQTVCLENBQWY7O0FBRUEsVUFBR2lGLFNBQVNELElBQVQsS0FBa0JyRixFQUFyQixFQUF5QjtBQUN2QixhQUFLZ0YsZ0JBQUwsQ0FBc0JyRyxJQUF0QixFQUE0QjRHLE1BQTVCLENBQW1DbEYsQ0FBbkMsRUFBc0MsQ0FBdEM7QUFDQUE7QUFDQUM7O0FBRUE7QUFDRDtBQUNGOztBQUVELFFBQUcsQ0FBQyxLQUFLMEUsZ0JBQUwsQ0FBc0JyRyxJQUF0QixFQUE0QnFDLE1BQWhDLEVBQXdDO0FBQ3RDLGFBQU8sS0FBS2dFLGdCQUFMLENBQXNCckcsSUFBdEIsQ0FBUDtBQUNEOztBQUVELFdBQU9pRyx1QkFBdUJYLEtBQXZCLENBQTZCLElBQTdCLEVBQW1DZ0IsU0FBbkMsQ0FBUDtBQUNELEdBMUJEO0FBMkJELENBakVEOztBQW1FQTs7Ozs7OztBQU9BaEksTUFBTW9ILHVCQUFOLEdBQWdDLFVBQVNyRSxFQUFULEVBQTJCO0FBQUEsTUFBZHdGLEdBQWMsdUVBQVIsTUFBUTs7QUFDekQsU0FBTyxZQUFXO0FBQ2hCLFFBQUlOLE9BQU8sR0FBR0MsS0FBSCxDQUFTQyxJQUFULENBQWNILFNBQWQsQ0FBWDtBQUNBLFFBQUlRLFdBQVdELE9BQU8sTUFBUCxHQUFlTixLQUFLQSxLQUFLbEUsTUFBTCxHQUFjLENBQW5CLENBQWYsR0FBc0NrRSxLQUFLTSxHQUFMLENBQXJEOztBQUVBLFFBQUcsT0FBT0MsUUFBUCxJQUFtQixVQUF0QixFQUFrQztBQUNoQyxhQUFPekYsR0FBR2lFLEtBQUgsQ0FBUyxJQUFULEVBQWVnQixTQUFmLENBQVA7QUFDRDs7QUFFREMsU0FBSyxDQUFMLElBQVUsWUFBTTtBQUNkLGFBQU9qSSxNQUFNZ0UsV0FBTixDQUFrQixZQUFNO0FBQzdCLGVBQU9oRSxNQUFNOEMsT0FBTixDQUFjLFlBQU07QUFDekIsaUJBQU8wRixVQUFQO0FBQ0QsU0FGTSxDQUFQO0FBR0QsT0FKTSxDQUFQO0FBS0QsS0FORDs7QUFRQSxXQUFPekYsR0FBR2lFLEtBQUgsQ0FBUyxJQUFULEVBQWVpQixJQUFmLENBQVA7QUFDRCxHQWpCRDtBQWtCRCxDQW5CRDs7QUFxQkE7Ozs7Ozs7QUFPQWpJLE1BQU15SSxlQUFOLEdBQXdCLFVBQVMxRixFQUFULEVBQTZCO0FBQUEsTUFBaEIyRixPQUFnQix1RUFBTixJQUFNOztBQUNuRCxNQUFHM0YsR0FBR1YsT0FBTixFQUFlO0FBQ2IsV0FBT1UsRUFBUDtBQUNEOztBQUVELE1BQUk0RixNQUFNLFNBQU5BLEdBQU0sR0FBVztBQUFBOztBQUNuQkQsY0FBVUEsV0FBVyxJQUFyQjs7QUFFQSxXQUFPMUksTUFBTWdFLFdBQU4sQ0FBa0IsWUFBTTtBQUM3QixhQUFPaEUsTUFBTThDLE9BQU4sQ0FBYyxZQUFNO0FBQ3pCLGVBQU9DLEdBQUdpRSxLQUFILENBQVMwQixPQUFULGNBQVA7QUFDRCxPQUZNLENBQVA7QUFHRCxLQUpNLENBQVA7QUFLRCxHQVJEOztBQVVBMUQsU0FBTzRELGNBQVAsQ0FBc0JELEdBQXRCLEVBQTJCLFNBQTNCLEVBQXNDO0FBQ3BDRSxrQkFBYyxJQURzQjtBQUVwQ0MsZ0JBQVksS0FGd0I7QUFHcENoRixXQUFPO0FBSDZCLEdBQXRDOztBQU1BLFNBQU82RSxHQUFQO0FBQ0QsQ0F0QkQ7O0FBd0JBOzs7Ozs7QUFNQTNJLE1BQU0rSSxJQUFOLEdBQWEsVUFBU3ZELElBQVQsRUFBZTtBQUMxQixPQUFLakIsTUFBTCxHQUFjaUIsUUFBUXdELFNBQVNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBdEI7O0FBRUEsU0FBTyxLQUFLMUQsT0FBTCxDQUFhLEtBQUtoQixNQUFsQixFQUEwQjBCLElBQTFCLENBQStCLFlBQU07QUFDMUMsUUFBRyxpQkFBTzVGLE1BQVYsRUFBa0I7QUFDaEIsYUFBTyxJQUFJMEYsT0FBSixDQUFZLFVBQUMvQyxHQUFELEVBQVM7QUFDMUIsWUFBSWtHLFVBQVUsU0FBVkEsT0FBVSxHQUFNO0FBQ2xCbEc7QUFDQWtFLGlCQUFPVSxtQkFBUCxDQUEyQixjQUEzQixFQUEyQ3NCLE9BQTNDO0FBQ0QsU0FIRDs7QUFLQWhDLGVBQU9RLGdCQUFQLENBQXdCLGNBQXhCLEVBQXdDd0IsT0FBeEM7QUFDQSx5QkFBT0MsV0FBUDtBQUNELE9BUk0sQ0FBUDtBQVNEO0FBQ0YsR0FaTSxFQVlKbEQsSUFaSSxDQVlDLFlBQU07QUFDWmpHLFVBQU1LLE1BQU4sR0FBZSxJQUFmO0FBQ0QsR0FkTSxDQUFQO0FBZUQsQ0FsQkQ7O0FBb0JBOzs7QUFHQUwsTUFBTW9KLE1BQU4sR0FBZSxZQUFXO0FBQ3hCLGNBQUVBLE1BQUY7QUFDQSxvQkFBUUEsTUFBUjtBQUNBLHNCQUFVQSxNQUFWO0FBQ0EsZ0JBQUlBLE1BQUo7QUFDQSxvQkFBUUEsTUFBUjtBQUNBLGtCQUFNQSxNQUFOO0FBQ0EsZUFBR0EsTUFBSDtBQUNBLGtCQUFNQSxNQUFOO0FBQ0Esa0JBQU1BLE1BQU47QUFDQSxtQkFBT0EsTUFBUDtBQUNBLHFCQUFTQSxNQUFUO0FBQ0QsQ0FaRDs7QUFjQXBKLE1BQU1vRixTQUFOO0FBQ0FwRixNQUFNcUosWUFBTjtBQUNBckosTUFBTXNKLEtBQU47QUFDQXRKLE1BQU11SixLQUFOO0FBQ0F2SixNQUFNWSxVQUFOLENBQWlCNEksQ0FBakI7QUFDQXhKLE1BQU1ZLFVBQU4sQ0FBaUI2SSxPQUFqQjtBQUNBekosTUFBTVksVUFBTixDQUFpQjhJLEdBQWpCO0FBQ0ExSixNQUFNWSxVQUFOLENBQWlCK0ksRUFBakI7QUFDQTNKLE1BQU1ZLFVBQU4sQ0FBaUJnSixPQUFqQjtBQUNBNUosTUFBTVksVUFBTixDQUFpQmlKLEtBQWpCO0FBQ0E3SixNQUFNWSxVQUFOLENBQWlCa0osS0FBakI7QUFDQTlKLE1BQU1ZLFVBQU4sQ0FBaUJtSixLQUFqQjtBQUNBL0osTUFBTVksVUFBTixDQUFpQm9KLE1BQWpCO0FBQ0FoSyxNQUFNWSxVQUFOLENBQWlCcUosSUFBakI7QUFDQWpLLE1BQU1ZLFVBQU4sQ0FBaUJzSixRQUFqQjtBQUNBbEssTUFBTWMsUUFBTixDQUFlcUosT0FBZjtBQUNBbkssTUFBTWMsUUFBTixDQUFlc0osTUFBZjs7QUFFQWxELE9BQU9sSCxLQUFQLEdBQWVBLEtBQWY7O0FBRU8sSUFBTVksa0NBQWFaLE1BQU1ZLFVBQXpCO0FBQ0EsSUFBTUUsOEJBQVdkLE1BQU1jLFFBQXZCO2tCQUNRZCxLOzs7QUFFZkEsTUFBTW9KLE1BQU47QUFDQXBKLE1BQU11SCxhQUFOO0FBQ0F2SCxNQUFNeUcscUJBQU47QUFDQXpHLE1BQU1pSCxzQkFBTixHOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9vQkE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTW9ELGtCQUFrQixtQkFBeEI7QUFDQSxJQUFNQyx3QkFBd0IsSUFBSUMsTUFBSixDQUFXRixnQkFBZ0JHLE1BQTNCLEVBQW1DLEdBQW5DLENBQTlCO0FBQ0EsSUFBTUMsbUJBQW1CLENBQUMsV0FBRCxFQUFjLE9BQWQsQ0FBekI7O0lBRXFCckYsUzs7Ozs7QUFXbkI7Ozs2QkFHZ0I7QUFDZCxzQkFBTTVCLFNBQU4sQ0FBZ0IsV0FBaEIsRUFBNkI0QixTQUE3QjtBQUNEOztBQUVEOzs7Ozs7Ozs7Ozs7OzBCQVVhc0QsTyxFQUFTZ0MsVSxFQUFZO0FBQ2hDLGFBQVEsVUFBVUEsVUFBVixFQUFzQjtBQUM1QixlQUFPQyxLQUFLRCxVQUFMLENBQVA7QUFDRCxPQUZNLENBRUp2QyxJQUZJLENBRUNPLE9BRkQsRUFFVWdDLFVBRlYsQ0FBUDtBQUdEOzs7QUFFRCxxQkFBWXhKLEVBQVosRUFBNEI7QUFBQSxRQUFaSSxLQUFZLHVFQUFKLEVBQUk7O0FBQUE7O0FBQUEsU0FxK0I1QnNKLGFBcitCNEIsR0FxK0JaLFVBQVMvRCxHQUFULEVBQWM7QUFDNUIsVUFBR0EsT0FBTyxJQUFQLElBQWdCQSxJQUFJLENBQUosS0FBVSxHQUFWLElBQWlCQSxJQUFJLENBQUosS0FBVSxHQUE5QyxFQUFvRDtBQUNsRCxlQUFPLElBQVA7QUFDRCxPQUZELE1BR0ssSUFBRyxDQUFDLGFBQUQsRUFBZ0JnRSxPQUFoQixDQUF3QmhFLEdBQXhCLEtBQWdDLENBQUMsQ0FBcEMsRUFBdUM7QUFDMUMsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsYUFBTyxLQUFQO0FBQ0QsS0E5K0IyQjs7QUFDMUIsU0FBS2lFLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CLEtBQXBCO0FBQ0EsU0FBSzFGLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxTQUFLMkYsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFNBQUtDLGlCQUFMLEdBQXlCLElBQXpCO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQixJQUFyQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCLElBQXRCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFNBQUt2SixRQUFMLEdBQWdCLElBQWhCO0FBQ0EsU0FBS3dKLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxTQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNBLFNBQUtDLGFBQUwsR0FBcUIsSUFBckI7QUFDQSxTQUFLQyxxQkFBTCxHQUE2QixJQUE3QjtBQUNBLFNBQUtuSyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLSixFQUFMLEdBQVVBLEVBQVY7QUFDRDs7QUFFRDs7Ozs7Ozs7O2tDQUtjO0FBQ1osV0FBSzRKLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxXQUFLQyxZQUFMLEdBQW9CLEtBQXBCO0FBQ0EsV0FBS1UscUJBQUwsQ0FBMkJMLGNBQTNCLEdBQTRDLElBQTVDO0FBQ0EsV0FBS0QsV0FBTCxHQUFtQixFQUFuQjtBQUNBLFdBQUtELGFBQUwsR0FBcUIsRUFBckI7QUFDQSxXQUFLUSxXQUFMO0FBQ0EsV0FBS0MsWUFBTDtBQUNBLFdBQUtDLHNCQUFMO0FBQ0EsV0FBS0Msa0JBQUw7QUFFRDs7QUFFRDs7Ozs7Ozs7K0JBS1c7QUFBQTs7QUFDVCxXQUFLM0ssRUFBTCxDQUFRbUIsT0FBUixHQUFrQixJQUFsQjtBQUNBLFdBQUt5SixZQUFMO0FBQ0EsV0FBS0osV0FBTDtBQUNBLFdBQUtDLFlBQUw7QUFDQSxXQUFLQyxzQkFBTDtBQUNBLFdBQUtDLGtCQUFMOztBQUVBLHNCQUFNL0ksT0FBTixDQUFjLFlBQU07QUFDbEIsY0FBS2lKLE9BQUwsQ0FBYSxNQUFLQyxLQUFsQjtBQUNELE9BRkQ7QUFHRDs7QUFFRDs7Ozs7Ozs7O2dDQU1ZO0FBQUE7O0FBQ1YsVUFBSUMsVUFBVSxLQUFLQyxtQkFBTCxJQUE0QixDQUFDLEtBQUtDLGdCQUFoRDtBQUNBLFVBQUl0RyxJQUFJRSxRQUFRcUcsT0FBUixFQUFSOztBQUVBLFdBQUtaLGFBQUwsR0FBcUJTLFVBQVMsSUFBVCxHQUFlLEtBQUtFLGdCQUFMLENBQXNCOUosT0FBMUQ7O0FBRUEsVUFBRyxDQUFDLEtBQUs2SSxhQUFOLElBQXVCLEtBQUtDLFdBQUwsQ0FBaUJrQixTQUF4QyxJQUFxRCxLQUFLSCxtQkFBN0QsRUFBa0Y7QUFDaEYsYUFBS0ksdUJBQUwsQ0FBNkIsS0FBS3BMLEVBQWxDLEVBQXNDLEtBQUtzSyxhQUEzQztBQUNEOztBQUVELFVBQUllLGNBQWMsU0FBZEEsV0FBYyxDQUFDNUcsUUFBRCxFQUFXNkcsTUFBWCxFQUFzQjtBQUN0QyxhQUFJLElBQUlwSixJQUFJLENBQVIsRUFBV0MsSUFBSXNDLFNBQVM1QixNQUE1QixFQUFvQ1gsSUFBSUMsQ0FBeEMsRUFBMkNELEdBQTNDLEVBQWdEO0FBQzlDLGNBQUl3QyxRQUFRRCxTQUFTdkMsQ0FBVCxDQUFaOztBQUVBLGNBQUd3QyxNQUFNNkcsUUFBTixJQUFrQixDQUFyQixFQUF3QjtBQUN0QixtQkFBS0MsZ0JBQUwsQ0FBc0I5RyxLQUF0QixFQUE2QjRHLE1BQTdCOztBQUVBNUcsa0JBQU0rRyxTQUFOLEdBQWtCLE9BQUtDLFVBQUwsQ0FBZ0JoSCxLQUFoQixDQUFsQjtBQUNELFdBSkQsTUFLSyxJQUFHQSxNQUFNNkcsUUFBTixJQUFrQixDQUFsQixJQUF1QixDQUFDN0csTUFBTXZELE9BQWpDLEVBQTBDO0FBQzdDLG1CQUFLaUssdUJBQUwsQ0FBNkIxRyxLQUE3QjtBQUNBMkcsd0JBQVkzRyxNQUFNaUgsVUFBbEIsRUFBOEJqSCxLQUE5QjtBQUNEO0FBQ0Y7QUFDRixPQWREOztBQWdCQTJHLGtCQUFZLEtBQUtyTCxFQUFMLENBQVEyTCxVQUFwQixFQUFnQyxLQUFLM0wsRUFBckM7QUFDQSxXQUFLNEosV0FBTCxHQUFtQixJQUFuQjs7QUFFQSxVQUFJOUgsWUFBSjs7QUFFQSxVQUFHLENBQUMsS0FBS2tJLGFBQVQsRUFBd0I7QUFDdEJsSSxjQUFNLGdCQUFNRixPQUFOLENBQWMsWUFBTTtBQUN4QixpQkFBS2tKLEtBQUwsQ0FBV2MsVUFBWCxJQUF5QixPQUFLZCxLQUFMLENBQVdjLFVBQVgsQ0FBc0JDLE9BQXRCLEVBQXpCOztBQUVBLGlCQUFPLE9BQUtDLFFBQUwsRUFBUDtBQUNELFNBSkssQ0FBTjs7QUFNQSxZQUFHLEtBQUsxRixXQUFMLENBQWlCMkYsV0FBcEIsRUFBaUM7QUFDL0JwSCxjQUFJLGtCQUFRcUgsR0FBUixDQUFZLEtBQUs1RixXQUFMLENBQWlCMkYsV0FBN0IsRUFBMENoSCxJQUExQyxDQUErQyxVQUFDakQsR0FBRCxFQUFTO0FBQzFELG1CQUFLOUIsRUFBTCxDQUFRd0IsU0FBUixHQUFvQixPQUFLeUssU0FBekI7QUFDQSw0QkFBTTVLLFdBQU4sQ0FBa0IsT0FBS3JCLEVBQXZCLEVBQTJCOEIsSUFBSW9LLElBQS9CO0FBQ0EsbUJBQU8sT0FBS0QsU0FBWjs7QUFFQSxtQkFBTyxnQkFBTTVILE9BQU4sQ0FBYyxPQUFLckUsRUFBbkIsRUFBdUIsRUFBRWtELFdBQVcsSUFBYixFQUF2QixDQUFQO0FBQ0QsV0FORyxDQUFKO0FBT0Q7QUFDRixPQWhCRCxNQWlCSztBQUNILHdCQUFNdEIsT0FBTixDQUFjLFlBQU07QUFDbEIsaUJBQUtrSixLQUFMLENBQVdxQixZQUFYLElBQTJCLE9BQUtyQixLQUFMLENBQVdxQixZQUFYLENBQXdCTixPQUF4QixFQUEzQjtBQUNBLGlCQUFLTyxVQUFMO0FBQ0QsU0FIRDtBQUlEOztBQUVELFdBQUt2QyxZQUFMLEdBQW9CLElBQXBCO0FBQ0EsV0FBS0csYUFBTCxHQUFxQixJQUFyQjtBQUNBLFdBQUtDLFdBQUwsR0FBbUIsSUFBbkI7O0FBRUEsYUFBT3RGLEVBQUVJLElBQUYsQ0FBTyxZQUFNO0FBQ2xCLGVBQU9qRCxHQUFQO0FBQ0QsT0FGTSxDQUFQO0FBR0Q7O0FBRUQ7Ozs7Ozs7OztnQ0FNWTtBQUNWLFVBQUcsS0FBS2tJLGFBQVIsRUFBdUI7QUFDckIsZUFBT25GLFFBQVFxRyxPQUFSLEVBQVA7QUFDRDs7QUFFRCxXQUFLSixLQUFMLENBQVd1QixVQUFYLElBQXlCLEtBQUt2QixLQUFMLENBQVd1QixVQUFYLENBQXNCUixPQUF0QixFQUF6QjtBQUNBLGFBQU9oSCxRQUFRcUcsT0FBUixDQUFnQixLQUFLb0IsUUFBTCxFQUFoQixDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7O21DQUtlO0FBQ2IsVUFBSWhCLFNBQVMsZ0JBQU16SyxlQUFOLENBQXNCLEtBQUtiLEVBQTNCLEVBQStCLEtBQS9CLENBQWI7QUFDQSxVQUFJb0ksUUFBUSxLQUFLaEMsV0FBTCxDQUFpQmhHLEtBQWpCLElBQTBCLGdCQUFNZ0ksS0FBNUM7QUFDQSxVQUFJaEksY0FBSjtBQUNBLFVBQUlnRCxTQUFTLGdCQUFNQyxNQUFOLEtBQWlCLEtBQUtyRCxFQUFuQzs7QUFFQSxVQUFHc0wsTUFBSCxFQUFXO0FBQ1RsTCxnQkFBUSxJQUFJZ0ksS0FBSixDQUFVLEtBQUtwSSxFQUFMLENBQVF3RCxZQUFSLENBQXFCLE9BQXJCLEtBQWlDLGdCQUFNL0IsZUFBTixFQUEzQyxFQUFvRSxLQUFLekIsRUFBekUsRUFBNkUsSUFBN0UsQ0FBUjtBQUNELE9BRkQsTUFHSztBQUNISSxnQkFBUSxJQUFJZ0ksS0FBSixDQUFVaEYsU0FBUSxNQUFSLEdBQWdCLGdCQUFNM0IsZUFBTixFQUExQixFQUFtRCxLQUFLekIsRUFBeEQsRUFBNEQsSUFBNUQsQ0FBUjtBQUNBb0QsbUJBQVcsZ0JBQU1rQixJQUFOLEdBQWEsSUFBeEI7QUFDRDs7QUFFRCxVQUFJaUksVUFBVW5NLEtBQWQ7QUFDQSxVQUFJb00sU0FBUzFJLE9BQU8ySSxNQUFQLENBQWNyTSxLQUFkLEVBQXFCLEtBQUtBLEtBQTFCLENBQWI7QUFDQSxVQUFJcEIsaUJBQWlCLGdCQUFNRCxPQUFOLENBQWNDLGNBQW5DO0FBQ0EsVUFBSTBOLG9CQUFvQixLQUFLdEcsV0FBTCxDQUFpQnNHLGlCQUF6QztBQUNBLFVBQUlDLFNBQVMsS0FBS3ZHLFdBQUwsQ0FBaUJ1RyxNQUE5Qjs7QUFFQSxVQUFHLEtBQUt2RyxXQUFMLENBQWlCOUUsUUFBcEIsRUFBOEI7QUFDNUIsd0JBQU1ELFdBQU4sQ0FBa0IsS0FBS3JCLEVBQXZCLEVBQTJCLEtBQUtvRyxXQUFMLENBQWlCOUUsUUFBNUM7QUFDRDs7QUFFRCxVQUFHLEtBQUs4RSxXQUFMLENBQWlCMkYsV0FBcEIsRUFBaUM7QUFDL0IsYUFBS0UsU0FBTCxHQUFpQixLQUFLak0sRUFBTCxDQUFRd0IsU0FBekI7QUFDQSxhQUFLeEIsRUFBTCxDQUFRd0IsU0FBUixHQUFvQixFQUFwQjtBQUNEOztBQUVELFVBQUcsS0FBSzRFLFdBQUwsQ0FBaUJwSCxjQUFqQixLQUFvQ3dELFNBQXZDLEVBQWtEO0FBQ2hEeEQseUJBQWlCLEtBQUtvSCxXQUFMLENBQWlCcEgsY0FBbEM7QUFDRCxPQUZELE1BR0ssSUFBR29KLE1BQU1wSixjQUFOLEtBQXlCd0QsU0FBNUIsRUFBdUM7QUFDMUN4RCx5QkFBaUJvSixNQUFNcEosY0FBdkI7QUFDRDs7QUFFRCxXQUFLdU4sT0FBTCxHQUFlQSxPQUFmO0FBQ0EsV0FBS0ssUUFBTCxHQUFnQkQsTUFBaEI7QUFDQSxXQUFLRSxnQkFBTCxHQUF3QjdOLGNBQXhCO0FBQ0EsV0FBS2dNLG1CQUFMLEdBQTJCMEIsaUJBQTNCOztBQUVBLHNCQUFNdk0sUUFBTixDQUFlQyxLQUFmOztBQUVBLFVBQUdwQixjQUFILEVBQW1CO0FBQ2pCb0IsZ0JBQVEsS0FBSzBNLGVBQUwsQ0FBcUJOLE1BQXJCLEVBQTZCLEVBQTdCLENBQVI7QUFDRCxPQUZELE1BR0s7QUFDSHBNLGdCQUFRLEtBQUsyTSxTQUFMLENBQWVQLE1BQWYsRUFBdUIsRUFBdkIsQ0FBUjtBQUNEOztBQUVELFdBQUtwTSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7QUFFRDs7Ozs7Ozs7NkNBS3lCO0FBQUE7O0FBQ3ZCLFdBQUs0TSxpQkFBTCxHQUF5QixHQUFHQyxNQUFILENBQVUsZ0JBQU14TixxQkFBaEIsRUFBdUMsS0FBSzJHLFdBQUwsQ0FBaUI0RyxpQkFBeEQsQ0FBekI7O0FBRUEsVUFBSUUsVUFBVSxTQUFWQSxPQUFVLENBQUNsTixFQUFELEVBQVE7QUFDcEIsYUFBSyxJQUFJa0MsSUFBSSxDQUFSLEVBQVc0SSxRQUFROUssR0FBR21OLFVBQXRCLEVBQWtDaEwsSUFBSTJJLE1BQU1qSSxNQUFqRCxFQUF5RFgsSUFBSUMsQ0FBN0QsRUFBZ0VELEdBQWhFLEVBQXFFO0FBQ25FLGNBQUlqQixPQUFPNkosTUFBTTVJLENBQU4sQ0FBWDs7QUFFQSxjQUFHLE9BQUs4SyxpQkFBTCxDQUF1QnJELE9BQXZCLENBQStCMUksS0FBS21NLFFBQXBDLEtBQWlELENBQUMsQ0FBckQsRUFBd0Q7QUFDdEQsZ0JBQUdwTixHQUFHcU4sWUFBSCxjQUEyQnBNLEtBQUttTSxRQUFoQyxDQUFILEVBQWdEO0FBQzlDO0FBQ0Q7O0FBRURwTixlQUFHc04sWUFBSCxjQUEyQnJNLEtBQUttTSxRQUFoQyxFQUE0Q3BOLEdBQUd3RCxZQUFILENBQWdCdkMsS0FBS21NLFFBQXJCLEtBQWtDbk0sS0FBS21NLFFBQW5GO0FBQ0FwTixlQUFHdU4sZUFBSCxDQUFtQnRNLEtBQUttTSxRQUF4QjtBQUNEO0FBQ0Y7O0FBRUQsYUFBSSxJQUFJbEwsS0FBSSxDQUFSLEVBQVdDLEtBQUluQyxHQUFHeUUsUUFBSCxDQUFZNUIsTUFBL0IsRUFBdUNYLEtBQUlDLEVBQTNDLEVBQThDRCxJQUE5QyxFQUFtRDtBQUNqRCxjQUFJd0MsUUFBUTFFLEdBQUd5RSxRQUFILENBQVl2QyxFQUFaLENBQVo7O0FBRUEsY0FBRyxDQUFDd0MsTUFBTXZELE9BQVYsRUFBbUI7QUFDakIrTCxvQkFBUXhJLEtBQVI7QUFDRDtBQUNGO0FBQ0YsT0FyQkQ7O0FBdUJBd0ksY0FBUSxLQUFLbE4sRUFBYjtBQUNEOztBQUVEOzs7Ozs7OztrQ0FLYztBQUNaLFdBQUksSUFBSWtDLElBQUksQ0FBUixFQUFXQyxJQUFJLEtBQUt5SyxRQUFMLENBQWMvSixNQUFqQyxFQUF5Q1gsSUFBSUMsQ0FBN0MsRUFBZ0RELEdBQWhELEVBQXFEO0FBQ25ELFlBQUlzTCxLQUFLLEtBQUtaLFFBQUwsQ0FBYzFLLENBQWQsQ0FBVDs7QUFFQSxTQUFDLFFBQVF1TCxJQUFSLENBQWFELEVBQWIsQ0FBRCxLQUFzQkEsS0FBSyxRQUFRQSxFQUFuQzs7QUFFQSxZQUFHLENBQUMsS0FBS3hOLEVBQUwsQ0FBUXFOLFlBQVIsQ0FBcUJHLEVBQXJCLENBQUosRUFBOEI7QUFDNUIsZUFBS3hOLEVBQUwsQ0FBUXNOLFlBQVIsQ0FBcUJFLEVBQXJCLEVBQXlCLEVBQXpCO0FBQ0Q7QUFDRjtBQUNGOztBQUVEOzs7Ozs7OzttQ0FLZTtBQUNiLFVBQUlFLFVBQVUsZ0JBQU03TSxlQUFOLENBQXNCLEtBQUtiLEVBQTNCLENBQWQ7O0FBRUEsVUFBRyxDQUFDME4sUUFBUTdLLE1BQVosRUFBb0I7QUFDbEI7QUFDRDs7QUFFRCxVQUFJc0ksWUFBWSxLQUFLdkssUUFBTCxLQUFrQjhNLFFBQVEsQ0FBUixDQUFsQztBQUNBLFVBQUlDLGlCQUFpQixJQUFyQjs7QUFFQSxXQUFJLElBQUl6TCxJQUFJLENBQVIsRUFBV0MsSUFBSXVMLFFBQVE3SyxNQUEzQixFQUFtQ1gsSUFBSUMsQ0FBdkMsRUFBMENELEdBQTFDLEVBQStDO0FBQzdDLFlBQUlvSixTQUFTb0MsUUFBUXhMLENBQVIsQ0FBYjs7QUFFQSxZQUFHLENBQUNvSixPQUFPbkssT0FBUCxDQUFlaUYsV0FBZixDQUEyQndILFdBQS9CLEVBQTRDO0FBQzFDRCwyQkFBaUJyQyxNQUFqQjs7QUFFQTtBQUNEO0FBQ0Y7O0FBRUQsV0FBS3JCLFdBQUwsQ0FBaUJrQixTQUFqQixHQUE2QkEsU0FBN0I7QUFDQUEsbUJBQWEsS0FBSzBDLFFBQUwsRUFBYjs7QUFFQSxVQUFHLEtBQUt6SCxXQUFMLENBQWlCd0gsV0FBcEIsRUFBaUM7QUFDL0IsYUFBS3JELHFCQUFMLEdBQTZCb0QsZUFBZXhNLE9BQTVDO0FBQ0Q7O0FBRUQsV0FBSzhKLGdCQUFMLEdBQXdCMEMsY0FBeEI7QUFDQSxXQUFLL00sUUFBTCxHQUFnQjhNLFFBQVEsQ0FBUixDQUFoQjtBQUNBLFdBQUt0RCxTQUFMLEdBQWlCc0QsT0FBakI7QUFDQSxXQUFLdE4sS0FBTCxDQUFXUSxRQUFYLEdBQXNCLEtBQUtxSyxnQkFBTCxDQUFzQjlKLE9BQXRCLENBQThCZixLQUFwRDtBQUNBLE9BQUMsS0FBSzRKLGFBQU4sSUFBdUIsS0FBS3BKLFFBQUwsQ0FBY08sT0FBZCxDQUFzQjJNLFVBQXRCLENBQWlDLEtBQUs5TixFQUF0QyxDQUF2QjtBQUNBOEQsYUFBT2lLLGNBQVAsQ0FBc0IsS0FBSzNOLEtBQTNCLEVBQWtDLEtBQUtRLFFBQUwsQ0FBY08sT0FBZCxDQUFzQm9MLE9BQXhEO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OzsrQkFNV3ZNLEUsRUFBSTtBQUNiLFdBQUttSyxVQUFMLENBQWdCL0ksSUFBaEIsQ0FBcUJwQixFQUFyQjtBQUNEOztBQUVEOzs7Ozs7Ozs7a0NBTWNBLEUsRUFBSTtBQUNoQixXQUFJLElBQUlrQyxJQUFJLENBQVIsRUFBV0MsSUFBSSxLQUFLZ0ksVUFBTCxDQUFnQnRILE1BQW5DLEVBQTJDWCxJQUFJQyxDQUEvQyxFQUFrREQsR0FBbEQsRUFBdUQ7QUFDckQsWUFBSXdDLFFBQVEsS0FBS3lGLFVBQUwsQ0FBZ0JqSSxDQUFoQixDQUFaOztBQUVBLFlBQUd3QyxVQUFVMUUsRUFBYixFQUFpQjtBQUNmLGVBQUttSyxVQUFMLENBQWdCL0MsTUFBaEIsQ0FBdUJsRixDQUF2QixFQUEwQixDQUExQjtBQUNBQTtBQUNBQztBQUNEO0FBQ0Y7QUFDRjs7QUFFRDs7Ozs7Ozs7OzswQ0FPc0JxSCxVLEVBQVk7QUFDaEMsYUFBT0EsVUFBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7O3NDQU9rQnZJLEksRUFBTTtBQUN0QixVQUFJLENBQUM2QyxPQUFPaEUsSUFBUCxDQUFZbUIsS0FBSytNLFlBQWpCLEVBQStCbkwsTUFBcEMsRUFBNEM7QUFDMUMsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsV0FBSyxJQUFJYixDQUFULElBQWNmLEtBQUsrTSxZQUFuQixFQUFpQztBQUMvQixZQUFHLENBQUMvTSxLQUFLK00sWUFBTCxDQUFrQi9MLGNBQWxCLENBQWlDRCxDQUFqQyxDQUFKLEVBQXlDO0FBQ3ZDO0FBQ0Q7O0FBRUQsWUFBSUksT0FBT25CLEtBQUsrTSxZQUFMLENBQWtCaE0sQ0FBbEIsQ0FBWDtBQUNBLFlBQUlZLFFBQVEsZ0JBQU1xTCxpQkFBTixDQUF3QjdMLEtBQUt0QyxJQUE3QixFQUFtQ3NDLEtBQUtFLFNBQUwsQ0FBZWlLLE9BQWxELENBQVo7O0FBRUEsWUFBRyxDQUFDLGdCQUFNMkIsb0JBQU4sQ0FBMkJ0TCxLQUEzQixFQUFrQ1IsS0FBS1EsS0FBdkMsRUFBOENSLEtBQUsrTCxJQUFuRCxFQUF5RCxnQkFBTUEsSUFBTixDQUFXdkwsS0FBWCxDQUF6RCxDQUFKLEVBQWlGO0FBQy9FLGlCQUFPLElBQVA7QUFDRDtBQUNGOztBQUVELGFBQU8sS0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7Ozs7Z0RBUzRCM0IsSSxFQUFNbkIsSSxFQUFNOEMsSyxFQUFPO0FBQzdDLFVBQUlSLE9BQU8sS0FBS2dNLGlCQUFMLENBQXVCbk4sSUFBdkIsRUFBNkJuQixJQUE3QixDQUFYOztBQUVBLFVBQUcsQ0FBQ3NDLElBQUosRUFBVTtBQUNSLGVBQU8sSUFBUDtBQUNEOztBQUVELGFBQU8sQ0FBQyxnQkFBTThMLG9CQUFOLENBQTJCdEwsS0FBM0IsRUFBa0NSLEtBQUtRLEtBQXZDLEVBQThDUixLQUFLK0wsSUFBbkQsRUFBeUQsZ0JBQU1BLElBQU4sQ0FBV3ZMLEtBQVgsQ0FBekQsQ0FBUjtBQUNEOztBQUVEOzs7Ozs7Ozs7OytCQU9XM0IsSSxFQUFNO0FBQUE7O0FBQ2YsVUFBSW9OLFVBQVUsQ0FBZDtBQUNBLFVBQUlDLHVCQUFKO0FBQ0EsVUFBSTlFLG1CQUFKOztBQUVBLFVBQUkxSCxNQUFNYixLQUFLc04sWUFBTCxDQUFrQmhOLE9BQWxCLENBQTBCNkgscUJBQTFCLEVBQWlELFVBQUNvRixDQUFELEVBQUlDLENBQUosRUFBVTtBQUNuRUo7O0FBRUEsWUFBSUssaUJBQUo7QUFDQSxZQUFJM0wsbUJBQUo7QUFDQSxZQUFJNEwsbUJBQW1CLEVBQXZCO0FBQ0EsWUFBSUMsYUFBYTNOLEtBQUtQLFdBQUwsQ0FBaUJtTyxxQkFBakIsQ0FBdUNKLENBQXZDLENBQWpCOztBQUVBLHdCQUFNalAsWUFBTixHQUFxQixFQUFFeUIsTUFBTUEsSUFBUixFQUFjNk4sTUFBTSxFQUFwQixFQUFyQjs7QUFFQSxZQUFJO0FBQ0ZKLHFCQUFXLE9BQUt0SSxXQUFMLENBQWlCMkksS0FBakIsQ0FBdUIsT0FBS3hFLHFCQUFMLENBQTJCbkssS0FBbEQsRUFBeUR3TyxVQUF6RCxDQUFYO0FBQ0QsU0FGRCxDQUdBLE9BQU9JLEdBQVAsRUFBWTtBQUNWLGNBQUlDLCtEQUE2RGhPLEtBQUtzTixZQUF0RTs7QUFFQSxjQUFHLENBQUMsZ0JBQU14UCxPQUFOLENBQWNFLG9CQUFsQixFQUF3QztBQUN0QyxnQkFBRyxnQkFBTUYsT0FBTixDQUFjRyxLQUFqQixFQUF3QjtBQUN0QmdHLHNCQUFRQyxJQUFSLENBQWE4SixPQUFiO0FBQ0EvSixzQkFBUUMsSUFBUixDQUFhNkosSUFBSUUsS0FBakI7QUFDRDs7QUFFRFIsdUJBQVdsTSxTQUFYO0FBQ0QsV0FQRCxNQVFLO0FBQ0gwQyxvQkFBUWlLLEtBQVIsQ0FBY0YsT0FBZDtBQUNBLGtCQUFNRCxHQUFOO0FBQ0Q7QUFDRjs7QUFFRGpNLHFCQUFhLGdCQUFNdkQsWUFBTixHQUFvQixnQkFBTUEsWUFBTixDQUFtQnNQLElBQXZDLEdBQTZDLEVBQTFEO0FBQ0Esd0JBQU10UCxZQUFOLENBQW1Cc1AsSUFBbkIsR0FBMEIsSUFBMUI7QUFDQSx3QkFBTXRQLFlBQU4sR0FBcUIsSUFBckI7O0FBRUEsYUFBSSxJQUFJMEMsSUFBSWEsV0FBV0YsTUFBWCxHQUFvQixDQUFoQyxFQUFtQ1gsS0FBSyxDQUF4QyxFQUEyQ0EsR0FBM0MsRUFBZ0Q7QUFDOUMsY0FBSWdLLE9BQU9uSixXQUFXYixDQUFYLENBQVg7QUFDQSxjQUFJa04sT0FBVWxELEtBQUs1SixTQUFMLENBQWVpSyxPQUFmLENBQXVCbE0sTUFBakMsU0FBMkM2TCxLQUFLbUQsVUFBcEQ7O0FBRUEsY0FBR25ELEtBQUtvRCxVQUFSLEVBQW9CO0FBQ2xCO0FBQ0Q7O0FBRUQsY0FBR1gsaUJBQWlCUyxJQUFqQixDQUFILEVBQTJCO0FBQ3pCO0FBQ0Q7O0FBRUQsY0FBSUcsY0FBYyxnQkFBTXRCLGlCQUFOLENBQXdCL0IsS0FBS3dCLE9BQTdCLEVBQXNDeEIsS0FBSzVKLFNBQUwsQ0FBZWlLLE9BQXJELENBQWxCO0FBQ0EsY0FBSWlELGdCQUFnQnZPLEtBQUtxSixhQUFMLElBQXNCckosS0FBS1AsV0FBL0M7O0FBRUEsY0FBRyxnQkFBTStPLFlBQU4sQ0FBbUJGLFdBQW5CLEtBQW1DckQsS0FBSzVKLFNBQUwsS0FBbUJrTixjQUFjakYscUJBQXZFLEVBQThGO0FBQzVGO0FBQ0Q7O0FBRUQsY0FBSW1GLE9BQU94RCxLQUFLNUosU0FBTCxDQUFlcU4sY0FBZixDQUE4QnpELEtBQUtwTSxJQUFuQyxFQUF5Q21CLElBQXpDLENBQVg7QUFDQSxjQUFJMkIsUUFBUSxnQkFBTXFMLGlCQUFOLENBQXdCL0IsS0FBS3BNLElBQTdCLEVBQW1Db00sS0FBSzVKLFNBQUwsQ0FBZWlLLE9BQWxELENBQVo7O0FBRUEsY0FBRyxDQUFDbUQsSUFBSixFQUFVO0FBQ1J4RCxpQkFBSzVKLFNBQUwsQ0FBZXNOLE1BQWYsQ0FBc0IxRCxLQUFLcE0sSUFBM0IsRUFBaUMsRUFBRW1CLE1BQU1BLElBQVIsRUFBakM7QUFDRDs7QUFFRGlMLGVBQUs1SixTQUFMLENBQWV1TixpQkFBZixDQUFpQzVPLElBQWpDLEVBQXVDaUwsS0FBS3BNLElBQTVDLEVBQWtEOEMsS0FBbEQ7QUFDQStMLDJCQUFpQlMsSUFBakIsSUFBeUIsSUFBekI7QUFDRDs7QUFFRFQsMkJBQW1CLElBQW5CO0FBQ0E1TCxxQkFBYSxJQUFiOztBQUVBLFlBQUc5QixnQkFBZ0I2TyxJQUFuQixFQUF5QjtBQUN2QnRHLHVCQUFhZ0YsQ0FBYjtBQUNBRiwyQkFBaUJJLFFBQWpCOztBQUVBLGlCQUFPLGdCQUFNcUIsa0JBQU4sQ0FBeUJyQixRQUF6QixDQUFQO0FBQ0Q7O0FBRUQsWUFBRyxRQUFPQSxRQUFQLHlDQUFPQSxRQUFQLE1BQW1CLFFBQXRCLEVBQWdDO0FBQzlCLGNBQUk7QUFDRixtQkFBT3NCLEtBQUtDLFNBQUwsQ0FBZXZCLFFBQWYsQ0FBUDtBQUNELFdBRkQsQ0FHQSxPQUFNd0IsQ0FBTixFQUFTO0FBQ1AsbUJBQU94QixRQUFQO0FBQ0Q7QUFDRjs7QUFFRCxlQUFPQSxRQUFQO0FBQ0QsT0FwRlMsQ0FBVjs7QUFzRkEsVUFBR3pOLGdCQUFnQjZPLElBQW5CLEVBQXlCO0FBQ3ZCLFlBQUlsTixRQUFRZCxHQUFaO0FBQ0EsWUFBSXFPLHFCQUFxQixLQUF6Qjs7QUFFQSxZQUFHOUIsT0FBSCxFQUFZO0FBQ1ZwTixlQUFLbVAsYUFBTCxHQUFxQixJQUFyQjtBQUNEOztBQUVELFlBQUcvQixXQUFXLENBQVgsSUFBZ0I3RSxVQUFoQixJQUE4QnZJLEtBQUtzTixZQUFMLElBQXFCL0UsVUFBdEQsRUFBa0U7QUFDaEU1RyxrQkFBUTBMLGNBQVI7QUFDRDs7QUFFRCxZQUFJK0IsaUJBQWlCcFAsS0FBS21NLFFBQUwsQ0FBYzdMLE9BQWQsQ0FBc0IsZ0JBQXRCLEVBQXdDLElBQXhDLENBQXJCOztBQUVBLFlBQUc4TyxrQkFBa0JwUCxLQUFLbU0sUUFBMUIsRUFBb0M7QUFDbEMrQywrQkFBcUIsSUFBckI7QUFDQXZOLGtCQUFRLENBQUMsQ0FBQ0EsS0FBVjtBQUNEOztBQUVELFlBQUczQixLQUFLcVAsYUFBUixFQUF1QjtBQUNyQixjQUFJaE8sWUFBWXJCLEtBQUtxUCxhQUFyQjs7QUFFQWhPLG9CQUFVaU8sd0JBQVYsR0FBcUMsSUFBckM7QUFDQWpPLG9CQUFVd0ksS0FBVixDQUFnQixnQkFBTTBGLFdBQU4sQ0FBa0JILGNBQWxCLENBQWhCLElBQXFEek4sS0FBckQ7QUFDQU4sb0JBQVVpTyx3QkFBVixHQUFxQyxLQUFyQzs7QUFFQSxjQUFJak8sVUFBVXVILFlBQWQsRUFBNEI7QUFDMUIsNEJBQU1qSSxPQUFOLENBQWMsWUFBTTtBQUNsQlUsd0JBQVV3SSxLQUFWLENBQWdCMkYsU0FBaEIsSUFBNkJuTyxVQUFVd0ksS0FBVixDQUFnQjJGLFNBQWhCLENBQTBCNUUsT0FBMUIsQ0FBa0MsRUFBRWxHLEtBQUswSyxjQUFQLEVBQXVCek4sT0FBT0EsS0FBOUIsRUFBbEMsQ0FBN0I7QUFDQU4sd0JBQVVvTyxPQUFWLENBQWtCTCxjQUFsQixFQUFrQ3pOLEtBQWxDOztBQUVBLGtCQUFJK0MsTUFBTSxnQkFBTTZLLFdBQU4sQ0FBa0JILGNBQWxCLENBQVY7QUFDQSxrQkFBSU0sV0FBV2hMLElBQUksQ0FBSixFQUFPaUwsV0FBUCxLQUF1QmpMLElBQUlxQixLQUFKLENBQVUsQ0FBVixDQUF0QztBQUNBLGtCQUFJNkosU0FBUyxZQUFZRixRQUF6QjtBQUNBLGtCQUFJRyxXQUFXLGNBQWNILFFBQTdCOztBQUVBck8sd0JBQVV3SSxLQUFWLENBQWdCZ0csUUFBaEIsS0FBNkJ4TyxVQUFVd0ksS0FBVixDQUFnQmdHLFFBQWhCLEVBQTBCakYsT0FBMUIsQ0FBa0NqSixLQUFsQyxDQUE3Qjs7QUFFQSxrQkFBSSxPQUFPTixVQUFVdU8sTUFBVixDQUFQLElBQTRCLFVBQWhDLEVBQTRDO0FBQzFDdk8sMEJBQVV1TyxNQUFWLEVBQWtCak8sS0FBbEI7QUFDRDtBQUNGLGFBZEQ7QUFlRDtBQUNGLFNBeEJELE1BeUJLLElBQUd1TixrQkFBSCxFQUF1QjtBQUMxQixjQUFJWSxVQUFVOVAsS0FBSytQLFNBQW5CO0FBQ0EsY0FBSUMsT0FBTyxnQkFBTVQsV0FBTixDQUFrQkgsY0FBbEIsQ0FBWDs7QUFFQXpOLGtCQUFPbU8sUUFBUXpELFlBQVIsQ0FBcUIyRCxJQUFyQixFQUEyQixNQUEzQixDQUFQLEdBQTJDRixRQUFReEQsZUFBUixDQUF3QjBELElBQXhCLENBQTNDO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPblAsR0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7O3FDQU9pQmhDLEksRUFBOEI7QUFBQSxVQUF4Qm9SLGNBQXdCLHVFQUFQLEtBQU87O0FBQzdDLFVBQUk5USxRQUFRLEtBQUttTSxPQUFqQjtBQUNBLFVBQUl4SyxRQUFRLEVBQVo7O0FBRUEsVUFBRyxDQUFDbVAsY0FBSixFQUFvQjtBQUNsQixZQUFJQyxZQUFZLEVBQWhCOztBQUVBLGFBQUssSUFBSWpQLElBQUksQ0FBUixFQUFXQyxJQUFJckMsS0FBSytDLE1BQXpCLEVBQWlDWCxJQUFJQyxDQUFyQyxFQUF3Q0QsR0FBeEMsRUFBNkM7QUFDM0MsY0FBSXlELE1BQU03RixLQUFLb0MsQ0FBTCxDQUFWO0FBQ0EsY0FBSVUsY0FBSjs7QUFFQXVPLG1EQUFnQkEsU0FBaEIsSUFBMkJ4TCxHQUEzQjtBQUNBL0Msa0JBQVEsZ0JBQU1xTCxpQkFBTixDQUF3QmtELFNBQXhCLEVBQW1DL1EsS0FBbkMsQ0FBUjtBQUNBMkIsZ0JBQU1YLElBQU4sQ0FBVyxFQUFFdEIsTUFBTXFSLFNBQVIsRUFBbUJ2TyxPQUFPQSxLQUExQixFQUFYO0FBQ0Q7QUFDRixPQVhELE1BWUs7QUFDSGIsY0FBTVgsSUFBTixDQUFXLEVBQUV0QixNQUFNQSxJQUFSLEVBQWM4QyxPQUFPLGdCQUFNcUwsaUJBQU4sQ0FBd0JuTyxJQUF4QixFQUE4Qk0sS0FBOUIsQ0FBckIsRUFBWDtBQUNEOztBQUVELFVBQUlnUixjQUFjclAsTUFBTWMsTUFBeEI7O0FBRUEsVUFBSXdPLGFBQWEsU0FBYkEsVUFBYSxDQUFDTixPQUFELEVBQWE7QUFDNUIsWUFBSXpPLFlBQVl5TyxRQUFRNVAsT0FBeEI7O0FBRUEsYUFBSyxJQUFJcU4sSUFBSSxDQUFiLEVBQWdCQSxJQUFJNEMsV0FBcEIsRUFBaUM1QyxHQUFqQyxFQUFzQztBQUNwQyxjQUFJcE0sT0FBT0wsTUFBTXlNLENBQU4sQ0FBWDtBQUNBLGNBQUl0QyxPQUFPNUosVUFBVWdQLFNBQVYsQ0FBb0JsUCxLQUFLdEMsSUFBekIsQ0FBWDs7QUFFQSxjQUFJLENBQUNvTSxJQUFELElBQVMsQ0FBQ0EsS0FBS3FGLE1BQW5CLEVBQTJCO0FBQ3pCO0FBQ0Q7O0FBRUQsZUFBSyxJQUFJdlAsSUFBSSxDQUFSLEVBQVd3UCxJQUFJdEYsS0FBS3FGLE1BQUwsQ0FBWTFPLE1BQWhDLEVBQXdDYixJQUFJd1AsQ0FBNUMsRUFBK0N4UCxHQUEvQyxFQUFvRDtBQUNsRCxnQkFBSTBOLE9BQU94RCxLQUFLcUYsTUFBTCxDQUFZdlAsQ0FBWixDQUFYOztBQUVBLGdCQUFHTSxVQUFVbVAsMkJBQVYsQ0FBc0MvQixLQUFLek8sSUFBM0MsRUFBaURtQixLQUFLdEMsSUFBdEQsRUFBNERzQyxLQUFLUSxLQUFqRSxDQUFILEVBQTRFO0FBQzFFTix3QkFBVTRILGNBQVYsR0FBMkIsSUFBM0I7QUFDQTVILHdCQUFVb1AsY0FBVixDQUF5QmhDLEtBQUt6TyxJQUE5Qjs7QUFFQSxtQkFBSSxJQUFJMFEsRUFBUixJQUFjakMsS0FBS3pPLElBQUwsQ0FBVStNLFlBQXhCLEVBQXNDO0FBQ3BDLG9CQUFHLENBQUMwQixLQUFLek8sSUFBTCxDQUFVK00sWUFBVixDQUF1Qi9MLGNBQXZCLENBQXNDMFAsRUFBdEMsQ0FBSixFQUErQztBQUM3QztBQUNEOztBQUVELG9CQUFJQyxRQUFRbEMsS0FBS3pPLElBQUwsQ0FBVStNLFlBQVYsQ0FBdUIyRCxFQUF2QixDQUFaO0FBQ0Esb0JBQUkvTyxTQUFRLGdCQUFNcUwsaUJBQU4sQ0FBd0IyRCxNQUFNOVIsSUFBOUIsRUFBb0M4UixNQUFNdFAsU0FBTixDQUFnQmlLLE9BQXBELENBQVo7O0FBRUFxRixzQkFBTXRQLFNBQU4sQ0FBZ0J1TixpQkFBaEIsQ0FBa0NILEtBQUt6TyxJQUF2QyxFQUE2QzJRLE1BQU05UixJQUFuRCxFQUF5RDhDLE1BQXpEO0FBQ0Q7O0FBRUROLHdCQUFVNEgsY0FBVixHQUEyQixJQUEzQjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxlQUFPNUgsU0FBUDtBQUNELE9BbkNEOztBQXFDQSxVQUFJb00sV0FBVyxTQUFYQSxRQUFXLENBQUNuSyxRQUFELEVBQWM7QUFDM0IsYUFBSyxJQUFJckMsTUFBSSxDQUFSLEVBQVdDLE1BQUlvQyxTQUFTMUIsTUFBN0IsRUFBcUNYLE1BQUlDLEdBQXpDLEVBQTRDRCxLQUE1QyxFQUFpRDtBQUMvQyxjQUFJSSxZQUFZK08sV0FBVzlNLFNBQVNyQyxHQUFULENBQVgsQ0FBaEI7O0FBRUF3TSxtQkFBU3BNLFVBQVU2SCxVQUFuQjtBQUNEO0FBQ0YsT0FORDs7QUFRQWtILGlCQUFXLEtBQUtyUixFQUFoQjtBQUNBME8sZUFBUyxLQUFLdkUsVUFBZDtBQUNEOzs7OztBQUVEOzs7Ozs7OztxQ0FRaUJySyxJLEVBQU04QyxLLEVBQTBCO0FBQUE7O0FBQUEsVUFBbkJQLFNBQW1CLHVFQUFQLEtBQU87O0FBQy9DLFVBQUk2SixPQUFPLEtBQUtvRixTQUFMLENBQWV4UixJQUFmLENBQVg7O0FBRUEsVUFBSStSLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxHQUFELEVBQU1wRSxPQUFOLEVBQWtCO0FBQzdCLGFBQUksSUFBSTFMLENBQVIsSUFBYThQLEdBQWIsRUFBa0I7QUFDaEIsY0FBRyxDQUFDQSxJQUFJN1AsY0FBSixDQUFtQkQsQ0FBbkIsQ0FBRCxJQUEwQkEsS0FBSyxRQUFsQyxFQUE0QztBQUMxQztBQUNEOztBQUVELGNBQUkrUCxRQUFRLEdBQUc5RSxNQUFILENBQVVTLE9BQVYsRUFBbUIsQ0FBQzFMLENBQUQsQ0FBbkIsQ0FBWjtBQUNBLGNBQUlnUSxTQUFTRCxNQUFNL0ssS0FBTixFQUFiO0FBQ0EsY0FBSWlMLGFBQWEsS0FBakI7QUFDQSxjQUFJdFAsTUFBTW1QLElBQUk5UCxDQUFKLENBQVY7QUFDQSxjQUFJa1EsZUFBSjs7QUFFQUYsaUJBQU9HLEtBQVA7QUFDQUQsbUJBQVMsZ0JBQU1FLGlCQUFOLENBQXdCSixNQUF4QixFQUFnQ3BQLEtBQWhDLENBQVQ7O0FBRUEsY0FBR0EsU0FBUyxRQUFPQSxLQUFQLHlDQUFPQSxLQUFQLE1BQWdCLFFBQXpCLElBQXFDLENBQUNzUCxNQUF6QyxFQUFpRDtBQUMvQ0QseUJBQWEsSUFBYjtBQUNEOztBQUVELGNBQUd0UCxPQUFPLFFBQU9BLEdBQVAseUNBQU9BLEdBQVAsTUFBYyxRQUF4QixFQUFrQztBQUNoQ2tQLG1CQUFPbFAsR0FBUCxFQUFZb1AsS0FBWjtBQUNEOztBQUVELGlCQUFLTSxnQkFBTCxDQUFzQk4sS0FBdEIsRUFBNkIsSUFBN0I7O0FBRUEsY0FBR25QLFVBQVUsSUFBVixJQUFrQixRQUFPQSxLQUFQLHlDQUFPQSxLQUFQLE1BQWdCLFFBQWxDLElBQThDLENBQUNzUCxNQUFsRCxFQUEwRDtBQUN4RCxtQkFBS0ksUUFBTCxDQUFjUCxLQUFkO0FBQ0FFLDBCQUFjLGdCQUFNTSxvQkFBTixDQUEyQlAsTUFBM0IsRUFBbUNwUCxLQUFuQyxDQUFkO0FBQ0Q7QUFDRjtBQUNGLE9BOUJEOztBQWdDQXNKLGNBQVEyRixPQUFPM0YsSUFBUCxFQUFhLEdBQUdlLE1BQUgsQ0FBVW5OLElBQVYsQ0FBYixDQUFSO0FBQ0EsV0FBS3VTLGdCQUFMLENBQXNCdlMsSUFBdEI7O0FBRUEsVUFBR3VDLFNBQUgsRUFBYztBQUNaLGFBQUtpUSxRQUFMLENBQWN4UyxJQUFkO0FBQ0F1QyxxQkFBYSxnQkFBTWtRLG9CQUFOLENBQTJCelMsSUFBM0IsRUFBaUMsS0FBS3lNLE9BQXRDLENBQWI7QUFDRDtBQUNGOztBQUVEOzs7Ozs7Ozs7OztvQ0FRZ0J0TCxJLEVBQU1qQixFLEVBQUlrUSxDLEVBQUc7QUFDM0IsVUFBSTFHLGFBQWFMLGdCQUFnQnFKLElBQWhCLENBQXFCdlIsS0FBS3NOLFlBQTFCLENBQWpCOztBQUVBLFVBQUcsQ0FBQy9FLFVBQUosRUFBZ0I7QUFDZDtBQUNEOztBQUVELE9BQUN4RCxPQUFPeU0sS0FBUixLQUFrQnpNLE9BQU95TSxLQUFQLEdBQWV2QyxDQUFqQzs7QUFFQSxXQUFLbkcsaUJBQUwsR0FBeUI7QUFDdkIvSixZQUFJQSxFQURtQjtBQUV2QnNDLG1CQUFXLElBRlk7QUFHdkJtUSxlQUFPdkMsQ0FIZ0I7QUFJdkJqUCxjQUFNQTtBQUppQixPQUF6Qjs7QUFPQSxXQUFLaUosY0FBTCxHQUFzQixJQUF0QjtBQUNBLFdBQUs5RCxXQUFMLENBQWlCMkksS0FBakIsQ0FBdUIsS0FBS3hFLHFCQUFMLENBQTJCbkssS0FBbEQsRUFBeURvSixXQUFXLENBQVgsQ0FBekQ7QUFDQSxXQUFLTyxpQkFBTCxHQUF5QixJQUF6QjtBQUNEOztBQUVEOzs7Ozs7Ozs7bUNBTWU5SSxJLEVBQU07QUFDbkIsVUFBRyxLQUFLeVIsaUJBQUwsQ0FBdUJ6UixJQUF2QixDQUFILEVBQWlDO0FBQy9CQSxhQUFNQSxnQkFBZ0I2TyxJQUFqQixHQUF3QixPQUF4QixHQUFpQyxXQUF0QyxJQUFxRCxLQUFLcEUsVUFBTCxDQUFnQnpLLElBQWhCLENBQXJEO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7Ozs7Ozs7MENBUXNCQSxJLEVBQU1qQixFLEVBQUkyUyxXLEVBQWE7QUFDM0MsVUFBR3BKLGlCQUFpQkksT0FBakIsQ0FBeUIxSSxLQUFLbU0sUUFBOUIsS0FBMkMsQ0FBQyxDQUEvQyxFQUFrRDtBQUNoRDtBQUNEOztBQUVELFdBQUs1QixnQkFBTCxDQUFzQnZLLElBQXRCLEVBQTRCakIsRUFBNUI7O0FBRUEsVUFBSTRTLFlBQVkzUixLQUFLbU0sUUFBTCxDQUFjN0wsT0FBZCxDQUFzQixXQUF0QixFQUFtQyxJQUFuQyxDQUFoQjtBQUNBLFVBQUk2TCxXQUFXLGdCQUFNb0QsV0FBTixDQUFrQnZQLEtBQUttTSxRQUF2QixDQUFmO0FBQ0EsVUFBSTlLLFlBQVlxUSxjQUFhQSxXQUFiLEdBQTBCLElBQTFDOztBQUVBLFVBQUdDLGFBQWEzUixLQUFLbU0sUUFBckIsRUFBK0I7QUFDN0IsWUFBR25NLEtBQUs0UixPQUFSLEVBQWlCO0FBQ2Y7QUFDRDs7QUFFRCxZQUFJQyxVQUFVLElBQUksZ0JBQU0zSyxZQUFWLENBQXVCeUssU0FBdkIsRUFBa0M1UyxFQUFsQyxFQUFzQ3NDLFNBQXRDLENBQWQ7O0FBRUEsWUFBR3JCLEtBQUtzTixZQUFSLEVBQXNCO0FBQ3BCdUUsa0JBQVFwRCxJQUFSLENBQWEsVUFBQ1EsQ0FBRCxFQUFPO0FBQ2xCNU4sc0JBQVV5USxlQUFWLENBQTBCOVIsSUFBMUIsRUFBZ0NqQixFQUFoQyxFQUFvQ2tRLENBQXBDO0FBQ0QsV0FGRDtBQUdEOztBQUVEalAsYUFBSzRSLE9BQUwsR0FBZUMsT0FBZjtBQUNBOVMsV0FBR3NOLFlBQUgsQ0FBZ0JyTSxLQUFLbU0sUUFBckIsRUFBK0IsZ0JBQU0yQyxrQkFBTixDQUF5QitDLE9BQXpCLENBQS9COztBQUVBLFlBQUdILFdBQUgsRUFBZ0I7QUFDZCxlQUFLcEMsd0JBQUwsR0FBZ0MsSUFBaEM7QUFDQSxlQUFLekYsS0FBTCxDQUFXc0MsUUFBWCxJQUF1QjBGLE9BQXZCO0FBQ0EsZUFBS3ZDLHdCQUFMLEdBQWdDLEtBQWhDO0FBQ0Q7O0FBRUQ7QUFDRDs7QUFFRCxVQUFHb0MsV0FBSCxFQUFnQjtBQUNkMVIsYUFBS3FQLGFBQUwsR0FBcUIsSUFBckI7QUFDQXJQLGFBQUtxSixhQUFMLEdBQXFCaEksU0FBckI7QUFDRDs7QUFFRHRDLFNBQUdzTixZQUFILENBQWdCck0sS0FBS21NLFFBQXJCLEVBQStCOUssVUFBVW9KLFVBQVYsQ0FBcUJ6SyxJQUFyQixDQUEvQjtBQUNEOztBQUVEOzs7Ozs7Ozs7OztxQ0FRaUJBLEksRUFBTWpCLEUsRUFBSTtBQUN6QixVQUFHaUIsS0FBSytSLGFBQVIsRUFBdUI7QUFDckIsZUFBTyxLQUFQO0FBQ0Q7O0FBRUQvUixXQUFLc04sWUFBTCxHQUFvQnROLEtBQU1BLGdCQUFnQjZPLElBQWpCLEdBQXdCLE9BQXhCLEdBQWlDLFdBQXRDLENBQXBCO0FBQ0E3TyxXQUFLK00sWUFBTCxHQUFvQixFQUFwQjtBQUNBL00sV0FBS3FKLGFBQUwsR0FBcUIsSUFBckI7QUFDQXJKLFdBQUtxUCxhQUFMLEdBQXFCLElBQXJCO0FBQ0FyUCxXQUFLNFIsT0FBTCxHQUFlLElBQWY7QUFDQTVSLFdBQUttUCxhQUFMLEdBQXFCLEtBQXJCO0FBQ0FuUCxXQUFLK1IsYUFBTCxHQUFxQixJQUFyQjtBQUNBL1IsV0FBS1AsV0FBTCxHQUFtQixJQUFuQjtBQUNBTyxXQUFLK1AsU0FBTCxHQUFpQmhSLEVBQWpCOztBQUVBLGFBQU8sSUFBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7OzRDQU93QkEsRSxFQUF3QjtBQUFBLFVBQXBCMlMsV0FBb0IsdUVBQU4sSUFBTTs7QUFDOUMsV0FBSyxJQUFJelEsSUFBSSxDQUFSLEVBQVc0SSxRQUFROUssR0FBR21OLFVBQXRCLEVBQWtDaEwsSUFBSTJJLE1BQU1qSSxNQUFqRCxFQUF5RFgsSUFBSUMsQ0FBN0QsRUFBZ0VELEdBQWhFLEVBQXFFO0FBQ25FLGFBQUsrUSxxQkFBTCxDQUEyQm5JLE1BQU01SSxDQUFOLENBQTNCLEVBQXFDbEMsRUFBckMsRUFBeUMyUyxXQUF6QztBQUNEO0FBQ0Y7O0FBRUQ7Ozs7Ozs7O3lDQUtxQjtBQUFBOztBQUNuQixVQUFJTyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUN2TixHQUFELEVBQU0vQyxLQUFOLEVBQW1DO0FBQUEsWUFBdEJQLFNBQXNCLHVFQUFWLEtBQVU7O0FBQ3ZELFlBQUcsT0FBS2tPLHdCQUFSLEVBQWtDO0FBQ2hDO0FBQ0Q7O0FBRUQsWUFBSXRQLE9BQU8sT0FBS2pCLEVBQUwsQ0FBUW1ULGdCQUFSLENBQXlCeE4sR0FBekIsQ0FBWDs7QUFFQSxZQUFHMUUsSUFBSCxFQUFTO0FBQ1AsY0FBR0EsS0FBSzRSLE9BQVIsRUFBaUI7QUFDZjVSLGlCQUFLNFIsT0FBTCxDQUFhaEIsTUFBYjtBQUNBNVEsaUJBQUs0UixPQUFMLEdBQWUsSUFBZjtBQUNBNVIsaUJBQUtzTixZQUFMLEdBQW9CM0wsS0FBcEI7QUFDRDs7QUFFRCxjQUFHM0IsS0FBS21QLGFBQVIsRUFBdUI7QUFDckIsbUJBQUt4UCxRQUFMLElBQWlCLE9BQUtBLFFBQUwsQ0FBY08sT0FBZCxDQUFzQm9KLHFCQUF0QixDQUE0QzZJLGVBQTVDLENBQTRELENBQUNuUyxJQUFELENBQTVELENBQWpCO0FBQ0FBLGlCQUFLbVAsYUFBTCxHQUFxQixLQUFyQjtBQUNBblAsaUJBQUtzTixZQUFMLEdBQW9CM0wsS0FBcEI7QUFDRDtBQUNGOztBQUVELFlBQUdQLFNBQUgsRUFBYztBQUNaLGlCQUFLckMsRUFBTCxDQUFRdU4sZUFBUixDQUF3QjVILEdBQXhCO0FBQ0QsU0FGRCxNQUdLLElBQUcxRSxJQUFILEVBQVM7QUFDWkEsZUFBS3dLLFNBQUwsR0FBaUI3SSxLQUFqQjtBQUNELFNBRkksTUFHQTtBQUNILGlCQUFLNUMsRUFBTCxDQUFRc04sWUFBUixDQUFxQjNILEdBQXJCLEVBQTBCL0MsS0FBMUI7QUFDRDtBQUNGLE9BOUJEOztBQWdDQSxXQUFLa0ksS0FBTCxHQUFhLElBQUl1SSxLQUFKLENBQVUsS0FBS2hKLE9BQWYsRUFBd0I7QUFDbkMyQixhQUFLLGFBQUNzSCxNQUFELEVBQVMzTixHQUFULEVBQWlCO0FBQ3BCLGNBQUdBLE9BQU8sV0FBVixFQUF1QjtBQUNyQixtQkFBTyxJQUFQO0FBQ0Q7O0FBRUQsaUJBQU8yTixPQUFPM04sR0FBUCxDQUFQO0FBQ0QsU0FQa0M7QUFRbkM0TixhQUFLLGFBQUNELE1BQUQsRUFBUzNOLEdBQVQsRUFBYy9DLEtBQWQsRUFBd0I7QUFDM0IsY0FBSTRRLFVBQVUsZ0JBQU1qUSxVQUFOLENBQWlCb0MsR0FBakIsQ0FBZDs7QUFFQSxjQUFHLE9BQUtxSCxpQkFBTCxDQUF1QnJELE9BQXZCLENBQStCNkosT0FBL0IsS0FBMkMsQ0FBQyxDQUEvQyxFQUFrRDtBQUNoREEsbUNBQXFCQSxPQUFyQjs7QUFFQSxnQkFBRzVRLEtBQUgsRUFBVTtBQUNSLHFCQUFLNUMsRUFBTCxDQUFRc04sWUFBUixDQUFxQjNILEdBQXJCLEVBQTBCL0MsS0FBMUI7QUFDRCxhQUZELE1BR0s7QUFDSCxxQkFBSzVDLEVBQUwsQ0FBUXVOLGVBQVIsQ0FBd0I1SCxHQUF4QjtBQUNEO0FBQ0Y7O0FBRUQyTixpQkFBTzNOLEdBQVAsSUFBYy9DLEtBQWQ7QUFDQXNRLDBCQUFnQk0sT0FBaEIsRUFBeUIsZ0JBQU16RCxrQkFBTixDQUF5Qm5OLEtBQXpCLENBQXpCOztBQUVBLGlCQUFPLElBQVA7QUFDRCxTQTFCa0M7QUEyQm5DNlEsd0JBQWdCLHdCQUFDSCxNQUFELEVBQVMzTixHQUFULEVBQWMvQyxLQUFkLEVBQXdCO0FBQ3RDLGNBQUk0USxVQUFVLGdCQUFNalEsVUFBTixDQUFpQm9DLEdBQWpCLENBQWQ7O0FBRUF1TiwwQkFBZ0JNLE9BQWhCLEVBQXlCLGdCQUFNekQsa0JBQU4sQ0FBeUJuTixLQUF6QixDQUF6QixFQUEwRCxJQUExRDtBQUNBLGlCQUFPMFEsT0FBTzNOLEdBQVAsQ0FBUDs7QUFFQSxpQkFBTyxJQUFQO0FBQ0Q7QUFsQ2tDLE9BQXhCLENBQWI7QUFvQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7OzhCQVFVbU0sRyxFQUFLcEUsTyxFQUFTO0FBQUE7O0FBQ3RCLGFBQU8sSUFBSTJGLEtBQUosQ0FBVXZCLEdBQVYsRUFBZTtBQUNwQjlGLGFBQUssYUFBQ3NILE1BQUQsRUFBUzNOLEdBQVQsRUFBaUI7QUFDcEIsY0FBSUEsT0FBTyxXQUFYLEVBQXdCO0FBQ3RCLG1CQUFPLElBQVA7QUFDRDs7QUFFRCxjQUFJQSxPQUFPLFVBQVgsRUFBdUI7QUFDckIsbUJBQU9tTSxHQUFQO0FBQ0Q7O0FBRUQsY0FBSW5NLE9BQU8sYUFBWCxFQUEwQjtBQUN4QjtBQUNEOztBQUVELGNBQUlBLE9BQU8sUUFBWCxFQUFxQjtBQUNuQixtQkFBTytILE9BQVA7QUFDRDs7QUFFRCxjQUFHLE9BQUt4RCxjQUFSLEVBQXdCO0FBQ3RCLG1CQUFPb0osT0FBTzNOLEdBQVAsQ0FBUDtBQUNEOztBQUVELGNBQUcsT0FBSytELGFBQUwsQ0FBbUIvRCxHQUFuQixDQUFILEVBQTRCO0FBQzFCLG1CQUFPMk4sT0FBTzNOLEdBQVAsQ0FBUDtBQUNEOztBQUVELGNBQUcsT0FBTzJOLE9BQU8zTixHQUFQLENBQVAsSUFBc0IsVUFBekIsRUFBcUM7QUFDbkMsZ0JBQUkrTixhQUFjLGdCQUFNQyxvQkFBTixDQUEyQkwsTUFBM0IsRUFBbUMzTixHQUFuQyxDQUFsQjs7QUFFQSxnQkFBRyxDQUFDLGdCQUFNaU8sYUFBTixDQUFvQkYsVUFBcEIsQ0FBSixFQUFxQztBQUNuQ0EseUJBQVcvTixHQUFYLElBQWtCLGdCQUFNNEIsZUFBTixDQUFzQm1NLFdBQVcvTixHQUFYLENBQXRCLEVBQXVDK04sV0FBV2hULFdBQWxELENBQWxCO0FBQ0Q7QUFDRjs7QUFFRCxjQUFJLGdCQUFNbEIsWUFBVixFQUF3QjtBQUN0QixnQkFBSU0sT0FBTyxHQUFHbU4sTUFBSCxDQUFVUyxPQUFWLEVBQW1CLENBQUMvSCxHQUFELENBQW5CLENBQVg7QUFDQSxnQkFBSTJKLGFBQWEsS0FBakI7O0FBRUEsZ0JBQUcsRUFBRTNKLE9BQU8yTixNQUFULENBQUgsRUFBcUI7QUFDbkJBLHFCQUFPM04sR0FBUCxJQUFjbkQsU0FBZDtBQUNELGFBRkQsTUFHSyxJQUFHLENBQUMsZ0JBQU1xUiwyQkFBTixDQUFrQ1AsTUFBbEMsRUFBMEMzTixHQUExQyxDQUFKLEVBQW9EO0FBQ3ZEMkosMkJBQWEsSUFBYjtBQUNEOztBQUVELG1CQUFLd0UsVUFBTCxDQUFnQixnQkFBTXRVLFlBQU4sQ0FBbUJzUCxJQUFuQyxFQUF5Q2hQLElBQXpDLEVBQStDNE4sT0FBL0MsRUFBd0Q0RixPQUFPM04sR0FBUCxDQUF4RCxFQUFxRTJKLFVBQXJFOztBQUVBLG1CQUFPZ0UsT0FBTzNOLEdBQVAsQ0FBUDtBQUNEOztBQUVELGlCQUFPMk4sT0FBTzNOLEdBQVAsQ0FBUDtBQUNELFNBbkRtQjtBQW9EcEI0TixhQUFLLGFBQUNELE1BQUQsRUFBUzNOLEdBQVQsRUFBYy9DLEtBQWQsRUFBd0I7QUFDM0IsY0FBRyxPQUFLc0gsY0FBUixFQUF3QjtBQUN0Qm9KLG1CQUFPM04sR0FBUCxJQUFjL0MsS0FBZDs7QUFFQSxtQkFBTyxJQUFQO0FBQ0Q7O0FBRUQsY0FBRyxPQUFLOEcsYUFBTCxDQUFtQi9ELEdBQW5CLENBQUgsRUFBNEI7QUFDMUIyTixtQkFBTzNOLEdBQVAsSUFBYy9DLEtBQWQ7O0FBRUEsbUJBQU8sSUFBUDtBQUNEOztBQUVELGNBQUk5QyxPQUFPLEdBQUdtTixNQUFILENBQVVTLE9BQVYsRUFBbUIsQ0FBQy9ILEdBQUQsQ0FBbkIsQ0FBWDs7QUFFQSxjQUFHLE9BQUtrSCxnQkFBUixFQUEwQjtBQUN4QnlHLG1CQUFPM04sR0FBUCxJQUFjLE9BQUttSCxlQUFMLENBQXFCbEssS0FBckIsRUFBNEI5QyxJQUE1QixDQUFkO0FBQ0QsV0FGRCxNQUdLO0FBQ0h3VCxtQkFBTzNOLEdBQVAsSUFBYy9DLEtBQWQ7QUFDRDs7QUFFRCxjQUFHLGdCQUFNckQsV0FBVCxFQUFzQjtBQUNwQixtQkFBS3dVLHVCQUFMLENBQTZCckcsT0FBN0IsRUFBc0MvSCxHQUF0QyxFQUEyQyxLQUEzQzs7QUFFQSxtQkFBTyxJQUFQO0FBQ0Q7O0FBRUQsY0FBRyxPQUFLaUUsV0FBUixFQUFxQjtBQUNuQixtQkFBS3JILGdCQUFMLENBQXNCekMsSUFBdEIsRUFBNEI4QyxLQUE1QjtBQUNEOztBQUVELGlCQUFPLElBQVA7QUFDRCxTQXJGbUI7QUFzRnBCNlEsd0JBQWdCLHdCQUFDSCxNQUFELEVBQVMzTixHQUFULEVBQWlCO0FBQy9CLGNBQUk3RixPQUFPLEdBQUdtTixNQUFILENBQVVTLE9BQVYsRUFBbUIsQ0FBQy9ILEdBQUQsQ0FBbkIsQ0FBWDs7QUFFQSxjQUFHLE9BQUt1RSxjQUFSLEVBQXdCO0FBQ3RCLG1CQUFPb0osT0FBTzNOLEdBQVAsQ0FBUDs7QUFFQSxtQkFBTyxJQUFQO0FBQ0Q7O0FBRUQsY0FBRyxPQUFLK0QsYUFBTCxDQUFtQi9ELEdBQW5CLENBQUgsRUFBNEI7QUFDMUIsbUJBQU8yTixPQUFPM04sR0FBUCxDQUFQOztBQUVBLG1CQUFPLElBQVA7QUFDRDs7QUFFRCxjQUFHLGdCQUFNcEcsV0FBVCxFQUFzQjtBQUNwQixtQkFBTytULE9BQU8zTixHQUFQLENBQVA7QUFDQSxtQkFBS29PLHVCQUFMLENBQTZCckcsT0FBN0IsRUFBc0MvSCxHQUF0QyxFQUEyQyxJQUEzQzs7QUFFQSxtQkFBTyxJQUFQO0FBQ0Q7O0FBRUQsaUJBQU8yTixPQUFPM04sR0FBUCxDQUFQO0FBQ0EsaUJBQUtwRCxnQkFBTCxDQUFzQnpDLElBQXRCLEVBQTRCMEMsU0FBNUIsRUFBdUMsSUFBdkM7O0FBRUEsaUJBQU8sSUFBUDtBQUNEO0FBaEhtQixPQUFmLENBQVA7QUFrSEQ7O0FBRUQ7Ozs7Ozs7Ozs7O0FBaUJBOzs7Ozs7O29DQU9pQkksSyxFQUFPb1IsUyxFQUFXO0FBQUE7O0FBQ2pDLFdBQUs5SixjQUFMLEdBQXNCLElBQXRCOztBQUVBLFVBQUkrSixVQUFVLFNBQVZBLE9BQVUsQ0FBQ3JSLEtBQUQsRUFBUThLLE9BQVIsRUFBb0I7QUFDaEMsWUFBRyxRQUFPOUssS0FBUCx5Q0FBT0EsS0FBUCxNQUFnQixRQUFoQixJQUE0QkEsVUFBVSxJQUF6QyxFQUErQztBQUM3QyxpQkFBT0EsS0FBUDtBQUNEOztBQUVELFlBQUcsQ0FBQyxnQkFBTWdSLGFBQU4sQ0FBb0JoUixLQUFwQixDQUFELElBQStCLENBQUMsZ0JBQU02TSxZQUFOLENBQW1CN00sS0FBbkIsQ0FBaEMsSUFBNkQsRUFBRUEsaUJBQWlCLGdCQUFNd0YsS0FBekIsQ0FBaEUsRUFBaUc7QUFDL0YsaUJBQU94RixLQUFQO0FBQ0Q7O0FBRUQsWUFBSTBRLFNBQVMxUSxLQUFiOztBQUVBLFlBQUdBLE1BQU1pRCxTQUFULEVBQW9CO0FBQ2xCeU4sbUJBQVMxUSxNQUFNc1IsUUFBZjs7QUFFQSxjQUFHLENBQUMsT0FBS0Msd0JBQVQsRUFBbUM7QUFDakMsZ0JBQUd2UixNQUFNbEMsV0FBTixXQUFILEVBQStCO0FBQzdCNFMsdUJBQVMsZ0JBQU1uRixJQUFOLENBQVdtRixNQUFYLEVBQW1CLEtBQW5CLENBQVQ7QUFDQTFRLHNCQUFRMFEsTUFBUjtBQUNELGFBSEQsTUFJSyxJQUFHLGdCQUFNelQsZUFBTixDQUFzQjZOLE9BQXRCLEtBQWtDLGdCQUFNN04sZUFBTixDQUFzQitDLE1BQU1vUCxNQUE1QixDQUFyQyxFQUEwRTtBQUM3RXBQLHNCQUFRMFEsTUFBUjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxhQUFJLElBQUl0UixDQUFSLElBQWFzUixNQUFiLEVBQXFCO0FBQ25CLGNBQUksQ0FBQ0EsT0FBT3JSLGNBQVAsQ0FBc0JELENBQXRCLENBQUwsRUFBK0I7QUFDN0I7QUFDRDs7QUFFRCxjQUFJVyxNQUFNMlEsT0FBT3RSLENBQVAsQ0FBVjtBQUNBLGNBQUlsQyxPQUFPLEdBQUdtTixNQUFILENBQVVTLE9BQVYsRUFBbUIsQ0FBQzFMLENBQUQsQ0FBbkIsQ0FBWDs7QUFFQXNSLGlCQUFPdFIsQ0FBUCxJQUFZaVMsUUFBUXRSLEdBQVIsRUFBYTdDLElBQWIsQ0FBWjtBQUNEOztBQUVELFlBQUcsQ0FBQzhDLE1BQU1pRCxTQUFWLEVBQXFCO0FBQ25CLGlCQUFPLE9BQUtrSCxTQUFMLENBQWV1RyxNQUFmLEVBQXVCNUYsT0FBdkIsQ0FBUDtBQUNEOztBQUVELGVBQU85SyxLQUFQO0FBQ0QsT0F6Q0Q7O0FBMkNBLFVBQUlkLE1BQU1tUyxRQUFRclIsS0FBUixFQUFlb1IsYUFBYSxFQUE1QixDQUFWOztBQUVBLFdBQUs5SixjQUFMLEdBQXNCLElBQXRCOztBQUVBLGFBQU9wSSxHQUFQO0FBQ0Q7Ozs7O0FBRUQ7Ozs7Ozs7Ozs0Q0FTeUI0TCxPLEVBQVMvSCxHLEVBQXdCO0FBQUEsVUFBbkJ0RCxTQUFtQix1RUFBUCxLQUFPOztBQUN4RCxVQUFJdkMsT0FBTzROLFFBQVE3SyxNQUFSLEdBQWdCLENBQUM2SyxRQUFRLENBQVIsQ0FBRCxDQUFoQixHQUE4QixDQUFDL0gsR0FBRCxDQUF6QztBQUNBLFVBQUl5TyxlQUFrQixLQUFLN0gsT0FBTCxDQUFhbE0sTUFBL0IsU0FBeUMsZ0JBQU1SLGVBQU4sQ0FBc0JDLElBQXRCLENBQTdDOztBQUVBLFVBQUc0TixRQUFRN0ssTUFBWCxFQUFtQjtBQUNqQlIsb0JBQVksS0FBWjtBQUNEOztBQUVELFVBQUcsQ0FBQyxnQkFBTTlDLFdBQU4sQ0FBa0I2VSxZQUFsQixDQUFKLEVBQXFDO0FBQ25DLHdCQUFNN1UsV0FBTixDQUFrQjZVLFlBQWxCLElBQWtDO0FBQ2hDOVIscUJBQVcsSUFEcUI7QUFFaEN4QyxnQkFBTUE7QUFGMEIsU0FBbEM7QUFJRDs7QUFFQXVDLG9CQUFjRyxTQUFmLEtBQThCLGdCQUFNakQsV0FBTixDQUFrQjZVLFlBQWxCLEVBQWdDL1IsU0FBaEMsR0FBNENBLFNBQTFFO0FBQ0Esc0JBQU05QyxXQUFOLENBQWtCNlUsWUFBbEIsRUFBZ0N4UixLQUFoQyxHQUF3QyxnQkFBTXFMLGlCQUFOLENBQXdCbk8sSUFBeEIsRUFBOEIsS0FBS3lNLE9BQW5DLENBQXhDOztBQUVBLGFBQU8sZ0JBQU1oTixXQUFOLENBQWtCNlUsWUFBbEIsQ0FBUDtBQUNEOzs7OztBQUVEOzs7Ozs7Ozs7OytCQVVXMUUsSSxFQUFNNVAsSSxFQUFNNE4sTyxFQUFTOUssSyxFQUEyQjtBQUFBLFVBQXBCME0sVUFBb0IsdUVBQVAsS0FBTzs7QUFDekQsVUFBSStFLG1CQUFtQixnQkFBTXhVLGVBQU4sQ0FBc0I2TixPQUF0QixDQUF2Qjs7QUFFQSxVQUFHZ0MsS0FBSzdNLE1BQUwsSUFBZSxDQUFDeU0sVUFBbkIsRUFBK0I7QUFDN0IsWUFBSW5OLElBQUl1TixLQUFLN00sTUFBTCxHQUFjLENBQXRCO0FBQ0EsWUFBSXFKLE9BQU93RCxLQUFLdk4sQ0FBTCxDQUFYOztBQUVBLFlBQUcrSixLQUFLbUQsVUFBTCxJQUFtQmdGLGdCQUFuQixJQUF1Q25JLEtBQUs1SixTQUFMLEtBQW1CLElBQTdELEVBQW1FO0FBQ2pFb04sZUFBS3RJLE1BQUwsQ0FBWWpGLENBQVosRUFBZSxDQUFmO0FBQ0Q7QUFDRjs7QUFFRHVOLFdBQUt0TyxJQUFMLENBQVU7QUFDUmtCLG1CQUFXLElBREg7QUFFUitNLG9CQUFZLGdCQUFNeFAsZUFBTixDQUFzQkMsSUFBdEIsQ0FGSjtBQUdSNE4saUJBQVNBLE9BSEQ7QUFJUjVOLGNBQU1BLElBSkU7QUFLUjhDLGVBQU9BLEtBTEM7QUFNUjBNLG9CQUFZQTtBQU5KLE9BQVY7QUFRRDs7Ozs7QUFFRDs7Ozs7Ozs4QkFPVXhQLEksRUFBTTtBQUNkLGFBQU8sZ0JBQU1tTyxpQkFBTixDQUF3Qm5PLElBQXhCLEVBQThCLEtBQUtnSyxVQUFuQyxLQUFrRCxJQUF6RDtBQUNEOztBQUVEOzs7Ozs7Ozs7OzttQ0FRZWhLLEksRUFBTW1CLEksRUFBTTtBQUN6QixVQUFJeU8sT0FBUSxnQkFBTXpCLGlCQUFOLENBQXdCbk8sSUFBeEIsRUFBOEIsS0FBS2dLLFVBQW5DLENBQVo7O0FBRUEsVUFBRyxDQUFDNEYsSUFBRCxJQUFTLENBQUNBLEtBQUs2QixNQUFmLElBQXlCLENBQUM3QixLQUFLNkIsTUFBTCxDQUFZMU8sTUFBekMsRUFBaUQ7QUFDL0MsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsV0FBSSxJQUFJWCxJQUFJLENBQVIsRUFBV0MsSUFBSXVOLEtBQUs2QixNQUFMLENBQVkxTyxNQUEvQixFQUF1Q1gsSUFBSUMsQ0FBM0MsRUFBOENELEdBQTlDLEVBQW1EO0FBQ2pELFlBQUlnSyxPQUFPd0QsS0FBSzZCLE1BQUwsQ0FBWXJQLENBQVosQ0FBWDs7QUFFQSxZQUFHZ0ssS0FBS2pMLElBQUwsS0FBY0EsSUFBakIsRUFBdUI7QUFDckIsaUJBQU9pTCxJQUFQO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPLElBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7O3NDQVNrQmpMLEksRUFBTW5CLEksRUFBTThDLEssRUFBTztBQUNuQyxVQUFJUixPQUFPLEtBQUtnTSxpQkFBTCxDQUF1Qm5OLElBQXZCLEVBQTZCbkIsSUFBN0IsQ0FBWDtBQUNBLFVBQUlxTyxPQUFPLGdCQUFNQSxJQUFOLENBQVd2TCxLQUFYLENBQVg7O0FBRUEsVUFBR1IsSUFBSCxFQUFTO0FBQ1AsWUFBSU4sTUFBTSxnQkFBTW9NLG9CQUFOLENBQTJCdEwsS0FBM0IsRUFBa0NSLEtBQUtRLEtBQXZDLEVBQThDUixLQUFLK0wsSUFBbkQsRUFBeURBLElBQXpELENBQVY7O0FBRUEvTCxhQUFLUSxLQUFMLEdBQWFBLEtBQWI7QUFDQVIsYUFBSytMLElBQUwsR0FBWUEsSUFBWjs7QUFFQSxlQUFPLENBQUNyTSxHQUFSO0FBQ0Q7O0FBRUQsVUFBSXNOLE9BQVUsS0FBSzdDLE9BQUwsQ0FBYWxNLE1BQXZCLFNBQWlDLGdCQUFNUixlQUFOLENBQXNCQyxJQUF0QixDQUFyQzs7QUFFQW1CLFdBQUsrTSxZQUFMLENBQWtCb0IsSUFBbEIsSUFBMEI7QUFDeEJ4TSxlQUFPQSxLQURpQjtBQUV4QnVMLGNBQU1BLElBRmtCO0FBR3hCN0wsbUJBQVcsSUFIYTtBQUl4QnhDLGNBQU1BO0FBSmtCLE9BQTFCOztBQU9BLGFBQU8sSUFBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7OztzQ0FRa0JtQixJLEVBQU1uQixJLEVBQU07QUFDNUIsVUFBSXNQLE9BQVUsS0FBSzdDLE9BQUwsQ0FBYWxNLE1BQXZCLFNBQWlDLGdCQUFNUixlQUFOLENBQXNCQyxJQUF0QixDQUFyQzs7QUFFQSxhQUFPbUIsS0FBSytNLFlBQUwsQ0FBa0JvQixJQUFsQixLQUEyQixJQUFsQztBQUNEOztBQUVEOzs7Ozs7Ozs7O3lDQU9xQm5PLEksRUFBTW5CLEksRUFBTTtBQUMvQixVQUFJc1AsT0FBVSxLQUFLN0MsT0FBTCxDQUFhbE0sTUFBdkIsU0FBaUMsZ0JBQU1SLGVBQU4sQ0FBc0JDLElBQXRCLENBQXJDOztBQUVBLGFBQU9tQixLQUFLK00sWUFBTCxDQUFrQm9CLElBQWxCLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7OzsyQkFPT3RQLEksRUFBTW9NLEksRUFBTTtBQUNqQixzQkFBTXpKLGlCQUFOLENBQXdCM0MsSUFBeEIsRUFBOEIsS0FBS2dLLFVBQW5DLEVBQStDLFVBQUNwSCxJQUFELEVBQU9FLEtBQVAsRUFBaUI7QUFDOUQsWUFBSWtQLE1BQU0sRUFBQ1AsUUFBUSxFQUFULEVBQVY7O0FBRUEsWUFBRyxDQUFDN08sSUFBSixFQUFVO0FBQ1IsaUJBQU9FLFFBQU9BLEtBQVAsR0FBY2tQLEdBQXJCO0FBQ0Q7O0FBRUQsWUFBRyxRQUFPbFAsS0FBUCx5Q0FBT0EsS0FBUCxNQUFnQixRQUFuQixFQUE2QjtBQUMzQmtQLGdCQUFNbFAsS0FBTjtBQUNEOztBQUVELFlBQUcsQ0FBQ2tQLElBQUlQLE1BQVIsRUFBZ0I7QUFDZE8sY0FBSVAsTUFBSixHQUFhLEVBQWI7QUFDRDs7QUFFRE8sWUFBSVAsTUFBSixDQUFXblEsSUFBWCxDQUFnQjhLLElBQWhCOztBQUVBLGVBQU80RixHQUFQO0FBQ0QsT0FsQkQ7QUFtQkQ7O0FBRUQ7Ozs7Ozs7Ozs2QkFNU2hTLEksRUFBTTtBQUNiLFVBQUk0UCxPQUFPLGdCQUFNekIsaUJBQU4sQ0FBd0JuTyxJQUF4QixFQUE4QixLQUFLZ0ssVUFBbkMsQ0FBWDs7QUFFQSxVQUFHLENBQUM0RixJQUFELElBQVMsQ0FBQ0EsS0FBSzZCLE1BQWxCLEVBQTBCO0FBQ3hCO0FBQ0Q7O0FBRUQsV0FBSSxJQUFJclAsSUFBSSxDQUFSLEVBQVdDLElBQUl1TixLQUFLNkIsTUFBTCxDQUFZMU8sTUFBL0IsRUFBdUNYLElBQUlDLENBQTNDLEVBQThDRCxHQUE5QyxFQUFtRDtBQUNqRCxZQUFJakIsT0FBT3lPLEtBQUs2QixNQUFMLENBQVlyUCxDQUFaLEVBQWVqQixJQUExQjs7QUFFQSxhQUFLcVQsb0JBQUwsQ0FBMEJyVCxJQUExQixFQUFnQ25CLElBQWhDO0FBQ0Q7O0FBRUQsc0JBQU15UyxvQkFBTixDQUEyQnpTLElBQTNCLEVBQWlDLEtBQUtnSyxVQUF0QyxFQUFrRCxVQUFDbEgsS0FBRCxFQUFXO0FBQzNELFlBQUdrQixPQUFPaEUsSUFBUCxDQUFZOEMsS0FBWixFQUFtQkMsTUFBbkIsR0FBNEIsQ0FBL0IsRUFBa0M7QUFDaENELGdCQUFNMk8sTUFBTixHQUFlLEVBQWY7O0FBRUEsaUJBQU8sS0FBUDtBQUNEOztBQUVELGVBQU8sSUFBUDtBQUNELE9BUkQ7QUFTRDs7QUFFRDs7Ozs7Ozs7O29DQU1nQmdELEssRUFBTztBQUNyQixVQUFJMUMsU0FBUyxTQUFUQSxNQUFTLENBQUNDLEdBQUQsRUFBUztBQUNwQixhQUFJLElBQUk5UCxDQUFSLElBQWE4UCxHQUFiLEVBQWtCO0FBQ2hCLGNBQUcsQ0FBQ0EsSUFBSTdQLGNBQUosQ0FBbUJELENBQW5CLENBQUosRUFBMkI7QUFDekI7QUFDRDs7QUFFRCxjQUFHQSxLQUFLLFFBQVIsRUFBa0I7QUFDaEIsZ0JBQUlrSyxPQUFPNEYsSUFBSTlQLENBQUosS0FBVSxFQUFyQjtBQUNBLGdCQUFJRyxJQUFJK0osS0FBS3JKLE1BQWI7O0FBRUEsaUJBQUksSUFBSVgsSUFBSSxDQUFaLEVBQWVBLElBQUlDLENBQW5CLEVBQXNCRCxHQUF0QixFQUEyQjtBQUN6QixrQkFBSXdOLE9BQU94RCxLQUFLaEssQ0FBTCxDQUFYOztBQUVBLGtCQUFHcVMsTUFBTTVLLE9BQU4sQ0FBYytGLEtBQUt6TyxJQUFuQixLQUE0QixDQUFDLENBQWhDLEVBQW1DO0FBQ2pDaUwscUJBQUs5RSxNQUFMLENBQVlsRixDQUFaLEVBQWUsQ0FBZjtBQUNBQTtBQUNBQztBQUNEO0FBQ0Y7O0FBRUQsZ0JBQUcsQ0FBQ0EsQ0FBSixFQUFPO0FBQ0wscUJBQU8yUCxJQUFJOVAsQ0FBSixDQUFQO0FBQ0Q7QUFDRixXQWpCRCxNQWtCSztBQUNINlAsbUJBQU9DLElBQUk5UCxDQUFKLENBQVA7QUFDRDtBQUNGO0FBQ0YsT0E1QkQ7O0FBOEJBNlAsYUFBTyxLQUFLL0gsVUFBWjtBQUNBLFdBQUswSyxvQkFBTDtBQUNEOztBQUVEOzs7Ozs7Ozs7eUNBTXFCMUMsRyxFQUFLO0FBQ3hCLFVBQUkyQyxRQUFRLFNBQVJBLEtBQVEsQ0FBQzNDLEdBQUQsRUFBTXhHLE1BQU4sRUFBYzNGLEdBQWQsRUFBc0I7QUFDaEMsYUFBSSxJQUFJM0QsQ0FBUixJQUFhOFAsR0FBYixFQUFrQjtBQUNoQixjQUFHLENBQUNBLElBQUk3UCxjQUFKLENBQW1CRCxDQUFuQixDQUFKLEVBQTJCO0FBQ3pCO0FBQ0Q7O0FBRUQsY0FBSVcsTUFBTW1QLElBQUk5UCxDQUFKLENBQVY7O0FBRUEsY0FBR0EsS0FBSyxRQUFMLEtBQWtCLENBQUNXLEdBQUQsSUFBUSxDQUFDQSxJQUFJRSxNQUEvQixDQUFILEVBQTJDO0FBQ3pDLG1CQUFPaVAsSUFBSTlQLENBQUosQ0FBUDtBQUNELFdBRkQsTUFHSyxJQUFHQSxLQUFLLFFBQVIsRUFBa0I7QUFDckIsZ0JBQUcsQ0FBQzhCLE9BQU9oRSxJQUFQLENBQVlnUyxJQUFJOVAsQ0FBSixDQUFaLEVBQW9CYSxNQUF4QixFQUFnQztBQUM5QixxQkFBT2lQLElBQUk5UCxDQUFKLENBQVA7QUFDRCxhQUZELE1BR0s7QUFDSHlTLG9CQUFNM0MsSUFBSTlQLENBQUosQ0FBTixFQUFjOFAsR0FBZCxFQUFtQjlQLENBQW5CO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFlBQUcsQ0FBQzhCLE9BQU9oRSxJQUFQLENBQVlnUyxHQUFaLEVBQWlCalAsTUFBbEIsSUFBNEJ5SSxNQUEvQixFQUF1QztBQUNyQyxpQkFBT0EsT0FBTzNGLEdBQVAsQ0FBUDtBQUNEO0FBQ0YsT0F4QkQ7O0FBMEJBOE8sWUFBTTNDLE9BQU8sS0FBS2hJLFVBQWxCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7O3VDQUttQjtBQUNqQixVQUFJbEQsU0FBUyxTQUFUQSxNQUFTLENBQUNuQyxRQUFELEVBQWM7QUFDekIsYUFBSSxJQUFJdkMsSUFBSSxDQUFaLEVBQWVBLElBQUl1QyxTQUFTNUIsTUFBNUIsRUFBb0NYLEdBQXBDLEVBQXlDO0FBQ3ZDLGNBQUl3QyxRQUFRRCxTQUFTdkMsQ0FBVCxDQUFaOztBQUVBMEUsaUJBQU9sQyxNQUFNdkQsT0FBTixDQUFjZ0osVUFBckI7QUFDQXpGLGdCQUFNdkQsT0FBTixDQUFjdVQsUUFBZDtBQUNBeFM7QUFDRDtBQUNGLE9BUkQ7O0FBVUEwRSxhQUFPLEtBQUt1RCxVQUFaO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OytCQUtXO0FBQ1QsV0FBSzBELFFBQUw7QUFDQSxXQUFLL0MsS0FBTCxDQUFXNkosU0FBWCxJQUF3QixLQUFLN0osS0FBTCxDQUFXNkosU0FBWCxDQUFxQjlJLE9BQXJCLEVBQXhCO0FBQ0EsV0FBSytJLE9BQUw7QUFDQSxzQkFBTW5VLFdBQU4sQ0FBa0IsS0FBSzhMLE9BQUwsQ0FBYWxNLE1BQS9CO0FBQ0EsV0FBS0wsRUFBTCxDQUFRNEcsTUFBUjtBQUNEOztBQUVEOzs7Ozs7OzsrQkFLVztBQUNULFVBQUcsS0FBS3FFLGdCQUFMLElBQXlCLENBQUMsS0FBS0QsbUJBQWxDLEVBQXVEO0FBQ3JELGFBQUtDLGdCQUFMLENBQXNCOUosT0FBdEIsQ0FBOEJpUyxlQUE5QixDQUE4QyxHQUFHcE0sS0FBSCxDQUFTQyxJQUFULENBQWMsS0FBS2pILEVBQUwsQ0FBUW1OLFVBQXRCLENBQTlDO0FBQ0Q7O0FBRUQsVUFBRyxLQUFLdk0sUUFBUixFQUFrQjtBQUNoQixhQUFLQSxRQUFMLENBQWNPLE9BQWQsQ0FBc0IwVCxhQUF0QixDQUFvQyxLQUFLN1UsRUFBekM7QUFDRDtBQUNGOztBQUVEOzs7Ozs7OztnQ0FLWTtBQUNWLFdBQUs4VSxnQkFBTDtBQUNBLFdBQUtKLFFBQUw7QUFDRDs7QUFFRDs7Ozs7Ozs7OEJBS1U7QUFDUixVQUFJSCxRQUFRLEVBQVo7O0FBRUEsV0FBS08sZ0JBQUw7O0FBRUEsVUFBSUMsT0FBTyxTQUFQQSxJQUFPLENBQUN0USxRQUFELEVBQWM7QUFDdkIsYUFBSSxJQUFJdkMsSUFBSSxDQUFSLEVBQVdDLElBQUlzQyxTQUFTNUIsTUFBNUIsRUFBb0NYLElBQUlDLENBQXhDLEVBQTJDRCxHQUEzQyxFQUFnRDtBQUM5QyxjQUFJd0MsUUFBUUQsU0FBU3ZDLENBQVQsQ0FBWjs7QUFFQSxjQUFHd0MsTUFBTTZHLFFBQU4sSUFBa0IsQ0FBckIsRUFBd0I7QUFDdEJnSixrQkFBTW5ULElBQU4sQ0FBV3NELEtBQVg7QUFDRCxXQUZELE1BR0ssSUFBR0EsTUFBTTZHLFFBQU4sSUFBa0IsQ0FBbEIsSUFBdUIsQ0FBQzdHLE1BQU12RCxPQUFqQyxFQUEwQztBQUM3QyxpQkFBSyxJQUFJYSxJQUFJLENBQVIsRUFBVzhJLFFBQVFwRyxNQUFNeUksVUFBekIsRUFBcUNxRSxJQUFJMUcsTUFBTWpJLE1BQXBELEVBQTREYixJQUFJd1AsQ0FBaEUsRUFBbUV4UCxHQUFuRSxFQUF3RTtBQUN0RXVTLG9CQUFNblQsSUFBTixDQUFXMEosTUFBTTVJLENBQU4sQ0FBWDtBQUNEOztBQUVENlMsaUJBQUtyUSxNQUFNaUgsVUFBWDtBQUNEO0FBQ0Y7QUFDRixPQWZEOztBQWlCQW9KLFdBQUssS0FBSy9VLEVBQUwsQ0FBUTJMLFVBQWI7QUFDQSxXQUFLeUgsZUFBTCxDQUFxQm1CLEtBQXJCO0FBQ0EsV0FBS3ZVLEVBQUwsQ0FBUXdCLFNBQVIsR0FBb0IsRUFBcEI7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7O2tDQVNvRDtBQUFBLFVBQXhDeUMsUUFBd0MsdUVBQTdCLEVBQTZCO0FBQUEsVUFBekIrUSxPQUF5Qix1RUFBZixLQUFlO0FBQUEsVUFBUkMsTUFBUTs7QUFDbEQsVUFBSWxVLE1BQU0sRUFBVjtBQUNBLFVBQUltVSxRQUFRLENBQVo7O0FBRUEsVUFBR0QsV0FBV3pTLFNBQVgsSUFBd0IsQ0FBQ2lELE1BQU0wUCxPQUFOLENBQWNGLE1BQWQsQ0FBNUIsRUFBbUQ7QUFDakRBLGlCQUFTLENBQUNBLE1BQUQsQ0FBVDtBQUNEOztBQUVELFVBQUlGLE9BQU8sU0FBUEEsSUFBTyxDQUFDekosTUFBRCxFQUFZO0FBQ3JCLFlBQUcsQ0FBQ0EsTUFBSixFQUFZO0FBQ1Y7QUFDRDs7QUFFRCxZQUFHLENBQUMySixNQUFELElBQVdBLE9BQU90TCxPQUFQLENBQWV1TCxLQUFmLEtBQXlCLENBQUMsQ0FBeEMsRUFBMkM7QUFDekMsY0FBSSxDQUFDalIsUUFBRCxJQUFhcUgsT0FBT25LLE9BQVAsQ0FBZTZDLE9BQWYsQ0FBdUJDLFFBQXZCLENBQWpCLEVBQW1EO0FBQ2pELGdCQUFJLENBQUMrUSxPQUFMLEVBQWM7QUFDWmpVLGtCQUFJSyxJQUFKLENBQVNrSyxPQUFPbkssT0FBaEI7O0FBRUE7QUFDRDs7QUFFREosZ0JBQUlLLElBQUosQ0FBU2tLLE9BQU9uSyxPQUFoQjtBQUNEO0FBQ0Y7O0FBRUQrVDtBQUNBSCxhQUFLekosT0FBT25LLE9BQVAsQ0FBZVAsUUFBcEI7QUFDRCxPQW5CRDs7QUFxQkFtVSxXQUFLLEtBQUtuVSxRQUFWOztBQUVBLGFBQU9vVSxVQUFTalUsR0FBVCxHQUFlQSxJQUFJLENBQUosS0FBVSxJQUFoQztBQUNEOztBQUVEOzs7Ozs7Ozs7Ozs7b0NBU3FEO0FBQUEsVUFBdkNrRCxRQUF1Qyx1RUFBNUIsRUFBNEI7QUFBQSxVQUF4QitRLE9BQXdCLHVFQUFkLElBQWM7QUFBQSxVQUFSQyxNQUFROztBQUNuRCxVQUFJbFUsTUFBTSxFQUFWO0FBQ0EsVUFBSW1VLFFBQVEsQ0FBWjs7QUFFQSxVQUFHRCxXQUFXelMsU0FBWCxJQUF3QixDQUFDaUQsTUFBTTBQLE9BQU4sQ0FBY0YsTUFBZCxDQUE1QixFQUFtRDtBQUNqREEsaUJBQVMsQ0FBQ0EsTUFBRCxDQUFUO0FBQ0Q7O0FBRUQsVUFBSUYsT0FBTyxTQUFQQSxJQUFPLENBQUN0USxRQUFELEVBQWM7QUFDdkIsYUFBSSxJQUFJdkMsSUFBSSxDQUFSLEVBQVdDLElBQUlzQyxTQUFTNUIsTUFBNUIsRUFBb0NYLElBQUlDLENBQXhDLEVBQTJDRCxHQUEzQyxFQUFnRDtBQUM5QyxjQUFJd0MsUUFBUUQsU0FBU3ZDLENBQVQsQ0FBWjs7QUFFQSxjQUFHLENBQUMrUyxNQUFELElBQVdBLE9BQU90TCxPQUFQLENBQWV1TCxLQUFmLEtBQXlCLENBQUMsQ0FBeEMsRUFBMkM7QUFDekMsZ0JBQUcsQ0FBQ2pSLFFBQUQsSUFBYVMsTUFBTXZELE9BQU4sQ0FBYzZDLE9BQWQsQ0FBc0JDLFFBQXRCLENBQWhCLEVBQWlEO0FBQy9DLGtCQUFHLENBQUMrUSxPQUFKLEVBQWE7QUFDWGpVLG9CQUFJSyxJQUFKLENBQVNzRCxNQUFNdkQsT0FBZjs7QUFFQTtBQUNEOztBQUVESixrQkFBSUssSUFBSixDQUFTc0QsTUFBTXZELE9BQWY7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQrVDs7QUFFQSxhQUFJLElBQUloVCxNQUFJLENBQVIsRUFBV0MsTUFBSXNDLFNBQVM1QixNQUE1QixFQUFvQ1gsTUFBSUMsR0FBeEMsRUFBMkNELEtBQTNDLEVBQWdEO0FBQzlDNlMsZUFBS3RRLFNBQVN2QyxHQUFULEVBQVlmLE9BQVosQ0FBb0JnSixVQUF6QjtBQUNEO0FBQ0YsT0F0QkQ7O0FBd0JBNEssV0FBSyxLQUFLNUssVUFBVjs7QUFFQSxhQUFPNkssVUFBU2pVLEdBQVQsR0FBZUEsSUFBSSxDQUFKLEtBQVUsSUFBaEM7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7O2dDQVN3RDtBQUFBLFVBQTlDa0QsUUFBOEMsdUVBQW5DLEVBQW1DO0FBQUEsVUFBL0IrUSxPQUErQix1RUFBckIsSUFBcUI7QUFBQSxVQUFmSSxLQUFlLHVFQUFQLEtBQU87O0FBQ3RELFVBQUcsQ0FBQyxLQUFLeFUsUUFBVCxFQUFtQjtBQUNqQixlQUFPLElBQVA7QUFDRDs7QUFFRCxVQUFJeVUsZ0JBQWdCLEtBQUt6VSxRQUFMLENBQWNPLE9BQWQsQ0FBc0JnSixVQUF0QixDQUFpQ25ELEtBQWpDLEVBQXBCO0FBQ0EsVUFBSWpHLE1BQU0sRUFBVjs7QUFFQXFVLGVBQVNDLGNBQWNDLE9BQWQsRUFBVDs7QUFFQSxXQUFJLElBQUlwVCxJQUFJLENBQVIsRUFBV0MsSUFBSWtULGNBQWN4UyxNQUFqQyxFQUF5Q1gsSUFBSUMsQ0FBN0MsRUFBZ0RELEdBQWhELEVBQXFEO0FBQ25ELFlBQUlsQyxLQUFLcVYsY0FBY25ULENBQWQsQ0FBVDs7QUFFQSxZQUFHbEMsT0FBTyxLQUFLQSxFQUFmLEVBQW1CO0FBQ2pCO0FBQ0Q7O0FBRUQsWUFBRyxDQUFDaUUsUUFBRCxJQUFhakUsR0FBR21CLE9BQUgsQ0FBVzZDLE9BQVgsQ0FBbUJDLFFBQW5CLENBQWhCLEVBQThDO0FBQzVDbEQsY0FBSUssSUFBSixDQUFTcEIsR0FBR21CLE9BQVo7QUFDRDtBQUNGOztBQUVESixVQUFJdVUsT0FBSjs7QUFFQSxVQUFHLENBQUNOLE9BQUosRUFBYTtBQUNYLGVBQU9qVSxJQUFJOEIsTUFBSixHQUFZOUIsSUFBSSxDQUFKLENBQVosR0FBb0IsSUFBM0I7QUFDRDs7QUFFRCxhQUFPQSxHQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs0QkFNUWtELFEsRUFBVTtBQUNoQixVQUFHLE9BQU9BLFFBQVAsSUFBbUIsVUFBdEIsRUFBa0M7QUFDaEMsZUFBT0EsU0FBUyxJQUFULENBQVA7QUFDRDs7QUFFRCxhQUFPLEtBQUtqRSxFQUFMLENBQVFnRSxPQUFSLENBQWdCQyxRQUFoQixDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7NkJBTzhCO0FBQUEsVUFBdkJBLFFBQXVCLHVFQUFaLEVBQVk7QUFBQSxVQUFSZ1IsTUFBUTs7QUFDNUIsYUFBTyxLQUFLTSxXQUFMLENBQWlCdFIsUUFBakIsRUFBMkIsS0FBM0IsRUFBa0NnUixNQUFsQyxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7OEJBTytCO0FBQUEsVUFBdkJoUixRQUF1Qix1RUFBWixFQUFZO0FBQUEsVUFBUmdSLE1BQVE7O0FBQzdCLGFBQU8sS0FBS00sV0FBTCxDQUFpQnRSLFFBQWpCLEVBQTJCLElBQTNCLEVBQWlDZ1IsTUFBakMsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7OzRCQU82QjtBQUFBLFVBQXZCaFIsUUFBdUIsdUVBQVosRUFBWTtBQUFBLFVBQVJnUixNQUFROztBQUMzQixhQUFPLEtBQUtPLGFBQUwsQ0FBbUJ2UixRQUFuQixFQUE2QixLQUE3QixFQUFvQ2dSLE1BQXBDLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7OzsrQkFPZ0M7QUFBQSxVQUF2QmhSLFFBQXVCLHVFQUFaLEVBQVk7QUFBQSxVQUFSZ1IsTUFBUTs7QUFDOUIsYUFBTyxLQUFLTyxhQUFMLENBQW1CdlIsUUFBbkIsRUFBNkIsSUFBN0IsRUFBbUNnUixNQUFuQyxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs2QkFNc0I7QUFBQSxVQUFmaFIsUUFBZSx1RUFBSixFQUFJOztBQUNwQixhQUFPLEtBQUt3UixTQUFMLENBQWV4UixRQUFmLEVBQXlCLElBQXpCLEVBQStCLEtBQS9CLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7OzRCQU1xQjtBQUFBLFVBQWZBLFFBQWUsdUVBQUosRUFBSTs7QUFDbkIsYUFBTyxLQUFLd1IsU0FBTCxDQUFleFIsUUFBZixFQUF5QixJQUF6QixFQUErQixJQUEvQixDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OzsyQkFNb0I7QUFBQSxVQUFmQSxRQUFlLHVFQUFKLEVBQUk7O0FBQ2xCLGFBQU8sS0FBS3dSLFNBQUwsQ0FBZXhSLFFBQWYsRUFBeUIsS0FBekIsRUFBZ0MsS0FBaEMsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7MkJBTW9CO0FBQUEsVUFBZkEsUUFBZSx1RUFBSixFQUFJOztBQUNsQixhQUFPLEtBQUt3UixTQUFMLENBQWV4UixRQUFmLEVBQXlCLEtBQXpCLEVBQWdDLElBQWhDLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7NkJBS1NxSCxNLEVBQVE7QUFDZkEsYUFBT29LLFdBQVAsQ0FBbUIsS0FBSzFWLEVBQXhCOztBQUVBLGFBQU8sZ0JBQU1xRSxPQUFOLENBQWMsS0FBS3JFLEVBQW5CLEVBQXVCLEVBQUVrRCxXQUFXLElBQWIsRUFBdkIsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7NkJBR1M7QUFDUCxXQUFLaUIsV0FBTCxHQUFtQixJQUFuQjtBQUNEOztBQUVEOzs7Ozs7Ozs0QkFLUTtBQUNOLGFBQU8sS0FBS3dSLE9BQUwsQ0FBYTdQLEtBQWIsQ0FBbUIsSUFBbkIsRUFBeUJnQixTQUF6QixDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OzZCQUtTO0FBQ1AsYUFBTyxLQUFLOE8sU0FBTCxDQUFlOVAsS0FBZixDQUFxQixJQUFyQixFQUEyQmdCLFNBQTNCLENBQVA7QUFDRDs7OzhCQUVTLENBQUU7OzsrQkFDRCxDQUFFOzs7aUNBQ0EsQ0FBRTs7OzRCQUNQbkIsRyxFQUFLL0MsSyxFQUFPLENBQUU7OzsrQkFDWCxDQUFFOzs7OEJBQ0gsQ0FBRTs7Ozs7O0FBM3RET3NCLFMsQ0FFWkYsTyxHQUFVLEU7QUFGRUUsUyxDQUdaOEksaUIsR0FBb0IsRTtBQUhSOUksUyxDQUlaeUksTSxHQUFTLEU7QUFKR3pJLFMsQ0FLWndJLGlCLEdBQW9CLEs7QUFMUnhJLFMsQ0FNWjBKLFcsR0FBYyxLO0FBTkYxSixTLENBT1o1QyxRLEdBQVcsRTtBQVBDNEMsUyxDQVFaNkgsVyxHQUFjLEU7QUFSRjdILFMsQ0FTWjlELEssR0FBUSxJO2tCQVRJOEQsUztBQTR0RHBCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcHVERDs7Ozs7Ozs7QUFFQSxJQUFNbUUsUUFBUSxFQUFkOztBQUVBOzs7Ozs7Ozs7O0FBVUFBLE1BQU13TixLQUFOLEdBQWMsVUFBVS9ELEdBQVYsRUFBZTtBQUMzQixNQUFHLENBQUNBLEdBQUQsSUFBUSxRQUFPQSxHQUFQLHlDQUFPQSxHQUFQLE9BQWUsUUFBMUIsRUFBb0M7QUFDbEMsV0FBTyxFQUFQO0FBQ0Q7O0FBRUQsTUFBSWdFLFVBQVUsRUFBZDs7QUFFQSxPQUFJLElBQUk5VCxDQUFSLElBQWE4UCxHQUFiLEVBQWtCO0FBQ2hCLFFBQUcsQ0FBQ0EsSUFBSTdQLGNBQUosQ0FBbUJELENBQW5CLENBQUosRUFBMkI7QUFDekI7QUFDRDs7QUFFRCxRQUFJVyxNQUFNbVAsSUFBSTlQLENBQUosQ0FBVjs7QUFFQVcsV0FBT21ULFFBQVExVSxJQUFSLENBQWFZLENBQWIsQ0FBUDtBQUNEOztBQUVELFNBQU84VCxRQUFRNVYsSUFBUixDQUFhLEdBQWIsQ0FBUDtBQUNELENBbEJEOztBQW9CQTs7Ozs7Ozs7OztBQVVBbUksTUFBTTBOLEtBQU4sR0FBYyxVQUFTakUsR0FBVCxFQUFjO0FBQzFCLE1BQUcsQ0FBQ0EsR0FBRCxJQUFRLFFBQU9BLEdBQVAseUNBQU9BLEdBQVAsT0FBZSxRQUExQixFQUFvQztBQUNsQyxXQUFPLEVBQVA7QUFDRDs7QUFFRCxNQUFJa0UsU0FBUyxFQUFiOztBQUVBLE9BQUksSUFBSWhVLENBQVIsSUFBYThQLEdBQWIsRUFBa0I7QUFDaEIsUUFBRyxDQUFDQSxJQUFJN1AsY0FBSixDQUFtQkQsQ0FBbkIsQ0FBSixFQUEyQjtBQUN6QjtBQUNEOztBQUVELFFBQUlXLE1BQU1tUCxJQUFJOVAsQ0FBSixDQUFWOztBQUVBVyxXQUFPcVQsT0FBTzVVLElBQVAsQ0FBZSxLQUFLbUMsVUFBTCxDQUFnQnZCLENBQWhCLENBQWYsU0FBcUNXLEdBQXJDLENBQVA7QUFDRDs7QUFFRCxTQUFPcVQsT0FBTzlWLElBQVAsQ0FBWSxHQUFaLENBQVA7QUFDRCxDQWxCRDs7QUFvQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkFtSSxNQUFNNE4sTUFBTixHQUFlLFVBQVVsVixHQUFWLEVBQWVtVixPQUFmLEVBQW1DO0FBQUEsTUFBWHBXLElBQVcsdUVBQUosRUFBSTs7QUFDaEQsTUFBSWdDLE1BQU0sRUFBVjs7QUFFQSxNQUFHLENBQUMyRCxNQUFNMFAsT0FBTixDQUFjclYsSUFBZCxDQUFKLEVBQXlCO0FBQ3ZCQSxXQUFPLENBQUNBLElBQUQsQ0FBUDtBQUNEOztBQUVELE1BQUcsQ0FBQ29XLE9BQUosRUFBYTtBQUNYLHdDQUFXblYsR0FBWDtBQUNEOztBQUVELE9BQUksSUFBSW1CLElBQUksQ0FBUixFQUFXQyxJQUFJcEIsSUFBSThCLE1BQXZCLEVBQStCWCxJQUFJQyxDQUFuQyxFQUFzQ0QsR0FBdEMsRUFBMkM7QUFDekMsUUFBSWlVLE9BQU9wVixJQUFJbUIsQ0FBSixDQUFYO0FBQ0EsUUFBSVMsTUFBTTdDLEtBQUsrQyxNQUFMLEdBQWEsS0FBS29MLGlCQUFMLENBQXVCbk8sSUFBdkIsRUFBNkJxVyxJQUE3QixDQUFiLEdBQWlEQSxJQUEzRDs7QUFFQSxRQUFHLENBQUN4VCxHQUFKLEVBQVM7QUFDUDtBQUNEOztBQUVEQSxXQUFPLEVBQVA7O0FBRUEsUUFBSSxPQUFPdVQsT0FBUCxJQUFrQixVQUFuQixJQUFrQ0EsUUFBUUMsSUFBUixDQUFyQyxFQUFvRDtBQUNsRHJVLFVBQUlWLElBQUosQ0FBUytVLElBQVQ7QUFDRCxLQUZELE1BR0ssSUFBR3hULElBQUl5VCxLQUFKLENBQVVGLFdBQVcsRUFBckIsQ0FBSCxFQUE2QjtBQUNoQ3BVLFVBQUlWLElBQUosQ0FBUytVLElBQVQ7QUFDRDtBQUNGOztBQUVELFNBQU9yVSxHQUFQO0FBQ0QsQ0E5QkQ7O0FBZ0NBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDQXVHLE1BQU1nTyxJQUFOLEdBQWEsVUFBU3RWLEdBQVQsRUFBdUM7QUFBQTs7QUFBQSxNQUF6QmpCLElBQXlCLHVFQUFsQixJQUFrQjtBQUFBLE1BQVp3VyxLQUFZLHVFQUFKLEVBQUk7O0FBQ2xEdlYscUNBQVVBLEdBQVY7O0FBRUEsTUFBR2pCLFNBQVMsSUFBWixFQUFrQjtBQUNoQkEsV0FBTyxFQUFQO0FBQ0F3VyxZQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0QsR0FIRCxNQUlLLElBQUd4VyxTQUFTLEtBQVosRUFBbUI7QUFDdEJBLFdBQU8sRUFBUDtBQUNBd1csWUFBUSxDQUFDLEtBQUQsQ0FBUjtBQUNEOztBQUVELE1BQUcsQ0FBQzdRLE1BQU0wUCxPQUFOLENBQWNyVixJQUFkLENBQUosRUFBeUI7QUFDdkJBLFdBQU8sQ0FBQ0EsSUFBRCxDQUFQO0FBQ0Q7O0FBRUQsTUFBRyxDQUFDMkYsTUFBTTBQLE9BQU4sQ0FBY21CLEtBQWQsQ0FBSixFQUEwQjtBQUN4QkEsWUFBUSxDQUFDQSxLQUFELENBQVI7QUFDRDs7QUFFRCxNQUFJblUsSUFBSXJDLEtBQUsrQyxNQUFiOztBQUVBOUIsTUFBSXNWLElBQUosQ0FBUyxVQUFDRSxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNqQixRQUFJdFUsSUFBSSxDQUFSOztBQUVBLFFBQUlsQixRQUFRLFNBQVJBLEtBQVEsQ0FBQ3VWLENBQUQsRUFBSUMsQ0FBSixFQUEyQjtBQUFBLFVBQXBCbEIsT0FBb0IsdUVBQVYsS0FBVTs7QUFDckMsVUFBR2lCLGFBQWFFLElBQWhCLEVBQXNCO0FBQ3BCRixZQUFJQSxFQUFFRyxPQUFGLEVBQUo7QUFDRDs7QUFFRCxVQUFHRixhQUFhQyxJQUFoQixFQUFzQjtBQUNwQkQsWUFBSUEsRUFBRUUsT0FBRixFQUFKO0FBQ0Q7O0FBRUQsVUFBR0gsSUFBSUMsQ0FBUCxFQUFVO0FBQ1IsZUFBT2xCLFVBQVMsQ0FBQyxDQUFWLEdBQWEsQ0FBcEI7QUFDRCxPQUZELE1BR0ssSUFBR2lCLElBQUlDLENBQVAsRUFBVTtBQUNiLGVBQU9sQixVQUFTLENBQVQsR0FBWSxDQUFDLENBQXBCO0FBQ0Q7O0FBRUQsYUFBTyxDQUFQO0FBQ0QsS0FqQkQ7O0FBbUJBLFFBQUlxQixPQUFPLFNBQVBBLElBQU8sR0FBTTtBQUNmLFVBQUd6VSxLQUFLQyxDQUFSLEVBQVc7QUFDVCxlQUFPLENBQVA7QUFDRDs7QUFFRCxVQUFJd0QsTUFBTTdGLEtBQUtvQyxDQUFMLENBQVY7O0FBRUEsVUFBRyxDQUFDdUQsTUFBTTBQLE9BQU4sQ0FBY3hQLEdBQWQsQ0FBSixFQUF3QjtBQUN0QkEsY0FBTSxDQUFDQSxHQUFELENBQU47QUFDRDs7QUFFRCxVQUFJaVIsS0FBSyxNQUFLM0ksaUJBQUwsQ0FBdUJ0SSxHQUF2QixFQUE0QjRRLENBQTVCLENBQVQ7QUFDQSxVQUFJTSxLQUFLLE1BQUs1SSxpQkFBTCxDQUF1QnRJLEdBQXZCLEVBQTRCNlEsQ0FBNUIsQ0FBVDtBQUNBLFVBQUkxVSxNQUFNZCxNQUFNNFYsRUFBTixFQUFVQyxFQUFWLEVBQWNQLE1BQU1wVSxDQUFOLE1BQWEsS0FBM0IsQ0FBVjs7QUFFQSxVQUFHSixRQUFRLENBQVgsRUFBYztBQUNaLGVBQU9BLEdBQVA7QUFDRDs7QUFFREk7O0FBRUEsYUFBT3lVLE1BQVA7QUFDRCxLQXRCRDs7QUF3QkEsUUFBRyxDQUFDeFUsQ0FBSixFQUFPO0FBQ0wsYUFBT25CLE1BQU11VixDQUFOLEVBQVNDLENBQVQsRUFBWUYsTUFBTXBVLENBQU4sTUFBYSxLQUF6QixDQUFQO0FBQ0Q7O0FBRUQsV0FBT3lVLE1BQVA7QUFDRCxHQW5ERDs7QUFxREEsU0FBTzVWLEdBQVA7QUFDRCxDQTVFRDs7QUE4RUE7Ozs7OztBQU1Bc0gsTUFBTW9ILFlBQU4sR0FBcUIsVUFBUzlNLEdBQVQsRUFBYztBQUNqQyxTQUFPLENBQUMsRUFBRUEsT0FBTyxRQUFPQSxHQUFQLHlDQUFPQSxHQUFQLE1BQWMsUUFBckIsSUFBaUNBLElBQUlrRCxTQUF2QyxDQUFSO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7O0FBTUF3QyxNQUFNdUwsYUFBTixHQUFzQixVQUFTOUIsR0FBVCxFQUFjO0FBQ2xDLFNBQU8sQ0FBQyxFQUFFQSxPQUFPLFFBQU9BLEdBQVAseUNBQU9BLEdBQVAsTUFBYyxRQUFyQixLQUFrQ0EsSUFBSTFMLFdBQUosSUFBbUJ0QyxNQUFuQixJQUE2QmdPLElBQUkxTCxXQUFKLElBQW1CWCxLQUFsRixDQUFGLENBQVI7QUFDRCxDQUZEOztBQUlBOzs7Ozs7O0FBT0E0QyxNQUFNOEYsSUFBTixHQUFhLFVBQVN2TCxLQUFULEVBQStCO0FBQUEsTUFBZmtVLE1BQWUsdUVBQU4sSUFBTTs7QUFDMUMsTUFBRyxRQUFPbFUsS0FBUCx5Q0FBT0EsS0FBUCxNQUFnQixRQUFoQixJQUE0QixDQUFDQSxLQUFoQyxFQUF1QztBQUNyQyxXQUFPQSxLQUFQO0FBQ0Q7O0FBRUQsV0FBUytULElBQVQsQ0FBYzdFLEdBQWQsRUFBbUI7QUFDakJBLFVBQU1yTSxNQUFNMFAsT0FBTixDQUFjckQsR0FBZCxpQ0FBd0JBLEdBQXhCLGtCQUFrQ0EsR0FBbEMsQ0FBTjs7QUFFQSxRQUFHLENBQUNnRixNQUFKLEVBQVk7QUFDVixhQUFPaEYsR0FBUDtBQUNEOztBQUVELFNBQUksSUFBSTlQLENBQVIsSUFBYThQLEdBQWIsRUFBa0I7QUFDaEIsVUFBRyxDQUFDQSxJQUFJN1AsY0FBSixDQUFtQkQsQ0FBbkIsQ0FBSixFQUEyQjtBQUN6QjtBQUNEOztBQUVELFVBQUc4UCxJQUFJOVAsQ0FBSixLQUFVLFFBQU84UCxJQUFJOVAsQ0FBSixDQUFQLEtBQWlCLFFBQTlCLEVBQXdDO0FBQ3RDOFAsWUFBSTlQLENBQUosSUFBUzJVLEtBQUs3RSxJQUFJOVAsQ0FBSixDQUFMLENBQVQ7QUFDRDtBQUNGOztBQUVELFdBQU84UCxHQUFQO0FBQ0Q7O0FBRUQsU0FBTzZFLEtBQUsvVCxLQUFMLENBQVA7QUFDRCxDQTFCRDs7QUE0QkE7Ozs7OztBQU1BeUYsTUFBTTBILGtCQUFOLEdBQTJCLFVBQVNuTixLQUFULEVBQWdCO0FBQ3pDLE1BQUdBLFVBQVUsS0FBVixJQUFtQkEsVUFBVSxJQUE3QixJQUFxQ0EsVUFBVUosU0FBbEQsRUFBNkQ7QUFDM0QsV0FBTyxFQUFQO0FBQ0Q7O0FBRUQsTUFBR0ksdUNBQUgsRUFBa0M7QUFDaEMsV0FBTyxnQkFBUDtBQUNEOztBQUVELE1BQUcsT0FBT0EsS0FBUCxJQUFnQixVQUFuQixFQUErQjtBQUM3QixXQUFPLG1CQUFQO0FBQ0Q7O0FBRUQsTUFBRyxRQUFPQSxLQUFQLHlDQUFPQSxLQUFQLE1BQWdCLFFBQW5CLEVBQTZCO0FBQzNCLFdBQU9rQixPQUFPNEIsU0FBUCxDQUFpQnpGLFFBQWpCLENBQTBCZ0gsSUFBMUIsQ0FBK0JyRSxLQUEvQixDQUFQO0FBQ0Q7O0FBRUQsU0FBT0EsUUFBUSxFQUFmO0FBQ0QsQ0FsQkQ7O0FBb0JBOzs7Ozs7O0FBT0F5RixNQUFNME8sT0FBTixHQUFnQixVQUFVUixDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDOUIsTUFBSUQsYUFBYUUsSUFBZCxJQUF3QkQsYUFBYUMsSUFBeEMsRUFBK0M7QUFDN0MsV0FBT0YsRUFBRUcsT0FBRixPQUFnQkYsRUFBRUUsT0FBRixFQUF2QjtBQUNEO0FBQ0QsTUFBRyxPQUFPSCxDQUFQLElBQVksVUFBWixJQUEwQixPQUFPQyxDQUFQLElBQVksVUFBekMsRUFBcUQ7QUFDbkQsV0FBT0QsRUFBRXRXLFFBQUYsT0FBaUJ1VyxFQUFFdlcsUUFBRixFQUF4QjtBQUNELEdBRkQsTUFHSyxJQUFHLFFBQU9zVyxDQUFQLHlDQUFPQSxDQUFQLE1BQVksUUFBWixJQUF3QixRQUFPQyxDQUFQLHlDQUFPQSxDQUFQLE1BQVksUUFBdkMsRUFBaUQ7QUFDcEQsUUFBR0QsTUFBTSxJQUFOLElBQWNDLE1BQU0sSUFBdkIsRUFBNkI7QUFDM0IsYUFBT0QsTUFBTUMsQ0FBYjtBQUNEOztBQUVELFFBQUcxUyxPQUFPaEUsSUFBUCxDQUFZeVcsQ0FBWixFQUFlMVQsTUFBZixJQUF5QmlCLE9BQU9oRSxJQUFQLENBQVkwVyxDQUFaLEVBQWUzVCxNQUEzQyxFQUFtRDtBQUNqRCxhQUFPLEtBQVA7QUFDRDs7QUFFRCxTQUFJLElBQUliLENBQVIsSUFBYXVVLENBQWIsRUFBZ0I7QUFDZCxVQUFHLENBQUNBLEVBQUV0VSxjQUFGLENBQWlCRCxDQUFqQixDQUFKLEVBQXlCO0FBQ3ZCO0FBQ0Q7O0FBRUQsVUFBRyxDQUFDLEtBQUsrVSxPQUFMLENBQWFSLEVBQUV2VSxDQUFGLENBQWIsRUFBbUJ3VSxFQUFFeFUsQ0FBRixDQUFuQixDQUFKLEVBQThCO0FBQzVCLGVBQU8sS0FBUDtBQUNEO0FBQ0Y7O0FBRUQsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsU0FBT3VVLE1BQU1DLENBQWI7QUFDRCxDQTlCRDs7QUFnQ0E7Ozs7Ozs7OztBQVNBbk8sTUFBTTZGLG9CQUFOLEdBQTZCLFVBQVM4SSxPQUFULEVBQWtCQyxRQUFsQixFQUE0QkMsWUFBNUIsRUFBMENDLFdBQTFDLEVBQXVEO0FBQ2xGLE1BQUdILFlBQVlDLFFBQWYsRUFBeUI7QUFDdkIsV0FBTyxLQUFQO0FBQ0Q7O0FBRUQsU0FBTyxLQUFLRixPQUFMLENBQWFqUSxVQUFVakUsTUFBVixJQUFvQixDQUFwQixHQUF1QnNVLFdBQXZCLEdBQW9DLEtBQUtoSixJQUFMLENBQVU2SSxPQUFWLENBQWpELEVBQXFFRSxZQUFyRSxDQUFQO0FBQ0QsQ0FORDs7QUFRQTs7Ozs7Ozs7OztBQVVBN08sTUFBTStPLGtCQUFOLEdBQTJCLFVBQVNDLElBQVQsRUFBZTtBQUN4QyxNQUFJclgsS0FBSzhILFNBQVN3UCxhQUFULENBQXVCLEtBQXZCLENBQVQ7QUFDQSxNQUFJMVUsY0FBSjs7QUFFQTVDLEtBQUd1WCxXQUFILEdBQWlCRixJQUFqQjtBQUNBelUsVUFBUTVDLEdBQUd3QixTQUFYO0FBQ0F4QixLQUFHNEcsTUFBSDtBQUNBNUcsT0FBSyxJQUFMOztBQUVBLFNBQU80QyxLQUFQO0FBQ0QsQ0FWRDs7QUFZQTs7Ozs7Ozs7OztBQVVBeUYsTUFBTW1QLGtCQUFOLEdBQTJCLFVBQVNILElBQVQsRUFBZTtBQUN4QyxNQUFJclgsS0FBSzhILFNBQVN3UCxhQUFULENBQXVCLFVBQXZCLENBQVQ7QUFDQSxNQUFJMVUsY0FBSjs7QUFFQTVDLEtBQUd3QixTQUFILEdBQWU2VixJQUFmO0FBQ0F6VSxVQUFRNUMsR0FBRzRDLEtBQVg7QUFDQTVDLEtBQUc0RyxNQUFIO0FBQ0E1RyxPQUFLLElBQUw7O0FBRUEsU0FBTzRDLEtBQVA7QUFDRCxDQVZEOztBQVlBOzs7Ozs7QUFNQXlGLE1BQU1tSSxXQUFOLEdBQW9CLFVBQVM3TyxHQUFULEVBQWM7QUFDaEMsU0FBT0EsSUFBSUosT0FBSixDQUFZLFNBQVosRUFBdUIsVUFBQ2lOLENBQUQsRUFBSWdELENBQUo7QUFBQSxXQUFVQSxFQUFFWixXQUFGLEVBQVY7QUFBQSxHQUF2QixDQUFQO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7O0FBTUF2SSxNQUFNOUUsVUFBTixHQUFtQixVQUFTNUIsR0FBVCxFQUFjO0FBQy9CLFNBQU9BLElBQUlKLE9BQUosQ0FBWSxVQUFaLEVBQXdCLFVBQUNpTixDQUFELEVBQUlnRCxDQUFKO0FBQUEsaUJBQWNBLEVBQUU5TixXQUFGLEVBQWQ7QUFBQSxHQUF4QixDQUFQO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7Ozs7Ozs7QUFXQTJFLE1BQU00RixpQkFBTixHQUEwQixVQUFTbk8sSUFBVCxFQUFlMlgsTUFBZixFQUF1QjtBQUMvQyxNQUFJVCxnQkFBSjtBQUNBLE1BQUluVSxTQUFTL0MsS0FBSytDLE1BQWxCO0FBQ0EsTUFBSVgsSUFBSSxDQUFSOztBQUVBcEMsT0FBSzRYLE1BQUwsQ0FBWSxVQUFTQyxDQUFULEVBQVkzVixDQUFaLEVBQWU7QUFDekJFOztBQUVBLFFBQUcsUUFBT3lWLENBQVAseUNBQU9BLENBQVAsTUFBWSxRQUFmLEVBQXlCO0FBQ3ZCLGFBQU9BLENBQVA7QUFDRDs7QUFFRCxRQUFHQSxFQUFFM1YsQ0FBRixNQUFTUSxTQUFaLEVBQXVCO0FBQ3JCLGFBQU8sRUFBUDtBQUNEOztBQUVBTixTQUFLVyxNQUFOLEtBQWtCbVUsVUFBVVcsRUFBRTNWLENBQUYsQ0FBNUI7QUFDQSxXQUFPMlYsRUFBRTNWLENBQUYsQ0FBUDtBQUNELEdBYkQsRUFhR3lWLE1BYkg7O0FBZUEsU0FBT1QsT0FBUDtBQUNELENBckJEOztBQXVCQTs7Ozs7Ozs7Ozs7QUFXQTNPLE1BQU0rSixpQkFBTixHQUEwQixVQUFTdFMsSUFBVCxFQUFlMlgsTUFBZixFQUF1QjtBQUMvQyxNQUFJRyxNQUFNLEtBQVY7QUFDQSxNQUFJL1UsU0FBUy9DLEtBQUsrQyxNQUFsQjtBQUNBLE1BQUlYLElBQUksQ0FBUjs7QUFFQXBDLE9BQUs0WCxNQUFMLENBQVksVUFBU0MsQ0FBVCxFQUFZM1YsQ0FBWixFQUFlO0FBQ3pCRTs7QUFFQSxRQUFHLFFBQU95VixDQUFQLHlDQUFPQSxDQUFQLE1BQVksUUFBZixFQUF5QjtBQUN2QixhQUFPLENBQUMsQ0FBQ0EsQ0FBVDtBQUNEOztBQUVELFFBQUcsQ0FBQ0EsRUFBRTFWLGNBQUYsQ0FBaUJELENBQWpCLENBQUosRUFBeUI7QUFDdkIsYUFBTyxFQUFQO0FBQ0Q7O0FBRUFFLFNBQUtXLE1BQU4sS0FBa0IrVSxNQUFNRCxFQUFFMVYsY0FBRixDQUFpQkQsQ0FBakIsQ0FBeEI7QUFDQSxXQUFPMlYsRUFBRTNWLENBQUYsQ0FBUDtBQUNELEdBYkQsRUFhR3lWLE1BYkg7O0FBZUEsU0FBT0csR0FBUDtBQUNELENBckJEOztBQXVCQTs7Ozs7Ozs7Ozs7OztBQWFBdlAsTUFBTTVGLGlCQUFOLEdBQTBCLFVBQVMzQyxJQUFULEVBQWUyWCxNQUFmLEVBQXVCNVYsRUFBdkIsRUFBMkI7QUFDbkQsTUFBSW1WLFVBQVV4VSxTQUFkO0FBQ0EsTUFBSUssU0FBUy9DLEtBQUsrQyxNQUFsQjtBQUNBLE1BQUlYLElBQUksQ0FBUjs7QUFFQXBDLE9BQUs0WCxNQUFMLENBQVksVUFBU0MsQ0FBVCxFQUFZM1YsQ0FBWixFQUFlO0FBQ3pCRTs7QUFFQSxRQUFHLFFBQU95VixDQUFQLHlDQUFPQSxDQUFQLE1BQVksUUFBZixFQUF5QjtBQUN2QjtBQUNEOztBQUVELFFBQUcsQ0FBQ0EsRUFBRTFWLGNBQUYsQ0FBaUJELENBQWpCLENBQUosRUFBeUI7QUFDdkIsYUFBT2dWLFVBQVVXLEVBQUUzVixDQUFGLElBQU9ILEdBQUdLLEtBQUtXLE1BQVIsQ0FBeEI7QUFDRDs7QUFFRDhVLE1BQUUzVixDQUFGLElBQU9ILEdBQUdLLEtBQUtXLE1BQVIsRUFBZ0I4VSxFQUFFM1YsQ0FBRixDQUFoQixDQUFQO0FBQ0FnVixjQUFVVyxDQUFWOztBQUVBLFdBQU9BLEVBQUUzVixDQUFGLENBQVA7QUFDRCxHQWZELEVBZUd5VixNQWZIOztBQWlCQSxTQUFPVCxPQUFQO0FBQ0QsQ0F2QkQ7O0FBeUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkEzTyxNQUFNa0ssb0JBQU4sR0FBNkIsVUFBU3pTLElBQVQsRUFBZTJYLE1BQWYsRUFBdUI1VixFQUF2QixFQUEyQjtBQUN0RCxNQUFJZ0IsU0FBUy9DLEtBQUsrQyxNQUFsQjtBQUNBLE1BQUlELGNBQUo7QUFDQSxNQUFJVixJQUFJLENBQVI7O0FBRUFwQyxPQUFLNFgsTUFBTCxDQUFZLFVBQVNDLENBQVQsRUFBWTNWLENBQVosRUFBZTtBQUN6QkU7O0FBRUEsUUFBRyxRQUFPeVYsQ0FBUCx5Q0FBT0EsQ0FBUCxNQUFZLFFBQWYsRUFBeUI7QUFDdkI7QUFDRDs7QUFFRCxRQUFHLENBQUNBLEVBQUUxVixjQUFGLENBQWlCRCxDQUFqQixDQUFKLEVBQXlCO0FBQ3ZCLGFBQU8sRUFBUDtBQUNEOztBQUVELFFBQUdFLEtBQUtXLE1BQVIsRUFBZ0I7QUFDZEQsY0FBUStVLEVBQUUzVixDQUFGLENBQVI7O0FBRUEsVUFBRyxDQUFDSCxFQUFELElBQU9BLEdBQUdlLEtBQUgsQ0FBVixFQUFxQjtBQUNuQixlQUFPK1UsRUFBRTNWLENBQUYsQ0FBUDtBQUNEOztBQUVELGFBQU9ZLEtBQVA7QUFDRDs7QUFFRCxXQUFPK1UsRUFBRTNWLENBQUYsQ0FBUDtBQUNELEdBdEJELEVBc0JHeVYsTUF0Qkg7O0FBd0JBLFNBQU83VSxLQUFQO0FBQ0QsQ0E5QkQ7O0FBaUNBOzs7Ozs7OztBQVFBeUYsTUFBTXdMLDJCQUFOLEdBQW9DLFVBQVNQLE1BQVQsRUFBaUIzTixHQUFqQixFQUFzQjtBQUN4RCxNQUFJM0UsUUFBUSxTQUFSQSxLQUFRLENBQUM4USxHQUFELEVBQVM7QUFDbkIsUUFBR0EsSUFBSStGLG9CQUFKLENBQXlCbFMsR0FBekIsQ0FBSCxFQUFrQztBQUNoQyxhQUFPbU0sR0FBUDtBQUNEOztBQUVELFFBQUlnRyxRQUFRaFUsT0FBT2lVLGNBQVAsQ0FBc0JqRyxHQUF0QixDQUFaOztBQUVBLFFBQUcsQ0FBQ2dHLEtBQUosRUFBVztBQUNULGFBQU8sSUFBUDtBQUNEOztBQUVELFdBQU85VyxNQUFNOFcsS0FBTixDQUFQO0FBQ0QsR0FaRDs7QUFjQSxTQUFPOVcsTUFBTXNTLE1BQU4sQ0FBUDtBQUNELENBaEJEOztBQWtCQTs7Ozs7OztBQU9BakwsTUFBTXNMLG9CQUFOLEdBQTZCLFVBQVNMLE1BQVQsRUFBaUIzTixHQUFqQixFQUFzQjtBQUNqRCxNQUFJM0UsUUFBUSxTQUFSQSxLQUFRLENBQUM4USxHQUFELEVBQVM7QUFDbkIsUUFBR0EsSUFBSTdQLGNBQUosQ0FBbUIwRCxHQUFuQixDQUFILEVBQTRCO0FBQzFCLGFBQU9tTSxHQUFQO0FBQ0Q7O0FBRUQsUUFBSWdHLFFBQVFoVSxPQUFPaVUsY0FBUCxDQUFzQmpHLEdBQXRCLENBQVo7O0FBRUEsUUFBRyxDQUFDZ0csS0FBSixFQUFXO0FBQ1QsYUFBTyxJQUFQO0FBQ0Q7O0FBRUQsV0FBTzlXLE1BQU04VyxLQUFOLENBQVA7QUFDRCxHQVpEOztBQWNBLFNBQU85VyxNQUFNc1MsTUFBTixDQUFQO0FBQ0QsQ0FoQkQ7O0FBa0JBOzs7Ozs7QUFNQWpMLE1BQU0yUCxlQUFOLEdBQXdCLFVBQVVwVixLQUFWLEVBQWlCO0FBQ3ZDLE1BQUcsUUFBT0EsS0FBUCx5Q0FBT0EsS0FBUCxNQUFnQixRQUFoQixJQUE0QixDQUFDQSxLQUFoQyxFQUF1QztBQUNyQyxXQUFPQSxLQUFQO0FBQ0Q7O0FBRUQsTUFBSTZSLFFBQVEsU0FBUkEsS0FBUSxDQUFDM0MsR0FBRCxFQUFTO0FBQ25CLFNBQUksSUFBSTlQLENBQVIsSUFBYThQLEdBQWIsRUFBa0I7QUFDaEIsVUFBSSxDQUFDQSxJQUFJN1AsY0FBSixDQUFtQkQsQ0FBbkIsQ0FBTCxFQUE0QjtBQUMxQjtBQUNEOztBQUVELFVBQUc4UCxJQUFJOVAsQ0FBSixLQUFVLFFBQU84UCxJQUFJOVAsQ0FBSixDQUFQLEtBQWlCLFFBQTlCLEVBQXdDO0FBQ3RDLFlBQUc4UCxJQUFJOVAsQ0FBSixFQUFPNkQsU0FBVixFQUFxQjtBQUNuQmlNLGNBQUk5UCxDQUFKLElBQVM4UCxJQUFJOVAsQ0FBSixFQUFPa1MsUUFBaEI7QUFDRDs7QUFFRE8sY0FBTTNDLElBQUk5UCxDQUFKLENBQU47QUFDRDtBQUNGO0FBQ0YsR0FkRDs7QUFnQkEsTUFBR1ksTUFBTWlELFNBQVQsRUFBb0I7QUFDbEJqRCxZQUFRQSxNQUFNc1IsUUFBZDtBQUNEOztBQUVETyxRQUFNN1IsS0FBTjs7QUFFQSxTQUFPQSxLQUFQO0FBQ0QsQ0E1QkQ7O0FBK0JBOzs7Ozs7O0FBT0F5RixNQUFNM0csa0JBQU4sR0FBMkIsWUFBaUM7QUFBQSxNQUF4Qm1CLE1BQXdCLHVFQUFmLEVBQWU7QUFBQSxNQUFYaEIsRUFBVyx1RUFBTixJQUFNOztBQUMxRCxNQUFJRixNQUFNc1csS0FBS0MsTUFBTCxHQUFjalksUUFBZCxDQUF1QixFQUF2QixFQUEyQmtZLFNBQTNCLENBQXFDLENBQXJDLEVBQXdDdFYsU0FBUyxDQUFqRCxDQUFWO0FBQ0EsTUFBSUYsTUFBTSxFQUFWOztBQUVBLE9BQUksSUFBSVQsSUFBSSxDQUFSLEVBQVdDLElBQUlSLElBQUlrQixNQUF2QixFQUErQlgsSUFBSUMsQ0FBbkMsRUFBc0NELEdBQXRDLEVBQTJDO0FBQ3pDLFFBQUcrVixLQUFLQyxNQUFMLEtBQWdCLElBQW5CLEVBQXlCO0FBQ3ZCdlYsYUFBT2hCLElBQUlPLENBQUosRUFBTzBPLFdBQVAsRUFBUDtBQUNELEtBRkQsTUFHSztBQUNIak8sYUFBT2hCLElBQUlPLENBQUosQ0FBUDtBQUNEO0FBQ0Y7O0FBRUQsTUFBR0wsTUFBTUEsR0FBR2MsR0FBSCxDQUFULEVBQWtCO0FBQ2hCLFdBQU8sS0FBS2pCLGtCQUFMLENBQXdCbUIsTUFBeEIsRUFBZ0NoQixFQUFoQyxDQUFQO0FBQ0Q7O0FBRUQsU0FBT2MsR0FBUDtBQUNELENBbEJEOztrQkFvQmUwRixLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZyQmY7Ozs7Ozs7O0lBRWErUCxPLFdBQUFBLE87QUFDWCxtQkFBWUMsT0FBWixFQUFxQkMsUUFBckIsRUFBK0I7QUFBQTs7QUFDN0IsU0FBS0QsT0FBTCxHQUFlQSxVQUFVQSxRQUFROVcsT0FBUixDQUFnQixLQUFoQixFQUF1QixFQUF2QixJQUE2QixHQUF2QyxHQUE2QyxFQUE1RDs7QUFFQSxTQUFLK1csUUFBTDtBQUNFQywyQkFBcUI7QUFEdkIsT0FFTUQsWUFBWSxFQUZsQjtBQUlEOztBQUVEOzs7Ozs7Ozs7OzBCQU1NdlosTyxFQUFTO0FBQUE7O0FBQ2IsYUFBTyxJQUFJOEYsT0FBSixDQUFZLFVBQUNxRyxPQUFELEVBQVVzTixNQUFWLEVBQXFCO0FBQ3RDLFlBQUlDLFlBQUo7QUFDQSxZQUFJQyxZQUFKOztBQUVBM1osK0JBQWMsTUFBS3VaLFFBQW5CLEVBQWlDdlosV0FBVyxFQUE1Qzs7QUFFQTJaLGNBQU0sSUFBSUMsY0FBSixFQUFOO0FBQ0MsZUFBTzVaLFFBQVE2WixPQUFmLElBQTBCLFVBQTNCLElBQTBDN1osUUFBUTZaLE9BQVIsQ0FBZ0JGLEdBQWhCLENBQTFDO0FBQ0EzWixrQkFBVSxNQUFLOFosZUFBTCxDQUFxQjlaLE9BQXJCLENBQVY7QUFDQTBaLGNBQU0sTUFBS0osT0FBTCxRQUFpQixNQUFLQSxPQUF0QixHQUFnQ3RaLFFBQVEwWixHQUFSLENBQVlsWCxPQUFaLENBQW9CLEtBQXBCLEVBQTJCLEVBQTNCLENBQWhDLEdBQWtFeEMsUUFBUTBaLEdBQWhGO0FBQ0FDLFlBQUlJLElBQUosQ0FBUy9aLFFBQVFnYSxNQUFqQixFQUF5Qk4sR0FBekIsRUFBOEIsSUFBOUIsRUFBb0MxWixRQUFRaWEsSUFBNUMsRUFBa0RqYSxRQUFRa2EsUUFBMUQ7QUFDQWxhLGdCQUFRbWEsT0FBUixHQUFrQm5hLFFBQVFtYSxPQUFSLElBQW1CLEVBQXJDOztBQUVBLFlBQUduYSxRQUFRb2EsSUFBWCxFQUFpQjtBQUNmcGEsa0JBQVFxYSxJQUFSLEdBQWVwSixLQUFLQyxTQUFMLENBQWVsUixRQUFRb2EsSUFBdkIsQ0FBZjtBQUNBcGEsa0JBQVFtYSxPQUFSLENBQWdCLGNBQWhCLElBQWtDLGtCQUFsQztBQUNBbmEsa0JBQVFzYSxZQUFSLEdBQXVCdGEsUUFBUXNhLFlBQVIsSUFBd0IsTUFBL0M7QUFDRCxTQUpELE1BS0ssSUFBR3RhLFFBQVF1YSxJQUFYLEVBQWlCO0FBQ3BCdmEsa0JBQVFxYSxJQUFSLEdBQWUsTUFBS0csY0FBTCxDQUFvQnhhLFFBQVF1YSxJQUE1QixDQUFmO0FBQ0F2YSxrQkFBUW1hLE9BQVIsQ0FBZ0IsY0FBaEIsSUFBa0MscUJBQWxDO0FBQ0Q7O0FBRUQsWUFBR25hLFFBQVFrRCxjQUFSLENBQXVCLFNBQXZCLENBQUgsRUFBc0M7QUFDcEN5VyxjQUFJYyxPQUFKLEdBQWN6YSxRQUFReWEsT0FBdEI7QUFDRDs7QUFFRCxZQUFHemEsUUFBUXNhLFlBQVgsRUFBeUI7QUFDdkJYLGNBQUlXLFlBQUosR0FBbUJ0YSxRQUFRc2EsWUFBM0I7QUFDRDs7QUFFRCxZQUFHdGEsUUFBUTBhLGVBQVgsRUFBNEI7QUFDMUJmLGNBQUllLGVBQUosR0FBc0IxYSxRQUFRMGEsZUFBOUI7QUFDRDs7QUFFRCxZQUFHMWEsUUFBUW1hLE9BQVgsRUFBb0I7QUFDbEIsZUFBSSxJQUFJbFgsQ0FBUixJQUFhakQsUUFBUW1hLE9BQXJCLEVBQThCO0FBQzVCLGdCQUFHLENBQUNuYSxRQUFRbWEsT0FBUixDQUFnQmpYLGNBQWhCLENBQStCRCxDQUEvQixDQUFKLEVBQXVDO0FBQ3JDO0FBQ0Q7O0FBRUQwVyxnQkFBSWdCLGdCQUFKLENBQXFCMVgsQ0FBckIsRUFBd0JqRCxRQUFRbWEsT0FBUixDQUFnQmxYLENBQWhCLENBQXhCO0FBQ0Q7QUFDRjs7QUFFRCxZQUFHakQsUUFBUTRhLE1BQVgsRUFBbUI7QUFDakIsY0FBSWhZLE1BQU0sTUFBS2lZLGFBQUwsQ0FBbUI3YSxRQUFRNGEsTUFBM0IsQ0FBVjs7QUFFQSxjQUFHaFksR0FBSCxFQUFRO0FBQ044VyxtQkFBTyxNQUFNOVcsR0FBYjtBQUNEO0FBQ0Y7O0FBRUQsWUFBRyxPQUFPNUMsUUFBUThhLFVBQWYsSUFBNkIsVUFBaEMsRUFBNEM7QUFDMUNuQixjQUFJb0IsVUFBSixHQUFpQixZQUFNO0FBQ3JCLG1CQUFPL2EsUUFBUThhLFVBQVIsQ0FBbUJuQixHQUFuQixDQUFQO0FBQ0QsV0FGRDtBQUdEOztBQUVEQSxZQUFJcUIsTUFBSixHQUFhLFlBQU07QUFDakIsY0FBSUMsV0FBVyxNQUFLQyxjQUFMLENBQW9CdkIsR0FBcEIsQ0FBZjs7QUFFQSxjQUFHLENBQUNBLElBQUl3QixNQUFKLEdBQWEsRUFBZCxFQUFrQjlELEtBQWxCLENBQXdCclgsUUFBUXdaLG1CQUFoQyxDQUFILEVBQXlEO0FBQ3ZELGdCQUFJdkosTUFBTSxJQUFJMU8sS0FBSixrQkFBeUJtWSxHQUF6QixzQ0FBNkRDLElBQUl3QixNQUFqRSxDQUFWOztBQUVBbEwsZ0JBQUlnTCxRQUFKLEdBQWVBLFFBQWY7O0FBRUEsbUJBQU94QixPQUFPeEosR0FBUCxDQUFQO0FBQ0Q7O0FBRUQ5RCxrQkFBUThPLFFBQVI7QUFDRCxTQVpEOztBQWNBdEIsWUFBSWMsT0FBSixHQUFjLFlBQU07QUFDbEJoQixpQkFBTyxJQUFJbFksS0FBSixrQkFBeUJtWSxHQUF6QixpQkFBUDtBQUNELFNBRkQ7O0FBSUFDLFlBQUl5QixPQUFKLEdBQWMsVUFBQ25MLEdBQUQsRUFBUztBQUNyQndKLGlCQUFPeEosR0FBUDtBQUNELFNBRkQ7O0FBSUEwSixZQUFJMEIsSUFBSixDQUFTcmIsUUFBUXFhLElBQWpCO0FBQ0QsT0FsRk0sQ0FBUDtBQW1GRDs7QUFFRDs7Ozs7Ozs7O2tDQU1jdEgsRyxFQUFLO0FBQ2pCLFVBQUl1SSxNQUFNLEdBQVY7QUFDQSxVQUFJQyxLQUFLLEdBQVQ7O0FBRUEsVUFBSSxDQUFDeEksR0FBRCxJQUFRLFFBQU9BLEdBQVAseUNBQU9BLEdBQVAsT0FBZSxRQUEzQixFQUFxQztBQUNuQyxlQUFPLEVBQVA7QUFDRDs7QUFFRCxhQUFPaE8sT0FBT2hFLElBQVAsQ0FBWWdTLEdBQVosRUFBaUIvUixHQUFqQixDQUFxQixVQUFDaUMsQ0FBRCxFQUFPO0FBQ2pDLFlBQUl1WSxLQUFLQyxtQkFBbUJ4WSxDQUFuQixDQUFUOztBQUVBLFlBQUl5RCxNQUFNMFAsT0FBTixDQUFjckQsSUFBSTlQLENBQUosQ0FBZCxDQUFKLEVBQTJCO0FBQ3pCdVksZUFBS0MsbUJBQW1CeFksQ0FBbkIsQ0FBTDs7QUFFQSxpQkFBTzhQLElBQUk5UCxDQUFKLEVBQU9qQyxHQUFQLENBQVcsVUFBQzBhLENBQUQsRUFBSXZZLENBQUosRUFBVTtBQUMxQixtQkFBT3FZLFlBQVNyWSxDQUFULFVBQWdCb1ksRUFBaEIsR0FBcUJFLG1CQUFtQkMsQ0FBbkIsQ0FBNUI7QUFDRCxXQUZNLEVBRUp2YSxJQUZJLENBRUNtYSxHQUZELENBQVA7QUFHRCxTQU5ELE1BT0ssSUFBR3ZJLElBQUk5UCxDQUFKLEtBQVUsUUFBTzhQLElBQUk5UCxDQUFKLENBQVAsTUFBa0IsUUFBL0IsRUFBeUM7QUFDNUMsY0FBSTBZLE1BQU0sRUFBVjs7QUFFQTVXLGlCQUFPaEUsSUFBUCxDQUFZZ1MsSUFBSTlQLENBQUosQ0FBWixFQUFvQmpDLEdBQXBCLENBQXdCLFVBQUM0RixHQUFELEVBQVM7QUFDL0IrVSxnQkFBSXRaLElBQUosQ0FBU21aLFlBQVM1VSxHQUFULFVBQWtCMlUsRUFBbEIsR0FBdUJFLG1CQUFtQjFJLElBQUk5UCxDQUFKLEVBQU8yRCxHQUFQLENBQW5CLENBQWhDO0FBQ0QsV0FGRDs7QUFJQSxpQkFBTytVLElBQUl4YSxJQUFKLENBQVNtYSxHQUFULENBQVA7QUFDRCxTQVJJLE1BU0E7QUFDSCxpQkFBT0UsS0FBS0QsRUFBTCxHQUFVRSxtQkFBbUIxSSxJQUFJOVAsQ0FBSixDQUFuQixDQUFqQjtBQUNEO0FBQ0YsT0F0Qk0sRUFzQko5QixJQXRCSSxDQXNCQ21hLEdBdEJELENBQVA7QUF1QkQ7O0FBRUQ7Ozs7Ozs7OztvQ0FNZ0IxWSxHLEVBQUs7QUFDbkIsVUFBSWdaLFFBQVEsRUFBWjtBQUNBLFVBQUlDLE9BQU9qWixJQUFJa1osS0FBSixDQUFVLEdBQVYsQ0FBWDs7QUFFQSxXQUFJLElBQUkzWSxJQUFJLENBQVIsRUFBV0MsSUFBSXlZLEtBQUsvWCxNQUF4QixFQUFnQ1gsSUFBR0MsQ0FBbkMsRUFBc0NELEdBQXRDLEVBQTJDO0FBQ3pDLFlBQUk0WSxNQUFPRixLQUFLMVksQ0FBTCxFQUFRMlksS0FBUixDQUFjLEdBQWQsQ0FBWDtBQUNBLFlBQUlsVixNQUFNb1YsbUJBQW1CRCxJQUFJLENBQUosQ0FBbkIsQ0FBVjtBQUNBLFlBQUluWSxNQUFNb1ksbUJBQW1CRCxJQUFJLENBQUosQ0FBbkIsQ0FBVjs7QUFFQSxZQUFHLENBQUNuVixHQUFKLEVBQVM7QUFDUDtBQUNEOztBQUVELFlBQUdGLE1BQU0wUCxPQUFOLENBQWN3RixNQUFNaFYsR0FBTixDQUFkLENBQUgsRUFBOEI7QUFDNUJnVixnQkFBTWhWLEdBQU4sRUFBV3ZFLElBQVgsQ0FBZ0J1QixHQUFoQjtBQUNELFNBRkQsTUFHSyxJQUFHZ1ksTUFBTWhWLEdBQU4sQ0FBSCxFQUFlO0FBQ2xCZ1YsZ0JBQU1oVixHQUFOLElBQWEsQ0FBQ2dWLE1BQU1oVixHQUFOLENBQUQsRUFBYWhELEdBQWIsQ0FBYjtBQUNELFNBRkksTUFHQTtBQUNIZ1ksZ0JBQU1oVixHQUFOLElBQWFoRCxHQUFiO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPZ1ksS0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7Ozs7bUNBU2U3SSxHLEVBQWtDO0FBQUEsVUFBN0I1RixJQUE2Qix1RUFBdEIsSUFBc0I7QUFBQSxVQUFoQjhPLFNBQWdCLHVFQUFKLEVBQUk7O0FBQy9DLFVBQUlDLEtBQUsvTyxRQUFRLElBQUlnUCxRQUFKLEVBQWpCOztBQUVBLFdBQUksSUFBSWxaLENBQVIsSUFBYThQLEdBQWIsRUFBa0I7QUFDaEIsWUFBR0EsSUFBSTdQLGNBQUosQ0FBbUJELENBQW5CLEtBQXlCOFAsSUFBSTlQLENBQUosQ0FBNUIsRUFBb0M7QUFDbEMsY0FBSTJELE1BQU1xVixZQUFXQSxZQUFZLEdBQVosR0FBa0JoWixDQUFsQixHQUFzQixHQUFqQyxHQUFzQ0EsQ0FBaEQ7O0FBRUEsY0FBSThQLElBQUk5UCxDQUFKLGFBQWtCeVUsSUFBdEIsRUFBNEI7QUFDMUJ3RSxlQUFHRSxNQUFILENBQVV4VixHQUFWLEVBQWVtTSxJQUFJOVAsQ0FBSixFQUFPb1osV0FBUCxFQUFmO0FBQ0QsV0FGRCxNQUdLLElBQUksZ0JBQU14SCxhQUFOLENBQW9COUIsSUFBSTlQLENBQUosQ0FBcEIsQ0FBSixFQUFpQztBQUNwQyxpQkFBS3VYLGNBQUwsQ0FBb0J6SCxJQUFJOVAsQ0FBSixDQUFwQixFQUE0QmlaLEVBQTVCLEVBQWdDdFYsR0FBaEM7QUFDRCxXQUZJLE1BR0E7QUFDSHNWLGVBQUdFLE1BQUgsQ0FBVXhWLEdBQVYsRUFBZW1NLElBQUk5UCxDQUFKLENBQWY7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsYUFBT2laLEVBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7O29DQU1nQmxjLE8sRUFBUztBQUN2QixhQUFPQSxPQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OzttQ0FNZTJaLEcsRUFBSztBQUNsQixhQUFPO0FBQ0xBLGFBQUtBLEdBREE7QUFFTHhNLGNBQU13TSxJQUFJc0IsUUFGTDtBQUdMRSxnQkFBUXhCLElBQUl3QjtBQUhQLE9BQVA7QUFLRDs7QUFFRDs7Ozs7Ozs7Ozt3QkFPSXpCLEcsRUFBbUI7QUFBQSxVQUFkMVosT0FBYyx1RUFBSixFQUFJOztBQUNyQkEsY0FBUTBaLEdBQVIsR0FBY0EsR0FBZDtBQUNBMVosY0FBUWdhLE1BQVIsR0FBaUIsS0FBakI7O0FBRUEsYUFBTyxLQUFLNEIsS0FBTCxDQUFXNWIsT0FBWCxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7NEJBT08wWixHLEVBQW1CO0FBQUEsVUFBZDFaLE9BQWMsdUVBQUosRUFBSTs7QUFDeEJBLGNBQVEwWixHQUFSLEdBQWNBLEdBQWQ7QUFDQTFaLGNBQVFnYSxNQUFSLEdBQWlCLFFBQWpCOztBQUVBLGFBQU8sS0FBSzRCLEtBQUwsQ0FBVzViLE9BQVgsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7O3lCQU9LMFosRyxFQUFtQjtBQUFBLFVBQWQxWixPQUFjLHVFQUFKLEVBQUk7O0FBQ3RCQSxjQUFRMFosR0FBUixHQUFjQSxHQUFkO0FBQ0ExWixjQUFRZ2EsTUFBUixHQUFpQixNQUFqQjs7QUFFQSxhQUFPLEtBQUs0QixLQUFMLENBQVc1YixPQUFYLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozt3QkFPSTBaLEcsRUFBbUI7QUFBQSxVQUFkMVosT0FBYyx1RUFBSixFQUFJOztBQUNyQkEsY0FBUTBaLEdBQVIsR0FBY0EsR0FBZDtBQUNBMVosY0FBUWdhLE1BQVIsR0FBaUIsS0FBakI7O0FBRUEsYUFBTyxLQUFLNEIsS0FBTCxDQUFXNWIsT0FBWCxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7MEJBT00wWixHLEVBQW1CO0FBQUEsVUFBZDFaLE9BQWMsdUVBQUosRUFBSTs7QUFDdkJBLGNBQVEwWixHQUFSLEdBQWNBLEdBQWQ7QUFDQTFaLGNBQVFnYSxNQUFSLEdBQWlCLE9BQWpCOztBQUVBLGFBQU8sS0FBSzRCLEtBQUwsQ0FBVzViLE9BQVgsQ0FBUDtBQUNEOzs7Ozs7QUFHSCxJQUFNa0ssVUFBVSxJQUFJbVAsT0FBSixFQUFoQjs7QUFFQW5QLFFBQVFvUyxXQUFSLEdBQXNCLEVBQXRCOztBQUVBOzs7Ozs7QUFNQXBTLFFBQVFxUyxXQUFSLEdBQXNCLFVBQVM5YSxJQUFULEVBQWUrYSxRQUFmLEVBQXlCO0FBQzdDLE9BQUtGLFdBQUwsQ0FBaUI3YSxJQUFqQixJQUF5QithLFFBQXpCO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7QUFLQXRTLFFBQVF1UyxjQUFSLEdBQXlCLFVBQVNoYixJQUFULEVBQWU7QUFDdEMsU0FBTyxLQUFLNmEsV0FBTCxDQUFpQjdhLElBQWpCLENBQVA7QUFDRCxDQUZEOztBQUlBc0QsT0FBTzRELGNBQVAsQ0FBc0J1QixPQUF0QixFQUErQixLQUEvQixFQUFzQztBQUNwQytDLE9BQUssZUFBTTtBQUNULFdBQU8vQyxRQUFRb1MsV0FBZjtBQUNEO0FBSG1DLENBQXRDOztBQU1BcFMsUUFBUW1QLE9BQVIsR0FBa0JBLE9BQWxCO2tCQUNlblAsTzs7Ozs7Ozs7Ozs7Ozs7O0FDNVVmOzs7Ozs7Ozs7Ozs7SUFFcUJGLEk7OztBQUNuQixrQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTmhDLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLHVJQUNWQSxJQURVOztBQUduQixVQUFLMFUsUUFBTCxHQUFnQixPQUFoQjtBQUhtQjtBQUlwQjs7OztpQ0FFWTdZLEssRUFBTztBQUNsQixXQUFLOFksUUFBTCxDQUFjOVksS0FBZDtBQUNEOzs7aUNBRVlBLEssRUFBTztBQUNsQixXQUFLK1ksUUFBTCxDQUFjL1ksS0FBZDtBQUNEOzs7K0JBRVU7QUFDVCxXQUFLa0ksS0FBTCxDQUFXN0ksY0FBWCxDQUEwQixPQUExQixLQUFzQyxLQUFLMFosUUFBTCxDQUFjLEtBQUs3USxLQUFMLENBQVc4USxLQUF6QixDQUF0QztBQUNBLFdBQUs5USxLQUFMLENBQVc3SSxjQUFYLENBQTBCLE9BQTFCLEtBQXNDLEtBQUt5WixRQUFMLENBQWMsS0FBSzVRLEtBQUwsQ0FBV2xJLEtBQXpCLENBQXRDO0FBQ0Q7Ozs2QkFFUUEsSyxFQUFPO0FBQ2RBLGNBQU8sS0FBS2laLGVBQUwsRUFBUCxHQUErQixLQUFLQyxjQUFMLEVBQS9CO0FBQ0Q7Ozs2QkFFUWxaLEssRUFBTztBQUNiLFdBQUs1QyxFQUFMLENBQVEsS0FBS3liLFFBQWIsTUFBMkI3WSxLQUE1QixLQUF1QyxLQUFLNUMsRUFBTCxDQUFRLEtBQUt5YixRQUFiLElBQXlCN1ksVUFBVSxDQUFWLEdBQWEsR0FBYixHQUFtQkEsU0FBUyxFQUE1RjtBQUNEOzs7c0NBRWlCO0FBQ2hCLFdBQUs1QyxFQUFMLENBQVE0YixLQUFSO0FBQ0Q7OztxQ0FFZ0I7QUFDZixXQUFLNWIsRUFBTCxDQUFRK2IsSUFBUjtBQUNEOzs7Ozs7a0JBbENrQmhULEk7QUFtQ3BCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNEOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCUCxHOzs7Ozs2QkFHSDtBQUNkLHNCQUFNbEcsU0FBTixDQUFnQixLQUFoQixFQUF1QmtHLEdBQXZCO0FBQ0Esc0JBQU1sRyxTQUFOLENBQWdCLElBQWhCLEVBQXNCa0csR0FBdEI7QUFDQSxzQkFBTWxHLFNBQU4sQ0FBZ0IsSUFBaEIsRUFBc0JrRyxHQUF0QjtBQUNBLHNCQUFNbEcsU0FBTixDQUFnQixPQUFoQixFQUF5QmtHLEdBQXpCO0FBQ0Esc0JBQU1sRyxTQUFOLENBQWdCLE9BQWhCLEVBQXlCa0csR0FBekI7QUFDQSxzQkFBTWxHLFNBQU4sQ0FBZ0IsT0FBaEIsRUFBeUJrRyxHQUF6QjtBQUNBLHNCQUFNbEcsU0FBTixDQUFnQixJQUFoQixFQUFzQjBaLElBQXRCO0FBQ0Esc0JBQU0xWixTQUFOLENBQWdCLE1BQWhCLEVBQXdCMFosSUFBeEI7QUFDRDs7O0FBRUQsaUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5qVixJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSxxSUFDVkEsSUFEVTs7QUFHbkIsVUFBS2tWLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxVQUFLQyxLQUFMLEdBQWEsSUFBYjtBQUNBLFVBQUtDLE9BQUwsR0FBZSxJQUFmO0FBQ0EsVUFBS0MsT0FBTCxHQUFlLElBQWY7QUFDQSxVQUFLQyxpQkFBTCxHQUF5QixJQUF6QjtBQUNBLFVBQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxVQUFLQyxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsVUFBS0MsaUJBQUwsR0FBeUIsSUFBekI7QUFWbUI7QUFXcEI7Ozs7OEJBRVN0USxJLEVBQU07QUFDZCxXQUFLdVEsSUFBTCxDQUFVdlEsSUFBVjtBQUNEOzs7OEJBRVM7QUFDUixXQUFLd1EsY0FBTDtBQUNEOzs7K0JBRVU7QUFDVCxXQUFLRCxJQUFMLENBQVUsS0FBSzNSLEtBQUwsQ0FBVzZSLEVBQXJCO0FBQ0Q7OztxQ0FFZ0I7QUFDZixVQUFJM2MsV0FBSjs7QUFFQSxXQUFJLElBQUlrQyxJQUFJLENBQVIsRUFBV0MsSUFBSSxLQUFLbkMsRUFBTCxDQUFReUUsUUFBUixDQUFpQjVCLE1BQXBDLEVBQTRDWCxJQUFJQyxDQUFoRCxFQUFtREQsR0FBbkQsRUFBd0Q7QUFDdEQsWUFBSXdDLFFBQVEsS0FBSzFFLEVBQUwsQ0FBUXlFLFFBQVIsQ0FBaUJ2QyxDQUFqQixDQUFaOztBQUVBLFlBQUd3QyxNQUFNbEIsWUFBTixDQUFtQixXQUFuQixLQUFtQyxNQUF0QyxFQUE4QztBQUM1Q3hELGVBQUswRSxLQUFMOztBQUVBO0FBQ0Q7O0FBRUQxRSxhQUFLMEUsS0FBTDtBQUNEOztBQUVELFVBQUcsQ0FBQzFFLEVBQUosRUFBUTtBQUNOLGNBQU0sSUFBSU0sS0FBSixDQUFVLDhDQUFWLENBQU47QUFDRDs7QUFFRCxVQUFJZ0QsZ0JBQWdCdEQsR0FBR3dELFlBQUgsQ0FBZ0IsV0FBaEIsQ0FBcEI7O0FBRUEsVUFBR0YsaUJBQWlCLE1BQXBCLEVBQTRCO0FBQzFCLFlBQUloQixZQUFZLGdCQUFNQSxTQUFOLENBQWdCZ0IsaUJBQWlCdEQsR0FBR3lELE9BQXBDLENBQWhCOztBQUVBLFlBQUcsQ0FBQ25CLFNBQUosRUFBZTtBQUNidEMsYUFBR3NOLFlBQUgsQ0FBZ0IsV0FBaEIsRUFBNkIsTUFBN0I7QUFDRCxTQUZELE1BR0ssSUFBRyxFQUFFaEwsVUFBVW9ELFNBQVYsWUFBK0I4QyxHQUFqQyxDQUFILEVBQTBDO0FBQzdDLGNBQUlvVSxPQUFPOVUsU0FBU3dQLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWDs7QUFFQXNGLGVBQUtsSCxXQUFMLENBQWlCMVYsRUFBakI7QUFDQUEsZUFBSzRjLElBQUw7QUFDRDtBQUNGOztBQUVELFdBQUt2RixJQUFMLEdBQVlyWCxHQUFHd0IsU0FBZjtBQUNBLFdBQUsrYSxXQUFMLEdBQW1CdmMsR0FBRzZjLFdBQXRCO0FBQ0EsV0FBS0wsaUJBQUwsR0FBeUJ4YyxHQUFHOGMsU0FBNUI7QUFDQTljLFNBQUc0RyxNQUFIO0FBQ0Q7Ozs0Q0FFdUI7QUFDdEIsVUFBSTVHLEtBQUs4SCxTQUFTd1AsYUFBVCxDQUF1QixVQUF2QixDQUFUOztBQUVBdFgsU0FBR3dCLFNBQUgsR0FBZSxLQUFLZ2IsaUJBQXBCO0FBQ0F4YyxXQUFLQSxHQUFHK2MsT0FBSCxDQUFXQyxVQUFoQjs7QUFFQSxhQUFPaGQsRUFBUDtBQUNEOzs7eUJBRUkyRixHLEVBQUsvQyxLLEVBQU85QyxJLEVBQU1tZCxLLEVBQU87QUFBQTs7QUFDNUIsV0FBS2IsT0FBTCxHQUFlYSxLQUFmO0FBQ0EsV0FBS2YsS0FBTCxHQUFhdlcsR0FBYjtBQUNBLFdBQUt3VyxPQUFMLEdBQWV2WixLQUFmO0FBQ0EsV0FBS3laLGlCQUFMLEdBQXlCLGdCQUFNbE8sSUFBTixDQUFXdkwsS0FBWCxDQUF6Qjs7QUFFQSxVQUFJd00sT0FBTyxFQUFYO0FBQ0EsVUFBSThOLFFBQVEsQ0FBWjs7QUFFQSxVQUFHdGEsU0FBUyxRQUFPQSxLQUFQLHlDQUFPQSxLQUFQLE1BQWdCLFFBQXpCLElBQXFDQSxNQUFNdWEsTUFBOUMsRUFBc0Q7QUFDcEQvTixlQUFPeE0sTUFBTXVhLE1BQWI7QUFDRDs7QUFFRCxVQUFHLEtBQUtiLFNBQUwsQ0FBZWxOLElBQWYsQ0FBSCxFQUF5QjtBQUN2QnpKLGNBQU15SixJQUFOO0FBQ0E4TixnQkFBUSxDQUFSO0FBQ0QsT0FIRCxNQUlLLElBQUcsS0FBS1osU0FBTCxDQUFlM1csR0FBZixDQUFILEVBQXdCO0FBQzNCdVgsZ0JBQVEsQ0FBUjtBQUNEOztBQUVELFVBQUdBLEtBQUgsRUFBVTtBQUNSLFlBQUlFLFdBQVcsS0FBS2QsU0FBTCxDQUFlM1csR0FBZixDQUFmOztBQUVBLFlBQUd1WCxTQUFTLENBQVosRUFBZTtBQUNiLGNBQUlHLFNBQVNELFNBQVNFLFVBQVQsQ0FBb0IxYSxLQUFqQztBQUNBLGNBQUkyYSxRQUFRSCxTQUFTRSxVQUFULENBQW9CblAsSUFBaEM7O0FBRUEsY0FBSSxLQUFLaU8sT0FBTCxLQUFpQmdCLFNBQVNILEtBQTlCLEVBQXFDO0FBQ25DRyxxQkFBU0ksUUFBVDtBQUNEOztBQUVELGNBQUksS0FBS3RCLEtBQUwsS0FBZWtCLFNBQVN6WCxHQUE1QixFQUFpQztBQUMvQnlYLHFCQUFTSyxNQUFUO0FBQ0Q7O0FBRUQsY0FBSSxDQUFDLGdCQUFNdlAsb0JBQU4sQ0FBMkJ0TCxLQUEzQixFQUFrQ3lhLE1BQWxDLEVBQTBDRSxLQUExQyxFQUFpRCxLQUFLbEIsaUJBQXRELENBQUwsRUFBK0U7QUFDN0VlLHFCQUFTMUIsUUFBVDtBQUNEOztBQUVENWIsZUFBSzZGLEdBQUwsSUFBWXlYLFFBQVo7QUFDQSxpQkFBTyxLQUFLZCxTQUFMLENBQWUzVyxHQUFmLENBQVA7O0FBRUEsaUJBQU95WCxRQUFQO0FBQ0Q7O0FBRUQsYUFBS2IsV0FBTCxHQUFtQmEsU0FBU3BkLEVBQVQsQ0FBWTZjLFdBQS9CO0FBQ0FPLGlCQUFTeEgsU0FBVDtBQUNEOztBQUVELFVBQUk1VixLQUFLLEtBQUswZCxxQkFBTCxFQUFUOztBQUVBMWQsU0FBR3dCLFNBQUgsR0FBZSxLQUFLNlYsSUFBcEI7QUFDQSxXQUFLclgsRUFBTCxDQUFRMmQsWUFBUixDQUFxQjNkLEVBQXJCLEVBQXlCLEtBQUt1YyxXQUE5QjtBQUNBLHNCQUFNbFksT0FBTixDQUFjckUsRUFBZDs7QUFFQSxVQUFHNEMsU0FBUyxRQUFPQSxLQUFQLHlDQUFPQSxLQUFQLE1BQWdCLFFBQTVCLEVBQXNDO0FBQ3BDLFlBQUcsQ0FBQ0EsTUFBTXVhLE1BQVYsRUFBa0I7QUFDaEIvTixpQkFBTyxnQkFBTTFOLGtCQUFOLENBQXlCLEVBQXpCLEVBQTZCLFVBQUNDLEdBQUQsRUFBUztBQUMzQyxtQkFBTyxPQUFLMmEsU0FBTCxDQUFlM2EsR0FBZixDQUFQO0FBQ0QsV0FGTSxDQUFQOztBQUlBbUMsaUJBQU80RCxjQUFQLENBQXNCOUUsS0FBdEIsRUFBNkIsUUFBN0IsRUFBdUM7QUFDckMrRSwwQkFBYyxLQUR1QjtBQUVyQ0Msd0JBQVksS0FGeUI7QUFHckNnVyxzQkFBVSxLQUgyQjtBQUlyQ2hiLG1CQUFPd007QUFKOEIsV0FBdkM7QUFNRDs7QUFFRHRQLGFBQUtzUCxJQUFMLElBQWEsS0FBSzZNLFVBQWxCO0FBQ0EsZUFBTyxLQUFLSyxTQUFMLENBQWVsTixJQUFmLENBQVA7QUFDRCxPQWhCRCxNQWlCSztBQUNILFlBQUcsZ0JBQU1yUSxPQUFOLENBQWNHLEtBQWpCLEVBQXdCO0FBQ3RCLGNBQUkyZSxTQUFTLE9BQU8sS0FBSzFCLE9BQVosSUFBdUIsUUFBdkIsU0FBcUMsS0FBS0EsT0FBMUMsU0FBc0QsS0FBS0EsT0FBeEU7O0FBRUEsY0FBSXBWLE9BQU8scUdBRVM4VyxNQUZULG9CQUU4QkEsTUFGOUIscUJBQVg7O0FBS0EzWSxrQkFBUUMsSUFBUixDQUFhVyxLQUFiLENBQW1CWixRQUFRQyxJQUEzQixFQUFpQzRCLElBQWpDO0FBQ0Q7O0FBRURqSCxhQUFLNkYsR0FBTCxJQUFZLEtBQUtzVyxVQUFqQjtBQUNBLGVBQU8sS0FBS0ssU0FBTCxDQUFlM1csR0FBZixDQUFQO0FBQ0Q7O0FBRUQsYUFBTzNGLEdBQUdtQixPQUFWO0FBQ0Q7Ozt5QkFFSStLLEksRUFBTTtBQUNULFVBQUksUUFBT0EsSUFBUCx5Q0FBT0EsSUFBUCxNQUFlLFFBQWYsSUFBMkJBLFNBQVMsSUFBeEMsRUFBOEM7QUFDNUMsWUFBRyxnQkFBTW5OLE9BQU4sQ0FBY0csS0FBakIsRUFBd0I7QUFDdEJnRyxrQkFBUUMsSUFBUjtBQUNBK0csaUJBQU8sRUFBUDtBQUNEO0FBQ0Y7O0FBRUQsVUFBSXBNLE9BQU8sRUFBWDtBQUNBLFVBQUlnZSxZQUFZLEVBQWhCO0FBQ0EsVUFBSUMsY0FBYyxJQUFsQjtBQUNBLFVBQUlyYixPQUFPLEtBQUsxQyxFQUFMLENBQVF5RSxRQUFSLENBQWlCLEtBQUt6RSxFQUFMLENBQVF5RSxRQUFSLENBQWlCNUIsTUFBakIsR0FBMEIsQ0FBM0MsQ0FBWDs7QUFFQSxVQUFHSCxRQUFRLEVBQUVBLEtBQUt2QixPQUFMLFlBQXdCNmEsSUFBMUIsQ0FBWCxFQUE0QztBQUMxQytCLHNCQUFjcmIsSUFBZDtBQUNEOztBQUVELFVBQUcrQyxNQUFNMFAsT0FBTixDQUFjakosSUFBZCxDQUFILEVBQXdCO0FBQ3RCLGFBQUksSUFBSWhLLElBQUksQ0FBUixFQUFXQyxJQUFJK0osS0FBS3JKLE1BQXhCLEVBQWdDWCxJQUFJQyxDQUFwQyxFQUF1Q0QsR0FBdkMsRUFBNEM7QUFDMUM0YixvQkFBVTFjLElBQVYsQ0FBZSxLQUFLNGMsSUFBTCxDQUFVOWIsQ0FBVixFQUFhZ0ssS0FBS2hLLENBQUwsQ0FBYixFQUFzQnBDLElBQXRCLEVBQTRCb0MsQ0FBNUIsQ0FBZjtBQUNEO0FBQ0YsT0FKRCxNQUtLO0FBQ0gsWUFBSUEsS0FBSSxDQUFSOztBQUVBLGFBQUksSUFBSUYsQ0FBUixJQUFha0ssSUFBYixFQUFtQjtBQUNqQixjQUFHLENBQUNBLEtBQUtqSyxjQUFMLENBQW9CRCxDQUFwQixDQUFKLEVBQTRCO0FBQzFCO0FBQ0Q7O0FBRUQ4YixvQkFBVTFjLElBQVYsQ0FBZSxLQUFLNGMsSUFBTCxDQUFVaGMsQ0FBVixFQUFha0ssS0FBS2xLLENBQUwsQ0FBYixFQUFzQmxDLElBQXRCLEVBQTRCb0MsRUFBNUIsQ0FBZjtBQUNBQTtBQUNEO0FBQ0Y7O0FBRUQsV0FBSSxJQUFJQSxNQUFJLENBQVIsRUFBV0MsS0FBSTJiLFVBQVVqYixNQUE3QixFQUFxQ1gsTUFBSUMsRUFBekMsRUFBNENELEtBQTVDLEVBQWlEO0FBQy9DLFlBQUlrYixXQUFXVSxVQUFVNWIsR0FBVixDQUFmOztBQUVBLGFBQUtsQyxFQUFMLENBQVEwVixXQUFSLENBQW9CMEgsU0FBU3BkLEVBQTdCO0FBQ0FvZCxpQkFBU2EsT0FBVCxDQUFpQi9iLEdBQWpCO0FBQ0Q7O0FBRUQ2YixxQkFBZSxLQUFLL2QsRUFBTCxDQUFRMFYsV0FBUixDQUFvQnFJLFdBQXBCLENBQWY7O0FBRUEsV0FBSSxJQUFJL2IsRUFBUixJQUFhLEtBQUtzYSxTQUFsQixFQUE2QjtBQUMzQixZQUFHLENBQUMsS0FBS0EsU0FBTCxDQUFlcmEsY0FBZixDQUE4QkQsRUFBOUIsQ0FBSixFQUFzQztBQUNwQztBQUNEOztBQUVELGFBQUtzYSxTQUFMLENBQWV0YSxFQUFmLEVBQWtCNFQsU0FBbEI7QUFDRDs7QUFFRCxXQUFLMEcsU0FBTCxHQUFpQnhjLElBQWpCO0FBQ0Q7Ozs7OztBQTFPa0IwSSxHLENBQ1p4RSxPLEdBQVUsTTtrQkFERXdFLEc7QUEyT3BCOztJQUVZd1QsSSxXQUFBQSxJOzs7QUFJWCxrQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSx1Q0FBTmpWLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLDBJQUNWQSxJQURVOztBQUduQixXQUFLbVgsR0FBTCxHQUFXLElBQVg7QUFDQSxXQUFLN0csSUFBTCxHQUFZLE9BQUtyWCxFQUFMLENBQVF3QixTQUFwQjtBQUNBLFdBQUsyYyxLQUFMLEdBQWEsT0FBS25lLEVBQUwsQ0FBUXFOLFlBQVIsQ0FBcUIsSUFBckIsQ0FBYjs7QUFFQSxRQUFHLENBQUMsT0FBSzhRLEtBQU4sSUFBZSxFQUFFLE9BQUtuZSxFQUFMLENBQVFrQixVQUFSLENBQW1CQyxPQUFuQixZQUFzQ3FILEdBQXhDLENBQWxCLEVBQWdFO0FBQzlELGFBQUs0VixNQUFMO0FBQ0Q7QUFUa0I7QUFVcEI7Ozs7OEJBRVM7QUFDUixXQUFLeGQsUUFBTCxDQUFjTyxPQUFkLENBQXNCOGEsVUFBdEIsR0FBbUMsSUFBbkM7QUFDQSxXQUFLaUMsR0FBTCxHQUFXLEtBQUt0ZCxRQUFMLENBQWNPLE9BQXpCO0FBQ0EsV0FBS3FjLFFBQUw7QUFDQSxXQUFLQyxNQUFMO0FBQ0EsV0FBSy9CLFFBQUw7O0FBRUEsV0FBS3lDLEtBQUwsSUFBYyx5RkFBY3JZLEtBQWQsQ0FBb0IsSUFBcEIsRUFBMEJnQixTQUExQixDQUFkO0FBQ0Q7OzsrQkFFVTtBQUNULFdBQUtxWCxLQUFMLElBQWMsMEZBQWVyWSxLQUFmLENBQXFCLElBQXJCLEVBQTJCZ0IsU0FBM0IsQ0FBZDtBQUNEOzs7K0JBRVU7QUFDVCxXQUFLbVcsS0FBTCxHQUFhLEtBQUtpQixHQUFMLENBQVM5QixPQUF0QjtBQUNBLFdBQUtoYyxLQUFMLENBQVdpZSxLQUFYLENBQWlCLFdBQWpCLEVBQThCLEtBQUtwQixLQUFuQztBQUNEOzs7NkJBRVE7QUFDUCxXQUFLdFgsR0FBTCxHQUFXLEtBQUt1WSxHQUFMLENBQVNoQyxLQUFwQjtBQUNBLFdBQUs5YixLQUFMLENBQVdpZSxLQUFYLENBQWlCLFNBQWpCLEVBQTRCLEtBQUsxWSxHQUFqQztBQUNEOzs7K0JBRVU7QUFDVCxXQUFLL0MsS0FBTCxHQUFhLEtBQUtzYixHQUFMLENBQVMvQixPQUF0QjtBQUNBLFdBQUsvYixLQUFMLENBQVdpZSxLQUFYLENBQWlCLFdBQWpCLEVBQThCLEtBQUt6YixLQUFuQyxFQUEwQyxJQUExQzs7QUFFQSxXQUFLMGEsVUFBTCxHQUFrQjtBQUNoQm5QLGNBQU0sS0FBSytQLEdBQUwsQ0FBUzdCLGlCQURDO0FBRWhCelosZUFBTyxLQUFLc2IsR0FBTCxDQUFTL0I7QUFGQSxPQUFsQjtBQUlEOzs7NEJBRU9jLEssRUFBTyxDQUFFOzs7O0VBbERPelUsRzs7QUFBYndULEksQ0FDSmhZLE8sR0FBVSxFO0FBRE5nWSxJLENBRUp0UCxpQixHQUFvQixJOzs7QUFtRDdCbEUsSUFBSXdULElBQUosR0FBV0EsSUFBWCxDOzs7Ozs7Ozs7Ozs7Ozs7QUN0U0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJuVCxLOzs7Ozs2QkFDSDtBQUNkLHNCQUFNdkcsU0FBTixDQUFnQixPQUFoQixFQUF5QnVHLEtBQXpCO0FBQ0Q7OztBQUVELG1CQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOOUIsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEseUlBQ1ZBLElBRFU7O0FBR25CLFVBQUsvRyxFQUFMLENBQVF3QixTQUFSLEdBQW9CLEVBQXBCO0FBSG1CO0FBSXBCOztBQUVEOzs7Ozs7OztrQ0FJYzhjLFUsRUFBWTtBQUFBOztBQUN4QixVQUFJQyxRQUFRRCxXQUFXRSxJQUFYLENBQWdCRCxLQUE1QjtBQUNBLFVBQUk1RSxTQUFTMkUsV0FBV0UsSUFBWCxDQUFnQjdFLE1BQTdCO0FBQ0EsVUFBSWxCLE1BQU02RixXQUFXN0YsR0FBckI7QUFDQSxVQUFJa0MsUUFBUTJELFdBQVczRCxLQUF2QjtBQUNBLFVBQUloVyxJQUFJRSxRQUFRcUcsT0FBUixFQUFSOztBQUVBLGVBQVN1VCx3QkFBVCxDQUFrQ0QsSUFBbEMsRUFBd0M7QUFDdEMsWUFBR0EsS0FBS2xULE1BQVIsRUFBZ0I7QUFDZCxjQUFJa1QsS0FBS2xULE1BQUwsQ0FBWWhKLFNBQWhCLEVBQTJCO0FBQ3pCLG1CQUFPa2MsS0FBS2xULE1BQUwsQ0FBWWhKLFNBQVosQ0FBc0JpSyxPQUF0QixDQUE4Qm1TLFlBQTlCLENBQTJDRixJQUFsRDtBQUNEOztBQUVELGlCQUFPQyx5QkFBeUJELEtBQUtsVCxNQUE5QixDQUFQO0FBQ0Q7O0FBRUQsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsV0FBS2lCLE9BQUwsQ0FBYW1TLFlBQWIsR0FBNEI7QUFDMUJGLGNBQU07QUFDSkQsaUJBQU9BLE1BQU0vZCxJQURUO0FBRUowTCxnQkFBTW9TLFdBQVdFLElBQVgsQ0FBZ0J0UyxJQUZsQjtBQUdKeU4sa0JBQVFBLE1BSEo7QUFJSnJPLGtCQUFRbVQseUJBQXlCSCxXQUFXRSxJQUFwQztBQUpKLFNBRG9CO0FBTzFCN0UsZ0JBQVEyRSxXQUFXM0UsTUFQTztBQVExQmxCLGFBQUtBLEdBUnFCO0FBUzFCa0MsZUFBT0E7QUFUbUIsT0FBNUI7O0FBWUEsVUFBSTRELE1BQU1qZCxRQUFWLEVBQW9CO0FBQ2xCLGFBQUtxZCxLQUFMO0FBQ0EsYUFBSzNlLEVBQUwsQ0FBUXdCLFNBQVIsbUJBQWtDK2MsTUFBTWpkLFFBQXhDO0FBQ0Q7O0FBRUQsVUFBSWlkLE1BQU14UyxXQUFWLEVBQXVCO0FBQ3JCcEgsWUFBSSxrQkFBUXFILEdBQVIsQ0FBWXVTLE1BQU14UyxXQUFsQixFQUErQmhILElBQS9CLENBQW9DLFVBQUNqRCxHQUFELEVBQVM7QUFDL0MsaUJBQUs2YyxLQUFMO0FBQ0EsaUJBQUszZSxFQUFMLENBQVF3QixTQUFSLG1CQUFrQ00sSUFBSW9LLElBQXRDO0FBQ0QsU0FIRyxDQUFKO0FBSUQ7O0FBRUQsYUFBT3ZILEVBQUVJLElBQUYsQ0FBTyxZQUFNO0FBQ2xCLGVBQU8sZ0JBQU1WLE9BQU4sQ0FBYyxPQUFLckUsRUFBbkIsRUFBdUIsRUFBRWtELFdBQVcsSUFBYixFQUF2QixDQUFQO0FBQ0QsT0FGTSxDQUFQO0FBR0Q7Ozs7OztrQkE3RGtCMkYsSztBQThEcEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2xFb0JWLFk7QUFDbkIsd0JBQVkzSCxJQUFaLEVBQWtCUixFQUFsQixFQUFzQnNDLFNBQXRCLEVBQWlDO0FBQUE7O0FBQy9CLFNBQUs5QixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLUixFQUFMLEdBQVVBLEVBQVY7QUFDQSxTQUFLc0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7NEJBT1E0SixJLEVBQW1EO0FBQUEsVUFBN0NuTixPQUE2Qyx1RUFBbkMsRUFBRTZmLFNBQVMsS0FBWCxFQUFtQztBQUFBLFVBQWZDLEtBQWUsdUVBQVAsS0FBTzs7QUFDekQsVUFBR0EsU0FBUyxDQUFDLEtBQUtDLFlBQUwsRUFBYixFQUFrQztBQUNoQyxhQUFLOWUsRUFBTCxDQUFRK2UsYUFBUixDQUFzQixJQUFJQyxXQUFKLENBQWdCLEtBQUt4ZSxJQUFyQixhQUE0QnllLFFBQVEvUyxJQUFwQyxJQUE2Q25OLE9BQTdDLEVBQXRCO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7Ozs7Ozs2QkFPU21nQixNLEVBQXFEO0FBQUEsVUFBN0NuZ0IsT0FBNkMsdUVBQW5DLEVBQUU2ZixTQUFTLEtBQVgsRUFBbUM7QUFBQSxVQUFmQyxLQUFlLHVFQUFQLEtBQU87O0FBQzVELFVBQUdBLFNBQVMsQ0FBQyxLQUFLQyxZQUFMLEVBQWIsRUFBa0M7QUFDaEMsYUFBSzllLEVBQUwsQ0FBUStlLGFBQVIsQ0FBc0IsSUFBSUcsTUFBSixDQUFXLEtBQUsxZSxJQUFoQixFQUFzQnpCLE9BQXRCLENBQXRCO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7Ozs7bUNBS2U7QUFDYixVQUFJbU4sT0FBTyxLQUFLNUosU0FBTCxDQUFleUgsaUJBQTFCOztBQUVBLFVBQUcsQ0FBQ21DLElBQUosRUFBVTtBQUNSLGVBQU8sS0FBUDtBQUNEOztBQUVELGFBQU9BLEtBQUtsTSxFQUFMLEtBQVksS0FBS0EsRUFBakIsSUFBdUJrTSxLQUFLdUcsS0FBTCxDQUFXME0sSUFBWCxLQUFvQixLQUFLM2UsSUFBaEQsSUFBd0QwTCxLQUFLNUosU0FBTCxLQUFtQixLQUFLQSxTQUF2RjtBQUNEOztBQUVEOzs7Ozs7Ozt5QkFLS1QsRSxFQUFJO0FBQ1AsV0FBSzdCLEVBQUwsQ0FBUXdHLGdCQUFSLENBQXlCLEtBQUtoRyxJQUE5QixFQUFvQyxLQUFLcUIsRUFBTCxHQUFVQSxFQUE5QztBQUNEOztBQUVEOzs7Ozs7NkJBR1M7QUFDUCxXQUFLQSxFQUFMLElBQVcsS0FBSzdCLEVBQUwsQ0FBUTBHLG1CQUFSLENBQTRCLEtBQUtsRyxJQUFqQyxFQUF1QyxLQUFLcUIsRUFBNUMsQ0FBWDtBQUNEOzs7Ozs7a0JBOURrQnNHLFk7QUErRHBCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0REOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztJQUVhaVgsVSxXQUFBQSxVO0FBQ1gsc0JBQVkzRyxHQUFaLEVBQWlCa0MsS0FBakIsRUFBb0Q7QUFBQSxRQUE1QnZMLElBQTRCLHVFQUFyQixFQUFxQjtBQUFBLFFBQWpCNkgsUUFBaUIsdUVBQU4sSUFBTTs7QUFBQTs7QUFDbEQsU0FBS3dCLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtrQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLdkwsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBSzZILFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS3VILElBQUwsR0FBWSxJQUFaO0FBQ0EsU0FBS2EsTUFBTCxHQUFjLEVBQWQ7QUFDQSxTQUFLQyxNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUszRixNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUt4VixXQUFMLEdBQW1CLEtBQW5CO0FBQ0Q7Ozs7K0JBRVU7QUFDVCxXQUFLaWEsTUFBTDtBQUNBbFYsYUFBT3FWLEtBQVAsQ0FBYXpZLEtBQWIsQ0FBbUJvRCxNQUFuQixFQUEyQnBDLFNBQTNCO0FBQ0Q7Ozs0QkFFTzBYLEksRUFBTTtBQUNaQSxXQUFLbFQsTUFBTCxHQUFjLEtBQUtrVCxJQUFMLElBQWEsSUFBM0I7QUFDQSxXQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDQSxXQUFLYSxNQUFMLENBQVlqZSxJQUFaLENBQWlCb2QsSUFBakI7QUFDQSxXQUFLYyxNQUFMLENBQVlsZSxJQUFaLENBQWlCb2QsS0FBS0QsS0FBdEI7QUFDQSxXQUFLNUUsTUFBTCxHQUFjLENBQUM2RSxLQUFLbFQsTUFBTixHQUFja1QsS0FBSzdFLE1BQW5CLGdCQUErQjZFLEtBQUtsVCxNQUFMLENBQVlxTyxNQUEzQyxFQUFzRDZFLEtBQUs3RSxNQUEzRCxDQUFkO0FBQ0Q7Ozs2QkFFUTRFLEssRUFBTztBQUNkLFdBQUksSUFBSXJjLElBQUksQ0FBUixFQUFXQyxJQUFJLEtBQUtrZCxNQUFMLENBQVl4YyxNQUEvQixFQUF1Q1gsSUFBSUMsQ0FBM0MsRUFBOENELEdBQTlDLEVBQW1EO0FBQ2pELFlBQUlxZCxRQUFRLEtBQUtGLE1BQUwsQ0FBWW5kLENBQVosQ0FBWjs7QUFFQSxZQUFHcWQsTUFBTWhCLEtBQU4sS0FBZ0JBLEtBQW5CLEVBQTBCO0FBQ3hCLGlCQUFPZ0IsS0FBUDtBQUNEO0FBQ0Y7O0FBRUQsYUFBTyxJQUFQO0FBQ0Q7Ozs2QkFFUWhCLEssRUFBTztBQUNkLGFBQU8sS0FBS2UsTUFBTCxDQUFZM1YsT0FBWixDQUFvQjRVLEtBQXBCLEtBQThCLENBQUMsQ0FBdEM7QUFDRDs7OzZCQUVRO0FBQ1AsV0FBS3BhLFdBQUwsR0FBbUIsSUFBbkI7QUFDRDs7Ozs7O0FBR0gsSUFBTStFLFNBQVMsRUFBZjs7QUFFQUEsT0FBT21QLE9BQVAsR0FBaUIsR0FBakI7QUFDQW5QLE9BQU9vVyxNQUFQLEdBQWdCLEVBQWhCO0FBQ0FwVyxPQUFPc1csUUFBUCxHQUFrQixJQUFsQjtBQUNBdFcsT0FBT3VXLFdBQVAsR0FBcUIsQ0FBckI7QUFDQXZXLE9BQU8vSixNQUFQLEdBQWdCLEtBQWhCO0FBQ0ErSixPQUFPd1csU0FBUCxHQUFtQixFQUFuQjtBQUNBeFcsT0FBT3lXLFlBQVAsR0FBc0IsZ0JBQXRCO0FBQ0F6VyxPQUFPMFcsZUFBUCxHQUF5QjtBQUFBLFNBQUtwTyw0QkFBTDtBQUFBLENBQXpCOztBQUVBOzs7Ozs7OztBQVFBdEksT0FBTzJXLEdBQVAsR0FBYSxVQUFVcmYsSUFBVixFQUFnQnNmLE9BQWhCLEVBQXVDO0FBQUEsTUFBZC9nQixPQUFjLHVFQUFKLEVBQUk7O0FBQ2xELE1BQUlnaEIsaUJBQWlCO0FBQ25CemUsY0FBVSxFQURTO0FBRW5CeUssaUJBQWEsRUFGTTtBQUduQmlVLGNBQVUsS0FIUztBQUluQjlKLGFBQVMsaUJBQUNvSSxVQUFELEVBQWdCLENBQUU7QUFKUixHQUFyQjs7QUFPQSxNQUFHLENBQUN2ZixRQUFRdUMsUUFBVCxJQUFxQixDQUFDdkMsUUFBUWdOLFdBQWpDLEVBQThDO0FBQzVDaE4sWUFBUWloQixRQUFSLEdBQW1CLElBQW5CO0FBQ0Q7O0FBRUQsTUFBRyxLQUFLcEksR0FBTCxDQUFTcFgsSUFBVCxDQUFILEVBQW1CO0FBQ2pCLFVBQU0sSUFBSUYsS0FBSixvQkFBMkJFLElBQTNCLHlCQUFOO0FBQ0Q7O0FBRUQsT0FBS3lmLFFBQUwsQ0FBY3pmLElBQWQsRUFBb0JzZixPQUFwQixlQUFpQ0MsY0FBakMsRUFBb0RoaEIsT0FBcEQ7O0FBRUEsU0FBTyxJQUFQO0FBQ0QsQ0FuQkQ7O0FBcUJBOzs7OztBQUtBbUssT0FBT3RDLE1BQVAsR0FBZ0IsVUFBU3BHLElBQVQsRUFBZTtBQUM3QixPQUFJLElBQUkwQixJQUFJLENBQVIsRUFBV0MsSUFBSSxLQUFLbWQsTUFBTCxDQUFZemMsTUFBL0IsRUFBdUNYLElBQUlDLENBQTNDLEVBQThDRCxHQUE5QyxFQUFtRDtBQUNqRCxRQUFHLEtBQUtvZCxNQUFMLENBQVlwZCxDQUFaLEVBQWUxQixJQUFmLElBQXVCQSxJQUExQixFQUFnQztBQUM5QixXQUFLOGUsTUFBTCxDQUFZbFksTUFBWixDQUFtQmxGLENBQW5CLEVBQXNCLENBQXRCOztBQUVBO0FBQ0Q7QUFDRjtBQUNGLENBUkQ7O0FBVUE7Ozs7OztBQU1BZ0gsT0FBTzBPLEdBQVAsR0FBYSxVQUFTcFgsSUFBVCxFQUFlO0FBQzFCLE9BQUksSUFBSTBCLElBQUksQ0FBUixFQUFXQyxJQUFJLEtBQUttZCxNQUFMLENBQVl6YyxNQUEvQixFQUF1Q1gsSUFBSUMsQ0FBM0MsRUFBOENELEdBQTlDLEVBQW1EO0FBQ2pELFFBQUcsS0FBS29kLE1BQUwsQ0FBWXBkLENBQVosRUFBZTFCLElBQWYsSUFBdUJBLElBQTFCLEVBQWdDO0FBQzlCLGFBQU8sSUFBUDtBQUNEO0FBQ0Y7O0FBRUQsU0FBTyxLQUFQO0FBQ0QsQ0FSRDs7QUFVQTs7Ozs7Ozs7O0FBU0EwSSxPQUFPcVYsS0FBUCxHQUFlLFVBQVUvZCxJQUFWLEVBQWtFO0FBQUEsTUFBbERtWixNQUFrRCx1RUFBekMsRUFBeUM7QUFBQSxNQUFyQ2dCLEtBQXFDLHVFQUE3QixFQUE2QjtBQUFBLE1BQXpCdkwsSUFBeUIsdUVBQWxCLEVBQWtCO0FBQUEsTUFBZHJRLE9BQWMsdUVBQUosRUFBSTs7QUFDL0UsTUFBSXdmLFFBQVEsS0FBSzJCLFFBQUwsQ0FBYzFmLElBQWQsQ0FBWjs7QUFFQSxNQUFJLENBQUMrZCxLQUFMLEVBQVk7QUFDVixVQUFNLElBQUlqZSxLQUFKLHNDQUE2Q0UsSUFBN0MsQ0FBTjtBQUNEOztBQUVELE1BQUlpWSxNQUFNLEtBQUswSCxjQUFMLENBQW9CNUIsS0FBcEIsRUFBMkI1RSxNQUEzQixFQUFtQ2dCLEtBQW5DLEVBQTBDdkwsSUFBMUMsQ0FBVjs7QUFFQSxNQUFHLENBQUNyUSxRQUFRcWhCLE1BQVQsSUFBbUIzSCxRQUFRLEtBQUs0SCxNQUFMLEVBQTlCLEVBQTZDO0FBQzNDO0FBQ0Q7O0FBRUQsT0FBS1gsU0FBTCxHQUFpQjNnQixPQUFqQjtBQUNBLE9BQUt1aEIsTUFBTCxDQUFZN0gsR0FBWjtBQUNELENBZkQ7O0FBaUJBOzs7QUFHQXZQLE9BQU9xWCxJQUFQLEdBQWMsWUFBVztBQUN2QixTQUFPdmEsT0FBT3dhLE9BQVAsQ0FBZUQsSUFBZixDQUFvQnphLEtBQXBCLENBQTBCRSxPQUFPd2EsT0FBakMsRUFBMEMxWixTQUExQyxDQUFQO0FBQ0QsQ0FGRDs7QUFJQTs7O0FBR0FvQyxPQUFPdVgsRUFBUCxHQUFZLFlBQVc7QUFDckIsU0FBT3phLE9BQU93YSxPQUFQLENBQWVDLEVBQWYsQ0FBa0IzYSxLQUFsQixDQUF3QkUsT0FBT3dhLE9BQS9CLEVBQXdDMVosU0FBeEMsQ0FBUDtBQUNELENBRkQ7O0FBSUE7OztBQUdBb0MsT0FBT3dYLE9BQVAsR0FBaUIsWUFBVztBQUMxQixTQUFPMWEsT0FBT3dhLE9BQVAsQ0FBZUUsT0FBZixDQUF1QjVhLEtBQXZCLENBQTZCRSxPQUFPd2EsT0FBcEMsRUFBNkMxWixTQUE3QyxDQUFQO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7O0FBTUFvQyxPQUFPeVgsUUFBUCxHQUFrQixVQUFTbEksR0FBVCxFQUEyQztBQUFBLE1BQTdCMVosT0FBNkIsdUVBQW5CLEVBQUVxaEIsUUFBUSxLQUFWLEVBQW1COztBQUMzRCxPQUFLVixTQUFMLEdBQWlCM2dCLE9BQWpCOztBQUVBLE1BQUcsS0FBS3lnQixRQUFSLEVBQWtCO0FBQ2hCeFosV0FBTzJhLFFBQVAsQ0FBZ0J2UixJQUFoQixHQUF1QnFKLEdBQXZCO0FBQ0QsR0FGRCxNQUdLO0FBQ0h6UyxXQUFPd2EsT0FBUCxDQUFlSSxTQUFmLENBQXlCLElBQXpCLEVBQStCLEVBQS9CLEVBQW1DbkksR0FBbkM7QUFDRDtBQUNGLENBVEQ7O0FBV0E7Ozs7OztBQU1BdlAsT0FBT3JCLElBQVAsR0FBYyxZQUE0QztBQUFBOztBQUFBLE1BQWxDZ1osVUFBa0MsdUVBQXJCLEVBQXFCO0FBQUEsTUFBakJyQixRQUFpQix1RUFBTixJQUFNOztBQUN4RCxNQUFJc0IsZUFBZTlhLE9BQU93YSxPQUFQLENBQWVJLFNBQWxDOztBQUVBNWEsU0FBT3dhLE9BQVAsQ0FBZUksU0FBZixHQUEyQixZQUFXO0FBQ3BDLFFBQUk5ZSxNQUFNZ2YsYUFBYWhiLEtBQWIsQ0FBbUIsSUFBbkIsRUFBeUJnQixTQUF6QixDQUFWOztBQUVBb0MsV0FBT2pCLFdBQVA7O0FBRUEsV0FBT25HLEdBQVA7QUFDRCxHQU5EOztBQVFBLE9BQUtpZixzQkFBTCxHQUE4QixZQUFNO0FBQ2xDLFVBQUs5WSxXQUFMO0FBQ0QsR0FGRDs7QUFJQSxPQUFLNFksVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxPQUFLckIsUUFBTCxHQUFnQkEsUUFBaEI7O0FBRUEsT0FBS0YsTUFBTCxDQUFZakosSUFBWixDQUFpQixVQUFDRSxDQUFELEVBQUlDLENBQUosRUFBVTtBQUN6QkQsUUFBSUEsRUFBRS9WLElBQUYsQ0FBT3FhLEtBQVAsQ0FBYSxHQUFiLEVBQWtCaFksTUFBdEI7QUFDQTJULFFBQUlBLEVBQUVoVyxJQUFGLENBQU9xYSxLQUFQLENBQWEsR0FBYixFQUFrQmhZLE1BQXRCOztBQUVBLFdBQU8wVCxJQUFJQyxDQUFYO0FBQ0QsR0FMRDs7QUFPQSxNQUFJOEksU0FBUyxFQUFiOztBQUVBLE9BQUssSUFBSXBkLElBQUksQ0FBUixFQUFXQyxJQUFJLEtBQUttZCxNQUFMLENBQVl6YyxNQUFoQyxFQUF3Q1gsSUFBSUMsQ0FBNUMsRUFBK0NELEdBQS9DLEVBQW9EO0FBQ2xELFFBQUlxYyxRQUFRLEtBQUtlLE1BQUwsQ0FBWXBkLENBQVosQ0FBWjtBQUNBLFFBQUl3TCxVQUFVLEVBQWQ7O0FBRUE0UixXQUFPZixNQUFNL2QsSUFBYixJQUFxQitkLEtBQXJCO0FBQ0FBLFVBQU05WixRQUFOLEdBQWlCLEVBQWpCO0FBQ0FpSixjQUFVNlEsTUFBTS9kLElBQU4sQ0FBV3FhLEtBQVgsQ0FBaUIsR0FBakIsQ0FBVjtBQUNBbk4sWUFBUXNULEdBQVI7QUFDQXpDLFVBQU1ySixLQUFOLEdBQWNxSixNQUFNeUIsUUFBTixHQUFnQixJQUFoQixHQUFzQnRTLFFBQVE3SyxNQUE1Qzs7QUFFQSxRQUFJNkssUUFBUTdLLE1BQVosRUFBb0I7QUFDbEIsVUFBSW9lLGFBQWF2VCxRQUFReE4sSUFBUixDQUFhLEdBQWIsQ0FBakI7QUFDQSxVQUFJb0wsU0FBU2dVLE9BQU8yQixVQUFQLENBQWI7O0FBRUEsVUFBSSxDQUFDM1YsTUFBTCxFQUFhO0FBQ1gsY0FBTSxJQUFJaEwsS0FBSixvQ0FBMkMyZ0IsVUFBM0MsZUFBK0QxQyxNQUFNL2QsSUFBckUsT0FBTjtBQUNEOztBQUVELFVBQUcrZCxNQUFNckosS0FBTixLQUFnQixJQUFoQixJQUF3QjVKLE9BQU8wVSxRQUFsQyxFQUE0QztBQUMxQ3pCLGNBQU1ySixLQUFOO0FBQ0Q7O0FBRURxSixZQUFNMkMsV0FBTixHQUFvQixLQUFLQyxZQUFMLENBQWtCN1YsT0FBTzRWLFdBQVAsR0FBcUIsR0FBckIsR0FBMkIzQyxNQUFNdUIsT0FBbkQsQ0FBcEI7QUFDQXhVLGFBQU83RyxRQUFQLENBQWdCckQsSUFBaEIsQ0FBcUJtZCxLQUFyQjtBQUNELEtBZEQsTUFlSztBQUNIQSxZQUFNMkMsV0FBTixHQUFvQjNDLE1BQU11QixPQUExQjtBQUNEO0FBQ0Y7O0FBRUQsTUFBRyxDQUFDLEtBQUtSLE1BQUwsQ0FBWXpjLE1BQWIsSUFBdUIsZ0JBQU05RCxPQUFOLENBQWNHLEtBQXhDLEVBQStDO0FBQzdDZ0csWUFBUUMsSUFBUjtBQUNEOztBQUVEYSxTQUFPUSxnQkFBUCxDQUF3QixVQUF4QixFQUFvQyxLQUFLdWEsc0JBQXpDO0FBQ0EsT0FBSzVoQixNQUFMLEdBQWMsSUFBZDtBQUNELENBL0REOztBQWlFQTs7Ozs7O0FBTUErSixPQUFPZ1gsUUFBUCxHQUFrQixVQUFVMWYsSUFBVixFQUFnQjtBQUNoQyxPQUFLLElBQUkwQixJQUFJLENBQVIsRUFBV0MsSUFBSSxLQUFLbWQsTUFBTCxDQUFZemMsTUFBaEMsRUFBd0NYLElBQUlDLENBQTVDLEVBQStDRCxHQUEvQyxFQUFvRDtBQUNsRCxRQUFJcWMsUUFBUSxLQUFLZSxNQUFMLENBQVlwZCxDQUFaLENBQVo7O0FBRUEsUUFBSXFjLE1BQU0vZCxJQUFOLElBQWNBLElBQWxCLEVBQXdCO0FBQ3RCLGFBQU8rZCxLQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPLElBQVA7QUFDRCxDQVZEOztBQVlBOzs7Ozs7O0FBT0FyVixPQUFPK1csUUFBUCxHQUFrQixVQUFVemYsSUFBVixFQUFnQnNmLE9BQWhCLEVBQXVDO0FBQUEsTUFBZC9nQixPQUFjLHVFQUFKLEVBQUk7O0FBQ3ZELE1BQUl3ZixxQkFBWXhmLE9BQVosSUFBcUJ5QixVQUFyQixFQUEyQnNmLGdCQUEzQixHQUFKOztBQUVBNVcsU0FBT29XLE1BQVAsQ0FBY2xlLElBQWQsQ0FBbUJtZCxLQUFuQjs7QUFFQSxTQUFPQSxLQUFQO0FBQ0QsQ0FORDs7QUFRQTs7Ozs7QUFLQXJWLE9BQU9rWSxXQUFQLEdBQXFCLFVBQVU1Z0IsSUFBVixFQUFnQjtBQUNuQyxPQUFLLElBQUkwQixJQUFJLENBQVIsRUFBV0MsSUFBSSxLQUFLbWQsTUFBTCxDQUFZemMsTUFBaEMsRUFBd0NYLElBQUlDLENBQTVDLEVBQStDRCxHQUEvQyxFQUFvRDtBQUNsRCxRQUFJcWMsUUFBUSxLQUFLZSxNQUFMLENBQVlwZCxDQUFaLENBQVo7O0FBRUEsUUFBSXFjLE1BQU0vZCxJQUFOLElBQWNBLElBQWxCLEVBQXdCO0FBQ3RCLFdBQUs4ZSxNQUFMLENBQVlsWSxNQUFaLENBQW1CbEYsQ0FBbkIsRUFBc0IsQ0FBdEI7O0FBRUE7QUFDRDtBQUNGO0FBQ0YsQ0FWRDs7QUFZQTs7Ozs7QUFLQWdILE9BQU9vWCxNQUFQLEdBQWdCLFVBQVU3SCxHQUFWLEVBQWU7QUFDN0IsT0FBSytHLFFBQUwsR0FBZSxLQUFLNkIsVUFBTCxDQUFnQjVJLEdBQWhCLENBQWYsR0FBcUMsS0FBSzZJLGFBQUwsQ0FBbUI3SSxHQUFuQixDQUFyQztBQUNELENBRkQ7O0FBSUE7Ozs7O0FBS0F2UCxPQUFPb1ksYUFBUCxHQUF1QixVQUFVN0ksR0FBVixFQUFlO0FBQ3BDelMsU0FBT3dhLE9BQVAsQ0FBZUksU0FBZixDQUF5QixJQUF6QixFQUErQixFQUEvQixFQUFtQ25JLEdBQW5DO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7QUFLQXZQLE9BQU9tWSxVQUFQLEdBQW9CLFVBQVU1SSxHQUFWLEVBQWU7QUFDakN6UyxTQUFPMmEsUUFBUCxDQUFnQnZSLElBQWhCLEdBQXVCLE9BQU9xSixPQUFPLEdBQWQsQ0FBdkI7QUFDRCxDQUZEOztBQUlBOzs7OztBQUtBdlAsT0FBT21YLE1BQVAsR0FBZ0IsWUFBWTtBQUMxQixTQUFPLEtBQUtiLFFBQUwsR0FBZ0IsS0FBSytCLFVBQUwsRUFBaEIsR0FBb0MsS0FBS0MsYUFBTCxFQUEzQztBQUNELENBRkQ7O0FBSUE7Ozs7O0FBS0F0WSxPQUFPc1ksYUFBUCxHQUF1QixZQUFZO0FBQ2pDLE1BQUd4YixPQUFPMmEsUUFBUCxDQUFnQmMsUUFBaEIsS0FBNkIsR0FBaEMsRUFBcUM7QUFDbkMsV0FBTyxFQUFQO0FBQ0Q7O0FBRUQsU0FBT3piLE9BQU8yYSxRQUFQLENBQWdCYyxRQUFoQixHQUEyQnpiLE9BQU8yYSxRQUFQLENBQWdCZSxNQUEzQyxHQUFvRDFiLE9BQU8yYSxRQUFQLENBQWdCdlIsSUFBM0U7QUFDRCxDQU5EOztBQVFBOzs7OztBQUtBbEcsT0FBT3FZLFVBQVAsR0FBb0IsWUFBWTtBQUM5QixTQUFPdmIsT0FBTzJhLFFBQVAsQ0FBZ0J2UixJQUFoQixDQUFxQjdOLE9BQXJCLENBQTZCLElBQTdCLEVBQW1DLEVBQW5DLENBQVA7QUFDRCxDQUZEOztBQUlBOzs7OztBQUtBMkgsT0FBT3lZLFdBQVAsR0FBcUIsWUFBVztBQUM5QixTQUFPLEtBQUtuQyxRQUFMLEdBQWdCLEtBQUtvQyxlQUFMLEVBQWhCLEdBQXlDLEtBQUtDLGtCQUFMLEVBQWhEO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7QUFLQTNZLE9BQU8yWSxrQkFBUCxHQUE0QixZQUFXO0FBQ3JDLFNBQU8sa0JBQVFDLGVBQVIsQ0FBd0I5YixPQUFPMmEsUUFBUCxDQUFnQmUsTUFBaEIsQ0FBdUJuZ0IsT0FBdkIsQ0FBK0IsS0FBL0IsRUFBc0MsRUFBdEMsQ0FBeEIsQ0FBUDtBQUNELENBRkQ7O0FBSUE7Ozs7O0FBS0EySCxPQUFPMFksZUFBUCxHQUF5QixZQUFXO0FBQ2xDLFNBQU8sa0JBQVFFLGVBQVIsQ0FBeUI5YixPQUFPMmEsUUFBUCxDQUFnQnZSLElBQWhCLENBQXFCeUwsS0FBckIsQ0FBMkIsR0FBM0IsRUFBZ0MsQ0FBaEMsS0FBc0MsRUFBL0QsQ0FBUDtBQUNELENBRkQ7O0FBSUE7Ozs7Ozs7O0FBUUEzUixPQUFPaVgsY0FBUCxHQUF3QixVQUFVNUIsS0FBVixFQUFxRDtBQUFBLE1BQXBDNUUsTUFBb0MsdUVBQTNCLEVBQTJCO0FBQUEsTUFBdkJnQixLQUF1Qix1RUFBZixFQUFlO0FBQUEsTUFBWHZMLElBQVcsdUVBQUosRUFBSTs7QUFDM0UsVUFBT21QLEtBQVAseUNBQU9BLEtBQVAsT0FBaUIsUUFBakIsS0FBOEJBLFFBQVEsS0FBSzJCLFFBQUwsQ0FBYzNCLEtBQWQsQ0FBdEM7O0FBRUEsTUFBSTlGLE1BQU04RixNQUFNMkMsV0FBTixDQUFrQjNmLE9BQWxCLENBQTBCLEtBQUtvZSxZQUEvQixFQUE2QyxVQUFDblIsQ0FBRCxFQUFJdVQsQ0FBSixFQUFPdEgsQ0FBUCxFQUFhO0FBQ2xFLFdBQU9kLE9BQU9jLENBQVAsS0FBYSxFQUFwQjtBQUNELEdBRlMsQ0FBVjs7QUFJQWhDLFFBQU0sS0FBSzBJLFlBQUwsQ0FBa0IxSSxHQUFsQixDQUFOOztBQUVBLE1BQUczVSxPQUFPaEUsSUFBUCxDQUFZNmEsS0FBWixFQUFtQjlYLE1BQXRCLEVBQThCO0FBQzVCNFYsV0FBTyxNQUFNLGtCQUFRbUIsYUFBUixDQUFzQmUsS0FBdEIsQ0FBYjtBQUNEOztBQUVEdkwsU0FBTyxDQUFDQSxRQUFRLEVBQVQsRUFBYTdOLE9BQWIsQ0FBcUIsR0FBckIsRUFBMEIsRUFBMUIsQ0FBUDs7QUFFQSxNQUFHLENBQUMsS0FBS2llLFFBQU4sSUFBa0JwUSxJQUFyQixFQUEyQjtBQUN6QnFKLFdBQU8sTUFBTXJKLElBQWI7QUFDRDs7QUFFRCxTQUFPcUosR0FBUDtBQUNELENBcEJEOztBQXNCQTs7Ozs7O0FBTUF2UCxPQUFPaVksWUFBUCxHQUFzQixVQUFVMUksR0FBVixFQUFlO0FBQ25DLFNBQU9BLElBQUlsWCxPQUFKLENBQVksUUFBWixFQUFzQixHQUF0QixDQUFQO0FBQ0QsQ0FGRDs7QUFJQTs7O0FBR0EySCxPQUFPdUwsS0FBUCxHQUFlLFlBQVk7QUFDekJ6TyxTQUFPVSxtQkFBUCxDQUEyQixVQUEzQixFQUF1QyxLQUFLcWEsc0JBQTVDO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7OztBQU9BN1gsT0FBTzhZLGlCQUFQLEdBQTJCLFVBQVV6RCxLQUFWLEVBQWlCOUYsR0FBakIsRUFBc0I7QUFDL0MsVUFBTzhGLEtBQVAseUNBQU9BLEtBQVAsT0FBaUIsUUFBakIsS0FBOEJBLFFBQVEsS0FBSzJCLFFBQUwsQ0FBYzNCLEtBQWQsQ0FBdEM7O0FBRUEsTUFBSXplLE9BQU8sRUFBWDtBQUNBLE1BQUlvQyxJQUFJLENBQVI7QUFDQSxNQUFJeVgsU0FBUyxFQUFiOztBQUVBbEIsUUFBTUEsSUFBSW9DLEtBQUosQ0FBVSxHQUFWLEVBQWUsQ0FBZixDQUFOO0FBQ0FwQyxRQUFNQSxJQUFJb0MsS0FBSixDQUFVLEdBQVYsRUFBZSxDQUFmLENBQU47O0FBRUEsTUFBSW9ILGFBQWExRCxNQUFNMkMsV0FBTixDQUFrQjNmLE9BQWxCLENBQTBCLEtBQUtvZSxZQUEvQixFQUE2QyxVQUFDblIsQ0FBRCxFQUFJdVQsQ0FBSixFQUFPdEgsQ0FBUCxFQUFhO0FBQ3pFM2EsU0FBS3NCLElBQUwsQ0FBVXFaLENBQVY7O0FBRUEsV0FBTyxXQUFQO0FBQ0QsR0FKZ0IsQ0FBakI7O0FBTUEsTUFBSXlILFFBQVEsSUFBSTdZLE1BQUosQ0FBVzRZLFVBQVgsQ0FBWjtBQUNBLE1BQUlFLGFBQWExSixJQUFJckMsS0FBSixDQUFVOEwsS0FBVixDQUFqQjs7QUFFQSxNQUFJLENBQUNDLFVBQUwsRUFBaUI7QUFDZixXQUFPLElBQVA7QUFDRDs7QUFFRDFKLE1BQUlsWCxPQUFKLENBQVkyZ0IsS0FBWixFQUFtQixVQUFDMVQsQ0FBRCxFQUFJaU0sQ0FBSixFQUFVO0FBQzNCQSxVQUFNZCxPQUFPN1osS0FBS29DLENBQUwsQ0FBUCxJQUFrQnVZLENBQXhCO0FBQ0F2WTtBQUNELEdBSEQ7O0FBS0EsU0FBTyxFQUFFeVgsY0FBRixFQUFQO0FBQ0QsQ0E3QkQ7O0FBK0JBOzs7Ozs7O0FBT0F6USxPQUFPa1osYUFBUCxHQUF1QixVQUFTN0QsS0FBVCxFQUFrQztBQUFBLE1BQWxCOEQsUUFBa0IsdUVBQVAsS0FBTzs7QUFDdkQsVUFBTzlELEtBQVAseUNBQU9BLEtBQVAsT0FBaUIsUUFBakIsS0FBOEJBLFFBQVEsS0FBSzJCLFFBQUwsQ0FBYzNCLEtBQWQsQ0FBdEM7O0FBRUEsTUFBSTlGLE1BQU0sS0FBSzBJLFlBQUwsQ0FBa0IsS0FBS2QsTUFBTCxHQUFjeEYsS0FBZCxDQUFvQixHQUFwQixFQUF5QixDQUF6QixJQUE4QixHQUFoRCxDQUFWO0FBQ0EsTUFBSW9ILGFBQWExRCxNQUFNMkMsV0FBTixDQUFrQjNmLE9BQWxCLENBQTBCLEtBQUtvZSxZQUEvQixFQUE2QyxXQUE3QyxDQUFqQjtBQUNBLE1BQUloZSxNQUFNMGdCLFdBQVVKLFVBQVYsR0FBc0IsS0FBS2QsWUFBTCxDQUFrQixNQUFNYyxVQUFOLEdBQW1CLEtBQXJDLENBQWhDO0FBQ0EsTUFBSUMsUUFBUSxJQUFJN1ksTUFBSixDQUFXMUgsR0FBWCxDQUFaOztBQUVBLFNBQU91Z0IsTUFBTXpVLElBQU4sQ0FBV2dMLEdBQVgsQ0FBUDtBQUNELENBVEQ7O0FBV0E7Ozs7OztBQU1BdlAsT0FBT29aLGFBQVAsR0FBdUIsVUFBUy9ELEtBQVQsRUFBZ0I7QUFDckMsU0FBT3JWLE9BQU9rWixhQUFQLENBQXFCN0QsS0FBckIsRUFBNEIsSUFBNUIsQ0FBUDtBQUNELENBRkQ7O0FBSUE7Ozs7O0FBS0FyVixPQUFPcVosUUFBUCxHQUFrQixVQUFVck4sS0FBVixFQUFpQjtBQUFBOztBQUNqQyxNQUFJaFQsSUFBSSxDQUFSOztBQUVBLE1BQUk2UyxPQUFPLFNBQVBBLElBQU8sQ0FBQy9VLEVBQUQsRUFBUTtBQUNqQixRQUFJdWYsUUFBUXZmLEdBQUcwRSxLQUFILENBQVMsT0FBS2tiLGVBQWQsQ0FBWjs7QUFFQSxRQUFJLENBQUNMLEtBQUwsRUFBWTtBQUNWLGFBQU8sSUFBUDtBQUNEOztBQUVELFFBQUlyZCxLQUFLZ1QsS0FBVCxFQUFnQjtBQUNkLGFBQU9xSyxLQUFQO0FBQ0Q7O0FBRURyZDs7QUFFQSxXQUFPNlMsS0FBS3dLLEtBQUwsQ0FBUDtBQUNELEdBZEQ7O0FBZ0JBLFNBQU94SyxLQUFLLGdCQUFNelEsSUFBWCxDQUFQO0FBQ0QsQ0FwQkQ7O0FBc0JBOzs7Ozs7O0FBT0E0RSxPQUFPc1osc0JBQVAsR0FBZ0MsVUFBVXpoQixHQUFWLEVBQWUwWCxHQUFmLEVBQW9CO0FBQ2xELE9BQUssSUFBSXZXLElBQUksQ0FBUixFQUFXQyxJQUFJcEIsSUFBSThCLE1BQXhCLEVBQWdDWCxJQUFJQyxDQUFwQyxFQUF1Q0QsR0FBdkMsRUFBNEM7QUFDMUMsUUFBSXFjLFFBQVF4ZCxJQUFJbUIsQ0FBSixDQUFaO0FBQ0EsUUFBSTZhLFVBQVUsS0FBS2lGLGlCQUFMLENBQXVCekQsS0FBdkIsRUFBOEI5RixHQUE5QixDQUFkOztBQUVBLFFBQUksQ0FBQ3NFLE9BQUwsRUFBYztBQUNaO0FBQ0Q7O0FBRUQsc0JBQVF3QixPQUFPQSxLQUFmLElBQXlCeEIsT0FBekI7QUFDRDs7QUFFRCxTQUFPLElBQVA7QUFDRCxDQWJEOztBQWVBOzs7Ozs7QUFNQTdULE9BQU91WixnQkFBUCxHQUEwQixVQUFVdk4sS0FBVixFQUFpQjtBQUN6QyxNQUFJb0ssU0FBUyxFQUFiOztBQUVBLE9BQUssSUFBSXBkLElBQUksQ0FBUixFQUFXQyxJQUFJLEtBQUttZCxNQUFMLENBQVl6YyxNQUFoQyxFQUF3Q1gsSUFBSUMsQ0FBNUMsRUFBK0NELEdBQS9DLEVBQW9EO0FBQ2xELFFBQUlxYyxRQUFRLEtBQUtlLE1BQUwsQ0FBWXBkLENBQVosQ0FBWjs7QUFFQSxRQUFJcWMsTUFBTXJKLEtBQU4sR0FBY0EsS0FBbEIsRUFBeUI7QUFDdkI7QUFDRCxLQUZELE1BR0ssSUFBSXFKLE1BQU1ySixLQUFOLEdBQWNBLEtBQWxCLEVBQXlCO0FBQzVCO0FBQ0Q7O0FBRURvSyxXQUFPbGUsSUFBUCxDQUFZbWQsS0FBWjtBQUNEOztBQUVELFNBQU9lLE1BQVA7QUFDRCxDQWpCRDs7QUFtQkE7OztBQUdBcFcsT0FBT2pCLFdBQVAsR0FBcUIsWUFBWTtBQUFBOztBQUMvQixNQUFHLEtBQUt5YSxlQUFSLEVBQXlCO0FBQ3ZCLFdBQU8sS0FBS0EsZUFBWjs7QUFFQTtBQUNEOztBQUVELE1BQUlqSyxNQUFNLEtBQUs0SCxNQUFMLEVBQVY7QUFDQSxNQUFJalIsT0FBTyxLQUFLb1EsUUFBTCxHQUFlLEVBQWYsR0FBbUJ4WixPQUFPMmEsUUFBUCxDQUFnQnZSLElBQWhCLENBQXFCN04sT0FBckIsQ0FBNkIsR0FBN0IsRUFBa0MsRUFBbEMsQ0FBOUI7QUFDQSxNQUFJb1osUUFBUSxLQUFLZ0gsV0FBTCxFQUFaO0FBQ0EsTUFBSWdCLGlCQUFpQnpaLE9BQU9vVixVQUFQLElBQXFCLElBQTFDO0FBQ0EsTUFBSUEsYUFBYXBWLE9BQU9vVixVQUFQLEdBQW9CLElBQUljLFVBQUosQ0FBZTNHLEdBQWYsRUFBb0JrQyxLQUFwQixFQUEyQnZMLElBQTNCLEVBQWlDdVQsY0FBakMsQ0FBckM7QUFDQSxNQUFJek4sUUFBUSxDQUFaOztBQUVBLE1BQUl5QixPQUFPLFNBQVBBLElBQU8sQ0FBQzJJLE1BQUQsRUFBU3NELEtBQVQsRUFBbUI7QUFDNUIsUUFBSSxDQUFDdEQsT0FBT3pjLE1BQVosRUFBb0I7QUFDbEIsYUFBTytmLFNBQVNBLE9BQWhCO0FBQ0Q7O0FBRUQsUUFBSTdGLFVBQVUsT0FBS3lGLHNCQUFMLENBQTRCbEQsTUFBNUIsRUFBb0M3RyxHQUFwQyxDQUFkOztBQUVBLFFBQUksQ0FBQ3NFLE9BQUwsRUFBYztBQUNaLGFBQU82RixTQUFTQSxPQUFoQjtBQUNEOztBQUVELFFBQUlyRSxRQUFReEIsUUFBUXdCLEtBQXBCO0FBQ0EsUUFBSTVFLFNBQVNvRCxRQUFRcEQsTUFBckI7QUFDQSxRQUFJNEYsUUFBUWhCLE1BQU15QixRQUFOLEdBQWdCLElBQWhCLEdBQXNCLE9BQUt1QyxRQUFMLENBQWNoRSxNQUFNckosS0FBcEIsQ0FBbEM7O0FBRUEsUUFBSSxDQUFDcUssS0FBRCxJQUFVLENBQUNoQixNQUFNeUIsUUFBckIsRUFBK0I7QUFDN0IsWUFBTSxJQUFJMWYsS0FBSiwyQ0FBbURpZSxNQUFNL2QsSUFBekQsT0FBTjtBQUNEOztBQUVEOGQsZUFBV3VFLE9BQVgsQ0FBbUIsRUFBRXRFLFlBQUYsRUFBUzVFLGNBQVQsRUFBaUJnQixZQUFqQixFQUF3QnZMLFVBQXhCLEVBQThCOU0sV0FBV2lkLEtBQXpDLEVBQWdEdUQsUUFBUSxJQUF4RCxFQUFuQjtBQUNBNU47O0FBRUEsUUFBSTZOLFdBQVdKLGtCQUFrQkEsZUFBZUksUUFBZixDQUF3QnhFLEtBQXhCLENBQWpDO0FBQ0EsUUFBSXlFLGNBQWMsSUFBbEI7O0FBRUEsUUFBR0QsUUFBSCxFQUFhO0FBQ1gsVUFBSXhELFNBQVFvRCxlQUFlSixRQUFmLENBQXdCaEUsS0FBeEIsQ0FBWjtBQUNBLFVBQUkwRSxPQUFPLEVBQUV0SixRQUFRNEYsT0FBTTVGLE1BQWhCLEVBQXdCZ0IsT0FBTzRFLE9BQU01RSxLQUFyQyxFQUE0Q3ZMLE1BQU1tUSxPQUFNblEsSUFBeEQsRUFBWDtBQUNBLFVBQUk0SCxVQUFVLEVBQUUyQyxjQUFGLEVBQVVnQixZQUFWLEVBQWlCdkwsVUFBakIsRUFBZDs7QUFFQTRULG9CQUFjLENBQUMsZ0JBQU1qTSxPQUFOLENBQWNrTSxJQUFkLEVBQW9Cak0sT0FBcEIsQ0FBZjtBQUNEOztBQUVELFFBQUlrTSxZQUFZLE9BQUt4RCxTQUFMLENBQWVVLE1BQWYsS0FBMEI1ZCxTQUExQixJQUF1QyxDQUFDd2dCLFdBQXhEO0FBQ0EsUUFBSUcsV0FBVyxPQUFLekQsU0FBTCxDQUFlVSxNQUFmLEtBQTBCLEtBQXpDOztBQUVBLFFBQUkyQyxhQUFhRyxhQUFhQyxRQUExQixDQUFKLEVBQXlDO0FBQ3ZDN0UsaUJBQVdFLElBQVgsQ0FBZ0JzRSxNQUFoQixHQUF5QixLQUF6Qjs7QUFFQSxhQUFPbk0sS0FBSzRILE1BQU05WixRQUFYLEVBQXFCbWUsS0FBckIsQ0FBUDtBQUNEOztBQUVEL2QsWUFBUXFHLE9BQVIsQ0FBZ0JxVCxNQUFNckksT0FBTixDQUFjb0ksVUFBZCxDQUFoQixFQUEyQ3ZaLElBQTNDLENBQWdELFVBQUNtSCxJQUFELEVBQVU7QUFDeEQsVUFBSW9TLFdBQVduYSxXQUFmLEVBQTRCO0FBQzFCLGVBQU95ZSxTQUFTQSxPQUFoQjtBQUNEOztBQUVEdEUsaUJBQVdFLElBQVgsQ0FBZ0J0UyxJQUFoQixHQUF1QkEsSUFBdkI7O0FBRUEsVUFBR3FTLE1BQU15QixRQUFULEVBQW1CO0FBQ2pCLGVBQU9ySixLQUFLNEgsTUFBTTlaLFFBQVgsRUFBcUJtZSxLQUFyQixDQUFQO0FBQ0Q7O0FBRURyRCxZQUFNNkQsYUFBTixDQUFvQjlFLFVBQXBCLEVBQWdDdlosSUFBaEMsQ0FBcUMsWUFBTTtBQUN6Q3VaLG1CQUFXRSxJQUFYLENBQWdCc0UsTUFBaEIsR0FBeUIsSUFBekI7O0FBRUFuTSxhQUFLNEgsTUFBTTlaLFFBQVgsRUFBcUJtZSxLQUFyQjtBQUNELE9BSkQ7QUFLRCxLQWhCRDtBQWlCRCxHQTNERDs7QUE2REFqTSxPQUFLLEtBQUs4TCxnQkFBTCxDQUFzQixDQUF0QixDQUFMLEVBQStCLFlBQU07QUFDbkMsUUFBRyxDQUFDbkUsV0FBV2UsTUFBWCxDQUFrQnhjLE1BQXRCLEVBQThCO0FBQzVCLFVBQUcsT0FBSzRjLFdBQVIsRUFBcUI7QUFDbkIsY0FBTSxJQUFJbmYsS0FBSixnQ0FBdUMsT0FBS3VnQixVQUE1QyxPQUFOO0FBQ0Q7O0FBRUQsVUFBRyxPQUFLQSxVQUFSLEVBQW9CO0FBQ2xCLGVBQUtyQixRQUFMLElBQWlCLE9BQUtxQixVQUFMLElBQW1CLE9BQUtSLE1BQUwsRUFBcEMsS0FBc0QsT0FBS3FDLGVBQUwsR0FBdUIsSUFBN0U7QUFDQSxlQUFLcEMsTUFBTCxDQUFZLE9BQUtPLFVBQWpCO0FBQ0EsZUFBS3BCLFdBQUw7O0FBRUEsZUFBTyxPQUFLeFgsV0FBTCxFQUFQO0FBQ0Q7O0FBRUQsVUFBRyxnQkFBTWxKLE9BQU4sQ0FBY0csS0FBakIsRUFBd0I7QUFDdEJnRyxnQkFBUUMsSUFBUjtBQUNEO0FBQ0Y7O0FBRUQsV0FBS3VhLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxXQUFLRCxXQUFMLEdBQW1CLENBQW5COztBQUVBLFFBQUdrRCxjQUFILEVBQW1CO0FBQ2pCLFdBQUksSUFBSXpnQixJQUFJZ1QsS0FBUixFQUFlL1MsSUFBSXdnQixlQUFldEQsTUFBZixDQUFzQnhjLE1BQTdDLEVBQXFEWCxJQUFJQyxDQUF6RCxFQUE0REQsR0FBNUQsRUFBaUU7QUFDL0QsWUFBSXFkLFFBQVFvRCxlQUFldEQsTUFBZixDQUFzQm5kLENBQXRCLENBQVo7QUFDQXFkLGNBQU1qZCxTQUFOLElBQW1CaWQsTUFBTWpkLFNBQU4sQ0FBZ0JxYyxLQUFoQixFQUFuQjtBQUNEO0FBQ0Y7O0FBRUQzWSxXQUFPK1ksYUFBUCxDQUFxQixJQUFJQyxXQUFKLENBQWdCLGNBQWhCLEVBQWdDO0FBQ25EQyxjQUFRWDtBQUQyQyxLQUFoQyxDQUFyQjtBQUdELEdBaENEO0FBaUNELENBNUdEOztBQThHQXBWLE9BQU9rVyxVQUFQLEdBQW9CQSxVQUFwQjs7a0JBRWVsVyxNOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZyQmY7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJaLEM7Ozs7OzZCQUtIO0FBQ2Qsc0JBQU1oRyxTQUFOLENBQWdCLEdBQWhCLEVBQXFCZ0csQ0FBckI7QUFDRDs7O0FBRUQsZUFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTnZCLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLGlJQUNWQSxJQURVOztBQUduQixVQUFLd1gsS0FBTCxHQUFhLElBQWI7QUFDQSxVQUFLNUUsTUFBTCxHQUFjLEVBQWQ7QUFDQSxVQUFLZ0IsS0FBTCxHQUFhLEVBQWI7QUFDQSxVQUFLdkwsSUFBTCxHQUFZLEVBQVo7QUFDQSxVQUFLclEsT0FBTCxHQUFlLEVBQWY7QUFDQSxVQUFLc2tCLEtBQUwsR0FBYSxNQUFLcmpCLEVBQUwsQ0FBUXdELFlBQVIsQ0FBcUIsS0FBckIsQ0FBYjtBQVJtQjtBQVNwQjs7OzsrQkFFVWlWLEcsRUFBSztBQUNkLFdBQUs2SCxNQUFMLENBQVk3SCxHQUFaO0FBQ0EsV0FBSzZLLFNBQUwsQ0FBZTdLLEdBQWY7QUFDRDs7O2lDQUVZOEYsSyxFQUFPO0FBQ2xCLFdBQUswQixRQUFMLENBQWMxQixLQUFkO0FBQ0EsV0FBSytFLFNBQUw7QUFDRDs7O2tDQUVhM0osTSxFQUFRO0FBQ3BCLFdBQUs0SixTQUFMLENBQWU1SixNQUFmO0FBQ0EsV0FBSzJKLFNBQUw7QUFDRDs7O2lDQUVZM0ksSyxFQUFPO0FBQ2xCLFdBQUs2SSxRQUFMLENBQWM3SSxLQUFkO0FBQ0EsV0FBSzJJLFNBQUw7QUFDRDs7O2dDQUVXM0ksSyxFQUFPO0FBQ2pCLFdBQUs4SSxPQUFMLENBQWE5SSxLQUFiO0FBQ0EsV0FBSzJJLFNBQUw7QUFDRDs7O21DQUVjdmtCLE8sRUFBUztBQUN0QixXQUFLeWtCLFFBQUwsQ0FBY3prQixPQUFkO0FBQ0Q7OztrQ0FFYTRELEcsRUFBSztBQUNqQixXQUFLK2dCLFNBQUwsQ0FBZS9nQixHQUFmO0FBQ0Q7Ozs4QkFFUztBQUFBOztBQUNSLFdBQUszQyxFQUFMLENBQVF3RyxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxVQUFDMEosQ0FBRCxFQUFPO0FBQ3ZDQSxVQUFFeVQsY0FBRjs7QUFFQSxZQUFHLE9BQUtOLEtBQVIsRUFBZTtBQUNiLDJCQUFPMUMsUUFBUCxDQUFnQixPQUFLN1YsS0FBTCxDQUFXMk4sR0FBM0IsRUFBZ0MsT0FBSzFaLE9BQXJDOztBQUVBO0FBQ0Q7O0FBRUQseUJBQU93ZixLQUFQLENBQWEsT0FBS0EsS0FBTCxDQUFXL2QsSUFBeEIsRUFBOEIsT0FBS21aLE1BQW5DLEVBQTJDLE9BQUtnQixLQUFoRCxFQUF1RCxPQUFLdkwsSUFBNUQsRUFBbUUsT0FBS3JRLE9BQXhFO0FBQ0QsT0FWRDtBQVdEOzs7K0JBRVU7QUFDVCxXQUFLK0wsS0FBTCxDQUFXN0ksY0FBWCxDQUEwQixPQUExQixLQUFzQyxLQUFLZ2UsUUFBTCxDQUFjLEtBQUtuVixLQUFMLENBQVd5VCxLQUF6QixDQUF0QztBQUNBLFdBQUt6VCxLQUFMLENBQVc3SSxjQUFYLENBQTBCLFFBQTFCLEtBQXVDLEtBQUtzaEIsU0FBTCxDQUFlLEtBQUt6WSxLQUFMLENBQVc2TyxNQUExQixDQUF2QztBQUNBLFdBQUs3TyxLQUFMLENBQVc3SSxjQUFYLENBQTBCLE9BQTFCLEtBQXNDLEtBQUt1aEIsUUFBTCxDQUFjLEtBQUsxWSxLQUFMLENBQVc2UCxLQUF6QixDQUF0QztBQUNBLFdBQUs3UCxLQUFMLENBQVc3SSxjQUFYLENBQTBCLE1BQTFCLEtBQXFDLEtBQUt3aEIsT0FBTCxDQUFhLEtBQUszWSxLQUFMLENBQVdzRSxJQUF4QixDQUFyQztBQUNBLFdBQUt0RSxLQUFMLENBQVc3SSxjQUFYLENBQTBCLFNBQTFCLEtBQXdDLEtBQUsyaEIsVUFBTCxDQUFnQixLQUFLOVksS0FBTCxDQUFXL0wsT0FBM0IsQ0FBeEM7QUFDQSxXQUFLK0wsS0FBTCxDQUFXN0ksY0FBWCxDQUEwQixRQUExQixLQUF1QyxLQUFLeWhCLFNBQUwsQ0FBZSxLQUFLNVksS0FBTCxDQUFXc1YsTUFBMUIsQ0FBdkM7QUFDQSxXQUFLdFYsS0FBTCxDQUFXN0ksY0FBWCxDQUEwQixLQUExQixLQUFvQyxLQUFLcWUsTUFBTCxDQUFZLEtBQUt4VixLQUFMLENBQVcyTixHQUF2QixDQUFwQztBQUNBLFdBQUs2SyxTQUFMLENBQWUsS0FBSzdLLEdBQXBCO0FBQ0Q7OzsyQkFFTUEsRyxFQUFLO0FBQ1YsV0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0Q7Ozs2QkFFUWpZLEksRUFBTTtBQUNiLFdBQUsrZCxLQUFMLEdBQWEsS0FBSzJCLFFBQUwsQ0FBYzFmLElBQWQsQ0FBYjtBQUNBLFdBQUtKLEtBQUwsQ0FBV2dpQixhQUFYLEdBQTJCLGlCQUFPQSxhQUFQLENBQXFCLEtBQUs3RCxLQUExQixDQUEzQjtBQUNBLFdBQUtuZSxLQUFMLENBQVdraUIsYUFBWCxHQUEyQixpQkFBT0EsYUFBUCxDQUFxQixLQUFLL0QsS0FBMUIsQ0FBM0I7QUFDRDs7OzhCQUVTNUUsTSxFQUFRO0FBQ2hCLFVBQUcsUUFBT0EsTUFBUCx5Q0FBT0EsTUFBUCxNQUFpQixRQUFqQixJQUE2QixDQUFDQSxNQUFqQyxFQUF5QztBQUN2QyxjQUFNLElBQUlyWixLQUFKLHlDQUFOO0FBQ0Q7O0FBRUQsV0FBS3FaLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7NkJBRVFnQixLLEVBQU87QUFDZCxVQUFHLFFBQU9BLEtBQVAseUNBQU9BLEtBQVAsTUFBZ0IsUUFBaEIsSUFBNEIsQ0FBQ0EsS0FBaEMsRUFBdUM7QUFDckMsY0FBTSxJQUFJcmEsS0FBSix3Q0FBTjtBQUNEOztBQUVELFdBQUtxYSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzRCQUVPdkwsSSxFQUFNO0FBQ1osVUFBRyxPQUFPQSxJQUFQLElBQWUsUUFBbEIsRUFBNEI7QUFDMUIsY0FBTSxJQUFJOU8sS0FBSixzQ0FBTjtBQUNEOztBQUVELFdBQUs4TyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OytCQUVVclEsTyxFQUFTO0FBQ2xCLFVBQUcsUUFBT0EsT0FBUCx5Q0FBT0EsT0FBUCxNQUFrQixRQUFsQixJQUE4QixDQUFDQSxPQUFsQyxFQUEyQztBQUN6QyxjQUFNLElBQUl1QixLQUFKLDBDQUFOO0FBQ0Q7O0FBRUQsV0FBS3ZCLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7OEJBRVM0RCxHLEVBQUs7QUFDYixXQUFLNUQsT0FBTCxDQUFhcWhCLE1BQWIsR0FBc0J6ZCxHQUF0QjtBQUNEOzs7NkJBRVFuQyxJLEVBQU07QUFDYixVQUFJK2QsUUFBUSxpQkFBTzJCLFFBQVAsQ0FBZ0IxZixJQUFoQixDQUFaOztBQUVBLFVBQUcsQ0FBQytkLEtBQUosRUFBVztBQUNULGNBQU0sSUFBSWplLEtBQUosd0NBQStDRSxJQUEvQyxPQUFOO0FBQ0Q7O0FBRUQsYUFBTytkLEtBQVA7QUFDRDs7OzhCQUVTOUYsRyxFQUFLO0FBQ2IsVUFBR0EsR0FBSCxFQUFRO0FBQ04sYUFBSzNOLEtBQUwsQ0FBVytZLElBQVgsR0FBa0JwTCxHQUFsQjtBQUNELE9BRkQsTUFHSztBQUNILGFBQUszTixLQUFMLENBQVcrWSxJQUFYLEdBQWtCLGlCQUFPMUQsY0FBUCxDQUFzQixLQUFLNUIsS0FBM0IsRUFBa0MsS0FBSzVFLE1BQXZDLEVBQStDLEtBQUtnQixLQUFwRCxFQUEyRCxLQUFLdkwsSUFBaEUsQ0FBbEI7QUFDRDtBQUNGOzs7Ozs7QUE3SWtCOUcsQyxDQUNadEUsTyxHQUFVLHVDO0FBREVzRSxDLENBRVpvRSxpQixHQUFvQixJO0FBRlJwRSxDLENBR1owRSxpQixHQUFvQixDQUFDLFFBQUQsQztrQkFIUjFFLEM7QUE4SXBCLEM7Ozs7Ozs7Ozs7Ozs7OztBQ2xKRDs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJDLE87Ozs7OzZCQUNIO0FBQ2Qsc0JBQU1qRyxTQUFOLENBQWdCLFNBQWhCLEVBQTJCaUcsT0FBM0I7QUFDQSxzQkFBTWxELEtBQU4sQ0FBWSxtQkFBWixFQUFpQyxTQUFqQztBQUNEOzs7QUFFRCxxQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTjBCLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLDZJQUNWQSxJQURVOztBQUduQixRQUFHLE1BQUsvRyxFQUFMLENBQVFxTixZQUFSLENBQXFCLFVBQXJCLENBQUgsRUFBcUM7QUFDbkMsWUFBS3JOLEVBQUwsQ0FBUXNOLFlBQVIsQ0FBcUIsaUJBQXJCLEVBQXdDLE1BQUt0TixFQUFMLENBQVF3RCxZQUFSLENBQXFCLFVBQXJCLENBQXhDO0FBQ0EsWUFBS3hELEVBQUwsQ0FBUXVOLGVBQVIsQ0FBd0IsVUFBeEI7QUFDRDs7QUFFRCxRQUFHdVcsaUJBQWlCLE1BQUs5akIsRUFBdEIsRUFBMEIrakIsT0FBMUIsSUFBcUMsUUFBeEMsRUFBa0Q7QUFDaEQsWUFBSy9qQixFQUFMLENBQVErVixLQUFSLENBQWNnTyxPQUFkLEdBQXdCLE9BQXhCO0FBQ0Q7O0FBRUQsVUFBS3RJLFFBQUwsR0FBZ0IsV0FBaEI7QUFabUI7QUFhcEI7Ozs7c0NBRWlCO0FBQ2hCLFVBQUl1SSxRQUFRbGMsU0FBU21jLFdBQVQsRUFBWjtBQUNBLFVBQUlDLFlBQVlsZSxPQUFPbWUsWUFBUCxFQUFoQjs7QUFFQUgsWUFBTUksa0JBQU4sQ0FBeUIsS0FBS3BrQixFQUE5QjtBQUNBZ2tCLFlBQU1LLFFBQU4sQ0FBZSxLQUFmO0FBQ0FILGdCQUFVSSxlQUFWO0FBQ0FKLGdCQUFVSyxRQUFWLENBQW1CUCxLQUFuQjtBQUNBLFdBQUtoa0IsRUFBTCxDQUFRNGIsS0FBUjtBQUNEOzs7Ozs7a0JBOUJrQnJULE87QUErQnBCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0Q7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdxQkUsRTs7Ozs7NkJBS0g7QUFDZCxzQkFBTW5HLFNBQU4sQ0FBZ0IsSUFBaEIsRUFBc0JtRyxFQUF0QjtBQUNBLHNCQUFNbkcsU0FBTixDQUFnQixTQUFoQixFQUEyQmtpQixNQUEzQjtBQUNBLHNCQUFNbGlCLFNBQU4sQ0FBZ0IsTUFBaEIsRUFBd0JtaUIsSUFBeEI7QUFDRDs7O0FBRUQsZ0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU4xZCxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSxtSUFDVkEsSUFEVTs7QUFHbkIsVUFBS3NRLElBQUwsR0FBWSxNQUFLclgsRUFBTCxDQUFRd0IsU0FBcEI7QUFDQSxVQUFLeEIsRUFBTCxDQUFRd0IsU0FBUixHQUFvQixFQUFwQjtBQUNBLFVBQUsrYyxLQUFMLEdBQWEsS0FBYjtBQUNBLFVBQUttRyxNQUFMLEdBQWMsS0FBZDtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxVQUFLQyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsVUFBS2IsT0FBTCxHQUFlRCxpQkFBaUIsTUFBSzlqQixFQUF0QixFQUEwQitqQixPQUF6QztBQVRtQjtBQVVwQjs7Ozs4QkFFU25oQixLLEVBQU87QUFDZixXQUFLMmIsS0FBTCxHQUFhLENBQUMsQ0FBQzNiLEtBQWY7QUFDQSxXQUFLcWQsUUFBTDtBQUNEOzs7b0NBRWVyZCxLLEVBQU87QUFDckIsV0FBS2lpQixhQUFMLENBQW1CamlCLEtBQW5CO0FBQ0Q7OzsrQkFFVTtBQUNULFdBQUtrSSxLQUFMLENBQVc3SSxjQUFYLENBQTBCLFVBQTFCLEtBQXlDLEtBQUs0aUIsYUFBTCxDQUFtQixLQUFLL1osS0FBTCxDQUFXNlosUUFBOUIsQ0FBekM7QUFDQSxXQUFLcEcsS0FBTCxHQUFhLENBQUMsQ0FBQyxLQUFLelQsS0FBTCxDQUFXZ2EsRUFBMUI7QUFDQSxhQUFPLEtBQUs3RSxRQUFMLEVBQVA7QUFDRDs7O2dDQUVXeUUsTSxFQUFRO0FBQ2xCLFdBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7a0NBRWFDLFEsRUFBVTtBQUN0QixXQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEOzs7K0JBRVU7QUFDVCxVQUFJN2lCLE1BQU0sS0FBS2lqQixXQUFMLEVBQVY7QUFDQSxVQUFJcE8sT0FBTyxLQUFLM1csRUFBTCxDQUFRZ2xCLGtCQUFuQjtBQUNBLFVBQUlDLGVBQUo7O0FBRUEsVUFBRyxDQUFDdE8sSUFBRCxJQUFTLENBQUNBLEtBQUszUyxPQUFMLENBQWEsY0FBYixDQUFiLEVBQTJDO0FBQ3pDO0FBQ0Q7O0FBRUQyUyxXQUFLeFYsT0FBTCxDQUFhK2pCLFdBQWIsQ0FBeUIsS0FBS1IsTUFBTCxJQUFlLEtBQUtuRyxLQUE3QztBQUNBNUgsV0FBS3hWLE9BQUwsQ0FBYTBqQixhQUFiLENBQTJCLEtBQUtGLFFBQWhDO0FBQ0FNLGVBQVN0TyxLQUFLeFYsT0FBTCxDQUFhOGUsUUFBYixFQUFUOztBQUVBLGFBQU9wYixRQUFRcUcsT0FBUixDQUFnQnBKLEdBQWhCLEVBQXFCaUQsSUFBckIsQ0FBMEIsWUFBTTtBQUNyQyxlQUFPa2dCLE1BQVA7QUFDRCxPQUZNLENBQVA7QUFHRDs7O2tDQUVhO0FBQ1osVUFBSW5qQixZQUFKOztBQUVBLFVBQUcsS0FBS3ljLEtBQUwsSUFBYyxDQUFDLEtBQUttRyxNQUF2QixFQUErQjtBQUM3QixZQUFHLEtBQUtDLFFBQUwsSUFBaUIsQ0FBQyxLQUFLQyxVQUExQixFQUFzQztBQUNwQzlpQixnQkFBTSxLQUFLdUMsT0FBTCxFQUFOO0FBQ0Q7O0FBRUQsYUFBS3JFLEVBQUwsQ0FBUStWLEtBQVIsQ0FBY2dPLE9BQWQsR0FBd0IsS0FBS0EsT0FBN0I7QUFDRCxPQU5ELE1BT0s7QUFDSCxZQUFHLEtBQUtZLFFBQVIsRUFBa0I7QUFDaEIsZUFBS2hQLE9BQUw7QUFDRCxTQUZELE1BR0ssSUFBRyxDQUFDLEtBQUtpUCxVQUFULEVBQXFCO0FBQ3hCOWlCLGdCQUFNLEtBQUt1QyxPQUFMLEVBQU47QUFDRDs7QUFFRCxhQUFLckUsRUFBTCxDQUFRK1YsS0FBUixDQUFjZ08sT0FBZCxHQUF3QixNQUF4QjtBQUNEOztBQUVELGFBQU9qaUIsR0FBUDtBQUNEOzs7OEJBRVM7QUFDUixVQUFJQSxZQUFKOztBQUVBLFdBQUs5QixFQUFMLENBQVF3QixTQUFSLEdBQW9CLEtBQUs2VixJQUF6QjtBQUNBdlYsWUFBTSxnQkFBTXVDLE9BQU4sQ0FBYyxLQUFLckUsRUFBbkIsRUFBdUIsRUFBRWtELFdBQVcsSUFBYixFQUF2QixDQUFOO0FBQ0EsV0FBSzBoQixVQUFMLEdBQWtCLElBQWxCOztBQUVBLGFBQU85aUIsR0FBUDtBQUNEOzs7Ozs7QUFoR2tCMkcsRSxDQUNabUYsVyxHQUFjLEk7QUFERm5GLEUsQ0FFWnpFLE8sR0FBVSxNO0FBRkV5RSxFLENBR1p1RSxpQixHQUFvQixDQUFDLFVBQUQsQztrQkFIUnZFLEU7QUFpR3BCOztBQUVEOzs7O0lBR2ErYixNLFdBQUFBLE07OztBQUNYLG9CQUFxQjtBQUFBOztBQUFBOztBQUFBLHVDQUFOemQsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsOElBQ1ZBLElBRFU7O0FBR25CLFdBQUsyZCxNQUFMLEdBQWMsSUFBZDtBQUhtQjtBQUlwQjs7O0VBTHlCamMsRTs7QUFRNUI7Ozs7O0lBR2FnYyxJLFdBQUFBLEk7OztBQUdYLGtCQUFxQjtBQUFBOztBQUFBOztBQUFBLHVDQUFOMWQsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsMElBQ1ZBLElBRFU7O0FBR25CLFdBQUsvRyxFQUFMLENBQVFzTixZQUFSLENBQXFCLElBQXJCLEVBQTJCLE1BQTNCO0FBSG1CO0FBSXBCOzs7RUFQdUJrWCxNOztBQUFiQyxJLENBQ0p6Z0IsTyxHQUFVLEU7OztBQVNuQnlFLEdBQUcrYixNQUFILEdBQVlBLE1BQVo7QUFDQS9iLEdBQUdnYyxJQUFILEdBQVVBLElBQVYsQzs7Ozs7Ozs7Ozs7Ozs7O0FDbElBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCL2IsTzs7Ozs7NkJBS0g7QUFDZCxzQkFBTXBHLFNBQU4sQ0FBZ0IsU0FBaEIsRUFBMkJvRyxPQUEzQjtBQUNEOzs7QUFFRCxxQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTjNCLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLDZJQUNWQSxJQURVOztBQUduQixVQUFLc1EsSUFBTCxHQUFZLE1BQUtyWCxFQUFMLENBQVF3QixTQUFwQjtBQUNBLFVBQUt4QixFQUFMLENBQVF3QixTQUFSLEdBQW9CLEVBQXBCO0FBQ0EsVUFBSzJqQixVQUFMLEdBQWtCLElBQWxCO0FBTG1CO0FBTXBCOzs7OytCQUVVMU0sRyxFQUFLO0FBQ2QsV0FBSzJNLFdBQUwsQ0FBaUIzTSxHQUFqQjtBQUNEOzs7K0JBRVU7QUFDVCxhQUFPLEtBQUsyTSxXQUFMLENBQWlCLEtBQUt0YSxLQUFMLENBQVcyTixHQUE1QixDQUFQO0FBQ0Q7OztnQ0FFV0EsRyxFQUFLO0FBQUE7O0FBQ2YsV0FBSzBNLFVBQUwsSUFBbUIsS0FBS0EsVUFBTCxDQUFnQkUsS0FBaEIsRUFBbkI7O0FBRUEsYUFBTyxrQkFBUXJaLEdBQVIsQ0FBWXlNLEdBQVosRUFBaUI7QUFDdEJHLGlCQUFTLGlCQUFDRixHQUFELEVBQVM7QUFDaEIsaUJBQUt5TSxVQUFMLEdBQWtCek0sR0FBbEI7QUFDRDtBQUhxQixPQUFqQixFQUlKM1QsSUFKSSxDQUlDLFVBQUNqRCxHQUFELEVBQVM7QUFDZixlQUFLcWpCLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxlQUFLeEcsS0FBTDtBQUNBLGVBQUszZSxFQUFMLENBQVF3QixTQUFSLEdBQW9CLE9BQUs2VixJQUF6QjtBQUNBLHdCQUFNaFcsV0FBTixDQUFrQixPQUFLckIsRUFBdkIsRUFBMkI4QixJQUFJb0ssSUFBL0I7O0FBRUEsZUFBTyxnQkFBTTdILE9BQU4sQ0FBYyxPQUFLckUsRUFBbkIsRUFBdUIsRUFBRWtELFdBQVcsSUFBYixFQUF2QixFQUE0QzZCLElBQTVDLENBQWlELFlBQU07QUFDNUQsaUJBQUsrRixLQUFMLENBQVd3YSxNQUFYLENBQWtCelosT0FBbEI7QUFDRCxTQUZNLENBQVA7QUFHRCxPQWJNLEVBYUowWixLQWJJLENBYUUsVUFBQ3ZXLEdBQUQsRUFBUztBQUNoQixlQUFLbEUsS0FBTCxDQUFXMGEsT0FBWCxDQUFtQjNaLE9BQW5CLENBQTJCbUQsR0FBM0I7QUFDRCxPQWZNLENBQVA7QUFnQkQ7Ozs7OztBQTVDa0J0RyxPLENBQ1prRixXLEdBQWMsSTtBQURGbEYsTyxDQUVaMUUsTyxHQUFVLE87QUFGRTBFLE8sQ0FHWmlFLE0sR0FBUyxDQUFDLE1BQUQsRUFBUyxPQUFULEM7a0JBSEdqRSxPO0FBNkNwQixDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pERDs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJDLEs7Ozs7OzZCQUlIO0FBQ2Qsc0JBQU1yRyxTQUFOLENBQWdCLE9BQWhCLEVBQXlCcUcsS0FBekI7QUFDRDs7O0FBRUQsbUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU41QixJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSx5SUFDVkEsSUFEVTs7QUFHbkIsVUFBSzBlLFVBQUwsR0FBa0IsTUFBS3psQixFQUFMLENBQVFtZixJQUFSLElBQWdCLFVBQWxDO0FBQ0EsVUFBS3VHLE9BQUwsR0FBZSxNQUFLMWxCLEVBQUwsQ0FBUW1mLElBQVIsSUFBZ0IsT0FBL0I7QUFKbUI7QUFLcEI7Ozs7bUNBRWN2YyxLLEVBQU87QUFDcEIsV0FBSytpQixVQUFMLENBQWdCL2lCLEtBQWhCO0FBQ0Q7Ozs4QkFFUztBQUFBOztBQUNSLE9BQUMsS0FBSzhpQixPQUFMLElBQWdCLEtBQUtELFVBQXRCLEtBQXFDLEtBQUt6bEIsRUFBTCxDQUFRd0csZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsWUFBTTtBQUMzRSxlQUFLbWYsVUFBTCxDQUFnQixPQUFLM2xCLEVBQUwsQ0FBUTRsQixPQUF4QixFQUFpQyxLQUFqQztBQUNELE9BRm9DLENBQXJDO0FBR0Q7OzsrQkFFVTtBQUNULE9BQUMsS0FBS0gsVUFBTCxJQUFtQixLQUFLQyxPQUF6QixLQUFxQyxLQUFLQyxVQUFMLENBQWdCLEtBQUs3YSxLQUFMLENBQVc4YSxPQUEzQixDQUFyQztBQUNEOzs7K0JBRVVoakIsSyxFQUF1QjtBQUFBLFVBQWhCaUosT0FBZ0IsdUVBQU4sSUFBTTs7QUFDaENqSixjQUFRLENBQUMsQ0FBQ0EsS0FBVjs7QUFFQSxVQUFHLEtBQUtpakIsV0FBTCxLQUFxQmpqQixLQUF4QixFQUErQjtBQUM3QjtBQUNEOztBQUVELFdBQUs1QyxFQUFMLENBQVE0bEIsT0FBUixHQUFrQixLQUFLQyxXQUFMLEdBQW1CampCLEtBQXJDO0FBQ0FpSixpQkFBVyxLQUFLZixLQUFMLENBQVdnYixRQUFYLENBQW9CQyxRQUFwQixDQUE2QkMsS0FBN0IsRUFBb0MsRUFBRXBILFNBQVMsSUFBWCxFQUFwQyxDQUFYO0FBQ0EsV0FBSzhHLE9BQUwsSUFBZ0IsS0FBS08sV0FBTCxFQUFoQjtBQUNEOzs7K0JBRVU7QUFDVCxrR0FBZW5nQixLQUFmLENBQXFCLElBQXJCLEVBQTJCZ0IsU0FBM0I7QUFDQSxXQUFLNGUsT0FBTCxJQUFnQixLQUFLNWEsS0FBTCxDQUFXZ2IsUUFBWCxDQUFvQkMsUUFBcEIsQ0FBNkJDLEtBQTdCLEVBQW9DLEVBQUVwSCxTQUFTLElBQVgsRUFBcEMsQ0FBaEI7QUFDRDs7O2tDQUVhO0FBQ1osVUFBSXBlLE9BQU8sS0FBS1IsRUFBTCxDQUFRd0QsWUFBUixDQUFxQixNQUFyQixDQUFYO0FBQ0EsVUFBSVMseUNBQXNDekQsSUFBdEMseUJBQTRELEtBQUtKLEtBQUwsQ0FBV0MsTUFBdkUsU0FBSjtBQUNBLFVBQUlvRSxXQUFXLGdCQUFNSCxJQUFOLENBQVdHLFFBQVgsQ0FBb0JSLFFBQXBCLENBQWY7O0FBRUEsV0FBSSxJQUFJL0IsSUFBSSxDQUFSLEVBQVdDLElBQUlzQyxTQUFTNUIsTUFBNUIsRUFBb0NYLElBQUlDLENBQXhDLEVBQTJDRCxHQUEzQyxFQUFnRDtBQUM5QyxZQUFJZ2tCLFFBQVF6aEIsU0FBU3ZDLENBQVQsQ0FBWjs7QUFFQWdrQixjQUFNUCxVQUFOLENBQWlCTyxNQUFNbG1CLEVBQU4sQ0FBUzRsQixPQUExQjtBQUNEO0FBQ0Y7Ozs7OztBQXhEa0JqZCxLLENBQ1pxRSxpQixHQUFvQixDQUFDLFNBQUQsQztBQURSckUsSyxDQUVaZ0UsTSxHQUFTLENBQUMsUUFBRCxDO2tCQUZHaEUsSztBQXlEcEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUREOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHcUJDLEs7Ozs7OzZCQUlIO0FBQ2Qsc0JBQU10RyxTQUFOLENBQWdCLE9BQWhCLEVBQXlCc0csS0FBekI7QUFDQSxzQkFBTXRHLFNBQU4sQ0FBZ0IsY0FBaEIsRUFBZ0M2akIsV0FBaEM7QUFDRDs7O0FBRUQsbUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5wZixJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSx5SUFDVkEsSUFEVTs7QUFHbkIsVUFBS3FmLFFBQUwsR0FBZ0IsTUFBS3BtQixFQUFMLENBQVFxTixZQUFSLENBQXFCLElBQXJCLENBQWhCO0FBSG1CO0FBSXBCOzs7OzhCQUVTekssSyxFQUFPO0FBQ2YsbUdBQWdCa0QsS0FBaEIsQ0FBc0IsSUFBdEIsRUFBNEJnQixTQUE1QjtBQUNBLFdBQUt1ZixRQUFMLENBQWMsS0FBS3ZiLEtBQUwsQ0FBV3RLLElBQXpCO0FBQ0Q7OztnQ0FFV0EsSSxFQUFNO0FBQ2hCLFdBQUs2bEIsUUFBTCxDQUFjN2xCLElBQWQ7QUFDRDs7O2lDQUVZb0MsSyxFQUFPO0FBQ2xCLFdBQUs4WSxRQUFMLENBQWM5WSxLQUFkO0FBQ0Q7Ozs4QkFFUztBQUFBOztBQUNSLFdBQUt3akIsUUFBTCxJQUFpQiwyRkFBY3RnQixLQUFkLENBQW9CLElBQXBCLEVBQTBCZ0IsU0FBMUIsQ0FBakI7O0FBRUEsV0FBSzlHLEVBQUwsQ0FBUXdHLGdCQUFSLENBQXlCLFFBQXpCLEVBQW1DLFlBQU07QUFDdkNQLG1CQUFXLFlBQU07QUFDZixjQUFJckQsUUFBUSxPQUFLMGpCLGFBQUwsRUFBWjs7QUFFQSxjQUFHMWpCLFVBQVUsT0FBSzJqQixTQUFsQixFQUE2QjtBQUMzQjtBQUNEOztBQUVELGlCQUFLQSxTQUFMLEdBQWlCM2pCLEtBQWpCO0FBQ0EsaUJBQUtrSSxLQUFMLENBQVcwYixPQUFYLENBQW1CM2EsT0FBbkIsQ0FBMkJqSixLQUEzQjtBQUNELFNBVEQ7QUFVRCxPQVhEO0FBWUQ7OzsrQkFFVTtBQUNULFdBQUt5akIsUUFBTCxDQUFjLEtBQUt2YixLQUFMLENBQVd0SyxJQUF6QjtBQUNBLFdBQUtzSyxLQUFMLENBQVc3SSxjQUFYLENBQTBCLE9BQTFCLEtBQXNDLEtBQUt5WixRQUFMLENBQWMsS0FBSzVRLEtBQUwsQ0FBV2xJLEtBQXpCLENBQXRDO0FBQ0Q7Ozs2QkFFUXBDLEksRUFBTTtBQUNiLFVBQUlpRSxXQUFXLEtBQUtBLFFBQUwsQ0FBYyxtQkFBZCxDQUFmOztBQUVBLFdBQUksSUFBSXZDLElBQUksQ0FBUixFQUFXQyxJQUFJc0MsU0FBUzVCLE1BQTVCLEVBQW9DWCxJQUFJQyxDQUF4QyxFQUEyQ0QsR0FBM0MsRUFBZ0Q7QUFDOUN1QyxpQkFBU3ZDLENBQVQsRUFBWWxDLEVBQVosQ0FBZXNOLFlBQWYsQ0FBNEIsTUFBNUIsRUFBb0M5TSxJQUFwQztBQUNEO0FBQ0Y7Ozs2QkFFUW9DLEssRUFBTztBQUNkLFVBQUdBLFVBQVUsS0FBSzJqQixTQUFsQixFQUE2QjtBQUMzQjtBQUNEOztBQUVELFVBQUl0RCxPQUFPLEtBQUtzRCxTQUFoQjtBQUNBLFVBQUk5aEIsV0FBVyxLQUFLQSxRQUFMLENBQWMsbUJBQWQsQ0FBZjtBQUNBLFVBQUlnaUIsU0FBUyxLQUFiOztBQUVBLFdBQUtGLFNBQUwsR0FBaUIzakIsS0FBakI7O0FBRUEsV0FBSSxJQUFJVixJQUFJLENBQVIsRUFBV0MsSUFBSXNDLFNBQVM1QixNQUE1QixFQUFvQ1gsSUFBSUMsQ0FBeEMsRUFBMkNELEdBQTNDLEVBQWdEO0FBQzlDLFlBQUlna0IsUUFBUXpoQixTQUFTdkMsQ0FBVCxDQUFaO0FBQ0EsWUFBSXdrQixhQUFhUixNQUFNbG1CLEVBQU4sQ0FBUzRDLEtBQVQsS0FBbUJBLEtBQXBDOztBQUVBOGpCLHVCQUFlRCxTQUFTLElBQXhCO0FBQ0FQLGNBQU1QLFVBQU4sQ0FBaUJlLFVBQWpCO0FBQ0Q7O0FBRUQsVUFBRyxDQUFDRCxNQUFKLEVBQVk7QUFDVixZQUFHN2pCLFVBQVUsSUFBYixFQUFtQjtBQUNqQixjQUFHcWdCLFNBQVN6Z0IsU0FBWixFQUF1QjtBQUNyQjtBQUNEO0FBQ0YsU0FKRCxNQUtLO0FBQ0gsZUFBSytqQixTQUFMLEdBQWlCL2pCLFNBQWpCO0FBQ0FJLGtCQUFRLElBQVI7QUFDRDtBQUNGOztBQUVELFdBQUtrSSxLQUFMLENBQVcwYixPQUFYLENBQW1CM2EsT0FBbkIsQ0FBMkJqSixLQUEzQixFQUFrQyxFQUFFZ2MsU0FBUyxJQUFYLEVBQWxDO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQUluYSxXQUFXLEtBQUtBLFFBQUwsQ0FBYyxtQkFBZCxDQUFmOztBQUVBLFdBQUksSUFBSXZDLElBQUksQ0FBUixFQUFXQyxJQUFJc0MsU0FBUzVCLE1BQTVCLEVBQW9DWCxJQUFJQyxDQUF4QyxFQUEyQ0QsR0FBM0MsRUFBZ0Q7QUFDOUMsWUFBSWdrQixRQUFRemhCLFNBQVN2QyxDQUFULENBQVo7O0FBRUEsWUFBR2drQixNQUFNbG1CLEVBQU4sQ0FBUzRsQixPQUFaLEVBQXFCO0FBQ25CLGlCQUFPTSxNQUFNbG1CLEVBQU4sQ0FBUzRDLEtBQWhCO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPLElBQVA7QUFDRDs7Ozs7O0FBeEdrQmdHLEssQ0FDWjVFLE8sR0FBVSxRO0FBREU0RSxLLENBRVorRCxNLEdBQVMsQ0FBQyxPQUFELEM7a0JBRkcvRCxLO0FBeUdwQjs7QUFFRDs7OztJQUdhdWQsVyxXQUFBQSxXOzs7QUFHWCx5QkFBcUI7QUFBQTs7QUFBQTs7QUFBQSx1Q0FBTnBmLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLGtKQUNWQSxJQURVO0FBRXBCOzs7O2lDQUVZbkUsSyxFQUFPO0FBQ2xCLFdBQUsrakIsYUFBTCxDQUFtQi9qQixLQUFuQjtBQUNEOzs7K0JBRVU7QUFDVCxXQUFLK2pCLGFBQUwsQ0FBbUIsS0FBSzdiLEtBQUwsQ0FBV2xJLEtBQTlCO0FBQ0Q7OztrQ0FFYUEsSyxFQUFPO0FBQ25CLFdBQUt4QyxLQUFMLENBQVd3QyxLQUFYLEdBQW1CQSxLQUFuQjtBQUNEOzs7Ozs7QUFqQlV1akIsVyxDQUNKN2tCLFE7OztBQW1CVHNILE1BQU11ZCxXQUFOLEdBQW9CQSxXQUFwQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hJQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQnJkLE07Ozs7OzZCQUlIO0FBQ2Qsc0JBQU14RyxTQUFOLENBQWdCLFFBQWhCLEVBQTBCd0csTUFBMUI7QUFDQSxzQkFBTXhHLFNBQU4sQ0FBZ0IsUUFBaEIsRUFBMEJza0IsTUFBMUI7QUFDRDs7O0FBRUQsb0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU43ZixJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSwySUFDVkEsSUFEVTs7QUFHbkIsVUFBSzhmLGVBQUwsR0FBdUIsUUFBdkI7QUFDQSxVQUFLQyxVQUFMLEdBQWtCLEtBQWxCO0FBSm1CO0FBS3BCOzs7O29DQUVlbGtCLEssRUFBTztBQUNyQixXQUFLbWtCLFdBQUwsQ0FBaUJua0IsS0FBakI7QUFDRDs7O21DQUVjQSxLLEVBQU87QUFDcEIsV0FBS29rQixVQUFMLENBQWdCcGtCLEtBQWhCO0FBQ0Q7Ozs4QkFFU0EsSyxFQUFPO0FBQ2YscUdBQWdCa0QsS0FBaEIsQ0FBc0IsSUFBdEIsRUFBNEJnQixTQUE1QjtBQUNBLFdBQUttZ0IsVUFBTDtBQUNEOzs7OEJBRVM7QUFBQTs7QUFDUixtR0FBY25oQixLQUFkLENBQW9CLElBQXBCLEVBQTBCZ0IsU0FBMUI7O0FBRUEsV0FBSzlHLEVBQUwsQ0FBUXdHLGdCQUFSLENBQXlCLFFBQXpCLEVBQW1DLFlBQU07QUFDdkMsZUFBS3hHLEVBQUwsQ0FBUStjLE9BQVIsR0FBa0IsT0FBS21LLFVBQUwsRUFBbEI7QUFDRCxPQUZEO0FBR0Q7OzsrQkFFVTtBQUNULG9HQUFlcGhCLEtBQWYsQ0FBcUIsSUFBckIsRUFBMkJnQixTQUEzQjtBQUNBLFdBQUtnRSxLQUFMLENBQVc3SSxjQUFYLENBQTBCLFVBQTFCLEtBQXlDLEtBQUs4a0IsV0FBTCxDQUFpQixLQUFLamMsS0FBTCxDQUFXcWMsUUFBNUIsQ0FBekM7QUFDQSxXQUFLcmMsS0FBTCxDQUFXN0ksY0FBWCxDQUEwQixTQUExQixLQUF3QyxLQUFLK2tCLFVBQUwsQ0FBZ0IsS0FBS2xjLEtBQUwsQ0FBV2lTLE9BQTNCLENBQXhDO0FBQ0EsV0FBS2tLLFVBQUw7QUFDRDs7O2dDQUVXcmtCLEssRUFBTztBQUNqQixXQUFLa2tCLFVBQUwsR0FBa0Jsa0IsS0FBbEI7QUFDQSxXQUFLd2tCLFdBQUwsQ0FBaUIsS0FBS0MsV0FBTCxDQUFpQixnQkFBTWxaLElBQU4sQ0FBVyxLQUFLbk8sRUFBTCxDQUFRK2MsT0FBbkIsQ0FBakIsQ0FBakI7QUFDRDs7OytCQUVVbmEsSyxFQUFPO0FBQ2hCLFdBQUt3a0IsV0FBTCxDQUFpQixLQUFLQyxXQUFMLENBQWlCemtCLEtBQWpCLENBQWpCO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQUkwa0IsV0FBVyxFQUFmOztBQUVBLFdBQUksSUFBSXBsQixJQUFJLENBQVIsRUFBV0MsSUFBSSxLQUFLbkMsRUFBTCxDQUFRakIsT0FBUixDQUFnQjhELE1BQW5DLEVBQTJDWCxJQUFJQyxDQUEvQyxFQUFrREQsR0FBbEQsRUFBdUQ7QUFDckQsWUFBSXFsQixTQUFTLEtBQUt2bkIsRUFBTCxDQUFRakIsT0FBUixDQUFnQm1ELENBQWhCLEVBQW1CZixPQUFoQztBQUNBLFlBQUkraUIsWUFBWXFELE9BQU96YyxLQUFQLENBQWF3YyxRQUE3Qjs7QUFFQSxZQUFHcEQsU0FBSCxFQUFjO0FBQ1pvRCxtQkFBU2xtQixJQUFULENBQWNtbUIsT0FBT3ZuQixFQUFQLENBQVU0QyxLQUF4QjtBQUNEOztBQUVEMmtCLGVBQU92bkIsRUFBUCxDQUFVc25CLFFBQVYsR0FBcUJwRCxTQUFyQjtBQUNEOztBQUVELFVBQUcsQ0FBQ29ELFNBQVN6a0IsTUFBYixFQUFxQjtBQUNuQixhQUFLMmtCLFFBQUw7QUFDRCxPQUZELE1BR0s7QUFDSCxhQUFLSixXQUFMLENBQWlCLEtBQUtDLFdBQUwsQ0FBaUJDLFFBQWpCLENBQWpCO0FBQ0Q7QUFDRjs7OzRDQUV1QjtBQUN0QixVQUFJdG5CLDBIQUFKOztBQUVBLFVBQUcsQ0FBQ0EsR0FBR3FOLFlBQUgsQ0FBZ0IsT0FBaEIsQ0FBSixFQUE4QjtBQUM1QnJOLFdBQUdzTixZQUFILENBQWdCLE9BQWhCLEVBQXlCLEtBQUsrSixJQUFMLENBQVVvUSxJQUFWLEVBQXpCO0FBQ0Q7O0FBRUQsYUFBT3puQixFQUFQO0FBQ0Q7Ozs4QkFFUzRDLEssRUFBTztBQUNmLFVBQUcsQ0FBQyxLQUFLa2tCLFVBQVQsRUFBcUI7QUFDbkIsZUFBTyxLQUFLOW1CLEVBQUwsQ0FBUStjLE9BQVIsS0FBb0JuYSxLQUEzQjtBQUNEOztBQUVELGFBQU8sS0FBSzVDLEVBQUwsQ0FBUStjLE9BQVIsQ0FBZ0JwVCxPQUFoQixDQUF3Qi9HLEtBQXhCLEtBQWtDLENBQUMsQ0FBMUM7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBRyxDQUFDLEtBQUtra0IsVUFBVCxFQUFxQjtBQUNuQixlQUFPLEtBQUs5bUIsRUFBTCxDQUFRNEMsS0FBZjtBQUNEOztBQUVELFVBQUltYSxVQUFVLEVBQWQ7O0FBRUEsV0FBSSxJQUFJN2EsSUFBSSxDQUFSLEVBQVdDLElBQUksS0FBS25DLEVBQUwsQ0FBUWpCLE9BQVIsQ0FBZ0I4RCxNQUFuQyxFQUEyQ1gsSUFBSUMsQ0FBL0MsRUFBa0RELEdBQWxELEVBQXVEO0FBQ3JELFlBQUlxbEIsU0FBUyxLQUFLdm5CLEVBQUwsQ0FBUWpCLE9BQVIsQ0FBZ0JtRCxDQUFoQixDQUFiOztBQUVBLFlBQUdxbEIsT0FBT0QsUUFBVixFQUFvQjtBQUNsQnZLLGtCQUFRM2IsSUFBUixDQUFhbW1CLE9BQU8za0IsS0FBcEI7QUFDRDtBQUNGOztBQUVELGFBQU9tYSxPQUFQO0FBQ0Q7OztnQ0FFV25hLEssRUFBTztBQUNqQixVQUFHLEtBQUtra0IsVUFBUixFQUFvQjtBQUNsQixZQUFHLENBQUNyaEIsTUFBTTBQLE9BQU4sQ0FBY3ZTLEtBQWQsQ0FBSixFQUEwQjtBQUN4QkEsa0JBQVNBLFVBQVVKLFNBQVYsSUFBdUJJLFVBQVUsSUFBbEMsR0FBeUMsQ0FBQ0EsS0FBRCxDQUF6QyxHQUFrRCxFQUExRDtBQUNEO0FBQ0YsT0FKRCxNQUtLO0FBQ0gsWUFBRzZDLE1BQU0wUCxPQUFOLENBQWN2UyxLQUFkLENBQUgsRUFBeUI7QUFDdkJBLGtCQUFRQSxNQUFNQyxNQUFOLEdBQWNELE1BQU0sQ0FBTixDQUFkLEdBQXdCLEVBQWhDO0FBQ0QsU0FGRCxNQUdLLElBQUcsUUFBT0EsS0FBUCx5Q0FBT0EsS0FBUCxNQUFnQixRQUFoQixJQUE0QixPQUFPQSxLQUFQLElBQWdCLFVBQS9DLEVBQTJEO0FBQzlEQSxrQkFBUSxFQUFSO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPQSxLQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFdBQUt3a0IsV0FBTCxDQUFpQixLQUFLRixVQUFMLEVBQWpCO0FBQ0Q7OztnQ0FFV3RrQixLLEVBQU87QUFDakIsVUFBRyxnQkFBTW1VLE9BQU4sQ0FBYyxLQUFLL1csRUFBTCxDQUFRK2MsT0FBdEIsRUFBK0JuYSxLQUEvQixDQUFILEVBQTBDO0FBQ3hDO0FBQ0Q7O0FBRUQsVUFBRzZDLE1BQU0wUCxPQUFOLENBQWN2UyxLQUFkLENBQUgsRUFBeUI7QUFDdkIsYUFBSzVDLEVBQUwsQ0FBUTRDLEtBQVIsR0FBZ0JBLE1BQU1BLE1BQU1DLE1BQU4sR0FBZSxDQUFyQixDQUFoQjs7QUFFQSxhQUFJLElBQUlYLElBQUksQ0FBUixFQUFXQyxJQUFJLEtBQUtuQyxFQUFMLENBQVFqQixPQUFSLENBQWdCOEQsTUFBbkMsRUFBMkNYLElBQUlDLENBQS9DLEVBQWtERCxHQUFsRCxFQUF1RDtBQUNyRCxjQUFJcWxCLFNBQVMsS0FBS3ZuQixFQUFMLENBQVFqQixPQUFSLENBQWdCbUQsQ0FBaEIsQ0FBYjs7QUFFQXFsQixpQkFBT0QsUUFBUCxHQUFrQjFrQixNQUFNK0csT0FBTixDQUFjNGQsT0FBTzNrQixLQUFyQixLQUErQixDQUFDLENBQWxEO0FBQ0Q7QUFDRixPQVJELE1BU0s7QUFDSCxhQUFLNUMsRUFBTCxDQUFRNEMsS0FBUixHQUFnQkEsS0FBaEI7O0FBRUEsYUFBSSxJQUFJVixLQUFJLENBQVIsRUFBV0MsS0FBSSxLQUFLbkMsRUFBTCxDQUFRakIsT0FBUixDQUFnQjhELE1BQW5DLEVBQTJDWCxLQUFJQyxFQUEvQyxFQUFrREQsSUFBbEQsRUFBdUQ7QUFDckQsY0FBSXFsQixVQUFTLEtBQUt2bkIsRUFBTCxDQUFRakIsT0FBUixDQUFnQm1ELEVBQWhCLENBQWI7O0FBRUFxbEIsa0JBQU9ELFFBQVAsR0FBa0JDLFFBQU8za0IsS0FBUCxJQUFnQkEsS0FBbEM7QUFDRDtBQUNGOztBQUVELFdBQUs1QyxFQUFMLENBQVErYyxPQUFSLEdBQWtCbmEsS0FBbEI7QUFDQSxXQUFLa0ksS0FBTCxDQUFXZ2IsUUFBWCxDQUFvQkMsUUFBcEIsQ0FBNkJDLEtBQTdCLEVBQW9DLEVBQUVwSCxTQUFTLElBQVgsRUFBcEM7QUFDRDs7Ozs7O0FBL0prQjlWLE0sQ0FDWmtFLGlCLEdBQW9CLENBQUMsVUFBRCxDO0FBRFJsRSxNLENBRVo2RCxNLEdBQVMsQ0FBQyxRQUFELEM7a0JBRkc3RCxNO0FBZ0twQjs7SUFFWThkLE0sV0FBQUEsTTs7Ozs7Ozs7Ozs7MENBR1dwZCxVLEVBQVk7QUFDaEMsYUFBTyxnQkFBTWdPLGtCQUFOLENBQXlCaE8sVUFBekIsQ0FBUDtBQUNEOzs7OEJBRVM7QUFDUixtR0FBYzFELEtBQWQsQ0FBb0IsSUFBcEIsRUFBMEJnQixTQUExQjtBQUNEOzs7b0NBRWVsRSxLLEVBQU87QUFDckIsV0FBSzhrQixXQUFMLENBQWlCOWtCLEtBQWpCO0FBQ0Q7OztnQ0FFV0EsSyxFQUFPO0FBQ2pCLFdBQUs1QyxFQUFMLENBQVFzbkIsUUFBUixHQUFtQjFrQixLQUFuQjtBQUNBLFdBQUtzYixHQUFMLENBQVNzSixRQUFUO0FBQ0Q7Ozs7OztBQWxCVVosTSxDQUNKNVosaUIsR0FBb0IsQ0FBQyxVQUFELEM7OztBQW9CN0JsRSxPQUFPOGQsTUFBUCxHQUFnQkEsTUFBaEIsQzs7Ozs7Ozs7Ozs7Ozs7O0FDM0xBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQjVkLFE7Ozs7Ozs7Ozs7OzZCQUNIO0FBQ2Qsc0JBQU0xRyxTQUFOLENBQWdCLFVBQWhCLEVBQTRCMEcsUUFBNUI7QUFDRDs7Ozs7O2tCQUhrQkEsUTtBQUlwQixDOzs7Ozs7Ozs7Ozs7Ozs7QUNQRDs7OztBQUNBOzs7Ozs7OztBQUVBOzs7Ozs7SUFNcUJaLEs7QUFHbkIsaUJBQVk1SCxJQUFaLEVBQWtCUixFQUFsQixFQUFzQnNDLFNBQXRCLEVBQWlDO0FBQUE7O0FBQy9CLFNBQUtqQyxNQUFMLEdBQWNHLElBQWQ7QUFDQSxTQUFLRyxJQUFMLEdBQVlYLEVBQVo7QUFDQSxTQUFLVSxXQUFMLEdBQW1CNEIsU0FBbkI7QUFDQXRDLE9BQUdzTixZQUFILENBQWdCLE9BQWhCLEVBQXlCOU0sSUFBekI7QUFDRDs7Ozs7O0FBTUQ7Ozs7Ozs7MEJBT01WLEksRUFBTThDLEssRUFBdUI7QUFBQTs7QUFBQSxVQUFoQitrQixNQUFnQix1RUFBUCxLQUFPOztBQUNqQyxVQUFHLENBQUNsaUIsTUFBTTBQLE9BQU4sQ0FBY3JWLElBQWQsQ0FBSixFQUF5QjtBQUN2QkEsZUFBTyxDQUFDQSxJQUFELENBQVA7QUFDRDs7QUFFRCxzQkFBTWtELFVBQU4sQ0FBaUIsWUFBTTtBQUNyQjJrQixtQkFBVyxNQUFLam5CLFdBQUwsQ0FBaUJ5VCx3QkFBakIsR0FBNEMsSUFBdkQ7QUFDQSx3QkFBTTFSLGlCQUFOLENBQXdCM0MsSUFBeEIsU0FBb0MsVUFBQzRDLElBQUQsRUFBT0MsR0FBUCxFQUFlO0FBQ2pELGNBQUcsQ0FBQ0QsSUFBSixFQUFVO0FBQ1IsbUJBQU9DLE9BQU8sRUFBZDtBQUNEOztBQUVELGlCQUFPQyxLQUFQO0FBQ0QsU0FORDtBQU9BK2tCLG1CQUFXLE1BQUtqbkIsV0FBTCxDQUFpQnlULHdCQUFqQixHQUE0QyxLQUF2RDtBQUNELE9BVkQ7QUFXRDs7O3dCQTNCYTtBQUNaO0FBQ0Q7Ozs7OztrQkFaa0IvTCxLO0FBc0NwQixDIiwiZmlsZSI6ImFraWxpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxNDgyYTE2NDNkZDM3OGNiNGRiOSIsIi8qKlxuICogY29uc3QgQWtpbGkgPSBtYWtlSXRFYXN5KGpzICsgaHRtbCk7XG4gKlxuICogQGF1dGhvciBBbGV4YW5kciBCYWxhc3lhbiA8bXl3ZWJzdHJlZXRAZ21haWwuY29tPlxuICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQnO1xuaW1wb3J0IElmIGZyb20gJy4vY29tcG9uZW50cy9pZic7XG5pbXBvcnQgRm9yIGZyb20gJy4vY29tcG9uZW50cy9mb3InO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL2NvbXBvbmVudHMvc2VsZWN0JztcbmltcG9ydCBJbnB1dCBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQnO1xuaW1wb3J0IFJhZGlvIGZyb20gJy4vY29tcG9uZW50cy9yYWRpbyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL2NvbXBvbmVudHMvdGV4dCc7XG5pbXBvcnQgVGV4dGFyZWEgZnJvbSAnLi9jb21wb25lbnRzL3RleHRhcmVhJztcbmltcG9ydCBDb250ZW50IGZyb20gJy4vY29tcG9uZW50cy9jb250ZW50JztcbmltcG9ydCBJbmNsdWRlIGZyb20gJy4vY29tcG9uZW50cy9pbmNsdWRlJztcbmltcG9ydCBSb3V0ZSBmcm9tICcuL2NvbXBvbmVudHMvcm91dGUnO1xuaW1wb3J0IEEgZnJvbSAnLi9jb21wb25lbnRzL2EnO1xuaW1wb3J0IFNjb3BlIGZyb20gJy4vc2NvcGUnO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXInO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9zZXJ2aWNlcy9yZXF1ZXN0JztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9zZXJ2aWNlcy9yb3V0ZXInO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBBa2lsaSA9IHt9O1xuXG5Ba2lsaS5vcHRpb25zID0ge1xuICBuZXN0ZWRXYXRjaGluZzogdHJ1ZSxcbiAgc2hvd0V2YWx1YXRpb25FcnJvcnM6IHRydWUsXG4gIGRlYnVnOiB0cnVlXG59O1xuXG5Ba2lsaS5fX2luaXQgPSBmYWxzZTtcbkFraWxpLl9fY29tcG9uZW50cyA9IHt9O1xuQWtpbGkuX19hbGlhc2VzID0ge307XG5Ba2lsaS5fX3Njb3BlcyA9IHt9O1xuQWtpbGkuX19pc29sYXRpb24gPSBudWxsO1xuQWtpbGkuX19ldmFsdWF0aW9uID0gbnVsbDtcblxuQWtpbGkuaHRtbEJvb2xlYW5BdHRyaWJ1dGVzID0gW1xuICAnZGlzYWJsZWQnLCAnY29udGVudGVkaXRhYmxlJywgJ2hpZGRlbidcbl07XG5cbkFraWxpLmNvbXBvbmVudHMgPSB7fTtcbkFraWxpLmRlY29yYXRvcnMgPSB7fTtcbkFraWxpLnNlcnZpY2VzID0ge307XG5cbi8qKlxuICogSm9pbiBiaW5kaW5nIGtleXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIGJpbmRpbmcga2V5c1xuICovXG5Ba2lsaS5qb2luQmluZGluZ0tleXMgPSBmdW5jdGlvbihrZXlzKSB7XG4gIHJldHVybiBrZXlzLm1hcChlbCA9PiBlbC50b1N0cmluZygpKS5qb2luKCcuJyk7XG59O1xuXG4vKipcbiAqIEFkZCBzY29wZSB0byB0aGUgc2NvcGVzIGxpc3RcbiAqXG4gKiBAcGFyYW0gc2NvcGVcbiAqL1xuQWtpbGkuYWRkU2NvcGUgPSBmdW5jdGlvbihzY29wZSkge1xuICBpZih0aGlzLl9fc2NvcGVzW3Njb3BlLl9fbmFtZV0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFNjb3BlIG5hbWUgJHtzY29wZS5fX25hbWV9IGFscmVhZHkgZXhpc3RzYCk7XG4gIH1cblxuICB0aGlzLl9fc2NvcGVzW3Njb3BlLl9fbmFtZV0gPSBzY29wZTtcbn07XG5cbi8qKlxuICogR2V0IHNjb3BlIGZyb20gdGhlIHNjb3BlcyBsaXN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzY29wZSBuYW1lXG4gKiBAcmV0dXJucyB7U2NvcGV9XG4gKi9cbkFraWxpLmdldFNjb3BlID0gZnVuY3Rpb24obmFtZSkge1xuICByZXR1cm4gdGhpcy5fX3Njb3Blc1tuYW1lXTtcbn07XG5cbi8qKlxuICogRGVsZXRlIHNjb3BlIGZyb20gdGhlIHNjb3BlcyBsaXN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzY29wZSBuYW1lXG4gKi9cbkFraWxpLnJlbW92ZVNjb3BlID0gZnVuY3Rpb24obmFtZSkge1xuICBsZXQgc2NvcGUgPSB0aGlzLl9fc2NvcGVzW25hbWVdO1xuXG4gIHNjb3BlLl9fY29tcG9uZW50ID0gbnVsbDtcbiAgc2NvcGUuX19lbCA9IG51bGw7XG4gIHNjb3BlLl9fcGFyZW50ID0gbnVsbDtcbiAgdGhpcy5fX3Njb3Blc1tuYW1lXSA9IG51bGw7XG4gIGRlbGV0ZSB0aGlzLl9fc2NvcGVzW25hbWVdO1xufTtcblxuLyoqXG4gKiBHZXQgYWxsIGVsZW1lbnRzIHdpdGggYXR0YWNoZWQgQWtpbGkgY29tcG9uZW50c1xuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFt0cmVlPXRydWVdIC0gcmV0dXJuIGFycmF5IG9mIHRoZSBwYXJlbnRzIGlmIHRydWUsIGNsb3Nlc3QgcGFyZW50IGlmIGZhbHNlXG4gKiBAcmV0dXJucyB7QXJyYXl8SFRNTEVsZW1lbnR8bnVsbH1cbiAqL1xuQWtpbGkuZ2V0QWtpbGlQYXJlbnRzID0gZnVuY3Rpb24gKGVsLCB0cmVlID0gdHJ1ZSkge1xuICBsZXQgYXJyID0gW107XG5cbiAgZnVuY3Rpb24gY2hlY2sobm9kZSkge1xuICAgIGlmKCFub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZihub2RlLnBhcmVudE5vZGUuX19ha2lsaSkge1xuICAgICAgYXJyLnB1c2gobm9kZS5wYXJlbnROb2RlKTtcblxuICAgICAgaWYoIXRyZWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrKG5vZGUucGFyZW50Tm9kZSk7XG4gIH1cblxuICBjaGVjayhlbCk7XG5cbiAgcmV0dXJuIHRyZWU/IGFycjogYXJyWzBdO1xufTtcblxuLyoqXG4gKiBTZXQgZWxlbWVudCBpbm5lciBodG1sIHdpdGggY29udGVudCByZXBsYWNpbmdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcIjxpPkhlbGxvPC9pPjxiPldvcmxkPC9iPlwiXG4gKiBlbC5pbm5lckhUTUwgPSBcIjxiPldvcmxkPC9iPlwiO1xuICogQWtpbGkuc2V0VGVtcGxhdGUoZWwsIFwiPGk+SGVsbG88L2k+JHt0aGlzLl9fY2hpbGRyZW59XCIpO1xuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbkFraWxpLnNldFRlbXBsYXRlID0gZnVuY3Rpb24oZWwsIHRlbXBsYXRlKSB7XG4gIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZSgvXFwkeygoKD8hXFwkeylcXHMqdGhpc1xcLl9fY29udGVudFxccyopKil9LywgZWwuaW5uZXJIVE1MKTtcbiAgZWwuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG5cbiAgcmV0dXJuIGVsLmlubmVySFRNTDtcbn07XG5cbi8qKlxuICogR2VuZXJhdGUgdW5pcXVlIHNjb3BlIG5hbWVcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5Ba2lsaS5jcmVhdGVTY29wZU5hbWUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHV0aWxzLmNyZWF0ZVJhbmRvbVN0cmluZygxNiwgKHN0cikgPT4ge1xuICAgIHJldHVybiAhIXRoaXMuX19zY29wZXNbc3RyXTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIElzb2xhdGUgZnVuY3Rpb24uXG4gKiBFdmVyeSBzY29wZSB2YXJpYWJsZSBjaGFuZ2UgY2FsbHMgYWNjb3JkaW5nIG5vZGUgZXZhbHVhdGlvbi5cbiAqIEZvciBleGFtcGxlLCBpZiB5b3UgY2hhbmdlIHNvbWUgc2NvcGUgdmFyaWFibGUgaW4gdGhlIGxvb3AgLSBldmFsdWF0aW9uIHdpbGwgYmUgY2FsbGVkIG9uIHRoZSBlYWNoIGNoYW5nZS5cbiAqIEl0IG1heSBiZSBzbG93IGZvciB0aGUgYXBwbGljYXRpb24uXG4gKiBZb3UgY2FuIGlzb2xhdGUgdGhpcyBhY3Rpb24gYW5kIHJ1biBhbGwgZXZhbHVhdGlvbiBwcm9jZXNzIGFmdGVyIHBhc3NlZCBmdW5jdGlvbiBhdCBvbmNlLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkuaXNvbGF0ZSA9IGZ1bmN0aW9uKGZuKSB7XG4gIGlmKHRoaXMuX19pc29sYXRpb24pIHtcbiAgICByZXR1cm4gZm4oKTtcbiAgfVxuXG4gIHRoaXMuX19pc29sYXRpb24gPSB7fTtcblxuICBsZXQgcmVzID0gZm4oKTtcbiAgbGV0IHByb3BzID0gW107XG5cbiAgZm9yKGxldCBrIGluIHRoaXMuX19pc29sYXRpb24pIHtcbiAgICBpZighdGhpcy5fX2lzb2xhdGlvbi5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcHJvcHMucHVzaCh0aGlzLl9faXNvbGF0aW9uW2tdKTtcbiAgfVxuXG4gIHRoaXMuX19pc29sYXRpb24gPSBudWxsO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBwcm9wcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgcHJvcCA9IHByb3BzW2ldO1xuXG4gICAgaWYocHJvcC5pc0RlbGV0ZWQpIHtcbiAgICAgIHByb3AuY29tcG9uZW50Ll9fZXZhbHVhdGVCeUtleXMocHJvcC5rZXlzLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB1dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyhwcm9wLmtleXMsIHByb3AuY29tcG9uZW50LnNjb3BlLCAobGFzdCwgdmFsKSA9PiB7XG4gICAgICBpZighbGFzdCkge1xuICAgICAgICByZXR1cm4gdmFsIHx8IHt9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvcC52YWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb3BzID0gbnVsbDtcblxuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBTdG9wIGV2YWx1YXRpb24gYmVmb3JlIHRoZSBmdW5jdGlvbiBhbmQgY29udGludWUgYWZ0ZXJcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLnVuZXZhbHVhdGVkID0gZnVuY3Rpb24oZm4pIHtcbiAgbGV0IGV2YWx1YXRpb24gPSB0aGlzLl9fZXZhbHVhdGlvbjtcbiAgbGV0IHJlcztcblxuICB0aGlzLl9fZXZhbHVhdGlvbiA9IG51bGw7XG4gIHJlcyA9IGZuKCk7XG4gIHRoaXMuX19ldmFsdWF0aW9uID0gZXZhbHVhdGlvbjtcblxuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBTdG9wIGlzb2xhdGlvbiBiZWZvcmUgdGhlIGZ1bmN0aW9uIGFuZCBjb250aW51ZSBhZnRlclxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkudW5pc29sYXRlZCA9IGZ1bmN0aW9uKGZuKSB7XG4gIGxldCBldmFsdWF0aW9uID0gdGhpcy5fX2lzb2xhdGlvbjtcbiAgbGV0IHJlcztcblxuICB0aGlzLl9faXNvbGF0aW9uID0gbnVsbDtcbiAgcmVzID0gZm4oKTtcbiAgdGhpcy5fX2lzb2xhdGlvbiA9IGV2YWx1YXRpb247XG5cbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucz17fV1cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS5pbml0aWFsaXplID0gZnVuY3Rpb24oZWwsIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgcmVjb21waWxlID0gb3B0aW9ucy5yZWNvbXBpbGU7XG4gIGxldCBjb21wb25lbnQgPSBlbC5fX2FraWxpO1xuXG4gIGlmKGNvbXBvbmVudCkge1xuICAgIGlmKHJlY29tcGlsZSkge1xuICAgICAgY29tcG9uZW50Ll9fcmVjb21waWxlKCk7XG5cbiAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGlzUm9vdCA9IGVsID09PSB0aGlzLl9fcm9vdDtcbiAgbGV0IGNvbXBvbmVudE5hbWUgPSB1dGlscy50b0Rhc2hDYXNlKGVsLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50JykgfHwgZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgbGV0IF9Db21wb25lbnQgPSB0aGlzLl9fY29tcG9uZW50c1tjb21wb25lbnROYW1lXTtcblxuICBDSEVDS19BTElBU0VTOiBpZighX0NvbXBvbmVudCkge1xuICAgIGxldCBzZWxlY3RvcnMgPSBPYmplY3Qua2V5cyh0aGlzLl9fYWxpYXNlcyk7XG5cbiAgICBpZighc2VsZWN0b3JzLmxlbmd0aCkge1xuICAgICAgYnJlYWsgQ0hFQ0tfQUxJQVNFUztcbiAgICB9XG5cbiAgICBsZXQgc2VsZWN0b3JBbGwgPSBzZWxlY3RvcnMuam9pbignLCcpO1xuXG4gICAgaWYoIWVsLm1hdGNoZXMoc2VsZWN0b3JBbGwpKSB7XG4gICAgICBicmVhayBDSEVDS19BTElBU0VTO1xuICAgIH1cblxuICAgIGZvcihsZXQgc2VsZWN0b3IgaW4gdGhpcy5fX2FsaWFzZXMpIHtcbiAgICAgIGlmKCF0aGlzLl9fYWxpYXNlcy5oYXNPd25Qcm9wZXJ0eShzZWxlY3RvcikpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmKGVsLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIF9Db21wb25lbnQgPSB0aGlzLl9fY29tcG9uZW50c1t0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl1dO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZighX0NvbXBvbmVudCAmJiAhaXNSb290KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYoIV9Db21wb25lbnQpIHtcbiAgICBfQ29tcG9uZW50ID0gdGhpcy5Db21wb25lbnQ7XG4gIH1cblxuICBpZihfQ29tcG9uZW50Lm1hdGNoZXMgJiYgIWVsLm1hdGNoZXMoX0NvbXBvbmVudC5tYXRjaGVzKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbXBvbmVudCA9IG5ldyBfQ29tcG9uZW50KGVsLCB7fSk7XG5cbiAgaWYoY29tcG9uZW50Ll9fY2FuY2VsbGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29tcG9uZW50Ll9fY3JlYXRlKCk7XG5cbiAgcmV0dXJuIGNvbXBvbmVudDtcbn07XG5cbi8qKlxuICogQ29tcGlsZSB0aGUgZWxlbWVudFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5Ba2lsaS5jb21waWxlID0gZnVuY3Rpb24ocm9vdCwgb3B0aW9ucyA9IHsgcmVjb21waWxlOiBmYWxzZSB9KSB7XG4gIGxldCBlbGVtZW50cyA9IFtdO1xuXG4gIGxldCBuZXN0ZWRJbml0aWFsaXppbmcgPSAoZWwpID0+IHtcbiAgICBsZXQgY29tcG9uZW50ID0gdGhpcy5pbml0aWFsaXplKGVsLCBvcHRpb25zKTtcbiAgICBsZXQgY2hpbGRyZW4gPSBlbC5jaGlsZHJlbjtcblxuICAgIGNvbXBvbmVudCAmJiBlbGVtZW50cy5wdXNoKGNvbXBvbmVudCk7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcblxuICAgICAgbmVzdGVkSW5pdGlhbGl6aW5nKGNoaWxkKTtcbiAgICB9XG4gIH07XG5cbiAgbmVzdGVkSW5pdGlhbGl6aW5nKHJvb3QpO1xuXG4gIGxldCBwID0gW107XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBjb21wb25lbnQgPSBlbGVtZW50c1tpXTtcblxuICAgIHAucHVzaChjb21wb25lbnQuX19jb21waWxlKCkpO1xuICB9XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKHApLnRoZW4oKCkgPT4ge1xuICAgIGxldCByID0gW107XG5cbiAgICBmb3IobGV0IGkgPSBlbGVtZW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IGNvbXBvbmVudCA9IGVsZW1lbnRzW2ldO1xuXG4gICAgICByLnB1c2goY29tcG9uZW50Ll9fcmVzb2x2ZSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocik7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciB0aGUgY29tcG9uZW50IG9yIGdldCBpdCBpZiBmbiBpcyBub3QgcGFzc2VkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBbZm5dXG4gKi9cbkFraWxpLmNvbXBvbmVudCA9IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYoIWZuKSB7XG4gICAgcmV0dXJuIHRoaXMuX19jb21wb25lbnRzW25hbWVdIHx8IG51bGw7XG4gIH1cblxuICBpZih0aGlzLl9fY29tcG9uZW50c1tuYW1lXSAmJiBBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgY29uc29sZS53YXJuKGBDb21wb25lbnQgJHtuYW1lfSBhbHJlYWR5IHdhcyBhZGRlZGApO1xuICB9XG5cbiAgdGhpcy5fX2NvbXBvbmVudHNbbmFtZV0gPSBmbjtcbn07XG5cbi8qKlxuICogVW5yZWdpc3RlciB0aGUgY29tcG9uZW50XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xuQWtpbGkudW5yZWdpc3RlckNvbXBvbmVudCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZGVsZXRlIHRoaXMuX19jb21wb25lbnRzW25hbWVdO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciB0aGUgc2VsZWN0b3IgYWxpYXMgb3IgZ2V0IGl0IGlmIGNvbXBvbmVudCBuYW1lIGlzIG5vdCBwYXNzZWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgLSBET00gc2VsZWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29tcG9uZW50TmFtZV1cbiAqL1xuQWtpbGkuYWxpYXMgPSBmdW5jdGlvbihzZWxlY3RvciwgY29tcG9uZW50TmFtZSA9ICcnKSB7XG4gIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYoIWNvbXBvbmVudE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdIHx8IG51bGw7XG4gIH1cblxuICBpZih0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gJiYgQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgIGNvbnNvbGUud2FybihgQWxpYXMgd2l0aCBzZWxlY3RvciAke3NlbGVjdG9yfSBhbHJlYWR5IHdhcyBhZGRlZGApO1xuICB9XG5cbiAgdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdID0gY29tcG9uZW50TmFtZTtcbn07XG5cbi8qKlxuICogVW5yZWdpc3RlciB0aGUgc2VsZWN0b3IgYWxpYXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqL1xuQWtpbGkudW5yZWdpc3RlckFsaWFzID0gZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgZGVsZXRlIHRoaXMuX19jb21wb25lbnRzW3NlbGVjdG9yXTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSBhcnJheSBwcm90b3R5cGUgZnVuY3Rpb25zXG4gKi9cbkFraWxpLmlzb2xhdGVBcnJheVByb3RvdHlwZSA9IGZ1bmN0aW9uKCkge1xuICBsZXQga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKEFycmF5LnByb3RvdHlwZSk7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgbGV0IG9sZCA9IEFycmF5LnByb3RvdHlwZVtrZXldO1xuXG4gICAgaWYodHlwZW9mIG9sZCAhPSAnZnVuY3Rpb24nIHx8IGtleSA9PSAnY29uc3RydWN0b3InKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBBcnJheS5wcm90b3R5cGVba2V5XSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIEFraWxpLnVuZXZhbHVhdGVkKCgpID0+IHtcbiAgICAgICAgaWYoIXRoaXMuX19pc1Byb3h5KSB7XG4gICAgICAgICAgcmV0dXJuIG9sZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBvbGQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG59O1xuXG4vKipcbiAqIElzb2xhdGUgc29tZSB3aW5kb3cgZnVuY3Rpb25zXG4gKi9cbkFraWxpLmlzb2xhdGVXaW5kb3dGdW5jdGlvbnMgPSBmdW5jdGlvbigpIHtcbiAgd2luZG93LnNldFRpbWVvdXQgPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5zZXRUaW1lb3V0LCAwKTtcbiAgd2luZG93LnNldEludGVydmFsID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuc2V0SW50ZXJ2YWwsIDApO1xuICB3aW5kb3cuUHJvbWlzZSAmJiAod2luZG93LlByb21pc2UuY29uc3RydWN0b3IgPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5Qcm9taXNlLmNvbnN0cnVjdG9yICwgMCkpO1xufTtcblxuLyoqXG4gKiBJc29sYXRlIGV2ZW50IGxpc3RlbmVyc1xuICovXG5Ba2lsaS5pc29sYXRlRXZlbnRzID0gZnVuY3Rpb24oKSB7XG4gIGxldCBvbGRBZGRFdmVudExpc3RlbmVyID0gRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcjtcbiAgbGV0IG9sZFJlbW92ZUV2ZW50TGlzdGVuZXIgPSBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyO1xuICBsZXQgb2xkUmVtb3ZlID0gRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlO1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGRlbGV0ZSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnM7XG5cbiAgICByZXR1cm4gb2xkUmVtb3ZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgbGV0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICBpZighdGhpcy5fX2FraWxpTGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZighdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBhcmdzWzFdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIEFraWxpLnVuZXZhbHVhdGVkKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ucHVzaCh7XG4gICAgICBsaW5rOiBmbixcbiAgICAgIGZuOiBhcmdzWzFdXG4gICAgfSk7XG5cbiAgICByZXR1cm4gb2xkQWRkRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfTtcblxuICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZighdGhpcy5fX2FraWxpTGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZighdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGxpc3RlbmVyID0gdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdW2ldO1xuXG4gICAgICBpZihsaXN0ZW5lci5saW5rID09PSBmbikge1xuICAgICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICBpLS07XG4gICAgICAgIGwtLTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZighdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2xkUmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuLyoqXG4gKiBXcmFwIHRoZSBmdW5jdGlvbiBjYWxsYmFjayB0byBhbiBpc29sYXRlIGNvbnRleHRcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBbcG9zPVwibGFzdFwiXVxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5Ba2lsaS5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbiA9IGZ1bmN0aW9uKGZuLCBwb3MgPSAnbGFzdCcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGxldCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgIGxldCBjYWxsYmFjayA9IHBvcyA9PSAnbGFzdCc/IGFyZ3NbYXJncy5sZW5ndGggLSAxXTogYXJnc1twb3NdO1xuXG4gICAgaWYodHlwZW9mIGNhbGxiYWNrICE9ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIGFyZ3NbMF0gPSAoKSA9PiB7XG4gICAgICByZXR1cm4gQWtpbGkudW5ldmFsdWF0ZWQoKCkgPT4ge1xuICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSB0aGUgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtvYmplY3R9IFtjb250ZXh0XVxuICogQHJldHVybnMge2Z1bmN0aW9ufVxuICovXG5Ba2lsaS5pc29sYXRlRnVuY3Rpb24gPSBmdW5jdGlvbihmbiwgY29udGV4dCA9IG51bGwpIHtcbiAgaWYoZm4uX19ha2lsaSkge1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIGxldCBvRm4gPSBmdW5jdGlvbigpIHtcbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCB0aGlzO1xuXG4gICAgcmV0dXJuIEFraWxpLnVuZXZhbHVhdGVkKCgpID0+IHtcbiAgICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3VtZW50cyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob0ZuLCAnX19ha2lsaScsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG5cbiAgcmV0dXJuIG9Gbjtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhbiBhcHBsaWNhdGlvblxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFtyb290XVxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbkFraWxpLmluaXQgPSBmdW5jdGlvbihyb290KSB7XG4gIHRoaXMuX19yb290ID0gcm9vdCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKTtcblxuICByZXR1cm4gdGhpcy5jb21waWxlKHRoaXMuX19yb290KS50aGVuKCgpID0+IHtcbiAgICBpZihyb3V0ZXIuX19pbml0KSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcykgPT4ge1xuICAgICAgICBsZXQgb25TdGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICByZXMoKTtcbiAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3RhdGUtY2hhbmdlJywgb25TdGF0ZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3N0YXRlLWNoYW5nZScsIG9uU3RhdGUpO1xuICAgICAgICByb3V0ZXIuY2hhbmdlU3RhdGUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSkudGhlbigoKSA9PiB7XG4gICAgQWtpbGkuX19pbml0ID0gdHJ1ZTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIERlZmluZSBhbGwgZGVmYXVsdCBjb21wb25lbnRzXG4gKi9cbkFraWxpLmRlZmluZSA9IGZ1bmN0aW9uKCkge1xuICBBLmRlZmluZSgpO1xuICBDb250ZW50LmRlZmluZSgpO1xuICBDb21wb25lbnQuZGVmaW5lKCk7XG4gIEZvci5kZWZpbmUoKTtcbiAgSW5jbHVkZS5kZWZpbmUoKTtcbiAgSW5wdXQuZGVmaW5lKCk7XG4gIElmLmRlZmluZSgpO1xuICBSYWRpby5kZWZpbmUoKTtcbiAgUm91dGUuZGVmaW5lKCk7XG4gIFNlbGVjdC5kZWZpbmUoKTtcbiAgVGV4dGFyZWEuZGVmaW5lKCk7XG59O1xuXG5Ba2lsaS5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5Ba2lsaS5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5Ba2lsaS5TY29wZSA9IFNjb3BlO1xuQWtpbGkudXRpbHMgPSB1dGlscztcbkFraWxpLmNvbXBvbmVudHMuQSA9IEE7XG5Ba2lsaS5jb21wb25lbnRzLkNvbnRlbnQgPSBDb250ZW50O1xuQWtpbGkuY29tcG9uZW50cy5Gb3IgPSBGb3I7XG5Ba2lsaS5jb21wb25lbnRzLklmID0gSWY7XG5Ba2lsaS5jb21wb25lbnRzLkluY2x1ZGUgPSBJbmNsdWRlO1xuQWtpbGkuY29tcG9uZW50cy5JbnB1dCA9IElucHV0O1xuQWtpbGkuY29tcG9uZW50cy5SYWRpbyA9IFJhZGlvO1xuQWtpbGkuY29tcG9uZW50cy5Sb3V0ZSA9IFJvdXRlO1xuQWtpbGkuY29tcG9uZW50cy5TZWxlY3QgPSBTZWxlY3Q7XG5Ba2lsaS5jb21wb25lbnRzLlRleHQgPSBUZXh0O1xuQWtpbGkuY29tcG9uZW50cy5UZXh0YXJlYSA9IFRleHRhcmVhO1xuQWtpbGkuc2VydmljZXMucmVxdWVzdCA9IHJlcXVlc3Q7XG5Ba2lsaS5zZXJ2aWNlcy5yb3V0ZXIgPSByb3V0ZXI7XG5cbndpbmRvdy5Ba2lsaSA9IEFraWxpO1xuXG5leHBvcnQgY29uc3QgY29tcG9uZW50cyA9IEFraWxpLmNvbXBvbmVudHM7XG5leHBvcnQgY29uc3Qgc2VydmljZXMgPSBBa2lsaS5zZXJ2aWNlcztcbmV4cG9ydCBkZWZhdWx0IEFraWxpO1xuXG5Ba2lsaS5kZWZpbmUoKTtcbkFraWxpLmlzb2xhdGVFdmVudHMoKTtcbkFraWxpLmlzb2xhdGVBcnJheVByb3RvdHlwZSgpO1xuQWtpbGkuaXNvbGF0ZVdpbmRvd0Z1bmN0aW9ucygpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ha2lsaS5qcyIsImltcG9ydCBBa2lsaSBmcm9tICcuL2FraWxpJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vc2VydmljZXMvcmVxdWVzdCc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IGV2YWx1YXRpb25SZWdleCA9IC9cXCR7KCgoPyFcXCR7KS4pKil9LztcbmNvbnN0IGV2YWx1YXRpb25SZWdleEdsb2JhbCA9IG5ldyBSZWdFeHAoZXZhbHVhdGlvblJlZ2V4LnNvdXJjZSwgXCJnXCIpO1xuY29uc3Qgc3lzdGVtQXR0cmlidXRlcyA9IFsnY29tcG9uZW50JywgJ3Njb3BlJ107XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBuZXN0ZWRXYXRjaGluZztcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gW107XG4gIHN0YXRpYyBldmVudHMgPSBbXTtcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gZmFsc2U7XG4gIHN0YXRpYyB0cmFuc3BhcmVudCA9IGZhbHNlO1xuICBzdGF0aWMgdGVtcGxhdGUgPSAnJztcbiAgc3RhdGljIHRlbXBsYXRlVXJsID0gJyc7XG4gIHN0YXRpYyBzY29wZSA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRvIGRlZmluZSB0aGUgY29tcG9uZW50XG4gICAqL1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnY29tcG9uZW50JywgQ29tcG9uZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSB0aGUgZXhwcmVzc2lvblxuICAgKlxuICAgKiBSZXF1aXJlZCBjb250ZXh0IHZhcmlhYmxlczpcbiAgICogIHRoaXMgLSBzY29wZSBvYmplY3RcbiAgICogIGV2ZW50IC0gd2luZG93LmV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBleHByZXNzaW9uXG4gICAqL1xuICBzdGF0aWMgcGFyc2UoY29udGV4dCwgZXhwcmVzc2lvbikge1xuICAgIHJldHVybiAoZnVuY3Rpb24gKGV4cHJlc3Npb24pIHtcbiAgICAgIHJldHVybiBldmFsKGV4cHJlc3Npb24pO1xuICAgIH0pLmNhbGwoY29udGV4dCwgZXhwcmVzc2lvbilcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVsLCBzY29wZSA9IHt9KSB7XG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19pc0NvbXBpbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19iaW5kaW5ncyA9IHt9O1xuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSBudWxsO1xuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IG51bGw7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IHt9O1xuICAgIHRoaXMuX19kaXNhYmxlUHJveHkgPSBudWxsO1xuICAgIHRoaXMuX19jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuX19wYXJlbnQgPSBudWxsO1xuICAgIHRoaXMuX19wYXJlbnRzID0gW107XG4gICAgdGhpcy5fX2F0dHJzID0ge307XG4gICAgdGhpcy5fX2F0dHJpYnV0ZU9mID0gbnVsbDtcbiAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudCA9IHRoaXM7XG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gdGhlIHJlY29tcGlsYXRpb25cbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZWNvbXBpbGUoKSB7XG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19pc0NvbXBpbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQuX19kaXNhYmxlUHJveHkgPSBudWxsO1xuICAgIHRoaXMuX19jb21waWxpbmcgPSB7fTtcbiAgICB0aGlzLl9fcmVjb21waWxpbmcgPSB7fTtcbiAgICB0aGlzLl9fc2V0RXZlbnRzKCk7XG4gICAgdGhpcy5fX3NldFBhcmVudHMoKTtcbiAgICB0aGlzLl9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKTtcbiAgICB0aGlzLl9fZGVmaW5lQXR0cmlidXRlcygpO1xuXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIG9uIHRoZSBjcmVhdGlvblxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZSgpIHtcbiAgICB0aGlzLmVsLl9fYWtpbGkgPSB0aGlzO1xuICAgIHRoaXMuX19pbml0aWFsaXplKCk7XG4gICAgdGhpcy5fX3NldEV2ZW50cygpO1xuICAgIHRoaXMuX19zZXRQYXJlbnRzKCk7XG4gICAgdGhpcy5fX3NldEJvb2xlYW5BdHRyaWJ1dGVzKCk7XG4gICAgdGhpcy5fX2RlZmluZUF0dHJpYnV0ZXMoKTtcblxuICAgIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVkKHRoaXMuYXR0cnMpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiB0aGUgY29tcGlsYXRpb25cbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIF9fY29tcGlsZSgpIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuX19jb250cm9sQXR0cmlidXRlcyB8fCAhdGhpcy5fX2V2YWx1YXRlUGFyZW50O1xuICAgIGxldCBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbiAgICB0aGlzLl9fYXR0cmlidXRlT2YgPSBjb250cm9sPyB0aGlzOiB0aGlzLl9fZXZhbHVhdGVQYXJlbnQuX19ha2lsaTtcblxuICAgIGlmKCF0aGlzLl9fcmVjb21waWxpbmcgfHwgdGhpcy5fX2NvbXBpbGluZy5uZXdQYXJlbnQgfHwgdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzKSB7XG4gICAgICB0aGlzLl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKHRoaXMuZWwsIHRoaXMuX19hdHRyaWJ1dGVPZik7XG4gICAgfVxuXG4gICAgbGV0IGludGVycG9sYXRlID0gKGNoaWxkcmVuLCBwYXJlbnQpID0+IHtcbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYoY2hpbGQubm9kZVR5cGUgPT0gMykge1xuICAgICAgICAgIHRoaXMuX19pbml0aWFsaXplTm9kZShjaGlsZCwgcGFyZW50KTtcblxuICAgICAgICAgIGNoaWxkLm5vZGVWYWx1ZSA9IHRoaXMuX19ldmFsdWF0ZShjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihjaGlsZC5ub2RlVHlwZSA9PSAxICYmICFjaGlsZC5fX2FraWxpKSB7XG4gICAgICAgICAgdGhpcy5fX2ludGVycG9sYXRlQXR0cmlidXRlcyhjaGlsZCk7XG4gICAgICAgICAgaW50ZXJwb2xhdGUoY2hpbGQuY2hpbGROb2RlcywgY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGludGVycG9sYXRlKHRoaXMuZWwuY2hpbGROb2RlcywgdGhpcy5lbCk7XG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IHRydWU7XG5cbiAgICBsZXQgcmVzO1xuXG4gICAgaWYoIXRoaXMuX19yZWNvbXBpbGluZykge1xuICAgICAgcmVzID0gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0cnMub25Db21waWxlZCAmJiB0aGlzLmF0dHJzLm9uQ29tcGlsZWQudHJpZ2dlcigpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBpbGVkKCk7XG4gICAgICB9KTtcblxuICAgICAgaWYodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkge1xuICAgICAgICBwID0gcmVxdWVzdC5nZXQodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLl9fY29udGVudDtcbiAgICAgICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCByZXMuZGF0YSk7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX19jb250ZW50O1xuXG4gICAgICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uUmVjb21waWxlZCAmJiB0aGlzLmF0dHJzLm9uUmVjb21waWxlZC50cmlnZ2VyKCk7XG4gICAgICAgIHRoaXMucmVjb21waWxlZCgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fX2lzQ29tcGlsZWQgPSB0cnVlO1xuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IG51bGw7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IG51bGw7XG5cbiAgICByZXR1cm4gcC50aGVuKCgpID0+IHtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZSB0aGUgY29tcG9uZW50XG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBfX3Jlc29sdmUoKSB7XG4gICAgaWYodGhpcy5fX3JlY29tcGlsaW5nKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5hdHRycy5vblJlc29sdmVkICYmIHRoaXMuYXR0cnMub25SZXNvbHZlZC50cmlnZ2VyKCk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnJlc29sdmVkKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnQgb2YgdGhlIHtAc2VlIENvbXBvbmVudCNfX2NvbXBpbGV9IG1ldGhvZFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemUoKSB7XG4gICAgbGV0IHBhcmVudCA9IEFraWxpLmdldEFraWxpUGFyZW50cyh0aGlzLmVsLCBmYWxzZSk7XG4gICAgbGV0IFNjb3BlID0gdGhpcy5jb25zdHJ1Y3Rvci5zY29wZSB8fCBBa2lsaS5TY29wZTtcbiAgICBsZXQgc2NvcGU7XG4gICAgbGV0IGlzUm9vdCA9IEFraWxpLl9fcm9vdCA9PT0gdGhpcy5lbDtcblxuICAgIGlmKHBhcmVudCkge1xuICAgICAgc2NvcGUgPSBuZXcgU2NvcGUodGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3Njb3BlJykgfHwgQWtpbGkuY3JlYXRlU2NvcGVOYW1lKCksIHRoaXMuZWwsIHRoaXMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNjb3BlID0gbmV3IFNjb3BlKGlzUm9vdD8gJ3Jvb3QnOiBBa2lsaS5jcmVhdGVTY29wZU5hbWUoKSwgdGhpcy5lbCwgdGhpcyk7XG4gICAgICBpc1Jvb3QgJiYgKEFraWxpLnJvb3QgPSB0aGlzKTtcbiAgICB9XG5cbiAgICBsZXQgX19zY29wZSA9IHNjb3BlO1xuICAgIGxldCBfc2NvcGUgPSBPYmplY3QuYXNzaWduKHNjb3BlLCB0aGlzLnNjb3BlKTtcbiAgICBsZXQgbmVzdGVkV2F0Y2hpbmcgPSBBa2lsaS5vcHRpb25zLm5lc3RlZFdhdGNoaW5nO1xuICAgIGxldCBjb250cm9sQXR0cmlidXRlcyA9IHRoaXMuY29uc3RydWN0b3IuY29udHJvbEF0dHJpYnV0ZXM7XG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuY29uc3RydWN0b3IuZXZlbnRzO1xuXG4gICAgaWYodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZSkge1xuICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgdGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgaWYodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkge1xuICAgICAgdGhpcy5fX2NvbnRlbnQgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gICAgaWYodGhpcy5jb25zdHJ1Y3Rvci5uZXN0ZWRXYXRjaGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXN0ZWRXYXRjaGluZyA9IHRoaXMuY29uc3RydWN0b3IubmVzdGVkV2F0Y2hpbmc7XG4gICAgfVxuICAgIGVsc2UgaWYoU2NvcGUubmVzdGVkV2F0Y2hpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbmVzdGVkV2F0Y2hpbmcgPSBTY29wZS5uZXN0ZWRXYXRjaGluZztcbiAgICB9XG5cbiAgICB0aGlzLl9fc2NvcGUgPSBfX3Njb3BlO1xuICAgIHRoaXMuX19ldmVudHMgPSBldmVudHM7XG4gICAgdGhpcy5fX25lc3RlZFdhdGNoaW5nID0gbmVzdGVkV2F0Y2hpbmc7XG4gICAgdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzID0gY29udHJvbEF0dHJpYnV0ZXM7XG5cbiAgICBBa2lsaS5hZGRTY29wZShzY29wZSk7XG5cbiAgICBpZihuZXN0ZWRXYXRjaGluZykge1xuICAgICAgc2NvcGUgPSB0aGlzLl9fbmVzdGVkT2JzZXJ2ZShfc2NvcGUsIFtdKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzY29wZSA9IHRoaXMuX19vYnNlcnZlKF9zY29wZSwgW10pO1xuICAgIH1cblxuICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYm9vbGVhbiBhdHRyaWJ1dGVzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKSB7XG4gICAgdGhpcy5ib29sZWFuQXR0cmlidXRlcyA9IFtdLmNvbmNhdChBa2lsaS5odG1sQm9vbGVhbkF0dHJpYnV0ZXMsIHRoaXMuY29uc3RydWN0b3IuYm9vbGVhbkF0dHJpYnV0ZXMpO1xuXG4gICAgbGV0IHNldEF0dHIgPSAoZWwpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBhdHRycyA9IGVsLmF0dHJpYnV0ZXMsIGwgPSBhdHRycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IG5vZGUgPSBhdHRyc1tpXTtcblxuICAgICAgICBpZih0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzLmluZGV4T2Yobm9kZS5ub2RlTmFtZSkgIT0gLTEpIHtcbiAgICAgICAgICBpZihlbC5oYXNBdHRyaWJ1dGUoYGJvb2xlYW4tJHtub2RlLm5vZGVOYW1lfWApKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYGJvb2xlYW4tJHtub2RlLm5vZGVOYW1lfWAsIGVsLmdldEF0dHJpYnV0ZShub2RlLm5vZGVOYW1lKSB8fCBub2RlLm5vZGVOYW1lKTtcbiAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGVsLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBlbC5jaGlsZHJlbltpXTtcblxuICAgICAgICBpZighY2hpbGQuX19ha2lsaSkge1xuICAgICAgICAgIHNldEF0dHIoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNldEF0dHIodGhpcy5lbCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGV2ZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldEV2ZW50cygpIHtcbiAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5fX2V2ZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBldiA9IHRoaXMuX19ldmVudHNbaV07XG5cbiAgICAgICEvXm9uLS9pLnRlc3QoZXYpICYmIChldiA9ICdvbi0nICsgZXYpO1xuXG4gICAgICBpZighdGhpcy5lbC5oYXNBdHRyaWJ1dGUoZXYpKSB7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGV2LCAnJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjb21wb25lbnQgcGFyZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldFBhcmVudHMoKSB7XG4gICAgbGV0IHBhcmVudHMgPSBBa2lsaS5nZXRBa2lsaVBhcmVudHModGhpcy5lbCk7XG5cbiAgICBpZighcGFyZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbmV3UGFyZW50ID0gdGhpcy5fX3BhcmVudCAhPT0gcGFyZW50c1swXTtcbiAgICBsZXQgZXZhbHVhdGVQYXJlbnQgPSBudWxsO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHBhcmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcGFyZW50ID0gcGFyZW50c1tpXTtcblxuICAgICAgaWYoIXBhcmVudC5fX2FraWxpLmNvbnN0cnVjdG9yLnRyYW5zcGFyZW50KSB7XG4gICAgICAgIGV2YWx1YXRlUGFyZW50ID0gcGFyZW50O1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX19jb21waWxpbmcubmV3UGFyZW50ID0gbmV3UGFyZW50O1xuICAgIG5ld1BhcmVudCAmJiB0aGlzLl9fZGV0YWNoKCk7XG5cbiAgICBpZih0aGlzLmNvbnN0cnVjdG9yLnRyYW5zcGFyZW50KSB7XG4gICAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudCA9IGV2YWx1YXRlUGFyZW50Ll9fYWtpbGk7XG4gICAgfVxuXG4gICAgdGhpcy5fX2V2YWx1YXRlUGFyZW50ID0gZXZhbHVhdGVQYXJlbnQ7XG4gICAgdGhpcy5fX3BhcmVudCA9IHBhcmVudHNbMF07XG4gICAgdGhpcy5fX3BhcmVudHMgPSBwYXJlbnRzO1xuICAgIHRoaXMuc2NvcGUuX19wYXJlbnQgPSB0aGlzLl9fZXZhbHVhdGVQYXJlbnQuX19ha2lsaS5zY29wZTtcbiAgICAhdGhpcy5fX3JlY29tcGlsaW5nICYmIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2FkZENoaWxkKHRoaXMuZWwpO1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLnNjb3BlLCB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19zY29wZSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGNoaWxkIGVsZW1lbnQgdG8gdGhlIGxpc3RcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hZGRDaGlsZChlbCkge1xuICAgIHRoaXMuX19jaGlsZHJlbi5wdXNoKGVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGxpY2UgY2hpbGQgZnJvbSB0aGUgbGlzdFxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NwbGljZUNoaWxkKGVsKSB7XG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuX19jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuX19jaGlsZHJlbltpXTtcblxuICAgICAgaWYoY2hpbGQgPT09IGVsKSB7XG4gICAgICAgIHRoaXMuX19jaGlsZHJlbi5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGktLTtcbiAgICAgICAgbC0tO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBZb3UgY2FuIGNoYW5nZSBleHByZXNzaW9uIGJlZm9yZSBwYXJzaW5nIGhlcmVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4cHJlc3Npb25cbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0UGFyc2VkRXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgbm9kZSBoYXMgYW55IHByb3BlcnR5IGNoYW5nZXMgb3Igbm90XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jaGVja0V2YWx1YXRpb24obm9kZSkge1xuICAgIGlmICghT2JqZWN0LmtleXMobm9kZS5fX3Byb3BlcnRpZXMpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgayBpbiBub2RlLl9fcHJvcGVydGllcykge1xuICAgICAgaWYoIW5vZGUuX19wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgcHJvcCA9IG5vZGUuX19wcm9wZXJ0aWVzW2tdO1xuICAgICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMocHJvcC5rZXlzLCBwcm9wLmNvbXBvbmVudC5fX3Njb3BlKTtcblxuICAgICAgaWYoIXV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlKHZhbHVlLCBwcm9wLnZhbHVlLCBwcm9wLmNvcHksIHV0aWxzLmNvcHkodmFsdWUpKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogIENoZWNrIG5vZGUgaGFzIGNoYW5nZWQgb24gdGhlIGNlcnRhaW4ga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NoZWNrTm9kZVByb3BlcnR5Q2hhbmdpbmcobm9kZSwga2V5cywgdmFsdWUpIHtcbiAgICBsZXQgcHJvcCA9IHRoaXMuX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cyk7XG5cbiAgICBpZighcHJvcCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuICF1dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSh2YWx1ZSwgcHJvcC52YWx1ZSwgcHJvcC5jb3B5LCB1dGlscy5jb3B5KHZhbHVlKSk7XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgbm9kZSBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZShub2RlKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGxldCBhdHRyaWJ1dGVWYWx1ZTtcbiAgICBsZXQgZXhwcmVzc2lvbjtcblxuICAgIGxldCByZXMgPSBub2RlLl9fZXhwcmVzc2lvbi5yZXBsYWNlKGV2YWx1YXRpb25SZWdleEdsb2JhbCwgKG0sIGQpID0+IHtcbiAgICAgIGNvdW50ZXIrKztcblxuICAgICAgbGV0IGV2YWx1YXRlO1xuICAgICAgbGV0IGV2YWx1YXRpb247XG4gICAgICBsZXQgZXhpc3RpbmdCaW5kaW5ncyA9IHt9O1xuICAgICAgbGV0IHBhcnNlVmFsdWUgPSBub2RlLl9fY29tcG9uZW50Ll9fZ2V0UGFyc2VkRXhwcmVzc2lvbihkKTtcblxuICAgICAgQWtpbGkuX19ldmFsdWF0aW9uID0geyBub2RlOiBub2RlLCBsaXN0OiBbXX07XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGV2YWx1YXRlID0gdGhpcy5jb25zdHJ1Y3Rvci5wYXJzZSh0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5zY29wZSwgcGFyc2VWYWx1ZSk7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGxldCBtZXNzYWdlID0gYFNjb3BlIHBhcnNpbmcgZXJyb3IgaW4gdGhlIHRlbXBsYXRlIGV4cHJlc3Npb246ICR7bm9kZS5fX2V4cHJlc3Npb259YDtcblxuICAgICAgICBpZighQWtpbGkub3B0aW9ucy5zaG93RXZhbHVhdGlvbkVycm9ycykge1xuICAgICAgICAgIGlmKEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihlcnIuc3RhY2spO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGV2YWx1YXRlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGV2YWx1YXRpb24gPSBBa2lsaS5fX2V2YWx1YXRpb24/IEFraWxpLl9fZXZhbHVhdGlvbi5saXN0OiBbXTtcbiAgICAgIEFraWxpLl9fZXZhbHVhdGlvbi5saXN0ID0gbnVsbDtcbiAgICAgIEFraWxpLl9fZXZhbHVhdGlvbiA9IG51bGw7XG5cbiAgICAgIGZvcihsZXQgaSA9IGV2YWx1YXRpb24ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgbGV0IGRhdGEgPSBldmFsdWF0aW9uW2ldO1xuICAgICAgICBsZXQgaGFzaCA9IGAke2RhdGEuY29tcG9uZW50Ll9fc2NvcGUuX19uYW1lfS4ke2RhdGEua2V5c1N0cmluZ31gO1xuXG4gICAgICAgIGlmKGRhdGEubm90QmluZGluZykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZXhpc3RpbmdCaW5kaW5nc1toYXNoXSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBhcmVudFZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoZGF0YS5wYXJlbnRzLCBkYXRhLmNvbXBvbmVudC5fX3Njb3BlKTtcbiAgICAgICAgbGV0IGV2YWxDb21wb25lbnQgPSBub2RlLl9fYXR0cmlidXRlT2YgfHwgbm9kZS5fX2NvbXBvbmVudDtcblxuICAgICAgICBpZih1dGlscy5pc1Njb3BlUHJveHkocGFyZW50VmFsdWUpICYmIGRhdGEuY29tcG9uZW50ICE9PSBldmFsQ29tcG9uZW50Ll9fZXZhbHVhdGlvbkNvbXBvbmVudCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGJpbmQgPSBkYXRhLmNvbXBvbmVudC5fX2dldEJvdW5kTm9kZShkYXRhLmtleXMsIG5vZGUpO1xuICAgICAgICBsZXQgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhkYXRhLmtleXMsIGRhdGEuY29tcG9uZW50Ll9fc2NvcGUpO1xuXG4gICAgICAgIGlmKCFiaW5kKSB7XG4gICAgICAgICAgZGF0YS5jb21wb25lbnQuX19iaW5kKGRhdGEua2V5cywgeyBub2RlOiBub2RlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YS5jb21wb25lbnQuX19zZXROb2RlUHJvcGVydHkobm9kZSwgZGF0YS5rZXlzLCB2YWx1ZSk7XG4gICAgICAgIGV4aXN0aW5nQmluZGluZ3NbaGFzaF0gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBleGlzdGluZ0JpbmRpbmdzID0gbnVsbDtcbiAgICAgIGV2YWx1YXRpb24gPSBudWxsO1xuXG4gICAgICBpZihub2RlIGluc3RhbmNlb2YgQXR0cikge1xuICAgICAgICBleHByZXNzaW9uID0gbTtcbiAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBldmFsdWF0ZTtcblxuICAgICAgICByZXR1cm4gdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKGV2YWx1YXRlKTtcbiAgICAgIH1cblxuICAgICAgaWYodHlwZW9mIGV2YWx1YXRlID09ICdvYmplY3QnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGV2YWx1YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlKSB7XG4gICAgICAgICAgcmV0dXJuIGV2YWx1YXRlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBldmFsdWF0ZTtcbiAgICB9KTtcblxuICAgIGlmKG5vZGUgaW5zdGFuY2VvZiBBdHRyKSB7XG4gICAgICBsZXQgdmFsdWUgPSByZXM7XG4gICAgICBsZXQgaXNCb29sZWFuQXR0cmlidXRlID0gZmFsc2U7XG5cbiAgICAgIGlmKGNvdW50ZXIpIHtcbiAgICAgICAgbm9kZS5fX2hhc0JpbmRpbmdzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYoY291bnRlciA9PSAxICYmIGV4cHJlc3Npb24gJiYgbm9kZS5fX2V4cHJlc3Npb24gPT0gZXhwcmVzc2lvbikge1xuICAgICAgICB2YWx1ZSA9IGF0dHJpYnV0ZVZhbHVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgY2xlYXJBdHRyaWJ1dGUgPSBub2RlLm5vZGVOYW1lLnJlcGxhY2UoL15ib29sZWFuLSguKykvaSwgJyQxJyk7XG5cbiAgICAgIGlmKGNsZWFyQXR0cmlidXRlICE9IG5vZGUubm9kZU5hbWUpIHtcbiAgICAgICAgaXNCb29sZWFuQXR0cmlidXRlID0gdHJ1ZTtcbiAgICAgICAgdmFsdWUgPSAhIXZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZihub2RlLl9fYXR0cmlidXRlT24pIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IG5vZGUuX19hdHRyaWJ1dGVPbjtcblxuICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gdHJ1ZTtcbiAgICAgICAgY29tcG9uZW50LmF0dHJzW3V0aWxzLnRvQ2FtZWxDYXNlKGNsZWFyQXR0cmlidXRlKV0gPSB2YWx1ZTtcbiAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChjb21wb25lbnQuX19pc0NvbXBpbGVkKSB7XG4gICAgICAgICAgQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgICAgICBjb21wb25lbnQuYXR0cnMub25DaGFuZ2VkICYmIGNvbXBvbmVudC5hdHRycy5vbkNoYW5nZWQudHJpZ2dlcih7IGtleTogY2xlYXJBdHRyaWJ1dGUsIHZhbHVlOiB2YWx1ZX0pO1xuICAgICAgICAgICAgY29tcG9uZW50LmNoYW5nZWQoY2xlYXJBdHRyaWJ1dGUsIHZhbHVlKTtcblxuICAgICAgICAgICAgbGV0IGtleSA9IHV0aWxzLnRvQ2FtZWxDYXNlKGNsZWFyQXR0cmlidXRlKTtcbiAgICAgICAgICAgIGxldCBjYW1lbEtleSA9IGtleVswXS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpO1xuICAgICAgICAgICAgbGV0IGZuTmFtZSA9ICdjaGFuZ2VkJyArIGNhbWVsS2V5O1xuICAgICAgICAgICAgbGV0IGV2Rm5OYW1lID0gJ29uQ2hhbmdlZCcgKyBjYW1lbEtleTtcblxuICAgICAgICAgICAgY29tcG9uZW50LmF0dHJzW2V2Rm5OYW1lXSAmJiBjb21wb25lbnQuYXR0cnNbZXZGbk5hbWVdLnRyaWdnZXIodmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudFtmbk5hbWVdID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgY29tcG9uZW50W2ZuTmFtZV0odmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmKGlzQm9vbGVhbkF0dHJpYnV0ZSkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IG5vZGUuX19lbGVtZW50O1xuICAgICAgICBsZXQgYXR0ciA9IHV0aWxzLnRvQ2FtZWxDYXNlKGNsZWFyQXR0cmlidXRlKTtcblxuICAgICAgICB2YWx1ZT8gZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgJ3RydWUnKTogZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBOZXN0ZWQgZXZhbHVhdGlvbiBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtib29sZWFufSBbd2l0aG91dFBhcmVudHM9ZmFsc2VdIC0gaWYgdHJ1ZSBldmFsdWF0aW9uIHdpbGwgYmUgb25seSBmb3IgdGhlIGN1cnJlbnQga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlTmVzdGVkKGtleXMsIHdpdGhvdXRQYXJlbnRzID0gZmFsc2UpIHtcbiAgICBsZXQgc2NvcGUgPSB0aGlzLl9fc2NvcGU7XG4gICAgbGV0IHByb3BzID0gW107XG5cbiAgICBpZighd2l0aG91dFBhcmVudHMpIHtcbiAgICAgIGxldCBsYXN0UHJvcHMgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgbGV0IHZhbHVlO1xuXG4gICAgICAgIGxhc3RQcm9wcyA9IFsuLi5sYXN0UHJvcHMsIGtleV07XG4gICAgICAgIHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMobGFzdFByb3BzLCBzY29wZSk7XG4gICAgICAgIHByb3BzLnB1c2goeyBrZXlzOiBsYXN0UHJvcHMsIHZhbHVlOiB2YWx1ZX0pXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcHJvcHMucHVzaCh7IGtleXM6IGtleXMsIHZhbHVlOiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCBzY29wZSl9KVxuICAgIH1cblxuICAgIGxldCBwcm9wc0xlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICAgIGxldCBlbEV2YWx1YXRlID0gKGVsZW1lbnQpID0+IHtcbiAgICAgIGxldCBjb21wb25lbnQgPSBlbGVtZW50Ll9fYWtpbGk7XG5cbiAgICAgIGZvciAobGV0IG0gPSAwOyBtIDwgcHJvcHNMZW5ndGg7IG0rKykge1xuICAgICAgICBsZXQgcHJvcCA9IHByb3BzW21dO1xuICAgICAgICBsZXQgZGF0YSA9IGNvbXBvbmVudC5fX2dldEJpbmQocHJvcC5rZXlzKTtcblxuICAgICAgICBpZiAoIWRhdGEgfHwgIWRhdGEuX19kYXRhKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBrID0gMCwgYyA9IGRhdGEuX19kYXRhLmxlbmd0aDsgayA8IGM7IGsrKykge1xuICAgICAgICAgIGxldCBiaW5kID0gZGF0YS5fX2RhdGFba107XG5cbiAgICAgICAgICBpZihjb21wb25lbnQuX19jaGVja05vZGVQcm9wZXJ0eUNoYW5naW5nKGJpbmQubm9kZSwgcHJvcC5rZXlzLCBwcm9wLnZhbHVlKSkge1xuICAgICAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZVByb3h5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2V2YWx1YXRlTm9kZShiaW5kLm5vZGUpO1xuXG4gICAgICAgICAgICBmb3IobGV0IF9rIGluIGJpbmQubm9kZS5fX3Byb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgaWYoIWJpbmQubm9kZS5fX3Byb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoX2spKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBsZXQgX3Byb3AgPSBiaW5kLm5vZGUuX19wcm9wZXJ0aWVzW19rXTtcbiAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoX3Byb3Aua2V5cywgX3Byb3AuY29tcG9uZW50Ll9fc2NvcGUpO1xuXG4gICAgICAgICAgICAgIF9wcm9wLmNvbXBvbmVudC5fX3NldE5vZGVQcm9wZXJ0eShiaW5kLm5vZGUsIF9wcm9wLmtleXMsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZVByb3h5ID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9O1xuXG4gICAgbGV0IGV2YWx1YXRlID0gKGVsZW1lbnRzKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gZWxFdmFsdWF0ZShlbGVtZW50c1tpXSk7XG5cbiAgICAgICAgZXZhbHVhdGUoY29tcG9uZW50Ll9fY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBlbEV2YWx1YXRlKHRoaXMuZWwpO1xuICAgIGV2YWx1YXRlKHRoaXMuX19jaGlsZHJlbik7XG4gIH07XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIHZhbHVlIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVsZXRlZD1mYWxzZV0gLSB0cnVlIGlmIHZhbHVlIGlzIGRlbGV0aW5nXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVCeUtleXMoa2V5cywgdmFsdWUsIGlzRGVsZXRlZCA9IGZhbHNlKSB7XG4gICAgbGV0IGRhdGEgPSB0aGlzLl9fZ2V0QmluZChrZXlzKTtcblxuICAgIGxldCB1bmJpbmQgPSAob2JqLCBwYXJlbnRzKSA9PiB7XG4gICAgICBmb3IobGV0IGsgaW4gb2JqKSB7XG4gICAgICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkoaykgfHwgayA9PSAnX19kYXRhJykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IF9rZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrXSk7XG4gICAgICAgIGxldCBfX2tleXMgPSBfa2V5cy5zbGljZSgpO1xuICAgICAgICBsZXQgX2lzRGVsZXRlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgdmFsID0gb2JqW2tdO1xuICAgICAgICBsZXQgaGFzS2V5O1xuXG4gICAgICAgIF9fa2V5cy5zaGlmdCgpO1xuICAgICAgICBoYXNLZXkgPSB1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhfX2tleXMsIHZhbHVlKTtcblxuICAgICAgICBpZih2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgJiYgIWhhc0tleSkge1xuICAgICAgICAgIF9pc0RlbGV0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodmFsICYmIHR5cGVvZiB2YWwgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB1bmJpbmQodmFsLCBfa2V5cyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9fZXZhbHVhdGVOZXN0ZWQoX2tleXMsIHRydWUpO1xuXG4gICAgICAgIGlmKHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCAhaGFzS2V5KSB7XG4gICAgICAgICAgdGhpcy5fX3VuYmluZChfa2V5cyk7XG4gICAgICAgICAgX2lzRGVsZXRlZCAmJiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhfX2tleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBkYXRhICYmIHVuYmluZChkYXRhLCBbXS5jb25jYXQoa2V5cykpO1xuICAgIHRoaXMuX19ldmFsdWF0ZU5lc3RlZChrZXlzKTtcblxuICAgIGlmKGlzRGVsZXRlZCkge1xuICAgICAgdGhpcy5fX3VuYmluZChrZXlzKTtcbiAgICAgIGlzRGVsZXRlZCAmJiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSBldmVudCBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVFdmVudChub2RlLCBlbCwgZSkge1xuICAgIGxldCBleHByZXNzaW9uID0gZXZhbHVhdGlvblJlZ2V4LmV4ZWMobm9kZS5fX2V4cHJlc3Npb24pO1xuXG4gICAgaWYoIWV4cHJlc3Npb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAhd2luZG93LmV2ZW50ICYmICh3aW5kb3cuZXZlbnQgPSBlKTtcblxuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSB7XG4gICAgICBlbDogZWwsXG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICBldmVudDogZSxcbiAgICAgIG5vZGU6IG5vZGVcbiAgICB9O1xuXG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IG51bGw7XG4gICAgdGhpcy5jb25zdHJ1Y3Rvci5wYXJzZSh0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5zY29wZSwgZXhwcmVzc2lvblsxXSk7XG4gICAgdGhpcy5fX2V2YWx1YXRpbmdFdmVudCA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgY2hhbmdlcyBhbmQgZXZhbHVhdGUgdGhlIHBhc3NlZCBub2RlXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlTm9kZShub2RlKSB7XG4gICAgaWYodGhpcy5fX2NoZWNrRXZhbHVhdGlvbihub2RlKSkge1xuICAgICAgbm9kZVsobm9kZSBpbnN0YW5jZW9mIEF0dHIpPyAndmFsdWUnOiAnbm9kZVZhbHVlJ10gPSB0aGlzLl9fZXZhbHVhdGUobm9kZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEF0dHJpYnV0ZSBub2RlIGluaXRpYWxpemluZ1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtDb21wb25lbnR9IGF0dHJpYnV0ZU9mIC0gaWYgbm9kZSBpcyBsaW5rZWQgd2l0aCBwYXJlbnQgc2NvcGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbml0aWFsaXplQXR0cmlidXRlKG5vZGUsIGVsLCBhdHRyaWJ1dGVPZikge1xuICAgIGlmKHN5c3RlbUF0dHJpYnV0ZXMuaW5kZXhPZihub2RlLm5vZGVOYW1lKSAhPSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX19pbml0aWFsaXplTm9kZShub2RlLCBlbCk7XG5cbiAgICBsZXQgZXZlbnROYW1lID0gbm9kZS5ub2RlTmFtZS5yZXBsYWNlKC9eb24tKC4rKS9pLCAnJDEnKTtcbiAgICBsZXQgbm9kZU5hbWUgPSB1dGlscy50b0NhbWVsQ2FzZShub2RlLm5vZGVOYW1lKTtcbiAgICBsZXQgY29tcG9uZW50ID0gYXR0cmlidXRlT2Y/IGF0dHJpYnV0ZU9mOiB0aGlzO1xuXG4gICAgaWYoZXZlbnROYW1lICE9IG5vZGUubm9kZU5hbWUpIHtcbiAgICAgIGlmKG5vZGUuX19ldmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBlbWl0dGVyID0gbmV3IEFraWxpLkV2ZW50RW1pdHRlcihldmVudE5hbWUsIGVsLCBjb21wb25lbnQpO1xuXG4gICAgICBpZihub2RlLl9fZXhwcmVzc2lvbikge1xuICAgICAgICBlbWl0dGVyLmJpbmQoKGUpID0+IHtcbiAgICAgICAgICBjb21wb25lbnQuX19ldmFsdWF0ZUV2ZW50KG5vZGUsIGVsLCBlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIG5vZGUuX19ldmVudCA9IGVtaXR0ZXI7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKGVtaXR0ZXIpKTtcblxuICAgICAgaWYoYXR0cmlidXRlT2YpIHtcbiAgICAgICAgdGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLmF0dHJzW25vZGVOYW1lXSA9IGVtaXR0ZXI7XG4gICAgICAgIHRoaXMuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZihhdHRyaWJ1dGVPZikge1xuICAgICAgbm9kZS5fX2F0dHJpYnV0ZU9uID0gdGhpcztcbiAgICAgIG5vZGUuX19hdHRyaWJ1dGVPZiA9IGNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBlbC5zZXRBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSwgY29tcG9uZW50Ll9fZXZhbHVhdGUobm9kZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIG5vZGVcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemVOb2RlKG5vZGUsIGVsKSB7XG4gICAgaWYobm9kZS5fX2luaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbm9kZS5fX2V4cHJlc3Npb24gPSBub2RlWyhub2RlIGluc3RhbmNlb2YgQXR0cik/ICd2YWx1ZSc6ICdub2RlVmFsdWUnXTtcbiAgICBub2RlLl9fcHJvcGVydGllcyA9IHt9O1xuICAgIG5vZGUuX19hdHRyaWJ1dGVPZiA9IG51bGw7XG4gICAgbm9kZS5fX2F0dHJpYnV0ZU9uID0gbnVsbDtcbiAgICBub2RlLl9fZXZlbnQgPSBudWxsO1xuICAgIG5vZGUuX19oYXNCaW5kaW5ncyA9IGZhbHNlO1xuICAgIG5vZGUuX19pbml0aWFsaXplZCA9IHRydWU7XG4gICAgbm9kZS5fX2NvbXBvbmVudCA9IHRoaXM7XG4gICAgbm9kZS5fX2VsZW1lbnQgPSBlbDtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEludGVycG9sYXRlIGF0dHJpYnV0ZXMgb2YgdGhlIGVsZW1lbnRcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtDb21wb25lbnR9IFthdHRyaWJ1dGVPZj1udWxsXSAtIGlmIG5vZGUgaXMgbGlua2VkIHdpdGggcGFyZW50IHNjb3BlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKGVsLCBhdHRyaWJ1dGVPZiA9IG51bGwpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgYXR0cnMgPSBlbC5hdHRyaWJ1dGVzLCBsID0gYXR0cnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB0aGlzLl9faW5pdGlhbGl6ZUF0dHJpYnV0ZShhdHRyc1tpXSwgZWwsIGF0dHJpYnV0ZU9mKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lIGF0dHJpYnV0ZXMgYXMgcHJveHlcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZWZpbmVBdHRyaWJ1dGVzKCkge1xuICAgIGxldCBjaGFuZ2VBdHRyaWJ1dGUgPSAoa2V5LCB2YWx1ZSwgaXNEZWxldGVkID0gZmFsc2UpID0+IHtcbiAgICAgIGlmKHRoaXMuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IG5vZGUgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZU5vZGUoa2V5KTtcblxuICAgICAgaWYobm9kZSkge1xuICAgICAgICBpZihub2RlLl9fZXZlbnQpIHtcbiAgICAgICAgICBub2RlLl9fZXZlbnQudW5iaW5kKCk7XG4gICAgICAgICAgbm9kZS5fX2V2ZW50ID0gbnVsbDtcbiAgICAgICAgICBub2RlLl9fZXhwcmVzc2lvbiA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYobm9kZS5fX2hhc0JpbmRpbmdzKSB7XG4gICAgICAgICAgdGhpcy5fX3BhcmVudCAmJiB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19ldmFsdWF0aW9uQ29tcG9uZW50Ll9fdW5iaW5kQnlOb2Rlcyhbbm9kZV0pO1xuICAgICAgICAgIG5vZGUuX19oYXNCaW5kaW5ncyA9IGZhbHNlO1xuICAgICAgICAgIG5vZGUuX19leHByZXNzaW9uID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoaXNEZWxldGVkKSB7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKG5vZGUpIHtcbiAgICAgICAgbm9kZS5ub2RlVmFsdWUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5hdHRycyA9IG5ldyBQcm94eSh0aGlzLl9fYXR0cnMsIHtcbiAgICAgIGdldDogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGlmKGtleSA9PSAnX19pc1Byb3h5Jykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgfSxcbiAgICAgIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgYXR0cktleSA9IHV0aWxzLnRvRGFzaENhc2Uoa2V5KTtcblxuICAgICAgICBpZih0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzLmluZGV4T2YoYXR0cktleSkgIT0gLTEpIHtcbiAgICAgICAgICBhdHRyS2V5ID0gYGJvb2xlYW4tJHthdHRyS2V5fWA7XG5cbiAgICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICBjaGFuZ2VBdHRyaWJ1dGUoYXR0cktleSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKHZhbHVlKSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgICAgZGVsZXRlUHJvcGVydHk6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IGF0dHJLZXkgPSB1dGlscy50b0Rhc2hDYXNlKGtleSk7XG5cbiAgICAgICAgY2hhbmdlQXR0cmlidXRlKGF0dHJLZXksIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZSh2YWx1ZSksIHRydWUpO1xuICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHByb3h5IHRvIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHBhcmVudHNcbiAgICogQHJldHVybnMge1Byb3h5fVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX29ic2VydmUob2JqLCBwYXJlbnRzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm94eShvYmosIHtcbiAgICAgIGdldDogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGlmIChrZXkgPT0gXCJfX2lzUHJveHlcIikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PSBcIl9fdGFyZ2V0XCIpIHtcbiAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PSBcIl9fY29tcG9uZW50XCIpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX2tleXNcIikge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5fX2Rpc2FibGVQcm94eSkge1xuICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodHlwZW9mIHRhcmdldFtrZXldID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBsZXQgcmVhbFRhcmdldCAgPSB1dGlscy5nZXRPd25Qcm9wZXJ0eVRhcmdldCh0YXJnZXQsIGtleSk7XG5cbiAgICAgICAgICBpZighdXRpbHMuaXNQbGFpbk9iamVjdChyZWFsVGFyZ2V0KSkge1xuICAgICAgICAgICAgcmVhbFRhcmdldFtrZXldID0gQWtpbGkuaXNvbGF0ZUZ1bmN0aW9uKHJlYWxUYXJnZXRba2V5XSwgcmVhbFRhcmdldC5fX2NvbXBvbmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFraWxpLl9fZXZhbHVhdGlvbikge1xuICAgICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrZXldKTtcbiAgICAgICAgICBsZXQgbm90QmluZGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYoIShrZXkgaW4gdGFyZ2V0KSkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYoIXV0aWxzLmdldEVudW1lcmFibGVQcm9wZXJ0eVRhcmdldCh0YXJnZXQsIGtleSkpIHtcbiAgICAgICAgICAgIG5vdEJpbmRpbmcgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX19iaW5kTm9kZShBa2lsaS5fX2V2YWx1YXRpb24ubGlzdCwga2V5cywgcGFyZW50cywgdGFyZ2V0W2tleV0sIG5vdEJpbmRpbmcpO1xuXG4gICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgfSxcbiAgICAgIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZih0aGlzLl9fZGlzYWJsZVByb3h5KSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5fX2lzU3lzdGVtS2V5KGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG5cbiAgICAgICAgaWYodGhpcy5fX25lc3RlZFdhdGNoaW5nKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB0aGlzLl9fbmVzdGVkT2JzZXJ2ZSh2YWx1ZSwga2V5cyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKEFraWxpLl9faXNvbGF0aW9uKSB7XG4gICAgICAgICAgdGhpcy5fX2NyZWF0ZUlzb2xhdGlvbk9iamVjdChwYXJlbnRzLCBrZXksIGZhbHNlKTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5fX2lzTW91bnRlZCkge1xuICAgICAgICAgIHRoaXMuX19ldmFsdWF0ZUJ5S2V5cyhrZXlzLCB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBkZWxldGVQcm9wZXJ0eTogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrZXldKTtcblxuICAgICAgICBpZih0aGlzLl9fZGlzYWJsZVByb3h5KSB7XG4gICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLl9faXNTeXN0ZW1LZXkoa2V5KSkge1xuICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoQWtpbGkuX19pc29sYXRpb24pIHtcbiAgICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgICAgICAgdGhpcy5fX2NyZWF0ZUlzb2xhdGlvbk9iamVjdChwYXJlbnRzLCBrZXksIHRydWUpO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgICAgIHRoaXMuX19ldmFsdWF0ZUJ5S2V5cyhrZXlzLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVjayBrZXkgaXMgc3lzdGVtXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBfX2lzU3lzdGVtS2V5ID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYoa2V5ID09ICdfXycgfHwgKGtleVswXSA9PSAnXycgJiYga2V5WzFdID09ICdfJykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmKFsnY29uc3RydWN0b3InXS5pbmRleE9mKGtleSkgIT0gLTEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogTmVzdGVkIG9ic2VydmluZyB0aGUgdmFsdWVcbiAgICpcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBbc3RhcnRLZXlzXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX25lc3RlZE9ic2VydmUgKHZhbHVlLCBzdGFydEtleXMpIHtcbiAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0gdHJ1ZTtcblxuICAgIGxldCBvYnNlcnZlID0gKHZhbHVlLCBwYXJlbnRzKSA9PiB7XG4gICAgICBpZih0eXBlb2YgdmFsdWUgIT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZighdXRpbHMuaXNQbGFpbk9iamVjdCh2YWx1ZSkgJiYgIXV0aWxzLmlzU2NvcGVQcm94eSh2YWx1ZSkgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIEFraWxpLlNjb3BlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGxldCB0YXJnZXQgPSB2YWx1ZTtcblxuICAgICAgaWYodmFsdWUuX19pc1Byb3h5KSB7XG4gICAgICAgIHRhcmdldCA9IHZhbHVlLl9fdGFyZ2V0O1xuXG4gICAgICAgIGlmKCF0aGlzLl9fZGlzYWJsZVByb3h5UmVkZWZpbmluZykge1xuICAgICAgICAgIGlmKHZhbHVlLl9fY29tcG9uZW50ICE9PSB0aGlzKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSB1dGlscy5jb3B5KHRhcmdldCwgZmFsc2UpO1xuICAgICAgICAgICAgdmFsdWUgPSB0YXJnZXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYoQWtpbGkuam9pbkJpbmRpbmdLZXlzKHBhcmVudHMpICE9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyh2YWx1ZS5fX2tleXMpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRhcmdldDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yKGxldCBrIGluIHRhcmdldCkge1xuICAgICAgICBpZiAoIXRhcmdldC5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHZhbCA9IHRhcmdldFtrXTtcbiAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tdKTtcblxuICAgICAgICB0YXJnZXRba10gPSBvYnNlcnZlKHZhbCwga2V5cyk7XG4gICAgICB9XG5cbiAgICAgIGlmKCF2YWx1ZS5fX2lzUHJveHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19vYnNlcnZlKHRhcmdldCwgcGFyZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuXG4gICAgbGV0IHJlcyA9IG9ic2VydmUodmFsdWUsIHN0YXJ0S2V5cyB8fCBbXSk7XG5cbiAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0gbnVsbDtcblxuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBpc29sYXRpb24gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHBhcmVudHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlbGV0ZWQ9ZmFsc2VdXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZUlzb2xhdGlvbk9iamVjdCAocGFyZW50cywga2V5LCBpc0RlbGV0ZWQgPSBmYWxzZSkge1xuICAgIGxldCBrZXlzID0gcGFyZW50cy5sZW5ndGg/IFtwYXJlbnRzWzBdXTogW2tleV07XG4gICAgbGV0IGlzb2xhdGlvbktleSA9IGAke3RoaXMuX19zY29wZS5fX25hbWV9LiR7QWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpfWA7XG5cbiAgICBpZihwYXJlbnRzLmxlbmd0aCkge1xuICAgICAgaXNEZWxldGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYoIUFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV0pIHtcbiAgICAgIEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV0gPSB7XG4gICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAga2V5czoga2V5c1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAoaXNEZWxldGVkICE9PSB1bmRlZmluZWQpICYmIChBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25LZXldLmlzRGVsZXRlZCA9IGlzRGVsZXRlZCk7XG4gICAgQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uS2V5XS52YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19zY29wZSk7XG5cbiAgICByZXR1cm4gQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uS2V5XTtcbiAgfTtcblxuICAvKipcbiAgICogUHJlcGFyZSB0aGUgbm9kZSB0byBiaW5kaW5nXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBiaW5kIC0gYnkgZGVmYXVsdCBpcyBjb21wb25lbnQuX19ldmFsdWF0aW9uLmxpc3RcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbbm90QmluZGluZz1mYWxzZV1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19iaW5kTm9kZShiaW5kLCBrZXlzLCBwYXJlbnRzLCB2YWx1ZSwgbm90QmluZGluZyA9IGZhbHNlKSB7XG4gICAgbGV0IHBhcmVudEtleXNTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMocGFyZW50cyk7XG5cbiAgICBpZihiaW5kLmxlbmd0aCAmJiAhbm90QmluZGluZykge1xuICAgICAgbGV0IGwgPSBiaW5kLmxlbmd0aCAtIDE7XG4gICAgICBsZXQgZGF0YSA9IGJpbmRbbF07XG5cbiAgICAgIGlmKGRhdGEua2V5c1N0cmluZyA9PSBwYXJlbnRLZXlzU3RyaW5nICYmIGRhdGEuY29tcG9uZW50ID09PSB0aGlzKSB7XG4gICAgICAgIGJpbmQuc3BsaWNlKGwsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGJpbmQucHVzaCh7XG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICBrZXlzU3RyaW5nOiBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyksXG4gICAgICBwYXJlbnRzOiBwYXJlbnRzLFxuICAgICAga2V5czoga2V5cyxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIG5vdEJpbmRpbmc6IG5vdEJpbmRpbmdcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGJpbmRpbmcgYnkga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRCaW5kKGtleXMpIHtcbiAgICByZXR1cm4gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzKSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBiaW5kaW5nIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldEJvdW5kTm9kZShrZXlzLCBub2RlKSB7XG4gICAgbGV0IGJpbmQgPSAgdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzKTtcblxuICAgIGlmKCFiaW5kIHx8ICFiaW5kLl9fZGF0YSB8fCAhYmluZC5fX2RhdGEubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gYmluZC5fX2RhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgZGF0YSA9IGJpbmQuX19kYXRhW2ldO1xuXG4gICAgICBpZihkYXRhLm5vZGUgPT09IG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogU2V0IG5vZGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXROb2RlUHJvcGVydHkobm9kZSwga2V5cywgdmFsdWUpIHtcbiAgICBsZXQgcHJvcCA9IHRoaXMuX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cyk7XG4gICAgbGV0IGNvcHkgPSB1dGlscy5jb3B5KHZhbHVlKTtcblxuICAgIGlmKHByb3ApIHtcbiAgICAgIGxldCByZXMgPSB1dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSh2YWx1ZSwgcHJvcC52YWx1ZSwgcHJvcC5jb3B5LCBjb3B5KTtcblxuICAgICAgcHJvcC52YWx1ZSA9IHZhbHVlO1xuICAgICAgcHJvcC5jb3B5ID0gY29weTtcblxuICAgICAgcmV0dXJuICFyZXM7XG4gICAgfVxuXG4gICAgbGV0IGhhc2ggPSBgJHt0aGlzLl9fc2NvcGUuX19uYW1lfS4ke0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKX1gO1xuXG4gICAgbm9kZS5fX3Byb3BlcnRpZXNbaGFzaF0gPSB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBjb3B5OiBjb3B5LFxuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAga2V5czoga2V5c1xuICAgIH07XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbm9kZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMpIHtcbiAgICBsZXQgaGFzaCA9IGAke3RoaXMuX19zY29wZS5fX25hbWV9LiR7QWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpfWA7XG5cbiAgICByZXR1cm4gbm9kZS5fX3Byb3BlcnRpZXNbaGFzaF0gfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgbm9kZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RlbGV0ZU5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKSB7XG4gICAgbGV0IGhhc2ggPSBgJHt0aGlzLl9fc2NvcGUuX19uYW1lfS4ke0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKX1gO1xuXG4gICAgZGVsZXRlIG5vZGUuX19wcm9wZXJ0aWVzW2hhc2hdO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgZGF0YSB3aXRoIHRoZSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19iaW5kKGtleXMsIGRhdGEpIHtcbiAgICB1dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MsIChsYXN0LCB2YWx1ZSkgPT4ge1xuICAgICAgbGV0IG9iaiA9IHtfX2RhdGE6IFtdfTtcblxuICAgICAgaWYoIWxhc3QpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlPyB2YWx1ZTogb2JqO1xuICAgICAgfVxuXG4gICAgICBpZih0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgb2JqID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmKCFvYmouX19kYXRhKSB7XG4gICAgICAgIG9iai5fX2RhdGEgPSBbXTtcbiAgICAgIH1cblxuICAgICAgb2JqLl9fZGF0YS5wdXNoKGRhdGEpO1xuXG4gICAgICByZXR1cm4gb2JqO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmJpbmQoa2V5cykge1xuICAgIGxldCBiaW5kID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzKTtcblxuICAgIGlmKCFiaW5kIHx8ICFiaW5kLl9fZGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBiaW5kLl9fZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBub2RlID0gYmluZC5fX2RhdGFbaV0ubm9kZTtcblxuICAgICAgdGhpcy5fX2RlbGV0ZU5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKTtcbiAgICB9XG5cbiAgICB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MsICh2YWx1ZSkgPT4ge1xuICAgICAgaWYoT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdmFsdWUuX19kYXRhID0gW107XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgYnkgbm9kZXNcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlW119IG5vZGVzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5iaW5kQnlOb2Rlcyhub2Rlcykge1xuICAgIGxldCB1bmJpbmQgPSAob2JqKSA9PiB7XG4gICAgICBmb3IobGV0IGsgaW4gb2JqKSB7XG4gICAgICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGsgPT0gJ19fZGF0YScpIHtcbiAgICAgICAgICBsZXQgZGF0YSA9IG9ialtrXSB8fCBbXTtcbiAgICAgICAgICBsZXQgbCA9IGRhdGEubGVuZ3RoO1xuXG4gICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJpbmQgPSBkYXRhW2ldO1xuXG4gICAgICAgICAgICBpZihub2Rlcy5pbmRleE9mKGJpbmQubm9kZSkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgZGF0YS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgbC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmKCFsKSB7XG4gICAgICAgICAgICBkZWxldGUgb2JqW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB1bmJpbmQob2JqW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB1bmJpbmQodGhpcy5fX2JpbmRpbmdzKTtcbiAgICB0aGlzLl9fY2xlYXJFbXB0eUJpbmRpbmdzKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWxsIGVtcHR5IGJpbmRpbmdzXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb2JqXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NsZWFyRW1wdHlCaW5kaW5ncyhvYmopIHtcbiAgICBsZXQgY2xlYXIgPSAob2JqLCBwYXJlbnQsIGtleSkgPT4ge1xuICAgICAgZm9yKGxldCBrIGluIG9iaikge1xuICAgICAgICBpZighb2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmFsID0gb2JqW2tdO1xuXG4gICAgICAgIGlmKGsgPT0gJ19fZGF0YScgJiYgKCF2YWwgfHwgIXZhbC5sZW5ndGgpKSB7XG4gICAgICAgICAgZGVsZXRlIG9ialtrXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGsgIT0gJ19fZGF0YScpIHtcbiAgICAgICAgICBpZighT2JqZWN0LmtleXMob2JqW2tdKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmpba107XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xlYXIob2JqW2tdLCBvYmosIGspO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZighT2JqZWN0LmtleXMob2JqKS5sZW5ndGggJiYgcGFyZW50KSB7XG4gICAgICAgIGRlbGV0ZSBwYXJlbnRba2V5XTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY2xlYXIob2JqIHx8IHRoaXMuX19iaW5kaW5ncylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIGNoaWxkIGNvbXBvbmVudHNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZW1vdmVDaGlsZHJlbigpIHtcbiAgICBsZXQgcmVtb3ZlID0gKGNoaWxkcmVuKSA9PiB7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgcmVtb3ZlKGNoaWxkLl9fYWtpbGkuX19jaGlsZHJlbik7XG4gICAgICAgIGNoaWxkLl9fYWtpbGkuX19yZW1vdmUoKTtcbiAgICAgICAgaS0tO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZW1vdmUodGhpcy5fX2NoaWxkcmVuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGNvbXBvbmVudCB3aXRob3V0IGNoaWxkcmVuIHJlbW92aW5nXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcmVtb3ZlKCkge1xuICAgIHRoaXMuX19kZXRhY2goKTtcbiAgICB0aGlzLmF0dHJzLm9uUmVtb3ZlZCAmJiB0aGlzLmF0dHJzLm9uUmVtb3ZlZC50cmlnZ2VyKCk7XG4gICAgdGhpcy5yZW1vdmVkKCk7XG4gICAgQWtpbGkucmVtb3ZlU2NvcGUodGhpcy5fX3Njb3BlLl9fbmFtZSk7XG4gICAgdGhpcy5lbC5yZW1vdmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRhY2ggdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RldGFjaCgpIHtcbiAgICBpZih0aGlzLl9fZXZhbHVhdGVQYXJlbnQgJiYgIXRoaXMuX19jb250cm9sQXR0cmlidXRlcykge1xuICAgICAgdGhpcy5fX2V2YWx1YXRlUGFyZW50Ll9fYWtpbGkuX191bmJpbmRCeU5vZGVzKFtdLnNsaWNlLmNhbGwodGhpcy5lbC5hdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgaWYodGhpcy5fX3BhcmVudCkge1xuICAgICAgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fc3BsaWNlQ2hpbGQodGhpcy5lbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgY29tcG9uZW50IHdpdGggY2hpbGRyZW5cbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZXN0cm95KCkge1xuICAgIHRoaXMuX19yZW1vdmVDaGlsZHJlbigpO1xuICAgIHRoaXMuX19yZW1vdmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciB0aGUgY29tcG9uZW50IGh0bWxcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19lbXB0eSgpIHtcbiAgICBsZXQgbm9kZXMgPSBbXTtcblxuICAgIHRoaXMuX19yZW1vdmVDaGlsZHJlbigpO1xuXG4gICAgbGV0IGZpbmQgPSAoY2hpbGRyZW4pID0+IHtcbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYoY2hpbGQubm9kZVR5cGUgPT0gMykge1xuICAgICAgICAgIG5vZGVzLnB1c2goY2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoY2hpbGQubm9kZVR5cGUgPT0gMSAmJiAhY2hpbGQuX19ha2lsaSkge1xuICAgICAgICAgIGZvciAobGV0IGsgPSAwLCBhdHRycyA9IGNoaWxkLmF0dHJpYnV0ZXMsIGMgPSBhdHRycy5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgICAgICAgIG5vZGVzLnB1c2goYXR0cnNbaV0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZpbmQoY2hpbGQuY2hpbGROb2Rlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmluZCh0aGlzLmVsLmNoaWxkTm9kZXMpO1xuICAgIHRoaXMuX191bmJpbmRCeU5vZGVzKG5vZGVzKTtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBwYXJlbnQgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kQWxsPXRydWVdIC0gZ2V0IGFycmF5IGlmIHRydWVcbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHNdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0UGFyZW50KHNlbGVjdG9yID0gJycsIGZpbmRBbGwgPSBmYWxzZSwgbGV2ZWxzKSB7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGxldCBsZXZlbCA9IDA7XG5cbiAgICBpZihsZXZlbHMgIT09IHVuZGVmaW5lZCAmJiAhQXJyYXkuaXNBcnJheShsZXZlbHMpKSB7XG4gICAgICBsZXZlbHMgPSBbbGV2ZWxzXTtcbiAgICB9XG5cbiAgICBsZXQgZmluZCA9IChwYXJlbnQpID0+IHtcbiAgICAgIGlmKCFwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZighbGV2ZWxzIHx8IGxldmVscy5pbmRleE9mKGxldmVsKSAhPSAtMSkge1xuICAgICAgICBpZiAoIXNlbGVjdG9yIHx8IHBhcmVudC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgaWYgKCFmaW5kQWxsKSB7XG4gICAgICAgICAgICBhcnIucHVzaChwYXJlbnQuX19ha2lsaSk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhcnIucHVzaChwYXJlbnQuX19ha2lsaSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV2ZWwrKztcbiAgICAgIGZpbmQocGFyZW50Ll9fYWtpbGkuX19wYXJlbnQpO1xuICAgIH07XG5cbiAgICBmaW5kKHRoaXMuX19wYXJlbnQpO1xuXG4gICAgcmV0dXJuIGZpbmRBbGw/IGFycjogKGFyclswXSB8fCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2hpbGQgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kQWxsPXRydWVdIC0gZ2V0IGFycmF5IGlmIHRydWVcbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHNdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0Q2hpbGRyZW4oc2VsZWN0b3IgPSAnJywgZmluZEFsbCA9IHRydWUsIGxldmVscykge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBsZXQgbGV2ZWwgPSAwO1xuXG4gICAgaWYobGV2ZWxzICE9PSB1bmRlZmluZWQgJiYgIUFycmF5LmlzQXJyYXkobGV2ZWxzKSkge1xuICAgICAgbGV2ZWxzID0gW2xldmVsc107XG4gICAgfVxuXG4gICAgbGV0IGZpbmQgPSAoY2hpbGRyZW4pID0+IHtcbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYoIWxldmVscyB8fCBsZXZlbHMuaW5kZXhPZihsZXZlbCkgIT0gLTEpIHtcbiAgICAgICAgICBpZighc2VsZWN0b3IgfHwgY2hpbGQuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgaWYoIWZpbmRBbGwpIHtcbiAgICAgICAgICAgICAgYXJyLnB1c2goY2hpbGQuX19ha2lsaSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhcnIucHVzaChjaGlsZC5fX2FraWxpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV2ZWwrKztcblxuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBmaW5kKGNoaWxkcmVuW2ldLl9fYWtpbGkuX19jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZpbmQodGhpcy5fX2NoaWxkcmVuKTtcblxuICAgIHJldHVybiBmaW5kQWxsPyBhcnI6IChhcnJbMF0gfHwgbnVsbClcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbmVhcmVzdCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZpbmRBbGw9dHJ1ZV0gLSBnZXQgYXJyYXkgaWYgdHJ1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyaWdodD1mYWxzZV0gLSBmcm9tIHRoZSByaWdodCBzaWRlIGlmIHRydWVcbiAgICogQHJldHVybnMge0NvbXBvbmVudHxDb21wb25lbnRbXX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXROZWFyKHNlbGVjdG9yID0gJycsIGZpbmRBbGwgPSB0cnVlLCByaWdodCA9IGZhbHNlKSB7XG4gICAgaWYoIXRoaXMuX19wYXJlbnQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCBsZXZlbEVsZW1lbnRzID0gdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fY2hpbGRyZW4uc2xpY2UoKTtcbiAgICBsZXQgYXJyID0gW107XG5cbiAgICByaWdodCAmJiBsZXZlbEVsZW1lbnRzLnJldmVyc2UoKTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBsZXZlbEVsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGVsID0gbGV2ZWxFbGVtZW50c1tpXTtcblxuICAgICAgaWYoZWwgPT09IHRoaXMuZWwpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmKCFzZWxlY3RvciB8fCBlbC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGFyci5wdXNoKGVsLl9fYWtpbGkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgYXJyLnJldmVyc2UoKTtcblxuICAgIGlmKCFmaW5kQWxsKSB7XG4gICAgICByZXR1cm4gYXJyLmxlbmd0aD8gYXJyWzBdOiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGNvbXBvbmVudCBtYXRjaGVzIHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBzZWxlY3RvclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIG1hdGNoZXMoc2VsZWN0b3IpIHtcbiAgICBpZih0eXBlb2Ygc2VsZWN0b3IgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHNlbGVjdG9yKHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmVsLm1hdGNoZXMoc2VsZWN0b3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IHBhcmVudCBjb21wb25lbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHNdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR9XG4gICAqL1xuICBwYXJlbnQoc2VsZWN0b3IgPSAnJywgbGV2ZWxzKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRQYXJlbnQoc2VsZWN0b3IsIGZhbHNlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBwYXJlbnQgY29tcG9uZW50cyBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVsc11cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgcGFyZW50cyhzZWxlY3RvciA9ICcnLCBsZXZlbHMpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldFBhcmVudChzZWxlY3RvciwgdHJ1ZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBjaGlsZCBjb21wb25lbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHNdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR9XG4gICAqL1xuICBjaGlsZChzZWxlY3RvciA9ICcnLCBsZXZlbHMpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldENoaWxkcmVuKHNlbGVjdG9yLCBmYWxzZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY2hpbGQgY29tcG9uZW50cyBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVsc11cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgY2hpbGRyZW4oc2VsZWN0b3IgPSAnJywgbGV2ZWxzKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRDaGlsZHJlbihzZWxlY3RvciwgdHJ1ZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY29tcG9uZW50cyBsZWZ0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgYmVmb3JlKHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIHRydWUsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY29tcG9uZW50cyByaWdodCBmcm9tIHRoZSBjdXJyZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGFmdGVyKHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIHRydWUsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IGNvbXBvbmVudCBsZWZ0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIHByZXYoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgZmFsc2UsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBjb21wb25lbnQgcmlnaHQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgbmV4dChzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCBmYWxzZSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGVsZW1lbnQgcGFyZW50XG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudFxuICAgKi9cbiAgYXBwZW5kVG8ocGFyZW50KSB7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWwpO1xuXG4gICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FuY2VsIGNvbXBvbmVudCBjb21waWxhdGlvblxuICAgKi9cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGVsZW1lbnQgaHRtbFxuICAgKlxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIGVtcHR5KCkge1xuICAgIHJldHVybiB0aGlzLl9fZW1wdHkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgZWxlbWVudFxuICAgKlxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIHJlbW92ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2Rlc3Ryb3kuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7fVxuICBjb21waWxlZCgpIHt9XG4gIHJlY29tcGlsZWQoKSB7fVxuICBjaGFuZ2VkKGtleSwgdmFsdWUpIHt9XG4gIHJlc29sdmVkKCkge31cbiAgcmVtb3ZlZCgpIHt9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnQuanMiLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlcidcblxuY29uc3QgdXRpbHMgPSB7fTtcblxuLyoqXG4gKiBDcmVhdGUgY2xhc3MgYXR0cmlidXRlIGZyb20gYW4gb2JqZWN0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJyZWQgYWN0aXZlXCJcbiAqIHV0aWxzLmNsYXNzKHtyZWQ6IHRydWUsIGFjdGl2ZTogdHJ1ZSwgZ3JlZW46IGZhbHNlfSk7XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuY2xhc3MgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGlmKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBsZXQgY2xhc3NlcyA9IFtdO1xuXG4gIGZvcihsZXQgayBpbiBvYmopIHtcbiAgICBpZighb2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBsZXQgdmFsID0gb2JqW2tdO1xuXG4gICAgdmFsICYmIGNsYXNzZXMucHVzaChrKTtcbiAgfVxuXG4gIHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIHN0eWxlIGF0dHJpYnV0ZSBmcm9tIGFuIG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwiY29sb3I6cmVkO3dpZHRoOjEwcHhcIlxuICogdXRpbHMuc3R5bGUoe2NvbG9yOiBcInJlZFwiLCBiYWNrZ3JvdW5kOiBmYWxzZSwgd2lkdGg6IFwiMTBweFwifSk7XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuc3R5bGUgPSBmdW5jdGlvbihvYmopIHtcbiAgaWYoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGxldCBzdHlsZXMgPSBbXTtcblxuICBmb3IobGV0IGsgaW4gb2JqKSB7XG4gICAgaWYoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgbGV0IHZhbCA9IG9ialtrXTtcblxuICAgIHZhbCAmJiBzdHlsZXMucHVzaChgJHt0aGlzLnRvRGFzaENhc2Uoayl9OiR7dmFsfWApO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlcy5qb2luKCc7Jyk7XG59O1xuXG4vKipcbiAqIEZpbHRlciBhbiBhcnJheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsxLCAxMV1cbiAqIHV0aWxzLmZpbHRlcihbMSwgMiwgMywgMTFdLCAnMScpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoxfSwge3g6MTF9XVxuICogdXRpbHMuZmlsdGVyKFt7eDoxfSwge3g6Mn0sIHt4OjN9LCB7eDoxMX1dLCAnMScsIFsneCddKTtcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cHxmdW5jdGlvbn0gaGFuZGxlciAtIHR5cGUgb2YgZmlsdGVyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ1tdfHN0cmluZ30gW2tleXNdIC0gZmlsdGVyIGluIHRoZSBrZXlzIGlmIGFycmF5IGVsZW1lbnRzIGFyZSBvYmplY3RcbiAqIEByZXR1cm5zIHtBcnJheX0gLSByZXR1cm5zIG90aGVyIGFycmF5XG4gKi9cbnV0aWxzLmZpbHRlciA9IGZ1bmN0aW9uIChhcnIsIGhhbmRsZXIsIGtleXMgPSBbXSkge1xuICBsZXQgcmVzID0gW107XG5cbiAgaWYoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICBrZXlzID0gW2tleXNdO1xuICB9XG5cbiAgaWYoIWhhbmRsZXIpIHtcbiAgICByZXR1cm4gWy4uLmFycl07XG4gIH1cblxuICBmb3IobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBpdGVtID0gYXJyW2ldO1xuICAgIGxldCB2YWwgPSBrZXlzLmxlbmd0aD8gdGhpcy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCBpdGVtKTogaXRlbTtcblxuICAgIGlmKCF2YWwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhbCArPSAnJztcblxuICAgIGlmKCh0eXBlb2YgaGFuZGxlciA9PSAnZnVuY3Rpb24nKSAmJiBoYW5kbGVyKGl0ZW0pKSB7XG4gICAgICByZXMucHVzaChpdGVtKTtcbiAgICB9XG4gICAgZWxzZSBpZih2YWwubWF0Y2goaGFuZGxlciB8fCAnJykpIHtcbiAgICAgIHJlcy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIE9yZGVyIGFuIGFycmF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWzEsIDIsIDNdXG4gKiB1dGlscy5zb3J0KFszLCAyLCAxXSwgdHJ1ZSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWzMsIDIsIDFdXG4gKiB1dGlscy5zb3J0KFsxLCAyLCAzXSwgZmFsc2UpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XVxuICogdXRpbHMuc29ydChbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV0sIFtbJ3gnXV0sIFt0cnVlXSk7XG4gKiB1dGlscy5zb3J0KFt7eDogM30sIHt4OiAyfSwge3g6IDF9XSwgWyd4J10sIHRydWUpO1xuICogdXRpbHMuc29ydChbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV0sICd4Jyk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dXG4gKiB1dGlscy5zb3J0KFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XSwgW1sneCddXSwgW2ZhbHNlXSk7XG4gKiB1dGlscy5zb3J0KFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XSwgWyd4J10sIGZhbHNlKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dLCAneCcsIGZhbHNlKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDEsIHk6IDN9LCB7eDogMiwgeTogMX0sIHt4OjIsIHk6IDJ9XVxuICogdXRpbHMuc29ydChbe3g6IDIsIHk6IDJ9LCB7eDogMiwgeTogMX0sIHt4OiAyLCB5OiAzfV0sIFtbJ3gnXSwgWyd5J11dLCBbdHJ1ZSwgdHJ1ZV0pO1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICogQHBhcmFtIHtib29sZWFufEFycmF5W118c3RyaW5nW118c3RyaW5nfSBba2V5c11cbiAqIEBwYXJhbSB7Ym9vbGVhbnxib29sZWFuW119IFtvcmRlcl0gLSByZXZlcnNlIG9yIG5vdFxuICogQHJldHVybnMge0FycmF5fVxuICovXG51dGlscy5zb3J0ID0gZnVuY3Rpb24oYXJyLCBrZXlzID0gdHJ1ZSwgb3JkZXIgPSBbXSkge1xuICBhcnIgPSBbLi4uYXJyXTtcblxuICBpZihrZXlzID09PSB0cnVlKSB7XG4gICAga2V5cyA9IFtdO1xuICAgIG9yZGVyID0gW3RydWVdO1xuICB9XG4gIGVsc2UgaWYoa2V5cyA9PT0gZmFsc2UpIHtcbiAgICBrZXlzID0gW107XG4gICAgb3JkZXIgPSBbZmFsc2VdO1xuICB9XG5cbiAgaWYoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICBrZXlzID0gW2tleXNdO1xuICB9XG5cbiAgaWYoIUFycmF5LmlzQXJyYXkob3JkZXIpKSB7XG4gICAgb3JkZXIgPSBbb3JkZXJdO1xuICB9XG5cbiAgbGV0IGwgPSBrZXlzLmxlbmd0aDtcblxuICBhcnIuc29ydCgoYSwgYikgPT4ge1xuICAgIGxldCBpID0gMDtcblxuICAgIGxldCBjaGVjayA9IChhLCBiLCByZXZlcnNlID0gZmFsc2UpID0+IHtcbiAgICAgIGlmKGEgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIGEgPSBhLmdldFRpbWUoKTtcbiAgICAgIH1cblxuICAgICAgaWYoYiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgYiA9IGIuZ2V0VGltZSgpO1xuICAgICAgfVxuXG4gICAgICBpZihhID4gYikge1xuICAgICAgICByZXR1cm4gcmV2ZXJzZT8gLTE6IDE7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKGEgPCBiKSB7XG4gICAgICAgIHJldHVybiByZXZlcnNlPyAxOiAtMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDA7XG4gICAgfTtcblxuICAgIGxldCBuZXh0ID0gKCkgPT4ge1xuICAgICAgaWYoaSA+PSBsKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuXG4gICAgICBsZXQga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYoIUFycmF5LmlzQXJyYXkoa2V5KSkge1xuICAgICAgICBrZXkgPSBba2V5XTtcbiAgICAgIH1cblxuICAgICAgbGV0IGFWID0gdGhpcy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXksIGEpO1xuICAgICAgbGV0IGJWID0gdGhpcy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXksIGIpO1xuICAgICAgbGV0IHJlcyA9IGNoZWNrKGFWLCBiViwgb3JkZXJbaV0gPT09IGZhbHNlKTtcblxuICAgICAgaWYocmVzICE9PSAwKSB7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9XG5cbiAgICAgIGkrKztcblxuICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICB9O1xuXG4gICAgaWYoIWwpIHtcbiAgICAgIHJldHVybiBjaGVjayhhLCBiLCBvcmRlcltpXSA9PT0gZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0KCk7XG4gIH0pO1xuXG4gIHJldHVybiBhcnI7XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSB2YWx1ZSBpcyBjb21wb25lbnQgc2NvcGUgcHJveHkgb2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5pc1Njb3BlUHJveHkgPSBmdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuICEhKHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnICYmIHZhbC5fX2lzUHJveHkpO1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgdmFsdWUgaXMgcGxhaW4gb2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSBvYmpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5pc1BsYWluT2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XG4gIHJldHVybiAhIShvYmogJiYgdHlwZW9mIG9iaiA9PSAnb2JqZWN0JyAmJiAob2JqLmNvbnN0cnVjdG9yID09IE9iamVjdCB8fCBvYmouY29uc3RydWN0b3IgPT0gQXJyYXkpKTtcbn07XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVcbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtuZXN0ZWQ9dHJ1ZV0gLSBkZWVwIGNvcHkgaWYgaXMgdHJ1ZVxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmNvcHkgPSBmdW5jdGlvbih2YWx1ZSwgbmVzdGVkID0gdHJ1ZSkge1xuICBpZih0eXBlb2YgdmFsdWUgIT0gJ29iamVjdCcgfHwgIXZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gbmV4dChvYmopIHtcbiAgICBvYmogPSBBcnJheS5pc0FycmF5KG9iaik/IFsuLi5vYmpdOiB7Li4ub2JqfTtcblxuICAgIGlmKCFuZXN0ZWQpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgZm9yKGxldCBrIGluIG9iaikge1xuICAgICAgaWYoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYob2JqW2tdICYmIHR5cGVvZiBvYmpba10gPT0gJ29iamVjdCcpIHtcbiAgICAgICAgb2JqW2tdID0gbmV4dChvYmpba10pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICByZXR1cm4gbmV4dCh2YWx1ZSk7XG59O1xuXG4vKipcbiAqIENoYW5nZSB0aGUgdmFsdWUgdG8gYXR0cmlidXRlIGFwcHJvcHJpYXRlIGZvcm1hdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5tYWtlQXR0cmlidXRlVmFsdWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBpZih2YWx1ZSA9PT0gZmFsc2UgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmKHZhbHVlIGluc3RhbmNlb2YgRXZlbnRFbWl0dGVyKSB7XG4gICAgcmV0dXJuICdbb2JqZWN0IEV2ZW50XSc7XG4gIH1cblxuICBpZih0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiAnW29iamVjdCBGdW5jdGlvbl0nO1xuICB9XG5cbiAgaWYodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gdmFsdWUgKyAnJztcbn07XG5cbi8qKlxuICogQ29tcGFyZSB0d28gdmFsdWVzXG4gKlxuICogQHBhcmFtIHsqfSBhXG4gKiBAcGFyYW0geyp9IGJcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5jb21wYXJlID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgaWYoKGEgaW5zdGFuY2VvZiBEYXRlKSAmJiAoYiBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgcmV0dXJuIGEuZ2V0VGltZSgpID09PSBiLmdldFRpbWUoKTtcbiAgfVxuICBpZih0eXBlb2YgYSA9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBiID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYS50b1N0cmluZygpID09PSBiLnRvU3RyaW5nKCk7XG4gIH1cbiAgZWxzZSBpZih0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiA9PSAnb2JqZWN0Jykge1xuICAgIGlmKGEgPT09IG51bGwgfHwgYiA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGEgPT09IGI7XG4gICAgfVxuXG4gICAgaWYoT2JqZWN0LmtleXMoYSkubGVuZ3RoICE9IE9iamVjdC5rZXlzKGIpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvcihsZXQgayBpbiBhKSB7XG4gICAgICBpZighYS5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYoIXRoaXMuY29tcGFyZShhW2tdLCBiW2tdKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gYSA9PT0gYjtcbn07XG5cbi8qKlxuICogQ29tcGFyZSBjdXJyZW50IHZhbHVlIHdpdGggcHJldmlvdXNcbiAqXG4gKiBAcGFyYW0geyp9IGN1cnJlbnQgLSB0aGUgY3VycmVudCB2YWx1ZVxuICogQHBhcmFtIHsqfSBwcmV2aW91cyAtIHRoZSBjdXJyZW50IHZhbHVlIGNvcHlcbiAqIEBwYXJhbSB7Kn0gcHJldmlvdXNDb3B5IC0gdGhlIHByZXZpb3VzIHZhbHVlIGNvcHlcbiAqIEBwYXJhbSB7Kn0gW2N1cnJlbnRDb3B5XSAtIHRoZSBjdXJyZW50IHZhbHVlIGNvcHlcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSA9IGZ1bmN0aW9uKGN1cnJlbnQsIHByZXZpb3VzLCBwcmV2aW91c0NvcHksIGN1cnJlbnRDb3B5KSB7XG4gIGlmKGN1cnJlbnQgIT09IHByZXZpb3VzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuY29tcGFyZShhcmd1bWVudHMubGVuZ3RoID09IDM/IGN1cnJlbnRDb3B5OiB0aGlzLmNvcHkoY3VycmVudCksIHByZXZpb3VzQ29weSk7XG59O1xuXG4vKipcbiAqIEVuY29kZSBodG1sIGVudGl0aWVzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJ5b3UgJmFtcCBtZVwiXG4gKiB1dGlscy5lbmNvZGVIdG1sRW50aXRpZXMoJ3lvdSAmIG1lJyk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmVuY29kZUh0bWxFbnRpdGllcyA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHZhbHVlO1xuXG4gIGVsLnRleHRDb250ZW50ID0gaHRtbDtcbiAgdmFsdWUgPSBlbC5pbm5lckhUTUw7XG4gIGVsLnJlbW92ZSgpO1xuICBlbCA9IG51bGw7XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuLyoqXG4gKiBEZWNvZGUgaHRtbCBlbnRpdGllc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwieW91ICYgbWVcIlxuICogdXRpbHMuZGVjb2RlSHRtbEVudGl0aWVzKCd5b3UgJmFtcCBtZScpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBodG1sXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5kZWNvZGVIdG1sRW50aXRpZXMgPSBmdW5jdGlvbihodG1sKSB7XG4gIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgbGV0IHZhbHVlO1xuXG4gIGVsLmlubmVySFRNTCA9IGh0bWw7XG4gIHZhbHVlID0gZWwudmFsdWU7XG4gIGVsLnJlbW92ZSgpO1xuICBlbCA9IG51bGw7XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RyaW5nIGZyb20gZGFzaCB0byBjYW1lbCBjYXNlIGZvcm1hdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnRvQ2FtZWxDYXNlID0gZnVuY3Rpb24oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXFxXKyguKS9nLCAobSwgYykgPT4gYy50b1VwcGVyQ2FzZSgpKTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHN0cmluZyBmcm9tIGNhbWVsIHRvIGRhc2ggY2FzZSBmb3JtYXRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy50b0Rhc2hDYXNlID0gZnVuY3Rpb24oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCAobSwgYykgPT4gYC0ke2MudG9Mb3dlckNhc2UoKX1gKTtcbn07XG5cbi8qKlxuICogR2V0IG5lc3RlZCBvYmplY3QgcHJvcGVydHkgYnkgYXJyYXkga2V5c1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIDVcbiAqIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuZ2V0UHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QpIHtcbiAgbGV0IGN1cnJlbnQ7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKGZ1bmN0aW9uKG8sIGspIHtcbiAgICBpKys7XG5cbiAgICBpZih0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIG87XG4gICAgfVxuXG4gICAgaWYob1trXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgKGkgPT0gbGVuZ3RoKSAmJiAoY3VycmVudCA9IG9ba10pO1xuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiBjdXJyZW50O1xufTtcblxuLyoqXG4gKiBDaGVjayBuZXN0ZWQgb2JqZWN0cyB0cmVlIGhhcyBwcm9wZXJ0eSBvciBub3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB0cnVlXG4gKiB1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0KSB7XG4gIGxldCBoYXMgPSBmYWxzZTtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoZnVuY3Rpb24obywgaykge1xuICAgIGkrKztcblxuICAgIGlmKHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gISFvO1xuICAgIH1cblxuICAgIGlmKCFvLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgKGkgPT0gbGVuZ3RoKSAmJiAoaGFzID0gby5oYXNPd25Qcm9wZXJ0eShrKSk7XG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIGhhcztcbn07XG5cbi8qKlxuICogU2V0IG5lc3RlZCBvYmplY3RzIHRyZWUgcHJvcGVydHlcbiAqIFJldHVybnMgY2hhbmdlZCBwcm9wZXJ0eSBvYmplY3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB7eTogNn1cbiAqIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19LCAobGFzdCwgdmFsKSA9PiBsYXN0PyA2OiAodmFsIHx8IHt9KSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCwgZm4pIHtcbiAgbGV0IGN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKGZ1bmN0aW9uKG8sIGspIHtcbiAgICBpKys7XG5cbiAgICBpZih0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKCFvLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICByZXR1cm4gY3VycmVudCA9IG9ba10gPSBmbihpID09IGxlbmd0aCk7XG4gICAgfVxuXG4gICAgb1trXSA9IGZuKGkgPT0gbGVuZ3RoLCBvW2tdKTtcbiAgICBjdXJyZW50ID0gbztcblxuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiBjdXJyZW50O1xufTtcblxuLyoqXG4gKlxuICogRGVsZXRlIHByb3BlcnR5IGZyb20gbmVzdGVkIG9iamVjdHMgdHJlZVxuICogUmV0dXJucyBkZWxldGVkIHByb3BlcnR5IHZhbHVlXG4gKiBZb3UgY2FuIGNhbmNlbCBkZWxldGluZyBpZiB3aWxsIHJldHVybiBmYWxzZSBpbiB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyA1XG4gKiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSk7XG4gQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0sIHZhbCA9PiB2YWwgIT0gNSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHBhcmFtIHtmdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0LCBmbikge1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCB2YWx1ZTtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKGZ1bmN0aW9uKG8sIGspIHtcbiAgICBpKys7XG5cbiAgICBpZih0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKCFvLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgaWYoaSA9PSBsZW5ndGgpIHtcbiAgICAgIHZhbHVlID0gb1trXTtcblxuICAgICAgaWYoIWZuIHx8IGZuKHZhbHVlKSkge1xuICAgICAgICBkZWxldGUgb1trXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgdGFyZ2V0IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cblxudXRpbHMuZ2V0RW51bWVyYWJsZVByb3BlcnR5VGFyZ2V0ID0gZnVuY3Rpb24odGFyZ2V0LCBrZXkpIHtcbiAgbGV0IGNoZWNrID0gKG9iaikgPT4ge1xuICAgIGlmKG9iai5wcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGxldCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuXG4gICAgaWYoIXByb3RvKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hlY2socHJvdG8pO1xuICB9O1xuXG4gIHJldHVybiBjaGVjayh0YXJnZXQpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIG93biBwcm9wZXJ0eSB0YXJnZXQgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xudXRpbHMuZ2V0T3duUHJvcGVydHlUYXJnZXQgPSBmdW5jdGlvbih0YXJnZXQsIGtleSkge1xuICBsZXQgY2hlY2sgPSAob2JqKSA9PiB7XG4gICAgaWYob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgbGV0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG5cbiAgICBpZighcHJvdG8pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjaGVjayhwcm90byk7XG4gIH07XG5cbiAgcmV0dXJuIGNoZWNrKHRhcmdldCk7XG59O1xuXG4vKipcbiAqIENsZWFyIHZhbHVlIHByb3h5IGlmIGl0IGV4aXN0ZW50XG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmNsZWFyU2NvcGVQcm94eSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZih0eXBlb2YgdmFsdWUgIT0gJ29iamVjdCcgfHwgIXZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgbGV0IGNsZWFyID0gKG9iaikgPT4ge1xuICAgIGZvcihsZXQgayBpbiBvYmopIHtcbiAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZihvYmpba10gJiYgdHlwZW9mIG9ialtrXSA9PSAnb2JqZWN0Jykge1xuICAgICAgICBpZihvYmpba10uX19pc1Byb3h5KSB7XG4gICAgICAgICAgb2JqW2tdID0gb2JqW2tdLl9fdGFyZ2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgY2xlYXIob2JqW2tdKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgaWYodmFsdWUuX19pc1Byb3h5KSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5fX3RhcmdldDtcbiAgfVxuXG4gIGNsZWFyKHZhbHVlKTtcblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5cbi8qKlxuICogR2VuZXJhdGUgcmFuZG9tIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuY3JlYXRlUmFuZG9tU3RyaW5nID0gZnVuY3Rpb24obGVuZ3RoID0gMTYsIGZuID0gbnVsbCkge1xuICBsZXQgc3RyID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIGxlbmd0aCArIDIpO1xuICBsZXQgdmFsID0gJyc7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IHN0ci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZihNYXRoLnJhbmRvbSgpID4gMC42Nikge1xuICAgICAgdmFsICs9IHN0cltpXS50b1VwcGVyQ2FzZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhbCArPSBzdHJbaV07XG4gICAgfVxuICB9XG5cbiAgaWYoZm4gJiYgZm4odmFsKSkge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZVJhbmRvbVN0cmluZyhsZW5ndGgsIGZuKTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1dGlscztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMuanMiLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgUmVxdWVzdCB7XG4gIGNvbnN0cnVjdG9yKGJhc2VVcmwsIGRlZmF1bHRzKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gYmFzZVVybD8gKGJhc2VVcmwucmVwbGFjZSgvXFwvJC8sICcnKSArICcvJyk6ICcnO1xuXG4gICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgIHN0YXR1c0Vycm9yc1BhdHRlcm46IC9eKFteMjNdKXw0MDQvLFxuICAgICAgLi4uKGRlZmF1bHRzIHx8IHt9KVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogU2VuZCByZXF1ZXN0IHdpdGggYW55IG1ldGhvZFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHF1ZXJ5KG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IHVybDtcbiAgICAgIGxldCB4aHI7XG5cbiAgICAgIG9wdGlvbnMgPSB7Li4udGhpcy5kZWZhdWx0cywgLi4uKG9wdGlvbnMgfHwge30pfTtcblxuICAgICAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAodHlwZW9mIG9wdGlvbnMub25TdGFydCA9PSAnZnVuY3Rpb24nKSAmJiBvcHRpb25zLm9uU3RhcnQoeGhyKTtcbiAgICAgIG9wdGlvbnMgPSB0aGlzLnRyYW5zZm9ybUJlZm9yZShvcHRpb25zKTtcbiAgICAgIHVybCA9IHRoaXMuYmFzZVVybD8gYCR7dGhpcy5iYXNlVXJsfSR7b3B0aW9ucy51cmwucmVwbGFjZSgvXlxcLy8sICcnKX1gOiBvcHRpb25zLnVybDtcbiAgICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCB1cmwsIHRydWUsIG9wdGlvbnMudXNlciwgb3B0aW9ucy5wYXNzd29yZCk7XG4gICAgICBvcHRpb25zLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwge307XG5cbiAgICAgIGlmKG9wdGlvbnMuanNvbikge1xuICAgICAgICBvcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShvcHRpb25zLmpzb24pO1xuICAgICAgICBvcHRpb25zLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICBvcHRpb25zLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlIHx8ICdqc29uJztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYob3B0aW9ucy5mb3JtKSB7XG4gICAgICAgIG9wdGlvbnMuYm9keSA9IHRoaXMuY3JlYXRlRm9ybURhdGEob3B0aW9ucy5mb3JtKTtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzWydjb250ZW50LXR5cGUnXSA9ICdtdWx0aXBhcnQvZm9ybS1kYXRhJztcbiAgICAgIH1cblxuICAgICAgaWYob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgndGltZW91dCcpKSB7XG4gICAgICAgIHhoci50aW1lb3V0ID0gb3B0aW9ucy50aW1lb3V0O1xuICAgICAgfVxuXG4gICAgICBpZihvcHRpb25zLnJlc3BvbnNlVHlwZSkge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gb3B0aW9ucy5yZXNwb25zZVR5cGU7XG4gICAgICB9XG5cbiAgICAgIGlmKG9wdGlvbnMud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSBvcHRpb25zLndpdGhDcmVkZW50aWFscztcbiAgICAgIH1cblxuICAgICAgaWYob3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIGZvcihsZXQgayBpbiBvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgICBpZighb3B0aW9ucy5oZWFkZXJzLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrLCBvcHRpb25zLmhlYWRlcnNba10pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKG9wdGlvbnMucGFyYW1zKSB7XG4gICAgICAgIGxldCBzdHIgPSB0aGlzLnBhcmFtc1RvUXVlcnkob3B0aW9ucy5wYXJhbXMpO1xuXG4gICAgICAgIGlmKHN0cikge1xuICAgICAgICAgIHVybCArPSBcIj9cIiArIHN0cjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZih0eXBlb2Ygb3B0aW9ucy5vblByb2dyZXNzID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgeGhyLm9ucHJvZ3Jlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9wdGlvbnMub25Qcm9ncmVzcyh4aHIpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSB0aGlzLnRyYW5zZm9ybUFmdGVyKHhocik7XG5cbiAgICAgICAgaWYoKHhoci5zdGF0dXMgKyAnJykubWF0Y2gob3B0aW9ucy5zdGF0dXNFcnJvcnNQYXR0ZXJuKSkge1xuICAgICAgICAgIGxldCBlcnIgPSBuZXcgRXJyb3IoYFJlcXVlc3QgdG8gXCIke3VybH1cIiByZXR1cm5zIGZhaWx1cmUgc3RhdHVzIGNvZGUgJHt4aHIuc3RhdHVzfWApO1xuXG4gICAgICAgICAgZXJyLnJlc3BvbnNlID0gcmVzcG9uc2U7XG5cbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgIH1cblxuICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci50aW1lb3V0ID0gKCkgPT4ge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKGBSZXF1ZXN0IHRvIFwiJHt1cmx9XCIgdGltZWQgb3V0YCkpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9uZXJyb3IgPSAoZXJyKSA9PiB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfTtcblxuICAgICAgeGhyLnNlbmQob3B0aW9ucy5ib2R5KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IG9iamVjdCB0byBxdWVyeSBzdHJpbmdcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgcGFyYW1zVG9RdWVyeShvYmopIHtcbiAgICBsZXQgc2VwID0gJyYnO1xuICAgIGxldCBlcSA9ICc9JztcblxuICAgIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubWFwKChrKSA9PiB7XG4gICAgICBsZXQga3MgPSBlbmNvZGVVUklDb21wb25lbnQoayk7XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9ialtrXSkpIHtcbiAgICAgICAga3MgPSBlbmNvZGVVUklDb21wb25lbnQoayk7XG5cbiAgICAgICAgcmV0dXJuIG9ialtrXS5tYXAoKHYsIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4ga3MgKyBgWyR7aX1dYCArIGVxICsgZW5jb2RlVVJJQ29tcG9uZW50KHYpO1xuICAgICAgICB9KS5qb2luKHNlcCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKG9ialtrXSAmJiB0eXBlb2Ygb2JqW2tdID09PSAnb2JqZWN0Jykge1xuICAgICAgICBsZXQgb3B0ID0gW107XG5cbiAgICAgICAgT2JqZWN0LmtleXMob2JqW2tdKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgIG9wdC5wdXNoKGtzICsgYFske2tleX1dYCArIGVxICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrXVtrZXldKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBvcHQuam9pbihzZXApO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBrcyArIGVxICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrXSk7XG4gICAgICB9XG4gICAgfSkuam9pbihzZXApO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgcXVlcnkgc3RyaW5nIHRvIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICBwYXJhbXNGcm9tUXVlcnkoc3RyKSB7XG4gICAgbGV0IHF1ZXJ5ID0ge307XG4gICAgbGV0IGFtcHMgPSBzdHIuc3BsaXQoJyYnKTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBhbXBzLmxlbmd0aDsgaSA8bDsgaSsrKSB7XG4gICAgICBsZXQgZXFzID0gIGFtcHNbaV0uc3BsaXQoJz0nKTtcbiAgICAgIGxldCBrZXkgPSBkZWNvZGVVUklDb21wb25lbnQoZXFzWzBdKTtcbiAgICAgIGxldCB2YWwgPSBkZWNvZGVVUklDb21wb25lbnQoZXFzWzFdKTtcblxuICAgICAgaWYoIWtleSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgICBxdWVyeVtrZXldLnB1c2godmFsKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYocXVlcnlba2V5XSkge1xuICAgICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0sIHZhbF07XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcXVlcnlba2V5XSA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIG11bHRpcGFydCBmb3JtIGRhdGEgZnJvbSBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgKiBAcGFyYW0ge0Zvcm1EYXRhfSBbZGF0YV1cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtuYW1lc3BhY2VdXG4gICAqXG4gICAqIEByZXR1cm5zIHtGb3JtRGF0YX1cbiAgICovXG4gIGNyZWF0ZUZvcm1EYXRhKG9iaiwgZGF0YSA9IG51bGwsIG5hbWVzcGFjZSA9ICcnKSB7XG4gICAgbGV0IGZkID0gZGF0YSB8fCBuZXcgRm9ybURhdGEoKTtcblxuICAgIGZvcihsZXQgayBpbiBvYmopIHtcbiAgICAgIGlmKG9iai5oYXNPd25Qcm9wZXJ0eShrKSAmJiBvYmpba10pIHtcbiAgICAgICAgbGV0IGtleSA9IG5hbWVzcGFjZT8gbmFtZXNwYWNlICsgJ1snICsgayArICddJzogaztcblxuICAgICAgICBpZiAob2JqW2tdIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgIGZkLmFwcGVuZChrZXksIG9ialtrXS50b0lTT1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KG9ialtrXSkpIHtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm1EYXRhKG9ialtrXSwgZmQsIGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZmQuYXBwZW5kKGtleSwgb2JqW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gZGF0YSBiZWZvcmUgYSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICB0cmFuc2Zvcm1CZWZvcmUob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBkYXRhIGFmdGVyIGEgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge1hNTEh0dHBSZXF1ZXN0fSB4aHJcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHRyYW5zZm9ybUFmdGVyKHhocikge1xuICAgIHJldHVybiB7XG4gICAgICB4aHI6IHhocixcbiAgICAgIGRhdGE6IHhoci5yZXNwb25zZSxcbiAgICAgIHN0YXR1czogeGhyLnN0YXR1c1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgR0VUIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGdldCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ0dFVCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBERUxFVEUgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZGVsZXRlKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnREVMRVRFJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIFBPU1QgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcG9zdCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ1BPU1QnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgUFVUIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHB1dCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ1BVVCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBQQVRDSCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBwYXRjaCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ1BBVENIJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG59XG5cbmNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCgpO1xuXG5yZXF1ZXN0Ll9faW5zdGFuY2VzID0ge307XG5cbi8qKlxuICogQWRkIG5ldyByZXF1ZXN0IGluc3RhbmNlIHRvIHRoZSBtYWluIHNlcnZpY2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtSZXF1ZXN0fSBpbnN0YW5jZVxuICovXG5yZXF1ZXN0LmFkZEluc3RhbmNlID0gZnVuY3Rpb24obmFtZSwgaW5zdGFuY2UpIHtcbiAgdGhpcy5fX2luc3RhbmNlc1tuYW1lXSA9IGluc3RhbmNlO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgaW5zdGFuY2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5yZXF1ZXN0LnJlbW92ZUluc3RhbmNlID0gZnVuY3Rpb24obmFtZSkge1xuICBkZWxldGUgdGhpcy5fX2luc3RhbmNlc1tuYW1lXTtcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1ZXN0LCAndXNlJywge1xuICBnZXQ6ICgpID0+IHtcbiAgICByZXR1cm4gcmVxdWVzdC5fX2luc3RhbmNlcztcbiAgfVxufSk7XG5cbnJlcXVlc3QuUmVxdWVzdCA9IFJlcXVlc3Q7XG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2aWNlcy9yZXF1ZXN0LmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy52YWx1ZUtleSA9ICd2YWx1ZSc7XG4gIH1cblxuICBjaGFuZ2VkVmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGNoYW5nZWRGb2N1cyh2YWx1ZSkge1xuICAgIHRoaXMuc2V0Rm9jdXModmFsdWUpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgnZm9jdXMnKSAmJiB0aGlzLnNldEZvY3VzKHRoaXMuYXR0cnMuZm9jdXMpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgJiYgdGhpcy5zZXRWYWx1ZSh0aGlzLmF0dHJzLnZhbHVlKTtcbiAgfVxuXG4gIHNldEZvY3VzKHZhbHVlKSB7XG4gICAgdmFsdWU/IHRoaXMuc2V0RWxlbWVudEZvY3VzKCk6IHRoaXMuc2V0RWxlbWVudEJsdXIoKTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgKHRoaXMuZWxbdGhpcy52YWx1ZUtleV0gIT09IHZhbHVlKSAmJiAodGhpcy5lbFt0aGlzLnZhbHVlS2V5XSA9IHZhbHVlID09PSAwPyAnMCc6ICh2YWx1ZSB8fCAnJykpO1xuICB9XG5cbiAgc2V0RWxlbWVudEZvY3VzKCkge1xuICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgfVxuXG4gIHNldEVsZW1lbnRCbHVyKCkge1xuICAgIHRoaXMuZWwuYmx1cigpO1xuICB9XG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tpbl0nO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdmb3InLCBGb3IpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnb2wnLCBGb3IpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndWwnLCBGb3IpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGhlYWQnLCBGb3IpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGJvZHknLCBGb3IpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGZvb3QnLCBGb3IpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndHInLCBMb29wKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2xvb3AnLCBMb29wKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuX19pdGVyYXRvciA9IG51bGw7XG4gICAgdGhpcy5fX2tleSA9IG51bGw7XG4gICAgdGhpcy5fX3ZhbHVlID0gbnVsbDtcbiAgICB0aGlzLl9faW5kZXggPSBudWxsO1xuICAgIHRoaXMuX19jb21wYXJpc29uVmFsdWUgPSBudWxsO1xuICAgIHRoaXMuaXRlcmF0b3JzID0ge307XG4gICAgdGhpcy5pdGVyYXRvclJlZiA9IG51bGw7XG4gICAgdGhpcy5pdGVyYXRvck91dGVySFRNTCA9IG51bGw7XG4gIH1cblxuICBjaGFuZ2VkSW4oZGF0YSkge1xuICAgIHRoaXMuZHJhdyhkYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5jcmVhdGVJdGVyYXRvcigpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5kcmF3KHRoaXMuYXR0cnMuaW4pO1xuICB9XG5cbiAgY3JlYXRlSXRlcmF0b3IoKSB7XG4gICAgbGV0IGVsO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuZWwuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLmVsLmNoaWxkcmVuW2ldO1xuXG4gICAgICBpZihjaGlsZC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpID09ICdsb29wJykge1xuICAgICAgICBlbCA9IGNoaWxkO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBlbCA9IGNoaWxkO1xuICAgIH1cblxuICAgIGlmKCFlbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdcIkZvclwiIGNvbXBvbmVudCBtdXN0IGhhdmUgYXQgbGVhc3Qgb25lIGNoaWxkJylcbiAgICB9XG5cbiAgICBsZXQgY29tcG9uZW50TmFtZSA9IGVsLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50Jyk7XG5cbiAgICBpZihjb21wb25lbnROYW1lICE9ICdsb29wJykge1xuICAgICAgbGV0IGNvbXBvbmVudCA9IEFraWxpLmNvbXBvbmVudChjb21wb25lbnROYW1lIHx8IGVsLnRhZ05hbWUpO1xuXG4gICAgICBpZighY29tcG9uZW50KSB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY29tcG9uZW50JywgJ2xvb3AnKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoIShjb21wb25lbnQucHJvdG90eXBlIGluc3RhbmNlb2YgRm9yKSkge1xuICAgICAgICBsZXQgbWFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xvb3AnKTtcblxuICAgICAgICBtYXNrLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgZWwgPSBtYXNrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaHRtbCA9IGVsLmlubmVySFRNTDtcbiAgICB0aGlzLml0ZXJhdG9yUmVmID0gZWwubmV4dFNpYmxpbmc7XG4gICAgdGhpcy5pdGVyYXRvck91dGVySFRNTCA9IGVsLm91dGVySFRNTDtcbiAgICBlbC5yZW1vdmUoKTtcbiAgfVxuXG4gIGNyZWF0ZUl0ZXJhdG9yRWxlbWVudCgpIHtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXG4gICAgZWwuaW5uZXJIVE1MID0gdGhpcy5pdGVyYXRvck91dGVySFRNTDtcbiAgICBlbCA9IGVsLmNvbnRlbnQuZmlyc3RDaGlsZDtcblxuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIGxvb3Aoa2V5LCB2YWx1ZSwga2V5cywgaW5kZXgpIHtcbiAgICB0aGlzLl9faW5kZXggPSBpbmRleDtcbiAgICB0aGlzLl9fa2V5ID0ga2V5O1xuICAgIHRoaXMuX192YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuX19jb21wYXJpc29uVmFsdWUgPSB1dGlscy5jb3B5KHZhbHVlKTtcblxuICAgIGxldCBoYXNoID0gJyc7XG4gICAgbGV0IGZvdW5kID0gMDtcblxuICAgIGlmKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JyAmJiB2YWx1ZS5fX2hhc2gpIHtcbiAgICAgIGhhc2ggPSB2YWx1ZS5fX2hhc2g7XG4gICAgfVxuXG4gICAgaWYodGhpcy5pdGVyYXRvcnNbaGFzaF0pIHtcbiAgICAgIGtleSA9IGhhc2g7XG4gICAgICBmb3VuZCA9IDI7XG4gICAgfVxuICAgIGVsc2UgaWYodGhpcy5pdGVyYXRvcnNba2V5XSkge1xuICAgICAgZm91bmQgPSAxO1xuICAgIH1cblxuICAgIGlmKGZvdW5kKSB7XG4gICAgICBsZXQgaXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yc1trZXldO1xuXG4gICAgICBpZihmb3VuZCA9PSAyKSB7XG4gICAgICAgIGxldCBjVmFsdWUgPSBpdGVyYXRvci5jb21wYXJzaW9uLnZhbHVlO1xuICAgICAgICBsZXQgY0NvcHkgPSBpdGVyYXRvci5jb21wYXJzaW9uLmNvcHk7XG5cbiAgICAgICAgaWYgKHRoaXMuX19pbmRleCAhPT0gaXRlcmF0b3IuaW5kZXgpIHtcbiAgICAgICAgICBpdGVyYXRvci5zZXRJbmRleCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX19rZXkgIT09IGl0ZXJhdG9yLmtleSkge1xuICAgICAgICAgIGl0ZXJhdG9yLnNldEtleSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF1dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSh2YWx1ZSwgY1ZhbHVlLCBjQ29weSwgdGhpcy5fX2NvbXBhcmlzb25WYWx1ZSkpIHtcbiAgICAgICAgICBpdGVyYXRvci5zZXRWYWx1ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAga2V5c1trZXldID0gaXRlcmF0b3I7XG4gICAgICAgIGRlbGV0ZSB0aGlzLml0ZXJhdG9yc1trZXldO1xuXG4gICAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pdGVyYXRvclJlZiA9IGl0ZXJhdG9yLmVsLm5leHRTaWJsaW5nO1xuICAgICAgaXRlcmF0b3IuX19kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgbGV0IGVsID0gdGhpcy5jcmVhdGVJdGVyYXRvckVsZW1lbnQoKTtcblxuICAgIGVsLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcbiAgICB0aGlzLmVsLmluc2VydEJlZm9yZShlbCwgdGhpcy5pdGVyYXRvclJlZik7XG4gICAgQWtpbGkuY29tcGlsZShlbCk7XG5cbiAgICBpZih2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICAgIGlmKCF2YWx1ZS5fX2hhc2gpIHtcbiAgICAgICAgaGFzaCA9IHV0aWxzLmNyZWF0ZVJhbmRvbVN0cmluZygzMiwgKHN0cikgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLml0ZXJhdG9yc1tzdHJdO1xuICAgICAgICB9KTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsdWUsICdfX2hhc2gnLCB7XG4gICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgICAgdmFsdWU6IGhhc2hcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGtleXNbaGFzaF0gPSB0aGlzLl9faXRlcmF0b3I7XG4gICAgICBkZWxldGUgdGhpcy5pdGVyYXRvcnNbaGFzaF07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYoQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICBsZXQgZVZhbHVlID0gdHlwZW9mIHRoaXMuX192YWx1ZSA9PSAnc3RyaW5nJz8gYFwiJHt0aGlzLl9fdmFsdWV9XCJgOiB0aGlzLl9fdmFsdWU7XG5cbiAgICAgICAgbGV0IGFyZ3MgPSBbXG4gICAgICAgICAgYFwiRm9yXCIgY29tcG9uZW50IGxvb3AgaXRlbXMgc2hvdWxkIGhhdmUgXCJvYmplY3RcIiB0eXBlIGZvciBoaWdoZXIgcGVyZm9ybWFuY2UuYCxcbiAgICAgICAgICBgWW91IGNhbiBjaGFuZ2UgJHtlVmFsdWV9IHRvIHt2YWx1ZTogJHtlVmFsdWV9fSwgZm9yIGV4YW1wbGUuYFxuICAgICAgICBdO1xuXG4gICAgICAgIGNvbnNvbGUud2Fybi5hcHBseShjb25zb2xlLndhcm4sIGFyZ3MpO1xuICAgICAgfVxuXG4gICAgICBrZXlzW2tleV0gPSB0aGlzLl9faXRlcmF0b3I7XG4gICAgICBkZWxldGUgdGhpcy5pdGVyYXRvcnNba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWwuX19ha2lsaTtcbiAgfVxuXG4gIGRyYXcoZGF0YSkge1xuICAgIGlmICh0eXBlb2YgZGF0YSAhPSAnb2JqZWN0JyB8fCBkYXRhID09PSBudWxsKSB7XG4gICAgICBpZihBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgXCJGb3JcIiBjb21wb25lbnQgXCJpblwiIGF0dHJpYnV0ZSB2YWx1ZSB0eXBlIG11c3QgYmUgYW4gb2JqZWN0L2FycmF5YCk7XG4gICAgICAgIGRhdGEgPSBbXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQga2V5cyA9IHt9O1xuICAgIGxldCBpbmRleEtleXMgPSBbXTtcbiAgICBsZXQgbGFzdEVsZW1lbnQgPSBudWxsO1xuICAgIGxldCBsYXN0ID0gdGhpcy5lbC5jaGlsZHJlblt0aGlzLmVsLmNoaWxkcmVuLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYobGFzdCAmJiAhKGxhc3QuX19ha2lsaSBpbnN0YW5jZW9mIExvb3ApKSB7XG4gICAgICBsYXN0RWxlbWVudCA9IGxhc3Q7XG4gICAgfVxuXG4gICAgaWYoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGRhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGluZGV4S2V5cy5wdXNoKHRoaXMubG9vcChpLCBkYXRhW2ldLCBrZXlzLCBpKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IGkgPSAwO1xuXG4gICAgICBmb3IobGV0IGsgaW4gZGF0YSkge1xuICAgICAgICBpZighZGF0YS5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXhLZXlzLnB1c2godGhpcy5sb29wKGssIGRhdGFba10sIGtleXMsIGkpKTtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBpbmRleEtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgaXRlcmF0b3IgPSBpbmRleEtleXNbaV07XG5cbiAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoaXRlcmF0b3IuZWwpO1xuICAgICAgaXRlcmF0b3IuaXRlcmF0ZShpKTtcbiAgICB9XG5cbiAgICBsYXN0RWxlbWVudCAmJiB0aGlzLmVsLmFwcGVuZENoaWxkKGxhc3RFbGVtZW50KTtcblxuICAgIGZvcihsZXQgayBpbiB0aGlzLml0ZXJhdG9ycykge1xuICAgICAgaWYoIXRoaXMuaXRlcmF0b3JzLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLml0ZXJhdG9yc1trXS5fX2Rlc3Ryb3koKTtcbiAgICB9XG5cbiAgICB0aGlzLml0ZXJhdG9ycyA9IGtleXM7XG4gIH1cbn07XG5cbmV4cG9ydCBjbGFzcyBMb29wIGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmZvciA9IG51bGw7XG4gICAgdGhpcy5odG1sID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgdGhpcy5pc0ZvciA9IHRoaXMuZWwuaGFzQXR0cmlidXRlKCdpbicpO1xuXG4gICAgaWYoIXRoaXMuaXNGb3IgJiYgISh0aGlzLmVsLnBhcmVudE5vZGUuX19ha2lsaSBpbnN0YW5jZW9mIEZvcikpIHtcbiAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19pdGVyYXRvciA9IHRoaXM7XG4gICAgdGhpcy5mb3IgPSB0aGlzLl9fcGFyZW50Ll9fYWtpbGk7XG4gICAgdGhpcy5zZXRJbmRleCgpO1xuICAgIHRoaXMuc2V0S2V5KCk7XG4gICAgdGhpcy5zZXRWYWx1ZSgpO1xuXG4gICAgdGhpcy5pc0ZvciAmJiBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmlzRm9yICYmIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBzZXRJbmRleCgpIHtcbiAgICB0aGlzLmluZGV4ID0gdGhpcy5mb3IuX19pbmRleDtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wSW5kZXgnLCB0aGlzLmluZGV4KTtcbiAgfVxuXG4gIHNldEtleSgpIHtcbiAgICB0aGlzLmtleSA9IHRoaXMuZm9yLl9fa2V5O1xuICAgIHRoaXMuc2NvcGUuX19zZXQoJ2xvb3BLZXknLCB0aGlzLmtleSk7XG4gIH1cblxuICBzZXRWYWx1ZSgpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3IuX192YWx1ZTtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wVmFsdWUnLCB0aGlzLnZhbHVlLCB0cnVlKTtcblxuICAgIHRoaXMuY29tcGFyc2lvbiA9IHtcbiAgICAgIGNvcHk6IHRoaXMuZm9yLl9fY29tcGFyaXNvblZhbHVlLFxuICAgICAgdmFsdWU6IHRoaXMuZm9yLl9fdmFsdWVcbiAgICB9XG4gIH1cblxuICBpdGVyYXRlKGluZGV4KSB7fVxufVxuXG5Gb3IuTG9vcCA9IExvb3A7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9mb3IuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGknO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vc2VydmljZXMvcmVxdWVzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JvdXRlJywgUm91dGUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1RyYW5zaXRpb259IHRyYW5zaXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBzZXRUcmFuc2l0aW9uKHRyYW5zaXRpb24pIHtcbiAgICBsZXQgc3RhdGUgPSB0cmFuc2l0aW9uLnBhdGguc3RhdGU7XG4gICAgbGV0IHBhcmFtcyA9IHRyYW5zaXRpb24ucGF0aC5wYXJhbXM7XG4gICAgbGV0IHVybCA9IHRyYW5zaXRpb24udXJsO1xuICAgIGxldCBxdWVyeSA9IHRyYW5zaXRpb24ucXVlcnk7XG4gICAgbGV0IHAgPSBQcm9taXNlLnJlc29sdmUoKTtcblxuICAgIGZ1bmN0aW9uIGdldFBhcmVudFNjb3BlVHJhbnNpdGlvbihwYXRoKSB7XG4gICAgICBpZihwYXRoLnBhcmVudCkge1xuICAgICAgICBpZiAocGF0aC5wYXJlbnQuY29tcG9uZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHBhdGgucGFyZW50LmNvbXBvbmVudC5fX3Njb3BlLl9fdHJhbnNpdGlvbi5wYXRoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldFBhcmVudFNjb3BlVHJhbnNpdGlvbihwYXRoLnBhcmVudCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHRoaXMuX19zY29wZS5fX3RyYW5zaXRpb24gPSB7XG4gICAgICBwYXRoOiB7XG4gICAgICAgIHN0YXRlOiBzdGF0ZS5uYW1lLFxuICAgICAgICBkYXRhOiB0cmFuc2l0aW9uLnBhdGguZGF0YSxcbiAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgIHBhcmVudDogZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uKHRyYW5zaXRpb24ucGF0aClcbiAgICAgIH0sXG4gICAgICBwYXJhbXM6IHRyYW5zaXRpb24ucGFyYW1zLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBxdWVyeTogcXVlcnlcbiAgICB9O1xuXG4gICAgaWYgKHN0YXRlLnRlbXBsYXRlKSB7XG4gICAgICB0aGlzLmVtcHR5KCk7XG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9IGA8Y29tcG9uZW50PiR7c3RhdGUudGVtcGxhdGV9PC9jb21wb25lbnQ+YDtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUudGVtcGxhdGVVcmwpIHtcbiAgICAgIHAgPSByZXF1ZXN0LmdldChzdGF0ZS50ZW1wbGF0ZVVybCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHRoaXMuZW1wdHkoKTtcbiAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBgPGNvbXBvbmVudD4ke3Jlcy5kYXRhfTwvY29tcG9uZW50PmA7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcC50aGVuKCgpID0+IHtcbiAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgIH0pO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3JvdXRlLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZWwsIGNvbXBvbmVudCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbCA9IGVsO1xuICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgdGhlIGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSAtIHNlbmRpbmcgZGF0YS4gV2lsbCBiZSBpbiB0aGUgZXZlbnQuZGV0YWlsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdXG4gICAqL1xuICB0cmlnZ2VyKGRhdGEsIG9wdGlvbnMgPSB7IGJ1YmJsZXM6IGZhbHNlIH0sIGZvcmNlID0gZmFsc2UpIHtcbiAgICBpZihmb3JjZSB8fCAhdGhpcy5pbkV2YWx1YXRpbmcoKSkge1xuICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCh0aGlzLm5hbWUsIHtkZXRhaWw6IGRhdGEsIC4uLm9wdGlvbnN9KSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoIHRoZSBldmVudFxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBfRXZlbnQgLSBjbGFzcyBvZiB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZV1cbiAgICovXG4gIGRpc3BhdGNoKF9FdmVudCwgb3B0aW9ucyA9IHsgYnViYmxlczogZmFsc2UgfSwgZm9yY2UgPSBmYWxzZSkge1xuICAgIGlmKGZvcmNlIHx8ICF0aGlzLmluRXZhbHVhdGluZygpKSB7XG4gICAgICB0aGlzLmVsLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudCh0aGlzLm5hbWUsIG9wdGlvbnMpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgZXZlbnQgY2FsbGJhY2sgZG9lc24ndCBydW4gcmVjdXJzaXZlXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaW5FdmFsdWF0aW5nKCkge1xuICAgIGxldCBkYXRhID0gdGhpcy5jb21wb25lbnQuX19ldmFsdWF0aW5nRXZlbnQ7XG5cbiAgICBpZighZGF0YSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhLmVsID09PSB0aGlzLmVsICYmIGRhdGEuZXZlbnQudHlwZSA9PT0gdGhpcy5uYW1lICYmIGRhdGEuY29tcG9uZW50ID09PSB0aGlzLmNvbXBvbmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIHRoZSBmdW5jdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICAgKi9cbiAgYmluZChmbikge1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMuZm4gPSBmbik7XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIHRoZSBmdW5jdGlvblxuICAgKi9cbiAgdW5iaW5kKCkge1xuICAgIHRoaXMuZm4gJiYgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubmFtZSwgdGhpcy5mbik7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGknO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vcmVxdWVzdCc7XG5pbXBvcnQgUm91dGUgZnJvbSAnLi4vY29tcG9uZW50cy9yb3V0ZSc7XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2l0aW9uIHtcbiAgY29uc3RydWN0b3IodXJsLCBxdWVyeSwgaGFzaCA9ICcnLCBwcmV2aW91cyA9IG51bGwpIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgdGhpcy5oYXNoID0gaGFzaDtcbiAgICB0aGlzLnByZXZpb3VzID0gcHJldmlvdXM7XG4gICAgdGhpcy5wYXRoID0gbnVsbDtcbiAgICB0aGlzLnJvdXRlcyA9IFtdO1xuICAgIHRoaXMuc3RhdGVzID0gW107XG4gICAgdGhpcy5wYXJhbXMgPSB7fTtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gZmFsc2U7XG4gIH1cblxuICByZWRpcmVjdCgpIHtcbiAgICB0aGlzLmNhbmNlbCgpO1xuICAgIHJvdXRlci5zdGF0ZS5hcHBseShyb3V0ZXIsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBzZXRQYXRoKHBhdGgpIHtcbiAgICBwYXRoLnBhcmVudCA9IHRoaXMucGF0aCB8fCBudWxsO1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgdGhpcy5yb3V0ZXMucHVzaChwYXRoKTtcbiAgICB0aGlzLnN0YXRlcy5wdXNoKHBhdGguc3RhdGUpO1xuICAgIHRoaXMucGFyYW1zID0gIXBhdGgucGFyZW50PyBwYXRoLnBhcmFtczogey4uLnBhdGgucGFyZW50LnBhcmFtcywgLi4ucGF0aC5wYXJhbXN9O1xuICB9XG5cbiAgZ2V0Um91dGUoc3RhdGUpIHtcbiAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5yb3V0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcm91dGUgPSB0aGlzLnJvdXRlc1tpXTtcblxuICAgICAgaWYocm91dGUuc3RhdGUgPT09IHN0YXRlKSB7XG4gICAgICAgIHJldHVybiByb3V0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGhhc1N0YXRlKHN0YXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVzLmluZGV4T2Yoc3RhdGUpICE9IC0xO1xuICB9XG5cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSB0cnVlO1xuICB9XG59XG5cbmNvbnN0IHJvdXRlciA9IHt9O1xuXG5yb3V0ZXIuYmFzZVVybCA9IFwiL1wiO1xucm91dGVyLnN0YXRlcyA9IFtdO1xucm91dGVyLmhhc2hNb2RlID0gdHJ1ZTtcbnJvdXRlci5fX3JlZGlyZWN0cyA9IDA7XG5yb3V0ZXIuX19pbml0ID0gZmFsc2U7XG5yb3V0ZXIuX19vcHRpb25zID0ge307XG5yb3V0ZXIuX19wYXJhbVJlZ2V4ID0gLyg6KFtcXHdcXGQtXSspKS9nO1xucm91dGVyLl9fcm91dGVTZWxlY3RvciA9IGMgPT4gYyBpbnN0YW5jZW9mIFJvdXRlO1xuXG4vKipcbiAqIEFkZCBuZXcgc3RhdGUgdG8gdGhlIHJvdXRlclxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc3RhdGUgbmFtZS4gVG8gc2V0IHBhcmVudHMgeW91IGNhbiB1c2UgZG90LCBlLmcuICdhcHAuYXJ0aWNsZS5lZGl0J1xuICogQHBhcmFtIHtzdHJpbmd9IHBhdHRlcm4gLSB1cmwgcGF0dGVybiBsaWtlICdhcHAvYXJ0aWNsZS86aWQnXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7cm91dGVyfVxuICovXG5yb3V0ZXIuYWRkID0gZnVuY3Rpb24gKG5hbWUsIHBhdHRlcm4sIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgdGVtcGxhdGU6ICcnLFxuICAgIHRlbXBsYXRlVXJsOiAnJyxcbiAgICBhYnN0cmFjdDogZmFsc2UsXG4gICAgaGFuZGxlcjogKHRyYW5zaXRpb24pID0+IHt9XG4gIH07XG5cbiAgaWYoIW9wdGlvbnMudGVtcGxhdGUgJiYgIW9wdGlvbnMudGVtcGxhdGVVcmwpIHtcbiAgICBvcHRpb25zLmFic3RyYWN0ID0gdHJ1ZTtcbiAgfVxuXG4gIGlmKHRoaXMuaGFzKG5hbWUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgXCIke25hbWV9XCIgaXMgYWxyZWFkeSBleGlzdHNgKVxuICB9XG5cbiAgdGhpcy5zZXRTdGF0ZShuYW1lLCBwYXR0ZXJuLCB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnN9KTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIHN0YXRlIGZyb20gdGhlIGxpc3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5yb3V0ZXIucmVtb3ZlID0gZnVuY3Rpb24obmFtZSkge1xuICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYodGhpcy5zdGF0ZXNbaV0ubmFtZSA9PSBuYW1lKSB7XG4gICAgICB0aGlzLnN0YXRlcy5zcGxpY2UoaSwgMSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQ2hlY2sgc3RhdGUgZXhpc3RzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYodGhpcy5zdGF0ZXNbaV0ubmFtZSA9PSBuYW1lKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIENoYW5nZSB0aGUgc3RhdGUgdG8gdGhlIHBhc3NlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc3RhdGUgbmFtZVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIC0gcGFyYW1zIGZvciBzdGF0ZSB7aWQ6IDF9ID0+ICcvYXBwLzppZCcgPT4gJy9hcHAvMSdcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcXVlcnldIC0gcXVlcnkge3g6IDF9ID0+ICcvYXBwLz94PTEnXG4gKiBAcGFyYW0ge3N0cmluZ30gW2hhc2hdXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKi9cbnJvdXRlci5zdGF0ZSA9IGZ1bmN0aW9uIChuYW1lLCBwYXJhbXMgPSB7fSwgcXVlcnkgPSB7fSwgaGFzaCA9ICcnLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZShuYW1lKTtcblxuICBpZiAoIXN0YXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgcm91dGUgc3RhdGUgd2l0aCBuYW1lICR7bmFtZX1gKTtcbiAgfVxuXG4gIGxldCB1cmwgPSB0aGlzLmNyZWF0ZVN0YXRlVXJsKHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoKTtcblxuICBpZighb3B0aW9ucy5yZWxvYWQgJiYgdXJsID09PSB0aGlzLmdldFVybCgpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5fX29wdGlvbnMgPSBvcHRpb25zO1xuICB0aGlzLnNldFVybCh1cmwpO1xufTtcblxuLyoqXG4gKiBHbyBiYWNrXG4gKi9cbnJvdXRlci5iYWNrID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeS5iYWNrLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBHbyB0byBhbnkgd2F5XG4gKi9cbnJvdXRlci5nbyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkuZ28uYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIEdvIGZvcndhcmRcbiAqL1xucm91dGVyLmZvcndhcmQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LmZvcndhcmQuYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIENoYW5nZSBzdGF0ZSBieSB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKi9cbnJvdXRlci5sb2NhdGlvbiA9IGZ1bmN0aW9uKHVybCwgb3B0aW9ucyA9IHsgcmVsb2FkOiBmYWxzZSB9KSB7XG4gIHRoaXMuX19vcHRpb25zID0gb3B0aW9ucztcblxuICBpZih0aGlzLmhhc2hNb2RlKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB1cmw7XG4gIH1cbiAgZWxzZSB7XG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsICcnLCB1cmwpO1xuICB9XG59O1xuXG4vKipcbiAqIFJvdXRlciBpbml0aWFsaXphdGlvbi4gU2hvdWxkIGJlIGNhbGxlZCBiZWZvcmUgQWtpbGkuaW5pdCgpXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFtkZWZhdWx0VXJsXVxuICogQHBhcmFtIHtib29sZWFufSBbaGFzaE1vZGU9dHJ1ZV1cbiAqL1xucm91dGVyLmluaXQgPSBmdW5jdGlvbiAoZGVmYXVsdFVybCA9ICcnLCBoYXNoTW9kZSA9IHRydWUpIHtcbiAgbGV0IG9sZFB1c2hTdGF0ZSA9IHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZTtcblxuICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgcmVzID0gb2xkUHVzaFN0YXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICByb3V0ZXIuY2hhbmdlU3RhdGUoKTtcblxuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgdGhpcy5fX29uU3RhdGVDaGFuZ2VIYW5kbGVyID0gKCkgPT4ge1xuICAgIHRoaXMuY2hhbmdlU3RhdGUoKTtcbiAgfTtcblxuICB0aGlzLmRlZmF1bHRVcmwgPSBkZWZhdWx0VXJsO1xuICB0aGlzLmhhc2hNb2RlID0gaGFzaE1vZGU7XG5cbiAgdGhpcy5zdGF0ZXMuc29ydCgoYSwgYikgPT4ge1xuICAgIGEgPSBhLm5hbWUuc3BsaXQoJy4nKS5sZW5ndGg7XG4gICAgYiA9IGIubmFtZS5zcGxpdCgnLicpLmxlbmd0aDtcblxuICAgIHJldHVybiBhIC0gYjtcbiAgfSk7XG5cbiAgbGV0IHN0YXRlcyA9IHt9O1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZXNbaV07XG4gICAgbGV0IHBhcmVudHMgPSBbXTtcblxuICAgIHN0YXRlc1tzdGF0ZS5uYW1lXSA9IHN0YXRlO1xuICAgIHN0YXRlLmNoaWxkcmVuID0gW107XG4gICAgcGFyZW50cyA9IHN0YXRlLm5hbWUuc3BsaXQoJy4nKTtcbiAgICBwYXJlbnRzLnBvcCgpO1xuICAgIHN0YXRlLmxldmVsID0gc3RhdGUuYWJzdHJhY3Q/IG51bGw6IHBhcmVudHMubGVuZ3RoO1xuXG4gICAgaWYgKHBhcmVudHMubGVuZ3RoKSB7XG4gICAgICBsZXQgcGFyZW50TmFtZSA9IHBhcmVudHMuam9pbignLicpO1xuICAgICAgbGV0IHBhcmVudCA9IHN0YXRlc1twYXJlbnROYW1lXTtcblxuICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgcGFyZW50IHJvdXRlIHN0YXRlIFwiJHtwYXJlbnROYW1lfVwiIGZvciBcIiR7c3RhdGUubmFtZX1cImApXG4gICAgICB9XG5cbiAgICAgIGlmKHN0YXRlLmxldmVsICE9PSBudWxsICYmIHBhcmVudC5hYnN0cmFjdCkge1xuICAgICAgICBzdGF0ZS5sZXZlbC0tO1xuICAgICAgfVxuXG4gICAgICBzdGF0ZS5mdWxsUGF0dGVybiA9IHRoaXMuc3BsaXRTbGFzaGVzKHBhcmVudC5mdWxsUGF0dGVybiArICcvJyArIHN0YXRlLnBhdHRlcm4pO1xuICAgICAgcGFyZW50LmNoaWxkcmVuLnB1c2goc3RhdGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHN0YXRlLmZ1bGxQYXR0ZXJuID0gc3RhdGUucGF0dGVybjtcbiAgICB9XG4gIH1cblxuICBpZighdGhpcy5zdGF0ZXMubGVuZ3RoICYmIEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICBjb25zb2xlLndhcm4oYFlvdSBkaWRuJ3QgYWRkIGFueSByb3V0ZXMgdG8gdGhlIHJvdXRlcmApO1xuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5fX29uU3RhdGVDaGFuZ2VIYW5kbGVyKTtcbiAgdGhpcy5fX2luaXQgPSB0cnVlO1xufTtcblxuLyoqXG4gKiBHZXQgc3RhdGUgYnkgbmFtZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gKi9cbnJvdXRlci5nZXRTdGF0ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZXNbaV07XG5cbiAgICBpZiAoc3RhdGUubmFtZSA9PSBuYW1lKSB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIFNldCBzdGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVyblxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqL1xucm91dGVyLnNldFN0YXRlID0gZnVuY3Rpb24gKG5hbWUsIHBhdHRlcm4sIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgc3RhdGUgPSB7Li4ub3B0aW9ucywgbmFtZSwgcGF0dGVybn07XG5cbiAgcm91dGVyLnN0YXRlcy5wdXNoKHN0YXRlKTtcblxuICByZXR1cm4gc3RhdGU7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBzdGF0ZSBieSBuYW1lXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucm91dGVyLnJlbW92ZVN0YXRlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHRoaXMuc3RhdGVzLnNwbGljZShpLCAxKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBTZXQgdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICovXG5yb3V0ZXIuc2V0VXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB0aGlzLmhhc2hNb2RlPyB0aGlzLnNldEhhc2hVcmwodXJsKTogdGhpcy5zZXRIaXN0b3J5VXJsKHVybCk7XG59O1xuXG4vKipcbiAqIFNldCB1cmwgdXNpbmcgaGlzdG9yeVxuICpcbiAqIEBwYXJhbSB1cmxcbiAqL1xucm91dGVyLnNldEhpc3RvcnlVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCAnJywgdXJsKTtcbn07XG5cbi8qKlxuICogU2V0IHVybCB1c2luZyBoYXNoXG4gKlxuICogQHBhcmFtIHVybFxuICovXG5yb3V0ZXIuc2V0SGFzaFVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIycgKyAodXJsIHx8ICcvJyk7XG59O1xuXG4vKipcbiAqIEdldCB1cmxcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuZ2V0VXJsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5oYXNoTW9kZSA/IHRoaXMuZ2V0SGFzaFVybCgpIDogdGhpcy5nZXRIaXN0b3J5VXJsKCk7XG59O1xuXG4vKipcbiAqIEdldCB1cmwgdXNpbmcgaGlzdG9yeVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRIaXN0b3J5VXJsID0gZnVuY3Rpb24gKCkge1xuICBpZih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09ICcvJykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoICsgd2luZG93LmxvY2F0aW9uLmhhc2g7XG59O1xuXG4vKipcbiAqIEdldCB1cmwgdXNpbmcgaGFzaFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRIYXNoVXJsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgvXiMvLCAnJyk7XG59O1xuXG4vKipcbiAqIEdldCBxdWVyeSBwYXJhbXNcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0VXJsUXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuaGFzaE1vZGUgPyB0aGlzLmdldEhhc2hVcmxRdWVyeSgpIDogdGhpcy5nZXRIaXN0b3J5VXJsUXVlcnkoKTtcbn07XG5cbi8qKlxuICogR2V0IHF1ZXJ5IHBhcmFtcyB1c2luZyBoaXN0b3J5XG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldEhpc3RvcnlVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcmVxdWVzdC5wYXJhbXNGcm9tUXVlcnkod2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpKTtcbn07XG5cbi8qKlxuICogR2V0IHF1ZXJ5IHBhcmFtcyB1c2luZyBoYXNoXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldEhhc2hVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcmVxdWVzdC5wYXJhbXNGcm9tUXVlcnkoKHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCc/JylbMV0gfHwgJycpKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIHVybCBieSBkYXRhXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdXG4gKiBAcGFyYW0ge29iamVjdH0gW3F1ZXJ5XVxuICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoXVxuICovXG5yb3V0ZXIuY3JlYXRlU3RhdGVVcmwgPSBmdW5jdGlvbiAoc3RhdGUsIHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gJycpIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG5cbiAgbGV0IHVybCA9IHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2UodGhpcy5fX3BhcmFtUmVnZXgsIChtLCBmLCB2KSA9PiB7XG4gICAgcmV0dXJuIHBhcmFtc1t2XSB8fCAnJztcbiAgfSk7XG5cbiAgdXJsID0gdGhpcy5zcGxpdFNsYXNoZXModXJsKTtcblxuICBpZihPYmplY3Qua2V5cyhxdWVyeSkubGVuZ3RoKSB7XG4gICAgdXJsICs9ICc/JyArIHJlcXVlc3QucGFyYW1zVG9RdWVyeShxdWVyeSk7XG4gIH1cblxuICBoYXNoID0gKGhhc2ggfHwgJycpLnJlcGxhY2UoJyMnLCAnJyk7XG5cbiAgaWYoIXRoaXMuaGFzaE1vZGUgJiYgaGFzaCkge1xuICAgIHVybCArPSAnIycgKyBoYXNoO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCB1bm5lY2Vzc2FyeSBzbGFzaGVzIGZyb20gYW4gdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLnNwbGl0U2xhc2hlcyA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgcmV0dXJuIHVybC5yZXBsYWNlKC9bXFwvXSsvZywgJy8nKTtcbn07XG5cbi8qKlxuICogQ2xlYXIgYWxsIHJvdXRlciBkZXBlbmRlbmNpZXNcbiAqL1xucm91dGVyLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIpO1xufTtcblxuLyoqXG4gKiBHZXQgc3RhdGUgdXJsIGNvbnRlbnRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0UGF0dGVybkNvbnRlbnQgPSBmdW5jdGlvbiAoc3RhdGUsIHVybCkge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcblxuICBsZXQga2V5cyA9IFtdO1xuICBsZXQgaSA9IDA7XG4gIGxldCBwYXJhbXMgPSB7fTtcblxuICB1cmwgPSB1cmwuc3BsaXQoJz8nKVswXTtcbiAgdXJsID0gdXJsLnNwbGl0KCcjJylbMF07XG5cbiAgbGV0IHVybFBhdHRlcm4gPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAobSwgZiwgdikgPT4ge1xuICAgIGtleXMucHVzaCh2KTtcblxuICAgIHJldHVybiAnKFteXFxcXC9dKiknO1xuICB9KTtcblxuICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKHVybFBhdHRlcm4pO1xuICBsZXQgaXNJbmNsdWRlZCA9IHVybC5tYXRjaChyZWdleCk7XG5cbiAgaWYgKCFpc0luY2x1ZGVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB1cmwucmVwbGFjZShyZWdleCwgKG0sIHYpID0+IHtcbiAgICB2ICYmIChwYXJhbXNba2V5c1tpXV0gPSB2KTtcbiAgICBpKys7XG4gIH0pO1xuXG4gIHJldHVybiB7IHBhcmFtcyB9O1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgc3RhdGUgaXMgYWN0aXZlIG5vd1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5jbHVkZXNcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaXNBY3RpdmVTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlLCBpbmNsdWRlcyA9IGZhbHNlKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuXG4gIGxldCB1cmwgPSB0aGlzLnNwbGl0U2xhc2hlcyh0aGlzLmdldFVybCgpLnNwbGl0KCc/JylbMF0gKyAnLycpO1xuICBsZXQgdXJsUGF0dGVybiA9IHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2UodGhpcy5fX3BhcmFtUmVnZXgsICcoW15cXFxcL10qKScpO1xuICBsZXQgc3RyID0gaW5jbHVkZXM/IHVybFBhdHRlcm46IHRoaXMuc3BsaXRTbGFzaGVzKCdeJyArIHVybFBhdHRlcm4gKyAnXFwvJCcpO1xuICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKHN0cik7XG5cbiAgcmV0dXJuIHJlZ2V4LnRlc3QodXJsKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIGN1cnJlbnQgdXJsIGluY2x1ZGVzIGEgc3RhdGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmluQWN0aXZlU3RhdGUgPSBmdW5jdGlvbihzdGF0ZSkge1xuICByZXR1cm4gcm91dGVyLmlzQWN0aXZlU3RhdGUoc3RhdGUsIHRydWUpO1xufTtcblxuLyoqXG4gKiBHZXQgcm91dGUgY29tcG9uZW50IGJ5IGxldmVsXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxldmVsXG4gKi9cbnJvdXRlci5nZXRSb3V0ZSA9IGZ1bmN0aW9uIChsZXZlbCkge1xuICBsZXQgaSA9IDA7XG5cbiAgbGV0IGZpbmQgPSAoZWwpID0+IHtcbiAgICBsZXQgcm91dGUgPSBlbC5jaGlsZCh0aGlzLl9fcm91dGVTZWxlY3Rvcik7XG5cbiAgICBpZiAoIXJvdXRlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoaSA9PSBsZXZlbCkge1xuICAgICAgcmV0dXJuIHJvdXRlO1xuICAgIH1cblxuICAgIGkrKztcblxuICAgIHJldHVybiBmaW5kKHJvdXRlKTtcbiAgfTtcblxuICByZXR1cm4gZmluZChBa2lsaS5yb290KTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBmaXJzdCBtYXRjaFxuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGFyclxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge29iamVjdHxudWxsfVxuICovXG5yb3V0ZXIuZ2V0QXJyYXlQYXR0ZXJuQ29udGVudCA9IGZ1bmN0aW9uIChhcnIsIHVybCkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSBhcnJbaV07XG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldFBhdHRlcm5Db250ZW50KHN0YXRlLCB1cmwpO1xuXG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge3N0YXRlOiBzdGF0ZSwgLi4uY29udGVudH07XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogR2V0IHN0YXRlcyBieSBsZXZlbFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZXZlbFxuICogQHJldHVybnMge0FycmF5fVxuICovXG5yb3V0ZXIuZ2V0U3RhdGVzQnlMZXZlbCA9IGZ1bmN0aW9uIChsZXZlbCkge1xuICBsZXQgc3RhdGVzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZS5sZXZlbCA8IGxldmVsKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc3RhdGUubGV2ZWwgPiBsZXZlbCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgc3RhdGVzLnB1c2goc3RhdGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlcztcbn07XG5cbi8qKlxuICogQ2hhbmdlIHN0YXRlXG4gKi9cbnJvdXRlci5jaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYodGhpcy5fX2Rpc2FibGVDaGFuZ2UpIHtcbiAgICBkZWxldGUgdGhpcy5fX2Rpc2FibGVDaGFuZ2U7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgdXJsID0gdGhpcy5nZXRVcmwoKTtcbiAgbGV0IGhhc2ggPSB0aGlzLmhhc2hNb2RlPyAnJzogd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTtcbiAgbGV0IHF1ZXJ5ID0gdGhpcy5nZXRVcmxRdWVyeSgpO1xuICBsZXQgcHJldlRyYW5zaXRpb24gPSByb3V0ZXIudHJhbnNpdGlvbiB8fCBudWxsO1xuICBsZXQgdHJhbnNpdGlvbiA9IHJvdXRlci50cmFuc2l0aW9uID0gbmV3IFRyYW5zaXRpb24odXJsLCBxdWVyeSwgaGFzaCwgcHJldlRyYW5zaXRpb24pO1xuICBsZXQgbGV2ZWwgPSAwO1xuXG4gIGxldCBuZXh0ID0gKHN0YXRlcywgb25FbmQpID0+IHtcbiAgICBpZiAoIXN0YXRlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBvbkVuZCAmJiBvbkVuZCgpO1xuICAgIH1cblxuICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRBcnJheVBhdHRlcm5Db250ZW50KHN0YXRlcywgdXJsKTtcblxuICAgIGlmICghY29udGVudCkge1xuICAgICAgcmV0dXJuIG9uRW5kICYmIG9uRW5kKCk7XG4gICAgfVxuXG4gICAgbGV0IHN0YXRlID0gY29udGVudC5zdGF0ZTtcbiAgICBsZXQgcGFyYW1zID0gY29udGVudC5wYXJhbXM7XG4gICAgbGV0IHJvdXRlID0gc3RhdGUuYWJzdHJhY3Q/IG51bGw6IHRoaXMuZ2V0Um91dGUoc3RhdGUubGV2ZWwpO1xuXG4gICAgaWYgKCFyb3V0ZSAmJiAhc3RhdGUuYWJzdHJhY3QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvciAoYE5vdCBmb3VuZCByb3V0ZSBjb21wb25lbnQgZm9yIHN0YXRlIFwiJHtzdGF0ZS5uYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgdHJhbnNpdGlvbi5zZXRQYXRoKHsgc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gsIGNvbXBvbmVudDogcm91dGUsIGxvYWRlZDogdHJ1ZSB9KTtcbiAgICBsZXZlbCsrO1xuXG4gICAgbGV0IGhhc1N0YXRlID0gcHJldlRyYW5zaXRpb24gJiYgcHJldlRyYW5zaXRpb24uaGFzU3RhdGUoc3RhdGUpO1xuICAgIGxldCBpc0RpZmZlcmVudCA9IHRydWU7XG5cbiAgICBpZihoYXNTdGF0ZSkge1xuICAgICAgbGV0IHJvdXRlID0gcHJldlRyYW5zaXRpb24uZ2V0Um91dGUoc3RhdGUpO1xuICAgICAgbGV0IHByZXYgPSB7IHBhcmFtczogcm91dGUucGFyYW1zLCBxdWVyeTogcm91dGUucXVlcnksIGhhc2g6IHJvdXRlLmhhc2ggfTtcbiAgICAgIGxldCBjdXJyZW50ID0geyBwYXJhbXMsIHF1ZXJ5LCBoYXNoIH07XG5cbiAgICAgIGlzRGlmZmVyZW50ID0gIXV0aWxzLmNvbXBhcmUocHJldiwgY3VycmVudCk7XG4gICAgfVxuXG4gICAgbGV0IGlzSGlzdG9yeSA9IHRoaXMuX19vcHRpb25zLnJlbG9hZCA9PT0gdW5kZWZpbmVkICYmICFpc0RpZmZlcmVudDtcbiAgICBsZXQgaXNSZWxvYWQgPSB0aGlzLl9fb3B0aW9ucy5yZWxvYWQgPT09IGZhbHNlO1xuXG4gICAgaWYgKGhhc1N0YXRlICYmIChpc0hpc3RvcnkgfHwgaXNSZWxvYWQpKSB7XG4gICAgICB0cmFuc2l0aW9uLnBhdGgubG9hZGVkID0gZmFsc2U7XG5cbiAgICAgIHJldHVybiBuZXh0KHN0YXRlLmNoaWxkcmVuLCBvbkVuZCk7XG4gICAgfVxuXG4gICAgUHJvbWlzZS5yZXNvbHZlKHN0YXRlLmhhbmRsZXIodHJhbnNpdGlvbikpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmICh0cmFuc2l0aW9uLl9fY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBvbkVuZCAmJiBvbkVuZCgpO1xuICAgICAgfVxuXG4gICAgICB0cmFuc2l0aW9uLnBhdGguZGF0YSA9IGRhdGE7XG5cbiAgICAgIGlmKHN0YXRlLmFic3RyYWN0KSB7XG4gICAgICAgIHJldHVybiBuZXh0KHN0YXRlLmNoaWxkcmVuLCBvbkVuZCk7XG4gICAgICB9XG5cbiAgICAgIHJvdXRlLnNldFRyYW5zaXRpb24odHJhbnNpdGlvbikudGhlbigoKSA9PiB7XG4gICAgICAgIHRyYW5zaXRpb24ucGF0aC5sb2FkZWQgPSB0cnVlO1xuXG4gICAgICAgIG5leHQoc3RhdGUuY2hpbGRyZW4sIG9uRW5kKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIG5leHQodGhpcy5nZXRTdGF0ZXNCeUxldmVsKDApLCAoKSA9PiB7XG4gICAgaWYoIXRyYW5zaXRpb24ucm91dGVzLmxlbmd0aCkge1xuICAgICAgaWYodGhpcy5fX3JlZGlyZWN0cykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFdyb25nIHJvdXRlciBkZWZhdWx0IHVybCBcIiR7dGhpcy5kZWZhdWx0VXJsfVwiYCk7XG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMuZGVmYXVsdFVybCkge1xuICAgICAgICB0aGlzLmhhc2hNb2RlICYmIHRoaXMuZGVmYXVsdFVybCAhPSB0aGlzLmdldFVybCgpICYmICh0aGlzLl9fZGlzYWJsZUNoYW5nZSA9IHRydWUpO1xuICAgICAgICB0aGlzLnNldFVybCh0aGlzLmRlZmF1bHRVcmwpO1xuICAgICAgICB0aGlzLl9fcmVkaXJlY3RzKys7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlU3RhdGUoKTtcbiAgICAgIH1cblxuICAgICAgaWYoQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICBjb25zb2xlLndhcm4oYE5vdCBmb3VuZCBhIGRlZmF1bHQgcm91dGUuIFlvdSBjYW4gcGFzcyBpdCBpbiBcInJvdXRlci5pbml0KGRlZmF1bHRVcmwpXCIgZnVuY3Rpb25gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9fb3B0aW9ucyA9IHt9O1xuICAgIHRoaXMuX19yZWRpcmVjdHMgPSAwO1xuXG4gICAgaWYocHJldlRyYW5zaXRpb24pIHtcbiAgICAgIGZvcihsZXQgaSA9IGxldmVsLCBsID0gcHJldlRyYW5zaXRpb24ucm91dGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgcm91dGUgPSBwcmV2VHJhbnNpdGlvbi5yb3V0ZXNbaV07XG4gICAgICAgIHJvdXRlLmNvbXBvbmVudCAmJiByb3V0ZS5jb21wb25lbnQuZW1wdHkoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3N0YXRlLWNoYW5nZScsIHtcbiAgICAgIGRldGFpbDogdHJhbnNpdGlvblxuICAgIH0pKTtcbiAgfSk7XG59O1xuXG5yb3V0ZXIuVHJhbnNpdGlvbiA9IFRyYW5zaXRpb247XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2aWNlcy9yb3V0ZXIuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4uL3NlcnZpY2VzL3JvdXRlcic7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW3N0YXRlXTpub3QoW3VybF0pLFt1cmxdOm5vdChbc3RhdGVdKSc7XG4gIHN0YXRpYyBjb250cm9sQXR0cmlidXRlcyA9IHRydWU7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsncmVsb2FkJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2EnLCBBKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuc3RhdGUgPSBudWxsO1xuICAgIHRoaXMucGFyYW1zID0ge307XG4gICAgdGhpcy5xdWVyeSA9IHt9O1xuICAgIHRoaXMuaGFzaCA9ICcnO1xuICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuICAgIHRoaXMuaXNVcmwgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZSgndXJsJyk7XG4gIH1cblxuICBjaGFuZ2VkVXJsKHVybCkge1xuICAgIHRoaXMuc2V0VXJsKHVybCk7XG4gICAgdGhpcy5yZXNldEhyZWYodXJsKTtcbiAgfVxuXG4gIGNoYW5nZWRTdGF0ZShzdGF0ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICAgIHRoaXMucmVzZXRIcmVmKCk7XG4gIH1cblxuICBjaGFuZ2VkUGFyYW1zKHBhcmFtcykge1xuICAgIHRoaXMuc2V0UGFyYW1zKHBhcmFtcyk7XG4gICAgdGhpcy5yZXNldEhyZWYoKTtcbiAgfVxuXG4gIGNoYW5nZWRRdWVyeShxdWVyeSkge1xuICAgIHRoaXMuc2V0UXVlcnkocXVlcnkpO1xuICAgIHRoaXMucmVzZXRIcmVmKCk7XG4gIH1cblxuICBjaGFuZ2VkSGFzaChxdWVyeSkge1xuICAgIHRoaXMuc2V0SGFzaChxdWVyeSk7XG4gICAgdGhpcy5yZXNldEhyZWYoKTtcbiAgfVxuXG4gIGNoYW5nZWRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICB0aGlzLnNldFF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgY2hhbmdlZFJlbG9hZCh2YWwpIHtcbiAgICB0aGlzLnNldFJlbG9hZCh2YWwpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYodGhpcy5pc1VybCkge1xuICAgICAgICByb3V0ZXIubG9jYXRpb24odGhpcy5hdHRycy51cmwsIHRoaXMub3B0aW9ucyk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByb3V0ZXIuc3RhdGUodGhpcy5zdGF0ZS5uYW1lLCB0aGlzLnBhcmFtcywgdGhpcy5xdWVyeSwgdGhpcy5oYXNoLCAgdGhpcy5vcHRpb25zKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ3N0YXRlJykgJiYgdGhpcy5zZXRTdGF0ZSh0aGlzLmF0dHJzLnN0YXRlKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdwYXJhbXMnKSAmJiB0aGlzLnNldFBhcmFtcyh0aGlzLmF0dHJzLnBhcmFtcyk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgncXVlcnknKSAmJiB0aGlzLnNldFF1ZXJ5KHRoaXMuYXR0cnMucXVlcnkpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ2hhc2gnKSAmJiB0aGlzLnNldEhhc2godGhpcy5hdHRycy5oYXNoKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdvcHRpb25zJykgJiYgdGhpcy5zZXRPcHRpb25zKHRoaXMuYXR0cnMub3B0aW9ucyk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgncmVsb2FkJykgJiYgdGhpcy5zZXRSZWxvYWQodGhpcy5hdHRycy5yZWxvYWQpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ3VybCcpICYmIHRoaXMuc2V0VXJsKHRoaXMuYXR0cnMudXJsKTtcbiAgICB0aGlzLnJlc2V0SHJlZih0aGlzLnVybCk7XG4gIH1cblxuICBzZXRVcmwodXJsKSB7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gIH1cblxuICBzZXRTdGF0ZShuYW1lKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0U3RhdGUobmFtZSk7XG4gICAgdGhpcy5zY29wZS5pc0FjdGl2ZVN0YXRlID0gcm91dGVyLmlzQWN0aXZlU3RhdGUodGhpcy5zdGF0ZSk7XG4gICAgdGhpcy5zY29wZS5pbkFjdGl2ZVN0YXRlID0gcm91dGVyLmluQWN0aXZlU3RhdGUodGhpcy5zdGF0ZSk7XG4gIH1cblxuICBzZXRQYXJhbXMocGFyYW1zKSB7XG4gICAgaWYodHlwZW9mIHBhcmFtcyAhPSAnb2JqZWN0JyB8fCAhcGFyYW1zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBwYXJhbXMgbXVzdCBiZSBhbiBvYmplY3RgKTtcbiAgICB9XG5cbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgfVxuXG4gIHNldFF1ZXJ5KHF1ZXJ5KSB7XG4gICAgaWYodHlwZW9mIHF1ZXJ5ICE9ICdvYmplY3QnIHx8ICFxdWVyeSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgcXVlcnkgbXVzdCBiZSBhbiBvYmplY3RgKTtcbiAgICB9XG5cbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gIH1cblxuICBzZXRIYXNoKGhhc2gpIHtcbiAgICBpZih0eXBlb2YgaGFzaCAhPSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgaGFzaCBtdXN0IGJlIGEgc3RyaW5nYCk7XG4gICAgfVxuXG4gICAgdGhpcy5oYXNoID0gaGFzaDtcbiAgfVxuXG4gIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgIGlmKHR5cGVvZiBvcHRpb25zICE9ICdvYmplY3QnIHx8ICFvcHRpb25zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBvcHRpb25zIG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIHNldFJlbG9hZCh2YWwpIHtcbiAgICB0aGlzLm9wdGlvbnMucmVsb2FkID0gdmFsO1xuICB9XG5cbiAgZ2V0U3RhdGUobmFtZSkge1xuICAgIGxldCBzdGF0ZSA9IHJvdXRlci5nZXRTdGF0ZShuYW1lKTtcblxuICAgIGlmKCFzdGF0ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgcm91dGVyIHN0YXRlIHdpdGggbmFtZSBcIiR7bmFtZX1cImApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIHJlc2V0SHJlZih1cmwpIHtcbiAgICBpZih1cmwpIHtcbiAgICAgIHRoaXMuYXR0cnMuaHJlZiA9IHVybDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmF0dHJzLmhyZWYgPSByb3V0ZXIuY3JlYXRlU3RhdGVVcmwodGhpcy5zdGF0ZSwgdGhpcy5wYXJhbXMsIHRoaXMucXVlcnksIHRoaXMuaGFzaCk7XG4gICAgfVxuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2EuanMiLCJpbXBvcnQgVGV4dCBmcm9tICcuL3RleHQnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudCBleHRlbmRzIFRleHQge1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnY29udGVudCcsIENvbnRlbnQpO1xuICAgIEFraWxpLmFsaWFzKCdbY29udGVudGVkaXRhYmxlXScsICdjb250ZW50Jyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICBpZih0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnZWRpdGFibGUnKSkge1xuICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdlZGl0YWJsZScpKTtcbiAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKCdlZGl0YWJsZScpO1xuICAgIH1cblxuICAgIGlmKGdldENvbXB1dGVkU3R5bGUodGhpcy5lbCkuZGlzcGxheSA9PSAnaW5saW5lJykge1xuICAgICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlS2V5ID0gJ2lubmVySFRNTCc7XG4gIH1cblxuICBzZXRFbGVtZW50Rm9jdXMoKSB7XG4gICAgbGV0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICBsZXQgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuXG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKHRoaXMuZWwpO1xuICAgIHJhbmdlLmNvbGxhcHNlKGZhbHNlKTtcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvY29udGVudC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaSc7XG5cbi8qKlxuICogSWYgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElmIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gdHJ1ZTtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW2lzXSc7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsncmVjcmVhdGUnXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaWYnLCBJZik7XG4gICAgQWtpbGkuY29tcG9uZW50KCdlbHNlLWlmJywgRWxzZUlmKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2Vsc2UnLCBFbHNlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5zdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5yZWNyZWF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuaXNDb21waWxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGlzcGxheSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5lbCkuZGlzcGxheTtcbiAgfVxuXG4gIGNoYW5nZWRJcyh2YWx1ZSkge1xuICAgIHRoaXMuc3RhdGUgPSAhIXZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoKTtcbiAgfVxuXG4gIGNoYW5nZWRSZWNyZWF0ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0UmVjcmVhdGlvbih2YWx1ZSk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdyZWNyZWF0ZScpICYmIHRoaXMuc2V0UmVjcmVhdGlvbih0aGlzLmF0dHJzLnJlY3JlYXRlKTtcbiAgICB0aGlzLnN0YXRlID0gISF0aGlzLmF0dHJzLmlzO1xuICAgIHJldHVybiB0aGlzLnNldFN0YXRlKClcbiAgfVxuXG4gIHNldEFjdGl2aXR5KGFjdGl2ZSkge1xuICAgIHRoaXMuYWN0aXZlID0gYWN0aXZlO1xuICB9XG5cbiAgc2V0UmVjcmVhdGlvbihyZWNyZWF0ZSkge1xuICAgIHRoaXMucmVjcmVhdGUgPSByZWNyZWF0ZTtcbiAgfVxuXG4gIHNldFN0YXRlKCkge1xuICAgIGxldCByZXMgPSB0aGlzLmNvbXBpbGF0aW9uKCk7XG4gICAgbGV0IG5leHQgPSB0aGlzLmVsLm5leHRFbGVtZW50U2libGluZztcbiAgICBsZXQgcmVzdWx0O1xuXG4gICAgaWYoIW5leHQgfHwgIW5leHQubWF0Y2hlcygnZWxzZS1pZixlbHNlJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXh0Ll9fYWtpbGkuc2V0QWN0aXZpdHkodGhpcy5hY3RpdmUgfHwgdGhpcy5zdGF0ZSk7XG4gICAgbmV4dC5fX2FraWxpLnNldFJlY3JlYXRpb24odGhpcy5yZWNyZWF0ZSk7XG4gICAgcmVzdWx0ID0gbmV4dC5fX2FraWxpLnNldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcykudGhlbigoKSA9PiB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9XG5cbiAgY29tcGlsYXRpb24oKSB7XG4gICAgbGV0IHJlcztcblxuICAgIGlmKHRoaXMuc3RhdGUgJiYgIXRoaXMuYWN0aXZlKSB7XG4gICAgICBpZih0aGlzLnJlY3JlYXRlIHx8ICF0aGlzLmlzQ29tcGlsZWQpIHtcbiAgICAgICAgcmVzID0gdGhpcy5jb21waWxlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9IHRoaXMuZGlzcGxheTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZih0aGlzLnJlY3JlYXRlKSB7XG4gICAgICAgIHRoaXMuX19lbXB0eSgpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZighdGhpcy5pc0NvbXBpbGVkKSB7XG4gICAgICAgIHJlcyA9IHRoaXMuY29tcGlsZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgY29tcGlsZSgpIHtcbiAgICBsZXQgcmVzO1xuXG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XG4gICAgcmVzID0gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICB0aGlzLmlzQ29tcGlsZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxufTtcblxuLyoqXG4gKiBFbHNlSWYgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBFbHNlSWYgZXh0ZW5kcyBJZiB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIEVsc2UgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBFbHNlIGV4dGVuZHMgRWxzZUlmIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnaXMnLCAndHJ1ZScpO1xuICB9XG59XG5cbklmLkVsc2VJZiA9IEVsc2VJZjtcbklmLkVsc2UgPSBFbHNlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2lmLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3NlcnZpY2VzL3JlcXVlc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmNsdWRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gdHJ1ZTtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW3VybF0nO1xuICBzdGF0aWMgZXZlbnRzID0gWydsb2FkJywgJ2Vycm9yJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2luY2x1ZGUnLCBJbmNsdWRlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgfVxuXG4gIGNoYW5nZWRVcmwodXJsKSB7XG4gICAgdGhpcy5nZXRUZW1wbGF0ZSh1cmwpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGVtcGxhdGUodGhpcy5hdHRycy51cmwpO1xuICB9XG5cbiAgZ2V0VGVtcGxhdGUodXJsKSB7XG4gICAgdGhpcy5jb25uZWN0aW9uICYmIHRoaXMuY29ubmVjdGlvbi5hYm9ydCgpO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KHVybCwge1xuICAgICAgb25TdGFydDogKHhocikgPT4ge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSB4aHI7XG4gICAgICB9XG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgdGhpcy5lbXB0eSgpO1xuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XG4gICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCByZXMuZGF0YSk7XG5cbiAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uTG9hZC50cmlnZ2VyKCk7XG4gICAgICB9KTtcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICB0aGlzLmF0dHJzLm9uRXJyb3IudHJpZ2dlcihlcnIpO1xuICAgIH0pO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2luY2x1ZGUuanMiLCJpbXBvcnQgVGV4dCBmcm9tICcuL3RleHQnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBUZXh0IHtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydjaGVja2VkJ107XG4gIHN0YXRpYyBldmVudHMgPSBbJ2NoYW5nZSddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpbnB1dCcsIElucHV0KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXNDaGVja2JveCA9IHRoaXMuZWwudHlwZSA9PSAnY2hlY2tib3gnO1xuICAgIHRoaXMuaXNSYWRpbyA9IHRoaXMuZWwudHlwZSA9PSAncmFkaW8nO1xuICB9XG5cbiAgY2hhbmdlZENoZWNrZWQodmFsdWUpIHtcbiAgICB0aGlzLnNldENoZWNrZWQodmFsdWUpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICAodGhpcy5pc1JhZGlvIHx8IHRoaXMuaXNDaGVja2JveCkgJiYgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0Q2hlY2tlZCh0aGlzLmVsLmNoZWNrZWQsIGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc29sdmVkKCkge1xuICAgICh0aGlzLmlzQ2hlY2tib3ggfHwgdGhpcy5pc1JhZGlvKSAmJiB0aGlzLnNldENoZWNrZWQodGhpcy5hdHRycy5jaGVja2VkKTtcbiAgfVxuXG4gIHNldENoZWNrZWQodmFsdWUsIHRyaWdnZXIgPSB0cnVlKSB7XG4gICAgdmFsdWUgPSAhIXZhbHVlO1xuXG4gICAgaWYodGhpcy5wcmV2Q2hlY2tlZCA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmVsLmNoZWNrZWQgPSB0aGlzLnByZXZDaGVja2VkID0gdmFsdWU7XG4gICAgdHJpZ2dlciAmJiB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgdGhpcy5pc1JhZGlvICYmIHRoaXMuY2hhbmdlUmFkaW8oKTtcbiAgfVxuXG4gIHNldFZhbHVlKCkge1xuICAgIHN1cGVyLnNldFZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5pc1JhZGlvICYmIHRoaXMuYXR0cnMub25DaGFuZ2UuZGlzcGF0Y2goRXZlbnQsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgfVxuXG4gIGNoYW5nZVJhZGlvKCkge1xuICAgIGxldCBuYW1lID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICBsZXQgc2VsZWN0b3IgPSBgaW5wdXRbdHlwZT1yYWRpb11bbmFtZT0nJHtuYW1lfSddOm5vdChbc2NvcGU9JyR7dGhpcy5zY29wZS5fX25hbWV9J10pYDtcbiAgICBsZXQgY2hpbGRyZW4gPSBBa2lsaS5yb290LmNoaWxkcmVuKHNlbGVjdG9yKTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICByYWRpby5zZXRDaGVja2VkKHJhZGlvLmVsLmNoZWNrZWQpO1xuICAgIH1cbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pbnB1dC5qcyIsImltcG9ydCBGb3IsIHsgTG9vcCB9IGZyb20gJy4vZm9yJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaSc7XG5cbi8qKlxuICogVGhlIHJhZGlvIGdyb3VwIGNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWRpbyBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tuYW1lXSc7XG4gIHN0YXRpYyBldmVudHMgPSBbJ3JhZGlvJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JhZGlvJywgUmFkaW8pO1xuICAgIEFraWxpLmNvbXBvbmVudCgncmFkaW8tYnV0dG9uJywgUmFkaW9CdXR0b24pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pdGVyYWJsZSA9IHRoaXMuZWwuaGFzQXR0cmlidXRlKCdpbicpO1xuICB9XG5cbiAgY2hhbmdlZEluKHZhbHVlKSB7XG4gICAgc3VwZXIuY2hhbmdlZEluLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5zZXROYW1lcyh0aGlzLmF0dHJzLm5hbWUpO1xuICB9XG5cbiAgY2hhbmdlZE5hbWUobmFtZSkge1xuICAgIHRoaXMuc2V0TmFtZXMobmFtZSk7XG4gIH1cblxuICBjaGFuZ2VkVmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5pdGVyYWJsZSAmJiBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLmdldFJhZGlvVmFsdWUoKTtcblxuICAgICAgICBpZih2YWx1ZSA9PT0gdGhpcy5wcmV2VmFsdWUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByZXZWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmF0dHJzLm9uUmFkaW8udHJpZ2dlcih2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc29sdmVkKCkge1xuICAgIHRoaXMuc2V0TmFtZXModGhpcy5hdHRycy5uYW1lKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCd2YWx1ZScpICYmIHRoaXMuc2V0VmFsdWUodGhpcy5hdHRycy52YWx1ZSk7XG4gIH1cblxuICBzZXROYW1lcyhuYW1lKSB7XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbignaW5wdXRbdHlwZT1yYWRpb10nKTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNoaWxkcmVuW2ldLmVsLnNldEF0dHJpYnV0ZSgnbmFtZScsIG5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgaWYodmFsdWUgPT09IHRoaXMucHJldlZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHByZXYgPSB0aGlzLnByZXZWYWx1ZTtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuICAgIGxldCBpc1RydWUgPSBmYWxzZTtcblxuICAgIHRoaXMucHJldlZhbHVlID0gdmFsdWU7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcmFkaW8gPSBjaGlsZHJlbltpXTtcbiAgICAgIGxldCBpc1NlbGVjdGVkID0gcmFkaW8uZWwudmFsdWUgPT09IHZhbHVlO1xuXG4gICAgICBpc1NlbGVjdGVkICYmIChpc1RydWUgPSB0cnVlKTtcbiAgICAgIHJhZGlvLnNldENoZWNrZWQoaXNTZWxlY3RlZCk7XG4gICAgfVxuXG4gICAgaWYoIWlzVHJ1ZSkge1xuICAgICAgaWYodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgaWYocHJldiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmF0dHJzLm9uUmFkaW8udHJpZ2dlcih2YWx1ZSwgeyBidWJibGVzOiB0cnVlIH0pO1xuICB9XG5cbiAgZ2V0UmFkaW9WYWx1ZSgpIHtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJhZGlvID0gY2hpbGRyZW5baV07XG5cbiAgICAgIGlmKHJhZGlvLmVsLmNoZWNrZWQpIHtcbiAgICAgICAgcmV0dXJuIHJhZGlvLmVsLnZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIFRoZSByYWRpbyBpdGVtIGNvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgUmFkaW9CdXR0b24gZXh0ZW5kcyBMb29wIHtcbiAgc3RhdGljIHRlbXBsYXRlID0gYDxsYWJlbD48aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJcXCR7dGhpcy52YWx1ZX1cIi8+XFwke3RoaXMuX19jb250ZW50fTwvbGFiZWw+YDtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gIH1cblxuICBjaGFuZ2VkVmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnNldFJhZGlvVmFsdWUodmFsdWUpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5zZXRSYWRpb1ZhbHVlKHRoaXMuYXR0cnMudmFsdWUpO1xuICB9XG5cbiAgc2V0UmFkaW9WYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2NvcGUudmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuXG5SYWRpby5SYWRpb0J1dHRvbiA9IFJhZGlvQnV0dG9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3JhZGlvLmpzIiwiaW1wb3J0IEZvciwgeyBMb29wIH0gZnJvbSAnLi9mb3InO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnbXVsdGlwbGUnXTtcbiAgc3RhdGljIGV2ZW50cyA9IFsnY2hhbmdlJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3NlbGVjdCcsIFNlbGVjdCk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdvcHRpb24nLCBPcHRpb24pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pdGVyYXRvclRhZ05hbWUgPSAnb3B0aW9uJztcbiAgICB0aGlzLmlzTXVsdGlwbGUgPSBmYWxzZTtcbiAgfVxuXG4gIGNoYW5nZWRNdWx0aXBsZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0TXVsdGlwbGUodmFsdWUpO1xuICB9XG5cbiAgY2hhbmdlZENvbnRlbnQodmFsdWUpIHtcbiAgICB0aGlzLnNldENvbnRlbnQodmFsdWUpO1xuICB9XG5cbiAgY2hhbmdlZEluKHZhbHVlKSB7XG4gICAgc3VwZXIuY2hhbmdlZEluLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5kcmF3U2VsZWN0KCk7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5lbC5jb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIGNvbXBpbGVkKCkge1xuICAgIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgnbXVsdGlwbGUnKSAmJiB0aGlzLnNldE11bHRpcGxlKHRoaXMuYXR0cnMubXVsdGlwbGUpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ2NvbnRlbnQnKSAmJiB0aGlzLnNldENvbnRlbnQodGhpcy5hdHRycy5jb250ZW50KTtcbiAgICB0aGlzLmRyYXdTZWxlY3QoKTtcbiAgfVxuXG4gIHNldE11bHRpcGxlKHZhbHVlKSB7XG4gICAgdGhpcy5pc011bHRpcGxlID0gdmFsdWU7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKHV0aWxzLmNvcHkodGhpcy5lbC5jb250ZW50KSkpO1xuICB9XG5cbiAgc2V0Q29udGVudCh2YWx1ZSkge1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5mb3JtYXRWYWx1ZSh2YWx1ZSkpO1xuICB9XG5cbiAgZHJhd1NlbGVjdCgpIHtcbiAgICBsZXQgc2VsZWN0ZWQgPSBbXTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldLl9fYWtpbGk7XG4gICAgICBsZXQgc2VsZWN0aW9uID0gb3B0aW9uLmF0dHJzLnNlbGVjdGVkO1xuXG4gICAgICBpZihzZWxlY3Rpb24pIHtcbiAgICAgICAgc2VsZWN0ZWQucHVzaChvcHRpb24uZWwudmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBvcHRpb24uZWwuc2VsZWN0ZWQgPSBzZWxlY3Rpb247XG4gICAgfVxuXG4gICAgaWYoIXNlbGVjdGVkLmxlbmd0aCkge1xuICAgICAgdGhpcy5yZWRlZmluZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5mb3JtYXRWYWx1ZShzZWxlY3RlZCkpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUl0ZXJhdG9yRWxlbWVudCgpIHtcbiAgICBsZXQgZWwgPSBzdXBlci5jcmVhdGVJdGVyYXRvckVsZW1lbnQoKTtcblxuICAgIGlmKCFlbC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0aGlzLmh0bWwudHJpbSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBpbkNvbnRlbnQodmFsdWUpIHtcbiAgICBpZighdGhpcy5pc011bHRpcGxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbC5jb250ZW50ID09PSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5lbC5jb250ZW50LmluZGV4T2YodmFsdWUpICE9IC0xO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBpZighdGhpcy5pc011bHRpcGxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbC52YWx1ZTtcbiAgICB9XG5cbiAgICBsZXQgY29udGVudCA9IFtdO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgIGlmKG9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICBjb250ZW50LnB1c2gob3B0aW9uLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGZvcm1hdFZhbHVlKHZhbHVlKSB7XG4gICAgaWYodGhpcy5pc011bHRpcGxlKSB7XG4gICAgICBpZighQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCk/IFt2YWx1ZV06IFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUubGVuZ3RoPyB2YWx1ZVswXTogJyc7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJlZGVmaW5lKCkge1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5nZXRDb250ZW50KCkpO1xuICB9XG5cbiAgY2hhbmdlVmFsdWUodmFsdWUpIHtcbiAgICBpZih1dGlscy5jb21wYXJlKHRoaXMuZWwuY29udGVudCwgdmFsdWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuZWwudmFsdWUgPSB2YWx1ZVt2YWx1ZS5sZW5ndGggLSAxXTtcblxuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXTtcblxuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB2YWx1ZS5pbmRleE9mKG9wdGlvbi52YWx1ZSkgIT0gLTE7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5lbC52YWx1ZSA9IHZhbHVlO1xuXG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldO1xuXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IG9wdGlvbi52YWx1ZSA9PSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmVsLmNvbnRlbnQgPSB2YWx1ZTtcbiAgICB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjbGFzcyBPcHRpb24gZXh0ZW5kcyBMb29wIHtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydzZWxlY3RlZCddO1xuXG4gIF9fZ2V0UGFyc2VkRXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG4gICAgcmV0dXJuIHV0aWxzLmRlY29kZUh0bWxFbnRpdGllcyhleHByZXNzaW9uKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgY2hhbmdlZFNlbGVjdGVkKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTZWxlY3RlZCh2YWx1ZSk7XG4gIH1cblxuICBzZXRTZWxlY3RlZCh2YWx1ZSkge1xuICAgIHRoaXMuZWwuc2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICB0aGlzLmZvci5yZWRlZmluZSgpO1xuICB9XG59XG5cblNlbGVjdC5PcHRpb24gPSBPcHRpb247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvc2VsZWN0LmpzIiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0JztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRhcmVhIGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0ZXh0YXJlYScsIFRleHRhcmVhKTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90ZXh0YXJlYS5qcyIsImltcG9ydCBBa2lsaSBmcm9tICcuL2FraWxpJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJztcblxuLyoqXG4gKiBTY29wZSBjbGFzcy5cbiAqXG4gKiBBbGwgcHJvcGVydGllcyBzdGFydGluZyB3aXRoIF9fIHdpbGwgbm90IGJlIHdhdGNoaW5nLlxuICogWW91IGNhbiB1c2UgdGhlbSBmb3IgaW50ZXJuYWwgbWFuaXB1bGF0aW9ucy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcGUge1xuICBzdGF0aWMgbmVzdGVkV2F0Y2hpbmc7XG5cbiAgY29uc3RydWN0b3IobmFtZSwgZWwsIGNvbXBvbmVudCkge1xuICAgIHRoaXMuX19uYW1lID0gbmFtZTtcbiAgICB0aGlzLl9fZWwgPSBlbDtcbiAgICB0aGlzLl9fY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIGVsLnNldEF0dHJpYnV0ZSgnc2NvcGUnLCBuYW1lKTtcbiAgfVxuXG4gIGdldCBfX3V0aWxzKCkge1xuICAgIHJldHVybiB1dGlscztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYSBzY29wZSB2YWx1ZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3N0cmljdD1mYWxzZV0gLSB3aXRob3V0IG9iamVjdCBjb3B5aW5nXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0KGtleXMsIHZhbHVlLCBzdHJpY3QgPSBmYWxzZSkge1xuICAgIGlmKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cblxuICAgIEFraWxpLnVuaXNvbGF0ZWQoKCkgPT4ge1xuICAgICAgc3RyaWN0ICYmICh0aGlzLl9fY29tcG9uZW50Ll9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyA9IHRydWUpO1xuICAgICAgdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcywgKGxhc3QsIHZhbCkgPT4ge1xuICAgICAgICBpZighbGFzdCkge1xuICAgICAgICAgIHJldHVybiB2YWwgfHwge307XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHN0cmljdCAmJiAodGhpcy5fX2NvbXBvbmVudC5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgPSBmYWxzZSk7XG4gICAgfSk7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Njb3BlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==