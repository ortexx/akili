/*!
 * Akili is a javascript framework
 * 
 * const Akili = makeItEasy(js + html);
 * 
 * @version 0.2.7
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

var _component2 = __webpack_require__(2);

var _component3 = _interopRequireDefault(_component2);

var _if = __webpack_require__(14);

var _if2 = _interopRequireDefault(_if);

var _for = __webpack_require__(6);

var _for2 = _interopRequireDefault(_for);

var _select = __webpack_require__(21);

var _select2 = _interopRequireDefault(_select);

var _input = __webpack_require__(18);

var _input2 = _interopRequireDefault(_input);

var _radio = __webpack_require__(20);

var _radio2 = _interopRequireDefault(_radio);

var _text = __webpack_require__(5);

var _text2 = _interopRequireDefault(_text);

var _textarea = __webpack_require__(23);

var _textarea2 = _interopRequireDefault(_textarea);

var _content = __webpack_require__(12);

var _content2 = _interopRequireDefault(_content);

var _include = __webpack_require__(17);

var _include2 = _interopRequireDefault(_include);

var _iframe = __webpack_require__(15);

var _iframe2 = _interopRequireDefault(_iframe);

var _image = __webpack_require__(16);

var _image2 = _interopRequireDefault(_image);

var _embed = __webpack_require__(13);

var _embed2 = _interopRequireDefault(_embed);

var _audio = __webpack_require__(11);

var _audio2 = _interopRequireDefault(_audio);

var _video = __webpack_require__(25);

var _video2 = _interopRequireDefault(_video);

var _track = __webpack_require__(24);

var _track2 = _interopRequireDefault(_track);

var _source = __webpack_require__(22);

var _source2 = _interopRequireDefault(_source);

var _object = __webpack_require__(19);

var _object2 = _interopRequireDefault(_object);

var _route = __webpack_require__(7);

var _route2 = _interopRequireDefault(_route);

var _url = __webpack_require__(1);

var _url2 = _interopRequireDefault(_url);

var _a = __webpack_require__(10);

var _a2 = _interopRequireDefault(_a);

var _scope = __webpack_require__(26);

var _scope2 = _interopRequireDefault(_scope);

var _eventEmitter = __webpack_require__(8);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

var _request = __webpack_require__(4);

var _request2 = _interopRequireDefault(_request);

var _router = __webpack_require__(9);

var _router2 = _interopRequireDefault(_router);

var _utils = __webpack_require__(3);

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

    return Akili.isolate(function () {
      return fn.apply(context, _arguments3);
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(2);

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
    key: 'changedUrl',
    value: function changedUrl(url) {
      this.setUrl(url);
    }
  }, {
    key: 'compiled',
    value: function compiled() {
      this.attrs.hasOwnProperty('url') && this.setUrl(this.attrs.url);
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
;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

var _request = __webpack_require__(4);

var _request2 = _interopRequireDefault(_request);

var _utils = __webpack_require__(3);

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
/* 7 */
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
/* 8 */
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
/* 9 */
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

var _route2 = __webpack_require__(7);

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

      if (!_this3.__options.saveScrollPosition && !transition.hash) {
        document.body.scrollTop = 0;
        document.body.scrollLeft = 0;
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(2);

var _component2 = _interopRequireDefault(_component);

var _router = __webpack_require__(9);

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
/* 11 */
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

var Audio = function (_Url) {
  _inherits(Audio, _Url);

  function Audio() {
    _classCallCheck(this, Audio);

    return _possibleConstructorReturn(this, (Audio.__proto__ || Object.getPrototypeOf(Audio)).apply(this, arguments));
  }

  _createClass(Audio, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('audio', Audio);
    }
  }]);

  return Audio;
}(_url2.default);

exports.default = Audio;
;

/***/ }),
/* 12 */
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
/* 13 */
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

var Embed = function (_Url) {
  _inherits(Embed, _Url);

  function Embed() {
    _classCallCheck(this, Embed);

    return _possibleConstructorReturn(this, (Embed.__proto__ || Object.getPrototypeOf(Embed)).apply(this, arguments));
  }

  _createClass(Embed, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('embed', Embed);
    }
  }]);

  return Embed;
}(_url2.default);

exports.default = Embed;
;

/***/ }),
/* 14 */
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
/* 15 */
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

var Iframe = function (_Url) {
  _inherits(Iframe, _Url);

  function Iframe() {
    _classCallCheck(this, Iframe);

    return _possibleConstructorReturn(this, (Iframe.__proto__ || Object.getPrototypeOf(Iframe)).apply(this, arguments));
  }

  _createClass(Iframe, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('iframe', Iframe);
    }
  }]);

  return Iframe;
}(_url2.default);

exports.default = Iframe;
;

/***/ }),
/* 16 */
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

var Image = function (_Url) {
  _inherits(Image, _Url);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
  }

  _createClass(Image, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('img', Image);
    }
  }]);

  return Image;
}(_url2.default);

exports.default = Image;
;

/***/ }),
/* 17 */
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
/* 18 */
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
/* 19 */
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
      _akili2.default.component('object', Objects);
    }
  }]);

  return Objects;
}(_url2.default);

exports.default = Objects;
;

/***/ }),
/* 20 */
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
/* 21 */
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

var Source = function (_Url) {
  _inherits(Source, _Url);

  function Source() {
    _classCallCheck(this, Source);

    return _possibleConstructorReturn(this, (Source.__proto__ || Object.getPrototypeOf(Source)).apply(this, arguments));
  }

  _createClass(Source, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('source', Source);
    }
  }]);

  return Source;
}(_url2.default);

exports.default = Source;
;

/***/ }),
/* 23 */
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
      _akili2.default.component('textarea', Textarea);
    }
  }]);

  return Textarea;
}(_text2.default);

exports.default = Textarea;
;

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

var Track = function (_Url) {
  _inherits(Track, _Url);

  function Track() {
    _classCallCheck(this, Track);

    return _possibleConstructorReturn(this, (Track.__proto__ || Object.getPrototypeOf(Track)).apply(this, arguments));
  }

  _createClass(Track, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('track', Track);
    }
  }]);

  return Track;
}(_url2.default);

exports.default = Track;
;

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

var Video = function (_Url) {
  _inherits(Video, _Url);

  function Video() {
    _classCallCheck(this, Video);

    return _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).apply(this, arguments));
  }

  _createClass(Video, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('video', Video);
    }
  }]);

  return Video;
}(_url2.default);

exports.default = Video;
;

