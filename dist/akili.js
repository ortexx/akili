/*!
 * Akili is a javascript framework
 * 
 * const Akili = makeItEasy(js + html);
 * 
 * @version 0.3.0
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
  var parents = Akili.getAkiliParents(el);

  for (var i = 0, l = parents.length; i < l; i++) {
    if (parents[i].__akili.__prevent) {
      return;
    }
  }

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
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmIxY2MzNzM5ODdiOWQwZDE1MDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FraWxpLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VybC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnQtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcm91dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2EuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lbWJlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5jbHVkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcmFkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZXh0YXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90cmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWRlby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NvcGUuanMiXSwibmFtZXMiOlsiQWtpbGkiLCJvcHRpb25zIiwibmVzdGVkV2F0Y2hpbmciLCJkZWJ1ZyIsIl9faW5pdCIsIl9fY29tcG9uZW50cyIsIl9fYWxpYXNlcyIsIl9fc2NvcGVzIiwiX193aW5kb3ciLCJfX2lzb2xhdGlvbiIsIl9fZXZhbHVhdGlvbiIsIl9faHRtbCIsIndpbmRvdyIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiX19zZXJ2ZXJSZW5kZXJpbmciLCJodG1sQm9vbGVhbkF0dHJpYnV0ZXMiLCJjb21wb25lbnRzIiwiZGVjb3JhdG9ycyIsInNlcnZpY2VzIiwiam9pbkJpbmRpbmdLZXlzIiwia2V5cyIsIm1hcCIsImVsIiwidG9TdHJpbmciLCJqb2luIiwiYWRkU2NvcGUiLCJzY29wZSIsIl9fbmFtZSIsIkVycm9yIiwiZ2V0U2NvcGUiLCJuYW1lIiwicmVtb3ZlU2NvcGUiLCJnZXRBa2lsaVBhcmVudHMiLCJ0cmVlIiwiYXJyIiwiY2hlY2siLCJub2RlIiwicGFyZW50Tm9kZSIsIl9fYWtpbGkiLCJwdXNoIiwic2V0VGVtcGxhdGUiLCJ0ZW1wbGF0ZSIsInJlcGxhY2UiLCJpbm5lckhUTUwiLCJjcmVhdGVTY29wZU5hbWUiLCJjcmVhdGVSYW5kb21TdHJpbmciLCJzdHIiLCJpc29sYXRlIiwiZm4iLCJyZXMiLCJwcm9wcyIsImsiLCJoYXNPd25Qcm9wZXJ0eSIsImkiLCJsIiwicHJvcCIsImlzRGVsZXRlZCIsImNvbXBvbmVudCIsIl9fZXZhbHVhdGVCeUtleXMiLCJ1bmRlZmluZWQiLCJzZXRQcm9wZXJ0eUJ5S2V5cyIsImxhc3QiLCJ2YWwiLCJ2YWx1ZSIsImxlbmd0aCIsInVuZXZhbHVhdGVkIiwiZXZhbHVhdGlvbiIsInVuaXNvbGF0ZWQiLCJpbml0aWFsaXplIiwicmVjb21waWxlIiwicGFyZW50cyIsIl9fcHJldmVudCIsIl9fcmVjb21waWxlIiwiaXNSb290IiwiX19yb290IiwiY29tcG9uZW50TmFtZSIsInRvRGFzaENhc2UiLCJnZXRBdHRyaWJ1dGUiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJfQ29tcG9uZW50IiwiQ0hFQ0tfQUxJQVNFUyIsInNlbGVjdG9ycyIsIk9iamVjdCIsInNlbGVjdG9yQWxsIiwibWF0Y2hlcyIsInNlbGVjdG9yIiwiQ29tcG9uZW50IiwiX19jYW5jZWxsZWQiLCJfX2NyZWF0ZSIsImNvbXBpbGUiLCJyb290IiwiZWxlbWVudHMiLCJuZXN0ZWRJbml0aWFsaXppbmciLCJjaGlsZHJlbiIsImNoaWxkIiwicCIsIl9fY29tcGlsZSIsIlByb21pc2UiLCJhbGwiLCJ0aGVuIiwiciIsIl9fcmVzb2x2ZSIsImNvbnNvbGUiLCJ3YXJuIiwidW5yZWdpc3RlckNvbXBvbmVudCIsImFsaWFzIiwidW5yZWdpc3RlckFsaWFzIiwiaXNvbGF0ZUFycmF5UHJvdG90eXBlIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwia2V5Iiwib2xkIiwiX19pc1Byb3h5IiwiYXBwbHkiLCJpc29sYXRlV2luZG93RnVuY3Rpb25zIiwic2V0VGltZW91dCIsInNldEludGVydmFsIiwiY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24iLCJjb25zdHJ1Y3RvciIsImlzb2xhdGVFdmVudHMiLCJFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmUiLCJfX2FraWxpTGlzdGVuZXJzIiwiYXJndW1lbnRzIiwiYXJncyIsInNsaWNlIiwiY2FsbCIsImxpbmsiLCJsaXN0ZW5lciIsInNwbGljZSIsInBvcyIsImNhbGxiYWNrIiwiaXNvbGF0ZUZ1bmN0aW9uIiwiY29udGV4dCIsIm9GbiIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImVycm9ySGFuZGxpbmciLCJ0cmlnZ2VySW5pdCIsInN0YXR1cyIsInN0eWxlIiwidmlzaWJpbGl0eSIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImluaXQiLCJzZXJ2ZXJQIiwicmVzb2x2ZSIsInNlcnZlciIsInF1ZXJ5U2VsZWN0b3IiLCJnZXQiLCJkYXRhIiwiY2hhbmdlU3RhdGUiLCJjYXRjaCIsImVyciIsImRlaW5pdCIsImRlZmluZSIsIkV2ZW50RW1pdHRlciIsIlNjb3BlIiwidXRpbHMiLCJBIiwiQXVkaW8iLCJDb250ZW50IiwiRm9yIiwiRW1iZWQiLCJJZiIsIkluY2x1ZGUiLCJJbnB1dCIsIklmcmFtZSIsIkltYWdlIiwiUmFkaW8iLCJSb3V0ZSIsIlNlbGVjdCIsIlNvdXJjZSIsIlRleHQiLCJUZXh0YXJlYSIsIlRyYWNrIiwiVXJsIiwiVmlkZW8iLCJyZXF1ZXN0Iiwicm91dGVyIiwidXJsQXR0cmlidXRlIiwidXJsIiwic2V0VXJsIiwiYXR0cnMiLCJldmFsdWF0aW9uUmVnZXgiLCJldmFsdWF0aW9uUmVnZXhHbG9iYWwiLCJSZWdFeHAiLCJzb3VyY2UiLCJzeXN0ZW1BdHRyaWJ1dGVzIiwiZXhwcmVzc2lvbiIsImV2ZW50IiwiZXZhbCIsIl9faXNNb3VudGVkIiwiX19pc0NvbXBpbGVkIiwiX19iaW5kaW5ncyIsIl9fZXZhbHVhdGluZ0V2ZW50IiwiX19yZWNvbXBpbGluZyIsIl9fY29tcGlsaW5nIiwiX19kaXNhYmxlUHJveHkiLCJfX2NoaWxkcmVuIiwiX19wYXJlbnQiLCJfX3BhcmVudHMiLCJfX2F0dHJzIiwiX19hdHRyaWJ1dGVPZiIsIl9fZXZhbHVhdGlvbkNvbXBvbmVudCIsIl9fc2V0RXZlbnRzIiwiX19zZXRQYXJlbnRzIiwiX19zZXRCb29sZWFuQXR0cmlidXRlcyIsIl9fZGVmaW5lQXR0cmlidXRlcyIsIl9faW5pdGlhbGl6ZSIsImNyZWF0ZWQiLCJjb250cm9sIiwiX19jb250cm9sQXR0cmlidXRlcyIsIl9fZXZhbHVhdGVQYXJlbnQiLCJuZXdQYXJlbnQiLCJfX2ludGVycG9sYXRlQXR0cmlidXRlcyIsImludGVycG9sYXRlIiwicGFyZW50Iiwibm9kZVR5cGUiLCJfX2luaXRpYWxpemVOb2RlIiwibm9kZVZhbHVlIiwiX19ldmFsdWF0ZSIsImNoaWxkTm9kZXMiLCJvbkNvbXBpbGVkIiwidHJpZ2dlciIsImNvbXBpbGVkIiwidGVtcGxhdGVVcmwiLCJfX2NvbnRlbnQiLCJvblJlY29tcGlsZWQiLCJyZWNvbXBpbGVkIiwib25SZXNvbHZlZCIsInJlc29sdmVkIiwiX19zY29wZSIsIl9zY29wZSIsImFzc2lnbiIsImNvbnRyb2xBdHRyaWJ1dGVzIiwiZXZlbnRzIiwiX19ldmVudHMiLCJfX25lc3RlZFdhdGNoaW5nIiwiX19uZXN0ZWRPYnNlcnZlIiwiX19vYnNlcnZlIiwiYm9vbGVhbkF0dHJpYnV0ZXMiLCJjb25jYXQiLCJzZXRBdHRyIiwiYXR0cmlidXRlcyIsImluZGV4T2YiLCJub2RlTmFtZSIsImhhc0F0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImV2IiwidGVzdCIsImV2YWx1YXRlUGFyZW50IiwidHJhbnNwYXJlbnQiLCJfX2RldGFjaCIsIl9fYWRkQ2hpbGQiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvcGVydGllcyIsImdldFByb3BlcnR5QnlLZXlzIiwiY29tcGFyZVByZXZpb3VzVmFsdWUiLCJjb3B5IiwiX19nZXROb2RlUHJvcGVydHkiLCJjb3VudGVyIiwiYXR0cmlidXRlVmFsdWUiLCJfX2NvbXBvbmVudCIsImNvbSIsIl9fZXhwcmVzc2lvbiIsIkF0dHIiLCJtIiwiZCIsImV2YWx1YXRlIiwiZXhpc3RpbmdCaW5kaW5ncyIsInBhcnNlVmFsdWUiLCJfX2dldFBhcnNlZEV4cHJlc3Npb24iLCJsaXN0IiwicGFyc2UiLCJoYXNoIiwia2V5c1N0cmluZyIsIm5vdEJpbmRpbmciLCJwYXJlbnRWYWx1ZSIsImV2YWxDb21wb25lbnQiLCJpc1Njb3BlUHJveHkiLCJiaW5kIiwiX19nZXRCb3VuZE5vZGUiLCJfX2JpbmQiLCJfX3NldE5vZGVQcm9wZXJ0eSIsIm1ha2VBdHRyaWJ1dGVWYWx1ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlIiwiaXNCb29sZWFuQXR0cmlidXRlIiwiX19oYXNCaW5kaW5ncyIsImNsZWFyQXR0cmlidXRlIiwiX19hdHRyaWJ1dGVPbiIsIl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciIsInRvQ2FtZWxDYXNlIiwib25DaGFuZ2VkIiwiY2hhbmdlZCIsImNhbWVsS2V5IiwidG9VcHBlckNhc2UiLCJmbk5hbWUiLCJldkZuTmFtZSIsImVsZW1lbnQiLCJfX2VsZW1lbnQiLCJhdHRyIiwid2l0aG91dFBhcmVudHMiLCJsYXN0UHJvcHMiLCJwcm9wc0xlbmd0aCIsImVsRXZhbHVhdGUiLCJfX2dldEJpbmQiLCJfX2RhdGEiLCJjIiwiX19jaGVja05vZGVQcm9wZXJ0eUNoYW5naW5nIiwiX19ldmFsdWF0ZU5vZGUiLCJfayIsIl9wcm9wIiwidW5iaW5kIiwib2JqIiwiX2tleXMiLCJfX2tleXMiLCJfaXNEZWxldGVkIiwiaGFzS2V5Iiwic2hpZnQiLCJoYXNQcm9wZXJ0eUJ5S2V5cyIsIl9fZXZhbHVhdGVOZXN0ZWQiLCJfX3VuYmluZCIsImRlbGV0ZVByb3BlcnR5QnlLZXlzIiwiZXhlYyIsIl9fY2hlY2tFdmFsdWF0aW9uIiwiYXR0cmlidXRlT2YiLCJldmVudE5hbWUiLCJfX2V2ZW50IiwiZW1pdHRlciIsIl9fZXZhbHVhdGVFdmVudCIsIl9faW5pdGlhbGl6ZWQiLCJfX2luaXRpYWxpemVBdHRyaWJ1dGUiLCJjaGFuZ2VBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGVOb2RlIiwiX191bmJpbmRCeU5vZGVzIiwiUHJveHkiLCJ0YXJnZXQiLCJzZXQiLCJhdHRyS2V5IiwiZGVsZXRlUHJvcGVydHkiLCJfX2lzU3lzdGVtS2V5IiwicmVhbFRhcmdldCIsImdldE93blByb3BlcnR5VGFyZ2V0IiwiaXNQbGFpbk9iamVjdCIsImdldEVudW1lcmFibGVQcm9wZXJ0eVRhcmdldCIsIl9fYmluZE5vZGUiLCJfX2NyZWF0ZUlzb2xhdGlvbk9iamVjdCIsInN0YXJ0S2V5cyIsIm9ic2VydmUiLCJfX3RhcmdldCIsIl9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyIsImlzb2xhdGlvbktleSIsInBhcmVudEtleXNTdHJpbmciLCJfX2RlbGV0ZU5vZGVQcm9wZXJ0eSIsIm5vZGVzIiwiX19jbGVhckVtcHR5QmluZGluZ3MiLCJjbGVhciIsIl9fcmVtb3ZlIiwib25SZW1vdmVkIiwicmVtb3ZlZCIsIl9fc3BsaWNlQ2hpbGQiLCJfX3JlbW92ZUNoaWxkcmVuIiwiZmluZCIsImZpbmRBbGwiLCJsZXZlbHMiLCJsZXZlbCIsInJpZ2h0IiwibGV2ZWxFbGVtZW50cyIsInJldmVyc2UiLCJfX2dldFBhcmVudCIsIl9fZ2V0Q2hpbGRyZW4iLCJfX2dldE5lYXIiLCJhcHBlbmRDaGlsZCIsIl9fZW1wdHkiLCJfX2Rlc3Ryb3kiLCJjbGFzcyIsImNsYXNzZXMiLCJzdHlsZXMiLCJmaWx0ZXIiLCJoYW5kbGVyIiwiaXNBcnJheSIsIml0ZW0iLCJtYXRjaCIsInNvcnQiLCJvcmRlciIsImEiLCJiIiwiRGF0ZSIsImdldFRpbWUiLCJuZXh0IiwiYVYiLCJiViIsIm5lc3RlZCIsImNvbXBhcmUiLCJjdXJyZW50IiwicHJldmlvdXMiLCJwcmV2aW91c0NvcHkiLCJjdXJyZW50Q29weSIsImVuY29kZUh0bWxFbnRpdGllcyIsImh0bWwiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJkZWNvZGVIdG1sRW50aXRpZXMiLCJvYmplY3QiLCJyZWR1Y2UiLCJvIiwiaGFzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJwcm90byIsImdldFByb3RvdHlwZU9mIiwiY2xlYXJTY29wZVByb3h5IiwiTWF0aCIsInJhbmRvbSIsInN1YnN0cmluZyIsIlJlcXVlc3QiLCJiYXNlVXJsIiwiZGVmYXVsdHMiLCJzdGF0dXNFcnJvcnNQYXR0ZXJuIiwicmVqZWN0IiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvblN0YXJ0IiwidHJhbnNmb3JtQmVmb3JlIiwib3BlbiIsIm1ldGhvZCIsInVzZXIiLCJwYXNzd29yZCIsImhlYWRlcnMiLCJqc29uIiwiYm9keSIsInJlc3BvbnNlVHlwZSIsImZvcm0iLCJjcmVhdGVGb3JtRGF0YSIsInRpbWVvdXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJzZXRSZXF1ZXN0SGVhZGVyIiwicGFyYW1zIiwicGFyYW1zVG9RdWVyeSIsIm9uUHJvZ3Jlc3MiLCJvbnByb2dyZXNzIiwib25sb2FkIiwicmVzcG9uc2UiLCJ0cmFuc2Zvcm1BZnRlciIsIm9udGltZW91dCIsIm9uZXJyb3IiLCJzZW5kIiwic2VwIiwiZXEiLCJrcyIsImVuY29kZVVSSUNvbXBvbmVudCIsInYiLCJvcHQiLCJxdWVyeSIsImFtcHMiLCJzcGxpdCIsImVxcyIsImRlY29kZVVSSUNvbXBvbmVudCIsIm5hbWVzcGFjZSIsImZkIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ0b0lTT1N0cmluZyIsIl9faW5zdGFuY2VzIiwiYWRkSW5zdGFuY2UiLCJpbnN0YW5jZSIsInJlbW92ZUluc3RhbmNlIiwidmFsdWVLZXkiLCJzZXRWYWx1ZSIsInNldEZvY3VzIiwiZm9jdXMiLCJzZXRFbGVtZW50Rm9jdXMiLCJzZXRFbGVtZW50Qmx1ciIsImJsdXIiLCJMb29wIiwiX19pdGVyYXRvciIsIl9fa2V5IiwiX192YWx1ZSIsIl9faW5kZXgiLCJfX2NvbXBhcmlzb25WYWx1ZSIsIml0ZXJhdG9ycyIsIml0ZXJhdG9yUmVmIiwiaXRlcmF0b3JPdXRlckhUTUwiLCJkcmF3IiwiY3JlYXRlSXRlcmF0b3IiLCJpbiIsIm1hc2siLCJuZXh0U2libGluZyIsIm91dGVySFRNTCIsImNvbnRlbnQiLCJmaXJzdENoaWxkIiwiaW5kZXgiLCJmb3VuZCIsIl9faGFzaCIsIml0ZXJhdG9yIiwiY1ZhbHVlIiwiY29tcGFyc2lvbiIsImNDb3B5Iiwic2V0SW5kZXgiLCJzZXRLZXkiLCJjcmVhdGVJdGVyYXRvckVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJ3cml0YWJsZSIsImVWYWx1ZSIsImluZGV4S2V5cyIsImxhc3RFbGVtZW50IiwibG9vcCIsIml0ZXJhdGUiLCJmb3IiLCJpc0ZvciIsImNhbmNlbCIsIl9fc2V0IiwidHJhbnNpdGlvbiIsInN0YXRlIiwicGF0aCIsImdldFBhcmVudFNjb3BlVHJhbnNpdGlvbiIsIl9fdHJhbnNpdGlvbiIsImxvYWRlZCIsImVtcHR5IiwiZm9yY2UiLCJpbkV2YWx1YXRpbmciLCJfRXZlbnQiLCJ0eXBlIiwiVHJhbnNpdGlvbiIsInJvdXRlcyIsInN0YXRlcyIsInJvdXRlIiwiaGFzaE1vZGUiLCJfX3JlZGlyZWN0cyIsIl9fb3B0aW9ucyIsIl9fcGFyYW1SZWdleCIsIl9fcm91dGVTZWxlY3RvciIsImFkZCIsInBhdHRlcm4iLCJkZWZhdWx0T3B0aW9ucyIsImFic3RyYWN0Iiwic2V0U3RhdGUiLCJnZXRTdGF0ZSIsImNyZWF0ZVN0YXRlVXJsIiwicmVsb2FkIiwiZ2V0VXJsIiwiYmFjayIsImhpc3RvcnkiLCJnbyIsImZvcndhcmQiLCJsb2NhdGlvbiIsInB1c2hTdGF0ZSIsImRlZmF1bHRVcmwiLCJvbGRQdXNoU3RhdGUiLCJlcnJvciIsIl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIiLCJwb3AiLCJwYXJlbnROYW1lIiwiZnVsbFBhdHRlcm4iLCJzcGxpdFNsYXNoZXMiLCJyZW1vdmVTdGF0ZSIsInNldEhhc2hVcmwiLCJzZXRIaXN0b3J5VXJsIiwiZ2V0SGFzaFVybCIsImdldEhpc3RvcnlVcmwiLCJwYXRobmFtZSIsInNlYXJjaCIsImdldFVybFF1ZXJ5IiwiZ2V0SGFzaFVybFF1ZXJ5IiwiZ2V0SGlzdG9yeVVybFF1ZXJ5IiwicGFyYW1zRnJvbVF1ZXJ5IiwiZiIsImdldFBhdHRlcm5Db250ZW50IiwidXJsUGF0dGVybiIsInJlZ2V4IiwiaXNJbmNsdWRlZCIsImlzQWN0aXZlU3RhdGUiLCJpbmNsdWRlcyIsImluQWN0aXZlU3RhdGUiLCJnZXRSb3V0ZSIsImdldEFycmF5UGF0dGVybkNvbnRlbnQiLCJnZXRTdGF0ZXNCeUxldmVsIiwiX19kaXNhYmxlQ2hhbmdlIiwicHJldlRyYW5zaXRpb24iLCJvbkVuZCIsInNldFBhdGgiLCJoYXNTdGF0ZSIsImlzRGlmZmVyZW50IiwicHJldiIsImlzSGlzdG9yeSIsImlzUmVsb2FkIiwic2V0VHJhbnNpdGlvbiIsInNhdmVTY3JvbGxQb3NpdGlvbiIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJpc1VybCIsInJlc2V0SHJlZiIsInNldFBhcmFtcyIsInNldFF1ZXJ5Iiwic2V0SGFzaCIsInNldFJlbG9hZCIsInByZXZlbnREZWZhdWx0Iiwic2V0T3B0aW9ucyIsImhyZWYiLCJnZXRDb21wdXRlZFN0eWxlIiwiZGlzcGxheSIsInJhbmdlIiwiY3JlYXRlUmFuZ2UiLCJzZWxlY3Rpb24iLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiRWxzZUlmIiwiRWxzZSIsImFjdGl2ZSIsInJlY3JlYXRlIiwiaXNDb21waWxlZCIsInNldFJlY3JlYXRpb24iLCJpcyIsImNvbXBpbGF0aW9uIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwicmVzdWx0Iiwic2V0QWN0aXZpdHkiLCJjb25uZWN0aW9uIiwiZ2V0VGVtcGxhdGUiLCJhYm9ydCIsIm9uTG9hZCIsIm9uRXJyb3IiLCJpc0NoZWNrYm94IiwiaXNSYWRpbyIsInNldENoZWNrZWQiLCJjaGVja2VkIiwicHJldkNoZWNrZWQiLCJvbkNoYW5nZSIsImRpc3BhdGNoIiwiRXZlbnQiLCJjaGFuZ2VSYWRpbyIsInJhZGlvIiwiT2JqZWN0cyIsIlJhZGlvQnV0dG9uIiwiaXRlcmFibGUiLCJzZXROYW1lcyIsImdldFJhZGlvVmFsdWUiLCJwcmV2VmFsdWUiLCJvblJhZGlvIiwiaXNUcnVlIiwiaXNTZWxlY3RlZCIsInNldFJhZGlvVmFsdWUiLCJPcHRpb24iLCJpdGVyYXRvclRhZ05hbWUiLCJpc011bHRpcGxlIiwic2V0TXVsdGlwbGUiLCJzZXRDb250ZW50IiwiZHJhd1NlbGVjdCIsImdldENvbnRlbnQiLCJtdWx0aXBsZSIsImNoYW5nZVZhbHVlIiwiZm9ybWF0VmFsdWUiLCJzZWxlY3RlZCIsIm9wdGlvbiIsInJlZGVmaW5lIiwidHJpbSIsInNldFNlbGVjdGVkIiwiX19lbCIsInN0cmljdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkRBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQWxDQTs7Ozs7Ozs7O0FBb0NBLElBQU1BLFFBQVEsRUFBZDs7QUFFQUEsTUFBTUMsT0FBTixHQUFnQjtBQUNkQyxrQkFBZ0IsSUFERjtBQUVkQyxTQUFPO0FBRk8sQ0FBaEI7O0FBS0FILE1BQU1JLE1BQU4sR0FBZSxJQUFmO0FBQ0FK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QUF2RDtBQUNBLHdCQUFNNVMsaUJBQU4sQ0FBd0J4QyxJQUF4QixTQUFvQyxVQUFDeUMsSUFBRCxFQUFPQyxHQUFQLEVBQWU7QUFDakQsY0FBRyxDQUFDRCxJQUFKLEVBQVU7QUFDUixtQkFBT0MsT0FBTyxFQUFkO0FBQ0Q7O0FBRUQsaUJBQU9DLEtBQVA7QUFDRCxTQU5EO0FBT0ErbEIsbUJBQVcsTUFBS2haLFdBQUwsQ0FBaUIwRix3QkFBakIsR0FBNEMsS0FBdkQ7QUFDRCxPQVZEO0FBV0Q7Ozt3QkEzQmE7QUFDWjtBQUNEOzs7Ozs7a0JBWmtCck0sSyIsImZpbGUiOiJha2lsaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNmIxY2MzNzM5ODdiOWQwZDE1MDQiLCIvKipcbiAqIEphdmFzY3JpcHQgZnJhbWV3b3JrXG4gKlxuICogY29uc3QgQWtpbGkgPSBtYWtlSXRFYXN5KGpzICsgaHRtbCk7XG4gKlxuICogQGF1dGhvciBBbGV4YW5kciBCYWxhc3lhbiA8bXl3ZWJzdHJlZXRAZ21haWwuY29tPlxuICogQGxpbmsgaHR0cDovL2FraWxpanMuY29tXG4gKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgSWYgZnJvbSAnLi9jb21wb25lbnRzL2lmLmpzJztcbmltcG9ydCBGb3IgZnJvbSAnLi9jb21wb25lbnRzL2Zvci5qcyc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vY29tcG9uZW50cy9zZWxlY3QuanMnO1xuaW1wb3J0IElucHV0IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC5qcyc7XG5pbXBvcnQgUmFkaW8gZnJvbSAnLi9jb21wb25lbnRzL3JhZGlvLmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vY29tcG9uZW50cy90ZXh0LmpzJztcbmltcG9ydCBUZXh0YXJlYSBmcm9tICcuL2NvbXBvbmVudHMvdGV4dGFyZWEuanMnO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb21wb25lbnRzL2NvbnRlbnQuanMnO1xuaW1wb3J0IEluY2x1ZGUgZnJvbSAnLi9jb21wb25lbnRzL2luY2x1ZGUuanMnO1xuaW1wb3J0IElmcmFtZSBmcm9tICcuL2NvbXBvbmVudHMvaWZyYW1lLmpzJztcbmltcG9ydCBJbWFnZSBmcm9tICcuL2NvbXBvbmVudHMvaW1hZ2UuanMnO1xuaW1wb3J0IEVtYmVkIGZyb20gJy4vY29tcG9uZW50cy9lbWJlZC5qcyc7XG5pbXBvcnQgQXVkaW8gZnJvbSAnLi9jb21wb25lbnRzL2F1ZGlvLmpzJztcbmltcG9ydCBWaWRlbyBmcm9tICcuL2NvbXBvbmVudHMvdmlkZW8uanMnO1xuaW1wb3J0IFRyYWNrIGZyb20gJy4vY29tcG9uZW50cy90cmFjay5qcyc7XG5pbXBvcnQgU291cmNlIGZyb20gJy4vY29tcG9uZW50cy9zb3VyY2UuanMnO1xuaW1wb3J0IE9iamVjdHMgZnJvbSAnLi9jb21wb25lbnRzL29iamVjdC5qcyc7XG5pbXBvcnQgUm91dGUgZnJvbSAnLi9jb21wb25lbnRzL3JvdXRlLmpzJztcbmltcG9ydCBVcmwgZnJvbSAnLi9jb21wb25lbnRzL3VybC5qcyc7XG5pbXBvcnQgQSBmcm9tICcuL2NvbXBvbmVudHMvYS5qcyc7XG5pbXBvcnQgU2NvcGUgZnJvbSAnLi9zY29wZS5qcyc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlci5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuL3NlcnZpY2VzL3JvdXRlci5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5cbmNvbnN0IEFraWxpID0ge307XG5cbkFraWxpLm9wdGlvbnMgPSB7XG4gIG5lc3RlZFdhdGNoaW5nOiB0cnVlLFxuICBkZWJ1ZzogdHJ1ZVxufTtcblxuQWtpbGkuX19pbml0ID0gbnVsbDtcbkFraWxpLl9fY29tcG9uZW50cyA9IHt9O1xuQWtpbGkuX19hbGlhc2VzID0ge307XG5Ba2lsaS5fX3Njb3BlcyA9IHt9O1xuQWtpbGkuX193aW5kb3cgPSB7fTtcbkFraWxpLl9faXNvbGF0aW9uID0gbnVsbDtcbkFraWxpLl9fZXZhbHVhdGlvbiA9IG51bGw7XG5Ba2lsaS5fX2h0bWwgPSB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuQWtpbGkuX19zZXJ2ZXJSZW5kZXJpbmcgPSBmYWxzZTtcblxuQWtpbGkuaHRtbEJvb2xlYW5BdHRyaWJ1dGVzID0gW1xuICAnZGlzYWJsZWQnLCAnY29udGVudGVkaXRhYmxlJywgJ2hpZGRlbidcbl07XG5cbkFraWxpLmNvbXBvbmVudHMgPSB7fTtcbkFraWxpLmRlY29yYXRvcnMgPSB7fTtcbkFraWxpLnNlcnZpY2VzID0ge307XG5cbi8qKlxuICogSm9pbiBiaW5kaW5nIGtleXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIGJpbmRpbmcga2V5c1xuICovXG5Ba2lsaS5qb2luQmluZGluZ0tleXMgPSBmdW5jdGlvbihrZXlzKSB7XG4gIHJldHVybiBrZXlzLm1hcChlbCA9PiBlbC50b1N0cmluZygpKS5qb2luKCcuJyk7XG59O1xuXG4vKipcbiAqIEFkZCBzY29wZSB0byB0aGUgc2NvcGVzIGxpc3RcbiAqXG4gKiBAcGFyYW0gc2NvcGVcbiAqL1xuQWtpbGkuYWRkU2NvcGUgPSBmdW5jdGlvbihzY29wZSkge1xuICBpZih0aGlzLl9fc2NvcGVzW3Njb3BlLl9fbmFtZV0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFNjb3BlIG5hbWUgJHtzY29wZS5fX25hbWV9IGFscmVhZHkgZXhpc3RzYCk7XG4gIH1cblxuICB0aGlzLl9fc2NvcGVzW3Njb3BlLl9fbmFtZV0gPSBzY29wZTtcbn07XG5cbi8qKlxuICogR2V0IHNjb3BlIGZyb20gdGhlIHNjb3BlcyBsaXN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzY29wZSBuYW1lXG4gKiBAcmV0dXJucyB7U2NvcGV9XG4gKi9cbkFraWxpLmdldFNjb3BlID0gZnVuY3Rpb24obmFtZSkge1xuICByZXR1cm4gdGhpcy5fX3Njb3Blc1tuYW1lXTtcbn07XG5cbi8qKlxuICogRGVsZXRlIHNjb3BlIGZyb20gdGhlIHNjb3BlcyBsaXN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzY29wZSBuYW1lXG4gKi9cbkFraWxpLnJlbW92ZVNjb3BlID0gZnVuY3Rpb24obmFtZSkge1xuICB0aGlzLl9fc2NvcGVzW25hbWVdID0gbnVsbDtcbiAgZGVsZXRlIHRoaXMuX19zY29wZXNbbmFtZV07XG59O1xuXG4vKipcbiAqIEdldCBhbGwgZWxlbWVudHMgd2l0aCBhdHRhY2hlZCBBa2lsaSBjb21wb25lbnRzXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3RyZWU9dHJ1ZV0gLSByZXR1cm4gYXJyYXkgb2YgdGhlIHBhcmVudHMgaWYgdHJ1ZSwgY2xvc2VzdCBwYXJlbnQgaWYgZmFsc2VcbiAqIEByZXR1cm5zIHtBcnJheXxIVE1MRWxlbWVudHxudWxsfVxuICovXG5Ba2lsaS5nZXRBa2lsaVBhcmVudHMgPSBmdW5jdGlvbiAoZWwsIHRyZWUgPSB0cnVlKSB7XG4gIGxldCBhcnIgPSBbXTtcblxuICBmdW5jdGlvbiBjaGVjayhub2RlKSB7XG4gICAgaWYoIW5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKG5vZGUucGFyZW50Tm9kZS5fX2FraWxpKSB7XG4gICAgICBhcnIucHVzaChub2RlLnBhcmVudE5vZGUpO1xuXG4gICAgICBpZighdHJlZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2sobm9kZS5wYXJlbnROb2RlKTtcbiAgfVxuXG4gIGNoZWNrKGVsKTtcblxuICByZXR1cm4gdHJlZT8gYXJyOiBhcnJbMF07XG59O1xuXG4vKipcbiAqIFNldCBlbGVtZW50IGlubmVyIGh0bWwgd2l0aCBjb250ZW50IHJlcGxhY2luZ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwiPGk+SGVsbG88L2k+PGI+V29ybGQ8L2I+XCJcbiAqIGVsLmlubmVySFRNTCA9IFwiPGI+V29ybGQ8L2I+XCI7XG4gKiBBa2lsaS5zZXRUZW1wbGF0ZShlbCwgXCI8aT5IZWxsbzwvaT4ke3RoaXMuX19jaGlsZHJlbn1cIik7XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuQWtpbGkuc2V0VGVtcGxhdGUgPSBmdW5jdGlvbihlbCwgdGVtcGxhdGUpIHtcbiAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKC9cXCR7KCgoPyFcXCR7KVxccyp0aGlzXFwuX19jb250ZW50XFxzKikqKX0vLCBlbC5pbm5lckhUTUwpO1xuICBlbC5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcblxuICByZXR1cm4gZWwuaW5uZXJIVE1MO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSB1bmlxdWUgc2NvcGUgbmFtZVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbkFraWxpLmNyZWF0ZVNjb3BlTmFtZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdXRpbHMuY3JlYXRlUmFuZG9tU3RyaW5nKDE2LCAoc3RyKSA9PiB7XG4gICAgcmV0dXJuICEhdGhpcy5fX3Njb3Blc1tzdHJdO1xuICB9KTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSBmdW5jdGlvbi5cbiAqIEV2ZXJ5IHNjb3BlIHZhcmlhYmxlIGNoYW5nZSBjYWxscyBhY2NvcmRpbmcgbm9kZSBldmFsdWF0aW9uLlxuICogRm9yIGV4YW1wbGUsIGlmIHlvdSBjaGFuZ2Ugc29tZSBzY29wZSB2YXJpYWJsZSBpbiB0aGUgbG9vcCAtIGV2YWx1YXRpb24gd2lsbCBiZSBjYWxsZWQgb24gdGhlIGVhY2ggY2hhbmdlLlxuICogSXQgbWF5IGJlIHNsb3cgZm9yIHRoZSBhcHBsaWNhdGlvbi5cbiAqIFlvdSBjYW4gaXNvbGF0ZSB0aGlzIGFjdGlvbiBhbmQgcnVuIGFsbCBldmFsdWF0aW9uIHByb2Nlc3MgYWZ0ZXIgcGFzc2VkIGZ1bmN0aW9uIGF0IG9uY2UuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS5pc29sYXRlID0gZnVuY3Rpb24oZm4pIHtcbiAgaWYodGhpcy5fX2lzb2xhdGlvbikge1xuICAgIHJldHVybiBmbigpO1xuICB9XG5cbiAgdGhpcy5fX2lzb2xhdGlvbiA9IHt9O1xuXG4gIGxldCByZXMgPSBmbigpO1xuICBsZXQgcHJvcHMgPSBbXTtcblxuICBmb3IobGV0IGsgaW4gdGhpcy5fX2lzb2xhdGlvbikge1xuICAgIGlmKCF0aGlzLl9faXNvbGF0aW9uLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBwcm9wcy5wdXNoKHRoaXMuX19pc29sYXRpb25ba10pO1xuICB9XG5cbiAgdGhpcy5fX2lzb2xhdGlvbiA9IG51bGw7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IHByb3BzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBwcm9wID0gcHJvcHNbaV07XG5cbiAgICBpZihwcm9wLmlzRGVsZXRlZCkge1xuICAgICAgcHJvcC5jb21wb25lbnQuX19ldmFsdWF0ZUJ5S2V5cyhwcm9wLmtleXMsIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKHByb3Aua2V5cywgcHJvcC5jb21wb25lbnQuc2NvcGUsIChsYXN0LCB2YWwpID0+IHtcbiAgICAgIGlmKCFsYXN0KSB7XG4gICAgICAgIHJldHVybiB2YWwgfHwge307XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcm9wLnZhbHVlO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvcHMgPSBudWxsO1xuXG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIFN0b3AgZXZhbHVhdGlvbiBiZWZvcmUgdGhlIGZ1bmN0aW9uIGFuZCBjb250aW51ZSBhZnRlclxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkudW5ldmFsdWF0ZWQgPSBmdW5jdGlvbihmbikge1xuICBsZXQgZXZhbHVhdGlvbiA9IHRoaXMuX19ldmFsdWF0aW9uO1xuICBsZXQgcmVzO1xuXG4gIHRoaXMuX19ldmFsdWF0aW9uID0gbnVsbDtcbiAgcmVzID0gZm4oKTtcbiAgdGhpcy5fX2V2YWx1YXRpb24gPSBldmFsdWF0aW9uO1xuXG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIFN0b3AgaXNvbGF0aW9uIGJlZm9yZSB0aGUgZnVuY3Rpb24gYW5kIGNvbnRpbnVlIGFmdGVyXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS51bmlzb2xhdGVkID0gZnVuY3Rpb24oZm4pIHtcbiAgbGV0IGV2YWx1YXRpb24gPSB0aGlzLl9faXNvbGF0aW9uO1xuICBsZXQgcmVzO1xuXG4gIHRoaXMuX19pc29sYXRpb24gPSBudWxsO1xuICByZXMgPSBmbigpO1xuICB0aGlzLl9faXNvbGF0aW9uID0gZXZhbHVhdGlvbjtcblxuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zPXt9XVxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLmluaXRpYWxpemUgPSBmdW5jdGlvbihlbCwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCByZWNvbXBpbGUgPSBvcHRpb25zLnJlY29tcGlsZTtcbiAgbGV0IGNvbXBvbmVudCA9IGVsLl9fYWtpbGk7XG4gIGxldCBwYXJlbnRzID0gQWtpbGkuZ2V0QWtpbGlQYXJlbnRzKGVsKTtcblxuICBmb3IobGV0IGkgPSAwLCBsID0gcGFyZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZihwYXJlbnRzW2ldLl9fYWtpbGkuX19wcmV2ZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaWYoY29tcG9uZW50KSB7XG4gICAgaWYocmVjb21waWxlKSB7XG4gICAgICBjb21wb25lbnQuX19yZWNvbXBpbGUoKTtcblxuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgaXNSb290ID0gZWwgPT09IHRoaXMuX19yb290O1xuICBsZXQgY29tcG9uZW50TmFtZSA9IHV0aWxzLnRvRGFzaENhc2UoZWwuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKSB8fCBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpO1xuICBsZXQgX0NvbXBvbmVudCA9IHRoaXMuX19jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdO1xuXG4gIENIRUNLX0FMSUFTRVM6IGlmKCFfQ29tcG9uZW50KSB7XG4gICAgbGV0IHNlbGVjdG9ycyA9IE9iamVjdC5rZXlzKHRoaXMuX19hbGlhc2VzKTtcblxuICAgIGlmKCFzZWxlY3RvcnMubGVuZ3RoKSB7XG4gICAgICBicmVhayBDSEVDS19BTElBU0VTO1xuICAgIH1cblxuICAgIGxldCBzZWxlY3RvckFsbCA9IHNlbGVjdG9ycy5qb2luKCcsJyk7XG5cbiAgICBpZighZWwubWF0Y2hlcyhzZWxlY3RvckFsbCkpIHtcbiAgICAgIGJyZWFrIENIRUNLX0FMSUFTRVM7XG4gICAgfVxuXG4gICAgZm9yKGxldCBzZWxlY3RvciBpbiB0aGlzLl9fYWxpYXNlcykge1xuICAgICAgaWYoIXRoaXMuX19hbGlhc2VzLmhhc093blByb3BlcnR5KHNlbGVjdG9yKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYoZWwubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgX0NvbXBvbmVudCA9IHRoaXMuX19jb21wb25lbnRzW3RoaXMuX19hbGlhc2VzW3NlbGVjdG9yXV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmKCFfQ29tcG9uZW50ICYmICFpc1Jvb3QpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZighX0NvbXBvbmVudCkge1xuICAgIF9Db21wb25lbnQgPSB0aGlzLkNvbXBvbmVudDtcbiAgfVxuXG4gIGlmKF9Db21wb25lbnQubWF0Y2hlcyAmJiAhZWwubWF0Y2hlcyhfQ29tcG9uZW50Lm1hdGNoZXMpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29tcG9uZW50ID0gbmV3IF9Db21wb25lbnQoZWwsIHt9KTtcblxuICBpZihjb21wb25lbnQuX19jYW5jZWxsZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb21wb25lbnQuX19jcmVhdGUoKTtcblxuICByZXR1cm4gY29tcG9uZW50O1xufTtcblxuLyoqXG4gKiBDb21waWxlIHRoZSBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbkFraWxpLmNvbXBpbGUgPSBmdW5jdGlvbihyb290LCBvcHRpb25zID0geyByZWNvbXBpbGU6IGZhbHNlIH0pIHsgIFxuICBsZXQgZWxlbWVudHMgPSBbXTtcblxuICBsZXQgbmVzdGVkSW5pdGlhbGl6aW5nID0gKGVsKSA9PiB7XG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXMuaW5pdGlhbGl6ZShlbCwgb3B0aW9ucyk7XG4gICAgbGV0IGNoaWxkcmVuID0gZWwuY2hpbGRyZW47XG5cbiAgICBjb21wb25lbnQgJiYgZWxlbWVudHMucHVzaChjb21wb25lbnQpO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgIG5lc3RlZEluaXRpYWxpemluZyhjaGlsZCk7XG4gICAgfVxuICB9O1xuXG4gIG5lc3RlZEluaXRpYWxpemluZyhyb290KTtcblxuICBsZXQgcCA9IFtdO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgY29tcG9uZW50ID0gZWxlbWVudHNbaV07XG5cbiAgICBwLnB1c2goY29tcG9uZW50Ll9fY29tcGlsZSgpKTtcbiAgfVxuXG4gIHJldHVybiBQcm9taXNlLmFsbChwKS50aGVuKCgpID0+IHtcbiAgICBsZXQgciA9IFtdO1xuXG4gICAgZm9yKGxldCBpID0gZWxlbWVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBjb21wb25lbnQgPSBlbGVtZW50c1tpXTtcblxuICAgICAgci5wdXNoKGNvbXBvbmVudC5fX3Jlc29sdmUoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHIpO1xuICB9KTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIGNvbXBvbmVudCBvciBnZXQgaXQgaWYgZm4gaXMgbm90IHBhc3NlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gW2ZuXVxuICovXG5Ba2lsaS5jb21wb25lbnQgPSBmdW5jdGlvbihuYW1lLCBmbikge1xuICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmKCFmbikge1xuICAgIHJldHVybiB0aGlzLl9fY29tcG9uZW50c1tuYW1lXSB8fCBudWxsO1xuICB9XG5cbiAgaWYodGhpcy5fX2NvbXBvbmVudHNbbmFtZV0gJiYgQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgIGNvbnNvbGUud2FybihgQ29tcG9uZW50ICR7bmFtZX0gYWxyZWFkeSB3YXMgYWRkZWRgKTtcbiAgfVxuXG4gIHRoaXMuX19jb21wb25lbnRzW25hbWVdID0gZm47XG59O1xuXG4vKipcbiAqIFVucmVnaXN0ZXIgdGhlIGNvbXBvbmVudFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbkFraWxpLnVucmVnaXN0ZXJDb21wb25lbnQgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLl9fY29tcG9uZW50c1tuYW1lXTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIHNlbGVjdG9yIGFsaWFzIG9yIGdldCBpdCBpZiBjb21wb25lbnQgbmFtZSBpcyBub3QgcGFzc2VkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIC0gRE9NIHNlbGVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvbXBvbmVudE5hbWVdXG4gKi9cbkFraWxpLmFsaWFzID0gZnVuY3Rpb24oc2VsZWN0b3IsIGNvbXBvbmVudE5hbWUgPSAnJykge1xuICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmKCFjb21wb25lbnROYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXSB8fCBudWxsO1xuICB9XG5cbiAgaWYodGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdICYmIEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICBjb25zb2xlLndhcm4oYEFsaWFzIHdpdGggc2VsZWN0b3IgJHtzZWxlY3Rvcn0gYWxyZWFkeSB3YXMgYWRkZWRgKTtcbiAgfVxuXG4gIHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXSA9IGNvbXBvbmVudE5hbWU7XG59O1xuXG4vKipcbiAqIFVucmVnaXN0ZXIgdGhlIHNlbGVjdG9yIGFsaWFzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gKi9cbkFraWxpLnVucmVnaXN0ZXJBbGlhcyA9IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gIGRlbGV0ZSB0aGlzLl9fY29tcG9uZW50c1tzZWxlY3Rvcl07XG59O1xuXG4vKipcbiAqIElzb2xhdGUgYXJyYXkgcHJvdG90eXBlIGZ1bmN0aW9uc1xuICovXG5Ba2lsaS5pc29sYXRlQXJyYXlQcm90b3R5cGUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fX3dpbmRvdy5BcnJheSA9IHsgcHJvdG90eXBlOiB7fSB9O1xuXG4gIGxldCBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoQXJyYXkucHJvdG90eXBlKTtcblxuICBmb3IobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICBsZXQgb2xkID0gQXJyYXkucHJvdG90eXBlW2tleV07XG5cbiAgICBpZih0eXBlb2Ygb2xkICE9ICdmdW5jdGlvbicgfHwga2V5ID09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHRoaXMuX193aW5kb3cuQXJyYXkucHJvdG90eXBlW2tleV0gPSBvbGQ7XG5cbiAgICBBcnJheS5wcm90b3R5cGVba2V5XSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIEFraWxpLnVuZXZhbHVhdGVkKCgpID0+IHtcbiAgICAgICAgaWYoIXRoaXMuX19pc1Byb3h5KSB7XG4gICAgICAgICAgcmV0dXJuIG9sZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBvbGQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG59O1xuXG4vKipcbiAqIElzb2xhdGUgc29tZSB3aW5kb3cgZnVuY3Rpb25zXG4gKi9cbkFraWxpLmlzb2xhdGVXaW5kb3dGdW5jdGlvbnMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fX3dpbmRvdy5zZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgdGhpcy5fX3dpbmRvdy5zZXRJbnRlcnZhbCA9IHNldEludGVydmFsO1xuICB0aGlzLl9fd2luZG93LlByb21pc2UgPSBQcm9taXNlO1xuXG4gIHdpbmRvdy5zZXRUaW1lb3V0ID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuc2V0VGltZW91dCwgMCk7XG4gIHdpbmRvdy5zZXRJbnRlcnZhbCA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LnNldEludGVydmFsLCAwKTtcbiAgd2luZG93LlByb21pc2UgJiYgKHdpbmRvdy5Qcm9taXNlLmNvbnN0cnVjdG9yID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuUHJvbWlzZS5jb25zdHJ1Y3RvciAsIDApKTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSBldmVudCBsaXN0ZW5lcnNcbiAqL1xuQWtpbGkuaXNvbGF0ZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQgPSB7IHByb3RvdHlwZToge30gfTtcblxuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBFbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyO1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyO1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZTtcblxuICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICBkZWxldGUgdGhpcy5fX2FraWxpTGlzdGVuZXJzO1xuXG4gICAgcmV0dXJuIEFraWxpLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihuYW1lLCBmbikge1xuICAgIGxldCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYoIXRoaXMuX19ha2lsaUxpc3RlbmVycykge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzID0ge307XG4gICAgfVxuXG4gICAgaWYoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgYXJnc1sxXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBBa2lsaS51bmV2YWx1YXRlZCgoKSA9PiB7XG4gICAgICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLnB1c2goe1xuICAgICAgbGluazogZm4sXG4gICAgICBmbjogYXJnc1sxXVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIEFraWxpLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG5cbiAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYoIXRoaXMuX19ha2lsaUxpc3RlbmVycykge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzID0ge307XG4gICAgfVxuXG4gICAgaWYoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBsaXN0ZW5lciA9IHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXVtpXTtcblxuICAgICAgaWYobGlzdGVuZXIubGluayA9PT0gZm4pIHtcbiAgICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLnNwbGljZShpLCAxKTtcbiAgICAgICAgaS0tO1xuICAgICAgICBsLS07XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV07XG4gICAgfVxuXG4gICAgcmV0dXJuICBBa2lsaS5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG4vKipcbiAqIFdyYXAgdGhlIGZ1bmN0aW9uIGNhbGxiYWNrIHRvIGFuIGlzb2xhdGUgY29udGV4dFxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IFtwb3M9XCJsYXN0XCJdXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbkFraWxpLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uID0gZnVuY3Rpb24oZm4sIHBvcyA9ICdsYXN0Jykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgbGV0IGNhbGxiYWNrID0gcG9zID09ICdsYXN0Jz8gYXJnc1thcmdzLmxlbmd0aCAtIDFdOiBhcmdzW3Bvc107XG5cbiAgICBpZih0eXBlb2YgY2FsbGJhY2sgIT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgYXJnc1swXSA9ICgpID0+IHtcbiAgICAgIHJldHVybiBBa2lsaS51bmV2YWx1YXRlZCgoKSA9PiB7XG4gICAgICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xufTtcblxuLyoqXG4gKiBJc29sYXRlIHRoZSBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge29iamVjdH0gW2NvbnRleHRdXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbkFraWxpLmlzb2xhdGVGdW5jdGlvbiA9IGZ1bmN0aW9uKGZuLCBjb250ZXh0ID0gbnVsbCkge1xuICBpZihmbi5fX2FraWxpKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgbGV0IG9GbiA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IHRoaXM7XG5cbiAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICByZXR1cm4gZm4uYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcbiAgICB9KTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob0ZuLCAnX19ha2lsaScsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG5cbiAgcmV0dXJuIG9Gbjtcbn07XG5cbi8qKlxuICogRXJyb3IgaGFuZGxpbmdcbiAqL1xuQWtpbGkuZXJyb3JIYW5kbGluZyA9IGZ1bmN0aW9uKCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgdGhpcy50cmlnZ2VySW5pdChmYWxzZSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBUcmlnZ2VyIGFuIGluaXRpYWxpemF0aW9uIHN0YXR1c1xuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc3RhdHVzXG4gKi9cbkFraWxpLnRyaWdnZXJJbml0ID0gZnVuY3Rpb24oc3RhdHVzKSB7XG4gIEFraWxpLl9faW5pdCA9IHN0YXR1cztcbiAgdGhpcy5fX3NlcnZlclJlbmRlcmluZyAmJiAodGhpcy5fX2h0bWwuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJyk7XG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnYWtpbGktaW5pdCcsIHsgZGV0YWlsOiBzdGF0dXMgfSkpO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBhcHBsaWNhdGlvblxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFtyb290XVxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbkFraWxpLmluaXQgPSBmdW5jdGlvbihyb290KSB7XG4gIGxldCBzZXJ2ZXJQID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIGxldCBzZXJ2ZXIgPSB0aGlzLl9faHRtbC5nZXRBdHRyaWJ1dGUoJ2FraWxpLXNlcnZlcicpO1xuXG4gIHRoaXMuX19yb290ID0gcm9vdCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKTtcbiAgdGhpcy5fX3NlcnZlclJlbmRlcmluZyA9ICEhc2VydmVyO1xuXG4gIGlmKHNlcnZlcikge1xuICAgIHRoaXMuX19odG1sLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuX19odG1sLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblxuICAgIHNlcnZlclAgPSByZXF1ZXN0LmdldChzZXJ2ZXIpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgdGhpcy5fX2h0bWwuaW5uZXJIVE1MID0gcmVzLmRhdGE7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gc2VydmVyUC50aGVuKCgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5jb21waWxlKHRoaXMuX19yb290KS50aGVuKCgpID0+IHtcbiAgICAgIGlmKHJvdXRlci5fX2luaXQpIHtcbiAgICAgICAgcmV0dXJuIHJvdXRlci5jaGFuZ2VTdGF0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KS50aGVuKCgpID0+IHtcbiAgICB0aGlzLnRyaWdnZXJJbml0KHRydWUpO1xuICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgdGhpcy50cmlnZ2VySW5pdChmYWxzZSk7XG4gICAgdGhyb3cgZXJyO1xuICB9KTtcbn07XG5cbi8qKlxuICogRGVpbml0aWFsaXplIHRoZSBhcHBsaWNhdGlvblxuICovXG5Ba2lsaS5kZWluaXQgPSBmdW5jdGlvbigpIHtcbiAgZm9yKGxldCBrZXkgaW4gdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZSkge1xuICAgIEVsZW1lbnQucHJvdG90eXBlW2tleV0gPSB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlW2tleV07XG4gIH1cblxuICBmb3IobGV0IGtleSBpbiB0aGlzLl9fd2luZG93LkFycmF5LnByb3RvdHlwZSkge1xuICAgIEFycmF5LnByb3RvdHlwZVtrZXldID0gdGhpcy5fX3dpbmRvdy5BcnJheS5wcm90b3R5cGVba2V5XTtcbiAgfVxuXG4gIHdpbmRvdy5zZXRUaW1lb3V0ID0gdGhpcy5fX3dpbmRvdy5zZXRUaW1lb3V0O1xuICB3aW5kb3cuc2V0SW50ZXJ2YWwgPSB0aGlzLl9fd2luZG93LnNldEludGVydmFsO1xuICB3aW5kb3cuUHJvbWlzZSA9IHRoaXMuX193aW5kb3cuUHJvbWlzZTtcbn07XG5cbi8qKlxuICogRGVmaW5lIGFsbCBkZWZhdWx0IGNvbXBvbmVudHNcbiAqL1xuQWtpbGkuZGVmaW5lID0gZnVuY3Rpb24oKSB7XG4gIEEuZGVmaW5lKCk7XG4gIEF1ZGlvLmRlZmluZSgpO1xuICBDb250ZW50LmRlZmluZSgpO1xuICBDb21wb25lbnQuZGVmaW5lKCk7XG4gIEVtYmVkLmRlZmluZSgpO1xuICBGb3IuZGVmaW5lKCk7XG4gIEluY2x1ZGUuZGVmaW5lKCk7XG4gIElmcmFtZS5kZWZpbmUoKTtcbiAgSW1hZ2UuZGVmaW5lKCk7XG4gIElucHV0LmRlZmluZSgpO1xuICBJZi5kZWZpbmUoKTtcbiAgT2JqZWN0cy5kZWZpbmUoKTtcbiAgUmFkaW8uZGVmaW5lKCk7XG4gIFJvdXRlLmRlZmluZSgpO1xuICBTZWxlY3QuZGVmaW5lKCk7XG4gIFNvdXJjZS5kZWZpbmUoKTtcbiAgVGV4dGFyZWEuZGVmaW5lKCk7XG4gIFRyYWNrLmRlZmluZSgpO1xuICBWaWRlby5kZWZpbmUoKTtcbn07XG5cbkFraWxpLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbkFraWxpLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcbkFraWxpLlNjb3BlID0gU2NvcGU7XG5Ba2lsaS51dGlscyA9IHV0aWxzO1xuQWtpbGkuY29tcG9uZW50cy5BID0gQTtcbkFraWxpLmNvbXBvbmVudHMuQXVkaW8gPSBBdWRpbztcbkFraWxpLmNvbXBvbmVudHMuQ29udGVudCA9IENvbnRlbnQ7XG5Ba2lsaS5jb21wb25lbnRzLkZvciA9IEZvcjtcbkFraWxpLmNvbXBvbmVudHMuRW1iZWQgPSBFbWJlZDtcbkFraWxpLmNvbXBvbmVudHMuSWYgPSBJZjtcbkFraWxpLmNvbXBvbmVudHMuSW5jbHVkZSA9IEluY2x1ZGU7XG5Ba2lsaS5jb21wb25lbnRzLklucHV0ID0gSW5wdXQ7XG5Ba2lsaS5jb21wb25lbnRzLklmcmFtZSA9IElmcmFtZTtcbkFraWxpLmNvbXBvbmVudHMuSW1hZ2UgPSBJbWFnZTtcbkFraWxpLmNvbXBvbmVudHMuT2JqZWN0ID0gT2JqZWN0cztcbkFraWxpLmNvbXBvbmVudHMuUmFkaW8gPSBSYWRpbztcbkFraWxpLmNvbXBvbmVudHMuUm91dGUgPSBSb3V0ZTtcbkFraWxpLmNvbXBvbmVudHMuU2VsZWN0ID0gU2VsZWN0O1xuQWtpbGkuY29tcG9uZW50cy5Tb3VyY2UgPSBTb3VyY2U7XG5Ba2lsaS5jb21wb25lbnRzLlRleHQgPSBUZXh0O1xuQWtpbGkuY29tcG9uZW50cy5UZXh0YXJlYSA9IFRleHRhcmVhO1xuQWtpbGkuY29tcG9uZW50cy5UcmFjayA9IFRyYWNrO1xuQWtpbGkuY29tcG9uZW50cy5VcmwgPSBVcmw7XG5Ba2lsaS5jb21wb25lbnRzLlZpZGVvID0gVmlkZW87XG5Ba2lsaS5zZXJ2aWNlcy5yZXF1ZXN0ID0gcmVxdWVzdDtcbkFraWxpLnNlcnZpY2VzLnJvdXRlciA9IHJvdXRlcjtcblxud2luZG93LkFraWxpID0gQWtpbGk7XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnRzID0gQWtpbGkuY29tcG9uZW50cztcbmV4cG9ydCBjb25zdCBzZXJ2aWNlcyA9IEFraWxpLnNlcnZpY2VzO1xuZXhwb3J0IGRlZmF1bHQgQWtpbGk7XG5cbkFraWxpLmRlZmluZSgpO1xuQWtpbGkuZXJyb3JIYW5kbGluZygpO1xuQWtpbGkuaXNvbGF0ZUV2ZW50cygpO1xuQWtpbGkuaXNvbGF0ZUFycmF5UHJvdG90eXBlKCk7XG5Ba2lsaS5pc29sYXRlV2luZG93RnVuY3Rpb25zKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FraWxpLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xyXG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXJsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgbWF0Y2hlcyA9ICdbdXJsXSc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcclxuICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG5cclxuICAgIHRoaXMudXJsQXR0cmlidXRlID0gJ3NyYyc7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VkVXJsKHVybCkge1xyXG4gICAgdGhpcy5zZXRVcmwodXJsKTtcclxuICB9XHJcblxyXG4gIGNvbXBpbGVkKCkge1xyXG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgndXJsJykgJiYgdGhpcy5zZXRVcmwodGhpcy5hdHRycy51cmwpO1xyXG4gIH1cclxuXHJcbiAgc2V0VXJsKHVybCkge1xyXG4gICAgdGhpcy5hdHRyc1t0aGlzLnVybEF0dHJpYnV0ZV0gPSB1cmw7XHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdXJsLmpzIiwiaW1wb3J0IEFraWxpIGZyb20gJy4vYWtpbGkuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9zZXJ2aWNlcy9yZXF1ZXN0LmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcblxuY29uc3QgZXZhbHVhdGlvblJlZ2V4ID0gL1xcJHsoKCg/IVxcJHspLikqKX0vO1xuY29uc3QgZXZhbHVhdGlvblJlZ2V4R2xvYmFsID0gbmV3IFJlZ0V4cChldmFsdWF0aW9uUmVnZXguc291cmNlLCBcImdcIik7XG5jb25zdCBzeXN0ZW1BdHRyaWJ1dGVzID0gWydjb21wb25lbnQnLCAnc2NvcGUnXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgc3RhdGljIG5lc3RlZFdhdGNoaW5nO1xuICBzdGF0aWMgbWF0Y2hlcyA9ICcnO1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbXTtcbiAgc3RhdGljIGV2ZW50cyA9IFtdO1xuICBzdGF0aWMgY29udHJvbEF0dHJpYnV0ZXMgPSBmYWxzZTtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gZmFsc2U7XG4gIHN0YXRpYyB0ZW1wbGF0ZSA9ICcnO1xuICBzdGF0aWMgdGVtcGxhdGVVcmwgPSAnJztcbiAgc3RhdGljIHNjb3BlID0gbnVsbDtcblxuICAvKipcbiAgICogRnVuY3Rpb24gdG8gZGVmaW5lIHRoZSBjb21wb25lbnRcbiAgICovXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdjb21wb25lbnQnLCBDb21wb25lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIHRoZSBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBleHByZXNzaW9uXG4gICAqIEBwYXJhbSB7RXZlbnR9IFtldmVudD1udWxsXVxuICAgKi9cbiAgc3RhdGljIHBhcnNlKGNvbnRleHQsIGV4cHJlc3Npb24sIGV2ZW50ID0gbnVsbCkge1xuICAgIHJldHVybiAoZnVuY3Rpb24gKGV4cHJlc3Npb24sIGV2ZW50KSB7XG4gICAgICByZXR1cm4gZXZhbChleHByZXNzaW9uKTtcbiAgICB9KS5jYWxsKGNvbnRleHQsIGV4cHJlc3Npb24sIGV2ZW50KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVsLCBzY29wZSA9IHt9KSB7XG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19pc0NvbXBpbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19wcmV2ZW50ID0gZmFsc2U7XG4gICAgdGhpcy5fX2JpbmRpbmdzID0ge307XG4gICAgdGhpcy5fX2V2YWx1YXRpbmdFdmVudCA9IG51bGw7XG4gICAgdGhpcy5fX3JlY29tcGlsaW5nID0gbnVsbDtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0ge307XG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IG51bGw7XG4gICAgdGhpcy5fX2NoaWxkcmVuID0gW107XG4gICAgdGhpcy5fX3BhcmVudCA9IG51bGw7XG4gICAgdGhpcy5fX3BhcmVudHMgPSBbXTtcbiAgICB0aGlzLl9fYXR0cnMgPSB7fTtcbiAgICB0aGlzLl9fYXR0cmlidXRlT2YgPSBudWxsO1xuICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50ID0gdGhpcztcbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgdGhpcy5lbCA9IGVsO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiB0aGUgcmVjb21waWxhdGlvblxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlY29tcGlsZSgpIHtcbiAgICB0aGlzLl9faXNNb3VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2lzQ29tcGlsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5fX2Rpc2FibGVQcm94eSA9IG51bGw7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IHt9O1xuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IHt9O1xuICAgIHRoaXMuX19zZXRFdmVudHMoKTtcbiAgICB0aGlzLl9fc2V0UGFyZW50cygpO1xuICAgIHRoaXMuX19zZXRCb29sZWFuQXR0cmlidXRlcygpO1xuICAgIHRoaXMuX19kZWZpbmVBdHRyaWJ1dGVzKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIG9uIHRoZSBjcmVhdGlvblxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZSgpIHtcbiAgICB0aGlzLmVsLl9fYWtpbGkgPSB0aGlzO1xuICAgIHRoaXMuX19pbml0aWFsaXplKCk7XG4gICAgdGhpcy5fX3NldEV2ZW50cygpO1xuICAgIHRoaXMuX19zZXRQYXJlbnRzKCk7XG4gICAgdGhpcy5fX3NldEJvb2xlYW5BdHRyaWJ1dGVzKCk7XG4gICAgdGhpcy5fX2RlZmluZUF0dHJpYnV0ZXMoKTtcblxuICAgIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVkKHRoaXMuYXR0cnMpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiB0aGUgY29tcGlsYXRpb25cbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIF9fY29tcGlsZSgpIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuX19jb250cm9sQXR0cmlidXRlcyB8fCAhdGhpcy5fX2V2YWx1YXRlUGFyZW50O1xuICAgIGxldCBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbiAgICB0aGlzLl9fYXR0cmlidXRlT2YgPSBjb250cm9sPyB0aGlzOiB0aGlzLl9fZXZhbHVhdGVQYXJlbnQuX19ha2lsaTtcblxuICAgIGlmKCF0aGlzLl9fcmVjb21waWxpbmcgfHwgdGhpcy5fX2NvbXBpbGluZy5uZXdQYXJlbnQgfHwgdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzKSB7XG4gICAgICB0aGlzLl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKHRoaXMuZWwsIHRoaXMuX19hdHRyaWJ1dGVPZik7XG4gICAgfVxuXG4gICAgbGV0IGludGVycG9sYXRlID0gKGNoaWxkcmVuLCBwYXJlbnQpID0+IHtcbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYoY2hpbGQubm9kZVR5cGUgPT0gMykge1xuICAgICAgICAgIHRoaXMuX19pbml0aWFsaXplTm9kZShjaGlsZCwgcGFyZW50KTtcblxuICAgICAgICAgIGNoaWxkLm5vZGVWYWx1ZSA9IHRoaXMuX19ldmFsdWF0ZShjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihjaGlsZC5ub2RlVHlwZSA9PSAxICYmICFjaGlsZC5fX2FraWxpKSB7XG4gICAgICAgICAgdGhpcy5fX2ludGVycG9sYXRlQXR0cmlidXRlcyhjaGlsZCk7XG4gICAgICAgICAgaW50ZXJwb2xhdGUoY2hpbGQuY2hpbGROb2RlcywgY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGludGVycG9sYXRlKHRoaXMuZWwuY2hpbGROb2RlcywgdGhpcy5lbCk7XG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IHRydWU7XG5cbiAgICBsZXQgcmVzO1xuXG4gICAgaWYoIXRoaXMuX19yZWNvbXBpbGluZykge1xuICAgICAgcmVzID0gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0cnMub25Db21waWxlZCAmJiB0aGlzLmF0dHJzLm9uQ29tcGlsZWQudHJpZ2dlcigpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBpbGVkKCk7XG4gICAgICB9KTtcblxuICAgICAgaWYodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkge1xuICAgICAgICBwID0gcmVxdWVzdC5nZXQodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLl9fY29udGVudDtcbiAgICAgICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCByZXMuZGF0YSk7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX19jb250ZW50O1xuXG4gICAgICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uUmVjb21waWxlZCAmJiB0aGlzLmF0dHJzLm9uUmVjb21waWxlZC50cmlnZ2VyKCk7XG4gICAgICAgIHRoaXMucmVjb21waWxlZCgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fX2lzQ29tcGlsZWQgPSB0cnVlO1xuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IG51bGw7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IG51bGw7XG5cbiAgICByZXR1cm4gcC50aGVuKCgpID0+IHtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZSB0aGUgY29tcG9uZW50XG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBfX3Jlc29sdmUoKSB7XG4gICAgaWYodGhpcy5fX3JlY29tcGlsaW5nKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5hdHRycy5vblJlc29sdmVkICYmIHRoaXMuYXR0cnMub25SZXNvbHZlZC50cmlnZ2VyKCk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnJlc29sdmVkKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnQgb2YgdGhlIHtAc2VlIENvbXBvbmVudCNfX2NvbXBpbGV9IG1ldGhvZFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemUoKSB7XG4gICAgbGV0IHBhcmVudCA9IEFraWxpLmdldEFraWxpUGFyZW50cyh0aGlzLmVsLCBmYWxzZSk7XG4gICAgbGV0IFNjb3BlID0gdGhpcy5jb25zdHJ1Y3Rvci5zY29wZSB8fCBBa2lsaS5TY29wZTtcbiAgICBsZXQgc2NvcGU7XG4gICAgbGV0IGlzUm9vdCA9IEFraWxpLl9fcm9vdCA9PT0gdGhpcy5lbDtcblxuICAgIGlmKHBhcmVudCkge1xuICAgICAgc2NvcGUgPSBuZXcgU2NvcGUodGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3Njb3BlJykgfHwgQWtpbGkuY3JlYXRlU2NvcGVOYW1lKCksIHRoaXMuZWwsIHRoaXMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNjb3BlID0gbmV3IFNjb3BlKGlzUm9vdD8gJ3Jvb3QnOiBBa2lsaS5jcmVhdGVTY29wZU5hbWUoKSwgdGhpcy5lbCwgdGhpcyk7XG4gICAgICBpc1Jvb3QgJiYgKEFraWxpLnJvb3QgPSB0aGlzKTtcbiAgICB9XG5cbiAgICBsZXQgX19zY29wZSA9IHNjb3BlO1xuICAgIGxldCBfc2NvcGUgPSBPYmplY3QuYXNzaWduKHNjb3BlLCB0aGlzLnNjb3BlKTtcbiAgICBsZXQgbmVzdGVkV2F0Y2hpbmcgPSBBa2lsaS5vcHRpb25zLm5lc3RlZFdhdGNoaW5nO1xuICAgIGxldCBjb250cm9sQXR0cmlidXRlcyA9IHRoaXMuY29uc3RydWN0b3IuY29udHJvbEF0dHJpYnV0ZXM7XG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuY29uc3RydWN0b3IuZXZlbnRzO1xuXG4gICAgaWYodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZSkge1xuICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgdGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgaWYodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkge1xuICAgICAgdGhpcy5fX2NvbnRlbnQgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gICAgaWYodGhpcy5jb25zdHJ1Y3Rvci5uZXN0ZWRXYXRjaGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXN0ZWRXYXRjaGluZyA9IHRoaXMuY29uc3RydWN0b3IubmVzdGVkV2F0Y2hpbmc7XG4gICAgfVxuICAgIGVsc2UgaWYoU2NvcGUubmVzdGVkV2F0Y2hpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbmVzdGVkV2F0Y2hpbmcgPSBTY29wZS5uZXN0ZWRXYXRjaGluZztcbiAgICB9XG5cbiAgICB0aGlzLl9fc2NvcGUgPSBfX3Njb3BlO1xuICAgIHRoaXMuX19ldmVudHMgPSBldmVudHM7XG4gICAgdGhpcy5fX25lc3RlZFdhdGNoaW5nID0gbmVzdGVkV2F0Y2hpbmc7XG4gICAgdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzID0gY29udHJvbEF0dHJpYnV0ZXM7XG5cbiAgICBBa2lsaS5hZGRTY29wZShzY29wZSk7XG5cbiAgICBpZihuZXN0ZWRXYXRjaGluZykge1xuICAgICAgc2NvcGUgPSB0aGlzLl9fbmVzdGVkT2JzZXJ2ZShfc2NvcGUsIFtdKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzY29wZSA9IHRoaXMuX19vYnNlcnZlKF9zY29wZSwgW10pO1xuICAgIH1cblxuICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYm9vbGVhbiBhdHRyaWJ1dGVzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKSB7XG4gICAgdGhpcy5ib29sZWFuQXR0cmlidXRlcyA9IFtdLmNvbmNhdChBa2lsaS5odG1sQm9vbGVhbkF0dHJpYnV0ZXMsIHRoaXMuY29uc3RydWN0b3IuYm9vbGVhbkF0dHJpYnV0ZXMpO1xuXG4gICAgbGV0IHNldEF0dHIgPSAoZWwpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBhdHRycyA9IGVsLmF0dHJpYnV0ZXMsIGwgPSBhdHRycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IG5vZGUgPSBhdHRyc1tpXTtcblxuICAgICAgICBpZih0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzLmluZGV4T2Yobm9kZS5ub2RlTmFtZSkgIT0gLTEpIHtcbiAgICAgICAgICBpZihlbC5oYXNBdHRyaWJ1dGUoYGJvb2xlYW4tJHtub2RlLm5vZGVOYW1lfWApKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYGJvb2xlYW4tJHtub2RlLm5vZGVOYW1lfWAsIGVsLmdldEF0dHJpYnV0ZShub2RlLm5vZGVOYW1lKSB8fCBub2RlLm5vZGVOYW1lKTtcbiAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGVsLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBlbC5jaGlsZHJlbltpXTtcblxuICAgICAgICBpZighY2hpbGQuX19ha2lsaSkge1xuICAgICAgICAgIHNldEF0dHIoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNldEF0dHIodGhpcy5lbCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGV2ZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldEV2ZW50cygpIHtcbiAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5fX2V2ZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBldiA9IHRoaXMuX19ldmVudHNbaV07XG5cbiAgICAgICEvXm9uLS9pLnRlc3QoZXYpICYmIChldiA9ICdvbi0nICsgZXYpO1xuXG4gICAgICBpZighdGhpcy5lbC5oYXNBdHRyaWJ1dGUoZXYpKSB7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGV2LCAnJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjb21wb25lbnQgcGFyZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldFBhcmVudHMoKSB7XG4gICAgbGV0IHBhcmVudHMgPSBBa2lsaS5nZXRBa2lsaVBhcmVudHModGhpcy5lbCk7XG5cbiAgICBpZighcGFyZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbmV3UGFyZW50ID0gdGhpcy5fX3BhcmVudCAhPT0gcGFyZW50c1swXTtcbiAgICBsZXQgZXZhbHVhdGVQYXJlbnQgPSBudWxsO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHBhcmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcGFyZW50ID0gcGFyZW50c1tpXTtcblxuICAgICAgaWYoIXBhcmVudC5fX2FraWxpLmNvbnN0cnVjdG9yLnRyYW5zcGFyZW50KSB7XG4gICAgICAgIGV2YWx1YXRlUGFyZW50ID0gcGFyZW50O1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX19jb21waWxpbmcubmV3UGFyZW50ID0gbmV3UGFyZW50O1xuICAgIG5ld1BhcmVudCAmJiB0aGlzLl9fZGV0YWNoKCk7XG5cbiAgICBpZih0aGlzLmNvbnN0cnVjdG9yLnRyYW5zcGFyZW50KSB7XG4gICAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudCA9IGV2YWx1YXRlUGFyZW50Ll9fYWtpbGk7XG4gICAgfVxuXG4gICAgdGhpcy5fX2V2YWx1YXRlUGFyZW50ID0gZXZhbHVhdGVQYXJlbnQ7XG4gICAgdGhpcy5fX3BhcmVudCA9IHBhcmVudHNbMF07XG4gICAgdGhpcy5fX3BhcmVudHMgPSBwYXJlbnRzO1xuICAgIHRoaXMuc2NvcGUuX19wYXJlbnQgPSB0aGlzLl9fZXZhbHVhdGVQYXJlbnQuX19ha2lsaS5zY29wZTtcbiAgICAhdGhpcy5fX3JlY29tcGlsaW5nICYmIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2FkZENoaWxkKHRoaXMuZWwpO1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLnNjb3BlLCB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19zY29wZSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGNoaWxkIGVsZW1lbnQgdG8gdGhlIGxpc3RcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hZGRDaGlsZChlbCkge1xuICAgIHRoaXMuX19jaGlsZHJlbi5wdXNoKGVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGxpY2UgY2hpbGQgZnJvbSB0aGUgbGlzdFxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NwbGljZUNoaWxkKGVsKSB7XG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuX19jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuX19jaGlsZHJlbltpXTtcblxuICAgICAgaWYoY2hpbGQgPT09IGVsKSB7XG4gICAgICAgIHRoaXMuX19jaGlsZHJlbi5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGktLTtcbiAgICAgICAgbC0tO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBZb3UgY2FuIGNoYW5nZSBleHByZXNzaW9uIGJlZm9yZSBwYXJzaW5nIGhlcmVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4cHJlc3Npb25cbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0UGFyc2VkRXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgbm9kZSBoYXMgYW55IHByb3BlcnR5IGNoYW5nZXMgb3Igbm90XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jaGVja0V2YWx1YXRpb24obm9kZSkge1xuICAgIGlmICghT2JqZWN0LmtleXMobm9kZS5fX3Byb3BlcnRpZXMpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgayBpbiBub2RlLl9fcHJvcGVydGllcykge1xuICAgICAgaWYoIW5vZGUuX19wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgcHJvcCA9IG5vZGUuX19wcm9wZXJ0aWVzW2tdO1xuICAgICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMocHJvcC5rZXlzLCBwcm9wLmNvbXBvbmVudC5fX3Njb3BlKTtcblxuICAgICAgaWYoIXV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlKHZhbHVlLCBwcm9wLnZhbHVlLCBwcm9wLmNvcHksIHV0aWxzLmNvcHkodmFsdWUpKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogIENoZWNrIG5vZGUgaGFzIGNoYW5nZWQgb24gdGhlIGNlcnRhaW4ga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NoZWNrTm9kZVByb3BlcnR5Q2hhbmdpbmcobm9kZSwga2V5cywgdmFsdWUpIHtcbiAgICBsZXQgcHJvcCA9IHRoaXMuX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cyk7XG5cbiAgICBpZighcHJvcCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuICF1dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSh2YWx1ZSwgcHJvcC52YWx1ZSwgcHJvcC5jb3B5LCB1dGlscy5jb3B5KHZhbHVlKSk7XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgbm9kZSBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZShub2RlKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGxldCBhdHRyaWJ1dGVWYWx1ZTtcbiAgICBsZXQgZXhwcmVzc2lvbjtcblxuICAgIGlmKG5vZGUuX19jb21wb25lbnQucGFyZW50cygoY29tKSA9PiBjb20uX19wcmV2ZW50KS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBub2RlLl9fZXhwcmVzc2lvbjtcbiAgICB9XG5cbiAgICBpZighKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cikgJiYgbm9kZS5fX2NvbXBvbmVudC5fX3ByZXZlbnQpIHtcbiAgICAgIHJldHVybiBub2RlLl9fZXhwcmVzc2lvbjtcbiAgICB9XG5cbiAgICBsZXQgcmVzID0gbm9kZS5fX2V4cHJlc3Npb24ucmVwbGFjZShldmFsdWF0aW9uUmVnZXhHbG9iYWwsIChtLCBkKSA9PiB7XG4gICAgICBjb3VudGVyKys7XG5cbiAgICAgIGxldCBldmFsdWF0ZTtcbiAgICAgIGxldCBldmFsdWF0aW9uO1xuICAgICAgbGV0IGV4aXN0aW5nQmluZGluZ3MgPSB7fTtcbiAgICAgIGxldCBwYXJzZVZhbHVlID0gbm9kZS5fX2NvbXBvbmVudC5fX2dldFBhcnNlZEV4cHJlc3Npb24oZCk7XG5cbiAgICAgIEFraWxpLl9fZXZhbHVhdGlvbiA9IHsgbm9kZTogbm9kZSwgbGlzdDogW119O1xuXG4gICAgICB0cnkge1xuICAgICAgICBldmFsdWF0ZSA9IHRoaXMuY29uc3RydWN0b3IucGFyc2UodGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQuc2NvcGUsIHBhcnNlVmFsdWUpO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG5cbiAgICAgIGV2YWx1YXRpb24gPSBBa2lsaS5fX2V2YWx1YXRpb24/IEFraWxpLl9fZXZhbHVhdGlvbi5saXN0OiBbXTtcbiAgICAgIEFraWxpLl9fZXZhbHVhdGlvbi5saXN0ID0gbnVsbDtcbiAgICAgIEFraWxpLl9fZXZhbHVhdGlvbiA9IG51bGw7XG5cbiAgICAgIGZvcihsZXQgaSA9IGV2YWx1YXRpb24ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgbGV0IGRhdGEgPSBldmFsdWF0aW9uW2ldO1xuICAgICAgICBsZXQgaGFzaCA9IGAke2RhdGEuY29tcG9uZW50Ll9fc2NvcGUuX19uYW1lfS4ke2RhdGEua2V5c1N0cmluZ31gO1xuXG4gICAgICAgIGlmKGRhdGEubm90QmluZGluZykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZXhpc3RpbmdCaW5kaW5nc1toYXNoXSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBhcmVudFZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoZGF0YS5wYXJlbnRzLCBkYXRhLmNvbXBvbmVudC5fX3Njb3BlKTtcbiAgICAgICAgbGV0IGV2YWxDb21wb25lbnQgPSBub2RlLl9fYXR0cmlidXRlT2YgfHwgbm9kZS5fX2NvbXBvbmVudDtcblxuICAgICAgICBpZih1dGlscy5pc1Njb3BlUHJveHkocGFyZW50VmFsdWUpICYmIGRhdGEuY29tcG9uZW50ICE9PSBldmFsQ29tcG9uZW50Ll9fZXZhbHVhdGlvbkNvbXBvbmVudCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGJpbmQgPSBkYXRhLmNvbXBvbmVudC5fX2dldEJvdW5kTm9kZShkYXRhLmtleXMsIG5vZGUpO1xuICAgICAgICBsZXQgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhkYXRhLmtleXMsIGRhdGEuY29tcG9uZW50Ll9fc2NvcGUpO1xuXG4gICAgICAgIGlmKCFiaW5kKSB7XG4gICAgICAgICAgZGF0YS5jb21wb25lbnQuX19iaW5kKGRhdGEua2V5cywgeyBub2RlOiBub2RlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YS5jb21wb25lbnQuX19zZXROb2RlUHJvcGVydHkobm9kZSwgZGF0YS5rZXlzLCB2YWx1ZSk7XG4gICAgICAgIGV4aXN0aW5nQmluZGluZ3NbaGFzaF0gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBleGlzdGluZ0JpbmRpbmdzID0gbnVsbDtcbiAgICAgIGV2YWx1YXRpb24gPSBudWxsO1xuXG4gICAgICBpZihub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpIHtcbiAgICAgICAgZXhwcmVzc2lvbiA9IG07XG4gICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gZXZhbHVhdGU7XG5cbiAgICAgICAgcmV0dXJuIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZShldmFsdWF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmKHR5cGVvZiBldmFsdWF0ZSA9PSAnb2JqZWN0Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShldmFsdWF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZSkge1xuICAgICAgICAgIHJldHVybiBldmFsdWF0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZXZhbHVhdGU7XG4gICAgfSk7XG5cbiAgICBpZihub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpIHtcbiAgICAgIGxldCB2YWx1ZSA9IHJlcztcbiAgICAgIGxldCBpc0Jvb2xlYW5BdHRyaWJ1dGUgPSBmYWxzZTtcblxuICAgICAgaWYoY291bnRlcikge1xuICAgICAgICBub2RlLl9faGFzQmluZGluZ3MgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZihjb3VudGVyID09IDEgJiYgZXhwcmVzc2lvbiAmJiBub2RlLl9fZXhwcmVzc2lvbiA9PSBleHByZXNzaW9uKSB7XG4gICAgICAgIHZhbHVlID0gYXR0cmlidXRlVmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGxldCBjbGVhckF0dHJpYnV0ZSA9IG5vZGUubm9kZU5hbWUucmVwbGFjZSgvXmJvb2xlYW4tKC4rKS9pLCAnJDEnKTtcblxuICAgICAgaWYoY2xlYXJBdHRyaWJ1dGUgIT0gbm9kZS5ub2RlTmFtZSkge1xuICAgICAgICBpc0Jvb2xlYW5BdHRyaWJ1dGUgPSB0cnVlO1xuICAgICAgICB2YWx1ZSA9ICEhdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmKG5vZGUuX19hdHRyaWJ1dGVPbikge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gbm9kZS5fX2F0dHJpYnV0ZU9uO1xuXG4gICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSB0cnVlO1xuICAgICAgICBjb21wb25lbnQuYXR0cnNbdXRpbHMudG9DYW1lbENhc2UoY2xlYXJBdHRyaWJ1dGUpXSA9IHZhbHVlO1xuICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudC5fX2lzQ29tcGlsZWQpIHtcbiAgICAgICAgICBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5hdHRycy5vbkNoYW5nZWQgJiYgY29tcG9uZW50LmF0dHJzLm9uQ2hhbmdlZC50cmlnZ2VyKHsga2V5OiBjbGVhckF0dHJpYnV0ZSwgdmFsdWU6IHZhbHVlfSk7XG4gICAgICAgICAgICBjb21wb25lbnQuY2hhbmdlZChjbGVhckF0dHJpYnV0ZSwgdmFsdWUpO1xuXG4gICAgICAgICAgICBsZXQga2V5ID0gdXRpbHMudG9DYW1lbENhc2UoY2xlYXJBdHRyaWJ1dGUpO1xuICAgICAgICAgICAgbGV0IGNhbWVsS2V5ID0ga2V5WzBdLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSk7XG4gICAgICAgICAgICBsZXQgZm5OYW1lID0gJ2NoYW5nZWQnICsgY2FtZWxLZXk7XG4gICAgICAgICAgICBsZXQgZXZGbk5hbWUgPSAnb25DaGFuZ2VkJyArIGNhbWVsS2V5O1xuXG4gICAgICAgICAgICBjb21wb25lbnQuYXR0cnNbZXZGbk5hbWVdICYmIGNvbXBvbmVudC5hdHRyc1tldkZuTmFtZV0udHJpZ2dlcih2YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50W2ZuTmFtZV0gPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBjb21wb25lbnRbZm5OYW1lXSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoaXNCb29sZWFuQXR0cmlidXRlKSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gbm9kZS5fX2VsZW1lbnQ7XG4gICAgICAgIGxldCBhdHRyID0gdXRpbHMudG9DYW1lbENhc2UoY2xlYXJBdHRyaWJ1dGUpO1xuXG4gICAgICAgIHZhbHVlPyBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCAndHJ1ZScpOiBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgLyoqXG4gICAqIE5lc3RlZCBldmFsdWF0aW9uIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFt3aXRob3V0UGFyZW50cz1mYWxzZV0gLSBpZiB0cnVlIGV2YWx1YXRpb24gd2lsbCBiZSBvbmx5IGZvciB0aGUgY3VycmVudCBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVOZXN0ZWQoa2V5cywgd2l0aG91dFBhcmVudHMgPSBmYWxzZSkge1xuICAgIGxldCBzY29wZSA9IHRoaXMuX19zY29wZTtcbiAgICBsZXQgcHJvcHMgPSBbXTtcblxuICAgIGlmKCF3aXRob3V0UGFyZW50cykge1xuICAgICAgbGV0IGxhc3RQcm9wcyA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICBsZXQgdmFsdWU7XG5cbiAgICAgICAgbGFzdFByb3BzID0gWy4uLmxhc3RQcm9wcywga2V5XTtcbiAgICAgICAgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhsYXN0UHJvcHMsIHNjb3BlKTtcbiAgICAgICAgcHJvcHMucHVzaCh7IGtleXM6IGxhc3RQcm9wcywgdmFsdWU6IHZhbHVlfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcHJvcHMucHVzaCh7IGtleXM6IGtleXMsIHZhbHVlOiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCBzY29wZSl9KTtcbiAgICB9XG5cbiAgICBsZXQgcHJvcHNMZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgICBsZXQgZWxFdmFsdWF0ZSA9IChlbGVtZW50KSA9PiB7XG4gICAgICBsZXQgY29tcG9uZW50ID0gZWxlbWVudC5fX2FraWxpO1xuXG4gICAgICBmb3IgKGxldCBtID0gMDsgbSA8IHByb3BzTGVuZ3RoOyBtKyspIHtcbiAgICAgICAgbGV0IHByb3AgPSBwcm9wc1ttXTtcbiAgICAgICAgbGV0IGRhdGEgPSBjb21wb25lbnQuX19nZXRCaW5kKHByb3Aua2V5cyk7XG5cbiAgICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhLl9fZGF0YSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgayA9IDAsIGMgPSBkYXRhLl9fZGF0YS5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgICAgICBsZXQgYmluZCA9IGRhdGEuX19kYXRhW2tdO1xuXG4gICAgICAgICAgaWYoY29tcG9uZW50Ll9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2luZyhiaW5kLm5vZGUsIHByb3Aua2V5cywgcHJvcC52YWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVQcm94eSA9IHRydWU7XG4gICAgICAgICAgICBjb21wb25lbnQuX19ldmFsdWF0ZU5vZGUoYmluZC5ub2RlKTtcblxuICAgICAgICAgICAgZm9yKGxldCBfayBpbiBiaW5kLm5vZGUuX19wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgIGlmKCFiaW5kLm5vZGUuX19wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KF9rKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbGV0IF9wcm9wID0gYmluZC5ub2RlLl9fcHJvcGVydGllc1tfa107XG4gICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKF9wcm9wLmtleXMsIF9wcm9wLmNvbXBvbmVudC5fX3Njb3BlKTtcblxuICAgICAgICAgICAgICBfcHJvcC5jb21wb25lbnQuX19zZXROb2RlUHJvcGVydHkoYmluZC5ub2RlLCBfcHJvcC5rZXlzLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVQcm94eSA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfTtcblxuICAgIGxldCBldmFsdWF0ZSA9IChlbGVtZW50cykgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IGVsRXZhbHVhdGUoZWxlbWVudHNbaV0pO1xuXG4gICAgICAgIGV2YWx1YXRlKGNvbXBvbmVudC5fX2NoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZWxFdmFsdWF0ZSh0aGlzLmVsKTtcbiAgICBldmFsdWF0ZSh0aGlzLl9fY2hpbGRyZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIHZhbHVlIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVsZXRlZD1mYWxzZV0gLSB0cnVlIGlmIHZhbHVlIGlzIGRlbGV0aW5nXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVCeUtleXMoa2V5cywgdmFsdWUsIGlzRGVsZXRlZCA9IGZhbHNlKSB7XG4gICAgbGV0IGRhdGEgPSB0aGlzLl9fZ2V0QmluZChrZXlzKTtcblxuICAgIGxldCB1bmJpbmQgPSAob2JqLCBwYXJlbnRzKSA9PiB7XG4gICAgICBmb3IobGV0IGsgaW4gb2JqKSB7XG4gICAgICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkoaykgfHwgayA9PSAnX19kYXRhJykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IF9rZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrXSk7XG4gICAgICAgIGxldCBfX2tleXMgPSBfa2V5cy5zbGljZSgpO1xuICAgICAgICBsZXQgX2lzRGVsZXRlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgdmFsID0gb2JqW2tdO1xuICAgICAgICBsZXQgaGFzS2V5O1xuXG4gICAgICAgIF9fa2V5cy5zaGlmdCgpO1xuICAgICAgICBoYXNLZXkgPSB1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhfX2tleXMsIHZhbHVlKTtcblxuICAgICAgICBpZih2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgJiYgIWhhc0tleSkge1xuICAgICAgICAgIF9pc0RlbGV0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodmFsICYmIHR5cGVvZiB2YWwgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB1bmJpbmQodmFsLCBfa2V5cyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9fZXZhbHVhdGVOZXN0ZWQoX2tleXMsIHRydWUpO1xuXG4gICAgICAgIGlmKHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCAhaGFzS2V5KSB7XG4gICAgICAgICAgdGhpcy5fX3VuYmluZChfa2V5cyk7XG4gICAgICAgICAgX2lzRGVsZXRlZCAmJiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhfX2tleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBkYXRhICYmIHVuYmluZChkYXRhLCBbXS5jb25jYXQoa2V5cykpO1xuICAgIHRoaXMuX19ldmFsdWF0ZU5lc3RlZChrZXlzKTtcblxuICAgIGlmKGlzRGVsZXRlZCkge1xuICAgICAgdGhpcy5fX3VuYmluZChrZXlzKTtcbiAgICAgIGlzRGVsZXRlZCAmJiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSBldmVudCBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVFdmVudChub2RlLCBlbCwgZSkge1xuICAgIGxldCBleHByZXNzaW9uID0gZXZhbHVhdGlvblJlZ2V4LmV4ZWMobm9kZS5fX2V4cHJlc3Npb24pO1xuICAgIGxldCBldmFsdWF0ZTtcblxuICAgIGlmKCFleHByZXNzaW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fX2V2YWx1YXRpbmdFdmVudCA9IHtcbiAgICAgIGVsOiBlbCxcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIGV2ZW50OiBlLFxuICAgICAgbm9kZTogbm9kZVxuICAgIH07XG5cbiAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0gbnVsbDtcbiAgICBldmFsdWF0ZSA9IHRoaXMuY29uc3RydWN0b3IucGFyc2UodGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQuc2NvcGUsIGV4cHJlc3Npb25bMV0sIGUpO1xuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSBudWxsO1xuXG4gICAgcmV0dXJuIGV2YWx1YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGNoYW5nZXMgYW5kIGV2YWx1YXRlIHRoZSBwYXNzZWQgbm9kZVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZU5vZGUobm9kZSkge1xuICAgIGlmKHRoaXMuX19jaGVja0V2YWx1YXRpb24obm9kZSkpIHtcbiAgICAgIG5vZGVbKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cik/ICd2YWx1ZSc6ICdub2RlVmFsdWUnXSA9IHRoaXMuX19ldmFsdWF0ZShub2RlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXR0cmlidXRlIG5vZGUgaW5pdGlhbGl6aW5nXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gYXR0cmlidXRlT2YgLSBpZiBub2RlIGlzIGxpbmtlZCB3aXRoIHBhcmVudCBzY29wZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemVBdHRyaWJ1dGUobm9kZSwgZWwsIGF0dHJpYnV0ZU9mKSB7XG4gICAgaWYoc3lzdGVtQXR0cmlidXRlcy5pbmRleE9mKG5vZGUubm9kZU5hbWUpICE9IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fX2luaXRpYWxpemVOb2RlKG5vZGUsIGVsKTtcblxuICAgIGxldCBldmVudE5hbWUgPSBub2RlLm5vZGVOYW1lLnJlcGxhY2UoL15vbi0oLispL2ksICckMScpO1xuICAgIGxldCBub2RlTmFtZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKG5vZGUubm9kZU5hbWUpO1xuICAgIGxldCBjb21wb25lbnQgPSBhdHRyaWJ1dGVPZj8gYXR0cmlidXRlT2Y6IHRoaXM7XG5cbiAgICBpZihldmVudE5hbWUgIT0gbm9kZS5ub2RlTmFtZSkge1xuICAgICAgaWYobm9kZS5fX2V2ZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGVtaXR0ZXIgPSBuZXcgQWtpbGkuRXZlbnRFbWl0dGVyKGV2ZW50TmFtZSwgZWwsIGNvbXBvbmVudCk7XG5cbiAgICAgIGlmKG5vZGUuX19leHByZXNzaW9uKSB7XG4gICAgICAgIGVtaXR0ZXIuYmluZCgoZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBjb21wb25lbnQuX19ldmFsdWF0ZUV2ZW50KG5vZGUsIGVsLCBlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIG5vZGUuX19ldmVudCA9IGVtaXR0ZXI7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKGVtaXR0ZXIpKTtcblxuICAgICAgaWYoYXR0cmlidXRlT2YpIHtcbiAgICAgICAgdGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLmF0dHJzW25vZGVOYW1lXSA9IGVtaXR0ZXI7XG4gICAgICAgIHRoaXMuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZihhdHRyaWJ1dGVPZikge1xuICAgICAgbm9kZS5fX2F0dHJpYnV0ZU9uID0gdGhpcztcbiAgICAgIG5vZGUuX19hdHRyaWJ1dGVPZiA9IGNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBlbC5zZXRBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSwgY29tcG9uZW50Ll9fZXZhbHVhdGUobm9kZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIG5vZGVcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemVOb2RlKG5vZGUsIGVsKSB7XG4gICAgaWYobm9kZS5fX2luaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbm9kZS5fX2V4cHJlc3Npb24gPSBub2RlWyhub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpPyAndmFsdWUnOiAnbm9kZVZhbHVlJ107XG4gICAgbm9kZS5fX3Byb3BlcnRpZXMgPSB7fTtcbiAgICBub2RlLl9fYXR0cmlidXRlT2YgPSBudWxsO1xuICAgIG5vZGUuX19hdHRyaWJ1dGVPbiA9IG51bGw7XG4gICAgbm9kZS5fX2V2ZW50ID0gbnVsbDtcbiAgICBub2RlLl9faGFzQmluZGluZ3MgPSBmYWxzZTtcbiAgICBub2RlLl9faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIG5vZGUuX19jb21wb25lbnQgPSB0aGlzO1xuICAgIG5vZGUuX19lbGVtZW50ID0gZWw7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcnBvbGF0ZSBhdHRyaWJ1dGVzIG9mIHRoZSBlbGVtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBbYXR0cmlidXRlT2Y9bnVsbF0gLSBpZiBub2RlIGlzIGxpbmtlZCB3aXRoIHBhcmVudCBzY29wZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2ludGVycG9sYXRlQXR0cmlidXRlcyhlbCwgYXR0cmlidXRlT2YgPSBudWxsKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGF0dHJzID0gZWwuYXR0cmlidXRlcywgbCA9IGF0dHJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdGhpcy5fX2luaXRpYWxpemVBdHRyaWJ1dGUoYXR0cnNbaV0sIGVsLCBhdHRyaWJ1dGVPZik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZSBhdHRyaWJ1dGVzIGFzIHByb3h5XG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVmaW5lQXR0cmlidXRlcygpIHtcbiAgICBsZXQgY2hhbmdlQXR0cmlidXRlID0gKGtleSwgdmFsdWUsIGlzRGVsZXRlZCA9IGZhbHNlKSA9PiB7XG4gICAgICBpZih0aGlzLl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBub2RlID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGVOb2RlKGtleSk7XG5cbiAgICAgIGlmKG5vZGUpIHtcbiAgICAgICAgaWYobm9kZS5fX2V2ZW50KSB7XG4gICAgICAgICAgbm9kZS5fX2V2ZW50LnVuYmluZCgpO1xuICAgICAgICAgIG5vZGUuX19ldmVudCA9IG51bGw7XG4gICAgICAgICAgbm9kZS5fX2V4cHJlc3Npb24gPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKG5vZGUuX19oYXNCaW5kaW5ncykge1xuICAgICAgICAgIHRoaXMuX19wYXJlbnQgJiYgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5fX3VuYmluZEJ5Tm9kZXMoW25vZGVdKTtcbiAgICAgICAgICBub2RlLl9faGFzQmluZGluZ3MgPSBmYWxzZTtcbiAgICAgICAgICBub2RlLl9fZXhwcmVzc2lvbiA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKGlzRGVsZXRlZCkge1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZihub2RlKSB7XG4gICAgICAgIG5vZGUudmFsdWUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5hdHRycyA9IG5ldyBQcm94eSh0aGlzLl9fYXR0cnMsIHtcbiAgICAgIGdldDogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGlmKGtleSA9PSAnX19pc1Byb3h5Jykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgfSxcbiAgICAgIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgYXR0cktleSA9IHV0aWxzLnRvRGFzaENhc2Uoa2V5KTtcblxuICAgICAgICBpZih0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzLmluZGV4T2YoYXR0cktleSkgIT0gLTEpIHtcbiAgICAgICAgICBhdHRyS2V5ID0gYGJvb2xlYW4tJHthdHRyS2V5fWA7XG5cbiAgICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICBjaGFuZ2VBdHRyaWJ1dGUoYXR0cktleSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKHZhbHVlKSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgICAgZGVsZXRlUHJvcGVydHk6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IGF0dHJLZXkgPSB1dGlscy50b0Rhc2hDYXNlKGtleSk7XG5cbiAgICAgICAgY2hhbmdlQXR0cmlidXRlKGF0dHJLZXksIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZSh2YWx1ZSksIHRydWUpO1xuICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHByb3h5IHRvIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHBhcmVudHNcbiAgICogQHJldHVybnMge1Byb3h5fVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX29ic2VydmUob2JqLCBwYXJlbnRzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm94eShvYmosIHtcbiAgICAgIGdldDogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGlmIChrZXkgPT0gXCJfX2lzUHJveHlcIikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PSBcIl9fdGFyZ2V0XCIpIHtcbiAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PSBcIl9fY29tcG9uZW50XCIpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX2tleXNcIikge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5fX2Rpc2FibGVQcm94eSkge1xuICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodHlwZW9mIHRhcmdldFtrZXldID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBsZXQgcmVhbFRhcmdldCAgPSB1dGlscy5nZXRPd25Qcm9wZXJ0eVRhcmdldCh0YXJnZXQsIGtleSk7XG5cbiAgICAgICAgICBpZighdXRpbHMuaXNQbGFpbk9iamVjdChyZWFsVGFyZ2V0KSkge1xuICAgICAgICAgICAgcmVhbFRhcmdldFtrZXldID0gQWtpbGkuaXNvbGF0ZUZ1bmN0aW9uKHJlYWxUYXJnZXRba2V5XSwgcmVhbFRhcmdldC5fX2NvbXBvbmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFraWxpLl9fZXZhbHVhdGlvbikge1xuICAgICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrZXldKTtcbiAgICAgICAgICBsZXQgbm90QmluZGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYoIShrZXkgaW4gdGFyZ2V0KSkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYoIXV0aWxzLmdldEVudW1lcmFibGVQcm9wZXJ0eVRhcmdldCh0YXJnZXQsIGtleSkpIHtcbiAgICAgICAgICAgIG5vdEJpbmRpbmcgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX19iaW5kTm9kZShBa2lsaS5fX2V2YWx1YXRpb24ubGlzdCwga2V5cywgcGFyZW50cywgdGFyZ2V0W2tleV0sIG5vdEJpbmRpbmcpO1xuXG4gICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgfSxcbiAgICAgIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZih0aGlzLl9fZGlzYWJsZVByb3h5KSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5fX2lzU3lzdGVtS2V5KGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG5cbiAgICAgICAgaWYodGhpcy5fX25lc3RlZFdhdGNoaW5nKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB0aGlzLl9fbmVzdGVkT2JzZXJ2ZSh2YWx1ZSwga2V5cyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKEFraWxpLl9faXNvbGF0aW9uKSB7XG4gICAgICAgICAgdGhpcy5fX2NyZWF0ZUlzb2xhdGlvbk9iamVjdChwYXJlbnRzLCBrZXksIGZhbHNlKTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5fX2lzTW91bnRlZCkge1xuICAgICAgICAgIHRoaXMuX19ldmFsdWF0ZUJ5S2V5cyhrZXlzLCB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBkZWxldGVQcm9wZXJ0eTogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrZXldKTtcblxuICAgICAgICBpZih0aGlzLl9fZGlzYWJsZVByb3h5KSB7XG4gICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLl9faXNTeXN0ZW1LZXkoa2V5KSkge1xuICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoQWtpbGkuX19pc29sYXRpb24pIHtcbiAgICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgICAgICAgdGhpcy5fX2NyZWF0ZUlzb2xhdGlvbk9iamVjdChwYXJlbnRzLCBrZXksIHRydWUpO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgICAgIHRoaXMuX19ldmFsdWF0ZUJ5S2V5cyhrZXlzLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGtleSBpcyBzeXN0ZW1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIF9faXNTeXN0ZW1LZXkgKGtleSkge1xuICAgIGlmKGtleSA9PSAnX18nIHx8IChrZXlbMF0gPT0gJ18nICYmIGtleVsxXSA9PSAnXycpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZihbJ2NvbnN0cnVjdG9yJ10uaW5kZXhPZihrZXkpICE9IC0xKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogTmVzdGVkIG9ic2VydmluZyB0aGUgdmFsdWVcbiAgICpcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBbc3RhcnRLZXlzXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX25lc3RlZE9ic2VydmUgKHZhbHVlLCBzdGFydEtleXMpIHtcbiAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0gdHJ1ZTtcblxuICAgIGxldCBvYnNlcnZlID0gKHZhbHVlLCBwYXJlbnRzKSA9PiB7XG4gICAgICBpZih0eXBlb2YgdmFsdWUgIT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZighdXRpbHMuaXNQbGFpbk9iamVjdCh2YWx1ZSkgJiYgIXV0aWxzLmlzU2NvcGVQcm94eSh2YWx1ZSkgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIEFraWxpLlNjb3BlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGxldCB0YXJnZXQgPSB2YWx1ZTtcblxuICAgICAgaWYodmFsdWUuX19pc1Byb3h5KSB7XG4gICAgICAgIHRhcmdldCA9IHZhbHVlLl9fdGFyZ2V0O1xuXG4gICAgICAgIGlmKCF0aGlzLl9fZGlzYWJsZVByb3h5UmVkZWZpbmluZykge1xuICAgICAgICAgIGlmKHZhbHVlLl9fY29tcG9uZW50ICE9PSB0aGlzKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSB1dGlscy5jb3B5KHRhcmdldCwgZmFsc2UpO1xuICAgICAgICAgICAgdmFsdWUgPSB0YXJnZXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYoQWtpbGkuam9pbkJpbmRpbmdLZXlzKHBhcmVudHMpICE9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyh2YWx1ZS5fX2tleXMpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRhcmdldDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yKGxldCBrIGluIHRhcmdldCkge1xuICAgICAgICBpZiAoIXRhcmdldC5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHZhbCA9IHRhcmdldFtrXTtcbiAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tdKTtcblxuICAgICAgICB0YXJnZXRba10gPSBvYnNlcnZlKHZhbCwga2V5cyk7XG4gICAgICB9XG5cbiAgICAgIGlmKCF2YWx1ZS5fX2lzUHJveHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19vYnNlcnZlKHRhcmdldCwgcGFyZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuXG4gICAgbGV0IHJlcyA9IG9ic2VydmUodmFsdWUsIHN0YXJ0S2V5cyB8fCBbXSk7XG5cbiAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0gbnVsbDtcblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGlzb2xhdGlvbiBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVsZXRlZD1mYWxzZV1cbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0IChwYXJlbnRzLCBrZXksIGlzRGVsZXRlZCA9IGZhbHNlKSB7XG4gICAgbGV0IGtleXMgPSBwYXJlbnRzLmxlbmd0aD8gW3BhcmVudHNbMF1dOiBba2V5XTtcbiAgICBsZXQgaXNvbGF0aW9uS2V5ID0gYCR7dGhpcy5fX3Njb3BlLl9fbmFtZX0uJHtBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyl9YDtcblxuICAgIGlmKHBhcmVudHMubGVuZ3RoKSB7XG4gICAgICBpc0RlbGV0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZighQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uS2V5XSkge1xuICAgICAgQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uS2V5XSA9IHtcbiAgICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgICBrZXlzOiBrZXlzXG4gICAgICB9O1xuICAgIH1cblxuICAgIChpc0RlbGV0ZWQgIT09IHVuZGVmaW5lZCkgJiYgKEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV0uaXNEZWxldGVkID0gaXNEZWxldGVkKTtcbiAgICBBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25LZXldLnZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKTtcblxuICAgIHJldHVybiBBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25LZXldO1xuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgdGhlIG5vZGUgdG8gYmluZGluZ1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gYmluZCAtIGJ5IGRlZmF1bHQgaXMgY29tcG9uZW50Ll9fZXZhbHVhdGlvbi5saXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW25vdEJpbmRpbmc9ZmFsc2VdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYmluZE5vZGUoYmluZCwga2V5cywgcGFyZW50cywgdmFsdWUsIG5vdEJpbmRpbmcgPSBmYWxzZSkge1xuICAgIGxldCBwYXJlbnRLZXlzU3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKHBhcmVudHMpO1xuXG4gICAgaWYoYmluZC5sZW5ndGggJiYgIW5vdEJpbmRpbmcpIHtcbiAgICAgIGxldCBsID0gYmluZC5sZW5ndGggLSAxO1xuICAgICAgbGV0IGRhdGEgPSBiaW5kW2xdO1xuXG4gICAgICBpZihkYXRhLmtleXNTdHJpbmcgPT0gcGFyZW50S2V5c1N0cmluZyAmJiBkYXRhLmNvbXBvbmVudCA9PT0gdGhpcykge1xuICAgICAgICBiaW5kLnNwbGljZShsLCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBiaW5kLnB1c2goe1xuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAga2V5c1N0cmluZzogQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpLFxuICAgICAgcGFyZW50czogcGFyZW50cyxcbiAgICAgIGtleXM6IGtleXMsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBub3RCaW5kaW5nOiBub3RCaW5kaW5nXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGJpbmRpbmcgYnkga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRCaW5kKGtleXMpIHtcbiAgICByZXR1cm4gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzKSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBiaW5kaW5nIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldEJvdW5kTm9kZShrZXlzLCBub2RlKSB7XG4gICAgbGV0IGJpbmQgPSAgdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzKTtcblxuICAgIGlmKCFiaW5kIHx8ICFiaW5kLl9fZGF0YSB8fCAhYmluZC5fX2RhdGEubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gYmluZC5fX2RhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgZGF0YSA9IGJpbmQuX19kYXRhW2ldO1xuXG4gICAgICBpZihkYXRhLm5vZGUgPT09IG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogU2V0IG5vZGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXROb2RlUHJvcGVydHkobm9kZSwga2V5cywgdmFsdWUpIHtcbiAgICBsZXQgcHJvcCA9IHRoaXMuX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cyk7XG4gICAgbGV0IGNvcHkgPSB1dGlscy5jb3B5KHZhbHVlKTtcblxuICAgIGlmKHByb3ApIHtcbiAgICAgIGxldCByZXMgPSB1dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSh2YWx1ZSwgcHJvcC52YWx1ZSwgcHJvcC5jb3B5LCBjb3B5KTtcblxuICAgICAgcHJvcC52YWx1ZSA9IHZhbHVlO1xuICAgICAgcHJvcC5jb3B5ID0gY29weTtcblxuICAgICAgcmV0dXJuICFyZXM7XG4gICAgfVxuXG4gICAgbGV0IGhhc2ggPSBgJHt0aGlzLl9fc2NvcGUuX19uYW1lfS4ke0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKX1gO1xuXG4gICAgbm9kZS5fX3Byb3BlcnRpZXNbaGFzaF0gPSB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBjb3B5OiBjb3B5LFxuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAga2V5czoga2V5c1xuICAgIH07XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbm9kZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMpIHtcbiAgICBsZXQgaGFzaCA9IGAke3RoaXMuX19zY29wZS5fX25hbWV9LiR7QWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpfWA7XG5cbiAgICByZXR1cm4gbm9kZS5fX3Byb3BlcnRpZXNbaGFzaF0gfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgbm9kZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RlbGV0ZU5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKSB7XG4gICAgbGV0IGhhc2ggPSBgJHt0aGlzLl9fc2NvcGUuX19uYW1lfS4ke0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKX1gO1xuXG4gICAgZGVsZXRlIG5vZGUuX19wcm9wZXJ0aWVzW2hhc2hdO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgZGF0YSB3aXRoIHRoZSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19iaW5kKGtleXMsIGRhdGEpIHtcbiAgICB1dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MsIChsYXN0LCB2YWx1ZSkgPT4ge1xuICAgICAgbGV0IG9iaiA9IHtfX2RhdGE6IFtdfTtcblxuICAgICAgaWYoIWxhc3QpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlPyB2YWx1ZTogb2JqO1xuICAgICAgfVxuXG4gICAgICBpZih0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgb2JqID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmKCFvYmouX19kYXRhKSB7XG4gICAgICAgIG9iai5fX2RhdGEgPSBbXTtcbiAgICAgIH1cblxuICAgICAgb2JqLl9fZGF0YS5wdXNoKGRhdGEpO1xuXG4gICAgICByZXR1cm4gb2JqO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmJpbmQoa2V5cykge1xuICAgIGxldCBiaW5kID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzKTtcblxuICAgIGlmKCFiaW5kIHx8ICFiaW5kLl9fZGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBiaW5kLl9fZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBub2RlID0gYmluZC5fX2RhdGFbaV0ubm9kZTtcblxuICAgICAgdGhpcy5fX2RlbGV0ZU5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKTtcbiAgICB9XG5cbiAgICB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MsICh2YWx1ZSkgPT4ge1xuICAgICAgaWYoT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdmFsdWUuX19kYXRhID0gW107XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgYnkgbm9kZXNcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlW119IG5vZGVzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5iaW5kQnlOb2Rlcyhub2Rlcykge1xuICAgIGxldCB1bmJpbmQgPSAob2JqKSA9PiB7XG4gICAgICBmb3IobGV0IGsgaW4gb2JqKSB7XG4gICAgICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGsgPT0gJ19fZGF0YScpIHtcbiAgICAgICAgICBsZXQgZGF0YSA9IG9ialtrXSB8fCBbXTtcbiAgICAgICAgICBsZXQgbCA9IGRhdGEubGVuZ3RoO1xuXG4gICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJpbmQgPSBkYXRhW2ldO1xuXG4gICAgICAgICAgICBpZihub2Rlcy5pbmRleE9mKGJpbmQubm9kZSkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgZGF0YS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgbC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmKCFsKSB7XG4gICAgICAgICAgICBkZWxldGUgb2JqW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB1bmJpbmQob2JqW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB1bmJpbmQodGhpcy5fX2JpbmRpbmdzKTtcbiAgICB0aGlzLl9fY2xlYXJFbXB0eUJpbmRpbmdzKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWxsIGVtcHR5IGJpbmRpbmdzXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb2JqXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NsZWFyRW1wdHlCaW5kaW5ncyhvYmopIHtcbiAgICBsZXQgY2xlYXIgPSAob2JqLCBwYXJlbnQsIGtleSkgPT4ge1xuICAgICAgZm9yKGxldCBrIGluIG9iaikge1xuICAgICAgICBpZighb2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmFsID0gb2JqW2tdO1xuXG4gICAgICAgIGlmKGsgPT0gJ19fZGF0YScgJiYgKCF2YWwgfHwgIXZhbC5sZW5ndGgpKSB7XG4gICAgICAgICAgZGVsZXRlIG9ialtrXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGsgIT0gJ19fZGF0YScpIHtcbiAgICAgICAgICBpZighT2JqZWN0LmtleXMob2JqW2tdKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmpba107XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xlYXIob2JqW2tdLCBvYmosIGspO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZighT2JqZWN0LmtleXMob2JqKS5sZW5ndGggJiYgcGFyZW50KSB7XG4gICAgICAgIGRlbGV0ZSBwYXJlbnRba2V5XTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY2xlYXIob2JqIHx8IHRoaXMuX19iaW5kaW5ncyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBjaGlsZCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcmVtb3ZlQ2hpbGRyZW4oKSB7XG4gICAgbGV0IHJlbW92ZSA9IChjaGlsZHJlbikgPT4ge1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIHJlbW92ZShjaGlsZC5fX2FraWxpLl9fY2hpbGRyZW4pO1xuICAgICAgICBjaGlsZC5fX2FraWxpLl9fcmVtb3ZlKCk7XG4gICAgICAgIGktLTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVtb3ZlKHRoaXMuX19jaGlsZHJlbik7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBjb21wb25lbnQgd2l0aG91dCBjaGlsZHJlbiByZW1vdmluZ1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlbW92ZSgpIHtcbiAgICB0aGlzLl9fZGV0YWNoKCk7XG4gICAgdGhpcy5hdHRycy5vblJlbW92ZWQgJiYgdGhpcy5hdHRycy5vblJlbW92ZWQudHJpZ2dlcigpO1xuICAgIHRoaXMucmVtb3ZlZCgpO1xuICAgIEFraWxpLnJlbW92ZVNjb3BlKHRoaXMuX19zY29wZS5fX25hbWUpO1xuICAgIHRoaXMuZWwucmVtb3ZlKCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0YWNoIHRoZSBjb21wb25lbnRcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZXRhY2goKSB7XG4gICAgaWYodGhpcy5fX2V2YWx1YXRlUGFyZW50ICYmICF0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMpIHtcbiAgICAgIHRoaXMuX19ldmFsdWF0ZVBhcmVudC5fX2FraWxpLl9fdW5iaW5kQnlOb2RlcyhbXS5zbGljZS5jYWxsKHRoaXMuZWwuYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIGlmKHRoaXMuX19wYXJlbnQpIHtcbiAgICAgIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX3NwbGljZUNoaWxkKHRoaXMuZWwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGNvbXBvbmVudCB3aXRoIGNoaWxkcmVuXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVzdHJveSgpIHtcbiAgICB0aGlzLl9fcmVtb3ZlQ2hpbGRyZW4oKTtcbiAgICB0aGlzLl9fcmVtb3ZlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIGNvbXBvbmVudCBodG1sXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZW1wdHkoKSB7XG4gICAgbGV0IG5vZGVzID0gW107XG5cbiAgICB0aGlzLl9fcmVtb3ZlQ2hpbGRyZW4oKTtcblxuICAgIGxldCBmaW5kID0gKGNoaWxkcmVuKSA9PiB7XG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmKGNoaWxkLm5vZGVUeXBlID09IDMpIHtcbiAgICAgICAgICBub2Rlcy5wdXNoKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGNoaWxkLm5vZGVUeXBlID09IDEgJiYgIWNoaWxkLl9fYWtpbGkpIHtcbiAgICAgICAgICBmb3IgKGxldCBrID0gMCwgYXR0cnMgPSBjaGlsZC5hdHRyaWJ1dGVzLCBjID0gYXR0cnMubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICAgICAgICBub2Rlcy5wdXNoKGF0dHJzW2ldKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmaW5kKGNoaWxkLmNoaWxkTm9kZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZpbmQodGhpcy5lbC5jaGlsZE5vZGVzKTtcbiAgICB0aGlzLl9fdW5iaW5kQnlOb2Rlcyhub2Rlcyk7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcGFyZW50IGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0UGFyZW50KHNlbGVjdG9yID0gJycsIGZpbmRBbGwgPSBmYWxzZSwgbGV2ZWxzID0gbnVsbCkge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBsZXQgbGV2ZWwgPSAwO1xuXG4gICAgaWYodHlwZW9mIGxldmVscyAhPSAnb2JqZWN0Jykge1xuICAgICAgbGV2ZWxzID0gW2xldmVsc107XG4gICAgfVxuXG4gICAgbGV0IGZpbmQgPSAocGFyZW50KSA9PiB7XG4gICAgICBpZighcGFyZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYoIWxldmVscyB8fCBsZXZlbHMuaW5kZXhPZihsZXZlbCkgIT0gLTEpIHtcbiAgICAgICAgaWYgKCFzZWxlY3RvciB8fCBwYXJlbnQuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIGlmICghZmluZEFsbCkge1xuICAgICAgICAgICAgYXJyLnB1c2gocGFyZW50Ll9fYWtpbGkpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYXJyLnB1c2gocGFyZW50Ll9fYWtpbGkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldmVsKys7XG4gICAgICBmaW5kKHBhcmVudC5fX2FraWxpLl9fcGFyZW50KTtcbiAgICB9O1xuXG4gICAgZmluZCh0aGlzLl9fcGFyZW50KTtcblxuICAgIHJldHVybiBmaW5kQWxsPyBhcnI6IChhcnJbMF0gfHwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNoaWxkIGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0Q2hpbGRyZW4oc2VsZWN0b3IgPSAnJywgZmluZEFsbCA9IHRydWUsIGxldmVscyA9IG51bGwpIHtcbiAgICBsZXQgYXJyID0gW107XG4gICAgbGV0IGxldmVsID0gMDtcblxuICAgIGlmKHR5cGVvZiBsZXZlbHMgIT0gJ29iamVjdCcpIHtcbiAgICAgIGxldmVscyA9IFtsZXZlbHNdO1xuICAgIH1cblxuICAgIGxldCBmaW5kID0gKGNoaWxkcmVuKSA9PiB7XG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmKCFsZXZlbHMgfHwgbGV2ZWxzLmluZGV4T2YobGV2ZWwpICE9IC0xKSB7XG4gICAgICAgICAgaWYoIXNlbGVjdG9yIHx8IGNoaWxkLl9fYWtpbGkubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIGlmKCFmaW5kQWxsKSB7XG4gICAgICAgICAgICAgIGFyci5wdXNoKGNoaWxkLl9fYWtpbGkpO1xuXG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXJyLnB1c2goY2hpbGQuX19ha2lsaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldmVsKys7XG5cbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgZmluZChjaGlsZHJlbltpXS5fX2FraWxpLl9fY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmaW5kKHRoaXMuX19jaGlsZHJlbik7XG5cbiAgICByZXR1cm4gZmluZEFsbD8gYXJyOiAoYXJyWzBdIHx8IG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBuZWFyZXN0IGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JpZ2h0PWZhbHNlXSAtIGZyb20gdGhlIHJpZ2h0IHNpZGUgaWYgdHJ1ZVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldE5lYXIoc2VsZWN0b3IgPSAnJywgZmluZEFsbCA9IHRydWUsIHJpZ2h0ID0gZmFsc2UpIHtcbiAgICBpZighdGhpcy5fX3BhcmVudCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGxldmVsRWxlbWVudHMgPSB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19jaGlsZHJlbi5zbGljZSgpO1xuICAgIGxldCBhcnIgPSBbXTtcblxuICAgIHJpZ2h0ICYmIGxldmVsRWxlbWVudHMucmV2ZXJzZSgpO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGxldmVsRWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgZWwgPSBsZXZlbEVsZW1lbnRzW2ldO1xuXG4gICAgICBpZihlbCA9PT0gdGhpcy5lbCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYoIXNlbGVjdG9yIHx8IGVsLl9fYWtpbGkubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgYXJyLnB1c2goZWwuX19ha2lsaSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYXJyLnJldmVyc2UoKTtcblxuICAgIGlmKCFmaW5kQWxsKSB7XG4gICAgICByZXR1cm4gYXJyLmxlbmd0aD8gYXJyWzBdOiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGNvbXBvbmVudCBtYXRjaGVzIHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBzZWxlY3RvclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIG1hdGNoZXMoc2VsZWN0b3IpIHtcbiAgICBpZih0eXBlb2Ygc2VsZWN0b3IgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHNlbGVjdG9yKHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmVsLm1hdGNoZXMoc2VsZWN0b3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IHBhcmVudCBjb21wb25lbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIHBhcmVudChzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRQYXJlbnQoc2VsZWN0b3IsIGZhbHNlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBwYXJlbnQgY29tcG9uZW50cyBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBwYXJlbnRzKHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldFBhcmVudChzZWxlY3RvciwgdHJ1ZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBjaGlsZCBjb21wb25lbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIGNoaWxkKHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldENoaWxkcmVuKHNlbGVjdG9yLCBmYWxzZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY2hpbGQgY29tcG9uZW50cyBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBjaGlsZHJlbihzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRDaGlsZHJlbihzZWxlY3RvciwgdHJ1ZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY29tcG9uZW50cyBsZWZ0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgYmVmb3JlKHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIHRydWUsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY29tcG9uZW50cyByaWdodCBmcm9tIHRoZSBjdXJyZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGFmdGVyKHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIHRydWUsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IGNvbXBvbmVudCBsZWZ0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIHByZXYoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgZmFsc2UsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBjb21wb25lbnQgcmlnaHQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgbmV4dChzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCBmYWxzZSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGVsZW1lbnQgcGFyZW50XG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudFxuICAgKi9cbiAgYXBwZW5kVG8ocGFyZW50KSB7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWwpO1xuXG4gICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FuY2VsIGNvbXBvbmVudCBjb21waWxhdGlvblxuICAgKi9cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXBhbGUgdGhlIGNvbXBvbmVudCwgYnV0IGNhbmNlbCB0aGUgY29tcGlsYXRpb24gaW5zaWRlIG9mIGl0XG4gICAqL1xuICBwcmV2ZW50KCkge1xuICAgIHRoaXMuX19wcmV2ZW50ID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBlbGVtZW50IGh0bWxcbiAgICpcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBlbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2VtcHR5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGVsZW1lbnRcbiAgICpcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICByZW1vdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19kZXN0cm95LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjcmVhdGVkKCkge31cbiAgY29tcGlsZWQoKSB7fVxuICByZWNvbXBpbGVkKCkge31cbiAgY2hhbmdlZChrZXksIHZhbHVlKSB7fVxuICByZXNvbHZlZCgpIHt9XG4gIHJlbW92ZWQoKSB7fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnQuanMiLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlci5qcydcblxuY29uc3QgdXRpbHMgPSB7fTtcblxuLyoqXG4gKiBDcmVhdGUgY2xhc3MgYXR0cmlidXRlIGZyb20gYW4gb2JqZWN0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJyZWQgYWN0aXZlXCJcbiAqIHV0aWxzLmNsYXNzKHtyZWQ6IHRydWUsIGFjdGl2ZTogdHJ1ZSwgZ3JlZW46IGZhbHNlfSk7XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuY2xhc3MgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGlmKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBsZXQgY2xhc3NlcyA9IFtdO1xuXG4gIGZvcihsZXQgayBpbiBvYmopIHtcbiAgICBpZighb2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBsZXQgdmFsID0gb2JqW2tdO1xuXG4gICAgdmFsICYmIGNsYXNzZXMucHVzaChrKTtcbiAgfVxuXG4gIHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIHN0eWxlIGF0dHJpYnV0ZSBmcm9tIGFuIG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwiY29sb3I6cmVkO3dpZHRoOjEwcHhcIlxuICogdXRpbHMuc3R5bGUoe2NvbG9yOiBcInJlZFwiLCBiYWNrZ3JvdW5kOiBmYWxzZSwgd2lkdGg6IFwiMTBweFwifSk7XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuc3R5bGUgPSBmdW5jdGlvbihvYmopIHtcbiAgaWYoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGxldCBzdHlsZXMgPSBbXTtcblxuICBmb3IobGV0IGsgaW4gb2JqKSB7XG4gICAgaWYoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgbGV0IHZhbCA9IG9ialtrXTtcblxuICAgIHZhbCAmJiBzdHlsZXMucHVzaChgJHt0aGlzLnRvRGFzaENhc2Uoayl9OiR7dmFsfWApO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlcy5qb2luKCc7Jyk7XG59O1xuXG4vKipcbiAqIEZpbHRlciBhbiBhcnJheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsxLCAxMV1cbiAqIHV0aWxzLmZpbHRlcihbMSwgMiwgMywgMTFdLCAnMScpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoxfSwge3g6MTF9XVxuICogdXRpbHMuZmlsdGVyKFt7eDoxfSwge3g6Mn0sIHt4OjN9LCB7eDoxMX1dLCAnMScsIFsneCddKTtcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cHxmdW5jdGlvbn0gaGFuZGxlciAtIHR5cGUgb2YgZmlsdGVyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ1tdfHN0cmluZ30gW2tleXNdIC0gZmlsdGVyIGluIHRoZSBrZXlzIGlmIGFycmF5IGVsZW1lbnRzIGFyZSBvYmplY3RcbiAqIEByZXR1cm5zIHtBcnJheX0gLSByZXR1cm5zIG90aGVyIGFycmF5XG4gKi9cbnV0aWxzLmZpbHRlciA9IGZ1bmN0aW9uIChhcnIsIGhhbmRsZXIsIGtleXMgPSBbXSkge1xuICBsZXQgcmVzID0gW107XG5cbiAgaWYoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICBrZXlzID0gW2tleXNdO1xuICB9XG5cbiAgaWYoIWhhbmRsZXIpIHtcbiAgICByZXR1cm4gWy4uLmFycl07XG4gIH1cblxuICBmb3IobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBpdGVtID0gYXJyW2ldO1xuICAgIGxldCB2YWwgPSBrZXlzLmxlbmd0aD8gdGhpcy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCBpdGVtKTogaXRlbTtcblxuICAgIGlmKCF2YWwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhbCArPSAnJztcblxuICAgIGlmKCh0eXBlb2YgaGFuZGxlciA9PSAnZnVuY3Rpb24nKSAmJiBoYW5kbGVyKGl0ZW0pKSB7XG4gICAgICByZXMucHVzaChpdGVtKTtcbiAgICB9XG4gICAgZWxzZSBpZih2YWwubWF0Y2goaGFuZGxlciB8fCAnJykpIHtcbiAgICAgIHJlcy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIE9yZGVyIGFuIGFycmF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWzEsIDIsIDNdXG4gKiB1dGlscy5zb3J0KFszLCAyLCAxXSwgdHJ1ZSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWzMsIDIsIDFdXG4gKiB1dGlscy5zb3J0KFsxLCAyLCAzXSwgZmFsc2UpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XVxuICogdXRpbHMuc29ydChbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV0sIFtbJ3gnXV0sIFt0cnVlXSk7XG4gKiB1dGlscy5zb3J0KFt7eDogM30sIHt4OiAyfSwge3g6IDF9XSwgWyd4J10sIHRydWUpO1xuICogdXRpbHMuc29ydChbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV0sICd4Jyk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dXG4gKiB1dGlscy5zb3J0KFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XSwgW1sneCddXSwgW2ZhbHNlXSk7XG4gKiB1dGlscy5zb3J0KFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XSwgWyd4J10sIGZhbHNlKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dLCAneCcsIGZhbHNlKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDEsIHk6IDN9LCB7eDogMiwgeTogMX0sIHt4OjIsIHk6IDJ9XVxuICogdXRpbHMuc29ydChbe3g6IDIsIHk6IDJ9LCB7eDogMiwgeTogMX0sIHt4OiAyLCB5OiAzfV0sIFtbJ3gnXSwgWyd5J11dLCBbdHJ1ZSwgdHJ1ZV0pO1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICogQHBhcmFtIHtib29sZWFufEFycmF5W118c3RyaW5nW118c3RyaW5nfSBba2V5c11cbiAqIEBwYXJhbSB7Ym9vbGVhbnxib29sZWFuW119IFtvcmRlcl0gLSByZXZlcnNlIG9yIG5vdFxuICogQHJldHVybnMge0FycmF5fVxuICovXG51dGlscy5zb3J0ID0gZnVuY3Rpb24oYXJyLCBrZXlzID0gdHJ1ZSwgb3JkZXIgPSBbXSkge1xuICBhcnIgPSBbLi4uYXJyXTtcblxuICBpZihrZXlzID09PSB0cnVlKSB7XG4gICAga2V5cyA9IFtdO1xuICAgIG9yZGVyID0gW3RydWVdO1xuICB9XG4gIGVsc2UgaWYoa2V5cyA9PT0gZmFsc2UpIHtcbiAgICBrZXlzID0gW107XG4gICAgb3JkZXIgPSBbZmFsc2VdO1xuICB9XG5cbiAgaWYoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICBrZXlzID0gW2tleXNdO1xuICB9XG5cbiAgaWYoIUFycmF5LmlzQXJyYXkob3JkZXIpKSB7XG4gICAgb3JkZXIgPSBbb3JkZXJdO1xuICB9XG5cbiAgbGV0IGwgPSBrZXlzLmxlbmd0aDtcblxuICBhcnIuc29ydCgoYSwgYikgPT4ge1xuICAgIGxldCBpID0gMDtcblxuICAgIGxldCBjaGVjayA9IChhLCBiLCByZXZlcnNlID0gZmFsc2UpID0+IHtcbiAgICAgIGlmKGEgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIGEgPSBhLmdldFRpbWUoKTtcbiAgICAgIH1cblxuICAgICAgaWYoYiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgYiA9IGIuZ2V0VGltZSgpO1xuICAgICAgfVxuXG4gICAgICBpZihhID4gYikge1xuICAgICAgICByZXR1cm4gcmV2ZXJzZT8gLTE6IDE7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKGEgPCBiKSB7XG4gICAgICAgIHJldHVybiByZXZlcnNlPyAxOiAtMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDA7XG4gICAgfTtcblxuICAgIGxldCBuZXh0ID0gKCkgPT4ge1xuICAgICAgaWYoaSA+PSBsKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuXG4gICAgICBsZXQga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYoIUFycmF5LmlzQXJyYXkoa2V5KSkge1xuICAgICAgICBrZXkgPSBba2V5XTtcbiAgICAgIH1cblxuICAgICAgbGV0IGFWID0gdGhpcy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXksIGEpO1xuICAgICAgbGV0IGJWID0gdGhpcy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXksIGIpO1xuICAgICAgbGV0IHJlcyA9IGNoZWNrKGFWLCBiViwgb3JkZXJbaV0gPT09IGZhbHNlKTtcblxuICAgICAgaWYocmVzICE9PSAwKSB7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9XG5cbiAgICAgIGkrKztcblxuICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICB9O1xuXG4gICAgaWYoIWwpIHtcbiAgICAgIHJldHVybiBjaGVjayhhLCBiLCBvcmRlcltpXSA9PT0gZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0KCk7XG4gIH0pO1xuXG4gIHJldHVybiBhcnI7XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSB2YWx1ZSBpcyBjb21wb25lbnQgc2NvcGUgcHJveHkgb2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5pc1Njb3BlUHJveHkgPSBmdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuICEhKHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnICYmIHZhbC5fX2lzUHJveHkpO1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgdmFsdWUgaXMgcGxhaW4gb2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSBvYmpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5pc1BsYWluT2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XG4gIHJldHVybiAhIShvYmogJiYgdHlwZW9mIG9iaiA9PSAnb2JqZWN0JyAmJiAob2JqLmNvbnN0cnVjdG9yID09IE9iamVjdCB8fCBvYmouY29uc3RydWN0b3IgPT0gQXJyYXkpKTtcbn07XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVcbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtuZXN0ZWQ9dHJ1ZV0gLSBkZWVwIGNvcHkgaWYgaXMgdHJ1ZVxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmNvcHkgPSBmdW5jdGlvbih2YWx1ZSwgbmVzdGVkID0gdHJ1ZSkge1xuICBpZih0eXBlb2YgdmFsdWUgIT0gJ29iamVjdCcgfHwgIXZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gbmV4dChvYmopIHtcbiAgICBvYmogPSBBcnJheS5pc0FycmF5KG9iaik/IFsuLi5vYmpdOiB7Li4ub2JqfTtcblxuICAgIGlmKCFuZXN0ZWQpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgZm9yKGxldCBrIGluIG9iaikge1xuICAgICAgaWYoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYob2JqW2tdICYmIHR5cGVvZiBvYmpba10gPT0gJ29iamVjdCcpIHtcbiAgICAgICAgb2JqW2tdID0gbmV4dChvYmpba10pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICByZXR1cm4gbmV4dCh2YWx1ZSk7XG59O1xuXG4vKipcbiAqIENoYW5nZSB0aGUgdmFsdWUgdG8gYXR0cmlidXRlIGFwcHJvcHJpYXRlIGZvcm1hdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5tYWtlQXR0cmlidXRlVmFsdWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBpZih2YWx1ZSA9PT0gZmFsc2UgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmKHZhbHVlIGluc3RhbmNlb2YgRXZlbnRFbWl0dGVyKSB7XG4gICAgcmV0dXJuICdbb2JqZWN0IEV2ZW50XSc7XG4gIH1cblxuICBpZih0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiAnW29iamVjdCBGdW5jdGlvbl0nO1xuICB9XG5cbiAgaWYodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gdmFsdWUgKyAnJztcbn07XG5cbi8qKlxuICogQ29tcGFyZSB0d28gdmFsdWVzXG4gKlxuICogQHBhcmFtIHsqfSBhXG4gKiBAcGFyYW0geyp9IGJcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5jb21wYXJlID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgaWYoKGEgaW5zdGFuY2VvZiBEYXRlKSAmJiAoYiBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgcmV0dXJuIGEuZ2V0VGltZSgpID09PSBiLmdldFRpbWUoKTtcbiAgfVxuICBpZih0eXBlb2YgYSA9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBiID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYS50b1N0cmluZygpID09PSBiLnRvU3RyaW5nKCk7XG4gIH1cbiAgZWxzZSBpZih0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiA9PSAnb2JqZWN0Jykge1xuICAgIGlmKGEgPT09IG51bGwgfHwgYiA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGEgPT09IGI7XG4gICAgfVxuXG4gICAgaWYoT2JqZWN0LmtleXMoYSkubGVuZ3RoICE9IE9iamVjdC5rZXlzKGIpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvcihsZXQgayBpbiBhKSB7XG4gICAgICBpZighYS5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYoIXRoaXMuY29tcGFyZShhW2tdLCBiW2tdKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gYSA9PT0gYjtcbn07XG5cbi8qKlxuICogQ29tcGFyZSBjdXJyZW50IHZhbHVlIHdpdGggcHJldmlvdXNcbiAqXG4gKiBAcGFyYW0geyp9IGN1cnJlbnQgLSB0aGUgY3VycmVudCB2YWx1ZVxuICogQHBhcmFtIHsqfSBwcmV2aW91cyAtIHRoZSBjdXJyZW50IHZhbHVlIGNvcHlcbiAqIEBwYXJhbSB7Kn0gcHJldmlvdXNDb3B5IC0gdGhlIHByZXZpb3VzIHZhbHVlIGNvcHlcbiAqIEBwYXJhbSB7Kn0gW2N1cnJlbnRDb3B5XSAtIHRoZSBjdXJyZW50IHZhbHVlIGNvcHlcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSA9IGZ1bmN0aW9uKGN1cnJlbnQsIHByZXZpb3VzLCBwcmV2aW91c0NvcHksIGN1cnJlbnRDb3B5KSB7XG4gIGlmKGN1cnJlbnQgIT09IHByZXZpb3VzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuY29tcGFyZShhcmd1bWVudHMubGVuZ3RoID09IDM/IGN1cnJlbnRDb3B5OiB0aGlzLmNvcHkoY3VycmVudCksIHByZXZpb3VzQ29weSk7XG59O1xuXG4vKipcbiAqIEVuY29kZSBodG1sIGVudGl0aWVzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJ5b3UgJmFtcCBtZVwiXG4gKiB1dGlscy5lbmNvZGVIdG1sRW50aXRpZXMoJ3lvdSAmIG1lJyk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmVuY29kZUh0bWxFbnRpdGllcyA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHZhbHVlO1xuXG4gIGVsLnRleHRDb250ZW50ID0gaHRtbDtcbiAgdmFsdWUgPSBlbC5pbm5lckhUTUw7XG4gIGVsLnJlbW92ZSgpO1xuICBlbCA9IG51bGw7XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuLyoqXG4gKiBEZWNvZGUgaHRtbCBlbnRpdGllc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwieW91ICYgbWVcIlxuICogdXRpbHMuZGVjb2RlSHRtbEVudGl0aWVzKCd5b3UgJmFtcCBtZScpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBodG1sXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5kZWNvZGVIdG1sRW50aXRpZXMgPSBmdW5jdGlvbihodG1sKSB7XG4gIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgbGV0IHZhbHVlO1xuXG4gIGVsLmlubmVySFRNTCA9IGh0bWw7XG4gIHZhbHVlID0gZWwudmFsdWU7XG4gIGVsLnJlbW92ZSgpO1xuICBlbCA9IG51bGw7XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RyaW5nIGZyb20gZGFzaCB0byBjYW1lbCBjYXNlIGZvcm1hdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnRvQ2FtZWxDYXNlID0gZnVuY3Rpb24oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXFxXKyguKS9nLCAobSwgYykgPT4gYy50b1VwcGVyQ2FzZSgpKTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHN0cmluZyBmcm9tIGNhbWVsIHRvIGRhc2ggY2FzZSBmb3JtYXRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy50b0Rhc2hDYXNlID0gZnVuY3Rpb24oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCAobSwgYykgPT4gYC0ke2MudG9Mb3dlckNhc2UoKX1gKTtcbn07XG5cbi8qKlxuICogR2V0IG5lc3RlZCBvYmplY3QgcHJvcGVydHkgYnkgYXJyYXkga2V5c1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIDVcbiAqIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuZ2V0UHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QpIHtcbiAgbGV0IGN1cnJlbnQ7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKGZ1bmN0aW9uKG8sIGspIHtcbiAgICBpKys7XG5cbiAgICBpZih0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIG87XG4gICAgfVxuXG4gICAgaWYob1trXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgKGkgPT0gbGVuZ3RoKSAmJiAoY3VycmVudCA9IG9ba10pO1xuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiBjdXJyZW50O1xufTtcblxuLyoqXG4gKiBDaGVjayBuZXN0ZWQgb2JqZWN0cyB0cmVlIGhhcyBwcm9wZXJ0eSBvciBub3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB0cnVlXG4gKiB1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0KSB7XG4gIGxldCBoYXMgPSBmYWxzZTtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoZnVuY3Rpb24obywgaykge1xuICAgIGkrKztcblxuICAgIGlmKHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gISFvO1xuICAgIH1cblxuICAgIGlmKCFvLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgKGkgPT0gbGVuZ3RoKSAmJiAoaGFzID0gby5oYXNPd25Qcm9wZXJ0eShrKSk7XG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIGhhcztcbn07XG5cbi8qKlxuICogU2V0IG5lc3RlZCBvYmplY3RzIHRyZWUgcHJvcGVydHlcbiAqIFJldHVybnMgY2hhbmdlZCBwcm9wZXJ0eSBvYmplY3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB7eTogNn1cbiAqIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19LCAobGFzdCwgdmFsKSA9PiBsYXN0PyA2OiAodmFsIHx8IHt9KSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCwgZm4pIHtcbiAgbGV0IGN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKGZ1bmN0aW9uKG8sIGspIHtcbiAgICBpKys7XG5cbiAgICBpZih0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKCFvLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICByZXR1cm4gY3VycmVudCA9IG9ba10gPSBmbihpID09IGxlbmd0aCk7XG4gICAgfVxuXG4gICAgb1trXSA9IGZuKGkgPT0gbGVuZ3RoLCBvW2tdKTtcbiAgICBjdXJyZW50ID0gbztcblxuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiBjdXJyZW50O1xufTtcblxuLyoqXG4gKlxuICogRGVsZXRlIHByb3BlcnR5IGZyb20gbmVzdGVkIG9iamVjdHMgdHJlZVxuICogUmV0dXJucyBkZWxldGVkIHByb3BlcnR5IHZhbHVlXG4gKiBZb3UgY2FuIGNhbmNlbCBkZWxldGluZyBpZiB3aWxsIHJldHVybiBmYWxzZSBpbiB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyA1XG4gKiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSk7XG4gQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0sIHZhbCA9PiB2YWwgIT0gNSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHBhcmFtIHtmdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0LCBmbikge1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCB2YWx1ZTtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKGZ1bmN0aW9uKG8sIGspIHtcbiAgICBpKys7XG5cbiAgICBpZih0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKCFvLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgaWYoaSA9PSBsZW5ndGgpIHtcbiAgICAgIHZhbHVlID0gb1trXTtcblxuICAgICAgaWYoIWZuIHx8IGZuKHZhbHVlKSkge1xuICAgICAgICBkZWxldGUgb1trXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgdGFyZ2V0IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cblxudXRpbHMuZ2V0RW51bWVyYWJsZVByb3BlcnR5VGFyZ2V0ID0gZnVuY3Rpb24odGFyZ2V0LCBrZXkpIHtcbiAgbGV0IGNoZWNrID0gKG9iaikgPT4ge1xuICAgIGlmKG9iai5wcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGxldCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuXG4gICAgaWYoIXByb3RvKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hlY2socHJvdG8pO1xuICB9O1xuXG4gIHJldHVybiBjaGVjayh0YXJnZXQpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIG93biBwcm9wZXJ0eSB0YXJnZXQgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xudXRpbHMuZ2V0T3duUHJvcGVydHlUYXJnZXQgPSBmdW5jdGlvbih0YXJnZXQsIGtleSkge1xuICBsZXQgY2hlY2sgPSAob2JqKSA9PiB7XG4gICAgaWYob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgbGV0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG5cbiAgICBpZighcHJvdG8pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjaGVjayhwcm90byk7XG4gIH07XG5cbiAgcmV0dXJuIGNoZWNrKHRhcmdldCk7XG59O1xuXG4vKipcbiAqIENsZWFyIHZhbHVlIHByb3h5IGlmIGl0IGV4aXN0ZW50XG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmNsZWFyU2NvcGVQcm94eSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZih0eXBlb2YgdmFsdWUgIT0gJ29iamVjdCcgfHwgIXZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgbGV0IGNsZWFyID0gKG9iaikgPT4ge1xuICAgIGZvcihsZXQgayBpbiBvYmopIHtcbiAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZihvYmpba10gJiYgdHlwZW9mIG9ialtrXSA9PSAnb2JqZWN0Jykge1xuICAgICAgICBpZihvYmpba10uX19pc1Byb3h5KSB7XG4gICAgICAgICAgb2JqW2tdID0gb2JqW2tdLl9fdGFyZ2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgY2xlYXIob2JqW2tdKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgaWYodmFsdWUuX19pc1Byb3h5KSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5fX3RhcmdldDtcbiAgfVxuXG4gIGNsZWFyKHZhbHVlKTtcblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5cbi8qKlxuICogR2VuZXJhdGUgcmFuZG9tIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuY3JlYXRlUmFuZG9tU3RyaW5nID0gZnVuY3Rpb24obGVuZ3RoID0gMTYsIGZuID0gbnVsbCkge1xuICBsZXQgc3RyID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIGxlbmd0aCArIDIpO1xuICBsZXQgdmFsID0gJyc7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IHN0ci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZihNYXRoLnJhbmRvbSgpID4gMC42Nikge1xuICAgICAgdmFsICs9IHN0cltpXS50b1VwcGVyQ2FzZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhbCArPSBzdHJbaV07XG4gICAgfVxuICB9XG5cbiAgaWYoZm4gJiYgZm4odmFsKSkge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZVJhbmRvbVN0cmluZyhsZW5ndGgsIGZuKTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1dGlscztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMuanMiLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG5leHBvcnQgY2xhc3MgUmVxdWVzdCB7XG4gIGNvbnN0cnVjdG9yKGJhc2VVcmwsIGRlZmF1bHRzKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gYmFzZVVybD8gKGJhc2VVcmwucmVwbGFjZSgvXFwvJC8sICcnKSArICcvJyk6ICcnO1xuXG4gICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgIHN0YXR1c0Vycm9yc1BhdHRlcm46IC9eKFteMjNdKXw0MDQvLFxuICAgICAgLi4uKGRlZmF1bHRzIHx8IHt9KVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogU2VuZCByZXF1ZXN0IHdpdGggYW55IG1ldGhvZFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHF1ZXJ5KG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IHVybDtcbiAgICAgIGxldCB4aHI7XG5cbiAgICAgIG9wdGlvbnMgPSB7Li4udGhpcy5kZWZhdWx0cywgLi4uKG9wdGlvbnMgfHwge30pfTtcblxuICAgICAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAodHlwZW9mIG9wdGlvbnMub25TdGFydCA9PSAnZnVuY3Rpb24nKSAmJiBvcHRpb25zLm9uU3RhcnQoeGhyKTtcbiAgICAgIG9wdGlvbnMgPSB0aGlzLnRyYW5zZm9ybUJlZm9yZShvcHRpb25zKTtcbiAgICAgIHVybCA9IHRoaXMuYmFzZVVybD8gYCR7dGhpcy5iYXNlVXJsfSR7b3B0aW9ucy51cmwucmVwbGFjZSgvXlxcLy8sICcnKX1gOiBvcHRpb25zLnVybDtcbiAgICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCB1cmwsIHRydWUsIG9wdGlvbnMudXNlciwgb3B0aW9ucy5wYXNzd29yZCk7XG4gICAgICBvcHRpb25zLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwge307XG5cbiAgICAgIGlmKG9wdGlvbnMuanNvbikge1xuICAgICAgICBvcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShvcHRpb25zLmpzb24pO1xuICAgICAgICBvcHRpb25zLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICBvcHRpb25zLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlIHx8ICdqc29uJztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYob3B0aW9ucy5mb3JtKSB7XG4gICAgICAgIG9wdGlvbnMuYm9keSA9IHRoaXMuY3JlYXRlRm9ybURhdGEob3B0aW9ucy5mb3JtKTtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzWydjb250ZW50LXR5cGUnXSA9ICdtdWx0aXBhcnQvZm9ybS1kYXRhJztcbiAgICAgIH1cblxuICAgICAgaWYob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgndGltZW91dCcpKSB7XG4gICAgICAgIHhoci50aW1lb3V0ID0gb3B0aW9ucy50aW1lb3V0O1xuICAgICAgfVxuXG4gICAgICBpZihvcHRpb25zLnJlc3BvbnNlVHlwZSkge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gb3B0aW9ucy5yZXNwb25zZVR5cGU7XG4gICAgICB9XG5cbiAgICAgIGlmKG9wdGlvbnMud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSBvcHRpb25zLndpdGhDcmVkZW50aWFscztcbiAgICAgIH1cblxuICAgICAgaWYob3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIGZvcihsZXQgayBpbiBvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgICBpZighb3B0aW9ucy5oZWFkZXJzLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrLCBvcHRpb25zLmhlYWRlcnNba10pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKG9wdGlvbnMucGFyYW1zKSB7XG4gICAgICAgIGxldCBzdHIgPSB0aGlzLnBhcmFtc1RvUXVlcnkob3B0aW9ucy5wYXJhbXMpO1xuXG4gICAgICAgIGlmKHN0cikge1xuICAgICAgICAgIHVybCArPSBcIj9cIiArIHN0cjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZih0eXBlb2Ygb3B0aW9ucy5vblByb2dyZXNzID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgeGhyLm9ucHJvZ3Jlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9wdGlvbnMub25Qcm9ncmVzcyh4aHIpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSB0aGlzLnRyYW5zZm9ybUFmdGVyKHhocik7XG5cbiAgICAgICAgaWYoKHhoci5zdGF0dXMgKyAnJykubWF0Y2gob3B0aW9ucy5zdGF0dXNFcnJvcnNQYXR0ZXJuKSkge1xuICAgICAgICAgIGxldCBlcnIgPSBuZXcgRXJyb3IoYFJlcXVlc3QgdG8gXCIke3VybH1cIiByZXR1cm5zIGZhaWx1cmUgc3RhdHVzIGNvZGUgJHt4aHIuc3RhdHVzfWApO1xuXG4gICAgICAgICAgZXJyLnJlc3BvbnNlID0gcmVzcG9uc2U7XG5cbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgIH0gXG4gICAgICAgIFxuICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbnRpbWVvdXQgPSAoKSA9PiB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFJlcXVlc3QgdG8gXCIke3VybH1cIiB0aW1lZCBvdXRgKSk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub25lcnJvciA9IChlcnIpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9O1xuXG4gICAgICB4aHIuc2VuZChvcHRpb25zLmJvZHkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgb2JqZWN0IHRvIHF1ZXJ5IHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBwYXJhbXNUb1F1ZXJ5KG9iaikge1xuICAgIGxldCBzZXAgPSAnJic7XG4gICAgbGV0IGVxID0gJz0nO1xuXG4gICAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5tYXAoKGspID0+IHtcbiAgICAgIGxldCBrcyA9IGVuY29kZVVSSUNvbXBvbmVudChrKTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgICBrcyA9IGVuY29kZVVSSUNvbXBvbmVudChrKTtcblxuICAgICAgICByZXR1cm4gb2JqW2tdLm1hcCgodiwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiBrcyArIGBbJHtpfV1gICsgZXEgKyBlbmNvZGVVUklDb21wb25lbnQodik7XG4gICAgICAgIH0pLmpvaW4oc2VwKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYob2JqW2tdICYmIHR5cGVvZiBvYmpba10gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGxldCBvcHQgPSBbXTtcblxuICAgICAgICBPYmplY3Qua2V5cyhvYmpba10pLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgb3B0LnB1c2goa3MgKyBgWyR7a2V5fV1gICsgZXEgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tdW2tleV0pKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG9wdC5qb2luKHNlcCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGtzICsgZXEgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tdKTtcbiAgICAgIH1cbiAgICB9KS5qb2luKHNlcCk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBxdWVyeSBzdHJpbmcgdG8gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHBhcmFtc0Zyb21RdWVyeShzdHIpIHtcbiAgICBsZXQgcXVlcnkgPSB7fTtcbiAgICBsZXQgYW1wcyA9IHN0ci5zcGxpdCgnJicpO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGFtcHMubGVuZ3RoOyBpIDxsOyBpKyspIHtcbiAgICAgIGxldCBlcXMgPSAgYW1wc1tpXS5zcGxpdCgnPScpO1xuICAgICAgbGV0IGtleSA9IGRlY29kZVVSSUNvbXBvbmVudChlcXNbMF0pO1xuICAgICAgbGV0IHZhbCA9IGRlY29kZVVSSUNvbXBvbmVudChlcXNbMV0pO1xuXG4gICAgICBpZigha2V5KSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZihBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICAgIHF1ZXJ5W2tleV0ucHVzaCh2YWwpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZihxdWVyeVtrZXldKSB7XG4gICAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSwgdmFsXTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBxdWVyeVtrZXldID0gdmFsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbXVsdGlwYXJ0IGZvcm0gZGF0YSBmcm9tIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEBwYXJhbSB7Rm9ybURhdGF9IFtkYXRhXVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25hbWVzcGFjZV1cbiAgICpcbiAgICogQHJldHVybnMge0Zvcm1EYXRhfVxuICAgKi9cbiAgY3JlYXRlRm9ybURhdGEob2JqLCBkYXRhID0gbnVsbCwgbmFtZXNwYWNlID0gJycpIHtcbiAgICBsZXQgZmQgPSBkYXRhIHx8IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgZm9yKGxldCBrIGluIG9iaikge1xuICAgICAgaWYob2JqLmhhc093blByb3BlcnR5KGspICYmIG9ialtrXSkge1xuICAgICAgICBsZXQga2V5ID0gbmFtZXNwYWNlPyBuYW1lc3BhY2UgKyAnWycgKyBrICsgJ10nOiBrO1xuXG4gICAgICAgIGlmIChvYmpba10gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgZmQuYXBwZW5kKGtleSwgb2JqW2tdLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3Qob2JqW2tdKSkge1xuICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybURhdGEob2JqW2tdLCBmZCwga2V5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBmZC5hcHBlbmQoa2V5LCBvYmpba10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZkO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBkYXRhIGJlZm9yZSBhIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHRyYW5zZm9ybUJlZm9yZShvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIGRhdGEgYWZ0ZXIgYSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7WE1MSHR0cFJlcXVlc3R9IHhoclxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgdHJhbnNmb3JtQWZ0ZXIoeGhyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHhocjogeGhyLFxuICAgICAgZGF0YTogeGhyLnJlc3BvbnNlLFxuICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBHRVQgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZ2V0KHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnR0VUJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIERFTEVURSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBkZWxldGUodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdERUxFVEUnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgUE9TVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBwb3N0KHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnUE9TVCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBQVVQgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcHV0KHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnUFVUJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIFBBVENIIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHBhdGNoKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnUEFUQ0gnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KCk7XG5cbnJlcXVlc3QuX19pbnN0YW5jZXMgPSB7fTtcblxuLyoqXG4gKiBBZGQgbmV3IHJlcXVlc3QgaW5zdGFuY2UgdG8gdGhlIG1haW4gc2VydmljZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1JlcXVlc3R9IGluc3RhbmNlXG4gKi9cbnJlcXVlc3QuYWRkSW5zdGFuY2UgPSBmdW5jdGlvbihuYW1lLCBpbnN0YW5jZSkge1xuICB0aGlzLl9faW5zdGFuY2VzW25hbWVdID0gaW5zdGFuY2U7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnJlcXVlc3QucmVtb3ZlSW5zdGFuY2UgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLl9faW5zdGFuY2VzW25hbWVdO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVlc3QsICd1c2UnLCB7XG4gIGdldDogKCkgPT4ge1xuICAgIHJldHVybiByZXF1ZXN0Ll9faW5zdGFuY2VzO1xuICB9XG59KTtcblxucmVxdWVzdC5SZXF1ZXN0ID0gUmVxdWVzdDtcbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3Q7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL3JlcXVlc3QuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnZhbHVlS2V5ID0gJ3ZhbHVlJztcbiAgfVxuXG4gIGNoYW5nZWRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgY2hhbmdlZEZvY3VzKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRGb2N1cyh2YWx1ZSk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdmb2N1cycpICYmIHRoaXMuc2V0Rm9jdXModGhpcy5hdHRycy5mb2N1cyk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSAmJiB0aGlzLnNldFZhbHVlKHRoaXMuYXR0cnMudmFsdWUpO1xuICB9XG5cbiAgc2V0Rm9jdXModmFsdWUpIHtcbiAgICB2YWx1ZT8gdGhpcy5zZXRFbGVtZW50Rm9jdXMoKTogdGhpcy5zZXRFbGVtZW50Qmx1cigpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAodGhpcy5lbFt0aGlzLnZhbHVlS2V5XSAhPT0gdmFsdWUpICYmICh0aGlzLmVsW3RoaXMudmFsdWVLZXldID0gdmFsdWUgPT09IDA/ICcwJzogKHZhbHVlIHx8ICcnKSk7XG4gIH1cblxuICBzZXRFbGVtZW50Rm9jdXMoKSB7XG4gICAgdGhpcy5lbC5mb2N1cygpO1xuICB9XG5cbiAgc2V0RWxlbWVudEJsdXIoKSB7XG4gICAgdGhpcy5lbC5ibHVyKCk7XG4gIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGV4dC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbaW5dJztcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnZm9yJywgRm9yKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ29sJywgRm9yKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3VsJywgRm9yKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RoZWFkJywgRm9yKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3Rib2R5JywgRm9yKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3Rmb290JywgRm9yKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RyJywgTG9vcCk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdsb29wJywgTG9vcCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLl9faXRlcmF0b3IgPSBudWxsO1xuICAgIHRoaXMuX19rZXkgPSBudWxsO1xuICAgIHRoaXMuX192YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5fX2luZGV4ID0gbnVsbDtcbiAgICB0aGlzLl9fY29tcGFyaXNvblZhbHVlID0gbnVsbDtcbiAgICB0aGlzLml0ZXJhdG9ycyA9IHt9O1xuICAgIHRoaXMuaXRlcmF0b3JSZWYgPSBudWxsO1xuICAgIHRoaXMuaXRlcmF0b3JPdXRlckhUTUwgPSBudWxsO1xuICB9XG5cbiAgY2hhbmdlZEluKGRhdGEpIHtcbiAgICB0aGlzLmRyYXcoZGF0YSk7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuY3JlYXRlSXRlcmF0b3IoKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuZHJhdyh0aGlzLmF0dHJzLmluKTtcbiAgfVxuXG4gIGNyZWF0ZUl0ZXJhdG9yKCkge1xuICAgIGxldCBlbDtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5lbC5jaGlsZHJlbltpXTtcblxuICAgICAgaWYoY2hpbGQuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKSA9PSAnbG9vcCcpIHtcbiAgICAgICAgZWwgPSBjaGlsZDtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZWwgPSBjaGlsZDtcbiAgICB9XG5cbiAgICBpZighZWwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignXCJGb3JcIiBjb21wb25lbnQgbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBjaGlsZCcpXG4gICAgfVxuXG4gICAgbGV0IGNvbXBvbmVudE5hbWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpO1xuXG4gICAgaWYoY29tcG9uZW50TmFtZSAhPSAnbG9vcCcpIHtcbiAgICAgIGxldCBjb21wb25lbnQgPSBBa2lsaS5jb21wb25lbnQoY29tcG9uZW50TmFtZSB8fCBlbC50YWdOYW1lKTtcblxuICAgICAgaWYoIWNvbXBvbmVudCkge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcsICdsb29wJyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKCEoY29tcG9uZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIEZvcikpIHtcbiAgICAgICAgbGV0IG1hc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsb29wJyk7XG5cbiAgICAgICAgbWFzay5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIGVsID0gbWFzaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmh0bWwgPSBlbC5pbm5lckhUTUw7XG4gICAgdGhpcy5pdGVyYXRvclJlZiA9IGVsLm5leHRTaWJsaW5nO1xuICAgIHRoaXMuaXRlcmF0b3JPdXRlckhUTUwgPSBlbC5vdXRlckhUTUw7XG4gICAgZWwucmVtb3ZlKCk7XG4gIH1cblxuICBjcmVhdGVJdGVyYXRvckVsZW1lbnQoKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcblxuICAgIGVsLmlubmVySFRNTCA9IHRoaXMuaXRlcmF0b3JPdXRlckhUTUw7XG4gICAgZWwgPSBlbC5jb250ZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBsb29wKGtleSwgdmFsdWUsIGtleXMsIGluZGV4KSB7XG4gICAgdGhpcy5fX2luZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5fX2tleSA9IGtleTtcbiAgICB0aGlzLl9fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLl9fY29tcGFyaXNvblZhbHVlID0gdXRpbHMuY29weSh2YWx1ZSk7XG5cbiAgICBsZXQgaGFzaCA9ICcnO1xuICAgIGxldCBmb3VuZCA9IDA7XG5cbiAgICBpZih2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgJiYgdmFsdWUuX19oYXNoKSB7XG4gICAgICBoYXNoID0gdmFsdWUuX19oYXNoO1xuICAgIH1cblxuICAgIGlmKHRoaXMuaXRlcmF0b3JzW2hhc2hdKSB7XG4gICAgICBrZXkgPSBoYXNoO1xuICAgICAgZm91bmQgPSAyO1xuICAgIH1cbiAgICBlbHNlIGlmKHRoaXMuaXRlcmF0b3JzW2tleV0pIHtcbiAgICAgIGZvdW5kID0gMTtcbiAgICB9XG5cbiAgICBpZihmb3VuZCkge1xuICAgICAgbGV0IGl0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcnNba2V5XTtcblxuICAgICAgaWYoZm91bmQgPT0gMikge1xuICAgICAgICBsZXQgY1ZhbHVlID0gaXRlcmF0b3IuY29tcGFyc2lvbi52YWx1ZTtcbiAgICAgICAgbGV0IGNDb3B5ID0gaXRlcmF0b3IuY29tcGFyc2lvbi5jb3B5O1xuXG4gICAgICAgIGlmICh0aGlzLl9faW5kZXggIT09IGl0ZXJhdG9yLmluZGV4KSB7XG4gICAgICAgICAgaXRlcmF0b3Iuc2V0SW5kZXgoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9fa2V5ICE9PSBpdGVyYXRvci5rZXkpIHtcbiAgICAgICAgICBpdGVyYXRvci5zZXRLZXkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdXRpbHMuY29tcGFyZVByZXZpb3VzVmFsdWUodmFsdWUsIGNWYWx1ZSwgY0NvcHksIHRoaXMuX19jb21wYXJpc29uVmFsdWUpKSB7XG4gICAgICAgICAgaXRlcmF0b3Iuc2V0VmFsdWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGtleXNba2V5XSA9IGl0ZXJhdG9yO1xuICAgICAgICBkZWxldGUgdGhpcy5pdGVyYXRvcnNba2V5XTtcblxuICAgICAgICByZXR1cm4gaXRlcmF0b3I7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaXRlcmF0b3JSZWYgPSBpdGVyYXRvci5lbC5uZXh0U2libGluZztcbiAgICAgIGl0ZXJhdG9yLl9fZGVzdHJveSgpO1xuICAgIH1cblxuICAgIGxldCBlbCA9IHRoaXMuY3JlYXRlSXRlcmF0b3JFbGVtZW50KCk7XG5cbiAgICBlbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XG4gICAgdGhpcy5lbC5pbnNlcnRCZWZvcmUoZWwsIHRoaXMuaXRlcmF0b3JSZWYpO1xuICAgIEFraWxpLmNvbXBpbGUoZWwpO1xuXG4gICAgaWYodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgICBpZighdmFsdWUuX19oYXNoKSB7XG4gICAgICAgIGhhc2ggPSB1dGlscy5jcmVhdGVSYW5kb21TdHJpbmcoMzIsIChzdHIpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5pdGVyYXRvcnNbc3RyXTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbHVlLCAnX19oYXNoJywge1xuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIHZhbHVlOiBoYXNoXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBrZXlzW2hhc2hdID0gdGhpcy5fX2l0ZXJhdG9yO1xuICAgICAgZGVsZXRlIHRoaXMuaXRlcmF0b3JzW2hhc2hdO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmKEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgbGV0IGVWYWx1ZSA9IHR5cGVvZiB0aGlzLl9fdmFsdWUgPT0gJ3N0cmluZyc/IGBcIiR7dGhpcy5fX3ZhbHVlfVwiYDogdGhpcy5fX3ZhbHVlO1xuXG4gICAgICAgIGxldCBhcmdzID0gW1xuICAgICAgICAgIGBcIkZvclwiIGNvbXBvbmVudCBsb29wIGl0ZW1zIHNob3VsZCBoYXZlIFwib2JqZWN0XCIgdHlwZSBmb3IgaGlnaGVyIHBlcmZvcm1hbmNlLmAsXG4gICAgICAgICAgYFlvdSBjYW4gY2hhbmdlICR7ZVZhbHVlfSB0byB7dmFsdWU6ICR7ZVZhbHVlfX0sIGZvciBleGFtcGxlLmBcbiAgICAgICAgXTtcblxuICAgICAgICBjb25zb2xlLndhcm4uYXBwbHkoY29uc29sZS53YXJuLCBhcmdzKTtcbiAgICAgIH1cblxuICAgICAga2V5c1trZXldID0gdGhpcy5fX2l0ZXJhdG9yO1xuICAgICAgZGVsZXRlIHRoaXMuaXRlcmF0b3JzW2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsLl9fYWtpbGk7XG4gIH1cblxuICBkcmF3KGRhdGEpIHtcbiAgICBpZiAodHlwZW9mIGRhdGEgIT0gJ29iamVjdCcgfHwgZGF0YSA9PT0gbnVsbCkge1xuICAgICAgaWYoQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICBjb25zb2xlLndhcm4oYFwiRm9yXCIgY29tcG9uZW50IFwiaW5cIiBhdHRyaWJ1dGUgdmFsdWUgdHlwZSBtdXN0IGJlIGFuIG9iamVjdC9hcnJheWApO1xuICAgICAgICBkYXRhID0gW107XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGtleXMgPSB7fTtcbiAgICBsZXQgaW5kZXhLZXlzID0gW107XG4gICAgbGV0IGxhc3RFbGVtZW50ID0gbnVsbDtcbiAgICBsZXQgbGFzdCA9IHRoaXMuZWwuY2hpbGRyZW5bdGhpcy5lbC5jaGlsZHJlbi5sZW5ndGggLSAxXTtcblxuICAgIGlmKGxhc3QgJiYgIShsYXN0Ll9fYWtpbGkgaW5zdGFuY2VvZiBMb29wKSkge1xuICAgICAgbGFzdEVsZW1lbnQgPSBsYXN0O1xuICAgIH1cblxuICAgIGlmKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBkYXRhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpbmRleEtleXMucHVzaCh0aGlzLmxvb3AoaSwgZGF0YVtpXSwga2V5cywgaSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBpID0gMDtcblxuICAgICAgZm9yKGxldCBrIGluIGRhdGEpIHtcbiAgICAgICAgaWYoIWRhdGEuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4S2V5cy5wdXNoKHRoaXMubG9vcChrLCBkYXRhW2tdLCBrZXlzLCBpKSk7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gaW5kZXhLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGl0ZXJhdG9yID0gaW5kZXhLZXlzW2ldO1xuXG4gICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGl0ZXJhdG9yLmVsKTtcbiAgICAgIGl0ZXJhdG9yLml0ZXJhdGUoaSk7XG4gICAgfVxuXG4gICAgbGFzdEVsZW1lbnQgJiYgdGhpcy5lbC5hcHBlbmRDaGlsZChsYXN0RWxlbWVudCk7XG5cbiAgICBmb3IobGV0IGsgaW4gdGhpcy5pdGVyYXRvcnMpIHtcbiAgICAgIGlmKCF0aGlzLml0ZXJhdG9ycy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pdGVyYXRvcnNba10uX19kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdGhpcy5pdGVyYXRvcnMgPSBrZXlzO1xuICB9XG59O1xuXG5leHBvcnQgY2xhc3MgTG9vcCBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG4gIHN0YXRpYyBjb250cm9sQXR0cmlidXRlcyA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5mb3IgPSBudWxsO1xuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuaXNGb3IgPSB0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnaW4nKTtcblxuICAgIGlmKCF0aGlzLmlzRm9yICYmICEodGhpcy5lbC5wYXJlbnROb2RlLl9fYWtpbGkgaW5zdGFuY2VvZiBGb3IpKSB7XG4gICAgICB0aGlzLmNhbmNlbCgpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9faXRlcmF0b3IgPSB0aGlzO1xuICAgIHRoaXMuZm9yID0gdGhpcy5fX3BhcmVudC5fX2FraWxpO1xuICAgIHRoaXMuc2V0SW5kZXgoKTtcbiAgICB0aGlzLnNldEtleSgpO1xuICAgIHRoaXMuc2V0VmFsdWUoKTtcblxuICAgIHRoaXMuaXNGb3IgJiYgc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5pc0ZvciAmJiBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgc2V0SW5kZXgoKSB7XG4gICAgdGhpcy5pbmRleCA9IHRoaXMuZm9yLl9faW5kZXg7XG4gICAgdGhpcy5zY29wZS5fX3NldCgnbG9vcEluZGV4JywgdGhpcy5pbmRleCk7XG4gIH1cblxuICBzZXRLZXkoKSB7XG4gICAgdGhpcy5rZXkgPSB0aGlzLmZvci5fX2tleTtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wS2V5JywgdGhpcy5rZXkpO1xuICB9XG5cbiAgc2V0VmFsdWUoKSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuZm9yLl9fdmFsdWU7XG4gICAgdGhpcy5zY29wZS5fX3NldCgnbG9vcFZhbHVlJywgdGhpcy52YWx1ZSwgdHJ1ZSk7XG5cbiAgICB0aGlzLmNvbXBhcnNpb24gPSB7XG4gICAgICBjb3B5OiB0aGlzLmZvci5fX2NvbXBhcmlzb25WYWx1ZSxcbiAgICAgIHZhbHVlOiB0aGlzLmZvci5fX3ZhbHVlXG4gICAgfTtcbiAgfVxuXG4gIGl0ZXJhdGUoaW5kZXgpIHt9XG59XG5cbkZvci5Mb29wID0gTG9vcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Zvci5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi9zZXJ2aWNlcy9yZXF1ZXN0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgncm91dGUnLCBSb3V0ZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7VHJhbnNpdGlvbn0gdHJhbnNpdGlvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHNldFRyYW5zaXRpb24odHJhbnNpdGlvbikge1xuICAgIGxldCBzdGF0ZSA9IHRyYW5zaXRpb24ucGF0aC5zdGF0ZTtcbiAgICBsZXQgcGFyYW1zID0gdHJhbnNpdGlvbi5wYXRoLnBhcmFtcztcbiAgICBsZXQgdXJsID0gdHJhbnNpdGlvbi51cmw7XG4gICAgbGV0IHF1ZXJ5ID0gdHJhbnNpdGlvbi5xdWVyeTtcbiAgICBsZXQgcCA9IFByb21pc2UucmVzb2x2ZSgpO1xuXG4gICAgZnVuY3Rpb24gZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uKHBhdGgpIHtcbiAgICAgIGlmKHBhdGgucGFyZW50KSB7XG4gICAgICAgIGlmIChwYXRoLnBhcmVudC5jb21wb25lbnQpIHtcbiAgICAgICAgICByZXR1cm4gcGF0aC5wYXJlbnQuY29tcG9uZW50Ll9fc2NvcGUuX190cmFuc2l0aW9uLnBhdGg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uKHBhdGgucGFyZW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5fX3Njb3BlLl9fdHJhbnNpdGlvbiA9IHtcbiAgICAgIHBhdGg6IHtcbiAgICAgICAgc3RhdGU6IHN0YXRlLm5hbWUsXG4gICAgICAgIGRhdGE6IHRyYW5zaXRpb24ucGF0aC5kYXRhLFxuICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgcGFyZW50OiBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24odHJhbnNpdGlvbi5wYXRoKVxuICAgICAgfSxcbiAgICAgIHBhcmFtczogdHJhbnNpdGlvbi5wYXJhbXMsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIHF1ZXJ5OiBxdWVyeVxuICAgIH07XG5cbiAgICBpZighdHJhbnNpdGlvbi5wYXRoLmxvYWRlZCkge1xuICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLnRlbXBsYXRlKSB7XG4gICAgICB0aGlzLmVtcHR5KCk7XG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9IGA8Y29tcG9uZW50PiR7c3RhdGUudGVtcGxhdGV9PC9jb21wb25lbnQ+YDtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUudGVtcGxhdGVVcmwpIHtcbiAgICAgIHAgPSByZXF1ZXN0LmdldChzdGF0ZS50ZW1wbGF0ZVVybCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHRoaXMuZW1wdHkoKTtcbiAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBgPGNvbXBvbmVudD4ke3Jlcy5kYXRhfTwvY29tcG9uZW50PmA7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcC50aGVuKCgpID0+IHtcbiAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgIH0pO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvcm91dGUuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBlbCwgY29tcG9uZW50KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmVsID0gZWw7XG4gICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciB0aGUgZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIHsqfSBkYXRhIC0gc2VuZGluZyBkYXRhLiBXaWxsIGJlIGluIHRoZSBldmVudC5kZXRhaWxcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZV1cbiAgICovXG4gIHRyaWdnZXIoZGF0YSwgb3B0aW9ucyA9IHt9LCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgaWYoZm9yY2UgfHwgIXRoaXMuaW5FdmFsdWF0aW5nKCkpIHtcbiAgICAgIHRoaXMuZWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQodGhpcy5uYW1lLCB7ZGV0YWlsOiBkYXRhLCAuLi5vcHRpb25zfSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaCB0aGUgZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gX0V2ZW50IC0gY2xhc3Mgb2YgdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdXG4gICAqL1xuICBkaXNwYXRjaChfRXZlbnQsIG9wdGlvbnMgPSB7fSwgZm9yY2UgPSBmYWxzZSkge1xuICAgIGlmKGZvcmNlIHx8ICF0aGlzLmluRXZhbHVhdGluZygpKSB7XG4gICAgICB0aGlzLmVsLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudCh0aGlzLm5hbWUsIG9wdGlvbnMpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgZXZlbnQgY2FsbGJhY2sgZG9lc24ndCBydW4gcmVjdXJzaXZlXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaW5FdmFsdWF0aW5nKCkge1xuICAgIGxldCBkYXRhID0gdGhpcy5jb21wb25lbnQuX19ldmFsdWF0aW5nRXZlbnQ7XG5cbiAgICBpZighZGF0YSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhLmVsID09PSB0aGlzLmVsICYmIGRhdGEuZXZlbnQudHlwZSA9PT0gdGhpcy5uYW1lICYmIGRhdGEuY29tcG9uZW50ID09PSB0aGlzLmNvbXBvbmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIHRoZSBmdW5jdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICAgKi9cbiAgYmluZChmbikge1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMuZm4gPSBmbik7XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIHRoZSBmdW5jdGlvblxuICAgKi9cbiAgdW5iaW5kKCkge1xuICAgIHRoaXMuZm4gJiYgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubmFtZSwgdGhpcy5mbik7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXZlbnQtZW1pdHRlci5qcyIsImltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9yZXF1ZXN0LmpzJztcbmltcG9ydCBSb3V0ZSBmcm9tICcuLi9jb21wb25lbnRzL3JvdXRlLmpzJztcblxuZXhwb3J0IGNsYXNzIFRyYW5zaXRpb24ge1xuICBjb25zdHJ1Y3Rvcih1cmwsIHF1ZXJ5LCBoYXNoID0gJycsIHByZXZpb3VzID0gbnVsbCkge1xuICAgIHRoaXMudXJsID0gdXJsO1xuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICB0aGlzLmhhc2ggPSBoYXNoO1xuICAgIHRoaXMucHJldmlvdXMgPSBwcmV2aW91cztcbiAgICB0aGlzLnBhdGggPSBudWxsO1xuICAgIHRoaXMucm91dGVzID0gW107XG4gICAgdGhpcy5zdGF0ZXMgPSBbXTtcbiAgICB0aGlzLnBhcmFtcyA9IHt9O1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHJlZGlyZWN0KCkge1xuICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgcm91dGVyLnN0YXRlLmFwcGx5KHJvdXRlciwgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHNldFBhdGgocGF0aCkge1xuICAgIHBhdGgucGFyZW50ID0gdGhpcy5wYXRoIHx8IG51bGw7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB0aGlzLnJvdXRlcy5wdXNoKHBhdGgpO1xuICAgIHRoaXMuc3RhdGVzLnB1c2gocGF0aC5zdGF0ZSk7XG4gICAgdGhpcy5wYXJhbXMgPSAhcGF0aC5wYXJlbnQ/IHBhdGgucGFyYW1zOiB7Li4ucGF0aC5wYXJlbnQucGFyYW1zLCAuLi5wYXRoLnBhcmFtc307XG4gIH1cblxuICBnZXRSb3V0ZShzdGF0ZSkge1xuICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLnJvdXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByb3V0ZSA9IHRoaXMucm91dGVzW2ldO1xuXG4gICAgICBpZihyb3V0ZS5zdGF0ZSA9PT0gc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHJvdXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaGFzU3RhdGUoc3RhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZXMuaW5kZXhPZihzdGF0ZSkgIT0gLTE7XG4gIH1cblxuICBjYW5jZWwoKSB7XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IHRydWU7XG4gIH1cbn1cblxuY29uc3Qgcm91dGVyID0ge307XG5cbnJvdXRlci5iYXNlVXJsID0gXCIvXCI7XG5yb3V0ZXIuc3RhdGVzID0gW107XG5yb3V0ZXIuaGFzaE1vZGUgPSB0cnVlO1xucm91dGVyLl9fcmVkaXJlY3RzID0gMDtcbnJvdXRlci5fX2luaXQgPSBmYWxzZTtcbnJvdXRlci5fX29wdGlvbnMgPSB7fTtcbnJvdXRlci5fX3BhcmFtUmVnZXggPSAvKDooW1xcd1xcZC1dKykpL2c7XG5yb3V0ZXIuX19yb3V0ZVNlbGVjdG9yID0gYyA9PiBjIGluc3RhbmNlb2YgUm91dGU7XG5cbi8qKlxuICogQWRkIG5ldyBzdGF0ZSB0byB0aGUgcm91dGVyXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzdGF0ZSBuYW1lLiBUbyBzZXQgcGFyZW50cyB5b3UgY2FuIHVzZSBkb3QsIGUuZy4gJ2FwcC5hcnRpY2xlLmVkaXQnXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVybiAtIHVybCBwYXR0ZXJuIGxpa2UgJ2FwcC9hcnRpY2xlLzppZCdcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtyb3V0ZXJ9XG4gKi9cbnJvdXRlci5hZGQgPSBmdW5jdGlvbiAobmFtZSwgcGF0dGVybiwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICB0ZW1wbGF0ZTogJycsXG4gICAgdGVtcGxhdGVVcmw6ICcnLFxuICAgIGFic3RyYWN0OiBmYWxzZSxcbiAgICBoYW5kbGVyOiAodHJhbnNpdGlvbikgPT4ge31cbiAgfTtcblxuICBpZighb3B0aW9ucy50ZW1wbGF0ZSAmJiAhb3B0aW9ucy50ZW1wbGF0ZVVybCkge1xuICAgIG9wdGlvbnMuYWJzdHJhY3QgPSB0cnVlO1xuICB9XG5cbiAgaWYodGhpcy5oYXMobmFtZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBcIiR7bmFtZX1cIiBpcyBhbHJlYWR5IGV4aXN0c2ApXG4gIH1cblxuICB0aGlzLnNldFN0YXRlKG5hbWUsIHBhdHRlcm4sIHsuLi5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9uc30pO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgc3RhdGUgZnJvbSB0aGUgbGlzdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnJvdXRlci5yZW1vdmUgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZih0aGlzLnN0YXRlc1tpXS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHRoaXMuc3RhdGVzLnNwbGljZShpLCAxKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBDaGVjayBzdGF0ZSBleGlzdHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnJvdXRlci5oYXMgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZih0aGlzLnN0YXRlc1tpXS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHRoZSBzdGF0ZSB0byB0aGUgcGFzc2VkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzdGF0ZSBuYW1lXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gLSBwYXJhbXMgZm9yIHN0YXRlIHtpZDogMX0gPT4gJy9hcHAvOmlkJyA9PiAnL2FwcC8xJ1xuICogQHBhcmFtIHtvYmplY3R9IFtxdWVyeV0gLSBxdWVyeSB7eDogMX0gPT4gJy9hcHAvP3g9MSdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbaGFzaF1cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqL1xucm91dGVyLnN0YXRlID0gZnVuY3Rpb24gKG5hbWUsIHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gJycsIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgc3RhdGUgPSB0aGlzLmdldFN0YXRlKG5hbWUpO1xuXG4gIGlmICghc3RhdGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCByb3V0ZSBzdGF0ZSB3aXRoIG5hbWUgJHtuYW1lfWApO1xuICB9XG5cbiAgbGV0IHVybCA9IHRoaXMuY3JlYXRlU3RhdGVVcmwoc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gpO1xuXG4gIGlmKCFvcHRpb25zLnJlbG9hZCAmJiB1cmwgPT09IHRoaXMuZ2V0VXJsKCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLl9fb3B0aW9ucyA9IG9wdGlvbnM7XG4gIHRoaXMuc2V0VXJsKHVybCk7XG59O1xuXG4vKipcbiAqIEdvIGJhY2tcbiAqL1xucm91dGVyLmJhY2sgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LmJhY2suYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIEdvIHRvIGFueSB3YXlcbiAqL1xucm91dGVyLmdvID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeS5nby5hcHBseSh3aW5kb3cuaGlzdG9yeSwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogR28gZm9yd2FyZFxuICovXG5yb3V0ZXIuZm9yd2FyZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkuZm9yd2FyZC5hcHBseSh3aW5kb3cuaGlzdG9yeSwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHN0YXRlIGJ5IHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqL1xucm91dGVyLmxvY2F0aW9uID0gZnVuY3Rpb24odXJsLCBvcHRpb25zID0geyByZWxvYWQ6IGZhbHNlIH0pIHtcbiAgdGhpcy5fX29wdGlvbnMgPSBvcHRpb25zO1xuXG4gIGlmKHRoaXMuaGFzaE1vZGUpIHtcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHVybDtcbiAgfVxuICBlbHNlIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgJycsIHVybCk7XG4gIH1cbn07XG5cbi8qKlxuICogUm91dGVyIGluaXRpYWxpemF0aW9uLiBTaG91bGQgYmUgY2FsbGVkIGJlZm9yZSBBa2lsaS5pbml0KClcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW2RlZmF1bHRVcmxdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtoYXNoTW9kZT10cnVlXVxuICovXG5yb3V0ZXIuaW5pdCA9IGZ1bmN0aW9uIChkZWZhdWx0VXJsID0gJycsIGhhc2hNb2RlID0gdHJ1ZSkge1xuICBsZXQgb2xkUHVzaFN0YXRlID0gd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlO1xuXG4gIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCByZXMgPSBvbGRQdXNoU3RhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIHJvdXRlci5jaGFuZ2VTdGF0ZSgpLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7O1xuXG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICB0aGlzLl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5jaGFuZ2VTdGF0ZSgpLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7O1xuICB9O1xuXG4gIHRoaXMuZGVmYXVsdFVybCA9IGRlZmF1bHRVcmw7XG4gIHRoaXMuaGFzaE1vZGUgPSBoYXNoTW9kZTtcblxuICB0aGlzLnN0YXRlcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgYSA9IGEubmFtZS5zcGxpdCgnLicpLmxlbmd0aDtcbiAgICBiID0gYi5uYW1lLnNwbGl0KCcuJykubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGEgLSBiO1xuICB9KTtcblxuICBsZXQgc3RhdGVzID0ge307XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcbiAgICBsZXQgcGFyZW50cyA9IFtdO1xuXG4gICAgc3RhdGVzW3N0YXRlLm5hbWVdID0gc3RhdGU7XG4gICAgc3RhdGUuY2hpbGRyZW4gPSBbXTtcbiAgICBwYXJlbnRzID0gc3RhdGUubmFtZS5zcGxpdCgnLicpO1xuICAgIHBhcmVudHMucG9wKCk7XG4gICAgc3RhdGUubGV2ZWwgPSBzdGF0ZS5hYnN0cmFjdD8gbnVsbDogcGFyZW50cy5sZW5ndGg7XG5cbiAgICBpZiAocGFyZW50cy5sZW5ndGgpIHtcbiAgICAgIGxldCBwYXJlbnROYW1lID0gcGFyZW50cy5qb2luKCcuJyk7XG4gICAgICBsZXQgcGFyZW50ID0gc3RhdGVzW3BhcmVudE5hbWVdO1xuXG4gICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCBwYXJlbnQgcm91dGUgc3RhdGUgXCIke3BhcmVudE5hbWV9XCIgZm9yIFwiJHtzdGF0ZS5uYW1lfVwiYClcbiAgICAgIH1cblxuICAgICAgaWYoc3RhdGUubGV2ZWwgIT09IG51bGwgJiYgcGFyZW50LmFic3RyYWN0KSB7XG4gICAgICAgIHN0YXRlLmxldmVsLS07XG4gICAgICB9XG5cbiAgICAgIHN0YXRlLmZ1bGxQYXR0ZXJuID0gdGhpcy5zcGxpdFNsYXNoZXMocGFyZW50LmZ1bGxQYXR0ZXJuICsgJy8nICsgc3RhdGUucGF0dGVybik7XG4gICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaChzdGF0ZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc3RhdGUuZnVsbFBhdHRlcm4gPSBzdGF0ZS5wYXR0ZXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmKCF0aGlzLnN0YXRlcy5sZW5ndGggJiYgQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgIGNvbnNvbGUud2FybihgWW91IGRpZG4ndCBhZGQgYW55IHJvdXRlcyB0byB0aGUgcm91dGVyYCk7XG4gIH1cblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIpO1xuICB0aGlzLl9faW5pdCA9IHRydWU7XG59O1xuXG4vKipcbiAqIEdldCBzdGF0ZSBieSBuYW1lXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAqL1xucm91dGVyLmdldFN0YXRlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogU2V0IHN0YXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXR0ZXJuXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICovXG5yb3V0ZXIuc2V0U3RhdGUgPSBmdW5jdGlvbiAobmFtZSwgcGF0dGVybiwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBzdGF0ZSA9IHsuLi5vcHRpb25zLCBuYW1lLCBwYXR0ZXJufTtcblxuICByb3V0ZXIuc3RhdGVzLnB1c2goc3RhdGUpO1xuXG4gIHJldHVybiBzdGF0ZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIHN0YXRlIGJ5IG5hbWVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5yb3V0ZXIucmVtb3ZlU3RhdGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLm5hbWUgPT0gbmFtZSkge1xuICAgICAgdGhpcy5zdGF0ZXMuc3BsaWNlKGksIDEpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFNldCB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKi9cbnJvdXRlci5zZXRVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHRoaXMuaGFzaE1vZGU/IHRoaXMuc2V0SGFzaFVybCh1cmwpOiB0aGlzLnNldEhpc3RvcnlVcmwodXJsKTtcbn07XG5cbi8qKlxuICogU2V0IHVybCB1c2luZyBoaXN0b3J5XG4gKlxuICogQHBhcmFtIHVybFxuICovXG5yb3V0ZXIuc2V0SGlzdG9yeVVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsICcnLCB1cmwpO1xufTtcblxuLyoqXG4gKiBTZXQgdXJsIHVzaW5nIGhhc2hcbiAqXG4gKiBAcGFyYW0gdXJsXG4gKi9cbnJvdXRlci5zZXRIYXNoVXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjJyArICh1cmwgfHwgJy8nKTtcbn07XG5cbi8qKlxuICogR2V0IHVybFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmhhc2hNb2RlID8gdGhpcy5nZXRIYXNoVXJsKCkgOiB0aGlzLmdldEhpc3RvcnlVcmwoKTtcbn07XG5cbi8qKlxuICogR2V0IHVybCB1c2luZyBoaXN0b3J5XG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLmdldEhpc3RvcnlVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoICsgd2luZG93LmxvY2F0aW9uLmhhc2g7XG59O1xuXG4vKipcbiAqIEdldCB1cmwgdXNpbmcgaGFzaFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRIYXNoVXJsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgvXiMvLCAnJyk7XG59O1xuXG4vKipcbiAqIEdldCBxdWVyeSBwYXJhbXNcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0VXJsUXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuaGFzaE1vZGUgPyB0aGlzLmdldEhhc2hVcmxRdWVyeSgpIDogdGhpcy5nZXRIaXN0b3J5VXJsUXVlcnkoKTtcbn07XG5cbi8qKlxuICogR2V0IHF1ZXJ5IHBhcmFtcyB1c2luZyBoaXN0b3J5XG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldEhpc3RvcnlVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcmVxdWVzdC5wYXJhbXNGcm9tUXVlcnkod2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpKTtcbn07XG5cbi8qKlxuICogR2V0IHF1ZXJ5IHBhcmFtcyB1c2luZyBoYXNoXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldEhhc2hVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcmVxdWVzdC5wYXJhbXNGcm9tUXVlcnkoKHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCc/JylbMV0gfHwgJycpKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIHVybCBieSBkYXRhXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdXG4gKiBAcGFyYW0ge29iamVjdH0gW3F1ZXJ5XVxuICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoXVxuICovXG5yb3V0ZXIuY3JlYXRlU3RhdGVVcmwgPSBmdW5jdGlvbiAoc3RhdGUsIHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gJycpIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG5cbiAgbGV0IHVybCA9IHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2UodGhpcy5fX3BhcmFtUmVnZXgsIChtLCBmLCB2KSA9PiB7XG4gICAgcmV0dXJuIHBhcmFtc1t2XSB8fCAnJztcbiAgfSk7XG5cbiAgdXJsID0gdGhpcy5zcGxpdFNsYXNoZXModXJsKTtcblxuICBpZihPYmplY3Qua2V5cyhxdWVyeSkubGVuZ3RoKSB7XG4gICAgdXJsICs9ICc/JyArIHJlcXVlc3QucGFyYW1zVG9RdWVyeShxdWVyeSk7XG4gIH1cblxuICBoYXNoID0gKGhhc2ggfHwgJycpLnJlcGxhY2UoJyMnLCAnJyk7XG5cbiAgaWYoIXRoaXMuaGFzaE1vZGUgJiYgaGFzaCkge1xuICAgIHVybCArPSAnIycgKyBoYXNoO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCB1bm5lY2Vzc2FyeSBzbGFzaGVzIGZyb20gYW4gdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLnNwbGl0U2xhc2hlcyA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgcmV0dXJuIHVybC5yZXBsYWNlKC9bXFwvXSsvZywgJy8nKTtcbn07XG5cbi8qKlxuICogQ2xlYXIgYWxsIHJvdXRlciBkZXBlbmRlbmNpZXNcbiAqL1xucm91dGVyLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIpO1xufTtcblxuLyoqXG4gKiBHZXQgc3RhdGUgdXJsIGNvbnRlbnRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0UGF0dGVybkNvbnRlbnQgPSBmdW5jdGlvbiAoc3RhdGUsIHVybCkge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcblxuICBsZXQga2V5cyA9IFtdO1xuICBsZXQgaSA9IDA7XG4gIGxldCBwYXJhbXMgPSB7fTtcblxuICB1cmwgPSB1cmwuc3BsaXQoJz8nKVswXTtcbiAgdXJsID0gdXJsLnNwbGl0KCcjJylbMF07XG5cbiAgbGV0IHVybFBhdHRlcm4gPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAobSwgZiwgdikgPT4ge1xuICAgIGtleXMucHVzaCh2KTtcblxuICAgIHJldHVybiAnKFteXFxcXC9dKiknO1xuICB9KTtcblxuICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKHVybFBhdHRlcm4pO1xuICBsZXQgaXNJbmNsdWRlZCA9IHVybC5tYXRjaChyZWdleCk7XG5cbiAgaWYgKCFpc0luY2x1ZGVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB1cmwucmVwbGFjZShyZWdleCwgKG0sIHYpID0+IHtcbiAgICB2ICYmIChwYXJhbXNba2V5c1tpXV0gPSB2KTtcbiAgICBpKys7XG4gIH0pO1xuXG4gIHJldHVybiB7IHBhcmFtcyB9O1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgc3RhdGUgaXMgYWN0aXZlIG5vd1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5jbHVkZXNcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaXNBY3RpdmVTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlLCBpbmNsdWRlcyA9IGZhbHNlKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuXG4gIGxldCB1cmwgPSB0aGlzLnNwbGl0U2xhc2hlcyh0aGlzLmdldFVybCgpLnNwbGl0KCc/JylbMF0gKyAnLycpO1xuICBsZXQgdXJsUGF0dGVybiA9IHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2UodGhpcy5fX3BhcmFtUmVnZXgsICcoW15cXFxcL10qKScpO1xuICBsZXQgc3RyID0gaW5jbHVkZXM/IHVybFBhdHRlcm46IHRoaXMuc3BsaXRTbGFzaGVzKCdeJyArIHVybFBhdHRlcm4gKyAnXFwvJCcpO1xuICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKHN0cik7XG5cbiAgcmV0dXJuIHJlZ2V4LnRlc3QodXJsKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIGN1cnJlbnQgdXJsIGluY2x1ZGVzIGEgc3RhdGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmluQWN0aXZlU3RhdGUgPSBmdW5jdGlvbihzdGF0ZSkge1xuICByZXR1cm4gcm91dGVyLmlzQWN0aXZlU3RhdGUoc3RhdGUsIHRydWUpO1xufTtcblxuLyoqXG4gKiBHZXQgcm91dGUgY29tcG9uZW50IGJ5IGxldmVsXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxldmVsXG4gKi9cbnJvdXRlci5nZXRSb3V0ZSA9IGZ1bmN0aW9uIChsZXZlbCkge1xuICBsZXQgaSA9IDA7XG5cbiAgbGV0IGZpbmQgPSAoZWwpID0+IHtcbiAgICBsZXQgcm91dGUgPSBlbC5jaGlsZCh0aGlzLl9fcm91dGVTZWxlY3Rvcik7XG5cbiAgICBpZiAoIXJvdXRlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoaSA9PSBsZXZlbCkge1xuICAgICAgcmV0dXJuIHJvdXRlO1xuICAgIH1cblxuICAgIGkrKztcblxuICAgIHJldHVybiBmaW5kKHJvdXRlKTtcbiAgfTtcblxuICByZXR1cm4gZmluZChBa2lsaS5yb290KTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBmaXJzdCBtYXRjaFxuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGFyclxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge29iamVjdHxudWxsfVxuICovXG5yb3V0ZXIuZ2V0QXJyYXlQYXR0ZXJuQ29udGVudCA9IGZ1bmN0aW9uIChhcnIsIHVybCkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSBhcnJbaV07XG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldFBhdHRlcm5Db250ZW50KHN0YXRlLCB1cmwpO1xuXG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge3N0YXRlOiBzdGF0ZSwgLi4uY29udGVudH07XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogR2V0IHN0YXRlcyBieSBsZXZlbFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZXZlbFxuICogQHJldHVybnMge0FycmF5fVxuICovXG5yb3V0ZXIuZ2V0U3RhdGVzQnlMZXZlbCA9IGZ1bmN0aW9uIChsZXZlbCkge1xuICBsZXQgc3RhdGVzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZS5sZXZlbCA8IGxldmVsKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc3RhdGUubGV2ZWwgPiBsZXZlbCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgc3RhdGVzLnB1c2goc3RhdGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlcztcbn07XG5cbi8qKlxuICogQ2hhbmdlIHN0YXRlXG4gKi9cbnJvdXRlci5jaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYodGhpcy5fX2Rpc2FibGVDaGFuZ2UpIHtcbiAgICBkZWxldGUgdGhpcy5fX2Rpc2FibGVDaGFuZ2U7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgdXJsID0gdGhpcy5nZXRVcmwoKTtcbiAgbGV0IGhhc2ggPSB0aGlzLmhhc2hNb2RlPyAnJzogd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTtcbiAgbGV0IHF1ZXJ5ID0gdGhpcy5nZXRVcmxRdWVyeSgpO1xuICBsZXQgcHJldlRyYW5zaXRpb24gPSByb3V0ZXIudHJhbnNpdGlvbiB8fCBudWxsO1xuICBsZXQgdHJhbnNpdGlvbiA9IHJvdXRlci50cmFuc2l0aW9uID0gbmV3IFRyYW5zaXRpb24odXJsLCBxdWVyeSwgaGFzaCwgcHJldlRyYW5zaXRpb24pO1xuICBsZXQgbGV2ZWwgPSAwO1xuXG4gIGxldCBuZXh0ID0gKHN0YXRlcywgb25FbmQpID0+IHtcbiAgICBpZiAoIXN0YXRlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBvbkVuZCAmJiBvbkVuZCgpO1xuICAgIH1cblxuICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRBcnJheVBhdHRlcm5Db250ZW50KHN0YXRlcywgdXJsKTtcblxuICAgIGlmICghY29udGVudCkge1xuICAgICAgcmV0dXJuIG9uRW5kICYmIG9uRW5kKCk7XG4gICAgfVxuXG4gICAgbGV0IHN0YXRlID0gY29udGVudC5zdGF0ZTtcbiAgICBsZXQgcGFyYW1zID0gY29udGVudC5wYXJhbXM7XG4gICAgbGV0IHJvdXRlID0gc3RhdGUuYWJzdHJhY3Q/IG51bGw6IHRoaXMuZ2V0Um91dGUoc3RhdGUubGV2ZWwpO1xuXG4gICAgaWYgKCFyb3V0ZSAmJiAhc3RhdGUuYWJzdHJhY3QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvciAoYE5vdCBmb3VuZCByb3V0ZSBjb21wb25lbnQgZm9yIHN0YXRlIFwiJHtzdGF0ZS5uYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgdHJhbnNpdGlvbi5zZXRQYXRoKHsgc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gsIGNvbXBvbmVudDogcm91dGUsIGxvYWRlZDogdHJ1ZSB9KTtcbiAgICBsZXZlbCsrO1xuXG4gICAgbGV0IGhhc1N0YXRlID0gcHJldlRyYW5zaXRpb24gJiYgcHJldlRyYW5zaXRpb24uaGFzU3RhdGUoc3RhdGUpO1xuICAgIGxldCBpc0RpZmZlcmVudCA9IHRydWU7XG5cbiAgICBpZihoYXNTdGF0ZSkge1xuICAgICAgbGV0IHJvdXRlID0gcHJldlRyYW5zaXRpb24uZ2V0Um91dGUoc3RhdGUpO1xuICAgICAgbGV0IHByZXYgPSB7IHBhcmFtczogcm91dGUucGFyYW1zLCBxdWVyeTogcm91dGUucXVlcnksIGhhc2g6IHJvdXRlLmhhc2ggfTtcbiAgICAgIGxldCBjdXJyZW50ID0geyBwYXJhbXMsIHF1ZXJ5LCBoYXNoIH07XG5cbiAgICAgIGlzRGlmZmVyZW50ID0gIXV0aWxzLmNvbXBhcmUocHJldiwgY3VycmVudCk7XG4gICAgfVxuXG4gICAgbGV0IGlzSGlzdG9yeSA9IHRoaXMuX19vcHRpb25zLnJlbG9hZCA9PT0gdW5kZWZpbmVkICYmICFpc0RpZmZlcmVudDtcbiAgICBsZXQgaXNSZWxvYWQgPSB0aGlzLl9fb3B0aW9ucy5yZWxvYWQgPT09IGZhbHNlO1xuXG4gICAgdHJhbnNpdGlvbi5wYXRoLmxvYWRlZCA9ICEoaGFzU3RhdGUgJiYgKGlzSGlzdG9yeSB8fCBpc1JlbG9hZCkpO1xuXG4gICAgUHJvbWlzZS5yZXNvbHZlKHN0YXRlLmhhbmRsZXIodHJhbnNpdGlvbikpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmICh0cmFuc2l0aW9uLl9fY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBvbkVuZCAmJiBvbkVuZCgpO1xuICAgICAgfVxuXG4gICAgICB0cmFuc2l0aW9uLnBhdGguZGF0YSA9IGRhdGE7XG5cbiAgICAgIGlmKHN0YXRlLmFic3RyYWN0KSB7XG4gICAgICAgIHJldHVybiBuZXh0KHN0YXRlLmNoaWxkcmVuLCBvbkVuZCk7XG4gICAgICB9XG4gXG4gICAgICByb3V0ZS5zZXRUcmFuc2l0aW9uKHRyYW5zaXRpb24pLnRoZW4oKCkgPT4ge1xuICAgICAgICBuZXh0KHN0YXRlLmNoaWxkcmVuLCBvbkVuZCk7XG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiBvbkVuZCAmJiBvbkVuZChlcnIpKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIG5leHQodGhpcy5nZXRTdGF0ZXNCeUxldmVsKDApLCAoZXJyKSA9PiB7XG4gICAgICBpZihlcnIpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgfVxuXG4gICAgICBpZighdHJhbnNpdGlvbi5yb3V0ZXMubGVuZ3RoKSB7XG4gICAgICAgIGlmKHRoaXMuX19yZWRpcmVjdHMpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihgV3Jvbmcgcm91dGVyIGRlZmF1bHQgdXJsIFwiJHt0aGlzLmRlZmF1bHRVcmx9XCJgKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmRlZmF1bHRVcmwpIHtcbiAgICAgICAgICBpZih0aGlzLmRlZmF1bHRVcmwgPT0gdGhpcy5nZXRVcmwoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYE5vdCBmb3VuZCBhbnkgcm91dGVzYCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuaGFzaE1vZGUgJiYgKHRoaXMuX19kaXNhYmxlQ2hhbmdlID0gdHJ1ZSk7XG4gICAgICAgICAgdGhpcy5zZXRVcmwodGhpcy5kZWZhdWx0VXJsKTtcbiAgICAgICAgICB0aGlzLl9fcmVkaXJlY3RzKys7XG5cbiAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2VTdGF0ZSgpLnRoZW4ocmVzb2x2ZSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYE5vdCBmb3VuZCBhIGRlZmF1bHQgcm91dGUuIFlvdSBjYW4gcGFzcyBpdCBpbiBcInJvdXRlci5pbml0KGRlZmF1bHRVcmwpXCIgZnVuY3Rpb25gKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZighdGhpcy5fX29wdGlvbnMuc2F2ZVNjcm9sbFBvc2l0aW9uICYmICF0cmFuc2l0aW9uLmhhc2gpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgPSAwO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9fb3B0aW9ucyA9IHt9O1xuICAgICAgdGhpcy5fX3JlZGlyZWN0cyA9IDA7XG5cbiAgICAgIGlmKHByZXZUcmFuc2l0aW9uKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IGxldmVsLCBsID0gcHJldlRyYW5zaXRpb24ucm91dGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGxldCByb3V0ZSA9IHByZXZUcmFuc2l0aW9uLnJvdXRlc1tpXTtcbiAgICAgICAgICBcbiAgICAgICAgICByb3V0ZS5jb21wb25lbnQgJiYgcm91dGUuY29tcG9uZW50LmVtcHR5KCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzdGF0ZS1jaGFuZ2UnLCB7XG4gICAgICAgIGRldGFpbDogdHJhbnNpdGlvblxuICAgICAgfSkpO1xuXG4gICAgICByZXNvbHZlKCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxucm91dGVyLlRyYW5zaXRpb24gPSBUcmFuc2l0aW9uO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvcm91dGVyLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuLi9zZXJ2aWNlcy9yb3V0ZXIuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tzdGF0ZV06bm90KFt1cmxdKSxbdXJsXTpub3QoW3N0YXRlXSknO1xuICBzdGF0aWMgY29udHJvbEF0dHJpYnV0ZXMgPSB0cnVlO1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ3JlbG9hZCddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdhJywgQSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnN0YXRlID0gbnVsbDtcbiAgICB0aGlzLnBhcmFtcyA9IHt9O1xuICAgIHRoaXMucXVlcnkgPSB7fTtcbiAgICB0aGlzLmhhc2ggPSAnJztcbiAgICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgICB0aGlzLmlzVXJsID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3VybCcpO1xuICB9XG5cbiAgY2hhbmdlZFVybCh1cmwpIHtcbiAgICB0aGlzLnNldFVybCh1cmwpO1xuICAgIHRoaXMucmVzZXRIcmVmKHVybCk7XG4gIH1cblxuICBjaGFuZ2VkU3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICB0aGlzLnJlc2V0SHJlZigpO1xuICB9XG5cbiAgY2hhbmdlZFBhcmFtcyhwYXJhbXMpIHtcbiAgICB0aGlzLnNldFBhcmFtcyhwYXJhbXMpO1xuICAgIHRoaXMucmVzZXRIcmVmKCk7XG4gIH1cblxuICBjaGFuZ2VkUXVlcnkocXVlcnkpIHtcbiAgICB0aGlzLnNldFF1ZXJ5KHF1ZXJ5KTtcbiAgICB0aGlzLnJlc2V0SHJlZigpO1xuICB9XG5cbiAgY2hhbmdlZEhhc2gocXVlcnkpIHtcbiAgICB0aGlzLnNldEhhc2gocXVlcnkpO1xuICAgIHRoaXMucmVzZXRIcmVmKCk7XG4gIH1cblxuICBjaGFuZ2VkT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgdGhpcy5zZXRRdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIGNoYW5nZWRSZWxvYWQodmFsKSB7XG4gICAgdGhpcy5zZXRSZWxvYWQodmFsKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmKHRoaXMuaXNVcmwpIHtcbiAgICAgICAgcm91dGVyLmxvY2F0aW9uKHRoaXMuYXR0cnMudXJsLCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcm91dGVyLnN0YXRlKHRoaXMuc3RhdGUubmFtZSwgdGhpcy5wYXJhbXMsIHRoaXMucXVlcnksIHRoaXMuaGFzaCwgIHRoaXMub3B0aW9ucyk7XG4gICAgfSk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdzdGF0ZScpICYmIHRoaXMuc2V0U3RhdGUodGhpcy5hdHRycy5zdGF0ZSk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgncGFyYW1zJykgJiYgdGhpcy5zZXRQYXJhbXModGhpcy5hdHRycy5wYXJhbXMpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ3F1ZXJ5JykgJiYgdGhpcy5zZXRRdWVyeSh0aGlzLmF0dHJzLnF1ZXJ5KTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdoYXNoJykgJiYgdGhpcy5zZXRIYXNoKHRoaXMuYXR0cnMuaGFzaCk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgnb3B0aW9ucycpICYmIHRoaXMuc2V0T3B0aW9ucyh0aGlzLmF0dHJzLm9wdGlvbnMpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ3JlbG9hZCcpICYmIHRoaXMuc2V0UmVsb2FkKHRoaXMuYXR0cnMucmVsb2FkKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCd1cmwnKSAmJiB0aGlzLnNldFVybCh0aGlzLmF0dHJzLnVybCk7XG4gICAgdGhpcy5yZXNldEhyZWYodGhpcy51cmwpO1xuICB9XG5cbiAgc2V0VXJsKHVybCkge1xuICAgIHRoaXMudXJsID0gdXJsO1xuICB9XG5cbiAgc2V0U3RhdGUobmFtZSkge1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldFN0YXRlKG5hbWUpO1xuICAgIHRoaXMuc2NvcGUuaXNBY3RpdmVTdGF0ZSA9IHJvdXRlci5pc0FjdGl2ZVN0YXRlKHRoaXMuc3RhdGUpO1xuICAgIHRoaXMuc2NvcGUuaW5BY3RpdmVTdGF0ZSA9IHJvdXRlci5pbkFjdGl2ZVN0YXRlKHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgc2V0UGFyYW1zKHBhcmFtcykge1xuICAgIGlmKHR5cGVvZiBwYXJhbXMgIT0gJ29iamVjdCcgfHwgIXBhcmFtcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgcGFyYW1zIG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gIH1cblxuICBzZXRRdWVyeShxdWVyeSkge1xuICAgIGlmKHR5cGVvZiBxdWVyeSAhPSAnb2JqZWN0JyB8fCAhcXVlcnkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIHF1ZXJ5IG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICB9XG5cbiAgc2V0SGFzaChoYXNoKSB7XG4gICAgaWYodHlwZW9mIGhhc2ggIT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIGhhc2ggbXVzdCBiZSBhIHN0cmluZ2ApO1xuICAgIH1cblxuICAgIHRoaXMuaGFzaCA9IGhhc2g7XG4gIH1cblxuICBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICBpZih0eXBlb2Ygb3B0aW9ucyAhPSAnb2JqZWN0JyB8fCAhb3B0aW9ucykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgb3B0aW9ucyBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBzZXRSZWxvYWQodmFsKSB7XG4gICAgdGhpcy5vcHRpb25zLnJlbG9hZCA9IHZhbDtcbiAgfVxuXG4gIGdldFN0YXRlKG5hbWUpIHtcbiAgICBsZXQgc3RhdGUgPSByb3V0ZXIuZ2V0U3RhdGUobmFtZSk7XG5cbiAgICBpZighc3RhdGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIHJvdXRlciBzdGF0ZSB3aXRoIG5hbWUgXCIke25hbWV9XCJgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICByZXNldEhyZWYodXJsKSB7XG4gICAgaWYodXJsKSB7XG4gICAgICB0aGlzLmF0dHJzLmhyZWYgPSB1cmw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5hdHRycy5ocmVmID0gcm91dGVyLmNyZWF0ZVN0YXRlVXJsKHRoaXMuc3RhdGUsIHRoaXMucGFyYW1zLCB0aGlzLnF1ZXJ5LCB0aGlzLmhhc2gpO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2EuanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnYXVkaW8nLCBBdWRpbyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9hdWRpby5qcyIsImltcG9ydCBUZXh0IGZyb20gJy4vdGV4dC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50IGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdjb250ZW50JywgQ29udGVudCk7XG4gICAgQWtpbGkuYWxpYXMoJ1tjb250ZW50ZWRpdGFibGVdJywgJ2NvbnRlbnQnKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIGlmKHRoaXMuZWwuaGFzQXR0cmlidXRlKCdlZGl0YWJsZScpKSB7XG4gICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ2VkaXRhYmxlJykpO1xuICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoJ2VkaXRhYmxlJyk7XG4gICAgfVxuXG4gICAgaWYoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKS5kaXNwbGF5ID09ICdpbmxpbmUnKSB7XG4gICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIHRoaXMudmFsdWVLZXkgPSAnaW5uZXJIVE1MJztcbiAgfVxuXG4gIHNldEVsZW1lbnRGb2N1cygpIHtcbiAgICBsZXQgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIGxldCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG5cbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGhpcy5lbCk7XG4gICAgcmFuZ2UuY29sbGFwc2UoZmFsc2UpO1xuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2NvbnRlbnQuanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtYmVkIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnZW1iZWQnLCBFbWJlZCk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9lbWJlZC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogSWYgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElmIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gdHJ1ZTtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW2lzXSc7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsncmVjcmVhdGUnXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaWYnLCBJZik7XG4gICAgQWtpbGkuY29tcG9uZW50KCdlbHNlLWlmJywgRWxzZUlmKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2Vsc2UnLCBFbHNlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5zdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5yZWNyZWF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuaXNDb21waWxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGlzcGxheSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5lbCkuZGlzcGxheTtcbiAgfVxuXG4gIGNoYW5nZWRJcyh2YWx1ZSkge1xuICAgIHRoaXMuc3RhdGUgPSAhIXZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoKTtcbiAgfVxuXG4gIGNoYW5nZWRSZWNyZWF0ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0UmVjcmVhdGlvbih2YWx1ZSk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdyZWNyZWF0ZScpICYmIHRoaXMuc2V0UmVjcmVhdGlvbih0aGlzLmF0dHJzLnJlY3JlYXRlKTtcbiAgICB0aGlzLnN0YXRlID0gISF0aGlzLmF0dHJzLmlzO1xuICAgIHJldHVybiB0aGlzLnNldFN0YXRlKClcbiAgfVxuXG4gIHNldEFjdGl2aXR5KGFjdGl2ZSkge1xuICAgIHRoaXMuYWN0aXZlID0gYWN0aXZlO1xuICB9XG5cbiAgc2V0UmVjcmVhdGlvbihyZWNyZWF0ZSkge1xuICAgIHRoaXMucmVjcmVhdGUgPSByZWNyZWF0ZTtcbiAgfVxuXG4gIHNldFN0YXRlKCkge1xuICAgIGxldCByZXMgPSB0aGlzLmNvbXBpbGF0aW9uKCk7XG4gICAgbGV0IG5leHQgPSB0aGlzLmVsLm5leHRFbGVtZW50U2libGluZztcbiAgICBsZXQgcmVzdWx0O1xuXG4gICAgaWYoIW5leHQgfHwgIW5leHQubWF0Y2hlcygnZWxzZS1pZixlbHNlJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXh0Ll9fYWtpbGkuc2V0QWN0aXZpdHkodGhpcy5hY3RpdmUgfHwgdGhpcy5zdGF0ZSk7XG4gICAgbmV4dC5fX2FraWxpLnNldFJlY3JlYXRpb24odGhpcy5yZWNyZWF0ZSk7XG4gICAgcmVzdWx0ID0gbmV4dC5fX2FraWxpLnNldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcykudGhlbigoKSA9PiB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9XG5cbiAgY29tcGlsYXRpb24oKSB7XG4gICAgbGV0IHJlcztcblxuICAgIGlmKHRoaXMuc3RhdGUgJiYgIXRoaXMuYWN0aXZlKSB7XG4gICAgICBpZih0aGlzLnJlY3JlYXRlIHx8ICF0aGlzLmlzQ29tcGlsZWQpIHtcbiAgICAgICAgcmVzID0gdGhpcy5jb21waWxlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9IHRoaXMuZGlzcGxheTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZih0aGlzLnJlY3JlYXRlKSB7XG4gICAgICAgIHRoaXMuX19lbXB0eSgpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZighdGhpcy5pc0NvbXBpbGVkKSB7XG4gICAgICAgIHJlcyA9IHRoaXMuY29tcGlsZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgY29tcGlsZSgpIHtcbiAgICBsZXQgcmVzO1xuXG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XG4gICAgcmVzID0gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICB0aGlzLmlzQ29tcGlsZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxufTtcblxuLyoqXG4gKiBFbHNlSWYgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBFbHNlSWYgZXh0ZW5kcyBJZiB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIEVsc2UgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBFbHNlIGV4dGVuZHMgRWxzZUlmIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnaXMnLCAndHJ1ZScpO1xuICB9XG59XG5cbklmLkVsc2VJZiA9IEVsc2VJZjtcbklmLkVsc2UgPSBFbHNlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2lmLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZnJhbWUgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpZnJhbWUnLCBJZnJhbWUpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaWZyYW1lLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZSBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2ltZycsIEltYWdlKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2ltYWdlLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmNsdWRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gdHJ1ZTtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW3VybF0nO1xuICBzdGF0aWMgZXZlbnRzID0gWydsb2FkJywgJ2Vycm9yJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2luY2x1ZGUnLCBJbmNsdWRlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgfVxuXG4gIGNoYW5nZWRVcmwodXJsKSB7XG4gICAgdGhpcy5nZXRUZW1wbGF0ZSh1cmwpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGVtcGxhdGUodGhpcy5hdHRycy51cmwpO1xuICB9XG5cbiAgZ2V0VGVtcGxhdGUodXJsKSB7XG4gICAgdGhpcy5jb25uZWN0aW9uICYmIHRoaXMuY29ubmVjdGlvbi5hYm9ydCgpO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KHVybCwge1xuICAgICAgb25TdGFydDogKHhocikgPT4ge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSB4aHI7XG4gICAgICB9XG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgdGhpcy5lbXB0eSgpO1xuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XG4gICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCByZXMuZGF0YSk7XG5cbiAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uTG9hZC50cmlnZ2VyKCk7XG4gICAgICB9KTtcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICB0aGlzLmF0dHJzLm9uRXJyb3IudHJpZ2dlcihlcnIpO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaW5jbHVkZS5qcyIsImltcG9ydCBUZXh0IGZyb20gJy4vdGV4dC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCBleHRlbmRzIFRleHQge1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ2NoZWNrZWQnXTtcbiAgc3RhdGljIGV2ZW50cyA9IFsnY2hhbmdlJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2lucHV0JywgSW5wdXQpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pc0NoZWNrYm94ID0gdGhpcy5lbC50eXBlID09ICdjaGVja2JveCc7XG4gICAgdGhpcy5pc1JhZGlvID0gdGhpcy5lbC50eXBlID09ICdyYWRpbyc7XG4gIH1cblxuICBjaGFuZ2VkQ2hlY2tlZCh2YWx1ZSkge1xuICAgIHRoaXMuc2V0Q2hlY2tlZCh2YWx1ZSk7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgICh0aGlzLmlzUmFkaW8gfHwgdGhpcy5pc0NoZWNrYm94KSAmJiB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRDaGVja2VkKHRoaXMuZWwuY2hlY2tlZCwgZmFsc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzb2x2ZWQoKSB7XG4gICAgKHRoaXMuaXNDaGVja2JveCB8fCB0aGlzLmlzUmFkaW8pICYmIHRoaXMuc2V0Q2hlY2tlZCh0aGlzLmF0dHJzLmNoZWNrZWQpO1xuICB9XG5cbiAgc2V0Q2hlY2tlZCh2YWx1ZSwgdHJpZ2dlciA9IHRydWUpIHtcbiAgICB2YWx1ZSA9ICEhdmFsdWU7XG5cbiAgICBpZih0aGlzLnByZXZDaGVja2VkID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZWwuY2hlY2tlZCA9IHRoaXMucHJldkNoZWNrZWQgPSB2YWx1ZTtcbiAgICB0cmlnZ2VyICYmIHRoaXMuYXR0cnMub25DaGFuZ2UuZGlzcGF0Y2goRXZlbnQpO1xuICAgIHRoaXMuaXNSYWRpbyAmJiB0aGlzLmNoYW5nZVJhZGlvKCk7XG4gIH1cblxuICBzZXRWYWx1ZSgpIHtcbiAgICBzdXBlci5zZXRWYWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuaXNSYWRpbyAmJiB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50KTtcbiAgfVxuXG4gIGNoYW5nZVJhZGlvKCkge1xuICAgIGxldCBuYW1lID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICBsZXQgc2VsZWN0b3IgPSBgaW5wdXRbdHlwZT1yYWRpb11bbmFtZT0nJHtuYW1lfSddOm5vdChbc2NvcGU9JyR7dGhpcy5zY29wZS5fX25hbWV9J10pYDtcbiAgICBsZXQgY2hpbGRyZW4gPSBBa2lsaS5yb290LmNoaWxkcmVuKHNlbGVjdG9yKTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICByYWRpby5zZXRDaGVja2VkKHJhZGlvLmVsLmNoZWNrZWQpO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2lucHV0LmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3RzIGV4dGVuZHMgVXJsIHsgIFxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnVybEF0dHJpYnV0ZSA9ICdkYXRhJztcbiAgfVxuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdvYmplY3QnLCBPYmplY3RzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL29iamVjdC5qcyIsImltcG9ydCBGb3IsIHsgTG9vcCB9IGZyb20gJy4vZm9yLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogVGhlIHJhZGlvIGdyb3VwIGNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWRpbyBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tuYW1lXSc7XG4gIHN0YXRpYyBldmVudHMgPSBbJ3JhZGlvJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JhZGlvJywgUmFkaW8pO1xuICAgIEFraWxpLmNvbXBvbmVudCgncmFkaW8tYnV0dG9uJywgUmFkaW9CdXR0b24pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pdGVyYWJsZSA9IHRoaXMuZWwuaGFzQXR0cmlidXRlKCdpbicpO1xuICB9XG5cbiAgY2hhbmdlZEluKHZhbHVlKSB7XG4gICAgc3VwZXIuY2hhbmdlZEluLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5zZXROYW1lcyh0aGlzLmF0dHJzLm5hbWUpO1xuICB9XG5cbiAgY2hhbmdlZE5hbWUobmFtZSkge1xuICAgIHRoaXMuc2V0TmFtZXMobmFtZSk7XG4gIH1cblxuICBjaGFuZ2VkVmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5pdGVyYWJsZSAmJiBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLmdldFJhZGlvVmFsdWUoKTtcblxuICAgICAgICBpZih2YWx1ZSA9PT0gdGhpcy5wcmV2VmFsdWUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByZXZWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmF0dHJzLm9uUmFkaW8udHJpZ2dlcih2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc29sdmVkKCkge1xuICAgIHRoaXMuc2V0TmFtZXModGhpcy5hdHRycy5uYW1lKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCd2YWx1ZScpICYmIHRoaXMuc2V0VmFsdWUodGhpcy5hdHRycy52YWx1ZSk7XG4gIH1cblxuICBzZXROYW1lcyhuYW1lKSB7XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbignaW5wdXRbdHlwZT1yYWRpb10nKTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNoaWxkcmVuW2ldLmVsLnNldEF0dHJpYnV0ZSgnbmFtZScsIG5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgaWYodmFsdWUgPT09IHRoaXMucHJldlZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHByZXYgPSB0aGlzLnByZXZWYWx1ZTtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuICAgIGxldCBpc1RydWUgPSBmYWxzZTtcblxuICAgIHRoaXMucHJldlZhbHVlID0gdmFsdWU7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcmFkaW8gPSBjaGlsZHJlbltpXTtcbiAgICAgIGxldCBpc1NlbGVjdGVkID0gcmFkaW8uZWwudmFsdWUgPT09IHZhbHVlO1xuXG4gICAgICBpc1NlbGVjdGVkICYmIChpc1RydWUgPSB0cnVlKTtcbiAgICAgIHJhZGlvLnNldENoZWNrZWQoaXNTZWxlY3RlZCk7XG4gICAgfVxuXG4gICAgaWYoIWlzVHJ1ZSkge1xuICAgICAgaWYodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgaWYocHJldiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmF0dHJzLm9uUmFkaW8udHJpZ2dlcih2YWx1ZSk7XG4gIH1cblxuICBnZXRSYWRpb1ZhbHVlKCkge1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oJ2lucHV0W3R5cGU9cmFkaW9dJyk7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcmFkaW8gPSBjaGlsZHJlbltpXTtcblxuICAgICAgaWYocmFkaW8uZWwuY2hlY2tlZCkge1xuICAgICAgICByZXR1cm4gcmFkaW8uZWwudmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogVGhlIHJhZGlvIGl0ZW0gY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBSYWRpb0J1dHRvbiBleHRlbmRzIExvb3Age1xuICBzdGF0aWMgdGVtcGxhdGUgPSBgPGxhYmVsPjxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIlxcJHt0aGlzLnZhbHVlfVwiLz5cXCR7dGhpcy5fX2NvbnRlbnR9PC9sYWJlbD5gO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxuXG4gIGNoYW5nZWRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0UmFkaW9WYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLnNldFJhZGlvVmFsdWUodGhpcy5hdHRycy52YWx1ZSk7XG4gIH1cblxuICBzZXRSYWRpb1ZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5zY29wZS52YWx1ZSA9IHZhbHVlO1xuICB9XG59XG5cblJhZGlvLlJhZGlvQnV0dG9uID0gUmFkaW9CdXR0b247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvcmFkaW8uanMiLCJpbXBvcnQgRm9yLCB7IExvb3AgfSBmcm9tICcuL2Zvci5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydtdWx0aXBsZSddO1xuICBzdGF0aWMgZXZlbnRzID0gWydjaGFuZ2UnXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnc2VsZWN0JywgU2VsZWN0KTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ29wdGlvbicsIE9wdGlvbik7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLml0ZXJhdG9yVGFnTmFtZSA9ICdvcHRpb24nO1xuICAgIHRoaXMuaXNNdWx0aXBsZSA9IGZhbHNlO1xuICB9XG5cbiAgY2hhbmdlZE11bHRpcGxlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRNdWx0aXBsZSh2YWx1ZSk7XG4gIH1cblxuICBjaGFuZ2VkQ29udGVudCh2YWx1ZSkge1xuICAgIHRoaXMuc2V0Q29udGVudCh2YWx1ZSk7XG4gIH1cblxuICBjaGFuZ2VkSW4odmFsdWUpIHtcbiAgICBzdXBlci5jaGFuZ2VkSW4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLmRyYXdTZWxlY3QoKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmVsLmNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKTtcbiAgICB9KTtcbiAgfVxuICBcbiAgY29tcGlsZWQoKSB7XG4gICAgc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdtdWx0aXBsZScpICYmIHRoaXMuc2V0TXVsdGlwbGUodGhpcy5hdHRycy5tdWx0aXBsZSk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgnY29udGVudCcpICYmIHRoaXMuc2V0Q29udGVudCh0aGlzLmF0dHJzLmNvbnRlbnQpO1xuICAgIHRoaXMuZHJhd1NlbGVjdCgpO1xuICB9XG5cbiAgc2V0TXVsdGlwbGUodmFsdWUpIHtcbiAgICB0aGlzLmlzTXVsdGlwbGUgPSB2YWx1ZTtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUodXRpbHMuY29weSh0aGlzLmVsLmNvbnRlbnQpKSk7XG4gIH1cblxuICBzZXRDb250ZW50KHZhbHVlKSB7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKHZhbHVlKSk7XG4gIH1cblxuICBkcmF3U2VsZWN0KCkge1xuICAgIGxldCBzZWxlY3RlZCA9IFtdO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV0uX19ha2lsaTtcbiAgICAgIGxldCBzZWxlY3Rpb24gPSBvcHRpb24uYXR0cnMuc2VsZWN0ZWQ7XG5cbiAgICAgIGlmKHNlbGVjdGlvbikge1xuICAgICAgICBzZWxlY3RlZC5wdXNoKG9wdGlvbi5lbC52YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbi5lbC5zZWxlY3RlZCA9IHNlbGVjdGlvbjtcbiAgICB9XG5cbiAgICBpZighc2VsZWN0ZWQubGVuZ3RoKSB7XG4gICAgICB0aGlzLnJlZGVmaW5lKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKHNlbGVjdGVkKSk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlSXRlcmF0b3JFbGVtZW50KCkge1xuICAgIGxldCBlbCA9IHN1cGVyLmNyZWF0ZUl0ZXJhdG9yRWxlbWVudCgpO1xuXG4gICAgaWYoIWVsLmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRoaXMuaHRtbC50cmltKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIGluQ29udGVudCh2YWx1ZSkge1xuICAgIGlmKCF0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsLmNvbnRlbnQgPT09IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmVsLmNvbnRlbnQuaW5kZXhPZih2YWx1ZSkgIT0gLTE7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIGlmKCF0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsLnZhbHVlO1xuICAgIH1cblxuICAgIGxldCBjb250ZW50ID0gW107XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXTtcblxuICAgICAgaWYob3B0aW9uLnNlbGVjdGVkKSB7XG4gICAgICAgIGNvbnRlbnQucHVzaChvcHRpb24udmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgZm9ybWF0VmFsdWUodmFsdWUpIHtcbiAgICBpZih0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIGlmKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9ICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKT8gW3ZhbHVlXTogW107XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5sZW5ndGg/IHZhbHVlWzBdOiAnJztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYodHlwZW9mIHZhbHVlID09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmVkZWZpbmUoKSB7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmdldENvbnRlbnQoKSk7XG4gIH1cblxuICBjaGFuZ2VWYWx1ZSh2YWx1ZSkge1xuICAgIGlmKHV0aWxzLmNvbXBhcmUodGhpcy5lbC5jb250ZW50LCB2YWx1ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZihBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdGhpcy5lbC52YWx1ZSA9IHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdO1xuXG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldO1xuXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHZhbHVlLmluZGV4T2Yob3B0aW9uLnZhbHVlKSAhPSAtMTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmVsLnZhbHVlID0gdmFsdWU7XG5cbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gb3B0aW9uLnZhbHVlID09IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZWwuY29udGVudCA9IHZhbHVlO1xuICAgIHRoaXMuYXR0cnMub25DaGFuZ2UuZGlzcGF0Y2goRXZlbnQpO1xuICB9XG59O1xuXG5leHBvcnQgY2xhc3MgT3B0aW9uIGV4dGVuZHMgTG9vcCB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnc2VsZWN0ZWQnXTtcblxuICBfX2dldFBhcnNlZEV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIHJldHVybiB1dGlscy5kZWNvZGVIdG1sRW50aXRpZXMoZXhwcmVzc2lvbik7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGNoYW5nZWRTZWxlY3RlZCh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U2VsZWN0ZWQodmFsdWUpO1xuICB9XG5cbiAgc2V0U2VsZWN0ZWQodmFsdWUpIHtcbiAgICB0aGlzLmVsLnNlbGVjdGVkID0gdmFsdWU7XG4gICAgdGhpcy5mb3IucmVkZWZpbmUoKTtcbiAgfVxufVxuXG5TZWxlY3QuT3B0aW9uID0gT3B0aW9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3NlbGVjdC5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU291cmNlIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnc291cmNlJywgU291cmNlKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3NvdXJjZS5qcyIsImltcG9ydCBUZXh0IGZyb20gJy4vdGV4dC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0YXJlYSBleHRlbmRzIFRleHQge1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgndGV4dGFyZWEnLCBUZXh0YXJlYSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90ZXh0YXJlYS5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhY2sgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0cmFjaycsIFRyYWNrKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RyYWNrLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlbyBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3ZpZGVvJywgVmlkZW8pO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdmlkZW8uanMiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5cbi8qKlxuICogU2NvcGUgY2xhc3MuXG4gKlxuICogQWxsIHByb3BlcnRpZXMgc3RhcnRpbmcgd2l0aCBfXyB3aWxsIG5vdCBiZSB3YXRjaGluZy5cbiAqIFlvdSBjYW4gdXNlIHRoZW0gZm9yIGludGVybmFsIG1hbmlwdWxhdGlvbnMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3BlIHtcbiAgc3RhdGljIG5lc3RlZFdhdGNoaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVsLCBjb21wb25lbnQpIHtcbiAgICB0aGlzLl9fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fX2VsID0gZWw7XG4gICAgdGhpcy5fX2NvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ3Njb3BlJywgbmFtZSk7XG4gIH1cblxuICBnZXQgX191dGlscygpIHtcbiAgICByZXR1cm4gdXRpbHM7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGEgc2NvcGUgdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzdHJpY3Q9ZmFsc2VdIC0gd2l0aG91dCBvYmplY3QgY29weWluZ1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldChrZXlzLCB2YWx1ZSwgc3RyaWN0ID0gZmFsc2UpIHtcbiAgICBpZighQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG5cbiAgICBBa2lsaS51bmlzb2xhdGVkKCgpID0+IHtcbiAgICAgIHN0cmljdCAmJiAodGhpcy5fX2NvbXBvbmVudC5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgPSB0cnVlKTtcbiAgICAgIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMsIChsYXN0LCB2YWwpID0+IHtcbiAgICAgICAgaWYoIWxhc3QpIHtcbiAgICAgICAgICByZXR1cm4gdmFsIHx8IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICBzdHJpY3QgJiYgKHRoaXMuX19jb21wb25lbnQuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nID0gZmFsc2UpO1xuICAgIH0pO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Njb3BlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==