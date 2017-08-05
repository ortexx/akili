/*!
 * Akili is a javascript framework
 * 
 * const Akili = makeItEasy(js + html);
 * 
 * @version 0.3.5
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
              target = _utils2.default.copy(target, false);
              value = target;
            } else if (_akili2.default.joinBindingKeys(parents) != _akili2.default.joinBindingKeys(value.__keys)) {
              target = _utils2.default.copy(target, false);
              value = target;
            }
          }
        } else if (!_this8.__disableProxyRedefining && !(value instanceof _akili2.default.Scope)) {
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
 *  * @example
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGVjYWNhNzBmMzRjMGY1ZDhlOTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FraWxpLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VybC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnQtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcm91dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2EuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lbWJlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5jbHVkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcmFkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZXh0YXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90cmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWRlby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NvcGUuanMiXSwibmFtZXMiOlsiQWtpbGkiLCJvcHRpb25zIiwibmVzdGVkV2F0Y2hpbmciLCJkZWJ1ZyIsIl9faW5pdCIsIl9fY29tcG9uZW50cyIsIl9fYWxpYXNlcyIsIl9fc2NvcGVzIiwiX193aW5kb3ciLCJfX2lzb2xhdGlvbiIsIl9fZXZhbHVhdGlvbiIsIl9faHRtbCIsIndpbmRvdyIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiX19zZXJ2ZXJQcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJfX3NlcnZlclJlbmRlcmluZyIsImh0bWxCb29sZWFuQXR0cmlidXRlcyIsImNvbXBvbmVudHMiLCJkZWNvcmF0b3JzIiwic2VydmljZXMiLCJqb2luQmluZGluZ0tleXMiLCJrZXlzIiwibWFwIiwiZWwiLCJ0b1N0cmluZyIsImpvaW4iLCJhZGRTY29wZSIsInNjb3BlIiwiX19uYW1lIiwiRXJyb3IiLCJnZXRTY29wZSIsIm5hbWUiLCJyZW1vdmVTY29wZSIsImdldEFraWxpUGFyZW50cyIsInRyZWUiLCJhcnIiLCJjaGVjayIsIm5vZGUiLCJwYXJlbnROb2RlIiwiX19ha2lsaSIsInB1c2giLCJzZXRUZW1wbGF0ZSIsInRlbXBsYXRlIiwicmVwbGFjZSIsImlubmVySFRNTCIsImNyZWF0ZVNjb3BlTmFtZSIsImNyZWF0ZVJhbmRvbVN0cmluZyIsInN0ciIsImlzb2xhdGUiLCJmbiIsInJlcyIsInByb3BzIiwiayIsImhhc093blByb3BlcnR5IiwiaSIsImwiLCJwcm9wIiwiaXNEZWxldGVkIiwiY29tcG9uZW50IiwiX19ldmFsdWF0ZUJ5S2V5cyIsInVuZGVmaW5lZCIsInNldFByb3BlcnR5QnlLZXlzIiwibGFzdCIsInZhbCIsInZhbHVlIiwibGVuZ3RoIiwidW5ldmFsdWF0ZWQiLCJldmFsdWF0aW9uIiwidW5pc29sYXRlZCIsImluaXRpYWxpemUiLCJyZWNvbXBpbGUiLCJfX3JlY29tcGlsZSIsImlzUm9vdCIsIl9fcm9vdCIsImNvbXBvbmVudE5hbWUiLCJ0b0Rhc2hDYXNlIiwiZ2V0QXR0cmlidXRlIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwiX0NvbXBvbmVudCIsIkNIRUNLX0FMSUFTRVMiLCJzZWxlY3RvcnMiLCJPYmplY3QiLCJzZWxlY3RvckFsbCIsIm1hdGNoZXMiLCJzZWxlY3RvciIsIkNvbXBvbmVudCIsIl9fY2FuY2VsbGVkIiwiX19jcmVhdGUiLCJjb21waWxlIiwicm9vdCIsImVsZW1lbnRzIiwibmVzdGVkSW5pdGlhbGl6aW5nIiwiY2hpbGRyZW4iLCJjaGlsZCIsInAiLCJfX2NvbXBpbGUiLCJhbGwiLCJ0aGVuIiwiciIsIl9fcmVzb2x2ZSIsImNvbnNvbGUiLCJ3YXJuIiwidW5yZWdpc3RlckNvbXBvbmVudCIsImFsaWFzIiwidW5yZWdpc3RlckFsaWFzIiwiaXNvbGF0ZUFycmF5UHJvdG90eXBlIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwia2V5Iiwib2xkIiwiX19pc1Byb3h5IiwiYXBwbHkiLCJpc29sYXRlV2luZG93RnVuY3Rpb25zIiwic2V0VGltZW91dCIsInNldEludGVydmFsIiwiY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24iLCJjb25zdHJ1Y3RvciIsImlzb2xhdGVFdmVudHMiLCJFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmUiLCJfX2FraWxpTGlzdGVuZXJzIiwiYXJndW1lbnRzIiwiYXJncyIsInNsaWNlIiwiY2FsbCIsImxpbmsiLCJsaXN0ZW5lciIsInNwbGljZSIsInBvcyIsImNhbGxiYWNrIiwiaXNvbGF0ZUZ1bmN0aW9uIiwiY29udGV4dCIsIm9GbiIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImVycm9ySGFuZGxpbmciLCJ0cmlnZ2VySW5pdCIsInN0YXR1cyIsInN0eWxlIiwidmlzaWJpbGl0eSIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsInNlcnZlclJlbmRlcmluZyIsInNlcnZlciIsImdldCIsImRhdGEiLCJpbml0IiwicXVlcnlTZWxlY3RvciIsImNoYW5nZVN0YXRlIiwiY2F0Y2giLCJlcnIiLCJkZWluaXQiLCJkZWZpbmUiLCJFdmVudEVtaXR0ZXIiLCJTY29wZSIsInV0aWxzIiwiQSIsIkF1ZGlvIiwiQ29udGVudCIsIkZvciIsIkVtYmVkIiwiSWYiLCJJbmNsdWRlIiwiSW5wdXQiLCJJZnJhbWUiLCJJbWFnZSIsIlJhZGlvIiwiUm91dGUiLCJTZWxlY3QiLCJTb3VyY2UiLCJUZXh0IiwiVGV4dGFyZWEiLCJUcmFjayIsIlVybCIsIlZpZGVvIiwicmVxdWVzdCIsInJvdXRlciIsInVybEF0dHJpYnV0ZSIsInVybCIsInNldFVybCIsImF0dHJzIiwiZXZhbHVhdGlvblJlZ2V4IiwiZXZhbHVhdGlvblJlZ2V4R2xvYmFsIiwiUmVnRXhwIiwic291cmNlIiwic3lzdGVtQXR0cmlidXRlcyIsImV4cHJlc3Npb24iLCJldmVudCIsImV2YWwiLCJfX2lzTW91bnRlZCIsIl9faXNDb21waWxlZCIsIl9fcHJldmVudCIsIl9fYmluZGluZ3MiLCJfX2V2YWx1YXRpbmdFdmVudCIsIl9fcmVjb21waWxpbmciLCJfX2NvbXBpbGluZyIsIl9fZGlzYWJsZVByb3h5IiwiX19jaGlsZHJlbiIsIl9fcGFyZW50IiwiX19wYXJlbnRzIiwiX19hdHRycyIsIl9fYXR0cmlidXRlT2YiLCJfX2V2YWx1YXRpb25Db21wb25lbnQiLCJfX3NldEV2ZW50cyIsIl9fc2V0UGFyZW50cyIsIl9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMiLCJfX2RlZmluZUF0dHJpYnV0ZXMiLCJfX2luaXRpYWxpemUiLCJjcmVhdGVkIiwiY29udHJvbCIsIl9fY29udHJvbEF0dHJpYnV0ZXMiLCJfX2V2YWx1YXRlUGFyZW50IiwibmV3UGFyZW50IiwiX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXMiLCJpbnRlcnBvbGF0ZSIsInBhcmVudCIsIm5vZGVUeXBlIiwiX19pbml0aWFsaXplTm9kZSIsIm5vZGVWYWx1ZSIsIl9fZXZhbHVhdGUiLCJjaGlsZE5vZGVzIiwib25Db21waWxlZCIsInRyaWdnZXIiLCJjb21waWxlZCIsInRlbXBsYXRlVXJsIiwiX19jb250ZW50Iiwib25SZWNvbXBpbGVkIiwicmVjb21waWxlZCIsIm9uUmVzb2x2ZWQiLCJyZXNvbHZlZCIsIl9fc2NvcGUiLCJfc2NvcGUiLCJhc3NpZ24iLCJjb250cm9sQXR0cmlidXRlcyIsImV2ZW50cyIsIl9fZXZlbnRzIiwiX19uZXN0ZWRXYXRjaGluZyIsIl9fbmVzdGVkT2JzZXJ2ZSIsIl9fb2JzZXJ2ZSIsImJvb2xlYW5BdHRyaWJ1dGVzIiwiY29uY2F0Iiwic2V0QXR0ciIsImF0dHJpYnV0ZXMiLCJpbmRleE9mIiwibm9kZU5hbWUiLCJoYXNBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJldiIsInRlc3QiLCJwYXJlbnRzIiwiZXZhbHVhdGVQYXJlbnQiLCJ0cmFuc3BhcmVudCIsIl9fZGV0YWNoIiwiX19hZGRDaGlsZCIsInNldFByb3RvdHlwZU9mIiwiX19wcm9wZXJ0aWVzIiwiZ2V0UHJvcGVydHlCeUtleXMiLCJjb21wYXJlUHJldmlvdXNWYWx1ZSIsImNvcHkiLCJfX2dldE5vZGVQcm9wZXJ0eSIsImNvdW50ZXIiLCJhdHRyaWJ1dGVWYWx1ZSIsIl9fY29tcG9uZW50IiwiY29tIiwiX19leHByZXNzaW9uIiwiQXR0ciIsIm0iLCJkIiwiZXZhbHVhdGUiLCJleGlzdGluZ0JpbmRpbmdzIiwicGFyc2VWYWx1ZSIsIl9fZ2V0UGFyc2VkRXhwcmVzc2lvbiIsImxpc3QiLCJwYXJzZSIsImhhc2giLCJrZXlzU3RyaW5nIiwibm90QmluZGluZyIsInBhcmVudFZhbHVlIiwiZXZhbENvbXBvbmVudCIsImlzU2NvcGVQcm94eSIsImJpbmQiLCJfX2dldEJvdW5kTm9kZSIsIl9fYmluZCIsIl9fc2V0Tm9kZVByb3BlcnR5IiwibWFrZUF0dHJpYnV0ZVZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsImUiLCJpc0Jvb2xlYW5BdHRyaWJ1dGUiLCJfX2hhc0JpbmRpbmdzIiwiY2xlYXJBdHRyaWJ1dGUiLCJfX2F0dHJpYnV0ZU9uIiwiX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyIiwidG9DYW1lbENhc2UiLCJvbkNoYW5nZWQiLCJjaGFuZ2VkIiwiY2FtZWxLZXkiLCJ0b1VwcGVyQ2FzZSIsImZuTmFtZSIsImV2Rm5OYW1lIiwiZWxlbWVudCIsIl9fZWxlbWVudCIsImF0dHIiLCJ3aXRob3V0UGFyZW50cyIsImxhc3RQcm9wcyIsInByb3BzTGVuZ3RoIiwiZWxFdmFsdWF0ZSIsIl9fZ2V0QmluZCIsIl9fZGF0YSIsImMiLCJfX2NoZWNrTm9kZVByb3BlcnR5Q2hhbmdpbmciLCJfX2V2YWx1YXRlTm9kZSIsIl9rIiwiX3Byb3AiLCJ1bmJpbmQiLCJvYmoiLCJfa2V5cyIsIl9fa2V5cyIsIl9pc0RlbGV0ZWQiLCJoYXNLZXkiLCJzaGlmdCIsImhhc1Byb3BlcnR5QnlLZXlzIiwiX19ldmFsdWF0ZU5lc3RlZCIsIl9fdW5iaW5kIiwiZGVsZXRlUHJvcGVydHlCeUtleXMiLCJleGVjIiwiX19jaGVja0V2YWx1YXRpb24iLCJhdHRyaWJ1dGVPZiIsImV2ZW50TmFtZSIsIl9fZXZlbnQiLCJlbWl0dGVyIiwiX19ldmFsdWF0ZUV2ZW50IiwiX19pbml0aWFsaXplZCIsIl9faW5pdGlhbGl6ZUF0dHJpYnV0ZSIsImNoYW5nZUF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZU5vZGUiLCJfX3VuYmluZEJ5Tm9kZXMiLCJQcm94eSIsInRhcmdldCIsInNldCIsImF0dHJLZXkiLCJkZWxldGVQcm9wZXJ0eSIsIl9faXNTeXN0ZW1LZXkiLCJyZWFsVGFyZ2V0IiwiZ2V0T3duUHJvcGVydHlUYXJnZXQiLCJpc1BsYWluT2JqZWN0IiwiZ2V0RW51bWVyYWJsZVByb3BlcnR5VGFyZ2V0IiwiX19iaW5kTm9kZSIsIl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0Iiwic3RhcnRLZXlzIiwib2JzZXJ2ZSIsIl9fdGFyZ2V0IiwiX19kaXNhYmxlUHJveHlSZWRlZmluaW5nIiwiaXNvbGF0aW9uS2V5IiwicGFyZW50S2V5c1N0cmluZyIsIl9fZGVsZXRlTm9kZVByb3BlcnR5Iiwibm9kZXMiLCJfX2NsZWFyRW1wdHlCaW5kaW5ncyIsImNsZWFyIiwiX19yZW1vdmUiLCJvblJlbW92ZWQiLCJyZW1vdmVkIiwiX19zcGxpY2VDaGlsZCIsIl9fcmVtb3ZlQ2hpbGRyZW4iLCJmaW5kIiwiZmluZEFsbCIsImxldmVscyIsImxldmVsIiwicmlnaHQiLCJsZXZlbEVsZW1lbnRzIiwicmV2ZXJzZSIsIl9fZ2V0UGFyZW50IiwiX19nZXRDaGlsZHJlbiIsIl9fZ2V0TmVhciIsImFwcGVuZENoaWxkIiwiX19lbXB0eSIsIl9fZGVzdHJveSIsImNsYXNzIiwiY2xhc3NlcyIsInN0eWxlcyIsImZpbHRlciIsImhhbmRsZXIiLCJpc0FycmF5IiwiaXRlbSIsIm1hdGNoIiwic29ydCIsIm9yZGVyIiwiYSIsImIiLCJEYXRlIiwiZ2V0VGltZSIsIm5leHQiLCJhViIsImJWIiwibmVzdGVkIiwiY29tcGFyZSIsImN1cnJlbnQiLCJwcmV2aW91cyIsInByZXZpb3VzQ29weSIsImN1cnJlbnRDb3B5IiwiZW5jb2RlSHRtbEVudGl0aWVzIiwiaHRtbCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlY29kZUh0bWxFbnRpdGllcyIsIm9iamVjdCIsInJlZHVjZSIsIm8iLCJoYXMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsInByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJjbGVhclNjb3BlUHJveHkiLCJNYXRoIiwicmFuZG9tIiwic3Vic3RyaW5nIiwiUmVxdWVzdCIsImJhc2VVcmwiLCJkZWZhdWx0cyIsInN0YXR1c0Vycm9yc1BhdHRlcm4iLCJyZWplY3QiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9uU3RhcnQiLCJ0cmFuc2Zvcm1CZWZvcmUiLCJvcGVuIiwibWV0aG9kIiwidXNlciIsInBhc3N3b3JkIiwiaGVhZGVycyIsImpzb24iLCJib2R5IiwicmVzcG9uc2VUeXBlIiwiZm9ybSIsImNyZWF0ZUZvcm1EYXRhIiwidGltZW91dCIsIndpdGhDcmVkZW50aWFscyIsInNldFJlcXVlc3RIZWFkZXIiLCJwYXJhbXMiLCJwYXJhbXNUb1F1ZXJ5Iiwib25Qcm9ncmVzcyIsIm9ucHJvZ3Jlc3MiLCJvbmxvYWQiLCJyZXNwb25zZSIsInRyYW5zZm9ybUFmdGVyIiwib250aW1lb3V0Iiwib25lcnJvciIsInNlbmQiLCJzZXAiLCJlcSIsImtzIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidiIsIm9wdCIsInF1ZXJ5IiwiYW1wcyIsInNwbGl0IiwiZXFzIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwibmFtZXNwYWNlIiwiZmQiLCJGb3JtRGF0YSIsImFwcGVuZCIsInRvSVNPU3RyaW5nIiwiX19pbnN0YW5jZXMiLCJhZGRJbnN0YW5jZSIsImluc3RhbmNlIiwicmVtb3ZlSW5zdGFuY2UiLCJ2YWx1ZUtleSIsInNldFZhbHVlIiwic2V0Rm9jdXMiLCJmb2N1cyIsInNldEVsZW1lbnRGb2N1cyIsInNldEVsZW1lbnRCbHVyIiwiYmx1ciIsIkxvb3AiLCJfX2l0ZXJhdG9yIiwiX19rZXkiLCJfX3ZhbHVlIiwiX19pbmRleCIsIl9fY29tcGFyaXNvblZhbHVlIiwiaXRlcmF0b3JzIiwiaXRlcmF0b3JSZWYiLCJpdGVyYXRvck91dGVySFRNTCIsImRyYXciLCJjcmVhdGVJdGVyYXRvciIsImluIiwibWFzayIsIm5leHRTaWJsaW5nIiwib3V0ZXJIVE1MIiwiY29udGVudCIsImZpcnN0Q2hpbGQiLCJpbmRleCIsImZvdW5kIiwiX19oYXNoIiwiaXRlcmF0b3IiLCJjVmFsdWUiLCJjb21wYXJzaW9uIiwiY0NvcHkiLCJzZXRJbmRleCIsInNldEtleSIsImNyZWF0ZUl0ZXJhdG9yRWxlbWVudCIsImluc2VydEJlZm9yZSIsIndyaXRhYmxlIiwiZVZhbHVlIiwiaW5kZXhLZXlzIiwibGFzdEVsZW1lbnQiLCJsb29wIiwiaXRlcmF0ZSIsImZvciIsImlzRm9yIiwiY2FuY2VsIiwiX19zZXQiLCJ0cmFuc2l0aW9uIiwic3RhdGUiLCJwYXRoIiwiZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uIiwiX190cmFuc2l0aW9uIiwibG9hZGVkIiwiZW1wdHkiLCJmb3JjZSIsImluRXZhbHVhdGluZyIsIl9FdmVudCIsInR5cGUiLCJUcmFuc2l0aW9uIiwicm91dGVzIiwic3RhdGVzIiwicm91dGUiLCJoYXNoTW9kZSIsIl9fcmVkaXJlY3RzIiwiX19vcHRpb25zIiwiX19wYXJhbVJlZ2V4IiwiX19yb3V0ZVNlbGVjdG9yIiwiYWRkIiwicGF0dGVybiIsImRlZmF1bHRPcHRpb25zIiwiYWJzdHJhY3QiLCJzZXRTdGF0ZSIsImdldFN0YXRlIiwiY3JlYXRlU3RhdGVVcmwiLCJyZWxvYWQiLCJnZXRVcmwiLCJiYWNrIiwiaGlzdG9yeSIsImdvIiwiZm9yd2FyZCIsImxvY2F0aW9uIiwiZXJyb3IiLCJwdXNoU3RhdGUiLCJkZWZhdWx0VXJsIiwib2xkUHVzaFN0YXRlIiwiX19vblN0YXRlQ2hhbmdlSGFuZGxlciIsInBvcCIsInBhcmVudE5hbWUiLCJmdWxsUGF0dGVybiIsInNwbGl0U2xhc2hlcyIsInJlbW92ZVN0YXRlIiwic2V0SGFzaFVybCIsInNldEhpc3RvcnlVcmwiLCJnZXRIYXNoVXJsIiwiZ2V0SGlzdG9yeVVybCIsInBhdGhuYW1lIiwic2VhcmNoIiwiZ2V0VXJsUXVlcnkiLCJnZXRIYXNoVXJsUXVlcnkiLCJnZXRIaXN0b3J5VXJsUXVlcnkiLCJwYXJhbXNGcm9tUXVlcnkiLCJmIiwiZ2V0UGF0dGVybkNvbnRlbnQiLCJ1cmxQYXR0ZXJuIiwicmVnZXgiLCJpc0luY2x1ZGVkIiwiaXNBY3RpdmVTdGF0ZSIsImluY2x1ZGVzIiwiaW5BY3RpdmVTdGF0ZSIsImdldFJvdXRlIiwiZ2V0QXJyYXlQYXR0ZXJuQ29udGVudCIsImdldFN0YXRlc0J5TGV2ZWwiLCJfX2Rpc2FibGVDaGFuZ2UiLCJwcmV2VHJhbnNpdGlvbiIsIm9uRW5kIiwic2V0UGF0aCIsImhhc1N0YXRlIiwiaXNEaWZmZXJlbnQiLCJwcmV2IiwiaXNIaXN0b3J5IiwiaXNSZWxvYWQiLCJzZXRUcmFuc2l0aW9uIiwic2F2ZVNjcm9sbFBvc2l0aW9uIiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImlzVXJsIiwicmVzZXRIcmVmIiwic2V0UGFyYW1zIiwic2V0UXVlcnkiLCJzZXRIYXNoIiwic2V0UmVsb2FkIiwicHJldmVudERlZmF1bHQiLCJzZXRPcHRpb25zIiwiaHJlZiIsImdldENvbXB1dGVkU3R5bGUiLCJkaXNwbGF5IiwicmFuZ2UiLCJjcmVhdGVSYW5nZSIsInNlbGVjdGlvbiIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJFbHNlSWYiLCJFbHNlIiwiYWN0aXZlIiwicmVjcmVhdGUiLCJpc0NvbXBpbGVkIiwic2V0UmVjcmVhdGlvbiIsImlzIiwiY29tcGlsYXRpb24iLCJuZXh0RWxlbWVudFNpYmxpbmciLCJyZXN1bHQiLCJzZXRBY3Rpdml0eSIsImNvbm5lY3Rpb24iLCJnZXRUZW1wbGF0ZSIsImFib3J0Iiwib25Mb2FkIiwib25FcnJvciIsImlzQ2hlY2tib3giLCJpc1JhZGlvIiwic2V0Q2hlY2tlZCIsImNoZWNrZWQiLCJwcmV2Q2hlY2tlZCIsIm9uQ2hhbmdlIiwiZGlzcGF0Y2giLCJFdmVudCIsImNoYW5nZVJhZGlvIiwicmFkaW8iLCJPYmplY3RzIiwiUmFkaW9CdXR0b24iLCJpdGVyYWJsZSIsInNldE5hbWVzIiwiZ2V0UmFkaW9WYWx1ZSIsInByZXZWYWx1ZSIsIm9uUmFkaW8iLCJpc1RydWUiLCJpc1NlbGVjdGVkIiwic2V0UmFkaW9WYWx1ZSIsIk9wdGlvbiIsIml0ZXJhdG9yVGFnTmFtZSIsImlzTXVsdGlwbGUiLCJzZXRNdWx0aXBsZSIsInNldENvbnRlbnQiLCJkcmF3U2VsZWN0IiwiZ2V0Q29udGVudCIsIm11bHRpcGxlIiwiY2hhbmdlVmFsdWUiLCJmb3JtYXRWYWx1ZSIsInNlbGVjdGVkIiwib3B0aW9uIiwicmVkZWZpbmUiLCJ0cmltIiwic2V0U2VsZWN0ZWQiLCJfX2VsIiwic3RyaWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2REE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBbENBOzs7Ozs7Ozs7QUFvQ0EsSUFBTUEsUUFBUSxFQUFkOztBQUVBQSxNQUFNQyxPQUFOLEdBQWdCO0FBQ2RDLGtCQUFnQixJQURGO0FBRWRDLFNBQU87QUFGTyxDQUFoQjs7QUFLQUgs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Szs7Ozs7Ozs7Ozs7Ozs7O0FDSHJCOzs7O0FBQ0E7Ozs7Ozs7O0FBRUE7Ozs7OztJQU1xQnBCLEs7QUFHbkIsaUJBQVlqSSxJQUFaLEVBQWtCUixFQUFsQixFQUFzQm1DLFNBQXRCLEVBQWlDO0FBQUE7O0FBQy9CLFNBQUs5QixNQUFMLEdBQWNHLElBQWQ7QUFDQSxTQUFLNm5CLElBQUwsR0FBWXJvQixFQUFaO0FBQ0EsU0FBS3NQLFdBQUwsR0FBbUJuTixTQUFuQjtBQUNBbkMsT0FBR3FPLFlBQUgsQ0FBZ0IsT0FBaEIsRUFBeUI3TixJQUF6QjtBQUNEOzs7Ozs7QUFNRDs7Ozs7OzswQkFPTVYsSSxFQUFNMkMsSyxFQUF1QjtBQUFBOztBQUFBLFVBQWhCNmxCLE1BQWdCLHVFQUFQLEtBQU87O0FBQ2pDLFVBQUcsQ0FBQ2xqQixNQUFNMFIsT0FBTixDQUFjaFgsSUFBZCxDQUFKLEVBQXlCO0FBQ3ZCQSxlQUFPLENBQUNBLElBQUQsQ0FBUDtBQUNEOztBQUVELHNCQUFNK0MsVUFBTixDQUFpQixZQUFNO0FBQ3JCeWxCLG1CQUFXLE1BQUtoWixXQUFMLENBQWlCMEYsd0JBQWpCLEdBQTRDLElBQXZEO0FBQ0Esd0JBQU0xUyxpQkFBTixDQUF3QnhDLElBQXhCLFNBQW9DLFVBQUN5QyxJQUFELEVBQU9DLEdBQVAsRUFBZTtBQUNqRCxjQUFHLENBQUNELElBQUosRUFBVTtBQUNSLG1CQUFPQyxPQUFPLEVBQWQ7QUFDRDs7QUFFRCxpQkFBT0MsS0FBUDtBQUNELFNBTkQ7QUFPQTZsQixtQkFBVyxNQUFLaFosV0FBTCxDQUFpQjBGLHdCQUFqQixHQUE0QyxLQUF2RDtBQUNELE9BVkQ7QUFXRDs7O3dCQTNCYTtBQUNaO0FBQ0Q7Ozs7OztrQkFaa0J2TSxLIiwiZmlsZSI6ImFraWxpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4ZWNhY2E3MGYzNGMwZjVkOGU5NSIsIi8qKlxuICogSmF2YXNjcmlwdCBmcmFtZXdvcmtcbiAqXG4gKiBjb25zdCBBa2lsaSA9IG1ha2VJdEVhc3koanMgKyBodG1sKTtcbiAqXG4gKiBAYXV0aG9yIEFsZXhhbmRyIEJhbGFzeWFuIDxteXdlYnN0cmVldEBnbWFpbC5jb20+XG4gKiBAbGluayBodHRwOi8vYWtpbGlqcy5jb21cbiAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50LmpzJztcbmltcG9ydCBJZiBmcm9tICcuL2NvbXBvbmVudHMvaWYuanMnO1xuaW1wb3J0IEZvciBmcm9tICcuL2NvbXBvbmVudHMvZm9yLmpzJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdC5qcyc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9jb21wb25lbnRzL2lucHV0LmpzJztcbmltcG9ydCBSYWRpbyBmcm9tICcuL2NvbXBvbmVudHMvcmFkaW8uanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9jb21wb25lbnRzL3RleHQuanMnO1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJy4vY29tcG9uZW50cy90ZXh0YXJlYS5qcyc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuL2NvbXBvbmVudHMvY29udGVudC5qcyc7XG5pbXBvcnQgSW5jbHVkZSBmcm9tICcuL2NvbXBvbmVudHMvaW5jbHVkZS5qcyc7XG5pbXBvcnQgSWZyYW1lIGZyb20gJy4vY29tcG9uZW50cy9pZnJhbWUuanMnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vY29tcG9uZW50cy9pbWFnZS5qcyc7XG5pbXBvcnQgRW1iZWQgZnJvbSAnLi9jb21wb25lbnRzL2VtYmVkLmpzJztcbmltcG9ydCBBdWRpbyBmcm9tICcuL2NvbXBvbmVudHMvYXVkaW8uanMnO1xuaW1wb3J0IFZpZGVvIGZyb20gJy4vY29tcG9uZW50cy92aWRlby5qcyc7XG5pbXBvcnQgVHJhY2sgZnJvbSAnLi9jb21wb25lbnRzL3RyYWNrLmpzJztcbmltcG9ydCBTb3VyY2UgZnJvbSAnLi9jb21wb25lbnRzL3NvdXJjZS5qcyc7XG5pbXBvcnQgT2JqZWN0cyBmcm9tICcuL2NvbXBvbmVudHMvb2JqZWN0LmpzJztcbmltcG9ydCBSb3V0ZSBmcm9tICcuL2NvbXBvbmVudHMvcm91dGUuanMnO1xuaW1wb3J0IFVybCBmcm9tICcuL2NvbXBvbmVudHMvdXJsLmpzJztcbmltcG9ydCBBIGZyb20gJy4vY29tcG9uZW50cy9hLmpzJztcbmltcG9ydCBTY29wZSBmcm9tICcuL3Njb3BlLmpzJztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4vc2VydmljZXMvcm91dGVyLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcblxuY29uc3QgQWtpbGkgPSB7fTtcblxuQWtpbGkub3B0aW9ucyA9IHtcbiAgbmVzdGVkV2F0Y2hpbmc6IHRydWUsXG4gIGRlYnVnOiB0cnVlXG59O1xuXG5Ba2lsaS5fX2luaXQgPSBudWxsO1xuQWtpbGkuX19jb21wb25lbnRzID0ge307XG5Ba2lsaS5fX2FsaWFzZXMgPSB7fTtcbkFraWxpLl9fc2NvcGVzID0ge307XG5Ba2lsaS5fX3dpbmRvdyA9IHt9O1xuQWtpbGkuX19pc29sYXRpb24gPSBudWxsO1xuQWtpbGkuX19ldmFsdWF0aW9uID0gbnVsbDtcbkFraWxpLl9faHRtbCA9IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5Ba2lsaS5fX3NlcnZlclByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbkFraWxpLl9fc2VydmVyUmVuZGVyaW5nID0gZmFsc2U7XG5cbkFraWxpLmh0bWxCb29sZWFuQXR0cmlidXRlcyA9IFtcbiAgJ2Rpc2FibGVkJywgJ2NvbnRlbnRlZGl0YWJsZScsICdoaWRkZW4nXG5dO1xuXG5Ba2lsaS5jb21wb25lbnRzID0ge307XG5Ba2lsaS5kZWNvcmF0b3JzID0ge307XG5Ba2lsaS5zZXJ2aWNlcyA9IHt9O1xuXG4vKipcbiAqIEpvaW4gYmluZGluZyBrZXlzXG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBiaW5kaW5nIGtleXNcbiAqL1xuQWtpbGkuam9pbkJpbmRpbmdLZXlzID0gZnVuY3Rpb24oa2V5cykge1xuICByZXR1cm4ga2V5cy5tYXAoZWwgPT4gZWwudG9TdHJpbmcoKSkuam9pbignLicpO1xufTtcblxuLyoqXG4gKiBBZGQgc2NvcGUgdG8gdGhlIHNjb3BlcyBsaXN0XG4gKlxuICogQHBhcmFtIHNjb3BlXG4gKi9cbkFraWxpLmFkZFNjb3BlID0gZnVuY3Rpb24oc2NvcGUpIHtcbiAgaWYodGhpcy5fX3Njb3Blc1tzY29wZS5fX25hbWVdKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBTY29wZSBuYW1lICR7c2NvcGUuX19uYW1lfSBhbHJlYWR5IGV4aXN0c2ApO1xuICB9XG5cbiAgdGhpcy5fX3Njb3Blc1tzY29wZS5fX25hbWVdID0gc2NvcGU7XG59O1xuXG4vKipcbiAqIEdldCBzY29wZSBmcm9tIHRoZSBzY29wZXMgbGlzdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc2NvcGUgbmFtZVxuICogQHJldHVybnMge1Njb3BlfVxuICovXG5Ba2lsaS5nZXRTY29wZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuX19zY29wZXNbbmFtZV07XG59O1xuXG4vKipcbiAqIERlbGV0ZSBzY29wZSBmcm9tIHRoZSBzY29wZXMgbGlzdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc2NvcGUgbmFtZVxuICovXG5Ba2lsaS5yZW1vdmVTY29wZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgdGhpcy5fX3Njb3Blc1tuYW1lXSA9IG51bGw7XG4gIGRlbGV0ZSB0aGlzLl9fc2NvcGVzW25hbWVdO1xufTtcblxuLyoqXG4gKiBHZXQgYWxsIGVsZW1lbnRzIHdpdGggYXR0YWNoZWQgQWtpbGkgY29tcG9uZW50c1xuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFt0cmVlPXRydWVdIC0gcmV0dXJuIGFycmF5IG9mIHRoZSBwYXJlbnRzIGlmIHRydWUsIGNsb3Nlc3QgcGFyZW50IGlmIGZhbHNlXG4gKiBAcmV0dXJucyB7QXJyYXl8SFRNTEVsZW1lbnR8bnVsbH1cbiAqL1xuQWtpbGkuZ2V0QWtpbGlQYXJlbnRzID0gZnVuY3Rpb24gKGVsLCB0cmVlID0gdHJ1ZSkge1xuICBsZXQgYXJyID0gW107XG5cbiAgZnVuY3Rpb24gY2hlY2sobm9kZSkge1xuICAgIGlmKCFub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZihub2RlLnBhcmVudE5vZGUuX19ha2lsaSkge1xuICAgICAgYXJyLnB1c2gobm9kZS5wYXJlbnROb2RlKTtcblxuICAgICAgaWYoIXRyZWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrKG5vZGUucGFyZW50Tm9kZSk7XG4gIH1cblxuICBjaGVjayhlbCk7XG5cbiAgcmV0dXJuIHRyZWU/IGFycjogYXJyWzBdO1xufTtcblxuLyoqXG4gKiBTZXQgZWxlbWVudCBpbm5lciBodG1sIHdpdGggY29udGVudCByZXBsYWNpbmdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcIjxpPkhlbGxvPC9pPjxiPldvcmxkPC9iPlwiXG4gKiBlbC5pbm5lckhUTUwgPSBcIjxiPldvcmxkPC9iPlwiO1xuICogQWtpbGkuc2V0VGVtcGxhdGUoZWwsIFwiPGk+SGVsbG88L2k+JHt0aGlzLl9fY2hpbGRyZW59XCIpO1xuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbkFraWxpLnNldFRlbXBsYXRlID0gZnVuY3Rpb24oZWwsIHRlbXBsYXRlKSB7XG4gIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZSgvXFwkeygoKD8hXFwkeylcXHMqdGhpc1xcLl9fY29udGVudFxccyopKil9LywgZWwuaW5uZXJIVE1MKTtcbiAgZWwuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG5cbiAgcmV0dXJuIGVsLmlubmVySFRNTDtcbn07XG5cbi8qKlxuICogR2VuZXJhdGUgdW5pcXVlIHNjb3BlIG5hbWVcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5Ba2lsaS5jcmVhdGVTY29wZU5hbWUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHV0aWxzLmNyZWF0ZVJhbmRvbVN0cmluZygxNiwgKHN0cikgPT4ge1xuICAgIHJldHVybiAhIXRoaXMuX19zY29wZXNbc3RyXTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIElzb2xhdGUgZnVuY3Rpb24uXG4gKiBFdmVyeSBzY29wZSB2YXJpYWJsZSBjaGFuZ2UgY2FsbHMgYWNjb3JkaW5nIG5vZGUgZXZhbHVhdGlvbi5cbiAqIEZvciBleGFtcGxlLCBpZiB5b3UgY2hhbmdlIHNvbWUgc2NvcGUgdmFyaWFibGUgaW4gdGhlIGxvb3AgLSBldmFsdWF0aW9uIHdpbGwgYmUgY2FsbGVkIG9uIHRoZSBlYWNoIGNoYW5nZS5cbiAqIEl0IG1heSBiZSBzbG93IGZvciB0aGUgYXBwbGljYXRpb24uXG4gKiBZb3UgY2FuIGlzb2xhdGUgdGhpcyBhY3Rpb24gYW5kIHJ1biBhbGwgZXZhbHVhdGlvbiBwcm9jZXNzIGFmdGVyIHBhc3NlZCBmdW5jdGlvbiBhdCBvbmNlLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkuaXNvbGF0ZSA9IGZ1bmN0aW9uKGZuKSB7XG4gIGlmKHRoaXMuX19pc29sYXRpb24pIHtcbiAgICByZXR1cm4gZm4oKTtcbiAgfVxuXG4gIHRoaXMuX19pc29sYXRpb24gPSB7fTtcblxuICBsZXQgcmVzID0gZm4oKTtcbiAgbGV0IHByb3BzID0gW107XG5cbiAgZm9yKGxldCBrIGluIHRoaXMuX19pc29sYXRpb24pIHtcbiAgICBpZighdGhpcy5fX2lzb2xhdGlvbi5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcHJvcHMucHVzaCh0aGlzLl9faXNvbGF0aW9uW2tdKTtcbiAgfVxuXG4gIHRoaXMuX19pc29sYXRpb24gPSBudWxsO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBwcm9wcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgcHJvcCA9IHByb3BzW2ldO1xuXG4gICAgaWYocHJvcC5pc0RlbGV0ZWQpIHtcbiAgICAgIHByb3AuY29tcG9uZW50Ll9fZXZhbHVhdGVCeUtleXMocHJvcC5rZXlzLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB1dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyhwcm9wLmtleXMsIHByb3AuY29tcG9uZW50LnNjb3BlLCAobGFzdCwgdmFsKSA9PiB7XG4gICAgICBpZighbGFzdCkge1xuICAgICAgICByZXR1cm4gdmFsIHx8IHt9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvcC52YWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb3BzID0gbnVsbDtcblxuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBTdG9wIGV2YWx1YXRpb24gYmVmb3JlIHRoZSBmdW5jdGlvbiBhbmQgY29udGludWUgYWZ0ZXJcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLnVuZXZhbHVhdGVkID0gZnVuY3Rpb24oZm4pIHtcbiAgbGV0IGV2YWx1YXRpb24gPSB0aGlzLl9fZXZhbHVhdGlvbjtcbiAgbGV0IHJlcztcblxuICB0aGlzLl9fZXZhbHVhdGlvbiA9IG51bGw7XG4gIHJlcyA9IGZuKCk7XG4gIHRoaXMuX19ldmFsdWF0aW9uID0gZXZhbHVhdGlvbjtcblxuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBTdG9wIGlzb2xhdGlvbiBiZWZvcmUgdGhlIGZ1bmN0aW9uIGFuZCBjb250aW51ZSBhZnRlclxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkudW5pc29sYXRlZCA9IGZ1bmN0aW9uKGZuKSB7XG4gIGxldCBldmFsdWF0aW9uID0gdGhpcy5fX2lzb2xhdGlvbjtcbiAgbGV0IHJlcztcblxuICB0aGlzLl9faXNvbGF0aW9uID0gbnVsbDtcbiAgcmVzID0gZm4oKTtcbiAgdGhpcy5fX2lzb2xhdGlvbiA9IGV2YWx1YXRpb247XG5cbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucz17fV1cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS5pbml0aWFsaXplID0gZnVuY3Rpb24oZWwsIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgcmVjb21waWxlID0gb3B0aW9ucy5yZWNvbXBpbGU7XG4gIGxldCBjb21wb25lbnQgPSBlbC5fX2FraWxpO1xuXG4gIGlmKGNvbXBvbmVudCkge1xuICAgIGlmKHJlY29tcGlsZSkge1xuICAgICAgY29tcG9uZW50Ll9fcmVjb21waWxlKCk7XG5cbiAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGlzUm9vdCA9IGVsID09PSB0aGlzLl9fcm9vdDtcbiAgbGV0IGNvbXBvbmVudE5hbWUgPSB1dGlscy50b0Rhc2hDYXNlKGVsLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50JykgfHwgZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgbGV0IF9Db21wb25lbnQgPSB0aGlzLl9fY29tcG9uZW50c1tjb21wb25lbnROYW1lXTtcblxuICBDSEVDS19BTElBU0VTOiBpZighX0NvbXBvbmVudCkge1xuICAgIGxldCBzZWxlY3RvcnMgPSBPYmplY3Qua2V5cyh0aGlzLl9fYWxpYXNlcyk7XG5cbiAgICBpZighc2VsZWN0b3JzLmxlbmd0aCkge1xuICAgICAgYnJlYWsgQ0hFQ0tfQUxJQVNFUztcbiAgICB9XG5cbiAgICBsZXQgc2VsZWN0b3JBbGwgPSBzZWxlY3RvcnMuam9pbignLCcpO1xuXG4gICAgaWYoIWVsLm1hdGNoZXMoc2VsZWN0b3JBbGwpKSB7XG4gICAgICBicmVhayBDSEVDS19BTElBU0VTO1xuICAgIH1cblxuICAgIGZvcihsZXQgc2VsZWN0b3IgaW4gdGhpcy5fX2FsaWFzZXMpIHtcbiAgICAgIGlmKCF0aGlzLl9fYWxpYXNlcy5oYXNPd25Qcm9wZXJ0eShzZWxlY3RvcikpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmKGVsLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIF9Db21wb25lbnQgPSB0aGlzLl9fY29tcG9uZW50c1t0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl1dO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZighX0NvbXBvbmVudCAmJiAhaXNSb290KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYoIV9Db21wb25lbnQpIHtcbiAgICBfQ29tcG9uZW50ID0gdGhpcy5Db21wb25lbnQ7XG4gIH1cblxuICBpZihfQ29tcG9uZW50Lm1hdGNoZXMgJiYgIWVsLm1hdGNoZXMoX0NvbXBvbmVudC5tYXRjaGVzKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbXBvbmVudCA9IG5ldyBfQ29tcG9uZW50KGVsLCB7fSk7XG5cbiAgaWYoY29tcG9uZW50Ll9fY2FuY2VsbGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29tcG9uZW50Ll9fY3JlYXRlKCk7XG5cbiAgcmV0dXJuIGNvbXBvbmVudDtcbn07XG5cbi8qKlxuICogQ29tcGlsZSB0aGUgZWxlbWVudFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5Ba2lsaS5jb21waWxlID0gZnVuY3Rpb24ocm9vdCwgb3B0aW9ucyA9IHsgcmVjb21waWxlOiBmYWxzZSB9KSB7ICBcbiAgbGV0IGVsZW1lbnRzID0gW107XG5cbiAgbGV0IG5lc3RlZEluaXRpYWxpemluZyA9IChlbCkgPT4ge1xuICAgIGxldCBjb21wb25lbnQgPSB0aGlzLmluaXRpYWxpemUoZWwsIG9wdGlvbnMpO1xuICAgIGxldCBjaGlsZHJlbiA9IGVsLmNoaWxkcmVuO1xuXG4gICAgY29tcG9uZW50ICYmIGVsZW1lbnRzLnB1c2goY29tcG9uZW50KTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICBuZXN0ZWRJbml0aWFsaXppbmcoY2hpbGQpO1xuICAgIH1cbiAgfTtcblxuICBuZXN0ZWRJbml0aWFsaXppbmcocm9vdCk7XG5cbiAgbGV0IHAgPSBbXTtcblxuICBmb3IobGV0IGkgPSAwLCBsID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGNvbXBvbmVudCA9IGVsZW1lbnRzW2ldO1xuXG4gICAgcC5wdXNoKGNvbXBvbmVudC5fX2NvbXBpbGUoKSk7XG4gIH1cblxuICByZXR1cm4gUHJvbWlzZS5hbGwocCkudGhlbigoKSA9PiB7XG4gICAgbGV0IHIgPSBbXTtcblxuICAgIGZvcihsZXQgaSA9IGVsZW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgY29tcG9uZW50ID0gZWxlbWVudHNbaV07XG5cbiAgICAgIHIucHVzaChjb21wb25lbnQuX19yZXNvbHZlKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLmFsbChyKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIHRoZSBjb21wb25lbnQgb3IgZ2V0IGl0IGlmIGZuIGlzIG5vdCBwYXNzZWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtDb21wb25lbnR9IFtmbl1cbiAqL1xuQWtpbGkuY29tcG9uZW50ID0gZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuICBpZighZm4pIHtcbiAgICByZXR1cm4gdGhpcy5fX2NvbXBvbmVudHNbbmFtZV0gfHwgbnVsbDtcbiAgfVxuXG4gIGlmKHRoaXMuX19jb21wb25lbnRzW25hbWVdICYmIEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICBjb25zb2xlLndhcm4oYENvbXBvbmVudCAke25hbWV9IGFscmVhZHkgd2FzIGFkZGVkYCk7XG4gIH1cblxuICB0aGlzLl9fY29tcG9uZW50c1tuYW1lXSA9IGZuO1xufTtcblxuLyoqXG4gKiBVbnJlZ2lzdGVyIHRoZSBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5Ba2lsaS51bnJlZ2lzdGVyQ29tcG9uZW50ID0gZnVuY3Rpb24obmFtZSkge1xuICBkZWxldGUgdGhpcy5fX2NvbXBvbmVudHNbbmFtZV07XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIHRoZSBzZWxlY3RvciBhbGlhcyBvciBnZXQgaXQgaWYgY29tcG9uZW50IG5hbWUgaXMgbm90IHBhc3NlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciAtIERPTSBzZWxlY3RvclxuICogQHBhcmFtIHtzdHJpbmd9IFtjb21wb25lbnROYW1lXVxuICovXG5Ba2lsaS5hbGlhcyA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBjb21wb25lbnROYW1lID0gJycpIHtcbiAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUudG9Mb3dlckNhc2UoKTtcblxuICBpZighY29tcG9uZW50TmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gfHwgbnVsbDtcbiAgfVxuXG4gIGlmKHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXSAmJiBBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgY29uc29sZS53YXJuKGBBbGlhcyB3aXRoIHNlbGVjdG9yICR7c2VsZWN0b3J9IGFscmVhZHkgd2FzIGFkZGVkYCk7XG4gIH1cblxuICB0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gPSBjb21wb25lbnROYW1lO1xufTtcblxuLyoqXG4gKiBVbnJlZ2lzdGVyIHRoZSBzZWxlY3RvciBhbGlhc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICovXG5Ba2lsaS51bnJlZ2lzdGVyQWxpYXMgPSBmdW5jdGlvbihzZWxlY3Rvcikge1xuICBkZWxldGUgdGhpcy5fX2NvbXBvbmVudHNbc2VsZWN0b3JdO1xufTtcblxuLyoqXG4gKiBJc29sYXRlIGFycmF5IHByb3RvdHlwZSBmdW5jdGlvbnNcbiAqL1xuQWtpbGkuaXNvbGF0ZUFycmF5UHJvdG90eXBlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX193aW5kb3cuQXJyYXkgPSB7IHByb3RvdHlwZToge30gfTtcblxuICBsZXQga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKEFycmF5LnByb3RvdHlwZSk7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgbGV0IG9sZCA9IEFycmF5LnByb3RvdHlwZVtrZXldO1xuXG4gICAgaWYodHlwZW9mIG9sZCAhPSAnZnVuY3Rpb24nIHx8IGtleSA9PSAnY29uc3RydWN0b3InKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB0aGlzLl9fd2luZG93LkFycmF5LnByb3RvdHlwZVtrZXldID0gb2xkO1xuXG4gICAgQXJyYXkucHJvdG90eXBlW2tleV0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBBa2lsaS51bmV2YWx1YXRlZCgoKSA9PiB7XG4gICAgICAgIGlmKCF0aGlzLl9faXNQcm94eSkge1xuICAgICAgICAgIHJldHVybiBvbGQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gb2xkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxufTtcblxuLyoqXG4gKiBJc29sYXRlIHNvbWUgd2luZG93IGZ1bmN0aW9uc1xuICovXG5Ba2lsaS5pc29sYXRlV2luZG93RnVuY3Rpb25zID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX193aW5kb3cuc2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gIHRoaXMuX193aW5kb3cuc2V0SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbDtcbiAgdGhpcy5fX3dpbmRvdy5Qcm9taXNlID0gUHJvbWlzZTtcblxuICB3aW5kb3cuc2V0VGltZW91dCA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LnNldFRpbWVvdXQsIDApO1xuICB3aW5kb3cuc2V0SW50ZXJ2YWwgPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5zZXRJbnRlcnZhbCwgMCk7XG4gIHdpbmRvdy5Qcm9taXNlICYmICh3aW5kb3cuUHJvbWlzZS5jb25zdHJ1Y3RvciA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LlByb21pc2UuY29uc3RydWN0b3IgLCAwKSk7XG59O1xuXG4vKipcbiAqIElzb2xhdGUgZXZlbnQgbGlzdGVuZXJzXG4gKi9cbkFraWxpLmlzb2xhdGVFdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50ID0geyBwcm90b3R5cGU6IHt9IH07XG5cbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcjtcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcjtcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmU7XG5cbiAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgZGVsZXRlIHRoaXMuX19ha2lsaUxpc3RlbmVycztcblxuICAgIHJldHVybiBBa2lsaS5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICBFbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBsZXQgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVycyA9IHt9O1xuICAgIH1cblxuICAgIGlmKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGFyZ3NbMV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gQWtpbGkudW5ldmFsdWF0ZWQoKCkgPT4ge1xuICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5wdXNoKHtcbiAgICAgIGxpbms6IGZuLFxuICAgICAgZm46IGFyZ3NbMV1cbiAgICB9KTtcblxuICAgIHJldHVybiBBa2lsaS5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihuYW1lLCBmbikge1xuICAgIGlmKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVycyA9IHt9O1xuICAgIH1cblxuICAgIGlmKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV1baV07XG5cbiAgICAgIGlmKGxpc3RlbmVyLmxpbmsgPT09IGZuKSB7XG4gICAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGktLTtcbiAgICAgICAgbC0tO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdO1xuICAgIH1cblxuICAgIHJldHVybiAgQWtpbGkuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuLyoqXG4gKiBXcmFwIHRoZSBmdW5jdGlvbiBjYWxsYmFjayB0byBhbiBpc29sYXRlIGNvbnRleHRcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBbcG9zPVwibGFzdFwiXVxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5Ba2lsaS5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbiA9IGZ1bmN0aW9uKGZuLCBwb3MgPSAnbGFzdCcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGxldCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgIGxldCBjYWxsYmFjayA9IHBvcyA9PSAnbGFzdCc/IGFyZ3NbYXJncy5sZW5ndGggLSAxXTogYXJnc1twb3NdO1xuXG4gICAgaWYodHlwZW9mIGNhbGxiYWNrICE9ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIGFyZ3NbMF0gPSAoKSA9PiB7XG4gICAgICByZXR1cm4gQWtpbGkudW5ldmFsdWF0ZWQoKCkgPT4ge1xuICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSB0aGUgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtvYmplY3R9IFtjb250ZXh0XVxuICogQHJldHVybnMge2Z1bmN0aW9ufVxuICovXG5Ba2lsaS5pc29sYXRlRnVuY3Rpb24gPSBmdW5jdGlvbihmbiwgY29udGV4dCA9IG51bGwpIHtcbiAgaWYoZm4uX19ha2lsaSkge1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIGxldCBvRm4gPSBmdW5jdGlvbigpIHtcbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCB0aGlzO1xuXG4gICAgcmV0dXJuIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3VtZW50cyk7XG4gICAgfSk7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9GbiwgJ19fYWtpbGknLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuXG4gIHJldHVybiBvRm47XG59O1xuXG4vKipcbiAqIEVycm9yIGhhbmRsaW5nXG4gKi9cbkFraWxpLmVycm9ySGFuZGxpbmcgPSBmdW5jdGlvbigpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgIHRoaXMudHJpZ2dlckluaXQoZmFsc2UpO1xuICB9KTtcbn07XG5cbi8qKlxuICogVHJpZ2dlciBhbiBpbml0aWFsaXphdGlvbiBzdGF0dXNcbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHN0YXR1c1xuICovXG5Ba2lsaS50cmlnZ2VySW5pdCA9IGZ1bmN0aW9uKHN0YXR1cykge1xuICBBa2lsaS5fX2luaXQgPSBzdGF0dXM7XG4gIHRoaXMuX19zZXJ2ZXJSZW5kZXJpbmcgJiYgKHRoaXMuX19odG1sLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZScpO1xuICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2FraWxpLWluaXQnLCB7IGRldGFpbDogc3RhdHVzIH0pKTtcbn07XG5cbi8qKlxuICogU2VydmVyIHJlbmRlcmluZyBpbXBsZW1lbnRhdGlvblxuICovXG5Ba2lsaS5zZXJ2ZXJSZW5kZXJpbmcgPSBmdW5jdGlvbigpIHtcbiAgbGV0IHNlcnZlciA9IHRoaXMuX19odG1sLmdldEF0dHJpYnV0ZSgnYWtpbGktc2VydmVyJyk7XG5cbiAgdGhpcy5fX3NlcnZlclJlbmRlcmluZyA9ICEhc2VydmVyO1xuXG4gIGlmKHNlcnZlcikge1xuICAgIHRoaXMuX19odG1sLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICB0aGlzLl9fc2VydmVyUHJvbWlzZSA9IHJlcXVlc3QuZ2V0KHNlcnZlcikudGhlbigocmVzKSA9PiB7ICAgICAgXG4gICAgICB0aGlzLl9faHRtbC5pbm5lckhUTUwgPSByZXMuZGF0YTtcbiAgICB9KTtcbiAgfVxufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBhcHBsaWNhdGlvblxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFtyb290XVxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbkFraWxpLmluaXQgPSBmdW5jdGlvbihyb290KSB7XG4gIHRoaXMuX19yb290ID0gcm9vdCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKTtcblxuICByZXR1cm4gdGhpcy5fX3NlcnZlclByb21pc2UudGhlbigoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGlsZSh0aGlzLl9fcm9vdCkudGhlbigoKSA9PiB7XG4gICAgICBpZihyb3V0ZXIuX19pbml0KSB7XG4gICAgICAgIHJldHVybiByb3V0ZXIuY2hhbmdlU3RhdGUoKTtcbiAgICAgIH1cbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMudHJpZ2dlckluaXQodHJ1ZSk7XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgdGhpcy50cmlnZ2VySW5pdChmYWxzZSk7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBEZWluaXRpYWxpemUgdGhlIGFwcGxpY2F0aW9uXG4gKi9cbkFraWxpLmRlaW5pdCA9IGZ1bmN0aW9uKCkge1xuICBmb3IobGV0IGtleSBpbiB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlKSB7XG4gICAgRWxlbWVudC5wcm90b3R5cGVba2V5XSA9IHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGVba2V5XTtcbiAgfVxuXG4gIGZvcihsZXQga2V5IGluIHRoaXMuX193aW5kb3cuQXJyYXkucHJvdG90eXBlKSB7XG4gICAgQXJyYXkucHJvdG90eXBlW2tleV0gPSB0aGlzLl9fd2luZG93LkFycmF5LnByb3RvdHlwZVtrZXldO1xuICB9XG5cbiAgd2luZG93LnNldFRpbWVvdXQgPSB0aGlzLl9fd2luZG93LnNldFRpbWVvdXQ7XG4gIHdpbmRvdy5zZXRJbnRlcnZhbCA9IHRoaXMuX193aW5kb3cuc2V0SW50ZXJ2YWw7XG4gIHdpbmRvdy5Qcm9taXNlID0gdGhpcy5fX3dpbmRvdy5Qcm9taXNlO1xufTtcblxuLyoqXG4gKiBEZWZpbmUgYWxsIGRlZmF1bHQgY29tcG9uZW50c1xuICovXG5Ba2lsaS5kZWZpbmUgPSBmdW5jdGlvbigpIHtcbiAgQS5kZWZpbmUoKTtcbiAgQXVkaW8uZGVmaW5lKCk7XG4gIENvbnRlbnQuZGVmaW5lKCk7XG4gIENvbXBvbmVudC5kZWZpbmUoKTtcbiAgRW1iZWQuZGVmaW5lKCk7XG4gIEZvci5kZWZpbmUoKTtcbiAgSW5jbHVkZS5kZWZpbmUoKTtcbiAgSWZyYW1lLmRlZmluZSgpO1xuICBJbWFnZS5kZWZpbmUoKTtcbiAgSW5wdXQuZGVmaW5lKCk7XG4gIElmLmRlZmluZSgpO1xuICBPYmplY3RzLmRlZmluZSgpO1xuICBSYWRpby5kZWZpbmUoKTtcbiAgUm91dGUuZGVmaW5lKCk7XG4gIFNlbGVjdC5kZWZpbmUoKTtcbiAgU291cmNlLmRlZmluZSgpO1xuICBUZXh0YXJlYS5kZWZpbmUoKTtcbiAgVHJhY2suZGVmaW5lKCk7XG4gIFZpZGVvLmRlZmluZSgpO1xufTtcblxuQWtpbGkuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuQWtpbGkuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuQWtpbGkuU2NvcGUgPSBTY29wZTtcbkFraWxpLnV0aWxzID0gdXRpbHM7XG5Ba2lsaS5jb21wb25lbnRzLkEgPSBBO1xuQWtpbGkuY29tcG9uZW50cy5BdWRpbyA9IEF1ZGlvO1xuQWtpbGkuY29tcG9uZW50cy5Db250ZW50ID0gQ29udGVudDtcbkFraWxpLmNvbXBvbmVudHMuRm9yID0gRm9yO1xuQWtpbGkuY29tcG9uZW50cy5FbWJlZCA9IEVtYmVkO1xuQWtpbGkuY29tcG9uZW50cy5JZiA9IElmO1xuQWtpbGkuY29tcG9uZW50cy5JbmNsdWRlID0gSW5jbHVkZTtcbkFraWxpLmNvbXBvbmVudHMuSW5wdXQgPSBJbnB1dDtcbkFraWxpLmNvbXBvbmVudHMuSWZyYW1lID0gSWZyYW1lO1xuQWtpbGkuY29tcG9uZW50cy5JbWFnZSA9IEltYWdlO1xuQWtpbGkuY29tcG9uZW50cy5PYmplY3QgPSBPYmplY3RzO1xuQWtpbGkuY29tcG9uZW50cy5SYWRpbyA9IFJhZGlvO1xuQWtpbGkuY29tcG9uZW50cy5Sb3V0ZSA9IFJvdXRlO1xuQWtpbGkuY29tcG9uZW50cy5TZWxlY3QgPSBTZWxlY3Q7XG5Ba2lsaS5jb21wb25lbnRzLlNvdXJjZSA9IFNvdXJjZTtcbkFraWxpLmNvbXBvbmVudHMuVGV4dCA9IFRleHQ7XG5Ba2lsaS5jb21wb25lbnRzLlRleHRhcmVhID0gVGV4dGFyZWE7XG5Ba2lsaS5jb21wb25lbnRzLlRyYWNrID0gVHJhY2s7XG5Ba2lsaS5jb21wb25lbnRzLlVybCA9IFVybDtcbkFraWxpLmNvbXBvbmVudHMuVmlkZW8gPSBWaWRlbztcbkFraWxpLnNlcnZpY2VzLnJlcXVlc3QgPSByZXF1ZXN0O1xuQWtpbGkuc2VydmljZXMucm91dGVyID0gcm91dGVyO1xuXG53aW5kb3cuQWtpbGkgPSBBa2lsaTtcblxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudHMgPSBBa2lsaS5jb21wb25lbnRzO1xuZXhwb3J0IGNvbnN0IHNlcnZpY2VzID0gQWtpbGkuc2VydmljZXM7XG5leHBvcnQgZGVmYXVsdCBBa2lsaTtcblxuQWtpbGkuc2VydmVyUmVuZGVyaW5nKCk7XG5Ba2lsaS5kZWZpbmUoKTtcbkFraWxpLmVycm9ySGFuZGxpbmcoKTtcbkFraWxpLmlzb2xhdGVFdmVudHMoKTtcbkFraWxpLmlzb2xhdGVBcnJheVByb3RvdHlwZSgpO1xuQWtpbGkuaXNvbGF0ZVdpbmRvd0Z1bmN0aW9ucygpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ha2lsaS5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcclxuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVybCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIG1hdGNoZXMgPSAnW3VybF0nO1xyXG5cclxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XHJcbiAgICBzdXBlciguLi5hcmdzKTtcclxuXHJcbiAgICB0aGlzLnVybEF0dHJpYnV0ZSA9ICdzcmMnO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlZFVybCh1cmwpIHtcclxuICAgIHRoaXMuc2V0VXJsKHVybCk7XHJcbiAgfVxyXG5cclxuICBjb21waWxlZCgpIHtcclxuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ3VybCcpICYmIHRoaXMuc2V0VXJsKHRoaXMuYXR0cnMudXJsKTtcclxuICB9XHJcblxyXG4gIHNldFVybCh1cmwpIHtcclxuICAgIHRoaXMuYXR0cnNbdGhpcy51cmxBdHRyaWJ1dGVdID0gdXJsO1xyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3VybC5qcyIsImltcG9ydCBBa2lsaSBmcm9tICcuL2FraWxpLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5cbmNvbnN0IGV2YWx1YXRpb25SZWdleCA9IC9cXCR7KCgoPyFcXCR7KS4pKil9LztcbmNvbnN0IGV2YWx1YXRpb25SZWdleEdsb2JhbCA9IG5ldyBSZWdFeHAoZXZhbHVhdGlvblJlZ2V4LnNvdXJjZSwgXCJnXCIpO1xuY29uc3Qgc3lzdGVtQXR0cmlidXRlcyA9IFsnY29tcG9uZW50JywgJ3Njb3BlJ107XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBuZXN0ZWRXYXRjaGluZztcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gW107XG4gIHN0YXRpYyBldmVudHMgPSBbXTtcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gZmFsc2U7XG4gIHN0YXRpYyB0cmFuc3BhcmVudCA9IGZhbHNlO1xuICBzdGF0aWMgdGVtcGxhdGUgPSAnJztcbiAgc3RhdGljIHRlbXBsYXRlVXJsID0gJyc7XG4gIHN0YXRpYyBzY29wZSA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRvIGRlZmluZSB0aGUgY29tcG9uZW50XG4gICAqL1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnY29tcG9uZW50JywgQ29tcG9uZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSB0aGUgZXhwcmVzc2lvblxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwcmVzc2lvblxuICAgKiBAcGFyYW0ge0V2ZW50fSBbZXZlbnQ9bnVsbF1cbiAgICovXG4gIHN0YXRpYyBwYXJzZShjb250ZXh0LCBleHByZXNzaW9uLCBldmVudCA9IG51bGwpIHtcbiAgICByZXR1cm4gKGZ1bmN0aW9uIChleHByZXNzaW9uLCBldmVudCkge1xuICAgICAgcmV0dXJuIGV2YWwoZXhwcmVzc2lvbik7XG4gICAgfSkuY2FsbChjb250ZXh0LCBleHByZXNzaW9uLCBldmVudCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbCwgc2NvcGUgPSB7fSkge1xuICAgIHRoaXMuX19pc01vdW50ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9faXNDb21waWxlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fcHJldmVudCA9IGZhbHNlO1xuICAgIHRoaXMuX19iaW5kaW5ncyA9IHt9O1xuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSBudWxsO1xuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IG51bGw7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IHt9O1xuICAgIHRoaXMuX19kaXNhYmxlUHJveHkgPSBudWxsO1xuICAgIHRoaXMuX19jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuX19wYXJlbnQgPSBudWxsO1xuICAgIHRoaXMuX19wYXJlbnRzID0gW107XG4gICAgdGhpcy5fX2F0dHJzID0ge307XG4gICAgdGhpcy5fX2F0dHJpYnV0ZU9mID0gbnVsbDtcbiAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudCA9IHRoaXM7XG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gdGhlIHJlY29tcGlsYXRpb25cbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZWNvbXBpbGUoKSB7XG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19pc0NvbXBpbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQuX19kaXNhYmxlUHJveHkgPSBudWxsO1xuICAgIHRoaXMuX19jb21waWxpbmcgPSB7fTtcbiAgICB0aGlzLl9fcmVjb21waWxpbmcgPSB7fTtcbiAgICB0aGlzLl9fc2V0RXZlbnRzKCk7XG4gICAgdGhpcy5fX3NldFBhcmVudHMoKTtcbiAgICB0aGlzLl9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKTtcbiAgICB0aGlzLl9fZGVmaW5lQXR0cmlidXRlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiB0aGUgY3JlYXRpb25cbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGUoKSB7XG4gICAgdGhpcy5lbC5fX2FraWxpID0gdGhpcztcbiAgICB0aGlzLl9faW5pdGlhbGl6ZSgpO1xuICAgIHRoaXMuX19zZXRFdmVudHMoKTtcbiAgICB0aGlzLl9fc2V0UGFyZW50cygpO1xuICAgIHRoaXMuX19zZXRCb29sZWFuQXR0cmlidXRlcygpO1xuICAgIHRoaXMuX19kZWZpbmVBdHRyaWJ1dGVzKCk7XG5cbiAgICBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgIHRoaXMuY3JlYXRlZCh0aGlzLmF0dHJzKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gdGhlIGNvbXBpbGF0aW9uXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBfX2NvbXBpbGUoKSB7XG4gICAgbGV0IGNvbnRyb2wgPSB0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMgfHwgIXRoaXMuX19ldmFsdWF0ZVBhcmVudDtcbiAgICBsZXQgcCA9IFByb21pc2UucmVzb2x2ZSgpO1xuXG4gICAgdGhpcy5fX2F0dHJpYnV0ZU9mID0gY29udHJvbD8gdGhpczogdGhpcy5fX2V2YWx1YXRlUGFyZW50Ll9fYWtpbGk7XG5cbiAgICBpZighdGhpcy5fX3JlY29tcGlsaW5nIHx8IHRoaXMuX19jb21waWxpbmcubmV3UGFyZW50IHx8IHRoaXMuX19jb250cm9sQXR0cmlidXRlcykge1xuICAgICAgdGhpcy5fX2ludGVycG9sYXRlQXR0cmlidXRlcyh0aGlzLmVsLCB0aGlzLl9fYXR0cmlidXRlT2YpO1xuICAgIH1cblxuICAgIGxldCBpbnRlcnBvbGF0ZSA9IChjaGlsZHJlbiwgcGFyZW50KSA9PiB7XG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmKGNoaWxkLm5vZGVUeXBlID09IDMpIHtcbiAgICAgICAgICB0aGlzLl9faW5pdGlhbGl6ZU5vZGUoY2hpbGQsIHBhcmVudCk7XG5cbiAgICAgICAgICBjaGlsZC5ub2RlVmFsdWUgPSB0aGlzLl9fZXZhbHVhdGUoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoY2hpbGQubm9kZVR5cGUgPT0gMSAmJiAhY2hpbGQuX19ha2lsaSkge1xuICAgICAgICAgIHRoaXMuX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXMoY2hpbGQpO1xuICAgICAgICAgIGludGVycG9sYXRlKGNoaWxkLmNoaWxkTm9kZXMsIGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpbnRlcnBvbGF0ZSh0aGlzLmVsLmNoaWxkTm9kZXMsIHRoaXMuZWwpO1xuICAgIHRoaXMuX19pc01vdW50ZWQgPSB0cnVlO1xuXG4gICAgbGV0IHJlcztcblxuICAgIGlmKCF0aGlzLl9fcmVjb21waWxpbmcpIHtcbiAgICAgIHJlcyA9IEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uQ29tcGlsZWQgJiYgdGhpcy5hdHRycy5vbkNvbXBpbGVkLnRyaWdnZXIoKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5jb21waWxlZCgpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmKHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGVVcmwpIHtcbiAgICAgICAgcCA9IHJlcXVlc3QuZ2V0KHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGVVcmwpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5fX2NvbnRlbnQ7XG4gICAgICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgcmVzLmRhdGEpO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9fY29udGVudDtcblxuICAgICAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgdGhpcy5hdHRycy5vblJlY29tcGlsZWQgJiYgdGhpcy5hdHRycy5vblJlY29tcGlsZWQudHJpZ2dlcigpO1xuICAgICAgICB0aGlzLnJlY29tcGlsZWQoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX19pc0NvbXBpbGVkID0gdHJ1ZTtcbiAgICB0aGlzLl9fcmVjb21waWxpbmcgPSBudWxsO1xuICAgIHRoaXMuX19jb21waWxpbmcgPSBudWxsO1xuXG4gICAgcmV0dXJuIHAudGhlbigoKSA9PiB7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmUgdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgX19yZXNvbHZlKCkge1xuICAgIGlmKHRoaXMuX19yZWNvbXBpbGluZykge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuYXR0cnMub25SZXNvbHZlZCAmJiB0aGlzLmF0dHJzLm9uUmVzb2x2ZWQudHJpZ2dlcigpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5yZXNvbHZlZCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJ0IG9mIHRoZSB7QHNlZSBDb21wb25lbnQjX19jb21waWxlfSBtZXRob2RcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbml0aWFsaXplKCkge1xuICAgIGxldCBwYXJlbnQgPSBBa2lsaS5nZXRBa2lsaVBhcmVudHModGhpcy5lbCwgZmFsc2UpO1xuICAgIGxldCBTY29wZSA9IHRoaXMuY29uc3RydWN0b3Iuc2NvcGUgfHwgQWtpbGkuU2NvcGU7XG4gICAgbGV0IHNjb3BlO1xuICAgIGxldCBpc1Jvb3QgPSBBa2lsaS5fX3Jvb3QgPT09IHRoaXMuZWw7XG5cbiAgICBpZihwYXJlbnQpIHtcbiAgICAgIHNjb3BlID0gbmV3IFNjb3BlKHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdzY29wZScpIHx8IEFraWxpLmNyZWF0ZVNjb3BlTmFtZSgpLCB0aGlzLmVsLCB0aGlzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzY29wZSA9IG5ldyBTY29wZShpc1Jvb3Q/ICdyb290JzogQWtpbGkuY3JlYXRlU2NvcGVOYW1lKCksIHRoaXMuZWwsIHRoaXMpO1xuICAgICAgaXNSb290ICYmIChBa2lsaS5yb290ID0gdGhpcyk7XG4gICAgfVxuXG4gICAgbGV0IF9fc2NvcGUgPSBzY29wZTtcbiAgICBsZXQgX3Njb3BlID0gT2JqZWN0LmFzc2lnbihzY29wZSwgdGhpcy5zY29wZSk7XG4gICAgbGV0IG5lc3RlZFdhdGNoaW5nID0gQWtpbGkub3B0aW9ucy5uZXN0ZWRXYXRjaGluZztcbiAgICBsZXQgY29udHJvbEF0dHJpYnV0ZXMgPSB0aGlzLmNvbnN0cnVjdG9yLmNvbnRyb2xBdHRyaWJ1dGVzO1xuICAgIGxldCBldmVudHMgPSB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50cztcblxuICAgIGlmKHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGUpIHtcbiAgICAgIEFraWxpLnNldFRlbXBsYXRlKHRoaXMuZWwsIHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGUpO1xuICAgIH1cblxuICAgIGlmKHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGVVcmwpIHtcbiAgICAgIHRoaXMuX19jb250ZW50ID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIH1cblxuICAgIGlmKHRoaXMuY29uc3RydWN0b3IubmVzdGVkV2F0Y2hpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbmVzdGVkV2F0Y2hpbmcgPSB0aGlzLmNvbnN0cnVjdG9yLm5lc3RlZFdhdGNoaW5nO1xuICAgIH1cbiAgICBlbHNlIGlmKFNjb3BlLm5lc3RlZFdhdGNoaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG5lc3RlZFdhdGNoaW5nID0gU2NvcGUubmVzdGVkV2F0Y2hpbmc7XG4gICAgfVxuXG4gICAgdGhpcy5fX3Njb3BlID0gX19zY29wZTtcbiAgICB0aGlzLl9fZXZlbnRzID0gZXZlbnRzO1xuICAgIHRoaXMuX19uZXN0ZWRXYXRjaGluZyA9IG5lc3RlZFdhdGNoaW5nO1xuICAgIHRoaXMuX19jb250cm9sQXR0cmlidXRlcyA9IGNvbnRyb2xBdHRyaWJ1dGVzO1xuXG4gICAgQWtpbGkuYWRkU2NvcGUoc2NvcGUpO1xuXG4gICAgaWYobmVzdGVkV2F0Y2hpbmcpIHtcbiAgICAgIHNjb3BlID0gdGhpcy5fX25lc3RlZE9ic2VydmUoX3Njb3BlLCBbXSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2NvcGUgPSB0aGlzLl9fb2JzZXJ2ZShfc2NvcGUsIFtdKTtcbiAgICB9XG5cbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGJvb2xlYW4gYXR0cmlidXRlc1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldEJvb2xlYW5BdHRyaWJ1dGVzKCkge1xuICAgIHRoaXMuYm9vbGVhbkF0dHJpYnV0ZXMgPSBbXS5jb25jYXQoQWtpbGkuaHRtbEJvb2xlYW5BdHRyaWJ1dGVzLCB0aGlzLmNvbnN0cnVjdG9yLmJvb2xlYW5BdHRyaWJ1dGVzKTtcblxuICAgIGxldCBzZXRBdHRyID0gKGVsKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgYXR0cnMgPSBlbC5hdHRyaWJ1dGVzLCBsID0gYXR0cnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBub2RlID0gYXR0cnNbaV07XG5cbiAgICAgICAgaWYodGhpcy5ib29sZWFuQXR0cmlidXRlcy5pbmRleE9mKG5vZGUubm9kZU5hbWUpICE9IC0xKSB7XG4gICAgICAgICAgaWYoZWwuaGFzQXR0cmlidXRlKGBib29sZWFuLSR7bm9kZS5ub2RlTmFtZX1gKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGBib29sZWFuLSR7bm9kZS5ub2RlTmFtZX1gLCBlbC5nZXRBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSkgfHwgbm9kZS5ub2RlTmFtZSk7XG4gICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKG5vZGUubm9kZU5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBlbC5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gZWwuY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYoIWNoaWxkLl9fYWtpbGkpIHtcbiAgICAgICAgICBzZXRBdHRyKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBzZXRBdHRyKHRoaXMuZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBldmVudHNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXRFdmVudHMoKSB7XG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuX19ldmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgZXYgPSB0aGlzLl9fZXZlbnRzW2ldO1xuXG4gICAgICAhL15vbi0vaS50ZXN0KGV2KSAmJiAoZXYgPSAnb24tJyArIGV2KTtcblxuICAgICAgaWYoIXRoaXMuZWwuaGFzQXR0cmlidXRlKGV2KSkge1xuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZShldiwgJycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgY29tcG9uZW50IHBhcmVudHNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXRQYXJlbnRzKCkge1xuICAgIGxldCBwYXJlbnRzID0gQWtpbGkuZ2V0QWtpbGlQYXJlbnRzKHRoaXMuZWwpO1xuXG4gICAgaWYoIXBhcmVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IG5ld1BhcmVudCA9IHRoaXMuX19wYXJlbnQgIT09IHBhcmVudHNbMF07XG4gICAgbGV0IGV2YWx1YXRlUGFyZW50ID0gbnVsbDtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBwYXJlbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHBhcmVudCA9IHBhcmVudHNbaV07XG5cbiAgICAgIGlmKCFwYXJlbnQuX19ha2lsaS5jb25zdHJ1Y3Rvci50cmFuc3BhcmVudCkge1xuICAgICAgICBldmFsdWF0ZVBhcmVudCA9IHBhcmVudDtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9fY29tcGlsaW5nLm5ld1BhcmVudCA9IG5ld1BhcmVudDtcbiAgICBuZXdQYXJlbnQgJiYgdGhpcy5fX2RldGFjaCgpO1xuXG4gICAgaWYodGhpcy5jb25zdHJ1Y3Rvci50cmFuc3BhcmVudCkge1xuICAgICAgdGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQgPSBldmFsdWF0ZVBhcmVudC5fX2FraWxpO1xuICAgIH1cblxuICAgIHRoaXMuX19ldmFsdWF0ZVBhcmVudCA9IGV2YWx1YXRlUGFyZW50O1xuICAgIHRoaXMuX19wYXJlbnQgPSBwYXJlbnRzWzBdO1xuICAgIHRoaXMuX19wYXJlbnRzID0gcGFyZW50cztcbiAgICB0aGlzLnNjb3BlLl9fcGFyZW50ID0gdGhpcy5fX2V2YWx1YXRlUGFyZW50Ll9fYWtpbGkuc2NvcGU7XG4gICAgIXRoaXMuX19yZWNvbXBpbGluZyAmJiB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19hZGRDaGlsZCh0aGlzLmVsKTtcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcy5zY29wZSwgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fc2NvcGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBjaGlsZCBlbGVtZW50IHRvIHRoZSBsaXN0XG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYWRkQ2hpbGQoZWwpIHtcbiAgICB0aGlzLl9fY2hpbGRyZW4ucHVzaChlbCk7XG4gIH1cblxuICAvKipcbiAgICogU3BsaWNlIGNoaWxkIGZyb20gdGhlIGxpc3RcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zcGxpY2VDaGlsZChlbCkge1xuICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLl9fY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLl9fY2hpbGRyZW5baV07XG5cbiAgICAgIGlmKGNoaWxkID09PSBlbCkge1xuICAgICAgICB0aGlzLl9fY2hpbGRyZW4uc3BsaWNlKGksIDEpO1xuICAgICAgICBpLS07XG4gICAgICAgIGwtLTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogWW91IGNhbiBjaGFuZ2UgZXhwcmVzc2lvbiBiZWZvcmUgcGFyc2luZyBoZXJlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBleHByZXNzaW9uXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldFBhcnNlZEV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIG5vZGUgaGFzIGFueSBwcm9wZXJ0eSBjaGFuZ2VzIG9yIG5vdFxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2hlY2tFdmFsdWF0aW9uKG5vZGUpIHtcbiAgICBpZiAoIU9iamVjdC5rZXlzKG5vZGUuX19wcm9wZXJ0aWVzKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGsgaW4gbm9kZS5fX3Byb3BlcnRpZXMpIHtcbiAgICAgIGlmKCFub2RlLl9fcHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IHByb3AgPSBub2RlLl9fcHJvcGVydGllc1trXTtcbiAgICAgIGxldCB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKHByb3Aua2V5cywgcHJvcC5jb21wb25lbnQuX19zY29wZSk7XG5cbiAgICAgIGlmKCF1dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSh2YWx1ZSwgcHJvcC52YWx1ZSwgcHJvcC5jb3B5LCB1dGlscy5jb3B5KHZhbHVlKSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqICBDaGVjayBub2RlIGhhcyBjaGFuZ2VkIG9uIHRoZSBjZXJ0YWluIGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jaGVja05vZGVQcm9wZXJ0eUNoYW5naW5nKG5vZGUsIGtleXMsIHZhbHVlKSB7XG4gICAgbGV0IHByb3AgPSB0aGlzLl9fZ2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMpO1xuXG4gICAgaWYoIXByb3ApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiAhdXRpbHMuY29tcGFyZVByZXZpb3VzVmFsdWUodmFsdWUsIHByb3AudmFsdWUsIHByb3AuY29weSwgdXRpbHMuY29weSh2YWx1ZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIG5vZGUgZXhwcmVzc2lvblxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGUobm9kZSkge1xuICAgIGxldCBjb3VudGVyID0gMDtcbiAgICBsZXQgYXR0cmlidXRlVmFsdWU7XG4gICAgbGV0IGV4cHJlc3Npb247XG5cbiAgICBpZihub2RlLl9fY29tcG9uZW50LnBhcmVudHMoKGNvbSkgPT4gY29tLl9fcHJldmVudCkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbm9kZS5fX2V4cHJlc3Npb247XG4gICAgfVxuXG4gICAgaWYoIShub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpICYmIG5vZGUuX19jb21wb25lbnQuX19wcmV2ZW50KSB7XG4gICAgICByZXR1cm4gbm9kZS5fX2V4cHJlc3Npb247XG4gICAgfVxuXG4gICAgbGV0IHJlcyA9IG5vZGUuX19leHByZXNzaW9uLnJlcGxhY2UoZXZhbHVhdGlvblJlZ2V4R2xvYmFsLCAobSwgZCkgPT4ge1xuICAgICAgY291bnRlcisrO1xuXG4gICAgICBsZXQgZXZhbHVhdGU7XG4gICAgICBsZXQgZXZhbHVhdGlvbjtcbiAgICAgIGxldCBleGlzdGluZ0JpbmRpbmdzID0ge307XG4gICAgICBsZXQgcGFyc2VWYWx1ZSA9IG5vZGUuX19jb21wb25lbnQuX19nZXRQYXJzZWRFeHByZXNzaW9uKGQpO1xuXG4gICAgICBBa2lsaS5fX2V2YWx1YXRpb24gPSB7IG5vZGU6IG5vZGUsIGxpc3Q6IFtdfTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZXZhbHVhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLnBhcnNlKHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50LnNjb3BlLCBwYXJzZVZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuXG4gICAgICBldmFsdWF0aW9uID0gQWtpbGkuX19ldmFsdWF0aW9uPyBBa2lsaS5fX2V2YWx1YXRpb24ubGlzdDogW107XG4gICAgICBBa2lsaS5fX2V2YWx1YXRpb24ubGlzdCA9IG51bGw7XG4gICAgICBBa2lsaS5fX2V2YWx1YXRpb24gPSBudWxsO1xuXG4gICAgICBmb3IobGV0IGkgPSBldmFsdWF0aW9uLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGxldCBkYXRhID0gZXZhbHVhdGlvbltpXTtcbiAgICAgICAgbGV0IGhhc2ggPSBgJHtkYXRhLmNvbXBvbmVudC5fX3Njb3BlLl9fbmFtZX0uJHtkYXRhLmtleXNTdHJpbmd9YDtcblxuICAgICAgICBpZihkYXRhLm5vdEJpbmRpbmcpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGV4aXN0aW5nQmluZGluZ3NbaGFzaF0pIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwYXJlbnRWYWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGRhdGEucGFyZW50cywgZGF0YS5jb21wb25lbnQuX19zY29wZSk7XG4gICAgICAgIGxldCBldmFsQ29tcG9uZW50ID0gbm9kZS5fX2F0dHJpYnV0ZU9mIHx8IG5vZGUuX19jb21wb25lbnQ7XG5cbiAgICAgICAgaWYodXRpbHMuaXNTY29wZVByb3h5KHBhcmVudFZhbHVlKSAmJiBkYXRhLmNvbXBvbmVudCAhPT0gZXZhbENvbXBvbmVudC5fX2V2YWx1YXRpb25Db21wb25lbnQpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBiaW5kID0gZGF0YS5jb21wb25lbnQuX19nZXRCb3VuZE5vZGUoZGF0YS5rZXlzLCBub2RlKTtcbiAgICAgICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoZGF0YS5rZXlzLCBkYXRhLmNvbXBvbmVudC5fX3Njb3BlKTtcblxuICAgICAgICBpZighYmluZCkge1xuICAgICAgICAgIGRhdGEuY29tcG9uZW50Ll9fYmluZChkYXRhLmtleXMsIHsgbm9kZTogbm9kZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEuY29tcG9uZW50Ll9fc2V0Tm9kZVByb3BlcnR5KG5vZGUsIGRhdGEua2V5cywgdmFsdWUpO1xuICAgICAgICBleGlzdGluZ0JpbmRpbmdzW2hhc2hdID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgZXhpc3RpbmdCaW5kaW5ncyA9IG51bGw7XG4gICAgICBldmFsdWF0aW9uID0gbnVsbDtcblxuICAgICAgaWYobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKSB7XG4gICAgICAgIGV4cHJlc3Npb24gPSBtO1xuICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IGV2YWx1YXRlO1xuXG4gICAgICAgIHJldHVybiB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUoZXZhbHVhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZih0eXBlb2YgZXZhbHVhdGUgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZXZhbHVhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGUpIHtcbiAgICAgICAgICByZXR1cm4gZXZhbHVhdGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGV2YWx1YXRlO1xuICAgIH0pO1xuXG4gICAgaWYobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKSB7XG4gICAgICBsZXQgdmFsdWUgPSByZXM7XG4gICAgICBsZXQgaXNCb29sZWFuQXR0cmlidXRlID0gZmFsc2U7XG5cbiAgICAgIGlmKGNvdW50ZXIpIHtcbiAgICAgICAgbm9kZS5fX2hhc0JpbmRpbmdzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYoY291bnRlciA9PSAxICYmIGV4cHJlc3Npb24gJiYgbm9kZS5fX2V4cHJlc3Npb24gPT0gZXhwcmVzc2lvbikge1xuICAgICAgICB2YWx1ZSA9IGF0dHJpYnV0ZVZhbHVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgY2xlYXJBdHRyaWJ1dGUgPSBub2RlLm5vZGVOYW1lLnJlcGxhY2UoL15ib29sZWFuLSguKykvaSwgJyQxJyk7XG5cbiAgICAgIGlmKGNsZWFyQXR0cmlidXRlICE9IG5vZGUubm9kZU5hbWUpIHtcbiAgICAgICAgaXNCb29sZWFuQXR0cmlidXRlID0gdHJ1ZTtcbiAgICAgICAgdmFsdWUgPSAhIXZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZihub2RlLl9fYXR0cmlidXRlT24pIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IG5vZGUuX19hdHRyaWJ1dGVPbjtcblxuICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gdHJ1ZTtcbiAgICAgICAgY29tcG9uZW50LmF0dHJzW3V0aWxzLnRvQ2FtZWxDYXNlKGNsZWFyQXR0cmlidXRlKV0gPSB2YWx1ZTtcbiAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChjb21wb25lbnQuX19pc0NvbXBpbGVkKSB7XG4gICAgICAgICAgQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgICAgICBjb21wb25lbnQuYXR0cnMub25DaGFuZ2VkICYmIGNvbXBvbmVudC5hdHRycy5vbkNoYW5nZWQudHJpZ2dlcih7IGtleTogY2xlYXJBdHRyaWJ1dGUsIHZhbHVlOiB2YWx1ZX0pO1xuICAgICAgICAgICAgY29tcG9uZW50LmNoYW5nZWQoY2xlYXJBdHRyaWJ1dGUsIHZhbHVlKTtcblxuICAgICAgICAgICAgbGV0IGtleSA9IHV0aWxzLnRvQ2FtZWxDYXNlKGNsZWFyQXR0cmlidXRlKTtcbiAgICAgICAgICAgIGxldCBjYW1lbEtleSA9IGtleVswXS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpO1xuICAgICAgICAgICAgbGV0IGZuTmFtZSA9ICdjaGFuZ2VkJyArIGNhbWVsS2V5O1xuICAgICAgICAgICAgbGV0IGV2Rm5OYW1lID0gJ29uQ2hhbmdlZCcgKyBjYW1lbEtleTtcblxuICAgICAgICAgICAgY29tcG9uZW50LmF0dHJzW2V2Rm5OYW1lXSAmJiBjb21wb25lbnQuYXR0cnNbZXZGbk5hbWVdLnRyaWdnZXIodmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudFtmbk5hbWVdID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgY29tcG9uZW50W2ZuTmFtZV0odmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmKGlzQm9vbGVhbkF0dHJpYnV0ZSkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IG5vZGUuX19lbGVtZW50O1xuICAgICAgICBsZXQgYXR0ciA9IHV0aWxzLnRvQ2FtZWxDYXNlKGNsZWFyQXR0cmlidXRlKTtcblxuICAgICAgICB2YWx1ZT8gZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgJ3RydWUnKTogZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBOZXN0ZWQgZXZhbHVhdGlvbiBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtib29sZWFufSBbd2l0aG91dFBhcmVudHM9ZmFsc2VdIC0gaWYgdHJ1ZSBldmFsdWF0aW9uIHdpbGwgYmUgb25seSBmb3IgdGhlIGN1cnJlbnQga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlTmVzdGVkKGtleXMsIHdpdGhvdXRQYXJlbnRzID0gZmFsc2UpIHtcbiAgICBsZXQgc2NvcGUgPSB0aGlzLl9fc2NvcGU7XG4gICAgbGV0IHByb3BzID0gW107XG5cbiAgICBpZighd2l0aG91dFBhcmVudHMpIHtcbiAgICAgIGxldCBsYXN0UHJvcHMgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgbGV0IHZhbHVlO1xuXG4gICAgICAgIGxhc3RQcm9wcyA9IFsuLi5sYXN0UHJvcHMsIGtleV07XG4gICAgICAgIHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMobGFzdFByb3BzLCBzY29wZSk7XG4gICAgICAgIHByb3BzLnB1c2goeyBrZXlzOiBsYXN0UHJvcHMsIHZhbHVlOiB2YWx1ZX0pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHByb3BzLnB1c2goeyBrZXlzOiBrZXlzLCB2YWx1ZTogdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgc2NvcGUpfSk7XG4gICAgfVxuXG4gICAgbGV0IHByb3BzTGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gICAgbGV0IGVsRXZhbHVhdGUgPSAoZWxlbWVudCkgPT4ge1xuICAgICAgbGV0IGNvbXBvbmVudCA9IGVsZW1lbnQuX19ha2lsaTtcblxuICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCBwcm9wc0xlbmd0aDsgbSsrKSB7XG4gICAgICAgIGxldCBwcm9wID0gcHJvcHNbbV07XG4gICAgICAgIGxldCBkYXRhID0gY29tcG9uZW50Ll9fZ2V0QmluZChwcm9wLmtleXMpO1xuXG4gICAgICAgIGlmICghZGF0YSB8fCAhZGF0YS5fX2RhdGEpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGsgPSAwLCBjID0gZGF0YS5fX2RhdGEubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICAgICAgbGV0IGJpbmQgPSBkYXRhLl9fZGF0YVtrXTtcblxuICAgICAgICAgIGlmKGNvbXBvbmVudC5fX2NoZWNrTm9kZVByb3BlcnR5Q2hhbmdpbmcoYmluZC5ub2RlLCBwcm9wLmtleXMsIHByb3AudmFsdWUpKSB7XG4gICAgICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlUHJveHkgPSB0cnVlO1xuICAgICAgICAgICAgY29tcG9uZW50Ll9fZXZhbHVhdGVOb2RlKGJpbmQubm9kZSk7XG5cbiAgICAgICAgICAgIGZvcihsZXQgX2sgaW4gYmluZC5ub2RlLl9fcHJvcGVydGllcykge1xuICAgICAgICAgICAgICBpZighYmluZC5ub2RlLl9fcHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShfaykpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGxldCBfcHJvcCA9IGJpbmQubm9kZS5fX3Byb3BlcnRpZXNbX2tdO1xuICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhfcHJvcC5rZXlzLCBfcHJvcC5jb21wb25lbnQuX19zY29wZSk7XG5cbiAgICAgICAgICAgICAgX3Byb3AuY29tcG9uZW50Ll9fc2V0Tm9kZVByb3BlcnR5KGJpbmQubm9kZSwgX3Byb3Aua2V5cywgdmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlUHJveHkgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH07XG5cbiAgICBsZXQgZXZhbHVhdGUgPSAoZWxlbWVudHMpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBlbEV2YWx1YXRlKGVsZW1lbnRzW2ldKTtcblxuICAgICAgICBldmFsdWF0ZShjb21wb25lbnQuX19jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGVsRXZhbHVhdGUodGhpcy5lbCk7XG4gICAgZXZhbHVhdGUodGhpcy5fX2NoaWxkcmVuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSB2YWx1ZSBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlbGV0ZWQ9ZmFsc2VdIC0gdHJ1ZSBpZiB2YWx1ZSBpcyBkZWxldGluZ1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlQnlLZXlzKGtleXMsIHZhbHVlLCBpc0RlbGV0ZWQgPSBmYWxzZSkge1xuICAgIGxldCBkYXRhID0gdGhpcy5fX2dldEJpbmQoa2V5cyk7XG5cbiAgICBsZXQgdW5iaW5kID0gKG9iaiwgcGFyZW50cykgPT4ge1xuICAgICAgZm9yKGxldCBrIGluIG9iaikge1xuICAgICAgICBpZighb2JqLmhhc093blByb3BlcnR5KGspIHx8IGsgPT0gJ19fZGF0YScpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBfa2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba10pO1xuICAgICAgICBsZXQgX19rZXlzID0gX2tleXMuc2xpY2UoKTtcbiAgICAgICAgbGV0IF9pc0RlbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IHZhbCA9IG9ialtrXTtcbiAgICAgICAgbGV0IGhhc0tleTtcblxuICAgICAgICBfX2tleXMuc2hpZnQoKTtcbiAgICAgICAgaGFzS2V5ID0gdXRpbHMuaGFzUHJvcGVydHlCeUtleXMoX19rZXlzLCB2YWx1ZSk7XG5cbiAgICAgICAgaWYodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnICYmICFoYXNLZXkpIHtcbiAgICAgICAgICBfaXNEZWxldGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdW5iaW5kKHZhbCwgX2tleXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fX2V2YWx1YXRlTmVzdGVkKF9rZXlzLCB0cnVlKTtcblxuICAgICAgICBpZih2YWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgIT0gJ29iamVjdCcgfHwgIWhhc0tleSkge1xuICAgICAgICAgIHRoaXMuX191bmJpbmQoX2tleXMpO1xuICAgICAgICAgIF9pc0RlbGV0ZWQgJiYgdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoX19rZXlzLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZGF0YSAmJiB1bmJpbmQoZGF0YSwgW10uY29uY2F0KGtleXMpKTtcbiAgICB0aGlzLl9fZXZhbHVhdGVOZXN0ZWQoa2V5cyk7XG5cbiAgICBpZihpc0RlbGV0ZWQpIHtcbiAgICAgIHRoaXMuX191bmJpbmQoa2V5cyk7XG4gICAgICBpc0RlbGV0ZWQgJiYgdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgZXZlbnQgZXhwcmVzc2lvblxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlRXZlbnQobm9kZSwgZWwsIGUpIHtcbiAgICBsZXQgZXhwcmVzc2lvbiA9IGV2YWx1YXRpb25SZWdleC5leGVjKG5vZGUuX19leHByZXNzaW9uKTtcbiAgICBsZXQgZXZhbHVhdGU7XG5cbiAgICBpZighZXhwcmVzc2lvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSB7XG4gICAgICBlbDogZWwsXG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICBldmVudDogZSxcbiAgICAgIG5vZGU6IG5vZGVcbiAgICB9O1xuXG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IG51bGw7XG4gICAgZXZhbHVhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLnBhcnNlKHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50LnNjb3BlLCBleHByZXNzaW9uWzFdLCBlKTtcbiAgICB0aGlzLl9fZXZhbHVhdGluZ0V2ZW50ID0gbnVsbDtcblxuICAgIHJldHVybiBldmFsdWF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBjaGFuZ2VzIGFuZCBldmFsdWF0ZSB0aGUgcGFzc2VkIG5vZGVcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVOb2RlKG5vZGUpIHtcbiAgICBpZih0aGlzLl9fY2hlY2tFdmFsdWF0aW9uKG5vZGUpKSB7XG4gICAgICBub2RlWyhub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpPyAndmFsdWUnOiAnbm9kZVZhbHVlJ10gPSB0aGlzLl9fZXZhbHVhdGUobm9kZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEF0dHJpYnV0ZSBub2RlIGluaXRpYWxpemluZ1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtDb21wb25lbnR9IGF0dHJpYnV0ZU9mIC0gaWYgbm9kZSBpcyBsaW5rZWQgd2l0aCBwYXJlbnQgc2NvcGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbml0aWFsaXplQXR0cmlidXRlKG5vZGUsIGVsLCBhdHRyaWJ1dGVPZikge1xuICAgIGlmKHN5c3RlbUF0dHJpYnV0ZXMuaW5kZXhPZihub2RlLm5vZGVOYW1lKSAhPSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX19pbml0aWFsaXplTm9kZShub2RlLCBlbCk7XG5cbiAgICBsZXQgZXZlbnROYW1lID0gbm9kZS5ub2RlTmFtZS5yZXBsYWNlKC9eb24tKC4rKS9pLCAnJDEnKTtcbiAgICBsZXQgbm9kZU5hbWUgPSB1dGlscy50b0NhbWVsQ2FzZShub2RlLm5vZGVOYW1lKTtcbiAgICBsZXQgY29tcG9uZW50ID0gYXR0cmlidXRlT2Y/IGF0dHJpYnV0ZU9mOiB0aGlzO1xuXG4gICAgaWYoZXZlbnROYW1lICE9IG5vZGUubm9kZU5hbWUpIHtcbiAgICAgIGlmKG5vZGUuX19ldmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBlbWl0dGVyID0gbmV3IEFraWxpLkV2ZW50RW1pdHRlcihldmVudE5hbWUsIGVsLCBjb21wb25lbnQpO1xuXG4gICAgICBpZihub2RlLl9fZXhwcmVzc2lvbikge1xuICAgICAgICBlbWl0dGVyLmJpbmQoKGUpID0+IHtcbiAgICAgICAgICByZXR1cm4gY29tcG9uZW50Ll9fZXZhbHVhdGVFdmVudChub2RlLCBlbCwgZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBub2RlLl9fZXZlbnQgPSBlbWl0dGVyO1xuICAgICAgZWwuc2V0QXR0cmlidXRlKG5vZGUubm9kZU5hbWUsIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZShlbWl0dGVyKSk7XG5cbiAgICAgIGlmKGF0dHJpYnV0ZU9mKSB7XG4gICAgICAgIHRoaXMuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hdHRyc1tub2RlTmFtZV0gPSBlbWl0dGVyO1xuICAgICAgICB0aGlzLl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoYXR0cmlidXRlT2YpIHtcbiAgICAgIG5vZGUuX19hdHRyaWJ1dGVPbiA9IHRoaXM7XG4gICAgICBub2RlLl9fYXR0cmlidXRlT2YgPSBjb21wb25lbnQ7XG4gICAgfVxuXG4gICAgZWwuc2V0QXR0cmlidXRlKG5vZGUubm9kZU5hbWUsIGNvbXBvbmVudC5fX2V2YWx1YXRlKG5vZGUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBub2RlXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbml0aWFsaXplTm9kZShub2RlLCBlbCkge1xuICAgIGlmKG5vZGUuX19pbml0aWFsaXplZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5vZGUuX19leHByZXNzaW9uID0gbm9kZVsobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKT8gJ3ZhbHVlJzogJ25vZGVWYWx1ZSddO1xuICAgIG5vZGUuX19wcm9wZXJ0aWVzID0ge307XG4gICAgbm9kZS5fX2F0dHJpYnV0ZU9mID0gbnVsbDtcbiAgICBub2RlLl9fYXR0cmlidXRlT24gPSBudWxsO1xuICAgIG5vZGUuX19ldmVudCA9IG51bGw7XG4gICAgbm9kZS5fX2hhc0JpbmRpbmdzID0gZmFsc2U7XG4gICAgbm9kZS5fX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICBub2RlLl9fY29tcG9uZW50ID0gdGhpcztcbiAgICBub2RlLl9fZWxlbWVudCA9IGVsO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJwb2xhdGUgYXR0cmlidXRlcyBvZiB0aGUgZWxlbWVudFxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gW2F0dHJpYnV0ZU9mPW51bGxdIC0gaWYgbm9kZSBpcyBsaW5rZWQgd2l0aCBwYXJlbnQgc2NvcGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXMoZWwsIGF0dHJpYnV0ZU9mID0gbnVsbCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBhdHRycyA9IGVsLmF0dHJpYnV0ZXMsIGwgPSBhdHRycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHRoaXMuX19pbml0aWFsaXplQXR0cmlidXRlKGF0dHJzW2ldLCBlbCwgYXR0cmlidXRlT2YpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmUgYXR0cmlidXRlcyBhcyBwcm94eVxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RlZmluZUF0dHJpYnV0ZXMoKSB7XG4gICAgbGV0IGNoYW5nZUF0dHJpYnV0ZSA9IChrZXksIHZhbHVlLCBpc0RlbGV0ZWQgPSBmYWxzZSkgPT4ge1xuICAgICAgaWYodGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgbm9kZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlTm9kZShrZXkpO1xuXG4gICAgICBpZihub2RlKSB7XG4gICAgICAgIGlmKG5vZGUuX19ldmVudCkge1xuICAgICAgICAgIG5vZGUuX19ldmVudC51bmJpbmQoKTtcbiAgICAgICAgICBub2RlLl9fZXZlbnQgPSBudWxsO1xuICAgICAgICAgIG5vZGUuX19leHByZXNzaW9uID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZihub2RlLl9faGFzQmluZGluZ3MpIHtcbiAgICAgICAgICB0aGlzLl9fcGFyZW50ICYmIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2V2YWx1YXRpb25Db21wb25lbnQuX191bmJpbmRCeU5vZGVzKFtub2RlXSk7XG4gICAgICAgICAgbm9kZS5fX2hhc0JpbmRpbmdzID0gZmFsc2U7XG4gICAgICAgICAgbm9kZS5fX2V4cHJlc3Npb24gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZihpc0RlbGV0ZWQpIHtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYobm9kZSkge1xuICAgICAgICBub2RlLnZhbHVlID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuYXR0cnMgPSBuZXcgUHJveHkodGhpcy5fX2F0dHJzLCB7XG4gICAgICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBpZihrZXkgPT0gJ19faXNQcm94eScpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgIH0sXG4gICAgICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IGF0dHJLZXkgPSB1dGlscy50b0Rhc2hDYXNlKGtleSk7XG5cbiAgICAgICAgaWYodGhpcy5ib29sZWFuQXR0cmlidXRlcy5pbmRleE9mKGF0dHJLZXkpICE9IC0xKSB7XG4gICAgICAgICAgYXR0cktleSA9IGBib29sZWFuLSR7YXR0cktleX1gO1xuXG4gICAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgY2hhbmdlQXR0cmlidXRlKGF0dHJLZXksIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZSh2YWx1ZSkpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBhdHRyS2V5ID0gdXRpbHMudG9EYXNoQ2FzZShrZXkpO1xuXG4gICAgICAgIGNoYW5nZUF0dHJpYnV0ZShhdHRyS2V5LCB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUodmFsdWUpLCB0cnVlKTtcbiAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBwcm94eSB0byBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEByZXR1cm5zIHtQcm94eX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19vYnNlcnZlKG9iaiwgcGFyZW50cykge1xuICAgIHJldHVybiBuZXcgUHJveHkob2JqLCB7XG4gICAgICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBpZiAoa2V5ID09IFwiX19pc1Byb3h5XCIpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX3RhcmdldFwiKSB7XG4gICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX2NvbXBvbmVudFwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IFwiX19rZXlzXCIpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50cztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuX19kaXNhYmxlUHJveHkpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLl9faXNTeXN0ZW1LZXkoa2V5KSkge1xuICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHR5cGVvZiB0YXJnZXRba2V5XSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgbGV0IHJlYWxUYXJnZXQgID0gdXRpbHMuZ2V0T3duUHJvcGVydHlUYXJnZXQodGFyZ2V0LCBrZXkpO1xuXG4gICAgICAgICAgaWYoIXV0aWxzLmlzUGxhaW5PYmplY3QocmVhbFRhcmdldCkpIHtcbiAgICAgICAgICAgIHJlYWxUYXJnZXRba2V5XSA9IEFraWxpLmlzb2xhdGVGdW5jdGlvbihyZWFsVGFyZ2V0W2tleV0sIHJlYWxUYXJnZXQuX19jb21wb25lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBa2lsaS5fX2V2YWx1YXRpb24pIHtcbiAgICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG4gICAgICAgICAgbGV0IG5vdEJpbmRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgIGlmKCEoa2V5IGluIHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKCF1dGlscy5nZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQodGFyZ2V0LCBrZXkpKSB7XG4gICAgICAgICAgICBub3RCaW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9fYmluZE5vZGUoQWtpbGkuX19ldmFsdWF0aW9uLmxpc3QsIGtleXMsIHBhcmVudHMsIHRhcmdldFtrZXldLCBub3RCaW5kaW5nKTtcblxuICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgIH0sXG4gICAgICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgaWYodGhpcy5fX2Rpc2FibGVQcm94eSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tleV0pO1xuXG4gICAgICAgIGlmKHRoaXMuX19uZXN0ZWRXYXRjaGluZykge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdGhpcy5fX25lc3RlZE9ic2VydmUodmFsdWUsIGtleXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHZhbHVlID0gdXRpbHMuY29weSh2YWx1ZSk7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKEFraWxpLl9faXNvbGF0aW9uKSB7XG4gICAgICAgICAgdGhpcy5fX2NyZWF0ZUlzb2xhdGlvbk9iamVjdChwYXJlbnRzLCBrZXksIGZhbHNlKTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5fX2lzTW91bnRlZCkge1xuICAgICAgICAgIHRoaXMuX19ldmFsdWF0ZUJ5S2V5cyhrZXlzLCB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBkZWxldGVQcm9wZXJ0eTogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrZXldKTtcblxuICAgICAgICBpZih0aGlzLl9fZGlzYWJsZVByb3h5KSB7XG4gICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLl9faXNTeXN0ZW1LZXkoa2V5KSkge1xuICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoQWtpbGkuX19pc29sYXRpb24pIHtcbiAgICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgICAgICAgdGhpcy5fX2NyZWF0ZUlzb2xhdGlvbk9iamVjdChwYXJlbnRzLCBrZXksIHRydWUpO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgICAgIHRoaXMuX19ldmFsdWF0ZUJ5S2V5cyhrZXlzLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGtleSBpcyBzeXN0ZW1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIF9faXNTeXN0ZW1LZXkgKGtleSkge1xuICAgIGlmKGtleSA9PSAnX18nIHx8IChrZXlbMF0gPT0gJ18nICYmIGtleVsxXSA9PSAnXycpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZihbJ2NvbnN0cnVjdG9yJ10uaW5kZXhPZihrZXkpICE9IC0xKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogTmVzdGVkIG9ic2VydmluZyB0aGUgdmFsdWVcbiAgICpcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBbc3RhcnRLZXlzXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX25lc3RlZE9ic2VydmUgKHZhbHVlLCBzdGFydEtleXMpIHtcbiAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0gdHJ1ZTtcblxuICAgIGxldCBvYnNlcnZlID0gKHZhbHVlLCBwYXJlbnRzKSA9PiB7XG4gICAgICBpZih0eXBlb2YgdmFsdWUgIT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZighdXRpbHMuaXNQbGFpbk9iamVjdCh2YWx1ZSkgJiYgIXV0aWxzLmlzU2NvcGVQcm94eSh2YWx1ZSkgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIEFraWxpLlNjb3BlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGxldCB0YXJnZXQgPSB2YWx1ZTtcblxuICAgICAgaWYodmFsdWUuX19pc1Byb3h5KSB7XG4gICAgICAgIHRhcmdldCA9IHZhbHVlLl9fdGFyZ2V0O1xuXG4gICAgICAgIGlmKCF0aGlzLl9fZGlzYWJsZVByb3h5UmVkZWZpbmluZykge1xuICAgICAgICAgIGlmKHZhbHVlLl9fY29tcG9uZW50ICE9PSB0aGlzKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSB1dGlscy5jb3B5KHRhcmdldCwgZmFsc2UpO1xuICAgICAgICAgICAgdmFsdWUgPSB0YXJnZXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYoQWtpbGkuam9pbkJpbmRpbmdLZXlzKHBhcmVudHMpICE9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyh2YWx1ZS5fX2tleXMpKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSB1dGlscy5jb3B5KHRhcmdldCwgZmFsc2UpO1xuICAgICAgICAgICAgdmFsdWUgPSB0YXJnZXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmKCF0aGlzLl9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyAmJiAhKHZhbHVlIGluc3RhbmNlb2YgQWtpbGkuU2NvcGUpKSB7XG4gICAgICAgIHRhcmdldCA9IHV0aWxzLmNvcHkodGFyZ2V0LCBmYWxzZSk7ICAgICAgICAgIFxuICAgICAgICB2YWx1ZSA9IHRhcmdldDtcbiAgICAgIH1cblxuICAgICAgZm9yKGxldCBrIGluIHRhcmdldCkge1xuICAgICAgICBpZiAoIXRhcmdldC5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHZhbCA9IHRhcmdldFtrXTtcbiAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tdKTtcblxuICAgICAgICB0YXJnZXRba10gPSBvYnNlcnZlKHZhbCwga2V5cyk7XG4gICAgICB9XG5cbiAgICAgIGlmKCF2YWx1ZS5fX2lzUHJveHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19vYnNlcnZlKHRhcmdldCwgcGFyZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuXG4gICAgbGV0IHJlcyA9IG9ic2VydmUodmFsdWUsIHN0YXJ0S2V5cyB8fCBbXSk7XG5cbiAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0gbnVsbDtcblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGlzb2xhdGlvbiBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVsZXRlZD1mYWxzZV1cbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0IChwYXJlbnRzLCBrZXksIGlzRGVsZXRlZCA9IGZhbHNlKSB7XG4gICAgbGV0IGtleXMgPSBwYXJlbnRzLmxlbmd0aD8gW3BhcmVudHNbMF1dOiBba2V5XTtcbiAgICBsZXQgaXNvbGF0aW9uS2V5ID0gYCR7dGhpcy5fX3Njb3BlLl9fbmFtZX0uJHtBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyl9YDtcblxuICAgIGlmKHBhcmVudHMubGVuZ3RoKSB7XG4gICAgICBpc0RlbGV0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZighQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uS2V5XSkge1xuICAgICAgQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uS2V5XSA9IHtcbiAgICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgICBrZXlzOiBrZXlzXG4gICAgICB9O1xuICAgIH1cblxuICAgIChpc0RlbGV0ZWQgIT09IHVuZGVmaW5lZCkgJiYgKEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV0uaXNEZWxldGVkID0gaXNEZWxldGVkKTtcbiAgICBBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25LZXldLnZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKTtcblxuICAgIHJldHVybiBBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25LZXldO1xuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgdGhlIG5vZGUgdG8gYmluZGluZ1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gYmluZCAtIGJ5IGRlZmF1bHQgaXMgY29tcG9uZW50Ll9fZXZhbHVhdGlvbi5saXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW25vdEJpbmRpbmc9ZmFsc2VdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYmluZE5vZGUoYmluZCwga2V5cywgcGFyZW50cywgdmFsdWUsIG5vdEJpbmRpbmcgPSBmYWxzZSkge1xuICAgIGxldCBwYXJlbnRLZXlzU3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKHBhcmVudHMpO1xuXG4gICAgaWYoYmluZC5sZW5ndGggJiYgIW5vdEJpbmRpbmcpIHtcbiAgICAgIGxldCBsID0gYmluZC5sZW5ndGggLSAxO1xuICAgICAgbGV0IGRhdGEgPSBiaW5kW2xdO1xuXG4gICAgICBpZihkYXRhLmtleXNTdHJpbmcgPT0gcGFyZW50S2V5c1N0cmluZyAmJiBkYXRhLmNvbXBvbmVudCA9PT0gdGhpcykge1xuICAgICAgICBiaW5kLnNwbGljZShsLCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBiaW5kLnB1c2goe1xuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAga2V5c1N0cmluZzogQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpLFxuICAgICAgcGFyZW50czogcGFyZW50cyxcbiAgICAgIGtleXM6IGtleXMsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBub3RCaW5kaW5nOiBub3RCaW5kaW5nXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGJpbmRpbmcgYnkga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRCaW5kKGtleXMpIHtcbiAgICByZXR1cm4gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzKSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBiaW5kaW5nIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldEJvdW5kTm9kZShrZXlzLCBub2RlKSB7XG4gICAgbGV0IGJpbmQgPSAgdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzKTtcblxuICAgIGlmKCFiaW5kIHx8ICFiaW5kLl9fZGF0YSB8fCAhYmluZC5fX2RhdGEubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gYmluZC5fX2RhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgZGF0YSA9IGJpbmQuX19kYXRhW2ldO1xuXG4gICAgICBpZihkYXRhLm5vZGUgPT09IG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogU2V0IG5vZGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXROb2RlUHJvcGVydHkobm9kZSwga2V5cywgdmFsdWUpIHtcbiAgICBsZXQgcHJvcCA9IHRoaXMuX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cyk7XG4gICAgbGV0IGNvcHkgPSB1dGlscy5jb3B5KHZhbHVlKTtcblxuICAgIGlmKHByb3ApIHtcbiAgICAgIGxldCByZXMgPSB1dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSh2YWx1ZSwgcHJvcC52YWx1ZSwgcHJvcC5jb3B5LCBjb3B5KTtcblxuICAgICAgcHJvcC52YWx1ZSA9IHZhbHVlO1xuICAgICAgcHJvcC5jb3B5ID0gY29weTtcblxuICAgICAgcmV0dXJuICFyZXM7XG4gICAgfVxuXG4gICAgbGV0IGhhc2ggPSBgJHt0aGlzLl9fc2NvcGUuX19uYW1lfS4ke0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKX1gO1xuXG4gICAgbm9kZS5fX3Byb3BlcnRpZXNbaGFzaF0gPSB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBjb3B5OiBjb3B5LFxuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAga2V5czoga2V5c1xuICAgIH07XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbm9kZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMpIHtcbiAgICBsZXQgaGFzaCA9IGAke3RoaXMuX19zY29wZS5fX25hbWV9LiR7QWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpfWA7XG5cbiAgICByZXR1cm4gbm9kZS5fX3Byb3BlcnRpZXNbaGFzaF0gfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgbm9kZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RlbGV0ZU5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKSB7XG4gICAgbGV0IGhhc2ggPSBgJHt0aGlzLl9fc2NvcGUuX19uYW1lfS4ke0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKX1gO1xuXG4gICAgZGVsZXRlIG5vZGUuX19wcm9wZXJ0aWVzW2hhc2hdO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgZGF0YSB3aXRoIHRoZSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19iaW5kKGtleXMsIGRhdGEpIHtcbiAgICB1dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MsIChsYXN0LCB2YWx1ZSkgPT4ge1xuICAgICAgbGV0IG9iaiA9IHtfX2RhdGE6IFtdfTtcblxuICAgICAgaWYoIWxhc3QpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlPyB2YWx1ZTogb2JqO1xuICAgICAgfVxuXG4gICAgICBpZih0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgb2JqID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmKCFvYmouX19kYXRhKSB7XG4gICAgICAgIG9iai5fX2RhdGEgPSBbXTtcbiAgICAgIH1cblxuICAgICAgb2JqLl9fZGF0YS5wdXNoKGRhdGEpO1xuXG4gICAgICByZXR1cm4gb2JqO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmJpbmQoa2V5cykge1xuICAgIGxldCBiaW5kID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzKTtcblxuICAgIGlmKCFiaW5kIHx8ICFiaW5kLl9fZGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBiaW5kLl9fZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBub2RlID0gYmluZC5fX2RhdGFbaV0ubm9kZTtcblxuICAgICAgdGhpcy5fX2RlbGV0ZU5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKTtcbiAgICB9XG5cbiAgICB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MsICh2YWx1ZSkgPT4ge1xuICAgICAgaWYoT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdmFsdWUuX19kYXRhID0gW107XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgYnkgbm9kZXNcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlW119IG5vZGVzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5iaW5kQnlOb2Rlcyhub2Rlcykge1xuICAgIGxldCB1bmJpbmQgPSAob2JqKSA9PiB7XG4gICAgICBmb3IobGV0IGsgaW4gb2JqKSB7XG4gICAgICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGsgPT0gJ19fZGF0YScpIHtcbiAgICAgICAgICBsZXQgZGF0YSA9IG9ialtrXSB8fCBbXTtcbiAgICAgICAgICBsZXQgbCA9IGRhdGEubGVuZ3RoO1xuXG4gICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJpbmQgPSBkYXRhW2ldO1xuXG4gICAgICAgICAgICBpZihub2Rlcy5pbmRleE9mKGJpbmQubm9kZSkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgZGF0YS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgbC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmKCFsKSB7XG4gICAgICAgICAgICBkZWxldGUgb2JqW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB1bmJpbmQob2JqW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB1bmJpbmQodGhpcy5fX2JpbmRpbmdzKTtcbiAgICB0aGlzLl9fY2xlYXJFbXB0eUJpbmRpbmdzKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWxsIGVtcHR5IGJpbmRpbmdzXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb2JqXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NsZWFyRW1wdHlCaW5kaW5ncyhvYmopIHtcbiAgICBsZXQgY2xlYXIgPSAob2JqLCBwYXJlbnQsIGtleSkgPT4ge1xuICAgICAgZm9yKGxldCBrIGluIG9iaikge1xuICAgICAgICBpZighb2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmFsID0gb2JqW2tdO1xuXG4gICAgICAgIGlmKGsgPT0gJ19fZGF0YScgJiYgKCF2YWwgfHwgIXZhbC5sZW5ndGgpKSB7XG4gICAgICAgICAgZGVsZXRlIG9ialtrXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGsgIT0gJ19fZGF0YScpIHtcbiAgICAgICAgICBpZighT2JqZWN0LmtleXMob2JqW2tdKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmpba107XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xlYXIob2JqW2tdLCBvYmosIGspO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZighT2JqZWN0LmtleXMob2JqKS5sZW5ndGggJiYgcGFyZW50KSB7XG4gICAgICAgIGRlbGV0ZSBwYXJlbnRba2V5XTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY2xlYXIob2JqIHx8IHRoaXMuX19iaW5kaW5ncyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBjaGlsZCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcmVtb3ZlQ2hpbGRyZW4oKSB7XG4gICAgbGV0IHJlbW92ZSA9IChjaGlsZHJlbikgPT4ge1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIHJlbW92ZShjaGlsZC5fX2FraWxpLl9fY2hpbGRyZW4pO1xuICAgICAgICBjaGlsZC5fX2FraWxpLl9fcmVtb3ZlKCk7XG4gICAgICAgIGktLTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVtb3ZlKHRoaXMuX19jaGlsZHJlbik7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBjb21wb25lbnQgd2l0aG91dCBjaGlsZHJlbiByZW1vdmluZ1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlbW92ZSgpIHtcbiAgICB0aGlzLl9fZGV0YWNoKCk7XG4gICAgdGhpcy5hdHRycy5vblJlbW92ZWQgJiYgdGhpcy5hdHRycy5vblJlbW92ZWQudHJpZ2dlcigpO1xuICAgIHRoaXMucmVtb3ZlZCgpO1xuICAgIEFraWxpLnJlbW92ZVNjb3BlKHRoaXMuX19zY29wZS5fX25hbWUpO1xuICAgIHRoaXMuZWwucmVtb3ZlKCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0YWNoIHRoZSBjb21wb25lbnRcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZXRhY2goKSB7XG4gICAgaWYodGhpcy5fX2V2YWx1YXRlUGFyZW50ICYmICF0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMpIHtcbiAgICAgIHRoaXMuX19ldmFsdWF0ZVBhcmVudC5fX2FraWxpLl9fdW5iaW5kQnlOb2RlcyhbXS5zbGljZS5jYWxsKHRoaXMuZWwuYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIGlmKHRoaXMuX19wYXJlbnQpIHtcbiAgICAgIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX3NwbGljZUNoaWxkKHRoaXMuZWwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGNvbXBvbmVudCB3aXRoIGNoaWxkcmVuXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVzdHJveSgpIHtcbiAgICB0aGlzLl9fcmVtb3ZlQ2hpbGRyZW4oKTtcbiAgICB0aGlzLl9fcmVtb3ZlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIGNvbXBvbmVudCBodG1sXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZW1wdHkoKSB7XG4gICAgbGV0IG5vZGVzID0gW107XG5cbiAgICB0aGlzLl9fcmVtb3ZlQ2hpbGRyZW4oKTtcblxuICAgIGxldCBmaW5kID0gKGNoaWxkcmVuKSA9PiB7XG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmKGNoaWxkLm5vZGVUeXBlID09IDMpIHtcbiAgICAgICAgICBub2Rlcy5wdXNoKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGNoaWxkLm5vZGVUeXBlID09IDEgJiYgIWNoaWxkLl9fYWtpbGkpIHtcbiAgICAgICAgICBmb3IgKGxldCBrID0gMCwgYXR0cnMgPSBjaGlsZC5hdHRyaWJ1dGVzLCBjID0gYXR0cnMubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICAgICAgICBub2Rlcy5wdXNoKGF0dHJzW2ldKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmaW5kKGNoaWxkLmNoaWxkTm9kZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZpbmQodGhpcy5lbC5jaGlsZE5vZGVzKTtcbiAgICB0aGlzLl9fdW5iaW5kQnlOb2Rlcyhub2Rlcyk7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcGFyZW50IGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0UGFyZW50KHNlbGVjdG9yID0gJycsIGZpbmRBbGwgPSBmYWxzZSwgbGV2ZWxzID0gbnVsbCkge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBsZXQgbGV2ZWwgPSAwO1xuXG4gICAgaWYodHlwZW9mIGxldmVscyAhPSAnb2JqZWN0Jykge1xuICAgICAgbGV2ZWxzID0gW2xldmVsc107XG4gICAgfVxuXG4gICAgbGV0IGZpbmQgPSAocGFyZW50KSA9PiB7XG4gICAgICBpZighcGFyZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYoIWxldmVscyB8fCBsZXZlbHMuaW5kZXhPZihsZXZlbCkgIT0gLTEpIHtcbiAgICAgICAgaWYgKCFzZWxlY3RvciB8fCBwYXJlbnQuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIGlmICghZmluZEFsbCkge1xuICAgICAgICAgICAgYXJyLnB1c2gocGFyZW50Ll9fYWtpbGkpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYXJyLnB1c2gocGFyZW50Ll9fYWtpbGkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldmVsKys7XG4gICAgICBmaW5kKHBhcmVudC5fX2FraWxpLl9fcGFyZW50KTtcbiAgICB9O1xuXG4gICAgZmluZCh0aGlzLl9fcGFyZW50KTtcblxuICAgIHJldHVybiBmaW5kQWxsPyBhcnI6IChhcnJbMF0gfHwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNoaWxkIGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0Q2hpbGRyZW4oc2VsZWN0b3IgPSAnJywgZmluZEFsbCA9IHRydWUsIGxldmVscyA9IG51bGwpIHtcbiAgICBsZXQgYXJyID0gW107XG4gICAgbGV0IGxldmVsID0gMDtcblxuICAgIGlmKHR5cGVvZiBsZXZlbHMgIT0gJ29iamVjdCcpIHtcbiAgICAgIGxldmVscyA9IFtsZXZlbHNdO1xuICAgIH1cblxuICAgIGxldCBmaW5kID0gKGNoaWxkcmVuKSA9PiB7XG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmKCFsZXZlbHMgfHwgbGV2ZWxzLmluZGV4T2YobGV2ZWwpICE9IC0xKSB7XG4gICAgICAgICAgaWYoIXNlbGVjdG9yIHx8IGNoaWxkLl9fYWtpbGkubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIGlmKCFmaW5kQWxsKSB7XG4gICAgICAgICAgICAgIGFyci5wdXNoKGNoaWxkLl9fYWtpbGkpO1xuXG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXJyLnB1c2goY2hpbGQuX19ha2lsaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldmVsKys7XG5cbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgZmluZChjaGlsZHJlbltpXS5fX2FraWxpLl9fY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmaW5kKHRoaXMuX19jaGlsZHJlbik7XG5cbiAgICByZXR1cm4gZmluZEFsbD8gYXJyOiAoYXJyWzBdIHx8IG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBuZWFyZXN0IGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JpZ2h0PWZhbHNlXSAtIGZyb20gdGhlIHJpZ2h0IHNpZGUgaWYgdHJ1ZVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldE5lYXIoc2VsZWN0b3IgPSAnJywgZmluZEFsbCA9IHRydWUsIHJpZ2h0ID0gZmFsc2UpIHtcbiAgICBpZighdGhpcy5fX3BhcmVudCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGxldmVsRWxlbWVudHMgPSB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19jaGlsZHJlbi5zbGljZSgpO1xuICAgIGxldCBhcnIgPSBbXTtcblxuICAgIHJpZ2h0ICYmIGxldmVsRWxlbWVudHMucmV2ZXJzZSgpO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGxldmVsRWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgZWwgPSBsZXZlbEVsZW1lbnRzW2ldO1xuXG4gICAgICBpZihlbCA9PT0gdGhpcy5lbCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYoIXNlbGVjdG9yIHx8IGVsLl9fYWtpbGkubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgYXJyLnB1c2goZWwuX19ha2lsaSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYXJyLnJldmVyc2UoKTtcblxuICAgIGlmKCFmaW5kQWxsKSB7XG4gICAgICByZXR1cm4gYXJyLmxlbmd0aD8gYXJyWzBdOiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGNvbXBvbmVudCBtYXRjaGVzIHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBzZWxlY3RvclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIG1hdGNoZXMoc2VsZWN0b3IpIHtcbiAgICBpZih0eXBlb2Ygc2VsZWN0b3IgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHNlbGVjdG9yKHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmVsLm1hdGNoZXMoc2VsZWN0b3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IHBhcmVudCBjb21wb25lbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIHBhcmVudChzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRQYXJlbnQoc2VsZWN0b3IsIGZhbHNlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBwYXJlbnQgY29tcG9uZW50cyBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBwYXJlbnRzKHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldFBhcmVudChzZWxlY3RvciwgdHJ1ZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBjaGlsZCBjb21wb25lbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIGNoaWxkKHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldENoaWxkcmVuKHNlbGVjdG9yLCBmYWxzZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY2hpbGQgY29tcG9uZW50cyBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBjaGlsZHJlbihzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRDaGlsZHJlbihzZWxlY3RvciwgdHJ1ZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY29tcG9uZW50cyBsZWZ0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgYmVmb3JlKHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIHRydWUsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY29tcG9uZW50cyByaWdodCBmcm9tIHRoZSBjdXJyZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGFmdGVyKHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIHRydWUsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IGNvbXBvbmVudCBsZWZ0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIHByZXYoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgZmFsc2UsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBjb21wb25lbnQgcmlnaHQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgbmV4dChzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCBmYWxzZSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGVsZW1lbnQgcGFyZW50XG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudFxuICAgKi9cbiAgYXBwZW5kVG8ocGFyZW50KSB7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWwpO1xuXG4gICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FuY2VsIGNvbXBvbmVudCBjb21waWxhdGlvblxuICAgKi9cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXBhbGUgdGhlIGNvbXBvbmVudCwgYnV0IGNhbmNlbCB0aGUgY29tcGlsYXRpb24gaW5zaWRlIG9mIGl0XG4gICAqL1xuICBwcmV2ZW50KCkge1xuICAgIHRoaXMuX19wcmV2ZW50ID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBlbGVtZW50IGh0bWxcbiAgICpcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBlbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2VtcHR5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGVsZW1lbnRcbiAgICpcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICByZW1vdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19kZXN0cm95LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjcmVhdGVkKCkge31cbiAgY29tcGlsZWQoKSB7fVxuICByZWNvbXBpbGVkKCkge31cbiAgY2hhbmdlZChrZXksIHZhbHVlKSB7fVxuICByZXNvbHZlZCgpIHt9XG4gIHJlbW92ZWQoKSB7fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnQuanMiLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlci5qcydcblxuY29uc3QgdXRpbHMgPSB7fTtcblxuLyoqXG4gKiBDcmVhdGUgY2xhc3MgYXR0cmlidXRlIGZyb20gYW4gb2JqZWN0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJyZWQgYWN0aXZlXCJcbiAqIHV0aWxzLmNsYXNzKHtyZWQ6IHRydWUsIGFjdGl2ZTogdHJ1ZSwgZ3JlZW46IGZhbHNlfSk7XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuY2xhc3MgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGlmKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBsZXQgY2xhc3NlcyA9IFtdO1xuXG4gIGZvcihsZXQgayBpbiBvYmopIHtcbiAgICBpZighb2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBsZXQgdmFsID0gb2JqW2tdO1xuXG4gICAgdmFsICYmIGNsYXNzZXMucHVzaChrKTtcbiAgfVxuXG4gIHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIHN0eWxlIGF0dHJpYnV0ZSBmcm9tIGFuIG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwiY29sb3I6cmVkO3dpZHRoOjEwcHhcIlxuICogdXRpbHMuc3R5bGUoe2NvbG9yOiBcInJlZFwiLCBiYWNrZ3JvdW5kOiBmYWxzZSwgd2lkdGg6IFwiMTBweFwifSk7XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuc3R5bGUgPSBmdW5jdGlvbihvYmopIHtcbiAgaWYoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGxldCBzdHlsZXMgPSBbXTtcblxuICBmb3IobGV0IGsgaW4gb2JqKSB7XG4gICAgaWYoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgbGV0IHZhbCA9IG9ialtrXTtcblxuICAgIHZhbCAmJiBzdHlsZXMucHVzaChgJHt0aGlzLnRvRGFzaENhc2Uoayl9OiR7dmFsfWApO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlcy5qb2luKCc7Jyk7XG59O1xuXG4vKipcbiAqIEZpbHRlciBhbiBhcnJheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsxLCAxMV1cbiAqIHV0aWxzLmZpbHRlcihbMSwgMiwgMywgMTFdLCAnMScpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoxfSwge3g6MTF9XVxuICogdXRpbHMuZmlsdGVyKFt7eDoxfSwge3g6Mn0sIHt4OjN9LCB7eDoxMX1dLCAnMScsIFsneCddKTtcbiAqIFxuICogICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4Ont5OjF9fV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6e3k6MX19LCB7eDp7eToyfX1dLCAnMScsIFsneCcsICd5J10pO1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfGZ1bmN0aW9ufSBoYW5kbGVyIC0gdHlwZSBvZiBmaWx0ZXJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nW118c3RyaW5nfSBba2V5c10gLSBmaWx0ZXIgaW4gdGhlIGtleXMgaWYgYXJyYXkgZWxlbWVudHMgYXJlIG9iamVjdFxuICogQHJldHVybnMge0FycmF5fSAtIHJldHVybnMgb3RoZXIgYXJyYXlcbiAqL1xudXRpbHMuZmlsdGVyID0gZnVuY3Rpb24gKGFyciwgaGFuZGxlciwga2V5cyA9IFtdKSB7XG4gIGxldCByZXMgPSBbXTtcblxuICBpZighQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgIGtleXMgPSBba2V5c107XG4gIH1cblxuICBpZighaGFuZGxlcikge1xuICAgIHJldHVybiBbLi4uYXJyXTtcbiAgfVxuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGl0ZW0gPSBhcnJbaV07XG4gICAgbGV0IHZhbCA9IGtleXMubGVuZ3RoPyB0aGlzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIGl0ZW0pOiBpdGVtO1xuXG4gICAgaWYoIXZhbCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFsICs9ICcnO1xuXG4gICAgaWYoKHR5cGVvZiBoYW5kbGVyID09ICdmdW5jdGlvbicpICYmIGhhbmRsZXIoaXRlbSkpIHtcbiAgICAgIHJlcy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICBlbHNlIGlmKHZhbC5tYXRjaChoYW5kbGVyIHx8ICcnKSkge1xuICAgICAgcmVzLnB1c2goaXRlbSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogT3JkZXIgYW4gYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMSwgMiwgM11cbiAqIHV0aWxzLnNvcnQoWzMsIDIsIDFdLCB0cnVlKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMywgMiwgMV1cbiAqIHV0aWxzLnNvcnQoWzEsIDIsIDNdLCBmYWxzZSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dXG4gKiB1dGlscy5zb3J0KFt7eDogM30sIHt4OiAyfSwge3g6IDF9XSwgW1sneCddXSwgW3RydWVdKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCBbJ3gnXSwgdHJ1ZSk7XG4gKiB1dGlscy5zb3J0KFt7eDogM30sIHt4OiAyfSwge3g6IDF9XSwgJ3gnKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dLCBbWyd4J11dLCBbZmFsc2VdKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dLCBbJ3gnXSwgZmFsc2UpO1xuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sICd4JywgZmFsc2UpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMSwgeTogM30sIHt4OiAyLCB5OiAxfSwge3g6MiwgeTogMn1dXG4gKiB1dGlscy5zb3J0KFt7eDogMiwgeTogMn0sIHt4OiAyLCB5OiAxfSwge3g6IDIsIHk6IDN9XSwgW1sneCddLCBbJ3knXV0sIFt0cnVlLCB0cnVlXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoge3k6IDF9fSwge3g6IHt5OiAyfX1dXG4gKiB1dGlscy5zb3J0KFt7eDoge3k6IDJ9fSwge3g6IHt5OiAxfX1dLCBbWyd4JywgJ3knXV0sIFt0cnVlXSk7XG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0ge2Jvb2xlYW58QXJyYXlbXXxzdHJpbmdbXXxzdHJpbmd9IFtrZXlzXVxuICogQHBhcmFtIHtib29sZWFufGJvb2xlYW5bXX0gW29yZGVyXSAtIHJldmVyc2Ugb3Igbm90XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbnV0aWxzLnNvcnQgPSBmdW5jdGlvbihhcnIsIGtleXMgPSB0cnVlLCBvcmRlciA9IFtdKSB7XG4gIGFyciA9IFsuLi5hcnJdO1xuXG4gIGlmKGtleXMgPT09IHRydWUpIHtcbiAgICBrZXlzID0gW107XG4gICAgb3JkZXIgPSBbdHJ1ZV07XG4gIH1cbiAgZWxzZSBpZihrZXlzID09PSBmYWxzZSkge1xuICAgIGtleXMgPSBbXTtcbiAgICBvcmRlciA9IFtmYWxzZV07XG4gIH1cblxuICBpZighQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgIGtleXMgPSBba2V5c107XG4gIH1cblxuICBpZighQXJyYXkuaXNBcnJheShvcmRlcikpIHtcbiAgICBvcmRlciA9IFtvcmRlcl07XG4gIH1cblxuICBsZXQgbCA9IGtleXMubGVuZ3RoO1xuXG4gIGFyci5zb3J0KChhLCBiKSA9PiB7XG4gICAgbGV0IGkgPSAwO1xuXG4gICAgbGV0IGNoZWNrID0gKGEsIGIsIHJldmVyc2UgPSBmYWxzZSkgPT4ge1xuICAgICAgaWYoYSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgYSA9IGEuZ2V0VGltZSgpO1xuICAgICAgfVxuXG4gICAgICBpZihiIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBiID0gYi5nZXRUaW1lKCk7XG4gICAgICB9XG5cbiAgICAgIGlmKGEgPiBiKSB7XG4gICAgICAgIHJldHVybiByZXZlcnNlPyAtMTogMTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoYSA8IGIpIHtcbiAgICAgICAgcmV0dXJuIHJldmVyc2U/IDE6IC0xO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgICB9O1xuXG4gICAgbGV0IG5leHQgPSAoKSA9PiB7XG4gICAgICBpZihpID49IGwpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG5cbiAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZighQXJyYXkuaXNBcnJheShrZXkpKSB7XG4gICAgICAgIGtleSA9IFtrZXldO1xuICAgICAgfVxuXG4gICAgICBsZXQgYVYgPSB0aGlzLmdldFByb3BlcnR5QnlLZXlzKGtleSwgYSk7XG4gICAgICBsZXQgYlYgPSB0aGlzLmdldFByb3BlcnR5QnlLZXlzKGtleSwgYik7XG4gICAgICBsZXQgcmVzID0gY2hlY2soYVYsIGJWLCBvcmRlcltpXSA9PT0gZmFsc2UpO1xuXG4gICAgICBpZihyZXMgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1cblxuICAgICAgaSsrO1xuXG4gICAgICByZXR1cm4gbmV4dCgpO1xuICAgIH07XG5cbiAgICBpZighbCkge1xuICAgICAgcmV0dXJuIGNoZWNrKGEsIGIsIG9yZGVyW2ldID09PSBmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIHZhbHVlIGlzIGNvbXBvbmVudCBzY29wZSBwcm94eSBvYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmlzU2NvcGVQcm94eSA9IGZ1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gISEodmFsICYmIHR5cGVvZiB2YWwgPT0gJ29iamVjdCcgJiYgdmFsLl9faXNQcm94eSk7XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSB2YWx1ZSBpcyBwbGFpbiBvYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmlzUGxhaW5PYmplY3QgPSBmdW5jdGlvbihvYmopIHtcbiAgcmV0dXJuICEhKG9iaiAmJiB0eXBlb2Ygb2JqID09ICdvYmplY3QnICYmIChvYmouY29uc3RydWN0b3IgPT0gT2JqZWN0IHx8IG9iai5jb25zdHJ1Y3RvciA9PSBBcnJheSkpO1xufTtcblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZVxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW25lc3RlZD10cnVlXSAtIGRlZXAgY29weSBpZiBpcyB0cnVlXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuY29weSA9IGZ1bmN0aW9uKHZhbHVlLCBuZXN0ZWQgPSB0cnVlKSB7XG4gIGlmKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCAhdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBmdW5jdGlvbiBuZXh0KG9iaikge1xuICAgIG9iaiA9IEFycmF5LmlzQXJyYXkob2JqKT8gWy4uLm9ial06IHsuLi5vYmp9O1xuXG4gICAgaWYoIW5lc3RlZCkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBmb3IobGV0IGsgaW4gb2JqKSB7XG4gICAgICBpZighb2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZihvYmpba10gJiYgdHlwZW9mIG9ialtrXSA9PSAnb2JqZWN0Jykge1xuICAgICAgICBvYmpba10gPSBuZXh0KG9ialtrXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHJldHVybiBuZXh0KHZhbHVlKTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHRoZSB2YWx1ZSB0byBhdHRyaWJ1dGUgYXBwcm9wcmlhdGUgZm9ybWF0XG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGlmKHZhbHVlID09PSBmYWxzZSB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYodmFsdWUgaW5zdGFuY2VvZiBFdmVudEVtaXR0ZXIpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgRXZlbnRdJztcbiAgfVxuXG4gIGlmKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG4gIH1cblxuICBpZih0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZSArICcnO1xufTtcblxuLyoqXG4gKiBDb21wYXJlIHR3byB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0geyp9IGFcbiAqIEBwYXJhbSB7Kn0gYlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmNvbXBhcmUgPSBmdW5jdGlvbiAoYSwgYikge1xuICBpZih0aGlzLmlzU2NvcGVQcm94eShhKSAmJiB0aGlzLmlzU2NvcGVQcm94eShiKSkge1xuICAgIHJldHVybiBhLl9fdGFyZ2V0ID09PSBiLl9fdGFyZ2V0O1xuICB9XG4gIGVsc2UgaWYoKGEgaW5zdGFuY2VvZiBEYXRlKSAmJiAoYiBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgcmV0dXJuIGEuZ2V0VGltZSgpID09PSBiLmdldFRpbWUoKTtcbiAgfVxuICBlbHNlIGlmKHR5cGVvZiBhID09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGIgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBhLnRvU3RyaW5nKCkgPT09IGIudG9TdHJpbmcoKTtcbiAgfVxuICBlbHNlIGlmKHR5cGVvZiBhID09ICdvYmplY3QnICYmIHR5cGVvZiBiID09ICdvYmplY3QnKSB7XG4gICAgaWYoYSA9PT0gbnVsbCB8fCBiID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gYSA9PT0gYjtcbiAgICB9XG5cbiAgICBpZihPYmplY3Qua2V5cyhhKS5sZW5ndGggIT0gT2JqZWN0LmtleXMoYikubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yKGxldCBrIGluIGEpIHtcbiAgICAgIGlmKCFhLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZighdGhpcy5jb21wYXJlKGFba10sIGJba10pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBhID09PSBiO1xufTtcblxuLyoqXG4gKiBDb21wYXJlIGN1cnJlbnQgdmFsdWUgd2l0aCBwcmV2aW91c1xuICpcbiAqIEBwYXJhbSB7Kn0gY3VycmVudCAtIHRoZSBjdXJyZW50IHZhbHVlXG4gKiBAcGFyYW0geyp9IHByZXZpb3VzIC0gdGhlIGN1cnJlbnQgdmFsdWUgY29weVxuICogQHBhcmFtIHsqfSBwcmV2aW91c0NvcHkgLSB0aGUgcHJldmlvdXMgdmFsdWUgY29weVxuICogQHBhcmFtIHsqfSBbY3VycmVudENvcHldIC0gdGhlIGN1cnJlbnQgdmFsdWUgY29weVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlID0gZnVuY3Rpb24oY3VycmVudCwgcHJldmlvdXMsIHByZXZpb3VzQ29weSwgY3VycmVudENvcHkpIHtcbiAgaWYoY3VycmVudCAhPT0gcHJldmlvdXMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdGhpcy5jb21wYXJlKGFyZ3VtZW50cy5sZW5ndGggPT0gMz8gY3VycmVudENvcHk6IHRoaXMuY29weShjdXJyZW50KSwgcHJldmlvdXNDb3B5KTtcbn07XG5cbi8qKlxuICogRW5jb2RlIGh0bWwgZW50aXRpZXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcInlvdSAmYW1wIG1lXCJcbiAqIHV0aWxzLmVuY29kZUh0bWxFbnRpdGllcygneW91ICYgbWUnKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuZW5jb2RlSHRtbEVudGl0aWVzID0gZnVuY3Rpb24oaHRtbCkge1xuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgdmFsdWU7XG5cbiAgZWwudGV4dENvbnRlbnQgPSBodG1sO1xuICB2YWx1ZSA9IGVsLmlubmVySFRNTDtcbiAgZWwucmVtb3ZlKCk7XG4gIGVsID0gbnVsbDtcblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG4vKipcbiAqIERlY29kZSBodG1sIGVudGl0aWVzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJ5b3UgJiBtZVwiXG4gKiB1dGlscy5kZWNvZGVIdG1sRW50aXRpZXMoJ3lvdSAmYW1wIG1lJyk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmRlY29kZUh0bWxFbnRpdGllcyA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBsZXQgdmFsdWU7XG5cbiAgZWwuaW5uZXJIVE1MID0gaHRtbDtcbiAgdmFsdWUgPSBlbC52YWx1ZTtcbiAgZWwucmVtb3ZlKCk7XG4gIGVsID0gbnVsbDtcblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG4vKipcbiAqIENoYW5nZSBzdHJpbmcgZnJvbSBkYXNoIHRvIGNhbWVsIGNhc2UgZm9ybWF0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMudG9DYW1lbENhc2UgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXFcrKC4pL2csIChtLCBjKSA9PiBjLnRvVXBwZXJDYXNlKCkpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RyaW5nIGZyb20gY2FtZWwgdG8gZGFzaCBjYXNlIGZvcm1hdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnRvRGFzaENhc2UgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIChtLCBjKSA9PiBgLSR7Yy50b0xvd2VyQ2FzZSgpfWApO1xufTtcblxuLyoqXG4gKiBHZXQgbmVzdGVkIG9iamVjdCBwcm9wZXJ0eSBieSBhcnJheSBrZXlzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCkge1xuICBsZXQgY3VycmVudDtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoZnVuY3Rpb24obywgaykge1xuICAgIGkrKztcblxuICAgIGlmKHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gbztcbiAgICB9XG5cbiAgICBpZihvW2tdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAoaSA9PSBsZW5ndGgpICYmIChjdXJyZW50ID0gb1trXSk7XG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIGN1cnJlbnQ7XG59O1xuXG4vKipcbiAqIENoZWNrIG5lc3RlZCBvYmplY3RzIHRyZWUgaGFzIHByb3BlcnR5IG9yIG5vdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHRydWVcbiAqIHV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaGFzUHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QpIHtcbiAgbGV0IGhhcyA9IGZhbHNlO1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZShmdW5jdGlvbihvLCBrKSB7XG4gICAgaSsrO1xuXG4gICAgaWYodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiAhIW87XG4gICAgfVxuXG4gICAgaWYoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAoaSA9PSBsZW5ndGgpICYmIChoYXMgPSBvLmhhc093blByb3BlcnR5KGspKTtcbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gaGFzO1xufTtcblxuLyoqXG4gKiBTZXQgbmVzdGVkIG9iamVjdHMgdHJlZSBwcm9wZXJ0eVxuICogUmV0dXJucyBjaGFuZ2VkIHByb3BlcnR5IG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHt5OiA2fVxuICogdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0sIChsYXN0LCB2YWwpID0+IGxhc3Q/IDY6ICh2YWwgfHwge30pKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLnNldFByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0LCBmbikge1xuICBsZXQgY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoZnVuY3Rpb24obywgaykge1xuICAgIGkrKztcblxuICAgIGlmKHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIHJldHVybiBjdXJyZW50ID0gb1trXSA9IGZuKGkgPT0gbGVuZ3RoKTtcbiAgICB9XG5cbiAgICBvW2tdID0gZm4oaSA9PSBsZW5ndGgsIG9ba10pO1xuICAgIGN1cnJlbnQgPSBvO1xuXG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIGN1cnJlbnQ7XG59O1xuXG4vKipcbiAqXG4gKiBEZWxldGUgcHJvcGVydHkgZnJvbSBuZXN0ZWQgb2JqZWN0cyB0cmVlXG4gKiBSZXR1cm5zIGRlbGV0ZWQgcHJvcGVydHkgdmFsdWVcbiAqIFlvdSBjYW4gY2FuY2VsIGRlbGV0aW5nIGlmIHdpbGwgcmV0dXJuIGZhbHNlIGluIHRoZSBjYWxsYmFjayBmdW5jdGlvblxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIDVcbiAqIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19KTtcbiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyA1XG4gKiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSwgdmFsID0+IHZhbCAhPSA1KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbZm5dXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QsIGZuKSB7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IHZhbHVlO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoZnVuY3Rpb24obywgaykge1xuICAgIGkrKztcblxuICAgIGlmKHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBpZihpID09IGxlbmd0aCkge1xuICAgICAgdmFsdWUgPSBvW2tdO1xuXG4gICAgICBpZighZm4gfHwgZm4odmFsdWUpKSB7XG4gICAgICAgIGRlbGV0ZSBvW2tdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuXG4vKipcbiAqIEdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSB0YXJnZXQgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xuXG51dGlscy5nZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQgPSBmdW5jdGlvbih0YXJnZXQsIGtleSkge1xuICBsZXQgY2hlY2sgPSAob2JqKSA9PiB7XG4gICAgaWYob2JqLnByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgbGV0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG5cbiAgICBpZighcHJvdG8pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjaGVjayhwcm90byk7XG4gIH07XG5cbiAgcmV0dXJuIGNoZWNrKHRhcmdldCk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgb3duIHByb3BlcnR5IHRhcmdldCBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG51dGlscy5nZXRPd25Qcm9wZXJ0eVRhcmdldCA9IGZ1bmN0aW9uKHRhcmdldCwga2V5KSB7XG4gIGxldCBjaGVjayA9IChvYmopID0+IHtcbiAgICBpZihvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBsZXQgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcblxuICAgIGlmKCFwcm90bykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoZWNrKHByb3RvKTtcbiAgfTtcblxuICByZXR1cm4gY2hlY2sodGFyZ2V0KTtcbn07XG5cbi8qKlxuICogQ2xlYXIgdmFsdWUgcHJveHkgaWYgaXQgZXhpc3RlbnRcbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuY2xlYXJTY29wZVByb3h5ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCAhdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBsZXQgY2xlYXIgPSAob2JqKSA9PiB7XG4gICAgZm9yKGxldCBrIGluIG9iaikge1xuICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmKG9ialtrXSAmJiB0eXBlb2Ygb2JqW2tdID09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmKG9ialtrXS5fX2lzUHJveHkpIHtcbiAgICAgICAgICBvYmpba10gPSBvYmpba10uX190YXJnZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBjbGVhcihvYmpba10pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBpZih2YWx1ZS5fX2lzUHJveHkpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLl9fdGFyZ2V0O1xuICB9XG5cbiAgY2xlYXIodmFsdWUpO1xuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cblxuLyoqXG4gKiBHZW5lcmF0ZSByYW5kb20gc3RyaW5nXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5jcmVhdGVSYW5kb21TdHJpbmcgPSBmdW5jdGlvbihsZW5ndGggPSAxNiwgZm4gPSBudWxsKSB7XG4gIGxldCBzdHIgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgbGVuZ3RoICsgMik7XG4gIGxldCB2YWwgPSAnJztcblxuICBmb3IobGV0IGkgPSAwLCBsID0gc3RyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmKE1hdGgucmFuZG9tKCkgPiAwLjY2KSB7XG4gICAgICB2YWwgKz0gc3RyW2ldLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFsICs9IHN0cltpXTtcbiAgICB9XG4gIH1cblxuICBpZihmbiAmJiBmbih2YWwpKSB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlUmFuZG9tU3RyaW5nKGxlbmd0aCwgZm4pO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHV0aWxzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy5qcyIsImltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcbiAgY29uc3RydWN0b3IoYmFzZVVybCwgZGVmYXVsdHMpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSBiYXNlVXJsPyAoYmFzZVVybC5yZXBsYWNlKC9cXC8kLywgJycpICsgJy8nKTogJyc7XG5cbiAgICB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgc3RhdHVzRXJyb3JzUGF0dGVybjogL14oW14yM10pfDQwNC8sXG4gICAgICAuLi4oZGVmYXVsdHMgfHwge30pXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIHJlcXVlc3Qgd2l0aCBhbnkgbWV0aG9kXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcXVlcnkob3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgdXJsO1xuICAgICAgbGV0IHhocjtcblxuICAgICAgb3B0aW9ucyA9IHsuLi50aGlzLmRlZmF1bHRzLCAuLi4ob3B0aW9ucyB8fCB7fSl9O1xuXG4gICAgICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICh0eXBlb2Ygb3B0aW9ucy5vblN0YXJ0ID09ICdmdW5jdGlvbicpICYmIG9wdGlvbnMub25TdGFydCh4aHIpO1xuICAgICAgb3B0aW9ucyA9IHRoaXMudHJhbnNmb3JtQmVmb3JlKG9wdGlvbnMpO1xuICAgICAgdXJsID0gdGhpcy5iYXNlVXJsPyBgJHt0aGlzLmJhc2VVcmx9JHtvcHRpb25zLnVybC5yZXBsYWNlKC9eXFwvLywgJycpfWA6IG9wdGlvbnMudXJsO1xuICAgICAgeGhyLm9wZW4ob3B0aW9ucy5tZXRob2QsIHVybCwgdHJ1ZSwgb3B0aW9ucy51c2VyLCBvcHRpb25zLnBhc3N3b3JkKTtcbiAgICAgIG9wdGlvbnMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyB8fCB7fTtcblxuICAgICAgaWYob3B0aW9ucy5qc29uKSB7XG4gICAgICAgIG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuanNvbik7XG4gICAgICAgIG9wdGlvbnMuaGVhZGVyc1snY29udGVudC10eXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgIG9wdGlvbnMucmVzcG9uc2VUeXBlID0gb3B0aW9ucy5yZXNwb25zZVR5cGUgfHwgJ2pzb24nO1xuICAgICAgfVxuICAgICAgZWxzZSBpZihvcHRpb25zLmZvcm0pIHtcbiAgICAgICAgb3B0aW9ucy5ib2R5ID0gdGhpcy5jcmVhdGVGb3JtRGF0YShvcHRpb25zLmZvcm0pO1xuICAgICAgICBvcHRpb25zLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddID0gJ211bHRpcGFydC9mb3JtLWRhdGEnO1xuICAgICAgfVxuXG4gICAgICBpZihvcHRpb25zLmhhc093blByb3BlcnR5KCd0aW1lb3V0JykpIHtcbiAgICAgICAgeGhyLnRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQ7XG4gICAgICB9XG5cbiAgICAgIGlmKG9wdGlvbnMucmVzcG9uc2VUeXBlKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSBvcHRpb25zLnJlc3BvbnNlVHlwZTtcbiAgICAgIH1cblxuICAgICAgaWYob3B0aW9ucy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IG9wdGlvbnMud2l0aENyZWRlbnRpYWxzO1xuICAgICAgfVxuXG4gICAgICBpZihvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgZm9yKGxldCBrIGluIG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICAgIGlmKCFvcHRpb25zLmhlYWRlcnMuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGssIG9wdGlvbnMuaGVhZGVyc1trXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYob3B0aW9ucy5wYXJhbXMpIHtcbiAgICAgICAgbGV0IHN0ciA9IHRoaXMucGFyYW1zVG9RdWVyeShvcHRpb25zLnBhcmFtcyk7XG5cbiAgICAgICAgaWYoc3RyKSB7XG4gICAgICAgICAgdXJsICs9IFwiP1wiICsgc3RyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKHR5cGVvZiBvcHRpb25zLm9uUHJvZ3Jlc3MgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB4aHIub25wcm9ncmVzcyA9ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gb3B0aW9ucy5vblByb2dyZXNzKHhocik7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IHRoaXMudHJhbnNmb3JtQWZ0ZXIoeGhyKTtcblxuICAgICAgICBpZigoeGhyLnN0YXR1cyArICcnKS5tYXRjaChvcHRpb25zLnN0YXR1c0Vycm9yc1BhdHRlcm4pKSB7XG4gICAgICAgICAgbGV0IGVyciA9IG5ldyBFcnJvcihgUmVxdWVzdCB0byBcIiR7dXJsfVwiIHJldHVybnMgZmFpbHVyZSBzdGF0dXMgY29kZSAke3hoci5zdGF0dXN9YCk7XG5cbiAgICAgICAgICBlcnIucmVzcG9uc2UgPSByZXNwb25zZTtcblxuICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgfSBcbiAgICAgICAgXG4gICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9udGltZW91dCA9ICgpID0+IHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgUmVxdWVzdCB0byBcIiR7dXJsfVwiIHRpbWVkIG91dGApKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbmVycm9yID0gKGVycikgPT4ge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5zZW5kKG9wdGlvbnMuYm9keSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBvYmplY3QgdG8gcXVlcnkgc3RyaW5nXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHBhcmFtc1RvUXVlcnkob2JqKSB7XG4gICAgbGV0IHNlcCA9ICcmJztcbiAgICBsZXQgZXEgPSAnPSc7XG5cbiAgICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLm1hcCgoaykgPT4ge1xuICAgICAgbGV0IGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KGspO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmpba10pKSB7XG4gICAgICAgIGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KGspO1xuXG4gICAgICAgIHJldHVybiBvYmpba10ubWFwKCh2LCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGtzICsgYFske2l9XWAgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudCh2KTtcbiAgICAgICAgfSkuam9pbihzZXApO1xuICAgICAgfVxuICAgICAgZWxzZSBpZihvYmpba10gJiYgdHlwZW9mIG9ialtrXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbGV0IG9wdCA9IFtdO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKG9ialtrXSkubWFwKChrZXkpID0+IHtcbiAgICAgICAgICBvcHQucHVzaChrcyArIGBbJHtrZXl9XWAgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba11ba2V5XSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gb3B0LmpvaW4oc2VwKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4ga3MgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba10pO1xuICAgICAgfVxuICAgIH0pLmpvaW4oc2VwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHF1ZXJ5IHN0cmluZyB0byBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgcGFyYW1zRnJvbVF1ZXJ5KHN0cikge1xuICAgIGxldCBxdWVyeSA9IHt9O1xuICAgIGxldCBhbXBzID0gc3RyLnNwbGl0KCcmJyk7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gYW1wcy5sZW5ndGg7IGkgPGw7IGkrKykge1xuICAgICAgbGV0IGVxcyA9ICBhbXBzW2ldLnNwbGl0KCc9Jyk7XG4gICAgICBsZXQga2V5ID0gZGVjb2RlVVJJQ29tcG9uZW50KGVxc1swXSk7XG4gICAgICBsZXQgdmFsID0gZGVjb2RlVVJJQ29tcG9uZW50KGVxc1sxXSk7XG5cbiAgICAgIGlmKCFrZXkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgICAgcXVlcnlba2V5XS5wdXNoKHZhbCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKHF1ZXJ5W2tleV0pIHtcbiAgICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldLCB2YWxdO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHF1ZXJ5W2tleV0gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBtdWx0aXBhcnQgZm9ybSBkYXRhIGZyb20gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICogQHBhcmFtIHtGb3JtRGF0YX0gW2RhdGFdXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbmFtZXNwYWNlXVxuICAgKlxuICAgKiBAcmV0dXJucyB7Rm9ybURhdGF9XG4gICAqL1xuICBjcmVhdGVGb3JtRGF0YShvYmosIGRhdGEgPSBudWxsLCBuYW1lc3BhY2UgPSAnJykge1xuICAgIGxldCBmZCA9IGRhdGEgfHwgbmV3IEZvcm1EYXRhKCk7XG5cbiAgICBmb3IobGV0IGsgaW4gb2JqKSB7XG4gICAgICBpZihvYmouaGFzT3duUHJvcGVydHkoaykgJiYgb2JqW2tdKSB7XG4gICAgICAgIGxldCBrZXkgPSBuYW1lc3BhY2U/IG5hbWVzcGFjZSArICdbJyArIGsgKyAnXSc6IGs7XG5cbiAgICAgICAgaWYgKG9ialtrXSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICBmZC5hcHBlbmQoa2V5LCBvYmpba10udG9JU09TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodXRpbHMuaXNQbGFpbk9iamVjdChvYmpba10pKSB7XG4gICAgICAgICAgdGhpcy5jcmVhdGVGb3JtRGF0YShvYmpba10sIGZkLCBrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGZkLmFwcGVuZChrZXksIG9ialtrXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmQ7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIGRhdGEgYmVmb3JlIGEgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgdHJhbnNmb3JtQmVmb3JlKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gZGF0YSBhZnRlciBhIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtYTUxIdHRwUmVxdWVzdH0geGhyXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICB0cmFuc2Zvcm1BZnRlcih4aHIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeGhyOiB4aHIsXG4gICAgICBkYXRhOiB4aHIucmVzcG9uc2UsXG4gICAgICBzdGF0dXM6IHhoci5zdGF0dXNcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIEdFVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBnZXQodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdHRVQnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgREVMRVRFIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGRlbGV0ZSh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ0RFTEVURSc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBQT1NUIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHBvc3QodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQT1NUJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIFBVVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBwdXQodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQVVQnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgUEFUQ0ggcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcGF0Y2godXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQQVRDSCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoKTtcblxucmVxdWVzdC5fX2luc3RhbmNlcyA9IHt9O1xuXG4vKipcbiAqIEFkZCBuZXcgcmVxdWVzdCBpbnN0YW5jZSB0byB0aGUgbWFpbiBzZXJ2aWNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7UmVxdWVzdH0gaW5zdGFuY2VcbiAqL1xucmVxdWVzdC5hZGRJbnN0YW5jZSA9IGZ1bmN0aW9uKG5hbWUsIGluc3RhbmNlKSB7XG4gIHRoaXMuX19pbnN0YW5jZXNbbmFtZV0gPSBpbnN0YW5jZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGluc3RhbmNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucmVxdWVzdC5yZW1vdmVJbnN0YW5jZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZGVsZXRlIHRoaXMuX19pbnN0YW5jZXNbbmFtZV07XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWVzdCwgJ3VzZScsIHtcbiAgZ2V0OiAoKSA9PiB7XG4gICAgcmV0dXJuIHJlcXVlc3QuX19pbnN0YW5jZXM7XG4gIH1cbn0pO1xuXG5yZXF1ZXN0LlJlcXVlc3QgPSBSZXF1ZXN0O1xuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvcmVxdWVzdC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMudmFsdWVLZXkgPSAndmFsdWUnO1xuICB9XG5cbiAgY2hhbmdlZFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBjaGFuZ2VkRm9jdXModmFsdWUpIHtcbiAgICB0aGlzLnNldEZvY3VzKHZhbHVlKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ2ZvY3VzJykgJiYgdGhpcy5zZXRGb2N1cyh0aGlzLmF0dHJzLmZvY3VzKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCd2YWx1ZScpICYmIHRoaXMuc2V0VmFsdWUodGhpcy5hdHRycy52YWx1ZSk7XG4gIH1cblxuICBzZXRGb2N1cyh2YWx1ZSkge1xuICAgIHZhbHVlPyB0aGlzLnNldEVsZW1lbnRGb2N1cygpOiB0aGlzLnNldEVsZW1lbnRCbHVyKCk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICh0aGlzLmVsW3RoaXMudmFsdWVLZXldICE9PSB2YWx1ZSkgJiYgKHRoaXMuZWxbdGhpcy52YWx1ZUtleV0gPSB2YWx1ZSA9PT0gMD8gJzAnOiAodmFsdWUgfHwgJycpKTtcbiAgfVxuXG4gIHNldEVsZW1lbnRGb2N1cygpIHtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cblxuICBzZXRFbGVtZW50Qmx1cigpIHtcbiAgICB0aGlzLmVsLmJsdXIoKTtcbiAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tpbl0nO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdmb3InLCBGb3IpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnb2wnLCBGb3IpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndWwnLCBGb3IpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGhlYWQnLCBGb3IpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGJvZHknLCBGb3IpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGZvb3QnLCBGb3IpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndHInLCBMb29wKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2xvb3AnLCBMb29wKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuX19pdGVyYXRvciA9IG51bGw7XG4gICAgdGhpcy5fX2tleSA9IG51bGw7XG4gICAgdGhpcy5fX3ZhbHVlID0gbnVsbDtcbiAgICB0aGlzLl9faW5kZXggPSBudWxsO1xuICAgIHRoaXMuX19jb21wYXJpc29uVmFsdWUgPSBudWxsO1xuICAgIHRoaXMuaXRlcmF0b3JzID0ge307XG4gICAgdGhpcy5pdGVyYXRvclJlZiA9IG51bGw7XG4gICAgdGhpcy5pdGVyYXRvck91dGVySFRNTCA9IG51bGw7XG4gIH1cblxuICBjaGFuZ2VkSW4oZGF0YSkge1xuICAgIHRoaXMuZHJhdyhkYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5jcmVhdGVJdGVyYXRvcigpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5kcmF3KHRoaXMuYXR0cnMuaW4pO1xuICB9XG5cbiAgY3JlYXRlSXRlcmF0b3IoKSB7XG4gICAgbGV0IGVsO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuZWwuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLmVsLmNoaWxkcmVuW2ldO1xuXG4gICAgICBpZihjaGlsZC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpID09ICdsb29wJykge1xuICAgICAgICBlbCA9IGNoaWxkO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBlbCA9IGNoaWxkO1xuICAgIH1cblxuICAgIGlmKCFlbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdcIkZvclwiIGNvbXBvbmVudCBtdXN0IGhhdmUgYXQgbGVhc3Qgb25lIGNoaWxkJylcbiAgICB9XG5cbiAgICBsZXQgY29tcG9uZW50TmFtZSA9IGVsLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50Jyk7XG5cbiAgICBpZihjb21wb25lbnROYW1lICE9ICdsb29wJykge1xuICAgICAgbGV0IGNvbXBvbmVudCA9IEFraWxpLmNvbXBvbmVudChjb21wb25lbnROYW1lIHx8IGVsLnRhZ05hbWUpO1xuXG4gICAgICBpZighY29tcG9uZW50KSB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY29tcG9uZW50JywgJ2xvb3AnKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoIShjb21wb25lbnQucHJvdG90eXBlIGluc3RhbmNlb2YgRm9yKSkge1xuICAgICAgICBsZXQgbWFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xvb3AnKTtcblxuICAgICAgICBtYXNrLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgZWwgPSBtYXNrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaHRtbCA9IGVsLmlubmVySFRNTDtcbiAgICB0aGlzLml0ZXJhdG9yUmVmID0gZWwubmV4dFNpYmxpbmc7XG4gICAgdGhpcy5pdGVyYXRvck91dGVySFRNTCA9IGVsLm91dGVySFRNTDtcbiAgICBlbC5yZW1vdmUoKTtcbiAgfVxuXG4gIGNyZWF0ZUl0ZXJhdG9yRWxlbWVudCgpIHtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXG4gICAgZWwuaW5uZXJIVE1MID0gdGhpcy5pdGVyYXRvck91dGVySFRNTDtcbiAgICBlbCA9IGVsLmNvbnRlbnQuZmlyc3RDaGlsZDtcblxuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIGxvb3Aoa2V5LCB2YWx1ZSwga2V5cywgaW5kZXgpIHtcbiAgICB0aGlzLl9faW5kZXggPSBpbmRleDtcbiAgICB0aGlzLl9fa2V5ID0ga2V5O1xuICAgIHRoaXMuX192YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuX19jb21wYXJpc29uVmFsdWUgPSB1dGlscy5jb3B5KHZhbHVlKTtcblxuICAgIGxldCBoYXNoID0gJyc7XG4gICAgbGV0IGZvdW5kID0gMDtcblxuICAgIGlmKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JyAmJiB2YWx1ZS5fX2hhc2gpIHtcbiAgICAgIGhhc2ggPSB2YWx1ZS5fX2hhc2g7XG4gICAgfVxuXG4gICAgaWYodGhpcy5pdGVyYXRvcnNbaGFzaF0pIHtcbiAgICAgIGtleSA9IGhhc2g7XG4gICAgICBmb3VuZCA9IDI7XG4gICAgfVxuICAgIGVsc2UgaWYodGhpcy5pdGVyYXRvcnNba2V5XSkge1xuICAgICAgZm91bmQgPSAxO1xuICAgIH1cblxuICAgIGlmKGZvdW5kKSB7XG4gICAgICBsZXQgaXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yc1trZXldO1xuXG4gICAgICBpZihmb3VuZCA9PSAyKSB7XG4gICAgICAgIGxldCBjVmFsdWUgPSBpdGVyYXRvci5jb21wYXJzaW9uLnZhbHVlO1xuICAgICAgICBsZXQgY0NvcHkgPSBpdGVyYXRvci5jb21wYXJzaW9uLmNvcHk7XG5cbiAgICAgICAgaWYgKHRoaXMuX19pbmRleCAhPT0gaXRlcmF0b3IuaW5kZXgpIHtcbiAgICAgICAgICBpdGVyYXRvci5zZXRJbmRleCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX19rZXkgIT09IGl0ZXJhdG9yLmtleSkge1xuICAgICAgICAgIGl0ZXJhdG9yLnNldEtleSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF1dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSh2YWx1ZSwgY1ZhbHVlLCBjQ29weSwgdGhpcy5fX2NvbXBhcmlzb25WYWx1ZSkpIHtcbiAgICAgICAgICBpdGVyYXRvci5zZXRWYWx1ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAga2V5c1trZXldID0gaXRlcmF0b3I7XG4gICAgICAgIGRlbGV0ZSB0aGlzLml0ZXJhdG9yc1trZXldO1xuXG4gICAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pdGVyYXRvclJlZiA9IGl0ZXJhdG9yLmVsLm5leHRTaWJsaW5nO1xuICAgICAgaXRlcmF0b3IuX19kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgbGV0IGVsID0gdGhpcy5jcmVhdGVJdGVyYXRvckVsZW1lbnQoKTtcblxuICAgIGVsLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcbiAgICB0aGlzLmVsLmluc2VydEJlZm9yZShlbCwgdGhpcy5pdGVyYXRvclJlZik7XG4gICAgQWtpbGkuY29tcGlsZShlbCk7XG5cbiAgICBpZih2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICAgIGlmKCF2YWx1ZS5fX2hhc2gpIHtcbiAgICAgICAgaGFzaCA9IHV0aWxzLmNyZWF0ZVJhbmRvbVN0cmluZygzMiwgKHN0cikgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLml0ZXJhdG9yc1tzdHJdO1xuICAgICAgICB9KTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsdWUsICdfX2hhc2gnLCB7XG4gICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgICAgdmFsdWU6IGhhc2hcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGtleXNbaGFzaF0gPSB0aGlzLl9faXRlcmF0b3I7XG4gICAgICBkZWxldGUgdGhpcy5pdGVyYXRvcnNbaGFzaF07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYoQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICBsZXQgZVZhbHVlID0gdHlwZW9mIHRoaXMuX192YWx1ZSA9PSAnc3RyaW5nJz8gYFwiJHt0aGlzLl9fdmFsdWV9XCJgOiB0aGlzLl9fdmFsdWU7XG5cbiAgICAgICAgbGV0IGFyZ3MgPSBbXG4gICAgICAgICAgYFwiRm9yXCIgY29tcG9uZW50IGxvb3AgaXRlbXMgc2hvdWxkIGhhdmUgXCJvYmplY3RcIiB0eXBlIGZvciBoaWdoZXIgcGVyZm9ybWFuY2UuYCxcbiAgICAgICAgICBgWW91IGNhbiBjaGFuZ2UgJHtlVmFsdWV9IHRvIHt2YWx1ZTogJHtlVmFsdWV9fSwgZm9yIGV4YW1wbGUuYFxuICAgICAgICBdO1xuXG4gICAgICAgIGNvbnNvbGUud2Fybi5hcHBseShjb25zb2xlLndhcm4sIGFyZ3MpO1xuICAgICAgfVxuXG4gICAgICBrZXlzW2tleV0gPSB0aGlzLl9faXRlcmF0b3I7XG4gICAgICBkZWxldGUgdGhpcy5pdGVyYXRvcnNba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWwuX19ha2lsaTtcbiAgfVxuXG4gIGRyYXcoZGF0YSkge1xuICAgIGlmICh0eXBlb2YgZGF0YSAhPSAnb2JqZWN0JyB8fCBkYXRhID09PSBudWxsKSB7XG4gICAgICBpZihBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgXCJGb3JcIiBjb21wb25lbnQgXCJpblwiIGF0dHJpYnV0ZSB2YWx1ZSB0eXBlIG11c3QgYmUgYW4gb2JqZWN0L2FycmF5YCk7XG4gICAgICAgIGRhdGEgPSBbXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQga2V5cyA9IHt9O1xuICAgIGxldCBpbmRleEtleXMgPSBbXTtcbiAgICBsZXQgbGFzdEVsZW1lbnQgPSBudWxsO1xuICAgIGxldCBsYXN0ID0gdGhpcy5lbC5jaGlsZHJlblt0aGlzLmVsLmNoaWxkcmVuLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYobGFzdCAmJiAhKGxhc3QuX19ha2lsaSBpbnN0YW5jZW9mIExvb3ApKSB7XG4gICAgICBsYXN0RWxlbWVudCA9IGxhc3Q7XG4gICAgfVxuXG4gICAgaWYoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGRhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGluZGV4S2V5cy5wdXNoKHRoaXMubG9vcChpLCBkYXRhW2ldLCBrZXlzLCBpKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IGkgPSAwO1xuXG4gICAgICBmb3IobGV0IGsgaW4gZGF0YSkge1xuICAgICAgICBpZighZGF0YS5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXhLZXlzLnB1c2godGhpcy5sb29wKGssIGRhdGFba10sIGtleXMsIGkpKTtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBpbmRleEtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgaXRlcmF0b3IgPSBpbmRleEtleXNbaV07XG5cbiAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoaXRlcmF0b3IuZWwpO1xuICAgICAgaXRlcmF0b3IuaXRlcmF0ZShpKTtcbiAgICB9XG5cbiAgICBsYXN0RWxlbWVudCAmJiB0aGlzLmVsLmFwcGVuZENoaWxkKGxhc3RFbGVtZW50KTtcblxuICAgIGZvcihsZXQgayBpbiB0aGlzLml0ZXJhdG9ycykge1xuICAgICAgaWYoIXRoaXMuaXRlcmF0b3JzLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLml0ZXJhdG9yc1trXS5fX2Rlc3Ryb3koKTtcbiAgICB9XG5cbiAgICB0aGlzLml0ZXJhdG9ycyA9IGtleXM7XG4gIH1cbn07XG5cbmV4cG9ydCBjbGFzcyBMb29wIGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmZvciA9IG51bGw7XG4gICAgdGhpcy5odG1sID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgdGhpcy5pc0ZvciA9IHRoaXMuZWwuaGFzQXR0cmlidXRlKCdpbicpO1xuXG4gICAgaWYoIXRoaXMuaXNGb3IgJiYgISh0aGlzLmVsLnBhcmVudE5vZGUuX19ha2lsaSBpbnN0YW5jZW9mIEZvcikpIHtcbiAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19pdGVyYXRvciA9IHRoaXM7XG4gICAgdGhpcy5mb3IgPSB0aGlzLl9fcGFyZW50Ll9fYWtpbGk7XG4gICAgdGhpcy5zZXRJbmRleCgpO1xuICAgIHRoaXMuc2V0S2V5KCk7XG4gICAgdGhpcy5zZXRWYWx1ZSgpO1xuXG4gICAgdGhpcy5pc0ZvciAmJiBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmlzRm9yICYmIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBzZXRJbmRleCgpIHtcbiAgICB0aGlzLmluZGV4ID0gdGhpcy5mb3IuX19pbmRleDtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wSW5kZXgnLCB0aGlzLmluZGV4KTtcbiAgfVxuXG4gIHNldEtleSgpIHtcbiAgICB0aGlzLmtleSA9IHRoaXMuZm9yLl9fa2V5O1xuICAgIHRoaXMuc2NvcGUuX19zZXQoJ2xvb3BLZXknLCB0aGlzLmtleSk7XG4gIH1cblxuICBzZXRWYWx1ZSgpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3IuX192YWx1ZTtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wVmFsdWUnLCB0aGlzLnZhbHVlLCB0cnVlKTtcblxuICAgIHRoaXMuY29tcGFyc2lvbiA9IHtcbiAgICAgIGNvcHk6IHRoaXMuZm9yLl9fY29tcGFyaXNvblZhbHVlLFxuICAgICAgdmFsdWU6IHRoaXMuZm9yLl9fdmFsdWVcbiAgICB9O1xuICB9XG5cbiAgaXRlcmF0ZShpbmRleCkge31cbn1cblxuRm9yLkxvb3AgPSBMb29wO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZm9yLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdyb3V0ZScsIFJvdXRlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtUcmFuc2l0aW9ufSB0cmFuc2l0aW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgc2V0VHJhbnNpdGlvbih0cmFuc2l0aW9uKSB7XG4gICAgbGV0IHN0YXRlID0gdHJhbnNpdGlvbi5wYXRoLnN0YXRlO1xuICAgIGxldCBwYXJhbXMgPSB0cmFuc2l0aW9uLnBhdGgucGFyYW1zO1xuICAgIGxldCB1cmwgPSB0cmFuc2l0aW9uLnVybDtcbiAgICBsZXQgcXVlcnkgPSB0cmFuc2l0aW9uLnF1ZXJ5O1xuICAgIGxldCBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbiAgICBmdW5jdGlvbiBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24ocGF0aCkge1xuICAgICAgaWYocGF0aC5wYXJlbnQpIHtcbiAgICAgICAgaWYgKHBhdGgucGFyZW50LmNvbXBvbmVudCkge1xuICAgICAgICAgIHJldHVybiBwYXRoLnBhcmVudC5jb21wb25lbnQuX19zY29wZS5fX3RyYW5zaXRpb24ucGF0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24ocGF0aC5wYXJlbnQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLl9fc2NvcGUuX190cmFuc2l0aW9uID0ge1xuICAgICAgcGF0aDoge1xuICAgICAgICBzdGF0ZTogc3RhdGUubmFtZSxcbiAgICAgICAgZGF0YTogdHJhbnNpdGlvbi5wYXRoLmRhdGEsXG4gICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICBwYXJlbnQ6IGdldFBhcmVudFNjb3BlVHJhbnNpdGlvbih0cmFuc2l0aW9uLnBhdGgpXG4gICAgICB9LFxuICAgICAgcGFyYW1zOiB0cmFuc2l0aW9uLnBhcmFtcyxcbiAgICAgIHVybDogdXJsLFxuICAgICAgcXVlcnk6IHF1ZXJ5XG4gICAgfTtcblxuICAgIGlmKCF0cmFuc2l0aW9uLnBhdGgubG9hZGVkKSB7XG4gICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUudGVtcGxhdGUpIHtcbiAgICAgIHRoaXMuZW1wdHkoKTtcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gYDxjb21wb25lbnQ+JHtzdGF0ZS50ZW1wbGF0ZX08L2NvbXBvbmVudD5gO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS50ZW1wbGF0ZVVybCkge1xuICAgICAgcCA9IHJlcXVlc3QuZ2V0KHN0YXRlLnRlbXBsYXRlVXJsKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgdGhpcy5lbXB0eSgpO1xuICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IGA8Y29tcG9uZW50PiR7cmVzLmRhdGF9PC9jb21wb25lbnQ+YDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBwLnRoZW4oKCkgPT4ge1xuICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9yb3V0ZS5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVsLCBjb21wb25lbnQpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIHRoZSBldmVudFxuICAgKlxuICAgKiBAcGFyYW0geyp9IGRhdGEgLSBzZW5kaW5nIGRhdGEuIFdpbGwgYmUgaW4gdGhlIGV2ZW50LmRldGFpbFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlXVxuICAgKi9cbiAgdHJpZ2dlcihkYXRhLCBvcHRpb25zID0ge30sIGZvcmNlID0gZmFsc2UpIHtcbiAgICBpZihmb3JjZSB8fCAhdGhpcy5pbkV2YWx1YXRpbmcoKSkge1xuICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCh0aGlzLm5hbWUsIHtkZXRhaWw6IGRhdGEsIC4uLm9wdGlvbnN9KSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoIHRoZSBldmVudFxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBfRXZlbnQgLSBjbGFzcyBvZiB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZV1cbiAgICovXG4gIGRpc3BhdGNoKF9FdmVudCwgb3B0aW9ucyA9IHt9LCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgaWYoZm9yY2UgfHwgIXRoaXMuaW5FdmFsdWF0aW5nKCkpIHtcbiAgICAgIHRoaXMuZWwuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50KHRoaXMubmFtZSwgb3B0aW9ucykpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBldmVudCBjYWxsYmFjayBkb2Vzbid0IHJ1biByZWN1cnNpdmVcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpbkV2YWx1YXRpbmcoKSB7XG4gICAgbGV0IGRhdGEgPSB0aGlzLmNvbXBvbmVudC5fX2V2YWx1YXRpbmdFdmVudDtcblxuICAgIGlmKCFkYXRhKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGEuZWwgPT09IHRoaXMuZWwgJiYgZGF0YS5ldmVudC50eXBlID09PSB0aGlzLm5hbWUgJiYgZGF0YS5jb21wb25lbnQgPT09IHRoaXMuY29tcG9uZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgdGhlIGZ1bmN0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gICAqL1xuICBiaW5kKGZuKSB7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKHRoaXMubmFtZSwgdGhpcy5mbiA9IGZuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgdGhlIGZ1bmN0aW9uXG4gICAqL1xuICB1bmJpbmQoKSB7XG4gICAgdGhpcy5mbiAmJiB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5uYW1lLCB0aGlzLmZuKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ldmVudC1lbWl0dGVyLmpzIiwiaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3JlcXVlc3QuanMnO1xuaW1wb3J0IFJvdXRlIGZyb20gJy4uL2NvbXBvbmVudHMvcm91dGUuanMnO1xuXG5leHBvcnQgY2xhc3MgVHJhbnNpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHVybCwgcXVlcnksIGhhc2ggPSAnJywgcHJldmlvdXMgPSBudWxsKSB7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgIHRoaXMuaGFzaCA9IGhhc2g7XG4gICAgdGhpcy5wcmV2aW91cyA9IHByZXZpb3VzO1xuICAgIHRoaXMucGF0aCA9IG51bGw7XG4gICAgdGhpcy5yb3V0ZXMgPSBbXTtcbiAgICB0aGlzLnN0YXRlcyA9IFtdO1xuICAgIHRoaXMucGFyYW1zID0ge307XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IGZhbHNlO1xuICB9XG5cbiAgcmVkaXJlY3QoKSB7XG4gICAgdGhpcy5jYW5jZWwoKTtcbiAgICByb3V0ZXIuc3RhdGUuYXBwbHkocm91dGVyLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgc2V0UGF0aChwYXRoKSB7XG4gICAgcGF0aC5wYXJlbnQgPSB0aGlzLnBhdGggfHwgbnVsbDtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIHRoaXMucm91dGVzLnB1c2gocGF0aCk7XG4gICAgdGhpcy5zdGF0ZXMucHVzaChwYXRoLnN0YXRlKTtcbiAgICB0aGlzLnBhcmFtcyA9ICFwYXRoLnBhcmVudD8gcGF0aC5wYXJhbXM6IHsuLi5wYXRoLnBhcmVudC5wYXJhbXMsIC4uLnBhdGgucGFyYW1zfTtcbiAgfVxuXG4gIGdldFJvdXRlKHN0YXRlKSB7XG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMucm91dGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJvdXRlID0gdGhpcy5yb3V0ZXNbaV07XG5cbiAgICAgIGlmKHJvdXRlLnN0YXRlID09PSBzdGF0ZSkge1xuICAgICAgICByZXR1cm4gcm91dGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBoYXNTdGF0ZShzdGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlcy5pbmRleE9mKHN0YXRlKSAhPSAtMTtcbiAgfVxuXG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gdHJ1ZTtcbiAgfVxufVxuXG5jb25zdCByb3V0ZXIgPSB7fTtcblxucm91dGVyLmJhc2VVcmwgPSBcIi9cIjtcbnJvdXRlci5zdGF0ZXMgPSBbXTtcbnJvdXRlci5oYXNoTW9kZSA9IHRydWU7XG5yb3V0ZXIuX19yZWRpcmVjdHMgPSAwO1xucm91dGVyLl9faW5pdCA9IGZhbHNlO1xucm91dGVyLl9fb3B0aW9ucyA9IHt9O1xucm91dGVyLl9fcGFyYW1SZWdleCA9IC8oOihbXFx3XFxkLV0rKSkvZztcbnJvdXRlci5fX3JvdXRlU2VsZWN0b3IgPSBjID0+IGMgaW5zdGFuY2VvZiBSb3V0ZTtcblxuLyoqXG4gKiBBZGQgbmV3IHN0YXRlIHRvIHRoZSByb3V0ZXJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHN0YXRlIG5hbWUuIFRvIHNldCBwYXJlbnRzIHlvdSBjYW4gdXNlIGRvdCwgZS5nLiAnYXBwLmFydGljbGUuZWRpdCdcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXR0ZXJuIC0gdXJsIHBhdHRlcm4gbGlrZSAnYXBwL2FydGljbGUvOmlkJ1xuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge3JvdXRlcn1cbiAqL1xucm91dGVyLmFkZCA9IGZ1bmN0aW9uIChuYW1lLCBwYXR0ZXJuLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIHRlbXBsYXRlOiAnJyxcbiAgICB0ZW1wbGF0ZVVybDogJycsXG4gICAgYWJzdHJhY3Q6IGZhbHNlLFxuICAgIGhhbmRsZXI6ICh0cmFuc2l0aW9uKSA9PiB7fVxuICB9O1xuXG4gIGlmKCFvcHRpb25zLnRlbXBsYXRlICYmICFvcHRpb25zLnRlbXBsYXRlVXJsKSB7XG4gICAgb3B0aW9ucy5hYnN0cmFjdCA9IHRydWU7XG4gIH1cblxuICBpZih0aGlzLmhhcyhuYW1lKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIFwiJHtuYW1lfVwiIGlzIGFscmVhZHkgZXhpc3RzYClcbiAgfVxuXG4gIHRoaXMuc2V0U3RhdGUobmFtZSwgcGF0dGVybiwgey4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zfSk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBzdGF0ZSBmcm9tIHRoZSBsaXN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucm91dGVyLnJlbW92ZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmKHRoaXMuc3RhdGVzW2ldLm5hbWUgPT0gbmFtZSkge1xuICAgICAgdGhpcy5zdGF0ZXMuc3BsaWNlKGksIDEpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIENoZWNrIHN0YXRlIGV4aXN0c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmKHRoaXMuc3RhdGVzW2ldLm5hbWUgPT0gbmFtZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBDaGFuZ2UgdGhlIHN0YXRlIHRvIHRoZSBwYXNzZWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHN0YXRlIG5hbWVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSAtIHBhcmFtcyBmb3Igc3RhdGUge2lkOiAxfSA9PiAnL2FwcC86aWQnID0+ICcvYXBwLzEnXG4gKiBAcGFyYW0ge29iamVjdH0gW3F1ZXJ5XSAtIHF1ZXJ5IHt4OiAxfSA9PiAnL2FwcC8/eD0xJ1xuICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoXVxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICovXG5yb3V0ZXIuc3RhdGUgPSBmdW5jdGlvbiAobmFtZSwgcGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSAnJywgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUobmFtZSk7XG5cbiAgaWYgKCFzdGF0ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIHJvdXRlIHN0YXRlIHdpdGggbmFtZSAke25hbWV9YCk7XG4gIH1cblxuICBsZXQgdXJsID0gdGhpcy5jcmVhdGVTdGF0ZVVybChzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCk7XG5cbiAgaWYoIW9wdGlvbnMucmVsb2FkICYmIHVybCA9PT0gdGhpcy5nZXRVcmwoKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuX19vcHRpb25zID0gb3B0aW9ucztcbiAgdGhpcy5zZXRVcmwodXJsKTtcbn07XG5cbi8qKlxuICogR28gYmFja1xuICovXG5yb3V0ZXIuYmFjayA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkuYmFjay5hcHBseSh3aW5kb3cuaGlzdG9yeSwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogR28gdG8gYW55IHdheVxuICovXG5yb3V0ZXIuZ28gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LmdvLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBHbyBmb3J3YXJkXG4gKi9cbnJvdXRlci5mb3J3YXJkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeS5mb3J3YXJkLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RhdGUgYnkgdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICovXG5yb3V0ZXIubG9jYXRpb24gPSBmdW5jdGlvbih1cmwsIG9wdGlvbnMgPSB7IHJlbG9hZDogZmFsc2UgfSkge1xuICB0aGlzLl9fb3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgaWYodGhpcy5oYXNoTW9kZSkge1xuICAgIGxldCBjdXJyZW50ID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTtcblxuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gdXJsO1xuICAgIGN1cnJlbnQgPT09IHVybCAmJiB0aGlzLmNoYW5nZVN0YXRlKCkuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgfVxuICBlbHNlIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgJycsIHVybCk7XG4gIH1cbn07XG5cbi8qKlxuICogUm91dGVyIGluaXRpYWxpemF0aW9uLiBTaG91bGQgYmUgY2FsbGVkIGJlZm9yZSBBa2lsaS5pbml0KClcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW2RlZmF1bHRVcmxdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtoYXNoTW9kZT10cnVlXVxuICovXG5yb3V0ZXIuaW5pdCA9IGZ1bmN0aW9uIChkZWZhdWx0VXJsID0gJycsIGhhc2hNb2RlID0gdHJ1ZSkge1xuICBsZXQgb2xkUHVzaFN0YXRlID0gd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlO1xuXG4gIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCByZXMgPSBvbGRQdXNoU3RhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIHJvdXRlci5jaGFuZ2VTdGF0ZSgpLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG5cbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIHRoaXMuX19vblN0YXRlQ2hhbmdlSGFuZGxlciA9ICgpID0+IHtcbiAgICB0aGlzLmNoYW5nZVN0YXRlKCkuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgfTtcblxuICB0aGlzLmRlZmF1bHRVcmwgPSBkZWZhdWx0VXJsO1xuICB0aGlzLmhhc2hNb2RlID0gaGFzaE1vZGU7XG5cbiAgdGhpcy5zdGF0ZXMuc29ydCgoYSwgYikgPT4ge1xuICAgIGEgPSBhLm5hbWUuc3BsaXQoJy4nKS5sZW5ndGg7XG4gICAgYiA9IGIubmFtZS5zcGxpdCgnLicpLmxlbmd0aDtcblxuICAgIHJldHVybiBhIC0gYjtcbiAgfSk7XG5cbiAgbGV0IHN0YXRlcyA9IHt9O1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZXNbaV07XG4gICAgbGV0IHBhcmVudHMgPSBbXTtcblxuICAgIHN0YXRlc1tzdGF0ZS5uYW1lXSA9IHN0YXRlO1xuICAgIHN0YXRlLmNoaWxkcmVuID0gW107XG4gICAgcGFyZW50cyA9IHN0YXRlLm5hbWUuc3BsaXQoJy4nKTtcbiAgICBwYXJlbnRzLnBvcCgpO1xuICAgIHN0YXRlLmxldmVsID0gc3RhdGUuYWJzdHJhY3Q/IG51bGw6IHBhcmVudHMubGVuZ3RoO1xuXG4gICAgaWYgKHBhcmVudHMubGVuZ3RoKSB7XG4gICAgICBsZXQgcGFyZW50TmFtZSA9IHBhcmVudHMuam9pbignLicpO1xuICAgICAgbGV0IHBhcmVudCA9IHN0YXRlc1twYXJlbnROYW1lXTtcblxuICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgcGFyZW50IHJvdXRlIHN0YXRlIFwiJHtwYXJlbnROYW1lfVwiIGZvciBcIiR7c3RhdGUubmFtZX1cImApXG4gICAgICB9XG5cbiAgICAgIGlmKHN0YXRlLmxldmVsICE9PSBudWxsICYmIHBhcmVudC5hYnN0cmFjdCkge1xuICAgICAgICBzdGF0ZS5sZXZlbC0tO1xuICAgICAgfVxuXG4gICAgICBzdGF0ZS5mdWxsUGF0dGVybiA9IHRoaXMuc3BsaXRTbGFzaGVzKHBhcmVudC5mdWxsUGF0dGVybiArICcvJyArIHN0YXRlLnBhdHRlcm4pO1xuICAgICAgcGFyZW50LmNoaWxkcmVuLnB1c2goc3RhdGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHN0YXRlLmZ1bGxQYXR0ZXJuID0gc3RhdGUucGF0dGVybjtcbiAgICB9XG4gIH1cblxuICBpZighdGhpcy5zdGF0ZXMubGVuZ3RoICYmIEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICBjb25zb2xlLndhcm4oYFlvdSBkaWRuJ3QgYWRkIGFueSByb3V0ZXMgdG8gdGhlIHJvdXRlcmApO1xuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5fX29uU3RhdGVDaGFuZ2VIYW5kbGVyKTtcbiAgdGhpcy5fX2luaXQgPSB0cnVlO1xufTtcblxuLyoqXG4gKiBHZXQgc3RhdGUgYnkgbmFtZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gKi9cbnJvdXRlci5nZXRTdGF0ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZXNbaV07XG5cbiAgICBpZiAoc3RhdGUubmFtZSA9PSBuYW1lKSB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIFNldCBzdGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVyblxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqL1xucm91dGVyLnNldFN0YXRlID0gZnVuY3Rpb24gKG5hbWUsIHBhdHRlcm4sIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgc3RhdGUgPSB7Li4ub3B0aW9ucywgbmFtZSwgcGF0dGVybn07XG5cbiAgcm91dGVyLnN0YXRlcy5wdXNoKHN0YXRlKTtcblxuICByZXR1cm4gc3RhdGU7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBzdGF0ZSBieSBuYW1lXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucm91dGVyLnJlbW92ZVN0YXRlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHRoaXMuc3RhdGVzLnNwbGljZShpLCAxKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBTZXQgdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICovXG5yb3V0ZXIuc2V0VXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB0aGlzLmhhc2hNb2RlPyB0aGlzLnNldEhhc2hVcmwodXJsKTogdGhpcy5zZXRIaXN0b3J5VXJsKHVybCk7XG59O1xuXG4vKipcbiAqIFNldCB1cmwgdXNpbmcgaGlzdG9yeVxuICpcbiAqIEBwYXJhbSB1cmxcbiAqL1xucm91dGVyLnNldEhpc3RvcnlVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCAnJywgdXJsKTtcbn07XG5cbi8qKlxuICogU2V0IHVybCB1c2luZyBoYXNoXG4gKlxuICogQHBhcmFtIHVybFxuICovXG5yb3V0ZXIuc2V0SGFzaFVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIycgKyAodXJsIHx8ICcvJyk7XG59O1xuXG4vKipcbiAqIEdldCB1cmxcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuZ2V0VXJsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5oYXNoTW9kZSA/IHRoaXMuZ2V0SGFzaFVybCgpIDogdGhpcy5nZXRIaXN0b3J5VXJsKCk7XG59O1xuXG4vKipcbiAqIEdldCB1cmwgdXNpbmcgaGlzdG9yeVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRIaXN0b3J5VXJsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArIHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xufTtcblxuLyoqXG4gKiBHZXQgdXJsIHVzaW5nIGhhc2hcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuZ2V0SGFzaFVybCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoL14jLywgJycpO1xufTtcblxuLyoqXG4gKiBHZXQgcXVlcnkgcGFyYW1zXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldFVybFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmhhc2hNb2RlID8gdGhpcy5nZXRIYXNoVXJsUXVlcnkoKSA6IHRoaXMuZ2V0SGlzdG9yeVVybFF1ZXJ5KCk7XG59O1xuXG4vKipcbiAqIEdldCBxdWVyeSBwYXJhbXMgdXNpbmcgaGlzdG9yeVxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRIaXN0b3J5VXJsUXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJlcXVlc3QucGFyYW1zRnJvbVF1ZXJ5KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSk7XG59O1xuXG4vKipcbiAqIEdldCBxdWVyeSBwYXJhbXMgdXNpbmcgaGFzaFxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRIYXNoVXJsUXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJlcXVlc3QucGFyYW1zRnJvbVF1ZXJ5KCh3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnPycpWzFdIHx8ICcnKSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSB1cmwgYnkgZGF0YVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXVxuICogQHBhcmFtIHtvYmplY3R9IFtxdWVyeV1cbiAqIEBwYXJhbSB7c3RyaW5nfSBbaGFzaF1cbiAqL1xucm91dGVyLmNyZWF0ZVN0YXRlVXJsID0gZnVuY3Rpb24gKHN0YXRlLCBwYXJhbXMgPSB7fSwgcXVlcnkgPSB7fSwgaGFzaCA9ICcnKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuXG4gIGxldCB1cmwgPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAobSwgZiwgdikgPT4ge1xuICAgIHJldHVybiBwYXJhbXNbdl0gfHwgJyc7XG4gIH0pO1xuXG4gIHVybCA9IHRoaXMuc3BsaXRTbGFzaGVzKHVybCk7XG5cbiAgaWYoT2JqZWN0LmtleXMocXVlcnkpLmxlbmd0aCkge1xuICAgIHVybCArPSAnPycgKyByZXF1ZXN0LnBhcmFtc1RvUXVlcnkocXVlcnkpO1xuICB9XG5cbiAgaGFzaCA9IChoYXNoIHx8ICcnKS5yZXBsYWNlKCcjJywgJycpO1xuXG4gIGlmKCF0aGlzLmhhc2hNb2RlICYmIGhhc2gpIHtcbiAgICB1cmwgKz0gJyMnICsgaGFzaDtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbGwgdW5uZWNlc3Nhcnkgc2xhc2hlcyBmcm9tIGFuIHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5zcGxpdFNsYXNoZXMgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHJldHVybiB1cmwucmVwbGFjZSgvW1xcL10rL2csICcvJyk7XG59O1xuXG4vKipcbiAqIENsZWFyIGFsbCByb3V0ZXIgZGVwZW5kZW5jaWVzXG4gKi9cbnJvdXRlci5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5fX29uU3RhdGVDaGFuZ2VIYW5kbGVyKTtcbn07XG5cbi8qKlxuICogR2V0IHN0YXRlIHVybCBjb250ZW50XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldFBhdHRlcm5Db250ZW50ID0gZnVuY3Rpb24gKHN0YXRlLCB1cmwpIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG5cbiAgbGV0IGtleXMgPSBbXTtcbiAgbGV0IGkgPSAwO1xuICBsZXQgcGFyYW1zID0ge307XG5cbiAgdXJsID0gdXJsLnNwbGl0KCc/JylbMF07XG4gIHVybCA9IHVybC5zcGxpdCgnIycpWzBdO1xuXG4gIGxldCB1cmxQYXR0ZXJuID0gc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZSh0aGlzLl9fcGFyYW1SZWdleCwgKG0sIGYsIHYpID0+IHtcbiAgICBrZXlzLnB1c2godik7XG5cbiAgICByZXR1cm4gJyhbXlxcXFwvXSopJztcbiAgfSk7XG5cbiAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cCh1cmxQYXR0ZXJuKTtcbiAgbGV0IGlzSW5jbHVkZWQgPSB1cmwubWF0Y2gocmVnZXgpO1xuXG4gIGlmICghaXNJbmNsdWRlZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdXJsLnJlcGxhY2UocmVnZXgsIChtLCB2KSA9PiB7XG4gICAgdiAmJiAocGFyYW1zW2tleXNbaV1dID0gdik7XG4gICAgaSsrO1xuICB9KTtcblxuICByZXR1cm4geyBwYXJhbXMgfTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIHN0YXRlIGlzIGFjdGl2ZSBub3dcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVzXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmlzQWN0aXZlU3RhdGUgPSBmdW5jdGlvbihzdGF0ZSwgaW5jbHVkZXMgPSBmYWxzZSkge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcblxuICBsZXQgdXJsID0gdGhpcy5zcGxpdFNsYXNoZXModGhpcy5nZXRVcmwoKS5zcGxpdCgnPycpWzBdICsgJy8nKTtcbiAgbGV0IHVybFBhdHRlcm4gPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAnKFteXFxcXC9dKiknKTtcbiAgbGV0IHN0ciA9IGluY2x1ZGVzPyB1cmxQYXR0ZXJuOiB0aGlzLnNwbGl0U2xhc2hlcygnXicgKyB1cmxQYXR0ZXJuICsgJ1xcLyQnKTtcbiAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChzdHIpO1xuXG4gIHJldHVybiByZWdleC50ZXN0KHVybCk7XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSBjdXJyZW50IHVybCBpbmNsdWRlcyBhIHN0YXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnJvdXRlci5pbkFjdGl2ZVN0YXRlID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgcmV0dXJuIHJvdXRlci5pc0FjdGl2ZVN0YXRlKHN0YXRlLCB0cnVlKTtcbn07XG5cbi8qKlxuICogR2V0IHJvdXRlIGNvbXBvbmVudCBieSBsZXZlbFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZXZlbFxuICovXG5yb3V0ZXIuZ2V0Um91dGUgPSBmdW5jdGlvbiAobGV2ZWwpIHtcbiAgbGV0IGkgPSAwO1xuXG4gIGxldCBmaW5kID0gKGVsKSA9PiB7XG4gICAgbGV0IHJvdXRlID0gZWwuY2hpbGQodGhpcy5fX3JvdXRlU2VsZWN0b3IpO1xuXG4gICAgaWYgKCFyb3V0ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGkgPT0gbGV2ZWwpIHtcbiAgICAgIHJldHVybiByb3V0ZTtcbiAgICB9XG5cbiAgICBpKys7XG5cbiAgICByZXR1cm4gZmluZChyb3V0ZSk7XG4gIH07XG5cbiAgcmV0dXJuIGZpbmQoQWtpbGkucm9vdCk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgZmlyc3QgbWF0Y2hcbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBhcnJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAqL1xucm91dGVyLmdldEFycmF5UGF0dGVybkNvbnRlbnQgPSBmdW5jdGlvbiAoYXJyLCB1cmwpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gYXJyW2ldO1xuICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRQYXR0ZXJuQ29udGVudChzdGF0ZSwgdXJsKTtcblxuICAgIGlmICghY29udGVudCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtzdGF0ZTogc3RhdGUsIC4uLmNvbnRlbnR9O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIEdldCBzdGF0ZXMgYnkgbGV2ZWxcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbGV2ZWxcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xucm91dGVyLmdldFN0YXRlc0J5TGV2ZWwgPSBmdW5jdGlvbiAobGV2ZWwpIHtcbiAgbGV0IHN0YXRlcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZXNbaV07XG5cbiAgICBpZiAoc3RhdGUubGV2ZWwgPCBsZXZlbCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHN0YXRlLmxldmVsID4gbGV2ZWwpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHN0YXRlcy5wdXNoKHN0YXRlKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZXM7XG59O1xuXG4vKipcbiAqIENoYW5nZSBzdGF0ZVxuICovXG5yb3V0ZXIuY2hhbmdlU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmKHRoaXMuX19kaXNhYmxlQ2hhbmdlKSB7XG4gICAgZGVsZXRlIHRoaXMuX19kaXNhYmxlQ2hhbmdlO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKCk7XG4gIGxldCBoYXNoID0gdGhpcy5oYXNoTW9kZT8gJyc6IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7XG4gIGxldCBxdWVyeSA9IHRoaXMuZ2V0VXJsUXVlcnkoKTtcbiAgbGV0IHByZXZUcmFuc2l0aW9uID0gcm91dGVyLnRyYW5zaXRpb24gfHwgbnVsbDtcbiAgbGV0IHRyYW5zaXRpb24gPSByb3V0ZXIudHJhbnNpdGlvbiA9IG5ldyBUcmFuc2l0aW9uKHVybCwgcXVlcnksIGhhc2gsIHByZXZUcmFuc2l0aW9uKTtcbiAgbGV0IGxldmVsID0gMDtcblxuICBsZXQgbmV4dCA9IChzdGF0ZXMsIG9uRW5kKSA9PiB7XG4gICAgaWYgKCFzdGF0ZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gb25FbmQgJiYgb25FbmQoKTtcbiAgICB9XG5cbiAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0QXJyYXlQYXR0ZXJuQ29udGVudChzdGF0ZXMsIHVybCk7XG5cbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgIHJldHVybiBvbkVuZCAmJiBvbkVuZCgpO1xuICAgIH1cblxuICAgIGxldCBzdGF0ZSA9IGNvbnRlbnQuc3RhdGU7XG4gICAgbGV0IHBhcmFtcyA9IGNvbnRlbnQucGFyYW1zO1xuICAgIGxldCByb3V0ZSA9IHN0YXRlLmFic3RyYWN0PyBudWxsOiB0aGlzLmdldFJvdXRlKHN0YXRlLmxldmVsKTtcblxuICAgIGlmICghcm91dGUgJiYgIXN0YXRlLmFic3RyYWN0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IgKGBOb3QgZm91bmQgcm91dGUgY29tcG9uZW50IGZvciBzdGF0ZSBcIiR7c3RhdGUubmFtZX1cImApO1xuICAgIH1cblxuICAgIHRyYW5zaXRpb24uc2V0UGF0aCh7IHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBjb21wb25lbnQ6IHJvdXRlLCBsb2FkZWQ6IHRydWUgfSk7XG4gICAgbGV2ZWwrKztcblxuICAgIGxldCBoYXNTdGF0ZSA9IHByZXZUcmFuc2l0aW9uICYmIHByZXZUcmFuc2l0aW9uLmhhc1N0YXRlKHN0YXRlKTtcbiAgICBsZXQgaXNEaWZmZXJlbnQgPSB0cnVlO1xuXG4gICAgaWYoaGFzU3RhdGUpIHtcbiAgICAgIGxldCByb3V0ZSA9IHByZXZUcmFuc2l0aW9uLmdldFJvdXRlKHN0YXRlKTtcbiAgICAgIGxldCBwcmV2ID0geyBwYXJhbXM6IHJvdXRlLnBhcmFtcywgcXVlcnk6IHJvdXRlLnF1ZXJ5LCBoYXNoOiByb3V0ZS5oYXNoIH07XG4gICAgICBsZXQgY3VycmVudCA9IHsgcGFyYW1zLCBxdWVyeSwgaGFzaCB9O1xuXG4gICAgICBpc0RpZmZlcmVudCA9ICF1dGlscy5jb21wYXJlKHByZXYsIGN1cnJlbnQpO1xuICAgIH1cblxuICAgIGxldCBpc0hpc3RvcnkgPSB0aGlzLl9fb3B0aW9ucy5yZWxvYWQgPT09IHVuZGVmaW5lZCAmJiAhaXNEaWZmZXJlbnQ7XG4gICAgbGV0IGlzUmVsb2FkID0gdGhpcy5fX29wdGlvbnMucmVsb2FkID09PSBmYWxzZTtcblxuICAgIHRyYW5zaXRpb24ucGF0aC5sb2FkZWQgPSAhKGhhc1N0YXRlICYmIChpc0hpc3RvcnkgfHwgaXNSZWxvYWQpKTtcblxuICAgIFByb21pc2UucmVzb2x2ZShzdGF0ZS5oYW5kbGVyKHRyYW5zaXRpb24pKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAodHJhbnNpdGlvbi5fX2NhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gb25FbmQgJiYgb25FbmQoKTtcbiAgICAgIH1cblxuICAgICAgdHJhbnNpdGlvbi5wYXRoLmRhdGEgPSBkYXRhO1xuXG4gICAgICBpZihzdGF0ZS5hYnN0cmFjdCkge1xuICAgICAgICByZXR1cm4gbmV4dChzdGF0ZS5jaGlsZHJlbiwgb25FbmQpO1xuICAgICAgfVxuIFxuICAgICAgcm91dGUuc2V0VHJhbnNpdGlvbih0cmFuc2l0aW9uKS50aGVuKCgpID0+IHtcbiAgICAgICAgbmV4dChzdGF0ZS5jaGlsZHJlbiwgb25FbmQpO1xuICAgICAgfSkuY2F0Y2goKGVycikgPT4gb25FbmQgJiYgb25FbmQoZXJyKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBuZXh0KHRoaXMuZ2V0U3RhdGVzQnlMZXZlbCgwKSwgKGVycikgPT4ge1xuICAgICAgaWYoZXJyKSB7XG4gICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgIH1cblxuICAgICAgaWYoIXRyYW5zaXRpb24ucm91dGVzLmxlbmd0aCkge1xuICAgICAgICBpZih0aGlzLl9fcmVkaXJlY3RzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYFdyb25nIHJvdXRlciBkZWZhdWx0IHVybCBcIiR7dGhpcy5kZWZhdWx0VXJsfVwiYCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5kZWZhdWx0VXJsKSB7XG4gICAgICAgICAgaWYodGhpcy5kZWZhdWx0VXJsID09IHRoaXMuZ2V0VXJsKCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKGBOb3QgZm91bmQgYW55IHJvdXRlc2ApKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmhhc2hNb2RlICYmICh0aGlzLl9fZGlzYWJsZUNoYW5nZSA9IHRydWUpO1xuICAgICAgICAgIHRoaXMuc2V0VXJsKHRoaXMuZGVmYXVsdFVybCk7XG4gICAgICAgICAgdGhpcy5fX3JlZGlyZWN0cysrO1xuXG4gICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlU3RhdGUoKS50aGVuKHJlc29sdmUpLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBOb3QgZm91bmQgYSBkZWZhdWx0IHJvdXRlLiBZb3UgY2FuIHBhc3MgaXQgaW4gXCJyb3V0ZXIuaW5pdChkZWZhdWx0VXJsKVwiIGZ1bmN0aW9uYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYoIXRoaXMuX19vcHRpb25zLnNhdmVTY3JvbGxQb3NpdGlvbiAmJiAhdHJhbnNpdGlvbi5oYXNoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0ID0gMDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fX29wdGlvbnMgPSB7fTtcbiAgICAgIHRoaXMuX19yZWRpcmVjdHMgPSAwO1xuXG4gICAgICBpZihwcmV2VHJhbnNpdGlvbikge1xuICAgICAgICBmb3IobGV0IGkgPSBsZXZlbCwgbCA9IHByZXZUcmFuc2l0aW9uLnJvdXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBsZXQgcm91dGUgPSBwcmV2VHJhbnNpdGlvbi5yb3V0ZXNbaV07XG4gICAgICAgICAgXG4gICAgICAgICAgcm91dGUuY29tcG9uZW50ICYmIHJvdXRlLmNvbXBvbmVudC5lbXB0eSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc3RhdGUtY2hhbmdlJywge1xuICAgICAgICBkZXRhaWw6IHRyYW5zaXRpb25cbiAgICAgIH0pKTtcblxuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbnJvdXRlci5UcmFuc2l0aW9uID0gVHJhbnNpdGlvbjtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL3JvdXRlci5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi4vc2VydmljZXMvcm91dGVyLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbc3RhdGVdOm5vdChbdXJsXSksW3VybF06bm90KFtzdGF0ZV0pJztcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gdHJ1ZTtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydyZWxvYWQnXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnYScsIEEpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IG51bGw7XG4gICAgdGhpcy5wYXJhbXMgPSB7fTtcbiAgICB0aGlzLnF1ZXJ5ID0ge307XG4gICAgdGhpcy5oYXNoID0gJyc7XG4gICAgdGhpcy5vcHRpb25zID0ge307XG4gICAgdGhpcy5pc1VybCA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCd1cmwnKTtcbiAgfVxuXG4gIGNoYW5nZWRVcmwodXJsKSB7XG4gICAgdGhpcy5zZXRVcmwodXJsKTtcbiAgICB0aGlzLnJlc2V0SHJlZih1cmwpO1xuICB9XG5cbiAgY2hhbmdlZFN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgdGhpcy5yZXNldEhyZWYoKTtcbiAgfVxuXG4gIGNoYW5nZWRQYXJhbXMocGFyYW1zKSB7XG4gICAgdGhpcy5zZXRQYXJhbXMocGFyYW1zKTtcbiAgICB0aGlzLnJlc2V0SHJlZigpO1xuICB9XG5cbiAgY2hhbmdlZFF1ZXJ5KHF1ZXJ5KSB7XG4gICAgdGhpcy5zZXRRdWVyeShxdWVyeSk7XG4gICAgdGhpcy5yZXNldEhyZWYoKTtcbiAgfVxuXG4gIGNoYW5nZWRIYXNoKHF1ZXJ5KSB7XG4gICAgdGhpcy5zZXRIYXNoKHF1ZXJ5KTtcbiAgICB0aGlzLnJlc2V0SHJlZigpO1xuICB9XG5cbiAgY2hhbmdlZE9wdGlvbnMob3B0aW9ucykge1xuICAgIHRoaXMuc2V0UXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICBjaGFuZ2VkUmVsb2FkKHZhbCkge1xuICAgIHRoaXMuc2V0UmVsb2FkKHZhbCk7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZih0aGlzLmlzVXJsKSB7XG4gICAgICAgIHJvdXRlci5sb2NhdGlvbih0aGlzLmF0dHJzLnVybCwgdGhpcy5vcHRpb25zKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJvdXRlci5zdGF0ZSh0aGlzLnN0YXRlLm5hbWUsIHRoaXMucGFyYW1zLCB0aGlzLnF1ZXJ5LCB0aGlzLmhhc2gsICB0aGlzLm9wdGlvbnMpO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgnc3RhdGUnKSAmJiB0aGlzLnNldFN0YXRlKHRoaXMuYXR0cnMuc3RhdGUpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ3BhcmFtcycpICYmIHRoaXMuc2V0UGFyYW1zKHRoaXMuYXR0cnMucGFyYW1zKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdxdWVyeScpICYmIHRoaXMuc2V0UXVlcnkodGhpcy5hdHRycy5xdWVyeSk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgnaGFzaCcpICYmIHRoaXMuc2V0SGFzaCh0aGlzLmF0dHJzLmhhc2gpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ29wdGlvbnMnKSAmJiB0aGlzLnNldE9wdGlvbnModGhpcy5hdHRycy5vcHRpb25zKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdyZWxvYWQnKSAmJiB0aGlzLnNldFJlbG9hZCh0aGlzLmF0dHJzLnJlbG9hZCk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgndXJsJykgJiYgdGhpcy5zZXRVcmwodGhpcy5hdHRycy51cmwpO1xuICAgIHRoaXMucmVzZXRIcmVmKHRoaXMudXJsKTtcbiAgfVxuXG4gIHNldFVybCh1cmwpIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgfVxuXG4gIHNldFN0YXRlKG5hbWUpIHtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5nZXRTdGF0ZShuYW1lKTtcbiAgICB0aGlzLnNjb3BlLmlzQWN0aXZlU3RhdGUgPSByb3V0ZXIuaXNBY3RpdmVTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgICB0aGlzLnNjb3BlLmluQWN0aXZlU3RhdGUgPSByb3V0ZXIuaW5BY3RpdmVTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHNldFBhcmFtcyhwYXJhbXMpIHtcbiAgICBpZih0eXBlb2YgcGFyYW1zICE9ICdvYmplY3QnIHx8ICFwYXJhbXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIHBhcmFtcyBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICB9XG5cbiAgc2V0UXVlcnkocXVlcnkpIHtcbiAgICBpZih0eXBlb2YgcXVlcnkgIT0gJ29iamVjdCcgfHwgIXF1ZXJ5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBxdWVyeSBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgfVxuXG4gIHNldEhhc2goaGFzaCkge1xuICAgIGlmKHR5cGVvZiBoYXNoICE9ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBoYXNoIG11c3QgYmUgYSBzdHJpbmdgKTtcbiAgICB9XG5cbiAgICB0aGlzLmhhc2ggPSBoYXNoO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYodHlwZW9mIG9wdGlvbnMgIT0gJ29iamVjdCcgfHwgIW9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIG9wdGlvbnMgbXVzdCBiZSBhbiBvYmplY3RgKTtcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgc2V0UmVsb2FkKHZhbCkge1xuICAgIHRoaXMub3B0aW9ucy5yZWxvYWQgPSB2YWw7XG4gIH1cblxuICBnZXRTdGF0ZShuYW1lKSB7XG4gICAgbGV0IHN0YXRlID0gcm91dGVyLmdldFN0YXRlKG5hbWUpO1xuXG4gICAgaWYoIXN0YXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCByb3V0ZXIgc3RhdGUgd2l0aCBuYW1lIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgcmVzZXRIcmVmKHVybCkge1xuICAgIGlmKHVybCkge1xuICAgICAgdGhpcy5hdHRycy5ocmVmID0gdXJsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuYXR0cnMuaHJlZiA9IHJvdXRlci5jcmVhdGVTdGF0ZVVybCh0aGlzLnN0YXRlLCB0aGlzLnBhcmFtcywgdGhpcy5xdWVyeSwgdGhpcy5oYXNoKTtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9hLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpbyBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2F1ZGlvJywgQXVkaW8pO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYXVkaW8uanMiLCJpbXBvcnQgVGV4dCBmcm9tICcuL3RleHQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudCBleHRlbmRzIFRleHQge1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnY29udGVudCcsIENvbnRlbnQpO1xuICAgIEFraWxpLmFsaWFzKCdbY29udGVudGVkaXRhYmxlXScsICdjb250ZW50Jyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICBpZih0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnZWRpdGFibGUnKSkge1xuICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdlZGl0YWJsZScpKTtcbiAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKCdlZGl0YWJsZScpO1xuICAgIH1cblxuICAgIGlmKGdldENvbXB1dGVkU3R5bGUodGhpcy5lbCkuZGlzcGxheSA9PSAnaW5saW5lJykge1xuICAgICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlS2V5ID0gJ2lubmVySFRNTCc7XG4gIH1cblxuICBzZXRFbGVtZW50Rm9jdXMoKSB7XG4gICAgbGV0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICBsZXQgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuXG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKHRoaXMuZWwpO1xuICAgIHJhbmdlLmNvbGxhcHNlKGZhbHNlKTtcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9jb250ZW50LmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWJlZCBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2VtYmVkJywgRW1iZWQpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZW1iZWQuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIElmIGNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyB0cmFuc3BhcmVudCA9IHRydWU7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tpc10nO1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ3JlY3JlYXRlJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2lmJywgSWYpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnZWxzZS1pZicsIEVsc2VJZik7XG4gICAgQWtpbGkuY29tcG9uZW50KCdlbHNlJywgRWxzZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuc3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMucmVjcmVhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ29tcGlsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRpc3BsYXkgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpLmRpc3BsYXk7XG4gIH1cblxuICBjaGFuZ2VkSXModmFsdWUpIHtcbiAgICB0aGlzLnN0YXRlID0gISF2YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKCk7XG4gIH1cblxuICBjaGFuZ2VkUmVjcmVhdGUodmFsdWUpIHtcbiAgICB0aGlzLnNldFJlY3JlYXRpb24odmFsdWUpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgncmVjcmVhdGUnKSAmJiB0aGlzLnNldFJlY3JlYXRpb24odGhpcy5hdHRycy5yZWNyZWF0ZSk7XG4gICAgdGhpcy5zdGF0ZSA9ICEhdGhpcy5hdHRycy5pcztcbiAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSgpXG4gIH1cblxuICBzZXRBY3Rpdml0eShhY3RpdmUpIHtcbiAgICB0aGlzLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgfVxuXG4gIHNldFJlY3JlYXRpb24ocmVjcmVhdGUpIHtcbiAgICB0aGlzLnJlY3JlYXRlID0gcmVjcmVhdGU7XG4gIH1cblxuICBzZXRTdGF0ZSgpIHtcbiAgICBsZXQgcmVzID0gdGhpcy5jb21waWxhdGlvbigpO1xuICAgIGxldCBuZXh0ID0gdGhpcy5lbC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgbGV0IHJlc3VsdDtcblxuICAgIGlmKCFuZXh0IHx8ICFuZXh0Lm1hdGNoZXMoJ2Vsc2UtaWYsZWxzZScpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmV4dC5fX2FraWxpLnNldEFjdGl2aXR5KHRoaXMuYWN0aXZlIHx8IHRoaXMuc3RhdGUpO1xuICAgIG5leHQuX19ha2lsaS5zZXRSZWNyZWF0aW9uKHRoaXMucmVjcmVhdGUpO1xuICAgIHJlc3VsdCA9IG5leHQuX19ha2lsaS5zZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMpLnRoZW4oKCkgPT4ge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBpbGF0aW9uKCkge1xuICAgIGxldCByZXM7XG5cbiAgICBpZih0aGlzLnN0YXRlICYmICF0aGlzLmFjdGl2ZSkge1xuICAgICAgaWYodGhpcy5yZWNyZWF0ZSB8fCAhdGhpcy5pc0NvbXBpbGVkKSB7XG4gICAgICAgIHJlcyA9IHRoaXMuY29tcGlsZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmRpc3BsYXk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYodGhpcy5yZWNyZWF0ZSkge1xuICAgICAgICB0aGlzLl9fZW1wdHkoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoIXRoaXMuaXNDb21waWxlZCkge1xuICAgICAgICByZXMgPSB0aGlzLmNvbXBpbGUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGNvbXBpbGUoKSB7XG4gICAgbGV0IHJlcztcblxuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5odG1sO1xuICAgIHJlcyA9IEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgdGhpcy5pc0NvbXBpbGVkID0gdHJ1ZTtcblxuICAgIHJldHVybiByZXM7XG4gIH1cbn07XG5cbi8qKlxuICogRWxzZUlmIGNvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgRWxzZUlmIGV4dGVuZHMgSWYge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBFbHNlIGNvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgRWxzZSBleHRlbmRzIEVsc2VJZiB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2lzJywgJ3RydWUnKTtcbiAgfVxufVxuXG5JZi5FbHNlSWYgPSBFbHNlSWY7XG5JZi5FbHNlID0gRWxzZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pZi5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWZyYW1lIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaWZyYW1lJywgSWZyYW1lKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2lmcmFtZS5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2UgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpbWcnLCBJbWFnZSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pbWFnZS5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi9zZXJ2aWNlcy9yZXF1ZXN0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5jbHVkZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyB0cmFuc3BhcmVudCA9IHRydWU7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1t1cmxdJztcbiAgc3RhdGljIGV2ZW50cyA9IFsnbG9hZCcsICdlcnJvciddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpbmNsdWRlJywgSW5jbHVkZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gIH1cblxuICBjaGFuZ2VkVXJsKHVybCkge1xuICAgIHRoaXMuZ2V0VGVtcGxhdGUodXJsKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFRlbXBsYXRlKHRoaXMuYXR0cnMudXJsKTtcbiAgfVxuXG4gIGdldFRlbXBsYXRlKHVybCkge1xuICAgIHRoaXMuY29ubmVjdGlvbiAmJiB0aGlzLmNvbm5lY3Rpb24uYWJvcnQoKTtcblxuICAgIHJldHVybiByZXF1ZXN0LmdldCh1cmwsIHtcbiAgICAgIG9uU3RhcnQ6ICh4aHIpID0+IHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0geGhyO1xuICAgICAgfVxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgICAgIHRoaXMuZW1wdHkoKTtcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5odG1sO1xuICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgcmVzLmRhdGEpO1xuXG4gICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5hdHRycy5vbkxvYWQudHJpZ2dlcigpO1xuICAgICAgfSk7XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgdGhpcy5hdHRycy5vbkVycm9yLnRyaWdnZXIoZXJyKTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2luY2x1ZGUuanMiLCJpbXBvcnQgVGV4dCBmcm9tICcuL3RleHQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBUZXh0IHtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydjaGVja2VkJ107XG4gIHN0YXRpYyBldmVudHMgPSBbJ2NoYW5nZSddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpbnB1dCcsIElucHV0KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXNDaGVja2JveCA9IHRoaXMuZWwudHlwZSA9PSAnY2hlY2tib3gnO1xuICAgIHRoaXMuaXNSYWRpbyA9IHRoaXMuZWwudHlwZSA9PSAncmFkaW8nO1xuICB9XG5cbiAgY2hhbmdlZENoZWNrZWQodmFsdWUpIHtcbiAgICB0aGlzLnNldENoZWNrZWQodmFsdWUpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICAodGhpcy5pc1JhZGlvIHx8IHRoaXMuaXNDaGVja2JveCkgJiYgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0Q2hlY2tlZCh0aGlzLmVsLmNoZWNrZWQsIGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc29sdmVkKCkge1xuICAgICh0aGlzLmlzQ2hlY2tib3ggfHwgdGhpcy5pc1JhZGlvKSAmJiB0aGlzLnNldENoZWNrZWQodGhpcy5hdHRycy5jaGVja2VkKTtcbiAgfVxuXG4gIHNldENoZWNrZWQodmFsdWUsIHRyaWdnZXIgPSB0cnVlKSB7XG4gICAgdmFsdWUgPSAhIXZhbHVlO1xuXG4gICAgaWYodGhpcy5wcmV2Q2hlY2tlZCA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmVsLmNoZWNrZWQgPSB0aGlzLnByZXZDaGVja2VkID0gdmFsdWU7XG4gICAgdHJpZ2dlciAmJiB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50KTtcbiAgICB0aGlzLmlzUmFkaW8gJiYgdGhpcy5jaGFuZ2VSYWRpbygpO1xuICB9XG5cbiAgc2V0VmFsdWUoKSB7XG4gICAgc3VwZXIuc2V0VmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLmlzUmFkaW8gJiYgdGhpcy5hdHRycy5vbkNoYW5nZS5kaXNwYXRjaChFdmVudCk7XG4gIH1cblxuICBjaGFuZ2VSYWRpbygpIHtcbiAgICBsZXQgbmFtZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgbGV0IHNlbGVjdG9yID0gYGlucHV0W3R5cGU9cmFkaW9dW25hbWU9JyR7bmFtZX0nXTpub3QoW3Njb3BlPScke3RoaXMuc2NvcGUuX19uYW1lfSddKWA7XG4gICAgbGV0IGNoaWxkcmVuID0gQWtpbGkucm9vdC5jaGlsZHJlbihzZWxlY3Rvcik7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcmFkaW8gPSBjaGlsZHJlbltpXTtcblxuICAgICAgcmFkaW8uc2V0Q2hlY2tlZChyYWRpby5lbC5jaGVja2VkKTtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pbnB1dC5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0cyBleHRlbmRzIFVybCB7ICBcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy51cmxBdHRyaWJ1dGUgPSAnZGF0YSc7XG4gIH1cblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnb2JqZWN0JywgT2JqZWN0cyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9vYmplY3QuanMiLCJpbXBvcnQgRm9yLCB7IExvb3AgfSBmcm9tICcuL2Zvci5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIFRoZSByYWRpbyBncm91cCBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaW8gZXh0ZW5kcyBGb3Ige1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbbmFtZV0nO1xuICBzdGF0aWMgZXZlbnRzID0gWydyYWRpbyddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdyYWRpbycsIFJhZGlvKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JhZGlvLWJ1dHRvbicsIFJhZGlvQnV0dG9uKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXRlcmFibGUgPSB0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnaW4nKTtcbiAgfVxuXG4gIGNoYW5nZWRJbih2YWx1ZSkge1xuICAgIHN1cGVyLmNoYW5nZWRJbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuc2V0TmFtZXModGhpcy5hdHRycy5uYW1lKTtcbiAgfVxuXG4gIGNoYW5nZWROYW1lKG5hbWUpIHtcbiAgICB0aGlzLnNldE5hbWVzKG5hbWUpO1xuICB9XG5cbiAgY2hhbmdlZFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuaXRlcmFibGUgJiYgc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5nZXRSYWRpb1ZhbHVlKCk7XG5cbiAgICAgICAgaWYodmFsdWUgPT09IHRoaXMucHJldlZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5hdHRycy5vblJhZGlvLnRyaWdnZXIodmFsdWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXNvbHZlZCgpIHtcbiAgICB0aGlzLnNldE5hbWVzKHRoaXMuYXR0cnMubmFtZSk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSAmJiB0aGlzLnNldFZhbHVlKHRoaXMuYXR0cnMudmFsdWUpO1xuICB9XG5cbiAgc2V0TmFtZXMobmFtZSkge1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oJ2lucHV0W3R5cGU9cmFkaW9dJyk7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjaGlsZHJlbltpXS5lbC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBuYW1lKTtcbiAgICB9XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmKHZhbHVlID09PSB0aGlzLnByZXZWYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBwcmV2ID0gdGhpcy5wcmV2VmFsdWU7XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbignaW5wdXRbdHlwZT1yYWRpb10nKTtcbiAgICBsZXQgaXNUcnVlID0gZmFsc2U7XG5cbiAgICB0aGlzLnByZXZWYWx1ZSA9IHZhbHVlO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJhZGlvID0gY2hpbGRyZW5baV07XG4gICAgICBsZXQgaXNTZWxlY3RlZCA9IHJhZGlvLmVsLnZhbHVlID09PSB2YWx1ZTtcblxuICAgICAgaXNTZWxlY3RlZCAmJiAoaXNUcnVlID0gdHJ1ZSk7XG4gICAgICByYWRpby5zZXRDaGVja2VkKGlzU2VsZWN0ZWQpO1xuICAgIH1cblxuICAgIGlmKCFpc1RydWUpIHtcbiAgICAgIGlmKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIGlmKHByZXYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMucHJldlZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hdHRycy5vblJhZGlvLnRyaWdnZXIodmFsdWUpO1xuICB9XG5cbiAgZ2V0UmFkaW9WYWx1ZSgpIHtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJhZGlvID0gY2hpbGRyZW5baV07XG5cbiAgICAgIGlmKHJhZGlvLmVsLmNoZWNrZWQpIHtcbiAgICAgICAgcmV0dXJuIHJhZGlvLmVsLnZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIFRoZSByYWRpbyBpdGVtIGNvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgUmFkaW9CdXR0b24gZXh0ZW5kcyBMb29wIHtcbiAgc3RhdGljIHRlbXBsYXRlID0gYDxsYWJlbD48aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJcXCR7dGhpcy52YWx1ZX1cIi8+XFwke3RoaXMuX19jb250ZW50fTwvbGFiZWw+YDtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gIH1cblxuICBjaGFuZ2VkVmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnNldFJhZGlvVmFsdWUodmFsdWUpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5zZXRSYWRpb1ZhbHVlKHRoaXMuYXR0cnMudmFsdWUpO1xuICB9XG5cbiAgc2V0UmFkaW9WYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2NvcGUudmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuXG5SYWRpby5SYWRpb0J1dHRvbiA9IFJhZGlvQnV0dG9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3JhZGlvLmpzIiwiaW1wb3J0IEZvciwgeyBMb29wIH0gZnJvbSAnLi9mb3IuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnbXVsdGlwbGUnXTtcbiAgc3RhdGljIGV2ZW50cyA9IFsnY2hhbmdlJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3NlbGVjdCcsIFNlbGVjdCk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdvcHRpb24nLCBPcHRpb24pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pdGVyYXRvclRhZ05hbWUgPSAnb3B0aW9uJztcbiAgICB0aGlzLmlzTXVsdGlwbGUgPSBmYWxzZTtcbiAgfVxuXG4gIGNoYW5nZWRNdWx0aXBsZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0TXVsdGlwbGUodmFsdWUpO1xuICB9XG5cbiAgY2hhbmdlZENvbnRlbnQodmFsdWUpIHtcbiAgICB0aGlzLnNldENvbnRlbnQodmFsdWUpO1xuICB9XG5cbiAgY2hhbmdlZEluKHZhbHVlKSB7XG4gICAgc3VwZXIuY2hhbmdlZEluLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5kcmF3U2VsZWN0KCk7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5lbC5jb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIGNvbXBpbGVkKCkge1xuICAgIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgnbXVsdGlwbGUnKSAmJiB0aGlzLnNldE11bHRpcGxlKHRoaXMuYXR0cnMubXVsdGlwbGUpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ2NvbnRlbnQnKSAmJiB0aGlzLnNldENvbnRlbnQodGhpcy5hdHRycy5jb250ZW50KTtcbiAgICB0aGlzLmRyYXdTZWxlY3QoKTtcbiAgfVxuXG4gIHNldE11bHRpcGxlKHZhbHVlKSB7XG4gICAgdGhpcy5pc011bHRpcGxlID0gdmFsdWU7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKHV0aWxzLmNvcHkodGhpcy5lbC5jb250ZW50KSkpO1xuICB9XG5cbiAgc2V0Q29udGVudCh2YWx1ZSkge1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5mb3JtYXRWYWx1ZSh2YWx1ZSkpO1xuICB9XG5cbiAgZHJhd1NlbGVjdCgpIHtcbiAgICBsZXQgc2VsZWN0ZWQgPSBbXTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldLl9fYWtpbGk7XG4gICAgICBsZXQgc2VsZWN0aW9uID0gb3B0aW9uLmF0dHJzLnNlbGVjdGVkO1xuXG4gICAgICBpZihzZWxlY3Rpb24pIHtcbiAgICAgICAgc2VsZWN0ZWQucHVzaChvcHRpb24uZWwudmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBvcHRpb24uZWwuc2VsZWN0ZWQgPSBzZWxlY3Rpb247XG4gICAgfVxuXG4gICAgaWYoIXNlbGVjdGVkLmxlbmd0aCkge1xuICAgICAgdGhpcy5yZWRlZmluZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5mb3JtYXRWYWx1ZShzZWxlY3RlZCkpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUl0ZXJhdG9yRWxlbWVudCgpIHtcbiAgICBsZXQgZWwgPSBzdXBlci5jcmVhdGVJdGVyYXRvckVsZW1lbnQoKTtcblxuICAgIGlmKCFlbC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0aGlzLmh0bWwudHJpbSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBpbkNvbnRlbnQodmFsdWUpIHtcbiAgICBpZighdGhpcy5pc011bHRpcGxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbC5jb250ZW50ID09PSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5lbC5jb250ZW50LmluZGV4T2YodmFsdWUpICE9IC0xO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBpZighdGhpcy5pc011bHRpcGxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbC52YWx1ZTtcbiAgICB9XG5cbiAgICBsZXQgY29udGVudCA9IFtdO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgIGlmKG9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICBjb250ZW50LnB1c2gob3B0aW9uLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGZvcm1hdFZhbHVlKHZhbHVlKSB7XG4gICAgaWYodGhpcy5pc011bHRpcGxlKSB7XG4gICAgICBpZighQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCk/IFt2YWx1ZV06IFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUubGVuZ3RoPyB2YWx1ZVswXTogJyc7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJlZGVmaW5lKCkge1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5nZXRDb250ZW50KCkpO1xuICB9XG5cbiAgY2hhbmdlVmFsdWUodmFsdWUpIHtcbiAgICBpZih1dGlscy5jb21wYXJlKHRoaXMuZWwuY29udGVudCwgdmFsdWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuZWwudmFsdWUgPSB2YWx1ZVt2YWx1ZS5sZW5ndGggLSAxXTtcblxuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXTtcblxuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB2YWx1ZS5pbmRleE9mKG9wdGlvbi52YWx1ZSkgIT0gLTE7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5lbC52YWx1ZSA9IHZhbHVlO1xuXG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldO1xuXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IG9wdGlvbi52YWx1ZSA9PSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmVsLmNvbnRlbnQgPSB2YWx1ZTtcbiAgICB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50KTtcbiAgfVxufTtcblxuZXhwb3J0IGNsYXNzIE9wdGlvbiBleHRlbmRzIExvb3Age1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ3NlbGVjdGVkJ107XG5cbiAgX19nZXRQYXJzZWRFeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgICByZXR1cm4gdXRpbHMuZGVjb2RlSHRtbEVudGl0aWVzKGV4cHJlc3Npb24pO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjaGFuZ2VkU2VsZWN0ZWQodmFsdWUpIHtcbiAgICB0aGlzLnNldFNlbGVjdGVkKHZhbHVlKTtcbiAgfVxuXG4gIHNldFNlbGVjdGVkKHZhbHVlKSB7XG4gICAgdGhpcy5lbC5zZWxlY3RlZCA9IHZhbHVlO1xuICAgIHRoaXMuZm9yLnJlZGVmaW5lKCk7XG4gIH1cbn1cblxuU2VsZWN0Lk9wdGlvbiA9IE9wdGlvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9zZWxlY3QuanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdXJjZSBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3NvdXJjZScsIFNvdXJjZSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9zb3VyY2UuanMiLCJpbXBvcnQgVGV4dCBmcm9tICcuL3RleHQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dGFyZWEgZXh0ZW5kcyBUZXh0IHtcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RleHRhcmVhJywgVGV4dGFyZWEpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGV4dGFyZWEuanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYWNrIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgndHJhY2snLCBUcmFjayk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90cmFjay5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlkZW8gZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd2aWRlbycsIFZpZGVvKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3ZpZGVvLmpzIiwiaW1wb3J0IEFraWxpIGZyb20gJy4vYWtpbGkuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuXG4vKipcbiAqIFNjb3BlIGNsYXNzLlxuICpcbiAqIEFsbCBwcm9wZXJ0aWVzIHN0YXJ0aW5nIHdpdGggX18gd2lsbCBub3QgYmUgd2F0Y2hpbmcuXG4gKiBZb3UgY2FuIHVzZSB0aGVtIGZvciBpbnRlcm5hbCBtYW5pcHVsYXRpb25zLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29wZSB7XG4gIHN0YXRpYyBuZXN0ZWRXYXRjaGluZztcblxuICBjb25zdHJ1Y3RvcihuYW1lLCBlbCwgY29tcG9uZW50KSB7XG4gICAgdGhpcy5fX25hbWUgPSBuYW1lO1xuICAgIHRoaXMuX19lbCA9IGVsO1xuICAgIHRoaXMuX19jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgZWwuc2V0QXR0cmlidXRlKCdzY29wZScsIG5hbWUpO1xuICB9XG5cbiAgZ2V0IF9fdXRpbHMoKSB7XG4gICAgcmV0dXJuIHV0aWxzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBhIHNjb3BlIHZhbHVlXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbc3RyaWN0PWZhbHNlXSAtIHdpdGhvdXQgb2JqZWN0IGNvcHlpbmdcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXQoa2V5cywgdmFsdWUsIHN0cmljdCA9IGZhbHNlKSB7XG4gICAgaWYoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuXG4gICAgQWtpbGkudW5pc29sYXRlZCgoKSA9PiB7XG4gICAgICBzdHJpY3QgJiYgKHRoaXMuX19jb21wb25lbnQuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nID0gdHJ1ZSk7XG4gICAgICB1dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLCAobGFzdCwgdmFsKSA9PiB7XG4gICAgICAgIGlmKCFsYXN0KSB7XG4gICAgICAgICAgcmV0dXJuIHZhbCB8fCB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgc3RyaWN0ICYmICh0aGlzLl9fY29tcG9uZW50Ll9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyA9IGZhbHNlKTtcbiAgICB9KTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY29wZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=