/*!
 * Akili is a javascript framework
 * 
 * const Akili = makeItEasy(js + html);
 * 
 * @version 0.6.0
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

var Akili = {};

/**
 * Set the farmework's default variables
 */
/**
 * Javascript framework
 *
 * const Akili = makeItEasy(js + html);
 *
 * @author Alexandr Balasyan <mywebstreet@gmail.com>
 * @link http://akilijs.com
 */

Akili.setDefaults = function () {
  var _this = this;

  this.options = {
    debug: true,
    globals: {}
  };

  this.__init = null;
  this.__cleared = false;
  this.__components = {};
  this.__aliases = {};
  this.__scopes = {};
  this.__storeLinks = {};
  this.__window = {};
  this.__isolation = null;
  this.__evaluation = null;
  this.__onError = function () {
    return _this.triggerInit(false);
  };

  this.htmlBooleanAttributes = ['disabled', 'contenteditable', 'hidden'];

  this.components = {};
  this.services = {};

  this.Component = _component3.default;
  this.EventEmitter = _eventEmitter2.default;
  this.Scope = _scope2.default;
  this.utils = _utils2.default;
  this.components.A = _a2.default;
  this.components.Audio = _audio2.default;
  this.components.Content = _content2.default;
  this.components.For = _for2.default;
  this.components.Embed = _embed2.default;
  this.components.If = _if2.default;
  this.components.Include = _include2.default;
  this.components.Input = _input2.default;
  this.components.Iframe = _iframe2.default;
  this.components.Image = _image2.default;
  this.components.Object = _object2.default;
  this.components.Radio = _radio2.default;
  this.components.Route = _route2.default;
  this.components.Select = _select2.default;
  this.components.Source = _source2.default;
  this.components.Text = _text2.default;
  this.components.Textarea = _textarea2.default;
  this.components.Track = _track2.default;
  this.components.Url = _url2.default;
  this.components.Video = _video2.default;
  this.services.request = _request2.default;
  this.services.router = _router2.default;
  this.services.store = _store2.default;

  this.define();
  this.errorHandling();
  this.isolateEvents();
  this.isolateArrayPrototype();
  this.isolateWindowFunctions();
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

/**
 * Clear the global context
 */
Akili.clearGlobals = function () {
  if (this.__cleared) {
    return;
  }

  for (var key in this.__window.Element.prototype) {
    Element.prototype[key] = this.__window.Element.prototype[key];
  }

  for (var _key in this.__window.Array.prototype) {
    Array.prototype[_key] = this.__window.Array.prototype[_key];
  }

  window.setTimeout = this.__window.setTimeout;
  window.setInterval = this.__window.setInterval;
  window.Promise = this.__window.Promise;
  window.removeEventListener('error', this.__onError);
  this.__cleared = true;
};

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
 * @param {Element} el
 * @param {boolean} [tree=true] - return array of the parents if true, closest parent if false
 * @returns {Array|Element|null}
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
 * @param {Element} el
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
  var _this2 = this;

  return _utils2.default.createRandomString(16, function (str) {
    return !!_this2.__scopes[str];
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

  for (var i = 0, l = props.length; i < l; i++) {
    var prop = props[i];

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
Akili.unevaluate = function (fn) {
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
Akili.unisolate = function (fn) {
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
 * @param {Element} el
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

    for (var i = 0, l = selectors.length; i < l; i++) {
      var selector = selectors[i];

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

  if (Akili.getAkiliParents(el).find(function (p) {
    return p.__akili.__prevent;
  })) {
    return;
  }

  component.__create();
  return component;
};

/**
 * Compile the element
 *
 * @param {Element} root
 * @param {object} [options]
 * @returns {Promise}
 */
Akili.compile = function (root) {
  var _this3 = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { recompile: false };

  var elements = [];

  var nestedInitializing = function nestedInitializing(el) {
    var component = _this3.initialize(el, options);
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
    // eslint-disable-next-line no-console
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
    // eslint-disable-next-line no-console
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
  delete this.__aliases[selector];
};

/**
 * Isolate array prototype functions
 */
Akili.isolateArrayPrototype = function () {
  var _this4 = this;

  this.__window.Array = { prototype: {} };

  var keys = Object.getOwnPropertyNames(Array.prototype);

  var _loop = function _loop(i, l) {
    var key = keys[i];
    var old = Array.prototype[key];

    if (typeof old != 'function' || key == 'constructor') {
      return 'continue';
    }

    _this4.__window.Array.prototype[key] = old;

    Array.prototype[key] = function () {
      var _this5 = this,
          _arguments = arguments;

      return Akili.unevaluate(function () {
        if (!_this5.__isProxy) {
          return old.apply(_this5, _arguments);
        }

        return Akili.isolate(function () {
          return old.apply(_this5, _arguments);
        }, _this5);
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
      var _this6 = this,
          _arguments2 = arguments;

      return Akili.isolate(function () {
        return fn.apply(_this6, _arguments2);
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
  window.addEventListener('error', this.__onError);
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
 * @param {Element} [root]
 * @returns {Promise}
 */
Akili.init = function (root) {
  var _this7 = this;

  root = root || document.body;

  if (!(root instanceof Element)) {
    throw new Error('Root element must be an html element');
  }

  if (root === document.documentElement) {
    throw new Error('"html" can\'t be the root element');
  }

  this.__root = root;

  if (window.AKILI_SERVER) {
    var html = window.AKILI_SERVER.html;

    for (var i = this.__root.attributes.length - 1; i >= 0; i--) {
      this.__root.removeAttribute(this.__root.attributes[i].name);
    }

    var parser = new DOMParser();
    var doc = parser.parseFromString(html, "text/html");
    var el = doc.querySelector(this.__root === document.body ? 'body' : 'body > *');
    this.__root.innerHTML = el.innerHTML;

    for (var _i2 = el.attributes.length - 1; _i2 >= 0; _i2--) {
      var attr = el.attributes[_i2];
      this.__root.setAttribute(attr.name, attr.value);
    }
  } else {
    window.AKILI_CLIENT = {
      html: this.__root.outerHTML
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
  this.clearGlobals();
  _router2.default.deinit();
  _request2.default.deinit();
  var storeKeys = Object.keys(_store2.default.__target);

  for (var i = 0, l = storeKeys.length; i < l; i++) {
    delete _store2.default.__target[storeKeys[i]];
  }

  this.setDefaults();
};

window.Akili = Akili;
exports.default = Akili;

Akili.setDefaults();

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
  var keys = Object.keys(obj);

  for (var i = 0, l = keys.length; i < l; i++) {
    var k = keys[i];
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
  var keys = Object.keys(obj);

  for (var i = 0, l = keys.length; i < l; i++) {
    var k = keys[i];
    var val = obj[k];
    val && styles.push(this.toDashCase(k) + ':' + val);
  }

  return styles.join(';');
};

/**
 * Split the string
 * 
 * @example
 * // returns ["Hello", "World"]
 * utils.split("Hello World", " ");
 * 
 * @example
 * // returns ['x = 5', ' y = "1;2;3"']
 * utils.split('x = 5; y = "1;2;3"', ";", ['"']);
 * 
 * @param {string|RegExp} str 
 * @param {string} [del]
 * @param {string[]} [exclude] 
 */
utils.split = function (str) {
  var del = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var exclude = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var exps = [];
  var last = '';

  if (!del) {
    return str.split('');
  } else if (del instanceof RegExp) {
    return str.split(del);
  } else if (str.indexOf(del) == -1) {
    last = str;
  } else {
    var arr = str.split('');
    var open = '';

    for (var i = 0, l = arr.length; i < l; i++) {
      var val = arr[i];
      var index = exclude.indexOf(val);

      if (index > -1 && (!open || open == val)) {
        !open ? open = exclude[index] : open = '';
      }

      if (val == del && !open) {
        exps.push(last);
        last = '';
        continue;
      }

      last += val;
    }
  }

  last && exps.push(last);
  return exps;
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
 * @param {boolean} [options] 
 * @returns {*}
 */
utils.copy = function (value) {
  var _this2 = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) != 'object' || !value) {
    return value;
  }

  options = _extends({ nested: true, enumerable: true }, options);

  var next = function next(obj) {
    obj = _this2.isScopeProxy(obj) ? obj.__target : obj;
    var keys = !options.enumerable ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    var newObj = Array.isArray(obj) ? [] : {};

    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      var val = obj[key];
      val = val && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) == 'object' && options.nested ? next(val) : val;

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

    options = _extends({ enumerable: true }, options);

    var clearUndefined = function clearUndefined(val) {
      var obj = Array.isArray(val) ? [] : {};
      var keys = !options.enumerable ? Object.getOwnPropertyNames() : Object.keys(val);

      for (var i = 0, l = keys.length; i < l; i++) {
        var key = keys[i];
        val[key] !== undefined && (obj[key] = val[key]);
      }

      return obj;
    };

    if (options.ignoreUndefined) {
      a = clearUndefined(a);
      b = clearUndefined(b);
    }

    var aKeys = !options.enumerable ? Object.getOwnPropertyNames() : Object.keys(a);
    var bKeys = !options.enumerable ? Object.getOwnPropertyNames() : Object.keys(b);

    if (aKeys.length != bKeys.length) {
      return false;
    }

    a = this.isScopeProxy(a) ? a.__target : a;
    b = this.isScopeProxy(b) ? b.__target : b;

    for (var i = 0, l = aKeys.length; i < l; i++) {
      var key = aKeys[i];

      if (!this.compare(a[key], b[key])) {
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
 * @param {object} [options]
 * @returns {boolean}
 */
utils.comparePreviousValue = function (current, previous, previousCopy, options) {
  if (current !== previous) {
    return false;
  }

  return this.compare(current, previousCopy, options);
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
      o[k] = undefined;
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
      (!fn || fn(value)) && delete o[k];
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
      var exps = _utils2.default.split(expression.trim(), ';', ['"', "'", '`']);
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
    this.__isResolved = false;
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
          p = _request2.default.get(this.constructor.templateUrl, { cache: this.constructor.templateCache }).then(function (res) {
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

      this.__recompiling = null;
      this.__compiling = null;

      return p.then(function () {
        _this2.__isCompiled = true;
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
      var _this3 = this;

      if (this.__recompiling) {
        return Promise.resolve();
      }

      this.attrs.onResolved && this.attrs.onResolved.trigger(undefined, { bubbles: false });

      return Promise.resolve(this.resolved()).then(function (res) {
        _this3.__isResolved = true;
        return res;
      });
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
      this.el.__akili = this;

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
      return true;
    }

    /**
     * Set boolean attributes
     *
     * @protected
     */

  }, {
    key: '__setBooleanAttributes',
    value: function __setBooleanAttributes() {
      var _this4 = this;

      this.booleanAttributes = [].concat(_akili2.default.htmlBooleanAttributes, this.constructor.booleanAttributes);

      var setAttr = function setAttr(el) {
        for (var i = 0, attrs = el.attributes, l = attrs.length; i < l; i++) {
          var node = attrs[i];

          if (_this4.booleanAttributes.indexOf(node.nodeName) != -1) {
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
     * @param {Element} el
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
     * @param {Element} el
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
      var _this5 = this;

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
          evaluate = _this5.constructor.parse(_this5.__evaluationComponent.scope, parseValue);
        } catch (err) {
          var tagName = node.__component.el.tagName;
          var attrName = node.__component.el.getAttribute('component');
          var componentName = (attrName || tagName).toLowerCase();
          var elementName = node.__element.tagName.toLowerCase();
          var attributeName = node instanceof window.Attr ? node.name.toLowerCase() : '';
          var messages = [err.message, node.__expression.trim()];
          attributeName && messages.push('[attribute ' + attributeName + ']');
          messages = messages.concat(['[element ' + elementName + ']', '[component ' + componentName + ']']);
          throw 'Expression error: ' + messages.join('\n\tat ');
        }

        if (_akili2.default.__evaluation) {
          evaluation = _akili2.default.__evaluation.list;
          _akili2.default.__evaluation.list = null;
          _akili2.default.__evaluation = null;
        }

        for (var i = evaluation.length - 1; i >= 0; i--) {
          var data = evaluation[i];
          var hash = _this5.__createKeysHash(data.keys);

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

          if (component.__isMounted) {
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
      var _this6 = this;

      var isDeleted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var data = this.__getBind(keys);

      var unbind = function unbind(obj, parents) {
        for (var k in obj) {
          if (!obj.hasOwnProperty(k) || _this6.__isSystemBindingKey(k)) {
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

          _this6.__evaluateNested(_keys, true);

          if (value === null || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) != 'object' || !hasKey) {
            _this6.__unbind(_keys);
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
     * @param {Element} el
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
     * @param {Element} el
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
     * @param {Element} el
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
     * @param {Element} el
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
      var _this7 = this;

      var changeAttribute = function changeAttribute(key, value) {
        var isDeleted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (_this7.__disableAttributeSetter) {
          return;
        }

        var node = _this7.el.getAttributeNode(key);

        if (node) {
          if (node.__event) {
            node.__event.unbind();
            node.__event = null;
            node.__expression = value;
          }

          if (node.__hasBindings) {
            _this7.__parent && _this7.__parent.__akili.__evaluationComponent.__unbindByNodes([node]);
            node.__hasBindings = false;
            node.__expression = value;
          }
        }

        if (isDeleted) {
          _this7.el.removeAttribute(key);
        } else if (node) {
          node.value = value;
        } else {
          _this7.el.setAttribute(key, value);
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

          if (_this7.booleanAttributes.indexOf(attrKey) != -1) {
            attrKey = 'boolean-' + attrKey;

            if (value) {
              _this7.el.setAttribute(key, value);
            } else {
              _this7.el.removeAttribute(key);
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
      var _this8 = this;

      return new Proxy(obj, {
        get: function get(target, key) {
          if (key == "__isProxy") {
            return true;
          }

          if (key == "__target") {
            return obj;
          }

          if (key == "__component") {
            return _this8;
          }

          if (key == "__keys") {
            return parents;
          }

          if (_this8.__isSystemKey(key)) {
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
            var evaluated = !_utils2.default.hasPropertyByKeys(keys, _this8.__scope);
            var component = _this8;
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

            _this8.__bindNode(_akili2.default.__evaluation.list, component, keys, parents, target[key], notBinding, evaluated);
            return target[key];
          }

          return target[key];
        },
        set: function set(target, key, value) {
          if (_this8.__isSystemKey(key)) {
            target[key] = value;
            return true;
          }

          var keys = [].concat(parents, [key]);

          if (_this8.__checkDisablement(keys)) {
            target[key] = value;
            return true;
          }

          var keyString = _akili2.default.joinBindingKeys(keys);

          CHECK_EXISTENCE: if (parents.length > 0) {
            var targetParentValue = parents.length > 1 ? _utils2.default.getPropertyByKeys(parents.slice(0, -1), _this8.__scope) : _this8.__scope;

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

          if (_this8.__storeLinks[keyString]) {
            _this8.__storeTriggerByKeys(keys, value);
          }

          if (_this8.__attrLinks[keyString]) {
            _this8.__attrTriggerByKeys(keys, value);
          }

          target[key] = _this8.__nestedObserve(value, keys);

          if (_akili2.default.__isolation) {
            _this8.__createIsolationObject(parents, key, false);
            return true;
          }

          if (_this8.__isMounted) {
            _this8.__evaluateByKeys(keys, value);
          }

          return true;
        },
        deleteProperty: function deleteProperty(target, key) {
          var keys = [].concat(parents, [key]);

          if (_this8.__checkDisablement(keys)) {
            delete target[key];
            return true;
          }

          if (_this8.__isSystemKey(key)) {
            delete target[key];
            return true;
          }

          if (_akili2.default.__isolation) {
            delete target[key];
            _this8.__createIsolationObject(parents, key, true);
            return true;
          }

          delete target[key];
          _this8.__evaluateByKeys(keys, undefined, true);
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
      var _this9 = this;

      _store2.default.__target[name] = value;
      var links = _akili2.default.__storeLinks[name];

      if (!links || !links.length) {
        return;
      }

      var _loop = function _loop(i, l) {
        var link = links[i];
        var component = link.component;

        if (component === _this9) {
          return 'continue';
        }

        if (link.fn) {
          _akili2.default.unisolate(function () {
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
      var _this10 = this;

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
        return _akili2.default.unisolate(function () {
          return fn.call(_this10, _store2.default[name]);
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
      var _this11 = this;

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
          _this11.attrs[ev] && _this11.attrs[ev].trigger(value, { bubbles: true });
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
      var _this12 = this;

      var links = this.__attrLinks[name];

      if (!links || !links.length) {
        return;
      }

      var _loop2 = function _loop2(i, l) {
        var link = links[i];
        _this12.__disableAttrTriggering = true;
        link.fn ? _akili2.default.unisolate(function () {
          return link.fn.call(_this12, value);
        }) : _this12.scope.__set(link.keys, value);
        _this12.__disableAttrTriggering = false;
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
      var _this13 = this;

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
        return _akili2.default.unisolate(function () {
          return fn.call(_this13, _this13.attrs[name]);
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
      var _this14 = this;

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

          if (_this14.__disableProxyRedefining) {
            break CHECK_PROXY;
          }

          if (value.__component !== _this14 || _akili2.default.joinBindingKeys(parents) != _akili2.default.joinBindingKeys(value.__keys)) {
            target = _utils2.default.copy(target, { nested: false });
            value = target;
          }
        } else if (!_this14.__disableProxyRedefining && !(value instanceof _scope3.default)) {
          target = _utils2.default.copy(target, { nested: false });
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
          return _this14.__observe(value, parents);
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
      var _this15 = this;

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
          } else if (!_this15.__isSystemBindingKey(k)) {
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
      var _this16 = this;

      var clear = function clear(obj, parent, key) {
        for (var k in obj) {
          if (!obj.hasOwnProperty(k)) {
            continue;
          }

          var val = obj[k];

          if (k == '__data' && (!val || !val.length)) {
            delete obj[k];
          } else if (!_this16.__isSystemBindingKey(k)) {
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
     * @param {Element} parent
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

    this.__cache = {};

    this.baseUrl = baseUrl ? baseUrl.replace(/\/$/, '') + '/' : '';

    this.defaults = _extends({
      statusErrorsPattern: /^([^23])|404/,
      cache: false
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
        options = _extends({}, _this.defaults, options || {});
        options.url = _this.baseUrl ? '' + _this.baseUrl + options.url.replace(/^\//, '') : options.url;
        options.method = options.method || 'GET';

        var xhr = new XMLHttpRequest();
        var before = _this.transformBefore(xhr, options);
        xhr = before.xhr;
        options = before.options;
        typeof options.onStart == 'function' && options.onStart(xhr);
        options.headers = options.headers || {};

        if (options.json) {
          options.json !== true && (options.body = JSON.stringify(options.json));
          options.headers['content-type'] = 'application/json';
          options.responseType = options.responseType || 'json';
        } else if (options.form) {
          options.body = _this.createFormData(options.form);
          options.headers['content-type'] = 'multipart/form-data';
        }

        if (options.params) {
          var str = _this.paramsToQuery(options.params);
          str && (options.url += "?" + str);
        }

        var hash = null;
        var cache = typeof options.cache == 'function' ? options.cache(options) : options.cache;

        if (options.method.toUpperCase() == 'GET' && (!options.body || typeof options.body == 'string')) {
          hash = _this.createCacheHash({
            url: options.url,
            method: options.method,
            user: options.user,
            password: options.password,
            body: options.body
          });
        }

        if (cache && hash) {
          var _cache = _this.getCache(hash);
          var now = new Date().getTime();

          if (_cache && now - _cache.createdAt <= cache) {
            return resolve(_cache.data);
          } else if (_cache) {
            _this.removeCache(hash);
          }
        }

        xhr.open(options.method, options.url, true, options.user, options.password);

        if (options.hasOwnProperty('timeout')) {
          xhr.timeout = options.timeout;
        }

        if (options.responseType) {
          xhr.responseType = options.responseType;
        }

        if (options.withCredentials) {
          xhr.withCredentials = options.withCredentials;
        }

        for (var k in options.headers) {
          if (!options.headers.hasOwnProperty(k)) {
            continue;
          }

          xhr.setRequestHeader(k, options.headers[k]);
        }

        if (typeof options.onProgress == 'function') {
          xhr.onprogress = function () {
            return options.onProgress(xhr);
          };
        }

        xhr.onload = function () {
          var response = _this.transformAfter(xhr);

          if ((xhr.status + '').match(options.statusErrorsPattern)) {
            var err = new Error('Request to "' + options.url + '" returns failure status code ' + xhr.status);
            err.response = response;
            return reject(err);
          }

          cache && hash && _this.createCache(hash, response);
          resolve(response);
        };

        xhr.ontimeout = function () {
          reject(new Error('Request to "' + options.url + '" timed out'));
        };

        xhr.onerror = function (err) {
          reject(err);
        };

        xhr.send(options.body);
      });
    }

    /**
     * Get cache
     * 
     * @param {string} hash
     * @returns {object}
     */

  }, {
    key: 'getCache',
    value: function getCache(hash) {
      return this.__cache[hash] || null;
    }

    /**
     * Create cache
     * 
     * @param {string} hash
     * @param {object} data
     */

  }, {
    key: 'createCache',
    value: function createCache(hash, data) {
      this.__cache[hash] = { data: data, createdAt: new Date().getTime() };
    }

    /**
     * Remove cache
     * 
     * @param {string} hash
     */

  }, {
    key: 'removeCache',
    value: function removeCache(hash) {
      delete this.__cache[hash];
    }

    /**
     * Create a hash to save in the cache
     * 
     * @param {object} data
     * @returns {string}
     */

  }, {
    key: 'createCacheHash',
    value: function createCacheHash(data) {
      var hash = 0;
      var str = JSON.stringify(data);

      for (var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash;
      }

      return hash + '';
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
     * @param {string} [namespace]   *
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
     * @param {XMLHttpRequest} xhr
     * @param {object} options
     * @returns {object}
     */

  }, {
    key: 'transformBefore',
    value: function transformBefore(xhr, options) {
      return { xhr: xhr, options: options };
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

/**
 * Set router's default variables
 */
request.setDefaults = function () {
  this.__instances = {};
  this.__cache = {};
};

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

/**
 * Deinit router
 */
request.deinit = function () {
  this.setDefaults();
};

Object.defineProperty(request, 'use', {
  get: function get() {
    return request.__instances;
  }
});

request.Request = Request;
exports.default = request;

request.setDefaults();

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
    _this.debounceInterval = 500;
    _this.debounceTimeout = null;
    return _this;
  }

  _createClass(Text, [{
    key: 'created',
    value: function created() {
      var _this2 = this;

      if (this.el.hasAttribute('on-debounce')) {
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
      this.attr('focus', this.setFocus);
      this.attr('value', this.setValue);
      this.attr('debounce', this.setDebounce);
    }
  }, {
    key: 'removed',
    value: function removed() {
      this.debounceTimeout && clearTimeout(this.debounceTimeout);
    }
  }, {
    key: 'setDebounce',
    value: function setDebounce(interval) {
      this.debounceInterval = +interval;
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
    value: function loop(key, value, index, dataChanged) {
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
          // eslint-disable-next-line no-console
          console.warn('"For" component "in" attribute value type must be an object/array');
        }

        data = [];
      }

      var dataChanged = _utils2.default.compare(this.data, data);
      this.data = data;
      var keys = Object.keys(data);
      var iterators = [];
      var index = 0;

      for (var l = keys.length; index < l; index++) {
        var key = keys[index];
        var iterator = this.loop(key, data[key], index, dataChanged);
        iterators.push(iterator);
        iterator.iterate(index);
      }

      for (var i = index, _l = this.iterators.length; i < _l; i++) {
        var _iterator = this.iterators[i];
        _iterator.__destroy();
        this.iterators.splice(i, 1);
        _l--;
        i--;
      }
    }
  }]);

  return For;
}(_component2.default);

For.matches = '[in]';
For.saveAttributeProxyIn = true;
exports.default = For;

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

      if (this.isFor) {
        return _get(Loop.prototype.__proto__ || Object.getPrototypeOf(Loop.prototype), 'created', this).apply(this, arguments);
      }
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
    value: function iterate() {}
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

  /**
   * Set a scope value
   * @param {string|string[]} keys
   * @param {*} value
   * @param {boolean} [strict=false] - without object copying
   * @protected
   */


  _createClass(Scope, [{
    key: '__set',
    value: function __set(keys, value) {
      var _this = this;

      var strict = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var target = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (!Array.isArray(keys)) {
        keys = [keys];
      }

      _akili2.default.unisolate(function () {
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
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
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

/**
 * Set router's default variables
 */
router.setDefaults = function () {
  this.baseUrl = "/";
  this.states = [];
  this.hashMode = true;
  this.__redirects = 0;
  this.__init = false;
  this.__options = {};
  this.__paramRegex = /(:([\w\d-]+))/g;
  this.__routeSelector = function (c) {
    return c instanceof _route3.default;
  };
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
    handler: function handler() {}
  };

  if (_akili2.default.options.debug && options.component && (options.template || options.templateUrl)) {
    // eslint-disable-next-line no-console
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
    // eslint-disable-next-line no-console
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
    // eslint-disable-next-line no-console
    router.changeState().catch(function (err) {
      return console.error(err);
    });
    return res;
  };

  this.__onStateChangeHandler = function () {
    // eslint-disable-next-line no-console
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

  for (var i = 0, l = this.states.length; i < l; i++) {
    this.initState(this.states[i]);
  }

  if (!this.states.length && _akili2.default.options.debug) {
    // eslint-disable-next-line no-console
    console.warn('You didn\'t add any routes to the router');
  }

  window.addEventListener('popstate', this.__onStateChangeHandler);
  this.__init = true;
};

/**
 * Initialize the state 
 * 
 * @param {object} state 
 */
router.initState = function (state) {
  var parents = [];
  state.children = [];
  parents = state.name.split('.');
  parents.pop();
  state.level = state.abstract ? null : parents.length;

  if (parents.length) {
    var parentName = parents.join('.');
    var parent = this.getState(parentName);

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
  this.states.push(state);
  this.__init && this.initState(state);
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
  url = url.replace(/^\^/, '');
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
  return url.replace(/[/]+/g, '/');
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
  var str = includes ? urlPattern : this.splitSlashes('^' + urlPattern + '/$');
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
  this.__isolated = true;
  var res = fn();
  this.__isolated = false;
  return res;
};

/**
 * Change state
 */
router.changeState = function () {
  var _this3 = this;

  if (this.__isolated) {
    return Promise.resolve();
  }

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
          // eslint-disable-next-line no-console
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

/**
 * Deinit router
 */
router.deinit = function () {
  window.removeEventListener('popstate', this.__onStateChangeHandler);
  router.setDefaults();
};

router.Transition = Transition;
exports.default = router;

router.setDefaults();

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

/**
 * ElseIf component
 */


If.transparent = true;
If.matches = '[is]';
If.booleanAttributes = ['recreate'];
exports.default = If;

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
      }

      return _get(Input.prototype.__proto__ || Object.getPrototypeOf(Input.prototype), 'created', this).apply(this, arguments);
    }
  }, {
    key: 'resolved',
    value: function resolved() {
      (this.isCheckbox || this.isRadio) && this.attr('checked', this.setChecked);
      return _get(Input.prototype.__proto__ || Object.getPrototypeOf(Input.prototype), 'resolved', this).apply(this, arguments);
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
Input.events = ['change'];
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
      this.attr('in', this.setNames, { callOnStart: false });
      this.attr('value', this.setValue);
      this.attr('name', this.setNames);
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

/**
 * The radio item component
 */


Radio.matches = '[name]';
Radio.events = ['radio'];
exports.default = Radio;

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
      this.attr('cache', this.setCache);
      return this.attr('url', this.setTemplate);
    }
  }, {
    key: 'setCache',
    value: function setCache(cache) {
      this.cache = cache;
    }
  }, {
    key: 'setTemplate',
    value: function setTemplate(url) {
      var _this2 = this;

      this.connection && this.connection.abort();

      return _request2.default.get(url, {
        cache: this.cache,
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
      this.attr('state', this.setState);
      this.attr('params', this.setParams);
      this.attr('query', this.setQuery);
      this.attr('hash', this.setHash);
      this.attr('options', this.setOptions);
      this.attr('url', this.setUrl);
      this.attr('state', this.resetHref, { callOnStart: false });
      this.attr('params', this.resetHref, { callOnStart: false });
      this.attr('query', this.resetHref, { callOnStart: false });
      this.attr('hash', this.resetHref, { callOnStart: false });
      this.attr('url', this.resetHref, { callOnStart: false });
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
exports.default = A;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzE1ZmYyMWE5Y2ZmNWE1NGMwNGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FraWxpLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91cmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JvdXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaWYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JhZGlvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHRhcmVhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5jbHVkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZW1iZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdHJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc291cmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hLmpzIl0sIm5hbWVzIjpbIkFraWxpIiwic2V0RGVmYXVsdHMiLCJvcHRpb25zIiwiZGVidWciLCJnbG9iYWxzIiwiX19pbml0IiwiX19jbGVhcmVkIiwiX19jb21wb25lbnRzIiwiX19hbGlhc2VzIiwiX19zY29wZXMiLCJfX3N0b3JlTGlua3MiLCJfX3dpbmRvdyIsIl9faXNvbGF0aW9uIiwiX19ldmFsdWF0aW9uIiwiX19vbkVycm9yIiwidHJpZ2dlckluaXQiLCJodG1sQm9vbGVhbkF0dHJpYnV0ZXMiLCJjb21wb25lbnRzIiwic2VydmljZXMiLCJDb21wb25lbnQiLCJFdmVudEVtaXR0ZXIiLCJTY29wZSIsInV0aWxzIiwiQSIsIkF1ZGlvIiwiQ29udGVudCIsIkZvciIsIkVtYmVkIiwiSWYiLCJJbmNsdWRlIiwiSW5wdXQiLCJJZnJhbWUiLCJJbWFnZSIsIk9iamVjdCIsIlJhZGlvIiwiUm91dGUiLCJTZWxlY3QiLCJTb3VyY2UiLCJUZXh0IiwiVGV4dGFyZWEiLCJUcmFjayIsIlVybCIsIlZpZGVvIiwicmVxdWVzdCIsInJvdXRlciIsInN0b3JlIiwiZGVmaW5lIiwiZXJyb3JIYW5kbGluZyIsImlzb2xhdGVFdmVudHMiLCJpc29sYXRlQXJyYXlQcm90b3R5cGUiLCJpc29sYXRlV2luZG93RnVuY3Rpb25zIiwiY2xlYXJHbG9iYWxzIiwia2V5IiwiRWxlbWVudCIsInByb3RvdHlwZSIsIkFycmF5Iiwid2luZG93Iiwic2V0VGltZW91dCIsInNldEludGVydmFsIiwiUHJvbWlzZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJqb2luQmluZGluZ0tleXMiLCJrZXlzIiwibWFwIiwiZWwiLCJ0b1N0cmluZyIsImpvaW4iLCJhZGRTY29wZSIsInNjb3BlIiwiX19uYW1lIiwiRXJyb3IiLCJnZXRTY29wZSIsIm5hbWUiLCJyZW1vdmVTY29wZSIsImdldEFraWxpUGFyZW50cyIsInRyZWUiLCJhcnIiLCJjaGVjayIsIm5vZGUiLCJwYXJlbnROb2RlIiwiX19ha2lsaSIsInB1c2giLCJzZXRUZW1wbGF0ZSIsInRlbXBsYXRlIiwicmVwbGFjZSIsImlubmVySFRNTCIsImNyZWF0ZVNjb3BlTmFtZSIsImNyZWF0ZVJhbmRvbVN0cmluZyIsInN0ciIsImlzb2xhdGUiLCJmbiIsInJlcyIsInByb3BzIiwiayIsImhhc093blByb3BlcnR5IiwiaSIsImwiLCJsZW5ndGgiLCJwcm9wIiwiaXNEZWxldGVkIiwiY29tcG9uZW50IiwiX19ldmFsdWF0ZUJ5S2V5cyIsInVuZGVmaW5lZCIsIl9fc2V0IiwiZ2V0UHJvcGVydHlCeUtleXMiLCJfX3Njb3BlIiwidW5ldmFsdWF0ZSIsImV2YWx1YXRpb24iLCJ1bmlzb2xhdGUiLCJpc29sYXRpb24iLCJuZXh0VGljayIsInJlc29sdmUiLCJ0aGVuIiwiaW5pdGlhbGl6ZSIsInJlY29tcGlsZSIsIl9fcmVjb21waWxlIiwiaXNSb290IiwiX19yb290IiwiY29tcG9uZW50TmFtZSIsInRvRGFzaENhc2UiLCJnZXRBdHRyaWJ1dGUiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJfQ29tcG9uZW50IiwiQ0hFQ0tfQUxJQVNFUyIsInNlbGVjdG9ycyIsInNlbGVjdG9yQWxsIiwibWF0Y2hlcyIsInNlbGVjdG9yIiwiX19jYW5jZWxsZWQiLCJmaW5kIiwicCIsIl9fcHJldmVudCIsIl9fY3JlYXRlIiwiY29tcGlsZSIsInJvb3QiLCJlbGVtZW50cyIsIm5lc3RlZEluaXRpYWxpemluZyIsImNoaWxkcmVuIiwiY2hpbGQiLCJfX2NvbXBpbGUiLCJhbGwiLCJyIiwiX19yZXNvbHZlIiwiY29uc29sZSIsIndhcm4iLCJ1bnJlZ2lzdGVyQ29tcG9uZW50IiwiYWxpYXMiLCJ1bnJlZ2lzdGVyQWxpYXMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwib2xkIiwiX19pc1Byb3h5IiwiYXBwbHkiLCJjcmVhdGVDYWxsYmFja0lzb2xhdGlvbiIsImNvbnN0cnVjdG9yIiwiY2F0Y2giLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwiX19ha2lsaUxpc3RlbmVycyIsImFyZ3VtZW50cyIsImFyZ3MiLCJzbGljZSIsImNhbGwiLCJsaW5rIiwibGlzdGVuZXIiLCJzcGxpY2UiLCJwb3MiLCJpc0FycmF5IiwibnVtIiwiaW5kZXgiLCJjYWxsYmFjayIsImlzb2xhdGVGdW5jdGlvbiIsImNvbnRleHQiLCJvRm4iLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJ2YWx1ZSIsInN0YXR1cyIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImluaXQiLCJkb2N1bWVudCIsImJvZHkiLCJkb2N1bWVudEVsZW1lbnQiLCJBS0lMSV9TRVJWRVIiLCJodG1sIiwiYXR0cmlidXRlcyIsInJlbW92ZUF0dHJpYnV0ZSIsInBhcnNlciIsIkRPTVBhcnNlciIsImRvYyIsInBhcnNlRnJvbVN0cmluZyIsInF1ZXJ5U2VsZWN0b3IiLCJhdHRyIiwic2V0QXR0cmlidXRlIiwiQUtJTElfQ0xJRU5UIiwib3V0ZXJIVE1MIiwiY2hhbmdlU3RhdGUiLCJlcnIiLCJkZWluaXQiLCJzdG9yZUtleXMiLCJfX3RhcmdldCIsImNsYXNzIiwib2JqIiwiY2xhc3NlcyIsInZhbCIsInN0eWxlIiwic3R5bGVzIiwic3BsaXQiLCJkZWwiLCJleGNsdWRlIiwiZXhwcyIsImxhc3QiLCJSZWdFeHAiLCJpbmRleE9mIiwib3BlbiIsImZpbHRlciIsImhhbmRsZXIiLCJtYXRjaCIsIml0ZW0iLCJmaWx0ZXJlZCIsImMiLCJzb3J0Iiwib3JkZXIiLCJhIiwiYiIsInJldmVyc2UiLCJEYXRlIiwiZ2V0VGltZSIsIm5leHQiLCJhViIsImJWIiwiaXNTY29wZVByb3h5IiwiaXNQbGFpbk9iamVjdCIsImNvcHkiLCJuZXN0ZWQiLCJuZXdPYmoiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIm1ha2VBdHRyaWJ1dGVWYWx1ZSIsImNvbXBhcmUiLCJjbGVhclVuZGVmaW5lZCIsImlnbm9yZVVuZGVmaW5lZCIsImFLZXlzIiwiYktleXMiLCJjb21wYXJlUHJldmlvdXNWYWx1ZSIsImN1cnJlbnQiLCJwcmV2aW91cyIsInByZXZpb3VzQ29weSIsImVuY29kZUh0bWxFbnRpdGllcyIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlY29kZUh0bWxFbnRpdGllcyIsInRvQ2FtZWxDYXNlIiwibSIsInRvVXBwZXJDYXNlIiwiY2FwaXRhbGl6ZSIsIm9iamVjdCIsInJlZHVjZSIsIm8iLCJoYXNQcm9wZXJ0eUJ5S2V5cyIsImhhcyIsInNldFByb3BlcnR5QnlLZXlzIiwiZGVsZXRlUHJvcGVydHlCeUtleXMiLCJnZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQiLCJ0YXJnZXQiLCJwcm90byIsImdldFByb3RvdHlwZU9mIiwiZ2V0T3duUHJvcGVydHlUYXJnZXQiLCJNYXRoIiwicmFuZG9tIiwic3Vic3RyaW5nIiwidXJsQXR0cmlidXRlIiwic2V0VXJsIiwidXJsIiwiYXR0cnMiLCJldmFsdWF0aW9uUmVnZXgiLCJldmFsdWF0aW9uUmVnZXhHbG9iYWwiLCJzb3VyY2UiLCJzeXN0ZW1BdHRyaWJ1dGVzIiwiZXhwcmVzc2lvbiIsInZhcnMiLCJ0cmltIiwiRnVuY3Rpb24iLCJfX2lzTW91bnRlZCIsIl9faXNDb21waWxlZCIsIl9faXNSZXNvbHZlZCIsIl9fYmluZGluZ3MiLCJfX2V2YWx1YXRpbmdFdmVudCIsIl9fcmVjb21waWxpbmciLCJfX2NvbXBpbGluZyIsIl9fZGlzYWJsZVByb3h5IiwiX19kaXNhYmxlQXR0clRyaWdnZXJpbmciLCJfX2NoaWxkcmVuIiwiX19wYXJlbnQiLCJfX3BhcmVudHMiLCJfX2F0dHJzIiwiX19hdHRyTGlua3MiLCJfX2F0dHJpYnV0ZU9mIiwiX19ldmFsdWF0aW9uQ29tcG9uZW50IiwiX19zZXRFdmVudHMiLCJfX3NldFBhcmVudHMiLCJfX3NldEJvb2xlYW5BdHRyaWJ1dGVzIiwiX19kZWZpbmVBdHRyaWJ1dGVzIiwiX19pbml0aWFsaXplIiwiY3JlYXRlZCIsImNvbnRyb2wiLCJfX2NvbnRyb2xBdHRyaWJ1dGVzIiwiX19ldmFsdWF0ZVBhcmVudCIsIm5ld1BhcmVudCIsIl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzIiwiaW50ZXJwb2xhdGUiLCJwYXJlbnQiLCJub2RlVHlwZSIsIl9faW5pdGlhbGl6ZU5vZGUiLCJub2RlVmFsdWUiLCJfX2V2YWx1YXRlIiwiY2hpbGROb2RlcyIsIm9uQ29tcGlsZWQiLCJ0cmlnZ2VyIiwiYnViYmxlcyIsImNvbXBpbGVkIiwidGVtcGxhdGVVcmwiLCJnZXQiLCJjYWNoZSIsInRlbXBsYXRlQ2FjaGUiLCJfX2NvbnRlbnQiLCJkYXRhIiwib25SZWNvbXBpbGVkIiwicmVjb21waWxlZCIsIm9uUmVzb2x2ZWQiLCJyZXNvbHZlZCIsIl9zY29wZSIsImFzc2lnbiIsImNvbnRyb2xBdHRyaWJ1dGVzIiwiZXZlbnRzIiwiX19ldmVudHMiLCJfX3NhdmVBdHRyaWJ1dGVQcm94eUluIiwic2F2ZUF0dHJpYnV0ZVByb3h5SW4iLCJfX3NhdmVBdHRyaWJ1dGVQcm94eU91dCIsInNhdmVBdHRyaWJ1dGVQcm94eU91dCIsIl9fbmVzdGVkT2JzZXJ2ZSIsImJvb2xlYW5BdHRyaWJ1dGVzIiwiY29uY2F0Iiwic2V0QXR0ciIsIm5vZGVOYW1lIiwiaGFzQXR0cmlidXRlIiwiZXYiLCJ0ZXN0IiwicGFyZW50cyIsImV2YWx1YXRlUGFyZW50IiwidHJhbnNwYXJlbnQiLCJfX2RldGFjaCIsIl9fYWRkQ2hpbGQiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvcGVydGllcyIsIl9fZ2V0Tm9kZVByb3BlcnR5IiwiY291bnRlciIsImF0dHJpYnV0ZVZhbHVlIiwiX19jb21wb25lbnQiLCJjb20iLCJfX2V4cHJlc3Npb24iLCJBdHRyIiwiZCIsImV2YWx1YXRlIiwiZXhpc3RpbmdCaW5kaW5ncyIsInBhcnNlVmFsdWUiLCJfX2dldFBhcnNlZEV4cHJlc3Npb24iLCJsaXN0IiwicGFyc2UiLCJhdHRyTmFtZSIsImVsZW1lbnROYW1lIiwiX19lbGVtZW50IiwiYXR0cmlidXRlTmFtZSIsIm1lc3NhZ2VzIiwibWVzc2FnZSIsImhhc2giLCJfX2NyZWF0ZUtleXNIYXNoIiwibm90QmluZGluZyIsInBhcmVudFZhbHVlIiwiZXZhbENvbXBvbmVudCIsInJlYWxDb21wb25lbnQiLCJiaW5kIiwiX19nZXRCb3VuZE5vZGUiLCJfX2JpbmQiLCJfX3NldE5vZGVQcm9wZXJ0eSIsImV2YWx1YXRlZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJlIiwiaXNCb29sZWFuQXR0cmlidXRlIiwiX19oYXNCaW5kaW5ncyIsImNsZWFyQXR0cmlidXRlIiwiY2FtZWxBdHRyaWJ1dGUiLCJfX2F0dHJpYnV0ZU9uIiwiX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyIiwiX19hdHRyVHJpZ2dlckJ5TmFtZSIsImVsZW1lbnQiLCJ3aXRob3V0UGFyZW50cyIsImxhc3RQcm9wcyIsInByb3BzTGVuZ3RoIiwiZWxFdmFsdWF0ZSIsIl9fZ2V0QmluZCIsIl9fZGF0YSIsIl9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2luZyIsIl9fZGlzYWJsZUtleXMiLCJjaGVja1Byb3AiLCJfX2V2YWx1YXRlTm9kZSIsIl9rIiwiX3Byb3AiLCJfX2VuYWJsZUtleXMiLCJ1bmJpbmQiLCJfX2lzU3lzdGVtQmluZGluZ0tleSIsIl9rZXlzIiwiX19rZXlzIiwiX2lzRGVsZXRlZCIsImhhc0tleSIsInNoaWZ0IiwiX19ldmFsdWF0ZU5lc3RlZCIsIl9fdW5iaW5kIiwiZXhlYyIsImV2ZW50IiwiX19jaGVja0V2YWx1YXRpb24iLCJhdHRyaWJ1dGVPZiIsImV2ZW50TmFtZSIsIl9fZXZlbnQiLCJlbWl0dGVyIiwiX19ldmFsdWF0ZUV2ZW50IiwiX19pbml0aWFsaXplZCIsIl9faW5pdGlhbGl6ZUF0dHJpYnV0ZSIsImNoYW5nZUF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZU5vZGUiLCJfX3VuYmluZEJ5Tm9kZXMiLCJQcm94eSIsInNldCIsImF0dHJLZXkiLCJkZWxldGVQcm9wZXJ0eSIsIl9faXNTeXN0ZW1LZXkiLCJyZWFsVGFyZ2V0IiwiZXhjQXJyIiwiZm9yUGFyZW50cyIsImZvckRhdGEiLCJwb3AiLCJfX2JpbmROb2RlIiwiX19jaGVja0Rpc2FibGVtZW50Iiwia2V5U3RyaW5nIiwiQ0hFQ0tfRVhJU1RFTkNFIiwidGFyZ2V0UGFyZW50VmFsdWUiLCJfX3N0b3JlVHJpZ2dlckJ5S2V5cyIsIl9fYXR0clRyaWdnZXJCeUtleXMiLCJfX2NyZWF0ZUlzb2xhdGlvbk9iamVjdCIsIl9fYWxsIiwibGlua3MiLCJfX3N0b3JlVHJpZ2dlckJ5TmFtZSIsImluZm8iLCJjYWxsT25TdGFydCIsInN0YXJ0S2V5cyIsIm9ic2VydmUiLCJDSEVDS19QUk9YWSIsIl9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyIsIl9fb2JzZXJ2ZSIsImlzb2xhdGlvbktleSIsInVwZGF0ZWRBdCIsInBhcmVudEtleXNTdHJpbmciLCJrZXlzU3RyaW5nIiwiX19kZWxldGVOb2RlUHJvcGVydHkiLCJub2RlcyIsIl9fY2xlYXJFbXB0eUJpbmRpbmdzIiwiY2xlYXIiLCJfX3JlbW92ZSIsIl9fY2xlYXJTdG9yZUxpbmtzIiwib25SZW1vdmVkIiwicmVtb3ZlZCIsIl9fc3BsaWNlQ2hpbGQiLCJfX3JlbW92ZUNoaWxkcmVuIiwiZmluZEFsbCIsImxldmVscyIsImxldmVsIiwicmlnaHQiLCJsZXZlbEVsZW1lbnRzIiwiX19zdG9yZUJ5RnVuY3Rpb24iLCJfX3N0b3JlQnlLZXlzIiwiX19hdHRyQnlGdW5jdGlvbiIsIl9fYXR0ckJ5S2V5cyIsIl9fdW5zdG9yZUJ5RnVuY3Rpb24iLCJfX3Vuc3RvcmVCeUtleXMiLCJfX3VuYXR0ckJ5RnVuY3Rpb24iLCJfX3VuYXR0ckJ5S2V5cyIsIl9fZ2V0UGFyZW50IiwiX19nZXRDaGlsZHJlbiIsIl9fZ2V0TmVhciIsImFwcGVuZENoaWxkIiwiX19lbXB0eSIsIl9fZGVzdHJveSIsIlJlcXVlc3QiLCJiYXNlVXJsIiwiZGVmYXVsdHMiLCJfX2NhY2hlIiwic3RhdHVzRXJyb3JzUGF0dGVybiIsInJlamVjdCIsIm1ldGhvZCIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwiYmVmb3JlIiwidHJhbnNmb3JtQmVmb3JlIiwib25TdGFydCIsImhlYWRlcnMiLCJqc29uIiwicmVzcG9uc2VUeXBlIiwiZm9ybSIsImNyZWF0ZUZvcm1EYXRhIiwicGFyYW1zIiwicGFyYW1zVG9RdWVyeSIsImNyZWF0ZUNhY2hlSGFzaCIsInVzZXIiLCJwYXNzd29yZCIsIl9jYWNoZSIsImdldENhY2hlIiwibm93IiwiY3JlYXRlZEF0IiwicmVtb3ZlQ2FjaGUiLCJ0aW1lb3V0Iiwid2l0aENyZWRlbnRpYWxzIiwic2V0UmVxdWVzdEhlYWRlciIsIm9uUHJvZ3Jlc3MiLCJvbnByb2dyZXNzIiwib25sb2FkIiwicmVzcG9uc2UiLCJ0cmFuc2Zvcm1BZnRlciIsImNyZWF0ZUNhY2hlIiwib250aW1lb3V0Iiwib25lcnJvciIsInNlbmQiLCJjaGFyIiwiY2hhckNvZGVBdCIsInNlcCIsImVxIiwia3MiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ2Iiwib3B0IiwicXVlcnkiLCJhbXBzIiwiZXFzIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwibmFtZXNwYWNlIiwiZmQiLCJGb3JtRGF0YSIsImFwcGVuZCIsInRvSVNPU3RyaW5nIiwiX19pbnN0YW5jZXMiLCJhZGRJbnN0YW5jZSIsImluc3RhbmNlIiwicmVtb3ZlSW5zdGFuY2UiLCJ2YWx1ZUtleSIsImRlYm91bmNlSW50ZXJ2YWwiLCJkZWJvdW5jZVRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJvbkRlYm91bmNlIiwic2V0Rm9jdXMiLCJzZXRWYWx1ZSIsInNldERlYm91bmNlIiwiaW50ZXJ2YWwiLCJzZXRFbGVtZW50Rm9jdXMiLCJzZXRFbGVtZW50Qmx1ciIsImZvY3VzIiwiYmx1ciIsIkxvb3AiLCJfX2l0ZXJhdG9yIiwiX19rZXkiLCJfX3ZhbHVlIiwiX19pbmRleCIsIl9fY29tcGFyaXNvblZhbHVlIiwiaXRlcmF0b3JzIiwiaXRlcmF0b3JSZWYiLCJpdGVyYXRvck91dGVySFRNTCIsImNyZWF0ZUl0ZXJhdG9yIiwiZHJhdyIsIm1hc2siLCJuZXh0U2libGluZyIsImNvbnRlbnQiLCJmaXJzdENoaWxkIiwiZGF0YUNoYW5nZWQiLCJpdGVyYXRvciIsImNDb3B5IiwiY29tcGFyc2lvbiIsImNoYW5nZWQiLCJzZXRJbmRleCIsInNldEtleSIsImNyZWF0ZUl0ZXJhdG9yRWxlbWVudCIsImluc2VydEJlZm9yZSIsImxvb3AiLCJpdGVyYXRlIiwiZm9yIiwiaXNGb3IiLCJjYW5jZWwiLCJfX2VsIiwic3RyaWN0IiwiZWxDb21wb25lbnQiLCJmb3JjZSIsImluRXZhbHVhdGluZyIsInByZXBhcmVPcHRpb25zIiwiX0V2ZW50IiwidHlwZSIsInRyYW5zaXRpb24iLCJzdGF0ZSIsInBhdGgiLCJnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24iLCJfX3RyYW5zaXRpb24iLCJlbXB0eSIsImV4aXN0cyIsImxvYWRlZCIsIlRyYW5zaXRpb24iLCJyb3V0ZXMiLCJzdGF0ZXMiLCJyb3V0ZSIsImhhc2hNb2RlIiwiX19yZWRpcmVjdHMiLCJfX29wdGlvbnMiLCJfX3BhcmFtUmVnZXgiLCJfX3JvdXRlU2VsZWN0b3IiLCJhZGQiLCJwYXR0ZXJuIiwiZGVmYXVsdE9wdGlvbnMiLCJhYnN0cmFjdCIsInNldFN0YXRlIiwiZ2V0U3RhdGUiLCJjcmVhdGVTdGF0ZVVybCIsInJlbG9hZCIsImdldFVybCIsImJhY2siLCJoaXN0b3J5IiwiZ28iLCJmb3J3YXJkIiwibG9jYXRpb24iLCJlcnJvciIsInB1c2hTdGF0ZSIsImRlZmF1bHRVcmwiLCJvbGRQdXNoU3RhdGUiLCJfX29uU3RhdGVDaGFuZ2VIYW5kbGVyIiwiaW5pdFN0YXRlIiwicGFyZW50TmFtZSIsImZ1bGxQYXR0ZXJuIiwic3BsaXRTbGFzaGVzIiwicmVtb3ZlU3RhdGUiLCJzZXRIYXNoVXJsIiwic2V0SGlzdG9yeVVybCIsImdldEhhc2hVcmwiLCJnZXRIaXN0b3J5VXJsIiwicGF0aG5hbWUiLCJzZWFyY2giLCJnZXRVcmxRdWVyeSIsImdldEhhc2hVcmxRdWVyeSIsImdldEhpc3RvcnlVcmxRdWVyeSIsInBhcmFtc0Zyb21RdWVyeSIsImYiLCJnZXRQYXR0ZXJuQ29udGVudCIsInVybFBhdHRlcm4iLCJyZWdleCIsImlzSW5jbHVkZWQiLCJpc0FjdGl2ZVN0YXRlIiwiaW5jbHVkZXMiLCJpbkFjdGl2ZVN0YXRlIiwiZ2V0Um91dGUiLCJnZXRBcnJheVBhdHRlcm5Db250ZW50IiwiZ2V0U3RhdGVzQnlMZXZlbCIsIl9faXNvbGF0ZWQiLCJfX2Rpc2FibGVDaGFuZ2UiLCJwcmV2VHJhbnNpdGlvbiIsIm9uRW5kIiwic2V0UGF0aCIsImhhc1N0YXRlIiwiaXNEaWZmZXJlbnQiLCJwcmV2IiwidGl0bGUiLCJzZXRUcmFuc2l0aW9uIiwic2F2ZVNjcm9sbFBvc2l0aW9uIiwic2Nyb2xsVG8iLCJFbHNlSWYiLCJFbHNlIiwiYWN0aXZlIiwicmVjcmVhdGUiLCJpc0NvbXBpbGVkIiwiZGlzcGxheSIsImdldENvbXB1dGVkU3R5bGUiLCJzZXRSZWNyZWF0aW9uIiwiY29tcGlsYXRpb24iLCJuZXh0RWxlbWVudFNpYmxpbmciLCJyZXN1bHQiLCJzZXRBY3Rpdml0eSIsIk9wdGlvbiIsIml0ZXJhdG9yVGFnTmFtZSIsImlzTXVsdGlwbGUiLCJnZXRDb250ZW50Iiwic2V0TXVsdGlwbGUiLCJzZXRDb250ZW50IiwiZHJhd1NlbGVjdCIsImNoYW5nZVZhbHVlIiwiZm9ybWF0VmFsdWUiLCJzZWxlY3RlZCIsIm9wdGlvbiIsInNlbGVjdGlvbiIsInJlZGVmaW5lIiwib25DaGFuZ2UiLCJkaXNwYXRjaCIsIkV2ZW50Iiwic2V0U2VsZWN0ZWQiLCJpc0NoZWNrYm94IiwiaXNSYWRpbyIsInNldENoZWNrZWQiLCJjaGVja2VkIiwicHJldkNoZWNrZWQiLCJjaGFuZ2VSYWRpbyIsInJhZGlvIiwiUmFkaW9CdXR0b24iLCJpdGVyYWJsZSIsImdldFJhZGlvVmFsdWUiLCJwcmV2VmFsdWUiLCJvblJhZGlvIiwic2V0TmFtZXMiLCJpc1RydWUiLCJpc1NlbGVjdGVkIiwicmFuZ2UiLCJjcmVhdGVSYW5nZSIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJjb25uZWN0aW9uIiwic2V0Q2FjaGUiLCJhYm9ydCIsIm9uTG9hZCIsIm9uRXJyb3IiLCJPYmplY3RzIiwiaXNVcmwiLCJwcmV2ZW50RGVmYXVsdCIsIm9uU3RhdGVDaGFuZ2VkIiwic2V0UGFyYW1zIiwic2V0UXVlcnkiLCJzZXRIYXNoIiwic2V0T3B0aW9ucyIsInJlc2V0SHJlZiIsImhyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcERBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7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LFdBQUtvVCxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OytCQUVVeFgsTyxFQUFTO0FBQ2xCLFVBQUksUUFBT0EsT0FBUCx5Q0FBT0EsT0FBUCxNQUFrQixRQUFsQixJQUE4QixDQUFDQSxPQUFuQyxFQUE0QztBQUMxQyxjQUFNLElBQUlvRSxLQUFKLDBDQUFOO0FBQ0Q7O0FBRUQsV0FBS3BFLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7NkJBRVFzRSxJLEVBQU07QUFDYixVQUFJdWhCLFFBQVEsaUJBQU9xQixRQUFQLENBQWdCNWlCLElBQWhCLENBQVo7O0FBRUEsVUFBSSxDQUFDdWhCLEtBQUwsRUFBWTtBQUNWLGNBQU0sSUFBSXpoQixLQUFKLHdDQUErQ0UsSUFBL0MsT0FBTjtBQUNEOztBQUVELGFBQU91aEIsS0FBUDtBQUNEOzs7Z0NBRVc7QUFDVixVQUFJLEtBQUszVSxHQUFULEVBQWM7QUFDWixhQUFLQyxLQUFMLENBQVdvZCxJQUFYLEdBQWtCLEtBQUtyZCxHQUF2QjtBQUNELE9BRkQsTUFHSztBQUNILGFBQUtDLEtBQUwsQ0FBV29kLElBQVgsR0FBa0IsaUJBQU9wSCxjQUFQLENBQXNCLEtBQUt0QixLQUEzQixFQUFrQyxLQUFLOUYsTUFBdkMsRUFBK0MsS0FBSzhCLEtBQXBELEVBQTJELEtBQUtySyxJQUFoRSxDQUFsQjtBQUNEO0FBQ0Y7Ozs7OztBQXJIa0JuVyxDLENBQ1p3RyxPLEdBQVUsdUM7QUFERXhHLEMsQ0FFWnlULGlCLEdBQW9CLEk7a0JBRlJ6VCxDIiwiZmlsZSI6ImFraWxpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNzE1ZmYyMWE5Y2ZmNWE1NGMwNGQiLCIvKipcbiAqIEphdmFzY3JpcHQgZnJhbWV3b3JrXG4gKlxuICogY29uc3QgQWtpbGkgPSBtYWtlSXRFYXN5KGpzICsgaHRtbCk7XG4gKlxuICogQGF1dGhvciBBbGV4YW5kciBCYWxhc3lhbiA8bXl3ZWJzdHJlZXRAZ21haWwuY29tPlxuICogQGxpbmsgaHR0cDovL2FraWxpanMuY29tXG4gKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgSWYgZnJvbSAnLi9jb21wb25lbnRzL2lmLmpzJztcbmltcG9ydCBGb3IgZnJvbSAnLi9jb21wb25lbnRzL2Zvci5qcyc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vY29tcG9uZW50cy9zZWxlY3QuanMnO1xuaW1wb3J0IElucHV0IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC5qcyc7XG5pbXBvcnQgUmFkaW8gZnJvbSAnLi9jb21wb25lbnRzL3JhZGlvLmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vY29tcG9uZW50cy90ZXh0LmpzJztcbmltcG9ydCBUZXh0YXJlYSBmcm9tICcuL2NvbXBvbmVudHMvdGV4dGFyZWEuanMnO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb21wb25lbnRzL2NvbnRlbnQuanMnO1xuaW1wb3J0IEluY2x1ZGUgZnJvbSAnLi9jb21wb25lbnRzL2luY2x1ZGUuanMnO1xuaW1wb3J0IElmcmFtZSBmcm9tICcuL2NvbXBvbmVudHMvaWZyYW1lLmpzJztcbmltcG9ydCBJbWFnZSBmcm9tICcuL2NvbXBvbmVudHMvaW1hZ2UuanMnO1xuaW1wb3J0IEVtYmVkIGZyb20gJy4vY29tcG9uZW50cy9lbWJlZC5qcyc7XG5pbXBvcnQgQXVkaW8gZnJvbSAnLi9jb21wb25lbnRzL2F1ZGlvLmpzJztcbmltcG9ydCBWaWRlbyBmcm9tICcuL2NvbXBvbmVudHMvdmlkZW8uanMnO1xuaW1wb3J0IFRyYWNrIGZyb20gJy4vY29tcG9uZW50cy90cmFjay5qcyc7XG5pbXBvcnQgU291cmNlIGZyb20gJy4vY29tcG9uZW50cy9zb3VyY2UuanMnO1xuaW1wb3J0IE9iamVjdHMgZnJvbSAnLi9jb21wb25lbnRzL29iamVjdC5qcyc7XG5pbXBvcnQgUm91dGUgZnJvbSAnLi9jb21wb25lbnRzL3JvdXRlLmpzJztcbmltcG9ydCBVcmwgZnJvbSAnLi9jb21wb25lbnRzL3VybC5qcyc7XG5pbXBvcnQgQSBmcm9tICcuL2NvbXBvbmVudHMvYS5qcyc7XG5pbXBvcnQgU2NvcGUgZnJvbSAnLi9zY29wZS5qcyc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlci5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuL3NlcnZpY2VzL3JvdXRlci5qcyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zZXJ2aWNlcy9zdG9yZS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5cbmNvbnN0IEFraWxpID0ge307XG5cbi8qKlxuICogU2V0IHRoZSBmYXJtZXdvcmsncyBkZWZhdWx0IHZhcmlhYmxlc1xuICovXG5Ba2lsaS5zZXREZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5vcHRpb25zID0ge1xuICAgIGRlYnVnOiB0cnVlLFxuICAgIGdsb2JhbHM6IHt9XG4gIH07XG4gIFxuICB0aGlzLl9faW5pdCA9IG51bGw7XG4gIHRoaXMuX19jbGVhcmVkID0gZmFsc2U7XG4gIHRoaXMuX19jb21wb25lbnRzID0ge307XG4gIHRoaXMuX19hbGlhc2VzID0ge307XG4gIHRoaXMuX19zY29wZXMgPSB7fTtcbiAgdGhpcy5fX3N0b3JlTGlua3MgPSB7fTtcbiAgdGhpcy5fX3dpbmRvdyA9IHt9O1xuICB0aGlzLl9faXNvbGF0aW9uID0gbnVsbDtcbiAgdGhpcy5fX2V2YWx1YXRpb24gPSBudWxsO1xuICB0aGlzLl9fb25FcnJvciA9ICgpID0+IHRoaXMudHJpZ2dlckluaXQoZmFsc2UpO1xuICBcbiAgdGhpcy5odG1sQm9vbGVhbkF0dHJpYnV0ZXMgPSBbXG4gICAgJ2Rpc2FibGVkJywgJ2NvbnRlbnRlZGl0YWJsZScsICdoaWRkZW4nXG4gIF07XG5cbiAgdGhpcy5jb21wb25lbnRzID0ge307XG4gIHRoaXMuc2VydmljZXMgPSB7fTtcblxuICB0aGlzLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbiAgdGhpcy5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG4gIHRoaXMuU2NvcGUgPSBTY29wZTtcbiAgdGhpcy51dGlscyA9IHV0aWxzO1xuICB0aGlzLmNvbXBvbmVudHMuQSA9IEE7XG4gIHRoaXMuY29tcG9uZW50cy5BdWRpbyA9IEF1ZGlvO1xuICB0aGlzLmNvbXBvbmVudHMuQ29udGVudCA9IENvbnRlbnQ7XG4gIHRoaXMuY29tcG9uZW50cy5Gb3IgPSBGb3I7XG4gIHRoaXMuY29tcG9uZW50cy5FbWJlZCA9IEVtYmVkO1xuICB0aGlzLmNvbXBvbmVudHMuSWYgPSBJZjtcbiAgdGhpcy5jb21wb25lbnRzLkluY2x1ZGUgPSBJbmNsdWRlO1xuICB0aGlzLmNvbXBvbmVudHMuSW5wdXQgPSBJbnB1dDtcbiAgdGhpcy5jb21wb25lbnRzLklmcmFtZSA9IElmcmFtZTtcbiAgdGhpcy5jb21wb25lbnRzLkltYWdlID0gSW1hZ2U7XG4gIHRoaXMuY29tcG9uZW50cy5PYmplY3QgPSBPYmplY3RzO1xuICB0aGlzLmNvbXBvbmVudHMuUmFkaW8gPSBSYWRpbztcbiAgdGhpcy5jb21wb25lbnRzLlJvdXRlID0gUm91dGU7XG4gIHRoaXMuY29tcG9uZW50cy5TZWxlY3QgPSBTZWxlY3Q7XG4gIHRoaXMuY29tcG9uZW50cy5Tb3VyY2UgPSBTb3VyY2U7XG4gIHRoaXMuY29tcG9uZW50cy5UZXh0ID0gVGV4dDtcbiAgdGhpcy5jb21wb25lbnRzLlRleHRhcmVhID0gVGV4dGFyZWE7XG4gIHRoaXMuY29tcG9uZW50cy5UcmFjayA9IFRyYWNrO1xuICB0aGlzLmNvbXBvbmVudHMuVXJsID0gVXJsO1xuICB0aGlzLmNvbXBvbmVudHMuVmlkZW8gPSBWaWRlbztcbiAgdGhpcy5zZXJ2aWNlcy5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgdGhpcy5zZXJ2aWNlcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIHRoaXMuc2VydmljZXMuc3RvcmUgPSBzdG9yZTtcblxuICB0aGlzLmRlZmluZSgpO1xuICB0aGlzLmVycm9ySGFuZGxpbmcoKTtcbiAgdGhpcy5pc29sYXRlRXZlbnRzKCk7XG4gIHRoaXMuaXNvbGF0ZUFycmF5UHJvdG90eXBlKCk7XG4gIHRoaXMuaXNvbGF0ZVdpbmRvd0Z1bmN0aW9ucygpO1xufVxuXG4vKipcbiAqIERlZmluZSBhbGwgZGVmYXVsdCBjb21wb25lbnRzXG4gKi9cbkFraWxpLmRlZmluZSA9IGZ1bmN0aW9uICgpIHtcbiAgQS5kZWZpbmUoKTtcbiAgQXVkaW8uZGVmaW5lKCk7XG4gIENvbnRlbnQuZGVmaW5lKCk7XG4gIENvbXBvbmVudC5kZWZpbmUoKTtcbiAgRW1iZWQuZGVmaW5lKCk7XG4gIEZvci5kZWZpbmUoKTtcbiAgSW5jbHVkZS5kZWZpbmUoKTtcbiAgSWZyYW1lLmRlZmluZSgpO1xuICBJbWFnZS5kZWZpbmUoKTtcbiAgSW5wdXQuZGVmaW5lKCk7XG4gIElmLmRlZmluZSgpO1xuICBPYmplY3RzLmRlZmluZSgpO1xuICBSYWRpby5kZWZpbmUoKTtcbiAgUm91dGUuZGVmaW5lKCk7XG4gIFNlbGVjdC5kZWZpbmUoKTtcbiAgU291cmNlLmRlZmluZSgpO1xuICBUZXh0YXJlYS5kZWZpbmUoKTtcbiAgVHJhY2suZGVmaW5lKCk7XG4gIFZpZGVvLmRlZmluZSgpO1xufTtcblxuLyoqXG4gKiBDbGVhciB0aGUgZ2xvYmFsIGNvbnRleHRcbiAqL1xuQWtpbGkuY2xlYXJHbG9iYWxzID0gZnVuY3Rpb24oKSB7XG4gIGlmKHRoaXMuX19jbGVhcmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZm9yIChsZXQga2V5IGluIHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUpIHtcbiAgICBFbGVtZW50LnByb3RvdHlwZVtrZXldID0gdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZVtrZXldO1xuICB9XG5cbiAgZm9yIChsZXQga2V5IGluIHRoaXMuX193aW5kb3cuQXJyYXkucHJvdG90eXBlKSB7XG4gICAgQXJyYXkucHJvdG90eXBlW2tleV0gPSB0aGlzLl9fd2luZG93LkFycmF5LnByb3RvdHlwZVtrZXldO1xuICB9XG5cbiAgd2luZG93LnNldFRpbWVvdXQgPSB0aGlzLl9fd2luZG93LnNldFRpbWVvdXQ7XG4gIHdpbmRvdy5zZXRJbnRlcnZhbCA9IHRoaXMuX193aW5kb3cuc2V0SW50ZXJ2YWw7XG4gIHdpbmRvdy5Qcm9taXNlID0gdGhpcy5fX3dpbmRvdy5Qcm9taXNlO1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCB0aGlzLl9fb25FcnJvcik7XG4gIHRoaXMuX19jbGVhcmVkID0gdHJ1ZTtcbn07XG5cbi8qKlxuICogSm9pbiBiaW5kaW5nIGtleXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIGJpbmRpbmcga2V5c1xuICovXG5Ba2lsaS5qb2luQmluZGluZ0tleXMgPSBmdW5jdGlvbihrZXlzKSB7XG4gIHJldHVybiBrZXlzLm1hcChlbCA9PiBlbC50b1N0cmluZygpKS5qb2luKCcuJyk7XG59O1xuXG4vKipcbiAqIEFkZCBzY29wZSB0byB0aGUgc2NvcGVzIGxpc3RcbiAqXG4gKiBAcGFyYW0gc2NvcGVcbiAqL1xuQWtpbGkuYWRkU2NvcGUgPSBmdW5jdGlvbihzY29wZSkge1xuICBpZiAodGhpcy5fX3Njb3Blc1tzY29wZS5fX25hbWVdKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBTY29wZSBuYW1lICR7c2NvcGUuX19uYW1lfSBhbHJlYWR5IGV4aXN0c2ApO1xuICB9XG5cbiAgdGhpcy5fX3Njb3Blc1tzY29wZS5fX25hbWVdID0gc2NvcGU7XG59O1xuXG4vKipcbiAqIEdldCBzY29wZSBmcm9tIHRoZSBzY29wZXMgbGlzdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc2NvcGUgbmFtZVxuICogQHJldHVybnMge1Njb3BlfVxuICovXG5Ba2lsaS5nZXRTY29wZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuX19zY29wZXNbbmFtZV07XG59O1xuXG4vKipcbiAqIERlbGV0ZSBzY29wZSBmcm9tIHRoZSBzY29wZXMgbGlzdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc2NvcGUgbmFtZVxuICovXG5Ba2lsaS5yZW1vdmVTY29wZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgdGhpcy5fX3Njb3Blc1tuYW1lXSA9IG51bGw7XG4gIGRlbGV0ZSB0aGlzLl9fc2NvcGVzW25hbWVdO1xufTtcblxuLyoqXG4gKiBHZXQgYWxsIGVsZW1lbnRzIHdpdGggYXR0YWNoZWQgQWtpbGkgY29tcG9uZW50c1xuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3RyZWU9dHJ1ZV0gLSByZXR1cm4gYXJyYXkgb2YgdGhlIHBhcmVudHMgaWYgdHJ1ZSwgY2xvc2VzdCBwYXJlbnQgaWYgZmFsc2VcbiAqIEByZXR1cm5zIHtBcnJheXxFbGVtZW50fG51bGx9XG4gKi9cbkFraWxpLmdldEFraWxpUGFyZW50cyA9IGZ1bmN0aW9uIChlbCwgdHJlZSA9IHRydWUpIHtcbiAgbGV0IGFyciA9IFtdO1xuXG4gIGZ1bmN0aW9uIGNoZWNrKG5vZGUpIHtcbiAgICBpZiAoIW5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChub2RlLnBhcmVudE5vZGUuX19ha2lsaSkge1xuICAgICAgYXJyLnB1c2gobm9kZS5wYXJlbnROb2RlKTtcblxuICAgICAgaWYgKCF0cmVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVjayhub2RlLnBhcmVudE5vZGUpO1xuICB9XG5cbiAgY2hlY2soZWwpO1xuICByZXR1cm4gdHJlZT8gYXJyOiBhcnJbMF07XG59O1xuXG4vKipcbiAqIFNldCBlbGVtZW50IGlubmVyIGh0bWwgd2l0aCBjb250ZW50IHJlcGxhY2luZ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwiPGk+SGVsbG88L2k+PGI+V29ybGQ8L2I+XCJcbiAqIGVsLmlubmVySFRNTCA9IFwiPGI+V29ybGQ8L2I+XCI7XG4gKiBBa2lsaS5zZXRUZW1wbGF0ZShlbCwgXCI8aT5IZWxsbzwvaT4ke3RoaXMuX19jaGlsZHJlbn1cIik7XG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5Ba2lsaS5zZXRUZW1wbGF0ZSA9IGZ1bmN0aW9uKGVsLCB0ZW1wbGF0ZSkge1xuICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoL1xcJHsoKCg/IVxcJHspXFxzKnRoaXNcXC5fX2NvbnRlbnRcXHMqKSopfS8sIGVsLmlubmVySFRNTCk7XG4gIGVsLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuXG4gIHJldHVybiBlbC5pbm5lckhUTUw7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIHVuaXF1ZSBzY29wZSBuYW1lXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuQWtpbGkuY3JlYXRlU2NvcGVOYW1lID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB1dGlscy5jcmVhdGVSYW5kb21TdHJpbmcoMTYsIChzdHIpID0+IHtcbiAgICByZXR1cm4gISF0aGlzLl9fc2NvcGVzW3N0cl07XG4gIH0pO1xufTtcblxuLyoqXG4gKiBJc29sYXRlIGZ1bmN0aW9uLlxuICogRXZlcnkgc2NvcGUgdmFyaWFibGUgY2hhbmdlIGNhbGxzIGFjY29yZGluZyBub2RlIGV2YWx1YXRpb24uXG4gKiBGb3IgZXhhbXBsZSwgaWYgeW91IGNoYW5nZSBzb21lIHNjb3BlIHZhcmlhYmxlIGluIHRoZSBsb29wIC0gZXZhbHVhdGlvbiB3aWxsIGJlIGNhbGxlZCBvbiB0aGUgZWFjaCBjaGFuZ2UuXG4gKiBJdCBtYXkgYmUgc2xvdyBmb3IgdGhlIGFwcGxpY2F0aW9uLlxuICogWW91IGNhbiBpc29sYXRlIHRoaXMgYWN0aW9uIGFuZCBydW4gYWxsIGV2YWx1YXRpb24gcHJvY2VzcyBhZnRlciBwYXNzZWQgZnVuY3Rpb24gYXQgb25jZS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLmlzb2xhdGUgPSBmdW5jdGlvbihmbikgeyBcbiAgaWYgKHRoaXMuX19pc29sYXRpb24pIHtcbiAgICByZXR1cm4gZm4oKTtcbiAgfVxuXG4gIHRoaXMuX19pc29sYXRpb24gPSB7fTtcbiAgbGV0IHJlcyA9IGZuKCk7XG4gIGxldCBwcm9wcyA9IFtdO1xuXG4gIGZvciAobGV0IGsgaW4gdGhpcy5fX2lzb2xhdGlvbikge1xuICAgIGlmICghdGhpcy5fX2lzb2xhdGlvbi5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcHJvcHMucHVzaCh0aGlzLl9faXNvbGF0aW9uW2tdKTtcbiAgfVxuICBcbiAgdGhpcy5fX2lzb2xhdGlvbiA9IG51bGw7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBwcm9wcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgcHJvcCA9IHByb3BzW2ldO1xuXG4gICAgaWYgKHByb3AuaXNEZWxldGVkKSB7XG4gICAgICBwcm9wLmNvbXBvbmVudC5fX2V2YWx1YXRlQnlLZXlzKHByb3Aua2V5cywgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBcbiAgICBwcm9wLmNvbXBvbmVudC5zY29wZS5fX3NldChwcm9wLmtleXMsIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKHByb3Aua2V5cywgcHJvcC5jb21wb25lbnQuX19zY29wZSkpO1xuICB9XG5cbiAgcHJvcHMgPSBudWxsO1xuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBTdG9wIGV2YWx1YXRpb24gYmVmb3JlIHRoZSBmdW5jdGlvbiBhbmQgY29udGludWUgYWZ0ZXJcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLnVuZXZhbHVhdGUgPSBmdW5jdGlvbihmbikge1xuICBsZXQgZXZhbHVhdGlvbiA9IHRoaXMuX19ldmFsdWF0aW9uO1xuICBsZXQgcmVzO1xuICB0aGlzLl9fZXZhbHVhdGlvbiA9IG51bGw7XG4gIHJlcyA9IGZuKCk7XG4gIHRoaXMuX19ldmFsdWF0aW9uID0gZXZhbHVhdGlvbjtcbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogU3RvcCBpc29sYXRpb24gYmVmb3JlIHRoZSBmdW5jdGlvbiBhbmQgY29udGludWUgYWZ0ZXJcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLnVuaXNvbGF0ZSA9IGZ1bmN0aW9uKGZuKSB7XG4gIGxldCBpc29sYXRpb24gPSB0aGlzLl9faXNvbGF0aW9uO1xuICBsZXQgcmVzO1xuICB0aGlzLl9faXNvbGF0aW9uID0gbnVsbDtcbiAgcmVzID0gZm4oKTtcbiAgdGhpcy5fX2lzb2xhdGlvbiA9IGlzb2xhdGlvbjtcbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogUnVuIHRoZSBmdW5jdGlvbiBvbiB0aGUgbmV4dCB0aWNrXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5Ba2lsaS5uZXh0VGljayA9IGZ1bmN0aW9uKGZuKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzKSA9PiBzZXRUaW1lb3V0KCgpID0+IFByb21pc2UucmVzb2x2ZShmbigpKS50aGVuKHJlcykpKTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zPXt9XVxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLmluaXRpYWxpemUgPSBmdW5jdGlvbihlbCwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCByZWNvbXBpbGUgPSBvcHRpb25zLnJlY29tcGlsZTtcbiAgbGV0IGNvbXBvbmVudCA9IGVsLl9fYWtpbGk7XG5cbiAgaWYgKGNvbXBvbmVudCkge1xuICAgIGlmIChyZWNvbXBpbGUpIHtcbiAgICAgIGNvbXBvbmVudC5fX3JlY29tcGlsZSgpO1xuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgaXNSb290ID0gZWwgPT09IHRoaXMuX19yb290O1xuICBsZXQgY29tcG9uZW50TmFtZSA9IHV0aWxzLnRvRGFzaENhc2UoZWwuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKSB8fCBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpO1xuICBsZXQgX0NvbXBvbmVudCA9IHRoaXMuX19jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdO1xuXG4gIENIRUNLX0FMSUFTRVM6IGlmICghX0NvbXBvbmVudCkge1xuICAgIGxldCBzZWxlY3RvcnMgPSBPYmplY3Qua2V5cyh0aGlzLl9fYWxpYXNlcyk7XG5cbiAgICBpZiAoIXNlbGVjdG9ycy5sZW5ndGgpIHtcbiAgICAgIGJyZWFrIENIRUNLX0FMSUFTRVM7XG4gICAgfVxuXG4gICAgbGV0IHNlbGVjdG9yQWxsID0gc2VsZWN0b3JzLmpvaW4oJywnKTtcblxuICAgIGlmICghZWwubWF0Y2hlcyhzZWxlY3RvckFsbCkpIHtcbiAgICAgIGJyZWFrIENIRUNLX0FMSUFTRVM7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBzZWxlY3RvcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgc2VsZWN0b3IgPSBzZWxlY3RvcnNbaV07XG5cbiAgICAgIGlmIChlbC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBfQ29tcG9uZW50ID0gdGhpcy5fX2NvbXBvbmVudHNbdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKCFfQ29tcG9uZW50ICYmICFpc1Jvb3QpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIV9Db21wb25lbnQpIHtcbiAgICBfQ29tcG9uZW50ID0gdGhpcy5Db21wb25lbnQ7XG4gIH1cblxuICBpZiAoX0NvbXBvbmVudC5tYXRjaGVzICYmICFlbC5tYXRjaGVzKF9Db21wb25lbnQubWF0Y2hlcykpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb21wb25lbnQgPSBuZXcgX0NvbXBvbmVudChlbCwge30pOyAgXG4gIFxuICBpZiAoY29tcG9uZW50Ll9fY2FuY2VsbGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYoQWtpbGkuZ2V0QWtpbGlQYXJlbnRzKGVsKS5maW5kKHAgPT4gcC5fX2FraWxpLl9fcHJldmVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb21wb25lbnQuX19jcmVhdGUoKTtcbiAgcmV0dXJuIGNvbXBvbmVudDtcbn07XG5cbi8qKlxuICogQ29tcGlsZSB0aGUgZWxlbWVudFxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbkFraWxpLmNvbXBpbGUgPSBmdW5jdGlvbihyb290LCBvcHRpb25zID0geyByZWNvbXBpbGU6IGZhbHNlIH0pIHsgIFxuICBsZXQgZWxlbWVudHMgPSBbXTtcblxuICBjb25zdCBuZXN0ZWRJbml0aWFsaXppbmcgPSAoZWwpID0+IHtcbiAgICBsZXQgY29tcG9uZW50ID0gdGhpcy5pbml0aWFsaXplKGVsLCBvcHRpb25zKTtcbiAgICBsZXQgY2hpbGRyZW4gPSBlbC5jaGlsZHJlbjtcbiAgICBjb21wb25lbnQgJiYgZWxlbWVudHMucHVzaChjb21wb25lbnQpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmVzdGVkSW5pdGlhbGl6aW5nKGNoaWxkKTtcbiAgICB9XG4gIH07XG5cbiAgbmVzdGVkSW5pdGlhbGl6aW5nKHJvb3QpO1xuICBsZXQgcCA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGNvbXBvbmVudCA9IGVsZW1lbnRzW2ldO1xuICAgIHAucHVzaChjb21wb25lbnQuX19jb21waWxlKCkpO1xuICB9XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKHApLnRoZW4oKCkgPT4ge1xuICAgIGxldCByID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gZWxlbWVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBjb21wb25lbnQgPSBlbGVtZW50c1tpXTtcbiAgICAgIHIucHVzaChjb21wb25lbnQuX19yZXNvbHZlKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLmFsbChyKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIHRoZSBjb21wb25lbnQgb3IgZ2V0IGl0IGlmIGZuIGlzIG5vdCBwYXNzZWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtDb21wb25lbnR9IFtmbl1cbiAqL1xuQWtpbGkuY29tcG9uZW50ID0gZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuICBpZiAoIWZuKSB7XG4gICAgcmV0dXJuIHRoaXMuX19jb21wb25lbnRzW25hbWVdIHx8IG51bGw7XG4gIH1cbiAgXG4gIGlmICh0aGlzLl9fY29tcG9uZW50c1tuYW1lXSAmJiBBa2lsaS5vcHRpb25zLmRlYnVnKSB7ICBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihgQ29tcG9uZW50ICR7bmFtZX0gYWxyZWFkeSB3YXMgYWRkZWRgKTtcbiAgfVxuXG4gIHRoaXMuX19jb21wb25lbnRzW25hbWVdID0gZm47XG59O1xuXG4vKipcbiAqIFVucmVnaXN0ZXIgdGhlIGNvbXBvbmVudFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbkFraWxpLnVucmVnaXN0ZXJDb21wb25lbnQgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLl9fY29tcG9uZW50c1tuYW1lXTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIHNlbGVjdG9yIGFsaWFzIG9yIGdldCBpdCBpZiBjb21wb25lbnQgbmFtZSBpcyBub3QgcGFzc2VkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIC0gRE9NIHNlbGVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvbXBvbmVudE5hbWVdXG4gKi9cbkFraWxpLmFsaWFzID0gZnVuY3Rpb24oc2VsZWN0b3IsIGNvbXBvbmVudE5hbWUgPSAnJykge1xuICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmICghY29tcG9uZW50TmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gJiYgQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKGBBbGlhcyB3aXRoIHNlbGVjdG9yICR7c2VsZWN0b3J9IGFscmVhZHkgd2FzIGFkZGVkYCk7XG4gIH1cblxuICB0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gPSBjb21wb25lbnROYW1lO1xufTtcblxuLyoqXG4gKiBVbnJlZ2lzdGVyIHRoZSBzZWxlY3RvciBhbGlhc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICovXG5Ba2lsaS51bnJlZ2lzdGVyQWxpYXMgPSBmdW5jdGlvbihzZWxlY3Rvcikge1xuICBkZWxldGUgdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdO1xufTtcblxuLyoqXG4gKiBJc29sYXRlIGFycmF5IHByb3RvdHlwZSBmdW5jdGlvbnNcbiAqL1xuQWtpbGkuaXNvbGF0ZUFycmF5UHJvdG90eXBlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX193aW5kb3cuQXJyYXkgPSB7IHByb3RvdHlwZToge30gfTtcblxuICBsZXQga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKEFycmF5LnByb3RvdHlwZSk7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgIGxldCBvbGQgPSBBcnJheS5wcm90b3R5cGVba2V5XTtcblxuICAgIGlmICh0eXBlb2Ygb2xkICE9ICdmdW5jdGlvbicgfHwga2V5ID09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHRoaXMuX193aW5kb3cuQXJyYXkucHJvdG90eXBlW2tleV0gPSBvbGQ7XG5cbiAgICBBcnJheS5wcm90b3R5cGVba2V5XSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIEFraWxpLnVuZXZhbHVhdGUoKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX19pc1Byb3h5KSB7XG4gICAgICAgICAgcmV0dXJuIG9sZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9sZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbn07XG5cbi8qKlxuICogSXNvbGF0ZSBzb21lIHdpbmRvdyBmdW5jdGlvbnNcbiAqL1xuQWtpbGkuaXNvbGF0ZVdpbmRvd0Z1bmN0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9fd2luZG93LnNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICB0aGlzLl9fd2luZG93LnNldEludGVydmFsID0gc2V0SW50ZXJ2YWw7XG4gIHRoaXMuX193aW5kb3cuUHJvbWlzZSA9IFByb21pc2U7XG4gIHdpbmRvdy5zZXRUaW1lb3V0ID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuc2V0VGltZW91dCwgMCk7XG4gIHdpbmRvdy5zZXRJbnRlcnZhbCA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LnNldEludGVydmFsLCAwKTtcbiAgd2luZG93LlByb21pc2UuY29uc3RydWN0b3IgPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5Qcm9taXNlLmNvbnN0cnVjdG9yKTtcbiAgd2luZG93LlByb21pc2UucHJvdG90eXBlLnRoZW4gPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS50aGVuLCBbMCwgJ2xhc3QnXSk7XG4gIHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS5jYXRjaCA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LlByb21pc2UucHJvdG90eXBlLmNhdGNoKTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSBldmVudCBsaXN0ZW5lcnNcbiAqL1xuQWtpbGkuaXNvbGF0ZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQgPSB7IHByb3RvdHlwZToge30gfTtcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcjtcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcjtcbiAgdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmU7XG5cbiAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgZGVsZXRlIHRoaXMuX19ha2lsaUxpc3RlbmVycztcbiAgICByZXR1cm4gQWtpbGkuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgbGV0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVycykge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzID0ge307XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGFyZ3NbMV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5wdXNoKHtcbiAgICAgIGxpbms6IGZuLFxuICAgICAgZm46IGFyZ3NbMV1cbiAgICB9KTtcblxuICAgIHJldHVybiBBa2lsaS5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihuYW1lLCBmbikge1xuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV1baV07XG5cbiAgICAgIGlmIChsaXN0ZW5lci5saW5rID09PSBmbikge1xuICAgICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICBpLS07XG4gICAgICAgIGwtLTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdO1xuICAgIH1cblxuICAgIHJldHVybiBBa2lsaS5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG4vKipcbiAqIFdyYXAgdGhlIGZ1bmN0aW9uIGNhbGxiYWNrIHRvIGFuIGlzb2xhdGUgY29udGV4dFxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd8bnVtYmVyW118c3RyaW5nW119IFtwb3M9XCJsYXN0XCJdXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbkFraWxpLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uID0gZnVuY3Rpb24oZm4sIHBvcyA9ICdsYXN0Jykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGxldCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICFBcnJheS5pc0FycmF5KHBvcykgJiYgKHBvcyA9IFtwb3NdKTtcbiAgICBcbiAgICBmb3IobGV0IGkgPSAwLCBsID0gcG9zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG51bSA9IHBvc1tpXTtcbiAgICAgIGxldCBpbmRleCA9IG51bTtcbiAgICAgIGxldCBjYWxsYmFjayA9IGFyZ3NbbnVtXTtcblxuICAgICAgaWYobnVtID09ICdsYXN0Jykge1xuICAgICAgICBpbmRleCA9IGFyZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgY2FsbGJhY2sgPSBhcmdzW2luZGV4XTtcbiAgICAgIH1cblxuICAgICAgaWYodHlwZW9mIGNhbGxiYWNrICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGFyZ3NbaW5kZXhdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkoY2FsbGJhY2ssIGFyZ3VtZW50cyk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG59O1xuXG4vKipcbiAqIElzb2xhdGUgdGhlIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7b2JqZWN0fSBbY29udGV4dF1cbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqL1xuQWtpbGkuaXNvbGF0ZUZ1bmN0aW9uID0gZnVuY3Rpb24oZm4sIGNvbnRleHQgPSBudWxsKSB7XG4gIGlmIChmbi5fX2FraWxpKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgbGV0IG9GbiA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IHRoaXM7XG5cbiAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICByZXR1cm4gZm4uYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcbiAgICB9KTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob0ZuLCAnX19ha2lsaScsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG5cbiAgcmV0dXJuIG9Gbjtcbn07XG5cbi8qKlxuICogRXJyb3IgaGFuZGxpbmdcbiAqL1xuQWtpbGkuZXJyb3JIYW5kbGluZyA9IGZ1bmN0aW9uKCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCB0aGlzLl9fb25FcnJvcik7XG59O1xuXG4vKipcbiAqIFRyaWdnZXIgYW4gaW5pdGlhbGl6YXRpb24gc3RhdHVzXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBzdGF0dXNcbiAqL1xuQWtpbGkudHJpZ2dlckluaXQgPSBmdW5jdGlvbihzdGF0dXMpIHtcbiAgQWtpbGkuX19pbml0ID0gc3RhdHVzO1xuICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2FraWxpLWluaXQnLCB7IGRldGFpbDogc3RhdHVzIH0pKTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgYXBwbGljYXRpb25cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IFtyb290XVxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbkFraWxpLmluaXQgPSBmdW5jdGlvbihyb290KSB7XG4gIHJvb3QgPSByb290IHx8IGRvY3VtZW50LmJvZHk7XG5cbiAgaWYoIShyb290IGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFJvb3QgZWxlbWVudCBtdXN0IGJlIGFuIGh0bWwgZWxlbWVudGApO1xuICB9XG5cbiAgaWYocm9vdCA9PT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBcImh0bWxcIiBjYW4ndCBiZSB0aGUgcm9vdCBlbGVtZW50YCk7XG4gIH1cblxuICB0aGlzLl9fcm9vdCA9IHJvb3Q7XG4gIFxuICBpZih3aW5kb3cuQUtJTElfU0VSVkVSKSB7XG4gICAgbGV0IGh0bWwgPSB3aW5kb3cuQUtJTElfU0VSVkVSLmh0bWw7XG5cbiAgICBmb3IgKGxldCBpID0gdGhpcy5fX3Jvb3QuYXR0cmlidXRlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSl7XG4gICAgICB0aGlzLl9fcm9vdC5yZW1vdmVBdHRyaWJ1dGUodGhpcy5fX3Jvb3QuYXR0cmlidXRlc1tpXS5uYW1lKTtcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgIGxldCBkb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGh0bWwsIFwidGV4dC9odG1sXCIpO1xuICAgIGxldCBlbCA9IGRvYy5xdWVyeVNlbGVjdG9yKHRoaXMuX19yb290ID09PSBkb2N1bWVudC5ib2R5PyAnYm9keSc6ICdib2R5ID4gKicpOyAgICBcbiAgICB0aGlzLl9fcm9vdC5pbm5lckhUTUwgPSBlbC5pbm5lckhUTUw7XG5cbiAgICBmb3IgKGxldCBpID0gZWwuYXR0cmlidXRlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IGF0dHIgPSBlbC5hdHRyaWJ1dGVzW2ldO1xuICAgICAgdGhpcy5fX3Jvb3Quc2V0QXR0cmlidXRlKGF0dHIubmFtZSwgYXR0ci52YWx1ZSk7XG4gICAgfSAgXG4gIH1cbiAgZWxzZSB7XG4gICAgd2luZG93LkFLSUxJX0NMSUVOVCA9IHtcbiAgICAgIGh0bWw6IHRoaXMuX19yb290Lm91dGVySFRNTFxuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIHRoaXMuY29tcGlsZSh0aGlzLl9fcm9vdCkudGhlbigoKSA9PiB7XG4gICAgaWYgKHJvdXRlci5fX2luaXQpIHtcbiAgICAgIHJldHVybiByb3V0ZXIuY2hhbmdlU3RhdGUoKTtcbiAgICB9XG4gIH0pLnRoZW4oKCkgPT4ge1xuICAgIHRoaXMudHJpZ2dlckluaXQodHJ1ZSk7XG4gIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICB0aGlzLnRyaWdnZXJJbml0KGZhbHNlKTtcbiAgICB0aHJvdyBlcnI7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBEZWluaXRpYWxpemUgdGhlIGFwcGxpY2F0aW9uXG4gKi9cbkFraWxpLmRlaW5pdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmNsZWFyR2xvYmFscygpO1xuICByb3V0ZXIuZGVpbml0KCk7XG4gIHJlcXVlc3QuZGVpbml0KCk7XG4gIGxldCBzdG9yZUtleXMgPSBPYmplY3Qua2V5cyhzdG9yZS5fX3RhcmdldCk7XG4gIFxuICBmb3IobGV0IGkgPSAwLCBsID0gc3RvcmVLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGRlbGV0ZSBzdG9yZS5fX3RhcmdldFtzdG9yZUtleXNbaV1dO1xuICB9XG5cbiAgdGhpcy5zZXREZWZhdWx0cygpO1xufTtcblxud2luZG93LkFraWxpID0gQWtpbGk7XG5leHBvcnQgZGVmYXVsdCBBa2lsaTtcbkFraWxpLnNldERlZmF1bHRzKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FraWxpLmpzIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXIuanMnXG5cbmNvbnN0IHV0aWxzID0ge307XG5cbi8qKlxuICogQ3JlYXRlIGNsYXNzIGF0dHJpYnV0ZSBmcm9tIGFuIG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwicmVkIGFjdGl2ZVwiXG4gKiB1dGlscy5jbGFzcyh7cmVkOiB0cnVlLCBhY3RpdmU6IHRydWUsIGdyZWVuOiBmYWxzZX0pO1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmNsYXNzID0gZnVuY3Rpb24gKG9iaikge1xuICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGxldCBjbGFzc2VzID0gW107XG4gIGxldCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGsgPSBrZXlzW2ldO1xuICAgIGxldCB2YWwgPSBvYmpba107XG4gICAgdmFsICYmIGNsYXNzZXMucHVzaChrKTtcbiAgfVxuXG4gIHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIHN0eWxlIGF0dHJpYnV0ZSBmcm9tIGFuIG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwiY29sb3I6cmVkO3dpZHRoOjEwcHhcIlxuICogdXRpbHMuc3R5bGUoe2NvbG9yOiBcInJlZFwiLCBiYWNrZ3JvdW5kOiBmYWxzZSwgd2lkdGg6IFwiMTBweFwifSk7XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuc3R5bGUgPSBmdW5jdGlvbihvYmopIHtcbiAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBsZXQgc3R5bGVzID0gW107XG4gIGxldCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGsgPSBrZXlzW2ldO1xuICAgIGxldCB2YWwgPSBvYmpba107XG4gICAgdmFsICYmIHN0eWxlcy5wdXNoKGAke3RoaXMudG9EYXNoQ2FzZShrKX06JHt2YWx9YCk7XG4gIH1cblxuICByZXR1cm4gc3R5bGVzLmpvaW4oJzsnKTtcbn07XG5cbi8qKlxuICogU3BsaXQgdGhlIHN0cmluZ1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbXCJIZWxsb1wiLCBcIldvcmxkXCJdXG4gKiB1dGlscy5zcGxpdChcIkhlbGxvIFdvcmxkXCIsIFwiIFwiKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWyd4ID0gNScsICcgeSA9IFwiMTsyOzNcIiddXG4gKiB1dGlscy5zcGxpdCgneCA9IDU7IHkgPSBcIjE7MjszXCInLCBcIjtcIiwgWydcIiddKTtcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfSBzdHIgXG4gKiBAcGFyYW0ge3N0cmluZ30gW2RlbF1cbiAqIEBwYXJhbSB7c3RyaW5nW119IFtleGNsdWRlXSBcbiAqL1xudXRpbHMuc3BsaXQgPSBmdW5jdGlvbihzdHIsIGRlbCA9ICcnLCBleGNsdWRlID0gW10pIHtcblx0Y29uc3QgZXhwcyA9IFtdOyAgICAgXG4gIGxldCBsYXN0ID0gJyc7XG5cbiAgaWYoIWRlbCkge1xuICAgIHJldHVybiBzdHIuc3BsaXQoJycpO1xuICB9XG4gIGVsc2UgaWYoZGVsIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgcmV0dXJuIHN0ci5zcGxpdChkZWwpO1xuICB9XG4gIGVsc2UgaWYoc3RyLmluZGV4T2YoZGVsKSA9PSAtMSkge1xuICAgIGxhc3QgPSBzdHI7XG4gIH1cbiAgZWxzZSB7XG4gICAgY29uc3QgYXJyID0gc3RyLnNwbGl0KCcnKTtcbiAgICBsZXQgb3BlbiA9ICcnOyBcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgdmFsID0gYXJyW2ldO1xuICAgICAgbGV0IGluZGV4ID0gZXhjbHVkZS5pbmRleE9mKHZhbCk7ICAgICAgXG5cbiAgICAgIGlmKGluZGV4ID4gLTEgJiYgKCFvcGVuIHx8IG9wZW4gPT0gdmFsKSkge1xuICAgICAgICAhb3Blbj8gb3BlbiA9IGV4Y2x1ZGVbaW5kZXhdOiBvcGVuID0gJyc7XG4gICAgICB9XG5cbiAgICAgIGlmKHZhbCA9PSBkZWwgJiYgIW9wZW4pIHtcbiAgICAgICAgZXhwcy5wdXNoKGxhc3QpO1xuICAgICAgICBsYXN0ID0gJyc7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsYXN0ICs9IHZhbDtcbiAgICB9XG4gIH1cblxuICBsYXN0ICYmIGV4cHMucHVzaChsYXN0KTtcbiAgcmV0dXJuIGV4cHM7XG59XG5cbi8qKlxuICogRmlsdGVyIGFuIGFycmF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWzEsIDExXVxuICogdXRpbHMuZmlsdGVyKFsxLCAyLCAzLCAxMV0sICcxJyk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxfSwge3g6IDExfV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IDF9LCB7eDogMn0sIHt4OiAzfSwge3g6IDExfV0sICcxJywgJ3gnKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxfSwge3g6IDExfV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IDF9LCB7eDogMn0sIHt4OiAzfSwge3g6IDExfV0sICcxJywgWyd4J10pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDF9LCB7eDogMTF9XVxuICogdXRpbHMuZmlsdGVyKFt7eDogMX0sIHt4OiAyfSwge3g6IDN9LCB7eDogMTF9XSwgJzEnLCBbWyd4J11dKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiB7eTogMX19XVxuICogdXRpbHMuZmlsdGVyKFt7eDoge3k6IDF9fSwge3g6IHt5OiAyfX1dLCAnMScsIFtbJ3gnLCAneSddXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoxLCB5OiAyfSwge3g6IDIsIHk6MX1dIFxuICogdXRpbHMuZmlsdGVyKFt7eDogMSwgeTogMn0sIHt4OiAzLCB5OiAzfSwge3g6IDIsIHk6IDF9XSwgJzEnLCBbJ3gnLCAneSddKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OjEsIHk6IDJ9LCB7eDogMiwgeToxfV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IDEsIHk6IDJ9LCB7eDogMywgeTogM30sIHt4OiAyLCB5OiAxfV0sICcxJywgW1sneCddLCBbJ3knXV0pO1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfGZ1bmN0aW9ufSBoYW5kbGVyIC0gdHlwZSBvZiBmaWx0ZXJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nW118c3RyaW5nfSBba2V5c10gLSBmaWx0ZXIgaW4gdGhlIGtleXMgaWYgYXJyYXkgZWxlbWVudHMgYXJlIG9iamVjdFxuICogQHJldHVybnMge0FycmF5fSAtIHJldHVybnMgb3RoZXIgYXJyYXlcbiAqL1xudXRpbHMuZmlsdGVyID0gZnVuY3Rpb24gKGFyciwgaGFuZGxlciwga2V5cyA9IG51bGwpIHtcbiAgbGV0IHJlcyA9IFtdO1xuXG4gIGlmIChrZXlzICYmICFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAga2V5cyA9IFtrZXlzXTtcbiAgfVxuXG4gIGlmKHR5cGVvZiBoYW5kbGVyICE9ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBzdHIgPSBoYW5kbGVyPyAoaGFuZGxlciArICcnKS50b0xvd2VyQ2FzZSgpOiAnJztcbiAgICBoYW5kbGVyID0gdmFsID0+ICh2YWw/ICh2YWwgKyAnJykudG9Mb3dlckNhc2UoKTogJycpLm1hdGNoKHN0cik7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgaXRlbSA9IGFycltpXTtcbiAgICBsZXQgZmlsdGVyZWQgPSBmYWxzZTtcblxuICAgIGlmKCFrZXlzICYmIGhhbmRsZXIoaXRlbSkpIHtcbiAgICAgIGZpbHRlcmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZihrZXlzKSB7XG4gICAgICBmb3IobGV0IGsgPSAwLCBjID0ga2V5cy5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgICAgbGV0IGtleSA9IGtleXNba107XG4gICAgICAgIGtleSA9IEFycmF5LmlzQXJyYXkoa2V5KT8ga2V5OiBba2V5XTtcbiAgICAgICAgbGV0IHZhbCA9IGtleT8gdGhpcy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXksIGl0ZW0pOiBpdGVtO1xuICAgIFxuICAgICAgICBpZiAoaGFuZGxlcih2YWwpKSB7XG4gICAgICAgICAgZmlsdGVyZWQgPSB0cnVlO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZmlsdGVyZWQgJiYgcmVzLnB1c2goaXRlbSk7ICAgXG4gIH1cblxuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBPcmRlciBhbiBhcnJheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsxLCAyLCAzXVxuICogdXRpbHMuc29ydChbMywgMiwgMV0sIHRydWUpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFszLCAyLCAxXVxuICogdXRpbHMuc29ydChbMSwgMiwgM10sIGZhbHNlKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCBbWyd4J11dLCBbdHJ1ZV0pO1xuICogdXRpbHMuc29ydChbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV0sIFsneCddLCB0cnVlKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCAneCcpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogM30sIHt4OiAyfSwge3g6IDF9XVxuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sIFtbJ3gnXV0sIFtmYWxzZV0pO1xuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sIFsneCddLCBmYWxzZSk7XG4gKiB1dGlscy5zb3J0KFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XSwgJ3gnLCBmYWxzZSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxLCB5OiAzfSwge3g6IDIsIHk6IDF9LCB7eDoyLCB5OiAyfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAyLCB5OiAyfSwge3g6IDIsIHk6IDF9LCB7eDogMiwgeTogM31dLCBbWyd4J10sIFsneSddXSwgW3RydWUsIHRydWVdKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiB7eTogMX19LCB7eDoge3k6IDJ9fV1cbiAqIHV0aWxzLnNvcnQoW3t4OiB7eTogMn19LCB7eDoge3k6IDF9fV0sIFtbJ3gnLCAneSddXSwgW3RydWVdKTtcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7Ym9vbGVhbnxBcnJheVtdfHN0cmluZ1tdfHN0cmluZ30gW2tleXNdXG4gKiBAcGFyYW0ge2Jvb2xlYW58Ym9vbGVhbltdfSBbb3JkZXJdIC0gcmV2ZXJzZSBvciBub3RcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xudXRpbHMuc29ydCA9IGZ1bmN0aW9uKGFyciwga2V5cyA9IHRydWUsIG9yZGVyID0gW10pIHtcbiAgYXJyID0gWy4uLmFycl07XG5cbiAgaWYgKGtleXMgPT09IHRydWUpIHtcbiAgICBrZXlzID0gW107XG4gICAgb3JkZXIgPSBbdHJ1ZV07XG4gIH1cbiAgZWxzZSBpZiAoa2V5cyA9PT0gZmFsc2UpIHtcbiAgICBrZXlzID0gW107XG4gICAgb3JkZXIgPSBbZmFsc2VdO1xuICB9XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAga2V5cyA9IFtrZXlzXTtcbiAgfVxuXG4gIGlmICghQXJyYXkuaXNBcnJheShvcmRlcikpIHtcbiAgICBvcmRlciA9IFtvcmRlcl07XG4gIH1cblxuICBsZXQgbCA9IGtleXMubGVuZ3RoO1xuXG4gIGFyci5zb3J0KChhLCBiKSA9PiB7XG4gICAgbGV0IGkgPSAwO1xuXG4gICAgY29uc3QgY2hlY2sgPSAoYSwgYiwgcmV2ZXJzZSA9IGZhbHNlKSA9PiB7XG4gICAgICBpZiAoYSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgYSA9IGEuZ2V0VGltZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgYiA9IGIuZ2V0VGltZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYSA+IGIpIHtcbiAgICAgICAgcmV0dXJuIHJldmVyc2U/IC0xOiAxO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoYSA8IGIpIHtcbiAgICAgICAgcmV0dXJuIHJldmVyc2U/IDE6IC0xO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgICB9O1xuXG4gICAgY29uc3QgbmV4dCA9ICgpID0+IHtcbiAgICAgIGlmIChpID49IGwpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG5cbiAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5KSkge1xuICAgICAgICBrZXkgPSBba2V5XTtcbiAgICAgIH1cblxuICAgICAgbGV0IGFWID0gdGhpcy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXksIGEpO1xuICAgICAgbGV0IGJWID0gdGhpcy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXksIGIpO1xuICAgICAgbGV0IHJlcyA9IGNoZWNrKGFWLCBiViwgb3JkZXJbaV0gPT09IGZhbHNlKTtcblxuICAgICAgaWYgKHJlcyAhPT0gMCkge1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfVxuXG4gICAgICBpKys7XG4gICAgICByZXR1cm4gbmV4dCgpO1xuICAgIH07XG5cbiAgICBpZiAoIWwpIHtcbiAgICAgIHJldHVybiBjaGVjayhhLCBiLCBvcmRlcltpXSA9PT0gZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0KCk7XG4gIH0pO1xuXG4gIHJldHVybiBhcnI7XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSB2YWx1ZSBpcyBjb21wb25lbnQgc2NvcGUgcHJveHkgb2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5pc1Njb3BlUHJveHkgPSBmdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuICEhKHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnICYmIHZhbC5fX2lzUHJveHkpO1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgdmFsdWUgaXMgcGxhaW4gb2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSBvYmpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5pc1BsYWluT2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XG4gIHJldHVybiAhIShvYmogJiYgdHlwZW9mIG9iaiA9PSAnb2JqZWN0JyAmJiAob2JqLmNvbnN0cnVjdG9yID09IE9iamVjdCB8fCBvYmouY29uc3RydWN0b3IgPT0gQXJyYXkpKTtcbn07XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVcbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zXSBcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5jb3B5ID0gZnVuY3Rpb24odmFsdWUsIG9wdGlvbnMgPSB7fSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8ICF2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIG9wdGlvbnMgPSB7IG5lc3RlZDogdHJ1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgLi4ub3B0aW9ucyB9O1xuXG4gIGNvbnN0IG5leHQgPSAob2JqKSA9PiB7XG4gICAgb2JqID0gdGhpcy5pc1Njb3BlUHJveHkob2JqKT8gb2JqLl9fdGFyZ2V0OiBvYmo7XG4gICAgbGV0IGtleXMgPSAhb3B0aW9ucy5lbnVtZXJhYmxlPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopOiBPYmplY3Qua2V5cyhvYmopO1xuICAgIGxldCBuZXdPYmogPSBBcnJheS5pc0FycmF5KG9iaik/IFtdOiB7fTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgIGxldCB2YWwgPSBvYmpba2V5XTtcbiAgICAgIHZhbCA9IHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnICYmIG9wdGlvbnMubmVzdGVkPyBuZXh0KHZhbCk6IHZhbDsgICAgICBcbiAgICAgIFxuICAgICAgaWYoIW9iai5wcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwge1xuICAgICAgICAgIC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpLFxuICAgICAgICAgIHZhbHVlOiB2YWxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIG5ld09ialtrZXldID0gdmFsOyAgXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld09iajtcbiAgfVxuXG4gIHJldHVybiBuZXh0KHZhbHVlKTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHRoZSB2YWx1ZSB0byBhdHRyaWJ1dGUgYXBwcm9wcmlhdGUgZm9ybWF0XG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gZmFsc2UgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEV2ZW50RW1pdHRlcikge1xuICAgIHJldHVybiAnW29iamVjdCBFdmVudF0nO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gdmFsdWUgKyAnJztcbn07XG5cbi8qKlxuICogQ29tcGFyZSB0d28gdmFsdWVzXG4gKlxuICogQHBhcmFtIHsqfSBhXG4gKiBAcGFyYW0geyp9IGJcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5jb21wYXJlID0gZnVuY3Rpb24gKGEsIGIsIG9wdGlvbnMgPSB7fSkge1xuICBpZiAoKGEgaW5zdGFuY2VvZiBEYXRlKSAmJiAoYiBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgcmV0dXJuIGEuZ2V0VGltZSgpID09PSBiLmdldFRpbWUoKTtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgYSA9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBiID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYS50b1N0cmluZygpID09PSBiLnRvU3RyaW5nKCk7XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT0gJ29iamVjdCcpIHtcbiAgICBpZiAoYSA9PT0gbnVsbCB8fCBiID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gYSA9PT0gYjtcbiAgICB9XG5cbiAgICBvcHRpb25zID0geyBlbnVtZXJhYmxlOiB0cnVlLCAuLi5vcHRpb25zIH07XG5cbiAgICBjb25zdCBjbGVhclVuZGVmaW5lZCA9ICh2YWwpID0+IHtcbiAgICAgIGxldCBvYmogPSBBcnJheS5pc0FycmF5KHZhbCk/IFtdOiB7fTtcbiAgICAgIGxldCBrZXlzID0gIW9wdGlvbnMuZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoKTogT2JqZWN0LmtleXModmFsKTtcblxuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICB2YWxba2V5XSAhPT0gdW5kZWZpbmVkICYmIChvYmpba2V5XSA9IHZhbFtrZXldKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGlmKG9wdGlvbnMuaWdub3JlVW5kZWZpbmVkKSB7XG4gICAgICBhID0gY2xlYXJVbmRlZmluZWQoYSk7XG4gICAgICBiID0gY2xlYXJVbmRlZmluZWQoYik7XG4gICAgfVxuXG4gICAgbGV0IGFLZXlzID0gIW9wdGlvbnMuZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoKTogT2JqZWN0LmtleXMoYSk7XG4gICAgbGV0IGJLZXlzID0gIW9wdGlvbnMuZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoKTogT2JqZWN0LmtleXMoYik7XG4gICAgXG4gICAgaWYgKGFLZXlzLmxlbmd0aCAhPSBiS2V5cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBhID0gdGhpcy5pc1Njb3BlUHJveHkoYSk/IGEuX190YXJnZXQ6IGE7XG4gICAgYiA9IHRoaXMuaXNTY29wZVByb3h5KGIpPyBiLl9fdGFyZ2V0OiBiO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGFLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGtleSA9IGFLZXlzW2ldO1xuXG4gICAgICBpZiAoIXRoaXMuY29tcGFyZShhW2tleV0sIGJba2V5XSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGEgPT09IGI7XG59O1xuXG4vKipcbiAqIENvbXBhcmUgdGhlIGN1cnJlbnQgdmFsdWUgd2l0aCB0aGUgcHJldmlvdXNcbiAqXG4gKiBAcGFyYW0geyp9IGN1cnJlbnQgLSB0aGUgY3VycmVudCB2YWx1ZVxuICogQHBhcmFtIHsqfSBwcmV2aW91cyAtIHRoZSBwcmV2aW91cyB2YWx1ZVxuICogQHBhcmFtIHsqfSBwcmV2aW91c0NvcHkgLSB0aGUgcHJldmlvdXMgdmFsdWUgY29weVxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlID0gZnVuY3Rpb24oY3VycmVudCwgcHJldmlvdXMsIHByZXZpb3VzQ29weSwgb3B0aW9ucykge1xuICBpZiAoY3VycmVudCAhPT0gcHJldmlvdXMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdGhpcy5jb21wYXJlKGN1cnJlbnQsIHByZXZpb3VzQ29weSwgb3B0aW9ucyk7XG59O1xuXG4vKipcbiAqIEVuY29kZSBodG1sIGVudGl0aWVzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJ5b3UgJmFtcCBtZVwiXG4gKiB1dGlscy5lbmNvZGVIdG1sRW50aXRpZXMoJ3lvdSAmIG1lJyk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmVuY29kZUh0bWxFbnRpdGllcyA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHZhbHVlO1xuICBlbC50ZXh0Q29udGVudCA9IGh0bWw7XG4gIHZhbHVlID0gZWwuaW5uZXJIVE1MO1xuICBlbC5yZW1vdmUoKTtcbiAgZWwgPSBudWxsO1xuICByZXR1cm4gdmFsdWU7XG59O1xuXG4vKipcbiAqIERlY29kZSBodG1sIGVudGl0aWVzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJ5b3UgJiBtZVwiXG4gKiB1dGlscy5kZWNvZGVIdG1sRW50aXRpZXMoJ3lvdSAmYW1wIG1lJyk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmRlY29kZUh0bWxFbnRpdGllcyA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBsZXQgdmFsdWU7XG4gIGVsLmlubmVySFRNTCA9IGh0bWw7XG4gIHZhbHVlID0gZWwudmFsdWU7XG4gIGVsLnJlbW92ZSgpO1xuICBlbCA9IG51bGw7XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHN0cmluZyBmcm9tIGRhc2ggdG8gY2FtZWwgY2FzZSBmb3JtYXRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy50b0NhbWVsQ2FzZSA9IGZ1bmN0aW9uKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcVysoLikvZywgKG0sIGMpID0+IGMudG9VcHBlckNhc2UoKSk7XG59O1xuXG4vKipcbiAqIENhcGl0YWxpemUgdGhlIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmNhcGl0YWxpemUgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RyaW5nIGZyb20gY2FtZWwgdG8gZGFzaCBjYXNlIGZvcm1hdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnRvRGFzaENhc2UgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIChtLCBjKSA9PiBgLSR7Yy50b0xvd2VyQ2FzZSgpfWApO1xufTtcblxuLyoqXG4gKiBHZXQgbmVzdGVkIG9iamVjdCBwcm9wZXJ0eSBieSBhcnJheSBrZXlzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCkge1xuICBsZXQgY3VycmVudDtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoKG8sIGspID0+IHtcbiAgICBpKys7XG5cbiAgICBpZiAodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBvO1xuICAgIH1cblxuICAgIGlmIChvW2tdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAoaSA9PSBsZW5ndGgpICYmIChjdXJyZW50ID0gb1trXSk7XG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIGN1cnJlbnQ7XG59O1xuXG4vKipcbiAqIENoZWNrIG5lc3RlZCBvYmplY3RzIHRyZWUgaGFzIHByb3BlcnR5IG9yIG5vdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHRydWVcbiAqIHV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaGFzUHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QpIHtcbiAgbGV0IGhhcyA9IGZhbHNlO1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZSgobywgaykgPT4ge1xuICAgIGkrKztcblxuICAgIGlmICh0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuICEhbztcbiAgICB9XG5cbiAgICBpZiAoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAoaSA9PSBsZW5ndGgpICYmIChoYXMgPSBvLmhhc093blByb3BlcnR5KGspKTtcbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gaGFzO1xufTtcblxuLyoqXG4gKiBTZXQgbmVzdGVkIG9iamVjdHMgdHJlZSBwcm9wZXJ0eVxuICogUmV0dXJucyBjaGFuZ2VkIHByb3BlcnR5IG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHt5OiA2fVxuICogdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0sIChsYXN0LCB2YWwpID0+IGxhc3Q/IDY6ICh2YWwgfHwge30pKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLnNldFByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0LCBmbikge1xuICBsZXQgY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoKG8sIGspID0+IHtcbiAgICBpKys7XG5cbiAgICBpZiAodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIG9ba10gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgb1trXSA9IGZuKGkgPT0gbGVuZ3RoLCBvW2tdKTtcbiAgICBjdXJyZW50ID0gbztcbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gY3VycmVudDtcbn07XG5cbi8qKlxuICpcbiAqIERlbGV0ZSBwcm9wZXJ0eSBmcm9tIG5lc3RlZCBvYmplY3RzIHRyZWVcbiAqIFJldHVybnMgZGVsZXRlZCBwcm9wZXJ0eSB2YWx1ZVxuICogWW91IGNhbiBjYW5jZWwgZGVsZXRpbmcgaWYgd2lsbCByZXR1cm4gZmFsc2UgaW4gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIDVcbiAqIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19LCB2YWwgPT4gdmFsICE9IDUpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtmbl1cbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCwgZm4pIHtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgdmFsdWU7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZSgobywgaykgPT4ge1xuICAgIGkrKztcblxuICAgIGlmICh0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghby5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGlmIChpID09IGxlbmd0aCkge1xuICAgICAgdmFsdWUgPSBvW2tdO1xuICAgICAgKCFmbiB8fCBmbih2YWx1ZSkpICYmIChkZWxldGUgb1trXSk7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuXG4vKipcbiAqIEdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSB0YXJnZXQgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xuXG51dGlscy5nZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQgPSBmdW5jdGlvbih0YXJnZXQsIGtleSkge1xuICBjb25zdCBjaGVjayA9IChvYmopID0+IHtcbiAgICBpZiAob2JqLnByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgbGV0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG5cbiAgICBpZiAoIXByb3RvKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hlY2socHJvdG8pO1xuICB9O1xuXG4gIHJldHVybiBjaGVjayh0YXJnZXQpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIG93biBwcm9wZXJ0eSB0YXJnZXQgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xudXRpbHMuZ2V0T3duUHJvcGVydHlUYXJnZXQgPSBmdW5jdGlvbih0YXJnZXQsIGtleSkge1xuICBjb25zdCBjaGVjayA9IChvYmopID0+IHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgbGV0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG5cbiAgICBpZiAoIXByb3RvKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hlY2socHJvdG8pO1xuICB9O1xuXG4gIHJldHVybiBjaGVjayh0YXJnZXQpO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSByYW5kb20gc3RyaW5nXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5jcmVhdGVSYW5kb21TdHJpbmcgPSBmdW5jdGlvbihsZW5ndGggPSAxNiwgZm4gPSBudWxsKSB7XG4gIGxldCBzdHIgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgbGVuZ3RoICsgMik7XG4gIGxldCB2YWwgPSAnJztcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHN0ci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNjYpIHtcbiAgICAgIHZhbCArPSBzdHJbaV0udG9VcHBlckNhc2UoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YWwgKz0gc3RyW2ldO1xuICAgIH1cbiAgfVxuXG4gIGlmIChmbiAmJiBmbih2YWwpKSB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlUmFuZG9tU3RyaW5nKGxlbmd0aCwgZm4pO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHV0aWxzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVybCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIG1hdGNoZXMgPSAnW3VybF0nO1xyXG5cclxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XHJcbiAgICBzdXBlciguLi5hcmdzKTtcclxuICAgIHRoaXMudXJsQXR0cmlidXRlID0gJ3NyYyc7XHJcbiAgfVxyXG5cclxuICBjb21waWxlZCgpIHtcclxuICAgIHRoaXMuYXR0cigndXJsJywgdGhpcy5zZXRVcmwpO1xyXG4gIH1cclxuXHJcbiAgc2V0VXJsKHVybCkge1xyXG4gICAgdGhpcy5hdHRyc1t0aGlzLnVybEF0dHJpYnV0ZV0gPSB1cmw7XHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdXJsLmpzIiwiaW1wb3J0IEFraWxpIGZyb20gJy4vYWtpbGkuanMnO1xuaW1wb3J0IFNjb3BlIGZyb20gJy4vc2NvcGUuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9zZXJ2aWNlcy9yZXF1ZXN0LmpzJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3NlcnZpY2VzL3N0b3JlLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcblxuZXhwb3J0IGNvbnN0IGV2YWx1YXRpb25SZWdleCA9IC9cXCR7KCgoPyFcXCR7KS4pKil9LztcbmV4cG9ydCBjb25zdCBldmFsdWF0aW9uUmVnZXhHbG9iYWwgPSBuZXcgUmVnRXhwKGV2YWx1YXRpb25SZWdleC5zb3VyY2UsIFwiZ1wiKTtcbmV4cG9ydCBjb25zdCBzeXN0ZW1BdHRyaWJ1dGVzID0gWydjb21wb25lbnQnLCAnc2NvcGUnXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gW107XG4gIHN0YXRpYyBldmVudHMgPSBbXTtcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gZmFsc2U7XG4gIHN0YXRpYyBzYXZlQXR0cmlidXRlUHJveHlJbiA9IGZhbHNlO1xuICBzdGF0aWMgc2F2ZUF0dHJpYnV0ZVByb3h5T3V0ID0gZmFsc2U7XG4gIHN0YXRpYyB0cmFuc3BhcmVudCA9IGZhbHNlO1xuICBzdGF0aWMgdGVtcGxhdGUgPSAnJztcbiAgc3RhdGljIHRlbXBsYXRlVXJsID0gJyc7XG4gIHN0YXRpYyBzY29wZSA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRvIGRlZmluZSB0aGUgY29tcG9uZW50XG4gICAqL1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnY29tcG9uZW50JywgQ29tcG9uZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSB0aGUgZXhwcmVzc2lvblxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwcmVzc2lvblxuICAgKiBAcGFyYW0ge29iamVjdH0gW2dsb2JhbHNdXG4gICAqL1xuICBzdGF0aWMgcGFyc2UoY29udGV4dCwgZXhwcmVzc2lvbiwgZ2xvYmFscyA9IHt9KSB7XG4gICAgZ2xvYmFscyA9IHsgdXRpbHMsIC4uLkFraWxpLm9wdGlvbnMuZ2xvYmFscywgLi4uZ2xvYmFsc307XG4gICAgY29uc3Qga2V5cyA9IFtdO1xuICAgIGNvbnN0IHZhcnMgPSBbXTtcbiAgICBjb25zdCBleHBzID0gdXRpbHMuc3BsaXQoZXhwcmVzc2lvbi50cmltKCksICc7JywgWydcIicsIFwiJ1wiLCAnYCddKTsgIFxuICAgIGV4cHNbZXhwcy5sZW5ndGggLSAxXSA9IGByZXR1cm4gJHtleHBzW2V4cHMubGVuZ3RoIC0gMV19YDtcblxuICAgIGZvcihsZXQga2V5IGluIGdsb2JhbHMpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgdmFycy5wdXNoKGdsb2JhbHNba2V5XSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbiguLi5rZXlzLCBgJHtleHBzLmpvaW4oJzsgJyl9YCkuYXBwbHkoY29udGV4dCwgdmFycyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbCwgc2NvcGUgPSB7fSkge1xuICAgIHRoaXMuX19pc01vdW50ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9faXNDb21waWxlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19pc1Jlc29sdmVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19wcmV2ZW50ID0gZmFsc2U7XG4gICAgdGhpcy5fX2JpbmRpbmdzID0ge307XG4gICAgdGhpcy5fX2V2YWx1YXRpbmdFdmVudCA9IG51bGw7XG4gICAgdGhpcy5fX3JlY29tcGlsaW5nID0gbnVsbDtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0ge307XG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IHt9O1xuICAgIHRoaXMuX19kaXNhYmxlQXR0clRyaWdnZXJpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9fY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLl9fcGFyZW50ID0gbnVsbDtcbiAgICB0aGlzLl9fcGFyZW50cyA9IFtdO1xuICAgIHRoaXMuX19hdHRycyA9IHt9O1xuICAgIHRoaXMuX19hdHRyTGlua3MgPSB7fTtcbiAgICB0aGlzLl9fc3RvcmVMaW5rcyA9IHt9O1xuICAgIHRoaXMuX19hdHRyaWJ1dGVPZiA9IG51bGw7XG4gICAgdGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQgPSB0aGlzO1xuICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICB0aGlzLmVsID0gZWw7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIG9uIHRoZSByZWNvbXBpbGF0aW9uXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcmVjb21waWxlKCkge1xuICAgIHRoaXMuX19pc01vdW50ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5fX2Rpc2FibGVQcm94eSA9IHt9O1xuICAgIHRoaXMuX19jb21waWxpbmcgPSB7fTtcbiAgICB0aGlzLl9fcmVjb21waWxpbmcgPSB7fTtcbiAgICB0aGlzLl9fc2V0RXZlbnRzKCk7XG4gICAgdGhpcy5fX3NldFBhcmVudHMoKTtcbiAgICB0aGlzLl9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKTtcbiAgICB0aGlzLl9fZGVmaW5lQXR0cmlidXRlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiB0aGUgY3JlYXRpb25cbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGUoKSB7XG4gICAgdGhpcy5fX2luaXRpYWxpemUoKTtcbiAgICB0aGlzLl9fc2V0RXZlbnRzKCk7XG4gICAgdGhpcy5fX3NldFBhcmVudHMoKTtcbiAgICB0aGlzLl9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKTtcbiAgICB0aGlzLl9fZGVmaW5lQXR0cmlidXRlcygpO1xuICAgIEFraWxpLmlzb2xhdGUoKCkgPT4gdGhpcy5jcmVhdGVkKHRoaXMuYXR0cnMpKTsgICAgICAgXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIG9uIHRoZSBjb21waWxhdGlvblxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgX19jb21waWxlKCkge1xuICAgIGxldCBjb250cm9sID0gdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzIHx8ICF0aGlzLl9fZXZhbHVhdGVQYXJlbnQ7XG4gICAgbGV0IHAgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB0aGlzLl9fYXR0cmlidXRlT2YgPSBjb250cm9sPyB0aGlzOiB0aGlzLl9fZXZhbHVhdGVQYXJlbnQuX19ha2lsaTtcblxuICAgIGlmICghdGhpcy5fX3JlY29tcGlsaW5nIHx8IHRoaXMuX19jb21waWxpbmcubmV3UGFyZW50IHx8IHRoaXMuX19jb250cm9sQXR0cmlidXRlcykge1xuICAgICAgdGhpcy5fX2ludGVycG9sYXRlQXR0cmlidXRlcyh0aGlzLmVsLCB0aGlzLl9fYXR0cmlidXRlT2YpO1xuICAgIH1cblxuICAgIGNvbnN0IGludGVycG9sYXRlID0gKGNoaWxkcmVuLCBwYXJlbnQpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PSAzKSB7XG4gICAgICAgICAgdGhpcy5fX2luaXRpYWxpemVOb2RlKGNoaWxkLCBwYXJlbnQpO1xuXG4gICAgICAgICAgY2hpbGQubm9kZVZhbHVlID0gdGhpcy5fX2V2YWx1YXRlKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaGlsZC5ub2RlVHlwZSA9PSAxICYmICFjaGlsZC5fX2FraWxpKSB7XG4gICAgICAgICAgdGhpcy5fX2ludGVycG9sYXRlQXR0cmlidXRlcyhjaGlsZCk7XG4gICAgICAgICAgaW50ZXJwb2xhdGUoY2hpbGQuY2hpbGROb2RlcywgY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGludGVycG9sYXRlKHRoaXMuZWwuY2hpbGROb2RlcywgdGhpcy5lbCk7XG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IHRydWU7XG4gICAgbGV0IHJlcztcblxuICAgIGlmICghdGhpcy5fX3JlY29tcGlsaW5nKSB7XG4gICAgICByZXMgPSBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgdGhpcy5hdHRycy5vbkNvbXBpbGVkICYmIHRoaXMuYXR0cnMub25Db21waWxlZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGlsZWQoKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkge1xuICAgICAgICBwID0gcmVxdWVzdC5nZXQodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCwgeyBjYWNoZTogdGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZUNhY2hlIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5fX2NvbnRlbnQ7XG4gICAgICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgcmVzLmRhdGEpO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9fY29udGVudDtcbiAgICAgICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0cnMub25SZWNvbXBpbGVkICYmIHRoaXMuYXR0cnMub25SZWNvbXBpbGVkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgICB0aGlzLnJlY29tcGlsZWQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLl9fcmVjb21waWxpbmcgPSBudWxsO1xuICAgIHRoaXMuX19jb21waWxpbmcgPSBudWxsO1xuXG4gICAgcmV0dXJuIHAudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLl9faXNDb21waWxlZCA9IHRydWU7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmUgdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgX19yZXNvbHZlKCkge1xuICAgIGlmICh0aGlzLl9fcmVjb21waWxpbmcpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5hdHRycy5vblJlc29sdmVkICYmIHRoaXMuYXR0cnMub25SZXNvbHZlZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5yZXNvbHZlZCgpKS50aGVuKHJlcyA9PiB7XG4gICAgICB0aGlzLl9faXNSZXNvbHZlZCA9IHRydWU7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnQgb2YgdGhlIHtAc2VlIENvbXBvbmVudCNfX2NvbXBpbGV9IG1ldGhvZFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemUoKSB7ICAgIFxuICAgIGxldCBwYXJlbnQgPSBBa2lsaS5nZXRBa2lsaVBhcmVudHModGhpcy5lbCwgZmFsc2UpOyAgICAgXG4gICAgbGV0IFNjb3BlID0gdGhpcy5jb25zdHJ1Y3Rvci5zY29wZSB8fCBBa2lsaS5TY29wZTtcbiAgICBsZXQgc2NvcGU7XG4gICAgbGV0IGlzUm9vdCA9IEFraWxpLl9fcm9vdCA9PT0gdGhpcy5lbDtcbiAgICB0aGlzLmVsLl9fYWtpbGkgPSB0aGlzO1xuXG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgc2NvcGUgPSBuZXcgU2NvcGUodGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3Njb3BlJykgfHwgQWtpbGkuY3JlYXRlU2NvcGVOYW1lKCksIHRoaXMuZWwsIHRoaXMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNjb3BlID0gbmV3IFNjb3BlKGlzUm9vdD8gJ3Jvb3QnOiBBa2lsaS5jcmVhdGVTY29wZU5hbWUoKSwgdGhpcy5lbCwgdGhpcyk7XG4gICAgICBpc1Jvb3QgJiYgKEFraWxpLnJvb3QgPSB0aGlzKTtcbiAgICB9XG5cbiAgICBsZXQgX19zY29wZSA9IHNjb3BlO1xuICAgIGxldCBfc2NvcGUgPSBPYmplY3QuYXNzaWduKHNjb3BlLCB0aGlzLnNjb3BlKTtcbiAgICBsZXQgY29udHJvbEF0dHJpYnV0ZXMgPSB0aGlzLmNvbnN0cnVjdG9yLmNvbnRyb2xBdHRyaWJ1dGVzO1xuICAgIGxldCBldmVudHMgPSB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50cztcblxuICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlKSB7XG4gICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCB0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkge1xuICAgICAgdGhpcy5fX2NvbnRlbnQgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gICAgdGhpcy5fX3Njb3BlID0gX19zY29wZTtcbiAgICB0aGlzLl9fZXZlbnRzID0gZXZlbnRzO1xuICAgIHRoaXMuX19jb250cm9sQXR0cmlidXRlcyA9IGNvbnRyb2xBdHRyaWJ1dGVzO1xuICAgIHRoaXMuX19zYXZlQXR0cmlidXRlUHJveHlJbiA9IHRoaXMuY29uc3RydWN0b3Iuc2F2ZUF0dHJpYnV0ZVByb3h5SW47XG4gICAgdGhpcy5fX3NhdmVBdHRyaWJ1dGVQcm94eU91dCA9IHRoaXMuY29uc3RydWN0b3Iuc2F2ZUF0dHJpYnV0ZVByb3h5T3V0O1xuXG4gICAgQWtpbGkuYWRkU2NvcGUoc2NvcGUpO1xuICAgIHRoaXMuc2NvcGUgPSB0aGlzLl9fbmVzdGVkT2JzZXJ2ZShfc2NvcGUsIFtdKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYm9vbGVhbiBhdHRyaWJ1dGVzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKSB7XG4gICAgdGhpcy5ib29sZWFuQXR0cmlidXRlcyA9IFtdLmNvbmNhdChBa2lsaS5odG1sQm9vbGVhbkF0dHJpYnV0ZXMsIHRoaXMuY29uc3RydWN0b3IuYm9vbGVhbkF0dHJpYnV0ZXMpO1xuXG4gICAgY29uc3Qgc2V0QXR0ciA9IChlbCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGF0dHJzID0gZWwuYXR0cmlidXRlcywgbCA9IGF0dHJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgbm9kZSA9IGF0dHJzW2ldO1xuXG4gICAgICAgIGlmICh0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzLmluZGV4T2Yobm9kZS5ub2RlTmFtZSkgIT0gLTEpIHtcbiAgICAgICAgICBpZiAoZWwuaGFzQXR0cmlidXRlKGBib29sZWFuLSR7bm9kZS5ub2RlTmFtZX1gKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGBib29sZWFuLSR7bm9kZS5ub2RlTmFtZX1gLCBlbC5nZXRBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSkgfHwgbm9kZS5ub2RlTmFtZSk7XG4gICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKG5vZGUubm9kZU5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZWwuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGVsLmNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmICghY2hpbGQuX19ha2lsaSkge1xuICAgICAgICAgIHNldEF0dHIoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNldEF0dHIodGhpcy5lbCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGV2ZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldEV2ZW50cygpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuX19ldmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgZXYgPSB0aGlzLl9fZXZlbnRzW2ldO1xuICAgICAgIS9eb24tL2kudGVzdChldikgJiYgKGV2ID0gJ29uLScgKyBldik7XG5cbiAgICAgIGlmICghdGhpcy5lbC5oYXNBdHRyaWJ1dGUoZXYpKSB7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGV2LCAnJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjb21wb25lbnQgcGFyZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldFBhcmVudHMoKSB7XG4gICAgbGV0IHBhcmVudHMgPSBBa2lsaS5nZXRBa2lsaVBhcmVudHModGhpcy5lbCk7XG5cbiAgICBpZiAoIXBhcmVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IG5ld1BhcmVudCA9IHRoaXMuX19wYXJlbnQgIT09IHBhcmVudHNbMF07XG4gICAgbGV0IGV2YWx1YXRlUGFyZW50ID0gbnVsbDtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gcGFyZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBwYXJlbnQgPSBwYXJlbnRzW2ldO1xuXG4gICAgICBpZiAoIXBhcmVudC5fX2FraWxpLmNvbnN0cnVjdG9yLnRyYW5zcGFyZW50KSB7XG4gICAgICAgIGV2YWx1YXRlUGFyZW50ID0gcGFyZW50O1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX19jb21waWxpbmcubmV3UGFyZW50ID0gbmV3UGFyZW50O1xuICAgIG5ld1BhcmVudCAmJiB0aGlzLl9fZGV0YWNoKCk7XG5cbiAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50cmFuc3BhcmVudCkge1xuICAgICAgdGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQgPSBldmFsdWF0ZVBhcmVudC5fX2FraWxpO1xuICAgIH1cblxuICAgIHRoaXMuX19ldmFsdWF0ZVBhcmVudCA9IGV2YWx1YXRlUGFyZW50O1xuICAgIHRoaXMuX19wYXJlbnQgPSBwYXJlbnRzWzBdO1xuICAgIHRoaXMuX19wYXJlbnRzID0gcGFyZW50cztcbiAgICB0aGlzLnNjb3BlLl9fcGFyZW50ID0gdGhpcy5fX2V2YWx1YXRlUGFyZW50Ll9fYWtpbGkuc2NvcGU7XG4gICAgIXRoaXMuX19yZWNvbXBpbGluZyAmJiB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19hZGRDaGlsZCh0aGlzLmVsKTtcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcy5zY29wZSwgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fc2NvcGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBjaGlsZCBlbGVtZW50IHRvIHRoZSBsaXN0XG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hZGRDaGlsZChlbCkge1xuICAgIHRoaXMuX19jaGlsZHJlbi5wdXNoKGVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGxpY2UgY2hpbGQgZnJvbSB0aGUgbGlzdFxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc3BsaWNlQ2hpbGQoZWwpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuX19jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuX19jaGlsZHJlbltpXTtcblxuICAgICAgaWYgKGNoaWxkID09PSBlbCkge1xuICAgICAgICB0aGlzLl9fY2hpbGRyZW4uc3BsaWNlKGksIDEpO1xuICAgICAgICBpLS07XG4gICAgICAgIGwtLTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogWW91IGNhbiBjaGFuZ2UgZXhwcmVzc2lvbiBiZWZvcmUgcGFyc2luZyBoZXJlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBleHByZXNzaW9uXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldFBhcnNlZEV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIG5vZGUgaGFzIGFueSBwcm9wZXJ0eSBjaGFuZ2VzIG9yIG5vdFxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2hlY2tFdmFsdWF0aW9uKG5vZGUpIHtcbiAgICBpZiAoIU9iamVjdC5rZXlzKG5vZGUuX19wcm9wZXJ0aWVzKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGsgaW4gbm9kZS5fX3Byb3BlcnRpZXMpIHtcbiAgICAgIGlmICghbm9kZS5fX3Byb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGxldCBwcm9wID0gbm9kZS5fX3Byb3BlcnRpZXNba107XG4gICAgICBsZXQgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhwcm9wLmtleXMsIHByb3AuY29tcG9uZW50Ll9fc2NvcGUpO1xuXG4gICAgICBpZiAoIXV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlKHZhbHVlLCBwcm9wLnZhbHVlLCBwcm9wLmNvcHkpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgQ2hlY2sgbm9kZSBoYXMgY2hhbmdlZCBvbiB0aGUgY2VydGFpbiBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2luZyhub2RlLCBrZXlzLCB2YWx1ZSkge1xuICAgIGxldCBwcm9wID0gdGhpcy5fX2dldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKTtcbiAgICBcbiAgICBpZiAoIXByb3ApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiAhdXRpbHMuY29tcGFyZVByZXZpb3VzVmFsdWUodmFsdWUsIHByb3AudmFsdWUsIHByb3AuY29weSk7XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgbm9kZSBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZShub2RlKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGxldCBhdHRyaWJ1dGVWYWx1ZTtcbiAgICBsZXQgZXhwcmVzc2lvbjtcblxuICAgIGlmIChub2RlLl9fY29tcG9uZW50LnBhcmVudHMoKGNvbSkgPT4gY29tLl9fcHJldmVudCkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbm9kZS5fX2V4cHJlc3Npb247XG4gICAgfVxuXG4gICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKSAmJiBub2RlLl9fY29tcG9uZW50Ll9fcHJldmVudCkge1xuICAgICAgcmV0dXJuIG5vZGUuX19leHByZXNzaW9uO1xuICAgIH1cbiAgICBcbiAgICBsZXQgcmVzID0gbm9kZS5fX2V4cHJlc3Npb24ucmVwbGFjZShldmFsdWF0aW9uUmVnZXhHbG9iYWwsIChtLCBkKSA9PiB7XG4gICAgICBjb3VudGVyKys7XG4gICAgICBsZXQgZXZhbHVhdGU7XG4gICAgICBsZXQgZXZhbHVhdGlvbiA9IFtdO1xuICAgICAgbGV0IGV4aXN0aW5nQmluZGluZ3MgPSB7fTtcbiAgICAgIGxldCBwYXJzZVZhbHVlID0gbm9kZS5fX2NvbXBvbmVudC5fX2dldFBhcnNlZEV4cHJlc3Npb24oZCk7XG4gICAgICBBa2lsaS5fX2V2YWx1YXRpb24gPSB7IG5vZGU6IG5vZGUsIGxpc3Q6IFtdLCBjb21wb25lbnQ6IG5vZGUuX19jb21wb25lbnQgfTtcbiAgICAgIFxuICAgICAgdHJ5IHtcbiAgICAgICAgZXZhbHVhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLnBhcnNlKHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50LnNjb3BlLCBwYXJzZVZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgbGV0IHRhZ05hbWUgPSBub2RlLl9fY29tcG9uZW50LmVsLnRhZ05hbWU7XG4gICAgICAgIGxldCBhdHRyTmFtZSA9IG5vZGUuX19jb21wb25lbnQuZWwuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKTtcbiAgICAgICAgbGV0IGNvbXBvbmVudE5hbWUgPSAoYXR0ck5hbWUgfHwgdGFnTmFtZSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbGV0IGVsZW1lbnROYW1lID0gbm9kZS5fX2VsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBsZXQgYXR0cmlidXRlTmFtZSA9IChub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpPyBub2RlLm5hbWUudG9Mb3dlckNhc2UoKTogJyc7ICAgICAgICBcbiAgICAgICAgbGV0IG1lc3NhZ2VzID0gIFsgZXJyLm1lc3NhZ2UsIG5vZGUuX19leHByZXNzaW9uLnRyaW0oKSBdO1xuICAgICAgICBhdHRyaWJ1dGVOYW1lICYmIG1lc3NhZ2VzLnB1c2goYFthdHRyaWJ1dGUgJHthdHRyaWJ1dGVOYW1lfV1gKTtcbiAgICAgICAgbWVzc2FnZXMgPSBtZXNzYWdlcy5jb25jYXQoWyBgW2VsZW1lbnQgJHtlbGVtZW50TmFtZX1dYCwgYFtjb21wb25lbnQgJHtjb21wb25lbnROYW1lfV1gIF0pO1xuICAgICAgICB0aHJvdyBgRXhwcmVzc2lvbiBlcnJvcjogYCArIG1lc3NhZ2VzLmpvaW4oJ1xcblxcdGF0ICcpO1xuICAgICAgfVxuXG4gICAgICBpZihBa2lsaS5fX2V2YWx1YXRpb24pIHtcbiAgICAgICAgZXZhbHVhdGlvbiA9IEFraWxpLl9fZXZhbHVhdGlvbi5saXN0O1xuICAgICAgICBBa2lsaS5fX2V2YWx1YXRpb24ubGlzdCA9IG51bGw7XG4gICAgICAgIEFraWxpLl9fZXZhbHVhdGlvbiA9IG51bGw7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGZvciAobGV0IGkgPSBldmFsdWF0aW9uLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGxldCBkYXRhID0gZXZhbHVhdGlvbltpXTtcbiAgICAgICAgbGV0IGhhc2ggPSB0aGlzLl9fY3JlYXRlS2V5c0hhc2goZGF0YS5rZXlzKTtcbiAgICAgICBcbiAgICAgICAgaWYgKGRhdGEubm90QmluZGluZykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nQmluZGluZ3NbaGFzaF0pIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwYXJlbnRWYWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGRhdGEucGFyZW50cywgZGF0YS5jb21wb25lbnQuX19zY29wZSk7XG4gICAgICAgIGxldCBldmFsQ29tcG9uZW50ID0gbm9kZS5fX2F0dHJpYnV0ZU9mIHx8IG5vZGUuX19jb21wb25lbnQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIGlmIChcbiAgICAgICAgICB1dGlscy5pc1Njb3BlUHJveHkocGFyZW50VmFsdWUpICYmIFxuICAgICAgICAgIGRhdGEuY29tcG9uZW50ICE9PSBldmFsQ29tcG9uZW50Ll9fZXZhbHVhdGlvbkNvbXBvbmVudCAmJiBcbiAgICAgICAgICBkYXRhLmNvbXBvbmVudCA9PT0gZGF0YS5yZWFsQ29tcG9uZW50XG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9ICAgXG5cbiAgICAgICAgbGV0IGJpbmQgPSBkYXRhLmNvbXBvbmVudC5fX2dldEJvdW5kTm9kZShkYXRhLmtleXMsIG5vZGUpO1xuICAgICAgICBsZXQgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhkYXRhLmtleXMsIGRhdGEuY29tcG9uZW50Ll9fc2NvcGUpO1xuXG4gICAgICAgIGlmICghYmluZCkge1xuICAgICAgICAgIGRhdGEuY29tcG9uZW50Ll9fYmluZChkYXRhLmtleXMsIHsgbm9kZTogbm9kZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEuY29tcG9uZW50Ll9fc2V0Tm9kZVByb3BlcnR5KG5vZGUsIGRhdGEua2V5cywgdmFsdWUsIGRhdGEuZXZhbHVhdGVkKTtcbiAgICAgICAgZXhpc3RpbmdCaW5kaW5nc1toYXNoXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGV4aXN0aW5nQmluZGluZ3MgPSBudWxsO1xuICAgICAgZXZhbHVhdGlvbiA9IG51bGw7XG5cbiAgICAgIGlmIChub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpIHtcbiAgICAgICAgZXhwcmVzc2lvbiA9IG07XG4gICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gZXZhbHVhdGU7XG4gICAgICAgIHJldHVybiB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUoZXZhbHVhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGV2YWx1YXRlID09ICdvYmplY3QnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGV2YWx1YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlKSB7XG4gICAgICAgICAgcmV0dXJuIGV2YWx1YXRlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBldmFsdWF0ZTtcbiAgICB9KTtcblxuICAgIGlmIChub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpIHtcbiAgICAgIGxldCB2YWx1ZSA9IHJlcztcbiAgICAgIGxldCBpc0Jvb2xlYW5BdHRyaWJ1dGUgPSBmYWxzZTtcblxuICAgICAgaWYgKGNvdW50ZXIpIHtcbiAgICAgICAgbm9kZS5fX2hhc0JpbmRpbmdzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvdW50ZXIgPT0gMSAmJiBleHByZXNzaW9uICYmIG5vZGUuX19leHByZXNzaW9uID09IGV4cHJlc3Npb24pIHtcbiAgICAgICAgdmFsdWUgPSBhdHRyaWJ1dGVWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IGNsZWFyQXR0cmlidXRlID0gbm9kZS5ub2RlTmFtZS5yZXBsYWNlKC9eYm9vbGVhbi0oLispL2ksICckMScpO1xuICAgICAgbGV0IGNhbWVsQXR0cmlidXRlID0gdXRpbHMudG9DYW1lbENhc2UoY2xlYXJBdHRyaWJ1dGUpO1xuXG4gICAgICBpZiAoY2xlYXJBdHRyaWJ1dGUgIT0gbm9kZS5ub2RlTmFtZSkge1xuICAgICAgICBpc0Jvb2xlYW5BdHRyaWJ1dGUgPSB0cnVlO1xuICAgICAgICB2YWx1ZSA9ICEhdmFsdWU7XG4gICAgICB9ICAgICAgICAgIFxuXG4gICAgICBpZiAobm9kZS5fX2F0dHJpYnV0ZU9uKSB7ICAgICAgICBcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IG5vZGUuX19hdHRyaWJ1dGVPbjtcbiAgICAgICAgIWNvbXBvbmVudC5fX3NhdmVBdHRyaWJ1dGVQcm94eUluICYmICh2YWx1ZSA9IHV0aWxzLmNvcHkodmFsdWUpKTtcbiAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IHRydWU7XG4gICAgICAgIGNvbXBvbmVudC5hdHRyc1tjYW1lbEF0dHJpYnV0ZV0gPSB2YWx1ZTtcbiAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChjb21wb25lbnQuX19pc01vdW50ZWQpIHtcbiAgICAgICAgICBjb21wb25lbnQuX19hdHRyVHJpZ2dlckJ5TmFtZShjYW1lbEF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpc0Jvb2xlYW5BdHRyaWJ1dGUpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBub2RlLl9fZWxlbWVudDtcbiAgICAgICAgdmFsdWU/IGVsZW1lbnQuc2V0QXR0cmlidXRlKGNhbWVsQXR0cmlidXRlLCAndHJ1ZScpOiBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShjYW1lbEF0dHJpYnV0ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBOZXN0ZWQgZXZhbHVhdGlvbiBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtib29sZWFufSBbd2l0aG91dFBhcmVudHM9ZmFsc2VdIC0gaWYgdHJ1ZSBldmFsdWF0aW9uIHdpbGwgYmUgb25seSBmb3IgdGhlIGN1cnJlbnQga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlTmVzdGVkKGtleXMsIHdpdGhvdXRQYXJlbnRzID0gZmFsc2UpIHtcbiAgICBsZXQgc2NvcGUgPSB0aGlzLl9fc2NvcGU7XG4gICAgbGV0IHByb3BzID0gW107ICAgIFxuICAgIFxuICAgIGlmICghd2l0aG91dFBhcmVudHMpIHtcbiAgICAgIGxldCBsYXN0UHJvcHMgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgbGV0IHZhbHVlO1xuXG4gICAgICAgIGxhc3RQcm9wcyA9IFsuLi5sYXN0UHJvcHMsIGtleV07XG4gICAgICAgIHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMobGFzdFByb3BzLCBzY29wZSk7XG4gICAgICAgIHByb3BzLnB1c2goeyBrZXlzOiBsYXN0UHJvcHMsIHZhbHVlOiB2YWx1ZX0pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHByb3BzLnB1c2goeyBrZXlzOiBrZXlzLCB2YWx1ZTogdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgc2NvcGUpfSk7XG4gICAgfVxuXG4gICAgbGV0IHByb3BzTGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gICAgY29uc3QgZWxFdmFsdWF0ZSA9IChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBjb21wb25lbnQgPSBlbGVtZW50Ll9fYWtpbGk7ICAgICBcblxuICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCBwcm9wc0xlbmd0aDsgbSsrKSB7XG4gICAgICAgIGxldCBwcm9wID0gcHJvcHNbbV07XG4gICAgICAgIGxldCBkYXRhID0gY29tcG9uZW50Ll9fZ2V0QmluZChwcm9wLmtleXMpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhLl9fZGF0YSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgayA9IDAsIGMgPSBkYXRhLl9fZGF0YS5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgICAgICBsZXQgYmluZCA9IGRhdGEuX19kYXRhW2tdOyBcbiBcbiAgICAgICAgICBpZiAoY29tcG9uZW50Ll9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2luZyhiaW5kLm5vZGUsIHByb3Aua2V5cywgcHJvcC52YWx1ZSkpIHsgICAgIFxuICAgICAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZUtleXMocHJvcC5rZXlzKTtcbiAgICAgICAgICAgIGxldCBjaGVja1Byb3AgPSBjb21wb25lbnQuX19nZXROb2RlUHJvcGVydHkoYmluZC5ub2RlLCBwcm9wLmtleXMpOyAgICAgICAgICAgIFxuICAgICAgICAgICAgY2hlY2tQcm9wICYmIGNoZWNrUHJvcC5ldmFsdWF0ZWQgJiYgY29tcG9uZW50LnNjb3BlLl9fc2V0KHByb3Aua2V5cywgcHJvcC52YWx1ZSwgZmFsc2UsIHRydWUpOyAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBjb21wb25lbnQuX19ldmFsdWF0ZU5vZGUoYmluZC5ub2RlLCBmYWxzZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IF9rIGluIGJpbmQubm9kZS5fX3Byb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgaWYgKCFiaW5kLm5vZGUuX19wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KF9rKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBsZXQgX3Byb3AgPSBiaW5kLm5vZGUuX19wcm9wZXJ0aWVzW19rXTtcbiAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoX3Byb3Aua2V5cywgX3Byb3AuY29tcG9uZW50Ll9fc2NvcGUpO1xuICAgICAgICAgICAgICBfcHJvcC5jb21wb25lbnQuX19zZXROb2RlUHJvcGVydHkoYmluZC5ub2RlLCBfcHJvcC5rZXlzLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2VuYWJsZUtleXMocHJvcC5rZXlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9O1xuXG4gICAgY29uc3QgZXZhbHVhdGUgPSAoZWxlbWVudHMpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBlbEV2YWx1YXRlKGVsZW1lbnRzW2ldKTtcbiAgICAgICAgZXZhbHVhdGUoY29tcG9uZW50Ll9fY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBlbEV2YWx1YXRlKHRoaXMuZWwpO1xuICAgIGV2YWx1YXRlKHRoaXMuX19jaGlsZHJlbik7XG4gIH0gIFxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSB2YWx1ZSBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlbGV0ZWQ9ZmFsc2VdIC0gdHJ1ZSBpZiB2YWx1ZSBpcyBkZWxldGluZ1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlQnlLZXlzKGtleXMsIHZhbHVlLCBpc0RlbGV0ZWQgPSBmYWxzZSkgeyAgICAgXG4gICAgbGV0IGRhdGEgPSB0aGlzLl9fZ2V0QmluZChrZXlzKTtcblxuICAgIGNvbnN0IHVuYmluZCA9IChvYmosIHBhcmVudHMpID0+IHtcbiAgICAgIGZvciAobGV0IGsgaW4gb2JqKSB7XG4gICAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGspIHx8IHRoaXMuX19pc1N5c3RlbUJpbmRpbmdLZXkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBfa2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba10pO1xuICAgICAgICBsZXQgX19rZXlzID0gX2tleXMuc2xpY2UoKTtcbiAgICAgICAgbGV0IF9pc0RlbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IHZhbCA9IG9ialtrXTtcbiAgICAgICAgbGV0IGhhc0tleTtcbiAgICAgICAgXG4gICAgICAgIF9fa2V5cy5zaGlmdCgpO1xuICAgICAgICBoYXNLZXkgPSB1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhfX2tleXMsIHZhbHVlKTtcblxuICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnICYmICFoYXNLZXkpIHtcbiAgICAgICAgICBfaXNEZWxldGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWwgJiYgdHlwZW9mIHZhbCA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHVuYmluZCh2YWwsIF9rZXlzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5fX2V2YWx1YXRlTmVzdGVkKF9rZXlzLCB0cnVlKTtcblxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8ICFoYXNLZXkpIHtcbiAgICAgICAgICB0aGlzLl9fdW5iaW5kKF9rZXlzKTtcbiAgICAgICAgICBfaXNEZWxldGVkICYmIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKF9fa2V5cywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICBkYXRhICYmIHVuYmluZChkYXRhLCBbXS5jb25jYXQoa2V5cykpO1xuICAgIHRoaXMuX19ldmFsdWF0ZU5lc3RlZChrZXlzKTtcblxuICAgIGlmIChpc0RlbGV0ZWQpIHtcbiAgICAgIHRoaXMuX191bmJpbmQoa2V5cyk7XG4gICAgICBpc0RlbGV0ZWQgJiYgdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgZXZlbnQgZXhwcmVzc2lvblxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVFdmVudChub2RlLCBlbCwgZSkge1xuICAgIGxldCBleHByZXNzaW9uID0gZXZhbHVhdGlvblJlZ2V4LmV4ZWMobm9kZS5fX2V4cHJlc3Npb24pO1xuICAgIGxldCBldmFsdWF0ZTtcblxuICAgIGlmICghZXhwcmVzc2lvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSB7XG4gICAgICBlbDogZWwsXG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICBldmVudDogZSxcbiAgICAgIG5vZGU6IG5vZGVcbiAgICB9O1xuXG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IHt9O1xuICAgIGV2YWx1YXRlID0gdGhpcy5jb25zdHJ1Y3Rvci5wYXJzZSh0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5zY29wZSwgZXhwcmVzc2lvblsxXSwgeyBldmVudDogZSB9KTtcbiAgICB0aGlzLl9fZXZhbHVhdGluZ0V2ZW50ID0gbnVsbDtcblxuICAgIHJldHVybiBldmFsdWF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBjaGFuZ2VzIGFuZCBldmFsdWF0ZSB0aGUgcGFzc2VkIG5vZGVcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2NoZWNrXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlTm9kZShub2RlLCBjaGVjayA9IHRydWUpIHtcbiAgICBpZiAoY2hlY2s/IHRoaXMuX19jaGVja0V2YWx1YXRpb24obm9kZSk6IHRydWUpIHsgICAgICBcbiAgICAgIGxldCBrZXkgPSBub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHI/ICd2YWx1ZSc6ICdub2RlVmFsdWUnO1xuICAgICAgbGV0IHJlcyA9IHRoaXMuX19ldmFsdWF0ZShub2RlKTsgICAgIFxuICAgICAgbm9kZVtrZXldICE9IHJlcyAmJiAobm9kZVtrZXldID0gcmVzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXR0cmlidXRlIG5vZGUgaW5pdGlhbGl6aW5nXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBhdHRyaWJ1dGVPZiAtIGlmIG5vZGUgaXMgbGlua2VkIHdpdGggcGFyZW50IHNjb3BlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZUF0dHJpYnV0ZShub2RlLCBlbCwgYXR0cmlidXRlT2YpIHtcbiAgICBpZiAoc3lzdGVtQXR0cmlidXRlcy5pbmRleE9mKG5vZGUubm9kZU5hbWUpICE9IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fX2luaXRpYWxpemVOb2RlKG5vZGUsIGVsKTtcbiAgICBsZXQgZXZlbnROYW1lID0gbm9kZS5ub2RlTmFtZS5yZXBsYWNlKC9eb24tKC4rKS9pLCAnJDEnKTtcbiAgICBsZXQgbm9kZU5hbWUgPSB1dGlscy50b0NhbWVsQ2FzZShub2RlLm5vZGVOYW1lKTtcbiAgICBsZXQgY29tcG9uZW50ID0gYXR0cmlidXRlT2Y/IGF0dHJpYnV0ZU9mOiB0aGlzO1xuXG4gICAgaWYgKGV2ZW50TmFtZSAhPSBub2RlLm5vZGVOYW1lKSB7XG4gICAgICBpZiAobm9kZS5fX2V2ZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGVtaXR0ZXIgPSBuZXcgQWtpbGkuRXZlbnRFbWl0dGVyKGV2ZW50TmFtZSwgZWwsIGNvbXBvbmVudCk7XG5cbiAgICAgIGlmIChub2RlLl9fZXhwcmVzc2lvbikge1xuICAgICAgICBlbWl0dGVyLmJpbmQoKGUpID0+IHtcbiAgICAgICAgICByZXR1cm4gY29tcG9uZW50Ll9fZXZhbHVhdGVFdmVudChub2RlLCBlbCwgZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBub2RlLl9fZXZlbnQgPSBlbWl0dGVyO1xuICAgICAgZWwuc2V0QXR0cmlidXRlKG5vZGUubm9kZU5hbWUsIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZShlbWl0dGVyKSk7XG5cbiAgICAgIGlmIChhdHRyaWJ1dGVPZikge1xuICAgICAgICB0aGlzLl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IHRydWU7XG4gICAgICAgIHRoaXMuYXR0cnNbbm9kZU5hbWVdID0gZW1pdHRlcjtcbiAgICAgICAgdGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChhdHRyaWJ1dGVPZikge1xuICAgICAgbm9kZS5fX2F0dHJpYnV0ZU9uID0gdGhpcztcbiAgICAgIG5vZGUuX19hdHRyaWJ1dGVPZiA9IGNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBlbC5zZXRBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSwgY29tcG9uZW50Ll9fZXZhbHVhdGUobm9kZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIG5vZGVcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZU5vZGUobm9kZSwgZWwpIHtcbiAgICBpZiAobm9kZS5fX2luaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbm9kZS5fX2V4cHJlc3Npb24gPSBub2RlWyhub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpPyAndmFsdWUnOiAnbm9kZVZhbHVlJ107XG4gICAgbm9kZS5fX3Byb3BlcnRpZXMgPSB7fTtcbiAgICBub2RlLl9fYXR0cmlidXRlT2YgPSBudWxsO1xuICAgIG5vZGUuX19hdHRyaWJ1dGVPbiA9IG51bGw7XG4gICAgbm9kZS5fX2V2ZW50ID0gbnVsbDtcbiAgICBub2RlLl9faGFzQmluZGluZ3MgPSBmYWxzZTtcbiAgICBub2RlLl9faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIG5vZGUuX19jb21wb25lbnQgPSB0aGlzO1xuICAgIG5vZGUuX19lbGVtZW50ID0gZWw7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcnBvbGF0ZSBhdHRyaWJ1dGVzIG9mIHRoZSBlbGVtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtDb21wb25lbnR9IFthdHRyaWJ1dGVPZj1udWxsXSAtIGlmIG5vZGUgaXMgbGlua2VkIHdpdGggcGFyZW50IHNjb3BlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKGVsLCBhdHRyaWJ1dGVPZiA9IG51bGwpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgYXR0cnMgPSBlbC5hdHRyaWJ1dGVzLCBsID0gYXR0cnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB0aGlzLl9faW5pdGlhbGl6ZUF0dHJpYnV0ZShhdHRyc1tpXSwgZWwsIGF0dHJpYnV0ZU9mKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lIGF0dHJpYnV0ZXMgYXMgcHJveHlcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZWZpbmVBdHRyaWJ1dGVzKCkge1xuICAgIGNvbnN0IGNoYW5nZUF0dHJpYnV0ZSA9IChrZXksIHZhbHVlLCBpc0RlbGV0ZWQgPSBmYWxzZSkgPT4ge1xuICAgICAgaWYgKHRoaXMuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IG5vZGUgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZU5vZGUoa2V5KTtcblxuICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUuX19ldmVudCkge1xuICAgICAgICAgIG5vZGUuX19ldmVudC51bmJpbmQoKTtcbiAgICAgICAgICBub2RlLl9fZXZlbnQgPSBudWxsO1xuICAgICAgICAgIG5vZGUuX19leHByZXNzaW9uID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZS5fX2hhc0JpbmRpbmdzKSB7XG4gICAgICAgICAgdGhpcy5fX3BhcmVudCAmJiB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19ldmFsdWF0aW9uQ29tcG9uZW50Ll9fdW5iaW5kQnlOb2Rlcyhbbm9kZV0pO1xuICAgICAgICAgIG5vZGUuX19oYXNCaW5kaW5ncyA9IGZhbHNlO1xuICAgICAgICAgIG5vZGUuX19leHByZXNzaW9uID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGVsZXRlZCkge1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAobm9kZSkge1xuICAgICAgICBub2RlLnZhbHVlID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuYXR0cnMgPSBuZXcgUHJveHkodGhpcy5fX2F0dHJzLCB7XG4gICAgICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBpZiAoa2V5ID09ICdfX2lzUHJveHknKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICB9LFxuICAgICAgc2V0OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBhdHRyS2V5ID0gdXRpbHMudG9EYXNoQ2FzZShrZXkpO1xuXG4gICAgICAgIGlmICh0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzLmluZGV4T2YoYXR0cktleSkgIT0gLTEpIHtcbiAgICAgICAgICBhdHRyS2V5ID0gYGJvb2xlYW4tJHthdHRyS2V5fWA7XG5cbiAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgY2hhbmdlQXR0cmlidXRlKGF0dHJLZXksIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZSh2YWx1ZSkpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBkZWxldGVQcm9wZXJ0eTogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgYXR0cktleSA9IHV0aWxzLnRvRGFzaENhc2Uoa2V5KTtcbiAgICAgICAgY2hhbmdlQXR0cmlidXRlKGF0dHJLZXksIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZSh2YWx1ZSksIHRydWUpO1xuICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBwcm94eSB0byBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEByZXR1cm5zIHtQcm94eX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19vYnNlcnZlKG9iaiwgcGFyZW50cykge1xuICAgIHJldHVybiBuZXcgUHJveHkob2JqLCB7XG4gICAgICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4geyBcbiAgICAgICAgaWYgKGtleSA9PSBcIl9faXNQcm94eVwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IFwiX190YXJnZXRcIikge1xuICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IFwiX19jb21wb25lbnRcIikge1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PSBcIl9fa2V5c1wiKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudHM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLl9faXNTeXN0ZW1LZXkoa2V5KSkge1xuICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBsZXQgcmVhbFRhcmdldCAgPSB1dGlscy5nZXRPd25Qcm9wZXJ0eVRhcmdldCh0YXJnZXQsIGtleSk7XG5cbiAgICAgICAgICBpZiAoIXV0aWxzLmlzUGxhaW5PYmplY3QocmVhbFRhcmdldCkpIHtcbiAgICAgICAgICAgIHJlYWxUYXJnZXRba2V5XSA9IEFraWxpLmlzb2xhdGVGdW5jdGlvbihyZWFsVGFyZ2V0W2tleV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBa2lsaS5fX2V2YWx1YXRpb24pIHsgIFxuICAgICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrZXldKTtcbiAgICAgICAgICBsZXQgbm90QmluZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGxldCBldmFsdWF0ZWQgPSAhdXRpbHMuaGFzUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKTsgXG4gICAgICAgICAgbGV0IGNvbXBvbmVudCA9IHRoaXM7XG4gICAgICAgICAgbGV0IGV4Y0FyciA9IGtleXMuc2xpY2UoKTtcblxuICAgICAgICAgIGlmKHRhcmdldCBpbnN0YW5jZW9mIFNjb3BlKSB7XG4gICAgICAgICAgICBsZXQgcmVhbFRhcmdldCA9IHV0aWxzLmdldE93blByb3BlcnR5VGFyZ2V0KHRhcmdldCwga2V5KTtcbiAgICAgICAgICAgIHJlYWxUYXJnZXQgJiYgKHJlYWxUYXJnZXQgaW5zdGFuY2VvZiBTY29wZSkgJiYgKGNvbXBvbmVudCA9ICByZWFsVGFyZ2V0Ll9fY29tcG9uZW50KTtcbiAgICAgICAgICB9IFxuXG4gICAgICAgICAgY29uc3QgZm9yUGFyZW50cyA9IEFraWxpLl9fZXZhbHVhdGlvbi5jb21wb25lbnQucGFyZW50cyhjID0+IGMgaW5zdGFuY2VvZiBBa2lsaS5jb21wb25lbnRzLkZvcik7XG5cbiAgICAgICAgICBmb3IobGV0IGkgPSAwLCBsID0gZm9yUGFyZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGZvcihsZXQgayA9IDAsIGMgPSBrZXlzLmxlbmd0aDsgayA8IGM7IGsrKykgeyBcbiAgICAgICAgICAgICAgY29uc3QgZm9yRGF0YSA9IGZvclBhcmVudHNbaV0uZGF0YTtcbiAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGV4Y0FyciwgY29tcG9uZW50Ll9fc2NvcGUpO1xuXG4gICAgICAgICAgICAgIGlmKGRhdGEgJiYgdHlwZW9mIGRhdGEgPT0gJ29iamVjdCcgJiYgZm9yRGF0YSA9PT0gZGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgICAgZXhjQXJyLnBvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gIFxuXG4gICAgICAgICAgaWYgKCEoa2V5IGluIHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH0gICAgICAgICAgXG4gICAgICAgICAgZWxzZSBpZiAoIXV0aWxzLmdldEVudW1lcmFibGVQcm9wZXJ0eVRhcmdldCh0YXJnZXQsIGtleSkpIHtcbiAgICAgICAgICAgIG5vdEJpbmRpbmcgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX19iaW5kTm9kZShBa2lsaS5fX2V2YWx1YXRpb24ubGlzdCwgY29tcG9uZW50LCBrZXlzLCBwYXJlbnRzLCB0YXJnZXRba2V5XSwgbm90QmluZGluZywgZXZhbHVhdGVkKTtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICB9LFxuICAgICAgc2V0OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7IFxuICAgICAgICBpZiAodGhpcy5fX2lzU3lzdGVtS2V5KGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tleV0pO1xuXG4gICAgICAgIGlmICh0aGlzLl9fY2hlY2tEaXNhYmxlbWVudChrZXlzKSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQga2V5U3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpO1xuXG4gICAgICAgIENIRUNLX0VYSVNURU5DRTogaWYocGFyZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGV0IHRhcmdldFBhcmVudFZhbHVlID0gcGFyZW50cy5sZW5ndGggPiAxPyB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhwYXJlbnRzLnNsaWNlKDAsIC0xKSwgdGhpcy5fX3Njb3BlKTogdGhpcy5fX3Njb3BlO1xuICAgICAgICAgIFxuICAgICAgICAgIGZvcihsZXQgayBpbiB0YXJnZXRQYXJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgaWYoIXRhcmdldFBhcmVudFZhbHVlLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0YXJnZXRQYXJlbnRWYWx1ZVtrXSAmJiB0YXJnZXRQYXJlbnRWYWx1ZVtrXS5fX3RhcmdldCA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgIGJyZWFrIENIRUNLX0VYSVNURU5DRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddKSB7XG4gICAgICAgICAgdGhpcy5fX3N0b3JlVHJpZ2dlckJ5S2V5cyhrZXlzLCB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ10pIHtcbiAgICAgICAgICB0aGlzLl9fYXR0clRyaWdnZXJCeUtleXMoa2V5cywgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0W2tleV0gPSB0aGlzLl9fbmVzdGVkT2JzZXJ2ZSh2YWx1ZSwga2V5cyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoQWtpbGkuX19pc29sYXRpb24pIHsgXG4gICAgICAgICAgdGhpcy5fX2NyZWF0ZUlzb2xhdGlvbk9iamVjdChwYXJlbnRzLCBrZXksIGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuX19pc01vdW50ZWQpIHsgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgdGhpcy5fX2V2YWx1YXRlQnlLZXlzKGtleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tleV0pO1xuXG4gICAgICAgIGlmICh0aGlzLl9fY2hlY2tEaXNhYmxlbWVudChrZXlzKSkge1xuICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9faXNTeXN0ZW1LZXkoa2V5KSkge1xuICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKEFraWxpLl9faXNvbGF0aW9uKSB7XG4gICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICAgIHRoaXMuX19jcmVhdGVJc29sYXRpb25PYmplY3QocGFyZW50cywga2V5LCB0cnVlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICB0aGlzLl9fZXZhbHVhdGVCeUtleXMoa2V5cywgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGhhc2ggZm9yIHRoZSBrZXlzXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGVLZXlzSGFzaChrZXlzKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuX19zY29wZS5fX25hbWV9LiR7QWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpfWA7XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZSB0aGUga2V5cyBzZXR0ZXJcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGlzYWJsZUtleXMoa2V5cykge1xuICAgIHRoaXMuX19kaXNhYmxlUHJveHlba2V5cz8gdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpOiAnX19hbGwnXSA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIHRoZSBrZXlzIHNldHRlclxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19lbmFibGVLZXlzKGtleXMpIHtcbiAgICBkZWxldGUgdGhpcy5fX2Rpc2FibGVQcm94eVtrZXlzPyB0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyk6ICdfX2FsbCddO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBrZXlzIHNldHRlciBkaXNhYmxlbWFudFxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jaGVja0Rpc2FibGVtZW50KGtleXMpIHtcbiAgICByZXR1cm4gdGhpcy5fX2Rpc2FibGVQcm94eS5fX2FsbD8gdHJ1ZTogdGhpcy5fX2Rpc2FibGVQcm94eVt0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyldO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmUgdGhlIHZhbHVlIHRvIHRoZSBzdG9yZSBieSB0aGUga2V5c1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zdG9yZVRyaWdnZXJCeUtleXMoa2V5cywgdmFsdWUpIHtcbiAgICBjb25zdCBsaW5rcyA9IHRoaXMuX19zdG9yZUxpbmtzW0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKV07XG4gICAgXG4gICAgaWYoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YWx1ZSA9IHV0aWxzLmNvcHkodmFsdWUpO1xuICAgIHRoaXMuX19kaXNhYmxlS2V5cyhrZXlzKTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTtcbiAgICAgIFxuICAgICAgdGhpcy5fX3N0b3JlVHJpZ2dlckJ5TmFtZShsaW5rLm5hbWUsIHZhbHVlKTtcbiAgICAgIFxuICAgIH1cbiAgICBcbiAgICB0aGlzLl9fZW5hYmxlS2V5cyhrZXlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlIHRoZSB2YWx1ZSB0byB0aGUgc3RvcmUgYnkgdGhlIG5hbWVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3N0b3JlVHJpZ2dlckJ5TmFtZShuYW1lLCB2YWx1ZSkgeyAgXG4gICAgc3RvcmUuX190YXJnZXRbbmFtZV0gPSB2YWx1ZTtcbiAgICBjb25zdCBsaW5rcyA9IEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXTtcblxuICAgIGlmKCFsaW5rcyB8fCAhbGlua3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGxpbmsuY29tcG9uZW50O1xuXG4gICAgICBpZihjb21wb25lbnQgPT09IHRoaXMpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmKGxpbmsuZm4pIHtcbiAgICAgICAgQWtpbGkudW5pc29sYXRlKCgpID0+IGxpbmsuZm4uY2FsbChjb21wb25lbnQsIHZhbHVlKSlcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGNvbXBvbmVudC5zY29wZS5fX3NldChsaW5rLmtleXMsIHZhbHVlKTsgICAgICBcbiAgICB9ICAgICBcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBzdG9yZSBsaW5rIHdpdGggdGhlIHNjb3BlIHByb3BlcnR5XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zdG9yZUJ5S2V5cyhuYW1lLCBrZXlzKSB7XG4gICAgaWYoIWtleXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgU3RvcmUgbGluayBcIiR7bmFtZX1cIiBtdXN0IGhhdmUgdGhlIHNjb3BlIHByb3BlcnR5IG5hbWVgKTtcbiAgICB9XG5cbiAgICBpZighQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG5cbiAgICB0aGlzLnNjb3BlLl9fc2V0KGtleXMsIHN0b3JlW25hbWVdKTtcbiAgICBsZXQga2V5U3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpO1xuICAgIGxldCBpbmZvO1xuXG4gICAgaWYoIXRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ10pIHtcbiAgICAgIHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ10gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgYXJyID0gdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXTtcbiAgICBcbiAgICBmb3IobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBhcnJbaV07XG5cbiAgICAgIGlmKHJlcy5jb21wb25lbnQgPT09IHRoaXMgJiYgcmVzLm5hbWUgPT0gbmFtZSAmJiByZXMua2V5U3RyaW5nID09IGtleVN0cmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoIUFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSkge1xuICAgICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgaW5mbyA9IHsgY29tcG9uZW50OiB0aGlzLCBuYW1lLCBrZXlzLCBrZXlTdHJpbmcgfTtcbiAgICB0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddLnB1c2goaW5mbyk7XG4gICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdLnB1c2goaW5mbyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgc3RvcmUgbGluayB3aXRoIHRoZSBmdW5jdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuICAgXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIF9fc3RvcmVCeUZ1bmN0aW9uKG5hbWUsIGZuLCBvcHRpb25zID0ge30pIHsgXG4gICAgbGV0IGNhbGwgPSBvcHRpb25zLmNhbGxPblN0YXJ0ID09PSB1bmRlZmluZWQ/IHN0b3JlLl9fdGFyZ2V0Lmhhc093blByb3BlcnR5KG5hbWUpOiBvcHRpb25zLmNhbGxPblN0YXJ0O1xuXG4gICAgaWYoIUFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSkge1xuICAgICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuICAgIFxuICAgIGZvcihsZXQgaSA9IGxpbmtzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gbGlua3NbaV07XG5cbiAgICAgIGlmKHJlcy5jb21wb25lbnQgPT09IHRoaXMgJiYgcmVzLm5hbWUgPT0gbmFtZSAmJiByZXMuZm4gPT09IGZuKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXS5wdXNoKHsgY29tcG9uZW50OiB0aGlzLCBuYW1lLCBmbiB9KTtcblxuICAgIGlmKGNhbGwpIHtcbiAgICAgIHJldHVybiBBa2lsaS51bmlzb2xhdGUoKCkgPT4gZm4uY2FsbCh0aGlzLCBzdG9yZVtuYW1lXSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHN0b3JlIGxpbmsgd2l0aCB0aGUgc2NvcGUgcHJvcGVydHlcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5zdG9yZUJ5S2V5cyhuYW1lLCBrZXlzKSB7XG4gICAgaWYoIWtleXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IGhhdmUgdG8gcGFzcyB0aGUgc2NvcGUgcHJvcGVydHkgbmFtZSBmb3Igc3RvcmUgbGluayBcIiR7bmFtZX1cImApO1xuICAgIH1cblxuICAgIGlmKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cblxuICAgIGxldCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG4gICAgbGV0IGFyciA9IHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ107XG5cbiAgICBpZighYXJyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBmb3IobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBhcnJbaV07XG4gICAgICBsZXQgbGlua3MgPSBBa2lsaS5fX3N0b3JlTGlua3NbcmVzLm5hbWVdO1xuXG4gICAgICBpZihyZXMuY29tcG9uZW50ICE9PSB0aGlzIHx8IHJlcy5uYW1lICE9IG5hbWUgfHwgcmVzLmtleVN0cmluZyAhPSBrZXlTdHJpbmcpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGFyci5zcGxpY2UoaSwgMSk7XG5cbiAgICAgIGlmKCFsaW5rcyB8fCAhbGlua3MubGVuZ3RoKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBmb3IobGV0IGsgPSBsaW5rcy5sZW5ndGggLSAxOyBrID49IDA7IGstLSkge1xuICAgICAgICBsZXQgbGluayA9IGxpbmtzW2tdO1xuXG4gICAgICAgIGlmKGxpbmsuY29tcG9uZW50ID09PSB0aGlzICYmIGxpbmsua2V5U3RyaW5nID09IGtleVN0cmluZykge1xuICAgICAgICAgIGxpbmtzLnNwbGljZShrLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZighbGlua3MubGVuZ3RoKSB7XG4gICAgICAgIGRlbGV0ZSBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoIWFyci5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHN0b3JlIGxpbmsgd2l0aCB0aGUgZnVuY3Rpb25cbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bnN0b3JlQnlGdW5jdGlvbihuYW1lLCBmbikge1xuICAgIGlmKCFBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV07XG4gICAgXG4gICAgZm9yKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYocmVzLmNvbXBvbmVudCA9PT0gdGhpcyAmJiByZXMubmFtZSA9PSBuYW1lICYmIHJlcy5mbiA9PT0gZm4pIHtcbiAgICAgICAgbGlua3Muc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZighbGlua3MubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIGFuIGF0dHJpYnV0ZSBldmVudCBieSB0aGUga2V5c1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAgICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hdHRyVHJpZ2dlckJ5S2V5cyhrZXlzLCB2YWx1ZSkge1xuICAgIGlmKHRoaXMuX19kaXNhYmxlQXR0clRyaWdnZXJpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbGlua3MgPSB0aGlzLl9fYXR0ckxpbmtzW0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKV07XG4gICBcbiAgICBpZighbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gQWtpbGkubmV4dFRpY2soKCkgPT4ge1xuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGxpbmtzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5rID0gbGlua3NbaV07XG5cbiAgICAgICAgaWYobGluay5mbikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBldiA9ICdvbicgKyB1dGlscy5jYXBpdGFsaXplKGxpbmsubmFtZSk7XG4gICAgICAgIHRoaXMuYXR0cnNbZXZdICYmIHRoaXMuYXR0cnNbZXZdLnRyaWdnZXIodmFsdWUsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9KTsgIFxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgYW4gYXR0cmlidXRlIGV2ZW50IGJ5IHRoZSBuYW1lXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hdHRyVHJpZ2dlckJ5TmFtZShuYW1lLCB2YWx1ZSkge1xuICAgIGNvbnN0IGxpbmtzID0gdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcblxuICAgIGlmKCFsaW5rcyB8fCAhbGlua3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAgICBcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTsgICAgXG4gICAgICB0aGlzLl9fZGlzYWJsZUF0dHJUcmlnZ2VyaW5nID0gdHJ1ZTtcbiAgICAgIGxpbmsuZm4/IEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBsaW5rLmZuLmNhbGwodGhpcywgdmFsdWUpKTogdGhpcy5zY29wZS5fX3NldChsaW5rLmtleXMsIHZhbHVlKTsgXG4gICAgICB0aGlzLl9fZGlzYWJsZUF0dHJUcmlnZ2VyaW5nID0gZmFsc2U7IFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gYXR0cmlidXRlIGxpbmsgd2l0aCB0aGUgc2NvcGUgcHJvcGVydHlcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2F0dHJCeUtleXMobmFtZSwga2V5cykge1xuICAgIGlmKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEF0dHJpYnV0ZSBsaW5rIFwiJHtuYW1lfVwiIG11c3QgaGF2ZSB0aGUgc2NvcGUgcHJvcGVydHkgbmFtZWApO1xuICAgIH1cblxuICAgIGlmKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cblxuICAgIG5hbWUgPSB1dGlscy50b0NhbWVsQ2FzZShuYW1lKTtcbiAgICB0aGlzLl9fZGlzYWJsZUF0dHJUcmlnZ2VyaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KG5hbWUpICYmIHRoaXMuc2NvcGUuX19zZXQoa2V5cywgdGhpcy5hdHRyc1tuYW1lXSk7ICBcbiAgICB0aGlzLl9fZGlzYWJsZUF0dHJUcmlnZ2VyaW5nID0gZmFsc2U7ICBcbiAgICBsZXQga2V5U3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpO1xuXG4gICAgaWYoIXRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXSkge1xuICAgICAgdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddID0gW107XG4gICAgfVxuXG4gICAgbGV0IGFyciA9IHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXTtcbiAgICBcbiAgICBmb3IobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBhcnJbaV07XG5cbiAgICAgIGlmKHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmtleVN0cmluZyA9PSBrZXlTdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXS5wdXNoKHsgbmFtZSwga2V5cywga2V5U3RyaW5nIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBhdHRyaWJ1dGUgbGluayB3aXRoIHRoZSBmdW5jdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZCBcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBfX2F0dHJCeUZ1bmN0aW9uKG5hbWUsIGZuLCBvcHRpb25zID0ge30pIHsgICAgXG4gICAgbGV0IGNhbGwgPSBvcHRpb25zLmNhbGxPblN0YXJ0ID09PSB1bmRlZmluZWQ/IHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkobmFtZSk6IG9wdGlvbnMuY2FsbE9uU3RhcnQ7XG4gICAgbmFtZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKG5hbWUpO1xuXG4gICAgaWYoIXRoaXMuX19hdHRyTGlua3NbbmFtZV0pIHtcbiAgICAgIHRoaXMuX19hdHRyTGlua3NbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSB0aGlzLl9fYXR0ckxpbmtzW25hbWVdO1xuICAgIFxuICAgIGZvcihsZXQgaSA9IGxpbmtzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gbGlua3NbaV07XG5cbiAgICAgIGlmKHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmZuID09PSBmbikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdGhpcy5fX2F0dHJMaW5rc1tuYW1lXS5wdXNoKHsgbmFtZSwgZm4gfSk7XG4gICAgXG4gICAgaWYoY2FsbCkge1xuICAgICAgcmV0dXJuIEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBmbi5jYWxsKHRoaXMsIHRoaXMuYXR0cnNbbmFtZV0pKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBhdHRyaWJ1dGUgbGluayB3aXRoIHRoZSBzY29wZSBwcm9wZXJ0eVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmF0dHJCeUtleXMobmFtZSwga2V5cykge1xuICAgIGlmKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBoYXZlIHRvIHBhc3MgdGhlIHNjb3BlIHByb3BlcnR5IG5hbWUgZm9yIGF0dHJpYnV0ZSBsaW5rIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgaWYoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuXG4gICAgbGV0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcbiAgICBsZXQgYXJyID0gdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddO1xuXG4gICAgaWYoIWFyci5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgZm9yKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuXG4gICAgICBpZihyZXMubmFtZSAhPSBuYW1lIHx8IHJlcy5rZXlTdHJpbmcgIT0ga2V5U3RyaW5nKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBhcnIuc3BsaWNlKGksIDEpO1xuICAgIH1cblxuICAgIGlmKCFhcnIubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddO1xuICAgIH1cbiAgfVxuXG4gICAvKipcbiAgICogUmVtb3ZlIHRoZSBhdHRyaWJ1dGUgbGluayB3aXRoIHRoZSBmdW5jdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5hdHRyQnlGdW5jdGlvbihuYW1lLCBmbikge1xuICAgIGlmKCF0aGlzLl9fYXR0ckxpbmtzW25hbWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IobGV0IGkgPSBsaW5rcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGxpbmtzW2ldO1xuXG4gICAgICBpZihyZXMubmFtZSA9PSBuYW1lICYmIHJlcy5mbiA9PT0gZm4pIHtcbiAgICAgICAgbGlua3Muc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZighbGlua3MubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX2F0dHJMaW5rc1tuYW1lXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGtleSBpcyBzeXN0ZW1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pc1N5c3RlbUtleSAoa2V5KSB7XG4gICAgaWYgKGtleSA9PSAnX18nIHx8IChrZXlbMF0gPT0gJ18nICYmIGtleVsxXSA9PSAnXycpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoWydjb25zdHJ1Y3RvciddLmluZGV4T2Yoa2V5KSAhPSAtMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIE5lc3RlZCBvYnNlcnZpbmcgdGhlIHZhbHVlXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gW3N0YXJ0S2V5c11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19uZXN0ZWRPYnNlcnZlICh2YWx1ZSwgc3RhcnRLZXlzKSB7XG4gICAgY29uc3Qgb2JzZXJ2ZSA9ICh2YWx1ZSwgcGFyZW50cykgPT4ge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghdXRpbHMuaXNQbGFpbk9iamVjdCh2YWx1ZSkgJiYgIXV0aWxzLmlzU2NvcGVQcm94eSh2YWx1ZSkgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIFNjb3BlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGxldCB0YXJnZXQgPSB2YWx1ZTtcblxuICAgICAgQ0hFQ0tfUFJPWFk6IGlmICh2YWx1ZS5fX2lzUHJveHkpIHtcbiAgICAgICAgdGFyZ2V0ID0gdmFsdWUuX190YXJnZXQ7XG5cbiAgICAgICAgaWYgKHRoaXMuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nKSB7XG4gICAgICAgICAgYnJlYWsgQ0hFQ0tfUFJPWFk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChcbiAgICAgICAgICB2YWx1ZS5fX2NvbXBvbmVudCAhPT0gdGhpcyB8fFxuICAgICAgICAgIEFraWxpLmpvaW5CaW5kaW5nS2V5cyhwYXJlbnRzKSAhPSBBa2lsaS5qb2luQmluZGluZ0tleXModmFsdWUuX19rZXlzKVxuICAgICAgICApIHtcbiAgICAgICAgICB0YXJnZXQgPSB1dGlscy5jb3B5KHRhcmdldCwgeyBuZXN0ZWQ6IGZhbHNlIH0pO1xuICAgICAgICAgIHZhbHVlID0gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghdGhpcy5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIFNjb3BlKSkge1xuICAgICAgICB0YXJnZXQgPSB1dGlscy5jb3B5KHRhcmdldCwgeyBuZXN0ZWQ6IGZhbHNlIH0gKTsgICAgICAgICAgXG4gICAgICAgIHZhbHVlID0gdGFyZ2V0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBrIGluIHRhcmdldCkgeyAgICAgICAgXG4gICAgICAgIGlmICghdGFyZ2V0Lmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmFsID0gdGFyZ2V0W2tdOyAgICAgICAgXG4gICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrXSk7ICAgXG4gICAgICAgIHRhcmdldFtrXSA9IG9ic2VydmUodmFsLCBrZXlzKTsgIFxuICAgICAgfVxuXG4gICAgICBpZiAoIXZhbHVlLl9faXNQcm94eSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX29ic2VydmUodmFsdWUsIHBhcmVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcblxuICAgIGxldCByZXMgPSBvYnNlcnZlKHZhbHVlLCBzdGFydEtleXMgfHwgW10pO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGlzb2xhdGlvbiBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVsZXRlZD1mYWxzZV1cbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0IChwYXJlbnRzLCBrZXksIGlzRGVsZXRlZCA9IGZhbHNlKSB7XG4gICAgbGV0IGtleXMgPSBwYXJlbnRzLmxlbmd0aD8gW3BhcmVudHNbMF1dOiBba2V5XTtcbiAgICBsZXQgaXNvbGF0aW9uS2V5ID0gdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpO1xuXG4gICAgaWYgKHBhcmVudHMubGVuZ3RoKSB7XG4gICAgICBpc0RlbGV0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIUFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV0pIHtcbiAgICAgIEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV0gPSB7XG4gICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAga2V5czoga2V5c1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAoaXNEZWxldGVkICE9PSB1bmRlZmluZWQpICYmIChBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25LZXldLmlzRGVsZXRlZCA9IGlzRGVsZXRlZCk7XG4gICAgcmV0dXJuIEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV07XG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSB0aGUgbm9kZSB0byBiaW5kaW5nXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBiaW5kIC0gYnkgZGVmYXVsdCBpcyBjb21wb25lbnQuX19ldmFsdWF0aW9uLmxpc3RcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbbm90QmluZGluZz1mYWxzZV1cbiAgICogQHBhcmFtIHtib29sZWFufSBbZXZhbHVhdGVkPWZhbHNlXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2JpbmROb2RlKGJpbmQsIHJlYWxDb21wb25lbnQsIGtleXMsIHBhcmVudHMsIHZhbHVlLCBub3RCaW5kaW5nID0gZmFsc2UsIGV2YWx1YXRlZCA9IGZhbHNlKSB7XG4gICAgbGV0IHBhcmVudEtleXNTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMocGFyZW50cyk7XG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXM7XG5cbiAgICBpZiAoYmluZC5sZW5ndGggJiYgIW5vdEJpbmRpbmcpIHtcbiAgICAgIGxldCBsID0gYmluZC5sZW5ndGggLSAxO1xuICAgICAgbGV0IGRhdGEgPSBiaW5kW2xdO1xuXG4gICAgICBpZihkYXRhLnJlYWxDb21wb25lbnQgPT09IHRoaXMgJiYgZGF0YS5rZXlzU3RyaW5nID09IHBhcmVudEtleXNTdHJpbmcpIHtcbiAgICAgICAgY29tcG9uZW50ID0gZGF0YS5jb21wb25lbnQ7XG4gICAgICB9ICAgICAgXG4gICAgICBcbiAgICAgIGlmIChkYXRhLmtleXNTdHJpbmcgPT0gcGFyZW50S2V5c1N0cmluZyAmJiBkYXRhLmNvbXBvbmVudCA9PT0gY29tcG9uZW50KSB7XG4gICAgICAgIGJpbmQuc3BsaWNlKGwsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBiaW5kLnB1c2goe1xuICAgICAgY29tcG9uZW50LFxuICAgICAgcmVhbENvbXBvbmVudDogcmVhbENvbXBvbmVudCxcbiAgICAgIGtleXNTdHJpbmc6IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKSxcbiAgICAgIHBhcmVudHMsXG4gICAgICBrZXlzLFxuICAgICAgdmFsdWUsXG4gICAgICBldmFsdWF0ZWQsXG4gICAgICBub3RCaW5kaW5nXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGtleSBpcyBzeXN0ZW0gYmluZGluZyB0aGluZ1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqLyBcbiAgX19pc1N5c3RlbUJpbmRpbmdLZXkoa2V5KSB7XG4gICAgcmV0dXJuIGtleSA9PSAnX19kYXRhJztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYmluZGluZyBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldEJpbmQoa2V5cykge1xuICAgIHJldHVybiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MpIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGJpbmRpbmcgYnkga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0Qm91bmROb2RlKGtleXMsIG5vZGUpIHtcbiAgICBsZXQgYmluZCA9ICB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MpO1xuXG4gICAgaWYgKCFiaW5kIHx8ICFiaW5kLl9fZGF0YSB8fCAhYmluZC5fX2RhdGEubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGJpbmQuX19kYXRhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGRhdGEgPSBiaW5kLl9fZGF0YVtpXTtcblxuICAgICAgaWYgKGRhdGEubm9kZSA9PT0gbm9kZSkge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIG5vZGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtldmFsdWF0ZWRdXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzLCB2YWx1ZSwgZXZhbHVhdGVkID0gZmFsc2UpIHtcbiAgICBsZXQgcHJvcCA9IHRoaXMuX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cyk7ICAgIFxuICAgIGxldCBjb3B5ID0gdXRpbHMuY29weSh2YWx1ZSk7XG5cbiAgICBpZiAocHJvcCkge1xuICAgICAgbGV0IHJlcyA9IHV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlKHZhbHVlLCBwcm9wLnZhbHVlLCBwcm9wLmNvcHkpO1xuICAgICAgcHJvcC52YWx1ZSA9IHZhbHVlO1xuICAgICAgcHJvcC5jb3B5ID0gY29weTtcbiAgICAgIHJldHVybiAhcmVzO1xuICAgIH1cbiAgICBcbiAgICBub2RlLl9fcHJvcGVydGllc1t0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyldID0ge1xuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgdmFsdWUsXG4gICAgICBjb3B5LCAgICAgIFxuICAgICAga2V5cyxcbiAgICAgIGV2YWx1YXRlZCAgICAgIFxuICAgIH07XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5vZGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKSB7XG4gICAgbGV0IGhhc2ggPSBgJHt0aGlzLl9fc2NvcGUuX19uYW1lfS4ke0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKX1gO1xuICAgIHJldHVybiBub2RlLl9fcHJvcGVydGllc1toYXNoXSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSB0aGUgbm9kZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RlbGV0ZU5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKSB7XG4gICAgbGV0IGhhc2ggPSBgJHt0aGlzLl9fc2NvcGUuX19uYW1lfS4ke0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKX1gO1xuICAgIGRlbGV0ZSBub2RlLl9fcHJvcGVydGllc1toYXNoXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIGRhdGEgd2l0aCB0aGUga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYmluZChrZXlzLCBkYXRhKSB7XG4gICAgdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzLCAobGFzdCwgdmFsdWUpID0+IHtcbiAgICAgIGxldCBvYmogPSB7IF9fZGF0YTogW10gfTtcblxuICAgICAgaWYgKCFsYXN0KSB7XG4gICAgICAgIHJldHVybiB2YWx1ZT8gdmFsdWU6IG9iajtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgICAgICBvYmogPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFvYmouX19kYXRhKSB7XG4gICAgICAgIG9iai5fX2RhdGEgPSBbXTtcbiAgICAgIH1cblxuICAgICAgb2JqLl9fZGF0YS5wdXNoKGRhdGEpO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgdGhlIGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYmluZChrZXlzKSB7XG4gICAgbGV0IGJpbmQgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MpO1xuXG4gICAgaWYgKCFiaW5kIHx8ICFiaW5kLl9fZGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYmluZC5fX2RhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IGJpbmQuX19kYXRhW2ldLm5vZGU7XG4gICAgICB0aGlzLl9fZGVsZXRlTm9kZVByb3BlcnR5KG5vZGUsIGtleXMpO1xuICAgIH1cblxuICAgIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncywgKHZhbHVlKSA9PiB7XG4gICAgICBpZiAoT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdmFsdWUuX19kYXRhID0gW107XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIGRhdGEgYnkgbm9kZXNcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlW119IG5vZGVzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5iaW5kQnlOb2Rlcyhub2Rlcykge1xuICAgIGNvbnN0IHVuYmluZCA9IChvYmopID0+IHtcbiAgICAgIGZvciAobGV0IGsgaW4gb2JqKSB7XG4gICAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoayA9PSAnX19kYXRhJykge1xuICAgICAgICAgIGxldCBkYXRhID0gb2JqW2tdIHx8IFtdO1xuICAgICAgICAgIGxldCBsID0gZGF0YS5sZW5ndGg7XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJpbmQgPSBkYXRhW2ldO1xuXG4gICAgICAgICAgICBpZiAobm9kZXMuaW5kZXhPZihiaW5kLm5vZGUpICE9IC0xKSB7XG4gICAgICAgICAgICAgIGRhdGEuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgIGwtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWwpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmpba107XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoIXRoaXMuX19pc1N5c3RlbUJpbmRpbmdLZXkoaykpIHtcbiAgICAgICAgICB1bmJpbmQob2JqW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB1bmJpbmQodGhpcy5fX2JpbmRpbmdzKTtcbiAgICB0aGlzLl9fY2xlYXJFbXB0eUJpbmRpbmdzKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWxsIGVtcHR5IGJpbmRpbmdzXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb2JqXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NsZWFyRW1wdHlCaW5kaW5ncyhvYmopIHtcbiAgICBjb25zdCBjbGVhciA9IChvYmosIHBhcmVudCwga2V5KSA9PiB7XG4gICAgICBmb3IgKGxldCBrIGluIG9iaikge1xuICAgICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHZhbCA9IG9ialtrXTtcblxuICAgICAgICBpZiAoayA9PSAnX19kYXRhJyAmJiAoIXZhbCB8fCAhdmFsLmxlbmd0aCkpIHtcbiAgICAgICAgICBkZWxldGUgb2JqW2tdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLl9faXNTeXN0ZW1CaW5kaW5nS2V5KGspKSB7XG4gICAgICAgICAgaWYgKCFPYmplY3Qua2V5cyhvYmpba10pLmxlbmd0aCkge1xuICAgICAgICAgICAgZGVsZXRlIG9ialtrXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjbGVhcihvYmpba10sIG9iaiwgayk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghT2JqZWN0LmtleXMob2JqKS5sZW5ndGggJiYgcGFyZW50KSB7XG4gICAgICAgIGRlbGV0ZSBwYXJlbnRba2V5XTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY2xlYXIob2JqIHx8IHRoaXMuX19iaW5kaW5ncyk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIGxpbmtzXG4gICAqIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NsZWFyU3RvcmVMaW5rcygpIHtcbiAgICBjb25zdCBsaW5rcyA9IEFraWxpLl9fc3RvcmVMaW5rcztcblxuICAgIGZvcihsZXQga2V5IGluIGxpbmtzKSB7XG4gICAgICBjb25zdCBhcnIgPSBsaW5rc1trZXldO1xuXG4gICAgICBmb3IobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgbGluayA9IGFycltpXTtcbiAgXG4gICAgICAgIGlmKGxpbmsuY29tcG9uZW50ID09PSB0aGlzKSB7XG4gICAgICAgICAgYXJyLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZighYXJyLmxlbmd0aCkge1xuICAgICAgICBkZWxldGUgbGlua3Nba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBjaGlsZCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcmVtb3ZlQ2hpbGRyZW4oKSB7XG4gICAgY29uc3QgcmVtb3ZlID0gKGNoaWxkcmVuKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIHJlbW92ZShjaGlsZC5fX2FraWxpLl9fY2hpbGRyZW4pO1xuICAgICAgICBjaGlsZC5fX2FraWxpLl9fcmVtb3ZlKCk7XG4gICAgICAgIGktLTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVtb3ZlKHRoaXMuX19jaGlsZHJlbik7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBjb21wb25lbnQgd2l0aG91dCBjaGlsZHJlbiByZW1vdmluZ1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlbW92ZSgpIHtcbiAgICB0aGlzLl9fZGV0YWNoKCk7XG4gICAgdGhpcy5fX2NsZWFyU3RvcmVMaW5rcygpO1xuICAgIHRoaXMuYXR0cnMub25SZW1vdmVkICYmIHRoaXMuYXR0cnMub25SZW1vdmVkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgIHRoaXMucmVtb3ZlZCgpOyAgICBcbiAgICBBa2lsaS5yZW1vdmVTY29wZSh0aGlzLl9fc2NvcGUuX19uYW1lKTtcbiAgICB0aGlzLmVsLnJlbW92ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGFjaCB0aGUgY29tcG9uZW50XG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGV0YWNoKCkge1xuICAgIGlmICh0aGlzLl9fZXZhbHVhdGVQYXJlbnQgJiYgIXRoaXMuX19jb250cm9sQXR0cmlidXRlcykge1xuICAgICAgdGhpcy5fX2V2YWx1YXRlUGFyZW50Ll9fYWtpbGkuX191bmJpbmRCeU5vZGVzKFtdLnNsaWNlLmNhbGwodGhpcy5lbC5hdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX19wYXJlbnQpIHtcbiAgICAgIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX3NwbGljZUNoaWxkKHRoaXMuZWwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGNvbXBvbmVudCB3aXRoIGNoaWxkcmVuXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVzdHJveSgpIHtcbiAgICB0aGlzLl9fcmVtb3ZlQ2hpbGRyZW4oKTtcbiAgICB0aGlzLl9fcmVtb3ZlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIGNvbXBvbmVudCBodG1sXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZW1wdHkoKSB7XG4gICAgbGV0IG5vZGVzID0gW107XG4gICAgdGhpcy5fX3JlbW92ZUNoaWxkcmVuKCk7XG5cbiAgICBjb25zdCBmaW5kID0gKGNoaWxkcmVuKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcblxuICAgICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT0gMykge1xuICAgICAgICAgIG5vZGVzLnB1c2goY2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoaWxkLm5vZGVUeXBlID09IDEgJiYgIWNoaWxkLl9fYWtpbGkpIHtcbiAgICAgICAgICBmb3IgKGxldCBrID0gMCwgYXR0cnMgPSBjaGlsZC5hdHRyaWJ1dGVzLCBjID0gYXR0cnMubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICAgICAgICBub2Rlcy5wdXNoKGF0dHJzW2ldKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmaW5kKGNoaWxkLmNoaWxkTm9kZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZpbmQodGhpcy5lbC5jaGlsZE5vZGVzKTtcbiAgICB0aGlzLl9fdW5iaW5kQnlOb2Rlcyhub2Rlcyk7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcGFyZW50IGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0UGFyZW50KHNlbGVjdG9yID0gJycsIGZpbmRBbGwgPSBmYWxzZSwgbGV2ZWxzID0gbnVsbCkge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBsZXQgbGV2ZWwgPSAwO1xuXG4gICAgaWYgKHR5cGVvZiBsZXZlbHMgIT0gJ29iamVjdCcpIHtcbiAgICAgIGxldmVscyA9IFtsZXZlbHNdO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbmQgPSAocGFyZW50KSA9PiB7XG4gICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghbGV2ZWxzIHx8IGxldmVscy5pbmRleE9mKGxldmVsKSAhPSAtMSkge1xuICAgICAgICBpZiAoIXNlbGVjdG9yIHx8IHBhcmVudC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgaWYgKCFmaW5kQWxsKSB7XG4gICAgICAgICAgICBhcnIucHVzaChwYXJlbnQuX19ha2lsaSk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhcnIucHVzaChwYXJlbnQuX19ha2lsaSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV2ZWwrKztcbiAgICAgIGZpbmQocGFyZW50Ll9fYWtpbGkuX19wYXJlbnQpO1xuICAgIH07XG5cbiAgICBmaW5kKHRoaXMuX19wYXJlbnQpO1xuXG4gICAgcmV0dXJuIGZpbmRBbGw/IGFycjogKGFyclswXSB8fCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2hpbGQgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kQWxsPXRydWVdIC0gZ2V0IGFycmF5IGlmIHRydWVcbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudHxDb21wb25lbnRbXX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRDaGlsZHJlbihzZWxlY3RvciA9ICcnLCBmaW5kQWxsID0gdHJ1ZSwgbGV2ZWxzID0gbnVsbCkge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBsZXQgbGV2ZWwgPSAwO1xuXG4gICAgaWYgKHR5cGVvZiBsZXZlbHMgIT0gJ29iamVjdCcpIHtcbiAgICAgIGxldmVscyA9IFtsZXZlbHNdO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbmQgPSAoY2hpbGRyZW4pID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmICghbGV2ZWxzIHx8IGxldmVscy5pbmRleE9mKGxldmVsKSAhPSAtMSkge1xuICAgICAgICAgIGlmICghc2VsZWN0b3IgfHwgY2hpbGQuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgaWYgKCFmaW5kQWxsKSB7XG4gICAgICAgICAgICAgIGFyci5wdXNoKGNoaWxkLl9fYWtpbGkpO1xuXG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXJyLnB1c2goY2hpbGQuX19ha2lsaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldmVsKys7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGZpbmQoY2hpbGRyZW5baV0uX19ha2lsaS5fX2NoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmluZCh0aGlzLl9fY2hpbGRyZW4pO1xuXG4gICAgcmV0dXJuIGZpbmRBbGw/IGFycjogKGFyclswXSB8fCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbmVhcmVzdCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZpbmRBbGw9dHJ1ZV0gLSBnZXQgYXJyYXkgaWYgdHJ1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyaWdodD1mYWxzZV0gLSBmcm9tIHRoZSByaWdodCBzaWRlIGlmIHRydWVcbiAgICogQHJldHVybnMge0NvbXBvbmVudHxDb21wb25lbnRbXX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXROZWFyKHNlbGVjdG9yID0gJycsIGZpbmRBbGwgPSB0cnVlLCByaWdodCA9IGZhbHNlKSB7XG4gICAgaWYgKCF0aGlzLl9fcGFyZW50KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgbGV2ZWxFbGVtZW50cyA9IHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2NoaWxkcmVuLnNsaWNlKCk7XG4gICAgbGV0IGFyciA9IFtdO1xuXG4gICAgcmlnaHQgJiYgbGV2ZWxFbGVtZW50cy5yZXZlcnNlKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxldmVsRWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgZWwgPSBsZXZlbEVsZW1lbnRzW2ldO1xuXG4gICAgICBpZiAoZWwgPT09IHRoaXMuZWwpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmICghc2VsZWN0b3IgfHwgZWwuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBhcnIucHVzaChlbC5fX2FraWxpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhcnIucmV2ZXJzZSgpO1xuXG4gICAgaWYgKCFmaW5kQWxsKSB7XG4gICAgICByZXR1cm4gYXJyLmxlbmd0aD8gYXJyWzBdOiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbGluayB0byB0aGUgc3RvcmVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXXxmdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgc3RvcmUobmFtZSwgaGFuZGxlcikge1xuICAgIHJldHVybiB0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJz8gdGhpcy5fX3N0b3JlQnlGdW5jdGlvbiguLi5hcmd1bWVudHMpOiB0aGlzLl9fc3RvcmVCeUtleXMoLi4uYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBsaW5rIHdpdGggdGhlIGF0dHJpYnV0ZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfGZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBhdHRyKG5hbWUsIGhhbmRsZXIpIHtcbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbic/IHRoaXMuX19hdHRyQnlGdW5jdGlvbiguLi5hcmd1bWVudHMpOiB0aGlzLl9fYXR0ckJ5S2V5cyguLi5hcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgc3RvcmUgbGlua1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfGZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICB1bnN0b3JlKG5hbWUsIGhhbmRsZXIpIHtcbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbic/IHRoaXMuX191bnN0b3JlQnlGdW5jdGlvbiguLi5hcmd1bWVudHMpOiB0aGlzLl9fdW5zdG9yZUJ5S2V5cyguLi5hcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgYXR0cmlidXRlIGxpbmtcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXXxmdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgdW5hdHRyKG5hbWUsIGhhbmRsZXIpIHtcbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbic/IHRoaXMuX191bmF0dHJCeUZ1bmN0aW9uKC4uLmFyZ3VtZW50cyk6IHRoaXMuX191bmF0dHJCeUtleXMoLi4uYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgY29tcG9uZW50IG1hdGNoZXMgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IHNlbGVjdG9yXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgbWF0Y2hlcyhzZWxlY3Rvcikge1xuICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHNlbGVjdG9yKHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmVsLm1hdGNoZXMoc2VsZWN0b3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IHBhcmVudCBjb21wb25lbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIHBhcmVudChzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRQYXJlbnQoc2VsZWN0b3IsIGZhbHNlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBwYXJlbnQgY29tcG9uZW50cyBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBwYXJlbnRzKHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldFBhcmVudChzZWxlY3RvciwgdHJ1ZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBjaGlsZCBjb21wb25lbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIGNoaWxkKHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldENoaWxkcmVuKHNlbGVjdG9yLCBmYWxzZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY2hpbGQgY29tcG9uZW50cyBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBjaGlsZHJlbihzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRDaGlsZHJlbihzZWxlY3RvciwgdHJ1ZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY29tcG9uZW50cyBsZWZ0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgYmVmb3JlKHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIHRydWUsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY29tcG9uZW50cyByaWdodCBmcm9tIHRoZSBjdXJyZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGFmdGVyKHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIHRydWUsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IGNvbXBvbmVudCBsZWZ0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIHByZXYoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgZmFsc2UsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBjb21wb25lbnQgcmlnaHQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgbmV4dChzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCBmYWxzZSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGVsZW1lbnQgcGFyZW50XG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gcGFyZW50XG4gICAqL1xuICBhcHBlbmRUbyhwYXJlbnQpIHtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FuY2VsIGNvbXBvbmVudCBjb21waWxhdGlvblxuICAgKi9cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXBhbGUgdGhlIGNvbXBvbmVudCwgYnV0IGNhbmNlbCB0aGUgY29tcGlsYXRpb24gaW5zaWRlIG9mIGl0XG4gICAqL1xuICBwcmV2ZW50KCkge1xuICAgIHRoaXMuX19wcmV2ZW50ID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBlbGVtZW50IGh0bWxcbiAgICpcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBlbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2VtcHR5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGVsZW1lbnRcbiAgICpcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICByZW1vdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19kZXN0cm95LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjcmVhdGVkKCkge31cbiAgY29tcGlsZWQoKSB7fVxuICByZWNvbXBpbGVkKCkge31cbiAgcmVzb2x2ZWQoKSB7fVxuICByZW1vdmVkKCkge31cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50LmpzIiwiaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xuICBfX2NhY2hlID0ge307XG5cbiAgY29uc3RydWN0b3IoYmFzZVVybCwgZGVmYXVsdHMpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSBiYXNlVXJsPyAoYmFzZVVybC5yZXBsYWNlKC9cXC8kLywgJycpICsgJy8nKTogJyc7XG5cbiAgICB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgc3RhdHVzRXJyb3JzUGF0dGVybjogL14oW14yM10pfDQwNC8sXG4gICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAuLi4oZGVmYXVsdHMgfHwge30pXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIHJlcXVlc3Qgd2l0aCBhbnkgbWV0aG9kXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcXVlcnkob3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBvcHRpb25zID0gey4uLnRoaXMuZGVmYXVsdHMsIC4uLihvcHRpb25zIHx8IHt9KX07IFxuICAgICAgb3B0aW9ucy51cmwgPSB0aGlzLmJhc2VVcmw/IGAke3RoaXMuYmFzZVVybH0ke29wdGlvbnMudXJsLnJlcGxhY2UoL15cXC8vLCAnJyl9YDogb3B0aW9ucy51cmw7ICBcbiAgICAgIG9wdGlvbnMubWV0aG9kID0gb3B0aW9ucy5tZXRob2QgfHwgJ0dFVCc7XG4gICAgICBcbiAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsgICAgICBcbiAgICAgIGNvbnN0IGJlZm9yZSA9IHRoaXMudHJhbnNmb3JtQmVmb3JlKHhociwgb3B0aW9ucyk7XG4gICAgICB4aHIgPSBiZWZvcmUueGhyO1xuICAgICAgb3B0aW9ucyA9IGJlZm9yZS5vcHRpb25zO1xuICAgICAgKHR5cGVvZiBvcHRpb25zLm9uU3RhcnQgPT0gJ2Z1bmN0aW9uJykgJiYgb3B0aW9ucy5vblN0YXJ0KHhocik7ICBcbiAgICAgIG9wdGlvbnMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyB8fCB7fTtcbiAgICAgIFxuICAgICAgaWYgKG9wdGlvbnMuanNvbikge1xuICAgICAgICBvcHRpb25zLmpzb24gIT09IHRydWUgJiYgKG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuanNvbikpO1xuICAgICAgICBvcHRpb25zLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICBvcHRpb25zLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlIHx8ICdqc29uJztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG9wdGlvbnMuZm9ybSkge1xuICAgICAgICBvcHRpb25zLmJvZHkgPSB0aGlzLmNyZWF0ZUZvcm1EYXRhKG9wdGlvbnMuZm9ybSk7XG4gICAgICAgIG9wdGlvbnMuaGVhZGVyc1snY29udGVudC10eXBlJ10gPSAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnBhcmFtcykge1xuICAgICAgICBsZXQgc3RyID0gdGhpcy5wYXJhbXNUb1F1ZXJ5KG9wdGlvbnMucGFyYW1zKTtcbiAgICAgICAgc3RyICYmIChvcHRpb25zLnVybCArPSBcIj9cIiArIHN0cik7XG4gICAgICB9XG4gICAgICAgICAgIFxuICAgICAgbGV0IGhhc2ggPSBudWxsO1xuICAgICAgbGV0IGNhY2hlID0gdHlwZW9mIG9wdGlvbnMuY2FjaGUgPT0gJ2Z1bmN0aW9uJz8gb3B0aW9ucy5jYWNoZShvcHRpb25zKTogb3B0aW9ucy5jYWNoZTtcblxuICAgICAgaWYob3B0aW9ucy5tZXRob2QudG9VcHBlckNhc2UoKSA9PSAnR0VUJyAmJiAoIW9wdGlvbnMuYm9keSB8fCB0eXBlb2Ygb3B0aW9ucy5ib2R5ID09ICdzdHJpbmcnKSkge1xuICAgICAgICBoYXNoID0gdGhpcy5jcmVhdGVDYWNoZUhhc2goeyBcbiAgICAgICAgICB1cmw6IG9wdGlvbnMudXJsLCBcbiAgICAgICAgICBtZXRob2Q6IG9wdGlvbnMubWV0aG9kLFxuICAgICAgICAgIHVzZXI6IG9wdGlvbnMudXNlciwgXG4gICAgICAgICAgcGFzc3dvcmQ6IG9wdGlvbnMucGFzc3dvcmQsIFxuICAgICAgICAgIGJvZHk6IG9wdGlvbnMuYm9keSBcbiAgICAgICAgfSk7ICAgICAgICBcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYoY2FjaGUgJiYgaGFzaCkgeyAgICAgICAgXG4gICAgICAgIGxldCBfY2FjaGUgPSB0aGlzLmdldENhY2hlKGhhc2gpO1xuICAgICAgICBsZXQgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgaWYoX2NhY2hlICYmIG5vdyAtIF9jYWNoZS5jcmVhdGVkQXQgPD0gY2FjaGUpIHtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZShfY2FjaGUuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihfY2FjaGUpIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUNhY2hlKGhhc2gpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCBvcHRpb25zLnVybCwgdHJ1ZSwgb3B0aW9ucy51c2VyLCBvcHRpb25zLnBhc3N3b3JkKTtcblxuICAgICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ3RpbWVvdXQnKSkge1xuICAgICAgICB4aHIudGltZW91dCA9IG9wdGlvbnMudGltZW91dDtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMucmVzcG9uc2VUeXBlKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSBvcHRpb25zLnJlc3BvbnNlVHlwZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSBvcHRpb25zLndpdGhDcmVkZW50aWFscztcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgayBpbiBvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgaWYgKCFvcHRpb25zLmhlYWRlcnMuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGssIG9wdGlvbnMuaGVhZGVyc1trXSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5vblByb2dyZXNzID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgeGhyLm9ucHJvZ3Jlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9wdGlvbnMub25Qcm9ncmVzcyh4aHIpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSB0aGlzLnRyYW5zZm9ybUFmdGVyKHhocik7XG5cbiAgICAgICAgaWYgKCh4aHIuc3RhdHVzICsgJycpLm1hdGNoKG9wdGlvbnMuc3RhdHVzRXJyb3JzUGF0dGVybikpIHtcbiAgICAgICAgICBsZXQgZXJyID0gbmV3IEVycm9yKGBSZXF1ZXN0IHRvIFwiJHtvcHRpb25zLnVybH1cIiByZXR1cm5zIGZhaWx1cmUgc3RhdHVzIGNvZGUgJHt4aHIuc3RhdHVzfWApO1xuICAgICAgICAgIGVyci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgfSBcblxuICAgICAgICBjYWNoZSAmJiBoYXNoICYmIHRoaXMuY3JlYXRlQ2FjaGUoaGFzaCwgcmVzcG9uc2UpOyAgICAgICAgXG4gICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9udGltZW91dCA9ICgpID0+IHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgUmVxdWVzdCB0byBcIiR7b3B0aW9ucy51cmx9XCIgdGltZWQgb3V0YCkpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9uZXJyb3IgPSAoZXJyKSA9PiB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfTtcblxuICAgICAgeGhyLnNlbmQob3B0aW9ucy5ib2R5KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2FjaGVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICBnZXRDYWNoZShoYXNoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19jYWNoZVtoYXNoXSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBjYWNoZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhhc2hcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICovXG4gIGNyZWF0ZUNhY2hlKGhhc2gsIGRhdGEpIHtcbiAgICB0aGlzLl9fY2FjaGVbaGFzaF0gPSB7IGRhdGEsIGNyZWF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKCkgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgY2FjaGVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXG4gICAqL1xuICByZW1vdmVDYWNoZShoYXNoKSB7XG4gICAgZGVsZXRlIHRoaXMuX19jYWNoZVtoYXNoXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBoYXNoIHRvIHNhdmUgaW4gdGhlIGNhY2hlXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgY3JlYXRlQ2FjaGVIYXNoKGRhdGEpIHtcbiAgICBsZXQgaGFzaCA9IDA7XG4gICAgbGV0IHN0ciA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0ICBjaGFyID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIGNoYXI7XG4gICAgICAgIGhhc2ggPSBoYXNoICYgaGFzaDsgXG4gICAgfVxuXG4gICAgcmV0dXJuIGhhc2ggKyAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IG9iamVjdCB0byBxdWVyeSBzdHJpbmdcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgcGFyYW1zVG9RdWVyeShvYmopIHtcbiAgICBsZXQgc2VwID0gJyYnO1xuICAgIGxldCBlcSA9ICc9JztcblxuICAgIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubWFwKChrKSA9PiB7XG4gICAgICBsZXQga3MgPSBlbmNvZGVVUklDb21wb25lbnQoayk7XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9ialtrXSkpIHtcbiAgICAgICAga3MgPSBlbmNvZGVVUklDb21wb25lbnQoayk7XG5cbiAgICAgICAgcmV0dXJuIG9ialtrXS5tYXAoKHYsIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4ga3MgKyBgWyR7aX1dYCArIGVxICsgZW5jb2RlVVJJQ29tcG9uZW50KHYpO1xuICAgICAgICB9KS5qb2luKHNlcCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChvYmpba10gJiYgdHlwZW9mIG9ialtrXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbGV0IG9wdCA9IFtdO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKG9ialtrXSkubWFwKChrZXkpID0+IHtcbiAgICAgICAgICBvcHQucHVzaChrcyArIGBbJHtrZXl9XWAgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba11ba2V5XSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gb3B0LmpvaW4oc2VwKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4ga3MgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba10pO1xuICAgICAgfVxuICAgIH0pLmpvaW4oc2VwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHF1ZXJ5IHN0cmluZyB0byBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgcGFyYW1zRnJvbVF1ZXJ5KHN0cikge1xuICAgIGxldCBxdWVyeSA9IHt9O1xuICAgIGxldCBhbXBzID0gc3RyLnNwbGl0KCcmJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGFtcHMubGVuZ3RoOyBpIDxsOyBpKyspIHtcbiAgICAgIGxldCBlcXMgPSAgYW1wc1tpXS5zcGxpdCgnPScpO1xuICAgICAgbGV0IGtleSA9IGRlY29kZVVSSUNvbXBvbmVudChlcXNbMF0pO1xuICAgICAgbGV0IHZhbCA9IGRlY29kZVVSSUNvbXBvbmVudChlcXNbMV0pO1xuXG4gICAgICBpZiAoIWtleSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgICAgcXVlcnlba2V5XS5wdXNoKHZhbCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChxdWVyeVtrZXldKSB7XG4gICAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSwgdmFsXTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBxdWVyeVtrZXldID0gdmFsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbXVsdGlwYXJ0IGZvcm0gZGF0YSBmcm9tIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEBwYXJhbSB7Rm9ybURhdGF9IFtkYXRhXVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25hbWVzcGFjZV0gICAqXG4gICAqIEByZXR1cm5zIHtGb3JtRGF0YX1cbiAgICovXG4gIGNyZWF0ZUZvcm1EYXRhKG9iaiwgZGF0YSA9IG51bGwsIG5hbWVzcGFjZSA9ICcnKSB7XG4gICAgbGV0IGZkID0gZGF0YSB8fCBuZXcgRm9ybURhdGEoKTtcblxuICAgIGZvciAobGV0IGsgaW4gb2JqKSB7XG4gICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGspICYmIG9ialtrXSkge1xuICAgICAgICBsZXQga2V5ID0gbmFtZXNwYWNlPyBuYW1lc3BhY2UgKyAnWycgKyBrICsgJ10nOiBrO1xuXG4gICAgICAgIGlmIChvYmpba10gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgZmQuYXBwZW5kKGtleSwgb2JqW2tdLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3Qob2JqW2tdKSkge1xuICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybURhdGEob2JqW2tdLCBmZCwga2V5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBmZC5hcHBlbmQoa2V5LCBvYmpba10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZkO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBkYXRhIGJlZm9yZSBhIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtYTUxIdHRwUmVxdWVzdH0geGhyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICB0cmFuc2Zvcm1CZWZvcmUoeGhyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHsgeGhyLCBvcHRpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gZGF0YSBhZnRlciBhIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtYTUxIdHRwUmVxdWVzdH0geGhyXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICB0cmFuc2Zvcm1BZnRlcih4aHIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeGhyOiB4aHIsXG4gICAgICBkYXRhOiB4aHIucmVzcG9uc2UsXG4gICAgICBzdGF0dXM6IHhoci5zdGF0dXNcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIEdFVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBnZXQodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdHRVQnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgREVMRVRFIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGRlbGV0ZSh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ0RFTEVURSc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBQT1NUIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHBvc3QodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQT1NUJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIFBVVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBwdXQodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQVVQnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgUEFUQ0ggcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcGF0Y2godXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQQVRDSCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoKTtcblxuLyoqXG4gKiBTZXQgcm91dGVyJ3MgZGVmYXVsdCB2YXJpYWJsZXNcbiAqL1xucmVxdWVzdC5zZXREZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fX2luc3RhbmNlcyA9IHt9O1xuICB0aGlzLl9fY2FjaGUgPSB7fTtcbn1cblxuLyoqXG4gKiBBZGQgbmV3IHJlcXVlc3QgaW5zdGFuY2UgdG8gdGhlIG1haW4gc2VydmljZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1JlcXVlc3R9IGluc3RhbmNlXG4gKi9cbnJlcXVlc3QuYWRkSW5zdGFuY2UgPSBmdW5jdGlvbihuYW1lLCBpbnN0YW5jZSkge1xuICB0aGlzLl9faW5zdGFuY2VzW25hbWVdID0gaW5zdGFuY2U7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnJlcXVlc3QucmVtb3ZlSW5zdGFuY2UgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLl9faW5zdGFuY2VzW25hbWVdO1xufTtcblxuLyoqXG4gKiBEZWluaXQgcm91dGVyXG4gKi9cbnJlcXVlc3QuZGVpbml0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2V0RGVmYXVsdHMoKTtcbn07XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVlc3QsICd1c2UnLCB7XG4gIGdldDogKCkgPT4ge1xuICAgIHJldHVybiByZXF1ZXN0Ll9faW5zdGFuY2VzO1xuICB9XG59KTtcblxucmVxdWVzdC5SZXF1ZXN0ID0gUmVxdWVzdDtcbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3Q7XG5yZXF1ZXN0LnNldERlZmF1bHRzKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL3JlcXVlc3QuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnZhbHVlS2V5ID0gJ3ZhbHVlJztcbiAgICB0aGlzLmRlYm91bmNlSW50ZXJ2YWwgPSA1MDA7XG4gICAgdGhpcy5kZWJvdW5jZVRpbWVvdXQgPSBudWxsO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICBpZih0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnb24tZGVib3VuY2UnKSkge1xuICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHsgICAgICAgIFxuICAgICAgICB0aGlzLmRlYm91bmNlVGltZW91dCAmJiBjbGVhclRpbWVvdXQodGhpcy5kZWJvdW5jZVRpbWVvdXQpO1xuICAgICAgICB0aGlzLmRlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuYXR0cnMub25EZWJvdW5jZS50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgICAgICB9LCB0aGlzLmRlYm91bmNlSW50ZXJ2YWwpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRyKCdmb2N1cycsIHRoaXMuc2V0Rm9jdXMpO1xuICAgIHRoaXMuYXR0cigndmFsdWUnLCB0aGlzLnNldFZhbHVlKTtcbiAgICB0aGlzLmF0dHIoJ2RlYm91bmNlJywgdGhpcy5zZXREZWJvdW5jZSk7XG4gIH1cblxuICByZW1vdmVkKCkge1xuICAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ICYmIGNsZWFyVGltZW91dCh0aGlzLmRlYm91bmNlVGltZW91dCk7XG4gIH1cblxuICBzZXREZWJvdW5jZShpbnRlcnZhbCkge1xuICAgIHRoaXMuZGVib3VuY2VJbnRlcnZhbCA9ICtpbnRlcnZhbDtcbiAgfVxuXG4gIHNldEZvY3VzKHZhbHVlKSB7XG4gICAgdmFsdWU/IHRoaXMuc2V0RWxlbWVudEZvY3VzKCk6IHRoaXMuc2V0RWxlbWVudEJsdXIoKTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgKHRoaXMuZWxbdGhpcy52YWx1ZUtleV0gIT09IHZhbHVlKSAmJiAodGhpcy5lbFt0aGlzLnZhbHVlS2V5XSA9IHZhbHVlID09PSAwPyAnMCc6ICh2YWx1ZSB8fCAnJykpO1xuICB9XG5cbiAgc2V0RWxlbWVudEZvY3VzKCkge1xuICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgfVxuXG4gIHNldEVsZW1lbnRCbHVyKCkge1xuICAgIHRoaXMuZWwuYmx1cigpO1xuICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RleHQuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW2luXSc7XG4gIHN0YXRpYyBzYXZlQXR0cmlidXRlUHJveHlJbiA9IHRydWU7ICBcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnZm9yJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdvbCcsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndWwnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RoZWFkJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0Ym9keScsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGZvb3QnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RyJywgdGhpcy5Mb29wKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2xvb3AnLCB0aGlzLkxvb3ApO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5fX2l0ZXJhdG9yID0gbnVsbDtcbiAgICB0aGlzLl9fa2V5ID0gbnVsbDtcbiAgICB0aGlzLl9fdmFsdWUgPSBudWxsO1xuICAgIHRoaXMuX19pbmRleCA9IG51bGw7XG4gICAgdGhpcy5fX2NvbXBhcmlzb25WYWx1ZSA9IG51bGw7XG4gICAgdGhpcy5pdGVyYXRvcnMgPSBbXTtcbiAgICB0aGlzLml0ZXJhdG9yUmVmID0gbnVsbDtcbiAgICB0aGlzLml0ZXJhdG9yT3V0ZXJIVE1MID0gbnVsbDtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5jcmVhdGVJdGVyYXRvcigpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRyKCdpbicsIHRoaXMuZHJhdyk7XG4gIH1cblxuICBjcmVhdGVJdGVyYXRvcigpIHtcbiAgICBsZXQgZWw7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLmVsLmNoaWxkcmVuW2ldO1xuXG4gICAgICBpZiAoY2hpbGQuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKSA9PSAnbG9vcCcpIHtcbiAgICAgICAgZWwgPSBjaGlsZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGVsID0gY2hpbGQ7XG4gICAgfVxuXG4gICAgaWYgKCFlbCkge1xuICAgICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsb29wJyk7ICAgICAgXG4gICAgICBlbC5pbm5lckhUTUwgPSB0aGlzLmVsLmlubmVySFRNTDsgXG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnOyAgICAgXG4gICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGVsKTtcbiAgICB9XG5cbiAgICBsZXQgY29tcG9uZW50TmFtZSA9IGVsLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50Jyk7XG5cbiAgICBpZiAoY29tcG9uZW50TmFtZSAhPSAnbG9vcCcpIHtcbiAgICAgIGxldCBjb21wb25lbnQgPSBBa2lsaS5jb21wb25lbnQoY29tcG9uZW50TmFtZSB8fCBlbC50YWdOYW1lKTtcblxuICAgICAgaWYgKCFjb21wb25lbnQpIHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdjb21wb25lbnQnLCAnbG9vcCcpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIShjb21wb25lbnQucHJvdG90eXBlIGluc3RhbmNlb2YgRm9yKSkge1xuICAgICAgICBsZXQgbWFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xvb3AnKTtcbiAgICAgICAgbWFzay5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIGVsID0gbWFzaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmh0bWwgPSBlbC5pbm5lckhUTUw7XG4gICAgdGhpcy5pdGVyYXRvclJlZiA9IGVsLm5leHRTaWJsaW5nO1xuICAgIHRoaXMuaXRlcmF0b3JPdXRlckhUTUwgPSBlbC5vdXRlckhUTUw7XG4gICAgZWwucmVtb3ZlKCk7XG4gIH1cblxuICBjcmVhdGVJdGVyYXRvckVsZW1lbnQoKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICBlbC5pbm5lckhUTUwgPSB0aGlzLml0ZXJhdG9yT3V0ZXJIVE1MO1xuICAgIGVsID0gZWwuY29udGVudC5maXJzdENoaWxkO1xuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIGxvb3Aoa2V5LCB2YWx1ZSwgaW5kZXgsIGRhdGFDaGFuZ2VkKSB7XG4gICAgdGhpcy5fX2luZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5fX2tleSA9IGtleTtcbiAgICB0aGlzLl9fdmFsdWUgPSB2YWx1ZTsgICAgXG4gICAgdGhpcy5fX2NvbXBhcmlzb25WYWx1ZSA9IHV0aWxzLmNvcHkodmFsdWUpO1xuXG4gICAgaWYodGhpcy5pdGVyYXRvcnMubGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIGxldCBpdGVyYXRvciA9IHRoaXMuaXRlcmF0b3JzW2luZGV4XTtcbiAgICAgIGxldCBjQ29weSA9IGl0ZXJhdG9yLmNvbXBhcnNpb24uY29weTtcbiAgICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgaWYgKHRoaXMuX19pbmRleCAhPT0gaXRlcmF0b3IuaW5kZXgpIHtcbiAgICAgICAgaXRlcmF0b3Iuc2V0SW5kZXgoKTtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaXRlcmF0b3Iuc2V0SW5kZXgodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9fa2V5ICE9PSBpdGVyYXRvci5rZXkpIHtcbiAgICAgICAgaXRlcmF0b3Iuc2V0S2V5KCk7XG4gICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldEtleSh0cnVlKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKCF1dGlscy5jb21wYXJlKGNDb3B5LCB0aGlzLl9fY29tcGFyaXNvblZhbHVlLCB7IGlnbm9yZVVuZGVmaW5lZDogdHJ1ZSB9KSkge1xuICAgICAgICBpdGVyYXRvci5zZXRWYWx1ZSgpO1xuICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpdGVyYXRvci5zZXRWYWx1ZSh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgKGNoYW5nZWQgfHwgZGF0YUNoYW5nZWQpICYmIEFraWxpLmNvbXBpbGUoaXRlcmF0b3IuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgIH1cbiAgICBcbiAgICBsZXQgZWwgPSB0aGlzLmNyZWF0ZUl0ZXJhdG9yRWxlbWVudCgpO1xuICAgIGVsLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcbiAgICB0aGlzLmVsLmluc2VydEJlZm9yZShlbCwgdGhpcy5pdGVyYXRvclJlZik7XG4gICAgQWtpbGkuY29tcGlsZShlbCk7XG4gICAgdGhpcy5pdGVyYXRvcnMucHVzaChlbC5fX2FraWxpKTtcbiAgICByZXR1cm4gZWwuX19ha2lsaTtcbiAgfVxuXG4gIGRyYXcoZGF0YSkge1xuICAgIGlmICh0eXBlb2YgZGF0YSAhPSAnb2JqZWN0JyB8fCBkYXRhID09PSBudWxsKSB7XG4gICAgICBpZiAoQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLndhcm4oYFwiRm9yXCIgY29tcG9uZW50IFwiaW5cIiBhdHRyaWJ1dGUgdmFsdWUgdHlwZSBtdXN0IGJlIGFuIG9iamVjdC9hcnJheWApOyAgICAgICAgXG4gICAgICB9XG5cbiAgICAgIGRhdGEgPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgZGF0YUNoYW5nZWQgPSB1dGlscy5jb21wYXJlKHRoaXMuZGF0YSwgZGF0YSk7XG4gICAgdGhpcy5kYXRhID0gZGF0YTsgICBcbiAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpO1xuICAgIGxldCBpdGVyYXRvcnMgPSBbXTtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIFxuICAgIGZvciAobGV0IGwgPSBrZXlzLmxlbmd0aDsgaW5kZXggPCBsOyBpbmRleCsrKSB7XG4gICAgICBsZXQga2V5ID0ga2V5c1tpbmRleF07XG4gICAgICBsZXQgaXRlcmF0b3IgPSB0aGlzLmxvb3Aoa2V5LCBkYXRhW2tleV0sIGluZGV4LCBkYXRhQ2hhbmdlZCk7XG4gICAgICBpdGVyYXRvcnMucHVzaChpdGVyYXRvcik7XG4gICAgICBpdGVyYXRvci5pdGVyYXRlKGluZGV4KTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gaW5kZXgsIGwgPSB0aGlzLml0ZXJhdG9ycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBpdGVyYXRvciA9IHRoaXMuaXRlcmF0b3JzW2ldO1xuICAgICAgaXRlcmF0b3IuX19kZXN0cm95KCk7XG4gICAgICB0aGlzLml0ZXJhdG9ycy5zcGxpY2UoaSwgMSk7XG4gICAgICBsLS07XG4gICAgICBpLS07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb29wIGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmZvciA9IG51bGw7XG4gICAgdGhpcy5odG1sID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgdGhpcy5pc0ZvciA9IHRoaXMuZWwuaGFzQXR0cmlidXRlKCdpbicpO1xuXG4gICAgaWYgKCF0aGlzLmlzRm9yICYmICEodGhpcy5lbC5wYXJlbnROb2RlLl9fYWtpbGkgaW5zdGFuY2VvZiBGb3IpKSB7XG4gICAgICB0aGlzLmNhbmNlbCgpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9faXRlcmF0b3IgPSB0aGlzO1xuICAgIHRoaXMuZm9yID0gdGhpcy5fX3BhcmVudC5fX2FraWxpO1xuICAgIHRoaXMuc2V0SW5kZXgodHJ1ZSk7XG4gICAgdGhpcy5zZXRLZXkodHJ1ZSk7XG4gICAgdGhpcy5zZXRWYWx1ZSh0cnVlKTtcblxuICAgIGlmKHRoaXMuaXNGb3IpIHtcbiAgICAgIHJldHVybiBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgaWYodGhpcy5pc0Zvcikge1xuICAgICAgcmV0dXJuIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgc2V0SW5kZXgodGFyZ2V0KSB7XG4gICAgdGhpcy5pbmRleCA9IHRoaXMuZm9yLl9faW5kZXg7XG4gICAgdGhpcy5zY29wZS5fX3NldCgnbG9vcEluZGV4JywgdGhpcy5pbmRleCwgZmFsc2UsIHRhcmdldCk7XG4gIH1cblxuICBzZXRLZXkodGFyZ2V0KSB7XG4gICAgdGhpcy5rZXkgPSB0aGlzLmZvci5fX2tleTtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wS2V5JywgdGhpcy5rZXksIGZhbHNlLCB0YXJnZXQpO1xuICB9XG5cbiAgc2V0VmFsdWUodGFyZ2V0KSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuZm9yLl9fdmFsdWU7XG4gICAgdGhpcy5zY29wZS5fX3NldCgnbG9vcFZhbHVlJywgdGhpcy52YWx1ZSwgdHJ1ZSwgdGFyZ2V0KTtcblxuICAgIHRoaXMuY29tcGFyc2lvbiA9IHtcbiAgICAgIGNvcHk6IHRoaXMuZm9yLl9fY29tcGFyaXNvblZhbHVlLFxuICAgICAgdmFsdWU6IHRoaXMuZm9yLl9fdmFsdWVcbiAgICB9O1xuICB9XG5cbiAgaXRlcmF0ZSgpIHt9XG59XG5cbkZvci5Mb29wID0gTG9vcDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9mb3IuanMiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5cbi8qKlxuICogU2NvcGUgY2xhc3MuXG4gKlxuICogQWxsIHByb3BlcnRpZXMgc3RhcnRpbmcgd2l0aCBfXyB3aWxsIG5vdCBiZSB3YXRjaGluZy5cbiAqIFlvdSBjYW4gdXNlIHRoZW0gZm9yIGludGVybmFsIG1hbmlwdWxhdGlvbnMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3BlIHtcbiAgc3RhdGljIG5lc3RlZFdhdGNoaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVsLCBjb21wb25lbnQpIHtcbiAgICB0aGlzLl9fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fX2VsID0gZWw7XG4gICAgdGhpcy5fX2NvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ3Njb3BlJywgbmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGEgc2NvcGUgdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzdHJpY3Q9ZmFsc2VdIC0gd2l0aG91dCBvYmplY3QgY29weWluZ1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldChrZXlzLCB2YWx1ZSwgc3RyaWN0ID0gZmFsc2UsIHRhcmdldCA9IGZhbHNlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cbiAgICBcbiAgICBBa2lsaS51bmlzb2xhdGUoKCkgPT4ge1xuICAgICAgc3RyaWN0ICYmICh0aGlzLl9fY29tcG9uZW50Ll9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyA9IHRydWUpO1xuICAgICAgdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGFyZ2V0PyB0aGlzLl9fdGFyZ2V0OiB0aGlzLCAobGFzdCwgdmFsKSA9PiB7XG4gICAgICAgIGlmICghbGFzdCkge1xuICAgICAgICAgIHJldHVybiB2YWwgfHwge307XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHN0cmljdCAmJiAodGhpcy5fX2NvbXBvbmVudC5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgPSBmYWxzZSk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NvcGUuanMiLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVsLCBjb21wb25lbnQpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICB0aGlzLmVsQ29tcG9uZW50ID0gdGhpcy5lbC5fX2FraWxpIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciB0aGUgZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIHsqfSBkYXRhIC0gc2VuZGluZyBkYXRhLiBXaWxsIGJlIGluIHRoZSBldmVudC5kZXRhaWxcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZV1cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICB0cmlnZ2VyKGRhdGEsIG9wdGlvbnMgPSB7fSwgZm9yY2UgPSBmYWxzZSkge1xuICAgIGlmIChmb3JjZSB8fCAhdGhpcy5pbkV2YWx1YXRpbmcoKSkge1xuICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCh0aGlzLm5hbWUsIHRoaXMucHJlcGFyZU9wdGlvbnMoeyBkZXRhaWw6IGRhdGEsICAuLi5vcHRpb25zIH0pKSk7XG4gICAgfSAgIFxuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoIHRoZSBldmVudFxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBfRXZlbnQgLSBjbGFzcyBvZiB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZV1cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBkaXNwYXRjaChfRXZlbnQsIG9wdGlvbnMgPSB7fSwgZm9yY2UgPSBmYWxzZSkge1xuICAgIGlmIChmb3JjZSB8fCAhdGhpcy5pbkV2YWx1YXRpbmcoKSkge1xuICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnQodGhpcy5uYW1lLCB0aGlzLnByZXBhcmVPcHRpb25zKG9wdGlvbnMpKSk7XG4gICAgfVxuICB9XG5cbiAgcHJlcGFyZU9wdGlvbnMob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7IGJ1YmJsZXM6IHRydWUsIC4uLm9wdGlvbnMgfTsgIFxuICAgIHRoaXMuZWxDb21wb25lbnQgJiYgIXRoaXMuZWxDb21wb25lbnQuX19zYXZlQXR0cmlidXRlUHJveHlPdXQgJiYgKG9wdGlvbnMuZGV0YWlsID0gdXRpbHMuY29weShvcHRpb25zLmRldGFpbCkpO1xuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGV2ZW50IGNhbGxiYWNrIGRvZXNuJ3QgcnVuIHJlY3Vyc2l2ZVxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGluRXZhbHVhdGluZygpIHtcbiAgICBsZXQgZGF0YSA9IHRoaXMuY29tcG9uZW50Ll9fZXZhbHVhdGluZ0V2ZW50O1xuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGEuZWwgPT09IHRoaXMuZWwgJiYgZGF0YS5ldmVudC50eXBlID09PSB0aGlzLm5hbWUgJiYgZGF0YS5jb21wb25lbnQgPT09IHRoaXMuY29tcG9uZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgdGhlIGZ1bmN0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gICAqL1xuICBiaW5kKGZuKSB7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKHRoaXMubmFtZSwgdGhpcy5mbiA9IGZuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgdGhlIGZ1bmN0aW9uXG4gICAqL1xuICB1bmJpbmQoKSB7XG4gICAgdGhpcy5mbiAmJiB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5uYW1lLCB0aGlzLmZuKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ldmVudC1lbWl0dGVyLmpzIiwiaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbmNvbnN0IHN0b3JlID0gbmV3IFByb3h5KHt9LCB7XG4gIGdldDogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgaWYgKGtleSA9PSBcIl9fdGFyZ2V0XCIpIHtcbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICB9LFxuICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICBpZih1dGlscy5jb21wYXJlKHRhcmdldFtrZXldLCB2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBcbiAgICB2YWx1ZSA9IHV0aWxzLmNvcHkodmFsdWUpO1xuICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgQWtpbGkucm9vdCAmJiBBa2lsaS5yb290Ll9fc3RvcmVUcmlnZ2VyQnlOYW1lKGtleSwgdmFsdWUpOyAgICBcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgZGVsZXRlUHJvcGVydHk6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgIEFraWxpLnJvb3QgJiYgQWtpbGkucm9vdC5fX3N0b3JlVHJpZ2dlckJ5TmFtZShrZXksIHVuZGVmaW5lZCk7XG4gICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL3N0b3JlLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdyb3V0ZScsIHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1RyYW5zaXRpb259IHRyYW5zaXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBzZXRUcmFuc2l0aW9uKHRyYW5zaXRpb24pIHtcbiAgICBsZXQgc3RhdGUgPSB0cmFuc2l0aW9uLnBhdGguc3RhdGU7XG4gICAgbGV0IHBhcmFtcyA9IHRyYW5zaXRpb24ucGF0aC5wYXJhbXM7XG4gICAgbGV0IHVybCA9IHRyYW5zaXRpb24udXJsO1xuICAgIGxldCBxdWVyeSA9IHRyYW5zaXRpb24ucXVlcnk7XG5cbiAgICBjb25zdCBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24gPSAocGF0aCkgPT4ge1xuICAgICAgaWYgKHBhdGgucGFyZW50KSB7XG4gICAgICAgIGlmIChwYXRoLnBhcmVudC5jb21wb25lbnQpIHtcbiAgICAgICAgICByZXR1cm4gcGF0aC5wYXJlbnQuY29tcG9uZW50Ll9fc2NvcGUuX190cmFuc2l0aW9uLnBhdGg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uKHBhdGgucGFyZW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcGlsZSA9IChodG1sKSA9PiB7IFxuICAgICAgdGhpcy5lbXB0eSgpOyAgXG4gICAgICBsZXQgbmFtZSA9ICdjb21wb25lbnQnO1xuXG4gICAgICBpZihzdGF0ZS5jb21wb25lbnQpIHtcbiAgICAgICAgbGV0IGV4aXN0cyA9IGZhbHNlO1xuICAgIFxuICAgICAgICBmb3IobGV0IGtleSBpbiBBa2lsaS5fX2NvbXBvbmVudHMpIHtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBBa2lsaS5fX2NvbXBvbmVudHNba2V5XTtcbiAgICBcbiAgICAgICAgICBpZihjb21wb25lbnQgPT09IHN0YXRlLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgbmFtZSA9IGtleTsgICAgICAgICAgICBcbiAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaWYoIWV4aXN0cykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIFwiJHtzdGF0ZS5uYW1lfVwiIGhhcyBubyBkZWZpbmVkIGNvbXBvbmVudGApXG4gICAgICAgIH0gXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gYDwkeyBuYW1lIH0+JHsgaHRtbCB9PC8keyBuYW1lIH0+YDtcbiAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX19zY29wZS5fX3RyYW5zaXRpb24gPSB7XG4gICAgICBwYXRoOiB7XG4gICAgICAgIHN0YXRlOiBzdGF0ZS5uYW1lLFxuICAgICAgICBkYXRhOiB0cmFuc2l0aW9uLnBhdGguZGF0YSxcbiAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgIHBhcmVudDogZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uKHRyYW5zaXRpb24ucGF0aClcbiAgICAgIH0sXG4gICAgICBwYXJhbXM6IHRyYW5zaXRpb24ucGFyYW1zLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBxdWVyeTogcXVlcnlcbiAgICB9O1xuXG4gICAgaWYgKCF0cmFuc2l0aW9uLnBhdGgubG9hZGVkKSB7XG4gICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICBpZiAoc3RhdGUudGVtcGxhdGUpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnRlbXBsYXRlO1xuICAgICAgfVxuICBcbiAgICAgIGlmIChzdGF0ZS50ZW1wbGF0ZVVybCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdC5nZXQoc3RhdGUudGVtcGxhdGVVcmwpLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcbiAgICAgIH1cbiAgICB9KS50aGVuKGh0bWwgPT4gY29tcGlsZShodG1sKSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9yb3V0ZS5qcyIsImltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9yZXF1ZXN0LmpzJztcbmltcG9ydCBSb3V0ZSBmcm9tICcuLi9jb21wb25lbnRzL3JvdXRlLmpzJztcblxuZXhwb3J0IGNsYXNzIFRyYW5zaXRpb24ge1xuICBjb25zdHJ1Y3Rvcih1cmwsIHF1ZXJ5LCBoYXNoID0gJycsIHByZXZpb3VzID0gbnVsbCkge1xuICAgIHRoaXMudXJsID0gdXJsO1xuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICB0aGlzLmhhc2ggPSBoYXNoO1xuICAgIHRoaXMucHJldmlvdXMgPSBwcmV2aW91cztcbiAgICB0aGlzLnBhdGggPSBudWxsO1xuICAgIHRoaXMucm91dGVzID0gW107XG4gICAgdGhpcy5zdGF0ZXMgPSB7fTtcbiAgICB0aGlzLnBhcmFtcyA9IHt9O1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHJlZGlyZWN0KCkge1xuICAgIHRoaXMuY2FuY2VsKCk7ICAgIFxuICAgIHJvdXRlci5zdGF0ZS5hcHBseShyb3V0ZXIsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBzZXRQYXRoKHBhdGgpIHtcbiAgICBwYXRoLnBhcmVudCA9IHRoaXMucGF0aCB8fCBudWxsO1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgdGhpcy5yb3V0ZXMucHVzaChwYXRoKTtcbiAgICB0aGlzLnN0YXRlc1twYXRoLnN0YXRlLm5hbWVdID0gcGF0aDtcbiAgICB0aGlzLnBhcmFtcyA9ICFwYXRoLnBhcmVudD8gcGF0aC5wYXJhbXM6IHsuLi5wYXRoLnBhcmVudC5wYXJhbXMsIC4uLnBhdGgucGFyYW1zfTtcbiAgfVxuXG4gIGdldFJvdXRlKHN0YXRlKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnJvdXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByb3V0ZSA9IHRoaXMucm91dGVzW2ldO1xuXG4gICAgICBpZiAocm91dGUuc3RhdGUgPT09IHN0YXRlKSB7XG4gICAgICAgIHJldHVybiByb3V0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGhhc1N0YXRlKHN0YXRlKSB7XG4gICAgcmV0dXJuICEhdGhpcy5zdGF0ZXNbc3RhdGUubmFtZV07XG4gIH1cblxuICBjYW5jZWwoKSB7XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IHRydWU7XG4gIH1cbn1cblxuY29uc3Qgcm91dGVyID0ge307XG5cbi8qKlxuICogU2V0IHJvdXRlcidzIGRlZmF1bHQgdmFyaWFibGVzXG4gKi9cbnJvdXRlci5zZXREZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5iYXNlVXJsID0gXCIvXCI7XG4gIHRoaXMuc3RhdGVzID0gW107XG4gIHRoaXMuaGFzaE1vZGUgPSB0cnVlO1xuICB0aGlzLl9fcmVkaXJlY3RzID0gMDtcbiAgdGhpcy5fX2luaXQgPSBmYWxzZTtcbiAgdGhpcy5fX29wdGlvbnMgPSB7fTtcbiAgdGhpcy5fX3BhcmFtUmVnZXggPSAvKDooW1xcd1xcZC1dKykpL2c7XG4gIHRoaXMuX19yb3V0ZVNlbGVjdG9yID0gYyA9PiBjIGluc3RhbmNlb2YgUm91dGU7XG59XG5cbi8qKlxuICogQWRkIG5ldyBzdGF0ZSB0byB0aGUgcm91dGVyXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzdGF0ZSBuYW1lLiBUbyBzZXQgcGFyZW50cyB5b3UgY2FuIHVzZSBkb3QsIGUuZy4gJ2FwcC5hcnRpY2xlLmVkaXQnXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVybiAtIHVybCBwYXR0ZXJuIGxpa2UgJ2FwcC9hcnRpY2xlLzppZCdcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtyb3V0ZXJ9XG4gKi9cbnJvdXRlci5hZGQgPSBmdW5jdGlvbiAobmFtZSwgcGF0dGVybiwgb3B0aW9ucyA9IHt9KSB7XG4gIGlmKHR5cGVvZiBuYW1lID09ICdvYmplY3QnKSB7XG4gICAgb3B0aW9ucyA9IG5hbWU7XG4gICAgcGF0dGVybiA9IG9wdGlvbnMucGF0dGVybjtcbiAgICBuYW1lID0gb3B0aW9ucy5zdGF0ZTtcbiAgICBkZWxldGUgb3B0aW9ucy5wYXR0ZXJuO1xuICAgIGRlbGV0ZSBvcHRpb25zLnN0YXRlO1xuICB9XG5cbiAgaWYoIW5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBtdXN0IGhhdmUgYSBuYW1lYCk7XG4gIH1cblxuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICB0ZW1wbGF0ZTogJycsXG4gICAgdGVtcGxhdGVVcmw6ICcnLFxuICAgIGFic3RyYWN0OiBmYWxzZSxcbiAgICBjb21wb25lbnQ6IG51bGwsXG4gICAgaGFuZGxlcjogKCkgPT4ge30sXG4gIH07XG5cbiAgaWYoQWtpbGkub3B0aW9ucy5kZWJ1ZyAmJiBvcHRpb25zLmNvbXBvbmVudCAmJiAob3B0aW9ucy50ZW1wbGF0ZSB8fCBvcHRpb25zLnRlbXBsYXRlVXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKGBSb3V0ZXIgc3RhdGUgXCIke25hbWV9XCIgbXVzdCBvbmx5IGhhdmUgYSBjb21wb25lbnQgb3IgdGVtcGxhdGUgb3B0aW9uYCk7XG4gIH0gXG5cbiAgaWYgKCFvcHRpb25zLnRlbXBsYXRlICYmICFvcHRpb25zLnRlbXBsYXRlVXJsICYmICFvcHRpb25zLmNvbXBvbmVudCkge1xuICAgIG9wdGlvbnMuYWJzdHJhY3QgPSB0cnVlO1xuICB9XG5cbiAgaWYgKHRoaXMuaGFzKG5hbWUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgXCIke25hbWV9XCIgaXMgYWxyZWFkeSBleGlzdHNgKVxuICB9XG5cbiAgdGhpcy5zZXRTdGF0ZShuYW1lLCBwYXR0ZXJuLCB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnN9KTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBzdGF0ZSBmcm9tIHRoZSBsaXN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucm91dGVyLnJlbW92ZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAodGhpcy5zdGF0ZXNbaV0ubmFtZSA9PSBuYW1lKSB7XG4gICAgICB0aGlzLnN0YXRlcy5zcGxpY2UoaSwgMSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQ2hlY2sgc3RhdGUgZXhpc3RzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmICh0aGlzLnN0YXRlc1tpXS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHRoZSBzdGF0ZSB0byB0aGUgcGFzc2VkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzdGF0ZSBuYW1lXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gLSBwYXJhbXMgZm9yIHN0YXRlIHtpZDogMX0gPT4gJy9hcHAvOmlkJyA9PiAnL2FwcC8xJ1xuICogQHBhcmFtIHtvYmplY3R9IFtxdWVyeV0gLSBxdWVyeSB7eDogMX0gPT4gJy9hcHAvP3g9MSdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbaGFzaF1cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqL1xucm91dGVyLnN0YXRlID0gZnVuY3Rpb24gKG5hbWUsIHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gJycsIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgc3RhdGUgPSB0aGlzLmdldFN0YXRlKG5hbWUpO1xuICBcbiAgaWYgKCFzdGF0ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIHJvdXRlIHN0YXRlIHdpdGggbmFtZSAke25hbWV9YCk7XG4gIH1cblxuICBsZXQgdXJsID0gdGhpcy5jcmVhdGVTdGF0ZVVybChzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCk7XG5cbiAgaWYgKCFvcHRpb25zLnJlbG9hZCAmJiB1cmwgPT09IHRoaXMuZ2V0VXJsKCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIHRoaXMuX19vcHRpb25zID0gb3B0aW9ucztcbiAgdGhpcy5zZXRVcmwodXJsKTtcbn07XG5cbi8qKlxuICogR28gYmFja1xuICovXG5yb3V0ZXIuYmFjayA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkuYmFjay5hcHBseSh3aW5kb3cuaGlzdG9yeSwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogR28gdG8gYW55IHdheVxuICovXG5yb3V0ZXIuZ28gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LmdvLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBHbyBmb3J3YXJkXG4gKi9cbnJvdXRlci5mb3J3YXJkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeS5mb3J3YXJkLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RhdGUgYnkgdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICovXG5yb3V0ZXIubG9jYXRpb24gPSBmdW5jdGlvbih1cmwsIG9wdGlvbnMgPSB7IHJlbG9hZDogZmFsc2UgfSkge1xuICB0aGlzLl9fb3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgaWYgKHRoaXMuaGFzaE1vZGUpIHtcbiAgICBsZXQgY3VycmVudCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB1cmw7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjdXJyZW50ID09PSB1cmwgJiYgdGhpcy5jaGFuZ2VTdGF0ZSgpLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsICcnLCB1cmwpO1xuICB9XG59O1xuXG4vKipcbiAqIFJvdXRlciBpbml0aWFsaXphdGlvbi4gU2hvdWxkIGJlIGNhbGxlZCBiZWZvcmUgQWtpbGkuaW5pdCgpXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFtkZWZhdWx0VXJsXVxuICogQHBhcmFtIHtib29sZWFufSBbaGFzaE1vZGU9dHJ1ZV1cbiAqL1xucm91dGVyLmluaXQgPSBmdW5jdGlvbiAoZGVmYXVsdFVybCA9ICcnLCBoYXNoTW9kZSA9IHRydWUpIHtcbiAgbGV0IG9sZFB1c2hTdGF0ZSA9IHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZTtcblxuICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgcmVzID0gb2xkUHVzaFN0YXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICByb3V0ZXIuY2hhbmdlU3RhdGUoKS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgdGhpcy5fX29uU3RhdGVDaGFuZ2VIYW5kbGVyID0gKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgdGhpcy5jaGFuZ2VTdGF0ZSgpLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gIH07XG5cbiAgdGhpcy5kZWZhdWx0VXJsID0gZGVmYXVsdFVybDtcbiAgdGhpcy5oYXNoTW9kZSA9IGhhc2hNb2RlO1xuXG4gIHRoaXMuc3RhdGVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICBhID0gYS5uYW1lLnNwbGl0KCcuJykubGVuZ3RoO1xuICAgIGIgPSBiLm5hbWUuc3BsaXQoJy4nKS5sZW5ndGg7XG4gICAgcmV0dXJuIGEgLSBiO1xuICB9KTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHRoaXMuaW5pdFN0YXRlKHRoaXMuc3RhdGVzW2ldKTtcbiAgfVxuXG4gIGlmICghdGhpcy5zdGF0ZXMubGVuZ3RoICYmIEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihgWW91IGRpZG4ndCBhZGQgYW55IHJvdXRlcyB0byB0aGUgcm91dGVyYCk7XG4gIH1cblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIpO1xuICB0aGlzLl9faW5pdCA9IHRydWU7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIHN0YXRlIFxuICogXG4gKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgXG4gKi9cbnJvdXRlci5pbml0U3RhdGUgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgbGV0IHBhcmVudHMgPSBbXTtcbiAgc3RhdGUuY2hpbGRyZW4gPSBbXTtcbiAgcGFyZW50cyA9IHN0YXRlLm5hbWUuc3BsaXQoJy4nKTtcbiAgcGFyZW50cy5wb3AoKTtcbiAgc3RhdGUubGV2ZWwgPSBzdGF0ZS5hYnN0cmFjdD8gbnVsbDogcGFyZW50cy5sZW5ndGg7XG5cbiAgaWYgKHBhcmVudHMubGVuZ3RoKSB7XG4gICAgbGV0IHBhcmVudE5hbWUgPSBwYXJlbnRzLmpvaW4oJy4nKTtcbiAgICBsZXQgcGFyZW50ID0gdGhpcy5nZXRTdGF0ZShwYXJlbnROYW1lKTtcblxuICAgIGlmICghcGFyZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCBwYXJlbnQgcm91dGUgc3RhdGUgXCIke3BhcmVudE5hbWV9XCIgZm9yIFwiJHtzdGF0ZS5uYW1lfVwiYClcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUubGV2ZWwgIT09IG51bGwgJiYgcGFyZW50LmFic3RyYWN0KSB7XG4gICAgICBzdGF0ZS5sZXZlbC0tO1xuICAgIH1cblxuICAgIHN0YXRlLmZ1bGxQYXR0ZXJuID0gdGhpcy5zcGxpdFNsYXNoZXMocGFyZW50LmZ1bGxQYXR0ZXJuICsgJy8nICsgc3RhdGUucGF0dGVybik7XG4gICAgcGFyZW50LmNoaWxkcmVuLnB1c2goc3RhdGUpO1xuICB9XG4gIGVsc2Uge1xuICAgIHN0YXRlLmZ1bGxQYXR0ZXJuID0gc3RhdGUucGF0dGVybjtcbiAgfVxufVxuXG4vKipcbiAqIEdldCBzdGF0ZSBieSBuYW1lXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAqL1xucm91dGVyLmdldFN0YXRlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogU2V0IHN0YXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXR0ZXJuXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICovXG5yb3V0ZXIuc2V0U3RhdGUgPSBmdW5jdGlvbiAobmFtZSwgcGF0dGVybiwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBzdGF0ZSA9IHsuLi5vcHRpb25zLCBuYW1lLCBwYXR0ZXJufTtcbiAgdGhpcy5zdGF0ZXMucHVzaChzdGF0ZSk7XG4gIHRoaXMuX19pbml0ICYmIHRoaXMuaW5pdFN0YXRlKHN0YXRlKTtcbiAgcmV0dXJuIHN0YXRlO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgc3RhdGUgYnkgbmFtZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnJvdXRlci5yZW1vdmVTdGF0ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZXNbaV07XG5cbiAgICBpZiAoc3RhdGUubmFtZSA9PSBuYW1lKSB7XG4gICAgICB0aGlzLnN0YXRlcy5zcGxpY2UoaSwgMSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogU2V0IHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqL1xucm91dGVyLnNldFVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgdGhpcy5oYXNoTW9kZT8gdGhpcy5zZXRIYXNoVXJsKHVybCk6IHRoaXMuc2V0SGlzdG9yeVVybCh1cmwpO1xufTtcblxuLyoqXG4gKiBTZXQgdXJsIHVzaW5nIGhpc3RvcnlcbiAqXG4gKiBAcGFyYW0gdXJsXG4gKi9cbnJvdXRlci5zZXRIaXN0b3J5VXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgJycsIHVybCk7XG59O1xuXG4vKipcbiAqIFNldCB1cmwgdXNpbmcgaGFzaFxuICpcbiAqIEBwYXJhbSB1cmxcbiAqL1xucm91dGVyLnNldEhhc2hVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyMnICsgKHVybCB8fCAnLycpO1xufTtcblxuLyoqXG4gKiBHZXQgdXJsXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLmdldFVybCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuaGFzaE1vZGUgPyB0aGlzLmdldEhhc2hVcmwoKSA6IHRoaXMuZ2V0SGlzdG9yeVVybCgpO1xufTtcblxuLyoqXG4gKiBHZXQgdXJsIHVzaW5nIGhpc3RvcnlcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuZ2V0SGlzdG9yeVVybCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyB3aW5kb3cubG9jYXRpb24uaGFzaDtcbn07XG5cbi8qKlxuICogR2V0IHVybCB1c2luZyBoYXNoXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLmdldEhhc2hVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKC9eIy8sICcnKTtcbn07XG5cbi8qKlxuICogR2V0IHF1ZXJ5IHBhcmFtc1xuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5oYXNoTW9kZSA/IHRoaXMuZ2V0SGFzaFVybFF1ZXJ5KCkgOiB0aGlzLmdldEhpc3RvcnlVcmxRdWVyeSgpO1xufTtcblxuLyoqXG4gKiBHZXQgcXVlcnkgcGFyYW1zIHVzaW5nIGhpc3RvcnlcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0SGlzdG9yeVVybFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByZXF1ZXN0LnBhcmFtc0Zyb21RdWVyeSh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykpO1xufTtcblxuLyoqXG4gKiBHZXQgcXVlcnkgcGFyYW1zIHVzaW5nIGhhc2hcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0SGFzaFVybFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByZXF1ZXN0LnBhcmFtc0Zyb21RdWVyeSgod2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJz8nKVsxXSB8fCAnJykpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgdXJsIGJ5IGRhdGFcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc11cbiAqIEBwYXJhbSB7b2JqZWN0fSBbcXVlcnldXG4gKiBAcGFyYW0ge3N0cmluZ30gW2hhc2hdXG4gKi9cbnJvdXRlci5jcmVhdGVTdGF0ZVVybCA9IGZ1bmN0aW9uIChzdGF0ZSwgcGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSAnJykge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcblxuICBsZXQgdXJsID0gc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZSh0aGlzLl9fcGFyYW1SZWdleCwgKG0sIGYsIHYpID0+IHBhcmFtc1t2XSB8fCAnJyk7XG4gIHVybCA9IHVybC5yZXBsYWNlKC9eXFxeLywgJycpO1xuICB1cmwgPSB0aGlzLnNwbGl0U2xhc2hlcyh1cmwpO1xuXG4gIGlmIChPYmplY3Qua2V5cyhxdWVyeSkubGVuZ3RoKSB7XG4gICAgdXJsICs9ICc/JyArIHJlcXVlc3QucGFyYW1zVG9RdWVyeShxdWVyeSk7XG4gIH1cblxuICBoYXNoID0gKGhhc2ggfHwgJycpLnJlcGxhY2UoJyMnLCAnJyk7XG5cbiAgaWYgKCF0aGlzLmhhc2hNb2RlICYmIGhhc2gpIHtcbiAgICB1cmwgKz0gJyMnICsgaGFzaDtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbGwgdW5uZWNlc3Nhcnkgc2xhc2hlcyBmcm9tIGFuIHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5zcGxpdFNsYXNoZXMgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHJldHVybiB1cmwucmVwbGFjZSgvWy9dKy9nLCAnLycpO1xufTtcblxuLyoqXG4gKiBHZXQgc3RhdGUgdXJsIGNvbnRlbnRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0UGF0dGVybkNvbnRlbnQgPSBmdW5jdGlvbiAoc3RhdGUsIHVybCkge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcblxuICBsZXQga2V5cyA9IFtdO1xuICBsZXQgaSA9IDA7XG4gIGxldCBwYXJhbXMgPSB7fTtcblxuICB1cmwgPSB1cmwuc3BsaXQoJz8nKVswXTtcbiAgdXJsID0gdXJsLnNwbGl0KCcjJylbMF07XG5cbiAgbGV0IHVybFBhdHRlcm4gPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAobSwgZiwgdikgPT4ge1xuICAgIGtleXMucHVzaCh2KTtcbiAgICByZXR1cm4gJyhbXlxcXFwvXSopJztcbiAgfSk7XG5cbiAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cCh1cmxQYXR0ZXJuKTtcbiAgbGV0IGlzSW5jbHVkZWQgPSB1cmwubWF0Y2gocmVnZXgpO1xuXG4gIGlmICghaXNJbmNsdWRlZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdXJsLnJlcGxhY2UocmVnZXgsIChtLCB2KSA9PiB7XG4gICAgdiAmJiAocGFyYW1zW2tleXNbaV1dID0gdik7XG4gICAgaSsrO1xuICB9KTtcblxuICByZXR1cm4geyBwYXJhbXMgfTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIHN0YXRlIGlzIGFjdGl2ZSBub3dcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVzXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmlzQWN0aXZlU3RhdGUgPSBmdW5jdGlvbihzdGF0ZSwgaW5jbHVkZXMgPSBmYWxzZSkge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgbGV0IHVybCA9IHRoaXMuc3BsaXRTbGFzaGVzKHRoaXMuZ2V0VXJsKCkuc3BsaXQoJz8nKVswXSArICcvJyk7XG4gIGxldCB1cmxQYXR0ZXJuID0gc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZSh0aGlzLl9fcGFyYW1SZWdleCwgJyhbXlxcXFwvXSopJyk7XG4gIGxldCBzdHIgPSBpbmNsdWRlcz8gdXJsUGF0dGVybjogdGhpcy5zcGxpdFNsYXNoZXMoJ14nICsgdXJsUGF0dGVybiArICcvJCcpO1xuICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKHN0cik7ICBcbiAgcmV0dXJuIHJlZ2V4LnRlc3QodXJsKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIGN1cnJlbnQgdXJsIGluY2x1ZGVzIGEgc3RhdGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmluQWN0aXZlU3RhdGUgPSBmdW5jdGlvbihzdGF0ZSkge1xuICByZXR1cm4gcm91dGVyLmlzQWN0aXZlU3RhdGUoc3RhdGUsIHRydWUpO1xufTtcblxuLyoqXG4gKiBHZXQgcm91dGUgY29tcG9uZW50IGJ5IGxldmVsXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxldmVsXG4gKi9cbnJvdXRlci5nZXRSb3V0ZSA9IGZ1bmN0aW9uIChsZXZlbCkge1xuICBsZXQgaSA9IDA7XG5cbiAgY29uc3QgZmluZCA9IChlbCkgPT4ge1xuICAgIGxldCByb3V0ZSA9IGVsLmNoaWxkKHRoaXMuX19yb3V0ZVNlbGVjdG9yKTtcblxuICAgIGlmICghcm91dGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChpID09IGxldmVsKSB7XG4gICAgICByZXR1cm4gcm91dGU7XG4gICAgfVxuXG4gICAgaSsrO1xuXG4gICAgcmV0dXJuIGZpbmQocm91dGUpO1xuICB9O1xuXG4gIHJldHVybiBmaW5kKEFraWxpLnJvb3QpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGZpcnN0IG1hdGNoXG4gKlxuICogQHBhcmFtIHthcnJheX0gYXJyXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gKi9cbnJvdXRlci5nZXRBcnJheVBhdHRlcm5Db250ZW50ID0gZnVuY3Rpb24gKGFyciwgdXJsKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IGFycltpXTtcbiAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0UGF0dGVybkNvbnRlbnQoc3RhdGUsIHVybCk7XG5cbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJldHVybiB7c3RhdGU6IHN0YXRlLCAuLi5jb250ZW50fTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBHZXQgc3RhdGVzIGJ5IGxldmVsXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxldmVsXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbnJvdXRlci5nZXRTdGF0ZXNCeUxldmVsID0gZnVuY3Rpb24gKGxldmVsKSB7XG4gIGxldCBzdGF0ZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLmxldmVsIDwgbGV2ZWwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChzdGF0ZS5sZXZlbCA+IGxldmVsKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzdGF0ZXMucHVzaChzdGF0ZSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVzO1xufTtcblxuLyoqXG4gKiBJc29sYXRlIHRoZSBmdW5jdGlvbiB0byBub3QgdHJpZ2dlciByb3V0ZXIgaGFuZGxlcnMgaW5zaWRlXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5yb3V0ZXIuaXNvbGF0ZSA9IGZ1bmN0aW9uKGZuKSB7XG4gIHRoaXMuX19pc29sYXRlZCA9IHRydWU7XG4gIGxldCByZXMgPSBmbigpO1xuICB0aGlzLl9faXNvbGF0ZWQgPSBmYWxzZTtcbiAgcmV0dXJuIHJlcztcbn1cblxuLyoqXG4gKiBDaGFuZ2Ugc3RhdGVcbiAqL1xucm91dGVyLmNoYW5nZVN0YXRlID0gZnVuY3Rpb24gKCkgeyAgICBcbiAgaWYodGhpcy5fX2lzb2xhdGVkKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgaWYgKHRoaXMuX19kaXNhYmxlQ2hhbmdlKSB7XG4gICAgZGVsZXRlIHRoaXMuX19kaXNhYmxlQ2hhbmdlO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIGxldCB1cmwgPSB0aGlzLmdldFVybCgpO1xuICBsZXQgaGFzaCA9IHRoaXMuaGFzaE1vZGU/ICcnOiB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpO1xuICBsZXQgcXVlcnkgPSB0aGlzLmdldFVybFF1ZXJ5KCk7XG4gIGxldCBwcmV2VHJhbnNpdGlvbiA9IHJvdXRlci50cmFuc2l0aW9uIHx8IG51bGw7XG4gIGxldCB0cmFuc2l0aW9uID0gcm91dGVyLnRyYW5zaXRpb24gPSBuZXcgVHJhbnNpdGlvbih1cmwsIHF1ZXJ5LCBoYXNoLCBwcmV2VHJhbnNpdGlvbik7XG4gIGxldCBsZXZlbCA9IDA7XG4gXG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc3RhdGUtY2hhbmdlJywgeyBkZXRhaWw6IHRyYW5zaXRpb24gfSkpO1xuXG4gIGNvbnN0IG5leHQgPSAoc3RhdGVzLCBvbkVuZCkgPT4geyAgICBcbiAgICBpZiAoIXN0YXRlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBvbkVuZCAmJiBvbkVuZCgpO1xuICAgIH1cblxuICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRBcnJheVBhdHRlcm5Db250ZW50KHN0YXRlcywgdXJsKTtcblxuICAgIGlmICghY29udGVudCkge1xuICAgICAgcmV0dXJuIG9uRW5kICYmIG9uRW5kKCk7XG4gICAgfVxuXG4gICAgbGV0IHN0YXRlID0gY29udGVudC5zdGF0ZTtcbiAgICBsZXQgcGFyYW1zID0gY29udGVudC5wYXJhbXM7XG4gICAgbGV0IHJvdXRlID0gc3RhdGUuYWJzdHJhY3Q/IG51bGw6IHRoaXMuZ2V0Um91dGUoc3RhdGUubGV2ZWwpO1xuXG4gICAgaWYgKCFyb3V0ZSAmJiAhc3RhdGUuYWJzdHJhY3QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvciAoYE5vdCBmb3VuZCByb3V0ZSBjb21wb25lbnQgZm9yIHN0YXRlIFwiJHtzdGF0ZS5uYW1lfVwiYCk7XG4gICAgfSAgICBcblxuICAgIHRyYW5zaXRpb24uc2V0UGF0aCh7IHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBjb21wb25lbnQ6IHJvdXRlLCBsb2FkZWQ6IHRydWUgfSk7XG4gICAgbGV2ZWwrKztcblxuICAgIGxldCBoYXNTdGF0ZSA9IHByZXZUcmFuc2l0aW9uICYmIHByZXZUcmFuc2l0aW9uLmhhc1N0YXRlKHN0YXRlKTtcbiAgICBsZXQgaXNEaWZmZXJlbnQgPSB0cnVlO1xuICAgICBcbiAgICBpZiAoaGFzU3RhdGUpIHtcbiAgICAgIGxldCByb3V0ZSA9IHByZXZUcmFuc2l0aW9uLmdldFJvdXRlKHN0YXRlKTsgICAgICBcbiAgICAgIGxldCBwcmV2ID0geyBwYXJhbXM6IHJvdXRlLnBhcmFtcywgcXVlcnk6IHJvdXRlLnF1ZXJ5LCBoYXNoOiByb3V0ZS5oYXNoIH07XG4gICAgICBsZXQgY3VycmVudCA9IHsgcGFyYW1zLCBxdWVyeSwgaGFzaCB9O1xuICAgICAgaXNEaWZmZXJlbnQgPSAhdXRpbHMuY29tcGFyZShwcmV2LCBjdXJyZW50KTtcbiAgICB9XG5cbiAgICB0cmFuc2l0aW9uLnBhdGgubG9hZGVkID0gaXNEaWZmZXJlbnQgJiYgdGhpcy5fX29wdGlvbnMucmVsb2FkICE9PSBmYWxzZTtcbiAgICBcbiAgICBQcm9taXNlLnJlc29sdmUodHJhbnNpdGlvbi5wYXRoLmxvYWRlZD8gc3RhdGUuaGFuZGxlcih0cmFuc2l0aW9uKTogdHJhbnNpdGlvbi5wYXRoLmRhdGEpLnRoZW4oKGRhdGEpID0+IHsgIFxuICAgICAgaWYgKHRyYW5zaXRpb24uX19jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIG9uRW5kICYmIG9uRW5kKCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRyYW5zaXRpb24ucGF0aC5kYXRhID0gZGF0YTtcbiAgICAgIHN0YXRlLnRpdGxlICYmIChkb2N1bWVudC50aXRsZSA9IHR5cGVvZiBzdGF0ZS50aXRsZSA9PSAnZnVuY3Rpb24nPyBzdGF0ZS50aXRsZSh0cmFuc2l0aW9uKTogc3RhdGUudGl0bGUpO1xuXG4gICAgICBpZiAoc3RhdGUuYWJzdHJhY3QpIHtcbiAgICAgICAgcmV0dXJuIG5leHQoc3RhdGUuY2hpbGRyZW4sIG9uRW5kKTtcbiAgICAgIH1cbiBcbiAgICAgIHJvdXRlLnNldFRyYW5zaXRpb24odHJhbnNpdGlvbikudGhlbigoKSA9PiB7XG4gICAgICAgIG5leHQoc3RhdGUuY2hpbGRyZW4sIG9uRW5kKTtcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IG9uRW5kICYmIG9uRW5kKGVycikpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbmV4dCh0aGlzLmdldFN0YXRlc0J5TGV2ZWwoMCksIChlcnIpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRyYW5zaXRpb24ucm91dGVzLmxlbmd0aCkge1xuICAgICAgICBpZiAodGhpcy5fX3JlZGlyZWN0cykge1xuICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKGBXcm9uZyByb3V0ZXIgZGVmYXVsdCB1cmwgXCIke3RoaXMuZGVmYXVsdFVybH1cImApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRVcmwpIHtcbiAgICAgICAgICBpZiAodGhpcy5kZWZhdWx0VXJsID09IHRoaXMuZ2V0VXJsKCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKGBOb3QgZm91bmQgYW55IHJvdXRlc2ApKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9fZGlzYWJsZUNoYW5nZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zZXRVcmwodGhpcy5kZWZhdWx0VXJsKTtcbiAgICAgICAgICB0aGlzLl9fcmVkaXJlY3RzKys7XG5cbiAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2VTdGF0ZSgpLnRoZW4ocmVzb2x2ZSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLndhcm4oYE5vdCBmb3VuZCBhIGRlZmF1bHQgcm91dGUuIFlvdSBjYW4gcGFzcyBpdCBpbiBcInJvdXRlci5pbml0KGRlZmF1bHRVcmwpXCIgZnVuY3Rpb25gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoIXRoaXMuX19vcHRpb25zLnNhdmVTY3JvbGxQb3NpdGlvbiAmJiAhdHJhbnNpdGlvbi5oYXNoKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fX29wdGlvbnMgPSB7fTtcbiAgICAgIHRoaXMuX19yZWRpcmVjdHMgPSAwO1xuXG4gICAgICBpZiAocHJldlRyYW5zaXRpb24pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGxldmVsLCBsID0gcHJldlRyYW5zaXRpb24ucm91dGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGxldCByb3V0ZSA9IHByZXZUcmFuc2l0aW9uLnJvdXRlc1tpXTsgICAgICAgICAgXG4gICAgICAgICAgcm91dGUuY29tcG9uZW50ICYmIHJvdXRlLmNvbXBvbmVudC5lbXB0eSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc3RhdGUtY2hhbmdlZCcsIHsgZGV0YWlsOiB0cmFuc2l0aW9uIH0pKTtcbiAgICAgIHJlc29sdmUodHJhbnNpdGlvbik7ICBcbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIERlaW5pdCByb3V0ZXJcbiAqL1xucm91dGVyLmRlaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5fX29uU3RhdGVDaGFuZ2VIYW5kbGVyKTtcbiAgcm91dGVyLnNldERlZmF1bHRzKCk7XG59O1xuXG5yb3V0ZXIuVHJhbnNpdGlvbiA9IFRyYW5zaXRpb247XG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG5yb3V0ZXIuc2V0RGVmYXVsdHMoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvcm91dGVyLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBJZiBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWYgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgdHJhbnNwYXJlbnQgPSB0cnVlO1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbaXNdJztcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydyZWNyZWF0ZSddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpZicsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnZWxzZS1pZicsIHRoaXMuRWxzZUlmKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2Vsc2UnLCB0aGlzLkVsc2UpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5odG1sID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLnN0YXRlID0gZmFsc2U7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnJlY3JlYXRlID0gZmFsc2U7XG4gICAgdGhpcy5pc0NvbXBpbGVkID0gZmFsc2U7XG4gICAgdGhpcy5kaXNwbGF5ID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKS5kaXNwbGF5O1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRyKCdyZWNyZWF0ZScsIHRoaXMuc2V0UmVjcmVhdGlvbik7XG4gICAgcmV0dXJuIHRoaXMuYXR0cignaXMnLCB2YWwgPT4gKHRoaXMuc3RhdGUgPSAhIXZhbCwgdGhpcy5zZXRTdGF0ZSgpKSk7XG4gIH1cblxuICBzZXRBY3Rpdml0eShhY3RpdmUpIHtcbiAgICB0aGlzLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgfVxuXG4gIHNldFJlY3JlYXRpb24ocmVjcmVhdGUpIHtcbiAgICB0aGlzLnJlY3JlYXRlID0gcmVjcmVhdGU7XG4gIH1cblxuICBzZXRTdGF0ZSgpIHtcbiAgICBsZXQgcmVzID0gdGhpcy5jb21waWxhdGlvbigpO1xuICAgIGxldCBuZXh0ID0gdGhpcy5lbC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgbGV0IHJlc3VsdDtcblxuICAgIGlmICghbmV4dCB8fCAhbmV4dC5tYXRjaGVzKCdlbHNlLWlmLGVsc2UnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5leHQuX19ha2lsaS5zZXRBY3Rpdml0eSh0aGlzLmFjdGl2ZSB8fCB0aGlzLnN0YXRlKTtcbiAgICBuZXh0Ll9fYWtpbGkuc2V0UmVjcmVhdGlvbih0aGlzLnJlY3JlYXRlKTtcbiAgICByZXN1bHQgPSBuZXh0Ll9fYWtpbGkuc2V0U3RhdGUoKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcykudGhlbigoKSA9PiAgcmVzdWx0KTtcbiAgfVxuXG4gIGNvbXBpbGF0aW9uKCkge1xuICAgIGxldCByZXM7XG5cbiAgICBpZiAodGhpcy5zdGF0ZSAmJiAhdGhpcy5hY3RpdmUpIHtcbiAgICAgIGlmICh0aGlzLnJlY3JlYXRlIHx8ICF0aGlzLmlzQ29tcGlsZWQpIHtcbiAgICAgICAgcmVzID0gdGhpcy5jb21waWxlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9IHRoaXMuZGlzcGxheTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAodGhpcy5yZWNyZWF0ZSkge1xuICAgICAgICB0aGlzLl9fZW1wdHkoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCF0aGlzLmlzQ29tcGlsZWQpIHtcbiAgICAgICAgcmVzID0gdGhpcy5jb21waWxlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBjb21waWxlKCkge1xuICAgIGxldCByZXM7XG5cbiAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcbiAgICByZXMgPSBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgIHRoaXMuaXNDb21waWxlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG59XG5cbi8qKlxuICogRWxzZUlmIGNvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgRWxzZUlmIGV4dGVuZHMgSWYge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBFbHNlIGNvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgRWxzZSBleHRlbmRzIEVsc2VJZiB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2lzJywgJ3RydWUnKTtcbiAgfVxufVxuXG5JZi5FbHNlSWYgPSBFbHNlSWY7XG5JZi5FbHNlID0gRWxzZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pZi5qcyIsImltcG9ydCBGb3IsIHsgTG9vcCB9IGZyb20gJy4vZm9yLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyBGb3Ige1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ211bHRpcGxlJ107XG4gIHN0YXRpYyBldmVudHMgPSBbJ2NoYW5nZSddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdzZWxlY3QnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ29wdGlvbicsIHRoaXMuT3B0aW9uKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXRlcmF0b3JUYWdOYW1lID0gJ29wdGlvbic7XG4gICAgdGhpcy5pc011bHRpcGxlID0gZmFsc2U7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5lbC5jb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG4gIFxuICBjb21waWxlZCgpIHsgXG4gICAgbGV0IHJlcyA9IHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7ICAgXG4gICAgdGhpcy5hdHRyKCdtdWx0aXBsZScsIHRoaXMuc2V0TXVsdGlwbGUpO1xuICAgIHRoaXMuYXR0cignY29udGVudCcsIHRoaXMuc2V0Q29udGVudCk7XG4gICAgdGhpcy5hdHRyKCdpbicsIHRoaXMuZHJhd1NlbGVjdCk7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHNldE11bHRpcGxlKHZhbHVlKSB7XG4gICAgdGhpcy5pc011bHRpcGxlID0gdmFsdWU7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKHV0aWxzLmNvcHkodGhpcy5lbC5jb250ZW50KSkpO1xuICB9XG5cbiAgc2V0Q29udGVudCh2YWx1ZSkge1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5mb3JtYXRWYWx1ZSh2YWx1ZSkpO1xuICB9XG5cbiAgZHJhd1NlbGVjdCgpIHtcbiAgICBsZXQgc2VsZWN0ZWQgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXS5fX2FraWxpO1xuICAgICAgbGV0IHNlbGVjdGlvbiA9IG9wdGlvbi5hdHRycy5zZWxlY3RlZDtcblxuICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICBzZWxlY3RlZC5wdXNoKG9wdGlvbi5lbC52YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbi5lbC5zZWxlY3RlZCA9IHNlbGVjdGlvbjtcbiAgICB9XG5cbiAgICBpZiAoIXNlbGVjdGVkLmxlbmd0aCkge1xuICAgICAgdGhpcy5yZWRlZmluZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5mb3JtYXRWYWx1ZShzZWxlY3RlZCkpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUl0ZXJhdG9yRWxlbWVudCgpIHtcbiAgICBsZXQgZWwgPSBzdXBlci5jcmVhdGVJdGVyYXRvckVsZW1lbnQoKTtcblxuICAgIGlmICghZWwuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGhpcy5odG1sLnRyaW0oKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBpZiAoIXRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZWwudmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnQgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXTtcblxuICAgICAgaWYgKG9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICBjb250ZW50LnB1c2gob3B0aW9uLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGZvcm1hdFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9ICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKT8gW3ZhbHVlXTogW107XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUubGVuZ3RoPyB2YWx1ZVswXTogJyc7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZWRlZmluZSgpIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZ2V0Q29udGVudCgpKTtcbiAgfVxuXG4gIGNoYW5nZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHV0aWxzLmNvbXBhcmUodGhpcy5lbC5jb250ZW50LCB2YWx1ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuZWwudmFsdWUgPSB2YWx1ZVt2YWx1ZS5sZW5ndGggLSAxXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdmFsdWUuaW5kZXhPZihvcHRpb24udmFsdWUpICE9IC0xO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZWwudmFsdWUgPSB2YWx1ZTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gb3B0aW9uLnZhbHVlID09IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZWwuY29udGVudCA9IHZhbHVlO1xuICAgIHRoaXMuYXR0cnMub25DaGFuZ2UuZGlzcGF0Y2goRXZlbnQsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgT3B0aW9uIGV4dGVuZHMgTG9vcCB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnc2VsZWN0ZWQnXTtcblxuICBfX2dldFBhcnNlZEV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIHJldHVybiB1dGlscy5kZWNvZGVIdG1sRW50aXRpZXMoZXhwcmVzc2lvbik7XG4gIH1cblxuICBjaGFuZ2VkU2VsZWN0ZWQodmFsdWUpIHtcbiAgICB0aGlzLnNldFNlbGVjdGVkKHZhbHVlKTtcbiAgfVxuXG4gIHNldFNlbGVjdGVkKHZhbHVlKSB7XG4gICAgdGhpcy5lbC5zZWxlY3RlZCA9IHZhbHVlO1xuICAgIHRoaXMuZm9yLnJlZGVmaW5lKCk7XG4gIH1cbn1cblxuU2VsZWN0Lk9wdGlvbiA9IE9wdGlvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9zZWxlY3QuanMiLCJpbXBvcnQgVGV4dCBmcm9tICcuL3RleHQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBUZXh0IHtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydjaGVja2VkJywgJ211bHRpcGxlJ107XG4gIHN0YXRpYyBldmVudHMgPSBbJ2NoYW5nZSddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpbnB1dCcsIHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pc0NoZWNrYm94ID0gdGhpcy5lbC50eXBlID09ICdjaGVja2JveCc7XG4gICAgdGhpcy5pc1JhZGlvID0gdGhpcy5lbC50eXBlID09ICdyYWRpbyc7ICAgIFxuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICBpZih0aGlzLmlzUmFkaW8gfHwgdGhpcy5pc0NoZWNrYm94KSB7XG4gICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnNldENoZWNrZWQodGhpcy5lbC5jaGVja2VkLCBmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9XG4gICBcbiAgICByZXR1cm4gc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgcmVzb2x2ZWQoKSB7XG4gICAgKHRoaXMuaXNDaGVja2JveCB8fCB0aGlzLmlzUmFkaW8pICYmIHRoaXMuYXR0cignY2hlY2tlZCcsIHRoaXMuc2V0Q2hlY2tlZCk7XG4gICAgcmV0dXJuIHN1cGVyLnJlc29sdmVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH0gIFxuXG4gIHNldENoZWNrZWQodmFsdWUsIHRyaWdnZXIgPSB0cnVlKSB7XG4gICAgdmFsdWUgPSAhIXZhbHVlO1xuXG4gICAgaWYgKHRoaXMucHJldkNoZWNrZWQgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5lbC5jaGVja2VkID0gdGhpcy5wcmV2Q2hlY2tlZCA9IHZhbHVlO1xuICAgIHRyaWdnZXIgJiYgdGhpcy5hdHRycy5vbkNoYW5nZS5kaXNwYXRjaChFdmVudCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgIHRoaXMuaXNSYWRpbyAmJiB0aGlzLmNoYW5nZVJhZGlvKCk7XG4gIH1cblxuICBzZXRWYWx1ZSgpIHtcbiAgICBzdXBlci5zZXRWYWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuaXNSYWRpbyAmJiB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cblxuICBjaGFuZ2VSYWRpbygpIHtcbiAgICBsZXQgbmFtZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgbGV0IHNlbGVjdG9yID0gYGlucHV0W3R5cGU9cmFkaW9dW25hbWU9JyR7bmFtZX0nXTpub3QoW3Njb3BlPScke3RoaXMuc2NvcGUuX19uYW1lfSddKWA7XG4gICAgbGV0IGNoaWxkcmVuID0gQWtpbGkucm9vdC5jaGlsZHJlbihzZWxlY3Rvcik7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJhZGlvID0gY2hpbGRyZW5baV07XG4gICAgICByYWRpby5zZXRDaGVja2VkKHJhZGlvLmVsLmNoZWNrZWQpO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2lucHV0LmpzIiwiaW1wb3J0IEZvciwgeyBMb29wIH0gZnJvbSAnLi9mb3IuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBUaGUgcmFkaW8gZ3JvdXAgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZGlvIGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW25hbWVdJztcbiAgc3RhdGljIGV2ZW50cyA9IFsncmFkaW8nXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgncmFkaW8nLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JhZGlvLWJ1dHRvbicsIHRoaXMuUmFkaW9CdXR0b24pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pdGVyYWJsZSA9IHRoaXMuZWwuaGFzQXR0cmlidXRlKCdpbicpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLmdldFJhZGlvVmFsdWUoKTtcblxuICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMucHJldlZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5hdHRycy5vblJhZGlvLnRyaWdnZXIodmFsdWUsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYodGhpcy5pdGVyYWJsZSkge1xuICAgICAgcmV0dXJuIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICByZXNvbHZlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ2luJywgdGhpcy5zZXROYW1lcywgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7ICAgXG4gICAgdGhpcy5hdHRyKCd2YWx1ZScsIHRoaXMuc2V0VmFsdWUpOyBcbiAgICB0aGlzLmF0dHIoJ25hbWUnLCB0aGlzLnNldE5hbWVzKTtcbiAgICByZXR1cm4gc3VwZXIucmVzb2x2ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHNldE5hbWVzKG5hbWUpIHtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNoaWxkcmVuW2ldLmVsLnNldEF0dHJpYnV0ZSgnbmFtZScsIG5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSB0aGlzLnByZXZWYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBwcmV2ID0gdGhpcy5wcmV2VmFsdWU7XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbignaW5wdXRbdHlwZT1yYWRpb10nKTtcbiAgICBsZXQgaXNUcnVlID0gZmFsc2U7XG5cbiAgICB0aGlzLnByZXZWYWx1ZSA9IHZhbHVlO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuICAgICAgbGV0IGlzU2VsZWN0ZWQgPSByYWRpby5lbC52YWx1ZSA9PT0gdmFsdWU7XG5cbiAgICAgIGlzU2VsZWN0ZWQgJiYgKGlzVHJ1ZSA9IHRydWUpO1xuICAgICAgcmFkaW8uc2V0Q2hlY2tlZChpc1NlbGVjdGVkKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzVHJ1ZSkge1xuICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIGlmIChwcmV2ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnByZXZWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYXR0cnMub25SYWRpby50cmlnZ2VyKHZhbHVlLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cblxuICBnZXRSYWRpb1ZhbHVlKCkge1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oJ2lucHV0W3R5cGU9cmFkaW9dJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJhZGlvID0gY2hpbGRyZW5baV07XG5cbiAgICAgIGlmIChyYWRpby5lbC5jaGVja2VkKSB7XG4gICAgICAgIHJldHVybiByYWRpby5lbC52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSByYWRpbyBpdGVtIGNvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgUmFkaW9CdXR0b24gZXh0ZW5kcyBMb29wIHtcbiAgc3RhdGljIHRlbXBsYXRlID0gJzxsYWJlbD48aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIke3RoaXMudmFsdWV9XCIvPiR7dGhpcy5fX2NvbnRlbnR9PC9sYWJlbD4nO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cigndmFsdWUnLCAndmFsdWUnKTtcbiAgICByZXR1cm4gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5SYWRpby5SYWRpb0J1dHRvbiA9IFJhZGlvQnV0dG9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3JhZGlvLmpzIiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRhcmVhIGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0ZXh0YXJlYScsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGV4dGFyZWEuanMiLCJpbXBvcnQgVGV4dCBmcm9tICcuL3RleHQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudCBleHRlbmRzIFRleHQge1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnY29udGVudCcsIHRoaXMpO1xuICAgIEFraWxpLmFsaWFzKCdbY29udGVudGVkaXRhYmxlXScsICdjb250ZW50Jyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICBpZiAodGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ2VkaXRhYmxlJykpIHtcbiAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0aGlzLmVsLmdldEF0dHJpYnV0ZSgnZWRpdGFibGUnKSk7XG4gICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZSgnZWRpdGFibGUnKTtcbiAgICB9XG5cbiAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKS5kaXNwbGF5ID09ICdpbmxpbmUnKSB7XG4gICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIHRoaXMudmFsdWVLZXkgPSAnaW5uZXJIVE1MJztcbiAgfVxuXG4gIHNldEVsZW1lbnRGb2N1cygpIHtcbiAgICBsZXQgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIGxldCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG5cbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGhpcy5lbCk7XG4gICAgcmFuZ2UuY29sbGFwc2UoZmFsc2UpO1xuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2NvbnRlbnQuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluY2x1ZGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgdHJhbnNwYXJlbnQgPSB0cnVlO1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbdXJsXSc7XG4gIHN0YXRpYyBldmVudHMgPSBbJ2xvYWQnLCAnZXJyb3InXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaW5jbHVkZScsIHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5odG1sID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRyKCdjYWNoZScsIHRoaXMuc2V0Q2FjaGUpO1xuICAgIHJldHVybiB0aGlzLmF0dHIoJ3VybCcsIHRoaXMuc2V0VGVtcGxhdGUpO1xuICB9XG5cbiAgc2V0Q2FjaGUoY2FjaGUpIHtcbiAgICB0aGlzLmNhY2hlID0gY2FjaGU7XG4gIH1cblxuICBzZXRUZW1wbGF0ZSh1cmwpIHtcbiAgICB0aGlzLmNvbm5lY3Rpb24gJiYgdGhpcy5jb25uZWN0aW9uLmFib3J0KCk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQodXJsLCB7XG4gICAgICBjYWNoZTogdGhpcy5jYWNoZSxcbiAgICAgIG9uU3RhcnQ6ICh4aHIpID0+IHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0geGhyO1xuICAgICAgfVxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgICAgIHRoaXMuZW1wdHkoKTtcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5odG1sO1xuICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgcmVzLmRhdGEpO1xuXG4gICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5hdHRycy5vbkxvYWQudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICB9KTtcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICB0aGlzLmF0dHJzLm9uRXJyb3IudHJpZ2dlcihlcnIsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pbmNsdWRlLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZnJhbWUgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpZnJhbWUnLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2lmcmFtZS5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2UgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpbWcnLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2ltYWdlLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWJlZCBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2VtYmVkJywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9lbWJlZC5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW8gZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdhdWRpbycsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYXVkaW8uanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZGVvIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgndmlkZW8nLCB0aGlzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3ZpZGVvLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFjayBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RyYWNrJywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90cmFjay5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU291cmNlIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnc291cmNlJywgdGhpcyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9zb3VyY2UuanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdHMgZXh0ZW5kcyBVcmwgeyAgXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMudXJsQXR0cmlidXRlID0gJ2RhdGEnO1xuICB9XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ29iamVjdCcsIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvb2JqZWN0LmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuLi9zZXJ2aWNlcy9yb3V0ZXIuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tzdGF0ZV06bm90KFt1cmxdKSxbdXJsXTpub3QoW3N0YXRlXSknO1xuICBzdGF0aWMgY29udHJvbEF0dHJpYnV0ZXMgPSB0cnVlO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdhJywgdGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnN0YXRlID0gbnVsbDtcbiAgICB0aGlzLnBhcmFtcyA9IHt9O1xuICAgIHRoaXMucXVlcnkgPSB7fTtcbiAgICB0aGlzLmhhc2ggPSAnJztcbiAgICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgICB0aGlzLmlzVXJsID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3VybCcpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKHRoaXMuaXNVcmwpIHtcbiAgICAgICAgcm91dGVyLmxvY2F0aW9uKHRoaXMuYXR0cnMudXJsLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJvdXRlci5zdGF0ZSh0aGlzLnN0YXRlLm5hbWUsIHRoaXMucGFyYW1zLCB0aGlzLnF1ZXJ5LCB0aGlzLmhhc2gsICB0aGlzLm9wdGlvbnMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZCA9ICgpID0+IHRoaXMuc3RhdGUgJiYgdGhpcy5zZXRBY3Rpdml0eSgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzdGF0ZS1jaGFuZ2VkJywgdGhpcy5vblN0YXRlQ2hhbmdlZCk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ3N0YXRlJywgdGhpcy5zZXRTdGF0ZSk7XG4gICAgdGhpcy5hdHRyKCdwYXJhbXMnLCB0aGlzLnNldFBhcmFtcyk7XG4gICAgdGhpcy5hdHRyKCdxdWVyeScsIHRoaXMuc2V0UXVlcnkpO1xuICAgIHRoaXMuYXR0cignaGFzaCcsIHRoaXMuc2V0SGFzaCk7XG4gICAgdGhpcy5hdHRyKCdvcHRpb25zJywgdGhpcy5zZXRPcHRpb25zKTtcbiAgICB0aGlzLmF0dHIoJ3VybCcsIHRoaXMuc2V0VXJsKTtcbiAgICB0aGlzLmF0dHIoJ3N0YXRlJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cigncGFyYW1zJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cigncXVlcnknLCB0aGlzLnJlc2V0SHJlZiwgeyBjYWxsT25TdGFydDogZmFsc2UgfSk7XG4gICAgdGhpcy5hdHRyKCdoYXNoJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cigndXJsJywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMucmVzZXRIcmVmKCk7XG4gIH1cblxuICByZW1vdmVkKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzdGF0ZS1jaGFuZ2VkJywgdGhpcy5vblN0YXRlQ2hhbmdlZCk7XG4gIH1cblxuICBzZXRVcmwodXJsKSB7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gIH1cblxuICBzZXRTdGF0ZShuYW1lKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0U3RhdGUobmFtZSk7XG4gICAgdGhpcy5zZXRBY3Rpdml0eSgpO1xuICB9XG5cbiAgc2V0QWN0aXZpdHkoKSB7XG4gICAgdGhpcy5zY29wZS5pc0FjdGl2ZVN0YXRlID0gcm91dGVyLmlzQWN0aXZlU3RhdGUodGhpcy5zdGF0ZSk7XG4gICAgdGhpcy5zY29wZS5pbkFjdGl2ZVN0YXRlID0gcm91dGVyLmluQWN0aXZlU3RhdGUodGhpcy5zdGF0ZSk7XG4gIH1cblxuICBzZXRQYXJhbXMocGFyYW1zKSB7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMgIT0gJ29iamVjdCcgfHwgIXBhcmFtcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgcGFyYW1zIG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gIH1cblxuICBzZXRRdWVyeShxdWVyeSkge1xuICAgIGlmICh0eXBlb2YgcXVlcnkgIT0gJ29iamVjdCcgfHwgIXF1ZXJ5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBxdWVyeSBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgfVxuXG4gIHNldEhhc2goaGFzaCkge1xuICAgIGlmICh0eXBlb2YgaGFzaCAhPSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgaGFzaCBtdXN0IGJlIGEgc3RyaW5nYCk7XG4gICAgfVxuXG4gICAgdGhpcy5oYXNoID0gaGFzaDtcbiAgfVxuXG4gIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPSAnb2JqZWN0JyB8fCAhb3B0aW9ucykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgb3B0aW9ucyBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBnZXRTdGF0ZShuYW1lKSB7XG4gICAgbGV0IHN0YXRlID0gcm91dGVyLmdldFN0YXRlKG5hbWUpO1xuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgcm91dGVyIHN0YXRlIHdpdGggbmFtZSBcIiR7bmFtZX1cImApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIHJlc2V0SHJlZigpIHtcbiAgICBpZiAodGhpcy51cmwpIHtcbiAgICAgIHRoaXMuYXR0cnMuaHJlZiA9IHRoaXMudXJsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuYXR0cnMuaHJlZiA9IHJvdXRlci5jcmVhdGVTdGF0ZVVybCh0aGlzLnN0YXRlLCB0aGlzLnBhcmFtcywgdGhpcy5xdWVyeSwgdGhpcy5oYXNoKTtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9hLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==