/***/ }),
/* 26 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzA0MGQ5MTU4ZGE2ZWIwNWI3NTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FraWxpLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VybC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnQtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcm91dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2EuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lbWJlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5jbHVkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcmFkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZXh0YXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90cmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWRlby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NvcGUuanMiXSwibmFtZXMiOlsiQWtpbGkiLCJvcHRpb25zIiwibmVzdGVkV2F0Y2hpbmciLCJzaG93RXZhbHVhdGlvbkVycm9ycyIsImRlYnVnIiwiX19pbml0IiwiX19jb21wb25lbnRzIiwiX19hbGlhc2VzIiwiX19zY29wZXMiLCJfX3dpbmRvdyIsIl9faXNvbGF0aW9uIiwiX19ldmFsdWF0aW9uIiwiX19odG1sIiwid2luZG93IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJfX3NlcnZlclJlbmRlcmluZyIsImh0bWxCb29sZWFuQXR0cmlidXRlcyIsImNvbXBvbmVudHMiLCJkZWNvcmF0b3JzIiwic2VydmljZXMiLCJqb2luQmluZGluZ0tleXMiLCJrZXlzIiwibWFwIiwiZWwiLCJ0b1N0cmluZyIsImpvaW4iLCJhZGRTY29wZSIsInNjb3BlIiwiX19uYW1lIiwiRXJyb3IiLCJnZXRTY29wZSIsIm5hbWUiLCJyZW1vdmVTY29wZSIsIl9fY29tcG9uZW50IiwiX19lbCIsIl9fcGFyZW50IiwiZ2V0QWtpbGlQYXJlbnRzIiwidHJlZSIsImFyciIsImNoZWNrIiwibm9kZSIsInBhcmVudE5vZGUiLCJfX2FraWxpIiwicHVzaCIsInNldFRlbXBsYXRlIiwidGVtcGxhdGUiLCJyZXBsYWNlIiwiaW5uZXJIVE1MIiwiY3JlYXRlU2NvcGVOYW1lIiwiY3JlYXRlUmFuZG9tU3RyaW5nIiwic3RyIiwiaXNvbGF0ZSIsImZuIiwicmVzIiwicHJvcHMiLCJrIiwiaGFzT3duUHJvcGVydHkiLCJpIiwibCIsInByb3AiLCJpc0RlbGV0ZWQiLCJjb21wb25lbnQiLCJfX2V2YWx1YXRlQnlLZXlzIiwidW5kZWZpbmVkIiwic2V0UHJvcGVydHlCeUtleXMiLCJsYXN0IiwidmFsIiwidmFsdWUiLCJsZW5ndGgiLCJ1bmV2YWx1YXRlZCIsImV2YWx1YXRpb24iLCJ1bmlzb2xhdGVkIiwiaW5pdGlhbGl6ZSIsInJlY29tcGlsZSIsIl9fcmVjb21waWxlIiwiaXNSb290IiwiX19yb290IiwiY29tcG9uZW50TmFtZSIsInRvRGFzaENhc2UiLCJnZXRBdHRyaWJ1dGUiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJfQ29tcG9uZW50IiwiQ0hFQ0tfQUxJQVNFUyIsInNlbGVjdG9ycyIsIk9iamVjdCIsInNlbGVjdG9yQWxsIiwibWF0Y2hlcyIsInNlbGVjdG9yIiwiQ29tcG9uZW50IiwiX19jYW5jZWxsZWQiLCJfX2NyZWF0ZSIsImNvbXBpbGUiLCJyb290IiwiZWxlbWVudHMiLCJuZXN0ZWRJbml0aWFsaXppbmciLCJjaGlsZHJlbiIsImNoaWxkIiwicCIsIl9fY29tcGlsZSIsIlByb21pc2UiLCJhbGwiLCJ0aGVuIiwiciIsIl9fcmVzb2x2ZSIsImNvbnNvbGUiLCJ3YXJuIiwidW5yZWdpc3RlckNvbXBvbmVudCIsImFsaWFzIiwidW5yZWdpc3RlckFsaWFzIiwiaXNvbGF0ZUFycmF5UHJvdG90eXBlIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwia2V5Iiwib2xkIiwiX19pc1Byb3h5IiwiYXBwbHkiLCJpc29sYXRlV2luZG93RnVuY3Rpb25zIiwic2V0VGltZW91dCIsInNldEludGVydmFsIiwiY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24iLCJjb25zdHJ1Y3RvciIsImlzb2xhdGVFdmVudHMiLCJFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmUiLCJfX2FraWxpTGlzdGVuZXJzIiwiYXJndW1lbnRzIiwiYXJncyIsInNsaWNlIiwiY2FsbCIsImxpbmsiLCJsaXN0ZW5lciIsInNwbGljZSIsInBvcyIsImNhbGxiYWNrIiwiaXNvbGF0ZUZ1bmN0aW9uIiwiY29udGV4dCIsIm9GbiIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImVycm9ySGFuZGxpbmciLCJ0cmlnZ2VySW5pdCIsInN0YXR1cyIsInN0eWxlIiwidmlzaWJpbGl0eSIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImluaXQiLCJzZXJ2ZXJQIiwicmVzb2x2ZSIsInNlcnZlciIsInF1ZXJ5U2VsZWN0b3IiLCJnZXQiLCJkYXRhIiwiY2hhbmdlU3RhdGUiLCJjYXRjaCIsImVyciIsImRlaW5pdCIsImRlZmluZSIsIkV2ZW50RW1pdHRlciIsIlNjb3BlIiwidXRpbHMiLCJBIiwiQXVkaW8iLCJDb250ZW50IiwiRm9yIiwiRW1iZWQiLCJJZiIsIkluY2x1ZGUiLCJJbnB1dCIsIklmcmFtZSIsIkltYWdlIiwiUmFkaW8iLCJSb3V0ZSIsIlNlbGVjdCIsIlNvdXJjZSIsIlRleHQiLCJUZXh0YXJlYSIsIlRyYWNrIiwiVXJsIiwiVmlkZW8iLCJyZXF1ZXN0Iiwicm91dGVyIiwidXJsQXR0cmlidXRlIiwidXJsIiwic2V0VXJsIiwiYXR0cnMiLCJldmFsdWF0aW9uUmVnZXgiLCJldmFsdWF0aW9uUmVnZXhHbG9iYWwiLCJSZWdFeHAiLCJzb3VyY2UiLCJzeXN0ZW1BdHRyaWJ1dGVzIiwiZXhwcmVzc2lvbiIsImV2ZW50IiwiZXZhbCIsIl9faXNTeXN0ZW1LZXkiLCJpbmRleE9mIiwiX19pc01vdW50ZWQiLCJfX2lzQ29tcGlsZWQiLCJfX2JpbmRpbmdzIiwiX19ldmFsdWF0aW5nRXZlbnQiLCJfX3JlY29tcGlsaW5nIiwiX19jb21waWxpbmciLCJfX2Rpc2FibGVQcm94eSIsIl9fY2hpbGRyZW4iLCJfX3BhcmVudHMiLCJfX2F0dHJzIiwiX19hdHRyaWJ1dGVPZiIsIl9fZXZhbHVhdGlvbkNvbXBvbmVudCIsIl9fc2V0RXZlbnRzIiwiX19zZXRQYXJlbnRzIiwiX19zZXRCb29sZWFuQXR0cmlidXRlcyIsIl9fZGVmaW5lQXR0cmlidXRlcyIsIl9faW5pdGlhbGl6ZSIsImNyZWF0ZWQiLCJjb250cm9sIiwiX19jb250cm9sQXR0cmlidXRlcyIsIl9fZXZhbHVhdGVQYXJlbnQiLCJuZXdQYXJlbnQiLCJfX2ludGVycG9sYXRlQXR0cmlidXRlcyIsImludGVycG9sYXRlIiwicGFyZW50Iiwibm9kZVR5cGUiLCJfX2luaXRpYWxpemVOb2RlIiwibm9kZVZhbHVlIiwiX19ldmFsdWF0ZSIsImNoaWxkTm9kZXMiLCJvbkNvbXBpbGVkIiwidHJpZ2dlciIsImNvbXBpbGVkIiwidGVtcGxhdGVVcmwiLCJfX2NvbnRlbnQiLCJvblJlY29tcGlsZWQiLCJyZWNvbXBpbGVkIiwib25SZXNvbHZlZCIsInJlc29sdmVkIiwiX19zY29wZSIsIl9zY29wZSIsImFzc2lnbiIsImNvbnRyb2xBdHRyaWJ1dGVzIiwiZXZlbnRzIiwiX19ldmVudHMiLCJfX25lc3RlZFdhdGNoaW5nIiwiX19uZXN0ZWRPYnNlcnZlIiwiX19vYnNlcnZlIiwiYm9vbGVhbkF0dHJpYnV0ZXMiLCJjb25jYXQiLCJzZXRBdHRyIiwiYXR0cmlidXRlcyIsIm5vZGVOYW1lIiwiaGFzQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiZXYiLCJ0ZXN0IiwicGFyZW50cyIsImV2YWx1YXRlUGFyZW50IiwidHJhbnNwYXJlbnQiLCJfX2RldGFjaCIsIl9fYWRkQ2hpbGQiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvcGVydGllcyIsImdldFByb3BlcnR5QnlLZXlzIiwiY29tcGFyZVByZXZpb3VzVmFsdWUiLCJjb3B5IiwiX19nZXROb2RlUHJvcGVydHkiLCJjb3VudGVyIiwiYXR0cmlidXRlVmFsdWUiLCJfX2V4cHJlc3Npb24iLCJtIiwiZCIsImV2YWx1YXRlIiwiZXhpc3RpbmdCaW5kaW5ncyIsInBhcnNlVmFsdWUiLCJfX2dldFBhcnNlZEV4cHJlc3Npb24iLCJsaXN0IiwicGFyc2UiLCJtZXNzYWdlIiwic3RhY2siLCJlcnJvciIsImhhc2giLCJrZXlzU3RyaW5nIiwibm90QmluZGluZyIsInBhcmVudFZhbHVlIiwiZXZhbENvbXBvbmVudCIsImlzU2NvcGVQcm94eSIsImJpbmQiLCJfX2dldEJvdW5kTm9kZSIsIl9fYmluZCIsIl9fc2V0Tm9kZVByb3BlcnR5IiwiQXR0ciIsIm1ha2VBdHRyaWJ1dGVWYWx1ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlIiwiaXNCb29sZWFuQXR0cmlidXRlIiwiX19oYXNCaW5kaW5ncyIsImNsZWFyQXR0cmlidXRlIiwiX19hdHRyaWJ1dGVPbiIsIl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciIsInRvQ2FtZWxDYXNlIiwib25DaGFuZ2VkIiwiY2hhbmdlZCIsImNhbWVsS2V5IiwidG9VcHBlckNhc2UiLCJmbk5hbWUiLCJldkZuTmFtZSIsImVsZW1lbnQiLCJfX2VsZW1lbnQiLCJhdHRyIiwid2l0aG91dFBhcmVudHMiLCJsYXN0UHJvcHMiLCJwcm9wc0xlbmd0aCIsImVsRXZhbHVhdGUiLCJfX2dldEJpbmQiLCJfX2RhdGEiLCJjIiwiX19jaGVja05vZGVQcm9wZXJ0eUNoYW5naW5nIiwiX19ldmFsdWF0ZU5vZGUiLCJfayIsIl9wcm9wIiwidW5iaW5kIiwib2JqIiwiX2tleXMiLCJfX2tleXMiLCJfaXNEZWxldGVkIiwiaGFzS2V5Iiwic2hpZnQiLCJoYXNQcm9wZXJ0eUJ5S2V5cyIsIl9fZXZhbHVhdGVOZXN0ZWQiLCJfX3VuYmluZCIsImRlbGV0ZVByb3BlcnR5QnlLZXlzIiwiZXhlYyIsIl9fY2hlY2tFdmFsdWF0aW9uIiwiYXR0cmlidXRlT2YiLCJldmVudE5hbWUiLCJfX2V2ZW50IiwiZW1pdHRlciIsIl9fZXZhbHVhdGVFdmVudCIsIl9faW5pdGlhbGl6ZWQiLCJfX2luaXRpYWxpemVBdHRyaWJ1dGUiLCJjaGFuZ2VBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGVOb2RlIiwiX191bmJpbmRCeU5vZGVzIiwiUHJveHkiLCJ0YXJnZXQiLCJzZXQiLCJhdHRyS2V5IiwiZGVsZXRlUHJvcGVydHkiLCJyZWFsVGFyZ2V0IiwiZ2V0T3duUHJvcGVydHlUYXJnZXQiLCJpc1BsYWluT2JqZWN0IiwiZ2V0RW51bWVyYWJsZVByb3BlcnR5VGFyZ2V0IiwiX19iaW5kTm9kZSIsIl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0Iiwic3RhcnRLZXlzIiwib2JzZXJ2ZSIsIl9fdGFyZ2V0IiwiX19kaXNhYmxlUHJveHlSZWRlZmluaW5nIiwiaXNvbGF0aW9uS2V5IiwicGFyZW50S2V5c1N0cmluZyIsIl9fZGVsZXRlTm9kZVByb3BlcnR5Iiwibm9kZXMiLCJfX2NsZWFyRW1wdHlCaW5kaW5ncyIsImNsZWFyIiwiX19yZW1vdmUiLCJvblJlbW92ZWQiLCJyZW1vdmVkIiwiX19zcGxpY2VDaGlsZCIsIl9fcmVtb3ZlQ2hpbGRyZW4iLCJmaW5kIiwiZmluZEFsbCIsImxldmVscyIsImxldmVsIiwiaXNBcnJheSIsInJpZ2h0IiwibGV2ZWxFbGVtZW50cyIsInJldmVyc2UiLCJfX2dldFBhcmVudCIsIl9fZ2V0Q2hpbGRyZW4iLCJfX2dldE5lYXIiLCJhcHBlbmRDaGlsZCIsIl9fZW1wdHkiLCJfX2Rlc3Ryb3kiLCJjbGFzcyIsImNsYXNzZXMiLCJzdHlsZXMiLCJmaWx0ZXIiLCJoYW5kbGVyIiwiaXRlbSIsIm1hdGNoIiwic29ydCIsIm9yZGVyIiwiYSIsImIiLCJEYXRlIiwiZ2V0VGltZSIsIm5leHQiLCJhViIsImJWIiwibmVzdGVkIiwiY29tcGFyZSIsImN1cnJlbnQiLCJwcmV2aW91cyIsInByZXZpb3VzQ29weSIsImN1cnJlbnRDb3B5IiwiZW5jb2RlSHRtbEVudGl0aWVzIiwiaHRtbCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlY29kZUh0bWxFbnRpdGllcyIsIm9iamVjdCIsInJlZHVjZSIsIm8iLCJoYXMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsInByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJjbGVhclNjb3BlUHJveHkiLCJNYXRoIiwicmFuZG9tIiwic3Vic3RyaW5nIiwiUmVxdWVzdCIsImJhc2VVcmwiLCJkZWZhdWx0cyIsInN0YXR1c0Vycm9yc1BhdHRlcm4iLCJyZWplY3QiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9uU3RhcnQiLCJ0cmFuc2Zvcm1CZWZvcmUiLCJvcGVuIiwibWV0aG9kIiwidXNlciIsInBhc3N3b3JkIiwiaGVhZGVycyIsImpzb24iLCJib2R5IiwicmVzcG9uc2VUeXBlIiwiZm9ybSIsImNyZWF0ZUZvcm1EYXRhIiwidGltZW91dCIsIndpdGhDcmVkZW50aWFscyIsInNldFJlcXVlc3RIZWFkZXIiLCJwYXJhbXMiLCJwYXJhbXNUb1F1ZXJ5Iiwib25Qcm9ncmVzcyIsIm9ucHJvZ3Jlc3MiLCJvbmxvYWQiLCJyZXNwb25zZSIsInRyYW5zZm9ybUFmdGVyIiwib250aW1lb3V0Iiwib25lcnJvciIsInNlbmQiLCJzZXAiLCJlcSIsImtzIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidiIsIm9wdCIsInF1ZXJ5IiwiYW1wcyIsInNwbGl0IiwiZXFzIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwibmFtZXNwYWNlIiwiZmQiLCJGb3JtRGF0YSIsImFwcGVuZCIsInRvSVNPU3RyaW5nIiwiX19pbnN0YW5jZXMiLCJhZGRJbnN0YW5jZSIsImluc3RhbmNlIiwicmVtb3ZlSW5zdGFuY2UiLCJ2YWx1ZUtleSIsInNldFZhbHVlIiwic2V0Rm9jdXMiLCJmb2N1cyIsInNldEVsZW1lbnRGb2N1cyIsInNldEVsZW1lbnRCbHVyIiwiYmx1ciIsIkxvb3AiLCJfX2l0ZXJhdG9yIiwiX19rZXkiLCJfX3ZhbHVlIiwiX19pbmRleCIsIl9fY29tcGFyaXNvblZhbHVlIiwiaXRlcmF0b3JzIiwiaXRlcmF0b3JSZWYiLCJpdGVyYXRvck91dGVySFRNTCIsImRyYXciLCJjcmVhdGVJdGVyYXRvciIsImluIiwibWFzayIsIm5leHRTaWJsaW5nIiwib3V0ZXJIVE1MIiwiY29udGVudCIsImZpcnN0Q2hpbGQiLCJpbmRleCIsImZvdW5kIiwiX19oYXNoIiwiaXRlcmF0b3IiLCJjVmFsdWUiLCJjb21wYXJzaW9uIiwiY0NvcHkiLCJzZXRJbmRleCIsInNldEtleSIsImNyZWF0ZUl0ZXJhdG9yRWxlbWVudCIsImluc2VydEJlZm9yZSIsIndyaXRhYmxlIiwiZVZhbHVlIiwiaW5kZXhLZXlzIiwibGFzdEVsZW1lbnQiLCJsb29wIiwiaXRlcmF0ZSIsImZvciIsImlzRm9yIiwiY2FuY2VsIiwiX19zZXQiLCJ0cmFuc2l0aW9uIiwic3RhdGUiLCJwYXRoIiwiZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uIiwiX190cmFuc2l0aW9uIiwiZW1wdHkiLCJidWJibGVzIiwiZm9yY2UiLCJpbkV2YWx1YXRpbmciLCJfRXZlbnQiLCJ0eXBlIiwiVHJhbnNpdGlvbiIsInJvdXRlcyIsInN0YXRlcyIsInJvdXRlIiwiaGFzaE1vZGUiLCJfX3JlZGlyZWN0cyIsIl9fb3B0aW9ucyIsIl9fcGFyYW1SZWdleCIsIl9fcm91dGVTZWxlY3RvciIsImFkZCIsInBhdHRlcm4iLCJkZWZhdWx0T3B0aW9ucyIsImFic3RyYWN0Iiwic2V0U3RhdGUiLCJnZXRTdGF0ZSIsImNyZWF0ZVN0YXRlVXJsIiwicmVsb2FkIiwiZ2V0VXJsIiwiYmFjayIsImhpc3RvcnkiLCJnbyIsImZvcndhcmQiLCJsb2NhdGlvbiIsInB1c2hTdGF0ZSIsImRlZmF1bHRVcmwiLCJvbGRQdXNoU3RhdGUiLCJfX29uU3RhdGVDaGFuZ2VIYW5kbGVyIiwicG9wIiwicGFyZW50TmFtZSIsImZ1bGxQYXR0ZXJuIiwic3BsaXRTbGFzaGVzIiwicmVtb3ZlU3RhdGUiLCJzZXRIYXNoVXJsIiwic2V0SGlzdG9yeVVybCIsImdldEhhc2hVcmwiLCJnZXRIaXN0b3J5VXJsIiwicGF0aG5hbWUiLCJzZWFyY2giLCJnZXRVcmxRdWVyeSIsImdldEhhc2hVcmxRdWVyeSIsImdldEhpc3RvcnlVcmxRdWVyeSIsInBhcmFtc0Zyb21RdWVyeSIsImYiLCJnZXRQYXR0ZXJuQ29udGVudCIsInVybFBhdHRlcm4iLCJyZWdleCIsImlzSW5jbHVkZWQiLCJpc0FjdGl2ZVN0YXRlIiwiaW5jbHVkZXMiLCJpbkFjdGl2ZVN0YXRlIiwiZ2V0Um91dGUiLCJnZXRBcnJheVBhdHRlcm5Db250ZW50IiwiZ2V0U3RhdGVzQnlMZXZlbCIsIl9fZGlzYWJsZUNoYW5nZSIsInByZXZUcmFuc2l0aW9uIiwib25FbmQiLCJzZXRQYXRoIiwibG9hZGVkIiwiaGFzU3RhdGUiLCJpc0RpZmZlcmVudCIsInByZXYiLCJpc0hpc3RvcnkiLCJpc1JlbG9hZCIsInNldFRyYW5zaXRpb24iLCJzYXZlU2Nyb2xsUG9zaXRpb24iLCJzY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwiaXNVcmwiLCJyZXNldEhyZWYiLCJzZXRQYXJhbXMiLCJzZXRRdWVyeSIsInNldEhhc2giLCJzZXRSZWxvYWQiLCJwcmV2ZW50RGVmYXVsdCIsInNldE9wdGlvbnMiLCJocmVmIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImRpc3BsYXkiLCJyYW5nZSIsImNyZWF0ZVJhbmdlIiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwiY29sbGFwc2UiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsIkVsc2VJZiIsIkVsc2UiLCJhY3RpdmUiLCJyZWNyZWF0ZSIsImlzQ29tcGlsZWQiLCJzZXRSZWNyZWF0aW9uIiwiaXMiLCJjb21waWxhdGlvbiIsIm5leHRFbGVtZW50U2libGluZyIsInJlc3VsdCIsInNldEFjdGl2aXR5IiwiY29ubmVjdGlvbiIsImdldFRlbXBsYXRlIiwiYWJvcnQiLCJvbkxvYWQiLCJvbkVycm9yIiwiaXNDaGVja2JveCIsImlzUmFkaW8iLCJzZXRDaGVja2VkIiwiY2hlY2tlZCIsInByZXZDaGVja2VkIiwib25DaGFuZ2UiLCJkaXNwYXRjaCIsIkV2ZW50IiwiY2hhbmdlUmFkaW8iLCJyYWRpbyIsIk9iamVjdHMiLCJSYWRpb0J1dHRvbiIsIml0ZXJhYmxlIiwic2V0TmFtZXMiLCJnZXRSYWRpb1ZhbHVlIiwicHJldlZhbHVlIiwib25SYWRpbyIsImlzVHJ1ZSIsImlzU2VsZWN0ZWQiLCJzZXRSYWRpb1ZhbHVlIiwiT3B0aW9uIiwiaXRlcmF0b3JUYWdOYW1lIiwiaXNNdWx0aXBsZSIsInNldE11bHRpcGxlIiwic2V0Q29udGVudCIsImRyYXdTZWxlY3QiLCJnZXRDb250ZW50IiwibXVsdGlwbGUiLCJjaGFuZ2VWYWx1ZSIsImZvcm1hdFZhbHVlIiwic2VsZWN0ZWQiLCJvcHRpb24iLCJyZWRlZmluZSIsInRyaW0iLCJzZXRTZWxlY3RlZCIsInN0cmljdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkRBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQWxDQTs7Ozs7Ozs7O0FBb0NBLElBQU1BLFFBQVEsRUFBZDs7QUFFQUEsTUFBTUMsT0FBTixHQUFnQjtBQUNkQyxrQkFBZ0IsSUFERjtBQUVkQyx3QkFBc0IsSUFGUjtBQUdk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VUFBRyxDQUFDampCLE1BQU00USxPQUFOLENBQWN0VyxJQUFkLENBQUosRUFBeUI7QUFDdkJBLGVBQU8sQ0FBQ0EsSUFBRCxDQUFQO0FBQ0Q7O0FBRUQsc0JBQU1rRCxVQUFOLENBQWlCLFlBQU07QUFDckJ5bEIsbUJBQVcsTUFBSy9uQixXQUFMLENBQWlCMFUsd0JBQWpCLEdBQTRDLElBQXZEO0FBQ0Esd0JBQU0zUyxpQkFBTixDQUF3QjNDLElBQXhCLFNBQW9DLFVBQUM0QyxJQUFELEVBQU9DLEdBQVAsRUFBZTtBQUNqRCxjQUFHLENBQUNELElBQUosRUFBVTtBQUNSLG1CQUFPQyxPQUFPLEVBQWQ7QUFDRDs7QUFFRCxpQkFBT0MsS0FBUDtBQUNELFNBTkQ7QUFPQTZsQixtQkFBVyxNQUFLL25CLFdBQUwsQ0FBaUIwVSx3QkFBakIsR0FBNEMsS0FBdkQ7QUFDRCxPQVZEO0FBV0Q7Ozt3QkEzQmE7QUFDWjtBQUNEOzs7Ozs7a0JBWmtCdE0sSztBQXNDcEIsQyIsImZpbGUiOiJha2lsaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMzA0MGQ5MTU4ZGE2ZWIwNWI3NTAiLCIvKipcbiAqIEphdmFzY3JpcHQgZnJhbWV3b3JrXG4gKlxuICogY29uc3QgQWtpbGkgPSBtYWtlSXRFYXN5KGpzICsgaHRtbCk7XG4gKlxuICogQGF1dGhvciBBbGV4YW5kciBCYWxhc3lhbiA8bXl3ZWJzdHJlZXRAZ21haWwuY29tPlxuICogQGxpbmsgaHR0cDovL2FraWxpanMuY29tXG4gKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgSWYgZnJvbSAnLi9jb21wb25lbnRzL2lmLmpzJztcbmltcG9ydCBGb3IgZnJvbSAnLi9jb21wb25lbnRzL2Zvci5qcyc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vY29tcG9uZW50cy9zZWxlY3QuanMnO1xuaW1wb3J0IElucHV0IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC5qcyc7XG5pbXBvcnQgUmFkaW8gZnJvbSAnLi9jb21wb25lbnRzL3JhZGlvLmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vY29tcG9uZW50cy90ZXh0LmpzJztcbmltcG9ydCBUZXh0YXJlYSBmcm9tICcuL2NvbXBvbmVudHMvdGV4dGFyZWEuanMnO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb21wb25lbnRzL2NvbnRlbnQuanMnO1xuaW1wb3J0IEluY2x1ZGUgZnJvbSAnLi9jb21wb25lbnRzL2luY2x1ZGUuanMnO1xuaW1wb3J0IElmcmFtZSBmcm9tICcuL2NvbXBvbmVudHMvaWZyYW1lLmpzJztcbmltcG9ydCBJbWFnZSBmcm9tICcuL2NvbXBvbmVudHMvaW1hZ2UuanMnO1xuaW1wb3J0IEVtYmVkIGZyb20gJy4vY29tcG9uZW50cy9lbWJlZC5qcyc7XG5pbXBvcnQgQXVkaW8gZnJvbSAnLi9jb21wb25lbnRzL2F1ZGlvLmpzJztcbmltcG9ydCBWaWRlbyBmcm9tICcuL2NvbXBvbmVudHMvdmlkZW8uanMnO1xuaW1wb3J0IFRyYWNrIGZyb20gJy4vY29tcG9uZW50cy90cmFjay5qcyc7XG5pbXBvcnQgU291cmNlIGZyb20gJy4vY29tcG9uZW50cy9zb3VyY2UuanMnO1xuaW1wb3J0IE9iamVjdHMgZnJvbSAnLi9jb21wb25lbnRzL29iamVjdC5qcyc7XG5pbXBvcnQgUm91dGUgZnJvbSAnLi9jb21wb25lbnRzL3JvdXRlLmpzJztcbmltcG9ydCBVcmwgZnJvbSAnLi9jb21wb25lbnRzL3VybC5qcyc7XG5pbXBvcnQgQSBmcm9tICcuL2NvbXBvbmVudHMvYS5qcyc7XG5pbXBvcnQgU2NvcGUgZnJvbSAnLi9zY29wZS5qcyc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlci5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuL3NlcnZpY2VzL3JvdXRlci5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5cbmNvbnN0IEFraWxpID0ge307XG5cbkFraWxpLm9wdGlvbnMgPSB7XG4gIG5lc3RlZFdhdGNoaW5nOiB0cnVlLFxuICBzaG93RXZhbHVhdGlvbkVycm9yczogdHJ1ZSxcbiAgZGVidWc6IHRydWVcbn07XG5cbkFraWxpLl9faW5pdCA9IG51bGw7XG5Ba2lsaS5fX2NvbXBvbmVudHMgPSB7fTtcbkFraWxpLl9fYWxpYXNlcyA9IHt9O1xuQWtpbGkuX19zY29wZXMgPSB7fTtcbkFraWxpLl9fd2luZG93ID0ge307XG5Ba2lsaS5fX2lzb2xhdGlvbiA9IG51bGw7XG5Ba2lsaS5fX2V2YWx1YXRpb24gPSBudWxsO1xuQWtpbGkuX19odG1sID0gd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbkFraWxpLl9fc2VydmVyUmVuZGVyaW5nID0gZmFsc2U7XG5cbkFraWxpLmh0bWxCb29sZWFuQXR0cmlidXRlcyA9IFtcbiAgJ2Rpc2FibGVkJywgJ2NvbnRlbnRlZGl0YWJsZScsICdoaWRkZW4nXG5dO1xuXG5Ba2lsaS5jb21wb25lbnRzID0ge307XG5Ba2lsaS5kZWNvcmF0b3JzID0ge307XG5Ba2lsaS5zZXJ2aWNlcyA9IHt9O1xuXG4vKipcbiAqIEpvaW4gYmluZGluZyBrZXlzXG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBiaW5kaW5nIGtleXNcbiAqL1xuQWtpbGkuam9pbkJpbmRpbmdLZXlzID0gZnVuY3Rpb24oa2V5cykge1xuICByZXR1cm4ga2V5cy5tYXAoZWwgPT4gZWwudG9TdHJpbmcoKSkuam9pbignLicpO1xufTtcblxuLyoqXG4gKiBBZGQgc2NvcGUgdG8gdGhlIHNjb3BlcyBsaXN0XG4gKlxuICogQHBhcmFtIHNjb3BlXG4gKi9cbkFraWxpLmFkZFNjb3BlID0gZnVuY3Rpb24oc2NvcGUpIHtcbiAgaWYodGhpcy5fX3Njb3Blc1tzY29wZS5fX25hbWVdKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBTY29wZSBuYW1lICR7c2NvcGUuX19uYW1lfSBhbHJlYWR5IGV4aXN0c2ApO1xuICB9XG5cbiAgdGhpcy5fX3Njb3Blc1tzY29wZS5fX25hbWVdID0gc2NvcGU7XG59O1xuXG4vKipcbiAqIEdldCBzY29wZSBmcm9tIHRoZSBzY29wZXMgbGlzdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc2NvcGUgbmFtZVxuICogQHJldHVybnMge1Njb3BlfVxuICovXG5Ba2lsaS5nZXRTY29wZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuX19zY29wZXNbbmFtZV07XG59O1xuXG4vKipcbiAqIERlbGV0ZSBzY29wZSBmcm9tIHRoZSBzY29wZXMgbGlzdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc2NvcGUgbmFtZVxuICovXG5Ba2lsaS5yZW1vdmVTY29wZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgbGV0IHNjb3BlID0gdGhpcy5fX3Njb3Blc1tuYW1lXTtcblxuICBzY29wZS5fX2NvbXBvbmVudCA9IG51bGw7XG4gIHNjb3BlLl9fZWwgPSBudWxsO1xuICBzY29wZS5fX3BhcmVudCA9IG51bGw7XG4gIHRoaXMuX19zY29wZXNbbmFtZV0gPSBudWxsO1xuICBkZWxldGUgdGhpcy5fX3Njb3Blc1tuYW1lXTtcbn07XG5cbi8qKlxuICogR2V0IGFsbCBlbGVtZW50cyB3aXRoIGF0dGFjaGVkIEFraWxpIGNvbXBvbmVudHNcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICogQHBhcmFtIHtib29sZWFufSBbdHJlZT10cnVlXSAtIHJldHVybiBhcnJheSBvZiB0aGUgcGFyZW50cyBpZiB0cnVlLCBjbG9zZXN0IHBhcmVudCBpZiBmYWxzZVxuICogQHJldHVybnMge0FycmF5fEhUTUxFbGVtZW50fG51bGx9XG4gKi9cbkFraWxpLmdldEFraWxpUGFyZW50cyA9IGZ1bmN0aW9uIChlbCwgdHJlZSA9IHRydWUpIHtcbiAgbGV0IGFyciA9IFtdO1xuXG4gIGZ1bmN0aW9uIGNoZWNrKG5vZGUpIHtcbiAgICBpZighbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYobm9kZS5wYXJlbnROb2RlLl9fYWtpbGkpIHtcbiAgICAgIGFyci5wdXNoKG5vZGUucGFyZW50Tm9kZSk7XG5cbiAgICAgIGlmKCF0cmVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVjayhub2RlLnBhcmVudE5vZGUpO1xuICB9XG5cbiAgY2hlY2soZWwpO1xuXG4gIHJldHVybiB0cmVlPyBhcnI6IGFyclswXTtcbn07XG5cbi8qKlxuICogU2V0IGVsZW1lbnQgaW5uZXIgaHRtbCB3aXRoIGNvbnRlbnQgcmVwbGFjaW5nXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCI8aT5IZWxsbzwvaT48Yj5Xb3JsZDwvYj5cIlxuICogZWwuaW5uZXJIVE1MID0gXCI8Yj5Xb3JsZDwvYj5cIjtcbiAqIEFraWxpLnNldFRlbXBsYXRlKGVsLCBcIjxpPkhlbGxvPC9pPiR7dGhpcy5fX2NoaWxkcmVufVwiKTtcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5Ba2lsaS5zZXRUZW1wbGF0ZSA9IGZ1bmN0aW9uKGVsLCB0ZW1wbGF0ZSkge1xuICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoL1xcJHsoKCg/IVxcJHspXFxzKnRoaXNcXC5fX2NvbnRlbnRcXHMqKSopfS8sIGVsLmlubmVySFRNTCk7XG4gIGVsLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuXG4gIHJldHVybiBlbC5pbm5lckhUTUw7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIHVuaXF1ZSBzY29wZSBuYW1lXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuQWtpbGkuY3JlYXRlU2NvcGVOYW1lID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB1dGlscy5jcmVhdGVSYW5kb21TdHJpbmcoMTYsIChzdHIpID0+IHtcbiAgICByZXR1cm4gISF0aGlzLl9fc2NvcGVzW3N0cl07XG4gIH0pO1xufTtcblxuLyoqXG4gKiBJc29sYXRlIGZ1bmN0aW9uLlxuICogRXZlcnkgc2NvcGUgdmFyaWFibGUgY2hhbmdlIGNhbGxzIGFjY29yZGluZyBub2RlIGV2YWx1YXRpb24uXG4gKiBGb3IgZXhhbXBsZSwgaWYgeW91IGNoYW5nZSBzb21lIHNjb3BlIHZhcmlhYmxlIGluIHRoZSBsb29wIC0gZXZhbHVhdGlvbiB3aWxsIGJlIGNhbGxlZCBvbiB0aGUgZWFjaCBjaGFuZ2UuXG4gKiBJdCBtYXkgYmUgc2xvdyBmb3IgdGhlIGFwcGxpY2F0aW9uLlxuICogWW91IGNhbiBpc29sYXRlIHRoaXMgYWN0aW9uIGFuZCBydW4gYWxsIGV2YWx1YXRpb24gcHJvY2VzcyBhZnRlciBwYXNzZWQgZnVuY3Rpb24gYXQgb25jZS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLmlzb2xhdGUgPSBmdW5jdGlvbihmbikge1xuICBpZih0aGlzLl9faXNvbGF0aW9uKSB7XG4gICAgcmV0dXJuIGZuKCk7XG4gIH1cblxuICB0aGlzLl9faXNvbGF0aW9uID0ge307XG5cbiAgbGV0IHJlcyA9IGZuKCk7XG4gIGxldCBwcm9wcyA9IFtdO1xuXG4gIGZvcihsZXQgayBpbiB0aGlzLl9faXNvbGF0aW9uKSB7XG4gICAgaWYoIXRoaXMuX19pc29sYXRpb24uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHByb3BzLnB1c2godGhpcy5fX2lzb2xhdGlvbltrXSk7XG4gIH1cblxuICB0aGlzLl9faXNvbGF0aW9uID0gbnVsbDtcblxuICBmb3IobGV0IGkgPSAwLCBsID0gcHJvcHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHByb3AgPSBwcm9wc1tpXTtcblxuICAgIGlmKHByb3AuaXNEZWxldGVkKSB7XG4gICAgICBwcm9wLmNvbXBvbmVudC5fX2V2YWx1YXRlQnlLZXlzKHByb3Aua2V5cywgdW5kZWZpbmVkLCB0cnVlKTtcblxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdXRpbHMuc2V0UHJvcGVydHlCeUtleXMocHJvcC5rZXlzLCBwcm9wLmNvbXBvbmVudC5zY29wZSwgKGxhc3QsIHZhbCkgPT4ge1xuICAgICAgaWYoIWxhc3QpIHtcbiAgICAgICAgcmV0dXJuIHZhbCB8fCB7fTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByb3AudmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICBwcm9wcyA9IG51bGw7XG5cbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogU3RvcCBldmFsdWF0aW9uIGJlZm9yZSB0aGUgZnVuY3Rpb24gYW5kIGNvbnRpbnVlIGFmdGVyXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS51bmV2YWx1YXRlZCA9IGZ1bmN0aW9uKGZuKSB7XG4gIGxldCBldmFsdWF0aW9uID0gdGhpcy5fX2V2YWx1YXRpb247XG4gIGxldCByZXM7XG5cbiAgdGhpcy5fX2V2YWx1YXRpb24gPSBudWxsO1xuICByZXMgPSBmbigpO1xuICB0aGlzLl9fZXZhbHVhdGlvbiA9IGV2YWx1YXRpb247XG5cbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogU3RvcCBpc29sYXRpb24gYmVmb3JlIHRoZSBmdW5jdGlvbiBhbmQgY29udGludWUgYWZ0ZXJcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLnVuaXNvbGF0ZWQgPSBmdW5jdGlvbihmbikge1xuICBsZXQgZXZhbHVhdGlvbiA9IHRoaXMuX19pc29sYXRpb247XG4gIGxldCByZXM7XG5cbiAgdGhpcy5fX2lzb2xhdGlvbiA9IG51bGw7XG4gIHJlcyA9IGZuKCk7XG4gIHRoaXMuX19pc29sYXRpb24gPSBldmFsdWF0aW9uO1xuXG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgZWxlbWVudFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnM9e31dXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKGVsLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IHJlY29tcGlsZSA9IG9wdGlvbnMucmVjb21waWxlO1xuICBsZXQgY29tcG9uZW50ID0gZWwuX19ha2lsaTtcblxuICBpZihjb21wb25lbnQpIHtcbiAgICBpZihyZWNvbXBpbGUpIHtcbiAgICAgIGNvbXBvbmVudC5fX3JlY29tcGlsZSgpO1xuXG4gICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBpc1Jvb3QgPSBlbCA9PT0gdGhpcy5fX3Jvb3Q7XG4gIGxldCBjb21wb25lbnROYW1lID0gdXRpbHMudG9EYXNoQ2FzZShlbC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpIHx8IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSk7XG4gIGxldCBfQ29tcG9uZW50ID0gdGhpcy5fX2NvbXBvbmVudHNbY29tcG9uZW50TmFtZV07XG5cbiAgQ0hFQ0tfQUxJQVNFUzogaWYoIV9Db21wb25lbnQpIHtcbiAgICBsZXQgc2VsZWN0b3JzID0gT2JqZWN0LmtleXModGhpcy5fX2FsaWFzZXMpO1xuXG4gICAgaWYoIXNlbGVjdG9ycy5sZW5ndGgpIHtcbiAgICAgIGJyZWFrIENIRUNLX0FMSUFTRVM7XG4gICAgfVxuXG4gICAgbGV0IHNlbGVjdG9yQWxsID0gc2VsZWN0b3JzLmpvaW4oJywnKTtcblxuICAgIGlmKCFlbC5tYXRjaGVzKHNlbGVjdG9yQWxsKSkge1xuICAgICAgYnJlYWsgQ0hFQ0tfQUxJQVNFUztcbiAgICB9XG5cbiAgICBmb3IobGV0IHNlbGVjdG9yIGluIHRoaXMuX19hbGlhc2VzKSB7XG4gICAgICBpZighdGhpcy5fX2FsaWFzZXMuaGFzT3duUHJvcGVydHkoc2VsZWN0b3IpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZihlbC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBfQ29tcG9uZW50ID0gdGhpcy5fX2NvbXBvbmVudHNbdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYoIV9Db21wb25lbnQgJiYgIWlzUm9vdCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKCFfQ29tcG9uZW50KSB7XG4gICAgX0NvbXBvbmVudCA9IHRoaXMuQ29tcG9uZW50O1xuICB9XG5cbiAgaWYoX0NvbXBvbmVudC5tYXRjaGVzICYmICFlbC5tYXRjaGVzKF9Db21wb25lbnQubWF0Y2hlcykpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb21wb25lbnQgPSBuZXcgX0NvbXBvbmVudChlbCwge30pO1xuXG4gIGlmKGNvbXBvbmVudC5fX2NhbmNlbGxlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbXBvbmVudC5fX2NyZWF0ZSgpO1xuXG4gIHJldHVybiBjb21wb25lbnQ7XG59O1xuXG4vKipcbiAqIENvbXBpbGUgdGhlIGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByb290XG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuQWtpbGkuY29tcGlsZSA9IGZ1bmN0aW9uKHJvb3QsIG9wdGlvbnMgPSB7IHJlY29tcGlsZTogZmFsc2UgfSkgeyAgXG4gIGxldCBlbGVtZW50cyA9IFtdO1xuXG4gIGxldCBuZXN0ZWRJbml0aWFsaXppbmcgPSAoZWwpID0+IHtcbiAgICBsZXQgY29tcG9uZW50ID0gdGhpcy5pbml0aWFsaXplKGVsLCBvcHRpb25zKTtcbiAgICBsZXQgY2hpbGRyZW4gPSBlbC5jaGlsZHJlbjtcblxuICAgIGNvbXBvbmVudCAmJiBlbGVtZW50cy5wdXNoKGNvbXBvbmVudCk7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcblxuICAgICAgbmVzdGVkSW5pdGlhbGl6aW5nKGNoaWxkKTtcbiAgICB9XG4gIH07XG5cbiAgbmVzdGVkSW5pdGlhbGl6aW5nKHJvb3QpO1xuXG4gIGxldCBwID0gW107XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBjb21wb25lbnQgPSBlbGVtZW50c1tpXTtcblxuICAgIHAucHVzaChjb21wb25lbnQuX19jb21waWxlKCkpO1xuICB9XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKHApLnRoZW4oKCkgPT4ge1xuICAgIGxldCByID0gW107XG5cbiAgICBmb3IobGV0IGkgPSBlbGVtZW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IGNvbXBvbmVudCA9IGVsZW1lbnRzW2ldO1xuXG4gICAgICByLnB1c2goY29tcG9uZW50Ll9fcmVzb2x2ZSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocik7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciB0aGUgY29tcG9uZW50IG9yIGdldCBpdCBpZiBmbiBpcyBub3QgcGFzc2VkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBbZm5dXG4gKi9cbkFraWxpLmNvbXBvbmVudCA9IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYoIWZuKSB7XG4gICAgcmV0dXJuIHRoaXMuX19jb21wb25lbnRzW25hbWVdIHx8IG51bGw7XG4gIH1cblxuICBpZih0aGlzLl9fY29tcG9uZW50c1tuYW1lXSAmJiBBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgY29uc29sZS53YXJuKGBDb21wb25lbnQgJHtuYW1lfSBhbHJlYWR5IHdhcyBhZGRlZGApO1xuICB9XG5cbiAgdGhpcy5fX2NvbXBvbmVudHNbbmFtZV0gPSBmbjtcbn07XG5cbi8qKlxuICogVW5yZWdpc3RlciB0aGUgY29tcG9uZW50XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xuQWtpbGkudW5yZWdpc3RlckNvbXBvbmVudCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZGVsZXRlIHRoaXMuX19jb21wb25lbnRzW25hbWVdO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciB0aGUgc2VsZWN0b3IgYWxpYXMgb3IgZ2V0IGl0IGlmIGNvbXBvbmVudCBuYW1lIGlzIG5vdCBwYXNzZWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgLSBET00gc2VsZWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29tcG9uZW50TmFtZV1cbiAqL1xuQWtpbGkuYWxpYXMgPSBmdW5jdGlvbihzZWxlY3RvciwgY29tcG9uZW50TmFtZSA9ICcnKSB7XG4gIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYoIWNvbXBvbmVudE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdIHx8IG51bGw7XG4gIH1cblxuICBpZih0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gJiYgQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgIGNvbnNvbGUud2FybihgQWxpYXMgd2l0aCBzZWxlY3RvciAke3NlbGVjdG9yfSBhbHJlYWR5IHdhcyBhZGRlZGApO1xuICB9XG5cbiAgdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdID0gY29tcG9uZW50TmFtZTtcbn07XG5cbi8qKlxuICogVW5yZWdpc3RlciB0aGUgc2VsZWN0b3IgYWxpYXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqL1xuQWtpbGkudW5yZWdpc3RlckFsaWFzID0gZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgZGVsZXRlIHRoaXMuX19jb21wb25lbnRzW3NlbGVjdG9yXTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSBhcnJheSBwcm90b3R5cGUgZnVuY3Rpb25zXG4gKi9cbkFraWxpLmlzb2xhdGVBcnJheVByb3RvdHlwZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9fd2luZG93LkFycmF5ID0geyBwcm90b3R5cGU6IHt9IH07XG5cbiAgbGV0IGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhBcnJheS5wcm90b3R5cGUpO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgIGxldCBvbGQgPSBBcnJheS5wcm90b3R5cGVba2V5XTtcblxuICAgIGlmKHR5cGVvZiBvbGQgIT0gJ2Z1bmN0aW9uJyB8fCBrZXkgPT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdGhpcy5fX3dpbmRvdy5BcnJheS5wcm90b3R5cGVba2V5XSA9IG9sZDtcblxuICAgIEFycmF5LnByb3RvdHlwZVtrZXldID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gQWtpbGkudW5ldmFsdWF0ZWQoKCkgPT4ge1xuICAgICAgICBpZighdGhpcy5fX2lzUHJveHkpIHtcbiAgICAgICAgICByZXR1cm4gb2xkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9sZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbn07XG5cbi8qKlxuICogSXNvbGF0ZSBzb21lIHdpbmRvdyBmdW5jdGlvbnNcbiAqL1xuQWtpbGkuaXNvbGF0ZVdpbmRvd0Z1bmN0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9fd2luZG93LnNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICB0aGlzLl9fd2luZG93LnNldEludGVydmFsID0gc2V0SW50ZXJ2YWw7XG4gIHRoaXMuX193aW5kb3cuUHJvbWlzZSA9IFByb21pc2U7XG5cbiAgd2luZG93LnNldFRpbWVvdXQgPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5zZXRUaW1lb3V0LCAwKTtcbiAgd2luZG93LnNldEludGVydmFsID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuc2V0SW50ZXJ2YWwsIDApO1xuICB3aW5kb3cuUHJvbWlzZSAmJiAod2luZG93LlByb21pc2UuY29uc3RydWN0b3IgPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5Qcm9taXNlLmNvbnN0cnVjdG9yICwgMCkpO1xufTtcblxuLyoqXG4gKiBJc29sYXRlIGV2ZW50IGxpc3RlbmVyc1xuICovXG5Ba2lsaS5pc29sYXRlRXZlbnRzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX193aW5kb3cuRWxlbWVudCA9IHsgcHJvdG90eXBlOiB7fSB9O1xuXG4gIHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IEVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI7XG4gIHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXI7XG4gIHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlID0gRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlO1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGRlbGV0ZSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnM7XG5cbiAgICByZXR1cm4gQWtpbGkuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgbGV0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICBpZighdGhpcy5fX2FraWxpTGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZighdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBhcmdzWzFdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIEFraWxpLnVuZXZhbHVhdGVkKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ucHVzaCh7XG4gICAgICBsaW5rOiBmbixcbiAgICAgIGZuOiBhcmdzWzFdXG4gICAgfSk7XG5cbiAgICByZXR1cm4gQWtpbGkuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfTtcblxuICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZighdGhpcy5fX2FraWxpTGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZighdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGxpc3RlbmVyID0gdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdW2ldO1xuXG4gICAgICBpZihsaXN0ZW5lci5saW5rID09PSBmbikge1xuICAgICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICBpLS07XG4gICAgICAgIGwtLTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZighdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXTtcbiAgICB9XG5cbiAgICByZXR1cm4gIEFraWxpLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cbi8qKlxuICogV3JhcCB0aGUgZnVuY3Rpb24gY2FsbGJhY2sgdG8gYW4gaXNvbGF0ZSBjb250ZXh0XG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gW3Bvcz1cImxhc3RcIl1cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuQWtpbGkuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24gPSBmdW5jdGlvbihmbiwgcG9zID0gJ2xhc3QnKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBsZXQgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICBsZXQgY2FsbGJhY2sgPSBwb3MgPT0gJ2xhc3QnPyBhcmdzW2FyZ3MubGVuZ3RoIC0gMV06IGFyZ3NbcG9zXTtcblxuICAgIGlmKHR5cGVvZiBjYWxsYmFjayAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBhcmdzWzBdID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIEFraWxpLnVuZXZhbHVhdGVkKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG59O1xuXG4vKipcbiAqIElzb2xhdGUgdGhlIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7b2JqZWN0fSBbY29udGV4dF1cbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqL1xuQWtpbGkuaXNvbGF0ZUZ1bmN0aW9uID0gZnVuY3Rpb24oZm4sIGNvbnRleHQgPSBudWxsKSB7XG4gIGlmKGZuLl9fYWtpbGkpIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICBsZXQgb0ZuID0gZnVuY3Rpb24oKSB7XG4gICAgY29udGV4dCA9IGNvbnRleHQgfHwgdGhpcztcblxuICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgIHJldHVybiBmbi5hcHBseShjb250ZXh0LCBhcmd1bWVudHMpO1xuICAgIH0pO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvRm4sICdfX2FraWxpJywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcblxuICByZXR1cm4gb0ZuO1xufTtcblxuLyoqXG4gKiBFcnJvciBoYW5kbGluZ1xuICovXG5Ba2lsaS5lcnJvckhhbmRsaW5nID0gZnVuY3Rpb24oKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICB0aGlzLnRyaWdnZXJJbml0KGZhbHNlKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFRyaWdnZXIgYW4gaW5pdGlhbGl6YXRpb24gc3RhdHVzXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBzdGF0dXNcbiAqL1xuQWtpbGkudHJpZ2dlckluaXQgPSBmdW5jdGlvbihzdGF0dXMpIHtcbiAgQWtpbGkuX19pbml0ID0gc3RhdHVzO1xuICB0aGlzLl9fc2VydmVyUmVuZGVyaW5nICYmICh0aGlzLl9faHRtbC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnKTtcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdha2lsaS1pbml0JywgeyBkZXRhaWw6IHN0YXR1cyB9KSk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIGFwcGxpY2F0aW9uXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW3Jvb3RdXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuQWtpbGkuaW5pdCA9IGZ1bmN0aW9uKHJvb3QpIHtcbiAgbGV0IHNlcnZlclAgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgbGV0IHNlcnZlciA9IHRoaXMuX19odG1sLmdldEF0dHJpYnV0ZSgnYWtpbGktc2VydmVyJyk7XG5cbiAgdGhpcy5fX3Jvb3QgPSByb290IHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpO1xuICB0aGlzLl9fc2VydmVyUmVuZGVyaW5nID0gISFzZXJ2ZXI7XG5cbiAgaWYoc2VydmVyKSB7XG4gICAgdGhpcy5fX2h0bWwuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5fX2h0bWwuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXG4gICAgc2VydmVyUCA9IHJlcXVlc3QuZ2V0KHNlcnZlcikudGhlbigocmVzKSA9PiB7XG4gICAgICB0aGlzLl9faHRtbC5pbm5lckhUTUwgPSByZXMuZGF0YTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBzZXJ2ZXJQLnRoZW4oKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLmNvbXBpbGUodGhpcy5fX3Jvb3QpLnRoZW4oKCkgPT4ge1xuICAgICAgaWYocm91dGVyLl9faW5pdCkge1xuICAgICAgICByZXR1cm4gcm91dGVyLmNoYW5nZVN0YXRlKCk7XG4gICAgICB9XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnRyaWdnZXJJbml0KHRydWUpO1xuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHRoaXMudHJpZ2dlckluaXQoZmFsc2UpO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbi8qKlxuICogRGVpbml0aWFsaXplIHRoZSBhcHBsaWNhdGlvblxuICovXG5Ba2lsaS5kZWluaXQgPSBmdW5jdGlvbigpIHtcbiAgZm9yKGxldCBrZXkgaW4gdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZSkge1xuICAgIEVsZW1lbnQucHJvdG90eXBlW2tleV0gPSB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlW2tleV07XG4gIH1cblxuICBmb3IobGV0IGtleSBpbiB0aGlzLl9fd2luZG93LkFycmF5LnByb3RvdHlwZSkge1xuICAgIEFycmF5LnByb3RvdHlwZVtrZXldID0gdGhpcy5fX3dpbmRvdy5BcnJheS5wcm90b3R5cGVba2V5XTtcbiAgfVxuXG4gIHdpbmRvdy5zZXRUaW1lb3V0ID0gdGhpcy5fX3dpbmRvdy5zZXRUaW1lb3V0O1xuICB3aW5kb3cuc2V0SW50ZXJ2YWwgPSB0aGlzLl9fd2luZG93LnNldEludGVydmFsO1xuICB3aW5kb3cuUHJvbWlzZSA9IHRoaXMuX193aW5kb3cuUHJvbWlzZTtcbn1cblxuLyoqXG4gKiBEZWZpbmUgYWxsIGRlZmF1bHQgY29tcG9uZW50c1xuICovXG5Ba2lsaS5kZWZpbmUgPSBmdW5jdGlvbigpIHtcbiAgQS5kZWZpbmUoKTtcbiAgQXVkaW8uZGVmaW5lKCk7XG4gIENvbnRlbnQuZGVmaW5lKCk7XG4gIENvbXBvbmVudC5kZWZpbmUoKTtcbiAgRW1iZWQuZGVmaW5lKCk7XG4gIEZvci5kZWZpbmUoKTtcbiAgSW5jbHVkZS5kZWZpbmUoKTtcbiAgSWZyYW1lLmRlZmluZSgpO1xuICBJbWFnZS5kZWZpbmUoKTtcbiAgSW5wdXQuZGVmaW5lKCk7XG4gIElmLmRlZmluZSgpO1xuICBPYmplY3RzLmRlZmluZSgpO1xuICBSYWRpby5kZWZpbmUoKTtcbiAgUm91dGUuZGVmaW5lKCk7XG4gIFNlbGVjdC5kZWZpbmUoKTtcbiAgU291cmNlLmRlZmluZSgpO1xuICBUZXh0YXJlYS5kZWZpbmUoKTtcbiAgVHJhY2suZGVmaW5lKCk7XG4gIFZpZGVvLmRlZmluZSgpO1xufTtcblxuQWtpbGkuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuQWtpbGkuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuQWtpbGkuU2NvcGUgPSBTY29wZTtcbkFraWxpLnV0aWxzID0gdXRpbHM7XG5Ba2lsaS5jb21wb25lbnRzLkEgPSBBO1xuQWtpbGkuY29tcG9uZW50cy5BdWRpbyA9IEF1ZGlvO1xuQWtpbGkuY29tcG9uZW50cy5Db250ZW50ID0gQ29udGVudDtcbkFraWxpLmNvbXBvbmVudHMuRm9yID0gRm9yO1xuQWtpbGkuY29tcG9uZW50cy5FbWJlZCA9IEVtYmVkO1xuQWtpbGkuY29tcG9uZW50cy5JZiA9IElmO1xuQWtpbGkuY29tcG9uZW50cy5JbmNsdWRlID0gSW5jbHVkZTtcbkFraWxpLmNvbXBvbmVudHMuSW5wdXQgPSBJbnB1dDtcbkFraWxpLmNvbXBvbmVudHMuSWZyYW1lID0gSWZyYW1lO1xuQWtpbGkuY29tcG9uZW50cy5JbWFnZSA9IEltYWdlO1xuQWtpbGkuY29tcG9uZW50cy5PYmplY3QgPSBPYmplY3RzO1xuQWtpbGkuY29tcG9uZW50cy5SYWRpbyA9IFJhZGlvO1xuQWtpbGkuY29tcG9uZW50cy5Sb3V0ZSA9IFJvdXRlO1xuQWtpbGkuY29tcG9uZW50cy5TZWxlY3QgPSBTZWxlY3Q7XG5Ba2lsaS5jb21wb25lbnRzLlNvdXJjZSA9IFNvdXJjZTtcbkFraWxpLmNvbXBvbmVudHMuVGV4dCA9IFRleHQ7XG5Ba2lsaS5jb21wb25lbnRzLlRleHRhcmVhID0gVGV4dGFyZWE7XG5Ba2lsaS5jb21wb25lbnRzLlRyYWNrID0gVHJhY2s7XG5Ba2lsaS5jb21wb25lbnRzLlVybCA9IFVybDtcbkFraWxpLmNvbXBvbmVudHMuVmlkZW8gPSBWaWRlbztcbkFraWxpLnNlcnZpY2VzLnJlcXVlc3QgPSByZXF1ZXN0O1xuQWtpbGkuc2VydmljZXMucm91dGVyID0gcm91dGVyO1xuXG53aW5kb3cuQWtpbGkgPSBBa2lsaTtcblxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudHMgPSBBa2lsaS5jb21wb25lbnRzO1xuZXhwb3J0IGNvbnN0IHNlcnZpY2VzID0gQWtpbGkuc2VydmljZXM7XG5leHBvcnQgZGVmYXVsdCBBa2lsaTtcblxuQWtpbGkuZGVmaW5lKCk7XG5Ba2lsaS5lcnJvckhhbmRsaW5nKCk7XG5Ba2lsaS5pc29sYXRlRXZlbnRzKCk7XG5Ba2lsaS5pc29sYXRlQXJyYXlQcm90b3R5cGUoKTtcbkFraWxpLmlzb2xhdGVXaW5kb3dGdW5jdGlvbnMoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYWtpbGkuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XHJcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcmwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBtYXRjaGVzID0gJ1t1cmxdJztcclxuXHJcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xyXG4gICAgc3VwZXIoLi4uYXJncyk7XHJcblxyXG4gICAgdGhpcy51cmxBdHRyaWJ1dGUgPSAnc3JjJztcclxuICB9XHJcblxyXG4gIGNoYW5nZWRVcmwodXJsKSB7XHJcbiAgICB0aGlzLnNldFVybCh1cmwpO1xyXG4gIH1cclxuXHJcbiAgY29tcGlsZWQoKSB7XHJcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCd1cmwnKSAmJiB0aGlzLnNldFVybCh0aGlzLmF0dHJzLnVybCk7XHJcbiAgfVxyXG5cclxuICBzZXRVcmwodXJsKSB7XHJcbiAgICB0aGlzLmF0dHJzW3RoaXMudXJsQXR0cmlidXRlXSA9IHVybDtcclxuICB9XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdXJsLmpzIiwiaW1wb3J0IEFraWxpIGZyb20gJy4vYWtpbGkuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9zZXJ2aWNlcy9yZXF1ZXN0LmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcblxuY29uc3QgZXZhbHVhdGlvblJlZ2V4ID0gL1xcJHsoKCg/IVxcJHspLikqKX0vO1xuY29uc3QgZXZhbHVhdGlvblJlZ2V4R2xvYmFsID0gbmV3IFJlZ0V4cChldmFsdWF0aW9uUmVnZXguc291cmNlLCBcImdcIik7XG5jb25zdCBzeXN0ZW1BdHRyaWJ1dGVzID0gWydjb21wb25lbnQnLCAnc2NvcGUnXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgc3RhdGljIG5lc3RlZFdhdGNoaW5nO1xuICBzdGF0aWMgbWF0Y2hlcyA9ICcnO1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbXTtcbiAgc3RhdGljIGV2ZW50cyA9IFtdO1xuICBzdGF0aWMgY29udHJvbEF0dHJpYnV0ZXMgPSBmYWxzZTtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gZmFsc2U7XG4gIHN0YXRpYyB0ZW1wbGF0ZSA9ICcnO1xuICBzdGF0aWMgdGVtcGxhdGVVcmwgPSAnJztcbiAgc3RhdGljIHNjb3BlID0gbnVsbDtcblxuICAvKipcbiAgICogRnVuY3Rpb24gdG8gZGVmaW5lIHRoZSBjb21wb25lbnRcbiAgICovXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdjb21wb25lbnQnLCBDb21wb25lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIHRoZSBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBleHByZXNzaW9uXG4gICAqIEBwYXJhbSB7RXZlbnR9IFtldmVudD1udWxsXVxuICAgKi9cbiAgc3RhdGljIHBhcnNlKGNvbnRleHQsIGV4cHJlc3Npb24sIGV2ZW50ID0gbnVsbCkge1xuICAgIHJldHVybiAoZnVuY3Rpb24gKGV4cHJlc3Npb24sIGV2ZW50KSB7XG4gICAgICByZXR1cm4gZXZhbChleHByZXNzaW9uKTtcbiAgICB9KS5jYWxsKGNvbnRleHQsIGV4cHJlc3Npb24sIGV2ZW50KVxuICB9XG5cbiAgY29uc3RydWN0b3IoZWwsIHNjb3BlID0ge30pIHtcbiAgICB0aGlzLl9faXNNb3VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2lzQ29tcGlsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2JpbmRpbmdzID0ge307XG4gICAgdGhpcy5fX2V2YWx1YXRpbmdFdmVudCA9IG51bGw7XG4gICAgdGhpcy5fX3JlY29tcGlsaW5nID0gbnVsbDtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0ge307XG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IG51bGw7XG4gICAgdGhpcy5fX2NoaWxkcmVuID0gW107XG4gICAgdGhpcy5fX3BhcmVudCA9IG51bGw7XG4gICAgdGhpcy5fX3BhcmVudHMgPSBbXTtcbiAgICB0aGlzLl9fYXR0cnMgPSB7fTtcbiAgICB0aGlzLl9fYXR0cmlidXRlT2YgPSBudWxsO1xuICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50ID0gdGhpcztcbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgdGhpcy5lbCA9IGVsO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiB0aGUgcmVjb21waWxhdGlvblxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlY29tcGlsZSgpIHtcbiAgICB0aGlzLl9faXNNb3VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2lzQ29tcGlsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5fX2Rpc2FibGVQcm94eSA9IG51bGw7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IHt9O1xuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IHt9O1xuICAgIHRoaXMuX19zZXRFdmVudHMoKTtcbiAgICB0aGlzLl9fc2V0UGFyZW50cygpO1xuICAgIHRoaXMuX19zZXRCb29sZWFuQXR0cmlidXRlcygpO1xuICAgIHRoaXMuX19kZWZpbmVBdHRyaWJ1dGVzKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIG9uIHRoZSBjcmVhdGlvblxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZSgpIHtcbiAgICB0aGlzLmVsLl9fYWtpbGkgPSB0aGlzO1xuICAgIHRoaXMuX19pbml0aWFsaXplKCk7XG4gICAgdGhpcy5fX3NldEV2ZW50cygpO1xuICAgIHRoaXMuX19zZXRQYXJlbnRzKCk7XG4gICAgdGhpcy5fX3NldEJvb2xlYW5BdHRyaWJ1dGVzKCk7XG4gICAgdGhpcy5fX2RlZmluZUF0dHJpYnV0ZXMoKTtcblxuICAgIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVkKHRoaXMuYXR0cnMpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiB0aGUgY29tcGlsYXRpb25cbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIF9fY29tcGlsZSgpIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuX19jb250cm9sQXR0cmlidXRlcyB8fCAhdGhpcy5fX2V2YWx1YXRlUGFyZW50O1xuICAgIGxldCBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbiAgICB0aGlzLl9fYXR0cmlidXRlT2YgPSBjb250cm9sPyB0aGlzOiB0aGlzLl9fZXZhbHVhdGVQYXJlbnQuX19ha2lsaTtcblxuICAgIGlmKCF0aGlzLl9fcmVjb21waWxpbmcgfHwgdGhpcy5fX2NvbXBpbGluZy5uZXdQYXJlbnQgfHwgdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzKSB7XG4gICAgICB0aGlzLl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKHRoaXMuZWwsIHRoaXMuX19hdHRyaWJ1dGVPZik7XG4gICAgfVxuXG4gICAgbGV0IGludGVycG9sYXRlID0gKGNoaWxkcmVuLCBwYXJlbnQpID0+IHtcbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYoY2hpbGQubm9kZVR5cGUgPT0gMykge1xuICAgICAgICAgIHRoaXMuX19pbml0aWFsaXplTm9kZShjaGlsZCwgcGFyZW50KTtcblxuICAgICAgICAgIGNoaWxkLm5vZGVWYWx1ZSA9IHRoaXMuX19ldmFsdWF0ZShjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihjaGlsZC5ub2RlVHlwZSA9PSAxICYmICFjaGlsZC5fX2FraWxpKSB7XG4gICAgICAgICAgdGhpcy5fX2ludGVycG9sYXRlQXR0cmlidXRlcyhjaGlsZCk7XG4gICAgICAgICAgaW50ZXJwb2xhdGUoY2hpbGQuY2hpbGROb2RlcywgY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGludGVycG9sYXRlKHRoaXMuZWwuY2hpbGROb2RlcywgdGhpcy5lbCk7XG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IHRydWU7XG5cbiAgICBsZXQgcmVzO1xuXG4gICAgaWYoIXRoaXMuX19yZWNvbXBpbGluZykge1xuICAgICAgcmVzID0gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0cnMub25Db21waWxlZCAmJiB0aGlzLmF0dHJzLm9uQ29tcGlsZWQudHJpZ2dlcigpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBpbGVkKCk7XG4gICAgICB9KTtcblxuICAgICAgaWYodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkge1xuICAgICAgICBwID0gcmVxdWVzdC5nZXQodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLl9fY29udGVudDtcbiAgICAgICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCByZXMuZGF0YSk7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX19jb250ZW50O1xuXG4gICAgICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uUmVjb21waWxlZCAmJiB0aGlzLmF0dHJzLm9uUmVjb21waWxlZC50cmlnZ2VyKCk7XG4gICAgICAgIHRoaXMucmVjb21waWxlZCgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fX2lzQ29tcGlsZWQgPSB0cnVlO1xuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IG51bGw7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IG51bGw7XG5cbiAgICByZXR1cm4gcC50aGVuKCgpID0+IHtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZSB0aGUgY29tcG9uZW50XG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBfX3Jlc29sdmUoKSB7XG4gICAgaWYodGhpcy5fX3JlY29tcGlsaW5nKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5hdHRycy5vblJlc29sdmVkICYmIHRoaXMuYXR0cnMub25SZXNvbHZlZC50cmlnZ2VyKCk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnJlc29sdmVkKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnQgb2YgdGhlIHtAc2VlIENvbXBvbmVudCNfX2NvbXBpbGV9IG1ldGhvZFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemUoKSB7XG4gICAgbGV0IHBhcmVudCA9IEFraWxpLmdldEFraWxpUGFyZW50cyh0aGlzLmVsLCBmYWxzZSk7XG4gICAgbGV0IFNjb3BlID0gdGhpcy5jb25zdHJ1Y3Rvci5zY29wZSB8fCBBa2lsaS5TY29wZTtcbiAgICBsZXQgc2NvcGU7XG4gICAgbGV0IGlzUm9vdCA9IEFraWxpLl9fcm9vdCA9PT0gdGhpcy5lbDtcblxuICAgIGlmKHBhcmVudCkge1xuICAgICAgc2NvcGUgPSBuZXcgU2NvcGUodGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3Njb3BlJykgfHwgQWtpbGkuY3JlYXRlU2NvcGVOYW1lKCksIHRoaXMuZWwsIHRoaXMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNjb3BlID0gbmV3IFNjb3BlKGlzUm9vdD8gJ3Jvb3QnOiBBa2lsaS5jcmVhdGVTY29wZU5hbWUoKSwgdGhpcy5lbCwgdGhpcyk7XG4gICAgICBpc1Jvb3QgJiYgKEFraWxpLnJvb3QgPSB0aGlzKTtcbiAgICB9XG5cbiAgICBsZXQgX19zY29wZSA9IHNjb3BlO1xuICAgIGxldCBfc2NvcGUgPSBPYmplY3QuYXNzaWduKHNjb3BlLCB0aGlzLnNjb3BlKTtcbiAgICBsZXQgbmVzdGVkV2F0Y2hpbmcgPSBBa2lsaS5vcHRpb25zLm5lc3RlZFdhdGNoaW5nO1xuICAgIGxldCBjb250cm9sQXR0cmlidXRlcyA9IHRoaXMuY29uc3RydWN0b3IuY29udHJvbEF0dHJpYnV0ZXM7XG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuY29uc3RydWN0b3IuZXZlbnRzO1xuXG4gICAgaWYodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZSkge1xuICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgdGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgaWYodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkge1xuICAgICAgdGhpcy5fX2NvbnRlbnQgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gICAgaWYodGhpcy5jb25zdHJ1Y3Rvci5uZXN0ZWRXYXRjaGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXN0ZWRXYXRjaGluZyA9IHRoaXMuY29uc3RydWN0b3IubmVzdGVkV2F0Y2hpbmc7XG4gICAgfVxuICAgIGVsc2UgaWYoU2NvcGUubmVzdGVkV2F0Y2hpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbmVzdGVkV2F0Y2hpbmcgPSBTY29wZS5uZXN0ZWRXYXRjaGluZztcbiAgICB9XG5cbiAgICB0aGlzLl9fc2NvcGUgPSBfX3Njb3BlO1xuICAgIHRoaXMuX19ldmVudHMgPSBldmVudHM7XG4gICAgdGhpcy5fX25lc3RlZFdhdGNoaW5nID0gbmVzdGVkV2F0Y2hpbmc7XG4gICAgdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzID0gY29udHJvbEF0dHJpYnV0ZXM7XG5cbiAgICBBa2lsaS5hZGRTY29wZShzY29wZSk7XG5cbiAgICBpZihuZXN0ZWRXYXRjaGluZykge1xuICAgICAgc2NvcGUgPSB0aGlzLl9fbmVzdGVkT2JzZXJ2ZShfc2NvcGUsIFtdKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzY29wZSA9IHRoaXMuX19vYnNlcnZlKF9zY29wZSwgW10pO1xuICAgIH1cblxuICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYm9vbGVhbiBhdHRyaWJ1dGVzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKSB7XG4gICAgdGhpcy5ib29sZWFuQXR0cmlidXRlcyA9IFtdLmNvbmNhdChBa2lsaS5odG1sQm9vbGVhbkF0dHJpYnV0ZXMsIHRoaXMuY29uc3RydWN0b3IuYm9vbGVhbkF0dHJpYnV0ZXMpO1xuXG4gICAgbGV0IHNldEF0dHIgPSAoZWwpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBhdHRycyA9IGVsLmF0dHJpYnV0ZXMsIGwgPSBhdHRycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IG5vZGUgPSBhdHRyc1tpXTtcblxuICAgICAgICBpZih0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzLmluZGV4T2Yobm9kZS5ub2RlTmFtZSkgIT0gLTEpIHtcbiAgICAgICAgICBpZihlbC5oYXNBdHRyaWJ1dGUoYGJvb2xlYW4tJHtub2RlLm5vZGVOYW1lfWApKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYGJvb2xlYW4tJHtub2RlLm5vZGVOYW1lfWAsIGVsLmdldEF0dHJpYnV0ZShub2RlLm5vZGVOYW1lKSB8fCBub2RlLm5vZGVOYW1lKTtcbiAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGVsLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBlbC5jaGlsZHJlbltpXTtcblxuICAgICAgICBpZighY2hpbGQuX19ha2lsaSkge1xuICAgICAgICAgIHNldEF0dHIoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNldEF0dHIodGhpcy5lbCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGV2ZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldEV2ZW50cygpIHtcbiAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5fX2V2ZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBldiA9IHRoaXMuX19ldmVudHNbaV07XG5cbiAgICAgICEvXm9uLS9pLnRlc3QoZXYpICYmIChldiA9ICdvbi0nICsgZXYpO1xuXG4gICAgICBpZighdGhpcy5lbC5oYXNBdHRyaWJ1dGUoZXYpKSB7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGV2LCAnJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjb21wb25lbnQgcGFyZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldFBhcmVudHMoKSB7XG4gICAgbGV0IHBhcmVudHMgPSBBa2lsaS5nZXRBa2lsaVBhcmVudHModGhpcy5lbCk7XG5cbiAgICBpZighcGFyZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbmV3UGFyZW50ID0gdGhpcy5fX3BhcmVudCAhPT0gcGFyZW50c1swXTtcbiAgICBsZXQgZXZhbHVhdGVQYXJlbnQgPSBudWxsO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHBhcmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcGFyZW50ID0gcGFyZW50c1tpXTtcblxuICAgICAgaWYoIXBhcmVudC5fX2FraWxpLmNvbnN0cnVjdG9yLnRyYW5zcGFyZW50KSB7XG4gICAgICAgIGV2YWx1YXRlUGFyZW50ID0gcGFyZW50O1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX19jb21waWxpbmcubmV3UGFyZW50ID0gbmV3UGFyZW50O1xuICAgIG5ld1BhcmVudCAmJiB0aGlzLl9fZGV0YWNoKCk7XG5cbiAgICBpZih0aGlzLmNvbnN0cnVjdG9yLnRyYW5zcGFyZW50KSB7XG4gICAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudCA9IGV2YWx1YXRlUGFyZW50Ll9fYWtpbGk7XG4gICAgfVxuXG4gICAgdGhpcy5fX2V2YWx1YXRlUGFyZW50ID0gZXZhbHVhdGVQYXJlbnQ7XG4gICAgdGhpcy5fX3BhcmVudCA9IHBhcmVudHNbMF07XG4gICAgdGhpcy5fX3BhcmVudHMgPSBwYXJlbnRzO1xuICAgIHRoaXMuc2NvcGUuX19wYXJlbnQgPSB0aGlzLl9fZXZhbHVhdGVQYXJlbnQuX19ha2lsaS5zY29wZTtcbiAgICAhdGhpcy5fX3JlY29tcGlsaW5nICYmIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2FkZENoaWxkKHRoaXMuZWwpO1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLnNjb3BlLCB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19zY29wZSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGNoaWxkIGVsZW1lbnQgdG8gdGhlIGxpc3RcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hZGRDaGlsZChlbCkge1xuICAgIHRoaXMuX19jaGlsZHJlbi5wdXNoKGVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGxpY2UgY2hpbGQgZnJvbSB0aGUgbGlzdFxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NwbGljZUNoaWxkKGVsKSB7XG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuX19jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuX19jaGlsZHJlbltpXTtcblxuICAgICAgaWYoY2hpbGQgPT09IGVsKSB7XG4gICAgICAgIHRoaXMuX19jaGlsZHJlbi5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGktLTtcbiAgICAgICAgbC0tO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBZb3UgY2FuIGNoYW5nZSBleHByZXNzaW9uIGJlZm9yZSBwYXJzaW5nIGhlcmVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4cHJlc3Npb25cbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0UGFyc2VkRXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgbm9kZSBoYXMgYW55IHByb3BlcnR5IGNoYW5nZXMgb3Igbm90XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jaGVja0V2YWx1YXRpb24obm9kZSkge1xuICAgIGlmICghT2JqZWN0LmtleXMobm9kZS5fX3Byb3BlcnRpZXMpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgayBpbiBub2RlLl9fcHJvcGVydGllcykge1xuICAgICAgaWYoIW5vZGUuX19wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgcHJvcCA9IG5vZGUuX19wcm9wZXJ0aWVzW2tdO1xuICAgICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMocHJvcC5rZXlzLCBwcm9wLmNvbXBvbmVudC5fX3Njb3BlKTtcblxuICAgICAgaWYoIXV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlKHZhbHVlLCBwcm9wLnZhbHVlLCBwcm9wLmNvcHksIHV0aWxzLmNvcHkodmFsdWUpKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogIENoZWNrIG5vZGUgaGFzIGNoYW5nZWQgb24gdGhlIGNlcnRhaW4ga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NoZWNrTm9kZVByb3BlcnR5Q2hhbmdpbmcobm9kZSwga2V5cywgdmFsdWUpIHtcbiAgICBsZXQgcHJvcCA9IHRoaXMuX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cyk7XG5cbiAgICBpZighcHJvcCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuICF1dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSh2YWx1ZSwgcHJvcC52YWx1ZSwgcHJvcC5jb3B5LCB1dGlscy5jb3B5KHZhbHVlKSk7XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgbm9kZSBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZShub2RlKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGxldCBhdHRyaWJ1dGVWYWx1ZTtcbiAgICBsZXQgZXhwcmVzc2lvbjtcblxuICAgIGxldCByZXMgPSBub2RlLl9fZXhwcmVzc2lvbi5yZXBsYWNlKGV2YWx1YXRpb25SZWdleEdsb2JhbCwgKG0sIGQpID0+IHtcbiAgICAgIGNvdW50ZXIrKztcblxuICAgICAgbGV0IGV2YWx1YXRlO1xuICAgICAgbGV0IGV2YWx1YXRpb247XG4gICAgICBsZXQgZXhpc3RpbmdCaW5kaW5ncyA9IHt9O1xuICAgICAgbGV0IHBhcnNlVmFsdWUgPSBub2RlLl9fY29tcG9uZW50Ll9fZ2V0UGFyc2VkRXhwcmVzc2lvbihkKTtcblxuICAgICAgQWtpbGkuX19ldmFsdWF0aW9uID0geyBub2RlOiBub2RlLCBsaXN0OiBbXX07XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGV2YWx1YXRlID0gdGhpcy5jb25zdHJ1Y3Rvci5wYXJzZSh0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5zY29wZSwgcGFyc2VWYWx1ZSk7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGxldCBtZXNzYWdlID0gYFNjb3BlIHBhcnNpbmcgZXJyb3IgaW4gdGhlIHRlbXBsYXRlIGV4cHJlc3Npb246ICR7bm9kZS5fX2V4cHJlc3Npb259YDtcblxuICAgICAgICBpZighQWtpbGkub3B0aW9ucy5zaG93RXZhbHVhdGlvbkVycm9ycykge1xuICAgICAgICAgIGlmKEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihlcnIuc3RhY2spO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGV2YWx1YXRlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGV2YWx1YXRpb24gPSBBa2lsaS5fX2V2YWx1YXRpb24/IEFraWxpLl9fZXZhbHVhdGlvbi5saXN0OiBbXTtcbiAgICAgIEFraWxpLl9fZXZhbHVhdGlvbi5saXN0ID0gbnVsbDtcbiAgICAgIEFraWxpLl9fZXZhbHVhdGlvbiA9IG51bGw7XG5cbiAgICAgIGZvcihsZXQgaSA9IGV2YWx1YXRpb24ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgbGV0IGRhdGEgPSBldmFsdWF0aW9uW2ldO1xuICAgICAgICBsZXQgaGFzaCA9IGAke2RhdGEuY29tcG9uZW50Ll9fc2NvcGUuX19uYW1lfS4ke2RhdGEua2V5c1N0cmluZ31gO1xuXG4gICAgICAgIGlmKGRhdGEubm90QmluZGluZykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZXhpc3RpbmdCaW5kaW5nc1toYXNoXSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBhcmVudFZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoZGF0YS5wYXJlbnRzLCBkYXRhLmNvbXBvbmVudC5fX3Njb3BlKTtcbiAgICAgICAgbGV0IGV2YWxDb21wb25lbnQgPSBub2RlLl9fYXR0cmlidXRlT2YgfHwgbm9kZS5fX2NvbXBvbmVudDtcblxuICAgICAgICBpZih1dGlscy5pc1Njb3BlUHJveHkocGFyZW50VmFsdWUpICYmIGRhdGEuY29tcG9uZW50ICE9PSBldmFsQ29tcG9uZW50Ll9fZXZhbHVhdGlvbkNvbXBvbmVudCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGJpbmQgPSBkYXRhLmNvbXBvbmVudC5fX2dldEJvdW5kTm9kZShkYXRhLmtleXMsIG5vZGUpO1xuICAgICAgICBsZXQgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhkYXRhLmtleXMsIGRhdGEuY29tcG9uZW50Ll9fc2NvcGUpO1xuXG4gICAgICAgIGlmKCFiaW5kKSB7XG4gICAgICAgICAgZGF0YS5jb21wb25lbnQuX19iaW5kKGRhdGEua2V5cywgeyBub2RlOiBub2RlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YS5jb21wb25lbnQuX19zZXROb2RlUHJvcGVydHkobm9kZSwgZGF0YS5rZXlzLCB2YWx1ZSk7XG4gICAgICAgIGV4aXN0aW5nQmluZGluZ3NbaGFzaF0gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBleGlzdGluZ0JpbmRpbmdzID0gbnVsbDtcbiAgICAgIGV2YWx1YXRpb24gPSBudWxsO1xuXG4gICAgICBpZihub2RlIGluc3RhbmNlb2YgQXR0cikge1xuICAgICAgICBleHByZXNzaW9uID0gbTtcbiAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBldmFsdWF0ZTtcblxuICAgICAgICByZXR1cm4gdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKGV2YWx1YXRlKTtcbiAgICAgIH1cblxuICAgICAgaWYodHlwZW9mIGV2YWx1YXRlID09ICdvYmplY3QnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGV2YWx1YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlKSB7XG4gICAgICAgICAgcmV0dXJuIGV2YWx1YXRlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBldmFsdWF0ZTtcbiAgICB9KTtcblxuICAgIGlmKG5vZGUgaW5zdGFuY2VvZiBBdHRyKSB7XG4gICAgICBsZXQgdmFsdWUgPSByZXM7XG4gICAgICBsZXQgaXNCb29sZWFuQXR0cmlidXRlID0gZmFsc2U7XG5cbiAgICAgIGlmKGNvdW50ZXIpIHtcbiAgICAgICAgbm9kZS5fX2hhc0JpbmRpbmdzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYoY291bnRlciA9PSAxICYmIGV4cHJlc3Npb24gJiYgbm9kZS5fX2V4cHJlc3Npb24gPT0gZXhwcmVzc2lvbikge1xuICAgICAgICB2YWx1ZSA9IGF0dHJpYnV0ZVZhbHVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgY2xlYXJBdHRyaWJ1dGUgPSBub2RlLm5vZGVOYW1lLnJlcGxhY2UoL15ib29sZWFuLSguKykvaSwgJyQxJyk7XG5cbiAgICAgIGlmKGNsZWFyQXR0cmlidXRlICE9IG5vZGUubm9kZU5hbWUpIHtcbiAgICAgICAgaXNCb29sZWFuQXR0cmlidXRlID0gdHJ1ZTtcbiAgICAgICAgdmFsdWUgPSAhIXZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZihub2RlLl9fYXR0cmlidXRlT24pIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IG5vZGUuX19hdHRyaWJ1dGVPbjtcblxuICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gdHJ1ZTtcbiAgICAgICAgY29tcG9uZW50LmF0dHJzW3V0aWxzLnRvQ2FtZWxDYXNlKGNsZWFyQXR0cmlidXRlKV0gPSB2YWx1ZTtcbiAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChjb21wb25lbnQuX19pc0NvbXBpbGVkKSB7XG4gICAgICAgICAgQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgICAgICBjb21wb25lbnQuYXR0cnMub25DaGFuZ2VkICYmIGNvbXBvbmVudC5hdHRycy5vbkNoYW5nZWQudHJpZ2dlcih7IGtleTogY2xlYXJBdHRyaWJ1dGUsIHZhbHVlOiB2YWx1ZX0pO1xuICAgICAgICAgICAgY29tcG9uZW50LmNoYW5nZWQoY2xlYXJBdHRyaWJ1dGUsIHZhbHVlKTtcblxuICAgICAgICAgICAgbGV0IGtleSA9IHV0aWxzLnRvQ2FtZWxDYXNlKGNsZWFyQXR0cmlidXRlKTtcbiAgICAgICAgICAgIGxldCBjYW1lbEtleSA9IGtleVswXS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpO1xuICAgICAgICAgICAgbGV0IGZuTmFtZSA9ICdjaGFuZ2VkJyArIGNhbWVsS2V5O1xuICAgICAgICAgICAgbGV0IGV2Rm5OYW1lID0gJ29uQ2hhbmdlZCcgKyBjYW1lbEtleTtcblxuICAgICAgICAgICAgY29tcG9uZW50LmF0dHJzW2V2Rm5OYW1lXSAmJiBjb21wb25lbnQuYXR0cnNbZXZGbk5hbWVdLnRyaWdnZXIodmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudFtmbk5hbWVdID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgY29tcG9uZW50W2ZuTmFtZV0odmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmKGlzQm9vbGVhbkF0dHJpYnV0ZSkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IG5vZGUuX19lbGVtZW50O1xuICAgICAgICBsZXQgYXR0ciA9IHV0aWxzLnRvQ2FtZWxDYXNlKGNsZWFyQXR0cmlidXRlKTtcblxuICAgICAgICB2YWx1ZT8gZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgJ3RydWUnKTogZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBOZXN0ZWQgZXZhbHVhdGlvbiBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtib29sZWFufSBbd2l0aG91dFBhcmVudHM9ZmFsc2VdIC0gaWYgdHJ1ZSBldmFsdWF0aW9uIHdpbGwgYmUgb25seSBmb3IgdGhlIGN1cnJlbnQga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlTmVzdGVkKGtleXMsIHdpdGhvdXRQYXJlbnRzID0gZmFsc2UpIHtcbiAgICBsZXQgc2NvcGUgPSB0aGlzLl9fc2NvcGU7XG4gICAgbGV0IHByb3BzID0gW107XG5cbiAgICBpZighd2l0aG91dFBhcmVudHMpIHtcbiAgICAgIGxldCBsYXN0UHJvcHMgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgbGV0IHZhbHVlO1xuXG4gICAgICAgIGxhc3RQcm9wcyA9IFsuLi5sYXN0UHJvcHMsIGtleV07XG4gICAgICAgIHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMobGFzdFByb3BzLCBzY29wZSk7XG4gICAgICAgIHByb3BzLnB1c2goeyBrZXlzOiBsYXN0UHJvcHMsIHZhbHVlOiB2YWx1ZX0pXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcHJvcHMucHVzaCh7IGtleXM6IGtleXMsIHZhbHVlOiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCBzY29wZSl9KVxuICAgIH1cblxuICAgIGxldCBwcm9wc0xlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICAgIGxldCBlbEV2YWx1YXRlID0gKGVsZW1lbnQpID0+IHtcbiAgICAgIGxldCBjb21wb25lbnQgPSBlbGVtZW50Ll9fYWtpbGk7XG5cbiAgICAgIGZvciAobGV0IG0gPSAwOyBtIDwgcHJvcHNMZW5ndGg7IG0rKykge1xuICAgICAgICBsZXQgcHJvcCA9IHByb3BzW21dO1xuICAgICAgICBsZXQgZGF0YSA9IGNvbXBvbmVudC5fX2dldEJpbmQocHJvcC5rZXlzKTtcblxuICAgICAgICBpZiAoIWRhdGEgfHwgIWRhdGEuX19kYXRhKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBrID0gMCwgYyA9IGRhdGEuX19kYXRhLmxlbmd0aDsgayA8IGM7IGsrKykge1xuICAgICAgICAgIGxldCBiaW5kID0gZGF0YS5fX2RhdGFba107XG5cbiAgICAgICAgICBpZihjb21wb25lbnQuX19jaGVja05vZGVQcm9wZXJ0eUNoYW5naW5nKGJpbmQubm9kZSwgcHJvcC5rZXlzLCBwcm9wLnZhbHVlKSkge1xuICAgICAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZVByb3h5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2V2YWx1YXRlTm9kZShiaW5kLm5vZGUpO1xuXG4gICAgICAgICAgICBmb3IobGV0IF9rIGluIGJpbmQubm9kZS5fX3Byb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgaWYoIWJpbmQubm9kZS5fX3Byb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoX2spKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBsZXQgX3Byb3AgPSBiaW5kLm5vZGUuX19wcm9wZXJ0aWVzW19rXTtcbiAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoX3Byb3Aua2V5cywgX3Byb3AuY29tcG9uZW50Ll9fc2NvcGUpO1xuXG4gICAgICAgICAgICAgIF9wcm9wLmNvbXBvbmVudC5fX3NldE5vZGVQcm9wZXJ0eShiaW5kLm5vZGUsIF9wcm9wLmtleXMsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZVByb3h5ID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9O1xuXG4gICAgbGV0IGV2YWx1YXRlID0gKGVsZW1lbnRzKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gZWxFdmFsdWF0ZShlbGVtZW50c1tpXSk7XG5cbiAgICAgICAgZXZhbHVhdGUoY29tcG9uZW50Ll9fY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBlbEV2YWx1YXRlKHRoaXMuZWwpO1xuICAgIGV2YWx1YXRlKHRoaXMuX19jaGlsZHJlbik7XG4gIH07XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIHZhbHVlIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVsZXRlZD1mYWxzZV0gLSB0cnVlIGlmIHZhbHVlIGlzIGRlbGV0aW5nXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVCeUtleXMoa2V5cywgdmFsdWUsIGlzRGVsZXRlZCA9IGZhbHNlKSB7XG4gICAgbGV0IGRhdGEgPSB0aGlzLl9fZ2V0QmluZChrZXlzKTtcblxuICAgIGxldCB1bmJpbmQgPSAob2JqLCBwYXJlbnRzKSA9PiB7XG4gICAgICBmb3IobGV0IGsgaW4gb2JqKSB7XG4gICAgICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkoaykgfHwgayA9PSAnX19kYXRhJykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IF9rZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrXSk7XG4gICAgICAgIGxldCBfX2tleXMgPSBfa2V5cy5zbGljZSgpO1xuICAgICAgICBsZXQgX2lzRGVsZXRlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgdmFsID0gb2JqW2tdO1xuICAgICAgICBsZXQgaGFzS2V5O1xuXG4gICAgICAgIF9fa2V5cy5zaGlmdCgpO1xuICAgICAgICBoYXNLZXkgPSB1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhfX2tleXMsIHZhbHVlKTtcblxuICAgICAgICBpZih2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgJiYgIWhhc0tleSkge1xuICAgICAgICAgIF9pc0RlbGV0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodmFsICYmIHR5cGVvZiB2YWwgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB1bmJpbmQodmFsLCBfa2V5cyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9fZXZhbHVhdGVOZXN0ZWQoX2tleXMsIHRydWUpO1xuXG4gICAgICAgIGlmKHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCAhaGFzS2V5KSB7XG4gICAgICAgICAgdGhpcy5fX3VuYmluZChfa2V5cyk7XG4gICAgICAgICAgX2lzRGVsZXRlZCAmJiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhfX2tleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBkYXRhICYmIHVuYmluZChkYXRhLCBbXS5jb25jYXQoa2V5cykpO1xuICAgIHRoaXMuX19ldmFsdWF0ZU5lc3RlZChrZXlzKTtcblxuICAgIGlmKGlzRGVsZXRlZCkge1xuICAgICAgdGhpcy5fX3VuYmluZChrZXlzKTtcbiAgICAgIGlzRGVsZXRlZCAmJiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSBldmVudCBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVFdmVudChub2RlLCBlbCwgZSkge1xuICAgIGxldCBleHByZXNzaW9uID0gZXZhbHVhdGlvblJlZ2V4LmV4ZWMobm9kZS5fX2V4cHJlc3Npb24pO1xuICAgIGxldCBldmFsdWF0ZTtcblxuICAgIGlmKCFleHByZXNzaW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fX2V2YWx1YXRpbmdFdmVudCA9IHtcbiAgICAgIGVsOiBlbCxcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIGV2ZW50OiBlLFxuICAgICAgbm9kZTogbm9kZVxuICAgIH07XG5cbiAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0gbnVsbDtcbiAgICBldmFsdWF0ZSA9IHRoaXMuY29uc3RydWN0b3IucGFyc2UodGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQuc2NvcGUsIGV4cHJlc3Npb25bMV0sIGUpO1xuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSBudWxsO1xuXG4gICAgcmV0dXJuIGV2YWx1YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGNoYW5nZXMgYW5kIGV2YWx1YXRlIHRoZSBwYXNzZWQgbm9kZVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZU5vZGUobm9kZSkge1xuICAgIGlmKHRoaXMuX19jaGVja0V2YWx1YXRpb24obm9kZSkpIHtcbiAgICAgIG5vZGVbKG5vZGUgaW5zdGFuY2VvZiBBdHRyKT8gJ3ZhbHVlJzogJ25vZGVWYWx1ZSddID0gdGhpcy5fX2V2YWx1YXRlKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRyaWJ1dGUgbm9kZSBpbml0aWFsaXppbmdcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBhdHRyaWJ1dGVPZiAtIGlmIG5vZGUgaXMgbGlua2VkIHdpdGggcGFyZW50IHNjb3BlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZUF0dHJpYnV0ZShub2RlLCBlbCwgYXR0cmlidXRlT2YpIHtcbiAgICBpZihzeXN0ZW1BdHRyaWJ1dGVzLmluZGV4T2Yobm9kZS5ub2RlTmFtZSkgIT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9faW5pdGlhbGl6ZU5vZGUobm9kZSwgZWwpO1xuXG4gICAgbGV0IGV2ZW50TmFtZSA9IG5vZGUubm9kZU5hbWUucmVwbGFjZSgvXm9uLSguKykvaSwgJyQxJyk7XG4gICAgbGV0IG5vZGVOYW1lID0gdXRpbHMudG9DYW1lbENhc2Uobm9kZS5ub2RlTmFtZSk7XG4gICAgbGV0IGNvbXBvbmVudCA9IGF0dHJpYnV0ZU9mPyBhdHRyaWJ1dGVPZjogdGhpcztcblxuICAgIGlmKGV2ZW50TmFtZSAhPSBub2RlLm5vZGVOYW1lKSB7XG4gICAgICBpZihub2RlLl9fZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgZW1pdHRlciA9IG5ldyBBa2lsaS5FdmVudEVtaXR0ZXIoZXZlbnROYW1lLCBlbCwgY29tcG9uZW50KTtcblxuICAgICAgaWYobm9kZS5fX2V4cHJlc3Npb24pIHtcbiAgICAgICAgZW1pdHRlci5iaW5kKChlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5fX2V2YWx1YXRlRXZlbnQobm9kZSwgZWwsIGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgbm9kZS5fX2V2ZW50ID0gZW1pdHRlcjtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShub2RlLm5vZGVOYW1lLCB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUoZW1pdHRlcikpO1xuXG4gICAgICBpZihhdHRyaWJ1dGVPZikge1xuICAgICAgICB0aGlzLl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IHRydWU7XG4gICAgICAgIHRoaXMuYXR0cnNbbm9kZU5hbWVdID0gZW1pdHRlcjtcbiAgICAgICAgdGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKGF0dHJpYnV0ZU9mKSB7XG4gICAgICBub2RlLl9fYXR0cmlidXRlT24gPSB0aGlzO1xuICAgICAgbm9kZS5fX2F0dHJpYnV0ZU9mID0gY29tcG9uZW50O1xuICAgIH1cblxuICAgIGVsLnNldEF0dHJpYnV0ZShub2RlLm5vZGVOYW1lLCBjb21wb25lbnQuX19ldmFsdWF0ZShub2RlKSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgbm9kZVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZU5vZGUobm9kZSwgZWwpIHtcbiAgICBpZihub2RlLl9faW5pdGlhbGl6ZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBub2RlLl9fZXhwcmVzc2lvbiA9IG5vZGVbKG5vZGUgaW5zdGFuY2VvZiBBdHRyKT8gJ3ZhbHVlJzogJ25vZGVWYWx1ZSddO1xuICAgIG5vZGUuX19wcm9wZXJ0aWVzID0ge307XG4gICAgbm9kZS5fX2F0dHJpYnV0ZU9mID0gbnVsbDtcbiAgICBub2RlLl9fYXR0cmlidXRlT24gPSBudWxsO1xuICAgIG5vZGUuX19ldmVudCA9IG51bGw7XG4gICAgbm9kZS5fX2hhc0JpbmRpbmdzID0gZmFsc2U7XG4gICAgbm9kZS5fX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICBub2RlLl9fY29tcG9uZW50ID0gdGhpcztcbiAgICBub2RlLl9fZWxlbWVudCA9IGVsO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJwb2xhdGUgYXR0cmlidXRlcyBvZiB0aGUgZWxlbWVudFxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gW2F0dHJpYnV0ZU9mPW51bGxdIC0gaWYgbm9kZSBpcyBsaW5rZWQgd2l0aCBwYXJlbnQgc2NvcGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXMoZWwsIGF0dHJpYnV0ZU9mID0gbnVsbCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBhdHRycyA9IGVsLmF0dHJpYnV0ZXMsIGwgPSBhdHRycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHRoaXMuX19pbml0aWFsaXplQXR0cmlidXRlKGF0dHJzW2ldLCBlbCwgYXR0cmlidXRlT2YpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmUgYXR0cmlidXRlcyBhcyBwcm94eVxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RlZmluZUF0dHJpYnV0ZXMoKSB7XG4gICAgbGV0IGNoYW5nZUF0dHJpYnV0ZSA9IChrZXksIHZhbHVlLCBpc0RlbGV0ZWQgPSBmYWxzZSkgPT4ge1xuICAgICAgaWYodGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgbm9kZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlTm9kZShrZXkpO1xuXG4gICAgICBpZihub2RlKSB7XG4gICAgICAgIGlmKG5vZGUuX19ldmVudCkge1xuICAgICAgICAgIG5vZGUuX19ldmVudC51bmJpbmQoKTtcbiAgICAgICAgICBub2RlLl9fZXZlbnQgPSBudWxsO1xuICAgICAgICAgIG5vZGUuX19leHByZXNzaW9uID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZihub2RlLl9faGFzQmluZGluZ3MpIHtcbiAgICAgICAgICB0aGlzLl9fcGFyZW50ICYmIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2V2YWx1YXRpb25Db21wb25lbnQuX191bmJpbmRCeU5vZGVzKFtub2RlXSk7XG4gICAgICAgICAgbm9kZS5fX2hhc0JpbmRpbmdzID0gZmFsc2U7XG4gICAgICAgICAgbm9kZS5fX2V4cHJlc3Npb24gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZihpc0RlbGV0ZWQpIHtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYobm9kZSkge1xuICAgICAgICBub2RlLnZhbHVlID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuYXR0cnMgPSBuZXcgUHJveHkodGhpcy5fX2F0dHJzLCB7XG4gICAgICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBpZihrZXkgPT0gJ19faXNQcm94eScpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgIH0sXG4gICAgICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IGF0dHJLZXkgPSB1dGlscy50b0Rhc2hDYXNlKGtleSk7XG5cbiAgICAgICAgaWYodGhpcy5ib29sZWFuQXR0cmlidXRlcy5pbmRleE9mKGF0dHJLZXkpICE9IC0xKSB7XG4gICAgICAgICAgYXR0cktleSA9IGBib29sZWFuLSR7YXR0cktleX1gO1xuXG4gICAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgY2hhbmdlQXR0cmlidXRlKGF0dHJLZXksIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZSh2YWx1ZSkpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBhdHRyS2V5ID0gdXRpbHMudG9EYXNoQ2FzZShrZXkpO1xuXG4gICAgICAgIGNoYW5nZUF0dHJpYnV0ZShhdHRyS2V5LCB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUodmFsdWUpLCB0cnVlKTtcbiAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBwcm94eSB0byBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEByZXR1cm5zIHtQcm94eX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19vYnNlcnZlKG9iaiwgcGFyZW50cykge1xuICAgIHJldHVybiBuZXcgUHJveHkob2JqLCB7XG4gICAgICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBpZiAoa2V5ID09IFwiX19pc1Byb3h5XCIpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX3RhcmdldFwiKSB7XG4gICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX2NvbXBvbmVudFwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IFwiX19rZXlzXCIpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50cztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuX19kaXNhYmxlUHJveHkpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLl9faXNTeXN0ZW1LZXkoa2V5KSkge1xuICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHR5cGVvZiB0YXJnZXRba2V5XSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgbGV0IHJlYWxUYXJnZXQgID0gdXRpbHMuZ2V0T3duUHJvcGVydHlUYXJnZXQodGFyZ2V0LCBrZXkpO1xuXG4gICAgICAgICAgaWYoIXV0aWxzLmlzUGxhaW5PYmplY3QocmVhbFRhcmdldCkpIHtcbiAgICAgICAgICAgIHJlYWxUYXJnZXRba2V5XSA9IEFraWxpLmlzb2xhdGVGdW5jdGlvbihyZWFsVGFyZ2V0W2tleV0sIHJlYWxUYXJnZXQuX19jb21wb25lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBa2lsaS5fX2V2YWx1YXRpb24pIHtcbiAgICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG4gICAgICAgICAgbGV0IG5vdEJpbmRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgIGlmKCEoa2V5IGluIHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKCF1dGlscy5nZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQodGFyZ2V0LCBrZXkpKSB7XG4gICAgICAgICAgICBub3RCaW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9fYmluZE5vZGUoQWtpbGkuX19ldmFsdWF0aW9uLmxpc3QsIGtleXMsIHBhcmVudHMsIHRhcmdldFtrZXldLCBub3RCaW5kaW5nKTtcblxuICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgIH0sXG4gICAgICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgaWYodGhpcy5fX2Rpc2FibGVQcm94eSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tleV0pO1xuXG4gICAgICAgIGlmKHRoaXMuX19uZXN0ZWRXYXRjaGluZykge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdGhpcy5fX25lc3RlZE9ic2VydmUodmFsdWUsIGtleXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZihBa2lsaS5fX2lzb2xhdGlvbikge1xuICAgICAgICAgIHRoaXMuX19jcmVhdGVJc29sYXRpb25PYmplY3QocGFyZW50cywga2V5LCBmYWxzZSk7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuX19pc01vdW50ZWQpIHtcbiAgICAgICAgICB0aGlzLl9fZXZhbHVhdGVCeUtleXMoa2V5cywgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgICAgZGVsZXRlUHJvcGVydHk6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG5cbiAgICAgICAgaWYodGhpcy5fX2Rpc2FibGVQcm94eSkge1xuICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5fX2lzU3lzdGVtS2V5KGtleSkpIHtcbiAgICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKEFraWxpLl9faXNvbGF0aW9uKSB7XG4gICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICAgIHRoaXMuX19jcmVhdGVJc29sYXRpb25PYmplY3QocGFyZW50cywga2V5LCB0cnVlKTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICB0aGlzLl9fZXZhbHVhdGVCeUtleXMoa2V5cywgdW5kZWZpbmVkLCB0cnVlKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2sga2V5IGlzIHN5c3RlbVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgX19pc1N5c3RlbUtleSA9IGZ1bmN0aW9uKGtleSkge1xuICAgIGlmKGtleSA9PSAnX18nIHx8IChrZXlbMF0gPT0gJ18nICYmIGtleVsxXSA9PSAnXycpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZihbJ2NvbnN0cnVjdG9yJ10uaW5kZXhPZihrZXkpICE9IC0xKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIE5lc3RlZCBvYnNlcnZpbmcgdGhlIHZhbHVlXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gW3N0YXJ0S2V5c11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19uZXN0ZWRPYnNlcnZlICh2YWx1ZSwgc3RhcnRLZXlzKSB7XG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IHRydWU7XG5cbiAgICBsZXQgb2JzZXJ2ZSA9ICh2YWx1ZSwgcGFyZW50cykgPT4ge1xuICAgICAgaWYodHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYoIXV0aWxzLmlzUGxhaW5PYmplY3QodmFsdWUpICYmICF1dGlscy5pc1Njb3BlUHJveHkodmFsdWUpICYmICEodmFsdWUgaW5zdGFuY2VvZiBBa2lsaS5TY29wZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgdGFyZ2V0ID0gdmFsdWU7XG5cbiAgICAgIGlmKHZhbHVlLl9faXNQcm94eSkge1xuICAgICAgICB0YXJnZXQgPSB2YWx1ZS5fX3RhcmdldDtcblxuICAgICAgICBpZighdGhpcy5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcpIHtcbiAgICAgICAgICBpZih2YWx1ZS5fX2NvbXBvbmVudCAhPT0gdGhpcykge1xuICAgICAgICAgICAgdGFyZ2V0ID0gdXRpbHMuY29weSh0YXJnZXQsIGZhbHNlKTtcbiAgICAgICAgICAgIHZhbHVlID0gdGFyZ2V0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKEFraWxpLmpvaW5CaW5kaW5nS2V5cyhwYXJlbnRzKSAhPSBBa2lsaS5qb2luQmluZGluZ0tleXModmFsdWUuX19rZXlzKSkge1xuICAgICAgICAgICAgdmFsdWUgPSB0YXJnZXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvcihsZXQgayBpbiB0YXJnZXQpIHtcbiAgICAgICAgaWYgKCF0YXJnZXQuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2YWwgPSB0YXJnZXRba107XG4gICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrXSk7XG5cbiAgICAgICAgdGFyZ2V0W2tdID0gb2JzZXJ2ZSh2YWwsIGtleXMpO1xuICAgICAgfVxuXG4gICAgICBpZighdmFsdWUuX19pc1Byb3h5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fb2JzZXJ2ZSh0YXJnZXQsIHBhcmVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcblxuICAgIGxldCByZXMgPSBvYnNlcnZlKHZhbHVlLCBzdGFydEtleXMgfHwgW10pO1xuXG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IG51bGw7XG5cbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgaXNvbGF0aW9uIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHBhcmFtIHtib29sZWFufSBbaXNEZWxldGVkPWZhbHNlXVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGVJc29sYXRpb25PYmplY3QgKHBhcmVudHMsIGtleSwgaXNEZWxldGVkID0gZmFsc2UpIHtcbiAgICBsZXQga2V5cyA9IHBhcmVudHMubGVuZ3RoPyBbcGFyZW50c1swXV06IFtrZXldO1xuICAgIGxldCBpc29sYXRpb25LZXkgPSBgJHt0aGlzLl9fc2NvcGUuX19uYW1lfS4ke0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKX1gO1xuXG4gICAgaWYocGFyZW50cy5sZW5ndGgpIHtcbiAgICAgIGlzRGVsZXRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmKCFBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25LZXldKSB7XG4gICAgICBBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25LZXldID0ge1xuICAgICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICAgIGtleXM6IGtleXNcbiAgICAgIH07XG4gICAgfVxuXG4gICAgKGlzRGVsZXRlZCAhPT0gdW5kZWZpbmVkKSAmJiAoQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uS2V5XS5pc0RlbGV0ZWQgPSBpc0RlbGV0ZWQpO1xuICAgIEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV0udmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpO1xuXG4gICAgcmV0dXJuIEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV07XG4gIH07XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgdGhlIG5vZGUgdG8gYmluZGluZ1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gYmluZCAtIGJ5IGRlZmF1bHQgaXMgY29tcG9uZW50Ll9fZXZhbHVhdGlvbi5saXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW25vdEJpbmRpbmc9ZmFsc2VdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYmluZE5vZGUoYmluZCwga2V5cywgcGFyZW50cywgdmFsdWUsIG5vdEJpbmRpbmcgPSBmYWxzZSkge1xuICAgIGxldCBwYXJlbnRLZXlzU3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKHBhcmVudHMpO1xuXG4gICAgaWYoYmluZC5sZW5ndGggJiYgIW5vdEJpbmRpbmcpIHtcbiAgICAgIGxldCBsID0gYmluZC5sZW5ndGggLSAxO1xuICAgICAgbGV0IGRhdGEgPSBiaW5kW2xdO1xuXG4gICAgICBpZihkYXRhLmtleXNTdHJpbmcgPT0gcGFyZW50S2V5c1N0cmluZyAmJiBkYXRhLmNvbXBvbmVudCA9PT0gdGhpcykge1xuICAgICAgICBiaW5kLnNwbGljZShsLCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBiaW5kLnB1c2goe1xuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAga2V5c1N0cmluZzogQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpLFxuICAgICAgcGFyZW50czogcGFyZW50cyxcbiAgICAgIGtleXM6IGtleXMsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBub3RCaW5kaW5nOiBub3RCaW5kaW5nXG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBiaW5kaW5nIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0QmluZChrZXlzKSB7XG4gICAgcmV0dXJuIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncykgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYmluZGluZyBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRCb3VuZE5vZGUoa2V5cywgbm9kZSkge1xuICAgIGxldCBiaW5kID0gIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncyk7XG5cbiAgICBpZighYmluZCB8fCAhYmluZC5fX2RhdGEgfHwgIWJpbmQuX19kYXRhLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGJpbmQuX19kYXRhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGRhdGEgPSBiaW5kLl9fZGF0YVtpXTtcblxuICAgICAgaWYoZGF0YS5ub2RlID09PSBub2RlKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBub2RlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMsIHZhbHVlKSB7XG4gICAgbGV0IHByb3AgPSB0aGlzLl9fZ2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMpO1xuICAgIGxldCBjb3B5ID0gdXRpbHMuY29weSh2YWx1ZSk7XG5cbiAgICBpZihwcm9wKSB7XG4gICAgICBsZXQgcmVzID0gdXRpbHMuY29tcGFyZVByZXZpb3VzVmFsdWUodmFsdWUsIHByb3AudmFsdWUsIHByb3AuY29weSwgY29weSk7XG5cbiAgICAgIHByb3AudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHByb3AuY29weSA9IGNvcHk7XG5cbiAgICAgIHJldHVybiAhcmVzO1xuICAgIH1cblxuICAgIGxldCBoYXNoID0gYCR7dGhpcy5fX3Njb3BlLl9fbmFtZX0uJHtBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyl9YDtcblxuICAgIG5vZGUuX19wcm9wZXJ0aWVzW2hhc2hdID0ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgY29weTogY29weSxcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIGtleXM6IGtleXNcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG5vZGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKSB7XG4gICAgbGV0IGhhc2ggPSBgJHt0aGlzLl9fc2NvcGUuX19uYW1lfS4ke0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKX1gO1xuXG4gICAgcmV0dXJuIG5vZGUuX19wcm9wZXJ0aWVzW2hhc2hdIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIG5vZGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZWxldGVOb2RlUHJvcGVydHkobm9kZSwga2V5cykge1xuICAgIGxldCBoYXNoID0gYCR7dGhpcy5fX3Njb3BlLl9fbmFtZX0uJHtBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyl9YDtcblxuICAgIGRlbGV0ZSBub2RlLl9fcHJvcGVydGllc1toYXNoXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIGRhdGEgd2l0aCB0aGUga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYmluZChrZXlzLCBkYXRhKSB7XG4gICAgdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzLCAobGFzdCwgdmFsdWUpID0+IHtcbiAgICAgIGxldCBvYmogPSB7X19kYXRhOiBbXX07XG5cbiAgICAgIGlmKCFsYXN0KSB7XG4gICAgICAgIHJldHVybiB2YWx1ZT8gdmFsdWU6IG9iajtcbiAgICAgIH1cblxuICAgICAgaWYodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgICAgIG9iaiA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZighb2JqLl9fZGF0YSkge1xuICAgICAgICBvYmouX19kYXRhID0gW107XG4gICAgICB9XG5cbiAgICAgIG9iai5fX2RhdGEucHVzaChkYXRhKTtcblxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5iaW5kKGtleXMpIHtcbiAgICBsZXQgYmluZCA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncyk7XG5cbiAgICBpZighYmluZCB8fCAhYmluZC5fX2RhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gYmluZC5fX2RhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IGJpbmQuX19kYXRhW2ldLm5vZGU7XG5cbiAgICAgIHRoaXMuX19kZWxldGVOb2RlUHJvcGVydHkobm9kZSwga2V5cyk7XG4gICAgfVxuXG4gICAgdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzLCAodmFsdWUpID0+IHtcbiAgICAgIGlmKE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPiAxKSB7XG4gICAgICAgIHZhbHVlLl9fZGF0YSA9IFtdO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIGJ5IG5vZGVzXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZVtdfSBub2Rlc1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYmluZEJ5Tm9kZXMobm9kZXMpIHtcbiAgICBsZXQgdW5iaW5kID0gKG9iaikgPT4ge1xuICAgICAgZm9yKGxldCBrIGluIG9iaikge1xuICAgICAgICBpZighb2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZihrID09ICdfX2RhdGEnKSB7XG4gICAgICAgICAgbGV0IGRhdGEgPSBvYmpba10gfHwgW107XG4gICAgICAgICAgbGV0IGwgPSBkYXRhLmxlbmd0aDtcblxuICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBiaW5kID0gZGF0YVtpXTtcblxuICAgICAgICAgICAgaWYobm9kZXMuaW5kZXhPZihiaW5kLm5vZGUpICE9IC0xKSB7XG4gICAgICAgICAgICAgIGRhdGEuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgIGwtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZighbCkge1xuICAgICAgICAgICAgZGVsZXRlIG9ialtrXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdW5iaW5kKG9ialtrXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdW5iaW5kKHRoaXMuX19iaW5kaW5ncyk7XG4gICAgdGhpcy5fX2NsZWFyRW1wdHlCaW5kaW5ncygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCBlbXB0eSBiaW5kaW5nc1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gW29ial1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jbGVhckVtcHR5QmluZGluZ3Mob2JqKSB7XG4gICAgbGV0IGNsZWFyID0gKG9iaiwgcGFyZW50LCBrZXkpID0+IHtcbiAgICAgIGZvcihsZXQgayBpbiBvYmopIHtcbiAgICAgICAgaWYoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHZhbCA9IG9ialtrXTtcblxuICAgICAgICBpZihrID09ICdfX2RhdGEnICYmICghdmFsIHx8ICF2YWwubGVuZ3RoKSkge1xuICAgICAgICAgIGRlbGV0ZSBvYmpba107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihrICE9ICdfX2RhdGEnKSB7XG4gICAgICAgICAgaWYoIU9iamVjdC5rZXlzKG9ialtrXSkubGVuZ3RoKSB7XG4gICAgICAgICAgICBkZWxldGUgb2JqW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsZWFyKG9ialtrXSwgb2JqLCBrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoIU9iamVjdC5rZXlzKG9iaikubGVuZ3RoICYmIHBhcmVudCkge1xuICAgICAgICBkZWxldGUgcGFyZW50W2tleV07XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNsZWFyKG9iaiB8fCB0aGlzLl9fYmluZGluZ3MpXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBjaGlsZCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcmVtb3ZlQ2hpbGRyZW4oKSB7XG4gICAgbGV0IHJlbW92ZSA9IChjaGlsZHJlbikgPT4ge1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIHJlbW92ZShjaGlsZC5fX2FraWxpLl9fY2hpbGRyZW4pO1xuICAgICAgICBjaGlsZC5fX2FraWxpLl9fcmVtb3ZlKCk7XG4gICAgICAgIGktLTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVtb3ZlKHRoaXMuX19jaGlsZHJlbik7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBjb21wb25lbnQgd2l0aG91dCBjaGlsZHJlbiByZW1vdmluZ1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlbW92ZSgpIHtcbiAgICB0aGlzLl9fZGV0YWNoKCk7XG4gICAgdGhpcy5hdHRycy5vblJlbW92ZWQgJiYgdGhpcy5hdHRycy5vblJlbW92ZWQudHJpZ2dlcigpO1xuICAgIHRoaXMucmVtb3ZlZCgpO1xuICAgIEFraWxpLnJlbW92ZVNjb3BlKHRoaXMuX19zY29wZS5fX25hbWUpO1xuICAgIHRoaXMuZWwucmVtb3ZlKCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0YWNoIHRoZSBjb21wb25lbnRcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZXRhY2goKSB7XG4gICAgaWYodGhpcy5fX2V2YWx1YXRlUGFyZW50ICYmICF0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMpIHtcbiAgICAgIHRoaXMuX19ldmFsdWF0ZVBhcmVudC5fX2FraWxpLl9fdW5iaW5kQnlOb2RlcyhbXS5zbGljZS5jYWxsKHRoaXMuZWwuYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIGlmKHRoaXMuX19wYXJlbnQpIHtcbiAgICAgIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX3NwbGljZUNoaWxkKHRoaXMuZWwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGNvbXBvbmVudCB3aXRoIGNoaWxkcmVuXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVzdHJveSgpIHtcbiAgICB0aGlzLl9fcmVtb3ZlQ2hpbGRyZW4oKTtcbiAgICB0aGlzLl9fcmVtb3ZlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIGNvbXBvbmVudCBodG1sXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZW1wdHkoKSB7XG4gICAgbGV0IG5vZGVzID0gW107XG5cbiAgICB0aGlzLl9fcmVtb3ZlQ2hpbGRyZW4oKTtcblxuICAgIGxldCBmaW5kID0gKGNoaWxkcmVuKSA9PiB7XG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmKGNoaWxkLm5vZGVUeXBlID09IDMpIHtcbiAgICAgICAgICBub2Rlcy5wdXNoKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGNoaWxkLm5vZGVUeXBlID09IDEgJiYgIWNoaWxkLl9fYWtpbGkpIHtcbiAgICAgICAgICBmb3IgKGxldCBrID0gMCwgYXR0cnMgPSBjaGlsZC5hdHRyaWJ1dGVzLCBjID0gYXR0cnMubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICAgICAgICBub2Rlcy5wdXNoKGF0dHJzW2ldKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmaW5kKGNoaWxkLmNoaWxkTm9kZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZpbmQodGhpcy5lbC5jaGlsZE5vZGVzKTtcbiAgICB0aGlzLl9fdW5iaW5kQnlOb2Rlcyhub2Rlcyk7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcGFyZW50IGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldFBhcmVudChzZWxlY3RvciA9ICcnLCBmaW5kQWxsID0gZmFsc2UsIGxldmVscykge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBsZXQgbGV2ZWwgPSAwO1xuXG4gICAgaWYobGV2ZWxzICE9PSB1bmRlZmluZWQgJiYgIUFycmF5LmlzQXJyYXkobGV2ZWxzKSkge1xuICAgICAgbGV2ZWxzID0gW2xldmVsc107XG4gICAgfVxuXG4gICAgbGV0IGZpbmQgPSAocGFyZW50KSA9PiB7XG4gICAgICBpZighcGFyZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYoIWxldmVscyB8fCBsZXZlbHMuaW5kZXhPZihsZXZlbCkgIT0gLTEpIHtcbiAgICAgICAgaWYgKCFzZWxlY3RvciB8fCBwYXJlbnQuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIGlmICghZmluZEFsbCkge1xuICAgICAgICAgICAgYXJyLnB1c2gocGFyZW50Ll9fYWtpbGkpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYXJyLnB1c2gocGFyZW50Ll9fYWtpbGkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldmVsKys7XG4gICAgICBmaW5kKHBhcmVudC5fX2FraWxpLl9fcGFyZW50KTtcbiAgICB9O1xuXG4gICAgZmluZCh0aGlzLl9fcGFyZW50KTtcblxuICAgIHJldHVybiBmaW5kQWxsPyBhcnI6IChhcnJbMF0gfHwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNoaWxkIGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldENoaWxkcmVuKHNlbGVjdG9yID0gJycsIGZpbmRBbGwgPSB0cnVlLCBsZXZlbHMpIHtcbiAgICBsZXQgYXJyID0gW107XG4gICAgbGV0IGxldmVsID0gMDtcblxuICAgIGlmKGxldmVscyAhPT0gdW5kZWZpbmVkICYmICFBcnJheS5pc0FycmF5KGxldmVscykpIHtcbiAgICAgIGxldmVscyA9IFtsZXZlbHNdO1xuICAgIH1cblxuICAgIGxldCBmaW5kID0gKGNoaWxkcmVuKSA9PiB7XG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmKCFsZXZlbHMgfHwgbGV2ZWxzLmluZGV4T2YobGV2ZWwpICE9IC0xKSB7XG4gICAgICAgICAgaWYoIXNlbGVjdG9yIHx8IGNoaWxkLl9fYWtpbGkubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIGlmKCFmaW5kQWxsKSB7XG4gICAgICAgICAgICAgIGFyci5wdXNoKGNoaWxkLl9fYWtpbGkpO1xuXG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXJyLnB1c2goY2hpbGQuX19ha2lsaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldmVsKys7XG5cbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgZmluZChjaGlsZHJlbltpXS5fX2FraWxpLl9fY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmaW5kKHRoaXMuX19jaGlsZHJlbik7XG5cbiAgICByZXR1cm4gZmluZEFsbD8gYXJyOiAoYXJyWzBdIHx8IG51bGwpXG4gIH1cblxuICAvKipcbiAgICogR2V0IG5lYXJlc3QgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kQWxsPXRydWVdIC0gZ2V0IGFycmF5IGlmIHRydWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbcmlnaHQ9ZmFsc2VdIC0gZnJvbSB0aGUgcmlnaHQgc2lkZSBpZiB0cnVlXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0TmVhcihzZWxlY3RvciA9ICcnLCBmaW5kQWxsID0gdHJ1ZSwgcmlnaHQgPSBmYWxzZSkge1xuICAgIGlmKCF0aGlzLl9fcGFyZW50KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgbGV2ZWxFbGVtZW50cyA9IHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2NoaWxkcmVuLnNsaWNlKCk7XG4gICAgbGV0IGFyciA9IFtdO1xuXG4gICAgcmlnaHQgJiYgbGV2ZWxFbGVtZW50cy5yZXZlcnNlKCk7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gbGV2ZWxFbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBlbCA9IGxldmVsRWxlbWVudHNbaV07XG5cbiAgICAgIGlmKGVsID09PSB0aGlzLmVsKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZighc2VsZWN0b3IgfHwgZWwuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBhcnIucHVzaChlbC5fX2FraWxpKVxuICAgICAgfVxuICAgIH1cblxuICAgIGFyci5yZXZlcnNlKCk7XG5cbiAgICBpZighZmluZEFsbCkge1xuICAgICAgcmV0dXJuIGFyci5sZW5ndGg/IGFyclswXTogbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBjb21wb25lbnQgbWF0Y2hlcyBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gc2VsZWN0b3JcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBtYXRjaGVzKHNlbGVjdG9yKSB7XG4gICAgaWYodHlwZW9mIHNlbGVjdG9yID09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBzZWxlY3Rvcih0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5lbC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBwYXJlbnQgY29tcG9uZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgcGFyZW50KHNlbGVjdG9yID0gJycsIGxldmVscykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0UGFyZW50KHNlbGVjdG9yLCBmYWxzZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgcGFyZW50IGNvbXBvbmVudHMgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHNdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIHBhcmVudHMoc2VsZWN0b3IgPSAnJywgbGV2ZWxzKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRQYXJlbnQoc2VsZWN0b3IsIHRydWUsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNsb3Nlc3QgY2hpbGQgY29tcG9uZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgY2hpbGQoc2VsZWN0b3IgPSAnJywgbGV2ZWxzKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRDaGlsZHJlbihzZWxlY3RvciwgZmFsc2UsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFycmF5IG9mIGNoaWxkIGNvbXBvbmVudHMgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHNdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGNoaWxkcmVuKHNlbGVjdG9yID0gJycsIGxldmVscykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0Q2hpbGRyZW4oc2VsZWN0b3IsIHRydWUsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFycmF5IG9mIGNvbXBvbmVudHMgbGVmdCBmcm9tIHRoZSBjdXJyZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGJlZm9yZShzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCB0cnVlLCBmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFycmF5IG9mIGNvbXBvbmVudHMgcmlnaHQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBhZnRlcihzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCB0cnVlLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBjb21wb25lbnQgbGVmdCBmcm9tIHRoZSBjdXJyZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR9XG4gICAqL1xuICBwcmV2KHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIGZhbHNlLCBmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNsb3Nlc3QgY29tcG9uZW50IHJpZ2h0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIG5leHQoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgZmFsc2UsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBlbGVtZW50IHBhcmVudFxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRcbiAgICovXG4gIGFwcGVuZFRvKHBhcmVudCkge1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcblxuICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbmNlbCBjb21wb25lbnQgY29tcGlsYXRpb25cbiAgICovXG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBlbGVtZW50IGh0bWxcbiAgICpcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBlbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2VtcHR5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGVsZW1lbnRcbiAgICpcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICByZW1vdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19kZXN0cm95LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjcmVhdGVkKCkge31cbiAgY29tcGlsZWQoKSB7fVxuICByZWNvbXBpbGVkKCkge31cbiAgY2hhbmdlZChrZXksIHZhbHVlKSB7fVxuICByZXNvbHZlZCgpIHt9XG4gIHJlbW92ZWQoKSB7fVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50LmpzIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXIuanMnXG5cbmNvbnN0IHV0aWxzID0ge307XG5cbi8qKlxuICogQ3JlYXRlIGNsYXNzIGF0dHJpYnV0ZSBmcm9tIGFuIG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwicmVkIGFjdGl2ZVwiXG4gKiB1dGlscy5jbGFzcyh7cmVkOiB0cnVlLCBhY3RpdmU6IHRydWUsIGdyZWVuOiBmYWxzZX0pO1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmNsYXNzID0gZnVuY3Rpb24gKG9iaikge1xuICBpZighb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgbGV0IGNsYXNzZXMgPSBbXTtcblxuICBmb3IobGV0IGsgaW4gb2JqKSB7XG4gICAgaWYoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgbGV0IHZhbCA9IG9ialtrXTtcblxuICAgIHZhbCAmJiBjbGFzc2VzLnB1c2goayk7XG4gIH1cblxuICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBzdHlsZSBhdHRyaWJ1dGUgZnJvbSBhbiBvYmplY3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcImNvbG9yOnJlZDt3aWR0aDoxMHB4XCJcbiAqIHV0aWxzLnN0eWxlKHtjb2xvcjogXCJyZWRcIiwgYmFja2dyb3VuZDogZmFsc2UsIHdpZHRoOiBcIjEwcHhcIn0pO1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnN0eWxlID0gZnVuY3Rpb24ob2JqKSB7XG4gIGlmKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBsZXQgc3R5bGVzID0gW107XG5cbiAgZm9yKGxldCBrIGluIG9iaikge1xuICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGxldCB2YWwgPSBvYmpba107XG5cbiAgICB2YWwgJiYgc3R5bGVzLnB1c2goYCR7dGhpcy50b0Rhc2hDYXNlKGspfToke3ZhbH1gKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZXMuam9pbignOycpO1xufTtcblxuLyoqXG4gKiBGaWx0ZXIgYW4gYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMSwgMTFdXG4gKiB1dGlscy5maWx0ZXIoWzEsIDIsIDMsIDExXSwgJzEnKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6MX0sIHt4OjExfV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6MX0sIHt4OjJ9LCB7eDozfSwge3g6MTF9XSwgJzEnLCBbJ3gnXSk7XG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0ge3N0cmluZ3xSZWdFeHB8ZnVuY3Rpb259IGhhbmRsZXIgLSB0eXBlIG9mIGZpbHRlcmluZ1xuICogQHBhcmFtIHtzdHJpbmdbXXxzdHJpbmd9IFtrZXlzXSAtIGZpbHRlciBpbiB0aGUga2V5cyBpZiBhcnJheSBlbGVtZW50cyBhcmUgb2JqZWN0XG4gKiBAcmV0dXJucyB7QXJyYXl9IC0gcmV0dXJucyBvdGhlciBhcnJheVxuICovXG51dGlscy5maWx0ZXIgPSBmdW5jdGlvbiAoYXJyLCBoYW5kbGVyLCBrZXlzID0gW10pIHtcbiAgbGV0IHJlcyA9IFtdO1xuXG4gIGlmKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAga2V5cyA9IFtrZXlzXTtcbiAgfVxuXG4gIGlmKCFoYW5kbGVyKSB7XG4gICAgcmV0dXJuIFsuLi5hcnJdO1xuICB9XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgaXRlbSA9IGFycltpXTtcbiAgICBsZXQgdmFsID0ga2V5cy5sZW5ndGg/IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgaXRlbSk6IGl0ZW07XG5cbiAgICBpZighdmFsKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YWwgKz0gJyc7XG5cbiAgICBpZigodHlwZW9mIGhhbmRsZXIgPT0gJ2Z1bmN0aW9uJykgJiYgaGFuZGxlcihpdGVtKSkge1xuICAgICAgcmVzLnB1c2goaXRlbSk7XG4gICAgfVxuICAgIGVsc2UgaWYodmFsLm1hdGNoKGhhbmRsZXIgfHwgJycpKSB7XG4gICAgICByZXMucHVzaChpdGVtKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBPcmRlciBhbiBhcnJheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsxLCAyLCAzXVxuICogdXRpbHMuc29ydChbMywgMiwgMV0sIHRydWUpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFszLCAyLCAxXVxuICogdXRpbHMuc29ydChbMSwgMiwgM10sIGZhbHNlKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCBbWyd4J11dLCBbdHJ1ZV0pO1xuICogdXRpbHMuc29ydChbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV0sIFsneCddLCB0cnVlKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCAneCcpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogM30sIHt4OiAyfSwge3g6IDF9XVxuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sIFtbJ3gnXV0sIFtmYWxzZV0pO1xuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sIFsneCddLCBmYWxzZSk7XG4gKiB1dGlscy5zb3J0KFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XSwgJ3gnLCBmYWxzZSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxLCB5OiAzfSwge3g6IDIsIHk6IDF9LCB7eDoyLCB5OiAyfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAyLCB5OiAyfSwge3g6IDIsIHk6IDF9LCB7eDogMiwgeTogM31dLCBbWyd4J10sIFsneSddXSwgW3RydWUsIHRydWVdKTtcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7Ym9vbGVhbnxBcnJheVtdfHN0cmluZ1tdfHN0cmluZ30gW2tleXNdXG4gKiBAcGFyYW0ge2Jvb2xlYW58Ym9vbGVhbltdfSBbb3JkZXJdIC0gcmV2ZXJzZSBvciBub3RcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xudXRpbHMuc29ydCA9IGZ1bmN0aW9uKGFyciwga2V5cyA9IHRydWUsIG9yZGVyID0gW10pIHtcbiAgYXJyID0gWy4uLmFycl07XG5cbiAgaWYoa2V5cyA9PT0gdHJ1ZSkge1xuICAgIGtleXMgPSBbXTtcbiAgICBvcmRlciA9IFt0cnVlXTtcbiAgfVxuICBlbHNlIGlmKGtleXMgPT09IGZhbHNlKSB7XG4gICAga2V5cyA9IFtdO1xuICAgIG9yZGVyID0gW2ZhbHNlXTtcbiAgfVxuXG4gIGlmKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAga2V5cyA9IFtrZXlzXTtcbiAgfVxuXG4gIGlmKCFBcnJheS5pc0FycmF5KG9yZGVyKSkge1xuICAgIG9yZGVyID0gW29yZGVyXTtcbiAgfVxuXG4gIGxldCBsID0ga2V5cy5sZW5ndGg7XG5cbiAgYXJyLnNvcnQoKGEsIGIpID0+IHtcbiAgICBsZXQgaSA9IDA7XG5cbiAgICBsZXQgY2hlY2sgPSAoYSwgYiwgcmV2ZXJzZSA9IGZhbHNlKSA9PiB7XG4gICAgICBpZihhIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBhID0gYS5nZXRUaW1lKCk7XG4gICAgICB9XG5cbiAgICAgIGlmKGIgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIGIgPSBiLmdldFRpbWUoKTtcbiAgICAgIH1cblxuICAgICAgaWYoYSA+IGIpIHtcbiAgICAgICAgcmV0dXJuIHJldmVyc2U/IC0xOiAxO1xuICAgICAgfVxuICAgICAgZWxzZSBpZihhIDwgYikge1xuICAgICAgICByZXR1cm4gcmV2ZXJzZT8gMTogLTE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAwO1xuICAgIH07XG5cbiAgICBsZXQgbmV4dCA9ICgpID0+IHtcbiAgICAgIGlmKGkgPj0gbCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cblxuICAgICAgbGV0IGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmKCFBcnJheS5pc0FycmF5KGtleSkpIHtcbiAgICAgICAga2V5ID0gW2tleV07XG4gICAgICB9XG5cbiAgICAgIGxldCBhViA9IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5LCBhKTtcbiAgICAgIGxldCBiViA9IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5LCBiKTtcbiAgICAgIGxldCByZXMgPSBjaGVjayhhViwgYlYsIG9yZGVyW2ldID09PSBmYWxzZSk7XG5cbiAgICAgIGlmKHJlcyAhPT0gMCkge1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfVxuXG4gICAgICBpKys7XG5cbiAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgfTtcblxuICAgIGlmKCFsKSB7XG4gICAgICByZXR1cm4gY2hlY2soYSwgYiwgb3JkZXJbaV0gPT09IGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dCgpO1xuICB9KTtcblxuICByZXR1cm4gYXJyO1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgdmFsdWUgaXMgY29tcG9uZW50IHNjb3BlIHByb3h5IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaXNTY29wZVByb3h5ID0gZnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiAhISh2YWwgJiYgdHlwZW9mIHZhbCA9PSAnb2JqZWN0JyAmJiB2YWwuX19pc1Byb3h5KTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIHZhbHVlIGlzIHBsYWluIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaXNQbGFpbk9iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuICByZXR1cm4gISEob2JqICYmIHR5cGVvZiBvYmogPT0gJ29iamVjdCcgJiYgKG9iai5jb25zdHJ1Y3RvciA9PSBPYmplY3QgfHwgb2JqLmNvbnN0cnVjdG9yID09IEFycmF5KSk7XG59O1xuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHBhcmFtIHtib29sZWFufSBbbmVzdGVkPXRydWVdIC0gZGVlcCBjb3B5IGlmIGlzIHRydWVcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5jb3B5ID0gZnVuY3Rpb24odmFsdWUsIG5lc3RlZCA9IHRydWUpIHtcbiAgaWYodHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8ICF2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5leHQob2JqKSB7XG4gICAgb2JqID0gQXJyYXkuaXNBcnJheShvYmopPyBbLi4ub2JqXTogey4uLm9ian07XG5cbiAgICBpZighbmVzdGVkKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGZvcihsZXQgayBpbiBvYmopIHtcbiAgICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmKG9ialtrXSAmJiB0eXBlb2Ygb2JqW2tdID09ICdvYmplY3QnKSB7XG4gICAgICAgIG9ialtrXSA9IG5leHQob2JqW2tdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgcmV0dXJuIG5leHQodmFsdWUpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2UgdGhlIHZhbHVlIHRvIGF0dHJpYnV0ZSBhcHByb3ByaWF0ZSBmb3JtYXRcbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgaWYodmFsdWUgPT09IGZhbHNlIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZih2YWx1ZSBpbnN0YW5jZW9mIEV2ZW50RW1pdHRlcikge1xuICAgIHJldHVybiAnW29iamVjdCBFdmVudF0nO1xuICB9XG5cbiAgaWYodHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgfVxuXG4gIGlmKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlICsgJyc7XG59O1xuXG4vKipcbiAqIENvbXBhcmUgdHdvIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7Kn0gYVxuICogQHBhcmFtIHsqfSBiXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuY29tcGFyZSA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gIGlmKChhIGluc3RhbmNlb2YgRGF0ZSkgJiYgKGIgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgIHJldHVybiBhLmdldFRpbWUoKSA9PT0gYi5nZXRUaW1lKCk7XG4gIH1cbiAgaWYodHlwZW9mIGEgPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgYiA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGEudG9TdHJpbmcoKSA9PT0gYi50b1N0cmluZygpO1xuICB9XG4gIGVsc2UgaWYodHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT0gJ29iamVjdCcpIHtcbiAgICBpZihhID09PSBudWxsIHx8IGIgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBhID09PSBiO1xuICAgIH1cblxuICAgIGlmKE9iamVjdC5rZXlzKGEpLmxlbmd0aCAhPSBPYmplY3Qua2V5cyhiKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IobGV0IGsgaW4gYSkge1xuICAgICAgaWYoIWEuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmKCF0aGlzLmNvbXBhcmUoYVtrXSwgYltrXSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGEgPT09IGI7XG59O1xuXG4vKipcbiAqIENvbXBhcmUgY3VycmVudCB2YWx1ZSB3aXRoIHByZXZpb3VzXG4gKlxuICogQHBhcmFtIHsqfSBjdXJyZW50IC0gdGhlIGN1cnJlbnQgdmFsdWVcbiAqIEBwYXJhbSB7Kn0gcHJldmlvdXMgLSB0aGUgY3VycmVudCB2YWx1ZSBjb3B5XG4gKiBAcGFyYW0geyp9IHByZXZpb3VzQ29weSAtIHRoZSBwcmV2aW91cyB2YWx1ZSBjb3B5XG4gKiBAcGFyYW0geyp9IFtjdXJyZW50Q29weV0gLSB0aGUgY3VycmVudCB2YWx1ZSBjb3B5XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuY29tcGFyZVByZXZpb3VzVmFsdWUgPSBmdW5jdGlvbihjdXJyZW50LCBwcmV2aW91cywgcHJldmlvdXNDb3B5LCBjdXJyZW50Q29weSkge1xuICBpZihjdXJyZW50ICE9PSBwcmV2aW91cykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmNvbXBhcmUoYXJndW1lbnRzLmxlbmd0aCA9PSAzPyBjdXJyZW50Q29weTogdGhpcy5jb3B5KGN1cnJlbnQpLCBwcmV2aW91c0NvcHkpO1xufTtcblxuLyoqXG4gKiBFbmNvZGUgaHRtbCBlbnRpdGllc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwieW91ICZhbXAgbWVcIlxuICogdXRpbHMuZW5jb2RlSHRtbEVudGl0aWVzKCd5b3UgJiBtZScpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBodG1sXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5lbmNvZGVIdG1sRW50aXRpZXMgPSBmdW5jdGlvbihodG1sKSB7XG4gIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB2YWx1ZTtcblxuICBlbC50ZXh0Q29udGVudCA9IGh0bWw7XG4gIHZhbHVlID0gZWwuaW5uZXJIVE1MO1xuICBlbC5yZW1vdmUoKTtcbiAgZWwgPSBudWxsO1xuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbi8qKlxuICogRGVjb2RlIGh0bWwgZW50aXRpZXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcInlvdSAmIG1lXCJcbiAqIHV0aWxzLmRlY29kZUh0bWxFbnRpdGllcygneW91ICZhbXAgbWUnKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuZGVjb2RlSHRtbEVudGl0aWVzID0gZnVuY3Rpb24oaHRtbCkge1xuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGxldCB2YWx1ZTtcblxuICBlbC5pbm5lckhUTUwgPSBodG1sO1xuICB2YWx1ZSA9IGVsLnZhbHVlO1xuICBlbC5yZW1vdmUoKTtcbiAgZWwgPSBudWxsO1xuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHN0cmluZyBmcm9tIGRhc2ggdG8gY2FtZWwgY2FzZSBmb3JtYXRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy50b0NhbWVsQ2FzZSA9IGZ1bmN0aW9uKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcVysoLikvZywgKG0sIGMpID0+IGMudG9VcHBlckNhc2UoKSk7XG59O1xuXG4vKipcbiAqIENoYW5nZSBzdHJpbmcgZnJvbSBjYW1lbCB0byBkYXNoIGNhc2UgZm9ybWF0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMudG9EYXNoQ2FzZSA9IGZ1bmN0aW9uKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgKG0sIGMpID0+IGAtJHtjLnRvTG93ZXJDYXNlKCl9YCk7XG59O1xuXG4vKipcbiAqIEdldCBuZXN0ZWQgb2JqZWN0IHByb3BlcnR5IGJ5IGFycmF5IGtleXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyA1XG4gKiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmdldFByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0KSB7XG4gIGxldCBjdXJyZW50O1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZShmdW5jdGlvbihvLCBrKSB7XG4gICAgaSsrO1xuXG4gICAgaWYodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBvO1xuICAgIH1cblxuICAgIGlmKG9ba10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIChpID09IGxlbmd0aCkgJiYgKGN1cnJlbnQgPSBvW2tdKTtcbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gY3VycmVudDtcbn07XG5cbi8qKlxuICogQ2hlY2sgbmVzdGVkIG9iamVjdHMgdHJlZSBoYXMgcHJvcGVydHkgb3Igbm90XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgdHJ1ZVxuICogdXRpbHMuaGFzUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCkge1xuICBsZXQgaGFzID0gZmFsc2U7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKGZ1bmN0aW9uKG8sIGspIHtcbiAgICBpKys7XG5cbiAgICBpZih0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuICEhbztcbiAgICB9XG5cbiAgICBpZighby5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIChpID09IGxlbmd0aCkgJiYgKGhhcyA9IG8uaGFzT3duUHJvcGVydHkoaykpO1xuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiBoYXM7XG59O1xuXG4vKipcbiAqIFNldCBuZXN0ZWQgb2JqZWN0cyB0cmVlIHByb3BlcnR5XG4gKiBSZXR1cm5zIGNoYW5nZWQgcHJvcGVydHkgb2JqZWN0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMge3k6IDZ9XG4gKiB1dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSwgKGxhc3QsIHZhbCkgPT4gbGFzdD8gNjogKHZhbCB8fCB7fSkpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuc2V0UHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QsIGZuKSB7XG4gIGxldCBjdXJyZW50ID0gdW5kZWZpbmVkO1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZShmdW5jdGlvbihvLCBrKSB7XG4gICAgaSsrO1xuXG4gICAgaWYodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZighby5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgcmV0dXJuIGN1cnJlbnQgPSBvW2tdID0gZm4oaSA9PSBsZW5ndGgpO1xuICAgIH1cblxuICAgIG9ba10gPSBmbihpID09IGxlbmd0aCwgb1trXSk7XG4gICAgY3VycmVudCA9IG87XG5cbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gY3VycmVudDtcbn07XG5cbi8qKlxuICpcbiAqIERlbGV0ZSBwcm9wZXJ0eSBmcm9tIG5lc3RlZCBvYmplY3RzIHRyZWVcbiAqIFJldHVybnMgZGVsZXRlZCBwcm9wZXJ0eSB2YWx1ZVxuICogWW91IGNhbiBjYW5jZWwgZGVsZXRpbmcgaWYgd2lsbCByZXR1cm4gZmFsc2UgaW4gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIDVcbiAqIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19LCB2YWwgPT4gdmFsICE9IDUpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtmbl1cbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCwgZm4pIHtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgdmFsdWU7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZShmdW5jdGlvbihvLCBrKSB7XG4gICAgaSsrO1xuXG4gICAgaWYodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZighby5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGlmKGkgPT0gbGVuZ3RoKSB7XG4gICAgICB2YWx1ZSA9IG9ba107XG5cbiAgICAgIGlmKCFmbiB8fCBmbih2YWx1ZSkpIHtcbiAgICAgICAgZGVsZXRlIG9ba107XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IHRhcmdldCBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5cbnV0aWxzLmdldEVudW1lcmFibGVQcm9wZXJ0eVRhcmdldCA9IGZ1bmN0aW9uKHRhcmdldCwga2V5KSB7XG4gIGxldCBjaGVjayA9IChvYmopID0+IHtcbiAgICBpZihvYmoucHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBsZXQgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcblxuICAgIGlmKCFwcm90bykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoZWNrKHByb3RvKTtcbiAgfTtcblxuICByZXR1cm4gY2hlY2sodGFyZ2V0KTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBvd24gcHJvcGVydHkgdGFyZ2V0IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnV0aWxzLmdldE93blByb3BlcnR5VGFyZ2V0ID0gZnVuY3Rpb24odGFyZ2V0LCBrZXkpIHtcbiAgbGV0IGNoZWNrID0gKG9iaikgPT4ge1xuICAgIGlmKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGxldCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuXG4gICAgaWYoIXByb3RvKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hlY2socHJvdG8pO1xuICB9O1xuXG4gIHJldHVybiBjaGVjayh0YXJnZXQpO1xufTtcblxuLyoqXG4gKiBDbGVhciB2YWx1ZSBwcm94eSBpZiBpdCBleGlzdGVudFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5jbGVhclNjb3BlUHJveHkgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYodHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8ICF2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGxldCBjbGVhciA9IChvYmopID0+IHtcbiAgICBmb3IobGV0IGsgaW4gb2JqKSB7XG4gICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYob2JqW2tdICYmIHR5cGVvZiBvYmpba10gPT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYob2JqW2tdLl9faXNQcm94eSkge1xuICAgICAgICAgIG9ialtrXSA9IG9ialtrXS5fX3RhcmdldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsZWFyKG9ialtrXSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGlmKHZhbHVlLl9faXNQcm94eSkge1xuICAgIHZhbHVlID0gdmFsdWUuX190YXJnZXQ7XG4gIH1cblxuICBjbGVhcih2YWx1ZSk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuXG4vKipcbiAqIEdlbmVyYXRlIHJhbmRvbSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmNyZWF0ZVJhbmRvbVN0cmluZyA9IGZ1bmN0aW9uKGxlbmd0aCA9IDE2LCBmbiA9IG51bGwpIHtcbiAgbGV0IHN0ciA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCBsZW5ndGggKyAyKTtcbiAgbGV0IHZhbCA9ICcnO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBzdHIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYoTWF0aC5yYW5kb20oKSA+IDAuNjYpIHtcbiAgICAgIHZhbCArPSBzdHJbaV0udG9VcHBlckNhc2UoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YWwgKz0gc3RyW2ldO1xuICAgIH1cbiAgfVxuXG4gIGlmKGZuICYmIGZuKHZhbCkpIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVSYW5kb21TdHJpbmcobGVuZ3RoLCBmbik7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXRpbHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzLmpzIiwiaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xuICBjb25zdHJ1Y3RvcihiYXNlVXJsLCBkZWZhdWx0cykge1xuICAgIHRoaXMuYmFzZVVybCA9IGJhc2VVcmw/IChiYXNlVXJsLnJlcGxhY2UoL1xcLyQvLCAnJykgKyAnLycpOiAnJztcblxuICAgIHRoaXMuZGVmYXVsdHMgPSB7XG4gICAgICBzdGF0dXNFcnJvcnNQYXR0ZXJuOiAvXihbXjIzXSl8NDA0LyxcbiAgICAgIC4uLihkZWZhdWx0cyB8fCB7fSlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgcmVxdWVzdCB3aXRoIGFueSBtZXRob2RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBxdWVyeShvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCB1cmw7XG4gICAgICBsZXQgeGhyO1xuXG4gICAgICBvcHRpb25zID0gey4uLnRoaXMuZGVmYXVsdHMsIC4uLihvcHRpb25zIHx8IHt9KX07XG5cbiAgICAgIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgKHR5cGVvZiBvcHRpb25zLm9uU3RhcnQgPT0gJ2Z1bmN0aW9uJykgJiYgb3B0aW9ucy5vblN0YXJ0KHhocik7XG4gICAgICBvcHRpb25zID0gdGhpcy50cmFuc2Zvcm1CZWZvcmUob3B0aW9ucyk7XG4gICAgICB1cmwgPSB0aGlzLmJhc2VVcmw/IGAke3RoaXMuYmFzZVVybH0ke29wdGlvbnMudXJsLnJlcGxhY2UoL15cXC8vLCAnJyl9YDogb3B0aW9ucy51cmw7XG4gICAgICB4aHIub3BlbihvcHRpb25zLm1ldGhvZCwgdXJsLCB0cnVlLCBvcHRpb25zLnVzZXIsIG9wdGlvbnMucGFzc3dvcmQpO1xuICAgICAgb3B0aW9ucy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzIHx8IHt9O1xuXG4gICAgICBpZihvcHRpb25zLmpzb24pIHtcbiAgICAgICAgb3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5qc29uKTtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzWydjb250ZW50LXR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgb3B0aW9ucy5yZXNwb25zZVR5cGUgPSBvcHRpb25zLnJlc3BvbnNlVHlwZSB8fCAnanNvbic7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKG9wdGlvbnMuZm9ybSkge1xuICAgICAgICBvcHRpb25zLmJvZHkgPSB0aGlzLmNyZWF0ZUZvcm1EYXRhKG9wdGlvbnMuZm9ybSk7XG4gICAgICAgIG9wdGlvbnMuaGVhZGVyc1snY29udGVudC10eXBlJ10gPSAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc7XG4gICAgICB9XG5cbiAgICAgIGlmKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ3RpbWVvdXQnKSkge1xuICAgICAgICB4aHIudGltZW91dCA9IG9wdGlvbnMudGltZW91dDtcbiAgICAgIH1cblxuICAgICAgaWYob3B0aW9ucy5yZXNwb25zZVR5cGUpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlO1xuICAgICAgfVxuXG4gICAgICBpZihvcHRpb25zLndpdGhDcmVkZW50aWFscykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gb3B0aW9ucy53aXRoQ3JlZGVudGlhbHM7XG4gICAgICB9XG5cbiAgICAgIGlmKG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICBmb3IobGV0IGsgaW4gb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgICAgaWYoIW9wdGlvbnMuaGVhZGVycy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaywgb3B0aW9ucy5oZWFkZXJzW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZihvcHRpb25zLnBhcmFtcykge1xuICAgICAgICBsZXQgc3RyID0gdGhpcy5wYXJhbXNUb1F1ZXJ5KG9wdGlvbnMucGFyYW1zKTtcblxuICAgICAgICBpZihzdHIpIHtcbiAgICAgICAgICB1cmwgKz0gXCI/XCIgKyBzdHI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYodHlwZW9mIG9wdGlvbnMub25Qcm9ncmVzcyA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHhoci5vbnByb2dyZXNzID0gKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBvcHRpb25zLm9uUHJvZ3Jlc3MoeGhyKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gdGhpcy50cmFuc2Zvcm1BZnRlcih4aHIpO1xuXG4gICAgICAgIGlmKCh4aHIuc3RhdHVzICsgJycpLm1hdGNoKG9wdGlvbnMuc3RhdHVzRXJyb3JzUGF0dGVybikpIHtcbiAgICAgICAgICBsZXQgZXJyID0gbmV3IEVycm9yKGBSZXF1ZXN0IHRvIFwiJHt1cmx9XCIgcmV0dXJucyBmYWlsdXJlIHN0YXR1cyBjb2RlICR7eGhyLnN0YXR1c31gKTtcblxuICAgICAgICAgIGVyci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuXG4gICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICB9IFxuICAgICAgICBcbiAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub250aW1lb3V0ID0gKCkgPT4ge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKGBSZXF1ZXN0IHRvIFwiJHt1cmx9XCIgdGltZWQgb3V0YCkpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9uZXJyb3IgPSAoZXJyKSA9PiB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfTtcblxuICAgICAgeGhyLnNlbmQob3B0aW9ucy5ib2R5KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IG9iamVjdCB0byBxdWVyeSBzdHJpbmdcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgcGFyYW1zVG9RdWVyeShvYmopIHtcbiAgICBsZXQgc2VwID0gJyYnO1xuICAgIGxldCBlcSA9ICc9JztcblxuICAgIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubWFwKChrKSA9PiB7XG4gICAgICBsZXQga3MgPSBlbmNvZGVVUklDb21wb25lbnQoayk7XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9ialtrXSkpIHtcbiAgICAgICAga3MgPSBlbmNvZGVVUklDb21wb25lbnQoayk7XG5cbiAgICAgICAgcmV0dXJuIG9ialtrXS5tYXAoKHYsIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4ga3MgKyBgWyR7aX1dYCArIGVxICsgZW5jb2RlVVJJQ29tcG9uZW50KHYpO1xuICAgICAgICB9KS5qb2luKHNlcCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKG9ialtrXSAmJiB0eXBlb2Ygb2JqW2tdID09PSAnb2JqZWN0Jykge1xuICAgICAgICBsZXQgb3B0ID0gW107XG5cbiAgICAgICAgT2JqZWN0LmtleXMob2JqW2tdKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgIG9wdC5wdXNoKGtzICsgYFske2tleX1dYCArIGVxICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrXVtrZXldKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBvcHQuam9pbihzZXApO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBrcyArIGVxICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrXSk7XG4gICAgICB9XG4gICAgfSkuam9pbihzZXApO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgcXVlcnkgc3RyaW5nIHRvIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICBwYXJhbXNGcm9tUXVlcnkoc3RyKSB7XG4gICAgbGV0IHF1ZXJ5ID0ge307XG4gICAgbGV0IGFtcHMgPSBzdHIuc3BsaXQoJyYnKTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBhbXBzLmxlbmd0aDsgaSA8bDsgaSsrKSB7XG4gICAgICBsZXQgZXFzID0gIGFtcHNbaV0uc3BsaXQoJz0nKTtcbiAgICAgIGxldCBrZXkgPSBkZWNvZGVVUklDb21wb25lbnQoZXFzWzBdKTtcbiAgICAgIGxldCB2YWwgPSBkZWNvZGVVUklDb21wb25lbnQoZXFzWzFdKTtcblxuICAgICAgaWYoIWtleSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgICBxdWVyeVtrZXldLnB1c2godmFsKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYocXVlcnlba2V5XSkge1xuICAgICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0sIHZhbF07XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcXVlcnlba2V5XSA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIG11bHRpcGFydCBmb3JtIGRhdGEgZnJvbSBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgKiBAcGFyYW0ge0Zvcm1EYXRhfSBbZGF0YV1cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtuYW1lc3BhY2VdXG4gICAqXG4gICAqIEByZXR1cm5zIHtGb3JtRGF0YX1cbiAgICovXG4gIGNyZWF0ZUZvcm1EYXRhKG9iaiwgZGF0YSA9IG51bGwsIG5hbWVzcGFjZSA9ICcnKSB7XG4gICAgbGV0IGZkID0gZGF0YSB8fCBuZXcgRm9ybURhdGEoKTtcblxuICAgIGZvcihsZXQgayBpbiBvYmopIHtcbiAgICAgIGlmKG9iai5oYXNPd25Qcm9wZXJ0eShrKSAmJiBvYmpba10pIHtcbiAgICAgICAgbGV0IGtleSA9IG5hbWVzcGFjZT8gbmFtZXNwYWNlICsgJ1snICsgayArICddJzogaztcblxuICAgICAgICBpZiAob2JqW2tdIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgIGZkLmFwcGVuZChrZXksIG9ialtrXS50b0lTT1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KG9ialtrXSkpIHtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm1EYXRhKG9ialtrXSwgZmQsIGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZmQuYXBwZW5kKGtleSwgb2JqW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gZGF0YSBiZWZvcmUgYSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICB0cmFuc2Zvcm1CZWZvcmUob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBkYXRhIGFmdGVyIGEgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge1hNTEh0dHBSZXF1ZXN0fSB4aHJcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHRyYW5zZm9ybUFmdGVyKHhocikge1xuICAgIHJldHVybiB7XG4gICAgICB4aHI6IHhocixcbiAgICAgIGRhdGE6IHhoci5yZXNwb25zZSxcbiAgICAgIHN0YXR1czogeGhyLnN0YXR1c1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgR0VUIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGdldCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ0dFVCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBERUxFVEUgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZGVsZXRlKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnREVMRVRFJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIFBPU1QgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcG9zdCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ1BPU1QnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgUFVUIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHB1dCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ1BVVCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBQQVRDSCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBwYXRjaCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ1BBVENIJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG59XG5cbmNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCgpO1xuXG5yZXF1ZXN0Ll9faW5zdGFuY2VzID0ge307XG5cbi8qKlxuICogQWRkIG5ldyByZXF1ZXN0IGluc3RhbmNlIHRvIHRoZSBtYWluIHNlcnZpY2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtSZXF1ZXN0fSBpbnN0YW5jZVxuICovXG5yZXF1ZXN0LmFkZEluc3RhbmNlID0gZnVuY3Rpb24obmFtZSwgaW5zdGFuY2UpIHtcbiAgdGhpcy5fX2luc3RhbmNlc1tuYW1lXSA9IGluc3RhbmNlO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgaW5zdGFuY2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5yZXF1ZXN0LnJlbW92ZUluc3RhbmNlID0gZnVuY3Rpb24obmFtZSkge1xuICBkZWxldGUgdGhpcy5fX2luc3RhbmNlc1tuYW1lXTtcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1ZXN0LCAndXNlJywge1xuICBnZXQ6ICgpID0+IHtcbiAgICByZXR1cm4gcmVxdWVzdC5fX2luc3RhbmNlcztcbiAgfVxufSk7XG5cbnJlcXVlc3QuUmVxdWVzdCA9IFJlcXVlc3Q7XG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2aWNlcy9yZXF1ZXN0LmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy52YWx1ZUtleSA9ICd2YWx1ZSc7XG4gIH1cblxuICBjaGFuZ2VkVmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGNoYW5nZWRGb2N1cyh2YWx1ZSkge1xuICAgIHRoaXMuc2V0Rm9jdXModmFsdWUpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgnZm9jdXMnKSAmJiB0aGlzLnNldEZvY3VzKHRoaXMuYXR0cnMuZm9jdXMpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgJiYgdGhpcy5zZXRWYWx1ZSh0aGlzLmF0dHJzLnZhbHVlKTtcbiAgfVxuXG4gIHNldEZvY3VzKHZhbHVlKSB7XG4gICAgdmFsdWU/IHRoaXMuc2V0RWxlbWVudEZvY3VzKCk6IHRoaXMuc2V0RWxlbWVudEJsdXIoKTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgKHRoaXMuZWxbdGhpcy52YWx1ZUtleV0gIT09IHZhbHVlKSAmJiAodGhpcy5lbFt0aGlzLnZhbHVlS2V5XSA9IHZhbHVlID09PSAwPyAnMCc6ICh2YWx1ZSB8fCAnJykpO1xuICB9XG5cbiAgc2V0RWxlbWVudEZvY3VzKCkge1xuICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgfVxuXG4gIHNldEVsZW1lbnRCbHVyKCkge1xuICAgIHRoaXMuZWwuYmx1cigpO1xuICB9XG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tpbl0nO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdmb3InLCBGb3IpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnb2wnLCBGb3IpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndWwnLCBGb3IpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGhlYWQnLCBGb3IpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGJvZHknLCBGb3IpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGZvb3QnLCBGb3IpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndHInLCBMb29wKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2xvb3AnLCBMb29wKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuX19pdGVyYXRvciA9IG51bGw7XG4gICAgdGhpcy5fX2tleSA9IG51bGw7XG4gICAgdGhpcy5fX3ZhbHVlID0gbnVsbDtcbiAgICB0aGlzLl9faW5kZXggPSBudWxsO1xuICAgIHRoaXMuX19jb21wYXJpc29uVmFsdWUgPSBudWxsO1xuICAgIHRoaXMuaXRlcmF0b3JzID0ge307XG4gICAgdGhpcy5pdGVyYXRvclJlZiA9IG51bGw7XG4gICAgdGhpcy5pdGVyYXRvck91dGVySFRNTCA9IG51bGw7XG4gIH1cblxuICBjaGFuZ2VkSW4oZGF0YSkge1xuICAgIHRoaXMuZHJhdyhkYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5jcmVhdGVJdGVyYXRvcigpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5kcmF3KHRoaXMuYXR0cnMuaW4pO1xuICB9XG5cbiAgY3JlYXRlSXRlcmF0b3IoKSB7XG4gICAgbGV0IGVsO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuZWwuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLmVsLmNoaWxkcmVuW2ldO1xuXG4gICAgICBpZihjaGlsZC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpID09ICdsb29wJykge1xuICAgICAgICBlbCA9IGNoaWxkO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBlbCA9IGNoaWxkO1xuICAgIH1cblxuICAgIGlmKCFlbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdcIkZvclwiIGNvbXBvbmVudCBtdXN0IGhhdmUgYXQgbGVhc3Qgb25lIGNoaWxkJylcbiAgICB9XG5cbiAgICBsZXQgY29tcG9uZW50TmFtZSA9IGVsLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50Jyk7XG5cbiAgICBpZihjb21wb25lbnROYW1lICE9ICdsb29wJykge1xuICAgICAgbGV0IGNvbXBvbmVudCA9IEFraWxpLmNvbXBvbmVudChjb21wb25lbnROYW1lIHx8IGVsLnRhZ05hbWUpO1xuXG4gICAgICBpZighY29tcG9uZW50KSB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY29tcG9uZW50JywgJ2xvb3AnKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoIShjb21wb25lbnQucHJvdG90eXBlIGluc3RhbmNlb2YgRm9yKSkge1xuICAgICAgICBsZXQgbWFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xvb3AnKTtcblxuICAgICAgICBtYXNrLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgZWwgPSBtYXNrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaHRtbCA9IGVsLmlubmVySFRNTDtcbiAgICB0aGlzLml0ZXJhdG9yUmVmID0gZWwubmV4dFNpYmxpbmc7XG4gICAgdGhpcy5pdGVyYXRvck91dGVySFRNTCA9IGVsLm91dGVySFRNTDtcbiAgICBlbC5yZW1vdmUoKTtcbiAgfVxuXG4gIGNyZWF0ZUl0ZXJhdG9yRWxlbWVudCgpIHtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXG4gICAgZWwuaW5uZXJIVE1MID0gdGhpcy5pdGVyYXRvck91dGVySFRNTDtcbiAgICBlbCA9IGVsLmNvbnRlbnQuZmlyc3RDaGlsZDtcblxuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIGxvb3Aoa2V5LCB2YWx1ZSwga2V5cywgaW5kZXgpIHtcbiAgICB0aGlzLl9faW5kZXggPSBpbmRleDtcbiAgICB0aGlzLl9fa2V5ID0ga2V5O1xuICAgIHRoaXMuX192YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuX19jb21wYXJpc29uVmFsdWUgPSB1dGlscy5jb3B5KHZhbHVlKTtcblxuICAgIGxldCBoYXNoID0gJyc7XG4gICAgbGV0IGZvdW5kID0gMDtcblxuICAgIGlmKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JyAmJiB2YWx1ZS5fX2hhc2gpIHtcbiAgICAgIGhhc2ggPSB2YWx1ZS5fX2hhc2g7XG4gICAgfVxuXG4gICAgaWYodGhpcy5pdGVyYXRvcnNbaGFzaF0pIHtcbiAgICAgIGtleSA9IGhhc2g7XG4gICAgICBmb3VuZCA9IDI7XG4gICAgfVxuICAgIGVsc2UgaWYodGhpcy5pdGVyYXRvcnNba2V5XSkge1xuICAgICAgZm91bmQgPSAxO1xuICAgIH1cblxuICAgIGlmKGZvdW5kKSB7XG4gICAgICBsZXQgaXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yc1trZXldO1xuXG4gICAgICBpZihmb3VuZCA9PSAyKSB7XG4gICAgICAgIGxldCBjVmFsdWUgPSBpdGVyYXRvci5jb21wYXJzaW9uLnZhbHVlO1xuICAgICAgICBsZXQgY0NvcHkgPSBpdGVyYXRvci5jb21wYXJzaW9uLmNvcHk7XG5cbiAgICAgICAgaWYgKHRoaXMuX19pbmRleCAhPT0gaXRlcmF0b3IuaW5kZXgpIHtcbiAgICAgICAgICBpdGVyYXRvci5zZXRJbmRleCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX19rZXkgIT09IGl0ZXJhdG9yLmtleSkge1xuICAgICAgICAgIGl0ZXJhdG9yLnNldEtleSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF1dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSh2YWx1ZSwgY1ZhbHVlLCBjQ29weSwgdGhpcy5fX2NvbXBhcmlzb25WYWx1ZSkpIHtcbiAgICAgICAgICBpdGVyYXRvci5zZXRWYWx1ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAga2V5c1trZXldID0gaXRlcmF0b3I7XG4gICAgICAgIGRlbGV0ZSB0aGlzLml0ZXJhdG9yc1trZXldO1xuXG4gICAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pdGVyYXRvclJlZiA9IGl0ZXJhdG9yLmVsLm5leHRTaWJsaW5nO1xuICAgICAgaXRlcmF0b3IuX19kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgbGV0IGVsID0gdGhpcy5jcmVhdGVJdGVyYXRvckVsZW1lbnQoKTtcblxuICAgIGVsLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcbiAgICB0aGlzLmVsLmluc2VydEJlZm9yZShlbCwgdGhpcy5pdGVyYXRvclJlZik7XG4gICAgQWtpbGkuY29tcGlsZShlbCk7XG5cbiAgICBpZih2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICAgIGlmKCF2YWx1ZS5fX2hhc2gpIHtcbiAgICAgICAgaGFzaCA9IHV0aWxzLmNyZWF0ZVJhbmRvbVN0cmluZygzMiwgKHN0cikgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLml0ZXJhdG9yc1tzdHJdO1xuICAgICAgICB9KTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsdWUsICdfX2hhc2gnLCB7XG4gICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgICAgdmFsdWU6IGhhc2hcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGtleXNbaGFzaF0gPSB0aGlzLl9faXRlcmF0b3I7XG4gICAgICBkZWxldGUgdGhpcy5pdGVyYXRvcnNbaGFzaF07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYoQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICBsZXQgZVZhbHVlID0gdHlwZW9mIHRoaXMuX192YWx1ZSA9PSAnc3RyaW5nJz8gYFwiJHt0aGlzLl9fdmFsdWV9XCJgOiB0aGlzLl9fdmFsdWU7XG5cbiAgICAgICAgbGV0IGFyZ3MgPSBbXG4gICAgICAgICAgYFwiRm9yXCIgY29tcG9uZW50IGxvb3AgaXRlbXMgc2hvdWxkIGhhdmUgXCJvYmplY3RcIiB0eXBlIGZvciBoaWdoZXIgcGVyZm9ybWFuY2UuYCxcbiAgICAgICAgICBgWW91IGNhbiBjaGFuZ2UgJHtlVmFsdWV9IHRvIHt2YWx1ZTogJHtlVmFsdWV9fSwgZm9yIGV4YW1wbGUuYFxuICAgICAgICBdO1xuXG4gICAgICAgIGNvbnNvbGUud2Fybi5hcHBseShjb25zb2xlLndhcm4sIGFyZ3MpO1xuICAgICAgfVxuXG4gICAgICBrZXlzW2tleV0gPSB0aGlzLl9faXRlcmF0b3I7XG4gICAgICBkZWxldGUgdGhpcy5pdGVyYXRvcnNba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWwuX19ha2lsaTtcbiAgfVxuXG4gIGRyYXcoZGF0YSkge1xuICAgIGlmICh0eXBlb2YgZGF0YSAhPSAnb2JqZWN0JyB8fCBkYXRhID09PSBudWxsKSB7XG4gICAgICBpZihBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgXCJGb3JcIiBjb21wb25lbnQgXCJpblwiIGF0dHJpYnV0ZSB2YWx1ZSB0eXBlIG11c3QgYmUgYW4gb2JqZWN0L2FycmF5YCk7XG4gICAgICAgIGRhdGEgPSBbXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQga2V5cyA9IHt9O1xuICAgIGxldCBpbmRleEtleXMgPSBbXTtcbiAgICBsZXQgbGFzdEVsZW1lbnQgPSBudWxsO1xuICAgIGxldCBsYXN0ID0gdGhpcy5lbC5jaGlsZHJlblt0aGlzLmVsLmNoaWxkcmVuLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYobGFzdCAmJiAhKGxhc3QuX19ha2lsaSBpbnN0YW5jZW9mIExvb3ApKSB7XG4gICAgICBsYXN0RWxlbWVudCA9IGxhc3Q7XG4gICAgfVxuXG4gICAgaWYoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGRhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGluZGV4S2V5cy5wdXNoKHRoaXMubG9vcChpLCBkYXRhW2ldLCBrZXlzLCBpKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IGkgPSAwO1xuXG4gICAgICBmb3IobGV0IGsgaW4gZGF0YSkge1xuICAgICAgICBpZighZGF0YS5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXhLZXlzLnB1c2godGhpcy5sb29wKGssIGRhdGFba10sIGtleXMsIGkpKTtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBpbmRleEtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgaXRlcmF0b3IgPSBpbmRleEtleXNbaV07XG5cbiAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoaXRlcmF0b3IuZWwpO1xuICAgICAgaXRlcmF0b3IuaXRlcmF0ZShpKTtcbiAgICB9XG5cbiAgICBsYXN0RWxlbWVudCAmJiB0aGlzLmVsLmFwcGVuZENoaWxkKGxhc3RFbGVtZW50KTtcblxuICAgIGZvcihsZXQgayBpbiB0aGlzLml0ZXJhdG9ycykge1xuICAgICAgaWYoIXRoaXMuaXRlcmF0b3JzLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLml0ZXJhdG9yc1trXS5fX2Rlc3Ryb3koKTtcbiAgICB9XG5cbiAgICB0aGlzLml0ZXJhdG9ycyA9IGtleXM7XG4gIH1cbn07XG5cbmV4cG9ydCBjbGFzcyBMb29wIGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmZvciA9IG51bGw7XG4gICAgdGhpcy5odG1sID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgdGhpcy5pc0ZvciA9IHRoaXMuZWwuaGFzQXR0cmlidXRlKCdpbicpO1xuXG4gICAgaWYoIXRoaXMuaXNGb3IgJiYgISh0aGlzLmVsLnBhcmVudE5vZGUuX19ha2lsaSBpbnN0YW5jZW9mIEZvcikpIHtcbiAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19pdGVyYXRvciA9IHRoaXM7XG4gICAgdGhpcy5mb3IgPSB0aGlzLl9fcGFyZW50Ll9fYWtpbGk7XG4gICAgdGhpcy5zZXRJbmRleCgpO1xuICAgIHRoaXMuc2V0S2V5KCk7XG4gICAgdGhpcy5zZXRWYWx1ZSgpO1xuXG4gICAgdGhpcy5pc0ZvciAmJiBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmlzRm9yICYmIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBzZXRJbmRleCgpIHtcbiAgICB0aGlzLmluZGV4ID0gdGhpcy5mb3IuX19pbmRleDtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wSW5kZXgnLCB0aGlzLmluZGV4KTtcbiAgfVxuXG4gIHNldEtleSgpIHtcbiAgICB0aGlzLmtleSA9IHRoaXMuZm9yLl9fa2V5O1xuICAgIHRoaXMuc2NvcGUuX19zZXQoJ2xvb3BLZXknLCB0aGlzLmtleSk7XG4gIH1cblxuICBzZXRWYWx1ZSgpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3IuX192YWx1ZTtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wVmFsdWUnLCB0aGlzLnZhbHVlLCB0cnVlKTtcblxuICAgIHRoaXMuY29tcGFyc2lvbiA9IHtcbiAgICAgIGNvcHk6IHRoaXMuZm9yLl9fY29tcGFyaXNvblZhbHVlLFxuICAgICAgdmFsdWU6IHRoaXMuZm9yLl9fdmFsdWVcbiAgICB9XG4gIH1cblxuICBpdGVyYXRlKGluZGV4KSB7fVxufVxuXG5Gb3IuTG9vcCA9IExvb3A7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9mb3IuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JvdXRlJywgUm91dGUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1RyYW5zaXRpb259IHRyYW5zaXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBzZXRUcmFuc2l0aW9uKHRyYW5zaXRpb24pIHtcbiAgICBsZXQgc3RhdGUgPSB0cmFuc2l0aW9uLnBhdGguc3RhdGU7XG4gICAgbGV0IHBhcmFtcyA9IHRyYW5zaXRpb24ucGF0aC5wYXJhbXM7XG4gICAgbGV0IHVybCA9IHRyYW5zaXRpb24udXJsO1xuICAgIGxldCBxdWVyeSA9IHRyYW5zaXRpb24ucXVlcnk7XG4gICAgbGV0IHAgPSBQcm9taXNlLnJlc29sdmUoKTtcblxuICAgIGZ1bmN0aW9uIGdldFBhcmVudFNjb3BlVHJhbnNpdGlvbihwYXRoKSB7XG4gICAgICBpZihwYXRoLnBhcmVudCkge1xuICAgICAgICBpZiAocGF0aC5wYXJlbnQuY29tcG9uZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHBhdGgucGFyZW50LmNvbXBvbmVudC5fX3Njb3BlLl9fdHJhbnNpdGlvbi5wYXRoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldFBhcmVudFNjb3BlVHJhbnNpdGlvbihwYXRoLnBhcmVudCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHRoaXMuX19zY29wZS5fX3RyYW5zaXRpb24gPSB7XG4gICAgICBwYXRoOiB7XG4gICAgICAgIHN0YXRlOiBzdGF0ZS5uYW1lLFxuICAgICAgICBkYXRhOiB0cmFuc2l0aW9uLnBhdGguZGF0YSxcbiAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgIHBhcmVudDogZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uKHRyYW5zaXRpb24ucGF0aClcbiAgICAgIH0sXG4gICAgICBwYXJhbXM6IHRyYW5zaXRpb24ucGFyYW1zLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBxdWVyeTogcXVlcnlcbiAgICB9O1xuXG4gICAgaWYgKHN0YXRlLnRlbXBsYXRlKSB7XG4gICAgICB0aGlzLmVtcHR5KCk7XG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9IGA8Y29tcG9uZW50PiR7c3RhdGUudGVtcGxhdGV9PC9jb21wb25lbnQ+YDtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUudGVtcGxhdGVVcmwpIHtcbiAgICAgIHAgPSByZXF1ZXN0LmdldChzdGF0ZS50ZW1wbGF0ZVVybCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHRoaXMuZW1wdHkoKTtcbiAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBgPGNvbXBvbmVudD4ke3Jlcy5kYXRhfTwvY29tcG9uZW50PmA7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcC50aGVuKCgpID0+IHtcbiAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgIH0pO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3JvdXRlLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZWwsIGNvbXBvbmVudCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbCA9IGVsO1xuICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgdGhlIGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSAtIHNlbmRpbmcgZGF0YS4gV2lsbCBiZSBpbiB0aGUgZXZlbnQuZGV0YWlsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdXG4gICAqL1xuICB0cmlnZ2VyKGRhdGEsIG9wdGlvbnMgPSB7IGJ1YmJsZXM6IGZhbHNlIH0sIGZvcmNlID0gZmFsc2UpIHtcbiAgICBpZihmb3JjZSB8fCAhdGhpcy5pbkV2YWx1YXRpbmcoKSkge1xuICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCh0aGlzLm5hbWUsIHtkZXRhaWw6IGRhdGEsIC4uLm9wdGlvbnN9KSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoIHRoZSBldmVudFxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBfRXZlbnQgLSBjbGFzcyBvZiB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZV1cbiAgICovXG4gIGRpc3BhdGNoKF9FdmVudCwgb3B0aW9ucyA9IHsgYnViYmxlczogZmFsc2UgfSwgZm9yY2UgPSBmYWxzZSkge1xuICAgIGlmKGZvcmNlIHx8ICF0aGlzLmluRXZhbHVhdGluZygpKSB7XG4gICAgICB0aGlzLmVsLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudCh0aGlzLm5hbWUsIG9wdGlvbnMpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgZXZlbnQgY2FsbGJhY2sgZG9lc24ndCBydW4gcmVjdXJzaXZlXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaW5FdmFsdWF0aW5nKCkge1xuICAgIGxldCBkYXRhID0gdGhpcy5jb21wb25lbnQuX19ldmFsdWF0aW5nRXZlbnQ7XG5cbiAgICBpZighZGF0YSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhLmVsID09PSB0aGlzLmVsICYmIGRhdGEuZXZlbnQudHlwZSA9PT0gdGhpcy5uYW1lICYmIGRhdGEuY29tcG9uZW50ID09PSB0aGlzLmNvbXBvbmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIHRoZSBmdW5jdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICAgKi9cbiAgYmluZChmbikge1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMuZm4gPSBmbik7XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIHRoZSBmdW5jdGlvblxuICAgKi9cbiAgdW5iaW5kKCkge1xuICAgIHRoaXMuZm4gJiYgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubmFtZSwgdGhpcy5mbik7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vcmVxdWVzdC5qcyc7XG5pbXBvcnQgUm91dGUgZnJvbSAnLi4vY29tcG9uZW50cy9yb3V0ZS5qcyc7XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2l0aW9uIHtcbiAgY29uc3RydWN0b3IodXJsLCBxdWVyeSwgaGFzaCA9ICcnLCBwcmV2aW91cyA9IG51bGwpIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgdGhpcy5oYXNoID0gaGFzaDtcbiAgICB0aGlzLnByZXZpb3VzID0gcHJldmlvdXM7XG4gICAgdGhpcy5wYXRoID0gbnVsbDtcbiAgICB0aGlzLnJvdXRlcyA9IFtdO1xuICAgIHRoaXMuc3RhdGVzID0gW107XG4gICAgdGhpcy5wYXJhbXMgPSB7fTtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gZmFsc2U7XG4gIH1cblxuICByZWRpcmVjdCgpIHtcbiAgICB0aGlzLmNhbmNlbCgpO1xuICAgIHJvdXRlci5zdGF0ZS5hcHBseShyb3V0ZXIsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBzZXRQYXRoKHBhdGgpIHtcbiAgICBwYXRoLnBhcmVudCA9IHRoaXMucGF0aCB8fCBudWxsO1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgdGhpcy5yb3V0ZXMucHVzaChwYXRoKTtcbiAgICB0aGlzLnN0YXRlcy5wdXNoKHBhdGguc3RhdGUpO1xuICAgIHRoaXMucGFyYW1zID0gIXBhdGgucGFyZW50PyBwYXRoLnBhcmFtczogey4uLnBhdGgucGFyZW50LnBhcmFtcywgLi4ucGF0aC5wYXJhbXN9O1xuICB9XG5cbiAgZ2V0Um91dGUoc3RhdGUpIHtcbiAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5yb3V0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcm91dGUgPSB0aGlzLnJvdXRlc1tpXTtcblxuICAgICAgaWYocm91dGUuc3RhdGUgPT09IHN0YXRlKSB7XG4gICAgICAgIHJldHVybiByb3V0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGhhc1N0YXRlKHN0YXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVzLmluZGV4T2Yoc3RhdGUpICE9IC0xO1xuICB9XG5cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSB0cnVlO1xuICB9XG59XG5cbmNvbnN0IHJvdXRlciA9IHt9O1xuXG5yb3V0ZXIuYmFzZVVybCA9IFwiL1wiO1xucm91dGVyLnN0YXRlcyA9IFtdO1xucm91dGVyLmhhc2hNb2RlID0gdHJ1ZTtcbnJvdXRlci5fX3JlZGlyZWN0cyA9IDA7XG5yb3V0ZXIuX19pbml0ID0gZmFsc2U7XG5yb3V0ZXIuX19vcHRpb25zID0ge307XG5yb3V0ZXIuX19wYXJhbVJlZ2V4ID0gLyg6KFtcXHdcXGQtXSspKS9nO1xucm91dGVyLl9fcm91dGVTZWxlY3RvciA9IGMgPT4gYyBpbnN0YW5jZW9mIFJvdXRlO1xuXG4vKipcbiAqIEFkZCBuZXcgc3RhdGUgdG8gdGhlIHJvdXRlclxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc3RhdGUgbmFtZS4gVG8gc2V0IHBhcmVudHMgeW91IGNhbiB1c2UgZG90LCBlLmcuICdhcHAuYXJ0aWNsZS5lZGl0J1xuICogQHBhcmFtIHtzdHJpbmd9IHBhdHRlcm4gLSB1cmwgcGF0dGVybiBsaWtlICdhcHAvYXJ0aWNsZS86aWQnXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7cm91dGVyfVxuICovXG5yb3V0ZXIuYWRkID0gZnVuY3Rpb24gKG5hbWUsIHBhdHRlcm4sIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgdGVtcGxhdGU6ICcnLFxuICAgIHRlbXBsYXRlVXJsOiAnJyxcbiAgICBhYnN0cmFjdDogZmFsc2UsXG4gICAgaGFuZGxlcjogKHRyYW5zaXRpb24pID0+IHt9XG4gIH07XG5cbiAgaWYoIW9wdGlvbnMudGVtcGxhdGUgJiYgIW9wdGlvbnMudGVtcGxhdGVVcmwpIHtcbiAgICBvcHRpb25zLmFic3RyYWN0ID0gdHJ1ZTtcbiAgfVxuXG4gIGlmKHRoaXMuaGFzKG5hbWUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgXCIke25hbWV9XCIgaXMgYWxyZWFkeSBleGlzdHNgKVxuICB9XG5cbiAgdGhpcy5zZXRTdGF0ZShuYW1lLCBwYXR0ZXJuLCB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnN9KTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIHN0YXRlIGZyb20gdGhlIGxpc3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5yb3V0ZXIucmVtb3ZlID0gZnVuY3Rpb24obmFtZSkge1xuICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYodGhpcy5zdGF0ZXNbaV0ubmFtZSA9PSBuYW1lKSB7XG4gICAgICB0aGlzLnN0YXRlcy5zcGxpY2UoaSwgMSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQ2hlY2sgc3RhdGUgZXhpc3RzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYodGhpcy5zdGF0ZXNbaV0ubmFtZSA9PSBuYW1lKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIENoYW5nZSB0aGUgc3RhdGUgdG8gdGhlIHBhc3NlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc3RhdGUgbmFtZVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIC0gcGFyYW1zIGZvciBzdGF0ZSB7aWQ6IDF9ID0+ICcvYXBwLzppZCcgPT4gJy9hcHAvMSdcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcXVlcnldIC0gcXVlcnkge3g6IDF9ID0+ICcvYXBwLz94PTEnXG4gKiBAcGFyYW0ge3N0cmluZ30gW2hhc2hdXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKi9cbnJvdXRlci5zdGF0ZSA9IGZ1bmN0aW9uIChuYW1lLCBwYXJhbXMgPSB7fSwgcXVlcnkgPSB7fSwgaGFzaCA9ICcnLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZShuYW1lKTtcblxuICBpZiAoIXN0YXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgcm91dGUgc3RhdGUgd2l0aCBuYW1lICR7bmFtZX1gKTtcbiAgfVxuXG4gIGxldCB1cmwgPSB0aGlzLmNyZWF0ZVN0YXRlVXJsKHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoKTtcblxuICBpZighb3B0aW9ucy5yZWxvYWQgJiYgdXJsID09PSB0aGlzLmdldFVybCgpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5fX29wdGlvbnMgPSBvcHRpb25zO1xuICB0aGlzLnNldFVybCh1cmwpO1xufTtcblxuLyoqXG4gKiBHbyBiYWNrXG4gKi9cbnJvdXRlci5iYWNrID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeS5iYWNrLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBHbyB0byBhbnkgd2F5XG4gKi9cbnJvdXRlci5nbyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkuZ28uYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIEdvIGZvcndhcmRcbiAqL1xucm91dGVyLmZvcndhcmQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LmZvcndhcmQuYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIENoYW5nZSBzdGF0ZSBieSB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKi9cbnJvdXRlci5sb2NhdGlvbiA9IGZ1bmN0aW9uKHVybCwgb3B0aW9ucyA9IHsgcmVsb2FkOiBmYWxzZSB9KSB7XG4gIHRoaXMuX19vcHRpb25zID0gb3B0aW9ucztcblxuICBpZih0aGlzLmhhc2hNb2RlKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB1cmw7XG4gIH1cbiAgZWxzZSB7XG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsICcnLCB1cmwpO1xuICB9XG59O1xuXG4vKipcbiAqIFJvdXRlciBpbml0aWFsaXphdGlvbi4gU2hvdWxkIGJlIGNhbGxlZCBiZWZvcmUgQWtpbGkuaW5pdCgpXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFtkZWZhdWx0VXJsXVxuICogQHBhcmFtIHtib29sZWFufSBbaGFzaE1vZGU9dHJ1ZV1cbiAqL1xucm91dGVyLmluaXQgPSBmdW5jdGlvbiAoZGVmYXVsdFVybCA9ICcnLCBoYXNoTW9kZSA9IHRydWUpIHtcbiAgbGV0IG9sZFB1c2hTdGF0ZSA9IHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZTtcblxuICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgcmVzID0gb2xkUHVzaFN0YXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICByb3V0ZXIuY2hhbmdlU3RhdGUoKS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpOztcblxuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgdGhpcy5fX29uU3RhdGVDaGFuZ2VIYW5kbGVyID0gKCkgPT4ge1xuICAgIHRoaXMuY2hhbmdlU3RhdGUoKS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpOztcbiAgfTtcblxuICB0aGlzLmRlZmF1bHRVcmwgPSBkZWZhdWx0VXJsO1xuICB0aGlzLmhhc2hNb2RlID0gaGFzaE1vZGU7XG5cbiAgdGhpcy5zdGF0ZXMuc29ydCgoYSwgYikgPT4ge1xuICAgIGEgPSBhLm5hbWUuc3BsaXQoJy4nKS5sZW5ndGg7XG4gICAgYiA9IGIubmFtZS5zcGxpdCgnLicpLmxlbmd0aDtcblxuICAgIHJldHVybiBhIC0gYjtcbiAgfSk7XG5cbiAgbGV0IHN0YXRlcyA9IHt9O1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZXNbaV07XG4gICAgbGV0IHBhcmVudHMgPSBbXTtcblxuICAgIHN0YXRlc1tzdGF0ZS5uYW1lXSA9IHN0YXRlO1xuICAgIHN0YXRlLmNoaWxkcmVuID0gW107XG4gICAgcGFyZW50cyA9IHN0YXRlLm5hbWUuc3BsaXQoJy4nKTtcbiAgICBwYXJlbnRzLnBvcCgpO1xuICAgIHN0YXRlLmxldmVsID0gc3RhdGUuYWJzdHJhY3Q/IG51bGw6IHBhcmVudHMubGVuZ3RoO1xuXG4gICAgaWYgKHBhcmVudHMubGVuZ3RoKSB7XG4gICAgICBsZXQgcGFyZW50TmFtZSA9IHBhcmVudHMuam9pbignLicpO1xuICAgICAgbGV0IHBhcmVudCA9IHN0YXRlc1twYXJlbnROYW1lXTtcblxuICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgcGFyZW50IHJvdXRlIHN0YXRlIFwiJHtwYXJlbnROYW1lfVwiIGZvciBcIiR7c3RhdGUubmFtZX1cImApXG4gICAgICB9XG5cbiAgICAgIGlmKHN0YXRlLmxldmVsICE9PSBudWxsICYmIHBhcmVudC5hYnN0cmFjdCkge1xuICAgICAgICBzdGF0ZS5sZXZlbC0tO1xuICAgICAgfVxuXG4gICAgICBzdGF0ZS5mdWxsUGF0dGVybiA9IHRoaXMuc3BsaXRTbGFzaGVzKHBhcmVudC5mdWxsUGF0dGVybiArICcvJyArIHN0YXRlLnBhdHRlcm4pO1xuICAgICAgcGFyZW50LmNoaWxkcmVuLnB1c2goc3RhdGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHN0YXRlLmZ1bGxQYXR0ZXJuID0gc3RhdGUucGF0dGVybjtcbiAgICB9XG4gIH1cblxuICBpZighdGhpcy5zdGF0ZXMubGVuZ3RoICYmIEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICBjb25zb2xlLndhcm4oYFlvdSBkaWRuJ3QgYWRkIGFueSByb3V0ZXMgdG8gdGhlIHJvdXRlcmApO1xuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5fX29uU3RhdGVDaGFuZ2VIYW5kbGVyKTtcbiAgdGhpcy5fX2luaXQgPSB0cnVlO1xufTtcblxuLyoqXG4gKiBHZXQgc3RhdGUgYnkgbmFtZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gKi9cbnJvdXRlci5nZXRTdGF0ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZXNbaV07XG5cbiAgICBpZiAoc3RhdGUubmFtZSA9PSBuYW1lKSB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIFNldCBzdGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVyblxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqL1xucm91dGVyLnNldFN0YXRlID0gZnVuY3Rpb24gKG5hbWUsIHBhdHRlcm4sIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgc3RhdGUgPSB7Li4ub3B0aW9ucywgbmFtZSwgcGF0dGVybn07XG5cbiAgcm91dGVyLnN0YXRlcy5wdXNoKHN0YXRlKTtcblxuICByZXR1cm4gc3RhdGU7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBzdGF0ZSBieSBuYW1lXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucm91dGVyLnJlbW92ZVN0YXRlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHRoaXMuc3RhdGVzLnNwbGljZShpLCAxKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBTZXQgdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICovXG5yb3V0ZXIuc2V0VXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB0aGlzLmhhc2hNb2RlPyB0aGlzLnNldEhhc2hVcmwodXJsKTogdGhpcy5zZXRIaXN0b3J5VXJsKHVybCk7XG59O1xuXG4vKipcbiAqIFNldCB1cmwgdXNpbmcgaGlzdG9yeVxuICpcbiAqIEBwYXJhbSB1cmxcbiAqL1xucm91dGVyLnNldEhpc3RvcnlVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCAnJywgdXJsKTtcbn07XG5cbi8qKlxuICogU2V0IHVybCB1c2luZyBoYXNoXG4gKlxuICogQHBhcmFtIHVybFxuICovXG5yb3V0ZXIuc2V0SGFzaFVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIycgKyAodXJsIHx8ICcvJyk7XG59O1xuXG4vKipcbiAqIEdldCB1cmxcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuZ2V0VXJsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5oYXNoTW9kZSA/IHRoaXMuZ2V0SGFzaFVybCgpIDogdGhpcy5nZXRIaXN0b3J5VXJsKCk7XG59O1xuXG4vKipcbiAqIEdldCB1cmwgdXNpbmcgaGlzdG9yeVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRIaXN0b3J5VXJsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArIHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xufTtcblxuLyoqXG4gKiBHZXQgdXJsIHVzaW5nIGhhc2hcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuZ2V0SGFzaFVybCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoL14jLywgJycpO1xufTtcblxuLyoqXG4gKiBHZXQgcXVlcnkgcGFyYW1zXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldFVybFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmhhc2hNb2RlID8gdGhpcy5nZXRIYXNoVXJsUXVlcnkoKSA6IHRoaXMuZ2V0SGlzdG9yeVVybFF1ZXJ5KCk7XG59O1xuXG4vKipcbiAqIEdldCBxdWVyeSBwYXJhbXMgdXNpbmcgaGlzdG9yeVxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRIaXN0b3J5VXJsUXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJlcXVlc3QucGFyYW1zRnJvbVF1ZXJ5KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSk7XG59O1xuXG4vKipcbiAqIEdldCBxdWVyeSBwYXJhbXMgdXNpbmcgaGFzaFxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRIYXNoVXJsUXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJlcXVlc3QucGFyYW1zRnJvbVF1ZXJ5KCh3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnPycpWzFdIHx8ICcnKSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSB1cmwgYnkgZGF0YVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXVxuICogQHBhcmFtIHtvYmplY3R9IFtxdWVyeV1cbiAqIEBwYXJhbSB7c3RyaW5nfSBbaGFzaF1cbiAqL1xucm91dGVyLmNyZWF0ZVN0YXRlVXJsID0gZnVuY3Rpb24gKHN0YXRlLCBwYXJhbXMgPSB7fSwgcXVlcnkgPSB7fSwgaGFzaCA9ICcnKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuXG4gIGxldCB1cmwgPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAobSwgZiwgdikgPT4ge1xuICAgIHJldHVybiBwYXJhbXNbdl0gfHwgJyc7XG4gIH0pO1xuXG4gIHVybCA9IHRoaXMuc3BsaXRTbGFzaGVzKHVybCk7XG5cbiAgaWYoT2JqZWN0LmtleXMocXVlcnkpLmxlbmd0aCkge1xuICAgIHVybCArPSAnPycgKyByZXF1ZXN0LnBhcmFtc1RvUXVlcnkocXVlcnkpO1xuICB9XG5cbiAgaGFzaCA9IChoYXNoIHx8ICcnKS5yZXBsYWNlKCcjJywgJycpO1xuXG4gIGlmKCF0aGlzLmhhc2hNb2RlICYmIGhhc2gpIHtcbiAgICB1cmwgKz0gJyMnICsgaGFzaDtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbGwgdW5uZWNlc3Nhcnkgc2xhc2hlcyBmcm9tIGFuIHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5zcGxpdFNsYXNoZXMgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHJldHVybiB1cmwucmVwbGFjZSgvW1xcL10rL2csICcvJyk7XG59O1xuXG4vKipcbiAqIENsZWFyIGFsbCByb3V0ZXIgZGVwZW5kZW5jaWVzXG4gKi9cbnJvdXRlci5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5fX29uU3RhdGVDaGFuZ2VIYW5kbGVyKTtcbn07XG5cbi8qKlxuICogR2V0IHN0YXRlIHVybCBjb250ZW50XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldFBhdHRlcm5Db250ZW50ID0gZnVuY3Rpb24gKHN0YXRlLCB1cmwpIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG5cbiAgbGV0IGtleXMgPSBbXTtcbiAgbGV0IGkgPSAwO1xuICBsZXQgcGFyYW1zID0ge307XG5cbiAgdXJsID0gdXJsLnNwbGl0KCc/JylbMF07XG4gIHVybCA9IHVybC5zcGxpdCgnIycpWzBdO1xuXG4gIGxldCB1cmxQYXR0ZXJuID0gc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZSh0aGlzLl9fcGFyYW1SZWdleCwgKG0sIGYsIHYpID0+IHtcbiAgICBrZXlzLnB1c2godik7XG5cbiAgICByZXR1cm4gJyhbXlxcXFwvXSopJztcbiAgfSk7XG5cbiAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cCh1cmxQYXR0ZXJuKTtcbiAgbGV0IGlzSW5jbHVkZWQgPSB1cmwubWF0Y2gocmVnZXgpO1xuXG4gIGlmICghaXNJbmNsdWRlZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdXJsLnJlcGxhY2UocmVnZXgsIChtLCB2KSA9PiB7XG4gICAgdiAmJiAocGFyYW1zW2tleXNbaV1dID0gdik7XG4gICAgaSsrO1xuICB9KTtcblxuICByZXR1cm4geyBwYXJhbXMgfTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIHN0YXRlIGlzIGFjdGl2ZSBub3dcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVzXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmlzQWN0aXZlU3RhdGUgPSBmdW5jdGlvbihzdGF0ZSwgaW5jbHVkZXMgPSBmYWxzZSkge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcblxuICBsZXQgdXJsID0gdGhpcy5zcGxpdFNsYXNoZXModGhpcy5nZXRVcmwoKS5zcGxpdCgnPycpWzBdICsgJy8nKTtcbiAgbGV0IHVybFBhdHRlcm4gPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAnKFteXFxcXC9dKiknKTtcbiAgbGV0IHN0ciA9IGluY2x1ZGVzPyB1cmxQYXR0ZXJuOiB0aGlzLnNwbGl0U2xhc2hlcygnXicgKyB1cmxQYXR0ZXJuICsgJ1xcLyQnKTtcbiAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChzdHIpO1xuXG4gIHJldHVybiByZWdleC50ZXN0KHVybCk7XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSBjdXJyZW50IHVybCBpbmNsdWRlcyBhIHN0YXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnJvdXRlci5pbkFjdGl2ZVN0YXRlID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgcmV0dXJuIHJvdXRlci5pc0FjdGl2ZVN0YXRlKHN0YXRlLCB0cnVlKTtcbn07XG5cbi8qKlxuICogR2V0IHJvdXRlIGNvbXBvbmVudCBieSBsZXZlbFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZXZlbFxuICovXG5yb3V0ZXIuZ2V0Um91dGUgPSBmdW5jdGlvbiAobGV2ZWwpIHtcbiAgbGV0IGkgPSAwO1xuXG4gIGxldCBmaW5kID0gKGVsKSA9PiB7XG4gICAgbGV0IHJvdXRlID0gZWwuY2hpbGQodGhpcy5fX3JvdXRlU2VsZWN0b3IpO1xuXG4gICAgaWYgKCFyb3V0ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGkgPT0gbGV2ZWwpIHtcbiAgICAgIHJldHVybiByb3V0ZTtcbiAgICB9XG5cbiAgICBpKys7XG5cbiAgICByZXR1cm4gZmluZChyb3V0ZSk7XG4gIH07XG5cbiAgcmV0dXJuIGZpbmQoQWtpbGkucm9vdCk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgZmlyc3QgbWF0Y2hcbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBhcnJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAqL1xucm91dGVyLmdldEFycmF5UGF0dGVybkNvbnRlbnQgPSBmdW5jdGlvbiAoYXJyLCB1cmwpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gYXJyW2ldO1xuICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRQYXR0ZXJuQ29udGVudChzdGF0ZSwgdXJsKTtcblxuICAgIGlmICghY29udGVudCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtzdGF0ZTogc3RhdGUsIC4uLmNvbnRlbnR9O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIEdldCBzdGF0ZXMgYnkgbGV2ZWxcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbGV2ZWxcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xucm91dGVyLmdldFN0YXRlc0J5TGV2ZWwgPSBmdW5jdGlvbiAobGV2ZWwpIHtcbiAgbGV0IHN0YXRlcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZXNbaV07XG5cbiAgICBpZiAoc3RhdGUubGV2ZWwgPCBsZXZlbCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHN0YXRlLmxldmVsID4gbGV2ZWwpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHN0YXRlcy5wdXNoKHN0YXRlKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZXM7XG59O1xuXG4vKipcbiAqIENoYW5nZSBzdGF0ZVxuICovXG5yb3V0ZXIuY2hhbmdlU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmKHRoaXMuX19kaXNhYmxlQ2hhbmdlKSB7XG4gICAgZGVsZXRlIHRoaXMuX19kaXNhYmxlQ2hhbmdlO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKCk7XG4gIGxldCBoYXNoID0gdGhpcy5oYXNoTW9kZT8gJyc6IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7XG4gIGxldCBxdWVyeSA9IHRoaXMuZ2V0VXJsUXVlcnkoKTtcbiAgbGV0IHByZXZUcmFuc2l0aW9uID0gcm91dGVyLnRyYW5zaXRpb24gfHwgbnVsbDtcbiAgbGV0IHRyYW5zaXRpb24gPSByb3V0ZXIudHJhbnNpdGlvbiA9IG5ldyBUcmFuc2l0aW9uKHVybCwgcXVlcnksIGhhc2gsIHByZXZUcmFuc2l0aW9uKTtcbiAgbGV0IGxldmVsID0gMDtcblxuICBsZXQgbmV4dCA9IChzdGF0ZXMsIG9uRW5kKSA9PiB7XG4gICAgaWYgKCFzdGF0ZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gb25FbmQgJiYgb25FbmQoKTtcbiAgICB9XG5cbiAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0QXJyYXlQYXR0ZXJuQ29udGVudChzdGF0ZXMsIHVybCk7XG5cbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgIHJldHVybiBvbkVuZCAmJiBvbkVuZCgpO1xuICAgIH1cblxuICAgIGxldCBzdGF0ZSA9IGNvbnRlbnQuc3RhdGU7XG4gICAgbGV0IHBhcmFtcyA9IGNvbnRlbnQucGFyYW1zO1xuICAgIGxldCByb3V0ZSA9IHN0YXRlLmFic3RyYWN0PyBudWxsOiB0aGlzLmdldFJvdXRlKHN0YXRlLmxldmVsKTtcblxuICAgIGlmICghcm91dGUgJiYgIXN0YXRlLmFic3RyYWN0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IgKGBOb3QgZm91bmQgcm91dGUgY29tcG9uZW50IGZvciBzdGF0ZSBcIiR7c3RhdGUubmFtZX1cImApO1xuICAgIH1cblxuICAgIHRyYW5zaXRpb24uc2V0UGF0aCh7IHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBjb21wb25lbnQ6IHJvdXRlLCBsb2FkZWQ6IHRydWUgfSk7XG4gICAgbGV2ZWwrKztcblxuICAgIGxldCBoYXNTdGF0ZSA9IHByZXZUcmFuc2l0aW9uICYmIHByZXZUcmFuc2l0aW9uLmhhc1N0YXRlKHN0YXRlKTtcbiAgICBsZXQgaXNEaWZmZXJlbnQgPSB0cnVlO1xuXG4gICAgaWYoaGFzU3RhdGUpIHtcbiAgICAgIGxldCByb3V0ZSA9IHByZXZUcmFuc2l0aW9uLmdldFJvdXRlKHN0YXRlKTtcbiAgICAgIGxldCBwcmV2ID0geyBwYXJhbXM6IHJvdXRlLnBhcmFtcywgcXVlcnk6IHJvdXRlLnF1ZXJ5LCBoYXNoOiByb3V0ZS5oYXNoIH07XG4gICAgICBsZXQgY3VycmVudCA9IHsgcGFyYW1zLCBxdWVyeSwgaGFzaCB9O1xuXG4gICAgICBpc0RpZmZlcmVudCA9ICF1dGlscy5jb21wYXJlKHByZXYsIGN1cnJlbnQpO1xuICAgIH1cblxuICAgIGxldCBpc0hpc3RvcnkgPSB0aGlzLl9fb3B0aW9ucy5yZWxvYWQgPT09IHVuZGVmaW5lZCAmJiAhaXNEaWZmZXJlbnQ7XG4gICAgbGV0IGlzUmVsb2FkID0gdGhpcy5fX29wdGlvbnMucmVsb2FkID09PSBmYWxzZTtcblxuICAgIGlmIChoYXNTdGF0ZSAmJiAoaXNIaXN0b3J5IHx8IGlzUmVsb2FkKSkge1xuICAgICAgdHJhbnNpdGlvbi5wYXRoLmxvYWRlZCA9IGZhbHNlO1xuXG4gICAgICByZXR1cm4gbmV4dChzdGF0ZS5jaGlsZHJlbiwgb25FbmQpO1xuICAgIH1cblxuICAgIFByb21pc2UucmVzb2x2ZShzdGF0ZS5oYW5kbGVyKHRyYW5zaXRpb24pKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAodHJhbnNpdGlvbi5fX2NhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gb25FbmQgJiYgb25FbmQoKTtcbiAgICAgIH1cblxuICAgICAgdHJhbnNpdGlvbi5wYXRoLmRhdGEgPSBkYXRhO1xuXG4gICAgICBpZihzdGF0ZS5hYnN0cmFjdCkge1xuICAgICAgICByZXR1cm4gbmV4dChzdGF0ZS5jaGlsZHJlbiwgb25FbmQpO1xuICAgICAgfVxuXG4gICAgICByb3V0ZS5zZXRUcmFuc2l0aW9uKHRyYW5zaXRpb24pLnRoZW4oKCkgPT4ge1xuICAgICAgICB0cmFuc2l0aW9uLnBhdGgubG9hZGVkID0gdHJ1ZTtcblxuICAgICAgICBuZXh0KHN0YXRlLmNoaWxkcmVuLCBvbkVuZCk7XG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiBvbkVuZCAmJiBvbkVuZChlcnIpKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIG5leHQodGhpcy5nZXRTdGF0ZXNCeUxldmVsKDApLCAoZXJyKSA9PiB7XG4gICAgICBpZihlcnIpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgfVxuXG4gICAgICBpZighdHJhbnNpdGlvbi5yb3V0ZXMubGVuZ3RoKSB7XG4gICAgICAgIGlmKHRoaXMuX19yZWRpcmVjdHMpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihgV3Jvbmcgcm91dGVyIGRlZmF1bHQgdXJsIFwiJHt0aGlzLmRlZmF1bHRVcmx9XCJgKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmRlZmF1bHRVcmwpIHtcbiAgICAgICAgICBpZih0aGlzLmRlZmF1bHRVcmwgPT0gdGhpcy5nZXRVcmwoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYE5vdCBmb3VuZCBhbnkgcm91dGVzYCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuaGFzaE1vZGUgJiYgKHRoaXMuX19kaXNhYmxlQ2hhbmdlID0gdHJ1ZSk7XG4gICAgICAgICAgdGhpcy5zZXRVcmwodGhpcy5kZWZhdWx0VXJsKTtcbiAgICAgICAgICB0aGlzLl9fcmVkaXJlY3RzKys7XG5cbiAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2VTdGF0ZSgpLnRoZW4ocmVzb2x2ZSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYE5vdCBmb3VuZCBhIGRlZmF1bHQgcm91dGUuIFlvdSBjYW4gcGFzcyBpdCBpbiBcInJvdXRlci5pbml0KGRlZmF1bHRVcmwpXCIgZnVuY3Rpb25gKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZighdGhpcy5fX29wdGlvbnMuc2F2ZVNjcm9sbFBvc2l0aW9uICYmICF0cmFuc2l0aW9uLmhhc2gpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgPSAwO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9fb3B0aW9ucyA9IHt9O1xuICAgICAgdGhpcy5fX3JlZGlyZWN0cyA9IDA7XG5cbiAgICAgIGlmKHByZXZUcmFuc2l0aW9uKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IGxldmVsLCBsID0gcHJldlRyYW5zaXRpb24ucm91dGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGxldCByb3V0ZSA9IHByZXZUcmFuc2l0aW9uLnJvdXRlc1tpXTtcbiAgICAgICAgICBcbiAgICAgICAgICByb3V0ZS5jb21wb25lbnQgJiYgcm91dGUuY29tcG9uZW50LmVtcHR5KCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzdGF0ZS1jaGFuZ2UnLCB7XG4gICAgICAgIGRldGFpbDogdHJhbnNpdGlvblxuICAgICAgfSkpO1xuXG4gICAgICByZXNvbHZlKCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxucm91dGVyLlRyYW5zaXRpb24gPSBUcmFuc2l0aW9uO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvcm91dGVyLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuLi9zZXJ2aWNlcy9yb3V0ZXIuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tzdGF0ZV06bm90KFt1cmxdKSxbdXJsXTpub3QoW3N0YXRlXSknO1xuICBzdGF0aWMgY29udHJvbEF0dHJpYnV0ZXMgPSB0cnVlO1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ3JlbG9hZCddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdhJywgQSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnN0YXRlID0gbnVsbDtcbiAgICB0aGlzLnBhcmFtcyA9IHt9O1xuICAgIHRoaXMucXVlcnkgPSB7fTtcbiAgICB0aGlzLmhhc2ggPSAnJztcbiAgICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgICB0aGlzLmlzVXJsID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3VybCcpO1xuICB9XG5cbiAgY2hhbmdlZFVybCh1cmwpIHtcbiAgICB0aGlzLnNldFVybCh1cmwpO1xuICAgIHRoaXMucmVzZXRIcmVmKHVybCk7XG4gIH1cblxuICBjaGFuZ2VkU3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICB0aGlzLnJlc2V0SHJlZigpO1xuICB9XG5cbiAgY2hhbmdlZFBhcmFtcyhwYXJhbXMpIHtcbiAgICB0aGlzLnNldFBhcmFtcyhwYXJhbXMpO1xuICAgIHRoaXMucmVzZXRIcmVmKCk7XG4gIH1cblxuICBjaGFuZ2VkUXVlcnkocXVlcnkpIHtcbiAgICB0aGlzLnNldFF1ZXJ5KHF1ZXJ5KTtcbiAgICB0aGlzLnJlc2V0SHJlZigpO1xuICB9XG5cbiAgY2hhbmdlZEhhc2gocXVlcnkpIHtcbiAgICB0aGlzLnNldEhhc2gocXVlcnkpO1xuICAgIHRoaXMucmVzZXRIcmVmKCk7XG4gIH1cblxuICBjaGFuZ2VkT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgdGhpcy5zZXRRdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIGNoYW5nZWRSZWxvYWQodmFsKSB7XG4gICAgdGhpcy5zZXRSZWxvYWQodmFsKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmKHRoaXMuaXNVcmwpIHtcbiAgICAgICAgcm91dGVyLmxvY2F0aW9uKHRoaXMuYXR0cnMudXJsLCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcm91dGVyLnN0YXRlKHRoaXMuc3RhdGUubmFtZSwgdGhpcy5wYXJhbXMsIHRoaXMucXVlcnksIHRoaXMuaGFzaCwgIHRoaXMub3B0aW9ucyk7XG4gICAgfSk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdzdGF0ZScpICYmIHRoaXMuc2V0U3RhdGUodGhpcy5hdHRycy5zdGF0ZSk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgncGFyYW1zJykgJiYgdGhpcy5zZXRQYXJhbXModGhpcy5hdHRycy5wYXJhbXMpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ3F1ZXJ5JykgJiYgdGhpcy5zZXRRdWVyeSh0aGlzLmF0dHJzLnF1ZXJ5KTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdoYXNoJykgJiYgdGhpcy5zZXRIYXNoKHRoaXMuYXR0cnMuaGFzaCk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgnb3B0aW9ucycpICYmIHRoaXMuc2V0T3B0aW9ucyh0aGlzLmF0dHJzLm9wdGlvbnMpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ3JlbG9hZCcpICYmIHRoaXMuc2V0UmVsb2FkKHRoaXMuYXR0cnMucmVsb2FkKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCd1cmwnKSAmJiB0aGlzLnNldFVybCh0aGlzLmF0dHJzLnVybCk7XG4gICAgdGhpcy5yZXNldEhyZWYodGhpcy51cmwpO1xuICB9XG5cbiAgc2V0VXJsKHVybCkge1xuICAgIHRoaXMudXJsID0gdXJsO1xuICB9XG5cbiAgc2V0U3RhdGUobmFtZSkge1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldFN0YXRlKG5hbWUpO1xuICAgIHRoaXMuc2NvcGUuaXNBY3RpdmVTdGF0ZSA9IHJvdXRlci5pc0FjdGl2ZVN0YXRlKHRoaXMuc3RhdGUpO1xuICAgIHRoaXMuc2NvcGUuaW5BY3RpdmVTdGF0ZSA9IHJvdXRlci5pbkFjdGl2ZVN0YXRlKHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgc2V0UGFyYW1zKHBhcmFtcykge1xuICAgIGlmKHR5cGVvZiBwYXJhbXMgIT0gJ29iamVjdCcgfHwgIXBhcmFtcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgcGFyYW1zIG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gIH1cblxuICBzZXRRdWVyeShxdWVyeSkge1xuICAgIGlmKHR5cGVvZiBxdWVyeSAhPSAnb2JqZWN0JyB8fCAhcXVlcnkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIHF1ZXJ5IG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICB9XG5cbiAgc2V0SGFzaChoYXNoKSB7XG4gICAgaWYodHlwZW9mIGhhc2ggIT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIGhhc2ggbXVzdCBiZSBhIHN0cmluZ2ApO1xuICAgIH1cblxuICAgIHRoaXMuaGFzaCA9IGhhc2g7XG4gIH1cblxuICBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICBpZih0eXBlb2Ygb3B0aW9ucyAhPSAnb2JqZWN0JyB8fCAhb3B0aW9ucykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgb3B0aW9ucyBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBzZXRSZWxvYWQodmFsKSB7XG4gICAgdGhpcy5vcHRpb25zLnJlbG9hZCA9IHZhbDtcbiAgfVxuXG4gIGdldFN0YXRlKG5hbWUpIHtcbiAgICBsZXQgc3RhdGUgPSByb3V0ZXIuZ2V0U3RhdGUobmFtZSk7XG5cbiAgICBpZighc3RhdGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIHJvdXRlciBzdGF0ZSB3aXRoIG5hbWUgXCIke25hbWV9XCJgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICByZXNldEhyZWYodXJsKSB7XG4gICAgaWYodXJsKSB7XG4gICAgICB0aGlzLmF0dHJzLmhyZWYgPSB1cmw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5hdHRycy5ocmVmID0gcm91dGVyLmNyZWF0ZVN0YXRlVXJsKHRoaXMuc3RhdGUsIHRoaXMucGFyYW1zLCB0aGlzLnF1ZXJ5LCB0aGlzLmhhc2gpO1xuICAgIH1cbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9hLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpbyBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2F1ZGlvJywgQXVkaW8pO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2F1ZGlvLmpzIiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnQgZXh0ZW5kcyBUZXh0IHtcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2NvbnRlbnQnLCBDb250ZW50KTtcbiAgICBBa2lsaS5hbGlhcygnW2NvbnRlbnRlZGl0YWJsZV0nLCAnY29udGVudCcpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgaWYodGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ2VkaXRhYmxlJykpIHtcbiAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0aGlzLmVsLmdldEF0dHJpYnV0ZSgnZWRpdGFibGUnKSk7XG4gICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZSgnZWRpdGFibGUnKTtcbiAgICB9XG5cbiAgICBpZihnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpLmRpc3BsYXkgPT0gJ2lubGluZScpIHtcbiAgICAgIHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuXG4gICAgdGhpcy52YWx1ZUtleSA9ICdpbm5lckhUTUwnO1xuICB9XG5cbiAgc2V0RWxlbWVudEZvY3VzKCkge1xuICAgIGxldCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgbGV0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcblxuICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyh0aGlzLmVsKTtcbiAgICByYW5nZS5jb2xsYXBzZShmYWxzZSk7XG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gICAgdGhpcy5lbC5mb2N1cygpO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2NvbnRlbnQuanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtYmVkIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnZW1iZWQnLCBFbWJlZCk7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZW1iZWQuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIElmIGNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyB0cmFuc3BhcmVudCA9IHRydWU7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tpc10nO1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ3JlY3JlYXRlJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2lmJywgSWYpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnZWxzZS1pZicsIEVsc2VJZik7XG4gICAgQWtpbGkuY29tcG9uZW50KCdlbHNlJywgRWxzZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuc3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMucmVjcmVhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ29tcGlsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRpc3BsYXkgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpLmRpc3BsYXk7XG4gIH1cblxuICBjaGFuZ2VkSXModmFsdWUpIHtcbiAgICB0aGlzLnN0YXRlID0gISF2YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKCk7XG4gIH1cblxuICBjaGFuZ2VkUmVjcmVhdGUodmFsdWUpIHtcbiAgICB0aGlzLnNldFJlY3JlYXRpb24odmFsdWUpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgncmVjcmVhdGUnKSAmJiB0aGlzLnNldFJlY3JlYXRpb24odGhpcy5hdHRycy5yZWNyZWF0ZSk7XG4gICAgdGhpcy5zdGF0ZSA9ICEhdGhpcy5hdHRycy5pcztcbiAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSgpXG4gIH1cblxuICBzZXRBY3Rpdml0eShhY3RpdmUpIHtcbiAgICB0aGlzLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgfVxuXG4gIHNldFJlY3JlYXRpb24ocmVjcmVhdGUpIHtcbiAgICB0aGlzLnJlY3JlYXRlID0gcmVjcmVhdGU7XG4gIH1cblxuICBzZXRTdGF0ZSgpIHtcbiAgICBsZXQgcmVzID0gdGhpcy5jb21waWxhdGlvbigpO1xuICAgIGxldCBuZXh0ID0gdGhpcy5lbC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgbGV0IHJlc3VsdDtcblxuICAgIGlmKCFuZXh0IHx8ICFuZXh0Lm1hdGNoZXMoJ2Vsc2UtaWYsZWxzZScpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmV4dC5fX2FraWxpLnNldEFjdGl2aXR5KHRoaXMuYWN0aXZlIHx8IHRoaXMuc3RhdGUpO1xuICAgIG5leHQuX19ha2lsaS5zZXRSZWNyZWF0aW9uKHRoaXMucmVjcmVhdGUpO1xuICAgIHJlc3VsdCA9IG5leHQuX19ha2lsaS5zZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMpLnRoZW4oKCkgPT4ge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBpbGF0aW9uKCkge1xuICAgIGxldCByZXM7XG5cbiAgICBpZih0aGlzLnN0YXRlICYmICF0aGlzLmFjdGl2ZSkge1xuICAgICAgaWYodGhpcy5yZWNyZWF0ZSB8fCAhdGhpcy5pc0NvbXBpbGVkKSB7XG4gICAgICAgIHJlcyA9IHRoaXMuY29tcGlsZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmRpc3BsYXk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYodGhpcy5yZWNyZWF0ZSkge1xuICAgICAgICB0aGlzLl9fZW1wdHkoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoIXRoaXMuaXNDb21waWxlZCkge1xuICAgICAgICByZXMgPSB0aGlzLmNvbXBpbGUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGNvbXBpbGUoKSB7XG4gICAgbGV0IHJlcztcblxuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5odG1sO1xuICAgIHJlcyA9IEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgdGhpcy5pc0NvbXBpbGVkID0gdHJ1ZTtcblxuICAgIHJldHVybiByZXM7XG4gIH1cbn07XG5cbi8qKlxuICogRWxzZUlmIGNvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgRWxzZUlmIGV4dGVuZHMgSWYge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBFbHNlIGNvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgRWxzZSBleHRlbmRzIEVsc2VJZiB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2lzJywgJ3RydWUnKTtcbiAgfVxufVxuXG5JZi5FbHNlSWYgPSBFbHNlSWY7XG5JZi5FbHNlID0gRWxzZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pZi5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWZyYW1lIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaWZyYW1lJywgSWZyYW1lKTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pZnJhbWUuanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaW1nJywgSW1hZ2UpO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2ltYWdlLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmNsdWRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gdHJ1ZTtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW3VybF0nO1xuICBzdGF0aWMgZXZlbnRzID0gWydsb2FkJywgJ2Vycm9yJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2luY2x1ZGUnLCBJbmNsdWRlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgfVxuXG4gIGNoYW5nZWRVcmwodXJsKSB7XG4gICAgdGhpcy5nZXRUZW1wbGF0ZSh1cmwpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGVtcGxhdGUodGhpcy5hdHRycy51cmwpO1xuICB9XG5cbiAgZ2V0VGVtcGxhdGUodXJsKSB7XG4gICAgdGhpcy5jb25uZWN0aW9uICYmIHRoaXMuY29ubmVjdGlvbi5hYm9ydCgpO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KHVybCwge1xuICAgICAgb25TdGFydDogKHhocikgPT4ge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSB4aHI7XG4gICAgICB9XG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgdGhpcy5lbXB0eSgpO1xuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XG4gICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCByZXMuZGF0YSk7XG5cbiAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uTG9hZC50cmlnZ2VyKCk7XG4gICAgICB9KTtcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICB0aGlzLmF0dHJzLm9uRXJyb3IudHJpZ2dlcihlcnIpO1xuICAgIH0pO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2luY2x1ZGUuanMiLCJpbXBvcnQgVGV4dCBmcm9tICcuL3RleHQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBUZXh0IHtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydjaGVja2VkJ107XG4gIHN0YXRpYyBldmVudHMgPSBbJ2NoYW5nZSddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpbnB1dCcsIElucHV0KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXNDaGVja2JveCA9IHRoaXMuZWwudHlwZSA9PSAnY2hlY2tib3gnO1xuICAgIHRoaXMuaXNSYWRpbyA9IHRoaXMuZWwudHlwZSA9PSAncmFkaW8nO1xuICB9XG5cbiAgY2hhbmdlZENoZWNrZWQodmFsdWUpIHtcbiAgICB0aGlzLnNldENoZWNrZWQodmFsdWUpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICAodGhpcy5pc1JhZGlvIHx8IHRoaXMuaXNDaGVja2JveCkgJiYgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0Q2hlY2tlZCh0aGlzLmVsLmNoZWNrZWQsIGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc29sdmVkKCkge1xuICAgICh0aGlzLmlzQ2hlY2tib3ggfHwgdGhpcy5pc1JhZGlvKSAmJiB0aGlzLnNldENoZWNrZWQodGhpcy5hdHRycy5jaGVja2VkKTtcbiAgfVxuXG4gIHNldENoZWNrZWQodmFsdWUsIHRyaWdnZXIgPSB0cnVlKSB7XG4gICAgdmFsdWUgPSAhIXZhbHVlO1xuXG4gICAgaWYodGhpcy5wcmV2Q2hlY2tlZCA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmVsLmNoZWNrZWQgPSB0aGlzLnByZXZDaGVja2VkID0gdmFsdWU7XG4gICAgdHJpZ2dlciAmJiB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgdGhpcy5pc1JhZGlvICYmIHRoaXMuY2hhbmdlUmFkaW8oKTtcbiAgfVxuXG4gIHNldFZhbHVlKCkge1xuICAgIHN1cGVyLnNldFZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5pc1JhZGlvICYmIHRoaXMuYXR0cnMub25DaGFuZ2UuZGlzcGF0Y2goRXZlbnQsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgfVxuXG4gIGNoYW5nZVJhZGlvKCkge1xuICAgIGxldCBuYW1lID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICBsZXQgc2VsZWN0b3IgPSBgaW5wdXRbdHlwZT1yYWRpb11bbmFtZT0nJHtuYW1lfSddOm5vdChbc2NvcGU9JyR7dGhpcy5zY29wZS5fX25hbWV9J10pYDtcbiAgICBsZXQgY2hpbGRyZW4gPSBBa2lsaS5yb290LmNoaWxkcmVuKHNlbGVjdG9yKTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICByYWRpby5zZXRDaGVja2VkKHJhZGlvLmVsLmNoZWNrZWQpO1xuICAgIH1cbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pbnB1dC5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0cyBleHRlbmRzIFVybCB7ICBcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy51cmxBdHRyaWJ1dGUgPSAnZGF0YSc7XG4gIH1cblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnb2JqZWN0JywgT2JqZWN0cyk7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvb2JqZWN0LmpzIiwiaW1wb3J0IEZvciwgeyBMb29wIH0gZnJvbSAnLi9mb3IuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBUaGUgcmFkaW8gZ3JvdXAgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZGlvIGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW25hbWVdJztcbiAgc3RhdGljIGV2ZW50cyA9IFsncmFkaW8nXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgncmFkaW8nLCBSYWRpbyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdyYWRpby1idXR0b24nLCBSYWRpb0J1dHRvbik7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLml0ZXJhYmxlID0gdGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ2luJyk7XG4gIH1cblxuICBjaGFuZ2VkSW4odmFsdWUpIHtcbiAgICBzdXBlci5jaGFuZ2VkSW4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLnNldE5hbWVzKHRoaXMuYXR0cnMubmFtZSk7XG4gIH1cblxuICBjaGFuZ2VkTmFtZShuYW1lKSB7XG4gICAgdGhpcy5zZXROYW1lcyhuYW1lKTtcbiAgfVxuXG4gIGNoYW5nZWRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLml0ZXJhYmxlICYmIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuZ2V0UmFkaW9WYWx1ZSgpO1xuXG4gICAgICAgIGlmKHZhbHVlID09PSB0aGlzLnByZXZWYWx1ZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJldlZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuYXR0cnMub25SYWRpby50cmlnZ2VyKHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzb2x2ZWQoKSB7XG4gICAgdGhpcy5zZXROYW1lcyh0aGlzLmF0dHJzLm5hbWUpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgJiYgdGhpcy5zZXRWYWx1ZSh0aGlzLmF0dHJzLnZhbHVlKTtcbiAgfVxuXG4gIHNldE5hbWVzKG5hbWUpIHtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY2hpbGRyZW5baV0uZWwuc2V0QXR0cmlidXRlKCduYW1lJywgbmFtZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICBpZih2YWx1ZSA9PT0gdGhpcy5wcmV2VmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcHJldiA9IHRoaXMucHJldlZhbHVlO1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oJ2lucHV0W3R5cGU9cmFkaW9dJyk7XG4gICAgbGV0IGlzVHJ1ZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5wcmV2VmFsdWUgPSB2YWx1ZTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuICAgICAgbGV0IGlzU2VsZWN0ZWQgPSByYWRpby5lbC52YWx1ZSA9PT0gdmFsdWU7XG5cbiAgICAgIGlzU2VsZWN0ZWQgJiYgKGlzVHJ1ZSA9IHRydWUpO1xuICAgICAgcmFkaW8uc2V0Q2hlY2tlZChpc1NlbGVjdGVkKTtcbiAgICB9XG5cbiAgICBpZighaXNUcnVlKSB7XG4gICAgICBpZih2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICBpZihwcmV2ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnByZXZWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYXR0cnMub25SYWRpby50cmlnZ2VyKHZhbHVlLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cblxuICBnZXRSYWRpb1ZhbHVlKCkge1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oJ2lucHV0W3R5cGU9cmFkaW9dJyk7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcmFkaW8gPSBjaGlsZHJlbltpXTtcblxuICAgICAgaWYocmFkaW8uZWwuY2hlY2tlZCkge1xuICAgICAgICByZXR1cm4gcmFkaW8uZWwudmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogVGhlIHJhZGlvIGl0ZW0gY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBSYWRpb0J1dHRvbiBleHRlbmRzIExvb3Age1xuICBzdGF0aWMgdGVtcGxhdGUgPSBgPGxhYmVsPjxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIlxcJHt0aGlzLnZhbHVlfVwiLz5cXCR7dGhpcy5fX2NvbnRlbnR9PC9sYWJlbD5gO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxuXG4gIGNoYW5nZWRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0UmFkaW9WYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLnNldFJhZGlvVmFsdWUodGhpcy5hdHRycy52YWx1ZSk7XG4gIH1cblxuICBzZXRSYWRpb1ZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5zY29wZS52YWx1ZSA9IHZhbHVlO1xuICB9XG59XG5cblJhZGlvLlJhZGlvQnV0dG9uID0gUmFkaW9CdXR0b247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvcmFkaW8uanMiLCJpbXBvcnQgRm9yLCB7IExvb3AgfSBmcm9tICcuL2Zvci5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydtdWx0aXBsZSddO1xuICBzdGF0aWMgZXZlbnRzID0gWydjaGFuZ2UnXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnc2VsZWN0JywgU2VsZWN0KTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ29wdGlvbicsIE9wdGlvbik7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLml0ZXJhdG9yVGFnTmFtZSA9ICdvcHRpb24nO1xuICAgIHRoaXMuaXNNdWx0aXBsZSA9IGZhbHNlO1xuICB9XG5cbiAgY2hhbmdlZE11bHRpcGxlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRNdWx0aXBsZSh2YWx1ZSk7XG4gIH1cblxuICBjaGFuZ2VkQ29udGVudCh2YWx1ZSkge1xuICAgIHRoaXMuc2V0Q29udGVudCh2YWx1ZSk7XG4gIH1cblxuICBjaGFuZ2VkSW4odmFsdWUpIHtcbiAgICBzdXBlci5jaGFuZ2VkSW4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLmRyYXdTZWxlY3QoKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmVsLmNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKTtcbiAgICB9KTtcbiAgfVxuICBcbiAgY29tcGlsZWQoKSB7XG4gICAgc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdtdWx0aXBsZScpICYmIHRoaXMuc2V0TXVsdGlwbGUodGhpcy5hdHRycy5tdWx0aXBsZSk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgnY29udGVudCcpICYmIHRoaXMuc2V0Q29udGVudCh0aGlzLmF0dHJzLmNvbnRlbnQpO1xuICAgIHRoaXMuZHJhd1NlbGVjdCgpO1xuICB9XG5cbiAgc2V0TXVsdGlwbGUodmFsdWUpIHtcbiAgICB0aGlzLmlzTXVsdGlwbGUgPSB2YWx1ZTtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUodXRpbHMuY29weSh0aGlzLmVsLmNvbnRlbnQpKSk7XG4gIH1cblxuICBzZXRDb250ZW50KHZhbHVlKSB7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKHZhbHVlKSk7XG4gIH1cblxuICBkcmF3U2VsZWN0KCkge1xuICAgIGxldCBzZWxlY3RlZCA9IFtdO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV0uX19ha2lsaTtcbiAgICAgIGxldCBzZWxlY3Rpb24gPSBvcHRpb24uYXR0cnMuc2VsZWN0ZWQ7XG5cbiAgICAgIGlmKHNlbGVjdGlvbikge1xuICAgICAgICBzZWxlY3RlZC5wdXNoKG9wdGlvbi5lbC52YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbi5lbC5zZWxlY3RlZCA9IHNlbGVjdGlvbjtcbiAgICB9XG5cbiAgICBpZighc2VsZWN0ZWQubGVuZ3RoKSB7XG4gICAgICB0aGlzLnJlZGVmaW5lKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKHNlbGVjdGVkKSk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlSXRlcmF0b3JFbGVtZW50KCkge1xuICAgIGxldCBlbCA9IHN1cGVyLmNyZWF0ZUl0ZXJhdG9yRWxlbWVudCgpO1xuXG4gICAgaWYoIWVsLmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRoaXMuaHRtbC50cmltKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIGluQ29udGVudCh2YWx1ZSkge1xuICAgIGlmKCF0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsLmNvbnRlbnQgPT09IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmVsLmNvbnRlbnQuaW5kZXhPZih2YWx1ZSkgIT0gLTE7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIGlmKCF0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsLnZhbHVlO1xuICAgIH1cblxuICAgIGxldCBjb250ZW50ID0gW107XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXTtcblxuICAgICAgaWYob3B0aW9uLnNlbGVjdGVkKSB7XG4gICAgICAgIGNvbnRlbnQucHVzaChvcHRpb24udmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgZm9ybWF0VmFsdWUodmFsdWUpIHtcbiAgICBpZih0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIGlmKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9ICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKT8gW3ZhbHVlXTogW107XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5sZW5ndGg/IHZhbHVlWzBdOiAnJztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYodHlwZW9mIHZhbHVlID09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmVkZWZpbmUoKSB7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmdldENvbnRlbnQoKSk7XG4gIH1cblxuICBjaGFuZ2VWYWx1ZSh2YWx1ZSkge1xuICAgIGlmKHV0aWxzLmNvbXBhcmUodGhpcy5lbC5jb250ZW50LCB2YWx1ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZihBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdGhpcy5lbC52YWx1ZSA9IHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdO1xuXG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldO1xuXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHZhbHVlLmluZGV4T2Yob3B0aW9uLnZhbHVlKSAhPSAtMTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmVsLnZhbHVlID0gdmFsdWU7XG5cbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gb3B0aW9uLnZhbHVlID09IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZWwuY29udGVudCA9IHZhbHVlO1xuICAgIHRoaXMuYXR0cnMub25DaGFuZ2UuZGlzcGF0Y2goRXZlbnQsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGNsYXNzIE9wdGlvbiBleHRlbmRzIExvb3Age1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ3NlbGVjdGVkJ107XG5cbiAgX19nZXRQYXJzZWRFeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgICByZXR1cm4gdXRpbHMuZGVjb2RlSHRtbEVudGl0aWVzKGV4cHJlc3Npb24pO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjaGFuZ2VkU2VsZWN0ZWQodmFsdWUpIHtcbiAgICB0aGlzLnNldFNlbGVjdGVkKHZhbHVlKTtcbiAgfVxuXG4gIHNldFNlbGVjdGVkKHZhbHVlKSB7XG4gICAgdGhpcy5lbC5zZWxlY3RlZCA9IHZhbHVlO1xuICAgIHRoaXMuZm9yLnJlZGVmaW5lKCk7XG4gIH1cbn1cblxuU2VsZWN0Lk9wdGlvbiA9IE9wdGlvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9zZWxlY3QuanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdXJjZSBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3NvdXJjZScsIFNvdXJjZSk7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvc291cmNlLmpzIiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRhcmVhIGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0ZXh0YXJlYScsIFRleHRhcmVhKTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90ZXh0YXJlYS5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhY2sgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0cmFjaycsIFRyYWNrKTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90cmFjay5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlkZW8gZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd2aWRlbycsIFZpZGVvKTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy92aWRlby5qcyIsImltcG9ydCBBa2lsaSBmcm9tICcuL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcblxuLyoqXG4gKiBTY29wZSBjbGFzcy5cbiAqXG4gKiBBbGwgcHJvcGVydGllcyBzdGFydGluZyB3aXRoIF9fIHdpbGwgbm90IGJlIHdhdGNoaW5nLlxuICogWW91IGNhbiB1c2UgdGhlbSBmb3IgaW50ZXJuYWwgbWFuaXB1bGF0aW9ucy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcGUge1xuICBzdGF0aWMgbmVzdGVkV2F0Y2hpbmc7XG5cbiAgY29uc3RydWN0b3IobmFtZSwgZWwsIGNvbXBvbmVudCkge1xuICAgIHRoaXMuX19uYW1lID0gbmFtZTtcbiAgICB0aGlzLl9fZWwgPSBlbDtcbiAgICB0aGlzLl9fY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIGVsLnNldEF0dHJpYnV0ZSgnc2NvcGUnLCBuYW1lKTtcbiAgfVxuXG4gIGdldCBfX3V0aWxzKCkge1xuICAgIHJldHVybiB1dGlscztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYSBzY29wZSB2YWx1ZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3N0cmljdD1mYWxzZV0gLSB3aXRob3V0IG9iamVjdCBjb3B5aW5nXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0KGtleXMsIHZhbHVlLCBzdHJpY3QgPSBmYWxzZSkge1xuICAgIGlmKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cblxuICAgIEFraWxpLnVuaXNvbGF0ZWQoKCkgPT4ge1xuICAgICAgc3RyaWN0ICYmICh0aGlzLl9fY29tcG9uZW50Ll9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyA9IHRydWUpO1xuICAgICAgdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcywgKGxhc3QsIHZhbCkgPT4ge1xuICAgICAgICBpZighbGFzdCkge1xuICAgICAgICAgIHJldHVybiB2YWwgfHwge307XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHN0cmljdCAmJiAodGhpcy5fX2NvbXBvbmVudC5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgPSBmYWxzZSk7XG4gICAgfSk7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Njb3BlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==