/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
        (function () {
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
            (function () {
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
            })();
          } else if (isBooleanAttribute) {
            var element = node.__element;
            var attr = _utils2.default.toCamelCase(clearAttribute);

            value ? element.setAttribute(attr, 'true') : element.removeAttribute(attr);
          }
        })();
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
          var _ret = function () {
            var opt = [];

            Object.keys(obj[k]).map(function (key) {
              opt.push(ks + ('[' + key + ']') + eq + encodeURIComponent(obj[k][key]));
            });

            return {
              v: opt.join(sep)
            };
          }();

          if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
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
          _this2.attrs.onCheck.trigger(value, { bubbles: true });
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

      this.attrs.onCheck.trigger(value, { bubbles: true });
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
Radio.events = ['check'];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTJkODk1YTc1NDMwYjViYjgyNzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FraWxpLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JvdXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudC1lbWl0dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lmLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luY2x1ZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcmFkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHRhcmVhLmpzIiwid2VicGFjazovLy8uL3NyYy9zY29wZS5qcyJdLCJuYW1lcyI6WyJBa2lsaSIsIm9wdGlvbnMiLCJuZXN0ZWRXYXRjaGluZyIsInNob3dFdmFsdWF0aW9uRXJyb3JzIiwiZGVidWciLCJfX2luaXQiLCJfX2NvbXBvbmVudHMiLCJfX2FsaWFzZXMiLCJfX3Njb3BlcyIsIl9faXNvbGF0aW9uIiwiX19ldmFsdWF0aW9uIiwiaHRtbEJvb2xlYW5BdHRyaWJ1dGVzIiwiY29tcG9uZW50cyIsImRlY29yYXRvcnMiLCJzZXJ2aWNlcyIsImpvaW5CaW5kaW5nS2V5cyIsImtleXMiLCJtYXAiLCJlbCIsInRvU3RyaW5nIiwiam9pbiIsImFkZFNjb3BlIiwic2NvcGUiLCJfX25hbWUiLCJFcnJvciIsImdldFNjb3BlIiwibmFtZSIsInJlbW92ZVNjb3BlIiwiX19jb21wb25lbnQiLCJfX2VsIiwiX19wYXJlbnQiLCJnZXRBa2lsaVBhcmVudHMiLCJ0cmVlIiwiYXJyIiwiY2hlY2siLCJub2RlIiwicGFyZW50Tm9kZSIsIl9fYWtpbGkiLCJwdXNoIiwic2V0VGVtcGxhdGUiLCJ0ZW1wbGF0ZSIsInJlcGxhY2UiLCJpbm5lckhUTUwiLCJjcmVhdGVTY29wZU5hbWUiLCJjcmVhdGVSYW5kb21TdHJpbmciLCJzdHIiLCJpc29sYXRlIiwiZm4iLCJyZXMiLCJwcm9wcyIsImsiLCJoYXNPd25Qcm9wZXJ0eSIsImkiLCJsIiwicHJvcCIsImlzRGVsZXRlZCIsImNvbXBvbmVudCIsIl9fZXZhbHVhdGVCeUtleXMiLCJ1bmRlZmluZWQiLCJzZXRQcm9wZXJ0eUJ5S2V5cyIsImxhc3QiLCJ2YWwiLCJ2YWx1ZSIsImxlbmd0aCIsInVuZXZhbHVhdGVkIiwiZXZhbHVhdGlvbiIsInVuaXNvbGF0ZWQiLCJpbml0aWFsaXplIiwicmVjb21waWxlIiwiX19yZWNvbXBpbGUiLCJpc1Jvb3QiLCJfX3Jvb3QiLCJjb21wb25lbnROYW1lIiwidG9EYXNoQ2FzZSIsImdldEF0dHJpYnV0ZSIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsIl9Db21wb25lbnQiLCJDSEVDS19BTElBU0VTIiwic2VsZWN0b3JzIiwiT2JqZWN0Iiwic2VsZWN0b3JBbGwiLCJtYXRjaGVzIiwic2VsZWN0b3IiLCJDb21wb25lbnQiLCJfX2NhbmNlbGxlZCIsIl9fY3JlYXRlIiwiY29tcGlsZSIsInJvb3QiLCJlbGVtZW50cyIsIm5lc3RlZEluaXRpYWxpemluZyIsImNoaWxkcmVuIiwiY2hpbGQiLCJwIiwiX19jb21waWxlIiwiUHJvbWlzZSIsImFsbCIsInRoZW4iLCJyIiwiX19yZXNvbHZlIiwiY29uc29sZSIsIndhcm4iLCJ1bnJlZ2lzdGVyQ29tcG9uZW50IiwiYWxpYXMiLCJ1bnJlZ2lzdGVyQWxpYXMiLCJpc29sYXRlQXJyYXlQcm90b3R5cGUiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJrZXkiLCJvbGQiLCJfX2lzUHJveHkiLCJhcHBseSIsImlzb2xhdGVXaW5kb3dGdW5jdGlvbnMiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24iLCJzZXRJbnRlcnZhbCIsImNvbnN0cnVjdG9yIiwiaXNvbGF0ZUV2ZW50cyIsIm9sZEFkZEV2ZW50TGlzdGVuZXIiLCJFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9sZFJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib2xkUmVtb3ZlIiwicmVtb3ZlIiwiX19ha2lsaUxpc3RlbmVycyIsImFyZ3VtZW50cyIsImFyZ3MiLCJzbGljZSIsImNhbGwiLCJsaW5rIiwibGlzdGVuZXIiLCJzcGxpY2UiLCJwb3MiLCJjYWxsYmFjayIsImlzb2xhdGVGdW5jdGlvbiIsImNvbnRleHQiLCJvRm4iLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJpbml0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib25TdGF0ZSIsImNoYW5nZVN0YXRlIiwiZGVmaW5lIiwiRXZlbnRFbWl0dGVyIiwiU2NvcGUiLCJ1dGlscyIsIkEiLCJDb250ZW50IiwiRm9yIiwiSWYiLCJJbmNsdWRlIiwiSW5wdXQiLCJSYWRpbyIsIlJvdXRlIiwiU2VsZWN0IiwiVGV4dCIsIlRleHRhcmVhIiwicmVxdWVzdCIsInJvdXRlciIsImV2YWx1YXRpb25SZWdleCIsImV2YWx1YXRpb25SZWdleEdsb2JhbCIsIlJlZ0V4cCIsInNvdXJjZSIsInN5c3RlbUF0dHJpYnV0ZXMiLCJleHByZXNzaW9uIiwiZXZhbCIsIl9faXNTeXN0ZW1LZXkiLCJpbmRleE9mIiwiX19pc01vdW50ZWQiLCJfX2lzQ29tcGlsZWQiLCJfX2JpbmRpbmdzIiwiX19ldmFsdWF0aW5nRXZlbnQiLCJfX3JlY29tcGlsaW5nIiwiX19jb21waWxpbmciLCJfX2Rpc2FibGVQcm94eSIsIl9fY2hpbGRyZW4iLCJfX3BhcmVudHMiLCJfX2F0dHJzIiwiX19hdHRyaWJ1dGVPZiIsIl9fZXZhbHVhdGlvbkNvbXBvbmVudCIsIl9fc2V0RXZlbnRzIiwiX19zZXRQYXJlbnRzIiwiX19zZXRCb29sZWFuQXR0cmlidXRlcyIsIl9fZGVmaW5lQXR0cmlidXRlcyIsIl9faW5pdGlhbGl6ZSIsImNyZWF0ZWQiLCJhdHRycyIsImNvbnRyb2wiLCJfX2NvbnRyb2xBdHRyaWJ1dGVzIiwiX19ldmFsdWF0ZVBhcmVudCIsInJlc29sdmUiLCJuZXdQYXJlbnQiLCJfX2ludGVycG9sYXRlQXR0cmlidXRlcyIsImludGVycG9sYXRlIiwicGFyZW50Iiwibm9kZVR5cGUiLCJfX2luaXRpYWxpemVOb2RlIiwibm9kZVZhbHVlIiwiX19ldmFsdWF0ZSIsImNoaWxkTm9kZXMiLCJvbkNvbXBpbGVkIiwidHJpZ2dlciIsImNvbXBpbGVkIiwidGVtcGxhdGVVcmwiLCJnZXQiLCJfX2NvbnRlbnQiLCJkYXRhIiwib25SZWNvbXBpbGVkIiwicmVjb21waWxlZCIsIm9uUmVzb2x2ZWQiLCJyZXNvbHZlZCIsIl9fc2NvcGUiLCJfc2NvcGUiLCJhc3NpZ24iLCJjb250cm9sQXR0cmlidXRlcyIsImV2ZW50cyIsIl9fZXZlbnRzIiwiX19uZXN0ZWRXYXRjaGluZyIsIl9fbmVzdGVkT2JzZXJ2ZSIsIl9fb2JzZXJ2ZSIsImJvb2xlYW5BdHRyaWJ1dGVzIiwiY29uY2F0Iiwic2V0QXR0ciIsImF0dHJpYnV0ZXMiLCJub2RlTmFtZSIsImhhc0F0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImV2IiwidGVzdCIsInBhcmVudHMiLCJldmFsdWF0ZVBhcmVudCIsInRyYW5zcGFyZW50IiwiX19kZXRhY2giLCJfX2FkZENoaWxkIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3BlcnRpZXMiLCJnZXRQcm9wZXJ0eUJ5S2V5cyIsImNvbXBhcmVQcmV2aW91c1ZhbHVlIiwiY29weSIsIl9fZ2V0Tm9kZVByb3BlcnR5IiwiY291bnRlciIsImF0dHJpYnV0ZVZhbHVlIiwiX19leHByZXNzaW9uIiwibSIsImQiLCJldmFsdWF0ZSIsImV4aXN0aW5nQmluZGluZ3MiLCJwYXJzZVZhbHVlIiwiX19nZXRQYXJzZWRFeHByZXNzaW9uIiwibGlzdCIsInBhcnNlIiwiZXJyIiwibWVzc2FnZSIsInN0YWNrIiwiZXJyb3IiLCJoYXNoIiwia2V5c1N0cmluZyIsIm5vdEJpbmRpbmciLCJwYXJlbnRWYWx1ZSIsImV2YWxDb21wb25lbnQiLCJpc1Njb3BlUHJveHkiLCJiaW5kIiwiX19nZXRCb3VuZE5vZGUiLCJfX2JpbmQiLCJfX3NldE5vZGVQcm9wZXJ0eSIsIkF0dHIiLCJtYWtlQXR0cmlidXRlVmFsdWUiLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsImlzQm9vbGVhbkF0dHJpYnV0ZSIsIl9faGFzQmluZGluZ3MiLCJjbGVhckF0dHJpYnV0ZSIsIl9fYXR0cmlidXRlT24iLCJfX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIiLCJ0b0NhbWVsQ2FzZSIsIm9uQ2hhbmdlZCIsImNoYW5nZWQiLCJjYW1lbEtleSIsInRvVXBwZXJDYXNlIiwiZm5OYW1lIiwiZXZGbk5hbWUiLCJlbGVtZW50IiwiX19lbGVtZW50IiwiYXR0ciIsIndpdGhvdXRQYXJlbnRzIiwibGFzdFByb3BzIiwicHJvcHNMZW5ndGgiLCJlbEV2YWx1YXRlIiwiX19nZXRCaW5kIiwiX19kYXRhIiwiYyIsIl9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2luZyIsIl9fZXZhbHVhdGVOb2RlIiwiX2siLCJfcHJvcCIsInVuYmluZCIsIm9iaiIsIl9rZXlzIiwiX19rZXlzIiwiX2lzRGVsZXRlZCIsImhhc0tleSIsInNoaWZ0IiwiaGFzUHJvcGVydHlCeUtleXMiLCJfX2V2YWx1YXRlTmVzdGVkIiwiX191bmJpbmQiLCJkZWxldGVQcm9wZXJ0eUJ5S2V5cyIsImV4ZWMiLCJldmVudCIsIl9fY2hlY2tFdmFsdWF0aW9uIiwiYXR0cmlidXRlT2YiLCJldmVudE5hbWUiLCJfX2V2ZW50IiwiZW1pdHRlciIsIl9fZXZhbHVhdGVFdmVudCIsIl9faW5pdGlhbGl6ZWQiLCJfX2luaXRpYWxpemVBdHRyaWJ1dGUiLCJjaGFuZ2VBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGVOb2RlIiwiX191bmJpbmRCeU5vZGVzIiwiUHJveHkiLCJ0YXJnZXQiLCJzZXQiLCJhdHRyS2V5IiwiZGVsZXRlUHJvcGVydHkiLCJyZWFsVGFyZ2V0IiwiZ2V0T3duUHJvcGVydHlUYXJnZXQiLCJpc1BsYWluT2JqZWN0IiwiZ2V0RW51bWVyYWJsZVByb3BlcnR5VGFyZ2V0IiwiX19iaW5kTm9kZSIsIl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0Iiwic3RhcnRLZXlzIiwib2JzZXJ2ZSIsIl9fdGFyZ2V0IiwiX19kaXNhYmxlUHJveHlSZWRlZmluaW5nIiwiaXNvbGF0aW9uS2V5IiwicGFyZW50S2V5c1N0cmluZyIsIl9fZGVsZXRlTm9kZVByb3BlcnR5Iiwibm9kZXMiLCJfX2NsZWFyRW1wdHlCaW5kaW5ncyIsImNsZWFyIiwiX19yZW1vdmUiLCJvblJlbW92ZWQiLCJyZW1vdmVkIiwiX19zcGxpY2VDaGlsZCIsIl9fcmVtb3ZlQ2hpbGRyZW4iLCJmaW5kIiwiZmluZEFsbCIsImxldmVscyIsImxldmVsIiwiaXNBcnJheSIsInJpZ2h0IiwibGV2ZWxFbGVtZW50cyIsInJldmVyc2UiLCJfX2dldFBhcmVudCIsIl9fZ2V0Q2hpbGRyZW4iLCJfX2dldE5lYXIiLCJhcHBlbmRDaGlsZCIsIl9fZW1wdHkiLCJfX2Rlc3Ryb3kiLCJjbGFzcyIsImNsYXNzZXMiLCJzdHlsZSIsInN0eWxlcyIsImZpbHRlciIsImhhbmRsZXIiLCJpdGVtIiwibWF0Y2giLCJzb3J0Iiwib3JkZXIiLCJhIiwiYiIsIkRhdGUiLCJnZXRUaW1lIiwibmV4dCIsImFWIiwiYlYiLCJuZXN0ZWQiLCJjb21wYXJlIiwiY3VycmVudCIsInByZXZpb3VzIiwicHJldmlvdXNDb3B5IiwiY3VycmVudENvcHkiLCJlbmNvZGVIdG1sRW50aXRpZXMiLCJodG1sIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiZGVjb2RlSHRtbEVudGl0aWVzIiwib2JqZWN0IiwicmVkdWNlIiwibyIsImhhcyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwicHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsImNsZWFyU2NvcGVQcm94eSIsIk1hdGgiLCJyYW5kb20iLCJzdWJzdHJpbmciLCJSZXF1ZXN0IiwiYmFzZVVybCIsImRlZmF1bHRzIiwic3RhdHVzRXJyb3JzUGF0dGVybiIsInJlamVjdCIsInVybCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib25TdGFydCIsInRyYW5zZm9ybUJlZm9yZSIsIm9wZW4iLCJtZXRob2QiLCJ1c2VyIiwicGFzc3dvcmQiLCJoZWFkZXJzIiwianNvbiIsImJvZHkiLCJyZXNwb25zZVR5cGUiLCJmb3JtIiwiY3JlYXRlRm9ybURhdGEiLCJ0aW1lb3V0Iiwid2l0aENyZWRlbnRpYWxzIiwic2V0UmVxdWVzdEhlYWRlciIsInBhcmFtcyIsInBhcmFtc1RvUXVlcnkiLCJvblByb2dyZXNzIiwib25wcm9ncmVzcyIsIm9ubG9hZCIsInJlc3BvbnNlIiwidHJhbnNmb3JtQWZ0ZXIiLCJzdGF0dXMiLCJvbmVycm9yIiwic2VuZCIsInNlcCIsImVxIiwia3MiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ2Iiwib3B0IiwicXVlcnkiLCJhbXBzIiwic3BsaXQiLCJlcXMiLCJkZWNvZGVVUklDb21wb25lbnQiLCJuYW1lc3BhY2UiLCJmZCIsIkZvcm1EYXRhIiwiYXBwZW5kIiwidG9JU09TdHJpbmciLCJfX2luc3RhbmNlcyIsImFkZEluc3RhbmNlIiwiaW5zdGFuY2UiLCJyZW1vdmVJbnN0YW5jZSIsInZhbHVlS2V5Iiwic2V0VmFsdWUiLCJzZXRGb2N1cyIsImZvY3VzIiwic2V0RWxlbWVudEZvY3VzIiwic2V0RWxlbWVudEJsdXIiLCJibHVyIiwiTG9vcCIsIl9faXRlcmF0b3IiLCJfX2tleSIsIl9fdmFsdWUiLCJfX2luZGV4IiwiX19jb21wYXJpc29uVmFsdWUiLCJpdGVyYXRvcnMiLCJpdGVyYXRvclJlZiIsIml0ZXJhdG9yT3V0ZXJIVE1MIiwiZHJhdyIsImNyZWF0ZUl0ZXJhdG9yIiwiaW4iLCJtYXNrIiwibmV4dFNpYmxpbmciLCJvdXRlckhUTUwiLCJjb250ZW50IiwiZmlyc3RDaGlsZCIsImluZGV4IiwiZm91bmQiLCJfX2hhc2giLCJpdGVyYXRvciIsImNWYWx1ZSIsImNvbXBhcnNpb24iLCJjQ29weSIsInNldEluZGV4Iiwic2V0S2V5IiwiY3JlYXRlSXRlcmF0b3JFbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwid3JpdGFibGUiLCJlVmFsdWUiLCJpbmRleEtleXMiLCJsYXN0RWxlbWVudCIsImxvb3AiLCJpdGVyYXRlIiwiZm9yIiwiaXNGb3IiLCJjYW5jZWwiLCJfX3NldCIsInRyYW5zaXRpb24iLCJzdGF0ZSIsInBhdGgiLCJnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24iLCJfX3RyYW5zaXRpb24iLCJlbXB0eSIsImJ1YmJsZXMiLCJmb3JjZSIsImluRXZhbHVhdGluZyIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsIl9FdmVudCIsInR5cGUiLCJUcmFuc2l0aW9uIiwicm91dGVzIiwic3RhdGVzIiwicm91dGUiLCJoYXNoTW9kZSIsIl9fcmVkaXJlY3RzIiwiX19vcHRpb25zIiwiX19wYXJhbVJlZ2V4IiwiX19yb3V0ZVNlbGVjdG9yIiwiYWRkIiwicGF0dGVybiIsImRlZmF1bHRPcHRpb25zIiwiYWJzdHJhY3QiLCJzZXRTdGF0ZSIsImdldFN0YXRlIiwiY3JlYXRlU3RhdGVVcmwiLCJyZWxvYWQiLCJnZXRVcmwiLCJzZXRVcmwiLCJiYWNrIiwiaGlzdG9yeSIsImdvIiwiZm9yd2FyZCIsImxvY2F0aW9uIiwicHVzaFN0YXRlIiwiZGVmYXVsdFVybCIsIm9sZFB1c2hTdGF0ZSIsIl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIiLCJwb3AiLCJwYXJlbnROYW1lIiwiZnVsbFBhdHRlcm4iLCJzcGxpdFNsYXNoZXMiLCJyZW1vdmVTdGF0ZSIsInNldEhhc2hVcmwiLCJzZXRIaXN0b3J5VXJsIiwiZ2V0SGFzaFVybCIsImdldEhpc3RvcnlVcmwiLCJwYXRobmFtZSIsInNlYXJjaCIsImdldFVybFF1ZXJ5IiwiZ2V0SGFzaFVybFF1ZXJ5IiwiZ2V0SGlzdG9yeVVybFF1ZXJ5IiwicGFyYW1zRnJvbVF1ZXJ5IiwiZiIsImdldFBhdHRlcm5Db250ZW50IiwidXJsUGF0dGVybiIsInJlZ2V4IiwiaXNJbmNsdWRlZCIsImlzQWN0aXZlU3RhdGUiLCJpbmNsdWRlcyIsImluQWN0aXZlU3RhdGUiLCJnZXRSb3V0ZSIsImdldEFycmF5UGF0dGVybkNvbnRlbnQiLCJnZXRTdGF0ZXNCeUxldmVsIiwiX19kaXNhYmxlQ2hhbmdlIiwicHJldlRyYW5zaXRpb24iLCJvbkVuZCIsInNldFBhdGgiLCJsb2FkZWQiLCJoYXNTdGF0ZSIsImlzRGlmZmVyZW50IiwicHJldiIsImlzSGlzdG9yeSIsImlzUmVsb2FkIiwic2V0VHJhbnNpdGlvbiIsImlzVXJsIiwicmVzZXRIcmVmIiwic2V0UGFyYW1zIiwic2V0UXVlcnkiLCJzZXRIYXNoIiwic2V0UmVsb2FkIiwicHJldmVudERlZmF1bHQiLCJzZXRPcHRpb25zIiwiaHJlZiIsImdldENvbXB1dGVkU3R5bGUiLCJkaXNwbGF5IiwicmFuZ2UiLCJjcmVhdGVSYW5nZSIsInNlbGVjdGlvbiIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJFbHNlSWYiLCJFbHNlIiwiYWN0aXZlIiwicmVjcmVhdGUiLCJpc0NvbXBpbGVkIiwic2V0UmVjcmVhdGlvbiIsImlzIiwiY29tcGlsYXRpb24iLCJuZXh0RWxlbWVudFNpYmxpbmciLCJyZXN1bHQiLCJzZXRBY3Rpdml0eSIsImNvbm5lY3Rpb24iLCJnZXRUZW1wbGF0ZSIsImFib3J0Iiwib25Mb2FkIiwiY2F0Y2giLCJvbkVycm9yIiwiaXNDaGVja2JveCIsImlzUmFkaW8iLCJzZXRDaGVja2VkIiwiY2hlY2tlZCIsInByZXZDaGVja2VkIiwib25DaGFuZ2UiLCJkaXNwYXRjaCIsIkV2ZW50IiwiY2hhbmdlUmFkaW8iLCJyYWRpbyIsIlJhZGlvQnV0dG9uIiwiaXRlcmFibGUiLCJzZXROYW1lcyIsImdldFJhZGlvVmFsdWUiLCJwcmV2VmFsdWUiLCJvbkNoZWNrIiwiaXNUcnVlIiwiaXNTZWxlY3RlZCIsInNldFJhZGlvVmFsdWUiLCJPcHRpb24iLCJpdGVyYXRvclRhZ05hbWUiLCJpc011bHRpcGxlIiwic2V0TXVsdGlwbGUiLCJzZXRDb250ZW50IiwiZHJhd1NlbGVjdCIsImdldENvbnRlbnQiLCJtdWx0aXBsZSIsImNoYW5nZVZhbHVlIiwiZm9ybWF0VmFsdWUiLCJzZWxlY3RlZCIsIm9wdGlvbiIsInJlZGVmaW5lIiwidHJpbSIsInNldFNlbGVjdGVkIiwic3RyaWN0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMURBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFFBQVEsRUFBZCxDLENBeEJBOzs7Ozs7QUEwQkFBLE1BQU1DLE9BQU4sR0FBZ0I7QUFDZEMsa0JBQWdCLElBREY7QUFFZEMsd0JBQXNCLElBRlI7QUFHZEMsU0FBTztBQUhPLENBQWhCOztBQU1BSixNQUFNSyxNQUFOLEdBQWUsS0FBZjtBQUNBTCxNQUFNTSxZQUFOLEdBQXFCLEVBQXJCO0FBQ0FOLE1BQU1PLFNBQU4sR0FBa0IsRUFBbEI7QUFDQVAsTUFBTVEsUUFBTixHQUFpQixFQUFqQjtBQUNBUixNQUFNUyxXQUFOLEdBQW9CLElBQXBCO0FBQ0FULE1BQU1VLFlBQU4sR0FBcUIsSUFBckI7O0FBRUFWLE1BQU1XLHFCQUFOLEdBQThCLENBQzVCLFVBRDRCLEVBQ2hCLGlCQURnQixFQUNHLFFBREgsQ0FBOUI7O0FBSUFYLE1BQU1ZLFVBQU4sR0FBbUIsRUFBbkI7QUFDQVosTUFBTWEsVUFBTixHQUFtQixFQUFuQjtBQUNBYixNQUFNYyxRQUFOLEdBQWlCLEVBQWpCOztBQUVBOzs7OztBQUtBZCxNQUFNZSxlQUFOLEdBQXdCLFVBQVNDLElBQVQsRUFBZTtBQUNyQyxTQUFPQSxLQUFLQyxHQUFMLENBQVM7QUFBQSxXQUFNQyxHQUFHQyxRQUFILEVBQU47QUFBQSxHQUFULEVBQThCQyxJQUE5QixDQUFtQyxHQUFuQyxDQUFQO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7QUFLQXBCLE1BQU1xQixRQUFOLEdBQWlCLFVBQVNDLEtBQVQsRUFBZ0I7QUFDL0IsTUFBRyxLQUFLZCxRQUFMLENBQWNjLE1BQU1DLE1BQXBCLENBQUgsRUFBZ0M7QUFDOUIsVUFBTSxJQUFJQyxLQUFKLGlCQUF3QkYsTUFBTUMsTUFBOUIscUJBQU47QUFDRDs7QUFFRCxPQUFLZixRQUFMLENBQWNjLE1BQU1DLE1BQXBCLElBQThCRCxLQUE5QjtBQUNELENBTkQ7O0FBUUE7Ozs7OztBQU1BdEIsTUFBTXlCLFFBQU4sR0FBaUIsVUFBU0MsSUFBVCxFQUFlO0FBQzlCLFNBQU8sS0FBS2xCLFFBQUwsQ0FBY2tCLElBQWQsQ0FBUDtBQUNELENBRkQ7O0FBSUE7Ozs7O0FBS0ExQixNQUFNMkIsV0FBTixHQUFvQixVQUFTRCxJQUFULEVBQWU7QUFDakMsTUFBSUosUUFBUSxLQUFLZCxRQUFMLENBQWNrQixJQUFkLENBQVo7O0FBRUFKLFFBQU1NLFdBQU4sR0FBb0IsSUFBcEI7QUFDQU4sUUFBTU8sSUFBTixHQUFhLElBQWI7QUFDQVAsUUFBTVEsUUFBTixHQUFpQixJQUFqQjtBQUNBLE9BQUt0QixRQUFMLENBQWNrQixJQUFkLElBQXNCLElBQXRCO0FBQ0EsU0FBTyxLQUFLbEIsUUFBTCxDQUFja0IsSUFBZCxDQUFQO0FBQ0QsQ0FSRDs7QUFVQTs7Ozs7OztBQU9BMUIsTUFBTStCLGVBQU4sR0FBd0IsVUFBVWIsRUFBVixFQUEyQjtBQUFBLE1BQWJjLElBQWEsdUVBQU4sSUFBTTs7QUFDakQsTUFBSUMsTUFBTSxFQUFWOztBQUVBLFdBQVNDLEtBQVQsQ0FBZUMsSUFBZixFQUFxQjtBQUNuQixRQUFHLENBQUNBLEtBQUtDLFVBQVQsRUFBcUI7QUFDbkI7QUFDRDs7QUFFRCxRQUFHRCxLQUFLQyxVQUFMLENBQWdCQyxPQUFuQixFQUE0QjtBQUMxQkosVUFBSUssSUFBSixDQUFTSCxLQUFLQyxVQUFkOztBQUVBLFVBQUcsQ0FBQ0osSUFBSixFQUFVO0FBQ1I7QUFDRDtBQUNGOztBQUVERSxVQUFNQyxLQUFLQyxVQUFYO0FBQ0Q7O0FBRURGLFFBQU1oQixFQUFOOztBQUVBLFNBQU9jLE9BQU1DLEdBQU4sR0FBV0EsSUFBSSxDQUFKLENBQWxCO0FBQ0QsQ0F0QkQ7O0FBd0JBOzs7Ozs7Ozs7Ozs7QUFZQWpDLE1BQU11QyxXQUFOLEdBQW9CLFVBQVNyQixFQUFULEVBQWFzQixRQUFiLEVBQXVCO0FBQ3pDQSxhQUFXQSxTQUFTQyxPQUFULENBQWlCLHVDQUFqQixFQUEwRHZCLEdBQUd3QixTQUE3RCxDQUFYO0FBQ0F4QixLQUFHd0IsU0FBSCxHQUFlRixRQUFmOztBQUVBLFNBQU90QixHQUFHd0IsU0FBVjtBQUNELENBTEQ7O0FBT0E7Ozs7O0FBS0ExQyxNQUFNMkMsZUFBTixHQUF3QixZQUFXO0FBQUE7O0FBQ2pDLFNBQU8sZ0JBQU1DLGtCQUFOLENBQXlCLEVBQXpCLEVBQTZCLFVBQUNDLEdBQUQsRUFBUztBQUMzQyxXQUFPLENBQUMsQ0FBQyxNQUFLckMsUUFBTCxDQUFjcUMsR0FBZCxDQUFUO0FBQ0QsR0FGTSxDQUFQO0FBR0QsQ0FKRDs7QUFNQTs7Ozs7Ozs7OztBQVVBN0MsTUFBTThDLE9BQU4sR0FBZ0IsVUFBU0MsRUFBVCxFQUFhO0FBQzNCLE1BQUcsS0FBS3RDLFdBQVIsRUFBcUI7QUFDbkIsV0FBT3NDLElBQVA7QUFDRDs7QUFFRCxPQUFLdEMsV0FBTCxHQUFtQixFQUFuQjs7QUFFQSxNQUFJdUMsTUFBTUQsSUFBVjtBQUNBLE1BQUlFLFFBQVEsRUFBWjs7QUFFQSxPQUFJLElBQUlDLENBQVIsSUFBYSxLQUFLekMsV0FBbEIsRUFBK0I7QUFDN0IsUUFBRyxDQUFDLEtBQUtBLFdBQUwsQ0FBaUIwQyxjQUFqQixDQUFnQ0QsQ0FBaEMsQ0FBSixFQUF3QztBQUN0QztBQUNEOztBQUVERCxVQUFNWCxJQUFOLENBQVcsS0FBSzdCLFdBQUwsQ0FBaUJ5QyxDQUFqQixDQUFYO0FBQ0Q7O0FBRUQsT0FBS3pDLFdBQUwsR0FBbUIsSUFBbkI7O0FBbEIyQiw2QkFvQm5CMkMsQ0FwQm1CLEVBb0JaQyxDQXBCWTtBQXFCekIsUUFBSUMsT0FBT0wsTUFBTUcsQ0FBTixDQUFYOztBQUVBLFFBQUdFLEtBQUtDLFNBQVIsRUFBbUI7QUFDakJELFdBQUtFLFNBQUwsQ0FBZUMsZ0JBQWYsQ0FBZ0NILEtBQUt0QyxJQUFyQyxFQUEyQzBDLFNBQTNDLEVBQXNELElBQXREOztBQUVBO0FBQ0Q7O0FBRUQsb0JBQU1DLGlCQUFOLENBQXdCTCxLQUFLdEMsSUFBN0IsRUFBbUNzQyxLQUFLRSxTQUFMLENBQWVsQyxLQUFsRCxFQUF5RCxVQUFDc0MsSUFBRCxFQUFPQyxHQUFQLEVBQWU7QUFDdEUsVUFBRyxDQUFDRCxJQUFKLEVBQVU7QUFDUixlQUFPQyxPQUFPLEVBQWQ7QUFDRDs7QUFFRCxhQUFPUCxLQUFLUSxLQUFaO0FBQ0QsS0FORDtBQTdCeUI7O0FBb0IzQixPQUFJLElBQUlWLElBQUksQ0FBUixFQUFXQyxJQUFJSixNQUFNYyxNQUF6QixFQUFpQ1gsSUFBSUMsQ0FBckMsRUFBd0NELEdBQXhDLEVBQTZDO0FBQUEscUJBQXJDQSxDQUFxQyxFQUE5QkMsQ0FBOEI7O0FBQUEsNkJBTXpDO0FBVUg7O0FBRURKLFVBQVEsSUFBUjs7QUFFQSxTQUFPRCxHQUFQO0FBQ0QsQ0F6Q0Q7O0FBMkNBOzs7Ozs7QUFNQWhELE1BQU1nRSxXQUFOLEdBQW9CLFVBQVNqQixFQUFULEVBQWE7QUFDL0IsTUFBSWtCLGFBQWEsS0FBS3ZELFlBQXRCO0FBQ0EsTUFBSXNDLFlBQUo7O0FBRUEsT0FBS3RDLFlBQUwsR0FBb0IsSUFBcEI7QUFDQXNDLFFBQU1ELElBQU47QUFDQSxPQUFLckMsWUFBTCxHQUFvQnVELFVBQXBCOztBQUVBLFNBQU9qQixHQUFQO0FBQ0QsQ0FURDs7QUFXQTs7Ozs7O0FBTUFoRCxNQUFNa0UsVUFBTixHQUFtQixVQUFTbkIsRUFBVCxFQUFhO0FBQzlCLE1BQUlrQixhQUFhLEtBQUt4RCxXQUF0QjtBQUNBLE1BQUl1QyxZQUFKOztBQUVBLE9BQUt2QyxXQUFMLEdBQW1CLElBQW5CO0FBQ0F1QyxRQUFNRCxJQUFOO0FBQ0EsT0FBS3RDLFdBQUwsR0FBbUJ3RCxVQUFuQjs7QUFFQSxTQUFPakIsR0FBUDtBQUNELENBVEQ7O0FBV0E7Ozs7Ozs7QUFPQWhELE1BQU1tRSxVQUFOLEdBQW1CLFVBQVNqRCxFQUFULEVBQTJCO0FBQUEsTUFBZGpCLE9BQWMsdUVBQUosRUFBSTs7QUFDNUMsTUFBSW1FLFlBQVluRSxRQUFRbUUsU0FBeEI7QUFDQSxNQUFJWixZQUFZdEMsR0FBR21CLE9BQW5COztBQUVBLE1BQUdtQixTQUFILEVBQWM7QUFDWixRQUFHWSxTQUFILEVBQWM7QUFDWlosZ0JBQVVhLFdBQVY7O0FBRUEsYUFBT2IsU0FBUDtBQUNEOztBQUVEO0FBQ0Q7O0FBRUQsTUFBSWMsU0FBU3BELE9BQU8sS0FBS3FELE1BQXpCO0FBQ0EsTUFBSUMsZ0JBQWdCLGdCQUFNQyxVQUFOLENBQWlCdkQsR0FBR3dELFlBQUgsQ0FBZ0IsV0FBaEIsS0FBZ0N4RCxHQUFHeUQsT0FBSCxDQUFXQyxXQUFYLEVBQWpELENBQXBCO0FBQ0EsTUFBSUMsYUFBYSxLQUFLdkUsWUFBTCxDQUFrQmtFLGFBQWxCLENBQWpCOztBQUVBTSxpQkFBZSxJQUFHLENBQUNELFVBQUosRUFBZ0I7QUFDN0IsUUFBSUUsWUFBWUMsT0FBT2hFLElBQVAsQ0FBWSxLQUFLVCxTQUFqQixDQUFoQjs7QUFFQSxRQUFHLENBQUN3RSxVQUFVaEIsTUFBZCxFQUFzQjtBQUNwQixZQUFNZSxhQUFOO0FBQ0Q7O0FBRUQsUUFBSUcsY0FBY0YsVUFBVTNELElBQVYsQ0FBZSxHQUFmLENBQWxCOztBQUVBLFFBQUcsQ0FBQ0YsR0FBR2dFLE9BQUgsQ0FBV0QsV0FBWCxDQUFKLEVBQTZCO0FBQzNCLFlBQU1ILGFBQU47QUFDRDs7QUFFRCxTQUFJLElBQUlLLFFBQVIsSUFBb0IsS0FBSzVFLFNBQXpCLEVBQW9DO0FBQ2xDLFVBQUcsQ0FBQyxLQUFLQSxTQUFMLENBQWU0QyxjQUFmLENBQThCZ0MsUUFBOUIsQ0FBSixFQUE2QztBQUMzQztBQUNEOztBQUVELFVBQUdqRSxHQUFHZ0UsT0FBSCxDQUFXQyxRQUFYLENBQUgsRUFBeUI7QUFDdkJOLHFCQUFhLEtBQUt2RSxZQUFMLENBQWtCLEtBQUtDLFNBQUwsQ0FBZTRFLFFBQWYsQ0FBbEIsQ0FBYjtBQUNBO0FBQ0Q7QUFDRjtBQUNGOztBQUVELE1BQUcsQ0FBQ04sVUFBRCxJQUFlLENBQUNQLE1BQW5CLEVBQTJCO0FBQ3pCO0FBQ0Q7O0FBRUQsTUFBRyxDQUFDTyxVQUFKLEVBQWdCO0FBQ2RBLGlCQUFhLEtBQUtPLFNBQWxCO0FBQ0Q7O0FBRUQsTUFBR1AsV0FBV0ssT0FBWCxJQUFzQixDQUFDaEUsR0FBR2dFLE9BQUgsQ0FBV0wsV0FBV0ssT0FBdEIsQ0FBMUIsRUFBMEQ7QUFDeEQ7QUFDRDs7QUFFRDFCLGNBQVksSUFBSXFCLFVBQUosQ0FBZTNELEVBQWYsRUFBbUIsRUFBbkIsQ0FBWjs7QUFFQSxNQUFHc0MsVUFBVTZCLFdBQWIsRUFBMEI7QUFDeEI7QUFDRDs7QUFFRDdCLFlBQVU4QixRQUFWOztBQUVBLFNBQU85QixTQUFQO0FBQ0QsQ0FoRUQ7O0FBa0VBOzs7Ozs7O0FBT0F4RCxNQUFNdUYsT0FBTixHQUFnQixVQUFTQyxJQUFULEVBQStDO0FBQUE7O0FBQUEsTUFBaEN2RixPQUFnQyx1RUFBdEIsRUFBRW1FLFdBQVcsS0FBYixFQUFzQjs7QUFDN0QsTUFBSXFCLFdBQVcsRUFBZjs7QUFFQSxNQUFJQyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDeEUsRUFBRCxFQUFRO0FBQy9CLFFBQUlzQyxZQUFZLE9BQUtXLFVBQUwsQ0FBZ0JqRCxFQUFoQixFQUFvQmpCLE9BQXBCLENBQWhCO0FBQ0EsUUFBSTBGLFdBQVd6RSxHQUFHeUUsUUFBbEI7O0FBRUFuQyxpQkFBYWlDLFNBQVNuRCxJQUFULENBQWNrQixTQUFkLENBQWI7O0FBRUEsU0FBSSxJQUFJSixJQUFJLENBQVIsRUFBV0MsSUFBSXNDLFNBQVM1QixNQUE1QixFQUFvQ1gsSUFBSUMsQ0FBeEMsRUFBMkNELEdBQTNDLEVBQWdEO0FBQzlDLFVBQUl3QyxRQUFRRCxTQUFTdkMsQ0FBVCxDQUFaOztBQUVBc0MseUJBQW1CRSxLQUFuQjtBQUNEO0FBQ0YsR0FYRDs7QUFhQUYscUJBQW1CRixJQUFuQjs7QUFFQSxNQUFJSyxJQUFJLEVBQVI7O0FBRUEsT0FBSSxJQUFJekMsSUFBSSxDQUFSLEVBQVdDLElBQUlvQyxTQUFTMUIsTUFBNUIsRUFBb0NYLElBQUlDLENBQXhDLEVBQTJDRCxHQUEzQyxFQUFnRDtBQUM5QyxRQUFJSSxZQUFZaUMsU0FBU3JDLENBQVQsQ0FBaEI7O0FBRUF5QyxNQUFFdkQsSUFBRixDQUFPa0IsVUFBVXNDLFNBQVYsRUFBUDtBQUNEOztBQUVELFNBQU9DLFFBQVFDLEdBQVIsQ0FBWUgsQ0FBWixFQUFlSSxJQUFmLENBQW9CLFlBQU07QUFDL0IsUUFBSUMsSUFBSSxFQUFSOztBQUVBLFNBQUksSUFBSTlDLEtBQUlxQyxTQUFTMUIsTUFBVCxHQUFrQixDQUE5QixFQUFpQ1gsTUFBSyxDQUF0QyxFQUF5Q0EsSUFBekMsRUFBOEM7QUFDNUMsVUFBSUksYUFBWWlDLFNBQVNyQyxFQUFULENBQWhCOztBQUVBOEMsUUFBRTVELElBQUYsQ0FBT2tCLFdBQVUyQyxTQUFWLEVBQVA7QUFDRDs7QUFFRCxXQUFPSixRQUFRQyxHQUFSLENBQVlFLENBQVosQ0FBUDtBQUNELEdBVk0sQ0FBUDtBQVdELENBckNEOztBQXVDQTs7Ozs7O0FBTUFsRyxNQUFNd0QsU0FBTixHQUFrQixVQUFTOUIsSUFBVCxFQUFlcUIsRUFBZixFQUFtQjtBQUNuQ3JCLFNBQU9BLEtBQUtrRCxXQUFMLEVBQVA7O0FBRUEsTUFBRyxDQUFDN0IsRUFBSixFQUFRO0FBQ04sV0FBTyxLQUFLekMsWUFBTCxDQUFrQm9CLElBQWxCLEtBQTJCLElBQWxDO0FBQ0Q7O0FBRUQsTUFBRyxLQUFLcEIsWUFBTCxDQUFrQm9CLElBQWxCLEtBQTJCMUIsTUFBTUMsT0FBTixDQUFjRyxLQUE1QyxFQUFtRDtBQUNqRGdHLFlBQVFDLElBQVIsZ0JBQTBCM0UsSUFBMUI7QUFDRDs7QUFFRCxPQUFLcEIsWUFBTCxDQUFrQm9CLElBQWxCLElBQTBCcUIsRUFBMUI7QUFDRCxDQVpEOztBQWNBOzs7OztBQUtBL0MsTUFBTXNHLG1CQUFOLEdBQTRCLFVBQVM1RSxJQUFULEVBQWU7QUFDekMsU0FBTyxLQUFLcEIsWUFBTCxDQUFrQm9CLElBQWxCLENBQVA7QUFDRCxDQUZEOztBQUlBOzs7Ozs7QUFNQTFCLE1BQU11RyxLQUFOLEdBQWMsVUFBU3BCLFFBQVQsRUFBdUM7QUFBQSxNQUFwQlgsYUFBb0IsdUVBQUosRUFBSTs7QUFDbkRBLGtCQUFnQkEsY0FBY0ksV0FBZCxFQUFoQjs7QUFFQSxNQUFHLENBQUNKLGFBQUosRUFBbUI7QUFDakIsV0FBTyxLQUFLakUsU0FBTCxDQUFlNEUsUUFBZixLQUE0QixJQUFuQztBQUNEOztBQUVELE1BQUcsS0FBSzVFLFNBQUwsQ0FBZTRFLFFBQWYsS0FBNEJuRixNQUFNQyxPQUFOLENBQWNHLEtBQTdDLEVBQW9EO0FBQ2xEZ0csWUFBUUMsSUFBUiwwQkFBb0NsQixRQUFwQztBQUNEOztBQUVELE9BQUs1RSxTQUFMLENBQWU0RSxRQUFmLElBQTJCWCxhQUEzQjtBQUNELENBWkQ7O0FBY0E7Ozs7O0FBS0F4RSxNQUFNd0csZUFBTixHQUF3QixVQUFTckIsUUFBVCxFQUFtQjtBQUN6QyxTQUFPLEtBQUs3RSxZQUFMLENBQWtCNkUsUUFBbEIsQ0FBUDtBQUNELENBRkQ7O0FBSUE7OztBQUdBbkYsTUFBTXlHLHFCQUFOLEdBQThCLFlBQVc7QUFDdkMsTUFBSXpGLE9BQU9nRSxPQUFPMEIsbUJBQVAsQ0FBMkJDLE1BQU1DLFNBQWpDLENBQVg7O0FBRHVDLCtCQUcvQnhELENBSCtCLEVBR3hCQyxDQUh3QjtBQUlyQyxRQUFJd0QsTUFBTTdGLEtBQUtvQyxDQUFMLENBQVY7QUFDQSxRQUFJMEQsTUFBTUgsTUFBTUMsU0FBTixDQUFnQkMsR0FBaEIsQ0FBVjs7QUFFQSxRQUFHLE9BQU9DLEdBQVAsSUFBYyxVQUFkLElBQTRCRCxPQUFPLGFBQXRDLEVBQXFEO0FBQ25EO0FBQ0Q7O0FBRURGLFVBQU1DLFNBQU4sQ0FBZ0JDLEdBQWhCLElBQXVCLFlBQVc7QUFBQTtBQUFBOztBQUNoQyxhQUFPN0csTUFBTWdFLFdBQU4sQ0FBa0IsWUFBTTtBQUM3QixZQUFHLENBQUMsT0FBSytDLFNBQVQsRUFBb0I7QUFDbEIsaUJBQU9ELElBQUlFLEtBQUosb0JBQVA7QUFDRDs7QUFFRCxlQUFPaEgsTUFBTThDLE9BQU4sQ0FBYyxZQUFNO0FBQ3pCLGlCQUFPZ0UsSUFBSUUsS0FBSixvQkFBUDtBQUNELFNBRk0sQ0FBUDtBQUdELE9BUk0sQ0FBUDtBQVNELEtBVkQ7QUFYcUM7O0FBR3ZDLE9BQUksSUFBSTVELElBQUksQ0FBUixFQUFXQyxJQUFJckMsS0FBSytDLE1BQXhCLEVBQWdDWCxJQUFJQyxDQUFwQyxFQUF1Q0QsR0FBdkMsRUFBNEM7QUFBQSx1QkFBcENBLENBQW9DLEVBQTdCQyxDQUE2Qjs7QUFBQSw4QkFLeEM7QUFjSDtBQUNGLENBdkJEOztBQXlCQTs7O0FBR0FyRCxNQUFNaUgsc0JBQU4sR0FBK0IsWUFBVztBQUN4Q0MsU0FBT0MsVUFBUCxHQUFvQixLQUFLQyx1QkFBTCxDQUE2QkYsT0FBT0MsVUFBcEMsRUFBZ0QsQ0FBaEQsQ0FBcEI7QUFDQUQsU0FBT0csV0FBUCxHQUFxQixLQUFLRCx1QkFBTCxDQUE2QkYsT0FBT0csV0FBcEMsRUFBaUQsQ0FBakQsQ0FBckI7QUFDQUgsU0FBT25CLE9BQVAsS0FBbUJtQixPQUFPbkIsT0FBUCxDQUFldUIsV0FBZixHQUE2QixLQUFLRix1QkFBTCxDQUE2QkYsT0FBT25CLE9BQVAsQ0FBZXVCLFdBQTVDLEVBQTBELENBQTFELENBQWhEO0FBQ0QsQ0FKRDs7QUFNQTs7O0FBR0F0SCxNQUFNdUgsYUFBTixHQUFzQixZQUFXO0FBQy9CLE1BQUlDLHNCQUFzQkMsUUFBUWIsU0FBUixDQUFrQmMsZ0JBQTVDO0FBQ0EsTUFBSUMseUJBQXlCRixRQUFRYixTQUFSLENBQWtCZ0IsbUJBQS9DO0FBQ0EsTUFBSUMsWUFBWUosUUFBUWIsU0FBUixDQUFrQmtCLE1BQWxDOztBQUVBTCxVQUFRYixTQUFSLENBQWtCa0IsTUFBbEIsR0FBMkIsWUFBVztBQUNwQyxXQUFPLEtBQUtDLGdCQUFaOztBQUVBLFdBQU9GLFVBQVViLEtBQVYsQ0FBZ0IsSUFBaEIsRUFBc0JnQixTQUF0QixDQUFQO0FBQ0QsR0FKRDs7QUFNQVAsVUFBUWIsU0FBUixDQUFrQmMsZ0JBQWxCLEdBQXFDLFVBQVNoRyxJQUFULEVBQWVxQixFQUFmLEVBQW1CO0FBQ3RELFFBQUlrRixPQUFPLEdBQUdDLEtBQUgsQ0FBU0MsSUFBVCxDQUFjSCxTQUFkLENBQVg7O0FBRUEsUUFBRyxDQUFDLEtBQUtELGdCQUFULEVBQTJCO0FBQ3pCLFdBQUtBLGdCQUFMLEdBQXdCLEVBQXhCO0FBQ0Q7O0FBRUQsUUFBRyxDQUFDLEtBQUtBLGdCQUFMLENBQXNCckcsSUFBdEIsQ0FBSixFQUFpQztBQUMvQixXQUFLcUcsZ0JBQUwsQ0FBc0JyRyxJQUF0QixJQUE4QixFQUE5QjtBQUNEOztBQUVEdUcsU0FBSyxDQUFMLElBQVUsWUFBWTtBQUFBO0FBQUE7O0FBQ3BCLGFBQU9qSSxNQUFNZ0UsV0FBTixDQUFrQixZQUFNO0FBQzdCLGVBQU9oRSxNQUFNOEMsT0FBTixDQUFjLFlBQU07QUFDekIsaUJBQU9DLEdBQUdpRSxLQUFILHFCQUFQO0FBQ0QsU0FGTSxDQUFQO0FBR0QsT0FKTSxDQUFQO0FBS0QsS0FORDs7QUFRQSxTQUFLZSxnQkFBTCxDQUFzQnJHLElBQXRCLEVBQTRCWSxJQUE1QixDQUFpQztBQUMvQjhGLFlBQU1yRixFQUR5QjtBQUUvQkEsVUFBSWtGLEtBQUssQ0FBTDtBQUYyQixLQUFqQzs7QUFLQSxXQUFPVCxvQkFBb0JSLEtBQXBCLENBQTBCLElBQTFCLEVBQWdDaUIsSUFBaEMsQ0FBUDtBQUNELEdBekJEOztBQTJCQVIsVUFBUWIsU0FBUixDQUFrQmdCLG1CQUFsQixHQUF3QyxVQUFTbEcsSUFBVCxFQUFlcUIsRUFBZixFQUFtQjtBQUN6RCxRQUFHLENBQUMsS0FBS2dGLGdCQUFULEVBQTJCO0FBQ3pCLFdBQUtBLGdCQUFMLEdBQXdCLEVBQXhCO0FBQ0Q7O0FBRUQsUUFBRyxDQUFDLEtBQUtBLGdCQUFMLENBQXNCckcsSUFBdEIsQ0FBSixFQUFpQztBQUMvQixXQUFLcUcsZ0JBQUwsQ0FBc0JyRyxJQUF0QixJQUE4QixFQUE5QjtBQUNEOztBQUVELFNBQUksSUFBSTBCLElBQUksQ0FBUixFQUFXQyxJQUFJLEtBQUswRSxnQkFBTCxDQUFzQnJHLElBQXRCLEVBQTRCcUMsTUFBL0MsRUFBdURYLElBQUlDLENBQTNELEVBQThERCxHQUE5RCxFQUFtRTtBQUNqRSxVQUFJaUYsV0FBVyxLQUFLTixnQkFBTCxDQUFzQnJHLElBQXRCLEVBQTRCMEIsQ0FBNUIsQ0FBZjs7QUFFQSxVQUFHaUYsU0FBU0QsSUFBVCxLQUFrQnJGLEVBQXJCLEVBQXlCO0FBQ3ZCLGFBQUtnRixnQkFBTCxDQUFzQnJHLElBQXRCLEVBQTRCNEcsTUFBNUIsQ0FBbUNsRixDQUFuQyxFQUFzQyxDQUF0QztBQUNBQTtBQUNBQzs7QUFFQTtBQUNEO0FBQ0Y7O0FBRUQsUUFBRyxDQUFDLEtBQUswRSxnQkFBTCxDQUFzQnJHLElBQXRCLEVBQTRCcUMsTUFBaEMsRUFBd0M7QUFDdEMsYUFBTyxLQUFLZ0UsZ0JBQUwsQ0FBc0JyRyxJQUF0QixDQUFQO0FBQ0Q7O0FBRUQsV0FBT2lHLHVCQUF1QlgsS0FBdkIsQ0FBNkIsSUFBN0IsRUFBbUNnQixTQUFuQyxDQUFQO0FBQ0QsR0ExQkQ7QUEyQkQsQ0FqRUQ7O0FBbUVBOzs7Ozs7O0FBT0FoSSxNQUFNb0gsdUJBQU4sR0FBZ0MsVUFBU3JFLEVBQVQsRUFBMkI7QUFBQSxNQUFkd0YsR0FBYyx1RUFBUixNQUFROztBQUN6RCxTQUFPLFlBQVc7QUFDaEIsUUFBSU4sT0FBTyxHQUFHQyxLQUFILENBQVNDLElBQVQsQ0FBY0gsU0FBZCxDQUFYO0FBQ0EsUUFBSVEsV0FBV0QsT0FBTyxNQUFQLEdBQWVOLEtBQUtBLEtBQUtsRSxNQUFMLEdBQWMsQ0FBbkIsQ0FBZixHQUFzQ2tFLEtBQUtNLEdBQUwsQ0FBckQ7O0FBRUEsUUFBRyxPQUFPQyxRQUFQLElBQW1CLFVBQXRCLEVBQWtDO0FBQ2hDLGFBQU96RixHQUFHaUUsS0FBSCxDQUFTLElBQVQsRUFBZWdCLFNBQWYsQ0FBUDtBQUNEOztBQUVEQyxTQUFLLENBQUwsSUFBVSxZQUFNO0FBQ2QsYUFBT2pJLE1BQU1nRSxXQUFOLENBQWtCLFlBQU07QUFDN0IsZUFBT2hFLE1BQU04QyxPQUFOLENBQWMsWUFBTTtBQUN6QixpQkFBTzBGLFVBQVA7QUFDRCxTQUZNLENBQVA7QUFHRCxPQUpNLENBQVA7QUFLRCxLQU5EOztBQVFBLFdBQU96RixHQUFHaUUsS0FBSCxDQUFTLElBQVQsRUFBZWlCLElBQWYsQ0FBUDtBQUNELEdBakJEO0FBa0JELENBbkJEOztBQXFCQTs7Ozs7OztBQU9BakksTUFBTXlJLGVBQU4sR0FBd0IsVUFBUzFGLEVBQVQsRUFBNkI7QUFBQSxNQUFoQjJGLE9BQWdCLHVFQUFOLElBQU07O0FBQ25ELE1BQUczRixHQUFHVixPQUFOLEVBQWU7QUFDYixXQUFPVSxFQUFQO0FBQ0Q7O0FBRUQsTUFBSTRGLE1BQU0sU0FBTkEsR0FBTSxHQUFXO0FBQUE7O0FBQ25CRCxjQUFVQSxXQUFXLElBQXJCOztBQUVBLFdBQU8xSSxNQUFNZ0UsV0FBTixDQUFrQixZQUFNO0FBQzdCLGFBQU9oRSxNQUFNOEMsT0FBTixDQUFjLFlBQU07QUFDekIsZUFBT0MsR0FBR2lFLEtBQUgsQ0FBUzBCLE9BQVQsY0FBUDtBQUNELE9BRk0sQ0FBUDtBQUdELEtBSk0sQ0FBUDtBQUtELEdBUkQ7O0FBVUExRCxTQUFPNEQsY0FBUCxDQUFzQkQsR0FBdEIsRUFBMkIsU0FBM0IsRUFBc0M7QUFDcENFLGtCQUFjLElBRHNCO0FBRXBDQyxnQkFBWSxLQUZ3QjtBQUdwQ2hGLFdBQU87QUFINkIsR0FBdEM7O0FBTUEsU0FBTzZFLEdBQVA7QUFDRCxDQXRCRDs7QUF3QkE7Ozs7OztBQU1BM0ksTUFBTStJLElBQU4sR0FBYSxVQUFTdkQsSUFBVCxFQUFlO0FBQzFCLE9BQUtqQixNQUFMLEdBQWNpQixRQUFRd0QsU0FBU0MsYUFBVCxDQUF1QixNQUF2QixDQUF0Qjs7QUFFQSxTQUFPLEtBQUsxRCxPQUFMLENBQWEsS0FBS2hCLE1BQWxCLEVBQTBCMEIsSUFBMUIsQ0FBK0IsWUFBTTtBQUMxQyxRQUFHLGlCQUFPNUYsTUFBVixFQUFrQjtBQUNoQixhQUFPLElBQUkwRixPQUFKLENBQVksVUFBQy9DLEdBQUQsRUFBUztBQUMxQixZQUFJa0csVUFBVSxTQUFWQSxPQUFVLEdBQU07QUFDbEJsRztBQUNBa0UsaUJBQU9VLG1CQUFQLENBQTJCLGNBQTNCLEVBQTJDc0IsT0FBM0M7QUFDRCxTQUhEOztBQUtBaEMsZUFBT1EsZ0JBQVAsQ0FBd0IsY0FBeEIsRUFBd0N3QixPQUF4QztBQUNBLHlCQUFPQyxXQUFQO0FBQ0QsT0FSTSxDQUFQO0FBU0Q7QUFDRixHQVpNLEVBWUpsRCxJQVpJLENBWUMsWUFBTTtBQUNaakcsVUFBTUssTUFBTixHQUFlLElBQWY7QUFDRCxHQWRNLENBQVA7QUFlRCxDQWxCRDs7QUFvQkE7OztBQUdBTCxNQUFNb0osTUFBTixHQUFlLFlBQVc7QUFDeEIsY0FBRUEsTUFBRjtBQUNBLG9CQUFRQSxNQUFSO0FBQ0Esc0JBQVVBLE1BQVY7QUFDQSxnQkFBSUEsTUFBSjtBQUNBLG9CQUFRQSxNQUFSO0FBQ0Esa0JBQU1BLE1BQU47QUFDQSxlQUFHQSxNQUFIO0FBQ0Esa0JBQU1BLE1BQU47QUFDQSxrQkFBTUEsTUFBTjtBQUNBLG1CQUFPQSxNQUFQO0FBQ0EscUJBQVNBLE1BQVQ7QUFDRCxDQVpEOztBQWNBcEosTUFBTW9GLFNBQU47QUFDQXBGLE1BQU1xSixZQUFOO0FBQ0FySixNQUFNc0osS0FBTjtBQUNBdEosTUFBTXVKLEtBQU47QUFDQXZKLE1BQU1ZLFVBQU4sQ0FBaUI0SSxDQUFqQjtBQUNBeEosTUFBTVksVUFBTixDQUFpQjZJLE9BQWpCO0FBQ0F6SixNQUFNWSxVQUFOLENBQWlCOEksR0FBakI7QUFDQTFKLE1BQU1ZLFVBQU4sQ0FBaUIrSSxFQUFqQjtBQUNBM0osTUFBTVksVUFBTixDQUFpQmdKLE9BQWpCO0FBQ0E1SixNQUFNWSxVQUFOLENBQWlCaUosS0FBakI7QUFDQTdKLE1BQU1ZLFVBQU4sQ0FBaUJrSixLQUFqQjtBQUNBOUosTUFBTVksVUFBTixDQUFpQm1KLEtBQWpCO0FBQ0EvSixNQUFNWSxVQUFOLENBQWlCb0osTUFBakI7QUFDQWhLLE1BQU1ZLFVBQU4sQ0FBaUJxSixJQUFqQjtBQUNBakssTUFBTVksVUFBTixDQUFpQnNKLFFBQWpCO0FBQ0FsSyxNQUFNYyxRQUFOLENBQWVxSixPQUFmO0FBQ0FuSyxNQUFNYyxRQUFOLENBQWVzSixNQUFmOztBQUVBbEQsT0FBT2xILEtBQVAsR0FBZUEsS0FBZjs7QUFFTyxJQUFNWSxrQ0FBYVosTUFBTVksVUFBekI7QUFDQSxJQUFNRSw4QkFBV2QsTUFBTWMsUUFBdkI7a0JBQ1FkLEs7OztBQUVmQSxNQUFNb0osTUFBTjtBQUNBcEosTUFBTXVILGFBQU47QUFDQXZILE1BQU15RyxxQkFBTjtBQUNBekcsTUFBTWlILHNCQUFOLEc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL29CQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNb0Qsa0JBQWtCLG1CQUF4QjtBQUNBLElBQU1DLHdCQUF3QixJQUFJQyxNQUFKLENBQVdGLGdCQUFnQkcsTUFBM0IsRUFBbUMsR0FBbkMsQ0FBOUI7QUFDQSxJQUFNQyxtQkFBbUIsQ0FBQyxXQUFELEVBQWMsT0FBZCxDQUF6Qjs7SUFFcUJyRixTOzs7OztBQVduQjs7OzZCQUdnQjtBQUNkLHNCQUFNNUIsU0FBTixDQUFnQixXQUFoQixFQUE2QjRCLFNBQTdCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7MEJBVWFzRCxPLEVBQVNnQyxVLEVBQVk7QUFDaEMsYUFBUSxVQUFVQSxVQUFWLEVBQXNCO0FBQzVCLGVBQU9DLEtBQUtELFVBQUwsQ0FBUDtBQUNELE9BRk0sQ0FFSnZDLElBRkksQ0FFQ08sT0FGRCxFQUVVZ0MsVUFGVixDQUFQO0FBR0Q7OztBQUVELHFCQUFZeEosRUFBWixFQUE0QjtBQUFBLFFBQVpJLEtBQVksdUVBQUosRUFBSTs7QUFBQTs7QUFBQSxTQXErQjVCc0osYUFyK0I0QixHQXErQlosVUFBUy9ELEdBQVQsRUFBYztBQUM1QixVQUFHQSxPQUFPLElBQVAsSUFBZ0JBLElBQUksQ0FBSixLQUFVLEdBQVYsSUFBaUJBLElBQUksQ0FBSixLQUFVLEdBQTlDLEVBQW9EO0FBQ2xELGVBQU8sSUFBUDtBQUNELE9BRkQsTUFHSyxJQUFHLENBQUMsYUFBRCxFQUFnQmdFLE9BQWhCLENBQXdCaEUsR0FBeEIsS0FBZ0MsQ0FBQyxDQUFwQyxFQUF1QztBQUMxQyxlQUFPLElBQVA7QUFDRDs7QUFFRCxhQUFPLEtBQVA7QUFDRCxLQTkrQjJCOztBQUMxQixTQUFLaUUsV0FBTCxHQUFtQixLQUFuQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0IsS0FBcEI7QUFDQSxTQUFLMUYsV0FBTCxHQUFtQixLQUFuQjtBQUNBLFNBQUsyRixVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsU0FBS0MsaUJBQUwsR0FBeUIsSUFBekI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLElBQXJCO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixFQUFuQjtBQUNBLFNBQUtDLGNBQUwsR0FBc0IsSUFBdEI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsU0FBS3ZKLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxTQUFLd0osU0FBTCxHQUFpQixFQUFqQjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQixJQUFyQjtBQUNBLFNBQUtDLHFCQUFMLEdBQTZCLElBQTdCO0FBQ0EsU0FBS25LLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtKLEVBQUwsR0FBVUEsRUFBVjtBQUNEOztBQUVEOzs7Ozs7Ozs7a0NBS2M7QUFDWixXQUFLNEosV0FBTCxHQUFtQixLQUFuQjtBQUNBLFdBQUtDLFlBQUwsR0FBb0IsS0FBcEI7QUFDQSxXQUFLVSxxQkFBTCxDQUEyQkwsY0FBM0IsR0FBNEMsSUFBNUM7QUFDQSxXQUFLRCxXQUFMLEdBQW1CLEVBQW5CO0FBQ0EsV0FBS0QsYUFBTCxHQUFxQixFQUFyQjtBQUNBLFdBQUtRLFdBQUw7QUFDQSxXQUFLQyxZQUFMO0FBQ0EsV0FBS0Msc0JBQUw7QUFDQSxXQUFLQyxrQkFBTDtBQUVEOztBQUVEOzs7Ozs7OzsrQkFLVztBQUFBOztBQUNULFdBQUszSyxFQUFMLENBQVFtQixPQUFSLEdBQWtCLElBQWxCO0FBQ0EsV0FBS3lKLFlBQUw7QUFDQSxXQUFLSixXQUFMO0FBQ0EsV0FBS0MsWUFBTDtBQUNBLFdBQUtDLHNCQUFMO0FBQ0EsV0FBS0Msa0JBQUw7O0FBRUEsc0JBQU0vSSxPQUFOLENBQWMsWUFBTTtBQUNsQixjQUFLaUosT0FBTCxDQUFhLE1BQUtDLEtBQWxCO0FBQ0QsT0FGRDtBQUdEOztBQUVEOzs7Ozs7Ozs7Z0NBTVk7QUFBQTs7QUFDVixVQUFJQyxVQUFVLEtBQUtDLG1CQUFMLElBQTRCLENBQUMsS0FBS0MsZ0JBQWhEO0FBQ0EsVUFBSXRHLElBQUlFLFFBQVFxRyxPQUFSLEVBQVI7O0FBRUEsV0FBS1osYUFBTCxHQUFxQlMsVUFBUyxJQUFULEdBQWUsS0FBS0UsZ0JBQUwsQ0FBc0I5SixPQUExRDs7QUFFQSxVQUFHLENBQUMsS0FBSzZJLGFBQU4sSUFBdUIsS0FBS0MsV0FBTCxDQUFpQmtCLFNBQXhDLElBQXFELEtBQUtILG1CQUE3RCxFQUFrRjtBQUNoRixhQUFLSSx1QkFBTCxDQUE2QixLQUFLcEwsRUFBbEMsRUFBc0MsS0FBS3NLLGFBQTNDO0FBQ0Q7O0FBRUQsVUFBSWUsY0FBYyxTQUFkQSxXQUFjLENBQUM1RyxRQUFELEVBQVc2RyxNQUFYLEVBQXNCO0FBQ3RDLGFBQUksSUFBSXBKLElBQUksQ0FBUixFQUFXQyxJQUFJc0MsU0FBUzVCLE1BQTVCLEVBQW9DWCxJQUFJQyxDQUF4QyxFQUEyQ0QsR0FBM0MsRUFBZ0Q7QUFDOUMsY0FBSXdDLFFBQVFELFNBQVN2QyxDQUFULENBQVo7O0FBRUEsY0FBR3dDLE1BQU02RyxRQUFOLElBQWtCLENBQXJCLEVBQXdCO0FBQ3RCLG1CQUFLQyxnQkFBTCxDQUFzQjlHLEtBQXRCLEVBQTZCNEcsTUFBN0I7O0FBRUE1RyxrQkFBTStHLFNBQU4sR0FBa0IsT0FBS0MsVUFBTCxDQUFnQmhILEtBQWhCLENBQWxCO0FBQ0QsV0FKRCxNQUtLLElBQUdBLE1BQU02RyxRQUFOLElBQWtCLENBQWxCLElBQXVCLENBQUM3RyxNQUFNdkQsT0FBakMsRUFBMEM7QUFDN0MsbUJBQUtpSyx1QkFBTCxDQUE2QjFHLEtBQTdCO0FBQ0EyRyx3QkFBWTNHLE1BQU1pSCxVQUFsQixFQUE4QmpILEtBQTlCO0FBQ0Q7QUFDRjtBQUNGLE9BZEQ7O0FBZ0JBMkcsa0JBQVksS0FBS3JMLEVBQUwsQ0FBUTJMLFVBQXBCLEVBQWdDLEtBQUszTCxFQUFyQztBQUNBLFdBQUs0SixXQUFMLEdBQW1CLElBQW5COztBQUVBLFVBQUk5SCxZQUFKOztBQUVBLFVBQUcsQ0FBQyxLQUFLa0ksYUFBVCxFQUF3QjtBQUN0QmxJLGNBQU0sZ0JBQU1GLE9BQU4sQ0FBYyxZQUFNO0FBQ3hCLGlCQUFLa0osS0FBTCxDQUFXYyxVQUFYLElBQXlCLE9BQUtkLEtBQUwsQ0FBV2MsVUFBWCxDQUFzQkMsT0FBdEIsRUFBekI7O0FBRUEsaUJBQU8sT0FBS0MsUUFBTCxFQUFQO0FBQ0QsU0FKSyxDQUFOOztBQU1BLFlBQUcsS0FBSzFGLFdBQUwsQ0FBaUIyRixXQUFwQixFQUFpQztBQUMvQnBILGNBQUksa0JBQVFxSCxHQUFSLENBQVksS0FBSzVGLFdBQUwsQ0FBaUIyRixXQUE3QixFQUEwQ2hILElBQTFDLENBQStDLFVBQUNqRCxHQUFELEVBQVM7QUFDMUQsbUJBQUs5QixFQUFMLENBQVF3QixTQUFSLEdBQW9CLE9BQUt5SyxTQUF6QjtBQUNBLDRCQUFNNUssV0FBTixDQUFrQixPQUFLckIsRUFBdkIsRUFBMkI4QixJQUFJb0ssSUFBL0I7QUFDQSxtQkFBTyxPQUFLRCxTQUFaOztBQUVBLG1CQUFPLGdCQUFNNUgsT0FBTixDQUFjLE9BQUtyRSxFQUFuQixFQUF1QixFQUFFa0QsV0FBVyxJQUFiLEVBQXZCLENBQVA7QUFDRCxXQU5HLENBQUo7QUFPRDtBQUNGLE9BaEJELE1BaUJLO0FBQ0gsd0JBQU10QixPQUFOLENBQWMsWUFBTTtBQUNsQixpQkFBS2tKLEtBQUwsQ0FBV3FCLFlBQVgsSUFBMkIsT0FBS3JCLEtBQUwsQ0FBV3FCLFlBQVgsQ0FBd0JOLE9BQXhCLEVBQTNCO0FBQ0EsaUJBQUtPLFVBQUw7QUFDRCxTQUhEO0FBSUQ7O0FBRUQsV0FBS3ZDLFlBQUwsR0FBb0IsSUFBcEI7QUFDQSxXQUFLRyxhQUFMLEdBQXFCLElBQXJCO0FBQ0EsV0FBS0MsV0FBTCxHQUFtQixJQUFuQjs7QUFFQSxhQUFPdEYsRUFBRUksSUFBRixDQUFPLFlBQU07QUFDbEIsZUFBT2pELEdBQVA7QUFDRCxPQUZNLENBQVA7QUFHRDs7QUFFRDs7Ozs7Ozs7O2dDQU1ZO0FBQ1YsVUFBRyxLQUFLa0ksYUFBUixFQUF1QjtBQUNyQixlQUFPbkYsUUFBUXFHLE9BQVIsRUFBUDtBQUNEOztBQUVELFdBQUtKLEtBQUwsQ0FBV3VCLFVBQVgsSUFBeUIsS0FBS3ZCLEtBQUwsQ0FBV3VCLFVBQVgsQ0FBc0JSLE9BQXRCLEVBQXpCO0FBQ0EsYUFBT2hILFFBQVFxRyxPQUFSLENBQWdCLEtBQUtvQixRQUFMLEVBQWhCLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7bUNBS2U7QUFDYixVQUFJaEIsU0FBUyxnQkFBTXpLLGVBQU4sQ0FBc0IsS0FBS2IsRUFBM0IsRUFBK0IsS0FBL0IsQ0FBYjtBQUNBLFVBQUlvSSxRQUFRLEtBQUtoQyxXQUFMLENBQWlCaEcsS0FBakIsSUFBMEIsZ0JBQU1nSSxLQUE1QztBQUNBLFVBQUloSSxjQUFKO0FBQ0EsVUFBSWdELFNBQVMsZ0JBQU1DLE1BQU4sS0FBaUIsS0FBS3JELEVBQW5DOztBQUVBLFVBQUdzTCxNQUFILEVBQVc7QUFDVGxMLGdCQUFRLElBQUlnSSxLQUFKLENBQVUsS0FBS3BJLEVBQUwsQ0FBUXdELFlBQVIsQ0FBcUIsT0FBckIsS0FBaUMsZ0JBQU0vQixlQUFOLEVBQTNDLEVBQW9FLEtBQUt6QixFQUF6RSxFQUE2RSxJQUE3RSxDQUFSO0FBQ0QsT0FGRCxNQUdLO0FBQ0hJLGdCQUFRLElBQUlnSSxLQUFKLENBQVVoRixTQUFRLE1BQVIsR0FBZ0IsZ0JBQU0zQixlQUFOLEVBQTFCLEVBQW1ELEtBQUt6QixFQUF4RCxFQUE0RCxJQUE1RCxDQUFSO0FBQ0FvRCxtQkFBVyxnQkFBTWtCLElBQU4sR0FBYSxJQUF4QjtBQUNEOztBQUVELFVBQUlpSSxVQUFVbk0sS0FBZDtBQUNBLFVBQUlvTSxTQUFTMUksT0FBTzJJLE1BQVAsQ0FBY3JNLEtBQWQsRUFBcUIsS0FBS0EsS0FBMUIsQ0FBYjtBQUNBLFVBQUlwQixpQkFBaUIsZ0JBQU1ELE9BQU4sQ0FBY0MsY0FBbkM7QUFDQSxVQUFJME4sb0JBQW9CLEtBQUt0RyxXQUFMLENBQWlCc0csaUJBQXpDO0FBQ0EsVUFBSUMsU0FBUyxLQUFLdkcsV0FBTCxDQUFpQnVHLE1BQTlCOztBQUVBLFVBQUcsS0FBS3ZHLFdBQUwsQ0FBaUI5RSxRQUFwQixFQUE4QjtBQUM1Qix3QkFBTUQsV0FBTixDQUFrQixLQUFLckIsRUFBdkIsRUFBMkIsS0FBS29HLFdBQUwsQ0FBaUI5RSxRQUE1QztBQUNEOztBQUVELFVBQUcsS0FBSzhFLFdBQUwsQ0FBaUIyRixXQUFwQixFQUFpQztBQUMvQixhQUFLRSxTQUFMLEdBQWlCLEtBQUtqTSxFQUFMLENBQVF3QixTQUF6QjtBQUNBLGFBQUt4QixFQUFMLENBQVF3QixTQUFSLEdBQW9CLEVBQXBCO0FBQ0Q7O0FBRUQsVUFBRyxLQUFLNEUsV0FBTCxDQUFpQnBILGNBQWpCLEtBQW9Dd0QsU0FBdkMsRUFBa0Q7QUFDaER4RCx5QkFBaUIsS0FBS29ILFdBQUwsQ0FBaUJwSCxjQUFsQztBQUNELE9BRkQsTUFHSyxJQUFHb0osTUFBTXBKLGNBQU4sS0FBeUJ3RCxTQUE1QixFQUF1QztBQUMxQ3hELHlCQUFpQm9KLE1BQU1wSixjQUF2QjtBQUNEOztBQUVELFdBQUt1TixPQUFMLEdBQWVBLE9BQWY7QUFDQSxXQUFLSyxRQUFMLEdBQWdCRCxNQUFoQjtBQUNBLFdBQUtFLGdCQUFMLEdBQXdCN04sY0FBeEI7QUFDQSxXQUFLZ00sbUJBQUwsR0FBMkIwQixpQkFBM0I7O0FBRUEsc0JBQU12TSxRQUFOLENBQWVDLEtBQWY7O0FBRUEsVUFBR3BCLGNBQUgsRUFBbUI7QUFDakJvQixnQkFBUSxLQUFLME0sZUFBTCxDQUFxQk4sTUFBckIsRUFBNkIsRUFBN0IsQ0FBUjtBQUNELE9BRkQsTUFHSztBQUNIcE0sZ0JBQVEsS0FBSzJNLFNBQUwsQ0FBZVAsTUFBZixFQUF1QixFQUF2QixDQUFSO0FBQ0Q7O0FBRUQsV0FBS3BNLEtBQUwsR0FBYUEsS0FBYjtBQUNEOztBQUVEOzs7Ozs7Ozs2Q0FLeUI7QUFBQTs7QUFDdkIsV0FBSzRNLGlCQUFMLEdBQXlCLEdBQUdDLE1BQUgsQ0FBVSxnQkFBTXhOLHFCQUFoQixFQUF1QyxLQUFLMkcsV0FBTCxDQUFpQjRHLGlCQUF4RCxDQUF6Qjs7QUFFQSxVQUFJRSxVQUFVLFNBQVZBLE9BQVUsQ0FBQ2xOLEVBQUQsRUFBUTtBQUNwQixhQUFLLElBQUlrQyxJQUFJLENBQVIsRUFBVzRJLFFBQVE5SyxHQUFHbU4sVUFBdEIsRUFBa0NoTCxJQUFJMkksTUFBTWpJLE1BQWpELEVBQXlEWCxJQUFJQyxDQUE3RCxFQUFnRUQsR0FBaEUsRUFBcUU7QUFDbkUsY0FBSWpCLE9BQU82SixNQUFNNUksQ0FBTixDQUFYOztBQUVBLGNBQUcsT0FBSzhLLGlCQUFMLENBQXVCckQsT0FBdkIsQ0FBK0IxSSxLQUFLbU0sUUFBcEMsS0FBaUQsQ0FBQyxDQUFyRCxFQUF3RDtBQUN0RCxnQkFBR3BOLEdBQUdxTixZQUFILGNBQTJCcE0sS0FBS21NLFFBQWhDLENBQUgsRUFBZ0Q7QUFDOUM7QUFDRDs7QUFFRHBOLGVBQUdzTixZQUFILGNBQTJCck0sS0FBS21NLFFBQWhDLEVBQTRDcE4sR0FBR3dELFlBQUgsQ0FBZ0J2QyxLQUFLbU0sUUFBckIsS0FBa0NuTSxLQUFLbU0sUUFBbkY7QUFDQXBOLGVBQUd1TixlQUFILENBQW1CdE0sS0FBS21NLFFBQXhCO0FBQ0Q7QUFDRjs7QUFFRCxhQUFJLElBQUlsTCxLQUFJLENBQVIsRUFBV0MsS0FBSW5DLEdBQUd5RSxRQUFILENBQVk1QixNQUEvQixFQUF1Q1gsS0FBSUMsRUFBM0MsRUFBOENELElBQTlDLEVBQW1EO0FBQ2pELGNBQUl3QyxRQUFRMUUsR0FBR3lFLFFBQUgsQ0FBWXZDLEVBQVosQ0FBWjs7QUFFQSxjQUFHLENBQUN3QyxNQUFNdkQsT0FBVixFQUFtQjtBQUNqQitMLG9CQUFReEksS0FBUjtBQUNEO0FBQ0Y7QUFDRixPQXJCRDs7QUF1QkF3SSxjQUFRLEtBQUtsTixFQUFiO0FBQ0Q7O0FBRUQ7Ozs7Ozs7O2tDQUtjO0FBQ1osV0FBSSxJQUFJa0MsSUFBSSxDQUFSLEVBQVdDLElBQUksS0FBS3lLLFFBQUwsQ0FBYy9KLE1BQWpDLEVBQXlDWCxJQUFJQyxDQUE3QyxFQUFnREQsR0FBaEQsRUFBcUQ7QUFDbkQsWUFBSXNMLEtBQUssS0FBS1osUUFBTCxDQUFjMUssQ0FBZCxDQUFUOztBQUVBLFNBQUMsUUFBUXVMLElBQVIsQ0FBYUQsRUFBYixDQUFELEtBQXNCQSxLQUFLLFFBQVFBLEVBQW5DOztBQUVBLFlBQUcsQ0FBQyxLQUFLeE4sRUFBTCxDQUFRcU4sWUFBUixDQUFxQkcsRUFBckIsQ0FBSixFQUE4QjtBQUM1QixlQUFLeE4sRUFBTCxDQUFRc04sWUFBUixDQUFxQkUsRUFBckIsRUFBeUIsRUFBekI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQ7Ozs7Ozs7O21DQUtlO0FBQ2IsVUFBSUUsVUFBVSxnQkFBTTdNLGVBQU4sQ0FBc0IsS0FBS2IsRUFBM0IsQ0FBZDs7QUFFQSxVQUFHLENBQUMwTixRQUFRN0ssTUFBWixFQUFvQjtBQUNsQjtBQUNEOztBQUVELFVBQUlzSSxZQUFZLEtBQUt2SyxRQUFMLEtBQWtCOE0sUUFBUSxDQUFSLENBQWxDO0FBQ0EsVUFBSUMsaUJBQWlCLElBQXJCOztBQUVBLFdBQUksSUFBSXpMLElBQUksQ0FBUixFQUFXQyxJQUFJdUwsUUFBUTdLLE1BQTNCLEVBQW1DWCxJQUFJQyxDQUF2QyxFQUEwQ0QsR0FBMUMsRUFBK0M7QUFDN0MsWUFBSW9KLFNBQVNvQyxRQUFReEwsQ0FBUixDQUFiOztBQUVBLFlBQUcsQ0FBQ29KLE9BQU9uSyxPQUFQLENBQWVpRixXQUFmLENBQTJCd0gsV0FBL0IsRUFBNEM7QUFDMUNELDJCQUFpQnJDLE1BQWpCOztBQUVBO0FBQ0Q7QUFDRjs7QUFFRCxXQUFLckIsV0FBTCxDQUFpQmtCLFNBQWpCLEdBQTZCQSxTQUE3QjtBQUNBQSxtQkFBYSxLQUFLMEMsUUFBTCxFQUFiOztBQUVBLFVBQUcsS0FBS3pILFdBQUwsQ0FBaUJ3SCxXQUFwQixFQUFpQztBQUMvQixhQUFLckQscUJBQUwsR0FBNkJvRCxlQUFleE0sT0FBNUM7QUFDRDs7QUFFRCxXQUFLOEosZ0JBQUwsR0FBd0IwQyxjQUF4QjtBQUNBLFdBQUsvTSxRQUFMLEdBQWdCOE0sUUFBUSxDQUFSLENBQWhCO0FBQ0EsV0FBS3RELFNBQUwsR0FBaUJzRCxPQUFqQjtBQUNBLFdBQUt0TixLQUFMLENBQVdRLFFBQVgsR0FBc0IsS0FBS3FLLGdCQUFMLENBQXNCOUosT0FBdEIsQ0FBOEJmLEtBQXBEO0FBQ0EsT0FBQyxLQUFLNEosYUFBTixJQUF1QixLQUFLcEosUUFBTCxDQUFjTyxPQUFkLENBQXNCMk0sVUFBdEIsQ0FBaUMsS0FBSzlOLEVBQXRDLENBQXZCO0FBQ0E4RCxhQUFPaUssY0FBUCxDQUFzQixLQUFLM04sS0FBM0IsRUFBa0MsS0FBS1EsUUFBTCxDQUFjTyxPQUFkLENBQXNCb0wsT0FBeEQ7QUFDRDs7QUFFRDs7Ozs7Ozs7OytCQU1Xdk0sRSxFQUFJO0FBQ2IsV0FBS21LLFVBQUwsQ0FBZ0IvSSxJQUFoQixDQUFxQnBCLEVBQXJCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OztrQ0FNY0EsRSxFQUFJO0FBQ2hCLFdBQUksSUFBSWtDLElBQUksQ0FBUixFQUFXQyxJQUFJLEtBQUtnSSxVQUFMLENBQWdCdEgsTUFBbkMsRUFBMkNYLElBQUlDLENBQS9DLEVBQWtERCxHQUFsRCxFQUF1RDtBQUNyRCxZQUFJd0MsUUFBUSxLQUFLeUYsVUFBTCxDQUFnQmpJLENBQWhCLENBQVo7O0FBRUEsWUFBR3dDLFVBQVUxRSxFQUFiLEVBQWlCO0FBQ2YsZUFBS21LLFVBQUwsQ0FBZ0IvQyxNQUFoQixDQUF1QmxGLENBQXZCLEVBQTBCLENBQTFCO0FBQ0FBO0FBQ0FDO0FBQ0Q7QUFDRjtBQUNGOztBQUVEOzs7Ozs7Ozs7OzBDQU9zQnFILFUsRUFBWTtBQUNoQyxhQUFPQSxVQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7c0NBT2tCdkksSSxFQUFNO0FBQ3RCLFVBQUksQ0FBQzZDLE9BQU9oRSxJQUFQLENBQVltQixLQUFLK00sWUFBakIsRUFBK0JuTCxNQUFwQyxFQUE0QztBQUMxQyxlQUFPLElBQVA7QUFDRDs7QUFFRCxXQUFLLElBQUliLENBQVQsSUFBY2YsS0FBSytNLFlBQW5CLEVBQWlDO0FBQy9CLFlBQUcsQ0FBQy9NLEtBQUsrTSxZQUFMLENBQWtCL0wsY0FBbEIsQ0FBaUNELENBQWpDLENBQUosRUFBeUM7QUFDdkM7QUFDRDs7QUFFRCxZQUFJSSxPQUFPbkIsS0FBSytNLFlBQUwsQ0FBa0JoTSxDQUFsQixDQUFYO0FBQ0EsWUFBSVksUUFBUSxnQkFBTXFMLGlCQUFOLENBQXdCN0wsS0FBS3RDLElBQTdCLEVBQW1Dc0MsS0FBS0UsU0FBTCxDQUFlaUssT0FBbEQsQ0FBWjs7QUFFQSxZQUFHLENBQUMsZ0JBQU0yQixvQkFBTixDQUEyQnRMLEtBQTNCLEVBQWtDUixLQUFLUSxLQUF2QyxFQUE4Q1IsS0FBSytMLElBQW5ELEVBQXlELGdCQUFNQSxJQUFOLENBQVd2TCxLQUFYLENBQXpELENBQUosRUFBaUY7QUFDL0UsaUJBQU8sSUFBUDtBQUNEO0FBQ0Y7O0FBRUQsYUFBTyxLQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7OztnREFTNEIzQixJLEVBQU1uQixJLEVBQU04QyxLLEVBQU87QUFDN0MsVUFBSVIsT0FBTyxLQUFLZ00saUJBQUwsQ0FBdUJuTixJQUF2QixFQUE2Qm5CLElBQTdCLENBQVg7O0FBRUEsVUFBRyxDQUFDc0MsSUFBSixFQUFVO0FBQ1IsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsYUFBTyxDQUFDLGdCQUFNOEwsb0JBQU4sQ0FBMkJ0TCxLQUEzQixFQUFrQ1IsS0FBS1EsS0FBdkMsRUFBOENSLEtBQUsrTCxJQUFuRCxFQUF5RCxnQkFBTUEsSUFBTixDQUFXdkwsS0FBWCxDQUF6RCxDQUFSO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7K0JBT1czQixJLEVBQU07QUFBQTs7QUFDZixVQUFJb04sVUFBVSxDQUFkO0FBQ0EsVUFBSUMsdUJBQUo7QUFDQSxVQUFJOUUsbUJBQUo7O0FBRUEsVUFBSTFILE1BQU1iLEtBQUtzTixZQUFMLENBQWtCaE4sT0FBbEIsQ0FBMEI2SCxxQkFBMUIsRUFBaUQsVUFBQ29GLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ25FSjs7QUFFQSxZQUFJSyxpQkFBSjtBQUNBLFlBQUkzTCxtQkFBSjtBQUNBLFlBQUk0TCxtQkFBbUIsRUFBdkI7QUFDQSxZQUFJQyxhQUFhM04sS0FBS1AsV0FBTCxDQUFpQm1PLHFCQUFqQixDQUF1Q0osQ0FBdkMsQ0FBakI7O0FBRUEsd0JBQU1qUCxZQUFOLEdBQXFCLEVBQUV5QixNQUFNQSxJQUFSLEVBQWM2TixNQUFNLEVBQXBCLEVBQXJCOztBQUVBLFlBQUk7QUFDRkoscUJBQVcsT0FBS3RJLFdBQUwsQ0FBaUIySSxLQUFqQixDQUF1QixPQUFLeEUscUJBQUwsQ0FBMkJuSyxLQUFsRCxFQUF5RHdPLFVBQXpELENBQVg7QUFDRCxTQUZELENBR0EsT0FBT0ksR0FBUCxFQUFZO0FBQ1YsY0FBSUMsK0RBQTZEaE8sS0FBS3NOLFlBQXRFOztBQUVBLGNBQUcsQ0FBQyxnQkFBTXhQLE9BQU4sQ0FBY0Usb0JBQWxCLEVBQXdDO0FBQ3RDLGdCQUFHLGdCQUFNRixPQUFOLENBQWNHLEtBQWpCLEVBQXdCO0FBQ3RCZ0csc0JBQVFDLElBQVIsQ0FBYThKLE9BQWI7QUFDQS9KLHNCQUFRQyxJQUFSLENBQWE2SixJQUFJRSxLQUFqQjtBQUNEOztBQUVEUix1QkFBV2xNLFNBQVg7QUFDRCxXQVBELE1BUUs7QUFDSDBDLG9CQUFRaUssS0FBUixDQUFjRixPQUFkO0FBQ0Esa0JBQU1ELEdBQU47QUFDRDtBQUNGOztBQUVEak0scUJBQWEsZ0JBQU12RCxZQUFOLEdBQW9CLGdCQUFNQSxZQUFOLENBQW1Cc1AsSUFBdkMsR0FBNkMsRUFBMUQ7QUFDQSx3QkFBTXRQLFlBQU4sQ0FBbUJzUCxJQUFuQixHQUEwQixJQUExQjtBQUNBLHdCQUFNdFAsWUFBTixHQUFxQixJQUFyQjs7QUFFQSxhQUFJLElBQUkwQyxJQUFJYSxXQUFXRixNQUFYLEdBQW9CLENBQWhDLEVBQW1DWCxLQUFLLENBQXhDLEVBQTJDQSxHQUEzQyxFQUFnRDtBQUM5QyxjQUFJZ0ssT0FBT25KLFdBQVdiLENBQVgsQ0FBWDtBQUNBLGNBQUlrTixPQUFVbEQsS0FBSzVKLFNBQUwsQ0FBZWlLLE9BQWYsQ0FBdUJsTSxNQUFqQyxTQUEyQzZMLEtBQUttRCxVQUFwRDs7QUFFQSxjQUFHbkQsS0FBS29ELFVBQVIsRUFBb0I7QUFDbEI7QUFDRDs7QUFFRCxjQUFHWCxpQkFBaUJTLElBQWpCLENBQUgsRUFBMkI7QUFDekI7QUFDRDs7QUFFRCxjQUFJRyxjQUFjLGdCQUFNdEIsaUJBQU4sQ0FBd0IvQixLQUFLd0IsT0FBN0IsRUFBc0N4QixLQUFLNUosU0FBTCxDQUFlaUssT0FBckQsQ0FBbEI7QUFDQSxjQUFJaUQsZ0JBQWdCdk8sS0FBS3FKLGFBQUwsSUFBc0JySixLQUFLUCxXQUEvQzs7QUFFQSxjQUFHLGdCQUFNK08sWUFBTixDQUFtQkYsV0FBbkIsS0FBbUNyRCxLQUFLNUosU0FBTCxLQUFtQmtOLGNBQWNqRixxQkFBdkUsRUFBOEY7QUFDNUY7QUFDRDs7QUFFRCxjQUFJbUYsT0FBT3hELEtBQUs1SixTQUFMLENBQWVxTixjQUFmLENBQThCekQsS0FBS3BNLElBQW5DLEVBQXlDbUIsSUFBekMsQ0FBWDtBQUNBLGNBQUkyQixRQUFRLGdCQUFNcUwsaUJBQU4sQ0FBd0IvQixLQUFLcE0sSUFBN0IsRUFBbUNvTSxLQUFLNUosU0FBTCxDQUFlaUssT0FBbEQsQ0FBWjs7QUFFQSxjQUFHLENBQUNtRCxJQUFKLEVBQVU7QUFDUnhELGlCQUFLNUosU0FBTCxDQUFlc04sTUFBZixDQUFzQjFELEtBQUtwTSxJQUEzQixFQUFpQyxFQUFFbUIsTUFBTUEsSUFBUixFQUFqQztBQUNEOztBQUVEaUwsZUFBSzVKLFNBQUwsQ0FBZXVOLGlCQUFmLENBQWlDNU8sSUFBakMsRUFBdUNpTCxLQUFLcE0sSUFBNUMsRUFBa0Q4QyxLQUFsRDtBQUNBK0wsMkJBQWlCUyxJQUFqQixJQUF5QixJQUF6QjtBQUNEOztBQUVEVCwyQkFBbUIsSUFBbkI7QUFDQTVMLHFCQUFhLElBQWI7O0FBRUEsWUFBRzlCLGdCQUFnQjZPLElBQW5CLEVBQXlCO0FBQ3ZCdEcsdUJBQWFnRixDQUFiO0FBQ0FGLDJCQUFpQkksUUFBakI7O0FBRUEsaUJBQU8sZ0JBQU1xQixrQkFBTixDQUF5QnJCLFFBQXpCLENBQVA7QUFDRDs7QUFFRCxZQUFHLFFBQU9BLFFBQVAseUNBQU9BLFFBQVAsTUFBbUIsUUFBdEIsRUFBZ0M7QUFDOUIsY0FBSTtBQUNGLG1CQUFPc0IsS0FBS0MsU0FBTCxDQUFldkIsUUFBZixDQUFQO0FBQ0QsV0FGRCxDQUdBLE9BQU13QixDQUFOLEVBQVM7QUFDUCxtQkFBT3hCLFFBQVA7QUFDRDtBQUNGOztBQUVELGVBQU9BLFFBQVA7QUFDRCxPQXBGUyxDQUFWOztBQXNGQSxVQUFHek4sZ0JBQWdCNk8sSUFBbkIsRUFBeUI7QUFBQTtBQUN2QixjQUFJbE4sUUFBUWQsR0FBWjtBQUNBLGNBQUlxTyxxQkFBcUIsS0FBekI7O0FBRUEsY0FBRzlCLE9BQUgsRUFBWTtBQUNWcE4saUJBQUttUCxhQUFMLEdBQXFCLElBQXJCO0FBQ0Q7O0FBRUQsY0FBRy9CLFdBQVcsQ0FBWCxJQUFnQjdFLFVBQWhCLElBQThCdkksS0FBS3NOLFlBQUwsSUFBcUIvRSxVQUF0RCxFQUFrRTtBQUNoRTVHLG9CQUFRMEwsY0FBUjtBQUNEOztBQUVELGNBQUkrQixpQkFBaUJwUCxLQUFLbU0sUUFBTCxDQUFjN0wsT0FBZCxDQUFzQixnQkFBdEIsRUFBd0MsSUFBeEMsQ0FBckI7O0FBRUEsY0FBRzhPLGtCQUFrQnBQLEtBQUttTSxRQUExQixFQUFvQztBQUNsQytDLGlDQUFxQixJQUFyQjtBQUNBdk4sb0JBQVEsQ0FBQyxDQUFDQSxLQUFWO0FBQ0Q7O0FBRUQsY0FBRzNCLEtBQUtxUCxhQUFSLEVBQXVCO0FBQUE7QUFDckIsa0JBQUloTyxZQUFZckIsS0FBS3FQLGFBQXJCOztBQUVBaE8sd0JBQVVpTyx3QkFBVixHQUFxQyxJQUFyQztBQUNBak8sd0JBQVV3SSxLQUFWLENBQWdCLGdCQUFNMEYsV0FBTixDQUFrQkgsY0FBbEIsQ0FBaEIsSUFBcUR6TixLQUFyRDtBQUNBTix3QkFBVWlPLHdCQUFWLEdBQXFDLEtBQXJDOztBQUVBLGtCQUFJak8sVUFBVXVILFlBQWQsRUFBNEI7QUFDMUIsZ0NBQU1qSSxPQUFOLENBQWMsWUFBTTtBQUNsQlUsNEJBQVV3SSxLQUFWLENBQWdCMkYsU0FBaEIsSUFBNkJuTyxVQUFVd0ksS0FBVixDQUFnQjJGLFNBQWhCLENBQTBCNUUsT0FBMUIsQ0FBa0MsRUFBRWxHLEtBQUswSyxjQUFQLEVBQXVCek4sT0FBT0EsS0FBOUIsRUFBbEMsQ0FBN0I7QUFDQU4sNEJBQVVvTyxPQUFWLENBQWtCTCxjQUFsQixFQUFrQ3pOLEtBQWxDOztBQUVBLHNCQUFJK0MsTUFBTSxnQkFBTTZLLFdBQU4sQ0FBa0JILGNBQWxCLENBQVY7QUFDQSxzQkFBSU0sV0FBV2hMLElBQUksQ0FBSixFQUFPaUwsV0FBUCxLQUF1QmpMLElBQUlxQixLQUFKLENBQVUsQ0FBVixDQUF0QztBQUNBLHNCQUFJNkosU0FBUyxZQUFZRixRQUF6QjtBQUNBLHNCQUFJRyxXQUFXLGNBQWNILFFBQTdCOztBQUVBck8sNEJBQVV3SSxLQUFWLENBQWdCZ0csUUFBaEIsS0FBNkJ4TyxVQUFVd0ksS0FBVixDQUFnQmdHLFFBQWhCLEVBQTBCakYsT0FBMUIsQ0FBa0NqSixLQUFsQyxDQUE3Qjs7QUFFQSxzQkFBSSxPQUFPTixVQUFVdU8sTUFBVixDQUFQLElBQTRCLFVBQWhDLEVBQTRDO0FBQzFDdk8sOEJBQVV1TyxNQUFWLEVBQWtCak8sS0FBbEI7QUFDRDtBQUNGLGlCQWREO0FBZUQ7QUF2Qm9CO0FBd0J0QixXQXhCRCxNQXlCSyxJQUFHdU4sa0JBQUgsRUFBdUI7QUFDMUIsZ0JBQUlZLFVBQVU5UCxLQUFLK1AsU0FBbkI7QUFDQSxnQkFBSUMsT0FBTyxnQkFBTVQsV0FBTixDQUFrQkgsY0FBbEIsQ0FBWDs7QUFFQXpOLG9CQUFPbU8sUUFBUXpELFlBQVIsQ0FBcUIyRCxJQUFyQixFQUEyQixNQUEzQixDQUFQLEdBQTJDRixRQUFReEQsZUFBUixDQUF3QjBELElBQXhCLENBQTNDO0FBQ0Q7QUFqRHNCO0FBa0R4Qjs7QUFFRCxhQUFPblAsR0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7O3FDQU9pQmhDLEksRUFBOEI7QUFBQSxVQUF4Qm9SLGNBQXdCLHVFQUFQLEtBQU87O0FBQzdDLFVBQUk5USxRQUFRLEtBQUttTSxPQUFqQjtBQUNBLFVBQUl4SyxRQUFRLEVBQVo7O0FBRUEsVUFBRyxDQUFDbVAsY0FBSixFQUFvQjtBQUNsQixZQUFJQyxZQUFZLEVBQWhCOztBQUVBLGFBQUssSUFBSWpQLElBQUksQ0FBUixFQUFXQyxJQUFJckMsS0FBSytDLE1BQXpCLEVBQWlDWCxJQUFJQyxDQUFyQyxFQUF3Q0QsR0FBeEMsRUFBNkM7QUFDM0MsY0FBSXlELE1BQU03RixLQUFLb0MsQ0FBTCxDQUFWO0FBQ0EsY0FBSVUsY0FBSjs7QUFFQXVPLG1EQUFnQkEsU0FBaEIsSUFBMkJ4TCxHQUEzQjtBQUNBL0Msa0JBQVEsZ0JBQU1xTCxpQkFBTixDQUF3QmtELFNBQXhCLEVBQW1DL1EsS0FBbkMsQ0FBUjtBQUNBMkIsZ0JBQU1YLElBQU4sQ0FBVyxFQUFFdEIsTUFBTXFSLFNBQVIsRUFBbUJ2TyxPQUFPQSxLQUExQixFQUFYO0FBQ0Q7QUFDRixPQVhELE1BWUs7QUFDSGIsY0FBTVgsSUFBTixDQUFXLEVBQUV0QixNQUFNQSxJQUFSLEVBQWM4QyxPQUFPLGdCQUFNcUwsaUJBQU4sQ0FBd0JuTyxJQUF4QixFQUE4Qk0sS0FBOUIsQ0FBckIsRUFBWDtBQUNEOztBQUVELFVBQUlnUixjQUFjclAsTUFBTWMsTUFBeEI7O0FBRUEsVUFBSXdPLGFBQWEsU0FBYkEsVUFBYSxDQUFDTixPQUFELEVBQWE7QUFDNUIsWUFBSXpPLFlBQVl5TyxRQUFRNVAsT0FBeEI7O0FBRUEsYUFBSyxJQUFJcU4sSUFBSSxDQUFiLEVBQWdCQSxJQUFJNEMsV0FBcEIsRUFBaUM1QyxHQUFqQyxFQUFzQztBQUNwQyxjQUFJcE0sT0FBT0wsTUFBTXlNLENBQU4sQ0FBWDtBQUNBLGNBQUl0QyxPQUFPNUosVUFBVWdQLFNBQVYsQ0FBb0JsUCxLQUFLdEMsSUFBekIsQ0FBWDs7QUFFQSxjQUFJLENBQUNvTSxJQUFELElBQVMsQ0FBQ0EsS0FBS3FGLE1BQW5CLEVBQTJCO0FBQ3pCO0FBQ0Q7O0FBRUQsZUFBSyxJQUFJdlAsSUFBSSxDQUFSLEVBQVd3UCxJQUFJdEYsS0FBS3FGLE1BQUwsQ0FBWTFPLE1BQWhDLEVBQXdDYixJQUFJd1AsQ0FBNUMsRUFBK0N4UCxHQUEvQyxFQUFvRDtBQUNsRCxnQkFBSTBOLE9BQU94RCxLQUFLcUYsTUFBTCxDQUFZdlAsQ0FBWixDQUFYOztBQUVBLGdCQUFHTSxVQUFVbVAsMkJBQVYsQ0FBc0MvQixLQUFLek8sSUFBM0MsRUFBaURtQixLQUFLdEMsSUFBdEQsRUFBNERzQyxLQUFLUSxLQUFqRSxDQUFILEVBQTRFO0FBQzFFTix3QkFBVTRILGNBQVYsR0FBMkIsSUFBM0I7QUFDQTVILHdCQUFVb1AsY0FBVixDQUF5QmhDLEtBQUt6TyxJQUE5Qjs7QUFFQSxtQkFBSSxJQUFJMFEsRUFBUixJQUFjakMsS0FBS3pPLElBQUwsQ0FBVStNLFlBQXhCLEVBQXNDO0FBQ3BDLG9CQUFHLENBQUMwQixLQUFLek8sSUFBTCxDQUFVK00sWUFBVixDQUF1Qi9MLGNBQXZCLENBQXNDMFAsRUFBdEMsQ0FBSixFQUErQztBQUM3QztBQUNEOztBQUVELG9CQUFJQyxRQUFRbEMsS0FBS3pPLElBQUwsQ0FBVStNLFlBQVYsQ0FBdUIyRCxFQUF2QixDQUFaO0FBQ0Esb0JBQUkvTyxTQUFRLGdCQUFNcUwsaUJBQU4sQ0FBd0IyRCxNQUFNOVIsSUFBOUIsRUFBb0M4UixNQUFNdFAsU0FBTixDQUFnQmlLLE9BQXBELENBQVo7O0FBRUFxRixzQkFBTXRQLFNBQU4sQ0FBZ0J1TixpQkFBaEIsQ0FBa0NILEtBQUt6TyxJQUF2QyxFQUE2QzJRLE1BQU05UixJQUFuRCxFQUF5RDhDLE1BQXpEO0FBQ0Q7O0FBRUROLHdCQUFVNEgsY0FBVixHQUEyQixJQUEzQjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxlQUFPNUgsU0FBUDtBQUNELE9BbkNEOztBQXFDQSxVQUFJb00sV0FBVyxTQUFYQSxRQUFXLENBQUNuSyxRQUFELEVBQWM7QUFDM0IsYUFBSyxJQUFJckMsTUFBSSxDQUFSLEVBQVdDLE1BQUlvQyxTQUFTMUIsTUFBN0IsRUFBcUNYLE1BQUlDLEdBQXpDLEVBQTRDRCxLQUE1QyxFQUFpRDtBQUMvQyxjQUFJSSxZQUFZK08sV0FBVzlNLFNBQVNyQyxHQUFULENBQVgsQ0FBaEI7O0FBRUF3TSxtQkFBU3BNLFVBQVU2SCxVQUFuQjtBQUNEO0FBQ0YsT0FORDs7QUFRQWtILGlCQUFXLEtBQUtyUixFQUFoQjtBQUNBME8sZUFBUyxLQUFLdkUsVUFBZDtBQUNEOzs7OztBQUVEOzs7Ozs7OztxQ0FRaUJySyxJLEVBQU04QyxLLEVBQTBCO0FBQUE7O0FBQUEsVUFBbkJQLFNBQW1CLHVFQUFQLEtBQU87O0FBQy9DLFVBQUk2SixPQUFPLEtBQUtvRixTQUFMLENBQWV4UixJQUFmLENBQVg7O0FBRUEsVUFBSStSLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxHQUFELEVBQU1wRSxPQUFOLEVBQWtCO0FBQzdCLGFBQUksSUFBSTFMLENBQVIsSUFBYThQLEdBQWIsRUFBa0I7QUFDaEIsY0FBRyxDQUFDQSxJQUFJN1AsY0FBSixDQUFtQkQsQ0FBbkIsQ0FBRCxJQUEwQkEsS0FBSyxRQUFsQyxFQUE0QztBQUMxQztBQUNEOztBQUVELGNBQUkrUCxRQUFRLEdBQUc5RSxNQUFILENBQVVTLE9BQVYsRUFBbUIsQ0FBQzFMLENBQUQsQ0FBbkIsQ0FBWjtBQUNBLGNBQUlnUSxTQUFTRCxNQUFNL0ssS0FBTixFQUFiO0FBQ0EsY0FBSWlMLGFBQWEsS0FBakI7QUFDQSxjQUFJdFAsTUFBTW1QLElBQUk5UCxDQUFKLENBQVY7QUFDQSxjQUFJa1EsZUFBSjs7QUFFQUYsaUJBQU9HLEtBQVA7QUFDQUQsbUJBQVMsZ0JBQU1FLGlCQUFOLENBQXdCSixNQUF4QixFQUFnQ3BQLEtBQWhDLENBQVQ7O0FBRUEsY0FBR0EsU0FBUyxRQUFPQSxLQUFQLHlDQUFPQSxLQUFQLE1BQWdCLFFBQXpCLElBQXFDLENBQUNzUCxNQUF6QyxFQUFpRDtBQUMvQ0QseUJBQWEsSUFBYjtBQUNEOztBQUVELGNBQUd0UCxPQUFPLFFBQU9BLEdBQVAseUNBQU9BLEdBQVAsTUFBYyxRQUF4QixFQUFrQztBQUNoQ2tQLG1CQUFPbFAsR0FBUCxFQUFZb1AsS0FBWjtBQUNEOztBQUVELGlCQUFLTSxnQkFBTCxDQUFzQk4sS0FBdEIsRUFBNkIsSUFBN0I7O0FBRUEsY0FBR25QLFVBQVUsSUFBVixJQUFrQixRQUFPQSxLQUFQLHlDQUFPQSxLQUFQLE1BQWdCLFFBQWxDLElBQThDLENBQUNzUCxNQUFsRCxFQUEwRDtBQUN4RCxtQkFBS0ksUUFBTCxDQUFjUCxLQUFkO0FBQ0FFLDBCQUFjLGdCQUFNTSxvQkFBTixDQUEyQlAsTUFBM0IsRUFBbUNwUCxLQUFuQyxDQUFkO0FBQ0Q7QUFDRjtBQUNGLE9BOUJEOztBQWdDQXNKLGNBQVEyRixPQUFPM0YsSUFBUCxFQUFhLEdBQUdlLE1BQUgsQ0FBVW5OLElBQVYsQ0FBYixDQUFSO0FBQ0EsV0FBS3VTLGdCQUFMLENBQXNCdlMsSUFBdEI7O0FBRUEsVUFBR3VDLFNBQUgsRUFBYztBQUNaLGFBQUtpUSxRQUFMLENBQWN4UyxJQUFkO0FBQ0F1QyxxQkFBYSxnQkFBTWtRLG9CQUFOLENBQTJCelMsSUFBM0IsRUFBaUMsS0FBS3lNLE9BQXRDLENBQWI7QUFDRDtBQUNGOztBQUVEOzs7Ozs7Ozs7OztvQ0FRZ0J0TCxJLEVBQU1qQixFLEVBQUlrUSxDLEVBQUc7QUFDM0IsVUFBSTFHLGFBQWFMLGdCQUFnQnFKLElBQWhCLENBQXFCdlIsS0FBS3NOLFlBQTFCLENBQWpCOztBQUVBLFVBQUcsQ0FBQy9FLFVBQUosRUFBZ0I7QUFDZDtBQUNEOztBQUVELE9BQUN4RCxPQUFPeU0sS0FBUixLQUFrQnpNLE9BQU95TSxLQUFQLEdBQWV2QyxDQUFqQzs7QUFFQSxXQUFLbkcsaUJBQUwsR0FBeUI7QUFDdkIvSixZQUFJQSxFQURtQjtBQUV2QnNDLG1CQUFXLElBRlk7QUFHdkJtUSxlQUFPdkMsQ0FIZ0I7QUFJdkJqUCxjQUFNQTtBQUppQixPQUF6Qjs7QUFPQSxXQUFLaUosY0FBTCxHQUFzQixJQUF0QjtBQUNBLFdBQUs5RCxXQUFMLENBQWlCMkksS0FBakIsQ0FBdUIsS0FBS3hFLHFCQUFMLENBQTJCbkssS0FBbEQsRUFBeURvSixXQUFXLENBQVgsQ0FBekQ7QUFDQSxXQUFLTyxpQkFBTCxHQUF5QixJQUF6QjtBQUNEOztBQUVEOzs7Ozs7Ozs7bUNBTWU5SSxJLEVBQU07QUFDbkIsVUFBRyxLQUFLeVIsaUJBQUwsQ0FBdUJ6UixJQUF2QixDQUFILEVBQWlDO0FBQy9CQSxhQUFNQSxnQkFBZ0I2TyxJQUFqQixHQUF3QixPQUF4QixHQUFpQyxXQUF0QyxJQUFxRCxLQUFLcEUsVUFBTCxDQUFnQnpLLElBQWhCLENBQXJEO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7Ozs7Ozs7MENBUXNCQSxJLEVBQU1qQixFLEVBQUkyUyxXLEVBQWE7QUFDM0MsVUFBR3BKLGlCQUFpQkksT0FBakIsQ0FBeUIxSSxLQUFLbU0sUUFBOUIsS0FBMkMsQ0FBQyxDQUEvQyxFQUFrRDtBQUNoRDtBQUNEOztBQUVELFdBQUs1QixnQkFBTCxDQUFzQnZLLElBQXRCLEVBQTRCakIsRUFBNUI7O0FBRUEsVUFBSTRTLFlBQVkzUixLQUFLbU0sUUFBTCxDQUFjN0wsT0FBZCxDQUFzQixXQUF0QixFQUFtQyxJQUFuQyxDQUFoQjtBQUNBLFVBQUk2TCxXQUFXLGdCQUFNb0QsV0FBTixDQUFrQnZQLEtBQUttTSxRQUF2QixDQUFmO0FBQ0EsVUFBSTlLLFlBQVlxUSxjQUFhQSxXQUFiLEdBQTBCLElBQTFDOztBQUVBLFVBQUdDLGFBQWEzUixLQUFLbU0sUUFBckIsRUFBK0I7QUFDN0IsWUFBR25NLEtBQUs0UixPQUFSLEVBQWlCO0FBQ2Y7QUFDRDs7QUFFRCxZQUFJQyxVQUFVLElBQUksZ0JBQU0zSyxZQUFWLENBQXVCeUssU0FBdkIsRUFBa0M1UyxFQUFsQyxFQUFzQ3NDLFNBQXRDLENBQWQ7O0FBRUEsWUFBR3JCLEtBQUtzTixZQUFSLEVBQXNCO0FBQ3BCdUUsa0JBQVFwRCxJQUFSLENBQWEsVUFBQ1EsQ0FBRCxFQUFPO0FBQ2xCNU4sc0JBQVV5USxlQUFWLENBQTBCOVIsSUFBMUIsRUFBZ0NqQixFQUFoQyxFQUFvQ2tRLENBQXBDO0FBQ0QsV0FGRDtBQUdEOztBQUVEalAsYUFBSzRSLE9BQUwsR0FBZUMsT0FBZjtBQUNBOVMsV0FBR3NOLFlBQUgsQ0FBZ0JyTSxLQUFLbU0sUUFBckIsRUFBK0IsZ0JBQU0yQyxrQkFBTixDQUF5QitDLE9BQXpCLENBQS9COztBQUVBLFlBQUdILFdBQUgsRUFBZ0I7QUFDZCxlQUFLcEMsd0JBQUwsR0FBZ0MsSUFBaEM7QUFDQSxlQUFLekYsS0FBTCxDQUFXc0MsUUFBWCxJQUF1QjBGLE9BQXZCO0FBQ0EsZUFBS3ZDLHdCQUFMLEdBQWdDLEtBQWhDO0FBQ0Q7O0FBRUQ7QUFDRDs7QUFFRCxVQUFHb0MsV0FBSCxFQUFnQjtBQUNkMVIsYUFBS3FQLGFBQUwsR0FBcUIsSUFBckI7QUFDQXJQLGFBQUtxSixhQUFMLEdBQXFCaEksU0FBckI7QUFDRDs7QUFFRHRDLFNBQUdzTixZQUFILENBQWdCck0sS0FBS21NLFFBQXJCLEVBQStCOUssVUFBVW9KLFVBQVYsQ0FBcUJ6SyxJQUFyQixDQUEvQjtBQUNEOztBQUVEOzs7Ozs7Ozs7OztxQ0FRaUJBLEksRUFBTWpCLEUsRUFBSTtBQUN6QixVQUFHaUIsS0FBSytSLGFBQVIsRUFBdUI7QUFDckIsZUFBTyxLQUFQO0FBQ0Q7O0FBRUQvUixXQUFLc04sWUFBTCxHQUFvQnROLEtBQU1BLGdCQUFnQjZPLElBQWpCLEdBQXdCLE9BQXhCLEdBQWlDLFdBQXRDLENBQXBCO0FBQ0E3TyxXQUFLK00sWUFBTCxHQUFvQixFQUFwQjtBQUNBL00sV0FBS3FKLGFBQUwsR0FBcUIsSUFBckI7QUFDQXJKLFdBQUtxUCxhQUFMLEdBQXFCLElBQXJCO0FBQ0FyUCxXQUFLNFIsT0FBTCxHQUFlLElBQWY7QUFDQTVSLFdBQUttUCxhQUFMLEdBQXFCLEtBQXJCO0FBQ0FuUCxXQUFLK1IsYUFBTCxHQUFxQixJQUFyQjtBQUNBL1IsV0FBS1AsV0FBTCxHQUFtQixJQUFuQjtBQUNBTyxXQUFLK1AsU0FBTCxHQUFpQmhSLEVBQWpCOztBQUVBLGFBQU8sSUFBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7OzRDQU93QkEsRSxFQUF3QjtBQUFBLFVBQXBCMlMsV0FBb0IsdUVBQU4sSUFBTTs7QUFDOUMsV0FBSyxJQUFJelEsSUFBSSxDQUFSLEVBQVc0SSxRQUFROUssR0FBR21OLFVBQXRCLEVBQWtDaEwsSUFBSTJJLE1BQU1qSSxNQUFqRCxFQUF5RFgsSUFBSUMsQ0FBN0QsRUFBZ0VELEdBQWhFLEVBQXFFO0FBQ25FLGFBQUsrUSxxQkFBTCxDQUEyQm5JLE1BQU01SSxDQUFOLENBQTNCLEVBQXFDbEMsRUFBckMsRUFBeUMyUyxXQUF6QztBQUNEO0FBQ0Y7O0FBRUQ7Ozs7Ozs7O3lDQUtxQjtBQUFBOztBQUNuQixVQUFJTyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUN2TixHQUFELEVBQU0vQyxLQUFOLEVBQW1DO0FBQUEsWUFBdEJQLFNBQXNCLHVFQUFWLEtBQVU7O0FBQ3ZELFlBQUcsT0FBS2tPLHdCQUFSLEVBQWtDO0FBQ2hDO0FBQ0Q7O0FBRUQsWUFBSXRQLE9BQU8sT0FBS2pCLEVBQUwsQ0FBUW1ULGdCQUFSLENBQXlCeE4sR0FBekIsQ0FBWDs7QUFFQSxZQUFHMUUsSUFBSCxFQUFTO0FBQ1AsY0FBR0EsS0FBSzRSLE9BQVIsRUFBaUI7QUFDZjVSLGlCQUFLNFIsT0FBTCxDQUFhaEIsTUFBYjtBQUNBNVEsaUJBQUs0UixPQUFMLEdBQWUsSUFBZjtBQUNBNVIsaUJBQUtzTixZQUFMLEdBQW9CM0wsS0FBcEI7QUFDRDs7QUFFRCxjQUFHM0IsS0FBS21QLGFBQVIsRUFBdUI7QUFDckIsbUJBQUt4UCxRQUFMLElBQWlCLE9BQUtBLFFBQUwsQ0FBY08sT0FBZCxDQUFzQm9KLHFCQUF0QixDQUE0QzZJLGVBQTVDLENBQTRELENBQUNuUyxJQUFELENBQTVELENBQWpCO0FBQ0FBLGlCQUFLbVAsYUFBTCxHQUFxQixLQUFyQjtBQUNBblAsaUJBQUtzTixZQUFMLEdBQW9CM0wsS0FBcEI7QUFDRDtBQUNGOztBQUVELFlBQUdQLFNBQUgsRUFBYztBQUNaLGlCQUFLckMsRUFBTCxDQUFRdU4sZUFBUixDQUF3QjVILEdBQXhCO0FBQ0QsU0FGRCxNQUdLLElBQUcxRSxJQUFILEVBQVM7QUFDWkEsZUFBS3dLLFNBQUwsR0FBaUI3SSxLQUFqQjtBQUNELFNBRkksTUFHQTtBQUNILGlCQUFLNUMsRUFBTCxDQUFRc04sWUFBUixDQUFxQjNILEdBQXJCLEVBQTBCL0MsS0FBMUI7QUFDRDtBQUNGLE9BOUJEOztBQWdDQSxXQUFLa0ksS0FBTCxHQUFhLElBQUl1SSxLQUFKLENBQVUsS0FBS2hKLE9BQWYsRUFBd0I7QUFDbkMyQixhQUFLLGFBQUNzSCxNQUFELEVBQVMzTixHQUFULEVBQWlCO0FBQ3BCLGNBQUdBLE9BQU8sV0FBVixFQUF1QjtBQUNyQixtQkFBTyxJQUFQO0FBQ0Q7O0FBRUQsaUJBQU8yTixPQUFPM04sR0FBUCxDQUFQO0FBQ0QsU0FQa0M7QUFRbkM0TixhQUFLLGFBQUNELE1BQUQsRUFBUzNOLEdBQVQsRUFBYy9DLEtBQWQsRUFBd0I7QUFDM0IsY0FBSTRRLFVBQVUsZ0JBQU1qUSxVQUFOLENBQWlCb0MsR0FBakIsQ0FBZDs7QUFFQSxjQUFHLE9BQUtxSCxpQkFBTCxDQUF1QnJELE9BQXZCLENBQStCNkosT0FBL0IsS0FBMkMsQ0FBQyxDQUEvQyxFQUFrRDtBQUNoREEsbUNBQXFCQSxPQUFyQjs7QUFFQSxnQkFBRzVRLEtBQUgsRUFBVTtBQUNSLHFCQUFLNUMsRUFBTCxDQUFRc04sWUFBUixDQUFxQjNILEdBQXJCLEVBQTBCL0MsS0FBMUI7QUFDRCxhQUZELE1BR0s7QUFDSCxxQkFBSzVDLEVBQUwsQ0FBUXVOLGVBQVIsQ0FBd0I1SCxHQUF4QjtBQUNEO0FBQ0Y7O0FBRUQyTixpQkFBTzNOLEdBQVAsSUFBYy9DLEtBQWQ7QUFDQXNRLDBCQUFnQk0sT0FBaEIsRUFBeUIsZ0JBQU16RCxrQkFBTixDQUF5Qm5OLEtBQXpCLENBQXpCOztBQUVBLGlCQUFPLElBQVA7QUFDRCxTQTFCa0M7QUEyQm5DNlEsd0JBQWdCLHdCQUFDSCxNQUFELEVBQVMzTixHQUFULEVBQWMvQyxLQUFkLEVBQXdCO0FBQ3RDLGNBQUk0USxVQUFVLGdCQUFNalEsVUFBTixDQUFpQm9DLEdBQWpCLENBQWQ7O0FBRUF1TiwwQkFBZ0JNLE9BQWhCLEVBQXlCLGdCQUFNekQsa0JBQU4sQ0FBeUJuTixLQUF6QixDQUF6QixFQUEwRCxJQUExRDtBQUNBLGlCQUFPMFEsT0FBTzNOLEdBQVAsQ0FBUDs7QUFFQSxpQkFBTyxJQUFQO0FBQ0Q7QUFsQ2tDLE9BQXhCLENBQWI7QUFvQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7OzhCQVFVbU0sRyxFQUFLcEUsTyxFQUFTO0FBQUE7O0FBQ3RCLGFBQU8sSUFBSTJGLEtBQUosQ0FBVXZCLEdBQVYsRUFBZTtBQUNwQjlGLGFBQUssYUFBQ3NILE1BQUQsRUFBUzNOLEdBQVQsRUFBaUI7QUFDcEIsY0FBSUEsT0FBTyxXQUFYLEVBQXdCO0FBQ3RCLG1CQUFPLElBQVA7QUFDRDs7QUFFRCxjQUFJQSxPQUFPLFVBQVgsRUFBdUI7QUFDckIsbUJBQU9tTSxHQUFQO0FBQ0Q7O0FBRUQsY0FBSW5NLE9BQU8sYUFBWCxFQUEwQjtBQUN4QjtBQUNEOztBQUVELGNBQUlBLE9BQU8sUUFBWCxFQUFxQjtBQUNuQixtQkFBTytILE9BQVA7QUFDRDs7QUFFRCxjQUFHLE9BQUt4RCxjQUFSLEVBQXdCO0FBQ3RCLG1CQUFPb0osT0FBTzNOLEdBQVAsQ0FBUDtBQUNEOztBQUVELGNBQUcsT0FBSytELGFBQUwsQ0FBbUIvRCxHQUFuQixDQUFILEVBQTRCO0FBQzFCLG1CQUFPMk4sT0FBTzNOLEdBQVAsQ0FBUDtBQUNEOztBQUVELGNBQUcsT0FBTzJOLE9BQU8zTixHQUFQLENBQVAsSUFBc0IsVUFBekIsRUFBcUM7QUFDbkMsZ0JBQUkrTixhQUFjLGdCQUFNQyxvQkFBTixDQUEyQkwsTUFBM0IsRUFBbUMzTixHQUFuQyxDQUFsQjs7QUFFQSxnQkFBRyxDQUFDLGdCQUFNaU8sYUFBTixDQUFvQkYsVUFBcEIsQ0FBSixFQUFxQztBQUNuQ0EseUJBQVcvTixHQUFYLElBQWtCLGdCQUFNNEIsZUFBTixDQUFzQm1NLFdBQVcvTixHQUFYLENBQXRCLEVBQXVDK04sV0FBV2hULFdBQWxELENBQWxCO0FBQ0Q7QUFDRjs7QUFFRCxjQUFJLGdCQUFNbEIsWUFBVixFQUF3QjtBQUN0QixnQkFBSU0sT0FBTyxHQUFHbU4sTUFBSCxDQUFVUyxPQUFWLEVBQW1CLENBQUMvSCxHQUFELENBQW5CLENBQVg7QUFDQSxnQkFBSTJKLGFBQWEsS0FBakI7O0FBRUEsZ0JBQUcsRUFBRTNKLE9BQU8yTixNQUFULENBQUgsRUFBcUI7QUFDbkJBLHFCQUFPM04sR0FBUCxJQUFjbkQsU0FBZDtBQUNELGFBRkQsTUFHSyxJQUFHLENBQUMsZ0JBQU1xUiwyQkFBTixDQUFrQ1AsTUFBbEMsRUFBMEMzTixHQUExQyxDQUFKLEVBQW9EO0FBQ3ZEMkosMkJBQWEsSUFBYjtBQUNEOztBQUVELG1CQUFLd0UsVUFBTCxDQUFnQixnQkFBTXRVLFlBQU4sQ0FBbUJzUCxJQUFuQyxFQUF5Q2hQLElBQXpDLEVBQStDNE4sT0FBL0MsRUFBd0Q0RixPQUFPM04sR0FBUCxDQUF4RCxFQUFxRTJKLFVBQXJFOztBQUVBLG1CQUFPZ0UsT0FBTzNOLEdBQVAsQ0FBUDtBQUNEOztBQUVELGlCQUFPMk4sT0FBTzNOLEdBQVAsQ0FBUDtBQUNELFNBbkRtQjtBQW9EcEI0TixhQUFLLGFBQUNELE1BQUQsRUFBUzNOLEdBQVQsRUFBYy9DLEtBQWQsRUFBd0I7QUFDM0IsY0FBRyxPQUFLc0gsY0FBUixFQUF3QjtBQUN0Qm9KLG1CQUFPM04sR0FBUCxJQUFjL0MsS0FBZDs7QUFFQSxtQkFBTyxJQUFQO0FBQ0Q7O0FBRUQsY0FBRyxPQUFLOEcsYUFBTCxDQUFtQi9ELEdBQW5CLENBQUgsRUFBNEI7QUFDMUIyTixtQkFBTzNOLEdBQVAsSUFBYy9DLEtBQWQ7O0FBRUEsbUJBQU8sSUFBUDtBQUNEOztBQUVELGNBQUk5QyxPQUFPLEdBQUdtTixNQUFILENBQVVTLE9BQVYsRUFBbUIsQ0FBQy9ILEdBQUQsQ0FBbkIsQ0FBWDs7QUFFQSxjQUFHLE9BQUtrSCxnQkFBUixFQUEwQjtBQUN4QnlHLG1CQUFPM04sR0FBUCxJQUFjLE9BQUttSCxlQUFMLENBQXFCbEssS0FBckIsRUFBNEI5QyxJQUE1QixDQUFkO0FBQ0QsV0FGRCxNQUdLO0FBQ0h3VCxtQkFBTzNOLEdBQVAsSUFBYy9DLEtBQWQ7QUFDRDs7QUFFRCxjQUFHLGdCQUFNckQsV0FBVCxFQUFzQjtBQUNwQixtQkFBS3dVLHVCQUFMLENBQTZCckcsT0FBN0IsRUFBc0MvSCxHQUF0QyxFQUEyQyxLQUEzQzs7QUFFQSxtQkFBTyxJQUFQO0FBQ0Q7O0FBRUQsY0FBRyxPQUFLaUUsV0FBUixFQUFxQjtBQUNuQixtQkFBS3JILGdCQUFMLENBQXNCekMsSUFBdEIsRUFBNEI4QyxLQUE1QjtBQUNEOztBQUVELGlCQUFPLElBQVA7QUFDRCxTQXJGbUI7QUFzRnBCNlEsd0JBQWdCLHdCQUFDSCxNQUFELEVBQVMzTixHQUFULEVBQWlCO0FBQy9CLGNBQUk3RixPQUFPLEdBQUdtTixNQUFILENBQVVTLE9BQVYsRUFBbUIsQ0FBQy9ILEdBQUQsQ0FBbkIsQ0FBWDs7QUFFQSxjQUFHLE9BQUt1RSxjQUFSLEVBQXdCO0FBQ3RCLG1CQUFPb0osT0FBTzNOLEdBQVAsQ0FBUDs7QUFFQSxtQkFBTyxJQUFQO0FBQ0Q7O0FBRUQsY0FBRyxPQUFLK0QsYUFBTCxDQUFtQi9ELEdBQW5CLENBQUgsRUFBNEI7QUFDMUIsbUJBQU8yTixPQUFPM04sR0FBUCxDQUFQOztBQUVBLG1CQUFPLElBQVA7QUFDRDs7QUFFRCxjQUFHLGdCQUFNcEcsV0FBVCxFQUFzQjtBQUNwQixtQkFBTytULE9BQU8zTixHQUFQLENBQVA7QUFDQSxtQkFBS29PLHVCQUFMLENBQTZCckcsT0FBN0IsRUFBc0MvSCxHQUF0QyxFQUEyQyxJQUEzQzs7QUFFQSxtQkFBTyxJQUFQO0FBQ0Q7O0FBRUQsaUJBQU8yTixPQUFPM04sR0FBUCxDQUFQO0FBQ0EsaUJBQUtwRCxnQkFBTCxDQUFzQnpDLElBQXRCLEVBQTRCMEMsU0FBNUIsRUFBdUMsSUFBdkM7O0FBRUEsaUJBQU8sSUFBUDtBQUNEO0FBaEhtQixPQUFmLENBQVA7QUFrSEQ7O0FBRUQ7Ozs7Ozs7Ozs7O0FBaUJBOzs7Ozs7O29DQU9pQkksSyxFQUFPb1IsUyxFQUFXO0FBQUE7O0FBQ2pDLFdBQUs5SixjQUFMLEdBQXNCLElBQXRCOztBQUVBLFVBQUkrSixVQUFVLFNBQVZBLE9BQVUsQ0FBQ3JSLEtBQUQsRUFBUThLLE9BQVIsRUFBb0I7QUFDaEMsWUFBRyxRQUFPOUssS0FBUCx5Q0FBT0EsS0FBUCxNQUFnQixRQUFoQixJQUE0QkEsVUFBVSxJQUF6QyxFQUErQztBQUM3QyxpQkFBT0EsS0FBUDtBQUNEOztBQUVELFlBQUcsQ0FBQyxnQkFBTWdSLGFBQU4sQ0FBb0JoUixLQUFwQixDQUFELElBQStCLENBQUMsZ0JBQU02TSxZQUFOLENBQW1CN00sS0FBbkIsQ0FBaEMsSUFBNkQsRUFBRUEsaUJBQWlCLGdCQUFNd0YsS0FBekIsQ0FBaEUsRUFBaUc7QUFDL0YsaUJBQU94RixLQUFQO0FBQ0Q7O0FBRUQsWUFBSTBRLFNBQVMxUSxLQUFiOztBQUVBLFlBQUdBLE1BQU1pRCxTQUFULEVBQW9CO0FBQ2xCeU4sbUJBQVMxUSxNQUFNc1IsUUFBZjs7QUFFQSxjQUFHLENBQUMsT0FBS0Msd0JBQVQsRUFBbUM7QUFDakMsZ0JBQUd2UixNQUFNbEMsV0FBTixXQUFILEVBQStCO0FBQzdCNFMsdUJBQVMsZ0JBQU1uRixJQUFOLENBQVdtRixNQUFYLEVBQW1CLEtBQW5CLENBQVQ7QUFDQTFRLHNCQUFRMFEsTUFBUjtBQUNELGFBSEQsTUFJSyxJQUFHLGdCQUFNelQsZUFBTixDQUFzQjZOLE9BQXRCLEtBQWtDLGdCQUFNN04sZUFBTixDQUFzQitDLE1BQU1vUCxNQUE1QixDQUFyQyxFQUEwRTtBQUM3RXBQLHNCQUFRMFEsTUFBUjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxhQUFJLElBQUl0UixDQUFSLElBQWFzUixNQUFiLEVBQXFCO0FBQ25CLGNBQUksQ0FBQ0EsT0FBT3JSLGNBQVAsQ0FBc0JELENBQXRCLENBQUwsRUFBK0I7QUFDN0I7QUFDRDs7QUFFRCxjQUFJVyxNQUFNMlEsT0FBT3RSLENBQVAsQ0FBVjtBQUNBLGNBQUlsQyxPQUFPLEdBQUdtTixNQUFILENBQVVTLE9BQVYsRUFBbUIsQ0FBQzFMLENBQUQsQ0FBbkIsQ0FBWDs7QUFFQXNSLGlCQUFPdFIsQ0FBUCxJQUFZaVMsUUFBUXRSLEdBQVIsRUFBYTdDLElBQWIsQ0FBWjtBQUNEOztBQUVELFlBQUcsQ0FBQzhDLE1BQU1pRCxTQUFWLEVBQXFCO0FBQ25CLGlCQUFPLE9BQUtrSCxTQUFMLENBQWV1RyxNQUFmLEVBQXVCNUYsT0FBdkIsQ0FBUDtBQUNEOztBQUVELGVBQU85SyxLQUFQO0FBQ0QsT0F6Q0Q7O0FBMkNBLFVBQUlkLE1BQU1tUyxRQUFRclIsS0FBUixFQUFlb1IsYUFBYSxFQUE1QixDQUFWOztBQUVBLFdBQUs5SixjQUFMLEdBQXNCLElBQXRCOztBQUVBLGFBQU9wSSxHQUFQO0FBQ0Q7Ozs7O0FBRUQ7Ozs7Ozs7Ozs0Q0FTeUI0TCxPLEVBQVMvSCxHLEVBQXdCO0FBQUEsVUFBbkJ0RCxTQUFtQix1RUFBUCxLQUFPOztBQUN4RCxVQUFJdkMsT0FBTzROLFFBQVE3SyxNQUFSLEdBQWdCLENBQUM2SyxRQUFRLENBQVIsQ0FBRCxDQUFoQixHQUE4QixDQUFDL0gsR0FBRCxDQUF6QztBQUNBLFVBQUl5TyxlQUFrQixLQUFLN0gsT0FBTCxDQUFhbE0sTUFBL0IsU0FBeUMsZ0JBQU1SLGVBQU4sQ0FBc0JDLElBQXRCLENBQTdDOztBQUVBLFVBQUc0TixRQUFRN0ssTUFBWCxFQUFtQjtBQUNqQlIsb0JBQVksS0FBWjtBQUNEOztBQUVELFVBQUcsQ0FBQyxnQkFBTTlDLFdBQU4sQ0FBa0I2VSxZQUFsQixDQUFKLEVBQXFDO0FBQ25DLHdCQUFNN1UsV0FBTixDQUFrQjZVLFlBQWxCLElBQWtDO0FBQ2hDOVIscUJBQVcsSUFEcUI7QUFFaEN4QyxnQkFBTUE7QUFGMEIsU0FBbEM7QUFJRDs7QUFFQXVDLG9CQUFjRyxTQUFmLEtBQThCLGdCQUFNakQsV0FBTixDQUFrQjZVLFlBQWxCLEVBQWdDL1IsU0FBaEMsR0FBNENBLFNBQTFFO0FBQ0Esc0JBQU05QyxXQUFOLENBQWtCNlUsWUFBbEIsRUFBZ0N4UixLQUFoQyxHQUF3QyxnQkFBTXFMLGlCQUFOLENBQXdCbk8sSUFBeEIsRUFBOEIsS0FBS3lNLE9BQW5DLENBQXhDOztBQUVBLGFBQU8sZ0JBQU1oTixXQUFOLENBQWtCNlUsWUFBbEIsQ0FBUDtBQUNEOzs7OztBQUVEOzs7Ozs7Ozs7OytCQVVXMUUsSSxFQUFNNVAsSSxFQUFNNE4sTyxFQUFTOUssSyxFQUEyQjtBQUFBLFVBQXBCME0sVUFBb0IsdUVBQVAsS0FBTzs7QUFDekQsVUFBSStFLG1CQUFtQixnQkFBTXhVLGVBQU4sQ0FBc0I2TixPQUF0QixDQUF2Qjs7QUFFQSxVQUFHZ0MsS0FBSzdNLE1BQUwsSUFBZSxDQUFDeU0sVUFBbkIsRUFBK0I7QUFDN0IsWUFBSW5OLElBQUl1TixLQUFLN00sTUFBTCxHQUFjLENBQXRCO0FBQ0EsWUFBSXFKLE9BQU93RCxLQUFLdk4sQ0FBTCxDQUFYOztBQUVBLFlBQUcrSixLQUFLbUQsVUFBTCxJQUFtQmdGLGdCQUFuQixJQUF1Q25JLEtBQUs1SixTQUFMLEtBQW1CLElBQTdELEVBQW1FO0FBQ2pFb04sZUFBS3RJLE1BQUwsQ0FBWWpGLENBQVosRUFBZSxDQUFmO0FBQ0Q7QUFDRjs7QUFFRHVOLFdBQUt0TyxJQUFMLENBQVU7QUFDUmtCLG1CQUFXLElBREg7QUFFUitNLG9CQUFZLGdCQUFNeFAsZUFBTixDQUFzQkMsSUFBdEIsQ0FGSjtBQUdSNE4saUJBQVNBLE9BSEQ7QUFJUjVOLGNBQU1BLElBSkU7QUFLUjhDLGVBQU9BLEtBTEM7QUFNUjBNLG9CQUFZQTtBQU5KLE9BQVY7QUFRRDs7Ozs7QUFFRDs7Ozs7Ozs4QkFPVXhQLEksRUFBTTtBQUNkLGFBQU8sZ0JBQU1tTyxpQkFBTixDQUF3Qm5PLElBQXhCLEVBQThCLEtBQUtnSyxVQUFuQyxLQUFrRCxJQUF6RDtBQUNEOztBQUVEOzs7Ozs7Ozs7OzttQ0FRZWhLLEksRUFBTW1CLEksRUFBTTtBQUN6QixVQUFJeU8sT0FBUSxnQkFBTXpCLGlCQUFOLENBQXdCbk8sSUFBeEIsRUFBOEIsS0FBS2dLLFVBQW5DLENBQVo7O0FBRUEsVUFBRyxDQUFDNEYsSUFBRCxJQUFTLENBQUNBLEtBQUs2QixNQUFmLElBQXlCLENBQUM3QixLQUFLNkIsTUFBTCxDQUFZMU8sTUFBekMsRUFBaUQ7QUFDL0MsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsV0FBSSxJQUFJWCxJQUFJLENBQVIsRUFBV0MsSUFBSXVOLEtBQUs2QixNQUFMLENBQVkxTyxNQUEvQixFQUF1Q1gsSUFBSUMsQ0FBM0MsRUFBOENELEdBQTlDLEVBQW1EO0FBQ2pELFlBQUlnSyxPQUFPd0QsS0FBSzZCLE1BQUwsQ0FBWXJQLENBQVosQ0FBWDs7QUFFQSxZQUFHZ0ssS0FBS2pMLElBQUwsS0FBY0EsSUFBakIsRUFBdUI7QUFDckIsaUJBQU9pTCxJQUFQO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPLElBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7O3NDQVNrQmpMLEksRUFBTW5CLEksRUFBTThDLEssRUFBTztBQUNuQyxVQUFJUixPQUFPLEtBQUtnTSxpQkFBTCxDQUF1Qm5OLElBQXZCLEVBQTZCbkIsSUFBN0IsQ0FBWDtBQUNBLFVBQUlxTyxPQUFPLGdCQUFNQSxJQUFOLENBQVd2TCxLQUFYLENBQVg7O0FBRUEsVUFBR1IsSUFBSCxFQUFTO0FBQ1AsWUFBSU4sTUFBTSxnQkFBTW9NLG9CQUFOLENBQTJCdEwsS0FBM0IsRUFBa0NSLEtBQUtRLEtBQXZDLEVBQThDUixLQUFLK0wsSUFBbkQsRUFBeURBLElBQXpELENBQVY7O0FBRUEvTCxhQUFLUSxLQUFMLEdBQWFBLEtBQWI7QUFDQVIsYUFBSytMLElBQUwsR0FBWUEsSUFBWjs7QUFFQSxlQUFPLENBQUNyTSxHQUFSO0FBQ0Q7O0FBRUQsVUFBSXNOLE9BQVUsS0FBSzdDLE9BQUwsQ0FBYWxNLE1BQXZCLFNBQWlDLGdCQUFNUixlQUFOLENBQXNCQyxJQUF0QixDQUFyQzs7QUFFQW1CLFdBQUsrTSxZQUFMLENBQWtCb0IsSUFBbEIsSUFBMEI7QUFDeEJ4TSxlQUFPQSxLQURpQjtBQUV4QnVMLGNBQU1BLElBRmtCO0FBR3hCN0wsbUJBQVcsSUFIYTtBQUl4QnhDLGNBQU1BO0FBSmtCLE9BQTFCOztBQU9BLGFBQU8sSUFBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7OztzQ0FRa0JtQixJLEVBQU1uQixJLEVBQU07QUFDNUIsVUFBSXNQLE9BQVUsS0FBSzdDLE9BQUwsQ0FBYWxNLE1BQXZCLFNBQWlDLGdCQUFNUixlQUFOLENBQXNCQyxJQUF0QixDQUFyQzs7QUFFQSxhQUFPbUIsS0FBSytNLFlBQUwsQ0FBa0JvQixJQUFsQixLQUEyQixJQUFsQztBQUNEOztBQUVEOzs7Ozs7Ozs7O3lDQU9xQm5PLEksRUFBTW5CLEksRUFBTTtBQUMvQixVQUFJc1AsT0FBVSxLQUFLN0MsT0FBTCxDQUFhbE0sTUFBdkIsU0FBaUMsZ0JBQU1SLGVBQU4sQ0FBc0JDLElBQXRCLENBQXJDOztBQUVBLGFBQU9tQixLQUFLK00sWUFBTCxDQUFrQm9CLElBQWxCLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7OzsyQkFPT3RQLEksRUFBTW9NLEksRUFBTTtBQUNqQixzQkFBTXpKLGlCQUFOLENBQXdCM0MsSUFBeEIsRUFBOEIsS0FBS2dLLFVBQW5DLEVBQStDLFVBQUNwSCxJQUFELEVBQU9FLEtBQVAsRUFBaUI7QUFDOUQsWUFBSWtQLE1BQU0sRUFBQ1AsUUFBUSxFQUFULEVBQVY7O0FBRUEsWUFBRyxDQUFDN08sSUFBSixFQUFVO0FBQ1IsaUJBQU9FLFFBQU9BLEtBQVAsR0FBY2tQLEdBQXJCO0FBQ0Q7O0FBRUQsWUFBRyxRQUFPbFAsS0FBUCx5Q0FBT0EsS0FBUCxNQUFnQixRQUFuQixFQUE2QjtBQUMzQmtQLGdCQUFNbFAsS0FBTjtBQUNEOztBQUVELFlBQUcsQ0FBQ2tQLElBQUlQLE1BQVIsRUFBZ0I7QUFDZE8sY0FBSVAsTUFBSixHQUFhLEVBQWI7QUFDRDs7QUFFRE8sWUFBSVAsTUFBSixDQUFXblEsSUFBWCxDQUFnQjhLLElBQWhCOztBQUVBLGVBQU80RixHQUFQO0FBQ0QsT0FsQkQ7QUFtQkQ7O0FBRUQ7Ozs7Ozs7Ozs2QkFNU2hTLEksRUFBTTtBQUNiLFVBQUk0UCxPQUFPLGdCQUFNekIsaUJBQU4sQ0FBd0JuTyxJQUF4QixFQUE4QixLQUFLZ0ssVUFBbkMsQ0FBWDs7QUFFQSxVQUFHLENBQUM0RixJQUFELElBQVMsQ0FBQ0EsS0FBSzZCLE1BQWxCLEVBQTBCO0FBQ3hCO0FBQ0Q7O0FBRUQsV0FBSSxJQUFJclAsSUFBSSxDQUFSLEVBQVdDLElBQUl1TixLQUFLNkIsTUFBTCxDQUFZMU8sTUFBL0IsRUFBdUNYLElBQUlDLENBQTNDLEVBQThDRCxHQUE5QyxFQUFtRDtBQUNqRCxZQUFJakIsT0FBT3lPLEtBQUs2QixNQUFMLENBQVlyUCxDQUFaLEVBQWVqQixJQUExQjs7QUFFQSxhQUFLcVQsb0JBQUwsQ0FBMEJyVCxJQUExQixFQUFnQ25CLElBQWhDO0FBQ0Q7O0FBRUQsc0JBQU15UyxvQkFBTixDQUEyQnpTLElBQTNCLEVBQWlDLEtBQUtnSyxVQUF0QyxFQUFrRCxVQUFDbEgsS0FBRCxFQUFXO0FBQzNELFlBQUdrQixPQUFPaEUsSUFBUCxDQUFZOEMsS0FBWixFQUFtQkMsTUFBbkIsR0FBNEIsQ0FBL0IsRUFBa0M7QUFDaENELGdCQUFNMk8sTUFBTixHQUFlLEVBQWY7O0FBRUEsaUJBQU8sS0FBUDtBQUNEOztBQUVELGVBQU8sSUFBUDtBQUNELE9BUkQ7QUFTRDs7QUFFRDs7Ozs7Ozs7O29DQU1nQmdELEssRUFBTztBQUNyQixVQUFJMUMsU0FBUyxTQUFUQSxNQUFTLENBQUNDLEdBQUQsRUFBUztBQUNwQixhQUFJLElBQUk5UCxDQUFSLElBQWE4UCxHQUFiLEVBQWtCO0FBQ2hCLGNBQUcsQ0FBQ0EsSUFBSTdQLGNBQUosQ0FBbUJELENBQW5CLENBQUosRUFBMkI7QUFDekI7QUFDRDs7QUFFRCxjQUFHQSxLQUFLLFFBQVIsRUFBa0I7QUFDaEIsZ0JBQUlrSyxPQUFPNEYsSUFBSTlQLENBQUosS0FBVSxFQUFyQjtBQUNBLGdCQUFJRyxJQUFJK0osS0FBS3JKLE1BQWI7O0FBRUEsaUJBQUksSUFBSVgsSUFBSSxDQUFaLEVBQWVBLElBQUlDLENBQW5CLEVBQXNCRCxHQUF0QixFQUEyQjtBQUN6QixrQkFBSXdOLE9BQU94RCxLQUFLaEssQ0FBTCxDQUFYOztBQUVBLGtCQUFHcVMsTUFBTTVLLE9BQU4sQ0FBYytGLEtBQUt6TyxJQUFuQixLQUE0QixDQUFDLENBQWhDLEVBQW1DO0FBQ2pDaUwscUJBQUs5RSxNQUFMLENBQVlsRixDQUFaLEVBQWUsQ0FBZjtBQUNBQTtBQUNBQztBQUNEO0FBQ0Y7O0FBRUQsZ0JBQUcsQ0FBQ0EsQ0FBSixFQUFPO0FBQ0wscUJBQU8yUCxJQUFJOVAsQ0FBSixDQUFQO0FBQ0Q7QUFDRixXQWpCRCxNQWtCSztBQUNINlAsbUJBQU9DLElBQUk5UCxDQUFKLENBQVA7QUFDRDtBQUNGO0FBQ0YsT0E1QkQ7O0FBOEJBNlAsYUFBTyxLQUFLL0gsVUFBWjtBQUNBLFdBQUswSyxvQkFBTDtBQUNEOztBQUVEOzs7Ozs7Ozs7eUNBTXFCMUMsRyxFQUFLO0FBQ3hCLFVBQUkyQyxRQUFRLFNBQVJBLEtBQVEsQ0FBQzNDLEdBQUQsRUFBTXhHLE1BQU4sRUFBYzNGLEdBQWQsRUFBc0I7QUFDaEMsYUFBSSxJQUFJM0QsQ0FBUixJQUFhOFAsR0FBYixFQUFrQjtBQUNoQixjQUFHLENBQUNBLElBQUk3UCxjQUFKLENBQW1CRCxDQUFuQixDQUFKLEVBQTJCO0FBQ3pCO0FBQ0Q7O0FBRUQsY0FBSVcsTUFBTW1QLElBQUk5UCxDQUFKLENBQVY7O0FBRUEsY0FBR0EsS0FBSyxRQUFMLEtBQWtCLENBQUNXLEdBQUQsSUFBUSxDQUFDQSxJQUFJRSxNQUEvQixDQUFILEVBQTJDO0FBQ3pDLG1CQUFPaVAsSUFBSTlQLENBQUosQ0FBUDtBQUNELFdBRkQsTUFHSyxJQUFHQSxLQUFLLFFBQVIsRUFBa0I7QUFDckIsZ0JBQUcsQ0FBQzhCLE9BQU9oRSxJQUFQLENBQVlnUyxJQUFJOVAsQ0FBSixDQUFaLEVBQW9CYSxNQUF4QixFQUFnQztBQUM5QixxQkFBT2lQLElBQUk5UCxDQUFKLENBQVA7QUFDRCxhQUZELE1BR0s7QUFDSHlTLG9CQUFNM0MsSUFBSTlQLENBQUosQ0FBTixFQUFjOFAsR0FBZCxFQUFtQjlQLENBQW5CO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFlBQUcsQ0FBQzhCLE9BQU9oRSxJQUFQLENBQVlnUyxHQUFaLEVBQWlCalAsTUFBbEIsSUFBNEJ5SSxNQUEvQixFQUF1QztBQUNyQyxpQkFBT0EsT0FBTzNGLEdBQVAsQ0FBUDtBQUNEO0FBQ0YsT0F4QkQ7O0FBMEJBOE8sWUFBTTNDLE9BQU8sS0FBS2hJLFVBQWxCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7O3VDQUttQjtBQUNqQixVQUFJbEQsU0FBUyxTQUFUQSxNQUFTLENBQUNuQyxRQUFELEVBQWM7QUFDekIsYUFBSSxJQUFJdkMsSUFBSSxDQUFaLEVBQWVBLElBQUl1QyxTQUFTNUIsTUFBNUIsRUFBb0NYLEdBQXBDLEVBQXlDO0FBQ3ZDLGNBQUl3QyxRQUFRRCxTQUFTdkMsQ0FBVCxDQUFaOztBQUVBMEUsaUJBQU9sQyxNQUFNdkQsT0FBTixDQUFjZ0osVUFBckI7QUFDQXpGLGdCQUFNdkQsT0FBTixDQUFjdVQsUUFBZDtBQUNBeFM7QUFDRDtBQUNGLE9BUkQ7O0FBVUEwRSxhQUFPLEtBQUt1RCxVQUFaO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OytCQUtXO0FBQ1QsV0FBSzBELFFBQUw7QUFDQSxXQUFLL0MsS0FBTCxDQUFXNkosU0FBWCxJQUF3QixLQUFLN0osS0FBTCxDQUFXNkosU0FBWCxDQUFxQjlJLE9BQXJCLEVBQXhCO0FBQ0EsV0FBSytJLE9BQUw7QUFDQSxzQkFBTW5VLFdBQU4sQ0FBa0IsS0FBSzhMLE9BQUwsQ0FBYWxNLE1BQS9CO0FBQ0EsV0FBS0wsRUFBTCxDQUFRNEcsTUFBUjtBQUNEOztBQUVEOzs7Ozs7OzsrQkFLVztBQUNULFVBQUcsS0FBS3FFLGdCQUFMLElBQXlCLENBQUMsS0FBS0QsbUJBQWxDLEVBQXVEO0FBQ3JELGFBQUtDLGdCQUFMLENBQXNCOUosT0FBdEIsQ0FBOEJpUyxlQUE5QixDQUE4QyxHQUFHcE0sS0FBSCxDQUFTQyxJQUFULENBQWMsS0FBS2pILEVBQUwsQ0FBUW1OLFVBQXRCLENBQTlDO0FBQ0Q7O0FBRUQsVUFBRyxLQUFLdk0sUUFBUixFQUFrQjtBQUNoQixhQUFLQSxRQUFMLENBQWNPLE9BQWQsQ0FBc0IwVCxhQUF0QixDQUFvQyxLQUFLN1UsRUFBekM7QUFDRDtBQUNGOztBQUVEOzs7Ozs7OztnQ0FLWTtBQUNWLFdBQUs4VSxnQkFBTDtBQUNBLFdBQUtKLFFBQUw7QUFDRDs7QUFFRDs7Ozs7Ozs7OEJBS1U7QUFDUixVQUFJSCxRQUFRLEVBQVo7O0FBRUEsV0FBS08sZ0JBQUw7O0FBRUEsVUFBSUMsT0FBTyxTQUFQQSxJQUFPLENBQUN0USxRQUFELEVBQWM7QUFDdkIsYUFBSSxJQUFJdkMsSUFBSSxDQUFSLEVBQVdDLElBQUlzQyxTQUFTNUIsTUFBNUIsRUFBb0NYLElBQUlDLENBQXhDLEVBQTJDRCxHQUEzQyxFQUFnRDtBQUM5QyxjQUFJd0MsUUFBUUQsU0FBU3ZDLENBQVQsQ0FBWjs7QUFFQSxjQUFHd0MsTUFBTTZHLFFBQU4sSUFBa0IsQ0FBckIsRUFBd0I7QUFDdEJnSixrQkFBTW5ULElBQU4sQ0FBV3NELEtBQVg7QUFDRCxXQUZELE1BR0ssSUFBR0EsTUFBTTZHLFFBQU4sSUFBa0IsQ0FBbEIsSUFBdUIsQ0FBQzdHLE1BQU12RCxPQUFqQyxFQUEwQztBQUM3QyxpQkFBSyxJQUFJYSxJQUFJLENBQVIsRUFBVzhJLFFBQVFwRyxNQUFNeUksVUFBekIsRUFBcUNxRSxJQUFJMUcsTUFBTWpJLE1BQXBELEVBQTREYixJQUFJd1AsQ0FBaEUsRUFBbUV4UCxHQUFuRSxFQUF3RTtBQUN0RXVTLG9CQUFNblQsSUFBTixDQUFXMEosTUFBTTVJLENBQU4sQ0FBWDtBQUNEOztBQUVENlMsaUJBQUtyUSxNQUFNaUgsVUFBWDtBQUNEO0FBQ0Y7QUFDRixPQWZEOztBQWlCQW9KLFdBQUssS0FBSy9VLEVBQUwsQ0FBUTJMLFVBQWI7QUFDQSxXQUFLeUgsZUFBTCxDQUFxQm1CLEtBQXJCO0FBQ0EsV0FBS3ZVLEVBQUwsQ0FBUXdCLFNBQVIsR0FBb0IsRUFBcEI7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7O2tDQVNvRDtBQUFBLFVBQXhDeUMsUUFBd0MsdUVBQTdCLEVBQTZCO0FBQUEsVUFBekIrUSxPQUF5Qix1RUFBZixLQUFlO0FBQUEsVUFBUkMsTUFBUTs7QUFDbEQsVUFBSWxVLE1BQU0sRUFBVjtBQUNBLFVBQUltVSxRQUFRLENBQVo7O0FBRUEsVUFBR0QsV0FBV3pTLFNBQVgsSUFBd0IsQ0FBQ2lELE1BQU0wUCxPQUFOLENBQWNGLE1BQWQsQ0FBNUIsRUFBbUQ7QUFDakRBLGlCQUFTLENBQUNBLE1BQUQsQ0FBVDtBQUNEOztBQUVELFVBQUlGLE9BQU8sU0FBUEEsSUFBTyxDQUFDekosTUFBRCxFQUFZO0FBQ3JCLFlBQUcsQ0FBQ0EsTUFBSixFQUFZO0FBQ1Y7QUFDRDs7QUFFRCxZQUFHLENBQUMySixNQUFELElBQVdBLE9BQU90TCxPQUFQLENBQWV1TCxLQUFmLEtBQXlCLENBQUMsQ0FBeEMsRUFBMkM7QUFDekMsY0FBSSxDQUFDalIsUUFBRCxJQUFhcUgsT0FBT25LLE9BQVAsQ0FBZTZDLE9BQWYsQ0FBdUJDLFFBQXZCLENBQWpCLEVBQW1EO0FBQ2pELGdCQUFJLENBQUMrUSxPQUFMLEVBQWM7QUFDWmpVLGtCQUFJSyxJQUFKLENBQVNrSyxPQUFPbkssT0FBaEI7O0FBRUE7QUFDRDs7QUFFREosZ0JBQUlLLElBQUosQ0FBU2tLLE9BQU9uSyxPQUFoQjtBQUNEO0FBQ0Y7O0FBRUQrVDtBQUNBSCxhQUFLekosT0FBT25LLE9BQVAsQ0FBZVAsUUFBcEI7QUFDRCxPQW5CRDs7QUFxQkFtVSxXQUFLLEtBQUtuVSxRQUFWOztBQUVBLGFBQU9vVSxVQUFTalUsR0FBVCxHQUFlQSxJQUFJLENBQUosS0FBVSxJQUFoQztBQUNEOztBQUVEOzs7Ozs7Ozs7Ozs7b0NBU3FEO0FBQUEsVUFBdkNrRCxRQUF1Qyx1RUFBNUIsRUFBNEI7QUFBQSxVQUF4QitRLE9BQXdCLHVFQUFkLElBQWM7QUFBQSxVQUFSQyxNQUFROztBQUNuRCxVQUFJbFUsTUFBTSxFQUFWO0FBQ0EsVUFBSW1VLFFBQVEsQ0FBWjs7QUFFQSxVQUFHRCxXQUFXelMsU0FBWCxJQUF3QixDQUFDaUQsTUFBTTBQLE9BQU4sQ0FBY0YsTUFBZCxDQUE1QixFQUFtRDtBQUNqREEsaUJBQVMsQ0FBQ0EsTUFBRCxDQUFUO0FBQ0Q7O0FBRUQsVUFBSUYsT0FBTyxTQUFQQSxJQUFPLENBQUN0USxRQUFELEVBQWM7QUFDdkIsYUFBSSxJQUFJdkMsSUFBSSxDQUFSLEVBQVdDLElBQUlzQyxTQUFTNUIsTUFBNUIsRUFBb0NYLElBQUlDLENBQXhDLEVBQTJDRCxHQUEzQyxFQUFnRDtBQUM5QyxjQUFJd0MsUUFBUUQsU0FBU3ZDLENBQVQsQ0FBWjs7QUFFQSxjQUFHLENBQUMrUyxNQUFELElBQVdBLE9BQU90TCxPQUFQLENBQWV1TCxLQUFmLEtBQXlCLENBQUMsQ0FBeEMsRUFBMkM7QUFDekMsZ0JBQUcsQ0FBQ2pSLFFBQUQsSUFBYVMsTUFBTXZELE9BQU4sQ0FBYzZDLE9BQWQsQ0FBc0JDLFFBQXRCLENBQWhCLEVBQWlEO0FBQy9DLGtCQUFHLENBQUMrUSxPQUFKLEVBQWE7QUFDWGpVLG9CQUFJSyxJQUFKLENBQVNzRCxNQUFNdkQsT0FBZjs7QUFFQTtBQUNEOztBQUVESixrQkFBSUssSUFBSixDQUFTc0QsTUFBTXZELE9BQWY7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQrVDs7QUFFQSxhQUFJLElBQUloVCxNQUFJLENBQVIsRUFBV0MsTUFBSXNDLFNBQVM1QixNQUE1QixFQUFvQ1gsTUFBSUMsR0FBeEMsRUFBMkNELEtBQTNDLEVBQWdEO0FBQzlDNlMsZUFBS3RRLFNBQVN2QyxHQUFULEVBQVlmLE9BQVosQ0FBb0JnSixVQUF6QjtBQUNEO0FBQ0YsT0F0QkQ7O0FBd0JBNEssV0FBSyxLQUFLNUssVUFBVjs7QUFFQSxhQUFPNkssVUFBU2pVLEdBQVQsR0FBZUEsSUFBSSxDQUFKLEtBQVUsSUFBaEM7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7O2dDQVN3RDtBQUFBLFVBQTlDa0QsUUFBOEMsdUVBQW5DLEVBQW1DO0FBQUEsVUFBL0IrUSxPQUErQix1RUFBckIsSUFBcUI7QUFBQSxVQUFmSSxLQUFlLHVFQUFQLEtBQU87O0FBQ3RELFVBQUcsQ0FBQyxLQUFLeFUsUUFBVCxFQUFtQjtBQUNqQixlQUFPLElBQVA7QUFDRDs7QUFFRCxVQUFJeVUsZ0JBQWdCLEtBQUt6VSxRQUFMLENBQWNPLE9BQWQsQ0FBc0JnSixVQUF0QixDQUFpQ25ELEtBQWpDLEVBQXBCO0FBQ0EsVUFBSWpHLE1BQU0sRUFBVjs7QUFFQXFVLGVBQVNDLGNBQWNDLE9BQWQsRUFBVDs7QUFFQSxXQUFJLElBQUlwVCxJQUFJLENBQVIsRUFBV0MsSUFBSWtULGNBQWN4UyxNQUFqQyxFQUF5Q1gsSUFBSUMsQ0FBN0MsRUFBZ0RELEdBQWhELEVBQXFEO0FBQ25ELFlBQUlsQyxLQUFLcVYsY0FBY25ULENBQWQsQ0FBVDs7QUFFQSxZQUFHbEMsT0FBTyxLQUFLQSxFQUFmLEVBQW1CO0FBQ2pCO0FBQ0Q7O0FBRUQsWUFBRyxDQUFDaUUsUUFBRCxJQUFhakUsR0FBR21CLE9BQUgsQ0FBVzZDLE9BQVgsQ0FBbUJDLFFBQW5CLENBQWhCLEVBQThDO0FBQzVDbEQsY0FBSUssSUFBSixDQUFTcEIsR0FBR21CLE9BQVo7QUFDRDtBQUNGOztBQUVESixVQUFJdVUsT0FBSjs7QUFFQSxVQUFHLENBQUNOLE9BQUosRUFBYTtBQUNYLGVBQU9qVSxJQUFJOEIsTUFBSixHQUFZOUIsSUFBSSxDQUFKLENBQVosR0FBb0IsSUFBM0I7QUFDRDs7QUFFRCxhQUFPQSxHQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs0QkFNUWtELFEsRUFBVTtBQUNoQixVQUFHLE9BQU9BLFFBQVAsSUFBbUIsVUFBdEIsRUFBa0M7QUFDaEMsZUFBT0EsU0FBUyxJQUFULENBQVA7QUFDRDs7QUFFRCxhQUFPLEtBQUtqRSxFQUFMLENBQVFnRSxPQUFSLENBQWdCQyxRQUFoQixDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7NkJBTzhCO0FBQUEsVUFBdkJBLFFBQXVCLHVFQUFaLEVBQVk7QUFBQSxVQUFSZ1IsTUFBUTs7QUFDNUIsYUFBTyxLQUFLTSxXQUFMLENBQWlCdFIsUUFBakIsRUFBMkIsS0FBM0IsRUFBa0NnUixNQUFsQyxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7OEJBTytCO0FBQUEsVUFBdkJoUixRQUF1Qix1RUFBWixFQUFZO0FBQUEsVUFBUmdSLE1BQVE7O0FBQzdCLGFBQU8sS0FBS00sV0FBTCxDQUFpQnRSLFFBQWpCLEVBQTJCLElBQTNCLEVBQWlDZ1IsTUFBakMsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7OzRCQU82QjtBQUFBLFVBQXZCaFIsUUFBdUIsdUVBQVosRUFBWTtBQUFBLFVBQVJnUixNQUFROztBQUMzQixhQUFPLEtBQUtPLGFBQUwsQ0FBbUJ2UixRQUFuQixFQUE2QixLQUE3QixFQUFvQ2dSLE1BQXBDLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7OzsrQkFPZ0M7QUFBQSxVQUF2QmhSLFFBQXVCLHVFQUFaLEVBQVk7QUFBQSxVQUFSZ1IsTUFBUTs7QUFDOUIsYUFBTyxLQUFLTyxhQUFMLENBQW1CdlIsUUFBbkIsRUFBNkIsSUFBN0IsRUFBbUNnUixNQUFuQyxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs2QkFNc0I7QUFBQSxVQUFmaFIsUUFBZSx1RUFBSixFQUFJOztBQUNwQixhQUFPLEtBQUt3UixTQUFMLENBQWV4UixRQUFmLEVBQXlCLElBQXpCLEVBQStCLEtBQS9CLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7OzRCQU1xQjtBQUFBLFVBQWZBLFFBQWUsdUVBQUosRUFBSTs7QUFDbkIsYUFBTyxLQUFLd1IsU0FBTCxDQUFleFIsUUFBZixFQUF5QixJQUF6QixFQUErQixJQUEvQixDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OzsyQkFNb0I7QUFBQSxVQUFmQSxRQUFlLHVFQUFKLEVBQUk7O0FBQ2xCLGFBQU8sS0FBS3dSLFNBQUwsQ0FBZXhSLFFBQWYsRUFBeUIsS0FBekIsRUFBZ0MsS0FBaEMsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7MkJBTW9CO0FBQUEsVUFBZkEsUUFBZSx1RUFBSixFQUFJOztBQUNsQixhQUFPLEtBQUt3UixTQUFMLENBQWV4UixRQUFmLEVBQXlCLEtBQXpCLEVBQWdDLElBQWhDLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7NkJBS1NxSCxNLEVBQVE7QUFDZkEsYUFBT29LLFdBQVAsQ0FBbUIsS0FBSzFWLEVBQXhCOztBQUVBLGFBQU8sZ0JBQU1xRSxPQUFOLENBQWMsS0FBS3JFLEVBQW5CLEVBQXVCLEVBQUVrRCxXQUFXLElBQWIsRUFBdkIsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7NkJBR1M7QUFDUCxXQUFLaUIsV0FBTCxHQUFtQixJQUFuQjtBQUNEOztBQUVEOzs7Ozs7Ozs0QkFLUTtBQUNOLGFBQU8sS0FBS3dSLE9BQUwsQ0FBYTdQLEtBQWIsQ0FBbUIsSUFBbkIsRUFBeUJnQixTQUF6QixDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OzZCQUtTO0FBQ1AsYUFBTyxLQUFLOE8sU0FBTCxDQUFlOVAsS0FBZixDQUFxQixJQUFyQixFQUEyQmdCLFNBQTNCLENBQVA7QUFDRDs7OzhCQUVTLENBQUU7OzsrQkFDRCxDQUFFOzs7aUNBQ0EsQ0FBRTs7OzRCQUNQbkIsRyxFQUFLL0MsSyxFQUFPLENBQUU7OzsrQkFDWCxDQUFFOzs7OEJBQ0gsQ0FBRTs7Ozs7O0FBM3RET3NCLFMsQ0FFWkYsTyxHQUFVLEU7QUFGRUUsUyxDQUdaOEksaUIsR0FBb0IsRTtBQUhSOUksUyxDQUlaeUksTSxHQUFTLEU7QUFKR3pJLFMsQ0FLWndJLGlCLEdBQW9CLEs7QUFMUnhJLFMsQ0FNWjBKLFcsR0FBYyxLO0FBTkYxSixTLENBT1o1QyxRLEdBQVcsRTtBQVBDNEMsUyxDQVFaNkgsVyxHQUFjLEU7QUFSRjdILFMsQ0FTWjlELEssR0FBUSxJO2tCQVRJOEQsUztBQTR0RHBCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcHVERDs7Ozs7Ozs7QUFFQSxJQUFNbUUsUUFBUSxFQUFkOztBQUVBOzs7Ozs7Ozs7O0FBVUFBLE1BQU13TixLQUFOLEdBQWMsVUFBVS9ELEdBQVYsRUFBZTtBQUMzQixNQUFHLENBQUNBLEdBQUQsSUFBUSxRQUFPQSxHQUFQLHlDQUFPQSxHQUFQLE9BQWUsUUFBMUIsRUFBb0M7QUFDbEMsV0FBTyxFQUFQO0FBQ0Q7O0FBRUQsTUFBSWdFLFVBQVUsRUFBZDs7QUFFQSxPQUFJLElBQUk5VCxDQUFSLElBQWE4UCxHQUFiLEVBQWtCO0FBQ2hCLFFBQUcsQ0FBQ0EsSUFBSTdQLGNBQUosQ0FBbUJELENBQW5CLENBQUosRUFBMkI7QUFDekI7QUFDRDs7QUFFRCxRQUFJVyxNQUFNbVAsSUFBSTlQLENBQUosQ0FBVjs7QUFFQVcsV0FBT21ULFFBQVExVSxJQUFSLENBQWFZLENBQWIsQ0FBUDtBQUNEOztBQUVELFNBQU84VCxRQUFRNVYsSUFBUixDQUFhLEdBQWIsQ0FBUDtBQUNELENBbEJEOztBQW9CQTs7Ozs7Ozs7OztBQVVBbUksTUFBTTBOLEtBQU4sR0FBYyxVQUFTakUsR0FBVCxFQUFjO0FBQzFCLE1BQUcsQ0FBQ0EsR0FBRCxJQUFRLFFBQU9BLEdBQVAseUNBQU9BLEdBQVAsT0FBZSxRQUExQixFQUFvQztBQUNsQyxXQUFPLEVBQVA7QUFDRDs7QUFFRCxNQUFJa0UsU0FBUyxFQUFiOztBQUVBLE9BQUksSUFBSWhVLENBQVIsSUFBYThQLEdBQWIsRUFBa0I7QUFDaEIsUUFBRyxDQUFDQSxJQUFJN1AsY0FBSixDQUFtQkQsQ0FBbkIsQ0FBSixFQUEyQjtBQUN6QjtBQUNEOztBQUVELFFBQUlXLE1BQU1tUCxJQUFJOVAsQ0FBSixDQUFWOztBQUVBVyxXQUFPcVQsT0FBTzVVLElBQVAsQ0FBZSxLQUFLbUMsVUFBTCxDQUFnQnZCLENBQWhCLENBQWYsU0FBcUNXLEdBQXJDLENBQVA7QUFDRDs7QUFFRCxTQUFPcVQsT0FBTzlWLElBQVAsQ0FBWSxHQUFaLENBQVA7QUFDRCxDQWxCRDs7QUFvQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkFtSSxNQUFNNE4sTUFBTixHQUFlLFVBQVVsVixHQUFWLEVBQWVtVixPQUFmLEVBQW1DO0FBQUEsTUFBWHBXLElBQVcsdUVBQUosRUFBSTs7QUFDaEQsTUFBSWdDLE1BQU0sRUFBVjs7QUFFQSxNQUFHLENBQUMyRCxNQUFNMFAsT0FBTixDQUFjclYsSUFBZCxDQUFKLEVBQXlCO0FBQ3ZCQSxXQUFPLENBQUNBLElBQUQsQ0FBUDtBQUNEOztBQUVELE1BQUcsQ0FBQ29XLE9BQUosRUFBYTtBQUNYLHdDQUFXblYsR0FBWDtBQUNEOztBQUVELE9BQUksSUFBSW1CLElBQUksQ0FBUixFQUFXQyxJQUFJcEIsSUFBSThCLE1BQXZCLEVBQStCWCxJQUFJQyxDQUFuQyxFQUFzQ0QsR0FBdEMsRUFBMkM7QUFDekMsUUFBSWlVLE9BQU9wVixJQUFJbUIsQ0FBSixDQUFYO0FBQ0EsUUFBSVMsTUFBTTdDLEtBQUsrQyxNQUFMLEdBQWEsS0FBS29MLGlCQUFMLENBQXVCbk8sSUFBdkIsRUFBNkJxVyxJQUE3QixDQUFiLEdBQWlEQSxJQUEzRDs7QUFFQSxRQUFHLENBQUN4VCxHQUFKLEVBQVM7QUFDUDtBQUNEOztBQUVEQSxXQUFPLEVBQVA7O0FBRUEsUUFBSSxPQUFPdVQsT0FBUCxJQUFrQixVQUFuQixJQUFrQ0EsUUFBUUMsSUFBUixDQUFyQyxFQUFvRDtBQUNsRHJVLFVBQUlWLElBQUosQ0FBUytVLElBQVQ7QUFDRCxLQUZELE1BR0ssSUFBR3hULElBQUl5VCxLQUFKLENBQVVGLFdBQVcsRUFBckIsQ0FBSCxFQUE2QjtBQUNoQ3BVLFVBQUlWLElBQUosQ0FBUytVLElBQVQ7QUFDRDtBQUNGOztBQUVELFNBQU9yVSxHQUFQO0FBQ0QsQ0E5QkQ7O0FBZ0NBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDQXVHLE1BQU1nTyxJQUFOLEdBQWEsVUFBU3RWLEdBQVQsRUFBdUM7QUFBQTs7QUFBQSxNQUF6QmpCLElBQXlCLHVFQUFsQixJQUFrQjtBQUFBLE1BQVp3VyxLQUFZLHVFQUFKLEVBQUk7O0FBQ2xEdlYscUNBQVVBLEdBQVY7O0FBRUEsTUFBR2pCLFNBQVMsSUFBWixFQUFrQjtBQUNoQkEsV0FBTyxFQUFQO0FBQ0F3VyxZQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0QsR0FIRCxNQUlLLElBQUd4VyxTQUFTLEtBQVosRUFBbUI7QUFDdEJBLFdBQU8sRUFBUDtBQUNBd1csWUFBUSxDQUFDLEtBQUQsQ0FBUjtBQUNEOztBQUVELE1BQUcsQ0FBQzdRLE1BQU0wUCxPQUFOLENBQWNyVixJQUFkLENBQUosRUFBeUI7QUFDdkJBLFdBQU8sQ0FBQ0EsSUFBRCxDQUFQO0FBQ0Q7O0FBRUQsTUFBRyxDQUFDMkYsTUFBTTBQLE9BQU4sQ0FBY21CLEtBQWQsQ0FBSixFQUEwQjtBQUN4QkEsWUFBUSxDQUFDQSxLQUFELENBQVI7QUFDRDs7QUFFRCxNQUFJblUsSUFBSXJDLEtBQUsrQyxNQUFiOztBQUVBOUIsTUFBSXNWLElBQUosQ0FBUyxVQUFDRSxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNqQixRQUFJdFUsSUFBSSxDQUFSOztBQUVBLFFBQUlsQixRQUFRLFNBQVJBLEtBQVEsQ0FBQ3VWLENBQUQsRUFBSUMsQ0FBSixFQUEyQjtBQUFBLFVBQXBCbEIsT0FBb0IsdUVBQVYsS0FBVTs7QUFDckMsVUFBR2lCLGFBQWFFLElBQWhCLEVBQXNCO0FBQ3BCRixZQUFJQSxFQUFFRyxPQUFGLEVBQUo7QUFDRDs7QUFFRCxVQUFHRixhQUFhQyxJQUFoQixFQUFzQjtBQUNwQkQsWUFBSUEsRUFBRUUsT0FBRixFQUFKO0FBQ0Q7O0FBRUQsVUFBR0gsSUFBSUMsQ0FBUCxFQUFVO0FBQ1IsZUFBT2xCLFVBQVMsQ0FBQyxDQUFWLEdBQWEsQ0FBcEI7QUFDRCxPQUZELE1BR0ssSUFBR2lCLElBQUlDLENBQVAsRUFBVTtBQUNiLGVBQU9sQixVQUFTLENBQVQsR0FBWSxDQUFDLENBQXBCO0FBQ0Q7O0FBRUQsYUFBTyxDQUFQO0FBQ0QsS0FqQkQ7O0FBbUJBLFFBQUlxQixPQUFPLFNBQVBBLElBQU8sR0FBTTtBQUNmLFVBQUd6VSxLQUFLQyxDQUFSLEVBQVc7QUFDVCxlQUFPLENBQVA7QUFDRDs7QUFFRCxVQUFJd0QsTUFBTTdGLEtBQUtvQyxDQUFMLENBQVY7O0FBRUEsVUFBRyxDQUFDdUQsTUFBTTBQLE9BQU4sQ0FBY3hQLEdBQWQsQ0FBSixFQUF3QjtBQUN0QkEsY0FBTSxDQUFDQSxHQUFELENBQU47QUFDRDs7QUFFRCxVQUFJaVIsS0FBSyxNQUFLM0ksaUJBQUwsQ0FBdUJ0SSxHQUF2QixFQUE0QjRRLENBQTVCLENBQVQ7QUFDQSxVQUFJTSxLQUFLLE1BQUs1SSxpQkFBTCxDQUF1QnRJLEdBQXZCLEVBQTRCNlEsQ0FBNUIsQ0FBVDtBQUNBLFVBQUkxVSxNQUFNZCxNQUFNNFYsRUFBTixFQUFVQyxFQUFWLEVBQWNQLE1BQU1wVSxDQUFOLE1BQWEsS0FBM0IsQ0FBVjs7QUFFQSxVQUFHSixRQUFRLENBQVgsRUFBYztBQUNaLGVBQU9BLEdBQVA7QUFDRDs7QUFFREk7O0FBRUEsYUFBT3lVLE1BQVA7QUFDRCxLQXRCRDs7QUF3QkEsUUFBRyxDQUFDeFUsQ0FBSixFQUFPO0FBQ0wsYUFBT25CLE1BQU11VixDQUFOLEVBQVNDLENBQVQsRUFBWUYsTUFBTXBVLENBQU4sTUFBYSxLQUF6QixDQUFQO0FBQ0Q7O0FBRUQsV0FBT3lVLE1BQVA7QUFDRCxHQW5ERDs7QUFxREEsU0FBTzVWLEdBQVA7QUFDRCxDQTVFRDs7QUE4RUE7Ozs7OztBQU1Bc0gsTUFBTW9ILFlBQU4sR0FBcUIsVUFBUzlNLEdBQVQsRUFBYztBQUNqQyxTQUFPLENBQUMsRUFBRUEsT0FBTyxRQUFPQSxHQUFQLHlDQUFPQSxHQUFQLE1BQWMsUUFBckIsSUFBaUNBLElBQUlrRCxTQUF2QyxDQUFSO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7O0FBTUF3QyxNQUFNdUwsYUFBTixHQUFzQixVQUFTOUIsR0FBVCxFQUFjO0FBQ2xDLFNBQU8sQ0FBQyxFQUFFQSxPQUFPLFFBQU9BLEdBQVAseUNBQU9BLEdBQVAsTUFBYyxRQUFyQixLQUFrQ0EsSUFBSTFMLFdBQUosSUFBbUJ0QyxNQUFuQixJQUE2QmdPLElBQUkxTCxXQUFKLElBQW1CWCxLQUFsRixDQUFGLENBQVI7QUFDRCxDQUZEOztBQUlBOzs7Ozs7O0FBT0E0QyxNQUFNOEYsSUFBTixHQUFhLFVBQVN2TCxLQUFULEVBQStCO0FBQUEsTUFBZmtVLE1BQWUsdUVBQU4sSUFBTTs7QUFDMUMsTUFBRyxRQUFPbFUsS0FBUCx5Q0FBT0EsS0FBUCxNQUFnQixRQUFoQixJQUE0QixDQUFDQSxLQUFoQyxFQUF1QztBQUNyQyxXQUFPQSxLQUFQO0FBQ0Q7O0FBRUQsV0FBUytULElBQVQsQ0FBYzdFLEdBQWQsRUFBbUI7QUFDakJBLFVBQU1yTSxNQUFNMFAsT0FBTixDQUFjckQsR0FBZCxpQ0FBd0JBLEdBQXhCLGtCQUFrQ0EsR0FBbEMsQ0FBTjs7QUFFQSxRQUFHLENBQUNnRixNQUFKLEVBQVk7QUFDVixhQUFPaEYsR0FBUDtBQUNEOztBQUVELFNBQUksSUFBSTlQLENBQVIsSUFBYThQLEdBQWIsRUFBa0I7QUFDaEIsVUFBRyxDQUFDQSxJQUFJN1AsY0FBSixDQUFtQkQsQ0FBbkIsQ0FBSixFQUEyQjtBQUN6QjtBQUNEOztBQUVELFVBQUc4UCxJQUFJOVAsQ0FBSixLQUFVLFFBQU84UCxJQUFJOVAsQ0FBSixDQUFQLEtBQWlCLFFBQTlCLEVBQXdDO0FBQ3RDOFAsWUFBSTlQLENBQUosSUFBUzJVLEtBQUs3RSxJQUFJOVAsQ0FBSixDQUFMLENBQVQ7QUFDRDtBQUNGOztBQUVELFdBQU84UCxHQUFQO0FBQ0Q7O0FBRUQsU0FBTzZFLEtBQUsvVCxLQUFMLENBQVA7QUFDRCxDQTFCRDs7QUE0QkE7Ozs7OztBQU1BeUYsTUFBTTBILGtCQUFOLEdBQTJCLFVBQVNuTixLQUFULEVBQWdCO0FBQ3pDLE1BQUdBLFVBQVUsS0FBVixJQUFtQkEsVUFBVSxJQUE3QixJQUFxQ0EsVUFBVUosU0FBbEQsRUFBNkQ7QUFDM0QsV0FBTyxFQUFQO0FBQ0Q7O0FBRUQsTUFBR0ksdUNBQUgsRUFBa0M7QUFDaEMsV0FBTyxnQkFBUDtBQUNEOztBQUVELE1BQUcsT0FBT0EsS0FBUCxJQUFnQixVQUFuQixFQUErQjtBQUM3QixXQUFPLG1CQUFQO0FBQ0Q7O0FBRUQsTUFBRyxRQUFPQSxLQUFQLHlDQUFPQSxLQUFQLE1BQWdCLFFBQW5CLEVBQTZCO0FBQzNCLFdBQU9rQixPQUFPNEIsU0FBUCxDQUFpQnpGLFFBQWpCLENBQTBCZ0gsSUFBMUIsQ0FBK0JyRSxLQUEvQixDQUFQO0FBQ0Q7O0FBRUQsU0FBT0EsUUFBUSxFQUFmO0FBQ0QsQ0FsQkQ7O0FBb0JBOzs7Ozs7O0FBT0F5RixNQUFNME8sT0FBTixHQUFnQixVQUFVUixDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDOUIsTUFBSUQsYUFBYUUsSUFBZCxJQUF3QkQsYUFBYUMsSUFBeEMsRUFBK0M7QUFDN0MsV0FBT0YsRUFBRUcsT0FBRixPQUFnQkYsRUFBRUUsT0FBRixFQUF2QjtBQUNEO0FBQ0QsTUFBRyxPQUFPSCxDQUFQLElBQVksVUFBWixJQUEwQixPQUFPQyxDQUFQLElBQVksVUFBekMsRUFBcUQ7QUFDbkQsV0FBT0QsRUFBRXRXLFFBQUYsT0FBaUJ1VyxFQUFFdlcsUUFBRixFQUF4QjtBQUNELEdBRkQsTUFHSyxJQUFHLFFBQU9zVyxDQUFQLHlDQUFPQSxDQUFQLE1BQVksUUFBWixJQUF3QixRQUFPQyxDQUFQLHlDQUFPQSxDQUFQLE1BQVksUUFBdkMsRUFBaUQ7QUFDcEQsUUFBR0QsTUFBTSxJQUFOLElBQWNDLE1BQU0sSUFBdkIsRUFBNkI7QUFDM0IsYUFBT0QsTUFBTUMsQ0FBYjtBQUNEOztBQUVELFFBQUcxUyxPQUFPaEUsSUFBUCxDQUFZeVcsQ0FBWixFQUFlMVQsTUFBZixJQUF5QmlCLE9BQU9oRSxJQUFQLENBQVkwVyxDQUFaLEVBQWUzVCxNQUEzQyxFQUFtRDtBQUNqRCxhQUFPLEtBQVA7QUFDRDs7QUFFRCxTQUFJLElBQUliLENBQVIsSUFBYXVVLENBQWIsRUFBZ0I7QUFDZCxVQUFHLENBQUNBLEVBQUV0VSxjQUFGLENBQWlCRCxDQUFqQixDQUFKLEVBQXlCO0FBQ3ZCO0FBQ0Q7O0FBRUQsVUFBRyxDQUFDLEtBQUsrVSxPQUFMLENBQWFSLEVBQUV2VSxDQUFGLENBQWIsRUFBbUJ3VSxFQUFFeFUsQ0FBRixDQUFuQixDQUFKLEVBQThCO0FBQzVCLGVBQU8sS0FBUDtBQUNEO0FBQ0Y7O0FBRUQsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsU0FBT3VVLE1BQU1DLENBQWI7QUFDRCxDQTlCRDs7QUFnQ0E7Ozs7Ozs7OztBQVNBbk8sTUFBTTZGLG9CQUFOLEdBQTZCLFVBQVM4SSxPQUFULEVBQWtCQyxRQUFsQixFQUE0QkMsWUFBNUIsRUFBMENDLFdBQTFDLEVBQXVEO0FBQ2xGLE1BQUdILFlBQVlDLFFBQWYsRUFBeUI7QUFDdkIsV0FBTyxLQUFQO0FBQ0Q7O0FBRUQsU0FBTyxLQUFLRixPQUFMLENBQWFqUSxVQUFVakUsTUFBVixJQUFvQixDQUFwQixHQUF1QnNVLFdBQXZCLEdBQW9DLEtBQUtoSixJQUFMLENBQVU2SSxPQUFWLENBQWpELEVBQXFFRSxZQUFyRSxDQUFQO0FBQ0QsQ0FORDs7QUFRQTs7Ozs7Ozs7OztBQVVBN08sTUFBTStPLGtCQUFOLEdBQTJCLFVBQVNDLElBQVQsRUFBZTtBQUN4QyxNQUFJclgsS0FBSzhILFNBQVN3UCxhQUFULENBQXVCLEtBQXZCLENBQVQ7QUFDQSxNQUFJMVUsY0FBSjs7QUFFQTVDLEtBQUd1WCxXQUFILEdBQWlCRixJQUFqQjtBQUNBelUsVUFBUTVDLEdBQUd3QixTQUFYO0FBQ0F4QixLQUFHNEcsTUFBSDtBQUNBNUcsT0FBSyxJQUFMOztBQUVBLFNBQU80QyxLQUFQO0FBQ0QsQ0FWRDs7QUFZQTs7Ozs7Ozs7OztBQVVBeUYsTUFBTW1QLGtCQUFOLEdBQTJCLFVBQVNILElBQVQsRUFBZTtBQUN4QyxNQUFJclgsS0FBSzhILFNBQVN3UCxhQUFULENBQXVCLFVBQXZCLENBQVQ7QUFDQSxNQUFJMVUsY0FBSjs7QUFFQTVDLEtBQUd3QixTQUFILEdBQWU2VixJQUFmO0FBQ0F6VSxVQUFRNUMsR0FBRzRDLEtBQVg7QUFDQTVDLEtBQUc0RyxNQUFIO0FBQ0E1RyxPQUFLLElBQUw7O0FBRUEsU0FBTzRDLEtBQVA7QUFDRCxDQVZEOztBQVlBOzs7Ozs7QUFNQXlGLE1BQU1tSSxXQUFOLEdBQW9CLFVBQVM3TyxHQUFULEVBQWM7QUFDaEMsU0FBT0EsSUFBSUosT0FBSixDQUFZLFNBQVosRUFBdUIsVUFBQ2lOLENBQUQsRUFBSWdELENBQUo7QUFBQSxXQUFVQSxFQUFFWixXQUFGLEVBQVY7QUFBQSxHQUF2QixDQUFQO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7O0FBTUF2SSxNQUFNOUUsVUFBTixHQUFtQixVQUFTNUIsR0FBVCxFQUFjO0FBQy9CLFNBQU9BLElBQUlKLE9BQUosQ0FBWSxVQUFaLEVBQXdCLFVBQUNpTixDQUFELEVBQUlnRCxDQUFKO0FBQUEsaUJBQWNBLEVBQUU5TixXQUFGLEVBQWQ7QUFBQSxHQUF4QixDQUFQO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7Ozs7Ozs7QUFXQTJFLE1BQU00RixpQkFBTixHQUEwQixVQUFTbk8sSUFBVCxFQUFlMlgsTUFBZixFQUF1QjtBQUMvQyxNQUFJVCxnQkFBSjtBQUNBLE1BQUluVSxTQUFTL0MsS0FBSytDLE1BQWxCO0FBQ0EsTUFBSVgsSUFBSSxDQUFSOztBQUVBcEMsT0FBSzRYLE1BQUwsQ0FBWSxVQUFTQyxDQUFULEVBQVkzVixDQUFaLEVBQWU7QUFDekJFOztBQUVBLFFBQUcsUUFBT3lWLENBQVAseUNBQU9BLENBQVAsTUFBWSxRQUFmLEVBQXlCO0FBQ3ZCLGFBQU9BLENBQVA7QUFDRDs7QUFFRCxRQUFHQSxFQUFFM1YsQ0FBRixNQUFTUSxTQUFaLEVBQXVCO0FBQ3JCLGFBQU8sRUFBUDtBQUNEOztBQUVBTixTQUFLVyxNQUFOLEtBQWtCbVUsVUFBVVcsRUFBRTNWLENBQUYsQ0FBNUI7QUFDQSxXQUFPMlYsRUFBRTNWLENBQUYsQ0FBUDtBQUNELEdBYkQsRUFhR3lWLE1BYkg7O0FBZUEsU0FBT1QsT0FBUDtBQUNELENBckJEOztBQXVCQTs7Ozs7Ozs7Ozs7QUFXQTNPLE1BQU0rSixpQkFBTixHQUEwQixVQUFTdFMsSUFBVCxFQUFlMlgsTUFBZixFQUF1QjtBQUMvQyxNQUFJRyxNQUFNLEtBQVY7QUFDQSxNQUFJL1UsU0FBUy9DLEtBQUsrQyxNQUFsQjtBQUNBLE1BQUlYLElBQUksQ0FBUjs7QUFFQXBDLE9BQUs0WCxNQUFMLENBQVksVUFBU0MsQ0FBVCxFQUFZM1YsQ0FBWixFQUFlO0FBQ3pCRTs7QUFFQSxRQUFHLFFBQU95VixDQUFQLHlDQUFPQSxDQUFQLE1BQVksUUFBZixFQUF5QjtBQUN2QixhQUFPLENBQUMsQ0FBQ0EsQ0FBVDtBQUNEOztBQUVELFFBQUcsQ0FBQ0EsRUFBRTFWLGNBQUYsQ0FBaUJELENBQWpCLENBQUosRUFBeUI7QUFDdkIsYUFBTyxFQUFQO0FBQ0Q7O0FBRUFFLFNBQUtXLE1BQU4sS0FBa0IrVSxNQUFNRCxFQUFFMVYsY0FBRixDQUFpQkQsQ0FBakIsQ0FBeEI7QUFDQSxXQUFPMlYsRUFBRTNWLENBQUYsQ0FBUDtBQUNELEdBYkQsRUFhR3lWLE1BYkg7O0FBZUEsU0FBT0csR0FBUDtBQUNELENBckJEOztBQXVCQTs7Ozs7Ozs7Ozs7OztBQWFBdlAsTUFBTTVGLGlCQUFOLEdBQTBCLFVBQVMzQyxJQUFULEVBQWUyWCxNQUFmLEVBQXVCNVYsRUFBdkIsRUFBMkI7QUFDbkQsTUFBSW1WLFVBQVV4VSxTQUFkO0FBQ0EsTUFBSUssU0FBUy9DLEtBQUsrQyxNQUFsQjtBQUNBLE1BQUlYLElBQUksQ0FBUjs7QUFFQXBDLE9BQUs0WCxNQUFMLENBQVksVUFBU0MsQ0FBVCxFQUFZM1YsQ0FBWixFQUFlO0FBQ3pCRTs7QUFFQSxRQUFHLFFBQU95VixDQUFQLHlDQUFPQSxDQUFQLE1BQVksUUFBZixFQUF5QjtBQUN2QjtBQUNEOztBQUVELFFBQUcsQ0FBQ0EsRUFBRTFWLGNBQUYsQ0FBaUJELENBQWpCLENBQUosRUFBeUI7QUFDdkIsYUFBT2dWLFVBQVVXLEVBQUUzVixDQUFGLElBQU9ILEdBQUdLLEtBQUtXLE1BQVIsQ0FBeEI7QUFDRDs7QUFFRDhVLE1BQUUzVixDQUFGLElBQU9ILEdBQUdLLEtBQUtXLE1BQVIsRUFBZ0I4VSxFQUFFM1YsQ0FBRixDQUFoQixDQUFQO0FBQ0FnVixjQUFVVyxDQUFWOztBQUVBLFdBQU9BLEVBQUUzVixDQUFGLENBQVA7QUFDRCxHQWZELEVBZUd5VixNQWZIOztBQWlCQSxTQUFPVCxPQUFQO0FBQ0QsQ0F2QkQ7O0FBeUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkEzTyxNQUFNa0ssb0JBQU4sR0FBNkIsVUFBU3pTLElBQVQsRUFBZTJYLE1BQWYsRUFBdUI1VixFQUF2QixFQUEyQjtBQUN0RCxNQUFJZ0IsU0FBUy9DLEtBQUsrQyxNQUFsQjtBQUNBLE1BQUlELGNBQUo7QUFDQSxNQUFJVixJQUFJLENBQVI7O0FBRUFwQyxPQUFLNFgsTUFBTCxDQUFZLFVBQVNDLENBQVQsRUFBWTNWLENBQVosRUFBZTtBQUN6QkU7O0FBRUEsUUFBRyxRQUFPeVYsQ0FBUCx5Q0FBT0EsQ0FBUCxNQUFZLFFBQWYsRUFBeUI7QUFDdkI7QUFDRDs7QUFFRCxRQUFHLENBQUNBLEVBQUUxVixjQUFGLENBQWlCRCxDQUFqQixDQUFKLEVBQXlCO0FBQ3ZCLGFBQU8sRUFBUDtBQUNEOztBQUVELFFBQUdFLEtBQUtXLE1BQVIsRUFBZ0I7QUFDZEQsY0FBUStVLEVBQUUzVixDQUFGLENBQVI7O0FBRUEsVUFBRyxDQUFDSCxFQUFELElBQU9BLEdBQUdlLEtBQUgsQ0FBVixFQUFxQjtBQUNuQixlQUFPK1UsRUFBRTNWLENBQUYsQ0FBUDtBQUNEOztBQUVELGFBQU9ZLEtBQVA7QUFDRDs7QUFFRCxXQUFPK1UsRUFBRTNWLENBQUYsQ0FBUDtBQUNELEdBdEJELEVBc0JHeVYsTUF0Qkg7O0FBd0JBLFNBQU83VSxLQUFQO0FBQ0QsQ0E5QkQ7O0FBaUNBOzs7Ozs7OztBQVFBeUYsTUFBTXdMLDJCQUFOLEdBQW9DLFVBQVNQLE1BQVQsRUFBaUIzTixHQUFqQixFQUFzQjtBQUN4RCxNQUFJM0UsUUFBUSxTQUFSQSxLQUFRLENBQUM4USxHQUFELEVBQVM7QUFDbkIsUUFBR0EsSUFBSStGLG9CQUFKLENBQXlCbFMsR0FBekIsQ0FBSCxFQUFrQztBQUNoQyxhQUFPbU0sR0FBUDtBQUNEOztBQUVELFFBQUlnRyxRQUFRaFUsT0FBT2lVLGNBQVAsQ0FBc0JqRyxHQUF0QixDQUFaOztBQUVBLFFBQUcsQ0FBQ2dHLEtBQUosRUFBVztBQUNULGFBQU8sSUFBUDtBQUNEOztBQUVELFdBQU85VyxNQUFNOFcsS0FBTixDQUFQO0FBQ0QsR0FaRDs7QUFjQSxTQUFPOVcsTUFBTXNTLE1BQU4sQ0FBUDtBQUNELENBaEJEOztBQWtCQTs7Ozs7OztBQU9BakwsTUFBTXNMLG9CQUFOLEdBQTZCLFVBQVNMLE1BQVQsRUFBaUIzTixHQUFqQixFQUFzQjtBQUNqRCxNQUFJM0UsUUFBUSxTQUFSQSxLQUFRLENBQUM4USxHQUFELEVBQVM7QUFDbkIsUUFBR0EsSUFBSTdQLGNBQUosQ0FBbUIwRCxHQUFuQixDQUFILEVBQTRCO0FBQzFCLGFBQU9tTSxHQUFQO0FBQ0Q7O0FBRUQsUUFBSWdHLFFBQVFoVSxPQUFPaVUsY0FBUCxDQUFzQmpHLEdBQXRCLENBQVo7O0FBRUEsUUFBRyxDQUFDZ0csS0FBSixFQUFXO0FBQ1QsYUFBTyxJQUFQO0FBQ0Q7O0FBRUQsV0FBTzlXLE1BQU04VyxLQUFOLENBQVA7QUFDRCxHQVpEOztBQWNBLFNBQU85VyxNQUFNc1MsTUFBTixDQUFQO0FBQ0QsQ0FoQkQ7O0FBa0JBOzs7Ozs7QUFNQWpMLE1BQU0yUCxlQUFOLEdBQXdCLFVBQVVwVixLQUFWLEVBQWlCO0FBQ3ZDLE1BQUcsUUFBT0EsS0FBUCx5Q0FBT0EsS0FBUCxNQUFnQixRQUFoQixJQUE0QixDQUFDQSxLQUFoQyxFQUF1QztBQUNyQyxXQUFPQSxLQUFQO0FBQ0Q7O0FBRUQsTUFBSTZSLFFBQVEsU0FBUkEsS0FBUSxDQUFDM0MsR0FBRCxFQUFTO0FBQ25CLFNBQUksSUFBSTlQLENBQVIsSUFBYThQLEdBQWIsRUFBa0I7QUFDaEIsVUFBSSxDQUFDQSxJQUFJN1AsY0FBSixDQUFtQkQsQ0FBbkIsQ0FBTCxFQUE0QjtBQUMxQjtBQUNEOztBQUVELFVBQUc4UCxJQUFJOVAsQ0FBSixLQUFVLFFBQU84UCxJQUFJOVAsQ0FBSixDQUFQLEtBQWlCLFFBQTlCLEVBQXdDO0FBQ3RDLFlBQUc4UCxJQUFJOVAsQ0FBSixFQUFPNkQsU0FBVixFQUFxQjtBQUNuQmlNLGNBQUk5UCxDQUFKLElBQVM4UCxJQUFJOVAsQ0FBSixFQUFPa1MsUUFBaEI7QUFDRDs7QUFFRE8sY0FBTTNDLElBQUk5UCxDQUFKLENBQU47QUFDRDtBQUNGO0FBQ0YsR0FkRDs7QUFnQkEsTUFBR1ksTUFBTWlELFNBQVQsRUFBb0I7QUFDbEJqRCxZQUFRQSxNQUFNc1IsUUFBZDtBQUNEOztBQUVETyxRQUFNN1IsS0FBTjs7QUFFQSxTQUFPQSxLQUFQO0FBQ0QsQ0E1QkQ7O0FBK0JBOzs7Ozs7O0FBT0F5RixNQUFNM0csa0JBQU4sR0FBMkIsWUFBaUM7QUFBQSxNQUF4Qm1CLE1BQXdCLHVFQUFmLEVBQWU7QUFBQSxNQUFYaEIsRUFBVyx1RUFBTixJQUFNOztBQUMxRCxNQUFJRixNQUFNc1csS0FBS0MsTUFBTCxHQUFjalksUUFBZCxDQUF1QixFQUF2QixFQUEyQmtZLFNBQTNCLENBQXFDLENBQXJDLEVBQXdDdFYsU0FBUyxDQUFqRCxDQUFWO0FBQ0EsTUFBSUYsTUFBTSxFQUFWOztBQUVBLE9BQUksSUFBSVQsSUFBSSxDQUFSLEVBQVdDLElBQUlSLElBQUlrQixNQUF2QixFQUErQlgsSUFBSUMsQ0FBbkMsRUFBc0NELEdBQXRDLEVBQTJDO0FBQ3pDLFFBQUcrVixLQUFLQyxNQUFMLEtBQWdCLElBQW5CLEVBQXlCO0FBQ3ZCdlYsYUFBT2hCLElBQUlPLENBQUosRUFBTzBPLFdBQVAsRUFBUDtBQUNELEtBRkQsTUFHSztBQUNIak8sYUFBT2hCLElBQUlPLENBQUosQ0FBUDtBQUNEO0FBQ0Y7O0FBRUQsTUFBR0wsTUFBTUEsR0FBR2MsR0FBSCxDQUFULEVBQWtCO0FBQ2hCLFdBQU8sS0FBS2pCLGtCQUFMLENBQXdCbUIsTUFBeEIsRUFBZ0NoQixFQUFoQyxDQUFQO0FBQ0Q7O0FBRUQsU0FBT2MsR0FBUDtBQUNELENBbEJEOztrQkFvQmUwRixLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZyQmY7Ozs7Ozs7O0lBRWErUCxPLFdBQUFBLE87QUFDWCxtQkFBWUMsT0FBWixFQUFxQkMsUUFBckIsRUFBK0I7QUFBQTs7QUFDN0IsU0FBS0QsT0FBTCxHQUFlQSxVQUFVQSxRQUFROVcsT0FBUixDQUFnQixLQUFoQixFQUF1QixFQUF2QixJQUE2QixHQUF2QyxHQUE2QyxFQUE1RDs7QUFFQSxTQUFLK1csUUFBTDtBQUNFQywyQkFBcUI7QUFEdkIsT0FFTUQsWUFBWSxFQUZsQjtBQUlEOztBQUVEOzs7Ozs7Ozs7OzBCQU1NdlosTyxFQUFTO0FBQUE7O0FBQ2IsYUFBTyxJQUFJOEYsT0FBSixDQUFZLFVBQUNxRyxPQUFELEVBQVVzTixNQUFWLEVBQXFCO0FBQ3RDLFlBQUlDLFlBQUo7QUFDQSxZQUFJQyxZQUFKOztBQUVBM1osK0JBQWMsTUFBS3VaLFFBQW5CLEVBQWlDdlosV0FBVyxFQUE1Qzs7QUFFQTJaLGNBQU0sSUFBSUMsY0FBSixFQUFOO0FBQ0MsZUFBTzVaLFFBQVE2WixPQUFmLElBQTBCLFVBQTNCLElBQTBDN1osUUFBUTZaLE9BQVIsQ0FBZ0JGLEdBQWhCLENBQTFDO0FBQ0EzWixrQkFBVSxNQUFLOFosZUFBTCxDQUFxQjlaLE9BQXJCLENBQVY7QUFDQTBaLGNBQU0sTUFBS0osT0FBTCxRQUFpQixNQUFLQSxPQUF0QixHQUFnQ3RaLFFBQVEwWixHQUFSLENBQVlsWCxPQUFaLENBQW9CLEtBQXBCLEVBQTJCLEVBQTNCLENBQWhDLEdBQWtFeEMsUUFBUTBaLEdBQWhGO0FBQ0FDLFlBQUlJLElBQUosQ0FBUy9aLFFBQVFnYSxNQUFqQixFQUF5Qk4sR0FBekIsRUFBOEIsSUFBOUIsRUFBb0MxWixRQUFRaWEsSUFBNUMsRUFBa0RqYSxRQUFRa2EsUUFBMUQ7QUFDQWxhLGdCQUFRbWEsT0FBUixHQUFrQm5hLFFBQVFtYSxPQUFSLElBQW1CLEVBQXJDOztBQUVBLFlBQUduYSxRQUFRb2EsSUFBWCxFQUFpQjtBQUNmcGEsa0JBQVFxYSxJQUFSLEdBQWVwSixLQUFLQyxTQUFMLENBQWVsUixRQUFRb2EsSUFBdkIsQ0FBZjtBQUNBcGEsa0JBQVFtYSxPQUFSLENBQWdCLGNBQWhCLElBQWtDLGtCQUFsQztBQUNBbmEsa0JBQVFzYSxZQUFSLEdBQXVCdGEsUUFBUXNhLFlBQVIsSUFBd0IsTUFBL0M7QUFDRCxTQUpELE1BS0ssSUFBR3RhLFFBQVF1YSxJQUFYLEVBQWlCO0FBQ3BCdmEsa0JBQVFxYSxJQUFSLEdBQWUsTUFBS0csY0FBTCxDQUFvQnhhLFFBQVF1YSxJQUE1QixDQUFmO0FBQ0F2YSxrQkFBUW1hLE9BQVIsQ0FBZ0IsY0FBaEIsSUFBa0MscUJBQWxDO0FBQ0Q7O0FBRUQsWUFBR25hLFFBQVFrRCxjQUFSLENBQXVCLFNBQXZCLENBQUgsRUFBc0M7QUFDcEN5VyxjQUFJYyxPQUFKLEdBQWN6YSxRQUFReWEsT0FBdEI7QUFDRDs7QUFFRCxZQUFHemEsUUFBUXNhLFlBQVgsRUFBeUI7QUFDdkJYLGNBQUlXLFlBQUosR0FBbUJ0YSxRQUFRc2EsWUFBM0I7QUFDRDs7QUFFRCxZQUFHdGEsUUFBUTBhLGVBQVgsRUFBNEI7QUFDMUJmLGNBQUllLGVBQUosR0FBc0IxYSxRQUFRMGEsZUFBOUI7QUFDRDs7QUFFRCxZQUFHMWEsUUFBUW1hLE9BQVgsRUFBb0I7QUFDbEIsZUFBSSxJQUFJbFgsQ0FBUixJQUFhakQsUUFBUW1hLE9BQXJCLEVBQThCO0FBQzVCLGdCQUFHLENBQUNuYSxRQUFRbWEsT0FBUixDQUFnQmpYLGNBQWhCLENBQStCRCxDQUEvQixDQUFKLEVBQXVDO0FBQ3JDO0FBQ0Q7O0FBRUQwVyxnQkFBSWdCLGdCQUFKLENBQXFCMVgsQ0FBckIsRUFBd0JqRCxRQUFRbWEsT0FBUixDQUFnQmxYLENBQWhCLENBQXhCO0FBQ0Q7QUFDRjs7QUFFRCxZQUFHakQsUUFBUTRhLE1BQVgsRUFBbUI7QUFDakIsY0FBSWhZLE1BQU0sTUFBS2lZLGFBQUwsQ0FBbUI3YSxRQUFRNGEsTUFBM0IsQ0FBVjs7QUFFQSxjQUFHaFksR0FBSCxFQUFRO0FBQ044VyxtQkFBTyxNQUFNOVcsR0FBYjtBQUNEO0FBQ0Y7O0FBRUQsWUFBRyxPQUFPNUMsUUFBUThhLFVBQWYsSUFBNkIsVUFBaEMsRUFBNEM7QUFDMUNuQixjQUFJb0IsVUFBSixHQUFpQixZQUFNO0FBQ3JCLG1CQUFPL2EsUUFBUThhLFVBQVIsQ0FBbUJuQixHQUFuQixDQUFQO0FBQ0QsV0FGRDtBQUdEOztBQUVEQSxZQUFJcUIsTUFBSixHQUFhLFlBQU07QUFDakIsY0FBSUMsV0FBVyxNQUFLQyxjQUFMLENBQW9CdkIsR0FBcEIsQ0FBZjs7QUFFQSxjQUFHLENBQUNBLElBQUl3QixNQUFKLEdBQWEsRUFBZCxFQUFrQjlELEtBQWxCLENBQXdCclgsUUFBUXdaLG1CQUFoQyxDQUFILEVBQXlEO0FBQ3ZELGdCQUFJdkosTUFBTSxJQUFJMU8sS0FBSixrQkFBeUJtWSxHQUF6QixzQ0FBNkRDLElBQUl3QixNQUFqRSxDQUFWOztBQUVBbEwsZ0JBQUlnTCxRQUFKLEdBQWVBLFFBQWY7O0FBRUEsbUJBQU94QixPQUFPeEosR0FBUCxDQUFQO0FBQ0Q7O0FBRUQ5RCxrQkFBUThPLFFBQVI7QUFDRCxTQVpEOztBQWNBdEIsWUFBSWMsT0FBSixHQUFjLFlBQU07QUFDbEJoQixpQkFBTyxJQUFJbFksS0FBSixrQkFBeUJtWSxHQUF6QixpQkFBUDtBQUNELFNBRkQ7O0FBSUFDLFlBQUl5QixPQUFKLEdBQWMsVUFBQ25MLEdBQUQsRUFBUztBQUNyQndKLGlCQUFPeEosR0FBUDtBQUNELFNBRkQ7O0FBSUEwSixZQUFJMEIsSUFBSixDQUFTcmIsUUFBUXFhLElBQWpCO0FBQ0QsT0FsRk0sQ0FBUDtBQW1GRDs7QUFFRDs7Ozs7Ozs7O2tDQU1jdEgsRyxFQUFLO0FBQ2pCLFVBQUl1SSxNQUFNLEdBQVY7QUFDQSxVQUFJQyxLQUFLLEdBQVQ7O0FBRUEsVUFBSSxDQUFDeEksR0FBRCxJQUFRLFFBQU9BLEdBQVAseUNBQU9BLEdBQVAsT0FBZSxRQUEzQixFQUFxQztBQUNuQyxlQUFPLEVBQVA7QUFDRDs7QUFFRCxhQUFPaE8sT0FBT2hFLElBQVAsQ0FBWWdTLEdBQVosRUFBaUIvUixHQUFqQixDQUFxQixVQUFDaUMsQ0FBRCxFQUFPO0FBQ2pDLFlBQUl1WSxLQUFLQyxtQkFBbUJ4WSxDQUFuQixDQUFUOztBQUVBLFlBQUl5RCxNQUFNMFAsT0FBTixDQUFjckQsSUFBSTlQLENBQUosQ0FBZCxDQUFKLEVBQTJCO0FBQ3pCdVksZUFBS0MsbUJBQW1CeFksQ0FBbkIsQ0FBTDs7QUFFQSxpQkFBTzhQLElBQUk5UCxDQUFKLEVBQU9qQyxHQUFQLENBQVcsVUFBQzBhLENBQUQsRUFBSXZZLENBQUosRUFBVTtBQUMxQixtQkFBT3FZLFlBQVNyWSxDQUFULFVBQWdCb1ksRUFBaEIsR0FBcUJFLG1CQUFtQkMsQ0FBbkIsQ0FBNUI7QUFDRCxXQUZNLEVBRUp2YSxJQUZJLENBRUNtYSxHQUZELENBQVA7QUFHRCxTQU5ELE1BT0ssSUFBR3ZJLElBQUk5UCxDQUFKLEtBQVUsUUFBTzhQLElBQUk5UCxDQUFKLENBQVAsTUFBa0IsUUFBL0IsRUFBeUM7QUFBQTtBQUM1QyxnQkFBSTBZLE1BQU0sRUFBVjs7QUFFQTVXLG1CQUFPaEUsSUFBUCxDQUFZZ1MsSUFBSTlQLENBQUosQ0FBWixFQUFvQmpDLEdBQXBCLENBQXdCLFVBQUM0RixHQUFELEVBQVM7QUFDL0IrVSxrQkFBSXRaLElBQUosQ0FBU21aLFlBQVM1VSxHQUFULFVBQWtCMlUsRUFBbEIsR0FBdUJFLG1CQUFtQjFJLElBQUk5UCxDQUFKLEVBQU8yRCxHQUFQLENBQW5CLENBQWhDO0FBQ0QsYUFGRDs7QUFJQTtBQUFBLGlCQUFPK1UsSUFBSXhhLElBQUosQ0FBU21hLEdBQVQ7QUFBUDtBQVA0Qzs7QUFBQTtBQVE3QyxTQVJJLE1BU0E7QUFDSCxpQkFBT0UsS0FBS0QsRUFBTCxHQUFVRSxtQkFBbUIxSSxJQUFJOVAsQ0FBSixDQUFuQixDQUFqQjtBQUNEO0FBQ0YsT0F0Qk0sRUFzQko5QixJQXRCSSxDQXNCQ21hLEdBdEJELENBQVA7QUF1QkQ7O0FBRUQ7Ozs7Ozs7OztvQ0FNZ0IxWSxHLEVBQUs7QUFDbkIsVUFBSWdaLFFBQVEsRUFBWjtBQUNBLFVBQUlDLE9BQU9qWixJQUFJa1osS0FBSixDQUFVLEdBQVYsQ0FBWDs7QUFFQSxXQUFJLElBQUkzWSxJQUFJLENBQVIsRUFBV0MsSUFBSXlZLEtBQUsvWCxNQUF4QixFQUFnQ1gsSUFBR0MsQ0FBbkMsRUFBc0NELEdBQXRDLEVBQTJDO0FBQ3pDLFlBQUk0WSxNQUFPRixLQUFLMVksQ0FBTCxFQUFRMlksS0FBUixDQUFjLEdBQWQsQ0FBWDtBQUNBLFlBQUlsVixNQUFNb1YsbUJBQW1CRCxJQUFJLENBQUosQ0FBbkIsQ0FBVjtBQUNBLFlBQUluWSxNQUFNb1ksbUJBQW1CRCxJQUFJLENBQUosQ0FBbkIsQ0FBVjs7QUFFQSxZQUFHLENBQUNuVixHQUFKLEVBQVM7QUFDUDtBQUNEOztBQUVELFlBQUdGLE1BQU0wUCxPQUFOLENBQWN3RixNQUFNaFYsR0FBTixDQUFkLENBQUgsRUFBOEI7QUFDNUJnVixnQkFBTWhWLEdBQU4sRUFBV3ZFLElBQVgsQ0FBZ0J1QixHQUFoQjtBQUNELFNBRkQsTUFHSyxJQUFHZ1ksTUFBTWhWLEdBQU4sQ0FBSCxFQUFlO0FBQ2xCZ1YsZ0JBQU1oVixHQUFOLElBQWEsQ0FBQ2dWLE1BQU1oVixHQUFOLENBQUQsRUFBYWhELEdBQWIsQ0FBYjtBQUNELFNBRkksTUFHQTtBQUNIZ1ksZ0JBQU1oVixHQUFOLElBQWFoRCxHQUFiO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPZ1ksS0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7Ozs7bUNBU2U3SSxHLEVBQWtDO0FBQUEsVUFBN0I1RixJQUE2Qix1RUFBdEIsSUFBc0I7QUFBQSxVQUFoQjhPLFNBQWdCLHVFQUFKLEVBQUk7O0FBQy9DLFVBQUlDLEtBQUsvTyxRQUFRLElBQUlnUCxRQUFKLEVBQWpCOztBQUVBLFdBQUksSUFBSWxaLENBQVIsSUFBYThQLEdBQWIsRUFBa0I7QUFDaEIsWUFBR0EsSUFBSTdQLGNBQUosQ0FBbUJELENBQW5CLEtBQXlCOFAsSUFBSTlQLENBQUosQ0FBNUIsRUFBb0M7QUFDbEMsY0FBSTJELE1BQU1xVixZQUFXQSxZQUFZLEdBQVosR0FBa0JoWixDQUFsQixHQUFzQixHQUFqQyxHQUFzQ0EsQ0FBaEQ7O0FBRUEsY0FBSThQLElBQUk5UCxDQUFKLGFBQWtCeVUsSUFBdEIsRUFBNEI7QUFDMUJ3RSxlQUFHRSxNQUFILENBQVV4VixHQUFWLEVBQWVtTSxJQUFJOVAsQ0FBSixFQUFPb1osV0FBUCxFQUFmO0FBQ0QsV0FGRCxNQUdLLElBQUksZ0JBQU14SCxhQUFOLENBQW9COUIsSUFBSTlQLENBQUosQ0FBcEIsQ0FBSixFQUFpQztBQUNwQyxpQkFBS3VYLGNBQUwsQ0FBb0J6SCxJQUFJOVAsQ0FBSixDQUFwQixFQUE0QmlaLEVBQTVCLEVBQWdDdFYsR0FBaEM7QUFDRCxXQUZJLE1BR0E7QUFDSHNWLGVBQUdFLE1BQUgsQ0FBVXhWLEdBQVYsRUFBZW1NLElBQUk5UCxDQUFKLENBQWY7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsYUFBT2laLEVBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7O29DQU1nQmxjLE8sRUFBUztBQUN2QixhQUFPQSxPQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OzttQ0FNZTJaLEcsRUFBSztBQUNsQixhQUFPO0FBQ0xBLGFBQUtBLEdBREE7QUFFTHhNLGNBQU13TSxJQUFJc0IsUUFGTDtBQUdMRSxnQkFBUXhCLElBQUl3QjtBQUhQLE9BQVA7QUFLRDs7QUFFRDs7Ozs7Ozs7Ozt3QkFPSXpCLEcsRUFBbUI7QUFBQSxVQUFkMVosT0FBYyx1RUFBSixFQUFJOztBQUNyQkEsY0FBUTBaLEdBQVIsR0FBY0EsR0FBZDtBQUNBMVosY0FBUWdhLE1BQVIsR0FBaUIsS0FBakI7O0FBRUEsYUFBTyxLQUFLNEIsS0FBTCxDQUFXNWIsT0FBWCxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7NEJBT08wWixHLEVBQW1CO0FBQUEsVUFBZDFaLE9BQWMsdUVBQUosRUFBSTs7QUFDeEJBLGNBQVEwWixHQUFSLEdBQWNBLEdBQWQ7QUFDQTFaLGNBQVFnYSxNQUFSLEdBQWlCLFFBQWpCOztBQUVBLGFBQU8sS0FBSzRCLEtBQUwsQ0FBVzViLE9BQVgsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7O3lCQU9LMFosRyxFQUFtQjtBQUFBLFVBQWQxWixPQUFjLHVFQUFKLEVBQUk7O0FBQ3RCQSxjQUFRMFosR0FBUixHQUFjQSxHQUFkO0FBQ0ExWixjQUFRZ2EsTUFBUixHQUFpQixNQUFqQjs7QUFFQSxhQUFPLEtBQUs0QixLQUFMLENBQVc1YixPQUFYLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozt3QkFPSTBaLEcsRUFBbUI7QUFBQSxVQUFkMVosT0FBYyx1RUFBSixFQUFJOztBQUNyQkEsY0FBUTBaLEdBQVIsR0FBY0EsR0FBZDtBQUNBMVosY0FBUWdhLE1BQVIsR0FBaUIsS0FBakI7O0FBRUEsYUFBTyxLQUFLNEIsS0FBTCxDQUFXNWIsT0FBWCxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7MEJBT00wWixHLEVBQW1CO0FBQUEsVUFBZDFaLE9BQWMsdUVBQUosRUFBSTs7QUFDdkJBLGNBQVEwWixHQUFSLEdBQWNBLEdBQWQ7QUFDQTFaLGNBQVFnYSxNQUFSLEdBQWlCLE9BQWpCOztBQUVBLGFBQU8sS0FBSzRCLEtBQUwsQ0FBVzViLE9BQVgsQ0FBUDtBQUNEOzs7Ozs7QUFHSCxJQUFNa0ssVUFBVSxJQUFJbVAsT0FBSixFQUFoQjs7QUFFQW5QLFFBQVFvUyxXQUFSLEdBQXNCLEVBQXRCOztBQUVBOzs7Ozs7QUFNQXBTLFFBQVFxUyxXQUFSLEdBQXNCLFVBQVM5YSxJQUFULEVBQWUrYSxRQUFmLEVBQXlCO0FBQzdDLE9BQUtGLFdBQUwsQ0FBaUI3YSxJQUFqQixJQUF5QithLFFBQXpCO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7QUFLQXRTLFFBQVF1UyxjQUFSLEdBQXlCLFVBQVNoYixJQUFULEVBQWU7QUFDdEMsU0FBTyxLQUFLNmEsV0FBTCxDQUFpQjdhLElBQWpCLENBQVA7QUFDRCxDQUZEOztBQUlBc0QsT0FBTzRELGNBQVAsQ0FBc0J1QixPQUF0QixFQUErQixLQUEvQixFQUFzQztBQUNwQytDLE9BQUssZUFBTTtBQUNULFdBQU8vQyxRQUFRb1MsV0FBZjtBQUNEO0FBSG1DLENBQXRDOztBQU1BcFMsUUFBUW1QLE9BQVIsR0FBa0JBLE9BQWxCO2tCQUNlblAsTzs7Ozs7Ozs7Ozs7Ozs7O0FDNVVmOzs7Ozs7Ozs7Ozs7SUFFcUJGLEk7OztBQUNuQixrQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTmhDLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLHVJQUNWQSxJQURVOztBQUduQixVQUFLMFUsUUFBTCxHQUFnQixPQUFoQjtBQUhtQjtBQUlwQjs7OztpQ0FFWTdZLEssRUFBTztBQUNsQixXQUFLOFksUUFBTCxDQUFjOVksS0FBZDtBQUNEOzs7aUNBRVlBLEssRUFBTztBQUNsQixXQUFLK1ksUUFBTCxDQUFjL1ksS0FBZDtBQUNEOzs7K0JBRVU7QUFDVCxXQUFLa0ksS0FBTCxDQUFXN0ksY0FBWCxDQUEwQixPQUExQixLQUFzQyxLQUFLMFosUUFBTCxDQUFjLEtBQUs3USxLQUFMLENBQVc4USxLQUF6QixDQUF0QztBQUNBLFdBQUs5USxLQUFMLENBQVc3SSxjQUFYLENBQTBCLE9BQTFCLEtBQXNDLEtBQUt5WixRQUFMLENBQWMsS0FBSzVRLEtBQUwsQ0FBV2xJLEtBQXpCLENBQXRDO0FBQ0Q7Ozs2QkFFUUEsSyxFQUFPO0FBQ2RBLGNBQU8sS0FBS2laLGVBQUwsRUFBUCxHQUErQixLQUFLQyxjQUFMLEVBQS9CO0FBQ0Q7Ozs2QkFFUWxaLEssRUFBTztBQUNiLFdBQUs1QyxFQUFMLENBQVEsS0FBS3liLFFBQWIsTUFBMkI3WSxLQUE1QixLQUF1QyxLQUFLNUMsRUFBTCxDQUFRLEtBQUt5YixRQUFiLElBQXlCN1ksVUFBVSxDQUFWLEdBQWEsR0FBYixHQUFtQkEsU0FBUyxFQUE1RjtBQUNEOzs7c0NBRWlCO0FBQ2hCLFdBQUs1QyxFQUFMLENBQVE0YixLQUFSO0FBQ0Q7OztxQ0FFZ0I7QUFDZixXQUFLNWIsRUFBTCxDQUFRK2IsSUFBUjtBQUNEOzs7Ozs7a0JBbENrQmhULEk7QUFtQ3BCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNEOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCUCxHOzs7Ozs2QkFHSDtBQUNkLHNCQUFNbEcsU0FBTixDQUFnQixLQUFoQixFQUF1QmtHLEdBQXZCO0FBQ0Esc0JBQU1sRyxTQUFOLENBQWdCLElBQWhCLEVBQXNCa0csR0FBdEI7QUFDQSxzQkFBTWxHLFNBQU4sQ0FBZ0IsSUFBaEIsRUFBc0JrRyxHQUF0QjtBQUNBLHNCQUFNbEcsU0FBTixDQUFnQixPQUFoQixFQUF5QmtHLEdBQXpCO0FBQ0Esc0JBQU1sRyxTQUFOLENBQWdCLE9BQWhCLEVBQXlCa0csR0FBekI7QUFDQSxzQkFBTWxHLFNBQU4sQ0FBZ0IsT0FBaEIsRUFBeUJrRyxHQUF6QjtBQUNBLHNCQUFNbEcsU0FBTixDQUFnQixJQUFoQixFQUFzQjBaLElBQXRCO0FBQ0Esc0JBQU0xWixTQUFOLENBQWdCLE1BQWhCLEVBQXdCMFosSUFBeEI7QUFDRDs7O0FBRUQsaUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5qVixJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSxxSUFDVkEsSUFEVTs7QUFHbkIsVUFBS2tWLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxVQUFLQyxLQUFMLEdBQWEsSUFBYjtBQUNBLFVBQUtDLE9BQUwsR0FBZSxJQUFmO0FBQ0EsVUFBS0MsT0FBTCxHQUFlLElBQWY7QUFDQSxVQUFLQyxpQkFBTCxHQUF5QixJQUF6QjtBQUNBLFVBQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxVQUFLQyxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsVUFBS0MsaUJBQUwsR0FBeUIsSUFBekI7QUFWbUI7QUFXcEI7Ozs7OEJBRVN0USxJLEVBQU07QUFDZCxXQUFLdVEsSUFBTCxDQUFVdlEsSUFBVjtBQUNEOzs7OEJBRVM7QUFDUixXQUFLd1EsY0FBTDtBQUNEOzs7K0JBRVU7QUFDVCxXQUFLRCxJQUFMLENBQVUsS0FBSzNSLEtBQUwsQ0FBVzZSLEVBQXJCO0FBQ0Q7OztxQ0FFZ0I7QUFDZixVQUFJM2MsV0FBSjs7QUFFQSxXQUFJLElBQUlrQyxJQUFJLENBQVIsRUFBV0MsSUFBSSxLQUFLbkMsRUFBTCxDQUFReUUsUUFBUixDQUFpQjVCLE1BQXBDLEVBQTRDWCxJQUFJQyxDQUFoRCxFQUFtREQsR0FBbkQsRUFBd0Q7QUFDdEQsWUFBSXdDLFFBQVEsS0FBSzFFLEVBQUwsQ0FBUXlFLFFBQVIsQ0FBaUJ2QyxDQUFqQixDQUFaOztBQUVBLFlBQUd3QyxNQUFNbEIsWUFBTixDQUFtQixXQUFuQixLQUFtQyxNQUF0QyxFQUE4QztBQUM1Q3hELGVBQUswRSxLQUFMOztBQUVBO0FBQ0Q7O0FBRUQxRSxhQUFLMEUsS0FBTDtBQUNEOztBQUVELFVBQUcsQ0FBQzFFLEVBQUosRUFBUTtBQUNOLGNBQU0sSUFBSU0sS0FBSixDQUFVLDhDQUFWLENBQU47QUFDRDs7QUFFRCxVQUFJZ0QsZ0JBQWdCdEQsR0FBR3dELFlBQUgsQ0FBZ0IsV0FBaEIsQ0FBcEI7O0FBRUEsVUFBR0YsaUJBQWlCLE1BQXBCLEVBQTRCO0FBQzFCLFlBQUloQixZQUFZLGdCQUFNQSxTQUFOLENBQWdCZ0IsaUJBQWlCdEQsR0FBR3lELE9BQXBDLENBQWhCOztBQUVBLFlBQUcsQ0FBQ25CLFNBQUosRUFBZTtBQUNidEMsYUFBR3NOLFlBQUgsQ0FBZ0IsV0FBaEIsRUFBNkIsTUFBN0I7QUFDRCxTQUZELE1BR0ssSUFBRyxFQUFFaEwsVUFBVW9ELFNBQVYsWUFBK0I4QyxHQUFqQyxDQUFILEVBQTBDO0FBQzdDLGNBQUlvVSxPQUFPOVUsU0FBU3dQLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWDs7QUFFQXNGLGVBQUtsSCxXQUFMLENBQWlCMVYsRUFBakI7QUFDQUEsZUFBSzRjLElBQUw7QUFDRDtBQUNGOztBQUVELFdBQUt2RixJQUFMLEdBQVlyWCxHQUFHd0IsU0FBZjtBQUNBLFdBQUsrYSxXQUFMLEdBQW1CdmMsR0FBRzZjLFdBQXRCO0FBQ0EsV0FBS0wsaUJBQUwsR0FBeUJ4YyxHQUFHOGMsU0FBNUI7QUFDQTljLFNBQUc0RyxNQUFIO0FBQ0Q7Ozs0Q0FFdUI7QUFDdEIsVUFBSTVHLEtBQUs4SCxTQUFTd1AsYUFBVCxDQUF1QixVQUF2QixDQUFUOztBQUVBdFgsU0FBR3dCLFNBQUgsR0FBZSxLQUFLZ2IsaUJBQXBCO0FBQ0F4YyxXQUFLQSxHQUFHK2MsT0FBSCxDQUFXQyxVQUFoQjs7QUFFQSxhQUFPaGQsRUFBUDtBQUNEOzs7eUJBRUkyRixHLEVBQUsvQyxLLEVBQU85QyxJLEVBQU1tZCxLLEVBQU87QUFBQTs7QUFDNUIsV0FBS2IsT0FBTCxHQUFlYSxLQUFmO0FBQ0EsV0FBS2YsS0FBTCxHQUFhdlcsR0FBYjtBQUNBLFdBQUt3VyxPQUFMLEdBQWV2WixLQUFmO0FBQ0EsV0FBS3laLGlCQUFMLEdBQXlCLGdCQUFNbE8sSUFBTixDQUFXdkwsS0FBWCxDQUF6Qjs7QUFFQSxVQUFJd00sT0FBTyxFQUFYO0FBQ0EsVUFBSThOLFFBQVEsQ0FBWjs7QUFFQSxVQUFHdGEsU0FBUyxRQUFPQSxLQUFQLHlDQUFPQSxLQUFQLE1BQWdCLFFBQXpCLElBQXFDQSxNQUFNdWEsTUFBOUMsRUFBc0Q7QUFDcEQvTixlQUFPeE0sTUFBTXVhLE1BQWI7QUFDRDs7QUFFRCxVQUFHLEtBQUtiLFNBQUwsQ0FBZWxOLElBQWYsQ0FBSCxFQUF5QjtBQUN2QnpKLGNBQU15SixJQUFOO0FBQ0E4TixnQkFBUSxDQUFSO0FBQ0QsT0FIRCxNQUlLLElBQUcsS0FBS1osU0FBTCxDQUFlM1csR0FBZixDQUFILEVBQXdCO0FBQzNCdVgsZ0JBQVEsQ0FBUjtBQUNEOztBQUVELFVBQUdBLEtBQUgsRUFBVTtBQUNSLFlBQUlFLFdBQVcsS0FBS2QsU0FBTCxDQUFlM1csR0FBZixDQUFmOztBQUVBLFlBQUd1WCxTQUFTLENBQVosRUFBZTtBQUNiLGNBQUlHLFNBQVNELFNBQVNFLFVBQVQsQ0FBb0IxYSxLQUFqQztBQUNBLGNBQUkyYSxRQUFRSCxTQUFTRSxVQUFULENBQW9CblAsSUFBaEM7O0FBRUEsY0FBSSxLQUFLaU8sT0FBTCxLQUFpQmdCLFNBQVNILEtBQTlCLEVBQXFDO0FBQ25DRyxxQkFBU0ksUUFBVDtBQUNEOztBQUVELGNBQUksS0FBS3RCLEtBQUwsS0FBZWtCLFNBQVN6WCxHQUE1QixFQUFpQztBQUMvQnlYLHFCQUFTSyxNQUFUO0FBQ0Q7O0FBRUQsY0FBSSxDQUFDLGdCQUFNdlAsb0JBQU4sQ0FBMkJ0TCxLQUEzQixFQUFrQ3lhLE1BQWxDLEVBQTBDRSxLQUExQyxFQUFpRCxLQUFLbEIsaUJBQXRELENBQUwsRUFBK0U7QUFDN0VlLHFCQUFTMUIsUUFBVDtBQUNEOztBQUVENWIsZUFBSzZGLEdBQUwsSUFBWXlYLFFBQVo7QUFDQSxpQkFBTyxLQUFLZCxTQUFMLENBQWUzVyxHQUFmLENBQVA7O0FBRUEsaUJBQU95WCxRQUFQO0FBQ0Q7O0FBRUQsYUFBS2IsV0FBTCxHQUFtQmEsU0FBU3BkLEVBQVQsQ0FBWTZjLFdBQS9CO0FBQ0FPLGlCQUFTeEgsU0FBVDtBQUNEOztBQUVELFVBQUk1VixLQUFLLEtBQUswZCxxQkFBTCxFQUFUOztBQUVBMWQsU0FBR3dCLFNBQUgsR0FBZSxLQUFLNlYsSUFBcEI7QUFDQSxXQUFLclgsRUFBTCxDQUFRMmQsWUFBUixDQUFxQjNkLEVBQXJCLEVBQXlCLEtBQUt1YyxXQUE5QjtBQUNBLHNCQUFNbFksT0FBTixDQUFjckUsRUFBZDs7QUFFQSxVQUFHNEMsU0FBUyxRQUFPQSxLQUFQLHlDQUFPQSxLQUFQLE1BQWdCLFFBQTVCLEVBQXNDO0FBQ3BDLFlBQUcsQ0FBQ0EsTUFBTXVhLE1BQVYsRUFBa0I7QUFDaEIvTixpQkFBTyxnQkFBTTFOLGtCQUFOLENBQXlCLEVBQXpCLEVBQTZCLFVBQUNDLEdBQUQsRUFBUztBQUMzQyxtQkFBTyxPQUFLMmEsU0FBTCxDQUFlM2EsR0FBZixDQUFQO0FBQ0QsV0FGTSxDQUFQOztBQUlBbUMsaUJBQU80RCxjQUFQLENBQXNCOUUsS0FBdEIsRUFBNkIsUUFBN0IsRUFBdUM7QUFDckMrRSwwQkFBYyxLQUR1QjtBQUVyQ0Msd0JBQVksS0FGeUI7QUFHckNnVyxzQkFBVSxLQUgyQjtBQUlyQ2hiLG1CQUFPd007QUFKOEIsV0FBdkM7QUFNRDs7QUFFRHRQLGFBQUtzUCxJQUFMLElBQWEsS0FBSzZNLFVBQWxCO0FBQ0EsZUFBTyxLQUFLSyxTQUFMLENBQWVsTixJQUFmLENBQVA7QUFDRCxPQWhCRCxNQWlCSztBQUNILFlBQUcsZ0JBQU1yUSxPQUFOLENBQWNHLEtBQWpCLEVBQXdCO0FBQ3RCLGNBQUkyZSxTQUFTLE9BQU8sS0FBSzFCLE9BQVosSUFBdUIsUUFBdkIsU0FBcUMsS0FBS0EsT0FBMUMsU0FBc0QsS0FBS0EsT0FBeEU7O0FBRUEsY0FBSXBWLE9BQU8scUdBRVM4VyxNQUZULG9CQUU4QkEsTUFGOUIscUJBQVg7O0FBS0EzWSxrQkFBUUMsSUFBUixDQUFhVyxLQUFiLENBQW1CWixRQUFRQyxJQUEzQixFQUFpQzRCLElBQWpDO0FBQ0Q7O0FBRURqSCxhQUFLNkYsR0FBTCxJQUFZLEtBQUtzVyxVQUFqQjtBQUNBLGVBQU8sS0FBS0ssU0FBTCxDQUFlM1csR0FBZixDQUFQO0FBQ0Q7O0FBRUQsYUFBTzNGLEdBQUdtQixPQUFWO0FBQ0Q7Ozt5QkFFSStLLEksRUFBTTtBQUNULFVBQUksUUFBT0EsSUFBUCx5Q0FBT0EsSUFBUCxNQUFlLFFBQWYsSUFBMkJBLFNBQVMsSUFBeEMsRUFBOEM7QUFDNUMsWUFBRyxnQkFBTW5OLE9BQU4sQ0FBY0csS0FBakIsRUFBd0I7QUFDdEJnRyxrQkFBUUMsSUFBUjtBQUNBK0csaUJBQU8sRUFBUDtBQUNEO0FBQ0Y7O0FBRUQsVUFBSXBNLE9BQU8sRUFBWDtBQUNBLFVBQUlnZSxZQUFZLEVBQWhCO0FBQ0EsVUFBSUMsY0FBYyxJQUFsQjtBQUNBLFVBQUlyYixPQUFPLEtBQUsxQyxFQUFMLENBQVF5RSxRQUFSLENBQWlCLEtBQUt6RSxFQUFMLENBQVF5RSxRQUFSLENBQWlCNUIsTUFBakIsR0FBMEIsQ0FBM0MsQ0FBWDs7QUFFQSxVQUFHSCxRQUFRLEVBQUVBLEtBQUt2QixPQUFMLFlBQXdCNmEsSUFBMUIsQ0FBWCxFQUE0QztBQUMxQytCLHNCQUFjcmIsSUFBZDtBQUNEOztBQUVELFVBQUcrQyxNQUFNMFAsT0FBTixDQUFjakosSUFBZCxDQUFILEVBQXdCO0FBQ3RCLGFBQUksSUFBSWhLLElBQUksQ0FBUixFQUFXQyxJQUFJK0osS0FBS3JKLE1BQXhCLEVBQWdDWCxJQUFJQyxDQUFwQyxFQUF1Q0QsR0FBdkMsRUFBNEM7QUFDMUM0YixvQkFBVTFjLElBQVYsQ0FBZSxLQUFLNGMsSUFBTCxDQUFVOWIsQ0FBVixFQUFhZ0ssS0FBS2hLLENBQUwsQ0FBYixFQUFzQnBDLElBQXRCLEVBQTRCb0MsQ0FBNUIsQ0FBZjtBQUNEO0FBQ0YsT0FKRCxNQUtLO0FBQ0gsWUFBSUEsS0FBSSxDQUFSOztBQUVBLGFBQUksSUFBSUYsQ0FBUixJQUFha0ssSUFBYixFQUFtQjtBQUNqQixjQUFHLENBQUNBLEtBQUtqSyxjQUFMLENBQW9CRCxDQUFwQixDQUFKLEVBQTRCO0FBQzFCO0FBQ0Q7O0FBRUQ4YixvQkFBVTFjLElBQVYsQ0FBZSxLQUFLNGMsSUFBTCxDQUFVaGMsQ0FBVixFQUFha0ssS0FBS2xLLENBQUwsQ0FBYixFQUFzQmxDLElBQXRCLEVBQTRCb0MsRUFBNUIsQ0FBZjtBQUNBQTtBQUNEO0FBQ0Y7O0FBRUQsV0FBSSxJQUFJQSxNQUFJLENBQVIsRUFBV0MsS0FBSTJiLFVBQVVqYixNQUE3QixFQUFxQ1gsTUFBSUMsRUFBekMsRUFBNENELEtBQTVDLEVBQWlEO0FBQy9DLFlBQUlrYixXQUFXVSxVQUFVNWIsR0FBVixDQUFmOztBQUVBLGFBQUtsQyxFQUFMLENBQVEwVixXQUFSLENBQW9CMEgsU0FBU3BkLEVBQTdCO0FBQ0FvZCxpQkFBU2EsT0FBVCxDQUFpQi9iLEdBQWpCO0FBQ0Q7O0FBRUQ2YixxQkFBZSxLQUFLL2QsRUFBTCxDQUFRMFYsV0FBUixDQUFvQnFJLFdBQXBCLENBQWY7O0FBRUEsV0FBSSxJQUFJL2IsRUFBUixJQUFhLEtBQUtzYSxTQUFsQixFQUE2QjtBQUMzQixZQUFHLENBQUMsS0FBS0EsU0FBTCxDQUFlcmEsY0FBZixDQUE4QkQsRUFBOUIsQ0FBSixFQUFzQztBQUNwQztBQUNEOztBQUVELGFBQUtzYSxTQUFMLENBQWV0YSxFQUFmLEVBQWtCNFQsU0FBbEI7QUFDRDs7QUFFRCxXQUFLMEcsU0FBTCxHQUFpQnhjLElBQWpCO0FBQ0Q7Ozs7OztBQTFPa0IwSSxHLENBQ1p4RSxPLEdBQVUsTTtrQkFERXdFLEc7QUEyT3BCOztJQUVZd1QsSSxXQUFBQSxJOzs7QUFJWCxrQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSx1Q0FBTmpWLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLDBJQUNWQSxJQURVOztBQUduQixXQUFLbVgsR0FBTCxHQUFXLElBQVg7QUFDQSxXQUFLN0csSUFBTCxHQUFZLE9BQUtyWCxFQUFMLENBQVF3QixTQUFwQjtBQUNBLFdBQUsyYyxLQUFMLEdBQWEsT0FBS25lLEVBQUwsQ0FBUXFOLFlBQVIsQ0FBcUIsSUFBckIsQ0FBYjs7QUFFQSxRQUFHLENBQUMsT0FBSzhRLEtBQU4sSUFBZSxFQUFFLE9BQUtuZSxFQUFMLENBQVFrQixVQUFSLENBQW1CQyxPQUFuQixZQUFzQ3FILEdBQXhDLENBQWxCLEVBQWdFO0FBQzlELGFBQUs0VixNQUFMO0FBQ0Q7QUFUa0I7QUFVcEI7Ozs7OEJBRVM7QUFDUixXQUFLeGQsUUFBTCxDQUFjTyxPQUFkLENBQXNCOGEsVUFBdEIsR0FBbUMsSUFBbkM7QUFDQSxXQUFLaUMsR0FBTCxHQUFXLEtBQUt0ZCxRQUFMLENBQWNPLE9BQXpCO0FBQ0EsV0FBS3FjLFFBQUw7QUFDQSxXQUFLQyxNQUFMO0FBQ0EsV0FBSy9CLFFBQUw7O0FBRUEsV0FBS3lDLEtBQUwsSUFBYyx5RkFBY3JZLEtBQWQsQ0FBb0IsSUFBcEIsRUFBMEJnQixTQUExQixDQUFkO0FBQ0Q7OzsrQkFFVTtBQUNULFdBQUtxWCxLQUFMLElBQWMsMEZBQWVyWSxLQUFmLENBQXFCLElBQXJCLEVBQTJCZ0IsU0FBM0IsQ0FBZDtBQUNEOzs7K0JBRVU7QUFDVCxXQUFLbVcsS0FBTCxHQUFhLEtBQUtpQixHQUFMLENBQVM5QixPQUF0QjtBQUNBLFdBQUtoYyxLQUFMLENBQVdpZSxLQUFYLENBQWlCLFdBQWpCLEVBQThCLEtBQUtwQixLQUFuQztBQUNEOzs7NkJBRVE7QUFDUCxXQUFLdFgsR0FBTCxHQUFXLEtBQUt1WSxHQUFMLENBQVNoQyxLQUFwQjtBQUNBLFdBQUs5YixLQUFMLENBQVdpZSxLQUFYLENBQWlCLFNBQWpCLEVBQTRCLEtBQUsxWSxHQUFqQztBQUNEOzs7K0JBRVU7QUFDVCxXQUFLL0MsS0FBTCxHQUFhLEtBQUtzYixHQUFMLENBQVMvQixPQUF0QjtBQUNBLFdBQUsvYixLQUFMLENBQVdpZSxLQUFYLENBQWlCLFdBQWpCLEVBQThCLEtBQUt6YixLQUFuQyxFQUEwQyxJQUExQzs7QUFFQSxXQUFLMGEsVUFBTCxHQUFrQjtBQUNoQm5QLGNBQU0sS0FBSytQLEdBQUwsQ0FBUzdCLGlCQURDO0FBRWhCelosZUFBTyxLQUFLc2IsR0FBTCxDQUFTL0I7QUFGQSxPQUFsQjtBQUlEOzs7NEJBRU9jLEssRUFBTyxDQUFFOzs7O0VBbERPelUsRzs7QUFBYndULEksQ0FDSmhZLE8sR0FBVSxFO0FBRE5nWSxJLENBRUp0UCxpQixHQUFvQixJOzs7QUFtRDdCbEUsSUFBSXdULElBQUosR0FBV0EsSUFBWCxDOzs7Ozs7Ozs7Ozs7Ozs7QUN0U0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJuVCxLOzs7Ozs2QkFDSDtBQUNkLHNCQUFNdkcsU0FBTixDQUFnQixPQUFoQixFQUF5QnVHLEtBQXpCO0FBQ0Q7OztBQUVELG1CQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOOUIsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEseUlBQ1ZBLElBRFU7O0FBR25CLFVBQUsvRyxFQUFMLENBQVF3QixTQUFSLEdBQW9CLEVBQXBCO0FBSG1CO0FBSXBCOztBQUVEOzs7Ozs7OztrQ0FJYzhjLFUsRUFBWTtBQUFBOztBQUN4QixVQUFJQyxRQUFRRCxXQUFXRSxJQUFYLENBQWdCRCxLQUE1QjtBQUNBLFVBQUk1RSxTQUFTMkUsV0FBV0UsSUFBWCxDQUFnQjdFLE1BQTdCO0FBQ0EsVUFBSWxCLE1BQU02RixXQUFXN0YsR0FBckI7QUFDQSxVQUFJa0MsUUFBUTJELFdBQVczRCxLQUF2QjtBQUNBLFVBQUloVyxJQUFJRSxRQUFRcUcsT0FBUixFQUFSOztBQUVBLGVBQVN1VCx3QkFBVCxDQUFrQ0QsSUFBbEMsRUFBd0M7QUFDdEMsWUFBR0EsS0FBS2xULE1BQVIsRUFBZ0I7QUFDZCxjQUFJa1QsS0FBS2xULE1BQUwsQ0FBWWhKLFNBQWhCLEVBQTJCO0FBQ3pCLG1CQUFPa2MsS0FBS2xULE1BQUwsQ0FBWWhKLFNBQVosQ0FBc0JpSyxPQUF0QixDQUE4Qm1TLFlBQTlCLENBQTJDRixJQUFsRDtBQUNEOztBQUVELGlCQUFPQyx5QkFBeUJELEtBQUtsVCxNQUE5QixDQUFQO0FBQ0Q7O0FBRUQsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsV0FBS2lCLE9BQUwsQ0FBYW1TLFlBQWIsR0FBNEI7QUFDMUJGLGNBQU07QUFDSkQsaUJBQU9BLE1BQU0vZCxJQURUO0FBRUowTCxnQkFBTW9TLFdBQVdFLElBQVgsQ0FBZ0J0UyxJQUZsQjtBQUdKeU4sa0JBQVFBLE1BSEo7QUFJSnJPLGtCQUFRbVQseUJBQXlCSCxXQUFXRSxJQUFwQztBQUpKLFNBRG9CO0FBTzFCN0UsZ0JBQVEyRSxXQUFXM0UsTUFQTztBQVExQmxCLGFBQUtBLEdBUnFCO0FBUzFCa0MsZUFBT0E7QUFUbUIsT0FBNUI7O0FBWUEsVUFBSTRELE1BQU1qZCxRQUFWLEVBQW9CO0FBQ2xCLGFBQUtxZCxLQUFMO0FBQ0EsYUFBSzNlLEVBQUwsQ0FBUXdCLFNBQVIsbUJBQWtDK2MsTUFBTWpkLFFBQXhDO0FBQ0Q7O0FBRUQsVUFBSWlkLE1BQU14UyxXQUFWLEVBQXVCO0FBQ3JCcEgsWUFBSSxrQkFBUXFILEdBQVIsQ0FBWXVTLE1BQU14UyxXQUFsQixFQUErQmhILElBQS9CLENBQW9DLFVBQUNqRCxHQUFELEVBQVM7QUFDL0MsaUJBQUs2YyxLQUFMO0FBQ0EsaUJBQUszZSxFQUFMLENBQVF3QixTQUFSLG1CQUFrQ00sSUFBSW9LLElBQXRDO0FBQ0QsU0FIRyxDQUFKO0FBSUQ7O0FBRUQsYUFBT3ZILEVBQUVJLElBQUYsQ0FBTyxZQUFNO0FBQ2xCLGVBQU8sZ0JBQU1WLE9BQU4sQ0FBYyxPQUFLckUsRUFBbkIsRUFBdUIsRUFBRWtELFdBQVcsSUFBYixFQUF2QixDQUFQO0FBQ0QsT0FGTSxDQUFQO0FBR0Q7Ozs7OztrQkE3RGtCMkYsSztBQThEcEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2xFb0JWLFk7QUFDbkIsd0JBQVkzSCxJQUFaLEVBQWtCUixFQUFsQixFQUFzQnNDLFNBQXRCLEVBQWlDO0FBQUE7O0FBQy9CLFNBQUs5QixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLUixFQUFMLEdBQVVBLEVBQVY7QUFDQSxTQUFLc0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7NEJBT1E0SixJLEVBQW1EO0FBQUEsVUFBN0NuTixPQUE2Qyx1RUFBbkMsRUFBRTZmLFNBQVMsS0FBWCxFQUFtQztBQUFBLFVBQWZDLEtBQWUsdUVBQVAsS0FBTzs7QUFDekQsVUFBR0EsU0FBUyxDQUFDLEtBQUtDLFlBQUwsRUFBYixFQUFrQztBQUNoQyxhQUFLOWUsRUFBTCxDQUFRK2UsYUFBUixDQUFzQixJQUFJQyxXQUFKLENBQWdCLEtBQUt4ZSxJQUFyQixhQUE0QnllLFFBQVEvUyxJQUFwQyxJQUE2Q25OLE9BQTdDLEVBQXRCO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7Ozs7Ozs2QkFPU21nQixNLEVBQXFEO0FBQUEsVUFBN0NuZ0IsT0FBNkMsdUVBQW5DLEVBQUU2ZixTQUFTLEtBQVgsRUFBbUM7QUFBQSxVQUFmQyxLQUFlLHVFQUFQLEtBQU87O0FBQzVELFVBQUdBLFNBQVMsQ0FBQyxLQUFLQyxZQUFMLEVBQWIsRUFBa0M7QUFDaEMsYUFBSzllLEVBQUwsQ0FBUStlLGFBQVIsQ0FBc0IsSUFBSUcsTUFBSixDQUFXLEtBQUsxZSxJQUFoQixFQUFzQnpCLE9BQXRCLENBQXRCO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7Ozs7bUNBS2U7QUFDYixVQUFJbU4sT0FBTyxLQUFLNUosU0FBTCxDQUFleUgsaUJBQTFCOztBQUVBLFVBQUcsQ0FBQ21DLElBQUosRUFBVTtBQUNSLGVBQU8sS0FBUDtBQUNEOztBQUVELGFBQU9BLEtBQUtsTSxFQUFMLEtBQVksS0FBS0EsRUFBakIsSUFBdUJrTSxLQUFLdUcsS0FBTCxDQUFXME0sSUFBWCxLQUFvQixLQUFLM2UsSUFBaEQsSUFBd0QwTCxLQUFLNUosU0FBTCxLQUFtQixLQUFLQSxTQUF2RjtBQUNEOztBQUVEOzs7Ozs7Ozt5QkFLS1QsRSxFQUFJO0FBQ1AsV0FBSzdCLEVBQUwsQ0FBUXdHLGdCQUFSLENBQXlCLEtBQUtoRyxJQUE5QixFQUFvQyxLQUFLcUIsRUFBTCxHQUFVQSxFQUE5QztBQUNEOztBQUVEOzs7Ozs7NkJBR1M7QUFDUCxXQUFLQSxFQUFMLElBQVcsS0FBSzdCLEVBQUwsQ0FBUTBHLG1CQUFSLENBQTRCLEtBQUtsRyxJQUFqQyxFQUF1QyxLQUFLcUIsRUFBNUMsQ0FBWDtBQUNEOzs7Ozs7a0JBOURrQnNHLFk7QUErRHBCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0REOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztJQUVhaVgsVSxXQUFBQSxVO0FBQ1gsc0JBQVkzRyxHQUFaLEVBQWlCa0MsS0FBakIsRUFBb0Q7QUFBQSxRQUE1QnZMLElBQTRCLHVFQUFyQixFQUFxQjtBQUFBLFFBQWpCNkgsUUFBaUIsdUVBQU4sSUFBTTs7QUFBQTs7QUFDbEQsU0FBS3dCLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtrQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLdkwsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBSzZILFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS3VILElBQUwsR0FBWSxJQUFaO0FBQ0EsU0FBS2EsTUFBTCxHQUFjLEVBQWQ7QUFDQSxTQUFLQyxNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUszRixNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUt4VixXQUFMLEdBQW1CLEtBQW5CO0FBQ0Q7Ozs7K0JBRVU7QUFDVCxXQUFLaWEsTUFBTDtBQUNBbFYsYUFBT3FWLEtBQVAsQ0FBYXpZLEtBQWIsQ0FBbUJvRCxNQUFuQixFQUEyQnBDLFNBQTNCO0FBQ0Q7Ozs0QkFFTzBYLEksRUFBTTtBQUNaQSxXQUFLbFQsTUFBTCxHQUFjLEtBQUtrVCxJQUFMLElBQWEsSUFBM0I7QUFDQSxXQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDQSxXQUFLYSxNQUFMLENBQVlqZSxJQUFaLENBQWlCb2QsSUFBakI7QUFDQSxXQUFLYyxNQUFMLENBQVlsZSxJQUFaLENBQWlCb2QsS0FBS0QsS0FBdEI7QUFDQSxXQUFLNUUsTUFBTCxHQUFjLENBQUM2RSxLQUFLbFQsTUFBTixHQUFja1QsS0FBSzdFLE1BQW5CLGdCQUErQjZFLEtBQUtsVCxNQUFMLENBQVlxTyxNQUEzQyxFQUFzRDZFLEtBQUs3RSxNQUEzRCxDQUFkO0FBQ0Q7Ozs2QkFFUTRFLEssRUFBTztBQUNkLFdBQUksSUFBSXJjLElBQUksQ0FBUixFQUFXQyxJQUFJLEtBQUtrZCxNQUFMLENBQVl4YyxNQUEvQixFQUF1Q1gsSUFBSUMsQ0FBM0MsRUFBOENELEdBQTlDLEVBQW1EO0FBQ2pELFlBQUlxZCxRQUFRLEtBQUtGLE1BQUwsQ0FBWW5kLENBQVosQ0FBWjs7QUFFQSxZQUFHcWQsTUFBTWhCLEtBQU4sS0FBZ0JBLEtBQW5CLEVBQTBCO0FBQ3hCLGlCQUFPZ0IsS0FBUDtBQUNEO0FBQ0Y7O0FBRUQsYUFBTyxJQUFQO0FBQ0Q7Ozs2QkFFUWhCLEssRUFBTztBQUNkLGFBQU8sS0FBS2UsTUFBTCxDQUFZM1YsT0FBWixDQUFvQjRVLEtBQXBCLEtBQThCLENBQUMsQ0FBdEM7QUFDRDs7OzZCQUVRO0FBQ1AsV0FBS3BhLFdBQUwsR0FBbUIsSUFBbkI7QUFDRDs7Ozs7O0FBR0gsSUFBTStFLFNBQVMsRUFBZjs7QUFFQUEsT0FBT21QLE9BQVAsR0FBaUIsR0FBakI7QUFDQW5QLE9BQU9vVyxNQUFQLEdBQWdCLEVBQWhCO0FBQ0FwVyxPQUFPc1csUUFBUCxHQUFrQixJQUFsQjtBQUNBdFcsT0FBT3VXLFdBQVAsR0FBcUIsQ0FBckI7QUFDQXZXLE9BQU8vSixNQUFQLEdBQWdCLEtBQWhCO0FBQ0ErSixPQUFPd1csU0FBUCxHQUFtQixFQUFuQjtBQUNBeFcsT0FBT3lXLFlBQVAsR0FBc0IsZ0JBQXRCO0FBQ0F6VyxPQUFPMFcsZUFBUCxHQUF5QjtBQUFBLFNBQUtwTyw0QkFBTDtBQUFBLENBQXpCOztBQUVBOzs7Ozs7OztBQVFBdEksT0FBTzJXLEdBQVAsR0FBYSxVQUFVcmYsSUFBVixFQUFnQnNmLE9BQWhCLEVBQXVDO0FBQUEsTUFBZC9nQixPQUFjLHVFQUFKLEVBQUk7O0FBQ2xELE1BQUlnaEIsaUJBQWlCO0FBQ25CemUsY0FBVSxFQURTO0FBRW5CeUssaUJBQWEsRUFGTTtBQUduQmlVLGNBQVUsS0FIUztBQUluQjlKLGFBQVMsaUJBQUNvSSxVQUFELEVBQWdCLENBQUU7QUFKUixHQUFyQjs7QUFPQSxNQUFHLENBQUN2ZixRQUFRdUMsUUFBVCxJQUFxQixDQUFDdkMsUUFBUWdOLFdBQWpDLEVBQThDO0FBQzVDaE4sWUFBUWloQixRQUFSLEdBQW1CLElBQW5CO0FBQ0Q7O0FBRUQsTUFBRyxLQUFLcEksR0FBTCxDQUFTcFgsSUFBVCxDQUFILEVBQW1CO0FBQ2pCLFVBQU0sSUFBSUYsS0FBSixvQkFBMkJFLElBQTNCLHlCQUFOO0FBQ0Q7O0FBRUQsT0FBS3lmLFFBQUwsQ0FBY3pmLElBQWQsRUFBb0JzZixPQUFwQixlQUFpQ0MsY0FBakMsRUFBb0RoaEIsT0FBcEQ7O0FBRUEsU0FBTyxJQUFQO0FBQ0QsQ0FuQkQ7O0FBcUJBOzs7OztBQUtBbUssT0FBT3RDLE1BQVAsR0FBZ0IsVUFBU3BHLElBQVQsRUFBZTtBQUM3QixPQUFJLElBQUkwQixJQUFJLENBQVIsRUFBV0MsSUFBSSxLQUFLbWQsTUFBTCxDQUFZemMsTUFBL0IsRUFBdUNYLElBQUlDLENBQTNDLEVBQThDRCxHQUE5QyxFQUFtRDtBQUNqRCxRQUFHLEtBQUtvZCxNQUFMLENBQVlwZCxDQUFaLEVBQWUxQixJQUFmLElBQXVCQSxJQUExQixFQUFnQztBQUM5QixXQUFLOGUsTUFBTCxDQUFZbFksTUFBWixDQUFtQmxGLENBQW5CLEVBQXNCLENBQXRCOztBQUVBO0FBQ0Q7QUFDRjtBQUNGLENBUkQ7O0FBVUE7Ozs7OztBQU1BZ0gsT0FBTzBPLEdBQVAsR0FBYSxVQUFTcFgsSUFBVCxFQUFlO0FBQzFCLE9BQUksSUFBSTBCLElBQUksQ0FBUixFQUFXQyxJQUFJLEtBQUttZCxNQUFMLENBQVl6YyxNQUEvQixFQUF1Q1gsSUFBSUMsQ0FBM0MsRUFBOENELEdBQTlDLEVBQW1EO0FBQ2pELFFBQUcsS0FBS29kLE1BQUwsQ0FBWXBkLENBQVosRUFBZTFCLElBQWYsSUFBdUJBLElBQTFCLEVBQWdDO0FBQzlCLGFBQU8sSUFBUDtBQUNEO0FBQ0Y7O0FBRUQsU0FBTyxLQUFQO0FBQ0QsQ0FSRDs7QUFVQTs7Ozs7Ozs7O0FBU0EwSSxPQUFPcVYsS0FBUCxHQUFlLFVBQVUvZCxJQUFWLEVBQWtFO0FBQUEsTUFBbERtWixNQUFrRCx1RUFBekMsRUFBeUM7QUFBQSxNQUFyQ2dCLEtBQXFDLHVFQUE3QixFQUE2QjtBQUFBLE1BQXpCdkwsSUFBeUIsdUVBQWxCLEVBQWtCO0FBQUEsTUFBZHJRLE9BQWMsdUVBQUosRUFBSTs7QUFDL0UsTUFBSXdmLFFBQVEsS0FBSzJCLFFBQUwsQ0FBYzFmLElBQWQsQ0FBWjs7QUFFQSxNQUFJLENBQUMrZCxLQUFMLEVBQVk7QUFDVixVQUFNLElBQUlqZSxLQUFKLHNDQUE2Q0UsSUFBN0MsQ0FBTjtBQUNEOztBQUVELE1BQUlpWSxNQUFNLEtBQUswSCxjQUFMLENBQW9CNUIsS0FBcEIsRUFBMkI1RSxNQUEzQixFQUFtQ2dCLEtBQW5DLEVBQTBDdkwsSUFBMUMsQ0FBVjs7QUFFQSxNQUFHLENBQUNyUSxRQUFRcWhCLE1BQVQsSUFBbUIzSCxRQUFRLEtBQUs0SCxNQUFMLEVBQTlCLEVBQTZDO0FBQzNDO0FBQ0Q7O0FBRUQsT0FBS1gsU0FBTCxHQUFpQjNnQixPQUFqQjtBQUNBLE9BQUt1aEIsTUFBTCxDQUFZN0gsR0FBWjtBQUNELENBZkQ7O0FBaUJBOzs7QUFHQXZQLE9BQU9xWCxJQUFQLEdBQWMsWUFBVztBQUN2QixTQUFPdmEsT0FBT3dhLE9BQVAsQ0FBZUQsSUFBZixDQUFvQnphLEtBQXBCLENBQTBCRSxPQUFPd2EsT0FBakMsRUFBMEMxWixTQUExQyxDQUFQO0FBQ0QsQ0FGRDs7QUFJQTs7O0FBR0FvQyxPQUFPdVgsRUFBUCxHQUFZLFlBQVc7QUFDckIsU0FBT3phLE9BQU93YSxPQUFQLENBQWVDLEVBQWYsQ0FBa0IzYSxLQUFsQixDQUF3QkUsT0FBT3dhLE9BQS9CLEVBQXdDMVosU0FBeEMsQ0FBUDtBQUNELENBRkQ7O0FBSUE7OztBQUdBb0MsT0FBT3dYLE9BQVAsR0FBaUIsWUFBVztBQUMxQixTQUFPMWEsT0FBT3dhLE9BQVAsQ0FBZUUsT0FBZixDQUF1QjVhLEtBQXZCLENBQTZCRSxPQUFPd2EsT0FBcEMsRUFBNkMxWixTQUE3QyxDQUFQO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7O0FBTUFvQyxPQUFPeVgsUUFBUCxHQUFrQixVQUFTbEksR0FBVCxFQUEyQztBQUFBLE1BQTdCMVosT0FBNkIsdUVBQW5CLEVBQUVxaEIsUUFBUSxLQUFWLEVBQW1COztBQUMzRCxPQUFLVixTQUFMLEdBQWlCM2dCLE9BQWpCOztBQUVBLE1BQUcsS0FBS3lnQixRQUFSLEVBQWtCO0FBQ2hCeFosV0FBTzJhLFFBQVAsQ0FBZ0J2UixJQUFoQixHQUF1QnFKLEdBQXZCO0FBQ0QsR0FGRCxNQUdLO0FBQ0h6UyxXQUFPd2EsT0FBUCxDQUFlSSxTQUFmLENBQXlCLElBQXpCLEVBQStCLEVBQS9CLEVBQW1DbkksR0FBbkM7QUFDRDtBQUNGLENBVEQ7O0FBV0E7Ozs7OztBQU1BdlAsT0FBT3JCLElBQVAsR0FBYyxZQUE0QztBQUFBOztBQUFBLE1BQWxDZ1osVUFBa0MsdUVBQXJCLEVBQXFCO0FBQUEsTUFBakJyQixRQUFpQix1RUFBTixJQUFNOztBQUN4RCxNQUFJc0IsZUFBZTlhLE9BQU93YSxPQUFQLENBQWVJLFNBQWxDOztBQUVBNWEsU0FBT3dhLE9BQVAsQ0FBZUksU0FBZixHQUEyQixZQUFXO0FBQ3BDLFFBQUk5ZSxNQUFNZ2YsYUFBYWhiLEtBQWIsQ0FBbUIsSUFBbkIsRUFBeUJnQixTQUF6QixDQUFWOztBQUVBb0MsV0FBT2pCLFdBQVA7O0FBRUEsV0FBT25HLEdBQVA7QUFDRCxHQU5EOztBQVFBLE9BQUtpZixzQkFBTCxHQUE4QixZQUFNO0FBQ2xDLFVBQUs5WSxXQUFMO0FBQ0QsR0FGRDs7QUFJQSxPQUFLNFksVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxPQUFLckIsUUFBTCxHQUFnQkEsUUFBaEI7O0FBRUEsT0FBS0YsTUFBTCxDQUFZakosSUFBWixDQUFpQixVQUFDRSxDQUFELEVBQUlDLENBQUosRUFBVTtBQUN6QkQsUUFBSUEsRUFBRS9WLElBQUYsQ0FBT3FhLEtBQVAsQ0FBYSxHQUFiLEVBQWtCaFksTUFBdEI7QUFDQTJULFFBQUlBLEVBQUVoVyxJQUFGLENBQU9xYSxLQUFQLENBQWEsR0FBYixFQUFrQmhZLE1BQXRCOztBQUVBLFdBQU8wVCxJQUFJQyxDQUFYO0FBQ0QsR0FMRDs7QUFPQSxNQUFJOEksU0FBUyxFQUFiOztBQUVBLE9BQUssSUFBSXBkLElBQUksQ0FBUixFQUFXQyxJQUFJLEtBQUttZCxNQUFMLENBQVl6YyxNQUFoQyxFQUF3Q1gsSUFBSUMsQ0FBNUMsRUFBK0NELEdBQS9DLEVBQW9EO0FBQ2xELFFBQUlxYyxRQUFRLEtBQUtlLE1BQUwsQ0FBWXBkLENBQVosQ0FBWjtBQUNBLFFBQUl3TCxVQUFVLEVBQWQ7O0FBRUE0UixXQUFPZixNQUFNL2QsSUFBYixJQUFxQitkLEtBQXJCO0FBQ0FBLFVBQU05WixRQUFOLEdBQWlCLEVBQWpCO0FBQ0FpSixjQUFVNlEsTUFBTS9kLElBQU4sQ0FBV3FhLEtBQVgsQ0FBaUIsR0FBakIsQ0FBVjtBQUNBbk4sWUFBUXNULEdBQVI7QUFDQXpDLFVBQU1ySixLQUFOLEdBQWNxSixNQUFNeUIsUUFBTixHQUFnQixJQUFoQixHQUFzQnRTLFFBQVE3SyxNQUE1Qzs7QUFFQSxRQUFJNkssUUFBUTdLLE1BQVosRUFBb0I7QUFDbEIsVUFBSW9lLGFBQWF2VCxRQUFReE4sSUFBUixDQUFhLEdBQWIsQ0FBakI7QUFDQSxVQUFJb0wsU0FBU2dVLE9BQU8yQixVQUFQLENBQWI7O0FBRUEsVUFBSSxDQUFDM1YsTUFBTCxFQUFhO0FBQ1gsY0FBTSxJQUFJaEwsS0FBSixvQ0FBMkMyZ0IsVUFBM0MsZUFBK0QxQyxNQUFNL2QsSUFBckUsT0FBTjtBQUNEOztBQUVELFVBQUcrZCxNQUFNckosS0FBTixLQUFnQixJQUFoQixJQUF3QjVKLE9BQU8wVSxRQUFsQyxFQUE0QztBQUMxQ3pCLGNBQU1ySixLQUFOO0FBQ0Q7O0FBRURxSixZQUFNMkMsV0FBTixHQUFvQixLQUFLQyxZQUFMLENBQWtCN1YsT0FBTzRWLFdBQVAsR0FBcUIsR0FBckIsR0FBMkIzQyxNQUFNdUIsT0FBbkQsQ0FBcEI7QUFDQXhVLGFBQU83RyxRQUFQLENBQWdCckQsSUFBaEIsQ0FBcUJtZCxLQUFyQjtBQUNELEtBZEQsTUFlSztBQUNIQSxZQUFNMkMsV0FBTixHQUFvQjNDLE1BQU11QixPQUExQjtBQUNEO0FBQ0Y7O0FBRUQsTUFBRyxDQUFDLEtBQUtSLE1BQUwsQ0FBWXpjLE1BQWIsSUFBdUIsZ0JBQU05RCxPQUFOLENBQWNHLEtBQXhDLEVBQStDO0FBQzdDZ0csWUFBUUMsSUFBUjtBQUNEOztBQUVEYSxTQUFPUSxnQkFBUCxDQUF3QixVQUF4QixFQUFvQyxLQUFLdWEsc0JBQXpDO0FBQ0EsT0FBSzVoQixNQUFMLEdBQWMsSUFBZDtBQUNELENBL0REOztBQWlFQTs7Ozs7O0FBTUErSixPQUFPZ1gsUUFBUCxHQUFrQixVQUFVMWYsSUFBVixFQUFnQjtBQUNoQyxPQUFLLElBQUkwQixJQUFJLENBQVIsRUFBV0MsSUFBSSxLQUFLbWQsTUFBTCxDQUFZemMsTUFBaEMsRUFBd0NYLElBQUlDLENBQTVDLEVBQStDRCxHQUEvQyxFQUFvRDtBQUNsRCxRQUFJcWMsUUFBUSxLQUFLZSxNQUFMLENBQVlwZCxDQUFaLENBQVo7O0FBRUEsUUFBSXFjLE1BQU0vZCxJQUFOLElBQWNBLElBQWxCLEVBQXdCO0FBQ3RCLGFBQU8rZCxLQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPLElBQVA7QUFDRCxDQVZEOztBQVlBOzs7Ozs7O0FBT0FyVixPQUFPK1csUUFBUCxHQUFrQixVQUFVemYsSUFBVixFQUFnQnNmLE9BQWhCLEVBQXVDO0FBQUEsTUFBZC9nQixPQUFjLHVFQUFKLEVBQUk7O0FBQ3ZELE1BQUl3ZixxQkFBWXhmLE9BQVosSUFBcUJ5QixVQUFyQixFQUEyQnNmLGdCQUEzQixHQUFKOztBQUVBNVcsU0FBT29XLE1BQVAsQ0FBY2xlLElBQWQsQ0FBbUJtZCxLQUFuQjs7QUFFQSxTQUFPQSxLQUFQO0FBQ0QsQ0FORDs7QUFRQTs7Ozs7QUFLQXJWLE9BQU9rWSxXQUFQLEdBQXFCLFVBQVU1Z0IsSUFBVixFQUFnQjtBQUNuQyxPQUFLLElBQUkwQixJQUFJLENBQVIsRUFBV0MsSUFBSSxLQUFLbWQsTUFBTCxDQUFZemMsTUFBaEMsRUFBd0NYLElBQUlDLENBQTVDLEVBQStDRCxHQUEvQyxFQUFvRDtBQUNsRCxRQUFJcWMsUUFBUSxLQUFLZSxNQUFMLENBQVlwZCxDQUFaLENBQVo7O0FBRUEsUUFBSXFjLE1BQU0vZCxJQUFOLElBQWNBLElBQWxCLEVBQXdCO0FBQ3RCLFdBQUs4ZSxNQUFMLENBQVlsWSxNQUFaLENBQW1CbEYsQ0FBbkIsRUFBc0IsQ0FBdEI7O0FBRUE7QUFDRDtBQUNGO0FBQ0YsQ0FWRDs7QUFZQTs7Ozs7QUFLQWdILE9BQU9vWCxNQUFQLEdBQWdCLFVBQVU3SCxHQUFWLEVBQWU7QUFDN0IsT0FBSytHLFFBQUwsR0FBZSxLQUFLNkIsVUFBTCxDQUFnQjVJLEdBQWhCLENBQWYsR0FBcUMsS0FBSzZJLGFBQUwsQ0FBbUI3SSxHQUFuQixDQUFyQztBQUNELENBRkQ7O0FBSUE7Ozs7O0FBS0F2UCxPQUFPb1ksYUFBUCxHQUF1QixVQUFVN0ksR0FBVixFQUFlO0FBQ3BDelMsU0FBT3dhLE9BQVAsQ0FBZUksU0FBZixDQUF5QixJQUF6QixFQUErQixFQUEvQixFQUFtQ25JLEdBQW5DO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7QUFLQXZQLE9BQU9tWSxVQUFQLEdBQW9CLFVBQVU1SSxHQUFWLEVBQWU7QUFDakN6UyxTQUFPMmEsUUFBUCxDQUFnQnZSLElBQWhCLEdBQXVCLE9BQU9xSixPQUFPLEdBQWQsQ0FBdkI7QUFDRCxDQUZEOztBQUlBOzs7OztBQUtBdlAsT0FBT21YLE1BQVAsR0FBZ0IsWUFBWTtBQUMxQixTQUFPLEtBQUtiLFFBQUwsR0FBZ0IsS0FBSytCLFVBQUwsRUFBaEIsR0FBb0MsS0FBS0MsYUFBTCxFQUEzQztBQUNELENBRkQ7O0FBSUE7Ozs7O0FBS0F0WSxPQUFPc1ksYUFBUCxHQUF1QixZQUFZO0FBQ2pDLE1BQUd4YixPQUFPMmEsUUFBUCxDQUFnQmMsUUFBaEIsS0FBNkIsR0FBaEMsRUFBcUM7QUFDbkMsV0FBTyxFQUFQO0FBQ0Q7O0FBRUQsU0FBT3piLE9BQU8yYSxRQUFQLENBQWdCYyxRQUFoQixHQUEyQnpiLE9BQU8yYSxRQUFQLENBQWdCZSxNQUEzQyxHQUFvRDFiLE9BQU8yYSxRQUFQLENBQWdCdlIsSUFBM0U7QUFDRCxDQU5EOztBQVFBOzs7OztBQUtBbEcsT0FBT3FZLFVBQVAsR0FBb0IsWUFBWTtBQUM5QixTQUFPdmIsT0FBTzJhLFFBQVAsQ0FBZ0J2UixJQUFoQixDQUFxQjdOLE9BQXJCLENBQTZCLElBQTdCLEVBQW1DLEVBQW5DLENBQVA7QUFDRCxDQUZEOztBQUlBOzs7OztBQUtBMkgsT0FBT3lZLFdBQVAsR0FBcUIsWUFBVztBQUM5QixTQUFPLEtBQUtuQyxRQUFMLEdBQWdCLEtBQUtvQyxlQUFMLEVBQWhCLEdBQXlDLEtBQUtDLGtCQUFMLEVBQWhEO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7QUFLQTNZLE9BQU8yWSxrQkFBUCxHQUE0QixZQUFXO0FBQ3JDLFNBQU8sa0JBQVFDLGVBQVIsQ0FBd0I5YixPQUFPMmEsUUFBUCxDQUFnQmUsTUFBaEIsQ0FBdUJuZ0IsT0FBdkIsQ0FBK0IsS0FBL0IsRUFBc0MsRUFBdEMsQ0FBeEIsQ0FBUDtBQUNELENBRkQ7O0FBSUE7Ozs7O0FBS0EySCxPQUFPMFksZUFBUCxHQUF5QixZQUFXO0FBQ2xDLFNBQU8sa0JBQVFFLGVBQVIsQ0FBeUI5YixPQUFPMmEsUUFBUCxDQUFnQnZSLElBQWhCLENBQXFCeUwsS0FBckIsQ0FBMkIsR0FBM0IsRUFBZ0MsQ0FBaEMsS0FBc0MsRUFBL0QsQ0FBUDtBQUNELENBRkQ7O0FBSUE7Ozs7Ozs7O0FBUUEzUixPQUFPaVgsY0FBUCxHQUF3QixVQUFVNUIsS0FBVixFQUFxRDtBQUFBLE1BQXBDNUUsTUFBb0MsdUVBQTNCLEVBQTJCO0FBQUEsTUFBdkJnQixLQUF1Qix1RUFBZixFQUFlO0FBQUEsTUFBWHZMLElBQVcsdUVBQUosRUFBSTs7QUFDM0UsVUFBT21QLEtBQVAseUNBQU9BLEtBQVAsT0FBaUIsUUFBakIsS0FBOEJBLFFBQVEsS0FBSzJCLFFBQUwsQ0FBYzNCLEtBQWQsQ0FBdEM7O0FBRUEsTUFBSTlGLE1BQU04RixNQUFNMkMsV0FBTixDQUFrQjNmLE9BQWxCLENBQTBCLEtBQUtvZSxZQUEvQixFQUE2QyxVQUFDblIsQ0FBRCxFQUFJdVQsQ0FBSixFQUFPdEgsQ0FBUCxFQUFhO0FBQ2xFLFdBQU9kLE9BQU9jLENBQVAsS0FBYSxFQUFwQjtBQUNELEdBRlMsQ0FBVjs7QUFJQWhDLFFBQU0sS0FBSzBJLFlBQUwsQ0FBa0IxSSxHQUFsQixDQUFOOztBQUVBLE1BQUczVSxPQUFPaEUsSUFBUCxDQUFZNmEsS0FBWixFQUFtQjlYLE1BQXRCLEVBQThCO0FBQzVCNFYsV0FBTyxNQUFNLGtCQUFRbUIsYUFBUixDQUFzQmUsS0FBdEIsQ0FBYjtBQUNEOztBQUVEdkwsU0FBTyxDQUFDQSxRQUFRLEVBQVQsRUFBYTdOLE9BQWIsQ0FBcUIsR0FBckIsRUFBMEIsRUFBMUIsQ0FBUDs7QUFFQSxNQUFHLENBQUMsS0FBS2llLFFBQU4sSUFBa0JwUSxJQUFyQixFQUEyQjtBQUN6QnFKLFdBQU8sTUFBTXJKLElBQWI7QUFDRDs7QUFFRCxTQUFPcUosR0FBUDtBQUNELENBcEJEOztBQXNCQTs7Ozs7O0FBTUF2UCxPQUFPaVksWUFBUCxHQUFzQixVQUFVMUksR0FBVixFQUFlO0FBQ25DLFNBQU9BLElBQUlsWCxPQUFKLENBQVksUUFBWixFQUFzQixHQUF0QixDQUFQO0FBQ0QsQ0FGRDs7QUFJQTs7O0FBR0EySCxPQUFPdUwsS0FBUCxHQUFlLFlBQVk7QUFDekJ6TyxTQUFPVSxtQkFBUCxDQUEyQixVQUEzQixFQUF1QyxLQUFLcWEsc0JBQTVDO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7OztBQU9BN1gsT0FBTzhZLGlCQUFQLEdBQTJCLFVBQVV6RCxLQUFWLEVBQWlCOUYsR0FBakIsRUFBc0I7QUFDL0MsVUFBTzhGLEtBQVAseUNBQU9BLEtBQVAsT0FBaUIsUUFBakIsS0FBOEJBLFFBQVEsS0FBSzJCLFFBQUwsQ0FBYzNCLEtBQWQsQ0FBdEM7O0FBRUEsTUFBSXplLE9BQU8sRUFBWDtBQUNBLE1BQUlvQyxJQUFJLENBQVI7QUFDQSxNQUFJeVgsU0FBUyxFQUFiOztBQUVBbEIsUUFBTUEsSUFBSW9DLEtBQUosQ0FBVSxHQUFWLEVBQWUsQ0FBZixDQUFOO0FBQ0FwQyxRQUFNQSxJQUFJb0MsS0FBSixDQUFVLEdBQVYsRUFBZSxDQUFmLENBQU47O0FBRUEsTUFBSW9ILGFBQWExRCxNQUFNMkMsV0FBTixDQUFrQjNmLE9BQWxCLENBQTBCLEtBQUtvZSxZQUEvQixFQUE2QyxVQUFDblIsQ0FBRCxFQUFJdVQsQ0FBSixFQUFPdEgsQ0FBUCxFQUFhO0FBQ3pFM2EsU0FBS3NCLElBQUwsQ0FBVXFaLENBQVY7O0FBRUEsV0FBTyxXQUFQO0FBQ0QsR0FKZ0IsQ0FBakI7O0FBTUEsTUFBSXlILFFBQVEsSUFBSTdZLE1BQUosQ0FBVzRZLFVBQVgsQ0FBWjtBQUNBLE1BQUlFLGFBQWExSixJQUFJckMsS0FBSixDQUFVOEwsS0FBVixDQUFqQjs7QUFFQSxNQUFJLENBQUNDLFVBQUwsRUFBaUI7QUFDZixXQUFPLElBQVA7QUFDRDs7QUFFRDFKLE1BQUlsWCxPQUFKLENBQVkyZ0IsS0FBWixFQUFtQixVQUFDMVQsQ0FBRCxFQUFJaU0sQ0FBSixFQUFVO0FBQzNCQSxVQUFNZCxPQUFPN1osS0FBS29DLENBQUwsQ0FBUCxJQUFrQnVZLENBQXhCO0FBQ0F2WTtBQUNELEdBSEQ7O0FBS0EsU0FBTyxFQUFFeVgsY0FBRixFQUFQO0FBQ0QsQ0E3QkQ7O0FBK0JBOzs7Ozs7O0FBT0F6USxPQUFPa1osYUFBUCxHQUF1QixVQUFTN0QsS0FBVCxFQUFrQztBQUFBLE1BQWxCOEQsUUFBa0IsdUVBQVAsS0FBTzs7QUFDdkQsVUFBTzlELEtBQVAseUNBQU9BLEtBQVAsT0FBaUIsUUFBakIsS0FBOEJBLFFBQVEsS0FBSzJCLFFBQUwsQ0FBYzNCLEtBQWQsQ0FBdEM7O0FBRUEsTUFBSTlGLE1BQU0sS0FBSzBJLFlBQUwsQ0FBa0IsS0FBS2QsTUFBTCxHQUFjeEYsS0FBZCxDQUFvQixHQUFwQixFQUF5QixDQUF6QixJQUE4QixHQUFoRCxDQUFWO0FBQ0EsTUFBSW9ILGFBQWExRCxNQUFNMkMsV0FBTixDQUFrQjNmLE9BQWxCLENBQTBCLEtBQUtvZSxZQUEvQixFQUE2QyxXQUE3QyxDQUFqQjtBQUNBLE1BQUloZSxNQUFNMGdCLFdBQVVKLFVBQVYsR0FBc0IsS0FBS2QsWUFBTCxDQUFrQixNQUFNYyxVQUFOLEdBQW1CLEtBQXJDLENBQWhDO0FBQ0EsTUFBSUMsUUFBUSxJQUFJN1ksTUFBSixDQUFXMUgsR0FBWCxDQUFaOztBQUVBLFNBQU91Z0IsTUFBTXpVLElBQU4sQ0FBV2dMLEdBQVgsQ0FBUDtBQUNELENBVEQ7O0FBV0E7Ozs7OztBQU1BdlAsT0FBT29aLGFBQVAsR0FBdUIsVUFBUy9ELEtBQVQsRUFBZ0I7QUFDckMsU0FBT3JWLE9BQU9rWixhQUFQLENBQXFCN0QsS0FBckIsRUFBNEIsSUFBNUIsQ0FBUDtBQUNELENBRkQ7O0FBSUE7Ozs7O0FBS0FyVixPQUFPcVosUUFBUCxHQUFrQixVQUFVck4sS0FBVixFQUFpQjtBQUFBOztBQUNqQyxNQUFJaFQsSUFBSSxDQUFSOztBQUVBLE1BQUk2UyxPQUFPLFNBQVBBLElBQU8sQ0FBQy9VLEVBQUQsRUFBUTtBQUNqQixRQUFJdWYsUUFBUXZmLEdBQUcwRSxLQUFILENBQVMsT0FBS2tiLGVBQWQsQ0FBWjs7QUFFQSxRQUFJLENBQUNMLEtBQUwsRUFBWTtBQUNWLGFBQU8sSUFBUDtBQUNEOztBQUVELFFBQUlyZCxLQUFLZ1QsS0FBVCxFQUFnQjtBQUNkLGFBQU9xSyxLQUFQO0FBQ0Q7O0FBRURyZDs7QUFFQSxXQUFPNlMsS0FBS3dLLEtBQUwsQ0FBUDtBQUNELEdBZEQ7O0FBZ0JBLFNBQU94SyxLQUFLLGdCQUFNelEsSUFBWCxDQUFQO0FBQ0QsQ0FwQkQ7O0FBc0JBOzs7Ozs7O0FBT0E0RSxPQUFPc1osc0JBQVAsR0FBZ0MsVUFBVXpoQixHQUFWLEVBQWUwWCxHQUFmLEVBQW9CO0FBQ2xELE9BQUssSUFBSXZXLElBQUksQ0FBUixFQUFXQyxJQUFJcEIsSUFBSThCLE1BQXhCLEVBQWdDWCxJQUFJQyxDQUFwQyxFQUF1Q0QsR0FBdkMsRUFBNEM7QUFDMUMsUUFBSXFjLFFBQVF4ZCxJQUFJbUIsQ0FBSixDQUFaO0FBQ0EsUUFBSTZhLFVBQVUsS0FBS2lGLGlCQUFMLENBQXVCekQsS0FBdkIsRUFBOEI5RixHQUE5QixDQUFkOztBQUVBLFFBQUksQ0FBQ3NFLE9BQUwsRUFBYztBQUNaO0FBQ0Q7O0FBRUQsc0JBQVF3QixPQUFPQSxLQUFmLElBQXlCeEIsT0FBekI7QUFDRDs7QUFFRCxTQUFPLElBQVA7QUFDRCxDQWJEOztBQWVBOzs7Ozs7QUFNQTdULE9BQU91WixnQkFBUCxHQUEwQixVQUFVdk4sS0FBVixFQUFpQjtBQUN6QyxNQUFJb0ssU0FBUyxFQUFiOztBQUVBLE9BQUssSUFBSXBkLElBQUksQ0FBUixFQUFXQyxJQUFJLEtBQUttZCxNQUFMLENBQVl6YyxNQUFoQyxFQUF3Q1gsSUFBSUMsQ0FBNUMsRUFBK0NELEdBQS9DLEVBQW9EO0FBQ2xELFFBQUlxYyxRQUFRLEtBQUtlLE1BQUwsQ0FBWXBkLENBQVosQ0FBWjs7QUFFQSxRQUFJcWMsTUFBTXJKLEtBQU4sR0FBY0EsS0FBbEIsRUFBeUI7QUFDdkI7QUFDRCxLQUZELE1BR0ssSUFBSXFKLE1BQU1ySixLQUFOLEdBQWNBLEtBQWxCLEVBQXlCO0FBQzVCO0FBQ0Q7O0FBRURvSyxXQUFPbGUsSUFBUCxDQUFZbWQsS0FBWjtBQUNEOztBQUVELFNBQU9lLE1BQVA7QUFDRCxDQWpCRDs7QUFtQkE7OztBQUdBcFcsT0FBT2pCLFdBQVAsR0FBcUIsWUFBWTtBQUFBOztBQUMvQixNQUFHLEtBQUt5YSxlQUFSLEVBQXlCO0FBQ3ZCLFdBQU8sS0FBS0EsZUFBWjs7QUFFQTtBQUNEOztBQUVELE1BQUlqSyxNQUFNLEtBQUs0SCxNQUFMLEVBQVY7QUFDQSxNQUFJalIsT0FBTyxLQUFLb1EsUUFBTCxHQUFlLEVBQWYsR0FBbUJ4WixPQUFPMmEsUUFBUCxDQUFnQnZSLElBQWhCLENBQXFCN04sT0FBckIsQ0FBNkIsR0FBN0IsRUFBa0MsRUFBbEMsQ0FBOUI7QUFDQSxNQUFJb1osUUFBUSxLQUFLZ0gsV0FBTCxFQUFaO0FBQ0EsTUFBSWdCLGlCQUFpQnpaLE9BQU9vVixVQUFQLElBQXFCLElBQTFDO0FBQ0EsTUFBSUEsYUFBYXBWLE9BQU9vVixVQUFQLEdBQW9CLElBQUljLFVBQUosQ0FBZTNHLEdBQWYsRUFBb0JrQyxLQUFwQixFQUEyQnZMLElBQTNCLEVBQWlDdVQsY0FBakMsQ0FBckM7QUFDQSxNQUFJek4sUUFBUSxDQUFaOztBQUVBLE1BQUl5QixPQUFPLFNBQVBBLElBQU8sQ0FBQzJJLE1BQUQsRUFBU3NELEtBQVQsRUFBbUI7QUFDNUIsUUFBSSxDQUFDdEQsT0FBT3pjLE1BQVosRUFBb0I7QUFDbEIsYUFBTytmLFNBQVNBLE9BQWhCO0FBQ0Q7O0FBRUQsUUFBSTdGLFVBQVUsT0FBS3lGLHNCQUFMLENBQTRCbEQsTUFBNUIsRUFBb0M3RyxHQUFwQyxDQUFkOztBQUVBLFFBQUksQ0FBQ3NFLE9BQUwsRUFBYztBQUNaLGFBQU82RixTQUFTQSxPQUFoQjtBQUNEOztBQUVELFFBQUlyRSxRQUFReEIsUUFBUXdCLEtBQXBCO0FBQ0EsUUFBSTVFLFNBQVNvRCxRQUFRcEQsTUFBckI7QUFDQSxRQUFJNEYsUUFBUWhCLE1BQU15QixRQUFOLEdBQWdCLElBQWhCLEdBQXNCLE9BQUt1QyxRQUFMLENBQWNoRSxNQUFNckosS0FBcEIsQ0FBbEM7O0FBRUEsUUFBSSxDQUFDcUssS0FBRCxJQUFVLENBQUNoQixNQUFNeUIsUUFBckIsRUFBK0I7QUFDN0IsWUFBTSxJQUFJMWYsS0FBSiwyQ0FBbURpZSxNQUFNL2QsSUFBekQsT0FBTjtBQUNEOztBQUVEOGQsZUFBV3VFLE9BQVgsQ0FBbUIsRUFBRXRFLFlBQUYsRUFBUzVFLGNBQVQsRUFBaUJnQixZQUFqQixFQUF3QnZMLFVBQXhCLEVBQThCOU0sV0FBV2lkLEtBQXpDLEVBQWdEdUQsUUFBUSxJQUF4RCxFQUFuQjtBQUNBNU47O0FBRUEsUUFBSTZOLFdBQVdKLGtCQUFrQkEsZUFBZUksUUFBZixDQUF3QnhFLEtBQXhCLENBQWpDO0FBQ0EsUUFBSXlFLGNBQWMsSUFBbEI7O0FBRUEsUUFBR0QsUUFBSCxFQUFhO0FBQ1gsVUFBSXhELFNBQVFvRCxlQUFlSixRQUFmLENBQXdCaEUsS0FBeEIsQ0FBWjtBQUNBLFVBQUkwRSxPQUFPLEVBQUV0SixRQUFRNEYsT0FBTTVGLE1BQWhCLEVBQXdCZ0IsT0FBTzRFLE9BQU01RSxLQUFyQyxFQUE0Q3ZMLE1BQU1tUSxPQUFNblEsSUFBeEQsRUFBWDtBQUNBLFVBQUk0SCxVQUFVLEVBQUUyQyxjQUFGLEVBQVVnQixZQUFWLEVBQWlCdkwsVUFBakIsRUFBZDs7QUFFQTRULG9CQUFjLENBQUMsZ0JBQU1qTSxPQUFOLENBQWNrTSxJQUFkLEVBQW9Cak0sT0FBcEIsQ0FBZjtBQUNEOztBQUVELFFBQUlrTSxZQUFZLE9BQUt4RCxTQUFMLENBQWVVLE1BQWYsS0FBMEI1ZCxTQUExQixJQUF1QyxDQUFDd2dCLFdBQXhEO0FBQ0EsUUFBSUcsV0FBVyxPQUFLekQsU0FBTCxDQUFlVSxNQUFmLEtBQTBCLEtBQXpDOztBQUVBLFFBQUkyQyxhQUFhRyxhQUFhQyxRQUExQixDQUFKLEVBQXlDO0FBQ3ZDN0UsaUJBQVdFLElBQVgsQ0FBZ0JzRSxNQUFoQixHQUF5QixLQUF6Qjs7QUFFQSxhQUFPbk0sS0FBSzRILE1BQU05WixRQUFYLEVBQXFCbWUsS0FBckIsQ0FBUDtBQUNEOztBQUVEL2QsWUFBUXFHLE9BQVIsQ0FBZ0JxVCxNQUFNckksT0FBTixDQUFjb0ksVUFBZCxDQUFoQixFQUEyQ3ZaLElBQTNDLENBQWdELFVBQUNtSCxJQUFELEVBQVU7QUFDeEQsVUFBSW9TLFdBQVduYSxXQUFmLEVBQTRCO0FBQzFCLGVBQU95ZSxTQUFTQSxPQUFoQjtBQUNEOztBQUVEdEUsaUJBQVdFLElBQVgsQ0FBZ0J0UyxJQUFoQixHQUF1QkEsSUFBdkI7O0FBRUEsVUFBR3FTLE1BQU15QixRQUFULEVBQW1CO0FBQ2pCLGVBQU9ySixLQUFLNEgsTUFBTTlaLFFBQVgsRUFBcUJtZSxLQUFyQixDQUFQO0FBQ0Q7O0FBRURyRCxZQUFNNkQsYUFBTixDQUFvQjlFLFVBQXBCLEVBQWdDdlosSUFBaEMsQ0FBcUMsWUFBTTtBQUN6Q3VaLG1CQUFXRSxJQUFYLENBQWdCc0UsTUFBaEIsR0FBeUIsSUFBekI7O0FBRUFuTSxhQUFLNEgsTUFBTTlaLFFBQVgsRUFBcUJtZSxLQUFyQjtBQUNELE9BSkQ7QUFLRCxLQWhCRDtBQWlCRCxHQTNERDs7QUE2REFqTSxPQUFLLEtBQUs4TCxnQkFBTCxDQUFzQixDQUF0QixDQUFMLEVBQStCLFlBQU07QUFDbkMsUUFBRyxDQUFDbkUsV0FBV2UsTUFBWCxDQUFrQnhjLE1BQXRCLEVBQThCO0FBQzVCLFVBQUcsT0FBSzRjLFdBQVIsRUFBcUI7QUFDbkIsY0FBTSxJQUFJbmYsS0FBSixnQ0FBdUMsT0FBS3VnQixVQUE1QyxPQUFOO0FBQ0Q7O0FBRUQsVUFBRyxPQUFLQSxVQUFSLEVBQW9CO0FBQ2xCLGVBQUtyQixRQUFMLElBQWlCLE9BQUtxQixVQUFMLElBQW1CLE9BQUtSLE1BQUwsRUFBcEMsS0FBc0QsT0FBS3FDLGVBQUwsR0FBdUIsSUFBN0U7QUFDQSxlQUFLcEMsTUFBTCxDQUFZLE9BQUtPLFVBQWpCO0FBQ0EsZUFBS3BCLFdBQUw7O0FBRUEsZUFBTyxPQUFLeFgsV0FBTCxFQUFQO0FBQ0Q7O0FBRUQsVUFBRyxnQkFBTWxKLE9BQU4sQ0FBY0csS0FBakIsRUFBd0I7QUFDdEJnRyxnQkFBUUMsSUFBUjtBQUNEO0FBQ0Y7O0FBRUQsV0FBS3VhLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxXQUFLRCxXQUFMLEdBQW1CLENBQW5COztBQUVBLFFBQUdrRCxjQUFILEVBQW1CO0FBQ2pCLFdBQUksSUFBSXpnQixJQUFJZ1QsS0FBUixFQUFlL1MsSUFBSXdnQixlQUFldEQsTUFBZixDQUFzQnhjLE1BQTdDLEVBQXFEWCxJQUFJQyxDQUF6RCxFQUE0REQsR0FBNUQsRUFBaUU7QUFDL0QsWUFBSXFkLFFBQVFvRCxlQUFldEQsTUFBZixDQUFzQm5kLENBQXRCLENBQVo7QUFDQXFkLGNBQU1qZCxTQUFOLElBQW1CaWQsTUFBTWpkLFNBQU4sQ0FBZ0JxYyxLQUFoQixFQUFuQjtBQUNEO0FBQ0Y7O0FBRUQzWSxXQUFPK1ksYUFBUCxDQUFxQixJQUFJQyxXQUFKLENBQWdCLGNBQWhCLEVBQWdDO0FBQ25EQyxjQUFRWDtBQUQyQyxLQUFoQyxDQUFyQjtBQUdELEdBaENEO0FBaUNELENBNUdEOztBQThHQXBWLE9BQU9rVyxVQUFQLEdBQW9CQSxVQUFwQjs7a0JBRWVsVyxNOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZyQmY7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJaLEM7Ozs7OzZCQUtIO0FBQ2Qsc0JBQU1oRyxTQUFOLENBQWdCLEdBQWhCLEVBQXFCZ0csQ0FBckI7QUFDRDs7O0FBRUQsZUFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTnZCLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLGlJQUNWQSxJQURVOztBQUduQixVQUFLd1gsS0FBTCxHQUFhLElBQWI7QUFDQSxVQUFLNUUsTUFBTCxHQUFjLEVBQWQ7QUFDQSxVQUFLZ0IsS0FBTCxHQUFhLEVBQWI7QUFDQSxVQUFLdkwsSUFBTCxHQUFZLEVBQVo7QUFDQSxVQUFLclEsT0FBTCxHQUFlLEVBQWY7QUFDQSxVQUFLc2tCLEtBQUwsR0FBYSxNQUFLcmpCLEVBQUwsQ0FBUXdELFlBQVIsQ0FBcUIsS0FBckIsQ0FBYjtBQVJtQjtBQVNwQjs7OzsrQkFFVWlWLEcsRUFBSztBQUNkLFdBQUs2SCxNQUFMLENBQVk3SCxHQUFaO0FBQ0EsV0FBSzZLLFNBQUwsQ0FBZTdLLEdBQWY7QUFDRDs7O2lDQUVZOEYsSyxFQUFPO0FBQ2xCLFdBQUswQixRQUFMLENBQWMxQixLQUFkO0FBQ0EsV0FBSytFLFNBQUw7QUFDRDs7O2tDQUVhM0osTSxFQUFRO0FBQ3BCLFdBQUs0SixTQUFMLENBQWU1SixNQUFmO0FBQ0EsV0FBSzJKLFNBQUw7QUFDRDs7O2lDQUVZM0ksSyxFQUFPO0FBQ2xCLFdBQUs2SSxRQUFMLENBQWM3SSxLQUFkO0FBQ0EsV0FBSzJJLFNBQUw7QUFDRDs7O2dDQUVXM0ksSyxFQUFPO0FBQ2pCLFdBQUs4SSxPQUFMLENBQWE5SSxLQUFiO0FBQ0EsV0FBSzJJLFNBQUw7QUFDRDs7O21DQUVjdmtCLE8sRUFBUztBQUN0QixXQUFLeWtCLFFBQUwsQ0FBY3prQixPQUFkO0FBQ0Q7OztrQ0FFYTRELEcsRUFBSztBQUNqQixXQUFLK2dCLFNBQUwsQ0FBZS9nQixHQUFmO0FBQ0Q7Ozs4QkFFUztBQUFBOztBQUNSLFdBQUszQyxFQUFMLENBQVF3RyxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxVQUFDMEosQ0FBRCxFQUFPO0FBQ3ZDQSxVQUFFeVQsY0FBRjs7QUFFQSxZQUFHLE9BQUtOLEtBQVIsRUFBZTtBQUNiLDJCQUFPMUMsUUFBUCxDQUFnQixPQUFLN1YsS0FBTCxDQUFXMk4sR0FBM0IsRUFBZ0MsT0FBSzFaLE9BQXJDOztBQUVBO0FBQ0Q7O0FBRUQseUJBQU93ZixLQUFQLENBQWEsT0FBS0EsS0FBTCxDQUFXL2QsSUFBeEIsRUFBOEIsT0FBS21aLE1BQW5DLEVBQTJDLE9BQUtnQixLQUFoRCxFQUF1RCxPQUFLdkwsSUFBNUQsRUFBbUUsT0FBS3JRLE9BQXhFO0FBQ0QsT0FWRDtBQVdEOzs7K0JBRVU7QUFDVCxXQUFLK0wsS0FBTCxDQUFXN0ksY0FBWCxDQUEwQixPQUExQixLQUFzQyxLQUFLZ2UsUUFBTCxDQUFjLEtBQUtuVixLQUFMLENBQVd5VCxLQUF6QixDQUF0QztBQUNBLFdBQUt6VCxLQUFMLENBQVc3SSxjQUFYLENBQTBCLFFBQTFCLEtBQXVDLEtBQUtzaEIsU0FBTCxDQUFlLEtBQUt6WSxLQUFMLENBQVc2TyxNQUExQixDQUF2QztBQUNBLFdBQUs3TyxLQUFMLENBQVc3SSxjQUFYLENBQTBCLE9BQTFCLEtBQXNDLEtBQUt1aEIsUUFBTCxDQUFjLEtBQUsxWSxLQUFMLENBQVc2UCxLQUF6QixDQUF0QztBQUNBLFdBQUs3UCxLQUFMLENBQVc3SSxjQUFYLENBQTBCLE1BQTFCLEtBQXFDLEtBQUt3aEIsT0FBTCxDQUFhLEtBQUszWSxLQUFMLENBQVdzRSxJQUF4QixDQUFyQztBQUNBLFdBQUt0RSxLQUFMLENBQVc3SSxjQUFYLENBQTBCLFNBQTFCLEtBQXdDLEtBQUsyaEIsVUFBTCxDQUFnQixLQUFLOVksS0FBTCxDQUFXL0wsT0FBM0IsQ0FBeEM7QUFDQSxXQUFLK0wsS0FBTCxDQUFXN0ksY0FBWCxDQUEwQixRQUExQixLQUF1QyxLQUFLeWhCLFNBQUwsQ0FBZSxLQUFLNVksS0FBTCxDQUFXc1YsTUFBMUIsQ0FBdkM7QUFDQSxXQUFLdFYsS0FBTCxDQUFXN0ksY0FBWCxDQUEwQixLQUExQixLQUFvQyxLQUFLcWUsTUFBTCxDQUFZLEtBQUt4VixLQUFMLENBQVcyTixHQUF2QixDQUFwQztBQUNBLFdBQUs2SyxTQUFMLENBQWUsS0FBSzdLLEdBQXBCO0FBQ0Q7OzsyQkFFTUEsRyxFQUFLO0FBQ1YsV0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0Q7Ozs2QkFFUWpZLEksRUFBTTtBQUNiLFdBQUsrZCxLQUFMLEdBQWEsS0FBSzJCLFFBQUwsQ0FBYzFmLElBQWQsQ0FBYjtBQUNBLFdBQUtKLEtBQUwsQ0FBV2dpQixhQUFYLEdBQTJCLGlCQUFPQSxhQUFQLENBQXFCLEtBQUs3RCxLQUExQixDQUEzQjtBQUNBLFdBQUtuZSxLQUFMLENBQVdraUIsYUFBWCxHQUEyQixpQkFBT0EsYUFBUCxDQUFxQixLQUFLL0QsS0FBMUIsQ0FBM0I7QUFDRDs7OzhCQUVTNUUsTSxFQUFRO0FBQ2hCLFVBQUcsUUFBT0EsTUFBUCx5Q0FBT0EsTUFBUCxNQUFpQixRQUFqQixJQUE2QixDQUFDQSxNQUFqQyxFQUF5QztBQUN2QyxjQUFNLElBQUlyWixLQUFKLHlDQUFOO0FBQ0Q7O0FBRUQsV0FBS3FaLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7NkJBRVFnQixLLEVBQU87QUFDZCxVQUFHLFFBQU9BLEtBQVAseUNBQU9BLEtBQVAsTUFBZ0IsUUFBaEIsSUFBNEIsQ0FBQ0EsS0FBaEMsRUFBdUM7QUFDckMsY0FBTSxJQUFJcmEsS0FBSix3Q0FBTjtBQUNEOztBQUVELFdBQUtxYSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzRCQUVPdkwsSSxFQUFNO0FBQ1osVUFBRyxPQUFPQSxJQUFQLElBQWUsUUFBbEIsRUFBNEI7QUFDMUIsY0FBTSxJQUFJOU8sS0FBSixzQ0FBTjtBQUNEOztBQUVELFdBQUs4TyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OytCQUVVclEsTyxFQUFTO0FBQ2xCLFVBQUcsUUFBT0EsT0FBUCx5Q0FBT0EsT0FBUCxNQUFrQixRQUFsQixJQUE4QixDQUFDQSxPQUFsQyxFQUEyQztBQUN6QyxjQUFNLElBQUl1QixLQUFKLDBDQUFOO0FBQ0Q7O0FBRUQsV0FBS3ZCLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7OEJBRVM0RCxHLEVBQUs7QUFDYixXQUFLNUQsT0FBTCxDQUFhcWhCLE1BQWIsR0FBc0J6ZCxHQUF0QjtBQUNEOzs7NkJBRVFuQyxJLEVBQU07QUFDYixVQUFJK2QsUUFBUSxpQkFBTzJCLFFBQVAsQ0FBZ0IxZixJQUFoQixDQUFaOztBQUVBLFVBQUcsQ0FBQytkLEtBQUosRUFBVztBQUNULGNBQU0sSUFBSWplLEtBQUosd0NBQStDRSxJQUEvQyxPQUFOO0FBQ0Q7O0FBRUQsYUFBTytkLEtBQVA7QUFDRDs7OzhCQUVTOUYsRyxFQUFLO0FBQ2IsVUFBR0EsR0FBSCxFQUFRO0FBQ04sYUFBSzNOLEtBQUwsQ0FBVytZLElBQVgsR0FBa0JwTCxHQUFsQjtBQUNELE9BRkQsTUFHSztBQUNILGFBQUszTixLQUFMLENBQVcrWSxJQUFYLEdBQWtCLGlCQUFPMUQsY0FBUCxDQUFzQixLQUFLNUIsS0FBM0IsRUFBa0MsS0FBSzVFLE1BQXZDLEVBQStDLEtBQUtnQixLQUFwRCxFQUEyRCxLQUFLdkwsSUFBaEUsQ0FBbEI7QUFDRDtBQUNGOzs7Ozs7QUE3SWtCOUcsQyxDQUNadEUsTyxHQUFVLHVDO0FBREVzRSxDLENBRVpvRSxpQixHQUFvQixJO0FBRlJwRSxDLENBR1owRSxpQixHQUFvQixDQUFDLFFBQUQsQztrQkFIUjFFLEM7QUE4SXBCLEM7Ozs7Ozs7Ozs7Ozs7OztBQ2xKRDs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJDLE87Ozs7OzZCQUNIO0FBQ2Qsc0JBQU1qRyxTQUFOLENBQWdCLFNBQWhCLEVBQTJCaUcsT0FBM0I7QUFDQSxzQkFBTWxELEtBQU4sQ0FBWSxtQkFBWixFQUFpQyxTQUFqQztBQUNEOzs7QUFFRCxxQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTjBCLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLDZJQUNWQSxJQURVOztBQUduQixRQUFHLE1BQUsvRyxFQUFMLENBQVFxTixZQUFSLENBQXFCLFVBQXJCLENBQUgsRUFBcUM7QUFDbkMsWUFBS3JOLEVBQUwsQ0FBUXNOLFlBQVIsQ0FBcUIsaUJBQXJCLEVBQXdDLE1BQUt0TixFQUFMLENBQVF3RCxZQUFSLENBQXFCLFVBQXJCLENBQXhDO0FBQ0EsWUFBS3hELEVBQUwsQ0FBUXVOLGVBQVIsQ0FBd0IsVUFBeEI7QUFDRDs7QUFFRCxRQUFHdVcsaUJBQWlCLE1BQUs5akIsRUFBdEIsRUFBMEIrakIsT0FBMUIsSUFBcUMsUUFBeEMsRUFBa0Q7QUFDaEQsWUFBSy9qQixFQUFMLENBQVErVixLQUFSLENBQWNnTyxPQUFkLEdBQXdCLE9BQXhCO0FBQ0Q7O0FBRUQsVUFBS3RJLFFBQUwsR0FBZ0IsV0FBaEI7QUFabUI7QUFhcEI7Ozs7c0NBRWlCO0FBQ2hCLFVBQUl1SSxRQUFRbGMsU0FBU21jLFdBQVQsRUFBWjtBQUNBLFVBQUlDLFlBQVlsZSxPQUFPbWUsWUFBUCxFQUFoQjs7QUFFQUgsWUFBTUksa0JBQU4sQ0FBeUIsS0FBS3BrQixFQUE5QjtBQUNBZ2tCLFlBQU1LLFFBQU4sQ0FBZSxLQUFmO0FBQ0FILGdCQUFVSSxlQUFWO0FBQ0FKLGdCQUFVSyxRQUFWLENBQW1CUCxLQUFuQjtBQUNBLFdBQUtoa0IsRUFBTCxDQUFRNGIsS0FBUjtBQUNEOzs7Ozs7a0JBOUJrQnJULE87QUErQnBCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0Q7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdxQkUsRTs7Ozs7NkJBS0g7QUFDZCxzQkFBTW5HLFNBQU4sQ0FBZ0IsSUFBaEIsRUFBc0JtRyxFQUF0QjtBQUNBLHNCQUFNbkcsU0FBTixDQUFnQixTQUFoQixFQUEyQmtpQixNQUEzQjtBQUNBLHNCQUFNbGlCLFNBQU4sQ0FBZ0IsTUFBaEIsRUFBd0JtaUIsSUFBeEI7QUFDRDs7O0FBRUQsZ0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU4xZCxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSxtSUFDVkEsSUFEVTs7QUFHbkIsVUFBS3NRLElBQUwsR0FBWSxNQUFLclgsRUFBTCxDQUFRd0IsU0FBcEI7QUFDQSxVQUFLeEIsRUFBTCxDQUFRd0IsU0FBUixHQUFvQixFQUFwQjtBQUNBLFVBQUsrYyxLQUFMLEdBQWEsS0FBYjtBQUNBLFVBQUttRyxNQUFMLEdBQWMsS0FBZDtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxVQUFLQyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsVUFBS2IsT0FBTCxHQUFlRCxpQkFBaUIsTUFBSzlqQixFQUF0QixFQUEwQitqQixPQUF6QztBQVRtQjtBQVVwQjs7Ozs4QkFFU25oQixLLEVBQU87QUFDZixXQUFLMmIsS0FBTCxHQUFhLENBQUMsQ0FBQzNiLEtBQWY7QUFDQSxXQUFLcWQsUUFBTDtBQUNEOzs7b0NBRWVyZCxLLEVBQU87QUFDckIsV0FBS2lpQixhQUFMLENBQW1CamlCLEtBQW5CO0FBQ0Q7OzsrQkFFVTtBQUNULFdBQUtrSSxLQUFMLENBQVc3SSxjQUFYLENBQTBCLFVBQTFCLEtBQXlDLEtBQUs0aUIsYUFBTCxDQUFtQixLQUFLL1osS0FBTCxDQUFXNlosUUFBOUIsQ0FBekM7QUFDQSxXQUFLcEcsS0FBTCxHQUFhLENBQUMsQ0FBQyxLQUFLelQsS0FBTCxDQUFXZ2EsRUFBMUI7QUFDQSxhQUFPLEtBQUs3RSxRQUFMLEVBQVA7QUFDRDs7O2dDQUVXeUUsTSxFQUFRO0FBQ2xCLFdBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7a0NBRWFDLFEsRUFBVTtBQUN0QixXQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEOzs7K0JBRVU7QUFDVCxVQUFJN2lCLE1BQU0sS0FBS2lqQixXQUFMLEVBQVY7QUFDQSxVQUFJcE8sT0FBTyxLQUFLM1csRUFBTCxDQUFRZ2xCLGtCQUFuQjtBQUNBLFVBQUlDLGVBQUo7O0FBRUEsVUFBRyxDQUFDdE8sSUFBRCxJQUFTLENBQUNBLEtBQUszUyxPQUFMLENBQWEsY0FBYixDQUFiLEVBQTJDO0FBQ3pDO0FBQ0Q7O0FBRUQyUyxXQUFLeFYsT0FBTCxDQUFhK2pCLFdBQWIsQ0FBeUIsS0FBS1IsTUFBTCxJQUFlLEtBQUtuRyxLQUE3QztBQUNBNUgsV0FBS3hWLE9BQUwsQ0FBYTBqQixhQUFiLENBQTJCLEtBQUtGLFFBQWhDO0FBQ0FNLGVBQVN0TyxLQUFLeFYsT0FBTCxDQUFhOGUsUUFBYixFQUFUOztBQUVBLGFBQU9wYixRQUFRcUcsT0FBUixDQUFnQnBKLEdBQWhCLEVBQXFCaUQsSUFBckIsQ0FBMEIsWUFBTTtBQUNyQyxlQUFPa2dCLE1BQVA7QUFDRCxPQUZNLENBQVA7QUFHRDs7O2tDQUVhO0FBQ1osVUFBSW5qQixZQUFKOztBQUVBLFVBQUcsS0FBS3ljLEtBQUwsSUFBYyxDQUFDLEtBQUttRyxNQUF2QixFQUErQjtBQUM3QixZQUFHLEtBQUtDLFFBQUwsSUFBaUIsQ0FBQyxLQUFLQyxVQUExQixFQUFzQztBQUNwQzlpQixnQkFBTSxLQUFLdUMsT0FBTCxFQUFOO0FBQ0Q7O0FBRUQsYUFBS3JFLEVBQUwsQ0FBUStWLEtBQVIsQ0FBY2dPLE9BQWQsR0FBd0IsS0FBS0EsT0FBN0I7QUFDRCxPQU5ELE1BT0s7QUFDSCxZQUFHLEtBQUtZLFFBQVIsRUFBa0I7QUFDaEIsZUFBS2hQLE9BQUw7QUFDRCxTQUZELE1BR0ssSUFBRyxDQUFDLEtBQUtpUCxVQUFULEVBQXFCO0FBQ3hCOWlCLGdCQUFNLEtBQUt1QyxPQUFMLEVBQU47QUFDRDs7QUFFRCxhQUFLckUsRUFBTCxDQUFRK1YsS0FBUixDQUFjZ08sT0FBZCxHQUF3QixNQUF4QjtBQUNEOztBQUVELGFBQU9qaUIsR0FBUDtBQUNEOzs7OEJBRVM7QUFDUixVQUFJQSxZQUFKOztBQUVBLFdBQUs5QixFQUFMLENBQVF3QixTQUFSLEdBQW9CLEtBQUs2VixJQUF6QjtBQUNBdlYsWUFBTSxnQkFBTXVDLE9BQU4sQ0FBYyxLQUFLckUsRUFBbkIsRUFBdUIsRUFBRWtELFdBQVcsSUFBYixFQUF2QixDQUFOO0FBQ0EsV0FBSzBoQixVQUFMLEdBQWtCLElBQWxCOztBQUVBLGFBQU85aUIsR0FBUDtBQUNEOzs7Ozs7QUFoR2tCMkcsRSxDQUNabUYsVyxHQUFjLEk7QUFERm5GLEUsQ0FFWnpFLE8sR0FBVSxNO0FBRkV5RSxFLENBR1p1RSxpQixHQUFvQixDQUFDLFVBQUQsQztrQkFIUnZFLEU7QUFpR3BCOztBQUVEOzs7O0lBR2ErYixNLFdBQUFBLE07OztBQUNYLG9CQUFxQjtBQUFBOztBQUFBOztBQUFBLHVDQUFOemQsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsOElBQ1ZBLElBRFU7O0FBR25CLFdBQUsyZCxNQUFMLEdBQWMsSUFBZDtBQUhtQjtBQUlwQjs7O0VBTHlCamMsRTs7QUFRNUI7Ozs7O0lBR2FnYyxJLFdBQUFBLEk7OztBQUdYLGtCQUFxQjtBQUFBOztBQUFBOztBQUFBLHVDQUFOMWQsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsMElBQ1ZBLElBRFU7O0FBR25CLFdBQUsvRyxFQUFMLENBQVFzTixZQUFSLENBQXFCLElBQXJCLEVBQTJCLE1BQTNCO0FBSG1CO0FBSXBCOzs7RUFQdUJrWCxNOztBQUFiQyxJLENBQ0p6Z0IsTyxHQUFVLEU7OztBQVNuQnlFLEdBQUcrYixNQUFILEdBQVlBLE1BQVo7QUFDQS9iLEdBQUdnYyxJQUFILEdBQVVBLElBQVYsQzs7Ozs7Ozs7Ozs7Ozs7O0FDbElBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCL2IsTzs7Ozs7NkJBS0g7QUFDZCxzQkFBTXBHLFNBQU4sQ0FBZ0IsU0FBaEIsRUFBMkJvRyxPQUEzQjtBQUNEOzs7QUFFRCxxQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTjNCLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLDZJQUNWQSxJQURVOztBQUduQixVQUFLc1EsSUFBTCxHQUFZLE1BQUtyWCxFQUFMLENBQVF3QixTQUFwQjtBQUNBLFVBQUt4QixFQUFMLENBQVF3QixTQUFSLEdBQW9CLEVBQXBCO0FBQ0EsVUFBSzJqQixVQUFMLEdBQWtCLElBQWxCO0FBTG1CO0FBTXBCOzs7OytCQUVVMU0sRyxFQUFLO0FBQ2QsV0FBSzJNLFdBQUwsQ0FBaUIzTSxHQUFqQjtBQUNEOzs7K0JBRVU7QUFDVCxhQUFPLEtBQUsyTSxXQUFMLENBQWlCLEtBQUt0YSxLQUFMLENBQVcyTixHQUE1QixDQUFQO0FBQ0Q7OztnQ0FFV0EsRyxFQUFLO0FBQUE7O0FBQ2YsV0FBSzBNLFVBQUwsSUFBbUIsS0FBS0EsVUFBTCxDQUFnQkUsS0FBaEIsRUFBbkI7O0FBRUEsYUFBTyxrQkFBUXJaLEdBQVIsQ0FBWXlNLEdBQVosRUFBaUI7QUFDdEJHLGlCQUFTLGlCQUFDRixHQUFELEVBQVM7QUFDaEIsaUJBQUt5TSxVQUFMLEdBQWtCek0sR0FBbEI7QUFDRDtBQUhxQixPQUFqQixFQUlKM1QsSUFKSSxDQUlDLFVBQUNqRCxHQUFELEVBQVM7QUFDZixlQUFLcWpCLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxlQUFLeEcsS0FBTDtBQUNBLGVBQUszZSxFQUFMLENBQVF3QixTQUFSLEdBQW9CLE9BQUs2VixJQUF6QjtBQUNBLHdCQUFNaFcsV0FBTixDQUFrQixPQUFLckIsRUFBdkIsRUFBMkI4QixJQUFJb0ssSUFBL0I7O0FBRUEsZUFBTyxnQkFBTTdILE9BQU4sQ0FBYyxPQUFLckUsRUFBbkIsRUFBdUIsRUFBRWtELFdBQVcsSUFBYixFQUF2QixFQUE0QzZCLElBQTVDLENBQWlELFlBQU07QUFDNUQsaUJBQUsrRixLQUFMLENBQVd3YSxNQUFYLENBQWtCelosT0FBbEI7QUFDRCxTQUZNLENBQVA7QUFHRCxPQWJNLEVBYUowWixLQWJJLENBYUUsVUFBQ3ZXLEdBQUQsRUFBUztBQUNoQixlQUFLbEUsS0FBTCxDQUFXMGEsT0FBWCxDQUFtQjNaLE9BQW5CLENBQTJCbUQsR0FBM0I7QUFDRCxPQWZNLENBQVA7QUFnQkQ7Ozs7OztBQTVDa0J0RyxPLENBQ1prRixXLEdBQWMsSTtBQURGbEYsTyxDQUVaMUUsTyxHQUFVLE87QUFGRTBFLE8sQ0FHWmlFLE0sR0FBUyxDQUFDLE1BQUQsRUFBUyxPQUFULEM7a0JBSEdqRSxPO0FBNkNwQixDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pERDs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJDLEs7Ozs7OzZCQUlIO0FBQ2Qsc0JBQU1yRyxTQUFOLENBQWdCLE9BQWhCLEVBQXlCcUcsS0FBekI7QUFDRDs7O0FBRUQsbUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU41QixJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSx5SUFDVkEsSUFEVTs7QUFHbkIsVUFBSzBlLFVBQUwsR0FBa0IsTUFBS3psQixFQUFMLENBQVFtZixJQUFSLElBQWdCLFVBQWxDO0FBQ0EsVUFBS3VHLE9BQUwsR0FBZSxNQUFLMWxCLEVBQUwsQ0FBUW1mLElBQVIsSUFBZ0IsT0FBL0I7QUFKbUI7QUFLcEI7Ozs7bUNBRWN2YyxLLEVBQU87QUFDcEIsV0FBSytpQixVQUFMLENBQWdCL2lCLEtBQWhCO0FBQ0Q7Ozs4QkFFUztBQUFBOztBQUNSLE9BQUMsS0FBSzhpQixPQUFMLElBQWdCLEtBQUtELFVBQXRCLEtBQXFDLEtBQUt6bEIsRUFBTCxDQUFRd0csZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsWUFBTTtBQUMzRSxlQUFLbWYsVUFBTCxDQUFnQixPQUFLM2xCLEVBQUwsQ0FBUTRsQixPQUF4QixFQUFpQyxLQUFqQztBQUNELE9BRm9DLENBQXJDO0FBR0Q7OzsrQkFFVTtBQUNULE9BQUMsS0FBS0gsVUFBTCxJQUFtQixLQUFLQyxPQUF6QixLQUFxQyxLQUFLQyxVQUFMLENBQWdCLEtBQUs3YSxLQUFMLENBQVc4YSxPQUEzQixDQUFyQztBQUNEOzs7K0JBRVVoakIsSyxFQUF1QjtBQUFBLFVBQWhCaUosT0FBZ0IsdUVBQU4sSUFBTTs7QUFDaENqSixjQUFRLENBQUMsQ0FBQ0EsS0FBVjs7QUFFQSxVQUFHLEtBQUtpakIsV0FBTCxLQUFxQmpqQixLQUF4QixFQUErQjtBQUM3QjtBQUNEOztBQUVELFdBQUs1QyxFQUFMLENBQVE0bEIsT0FBUixHQUFrQixLQUFLQyxXQUFMLEdBQW1CampCLEtBQXJDO0FBQ0FpSixpQkFBVyxLQUFLZixLQUFMLENBQVdnYixRQUFYLENBQW9CQyxRQUFwQixDQUE2QkMsS0FBN0IsRUFBb0MsRUFBRXBILFNBQVMsSUFBWCxFQUFwQyxDQUFYO0FBQ0EsV0FBSzhHLE9BQUwsSUFBZ0IsS0FBS08sV0FBTCxFQUFoQjtBQUNEOzs7K0JBRVU7QUFDVCxrR0FBZW5nQixLQUFmLENBQXFCLElBQXJCLEVBQTJCZ0IsU0FBM0I7QUFDQSxXQUFLNGUsT0FBTCxJQUFnQixLQUFLNWEsS0FBTCxDQUFXZ2IsUUFBWCxDQUFvQkMsUUFBcEIsQ0FBNkJDLEtBQTdCLEVBQW9DLEVBQUVwSCxTQUFTLElBQVgsRUFBcEMsQ0FBaEI7QUFDRDs7O2tDQUVhO0FBQ1osVUFBSXBlLE9BQU8sS0FBS1IsRUFBTCxDQUFRd0QsWUFBUixDQUFxQixNQUFyQixDQUFYO0FBQ0EsVUFBSVMseUNBQXNDekQsSUFBdEMseUJBQTRELEtBQUtKLEtBQUwsQ0FBV0MsTUFBdkUsU0FBSjtBQUNBLFVBQUlvRSxXQUFXLGdCQUFNSCxJQUFOLENBQVdHLFFBQVgsQ0FBb0JSLFFBQXBCLENBQWY7O0FBRUEsV0FBSSxJQUFJL0IsSUFBSSxDQUFSLEVBQVdDLElBQUlzQyxTQUFTNUIsTUFBNUIsRUFBb0NYLElBQUlDLENBQXhDLEVBQTJDRCxHQUEzQyxFQUFnRDtBQUM5QyxZQUFJZ2tCLFFBQVF6aEIsU0FBU3ZDLENBQVQsQ0FBWjs7QUFFQWdrQixjQUFNUCxVQUFOLENBQWlCTyxNQUFNbG1CLEVBQU4sQ0FBUzRsQixPQUExQjtBQUNEO0FBQ0Y7Ozs7OztBQXhEa0JqZCxLLENBQ1pxRSxpQixHQUFvQixDQUFDLFNBQUQsQztBQURSckUsSyxDQUVaZ0UsTSxHQUFTLENBQUMsUUFBRCxDO2tCQUZHaEUsSztBQXlEcEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUREOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHcUJDLEs7Ozs7OzZCQUlIO0FBQ2Qsc0JBQU10RyxTQUFOLENBQWdCLE9BQWhCLEVBQXlCc0csS0FBekI7QUFDQSxzQkFBTXRHLFNBQU4sQ0FBZ0IsY0FBaEIsRUFBZ0M2akIsV0FBaEM7QUFDRDs7O0FBRUQsbUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5wZixJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSx5SUFDVkEsSUFEVTs7QUFHbkIsVUFBS3FmLFFBQUwsR0FBZ0IsTUFBS3BtQixFQUFMLENBQVFxTixZQUFSLENBQXFCLElBQXJCLENBQWhCO0FBSG1CO0FBSXBCOzs7OzhCQUVTekssSyxFQUFPO0FBQ2YsbUdBQWdCa0QsS0FBaEIsQ0FBc0IsSUFBdEIsRUFBNEJnQixTQUE1QjtBQUNBLFdBQUt1ZixRQUFMLENBQWMsS0FBS3ZiLEtBQUwsQ0FBV3RLLElBQXpCO0FBQ0Q7OztnQ0FFV0EsSSxFQUFNO0FBQ2hCLFdBQUs2bEIsUUFBTCxDQUFjN2xCLElBQWQ7QUFDRDs7O2lDQUVZb0MsSyxFQUFPO0FBQ2xCLFdBQUs4WSxRQUFMLENBQWM5WSxLQUFkO0FBQ0Q7Ozs4QkFFUztBQUFBOztBQUNSLFdBQUt3akIsUUFBTCxJQUFpQiwyRkFBY3RnQixLQUFkLENBQW9CLElBQXBCLEVBQTBCZ0IsU0FBMUIsQ0FBakI7O0FBRUEsV0FBSzlHLEVBQUwsQ0FBUXdHLGdCQUFSLENBQXlCLFFBQXpCLEVBQW1DLFlBQU07QUFDdkNQLG1CQUFXLFlBQU07QUFDZixjQUFJckQsUUFBUSxPQUFLMGpCLGFBQUwsRUFBWjs7QUFFQSxjQUFHMWpCLFVBQVUsT0FBSzJqQixTQUFsQixFQUE2QjtBQUMzQjtBQUNEOztBQUVELGlCQUFLQSxTQUFMLEdBQWlCM2pCLEtBQWpCO0FBQ0EsaUJBQUtrSSxLQUFMLENBQVcwYixPQUFYLENBQW1CM2EsT0FBbkIsQ0FBMkJqSixLQUEzQixFQUFrQyxFQUFFZ2MsU0FBUyxJQUFYLEVBQWxDO0FBQ0QsU0FURDtBQVVELE9BWEQ7QUFZRDs7OytCQUVVO0FBQ1QsV0FBS3lILFFBQUwsQ0FBYyxLQUFLdmIsS0FBTCxDQUFXdEssSUFBekI7QUFDQSxXQUFLc0ssS0FBTCxDQUFXN0ksY0FBWCxDQUEwQixPQUExQixLQUFzQyxLQUFLeVosUUFBTCxDQUFjLEtBQUs1USxLQUFMLENBQVdsSSxLQUF6QixDQUF0QztBQUNEOzs7NkJBRVFwQyxJLEVBQU07QUFDYixVQUFJaUUsV0FBVyxLQUFLQSxRQUFMLENBQWMsbUJBQWQsQ0FBZjs7QUFFQSxXQUFJLElBQUl2QyxJQUFJLENBQVIsRUFBV0MsSUFBSXNDLFNBQVM1QixNQUE1QixFQUFvQ1gsSUFBSUMsQ0FBeEMsRUFBMkNELEdBQTNDLEVBQWdEO0FBQzlDdUMsaUJBQVN2QyxDQUFULEVBQVlsQyxFQUFaLENBQWVzTixZQUFmLENBQTRCLE1BQTVCLEVBQW9DOU0sSUFBcEM7QUFDRDtBQUNGOzs7NkJBRVFvQyxLLEVBQU87QUFDZCxVQUFHQSxVQUFVLEtBQUsyakIsU0FBbEIsRUFBNkI7QUFDM0I7QUFDRDs7QUFFRCxVQUFJdEQsT0FBTyxLQUFLc0QsU0FBaEI7QUFDQSxVQUFJOWhCLFdBQVcsS0FBS0EsUUFBTCxDQUFjLG1CQUFkLENBQWY7QUFDQSxVQUFJZ2lCLFNBQVMsS0FBYjs7QUFFQSxXQUFLRixTQUFMLEdBQWlCM2pCLEtBQWpCOztBQUVBLFdBQUksSUFBSVYsSUFBSSxDQUFSLEVBQVdDLElBQUlzQyxTQUFTNUIsTUFBNUIsRUFBb0NYLElBQUlDLENBQXhDLEVBQTJDRCxHQUEzQyxFQUFnRDtBQUM5QyxZQUFJZ2tCLFFBQVF6aEIsU0FBU3ZDLENBQVQsQ0FBWjtBQUNBLFlBQUl3a0IsYUFBYVIsTUFBTWxtQixFQUFOLENBQVM0QyxLQUFULEtBQW1CQSxLQUFwQzs7QUFFQThqQix1QkFBZUQsU0FBUyxJQUF4QjtBQUNBUCxjQUFNUCxVQUFOLENBQWlCZSxVQUFqQjtBQUNEOztBQUVELFVBQUcsQ0FBQ0QsTUFBSixFQUFZO0FBQ1YsWUFBRzdqQixVQUFVLElBQWIsRUFBbUI7QUFDakIsY0FBR3FnQixTQUFTemdCLFNBQVosRUFBdUI7QUFDckI7QUFDRDtBQUNGLFNBSkQsTUFLSztBQUNILGVBQUsrakIsU0FBTCxHQUFpQi9qQixTQUFqQjtBQUNBSSxrQkFBUSxJQUFSO0FBQ0Q7QUFDRjs7QUFFRCxXQUFLa0ksS0FBTCxDQUFXMGIsT0FBWCxDQUFtQjNhLE9BQW5CLENBQTJCakosS0FBM0IsRUFBa0MsRUFBRWdjLFNBQVMsSUFBWCxFQUFsQztBQUNEOzs7b0NBRWU7QUFDZCxVQUFJbmEsV0FBVyxLQUFLQSxRQUFMLENBQWMsbUJBQWQsQ0FBZjs7QUFFQSxXQUFJLElBQUl2QyxJQUFJLENBQVIsRUFBV0MsSUFBSXNDLFNBQVM1QixNQUE1QixFQUFvQ1gsSUFBSUMsQ0FBeEMsRUFBMkNELEdBQTNDLEVBQWdEO0FBQzlDLFlBQUlna0IsUUFBUXpoQixTQUFTdkMsQ0FBVCxDQUFaOztBQUVBLFlBQUdna0IsTUFBTWxtQixFQUFOLENBQVM0bEIsT0FBWixFQUFxQjtBQUNuQixpQkFBT00sTUFBTWxtQixFQUFOLENBQVM0QyxLQUFoQjtBQUNEO0FBQ0Y7O0FBRUQsYUFBTyxJQUFQO0FBQ0Q7Ozs7OztBQXhHa0JnRyxLLENBQ1o1RSxPLEdBQVUsUTtBQURFNEUsSyxDQUVaK0QsTSxHQUFTLENBQUMsT0FBRCxDO2tCQUZHL0QsSztBQXlHcEI7O0FBRUQ7Ozs7SUFHYXVkLFcsV0FBQUEsVzs7O0FBR1gseUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsdUNBQU5wZixJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSxrSkFDVkEsSUFEVTtBQUVwQjs7OztpQ0FFWW5FLEssRUFBTztBQUNsQixXQUFLK2pCLGFBQUwsQ0FBbUIvakIsS0FBbkI7QUFDRDs7OytCQUVVO0FBQ1QsV0FBSytqQixhQUFMLENBQW1CLEtBQUs3YixLQUFMLENBQVdsSSxLQUE5QjtBQUNEOzs7a0NBRWFBLEssRUFBTztBQUNuQixXQUFLeEMsS0FBTCxDQUFXd0MsS0FBWCxHQUFtQkEsS0FBbkI7QUFDRDs7Ozs7O0FBakJVdWpCLFcsQ0FDSjdrQixROzs7QUFtQlRzSCxNQUFNdWQsV0FBTixHQUFvQkEsV0FBcEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJyZCxNOzs7Ozs2QkFJSDtBQUNkLHNCQUFNeEcsU0FBTixDQUFnQixRQUFoQixFQUEwQndHLE1BQTFCO0FBQ0Esc0JBQU14RyxTQUFOLENBQWdCLFFBQWhCLEVBQTBCc2tCLE1BQTFCO0FBQ0Q7OztBQUVELG9CQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFON2YsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsMklBQ1ZBLElBRFU7O0FBR25CLFVBQUs4ZixlQUFMLEdBQXVCLFFBQXZCO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixLQUFsQjtBQUptQjtBQUtwQjs7OztvQ0FFZWxrQixLLEVBQU87QUFDckIsV0FBS21rQixXQUFMLENBQWlCbmtCLEtBQWpCO0FBQ0Q7OzttQ0FFY0EsSyxFQUFPO0FBQ3BCLFdBQUtva0IsVUFBTCxDQUFnQnBrQixLQUFoQjtBQUNEOzs7OEJBRVNBLEssRUFBTztBQUNmLHFHQUFnQmtELEtBQWhCLENBQXNCLElBQXRCLEVBQTRCZ0IsU0FBNUI7QUFDQSxXQUFLbWdCLFVBQUw7QUFDRDs7OzhCQUVTO0FBQUE7O0FBQ1IsbUdBQWNuaEIsS0FBZCxDQUFvQixJQUFwQixFQUEwQmdCLFNBQTFCOztBQUVBLFdBQUs5RyxFQUFMLENBQVF3RyxnQkFBUixDQUF5QixRQUF6QixFQUFtQyxZQUFNO0FBQ3ZDLGVBQUt4RyxFQUFMLENBQVErYyxPQUFSLEdBQWtCLE9BQUttSyxVQUFMLEVBQWxCO0FBQ0QsT0FGRDtBQUdEOzs7K0JBRVU7QUFDVCxvR0FBZXBoQixLQUFmLENBQXFCLElBQXJCLEVBQTJCZ0IsU0FBM0I7QUFDQSxXQUFLZ0UsS0FBTCxDQUFXN0ksY0FBWCxDQUEwQixVQUExQixLQUF5QyxLQUFLOGtCLFdBQUwsQ0FBaUIsS0FBS2pjLEtBQUwsQ0FBV3FjLFFBQTVCLENBQXpDO0FBQ0EsV0FBS3JjLEtBQUwsQ0FBVzdJLGNBQVgsQ0FBMEIsU0FBMUIsS0FBd0MsS0FBSytrQixVQUFMLENBQWdCLEtBQUtsYyxLQUFMLENBQVdpUyxPQUEzQixDQUF4QztBQUNBLFdBQUtrSyxVQUFMO0FBQ0Q7OztnQ0FFV3JrQixLLEVBQU87QUFDakIsV0FBS2trQixVQUFMLEdBQWtCbGtCLEtBQWxCO0FBQ0EsV0FBS3drQixXQUFMLENBQWlCLEtBQUtDLFdBQUwsQ0FBaUIsZ0JBQU1sWixJQUFOLENBQVcsS0FBS25PLEVBQUwsQ0FBUStjLE9BQW5CLENBQWpCLENBQWpCO0FBQ0Q7OzsrQkFFVW5hLEssRUFBTztBQUNoQixXQUFLd2tCLFdBQUwsQ0FBaUIsS0FBS0MsV0FBTCxDQUFpQnprQixLQUFqQixDQUFqQjtBQUNEOzs7aUNBRVk7QUFDWCxVQUFJMGtCLFdBQVcsRUFBZjs7QUFFQSxXQUFJLElBQUlwbEIsSUFBSSxDQUFSLEVBQVdDLElBQUksS0FBS25DLEVBQUwsQ0FBUWpCLE9BQVIsQ0FBZ0I4RCxNQUFuQyxFQUEyQ1gsSUFBSUMsQ0FBL0MsRUFBa0RELEdBQWxELEVBQXVEO0FBQ3JELFlBQUlxbEIsU0FBUyxLQUFLdm5CLEVBQUwsQ0FBUWpCLE9BQVIsQ0FBZ0JtRCxDQUFoQixFQUFtQmYsT0FBaEM7QUFDQSxZQUFJK2lCLFlBQVlxRCxPQUFPemMsS0FBUCxDQUFhd2MsUUFBN0I7O0FBRUEsWUFBR3BELFNBQUgsRUFBYztBQUNab0QsbUJBQVNsbUIsSUFBVCxDQUFjbW1CLE9BQU92bkIsRUFBUCxDQUFVNEMsS0FBeEI7QUFDRDs7QUFFRDJrQixlQUFPdm5CLEVBQVAsQ0FBVXNuQixRQUFWLEdBQXFCcEQsU0FBckI7QUFDRDs7QUFFRCxVQUFHLENBQUNvRCxTQUFTemtCLE1BQWIsRUFBcUI7QUFDbkIsYUFBSzJrQixRQUFMO0FBQ0QsT0FGRCxNQUdLO0FBQ0gsYUFBS0osV0FBTCxDQUFpQixLQUFLQyxXQUFMLENBQWlCQyxRQUFqQixDQUFqQjtBQUNEO0FBQ0Y7Ozs0Q0FFdUI7QUFDdEIsVUFBSXRuQiwwSEFBSjs7QUFFQSxVQUFHLENBQUNBLEdBQUdxTixZQUFILENBQWdCLE9BQWhCLENBQUosRUFBOEI7QUFDNUJyTixXQUFHc04sWUFBSCxDQUFnQixPQUFoQixFQUF5QixLQUFLK0osSUFBTCxDQUFVb1EsSUFBVixFQUF6QjtBQUNEOztBQUVELGFBQU96bkIsRUFBUDtBQUNEOzs7OEJBRVM0QyxLLEVBQU87QUFDZixVQUFHLENBQUMsS0FBS2trQixVQUFULEVBQXFCO0FBQ25CLGVBQU8sS0FBSzltQixFQUFMLENBQVErYyxPQUFSLEtBQW9CbmEsS0FBM0I7QUFDRDs7QUFFRCxhQUFPLEtBQUs1QyxFQUFMLENBQVErYyxPQUFSLENBQWdCcFQsT0FBaEIsQ0FBd0IvRyxLQUF4QixLQUFrQyxDQUFDLENBQTFDO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQUcsQ0FBQyxLQUFLa2tCLFVBQVQsRUFBcUI7QUFDbkIsZUFBTyxLQUFLOW1CLEVBQUwsQ0FBUTRDLEtBQWY7QUFDRDs7QUFFRCxVQUFJbWEsVUFBVSxFQUFkOztBQUVBLFdBQUksSUFBSTdhLElBQUksQ0FBUixFQUFXQyxJQUFJLEtBQUtuQyxFQUFMLENBQVFqQixPQUFSLENBQWdCOEQsTUFBbkMsRUFBMkNYLElBQUlDLENBQS9DLEVBQWtERCxHQUFsRCxFQUF1RDtBQUNyRCxZQUFJcWxCLFNBQVMsS0FBS3ZuQixFQUFMLENBQVFqQixPQUFSLENBQWdCbUQsQ0FBaEIsQ0FBYjs7QUFFQSxZQUFHcWxCLE9BQU9ELFFBQVYsRUFBb0I7QUFDbEJ2SyxrQkFBUTNiLElBQVIsQ0FBYW1tQixPQUFPM2tCLEtBQXBCO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPbWEsT0FBUDtBQUNEOzs7Z0NBRVduYSxLLEVBQU87QUFDakIsVUFBRyxLQUFLa2tCLFVBQVIsRUFBb0I7QUFDbEIsWUFBRyxDQUFDcmhCLE1BQU0wUCxPQUFOLENBQWN2UyxLQUFkLENBQUosRUFBMEI7QUFDeEJBLGtCQUFTQSxVQUFVSixTQUFWLElBQXVCSSxVQUFVLElBQWxDLEdBQXlDLENBQUNBLEtBQUQsQ0FBekMsR0FBa0QsRUFBMUQ7QUFDRDtBQUNGLE9BSkQsTUFLSztBQUNILFlBQUc2QyxNQUFNMFAsT0FBTixDQUFjdlMsS0FBZCxDQUFILEVBQXlCO0FBQ3ZCQSxrQkFBUUEsTUFBTUMsTUFBTixHQUFjRCxNQUFNLENBQU4sQ0FBZCxHQUF3QixFQUFoQztBQUNELFNBRkQsTUFHSyxJQUFHLFFBQU9BLEtBQVAseUNBQU9BLEtBQVAsTUFBZ0IsUUFBaEIsSUFBNEIsT0FBT0EsS0FBUCxJQUFnQixVQUEvQyxFQUEyRDtBQUM5REEsa0JBQVEsRUFBUjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0EsS0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxXQUFLd2tCLFdBQUwsQ0FBaUIsS0FBS0YsVUFBTCxFQUFqQjtBQUNEOzs7Z0NBRVd0a0IsSyxFQUFPO0FBQ2pCLFVBQUcsZ0JBQU1tVSxPQUFOLENBQWMsS0FBSy9XLEVBQUwsQ0FBUStjLE9BQXRCLEVBQStCbmEsS0FBL0IsQ0FBSCxFQUEwQztBQUN4QztBQUNEOztBQUVELFVBQUc2QyxNQUFNMFAsT0FBTixDQUFjdlMsS0FBZCxDQUFILEVBQXlCO0FBQ3ZCLGFBQUs1QyxFQUFMLENBQVE0QyxLQUFSLEdBQWdCQSxNQUFNQSxNQUFNQyxNQUFOLEdBQWUsQ0FBckIsQ0FBaEI7O0FBRUEsYUFBSSxJQUFJWCxJQUFJLENBQVIsRUFBV0MsSUFBSSxLQUFLbkMsRUFBTCxDQUFRakIsT0FBUixDQUFnQjhELE1BQW5DLEVBQTJDWCxJQUFJQyxDQUEvQyxFQUFrREQsR0FBbEQsRUFBdUQ7QUFDckQsY0FBSXFsQixTQUFTLEtBQUt2bkIsRUFBTCxDQUFRakIsT0FBUixDQUFnQm1ELENBQWhCLENBQWI7O0FBRUFxbEIsaUJBQU9ELFFBQVAsR0FBa0Ixa0IsTUFBTStHLE9BQU4sQ0FBYzRkLE9BQU8za0IsS0FBckIsS0FBK0IsQ0FBQyxDQUFsRDtBQUNEO0FBQ0YsT0FSRCxNQVNLO0FBQ0gsYUFBSzVDLEVBQUwsQ0FBUTRDLEtBQVIsR0FBZ0JBLEtBQWhCOztBQUVBLGFBQUksSUFBSVYsS0FBSSxDQUFSLEVBQVdDLEtBQUksS0FBS25DLEVBQUwsQ0FBUWpCLE9BQVIsQ0FBZ0I4RCxNQUFuQyxFQUEyQ1gsS0FBSUMsRUFBL0MsRUFBa0RELElBQWxELEVBQXVEO0FBQ3JELGNBQUlxbEIsVUFBUyxLQUFLdm5CLEVBQUwsQ0FBUWpCLE9BQVIsQ0FBZ0JtRCxFQUFoQixDQUFiOztBQUVBcWxCLGtCQUFPRCxRQUFQLEdBQWtCQyxRQUFPM2tCLEtBQVAsSUFBZ0JBLEtBQWxDO0FBQ0Q7QUFDRjs7QUFFRCxXQUFLNUMsRUFBTCxDQUFRK2MsT0FBUixHQUFrQm5hLEtBQWxCO0FBQ0EsV0FBS2tJLEtBQUwsQ0FBV2diLFFBQVgsQ0FBb0JDLFFBQXBCLENBQTZCQyxLQUE3QixFQUFvQyxFQUFFcEgsU0FBUyxJQUFYLEVBQXBDO0FBQ0Q7Ozs7OztBQS9Ka0I5VixNLENBQ1prRSxpQixHQUFvQixDQUFDLFVBQUQsQztBQURSbEUsTSxDQUVaNkQsTSxHQUFTLENBQUMsUUFBRCxDO2tCQUZHN0QsTTtBQWdLcEI7O0lBRVk4ZCxNLFdBQUFBLE07Ozs7Ozs7Ozs7OzBDQUdXcGQsVSxFQUFZO0FBQ2hDLGFBQU8sZ0JBQU1nTyxrQkFBTixDQUF5QmhPLFVBQXpCLENBQVA7QUFDRDs7OzhCQUVTO0FBQ1IsbUdBQWMxRCxLQUFkLENBQW9CLElBQXBCLEVBQTBCZ0IsU0FBMUI7QUFDRDs7O29DQUVlbEUsSyxFQUFPO0FBQ3JCLFdBQUs4a0IsV0FBTCxDQUFpQjlrQixLQUFqQjtBQUNEOzs7Z0NBRVdBLEssRUFBTztBQUNqQixXQUFLNUMsRUFBTCxDQUFRc25CLFFBQVIsR0FBbUIxa0IsS0FBbkI7QUFDQSxXQUFLc2IsR0FBTCxDQUFTc0osUUFBVDtBQUNEOzs7Ozs7QUFsQlVaLE0sQ0FDSjVaLGlCLEdBQW9CLENBQUMsVUFBRCxDOzs7QUFvQjdCbEUsT0FBTzhkLE1BQVAsR0FBZ0JBLE1BQWhCLEM7Ozs7Ozs7Ozs7Ozs7OztBQzNMQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUI1ZCxROzs7Ozs7Ozs7Ozs2QkFDSDtBQUNkLHNCQUFNMUcsU0FBTixDQUFnQixVQUFoQixFQUE0QjBHLFFBQTVCO0FBQ0Q7Ozs7OztrQkFIa0JBLFE7QUFJcEIsQzs7Ozs7Ozs7Ozs7Ozs7O0FDUEQ7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTs7Ozs7O0lBTXFCWixLO0FBR25CLGlCQUFZNUgsSUFBWixFQUFrQlIsRUFBbEIsRUFBc0JzQyxTQUF0QixFQUFpQztBQUFBOztBQUMvQixTQUFLakMsTUFBTCxHQUFjRyxJQUFkO0FBQ0EsU0FBS0csSUFBTCxHQUFZWCxFQUFaO0FBQ0EsU0FBS1UsV0FBTCxHQUFtQjRCLFNBQW5CO0FBQ0F0QyxPQUFHc04sWUFBSCxDQUFnQixPQUFoQixFQUF5QjlNLElBQXpCO0FBQ0Q7Ozs7OztBQU1EOzs7Ozs7OzBCQU9NVixJLEVBQU04QyxLLEVBQXVCO0FBQUE7O0FBQUEsVUFBaEIra0IsTUFBZ0IsdUVBQVAsS0FBTzs7QUFDakMsVUFBRyxDQUFDbGlCLE1BQU0wUCxPQUFOLENBQWNyVixJQUFkLENBQUosRUFBeUI7QUFDdkJBLGVBQU8sQ0FBQ0EsSUFBRCxDQUFQO0FBQ0Q7O0FBRUQsc0JBQU1rRCxVQUFOLENBQWlCLFlBQU07QUFDckIya0IsbUJBQVcsTUFBS2puQixXQUFMLENBQWlCeVQsd0JBQWpCLEdBQTRDLElBQXZEO0FBQ0Esd0JBQU0xUixpQkFBTixDQUF3QjNDLElBQXhCLFNBQW9DLFVBQUM0QyxJQUFELEVBQU9DLEdBQVAsRUFBZTtBQUNqRCxjQUFHLENBQUNELElBQUosRUFBVTtBQUNSLG1CQUFPQyxPQUFPLEVBQWQ7QUFDRDs7QUFFRCxpQkFBT0MsS0FBUDtBQUNELFNBTkQ7QUFPQStrQixtQkFBVyxNQUFLam5CLFdBQUwsQ0FBaUJ5VCx3QkFBakIsR0FBNEMsS0FBdkQ7QUFDRCxPQVZEO0FBV0Q7Ozt3QkEzQmE7QUFDWjtBQUNEOzs7Ozs7a0JBWmtCL0wsSztBQXNDcEIsQyIsImZpbGUiOiJha2lsaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDEyZDg5NWE3NTQzMGI1YmI4Mjc1IiwiLyoqXG4gKiBjb25zdCBBa2lsaSA9IG1ha2VJdEVhc3koanMgKyBodG1sKTtcbiAqXG4gKiBAYXV0aG9yIEFsZXhhbmRyIEJhbGFzeWFuIDxteXdlYnN0cmVldEBnbWFpbC5jb20+XG4gKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudCc7XG5pbXBvcnQgSWYgZnJvbSAnLi9jb21wb25lbnRzL2lmJztcbmltcG9ydCBGb3IgZnJvbSAnLi9jb21wb25lbnRzL2Zvcic7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vY29tcG9uZW50cy9zZWxlY3QnO1xuaW1wb3J0IElucHV0IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dCc7XG5pbXBvcnQgUmFkaW8gZnJvbSAnLi9jb21wb25lbnRzL3JhZGlvJztcbmltcG9ydCBUZXh0IGZyb20gJy4vY29tcG9uZW50cy90ZXh0JztcbmltcG9ydCBUZXh0YXJlYSBmcm9tICcuL2NvbXBvbmVudHMvdGV4dGFyZWEnO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb21wb25lbnRzL2NvbnRlbnQnO1xuaW1wb3J0IEluY2x1ZGUgZnJvbSAnLi9jb21wb25lbnRzL2luY2x1ZGUnO1xuaW1wb3J0IFJvdXRlIGZyb20gJy4vY29tcG9uZW50cy9yb3V0ZSc7XG5pbXBvcnQgQSBmcm9tICcuL2NvbXBvbmVudHMvYSc7XG5pbXBvcnQgU2NvcGUgZnJvbSAnLi9zY29wZSc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlcic7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3NlcnZpY2VzL3JlcXVlc3QnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuL3NlcnZpY2VzL3JvdXRlcic7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IEFraWxpID0ge307XG5cbkFraWxpLm9wdGlvbnMgPSB7XG4gIG5lc3RlZFdhdGNoaW5nOiB0cnVlLFxuICBzaG93RXZhbHVhdGlvbkVycm9yczogdHJ1ZSxcbiAgZGVidWc6IHRydWVcbn07XG5cbkFraWxpLl9faW5pdCA9IGZhbHNlO1xuQWtpbGkuX19jb21wb25lbnRzID0ge307XG5Ba2lsaS5fX2FsaWFzZXMgPSB7fTtcbkFraWxpLl9fc2NvcGVzID0ge307XG5Ba2lsaS5fX2lzb2xhdGlvbiA9IG51bGw7XG5Ba2lsaS5fX2V2YWx1YXRpb24gPSBudWxsO1xuXG5Ba2lsaS5odG1sQm9vbGVhbkF0dHJpYnV0ZXMgPSBbXG4gICdkaXNhYmxlZCcsICdjb250ZW50ZWRpdGFibGUnLCAnaGlkZGVuJ1xuXTtcblxuQWtpbGkuY29tcG9uZW50cyA9IHt9O1xuQWtpbGkuZGVjb3JhdG9ycyA9IHt9O1xuQWtpbGkuc2VydmljZXMgPSB7fTtcblxuLyoqXG4gKiBKb2luIGJpbmRpbmcga2V5c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgYmluZGluZyBrZXlzXG4gKi9cbkFraWxpLmpvaW5CaW5kaW5nS2V5cyA9IGZ1bmN0aW9uKGtleXMpIHtcbiAgcmV0dXJuIGtleXMubWFwKGVsID0+IGVsLnRvU3RyaW5nKCkpLmpvaW4oJy4nKTtcbn07XG5cbi8qKlxuICogQWRkIHNjb3BlIHRvIHRoZSBzY29wZXMgbGlzdFxuICpcbiAqIEBwYXJhbSBzY29wZVxuICovXG5Ba2lsaS5hZGRTY29wZSA9IGZ1bmN0aW9uKHNjb3BlKSB7XG4gIGlmKHRoaXMuX19zY29wZXNbc2NvcGUuX19uYW1lXSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgU2NvcGUgbmFtZSAke3Njb3BlLl9fbmFtZX0gYWxyZWFkeSBleGlzdHNgKTtcbiAgfVxuXG4gIHRoaXMuX19zY29wZXNbc2NvcGUuX19uYW1lXSA9IHNjb3BlO1xufTtcblxuLyoqXG4gKiBHZXQgc2NvcGUgZnJvbSB0aGUgc2NvcGVzIGxpc3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHNjb3BlIG5hbWVcbiAqIEByZXR1cm5zIHtTY29wZX1cbiAqL1xuQWtpbGkuZ2V0U2NvcGUgPSBmdW5jdGlvbihuYW1lKSB7XG4gIHJldHVybiB0aGlzLl9fc2NvcGVzW25hbWVdO1xufTtcblxuLyoqXG4gKiBEZWxldGUgc2NvcGUgZnJvbSB0aGUgc2NvcGVzIGxpc3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHNjb3BlIG5hbWVcbiAqL1xuQWtpbGkucmVtb3ZlU2NvcGUgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGxldCBzY29wZSA9IHRoaXMuX19zY29wZXNbbmFtZV07XG5cbiAgc2NvcGUuX19jb21wb25lbnQgPSBudWxsO1xuICBzY29wZS5fX2VsID0gbnVsbDtcbiAgc2NvcGUuX19wYXJlbnQgPSBudWxsO1xuICB0aGlzLl9fc2NvcGVzW25hbWVdID0gbnVsbDtcbiAgZGVsZXRlIHRoaXMuX19zY29wZXNbbmFtZV07XG59O1xuXG4vKipcbiAqIEdldCBhbGwgZWxlbWVudHMgd2l0aCBhdHRhY2hlZCBBa2lsaSBjb21wb25lbnRzXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3RyZWU9dHJ1ZV0gLSByZXR1cm4gYXJyYXkgb2YgdGhlIHBhcmVudHMgaWYgdHJ1ZSwgY2xvc2VzdCBwYXJlbnQgaWYgZmFsc2VcbiAqIEByZXR1cm5zIHtBcnJheXxIVE1MRWxlbWVudHxudWxsfVxuICovXG5Ba2lsaS5nZXRBa2lsaVBhcmVudHMgPSBmdW5jdGlvbiAoZWwsIHRyZWUgPSB0cnVlKSB7XG4gIGxldCBhcnIgPSBbXTtcblxuICBmdW5jdGlvbiBjaGVjayhub2RlKSB7XG4gICAgaWYoIW5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKG5vZGUucGFyZW50Tm9kZS5fX2FraWxpKSB7XG4gICAgICBhcnIucHVzaChub2RlLnBhcmVudE5vZGUpO1xuXG4gICAgICBpZighdHJlZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2sobm9kZS5wYXJlbnROb2RlKTtcbiAgfVxuXG4gIGNoZWNrKGVsKTtcblxuICByZXR1cm4gdHJlZT8gYXJyOiBhcnJbMF07XG59O1xuXG4vKipcbiAqIFNldCBlbGVtZW50IGlubmVyIGh0bWwgd2l0aCBjb250ZW50IHJlcGxhY2luZ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwiPGk+SGVsbG88L2k+PGI+V29ybGQ8L2I+XCJcbiAqIGVsLmlubmVySFRNTCA9IFwiPGI+V29ybGQ8L2I+XCI7XG4gKiBBa2lsaS5zZXRUZW1wbGF0ZShlbCwgXCI8aT5IZWxsbzwvaT4ke3RoaXMuX19jaGlsZHJlbn1cIik7XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuQWtpbGkuc2V0VGVtcGxhdGUgPSBmdW5jdGlvbihlbCwgdGVtcGxhdGUpIHtcbiAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKC9cXCR7KCgoPyFcXCR7KVxccyp0aGlzXFwuX19jb250ZW50XFxzKikqKX0vLCBlbC5pbm5lckhUTUwpO1xuICBlbC5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcblxuICByZXR1cm4gZWwuaW5uZXJIVE1MO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSB1bmlxdWUgc2NvcGUgbmFtZVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbkFraWxpLmNyZWF0ZVNjb3BlTmFtZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdXRpbHMuY3JlYXRlUmFuZG9tU3RyaW5nKDE2LCAoc3RyKSA9PiB7XG4gICAgcmV0dXJuICEhdGhpcy5fX3Njb3Blc1tzdHJdO1xuICB9KTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSBmdW5jdGlvbi5cbiAqIEV2ZXJ5IHNjb3BlIHZhcmlhYmxlIGNoYW5nZSBjYWxscyBhY2NvcmRpbmcgbm9kZSBldmFsdWF0aW9uLlxuICogRm9yIGV4YW1wbGUsIGlmIHlvdSBjaGFuZ2Ugc29tZSBzY29wZSB2YXJpYWJsZSBpbiB0aGUgbG9vcCAtIGV2YWx1YXRpb24gd2lsbCBiZSBjYWxsZWQgb24gdGhlIGVhY2ggY2hhbmdlLlxuICogSXQgbWF5IGJlIHNsb3cgZm9yIHRoZSBhcHBsaWNhdGlvbi5cbiAqIFlvdSBjYW4gaXNvbGF0ZSB0aGlzIGFjdGlvbiBhbmQgcnVuIGFsbCBldmFsdWF0aW9uIHByb2Nlc3MgYWZ0ZXIgcGFzc2VkIGZ1bmN0aW9uIGF0IG9uY2UuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS5pc29sYXRlID0gZnVuY3Rpb24oZm4pIHtcbiAgaWYodGhpcy5fX2lzb2xhdGlvbikge1xuICAgIHJldHVybiBmbigpO1xuICB9XG5cbiAgdGhpcy5fX2lzb2xhdGlvbiA9IHt9O1xuXG4gIGxldCByZXMgPSBmbigpO1xuICBsZXQgcHJvcHMgPSBbXTtcblxuICBmb3IobGV0IGsgaW4gdGhpcy5fX2lzb2xhdGlvbikge1xuICAgIGlmKCF0aGlzLl9faXNvbGF0aW9uLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBwcm9wcy5wdXNoKHRoaXMuX19pc29sYXRpb25ba10pO1xuICB9XG5cbiAgdGhpcy5fX2lzb2xhdGlvbiA9IG51bGw7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IHByb3BzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBwcm9wID0gcHJvcHNbaV07XG5cbiAgICBpZihwcm9wLmlzRGVsZXRlZCkge1xuICAgICAgcHJvcC5jb21wb25lbnQuX19ldmFsdWF0ZUJ5S2V5cyhwcm9wLmtleXMsIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKHByb3Aua2V5cywgcHJvcC5jb21wb25lbnQuc2NvcGUsIChsYXN0LCB2YWwpID0+IHtcbiAgICAgIGlmKCFsYXN0KSB7XG4gICAgICAgIHJldHVybiB2YWwgfHwge307XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcm9wLnZhbHVlO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvcHMgPSBudWxsO1xuXG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIFN0b3AgZXZhbHVhdGlvbiBiZWZvcmUgdGhlIGZ1bmN0aW9uIGFuZCBjb250aW51ZSBhZnRlclxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkudW5ldmFsdWF0ZWQgPSBmdW5jdGlvbihmbikge1xuICBsZXQgZXZhbHVhdGlvbiA9IHRoaXMuX19ldmFsdWF0aW9uO1xuICBsZXQgcmVzO1xuXG4gIHRoaXMuX19ldmFsdWF0aW9uID0gbnVsbDtcbiAgcmVzID0gZm4oKTtcbiAgdGhpcy5fX2V2YWx1YXRpb24gPSBldmFsdWF0aW9uO1xuXG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIFN0b3AgaXNvbGF0aW9uIGJlZm9yZSB0aGUgZnVuY3Rpb24gYW5kIGNvbnRpbnVlIGFmdGVyXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS51bmlzb2xhdGVkID0gZnVuY3Rpb24oZm4pIHtcbiAgbGV0IGV2YWx1YXRpb24gPSB0aGlzLl9faXNvbGF0aW9uO1xuICBsZXQgcmVzO1xuXG4gIHRoaXMuX19pc29sYXRpb24gPSBudWxsO1xuICByZXMgPSBmbigpO1xuICB0aGlzLl9faXNvbGF0aW9uID0gZXZhbHVhdGlvbjtcblxuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zPXt9XVxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLmluaXRpYWxpemUgPSBmdW5jdGlvbihlbCwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCByZWNvbXBpbGUgPSBvcHRpb25zLnJlY29tcGlsZTtcbiAgbGV0IGNvbXBvbmVudCA9IGVsLl9fYWtpbGk7XG5cbiAgaWYoY29tcG9uZW50KSB7XG4gICAgaWYocmVjb21waWxlKSB7XG4gICAgICBjb21wb25lbnQuX19yZWNvbXBpbGUoKTtcblxuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgaXNSb290ID0gZWwgPT09IHRoaXMuX19yb290O1xuICBsZXQgY29tcG9uZW50TmFtZSA9IHV0aWxzLnRvRGFzaENhc2UoZWwuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKSB8fCBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpO1xuICBsZXQgX0NvbXBvbmVudCA9IHRoaXMuX19jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdO1xuXG4gIENIRUNLX0FMSUFTRVM6IGlmKCFfQ29tcG9uZW50KSB7XG4gICAgbGV0IHNlbGVjdG9ycyA9IE9iamVjdC5rZXlzKHRoaXMuX19hbGlhc2VzKTtcblxuICAgIGlmKCFzZWxlY3RvcnMubGVuZ3RoKSB7XG4gICAgICBicmVhayBDSEVDS19BTElBU0VTO1xuICAgIH1cblxuICAgIGxldCBzZWxlY3RvckFsbCA9IHNlbGVjdG9ycy5qb2luKCcsJyk7XG5cbiAgICBpZighZWwubWF0Y2hlcyhzZWxlY3RvckFsbCkpIHtcbiAgICAgIGJyZWFrIENIRUNLX0FMSUFTRVM7XG4gICAgfVxuXG4gICAgZm9yKGxldCBzZWxlY3RvciBpbiB0aGlzLl9fYWxpYXNlcykge1xuICAgICAgaWYoIXRoaXMuX19hbGlhc2VzLmhhc093blByb3BlcnR5KHNlbGVjdG9yKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYoZWwubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgX0NvbXBvbmVudCA9IHRoaXMuX19jb21wb25lbnRzW3RoaXMuX19hbGlhc2VzW3NlbGVjdG9yXV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmKCFfQ29tcG9uZW50ICYmICFpc1Jvb3QpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZighX0NvbXBvbmVudCkge1xuICAgIF9Db21wb25lbnQgPSB0aGlzLkNvbXBvbmVudDtcbiAgfVxuXG4gIGlmKF9Db21wb25lbnQubWF0Y2hlcyAmJiAhZWwubWF0Y2hlcyhfQ29tcG9uZW50Lm1hdGNoZXMpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29tcG9uZW50ID0gbmV3IF9Db21wb25lbnQoZWwsIHt9KTtcblxuICBpZihjb21wb25lbnQuX19jYW5jZWxsZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb21wb25lbnQuX19jcmVhdGUoKTtcblxuICByZXR1cm4gY29tcG9uZW50O1xufTtcblxuLyoqXG4gKiBDb21waWxlIHRoZSBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbkFraWxpLmNvbXBpbGUgPSBmdW5jdGlvbihyb290LCBvcHRpb25zID0geyByZWNvbXBpbGU6IGZhbHNlIH0pIHtcbiAgbGV0IGVsZW1lbnRzID0gW107XG5cbiAgbGV0IG5lc3RlZEluaXRpYWxpemluZyA9IChlbCkgPT4ge1xuICAgIGxldCBjb21wb25lbnQgPSB0aGlzLmluaXRpYWxpemUoZWwsIG9wdGlvbnMpO1xuICAgIGxldCBjaGlsZHJlbiA9IGVsLmNoaWxkcmVuO1xuXG4gICAgY29tcG9uZW50ICYmIGVsZW1lbnRzLnB1c2goY29tcG9uZW50KTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICBuZXN0ZWRJbml0aWFsaXppbmcoY2hpbGQpO1xuICAgIH1cbiAgfTtcblxuICBuZXN0ZWRJbml0aWFsaXppbmcocm9vdCk7XG5cbiAgbGV0IHAgPSBbXTtcblxuICBmb3IobGV0IGkgPSAwLCBsID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGNvbXBvbmVudCA9IGVsZW1lbnRzW2ldO1xuXG4gICAgcC5wdXNoKGNvbXBvbmVudC5fX2NvbXBpbGUoKSk7XG4gIH1cblxuICByZXR1cm4gUHJvbWlzZS5hbGwocCkudGhlbigoKSA9PiB7XG4gICAgbGV0IHIgPSBbXTtcblxuICAgIGZvcihsZXQgaSA9IGVsZW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgY29tcG9uZW50ID0gZWxlbWVudHNbaV07XG5cbiAgICAgIHIucHVzaChjb21wb25lbnQuX19yZXNvbHZlKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLmFsbChyKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIHRoZSBjb21wb25lbnQgb3IgZ2V0IGl0IGlmIGZuIGlzIG5vdCBwYXNzZWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtDb21wb25lbnR9IFtmbl1cbiAqL1xuQWtpbGkuY29tcG9uZW50ID0gZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuICBpZighZm4pIHtcbiAgICByZXR1cm4gdGhpcy5fX2NvbXBvbmVudHNbbmFtZV0gfHwgbnVsbDtcbiAgfVxuXG4gIGlmKHRoaXMuX19jb21wb25lbnRzW25hbWVdICYmIEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICBjb25zb2xlLndhcm4oYENvbXBvbmVudCAke25hbWV9IGFscmVhZHkgd2FzIGFkZGVkYCk7XG4gIH1cblxuICB0aGlzLl9fY29tcG9uZW50c1tuYW1lXSA9IGZuO1xufTtcblxuLyoqXG4gKiBVbnJlZ2lzdGVyIHRoZSBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5Ba2lsaS51bnJlZ2lzdGVyQ29tcG9uZW50ID0gZnVuY3Rpb24obmFtZSkge1xuICBkZWxldGUgdGhpcy5fX2NvbXBvbmVudHNbbmFtZV07XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIHRoZSBzZWxlY3RvciBhbGlhcyBvciBnZXQgaXQgaWYgY29tcG9uZW50IG5hbWUgaXMgbm90IHBhc3NlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciAtIERPTSBzZWxlY3RvclxuICogQHBhcmFtIHtzdHJpbmd9IFtjb21wb25lbnROYW1lXVxuICovXG5Ba2lsaS5hbGlhcyA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBjb21wb25lbnROYW1lID0gJycpIHtcbiAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUudG9Mb3dlckNhc2UoKTtcblxuICBpZighY29tcG9uZW50TmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gfHwgbnVsbDtcbiAgfVxuXG4gIGlmKHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXSAmJiBBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgY29uc29sZS53YXJuKGBBbGlhcyB3aXRoIHNlbGVjdG9yICR7c2VsZWN0b3J9IGFscmVhZHkgd2FzIGFkZGVkYCk7XG4gIH1cblxuICB0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gPSBjb21wb25lbnROYW1lO1xufTtcblxuLyoqXG4gKiBVbnJlZ2lzdGVyIHRoZSBzZWxlY3RvciBhbGlhc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICovXG5Ba2lsaS51bnJlZ2lzdGVyQWxpYXMgPSBmdW5jdGlvbihzZWxlY3Rvcikge1xuICBkZWxldGUgdGhpcy5fX2NvbXBvbmVudHNbc2VsZWN0b3JdO1xufTtcblxuLyoqXG4gKiBJc29sYXRlIGFycmF5IHByb3RvdHlwZSBmdW5jdGlvbnNcbiAqL1xuQWtpbGkuaXNvbGF0ZUFycmF5UHJvdG90eXBlID0gZnVuY3Rpb24oKSB7XG4gIGxldCBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoQXJyYXkucHJvdG90eXBlKTtcblxuICBmb3IobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICBsZXQgb2xkID0gQXJyYXkucHJvdG90eXBlW2tleV07XG5cbiAgICBpZih0eXBlb2Ygb2xkICE9ICdmdW5jdGlvbicgfHwga2V5ID09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIEFycmF5LnByb3RvdHlwZVtrZXldID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gQWtpbGkudW5ldmFsdWF0ZWQoKCkgPT4ge1xuICAgICAgICBpZighdGhpcy5fX2lzUHJveHkpIHtcbiAgICAgICAgICByZXR1cm4gb2xkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9sZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbn07XG5cbi8qKlxuICogSXNvbGF0ZSBzb21lIHdpbmRvdyBmdW5jdGlvbnNcbiAqL1xuQWtpbGkuaXNvbGF0ZVdpbmRvd0Z1bmN0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICB3aW5kb3cuc2V0VGltZW91dCA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LnNldFRpbWVvdXQsIDApO1xuICB3aW5kb3cuc2V0SW50ZXJ2YWwgPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5zZXRJbnRlcnZhbCwgMCk7XG4gIHdpbmRvdy5Qcm9taXNlICYmICh3aW5kb3cuUHJvbWlzZS5jb25zdHJ1Y3RvciA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LlByb21pc2UuY29uc3RydWN0b3IgLCAwKSk7XG59O1xuXG4vKipcbiAqIElzb2xhdGUgZXZlbnQgbGlzdGVuZXJzXG4gKi9cbkFraWxpLmlzb2xhdGVFdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgbGV0IG9sZEFkZEV2ZW50TGlzdGVuZXIgPSBFbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyO1xuICBsZXQgb2xkUmVtb3ZlRXZlbnRMaXN0ZW5lciA9IEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXI7XG4gIGxldCBvbGRSZW1vdmUgPSBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmU7XG5cbiAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgZGVsZXRlIHRoaXMuX19ha2lsaUxpc3RlbmVycztcblxuICAgIHJldHVybiBvbGRSZW1vdmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICBFbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBsZXQgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVycyA9IHt9O1xuICAgIH1cblxuICAgIGlmKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGFyZ3NbMV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gQWtpbGkudW5ldmFsdWF0ZWQoKCkgPT4ge1xuICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5wdXNoKHtcbiAgICAgIGxpbms6IGZuLFxuICAgICAgZm46IGFyZ3NbMV1cbiAgICB9KTtcblxuICAgIHJldHVybiBvbGRBZGRFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihuYW1lLCBmbikge1xuICAgIGlmKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVycyA9IHt9O1xuICAgIH1cblxuICAgIGlmKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV1baV07XG5cbiAgICAgIGlmKGxpc3RlbmVyLmxpbmsgPT09IGZuKSB7XG4gICAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGktLTtcbiAgICAgICAgbC0tO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdO1xuICAgIH1cblxuICAgIHJldHVybiBvbGRSZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG4vKipcbiAqIFdyYXAgdGhlIGZ1bmN0aW9uIGNhbGxiYWNrIHRvIGFuIGlzb2xhdGUgY29udGV4dFxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IFtwb3M9XCJsYXN0XCJdXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbkFraWxpLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uID0gZnVuY3Rpb24oZm4sIHBvcyA9ICdsYXN0Jykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgbGV0IGNhbGxiYWNrID0gcG9zID09ICdsYXN0Jz8gYXJnc1thcmdzLmxlbmd0aCAtIDFdOiBhcmdzW3Bvc107XG5cbiAgICBpZih0eXBlb2YgY2FsbGJhY2sgIT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgYXJnc1swXSA9ICgpID0+IHtcbiAgICAgIHJldHVybiBBa2lsaS51bmV2YWx1YXRlZCgoKSA9PiB7XG4gICAgICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xufTtcblxuLyoqXG4gKiBJc29sYXRlIHRoZSBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge29iamVjdH0gW2NvbnRleHRdXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbkFraWxpLmlzb2xhdGVGdW5jdGlvbiA9IGZ1bmN0aW9uKGZuLCBjb250ZXh0ID0gbnVsbCkge1xuICBpZihmbi5fX2FraWxpKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgbGV0IG9GbiA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IHRoaXM7XG5cbiAgICByZXR1cm4gQWtpbGkudW5ldmFsdWF0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICByZXR1cm4gZm4uYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvRm4sICdfX2FraWxpJywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcblxuICByZXR1cm4gb0ZuO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGFuIGFwcGxpY2F0aW9uXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW3Jvb3RdXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuQWtpbGkuaW5pdCA9IGZ1bmN0aW9uKHJvb3QpIHtcbiAgdGhpcy5fX3Jvb3QgPSByb290IHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpO1xuXG4gIHJldHVybiB0aGlzLmNvbXBpbGUodGhpcy5fX3Jvb3QpLnRoZW4oKCkgPT4ge1xuICAgIGlmKHJvdXRlci5fX2luaXQpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzKSA9PiB7XG4gICAgICAgIGxldCBvblN0YXRlID0gKCkgPT4ge1xuICAgICAgICAgIHJlcygpO1xuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzdGF0ZS1jaGFuZ2UnLCBvblN0YXRlKTtcbiAgICAgICAgfTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3RhdGUtY2hhbmdlJywgb25TdGF0ZSk7XG4gICAgICAgIHJvdXRlci5jaGFuZ2VTdGF0ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KS50aGVuKCgpID0+IHtcbiAgICBBa2lsaS5fX2luaXQgPSB0cnVlO1xuICB9KTtcbn07XG5cbi8qKlxuICogRGVmaW5lIGFsbCBkZWZhdWx0IGNvbXBvbmVudHNcbiAqL1xuQWtpbGkuZGVmaW5lID0gZnVuY3Rpb24oKSB7XG4gIEEuZGVmaW5lKCk7XG4gIENvbnRlbnQuZGVmaW5lKCk7XG4gIENvbXBvbmVudC5kZWZpbmUoKTtcbiAgRm9yLmRlZmluZSgpO1xuICBJbmNsdWRlLmRlZmluZSgpO1xuICBJbnB1dC5kZWZpbmUoKTtcbiAgSWYuZGVmaW5lKCk7XG4gIFJhZGlvLmRlZmluZSgpO1xuICBSb3V0ZS5kZWZpbmUoKTtcbiAgU2VsZWN0LmRlZmluZSgpO1xuICBUZXh0YXJlYS5kZWZpbmUoKTtcbn07XG5cbkFraWxpLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbkFraWxpLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcbkFraWxpLlNjb3BlID0gU2NvcGU7XG5Ba2lsaS51dGlscyA9IHV0aWxzO1xuQWtpbGkuY29tcG9uZW50cy5BID0gQTtcbkFraWxpLmNvbXBvbmVudHMuQ29udGVudCA9IENvbnRlbnQ7XG5Ba2lsaS5jb21wb25lbnRzLkZvciA9IEZvcjtcbkFraWxpLmNvbXBvbmVudHMuSWYgPSBJZjtcbkFraWxpLmNvbXBvbmVudHMuSW5jbHVkZSA9IEluY2x1ZGU7XG5Ba2lsaS5jb21wb25lbnRzLklucHV0ID0gSW5wdXQ7XG5Ba2lsaS5jb21wb25lbnRzLlJhZGlvID0gUmFkaW87XG5Ba2lsaS5jb21wb25lbnRzLlJvdXRlID0gUm91dGU7XG5Ba2lsaS5jb21wb25lbnRzLlNlbGVjdCA9IFNlbGVjdDtcbkFraWxpLmNvbXBvbmVudHMuVGV4dCA9IFRleHQ7XG5Ba2lsaS5jb21wb25lbnRzLlRleHRhcmVhID0gVGV4dGFyZWE7XG5Ba2lsaS5zZXJ2aWNlcy5yZXF1ZXN0ID0gcmVxdWVzdDtcbkFraWxpLnNlcnZpY2VzLnJvdXRlciA9IHJvdXRlcjtcblxud2luZG93LkFraWxpID0gQWtpbGk7XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnRzID0gQWtpbGkuY29tcG9uZW50cztcbmV4cG9ydCBjb25zdCBzZXJ2aWNlcyA9IEFraWxpLnNlcnZpY2VzO1xuZXhwb3J0IGRlZmF1bHQgQWtpbGk7XG5cbkFraWxpLmRlZmluZSgpO1xuQWtpbGkuaXNvbGF0ZUV2ZW50cygpO1xuQWtpbGkuaXNvbGF0ZUFycmF5UHJvdG90eXBlKCk7XG5Ba2lsaS5pc29sYXRlV2luZG93RnVuY3Rpb25zKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FraWxpLmpzIiwiaW1wb3J0IEFraWxpIGZyb20gJy4vYWtpbGknO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9zZXJ2aWNlcy9yZXF1ZXN0JztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgZXZhbHVhdGlvblJlZ2V4ID0gL1xcJHsoKCg/IVxcJHspLikqKX0vO1xuY29uc3QgZXZhbHVhdGlvblJlZ2V4R2xvYmFsID0gbmV3IFJlZ0V4cChldmFsdWF0aW9uUmVnZXguc291cmNlLCBcImdcIik7XG5jb25zdCBzeXN0ZW1BdHRyaWJ1dGVzID0gWydjb21wb25lbnQnLCAnc2NvcGUnXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgc3RhdGljIG5lc3RlZFdhdGNoaW5nO1xuICBzdGF0aWMgbWF0Y2hlcyA9ICcnO1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbXTtcbiAgc3RhdGljIGV2ZW50cyA9IFtdO1xuICBzdGF0aWMgY29udHJvbEF0dHJpYnV0ZXMgPSBmYWxzZTtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gZmFsc2U7XG4gIHN0YXRpYyB0ZW1wbGF0ZSA9ICcnO1xuICBzdGF0aWMgdGVtcGxhdGVVcmwgPSAnJztcbiAgc3RhdGljIHNjb3BlID0gbnVsbDtcblxuICAvKipcbiAgICogRnVuY3Rpb24gdG8gZGVmaW5lIHRoZSBjb21wb25lbnRcbiAgICovXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdjb21wb25lbnQnLCBDb21wb25lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIHRoZSBleHByZXNzaW9uXG4gICAqXG4gICAqIFJlcXVpcmVkIGNvbnRleHQgdmFyaWFibGVzOlxuICAgKiAgdGhpcyAtIHNjb3BlIG9iamVjdFxuICAgKiAgZXZlbnQgLSB3aW5kb3cuZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4cHJlc3Npb25cbiAgICovXG4gIHN0YXRpYyBwYXJzZShjb250ZXh0LCBleHByZXNzaW9uKSB7XG4gICAgcmV0dXJuIChmdW5jdGlvbiAoZXhwcmVzc2lvbikge1xuICAgICAgcmV0dXJuIGV2YWwoZXhwcmVzc2lvbik7XG4gICAgfSkuY2FsbChjb250ZXh0LCBleHByZXNzaW9uKVxuICB9XG5cbiAgY29uc3RydWN0b3IoZWwsIHNjb3BlID0ge30pIHtcbiAgICB0aGlzLl9faXNNb3VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2lzQ29tcGlsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2JpbmRpbmdzID0ge307XG4gICAgdGhpcy5fX2V2YWx1YXRpbmdFdmVudCA9IG51bGw7XG4gICAgdGhpcy5fX3JlY29tcGlsaW5nID0gbnVsbDtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0ge307XG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IG51bGw7XG4gICAgdGhpcy5fX2NoaWxkcmVuID0gW107XG4gICAgdGhpcy5fX3BhcmVudCA9IG51bGw7XG4gICAgdGhpcy5fX3BhcmVudHMgPSBbXTtcbiAgICB0aGlzLl9fYXR0cnMgPSB7fTtcbiAgICB0aGlzLl9fYXR0cmlidXRlT2YgPSBudWxsO1xuICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50ID0gdGhpcztcbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgdGhpcy5lbCA9IGVsO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiB0aGUgcmVjb21waWxhdGlvblxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlY29tcGlsZSgpIHtcbiAgICB0aGlzLl9faXNNb3VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2lzQ29tcGlsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5fX2Rpc2FibGVQcm94eSA9IG51bGw7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IHt9O1xuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IHt9O1xuICAgIHRoaXMuX19zZXRFdmVudHMoKTtcbiAgICB0aGlzLl9fc2V0UGFyZW50cygpO1xuICAgIHRoaXMuX19zZXRCb29sZWFuQXR0cmlidXRlcygpO1xuICAgIHRoaXMuX19kZWZpbmVBdHRyaWJ1dGVzKCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gdGhlIGNyZWF0aW9uXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlKCkge1xuICAgIHRoaXMuZWwuX19ha2lsaSA9IHRoaXM7XG4gICAgdGhpcy5fX2luaXRpYWxpemUoKTtcbiAgICB0aGlzLl9fc2V0RXZlbnRzKCk7XG4gICAgdGhpcy5fX3NldFBhcmVudHMoKTtcbiAgICB0aGlzLl9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKTtcbiAgICB0aGlzLl9fZGVmaW5lQXR0cmlidXRlcygpO1xuXG4gICAgQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZWQodGhpcy5hdHRycyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIG9uIHRoZSBjb21waWxhdGlvblxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgX19jb21waWxlKCkge1xuICAgIGxldCBjb250cm9sID0gdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzIHx8ICF0aGlzLl9fZXZhbHVhdGVQYXJlbnQ7XG4gICAgbGV0IHAgPSBQcm9taXNlLnJlc29sdmUoKTtcblxuICAgIHRoaXMuX19hdHRyaWJ1dGVPZiA9IGNvbnRyb2w/IHRoaXM6IHRoaXMuX19ldmFsdWF0ZVBhcmVudC5fX2FraWxpO1xuXG4gICAgaWYoIXRoaXMuX19yZWNvbXBpbGluZyB8fCB0aGlzLl9fY29tcGlsaW5nLm5ld1BhcmVudCB8fCB0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMpIHtcbiAgICAgIHRoaXMuX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXModGhpcy5lbCwgdGhpcy5fX2F0dHJpYnV0ZU9mKTtcbiAgICB9XG5cbiAgICBsZXQgaW50ZXJwb2xhdGUgPSAoY2hpbGRyZW4sIHBhcmVudCkgPT4ge1xuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcblxuICAgICAgICBpZihjaGlsZC5ub2RlVHlwZSA9PSAzKSB7XG4gICAgICAgICAgdGhpcy5fX2luaXRpYWxpemVOb2RlKGNoaWxkLCBwYXJlbnQpO1xuXG4gICAgICAgICAgY2hpbGQubm9kZVZhbHVlID0gdGhpcy5fX2V2YWx1YXRlKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGNoaWxkLm5vZGVUeXBlID09IDEgJiYgIWNoaWxkLl9fYWtpbGkpIHtcbiAgICAgICAgICB0aGlzLl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKGNoaWxkKTtcbiAgICAgICAgICBpbnRlcnBvbGF0ZShjaGlsZC5jaGlsZE5vZGVzLCBjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaW50ZXJwb2xhdGUodGhpcy5lbC5jaGlsZE5vZGVzLCB0aGlzLmVsKTtcbiAgICB0aGlzLl9faXNNb3VudGVkID0gdHJ1ZTtcblxuICAgIGxldCByZXM7XG5cbiAgICBpZighdGhpcy5fX3JlY29tcGlsaW5nKSB7XG4gICAgICByZXMgPSBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgdGhpcy5hdHRycy5vbkNvbXBpbGVkICYmIHRoaXMuYXR0cnMub25Db21waWxlZC50cmlnZ2VyKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGlsZWQoKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZih0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlVXJsKSB7XG4gICAgICAgIHAgPSByZXF1ZXN0LmdldCh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlVXJsKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMuX19jb250ZW50O1xuICAgICAgICAgIEFraWxpLnNldFRlbXBsYXRlKHRoaXMuZWwsIHJlcy5kYXRhKTtcbiAgICAgICAgICBkZWxldGUgdGhpcy5fX2NvbnRlbnQ7XG5cbiAgICAgICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0cnMub25SZWNvbXBpbGVkICYmIHRoaXMuYXR0cnMub25SZWNvbXBpbGVkLnRyaWdnZXIoKTtcbiAgICAgICAgdGhpcy5yZWNvbXBpbGVkKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl9faXNDb21waWxlZCA9IHRydWU7XG4gICAgdGhpcy5fX3JlY29tcGlsaW5nID0gbnVsbDtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0gbnVsbDtcblxuICAgIHJldHVybiBwLnRoZW4oKCkgPT4ge1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlIHRoZSBjb21wb25lbnRcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIF9fcmVzb2x2ZSgpIHtcbiAgICBpZih0aGlzLl9fcmVjb21waWxpbmcpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLmF0dHJzLm9uUmVzb2x2ZWQgJiYgdGhpcy5hdHRycy5vblJlc29sdmVkLnRyaWdnZXIoKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMucmVzb2x2ZWQoKSk7XG4gIH1cblxuICAvKipcbiAgICogUGFydCBvZiB0aGUge0BzZWUgQ29tcG9uZW50I19fY29tcGlsZX0gbWV0aG9kXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZSgpIHtcbiAgICBsZXQgcGFyZW50ID0gQWtpbGkuZ2V0QWtpbGlQYXJlbnRzKHRoaXMuZWwsIGZhbHNlKTtcbiAgICBsZXQgU2NvcGUgPSB0aGlzLmNvbnN0cnVjdG9yLnNjb3BlIHx8IEFraWxpLlNjb3BlO1xuICAgIGxldCBzY29wZTtcbiAgICBsZXQgaXNSb290ID0gQWtpbGkuX19yb290ID09PSB0aGlzLmVsO1xuXG4gICAgaWYocGFyZW50KSB7XG4gICAgICBzY29wZSA9IG5ldyBTY29wZSh0aGlzLmVsLmdldEF0dHJpYnV0ZSgnc2NvcGUnKSB8fCBBa2lsaS5jcmVhdGVTY29wZU5hbWUoKSwgdGhpcy5lbCwgdGhpcyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2NvcGUgPSBuZXcgU2NvcGUoaXNSb290PyAncm9vdCc6IEFraWxpLmNyZWF0ZVNjb3BlTmFtZSgpLCB0aGlzLmVsLCB0aGlzKTtcbiAgICAgIGlzUm9vdCAmJiAoQWtpbGkucm9vdCA9IHRoaXMpO1xuICAgIH1cblxuICAgIGxldCBfX3Njb3BlID0gc2NvcGU7XG4gICAgbGV0IF9zY29wZSA9IE9iamVjdC5hc3NpZ24oc2NvcGUsIHRoaXMuc2NvcGUpO1xuICAgIGxldCBuZXN0ZWRXYXRjaGluZyA9IEFraWxpLm9wdGlvbnMubmVzdGVkV2F0Y2hpbmc7XG4gICAgbGV0IGNvbnRyb2xBdHRyaWJ1dGVzID0gdGhpcy5jb25zdHJ1Y3Rvci5jb250cm9sQXR0cmlidXRlcztcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5jb25zdHJ1Y3Rvci5ldmVudHM7XG5cbiAgICBpZih0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlKSB7XG4gICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCB0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlKTtcbiAgICB9XG5cbiAgICBpZih0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlVXJsKSB7XG4gICAgICB0aGlzLl9fY29udGVudCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgICB9XG5cbiAgICBpZih0aGlzLmNvbnN0cnVjdG9yLm5lc3RlZFdhdGNoaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG5lc3RlZFdhdGNoaW5nID0gdGhpcy5jb25zdHJ1Y3Rvci5uZXN0ZWRXYXRjaGluZztcbiAgICB9XG4gICAgZWxzZSBpZihTY29wZS5uZXN0ZWRXYXRjaGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXN0ZWRXYXRjaGluZyA9IFNjb3BlLm5lc3RlZFdhdGNoaW5nO1xuICAgIH1cblxuICAgIHRoaXMuX19zY29wZSA9IF9fc2NvcGU7XG4gICAgdGhpcy5fX2V2ZW50cyA9IGV2ZW50cztcbiAgICB0aGlzLl9fbmVzdGVkV2F0Y2hpbmcgPSBuZXN0ZWRXYXRjaGluZztcbiAgICB0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMgPSBjb250cm9sQXR0cmlidXRlcztcblxuICAgIEFraWxpLmFkZFNjb3BlKHNjb3BlKTtcblxuICAgIGlmKG5lc3RlZFdhdGNoaW5nKSB7XG4gICAgICBzY29wZSA9IHRoaXMuX19uZXN0ZWRPYnNlcnZlKF9zY29wZSwgW10pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNjb3BlID0gdGhpcy5fX29ic2VydmUoX3Njb3BlLCBbXSk7XG4gICAgfVxuXG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBib29sZWFuIGF0dHJpYnV0ZXNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXRCb29sZWFuQXR0cmlidXRlcygpIHtcbiAgICB0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzID0gW10uY29uY2F0KEFraWxpLmh0bWxCb29sZWFuQXR0cmlidXRlcywgdGhpcy5jb25zdHJ1Y3Rvci5ib29sZWFuQXR0cmlidXRlcyk7XG5cbiAgICBsZXQgc2V0QXR0ciA9IChlbCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGF0dHJzID0gZWwuYXR0cmlidXRlcywgbCA9IGF0dHJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgbm9kZSA9IGF0dHJzW2ldO1xuXG4gICAgICAgIGlmKHRoaXMuYm9vbGVhbkF0dHJpYnV0ZXMuaW5kZXhPZihub2RlLm5vZGVOYW1lKSAhPSAtMSkge1xuICAgICAgICAgIGlmKGVsLmhhc0F0dHJpYnV0ZShgYm9vbGVhbi0ke25vZGUubm9kZU5hbWV9YCkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShgYm9vbGVhbi0ke25vZGUubm9kZU5hbWV9YCwgZWwuZ2V0QXR0cmlidXRlKG5vZGUubm9kZU5hbWUpIHx8IG5vZGUubm9kZU5hbWUpO1xuICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShub2RlLm5vZGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0gZWwuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGVsLmNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmKCFjaGlsZC5fX2FraWxpKSB7XG4gICAgICAgICAgc2V0QXR0cihjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2V0QXR0cih0aGlzLmVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZXZlbnRzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0RXZlbnRzKCkge1xuICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLl9fZXZlbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGV2ID0gdGhpcy5fX2V2ZW50c1tpXTtcblxuICAgICAgIS9eb24tL2kudGVzdChldikgJiYgKGV2ID0gJ29uLScgKyBldik7XG5cbiAgICAgIGlmKCF0aGlzLmVsLmhhc0F0dHJpYnV0ZShldikpIHtcbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoZXYsICcnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IGNvbXBvbmVudCBwYXJlbnRzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0UGFyZW50cygpIHtcbiAgICBsZXQgcGFyZW50cyA9IEFraWxpLmdldEFraWxpUGFyZW50cyh0aGlzLmVsKTtcblxuICAgIGlmKCFwYXJlbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBuZXdQYXJlbnQgPSB0aGlzLl9fcGFyZW50ICE9PSBwYXJlbnRzWzBdO1xuICAgIGxldCBldmFsdWF0ZVBhcmVudCA9IG51bGw7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gcGFyZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBwYXJlbnQgPSBwYXJlbnRzW2ldO1xuXG4gICAgICBpZighcGFyZW50Ll9fYWtpbGkuY29uc3RydWN0b3IudHJhbnNwYXJlbnQpIHtcbiAgICAgICAgZXZhbHVhdGVQYXJlbnQgPSBwYXJlbnQ7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fX2NvbXBpbGluZy5uZXdQYXJlbnQgPSBuZXdQYXJlbnQ7XG4gICAgbmV3UGFyZW50ICYmIHRoaXMuX19kZXRhY2goKTtcblxuICAgIGlmKHRoaXMuY29uc3RydWN0b3IudHJhbnNwYXJlbnQpIHtcbiAgICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50ID0gZXZhbHVhdGVQYXJlbnQuX19ha2lsaTtcbiAgICB9XG5cbiAgICB0aGlzLl9fZXZhbHVhdGVQYXJlbnQgPSBldmFsdWF0ZVBhcmVudDtcbiAgICB0aGlzLl9fcGFyZW50ID0gcGFyZW50c1swXTtcbiAgICB0aGlzLl9fcGFyZW50cyA9IHBhcmVudHM7XG4gICAgdGhpcy5zY29wZS5fX3BhcmVudCA9IHRoaXMuX19ldmFsdWF0ZVBhcmVudC5fX2FraWxpLnNjb3BlO1xuICAgICF0aGlzLl9fcmVjb21waWxpbmcgJiYgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fYWRkQ2hpbGQodGhpcy5lbCk7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMuc2NvcGUsIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX3Njb3BlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgY2hpbGQgZWxlbWVudCB0byB0aGUgbGlzdFxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2FkZENoaWxkKGVsKSB7XG4gICAgdGhpcy5fX2NoaWxkcmVuLnB1c2goZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwbGljZSBjaGlsZCBmcm9tIHRoZSBsaXN0XG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc3BsaWNlQ2hpbGQoZWwpIHtcbiAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5fX2NoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5fX2NoaWxkcmVuW2ldO1xuXG4gICAgICBpZihjaGlsZCA9PT0gZWwpIHtcbiAgICAgICAgdGhpcy5fX2NoaWxkcmVuLnNwbGljZShpLCAxKTtcbiAgICAgICAgaS0tO1xuICAgICAgICBsLS07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFlvdSBjYW4gY2hhbmdlIGV4cHJlc3Npb24gYmVmb3JlIHBhcnNpbmcgaGVyZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwcmVzc2lvblxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRQYXJzZWRFeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBub2RlIGhhcyBhbnkgcHJvcGVydHkgY2hhbmdlcyBvciBub3RcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NoZWNrRXZhbHVhdGlvbihub2RlKSB7XG4gICAgaWYgKCFPYmplY3Qua2V5cyhub2RlLl9fcHJvcGVydGllcykubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBrIGluIG5vZGUuX19wcm9wZXJ0aWVzKSB7XG4gICAgICBpZighbm9kZS5fX3Byb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGxldCBwcm9wID0gbm9kZS5fX3Byb3BlcnRpZXNba107XG4gICAgICBsZXQgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhwcm9wLmtleXMsIHByb3AuY29tcG9uZW50Ll9fc2NvcGUpO1xuXG4gICAgICBpZighdXRpbHMuY29tcGFyZVByZXZpb3VzVmFsdWUodmFsdWUsIHByb3AudmFsdWUsIHByb3AuY29weSwgdXRpbHMuY29weSh2YWx1ZSkpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgQ2hlY2sgbm9kZSBoYXMgY2hhbmdlZCBvbiB0aGUgY2VydGFpbiBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2luZyhub2RlLCBrZXlzLCB2YWx1ZSkge1xuICAgIGxldCBwcm9wID0gdGhpcy5fX2dldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKTtcblxuICAgIGlmKCFwcm9wKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gIXV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlKHZhbHVlLCBwcm9wLnZhbHVlLCBwcm9wLmNvcHksIHV0aWxzLmNvcHkodmFsdWUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSBub2RlIGV4cHJlc3Npb25cbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlKG5vZGUpIHtcbiAgICBsZXQgY291bnRlciA9IDA7XG4gICAgbGV0IGF0dHJpYnV0ZVZhbHVlO1xuICAgIGxldCBleHByZXNzaW9uO1xuXG4gICAgbGV0IHJlcyA9IG5vZGUuX19leHByZXNzaW9uLnJlcGxhY2UoZXZhbHVhdGlvblJlZ2V4R2xvYmFsLCAobSwgZCkgPT4ge1xuICAgICAgY291bnRlcisrO1xuXG4gICAgICBsZXQgZXZhbHVhdGU7XG4gICAgICBsZXQgZXZhbHVhdGlvbjtcbiAgICAgIGxldCBleGlzdGluZ0JpbmRpbmdzID0ge307XG4gICAgICBsZXQgcGFyc2VWYWx1ZSA9IG5vZGUuX19jb21wb25lbnQuX19nZXRQYXJzZWRFeHByZXNzaW9uKGQpO1xuXG4gICAgICBBa2lsaS5fX2V2YWx1YXRpb24gPSB7IG5vZGU6IG5vZGUsIGxpc3Q6IFtdfTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZXZhbHVhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLnBhcnNlKHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50LnNjb3BlLCBwYXJzZVZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBgU2NvcGUgcGFyc2luZyBlcnJvciBpbiB0aGUgdGVtcGxhdGUgZXhwcmVzc2lvbjogJHtub2RlLl9fZXhwcmVzc2lvbn1gO1xuXG4gICAgICAgIGlmKCFBa2lsaS5vcHRpb25zLnNob3dFdmFsdWF0aW9uRXJyb3JzKSB7XG4gICAgICAgICAgaWYoQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGVyci5zdGFjayk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXZhbHVhdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZXZhbHVhdGlvbiA9IEFraWxpLl9fZXZhbHVhdGlvbj8gQWtpbGkuX19ldmFsdWF0aW9uLmxpc3Q6IFtdO1xuICAgICAgQWtpbGkuX19ldmFsdWF0aW9uLmxpc3QgPSBudWxsO1xuICAgICAgQWtpbGkuX19ldmFsdWF0aW9uID0gbnVsbDtcblxuICAgICAgZm9yKGxldCBpID0gZXZhbHVhdGlvbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBsZXQgZGF0YSA9IGV2YWx1YXRpb25baV07XG4gICAgICAgIGxldCBoYXNoID0gYCR7ZGF0YS5jb21wb25lbnQuX19zY29wZS5fX25hbWV9LiR7ZGF0YS5rZXlzU3RyaW5nfWA7XG5cbiAgICAgICAgaWYoZGF0YS5ub3RCaW5kaW5nKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZihleGlzdGluZ0JpbmRpbmdzW2hhc2hdKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcGFyZW50VmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhkYXRhLnBhcmVudHMsIGRhdGEuY29tcG9uZW50Ll9fc2NvcGUpO1xuICAgICAgICBsZXQgZXZhbENvbXBvbmVudCA9IG5vZGUuX19hdHRyaWJ1dGVPZiB8fCBub2RlLl9fY29tcG9uZW50O1xuXG4gICAgICAgIGlmKHV0aWxzLmlzU2NvcGVQcm94eShwYXJlbnRWYWx1ZSkgJiYgZGF0YS5jb21wb25lbnQgIT09IGV2YWxDb21wb25lbnQuX19ldmFsdWF0aW9uQ29tcG9uZW50KSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYmluZCA9IGRhdGEuY29tcG9uZW50Ll9fZ2V0Qm91bmROb2RlKGRhdGEua2V5cywgbm9kZSk7XG4gICAgICAgIGxldCB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGRhdGEua2V5cywgZGF0YS5jb21wb25lbnQuX19zY29wZSk7XG5cbiAgICAgICAgaWYoIWJpbmQpIHtcbiAgICAgICAgICBkYXRhLmNvbXBvbmVudC5fX2JpbmQoZGF0YS5rZXlzLCB7IG5vZGU6IG5vZGUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhLmNvbXBvbmVudC5fX3NldE5vZGVQcm9wZXJ0eShub2RlLCBkYXRhLmtleXMsIHZhbHVlKTtcbiAgICAgICAgZXhpc3RpbmdCaW5kaW5nc1toYXNoXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGV4aXN0aW5nQmluZGluZ3MgPSBudWxsO1xuICAgICAgZXZhbHVhdGlvbiA9IG51bGw7XG5cbiAgICAgIGlmKG5vZGUgaW5zdGFuY2VvZiBBdHRyKSB7XG4gICAgICAgIGV4cHJlc3Npb24gPSBtO1xuICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IGV2YWx1YXRlO1xuXG4gICAgICAgIHJldHVybiB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUoZXZhbHVhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZih0eXBlb2YgZXZhbHVhdGUgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZXZhbHVhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGUpIHtcbiAgICAgICAgICByZXR1cm4gZXZhbHVhdGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGV2YWx1YXRlO1xuICAgIH0pO1xuXG4gICAgaWYobm9kZSBpbnN0YW5jZW9mIEF0dHIpIHtcbiAgICAgIGxldCB2YWx1ZSA9IHJlcztcbiAgICAgIGxldCBpc0Jvb2xlYW5BdHRyaWJ1dGUgPSBmYWxzZTtcblxuICAgICAgaWYoY291bnRlcikge1xuICAgICAgICBub2RlLl9faGFzQmluZGluZ3MgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZihjb3VudGVyID09IDEgJiYgZXhwcmVzc2lvbiAmJiBub2RlLl9fZXhwcmVzc2lvbiA9PSBleHByZXNzaW9uKSB7XG4gICAgICAgIHZhbHVlID0gYXR0cmlidXRlVmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGxldCBjbGVhckF0dHJpYnV0ZSA9IG5vZGUubm9kZU5hbWUucmVwbGFjZSgvXmJvb2xlYW4tKC4rKS9pLCAnJDEnKTtcblxuICAgICAgaWYoY2xlYXJBdHRyaWJ1dGUgIT0gbm9kZS5ub2RlTmFtZSkge1xuICAgICAgICBpc0Jvb2xlYW5BdHRyaWJ1dGUgPSB0cnVlO1xuICAgICAgICB2YWx1ZSA9ICEhdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmKG5vZGUuX19hdHRyaWJ1dGVPbikge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gbm9kZS5fX2F0dHJpYnV0ZU9uO1xuXG4gICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSB0cnVlO1xuICAgICAgICBjb21wb25lbnQuYXR0cnNbdXRpbHMudG9DYW1lbENhc2UoY2xlYXJBdHRyaWJ1dGUpXSA9IHZhbHVlO1xuICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudC5fX2lzQ29tcGlsZWQpIHtcbiAgICAgICAgICBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5hdHRycy5vbkNoYW5nZWQgJiYgY29tcG9uZW50LmF0dHJzLm9uQ2hhbmdlZC50cmlnZ2VyKHsga2V5OiBjbGVhckF0dHJpYnV0ZSwgdmFsdWU6IHZhbHVlfSk7XG4gICAgICAgICAgICBjb21wb25lbnQuY2hhbmdlZChjbGVhckF0dHJpYnV0ZSwgdmFsdWUpO1xuXG4gICAgICAgICAgICBsZXQga2V5ID0gdXRpbHMudG9DYW1lbENhc2UoY2xlYXJBdHRyaWJ1dGUpO1xuICAgICAgICAgICAgbGV0IGNhbWVsS2V5ID0ga2V5WzBdLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSk7XG4gICAgICAgICAgICBsZXQgZm5OYW1lID0gJ2NoYW5nZWQnICsgY2FtZWxLZXk7XG4gICAgICAgICAgICBsZXQgZXZGbk5hbWUgPSAnb25DaGFuZ2VkJyArIGNhbWVsS2V5O1xuXG4gICAgICAgICAgICBjb21wb25lbnQuYXR0cnNbZXZGbk5hbWVdICYmIGNvbXBvbmVudC5hdHRyc1tldkZuTmFtZV0udHJpZ2dlcih2YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50W2ZuTmFtZV0gPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBjb21wb25lbnRbZm5OYW1lXSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoaXNCb29sZWFuQXR0cmlidXRlKSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gbm9kZS5fX2VsZW1lbnQ7XG4gICAgICAgIGxldCBhdHRyID0gdXRpbHMudG9DYW1lbENhc2UoY2xlYXJBdHRyaWJ1dGUpO1xuXG4gICAgICAgIHZhbHVlPyBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCAndHJ1ZScpOiBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgLyoqXG4gICAqIE5lc3RlZCBldmFsdWF0aW9uIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFt3aXRob3V0UGFyZW50cz1mYWxzZV0gLSBpZiB0cnVlIGV2YWx1YXRpb24gd2lsbCBiZSBvbmx5IGZvciB0aGUgY3VycmVudCBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVOZXN0ZWQoa2V5cywgd2l0aG91dFBhcmVudHMgPSBmYWxzZSkge1xuICAgIGxldCBzY29wZSA9IHRoaXMuX19zY29wZTtcbiAgICBsZXQgcHJvcHMgPSBbXTtcblxuICAgIGlmKCF3aXRob3V0UGFyZW50cykge1xuICAgICAgbGV0IGxhc3RQcm9wcyA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICBsZXQgdmFsdWU7XG5cbiAgICAgICAgbGFzdFByb3BzID0gWy4uLmxhc3RQcm9wcywga2V5XTtcbiAgICAgICAgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhsYXN0UHJvcHMsIHNjb3BlKTtcbiAgICAgICAgcHJvcHMucHVzaCh7IGtleXM6IGxhc3RQcm9wcywgdmFsdWU6IHZhbHVlfSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBwcm9wcy5wdXNoKHsga2V5czoga2V5cywgdmFsdWU6IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHNjb3BlKX0pXG4gICAgfVxuXG4gICAgbGV0IHByb3BzTGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gICAgbGV0IGVsRXZhbHVhdGUgPSAoZWxlbWVudCkgPT4ge1xuICAgICAgbGV0IGNvbXBvbmVudCA9IGVsZW1lbnQuX19ha2lsaTtcblxuICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCBwcm9wc0xlbmd0aDsgbSsrKSB7XG4gICAgICAgIGxldCBwcm9wID0gcHJvcHNbbV07XG4gICAgICAgIGxldCBkYXRhID0gY29tcG9uZW50Ll9fZ2V0QmluZChwcm9wLmtleXMpO1xuXG4gICAgICAgIGlmICghZGF0YSB8fCAhZGF0YS5fX2RhdGEpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGsgPSAwLCBjID0gZGF0YS5fX2RhdGEubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICAgICAgbGV0IGJpbmQgPSBkYXRhLl9fZGF0YVtrXTtcblxuICAgICAgICAgIGlmKGNvbXBvbmVudC5fX2NoZWNrTm9kZVByb3BlcnR5Q2hhbmdpbmcoYmluZC5ub2RlLCBwcm9wLmtleXMsIHByb3AudmFsdWUpKSB7XG4gICAgICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlUHJveHkgPSB0cnVlO1xuICAgICAgICAgICAgY29tcG9uZW50Ll9fZXZhbHVhdGVOb2RlKGJpbmQubm9kZSk7XG5cbiAgICAgICAgICAgIGZvcihsZXQgX2sgaW4gYmluZC5ub2RlLl9fcHJvcGVydGllcykge1xuICAgICAgICAgICAgICBpZighYmluZC5ub2RlLl9fcHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShfaykpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGxldCBfcHJvcCA9IGJpbmQubm9kZS5fX3Byb3BlcnRpZXNbX2tdO1xuICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhfcHJvcC5rZXlzLCBfcHJvcC5jb21wb25lbnQuX19zY29wZSk7XG5cbiAgICAgICAgICAgICAgX3Byb3AuY29tcG9uZW50Ll9fc2V0Tm9kZVByb3BlcnR5KGJpbmQubm9kZSwgX3Byb3Aua2V5cywgdmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlUHJveHkgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH07XG5cbiAgICBsZXQgZXZhbHVhdGUgPSAoZWxlbWVudHMpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBlbEV2YWx1YXRlKGVsZW1lbnRzW2ldKTtcblxuICAgICAgICBldmFsdWF0ZShjb21wb25lbnQuX19jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGVsRXZhbHVhdGUodGhpcy5lbCk7XG4gICAgZXZhbHVhdGUodGhpcy5fX2NoaWxkcmVuKTtcbiAgfTtcblxuICAvKipcbiAgICogRXZhbHVhdGUgdmFsdWUgYnkga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbaXNEZWxldGVkPWZhbHNlXSAtIHRydWUgaWYgdmFsdWUgaXMgZGVsZXRpbmdcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZUJ5S2V5cyhrZXlzLCB2YWx1ZSwgaXNEZWxldGVkID0gZmFsc2UpIHtcbiAgICBsZXQgZGF0YSA9IHRoaXMuX19nZXRCaW5kKGtleXMpO1xuXG4gICAgbGV0IHVuYmluZCA9IChvYmosIHBhcmVudHMpID0+IHtcbiAgICAgIGZvcihsZXQgayBpbiBvYmopIHtcbiAgICAgICAgaWYoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSB8fCBrID09ICdfX2RhdGEnKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgX2tleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tdKTtcbiAgICAgICAgbGV0IF9fa2V5cyA9IF9rZXlzLnNsaWNlKCk7XG4gICAgICAgIGxldCBfaXNEZWxldGVkID0gZmFsc2U7XG4gICAgICAgIGxldCB2YWwgPSBvYmpba107XG4gICAgICAgIGxldCBoYXNLZXk7XG5cbiAgICAgICAgX19rZXlzLnNoaWZ0KCk7XG4gICAgICAgIGhhc0tleSA9IHV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKF9fa2V5cywgdmFsdWUpO1xuXG4gICAgICAgIGlmKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JyAmJiAhaGFzS2V5KSB7XG4gICAgICAgICAgX2lzRGVsZXRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZih2YWwgJiYgdHlwZW9mIHZhbCA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHVuYmluZCh2YWwsIF9rZXlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX19ldmFsdWF0ZU5lc3RlZChfa2V5cywgdHJ1ZSk7XG5cbiAgICAgICAgaWYodmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8ICFoYXNLZXkpIHtcbiAgICAgICAgICB0aGlzLl9fdW5iaW5kKF9rZXlzKTtcbiAgICAgICAgICBfaXNEZWxldGVkICYmIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKF9fa2V5cywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGRhdGEgJiYgdW5iaW5kKGRhdGEsIFtdLmNvbmNhdChrZXlzKSk7XG4gICAgdGhpcy5fX2V2YWx1YXRlTmVzdGVkKGtleXMpO1xuXG4gICAgaWYoaXNEZWxldGVkKSB7XG4gICAgICB0aGlzLl9fdW5iaW5kKGtleXMpO1xuICAgICAgaXNEZWxldGVkICYmIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19zY29wZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIGV2ZW50IGV4cHJlc3Npb25cbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZUV2ZW50KG5vZGUsIGVsLCBlKSB7XG4gICAgbGV0IGV4cHJlc3Npb24gPSBldmFsdWF0aW9uUmVnZXguZXhlYyhub2RlLl9fZXhwcmVzc2lvbik7XG5cbiAgICBpZighZXhwcmVzc2lvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgICF3aW5kb3cuZXZlbnQgJiYgKHdpbmRvdy5ldmVudCA9IGUpO1xuXG4gICAgdGhpcy5fX2V2YWx1YXRpbmdFdmVudCA9IHtcbiAgICAgIGVsOiBlbCxcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIGV2ZW50OiBlLFxuICAgICAgbm9kZTogbm9kZVxuICAgIH07XG5cbiAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0gbnVsbDtcbiAgICB0aGlzLmNvbnN0cnVjdG9yLnBhcnNlKHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50LnNjb3BlLCBleHByZXNzaW9uWzFdKTtcbiAgICB0aGlzLl9fZXZhbHVhdGluZ0V2ZW50ID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBjaGFuZ2VzIGFuZCBldmFsdWF0ZSB0aGUgcGFzc2VkIG5vZGVcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVOb2RlKG5vZGUpIHtcbiAgICBpZih0aGlzLl9fY2hlY2tFdmFsdWF0aW9uKG5vZGUpKSB7XG4gICAgICBub2RlWyhub2RlIGluc3RhbmNlb2YgQXR0cik/ICd2YWx1ZSc6ICdub2RlVmFsdWUnXSA9IHRoaXMuX19ldmFsdWF0ZShub2RlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXR0cmlidXRlIG5vZGUgaW5pdGlhbGl6aW5nXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gYXR0cmlidXRlT2YgLSBpZiBub2RlIGlzIGxpbmtlZCB3aXRoIHBhcmVudCBzY29wZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemVBdHRyaWJ1dGUobm9kZSwgZWwsIGF0dHJpYnV0ZU9mKSB7XG4gICAgaWYoc3lzdGVtQXR0cmlidXRlcy5pbmRleE9mKG5vZGUubm9kZU5hbWUpICE9IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fX2luaXRpYWxpemVOb2RlKG5vZGUsIGVsKTtcblxuICAgIGxldCBldmVudE5hbWUgPSBub2RlLm5vZGVOYW1lLnJlcGxhY2UoL15vbi0oLispL2ksICckMScpO1xuICAgIGxldCBub2RlTmFtZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKG5vZGUubm9kZU5hbWUpO1xuICAgIGxldCBjb21wb25lbnQgPSBhdHRyaWJ1dGVPZj8gYXR0cmlidXRlT2Y6IHRoaXM7XG5cbiAgICBpZihldmVudE5hbWUgIT0gbm9kZS5ub2RlTmFtZSkge1xuICAgICAgaWYobm9kZS5fX2V2ZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGVtaXR0ZXIgPSBuZXcgQWtpbGkuRXZlbnRFbWl0dGVyKGV2ZW50TmFtZSwgZWwsIGNvbXBvbmVudCk7XG5cbiAgICAgIGlmKG5vZGUuX19leHByZXNzaW9uKSB7XG4gICAgICAgIGVtaXR0ZXIuYmluZCgoZSkgPT4ge1xuICAgICAgICAgIGNvbXBvbmVudC5fX2V2YWx1YXRlRXZlbnQobm9kZSwgZWwsIGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgbm9kZS5fX2V2ZW50ID0gZW1pdHRlcjtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShub2RlLm5vZGVOYW1lLCB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUoZW1pdHRlcikpO1xuXG4gICAgICBpZihhdHRyaWJ1dGVPZikge1xuICAgICAgICB0aGlzLl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IHRydWU7XG4gICAgICAgIHRoaXMuYXR0cnNbbm9kZU5hbWVdID0gZW1pdHRlcjtcbiAgICAgICAgdGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKGF0dHJpYnV0ZU9mKSB7XG4gICAgICBub2RlLl9fYXR0cmlidXRlT24gPSB0aGlzO1xuICAgICAgbm9kZS5fX2F0dHJpYnV0ZU9mID0gY29tcG9uZW50O1xuICAgIH1cblxuICAgIGVsLnNldEF0dHJpYnV0ZShub2RlLm5vZGVOYW1lLCBjb21wb25lbnQuX19ldmFsdWF0ZShub2RlKSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgbm9kZVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZU5vZGUobm9kZSwgZWwpIHtcbiAgICBpZihub2RlLl9faW5pdGlhbGl6ZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBub2RlLl9fZXhwcmVzc2lvbiA9IG5vZGVbKG5vZGUgaW5zdGFuY2VvZiBBdHRyKT8gJ3ZhbHVlJzogJ25vZGVWYWx1ZSddO1xuICAgIG5vZGUuX19wcm9wZXJ0aWVzID0ge307XG4gICAgbm9kZS5fX2F0dHJpYnV0ZU9mID0gbnVsbDtcbiAgICBub2RlLl9fYXR0cmlidXRlT24gPSBudWxsO1xuICAgIG5vZGUuX19ldmVudCA9IG51bGw7XG4gICAgbm9kZS5fX2hhc0JpbmRpbmdzID0gZmFsc2U7XG4gICAgbm9kZS5fX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICBub2RlLl9fY29tcG9uZW50ID0gdGhpcztcbiAgICBub2RlLl9fZWxlbWVudCA9IGVsO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJwb2xhdGUgYXR0cmlidXRlcyBvZiB0aGUgZWxlbWVudFxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gW2F0dHJpYnV0ZU9mPW51bGxdIC0gaWYgbm9kZSBpcyBsaW5rZWQgd2l0aCBwYXJlbnQgc2NvcGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXMoZWwsIGF0dHJpYnV0ZU9mID0gbnVsbCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBhdHRycyA9IGVsLmF0dHJpYnV0ZXMsIGwgPSBhdHRycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHRoaXMuX19pbml0aWFsaXplQXR0cmlidXRlKGF0dHJzW2ldLCBlbCwgYXR0cmlidXRlT2YpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmUgYXR0cmlidXRlcyBhcyBwcm94eVxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RlZmluZUF0dHJpYnV0ZXMoKSB7XG4gICAgbGV0IGNoYW5nZUF0dHJpYnV0ZSA9IChrZXksIHZhbHVlLCBpc0RlbGV0ZWQgPSBmYWxzZSkgPT4ge1xuICAgICAgaWYodGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgbm9kZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlTm9kZShrZXkpO1xuXG4gICAgICBpZihub2RlKSB7XG4gICAgICAgIGlmKG5vZGUuX19ldmVudCkge1xuICAgICAgICAgIG5vZGUuX19ldmVudC51bmJpbmQoKTtcbiAgICAgICAgICBub2RlLl9fZXZlbnQgPSBudWxsO1xuICAgICAgICAgIG5vZGUuX19leHByZXNzaW9uID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZihub2RlLl9faGFzQmluZGluZ3MpIHtcbiAgICAgICAgICB0aGlzLl9fcGFyZW50ICYmIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2V2YWx1YXRpb25Db21wb25lbnQuX191bmJpbmRCeU5vZGVzKFtub2RlXSk7XG4gICAgICAgICAgbm9kZS5fX2hhc0JpbmRpbmdzID0gZmFsc2U7XG4gICAgICAgICAgbm9kZS5fX2V4cHJlc3Npb24gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZihpc0RlbGV0ZWQpIHtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYobm9kZSkge1xuICAgICAgICBub2RlLm5vZGVWYWx1ZSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmF0dHJzID0gbmV3IFByb3h5KHRoaXMuX19hdHRycywge1xuICAgICAgZ2V0OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgaWYoa2V5ID09ICdfX2lzUHJveHknKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICB9LFxuICAgICAgc2V0OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBhdHRyS2V5ID0gdXRpbHMudG9EYXNoQ2FzZShrZXkpO1xuXG4gICAgICAgIGlmKHRoaXMuYm9vbGVhbkF0dHJpYnV0ZXMuaW5kZXhPZihhdHRyS2V5KSAhPSAtMSkge1xuICAgICAgICAgIGF0dHJLZXkgPSBgYm9vbGVhbi0ke2F0dHJLZXl9YDtcblxuICAgICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgIGNoYW5nZUF0dHJpYnV0ZShhdHRyS2V5LCB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUodmFsdWUpKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBkZWxldGVQcm9wZXJ0eTogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgYXR0cktleSA9IHV0aWxzLnRvRGFzaENhc2Uoa2V5KTtcblxuICAgICAgICBjaGFuZ2VBdHRyaWJ1dGUoYXR0cktleSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKHZhbHVlKSwgdHJ1ZSk7XG4gICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgcHJveHkgdG8gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcmV0dXJucyB7UHJveHl9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fb2JzZXJ2ZShvYmosIHBhcmVudHMpIHtcbiAgICByZXR1cm4gbmV3IFByb3h5KG9iaiwge1xuICAgICAgZ2V0OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgaWYgKGtleSA9PSBcIl9faXNQcm94eVwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IFwiX190YXJnZXRcIikge1xuICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IFwiX19jb21wb25lbnRcIikge1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PSBcIl9fa2V5c1wiKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudHM7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLl9fZGlzYWJsZVByb3h5KSB7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5fX2lzU3lzdGVtS2V5KGtleSkpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBpZih0eXBlb2YgdGFyZ2V0W2tleV0gPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGxldCByZWFsVGFyZ2V0ICA9IHV0aWxzLmdldE93blByb3BlcnR5VGFyZ2V0KHRhcmdldCwga2V5KTtcblxuICAgICAgICAgIGlmKCF1dGlscy5pc1BsYWluT2JqZWN0KHJlYWxUYXJnZXQpKSB7XG4gICAgICAgICAgICByZWFsVGFyZ2V0W2tleV0gPSBBa2lsaS5pc29sYXRlRnVuY3Rpb24ocmVhbFRhcmdldFtrZXldLCByZWFsVGFyZ2V0Ll9fY29tcG9uZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQWtpbGkuX19ldmFsdWF0aW9uKSB7XG4gICAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tleV0pO1xuICAgICAgICAgIGxldCBub3RCaW5kaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICBpZighKGtleSBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZighdXRpbHMuZ2V0RW51bWVyYWJsZVByb3BlcnR5VGFyZ2V0KHRhcmdldCwga2V5KSkge1xuICAgICAgICAgICAgbm90QmluZGluZyA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fX2JpbmROb2RlKEFraWxpLl9fZXZhbHVhdGlvbi5saXN0LCBrZXlzLCBwYXJlbnRzLCB0YXJnZXRba2V5XSwgbm90QmluZGluZyk7XG5cbiAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICB9LFxuICAgICAgc2V0OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGlmKHRoaXMuX19kaXNhYmxlUHJveHkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLl9faXNTeXN0ZW1LZXkoa2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrZXldKTtcblxuICAgICAgICBpZih0aGlzLl9fbmVzdGVkV2F0Y2hpbmcpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHRoaXMuX19uZXN0ZWRPYnNlcnZlKHZhbHVlLCBrZXlzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoQWtpbGkuX19pc29sYXRpb24pIHtcbiAgICAgICAgICB0aGlzLl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0KHBhcmVudHMsIGtleSwgZmFsc2UpO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLl9faXNNb3VudGVkKSB7XG4gICAgICAgICAgdGhpcy5fX2V2YWx1YXRlQnlLZXlzKGtleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tleV0pO1xuXG4gICAgICAgIGlmKHRoaXMuX19kaXNhYmxlUHJveHkpIHtcbiAgICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZihBa2lsaS5fX2lzb2xhdGlvbikge1xuICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgICB0aGlzLl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0KHBhcmVudHMsIGtleSwgdHJ1ZSk7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgdGhpcy5fX2V2YWx1YXRlQnlLZXlzKGtleXMsIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIGtleSBpcyBzeXN0ZW1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIF9faXNTeXN0ZW1LZXkgPSBmdW5jdGlvbihrZXkpIHtcbiAgICBpZihrZXkgPT0gJ19fJyB8fCAoa2V5WzBdID09ICdfJyAmJiBrZXlbMV0gPT0gJ18nKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYoWydjb25zdHJ1Y3RvciddLmluZGV4T2Yoa2V5KSAhPSAtMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBOZXN0ZWQgb2JzZXJ2aW5nIHRoZSB2YWx1ZVxuICAgKlxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IFtzdGFydEtleXNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fbmVzdGVkT2JzZXJ2ZSAodmFsdWUsIHN0YXJ0S2V5cykge1xuICAgIHRoaXMuX19kaXNhYmxlUHJveHkgPSB0cnVlO1xuXG4gICAgbGV0IG9ic2VydmUgPSAodmFsdWUsIHBhcmVudHMpID0+IHtcbiAgICAgIGlmKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmKCF1dGlscy5pc1BsYWluT2JqZWN0KHZhbHVlKSAmJiAhdXRpbHMuaXNTY29wZVByb3h5KHZhbHVlKSAmJiAhKHZhbHVlIGluc3RhbmNlb2YgQWtpbGkuU2NvcGUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IHRhcmdldCA9IHZhbHVlO1xuXG4gICAgICBpZih2YWx1ZS5fX2lzUHJveHkpIHtcbiAgICAgICAgdGFyZ2V0ID0gdmFsdWUuX190YXJnZXQ7XG5cbiAgICAgICAgaWYoIXRoaXMuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nKSB7XG4gICAgICAgICAgaWYodmFsdWUuX19jb21wb25lbnQgIT09IHRoaXMpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IHV0aWxzLmNvcHkodGFyZ2V0LCBmYWxzZSk7XG4gICAgICAgICAgICB2YWx1ZSA9IHRhcmdldDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZihBa2lsaS5qb2luQmluZGluZ0tleXMocGFyZW50cykgIT0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKHZhbHVlLl9fa2V5cykpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGFyZ2V0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IobGV0IGsgaW4gdGFyZ2V0KSB7XG4gICAgICAgIGlmICghdGFyZ2V0Lmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmFsID0gdGFyZ2V0W2tdO1xuICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba10pO1xuXG4gICAgICAgIHRhcmdldFtrXSA9IG9ic2VydmUodmFsLCBrZXlzKTtcbiAgICAgIH1cblxuICAgICAgaWYoIXZhbHVlLl9faXNQcm94eSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX29ic2VydmUodGFyZ2V0LCBwYXJlbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG5cbiAgICBsZXQgcmVzID0gb2JzZXJ2ZSh2YWx1ZSwgc3RhcnRLZXlzIHx8IFtdKTtcblxuICAgIHRoaXMuX19kaXNhYmxlUHJveHkgPSBudWxsO1xuXG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlIGlzb2xhdGlvbiBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVsZXRlZD1mYWxzZV1cbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0IChwYXJlbnRzLCBrZXksIGlzRGVsZXRlZCA9IGZhbHNlKSB7XG4gICAgbGV0IGtleXMgPSBwYXJlbnRzLmxlbmd0aD8gW3BhcmVudHNbMF1dOiBba2V5XTtcbiAgICBsZXQgaXNvbGF0aW9uS2V5ID0gYCR7dGhpcy5fX3Njb3BlLl9fbmFtZX0uJHtBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyl9YDtcblxuICAgIGlmKHBhcmVudHMubGVuZ3RoKSB7XG4gICAgICBpc0RlbGV0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZighQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uS2V5XSkge1xuICAgICAgQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uS2V5XSA9IHtcbiAgICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgICBrZXlzOiBrZXlzXG4gICAgICB9O1xuICAgIH1cblxuICAgIChpc0RlbGV0ZWQgIT09IHVuZGVmaW5lZCkgJiYgKEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV0uaXNEZWxldGVkID0gaXNEZWxldGVkKTtcbiAgICBBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25LZXldLnZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKTtcblxuICAgIHJldHVybiBBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25LZXldO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcmVwYXJlIHRoZSBub2RlIHRvIGJpbmRpbmdcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGJpbmQgLSBieSBkZWZhdWx0IGlzIGNvbXBvbmVudC5fX2V2YWx1YXRpb24ubGlzdFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHBhcmVudHNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtub3RCaW5kaW5nPWZhbHNlXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2JpbmROb2RlKGJpbmQsIGtleXMsIHBhcmVudHMsIHZhbHVlLCBub3RCaW5kaW5nID0gZmFsc2UpIHtcbiAgICBsZXQgcGFyZW50S2V5c1N0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhwYXJlbnRzKTtcblxuICAgIGlmKGJpbmQubGVuZ3RoICYmICFub3RCaW5kaW5nKSB7XG4gICAgICBsZXQgbCA9IGJpbmQubGVuZ3RoIC0gMTtcbiAgICAgIGxldCBkYXRhID0gYmluZFtsXTtcblxuICAgICAgaWYoZGF0YS5rZXlzU3RyaW5nID09IHBhcmVudEtleXNTdHJpbmcgJiYgZGF0YS5jb21wb25lbnQgPT09IHRoaXMpIHtcbiAgICAgICAgYmluZC5zcGxpY2UobCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYmluZC5wdXNoKHtcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIGtleXNTdHJpbmc6IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKSxcbiAgICAgIHBhcmVudHM6IHBhcmVudHMsXG4gICAgICBrZXlzOiBrZXlzLFxuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgbm90QmluZGluZzogbm90QmluZGluZ1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgYmluZGluZyBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldEJpbmQoa2V5cykge1xuICAgIHJldHVybiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MpIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGJpbmRpbmcgYnkga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0Qm91bmROb2RlKGtleXMsIG5vZGUpIHtcbiAgICBsZXQgYmluZCA9ICB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MpO1xuXG4gICAgaWYoIWJpbmQgfHwgIWJpbmQuX19kYXRhIHx8ICFiaW5kLl9fZGF0YS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBiaW5kLl9fZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBkYXRhID0gYmluZC5fX2RhdGFbaV07XG5cbiAgICAgIGlmKGRhdGEubm9kZSA9PT0gbm9kZSkge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgbm9kZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzLCB2YWx1ZSkge1xuICAgIGxldCBwcm9wID0gdGhpcy5fX2dldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKTtcbiAgICBsZXQgY29weSA9IHV0aWxzLmNvcHkodmFsdWUpO1xuXG4gICAgaWYocHJvcCkge1xuICAgICAgbGV0IHJlcyA9IHV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlKHZhbHVlLCBwcm9wLnZhbHVlLCBwcm9wLmNvcHksIGNvcHkpO1xuXG4gICAgICBwcm9wLnZhbHVlID0gdmFsdWU7XG4gICAgICBwcm9wLmNvcHkgPSBjb3B5O1xuXG4gICAgICByZXR1cm4gIXJlcztcbiAgICB9XG5cbiAgICBsZXQgaGFzaCA9IGAke3RoaXMuX19zY29wZS5fX25hbWV9LiR7QWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpfWA7XG5cbiAgICBub2RlLl9fcHJvcGVydGllc1toYXNoXSA9IHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGNvcHk6IGNvcHksXG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICBrZXlzOiBrZXlzXG4gICAgfTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBub2RlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cykge1xuICAgIGxldCBoYXNoID0gYCR7dGhpcy5fX3Njb3BlLl9fbmFtZX0uJHtBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyl9YDtcblxuICAgIHJldHVybiBub2RlLl9fcHJvcGVydGllc1toYXNoXSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBub2RlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVsZXRlTm9kZVByb3BlcnR5KG5vZGUsIGtleXMpIHtcbiAgICBsZXQgaGFzaCA9IGAke3RoaXMuX19zY29wZS5fX25hbWV9LiR7QWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpfWA7XG5cbiAgICBkZWxldGUgbm9kZS5fX3Byb3BlcnRpZXNbaGFzaF07XG4gIH1cblxuICAvKipcbiAgICogQmluZCBkYXRhIHdpdGggdGhlIGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2JpbmQoa2V5cywgZGF0YSkge1xuICAgIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncywgKGxhc3QsIHZhbHVlKSA9PiB7XG4gICAgICBsZXQgb2JqID0ge19fZGF0YTogW119O1xuXG4gICAgICBpZighbGFzdCkge1xuICAgICAgICByZXR1cm4gdmFsdWU/IHZhbHVlOiBvYmo7XG4gICAgICB9XG5cbiAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgICAgICBvYmogPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYoIW9iai5fX2RhdGEpIHtcbiAgICAgICAgb2JqLl9fZGF0YSA9IFtdO1xuICAgICAgfVxuXG4gICAgICBvYmouX19kYXRhLnB1c2goZGF0YSk7XG5cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYmluZChrZXlzKSB7XG4gICAgbGV0IGJpbmQgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MpO1xuXG4gICAgaWYoIWJpbmQgfHwgIWJpbmQuX19kYXRhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGJpbmQuX19kYXRhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG5vZGUgPSBiaW5kLl9fZGF0YVtpXS5ub2RlO1xuXG4gICAgICB0aGlzLl9fZGVsZXRlTm9kZVByb3BlcnR5KG5vZGUsIGtleXMpO1xuICAgIH1cblxuICAgIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncywgKHZhbHVlKSA9PiB7XG4gICAgICBpZihPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID4gMSkge1xuICAgICAgICB2YWx1ZS5fX2RhdGEgPSBbXTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCBieSBub2Rlc1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGVbXX0gbm9kZXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmJpbmRCeU5vZGVzKG5vZGVzKSB7XG4gICAgbGV0IHVuYmluZCA9IChvYmopID0+IHtcbiAgICAgIGZvcihsZXQgayBpbiBvYmopIHtcbiAgICAgICAgaWYoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoayA9PSAnX19kYXRhJykge1xuICAgICAgICAgIGxldCBkYXRhID0gb2JqW2tdIHx8IFtdO1xuICAgICAgICAgIGxldCBsID0gZGF0YS5sZW5ndGg7XG5cbiAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYmluZCA9IGRhdGFbaV07XG5cbiAgICAgICAgICAgIGlmKG5vZGVzLmluZGV4T2YoYmluZC5ub2RlKSAhPSAtMSkge1xuICAgICAgICAgICAgICBkYXRhLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICBsLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYoIWwpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmpba107XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHVuYmluZChvYmpba10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHVuYmluZCh0aGlzLl9fYmluZGluZ3MpO1xuICAgIHRoaXMuX19jbGVhckVtcHR5QmluZGluZ3MoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbGwgZW1wdHkgYmluZGluZ3NcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvYmpdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2xlYXJFbXB0eUJpbmRpbmdzKG9iaikge1xuICAgIGxldCBjbGVhciA9IChvYmosIHBhcmVudCwga2V5KSA9PiB7XG4gICAgICBmb3IobGV0IGsgaW4gb2JqKSB7XG4gICAgICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2YWwgPSBvYmpba107XG5cbiAgICAgICAgaWYoayA9PSAnX19kYXRhJyAmJiAoIXZhbCB8fCAhdmFsLmxlbmd0aCkpIHtcbiAgICAgICAgICBkZWxldGUgb2JqW2tdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoayAhPSAnX19kYXRhJykge1xuICAgICAgICAgIGlmKCFPYmplY3Qua2V5cyhvYmpba10pLmxlbmd0aCkge1xuICAgICAgICAgICAgZGVsZXRlIG9ialtrXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjbGVhcihvYmpba10sIG9iaiwgayk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKCFPYmplY3Qua2V5cyhvYmopLmxlbmd0aCAmJiBwYXJlbnQpIHtcbiAgICAgICAgZGVsZXRlIHBhcmVudFtrZXldO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjbGVhcihvYmogfHwgdGhpcy5fX2JpbmRpbmdzKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgY2hpbGQgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlbW92ZUNoaWxkcmVuKCkge1xuICAgIGxldCByZW1vdmUgPSAoY2hpbGRyZW4pID0+IHtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcblxuICAgICAgICByZW1vdmUoY2hpbGQuX19ha2lsaS5fX2NoaWxkcmVuKTtcbiAgICAgICAgY2hpbGQuX19ha2lsaS5fX3JlbW92ZSgpO1xuICAgICAgICBpLS07XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJlbW92ZSh0aGlzLl9fY2hpbGRyZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgY29tcG9uZW50IHdpdGhvdXQgY2hpbGRyZW4gcmVtb3ZpbmdcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZW1vdmUoKSB7XG4gICAgdGhpcy5fX2RldGFjaCgpO1xuICAgIHRoaXMuYXR0cnMub25SZW1vdmVkICYmIHRoaXMuYXR0cnMub25SZW1vdmVkLnRyaWdnZXIoKTtcbiAgICB0aGlzLnJlbW92ZWQoKTtcbiAgICBBa2lsaS5yZW1vdmVTY29wZSh0aGlzLl9fc2NvcGUuX19uYW1lKTtcbiAgICB0aGlzLmVsLnJlbW92ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGFjaCB0aGUgY29tcG9uZW50XG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGV0YWNoKCkge1xuICAgIGlmKHRoaXMuX19ldmFsdWF0ZVBhcmVudCAmJiAhdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzKSB7XG4gICAgICB0aGlzLl9fZXZhbHVhdGVQYXJlbnQuX19ha2lsaS5fX3VuYmluZEJ5Tm9kZXMoW10uc2xpY2UuY2FsbCh0aGlzLmVsLmF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbiAgICBpZih0aGlzLl9fcGFyZW50KSB7XG4gICAgICB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19zcGxpY2VDaGlsZCh0aGlzLmVsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBjb21wb25lbnQgd2l0aCBjaGlsZHJlblxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2Rlc3Ryb3koKSB7XG4gICAgdGhpcy5fX3JlbW92ZUNoaWxkcmVuKCk7XG4gICAgdGhpcy5fX3JlbW92ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBjb21wb25lbnQgaHRtbFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2VtcHR5KCkge1xuICAgIGxldCBub2RlcyA9IFtdO1xuXG4gICAgdGhpcy5fX3JlbW92ZUNoaWxkcmVuKCk7XG5cbiAgICBsZXQgZmluZCA9IChjaGlsZHJlbikgPT4ge1xuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcblxuICAgICAgICBpZihjaGlsZC5ub2RlVHlwZSA9PSAzKSB7XG4gICAgICAgICAgbm9kZXMucHVzaChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihjaGlsZC5ub2RlVHlwZSA9PSAxICYmICFjaGlsZC5fX2FraWxpKSB7XG4gICAgICAgICAgZm9yIChsZXQgayA9IDAsIGF0dHJzID0gY2hpbGQuYXR0cmlidXRlcywgYyA9IGF0dHJzLmxlbmd0aDsgayA8IGM7IGsrKykge1xuICAgICAgICAgICAgbm9kZXMucHVzaChhdHRyc1tpXSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZmluZChjaGlsZC5jaGlsZE5vZGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBmaW5kKHRoaXMuZWwuY2hpbGROb2Rlcyk7XG4gICAgdGhpcy5fX3VuYmluZEJ5Tm9kZXMobm9kZXMpO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHBhcmVudCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZpbmRBbGw9dHJ1ZV0gLSBnZXQgYXJyYXkgaWYgdHJ1ZVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVsc11cbiAgICogQHJldHVybnMge0NvbXBvbmVudHxDb21wb25lbnRbXX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRQYXJlbnQoc2VsZWN0b3IgPSAnJywgZmluZEFsbCA9IGZhbHNlLCBsZXZlbHMpIHtcbiAgICBsZXQgYXJyID0gW107XG4gICAgbGV0IGxldmVsID0gMDtcblxuICAgIGlmKGxldmVscyAhPT0gdW5kZWZpbmVkICYmICFBcnJheS5pc0FycmF5KGxldmVscykpIHtcbiAgICAgIGxldmVscyA9IFtsZXZlbHNdO1xuICAgIH1cblxuICAgIGxldCBmaW5kID0gKHBhcmVudCkgPT4ge1xuICAgICAgaWYoIXBhcmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmKCFsZXZlbHMgfHwgbGV2ZWxzLmluZGV4T2YobGV2ZWwpICE9IC0xKSB7XG4gICAgICAgIGlmICghc2VsZWN0b3IgfHwgcGFyZW50Ll9fYWtpbGkubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICBpZiAoIWZpbmRBbGwpIHtcbiAgICAgICAgICAgIGFyci5wdXNoKHBhcmVudC5fX2FraWxpKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFyci5wdXNoKHBhcmVudC5fX2FraWxpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXZlbCsrO1xuICAgICAgZmluZChwYXJlbnQuX19ha2lsaS5fX3BhcmVudCk7XG4gICAgfTtcblxuICAgIGZpbmQodGhpcy5fX3BhcmVudCk7XG5cbiAgICByZXR1cm4gZmluZEFsbD8gYXJyOiAoYXJyWzBdIHx8IG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjaGlsZCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZpbmRBbGw9dHJ1ZV0gLSBnZXQgYXJyYXkgaWYgdHJ1ZVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVsc11cbiAgICogQHJldHVybnMge0NvbXBvbmVudHxDb21wb25lbnRbXX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRDaGlsZHJlbihzZWxlY3RvciA9ICcnLCBmaW5kQWxsID0gdHJ1ZSwgbGV2ZWxzKSB7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGxldCBsZXZlbCA9IDA7XG5cbiAgICBpZihsZXZlbHMgIT09IHVuZGVmaW5lZCAmJiAhQXJyYXkuaXNBcnJheShsZXZlbHMpKSB7XG4gICAgICBsZXZlbHMgPSBbbGV2ZWxzXTtcbiAgICB9XG5cbiAgICBsZXQgZmluZCA9IChjaGlsZHJlbikgPT4ge1xuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcblxuICAgICAgICBpZighbGV2ZWxzIHx8IGxldmVscy5pbmRleE9mKGxldmVsKSAhPSAtMSkge1xuICAgICAgICAgIGlmKCFzZWxlY3RvciB8fCBjaGlsZC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICBpZighZmluZEFsbCkge1xuICAgICAgICAgICAgICBhcnIucHVzaChjaGlsZC5fX2FraWxpKTtcblxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFyci5wdXNoKGNoaWxkLl9fYWtpbGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXZlbCsrO1xuXG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGZpbmQoY2hpbGRyZW5baV0uX19ha2lsaS5fX2NoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmluZCh0aGlzLl9fY2hpbGRyZW4pO1xuXG4gICAgcmV0dXJuIGZpbmRBbGw/IGFycjogKGFyclswXSB8fCBudWxsKVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBuZWFyZXN0IGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JpZ2h0PWZhbHNlXSAtIGZyb20gdGhlIHJpZ2h0IHNpZGUgaWYgdHJ1ZVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldE5lYXIoc2VsZWN0b3IgPSAnJywgZmluZEFsbCA9IHRydWUsIHJpZ2h0ID0gZmFsc2UpIHtcbiAgICBpZighdGhpcy5fX3BhcmVudCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGxldmVsRWxlbWVudHMgPSB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19jaGlsZHJlbi5zbGljZSgpO1xuICAgIGxldCBhcnIgPSBbXTtcblxuICAgIHJpZ2h0ICYmIGxldmVsRWxlbWVudHMucmV2ZXJzZSgpO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGxldmVsRWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgZWwgPSBsZXZlbEVsZW1lbnRzW2ldO1xuXG4gICAgICBpZihlbCA9PT0gdGhpcy5lbCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYoIXNlbGVjdG9yIHx8IGVsLl9fYWtpbGkubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgYXJyLnB1c2goZWwuX19ha2lsaSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhcnIucmV2ZXJzZSgpO1xuXG4gICAgaWYoIWZpbmRBbGwpIHtcbiAgICAgIHJldHVybiBhcnIubGVuZ3RoPyBhcnJbMF06IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgY29tcG9uZW50IG1hdGNoZXMgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IHNlbGVjdG9yXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgbWF0Y2hlcyhzZWxlY3Rvcikge1xuICAgIGlmKHR5cGVvZiBzZWxlY3RvciA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3IodGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZWwubWF0Y2hlcyhzZWxlY3Rvcik7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNsb3Nlc3QgcGFyZW50IGNvbXBvbmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVsc11cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIHBhcmVudChzZWxlY3RvciA9ICcnLCBsZXZlbHMpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldFBhcmVudChzZWxlY3RvciwgZmFsc2UsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFycmF5IG9mIHBhcmVudCBjb21wb25lbnRzIGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBwYXJlbnRzKHNlbGVjdG9yID0gJycsIGxldmVscykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0UGFyZW50KHNlbGVjdG9yLCB0cnVlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IGNoaWxkIGNvbXBvbmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVsc11cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIGNoaWxkKHNlbGVjdG9yID0gJycsIGxldmVscykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0Q2hpbGRyZW4oc2VsZWN0b3IsIGZhbHNlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBjaGlsZCBjb21wb25lbnRzIGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBjaGlsZHJlbihzZWxlY3RvciA9ICcnLCBsZXZlbHMpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldENoaWxkcmVuKHNlbGVjdG9yLCB0cnVlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBjb21wb25lbnRzIGxlZnQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBiZWZvcmUoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgdHJ1ZSwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBjb21wb25lbnRzIHJpZ2h0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgYWZ0ZXIoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgdHJ1ZSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNsb3Nlc3QgY29tcG9uZW50IGxlZnQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgcHJldihzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCBmYWxzZSwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IGNvbXBvbmVudCByaWdodCBmcm9tIHRoZSBjdXJyZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR9XG4gICAqL1xuICBuZXh0KHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIGZhbHNlLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgZWxlbWVudCBwYXJlbnRcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50XG4gICAqL1xuICBhcHBlbmRUbyhwYXJlbnQpIHtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG5cbiAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW5jZWwgY29tcG9uZW50IGNvbXBpbGF0aW9uXG4gICAqL1xuICBjYW5jZWwoKSB7XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgZWxlbWVudCBodG1sXG4gICAqXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgZW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19lbXB0eS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBlbGVtZW50XG4gICAqXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgcmVtb3ZlKCkge1xuICAgIHJldHVybiB0aGlzLl9fZGVzdHJveS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHt9XG4gIGNvbXBpbGVkKCkge31cbiAgcmVjb21waWxlZCgpIHt9XG4gIGNoYW5nZWQoa2V5LCB2YWx1ZSkge31cbiAgcmVzb2x2ZWQoKSB7fVxuICByZW1vdmVkKCkge31cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudC5qcyIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyJ1xuXG5jb25zdCB1dGlscyA9IHt9O1xuXG4vKipcbiAqIENyZWF0ZSBjbGFzcyBhdHRyaWJ1dGUgZnJvbSBhbiBvYmplY3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcInJlZCBhY3RpdmVcIlxuICogdXRpbHMuY2xhc3Moe3JlZDogdHJ1ZSwgYWN0aXZlOiB0cnVlLCBncmVlbjogZmFsc2V9KTtcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5jbGFzcyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGxldCBjbGFzc2VzID0gW107XG5cbiAgZm9yKGxldCBrIGluIG9iaikge1xuICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGxldCB2YWwgPSBvYmpba107XG5cbiAgICB2YWwgJiYgY2xhc3Nlcy5wdXNoKGspO1xuICB9XG5cbiAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgc3R5bGUgYXR0cmlidXRlIGZyb20gYW4gb2JqZWN0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJjb2xvcjpyZWQ7d2lkdGg6MTBweFwiXG4gKiB1dGlscy5zdHlsZSh7Y29sb3I6IFwicmVkXCIsIGJhY2tncm91bmQ6IGZhbHNlLCB3aWR0aDogXCIxMHB4XCJ9KTtcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5zdHlsZSA9IGZ1bmN0aW9uKG9iaikge1xuICBpZighb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgbGV0IHN0eWxlcyA9IFtdO1xuXG4gIGZvcihsZXQgayBpbiBvYmopIHtcbiAgICBpZighb2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBsZXQgdmFsID0gb2JqW2tdO1xuXG4gICAgdmFsICYmIHN0eWxlcy5wdXNoKGAke3RoaXMudG9EYXNoQ2FzZShrKX06JHt2YWx9YCk7XG4gIH1cblxuICByZXR1cm4gc3R5bGVzLmpvaW4oJzsnKTtcbn07XG5cbi8qKlxuICogRmlsdGVyIGFuIGFycmF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWzEsIDExXVxuICogdXRpbHMuZmlsdGVyKFsxLCAyLCAzLCAxMV0sICcxJyk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OjF9LCB7eDoxMX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OjF9LCB7eDoyfSwge3g6M30sIHt4OjExfV0sICcxJywgWyd4J10pO1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfGZ1bmN0aW9ufSBoYW5kbGVyIC0gdHlwZSBvZiBmaWx0ZXJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nW118c3RyaW5nfSBba2V5c10gLSBmaWx0ZXIgaW4gdGhlIGtleXMgaWYgYXJyYXkgZWxlbWVudHMgYXJlIG9iamVjdFxuICogQHJldHVybnMge0FycmF5fSAtIHJldHVybnMgb3RoZXIgYXJyYXlcbiAqL1xudXRpbHMuZmlsdGVyID0gZnVuY3Rpb24gKGFyciwgaGFuZGxlciwga2V5cyA9IFtdKSB7XG4gIGxldCByZXMgPSBbXTtcblxuICBpZighQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgIGtleXMgPSBba2V5c107XG4gIH1cblxuICBpZighaGFuZGxlcikge1xuICAgIHJldHVybiBbLi4uYXJyXTtcbiAgfVxuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGl0ZW0gPSBhcnJbaV07XG4gICAgbGV0IHZhbCA9IGtleXMubGVuZ3RoPyB0aGlzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIGl0ZW0pOiBpdGVtO1xuXG4gICAgaWYoIXZhbCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFsICs9ICcnO1xuXG4gICAgaWYoKHR5cGVvZiBoYW5kbGVyID09ICdmdW5jdGlvbicpICYmIGhhbmRsZXIoaXRlbSkpIHtcbiAgICAgIHJlcy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICBlbHNlIGlmKHZhbC5tYXRjaChoYW5kbGVyIHx8ICcnKSkge1xuICAgICAgcmVzLnB1c2goaXRlbSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogT3JkZXIgYW4gYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMSwgMiwgM11cbiAqIHV0aWxzLnNvcnQoWzMsIDIsIDFdLCB0cnVlKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMywgMiwgMV1cbiAqIHV0aWxzLnNvcnQoWzEsIDIsIDNdLCBmYWxzZSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dXG4gKiB1dGlscy5zb3J0KFt7eDogM30sIHt4OiAyfSwge3g6IDF9XSwgW1sneCddXSwgW3RydWVdKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCBbJ3gnXSwgdHJ1ZSk7XG4gKiB1dGlscy5zb3J0KFt7eDogM30sIHt4OiAyfSwge3g6IDF9XSwgJ3gnKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dLCBbWyd4J11dLCBbZmFsc2VdKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dLCBbJ3gnXSwgZmFsc2UpO1xuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sICd4JywgZmFsc2UpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMSwgeTogM30sIHt4OiAyLCB5OiAxfSwge3g6MiwgeTogMn1dXG4gKiB1dGlscy5zb3J0KFt7eDogMiwgeTogMn0sIHt4OiAyLCB5OiAxfSwge3g6IDIsIHk6IDN9XSwgW1sneCddLCBbJ3knXV0sIFt0cnVlLCB0cnVlXSk7XG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0ge2Jvb2xlYW58QXJyYXlbXXxzdHJpbmdbXXxzdHJpbmd9IFtrZXlzXVxuICogQHBhcmFtIHtib29sZWFufGJvb2xlYW5bXX0gW29yZGVyXSAtIHJldmVyc2Ugb3Igbm90XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbnV0aWxzLnNvcnQgPSBmdW5jdGlvbihhcnIsIGtleXMgPSB0cnVlLCBvcmRlciA9IFtdKSB7XG4gIGFyciA9IFsuLi5hcnJdO1xuXG4gIGlmKGtleXMgPT09IHRydWUpIHtcbiAgICBrZXlzID0gW107XG4gICAgb3JkZXIgPSBbdHJ1ZV07XG4gIH1cbiAgZWxzZSBpZihrZXlzID09PSBmYWxzZSkge1xuICAgIGtleXMgPSBbXTtcbiAgICBvcmRlciA9IFtmYWxzZV07XG4gIH1cblxuICBpZighQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgIGtleXMgPSBba2V5c107XG4gIH1cblxuICBpZighQXJyYXkuaXNBcnJheShvcmRlcikpIHtcbiAgICBvcmRlciA9IFtvcmRlcl07XG4gIH1cblxuICBsZXQgbCA9IGtleXMubGVuZ3RoO1xuXG4gIGFyci5zb3J0KChhLCBiKSA9PiB7XG4gICAgbGV0IGkgPSAwO1xuXG4gICAgbGV0IGNoZWNrID0gKGEsIGIsIHJldmVyc2UgPSBmYWxzZSkgPT4ge1xuICAgICAgaWYoYSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgYSA9IGEuZ2V0VGltZSgpO1xuICAgICAgfVxuXG4gICAgICBpZihiIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBiID0gYi5nZXRUaW1lKCk7XG4gICAgICB9XG5cbiAgICAgIGlmKGEgPiBiKSB7XG4gICAgICAgIHJldHVybiByZXZlcnNlPyAtMTogMTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoYSA8IGIpIHtcbiAgICAgICAgcmV0dXJuIHJldmVyc2U/IDE6IC0xO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgICB9O1xuXG4gICAgbGV0IG5leHQgPSAoKSA9PiB7XG4gICAgICBpZihpID49IGwpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG5cbiAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZighQXJyYXkuaXNBcnJheShrZXkpKSB7XG4gICAgICAgIGtleSA9IFtrZXldO1xuICAgICAgfVxuXG4gICAgICBsZXQgYVYgPSB0aGlzLmdldFByb3BlcnR5QnlLZXlzKGtleSwgYSk7XG4gICAgICBsZXQgYlYgPSB0aGlzLmdldFByb3BlcnR5QnlLZXlzKGtleSwgYik7XG4gICAgICBsZXQgcmVzID0gY2hlY2soYVYsIGJWLCBvcmRlcltpXSA9PT0gZmFsc2UpO1xuXG4gICAgICBpZihyZXMgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1cblxuICAgICAgaSsrO1xuXG4gICAgICByZXR1cm4gbmV4dCgpO1xuICAgIH07XG5cbiAgICBpZighbCkge1xuICAgICAgcmV0dXJuIGNoZWNrKGEsIGIsIG9yZGVyW2ldID09PSBmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIHZhbHVlIGlzIGNvbXBvbmVudCBzY29wZSBwcm94eSBvYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmlzU2NvcGVQcm94eSA9IGZ1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gISEodmFsICYmIHR5cGVvZiB2YWwgPT0gJ29iamVjdCcgJiYgdmFsLl9faXNQcm94eSk7XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSB2YWx1ZSBpcyBwbGFpbiBvYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmlzUGxhaW5PYmplY3QgPSBmdW5jdGlvbihvYmopIHtcbiAgcmV0dXJuICEhKG9iaiAmJiB0eXBlb2Ygb2JqID09ICdvYmplY3QnICYmIChvYmouY29uc3RydWN0b3IgPT0gT2JqZWN0IHx8IG9iai5jb25zdHJ1Y3RvciA9PSBBcnJheSkpO1xufTtcblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZVxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW25lc3RlZD10cnVlXSAtIGRlZXAgY29weSBpZiBpcyB0cnVlXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuY29weSA9IGZ1bmN0aW9uKHZhbHVlLCBuZXN0ZWQgPSB0cnVlKSB7XG4gIGlmKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCAhdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBmdW5jdGlvbiBuZXh0KG9iaikge1xuICAgIG9iaiA9IEFycmF5LmlzQXJyYXkob2JqKT8gWy4uLm9ial06IHsuLi5vYmp9O1xuXG4gICAgaWYoIW5lc3RlZCkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBmb3IobGV0IGsgaW4gb2JqKSB7XG4gICAgICBpZighb2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZihvYmpba10gJiYgdHlwZW9mIG9ialtrXSA9PSAnb2JqZWN0Jykge1xuICAgICAgICBvYmpba10gPSBuZXh0KG9ialtrXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHJldHVybiBuZXh0KHZhbHVlKTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHRoZSB2YWx1ZSB0byBhdHRyaWJ1dGUgYXBwcm9wcmlhdGUgZm9ybWF0XG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGlmKHZhbHVlID09PSBmYWxzZSB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYodmFsdWUgaW5zdGFuY2VvZiBFdmVudEVtaXR0ZXIpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgRXZlbnRdJztcbiAgfVxuXG4gIGlmKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG4gIH1cblxuICBpZih0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZSArICcnO1xufTtcblxuLyoqXG4gKiBDb21wYXJlIHR3byB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0geyp9IGFcbiAqIEBwYXJhbSB7Kn0gYlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmNvbXBhcmUgPSBmdW5jdGlvbiAoYSwgYikge1xuICBpZigoYSBpbnN0YW5jZW9mIERhdGUpICYmIChiIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICByZXR1cm4gYS5nZXRUaW1lKCkgPT09IGIuZ2V0VGltZSgpO1xuICB9XG4gIGlmKHR5cGVvZiBhID09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGIgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBhLnRvU3RyaW5nKCkgPT09IGIudG9TdHJpbmcoKTtcbiAgfVxuICBlbHNlIGlmKHR5cGVvZiBhID09ICdvYmplY3QnICYmIHR5cGVvZiBiID09ICdvYmplY3QnKSB7XG4gICAgaWYoYSA9PT0gbnVsbCB8fCBiID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gYSA9PT0gYjtcbiAgICB9XG5cbiAgICBpZihPYmplY3Qua2V5cyhhKS5sZW5ndGggIT0gT2JqZWN0LmtleXMoYikubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yKGxldCBrIGluIGEpIHtcbiAgICAgIGlmKCFhLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZighdGhpcy5jb21wYXJlKGFba10sIGJba10pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBhID09PSBiO1xufTtcblxuLyoqXG4gKiBDb21wYXJlIGN1cnJlbnQgdmFsdWUgd2l0aCBwcmV2aW91c1xuICpcbiAqIEBwYXJhbSB7Kn0gY3VycmVudCAtIHRoZSBjdXJyZW50IHZhbHVlXG4gKiBAcGFyYW0geyp9IHByZXZpb3VzIC0gdGhlIGN1cnJlbnQgdmFsdWUgY29weVxuICogQHBhcmFtIHsqfSBwcmV2aW91c0NvcHkgLSB0aGUgcHJldmlvdXMgdmFsdWUgY29weVxuICogQHBhcmFtIHsqfSBbY3VycmVudENvcHldIC0gdGhlIGN1cnJlbnQgdmFsdWUgY29weVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlID0gZnVuY3Rpb24oY3VycmVudCwgcHJldmlvdXMsIHByZXZpb3VzQ29weSwgY3VycmVudENvcHkpIHtcbiAgaWYoY3VycmVudCAhPT0gcHJldmlvdXMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdGhpcy5jb21wYXJlKGFyZ3VtZW50cy5sZW5ndGggPT0gMz8gY3VycmVudENvcHk6IHRoaXMuY29weShjdXJyZW50KSwgcHJldmlvdXNDb3B5KTtcbn07XG5cbi8qKlxuICogRW5jb2RlIGh0bWwgZW50aXRpZXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcInlvdSAmYW1wIG1lXCJcbiAqIHV0aWxzLmVuY29kZUh0bWxFbnRpdGllcygneW91ICYgbWUnKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuZW5jb2RlSHRtbEVudGl0aWVzID0gZnVuY3Rpb24oaHRtbCkge1xuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgdmFsdWU7XG5cbiAgZWwudGV4dENvbnRlbnQgPSBodG1sO1xuICB2YWx1ZSA9IGVsLmlubmVySFRNTDtcbiAgZWwucmVtb3ZlKCk7XG4gIGVsID0gbnVsbDtcblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG4vKipcbiAqIERlY29kZSBodG1sIGVudGl0aWVzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJ5b3UgJiBtZVwiXG4gKiB1dGlscy5kZWNvZGVIdG1sRW50aXRpZXMoJ3lvdSAmYW1wIG1lJyk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmRlY29kZUh0bWxFbnRpdGllcyA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBsZXQgdmFsdWU7XG5cbiAgZWwuaW5uZXJIVE1MID0gaHRtbDtcbiAgdmFsdWUgPSBlbC52YWx1ZTtcbiAgZWwucmVtb3ZlKCk7XG4gIGVsID0gbnVsbDtcblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG4vKipcbiAqIENoYW5nZSBzdHJpbmcgZnJvbSBkYXNoIHRvIGNhbWVsIGNhc2UgZm9ybWF0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMudG9DYW1lbENhc2UgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXFcrKC4pL2csIChtLCBjKSA9PiBjLnRvVXBwZXJDYXNlKCkpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RyaW5nIGZyb20gY2FtZWwgdG8gZGFzaCBjYXNlIGZvcm1hdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnRvRGFzaENhc2UgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIChtLCBjKSA9PiBgLSR7Yy50b0xvd2VyQ2FzZSgpfWApO1xufTtcblxuLyoqXG4gKiBHZXQgbmVzdGVkIG9iamVjdCBwcm9wZXJ0eSBieSBhcnJheSBrZXlzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCkge1xuICBsZXQgY3VycmVudDtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoZnVuY3Rpb24obywgaykge1xuICAgIGkrKztcblxuICAgIGlmKHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gbztcbiAgICB9XG5cbiAgICBpZihvW2tdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAoaSA9PSBsZW5ndGgpICYmIChjdXJyZW50ID0gb1trXSk7XG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIGN1cnJlbnQ7XG59O1xuXG4vKipcbiAqIENoZWNrIG5lc3RlZCBvYmplY3RzIHRyZWUgaGFzIHByb3BlcnR5IG9yIG5vdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHRydWVcbiAqIHV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaGFzUHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QpIHtcbiAgbGV0IGhhcyA9IGZhbHNlO1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZShmdW5jdGlvbihvLCBrKSB7XG4gICAgaSsrO1xuXG4gICAgaWYodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiAhIW87XG4gICAgfVxuXG4gICAgaWYoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAoaSA9PSBsZW5ndGgpICYmIChoYXMgPSBvLmhhc093blByb3BlcnR5KGspKTtcbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gaGFzO1xufTtcblxuLyoqXG4gKiBTZXQgbmVzdGVkIG9iamVjdHMgdHJlZSBwcm9wZXJ0eVxuICogUmV0dXJucyBjaGFuZ2VkIHByb3BlcnR5IG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHt5OiA2fVxuICogdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0sIChsYXN0LCB2YWwpID0+IGxhc3Q/IDY6ICh2YWwgfHwge30pKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLnNldFByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0LCBmbikge1xuICBsZXQgY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoZnVuY3Rpb24obywgaykge1xuICAgIGkrKztcblxuICAgIGlmKHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIHJldHVybiBjdXJyZW50ID0gb1trXSA9IGZuKGkgPT0gbGVuZ3RoKTtcbiAgICB9XG5cbiAgICBvW2tdID0gZm4oaSA9PSBsZW5ndGgsIG9ba10pO1xuICAgIGN1cnJlbnQgPSBvO1xuXG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIGN1cnJlbnQ7XG59O1xuXG4vKipcbiAqXG4gKiBEZWxldGUgcHJvcGVydHkgZnJvbSBuZXN0ZWQgb2JqZWN0cyB0cmVlXG4gKiBSZXR1cm5zIGRlbGV0ZWQgcHJvcGVydHkgdmFsdWVcbiAqIFlvdSBjYW4gY2FuY2VsIGRlbGV0aW5nIGlmIHdpbGwgcmV0dXJuIGZhbHNlIGluIHRoZSBjYWxsYmFjayBmdW5jdGlvblxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIDVcbiAqIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19KTtcbiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyA1XG4gKiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSwgdmFsID0+IHZhbCAhPSA1KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbZm5dXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QsIGZuKSB7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IHZhbHVlO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoZnVuY3Rpb24obywgaykge1xuICAgIGkrKztcblxuICAgIGlmKHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBpZihpID09IGxlbmd0aCkge1xuICAgICAgdmFsdWUgPSBvW2tdO1xuXG4gICAgICBpZighZm4gfHwgZm4odmFsdWUpKSB7XG4gICAgICAgIGRlbGV0ZSBvW2tdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuXG4vKipcbiAqIEdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSB0YXJnZXQgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xuXG51dGlscy5nZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQgPSBmdW5jdGlvbih0YXJnZXQsIGtleSkge1xuICBsZXQgY2hlY2sgPSAob2JqKSA9PiB7XG4gICAgaWYob2JqLnByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgbGV0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG5cbiAgICBpZighcHJvdG8pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjaGVjayhwcm90byk7XG4gIH07XG5cbiAgcmV0dXJuIGNoZWNrKHRhcmdldCk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgb3duIHByb3BlcnR5IHRhcmdldCBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG51dGlscy5nZXRPd25Qcm9wZXJ0eVRhcmdldCA9IGZ1bmN0aW9uKHRhcmdldCwga2V5KSB7XG4gIGxldCBjaGVjayA9IChvYmopID0+IHtcbiAgICBpZihvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBsZXQgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcblxuICAgIGlmKCFwcm90bykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoZWNrKHByb3RvKTtcbiAgfTtcblxuICByZXR1cm4gY2hlY2sodGFyZ2V0KTtcbn07XG5cbi8qKlxuICogQ2xlYXIgdmFsdWUgcHJveHkgaWYgaXQgZXhpc3RlbnRcbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuY2xlYXJTY29wZVByb3h5ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCAhdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBsZXQgY2xlYXIgPSAob2JqKSA9PiB7XG4gICAgZm9yKGxldCBrIGluIG9iaikge1xuICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmKG9ialtrXSAmJiB0eXBlb2Ygb2JqW2tdID09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmKG9ialtrXS5fX2lzUHJveHkpIHtcbiAgICAgICAgICBvYmpba10gPSBvYmpba10uX190YXJnZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBjbGVhcihvYmpba10pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBpZih2YWx1ZS5fX2lzUHJveHkpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLl9fdGFyZ2V0O1xuICB9XG5cbiAgY2xlYXIodmFsdWUpO1xuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cblxuLyoqXG4gKiBHZW5lcmF0ZSByYW5kb20gc3RyaW5nXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5jcmVhdGVSYW5kb21TdHJpbmcgPSBmdW5jdGlvbihsZW5ndGggPSAxNiwgZm4gPSBudWxsKSB7XG4gIGxldCBzdHIgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgbGVuZ3RoICsgMik7XG4gIGxldCB2YWwgPSAnJztcblxuICBmb3IobGV0IGkgPSAwLCBsID0gc3RyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmKE1hdGgucmFuZG9tKCkgPiAwLjY2KSB7XG4gICAgICB2YWwgKz0gc3RyW2ldLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFsICs9IHN0cltpXTtcbiAgICB9XG4gIH1cblxuICBpZihmbiAmJiBmbih2YWwpKSB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlUmFuZG9tU3RyaW5nKGxlbmd0aCwgZm4pO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHV0aWxzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy5qcyIsImltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcbiAgY29uc3RydWN0b3IoYmFzZVVybCwgZGVmYXVsdHMpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSBiYXNlVXJsPyAoYmFzZVVybC5yZXBsYWNlKC9cXC8kLywgJycpICsgJy8nKTogJyc7XG5cbiAgICB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgc3RhdHVzRXJyb3JzUGF0dGVybjogL14oW14yM10pfDQwNC8sXG4gICAgICAuLi4oZGVmYXVsdHMgfHwge30pXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIHJlcXVlc3Qgd2l0aCBhbnkgbWV0aG9kXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcXVlcnkob3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgdXJsO1xuICAgICAgbGV0IHhocjtcblxuICAgICAgb3B0aW9ucyA9IHsuLi50aGlzLmRlZmF1bHRzLCAuLi4ob3B0aW9ucyB8fCB7fSl9O1xuXG4gICAgICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICh0eXBlb2Ygb3B0aW9ucy5vblN0YXJ0ID09ICdmdW5jdGlvbicpICYmIG9wdGlvbnMub25TdGFydCh4aHIpO1xuICAgICAgb3B0aW9ucyA9IHRoaXMudHJhbnNmb3JtQmVmb3JlKG9wdGlvbnMpO1xuICAgICAgdXJsID0gdGhpcy5iYXNlVXJsPyBgJHt0aGlzLmJhc2VVcmx9JHtvcHRpb25zLnVybC5yZXBsYWNlKC9eXFwvLywgJycpfWA6IG9wdGlvbnMudXJsO1xuICAgICAgeGhyLm9wZW4ob3B0aW9ucy5tZXRob2QsIHVybCwgdHJ1ZSwgb3B0aW9ucy51c2VyLCBvcHRpb25zLnBhc3N3b3JkKTtcbiAgICAgIG9wdGlvbnMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyB8fCB7fTtcblxuICAgICAgaWYob3B0aW9ucy5qc29uKSB7XG4gICAgICAgIG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuanNvbik7XG4gICAgICAgIG9wdGlvbnMuaGVhZGVyc1snY29udGVudC10eXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgIG9wdGlvbnMucmVzcG9uc2VUeXBlID0gb3B0aW9ucy5yZXNwb25zZVR5cGUgfHwgJ2pzb24nO1xuICAgICAgfVxuICAgICAgZWxzZSBpZihvcHRpb25zLmZvcm0pIHtcbiAgICAgICAgb3B0aW9ucy5ib2R5ID0gdGhpcy5jcmVhdGVGb3JtRGF0YShvcHRpb25zLmZvcm0pO1xuICAgICAgICBvcHRpb25zLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddID0gJ211bHRpcGFydC9mb3JtLWRhdGEnO1xuICAgICAgfVxuXG4gICAgICBpZihvcHRpb25zLmhhc093blByb3BlcnR5KCd0aW1lb3V0JykpIHtcbiAgICAgICAgeGhyLnRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQ7XG4gICAgICB9XG5cbiAgICAgIGlmKG9wdGlvbnMucmVzcG9uc2VUeXBlKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSBvcHRpb25zLnJlc3BvbnNlVHlwZTtcbiAgICAgIH1cblxuICAgICAgaWYob3B0aW9ucy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IG9wdGlvbnMud2l0aENyZWRlbnRpYWxzO1xuICAgICAgfVxuXG4gICAgICBpZihvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgZm9yKGxldCBrIGluIG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICAgIGlmKCFvcHRpb25zLmhlYWRlcnMuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGssIG9wdGlvbnMuaGVhZGVyc1trXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYob3B0aW9ucy5wYXJhbXMpIHtcbiAgICAgICAgbGV0IHN0ciA9IHRoaXMucGFyYW1zVG9RdWVyeShvcHRpb25zLnBhcmFtcyk7XG5cbiAgICAgICAgaWYoc3RyKSB7XG4gICAgICAgICAgdXJsICs9IFwiP1wiICsgc3RyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKHR5cGVvZiBvcHRpb25zLm9uUHJvZ3Jlc3MgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB4aHIub25wcm9ncmVzcyA9ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gb3B0aW9ucy5vblByb2dyZXNzKHhocik7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IHRoaXMudHJhbnNmb3JtQWZ0ZXIoeGhyKTtcblxuICAgICAgICBpZigoeGhyLnN0YXR1cyArICcnKS5tYXRjaChvcHRpb25zLnN0YXR1c0Vycm9yc1BhdHRlcm4pKSB7XG4gICAgICAgICAgbGV0IGVyciA9IG5ldyBFcnJvcihgUmVxdWVzdCB0byBcIiR7dXJsfVwiIHJldHVybnMgZmFpbHVyZSBzdGF0dXMgY29kZSAke3hoci5zdGF0dXN9YCk7XG5cbiAgICAgICAgICBlcnIucmVzcG9uc2UgPSByZXNwb25zZTtcblxuICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfTtcblxuICAgICAgeGhyLnRpbWVvdXQgPSAoKSA9PiB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFJlcXVlc3QgdG8gXCIke3VybH1cIiB0aW1lZCBvdXRgKSk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub25lcnJvciA9IChlcnIpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9O1xuXG4gICAgICB4aHIuc2VuZChvcHRpb25zLmJvZHkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgb2JqZWN0IHRvIHF1ZXJ5IHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBwYXJhbXNUb1F1ZXJ5KG9iaikge1xuICAgIGxldCBzZXAgPSAnJic7XG4gICAgbGV0IGVxID0gJz0nO1xuXG4gICAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5tYXAoKGspID0+IHtcbiAgICAgIGxldCBrcyA9IGVuY29kZVVSSUNvbXBvbmVudChrKTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgICBrcyA9IGVuY29kZVVSSUNvbXBvbmVudChrKTtcblxuICAgICAgICByZXR1cm4gb2JqW2tdLm1hcCgodiwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiBrcyArIGBbJHtpfV1gICsgZXEgKyBlbmNvZGVVUklDb21wb25lbnQodik7XG4gICAgICAgIH0pLmpvaW4oc2VwKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYob2JqW2tdICYmIHR5cGVvZiBvYmpba10gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGxldCBvcHQgPSBbXTtcblxuICAgICAgICBPYmplY3Qua2V5cyhvYmpba10pLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgb3B0LnB1c2goa3MgKyBgWyR7a2V5fV1gICsgZXEgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tdW2tleV0pKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG9wdC5qb2luKHNlcCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGtzICsgZXEgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tdKTtcbiAgICAgIH1cbiAgICB9KS5qb2luKHNlcCk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBxdWVyeSBzdHJpbmcgdG8gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHBhcmFtc0Zyb21RdWVyeShzdHIpIHtcbiAgICBsZXQgcXVlcnkgPSB7fTtcbiAgICBsZXQgYW1wcyA9IHN0ci5zcGxpdCgnJicpO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGFtcHMubGVuZ3RoOyBpIDxsOyBpKyspIHtcbiAgICAgIGxldCBlcXMgPSAgYW1wc1tpXS5zcGxpdCgnPScpO1xuICAgICAgbGV0IGtleSA9IGRlY29kZVVSSUNvbXBvbmVudChlcXNbMF0pO1xuICAgICAgbGV0IHZhbCA9IGRlY29kZVVSSUNvbXBvbmVudChlcXNbMV0pO1xuXG4gICAgICBpZigha2V5KSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZihBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICAgIHF1ZXJ5W2tleV0ucHVzaCh2YWwpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZihxdWVyeVtrZXldKSB7XG4gICAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSwgdmFsXTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBxdWVyeVtrZXldID0gdmFsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbXVsdGlwYXJ0IGZvcm0gZGF0YSBmcm9tIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEBwYXJhbSB7Rm9ybURhdGF9IFtkYXRhXVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25hbWVzcGFjZV1cbiAgICpcbiAgICogQHJldHVybnMge0Zvcm1EYXRhfVxuICAgKi9cbiAgY3JlYXRlRm9ybURhdGEob2JqLCBkYXRhID0gbnVsbCwgbmFtZXNwYWNlID0gJycpIHtcbiAgICBsZXQgZmQgPSBkYXRhIHx8IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgZm9yKGxldCBrIGluIG9iaikge1xuICAgICAgaWYob2JqLmhhc093blByb3BlcnR5KGspICYmIG9ialtrXSkge1xuICAgICAgICBsZXQga2V5ID0gbmFtZXNwYWNlPyBuYW1lc3BhY2UgKyAnWycgKyBrICsgJ10nOiBrO1xuXG4gICAgICAgIGlmIChvYmpba10gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgZmQuYXBwZW5kKGtleSwgb2JqW2tdLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3Qob2JqW2tdKSkge1xuICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybURhdGEob2JqW2tdLCBmZCwga2V5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBmZC5hcHBlbmQoa2V5LCBvYmpba10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZkO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBkYXRhIGJlZm9yZSBhIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHRyYW5zZm9ybUJlZm9yZShvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIGRhdGEgYWZ0ZXIgYSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7WE1MSHR0cFJlcXVlc3R9IHhoclxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgdHJhbnNmb3JtQWZ0ZXIoeGhyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHhocjogeGhyLFxuICAgICAgZGF0YTogeGhyLnJlc3BvbnNlLFxuICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBHRVQgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZ2V0KHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnR0VUJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIERFTEVURSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBkZWxldGUodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdERUxFVEUnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgUE9TVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBwb3N0KHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnUE9TVCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBQVVQgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcHV0KHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnUFVUJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIFBBVENIIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHBhdGNoKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnUEFUQ0gnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KCk7XG5cbnJlcXVlc3QuX19pbnN0YW5jZXMgPSB7fTtcblxuLyoqXG4gKiBBZGQgbmV3IHJlcXVlc3QgaW5zdGFuY2UgdG8gdGhlIG1haW4gc2VydmljZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1JlcXVlc3R9IGluc3RhbmNlXG4gKi9cbnJlcXVlc3QuYWRkSW5zdGFuY2UgPSBmdW5jdGlvbihuYW1lLCBpbnN0YW5jZSkge1xuICB0aGlzLl9faW5zdGFuY2VzW25hbWVdID0gaW5zdGFuY2U7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnJlcXVlc3QucmVtb3ZlSW5zdGFuY2UgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLl9faW5zdGFuY2VzW25hbWVdO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVlc3QsICd1c2UnLCB7XG4gIGdldDogKCkgPT4ge1xuICAgIHJldHVybiByZXF1ZXN0Ll9faW5zdGFuY2VzO1xuICB9XG59KTtcblxucmVxdWVzdC5SZXF1ZXN0ID0gUmVxdWVzdDtcbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3Q7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL3JlcXVlc3QuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnZhbHVlS2V5ID0gJ3ZhbHVlJztcbiAgfVxuXG4gIGNoYW5nZWRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgY2hhbmdlZEZvY3VzKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRGb2N1cyh2YWx1ZSk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdmb2N1cycpICYmIHRoaXMuc2V0Rm9jdXModGhpcy5hdHRycy5mb2N1cyk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSAmJiB0aGlzLnNldFZhbHVlKHRoaXMuYXR0cnMudmFsdWUpO1xuICB9XG5cbiAgc2V0Rm9jdXModmFsdWUpIHtcbiAgICB2YWx1ZT8gdGhpcy5zZXRFbGVtZW50Rm9jdXMoKTogdGhpcy5zZXRFbGVtZW50Qmx1cigpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAodGhpcy5lbFt0aGlzLnZhbHVlS2V5XSAhPT0gdmFsdWUpICYmICh0aGlzLmVsW3RoaXMudmFsdWVLZXldID0gdmFsdWUgPT09IDA/ICcwJzogKHZhbHVlIHx8ICcnKSk7XG4gIH1cblxuICBzZXRFbGVtZW50Rm9jdXMoKSB7XG4gICAgdGhpcy5lbC5mb2N1cygpO1xuICB9XG5cbiAgc2V0RWxlbWVudEJsdXIoKSB7XG4gICAgdGhpcy5lbC5ibHVyKCk7XG4gIH1cbn07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RleHQuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGknO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW2luXSc7XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2ZvcicsIEZvcik7XG4gICAgQWtpbGkuY29tcG9uZW50KCdvbCcsIEZvcik7XG4gICAgQWtpbGkuY29tcG9uZW50KCd1bCcsIEZvcik7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0aGVhZCcsIEZvcik7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0Ym9keScsIEZvcik7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0Zm9vdCcsIEZvcik7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0cicsIExvb3ApO1xuICAgIEFraWxpLmNvbXBvbmVudCgnbG9vcCcsIExvb3ApO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5fX2l0ZXJhdG9yID0gbnVsbDtcbiAgICB0aGlzLl9fa2V5ID0gbnVsbDtcbiAgICB0aGlzLl9fdmFsdWUgPSBudWxsO1xuICAgIHRoaXMuX19pbmRleCA9IG51bGw7XG4gICAgdGhpcy5fX2NvbXBhcmlzb25WYWx1ZSA9IG51bGw7XG4gICAgdGhpcy5pdGVyYXRvcnMgPSB7fTtcbiAgICB0aGlzLml0ZXJhdG9yUmVmID0gbnVsbDtcbiAgICB0aGlzLml0ZXJhdG9yT3V0ZXJIVE1MID0gbnVsbDtcbiAgfVxuXG4gIGNoYW5nZWRJbihkYXRhKSB7XG4gICAgdGhpcy5kcmF3KGRhdGEpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmNyZWF0ZUl0ZXJhdG9yKCk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmRyYXcodGhpcy5hdHRycy5pbik7XG4gIH1cblxuICBjcmVhdGVJdGVyYXRvcigpIHtcbiAgICBsZXQgZWw7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuZWwuY2hpbGRyZW5baV07XG5cbiAgICAgIGlmKGNoaWxkLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50JykgPT0gJ2xvb3AnKSB7XG4gICAgICAgIGVsID0gY2hpbGQ7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGVsID0gY2hpbGQ7XG4gICAgfVxuXG4gICAgaWYoIWVsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiRm9yXCIgY29tcG9uZW50IG11c3QgaGF2ZSBhdCBsZWFzdCBvbmUgY2hpbGQnKVxuICAgIH1cblxuICAgIGxldCBjb21wb25lbnROYW1lID0gZWwuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKTtcblxuICAgIGlmKGNvbXBvbmVudE5hbWUgIT0gJ2xvb3AnKSB7XG4gICAgICBsZXQgY29tcG9uZW50ID0gQWtpbGkuY29tcG9uZW50KGNvbXBvbmVudE5hbWUgfHwgZWwudGFnTmFtZSk7XG5cbiAgICAgIGlmKCFjb21wb25lbnQpIHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdjb21wb25lbnQnLCAnbG9vcCcpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZighKGNvbXBvbmVudC5wcm90b3R5cGUgaW5zdGFuY2VvZiBGb3IpKSB7XG4gICAgICAgIGxldCBtYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbG9vcCcpO1xuXG4gICAgICAgIG1hc2suYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICBlbCA9IG1hc2s7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5odG1sID0gZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuaXRlcmF0b3JSZWYgPSBlbC5uZXh0U2libGluZztcbiAgICB0aGlzLml0ZXJhdG9yT3V0ZXJIVE1MID0gZWwub3V0ZXJIVE1MO1xuICAgIGVsLnJlbW92ZSgpO1xuICB9XG5cbiAgY3JlYXRlSXRlcmF0b3JFbGVtZW50KCkge1xuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cbiAgICBlbC5pbm5lckhUTUwgPSB0aGlzLml0ZXJhdG9yT3V0ZXJIVE1MO1xuICAgIGVsID0gZWwuY29udGVudC5maXJzdENoaWxkO1xuXG4gICAgcmV0dXJuIGVsO1xuICB9XG5cbiAgbG9vcChrZXksIHZhbHVlLCBrZXlzLCBpbmRleCkge1xuICAgIHRoaXMuX19pbmRleCA9IGluZGV4O1xuICAgIHRoaXMuX19rZXkgPSBrZXk7XG4gICAgdGhpcy5fX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5fX2NvbXBhcmlzb25WYWx1ZSA9IHV0aWxzLmNvcHkodmFsdWUpO1xuXG4gICAgbGV0IGhhc2ggPSAnJztcbiAgICBsZXQgZm91bmQgPSAwO1xuXG4gICAgaWYodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnICYmIHZhbHVlLl9faGFzaCkge1xuICAgICAgaGFzaCA9IHZhbHVlLl9faGFzaDtcbiAgICB9XG5cbiAgICBpZih0aGlzLml0ZXJhdG9yc1toYXNoXSkge1xuICAgICAga2V5ID0gaGFzaDtcbiAgICAgIGZvdW5kID0gMjtcbiAgICB9XG4gICAgZWxzZSBpZih0aGlzLml0ZXJhdG9yc1trZXldKSB7XG4gICAgICBmb3VuZCA9IDE7XG4gICAgfVxuXG4gICAgaWYoZm91bmQpIHtcbiAgICAgIGxldCBpdGVyYXRvciA9IHRoaXMuaXRlcmF0b3JzW2tleV07XG5cbiAgICAgIGlmKGZvdW5kID09IDIpIHtcbiAgICAgICAgbGV0IGNWYWx1ZSA9IGl0ZXJhdG9yLmNvbXBhcnNpb24udmFsdWU7XG4gICAgICAgIGxldCBjQ29weSA9IGl0ZXJhdG9yLmNvbXBhcnNpb24uY29weTtcblxuICAgICAgICBpZiAodGhpcy5fX2luZGV4ICE9PSBpdGVyYXRvci5pbmRleCkge1xuICAgICAgICAgIGl0ZXJhdG9yLnNldEluZGV4KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fX2tleSAhPT0gaXRlcmF0b3Iua2V5KSB7XG4gICAgICAgICAgaXRlcmF0b3Iuc2V0S2V5KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlKHZhbHVlLCBjVmFsdWUsIGNDb3B5LCB0aGlzLl9fY29tcGFyaXNvblZhbHVlKSkge1xuICAgICAgICAgIGl0ZXJhdG9yLnNldFZhbHVlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBrZXlzW2tleV0gPSBpdGVyYXRvcjtcbiAgICAgICAgZGVsZXRlIHRoaXMuaXRlcmF0b3JzW2tleV07XG5cbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgICAgfVxuXG4gICAgICB0aGlzLml0ZXJhdG9yUmVmID0gaXRlcmF0b3IuZWwubmV4dFNpYmxpbmc7XG4gICAgICBpdGVyYXRvci5fX2Rlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBsZXQgZWwgPSB0aGlzLmNyZWF0ZUl0ZXJhdG9yRWxlbWVudCgpO1xuXG4gICAgZWwuaW5uZXJIVE1MID0gdGhpcy5odG1sO1xuICAgIHRoaXMuZWwuaW5zZXJ0QmVmb3JlKGVsLCB0aGlzLml0ZXJhdG9yUmVmKTtcbiAgICBBa2lsaS5jb21waWxlKGVsKTtcblxuICAgIGlmKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgICAgaWYoIXZhbHVlLl9faGFzaCkge1xuICAgICAgICBoYXNoID0gdXRpbHMuY3JlYXRlUmFuZG9tU3RyaW5nKDMyLCAoc3RyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaXRlcmF0b3JzW3N0cl07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ19faGFzaCcsIHtcbiAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICB2YWx1ZTogaGFzaFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAga2V5c1toYXNoXSA9IHRoaXMuX19pdGVyYXRvcjtcbiAgICAgIGRlbGV0ZSB0aGlzLml0ZXJhdG9yc1toYXNoXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZihBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgICAgIGxldCBlVmFsdWUgPSB0eXBlb2YgdGhpcy5fX3ZhbHVlID09ICdzdHJpbmcnPyBgXCIke3RoaXMuX192YWx1ZX1cImA6IHRoaXMuX192YWx1ZTtcblxuICAgICAgICBsZXQgYXJncyA9IFtcbiAgICAgICAgICBgXCJGb3JcIiBjb21wb25lbnQgbG9vcCBpdGVtcyBzaG91bGQgaGF2ZSBcIm9iamVjdFwiIHR5cGUgZm9yIGhpZ2hlciBwZXJmb3JtYW5jZS5gLFxuICAgICAgICAgIGBZb3UgY2FuIGNoYW5nZSAke2VWYWx1ZX0gdG8ge3ZhbHVlOiAke2VWYWx1ZX19LCBmb3IgZXhhbXBsZS5gXG4gICAgICAgIF07XG5cbiAgICAgICAgY29uc29sZS53YXJuLmFwcGx5KGNvbnNvbGUud2FybiwgYXJncyk7XG4gICAgICB9XG5cbiAgICAgIGtleXNba2V5XSA9IHRoaXMuX19pdGVyYXRvcjtcbiAgICAgIGRlbGV0ZSB0aGlzLml0ZXJhdG9yc1trZXldO1xuICAgIH1cblxuICAgIHJldHVybiBlbC5fX2FraWxpO1xuICB9XG5cbiAgZHJhdyhkYXRhKSB7XG4gICAgaWYgKHR5cGVvZiBkYXRhICE9ICdvYmplY3QnIHx8IGRhdGEgPT09IG51bGwpIHtcbiAgICAgIGlmKEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBcIkZvclwiIGNvbXBvbmVudCBcImluXCIgYXR0cmlidXRlIHZhbHVlIHR5cGUgbXVzdCBiZSBhbiBvYmplY3QvYXJyYXlgKTtcbiAgICAgICAgZGF0YSA9IFtdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBrZXlzID0ge307XG4gICAgbGV0IGluZGV4S2V5cyA9IFtdO1xuICAgIGxldCBsYXN0RWxlbWVudCA9IG51bGw7XG4gICAgbGV0IGxhc3QgPSB0aGlzLmVsLmNoaWxkcmVuW3RoaXMuZWwuY2hpbGRyZW4ubGVuZ3RoIC0gMV07XG5cbiAgICBpZihsYXN0ICYmICEobGFzdC5fX2FraWxpIGluc3RhbmNlb2YgTG9vcCkpIHtcbiAgICAgIGxhc3RFbGVtZW50ID0gbGFzdDtcbiAgICB9XG5cbiAgICBpZihBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0gZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaW5kZXhLZXlzLnB1c2godGhpcy5sb29wKGksIGRhdGFbaV0sIGtleXMsIGkpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgaSA9IDA7XG5cbiAgICAgIGZvcihsZXQgayBpbiBkYXRhKSB7XG4gICAgICAgIGlmKCFkYXRhLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpbmRleEtleXMucHVzaCh0aGlzLmxvb3AoaywgZGF0YVtrXSwga2V5cywgaSkpO1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGluZGV4S2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBpdGVyYXRvciA9IGluZGV4S2V5c1tpXTtcblxuICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChpdGVyYXRvci5lbCk7XG4gICAgICBpdGVyYXRvci5pdGVyYXRlKGkpO1xuICAgIH1cblxuICAgIGxhc3RFbGVtZW50ICYmIHRoaXMuZWwuYXBwZW5kQ2hpbGQobGFzdEVsZW1lbnQpO1xuXG4gICAgZm9yKGxldCBrIGluIHRoaXMuaXRlcmF0b3JzKSB7XG4gICAgICBpZighdGhpcy5pdGVyYXRvcnMuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaXRlcmF0b3JzW2tdLl9fZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMuaXRlcmF0b3JzID0ga2V5cztcbiAgfVxufTtcblxuZXhwb3J0IGNsYXNzIExvb3AgZXh0ZW5kcyBGb3Ige1xuICBzdGF0aWMgbWF0Y2hlcyA9ICcnO1xuICBzdGF0aWMgY29udHJvbEF0dHJpYnV0ZXMgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuZm9yID0gbnVsbDtcbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmlzRm9yID0gdGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ2luJyk7XG5cbiAgICBpZighdGhpcy5pc0ZvciAmJiAhKHRoaXMuZWwucGFyZW50Tm9kZS5fX2FraWxpIGluc3RhbmNlb2YgRm9yKSkge1xuICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2l0ZXJhdG9yID0gdGhpcztcbiAgICB0aGlzLmZvciA9IHRoaXMuX19wYXJlbnQuX19ha2lsaTtcbiAgICB0aGlzLnNldEluZGV4KCk7XG4gICAgdGhpcy5zZXRLZXkoKTtcbiAgICB0aGlzLnNldFZhbHVlKCk7XG5cbiAgICB0aGlzLmlzRm9yICYmIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuaXNGb3IgJiYgc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHNldEluZGV4KCkge1xuICAgIHRoaXMuaW5kZXggPSB0aGlzLmZvci5fX2luZGV4O1xuICAgIHRoaXMuc2NvcGUuX19zZXQoJ2xvb3BJbmRleCcsIHRoaXMuaW5kZXgpO1xuICB9XG5cbiAgc2V0S2V5KCkge1xuICAgIHRoaXMua2V5ID0gdGhpcy5mb3IuX19rZXk7XG4gICAgdGhpcy5zY29wZS5fX3NldCgnbG9vcEtleScsIHRoaXMua2V5KTtcbiAgfVxuXG4gIHNldFZhbHVlKCkge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLmZvci5fX3ZhbHVlO1xuICAgIHRoaXMuc2NvcGUuX19zZXQoJ2xvb3BWYWx1ZScsIHRoaXMudmFsdWUsIHRydWUpO1xuXG4gICAgdGhpcy5jb21wYXJzaW9uID0ge1xuICAgICAgY29weTogdGhpcy5mb3IuX19jb21wYXJpc29uVmFsdWUsXG4gICAgICB2YWx1ZTogdGhpcy5mb3IuX192YWx1ZVxuICAgIH1cbiAgfVxuXG4gIGl0ZXJhdGUoaW5kZXgpIHt9XG59XG5cbkZvci5Mb29wID0gTG9vcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Zvci5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaSc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi9zZXJ2aWNlcy9yZXF1ZXN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgncm91dGUnLCBSb3V0ZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7VHJhbnNpdGlvbn0gdHJhbnNpdGlvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHNldFRyYW5zaXRpb24odHJhbnNpdGlvbikge1xuICAgIGxldCBzdGF0ZSA9IHRyYW5zaXRpb24ucGF0aC5zdGF0ZTtcbiAgICBsZXQgcGFyYW1zID0gdHJhbnNpdGlvbi5wYXRoLnBhcmFtcztcbiAgICBsZXQgdXJsID0gdHJhbnNpdGlvbi51cmw7XG4gICAgbGV0IHF1ZXJ5ID0gdHJhbnNpdGlvbi5xdWVyeTtcbiAgICBsZXQgcCA9IFByb21pc2UucmVzb2x2ZSgpO1xuXG4gICAgZnVuY3Rpb24gZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uKHBhdGgpIHtcbiAgICAgIGlmKHBhdGgucGFyZW50KSB7XG4gICAgICAgIGlmIChwYXRoLnBhcmVudC5jb21wb25lbnQpIHtcbiAgICAgICAgICByZXR1cm4gcGF0aC5wYXJlbnQuY29tcG9uZW50Ll9fc2NvcGUuX190cmFuc2l0aW9uLnBhdGg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uKHBhdGgucGFyZW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5fX3Njb3BlLl9fdHJhbnNpdGlvbiA9IHtcbiAgICAgIHBhdGg6IHtcbiAgICAgICAgc3RhdGU6IHN0YXRlLm5hbWUsXG4gICAgICAgIGRhdGE6IHRyYW5zaXRpb24ucGF0aC5kYXRhLFxuICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgcGFyZW50OiBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24odHJhbnNpdGlvbi5wYXRoKVxuICAgICAgfSxcbiAgICAgIHBhcmFtczogdHJhbnNpdGlvbi5wYXJhbXMsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIHF1ZXJ5OiBxdWVyeVxuICAgIH07XG5cbiAgICBpZiAoc3RhdGUudGVtcGxhdGUpIHtcbiAgICAgIHRoaXMuZW1wdHkoKTtcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gYDxjb21wb25lbnQ+JHtzdGF0ZS50ZW1wbGF0ZX08L2NvbXBvbmVudD5gO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS50ZW1wbGF0ZVVybCkge1xuICAgICAgcCA9IHJlcXVlc3QuZ2V0KHN0YXRlLnRlbXBsYXRlVXJsKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgdGhpcy5lbXB0eSgpO1xuICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IGA8Y29tcG9uZW50PiR7cmVzLmRhdGF9PC9jb21wb25lbnQ+YDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBwLnRoZW4oKCkgPT4ge1xuICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgfSk7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvcm91dGUuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBlbCwgY29tcG9uZW50KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmVsID0gZWw7XG4gICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciB0aGUgZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIHsqfSBkYXRhIC0gc2VuZGluZyBkYXRhLiBXaWxsIGJlIGluIHRoZSBldmVudC5kZXRhaWxcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZV1cbiAgICovXG4gIHRyaWdnZXIoZGF0YSwgb3B0aW9ucyA9IHsgYnViYmxlczogZmFsc2UgfSwgZm9yY2UgPSBmYWxzZSkge1xuICAgIGlmKGZvcmNlIHx8ICF0aGlzLmluRXZhbHVhdGluZygpKSB7XG4gICAgICB0aGlzLmVsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KHRoaXMubmFtZSwge2RldGFpbDogZGF0YSwgLi4ub3B0aW9uc30pKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2ggdGhlIGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IF9FdmVudCAtIGNsYXNzIG9mIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlXVxuICAgKi9cbiAgZGlzcGF0Y2goX0V2ZW50LCBvcHRpb25zID0geyBidWJibGVzOiBmYWxzZSB9LCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgaWYoZm9yY2UgfHwgIXRoaXMuaW5FdmFsdWF0aW5nKCkpIHtcbiAgICAgIHRoaXMuZWwuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50KHRoaXMubmFtZSwgb3B0aW9ucykpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBldmVudCBjYWxsYmFjayBkb2Vzbid0IHJ1biByZWN1cnNpdmVcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpbkV2YWx1YXRpbmcoKSB7XG4gICAgbGV0IGRhdGEgPSB0aGlzLmNvbXBvbmVudC5fX2V2YWx1YXRpbmdFdmVudDtcblxuICAgIGlmKCFkYXRhKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGEuZWwgPT09IHRoaXMuZWwgJiYgZGF0YS5ldmVudC50eXBlID09PSB0aGlzLm5hbWUgJiYgZGF0YS5jb21wb25lbnQgPT09IHRoaXMuY29tcG9uZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgdGhlIGZ1bmN0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gICAqL1xuICBiaW5kKGZuKSB7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKHRoaXMubmFtZSwgdGhpcy5mbiA9IGZuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgdGhlIGZ1bmN0aW9uXG4gICAqL1xuICB1bmJpbmQoKSB7XG4gICAgdGhpcy5mbiAmJiB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5uYW1lLCB0aGlzLmZuKTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXZlbnQtZW1pdHRlci5qcyIsImltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaSc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9yZXF1ZXN0JztcbmltcG9ydCBSb3V0ZSBmcm9tICcuLi9jb21wb25lbnRzL3JvdXRlJztcblxuZXhwb3J0IGNsYXNzIFRyYW5zaXRpb24ge1xuICBjb25zdHJ1Y3Rvcih1cmwsIHF1ZXJ5LCBoYXNoID0gJycsIHByZXZpb3VzID0gbnVsbCkge1xuICAgIHRoaXMudXJsID0gdXJsO1xuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICB0aGlzLmhhc2ggPSBoYXNoO1xuICAgIHRoaXMucHJldmlvdXMgPSBwcmV2aW91cztcbiAgICB0aGlzLnBhdGggPSBudWxsO1xuICAgIHRoaXMucm91dGVzID0gW107XG4gICAgdGhpcy5zdGF0ZXMgPSBbXTtcbiAgICB0aGlzLnBhcmFtcyA9IHt9O1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHJlZGlyZWN0KCkge1xuICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgcm91dGVyLnN0YXRlLmFwcGx5KHJvdXRlciwgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHNldFBhdGgocGF0aCkge1xuICAgIHBhdGgucGFyZW50ID0gdGhpcy5wYXRoIHx8IG51bGw7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB0aGlzLnJvdXRlcy5wdXNoKHBhdGgpO1xuICAgIHRoaXMuc3RhdGVzLnB1c2gocGF0aC5zdGF0ZSk7XG4gICAgdGhpcy5wYXJhbXMgPSAhcGF0aC5wYXJlbnQ/IHBhdGgucGFyYW1zOiB7Li4ucGF0aC5wYXJlbnQucGFyYW1zLCAuLi5wYXRoLnBhcmFtc307XG4gIH1cblxuICBnZXRSb3V0ZShzdGF0ZSkge1xuICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLnJvdXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByb3V0ZSA9IHRoaXMucm91dGVzW2ldO1xuXG4gICAgICBpZihyb3V0ZS5zdGF0ZSA9PT0gc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHJvdXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaGFzU3RhdGUoc3RhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZXMuaW5kZXhPZihzdGF0ZSkgIT0gLTE7XG4gIH1cblxuICBjYW5jZWwoKSB7XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IHRydWU7XG4gIH1cbn1cblxuY29uc3Qgcm91dGVyID0ge307XG5cbnJvdXRlci5iYXNlVXJsID0gXCIvXCI7XG5yb3V0ZXIuc3RhdGVzID0gW107XG5yb3V0ZXIuaGFzaE1vZGUgPSB0cnVlO1xucm91dGVyLl9fcmVkaXJlY3RzID0gMDtcbnJvdXRlci5fX2luaXQgPSBmYWxzZTtcbnJvdXRlci5fX29wdGlvbnMgPSB7fTtcbnJvdXRlci5fX3BhcmFtUmVnZXggPSAvKDooW1xcd1xcZC1dKykpL2c7XG5yb3V0ZXIuX19yb3V0ZVNlbGVjdG9yID0gYyA9PiBjIGluc3RhbmNlb2YgUm91dGU7XG5cbi8qKlxuICogQWRkIG5ldyBzdGF0ZSB0byB0aGUgcm91dGVyXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzdGF0ZSBuYW1lLiBUbyBzZXQgcGFyZW50cyB5b3UgY2FuIHVzZSBkb3QsIGUuZy4gJ2FwcC5hcnRpY2xlLmVkaXQnXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVybiAtIHVybCBwYXR0ZXJuIGxpa2UgJ2FwcC9hcnRpY2xlLzppZCdcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtyb3V0ZXJ9XG4gKi9cbnJvdXRlci5hZGQgPSBmdW5jdGlvbiAobmFtZSwgcGF0dGVybiwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICB0ZW1wbGF0ZTogJycsXG4gICAgdGVtcGxhdGVVcmw6ICcnLFxuICAgIGFic3RyYWN0OiBmYWxzZSxcbiAgICBoYW5kbGVyOiAodHJhbnNpdGlvbikgPT4ge31cbiAgfTtcblxuICBpZighb3B0aW9ucy50ZW1wbGF0ZSAmJiAhb3B0aW9ucy50ZW1wbGF0ZVVybCkge1xuICAgIG9wdGlvbnMuYWJzdHJhY3QgPSB0cnVlO1xuICB9XG5cbiAgaWYodGhpcy5oYXMobmFtZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBcIiR7bmFtZX1cIiBpcyBhbHJlYWR5IGV4aXN0c2ApXG4gIH1cblxuICB0aGlzLnNldFN0YXRlKG5hbWUsIHBhdHRlcm4sIHsuLi5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9uc30pO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgc3RhdGUgZnJvbSB0aGUgbGlzdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnJvdXRlci5yZW1vdmUgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZih0aGlzLnN0YXRlc1tpXS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHRoaXMuc3RhdGVzLnNwbGljZShpLCAxKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBDaGVjayBzdGF0ZSBleGlzdHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnJvdXRlci5oYXMgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZih0aGlzLnN0YXRlc1tpXS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHRoZSBzdGF0ZSB0byB0aGUgcGFzc2VkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzdGF0ZSBuYW1lXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gLSBwYXJhbXMgZm9yIHN0YXRlIHtpZDogMX0gPT4gJy9hcHAvOmlkJyA9PiAnL2FwcC8xJ1xuICogQHBhcmFtIHtvYmplY3R9IFtxdWVyeV0gLSBxdWVyeSB7eDogMX0gPT4gJy9hcHAvP3g9MSdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbaGFzaF1cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqL1xucm91dGVyLnN0YXRlID0gZnVuY3Rpb24gKG5hbWUsIHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gJycsIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgc3RhdGUgPSB0aGlzLmdldFN0YXRlKG5hbWUpO1xuXG4gIGlmICghc3RhdGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCByb3V0ZSBzdGF0ZSB3aXRoIG5hbWUgJHtuYW1lfWApO1xuICB9XG5cbiAgbGV0IHVybCA9IHRoaXMuY3JlYXRlU3RhdGVVcmwoc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gpO1xuXG4gIGlmKCFvcHRpb25zLnJlbG9hZCAmJiB1cmwgPT09IHRoaXMuZ2V0VXJsKCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLl9fb3B0aW9ucyA9IG9wdGlvbnM7XG4gIHRoaXMuc2V0VXJsKHVybCk7XG59O1xuXG4vKipcbiAqIEdvIGJhY2tcbiAqL1xucm91dGVyLmJhY2sgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LmJhY2suYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIEdvIHRvIGFueSB3YXlcbiAqL1xucm91dGVyLmdvID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeS5nby5hcHBseSh3aW5kb3cuaGlzdG9yeSwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogR28gZm9yd2FyZFxuICovXG5yb3V0ZXIuZm9yd2FyZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkuZm9yd2FyZC5hcHBseSh3aW5kb3cuaGlzdG9yeSwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHN0YXRlIGJ5IHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqL1xucm91dGVyLmxvY2F0aW9uID0gZnVuY3Rpb24odXJsLCBvcHRpb25zID0geyByZWxvYWQ6IGZhbHNlIH0pIHtcbiAgdGhpcy5fX29wdGlvbnMgPSBvcHRpb25zO1xuXG4gIGlmKHRoaXMuaGFzaE1vZGUpIHtcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHVybDtcbiAgfVxuICBlbHNlIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgJycsIHVybCk7XG4gIH1cbn07XG5cbi8qKlxuICogUm91dGVyIGluaXRpYWxpemF0aW9uLiBTaG91bGQgYmUgY2FsbGVkIGJlZm9yZSBBa2lsaS5pbml0KClcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW2RlZmF1bHRVcmxdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtoYXNoTW9kZT10cnVlXVxuICovXG5yb3V0ZXIuaW5pdCA9IGZ1bmN0aW9uIChkZWZhdWx0VXJsID0gJycsIGhhc2hNb2RlID0gdHJ1ZSkge1xuICBsZXQgb2xkUHVzaFN0YXRlID0gd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlO1xuXG4gIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCByZXMgPSBvbGRQdXNoU3RhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIHJvdXRlci5jaGFuZ2VTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICB0aGlzLl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5jaGFuZ2VTdGF0ZSgpO1xuICB9O1xuXG4gIHRoaXMuZGVmYXVsdFVybCA9IGRlZmF1bHRVcmw7XG4gIHRoaXMuaGFzaE1vZGUgPSBoYXNoTW9kZTtcblxuICB0aGlzLnN0YXRlcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgYSA9IGEubmFtZS5zcGxpdCgnLicpLmxlbmd0aDtcbiAgICBiID0gYi5uYW1lLnNwbGl0KCcuJykubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGEgLSBiO1xuICB9KTtcblxuICBsZXQgc3RhdGVzID0ge307XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcbiAgICBsZXQgcGFyZW50cyA9IFtdO1xuXG4gICAgc3RhdGVzW3N0YXRlLm5hbWVdID0gc3RhdGU7XG4gICAgc3RhdGUuY2hpbGRyZW4gPSBbXTtcbiAgICBwYXJlbnRzID0gc3RhdGUubmFtZS5zcGxpdCgnLicpO1xuICAgIHBhcmVudHMucG9wKCk7XG4gICAgc3RhdGUubGV2ZWwgPSBzdGF0ZS5hYnN0cmFjdD8gbnVsbDogcGFyZW50cy5sZW5ndGg7XG5cbiAgICBpZiAocGFyZW50cy5sZW5ndGgpIHtcbiAgICAgIGxldCBwYXJlbnROYW1lID0gcGFyZW50cy5qb2luKCcuJyk7XG4gICAgICBsZXQgcGFyZW50ID0gc3RhdGVzW3BhcmVudE5hbWVdO1xuXG4gICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCBwYXJlbnQgcm91dGUgc3RhdGUgXCIke3BhcmVudE5hbWV9XCIgZm9yIFwiJHtzdGF0ZS5uYW1lfVwiYClcbiAgICAgIH1cblxuICAgICAgaWYoc3RhdGUubGV2ZWwgIT09IG51bGwgJiYgcGFyZW50LmFic3RyYWN0KSB7XG4gICAgICAgIHN0YXRlLmxldmVsLS07XG4gICAgICB9XG5cbiAgICAgIHN0YXRlLmZ1bGxQYXR0ZXJuID0gdGhpcy5zcGxpdFNsYXNoZXMocGFyZW50LmZ1bGxQYXR0ZXJuICsgJy8nICsgc3RhdGUucGF0dGVybik7XG4gICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaChzdGF0ZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc3RhdGUuZnVsbFBhdHRlcm4gPSBzdGF0ZS5wYXR0ZXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmKCF0aGlzLnN0YXRlcy5sZW5ndGggJiYgQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgIGNvbnNvbGUud2FybihgWW91IGRpZG4ndCBhZGQgYW55IHJvdXRlcyB0byB0aGUgcm91dGVyYCk7XG4gIH1cblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIpO1xuICB0aGlzLl9faW5pdCA9IHRydWU7XG59O1xuXG4vKipcbiAqIEdldCBzdGF0ZSBieSBuYW1lXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAqL1xucm91dGVyLmdldFN0YXRlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogU2V0IHN0YXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXR0ZXJuXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICovXG5yb3V0ZXIuc2V0U3RhdGUgPSBmdW5jdGlvbiAobmFtZSwgcGF0dGVybiwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBzdGF0ZSA9IHsuLi5vcHRpb25zLCBuYW1lLCBwYXR0ZXJufTtcblxuICByb3V0ZXIuc3RhdGVzLnB1c2goc3RhdGUpO1xuXG4gIHJldHVybiBzdGF0ZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIHN0YXRlIGJ5IG5hbWVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5yb3V0ZXIucmVtb3ZlU3RhdGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLm5hbWUgPT0gbmFtZSkge1xuICAgICAgdGhpcy5zdGF0ZXMuc3BsaWNlKGksIDEpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFNldCB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKi9cbnJvdXRlci5zZXRVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHRoaXMuaGFzaE1vZGU/IHRoaXMuc2V0SGFzaFVybCh1cmwpOiB0aGlzLnNldEhpc3RvcnlVcmwodXJsKTtcbn07XG5cbi8qKlxuICogU2V0IHVybCB1c2luZyBoaXN0b3J5XG4gKlxuICogQHBhcmFtIHVybFxuICovXG5yb3V0ZXIuc2V0SGlzdG9yeVVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsICcnLCB1cmwpO1xufTtcblxuLyoqXG4gKiBTZXQgdXJsIHVzaW5nIGhhc2hcbiAqXG4gKiBAcGFyYW0gdXJsXG4gKi9cbnJvdXRlci5zZXRIYXNoVXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjJyArICh1cmwgfHwgJy8nKTtcbn07XG5cbi8qKlxuICogR2V0IHVybFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmhhc2hNb2RlID8gdGhpcy5nZXRIYXNoVXJsKCkgOiB0aGlzLmdldEhpc3RvcnlVcmwoKTtcbn07XG5cbi8qKlxuICogR2V0IHVybCB1c2luZyBoaXN0b3J5XG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLmdldEhpc3RvcnlVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIGlmKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gJy8nKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyB3aW5kb3cubG9jYXRpb24uaGFzaDtcbn07XG5cbi8qKlxuICogR2V0IHVybCB1c2luZyBoYXNoXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLmdldEhhc2hVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKC9eIy8sICcnKTtcbn07XG5cbi8qKlxuICogR2V0IHF1ZXJ5IHBhcmFtc1xuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5oYXNoTW9kZSA/IHRoaXMuZ2V0SGFzaFVybFF1ZXJ5KCkgOiB0aGlzLmdldEhpc3RvcnlVcmxRdWVyeSgpO1xufTtcblxuLyoqXG4gKiBHZXQgcXVlcnkgcGFyYW1zIHVzaW5nIGhpc3RvcnlcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0SGlzdG9yeVVybFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByZXF1ZXN0LnBhcmFtc0Zyb21RdWVyeSh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykpO1xufTtcblxuLyoqXG4gKiBHZXQgcXVlcnkgcGFyYW1zIHVzaW5nIGhhc2hcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0SGFzaFVybFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByZXF1ZXN0LnBhcmFtc0Zyb21RdWVyeSgod2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJz8nKVsxXSB8fCAnJykpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgdXJsIGJ5IGRhdGFcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc11cbiAqIEBwYXJhbSB7b2JqZWN0fSBbcXVlcnldXG4gKiBAcGFyYW0ge3N0cmluZ30gW2hhc2hdXG4gKi9cbnJvdXRlci5jcmVhdGVTdGF0ZVVybCA9IGZ1bmN0aW9uIChzdGF0ZSwgcGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSAnJykge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcblxuICBsZXQgdXJsID0gc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZSh0aGlzLl9fcGFyYW1SZWdleCwgKG0sIGYsIHYpID0+IHtcbiAgICByZXR1cm4gcGFyYW1zW3ZdIHx8ICcnO1xuICB9KTtcblxuICB1cmwgPSB0aGlzLnNwbGl0U2xhc2hlcyh1cmwpO1xuXG4gIGlmKE9iamVjdC5rZXlzKHF1ZXJ5KS5sZW5ndGgpIHtcbiAgICB1cmwgKz0gJz8nICsgcmVxdWVzdC5wYXJhbXNUb1F1ZXJ5KHF1ZXJ5KTtcbiAgfVxuXG4gIGhhc2ggPSAoaGFzaCB8fCAnJykucmVwbGFjZSgnIycsICcnKTtcblxuICBpZighdGhpcy5oYXNoTW9kZSAmJiBoYXNoKSB7XG4gICAgdXJsICs9ICcjJyArIGhhc2g7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYWxsIHVubmVjZXNzYXJ5IHNsYXNoZXMgZnJvbSBhbiB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuc3BsaXRTbGFzaGVzID0gZnVuY3Rpb24gKHVybCkge1xuICByZXR1cm4gdXJsLnJlcGxhY2UoL1tcXC9dKy9nLCAnLycpO1xufTtcblxuLyoqXG4gKiBDbGVhciBhbGwgcm91dGVyIGRlcGVuZGVuY2llc1xuICovXG5yb3V0ZXIuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMuX19vblN0YXRlQ2hhbmdlSGFuZGxlcik7XG59O1xuXG4vKipcbiAqIEdldCBzdGF0ZSB1cmwgY29udGVudFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRQYXR0ZXJuQ29udGVudCA9IGZ1bmN0aW9uIChzdGF0ZSwgdXJsKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuXG4gIGxldCBrZXlzID0gW107XG4gIGxldCBpID0gMDtcbiAgbGV0IHBhcmFtcyA9IHt9O1xuXG4gIHVybCA9IHVybC5zcGxpdCgnPycpWzBdO1xuICB1cmwgPSB1cmwuc3BsaXQoJyMnKVswXTtcblxuICBsZXQgdXJsUGF0dGVybiA9IHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2UodGhpcy5fX3BhcmFtUmVnZXgsIChtLCBmLCB2KSA9PiB7XG4gICAga2V5cy5wdXNoKHYpO1xuXG4gICAgcmV0dXJuICcoW15cXFxcL10qKSc7XG4gIH0pO1xuXG4gIGxldCByZWdleCA9IG5ldyBSZWdFeHAodXJsUGF0dGVybik7XG4gIGxldCBpc0luY2x1ZGVkID0gdXJsLm1hdGNoKHJlZ2V4KTtcblxuICBpZiAoIWlzSW5jbHVkZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHVybC5yZXBsYWNlKHJlZ2V4LCAobSwgdikgPT4ge1xuICAgIHYgJiYgKHBhcmFtc1trZXlzW2ldXSA9IHYpO1xuICAgIGkrKztcbiAgfSk7XG5cbiAgcmV0dXJuIHsgcGFyYW1zIH07XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSBzdGF0ZSBpcyBhY3RpdmUgbm93XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtib29sZWFufSBpbmNsdWRlc1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnJvdXRlci5pc0FjdGl2ZVN0YXRlID0gZnVuY3Rpb24oc3RhdGUsIGluY2x1ZGVzID0gZmFsc2UpIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG5cbiAgbGV0IHVybCA9IHRoaXMuc3BsaXRTbGFzaGVzKHRoaXMuZ2V0VXJsKCkuc3BsaXQoJz8nKVswXSArICcvJyk7XG4gIGxldCB1cmxQYXR0ZXJuID0gc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZSh0aGlzLl9fcGFyYW1SZWdleCwgJyhbXlxcXFwvXSopJyk7XG4gIGxldCBzdHIgPSBpbmNsdWRlcz8gdXJsUGF0dGVybjogdGhpcy5zcGxpdFNsYXNoZXMoJ14nICsgdXJsUGF0dGVybiArICdcXC8kJyk7XG4gIGxldCByZWdleCA9IG5ldyBSZWdFeHAoc3RyKTtcblxuICByZXR1cm4gcmVnZXgudGVzdCh1cmwpO1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgY3VycmVudCB1cmwgaW5jbHVkZXMgYSBzdGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaW5BY3RpdmVTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gIHJldHVybiByb3V0ZXIuaXNBY3RpdmVTdGF0ZShzdGF0ZSwgdHJ1ZSk7XG59O1xuXG4vKipcbiAqIEdldCByb3V0ZSBjb21wb25lbnQgYnkgbGV2ZWxcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbGV2ZWxcbiAqL1xucm91dGVyLmdldFJvdXRlID0gZnVuY3Rpb24gKGxldmVsKSB7XG4gIGxldCBpID0gMDtcblxuICBsZXQgZmluZCA9IChlbCkgPT4ge1xuICAgIGxldCByb3V0ZSA9IGVsLmNoaWxkKHRoaXMuX19yb3V0ZVNlbGVjdG9yKTtcblxuICAgIGlmICghcm91dGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChpID09IGxldmVsKSB7XG4gICAgICByZXR1cm4gcm91dGU7XG4gICAgfVxuXG4gICAgaSsrO1xuXG4gICAgcmV0dXJuIGZpbmQocm91dGUpO1xuICB9O1xuXG4gIHJldHVybiBmaW5kKEFraWxpLnJvb3QpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGZpcnN0IG1hdGNoXG4gKlxuICogQHBhcmFtIHthcnJheX0gYXJyXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gKi9cbnJvdXRlci5nZXRBcnJheVBhdHRlcm5Db250ZW50ID0gZnVuY3Rpb24gKGFyciwgdXJsKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IGFycltpXTtcbiAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0UGF0dGVybkNvbnRlbnQoc3RhdGUsIHVybCk7XG5cbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJldHVybiB7c3RhdGU6IHN0YXRlLCAuLi5jb250ZW50fTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBHZXQgc3RhdGVzIGJ5IGxldmVsXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxldmVsXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbnJvdXRlci5nZXRTdGF0ZXNCeUxldmVsID0gZnVuY3Rpb24gKGxldmVsKSB7XG4gIGxldCBzdGF0ZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLmxldmVsIDwgbGV2ZWwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChzdGF0ZS5sZXZlbCA+IGxldmVsKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzdGF0ZXMucHVzaChzdGF0ZSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVzO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RhdGVcbiAqL1xucm91dGVyLmNoYW5nZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuICBpZih0aGlzLl9fZGlzYWJsZUNoYW5nZSkge1xuICAgIGRlbGV0ZSB0aGlzLl9fZGlzYWJsZUNoYW5nZTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCB1cmwgPSB0aGlzLmdldFVybCgpO1xuICBsZXQgaGFzaCA9IHRoaXMuaGFzaE1vZGU/ICcnOiB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpO1xuICBsZXQgcXVlcnkgPSB0aGlzLmdldFVybFF1ZXJ5KCk7XG4gIGxldCBwcmV2VHJhbnNpdGlvbiA9IHJvdXRlci50cmFuc2l0aW9uIHx8IG51bGw7XG4gIGxldCB0cmFuc2l0aW9uID0gcm91dGVyLnRyYW5zaXRpb24gPSBuZXcgVHJhbnNpdGlvbih1cmwsIHF1ZXJ5LCBoYXNoLCBwcmV2VHJhbnNpdGlvbik7XG4gIGxldCBsZXZlbCA9IDA7XG5cbiAgbGV0IG5leHQgPSAoc3RhdGVzLCBvbkVuZCkgPT4ge1xuICAgIGlmICghc3RhdGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG9uRW5kICYmIG9uRW5kKCk7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldEFycmF5UGF0dGVybkNvbnRlbnQoc3RhdGVzLCB1cmwpO1xuXG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICByZXR1cm4gb25FbmQgJiYgb25FbmQoKTtcbiAgICB9XG5cbiAgICBsZXQgc3RhdGUgPSBjb250ZW50LnN0YXRlO1xuICAgIGxldCBwYXJhbXMgPSBjb250ZW50LnBhcmFtcztcbiAgICBsZXQgcm91dGUgPSBzdGF0ZS5hYnN0cmFjdD8gbnVsbDogdGhpcy5nZXRSb3V0ZShzdGF0ZS5sZXZlbCk7XG5cbiAgICBpZiAoIXJvdXRlICYmICFzdGF0ZS5hYnN0cmFjdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yIChgTm90IGZvdW5kIHJvdXRlIGNvbXBvbmVudCBmb3Igc3RhdGUgXCIke3N0YXRlLm5hbWV9XCJgKTtcbiAgICB9XG5cbiAgICB0cmFuc2l0aW9uLnNldFBhdGgoeyBzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgY29tcG9uZW50OiByb3V0ZSwgbG9hZGVkOiB0cnVlIH0pO1xuICAgIGxldmVsKys7XG5cbiAgICBsZXQgaGFzU3RhdGUgPSBwcmV2VHJhbnNpdGlvbiAmJiBwcmV2VHJhbnNpdGlvbi5oYXNTdGF0ZShzdGF0ZSk7XG4gICAgbGV0IGlzRGlmZmVyZW50ID0gdHJ1ZTtcblxuICAgIGlmKGhhc1N0YXRlKSB7XG4gICAgICBsZXQgcm91dGUgPSBwcmV2VHJhbnNpdGlvbi5nZXRSb3V0ZShzdGF0ZSk7XG4gICAgICBsZXQgcHJldiA9IHsgcGFyYW1zOiByb3V0ZS5wYXJhbXMsIHF1ZXJ5OiByb3V0ZS5xdWVyeSwgaGFzaDogcm91dGUuaGFzaCB9O1xuICAgICAgbGV0IGN1cnJlbnQgPSB7IHBhcmFtcywgcXVlcnksIGhhc2ggfTtcblxuICAgICAgaXNEaWZmZXJlbnQgPSAhdXRpbHMuY29tcGFyZShwcmV2LCBjdXJyZW50KTtcbiAgICB9XG5cbiAgICBsZXQgaXNIaXN0b3J5ID0gdGhpcy5fX29wdGlvbnMucmVsb2FkID09PSB1bmRlZmluZWQgJiYgIWlzRGlmZmVyZW50O1xuICAgIGxldCBpc1JlbG9hZCA9IHRoaXMuX19vcHRpb25zLnJlbG9hZCA9PT0gZmFsc2U7XG5cbiAgICBpZiAoaGFzU3RhdGUgJiYgKGlzSGlzdG9yeSB8fCBpc1JlbG9hZCkpIHtcbiAgICAgIHRyYW5zaXRpb24ucGF0aC5sb2FkZWQgPSBmYWxzZTtcblxuICAgICAgcmV0dXJuIG5leHQoc3RhdGUuY2hpbGRyZW4sIG9uRW5kKTtcbiAgICB9XG5cbiAgICBQcm9taXNlLnJlc29sdmUoc3RhdGUuaGFuZGxlcih0cmFuc2l0aW9uKSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKHRyYW5zaXRpb24uX19jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIG9uRW5kICYmIG9uRW5kKCk7XG4gICAgICB9XG5cbiAgICAgIHRyYW5zaXRpb24ucGF0aC5kYXRhID0gZGF0YTtcblxuICAgICAgaWYoc3RhdGUuYWJzdHJhY3QpIHtcbiAgICAgICAgcmV0dXJuIG5leHQoc3RhdGUuY2hpbGRyZW4sIG9uRW5kKTtcbiAgICAgIH1cblxuICAgICAgcm91dGUuc2V0VHJhbnNpdGlvbih0cmFuc2l0aW9uKS50aGVuKCgpID0+IHtcbiAgICAgICAgdHJhbnNpdGlvbi5wYXRoLmxvYWRlZCA9IHRydWU7XG5cbiAgICAgICAgbmV4dChzdGF0ZS5jaGlsZHJlbiwgb25FbmQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgbmV4dCh0aGlzLmdldFN0YXRlc0J5TGV2ZWwoMCksICgpID0+IHtcbiAgICBpZighdHJhbnNpdGlvbi5yb3V0ZXMubGVuZ3RoKSB7XG4gICAgICBpZih0aGlzLl9fcmVkaXJlY3RzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgV3Jvbmcgcm91dGVyIGRlZmF1bHQgdXJsIFwiJHt0aGlzLmRlZmF1bHRVcmx9XCJgKTtcbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5kZWZhdWx0VXJsKSB7XG4gICAgICAgIHRoaXMuaGFzaE1vZGUgJiYgdGhpcy5kZWZhdWx0VXJsICE9IHRoaXMuZ2V0VXJsKCkgJiYgKHRoaXMuX19kaXNhYmxlQ2hhbmdlID0gdHJ1ZSk7XG4gICAgICAgIHRoaXMuc2V0VXJsKHRoaXMuZGVmYXVsdFVybCk7XG4gICAgICAgIHRoaXMuX19yZWRpcmVjdHMrKztcblxuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2VTdGF0ZSgpO1xuICAgICAgfVxuXG4gICAgICBpZihBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgTm90IGZvdW5kIGEgZGVmYXVsdCByb3V0ZS4gWW91IGNhbiBwYXNzIGl0IGluIFwicm91dGVyLmluaXQoZGVmYXVsdFVybClcIiBmdW5jdGlvbmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX19vcHRpb25zID0ge307XG4gICAgdGhpcy5fX3JlZGlyZWN0cyA9IDA7XG5cbiAgICBpZihwcmV2VHJhbnNpdGlvbikge1xuICAgICAgZm9yKGxldCBpID0gbGV2ZWwsIGwgPSBwcmV2VHJhbnNpdGlvbi5yb3V0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCByb3V0ZSA9IHByZXZUcmFuc2l0aW9uLnJvdXRlc1tpXTtcbiAgICAgICAgcm91dGUuY29tcG9uZW50ICYmIHJvdXRlLmNvbXBvbmVudC5lbXB0eSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc3RhdGUtY2hhbmdlJywge1xuICAgICAgZGV0YWlsOiB0cmFuc2l0aW9uXG4gICAgfSkpO1xuICB9KTtcbn07XG5cbnJvdXRlci5UcmFuc2l0aW9uID0gVHJhbnNpdGlvbjtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL3JvdXRlci5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi4vc2VydmljZXMvcm91dGVyJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbc3RhdGVdOm5vdChbdXJsXSksW3VybF06bm90KFtzdGF0ZV0pJztcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gdHJ1ZTtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydyZWxvYWQnXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnYScsIEEpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IG51bGw7XG4gICAgdGhpcy5wYXJhbXMgPSB7fTtcbiAgICB0aGlzLnF1ZXJ5ID0ge307XG4gICAgdGhpcy5oYXNoID0gJyc7XG4gICAgdGhpcy5vcHRpb25zID0ge307XG4gICAgdGhpcy5pc1VybCA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCd1cmwnKTtcbiAgfVxuXG4gIGNoYW5nZWRVcmwodXJsKSB7XG4gICAgdGhpcy5zZXRVcmwodXJsKTtcbiAgICB0aGlzLnJlc2V0SHJlZih1cmwpO1xuICB9XG5cbiAgY2hhbmdlZFN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgdGhpcy5yZXNldEhyZWYoKTtcbiAgfVxuXG4gIGNoYW5nZWRQYXJhbXMocGFyYW1zKSB7XG4gICAgdGhpcy5zZXRQYXJhbXMocGFyYW1zKTtcbiAgICB0aGlzLnJlc2V0SHJlZigpO1xuICB9XG5cbiAgY2hhbmdlZFF1ZXJ5KHF1ZXJ5KSB7XG4gICAgdGhpcy5zZXRRdWVyeShxdWVyeSk7XG4gICAgdGhpcy5yZXNldEhyZWYoKTtcbiAgfVxuXG4gIGNoYW5nZWRIYXNoKHF1ZXJ5KSB7XG4gICAgdGhpcy5zZXRIYXNoKHF1ZXJ5KTtcbiAgICB0aGlzLnJlc2V0SHJlZigpO1xuICB9XG5cbiAgY2hhbmdlZE9wdGlvbnMob3B0aW9ucykge1xuICAgIHRoaXMuc2V0UXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICBjaGFuZ2VkUmVsb2FkKHZhbCkge1xuICAgIHRoaXMuc2V0UmVsb2FkKHZhbCk7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZih0aGlzLmlzVXJsKSB7XG4gICAgICAgIHJvdXRlci5sb2NhdGlvbih0aGlzLmF0dHJzLnVybCwgdGhpcy5vcHRpb25zKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJvdXRlci5zdGF0ZSh0aGlzLnN0YXRlLm5hbWUsIHRoaXMucGFyYW1zLCB0aGlzLnF1ZXJ5LCB0aGlzLmhhc2gsICB0aGlzLm9wdGlvbnMpO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgnc3RhdGUnKSAmJiB0aGlzLnNldFN0YXRlKHRoaXMuYXR0cnMuc3RhdGUpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ3BhcmFtcycpICYmIHRoaXMuc2V0UGFyYW1zKHRoaXMuYXR0cnMucGFyYW1zKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdxdWVyeScpICYmIHRoaXMuc2V0UXVlcnkodGhpcy5hdHRycy5xdWVyeSk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgnaGFzaCcpICYmIHRoaXMuc2V0SGFzaCh0aGlzLmF0dHJzLmhhc2gpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ29wdGlvbnMnKSAmJiB0aGlzLnNldE9wdGlvbnModGhpcy5hdHRycy5vcHRpb25zKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdyZWxvYWQnKSAmJiB0aGlzLnNldFJlbG9hZCh0aGlzLmF0dHJzLnJlbG9hZCk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgndXJsJykgJiYgdGhpcy5zZXRVcmwodGhpcy5hdHRycy51cmwpO1xuICAgIHRoaXMucmVzZXRIcmVmKHRoaXMudXJsKTtcbiAgfVxuXG4gIHNldFVybCh1cmwpIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgfVxuXG4gIHNldFN0YXRlKG5hbWUpIHtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5nZXRTdGF0ZShuYW1lKTtcbiAgICB0aGlzLnNjb3BlLmlzQWN0aXZlU3RhdGUgPSByb3V0ZXIuaXNBY3RpdmVTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgICB0aGlzLnNjb3BlLmluQWN0aXZlU3RhdGUgPSByb3V0ZXIuaW5BY3RpdmVTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHNldFBhcmFtcyhwYXJhbXMpIHtcbiAgICBpZih0eXBlb2YgcGFyYW1zICE9ICdvYmplY3QnIHx8ICFwYXJhbXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIHBhcmFtcyBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICB9XG5cbiAgc2V0UXVlcnkocXVlcnkpIHtcbiAgICBpZih0eXBlb2YgcXVlcnkgIT0gJ29iamVjdCcgfHwgIXF1ZXJ5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBxdWVyeSBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgfVxuXG4gIHNldEhhc2goaGFzaCkge1xuICAgIGlmKHR5cGVvZiBoYXNoICE9ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBoYXNoIG11c3QgYmUgYSBzdHJpbmdgKTtcbiAgICB9XG5cbiAgICB0aGlzLmhhc2ggPSBoYXNoO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYodHlwZW9mIG9wdGlvbnMgIT0gJ29iamVjdCcgfHwgIW9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIG9wdGlvbnMgbXVzdCBiZSBhbiBvYmplY3RgKTtcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgc2V0UmVsb2FkKHZhbCkge1xuICAgIHRoaXMub3B0aW9ucy5yZWxvYWQgPSB2YWw7XG4gIH1cblxuICBnZXRTdGF0ZShuYW1lKSB7XG4gICAgbGV0IHN0YXRlID0gcm91dGVyLmdldFN0YXRlKG5hbWUpO1xuXG4gICAgaWYoIXN0YXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCByb3V0ZXIgc3RhdGUgd2l0aCBuYW1lIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgcmVzZXRIcmVmKHVybCkge1xuICAgIGlmKHVybCkge1xuICAgICAgdGhpcy5hdHRycy5ocmVmID0gdXJsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuYXR0cnMuaHJlZiA9IHJvdXRlci5jcmVhdGVTdGF0ZVVybCh0aGlzLnN0YXRlLCB0aGlzLnBhcmFtcywgdGhpcy5xdWVyeSwgdGhpcy5oYXNoKTtcbiAgICB9XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYS5qcyIsImltcG9ydCBUZXh0IGZyb20gJy4vdGV4dCc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50IGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdjb250ZW50JywgQ29udGVudCk7XG4gICAgQWtpbGkuYWxpYXMoJ1tjb250ZW50ZWRpdGFibGVdJywgJ2NvbnRlbnQnKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIGlmKHRoaXMuZWwuaGFzQXR0cmlidXRlKCdlZGl0YWJsZScpKSB7XG4gICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ2VkaXRhYmxlJykpO1xuICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoJ2VkaXRhYmxlJyk7XG4gICAgfVxuXG4gICAgaWYoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKS5kaXNwbGF5ID09ICdpbmxpbmUnKSB7XG4gICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIHRoaXMudmFsdWVLZXkgPSAnaW5uZXJIVE1MJztcbiAgfVxuXG4gIHNldEVsZW1lbnRGb2N1cygpIHtcbiAgICBsZXQgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIGxldCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG5cbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGhpcy5lbCk7XG4gICAgcmFuZ2UuY29sbGFwc2UoZmFsc2UpO1xuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9jb250ZW50LmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpJztcblxuLyoqXG4gKiBJZiBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWYgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgdHJhbnNwYXJlbnQgPSB0cnVlO1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbaXNdJztcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydyZWNyZWF0ZSddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpZicsIElmKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2Vsc2UtaWYnLCBFbHNlSWYpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnZWxzZScsIEVsc2UpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5odG1sID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLnN0YXRlID0gZmFsc2U7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnJlY3JlYXRlID0gZmFsc2U7XG4gICAgdGhpcy5pc0NvbXBpbGVkID0gZmFsc2U7XG4gICAgdGhpcy5kaXNwbGF5ID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKS5kaXNwbGF5O1xuICB9XG5cbiAgY2hhbmdlZElzKHZhbHVlKSB7XG4gICAgdGhpcy5zdGF0ZSA9ICEhdmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSgpO1xuICB9XG5cbiAgY2hhbmdlZFJlY3JlYXRlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRSZWNyZWF0aW9uKHZhbHVlKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ3JlY3JlYXRlJykgJiYgdGhpcy5zZXRSZWNyZWF0aW9uKHRoaXMuYXR0cnMucmVjcmVhdGUpO1xuICAgIHRoaXMuc3RhdGUgPSAhIXRoaXMuYXR0cnMuaXM7XG4gICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoKVxuICB9XG5cbiAgc2V0QWN0aXZpdHkoYWN0aXZlKSB7XG4gICAgdGhpcy5hY3RpdmUgPSBhY3RpdmU7XG4gIH1cblxuICBzZXRSZWNyZWF0aW9uKHJlY3JlYXRlKSB7XG4gICAgdGhpcy5yZWNyZWF0ZSA9IHJlY3JlYXRlO1xuICB9XG5cbiAgc2V0U3RhdGUoKSB7XG4gICAgbGV0IHJlcyA9IHRoaXMuY29tcGlsYXRpb24oKTtcbiAgICBsZXQgbmV4dCA9IHRoaXMuZWwubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGxldCByZXN1bHQ7XG5cbiAgICBpZighbmV4dCB8fCAhbmV4dC5tYXRjaGVzKCdlbHNlLWlmLGVsc2UnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5leHQuX19ha2lsaS5zZXRBY3Rpdml0eSh0aGlzLmFjdGl2ZSB8fCB0aGlzLnN0YXRlKTtcbiAgICBuZXh0Ll9fYWtpbGkuc2V0UmVjcmVhdGlvbih0aGlzLnJlY3JlYXRlKTtcbiAgICByZXN1bHQgPSBuZXh0Ll9fYWtpbGkuc2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzKS50aGVuKCgpID0+IHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH1cblxuICBjb21waWxhdGlvbigpIHtcbiAgICBsZXQgcmVzO1xuXG4gICAgaWYodGhpcy5zdGF0ZSAmJiAhdGhpcy5hY3RpdmUpIHtcbiAgICAgIGlmKHRoaXMucmVjcmVhdGUgfHwgIXRoaXMuaXNDb21waWxlZCkge1xuICAgICAgICByZXMgPSB0aGlzLmNvbXBpbGUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gdGhpcy5kaXNwbGF5O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmKHRoaXMucmVjcmVhdGUpIHtcbiAgICAgICAgdGhpcy5fX2VtcHR5KCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKCF0aGlzLmlzQ29tcGlsZWQpIHtcbiAgICAgICAgcmVzID0gdGhpcy5jb21waWxlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBjb21waWxlKCkge1xuICAgIGxldCByZXM7XG5cbiAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcbiAgICByZXMgPSBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgIHRoaXMuaXNDb21waWxlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG59O1xuXG4vKipcbiAqIEVsc2VJZiBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIEVsc2VJZiBleHRlbmRzIElmIHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogRWxzZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIEVsc2UgZXh0ZW5kcyBFbHNlSWYge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdpcycsICd0cnVlJyk7XG4gIH1cbn1cblxuSWYuRWxzZUlmID0gRWxzZUlmO1xuSWYuRWxzZSA9IEVsc2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaWYuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGknO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vc2VydmljZXMvcmVxdWVzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluY2x1ZGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgdHJhbnNwYXJlbnQgPSB0cnVlO1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbdXJsXSc7XG4gIHN0YXRpYyBldmVudHMgPSBbJ2xvYWQnLCAnZXJyb3InXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaW5jbHVkZScsIEluY2x1ZGUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5odG1sID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICB9XG5cbiAgY2hhbmdlZFVybCh1cmwpIHtcbiAgICB0aGlzLmdldFRlbXBsYXRlKHVybCk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUZW1wbGF0ZSh0aGlzLmF0dHJzLnVybCk7XG4gIH1cblxuICBnZXRUZW1wbGF0ZSh1cmwpIHtcbiAgICB0aGlzLmNvbm5lY3Rpb24gJiYgdGhpcy5jb25uZWN0aW9uLmFib3J0KCk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQodXJsLCB7XG4gICAgICBvblN0YXJ0OiAoeGhyKSA9PiB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IHhocjtcbiAgICAgIH1cbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gICAgICB0aGlzLmVtcHR5KCk7XG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcbiAgICAgIEFraWxpLnNldFRlbXBsYXRlKHRoaXMuZWwsIHJlcy5kYXRhKTtcblxuICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0cnMub25Mb2FkLnRyaWdnZXIoKTtcbiAgICAgIH0pO1xuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHRoaXMuYXR0cnMub25FcnJvci50cmlnZ2VyKGVycik7XG4gICAgfSk7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaW5jbHVkZS5qcyIsImltcG9ydCBUZXh0IGZyb20gJy4vdGV4dCc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCBleHRlbmRzIFRleHQge1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ2NoZWNrZWQnXTtcbiAgc3RhdGljIGV2ZW50cyA9IFsnY2hhbmdlJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2lucHV0JywgSW5wdXQpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pc0NoZWNrYm94ID0gdGhpcy5lbC50eXBlID09ICdjaGVja2JveCc7XG4gICAgdGhpcy5pc1JhZGlvID0gdGhpcy5lbC50eXBlID09ICdyYWRpbyc7XG4gIH1cblxuICBjaGFuZ2VkQ2hlY2tlZCh2YWx1ZSkge1xuICAgIHRoaXMuc2V0Q2hlY2tlZCh2YWx1ZSk7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgICh0aGlzLmlzUmFkaW8gfHwgdGhpcy5pc0NoZWNrYm94KSAmJiB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRDaGVja2VkKHRoaXMuZWwuY2hlY2tlZCwgZmFsc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzb2x2ZWQoKSB7XG4gICAgKHRoaXMuaXNDaGVja2JveCB8fCB0aGlzLmlzUmFkaW8pICYmIHRoaXMuc2V0Q2hlY2tlZCh0aGlzLmF0dHJzLmNoZWNrZWQpO1xuICB9XG5cbiAgc2V0Q2hlY2tlZCh2YWx1ZSwgdHJpZ2dlciA9IHRydWUpIHtcbiAgICB2YWx1ZSA9ICEhdmFsdWU7XG5cbiAgICBpZih0aGlzLnByZXZDaGVja2VkID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZWwuY2hlY2tlZCA9IHRoaXMucHJldkNoZWNrZWQgPSB2YWx1ZTtcbiAgICB0cmlnZ2VyICYmIHRoaXMuYXR0cnMub25DaGFuZ2UuZGlzcGF0Y2goRXZlbnQsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICB0aGlzLmlzUmFkaW8gJiYgdGhpcy5jaGFuZ2VSYWRpbygpO1xuICB9XG5cbiAgc2V0VmFsdWUoKSB7XG4gICAgc3VwZXIuc2V0VmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLmlzUmFkaW8gJiYgdGhpcy5hdHRycy5vbkNoYW5nZS5kaXNwYXRjaChFdmVudCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICB9XG5cbiAgY2hhbmdlUmFkaW8oKSB7XG4gICAgbGV0IG5hbWUgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICAgIGxldCBzZWxlY3RvciA9IGBpbnB1dFt0eXBlPXJhZGlvXVtuYW1lPScke25hbWV9J106bm90KFtzY29wZT0nJHt0aGlzLnNjb3BlLl9fbmFtZX0nXSlgO1xuICAgIGxldCBjaGlsZHJlbiA9IEFraWxpLnJvb3QuY2hpbGRyZW4oc2VsZWN0b3IpO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJhZGlvID0gY2hpbGRyZW5baV07XG5cbiAgICAgIHJhZGlvLnNldENoZWNrZWQocmFkaW8uZWwuY2hlY2tlZCk7XG4gICAgfVxuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2lucHV0LmpzIiwiaW1wb3J0IEZvciwgeyBMb29wIH0gZnJvbSAnLi9mb3InO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpJztcblxuLyoqXG4gKiBUaGUgcmFkaW8gZ3JvdXAgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZGlvIGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW25hbWVdJztcbiAgc3RhdGljIGV2ZW50cyA9IFsnY2hlY2snXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgncmFkaW8nLCBSYWRpbyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdyYWRpby1idXR0b24nLCBSYWRpb0J1dHRvbik7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLml0ZXJhYmxlID0gdGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ2luJyk7XG4gIH1cblxuICBjaGFuZ2VkSW4odmFsdWUpIHtcbiAgICBzdXBlci5jaGFuZ2VkSW4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLnNldE5hbWVzKHRoaXMuYXR0cnMubmFtZSk7XG4gIH1cblxuICBjaGFuZ2VkTmFtZShuYW1lKSB7XG4gICAgdGhpcy5zZXROYW1lcyhuYW1lKTtcbiAgfVxuXG4gIGNoYW5nZWRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLml0ZXJhYmxlICYmIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuZ2V0UmFkaW9WYWx1ZSgpO1xuXG4gICAgICAgIGlmKHZhbHVlID09PSB0aGlzLnByZXZWYWx1ZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJldlZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuYXR0cnMub25DaGVjay50cmlnZ2VyKHZhbHVlLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc29sdmVkKCkge1xuICAgIHRoaXMuc2V0TmFtZXModGhpcy5hdHRycy5uYW1lKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCd2YWx1ZScpICYmIHRoaXMuc2V0VmFsdWUodGhpcy5hdHRycy52YWx1ZSk7XG4gIH1cblxuICBzZXROYW1lcyhuYW1lKSB7XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbignaW5wdXRbdHlwZT1yYWRpb10nKTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNoaWxkcmVuW2ldLmVsLnNldEF0dHJpYnV0ZSgnbmFtZScsIG5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgaWYodmFsdWUgPT09IHRoaXMucHJldlZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHByZXYgPSB0aGlzLnByZXZWYWx1ZTtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuICAgIGxldCBpc1RydWUgPSBmYWxzZTtcblxuICAgIHRoaXMucHJldlZhbHVlID0gdmFsdWU7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcmFkaW8gPSBjaGlsZHJlbltpXTtcbiAgICAgIGxldCBpc1NlbGVjdGVkID0gcmFkaW8uZWwudmFsdWUgPT09IHZhbHVlO1xuXG4gICAgICBpc1NlbGVjdGVkICYmIChpc1RydWUgPSB0cnVlKTtcbiAgICAgIHJhZGlvLnNldENoZWNrZWQoaXNTZWxlY3RlZCk7XG4gICAgfVxuXG4gICAgaWYoIWlzVHJ1ZSkge1xuICAgICAgaWYodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgaWYocHJldiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmF0dHJzLm9uQ2hlY2sudHJpZ2dlcih2YWx1ZSwgeyBidWJibGVzOiB0cnVlIH0pO1xuICB9XG5cbiAgZ2V0UmFkaW9WYWx1ZSgpIHtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJhZGlvID0gY2hpbGRyZW5baV07XG5cbiAgICAgIGlmKHJhZGlvLmVsLmNoZWNrZWQpIHtcbiAgICAgICAgcmV0dXJuIHJhZGlvLmVsLnZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIFRoZSByYWRpbyBpdGVtIGNvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgUmFkaW9CdXR0b24gZXh0ZW5kcyBMb29wIHtcbiAgc3RhdGljIHRlbXBsYXRlID0gYDxsYWJlbD48aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJcXCR7dGhpcy52YWx1ZX1cIi8+XFwke3RoaXMuX19jb250ZW50fTwvbGFiZWw+YDtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gIH1cblxuICBjaGFuZ2VkVmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnNldFJhZGlvVmFsdWUodmFsdWUpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5zZXRSYWRpb1ZhbHVlKHRoaXMuYXR0cnMudmFsdWUpO1xuICB9XG5cbiAgc2V0UmFkaW9WYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2NvcGUudmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuXG5SYWRpby5SYWRpb0J1dHRvbiA9IFJhZGlvQnV0dG9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3JhZGlvLmpzIiwiaW1wb3J0IEZvciwgeyBMb29wIH0gZnJvbSAnLi9mb3InO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnbXVsdGlwbGUnXTtcbiAgc3RhdGljIGV2ZW50cyA9IFsnY2hhbmdlJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3NlbGVjdCcsIFNlbGVjdCk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdvcHRpb24nLCBPcHRpb24pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pdGVyYXRvclRhZ05hbWUgPSAnb3B0aW9uJztcbiAgICB0aGlzLmlzTXVsdGlwbGUgPSBmYWxzZTtcbiAgfVxuXG4gIGNoYW5nZWRNdWx0aXBsZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0TXVsdGlwbGUodmFsdWUpO1xuICB9XG5cbiAgY2hhbmdlZENvbnRlbnQodmFsdWUpIHtcbiAgICB0aGlzLnNldENvbnRlbnQodmFsdWUpO1xuICB9XG5cbiAgY2hhbmdlZEluKHZhbHVlKSB7XG4gICAgc3VwZXIuY2hhbmdlZEluLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5kcmF3U2VsZWN0KCk7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5lbC5jb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIGNvbXBpbGVkKCkge1xuICAgIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgnbXVsdGlwbGUnKSAmJiB0aGlzLnNldE11bHRpcGxlKHRoaXMuYXR0cnMubXVsdGlwbGUpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ2NvbnRlbnQnKSAmJiB0aGlzLnNldENvbnRlbnQodGhpcy5hdHRycy5jb250ZW50KTtcbiAgICB0aGlzLmRyYXdTZWxlY3QoKTtcbiAgfVxuXG4gIHNldE11bHRpcGxlKHZhbHVlKSB7XG4gICAgdGhpcy5pc011bHRpcGxlID0gdmFsdWU7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKHV0aWxzLmNvcHkodGhpcy5lbC5jb250ZW50KSkpO1xuICB9XG5cbiAgc2V0Q29udGVudCh2YWx1ZSkge1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5mb3JtYXRWYWx1ZSh2YWx1ZSkpO1xuICB9XG5cbiAgZHJhd1NlbGVjdCgpIHtcbiAgICBsZXQgc2VsZWN0ZWQgPSBbXTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldLl9fYWtpbGk7XG4gICAgICBsZXQgc2VsZWN0aW9uID0gb3B0aW9uLmF0dHJzLnNlbGVjdGVkO1xuXG4gICAgICBpZihzZWxlY3Rpb24pIHtcbiAgICAgICAgc2VsZWN0ZWQucHVzaChvcHRpb24uZWwudmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBvcHRpb24uZWwuc2VsZWN0ZWQgPSBzZWxlY3Rpb247XG4gICAgfVxuXG4gICAgaWYoIXNlbGVjdGVkLmxlbmd0aCkge1xuICAgICAgdGhpcy5yZWRlZmluZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5mb3JtYXRWYWx1ZShzZWxlY3RlZCkpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUl0ZXJhdG9yRWxlbWVudCgpIHtcbiAgICBsZXQgZWwgPSBzdXBlci5jcmVhdGVJdGVyYXRvckVsZW1lbnQoKTtcblxuICAgIGlmKCFlbC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0aGlzLmh0bWwudHJpbSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBpbkNvbnRlbnQodmFsdWUpIHtcbiAgICBpZighdGhpcy5pc011bHRpcGxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbC5jb250ZW50ID09PSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5lbC5jb250ZW50LmluZGV4T2YodmFsdWUpICE9IC0xO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBpZighdGhpcy5pc011bHRpcGxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbC52YWx1ZTtcbiAgICB9XG5cbiAgICBsZXQgY29udGVudCA9IFtdO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgIGlmKG9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICBjb250ZW50LnB1c2gob3B0aW9uLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGZvcm1hdFZhbHVlKHZhbHVlKSB7XG4gICAgaWYodGhpcy5pc011bHRpcGxlKSB7XG4gICAgICBpZighQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCk/IFt2YWx1ZV06IFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUubGVuZ3RoPyB2YWx1ZVswXTogJyc7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJlZGVmaW5lKCkge1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5nZXRDb250ZW50KCkpO1xuICB9XG5cbiAgY2hhbmdlVmFsdWUodmFsdWUpIHtcbiAgICBpZih1dGlscy5jb21wYXJlKHRoaXMuZWwuY29udGVudCwgdmFsdWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuZWwudmFsdWUgPSB2YWx1ZVt2YWx1ZS5sZW5ndGggLSAxXTtcblxuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXTtcblxuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB2YWx1ZS5pbmRleE9mKG9wdGlvbi52YWx1ZSkgIT0gLTE7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5lbC52YWx1ZSA9IHZhbHVlO1xuXG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldO1xuXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IG9wdGlvbi52YWx1ZSA9PSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmVsLmNvbnRlbnQgPSB2YWx1ZTtcbiAgICB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjbGFzcyBPcHRpb24gZXh0ZW5kcyBMb29wIHtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydzZWxlY3RlZCddO1xuXG4gIF9fZ2V0UGFyc2VkRXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG4gICAgcmV0dXJuIHV0aWxzLmRlY29kZUh0bWxFbnRpdGllcyhleHByZXNzaW9uKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgY2hhbmdlZFNlbGVjdGVkKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTZWxlY3RlZCh2YWx1ZSk7XG4gIH1cblxuICBzZXRTZWxlY3RlZCh2YWx1ZSkge1xuICAgIHRoaXMuZWwuc2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICB0aGlzLmZvci5yZWRlZmluZSgpO1xuICB9XG59XG5cblNlbGVjdC5PcHRpb24gPSBPcHRpb247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvc2VsZWN0LmpzIiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0JztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRhcmVhIGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0ZXh0YXJlYScsIFRleHRhcmVhKTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90ZXh0YXJlYS5qcyIsImltcG9ydCBBa2lsaSBmcm9tICcuL2FraWxpJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJztcblxuLyoqXG4gKiBTY29wZSBjbGFzcy5cbiAqXG4gKiBBbGwgcHJvcGVydGllcyBzdGFydGluZyB3aXRoIF9fIHdpbGwgbm90IGJlIHdhdGNoaW5nLlxuICogWW91IGNhbiB1c2UgdGhlbSBmb3IgaW50ZXJuYWwgbWFuaXB1bGF0aW9ucy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcGUge1xuICBzdGF0aWMgbmVzdGVkV2F0Y2hpbmc7XG5cbiAgY29uc3RydWN0b3IobmFtZSwgZWwsIGNvbXBvbmVudCkge1xuICAgIHRoaXMuX19uYW1lID0gbmFtZTtcbiAgICB0aGlzLl9fZWwgPSBlbDtcbiAgICB0aGlzLl9fY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIGVsLnNldEF0dHJpYnV0ZSgnc2NvcGUnLCBuYW1lKTtcbiAgfVxuXG4gIGdldCBfX3V0aWxzKCkge1xuICAgIHJldHVybiB1dGlscztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYSBzY29wZSB2YWx1ZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3N0cmljdD1mYWxzZV0gLSB3aXRob3V0IG9iamVjdCBjb3B5aW5nXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0KGtleXMsIHZhbHVlLCBzdHJpY3QgPSBmYWxzZSkge1xuICAgIGlmKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cblxuICAgIEFraWxpLnVuaXNvbGF0ZWQoKCkgPT4ge1xuICAgICAgc3RyaWN0ICYmICh0aGlzLl9fY29tcG9uZW50Ll9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyA9IHRydWUpO1xuICAgICAgdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcywgKGxhc3QsIHZhbCkgPT4ge1xuICAgICAgICBpZighbGFzdCkge1xuICAgICAgICAgIHJldHVybiB2YWwgfHwge307XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHN0cmljdCAmJiAodGhpcy5fX2NvbXBvbmVudC5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgPSBmYWxzZSk7XG4gICAgfSk7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Njb3BlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==