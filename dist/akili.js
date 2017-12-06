/*!
 * Akili is a javascript framework
 * 
 * const Akili = makeItEasy(js + html);
 * 
 * @version 0.3.10
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
Akili.__serverPromise = Promise.resolve();
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
 * Server rendering implementation
 */
Akili.serverRendering = function () {
  var _this7 = this;

  var server = this.__html.getAttribute('akili-server');

  this.__serverRendering = !!server;

  if (server) {
    this.__html.style.visibility = 'hidden';
    this.__serverPromise = _request2.default.get(server).then(function (res) {
      _this7.__html.innerHTML = res.data;
    });
  }
};

/**
 * Initialize the application
 *
 * @param {HTMLElement} [root]
 * @returns {Promise}
 */
Akili.init = function (root) {
  var _this8 = this;

  this.__root = root || document.querySelector("html");

  return this.__serverPromise.then(function () {
    return _this8.compile(_this8.__root).then(function () {
      if (_router2.default.__init) {
        return _router2.default.changeState();
      }
    }).then(function () {
      _this8.triggerInit(true);
    }).catch(function (err) {
      _this8.triggerInit(false);
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


Akili.serverRendering();
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

    this.__isMounted = false;
    this.__isCompiled = false;
    this.__cancelled = false;
    this.__prevent = false;
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
        var evaluation = void 0;
        var existingBindings = {};
        var parseValue = node.__component.__getParsedExpression(d);

        _akili2.default.__evaluation = { node: node, list: [] };

        try {
          evaluate = _this4.constructor.parse(_this4.__evaluationComponent.scope, parseValue);
        } catch (err) {
          throw err;
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
        node[node instanceof window.Attr ? 'value' : 'nodeValue'] = this.__evaluate(node);
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

          if (_this7.__disableProxy) {
            return target[key];
          }

          if (_this7.__isSystemKey(key)) {
            return target[key];
          }

          if (typeof target[key] == 'function') {
            var realTarget = _utils2.default.getOwnPropertyTarget(target, key);

            if (!_utils2.default.isPlainObject(realTarget)) {
              realTarget[key] = _akili2.default.isolateFunction(realTarget[key]);
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
            value = _utils2.default.copy(value);
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
              target = _utils2.default.copy(target, false, true);
              value = target;
            } else if (_akili2.default.joinBindingKeys(parents) != _akili2.default.joinBindingKeys(value.__keys)) {
              target = _utils2.default.copy(target, false, true);
              value = target;
            }
          }
        } else if (!_this8.__disableProxyRedefining && !(value instanceof _akili2.default.Scope)) {
          target = _utils2.default.copy(target, false, true);
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
          return _this8.__observe(target, parents);
        }

        return value;
      };

      var res = observe(value, startKeys || []);

      this.__disableProxy = null;

      return res;
    }

    /**
     * Create isolation object
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

  }, {
    key: '__bindNode',
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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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
 * @example
 * // returns [{x:{y:1}}]
 * utils.filter([{x:{y:1}}, {x:{y:2}}], '1', ['x', 'y']);
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
 * @param {boolean} [enumerable=false] - including enumerable properties
 * @returns {*}
 */
utils.copy = function (value) {
  var nested = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var enumerable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) != 'object' || !value) {
    return value;
  }

  function next(obj) {
    var keys = enumerable ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    var newObj = Array.isArray(obj) ? [] : {};

    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];

      newObj[key] = obj[key];
    }

    obj = newObj;

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
  if (this.isScopeProxy(a) && this.isScopeProxy(b)) {
    return a.__target === b.__target;
  } else if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  } else if (typeof a == 'function' && typeof b == 'function') {
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

      if (!transition.path.loaded) {
        return _akili2.default.compile(this.el, { recompile: true });
      }

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
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
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
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
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

    transition.path.loaded = !(hasState && (isHistory || isReload));

    Promise.resolve(state.handler(transition)).then(function (data) {
      if (transition.__cancelled) {
        return onEnd && onEnd();
      }

      transition.path.data = data;

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
      trigger && this.attrs.onChange.dispatch(Event);
      this.isRadio && this.changeRadio();
    }
  }, {
    key: 'setValue',
    value: function setValue() {
      _get(Input.prototype.__proto__ || Object.getPrototypeOf(Input.prototype), 'setValue', this).apply(this, arguments);
      this.isRadio && this.attrs.onChange.dispatch(Event);
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

      this.attrs.onRadio.trigger(value);
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
      this.attrs.onChange.dispatch(Event);
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2MyM2Q4NzA0ZWUzYWRmMDlmZmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FraWxpLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VybC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnQtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcm91dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2EuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lbWJlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5jbHVkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcmFkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZXh0YXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90cmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWRlby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NvcGUuanMiXSwibmFtZXMiOlsiQWtpbGkiLCJvcHRpb25zIiwibmVzdGVkV2F0Y2hpbmciLCJkZWJ1ZyIsIl9faW5pdCIsIl9fY29tcG9uZW50cyIsIl9fYWxpYXNlcyIsIl9fc2NvcGVzIiwiX193aW5kb3ciLCJfX2lzb2xhdGlvbiIsIl9fZXZhbHVhdGlvbiIsIl9faHRtbCIsIndpbmRvdyIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiX19zZXJ2ZXJQcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJfX3NlcnZlclJlbmRlcmluZyIsImh0bWxCb29sZWFuQXR0cmlidXRlcyIsImNvbXBvbmVudHMiLCJkZWNvcmF0b3JzIiwic2VydmljZXMiLCJqb2luQmluZGluZ0tleXMiLCJrZXlzIiwibWFwIiwiZWwiLCJ0b1N0cmluZyIsImpvaW4iLCJhZGRTY29wZSIsInNjb3BlIiwiX19uYW1lIiwiRXJyb3IiLCJnZXRTY29wZSIsIm5hbWUiLCJyZW1vdmVTY29wZSIsImdldEFraWxpUGFyZW50cyIsInRyZWUiLCJhcnIiLCJjaGVjayIsIm5vZGUiLCJwYXJlbnROb2RlIiwiX19ha2lsaSIsInB1c2giLCJzZXRUZW1wbGF0ZSIsInRlbXBsYXRlIiwicmVwbGFjZSIsImlubmVySFRNTCIsImNyZWF0ZVNjb3BlTmFtZSIsImNyZWF0ZVJhbmRvbVN0cmluZyIsInN0ciIsImlzb2xhdGUiLCJmbiIsInJlcyIsInByb3BzIiwiayIsImhhc093blByb3BlcnR5IiwiaSIsImwiLCJwcm9wIiwiaXNEZWxldGVkIiwiY29tcG9uZW50IiwiX19ldmFsdWF0ZUJ5S2V5cyIsInVuZGVmaW5lZCIsInNldFByb3BlcnR5QnlLZXlzIiwibGFzdCIsInZhbCIsInZhbHVlIiwibGVuZ3RoIiwidW5ldmFsdWF0ZWQiLCJldmFsdWF0aW9uIiwidW5pc29sYXRlZCIsImluaXRpYWxpemUiLCJyZWNvbXBpbGUiLCJfX3JlY29tcGlsZSIsImlzUm9vdCIsIl9fcm9vdCIsImNvbXBvbmVudE5hbWUiLCJ0b0Rhc2hDYXNlIiwiZ2V0QXR0cmlidXRlIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwiX0NvbXBvbmVudCIsIkNIRUNLX0FMSUFTRVMiLCJzZWxlY3RvcnMiLCJPYmplY3QiLCJzZWxlY3RvckFsbCIsIm1hdGNoZXMiLCJzZWxlY3RvciIsIkNvbXBvbmVudCIsIl9fY2FuY2VsbGVkIiwiX19jcmVhdGUiLCJjb21waWxlIiwicm9vdCIsImVsZW1lbnRzIiwibmVzdGVkSW5pdGlhbGl6aW5nIiwiY2hpbGRyZW4iLCJjaGlsZCIsInAiLCJfX2NvbXBpbGUiLCJhbGwiLCJ0aGVuIiwiciIsIl9fcmVzb2x2ZSIsImNvbnNvbGUiLCJ3YXJuIiwidW5yZWdpc3RlckNvbXBvbmVudCIsImFsaWFzIiwidW5yZWdpc3RlckFsaWFzIiwiaXNvbGF0ZUFycmF5UHJvdG90eXBlIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwia2V5Iiwib2xkIiwiX19pc1Byb3h5IiwiYXBwbHkiLCJpc29sYXRlV2luZG93RnVuY3Rpb25zIiwic2V0VGltZW91dCIsInNldEludGVydmFsIiwiY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24iLCJjb25zdHJ1Y3RvciIsImlzb2xhdGVFdmVudHMiLCJFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmUiLCJfX2FraWxpTGlzdGVuZXJzIiwiYXJndW1lbnRzIiwiYXJncyIsInNsaWNlIiwiY2FsbCIsImxpbmsiLCJsaXN0ZW5lciIsInNwbGljZSIsInBvcyIsImNhbGxiYWNrIiwiaXNvbGF0ZUZ1bmN0aW9uIiwiY29udGV4dCIsIm9GbiIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImVycm9ySGFuZGxpbmciLCJ0cmlnZ2VySW5pdCIsInN0YXR1cyIsInN0eWxlIiwidmlzaWJpbGl0eSIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsInNlcnZlclJlbmRlcmluZyIsInNlcnZlciIsImdldCIsImRhdGEiLCJpbml0IiwicXVlcnlTZWxlY3RvciIsImNoYW5nZVN0YXRlIiwiY2F0Y2giLCJlcnIiLCJkZWluaXQiLCJkZWZpbmUiLCJFdmVudEVtaXR0ZXIiLCJTY29wZSIsInV0aWxzIiwiQSIsIkF1ZGlvIiwiQ29udGVudCIsIkZvciIsIkVtYmVkIiwiSWYiLCJJbmNsdWRlIiwiSW5wdXQiLCJJZnJhbWUiLCJJbWFnZSIsIlJhZGlvIiwiUm91dGUiLCJTZWxlY3QiLCJTb3VyY2UiLCJUZXh0IiwiVGV4dGFyZWEiLCJUcmFjayIsIlVybCIsIlZpZGVvIiwicmVxdWVzdCIsInJvdXRlciIsInVybEF0dHJpYnV0ZSIsInVybCIsInNldFVybCIsImF0dHJzIiwiZXZhbHVhdGlvblJlZ2V4IiwiZXZhbHVhdGlvblJlZ2V4R2xvYmFsIiwiUmVnRXhwIiwic291cmNlIiwic3lzdGVtQXR0cmlidXRlcyIsImV4cHJlc3Npb24iLCJldmVudCIsImV2YWwiLCJfX2lzTW91bnRlZCIsIl9faXNDb21waWxlZCIsIl9fcHJldmVudCIsIl9fYmluZGluZ3MiLCJfX2V2YWx1YXRpbmdFdmVudCIsIl9fcmVjb21waWxpbmciLCJfX2NvbXBpbGluZyIsIl9fZGlzYWJsZVByb3h5IiwiX19jaGlsZHJlbiIsIl9fcGFyZW50IiwiX19wYXJlbnRzIiwiX19hdHRycyIsIl9fYXR0cmlidXRlT2YiLCJfX2V2YWx1YXRpb25Db21wb25lbnQiLCJfX3NldEV2ZW50cyIsIl9fc2V0UGFyZW50cyIsIl9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMiLCJfX2RlZmluZUF0dHJpYnV0ZXMiLCJfX2luaXRpYWxpemUiLCJjcmVhdGVkIiwiY29udHJvbCIsIl9fY29udHJvbEF0dHJpYnV0ZXMiLCJfX2V2YWx1YXRlUGFyZW50IiwibmV3UGFyZW50IiwiX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXMiLCJpbnRlcnBvbGF0ZSIsInBhcmVudCIsIm5vZGVUeXBlIiwiX19pbml0aWFsaXplTm9kZSIsIm5vZGVWYWx1ZSIsIl9fZXZhbHVhdGUiLCJjaGlsZE5vZGVzIiwib25Db21waWxlZCIsInRyaWdnZXIiLCJjb21waWxlZCIsInRlbXBsYXRlVXJsIiwiX19jb250ZW50Iiwib25SZWNvbXBpbGVkIiwicmVjb21waWxlZCIsIm9uUmVzb2x2ZWQiLCJyZXNvbHZlZCIsIl9fc2NvcGUiLCJfc2NvcGUiLCJhc3NpZ24iLCJjb250cm9sQXR0cmlidXRlcyIsImV2ZW50cyIsIl9fZXZlbnRzIiwiX19uZXN0ZWRXYXRjaGluZyIsIl9fbmVzdGVkT2JzZXJ2ZSIsIl9fb2JzZXJ2ZSIsImJvb2xlYW5BdHRyaWJ1dGVzIiwiY29uY2F0Iiwic2V0QXR0ciIsImF0dHJpYnV0ZXMiLCJpbmRleE9mIiwibm9kZU5hbWUiLCJoYXNBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJldiIsInRlc3QiLCJwYXJlbnRzIiwiZXZhbHVhdGVQYXJlbnQiLCJ0cmFuc3BhcmVudCIsIl9fZGV0YWNoIiwiX19hZGRDaGlsZCIsInNldFByb3RvdHlwZU9mIiwiX19wcm9wZXJ0aWVzIiwiZ2V0UHJvcGVydHlCeUtleXMiLCJjb21wYXJlUHJldmlvdXNWYWx1ZSIsImNvcHkiLCJfX2dldE5vZGVQcm9wZXJ0eSIsImNvdW50ZXIiLCJhdHRyaWJ1dGVWYWx1ZSIsIl9fY29tcG9uZW50IiwiY29tIiwiX19leHByZXNzaW9uIiwiQXR0ciIsIm0iLCJkIiwiZXZhbHVhdGUiLCJleGlzdGluZ0JpbmRpbmdzIiwicGFyc2VWYWx1ZSIsIl9fZ2V0UGFyc2VkRXhwcmVzc2lvbiIsImxpc3QiLCJwYXJzZSIsImhhc2giLCJrZXlzU3RyaW5nIiwibm90QmluZGluZyIsInBhcmVudFZhbHVlIiwiZXZhbENvbXBvbmVudCIsImlzU2NvcGVQcm94eSIsImJpbmQiLCJfX2dldEJvdW5kTm9kZSIsIl9fYmluZCIsIl9fc2V0Tm9kZVByb3BlcnR5IiwibWFrZUF0dHJpYnV0ZVZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsImUiLCJpc0Jvb2xlYW5BdHRyaWJ1dGUiLCJfX2hhc0JpbmRpbmdzIiwiY2xlYXJBdHRyaWJ1dGUiLCJfX2F0dHJpYnV0ZU9uIiwiX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyIiwidG9DYW1lbENhc2UiLCJvbkNoYW5nZWQiLCJjaGFuZ2VkIiwiY2FtZWxLZXkiLCJ0b1VwcGVyQ2FzZSIsImZuTmFtZSIsImV2Rm5OYW1lIiwiZWxlbWVudCIsIl9fZWxlbWVudCIsImF0dHIiLCJ3aXRob3V0UGFyZW50cyIsImxhc3RQcm9wcyIsInByb3BzTGVuZ3RoIiwiZWxFdmFsdWF0ZSIsIl9fZ2V0QmluZCIsIl9fZGF0YSIsImMiLCJfX2NoZWNrTm9kZVByb3BlcnR5Q2hhbmdpbmciLCJfX2V2YWx1YXRlTm9kZSIsIl9rIiwiX3Byb3AiLCJ1bmJpbmQiLCJvYmoiLCJfa2V5cyIsIl9fa2V5cyIsIl9pc0RlbGV0ZWQiLCJoYXNLZXkiLCJzaGlmdCIsImhhc1Byb3BlcnR5QnlLZXlzIiwiX19ldmFsdWF0ZU5lc3RlZCIsIl9fdW5iaW5kIiwiZGVsZXRlUHJvcGVydHlCeUtleXMiLCJleGVjIiwiX19jaGVja0V2YWx1YXRpb24iLCJhdHRyaWJ1dGVPZiIsImV2ZW50TmFtZSIsIl9fZXZlbnQiLCJlbWl0dGVyIiwiX19ldmFsdWF0ZUV2ZW50IiwiX19pbml0aWFsaXplZCIsIl9faW5pdGlhbGl6ZUF0dHJpYnV0ZSIsImNoYW5nZUF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZU5vZGUiLCJfX3VuYmluZEJ5Tm9kZXMiLCJQcm94eSIsInRhcmdldCIsInNldCIsImF0dHJLZXkiLCJkZWxldGVQcm9wZXJ0eSIsIl9faXNTeXN0ZW1LZXkiLCJyZWFsVGFyZ2V0IiwiZ2V0T3duUHJvcGVydHlUYXJnZXQiLCJpc1BsYWluT2JqZWN0IiwiZ2V0RW51bWVyYWJsZVByb3BlcnR5VGFyZ2V0IiwiX19iaW5kTm9kZSIsIl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0Iiwic3RhcnRLZXlzIiwib2JzZXJ2ZSIsIl9fdGFyZ2V0IiwiX19kaXNhYmxlUHJveHlSZWRlZmluaW5nIiwiaXNvbGF0aW9uS2V5IiwicGFyZW50S2V5c1N0cmluZyIsIl9fZGVsZXRlTm9kZVByb3BlcnR5Iiwibm9kZXMiLCJfX2NsZWFyRW1wdHlCaW5kaW5ncyIsImNsZWFyIiwiX19yZW1vdmUiLCJvblJlbW92ZWQiLCJyZW1vdmVkIiwiX19zcGxpY2VDaGlsZCIsIl9fcmVtb3ZlQ2hpbGRyZW4iLCJmaW5kIiwiZmluZEFsbCIsImxldmVscyIsImxldmVsIiwicmlnaHQiLCJsZXZlbEVsZW1lbnRzIiwicmV2ZXJzZSIsIl9fZ2V0UGFyZW50IiwiX19nZXRDaGlsZHJlbiIsIl9fZ2V0TmVhciIsImFwcGVuZENoaWxkIiwiX19lbXB0eSIsIl9fZGVzdHJveSIsImNsYXNzIiwiY2xhc3NlcyIsInN0eWxlcyIsImZpbHRlciIsImhhbmRsZXIiLCJpc0FycmF5IiwiaXRlbSIsIm1hdGNoIiwic29ydCIsIm9yZGVyIiwiYSIsImIiLCJEYXRlIiwiZ2V0VGltZSIsIm5leHQiLCJhViIsImJWIiwibmVzdGVkIiwibmV3T2JqIiwiY29tcGFyZSIsImN1cnJlbnQiLCJwcmV2aW91cyIsInByZXZpb3VzQ29weSIsImN1cnJlbnRDb3B5IiwiZW5jb2RlSHRtbEVudGl0aWVzIiwiaHRtbCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlY29kZUh0bWxFbnRpdGllcyIsIm9iamVjdCIsInJlZHVjZSIsIm8iLCJoYXMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsInByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJjbGVhclNjb3BlUHJveHkiLCJNYXRoIiwicmFuZG9tIiwic3Vic3RyaW5nIiwiUmVxdWVzdCIsImJhc2VVcmwiLCJkZWZhdWx0cyIsInN0YXR1c0Vycm9yc1BhdHRlcm4iLCJyZWplY3QiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9uU3RhcnQiLCJ0cmFuc2Zvcm1CZWZvcmUiLCJvcGVuIiwibWV0aG9kIiwidXNlciIsInBhc3N3b3JkIiwiaGVhZGVycyIsImpzb24iLCJib2R5IiwicmVzcG9uc2VUeXBlIiwiZm9ybSIsImNyZWF0ZUZvcm1EYXRhIiwidGltZW91dCIsIndpdGhDcmVkZW50aWFscyIsInNldFJlcXVlc3RIZWFkZXIiLCJwYXJhbXMiLCJwYXJhbXNUb1F1ZXJ5Iiwib25Qcm9ncmVzcyIsIm9ucHJvZ3Jlc3MiLCJvbmxvYWQiLCJyZXNwb25zZSIsInRyYW5zZm9ybUFmdGVyIiwib250aW1lb3V0Iiwib25lcnJvciIsInNlbmQiLCJzZXAiLCJlcSIsImtzIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidiIsIm9wdCIsInF1ZXJ5IiwiYW1wcyIsInNwbGl0IiwiZXFzIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwibmFtZXNwYWNlIiwiZmQiLCJGb3JtRGF0YSIsImFwcGVuZCIsInRvSVNPU3RyaW5nIiwiX19pbnN0YW5jZXMiLCJhZGRJbnN0YW5jZSIsImluc3RhbmNlIiwicmVtb3ZlSW5zdGFuY2UiLCJ2YWx1ZUtleSIsInNldFZhbHVlIiwic2V0Rm9jdXMiLCJmb2N1cyIsInNldEVsZW1lbnRGb2N1cyIsInNldEVsZW1lbnRCbHVyIiwiYmx1ciIsIkxvb3AiLCJfX2l0ZXJhdG9yIiwiX19rZXkiLCJfX3ZhbHVlIiwiX19pbmRleCIsIl9fY29tcGFyaXNvblZhbHVlIiwiaXRlcmF0b3JzIiwiaXRlcmF0b3JSZWYiLCJpdGVyYXRvck91dGVySFRNTCIsImRyYXciLCJjcmVhdGVJdGVyYXRvciIsImluIiwibWFzayIsIm5leHRTaWJsaW5nIiwib3V0ZXJIVE1MIiwiY29udGVudCIsImZpcnN0Q2hpbGQiLCJpbmRleCIsImZvdW5kIiwiX19oYXNoIiwiaXRlcmF0b3IiLCJjVmFsdWUiLCJjb21wYXJzaW9uIiwiY0NvcHkiLCJzZXRJbmRleCIsInNldEtleSIsImNyZWF0ZUl0ZXJhdG9yRWxlbWVudCIsImluc2VydEJlZm9yZSIsIndyaXRhYmxlIiwiZVZhbHVlIiwiaW5kZXhLZXlzIiwibGFzdEVsZW1lbnQiLCJsb29wIiwiaXRlcmF0ZSIsImZvciIsImlzRm9yIiwiY2FuY2VsIiwiX19zZXQiLCJ0cmFuc2l0aW9uIiwic3RhdGUiLCJwYXRoIiwiZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uIiwiX190cmFuc2l0aW9uIiwibG9hZGVkIiwiZW1wdHkiLCJmb3JjZSIsImluRXZhbHVhdGluZyIsIl9FdmVudCIsInR5cGUiLCJUcmFuc2l0aW9uIiwicm91dGVzIiwic3RhdGVzIiwicm91dGUiLCJoYXNoTW9kZSIsIl9fcmVkaXJlY3RzIiwiX19vcHRpb25zIiwiX19wYXJhbVJlZ2V4IiwiX19yb3V0ZVNlbGVjdG9yIiwiYWRkIiwicGF0dGVybiIsImRlZmF1bHRPcHRpb25zIiwiYWJzdHJhY3QiLCJzZXRTdGF0ZSIsImdldFN0YXRlIiwiY3JlYXRlU3RhdGVVcmwiLCJyZWxvYWQiLCJnZXRVcmwiLCJiYWNrIiwiaGlzdG9yeSIsImdvIiwiZm9yd2FyZCIsImxvY2F0aW9uIiwiZXJyb3IiLCJwdXNoU3RhdGUiLCJkZWZhdWx0VXJsIiwib2xkUHVzaFN0YXRlIiwiX19vblN0YXRlQ2hhbmdlSGFuZGxlciIsInBvcCIsInBhcmVudE5hbWUiLCJmdWxsUGF0dGVybiIsInNwbGl0U2xhc2hlcyIsInJlbW92ZVN0YXRlIiwic2V0SGFzaFVybCIsInNldEhpc3RvcnlVcmwiLCJnZXRIYXNoVXJsIiwiZ2V0SGlzdG9yeVVybCIsInBhdGhuYW1lIiwic2VhcmNoIiwiZ2V0VXJsUXVlcnkiLCJnZXRIYXNoVXJsUXVlcnkiLCJnZXRIaXN0b3J5VXJsUXVlcnkiLCJwYXJhbXNGcm9tUXVlcnkiLCJmIiwiZ2V0UGF0dGVybkNvbnRlbnQiLCJ1cmxQYXR0ZXJuIiwicmVnZXgiLCJpc0luY2x1ZGVkIiwiaXNBY3RpdmVTdGF0ZSIsImluY2x1ZGVzIiwiaW5BY3RpdmVTdGF0ZSIsImdldFJvdXRlIiwiZ2V0QXJyYXlQYXR0ZXJuQ29udGVudCIsImdldFN0YXRlc0J5TGV2ZWwiLCJfX2Rpc2FibGVDaGFuZ2UiLCJwcmV2VHJhbnNpdGlvbiIsIm9uRW5kIiwic2V0UGF0aCIsImhhc1N0YXRlIiwiaXNEaWZmZXJlbnQiLCJwcmV2IiwiaXNIaXN0b3J5IiwiaXNSZWxvYWQiLCJzZXRUcmFuc2l0aW9uIiwic2F2ZVNjcm9sbFBvc2l0aW9uIiwic2Nyb2xsVG8iLCJpc1VybCIsInJlc2V0SHJlZiIsInNldFBhcmFtcyIsInNldFF1ZXJ5Iiwic2V0SGFzaCIsInNldFJlbG9hZCIsInByZXZlbnREZWZhdWx0Iiwic2V0T3B0aW9ucyIsImhyZWYiLCJnZXRDb21wdXRlZFN0eWxlIiwiZGlzcGxheSIsInJhbmdlIiwiY3JlYXRlUmFuZ2UiLCJzZWxlY3Rpb24iLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiRWxzZUlmIiwiRWxzZSIsImFjdGl2ZSIsInJlY3JlYXRlIiwiaXNDb21waWxlZCIsInNldFJlY3JlYXRpb24iLCJpcyIsImNvbXBpbGF0aW9uIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwicmVzdWx0Iiwic2V0QWN0aXZpdHkiLCJjb25uZWN0aW9uIiwiZ2V0VGVtcGxhdGUiLCJhYm9ydCIsIm9uTG9hZCIsIm9uRXJyb3IiLCJpc0NoZWNrYm94IiwiaXNSYWRpbyIsInNldENoZWNrZWQiLCJjaGVja2VkIiwicHJldkNoZWNrZWQiLCJvbkNoYW5nZSIsImRpc3BhdGNoIiwiRXZlbnQiLCJjaGFuZ2VSYWRpbyIsInJhZGlvIiwiT2JqZWN0cyIsIlJhZGlvQnV0dG9uIiwiaXRlcmFibGUiLCJzZXROYW1lcyIsImdldFJhZGlvVmFsdWUiLCJwcmV2VmFsdWUiLCJvblJhZGlvIiwiaXNUcnVlIiwiaXNTZWxlY3RlZCIsInNldFJhZGlvVmFsdWUiLCJPcHRpb24iLCJpdGVyYXRvclRhZ05hbWUiLCJpc011bHRpcGxlIiwic2V0TXVsdGlwbGUiLCJzZXRDb250ZW50IiwiZHJhd1NlbGVjdCIsImdldENvbnRlbnQiLCJtdWx0aXBsZSIsImNoYW5nZVZhbHVlIiwiZm9ybWF0VmFsdWUiLCJzZWxlY3RlZCIsIm9wdGlvbiIsInJlZGVmaW5lIiwidHJpbSIsInNldFNlbGVjdGVkIiwiX19lbCIsInN0cmljdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkRBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQWxDQTs7Ozs7Ozs7O0FBb0NBLElBQU1BLFFBQVEsRUFBZDs7QUFFQUEsTUFBTUMsT0FBTixHQUFnQjtBQUNkQyxrQkFBZ0IsSUFERjtBQUVkQyxTQUFPO0FBRk8sQ0FBaEI7O0FBS0FILE1BQU1JLE1BQU4sR0FBZSxJQUFmO0FBQ0FKLE1BQU1LLFlBQU4sR0FBcUIsRUFBckI7QUFDQUwsTUFBTU0sU0FBTixHQUFrQixFQUFsQjtBQUNBTixNQUFNTyxRQUFOLEdBQWlCLEVBQWpCO0FBQ0FQLE1BQU1RLFFBQU4sR0FBaUIsRUFBakI7QUFDQVIsTUFBTVMsV0FBTixHQUFvQixJQUFwQjtBQUNBVCxNQUFNVSxZQUFOLEdBQXFCLElBQXJCO0FBQ0FWLE1BQU1XLE1BQU4sR0FBZUMsT0FBT0MsUUFBUCxDQUFnQkMsZUFBL0I7QUFDQWQsTUFBTWUsZUFBTixHQUF3QkMsUUFBUUMsT0FBUixFQUF4QjtBQUNBakIsTUFBTWtCLGlCQUFOLEdBQTBCLEtBQTFCOztBQUVBbEIsTUFBTW1CLHFCQUFOLEdBQThCLENBQzVCLFVBRDRCLEVBQ2hCLGlCQURnQixFQUNHLFFBREgsQ0FBOUI7O0FBSUFuQixNQUFNb0IsVUFBTixHQUFtQixFQUFuQjtBQUNBcEIsTUFBTXFCLFVBQU4sR0FBbUIsRUFBbkI7QUFDQXJCLE1BQU1zQixRQUFOLEdBQWlCLEVBQWpCOztBQUVBOzs7OztBQUtBdEIsTUFBTXVCLGVBQU4sR0FBd0IsVUFBU0MsSUFBVCxFQUFlO0FBQ3JDLFNBQU9BLEtBQUtDLEdBQUwsQ0FBUztBQUFBLFdBQU1DLEdBQUdDLFFBQUgsRUFBTjtBQUFBLEdBQVQsRUFBOEJDLElBQTlCLENBQW1DLEdBQW5DLENBQVA7QUFDRCxDQUZEOztBQUlBOzs7OztBQUtBNUIsTUFBTTZCLFFBQU4sR0FBaUIsVUFBU0MsS0FBVCxFQUFnQjtBQUMvQixNQUFHLEtBQUt2QixRQUFMLENBQWN1QixNQUFNQyxNQUFwQixDQUFILEVBQWdDO0FBQzlCLFVBQU0sSUFBSUMsS0FBSixpQkFBd0JGLE1BQU1DLE1BQTlCLHFCQUFOO0FBQ0Q7O0FBRUQsT0FBS3hCLFFBQUwsQ0FBY3VCLE1BQU1DLE1BQXBCLElBQThCRCxLQUE5QjtBQUNELENBTkQ7O0FBUUE7Ozs7OztBQU1BOUIsTUFBTWlDLFFBQU4sR0FBaUIsVUFBU0MsSUFBVCxFQUFlO0FBQzlCLFNBQU8sS0FBSzNCLFFBQUwsQ0FBYzJCLElBQWQsQ0FBUDtBQUNELENBRkQ7O0FBSUE7Ozs7O0FBS0FsQyxNQUFNbUMsV0FBTixHQUFvQixVQUFTRCxJQUFULEVBQWU7QUFDakMsT0FBSzNCLFFBQUwsQ0FBYzJCLElBQWQsSUFBc0IsSUFBdEI7QUFDQSxTQUFPLEtBQUszQixRQUFMLENBQWMyQixJQUFkLENBQVA7QUFDRCxDQUhEOztBQUtBOzs7Ozs7O0FBT0FsQyxNQUFNb0MsZUFBTixHQUF3QixVQUFVVixFQUFWLEVBQTJCO0FBQUEsTUFBYlcsSUFBYSx1RUFBTixJQUFNOztBQUNqRCxNQUFJQyxNQUFNLEVBQVY7O0FBRUEsV0FBU0MsS0FBVCxDQUFlQyxJQUFmLEVBQXFCO0FBQ25CLFFBQUcsQ0FBQ0EsS0FBS0MsVUFBVCxFQUFxQjtBQUNuQjtBQUNEOztBQUVELFFBQUdELEtBQUtDLFVBQUwsQ0FBZ0JDLE9BQW5CLEVBQTRCO0FBQzFCSixVQUFJSyxJQUFKLENBQVNILEtBQUtDLFVBQWQ7O0FBRUEsVUFBRyxDQUFDSixJQUFKLEVBQVU7QUFDUjtBQUNEO0FBQ0Y7O0FBRURFLFVBQU1DLEtBQUtDLFVBQVg7QUFDRDs7QUFFREYsUUFBTWIsRUFBTjs7QUFFQSxTQUFPVyxPQUFNQyxHQUFOLEdBQVdBLElBQUksQ0FBSixDQUFsQjtBQUNELENBdEJEOztBQXdCQTs7Ozs7Ozs7Ozs7O0FBWUF0QyxNQUFNNEMsV0FBTixHQUFvQixVQUFTbEIsRUFBVCxFQUFhbUIsUUFBYixFQUF1QjtBQUN6Q0EsYUFBV0EsU0FBU0MsT0FBVCxDQUFpQix1Q0FBakIsRUFBMERwQixHQUFHcUIsU0FBN0QsQ0FBWDtBQUNBckIsS0FBR3FCLFNBQUgsR0FBZUYsUUFBZjs7QUFFQSxTQUFPbkIsR0FBR3FCLFNBQVY7QUFDRCxDQUxEOztBQU9BOzs7OztBQUtBL0MsTUFBTWdELGVBQU4sR0FBd0IsWUFBVztBQUFBOztBQUNqQyxTQUFPLGdCQUFNQyxrQkFBTixDQUF5QixFQUF6QixFQUE2QixVQUFDQyxHQUFELEVBQVM7QUFDM0MsV0FBTyxDQUFDLENBQUMsTUFBSzNDLFFBQUwsQ0FBYzJDLEdBQWQsQ0FBVDtBQUNELEdBRk0sQ0FBUDtBQUdELENBSkQ7O0FBTUE7Ozs7Ozs7Ozs7QUFVQWxELE1BQU1tRCxPQUFOLEdBQWdCLFVBQVNDLEVBQVQsRUFBYTtBQUMzQixNQUFHLEtBQUszQyxXQUFSLEVBQXFCO0FBQ25CLFdBQU8yQyxJQUFQO0FBQ0Q7O0FBRUQsT0FBSzNDLFdBQUwsR0FBbUIsRUFBbkI7O0FBRUEsTUFBSTRDLE1BQU1ELElBQVY7QUFDQSxNQUFJRSxRQUFRLEVBQVo7O0FBRUEsT0FBSSxJQUFJQyxDQUFSLElBQWEsS0FBSzlDLFdBQWxCLEVBQStCO0FBQzdCLFFBQUcsQ0FBQyxLQUFLQSxXQUFMLENBQWlCK0MsY0FBakIsQ0FBZ0NELENBQWhDLENBQUosRUFBd0M7QUFDdEM7QUFDRDs7QUFFREQsVUFBTVgsSUFBTixDQUFXLEtBQUtsQyxXQUFMLENBQWlCOEMsQ0FBakIsQ0FBWDtBQUNEOztBQUVELE9BQUs5QyxXQUFMLEdBQW1CLElBQW5COztBQWxCMkIsNkJBb0JuQmdELENBcEJtQixFQW9CWkMsQ0FwQlk7QUFxQnpCLFFBQUlDLE9BQU9MLE1BQU1HLENBQU4sQ0FBWDs7QUFFQSxRQUFHRSxLQUFLQyxTQUFSLEVBQW1CO0FBQ2pCRCxXQUFLRSxTQUFMLENBQWVDLGdCQUFmLENBQWdDSCxLQUFLbkMsSUFBckMsRUFBMkN1QyxTQUEzQyxFQUFzRCxJQUF0RDs7QUFFQTtBQUNEOztBQUVELG9CQUFNQyxpQkFBTixDQUF3QkwsS0FBS25DLElBQTdCLEVBQW1DbUMsS0FBS0UsU0FBTCxDQUFlL0IsS0FBbEQsRUFBeUQsVUFBQ21DLElBQUQsRUFBT0MsR0FBUCxFQUFlO0FBQ3RFLFVBQUcsQ0FBQ0QsSUFBSixFQUFVO0FBQ1IsZUFBT0MsT0FBTyxFQUFkO0FBQ0Q7O0FBRUQsYUFBT1AsS0FBS1EsS0FBWjtBQUNELEtBTkQ7QUE3QnlCOztBQW9CM0IsT0FBSSxJQUFJVixJQUFJLENBQVIsRUFBV0MsSUFBSUosTUFBTWMsTUFBekIsRUFBaUNYLElBQUlDLENBQXJDLEVBQXdDRCxHQUF4QyxFQUE2QztBQUFBLHFCQUFyQ0EsQ0FBcUMsRUFBOUJDLENBQThCOztBQUFBLDZCQU16QztBQVVIOztBQUVESixVQUFRLElBQVI7O0FBRUEsU0FBT0QsR0FBUDtBQUNELENBekNEOztBQTJDQTs7Ozs7O0FBTUFyRCxNQUFNcUUsV0FBTixHQUFvQixVQUFTakIsRUFBVCxFQUFhO0FBQy9CLE1BQUlrQixhQUFhLEtBQUs1RCxZQUF0QjtBQUNBLE1BQUkyQyxZQUFKOztBQUVBLE9BQUszQyxZQUFMLEdBQW9CLElBQXBCO0FBQ0EyQyxRQUFNRCxJQUFOO0FBQ0EsT0FBSzFDLFlBQUwsR0FBb0I0RCxVQUFwQjs7QUFFQSxTQUFPakIsR0FBUDtBQUNELENBVEQ7O0FBV0E7Ozs7OztBQU1BckQsTUFBTXVFLFVBQU4sR0FBbUIsVUFBU25CLEVBQVQsRUFBYTtBQUM5QixNQUFJa0IsYUFBYSxLQUFLN0QsV0FBdEI7QUFDQSxNQUFJNEMsWUFBSjs7QUFFQSxPQUFLNUMsV0FBTCxHQUFtQixJQUFuQjtBQUNBNEMsUUFBTUQsSUFBTjtBQUNBLE9BQUszQyxXQUFMLEdBQW1CNkQsVUFBbkI7O0FBRUEsU0FBT2pCLEdBQVA7QUFDRCxDQVREOztBQVdBOzs7Ozs7O0FBT0FyRCxNQUFNd0UsVUFBTixHQUFtQixVQUFTOUMsRUFBVCxFQUEyQjtBQUFBLE1BQWR6QixPQUFjLHVFQUFKLEVBQUk7O0FBQzVDLE1BQUl3RSxZQUFZeEUsUUFBUXdFLFNBQXhCO0FBQ0EsTUFBSVosWUFBWW5DLEdBQUdnQixPQUFuQjs7QUFFQSxNQUFHbUIsU0FBSCxFQUFjO0FBQ1osUUFBR1ksU0FBSCxFQUFjO0FBQ1paLGdCQUFVYSxXQUFWOztBQUVBLGFBQU9iLFNBQVA7QUFDRDs7QUFFRDtBQUNEOztBQUVELE1BQUljLFNBQVNqRCxPQUFPLEtBQUtrRCxNQUF6QjtBQUNBLE1BQUlDLGdCQUFnQixnQkFBTUMsVUFBTixDQUFpQnBELEdBQUdxRCxZQUFILENBQWdCLFdBQWhCLEtBQWdDckQsR0FBR3NELE9BQUgsQ0FBV0MsV0FBWCxFQUFqRCxDQUFwQjtBQUNBLE1BQUlDLGFBQWEsS0FBSzdFLFlBQUwsQ0FBa0J3RSxhQUFsQixDQUFqQjs7QUFFQU0saUJBQWUsSUFBRyxDQUFDRCxVQUFKLEVBQWdCO0FBQzdCLFFBQUlFLFlBQVlDLE9BQU83RCxJQUFQLENBQVksS0FBS2xCLFNBQWpCLENBQWhCOztBQUVBLFFBQUcsQ0FBQzhFLFVBQVVoQixNQUFkLEVBQXNCO0FBQ3BCLFlBQU1lLGFBQU47QUFDRDs7QUFFRCxRQUFJRyxjQUFjRixVQUFVeEQsSUFBVixDQUFlLEdBQWYsQ0FBbEI7O0FBRUEsUUFBRyxDQUFDRixHQUFHNkQsT0FBSCxDQUFXRCxXQUFYLENBQUosRUFBNkI7QUFDM0IsWUFBTUgsYUFBTjtBQUNEOztBQUVELFNBQUksSUFBSUssUUFBUixJQUFvQixLQUFLbEYsU0FBekIsRUFBb0M7QUFDbEMsVUFBRyxDQUFDLEtBQUtBLFNBQUwsQ0FBZWtELGNBQWYsQ0FBOEJnQyxRQUE5QixDQUFKLEVBQTZDO0FBQzNDO0FBQ0Q7O0FBRUQsVUFBRzlELEdBQUc2RCxPQUFILENBQVdDLFFBQVgsQ0FBSCxFQUF5QjtBQUN2Qk4scUJBQWEsS0FBSzdFLFlBQUwsQ0FBa0IsS0FBS0MsU0FBTCxDQUFla0YsUUFBZixDQUFsQixDQUFiO0FBQ0E7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsTUFBRyxDQUFDTixVQUFELElBQWUsQ0FBQ1AsTUFBbkIsRUFBMkI7QUFDekI7QUFDRDs7QUFFRCxNQUFHLENBQUNPLFVBQUosRUFBZ0I7QUFDZEEsaUJBQWEsS0FBS08sU0FBbEI7QUFDRDs7QUFFRCxNQUFHUCxXQUFXSyxPQUFYLElBQXNCLENBQUM3RCxHQUFHNkQsT0FBSCxDQUFXTCxXQUFXSyxPQUF0QixDQUExQixFQUEwRDtBQUN4RDtBQUNEOztBQUVEMUIsY0FBWSxJQUFJcUIsVUFBSixDQUFleEQsRUFBZixFQUFtQixFQUFuQixDQUFaOztBQUVBLE1BQUdtQyxVQUFVNkIsV0FBYixFQUEwQjtBQUN4QjtBQUNEOztBQUVEN0IsWUFBVThCLFFBQVY7O0FBRUEsU0FBTzlCLFNBQVA7QUFDRCxDQWhFRDs7QUFrRUE7Ozs7Ozs7QUFPQTdELE1BQU00RixPQUFOLEdBQWdCLFVBQVNDLElBQVQsRUFBK0M7QUFBQTs7QUFBQSxNQUFoQzVGLE9BQWdDLHVFQUF0QixFQUFFd0UsV0FBVyxLQUFiLEVBQXNCOztBQUM3RCxNQUFJcUIsV0FBVyxFQUFmOztBQUVBLE1BQUlDLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNyRSxFQUFELEVBQVE7QUFDL0IsUUFBSW1DLFlBQVksT0FBS1csVUFBTCxDQUFnQjlDLEVBQWhCLEVBQW9CekIsT0FBcEIsQ0FBaEI7QUFDQSxRQUFJK0YsV0FBV3RFLEdBQUdzRSxRQUFsQjs7QUFFQW5DLGlCQUFhaUMsU0FBU25ELElBQVQsQ0FBY2tCLFNBQWQsQ0FBYjs7QUFFQSxTQUFJLElBQUlKLElBQUksQ0FBUixFQUFXQyxJQUFJc0MsU0FBUzVCLE1BQTVCLEVBQW9DWCxJQUFJQyxDQUF4QyxFQUEyQ0QsR0FBM0MsRUFBZ0Q7QUFDOUMsVUFBSXdDLFFBQVFELFNBQVN2QyxDQUFULENBQVo7O0FBRUFzQyx5QkFBbUJFLEtBQW5CO0FBQ0Q7QUFDRixHQVhEOztBQWFBRixxQkFBbUJGLElBQW5COztBQUVBLE1BQUlLLElBQUksRUFBUjs7QUFFQSxPQUFJLElBQUl6QyxJQUFJLENBQVIsRUFBV0MsSUFBSW9DLFNBQVMxQixNQUE1QixFQUFvQ1gsSUFBSUMsQ0FBeEMsRUFBMkNELEdBQTNDLEVBQWdEO0FBQzlDLFFBQUlJLFlBQVlpQyxTQUFTckMsQ0FBVCxDQUFoQjs7QUFFQXlDLE1BQUV2RCxJQUFGLENBQU9rQixVQUFVc0MsU0FBVixFQUFQO0FBQ0Q7O0FBRUQsU0FBT25GLFFBQVFvRixHQUFSLENBQVlGLENBQVosRUFBZUcsSUFBZixDQUFvQixZQUFNO0FBQy9CLFFBQUlDLElBQUksRUFBUjs7QUFFQSxTQUFJLElBQUk3QyxLQUFJcUMsU0FBUzFCLE1BQVQsR0FBa0IsQ0FBOUIsRUFBaUNYLE1BQUssQ0FBdEMsRUFBeUNBLElBQXpDLEVBQThDO0FBQzVDLFVBQUlJLGFBQVlpQyxTQUFTckMsRUFBVCxDQUFoQjs7QUFFQTZDLFFBQUUzRCxJQUFGLENBQU9rQixXQUFVMEMsU0FBVixFQUFQO0FBQ0Q7O0FBRUQsV0FBT3ZGLFFBQVFvRixHQUFSLENBQVlFLENBQVosQ0FBUDtBQUNELEdBVk0sQ0FBUDtBQVdELENBckNEOztBQXVDQTs7Ozs7O0FBTUF0RyxNQUFNNkQsU0FBTixHQUFrQixVQUFTM0IsSUFBVCxFQUFla0IsRUFBZixFQUFtQjtBQUNuQ2xCLFNBQU9BLEtBQUsrQyxXQUFMLEVBQVA7O0FBRUEsTUFBRyxDQUFDN0IsRUFBSixFQUFRO0FBQ04sV0FBTyxLQUFLL0MsWUFBTCxDQUFrQjZCLElBQWxCLEtBQTJCLElBQWxDO0FBQ0Q7O0FBRUQsTUFBRyxLQUFLN0IsWUFBTCxDQUFrQjZCLElBQWxCLEtBQTJCbEMsTUFBTUMsT0FBTixDQUFjRSxLQUE1QyxFQUFtRDtBQUNqRHFHLFlBQVFDLElBQVIsZ0JBQTBCdkUsSUFBMUI7QUFDRDs7QUFFRCxPQUFLN0IsWUFBTCxDQUFrQjZCLElBQWxCLElBQTBCa0IsRUFBMUI7QUFDRCxDQVpEOztBQWNBOzs7OztBQUtBcEQsTUFBTTBHLG1CQUFOLEdBQTRCLFVBQVN4RSxJQUFULEVBQWU7QUFDekMsU0FBTyxLQUFLN0IsWUFBTCxDQUFrQjZCLElBQWxCLENBQVA7QUFDRCxDQUZEOztBQUlBOzs7Ozs7QUFNQWxDLE1BQU0yRyxLQUFOLEdBQWMsVUFBU25CLFFBQVQsRUFBdUM7QUFBQSxNQUFwQlgsYUFBb0IsdUVBQUosRUFBSTs7QUFDbkRBLGtCQUFnQkEsY0FBY0ksV0FBZCxFQUFoQjs7QUFFQSxNQUFHLENBQUNKLGFBQUosRUFBbUI7QUFDakIsV0FBTyxLQUFLdkUsU0FBTCxDQUFla0YsUUFBZixLQUE0QixJQUFuQztBQUNEOztBQUVELE1BQUcsS0FBS2xGLFNBQUwsQ0FBZWtGLFFBQWYsS0FBNEJ4RixNQUFNQyxPQUFOLENBQWNFLEtBQTdDLEVBQW9EO0FBQ2xEcUcsWUFBUUMsSUFBUiwwQkFBb0NqQixRQUFwQztBQUNEOztBQUVELE9BQUtsRixTQUFMLENBQWVrRixRQUFmLElBQTJCWCxhQUEzQjtBQUNELENBWkQ7O0FBY0E7Ozs7O0FBS0E3RSxNQUFNNEcsZUFBTixHQUF3QixVQUFTcEIsUUFBVCxFQUFtQjtBQUN6QyxTQUFPLEtBQUtuRixZQUFMLENBQWtCbUYsUUFBbEIsQ0FBUDtBQUNELENBRkQ7O0FBSUE7OztBQUdBeEYsTUFBTTZHLHFCQUFOLEdBQThCLFlBQVc7QUFBQTs7QUFDdkMsT0FBS3JHLFFBQUwsQ0FBY3NHLEtBQWQsR0FBc0IsRUFBRUMsV0FBVyxFQUFiLEVBQXRCOztBQUVBLE1BQUl2RixPQUFPNkQsT0FBTzJCLG1CQUFQLENBQTJCRixNQUFNQyxTQUFqQyxDQUFYOztBQUh1QywrQkFLL0J0RCxDQUwrQixFQUt4QkMsQ0FMd0I7QUFNckMsUUFBSXVELE1BQU16RixLQUFLaUMsQ0FBTCxDQUFWO0FBQ0EsUUFBSXlELE1BQU1KLE1BQU1DLFNBQU4sQ0FBZ0JFLEdBQWhCLENBQVY7O0FBRUEsUUFBRyxPQUFPQyxHQUFQLElBQWMsVUFBZCxJQUE0QkQsT0FBTyxhQUF0QyxFQUFxRDtBQUNuRDtBQUNEOztBQUVELFdBQUt6RyxRQUFMLENBQWNzRyxLQUFkLENBQW9CQyxTQUFwQixDQUE4QkUsR0FBOUIsSUFBcUNDLEdBQXJDOztBQUVBSixVQUFNQyxTQUFOLENBQWdCRSxHQUFoQixJQUF1QixZQUFXO0FBQUE7QUFBQTs7QUFDaEMsYUFBT2pILE1BQU1xRSxXQUFOLENBQWtCLFlBQU07QUFDN0IsWUFBRyxDQUFDLE9BQUs4QyxTQUFULEVBQW9CO0FBQ2xCLGlCQUFPRCxJQUFJRSxLQUFKLG9CQUFQO0FBQ0Q7O0FBRUQsZUFBT3BILE1BQU1tRCxPQUFOLENBQWMsWUFBTTtBQUN6QixpQkFBTytELElBQUlFLEtBQUosb0JBQVA7QUFDRCxTQUZNLENBQVA7QUFHRCxPQVJNLENBQVA7QUFTRCxLQVZEO0FBZnFDOztBQUt2QyxPQUFJLElBQUkzRCxJQUFJLENBQVIsRUFBV0MsSUFBSWxDLEtBQUs0QyxNQUF4QixFQUFnQ1gsSUFBSUMsQ0FBcEMsRUFBdUNELEdBQXZDLEVBQTRDO0FBQUEsdUJBQXBDQSxDQUFvQyxFQUE3QkMsQ0FBNkI7O0FBQUEsOEJBS3hDO0FBZ0JIO0FBQ0YsQ0EzQkQ7O0FBNkJBOzs7QUFHQTFELE1BQU1xSCxzQkFBTixHQUErQixZQUFXO0FBQ3hDLE9BQUs3RyxRQUFMLENBQWM4RyxVQUFkLEdBQTJCQSxVQUEzQjtBQUNBLE9BQUs5RyxRQUFMLENBQWMrRyxXQUFkLEdBQTRCQSxXQUE1QjtBQUNBLE9BQUsvRyxRQUFMLENBQWNRLE9BQWQsR0FBd0JBLE9BQXhCOztBQUVBSixTQUFPMEcsVUFBUCxHQUFvQixLQUFLRSx1QkFBTCxDQUE2QjVHLE9BQU8wRyxVQUFwQyxFQUFnRCxDQUFoRCxDQUFwQjtBQUNBMUcsU0FBTzJHLFdBQVAsR0FBcUIsS0FBS0MsdUJBQUwsQ0FBNkI1RyxPQUFPMkcsV0FBcEMsRUFBaUQsQ0FBakQsQ0FBckI7QUFDQTNHLFNBQU9JLE9BQVAsS0FBbUJKLE9BQU9JLE9BQVAsQ0FBZXlHLFdBQWYsR0FBNkIsS0FBS0QsdUJBQUwsQ0FBNkI1RyxPQUFPSSxPQUFQLENBQWV5RyxXQUE1QyxFQUEwRCxDQUExRCxDQUFoRDtBQUNELENBUkQ7O0FBVUE7OztBQUdBekgsTUFBTTBILGFBQU4sR0FBc0IsWUFBVztBQUMvQixPQUFLbEgsUUFBTCxDQUFjbUgsT0FBZCxHQUF3QixFQUFFWixXQUFXLEVBQWIsRUFBeEI7O0FBRUEsT0FBS3ZHLFFBQUwsQ0FBY21ILE9BQWQsQ0FBc0JaLFNBQXRCLENBQWdDYSxnQkFBaEMsR0FBbURELFFBQVFaLFNBQVIsQ0FBa0JhLGdCQUFyRTtBQUNBLE9BQUtwSCxRQUFMLENBQWNtSCxPQUFkLENBQXNCWixTQUF0QixDQUFnQ2MsbUJBQWhDLEdBQXNERixRQUFRWixTQUFSLENBQWtCYyxtQkFBeEU7QUFDQSxPQUFLckgsUUFBTCxDQUFjbUgsT0FBZCxDQUFzQlosU0FBdEIsQ0FBZ0NlLE1BQWhDLEdBQXlDSCxRQUFRWixTQUFSLENBQWtCZSxNQUEzRDs7QUFFQUgsVUFBUVosU0FBUixDQUFrQmUsTUFBbEIsR0FBMkIsWUFBVztBQUNwQyxXQUFPLEtBQUtDLGdCQUFaOztBQUVBLFdBQU8vSCxNQUFNUSxRQUFOLENBQWVtSCxPQUFmLENBQXVCWixTQUF2QixDQUFpQ2UsTUFBakMsQ0FBd0NWLEtBQXhDLENBQThDLElBQTlDLEVBQW9EWSxTQUFwRCxDQUFQO0FBQ0QsR0FKRDs7QUFNQUwsVUFBUVosU0FBUixDQUFrQmEsZ0JBQWxCLEdBQXFDLFVBQVMxRixJQUFULEVBQWVrQixFQUFmLEVBQW1CO0FBQ3RELFFBQUk2RSxPQUFPLEdBQUdDLEtBQUgsQ0FBU0MsSUFBVCxDQUFjSCxTQUFkLENBQVg7O0FBRUEsUUFBRyxDQUFDLEtBQUtELGdCQUFULEVBQTJCO0FBQ3pCLFdBQUtBLGdCQUFMLEdBQXdCLEVBQXhCO0FBQ0Q7O0FBRUQsUUFBRyxDQUFDLEtBQUtBLGdCQUFMLENBQXNCN0YsSUFBdEIsQ0FBSixFQUFpQztBQUMvQixXQUFLNkYsZ0JBQUwsQ0FBc0I3RixJQUF0QixJQUE4QixFQUE5QjtBQUNEOztBQUVEK0YsU0FBSyxDQUFMLElBQVUsWUFBWTtBQUFBO0FBQUE7O0FBQ3BCLGFBQU9qSSxNQUFNcUUsV0FBTixDQUFrQixZQUFNO0FBQzdCLGVBQU9yRSxNQUFNbUQsT0FBTixDQUFjLFlBQU07QUFDekIsaUJBQU9DLEdBQUdnRSxLQUFILHFCQUFQO0FBQ0QsU0FGTSxDQUFQO0FBR0QsT0FKTSxDQUFQO0FBS0QsS0FORDs7QUFRQSxTQUFLVyxnQkFBTCxDQUFzQjdGLElBQXRCLEVBQTRCUyxJQUE1QixDQUFpQztBQUMvQnlGLFlBQU1oRixFQUR5QjtBQUUvQkEsVUFBSTZFLEtBQUssQ0FBTDtBQUYyQixLQUFqQzs7QUFLQSxXQUFPakksTUFBTVEsUUFBTixDQUFlbUgsT0FBZixDQUF1QlosU0FBdkIsQ0FBaUNhLGdCQUFqQyxDQUFrRFIsS0FBbEQsQ0FBd0QsSUFBeEQsRUFBOERhLElBQTlELENBQVA7QUFDRCxHQXpCRDs7QUEyQkFOLFVBQVFaLFNBQVIsQ0FBa0JjLG1CQUFsQixHQUF3QyxVQUFTM0YsSUFBVCxFQUFla0IsRUFBZixFQUFtQjtBQUN6RCxRQUFHLENBQUMsS0FBSzJFLGdCQUFULEVBQTJCO0FBQ3pCLFdBQUtBLGdCQUFMLEdBQXdCLEVBQXhCO0FBQ0Q7O0FBRUQsUUFBRyxDQUFDLEtBQUtBLGdCQUFMLENBQXNCN0YsSUFBdEIsQ0FBSixFQUFpQztBQUMvQixXQUFLNkYsZ0JBQUwsQ0FBc0I3RixJQUF0QixJQUE4QixFQUE5QjtBQUNEOztBQUVELFNBQUksSUFBSXVCLElBQUksQ0FBUixFQUFXQyxJQUFJLEtBQUtxRSxnQkFBTCxDQUFzQjdGLElBQXRCLEVBQTRCa0MsTUFBL0MsRUFBdURYLElBQUlDLENBQTNELEVBQThERCxHQUE5RCxFQUFtRTtBQUNqRSxVQUFJNEUsV0FBVyxLQUFLTixnQkFBTCxDQUFzQjdGLElBQXRCLEVBQTRCdUIsQ0FBNUIsQ0FBZjs7QUFFQSxVQUFHNEUsU0FBU0QsSUFBVCxLQUFrQmhGLEVBQXJCLEVBQXlCO0FBQ3ZCLGFBQUsyRSxnQkFBTCxDQUFzQjdGLElBQXRCLEVBQTRCb0csTUFBNUIsQ0FBbUM3RSxDQUFuQyxFQUFzQyxDQUF0QztBQUNBQTtBQUNBQzs7QUFFQTtBQUNEO0FBQ0Y7O0FBRUQsUUFBRyxDQUFDLEtBQUtxRSxnQkFBTCxDQUFzQjdGLElBQXRCLEVBQTRCa0MsTUFBaEMsRUFBd0M7QUFDdEMsYUFBTyxLQUFLMkQsZ0JBQUwsQ0FBc0I3RixJQUF0QixDQUFQO0FBQ0Q7O0FBRUQsV0FBUWxDLE1BQU1RLFFBQU4sQ0FBZW1ILE9BQWYsQ0FBdUJaLFNBQXZCLENBQWlDYyxtQkFBakMsQ0FBcURULEtBQXJELENBQTJELElBQTNELEVBQWlFWSxTQUFqRSxDQUFSO0FBQ0QsR0ExQkQ7QUEyQkQsQ0FuRUQ7O0FBcUVBOzs7Ozs7O0FBT0FoSSxNQUFNd0gsdUJBQU4sR0FBZ0MsVUFBU3BFLEVBQVQsRUFBMkI7QUFBQSxNQUFkbUYsR0FBYyx1RUFBUixNQUFROztBQUN6RCxTQUFPLFlBQVc7QUFDaEIsUUFBSU4sT0FBTyxHQUFHQyxLQUFILENBQVNDLElBQVQsQ0FBY0gsU0FBZCxDQUFYO0FBQ0EsUUFBSVEsV0FBV0QsT0FBTyxNQUFQLEdBQWVOLEtBQUtBLEtBQUs3RCxNQUFMLEdBQWMsQ0FBbkIsQ0FBZixHQUFzQzZELEtBQUtNLEdBQUwsQ0FBckQ7O0FBRUEsUUFBRyxPQUFPQyxRQUFQLElBQW1CLFVBQXRCLEVBQWtDO0FBQ2hDLGFBQU9wRixHQUFHZ0UsS0FBSCxDQUFTLElBQVQsRUFBZVksU0FBZixDQUFQO0FBQ0Q7O0FBRURDLFNBQUssQ0FBTCxJQUFVLFlBQU07QUFDZCxhQUFPakksTUFBTXFFLFdBQU4sQ0FBa0IsWUFBTTtBQUM3QixlQUFPckUsTUFBTW1ELE9BQU4sQ0FBYyxZQUFNO0FBQ3pCLGlCQUFPcUYsVUFBUDtBQUNELFNBRk0sQ0FBUDtBQUdELE9BSk0sQ0FBUDtBQUtELEtBTkQ7O0FBUUEsV0FBT3BGLEdBQUdnRSxLQUFILENBQVMsSUFBVCxFQUFlYSxJQUFmLENBQVA7QUFDRCxHQWpCRDtBQWtCRCxDQW5CRDs7QUFxQkE7Ozs7Ozs7QUFPQWpJLE1BQU15SSxlQUFOLEdBQXdCLFVBQVNyRixFQUFULEVBQTZCO0FBQUEsTUFBaEJzRixPQUFnQix1RUFBTixJQUFNOztBQUNuRCxNQUFHdEYsR0FBR1YsT0FBTixFQUFlO0FBQ2IsV0FBT1UsRUFBUDtBQUNEOztBQUVELE1BQUl1RixNQUFNLFNBQU5BLEdBQU0sR0FBVztBQUFBOztBQUNuQkQsY0FBVUEsV0FBVyxJQUFyQjs7QUFFQSxXQUFPMUksTUFBTW1ELE9BQU4sQ0FBYyxZQUFNO0FBQ3pCLGFBQU9DLEdBQUdnRSxLQUFILENBQVNzQixPQUFULGNBQVA7QUFDRCxLQUZNLENBQVA7QUFHRCxHQU5EOztBQVFBckQsU0FBT3VELGNBQVAsQ0FBc0JELEdBQXRCLEVBQTJCLFNBQTNCLEVBQXNDO0FBQ3BDRSxrQkFBYyxJQURzQjtBQUVwQ0MsZ0JBQVksS0FGd0I7QUFHcEMzRSxXQUFPO0FBSDZCLEdBQXRDOztBQU1BLFNBQU93RSxHQUFQO0FBQ0QsQ0FwQkQ7O0FBc0JBOzs7QUFHQTNJLE1BQU0rSSxhQUFOLEdBQXNCLFlBQVc7QUFBQTs7QUFDL0JuSSxTQUFPZ0gsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBTTtBQUNyQyxXQUFLb0IsV0FBTCxDQUFpQixLQUFqQjtBQUNELEdBRkQ7QUFHRCxDQUpEOztBQU1BOzs7OztBQUtBaEosTUFBTWdKLFdBQU4sR0FBb0IsVUFBU0MsTUFBVCxFQUFpQjtBQUNuQ2pKLFFBQU1JLE1BQU4sR0FBZTZJLE1BQWY7QUFDQSxPQUFLL0gsaUJBQUwsS0FBMkIsS0FBS1AsTUFBTCxDQUFZdUksS0FBWixDQUFrQkMsVUFBbEIsR0FBK0IsU0FBMUQ7QUFDQXZJLFNBQU93SSxhQUFQLENBQXFCLElBQUlDLFdBQUosQ0FBZ0IsWUFBaEIsRUFBOEIsRUFBRUMsUUFBUUwsTUFBVixFQUE5QixDQUFyQjtBQUNELENBSkQ7O0FBTUE7OztBQUdBakosTUFBTXVKLGVBQU4sR0FBd0IsWUFBVztBQUFBOztBQUNqQyxNQUFJQyxTQUFTLEtBQUs3SSxNQUFMLENBQVlvRSxZQUFaLENBQXlCLGNBQXpCLENBQWI7O0FBRUEsT0FBSzdELGlCQUFMLEdBQXlCLENBQUMsQ0FBQ3NJLE1BQTNCOztBQUVBLE1BQUdBLE1BQUgsRUFBVztBQUNULFNBQUs3SSxNQUFMLENBQVl1SSxLQUFaLENBQWtCQyxVQUFsQixHQUErQixRQUEvQjtBQUNBLFNBQUtwSSxlQUFMLEdBQXVCLGtCQUFRMEksR0FBUixDQUFZRCxNQUFaLEVBQW9CbkQsSUFBcEIsQ0FBeUIsVUFBQ2hELEdBQUQsRUFBUztBQUN2RCxhQUFLMUMsTUFBTCxDQUFZb0MsU0FBWixHQUF3Qk0sSUFBSXFHLElBQTVCO0FBQ0QsS0FGc0IsQ0FBdkI7QUFHRDtBQUNGLENBWEQ7O0FBYUE7Ozs7OztBQU1BMUosTUFBTTJKLElBQU4sR0FBYSxVQUFTOUQsSUFBVCxFQUFlO0FBQUE7O0FBQzFCLE9BQUtqQixNQUFMLEdBQWNpQixRQUFRaEYsU0FBUytJLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBdEI7O0FBRUEsU0FBTyxLQUFLN0ksZUFBTCxDQUFxQnNGLElBQXJCLENBQTBCLFlBQU07QUFDckMsV0FBTyxPQUFLVCxPQUFMLENBQWEsT0FBS2hCLE1BQWxCLEVBQTBCeUIsSUFBMUIsQ0FBK0IsWUFBTTtBQUMxQyxVQUFHLGlCQUFPakcsTUFBVixFQUFrQjtBQUNoQixlQUFPLGlCQUFPeUosV0FBUCxFQUFQO0FBQ0Q7QUFDRixLQUpNLEVBSUp4RCxJQUpJLENBSUMsWUFBTTtBQUNaLGFBQUsyQyxXQUFMLENBQWlCLElBQWpCO0FBQ0QsS0FOTSxFQU1KYyxLQU5JLENBTUUsVUFBQ0MsR0FBRCxFQUFTO0FBQ2hCLGFBQUtmLFdBQUwsQ0FBaUIsS0FBakI7QUFDQSxZQUFNZSxHQUFOO0FBQ0QsS0FUTSxDQUFQO0FBVUQsR0FYTSxDQUFQO0FBWUQsQ0FmRDs7QUFpQkE7OztBQUdBL0osTUFBTWdLLE1BQU4sR0FBZSxZQUFXO0FBQ3hCLE9BQUksSUFBSS9DLEdBQVIsSUFBZSxLQUFLekcsUUFBTCxDQUFjbUgsT0FBZCxDQUFzQlosU0FBckMsRUFBZ0Q7QUFDOUNZLFlBQVFaLFNBQVIsQ0FBa0JFLEdBQWxCLElBQXlCLEtBQUt6RyxRQUFMLENBQWNtSCxPQUFkLENBQXNCWixTQUF0QixDQUFnQ0UsR0FBaEMsQ0FBekI7QUFDRDs7QUFFRCxPQUFJLElBQUlBLElBQVIsSUFBZSxLQUFLekcsUUFBTCxDQUFjc0csS0FBZCxDQUFvQkMsU0FBbkMsRUFBOEM7QUFDNUNELFVBQU1DLFNBQU4sQ0FBZ0JFLElBQWhCLElBQXVCLEtBQUt6RyxRQUFMLENBQWNzRyxLQUFkLENBQW9CQyxTQUFwQixDQUE4QkUsSUFBOUIsQ0FBdkI7QUFDRDs7QUFFRHJHLFNBQU8wRyxVQUFQLEdBQW9CLEtBQUs5RyxRQUFMLENBQWM4RyxVQUFsQztBQUNBMUcsU0FBTzJHLFdBQVAsR0FBcUIsS0FBSy9HLFFBQUwsQ0FBYytHLFdBQW5DO0FBQ0EzRyxTQUFPSSxPQUFQLEdBQWlCLEtBQUtSLFFBQUwsQ0FBY1EsT0FBL0I7QUFDRCxDQVpEOztBQWNBOzs7QUFHQWhCLE1BQU1pSyxNQUFOLEdBQWUsWUFBVztBQUN4QixjQUFFQSxNQUFGO0FBQ0Esa0JBQU1BLE1BQU47QUFDQSxvQkFBUUEsTUFBUjtBQUNBLHNCQUFVQSxNQUFWO0FBQ0Esa0JBQU1BLE1BQU47QUFDQSxnQkFBSUEsTUFBSjtBQUNBLG9CQUFRQSxNQUFSO0FBQ0EsbUJBQU9BLE1BQVA7QUFDQSxrQkFBTUEsTUFBTjtBQUNBLGtCQUFNQSxNQUFOO0FBQ0EsZUFBR0EsTUFBSDtBQUNBLG1CQUFRQSxNQUFSO0FBQ0Esa0JBQU1BLE1BQU47QUFDQSxrQkFBTUEsTUFBTjtBQUNBLG1CQUFPQSxNQUFQO0FBQ0EsbUJBQU9BLE1BQVA7QUFDQSxxQkFBU0EsTUFBVDtBQUNBLGtCQUFNQSxNQUFOO0FBQ0Esa0JBQU1BLE1BQU47QUFDRCxDQXBCRDs7QUFzQkFqSyxNQUFNeUYsU0FBTjtBQUNBekYsTUFBTWtLLFlBQU47QUFDQWxLLE1BQU1tSyxLQUFOO0FBQ0FuSyxNQUFNb0ssS0FBTjtBQUNBcEssTUFBTW9CLFVBQU4sQ0FBaUJpSixDQUFqQjtBQUNBckssTUFBTW9CLFVBQU4sQ0FBaUJrSixLQUFqQjtBQUNBdEssTUFBTW9CLFVBQU4sQ0FBaUJtSixPQUFqQjtBQUNBdkssTUFBTW9CLFVBQU4sQ0FBaUJvSixHQUFqQjtBQUNBeEssTUFBTW9CLFVBQU4sQ0FBaUJxSixLQUFqQjtBQUNBekssTUFBTW9CLFVBQU4sQ0FBaUJzSixFQUFqQjtBQUNBMUssTUFBTW9CLFVBQU4sQ0FBaUJ1SixPQUFqQjtBQUNBM0ssTUFBTW9CLFVBQU4sQ0FBaUJ3SixLQUFqQjtBQUNBNUssTUFBTW9CLFVBQU4sQ0FBaUJ5SixNQUFqQjtBQUNBN0ssTUFBTW9CLFVBQU4sQ0FBaUIwSixLQUFqQjtBQUNBOUssTUFBTW9CLFVBQU4sQ0FBaUJpRSxNQUFqQjtBQUNBckYsTUFBTW9CLFVBQU4sQ0FBaUIySixLQUFqQjtBQUNBL0ssTUFBTW9CLFVBQU4sQ0FBaUI0SixLQUFqQjtBQUNBaEwsTUFBTW9CLFVBQU4sQ0FBaUI2SixNQUFqQjtBQUNBakwsTUFBTW9CLFVBQU4sQ0FBaUI4SixNQUFqQjtBQUNBbEwsTUFBTW9CLFVBQU4sQ0FBaUIrSixJQUFqQjtBQUNBbkwsTUFBTW9CLFVBQU4sQ0FBaUJnSyxRQUFqQjtBQUNBcEwsTUFBTW9CLFVBQU4sQ0FBaUJpSyxLQUFqQjtBQUNBckwsTUFBTW9CLFVBQU4sQ0FBaUJrSyxHQUFqQjtBQUNBdEwsTUFBTW9CLFVBQU4sQ0FBaUJtSyxLQUFqQjtBQUNBdkwsTUFBTXNCLFFBQU4sQ0FBZWtLLE9BQWY7QUFDQXhMLE1BQU1zQixRQUFOLENBQWVtSyxNQUFmOztBQUVBN0ssT0FBT1osS0FBUCxHQUFlQSxLQUFmOztBQUVPLElBQU1vQixrQ0FBYXBCLE1BQU1vQixVQUF6QjtBQUNBLElBQU1FLDhCQUFXdEIsTUFBTXNCLFFBQXZCO2tCQUNRdEIsSzs7O0FBRWZBLE1BQU11SixlQUFOO0FBQ0F2SixNQUFNaUssTUFBTjtBQUNBakssTUFBTStJLGFBQU47QUFDQS9JLE1BQU0wSCxhQUFOO0FBQ0ExSCxNQUFNNkcscUJBQU47QUFDQTdHLE1BQU1xSCxzQkFBTixHOzs7Ozs7Ozs7Ozs7Ozs7QUN0dUJBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQmlFLEc7OztBQUduQixpQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTnJELElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLHFJQUNWQSxJQURVOztBQUduQixVQUFLeUQsWUFBTCxHQUFvQixLQUFwQjtBQUhtQjtBQUlwQjs7OzsrQkFFVUMsRyxFQUFLO0FBQ2QsV0FBS0MsTUFBTCxDQUFZRCxHQUFaO0FBQ0Q7OzsrQkFFVTtBQUNULFdBQUtFLEtBQUwsQ0FBV3JJLGNBQVgsQ0FBMEIsS0FBMUIsS0FBb0MsS0FBS29JLE1BQUwsQ0FBWSxLQUFLQyxLQUFMLENBQVdGLEdBQXZCLENBQXBDO0FBQ0Q7OzsyQkFFTUEsRyxFQUFLO0FBQ1YsV0FBS0UsS0FBTCxDQUFXLEtBQUtILFlBQWhCLElBQWdDQyxHQUFoQztBQUNEOzs7Ozs7QUFuQmtCTCxHLENBQ1ovRixPLEdBQVUsTztrQkFERStGLEc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHJCOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1RLGtCQUFrQixtQkFBeEI7QUFDQSxJQUFNQyx3QkFBd0IsSUFBSUMsTUFBSixDQUFXRixnQkFBZ0JHLE1BQTNCLEVBQW1DLEdBQW5DLENBQTlCO0FBQ0EsSUFBTUMsbUJBQW1CLENBQUMsV0FBRCxFQUFjLE9BQWQsQ0FBekI7O0lBRXFCekcsUzs7Ozs7QUFXbkI7Ozs2QkFHZ0I7QUFDZCxzQkFBTTVCLFNBQU4sQ0FBZ0IsV0FBaEIsRUFBNkI0QixTQUE3QjtBQUNEOztBQUVEOzs7Ozs7Ozs7OzBCQU9haUQsTyxFQUFTeUQsVSxFQUEwQjtBQUFBLFVBQWRDLEtBQWMsdUVBQU4sSUFBTTs7QUFDOUMsYUFBUSxVQUFVRCxVQUFWLEVBQXNCQyxLQUF0QixFQUE2QjtBQUNuQyxlQUFPQyxLQUFLRixVQUFMLENBQVA7QUFDRCxPQUZNLENBRUpoRSxJQUZJLENBRUNPLE9BRkQsRUFFVXlELFVBRlYsRUFFc0JDLEtBRnRCLENBQVA7QUFHRDs7O0FBRUQscUJBQVkxSyxFQUFaLEVBQTRCO0FBQUEsUUFBWkksS0FBWSx1RUFBSixFQUFJOztBQUFBOztBQUMxQixTQUFLd0ssV0FBTCxHQUFtQixLQUFuQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0IsS0FBcEI7QUFDQSxTQUFLN0csV0FBTCxHQUFtQixLQUFuQjtBQUNBLFNBQUs4RyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFNBQUtDLGlCQUFMLEdBQXlCLElBQXpCO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQixJQUFyQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCLElBQXRCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEVBQWY7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLElBQXJCO0FBQ0EsU0FBS0MscUJBQUwsR0FBNkIsSUFBN0I7QUFDQSxTQUFLckwsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0osRUFBTCxHQUFVQSxFQUFWO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OztrQ0FLYztBQUNaLFdBQUs0SyxXQUFMLEdBQW1CLEtBQW5CO0FBQ0EsV0FBS0MsWUFBTCxHQUFvQixLQUFwQjtBQUNBLFdBQUtZLHFCQUFMLENBQTJCTixjQUEzQixHQUE0QyxJQUE1QztBQUNBLFdBQUtELFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxXQUFLRCxhQUFMLEdBQXFCLEVBQXJCO0FBQ0EsV0FBS1MsV0FBTDtBQUNBLFdBQUtDLFlBQUw7QUFDQSxXQUFLQyxzQkFBTDtBQUNBLFdBQUtDLGtCQUFMO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OytCQUtXO0FBQUE7O0FBQ1QsV0FBSzdMLEVBQUwsQ0FBUWdCLE9BQVIsR0FBa0IsSUFBbEI7QUFDQSxXQUFLOEssWUFBTDtBQUNBLFdBQUtKLFdBQUw7QUFDQSxXQUFLQyxZQUFMO0FBQ0EsV0FBS0Msc0JBQUw7QUFDQSxXQUFLQyxrQkFBTDs7QUFFQSxzQkFBTXBLLE9BQU4sQ0FBYyxZQUFNO0FBQ2xCLGNBQUtzSyxPQUFMLENBQWEsTUFBSzVCLEtBQWxCO0FBQ0QsT0FGRDtBQUdEOztBQUVEOzs7Ozs7Ozs7Z0NBTVk7QUFBQTs7QUFDVixVQUFJNkIsVUFBVSxLQUFLQyxtQkFBTCxJQUE0QixDQUFDLEtBQUtDLGdCQUFoRDtBQUNBLFVBQUkxSCxJQUFJbEYsUUFBUUMsT0FBUixFQUFSOztBQUVBLFdBQUtpTSxhQUFMLEdBQXFCUSxVQUFTLElBQVQsR0FBZSxLQUFLRSxnQkFBTCxDQUFzQmxMLE9BQTFEOztBQUVBLFVBQUcsQ0FBQyxLQUFLaUssYUFBTixJQUF1QixLQUFLQyxXQUFMLENBQWlCaUIsU0FBeEMsSUFBcUQsS0FBS0YsbUJBQTdELEVBQWtGO0FBQ2hGLGFBQUtHLHVCQUFMLENBQTZCLEtBQUtwTSxFQUFsQyxFQUFzQyxLQUFLd0wsYUFBM0M7QUFDRDs7QUFFRCxVQUFJYSxjQUFjLFNBQWRBLFdBQWMsQ0FBQy9ILFFBQUQsRUFBV2dJLE1BQVgsRUFBc0I7QUFDdEMsYUFBSSxJQUFJdkssSUFBSSxDQUFSLEVBQVdDLElBQUlzQyxTQUFTNUIsTUFBNUIsRUFBb0NYLElBQUlDLENBQXhDLEVBQTJDRCxHQUEzQyxFQUFnRDtBQUM5QyxjQUFJd0MsUUFBUUQsU0FBU3ZDLENBQVQsQ0FBWjs7QUFFQSxjQUFHd0MsTUFBTWdJLFFBQU4sSUFBa0IsQ0FBckIsRUFBd0I7QUFDdEIsbUJBQUtDLGdCQUFMLENBQXNCakksS0FBdEIsRUFBNkIrSCxNQUE3Qjs7QUFFQS9ILGtCQUFNa0ksU0FBTixHQUFrQixPQUFLQyxVQUFMLENBQWdCbkksS0FBaEIsQ0FBbEI7QUFDRCxXQUpELE1BS0ssSUFBR0EsTUFBTWdJLFFBQU4sSUFBa0IsQ0FBbEIsSUFBdUIsQ0FBQ2hJLE1BQU12RCxPQUFqQyxFQUEwQztBQUM3QyxtQkFBS29MLHVCQUFMLENBQTZCN0gsS0FBN0I7QUFDQThILHdCQUFZOUgsTUFBTW9JLFVBQWxCLEVBQThCcEksS0FBOUI7QUFDRDtBQUNGO0FBQ0YsT0FkRDs7QUFnQkE4SCxrQkFBWSxLQUFLck0sRUFBTCxDQUFRMk0sVUFBcEIsRUFBZ0MsS0FBSzNNLEVBQXJDO0FBQ0EsV0FBSzRLLFdBQUwsR0FBbUIsSUFBbkI7O0FBRUEsVUFBSWpKLFlBQUo7O0FBRUEsVUFBRyxDQUFDLEtBQUtzSixhQUFULEVBQXdCO0FBQ3RCdEosY0FBTSxnQkFBTUYsT0FBTixDQUFjLFlBQU07QUFDeEIsaUJBQUswSSxLQUFMLENBQVd5QyxVQUFYLElBQXlCLE9BQUt6QyxLQUFMLENBQVd5QyxVQUFYLENBQXNCQyxPQUF0QixFQUF6Qjs7QUFFQSxpQkFBTyxPQUFLQyxRQUFMLEVBQVA7QUFDRCxTQUpLLENBQU47O0FBTUEsWUFBRyxLQUFLL0csV0FBTCxDQUFpQmdILFdBQXBCLEVBQWlDO0FBQy9CdkksY0FBSSxrQkFBUXVELEdBQVIsQ0FBWSxLQUFLaEMsV0FBTCxDQUFpQmdILFdBQTdCLEVBQTBDcEksSUFBMUMsQ0FBK0MsVUFBQ2hELEdBQUQsRUFBUztBQUMxRCxtQkFBSzNCLEVBQUwsQ0FBUXFCLFNBQVIsR0FBb0IsT0FBSzJMLFNBQXpCO0FBQ0EsNEJBQU05TCxXQUFOLENBQWtCLE9BQUtsQixFQUF2QixFQUEyQjJCLElBQUlxRyxJQUEvQjtBQUNBLG1CQUFPLE9BQUtnRixTQUFaOztBQUVBLG1CQUFPLGdCQUFNOUksT0FBTixDQUFjLE9BQUtsRSxFQUFuQixFQUF1QixFQUFFK0MsV0FBVyxJQUFiLEVBQXZCLENBQVA7QUFDRCxXQU5HLENBQUo7QUFPRDtBQUNGLE9BaEJELE1BaUJLO0FBQ0gsd0JBQU10QixPQUFOLENBQWMsWUFBTTtBQUNsQixpQkFBSzBJLEtBQUwsQ0FBVzhDLFlBQVgsSUFBMkIsT0FBSzlDLEtBQUwsQ0FBVzhDLFlBQVgsQ0FBd0JKLE9BQXhCLEVBQTNCO0FBQ0EsaUJBQUtLLFVBQUw7QUFDRCxTQUhEO0FBSUQ7O0FBRUQsV0FBS3JDLFlBQUwsR0FBb0IsSUFBcEI7QUFDQSxXQUFLSSxhQUFMLEdBQXFCLElBQXJCO0FBQ0EsV0FBS0MsV0FBTCxHQUFtQixJQUFuQjs7QUFFQSxhQUFPMUcsRUFBRUcsSUFBRixDQUFPLFlBQU07QUFDbEIsZUFBT2hELEdBQVA7QUFDRCxPQUZNLENBQVA7QUFHRDs7QUFFRDs7Ozs7Ozs7O2dDQU1ZO0FBQ1YsVUFBRyxLQUFLc0osYUFBUixFQUF1QjtBQUNyQixlQUFPM0wsUUFBUUMsT0FBUixFQUFQO0FBQ0Q7O0FBRUQsV0FBSzRLLEtBQUwsQ0FBV2dELFVBQVgsSUFBeUIsS0FBS2hELEtBQUwsQ0FBV2dELFVBQVgsQ0FBc0JOLE9BQXRCLEVBQXpCO0FBQ0EsYUFBT3ZOLFFBQVFDLE9BQVIsQ0FBZ0IsS0FBSzZOLFFBQUwsRUFBaEIsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7OzttQ0FLZTtBQUNiLFVBQUlkLFNBQVMsZ0JBQU01TCxlQUFOLENBQXNCLEtBQUtWLEVBQTNCLEVBQStCLEtBQS9CLENBQWI7QUFDQSxVQUFJeUksUUFBUSxLQUFLMUMsV0FBTCxDQUFpQjNGLEtBQWpCLElBQTBCLGdCQUFNcUksS0FBNUM7QUFDQSxVQUFJckksY0FBSjtBQUNBLFVBQUk2QyxTQUFTLGdCQUFNQyxNQUFOLEtBQWlCLEtBQUtsRCxFQUFuQzs7QUFFQSxVQUFHc00sTUFBSCxFQUFXO0FBQ1RsTSxnQkFBUSxJQUFJcUksS0FBSixDQUFVLEtBQUt6SSxFQUFMLENBQVFxRCxZQUFSLENBQXFCLE9BQXJCLEtBQWlDLGdCQUFNL0IsZUFBTixFQUEzQyxFQUFvRSxLQUFLdEIsRUFBekUsRUFBNkUsSUFBN0UsQ0FBUjtBQUNELE9BRkQsTUFHSztBQUNISSxnQkFBUSxJQUFJcUksS0FBSixDQUFVeEYsU0FBUSxNQUFSLEdBQWdCLGdCQUFNM0IsZUFBTixFQUExQixFQUFtRCxLQUFLdEIsRUFBeEQsRUFBNEQsSUFBNUQsQ0FBUjtBQUNBaUQsbUJBQVcsZ0JBQU1rQixJQUFOLEdBQWEsSUFBeEI7QUFDRDs7QUFFRCxVQUFJa0osVUFBVWpOLEtBQWQ7QUFDQSxVQUFJa04sU0FBUzNKLE9BQU80SixNQUFQLENBQWNuTixLQUFkLEVBQXFCLEtBQUtBLEtBQTFCLENBQWI7QUFDQSxVQUFJNUIsaUJBQWlCLGdCQUFNRCxPQUFOLENBQWNDLGNBQW5DO0FBQ0EsVUFBSWdQLG9CQUFvQixLQUFLekgsV0FBTCxDQUFpQnlILGlCQUF6QztBQUNBLFVBQUlDLFNBQVMsS0FBSzFILFdBQUwsQ0FBaUIwSCxNQUE5Qjs7QUFFQSxVQUFHLEtBQUsxSCxXQUFMLENBQWlCNUUsUUFBcEIsRUFBOEI7QUFDNUIsd0JBQU1ELFdBQU4sQ0FBa0IsS0FBS2xCLEVBQXZCLEVBQTJCLEtBQUsrRixXQUFMLENBQWlCNUUsUUFBNUM7QUFDRDs7QUFFRCxVQUFHLEtBQUs0RSxXQUFMLENBQWlCZ0gsV0FBcEIsRUFBaUM7QUFDL0IsYUFBS0MsU0FBTCxHQUFpQixLQUFLaE4sRUFBTCxDQUFRcUIsU0FBekI7QUFDQSxhQUFLckIsRUFBTCxDQUFRcUIsU0FBUixHQUFvQixFQUFwQjtBQUNEOztBQUVELFVBQUcsS0FBSzBFLFdBQUwsQ0FBaUJ2SCxjQUFqQixLQUFvQzZELFNBQXZDLEVBQWtEO0FBQ2hEN0QseUJBQWlCLEtBQUt1SCxXQUFMLENBQWlCdkgsY0FBbEM7QUFDRCxPQUZELE1BR0ssSUFBR2lLLE1BQU1qSyxjQUFOLEtBQXlCNkQsU0FBNUIsRUFBdUM7QUFDMUM3RCx5QkFBaUJpSyxNQUFNakssY0FBdkI7QUFDRDs7QUFFRCxXQUFLNk8sT0FBTCxHQUFlQSxPQUFmO0FBQ0EsV0FBS0ssUUFBTCxHQUFnQkQsTUFBaEI7QUFDQSxXQUFLRSxnQkFBTCxHQUF3Qm5QLGNBQXhCO0FBQ0EsV0FBS3lOLG1CQUFMLEdBQTJCdUIsaUJBQTNCOztBQUVBLHNCQUFNck4sUUFBTixDQUFlQyxLQUFmOztBQUVBLFVBQUc1QixjQUFILEVBQW1CO0FBQ2pCNEIsZ0JBQVEsS0FBS3dOLGVBQUwsQ0FBcUJOLE1BQXJCLEVBQTZCLEVBQTdCLENBQVI7QUFDRCxPQUZELE1BR0s7QUFDSGxOLGdCQUFRLEtBQUt5TixTQUFMLENBQWVQLE1BQWYsRUFBdUIsRUFBdkIsQ0FBUjtBQUNEOztBQUVELFdBQUtsTixLQUFMLEdBQWFBLEtBQWI7QUFDRDs7QUFFRDs7Ozs7Ozs7NkNBS3lCO0FBQUE7O0FBQ3ZCLFdBQUswTixpQkFBTCxHQUF5QixHQUFHQyxNQUFILENBQVUsZ0JBQU10TyxxQkFBaEIsRUFBdUMsS0FBS3NHLFdBQUwsQ0FBaUIrSCxpQkFBeEQsQ0FBekI7O0FBRUEsVUFBSUUsVUFBVSxTQUFWQSxPQUFVLENBQUNoTyxFQUFELEVBQVE7QUFDcEIsYUFBSyxJQUFJK0IsSUFBSSxDQUFSLEVBQVdvSSxRQUFRbkssR0FBR2lPLFVBQXRCLEVBQWtDak0sSUFBSW1JLE1BQU16SCxNQUFqRCxFQUF5RFgsSUFBSUMsQ0FBN0QsRUFBZ0VELEdBQWhFLEVBQXFFO0FBQ25FLGNBQUlqQixPQUFPcUosTUFBTXBJLENBQU4sQ0FBWDs7QUFFQSxjQUFHLE9BQUsrTCxpQkFBTCxDQUF1QkksT0FBdkIsQ0FBK0JwTixLQUFLcU4sUUFBcEMsS0FBaUQsQ0FBQyxDQUFyRCxFQUF3RDtBQUN0RCxnQkFBR25PLEdBQUdvTyxZQUFILGNBQTJCdE4sS0FBS3FOLFFBQWhDLENBQUgsRUFBZ0Q7QUFDOUM7QUFDRDs7QUFFRG5PLGVBQUdxTyxZQUFILGNBQTJCdk4sS0FBS3FOLFFBQWhDLEVBQTRDbk8sR0FBR3FELFlBQUgsQ0FBZ0J2QyxLQUFLcU4sUUFBckIsS0FBa0NyTixLQUFLcU4sUUFBbkY7QUFDQW5PLGVBQUdzTyxlQUFILENBQW1CeE4sS0FBS3FOLFFBQXhCO0FBQ0Q7QUFDRjs7QUFFRCxhQUFJLElBQUlwTSxLQUFJLENBQVIsRUFBV0MsS0FBSWhDLEdBQUdzRSxRQUFILENBQVk1QixNQUEvQixFQUF1Q1gsS0FBSUMsRUFBM0MsRUFBOENELElBQTlDLEVBQW1EO0FBQ2pELGNBQUl3QyxRQUFRdkUsR0FBR3NFLFFBQUgsQ0FBWXZDLEVBQVosQ0FBWjs7QUFFQSxjQUFHLENBQUN3QyxNQUFNdkQsT0FBVixFQUFtQjtBQUNqQmdOLG9CQUFRekosS0FBUjtBQUNEO0FBQ0Y7QUFDRixPQXJCRDs7QUF1QkF5SixjQUFRLEtBQUtoTyxFQUFiO0FBQ0Q7O0FBRUQ7Ozs7Ozs7O2tDQUtjO0FBQ1osV0FBSSxJQUFJK0IsSUFBSSxDQUFSLEVBQVdDLElBQUksS0FBSzBMLFFBQUwsQ0FBY2hMLE1BQWpDLEVBQXlDWCxJQUFJQyxDQUE3QyxFQUFnREQsR0FBaEQsRUFBcUQ7QUFDbkQsWUFBSXdNLEtBQUssS0FBS2IsUUFBTCxDQUFjM0wsQ0FBZCxDQUFUOztBQUVBLFNBQUMsUUFBUXlNLElBQVIsQ0FBYUQsRUFBYixDQUFELEtBQXNCQSxLQUFLLFFBQVFBLEVBQW5DOztBQUVBLFlBQUcsQ0FBQyxLQUFLdk8sRUFBTCxDQUFRb08sWUFBUixDQUFxQkcsRUFBckIsQ0FBSixFQUE4QjtBQUM1QixlQUFLdk8sRUFBTCxDQUFRcU8sWUFBUixDQUFxQkUsRUFBckIsRUFBeUIsRUFBekI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQ7Ozs7Ozs7O21DQUtlO0FBQ2IsVUFBSUUsVUFBVSxnQkFBTS9OLGVBQU4sQ0FBc0IsS0FBS1YsRUFBM0IsQ0FBZDs7QUFFQSxVQUFHLENBQUN5TyxRQUFRL0wsTUFBWixFQUFvQjtBQUNsQjtBQUNEOztBQUVELFVBQUl5SixZQUFZLEtBQUtkLFFBQUwsS0FBa0JvRCxRQUFRLENBQVIsQ0FBbEM7QUFDQSxVQUFJQyxpQkFBaUIsSUFBckI7O0FBRUEsV0FBSSxJQUFJM00sSUFBSSxDQUFSLEVBQVdDLElBQUl5TSxRQUFRL0wsTUFBM0IsRUFBbUNYLElBQUlDLENBQXZDLEVBQTBDRCxHQUExQyxFQUErQztBQUM3QyxZQUFJdUssU0FBU21DLFFBQVExTSxDQUFSLENBQWI7O0FBRUEsWUFBRyxDQUFDdUssT0FBT3RMLE9BQVAsQ0FBZStFLFdBQWYsQ0FBMkI0SSxXQUEvQixFQUE0QztBQUMxQ0QsMkJBQWlCcEMsTUFBakI7O0FBRUE7QUFDRDtBQUNGOztBQUVELFdBQUtwQixXQUFMLENBQWlCaUIsU0FBakIsR0FBNkJBLFNBQTdCO0FBQ0FBLG1CQUFhLEtBQUt5QyxRQUFMLEVBQWI7O0FBRUEsVUFBRyxLQUFLN0ksV0FBTCxDQUFpQjRJLFdBQXBCLEVBQWlDO0FBQy9CLGFBQUtsRCxxQkFBTCxHQUE2QmlELGVBQWUxTixPQUE1QztBQUNEOztBQUVELFdBQUtrTCxnQkFBTCxHQUF3QndDLGNBQXhCO0FBQ0EsV0FBS3JELFFBQUwsR0FBZ0JvRCxRQUFRLENBQVIsQ0FBaEI7QUFDQSxXQUFLbkQsU0FBTCxHQUFpQm1ELE9BQWpCO0FBQ0EsV0FBS3JPLEtBQUwsQ0FBV2lMLFFBQVgsR0FBc0IsS0FBS2EsZ0JBQUwsQ0FBc0JsTCxPQUF0QixDQUE4QlosS0FBcEQ7QUFDQSxPQUFDLEtBQUs2SyxhQUFOLElBQXVCLEtBQUtJLFFBQUwsQ0FBY3JLLE9BQWQsQ0FBc0I2TixVQUF0QixDQUFpQyxLQUFLN08sRUFBdEMsQ0FBdkI7QUFDQTJELGFBQU9tTCxjQUFQLENBQXNCLEtBQUsxTyxLQUEzQixFQUFrQyxLQUFLaUwsUUFBTCxDQUFjckssT0FBZCxDQUFzQnFNLE9BQXhEO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OzsrQkFNV3JOLEUsRUFBSTtBQUNiLFdBQUtvTCxVQUFMLENBQWdCbkssSUFBaEIsQ0FBcUJqQixFQUFyQjtBQUNEOztBQUVEOzs7Ozs7Ozs7a0NBTWNBLEUsRUFBSTtBQUNoQixXQUFJLElBQUkrQixJQUFJLENBQVIsRUFBV0MsSUFBSSxLQUFLb0osVUFBTCxDQUFnQjFJLE1BQW5DLEVBQTJDWCxJQUFJQyxDQUEvQyxFQUFrREQsR0FBbEQsRUFBdUQ7QUFDckQsWUFBSXdDLFFBQVEsS0FBSzZHLFVBQUwsQ0FBZ0JySixDQUFoQixDQUFaOztBQUVBLFlBQUd3QyxVQUFVdkUsRUFBYixFQUFpQjtBQUNmLGVBQUtvTCxVQUFMLENBQWdCeEUsTUFBaEIsQ0FBdUI3RSxDQUF2QixFQUEwQixDQUExQjtBQUNBQTtBQUNBQztBQUNEO0FBQ0Y7QUFDRjs7QUFFRDs7Ozs7Ozs7OzswQ0FPc0J5SSxVLEVBQVk7QUFDaEMsYUFBT0EsVUFBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7O3NDQU9rQjNKLEksRUFBTTtBQUN0QixVQUFJLENBQUM2QyxPQUFPN0QsSUFBUCxDQUFZZ0IsS0FBS2lPLFlBQWpCLEVBQStCck0sTUFBcEMsRUFBNEM7QUFDMUMsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsV0FBSyxJQUFJYixDQUFULElBQWNmLEtBQUtpTyxZQUFuQixFQUFpQztBQUMvQixZQUFHLENBQUNqTyxLQUFLaU8sWUFBTCxDQUFrQmpOLGNBQWxCLENBQWlDRCxDQUFqQyxDQUFKLEVBQXlDO0FBQ3ZDO0FBQ0Q7O0FBRUQsWUFBSUksT0FBT25CLEtBQUtpTyxZQUFMLENBQWtCbE4sQ0FBbEIsQ0FBWDtBQUNBLFlBQUlZLFFBQVEsZ0JBQU11TSxpQkFBTixDQUF3Qi9NLEtBQUtuQyxJQUE3QixFQUFtQ21DLEtBQUtFLFNBQUwsQ0FBZWtMLE9BQWxELENBQVo7O0FBRUEsWUFBRyxDQUFDLGdCQUFNNEIsb0JBQU4sQ0FBMkJ4TSxLQUEzQixFQUFrQ1IsS0FBS1EsS0FBdkMsRUFBOENSLEtBQUtpTixJQUFuRCxFQUF5RCxnQkFBTUEsSUFBTixDQUFXek0sS0FBWCxDQUF6RCxDQUFKLEVBQWlGO0FBQy9FLGlCQUFPLElBQVA7QUFDRDtBQUNGOztBQUVELGFBQU8sS0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7Ozs7Z0RBUzRCM0IsSSxFQUFNaEIsSSxFQUFNMkMsSyxFQUFPO0FBQzdDLFVBQUlSLE9BQU8sS0FBS2tOLGlCQUFMLENBQXVCck8sSUFBdkIsRUFBNkJoQixJQUE3QixDQUFYOztBQUVBLFVBQUcsQ0FBQ21DLElBQUosRUFBVTtBQUNSLGVBQU8sSUFBUDtBQUNEOztBQUVELGFBQU8sQ0FBQyxnQkFBTWdOLG9CQUFOLENBQTJCeE0sS0FBM0IsRUFBa0NSLEtBQUtRLEtBQXZDLEVBQThDUixLQUFLaU4sSUFBbkQsRUFBeUQsZ0JBQU1BLElBQU4sQ0FBV3pNLEtBQVgsQ0FBekQsQ0FBUjtBQUNEOztBQUVEOzs7Ozs7Ozs7OytCQU9XM0IsSSxFQUFNO0FBQUE7O0FBQ2YsVUFBSXNPLFVBQVUsQ0FBZDtBQUNBLFVBQUlDLHVCQUFKO0FBQ0EsVUFBSTVFLG1CQUFKOztBQUVBLFVBQUczSixLQUFLd08sV0FBTCxDQUFpQmIsT0FBakIsQ0FBeUIsVUFBQ2MsR0FBRDtBQUFBLGVBQVNBLElBQUl6RSxTQUFiO0FBQUEsT0FBekIsRUFBaURwSSxNQUFwRCxFQUE0RDtBQUMxRCxlQUFPNUIsS0FBSzBPLFlBQVo7QUFDRDs7QUFFRCxVQUFHLEVBQUUxTyxnQkFBZ0I1QixPQUFPdVEsSUFBekIsS0FBa0MzTyxLQUFLd08sV0FBTCxDQUFpQnhFLFNBQXRELEVBQWlFO0FBQy9ELGVBQU9oSyxLQUFLME8sWUFBWjtBQUNEOztBQUVELFVBQUk3TixNQUFNYixLQUFLME8sWUFBTCxDQUFrQnBPLE9BQWxCLENBQTBCaUoscUJBQTFCLEVBQWlELFVBQUNxRixDQUFELEVBQUlDLENBQUosRUFBVTtBQUNuRVA7O0FBRUEsWUFBSVEsaUJBQUo7QUFDQSxZQUFJaE4sbUJBQUo7QUFDQSxZQUFJaU4sbUJBQW1CLEVBQXZCO0FBQ0EsWUFBSUMsYUFBYWhQLEtBQUt3TyxXQUFMLENBQWlCUyxxQkFBakIsQ0FBdUNKLENBQXZDLENBQWpCOztBQUVBLHdCQUFNM1EsWUFBTixHQUFxQixFQUFFOEIsTUFBTUEsSUFBUixFQUFja1AsTUFBTSxFQUFwQixFQUFyQjs7QUFFQSxZQUFJO0FBQ0ZKLHFCQUFXLE9BQUs3SixXQUFMLENBQWlCa0ssS0FBakIsQ0FBdUIsT0FBS3hFLHFCQUFMLENBQTJCckwsS0FBbEQsRUFBeUQwUCxVQUF6RCxDQUFYO0FBQ0QsU0FGRCxDQUdBLE9BQU96SCxHQUFQLEVBQVk7QUFDVixnQkFBTUEsR0FBTjtBQUNEOztBQUVEekYscUJBQWEsZ0JBQU01RCxZQUFOLEdBQW9CLGdCQUFNQSxZQUFOLENBQW1CZ1IsSUFBdkMsR0FBNkMsRUFBMUQ7QUFDQSx3QkFBTWhSLFlBQU4sQ0FBbUJnUixJQUFuQixHQUEwQixJQUExQjtBQUNBLHdCQUFNaFIsWUFBTixHQUFxQixJQUFyQjs7QUFFQSxhQUFJLElBQUkrQyxJQUFJYSxXQUFXRixNQUFYLEdBQW9CLENBQWhDLEVBQW1DWCxLQUFLLENBQXhDLEVBQTJDQSxHQUEzQyxFQUFnRDtBQUM5QyxjQUFJaUcsT0FBT3BGLFdBQVdiLENBQVgsQ0FBWDtBQUNBLGNBQUltTyxPQUFVbEksS0FBSzdGLFNBQUwsQ0FBZWtMLE9BQWYsQ0FBdUJoTixNQUFqQyxTQUEyQzJILEtBQUttSSxVQUFwRDs7QUFFQSxjQUFHbkksS0FBS29JLFVBQVIsRUFBb0I7QUFDbEI7QUFDRDs7QUFFRCxjQUFHUCxpQkFBaUJLLElBQWpCLENBQUgsRUFBMkI7QUFDekI7QUFDRDs7QUFFRCxjQUFJRyxjQUFjLGdCQUFNckIsaUJBQU4sQ0FBd0JoSCxLQUFLeUcsT0FBN0IsRUFBc0N6RyxLQUFLN0YsU0FBTCxDQUFla0wsT0FBckQsQ0FBbEI7QUFDQSxjQUFJaUQsZ0JBQWdCeFAsS0FBSzBLLGFBQUwsSUFBc0IxSyxLQUFLd08sV0FBL0M7O0FBRUEsY0FBRyxnQkFBTWlCLFlBQU4sQ0FBbUJGLFdBQW5CLEtBQW1DckksS0FBSzdGLFNBQUwsS0FBbUJtTyxjQUFjN0UscUJBQXZFLEVBQThGO0FBQzVGO0FBQ0Q7O0FBRUQsY0FBSStFLE9BQU94SSxLQUFLN0YsU0FBTCxDQUFlc08sY0FBZixDQUE4QnpJLEtBQUtsSSxJQUFuQyxFQUF5Q2dCLElBQXpDLENBQVg7QUFDQSxjQUFJMkIsUUFBUSxnQkFBTXVNLGlCQUFOLENBQXdCaEgsS0FBS2xJLElBQTdCLEVBQW1Da0ksS0FBSzdGLFNBQUwsQ0FBZWtMLE9BQWxELENBQVo7O0FBRUEsY0FBRyxDQUFDbUQsSUFBSixFQUFVO0FBQ1J4SSxpQkFBSzdGLFNBQUwsQ0FBZXVPLE1BQWYsQ0FBc0IxSSxLQUFLbEksSUFBM0IsRUFBaUMsRUFBRWdCLE1BQU1BLElBQVIsRUFBakM7QUFDRDs7QUFFRGtILGVBQUs3RixTQUFMLENBQWV3TyxpQkFBZixDQUFpQzdQLElBQWpDLEVBQXVDa0gsS0FBS2xJLElBQTVDLEVBQWtEMkMsS0FBbEQ7QUFDQW9OLDJCQUFpQkssSUFBakIsSUFBeUIsSUFBekI7QUFDRDs7QUFFREwsMkJBQW1CLElBQW5CO0FBQ0FqTixxQkFBYSxJQUFiOztBQUVBLFlBQUc5QixnQkFBZ0I1QixPQUFPdVEsSUFBMUIsRUFBZ0M7QUFDOUJoRix1QkFBYWlGLENBQWI7QUFDQUwsMkJBQWlCTyxRQUFqQjs7QUFFQSxpQkFBTyxnQkFBTWdCLGtCQUFOLENBQXlCaEIsUUFBekIsQ0FBUDtBQUNEOztBQUVELFlBQUcsUUFBT0EsUUFBUCx5Q0FBT0EsUUFBUCxNQUFtQixRQUF0QixFQUFnQztBQUM5QixjQUFJO0FBQ0YsbUJBQU9pQixLQUFLQyxTQUFMLENBQWVsQixRQUFmLENBQVA7QUFDRCxXQUZELENBR0EsT0FBTW1CLENBQU4sRUFBUztBQUNQLG1CQUFPbkIsUUFBUDtBQUNEO0FBQ0Y7O0FBRUQsZUFBT0EsUUFBUDtBQUNELE9BdkVTLENBQVY7O0FBeUVBLFVBQUc5TyxnQkFBZ0I1QixPQUFPdVEsSUFBMUIsRUFBZ0M7QUFDOUIsWUFBSWhOLFFBQVFkLEdBQVo7QUFDQSxZQUFJcVAscUJBQXFCLEtBQXpCOztBQUVBLFlBQUc1QixPQUFILEVBQVk7QUFDVnRPLGVBQUttUSxhQUFMLEdBQXFCLElBQXJCO0FBQ0Q7O0FBRUQsWUFBRzdCLFdBQVcsQ0FBWCxJQUFnQjNFLFVBQWhCLElBQThCM0osS0FBSzBPLFlBQUwsSUFBcUIvRSxVQUF0RCxFQUFrRTtBQUNoRWhJLGtCQUFRNE0sY0FBUjtBQUNEOztBQUVELFlBQUk2QixpQkFBaUJwUSxLQUFLcU4sUUFBTCxDQUFjL00sT0FBZCxDQUFzQixnQkFBdEIsRUFBd0MsSUFBeEMsQ0FBckI7O0FBRUEsWUFBRzhQLGtCQUFrQnBRLEtBQUtxTixRQUExQixFQUFvQztBQUNsQzZDLCtCQUFxQixJQUFyQjtBQUNBdk8sa0JBQVEsQ0FBQyxDQUFDQSxLQUFWO0FBQ0Q7O0FBRUQsWUFBRzNCLEtBQUtxUSxhQUFSLEVBQXVCO0FBQ3JCLGNBQUloUCxZQUFZckIsS0FBS3FRLGFBQXJCOztBQUVBaFAsb0JBQVVpUCx3QkFBVixHQUFxQyxJQUFyQztBQUNBalAsb0JBQVVnSSxLQUFWLENBQWdCLGdCQUFNa0gsV0FBTixDQUFrQkgsY0FBbEIsQ0FBaEIsSUFBcUR6TyxLQUFyRDtBQUNBTixvQkFBVWlQLHdCQUFWLEdBQXFDLEtBQXJDOztBQUVBLGNBQUlqUCxVQUFVMEksWUFBZCxFQUE0QjtBQUMxQiw0QkFBTXBKLE9BQU4sQ0FBYyxZQUFNO0FBQ2xCVSx3QkFBVWdJLEtBQVYsQ0FBZ0JtSCxTQUFoQixJQUE2Qm5QLFVBQVVnSSxLQUFWLENBQWdCbUgsU0FBaEIsQ0FBMEJ6RSxPQUExQixDQUFrQyxFQUFFdEgsS0FBSzJMLGNBQVAsRUFBdUJ6TyxPQUFPQSxLQUE5QixFQUFsQyxDQUE3QjtBQUNBTix3QkFBVW9QLE9BQVYsQ0FBa0JMLGNBQWxCLEVBQWtDek8sS0FBbEM7O0FBRUEsa0JBQUk4QyxNQUFNLGdCQUFNOEwsV0FBTixDQUFrQkgsY0FBbEIsQ0FBVjtBQUNBLGtCQUFJTSxXQUFXak0sSUFBSSxDQUFKLEVBQU9rTSxXQUFQLEtBQXVCbE0sSUFBSWlCLEtBQUosQ0FBVSxDQUFWLENBQXRDO0FBQ0Esa0JBQUlrTCxTQUFTLFlBQVlGLFFBQXpCO0FBQ0Esa0JBQUlHLFdBQVcsY0FBY0gsUUFBN0I7O0FBRUFyUCx3QkFBVWdJLEtBQVYsQ0FBZ0J3SCxRQUFoQixLQUE2QnhQLFVBQVVnSSxLQUFWLENBQWdCd0gsUUFBaEIsRUFBMEI5RSxPQUExQixDQUFrQ3BLLEtBQWxDLENBQTdCOztBQUVBLGtCQUFJLE9BQU9OLFVBQVV1UCxNQUFWLENBQVAsSUFBNEIsVUFBaEMsRUFBNEM7QUFDMUN2UCwwQkFBVXVQLE1BQVYsRUFBa0JqUCxLQUFsQjtBQUNEO0FBQ0YsYUFkRDtBQWVEO0FBQ0YsU0F4QkQsTUF5QkssSUFBR3VPLGtCQUFILEVBQXVCO0FBQzFCLGNBQUlZLFVBQVU5USxLQUFLK1EsU0FBbkI7QUFDQSxjQUFJQyxPQUFPLGdCQUFNVCxXQUFOLENBQWtCSCxjQUFsQixDQUFYOztBQUVBek8sa0JBQU9tUCxRQUFRdkQsWUFBUixDQUFxQnlELElBQXJCLEVBQTJCLE1BQTNCLENBQVAsR0FBMkNGLFFBQVF0RCxlQUFSLENBQXdCd0QsSUFBeEIsQ0FBM0M7QUFDRDtBQUNGOztBQUVELGFBQU9uUSxHQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7cUNBT2lCN0IsSSxFQUE4QjtBQUFBLFVBQXhCaVMsY0FBd0IsdUVBQVAsS0FBTzs7QUFDN0MsVUFBSTNSLFFBQVEsS0FBS2lOLE9BQWpCO0FBQ0EsVUFBSXpMLFFBQVEsRUFBWjs7QUFFQSxVQUFHLENBQUNtUSxjQUFKLEVBQW9CO0FBQ2xCLFlBQUlDLFlBQVksRUFBaEI7O0FBRUEsYUFBSyxJQUFJalEsSUFBSSxDQUFSLEVBQVdDLElBQUlsQyxLQUFLNEMsTUFBekIsRUFBaUNYLElBQUlDLENBQXJDLEVBQXdDRCxHQUF4QyxFQUE2QztBQUMzQyxjQUFJd0QsTUFBTXpGLEtBQUtpQyxDQUFMLENBQVY7QUFDQSxjQUFJVSxjQUFKOztBQUVBdVAsbURBQWdCQSxTQUFoQixJQUEyQnpNLEdBQTNCO0FBQ0E5QyxrQkFBUSxnQkFBTXVNLGlCQUFOLENBQXdCZ0QsU0FBeEIsRUFBbUM1UixLQUFuQyxDQUFSO0FBQ0F3QixnQkFBTVgsSUFBTixDQUFXLEVBQUVuQixNQUFNa1MsU0FBUixFQUFtQnZQLE9BQU9BLEtBQTFCLEVBQVg7QUFDRDtBQUNGLE9BWEQsTUFZSztBQUNIYixjQUFNWCxJQUFOLENBQVcsRUFBRW5CLE1BQU1BLElBQVIsRUFBYzJDLE9BQU8sZ0JBQU11TSxpQkFBTixDQUF3QmxQLElBQXhCLEVBQThCTSxLQUE5QixDQUFyQixFQUFYO0FBQ0Q7O0FBRUQsVUFBSTZSLGNBQWNyUSxNQUFNYyxNQUF4Qjs7QUFFQSxVQUFJd1AsYUFBYSxTQUFiQSxVQUFhLENBQUNOLE9BQUQsRUFBYTtBQUM1QixZQUFJelAsWUFBWXlQLFFBQVE1USxPQUF4Qjs7QUFFQSxhQUFLLElBQUkwTyxJQUFJLENBQWIsRUFBZ0JBLElBQUl1QyxXQUFwQixFQUFpQ3ZDLEdBQWpDLEVBQXNDO0FBQ3BDLGNBQUl6TixPQUFPTCxNQUFNOE4sQ0FBTixDQUFYO0FBQ0EsY0FBSTFILE9BQU83RixVQUFVZ1EsU0FBVixDQUFvQmxRLEtBQUtuQyxJQUF6QixDQUFYOztBQUVBLGNBQUksQ0FBQ2tJLElBQUQsSUFBUyxDQUFDQSxLQUFLb0ssTUFBbkIsRUFBMkI7QUFDekI7QUFDRDs7QUFFRCxlQUFLLElBQUl2USxJQUFJLENBQVIsRUFBV3dRLElBQUlySyxLQUFLb0ssTUFBTCxDQUFZMVAsTUFBaEMsRUFBd0NiLElBQUl3USxDQUE1QyxFQUErQ3hRLEdBQS9DLEVBQW9EO0FBQ2xELGdCQUFJMk8sT0FBT3hJLEtBQUtvSyxNQUFMLENBQVl2USxDQUFaLENBQVg7O0FBRUEsZ0JBQUdNLFVBQVVtUSwyQkFBVixDQUFzQzlCLEtBQUsxUCxJQUEzQyxFQUFpRG1CLEtBQUtuQyxJQUF0RCxFQUE0RG1DLEtBQUtRLEtBQWpFLENBQUgsRUFBNEU7QUFDMUVOLHdCQUFVZ0osY0FBVixHQUEyQixJQUEzQjtBQUNBaEosd0JBQVVvUSxjQUFWLENBQXlCL0IsS0FBSzFQLElBQTlCOztBQUVBLG1CQUFJLElBQUkwUixFQUFSLElBQWNoQyxLQUFLMVAsSUFBTCxDQUFVaU8sWUFBeEIsRUFBc0M7QUFDcEMsb0JBQUcsQ0FBQ3lCLEtBQUsxUCxJQUFMLENBQVVpTyxZQUFWLENBQXVCak4sY0FBdkIsQ0FBc0MwUSxFQUF0QyxDQUFKLEVBQStDO0FBQzdDO0FBQ0Q7O0FBRUQsb0JBQUlDLFFBQVFqQyxLQUFLMVAsSUFBTCxDQUFVaU8sWUFBVixDQUF1QnlELEVBQXZCLENBQVo7QUFDQSxvQkFBSS9QLFNBQVEsZ0JBQU11TSxpQkFBTixDQUF3QnlELE1BQU0zUyxJQUE5QixFQUFvQzJTLE1BQU10USxTQUFOLENBQWdCa0wsT0FBcEQsQ0FBWjs7QUFFQW9GLHNCQUFNdFEsU0FBTixDQUFnQndPLGlCQUFoQixDQUFrQ0gsS0FBSzFQLElBQXZDLEVBQTZDMlIsTUFBTTNTLElBQW5ELEVBQXlEMkMsTUFBekQ7QUFDRDs7QUFFRE4sd0JBQVVnSixjQUFWLEdBQTJCLElBQTNCO0FBQ0Q7QUFDRjtBQUNGOztBQUVELGVBQU9oSixTQUFQO0FBQ0QsT0FuQ0Q7O0FBcUNBLFVBQUl5TixXQUFXLFNBQVhBLFFBQVcsQ0FBQ3hMLFFBQUQsRUFBYztBQUMzQixhQUFLLElBQUlyQyxNQUFJLENBQVIsRUFBV0MsTUFBSW9DLFNBQVMxQixNQUE3QixFQUFxQ1gsTUFBSUMsR0FBekMsRUFBNENELEtBQTVDLEVBQWlEO0FBQy9DLGNBQUlJLFlBQVkrUCxXQUFXOU4sU0FBU3JDLEdBQVQsQ0FBWCxDQUFoQjs7QUFFQTZOLG1CQUFTek4sVUFBVWlKLFVBQW5CO0FBQ0Q7QUFDRixPQU5EOztBQVFBOEcsaUJBQVcsS0FBS2xTLEVBQWhCO0FBQ0E0UCxlQUFTLEtBQUt4RSxVQUFkO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7O3FDQVFpQnRMLEksRUFBTTJDLEssRUFBMEI7QUFBQTs7QUFBQSxVQUFuQlAsU0FBbUIsdUVBQVAsS0FBTzs7QUFDL0MsVUFBSThGLE9BQU8sS0FBS21LLFNBQUwsQ0FBZXJTLElBQWYsQ0FBWDs7QUFFQSxVQUFJNFMsU0FBUyxTQUFUQSxNQUFTLENBQUNDLEdBQUQsRUFBTWxFLE9BQU4sRUFBa0I7QUFDN0IsYUFBSSxJQUFJNU0sQ0FBUixJQUFhOFEsR0FBYixFQUFrQjtBQUNoQixjQUFHLENBQUNBLElBQUk3USxjQUFKLENBQW1CRCxDQUFuQixDQUFELElBQTBCQSxLQUFLLFFBQWxDLEVBQTRDO0FBQzFDO0FBQ0Q7O0FBRUQsY0FBSStRLFFBQVEsR0FBRzdFLE1BQUgsQ0FBVVUsT0FBVixFQUFtQixDQUFDNU0sQ0FBRCxDQUFuQixDQUFaO0FBQ0EsY0FBSWdSLFNBQVNELE1BQU1wTSxLQUFOLEVBQWI7QUFDQSxjQUFJc00sYUFBYSxLQUFqQjtBQUNBLGNBQUl0USxNQUFNbVEsSUFBSTlRLENBQUosQ0FBVjtBQUNBLGNBQUlrUixlQUFKOztBQUVBRixpQkFBT0csS0FBUDtBQUNBRCxtQkFBUyxnQkFBTUUsaUJBQU4sQ0FBd0JKLE1BQXhCLEVBQWdDcFEsS0FBaEMsQ0FBVDs7QUFFQSxjQUFHQSxTQUFTLFFBQU9BLEtBQVAseUNBQU9BLEtBQVAsTUFBZ0IsUUFBekIsSUFBcUMsQ0FBQ3NRLE1BQXpDLEVBQWlEO0FBQy9DRCx5QkFBYSxJQUFiO0FBQ0Q7O0FBRUQsY0FBR3RRLE9BQU8sUUFBT0EsR0FBUCx5Q0FBT0EsR0FBUCxNQUFjLFFBQXhCLEVBQWtDO0FBQ2hDa1EsbUJBQU9sUSxHQUFQLEVBQVlvUSxLQUFaO0FBQ0Q7O0FBRUQsaUJBQUtNLGdCQUFMLENBQXNCTixLQUF0QixFQUE2QixJQUE3Qjs7QUFFQSxjQUFHblEsVUFBVSxJQUFWLElBQWtCLFFBQU9BLEtBQVAseUNBQU9BLEtBQVAsTUFBZ0IsUUFBbEMsSUFBOEMsQ0FBQ3NRLE1BQWxELEVBQTBEO0FBQ3hELG1CQUFLSSxRQUFMLENBQWNQLEtBQWQ7QUFDQUUsMEJBQWMsZ0JBQU1NLG9CQUFOLENBQTJCUCxNQUEzQixFQUFtQ3BRLEtBQW5DLENBQWQ7QUFDRDtBQUNGO0FBQ0YsT0E5QkQ7O0FBZ0NBdUYsY0FBUTBLLE9BQU8xSyxJQUFQLEVBQWEsR0FBRytGLE1BQUgsQ0FBVWpPLElBQVYsQ0FBYixDQUFSO0FBQ0EsV0FBS29ULGdCQUFMLENBQXNCcFQsSUFBdEI7O0FBRUEsVUFBR29DLFNBQUgsRUFBYztBQUNaLGFBQUtpUixRQUFMLENBQWNyVCxJQUFkO0FBQ0FvQyxxQkFBYSxnQkFBTWtSLG9CQUFOLENBQTJCdFQsSUFBM0IsRUFBaUMsS0FBS3VOLE9BQXRDLENBQWI7QUFDRDtBQUNGOztBQUVEOzs7Ozs7Ozs7OztvQ0FRZ0J2TSxJLEVBQU1kLEUsRUFBSStRLEMsRUFBRztBQUMzQixVQUFJdEcsYUFBYUwsZ0JBQWdCaUosSUFBaEIsQ0FBcUJ2UyxLQUFLME8sWUFBMUIsQ0FBakI7QUFDQSxVQUFJSSxpQkFBSjs7QUFFQSxVQUFHLENBQUNuRixVQUFKLEVBQWdCO0FBQ2Q7QUFDRDs7QUFFRCxXQUFLTyxpQkFBTCxHQUF5QjtBQUN2QmhMLFlBQUlBLEVBRG1CO0FBRXZCbUMsbUJBQVcsSUFGWTtBQUd2QnVJLGVBQU9xRyxDQUhnQjtBQUl2QmpRLGNBQU1BO0FBSmlCLE9BQXpCOztBQU9BLFdBQUtxSyxjQUFMLEdBQXNCLElBQXRCO0FBQ0F5RSxpQkFBVyxLQUFLN0osV0FBTCxDQUFpQmtLLEtBQWpCLENBQXVCLEtBQUt4RSxxQkFBTCxDQUEyQnJMLEtBQWxELEVBQXlEcUssV0FBVyxDQUFYLENBQXpELEVBQXdFc0csQ0FBeEUsQ0FBWDtBQUNBLFdBQUsvRixpQkFBTCxHQUF5QixJQUF6Qjs7QUFFQSxhQUFPNEUsUUFBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7bUNBTWU5TyxJLEVBQU07QUFDbkIsVUFBRyxLQUFLd1MsaUJBQUwsQ0FBdUJ4UyxJQUF2QixDQUFILEVBQWlDO0FBQy9CQSxhQUFNQSxnQkFBZ0I1QixPQUFPdVEsSUFBeEIsR0FBK0IsT0FBL0IsR0FBd0MsV0FBN0MsSUFBNEQsS0FBSy9DLFVBQUwsQ0FBZ0I1TCxJQUFoQixDQUE1RDtBQUNEO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7OzBDQVFzQkEsSSxFQUFNZCxFLEVBQUl1VCxXLEVBQWE7QUFDM0MsVUFBRy9JLGlCQUFpQjBELE9BQWpCLENBQXlCcE4sS0FBS3FOLFFBQTlCLEtBQTJDLENBQUMsQ0FBL0MsRUFBa0Q7QUFDaEQ7QUFDRDs7QUFFRCxXQUFLM0IsZ0JBQUwsQ0FBc0IxTCxJQUF0QixFQUE0QmQsRUFBNUI7O0FBRUEsVUFBSXdULFlBQVkxUyxLQUFLcU4sUUFBTCxDQUFjL00sT0FBZCxDQUFzQixXQUF0QixFQUFtQyxJQUFuQyxDQUFoQjtBQUNBLFVBQUkrTSxXQUFXLGdCQUFNa0QsV0FBTixDQUFrQnZRLEtBQUtxTixRQUF2QixDQUFmO0FBQ0EsVUFBSWhNLFlBQVlvUixjQUFhQSxXQUFiLEdBQTBCLElBQTFDOztBQUVBLFVBQUdDLGFBQWExUyxLQUFLcU4sUUFBckIsRUFBK0I7QUFDN0IsWUFBR3JOLEtBQUsyUyxPQUFSLEVBQWlCO0FBQ2Y7QUFDRDs7QUFFRCxZQUFJQyxVQUFVLElBQUksZ0JBQU1sTCxZQUFWLENBQXVCZ0wsU0FBdkIsRUFBa0N4VCxFQUFsQyxFQUFzQ21DLFNBQXRDLENBQWQ7O0FBRUEsWUFBR3JCLEtBQUswTyxZQUFSLEVBQXNCO0FBQ3BCa0Usa0JBQVFsRCxJQUFSLENBQWEsVUFBQ08sQ0FBRCxFQUFPO0FBQ2xCLG1CQUFPNU8sVUFBVXdSLGVBQVYsQ0FBMEI3UyxJQUExQixFQUFnQ2QsRUFBaEMsRUFBb0MrUSxDQUFwQyxDQUFQO0FBQ0QsV0FGRDtBQUdEOztBQUVEalEsYUFBSzJTLE9BQUwsR0FBZUMsT0FBZjtBQUNBMVQsV0FBR3FPLFlBQUgsQ0FBZ0J2TixLQUFLcU4sUUFBckIsRUFBK0IsZ0JBQU15QyxrQkFBTixDQUF5QjhDLE9BQXpCLENBQS9COztBQUVBLFlBQUdILFdBQUgsRUFBZ0I7QUFDZCxlQUFLbkMsd0JBQUwsR0FBZ0MsSUFBaEM7QUFDQSxlQUFLakgsS0FBTCxDQUFXZ0UsUUFBWCxJQUF1QnVGLE9BQXZCO0FBQ0EsZUFBS3RDLHdCQUFMLEdBQWdDLEtBQWhDO0FBQ0Q7O0FBRUQ7QUFDRDs7QUFFRCxVQUFHbUMsV0FBSCxFQUFnQjtBQUNkelMsYUFBS3FRLGFBQUwsR0FBcUIsSUFBckI7QUFDQXJRLGFBQUswSyxhQUFMLEdBQXFCckosU0FBckI7QUFDRDs7QUFFRG5DLFNBQUdxTyxZQUFILENBQWdCdk4sS0FBS3FOLFFBQXJCLEVBQStCaE0sVUFBVXVLLFVBQVYsQ0FBcUI1TCxJQUFyQixDQUEvQjtBQUNEOztBQUVEOzs7Ozs7Ozs7OztxQ0FRaUJBLEksRUFBTWQsRSxFQUFJO0FBQ3pCLFVBQUdjLEtBQUs4UyxhQUFSLEVBQXVCO0FBQ3JCLGVBQU8sS0FBUDtBQUNEOztBQUVEOVMsV0FBSzBPLFlBQUwsR0FBb0IxTyxLQUFNQSxnQkFBZ0I1QixPQUFPdVEsSUFBeEIsR0FBK0IsT0FBL0IsR0FBd0MsV0FBN0MsQ0FBcEI7QUFDQTNPLFdBQUtpTyxZQUFMLEdBQW9CLEVBQXBCO0FBQ0FqTyxXQUFLMEssYUFBTCxHQUFxQixJQUFyQjtBQUNBMUssV0FBS3FRLGFBQUwsR0FBcUIsSUFBckI7QUFDQXJRLFdBQUsyUyxPQUFMLEdBQWUsSUFBZjtBQUNBM1MsV0FBS21RLGFBQUwsR0FBcUIsS0FBckI7QUFDQW5RLFdBQUs4UyxhQUFMLEdBQXFCLElBQXJCO0FBQ0E5UyxXQUFLd08sV0FBTCxHQUFtQixJQUFuQjtBQUNBeE8sV0FBSytRLFNBQUwsR0FBaUI3UixFQUFqQjs7QUFFQSxhQUFPLElBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs0Q0FPd0JBLEUsRUFBd0I7QUFBQSxVQUFwQnVULFdBQW9CLHVFQUFOLElBQU07O0FBQzlDLFdBQUssSUFBSXhSLElBQUksQ0FBUixFQUFXb0ksUUFBUW5LLEdBQUdpTyxVQUF0QixFQUFrQ2pNLElBQUltSSxNQUFNekgsTUFBakQsRUFBeURYLElBQUlDLENBQTdELEVBQWdFRCxHQUFoRSxFQUFxRTtBQUNuRSxhQUFLOFIscUJBQUwsQ0FBMkIxSixNQUFNcEksQ0FBTixDQUEzQixFQUFxQy9CLEVBQXJDLEVBQXlDdVQsV0FBekM7QUFDRDtBQUNGOztBQUVEOzs7Ozs7Ozt5Q0FLcUI7QUFBQTs7QUFDbkIsVUFBSU8sa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDdk8sR0FBRCxFQUFNOUMsS0FBTixFQUFtQztBQUFBLFlBQXRCUCxTQUFzQix1RUFBVixLQUFVOztBQUN2RCxZQUFHLE9BQUtrUCx3QkFBUixFQUFrQztBQUNoQztBQUNEOztBQUVELFlBQUl0USxPQUFPLE9BQUtkLEVBQUwsQ0FBUStULGdCQUFSLENBQXlCeE8sR0FBekIsQ0FBWDs7QUFFQSxZQUFHekUsSUFBSCxFQUFTO0FBQ1AsY0FBR0EsS0FBSzJTLE9BQVIsRUFBaUI7QUFDZjNTLGlCQUFLMlMsT0FBTCxDQUFhZixNQUFiO0FBQ0E1UixpQkFBSzJTLE9BQUwsR0FBZSxJQUFmO0FBQ0EzUyxpQkFBSzBPLFlBQUwsR0FBb0IvTSxLQUFwQjtBQUNEOztBQUVELGNBQUczQixLQUFLbVEsYUFBUixFQUF1QjtBQUNyQixtQkFBSzVGLFFBQUwsSUFBaUIsT0FBS0EsUUFBTCxDQUFjckssT0FBZCxDQUFzQnlLLHFCQUF0QixDQUE0Q3VJLGVBQTVDLENBQTRELENBQUNsVCxJQUFELENBQTVELENBQWpCO0FBQ0FBLGlCQUFLbVEsYUFBTCxHQUFxQixLQUFyQjtBQUNBblEsaUJBQUswTyxZQUFMLEdBQW9CL00sS0FBcEI7QUFDRDtBQUNGOztBQUVELFlBQUdQLFNBQUgsRUFBYztBQUNaLGlCQUFLbEMsRUFBTCxDQUFRc08sZUFBUixDQUF3Qi9JLEdBQXhCO0FBQ0QsU0FGRCxNQUdLLElBQUd6RSxJQUFILEVBQVM7QUFDWkEsZUFBSzJCLEtBQUwsR0FBYUEsS0FBYjtBQUNELFNBRkksTUFHQTtBQUNILGlCQUFLekMsRUFBTCxDQUFRcU8sWUFBUixDQUFxQjlJLEdBQXJCLEVBQTBCOUMsS0FBMUI7QUFDRDtBQUNGLE9BOUJEOztBQWdDQSxXQUFLMEgsS0FBTCxHQUFhLElBQUk4SixLQUFKLENBQVUsS0FBSzFJLE9BQWYsRUFBd0I7QUFDbkN4RCxhQUFLLGFBQUNtTSxNQUFELEVBQVMzTyxHQUFULEVBQWlCO0FBQ3BCLGNBQUdBLE9BQU8sV0FBVixFQUF1QjtBQUNyQixtQkFBTyxJQUFQO0FBQ0Q7O0FBRUQsaUJBQU8yTyxPQUFPM08sR0FBUCxDQUFQO0FBQ0QsU0FQa0M7QUFRbkM0TyxhQUFLLGFBQUNELE1BQUQsRUFBUzNPLEdBQVQsRUFBYzlDLEtBQWQsRUFBd0I7QUFDM0IsY0FBSTJSLFVBQVUsZ0JBQU1oUixVQUFOLENBQWlCbUMsR0FBakIsQ0FBZDs7QUFFQSxjQUFHLE9BQUt1SSxpQkFBTCxDQUF1QkksT0FBdkIsQ0FBK0JrRyxPQUEvQixLQUEyQyxDQUFDLENBQS9DLEVBQWtEO0FBQ2hEQSxtQ0FBcUJBLE9BQXJCOztBQUVBLGdCQUFHM1IsS0FBSCxFQUFVO0FBQ1IscUJBQUt6QyxFQUFMLENBQVFxTyxZQUFSLENBQXFCOUksR0FBckIsRUFBMEI5QyxLQUExQjtBQUNELGFBRkQsTUFHSztBQUNILHFCQUFLekMsRUFBTCxDQUFRc08sZUFBUixDQUF3Qi9JLEdBQXhCO0FBQ0Q7QUFDRjs7QUFFRDJPLGlCQUFPM08sR0FBUCxJQUFjOUMsS0FBZDtBQUNBcVIsMEJBQWdCTSxPQUFoQixFQUF5QixnQkFBTXhELGtCQUFOLENBQXlCbk8sS0FBekIsQ0FBekI7O0FBRUEsaUJBQU8sSUFBUDtBQUNELFNBMUJrQztBQTJCbkM0Uix3QkFBZ0Isd0JBQUNILE1BQUQsRUFBUzNPLEdBQVQsRUFBYzlDLEtBQWQsRUFBd0I7QUFDdEMsY0FBSTJSLFVBQVUsZ0JBQU1oUixVQUFOLENBQWlCbUMsR0FBakIsQ0FBZDs7QUFFQXVPLDBCQUFnQk0sT0FBaEIsRUFBeUIsZ0JBQU14RCxrQkFBTixDQUF5Qm5PLEtBQXpCLENBQXpCLEVBQTBELElBQTFEO0FBQ0EsaUJBQU95UixPQUFPM08sR0FBUCxDQUFQOztBQUVBLGlCQUFPLElBQVA7QUFDRDtBQWxDa0MsT0FBeEIsQ0FBYjtBQW9DRDs7QUFFRDs7Ozs7Ozs7Ozs7OEJBUVVvTixHLEVBQUtsRSxPLEVBQVM7QUFBQTs7QUFDdEIsYUFBTyxJQUFJd0YsS0FBSixDQUFVdEIsR0FBVixFQUFlO0FBQ3BCNUssYUFBSyxhQUFDbU0sTUFBRCxFQUFTM08sR0FBVCxFQUFpQjtBQUNwQixjQUFJQSxPQUFPLFdBQVgsRUFBd0I7QUFDdEIsbUJBQU8sSUFBUDtBQUNEOztBQUVELGNBQUlBLE9BQU8sVUFBWCxFQUF1QjtBQUNyQixtQkFBT29OLEdBQVA7QUFDRDs7QUFFRCxjQUFJcE4sT0FBTyxhQUFYLEVBQTBCO0FBQ3hCO0FBQ0Q7O0FBRUQsY0FBSUEsT0FBTyxRQUFYLEVBQXFCO0FBQ25CLG1CQUFPa0osT0FBUDtBQUNEOztBQUVELGNBQUcsT0FBS3RELGNBQVIsRUFBd0I7QUFDdEIsbUJBQU8rSSxPQUFPM08sR0FBUCxDQUFQO0FBQ0Q7O0FBRUQsY0FBRyxPQUFLK08sYUFBTCxDQUFtQi9PLEdBQW5CLENBQUgsRUFBNEI7QUFDMUIsbUJBQU8yTyxPQUFPM08sR0FBUCxDQUFQO0FBQ0Q7O0FBRUQsY0FBRyxPQUFPMk8sT0FBTzNPLEdBQVAsQ0FBUCxJQUFzQixVQUF6QixFQUFxQztBQUNuQyxnQkFBSWdQLGFBQWMsZ0JBQU1DLG9CQUFOLENBQTJCTixNQUEzQixFQUFtQzNPLEdBQW5DLENBQWxCOztBQUVBLGdCQUFHLENBQUMsZ0JBQU1rUCxhQUFOLENBQW9CRixVQUFwQixDQUFKLEVBQXFDO0FBQ25DQSx5QkFBV2hQLEdBQVgsSUFBa0IsZ0JBQU13QixlQUFOLENBQXNCd04sV0FBV2hQLEdBQVgsQ0FBdEIsQ0FBbEI7QUFDRDtBQUNGOztBQUVELGNBQUksZ0JBQU12RyxZQUFWLEVBQXdCO0FBQ3RCLGdCQUFJYyxPQUFPLEdBQUdpTyxNQUFILENBQVVVLE9BQVYsRUFBbUIsQ0FBQ2xKLEdBQUQsQ0FBbkIsQ0FBWDtBQUNBLGdCQUFJNkssYUFBYSxLQUFqQjs7QUFFQSxnQkFBRyxFQUFFN0ssT0FBTzJPLE1BQVQsQ0FBSCxFQUFxQjtBQUNuQkEscUJBQU8zTyxHQUFQLElBQWNsRCxTQUFkO0FBQ0QsYUFGRCxNQUdLLElBQUcsQ0FBQyxnQkFBTXFTLDJCQUFOLENBQWtDUixNQUFsQyxFQUEwQzNPLEdBQTFDLENBQUosRUFBb0Q7QUFDdkQ2SywyQkFBYSxJQUFiO0FBQ0Q7O0FBRUQsbUJBQUt1RSxVQUFMLENBQWdCLGdCQUFNM1YsWUFBTixDQUFtQmdSLElBQW5DLEVBQXlDbFEsSUFBekMsRUFBK0MyTyxPQUEvQyxFQUF3RHlGLE9BQU8zTyxHQUFQLENBQXhELEVBQXFFNkssVUFBckU7O0FBRUEsbUJBQU84RCxPQUFPM08sR0FBUCxDQUFQO0FBQ0Q7O0FBRUQsaUJBQU8yTyxPQUFPM08sR0FBUCxDQUFQO0FBQ0QsU0FuRG1CO0FBb0RwQjRPLGFBQUssYUFBQ0QsTUFBRCxFQUFTM08sR0FBVCxFQUFjOUMsS0FBZCxFQUF3QjtBQUMzQixjQUFHLE9BQUswSSxjQUFSLEVBQXdCO0FBQ3RCK0ksbUJBQU8zTyxHQUFQLElBQWM5QyxLQUFkOztBQUVBLG1CQUFPLElBQVA7QUFDRDs7QUFFRCxjQUFHLE9BQUs2UixhQUFMLENBQW1CL08sR0FBbkIsQ0FBSCxFQUE0QjtBQUMxQjJPLG1CQUFPM08sR0FBUCxJQUFjOUMsS0FBZDs7QUFFQSxtQkFBTyxJQUFQO0FBQ0Q7O0FBRUQsY0FBSTNDLE9BQU8sR0FBR2lPLE1BQUgsQ0FBVVUsT0FBVixFQUFtQixDQUFDbEosR0FBRCxDQUFuQixDQUFYOztBQUVBLGNBQUcsT0FBS29JLGdCQUFSLEVBQTBCO0FBQ3hCdUcsbUJBQU8zTyxHQUFQLElBQWMsT0FBS3FJLGVBQUwsQ0FBcUJuTCxLQUFyQixFQUE0QjNDLElBQTVCLENBQWQ7QUFDRCxXQUZELE1BR0s7QUFDSDJDLG9CQUFRLGdCQUFNeU0sSUFBTixDQUFXek0sS0FBWCxDQUFSO0FBQ0F5UixtQkFBTzNPLEdBQVAsSUFBYzlDLEtBQWQ7QUFDRDs7QUFFRCxjQUFHLGdCQUFNMUQsV0FBVCxFQUFzQjtBQUNwQixtQkFBSzZWLHVCQUFMLENBQTZCbkcsT0FBN0IsRUFBc0NsSixHQUF0QyxFQUEyQyxLQUEzQzs7QUFFQSxtQkFBTyxJQUFQO0FBQ0Q7O0FBRUQsY0FBRyxPQUFLcUYsV0FBUixFQUFxQjtBQUNuQixtQkFBS3hJLGdCQUFMLENBQXNCdEMsSUFBdEIsRUFBNEIyQyxLQUE1QjtBQUNEOztBQUVELGlCQUFPLElBQVA7QUFDRCxTQXRGbUI7QUF1RnBCNFIsd0JBQWdCLHdCQUFDSCxNQUFELEVBQVMzTyxHQUFULEVBQWlCO0FBQy9CLGNBQUl6RixPQUFPLEdBQUdpTyxNQUFILENBQVVVLE9BQVYsRUFBbUIsQ0FBQ2xKLEdBQUQsQ0FBbkIsQ0FBWDs7QUFFQSxjQUFHLE9BQUs0RixjQUFSLEVBQXdCO0FBQ3RCLG1CQUFPK0ksT0FBTzNPLEdBQVAsQ0FBUDs7QUFFQSxtQkFBTyxJQUFQO0FBQ0Q7O0FBRUQsY0FBRyxPQUFLK08sYUFBTCxDQUFtQi9PLEdBQW5CLENBQUgsRUFBNEI7QUFDMUIsbUJBQU8yTyxPQUFPM08sR0FBUCxDQUFQOztBQUVBLG1CQUFPLElBQVA7QUFDRDs7QUFFRCxjQUFHLGdCQUFNeEcsV0FBVCxFQUFzQjtBQUNwQixtQkFBT21WLE9BQU8zTyxHQUFQLENBQVA7QUFDQSxtQkFBS3FQLHVCQUFMLENBQTZCbkcsT0FBN0IsRUFBc0NsSixHQUF0QyxFQUEyQyxJQUEzQzs7QUFFQSxtQkFBTyxJQUFQO0FBQ0Q7O0FBRUQsaUJBQU8yTyxPQUFPM08sR0FBUCxDQUFQO0FBQ0EsaUJBQUtuRCxnQkFBTCxDQUFzQnRDLElBQXRCLEVBQTRCdUMsU0FBNUIsRUFBdUMsSUFBdkM7O0FBRUEsaUJBQU8sSUFBUDtBQUNEO0FBakhtQixPQUFmLENBQVA7QUFtSEQ7O0FBRUQ7Ozs7Ozs7OztrQ0FNZWtELEcsRUFBSztBQUNsQixVQUFHQSxPQUFPLElBQVAsSUFBZ0JBLElBQUksQ0FBSixLQUFVLEdBQVYsSUFBaUJBLElBQUksQ0FBSixLQUFVLEdBQTlDLEVBQW9EO0FBQ2xELGVBQU8sSUFBUDtBQUNELE9BRkQsTUFHSyxJQUFHLENBQUMsYUFBRCxFQUFnQjJJLE9BQWhCLENBQXdCM0ksR0FBeEIsS0FBZ0MsQ0FBQyxDQUFwQyxFQUF1QztBQUMxQyxlQUFPLElBQVA7QUFDRDs7QUFFRCxhQUFPLEtBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7OztvQ0FPaUI5QyxLLEVBQU9vUyxTLEVBQVc7QUFBQTs7QUFDakMsV0FBSzFKLGNBQUwsR0FBc0IsSUFBdEI7O0FBRUEsVUFBSTJKLFVBQVUsU0FBVkEsT0FBVSxDQUFDclMsS0FBRCxFQUFRZ00sT0FBUixFQUFvQjtBQUNoQyxZQUFHLFFBQU9oTSxLQUFQLHlDQUFPQSxLQUFQLE1BQWdCLFFBQWhCLElBQTRCQSxVQUFVLElBQXpDLEVBQStDO0FBQzdDLGlCQUFPQSxLQUFQO0FBQ0Q7O0FBRUQsWUFBRyxDQUFDLGdCQUFNZ1MsYUFBTixDQUFvQmhTLEtBQXBCLENBQUQsSUFBK0IsQ0FBQyxnQkFBTThOLFlBQU4sQ0FBbUI5TixLQUFuQixDQUFoQyxJQUE2RCxFQUFFQSxpQkFBaUIsZ0JBQU1nRyxLQUF6QixDQUFoRSxFQUFpRztBQUMvRixpQkFBT2hHLEtBQVA7QUFDRDs7QUFFRCxZQUFJeVIsU0FBU3pSLEtBQWI7O0FBRUEsWUFBR0EsTUFBTWdELFNBQVQsRUFBb0I7QUFDbEJ5TyxtQkFBU3pSLE1BQU1zUyxRQUFmOztBQUVBLGNBQUcsQ0FBQyxPQUFLQyx3QkFBVCxFQUFtQztBQUNqQyxnQkFBR3ZTLE1BQU02TSxXQUFOLFdBQUgsRUFBK0I7QUFDN0I0RSx1QkFBUyxnQkFBTWhGLElBQU4sQ0FBV2dGLE1BQVgsRUFBbUIsS0FBbkIsRUFBMEIsSUFBMUIsQ0FBVDtBQUNBelIsc0JBQVF5UixNQUFSO0FBQ0QsYUFIRCxNQUlLLElBQUcsZ0JBQU1yVSxlQUFOLENBQXNCNE8sT0FBdEIsS0FBa0MsZ0JBQU01TyxlQUFOLENBQXNCNEMsTUFBTW9RLE1BQTVCLENBQXJDLEVBQTBFO0FBQzdFcUIsdUJBQVMsZ0JBQU1oRixJQUFOLENBQVdnRixNQUFYLEVBQW1CLEtBQW5CLEVBQTBCLElBQTFCLENBQVQ7QUFDQXpSLHNCQUFReVIsTUFBUjtBQUNEO0FBQ0Y7QUFDRixTQWJELE1BY0ssSUFBRyxDQUFDLE9BQUtjLHdCQUFOLElBQWtDLEVBQUV2UyxpQkFBaUIsZ0JBQU1nRyxLQUF6QixDQUFyQyxFQUFzRTtBQUN6RXlMLG1CQUFTLGdCQUFNaEYsSUFBTixDQUFXZ0YsTUFBWCxFQUFtQixLQUFuQixFQUEwQixJQUExQixDQUFUO0FBQ0F6UixrQkFBUXlSLE1BQVI7QUFDRDs7QUFFRCxhQUFJLElBQUlyUyxDQUFSLElBQWFxUyxNQUFiLEVBQXFCO0FBQ25CLGNBQUksQ0FBQ0EsT0FBT3BTLGNBQVAsQ0FBc0JELENBQXRCLENBQUwsRUFBK0I7QUFDN0I7QUFDRDs7QUFFRCxjQUFJVyxNQUFNMFIsT0FBT3JTLENBQVAsQ0FBVjtBQUNBLGNBQUkvQixPQUFPLEdBQUdpTyxNQUFILENBQVVVLE9BQVYsRUFBbUIsQ0FBQzVNLENBQUQsQ0FBbkIsQ0FBWDs7QUFFQXFTLGlCQUFPclMsQ0FBUCxJQUFZaVQsUUFBUXRTLEdBQVIsRUFBYTFDLElBQWIsQ0FBWjtBQUNEOztBQUVELFlBQUcsQ0FBQzJDLE1BQU1nRCxTQUFWLEVBQXFCO0FBQ25CLGlCQUFPLE9BQUtvSSxTQUFMLENBQWVxRyxNQUFmLEVBQXVCekYsT0FBdkIsQ0FBUDtBQUNEOztBQUVELGVBQU9oTSxLQUFQO0FBQ0QsT0E5Q0Q7O0FBZ0RBLFVBQUlkLE1BQU1tVCxRQUFRclMsS0FBUixFQUFlb1MsYUFBYSxFQUE1QixDQUFWOztBQUVBLFdBQUsxSixjQUFMLEdBQXNCLElBQXRCOztBQUVBLGFBQU94SixHQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7Ozs0Q0FTeUI4TSxPLEVBQVNsSixHLEVBQXdCO0FBQUEsVUFBbkJyRCxTQUFtQix1RUFBUCxLQUFPOztBQUN4RCxVQUFJcEMsT0FBTzJPLFFBQVEvTCxNQUFSLEdBQWdCLENBQUMrTCxRQUFRLENBQVIsQ0FBRCxDQUFoQixHQUE4QixDQUFDbEosR0FBRCxDQUF6QztBQUNBLFVBQUkwUCxlQUFrQixLQUFLNUgsT0FBTCxDQUFhaE4sTUFBL0IsU0FBeUMsZ0JBQU1SLGVBQU4sQ0FBc0JDLElBQXRCLENBQTdDOztBQUVBLFVBQUcyTyxRQUFRL0wsTUFBWCxFQUFtQjtBQUNqQlIsb0JBQVksS0FBWjtBQUNEOztBQUVELFVBQUcsQ0FBQyxnQkFBTW5ELFdBQU4sQ0FBa0JrVyxZQUFsQixDQUFKLEVBQXFDO0FBQ25DLHdCQUFNbFcsV0FBTixDQUFrQmtXLFlBQWxCLElBQWtDO0FBQ2hDOVMscUJBQVcsSUFEcUI7QUFFaENyQyxnQkFBTUE7QUFGMEIsU0FBbEM7QUFJRDs7QUFFQW9DLG9CQUFjRyxTQUFmLEtBQThCLGdCQUFNdEQsV0FBTixDQUFrQmtXLFlBQWxCLEVBQWdDL1MsU0FBaEMsR0FBNENBLFNBQTFFO0FBQ0Esc0JBQU1uRCxXQUFOLENBQWtCa1csWUFBbEIsRUFBZ0N4UyxLQUFoQyxHQUF3QyxnQkFBTXVNLGlCQUFOLENBQXdCbFAsSUFBeEIsRUFBOEIsS0FBS3VOLE9BQW5DLENBQXhDOztBQUVBLGFBQU8sZ0JBQU10TyxXQUFOLENBQWtCa1csWUFBbEIsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7Ozs7OytCQVVXekUsSSxFQUFNMVEsSSxFQUFNMk8sTyxFQUFTaE0sSyxFQUEyQjtBQUFBLFVBQXBCMk4sVUFBb0IsdUVBQVAsS0FBTzs7QUFDekQsVUFBSThFLG1CQUFtQixnQkFBTXJWLGVBQU4sQ0FBc0I0TyxPQUF0QixDQUF2Qjs7QUFFQSxVQUFHK0IsS0FBSzlOLE1BQUwsSUFBZSxDQUFDME4sVUFBbkIsRUFBK0I7QUFDN0IsWUFBSXBPLElBQUl3TyxLQUFLOU4sTUFBTCxHQUFjLENBQXRCO0FBQ0EsWUFBSXNGLE9BQU93SSxLQUFLeE8sQ0FBTCxDQUFYOztBQUVBLFlBQUdnRyxLQUFLbUksVUFBTCxJQUFtQitFLGdCQUFuQixJQUF1Q2xOLEtBQUs3RixTQUFMLEtBQW1CLElBQTdELEVBQW1FO0FBQ2pFcU8sZUFBSzVKLE1BQUwsQ0FBWTVFLENBQVosRUFBZSxDQUFmO0FBQ0Q7QUFDRjs7QUFFRHdPLFdBQUt2UCxJQUFMLENBQVU7QUFDUmtCLG1CQUFXLElBREg7QUFFUmdPLG9CQUFZLGdCQUFNdFEsZUFBTixDQUFzQkMsSUFBdEIsQ0FGSjtBQUdSMk8saUJBQVNBLE9BSEQ7QUFJUjNPLGNBQU1BLElBSkU7QUFLUjJDLGVBQU9BLEtBTEM7QUFNUjJOLG9CQUFZQTtBQU5KLE9BQVY7QUFRRDs7QUFFRDs7Ozs7Ozs7Ozs4QkFPVXRRLEksRUFBTTtBQUNkLGFBQU8sZ0JBQU1rUCxpQkFBTixDQUF3QmxQLElBQXhCLEVBQThCLEtBQUtpTCxVQUFuQyxLQUFrRCxJQUF6RDtBQUNEOztBQUVEOzs7Ozs7Ozs7OzttQ0FRZWpMLEksRUFBTWdCLEksRUFBTTtBQUN6QixVQUFJMFAsT0FBUSxnQkFBTXhCLGlCQUFOLENBQXdCbFAsSUFBeEIsRUFBOEIsS0FBS2lMLFVBQW5DLENBQVo7O0FBRUEsVUFBRyxDQUFDeUYsSUFBRCxJQUFTLENBQUNBLEtBQUs0QixNQUFmLElBQXlCLENBQUM1QixLQUFLNEIsTUFBTCxDQUFZMVAsTUFBekMsRUFBaUQ7QUFDL0MsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsV0FBSSxJQUFJWCxJQUFJLENBQVIsRUFBV0MsSUFBSXdPLEtBQUs0QixNQUFMLENBQVkxUCxNQUEvQixFQUF1Q1gsSUFBSUMsQ0FBM0MsRUFBOENELEdBQTlDLEVBQW1EO0FBQ2pELFlBQUlpRyxPQUFPd0ksS0FBSzRCLE1BQUwsQ0FBWXJRLENBQVosQ0FBWDs7QUFFQSxZQUFHaUcsS0FBS2xILElBQUwsS0FBY0EsSUFBakIsRUFBdUI7QUFDckIsaUJBQU9rSCxJQUFQO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPLElBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7O3NDQVNrQmxILEksRUFBTWhCLEksRUFBTTJDLEssRUFBTztBQUNuQyxVQUFJUixPQUFPLEtBQUtrTixpQkFBTCxDQUF1QnJPLElBQXZCLEVBQTZCaEIsSUFBN0IsQ0FBWDtBQUNBLFVBQUlvUCxPQUFPLGdCQUFNQSxJQUFOLENBQVd6TSxLQUFYLENBQVg7O0FBRUEsVUFBR1IsSUFBSCxFQUFTO0FBQ1AsWUFBSU4sTUFBTSxnQkFBTXNOLG9CQUFOLENBQTJCeE0sS0FBM0IsRUFBa0NSLEtBQUtRLEtBQXZDLEVBQThDUixLQUFLaU4sSUFBbkQsRUFBeURBLElBQXpELENBQVY7O0FBRUFqTixhQUFLUSxLQUFMLEdBQWFBLEtBQWI7QUFDQVIsYUFBS2lOLElBQUwsR0FBWUEsSUFBWjs7QUFFQSxlQUFPLENBQUN2TixHQUFSO0FBQ0Q7O0FBRUQsVUFBSXVPLE9BQVUsS0FBSzdDLE9BQUwsQ0FBYWhOLE1BQXZCLFNBQWlDLGdCQUFNUixlQUFOLENBQXNCQyxJQUF0QixDQUFyQzs7QUFFQWdCLFdBQUtpTyxZQUFMLENBQWtCbUIsSUFBbEIsSUFBMEI7QUFDeEJ6TixlQUFPQSxLQURpQjtBQUV4QnlNLGNBQU1BLElBRmtCO0FBR3hCL00sbUJBQVcsSUFIYTtBQUl4QnJDLGNBQU1BO0FBSmtCLE9BQTFCOztBQU9BLGFBQU8sSUFBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7OztzQ0FRa0JnQixJLEVBQU1oQixJLEVBQU07QUFDNUIsVUFBSW9RLE9BQVUsS0FBSzdDLE9BQUwsQ0FBYWhOLE1BQXZCLFNBQWlDLGdCQUFNUixlQUFOLENBQXNCQyxJQUF0QixDQUFyQzs7QUFFQSxhQUFPZ0IsS0FBS2lPLFlBQUwsQ0FBa0JtQixJQUFsQixLQUEyQixJQUFsQztBQUNEOztBQUVEOzs7Ozs7Ozs7O3lDQU9xQnBQLEksRUFBTWhCLEksRUFBTTtBQUMvQixVQUFJb1EsT0FBVSxLQUFLN0MsT0FBTCxDQUFhaE4sTUFBdkIsU0FBaUMsZ0JBQU1SLGVBQU4sQ0FBc0JDLElBQXRCLENBQXJDOztBQUVBLGFBQU9nQixLQUFLaU8sWUFBTCxDQUFrQm1CLElBQWxCLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7OzsyQkFPT3BRLEksRUFBTWtJLEksRUFBTTtBQUNqQixzQkFBTTFGLGlCQUFOLENBQXdCeEMsSUFBeEIsRUFBOEIsS0FBS2lMLFVBQW5DLEVBQStDLFVBQUN4SSxJQUFELEVBQU9FLEtBQVAsRUFBaUI7QUFDOUQsWUFBSWtRLE1BQU0sRUFBQ1AsUUFBUSxFQUFULEVBQVY7O0FBRUEsWUFBRyxDQUFDN1AsSUFBSixFQUFVO0FBQ1IsaUJBQU9FLFFBQU9BLEtBQVAsR0FBY2tRLEdBQXJCO0FBQ0Q7O0FBRUQsWUFBRyxRQUFPbFEsS0FBUCx5Q0FBT0EsS0FBUCxNQUFnQixRQUFuQixFQUE2QjtBQUMzQmtRLGdCQUFNbFEsS0FBTjtBQUNEOztBQUVELFlBQUcsQ0FBQ2tRLElBQUlQLE1BQVIsRUFBZ0I7QUFDZE8sY0FBSVAsTUFBSixHQUFhLEVBQWI7QUFDRDs7QUFFRE8sWUFBSVAsTUFBSixDQUFXblIsSUFBWCxDQUFnQitHLElBQWhCOztBQUVBLGVBQU8ySyxHQUFQO0FBQ0QsT0FsQkQ7QUFtQkQ7O0FBRUQ7Ozs7Ozs7Ozs2QkFNUzdTLEksRUFBTTtBQUNiLFVBQUkwUSxPQUFPLGdCQUFNeEIsaUJBQU4sQ0FBd0JsUCxJQUF4QixFQUE4QixLQUFLaUwsVUFBbkMsQ0FBWDs7QUFFQSxVQUFHLENBQUN5RixJQUFELElBQVMsQ0FBQ0EsS0FBSzRCLE1BQWxCLEVBQTBCO0FBQ3hCO0FBQ0Q7O0FBRUQsV0FBSSxJQUFJclEsSUFBSSxDQUFSLEVBQVdDLElBQUl3TyxLQUFLNEIsTUFBTCxDQUFZMVAsTUFBL0IsRUFBdUNYLElBQUlDLENBQTNDLEVBQThDRCxHQUE5QyxFQUFtRDtBQUNqRCxZQUFJakIsT0FBTzBQLEtBQUs0QixNQUFMLENBQVlyUSxDQUFaLEVBQWVqQixJQUExQjs7QUFFQSxhQUFLcVUsb0JBQUwsQ0FBMEJyVSxJQUExQixFQUFnQ2hCLElBQWhDO0FBQ0Q7O0FBRUQsc0JBQU1zVCxvQkFBTixDQUEyQnRULElBQTNCLEVBQWlDLEtBQUtpTCxVQUF0QyxFQUFrRCxVQUFDdEksS0FBRCxFQUFXO0FBQzNELFlBQUdrQixPQUFPN0QsSUFBUCxDQUFZMkMsS0FBWixFQUFtQkMsTUFBbkIsR0FBNEIsQ0FBL0IsRUFBa0M7QUFDaENELGdCQUFNMlAsTUFBTixHQUFlLEVBQWY7O0FBRUEsaUJBQU8sS0FBUDtBQUNEOztBQUVELGVBQU8sSUFBUDtBQUNELE9BUkQ7QUFTRDs7QUFFRDs7Ozs7Ozs7O29DQU1nQmdELEssRUFBTztBQUNyQixVQUFJMUMsU0FBUyxTQUFUQSxNQUFTLENBQUNDLEdBQUQsRUFBUztBQUNwQixhQUFJLElBQUk5USxDQUFSLElBQWE4USxHQUFiLEVBQWtCO0FBQ2hCLGNBQUcsQ0FBQ0EsSUFBSTdRLGNBQUosQ0FBbUJELENBQW5CLENBQUosRUFBMkI7QUFDekI7QUFDRDs7QUFFRCxjQUFHQSxLQUFLLFFBQVIsRUFBa0I7QUFDaEIsZ0JBQUltRyxPQUFPMkssSUFBSTlRLENBQUosS0FBVSxFQUFyQjtBQUNBLGdCQUFJRyxJQUFJZ0csS0FBS3RGLE1BQWI7O0FBRUEsaUJBQUksSUFBSVgsSUFBSSxDQUFaLEVBQWVBLElBQUlDLENBQW5CLEVBQXNCRCxHQUF0QixFQUEyQjtBQUN6QixrQkFBSXlPLE9BQU94SSxLQUFLakcsQ0FBTCxDQUFYOztBQUVBLGtCQUFHcVQsTUFBTWxILE9BQU4sQ0FBY3NDLEtBQUsxUCxJQUFuQixLQUE0QixDQUFDLENBQWhDLEVBQW1DO0FBQ2pDa0gscUJBQUtwQixNQUFMLENBQVk3RSxDQUFaLEVBQWUsQ0FBZjtBQUNBQTtBQUNBQztBQUNEO0FBQ0Y7O0FBRUQsZ0JBQUcsQ0FBQ0EsQ0FBSixFQUFPO0FBQ0wscUJBQU8yUSxJQUFJOVEsQ0FBSixDQUFQO0FBQ0Q7QUFDRixXQWpCRCxNQWtCSztBQUNINlEsbUJBQU9DLElBQUk5USxDQUFKLENBQVA7QUFDRDtBQUNGO0FBQ0YsT0E1QkQ7O0FBOEJBNlEsYUFBTyxLQUFLM0gsVUFBWjtBQUNBLFdBQUtzSyxvQkFBTDtBQUNEOztBQUVEOzs7Ozs7Ozs7eUNBTXFCMUMsRyxFQUFLO0FBQ3hCLFVBQUkyQyxRQUFRLFNBQVJBLEtBQVEsQ0FBQzNDLEdBQUQsRUFBTXJHLE1BQU4sRUFBYy9HLEdBQWQsRUFBc0I7QUFDaEMsYUFBSSxJQUFJMUQsQ0FBUixJQUFhOFEsR0FBYixFQUFrQjtBQUNoQixjQUFHLENBQUNBLElBQUk3USxjQUFKLENBQW1CRCxDQUFuQixDQUFKLEVBQTJCO0FBQ3pCO0FBQ0Q7O0FBRUQsY0FBSVcsTUFBTW1RLElBQUk5USxDQUFKLENBQVY7O0FBRUEsY0FBR0EsS0FBSyxRQUFMLEtBQWtCLENBQUNXLEdBQUQsSUFBUSxDQUFDQSxJQUFJRSxNQUEvQixDQUFILEVBQTJDO0FBQ3pDLG1CQUFPaVEsSUFBSTlRLENBQUosQ0FBUDtBQUNELFdBRkQsTUFHSyxJQUFHQSxLQUFLLFFBQVIsRUFBa0I7QUFDckIsZ0JBQUcsQ0FBQzhCLE9BQU83RCxJQUFQLENBQVk2UyxJQUFJOVEsQ0FBSixDQUFaLEVBQW9CYSxNQUF4QixFQUFnQztBQUM5QixxQkFBT2lRLElBQUk5USxDQUFKLENBQVA7QUFDRCxhQUZELE1BR0s7QUFDSHlULG9CQUFNM0MsSUFBSTlRLENBQUosQ0FBTixFQUFjOFEsR0FBZCxFQUFtQjlRLENBQW5CO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFlBQUcsQ0FBQzhCLE9BQU83RCxJQUFQLENBQVk2UyxHQUFaLEVBQWlCalEsTUFBbEIsSUFBNEI0SixNQUEvQixFQUF1QztBQUNyQyxpQkFBT0EsT0FBTy9HLEdBQVAsQ0FBUDtBQUNEO0FBQ0YsT0F4QkQ7O0FBMEJBK1AsWUFBTTNDLE9BQU8sS0FBSzVILFVBQWxCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7O3VDQUttQjtBQUNqQixVQUFJM0UsU0FBUyxTQUFUQSxNQUFTLENBQUM5QixRQUFELEVBQWM7QUFDekIsYUFBSSxJQUFJdkMsSUFBSSxDQUFaLEVBQWVBLElBQUl1QyxTQUFTNUIsTUFBNUIsRUFBb0NYLEdBQXBDLEVBQXlDO0FBQ3ZDLGNBQUl3QyxRQUFRRCxTQUFTdkMsQ0FBVCxDQUFaOztBQUVBcUUsaUJBQU83QixNQUFNdkQsT0FBTixDQUFjb0ssVUFBckI7QUFDQTdHLGdCQUFNdkQsT0FBTixDQUFjdVUsUUFBZDtBQUNBeFQ7QUFDRDtBQUNGLE9BUkQ7O0FBVUFxRSxhQUFPLEtBQUtnRixVQUFaO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OytCQUtXO0FBQ1QsV0FBS3dELFFBQUw7QUFDQSxXQUFLekUsS0FBTCxDQUFXcUwsU0FBWCxJQUF3QixLQUFLckwsS0FBTCxDQUFXcUwsU0FBWCxDQUFxQjNJLE9BQXJCLEVBQXhCO0FBQ0EsV0FBSzRJLE9BQUw7QUFDQSxzQkFBTWhWLFdBQU4sQ0FBa0IsS0FBSzRNLE9BQUwsQ0FBYWhOLE1BQS9CO0FBQ0EsV0FBS0wsRUFBTCxDQUFRb0csTUFBUjtBQUNEOztBQUVEOzs7Ozs7OzsrQkFLVztBQUNULFVBQUcsS0FBSzhGLGdCQUFMLElBQXlCLENBQUMsS0FBS0QsbUJBQWxDLEVBQXVEO0FBQ3JELGFBQUtDLGdCQUFMLENBQXNCbEwsT0FBdEIsQ0FBOEJnVCxlQUE5QixDQUE4QyxHQUFHeE4sS0FBSCxDQUFTQyxJQUFULENBQWMsS0FBS3pHLEVBQUwsQ0FBUWlPLFVBQXRCLENBQTlDO0FBQ0Q7O0FBRUQsVUFBRyxLQUFLNUMsUUFBUixFQUFrQjtBQUNoQixhQUFLQSxRQUFMLENBQWNySyxPQUFkLENBQXNCMFUsYUFBdEIsQ0FBb0MsS0FBSzFWLEVBQXpDO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7Ozs7Z0NBS1k7QUFDVixXQUFLMlYsZ0JBQUw7QUFDQSxXQUFLSixRQUFMO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OzhCQUtVO0FBQ1IsVUFBSUgsUUFBUSxFQUFaOztBQUVBLFdBQUtPLGdCQUFMOztBQUVBLFVBQUlDLE9BQU8sU0FBUEEsSUFBTyxDQUFDdFIsUUFBRCxFQUFjO0FBQ3ZCLGFBQUksSUFBSXZDLElBQUksQ0FBUixFQUFXQyxJQUFJc0MsU0FBUzVCLE1BQTVCLEVBQW9DWCxJQUFJQyxDQUF4QyxFQUEyQ0QsR0FBM0MsRUFBZ0Q7QUFDOUMsY0FBSXdDLFFBQVFELFNBQVN2QyxDQUFULENBQVo7O0FBRUEsY0FBR3dDLE1BQU1nSSxRQUFOLElBQWtCLENBQXJCLEVBQXdCO0FBQ3RCNkksa0JBQU1uVSxJQUFOLENBQVdzRCxLQUFYO0FBQ0QsV0FGRCxNQUdLLElBQUdBLE1BQU1nSSxRQUFOLElBQWtCLENBQWxCLElBQXVCLENBQUNoSSxNQUFNdkQsT0FBakMsRUFBMEM7QUFDN0MsaUJBQUssSUFBSWEsSUFBSSxDQUFSLEVBQVdzSSxRQUFRNUYsTUFBTTBKLFVBQXpCLEVBQXFDb0UsSUFBSWxJLE1BQU16SCxNQUFwRCxFQUE0RGIsSUFBSXdRLENBQWhFLEVBQW1FeFEsR0FBbkUsRUFBd0U7QUFDdEV1VCxvQkFBTW5VLElBQU4sQ0FBV2tKLE1BQU1wSSxDQUFOLENBQVg7QUFDRDs7QUFFRDZULGlCQUFLclIsTUFBTW9JLFVBQVg7QUFDRDtBQUNGO0FBQ0YsT0FmRDs7QUFpQkFpSixXQUFLLEtBQUs1VixFQUFMLENBQVEyTSxVQUFiO0FBQ0EsV0FBS3FILGVBQUwsQ0FBcUJvQixLQUFyQjtBQUNBLFdBQUtwVixFQUFMLENBQVFxQixTQUFSLEdBQW9CLEVBQXBCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7OztrQ0FTMkQ7QUFBQSxVQUEvQ3lDLFFBQStDLHVFQUFwQyxFQUFvQztBQUFBLFVBQWhDK1IsT0FBZ0MsdUVBQXRCLEtBQXNCO0FBQUEsVUFBZkMsTUFBZSx1RUFBTixJQUFNOztBQUN6RCxVQUFJbFYsTUFBTSxFQUFWO0FBQ0EsVUFBSW1WLFFBQVEsQ0FBWjs7QUFFQSxVQUFHLFFBQU9ELE1BQVAseUNBQU9BLE1BQVAsTUFBaUIsUUFBcEIsRUFBOEI7QUFDNUJBLGlCQUFTLENBQUNBLE1BQUQsQ0FBVDtBQUNEOztBQUVELFVBQUlGLE9BQU8sU0FBUEEsSUFBTyxDQUFDdEosTUFBRCxFQUFZO0FBQ3JCLFlBQUcsQ0FBQ0EsTUFBSixFQUFZO0FBQ1Y7QUFDRDs7QUFFRCxZQUFHLENBQUN3SixNQUFELElBQVdBLE9BQU81SCxPQUFQLENBQWU2SCxLQUFmLEtBQXlCLENBQUMsQ0FBeEMsRUFBMkM7QUFDekMsY0FBSSxDQUFDalMsUUFBRCxJQUFhd0ksT0FBT3RMLE9BQVAsQ0FBZTZDLE9BQWYsQ0FBdUJDLFFBQXZCLENBQWpCLEVBQW1EO0FBQ2pELGdCQUFJLENBQUMrUixPQUFMLEVBQWM7QUFDWmpWLGtCQUFJSyxJQUFKLENBQVNxTCxPQUFPdEwsT0FBaEI7O0FBRUE7QUFDRDs7QUFFREosZ0JBQUlLLElBQUosQ0FBU3FMLE9BQU90TCxPQUFoQjtBQUNEO0FBQ0Y7O0FBRUQrVTtBQUNBSCxhQUFLdEosT0FBT3RMLE9BQVAsQ0FBZXFLLFFBQXBCO0FBQ0QsT0FuQkQ7O0FBcUJBdUssV0FBSyxLQUFLdkssUUFBVjs7QUFFQSxhQUFPd0ssVUFBU2pWLEdBQVQsR0FBZUEsSUFBSSxDQUFKLEtBQVUsSUFBaEM7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7O29DQVM0RDtBQUFBLFVBQTlDa0QsUUFBOEMsdUVBQW5DLEVBQW1DO0FBQUEsVUFBL0IrUixPQUErQix1RUFBckIsSUFBcUI7QUFBQSxVQUFmQyxNQUFlLHVFQUFOLElBQU07O0FBQzFELFVBQUlsVixNQUFNLEVBQVY7QUFDQSxVQUFJbVYsUUFBUSxDQUFaOztBQUVBLFVBQUcsUUFBT0QsTUFBUCx5Q0FBT0EsTUFBUCxNQUFpQixRQUFwQixFQUE4QjtBQUM1QkEsaUJBQVMsQ0FBQ0EsTUFBRCxDQUFUO0FBQ0Q7O0FBRUQsVUFBSUYsT0FBTyxTQUFQQSxJQUFPLENBQUN0UixRQUFELEVBQWM7QUFDdkIsYUFBSSxJQUFJdkMsSUFBSSxDQUFSLEVBQVdDLElBQUlzQyxTQUFTNUIsTUFBNUIsRUFBb0NYLElBQUlDLENBQXhDLEVBQTJDRCxHQUEzQyxFQUFnRDtBQUM5QyxjQUFJd0MsUUFBUUQsU0FBU3ZDLENBQVQsQ0FBWjs7QUFFQSxjQUFHLENBQUMrVCxNQUFELElBQVdBLE9BQU81SCxPQUFQLENBQWU2SCxLQUFmLEtBQXlCLENBQUMsQ0FBeEMsRUFBMkM7QUFDekMsZ0JBQUcsQ0FBQ2pTLFFBQUQsSUFBYVMsTUFBTXZELE9BQU4sQ0FBYzZDLE9BQWQsQ0FBc0JDLFFBQXRCLENBQWhCLEVBQWlEO0FBQy9DLGtCQUFHLENBQUMrUixPQUFKLEVBQWE7QUFDWGpWLG9CQUFJSyxJQUFKLENBQVNzRCxNQUFNdkQsT0FBZjs7QUFFQTtBQUNEOztBQUVESixrQkFBSUssSUFBSixDQUFTc0QsTUFBTXZELE9BQWY7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQrVTs7QUFFQSxhQUFJLElBQUloVSxNQUFJLENBQVIsRUFBV0MsTUFBSXNDLFNBQVM1QixNQUE1QixFQUFvQ1gsTUFBSUMsR0FBeEMsRUFBMkNELEtBQTNDLEVBQWdEO0FBQzlDNlQsZUFBS3RSLFNBQVN2QyxHQUFULEVBQVlmLE9BQVosQ0FBb0JvSyxVQUF6QjtBQUNEO0FBQ0YsT0F0QkQ7O0FBd0JBd0ssV0FBSyxLQUFLeEssVUFBVjs7QUFFQSxhQUFPeUssVUFBU2pWLEdBQVQsR0FBZUEsSUFBSSxDQUFKLEtBQVUsSUFBaEM7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7O2dDQVN3RDtBQUFBLFVBQTlDa0QsUUFBOEMsdUVBQW5DLEVBQW1DO0FBQUEsVUFBL0IrUixPQUErQix1RUFBckIsSUFBcUI7QUFBQSxVQUFmRyxLQUFlLHVFQUFQLEtBQU87O0FBQ3RELFVBQUcsQ0FBQyxLQUFLM0ssUUFBVCxFQUFtQjtBQUNqQixlQUFPLElBQVA7QUFDRDs7QUFFRCxVQUFJNEssZ0JBQWdCLEtBQUs1SyxRQUFMLENBQWNySyxPQUFkLENBQXNCb0ssVUFBdEIsQ0FBaUM1RSxLQUFqQyxFQUFwQjtBQUNBLFVBQUk1RixNQUFNLEVBQVY7O0FBRUFvVixlQUFTQyxjQUFjQyxPQUFkLEVBQVQ7O0FBRUEsV0FBSSxJQUFJblUsSUFBSSxDQUFSLEVBQVdDLElBQUlpVSxjQUFjdlQsTUFBakMsRUFBeUNYLElBQUlDLENBQTdDLEVBQWdERCxHQUFoRCxFQUFxRDtBQUNuRCxZQUFJL0IsS0FBS2lXLGNBQWNsVSxDQUFkLENBQVQ7O0FBRUEsWUFBRy9CLE9BQU8sS0FBS0EsRUFBZixFQUFtQjtBQUNqQjtBQUNEOztBQUVELFlBQUcsQ0FBQzhELFFBQUQsSUFBYTlELEdBQUdnQixPQUFILENBQVc2QyxPQUFYLENBQW1CQyxRQUFuQixDQUFoQixFQUE4QztBQUM1Q2xELGNBQUlLLElBQUosQ0FBU2pCLEdBQUdnQixPQUFaO0FBQ0Q7QUFDRjs7QUFFREosVUFBSXNWLE9BQUo7O0FBRUEsVUFBRyxDQUFDTCxPQUFKLEVBQWE7QUFDWCxlQUFPalYsSUFBSThCLE1BQUosR0FBWTlCLElBQUksQ0FBSixDQUFaLEdBQW9CLElBQTNCO0FBQ0Q7O0FBRUQsYUFBT0EsR0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7NEJBTVFrRCxRLEVBQVU7QUFDaEIsVUFBRyxPQUFPQSxRQUFQLElBQW1CLFVBQXRCLEVBQWtDO0FBQ2hDLGVBQU9BLFNBQVMsSUFBVCxDQUFQO0FBQ0Q7O0FBRUQsYUFBTyxLQUFLOUQsRUFBTCxDQUFRNkQsT0FBUixDQUFnQkMsUUFBaEIsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7OzZCQU9xQztBQUFBLFVBQTlCQSxRQUE4Qix1RUFBbkIsRUFBbUI7QUFBQSxVQUFmZ1MsTUFBZSx1RUFBTixJQUFNOztBQUNuQyxhQUFPLEtBQUtLLFdBQUwsQ0FBaUJyUyxRQUFqQixFQUEyQixLQUEzQixFQUFrQ2dTLE1BQWxDLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs4QkFPc0M7QUFBQSxVQUE5QmhTLFFBQThCLHVFQUFuQixFQUFtQjtBQUFBLFVBQWZnUyxNQUFlLHVFQUFOLElBQU07O0FBQ3BDLGFBQU8sS0FBS0ssV0FBTCxDQUFpQnJTLFFBQWpCLEVBQTJCLElBQTNCLEVBQWlDZ1MsTUFBakMsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7OzRCQU9vQztBQUFBLFVBQTlCaFMsUUFBOEIsdUVBQW5CLEVBQW1CO0FBQUEsVUFBZmdTLE1BQWUsdUVBQU4sSUFBTTs7QUFDbEMsYUFBTyxLQUFLTSxhQUFMLENBQW1CdFMsUUFBbkIsRUFBNkIsS0FBN0IsRUFBb0NnUyxNQUFwQyxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7K0JBT3VDO0FBQUEsVUFBOUJoUyxRQUE4Qix1RUFBbkIsRUFBbUI7QUFBQSxVQUFmZ1MsTUFBZSx1RUFBTixJQUFNOztBQUNyQyxhQUFPLEtBQUtNLGFBQUwsQ0FBbUJ0UyxRQUFuQixFQUE2QixJQUE3QixFQUFtQ2dTLE1BQW5DLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7OzZCQU1zQjtBQUFBLFVBQWZoUyxRQUFlLHVFQUFKLEVBQUk7O0FBQ3BCLGFBQU8sS0FBS3VTLFNBQUwsQ0FBZXZTLFFBQWYsRUFBeUIsSUFBekIsRUFBK0IsS0FBL0IsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7NEJBTXFCO0FBQUEsVUFBZkEsUUFBZSx1RUFBSixFQUFJOztBQUNuQixhQUFPLEtBQUt1UyxTQUFMLENBQWV2UyxRQUFmLEVBQXlCLElBQXpCLEVBQStCLElBQS9CLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7OzJCQU1vQjtBQUFBLFVBQWZBLFFBQWUsdUVBQUosRUFBSTs7QUFDbEIsYUFBTyxLQUFLdVMsU0FBTCxDQUFldlMsUUFBZixFQUF5QixLQUF6QixFQUFnQyxLQUFoQyxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OzsyQkFNb0I7QUFBQSxVQUFmQSxRQUFlLHVFQUFKLEVBQUk7O0FBQ2xCLGFBQU8sS0FBS3VTLFNBQUwsQ0FBZXZTLFFBQWYsRUFBeUIsS0FBekIsRUFBZ0MsSUFBaEMsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs2QkFLU3dJLE0sRUFBUTtBQUNmQSxhQUFPZ0ssV0FBUCxDQUFtQixLQUFLdFcsRUFBeEI7O0FBRUEsYUFBTyxnQkFBTWtFLE9BQU4sQ0FBYyxLQUFLbEUsRUFBbkIsRUFBdUIsRUFBRStDLFdBQVcsSUFBYixFQUF2QixDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs2QkFHUztBQUNQLFdBQUtpQixXQUFMLEdBQW1CLElBQW5CO0FBQ0Q7O0FBRUQ7Ozs7Ozs4QkFHVTtBQUNSLFdBQUs4RyxTQUFMLEdBQWlCLElBQWpCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OzRCQUtRO0FBQ04sYUFBTyxLQUFLeUwsT0FBTCxDQUFhN1EsS0FBYixDQUFtQixJQUFuQixFQUF5QlksU0FBekIsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs2QkFLUztBQUNQLGFBQU8sS0FBS2tRLFNBQUwsQ0FBZTlRLEtBQWYsQ0FBcUIsSUFBckIsRUFBMkJZLFNBQTNCLENBQVA7QUFDRDs7OzhCQUVTLENBQUU7OzsrQkFDRCxDQUFFOzs7aUNBQ0EsQ0FBRTs7OzRCQUNQZixHLEVBQUs5QyxLLEVBQU8sQ0FBRTs7OytCQUNYLENBQUU7Ozs4QkFDSCxDQUFFOzs7Ozs7QUFqdURPc0IsUyxDQUVaRixPLEdBQVUsRTtBQUZFRSxTLENBR1orSixpQixHQUFvQixFO0FBSFIvSixTLENBSVowSixNLEdBQVMsRTtBQUpHMUosUyxDQUtaeUosaUIsR0FBb0IsSztBQUxSekosUyxDQU1aNEssVyxHQUFjLEs7QUFORjVLLFMsQ0FPWjVDLFEsR0FBVyxFO0FBUEM0QyxTLENBUVpnSixXLEdBQWMsRTtBQVJGaEosUyxDQVNaM0QsSyxHQUFRLEk7a0JBVEkyRCxTOzs7Ozs7Ozs7Ozs7Ozs7QUNSckI7Ozs7Ozs7O0FBRUEsSUFBTTJFLFFBQVEsRUFBZDs7QUFFQTs7Ozs7Ozs7OztBQVVBQSxNQUFNK04sS0FBTixHQUFjLFVBQVU5RCxHQUFWLEVBQWU7QUFDM0IsTUFBRyxDQUFDQSxHQUFELElBQVEsUUFBT0EsR0FBUCx5Q0FBT0EsR0FBUCxPQUFlLFFBQTFCLEVBQW9DO0FBQ2xDLFdBQU8sRUFBUDtBQUNEOztBQUVELE1BQUkrRCxVQUFVLEVBQWQ7O0FBRUEsT0FBSSxJQUFJN1UsQ0FBUixJQUFhOFEsR0FBYixFQUFrQjtBQUNoQixRQUFHLENBQUNBLElBQUk3USxjQUFKLENBQW1CRCxDQUFuQixDQUFKLEVBQTJCO0FBQ3pCO0FBQ0Q7O0FBRUQsUUFBSVcsTUFBTW1RLElBQUk5USxDQUFKLENBQVY7O0FBRUFXLFdBQU9rVSxRQUFRelYsSUFBUixDQUFhWSxDQUFiLENBQVA7QUFDRDs7QUFFRCxTQUFPNlUsUUFBUXhXLElBQVIsQ0FBYSxHQUFiLENBQVA7QUFDRCxDQWxCRDs7QUFvQkE7Ozs7Ozs7Ozs7QUFVQXdJLE1BQU1sQixLQUFOLEdBQWMsVUFBU21MLEdBQVQsRUFBYztBQUMxQixNQUFHLENBQUNBLEdBQUQsSUFBUSxRQUFPQSxHQUFQLHlDQUFPQSxHQUFQLE9BQWUsUUFBMUIsRUFBb0M7QUFDbEMsV0FBTyxFQUFQO0FBQ0Q7O0FBRUQsTUFBSWdFLFNBQVMsRUFBYjs7QUFFQSxPQUFJLElBQUk5VSxDQUFSLElBQWE4USxHQUFiLEVBQWtCO0FBQ2hCLFFBQUcsQ0FBQ0EsSUFBSTdRLGNBQUosQ0FBbUJELENBQW5CLENBQUosRUFBMkI7QUFDekI7QUFDRDs7QUFFRCxRQUFJVyxNQUFNbVEsSUFBSTlRLENBQUosQ0FBVjs7QUFFQVcsV0FBT21VLE9BQU8xVixJQUFQLENBQWUsS0FBS21DLFVBQUwsQ0FBZ0J2QixDQUFoQixDQUFmLFNBQXFDVyxHQUFyQyxDQUFQO0FBQ0Q7O0FBRUQsU0FBT21VLE9BQU96VyxJQUFQLENBQVksR0FBWixDQUFQO0FBQ0QsQ0FsQkQ7O0FBb0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQXdJLE1BQU1rTyxNQUFOLEdBQWUsVUFBVWhXLEdBQVYsRUFBZWlXLE9BQWYsRUFBbUM7QUFBQSxNQUFYL1csSUFBVyx1RUFBSixFQUFJOztBQUNoRCxNQUFJNkIsTUFBTSxFQUFWOztBQUVBLE1BQUcsQ0FBQ3lELE1BQU0wUixPQUFOLENBQWNoWCxJQUFkLENBQUosRUFBeUI7QUFDdkJBLFdBQU8sQ0FBQ0EsSUFBRCxDQUFQO0FBQ0Q7O0FBRUQsTUFBRyxDQUFDK1csT0FBSixFQUFhO0FBQ1gsd0NBQVdqVyxHQUFYO0FBQ0Q7O0FBRUQsT0FBSSxJQUFJbUIsSUFBSSxDQUFSLEVBQVdDLElBQUlwQixJQUFJOEIsTUFBdkIsRUFBK0JYLElBQUlDLENBQW5DLEVBQXNDRCxHQUF0QyxFQUEyQztBQUN6QyxRQUFJZ1YsT0FBT25XLElBQUltQixDQUFKLENBQVg7QUFDQSxRQUFJUyxNQUFNMUMsS0FBSzRDLE1BQUwsR0FBYSxLQUFLc00saUJBQUwsQ0FBdUJsUCxJQUF2QixFQUE2QmlYLElBQTdCLENBQWIsR0FBaURBLElBQTNEOztBQUVBLFFBQUcsQ0FBQ3ZVLEdBQUosRUFBUztBQUNQO0FBQ0Q7O0FBRURBLFdBQU8sRUFBUDs7QUFFQSxRQUFJLE9BQU9xVSxPQUFQLElBQWtCLFVBQW5CLElBQWtDQSxRQUFRRSxJQUFSLENBQXJDLEVBQW9EO0FBQ2xEcFYsVUFBSVYsSUFBSixDQUFTOFYsSUFBVDtBQUNELEtBRkQsTUFHSyxJQUFHdlUsSUFBSXdVLEtBQUosQ0FBVUgsV0FBVyxFQUFyQixDQUFILEVBQTZCO0FBQ2hDbFYsVUFBSVYsSUFBSixDQUFTOFYsSUFBVDtBQUNEO0FBQ0Y7O0FBRUQsU0FBT3BWLEdBQVA7QUFDRCxDQTlCRDs7QUFnQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9DQStHLE1BQU11TyxJQUFOLEdBQWEsVUFBU3JXLEdBQVQsRUFBdUM7QUFBQTs7QUFBQSxNQUF6QmQsSUFBeUIsdUVBQWxCLElBQWtCO0FBQUEsTUFBWm9YLEtBQVksdUVBQUosRUFBSTs7QUFDbER0VyxxQ0FBVUEsR0FBVjs7QUFFQSxNQUFHZCxTQUFTLElBQVosRUFBa0I7QUFDaEJBLFdBQU8sRUFBUDtBQUNBb1gsWUFBUSxDQUFDLElBQUQsQ0FBUjtBQUNELEdBSEQsTUFJSyxJQUFHcFgsU0FBUyxLQUFaLEVBQW1CO0FBQ3RCQSxXQUFPLEVBQVA7QUFDQW9YLFlBQVEsQ0FBQyxLQUFELENBQVI7QUFDRDs7QUFFRCxNQUFHLENBQUM5UixNQUFNMFIsT0FBTixDQUFjaFgsSUFBZCxDQUFKLEVBQXlCO0FBQ3ZCQSxXQUFPLENBQUNBLElBQUQsQ0FBUDtBQUNEOztBQUVELE1BQUcsQ0FBQ3NGLE1BQU0wUixPQUFOLENBQWNJLEtBQWQsQ0FBSixFQUEwQjtBQUN4QkEsWUFBUSxDQUFDQSxLQUFELENBQVI7QUFDRDs7QUFFRCxNQUFJbFYsSUFBSWxDLEtBQUs0QyxNQUFiOztBQUVBOUIsTUFBSXFXLElBQUosQ0FBUyxVQUFDRSxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNqQixRQUFJclYsSUFBSSxDQUFSOztBQUVBLFFBQUlsQixRQUFRLFNBQVJBLEtBQVEsQ0FBQ3NXLENBQUQsRUFBSUMsQ0FBSixFQUEyQjtBQUFBLFVBQXBCbEIsT0FBb0IsdUVBQVYsS0FBVTs7QUFDckMsVUFBR2lCLGFBQWFFLElBQWhCLEVBQXNCO0FBQ3BCRixZQUFJQSxFQUFFRyxPQUFGLEVBQUo7QUFDRDs7QUFFRCxVQUFHRixhQUFhQyxJQUFoQixFQUFzQjtBQUNwQkQsWUFBSUEsRUFBRUUsT0FBRixFQUFKO0FBQ0Q7O0FBRUQsVUFBR0gsSUFBSUMsQ0FBUCxFQUFVO0FBQ1IsZUFBT2xCLFVBQVMsQ0FBQyxDQUFWLEdBQWEsQ0FBcEI7QUFDRCxPQUZELE1BR0ssSUFBR2lCLElBQUlDLENBQVAsRUFBVTtBQUNiLGVBQU9sQixVQUFTLENBQVQsR0FBWSxDQUFDLENBQXBCO0FBQ0Q7O0FBRUQsYUFBTyxDQUFQO0FBQ0QsS0FqQkQ7O0FBbUJBLFFBQUlxQixPQUFPLFNBQVBBLElBQU8sR0FBTTtBQUNmLFVBQUd4VixLQUFLQyxDQUFSLEVBQVc7QUFDVCxlQUFPLENBQVA7QUFDRDs7QUFFRCxVQUFJdUQsTUFBTXpGLEtBQUtpQyxDQUFMLENBQVY7O0FBRUEsVUFBRyxDQUFDcUQsTUFBTTBSLE9BQU4sQ0FBY3ZSLEdBQWQsQ0FBSixFQUF3QjtBQUN0QkEsY0FBTSxDQUFDQSxHQUFELENBQU47QUFDRDs7QUFFRCxVQUFJaVMsS0FBSyxNQUFLeEksaUJBQUwsQ0FBdUJ6SixHQUF2QixFQUE0QjRSLENBQTVCLENBQVQ7QUFDQSxVQUFJTSxLQUFLLE1BQUt6SSxpQkFBTCxDQUF1QnpKLEdBQXZCLEVBQTRCNlIsQ0FBNUIsQ0FBVDtBQUNBLFVBQUl6VixNQUFNZCxNQUFNMlcsRUFBTixFQUFVQyxFQUFWLEVBQWNQLE1BQU1uVixDQUFOLE1BQWEsS0FBM0IsQ0FBVjs7QUFFQSxVQUFHSixRQUFRLENBQVgsRUFBYztBQUNaLGVBQU9BLEdBQVA7QUFDRDs7QUFFREk7O0FBRUEsYUFBT3dWLE1BQVA7QUFDRCxLQXRCRDs7QUF3QkEsUUFBRyxDQUFDdlYsQ0FBSixFQUFPO0FBQ0wsYUFBT25CLE1BQU1zVyxDQUFOLEVBQVNDLENBQVQsRUFBWUYsTUFBTW5WLENBQU4sTUFBYSxLQUF6QixDQUFQO0FBQ0Q7O0FBRUQsV0FBT3dWLE1BQVA7QUFDRCxHQW5ERDs7QUFxREEsU0FBTzNXLEdBQVA7QUFDRCxDQTVFRDs7QUE4RUE7Ozs7OztBQU1BOEgsTUFBTTZILFlBQU4sR0FBcUIsVUFBUy9OLEdBQVQsRUFBYztBQUNqQyxTQUFPLENBQUMsRUFBRUEsT0FBTyxRQUFPQSxHQUFQLHlDQUFPQSxHQUFQLE1BQWMsUUFBckIsSUFBaUNBLElBQUlpRCxTQUF2QyxDQUFSO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7O0FBTUFpRCxNQUFNK0wsYUFBTixHQUFzQixVQUFTOUIsR0FBVCxFQUFjO0FBQ2xDLFNBQU8sQ0FBQyxFQUFFQSxPQUFPLFFBQU9BLEdBQVAseUNBQU9BLEdBQVAsTUFBYyxRQUFyQixLQUFrQ0EsSUFBSTVNLFdBQUosSUFBbUJwQyxNQUFuQixJQUE2QmdQLElBQUk1TSxXQUFKLElBQW1CWCxLQUFsRixDQUFGLENBQVI7QUFDRCxDQUZEOztBQUlBOzs7Ozs7OztBQVFBc0QsTUFBTXdHLElBQU4sR0FBYSxVQUFTek0sS0FBVCxFQUFtRDtBQUFBLE1BQW5DaVYsTUFBbUMsdUVBQTFCLElBQTBCO0FBQUEsTUFBcEJ0USxVQUFvQix1RUFBUCxLQUFPOztBQUM5RCxNQUFHLFFBQU8zRSxLQUFQLHlDQUFPQSxLQUFQLE1BQWdCLFFBQWhCLElBQTRCLENBQUNBLEtBQWhDLEVBQXVDO0FBQ3JDLFdBQU9BLEtBQVA7QUFDRDs7QUFFRCxXQUFTOFUsSUFBVCxDQUFjNUUsR0FBZCxFQUFtQjtBQUNqQixRQUFJN1MsT0FBT3NILGFBQVl6RCxPQUFPMkIsbUJBQVAsQ0FBMkJxTixHQUEzQixDQUFaLEdBQTZDaFAsT0FBTzdELElBQVAsQ0FBWTZTLEdBQVosQ0FBeEQ7QUFDQSxRQUFJZ0YsU0FBU3ZTLE1BQU0wUixPQUFOLENBQWNuRSxHQUFkLElBQW9CLEVBQXBCLEdBQXdCLEVBQXJDOztBQUVBLFNBQUksSUFBSTVRLElBQUksQ0FBUixFQUFXQyxJQUFJbEMsS0FBSzRDLE1BQXhCLEVBQWdDWCxJQUFJQyxDQUFwQyxFQUF1Q0QsR0FBdkMsRUFBNEM7QUFDMUMsVUFBSXdELE1BQU16RixLQUFLaUMsQ0FBTCxDQUFWOztBQUVBNFYsYUFBT3BTLEdBQVAsSUFBY29OLElBQUlwTixHQUFKLENBQWQ7QUFDRDs7QUFFRG9OLFVBQU1nRixNQUFOOztBQUVBLFFBQUcsQ0FBQ0QsTUFBSixFQUFZO0FBQ1YsYUFBTy9FLEdBQVA7QUFDRDs7QUFFRCxTQUFJLElBQUk5USxDQUFSLElBQWE4USxHQUFiLEVBQWtCO0FBQ2hCLFVBQUcsQ0FBQ0EsSUFBSTdRLGNBQUosQ0FBbUJELENBQW5CLENBQUosRUFBMkI7QUFDekI7QUFDRDs7QUFFRCxVQUFHOFEsSUFBSTlRLENBQUosS0FBVSxRQUFPOFEsSUFBSTlRLENBQUosQ0FBUCxLQUFpQixRQUE5QixFQUF3QztBQUN0QzhRLFlBQUk5USxDQUFKLElBQVMwVixLQUFLNUUsSUFBSTlRLENBQUosQ0FBTCxDQUFUO0FBQ0Q7QUFDRjs7QUFFRCxXQUFPOFEsR0FBUDtBQUNEOztBQUVELFNBQU80RSxLQUFLOVUsS0FBTCxDQUFQO0FBQ0QsQ0FuQ0Q7O0FBcUNBOzs7Ozs7QUFNQWlHLE1BQU1rSSxrQkFBTixHQUEyQixVQUFTbk8sS0FBVCxFQUFnQjtBQUN6QyxNQUFHQSxVQUFVLEtBQVYsSUFBbUJBLFVBQVUsSUFBN0IsSUFBcUNBLFVBQVVKLFNBQWxELEVBQTZEO0FBQzNELFdBQU8sRUFBUDtBQUNEOztBQUVELE1BQUdJLHVDQUFILEVBQWtDO0FBQ2hDLFdBQU8sZ0JBQVA7QUFDRDs7QUFFRCxNQUFHLE9BQU9BLEtBQVAsSUFBZ0IsVUFBbkIsRUFBK0I7QUFDN0IsV0FBTyxtQkFBUDtBQUNEOztBQUVELE1BQUcsUUFBT0EsS0FBUCx5Q0FBT0EsS0FBUCxNQUFnQixRQUFuQixFQUE2QjtBQUMzQixXQUFPa0IsT0FBTzBCLFNBQVAsQ0FBaUJwRixRQUFqQixDQUEwQndHLElBQTFCLENBQStCaEUsS0FBL0IsQ0FBUDtBQUNEOztBQUVELFNBQU9BLFFBQVEsRUFBZjtBQUNELENBbEJEOztBQW9CQTs7Ozs7OztBQU9BaUcsTUFBTWtQLE9BQU4sR0FBZ0IsVUFBVVQsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQzlCLE1BQUcsS0FBSzdHLFlBQUwsQ0FBa0I0RyxDQUFsQixLQUF3QixLQUFLNUcsWUFBTCxDQUFrQjZHLENBQWxCLENBQTNCLEVBQWlEO0FBQy9DLFdBQU9ELEVBQUVwQyxRQUFGLEtBQWVxQyxFQUFFckMsUUFBeEI7QUFDRCxHQUZELE1BR0ssSUFBSW9DLGFBQWFFLElBQWQsSUFBd0JELGFBQWFDLElBQXhDLEVBQStDO0FBQ2xELFdBQU9GLEVBQUVHLE9BQUYsT0FBZ0JGLEVBQUVFLE9BQUYsRUFBdkI7QUFDRCxHQUZJLE1BR0EsSUFBRyxPQUFPSCxDQUFQLElBQVksVUFBWixJQUEwQixPQUFPQyxDQUFQLElBQVksVUFBekMsRUFBcUQ7QUFDeEQsV0FBT0QsRUFBRWxYLFFBQUYsT0FBaUJtWCxFQUFFblgsUUFBRixFQUF4QjtBQUNELEdBRkksTUFHQSxJQUFHLFFBQU9rWCxDQUFQLHlDQUFPQSxDQUFQLE1BQVksUUFBWixJQUF3QixRQUFPQyxDQUFQLHlDQUFPQSxDQUFQLE1BQVksUUFBdkMsRUFBaUQ7QUFDcEQsUUFBR0QsTUFBTSxJQUFOLElBQWNDLE1BQU0sSUFBdkIsRUFBNkI7QUFDM0IsYUFBT0QsTUFBTUMsQ0FBYjtBQUNEOztBQUVELFFBQUd6VCxPQUFPN0QsSUFBUCxDQUFZcVgsQ0FBWixFQUFlelUsTUFBZixJQUF5QmlCLE9BQU83RCxJQUFQLENBQVlzWCxDQUFaLEVBQWUxVSxNQUEzQyxFQUFtRDtBQUNqRCxhQUFPLEtBQVA7QUFDRDs7QUFFRCxTQUFJLElBQUliLENBQVIsSUFBYXNWLENBQWIsRUFBZ0I7QUFDZCxVQUFHLENBQUNBLEVBQUVyVixjQUFGLENBQWlCRCxDQUFqQixDQUFKLEVBQXlCO0FBQ3ZCO0FBQ0Q7O0FBRUQsVUFBRyxDQUFDLEtBQUsrVixPQUFMLENBQWFULEVBQUV0VixDQUFGLENBQWIsRUFBbUJ1VixFQUFFdlYsQ0FBRixDQUFuQixDQUFKLEVBQThCO0FBQzVCLGVBQU8sS0FBUDtBQUNEO0FBQ0Y7O0FBRUQsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsU0FBT3NWLE1BQU1DLENBQWI7QUFDRCxDQWpDRDs7QUFtQ0E7Ozs7Ozs7OztBQVNBMU8sTUFBTXVHLG9CQUFOLEdBQTZCLFVBQVM0SSxPQUFULEVBQWtCQyxRQUFsQixFQUE0QkMsWUFBNUIsRUFBMENDLFdBQTFDLEVBQXVEO0FBQ2xGLE1BQUdILFlBQVlDLFFBQWYsRUFBeUI7QUFDdkIsV0FBTyxLQUFQO0FBQ0Q7O0FBRUQsU0FBTyxLQUFLRixPQUFMLENBQWF0UixVQUFVNUQsTUFBVixJQUFvQixDQUFwQixHQUF1QnNWLFdBQXZCLEdBQW9DLEtBQUs5SSxJQUFMLENBQVUySSxPQUFWLENBQWpELEVBQXFFRSxZQUFyRSxDQUFQO0FBQ0QsQ0FORDs7QUFRQTs7Ozs7Ozs7OztBQVVBclAsTUFBTXVQLGtCQUFOLEdBQTJCLFVBQVNDLElBQVQsRUFBZTtBQUN4QyxNQUFJbFksS0FBS2IsU0FBU2daLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVDtBQUNBLE1BQUkxVixjQUFKOztBQUVBekMsS0FBR29ZLFdBQUgsR0FBaUJGLElBQWpCO0FBQ0F6VixVQUFRekMsR0FBR3FCLFNBQVg7QUFDQXJCLEtBQUdvRyxNQUFIO0FBQ0FwRyxPQUFLLElBQUw7O0FBRUEsU0FBT3lDLEtBQVA7QUFDRCxDQVZEOztBQVlBOzs7Ozs7Ozs7O0FBVUFpRyxNQUFNMlAsa0JBQU4sR0FBMkIsVUFBU0gsSUFBVCxFQUFlO0FBQ3hDLE1BQUlsWSxLQUFLYixTQUFTZ1osYUFBVCxDQUF1QixVQUF2QixDQUFUO0FBQ0EsTUFBSTFWLGNBQUo7O0FBRUF6QyxLQUFHcUIsU0FBSCxHQUFlNlcsSUFBZjtBQUNBelYsVUFBUXpDLEdBQUd5QyxLQUFYO0FBQ0F6QyxLQUFHb0csTUFBSDtBQUNBcEcsT0FBSyxJQUFMOztBQUVBLFNBQU95QyxLQUFQO0FBQ0QsQ0FWRDs7QUFZQTs7Ozs7O0FBTUFpRyxNQUFNMkksV0FBTixHQUFvQixVQUFTN1AsR0FBVCxFQUFjO0FBQ2hDLFNBQU9BLElBQUlKLE9BQUosQ0FBWSxTQUFaLEVBQXVCLFVBQUNzTyxDQUFELEVBQUkyQyxDQUFKO0FBQUEsV0FBVUEsRUFBRVosV0FBRixFQUFWO0FBQUEsR0FBdkIsQ0FBUDtBQUNELENBRkQ7O0FBSUE7Ozs7OztBQU1BL0ksTUFBTXRGLFVBQU4sR0FBbUIsVUFBUzVCLEdBQVQsRUFBYztBQUMvQixTQUFPQSxJQUFJSixPQUFKLENBQVksVUFBWixFQUF3QixVQUFDc08sQ0FBRCxFQUFJMkMsQ0FBSjtBQUFBLGlCQUFjQSxFQUFFOU8sV0FBRixFQUFkO0FBQUEsR0FBeEIsQ0FBUDtBQUNELENBRkQ7O0FBSUE7Ozs7Ozs7Ozs7O0FBV0FtRixNQUFNc0csaUJBQU4sR0FBMEIsVUFBU2xQLElBQVQsRUFBZXdZLE1BQWYsRUFBdUI7QUFDL0MsTUFBSVQsZ0JBQUo7QUFDQSxNQUFJblYsU0FBUzVDLEtBQUs0QyxNQUFsQjtBQUNBLE1BQUlYLElBQUksQ0FBUjs7QUFFQWpDLE9BQUt5WSxNQUFMLENBQVksVUFBU0MsQ0FBVCxFQUFZM1csQ0FBWixFQUFlO0FBQ3pCRTs7QUFFQSxRQUFHLFFBQU95VyxDQUFQLHlDQUFPQSxDQUFQLE1BQVksUUFBZixFQUF5QjtBQUN2QixhQUFPQSxDQUFQO0FBQ0Q7O0FBRUQsUUFBR0EsRUFBRTNXLENBQUYsTUFBU1EsU0FBWixFQUF1QjtBQUNyQixhQUFPLEVBQVA7QUFDRDs7QUFFQU4sU0FBS1csTUFBTixLQUFrQm1WLFVBQVVXLEVBQUUzVyxDQUFGLENBQTVCO0FBQ0EsV0FBTzJXLEVBQUUzVyxDQUFGLENBQVA7QUFDRCxHQWJELEVBYUd5VyxNQWJIOztBQWVBLFNBQU9ULE9BQVA7QUFDRCxDQXJCRDs7QUF1QkE7Ozs7Ozs7Ozs7O0FBV0FuUCxNQUFNdUssaUJBQU4sR0FBMEIsVUFBU25ULElBQVQsRUFBZXdZLE1BQWYsRUFBdUI7QUFDL0MsTUFBSUcsTUFBTSxLQUFWO0FBQ0EsTUFBSS9WLFNBQVM1QyxLQUFLNEMsTUFBbEI7QUFDQSxNQUFJWCxJQUFJLENBQVI7O0FBRUFqQyxPQUFLeVksTUFBTCxDQUFZLFVBQVNDLENBQVQsRUFBWTNXLENBQVosRUFBZTtBQUN6QkU7O0FBRUEsUUFBRyxRQUFPeVcsQ0FBUCx5Q0FBT0EsQ0FBUCxNQUFZLFFBQWYsRUFBeUI7QUFDdkIsYUFBTyxDQUFDLENBQUNBLENBQVQ7QUFDRDs7QUFFRCxRQUFHLENBQUNBLEVBQUUxVyxjQUFGLENBQWlCRCxDQUFqQixDQUFKLEVBQXlCO0FBQ3ZCLGFBQU8sRUFBUDtBQUNEOztBQUVBRSxTQUFLVyxNQUFOLEtBQWtCK1YsTUFBTUQsRUFBRTFXLGNBQUYsQ0FBaUJELENBQWpCLENBQXhCO0FBQ0EsV0FBTzJXLEVBQUUzVyxDQUFGLENBQVA7QUFDRCxHQWJELEVBYUd5VyxNQWJIOztBQWVBLFNBQU9HLEdBQVA7QUFDRCxDQXJCRDs7QUF1QkE7Ozs7Ozs7Ozs7Ozs7QUFhQS9QLE1BQU1wRyxpQkFBTixHQUEwQixVQUFTeEMsSUFBVCxFQUFld1ksTUFBZixFQUF1QjVXLEVBQXZCLEVBQTJCO0FBQ25ELE1BQUltVyxVQUFVeFYsU0FBZDtBQUNBLE1BQUlLLFNBQVM1QyxLQUFLNEMsTUFBbEI7QUFDQSxNQUFJWCxJQUFJLENBQVI7O0FBRUFqQyxPQUFLeVksTUFBTCxDQUFZLFVBQVNDLENBQVQsRUFBWTNXLENBQVosRUFBZTtBQUN6QkU7O0FBRUEsUUFBRyxRQUFPeVcsQ0FBUCx5Q0FBT0EsQ0FBUCxNQUFZLFFBQWYsRUFBeUI7QUFDdkI7QUFDRDs7QUFFRCxRQUFHLENBQUNBLEVBQUUxVyxjQUFGLENBQWlCRCxDQUFqQixDQUFKLEVBQXlCO0FBQ3ZCLGFBQU9nVyxVQUFVVyxFQUFFM1csQ0FBRixJQUFPSCxHQUFHSyxLQUFLVyxNQUFSLENBQXhCO0FBQ0Q7O0FBRUQ4VixNQUFFM1csQ0FBRixJQUFPSCxHQUFHSyxLQUFLVyxNQUFSLEVBQWdCOFYsRUFBRTNXLENBQUYsQ0FBaEIsQ0FBUDtBQUNBZ1csY0FBVVcsQ0FBVjs7QUFFQSxXQUFPQSxFQUFFM1csQ0FBRixDQUFQO0FBQ0QsR0FmRCxFQWVHeVcsTUFmSDs7QUFpQkEsU0FBT1QsT0FBUDtBQUNELENBdkJEOztBQXlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBblAsTUFBTTBLLG9CQUFOLEdBQTZCLFVBQVN0VCxJQUFULEVBQWV3WSxNQUFmLEVBQXVCNVcsRUFBdkIsRUFBMkI7QUFDdEQsTUFBSWdCLFNBQVM1QyxLQUFLNEMsTUFBbEI7QUFDQSxNQUFJRCxjQUFKO0FBQ0EsTUFBSVYsSUFBSSxDQUFSOztBQUVBakMsT0FBS3lZLE1BQUwsQ0FBWSxVQUFTQyxDQUFULEVBQVkzVyxDQUFaLEVBQWU7QUFDekJFOztBQUVBLFFBQUcsUUFBT3lXLENBQVAseUNBQU9BLENBQVAsTUFBWSxRQUFmLEVBQXlCO0FBQ3ZCO0FBQ0Q7O0FBRUQsUUFBRyxDQUFDQSxFQUFFMVcsY0FBRixDQUFpQkQsQ0FBakIsQ0FBSixFQUF5QjtBQUN2QixhQUFPLEVBQVA7QUFDRDs7QUFFRCxRQUFHRSxLQUFLVyxNQUFSLEVBQWdCO0FBQ2RELGNBQVErVixFQUFFM1csQ0FBRixDQUFSOztBQUVBLFVBQUcsQ0FBQ0gsRUFBRCxJQUFPQSxHQUFHZSxLQUFILENBQVYsRUFBcUI7QUFDbkIsZUFBTytWLEVBQUUzVyxDQUFGLENBQVA7QUFDRDs7QUFFRCxhQUFPWSxLQUFQO0FBQ0Q7O0FBRUQsV0FBTytWLEVBQUUzVyxDQUFGLENBQVA7QUFDRCxHQXRCRCxFQXNCR3lXLE1BdEJIOztBQXdCQSxTQUFPN1YsS0FBUDtBQUNELENBOUJEOztBQWlDQTs7Ozs7Ozs7QUFRQWlHLE1BQU1nTSwyQkFBTixHQUFvQyxVQUFTUixNQUFULEVBQWlCM08sR0FBakIsRUFBc0I7QUFDeEQsTUFBSTFFLFFBQVEsU0FBUkEsS0FBUSxDQUFDOFIsR0FBRCxFQUFTO0FBQ25CLFFBQUdBLElBQUkrRixvQkFBSixDQUF5Qm5ULEdBQXpCLENBQUgsRUFBa0M7QUFDaEMsYUFBT29OLEdBQVA7QUFDRDs7QUFFRCxRQUFJZ0csUUFBUWhWLE9BQU9pVixjQUFQLENBQXNCakcsR0FBdEIsQ0FBWjs7QUFFQSxRQUFHLENBQUNnRyxLQUFKLEVBQVc7QUFDVCxhQUFPLElBQVA7QUFDRDs7QUFFRCxXQUFPOVgsTUFBTThYLEtBQU4sQ0FBUDtBQUNELEdBWkQ7O0FBY0EsU0FBTzlYLE1BQU1xVCxNQUFOLENBQVA7QUFDRCxDQWhCRDs7QUFrQkE7Ozs7Ozs7QUFPQXhMLE1BQU04TCxvQkFBTixHQUE2QixVQUFTTixNQUFULEVBQWlCM08sR0FBakIsRUFBc0I7QUFDakQsTUFBSTFFLFFBQVEsU0FBUkEsS0FBUSxDQUFDOFIsR0FBRCxFQUFTO0FBQ25CLFFBQUdBLElBQUk3USxjQUFKLENBQW1CeUQsR0FBbkIsQ0FBSCxFQUE0QjtBQUMxQixhQUFPb04sR0FBUDtBQUNEOztBQUVELFFBQUlnRyxRQUFRaFYsT0FBT2lWLGNBQVAsQ0FBc0JqRyxHQUF0QixDQUFaOztBQUVBLFFBQUcsQ0FBQ2dHLEtBQUosRUFBVztBQUNULGFBQU8sSUFBUDtBQUNEOztBQUVELFdBQU85WCxNQUFNOFgsS0FBTixDQUFQO0FBQ0QsR0FaRDs7QUFjQSxTQUFPOVgsTUFBTXFULE1BQU4sQ0FBUDtBQUNELENBaEJEOztBQWtCQTs7Ozs7O0FBTUF4TCxNQUFNbVEsZUFBTixHQUF3QixVQUFVcFcsS0FBVixFQUFpQjtBQUN2QyxNQUFHLFFBQU9BLEtBQVAseUNBQU9BLEtBQVAsTUFBZ0IsUUFBaEIsSUFBNEIsQ0FBQ0EsS0FBaEMsRUFBdUM7QUFDckMsV0FBT0EsS0FBUDtBQUNEOztBQUVELE1BQUk2UyxRQUFRLFNBQVJBLEtBQVEsQ0FBQzNDLEdBQUQsRUFBUztBQUNuQixTQUFJLElBQUk5USxDQUFSLElBQWE4USxHQUFiLEVBQWtCO0FBQ2hCLFVBQUksQ0FBQ0EsSUFBSTdRLGNBQUosQ0FBbUJELENBQW5CLENBQUwsRUFBNEI7QUFDMUI7QUFDRDs7QUFFRCxVQUFHOFEsSUFBSTlRLENBQUosS0FBVSxRQUFPOFEsSUFBSTlRLENBQUosQ0FBUCxLQUFpQixRQUE5QixFQUF3QztBQUN0QyxZQUFHOFEsSUFBSTlRLENBQUosRUFBTzRELFNBQVYsRUFBcUI7QUFDbkJrTixjQUFJOVEsQ0FBSixJQUFTOFEsSUFBSTlRLENBQUosRUFBT2tULFFBQWhCO0FBQ0Q7O0FBRURPLGNBQU0zQyxJQUFJOVEsQ0FBSixDQUFOO0FBQ0Q7QUFDRjtBQUNGLEdBZEQ7O0FBZ0JBLE1BQUdZLE1BQU1nRCxTQUFULEVBQW9CO0FBQ2xCaEQsWUFBUUEsTUFBTXNTLFFBQWQ7QUFDRDs7QUFFRE8sUUFBTTdTLEtBQU47O0FBRUEsU0FBT0EsS0FBUDtBQUNELENBNUJEOztBQStCQTs7Ozs7OztBQU9BaUcsTUFBTW5ILGtCQUFOLEdBQTJCLFlBQWlDO0FBQUEsTUFBeEJtQixNQUF3Qix1RUFBZixFQUFlO0FBQUEsTUFBWGhCLEVBQVcsdUVBQU4sSUFBTTs7QUFDMUQsTUFBSUYsTUFBTXNYLEtBQUtDLE1BQUwsR0FBYzlZLFFBQWQsQ0FBdUIsRUFBdkIsRUFBMkIrWSxTQUEzQixDQUFxQyxDQUFyQyxFQUF3Q3RXLFNBQVMsQ0FBakQsQ0FBVjtBQUNBLE1BQUlGLE1BQU0sRUFBVjs7QUFFQSxPQUFJLElBQUlULElBQUksQ0FBUixFQUFXQyxJQUFJUixJQUFJa0IsTUFBdkIsRUFBK0JYLElBQUlDLENBQW5DLEVBQXNDRCxHQUF0QyxFQUEyQztBQUN6QyxRQUFHK1csS0FBS0MsTUFBTCxLQUFnQixJQUFuQixFQUF5QjtBQUN2QnZXLGFBQU9oQixJQUFJTyxDQUFKLEVBQU8wUCxXQUFQLEVBQVA7QUFDRCxLQUZELE1BR0s7QUFDSGpQLGFBQU9oQixJQUFJTyxDQUFKLENBQVA7QUFDRDtBQUNGOztBQUVELE1BQUdMLE1BQU1BLEdBQUdjLEdBQUgsQ0FBVCxFQUFrQjtBQUNoQixXQUFPLEtBQUtqQixrQkFBTCxDQUF3Qm1CLE1BQXhCLEVBQWdDaEIsRUFBaEMsQ0FBUDtBQUNEOztBQUVELFNBQU9jLEdBQVA7QUFDRCxDQWxCRDs7a0JBb0Jla0csSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1c0JmOzs7Ozs7OztJQUVhdVEsTyxXQUFBQSxPO0FBQ1gsbUJBQVlDLE9BQVosRUFBcUJDLFFBQXJCLEVBQStCO0FBQUE7O0FBQzdCLFNBQUtELE9BQUwsR0FBZUEsVUFBVUEsUUFBUTlYLE9BQVIsQ0FBZ0IsS0FBaEIsRUFBdUIsRUFBdkIsSUFBNkIsR0FBdkMsR0FBNkMsRUFBNUQ7O0FBRUEsU0FBSytYLFFBQUw7QUFDRUMsMkJBQXFCO0FBRHZCLE9BRU1ELFlBQVksRUFGbEI7QUFJRDs7QUFFRDs7Ozs7Ozs7OzswQkFNTTVhLE8sRUFBUztBQUFBOztBQUNiLGFBQU8sSUFBSWUsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVThaLE1BQVYsRUFBcUI7QUFDdEMsWUFBSXBQLFlBQUo7QUFDQSxZQUFJcVAsWUFBSjs7QUFFQS9hLCtCQUFjLE1BQUs0YSxRQUFuQixFQUFpQzVhLFdBQVcsRUFBNUM7O0FBRUErYSxjQUFNLElBQUlDLGNBQUosRUFBTjtBQUNDLGVBQU9oYixRQUFRaWIsT0FBZixJQUEwQixVQUEzQixJQUEwQ2piLFFBQVFpYixPQUFSLENBQWdCRixHQUFoQixDQUExQztBQUNBL2Esa0JBQVUsTUFBS2tiLGVBQUwsQ0FBcUJsYixPQUFyQixDQUFWO0FBQ0EwTCxjQUFNLE1BQUtpUCxPQUFMLFFBQWlCLE1BQUtBLE9BQXRCLEdBQWdDM2EsUUFBUTBMLEdBQVIsQ0FBWTdJLE9BQVosQ0FBb0IsS0FBcEIsRUFBMkIsRUFBM0IsQ0FBaEMsR0FBa0U3QyxRQUFRMEwsR0FBaEY7QUFDQXFQLFlBQUlJLElBQUosQ0FBU25iLFFBQVFvYixNQUFqQixFQUF5QjFQLEdBQXpCLEVBQThCLElBQTlCLEVBQW9DMUwsUUFBUXFiLElBQTVDLEVBQWtEcmIsUUFBUXNiLFFBQTFEO0FBQ0F0YixnQkFBUXViLE9BQVIsR0FBa0J2YixRQUFRdWIsT0FBUixJQUFtQixFQUFyQzs7QUFFQSxZQUFHdmIsUUFBUXdiLElBQVgsRUFBaUI7QUFDZnhiLGtCQUFReWIsSUFBUixHQUFlbkosS0FBS0MsU0FBTCxDQUFldlMsUUFBUXdiLElBQXZCLENBQWY7QUFDQXhiLGtCQUFRdWIsT0FBUixDQUFnQixjQUFoQixJQUFrQyxrQkFBbEM7QUFDQXZiLGtCQUFRMGIsWUFBUixHQUF1QjFiLFFBQVEwYixZQUFSLElBQXdCLE1BQS9DO0FBQ0QsU0FKRCxNQUtLLElBQUcxYixRQUFRMmIsSUFBWCxFQUFpQjtBQUNwQjNiLGtCQUFReWIsSUFBUixHQUFlLE1BQUtHLGNBQUwsQ0FBb0I1YixRQUFRMmIsSUFBNUIsQ0FBZjtBQUNBM2Isa0JBQVF1YixPQUFSLENBQWdCLGNBQWhCLElBQWtDLHFCQUFsQztBQUNEOztBQUVELFlBQUd2YixRQUFRdUQsY0FBUixDQUF1QixTQUF2QixDQUFILEVBQXNDO0FBQ3BDd1gsY0FBSWMsT0FBSixHQUFjN2IsUUFBUTZiLE9BQXRCO0FBQ0Q7O0FBRUQsWUFBRzdiLFFBQVEwYixZQUFYLEVBQXlCO0FBQ3ZCWCxjQUFJVyxZQUFKLEdBQW1CMWIsUUFBUTBiLFlBQTNCO0FBQ0Q7O0FBRUQsWUFBRzFiLFFBQVE4YixlQUFYLEVBQTRCO0FBQzFCZixjQUFJZSxlQUFKLEdBQXNCOWIsUUFBUThiLGVBQTlCO0FBQ0Q7O0FBRUQsWUFBRzliLFFBQVF1YixPQUFYLEVBQW9CO0FBQ2xCLGVBQUksSUFBSWpZLENBQVIsSUFBYXRELFFBQVF1YixPQUFyQixFQUE4QjtBQUM1QixnQkFBRyxDQUFDdmIsUUFBUXViLE9BQVIsQ0FBZ0JoWSxjQUFoQixDQUErQkQsQ0FBL0IsQ0FBSixFQUF1QztBQUNyQztBQUNEOztBQUVEeVgsZ0JBQUlnQixnQkFBSixDQUFxQnpZLENBQXJCLEVBQXdCdEQsUUFBUXViLE9BQVIsQ0FBZ0JqWSxDQUFoQixDQUF4QjtBQUNEO0FBQ0Y7O0FBRUQsWUFBR3RELFFBQVFnYyxNQUFYLEVBQW1CO0FBQ2pCLGNBQUkvWSxNQUFNLE1BQUtnWixhQUFMLENBQW1CamMsUUFBUWdjLE1BQTNCLENBQVY7O0FBRUEsY0FBRy9ZLEdBQUgsRUFBUTtBQUNOeUksbUJBQU8sTUFBTXpJLEdBQWI7QUFDRDtBQUNGOztBQUVELFlBQUcsT0FBT2pELFFBQVFrYyxVQUFmLElBQTZCLFVBQWhDLEVBQTRDO0FBQzFDbkIsY0FBSW9CLFVBQUosR0FBaUIsWUFBTTtBQUNyQixtQkFBT25jLFFBQVFrYyxVQUFSLENBQW1CbkIsR0FBbkIsQ0FBUDtBQUNELFdBRkQ7QUFHRDs7QUFFREEsWUFBSXFCLE1BQUosR0FBYSxZQUFNO0FBQ2pCLGNBQUlDLFdBQVcsTUFBS0MsY0FBTCxDQUFvQnZCLEdBQXBCLENBQWY7O0FBRUEsY0FBRyxDQUFDQSxJQUFJL1IsTUFBSixHQUFhLEVBQWQsRUFBa0J5UCxLQUFsQixDQUF3QnpZLFFBQVE2YSxtQkFBaEMsQ0FBSCxFQUF5RDtBQUN2RCxnQkFBSS9RLE1BQU0sSUFBSS9ILEtBQUosa0JBQXlCMkosR0FBekIsc0NBQTZEcVAsSUFBSS9SLE1BQWpFLENBQVY7O0FBRUFjLGdCQUFJdVMsUUFBSixHQUFlQSxRQUFmOztBQUVBLG1CQUFPdkIsT0FBT2hSLEdBQVAsQ0FBUDtBQUNEOztBQUVEOUksa0JBQVFxYixRQUFSO0FBQ0QsU0FaRDs7QUFjQXRCLFlBQUl3QixTQUFKLEdBQWdCLFlBQU07QUFDcEJ6QixpQkFBTyxJQUFJL1ksS0FBSixrQkFBeUIySixHQUF6QixpQkFBUDtBQUNELFNBRkQ7O0FBSUFxUCxZQUFJeUIsT0FBSixHQUFjLFVBQUMxUyxHQUFELEVBQVM7QUFDckJnUixpQkFBT2hSLEdBQVA7QUFDRCxTQUZEOztBQUlBaVIsWUFBSTBCLElBQUosQ0FBU3pjLFFBQVF5YixJQUFqQjtBQUNELE9BbEZNLENBQVA7QUFtRkQ7O0FBRUQ7Ozs7Ozs7OztrQ0FNY3JILEcsRUFBSztBQUNqQixVQUFJc0ksTUFBTSxHQUFWO0FBQ0EsVUFBSUMsS0FBSyxHQUFUOztBQUVBLFVBQUksQ0FBQ3ZJLEdBQUQsSUFBUSxRQUFPQSxHQUFQLHlDQUFPQSxHQUFQLE9BQWUsUUFBM0IsRUFBcUM7QUFDbkMsZUFBTyxFQUFQO0FBQ0Q7O0FBRUQsYUFBT2hQLE9BQU83RCxJQUFQLENBQVk2UyxHQUFaLEVBQWlCNVMsR0FBakIsQ0FBcUIsVUFBQzhCLENBQUQsRUFBTztBQUNqQyxZQUFJc1osS0FBS0MsbUJBQW1CdlosQ0FBbkIsQ0FBVDs7QUFFQSxZQUFJdUQsTUFBTTBSLE9BQU4sQ0FBY25FLElBQUk5USxDQUFKLENBQWQsQ0FBSixFQUEyQjtBQUN6QnNaLGVBQUtDLG1CQUFtQnZaLENBQW5CLENBQUw7O0FBRUEsaUJBQU84USxJQUFJOVEsQ0FBSixFQUFPOUIsR0FBUCxDQUFXLFVBQUNzYixDQUFELEVBQUl0WixDQUFKLEVBQVU7QUFDMUIsbUJBQU9vWixZQUFTcFosQ0FBVCxVQUFnQm1aLEVBQWhCLEdBQXFCRSxtQkFBbUJDLENBQW5CLENBQTVCO0FBQ0QsV0FGTSxFQUVKbmIsSUFGSSxDQUVDK2EsR0FGRCxDQUFQO0FBR0QsU0FORCxNQU9LLElBQUd0SSxJQUFJOVEsQ0FBSixLQUFVLFFBQU84USxJQUFJOVEsQ0FBSixDQUFQLE1BQWtCLFFBQS9CLEVBQXlDO0FBQzVDLGNBQUl5WixNQUFNLEVBQVY7O0FBRUEzWCxpQkFBTzdELElBQVAsQ0FBWTZTLElBQUk5USxDQUFKLENBQVosRUFBb0I5QixHQUFwQixDQUF3QixVQUFDd0YsR0FBRCxFQUFTO0FBQy9CK1YsZ0JBQUlyYSxJQUFKLENBQVNrYSxZQUFTNVYsR0FBVCxVQUFrQjJWLEVBQWxCLEdBQXVCRSxtQkFBbUJ6SSxJQUFJOVEsQ0FBSixFQUFPMEQsR0FBUCxDQUFuQixDQUFoQztBQUNELFdBRkQ7O0FBSUEsaUJBQU8rVixJQUFJcGIsSUFBSixDQUFTK2EsR0FBVCxDQUFQO0FBQ0QsU0FSSSxNQVNBO0FBQ0gsaUJBQU9FLEtBQUtELEVBQUwsR0FBVUUsbUJBQW1CekksSUFBSTlRLENBQUosQ0FBbkIsQ0FBakI7QUFDRDtBQUNGLE9BdEJNLEVBc0JKM0IsSUF0QkksQ0FzQkMrYSxHQXRCRCxDQUFQO0FBdUJEOztBQUVEOzs7Ozs7Ozs7b0NBTWdCelosRyxFQUFLO0FBQ25CLFVBQUkrWixRQUFRLEVBQVo7QUFDQSxVQUFJQyxPQUFPaGEsSUFBSWlhLEtBQUosQ0FBVSxHQUFWLENBQVg7O0FBRUEsV0FBSSxJQUFJMVosSUFBSSxDQUFSLEVBQVdDLElBQUl3WixLQUFLOVksTUFBeEIsRUFBZ0NYLElBQUdDLENBQW5DLEVBQXNDRCxHQUF0QyxFQUEyQztBQUN6QyxZQUFJMlosTUFBT0YsS0FBS3paLENBQUwsRUFBUTBaLEtBQVIsQ0FBYyxHQUFkLENBQVg7QUFDQSxZQUFJbFcsTUFBTW9XLG1CQUFtQkQsSUFBSSxDQUFKLENBQW5CLENBQVY7QUFDQSxZQUFJbFosTUFBTW1aLG1CQUFtQkQsSUFBSSxDQUFKLENBQW5CLENBQVY7O0FBRUEsWUFBRyxDQUFDblcsR0FBSixFQUFTO0FBQ1A7QUFDRDs7QUFFRCxZQUFHSCxNQUFNMFIsT0FBTixDQUFjeUUsTUFBTWhXLEdBQU4sQ0FBZCxDQUFILEVBQThCO0FBQzVCZ1csZ0JBQU1oVyxHQUFOLEVBQVd0RSxJQUFYLENBQWdCdUIsR0FBaEI7QUFDRCxTQUZELE1BR0ssSUFBRytZLE1BQU1oVyxHQUFOLENBQUgsRUFBZTtBQUNsQmdXLGdCQUFNaFcsR0FBTixJQUFhLENBQUNnVyxNQUFNaFcsR0FBTixDQUFELEVBQWEvQyxHQUFiLENBQWI7QUFDRCxTQUZJLE1BR0E7QUFDSCtZLGdCQUFNaFcsR0FBTixJQUFhL0MsR0FBYjtBQUNEO0FBQ0Y7O0FBRUQsYUFBTytZLEtBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7O21DQVNlNUksRyxFQUFrQztBQUFBLFVBQTdCM0ssSUFBNkIsdUVBQXRCLElBQXNCO0FBQUEsVUFBaEI0VCxTQUFnQix1RUFBSixFQUFJOztBQUMvQyxVQUFJQyxLQUFLN1QsUUFBUSxJQUFJOFQsUUFBSixFQUFqQjs7QUFFQSxXQUFJLElBQUlqYSxDQUFSLElBQWE4USxHQUFiLEVBQWtCO0FBQ2hCLFlBQUdBLElBQUk3USxjQUFKLENBQW1CRCxDQUFuQixLQUF5QjhRLElBQUk5USxDQUFKLENBQTVCLEVBQW9DO0FBQ2xDLGNBQUkwRCxNQUFNcVcsWUFBV0EsWUFBWSxHQUFaLEdBQWtCL1osQ0FBbEIsR0FBc0IsR0FBakMsR0FBc0NBLENBQWhEOztBQUVBLGNBQUk4USxJQUFJOVEsQ0FBSixhQUFrQndWLElBQXRCLEVBQTRCO0FBQzFCd0UsZUFBR0UsTUFBSCxDQUFVeFcsR0FBVixFQUFlb04sSUFBSTlRLENBQUosRUFBT21hLFdBQVAsRUFBZjtBQUNELFdBRkQsTUFHSyxJQUFJLGdCQUFNdkgsYUFBTixDQUFvQjlCLElBQUk5USxDQUFKLENBQXBCLENBQUosRUFBaUM7QUFDcEMsaUJBQUtzWSxjQUFMLENBQW9CeEgsSUFBSTlRLENBQUosQ0FBcEIsRUFBNEJnYSxFQUE1QixFQUFnQ3RXLEdBQWhDO0FBQ0QsV0FGSSxNQUdBO0FBQ0hzVyxlQUFHRSxNQUFILENBQVV4VyxHQUFWLEVBQWVvTixJQUFJOVEsQ0FBSixDQUFmO0FBQ0Q7QUFDRjtBQUNGOztBQUVELGFBQU9nYSxFQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OztvQ0FNZ0J0ZCxPLEVBQVM7QUFDdkIsYUFBT0EsT0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7bUNBTWUrYSxHLEVBQUs7QUFDbEIsYUFBTztBQUNMQSxhQUFLQSxHQURBO0FBRUx0UixjQUFNc1IsSUFBSXNCLFFBRkw7QUFHTHJULGdCQUFRK1IsSUFBSS9SO0FBSFAsT0FBUDtBQUtEOztBQUVEOzs7Ozs7Ozs7O3dCQU9JMEMsRyxFQUFtQjtBQUFBLFVBQWQxTCxPQUFjLHVFQUFKLEVBQUk7O0FBQ3JCQSxjQUFRMEwsR0FBUixHQUFjQSxHQUFkO0FBQ0ExTCxjQUFRb2IsTUFBUixHQUFpQixLQUFqQjs7QUFFQSxhQUFPLEtBQUs0QixLQUFMLENBQVdoZCxPQUFYLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs0QkFPTzBMLEcsRUFBbUI7QUFBQSxVQUFkMUwsT0FBYyx1RUFBSixFQUFJOztBQUN4QkEsY0FBUTBMLEdBQVIsR0FBY0EsR0FBZDtBQUNBMUwsY0FBUW9iLE1BQVIsR0FBaUIsUUFBakI7O0FBRUEsYUFBTyxLQUFLNEIsS0FBTCxDQUFXaGQsT0FBWCxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7eUJBT0swTCxHLEVBQW1CO0FBQUEsVUFBZDFMLE9BQWMsdUVBQUosRUFBSTs7QUFDdEJBLGNBQVEwTCxHQUFSLEdBQWNBLEdBQWQ7QUFDQTFMLGNBQVFvYixNQUFSLEdBQWlCLE1BQWpCOztBQUVBLGFBQU8sS0FBSzRCLEtBQUwsQ0FBV2hkLE9BQVgsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7O3dCQU9JMEwsRyxFQUFtQjtBQUFBLFVBQWQxTCxPQUFjLHVFQUFKLEVBQUk7O0FBQ3JCQSxjQUFRMEwsR0FBUixHQUFjQSxHQUFkO0FBQ0ExTCxjQUFRb2IsTUFBUixHQUFpQixLQUFqQjs7QUFFQSxhQUFPLEtBQUs0QixLQUFMLENBQVdoZCxPQUFYLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7OzswQkFPTTBMLEcsRUFBbUI7QUFBQSxVQUFkMUwsT0FBYyx1RUFBSixFQUFJOztBQUN2QkEsY0FBUTBMLEdBQVIsR0FBY0EsR0FBZDtBQUNBMUwsY0FBUW9iLE1BQVIsR0FBaUIsT0FBakI7O0FBRUEsYUFBTyxLQUFLNEIsS0FBTCxDQUFXaGQsT0FBWCxDQUFQO0FBQ0Q7Ozs7OztBQUdILElBQU11TCxVQUFVLElBQUltUCxPQUFKLEVBQWhCOztBQUVBblAsUUFBUW1TLFdBQVIsR0FBc0IsRUFBdEI7O0FBRUE7Ozs7OztBQU1BblMsUUFBUW9TLFdBQVIsR0FBc0IsVUFBUzFiLElBQVQsRUFBZTJiLFFBQWYsRUFBeUI7QUFDN0MsT0FBS0YsV0FBTCxDQUFpQnpiLElBQWpCLElBQXlCMmIsUUFBekI7QUFDRCxDQUZEOztBQUlBOzs7OztBQUtBclMsUUFBUXNTLGNBQVIsR0FBeUIsVUFBUzViLElBQVQsRUFBZTtBQUN0QyxTQUFPLEtBQUt5YixXQUFMLENBQWlCemIsSUFBakIsQ0FBUDtBQUNELENBRkQ7O0FBSUFtRCxPQUFPdUQsY0FBUCxDQUFzQjRDLE9BQXRCLEVBQStCLEtBQS9CLEVBQXNDO0FBQ3BDL0IsT0FBSyxlQUFNO0FBQ1QsV0FBTytCLFFBQVFtUyxXQUFmO0FBQ0Q7QUFIbUMsQ0FBdEM7O0FBTUFuUyxRQUFRbVAsT0FBUixHQUFrQkEsT0FBbEI7a0JBQ2VuUCxPOzs7Ozs7Ozs7Ozs7Ozs7QUM1VWY7Ozs7Ozs7Ozs7OztJQUVxQkwsSTs7O0FBQ25CLGtCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFObEQsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsdUlBQ1ZBLElBRFU7O0FBR25CLFVBQUs4VixRQUFMLEdBQWdCLE9BQWhCO0FBSG1CO0FBSXBCOzs7O2lDQUVZNVosSyxFQUFPO0FBQ2xCLFdBQUs2WixRQUFMLENBQWM3WixLQUFkO0FBQ0Q7OztpQ0FFWUEsSyxFQUFPO0FBQ2xCLFdBQUs4WixRQUFMLENBQWM5WixLQUFkO0FBQ0Q7OzsrQkFFVTtBQUNULFdBQUswSCxLQUFMLENBQVdySSxjQUFYLENBQTBCLE9BQTFCLEtBQXNDLEtBQUt5YSxRQUFMLENBQWMsS0FBS3BTLEtBQUwsQ0FBV3FTLEtBQXpCLENBQXRDO0FBQ0EsV0FBS3JTLEtBQUwsQ0FBV3JJLGNBQVgsQ0FBMEIsT0FBMUIsS0FBc0MsS0FBS3dhLFFBQUwsQ0FBYyxLQUFLblMsS0FBTCxDQUFXMUgsS0FBekIsQ0FBdEM7QUFDRDs7OzZCQUVRQSxLLEVBQU87QUFDZEEsY0FBTyxLQUFLZ2EsZUFBTCxFQUFQLEdBQStCLEtBQUtDLGNBQUwsRUFBL0I7QUFDRDs7OzZCQUVRamEsSyxFQUFPO0FBQ2IsV0FBS3pDLEVBQUwsQ0FBUSxLQUFLcWMsUUFBYixNQUEyQjVaLEtBQTVCLEtBQXVDLEtBQUt6QyxFQUFMLENBQVEsS0FBS3FjLFFBQWIsSUFBeUI1WixVQUFVLENBQVYsR0FBYSxHQUFiLEdBQW1CQSxTQUFTLEVBQTVGO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsV0FBS3pDLEVBQUwsQ0FBUXdjLEtBQVI7QUFDRDs7O3FDQUVnQjtBQUNmLFdBQUt4YyxFQUFMLENBQVEyYyxJQUFSO0FBQ0Q7Ozs7OztrQkFsQ2tCbFQsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGckI7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJYLEc7Ozs7OzZCQUdIO0FBQ2Qsc0JBQU0zRyxTQUFOLENBQWdCLEtBQWhCLEVBQXVCMkcsR0FBdkI7QUFDQSxzQkFBTTNHLFNBQU4sQ0FBZ0IsSUFBaEIsRUFBc0IyRyxHQUF0QjtBQUNBLHNCQUFNM0csU0FBTixDQUFnQixJQUFoQixFQUFzQjJHLEdBQXRCO0FBQ0Esc0JBQU0zRyxTQUFOLENBQWdCLE9BQWhCLEVBQXlCMkcsR0FBekI7QUFDQSxzQkFBTTNHLFNBQU4sQ0FBZ0IsT0FBaEIsRUFBeUIyRyxHQUF6QjtBQUNBLHNCQUFNM0csU0FBTixDQUFnQixPQUFoQixFQUF5QjJHLEdBQXpCO0FBQ0Esc0JBQU0zRyxTQUFOLENBQWdCLElBQWhCLEVBQXNCeWEsSUFBdEI7QUFDQSxzQkFBTXphLFNBQU4sQ0FBZ0IsTUFBaEIsRUFBd0J5YSxJQUF4QjtBQUNEOzs7QUFFRCxpQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTnJXLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLHFJQUNWQSxJQURVOztBQUduQixVQUFLc1csVUFBTCxHQUFrQixJQUFsQjtBQUNBLFVBQUtDLEtBQUwsR0FBYSxJQUFiO0FBQ0EsVUFBS0MsT0FBTCxHQUFlLElBQWY7QUFDQSxVQUFLQyxPQUFMLEdBQWUsSUFBZjtBQUNBLFVBQUtDLGlCQUFMLEdBQXlCLElBQXpCO0FBQ0EsVUFBS0MsU0FBTCxHQUFpQixFQUFqQjtBQUNBLFVBQUtDLFdBQUwsR0FBbUIsSUFBbkI7QUFDQSxVQUFLQyxpQkFBTCxHQUF5QixJQUF6QjtBQVZtQjtBQVdwQjs7Ozs4QkFFU3BWLEksRUFBTTtBQUNkLFdBQUtxVixJQUFMLENBQVVyVixJQUFWO0FBQ0Q7Ozs4QkFFUztBQUNSLFdBQUtzVixjQUFMO0FBQ0Q7OzsrQkFFVTtBQUNULFdBQUtELElBQUwsQ0FBVSxLQUFLbFQsS0FBTCxDQUFXb1QsRUFBckI7QUFDRDs7O3FDQUVnQjtBQUNmLFVBQUl2ZCxXQUFKOztBQUVBLFdBQUksSUFBSStCLElBQUksQ0FBUixFQUFXQyxJQUFJLEtBQUtoQyxFQUFMLENBQVFzRSxRQUFSLENBQWlCNUIsTUFBcEMsRUFBNENYLElBQUlDLENBQWhELEVBQW1ERCxHQUFuRCxFQUF3RDtBQUN0RCxZQUFJd0MsUUFBUSxLQUFLdkUsRUFBTCxDQUFRc0UsUUFBUixDQUFpQnZDLENBQWpCLENBQVo7O0FBRUEsWUFBR3dDLE1BQU1sQixZQUFOLENBQW1CLFdBQW5CLEtBQW1DLE1BQXRDLEVBQThDO0FBQzVDckQsZUFBS3VFLEtBQUw7O0FBRUE7QUFDRDs7QUFFRHZFLGFBQUt1RSxLQUFMO0FBQ0Q7O0FBRUQsVUFBRyxDQUFDdkUsRUFBSixFQUFRO0FBQ05BLGFBQUtiLFNBQVNnWixhQUFULENBQXVCLE1BQXZCLENBQUw7QUFDQW5ZLFdBQUdxQixTQUFILEdBQWUsS0FBS3JCLEVBQUwsQ0FBUXFCLFNBQXZCO0FBQ0EsYUFBS3JCLEVBQUwsQ0FBUXFCLFNBQVIsR0FBb0IsRUFBcEI7QUFDQSxhQUFLckIsRUFBTCxDQUFRc1csV0FBUixDQUFvQnRXLEVBQXBCO0FBQ0Q7O0FBRUQsVUFBSW1ELGdCQUFnQm5ELEdBQUdxRCxZQUFILENBQWdCLFdBQWhCLENBQXBCOztBQUVBLFVBQUdGLGlCQUFpQixNQUFwQixFQUE0QjtBQUMxQixZQUFJaEIsWUFBWSxnQkFBTUEsU0FBTixDQUFnQmdCLGlCQUFpQm5ELEdBQUdzRCxPQUFwQyxDQUFoQjs7QUFFQSxZQUFHLENBQUNuQixTQUFKLEVBQWU7QUFDYm5DLGFBQUdxTyxZQUFILENBQWdCLFdBQWhCLEVBQTZCLE1BQTdCO0FBQ0QsU0FGRCxNQUdLLElBQUcsRUFBRWxNLFVBQVVrRCxTQUFWLFlBQStCeUQsR0FBakMsQ0FBSCxFQUEwQztBQUM3QyxjQUFJMFUsT0FBT3JlLFNBQVNnWixhQUFULENBQXVCLE1BQXZCLENBQVg7O0FBRUFxRixlQUFLbEgsV0FBTCxDQUFpQnRXLEVBQWpCO0FBQ0FBLGVBQUt3ZCxJQUFMO0FBQ0Q7QUFDRjs7QUFFRCxXQUFLdEYsSUFBTCxHQUFZbFksR0FBR3FCLFNBQWY7QUFDQSxXQUFLOGIsV0FBTCxHQUFtQm5kLEdBQUd5ZCxXQUF0QjtBQUNBLFdBQUtMLGlCQUFMLEdBQXlCcGQsR0FBRzBkLFNBQTVCO0FBQ0ExZCxTQUFHb0csTUFBSDtBQUNEOzs7NENBRXVCO0FBQ3RCLFVBQUlwRyxLQUFLYixTQUFTZ1osYUFBVCxDQUF1QixVQUF2QixDQUFUOztBQUVBblksU0FBR3FCLFNBQUgsR0FBZSxLQUFLK2IsaUJBQXBCO0FBQ0FwZCxXQUFLQSxHQUFHMmQsT0FBSCxDQUFXQyxVQUFoQjs7QUFFQSxhQUFPNWQsRUFBUDtBQUNEOzs7eUJBRUl1RixHLEVBQUs5QyxLLEVBQU8zQyxJLEVBQU0rZCxLLEVBQU87QUFBQTs7QUFDNUIsV0FBS2IsT0FBTCxHQUFlYSxLQUFmO0FBQ0EsV0FBS2YsS0FBTCxHQUFhdlgsR0FBYjtBQUNBLFdBQUt3WCxPQUFMLEdBQWV0YSxLQUFmO0FBQ0EsV0FBS3dhLGlCQUFMLEdBQXlCLGdCQUFNL04sSUFBTixDQUFXek0sS0FBWCxDQUF6Qjs7QUFFQSxVQUFJeU4sT0FBTyxFQUFYO0FBQ0EsVUFBSTROLFFBQVEsQ0FBWjs7QUFFQSxVQUFHcmIsU0FBUyxRQUFPQSxLQUFQLHlDQUFPQSxLQUFQLE1BQWdCLFFBQXpCLElBQXFDQSxNQUFNc2IsTUFBOUMsRUFBc0Q7QUFDcEQ3TixlQUFPek4sTUFBTXNiLE1BQWI7QUFDRDs7QUFFRCxVQUFHLEtBQUtiLFNBQUwsQ0FBZWhOLElBQWYsQ0FBSCxFQUF5QjtBQUN2QjNLLGNBQU0ySyxJQUFOO0FBQ0E0TixnQkFBUSxDQUFSO0FBQ0QsT0FIRCxNQUlLLElBQUcsS0FBS1osU0FBTCxDQUFlM1gsR0FBZixDQUFILEVBQXdCO0FBQzNCdVksZ0JBQVEsQ0FBUjtBQUNEOztBQUVELFVBQUdBLEtBQUgsRUFBVTtBQUNSLFlBQUlFLFdBQVcsS0FBS2QsU0FBTCxDQUFlM1gsR0FBZixDQUFmOztBQUVBLFlBQUd1WSxTQUFTLENBQVosRUFBZTtBQUNiLGNBQUlHLFNBQVNELFNBQVNFLFVBQVQsQ0FBb0J6YixLQUFqQztBQUNBLGNBQUkwYixRQUFRSCxTQUFTRSxVQUFULENBQW9CaFAsSUFBaEM7O0FBRUEsY0FBSSxLQUFLOE4sT0FBTCxLQUFpQmdCLFNBQVNILEtBQTlCLEVBQXFDO0FBQ25DRyxxQkFBU0ksUUFBVDtBQUNEOztBQUVELGNBQUksS0FBS3RCLEtBQUwsS0FBZWtCLFNBQVN6WSxHQUE1QixFQUFpQztBQUMvQnlZLHFCQUFTSyxNQUFUO0FBQ0Q7O0FBRUQsY0FBSSxDQUFDLGdCQUFNcFAsb0JBQU4sQ0FBMkJ4TSxLQUEzQixFQUFrQ3diLE1BQWxDLEVBQTBDRSxLQUExQyxFQUFpRCxLQUFLbEIsaUJBQXRELENBQUwsRUFBK0U7QUFDN0VlLHFCQUFTMUIsUUFBVDtBQUNEOztBQUVEeGMsZUFBS3lGLEdBQUwsSUFBWXlZLFFBQVo7QUFDQSxpQkFBTyxLQUFLZCxTQUFMLENBQWUzWCxHQUFmLENBQVA7O0FBRUEsaUJBQU95WSxRQUFQO0FBQ0Q7O0FBRUQsYUFBS2IsV0FBTCxHQUFtQmEsU0FBU2hlLEVBQVQsQ0FBWXlkLFdBQS9CO0FBQ0FPLGlCQUFTeEgsU0FBVDtBQUNEOztBQUVELFVBQUl4VyxLQUFLLEtBQUtzZSxxQkFBTCxFQUFUOztBQUVBdGUsU0FBR3FCLFNBQUgsR0FBZSxLQUFLNlcsSUFBcEI7QUFDQSxXQUFLbFksRUFBTCxDQUFRdWUsWUFBUixDQUFxQnZlLEVBQXJCLEVBQXlCLEtBQUttZCxXQUE5QjtBQUNBLHNCQUFNalosT0FBTixDQUFjbEUsRUFBZDs7QUFFQSxVQUFHeUMsU0FBUyxRQUFPQSxLQUFQLHlDQUFPQSxLQUFQLE1BQWdCLFFBQTVCLEVBQXNDO0FBQ3BDLFlBQUcsQ0FBQ0EsTUFBTXNiLE1BQVYsRUFBa0I7QUFDaEI3TixpQkFBTyxnQkFBTTNPLGtCQUFOLENBQXlCLEVBQXpCLEVBQTZCLFVBQUNDLEdBQUQsRUFBUztBQUMzQyxtQkFBTyxPQUFLMGIsU0FBTCxDQUFlMWIsR0FBZixDQUFQO0FBQ0QsV0FGTSxDQUFQOztBQUlBbUMsaUJBQU91RCxjQUFQLENBQXNCekUsS0FBdEIsRUFBNkIsUUFBN0IsRUFBdUM7QUFDckMwRSwwQkFBYyxLQUR1QjtBQUVyQ0Msd0JBQVksS0FGeUI7QUFHckNvWCxzQkFBVSxLQUgyQjtBQUlyQy9iLG1CQUFPeU47QUFKOEIsV0FBdkM7QUFNRDs7QUFFRHBRLGFBQUtvUSxJQUFMLElBQWEsS0FBSzJNLFVBQWxCO0FBQ0EsZUFBTyxLQUFLSyxTQUFMLENBQWVoTixJQUFmLENBQVA7QUFDRCxPQWhCRCxNQWlCSztBQUNILFlBQUcsZ0JBQU0zUixPQUFOLENBQWNFLEtBQWpCLEVBQXdCO0FBQ3RCLGNBQUlnZ0IsU0FBUyxPQUFPLEtBQUsxQixPQUFaLElBQXVCLFFBQXZCLFNBQXFDLEtBQUtBLE9BQTFDLFNBQXNELEtBQUtBLE9BQXhFOztBQUVBLGNBQUl4VyxPQUFPLHFHQUVTa1ksTUFGVCxvQkFFOEJBLE1BRjlCLHFCQUFYOztBQUtBM1osa0JBQVFDLElBQVIsQ0FBYVcsS0FBYixDQUFtQlosUUFBUUMsSUFBM0IsRUFBaUN3QixJQUFqQztBQUNEOztBQUVEekcsYUFBS3lGLEdBQUwsSUFBWSxLQUFLc1gsVUFBakI7QUFDQSxlQUFPLEtBQUtLLFNBQUwsQ0FBZTNYLEdBQWYsQ0FBUDtBQUNEOztBQUVELGFBQU92RixHQUFHZ0IsT0FBVjtBQUNEOzs7eUJBRUlnSCxJLEVBQU07QUFDVCxVQUFJLFFBQU9BLElBQVAseUNBQU9BLElBQVAsTUFBZSxRQUFmLElBQTJCQSxTQUFTLElBQXhDLEVBQThDO0FBQzVDLFlBQUcsZ0JBQU16SixPQUFOLENBQWNFLEtBQWpCLEVBQXdCO0FBQ3RCcUcsa0JBQVFDLElBQVI7QUFDQWlELGlCQUFPLEVBQVA7QUFDRDtBQUNGOztBQUVELFVBQUlsSSxPQUFPLEVBQVg7QUFDQSxVQUFJNGUsWUFBWSxFQUFoQjtBQUNBLFVBQUlDLGNBQWMsSUFBbEI7QUFDQSxVQUFJcGMsT0FBTyxLQUFLdkMsRUFBTCxDQUFRc0UsUUFBUixDQUFpQixLQUFLdEUsRUFBTCxDQUFRc0UsUUFBUixDQUFpQjVCLE1BQWpCLEdBQTBCLENBQTNDLENBQVg7O0FBRUEsVUFBR0gsUUFBUSxFQUFFQSxLQUFLdkIsT0FBTCxZQUF3QjRiLElBQTFCLENBQVgsRUFBNEM7QUFDMUMrQixzQkFBY3BjLElBQWQ7QUFDRDs7QUFFRCxVQUFHNkMsTUFBTTBSLE9BQU4sQ0FBYzlPLElBQWQsQ0FBSCxFQUF3QjtBQUN0QixhQUFJLElBQUlqRyxJQUFJLENBQVIsRUFBV0MsSUFBSWdHLEtBQUt0RixNQUF4QixFQUFnQ1gsSUFBSUMsQ0FBcEMsRUFBdUNELEdBQXZDLEVBQTRDO0FBQzFDMmMsb0JBQVV6ZCxJQUFWLENBQWUsS0FBSzJkLElBQUwsQ0FBVTdjLENBQVYsRUFBYWlHLEtBQUtqRyxDQUFMLENBQWIsRUFBc0JqQyxJQUF0QixFQUE0QmlDLENBQTVCLENBQWY7QUFDRDtBQUNGLE9BSkQsTUFLSztBQUNILFlBQUlBLEtBQUksQ0FBUjs7QUFFQSxhQUFJLElBQUlGLENBQVIsSUFBYW1HLElBQWIsRUFBbUI7QUFDakIsY0FBRyxDQUFDQSxLQUFLbEcsY0FBTCxDQUFvQkQsQ0FBcEIsQ0FBSixFQUE0QjtBQUMxQjtBQUNEOztBQUVENmMsb0JBQVV6ZCxJQUFWLENBQWUsS0FBSzJkLElBQUwsQ0FBVS9jLENBQVYsRUFBYW1HLEtBQUtuRyxDQUFMLENBQWIsRUFBc0IvQixJQUF0QixFQUE0QmlDLEVBQTVCLENBQWY7QUFDQUE7QUFDRDtBQUNGOztBQUVELFdBQUksSUFBSUEsTUFBSSxDQUFSLEVBQVdDLEtBQUkwYyxVQUFVaGMsTUFBN0IsRUFBcUNYLE1BQUlDLEVBQXpDLEVBQTRDRCxLQUE1QyxFQUFpRDtBQUMvQyxZQUFJaWMsV0FBV1UsVUFBVTNjLEdBQVYsQ0FBZjs7QUFFQSxhQUFLL0IsRUFBTCxDQUFRc1csV0FBUixDQUFvQjBILFNBQVNoZSxFQUE3QjtBQUNBZ2UsaUJBQVNhLE9BQVQsQ0FBaUI5YyxHQUFqQjtBQUNEOztBQUVENGMscUJBQWUsS0FBSzNlLEVBQUwsQ0FBUXNXLFdBQVIsQ0FBb0JxSSxXQUFwQixDQUFmOztBQUVBLFdBQUksSUFBSTljLEVBQVIsSUFBYSxLQUFLcWIsU0FBbEIsRUFBNkI7QUFDM0IsWUFBRyxDQUFDLEtBQUtBLFNBQUwsQ0FBZXBiLGNBQWYsQ0FBOEJELEVBQTlCLENBQUosRUFBc0M7QUFDcEM7QUFDRDs7QUFFRCxhQUFLcWIsU0FBTCxDQUFlcmIsRUFBZixFQUFrQjJVLFNBQWxCO0FBQ0Q7O0FBRUQsV0FBSzBHLFNBQUwsR0FBaUJwZCxJQUFqQjtBQUNEOzs7Ozs7QUE3T2tCZ0osRyxDQUNaakYsTyxHQUFVLE07a0JBREVpRixHO0FBOE9wQjs7SUFFWThULEksV0FBQUEsSTs7O0FBSVgsa0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsdUNBQU5yVyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSwwSUFDVkEsSUFEVTs7QUFHbkIsV0FBS3VZLEdBQUwsR0FBVyxJQUFYO0FBQ0EsV0FBSzVHLElBQUwsR0FBWSxPQUFLbFksRUFBTCxDQUFRcUIsU0FBcEI7QUFDQSxXQUFLMGQsS0FBTCxHQUFhLE9BQUsvZSxFQUFMLENBQVFvTyxZQUFSLENBQXFCLElBQXJCLENBQWI7O0FBRUEsUUFBRyxDQUFDLE9BQUsyUSxLQUFOLElBQWUsRUFBRSxPQUFLL2UsRUFBTCxDQUFRZSxVQUFSLENBQW1CQyxPQUFuQixZQUFzQzhILEdBQXhDLENBQWxCLEVBQWdFO0FBQzlELGFBQUtrVyxNQUFMO0FBQ0Q7QUFUa0I7QUFVcEI7Ozs7OEJBRVM7QUFDUixXQUFLM1QsUUFBTCxDQUFjckssT0FBZCxDQUFzQjZiLFVBQXRCLEdBQW1DLElBQW5DO0FBQ0EsV0FBS2lDLEdBQUwsR0FBVyxLQUFLelQsUUFBTCxDQUFjckssT0FBekI7QUFDQSxXQUFLb2QsUUFBTDtBQUNBLFdBQUtDLE1BQUw7QUFDQSxXQUFLL0IsUUFBTDs7QUFFQSxXQUFLeUMsS0FBTCxJQUFjLHlGQUFjclosS0FBZCxDQUFvQixJQUFwQixFQUEwQlksU0FBMUIsQ0FBZDtBQUNEOzs7K0JBRVU7QUFDVCxXQUFLeVksS0FBTCxJQUFjLDBGQUFlclosS0FBZixDQUFxQixJQUFyQixFQUEyQlksU0FBM0IsQ0FBZDtBQUNEOzs7K0JBRVU7QUFDVCxXQUFLdVgsS0FBTCxHQUFhLEtBQUtpQixHQUFMLENBQVM5QixPQUF0QjtBQUNBLFdBQUs1YyxLQUFMLENBQVc2ZSxLQUFYLENBQWlCLFdBQWpCLEVBQThCLEtBQUtwQixLQUFuQztBQUNEOzs7NkJBRVE7QUFDUCxXQUFLdFksR0FBTCxHQUFXLEtBQUt1WixHQUFMLENBQVNoQyxLQUFwQjtBQUNBLFdBQUsxYyxLQUFMLENBQVc2ZSxLQUFYLENBQWlCLFNBQWpCLEVBQTRCLEtBQUsxWixHQUFqQztBQUNEOzs7K0JBRVU7QUFDVCxXQUFLOUMsS0FBTCxHQUFhLEtBQUtxYyxHQUFMLENBQVMvQixPQUF0QjtBQUNBLFdBQUszYyxLQUFMLENBQVc2ZSxLQUFYLENBQWlCLFdBQWpCLEVBQThCLEtBQUt4YyxLQUFuQyxFQUEwQyxJQUExQzs7QUFFQSxXQUFLeWIsVUFBTCxHQUFrQjtBQUNoQmhQLGNBQU0sS0FBSzRQLEdBQUwsQ0FBUzdCLGlCQURDO0FBRWhCeGEsZUFBTyxLQUFLcWMsR0FBTCxDQUFTL0I7QUFGQSxPQUFsQjtBQUlEOzs7NEJBRU9jLEssRUFBTyxDQUFFOzs7O0VBbERPL1UsRzs7QUFBYjhULEksQ0FDSi9ZLE8sR0FBVSxFO0FBRE4rWSxJLENBRUpwUCxpQixHQUFvQixJOzs7QUFtRDdCMUUsSUFBSThULElBQUosR0FBV0EsSUFBWCxDOzs7Ozs7Ozs7Ozs7Ozs7QUN6U0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJ0VCxLOzs7Ozs2QkFDSDtBQUNkLHNCQUFNbkgsU0FBTixDQUFnQixPQUFoQixFQUF5Qm1ILEtBQXpCO0FBQ0Q7OztBQUVELG1CQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOL0MsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEseUlBQ1ZBLElBRFU7O0FBR25CLFVBQUt2RyxFQUFMLENBQVFxQixTQUFSLEdBQW9CLEVBQXBCO0FBSG1CO0FBSXBCOztBQUVEOzs7Ozs7OztrQ0FJYzZkLFUsRUFBWTtBQUFBOztBQUN4QixVQUFJQyxRQUFRRCxXQUFXRSxJQUFYLENBQWdCRCxLQUE1QjtBQUNBLFVBQUk1RSxTQUFTMkUsV0FBV0UsSUFBWCxDQUFnQjdFLE1BQTdCO0FBQ0EsVUFBSXRRLE1BQU1pVixXQUFXalYsR0FBckI7QUFDQSxVQUFJc1IsUUFBUTJELFdBQVczRCxLQUF2QjtBQUNBLFVBQUkvVyxJQUFJbEYsUUFBUUMsT0FBUixFQUFSOztBQUVBLGVBQVM4Zix3QkFBVCxDQUFrQ0QsSUFBbEMsRUFBd0M7QUFDdEMsWUFBR0EsS0FBSzlTLE1BQVIsRUFBZ0I7QUFDZCxjQUFJOFMsS0FBSzlTLE1BQUwsQ0FBWW5LLFNBQWhCLEVBQTJCO0FBQ3pCLG1CQUFPaWQsS0FBSzlTLE1BQUwsQ0FBWW5LLFNBQVosQ0FBc0JrTCxPQUF0QixDQUE4QmlTLFlBQTlCLENBQTJDRixJQUFsRDtBQUNEOztBQUVELGlCQUFPQyx5QkFBeUJELEtBQUs5UyxNQUE5QixDQUFQO0FBQ0Q7O0FBRUQsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsV0FBS2UsT0FBTCxDQUFhaVMsWUFBYixHQUE0QjtBQUMxQkYsY0FBTTtBQUNKRCxpQkFBT0EsTUFBTTNlLElBRFQ7QUFFSndILGdCQUFNa1gsV0FBV0UsSUFBWCxDQUFnQnBYLElBRmxCO0FBR0p1UyxrQkFBUUEsTUFISjtBQUlKak8sa0JBQVErUyx5QkFBeUJILFdBQVdFLElBQXBDO0FBSkosU0FEb0I7QUFPMUI3RSxnQkFBUTJFLFdBQVczRSxNQVBPO0FBUTFCdFEsYUFBS0EsR0FScUI7QUFTMUJzUixlQUFPQTtBQVRtQixPQUE1Qjs7QUFZQSxVQUFHLENBQUMyRCxXQUFXRSxJQUFYLENBQWdCRyxNQUFwQixFQUE0QjtBQUMxQixlQUFPLGdCQUFNcmIsT0FBTixDQUFjLEtBQUtsRSxFQUFuQixFQUF1QixFQUFFK0MsV0FBVyxJQUFiLEVBQXZCLENBQVA7QUFDRDs7QUFFRCxVQUFJb2MsTUFBTWhlLFFBQVYsRUFBb0I7QUFDbEIsYUFBS3FlLEtBQUw7QUFDQSxhQUFLeGYsRUFBTCxDQUFRcUIsU0FBUixtQkFBa0M4ZCxNQUFNaGUsUUFBeEM7QUFDRDs7QUFFRCxVQUFJZ2UsTUFBTXBTLFdBQVYsRUFBdUI7QUFDckJ2SSxZQUFJLGtCQUFRdUQsR0FBUixDQUFZb1gsTUFBTXBTLFdBQWxCLEVBQStCcEksSUFBL0IsQ0FBb0MsVUFBQ2hELEdBQUQsRUFBUztBQUMvQyxpQkFBSzZkLEtBQUw7QUFDQSxpQkFBS3hmLEVBQUwsQ0FBUXFCLFNBQVIsbUJBQWtDTSxJQUFJcUcsSUFBdEM7QUFDRCxTQUhHLENBQUo7QUFJRDs7QUFFRCxhQUFPeEQsRUFBRUcsSUFBRixDQUFPLFlBQU07QUFDbEIsZUFBTyxnQkFBTVQsT0FBTixDQUFjLE9BQUtsRSxFQUFuQixFQUF1QixFQUFFK0MsV0FBVyxJQUFiLEVBQXZCLENBQVA7QUFDRCxPQUZNLENBQVA7QUFHRDs7Ozs7O2tCQWpFa0J1RyxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDSkFkLFk7QUFDbkIsd0JBQVloSSxJQUFaLEVBQWtCUixFQUFsQixFQUFzQm1DLFNBQXRCLEVBQWlDO0FBQUE7O0FBQy9CLFNBQUszQixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLUixFQUFMLEdBQVVBLEVBQVY7QUFDQSxTQUFLbUMsU0FBTCxHQUFpQkEsU0FBakI7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7NEJBT1E2RixJLEVBQW1DO0FBQUEsVUFBN0J6SixPQUE2Qix1RUFBbkIsRUFBbUI7QUFBQSxVQUFma2hCLEtBQWUsdUVBQVAsS0FBTzs7QUFDekMsVUFBR0EsU0FBUyxDQUFDLEtBQUtDLFlBQUwsRUFBYixFQUFrQztBQUNoQyxhQUFLMWYsRUFBTCxDQUFRMEgsYUFBUixDQUFzQixJQUFJQyxXQUFKLENBQWdCLEtBQUtuSCxJQUFyQixhQUE0Qm9ILFFBQVFJLElBQXBDLElBQTZDekosT0FBN0MsRUFBdEI7QUFDRDtBQUNGOztBQUVEOzs7Ozs7Ozs7OzZCQU9Tb2hCLE0sRUFBcUM7QUFBQSxVQUE3QnBoQixPQUE2Qix1RUFBbkIsRUFBbUI7QUFBQSxVQUFma2hCLEtBQWUsdUVBQVAsS0FBTzs7QUFDNUMsVUFBR0EsU0FBUyxDQUFDLEtBQUtDLFlBQUwsRUFBYixFQUFrQztBQUNoQyxhQUFLMWYsRUFBTCxDQUFRMEgsYUFBUixDQUFzQixJQUFJaVksTUFBSixDQUFXLEtBQUtuZixJQUFoQixFQUFzQmpDLE9BQXRCLENBQXRCO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7Ozs7bUNBS2U7QUFDYixVQUFJeUosT0FBTyxLQUFLN0YsU0FBTCxDQUFlNkksaUJBQTFCOztBQUVBLFVBQUcsQ0FBQ2hELElBQUosRUFBVTtBQUNSLGVBQU8sS0FBUDtBQUNEOztBQUVELGFBQU9BLEtBQUtoSSxFQUFMLEtBQVksS0FBS0EsRUFBakIsSUFBdUJnSSxLQUFLMEMsS0FBTCxDQUFXa1YsSUFBWCxLQUFvQixLQUFLcGYsSUFBaEQsSUFBd0R3SCxLQUFLN0YsU0FBTCxLQUFtQixLQUFLQSxTQUF2RjtBQUNEOztBQUVEOzs7Ozs7Ozt5QkFLS1QsRSxFQUFJO0FBQ1AsV0FBSzFCLEVBQUwsQ0FBUWtHLGdCQUFSLENBQXlCLEtBQUsxRixJQUE5QixFQUFvQyxLQUFLa0IsRUFBTCxHQUFVQSxFQUE5QztBQUNEOztBQUVEOzs7Ozs7NkJBR1M7QUFDUCxXQUFLQSxFQUFMLElBQVcsS0FBSzFCLEVBQUwsQ0FBUW1HLG1CQUFSLENBQTRCLEtBQUszRixJQUFqQyxFQUF1QyxLQUFLa0IsRUFBNUMsQ0FBWDtBQUNEOzs7Ozs7a0JBOURrQjhHLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXJCOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztJQUVhcVgsVSxXQUFBQSxVO0FBQ1gsc0JBQVk1VixHQUFaLEVBQWlCc1IsS0FBakIsRUFBb0Q7QUFBQSxRQUE1QnJMLElBQTRCLHVFQUFyQixFQUFxQjtBQUFBLFFBQWpCNEgsUUFBaUIsdUVBQU4sSUFBTTs7QUFBQTs7QUFDbEQsU0FBSzdOLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtzUixLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLckwsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBSzRILFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS3NILElBQUwsR0FBWSxJQUFaO0FBQ0EsU0FBS1UsTUFBTCxHQUFjLEVBQWQ7QUFDQSxTQUFLQyxNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUt4RixNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUt2VyxXQUFMLEdBQW1CLEtBQW5CO0FBQ0Q7Ozs7K0JBRVU7QUFDVCxXQUFLZ2IsTUFBTDtBQUNBalYsYUFBT29WLEtBQVAsQ0FBYXpaLEtBQWIsQ0FBbUJxRSxNQUFuQixFQUEyQnpELFNBQTNCO0FBQ0Q7Ozs0QkFFTzhZLEksRUFBTTtBQUNaQSxXQUFLOVMsTUFBTCxHQUFjLEtBQUs4UyxJQUFMLElBQWEsSUFBM0I7QUFDQSxXQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDQSxXQUFLVSxNQUFMLENBQVk3ZSxJQUFaLENBQWlCbWUsSUFBakI7QUFDQSxXQUFLVyxNQUFMLENBQVk5ZSxJQUFaLENBQWlCbWUsS0FBS0QsS0FBdEI7QUFDQSxXQUFLNUUsTUFBTCxHQUFjLENBQUM2RSxLQUFLOVMsTUFBTixHQUFjOFMsS0FBSzdFLE1BQW5CLGdCQUErQjZFLEtBQUs5UyxNQUFMLENBQVlpTyxNQUEzQyxFQUFzRDZFLEtBQUs3RSxNQUEzRCxDQUFkO0FBQ0Q7Ozs2QkFFUTRFLEssRUFBTztBQUNkLFdBQUksSUFBSXBkLElBQUksQ0FBUixFQUFXQyxJQUFJLEtBQUs4ZCxNQUFMLENBQVlwZCxNQUEvQixFQUF1Q1gsSUFBSUMsQ0FBM0MsRUFBOENELEdBQTlDLEVBQW1EO0FBQ2pELFlBQUlpZSxRQUFRLEtBQUtGLE1BQUwsQ0FBWS9kLENBQVosQ0FBWjs7QUFFQSxZQUFHaWUsTUFBTWIsS0FBTixLQUFnQkEsS0FBbkIsRUFBMEI7QUFDeEIsaUJBQU9hLEtBQVA7QUFDRDtBQUNGOztBQUVELGFBQU8sSUFBUDtBQUNEOzs7NkJBRVFiLEssRUFBTztBQUNkLGFBQU8sS0FBS1ksTUFBTCxDQUFZN1IsT0FBWixDQUFvQmlSLEtBQXBCLEtBQThCLENBQUMsQ0FBdEM7QUFDRDs7OzZCQUVRO0FBQ1AsV0FBS25iLFdBQUwsR0FBbUIsSUFBbkI7QUFDRDs7Ozs7O0FBR0gsSUFBTStGLFNBQVMsRUFBZjs7QUFFQUEsT0FBT21QLE9BQVAsR0FBaUIsR0FBakI7QUFDQW5QLE9BQU9nVyxNQUFQLEdBQWdCLEVBQWhCO0FBQ0FoVyxPQUFPa1csUUFBUCxHQUFrQixJQUFsQjtBQUNBbFcsT0FBT21XLFdBQVAsR0FBcUIsQ0FBckI7QUFDQW5XLE9BQU9yTCxNQUFQLEdBQWdCLEtBQWhCO0FBQ0FxTCxPQUFPb1csU0FBUCxHQUFtQixFQUFuQjtBQUNBcFcsT0FBT3FXLFlBQVAsR0FBc0IsZ0JBQXRCO0FBQ0FyVyxPQUFPc1csZUFBUCxHQUF5QjtBQUFBLFNBQUtoTyw0QkFBTDtBQUFBLENBQXpCOztBQUVBOzs7Ozs7OztBQVFBdEksT0FBT3VXLEdBQVAsR0FBYSxVQUFVOWYsSUFBVixFQUFnQitmLE9BQWhCLEVBQXVDO0FBQUEsTUFBZGhpQixPQUFjLHVFQUFKLEVBQUk7O0FBQ2xELE1BQUlpaUIsaUJBQWlCO0FBQ25CcmYsY0FBVSxFQURTO0FBRW5CNEwsaUJBQWEsRUFGTTtBQUduQjBULGNBQVUsS0FIUztBQUluQjVKLGFBQVMsaUJBQUNxSSxVQUFELEVBQWdCLENBQUU7QUFKUixHQUFyQjs7QUFPQSxNQUFHLENBQUMzZ0IsUUFBUTRDLFFBQVQsSUFBcUIsQ0FBQzVDLFFBQVF3TyxXQUFqQyxFQUE4QztBQUM1Q3hPLFlBQVFraUIsUUFBUixHQUFtQixJQUFuQjtBQUNEOztBQUVELE1BQUcsS0FBS2hJLEdBQUwsQ0FBU2pZLElBQVQsQ0FBSCxFQUFtQjtBQUNqQixVQUFNLElBQUlGLEtBQUosb0JBQTJCRSxJQUEzQix5QkFBTjtBQUNEOztBQUVELE9BQUtrZ0IsUUFBTCxDQUFjbGdCLElBQWQsRUFBb0IrZixPQUFwQixlQUFpQ0MsY0FBakMsRUFBb0RqaUIsT0FBcEQ7O0FBRUEsU0FBTyxJQUFQO0FBQ0QsQ0FuQkQ7O0FBcUJBOzs7OztBQUtBd0wsT0FBTzNELE1BQVAsR0FBZ0IsVUFBUzVGLElBQVQsRUFBZTtBQUM3QixPQUFJLElBQUl1QixJQUFJLENBQVIsRUFBV0MsSUFBSSxLQUFLK2QsTUFBTCxDQUFZcmQsTUFBL0IsRUFBdUNYLElBQUlDLENBQTNDLEVBQThDRCxHQUE5QyxFQUFtRDtBQUNqRCxRQUFHLEtBQUtnZSxNQUFMLENBQVloZSxDQUFaLEVBQWV2QixJQUFmLElBQXVCQSxJQUExQixFQUFnQztBQUM5QixXQUFLdWYsTUFBTCxDQUFZblosTUFBWixDQUFtQjdFLENBQW5CLEVBQXNCLENBQXRCOztBQUVBO0FBQ0Q7QUFDRjtBQUNGLENBUkQ7O0FBVUE7Ozs7OztBQU1BZ0ksT0FBTzBPLEdBQVAsR0FBYSxVQUFTalksSUFBVCxFQUFlO0FBQzFCLE9BQUksSUFBSXVCLElBQUksQ0FBUixFQUFXQyxJQUFJLEtBQUsrZCxNQUFMLENBQVlyZCxNQUEvQixFQUF1Q1gsSUFBSUMsQ0FBM0MsRUFBOENELEdBQTlDLEVBQW1EO0FBQ2pELFFBQUcsS0FBS2dlLE1BQUwsQ0FBWWhlLENBQVosRUFBZXZCLElBQWYsSUFBdUJBLElBQTFCLEVBQWdDO0FBQzlCLGFBQU8sSUFBUDtBQUNEO0FBQ0Y7O0FBRUQsU0FBTyxLQUFQO0FBQ0QsQ0FSRDs7QUFVQTs7Ozs7Ozs7O0FBU0F1SixPQUFPb1YsS0FBUCxHQUFlLFVBQVUzZSxJQUFWLEVBQWtFO0FBQUEsTUFBbEQrWixNQUFrRCx1RUFBekMsRUFBeUM7QUFBQSxNQUFyQ2dCLEtBQXFDLHVFQUE3QixFQUE2QjtBQUFBLE1BQXpCckwsSUFBeUIsdUVBQWxCLEVBQWtCO0FBQUEsTUFBZDNSLE9BQWMsdUVBQUosRUFBSTs7QUFDL0UsTUFBSTRnQixRQUFRLEtBQUt3QixRQUFMLENBQWNuZ0IsSUFBZCxDQUFaOztBQUVBLE1BQUksQ0FBQzJlLEtBQUwsRUFBWTtBQUNWLFVBQU0sSUFBSTdlLEtBQUosc0NBQTZDRSxJQUE3QyxDQUFOO0FBQ0Q7O0FBRUQsTUFBSXlKLE1BQU0sS0FBSzJXLGNBQUwsQ0FBb0J6QixLQUFwQixFQUEyQjVFLE1BQTNCLEVBQW1DZ0IsS0FBbkMsRUFBMENyTCxJQUExQyxDQUFWOztBQUVBLE1BQUcsQ0FBQzNSLFFBQVFzaUIsTUFBVCxJQUFtQjVXLFFBQVEsS0FBSzZXLE1BQUwsRUFBOUIsRUFBNkM7QUFDM0M7QUFDRDs7QUFFRCxPQUFLWCxTQUFMLEdBQWlCNWhCLE9BQWpCO0FBQ0EsT0FBSzJMLE1BQUwsQ0FBWUQsR0FBWjtBQUNELENBZkQ7O0FBaUJBOzs7QUFHQUYsT0FBT2dYLElBQVAsR0FBYyxZQUFXO0FBQ3ZCLFNBQU83aEIsT0FBTzhoQixPQUFQLENBQWVELElBQWYsQ0FBb0JyYixLQUFwQixDQUEwQnhHLE9BQU84aEIsT0FBakMsRUFBMEMxYSxTQUExQyxDQUFQO0FBQ0QsQ0FGRDs7QUFJQTs7O0FBR0F5RCxPQUFPa1gsRUFBUCxHQUFZLFlBQVc7QUFDckIsU0FBTy9oQixPQUFPOGhCLE9BQVAsQ0FBZUMsRUFBZixDQUFrQnZiLEtBQWxCLENBQXdCeEcsT0FBTzhoQixPQUEvQixFQUF3QzFhLFNBQXhDLENBQVA7QUFDRCxDQUZEOztBQUlBOzs7QUFHQXlELE9BQU9tWCxPQUFQLEdBQWlCLFlBQVc7QUFDMUIsU0FBT2hpQixPQUFPOGhCLE9BQVAsQ0FBZUUsT0FBZixDQUF1QnhiLEtBQXZCLENBQTZCeEcsT0FBTzhoQixPQUFwQyxFQUE2QzFhLFNBQTdDLENBQVA7QUFDRCxDQUZEOztBQUlBOzs7Ozs7QUFNQXlELE9BQU9vWCxRQUFQLEdBQWtCLFVBQVNsWCxHQUFULEVBQTJDO0FBQUEsTUFBN0IxTCxPQUE2Qix1RUFBbkIsRUFBRXNpQixRQUFRLEtBQVYsRUFBbUI7O0FBQzNELE9BQUtWLFNBQUwsR0FBaUI1aEIsT0FBakI7O0FBRUEsTUFBRyxLQUFLMGhCLFFBQVIsRUFBa0I7QUFDaEIsUUFBSXBJLFVBQVUzWSxPQUFPaWlCLFFBQVAsQ0FBZ0JqUixJQUFoQixDQUFxQjlPLE9BQXJCLENBQTZCLEdBQTdCLEVBQWtDLEVBQWxDLENBQWQ7O0FBRUFsQyxXQUFPaWlCLFFBQVAsQ0FBZ0JqUixJQUFoQixHQUF1QmpHLEdBQXZCO0FBQ0E0TixnQkFBWTVOLEdBQVosSUFBbUIsS0FBSzlCLFdBQUwsR0FBbUJDLEtBQW5CLENBQXlCLFVBQUNDLEdBQUQ7QUFBQSxhQUFTdkQsUUFBUXNjLEtBQVIsQ0FBYy9ZLEdBQWQsQ0FBVDtBQUFBLEtBQXpCLENBQW5CO0FBQ0QsR0FMRCxNQU1LO0FBQ0huSixXQUFPOGhCLE9BQVAsQ0FBZUssU0FBZixDQUF5QixJQUF6QixFQUErQixFQUEvQixFQUFtQ3BYLEdBQW5DO0FBQ0Q7QUFDRixDQVpEOztBQWNBOzs7Ozs7QUFNQUYsT0FBTzlCLElBQVAsR0FBYyxZQUE0QztBQUFBOztBQUFBLE1BQWxDcVosVUFBa0MsdUVBQXJCLEVBQXFCO0FBQUEsTUFBakJyQixRQUFpQix1RUFBTixJQUFNOztBQUN4RCxNQUFJc0IsZUFBZXJpQixPQUFPOGhCLE9BQVAsQ0FBZUssU0FBbEM7O0FBRUFuaUIsU0FBTzhoQixPQUFQLENBQWVLLFNBQWYsR0FBMkIsWUFBVztBQUNwQyxRQUFJMWYsTUFBTTRmLGFBQWE3YixLQUFiLENBQW1CLElBQW5CLEVBQXlCWSxTQUF6QixDQUFWOztBQUVBeUQsV0FBTzVCLFdBQVAsR0FBcUJDLEtBQXJCLENBQTJCLFVBQUNDLEdBQUQ7QUFBQSxhQUFTdkQsUUFBUXNjLEtBQVIsQ0FBYy9ZLEdBQWQsQ0FBVDtBQUFBLEtBQTNCOztBQUVBLFdBQU8xRyxHQUFQO0FBQ0QsR0FORDs7QUFRQSxPQUFLNmYsc0JBQUwsR0FBOEIsWUFBTTtBQUNsQyxVQUFLclosV0FBTCxHQUFtQkMsS0FBbkIsQ0FBeUIsVUFBQ0MsR0FBRDtBQUFBLGFBQVN2RCxRQUFRc2MsS0FBUixDQUFjL1ksR0FBZCxDQUFUO0FBQUEsS0FBekI7QUFDRCxHQUZEOztBQUlBLE9BQUtpWixVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLE9BQUtyQixRQUFMLEdBQWdCQSxRQUFoQjs7QUFFQSxPQUFLRixNQUFMLENBQVk5SSxJQUFaLENBQWlCLFVBQUNFLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ3pCRCxRQUFJQSxFQUFFM1csSUFBRixDQUFPaWIsS0FBUCxDQUFhLEdBQWIsRUFBa0IvWSxNQUF0QjtBQUNBMFUsUUFBSUEsRUFBRTVXLElBQUYsQ0FBT2liLEtBQVAsQ0FBYSxHQUFiLEVBQWtCL1ksTUFBdEI7O0FBRUEsV0FBT3lVLElBQUlDLENBQVg7QUFDRCxHQUxEOztBQU9BLE1BQUkySSxTQUFTLEVBQWI7O0FBRUEsT0FBSyxJQUFJaGUsSUFBSSxDQUFSLEVBQVdDLElBQUksS0FBSytkLE1BQUwsQ0FBWXJkLE1BQWhDLEVBQXdDWCxJQUFJQyxDQUE1QyxFQUErQ0QsR0FBL0MsRUFBb0Q7QUFDbEQsUUFBSW9kLFFBQVEsS0FBS1ksTUFBTCxDQUFZaGUsQ0FBWixDQUFaO0FBQ0EsUUFBSTBNLFVBQVUsRUFBZDs7QUFFQXNSLFdBQU9aLE1BQU0zZSxJQUFiLElBQXFCMmUsS0FBckI7QUFDQUEsVUFBTTdhLFFBQU4sR0FBaUIsRUFBakI7QUFDQW1LLGNBQVUwUSxNQUFNM2UsSUFBTixDQUFXaWIsS0FBWCxDQUFpQixHQUFqQixDQUFWO0FBQ0FoTixZQUFRZ1QsR0FBUjtBQUNBdEMsVUFBTXBKLEtBQU4sR0FBY29KLE1BQU1zQixRQUFOLEdBQWdCLElBQWhCLEdBQXNCaFMsUUFBUS9MLE1BQTVDOztBQUVBLFFBQUkrTCxRQUFRL0wsTUFBWixFQUFvQjtBQUNsQixVQUFJZ2YsYUFBYWpULFFBQVF2TyxJQUFSLENBQWEsR0FBYixDQUFqQjtBQUNBLFVBQUlvTSxTQUFTeVQsT0FBTzJCLFVBQVAsQ0FBYjs7QUFFQSxVQUFJLENBQUNwVixNQUFMLEVBQWE7QUFDWCxjQUFNLElBQUloTSxLQUFKLG9DQUEyQ29oQixVQUEzQyxlQUErRHZDLE1BQU0zZSxJQUFyRSxPQUFOO0FBQ0Q7O0FBRUQsVUFBRzJlLE1BQU1wSixLQUFOLEtBQWdCLElBQWhCLElBQXdCekosT0FBT21VLFFBQWxDLEVBQTRDO0FBQzFDdEIsY0FBTXBKLEtBQU47QUFDRDs7QUFFRG9KLFlBQU13QyxXQUFOLEdBQW9CLEtBQUtDLFlBQUwsQ0FBa0J0VixPQUFPcVYsV0FBUCxHQUFxQixHQUFyQixHQUEyQnhDLE1BQU1vQixPQUFuRCxDQUFwQjtBQUNBalUsYUFBT2hJLFFBQVAsQ0FBZ0JyRCxJQUFoQixDQUFxQmtlLEtBQXJCO0FBQ0QsS0FkRCxNQWVLO0FBQ0hBLFlBQU13QyxXQUFOLEdBQW9CeEMsTUFBTW9CLE9BQTFCO0FBQ0Q7QUFDRjs7QUFFRCxNQUFHLENBQUMsS0FBS1IsTUFBTCxDQUFZcmQsTUFBYixJQUF1QixnQkFBTW5FLE9BQU4sQ0FBY0UsS0FBeEMsRUFBK0M7QUFDN0NxRyxZQUFRQyxJQUFSO0FBQ0Q7O0FBRUQ3RixTQUFPZ0gsZ0JBQVAsQ0FBd0IsVUFBeEIsRUFBb0MsS0FBS3NiLHNCQUF6QztBQUNBLE9BQUs5aUIsTUFBTCxHQUFjLElBQWQ7QUFDRCxDQS9ERDs7QUFpRUE7Ozs7OztBQU1BcUwsT0FBTzRXLFFBQVAsR0FBa0IsVUFBVW5nQixJQUFWLEVBQWdCO0FBQ2hDLE9BQUssSUFBSXVCLElBQUksQ0FBUixFQUFXQyxJQUFJLEtBQUsrZCxNQUFMLENBQVlyZCxNQUFoQyxFQUF3Q1gsSUFBSUMsQ0FBNUMsRUFBK0NELEdBQS9DLEVBQW9EO0FBQ2xELFFBQUlvZCxRQUFRLEtBQUtZLE1BQUwsQ0FBWWhlLENBQVosQ0FBWjs7QUFFQSxRQUFJb2QsTUFBTTNlLElBQU4sSUFBY0EsSUFBbEIsRUFBd0I7QUFDdEIsYUFBTzJlLEtBQVA7QUFDRDtBQUNGOztBQUVELFNBQU8sSUFBUDtBQUNELENBVkQ7O0FBWUE7Ozs7Ozs7QUFPQXBWLE9BQU8yVyxRQUFQLEdBQWtCLFVBQVVsZ0IsSUFBVixFQUFnQitmLE9BQWhCLEVBQXVDO0FBQUEsTUFBZGhpQixPQUFjLHVFQUFKLEVBQUk7O0FBQ3ZELE1BQUk0Z0IscUJBQVk1Z0IsT0FBWixJQUFxQmlDLFVBQXJCLEVBQTJCK2YsZ0JBQTNCLEdBQUo7O0FBRUF4VyxTQUFPZ1csTUFBUCxDQUFjOWUsSUFBZCxDQUFtQmtlLEtBQW5COztBQUVBLFNBQU9BLEtBQVA7QUFDRCxDQU5EOztBQVFBOzs7OztBQUtBcFYsT0FBTzhYLFdBQVAsR0FBcUIsVUFBVXJoQixJQUFWLEVBQWdCO0FBQ25DLE9BQUssSUFBSXVCLElBQUksQ0FBUixFQUFXQyxJQUFJLEtBQUsrZCxNQUFMLENBQVlyZCxNQUFoQyxFQUF3Q1gsSUFBSUMsQ0FBNUMsRUFBK0NELEdBQS9DLEVBQW9EO0FBQ2xELFFBQUlvZCxRQUFRLEtBQUtZLE1BQUwsQ0FBWWhlLENBQVosQ0FBWjs7QUFFQSxRQUFJb2QsTUFBTTNlLElBQU4sSUFBY0EsSUFBbEIsRUFBd0I7QUFDdEIsV0FBS3VmLE1BQUwsQ0FBWW5aLE1BQVosQ0FBbUI3RSxDQUFuQixFQUFzQixDQUF0Qjs7QUFFQTtBQUNEO0FBQ0Y7QUFDRixDQVZEOztBQVlBOzs7OztBQUtBZ0ksT0FBT0csTUFBUCxHQUFnQixVQUFVRCxHQUFWLEVBQWU7QUFDN0IsT0FBS2dXLFFBQUwsR0FBZSxLQUFLNkIsVUFBTCxDQUFnQjdYLEdBQWhCLENBQWYsR0FBcUMsS0FBSzhYLGFBQUwsQ0FBbUI5WCxHQUFuQixDQUFyQztBQUNELENBRkQ7O0FBSUE7Ozs7O0FBS0FGLE9BQU9nWSxhQUFQLEdBQXVCLFVBQVU5WCxHQUFWLEVBQWU7QUFDcEMvSyxTQUFPOGhCLE9BQVAsQ0FBZUssU0FBZixDQUF5QixJQUF6QixFQUErQixFQUEvQixFQUFtQ3BYLEdBQW5DO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7QUFLQUYsT0FBTytYLFVBQVAsR0FBb0IsVUFBVTdYLEdBQVYsRUFBZTtBQUNqQy9LLFNBQU9paUIsUUFBUCxDQUFnQmpSLElBQWhCLEdBQXVCLE9BQU9qRyxPQUFPLEdBQWQsQ0FBdkI7QUFDRCxDQUZEOztBQUlBOzs7OztBQUtBRixPQUFPK1csTUFBUCxHQUFnQixZQUFZO0FBQzFCLFNBQU8sS0FBS2IsUUFBTCxHQUFnQixLQUFLK0IsVUFBTCxFQUFoQixHQUFvQyxLQUFLQyxhQUFMLEVBQTNDO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7QUFLQWxZLE9BQU9rWSxhQUFQLEdBQXVCLFlBQVk7QUFDakMsU0FBTy9pQixPQUFPaWlCLFFBQVAsQ0FBZ0JlLFFBQWhCLEdBQTJCaGpCLE9BQU9paUIsUUFBUCxDQUFnQmdCLE1BQTNDLEdBQW9EampCLE9BQU9paUIsUUFBUCxDQUFnQmpSLElBQTNFO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7QUFLQW5HLE9BQU9pWSxVQUFQLEdBQW9CLFlBQVk7QUFDOUIsU0FBTzlpQixPQUFPaWlCLFFBQVAsQ0FBZ0JqUixJQUFoQixDQUFxQjlPLE9BQXJCLENBQTZCLElBQTdCLEVBQW1DLEVBQW5DLENBQVA7QUFDRCxDQUZEOztBQUlBOzs7OztBQUtBMkksT0FBT3FZLFdBQVAsR0FBcUIsWUFBVztBQUM5QixTQUFPLEtBQUtuQyxRQUFMLEdBQWdCLEtBQUtvQyxlQUFMLEVBQWhCLEdBQXlDLEtBQUtDLGtCQUFMLEVBQWhEO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7QUFLQXZZLE9BQU91WSxrQkFBUCxHQUE0QixZQUFXO0FBQ3JDLFNBQU8sa0JBQVFDLGVBQVIsQ0FBd0JyakIsT0FBT2lpQixRQUFQLENBQWdCZ0IsTUFBaEIsQ0FBdUIvZ0IsT0FBdkIsQ0FBK0IsS0FBL0IsRUFBc0MsRUFBdEMsQ0FBeEIsQ0FBUDtBQUNELENBRkQ7O0FBSUE7Ozs7O0FBS0EySSxPQUFPc1ksZUFBUCxHQUF5QixZQUFXO0FBQ2xDLFNBQU8sa0JBQVFFLGVBQVIsQ0FBeUJyakIsT0FBT2lpQixRQUFQLENBQWdCalIsSUFBaEIsQ0FBcUJ1TCxLQUFyQixDQUEyQixHQUEzQixFQUFnQyxDQUFoQyxLQUFzQyxFQUEvRCxDQUFQO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7Ozs7QUFRQTFSLE9BQU82VyxjQUFQLEdBQXdCLFVBQVV6QixLQUFWLEVBQXFEO0FBQUEsTUFBcEM1RSxNQUFvQyx1RUFBM0IsRUFBMkI7QUFBQSxNQUF2QmdCLEtBQXVCLHVFQUFmLEVBQWU7QUFBQSxNQUFYckwsSUFBVyx1RUFBSixFQUFJOztBQUMzRSxVQUFPaVAsS0FBUCx5Q0FBT0EsS0FBUCxPQUFpQixRQUFqQixLQUE4QkEsUUFBUSxLQUFLd0IsUUFBTCxDQUFjeEIsS0FBZCxDQUF0Qzs7QUFFQSxNQUFJbFYsTUFBTWtWLE1BQU13QyxXQUFOLENBQWtCdmdCLE9BQWxCLENBQTBCLEtBQUtnZixZQUEvQixFQUE2QyxVQUFDMVEsQ0FBRCxFQUFJOFMsQ0FBSixFQUFPbkgsQ0FBUCxFQUFhO0FBQ2xFLFdBQU9kLE9BQU9jLENBQVAsS0FBYSxFQUFwQjtBQUNELEdBRlMsQ0FBVjs7QUFJQXBSLFFBQU0sS0FBSzJYLFlBQUwsQ0FBa0IzWCxHQUFsQixDQUFOOztBQUVBLE1BQUd0RyxPQUFPN0QsSUFBUCxDQUFZeWIsS0FBWixFQUFtQjdZLE1BQXRCLEVBQThCO0FBQzVCdUgsV0FBTyxNQUFNLGtCQUFRdVEsYUFBUixDQUFzQmUsS0FBdEIsQ0FBYjtBQUNEOztBQUVEckwsU0FBTyxDQUFDQSxRQUFRLEVBQVQsRUFBYTlPLE9BQWIsQ0FBcUIsR0FBckIsRUFBMEIsRUFBMUIsQ0FBUDs7QUFFQSxNQUFHLENBQUMsS0FBSzZlLFFBQU4sSUFBa0IvUCxJQUFyQixFQUEyQjtBQUN6QmpHLFdBQU8sTUFBTWlHLElBQWI7QUFDRDs7QUFFRCxTQUFPakcsR0FBUDtBQUNELENBcEJEOztBQXNCQTs7Ozs7O0FBTUFGLE9BQU82WCxZQUFQLEdBQXNCLFVBQVUzWCxHQUFWLEVBQWU7QUFDbkMsU0FBT0EsSUFBSTdJLE9BQUosQ0FBWSxRQUFaLEVBQXNCLEdBQXRCLENBQVA7QUFDRCxDQUZEOztBQUlBOzs7QUFHQTJJLE9BQU91TCxLQUFQLEdBQWUsWUFBWTtBQUN6QnBXLFNBQU9pSCxtQkFBUCxDQUEyQixVQUEzQixFQUF1QyxLQUFLcWIsc0JBQTVDO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7OztBQU9BelgsT0FBTzBZLGlCQUFQLEdBQTJCLFVBQVV0RCxLQUFWLEVBQWlCbFYsR0FBakIsRUFBc0I7QUFDL0MsVUFBT2tWLEtBQVAseUNBQU9BLEtBQVAsT0FBaUIsUUFBakIsS0FBOEJBLFFBQVEsS0FBS3dCLFFBQUwsQ0FBY3hCLEtBQWQsQ0FBdEM7O0FBRUEsTUFBSXJmLE9BQU8sRUFBWDtBQUNBLE1BQUlpQyxJQUFJLENBQVI7QUFDQSxNQUFJd1ksU0FBUyxFQUFiOztBQUVBdFEsUUFBTUEsSUFBSXdSLEtBQUosQ0FBVSxHQUFWLEVBQWUsQ0FBZixDQUFOO0FBQ0F4UixRQUFNQSxJQUFJd1IsS0FBSixDQUFVLEdBQVYsRUFBZSxDQUFmLENBQU47O0FBRUEsTUFBSWlILGFBQWF2RCxNQUFNd0MsV0FBTixDQUFrQnZnQixPQUFsQixDQUEwQixLQUFLZ2YsWUFBL0IsRUFBNkMsVUFBQzFRLENBQUQsRUFBSThTLENBQUosRUFBT25ILENBQVAsRUFBYTtBQUN6RXZiLFNBQUttQixJQUFMLENBQVVvYSxDQUFWOztBQUVBLFdBQU8sV0FBUDtBQUNELEdBSmdCLENBQWpCOztBQU1BLE1BQUlzSCxRQUFRLElBQUlyWSxNQUFKLENBQVdvWSxVQUFYLENBQVo7QUFDQSxNQUFJRSxhQUFhM1ksSUFBSStNLEtBQUosQ0FBVTJMLEtBQVYsQ0FBakI7O0FBRUEsTUFBSSxDQUFDQyxVQUFMLEVBQWlCO0FBQ2YsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQzWSxNQUFJN0ksT0FBSixDQUFZdWhCLEtBQVosRUFBbUIsVUFBQ2pULENBQUQsRUFBSTJMLENBQUosRUFBVTtBQUMzQkEsVUFBTWQsT0FBT3phLEtBQUtpQyxDQUFMLENBQVAsSUFBa0JzWixDQUF4QjtBQUNBdFo7QUFDRCxHQUhEOztBQUtBLFNBQU8sRUFBRXdZLGNBQUYsRUFBUDtBQUNELENBN0JEOztBQStCQTs7Ozs7OztBQU9BeFEsT0FBTzhZLGFBQVAsR0FBdUIsVUFBUzFELEtBQVQsRUFBa0M7QUFBQSxNQUFsQjJELFFBQWtCLHVFQUFQLEtBQU87O0FBQ3ZELFVBQU8zRCxLQUFQLHlDQUFPQSxLQUFQLE9BQWlCLFFBQWpCLEtBQThCQSxRQUFRLEtBQUt3QixRQUFMLENBQWN4QixLQUFkLENBQXRDOztBQUVBLE1BQUlsVixNQUFNLEtBQUsyWCxZQUFMLENBQWtCLEtBQUtkLE1BQUwsR0FBY3JGLEtBQWQsQ0FBb0IsR0FBcEIsRUFBeUIsQ0FBekIsSUFBOEIsR0FBaEQsQ0FBVjtBQUNBLE1BQUlpSCxhQUFhdkQsTUFBTXdDLFdBQU4sQ0FBa0J2Z0IsT0FBbEIsQ0FBMEIsS0FBS2dmLFlBQS9CLEVBQTZDLFdBQTdDLENBQWpCO0FBQ0EsTUFBSTVlLE1BQU1zaEIsV0FBVUosVUFBVixHQUFzQixLQUFLZCxZQUFMLENBQWtCLE1BQU1jLFVBQU4sR0FBbUIsS0FBckMsQ0FBaEM7QUFDQSxNQUFJQyxRQUFRLElBQUlyWSxNQUFKLENBQVc5SSxHQUFYLENBQVo7O0FBRUEsU0FBT21oQixNQUFNblUsSUFBTixDQUFXdkUsR0FBWCxDQUFQO0FBQ0QsQ0FURDs7QUFXQTs7Ozs7O0FBTUFGLE9BQU9nWixhQUFQLEdBQXVCLFVBQVM1RCxLQUFULEVBQWdCO0FBQ3JDLFNBQU9wVixPQUFPOFksYUFBUCxDQUFxQjFELEtBQXJCLEVBQTRCLElBQTVCLENBQVA7QUFDRCxDQUZEOztBQUlBOzs7OztBQUtBcFYsT0FBT2laLFFBQVAsR0FBa0IsVUFBVWpOLEtBQVYsRUFBaUI7QUFBQTs7QUFDakMsTUFBSWhVLElBQUksQ0FBUjs7QUFFQSxNQUFJNlQsT0FBTyxTQUFQQSxJQUFPLENBQUM1VixFQUFELEVBQVE7QUFDakIsUUFBSWdnQixRQUFRaGdCLEdBQUd1RSxLQUFILENBQVMsT0FBSzhiLGVBQWQsQ0FBWjs7QUFFQSxRQUFJLENBQUNMLEtBQUwsRUFBWTtBQUNWLGFBQU8sSUFBUDtBQUNEOztBQUVELFFBQUlqZSxLQUFLZ1UsS0FBVCxFQUFnQjtBQUNkLGFBQU9pSyxLQUFQO0FBQ0Q7O0FBRURqZTs7QUFFQSxXQUFPNlQsS0FBS29LLEtBQUwsQ0FBUDtBQUNELEdBZEQ7O0FBZ0JBLFNBQU9wSyxLQUFLLGdCQUFNelIsSUFBWCxDQUFQO0FBQ0QsQ0FwQkQ7O0FBc0JBOzs7Ozs7O0FBT0E0RixPQUFPa1osc0JBQVAsR0FBZ0MsVUFBVXJpQixHQUFWLEVBQWVxSixHQUFmLEVBQW9CO0FBQ2xELE9BQUssSUFBSWxJLElBQUksQ0FBUixFQUFXQyxJQUFJcEIsSUFBSThCLE1BQXhCLEVBQWdDWCxJQUFJQyxDQUFwQyxFQUF1Q0QsR0FBdkMsRUFBNEM7QUFDMUMsUUFBSW9kLFFBQVF2ZSxJQUFJbUIsQ0FBSixDQUFaO0FBQ0EsUUFBSTRiLFVBQVUsS0FBSzhFLGlCQUFMLENBQXVCdEQsS0FBdkIsRUFBOEJsVixHQUE5QixDQUFkOztBQUVBLFFBQUksQ0FBQzBULE9BQUwsRUFBYztBQUNaO0FBQ0Q7O0FBRUQsc0JBQVF3QixPQUFPQSxLQUFmLElBQXlCeEIsT0FBekI7QUFDRDs7QUFFRCxTQUFPLElBQVA7QUFDRCxDQWJEOztBQWVBOzs7Ozs7QUFNQTVULE9BQU9tWixnQkFBUCxHQUEwQixVQUFVbk4sS0FBVixFQUFpQjtBQUN6QyxNQUFJZ0ssU0FBUyxFQUFiOztBQUVBLE9BQUssSUFBSWhlLElBQUksQ0FBUixFQUFXQyxJQUFJLEtBQUsrZCxNQUFMLENBQVlyZCxNQUFoQyxFQUF3Q1gsSUFBSUMsQ0FBNUMsRUFBK0NELEdBQS9DLEVBQW9EO0FBQ2xELFFBQUlvZCxRQUFRLEtBQUtZLE1BQUwsQ0FBWWhlLENBQVosQ0FBWjs7QUFFQSxRQUFJb2QsTUFBTXBKLEtBQU4sR0FBY0EsS0FBbEIsRUFBeUI7QUFDdkI7QUFDRCxLQUZELE1BR0ssSUFBSW9KLE1BQU1wSixLQUFOLEdBQWNBLEtBQWxCLEVBQXlCO0FBQzVCO0FBQ0Q7O0FBRURnSyxXQUFPOWUsSUFBUCxDQUFZa2UsS0FBWjtBQUNEOztBQUVELFNBQU9ZLE1BQVA7QUFDRCxDQWpCRDs7QUFtQkE7OztBQUdBaFcsT0FBTzVCLFdBQVAsR0FBcUIsWUFBWTtBQUFBOztBQUMvQixNQUFHLEtBQUtnYixlQUFSLEVBQXlCO0FBQ3ZCLFdBQU8sS0FBS0EsZUFBWjs7QUFFQSxXQUFPN2pCLFFBQVFDLE9BQVIsRUFBUDtBQUNEOztBQUVELE1BQUkwSyxNQUFNLEtBQUs2VyxNQUFMLEVBQVY7QUFDQSxNQUFJNVEsT0FBTyxLQUFLK1AsUUFBTCxHQUFlLEVBQWYsR0FBbUIvZ0IsT0FBT2lpQixRQUFQLENBQWdCalIsSUFBaEIsQ0FBcUI5TyxPQUFyQixDQUE2QixHQUE3QixFQUFrQyxFQUFsQyxDQUE5QjtBQUNBLE1BQUltYSxRQUFRLEtBQUs2RyxXQUFMLEVBQVo7QUFDQSxNQUFJZ0IsaUJBQWlCclosT0FBT21WLFVBQVAsSUFBcUIsSUFBMUM7QUFDQSxNQUFJQSxhQUFhblYsT0FBT21WLFVBQVAsR0FBb0IsSUFBSVcsVUFBSixDQUFlNVYsR0FBZixFQUFvQnNSLEtBQXBCLEVBQTJCckwsSUFBM0IsRUFBaUNrVCxjQUFqQyxDQUFyQztBQUNBLE1BQUlyTixRQUFRLENBQVo7O0FBRUEsTUFBSXdCLE9BQU8sU0FBUEEsSUFBTyxDQUFDd0ksTUFBRCxFQUFTc0QsS0FBVCxFQUFtQjtBQUM1QixRQUFJLENBQUN0RCxPQUFPcmQsTUFBWixFQUFvQjtBQUNsQixhQUFPMmdCLFNBQVNBLE9BQWhCO0FBQ0Q7O0FBRUQsUUFBSTFGLFVBQVUsT0FBS3NGLHNCQUFMLENBQTRCbEQsTUFBNUIsRUFBb0M5VixHQUFwQyxDQUFkOztBQUVBLFFBQUksQ0FBQzBULE9BQUwsRUFBYztBQUNaLGFBQU8wRixTQUFTQSxPQUFoQjtBQUNEOztBQUVELFFBQUlsRSxRQUFReEIsUUFBUXdCLEtBQXBCO0FBQ0EsUUFBSTVFLFNBQVNvRCxRQUFRcEQsTUFBckI7QUFDQSxRQUFJeUYsUUFBUWIsTUFBTXNCLFFBQU4sR0FBZ0IsSUFBaEIsR0FBc0IsT0FBS3VDLFFBQUwsQ0FBYzdELE1BQU1wSixLQUFwQixDQUFsQzs7QUFFQSxRQUFJLENBQUNpSyxLQUFELElBQVUsQ0FBQ2IsTUFBTXNCLFFBQXJCLEVBQStCO0FBQzdCLFlBQU0sSUFBSW5nQixLQUFKLDJDQUFtRDZlLE1BQU0zZSxJQUF6RCxPQUFOO0FBQ0Q7O0FBRUQwZSxlQUFXb0UsT0FBWCxDQUFtQixFQUFFbkUsWUFBRixFQUFTNUUsY0FBVCxFQUFpQmdCLFlBQWpCLEVBQXdCckwsVUFBeEIsRUFBOEIvTixXQUFXNmQsS0FBekMsRUFBZ0RULFFBQVEsSUFBeEQsRUFBbkI7QUFDQXhKOztBQUVBLFFBQUl3TixXQUFXSCxrQkFBa0JBLGVBQWVHLFFBQWYsQ0FBd0JwRSxLQUF4QixDQUFqQztBQUNBLFFBQUlxRSxjQUFjLElBQWxCOztBQUVBLFFBQUdELFFBQUgsRUFBYTtBQUNYLFVBQUl2RCxTQUFRb0QsZUFBZUosUUFBZixDQUF3QjdELEtBQXhCLENBQVo7QUFDQSxVQUFJc0UsT0FBTyxFQUFFbEosUUFBUXlGLE9BQU16RixNQUFoQixFQUF3QmdCLE9BQU95RSxPQUFNekUsS0FBckMsRUFBNENyTCxNQUFNOFAsT0FBTTlQLElBQXhELEVBQVg7QUFDQSxVQUFJMkgsVUFBVSxFQUFFMEMsY0FBRixFQUFVZ0IsWUFBVixFQUFpQnJMLFVBQWpCLEVBQWQ7O0FBRUFzVCxvQkFBYyxDQUFDLGdCQUFNNUwsT0FBTixDQUFjNkwsSUFBZCxFQUFvQjVMLE9BQXBCLENBQWY7QUFDRDs7QUFFRCxRQUFJNkwsWUFBWSxPQUFLdkQsU0FBTCxDQUFlVSxNQUFmLEtBQTBCeGUsU0FBMUIsSUFBdUMsQ0FBQ21oQixXQUF4RDtBQUNBLFFBQUlHLFdBQVcsT0FBS3hELFNBQUwsQ0FBZVUsTUFBZixLQUEwQixLQUF6Qzs7QUFFQTNCLGVBQVdFLElBQVgsQ0FBZ0JHLE1BQWhCLEdBQXlCLEVBQUVnRSxhQUFhRyxhQUFhQyxRQUExQixDQUFGLENBQXpCOztBQUVBcmtCLFlBQVFDLE9BQVIsQ0FBZ0I0ZixNQUFNdEksT0FBTixDQUFjcUksVUFBZCxDQUFoQixFQUEyQ3ZhLElBQTNDLENBQWdELFVBQUNxRCxJQUFELEVBQVU7QUFDeEQsVUFBSWtYLFdBQVdsYixXQUFmLEVBQTRCO0FBQzFCLGVBQU9xZixTQUFTQSxPQUFoQjtBQUNEOztBQUVEbkUsaUJBQVdFLElBQVgsQ0FBZ0JwWCxJQUFoQixHQUF1QkEsSUFBdkI7O0FBRUEsVUFBR21YLE1BQU1zQixRQUFULEVBQW1CO0FBQ2pCLGVBQU9sSixLQUFLNEgsTUFBTTdhLFFBQVgsRUFBcUIrZSxLQUFyQixDQUFQO0FBQ0Q7O0FBRURyRCxZQUFNNEQsYUFBTixDQUFvQjFFLFVBQXBCLEVBQWdDdmEsSUFBaEMsQ0FBcUMsWUFBTTtBQUN6QzRTLGFBQUs0SCxNQUFNN2EsUUFBWCxFQUFxQitlLEtBQXJCO0FBQ0QsT0FGRCxFQUVHamIsS0FGSCxDQUVTLFVBQUNDLEdBQUQ7QUFBQSxlQUFTZ2IsU0FBU0EsTUFBTWhiLEdBQU4sQ0FBbEI7QUFBQSxPQUZUO0FBR0QsS0FkRDtBQWVELEdBckREOztBQXVEQSxTQUFPLElBQUkvSSxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVOFosTUFBVixFQUFxQjtBQUN0QzlCLFNBQUssT0FBSzJMLGdCQUFMLENBQXNCLENBQXRCLENBQUwsRUFBK0IsVUFBQzdhLEdBQUQsRUFBUztBQUN0QyxVQUFHQSxHQUFILEVBQVE7QUFDTixlQUFPZ1IsT0FBT2hSLEdBQVAsQ0FBUDtBQUNEOztBQUVELFVBQUcsQ0FBQzZXLFdBQVdZLE1BQVgsQ0FBa0JwZCxNQUF0QixFQUE4QjtBQUM1QixZQUFHLE9BQUt3ZCxXQUFSLEVBQXFCO0FBQ25CLGlCQUFPN0csT0FBTyxJQUFJL1ksS0FBSixnQ0FBdUMsT0FBS2doQixVQUE1QyxPQUFQLENBQVA7QUFDRDs7QUFFRCxZQUFHLE9BQUtBLFVBQVIsRUFBb0I7QUFDbEIsY0FBRyxPQUFLQSxVQUFMLElBQW1CLE9BQUtSLE1BQUwsRUFBdEIsRUFBcUM7QUFDbkMsbUJBQU96SCxPQUFPLElBQUkvWSxLQUFKLHdCQUFQLENBQVA7QUFDRDs7QUFFRCxpQkFBSzJmLFFBQUwsS0FBa0IsT0FBS2tELGVBQUwsR0FBdUIsSUFBekM7QUFDQSxpQkFBS2paLE1BQUwsQ0FBWSxPQUFLb1gsVUFBakI7QUFDQSxpQkFBS3BCLFdBQUw7O0FBRUEsaUJBQU8sT0FBSy9YLFdBQUwsR0FBbUJ4RCxJQUFuQixDQUF3QnBGLE9BQXhCLEVBQWlDNkksS0FBakMsQ0FBdUNpUixNQUF2QyxDQUFQO0FBQ0Q7O0FBRUQsWUFBRyxnQkFBTTlhLE9BQU4sQ0FBY0UsS0FBakIsRUFBd0I7QUFDdEJxRyxrQkFBUUMsSUFBUjtBQUNEO0FBQ0Y7O0FBRUQsVUFBRyxDQUFDLE9BQUtvYixTQUFMLENBQWUwRCxrQkFBaEIsSUFBc0MsQ0FBQzNFLFdBQVdoUCxJQUFyRCxFQUEyRDtBQUN6RGhSLGVBQU80a0IsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQjtBQUNEOztBQUVELGFBQUszRCxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsYUFBS0QsV0FBTCxHQUFtQixDQUFuQjs7QUFFQSxVQUFHa0QsY0FBSCxFQUFtQjtBQUNqQixhQUFJLElBQUlyaEIsSUFBSWdVLEtBQVIsRUFBZS9ULElBQUlvaEIsZUFBZXRELE1BQWYsQ0FBc0JwZCxNQUE3QyxFQUFxRFgsSUFBSUMsQ0FBekQsRUFBNERELEdBQTVELEVBQWlFO0FBQy9ELGNBQUlpZSxRQUFRb0QsZUFBZXRELE1BQWYsQ0FBc0IvZCxDQUF0QixDQUFaOztBQUVBaWUsZ0JBQU03ZCxTQUFOLElBQW1CNmQsTUFBTTdkLFNBQU4sQ0FBZ0JxZCxLQUFoQixFQUFuQjtBQUNEO0FBQ0Y7O0FBRUR0Z0IsYUFBT3dJLGFBQVAsQ0FBcUIsSUFBSUMsV0FBSixDQUFnQixjQUFoQixFQUFnQztBQUNuREMsZ0JBQVFzWDtBQUQyQyxPQUFoQyxDQUFyQjs7QUFJQTNmO0FBQ0QsS0EvQ0Q7QUFnREQsR0FqRE0sQ0FBUDtBQWtERCxDQXZIRDs7QUF5SEF3SyxPQUFPOFYsVUFBUCxHQUFvQkEsVUFBcEI7O2tCQUVlOVYsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqc0JmOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCcEIsQzs7Ozs7NkJBS0g7QUFDZCxzQkFBTXhHLFNBQU4sQ0FBZ0IsR0FBaEIsRUFBcUJ3RyxDQUFyQjtBQUNEOzs7QUFFRCxlQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOcEMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsaUlBQ1ZBLElBRFU7O0FBR25CLFVBQUs0WSxLQUFMLEdBQWEsSUFBYjtBQUNBLFVBQUs1RSxNQUFMLEdBQWMsRUFBZDtBQUNBLFVBQUtnQixLQUFMLEdBQWEsRUFBYjtBQUNBLFVBQUtyTCxJQUFMLEdBQVksRUFBWjtBQUNBLFVBQUszUixPQUFMLEdBQWUsRUFBZjtBQUNBLFVBQUt3bEIsS0FBTCxHQUFhLE1BQUsvakIsRUFBTCxDQUFRcUQsWUFBUixDQUFxQixLQUFyQixDQUFiO0FBUm1CO0FBU3BCOzs7OytCQUVVNEcsRyxFQUFLO0FBQ2QsV0FBS0MsTUFBTCxDQUFZRCxHQUFaO0FBQ0EsV0FBSytaLFNBQUwsQ0FBZS9aLEdBQWY7QUFDRDs7O2lDQUVZa1YsSyxFQUFPO0FBQ2xCLFdBQUt1QixRQUFMLENBQWN2QixLQUFkO0FBQ0EsV0FBSzZFLFNBQUw7QUFDRDs7O2tDQUVhekosTSxFQUFRO0FBQ3BCLFdBQUswSixTQUFMLENBQWUxSixNQUFmO0FBQ0EsV0FBS3lKLFNBQUw7QUFDRDs7O2lDQUVZekksSyxFQUFPO0FBQ2xCLFdBQUsySSxRQUFMLENBQWMzSSxLQUFkO0FBQ0EsV0FBS3lJLFNBQUw7QUFDRDs7O2dDQUVXekksSyxFQUFPO0FBQ2pCLFdBQUs0SSxPQUFMLENBQWE1SSxLQUFiO0FBQ0EsV0FBS3lJLFNBQUw7QUFDRDs7O21DQUVjemxCLE8sRUFBUztBQUN0QixXQUFLMmxCLFFBQUwsQ0FBYzNsQixPQUFkO0FBQ0Q7OztrQ0FFYWlFLEcsRUFBSztBQUNqQixXQUFLNGhCLFNBQUwsQ0FBZTVoQixHQUFmO0FBQ0Q7Ozs4QkFFUztBQUFBOztBQUNSLFdBQUt4QyxFQUFMLENBQVFrRyxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxVQUFDNkssQ0FBRCxFQUFPO0FBQ3ZDQSxVQUFFc1QsY0FBRjs7QUFFQSxZQUFHLE9BQUtOLEtBQVIsRUFBZTtBQUNiLDJCQUFPNUMsUUFBUCxDQUFnQixPQUFLaFgsS0FBTCxDQUFXRixHQUEzQixFQUFnQyxPQUFLMUwsT0FBckM7O0FBRUE7QUFDRDs7QUFFRCx5QkFBTzRnQixLQUFQLENBQWEsT0FBS0EsS0FBTCxDQUFXM2UsSUFBeEIsRUFBOEIsT0FBSytaLE1BQW5DLEVBQTJDLE9BQUtnQixLQUFoRCxFQUF1RCxPQUFLckwsSUFBNUQsRUFBbUUsT0FBSzNSLE9BQXhFO0FBQ0QsT0FWRDtBQVdEOzs7K0JBRVU7QUFDVCxXQUFLNEwsS0FBTCxDQUFXckksY0FBWCxDQUEwQixPQUExQixLQUFzQyxLQUFLNGUsUUFBTCxDQUFjLEtBQUt2VyxLQUFMLENBQVdnVixLQUF6QixDQUF0QztBQUNBLFdBQUtoVixLQUFMLENBQVdySSxjQUFYLENBQTBCLFFBQTFCLEtBQXVDLEtBQUttaUIsU0FBTCxDQUFlLEtBQUs5WixLQUFMLENBQVdvUSxNQUExQixDQUF2QztBQUNBLFdBQUtwUSxLQUFMLENBQVdySSxjQUFYLENBQTBCLE9BQTFCLEtBQXNDLEtBQUtvaUIsUUFBTCxDQUFjLEtBQUsvWixLQUFMLENBQVdvUixLQUF6QixDQUF0QztBQUNBLFdBQUtwUixLQUFMLENBQVdySSxjQUFYLENBQTBCLE1BQTFCLEtBQXFDLEtBQUtxaUIsT0FBTCxDQUFhLEtBQUtoYSxLQUFMLENBQVcrRixJQUF4QixDQUFyQztBQUNBLFdBQUsvRixLQUFMLENBQVdySSxjQUFYLENBQTBCLFNBQTFCLEtBQXdDLEtBQUt3aUIsVUFBTCxDQUFnQixLQUFLbmEsS0FBTCxDQUFXNUwsT0FBM0IsQ0FBeEM7QUFDQSxXQUFLNEwsS0FBTCxDQUFXckksY0FBWCxDQUEwQixRQUExQixLQUF1QyxLQUFLc2lCLFNBQUwsQ0FBZSxLQUFLamEsS0FBTCxDQUFXMFcsTUFBMUIsQ0FBdkM7QUFDQSxXQUFLMVcsS0FBTCxDQUFXckksY0FBWCxDQUEwQixLQUExQixLQUFvQyxLQUFLb0ksTUFBTCxDQUFZLEtBQUtDLEtBQUwsQ0FBV0YsR0FBdkIsQ0FBcEM7QUFDQSxXQUFLK1osU0FBTCxDQUFlLEtBQUsvWixHQUFwQjtBQUNEOzs7MkJBRU1BLEcsRUFBSztBQUNWLFdBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNEOzs7NkJBRVF6SixJLEVBQU07QUFDYixXQUFLMmUsS0FBTCxHQUFhLEtBQUt3QixRQUFMLENBQWNuZ0IsSUFBZCxDQUFiO0FBQ0EsV0FBS0osS0FBTCxDQUFXeWlCLGFBQVgsR0FBMkIsaUJBQU9BLGFBQVAsQ0FBcUIsS0FBSzFELEtBQTFCLENBQTNCO0FBQ0EsV0FBSy9lLEtBQUwsQ0FBVzJpQixhQUFYLEdBQTJCLGlCQUFPQSxhQUFQLENBQXFCLEtBQUs1RCxLQUExQixDQUEzQjtBQUNEOzs7OEJBRVM1RSxNLEVBQVE7QUFDaEIsVUFBRyxRQUFPQSxNQUFQLHlDQUFPQSxNQUFQLE1BQWlCLFFBQWpCLElBQTZCLENBQUNBLE1BQWpDLEVBQXlDO0FBQ3ZDLGNBQU0sSUFBSWphLEtBQUoseUNBQU47QUFDRDs7QUFFRCxXQUFLaWEsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs2QkFFUWdCLEssRUFBTztBQUNkLFVBQUcsUUFBT0EsS0FBUCx5Q0FBT0EsS0FBUCxNQUFnQixRQUFoQixJQUE0QixDQUFDQSxLQUFoQyxFQUF1QztBQUNyQyxjQUFNLElBQUlqYixLQUFKLHdDQUFOO0FBQ0Q7O0FBRUQsV0FBS2liLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7NEJBRU9yTCxJLEVBQU07QUFDWixVQUFHLE9BQU9BLElBQVAsSUFBZSxRQUFsQixFQUE0QjtBQUMxQixjQUFNLElBQUk1UCxLQUFKLHNDQUFOO0FBQ0Q7O0FBRUQsV0FBSzRQLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7K0JBRVUzUixPLEVBQVM7QUFDbEIsVUFBRyxRQUFPQSxPQUFQLHlDQUFPQSxPQUFQLE1BQWtCLFFBQWxCLElBQThCLENBQUNBLE9BQWxDLEVBQTJDO0FBQ3pDLGNBQU0sSUFBSStCLEtBQUosMENBQU47QUFDRDs7QUFFRCxXQUFLL0IsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7Ozs4QkFFU2lFLEcsRUFBSztBQUNiLFdBQUtqRSxPQUFMLENBQWFzaUIsTUFBYixHQUFzQnJlLEdBQXRCO0FBQ0Q7Ozs2QkFFUWhDLEksRUFBTTtBQUNiLFVBQUkyZSxRQUFRLGlCQUFPd0IsUUFBUCxDQUFnQm5nQixJQUFoQixDQUFaOztBQUVBLFVBQUcsQ0FBQzJlLEtBQUosRUFBVztBQUNULGNBQU0sSUFBSTdlLEtBQUosd0NBQStDRSxJQUEvQyxPQUFOO0FBQ0Q7O0FBRUQsYUFBTzJlLEtBQVA7QUFDRDs7OzhCQUVTbFYsRyxFQUFLO0FBQ2IsVUFBR0EsR0FBSCxFQUFRO0FBQ04sYUFBS0UsS0FBTCxDQUFXb2EsSUFBWCxHQUFrQnRhLEdBQWxCO0FBQ0QsT0FGRCxNQUdLO0FBQ0gsYUFBS0UsS0FBTCxDQUFXb2EsSUFBWCxHQUFrQixpQkFBTzNELGNBQVAsQ0FBc0IsS0FBS3pCLEtBQTNCLEVBQWtDLEtBQUs1RSxNQUF2QyxFQUErQyxLQUFLZ0IsS0FBcEQsRUFBMkQsS0FBS3JMLElBQWhFLENBQWxCO0FBQ0Q7QUFDRjs7Ozs7O0FBN0lrQnZILEMsQ0FDWjlFLE8sR0FBVSx1QztBQURFOEUsQyxDQUVaNkUsaUIsR0FBb0IsSTtBQUZSN0UsQyxDQUdabUYsaUIsR0FBb0IsQ0FBQyxRQUFELEM7a0JBSFJuRixDOzs7Ozs7Ozs7Ozs7Ozs7QUNKckI7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQyxLOzs7Ozs7Ozs7Ozs2QkFDSDtBQUNkLHNCQUFNekcsU0FBTixDQUFnQixPQUFoQixFQUF5QnlHLEtBQXpCO0FBQ0Q7Ozs7OztrQkFIa0JBLEs7Ozs7Ozs7Ozs7Ozs7OztBQ0hyQjs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJDLE87Ozs7OzZCQUNIO0FBQ2Qsc0JBQU0xRyxTQUFOLENBQWdCLFNBQWhCLEVBQTJCMEcsT0FBM0I7QUFDQSxzQkFBTTVELEtBQU4sQ0FBWSxtQkFBWixFQUFpQyxTQUFqQztBQUNEOzs7QUFFRCxxQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTnNCLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLDZJQUNWQSxJQURVOztBQUduQixRQUFHLE1BQUt2RyxFQUFMLENBQVFvTyxZQUFSLENBQXFCLFVBQXJCLENBQUgsRUFBcUM7QUFDbkMsWUFBS3BPLEVBQUwsQ0FBUXFPLFlBQVIsQ0FBcUIsaUJBQXJCLEVBQXdDLE1BQUtyTyxFQUFMLENBQVFxRCxZQUFSLENBQXFCLFVBQXJCLENBQXhDO0FBQ0EsWUFBS3JELEVBQUwsQ0FBUXNPLGVBQVIsQ0FBd0IsVUFBeEI7QUFDRDs7QUFFRCxRQUFHa1csaUJBQWlCLE1BQUt4a0IsRUFBdEIsRUFBMEJ5a0IsT0FBMUIsSUFBcUMsUUFBeEMsRUFBa0Q7QUFDaEQsWUFBS3prQixFQUFMLENBQVF3SCxLQUFSLENBQWNpZCxPQUFkLEdBQXdCLE9BQXhCO0FBQ0Q7O0FBRUQsVUFBS3BJLFFBQUwsR0FBZ0IsV0FBaEI7QUFabUI7QUFhcEI7Ozs7c0NBRWlCO0FBQ2hCLFVBQUlxSSxRQUFRdmxCLFNBQVN3bEIsV0FBVCxFQUFaO0FBQ0EsVUFBSUMsWUFBWTFsQixPQUFPMmxCLFlBQVAsRUFBaEI7O0FBRUFILFlBQU1JLGtCQUFOLENBQXlCLEtBQUs5a0IsRUFBOUI7QUFDQTBrQixZQUFNSyxRQUFOLENBQWUsS0FBZjtBQUNBSCxnQkFBVUksZUFBVjtBQUNBSixnQkFBVUssUUFBVixDQUFtQlAsS0FBbkI7QUFDQSxXQUFLMWtCLEVBQUwsQ0FBUXdjLEtBQVI7QUFDRDs7Ozs7O2tCQTlCa0IzVCxPOzs7Ozs7Ozs7Ozs7Ozs7QUNIckI7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCRSxLOzs7Ozs7Ozs7Ozs2QkFDSDtBQUNkLHNCQUFNNUcsU0FBTixDQUFnQixPQUFoQixFQUF5QjRHLEtBQXpCO0FBQ0Q7Ozs7OztrQkFIa0JBLEs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIckI7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdxQkMsRTs7Ozs7NkJBS0g7QUFDZCxzQkFBTTdHLFNBQU4sQ0FBZ0IsSUFBaEIsRUFBc0I2RyxFQUF0QjtBQUNBLHNCQUFNN0csU0FBTixDQUFnQixTQUFoQixFQUEyQitpQixNQUEzQjtBQUNBLHNCQUFNL2lCLFNBQU4sQ0FBZ0IsTUFBaEIsRUFBd0JnakIsSUFBeEI7QUFDRDs7O0FBRUQsZ0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU41ZSxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSxtSUFDVkEsSUFEVTs7QUFHbkIsVUFBSzJSLElBQUwsR0FBWSxNQUFLbFksRUFBTCxDQUFRcUIsU0FBcEI7QUFDQSxVQUFLckIsRUFBTCxDQUFRcUIsU0FBUixHQUFvQixFQUFwQjtBQUNBLFVBQUs4ZCxLQUFMLEdBQWEsS0FBYjtBQUNBLFVBQUtpRyxNQUFMLEdBQWMsS0FBZDtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxVQUFLQyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsVUFBS2IsT0FBTCxHQUFlRCxpQkFBaUIsTUFBS3hrQixFQUF0QixFQUEwQnlrQixPQUF6QztBQVRtQjtBQVVwQjs7Ozs4QkFFU2hpQixLLEVBQU87QUFDZixXQUFLMGMsS0FBTCxHQUFhLENBQUMsQ0FBQzFjLEtBQWY7QUFDQSxXQUFLaWUsUUFBTDtBQUNEOzs7b0NBRWVqZSxLLEVBQU87QUFDckIsV0FBSzhpQixhQUFMLENBQW1COWlCLEtBQW5CO0FBQ0Q7OzsrQkFFVTtBQUNULFdBQUswSCxLQUFMLENBQVdySSxjQUFYLENBQTBCLFVBQTFCLEtBQXlDLEtBQUt5akIsYUFBTCxDQUFtQixLQUFLcGIsS0FBTCxDQUFXa2IsUUFBOUIsQ0FBekM7QUFDQSxXQUFLbEcsS0FBTCxHQUFhLENBQUMsQ0FBQyxLQUFLaFYsS0FBTCxDQUFXcWIsRUFBMUI7QUFDQSxhQUFPLEtBQUs5RSxRQUFMLEVBQVA7QUFDRDs7O2dDQUVXMEUsTSxFQUFRO0FBQ2xCLFdBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7a0NBRWFDLFEsRUFBVTtBQUN0QixXQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEOzs7K0JBRVU7QUFDVCxVQUFJMWpCLE1BQU0sS0FBSzhqQixXQUFMLEVBQVY7QUFDQSxVQUFJbE8sT0FBTyxLQUFLdlgsRUFBTCxDQUFRMGxCLGtCQUFuQjtBQUNBLFVBQUlDLGVBQUo7O0FBRUEsVUFBRyxDQUFDcE8sSUFBRCxJQUFTLENBQUNBLEtBQUsxVCxPQUFMLENBQWEsY0FBYixDQUFiLEVBQTJDO0FBQ3pDO0FBQ0Q7O0FBRUQwVCxXQUFLdlcsT0FBTCxDQUFhNGtCLFdBQWIsQ0FBeUIsS0FBS1IsTUFBTCxJQUFlLEtBQUtqRyxLQUE3QztBQUNBNUgsV0FBS3ZXLE9BQUwsQ0FBYXVrQixhQUFiLENBQTJCLEtBQUtGLFFBQWhDO0FBQ0FNLGVBQVNwTyxLQUFLdlcsT0FBTCxDQUFhMGYsUUFBYixFQUFUOztBQUVBLGFBQU9waEIsUUFBUUMsT0FBUixDQUFnQm9DLEdBQWhCLEVBQXFCZ0QsSUFBckIsQ0FBMEIsWUFBTTtBQUNyQyxlQUFPZ2hCLE1BQVA7QUFDRCxPQUZNLENBQVA7QUFHRDs7O2tDQUVhO0FBQ1osVUFBSWhrQixZQUFKOztBQUVBLFVBQUcsS0FBS3dkLEtBQUwsSUFBYyxDQUFDLEtBQUtpRyxNQUF2QixFQUErQjtBQUM3QixZQUFHLEtBQUtDLFFBQUwsSUFBaUIsQ0FBQyxLQUFLQyxVQUExQixFQUFzQztBQUNwQzNqQixnQkFBTSxLQUFLdUMsT0FBTCxFQUFOO0FBQ0Q7O0FBRUQsYUFBS2xFLEVBQUwsQ0FBUXdILEtBQVIsQ0FBY2lkLE9BQWQsR0FBd0IsS0FBS0EsT0FBN0I7QUFDRCxPQU5ELE1BT0s7QUFDSCxZQUFHLEtBQUtZLFFBQVIsRUFBa0I7QUFDaEIsZUFBSzlPLE9BQUw7QUFDRCxTQUZELE1BR0ssSUFBRyxDQUFDLEtBQUsrTyxVQUFULEVBQXFCO0FBQ3hCM2pCLGdCQUFNLEtBQUt1QyxPQUFMLEVBQU47QUFDRDs7QUFFRCxhQUFLbEUsRUFBTCxDQUFRd0gsS0FBUixDQUFjaWQsT0FBZCxHQUF3QixNQUF4QjtBQUNEOztBQUVELGFBQU85aUIsR0FBUDtBQUNEOzs7OEJBRVM7QUFDUixVQUFJQSxZQUFKOztBQUVBLFdBQUszQixFQUFMLENBQVFxQixTQUFSLEdBQW9CLEtBQUs2VyxJQUF6QjtBQUNBdlcsWUFBTSxnQkFBTXVDLE9BQU4sQ0FBYyxLQUFLbEUsRUFBbkIsRUFBdUIsRUFBRStDLFdBQVcsSUFBYixFQUF2QixDQUFOO0FBQ0EsV0FBS3VpQixVQUFMLEdBQWtCLElBQWxCOztBQUVBLGFBQU8zakIsR0FBUDtBQUNEOzs7Ozs7QUFoR2tCcUgsRSxDQUNaMkYsVyxHQUFjLEk7QUFERjNGLEUsQ0FFWm5GLE8sR0FBVSxNO0FBRkVtRixFLENBR1o4RSxpQixHQUFvQixDQUFDLFVBQUQsQztrQkFIUjlFLEU7QUFpR3BCOztBQUVEOzs7O0lBR2FrYyxNLFdBQUFBLE07OztBQUNYLG9CQUFxQjtBQUFBOztBQUFBOztBQUFBLHVDQUFOM2UsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsOElBQ1ZBLElBRFU7O0FBR25CLFdBQUs2ZSxNQUFMLEdBQWMsSUFBZDtBQUhtQjtBQUlwQjs7O0VBTHlCcGMsRTs7QUFRNUI7Ozs7O0lBR2FtYyxJLFdBQUFBLEk7OztBQUdYLGtCQUFxQjtBQUFBOztBQUFBOztBQUFBLHVDQUFONWUsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsMElBQ1ZBLElBRFU7O0FBR25CLFdBQUt2RyxFQUFMLENBQVFxTyxZQUFSLENBQXFCLElBQXJCLEVBQTJCLE1BQTNCO0FBSG1CO0FBSXBCOzs7RUFQdUI2VyxNOztBQUFiQyxJLENBQ0p0aEIsTyxHQUFVLEU7OztBQVNuQm1GLEdBQUdrYyxNQUFILEdBQVlBLE1BQVo7QUFDQWxjLEdBQUdtYyxJQUFILEdBQVVBLElBQVYsQzs7Ozs7Ozs7Ozs7Ozs7O0FDbElBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQmhjLE07Ozs7Ozs7Ozs7OzZCQUNIO0FBQ2Qsc0JBQU1oSCxTQUFOLENBQWdCLFFBQWhCLEVBQTBCZ0gsTUFBMUI7QUFDRDs7Ozs7O2tCQUhrQkEsTTs7Ozs7Ozs7Ozs7Ozs7O0FDSHJCOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkMsSzs7Ozs7Ozs7Ozs7NkJBQ0g7QUFDZCxzQkFBTWpILFNBQU4sQ0FBZ0IsS0FBaEIsRUFBdUJpSCxLQUF2QjtBQUNEOzs7Ozs7a0JBSGtCQSxLOzs7Ozs7Ozs7Ozs7Ozs7QUNIckI7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJILE87Ozs7OzZCQUtIO0FBQ2Qsc0JBQU05RyxTQUFOLENBQWdCLFNBQWhCLEVBQTJCOEcsT0FBM0I7QUFDRDs7O0FBRUQscUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU4xQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSw2SUFDVkEsSUFEVTs7QUFHbkIsVUFBSzJSLElBQUwsR0FBWSxNQUFLbFksRUFBTCxDQUFRcUIsU0FBcEI7QUFDQSxVQUFLckIsRUFBTCxDQUFRcUIsU0FBUixHQUFvQixFQUFwQjtBQUNBLFVBQUt3a0IsVUFBTCxHQUFrQixJQUFsQjtBQUxtQjtBQU1wQjs7OzsrQkFFVTViLEcsRUFBSztBQUNkLFdBQUs2YixXQUFMLENBQWlCN2IsR0FBakI7QUFDRDs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLNmIsV0FBTCxDQUFpQixLQUFLM2IsS0FBTCxDQUFXRixHQUE1QixDQUFQO0FBQ0Q7OztnQ0FFV0EsRyxFQUFLO0FBQUE7O0FBQ2YsV0FBSzRiLFVBQUwsSUFBbUIsS0FBS0EsVUFBTCxDQUFnQkUsS0FBaEIsRUFBbkI7O0FBRUEsYUFBTyxrQkFBUWhlLEdBQVIsQ0FBWWtDLEdBQVosRUFBaUI7QUFDdEJ1UCxpQkFBUyxpQkFBQ0YsR0FBRCxFQUFTO0FBQ2hCLGlCQUFLdU0sVUFBTCxHQUFrQnZNLEdBQWxCO0FBQ0Q7QUFIcUIsT0FBakIsRUFJSjNVLElBSkksQ0FJQyxVQUFDaEQsR0FBRCxFQUFTO0FBQ2YsZUFBS2trQixVQUFMLEdBQWtCLElBQWxCO0FBQ0EsZUFBS3JHLEtBQUw7QUFDQSxlQUFLeGYsRUFBTCxDQUFRcUIsU0FBUixHQUFvQixPQUFLNlcsSUFBekI7QUFDQSx3QkFBTWhYLFdBQU4sQ0FBa0IsT0FBS2xCLEVBQXZCLEVBQTJCMkIsSUFBSXFHLElBQS9COztBQUVBLGVBQU8sZ0JBQU05RCxPQUFOLENBQWMsT0FBS2xFLEVBQW5CLEVBQXVCLEVBQUUrQyxXQUFXLElBQWIsRUFBdkIsRUFBNEM0QixJQUE1QyxDQUFpRCxZQUFNO0FBQzVELGlCQUFLd0YsS0FBTCxDQUFXNmIsTUFBWCxDQUFrQm5aLE9BQWxCO0FBQ0QsU0FGTSxDQUFQO0FBR0QsT0FiTSxFQWFKekUsS0FiSSxDQWFFLFVBQUNDLEdBQUQsRUFBUztBQUNoQixlQUFLOEIsS0FBTCxDQUFXOGIsT0FBWCxDQUFtQnBaLE9BQW5CLENBQTJCeEUsR0FBM0I7QUFDQSxjQUFNQSxHQUFOO0FBQ0QsT0FoQk0sQ0FBUDtBQWlCRDs7Ozs7O0FBN0NrQlksTyxDQUNaMEYsVyxHQUFjLEk7QUFERjFGLE8sQ0FFWnBGLE8sR0FBVSxPO0FBRkVvRixPLENBR1p3RSxNLEdBQVMsQ0FBQyxNQUFELEVBQVMsT0FBVCxDO2tCQUhHeEUsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKckI7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQyxLOzs7Ozs2QkFJSDtBQUNkLHNCQUFNL0csU0FBTixDQUFnQixPQUFoQixFQUF5QitHLEtBQXpCO0FBQ0Q7OztBQUVELG1CQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOM0MsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEseUlBQ1ZBLElBRFU7O0FBR25CLFVBQUsyZixVQUFMLEdBQWtCLE1BQUtsbUIsRUFBTCxDQUFRNGYsSUFBUixJQUFnQixVQUFsQztBQUNBLFVBQUt1RyxPQUFMLEdBQWUsTUFBS25tQixFQUFMLENBQVE0ZixJQUFSLElBQWdCLE9BQS9CO0FBSm1CO0FBS3BCOzs7O21DQUVjbmQsSyxFQUFPO0FBQ3BCLFdBQUsyakIsVUFBTCxDQUFnQjNqQixLQUFoQjtBQUNEOzs7OEJBRVM7QUFBQTs7QUFDUixPQUFDLEtBQUswakIsT0FBTCxJQUFnQixLQUFLRCxVQUF0QixLQUFxQyxLQUFLbG1CLEVBQUwsQ0FBUWtHLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFlBQU07QUFDM0UsZUFBS2tnQixVQUFMLENBQWdCLE9BQUtwbUIsRUFBTCxDQUFRcW1CLE9BQXhCLEVBQWlDLEtBQWpDO0FBQ0QsT0FGb0MsQ0FBckM7QUFHRDs7OytCQUVVO0FBQ1QsT0FBQyxLQUFLSCxVQUFMLElBQW1CLEtBQUtDLE9BQXpCLEtBQXFDLEtBQUtDLFVBQUwsQ0FBZ0IsS0FBS2pjLEtBQUwsQ0FBV2tjLE9BQTNCLENBQXJDO0FBQ0Q7OzsrQkFFVTVqQixLLEVBQXVCO0FBQUEsVUFBaEJvSyxPQUFnQix1RUFBTixJQUFNOztBQUNoQ3BLLGNBQVEsQ0FBQyxDQUFDQSxLQUFWOztBQUVBLFVBQUcsS0FBSzZqQixXQUFMLEtBQXFCN2pCLEtBQXhCLEVBQStCO0FBQzdCO0FBQ0Q7O0FBRUQsV0FBS3pDLEVBQUwsQ0FBUXFtQixPQUFSLEdBQWtCLEtBQUtDLFdBQUwsR0FBbUI3akIsS0FBckM7QUFDQW9LLGlCQUFXLEtBQUsxQyxLQUFMLENBQVdvYyxRQUFYLENBQW9CQyxRQUFwQixDQUE2QkMsS0FBN0IsQ0FBWDtBQUNBLFdBQUtOLE9BQUwsSUFBZ0IsS0FBS08sV0FBTCxFQUFoQjtBQUNEOzs7K0JBRVU7QUFDVCxrR0FBZWhoQixLQUFmLENBQXFCLElBQXJCLEVBQTJCWSxTQUEzQjtBQUNBLFdBQUs2ZixPQUFMLElBQWdCLEtBQUtoYyxLQUFMLENBQVdvYyxRQUFYLENBQW9CQyxRQUFwQixDQUE2QkMsS0FBN0IsQ0FBaEI7QUFDRDs7O2tDQUVhO0FBQ1osVUFBSWptQixPQUFPLEtBQUtSLEVBQUwsQ0FBUXFELFlBQVIsQ0FBcUIsTUFBckIsQ0FBWDtBQUNBLFVBQUlTLHlDQUFzQ3RELElBQXRDLHlCQUE0RCxLQUFLSixLQUFMLENBQVdDLE1BQXZFLFNBQUo7QUFDQSxVQUFJaUUsV0FBVyxnQkFBTUgsSUFBTixDQUFXRyxRQUFYLENBQW9CUixRQUFwQixDQUFmOztBQUVBLFdBQUksSUFBSS9CLElBQUksQ0FBUixFQUFXQyxJQUFJc0MsU0FBUzVCLE1BQTVCLEVBQW9DWCxJQUFJQyxDQUF4QyxFQUEyQ0QsR0FBM0MsRUFBZ0Q7QUFDOUMsWUFBSTRrQixRQUFRcmlCLFNBQVN2QyxDQUFULENBQVo7O0FBRUE0a0IsY0FBTVAsVUFBTixDQUFpQk8sTUFBTTNtQixFQUFOLENBQVNxbUIsT0FBMUI7QUFDRDtBQUNGOzs7Ozs7QUF4RGtCbmQsSyxDQUNaNEUsaUIsR0FBb0IsQ0FBQyxTQUFELEM7QUFEUjVFLEssQ0FFWnVFLE0sR0FBUyxDQUFDLFFBQUQsQztrQkFGR3ZFLEs7Ozs7Ozs7Ozs7Ozs7OztBQ0hyQjs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUIwZCxPOzs7QUFDbkIscUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5yZ0IsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsNklBQ1ZBLElBRFU7O0FBR25CLFVBQUt5RCxZQUFMLEdBQW9CLE1BQXBCO0FBSG1CO0FBSXBCOzs7OzZCQUVlO0FBQ2Qsc0JBQU03SCxTQUFOLENBQWdCLFFBQWhCLEVBQTBCeWtCLE9BQTFCO0FBQ0Q7Ozs7OztrQkFUa0JBLE87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hyQjs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR3FCdmQsSzs7Ozs7NkJBSUg7QUFDZCxzQkFBTWxILFNBQU4sQ0FBZ0IsT0FBaEIsRUFBeUJrSCxLQUF6QjtBQUNBLHNCQUFNbEgsU0FBTixDQUFnQixjQUFoQixFQUFnQzBrQixXQUFoQztBQUNEOzs7QUFFRCxtQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTnRnQixJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSx5SUFDVkEsSUFEVTs7QUFHbkIsVUFBS3VnQixRQUFMLEdBQWdCLE1BQUs5bUIsRUFBTCxDQUFRb08sWUFBUixDQUFxQixJQUFyQixDQUFoQjtBQUhtQjtBQUlwQjs7Ozs4QkFFUzNMLEssRUFBTztBQUNmLG1HQUFnQmlELEtBQWhCLENBQXNCLElBQXRCLEVBQTRCWSxTQUE1QjtBQUNBLFdBQUt5Z0IsUUFBTCxDQUFjLEtBQUs1YyxLQUFMLENBQVczSixJQUF6QjtBQUNEOzs7Z0NBRVdBLEksRUFBTTtBQUNoQixXQUFLdW1CLFFBQUwsQ0FBY3ZtQixJQUFkO0FBQ0Q7OztpQ0FFWWlDLEssRUFBTztBQUNsQixXQUFLNlosUUFBTCxDQUFjN1osS0FBZDtBQUNEOzs7OEJBRVM7QUFBQTs7QUFDUixXQUFLcWtCLFFBQUwsSUFBaUIsMkZBQWNwaEIsS0FBZCxDQUFvQixJQUFwQixFQUEwQlksU0FBMUIsQ0FBakI7O0FBRUEsV0FBS3RHLEVBQUwsQ0FBUWtHLGdCQUFSLENBQXlCLFFBQXpCLEVBQW1DLFlBQU07QUFDdkNOLG1CQUFXLFlBQU07QUFDZixjQUFJbkQsUUFBUSxPQUFLdWtCLGFBQUwsRUFBWjs7QUFFQSxjQUFHdmtCLFVBQVUsT0FBS3drQixTQUFsQixFQUE2QjtBQUMzQjtBQUNEOztBQUVELGlCQUFLQSxTQUFMLEdBQWlCeGtCLEtBQWpCO0FBQ0EsaUJBQUswSCxLQUFMLENBQVcrYyxPQUFYLENBQW1CcmEsT0FBbkIsQ0FBMkJwSyxLQUEzQjtBQUNELFNBVEQ7QUFVRCxPQVhEO0FBWUQ7OzsrQkFFVTtBQUNULFdBQUtza0IsUUFBTCxDQUFjLEtBQUs1YyxLQUFMLENBQVczSixJQUF6QjtBQUNBLFdBQUsySixLQUFMLENBQVdySSxjQUFYLENBQTBCLE9BQTFCLEtBQXNDLEtBQUt3YSxRQUFMLENBQWMsS0FBS25TLEtBQUwsQ0FBVzFILEtBQXpCLENBQXRDO0FBQ0Q7Ozs2QkFFUWpDLEksRUFBTTtBQUNiLFVBQUk4RCxXQUFXLEtBQUtBLFFBQUwsQ0FBYyxtQkFBZCxDQUFmOztBQUVBLFdBQUksSUFBSXZDLElBQUksQ0FBUixFQUFXQyxJQUFJc0MsU0FBUzVCLE1BQTVCLEVBQW9DWCxJQUFJQyxDQUF4QyxFQUEyQ0QsR0FBM0MsRUFBZ0Q7QUFDOUN1QyxpQkFBU3ZDLENBQVQsRUFBWS9CLEVBQVosQ0FBZXFPLFlBQWYsQ0FBNEIsTUFBNUIsRUFBb0M3TixJQUFwQztBQUNEO0FBQ0Y7Ozs2QkFFUWlDLEssRUFBTztBQUNkLFVBQUdBLFVBQVUsS0FBS3drQixTQUFsQixFQUE2QjtBQUMzQjtBQUNEOztBQUVELFVBQUl4RCxPQUFPLEtBQUt3RCxTQUFoQjtBQUNBLFVBQUkzaUIsV0FBVyxLQUFLQSxRQUFMLENBQWMsbUJBQWQsQ0FBZjtBQUNBLFVBQUk2aUIsU0FBUyxLQUFiOztBQUVBLFdBQUtGLFNBQUwsR0FBaUJ4a0IsS0FBakI7O0FBRUEsV0FBSSxJQUFJVixJQUFJLENBQVIsRUFBV0MsSUFBSXNDLFNBQVM1QixNQUE1QixFQUFvQ1gsSUFBSUMsQ0FBeEMsRUFBMkNELEdBQTNDLEVBQWdEO0FBQzlDLFlBQUk0a0IsUUFBUXJpQixTQUFTdkMsQ0FBVCxDQUFaO0FBQ0EsWUFBSXFsQixhQUFhVCxNQUFNM21CLEVBQU4sQ0FBU3lDLEtBQVQsS0FBbUJBLEtBQXBDOztBQUVBMmtCLHVCQUFlRCxTQUFTLElBQXhCO0FBQ0FSLGNBQU1QLFVBQU4sQ0FBaUJnQixVQUFqQjtBQUNEOztBQUVELFVBQUcsQ0FBQ0QsTUFBSixFQUFZO0FBQ1YsWUFBRzFrQixVQUFVLElBQWIsRUFBbUI7QUFDakIsY0FBR2doQixTQUFTcGhCLFNBQVosRUFBdUI7QUFDckI7QUFDRDtBQUNGLFNBSkQsTUFLSztBQUNILGVBQUs0a0IsU0FBTCxHQUFpQjVrQixTQUFqQjtBQUNBSSxrQkFBUSxJQUFSO0FBQ0Q7QUFDRjs7QUFFRCxXQUFLMEgsS0FBTCxDQUFXK2MsT0FBWCxDQUFtQnJhLE9BQW5CLENBQTJCcEssS0FBM0I7QUFDRDs7O29DQUVlO0FBQ2QsVUFBSTZCLFdBQVcsS0FBS0EsUUFBTCxDQUFjLG1CQUFkLENBQWY7O0FBRUEsV0FBSSxJQUFJdkMsSUFBSSxDQUFSLEVBQVdDLElBQUlzQyxTQUFTNUIsTUFBNUIsRUFBb0NYLElBQUlDLENBQXhDLEVBQTJDRCxHQUEzQyxFQUFnRDtBQUM5QyxZQUFJNGtCLFFBQVFyaUIsU0FBU3ZDLENBQVQsQ0FBWjs7QUFFQSxZQUFHNGtCLE1BQU0zbUIsRUFBTixDQUFTcW1CLE9BQVosRUFBcUI7QUFDbkIsaUJBQU9NLE1BQU0zbUIsRUFBTixDQUFTeUMsS0FBaEI7QUFDRDtBQUNGOztBQUVELGFBQU8sSUFBUDtBQUNEOzs7Ozs7QUF4R2tCNEcsSyxDQUNaeEYsTyxHQUFVLFE7QUFERXdGLEssQ0FFWm9FLE0sR0FBUyxDQUFDLE9BQUQsQztrQkFGR3BFLEs7QUF5R3BCOztBQUVEOzs7O0lBR2F3ZCxXLFdBQUFBLFc7OztBQUdYLHlCQUFxQjtBQUFBOztBQUFBOztBQUFBLHVDQUFOdGdCLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLGtKQUNWQSxJQURVO0FBRXBCOzs7O2lDQUVZOUQsSyxFQUFPO0FBQ2xCLFdBQUs0a0IsYUFBTCxDQUFtQjVrQixLQUFuQjtBQUNEOzs7K0JBRVU7QUFDVCxXQUFLNGtCLGFBQUwsQ0FBbUIsS0FBS2xkLEtBQUwsQ0FBVzFILEtBQTlCO0FBQ0Q7OztrQ0FFYUEsSyxFQUFPO0FBQ25CLFdBQUtyQyxLQUFMLENBQVdxQyxLQUFYLEdBQW1CQSxLQUFuQjtBQUNEOzs7Ozs7QUFqQlVva0IsVyxDQUNKMWxCLFE7OztBQW1CVGtJLE1BQU13ZCxXQUFOLEdBQW9CQSxXQUFwQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hJQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQnRkLE07Ozs7OzZCQUlIO0FBQ2Qsc0JBQU1wSCxTQUFOLENBQWdCLFFBQWhCLEVBQTBCb0gsTUFBMUI7QUFDQSxzQkFBTXBILFNBQU4sQ0FBZ0IsUUFBaEIsRUFBMEJtbEIsTUFBMUI7QUFDRDs7O0FBRUQsb0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU4vZ0IsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsMklBQ1ZBLElBRFU7O0FBR25CLFVBQUtnaEIsZUFBTCxHQUF1QixRQUF2QjtBQUNBLFVBQUtDLFVBQUwsR0FBa0IsS0FBbEI7QUFKbUI7QUFLcEI7Ozs7b0NBRWUva0IsSyxFQUFPO0FBQ3JCLFdBQUtnbEIsV0FBTCxDQUFpQmhsQixLQUFqQjtBQUNEOzs7bUNBRWNBLEssRUFBTztBQUNwQixXQUFLaWxCLFVBQUwsQ0FBZ0JqbEIsS0FBaEI7QUFDRDs7OzhCQUVTQSxLLEVBQU87QUFDZixxR0FBZ0JpRCxLQUFoQixDQUFzQixJQUF0QixFQUE0QlksU0FBNUI7QUFDQSxXQUFLcWhCLFVBQUw7QUFDRDs7OzhCQUVTO0FBQUE7O0FBQ1IsbUdBQWNqaUIsS0FBZCxDQUFvQixJQUFwQixFQUEwQlksU0FBMUI7O0FBRUEsV0FBS3RHLEVBQUwsQ0FBUWtHLGdCQUFSLENBQXlCLFFBQXpCLEVBQW1DLFlBQU07QUFDdkMsZUFBS2xHLEVBQUwsQ0FBUTJkLE9BQVIsR0FBa0IsT0FBS2lLLFVBQUwsRUFBbEI7QUFDRCxPQUZEO0FBR0Q7OzsrQkFFVTtBQUNULG9HQUFlbGlCLEtBQWYsQ0FBcUIsSUFBckIsRUFBMkJZLFNBQTNCO0FBQ0EsV0FBSzZELEtBQUwsQ0FBV3JJLGNBQVgsQ0FBMEIsVUFBMUIsS0FBeUMsS0FBSzJsQixXQUFMLENBQWlCLEtBQUt0ZCxLQUFMLENBQVcwZCxRQUE1QixDQUF6QztBQUNBLFdBQUsxZCxLQUFMLENBQVdySSxjQUFYLENBQTBCLFNBQTFCLEtBQXdDLEtBQUs0bEIsVUFBTCxDQUFnQixLQUFLdmQsS0FBTCxDQUFXd1QsT0FBM0IsQ0FBeEM7QUFDQSxXQUFLZ0ssVUFBTDtBQUNEOzs7Z0NBRVdsbEIsSyxFQUFPO0FBQ2pCLFdBQUsra0IsVUFBTCxHQUFrQi9rQixLQUFsQjtBQUNBLFdBQUtxbEIsV0FBTCxDQUFpQixLQUFLQyxXQUFMLENBQWlCLGdCQUFNN1ksSUFBTixDQUFXLEtBQUtsUCxFQUFMLENBQVEyZCxPQUFuQixDQUFqQixDQUFqQjtBQUNEOzs7K0JBRVVsYixLLEVBQU87QUFDaEIsV0FBS3FsQixXQUFMLENBQWlCLEtBQUtDLFdBQUwsQ0FBaUJ0bEIsS0FBakIsQ0FBakI7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBSXVsQixXQUFXLEVBQWY7O0FBRUEsV0FBSSxJQUFJam1CLElBQUksQ0FBUixFQUFXQyxJQUFJLEtBQUtoQyxFQUFMLENBQVF6QixPQUFSLENBQWdCbUUsTUFBbkMsRUFBMkNYLElBQUlDLENBQS9DLEVBQWtERCxHQUFsRCxFQUF1RDtBQUNyRCxZQUFJa21CLFNBQVMsS0FBS2pvQixFQUFMLENBQVF6QixPQUFSLENBQWdCd0QsQ0FBaEIsRUFBbUJmLE9BQWhDO0FBQ0EsWUFBSTRqQixZQUFZcUQsT0FBTzlkLEtBQVAsQ0FBYTZkLFFBQTdCOztBQUVBLFlBQUdwRCxTQUFILEVBQWM7QUFDWm9ELG1CQUFTL21CLElBQVQsQ0FBY2duQixPQUFPam9CLEVBQVAsQ0FBVXlDLEtBQXhCO0FBQ0Q7O0FBRUR3bEIsZUFBT2pvQixFQUFQLENBQVVnb0IsUUFBVixHQUFxQnBELFNBQXJCO0FBQ0Q7O0FBRUQsVUFBRyxDQUFDb0QsU0FBU3RsQixNQUFiLEVBQXFCO0FBQ25CLGFBQUt3bEIsUUFBTDtBQUNELE9BRkQsTUFHSztBQUNILGFBQUtKLFdBQUwsQ0FBaUIsS0FBS0MsV0FBTCxDQUFpQkMsUUFBakIsQ0FBakI7QUFDRDtBQUNGOzs7NENBRXVCO0FBQ3RCLFVBQUlob0IsMEhBQUo7O0FBRUEsVUFBRyxDQUFDQSxHQUFHb08sWUFBSCxDQUFnQixPQUFoQixDQUFKLEVBQThCO0FBQzVCcE8sV0FBR3FPLFlBQUgsQ0FBZ0IsT0FBaEIsRUFBeUIsS0FBSzZKLElBQUwsQ0FBVWlRLElBQVYsRUFBekI7QUFDRDs7QUFFRCxhQUFPbm9CLEVBQVA7QUFDRDs7OzhCQUVTeUMsSyxFQUFPO0FBQ2YsVUFBRyxDQUFDLEtBQUsra0IsVUFBVCxFQUFxQjtBQUNuQixlQUFPLEtBQUt4bkIsRUFBTCxDQUFRMmQsT0FBUixLQUFvQmxiLEtBQTNCO0FBQ0Q7O0FBRUQsYUFBTyxLQUFLekMsRUFBTCxDQUFRMmQsT0FBUixDQUFnQnpQLE9BQWhCLENBQXdCekwsS0FBeEIsS0FBa0MsQ0FBQyxDQUExQztBQUNEOzs7aUNBRVk7QUFDWCxVQUFHLENBQUMsS0FBSytrQixVQUFULEVBQXFCO0FBQ25CLGVBQU8sS0FBS3huQixFQUFMLENBQVF5QyxLQUFmO0FBQ0Q7O0FBRUQsVUFBSWtiLFVBQVUsRUFBZDs7QUFFQSxXQUFJLElBQUk1YixJQUFJLENBQVIsRUFBV0MsSUFBSSxLQUFLaEMsRUFBTCxDQUFRekIsT0FBUixDQUFnQm1FLE1BQW5DLEVBQTJDWCxJQUFJQyxDQUEvQyxFQUFrREQsR0FBbEQsRUFBdUQ7QUFDckQsWUFBSWttQixTQUFTLEtBQUtqb0IsRUFBTCxDQUFRekIsT0FBUixDQUFnQndELENBQWhCLENBQWI7O0FBRUEsWUFBR2ttQixPQUFPRCxRQUFWLEVBQW9CO0FBQ2xCckssa0JBQVExYyxJQUFSLENBQWFnbkIsT0FBT3hsQixLQUFwQjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT2tiLE9BQVA7QUFDRDs7O2dDQUVXbGIsSyxFQUFPO0FBQ2pCLFVBQUcsS0FBSytrQixVQUFSLEVBQW9CO0FBQ2xCLFlBQUcsQ0FBQ3BpQixNQUFNMFIsT0FBTixDQUFjclUsS0FBZCxDQUFKLEVBQTBCO0FBQ3hCQSxrQkFBU0EsVUFBVUosU0FBVixJQUF1QkksVUFBVSxJQUFsQyxHQUF5QyxDQUFDQSxLQUFELENBQXpDLEdBQWtELEVBQTFEO0FBQ0Q7QUFDRixPQUpELE1BS0s7QUFDSCxZQUFHMkMsTUFBTTBSLE9BQU4sQ0FBY3JVLEtBQWQsQ0FBSCxFQUF5QjtBQUN2QkEsa0JBQVFBLE1BQU1DLE1BQU4sR0FBY0QsTUFBTSxDQUFOLENBQWQsR0FBd0IsRUFBaEM7QUFDRCxTQUZELE1BR0ssSUFBRyxRQUFPQSxLQUFQLHlDQUFPQSxLQUFQLE1BQWdCLFFBQWhCLElBQTRCLE9BQU9BLEtBQVAsSUFBZ0IsVUFBL0MsRUFBMkQ7QUFDOURBLGtCQUFRLEVBQVI7QUFDRDtBQUNGOztBQUVELGFBQU9BLEtBQVA7QUFDRDs7OytCQUVVO0FBQ1QsV0FBS3FsQixXQUFMLENBQWlCLEtBQUtGLFVBQUwsRUFBakI7QUFDRDs7O2dDQUVXbmxCLEssRUFBTztBQUNqQixVQUFHLGdCQUFNbVYsT0FBTixDQUFjLEtBQUs1WCxFQUFMLENBQVEyZCxPQUF0QixFQUErQmxiLEtBQS9CLENBQUgsRUFBMEM7QUFDeEM7QUFDRDs7QUFFRCxVQUFHMkMsTUFBTTBSLE9BQU4sQ0FBY3JVLEtBQWQsQ0FBSCxFQUF5QjtBQUN2QixhQUFLekMsRUFBTCxDQUFReUMsS0FBUixHQUFnQkEsTUFBTUEsTUFBTUMsTUFBTixHQUFlLENBQXJCLENBQWhCOztBQUVBLGFBQUksSUFBSVgsSUFBSSxDQUFSLEVBQVdDLElBQUksS0FBS2hDLEVBQUwsQ0FBUXpCLE9BQVIsQ0FBZ0JtRSxNQUFuQyxFQUEyQ1gsSUFBSUMsQ0FBL0MsRUFBa0RELEdBQWxELEVBQXVEO0FBQ3JELGNBQUlrbUIsU0FBUyxLQUFLam9CLEVBQUwsQ0FBUXpCLE9BQVIsQ0FBZ0J3RCxDQUFoQixDQUFiOztBQUVBa21CLGlCQUFPRCxRQUFQLEdBQWtCdmxCLE1BQU15TCxPQUFOLENBQWMrWixPQUFPeGxCLEtBQXJCLEtBQStCLENBQUMsQ0FBbEQ7QUFDRDtBQUNGLE9BUkQsTUFTSztBQUNILGFBQUt6QyxFQUFMLENBQVF5QyxLQUFSLEdBQWdCQSxLQUFoQjs7QUFFQSxhQUFJLElBQUlWLEtBQUksQ0FBUixFQUFXQyxLQUFJLEtBQUtoQyxFQUFMLENBQVF6QixPQUFSLENBQWdCbUUsTUFBbkMsRUFBMkNYLEtBQUlDLEVBQS9DLEVBQWtERCxJQUFsRCxFQUF1RDtBQUNyRCxjQUFJa21CLFVBQVMsS0FBS2pvQixFQUFMLENBQVF6QixPQUFSLENBQWdCd0QsRUFBaEIsQ0FBYjs7QUFFQWttQixrQkFBT0QsUUFBUCxHQUFrQkMsUUFBT3hsQixLQUFQLElBQWdCQSxLQUFsQztBQUNEO0FBQ0Y7O0FBRUQsV0FBS3pDLEVBQUwsQ0FBUTJkLE9BQVIsR0FBa0JsYixLQUFsQjtBQUNBLFdBQUswSCxLQUFMLENBQVdvYyxRQUFYLENBQW9CQyxRQUFwQixDQUE2QkMsS0FBN0I7QUFDRDs7Ozs7O0FBL0prQmxkLE0sQ0FDWnVFLGlCLEdBQW9CLENBQUMsVUFBRCxDO0FBRFJ2RSxNLENBRVprRSxNLEdBQVMsQ0FBQyxRQUFELEM7a0JBRkdsRSxNO0FBZ0twQjs7SUFFWStkLE0sV0FBQUEsTTs7Ozs7Ozs7Ozs7MENBR1c3YyxVLEVBQVk7QUFDaEMsYUFBTyxnQkFBTTROLGtCQUFOLENBQXlCNU4sVUFBekIsQ0FBUDtBQUNEOzs7OEJBRVM7QUFDUixtR0FBYy9FLEtBQWQsQ0FBb0IsSUFBcEIsRUFBMEJZLFNBQTFCO0FBQ0Q7OztvQ0FFZTdELEssRUFBTztBQUNyQixXQUFLMmxCLFdBQUwsQ0FBaUIzbEIsS0FBakI7QUFDRDs7O2dDQUVXQSxLLEVBQU87QUFDakIsV0FBS3pDLEVBQUwsQ0FBUWdvQixRQUFSLEdBQW1CdmxCLEtBQW5CO0FBQ0EsV0FBS3FjLEdBQUwsQ0FBU29KLFFBQVQ7QUFDRDs7Ozs7O0FBbEJVWixNLENBQ0p4WixpQixHQUFvQixDQUFDLFVBQUQsQzs7O0FBb0I3QnZFLE9BQU8rZCxNQUFQLEdBQWdCQSxNQUFoQixDOzs7Ozs7Ozs7Ozs7Ozs7QUMzTEE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCOWQsTTs7Ozs7Ozs7Ozs7NkJBQ0g7QUFDZCxzQkFBTXJILFNBQU4sQ0FBZ0IsUUFBaEIsRUFBMEJxSCxNQUExQjtBQUNEOzs7Ozs7a0JBSGtCQSxNOzs7Ozs7Ozs7Ozs7Ozs7QUNIckI7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCRSxROzs7Ozs7Ozs7Ozs2QkFDSDtBQUNkLHNCQUFNdkgsU0FBTixDQUFnQixVQUFoQixFQUE0QnVILFFBQTVCO0FBQ0Q7Ozs7OztrQkFIa0JBLFE7Ozs7Ozs7Ozs7Ozs7OztBQ0hyQjs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJDLEs7Ozs7Ozs7Ozs7OzZCQUNIO0FBQ2Qsc0JBQU14SCxTQUFOLENBQWdCLE9BQWhCLEVBQXlCd0gsS0FBekI7QUFDRDs7Ozs7O2tCQUhrQkEsSzs7Ozs7Ozs7Ozs7Ozs7O0FDSHJCOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkUsSzs7Ozs7Ozs7Ozs7NkJBQ0g7QUFDZCxzQkFBTTFILFNBQU4sQ0FBZ0IsT0FBaEIsRUFBeUIwSCxLQUF6QjtBQUNEOzs7Ozs7a0JBSGtCQSxLOzs7Ozs7Ozs7Ozs7Ozs7QUNIckI7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTs7Ozs7O0lBTXFCcEIsSztBQUduQixpQkFBWWpJLElBQVosRUFBa0JSLEVBQWxCLEVBQXNCbUMsU0FBdEIsRUFBaUM7QUFBQTs7QUFDL0IsU0FBSzlCLE1BQUwsR0FBY0csSUFBZDtBQUNBLFNBQUs2bkIsSUFBTCxHQUFZcm9CLEVBQVo7QUFDQSxTQUFLc1AsV0FBTCxHQUFtQm5OLFNBQW5CO0FBQ0FuQyxPQUFHcU8sWUFBSCxDQUFnQixPQUFoQixFQUF5QjdOLElBQXpCO0FBQ0Q7Ozs7OztBQU1EOzs7Ozs7OzBCQU9NVixJLEVBQU0yQyxLLEVBQXVCO0FBQUE7O0FBQUEsVUFBaEI2bEIsTUFBZ0IsdUVBQVAsS0FBTzs7QUFDakMsVUFBRyxDQUFDbGpCLE1BQU0wUixPQUFOLENBQWNoWCxJQUFkLENBQUosRUFBeUI7QUFDdkJBLGVBQU8sQ0FBQ0EsSUFBRCxDQUFQO0FBQ0Q7O0FBRUQsc0JBQU0rQyxVQUFOLENBQWlCLFlBQU07QUFDckJ5bEIsbUJBQVcsTUFBS2haLFdBQUwsQ0FBaUIwRix3QkFBakIsR0FBNEMsSUFBdkQ7QUFDQSx3QkFBTTFTLGlCQUFOLENBQXdCeEMsSUFBeEIsU0FBb0MsVUFBQ3lDLElBQUQsRUFBT0MsR0FBUCxFQUFlO0FBQ2pELGNBQUcsQ0FBQ0QsSUFBSixFQUFVO0FBQ1IsbUJBQU9DLE9BQU8sRUFBZDtBQUNEOztBQUVELGlCQUFPQyxLQUFQO0FBQ0QsU0FORDtBQU9BNmxCLG1CQUFXLE1BQUtoWixXQUFMLENBQWlCMEYsd0JBQWpCLEdBQTRDLEtBQXZEO0FBQ0QsT0FWRDtBQVdEOzs7d0JBM0JhO0FBQ1o7QUFDRDs7Ozs7O2tCQVprQnZNLEsiLCJmaWxlIjoiYWtpbGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGNjMjNkODcwNGVlM2FkZjA5ZmZiIiwiLyoqXG4gKiBKYXZhc2NyaXB0IGZyYW1ld29ya1xuICpcbiAqIGNvbnN0IEFraWxpID0gbWFrZUl0RWFzeShqcyArIGh0bWwpO1xuICpcbiAqIEBhdXRob3IgQWxleGFuZHIgQmFsYXN5YW4gPG15d2Vic3RyZWV0QGdtYWlsLmNvbT5cbiAqIEBsaW5rIGh0dHA6Ly9ha2lsaWpzLmNvbVxuICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IElmIGZyb20gJy4vY29tcG9uZW50cy9pZi5qcyc7XG5pbXBvcnQgRm9yIGZyb20gJy4vY29tcG9uZW50cy9mb3IuanMnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL2NvbXBvbmVudHMvc2VsZWN0LmpzJztcbmltcG9ydCBJbnB1dCBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQuanMnO1xuaW1wb3J0IFJhZGlvIGZyb20gJy4vY29tcG9uZW50cy9yYWRpby5qcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL2NvbXBvbmVudHMvdGV4dC5qcyc7XG5pbXBvcnQgVGV4dGFyZWEgZnJvbSAnLi9jb21wb25lbnRzL3RleHRhcmVhLmpzJztcbmltcG9ydCBDb250ZW50IGZyb20gJy4vY29tcG9uZW50cy9jb250ZW50LmpzJztcbmltcG9ydCBJbmNsdWRlIGZyb20gJy4vY29tcG9uZW50cy9pbmNsdWRlLmpzJztcbmltcG9ydCBJZnJhbWUgZnJvbSAnLi9jb21wb25lbnRzL2lmcmFtZS5qcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9jb21wb25lbnRzL2ltYWdlLmpzJztcbmltcG9ydCBFbWJlZCBmcm9tICcuL2NvbXBvbmVudHMvZW1iZWQuanMnO1xuaW1wb3J0IEF1ZGlvIGZyb20gJy4vY29tcG9uZW50cy9hdWRpby5qcyc7XG5pbXBvcnQgVmlkZW8gZnJvbSAnLi9jb21wb25lbnRzL3ZpZGVvLmpzJztcbmltcG9ydCBUcmFjayBmcm9tICcuL2NvbXBvbmVudHMvdHJhY2suanMnO1xuaW1wb3J0IFNvdXJjZSBmcm9tICcuL2NvbXBvbmVudHMvc291cmNlLmpzJztcbmltcG9ydCBPYmplY3RzIGZyb20gJy4vY29tcG9uZW50cy9vYmplY3QuanMnO1xuaW1wb3J0IFJvdXRlIGZyb20gJy4vY29tcG9uZW50cy9yb3V0ZS5qcyc7XG5pbXBvcnQgVXJsIGZyb20gJy4vY29tcG9uZW50cy91cmwuanMnO1xuaW1wb3J0IEEgZnJvbSAnLi9jb21wb25lbnRzL2EuanMnO1xuaW1wb3J0IFNjb3BlIGZyb20gJy4vc2NvcGUuanMnO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXIuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9zZXJ2aWNlcy9yZXF1ZXN0LmpzJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9zZXJ2aWNlcy9yb3V0ZXIuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuXG5jb25zdCBBa2lsaSA9IHt9O1xuXG5Ba2lsaS5vcHRpb25zID0ge1xuICBuZXN0ZWRXYXRjaGluZzogdHJ1ZSxcbiAgZGVidWc6IHRydWVcbn07XG5cbkFraWxpLl9faW5pdCA9IG51bGw7XG5Ba2lsaS5fX2NvbXBvbmVudHMgPSB7fTtcbkFraWxpLl9fYWxpYXNlcyA9IHt9O1xuQWtpbGkuX19zY29wZXMgPSB7fTtcbkFraWxpLl9fd2luZG93ID0ge307XG5Ba2lsaS5fX2lzb2xhdGlvbiA9IG51bGw7XG5Ba2lsaS5fX2V2YWx1YXRpb24gPSBudWxsO1xuQWtpbGkuX19odG1sID0gd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbkFraWxpLl9fc2VydmVyUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuQWtpbGkuX19zZXJ2ZXJSZW5kZXJpbmcgPSBmYWxzZTtcblxuQWtpbGkuaHRtbEJvb2xlYW5BdHRyaWJ1dGVzID0gW1xuICAnZGlzYWJsZWQnLCAnY29udGVudGVkaXRhYmxlJywgJ2hpZGRlbidcbl07XG5cbkFraWxpLmNvbXBvbmVudHMgPSB7fTtcbkFraWxpLmRlY29yYXRvcnMgPSB7fTtcbkFraWxpLnNlcnZpY2VzID0ge307XG5cbi8qKlxuICogSm9pbiBiaW5kaW5nIGtleXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIGJpbmRpbmcga2V5c1xuICovXG5Ba2lsaS5qb2luQmluZGluZ0tleXMgPSBmdW5jdGlvbihrZXlzKSB7XG4gIHJldHVybiBrZXlzLm1hcChlbCA9PiBlbC50b1N0cmluZygpKS5qb2luKCcuJyk7XG59O1xuXG4vKipcbiAqIEFkZCBzY29wZSB0byB0aGUgc2NvcGVzIGxpc3RcbiAqXG4gKiBAcGFyYW0gc2NvcGVcbiAqL1xuQWtpbGkuYWRkU2NvcGUgPSBmdW5jdGlvbihzY29wZSkge1xuICBpZih0aGlzLl9fc2NvcGVzW3Njb3BlLl9fbmFtZV0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFNjb3BlIG5hbWUgJHtzY29wZS5fX25hbWV9IGFscmVhZHkgZXhpc3RzYCk7XG4gIH1cblxuICB0aGlzLl9fc2NvcGVzW3Njb3BlLl9fbmFtZV0gPSBzY29wZTtcbn07XG5cbi8qKlxuICogR2V0IHNjb3BlIGZyb20gdGhlIHNjb3BlcyBsaXN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzY29wZSBuYW1lXG4gKiBAcmV0dXJucyB7U2NvcGV9XG4gKi9cbkFraWxpLmdldFNjb3BlID0gZnVuY3Rpb24obmFtZSkge1xuICByZXR1cm4gdGhpcy5fX3Njb3Blc1tuYW1lXTtcbn07XG5cbi8qKlxuICogRGVsZXRlIHNjb3BlIGZyb20gdGhlIHNjb3BlcyBsaXN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzY29wZSBuYW1lXG4gKi9cbkFraWxpLnJlbW92ZVNjb3BlID0gZnVuY3Rpb24obmFtZSkge1xuICB0aGlzLl9fc2NvcGVzW25hbWVdID0gbnVsbDtcbiAgZGVsZXRlIHRoaXMuX19zY29wZXNbbmFtZV07XG59O1xuXG4vKipcbiAqIEdldCBhbGwgZWxlbWVudHMgd2l0aCBhdHRhY2hlZCBBa2lsaSBjb21wb25lbnRzXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3RyZWU9dHJ1ZV0gLSByZXR1cm4gYXJyYXkgb2YgdGhlIHBhcmVudHMgaWYgdHJ1ZSwgY2xvc2VzdCBwYXJlbnQgaWYgZmFsc2VcbiAqIEByZXR1cm5zIHtBcnJheXxIVE1MRWxlbWVudHxudWxsfVxuICovXG5Ba2lsaS5nZXRBa2lsaVBhcmVudHMgPSBmdW5jdGlvbiAoZWwsIHRyZWUgPSB0cnVlKSB7XG4gIGxldCBhcnIgPSBbXTtcblxuICBmdW5jdGlvbiBjaGVjayhub2RlKSB7XG4gICAgaWYoIW5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKG5vZGUucGFyZW50Tm9kZS5fX2FraWxpKSB7XG4gICAgICBhcnIucHVzaChub2RlLnBhcmVudE5vZGUpO1xuXG4gICAgICBpZighdHJlZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2sobm9kZS5wYXJlbnROb2RlKTtcbiAgfVxuXG4gIGNoZWNrKGVsKTtcblxuICByZXR1cm4gdHJlZT8gYXJyOiBhcnJbMF07XG59O1xuXG4vKipcbiAqIFNldCBlbGVtZW50IGlubmVyIGh0bWwgd2l0aCBjb250ZW50IHJlcGxhY2luZ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwiPGk+SGVsbG88L2k+PGI+V29ybGQ8L2I+XCJcbiAqIGVsLmlubmVySFRNTCA9IFwiPGI+V29ybGQ8L2I+XCI7XG4gKiBBa2lsaS5zZXRUZW1wbGF0ZShlbCwgXCI8aT5IZWxsbzwvaT4ke3RoaXMuX19jaGlsZHJlbn1cIik7XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuQWtpbGkuc2V0VGVtcGxhdGUgPSBmdW5jdGlvbihlbCwgdGVtcGxhdGUpIHtcbiAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKC9cXCR7KCgoPyFcXCR7KVxccyp0aGlzXFwuX19jb250ZW50XFxzKikqKX0vLCBlbC5pbm5lckhUTUwpO1xuICBlbC5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcblxuICByZXR1cm4gZWwuaW5uZXJIVE1MO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSB1bmlxdWUgc2NvcGUgbmFtZVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbkFraWxpLmNyZWF0ZVNjb3BlTmFtZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdXRpbHMuY3JlYXRlUmFuZG9tU3RyaW5nKDE2LCAoc3RyKSA9PiB7XG4gICAgcmV0dXJuICEhdGhpcy5fX3Njb3Blc1tzdHJdO1xuICB9KTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSBmdW5jdGlvbi5cbiAqIEV2ZXJ5IHNjb3BlIHZhcmlhYmxlIGNoYW5nZSBjYWxscyBhY2NvcmRpbmcgbm9kZSBldmFsdWF0aW9uLlxuICogRm9yIGV4YW1wbGUsIGlmIHlvdSBjaGFuZ2Ugc29tZSBzY29wZSB2YXJpYWJsZSBpbiB0aGUgbG9vcCAtIGV2YWx1YXRpb24gd2lsbCBiZSBjYWxsZWQgb24gdGhlIGVhY2ggY2hhbmdlLlxuICogSXQgbWF5IGJlIHNsb3cgZm9yIHRoZSBhcHBsaWNhdGlvbi5cbiAqIFlvdSBjYW4gaXNvbGF0ZSB0aGlzIGFjdGlvbiBhbmQgcnVuIGFsbCBldmFsdWF0aW9uIHByb2Nlc3MgYWZ0ZXIgcGFzc2VkIGZ1bmN0aW9uIGF0IG9uY2UuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS5pc29sYXRlID0gZnVuY3Rpb24oZm4pIHtcbiAgaWYodGhpcy5fX2lzb2xhdGlvbikge1xuICAgIHJldHVybiBmbigpO1xuICB9XG5cbiAgdGhpcy5fX2lzb2xhdGlvbiA9IHt9O1xuXG4gIGxldCByZXMgPSBmbigpO1xuICBsZXQgcHJvcHMgPSBbXTtcblxuICBmb3IobGV0IGsgaW4gdGhpcy5fX2lzb2xhdGlvbikge1xuICAgIGlmKCF0aGlzLl9faXNvbGF0aW9uLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBwcm9wcy5wdXNoKHRoaXMuX19pc29sYXRpb25ba10pO1xuICB9XG5cbiAgdGhpcy5fX2lzb2xhdGlvbiA9IG51bGw7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IHByb3BzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBwcm9wID0gcHJvcHNbaV07XG5cbiAgICBpZihwcm9wLmlzRGVsZXRlZCkge1xuICAgICAgcHJvcC5jb21wb25lbnQuX19ldmFsdWF0ZUJ5S2V5cyhwcm9wLmtleXMsIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKHByb3Aua2V5cywgcHJvcC5jb21wb25lbnQuc2NvcGUsIChsYXN0LCB2YWwpID0+IHtcbiAgICAgIGlmKCFsYXN0KSB7XG4gICAgICAgIHJldHVybiB2YWwgfHwge307XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcm9wLnZhbHVlO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvcHMgPSBudWxsO1xuXG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIFN0b3AgZXZhbHVhdGlvbiBiZWZvcmUgdGhlIGZ1bmN0aW9uIGFuZCBjb250aW51ZSBhZnRlclxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkudW5ldmFsdWF0ZWQgPSBmdW5jdGlvbihmbikge1xuICBsZXQgZXZhbHVhdGlvbiA9IHRoaXMuX19ldmFsdWF0aW9uO1xuICBsZXQgcmVzO1xuXG4gIHRoaXMuX19ldmFsdWF0aW9uID0gbnVsbDtcbiAgcmVzID0gZm4oKTtcbiAgdGhpcy5fX2V2YWx1YXRpb24gPSBldmFsdWF0aW9uO1xuXG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIFN0b3AgaXNvbGF0aW9uIGJlZm9yZSB0aGUgZnVuY3Rpb24gYW5kIGNvbnRpbnVlIGFmdGVyXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS51bmlzb2xhdGVkID0gZnVuY3Rpb24oZm4pIHtcbiAgbGV0IGV2YWx1YXRpb24gPSB0aGlzLl9faXNvbGF0aW9uO1xuICBsZXQgcmVzO1xuXG4gIHRoaXMuX19pc29sYXRpb24gPSBudWxsO1xuICByZXMgPSBmbigpO1xuICB0aGlzLl9faXNvbGF0aW9uID0gZXZhbHVhdGlvbjtcblxuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zPXt9XVxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLmluaXRpYWxpemUgPSBmdW5jdGlvbihlbCwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCByZWNvbXBpbGUgPSBvcHRpb25zLnJlY29tcGlsZTtcbiAgbGV0IGNvbXBvbmVudCA9IGVsLl9fYWtpbGk7XG5cbiAgaWYoY29tcG9uZW50KSB7XG4gICAgaWYocmVjb21waWxlKSB7XG4gICAgICBjb21wb25lbnQuX19yZWNvbXBpbGUoKTtcblxuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgaXNSb290ID0gZWwgPT09IHRoaXMuX19yb290O1xuICBsZXQgY29tcG9uZW50TmFtZSA9IHV0aWxzLnRvRGFzaENhc2UoZWwuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKSB8fCBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpO1xuICBsZXQgX0NvbXBvbmVudCA9IHRoaXMuX19jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdO1xuXG4gIENIRUNLX0FMSUFTRVM6IGlmKCFfQ29tcG9uZW50KSB7XG4gICAgbGV0IHNlbGVjdG9ycyA9IE9iamVjdC5rZXlzKHRoaXMuX19hbGlhc2VzKTtcblxuICAgIGlmKCFzZWxlY3RvcnMubGVuZ3RoKSB7XG4gICAgICBicmVhayBDSEVDS19BTElBU0VTO1xuICAgIH1cblxuICAgIGxldCBzZWxlY3RvckFsbCA9IHNlbGVjdG9ycy5qb2luKCcsJyk7XG5cbiAgICBpZighZWwubWF0Y2hlcyhzZWxlY3RvckFsbCkpIHtcbiAgICAgIGJyZWFrIENIRUNLX0FMSUFTRVM7XG4gICAgfVxuXG4gICAgZm9yKGxldCBzZWxlY3RvciBpbiB0aGlzLl9fYWxpYXNlcykge1xuICAgICAgaWYoIXRoaXMuX19hbGlhc2VzLmhhc093blByb3BlcnR5KHNlbGVjdG9yKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYoZWwubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgX0NvbXBvbmVudCA9IHRoaXMuX19jb21wb25lbnRzW3RoaXMuX19hbGlhc2VzW3NlbGVjdG9yXV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmKCFfQ29tcG9uZW50ICYmICFpc1Jvb3QpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZighX0NvbXBvbmVudCkge1xuICAgIF9Db21wb25lbnQgPSB0aGlzLkNvbXBvbmVudDtcbiAgfVxuXG4gIGlmKF9Db21wb25lbnQubWF0Y2hlcyAmJiAhZWwubWF0Y2hlcyhfQ29tcG9uZW50Lm1hdGNoZXMpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29tcG9uZW50ID0gbmV3IF9Db21wb25lbnQoZWwsIHt9KTtcblxuICBpZihjb21wb25lbnQuX19jYW5jZWxsZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb21wb25lbnQuX19jcmVhdGUoKTtcblxuICByZXR1cm4gY29tcG9uZW50O1xufTtcblxuLyoqXG4gKiBDb21waWxlIHRoZSBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbkFraWxpLmNvbXBpbGUgPSBmdW5jdGlvbihyb290LCBvcHRpb25zID0geyByZWNvbXBpbGU6IGZhbHNlIH0pIHsgIFxuICBsZXQgZWxlbWVudHMgPSBbXTtcblxuICBsZXQgbmVzdGVkSW5pdGlhbGl6aW5nID0gKGVsKSA9PiB7XG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXMuaW5pdGlhbGl6ZShlbCwgb3B0aW9ucyk7XG4gICAgbGV0IGNoaWxkcmVuID0gZWwuY2hpbGRyZW47XG5cbiAgICBjb21wb25lbnQgJiYgZWxlbWVudHMucHVzaChjb21wb25lbnQpO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgIG5lc3RlZEluaXRpYWxpemluZyhjaGlsZCk7XG4gICAgfVxuICB9O1xuXG4gIG5lc3RlZEluaXRpYWxpemluZyhyb290KTtcblxuICBsZXQgcCA9IFtdO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgY29tcG9uZW50ID0gZWxlbWVudHNbaV07XG5cbiAgICBwLnB1c2goY29tcG9uZW50Ll9fY29tcGlsZSgpKTtcbiAgfVxuXG4gIHJldHVybiBQcm9taXNlLmFsbChwKS50aGVuKCgpID0+IHtcbiAgICBsZXQgciA9IFtdO1xuXG4gICAgZm9yKGxldCBpID0gZWxlbWVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBjb21wb25lbnQgPSBlbGVtZW50c1tpXTtcblxuICAgICAgci5wdXNoKGNvbXBvbmVudC5fX3Jlc29sdmUoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHIpO1xuICB9KTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIGNvbXBvbmVudCBvciBnZXQgaXQgaWYgZm4gaXMgbm90IHBhc3NlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gW2ZuXVxuICovXG5Ba2lsaS5jb21wb25lbnQgPSBmdW5jdGlvbihuYW1lLCBmbikge1xuICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmKCFmbikge1xuICAgIHJldHVybiB0aGlzLl9fY29tcG9uZW50c1tuYW1lXSB8fCBudWxsO1xuICB9XG5cbiAgaWYodGhpcy5fX2NvbXBvbmVudHNbbmFtZV0gJiYgQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgIGNvbnNvbGUud2FybihgQ29tcG9uZW50ICR7bmFtZX0gYWxyZWFkeSB3YXMgYWRkZWRgKTtcbiAgfVxuXG4gIHRoaXMuX19jb21wb25lbnRzW25hbWVdID0gZm47XG59O1xuXG4vKipcbiAqIFVucmVnaXN0ZXIgdGhlIGNvbXBvbmVudFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbkFraWxpLnVucmVnaXN0ZXJDb21wb25lbnQgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLl9fY29tcG9uZW50c1tuYW1lXTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIHNlbGVjdG9yIGFsaWFzIG9yIGdldCBpdCBpZiBjb21wb25lbnQgbmFtZSBpcyBub3QgcGFzc2VkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIC0gRE9NIHNlbGVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvbXBvbmVudE5hbWVdXG4gKi9cbkFraWxpLmFsaWFzID0gZnVuY3Rpb24oc2VsZWN0b3IsIGNvbXBvbmVudE5hbWUgPSAnJykge1xuICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmKCFjb21wb25lbnROYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXSB8fCBudWxsO1xuICB9XG5cbiAgaWYodGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdICYmIEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICBjb25zb2xlLndhcm4oYEFsaWFzIHdpdGggc2VsZWN0b3IgJHtzZWxlY3Rvcn0gYWxyZWFkeSB3YXMgYWRkZWRgKTtcbiAgfVxuXG4gIHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXSA9IGNvbXBvbmVudE5hbWU7XG59O1xuXG4vKipcbiAqIFVucmVnaXN0ZXIgdGhlIHNlbGVjdG9yIGFsaWFzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gKi9cbkFraWxpLnVucmVnaXN0ZXJBbGlhcyA9IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gIGRlbGV0ZSB0aGlzLl9fY29tcG9uZW50c1tzZWxlY3Rvcl07XG59O1xuXG4vKipcbiAqIElzb2xhdGUgYXJyYXkgcHJvdG90eXBlIGZ1bmN0aW9uc1xuICovXG5Ba2lsaS5pc29sYXRlQXJyYXlQcm90b3R5cGUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fX3dpbmRvdy5BcnJheSA9IHsgcHJvdG90eXBlOiB7fSB9O1xuXG4gIGxldCBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoQXJyYXkucHJvdG90eXBlKTtcblxuICBmb3IobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICBsZXQgb2xkID0gQXJyYXkucHJvdG90eXBlW2tleV07XG5cbiAgICBpZih0eXBlb2Ygb2xkICE9ICdmdW5jdGlvbicgfHwga2V5ID09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHRoaXMuX193aW5kb3cuQXJyYXkucHJvdG90eXBlW2tleV0gPSBvbGQ7XG5cbiAgICBBcnJheS5wcm90b3R5cGVba2V5XSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIEFraWxpLnVuZXZhbHVhdGVkKCgpID0+IHtcbiAgICAgICAgaWYoIXRoaXMuX19pc1Byb3h5KSB7XG4gICAgICAgICAgcmV0dXJuIG9sZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBvbGQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG59O1xuXG4vKipcbiAqIElzb2xhdGUgc29tZSB3aW5kb3cgZnVuY3Rpb25zXG4gKi9cbkFraWxpLmlzb2xhdGVXaW5kb3dGdW5jdGlvbnMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fX3dpbmRvdy5zZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgdGhpcy5fX3dpbmRvdy5zZXRJbnRlcnZhbCA9IHNldEludGVydmFsO1xuICB0aGlzLl9fd2luZG93LlByb21pc2UgPSBQcm9taXNlO1xuXG4gIHdpbmRvdy5zZXRUaW1lb3V0ID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuc2V0VGltZW91dCwgMCk7XG4gIHdpbmRvdy5zZXRJbnRlcnZhbCA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LnNldEludGVydmFsLCAwKTtcbiAgd2luZG93LlByb21pc2UgJiYgKHdpbmRvdy5Qcm9taXNlLmNvbnN0cnVjdG9yID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuUHJvbWlzZS5jb25zdHJ1Y3RvciAsIDApKTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSBldmVudCBsaXN0ZW5lcnNcbiAqL1xuQWtpbGkuaXNvbGF0ZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQgPSB7IHByb3RvdHlwZToge30gfTtcblxuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBFbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyO1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyO1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZTtcblxuICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICBkZWxldGUgdGhpcy5fX2FraWxpTGlzdGVuZXJzO1xuXG4gICAgcmV0dXJuIEFraWxpLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihuYW1lLCBmbikge1xuICAgIGxldCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYoIXRoaXMuX19ha2lsaUxpc3RlbmVycykge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzID0ge307XG4gICAgfVxuXG4gICAgaWYoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgYXJnc1sxXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBBa2lsaS51bmV2YWx1YXRlZCgoKSA9PiB7XG4gICAgICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLnB1c2goe1xuICAgICAgbGluazogZm4sXG4gICAgICBmbjogYXJnc1sxXVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIEFraWxpLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG5cbiAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYoIXRoaXMuX19ha2lsaUxpc3RlbmVycykge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzID0ge307XG4gICAgfVxuXG4gICAgaWYoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBsaXN0ZW5lciA9IHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXVtpXTtcblxuICAgICAgaWYobGlzdGVuZXIubGluayA9PT0gZm4pIHtcbiAgICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLnNwbGljZShpLCAxKTtcbiAgICAgICAgaS0tO1xuICAgICAgICBsLS07XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV07XG4gICAgfVxuXG4gICAgcmV0dXJuICBBa2lsaS5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG4vKipcbiAqIFdyYXAgdGhlIGZ1bmN0aW9uIGNhbGxiYWNrIHRvIGFuIGlzb2xhdGUgY29udGV4dFxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IFtwb3M9XCJsYXN0XCJdXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbkFraWxpLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uID0gZnVuY3Rpb24oZm4sIHBvcyA9ICdsYXN0Jykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgbGV0IGNhbGxiYWNrID0gcG9zID09ICdsYXN0Jz8gYXJnc1thcmdzLmxlbmd0aCAtIDFdOiBhcmdzW3Bvc107XG5cbiAgICBpZih0eXBlb2YgY2FsbGJhY2sgIT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgYXJnc1swXSA9ICgpID0+IHtcbiAgICAgIHJldHVybiBBa2lsaS51bmV2YWx1YXRlZCgoKSA9PiB7XG4gICAgICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xufTtcblxuLyoqXG4gKiBJc29sYXRlIHRoZSBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge29iamVjdH0gW2NvbnRleHRdXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbkFraWxpLmlzb2xhdGVGdW5jdGlvbiA9IGZ1bmN0aW9uKGZuLCBjb250ZXh0ID0gbnVsbCkge1xuICBpZihmbi5fX2FraWxpKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgbGV0IG9GbiA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IHRoaXM7XG5cbiAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICByZXR1cm4gZm4uYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcbiAgICB9KTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob0ZuLCAnX19ha2lsaScsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG5cbiAgcmV0dXJuIG9Gbjtcbn07XG5cbi8qKlxuICogRXJyb3IgaGFuZGxpbmdcbiAqL1xuQWtpbGkuZXJyb3JIYW5kbGluZyA9IGZ1bmN0aW9uKCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgdGhpcy50cmlnZ2VySW5pdChmYWxzZSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBUcmlnZ2VyIGFuIGluaXRpYWxpemF0aW9uIHN0YXR1c1xuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc3RhdHVzXG4gKi9cbkFraWxpLnRyaWdnZXJJbml0ID0gZnVuY3Rpb24oc3RhdHVzKSB7XG4gIEFraWxpLl9faW5pdCA9IHN0YXR1cztcbiAgdGhpcy5fX3NlcnZlclJlbmRlcmluZyAmJiAodGhpcy5fX2h0bWwuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJyk7XG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnYWtpbGktaW5pdCcsIHsgZGV0YWlsOiBzdGF0dXMgfSkpO1xufTtcblxuLyoqXG4gKiBTZXJ2ZXIgcmVuZGVyaW5nIGltcGxlbWVudGF0aW9uXG4gKi9cbkFraWxpLnNlcnZlclJlbmRlcmluZyA9IGZ1bmN0aW9uKCkge1xuICBsZXQgc2VydmVyID0gdGhpcy5fX2h0bWwuZ2V0QXR0cmlidXRlKCdha2lsaS1zZXJ2ZXInKTtcblxuICB0aGlzLl9fc2VydmVyUmVuZGVyaW5nID0gISFzZXJ2ZXI7XG5cbiAgaWYoc2VydmVyKSB7XG4gICAgdGhpcy5fX2h0bWwuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIHRoaXMuX19zZXJ2ZXJQcm9taXNlID0gcmVxdWVzdC5nZXQoc2VydmVyKS50aGVuKChyZXMpID0+IHsgICAgICBcbiAgICAgIHRoaXMuX19odG1sLmlubmVySFRNTCA9IHJlcy5kYXRhO1xuICAgIH0pO1xuICB9XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIGFwcGxpY2F0aW9uXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW3Jvb3RdXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuQWtpbGkuaW5pdCA9IGZ1bmN0aW9uKHJvb3QpIHtcbiAgdGhpcy5fX3Jvb3QgPSByb290IHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpO1xuXG4gIHJldHVybiB0aGlzLl9fc2VydmVyUHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5jb21waWxlKHRoaXMuX19yb290KS50aGVuKCgpID0+IHtcbiAgICAgIGlmKHJvdXRlci5fX2luaXQpIHtcbiAgICAgICAgcmV0dXJuIHJvdXRlci5jaGFuZ2VTdGF0ZSgpO1xuICAgICAgfVxuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy50cmlnZ2VySW5pdCh0cnVlKTtcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICB0aGlzLnRyaWdnZXJJbml0KGZhbHNlKTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIERlaW5pdGlhbGl6ZSB0aGUgYXBwbGljYXRpb25cbiAqL1xuQWtpbGkuZGVpbml0ID0gZnVuY3Rpb24oKSB7XG4gIGZvcihsZXQga2V5IGluIHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUpIHtcbiAgICBFbGVtZW50LnByb3RvdHlwZVtrZXldID0gdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZVtrZXldO1xuICB9XG5cbiAgZm9yKGxldCBrZXkgaW4gdGhpcy5fX3dpbmRvdy5BcnJheS5wcm90b3R5cGUpIHtcbiAgICBBcnJheS5wcm90b3R5cGVba2V5XSA9IHRoaXMuX193aW5kb3cuQXJyYXkucHJvdG90eXBlW2tleV07XG4gIH1cblxuICB3aW5kb3cuc2V0VGltZW91dCA9IHRoaXMuX193aW5kb3cuc2V0VGltZW91dDtcbiAgd2luZG93LnNldEludGVydmFsID0gdGhpcy5fX3dpbmRvdy5zZXRJbnRlcnZhbDtcbiAgd2luZG93LlByb21pc2UgPSB0aGlzLl9fd2luZG93LlByb21pc2U7XG59O1xuXG4vKipcbiAqIERlZmluZSBhbGwgZGVmYXVsdCBjb21wb25lbnRzXG4gKi9cbkFraWxpLmRlZmluZSA9IGZ1bmN0aW9uKCkge1xuICBBLmRlZmluZSgpO1xuICBBdWRpby5kZWZpbmUoKTtcbiAgQ29udGVudC5kZWZpbmUoKTtcbiAgQ29tcG9uZW50LmRlZmluZSgpO1xuICBFbWJlZC5kZWZpbmUoKTtcbiAgRm9yLmRlZmluZSgpO1xuICBJbmNsdWRlLmRlZmluZSgpO1xuICBJZnJhbWUuZGVmaW5lKCk7XG4gIEltYWdlLmRlZmluZSgpO1xuICBJbnB1dC5kZWZpbmUoKTtcbiAgSWYuZGVmaW5lKCk7XG4gIE9iamVjdHMuZGVmaW5lKCk7XG4gIFJhZGlvLmRlZmluZSgpO1xuICBSb3V0ZS5kZWZpbmUoKTtcbiAgU2VsZWN0LmRlZmluZSgpO1xuICBTb3VyY2UuZGVmaW5lKCk7XG4gIFRleHRhcmVhLmRlZmluZSgpO1xuICBUcmFjay5kZWZpbmUoKTtcbiAgVmlkZW8uZGVmaW5lKCk7XG59O1xuXG5Ba2lsaS5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5Ba2lsaS5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5Ba2lsaS5TY29wZSA9IFNjb3BlO1xuQWtpbGkudXRpbHMgPSB1dGlscztcbkFraWxpLmNvbXBvbmVudHMuQSA9IEE7XG5Ba2lsaS5jb21wb25lbnRzLkF1ZGlvID0gQXVkaW87XG5Ba2lsaS5jb21wb25lbnRzLkNvbnRlbnQgPSBDb250ZW50O1xuQWtpbGkuY29tcG9uZW50cy5Gb3IgPSBGb3I7XG5Ba2lsaS5jb21wb25lbnRzLkVtYmVkID0gRW1iZWQ7XG5Ba2lsaS5jb21wb25lbnRzLklmID0gSWY7XG5Ba2lsaS5jb21wb25lbnRzLkluY2x1ZGUgPSBJbmNsdWRlO1xuQWtpbGkuY29tcG9uZW50cy5JbnB1dCA9IElucHV0O1xuQWtpbGkuY29tcG9uZW50cy5JZnJhbWUgPSBJZnJhbWU7XG5Ba2lsaS5jb21wb25lbnRzLkltYWdlID0gSW1hZ2U7XG5Ba2lsaS5jb21wb25lbnRzLk9iamVjdCA9IE9iamVjdHM7XG5Ba2lsaS5jb21wb25lbnRzLlJhZGlvID0gUmFkaW87XG5Ba2lsaS5jb21wb25lbnRzLlJvdXRlID0gUm91dGU7XG5Ba2lsaS5jb21wb25lbnRzLlNlbGVjdCA9IFNlbGVjdDtcbkFraWxpLmNvbXBvbmVudHMuU291cmNlID0gU291cmNlO1xuQWtpbGkuY29tcG9uZW50cy5UZXh0ID0gVGV4dDtcbkFraWxpLmNvbXBvbmVudHMuVGV4dGFyZWEgPSBUZXh0YXJlYTtcbkFraWxpLmNvbXBvbmVudHMuVHJhY2sgPSBUcmFjaztcbkFraWxpLmNvbXBvbmVudHMuVXJsID0gVXJsO1xuQWtpbGkuY29tcG9uZW50cy5WaWRlbyA9IFZpZGVvO1xuQWtpbGkuc2VydmljZXMucmVxdWVzdCA9IHJlcXVlc3Q7XG5Ba2lsaS5zZXJ2aWNlcy5yb3V0ZXIgPSByb3V0ZXI7XG5cbndpbmRvdy5Ba2lsaSA9IEFraWxpO1xuXG5leHBvcnQgY29uc3QgY29tcG9uZW50cyA9IEFraWxpLmNvbXBvbmVudHM7XG5leHBvcnQgY29uc3Qgc2VydmljZXMgPSBBa2lsaS5zZXJ2aWNlcztcbmV4cG9ydCBkZWZhdWx0IEFraWxpO1xuXG5Ba2lsaS5zZXJ2ZXJSZW5kZXJpbmcoKTtcbkFraWxpLmRlZmluZSgpO1xuQWtpbGkuZXJyb3JIYW5kbGluZygpO1xuQWtpbGkuaXNvbGF0ZUV2ZW50cygpO1xuQWtpbGkuaXNvbGF0ZUFycmF5UHJvdG90eXBlKCk7XG5Ba2lsaS5pc29sYXRlV2luZG93RnVuY3Rpb25zKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FraWxpLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xyXG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXJsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgbWF0Y2hlcyA9ICdbdXJsXSc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcclxuICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG5cclxuICAgIHRoaXMudXJsQXR0cmlidXRlID0gJ3NyYyc7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VkVXJsKHVybCkge1xyXG4gICAgdGhpcy5zZXRVcmwodXJsKTtcclxuICB9XHJcblxyXG4gIGNvbXBpbGVkKCkge1xyXG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgndXJsJykgJiYgdGhpcy5zZXRVcmwodGhpcy5hdHRycy51cmwpO1xyXG4gIH1cclxuXHJcbiAgc2V0VXJsKHVybCkge1xyXG4gICAgdGhpcy5hdHRyc1t0aGlzLnVybEF0dHJpYnV0ZV0gPSB1cmw7XHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdXJsLmpzIiwiaW1wb3J0IEFraWxpIGZyb20gJy4vYWtpbGkuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9zZXJ2aWNlcy9yZXF1ZXN0LmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcblxuY29uc3QgZXZhbHVhdGlvblJlZ2V4ID0gL1xcJHsoKCg/IVxcJHspLikqKX0vO1xuY29uc3QgZXZhbHVhdGlvblJlZ2V4R2xvYmFsID0gbmV3IFJlZ0V4cChldmFsdWF0aW9uUmVnZXguc291cmNlLCBcImdcIik7XG5jb25zdCBzeXN0ZW1BdHRyaWJ1dGVzID0gWydjb21wb25lbnQnLCAnc2NvcGUnXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgc3RhdGljIG5lc3RlZFdhdGNoaW5nO1xuICBzdGF0aWMgbWF0Y2hlcyA9ICcnO1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbXTtcbiAgc3RhdGljIGV2ZW50cyA9IFtdO1xuICBzdGF0aWMgY29udHJvbEF0dHJpYnV0ZXMgPSBmYWxzZTtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gZmFsc2U7XG4gIHN0YXRpYyB0ZW1wbGF0ZSA9ICcnO1xuICBzdGF0aWMgdGVtcGxhdGVVcmwgPSAnJztcbiAgc3RhdGljIHNjb3BlID0gbnVsbDtcblxuICAvKipcbiAgICogRnVuY3Rpb24gdG8gZGVmaW5lIHRoZSBjb21wb25lbnRcbiAgICovXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdjb21wb25lbnQnLCBDb21wb25lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIHRoZSBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBleHByZXNzaW9uXG4gICAqIEBwYXJhbSB7RXZlbnR9IFtldmVudD1udWxsXVxuICAgKi9cbiAgc3RhdGljIHBhcnNlKGNvbnRleHQsIGV4cHJlc3Npb24sIGV2ZW50ID0gbnVsbCkge1xuICAgIHJldHVybiAoZnVuY3Rpb24gKGV4cHJlc3Npb24sIGV2ZW50KSB7XG4gICAgICByZXR1cm4gZXZhbChleHByZXNzaW9uKTtcbiAgICB9KS5jYWxsKGNvbnRleHQsIGV4cHJlc3Npb24sIGV2ZW50KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVsLCBzY29wZSA9IHt9KSB7XG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19pc0NvbXBpbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19wcmV2ZW50ID0gZmFsc2U7XG4gICAgdGhpcy5fX2JpbmRpbmdzID0ge307XG4gICAgdGhpcy5fX2V2YWx1YXRpbmdFdmVudCA9IG51bGw7XG4gICAgdGhpcy5fX3JlY29tcGlsaW5nID0gbnVsbDtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0ge307XG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IG51bGw7XG4gICAgdGhpcy5fX2NoaWxkcmVuID0gW107XG4gICAgdGhpcy5fX3BhcmVudCA9IG51bGw7XG4gICAgdGhpcy5fX3BhcmVudHMgPSBbXTtcbiAgICB0aGlzLl9fYXR0cnMgPSB7fTtcbiAgICB0aGlzLl9fYXR0cmlidXRlT2YgPSBudWxsO1xuICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50ID0gdGhpcztcbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgdGhpcy5lbCA9IGVsO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiB0aGUgcmVjb21waWxhdGlvblxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlY29tcGlsZSgpIHtcbiAgICB0aGlzLl9faXNNb3VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2lzQ29tcGlsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5fX2Rpc2FibGVQcm94eSA9IG51bGw7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IHt9O1xuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IHt9O1xuICAgIHRoaXMuX19zZXRFdmVudHMoKTtcbiAgICB0aGlzLl9fc2V0UGFyZW50cygpO1xuICAgIHRoaXMuX19zZXRCb29sZWFuQXR0cmlidXRlcygpO1xuICAgIHRoaXMuX19kZWZpbmVBdHRyaWJ1dGVzKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIG9uIHRoZSBjcmVhdGlvblxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZSgpIHtcbiAgICB0aGlzLmVsLl9fYWtpbGkgPSB0aGlzO1xuICAgIHRoaXMuX19pbml0aWFsaXplKCk7XG4gICAgdGhpcy5fX3NldEV2ZW50cygpO1xuICAgIHRoaXMuX19zZXRQYXJlbnRzKCk7XG4gICAgdGhpcy5fX3NldEJvb2xlYW5BdHRyaWJ1dGVzKCk7XG4gICAgdGhpcy5fX2RlZmluZUF0dHJpYnV0ZXMoKTtcblxuICAgIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVkKHRoaXMuYXR0cnMpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiB0aGUgY29tcGlsYXRpb25cbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIF9fY29tcGlsZSgpIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuX19jb250cm9sQXR0cmlidXRlcyB8fCAhdGhpcy5fX2V2YWx1YXRlUGFyZW50O1xuICAgIGxldCBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbiAgICB0aGlzLl9fYXR0cmlidXRlT2YgPSBjb250cm9sPyB0aGlzOiB0aGlzLl9fZXZhbHVhdGVQYXJlbnQuX19ha2lsaTtcblxuICAgIGlmKCF0aGlzLl9fcmVjb21waWxpbmcgfHwgdGhpcy5fX2NvbXBpbGluZy5uZXdQYXJlbnQgfHwgdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzKSB7XG4gICAgICB0aGlzLl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKHRoaXMuZWwsIHRoaXMuX19hdHRyaWJ1dGVPZik7XG4gICAgfVxuXG4gICAgbGV0IGludGVycG9sYXRlID0gKGNoaWxkcmVuLCBwYXJlbnQpID0+IHtcbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYoY2hpbGQubm9kZVR5cGUgPT0gMykge1xuICAgICAgICAgIHRoaXMuX19pbml0aWFsaXplTm9kZShjaGlsZCwgcGFyZW50KTtcblxuICAgICAgICAgIGNoaWxkLm5vZGVWYWx1ZSA9IHRoaXMuX19ldmFsdWF0ZShjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihjaGlsZC5ub2RlVHlwZSA9PSAxICYmICFjaGlsZC5fX2FraWxpKSB7XG4gICAgICAgICAgdGhpcy5fX2ludGVycG9sYXRlQXR0cmlidXRlcyhjaGlsZCk7XG4gICAgICAgICAgaW50ZXJwb2xhdGUoY2hpbGQuY2hpbGROb2RlcywgY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGludGVycG9sYXRlKHRoaXMuZWwuY2hpbGROb2RlcywgdGhpcy5lbCk7XG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IHRydWU7XG5cbiAgICBsZXQgcmVzO1xuXG4gICAgaWYoIXRoaXMuX19yZWNvbXBpbGluZykge1xuICAgICAgcmVzID0gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0cnMub25Db21waWxlZCAmJiB0aGlzLmF0dHJzLm9uQ29tcGlsZWQudHJpZ2dlcigpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBpbGVkKCk7XG4gICAgICB9KTtcblxuICAgICAgaWYodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkge1xuICAgICAgICBwID0gcmVxdWVzdC5nZXQodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLl9fY29udGVudDtcbiAgICAgICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCByZXMuZGF0YSk7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX19jb250ZW50O1xuXG4gICAgICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uUmVjb21waWxlZCAmJiB0aGlzLmF0dHJzLm9uUmVjb21waWxlZC50cmlnZ2VyKCk7XG4gICAgICAgIHRoaXMucmVjb21waWxlZCgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fX2lzQ29tcGlsZWQgPSB0cnVlO1xuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IG51bGw7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IG51bGw7XG5cbiAgICByZXR1cm4gcC50aGVuKCgpID0+IHtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZSB0aGUgY29tcG9uZW50XG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBfX3Jlc29sdmUoKSB7XG4gICAgaWYodGhpcy5fX3JlY29tcGlsaW5nKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5hdHRycy5vblJlc29sdmVkICYmIHRoaXMuYXR0cnMub25SZXNvbHZlZC50cmlnZ2VyKCk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnJlc29sdmVkKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnQgb2YgdGhlIHtAc2VlIENvbXBvbmVudCNfX2NvbXBpbGV9IG1ldGhvZFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemUoKSB7XG4gICAgbGV0IHBhcmVudCA9IEFraWxpLmdldEFraWxpUGFyZW50cyh0aGlzLmVsLCBmYWxzZSk7XG4gICAgbGV0IFNjb3BlID0gdGhpcy5jb25zdHJ1Y3Rvci5zY29wZSB8fCBBa2lsaS5TY29wZTtcbiAgICBsZXQgc2NvcGU7XG4gICAgbGV0IGlzUm9vdCA9IEFraWxpLl9fcm9vdCA9PT0gdGhpcy5lbDtcblxuICAgIGlmKHBhcmVudCkge1xuICAgICAgc2NvcGUgPSBuZXcgU2NvcGUodGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3Njb3BlJykgfHwgQWtpbGkuY3JlYXRlU2NvcGVOYW1lKCksIHRoaXMuZWwsIHRoaXMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNjb3BlID0gbmV3IFNjb3BlKGlzUm9vdD8gJ3Jvb3QnOiBBa2lsaS5jcmVhdGVTY29wZU5hbWUoKSwgdGhpcy5lbCwgdGhpcyk7XG4gICAgICBpc1Jvb3QgJiYgKEFraWxpLnJvb3QgPSB0aGlzKTtcbiAgICB9XG5cbiAgICBsZXQgX19zY29wZSA9IHNjb3BlO1xuICAgIGxldCBfc2NvcGUgPSBPYmplY3QuYXNzaWduKHNjb3BlLCB0aGlzLnNjb3BlKTtcbiAgICBsZXQgbmVzdGVkV2F0Y2hpbmcgPSBBa2lsaS5vcHRpb25zLm5lc3RlZFdhdGNoaW5nO1xuICAgIGxldCBjb250cm9sQXR0cmlidXRlcyA9IHRoaXMuY29uc3RydWN0b3IuY29udHJvbEF0dHJpYnV0ZXM7XG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuY29uc3RydWN0b3IuZXZlbnRzO1xuXG4gICAgaWYodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZSkge1xuICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgdGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgaWYodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkge1xuICAgICAgdGhpcy5fX2NvbnRlbnQgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gICAgaWYodGhpcy5jb25zdHJ1Y3Rvci5uZXN0ZWRXYXRjaGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXN0ZWRXYXRjaGluZyA9IHRoaXMuY29uc3RydWN0b3IubmVzdGVkV2F0Y2hpbmc7XG4gICAgfVxuICAgIGVsc2UgaWYoU2NvcGUubmVzdGVkV2F0Y2hpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbmVzdGVkV2F0Y2hpbmcgPSBTY29wZS5uZXN0ZWRXYXRjaGluZztcbiAgICB9XG5cbiAgICB0aGlzLl9fc2NvcGUgPSBfX3Njb3BlO1xuICAgIHRoaXMuX19ldmVudHMgPSBldmVudHM7XG4gICAgdGhpcy5fX25lc3RlZFdhdGNoaW5nID0gbmVzdGVkV2F0Y2hpbmc7XG4gICAgdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzID0gY29udHJvbEF0dHJpYnV0ZXM7XG5cbiAgICBBa2lsaS5hZGRTY29wZShzY29wZSk7XG5cbiAgICBpZihuZXN0ZWRXYXRjaGluZykge1xuICAgICAgc2NvcGUgPSB0aGlzLl9fbmVzdGVkT2JzZXJ2ZShfc2NvcGUsIFtdKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzY29wZSA9IHRoaXMuX19vYnNlcnZlKF9zY29wZSwgW10pO1xuICAgIH1cblxuICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYm9vbGVhbiBhdHRyaWJ1dGVzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKSB7XG4gICAgdGhpcy5ib29sZWFuQXR0cmlidXRlcyA9IFtdLmNvbmNhdChBa2lsaS5odG1sQm9vbGVhbkF0dHJpYnV0ZXMsIHRoaXMuY29uc3RydWN0b3IuYm9vbGVhbkF0dHJpYnV0ZXMpO1xuXG4gICAgbGV0IHNldEF0dHIgPSAoZWwpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBhdHRycyA9IGVsLmF0dHJpYnV0ZXMsIGwgPSBhdHRycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IG5vZGUgPSBhdHRyc1tpXTtcblxuICAgICAgICBpZih0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzLmluZGV4T2Yobm9kZS5ub2RlTmFtZSkgIT0gLTEpIHtcbiAgICAgICAgICBpZihlbC5oYXNBdHRyaWJ1dGUoYGJvb2xlYW4tJHtub2RlLm5vZGVOYW1lfWApKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYGJvb2xlYW4tJHtub2RlLm5vZGVOYW1lfWAsIGVsLmdldEF0dHJpYnV0ZShub2RlLm5vZGVOYW1lKSB8fCBub2RlLm5vZGVOYW1lKTtcbiAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGVsLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBlbC5jaGlsZHJlbltpXTtcblxuICAgICAgICBpZighY2hpbGQuX19ha2lsaSkge1xuICAgICAgICAgIHNldEF0dHIoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNldEF0dHIodGhpcy5lbCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGV2ZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldEV2ZW50cygpIHtcbiAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5fX2V2ZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBldiA9IHRoaXMuX19ldmVudHNbaV07XG5cbiAgICAgICEvXm9uLS9pLnRlc3QoZXYpICYmIChldiA9ICdvbi0nICsgZXYpO1xuXG4gICAgICBpZighdGhpcy5lbC5oYXNBdHRyaWJ1dGUoZXYpKSB7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGV2LCAnJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjb21wb25lbnQgcGFyZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldFBhcmVudHMoKSB7XG4gICAgbGV0IHBhcmVudHMgPSBBa2lsaS5nZXRBa2lsaVBhcmVudHModGhpcy5lbCk7XG5cbiAgICBpZighcGFyZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbmV3UGFyZW50ID0gdGhpcy5fX3BhcmVudCAhPT0gcGFyZW50c1swXTtcbiAgICBsZXQgZXZhbHVhdGVQYXJlbnQgPSBudWxsO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHBhcmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcGFyZW50ID0gcGFyZW50c1tpXTtcblxuICAgICAgaWYoIXBhcmVudC5fX2FraWxpLmNvbnN0cnVjdG9yLnRyYW5zcGFyZW50KSB7XG4gICAgICAgIGV2YWx1YXRlUGFyZW50ID0gcGFyZW50O1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX19jb21waWxpbmcubmV3UGFyZW50ID0gbmV3UGFyZW50O1xuICAgIG5ld1BhcmVudCAmJiB0aGlzLl9fZGV0YWNoKCk7XG5cbiAgICBpZih0aGlzLmNvbnN0cnVjdG9yLnRyYW5zcGFyZW50KSB7XG4gICAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudCA9IGV2YWx1YXRlUGFyZW50Ll9fYWtpbGk7XG4gICAgfVxuXG4gICAgdGhpcy5fX2V2YWx1YXRlUGFyZW50ID0gZXZhbHVhdGVQYXJlbnQ7XG4gICAgdGhpcy5fX3BhcmVudCA9IHBhcmVudHNbMF07XG4gICAgdGhpcy5fX3BhcmVudHMgPSBwYXJlbnRzO1xuICAgIHRoaXMuc2NvcGUuX19wYXJlbnQgPSB0aGlzLl9fZXZhbHVhdGVQYXJlbnQuX19ha2lsaS5zY29wZTtcbiAgICAhdGhpcy5fX3JlY29tcGlsaW5nICYmIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2FkZENoaWxkKHRoaXMuZWwpO1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLnNjb3BlLCB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19zY29wZSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGNoaWxkIGVsZW1lbnQgdG8gdGhlIGxpc3RcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hZGRDaGlsZChlbCkge1xuICAgIHRoaXMuX19jaGlsZHJlbi5wdXNoKGVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGxpY2UgY2hpbGQgZnJvbSB0aGUgbGlzdFxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NwbGljZUNoaWxkKGVsKSB7XG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuX19jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuX19jaGlsZHJlbltpXTtcblxuICAgICAgaWYoY2hpbGQgPT09IGVsKSB7XG4gICAgICAgIHRoaXMuX19jaGlsZHJlbi5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGktLTtcbiAgICAgICAgbC0tO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBZb3UgY2FuIGNoYW5nZSBleHByZXNzaW9uIGJlZm9yZSBwYXJzaW5nIGhlcmVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4cHJlc3Npb25cbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0UGFyc2VkRXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgbm9kZSBoYXMgYW55IHByb3BlcnR5IGNoYW5nZXMgb3Igbm90XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jaGVja0V2YWx1YXRpb24obm9kZSkge1xuICAgIGlmICghT2JqZWN0LmtleXMobm9kZS5fX3Byb3BlcnRpZXMpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgayBpbiBub2RlLl9fcHJvcGVydGllcykge1xuICAgICAgaWYoIW5vZGUuX19wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgcHJvcCA9IG5vZGUuX19wcm9wZXJ0aWVzW2tdO1xuICAgICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMocHJvcC5rZXlzLCBwcm9wLmNvbXBvbmVudC5fX3Njb3BlKTtcblxuICAgICAgaWYoIXV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlKHZhbHVlLCBwcm9wLnZhbHVlLCBwcm9wLmNvcHksIHV0aWxzLmNvcHkodmFsdWUpKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogIENoZWNrIG5vZGUgaGFzIGNoYW5nZWQgb24gdGhlIGNlcnRhaW4ga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NoZWNrTm9kZVByb3BlcnR5Q2hhbmdpbmcobm9kZSwga2V5cywgdmFsdWUpIHtcbiAgICBsZXQgcHJvcCA9IHRoaXMuX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cyk7XG5cbiAgICBpZighcHJvcCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuICF1dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSh2YWx1ZSwgcHJvcC52YWx1ZSwgcHJvcC5jb3B5LCB1dGlscy5jb3B5KHZhbHVlKSk7XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgbm9kZSBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZShub2RlKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGxldCBhdHRyaWJ1dGVWYWx1ZTtcbiAgICBsZXQgZXhwcmVzc2lvbjtcblxuICAgIGlmKG5vZGUuX19jb21wb25lbnQucGFyZW50cygoY29tKSA9PiBjb20uX19wcmV2ZW50KS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBub2RlLl9fZXhwcmVzc2lvbjtcbiAgICB9XG5cbiAgICBpZighKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cikgJiYgbm9kZS5fX2NvbXBvbmVudC5fX3ByZXZlbnQpIHtcbiAgICAgIHJldHVybiBub2RlLl9fZXhwcmVzc2lvbjtcbiAgICB9XG5cbiAgICBsZXQgcmVzID0gbm9kZS5fX2V4cHJlc3Npb24ucmVwbGFjZShldmFsdWF0aW9uUmVnZXhHbG9iYWwsIChtLCBkKSA9PiB7XG4gICAgICBjb3VudGVyKys7XG5cbiAgICAgIGxldCBldmFsdWF0ZTtcbiAgICAgIGxldCBldmFsdWF0aW9uO1xuICAgICAgbGV0IGV4aXN0aW5nQmluZGluZ3MgPSB7fTtcbiAgICAgIGxldCBwYXJzZVZhbHVlID0gbm9kZS5fX2NvbXBvbmVudC5fX2dldFBhcnNlZEV4cHJlc3Npb24oZCk7XG5cbiAgICAgIEFraWxpLl9fZXZhbHVhdGlvbiA9IHsgbm9kZTogbm9kZSwgbGlzdDogW119O1xuXG4gICAgICB0cnkge1xuICAgICAgICBldmFsdWF0ZSA9IHRoaXMuY29uc3RydWN0b3IucGFyc2UodGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQuc2NvcGUsIHBhcnNlVmFsdWUpO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG5cbiAgICAgIGV2YWx1YXRpb24gPSBBa2lsaS5fX2V2YWx1YXRpb24/IEFraWxpLl9fZXZhbHVhdGlvbi5saXN0OiBbXTtcbiAgICAgIEFraWxpLl9fZXZhbHVhdGlvbi5saXN0ID0gbnVsbDtcbiAgICAgIEFraWxpLl9fZXZhbHVhdGlvbiA9IG51bGw7XG5cbiAgICAgIGZvcihsZXQgaSA9IGV2YWx1YXRpb24ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgbGV0IGRhdGEgPSBldmFsdWF0aW9uW2ldO1xuICAgICAgICBsZXQgaGFzaCA9IGAke2RhdGEuY29tcG9uZW50Ll9fc2NvcGUuX19uYW1lfS4ke2RhdGEua2V5c1N0cmluZ31gO1xuXG4gICAgICAgIGlmKGRhdGEubm90QmluZGluZykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZXhpc3RpbmdCaW5kaW5nc1toYXNoXSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBhcmVudFZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoZGF0YS5wYXJlbnRzLCBkYXRhLmNvbXBvbmVudC5fX3Njb3BlKTtcbiAgICAgICAgbGV0IGV2YWxDb21wb25lbnQgPSBub2RlLl9fYXR0cmlidXRlT2YgfHwgbm9kZS5fX2NvbXBvbmVudDtcblxuICAgICAgICBpZih1dGlscy5pc1Njb3BlUHJveHkocGFyZW50VmFsdWUpICYmIGRhdGEuY29tcG9uZW50ICE9PSBldmFsQ29tcG9uZW50Ll9fZXZhbHVhdGlvbkNvbXBvbmVudCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGJpbmQgPSBkYXRhLmNvbXBvbmVudC5fX2dldEJvdW5kTm9kZShkYXRhLmtleXMsIG5vZGUpO1xuICAgICAgICBsZXQgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhkYXRhLmtleXMsIGRhdGEuY29tcG9uZW50Ll9fc2NvcGUpO1xuXG4gICAgICAgIGlmKCFiaW5kKSB7XG4gICAgICAgICAgZGF0YS5jb21wb25lbnQuX19iaW5kKGRhdGEua2V5cywgeyBub2RlOiBub2RlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YS5jb21wb25lbnQuX19zZXROb2RlUHJvcGVydHkobm9kZSwgZGF0YS5rZXlzLCB2YWx1ZSk7XG4gICAgICAgIGV4aXN0aW5nQmluZGluZ3NbaGFzaF0gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBleGlzdGluZ0JpbmRpbmdzID0gbnVsbDtcbiAgICAgIGV2YWx1YXRpb24gPSBudWxsO1xuXG4gICAgICBpZihub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpIHtcbiAgICAgICAgZXhwcmVzc2lvbiA9IG07XG4gICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gZXZhbHVhdGU7XG5cbiAgICAgICAgcmV0dXJuIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZShldmFsdWF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmKHR5cGVvZiBldmFsdWF0ZSA9PSAnb2JqZWN0Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShldmFsdWF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZSkge1xuICAgICAgICAgIHJldHVybiBldmFsdWF0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZXZhbHVhdGU7XG4gICAgfSk7XG5cbiAgICBpZihub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpIHtcbiAgICAgIGxldCB2YWx1ZSA9IHJlcztcbiAgICAgIGxldCBpc0Jvb2xlYW5BdHRyaWJ1dGUgPSBmYWxzZTtcblxuICAgICAgaWYoY291bnRlcikge1xuICAgICAgICBub2RlLl9faGFzQmluZGluZ3MgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZihjb3VudGVyID09IDEgJiYgZXhwcmVzc2lvbiAmJiBub2RlLl9fZXhwcmVzc2lvbiA9PSBleHByZXNzaW9uKSB7XG4gICAgICAgIHZhbHVlID0gYXR0cmlidXRlVmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGxldCBjbGVhckF0dHJpYnV0ZSA9IG5vZGUubm9kZU5hbWUucmVwbGFjZSgvXmJvb2xlYW4tKC4rKS9pLCAnJDEnKTtcblxuICAgICAgaWYoY2xlYXJBdHRyaWJ1dGUgIT0gbm9kZS5ub2RlTmFtZSkge1xuICAgICAgICBpc0Jvb2xlYW5BdHRyaWJ1dGUgPSB0cnVlO1xuICAgICAgICB2YWx1ZSA9ICEhdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmKG5vZGUuX19hdHRyaWJ1dGVPbikge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gbm9kZS5fX2F0dHJpYnV0ZU9uO1xuXG4gICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSB0cnVlO1xuICAgICAgICBjb21wb25lbnQuYXR0cnNbdXRpbHMudG9DYW1lbENhc2UoY2xlYXJBdHRyaWJ1dGUpXSA9IHZhbHVlO1xuICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudC5fX2lzQ29tcGlsZWQpIHtcbiAgICAgICAgICBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5hdHRycy5vbkNoYW5nZWQgJiYgY29tcG9uZW50LmF0dHJzLm9uQ2hhbmdlZC50cmlnZ2VyKHsga2V5OiBjbGVhckF0dHJpYnV0ZSwgdmFsdWU6IHZhbHVlfSk7XG4gICAgICAgICAgICBjb21wb25lbnQuY2hhbmdlZChjbGVhckF0dHJpYnV0ZSwgdmFsdWUpO1xuXG4gICAgICAgICAgICBsZXQga2V5ID0gdXRpbHMudG9DYW1lbENhc2UoY2xlYXJBdHRyaWJ1dGUpO1xuICAgICAgICAgICAgbGV0IGNhbWVsS2V5ID0ga2V5WzBdLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSk7XG4gICAgICAgICAgICBsZXQgZm5OYW1lID0gJ2NoYW5nZWQnICsgY2FtZWxLZXk7XG4gICAgICAgICAgICBsZXQgZXZGbk5hbWUgPSAnb25DaGFuZ2VkJyArIGNhbWVsS2V5O1xuXG4gICAgICAgICAgICBjb21wb25lbnQuYXR0cnNbZXZGbk5hbWVdICYmIGNvbXBvbmVudC5hdHRyc1tldkZuTmFtZV0udHJpZ2dlcih2YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50W2ZuTmFtZV0gPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBjb21wb25lbnRbZm5OYW1lXSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoaXNCb29sZWFuQXR0cmlidXRlKSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gbm9kZS5fX2VsZW1lbnQ7XG4gICAgICAgIGxldCBhdHRyID0gdXRpbHMudG9DYW1lbENhc2UoY2xlYXJBdHRyaWJ1dGUpO1xuXG4gICAgICAgIHZhbHVlPyBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCAndHJ1ZScpOiBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgLyoqXG4gICAqIE5lc3RlZCBldmFsdWF0aW9uIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFt3aXRob3V0UGFyZW50cz1mYWxzZV0gLSBpZiB0cnVlIGV2YWx1YXRpb24gd2lsbCBiZSBvbmx5IGZvciB0aGUgY3VycmVudCBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVOZXN0ZWQoa2V5cywgd2l0aG91dFBhcmVudHMgPSBmYWxzZSkge1xuICAgIGxldCBzY29wZSA9IHRoaXMuX19zY29wZTtcbiAgICBsZXQgcHJvcHMgPSBbXTtcblxuICAgIGlmKCF3aXRob3V0UGFyZW50cykge1xuICAgICAgbGV0IGxhc3RQcm9wcyA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICBsZXQgdmFsdWU7XG5cbiAgICAgICAgbGFzdFByb3BzID0gWy4uLmxhc3RQcm9wcywga2V5XTtcbiAgICAgICAgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhsYXN0UHJvcHMsIHNjb3BlKTtcbiAgICAgICAgcHJvcHMucHVzaCh7IGtleXM6IGxhc3RQcm9wcywgdmFsdWU6IHZhbHVlfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcHJvcHMucHVzaCh7IGtleXM6IGtleXMsIHZhbHVlOiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCBzY29wZSl9KTtcbiAgICB9XG5cbiAgICBsZXQgcHJvcHNMZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgICBsZXQgZWxFdmFsdWF0ZSA9IChlbGVtZW50KSA9PiB7XG4gICAgICBsZXQgY29tcG9uZW50ID0gZWxlbWVudC5fX2FraWxpO1xuXG4gICAgICBmb3IgKGxldCBtID0gMDsgbSA8IHByb3BzTGVuZ3RoOyBtKyspIHtcbiAgICAgICAgbGV0IHByb3AgPSBwcm9wc1ttXTtcbiAgICAgICAgbGV0IGRhdGEgPSBjb21wb25lbnQuX19nZXRCaW5kKHByb3Aua2V5cyk7XG5cbiAgICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhLl9fZGF0YSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgayA9IDAsIGMgPSBkYXRhLl9fZGF0YS5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgICAgICBsZXQgYmluZCA9IGRhdGEuX19kYXRhW2tdO1xuXG4gICAgICAgICAgaWYoY29tcG9uZW50Ll9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2luZyhiaW5kLm5vZGUsIHByb3Aua2V5cywgcHJvcC52YWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVQcm94eSA9IHRydWU7XG4gICAgICAgICAgICBjb21wb25lbnQuX19ldmFsdWF0ZU5vZGUoYmluZC5ub2RlKTtcblxuICAgICAgICAgICAgZm9yKGxldCBfayBpbiBiaW5kLm5vZGUuX19wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgIGlmKCFiaW5kLm5vZGUuX19wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KF9rKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbGV0IF9wcm9wID0gYmluZC5ub2RlLl9fcHJvcGVydGllc1tfa107XG4gICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKF9wcm9wLmtleXMsIF9wcm9wLmNvbXBvbmVudC5fX3Njb3BlKTtcblxuICAgICAgICAgICAgICBfcHJvcC5jb21wb25lbnQuX19zZXROb2RlUHJvcGVydHkoYmluZC5ub2RlLCBfcHJvcC5rZXlzLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVQcm94eSA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfTtcblxuICAgIGxldCBldmFsdWF0ZSA9IChlbGVtZW50cykgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IGVsRXZhbHVhdGUoZWxlbWVudHNbaV0pO1xuXG4gICAgICAgIGV2YWx1YXRlKGNvbXBvbmVudC5fX2NoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZWxFdmFsdWF0ZSh0aGlzLmVsKTtcbiAgICBldmFsdWF0ZSh0aGlzLl9fY2hpbGRyZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIHZhbHVlIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVsZXRlZD1mYWxzZV0gLSB0cnVlIGlmIHZhbHVlIGlzIGRlbGV0aW5nXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVCeUtleXMoa2V5cywgdmFsdWUsIGlzRGVsZXRlZCA9IGZhbHNlKSB7XG4gICAgbGV0IGRhdGEgPSB0aGlzLl9fZ2V0QmluZChrZXlzKTtcblxuICAgIGxldCB1bmJpbmQgPSAob2JqLCBwYXJlbnRzKSA9PiB7XG4gICAgICBmb3IobGV0IGsgaW4gb2JqKSB7XG4gICAgICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkoaykgfHwgayA9PSAnX19kYXRhJykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IF9rZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrXSk7XG4gICAgICAgIGxldCBfX2tleXMgPSBfa2V5cy5zbGljZSgpO1xuICAgICAgICBsZXQgX2lzRGVsZXRlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgdmFsID0gb2JqW2tdO1xuICAgICAgICBsZXQgaGFzS2V5O1xuXG4gICAgICAgIF9fa2V5cy5zaGlmdCgpO1xuICAgICAgICBoYXNLZXkgPSB1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhfX2tleXMsIHZhbHVlKTtcblxuICAgICAgICBpZih2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgJiYgIWhhc0tleSkge1xuICAgICAgICAgIF9pc0RlbGV0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodmFsICYmIHR5cGVvZiB2YWwgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB1bmJpbmQodmFsLCBfa2V5cyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9fZXZhbHVhdGVOZXN0ZWQoX2tleXMsIHRydWUpO1xuXG4gICAgICAgIGlmKHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCAhaGFzS2V5KSB7XG4gICAgICAgICAgdGhpcy5fX3VuYmluZChfa2V5cyk7XG4gICAgICAgICAgX2lzRGVsZXRlZCAmJiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhfX2tleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBkYXRhICYmIHVuYmluZChkYXRhLCBbXS5jb25jYXQoa2V5cykpO1xuICAgIHRoaXMuX19ldmFsdWF0ZU5lc3RlZChrZXlzKTtcblxuICAgIGlmKGlzRGVsZXRlZCkge1xuICAgICAgdGhpcy5fX3VuYmluZChrZXlzKTtcbiAgICAgIGlzRGVsZXRlZCAmJiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSBldmVudCBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVFdmVudChub2RlLCBlbCwgZSkge1xuICAgIGxldCBleHByZXNzaW9uID0gZXZhbHVhdGlvblJlZ2V4LmV4ZWMobm9kZS5fX2V4cHJlc3Npb24pO1xuICAgIGxldCBldmFsdWF0ZTtcblxuICAgIGlmKCFleHByZXNzaW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fX2V2YWx1YXRpbmdFdmVudCA9IHtcbiAgICAgIGVsOiBlbCxcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIGV2ZW50OiBlLFxuICAgICAgbm9kZTogbm9kZVxuICAgIH07XG5cbiAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0gbnVsbDtcbiAgICBldmFsdWF0ZSA9IHRoaXMuY29uc3RydWN0b3IucGFyc2UodGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQuc2NvcGUsIGV4cHJlc3Npb25bMV0sIGUpO1xuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSBudWxsO1xuXG4gICAgcmV0dXJuIGV2YWx1YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGNoYW5nZXMgYW5kIGV2YWx1YXRlIHRoZSBwYXNzZWQgbm9kZVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZU5vZGUobm9kZSkge1xuICAgIGlmKHRoaXMuX19jaGVja0V2YWx1YXRpb24obm9kZSkpIHtcbiAgICAgIG5vZGVbKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cik/ICd2YWx1ZSc6ICdub2RlVmFsdWUnXSA9IHRoaXMuX19ldmFsdWF0ZShub2RlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXR0cmlidXRlIG5vZGUgaW5pdGlhbGl6aW5nXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gYXR0cmlidXRlT2YgLSBpZiBub2RlIGlzIGxpbmtlZCB3aXRoIHBhcmVudCBzY29wZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemVBdHRyaWJ1dGUobm9kZSwgZWwsIGF0dHJpYnV0ZU9mKSB7XG4gICAgaWYoc3lzdGVtQXR0cmlidXRlcy5pbmRleE9mKG5vZGUubm9kZU5hbWUpICE9IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fX2luaXRpYWxpemVOb2RlKG5vZGUsIGVsKTtcblxuICAgIGxldCBldmVudE5hbWUgPSBub2RlLm5vZGVOYW1lLnJlcGxhY2UoL15vbi0oLispL2ksICckMScpO1xuICAgIGxldCBub2RlTmFtZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKG5vZGUubm9kZU5hbWUpO1xuICAgIGxldCBjb21wb25lbnQgPSBhdHRyaWJ1dGVPZj8gYXR0cmlidXRlT2Y6IHRoaXM7XG5cbiAgICBpZihldmVudE5hbWUgIT0gbm9kZS5ub2RlTmFtZSkge1xuICAgICAgaWYobm9kZS5fX2V2ZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGVtaXR0ZXIgPSBuZXcgQWtpbGkuRXZlbnRFbWl0dGVyKGV2ZW50TmFtZSwgZWwsIGNvbXBvbmVudCk7XG5cbiAgICAgIGlmKG5vZGUuX19leHByZXNzaW9uKSB7XG4gICAgICAgIGVtaXR0ZXIuYmluZCgoZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBjb21wb25lbnQuX19ldmFsdWF0ZUV2ZW50KG5vZGUsIGVsLCBlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIG5vZGUuX19ldmVudCA9IGVtaXR0ZXI7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKGVtaXR0ZXIpKTtcblxuICAgICAgaWYoYXR0cmlidXRlT2YpIHtcbiAgICAgICAgdGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLmF0dHJzW25vZGVOYW1lXSA9IGVtaXR0ZXI7XG4gICAgICAgIHRoaXMuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZihhdHRyaWJ1dGVPZikge1xuICAgICAgbm9kZS5fX2F0dHJpYnV0ZU9uID0gdGhpcztcbiAgICAgIG5vZGUuX19hdHRyaWJ1dGVPZiA9IGNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBlbC5zZXRBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSwgY29tcG9uZW50Ll9fZXZhbHVhdGUobm9kZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIG5vZGVcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemVOb2RlKG5vZGUsIGVsKSB7XG4gICAgaWYobm9kZS5fX2luaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbm9kZS5fX2V4cHJlc3Npb24gPSBub2RlWyhub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpPyAndmFsdWUnOiAnbm9kZVZhbHVlJ107XG4gICAgbm9kZS5fX3Byb3BlcnRpZXMgPSB7fTtcbiAgICBub2RlLl9fYXR0cmlidXRlT2YgPSBudWxsO1xuICAgIG5vZGUuX19hdHRyaWJ1dGVPbiA9IG51bGw7XG4gICAgbm9kZS5fX2V2ZW50ID0gbnVsbDtcbiAgICBub2RlLl9faGFzQmluZGluZ3MgPSBmYWxzZTtcbiAgICBub2RlLl9faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIG5vZGUuX19jb21wb25lbnQgPSB0aGlzO1xuICAgIG5vZGUuX19lbGVtZW50ID0gZWw7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcnBvbGF0ZSBhdHRyaWJ1dGVzIG9mIHRoZSBlbGVtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBbYXR0cmlidXRlT2Y9bnVsbF0gLSBpZiBub2RlIGlzIGxpbmtlZCB3aXRoIHBhcmVudCBzY29wZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2ludGVycG9sYXRlQXR0cmlidXRlcyhlbCwgYXR0cmlidXRlT2YgPSBudWxsKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGF0dHJzID0gZWwuYXR0cmlidXRlcywgbCA9IGF0dHJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdGhpcy5fX2luaXRpYWxpemVBdHRyaWJ1dGUoYXR0cnNbaV0sIGVsLCBhdHRyaWJ1dGVPZik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZSBhdHRyaWJ1dGVzIGFzIHByb3h5XG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVmaW5lQXR0cmlidXRlcygpIHtcbiAgICBsZXQgY2hhbmdlQXR0cmlidXRlID0gKGtleSwgdmFsdWUsIGlzRGVsZXRlZCA9IGZhbHNlKSA9PiB7XG4gICAgICBpZih0aGlzLl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBub2RlID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGVOb2RlKGtleSk7XG5cbiAgICAgIGlmKG5vZGUpIHtcbiAgICAgICAgaWYobm9kZS5fX2V2ZW50KSB7XG4gICAgICAgICAgbm9kZS5fX2V2ZW50LnVuYmluZCgpO1xuICAgICAgICAgIG5vZGUuX19ldmVudCA9IG51bGw7XG4gICAgICAgICAgbm9kZS5fX2V4cHJlc3Npb24gPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKG5vZGUuX19oYXNCaW5kaW5ncykge1xuICAgICAgICAgIHRoaXMuX19wYXJlbnQgJiYgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5fX3VuYmluZEJ5Tm9kZXMoW25vZGVdKTtcbiAgICAgICAgICBub2RlLl9faGFzQmluZGluZ3MgPSBmYWxzZTtcbiAgICAgICAgICBub2RlLl9fZXhwcmVzc2lvbiA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKGlzRGVsZXRlZCkge1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZihub2RlKSB7XG4gICAgICAgIG5vZGUudmFsdWUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5hdHRycyA9IG5ldyBQcm94eSh0aGlzLl9fYXR0cnMsIHtcbiAgICAgIGdldDogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGlmKGtleSA9PSAnX19pc1Byb3h5Jykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgfSxcbiAgICAgIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgYXR0cktleSA9IHV0aWxzLnRvRGFzaENhc2Uoa2V5KTtcblxuICAgICAgICBpZih0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzLmluZGV4T2YoYXR0cktleSkgIT0gLTEpIHtcbiAgICAgICAgICBhdHRyS2V5ID0gYGJvb2xlYW4tJHthdHRyS2V5fWA7XG5cbiAgICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICBjaGFuZ2VBdHRyaWJ1dGUoYXR0cktleSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKHZhbHVlKSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgICAgZGVsZXRlUHJvcGVydHk6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IGF0dHJLZXkgPSB1dGlscy50b0Rhc2hDYXNlKGtleSk7XG5cbiAgICAgICAgY2hhbmdlQXR0cmlidXRlKGF0dHJLZXksIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZSh2YWx1ZSksIHRydWUpO1xuICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHByb3h5IHRvIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHBhcmVudHNcbiAgICogQHJldHVybnMge1Byb3h5fVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX29ic2VydmUob2JqLCBwYXJlbnRzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm94eShvYmosIHtcbiAgICAgIGdldDogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGlmIChrZXkgPT0gXCJfX2lzUHJveHlcIikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PSBcIl9fdGFyZ2V0XCIpIHtcbiAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PSBcIl9fY29tcG9uZW50XCIpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX2tleXNcIikge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5fX2Rpc2FibGVQcm94eSkge1xuICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodHlwZW9mIHRhcmdldFtrZXldID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBsZXQgcmVhbFRhcmdldCAgPSB1dGlscy5nZXRPd25Qcm9wZXJ0eVRhcmdldCh0YXJnZXQsIGtleSk7XG5cbiAgICAgICAgICBpZighdXRpbHMuaXNQbGFpbk9iamVjdChyZWFsVGFyZ2V0KSkge1xuICAgICAgICAgICAgcmVhbFRhcmdldFtrZXldID0gQWtpbGkuaXNvbGF0ZUZ1bmN0aW9uKHJlYWxUYXJnZXRba2V5XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFraWxpLl9fZXZhbHVhdGlvbikge1xuICAgICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrZXldKTtcbiAgICAgICAgICBsZXQgbm90QmluZGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYoIShrZXkgaW4gdGFyZ2V0KSkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYoIXV0aWxzLmdldEVudW1lcmFibGVQcm9wZXJ0eVRhcmdldCh0YXJnZXQsIGtleSkpIHtcbiAgICAgICAgICAgIG5vdEJpbmRpbmcgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX19iaW5kTm9kZShBa2lsaS5fX2V2YWx1YXRpb24ubGlzdCwga2V5cywgcGFyZW50cywgdGFyZ2V0W2tleV0sIG5vdEJpbmRpbmcpO1xuXG4gICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgfSxcbiAgICAgIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZih0aGlzLl9fZGlzYWJsZVByb3h5KSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5fX2lzU3lzdGVtS2V5KGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG5cbiAgICAgICAgaWYodGhpcy5fX25lc3RlZFdhdGNoaW5nKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB0aGlzLl9fbmVzdGVkT2JzZXJ2ZSh2YWx1ZSwga2V5cyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdmFsdWUgPSB1dGlscy5jb3B5KHZhbHVlKTtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoQWtpbGkuX19pc29sYXRpb24pIHtcbiAgICAgICAgICB0aGlzLl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0KHBhcmVudHMsIGtleSwgZmFsc2UpO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLl9faXNNb3VudGVkKSB7XG4gICAgICAgICAgdGhpcy5fX2V2YWx1YXRlQnlLZXlzKGtleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tleV0pO1xuXG4gICAgICAgIGlmKHRoaXMuX19kaXNhYmxlUHJveHkpIHtcbiAgICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZihBa2lsaS5fX2lzb2xhdGlvbikge1xuICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgICB0aGlzLl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0KHBhcmVudHMsIGtleSwgdHJ1ZSk7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgdGhpcy5fX2V2YWx1YXRlQnlLZXlzKGtleXMsIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sga2V5IGlzIHN5c3RlbVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgX19pc1N5c3RlbUtleSAoa2V5KSB7XG4gICAgaWYoa2V5ID09ICdfXycgfHwgKGtleVswXSA9PSAnXycgJiYga2V5WzFdID09ICdfJykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmKFsnY29uc3RydWN0b3InXS5pbmRleE9mKGtleSkgIT0gLTEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOZXN0ZWQgb2JzZXJ2aW5nIHRoZSB2YWx1ZVxuICAgKlxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IFtzdGFydEtleXNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fbmVzdGVkT2JzZXJ2ZSAodmFsdWUsIHN0YXJ0S2V5cykge1xuICAgIHRoaXMuX19kaXNhYmxlUHJveHkgPSB0cnVlO1xuXG4gICAgbGV0IG9ic2VydmUgPSAodmFsdWUsIHBhcmVudHMpID0+IHtcbiAgICAgIGlmKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmKCF1dGlscy5pc1BsYWluT2JqZWN0KHZhbHVlKSAmJiAhdXRpbHMuaXNTY29wZVByb3h5KHZhbHVlKSAmJiAhKHZhbHVlIGluc3RhbmNlb2YgQWtpbGkuU2NvcGUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IHRhcmdldCA9IHZhbHVlO1xuXG4gICAgICBpZih2YWx1ZS5fX2lzUHJveHkpIHtcbiAgICAgICAgdGFyZ2V0ID0gdmFsdWUuX190YXJnZXQ7XG5cbiAgICAgICAgaWYoIXRoaXMuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nKSB7XG4gICAgICAgICAgaWYodmFsdWUuX19jb21wb25lbnQgIT09IHRoaXMpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IHV0aWxzLmNvcHkodGFyZ2V0LCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICB2YWx1ZSA9IHRhcmdldDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZihBa2lsaS5qb2luQmluZGluZ0tleXMocGFyZW50cykgIT0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKHZhbHVlLl9fa2V5cykpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IHV0aWxzLmNvcHkodGFyZ2V0LCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICB2YWx1ZSA9IHRhcmdldDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoIXRoaXMuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nICYmICEodmFsdWUgaW5zdGFuY2VvZiBBa2lsaS5TY29wZSkpIHtcbiAgICAgICAgdGFyZ2V0ID0gdXRpbHMuY29weSh0YXJnZXQsIGZhbHNlLCB0cnVlKTsgICAgICAgICAgXG4gICAgICAgIHZhbHVlID0gdGFyZ2V0O1xuICAgICAgfVxuXG4gICAgICBmb3IobGV0IGsgaW4gdGFyZ2V0KSB7XG4gICAgICAgIGlmICghdGFyZ2V0Lmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmFsID0gdGFyZ2V0W2tdO1xuICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba10pO1xuXG4gICAgICAgIHRhcmdldFtrXSA9IG9ic2VydmUodmFsLCBrZXlzKTtcbiAgICAgIH1cblxuICAgICAgaWYoIXZhbHVlLl9faXNQcm94eSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX29ic2VydmUodGFyZ2V0LCBwYXJlbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG5cbiAgICBsZXQgcmVzID0gb2JzZXJ2ZSh2YWx1ZSwgc3RhcnRLZXlzIHx8IFtdKTtcblxuICAgIHRoaXMuX19kaXNhYmxlUHJveHkgPSBudWxsO1xuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgaXNvbGF0aW9uIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHBhcmFtIHtib29sZWFufSBbaXNEZWxldGVkPWZhbHNlXVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGVJc29sYXRpb25PYmplY3QgKHBhcmVudHMsIGtleSwgaXNEZWxldGVkID0gZmFsc2UpIHtcbiAgICBsZXQga2V5cyA9IHBhcmVudHMubGVuZ3RoPyBbcGFyZW50c1swXV06IFtrZXldO1xuICAgIGxldCBpc29sYXRpb25LZXkgPSBgJHt0aGlzLl9fc2NvcGUuX19uYW1lfS4ke0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKX1gO1xuXG4gICAgaWYocGFyZW50cy5sZW5ndGgpIHtcbiAgICAgIGlzRGVsZXRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmKCFBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25LZXldKSB7XG4gICAgICBBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25LZXldID0ge1xuICAgICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICAgIGtleXM6IGtleXNcbiAgICAgIH07XG4gICAgfVxuXG4gICAgKGlzRGVsZXRlZCAhPT0gdW5kZWZpbmVkKSAmJiAoQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uS2V5XS5pc0RlbGV0ZWQgPSBpc0RlbGV0ZWQpO1xuICAgIEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV0udmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpO1xuXG4gICAgcmV0dXJuIEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV07XG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSB0aGUgbm9kZSB0byBiaW5kaW5nXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBiaW5kIC0gYnkgZGVmYXVsdCBpcyBjb21wb25lbnQuX19ldmFsdWF0aW9uLmxpc3RcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbbm90QmluZGluZz1mYWxzZV1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19iaW5kTm9kZShiaW5kLCBrZXlzLCBwYXJlbnRzLCB2YWx1ZSwgbm90QmluZGluZyA9IGZhbHNlKSB7XG4gICAgbGV0IHBhcmVudEtleXNTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMocGFyZW50cyk7XG5cbiAgICBpZihiaW5kLmxlbmd0aCAmJiAhbm90QmluZGluZykge1xuICAgICAgbGV0IGwgPSBiaW5kLmxlbmd0aCAtIDE7XG4gICAgICBsZXQgZGF0YSA9IGJpbmRbbF07XG5cbiAgICAgIGlmKGRhdGEua2V5c1N0cmluZyA9PSBwYXJlbnRLZXlzU3RyaW5nICYmIGRhdGEuY29tcG9uZW50ID09PSB0aGlzKSB7XG4gICAgICAgIGJpbmQuc3BsaWNlKGwsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGJpbmQucHVzaCh7XG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICBrZXlzU3RyaW5nOiBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyksXG4gICAgICBwYXJlbnRzOiBwYXJlbnRzLFxuICAgICAga2V5czoga2V5cyxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIG5vdEJpbmRpbmc6IG5vdEJpbmRpbmdcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYmluZGluZyBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldEJpbmQoa2V5cykge1xuICAgIHJldHVybiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MpIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGJpbmRpbmcgYnkga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0Qm91bmROb2RlKGtleXMsIG5vZGUpIHtcbiAgICBsZXQgYmluZCA9ICB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MpO1xuXG4gICAgaWYoIWJpbmQgfHwgIWJpbmQuX19kYXRhIHx8ICFiaW5kLl9fZGF0YS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBiaW5kLl9fZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBkYXRhID0gYmluZC5fX2RhdGFbaV07XG5cbiAgICAgIGlmKGRhdGEubm9kZSA9PT0gbm9kZSkge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgbm9kZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzLCB2YWx1ZSkge1xuICAgIGxldCBwcm9wID0gdGhpcy5fX2dldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKTtcbiAgICBsZXQgY29weSA9IHV0aWxzLmNvcHkodmFsdWUpO1xuXG4gICAgaWYocHJvcCkge1xuICAgICAgbGV0IHJlcyA9IHV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlKHZhbHVlLCBwcm9wLnZhbHVlLCBwcm9wLmNvcHksIGNvcHkpO1xuXG4gICAgICBwcm9wLnZhbHVlID0gdmFsdWU7XG4gICAgICBwcm9wLmNvcHkgPSBjb3B5O1xuXG4gICAgICByZXR1cm4gIXJlcztcbiAgICB9XG5cbiAgICBsZXQgaGFzaCA9IGAke3RoaXMuX19zY29wZS5fX25hbWV9LiR7QWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpfWA7XG5cbiAgICBub2RlLl9fcHJvcGVydGllc1toYXNoXSA9IHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGNvcHk6IGNvcHksXG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICBrZXlzOiBrZXlzXG4gICAgfTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBub2RlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cykge1xuICAgIGxldCBoYXNoID0gYCR7dGhpcy5fX3Njb3BlLl9fbmFtZX0uJHtBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyl9YDtcblxuICAgIHJldHVybiBub2RlLl9fcHJvcGVydGllc1toYXNoXSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBub2RlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVsZXRlTm9kZVByb3BlcnR5KG5vZGUsIGtleXMpIHtcbiAgICBsZXQgaGFzaCA9IGAke3RoaXMuX19zY29wZS5fX25hbWV9LiR7QWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpfWA7XG5cbiAgICBkZWxldGUgbm9kZS5fX3Byb3BlcnRpZXNbaGFzaF07XG4gIH1cblxuICAvKipcbiAgICogQmluZCBkYXRhIHdpdGggdGhlIGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2JpbmQoa2V5cywgZGF0YSkge1xuICAgIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncywgKGxhc3QsIHZhbHVlKSA9PiB7XG4gICAgICBsZXQgb2JqID0ge19fZGF0YTogW119O1xuXG4gICAgICBpZighbGFzdCkge1xuICAgICAgICByZXR1cm4gdmFsdWU/IHZhbHVlOiBvYmo7XG4gICAgICB9XG5cbiAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgICAgICBvYmogPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYoIW9iai5fX2RhdGEpIHtcbiAgICAgICAgb2JqLl9fZGF0YSA9IFtdO1xuICAgICAgfVxuXG4gICAgICBvYmouX19kYXRhLnB1c2goZGF0YSk7XG5cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYmluZChrZXlzKSB7XG4gICAgbGV0IGJpbmQgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MpO1xuXG4gICAgaWYoIWJpbmQgfHwgIWJpbmQuX19kYXRhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGJpbmQuX19kYXRhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG5vZGUgPSBiaW5kLl9fZGF0YVtpXS5ub2RlO1xuXG4gICAgICB0aGlzLl9fZGVsZXRlTm9kZVByb3BlcnR5KG5vZGUsIGtleXMpO1xuICAgIH1cblxuICAgIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncywgKHZhbHVlKSA9PiB7XG4gICAgICBpZihPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID4gMSkge1xuICAgICAgICB2YWx1ZS5fX2RhdGEgPSBbXTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCBieSBub2Rlc1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGVbXX0gbm9kZXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmJpbmRCeU5vZGVzKG5vZGVzKSB7XG4gICAgbGV0IHVuYmluZCA9IChvYmopID0+IHtcbiAgICAgIGZvcihsZXQgayBpbiBvYmopIHtcbiAgICAgICAgaWYoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoayA9PSAnX19kYXRhJykge1xuICAgICAgICAgIGxldCBkYXRhID0gb2JqW2tdIHx8IFtdO1xuICAgICAgICAgIGxldCBsID0gZGF0YS5sZW5ndGg7XG5cbiAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYmluZCA9IGRhdGFbaV07XG5cbiAgICAgICAgICAgIGlmKG5vZGVzLmluZGV4T2YoYmluZC5ub2RlKSAhPSAtMSkge1xuICAgICAgICAgICAgICBkYXRhLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICBsLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYoIWwpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmpba107XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHVuYmluZChvYmpba10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHVuYmluZCh0aGlzLl9fYmluZGluZ3MpO1xuICAgIHRoaXMuX19jbGVhckVtcHR5QmluZGluZ3MoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbGwgZW1wdHkgYmluZGluZ3NcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvYmpdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2xlYXJFbXB0eUJpbmRpbmdzKG9iaikge1xuICAgIGxldCBjbGVhciA9IChvYmosIHBhcmVudCwga2V5KSA9PiB7XG4gICAgICBmb3IobGV0IGsgaW4gb2JqKSB7XG4gICAgICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2YWwgPSBvYmpba107XG5cbiAgICAgICAgaWYoayA9PSAnX19kYXRhJyAmJiAoIXZhbCB8fCAhdmFsLmxlbmd0aCkpIHtcbiAgICAgICAgICBkZWxldGUgb2JqW2tdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoayAhPSAnX19kYXRhJykge1xuICAgICAgICAgIGlmKCFPYmplY3Qua2V5cyhvYmpba10pLmxlbmd0aCkge1xuICAgICAgICAgICAgZGVsZXRlIG9ialtrXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjbGVhcihvYmpba10sIG9iaiwgayk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKCFPYmplY3Qua2V5cyhvYmopLmxlbmd0aCAmJiBwYXJlbnQpIHtcbiAgICAgICAgZGVsZXRlIHBhcmVudFtrZXldO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjbGVhcihvYmogfHwgdGhpcy5fX2JpbmRpbmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIGNoaWxkIGNvbXBvbmVudHNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZW1vdmVDaGlsZHJlbigpIHtcbiAgICBsZXQgcmVtb3ZlID0gKGNoaWxkcmVuKSA9PiB7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgcmVtb3ZlKGNoaWxkLl9fYWtpbGkuX19jaGlsZHJlbik7XG4gICAgICAgIGNoaWxkLl9fYWtpbGkuX19yZW1vdmUoKTtcbiAgICAgICAgaS0tO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZW1vdmUodGhpcy5fX2NoaWxkcmVuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGNvbXBvbmVudCB3aXRob3V0IGNoaWxkcmVuIHJlbW92aW5nXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcmVtb3ZlKCkge1xuICAgIHRoaXMuX19kZXRhY2goKTtcbiAgICB0aGlzLmF0dHJzLm9uUmVtb3ZlZCAmJiB0aGlzLmF0dHJzLm9uUmVtb3ZlZC50cmlnZ2VyKCk7XG4gICAgdGhpcy5yZW1vdmVkKCk7XG4gICAgQWtpbGkucmVtb3ZlU2NvcGUodGhpcy5fX3Njb3BlLl9fbmFtZSk7XG4gICAgdGhpcy5lbC5yZW1vdmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRhY2ggdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RldGFjaCgpIHtcbiAgICBpZih0aGlzLl9fZXZhbHVhdGVQYXJlbnQgJiYgIXRoaXMuX19jb250cm9sQXR0cmlidXRlcykge1xuICAgICAgdGhpcy5fX2V2YWx1YXRlUGFyZW50Ll9fYWtpbGkuX191bmJpbmRCeU5vZGVzKFtdLnNsaWNlLmNhbGwodGhpcy5lbC5hdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgaWYodGhpcy5fX3BhcmVudCkge1xuICAgICAgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fc3BsaWNlQ2hpbGQodGhpcy5lbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgY29tcG9uZW50IHdpdGggY2hpbGRyZW5cbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZXN0cm95KCkge1xuICAgIHRoaXMuX19yZW1vdmVDaGlsZHJlbigpO1xuICAgIHRoaXMuX19yZW1vdmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciB0aGUgY29tcG9uZW50IGh0bWxcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19lbXB0eSgpIHtcbiAgICBsZXQgbm9kZXMgPSBbXTtcblxuICAgIHRoaXMuX19yZW1vdmVDaGlsZHJlbigpO1xuXG4gICAgbGV0IGZpbmQgPSAoY2hpbGRyZW4pID0+IHtcbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYoY2hpbGQubm9kZVR5cGUgPT0gMykge1xuICAgICAgICAgIG5vZGVzLnB1c2goY2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoY2hpbGQubm9kZVR5cGUgPT0gMSAmJiAhY2hpbGQuX19ha2lsaSkge1xuICAgICAgICAgIGZvciAobGV0IGsgPSAwLCBhdHRycyA9IGNoaWxkLmF0dHJpYnV0ZXMsIGMgPSBhdHRycy5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgICAgICAgIG5vZGVzLnB1c2goYXR0cnNbaV0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZpbmQoY2hpbGQuY2hpbGROb2Rlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmluZCh0aGlzLmVsLmNoaWxkTm9kZXMpO1xuICAgIHRoaXMuX191bmJpbmRCeU5vZGVzKG5vZGVzKTtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBwYXJlbnQgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kQWxsPXRydWVdIC0gZ2V0IGFycmF5IGlmIHRydWVcbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudHxDb21wb25lbnRbXX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRQYXJlbnQoc2VsZWN0b3IgPSAnJywgZmluZEFsbCA9IGZhbHNlLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGxldCBsZXZlbCA9IDA7XG5cbiAgICBpZih0eXBlb2YgbGV2ZWxzICE9ICdvYmplY3QnKSB7XG4gICAgICBsZXZlbHMgPSBbbGV2ZWxzXTtcbiAgICB9XG5cbiAgICBsZXQgZmluZCA9IChwYXJlbnQpID0+IHtcbiAgICAgIGlmKCFwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZighbGV2ZWxzIHx8IGxldmVscy5pbmRleE9mKGxldmVsKSAhPSAtMSkge1xuICAgICAgICBpZiAoIXNlbGVjdG9yIHx8IHBhcmVudC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgaWYgKCFmaW5kQWxsKSB7XG4gICAgICAgICAgICBhcnIucHVzaChwYXJlbnQuX19ha2lsaSk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhcnIucHVzaChwYXJlbnQuX19ha2lsaSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV2ZWwrKztcbiAgICAgIGZpbmQocGFyZW50Ll9fYWtpbGkuX19wYXJlbnQpO1xuICAgIH07XG5cbiAgICBmaW5kKHRoaXMuX19wYXJlbnQpO1xuXG4gICAgcmV0dXJuIGZpbmRBbGw/IGFycjogKGFyclswXSB8fCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2hpbGQgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kQWxsPXRydWVdIC0gZ2V0IGFycmF5IGlmIHRydWVcbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudHxDb21wb25lbnRbXX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRDaGlsZHJlbihzZWxlY3RvciA9ICcnLCBmaW5kQWxsID0gdHJ1ZSwgbGV2ZWxzID0gbnVsbCkge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBsZXQgbGV2ZWwgPSAwO1xuXG4gICAgaWYodHlwZW9mIGxldmVscyAhPSAnb2JqZWN0Jykge1xuICAgICAgbGV2ZWxzID0gW2xldmVsc107XG4gICAgfVxuXG4gICAgbGV0IGZpbmQgPSAoY2hpbGRyZW4pID0+IHtcbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYoIWxldmVscyB8fCBsZXZlbHMuaW5kZXhPZihsZXZlbCkgIT0gLTEpIHtcbiAgICAgICAgICBpZighc2VsZWN0b3IgfHwgY2hpbGQuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgaWYoIWZpbmRBbGwpIHtcbiAgICAgICAgICAgICAgYXJyLnB1c2goY2hpbGQuX19ha2lsaSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhcnIucHVzaChjaGlsZC5fX2FraWxpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV2ZWwrKztcblxuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBmaW5kKGNoaWxkcmVuW2ldLl9fYWtpbGkuX19jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZpbmQodGhpcy5fX2NoaWxkcmVuKTtcblxuICAgIHJldHVybiBmaW5kQWxsPyBhcnI6IChhcnJbMF0gfHwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG5lYXJlc3QgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kQWxsPXRydWVdIC0gZ2V0IGFycmF5IGlmIHRydWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbcmlnaHQ9ZmFsc2VdIC0gZnJvbSB0aGUgcmlnaHQgc2lkZSBpZiB0cnVlXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0TmVhcihzZWxlY3RvciA9ICcnLCBmaW5kQWxsID0gdHJ1ZSwgcmlnaHQgPSBmYWxzZSkge1xuICAgIGlmKCF0aGlzLl9fcGFyZW50KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgbGV2ZWxFbGVtZW50cyA9IHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2NoaWxkcmVuLnNsaWNlKCk7XG4gICAgbGV0IGFyciA9IFtdO1xuXG4gICAgcmlnaHQgJiYgbGV2ZWxFbGVtZW50cy5yZXZlcnNlKCk7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gbGV2ZWxFbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBlbCA9IGxldmVsRWxlbWVudHNbaV07XG5cbiAgICAgIGlmKGVsID09PSB0aGlzLmVsKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZighc2VsZWN0b3IgfHwgZWwuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBhcnIucHVzaChlbC5fX2FraWxpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhcnIucmV2ZXJzZSgpO1xuXG4gICAgaWYoIWZpbmRBbGwpIHtcbiAgICAgIHJldHVybiBhcnIubGVuZ3RoPyBhcnJbMF06IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgY29tcG9uZW50IG1hdGNoZXMgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IHNlbGVjdG9yXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgbWF0Y2hlcyhzZWxlY3Rvcikge1xuICAgIGlmKHR5cGVvZiBzZWxlY3RvciA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3IodGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZWwubWF0Y2hlcyhzZWxlY3Rvcik7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNsb3Nlc3QgcGFyZW50IGNvbXBvbmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgcGFyZW50KHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldFBhcmVudChzZWxlY3RvciwgZmFsc2UsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFycmF5IG9mIHBhcmVudCBjb21wb25lbnRzIGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIHBhcmVudHMoc2VsZWN0b3IgPSAnJywgbGV2ZWxzID0gbnVsbCkge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0UGFyZW50KHNlbGVjdG9yLCB0cnVlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IGNoaWxkIGNvbXBvbmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgY2hpbGQoc2VsZWN0b3IgPSAnJywgbGV2ZWxzID0gbnVsbCkge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0Q2hpbGRyZW4oc2VsZWN0b3IsIGZhbHNlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBjaGlsZCBjb21wb25lbnRzIGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGNoaWxkcmVuKHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldENoaWxkcmVuKHNlbGVjdG9yLCB0cnVlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBjb21wb25lbnRzIGxlZnQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBiZWZvcmUoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgdHJ1ZSwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBjb21wb25lbnRzIHJpZ2h0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgYWZ0ZXIoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgdHJ1ZSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNsb3Nlc3QgY29tcG9uZW50IGxlZnQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgcHJldihzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCBmYWxzZSwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IGNvbXBvbmVudCByaWdodCBmcm9tIHRoZSBjdXJyZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR9XG4gICAqL1xuICBuZXh0KHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIGZhbHNlLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgZWxlbWVudCBwYXJlbnRcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50XG4gICAqL1xuICBhcHBlbmRUbyhwYXJlbnQpIHtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG5cbiAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW5jZWwgY29tcG9uZW50IGNvbXBpbGF0aW9uXG4gICAqL1xuICBjYW5jZWwoKSB7XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ29tcGFsZSB0aGUgY29tcG9uZW50LCBidXQgY2FuY2VsIHRoZSBjb21waWxhdGlvbiBpbnNpZGUgb2YgaXRcbiAgICovXG4gIHByZXZlbnQoKSB7XG4gICAgdGhpcy5fX3ByZXZlbnQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGVsZW1lbnQgaHRtbFxuICAgKlxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIGVtcHR5KCkge1xuICAgIHJldHVybiB0aGlzLl9fZW1wdHkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgZWxlbWVudFxuICAgKlxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIHJlbW92ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2Rlc3Ryb3kuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7fVxuICBjb21waWxlZCgpIHt9XG4gIHJlY29tcGlsZWQoKSB7fVxuICBjaGFuZ2VkKGtleSwgdmFsdWUpIHt9XG4gIHJlc29sdmVkKCkge31cbiAgcmVtb3ZlZCgpIHt9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudC5qcyIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyLmpzJ1xuXG5jb25zdCB1dGlscyA9IHt9O1xuXG4vKipcbiAqIENyZWF0ZSBjbGFzcyBhdHRyaWJ1dGUgZnJvbSBhbiBvYmplY3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcInJlZCBhY3RpdmVcIlxuICogdXRpbHMuY2xhc3Moe3JlZDogdHJ1ZSwgYWN0aXZlOiB0cnVlLCBncmVlbjogZmFsc2V9KTtcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5jbGFzcyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGxldCBjbGFzc2VzID0gW107XG5cbiAgZm9yKGxldCBrIGluIG9iaikge1xuICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGxldCB2YWwgPSBvYmpba107XG5cbiAgICB2YWwgJiYgY2xhc3Nlcy5wdXNoKGspO1xuICB9XG5cbiAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgc3R5bGUgYXR0cmlidXRlIGZyb20gYW4gb2JqZWN0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJjb2xvcjpyZWQ7d2lkdGg6MTBweFwiXG4gKiB1dGlscy5zdHlsZSh7Y29sb3I6IFwicmVkXCIsIGJhY2tncm91bmQ6IGZhbHNlLCB3aWR0aDogXCIxMHB4XCJ9KTtcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5zdHlsZSA9IGZ1bmN0aW9uKG9iaikge1xuICBpZighb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgbGV0IHN0eWxlcyA9IFtdO1xuXG4gIGZvcihsZXQgayBpbiBvYmopIHtcbiAgICBpZighb2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBsZXQgdmFsID0gb2JqW2tdO1xuXG4gICAgdmFsICYmIHN0eWxlcy5wdXNoKGAke3RoaXMudG9EYXNoQ2FzZShrKX06JHt2YWx9YCk7XG4gIH1cblxuICByZXR1cm4gc3R5bGVzLmpvaW4oJzsnKTtcbn07XG5cbi8qKlxuICogRmlsdGVyIGFuIGFycmF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWzEsIDExXVxuICogdXRpbHMuZmlsdGVyKFsxLCAyLCAzLCAxMV0sICcxJyk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OjF9LCB7eDoxMX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OjF9LCB7eDoyfSwge3g6M30sIHt4OjExfV0sICcxJywgWyd4J10pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6e3k6MX19XVxuICogdXRpbHMuZmlsdGVyKFt7eDp7eToxfX0sIHt4Ont5OjJ9fV0sICcxJywgWyd4JywgJ3knXSk7XG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0ge3N0cmluZ3xSZWdFeHB8ZnVuY3Rpb259IGhhbmRsZXIgLSB0eXBlIG9mIGZpbHRlcmluZ1xuICogQHBhcmFtIHtzdHJpbmdbXXxzdHJpbmd9IFtrZXlzXSAtIGZpbHRlciBpbiB0aGUga2V5cyBpZiBhcnJheSBlbGVtZW50cyBhcmUgb2JqZWN0XG4gKiBAcmV0dXJucyB7QXJyYXl9IC0gcmV0dXJucyBvdGhlciBhcnJheVxuICovXG51dGlscy5maWx0ZXIgPSBmdW5jdGlvbiAoYXJyLCBoYW5kbGVyLCBrZXlzID0gW10pIHtcbiAgbGV0IHJlcyA9IFtdO1xuXG4gIGlmKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAga2V5cyA9IFtrZXlzXTtcbiAgfVxuXG4gIGlmKCFoYW5kbGVyKSB7XG4gICAgcmV0dXJuIFsuLi5hcnJdO1xuICB9XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgaXRlbSA9IGFycltpXTtcbiAgICBsZXQgdmFsID0ga2V5cy5sZW5ndGg/IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgaXRlbSk6IGl0ZW07XG5cbiAgICBpZighdmFsKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YWwgKz0gJyc7XG5cbiAgICBpZigodHlwZW9mIGhhbmRsZXIgPT0gJ2Z1bmN0aW9uJykgJiYgaGFuZGxlcihpdGVtKSkge1xuICAgICAgcmVzLnB1c2goaXRlbSk7XG4gICAgfVxuICAgIGVsc2UgaWYodmFsLm1hdGNoKGhhbmRsZXIgfHwgJycpKSB7XG4gICAgICByZXMucHVzaChpdGVtKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBPcmRlciBhbiBhcnJheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsxLCAyLCAzXVxuICogdXRpbHMuc29ydChbMywgMiwgMV0sIHRydWUpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFszLCAyLCAxXVxuICogdXRpbHMuc29ydChbMSwgMiwgM10sIGZhbHNlKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCBbWyd4J11dLCBbdHJ1ZV0pO1xuICogdXRpbHMuc29ydChbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV0sIFsneCddLCB0cnVlKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCAneCcpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogM30sIHt4OiAyfSwge3g6IDF9XVxuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sIFtbJ3gnXV0sIFtmYWxzZV0pO1xuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sIFsneCddLCBmYWxzZSk7XG4gKiB1dGlscy5zb3J0KFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XSwgJ3gnLCBmYWxzZSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxLCB5OiAzfSwge3g6IDIsIHk6IDF9LCB7eDoyLCB5OiAyfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAyLCB5OiAyfSwge3g6IDIsIHk6IDF9LCB7eDogMiwgeTogM31dLCBbWyd4J10sIFsneSddXSwgW3RydWUsIHRydWVdKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiB7eTogMX19LCB7eDoge3k6IDJ9fV1cbiAqIHV0aWxzLnNvcnQoW3t4OiB7eTogMn19LCB7eDoge3k6IDF9fV0sIFtbJ3gnLCAneSddXSwgW3RydWVdKTtcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7Ym9vbGVhbnxBcnJheVtdfHN0cmluZ1tdfHN0cmluZ30gW2tleXNdXG4gKiBAcGFyYW0ge2Jvb2xlYW58Ym9vbGVhbltdfSBbb3JkZXJdIC0gcmV2ZXJzZSBvciBub3RcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xudXRpbHMuc29ydCA9IGZ1bmN0aW9uKGFyciwga2V5cyA9IHRydWUsIG9yZGVyID0gW10pIHtcbiAgYXJyID0gWy4uLmFycl07XG5cbiAgaWYoa2V5cyA9PT0gdHJ1ZSkge1xuICAgIGtleXMgPSBbXTtcbiAgICBvcmRlciA9IFt0cnVlXTtcbiAgfVxuICBlbHNlIGlmKGtleXMgPT09IGZhbHNlKSB7XG4gICAga2V5cyA9IFtdO1xuICAgIG9yZGVyID0gW2ZhbHNlXTtcbiAgfVxuXG4gIGlmKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAga2V5cyA9IFtrZXlzXTtcbiAgfVxuXG4gIGlmKCFBcnJheS5pc0FycmF5KG9yZGVyKSkge1xuICAgIG9yZGVyID0gW29yZGVyXTtcbiAgfVxuXG4gIGxldCBsID0ga2V5cy5sZW5ndGg7XG5cbiAgYXJyLnNvcnQoKGEsIGIpID0+IHtcbiAgICBsZXQgaSA9IDA7XG5cbiAgICBsZXQgY2hlY2sgPSAoYSwgYiwgcmV2ZXJzZSA9IGZhbHNlKSA9PiB7XG4gICAgICBpZihhIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBhID0gYS5nZXRUaW1lKCk7XG4gICAgICB9XG5cbiAgICAgIGlmKGIgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIGIgPSBiLmdldFRpbWUoKTtcbiAgICAgIH1cblxuICAgICAgaWYoYSA+IGIpIHtcbiAgICAgICAgcmV0dXJuIHJldmVyc2U/IC0xOiAxO1xuICAgICAgfVxuICAgICAgZWxzZSBpZihhIDwgYikge1xuICAgICAgICByZXR1cm4gcmV2ZXJzZT8gMTogLTE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAwO1xuICAgIH07XG5cbiAgICBsZXQgbmV4dCA9ICgpID0+IHtcbiAgICAgIGlmKGkgPj0gbCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cblxuICAgICAgbGV0IGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmKCFBcnJheS5pc0FycmF5KGtleSkpIHtcbiAgICAgICAga2V5ID0gW2tleV07XG4gICAgICB9XG5cbiAgICAgIGxldCBhViA9IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5LCBhKTtcbiAgICAgIGxldCBiViA9IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5LCBiKTtcbiAgICAgIGxldCByZXMgPSBjaGVjayhhViwgYlYsIG9yZGVyW2ldID09PSBmYWxzZSk7XG5cbiAgICAgIGlmKHJlcyAhPT0gMCkge1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfVxuXG4gICAgICBpKys7XG5cbiAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgfTtcblxuICAgIGlmKCFsKSB7XG4gICAgICByZXR1cm4gY2hlY2soYSwgYiwgb3JkZXJbaV0gPT09IGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dCgpO1xuICB9KTtcblxuICByZXR1cm4gYXJyO1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgdmFsdWUgaXMgY29tcG9uZW50IHNjb3BlIHByb3h5IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaXNTY29wZVByb3h5ID0gZnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiAhISh2YWwgJiYgdHlwZW9mIHZhbCA9PSAnb2JqZWN0JyAmJiB2YWwuX19pc1Byb3h5KTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIHZhbHVlIGlzIHBsYWluIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaXNQbGFpbk9iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuICByZXR1cm4gISEob2JqICYmIHR5cGVvZiBvYmogPT0gJ29iamVjdCcgJiYgKG9iai5jb25zdHJ1Y3RvciA9PSBPYmplY3QgfHwgb2JqLmNvbnN0cnVjdG9yID09IEFycmF5KSk7XG59O1xuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHBhcmFtIHtib29sZWFufSBbbmVzdGVkPXRydWVdIC0gZGVlcCBjb3B5IGlmIGlzIHRydWVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2VudW1lcmFibGU9ZmFsc2VdIC0gaW5jbHVkaW5nIGVudW1lcmFibGUgcHJvcGVydGllc1xuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmNvcHkgPSBmdW5jdGlvbih2YWx1ZSwgbmVzdGVkID0gdHJ1ZSwgZW51bWVyYWJsZSA9IGZhbHNlKSB7XG4gIGlmKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCAhdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBmdW5jdGlvbiBuZXh0KG9iaikge1xuICAgIGxldCBrZXlzID0gZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKTogT2JqZWN0LmtleXMob2JqKTtcbiAgICBsZXQgbmV3T2JqID0gQXJyYXkuaXNBcnJheShvYmopPyBbXToge307XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgIH1cblxuICAgIG9iaiA9IG5ld09iajtcblxuICAgIGlmKCFuZXN0ZWQpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgZm9yKGxldCBrIGluIG9iaikge1xuICAgICAgaWYoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYob2JqW2tdICYmIHR5cGVvZiBvYmpba10gPT0gJ29iamVjdCcpIHtcbiAgICAgICAgb2JqW2tdID0gbmV4dChvYmpba10pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICByZXR1cm4gbmV4dCh2YWx1ZSk7XG59O1xuXG4vKipcbiAqIENoYW5nZSB0aGUgdmFsdWUgdG8gYXR0cmlidXRlIGFwcHJvcHJpYXRlIGZvcm1hdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5tYWtlQXR0cmlidXRlVmFsdWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBpZih2YWx1ZSA9PT0gZmFsc2UgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmKHZhbHVlIGluc3RhbmNlb2YgRXZlbnRFbWl0dGVyKSB7XG4gICAgcmV0dXJuICdbb2JqZWN0IEV2ZW50XSc7XG4gIH1cblxuICBpZih0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiAnW29iamVjdCBGdW5jdGlvbl0nO1xuICB9XG5cbiAgaWYodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gdmFsdWUgKyAnJztcbn07XG5cbi8qKlxuICogQ29tcGFyZSB0d28gdmFsdWVzXG4gKlxuICogQHBhcmFtIHsqfSBhXG4gKiBAcGFyYW0geyp9IGJcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5jb21wYXJlID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgaWYodGhpcy5pc1Njb3BlUHJveHkoYSkgJiYgdGhpcy5pc1Njb3BlUHJveHkoYikpIHtcbiAgICByZXR1cm4gYS5fX3RhcmdldCA9PT0gYi5fX3RhcmdldDtcbiAgfVxuICBlbHNlIGlmKChhIGluc3RhbmNlb2YgRGF0ZSkgJiYgKGIgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgIHJldHVybiBhLmdldFRpbWUoKSA9PT0gYi5nZXRUaW1lKCk7XG4gIH1cbiAgZWxzZSBpZih0eXBlb2YgYSA9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBiID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYS50b1N0cmluZygpID09PSBiLnRvU3RyaW5nKCk7XG4gIH1cbiAgZWxzZSBpZih0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiA9PSAnb2JqZWN0Jykge1xuICAgIGlmKGEgPT09IG51bGwgfHwgYiA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGEgPT09IGI7XG4gICAgfVxuXG4gICAgaWYoT2JqZWN0LmtleXMoYSkubGVuZ3RoICE9IE9iamVjdC5rZXlzKGIpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvcihsZXQgayBpbiBhKSB7XG4gICAgICBpZighYS5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYoIXRoaXMuY29tcGFyZShhW2tdLCBiW2tdKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gYSA9PT0gYjtcbn07XG5cbi8qKlxuICogQ29tcGFyZSBjdXJyZW50IHZhbHVlIHdpdGggcHJldmlvdXNcbiAqXG4gKiBAcGFyYW0geyp9IGN1cnJlbnQgLSB0aGUgY3VycmVudCB2YWx1ZVxuICogQHBhcmFtIHsqfSBwcmV2aW91cyAtIHRoZSBjdXJyZW50IHZhbHVlIGNvcHlcbiAqIEBwYXJhbSB7Kn0gcHJldmlvdXNDb3B5IC0gdGhlIHByZXZpb3VzIHZhbHVlIGNvcHlcbiAqIEBwYXJhbSB7Kn0gW2N1cnJlbnRDb3B5XSAtIHRoZSBjdXJyZW50IHZhbHVlIGNvcHlcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSA9IGZ1bmN0aW9uKGN1cnJlbnQsIHByZXZpb3VzLCBwcmV2aW91c0NvcHksIGN1cnJlbnRDb3B5KSB7XG4gIGlmKGN1cnJlbnQgIT09IHByZXZpb3VzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuY29tcGFyZShhcmd1bWVudHMubGVuZ3RoID09IDM/IGN1cnJlbnRDb3B5OiB0aGlzLmNvcHkoY3VycmVudCksIHByZXZpb3VzQ29weSk7XG59O1xuXG4vKipcbiAqIEVuY29kZSBodG1sIGVudGl0aWVzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJ5b3UgJmFtcCBtZVwiXG4gKiB1dGlscy5lbmNvZGVIdG1sRW50aXRpZXMoJ3lvdSAmIG1lJyk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmVuY29kZUh0bWxFbnRpdGllcyA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHZhbHVlO1xuXG4gIGVsLnRleHRDb250ZW50ID0gaHRtbDtcbiAgdmFsdWUgPSBlbC5pbm5lckhUTUw7XG4gIGVsLnJlbW92ZSgpO1xuICBlbCA9IG51bGw7XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuLyoqXG4gKiBEZWNvZGUgaHRtbCBlbnRpdGllc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwieW91ICYgbWVcIlxuICogdXRpbHMuZGVjb2RlSHRtbEVudGl0aWVzKCd5b3UgJmFtcCBtZScpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBodG1sXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5kZWNvZGVIdG1sRW50aXRpZXMgPSBmdW5jdGlvbihodG1sKSB7XG4gIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgbGV0IHZhbHVlO1xuXG4gIGVsLmlubmVySFRNTCA9IGh0bWw7XG4gIHZhbHVlID0gZWwudmFsdWU7XG4gIGVsLnJlbW92ZSgpO1xuICBlbCA9IG51bGw7XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RyaW5nIGZyb20gZGFzaCB0byBjYW1lbCBjYXNlIGZvcm1hdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnRvQ2FtZWxDYXNlID0gZnVuY3Rpb24oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXFxXKyguKS9nLCAobSwgYykgPT4gYy50b1VwcGVyQ2FzZSgpKTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHN0cmluZyBmcm9tIGNhbWVsIHRvIGRhc2ggY2FzZSBmb3JtYXRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy50b0Rhc2hDYXNlID0gZnVuY3Rpb24oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCAobSwgYykgPT4gYC0ke2MudG9Mb3dlckNhc2UoKX1gKTtcbn07XG5cbi8qKlxuICogR2V0IG5lc3RlZCBvYmplY3QgcHJvcGVydHkgYnkgYXJyYXkga2V5c1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIDVcbiAqIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuZ2V0UHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QpIHtcbiAgbGV0IGN1cnJlbnQ7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKGZ1bmN0aW9uKG8sIGspIHtcbiAgICBpKys7XG5cbiAgICBpZih0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIG87XG4gICAgfVxuXG4gICAgaWYob1trXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgKGkgPT0gbGVuZ3RoKSAmJiAoY3VycmVudCA9IG9ba10pO1xuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiBjdXJyZW50O1xufTtcblxuLyoqXG4gKiBDaGVjayBuZXN0ZWQgb2JqZWN0cyB0cmVlIGhhcyBwcm9wZXJ0eSBvciBub3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB0cnVlXG4gKiB1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0KSB7XG4gIGxldCBoYXMgPSBmYWxzZTtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoZnVuY3Rpb24obywgaykge1xuICAgIGkrKztcblxuICAgIGlmKHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gISFvO1xuICAgIH1cblxuICAgIGlmKCFvLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgKGkgPT0gbGVuZ3RoKSAmJiAoaGFzID0gby5oYXNPd25Qcm9wZXJ0eShrKSk7XG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIGhhcztcbn07XG5cbi8qKlxuICogU2V0IG5lc3RlZCBvYmplY3RzIHRyZWUgcHJvcGVydHlcbiAqIFJldHVybnMgY2hhbmdlZCBwcm9wZXJ0eSBvYmplY3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB7eTogNn1cbiAqIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19LCAobGFzdCwgdmFsKSA9PiBsYXN0PyA2OiAodmFsIHx8IHt9KSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCwgZm4pIHtcbiAgbGV0IGN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKGZ1bmN0aW9uKG8sIGspIHtcbiAgICBpKys7XG5cbiAgICBpZih0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKCFvLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICByZXR1cm4gY3VycmVudCA9IG9ba10gPSBmbihpID09IGxlbmd0aCk7XG4gICAgfVxuXG4gICAgb1trXSA9IGZuKGkgPT0gbGVuZ3RoLCBvW2tdKTtcbiAgICBjdXJyZW50ID0gbztcblxuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiBjdXJyZW50O1xufTtcblxuLyoqXG4gKlxuICogRGVsZXRlIHByb3BlcnR5IGZyb20gbmVzdGVkIG9iamVjdHMgdHJlZVxuICogUmV0dXJucyBkZWxldGVkIHByb3BlcnR5IHZhbHVlXG4gKiBZb3UgY2FuIGNhbmNlbCBkZWxldGluZyBpZiB3aWxsIHJldHVybiBmYWxzZSBpbiB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyA1XG4gKiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSk7XG4gQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0sIHZhbCA9PiB2YWwgIT0gNSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHBhcmFtIHtmdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0LCBmbikge1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCB2YWx1ZTtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKGZ1bmN0aW9uKG8sIGspIHtcbiAgICBpKys7XG5cbiAgICBpZih0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKCFvLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgaWYoaSA9PSBsZW5ndGgpIHtcbiAgICAgIHZhbHVlID0gb1trXTtcblxuICAgICAgaWYoIWZuIHx8IGZuKHZhbHVlKSkge1xuICAgICAgICBkZWxldGUgb1trXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgdGFyZ2V0IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cblxudXRpbHMuZ2V0RW51bWVyYWJsZVByb3BlcnR5VGFyZ2V0ID0gZnVuY3Rpb24odGFyZ2V0LCBrZXkpIHtcbiAgbGV0IGNoZWNrID0gKG9iaikgPT4ge1xuICAgIGlmKG9iai5wcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGxldCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuXG4gICAgaWYoIXByb3RvKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hlY2socHJvdG8pO1xuICB9O1xuXG4gIHJldHVybiBjaGVjayh0YXJnZXQpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIG93biBwcm9wZXJ0eSB0YXJnZXQgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xudXRpbHMuZ2V0T3duUHJvcGVydHlUYXJnZXQgPSBmdW5jdGlvbih0YXJnZXQsIGtleSkge1xuICBsZXQgY2hlY2sgPSAob2JqKSA9PiB7XG4gICAgaWYob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgbGV0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG5cbiAgICBpZighcHJvdG8pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjaGVjayhwcm90byk7XG4gIH07XG5cbiAgcmV0dXJuIGNoZWNrKHRhcmdldCk7XG59O1xuXG4vKipcbiAqIENsZWFyIHZhbHVlIHByb3h5IGlmIGl0IGV4aXN0ZW50XG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmNsZWFyU2NvcGVQcm94eSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZih0eXBlb2YgdmFsdWUgIT0gJ29iamVjdCcgfHwgIXZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgbGV0IGNsZWFyID0gKG9iaikgPT4ge1xuICAgIGZvcihsZXQgayBpbiBvYmopIHtcbiAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZihvYmpba10gJiYgdHlwZW9mIG9ialtrXSA9PSAnb2JqZWN0Jykge1xuICAgICAgICBpZihvYmpba10uX19pc1Byb3h5KSB7XG4gICAgICAgICAgb2JqW2tdID0gb2JqW2tdLl9fdGFyZ2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgY2xlYXIob2JqW2tdKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgaWYodmFsdWUuX19pc1Byb3h5KSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5fX3RhcmdldDtcbiAgfVxuXG4gIGNsZWFyKHZhbHVlKTtcblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5cbi8qKlxuICogR2VuZXJhdGUgcmFuZG9tIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuY3JlYXRlUmFuZG9tU3RyaW5nID0gZnVuY3Rpb24obGVuZ3RoID0gMTYsIGZuID0gbnVsbCkge1xuICBsZXQgc3RyID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIGxlbmd0aCArIDIpO1xuICBsZXQgdmFsID0gJyc7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IHN0ci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZihNYXRoLnJhbmRvbSgpID4gMC42Nikge1xuICAgICAgdmFsICs9IHN0cltpXS50b1VwcGVyQ2FzZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhbCArPSBzdHJbaV07XG4gICAgfVxuICB9XG5cbiAgaWYoZm4gJiYgZm4odmFsKSkge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZVJhbmRvbVN0cmluZyhsZW5ndGgsIGZuKTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1dGlscztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMuanMiLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG5leHBvcnQgY2xhc3MgUmVxdWVzdCB7XG4gIGNvbnN0cnVjdG9yKGJhc2VVcmwsIGRlZmF1bHRzKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gYmFzZVVybD8gKGJhc2VVcmwucmVwbGFjZSgvXFwvJC8sICcnKSArICcvJyk6ICcnO1xuXG4gICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgIHN0YXR1c0Vycm9yc1BhdHRlcm46IC9eKFteMjNdKXw0MDQvLFxuICAgICAgLi4uKGRlZmF1bHRzIHx8IHt9KVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogU2VuZCByZXF1ZXN0IHdpdGggYW55IG1ldGhvZFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHF1ZXJ5KG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IHVybDtcbiAgICAgIGxldCB4aHI7XG5cbiAgICAgIG9wdGlvbnMgPSB7Li4udGhpcy5kZWZhdWx0cywgLi4uKG9wdGlvbnMgfHwge30pfTtcblxuICAgICAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAodHlwZW9mIG9wdGlvbnMub25TdGFydCA9PSAnZnVuY3Rpb24nKSAmJiBvcHRpb25zLm9uU3RhcnQoeGhyKTtcbiAgICAgIG9wdGlvbnMgPSB0aGlzLnRyYW5zZm9ybUJlZm9yZShvcHRpb25zKTtcbiAgICAgIHVybCA9IHRoaXMuYmFzZVVybD8gYCR7dGhpcy5iYXNlVXJsfSR7b3B0aW9ucy51cmwucmVwbGFjZSgvXlxcLy8sICcnKX1gOiBvcHRpb25zLnVybDtcbiAgICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCB1cmwsIHRydWUsIG9wdGlvbnMudXNlciwgb3B0aW9ucy5wYXNzd29yZCk7XG4gICAgICBvcHRpb25zLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwge307XG5cbiAgICAgIGlmKG9wdGlvbnMuanNvbikge1xuICAgICAgICBvcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShvcHRpb25zLmpzb24pO1xuICAgICAgICBvcHRpb25zLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICBvcHRpb25zLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlIHx8ICdqc29uJztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYob3B0aW9ucy5mb3JtKSB7XG4gICAgICAgIG9wdGlvbnMuYm9keSA9IHRoaXMuY3JlYXRlRm9ybURhdGEob3B0aW9ucy5mb3JtKTtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzWydjb250ZW50LXR5cGUnXSA9ICdtdWx0aXBhcnQvZm9ybS1kYXRhJztcbiAgICAgIH1cblxuICAgICAgaWYob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgndGltZW91dCcpKSB7XG4gICAgICAgIHhoci50aW1lb3V0ID0gb3B0aW9ucy50aW1lb3V0O1xuICAgICAgfVxuXG4gICAgICBpZihvcHRpb25zLnJlc3BvbnNlVHlwZSkge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gb3B0aW9ucy5yZXNwb25zZVR5cGU7XG4gICAgICB9XG5cbiAgICAgIGlmKG9wdGlvbnMud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSBvcHRpb25zLndpdGhDcmVkZW50aWFscztcbiAgICAgIH1cblxuICAgICAgaWYob3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIGZvcihsZXQgayBpbiBvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgICBpZighb3B0aW9ucy5oZWFkZXJzLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrLCBvcHRpb25zLmhlYWRlcnNba10pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKG9wdGlvbnMucGFyYW1zKSB7XG4gICAgICAgIGxldCBzdHIgPSB0aGlzLnBhcmFtc1RvUXVlcnkob3B0aW9ucy5wYXJhbXMpO1xuXG4gICAgICAgIGlmKHN0cikge1xuICAgICAgICAgIHVybCArPSBcIj9cIiArIHN0cjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZih0eXBlb2Ygb3B0aW9ucy5vblByb2dyZXNzID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgeGhyLm9ucHJvZ3Jlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9wdGlvbnMub25Qcm9ncmVzcyh4aHIpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSB0aGlzLnRyYW5zZm9ybUFmdGVyKHhocik7XG5cbiAgICAgICAgaWYoKHhoci5zdGF0dXMgKyAnJykubWF0Y2gob3B0aW9ucy5zdGF0dXNFcnJvcnNQYXR0ZXJuKSkge1xuICAgICAgICAgIGxldCBlcnIgPSBuZXcgRXJyb3IoYFJlcXVlc3QgdG8gXCIke3VybH1cIiByZXR1cm5zIGZhaWx1cmUgc3RhdHVzIGNvZGUgJHt4aHIuc3RhdHVzfWApO1xuXG4gICAgICAgICAgZXJyLnJlc3BvbnNlID0gcmVzcG9uc2U7XG5cbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgIH0gXG4gICAgICAgIFxuICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbnRpbWVvdXQgPSAoKSA9PiB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFJlcXVlc3QgdG8gXCIke3VybH1cIiB0aW1lZCBvdXRgKSk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub25lcnJvciA9IChlcnIpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9O1xuXG4gICAgICB4aHIuc2VuZChvcHRpb25zLmJvZHkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgb2JqZWN0IHRvIHF1ZXJ5IHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBwYXJhbXNUb1F1ZXJ5KG9iaikge1xuICAgIGxldCBzZXAgPSAnJic7XG4gICAgbGV0IGVxID0gJz0nO1xuXG4gICAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5tYXAoKGspID0+IHtcbiAgICAgIGxldCBrcyA9IGVuY29kZVVSSUNvbXBvbmVudChrKTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgICBrcyA9IGVuY29kZVVSSUNvbXBvbmVudChrKTtcblxuICAgICAgICByZXR1cm4gb2JqW2tdLm1hcCgodiwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiBrcyArIGBbJHtpfV1gICsgZXEgKyBlbmNvZGVVUklDb21wb25lbnQodik7XG4gICAgICAgIH0pLmpvaW4oc2VwKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYob2JqW2tdICYmIHR5cGVvZiBvYmpba10gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGxldCBvcHQgPSBbXTtcblxuICAgICAgICBPYmplY3Qua2V5cyhvYmpba10pLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgb3B0LnB1c2goa3MgKyBgWyR7a2V5fV1gICsgZXEgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tdW2tleV0pKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG9wdC5qb2luKHNlcCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGtzICsgZXEgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tdKTtcbiAgICAgIH1cbiAgICB9KS5qb2luKHNlcCk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBxdWVyeSBzdHJpbmcgdG8gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHBhcmFtc0Zyb21RdWVyeShzdHIpIHtcbiAgICBsZXQgcXVlcnkgPSB7fTtcbiAgICBsZXQgYW1wcyA9IHN0ci5zcGxpdCgnJicpO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGFtcHMubGVuZ3RoOyBpIDxsOyBpKyspIHtcbiAgICAgIGxldCBlcXMgPSAgYW1wc1tpXS5zcGxpdCgnPScpO1xuICAgICAgbGV0IGtleSA9IGRlY29kZVVSSUNvbXBvbmVudChlcXNbMF0pO1xuICAgICAgbGV0IHZhbCA9IGRlY29kZVVSSUNvbXBvbmVudChlcXNbMV0pO1xuXG4gICAgICBpZigha2V5KSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZihBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICAgIHF1ZXJ5W2tleV0ucHVzaCh2YWwpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZihxdWVyeVtrZXldKSB7XG4gICAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSwgdmFsXTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBxdWVyeVtrZXldID0gdmFsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbXVsdGlwYXJ0IGZvcm0gZGF0YSBmcm9tIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEBwYXJhbSB7Rm9ybURhdGF9IFtkYXRhXVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25hbWVzcGFjZV1cbiAgICpcbiAgICogQHJldHVybnMge0Zvcm1EYXRhfVxuICAgKi9cbiAgY3JlYXRlRm9ybURhdGEob2JqLCBkYXRhID0gbnVsbCwgbmFtZXNwYWNlID0gJycpIHtcbiAgICBsZXQgZmQgPSBkYXRhIHx8IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgZm9yKGxldCBrIGluIG9iaikge1xuICAgICAgaWYob2JqLmhhc093blByb3BlcnR5KGspICYmIG9ialtrXSkge1xuICAgICAgICBsZXQga2V5ID0gbmFtZXNwYWNlPyBuYW1lc3BhY2UgKyAnWycgKyBrICsgJ10nOiBrO1xuXG4gICAgICAgIGlmIChvYmpba10gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgZmQuYXBwZW5kKGtleSwgb2JqW2tdLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3Qob2JqW2tdKSkge1xuICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybURhdGEob2JqW2tdLCBmZCwga2V5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBmZC5hcHBlbmQoa2V5LCBvYmpba10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZkO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBkYXRhIGJlZm9yZSBhIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHRyYW5zZm9ybUJlZm9yZShvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIGRhdGEgYWZ0ZXIgYSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7WE1MSHR0cFJlcXVlc3R9IHhoclxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgdHJhbnNmb3JtQWZ0ZXIoeGhyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHhocjogeGhyLFxuICAgICAgZGF0YTogeGhyLnJlc3BvbnNlLFxuICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBHRVQgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZ2V0KHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnR0VUJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIERFTEVURSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBkZWxldGUodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdERUxFVEUnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgUE9TVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBwb3N0KHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnUE9TVCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBQVVQgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcHV0KHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnUFVUJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIFBBVENIIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHBhdGNoKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnUEFUQ0gnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KCk7XG5cbnJlcXVlc3QuX19pbnN0YW5jZXMgPSB7fTtcblxuLyoqXG4gKiBBZGQgbmV3IHJlcXVlc3QgaW5zdGFuY2UgdG8gdGhlIG1haW4gc2VydmljZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1JlcXVlc3R9IGluc3RhbmNlXG4gKi9cbnJlcXVlc3QuYWRkSW5zdGFuY2UgPSBmdW5jdGlvbihuYW1lLCBpbnN0YW5jZSkge1xuICB0aGlzLl9faW5zdGFuY2VzW25hbWVdID0gaW5zdGFuY2U7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnJlcXVlc3QucmVtb3ZlSW5zdGFuY2UgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLl9faW5zdGFuY2VzW25hbWVdO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVlc3QsICd1c2UnLCB7XG4gIGdldDogKCkgPT4ge1xuICAgIHJldHVybiByZXF1ZXN0Ll9faW5zdGFuY2VzO1xuICB9XG59KTtcblxucmVxdWVzdC5SZXF1ZXN0ID0gUmVxdWVzdDtcbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3Q7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL3JlcXVlc3QuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnZhbHVlS2V5ID0gJ3ZhbHVlJztcbiAgfVxuXG4gIGNoYW5nZWRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgY2hhbmdlZEZvY3VzKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRGb2N1cyh2YWx1ZSk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdmb2N1cycpICYmIHRoaXMuc2V0Rm9jdXModGhpcy5hdHRycy5mb2N1cyk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSAmJiB0aGlzLnNldFZhbHVlKHRoaXMuYXR0cnMudmFsdWUpO1xuICB9XG5cbiAgc2V0Rm9jdXModmFsdWUpIHtcbiAgICB2YWx1ZT8gdGhpcy5zZXRFbGVtZW50Rm9jdXMoKTogdGhpcy5zZXRFbGVtZW50Qmx1cigpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAodGhpcy5lbFt0aGlzLnZhbHVlS2V5XSAhPT0gdmFsdWUpICYmICh0aGlzLmVsW3RoaXMudmFsdWVLZXldID0gdmFsdWUgPT09IDA/ICcwJzogKHZhbHVlIHx8ICcnKSk7XG4gIH1cblxuICBzZXRFbGVtZW50Rm9jdXMoKSB7XG4gICAgdGhpcy5lbC5mb2N1cygpO1xuICB9XG5cbiAgc2V0RWxlbWVudEJsdXIoKSB7XG4gICAgdGhpcy5lbC5ibHVyKCk7XG4gIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGV4dC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbaW5dJztcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnZm9yJywgRm9yKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ29sJywgRm9yKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3VsJywgRm9yKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RoZWFkJywgRm9yKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3Rib2R5JywgRm9yKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3Rmb290JywgRm9yKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RyJywgTG9vcCk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdsb29wJywgTG9vcCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLl9faXRlcmF0b3IgPSBudWxsO1xuICAgIHRoaXMuX19rZXkgPSBudWxsO1xuICAgIHRoaXMuX192YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5fX2luZGV4ID0gbnVsbDtcbiAgICB0aGlzLl9fY29tcGFyaXNvblZhbHVlID0gbnVsbDtcbiAgICB0aGlzLml0ZXJhdG9ycyA9IHt9O1xuICAgIHRoaXMuaXRlcmF0b3JSZWYgPSBudWxsO1xuICAgIHRoaXMuaXRlcmF0b3JPdXRlckhUTUwgPSBudWxsO1xuICB9XG5cbiAgY2hhbmdlZEluKGRhdGEpIHtcbiAgICB0aGlzLmRyYXcoZGF0YSk7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuY3JlYXRlSXRlcmF0b3IoKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuZHJhdyh0aGlzLmF0dHJzLmluKTtcbiAgfVxuXG4gIGNyZWF0ZUl0ZXJhdG9yKCkge1xuICAgIGxldCBlbDtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5lbC5jaGlsZHJlbltpXTtcblxuICAgICAgaWYoY2hpbGQuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKSA9PSAnbG9vcCcpIHtcbiAgICAgICAgZWwgPSBjaGlsZDtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZWwgPSBjaGlsZDtcbiAgICB9XG5cbiAgICBpZighZWwpIHtcbiAgICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbG9vcCcpOyAgICAgIFxuICAgICAgZWwuaW5uZXJIVE1MID0gdGhpcy5lbC5pbm5lckhUTUw7IFxuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJzsgICAgIFxuICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChlbCk7XG4gICAgfVxuXG4gICAgbGV0IGNvbXBvbmVudE5hbWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpO1xuXG4gICAgaWYoY29tcG9uZW50TmFtZSAhPSAnbG9vcCcpIHtcbiAgICAgIGxldCBjb21wb25lbnQgPSBBa2lsaS5jb21wb25lbnQoY29tcG9uZW50TmFtZSB8fCBlbC50YWdOYW1lKTtcblxuICAgICAgaWYoIWNvbXBvbmVudCkge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcsICdsb29wJyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKCEoY29tcG9uZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIEZvcikpIHtcbiAgICAgICAgbGV0IG1hc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsb29wJyk7XG5cbiAgICAgICAgbWFzay5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIGVsID0gbWFzaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmh0bWwgPSBlbC5pbm5lckhUTUw7XG4gICAgdGhpcy5pdGVyYXRvclJlZiA9IGVsLm5leHRTaWJsaW5nO1xuICAgIHRoaXMuaXRlcmF0b3JPdXRlckhUTUwgPSBlbC5vdXRlckhUTUw7XG4gICAgZWwucmVtb3ZlKCk7XG4gIH1cblxuICBjcmVhdGVJdGVyYXRvckVsZW1lbnQoKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcblxuICAgIGVsLmlubmVySFRNTCA9IHRoaXMuaXRlcmF0b3JPdXRlckhUTUw7XG4gICAgZWwgPSBlbC5jb250ZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBsb29wKGtleSwgdmFsdWUsIGtleXMsIGluZGV4KSB7XG4gICAgdGhpcy5fX2luZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5fX2tleSA9IGtleTtcbiAgICB0aGlzLl9fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLl9fY29tcGFyaXNvblZhbHVlID0gdXRpbHMuY29weSh2YWx1ZSk7XG5cbiAgICBsZXQgaGFzaCA9ICcnO1xuICAgIGxldCBmb3VuZCA9IDA7XG5cbiAgICBpZih2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgJiYgdmFsdWUuX19oYXNoKSB7XG4gICAgICBoYXNoID0gdmFsdWUuX19oYXNoO1xuICAgIH1cblxuICAgIGlmKHRoaXMuaXRlcmF0b3JzW2hhc2hdKSB7XG4gICAgICBrZXkgPSBoYXNoO1xuICAgICAgZm91bmQgPSAyO1xuICAgIH1cbiAgICBlbHNlIGlmKHRoaXMuaXRlcmF0b3JzW2tleV0pIHtcbiAgICAgIGZvdW5kID0gMTtcbiAgICB9XG5cbiAgICBpZihmb3VuZCkge1xuICAgICAgbGV0IGl0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcnNba2V5XTtcblxuICAgICAgaWYoZm91bmQgPT0gMikge1xuICAgICAgICBsZXQgY1ZhbHVlID0gaXRlcmF0b3IuY29tcGFyc2lvbi52YWx1ZTtcbiAgICAgICAgbGV0IGNDb3B5ID0gaXRlcmF0b3IuY29tcGFyc2lvbi5jb3B5O1xuICAgICAgIFxuICAgICAgICBpZiAodGhpcy5fX2luZGV4ICE9PSBpdGVyYXRvci5pbmRleCkge1xuICAgICAgICAgIGl0ZXJhdG9yLnNldEluZGV4KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fX2tleSAhPT0gaXRlcmF0b3Iua2V5KSB7XG4gICAgICAgICAgaXRlcmF0b3Iuc2V0S2V5KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlKHZhbHVlLCBjVmFsdWUsIGNDb3B5LCB0aGlzLl9fY29tcGFyaXNvblZhbHVlKSkge1xuICAgICAgICAgIGl0ZXJhdG9yLnNldFZhbHVlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBrZXlzW2tleV0gPSBpdGVyYXRvcjtcbiAgICAgICAgZGVsZXRlIHRoaXMuaXRlcmF0b3JzW2tleV07XG5cbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgICAgfVxuXG4gICAgICB0aGlzLml0ZXJhdG9yUmVmID0gaXRlcmF0b3IuZWwubmV4dFNpYmxpbmc7XG4gICAgICBpdGVyYXRvci5fX2Rlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBsZXQgZWwgPSB0aGlzLmNyZWF0ZUl0ZXJhdG9yRWxlbWVudCgpO1xuXG4gICAgZWwuaW5uZXJIVE1MID0gdGhpcy5odG1sO1xuICAgIHRoaXMuZWwuaW5zZXJ0QmVmb3JlKGVsLCB0aGlzLml0ZXJhdG9yUmVmKTtcbiAgICBBa2lsaS5jb21waWxlKGVsKTtcblxuICAgIGlmKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgICAgaWYoIXZhbHVlLl9faGFzaCkge1xuICAgICAgICBoYXNoID0gdXRpbHMuY3JlYXRlUmFuZG9tU3RyaW5nKDMyLCAoc3RyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaXRlcmF0b3JzW3N0cl07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ19faGFzaCcsIHtcbiAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICB2YWx1ZTogaGFzaFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAga2V5c1toYXNoXSA9IHRoaXMuX19pdGVyYXRvcjtcbiAgICAgIGRlbGV0ZSB0aGlzLml0ZXJhdG9yc1toYXNoXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZihBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgICAgIGxldCBlVmFsdWUgPSB0eXBlb2YgdGhpcy5fX3ZhbHVlID09ICdzdHJpbmcnPyBgXCIke3RoaXMuX192YWx1ZX1cImA6IHRoaXMuX192YWx1ZTtcblxuICAgICAgICBsZXQgYXJncyA9IFtcbiAgICAgICAgICBgXCJGb3JcIiBjb21wb25lbnQgbG9vcCBpdGVtcyBzaG91bGQgaGF2ZSBcIm9iamVjdFwiIHR5cGUgZm9yIGhpZ2hlciBwZXJmb3JtYW5jZS5gLFxuICAgICAgICAgIGBZb3UgY2FuIGNoYW5nZSAke2VWYWx1ZX0gdG8ge3ZhbHVlOiAke2VWYWx1ZX19LCBmb3IgZXhhbXBsZS5gXG4gICAgICAgIF07XG5cbiAgICAgICAgY29uc29sZS53YXJuLmFwcGx5KGNvbnNvbGUud2FybiwgYXJncyk7XG4gICAgICB9XG5cbiAgICAgIGtleXNba2V5XSA9IHRoaXMuX19pdGVyYXRvcjtcbiAgICAgIGRlbGV0ZSB0aGlzLml0ZXJhdG9yc1trZXldO1xuICAgIH1cblxuICAgIHJldHVybiBlbC5fX2FraWxpO1xuICB9XG5cbiAgZHJhdyhkYXRhKSB7XG4gICAgaWYgKHR5cGVvZiBkYXRhICE9ICdvYmplY3QnIHx8IGRhdGEgPT09IG51bGwpIHtcbiAgICAgIGlmKEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBcIkZvclwiIGNvbXBvbmVudCBcImluXCIgYXR0cmlidXRlIHZhbHVlIHR5cGUgbXVzdCBiZSBhbiBvYmplY3QvYXJyYXlgKTtcbiAgICAgICAgZGF0YSA9IFtdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBrZXlzID0ge307XG4gICAgbGV0IGluZGV4S2V5cyA9IFtdO1xuICAgIGxldCBsYXN0RWxlbWVudCA9IG51bGw7XG4gICAgbGV0IGxhc3QgPSB0aGlzLmVsLmNoaWxkcmVuW3RoaXMuZWwuY2hpbGRyZW4ubGVuZ3RoIC0gMV07XG5cbiAgICBpZihsYXN0ICYmICEobGFzdC5fX2FraWxpIGluc3RhbmNlb2YgTG9vcCkpIHtcbiAgICAgIGxhc3RFbGVtZW50ID0gbGFzdDtcbiAgICB9XG5cbiAgICBpZihBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0gZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaW5kZXhLZXlzLnB1c2godGhpcy5sb29wKGksIGRhdGFbaV0sIGtleXMsIGkpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgaSA9IDA7XG5cbiAgICAgIGZvcihsZXQgayBpbiBkYXRhKSB7XG4gICAgICAgIGlmKCFkYXRhLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpbmRleEtleXMucHVzaCh0aGlzLmxvb3AoaywgZGF0YVtrXSwga2V5cywgaSkpO1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGluZGV4S2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBpdGVyYXRvciA9IGluZGV4S2V5c1tpXTtcblxuICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChpdGVyYXRvci5lbCk7XG4gICAgICBpdGVyYXRvci5pdGVyYXRlKGkpO1xuICAgIH1cblxuICAgIGxhc3RFbGVtZW50ICYmIHRoaXMuZWwuYXBwZW5kQ2hpbGQobGFzdEVsZW1lbnQpO1xuXG4gICAgZm9yKGxldCBrIGluIHRoaXMuaXRlcmF0b3JzKSB7XG4gICAgICBpZighdGhpcy5pdGVyYXRvcnMuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaXRlcmF0b3JzW2tdLl9fZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMuaXRlcmF0b3JzID0ga2V5cztcbiAgfVxufTtcblxuZXhwb3J0IGNsYXNzIExvb3AgZXh0ZW5kcyBGb3Ige1xuICBzdGF0aWMgbWF0Y2hlcyA9ICcnO1xuICBzdGF0aWMgY29udHJvbEF0dHJpYnV0ZXMgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuZm9yID0gbnVsbDtcbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmlzRm9yID0gdGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ2luJyk7XG5cbiAgICBpZighdGhpcy5pc0ZvciAmJiAhKHRoaXMuZWwucGFyZW50Tm9kZS5fX2FraWxpIGluc3RhbmNlb2YgRm9yKSkge1xuICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2l0ZXJhdG9yID0gdGhpcztcbiAgICB0aGlzLmZvciA9IHRoaXMuX19wYXJlbnQuX19ha2lsaTtcbiAgICB0aGlzLnNldEluZGV4KCk7XG4gICAgdGhpcy5zZXRLZXkoKTtcbiAgICB0aGlzLnNldFZhbHVlKCk7XG5cbiAgICB0aGlzLmlzRm9yICYmIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuaXNGb3IgJiYgc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHNldEluZGV4KCkge1xuICAgIHRoaXMuaW5kZXggPSB0aGlzLmZvci5fX2luZGV4O1xuICAgIHRoaXMuc2NvcGUuX19zZXQoJ2xvb3BJbmRleCcsIHRoaXMuaW5kZXgpO1xuICB9XG5cbiAgc2V0S2V5KCkge1xuICAgIHRoaXMua2V5ID0gdGhpcy5mb3IuX19rZXk7XG4gICAgdGhpcy5zY29wZS5fX3NldCgnbG9vcEtleScsIHRoaXMua2V5KTtcbiAgfVxuXG4gIHNldFZhbHVlKCkge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLmZvci5fX3ZhbHVlO1xuICAgIHRoaXMuc2NvcGUuX19zZXQoJ2xvb3BWYWx1ZScsIHRoaXMudmFsdWUsIHRydWUpO1xuXG4gICAgdGhpcy5jb21wYXJzaW9uID0ge1xuICAgICAgY29weTogdGhpcy5mb3IuX19jb21wYXJpc29uVmFsdWUsXG4gICAgICB2YWx1ZTogdGhpcy5mb3IuX192YWx1ZVxuICAgIH07XG4gIH1cblxuICBpdGVyYXRlKGluZGV4KSB7fVxufVxuXG5Gb3IuTG9vcCA9IExvb3A7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9mb3IuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JvdXRlJywgUm91dGUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1RyYW5zaXRpb259IHRyYW5zaXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBzZXRUcmFuc2l0aW9uKHRyYW5zaXRpb24pIHtcbiAgICBsZXQgc3RhdGUgPSB0cmFuc2l0aW9uLnBhdGguc3RhdGU7XG4gICAgbGV0IHBhcmFtcyA9IHRyYW5zaXRpb24ucGF0aC5wYXJhbXM7XG4gICAgbGV0IHVybCA9IHRyYW5zaXRpb24udXJsO1xuICAgIGxldCBxdWVyeSA9IHRyYW5zaXRpb24ucXVlcnk7XG4gICAgbGV0IHAgPSBQcm9taXNlLnJlc29sdmUoKTtcblxuICAgIGZ1bmN0aW9uIGdldFBhcmVudFNjb3BlVHJhbnNpdGlvbihwYXRoKSB7XG4gICAgICBpZihwYXRoLnBhcmVudCkge1xuICAgICAgICBpZiAocGF0aC5wYXJlbnQuY29tcG9uZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHBhdGgucGFyZW50LmNvbXBvbmVudC5fX3Njb3BlLl9fdHJhbnNpdGlvbi5wYXRoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldFBhcmVudFNjb3BlVHJhbnNpdGlvbihwYXRoLnBhcmVudCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHRoaXMuX19zY29wZS5fX3RyYW5zaXRpb24gPSB7XG4gICAgICBwYXRoOiB7XG4gICAgICAgIHN0YXRlOiBzdGF0ZS5uYW1lLFxuICAgICAgICBkYXRhOiB0cmFuc2l0aW9uLnBhdGguZGF0YSxcbiAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgIHBhcmVudDogZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uKHRyYW5zaXRpb24ucGF0aClcbiAgICAgIH0sXG4gICAgICBwYXJhbXM6IHRyYW5zaXRpb24ucGFyYW1zLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBxdWVyeTogcXVlcnlcbiAgICB9O1xuXG4gICAgaWYoIXRyYW5zaXRpb24ucGF0aC5sb2FkZWQpIHtcbiAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS50ZW1wbGF0ZSkge1xuICAgICAgdGhpcy5lbXB0eSgpO1xuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBgPGNvbXBvbmVudD4ke3N0YXRlLnRlbXBsYXRlfTwvY29tcG9uZW50PmA7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLnRlbXBsYXRlVXJsKSB7XG4gICAgICBwID0gcmVxdWVzdC5nZXQoc3RhdGUudGVtcGxhdGVVcmwpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICB0aGlzLmVtcHR5KCk7XG4gICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gYDxjb21wb25lbnQ+JHtyZXMuZGF0YX08L2NvbXBvbmVudD5gO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHAudGhlbigoKSA9PiB7XG4gICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3JvdXRlLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZWwsIGNvbXBvbmVudCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbCA9IGVsO1xuICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgdGhlIGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSAtIHNlbmRpbmcgZGF0YS4gV2lsbCBiZSBpbiB0aGUgZXZlbnQuZGV0YWlsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdXG4gICAqL1xuICB0cmlnZ2VyKGRhdGEsIG9wdGlvbnMgPSB7fSwgZm9yY2UgPSBmYWxzZSkge1xuICAgIGlmKGZvcmNlIHx8ICF0aGlzLmluRXZhbHVhdGluZygpKSB7XG4gICAgICB0aGlzLmVsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KHRoaXMubmFtZSwge2RldGFpbDogZGF0YSwgLi4ub3B0aW9uc30pKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2ggdGhlIGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IF9FdmVudCAtIGNsYXNzIG9mIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlXVxuICAgKi9cbiAgZGlzcGF0Y2goX0V2ZW50LCBvcHRpb25zID0ge30sIGZvcmNlID0gZmFsc2UpIHtcbiAgICBpZihmb3JjZSB8fCAhdGhpcy5pbkV2YWx1YXRpbmcoKSkge1xuICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnQodGhpcy5uYW1lLCBvcHRpb25zKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGV2ZW50IGNhbGxiYWNrIGRvZXNuJ3QgcnVuIHJlY3Vyc2l2ZVxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGluRXZhbHVhdGluZygpIHtcbiAgICBsZXQgZGF0YSA9IHRoaXMuY29tcG9uZW50Ll9fZXZhbHVhdGluZ0V2ZW50O1xuXG4gICAgaWYoIWRhdGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YS5lbCA9PT0gdGhpcy5lbCAmJiBkYXRhLmV2ZW50LnR5cGUgPT09IHRoaXMubmFtZSAmJiBkYXRhLmNvbXBvbmVudCA9PT0gdGhpcy5jb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogQmluZCB0aGUgZnVuY3Rpb25cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICovXG4gIGJpbmQoZm4pIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5uYW1lLCB0aGlzLmZuID0gZm4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCB0aGUgZnVuY3Rpb25cbiAgICovXG4gIHVuYmluZCgpIHtcbiAgICB0aGlzLmZuICYmIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMuZm4pO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vcmVxdWVzdC5qcyc7XG5pbXBvcnQgUm91dGUgZnJvbSAnLi4vY29tcG9uZW50cy9yb3V0ZS5qcyc7XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2l0aW9uIHtcbiAgY29uc3RydWN0b3IodXJsLCBxdWVyeSwgaGFzaCA9ICcnLCBwcmV2aW91cyA9IG51bGwpIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgdGhpcy5oYXNoID0gaGFzaDtcbiAgICB0aGlzLnByZXZpb3VzID0gcHJldmlvdXM7XG4gICAgdGhpcy5wYXRoID0gbnVsbDtcbiAgICB0aGlzLnJvdXRlcyA9IFtdO1xuICAgIHRoaXMuc3RhdGVzID0gW107XG4gICAgdGhpcy5wYXJhbXMgPSB7fTtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gZmFsc2U7XG4gIH1cblxuICByZWRpcmVjdCgpIHtcbiAgICB0aGlzLmNhbmNlbCgpO1xuICAgIHJvdXRlci5zdGF0ZS5hcHBseShyb3V0ZXIsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBzZXRQYXRoKHBhdGgpIHtcbiAgICBwYXRoLnBhcmVudCA9IHRoaXMucGF0aCB8fCBudWxsO1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgdGhpcy5yb3V0ZXMucHVzaChwYXRoKTtcbiAgICB0aGlzLnN0YXRlcy5wdXNoKHBhdGguc3RhdGUpO1xuICAgIHRoaXMucGFyYW1zID0gIXBhdGgucGFyZW50PyBwYXRoLnBhcmFtczogey4uLnBhdGgucGFyZW50LnBhcmFtcywgLi4ucGF0aC5wYXJhbXN9O1xuICB9XG5cbiAgZ2V0Um91dGUoc3RhdGUpIHtcbiAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5yb3V0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcm91dGUgPSB0aGlzLnJvdXRlc1tpXTtcblxuICAgICAgaWYocm91dGUuc3RhdGUgPT09IHN0YXRlKSB7XG4gICAgICAgIHJldHVybiByb3V0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGhhc1N0YXRlKHN0YXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVzLmluZGV4T2Yoc3RhdGUpICE9IC0xO1xuICB9XG5cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSB0cnVlO1xuICB9XG59XG5cbmNvbnN0IHJvdXRlciA9IHt9O1xuXG5yb3V0ZXIuYmFzZVVybCA9IFwiL1wiO1xucm91dGVyLnN0YXRlcyA9IFtdO1xucm91dGVyLmhhc2hNb2RlID0gdHJ1ZTtcbnJvdXRlci5fX3JlZGlyZWN0cyA9IDA7XG5yb3V0ZXIuX19pbml0ID0gZmFsc2U7XG5yb3V0ZXIuX19vcHRpb25zID0ge307XG5yb3V0ZXIuX19wYXJhbVJlZ2V4ID0gLyg6KFtcXHdcXGQtXSspKS9nO1xucm91dGVyLl9fcm91dGVTZWxlY3RvciA9IGMgPT4gYyBpbnN0YW5jZW9mIFJvdXRlO1xuXG4vKipcbiAqIEFkZCBuZXcgc3RhdGUgdG8gdGhlIHJvdXRlclxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc3RhdGUgbmFtZS4gVG8gc2V0IHBhcmVudHMgeW91IGNhbiB1c2UgZG90LCBlLmcuICdhcHAuYXJ0aWNsZS5lZGl0J1xuICogQHBhcmFtIHtzdHJpbmd9IHBhdHRlcm4gLSB1cmwgcGF0dGVybiBsaWtlICdhcHAvYXJ0aWNsZS86aWQnXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7cm91dGVyfVxuICovXG5yb3V0ZXIuYWRkID0gZnVuY3Rpb24gKG5hbWUsIHBhdHRlcm4sIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgdGVtcGxhdGU6ICcnLFxuICAgIHRlbXBsYXRlVXJsOiAnJyxcbiAgICBhYnN0cmFjdDogZmFsc2UsXG4gICAgaGFuZGxlcjogKHRyYW5zaXRpb24pID0+IHt9XG4gIH07XG5cbiAgaWYoIW9wdGlvbnMudGVtcGxhdGUgJiYgIW9wdGlvbnMudGVtcGxhdGVVcmwpIHtcbiAgICBvcHRpb25zLmFic3RyYWN0ID0gdHJ1ZTtcbiAgfVxuXG4gIGlmKHRoaXMuaGFzKG5hbWUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgXCIke25hbWV9XCIgaXMgYWxyZWFkeSBleGlzdHNgKVxuICB9XG5cbiAgdGhpcy5zZXRTdGF0ZShuYW1lLCBwYXR0ZXJuLCB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnN9KTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIHN0YXRlIGZyb20gdGhlIGxpc3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5yb3V0ZXIucmVtb3ZlID0gZnVuY3Rpb24obmFtZSkge1xuICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYodGhpcy5zdGF0ZXNbaV0ubmFtZSA9PSBuYW1lKSB7XG4gICAgICB0aGlzLnN0YXRlcy5zcGxpY2UoaSwgMSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQ2hlY2sgc3RhdGUgZXhpc3RzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYodGhpcy5zdGF0ZXNbaV0ubmFtZSA9PSBuYW1lKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIENoYW5nZSB0aGUgc3RhdGUgdG8gdGhlIHBhc3NlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc3RhdGUgbmFtZVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIC0gcGFyYW1zIGZvciBzdGF0ZSB7aWQ6IDF9ID0+ICcvYXBwLzppZCcgPT4gJy9hcHAvMSdcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcXVlcnldIC0gcXVlcnkge3g6IDF9ID0+ICcvYXBwLz94PTEnXG4gKiBAcGFyYW0ge3N0cmluZ30gW2hhc2hdXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKi9cbnJvdXRlci5zdGF0ZSA9IGZ1bmN0aW9uIChuYW1lLCBwYXJhbXMgPSB7fSwgcXVlcnkgPSB7fSwgaGFzaCA9ICcnLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZShuYW1lKTtcblxuICBpZiAoIXN0YXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgcm91dGUgc3RhdGUgd2l0aCBuYW1lICR7bmFtZX1gKTtcbiAgfVxuXG4gIGxldCB1cmwgPSB0aGlzLmNyZWF0ZVN0YXRlVXJsKHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoKTtcblxuICBpZighb3B0aW9ucy5yZWxvYWQgJiYgdXJsID09PSB0aGlzLmdldFVybCgpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5fX29wdGlvbnMgPSBvcHRpb25zO1xuICB0aGlzLnNldFVybCh1cmwpO1xufTtcblxuLyoqXG4gKiBHbyBiYWNrXG4gKi9cbnJvdXRlci5iYWNrID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeS5iYWNrLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBHbyB0byBhbnkgd2F5XG4gKi9cbnJvdXRlci5nbyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkuZ28uYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIEdvIGZvcndhcmRcbiAqL1xucm91dGVyLmZvcndhcmQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LmZvcndhcmQuYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIENoYW5nZSBzdGF0ZSBieSB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKi9cbnJvdXRlci5sb2NhdGlvbiA9IGZ1bmN0aW9uKHVybCwgb3B0aW9ucyA9IHsgcmVsb2FkOiBmYWxzZSB9KSB7XG4gIHRoaXMuX19vcHRpb25zID0gb3B0aW9ucztcblxuICBpZih0aGlzLmhhc2hNb2RlKSB7XG4gICAgbGV0IGN1cnJlbnQgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpO1xuXG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB1cmw7XG4gICAgY3VycmVudCA9PT0gdXJsICYmIHRoaXMuY2hhbmdlU3RhdGUoKS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICB9XG4gIGVsc2Uge1xuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCAnJywgdXJsKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSb3V0ZXIgaW5pdGlhbGl6YXRpb24uIFNob3VsZCBiZSBjYWxsZWQgYmVmb3JlIEFraWxpLmluaXQoKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbZGVmYXVsdFVybF1cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2hhc2hNb2RlPXRydWVdXG4gKi9cbnJvdXRlci5pbml0ID0gZnVuY3Rpb24gKGRlZmF1bHRVcmwgPSAnJywgaGFzaE1vZGUgPSB0cnVlKSB7XG4gIGxldCBvbGRQdXNoU3RhdGUgPSB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGU7XG5cbiAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IHJlcyA9IG9sZFB1c2hTdGF0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgcm91dGVyLmNoYW5nZVN0YXRlKCkuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcblxuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgdGhpcy5fX29uU3RhdGVDaGFuZ2VIYW5kbGVyID0gKCkgPT4ge1xuICAgIHRoaXMuY2hhbmdlU3RhdGUoKS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICB9O1xuXG4gIHRoaXMuZGVmYXVsdFVybCA9IGRlZmF1bHRVcmw7XG4gIHRoaXMuaGFzaE1vZGUgPSBoYXNoTW9kZTtcblxuICB0aGlzLnN0YXRlcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgYSA9IGEubmFtZS5zcGxpdCgnLicpLmxlbmd0aDtcbiAgICBiID0gYi5uYW1lLnNwbGl0KCcuJykubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGEgLSBiO1xuICB9KTtcblxuICBsZXQgc3RhdGVzID0ge307XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcbiAgICBsZXQgcGFyZW50cyA9IFtdO1xuXG4gICAgc3RhdGVzW3N0YXRlLm5hbWVdID0gc3RhdGU7XG4gICAgc3RhdGUuY2hpbGRyZW4gPSBbXTtcbiAgICBwYXJlbnRzID0gc3RhdGUubmFtZS5zcGxpdCgnLicpO1xuICAgIHBhcmVudHMucG9wKCk7XG4gICAgc3RhdGUubGV2ZWwgPSBzdGF0ZS5hYnN0cmFjdD8gbnVsbDogcGFyZW50cy5sZW5ndGg7XG5cbiAgICBpZiAocGFyZW50cy5sZW5ndGgpIHtcbiAgICAgIGxldCBwYXJlbnROYW1lID0gcGFyZW50cy5qb2luKCcuJyk7XG4gICAgICBsZXQgcGFyZW50ID0gc3RhdGVzW3BhcmVudE5hbWVdO1xuXG4gICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCBwYXJlbnQgcm91dGUgc3RhdGUgXCIke3BhcmVudE5hbWV9XCIgZm9yIFwiJHtzdGF0ZS5uYW1lfVwiYClcbiAgICAgIH1cblxuICAgICAgaWYoc3RhdGUubGV2ZWwgIT09IG51bGwgJiYgcGFyZW50LmFic3RyYWN0KSB7XG4gICAgICAgIHN0YXRlLmxldmVsLS07XG4gICAgICB9XG5cbiAgICAgIHN0YXRlLmZ1bGxQYXR0ZXJuID0gdGhpcy5zcGxpdFNsYXNoZXMocGFyZW50LmZ1bGxQYXR0ZXJuICsgJy8nICsgc3RhdGUucGF0dGVybik7XG4gICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaChzdGF0ZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc3RhdGUuZnVsbFBhdHRlcm4gPSBzdGF0ZS5wYXR0ZXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmKCF0aGlzLnN0YXRlcy5sZW5ndGggJiYgQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgIGNvbnNvbGUud2FybihgWW91IGRpZG4ndCBhZGQgYW55IHJvdXRlcyB0byB0aGUgcm91dGVyYCk7XG4gIH1cblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIpO1xuICB0aGlzLl9faW5pdCA9IHRydWU7XG59O1xuXG4vKipcbiAqIEdldCBzdGF0ZSBieSBuYW1lXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAqL1xucm91dGVyLmdldFN0YXRlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogU2V0IHN0YXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXR0ZXJuXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICovXG5yb3V0ZXIuc2V0U3RhdGUgPSBmdW5jdGlvbiAobmFtZSwgcGF0dGVybiwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBzdGF0ZSA9IHsuLi5vcHRpb25zLCBuYW1lLCBwYXR0ZXJufTtcblxuICByb3V0ZXIuc3RhdGVzLnB1c2goc3RhdGUpO1xuXG4gIHJldHVybiBzdGF0ZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIHN0YXRlIGJ5IG5hbWVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5yb3V0ZXIucmVtb3ZlU3RhdGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLm5hbWUgPT0gbmFtZSkge1xuICAgICAgdGhpcy5zdGF0ZXMuc3BsaWNlKGksIDEpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFNldCB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKi9cbnJvdXRlci5zZXRVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHRoaXMuaGFzaE1vZGU/IHRoaXMuc2V0SGFzaFVybCh1cmwpOiB0aGlzLnNldEhpc3RvcnlVcmwodXJsKTtcbn07XG5cbi8qKlxuICogU2V0IHVybCB1c2luZyBoaXN0b3J5XG4gKlxuICogQHBhcmFtIHVybFxuICovXG5yb3V0ZXIuc2V0SGlzdG9yeVVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsICcnLCB1cmwpO1xufTtcblxuLyoqXG4gKiBTZXQgdXJsIHVzaW5nIGhhc2hcbiAqXG4gKiBAcGFyYW0gdXJsXG4gKi9cbnJvdXRlci5zZXRIYXNoVXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjJyArICh1cmwgfHwgJy8nKTtcbn07XG5cbi8qKlxuICogR2V0IHVybFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmhhc2hNb2RlID8gdGhpcy5nZXRIYXNoVXJsKCkgOiB0aGlzLmdldEhpc3RvcnlVcmwoKTtcbn07XG5cbi8qKlxuICogR2V0IHVybCB1c2luZyBoaXN0b3J5XG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLmdldEhpc3RvcnlVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoICsgd2luZG93LmxvY2F0aW9uLmhhc2g7XG59O1xuXG4vKipcbiAqIEdldCB1cmwgdXNpbmcgaGFzaFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRIYXNoVXJsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgvXiMvLCAnJyk7XG59O1xuXG4vKipcbiAqIEdldCBxdWVyeSBwYXJhbXNcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0VXJsUXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuaGFzaE1vZGUgPyB0aGlzLmdldEhhc2hVcmxRdWVyeSgpIDogdGhpcy5nZXRIaXN0b3J5VXJsUXVlcnkoKTtcbn07XG5cbi8qKlxuICogR2V0IHF1ZXJ5IHBhcmFtcyB1c2luZyBoaXN0b3J5XG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldEhpc3RvcnlVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcmVxdWVzdC5wYXJhbXNGcm9tUXVlcnkod2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpKTtcbn07XG5cbi8qKlxuICogR2V0IHF1ZXJ5IHBhcmFtcyB1c2luZyBoYXNoXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldEhhc2hVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcmVxdWVzdC5wYXJhbXNGcm9tUXVlcnkoKHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCc/JylbMV0gfHwgJycpKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIHVybCBieSBkYXRhXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdXG4gKiBAcGFyYW0ge29iamVjdH0gW3F1ZXJ5XVxuICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoXVxuICovXG5yb3V0ZXIuY3JlYXRlU3RhdGVVcmwgPSBmdW5jdGlvbiAoc3RhdGUsIHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gJycpIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG5cbiAgbGV0IHVybCA9IHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2UodGhpcy5fX3BhcmFtUmVnZXgsIChtLCBmLCB2KSA9PiB7XG4gICAgcmV0dXJuIHBhcmFtc1t2XSB8fCAnJztcbiAgfSk7XG5cbiAgdXJsID0gdGhpcy5zcGxpdFNsYXNoZXModXJsKTtcblxuICBpZihPYmplY3Qua2V5cyhxdWVyeSkubGVuZ3RoKSB7XG4gICAgdXJsICs9ICc/JyArIHJlcXVlc3QucGFyYW1zVG9RdWVyeShxdWVyeSk7XG4gIH1cblxuICBoYXNoID0gKGhhc2ggfHwgJycpLnJlcGxhY2UoJyMnLCAnJyk7XG5cbiAgaWYoIXRoaXMuaGFzaE1vZGUgJiYgaGFzaCkge1xuICAgIHVybCArPSAnIycgKyBoYXNoO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCB1bm5lY2Vzc2FyeSBzbGFzaGVzIGZyb20gYW4gdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLnNwbGl0U2xhc2hlcyA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgcmV0dXJuIHVybC5yZXBsYWNlKC9bXFwvXSsvZywgJy8nKTtcbn07XG5cbi8qKlxuICogQ2xlYXIgYWxsIHJvdXRlciBkZXBlbmRlbmNpZXNcbiAqL1xucm91dGVyLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIpO1xufTtcblxuLyoqXG4gKiBHZXQgc3RhdGUgdXJsIGNvbnRlbnRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0UGF0dGVybkNvbnRlbnQgPSBmdW5jdGlvbiAoc3RhdGUsIHVybCkge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcblxuICBsZXQga2V5cyA9IFtdO1xuICBsZXQgaSA9IDA7XG4gIGxldCBwYXJhbXMgPSB7fTtcblxuICB1cmwgPSB1cmwuc3BsaXQoJz8nKVswXTtcbiAgdXJsID0gdXJsLnNwbGl0KCcjJylbMF07XG5cbiAgbGV0IHVybFBhdHRlcm4gPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAobSwgZiwgdikgPT4ge1xuICAgIGtleXMucHVzaCh2KTtcblxuICAgIHJldHVybiAnKFteXFxcXC9dKiknO1xuICB9KTtcblxuICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKHVybFBhdHRlcm4pO1xuICBsZXQgaXNJbmNsdWRlZCA9IHVybC5tYXRjaChyZWdleCk7XG5cbiAgaWYgKCFpc0luY2x1ZGVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB1cmwucmVwbGFjZShyZWdleCwgKG0sIHYpID0+IHtcbiAgICB2ICYmIChwYXJhbXNba2V5c1tpXV0gPSB2KTtcbiAgICBpKys7XG4gIH0pO1xuXG4gIHJldHVybiB7IHBhcmFtcyB9O1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgc3RhdGUgaXMgYWN0aXZlIG5vd1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5jbHVkZXNcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaXNBY3RpdmVTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlLCBpbmNsdWRlcyA9IGZhbHNlKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuXG4gIGxldCB1cmwgPSB0aGlzLnNwbGl0U2xhc2hlcyh0aGlzLmdldFVybCgpLnNwbGl0KCc/JylbMF0gKyAnLycpO1xuICBsZXQgdXJsUGF0dGVybiA9IHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2UodGhpcy5fX3BhcmFtUmVnZXgsICcoW15cXFxcL10qKScpO1xuICBsZXQgc3RyID0gaW5jbHVkZXM/IHVybFBhdHRlcm46IHRoaXMuc3BsaXRTbGFzaGVzKCdeJyArIHVybFBhdHRlcm4gKyAnXFwvJCcpO1xuICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKHN0cik7XG5cbiAgcmV0dXJuIHJlZ2V4LnRlc3QodXJsKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIGN1cnJlbnQgdXJsIGluY2x1ZGVzIGEgc3RhdGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmluQWN0aXZlU3RhdGUgPSBmdW5jdGlvbihzdGF0ZSkge1xuICByZXR1cm4gcm91dGVyLmlzQWN0aXZlU3RhdGUoc3RhdGUsIHRydWUpO1xufTtcblxuLyoqXG4gKiBHZXQgcm91dGUgY29tcG9uZW50IGJ5IGxldmVsXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxldmVsXG4gKi9cbnJvdXRlci5nZXRSb3V0ZSA9IGZ1bmN0aW9uIChsZXZlbCkge1xuICBsZXQgaSA9IDA7XG5cbiAgbGV0IGZpbmQgPSAoZWwpID0+IHtcbiAgICBsZXQgcm91dGUgPSBlbC5jaGlsZCh0aGlzLl9fcm91dGVTZWxlY3Rvcik7XG5cbiAgICBpZiAoIXJvdXRlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoaSA9PSBsZXZlbCkge1xuICAgICAgcmV0dXJuIHJvdXRlO1xuICAgIH1cblxuICAgIGkrKztcblxuICAgIHJldHVybiBmaW5kKHJvdXRlKTtcbiAgfTtcblxuICByZXR1cm4gZmluZChBa2lsaS5yb290KTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBmaXJzdCBtYXRjaFxuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGFyclxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge29iamVjdHxudWxsfVxuICovXG5yb3V0ZXIuZ2V0QXJyYXlQYXR0ZXJuQ29udGVudCA9IGZ1bmN0aW9uIChhcnIsIHVybCkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSBhcnJbaV07XG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldFBhdHRlcm5Db250ZW50KHN0YXRlLCB1cmwpO1xuXG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge3N0YXRlOiBzdGF0ZSwgLi4uY29udGVudH07XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogR2V0IHN0YXRlcyBieSBsZXZlbFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZXZlbFxuICogQHJldHVybnMge0FycmF5fVxuICovXG5yb3V0ZXIuZ2V0U3RhdGVzQnlMZXZlbCA9IGZ1bmN0aW9uIChsZXZlbCkge1xuICBsZXQgc3RhdGVzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZS5sZXZlbCA8IGxldmVsKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc3RhdGUubGV2ZWwgPiBsZXZlbCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgc3RhdGVzLnB1c2goc3RhdGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlcztcbn07XG5cbi8qKlxuICogQ2hhbmdlIHN0YXRlXG4gKi9cbnJvdXRlci5jaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYodGhpcy5fX2Rpc2FibGVDaGFuZ2UpIHtcbiAgICBkZWxldGUgdGhpcy5fX2Rpc2FibGVDaGFuZ2U7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICBsZXQgdXJsID0gdGhpcy5nZXRVcmwoKTtcbiAgbGV0IGhhc2ggPSB0aGlzLmhhc2hNb2RlPyAnJzogd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTtcbiAgbGV0IHF1ZXJ5ID0gdGhpcy5nZXRVcmxRdWVyeSgpO1xuICBsZXQgcHJldlRyYW5zaXRpb24gPSByb3V0ZXIudHJhbnNpdGlvbiB8fCBudWxsO1xuICBsZXQgdHJhbnNpdGlvbiA9IHJvdXRlci50cmFuc2l0aW9uID0gbmV3IFRyYW5zaXRpb24odXJsLCBxdWVyeSwgaGFzaCwgcHJldlRyYW5zaXRpb24pO1xuICBsZXQgbGV2ZWwgPSAwO1xuXG4gIGxldCBuZXh0ID0gKHN0YXRlcywgb25FbmQpID0+IHtcbiAgICBpZiAoIXN0YXRlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBvbkVuZCAmJiBvbkVuZCgpO1xuICAgIH1cblxuICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRBcnJheVBhdHRlcm5Db250ZW50KHN0YXRlcywgdXJsKTtcblxuICAgIGlmICghY29udGVudCkge1xuICAgICAgcmV0dXJuIG9uRW5kICYmIG9uRW5kKCk7XG4gICAgfVxuXG4gICAgbGV0IHN0YXRlID0gY29udGVudC5zdGF0ZTtcbiAgICBsZXQgcGFyYW1zID0gY29udGVudC5wYXJhbXM7XG4gICAgbGV0IHJvdXRlID0gc3RhdGUuYWJzdHJhY3Q/IG51bGw6IHRoaXMuZ2V0Um91dGUoc3RhdGUubGV2ZWwpO1xuXG4gICAgaWYgKCFyb3V0ZSAmJiAhc3RhdGUuYWJzdHJhY3QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvciAoYE5vdCBmb3VuZCByb3V0ZSBjb21wb25lbnQgZm9yIHN0YXRlIFwiJHtzdGF0ZS5uYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgdHJhbnNpdGlvbi5zZXRQYXRoKHsgc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gsIGNvbXBvbmVudDogcm91dGUsIGxvYWRlZDogdHJ1ZSB9KTtcbiAgICBsZXZlbCsrO1xuXG4gICAgbGV0IGhhc1N0YXRlID0gcHJldlRyYW5zaXRpb24gJiYgcHJldlRyYW5zaXRpb24uaGFzU3RhdGUoc3RhdGUpO1xuICAgIGxldCBpc0RpZmZlcmVudCA9IHRydWU7XG5cbiAgICBpZihoYXNTdGF0ZSkge1xuICAgICAgbGV0IHJvdXRlID0gcHJldlRyYW5zaXRpb24uZ2V0Um91dGUoc3RhdGUpO1xuICAgICAgbGV0IHByZXYgPSB7IHBhcmFtczogcm91dGUucGFyYW1zLCBxdWVyeTogcm91dGUucXVlcnksIGhhc2g6IHJvdXRlLmhhc2ggfTtcbiAgICAgIGxldCBjdXJyZW50ID0geyBwYXJhbXMsIHF1ZXJ5LCBoYXNoIH07XG5cbiAgICAgIGlzRGlmZmVyZW50ID0gIXV0aWxzLmNvbXBhcmUocHJldiwgY3VycmVudCk7XG4gICAgfVxuXG4gICAgbGV0IGlzSGlzdG9yeSA9IHRoaXMuX19vcHRpb25zLnJlbG9hZCA9PT0gdW5kZWZpbmVkICYmICFpc0RpZmZlcmVudDtcbiAgICBsZXQgaXNSZWxvYWQgPSB0aGlzLl9fb3B0aW9ucy5yZWxvYWQgPT09IGZhbHNlO1xuXG4gICAgdHJhbnNpdGlvbi5wYXRoLmxvYWRlZCA9ICEoaGFzU3RhdGUgJiYgKGlzSGlzdG9yeSB8fCBpc1JlbG9hZCkpO1xuXG4gICAgUHJvbWlzZS5yZXNvbHZlKHN0YXRlLmhhbmRsZXIodHJhbnNpdGlvbikpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmICh0cmFuc2l0aW9uLl9fY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBvbkVuZCAmJiBvbkVuZCgpO1xuICAgICAgfVxuXG4gICAgICB0cmFuc2l0aW9uLnBhdGguZGF0YSA9IGRhdGE7XG5cbiAgICAgIGlmKHN0YXRlLmFic3RyYWN0KSB7XG4gICAgICAgIHJldHVybiBuZXh0KHN0YXRlLmNoaWxkcmVuLCBvbkVuZCk7XG4gICAgICB9XG4gXG4gICAgICByb3V0ZS5zZXRUcmFuc2l0aW9uKHRyYW5zaXRpb24pLnRoZW4oKCkgPT4ge1xuICAgICAgICBuZXh0KHN0YXRlLmNoaWxkcmVuLCBvbkVuZCk7XG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiBvbkVuZCAmJiBvbkVuZChlcnIpKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIG5leHQodGhpcy5nZXRTdGF0ZXNCeUxldmVsKDApLCAoZXJyKSA9PiB7XG4gICAgICBpZihlcnIpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgfVxuXG4gICAgICBpZighdHJhbnNpdGlvbi5yb3V0ZXMubGVuZ3RoKSB7XG4gICAgICAgIGlmKHRoaXMuX19yZWRpcmVjdHMpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihgV3Jvbmcgcm91dGVyIGRlZmF1bHQgdXJsIFwiJHt0aGlzLmRlZmF1bHRVcmx9XCJgKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmRlZmF1bHRVcmwpIHtcbiAgICAgICAgICBpZih0aGlzLmRlZmF1bHRVcmwgPT0gdGhpcy5nZXRVcmwoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYE5vdCBmb3VuZCBhbnkgcm91dGVzYCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuaGFzaE1vZGUgJiYgKHRoaXMuX19kaXNhYmxlQ2hhbmdlID0gdHJ1ZSk7XG4gICAgICAgICAgdGhpcy5zZXRVcmwodGhpcy5kZWZhdWx0VXJsKTtcbiAgICAgICAgICB0aGlzLl9fcmVkaXJlY3RzKys7XG5cbiAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2VTdGF0ZSgpLnRoZW4ocmVzb2x2ZSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYE5vdCBmb3VuZCBhIGRlZmF1bHQgcm91dGUuIFlvdSBjYW4gcGFzcyBpdCBpbiBcInJvdXRlci5pbml0KGRlZmF1bHRVcmwpXCIgZnVuY3Rpb25gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBpZighdGhpcy5fX29wdGlvbnMuc2F2ZVNjcm9sbFBvc2l0aW9uICYmICF0cmFuc2l0aW9uLmhhc2gpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9fb3B0aW9ucyA9IHt9O1xuICAgICAgdGhpcy5fX3JlZGlyZWN0cyA9IDA7XG5cbiAgICAgIGlmKHByZXZUcmFuc2l0aW9uKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IGxldmVsLCBsID0gcHJldlRyYW5zaXRpb24ucm91dGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGxldCByb3V0ZSA9IHByZXZUcmFuc2l0aW9uLnJvdXRlc1tpXTtcbiAgICAgICAgICBcbiAgICAgICAgICByb3V0ZS5jb21wb25lbnQgJiYgcm91dGUuY29tcG9uZW50LmVtcHR5KCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzdGF0ZS1jaGFuZ2UnLCB7XG4gICAgICAgIGRldGFpbDogdHJhbnNpdGlvblxuICAgICAgfSkpO1xuXG4gICAgICByZXNvbHZlKCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxucm91dGVyLlRyYW5zaXRpb24gPSBUcmFuc2l0aW9uO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvcm91dGVyLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuLi9zZXJ2aWNlcy9yb3V0ZXIuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tzdGF0ZV06bm90KFt1cmxdKSxbdXJsXTpub3QoW3N0YXRlXSknO1xuICBzdGF0aWMgY29udHJvbEF0dHJpYnV0ZXMgPSB0cnVlO1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ3JlbG9hZCddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdhJywgQSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnN0YXRlID0gbnVsbDtcbiAgICB0aGlzLnBhcmFtcyA9IHt9O1xuICAgIHRoaXMucXVlcnkgPSB7fTtcbiAgICB0aGlzLmhhc2ggPSAnJztcbiAgICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgICB0aGlzLmlzVXJsID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3VybCcpO1xuICB9XG5cbiAgY2hhbmdlZFVybCh1cmwpIHtcbiAgICB0aGlzLnNldFVybCh1cmwpO1xuICAgIHRoaXMucmVzZXRIcmVmKHVybCk7XG4gIH1cblxuICBjaGFuZ2VkU3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICB0aGlzLnJlc2V0SHJlZigpO1xuICB9XG5cbiAgY2hhbmdlZFBhcmFtcyhwYXJhbXMpIHtcbiAgICB0aGlzLnNldFBhcmFtcyhwYXJhbXMpO1xuICAgIHRoaXMucmVzZXRIcmVmKCk7XG4gIH1cblxuICBjaGFuZ2VkUXVlcnkocXVlcnkpIHtcbiAgICB0aGlzLnNldFF1ZXJ5KHF1ZXJ5KTtcbiAgICB0aGlzLnJlc2V0SHJlZigpO1xuICB9XG5cbiAgY2hhbmdlZEhhc2gocXVlcnkpIHtcbiAgICB0aGlzLnNldEhhc2gocXVlcnkpO1xuICAgIHRoaXMucmVzZXRIcmVmKCk7XG4gIH1cblxuICBjaGFuZ2VkT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgdGhpcy5zZXRRdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIGNoYW5nZWRSZWxvYWQodmFsKSB7XG4gICAgdGhpcy5zZXRSZWxvYWQodmFsKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmKHRoaXMuaXNVcmwpIHtcbiAgICAgICAgcm91dGVyLmxvY2F0aW9uKHRoaXMuYXR0cnMudXJsLCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcm91dGVyLnN0YXRlKHRoaXMuc3RhdGUubmFtZSwgdGhpcy5wYXJhbXMsIHRoaXMucXVlcnksIHRoaXMuaGFzaCwgIHRoaXMub3B0aW9ucyk7XG4gICAgfSk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdzdGF0ZScpICYmIHRoaXMuc2V0U3RhdGUodGhpcy5hdHRycy5zdGF0ZSk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgncGFyYW1zJykgJiYgdGhpcy5zZXRQYXJhbXModGhpcy5hdHRycy5wYXJhbXMpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ3F1ZXJ5JykgJiYgdGhpcy5zZXRRdWVyeSh0aGlzLmF0dHJzLnF1ZXJ5KTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdoYXNoJykgJiYgdGhpcy5zZXRIYXNoKHRoaXMuYXR0cnMuaGFzaCk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgnb3B0aW9ucycpICYmIHRoaXMuc2V0T3B0aW9ucyh0aGlzLmF0dHJzLm9wdGlvbnMpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ3JlbG9hZCcpICYmIHRoaXMuc2V0UmVsb2FkKHRoaXMuYXR0cnMucmVsb2FkKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCd1cmwnKSAmJiB0aGlzLnNldFVybCh0aGlzLmF0dHJzLnVybCk7XG4gICAgdGhpcy5yZXNldEhyZWYodGhpcy51cmwpO1xuICB9XG5cbiAgc2V0VXJsKHVybCkge1xuICAgIHRoaXMudXJsID0gdXJsO1xuICB9XG5cbiAgc2V0U3RhdGUobmFtZSkge1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldFN0YXRlKG5hbWUpO1xuICAgIHRoaXMuc2NvcGUuaXNBY3RpdmVTdGF0ZSA9IHJvdXRlci5pc0FjdGl2ZVN0YXRlKHRoaXMuc3RhdGUpO1xuICAgIHRoaXMuc2NvcGUuaW5BY3RpdmVTdGF0ZSA9IHJvdXRlci5pbkFjdGl2ZVN0YXRlKHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgc2V0UGFyYW1zKHBhcmFtcykge1xuICAgIGlmKHR5cGVvZiBwYXJhbXMgIT0gJ29iamVjdCcgfHwgIXBhcmFtcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgcGFyYW1zIG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gIH1cblxuICBzZXRRdWVyeShxdWVyeSkge1xuICAgIGlmKHR5cGVvZiBxdWVyeSAhPSAnb2JqZWN0JyB8fCAhcXVlcnkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIHF1ZXJ5IG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICB9XG5cbiAgc2V0SGFzaChoYXNoKSB7XG4gICAgaWYodHlwZW9mIGhhc2ggIT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIGhhc2ggbXVzdCBiZSBhIHN0cmluZ2ApO1xuICAgIH1cblxuICAgIHRoaXMuaGFzaCA9IGhhc2g7XG4gIH1cblxuICBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICBpZih0eXBlb2Ygb3B0aW9ucyAhPSAnb2JqZWN0JyB8fCAhb3B0aW9ucykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgb3B0aW9ucyBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBzZXRSZWxvYWQodmFsKSB7XG4gICAgdGhpcy5vcHRpb25zLnJlbG9hZCA9IHZhbDtcbiAgfVxuXG4gIGdldFN0YXRlKG5hbWUpIHtcbiAgICBsZXQgc3RhdGUgPSByb3V0ZXIuZ2V0U3RhdGUobmFtZSk7XG5cbiAgICBpZighc3RhdGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIHJvdXRlciBzdGF0ZSB3aXRoIG5hbWUgXCIke25hbWV9XCJgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICByZXNldEhyZWYodXJsKSB7XG4gICAgaWYodXJsKSB7XG4gICAgICB0aGlzLmF0dHJzLmhyZWYgPSB1cmw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5hdHRycy5ocmVmID0gcm91dGVyLmNyZWF0ZVN0YXRlVXJsKHRoaXMuc3RhdGUsIHRoaXMucGFyYW1zLCB0aGlzLnF1ZXJ5LCB0aGlzLmhhc2gpO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2EuanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnYXVkaW8nLCBBdWRpbyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9hdWRpby5qcyIsImltcG9ydCBUZXh0IGZyb20gJy4vdGV4dC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50IGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdjb250ZW50JywgQ29udGVudCk7XG4gICAgQWtpbGkuYWxpYXMoJ1tjb250ZW50ZWRpdGFibGVdJywgJ2NvbnRlbnQnKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIGlmKHRoaXMuZWwuaGFzQXR0cmlidXRlKCdlZGl0YWJsZScpKSB7XG4gICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ2VkaXRhYmxlJykpO1xuICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoJ2VkaXRhYmxlJyk7XG4gICAgfVxuXG4gICAgaWYoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKS5kaXNwbGF5ID09ICdpbmxpbmUnKSB7XG4gICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIHRoaXMudmFsdWVLZXkgPSAnaW5uZXJIVE1MJztcbiAgfVxuXG4gIHNldEVsZW1lbnRGb2N1cygpIHtcbiAgICBsZXQgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIGxldCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG5cbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGhpcy5lbCk7XG4gICAgcmFuZ2UuY29sbGFwc2UoZmFsc2UpO1xuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2NvbnRlbnQuanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtYmVkIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnZW1iZWQnLCBFbWJlZCk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9lbWJlZC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogSWYgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElmIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gdHJ1ZTtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW2lzXSc7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsncmVjcmVhdGUnXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaWYnLCBJZik7XG4gICAgQWtpbGkuY29tcG9uZW50KCdlbHNlLWlmJywgRWxzZUlmKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2Vsc2UnLCBFbHNlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5zdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5yZWNyZWF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuaXNDb21waWxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGlzcGxheSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5lbCkuZGlzcGxheTtcbiAgfVxuXG4gIGNoYW5nZWRJcyh2YWx1ZSkge1xuICAgIHRoaXMuc3RhdGUgPSAhIXZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoKTtcbiAgfVxuXG4gIGNoYW5nZWRSZWNyZWF0ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0UmVjcmVhdGlvbih2YWx1ZSk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdyZWNyZWF0ZScpICYmIHRoaXMuc2V0UmVjcmVhdGlvbih0aGlzLmF0dHJzLnJlY3JlYXRlKTtcbiAgICB0aGlzLnN0YXRlID0gISF0aGlzLmF0dHJzLmlzO1xuICAgIHJldHVybiB0aGlzLnNldFN0YXRlKClcbiAgfVxuXG4gIHNldEFjdGl2aXR5KGFjdGl2ZSkge1xuICAgIHRoaXMuYWN0aXZlID0gYWN0aXZlO1xuICB9XG5cbiAgc2V0UmVjcmVhdGlvbihyZWNyZWF0ZSkge1xuICAgIHRoaXMucmVjcmVhdGUgPSByZWNyZWF0ZTtcbiAgfVxuXG4gIHNldFN0YXRlKCkge1xuICAgIGxldCByZXMgPSB0aGlzLmNvbXBpbGF0aW9uKCk7XG4gICAgbGV0IG5leHQgPSB0aGlzLmVsLm5leHRFbGVtZW50U2libGluZztcbiAgICBsZXQgcmVzdWx0O1xuXG4gICAgaWYoIW5leHQgfHwgIW5leHQubWF0Y2hlcygnZWxzZS1pZixlbHNlJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXh0Ll9fYWtpbGkuc2V0QWN0aXZpdHkodGhpcy5hY3RpdmUgfHwgdGhpcy5zdGF0ZSk7XG4gICAgbmV4dC5fX2FraWxpLnNldFJlY3JlYXRpb24odGhpcy5yZWNyZWF0ZSk7XG4gICAgcmVzdWx0ID0gbmV4dC5fX2FraWxpLnNldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcykudGhlbigoKSA9PiB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9XG5cbiAgY29tcGlsYXRpb24oKSB7XG4gICAgbGV0IHJlcztcblxuICAgIGlmKHRoaXMuc3RhdGUgJiYgIXRoaXMuYWN0aXZlKSB7XG4gICAgICBpZih0aGlzLnJlY3JlYXRlIHx8ICF0aGlzLmlzQ29tcGlsZWQpIHtcbiAgICAgICAgcmVzID0gdGhpcy5jb21waWxlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9IHRoaXMuZGlzcGxheTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZih0aGlzLnJlY3JlYXRlKSB7XG4gICAgICAgIHRoaXMuX19lbXB0eSgpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZighdGhpcy5pc0NvbXBpbGVkKSB7XG4gICAgICAgIHJlcyA9IHRoaXMuY29tcGlsZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgY29tcGlsZSgpIHtcbiAgICBsZXQgcmVzO1xuXG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XG4gICAgcmVzID0gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICB0aGlzLmlzQ29tcGlsZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxufTtcblxuLyoqXG4gKiBFbHNlSWYgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBFbHNlSWYgZXh0ZW5kcyBJZiB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIEVsc2UgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBFbHNlIGV4dGVuZHMgRWxzZUlmIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnaXMnLCAndHJ1ZScpO1xuICB9XG59XG5cbklmLkVsc2VJZiA9IEVsc2VJZjtcbklmLkVsc2UgPSBFbHNlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2lmLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZnJhbWUgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpZnJhbWUnLCBJZnJhbWUpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaWZyYW1lLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZSBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2ltZycsIEltYWdlKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2ltYWdlLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmNsdWRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gdHJ1ZTtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW3VybF0nO1xuICBzdGF0aWMgZXZlbnRzID0gWydsb2FkJywgJ2Vycm9yJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2luY2x1ZGUnLCBJbmNsdWRlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgfVxuXG4gIGNoYW5nZWRVcmwodXJsKSB7XG4gICAgdGhpcy5nZXRUZW1wbGF0ZSh1cmwpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGVtcGxhdGUodGhpcy5hdHRycy51cmwpO1xuICB9XG5cbiAgZ2V0VGVtcGxhdGUodXJsKSB7XG4gICAgdGhpcy5jb25uZWN0aW9uICYmIHRoaXMuY29ubmVjdGlvbi5hYm9ydCgpO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KHVybCwge1xuICAgICAgb25TdGFydDogKHhocikgPT4ge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSB4aHI7XG4gICAgICB9XG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgdGhpcy5lbXB0eSgpO1xuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XG4gICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCByZXMuZGF0YSk7XG5cbiAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uTG9hZC50cmlnZ2VyKCk7XG4gICAgICB9KTtcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICB0aGlzLmF0dHJzLm9uRXJyb3IudHJpZ2dlcihlcnIpO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaW5jbHVkZS5qcyIsImltcG9ydCBUZXh0IGZyb20gJy4vdGV4dC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCBleHRlbmRzIFRleHQge1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ2NoZWNrZWQnXTtcbiAgc3RhdGljIGV2ZW50cyA9IFsnY2hhbmdlJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2lucHV0JywgSW5wdXQpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pc0NoZWNrYm94ID0gdGhpcy5lbC50eXBlID09ICdjaGVja2JveCc7XG4gICAgdGhpcy5pc1JhZGlvID0gdGhpcy5lbC50eXBlID09ICdyYWRpbyc7XG4gIH1cblxuICBjaGFuZ2VkQ2hlY2tlZCh2YWx1ZSkge1xuICAgIHRoaXMuc2V0Q2hlY2tlZCh2YWx1ZSk7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgICh0aGlzLmlzUmFkaW8gfHwgdGhpcy5pc0NoZWNrYm94KSAmJiB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRDaGVja2VkKHRoaXMuZWwuY2hlY2tlZCwgZmFsc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzb2x2ZWQoKSB7XG4gICAgKHRoaXMuaXNDaGVja2JveCB8fCB0aGlzLmlzUmFkaW8pICYmIHRoaXMuc2V0Q2hlY2tlZCh0aGlzLmF0dHJzLmNoZWNrZWQpO1xuICB9XG5cbiAgc2V0Q2hlY2tlZCh2YWx1ZSwgdHJpZ2dlciA9IHRydWUpIHtcbiAgICB2YWx1ZSA9ICEhdmFsdWU7XG5cbiAgICBpZih0aGlzLnByZXZDaGVja2VkID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZWwuY2hlY2tlZCA9IHRoaXMucHJldkNoZWNrZWQgPSB2YWx1ZTtcbiAgICB0cmlnZ2VyICYmIHRoaXMuYXR0cnMub25DaGFuZ2UuZGlzcGF0Y2goRXZlbnQpO1xuICAgIHRoaXMuaXNSYWRpbyAmJiB0aGlzLmNoYW5nZVJhZGlvKCk7XG4gIH1cblxuICBzZXRWYWx1ZSgpIHtcbiAgICBzdXBlci5zZXRWYWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuaXNSYWRpbyAmJiB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50KTtcbiAgfVxuXG4gIGNoYW5nZVJhZGlvKCkge1xuICAgIGxldCBuYW1lID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICBsZXQgc2VsZWN0b3IgPSBgaW5wdXRbdHlwZT1yYWRpb11bbmFtZT0nJHtuYW1lfSddOm5vdChbc2NvcGU9JyR7dGhpcy5zY29wZS5fX25hbWV9J10pYDtcbiAgICBsZXQgY2hpbGRyZW4gPSBBa2lsaS5yb290LmNoaWxkcmVuKHNlbGVjdG9yKTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICByYWRpby5zZXRDaGVja2VkKHJhZGlvLmVsLmNoZWNrZWQpO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2lucHV0LmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3RzIGV4dGVuZHMgVXJsIHsgIFxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnVybEF0dHJpYnV0ZSA9ICdkYXRhJztcbiAgfVxuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdvYmplY3QnLCBPYmplY3RzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL29iamVjdC5qcyIsImltcG9ydCBGb3IsIHsgTG9vcCB9IGZyb20gJy4vZm9yLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogVGhlIHJhZGlvIGdyb3VwIGNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWRpbyBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tuYW1lXSc7XG4gIHN0YXRpYyBldmVudHMgPSBbJ3JhZGlvJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JhZGlvJywgUmFkaW8pO1xuICAgIEFraWxpLmNvbXBvbmVudCgncmFkaW8tYnV0dG9uJywgUmFkaW9CdXR0b24pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pdGVyYWJsZSA9IHRoaXMuZWwuaGFzQXR0cmlidXRlKCdpbicpO1xuICB9XG5cbiAgY2hhbmdlZEluKHZhbHVlKSB7XG4gICAgc3VwZXIuY2hhbmdlZEluLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5zZXROYW1lcyh0aGlzLmF0dHJzLm5hbWUpO1xuICB9XG5cbiAgY2hhbmdlZE5hbWUobmFtZSkge1xuICAgIHRoaXMuc2V0TmFtZXMobmFtZSk7XG4gIH1cblxuICBjaGFuZ2VkVmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5pdGVyYWJsZSAmJiBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLmdldFJhZGlvVmFsdWUoKTtcblxuICAgICAgICBpZih2YWx1ZSA9PT0gdGhpcy5wcmV2VmFsdWUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByZXZWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmF0dHJzLm9uUmFkaW8udHJpZ2dlcih2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc29sdmVkKCkge1xuICAgIHRoaXMuc2V0TmFtZXModGhpcy5hdHRycy5uYW1lKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCd2YWx1ZScpICYmIHRoaXMuc2V0VmFsdWUodGhpcy5hdHRycy52YWx1ZSk7XG4gIH1cblxuICBzZXROYW1lcyhuYW1lKSB7XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbignaW5wdXRbdHlwZT1yYWRpb10nKTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNoaWxkcmVuW2ldLmVsLnNldEF0dHJpYnV0ZSgnbmFtZScsIG5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgaWYodmFsdWUgPT09IHRoaXMucHJldlZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHByZXYgPSB0aGlzLnByZXZWYWx1ZTtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuICAgIGxldCBpc1RydWUgPSBmYWxzZTtcblxuICAgIHRoaXMucHJldlZhbHVlID0gdmFsdWU7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcmFkaW8gPSBjaGlsZHJlbltpXTtcbiAgICAgIGxldCBpc1NlbGVjdGVkID0gcmFkaW8uZWwudmFsdWUgPT09IHZhbHVlO1xuXG4gICAgICBpc1NlbGVjdGVkICYmIChpc1RydWUgPSB0cnVlKTtcbiAgICAgIHJhZGlvLnNldENoZWNrZWQoaXNTZWxlY3RlZCk7XG4gICAgfVxuXG4gICAgaWYoIWlzVHJ1ZSkge1xuICAgICAgaWYodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgaWYocHJldiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmF0dHJzLm9uUmFkaW8udHJpZ2dlcih2YWx1ZSk7XG4gIH1cblxuICBnZXRSYWRpb1ZhbHVlKCkge1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oJ2lucHV0W3R5cGU9cmFkaW9dJyk7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcmFkaW8gPSBjaGlsZHJlbltpXTtcblxuICAgICAgaWYocmFkaW8uZWwuY2hlY2tlZCkge1xuICAgICAgICByZXR1cm4gcmFkaW8uZWwudmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogVGhlIHJhZGlvIGl0ZW0gY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBSYWRpb0J1dHRvbiBleHRlbmRzIExvb3Age1xuICBzdGF0aWMgdGVtcGxhdGUgPSBgPGxhYmVsPjxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIlxcJHt0aGlzLnZhbHVlfVwiLz5cXCR7dGhpcy5fX2NvbnRlbnR9PC9sYWJlbD5gO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxuXG4gIGNoYW5nZWRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0UmFkaW9WYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLnNldFJhZGlvVmFsdWUodGhpcy5hdHRycy52YWx1ZSk7XG4gIH1cblxuICBzZXRSYWRpb1ZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5zY29wZS52YWx1ZSA9IHZhbHVlO1xuICB9XG59XG5cblJhZGlvLlJhZGlvQnV0dG9uID0gUmFkaW9CdXR0b247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvcmFkaW8uanMiLCJpbXBvcnQgRm9yLCB7IExvb3AgfSBmcm9tICcuL2Zvci5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydtdWx0aXBsZSddO1xuICBzdGF0aWMgZXZlbnRzID0gWydjaGFuZ2UnXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnc2VsZWN0JywgU2VsZWN0KTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ29wdGlvbicsIE9wdGlvbik7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLml0ZXJhdG9yVGFnTmFtZSA9ICdvcHRpb24nO1xuICAgIHRoaXMuaXNNdWx0aXBsZSA9IGZhbHNlO1xuICB9XG5cbiAgY2hhbmdlZE11bHRpcGxlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRNdWx0aXBsZSh2YWx1ZSk7XG4gIH1cblxuICBjaGFuZ2VkQ29udGVudCh2YWx1ZSkge1xuICAgIHRoaXMuc2V0Q29udGVudCh2YWx1ZSk7XG4gIH1cblxuICBjaGFuZ2VkSW4odmFsdWUpIHtcbiAgICBzdXBlci5jaGFuZ2VkSW4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLmRyYXdTZWxlY3QoKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmVsLmNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKTtcbiAgICB9KTtcbiAgfVxuICBcbiAgY29tcGlsZWQoKSB7XG4gICAgc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdtdWx0aXBsZScpICYmIHRoaXMuc2V0TXVsdGlwbGUodGhpcy5hdHRycy5tdWx0aXBsZSk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgnY29udGVudCcpICYmIHRoaXMuc2V0Q29udGVudCh0aGlzLmF0dHJzLmNvbnRlbnQpO1xuICAgIHRoaXMuZHJhd1NlbGVjdCgpO1xuICB9XG5cbiAgc2V0TXVsdGlwbGUodmFsdWUpIHtcbiAgICB0aGlzLmlzTXVsdGlwbGUgPSB2YWx1ZTtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUodXRpbHMuY29weSh0aGlzLmVsLmNvbnRlbnQpKSk7XG4gIH1cblxuICBzZXRDb250ZW50KHZhbHVlKSB7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKHZhbHVlKSk7XG4gIH1cblxuICBkcmF3U2VsZWN0KCkge1xuICAgIGxldCBzZWxlY3RlZCA9IFtdO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV0uX19ha2lsaTtcbiAgICAgIGxldCBzZWxlY3Rpb24gPSBvcHRpb24uYXR0cnMuc2VsZWN0ZWQ7XG5cbiAgICAgIGlmKHNlbGVjdGlvbikge1xuICAgICAgICBzZWxlY3RlZC5wdXNoKG9wdGlvbi5lbC52YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbi5lbC5zZWxlY3RlZCA9IHNlbGVjdGlvbjtcbiAgICB9XG5cbiAgICBpZighc2VsZWN0ZWQubGVuZ3RoKSB7XG4gICAgICB0aGlzLnJlZGVmaW5lKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKHNlbGVjdGVkKSk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlSXRlcmF0b3JFbGVtZW50KCkge1xuICAgIGxldCBlbCA9IHN1cGVyLmNyZWF0ZUl0ZXJhdG9yRWxlbWVudCgpO1xuXG4gICAgaWYoIWVsLmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRoaXMuaHRtbC50cmltKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIGluQ29udGVudCh2YWx1ZSkge1xuICAgIGlmKCF0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsLmNvbnRlbnQgPT09IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmVsLmNvbnRlbnQuaW5kZXhPZih2YWx1ZSkgIT0gLTE7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIGlmKCF0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsLnZhbHVlO1xuICAgIH1cblxuICAgIGxldCBjb250ZW50ID0gW107XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXTtcblxuICAgICAgaWYob3B0aW9uLnNlbGVjdGVkKSB7XG4gICAgICAgIGNvbnRlbnQucHVzaChvcHRpb24udmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgZm9ybWF0VmFsdWUodmFsdWUpIHtcbiAgICBpZih0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIGlmKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9ICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKT8gW3ZhbHVlXTogW107XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5sZW5ndGg/IHZhbHVlWzBdOiAnJztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYodHlwZW9mIHZhbHVlID09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmVkZWZpbmUoKSB7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmdldENvbnRlbnQoKSk7XG4gIH1cblxuICBjaGFuZ2VWYWx1ZSh2YWx1ZSkge1xuICAgIGlmKHV0aWxzLmNvbXBhcmUodGhpcy5lbC5jb250ZW50LCB2YWx1ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZihBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdGhpcy5lbC52YWx1ZSA9IHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdO1xuXG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldO1xuXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHZhbHVlLmluZGV4T2Yob3B0aW9uLnZhbHVlKSAhPSAtMTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmVsLnZhbHVlID0gdmFsdWU7XG5cbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gb3B0aW9uLnZhbHVlID09IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZWwuY29udGVudCA9IHZhbHVlO1xuICAgIHRoaXMuYXR0cnMub25DaGFuZ2UuZGlzcGF0Y2goRXZlbnQpO1xuICB9XG59O1xuXG5leHBvcnQgY2xhc3MgT3B0aW9uIGV4dGVuZHMgTG9vcCB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnc2VsZWN0ZWQnXTtcblxuICBfX2dldFBhcnNlZEV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIHJldHVybiB1dGlscy5kZWNvZGVIdG1sRW50aXRpZXMoZXhwcmVzc2lvbik7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGNoYW5nZWRTZWxlY3RlZCh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U2VsZWN0ZWQodmFsdWUpO1xuICB9XG5cbiAgc2V0U2VsZWN0ZWQodmFsdWUpIHtcbiAgICB0aGlzLmVsLnNlbGVjdGVkID0gdmFsdWU7XG4gICAgdGhpcy5mb3IucmVkZWZpbmUoKTtcbiAgfVxufVxuXG5TZWxlY3QuT3B0aW9uID0gT3B0aW9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3NlbGVjdC5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU291cmNlIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnc291cmNlJywgU291cmNlKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3NvdXJjZS5qcyIsImltcG9ydCBUZXh0IGZyb20gJy4vdGV4dC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0YXJlYSBleHRlbmRzIFRleHQge1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgndGV4dGFyZWEnLCBUZXh0YXJlYSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90ZXh0YXJlYS5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhY2sgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0cmFjaycsIFRyYWNrKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RyYWNrLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlbyBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3ZpZGVvJywgVmlkZW8pO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdmlkZW8uanMiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5cbi8qKlxuICogU2NvcGUgY2xhc3MuXG4gKlxuICogQWxsIHByb3BlcnRpZXMgc3RhcnRpbmcgd2l0aCBfXyB3aWxsIG5vdCBiZSB3YXRjaGluZy5cbiAqIFlvdSBjYW4gdXNlIHRoZW0gZm9yIGludGVybmFsIG1hbmlwdWxhdGlvbnMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3BlIHtcbiAgc3RhdGljIG5lc3RlZFdhdGNoaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVsLCBjb21wb25lbnQpIHtcbiAgICB0aGlzLl9fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fX2VsID0gZWw7XG4gICAgdGhpcy5fX2NvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ3Njb3BlJywgbmFtZSk7XG4gIH1cblxuICBnZXQgX191dGlscygpIHtcbiAgICByZXR1cm4gdXRpbHM7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGEgc2NvcGUgdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzdHJpY3Q9ZmFsc2VdIC0gd2l0aG91dCBvYmplY3QgY29weWluZ1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldChrZXlzLCB2YWx1ZSwgc3RyaWN0ID0gZmFsc2UpIHtcbiAgICBpZighQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG5cbiAgICBBa2lsaS51bmlzb2xhdGVkKCgpID0+IHtcbiAgICAgIHN0cmljdCAmJiAodGhpcy5fX2NvbXBvbmVudC5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgPSB0cnVlKTtcbiAgICAgIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMsIChsYXN0LCB2YWwpID0+IHtcbiAgICAgICAgaWYoIWxhc3QpIHtcbiAgICAgICAgICByZXR1cm4gdmFsIHx8IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICBzdHJpY3QgJiYgKHRoaXMuX19jb21wb25lbnQuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nID0gZmFsc2UpO1xuICAgIH0pO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Njb3BlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==